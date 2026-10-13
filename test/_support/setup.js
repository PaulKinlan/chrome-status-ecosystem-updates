/**
 * Test hermeticity guard.
 *
 * IMPORT THIS FIRST in every test file:
 *
 *     import './_support/setup.js';
 *
 * (`test/hermetic.test.js` fails if a test file forgets.)
 *
 * Why it exists: `src/config.js` snapshots credentials from `process.env` (and
 * from a developer's `.env`) at import time. Previously a test that expected
 * "no API key" silently became a *live, authenticated* call to a third party
 * whenever the developer happened to have that key configured - which made
 * `npm test` flaky, billable, and able to send real credentials from a test.
 *
 * This module guarantees, before any test body runs, that:
 *
 *  1. every provider credential held by `config` is blank;
 *  2. report/history output goes to a throwaway directory, never `reports/` or
 *     `data/`;
 *  3. any real (non-loopback) network request fails loudly instead of leaving
 *     the machine. Tests that need HTTP either mock it with `installFetchMock`
 *     or talk to a server they start on 127.0.0.1;
 *  4. hostname lookups made by the SSRF guard (`src/safe-fetch.js`) are answered
 *     by a stub instead of real DNS;
 *  5. the pause the Gemini helpers take between passes over the model chain is
 *     zero, so provoking an overload path does not make a test wait.
 *
 * Set INTEGRATION=1 to opt out of (3) for deliberately-live tests. Hostname
 * lookups (4) stay stubbed either way, so a live test that wants real DNS has to
 * say so itself with `setHostResolver()`. (No such test exists yet; the point of
 * the switch is that the guard can be lifted without the suite starting to
 * resolve names behind your back.)
 *
 * NOTE: this file sits under test/, so `node --test` also executes it directly
 * as a test file containing zero tests. Its side effects are intentionally
 * confined to the current process and a temp directory removed on exit.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { config, DEFAULT_FEATURE_STATUSES } from '../../src/config.js';
import { setHostResolver } from '../../src/safe-fetch.js';
import { retryPolicy } from '../../src/search/gemini-models.js';

/** `config` fields that hold secrets or switch on a paid/remote provider. */
export const CREDENTIAL_FIELDS = Object.freeze([
  'googleSearchApiKey',
  'googleSearchCx',
  'braveSearchApiKey',
  'githubToken',
  'twitterBearerToken',
  'geminiApiKey',
  'openaiApiKey',
]);

/** Environment variables that `config` reads credentials from. */
export const CREDENTIAL_ENV_VARS = Object.freeze([
  'GOOGLE_SEARCH_API_KEY', 'GOOGLE_SEARCH_CX', 'BRAVE_SEARCH_API_KEY', 'GITHUB_TOKEN',
  'TWITTER_BEARER_TOKEN', 'X_BEARER_TOKEN', 'GEMINI_API_KEY', 'OPENAI_API_KEY',
]);

// 1. Credentials -----------------------------------------------------------
for (const field of CREDENTIAL_FIELDS) config[field] = '';
for (const name of CREDENTIAL_ENV_VARS) delete process.env[name];

// Environment knobs that would change what a test run does.
config.maxFeatures = null;
config.searchProvider = 'auto';
config.featureStatuses = [...DEFAULT_FEATURE_STATUSES];
config.targetMilestones = 'last-5';
config.concurrency = 4;
config.crawlDeadlineMinutes = 0;
config.chromeStatusApiUrl = 'https://chromestatus.com';
config.chromeStatusLiteUrl = 'https://chromestatuslite.com';

// 2. Output paths ----------------------------------------------------------
export const testRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'cse-test-'));
config.reportsDir = path.join(testRoot, 'reports');
config.dataDir = path.join(testRoot, 'data');
config.historyFilePath = path.join(config.dataDir, 'history.json');
process.on('exit', () => {
  try {
    fs.rmSync(testRoot, { recursive: true, force: true });
  } catch {
    // Best effort: a leftover temp dir is not worth failing a run over.
  }
});

// 3. Network ---------------------------------------------------------------
/** The genuine `fetch`, for tests that deliberately hit a local server. */
export const realFetch = globalThis.fetch;

function isLoopbackUrl(url) {
  try {
    const host = new URL(url).hostname.toLowerCase().replace(/^\[|\]$/g, '').replace(/\.$/, '');
    return host === 'localhost' || host === '::1' || /^127\.\d+\.\d+\.\d+$/.test(host);
  } catch {
    return false;
  }
}

globalThis.fetch = function hermeticFetch(input, init) {
  const url = typeof input === 'string' ? input : input?.url ?? String(input);
  if (process.env.INTEGRATION === '1' || isLoopbackUrl(url)) {
    return realFetch.call(globalThis, input, init);
  }
  return Promise.reject(new Error(
    `Blocked real network request during tests: ${url}\n` +
    'Mock it with installFetchMock() from test/_support/fetch-mock.js, or set INTEGRATION=1 for a deliberately-live test.'
  ));
};

// 4. DNS -------------------------------------------------------------------
// `src/safe-fetch.js` resolves a hostname before fetching it, and a DNS query
// is network access too. Answer every lookup with one routable address so the
// suite stays offline; nothing ever connects to it because `fetch` is mocked or
// guarded above. Tests of the resolution policy install their own resolver with
// `setHostResolver()` and restore this one afterwards.
export const PUBLIC_TEST_ADDRESS = '93.184.216.34';
setHostResolver(async () => [{ address: PUBLIC_TEST_ADDRESS, family: 4 }]);

// 5. Pacing ----------------------------------------------------------------
// After a pass over the Gemini models fails because of overload, production
// waits a few seconds before the next pass. A test that provokes that path must
// not wait too, so the pause is removed here; the passes themselves still run.
retryPolicy.delayMs = 0;
retryPolicy.jitterMs = 0;
