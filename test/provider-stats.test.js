import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test, { beforeEach } from 'node:test';
import assert from 'node:assert';
import {
  PROVIDER_HOSTS,
  PROVIDER_NAMES,
  isClientError,
  recordProviderResponse,
  snapshotProviderStats,
  describeProviderStats,
  resetProviderStats,
} from '../src/provider-stats.js';

/**
 * A provider that refuses most of what it is sent fails nothing: every call degrades to "no results". The counts make
 * that visible, where it would look like a quiet week.
 */

beforeEach(resetProviderStats);

test('a fresh run has counted nothing', () => {
  assert.deepStrictEqual(snapshotProviderStats(), {});
  assert.deepStrictEqual(describeProviderStats(), []);
});

test('the providers are named for a reader, in the order they are listed', () => {
  assert.deepStrictEqual({ ...PROVIDER_NAMES }, {
    x: 'X (Twitter) API',
    brave: 'Brave Search',
    google: 'Google Custom Search',
    github: 'GitHub API',
  });
  assert.ok(Object.isFrozen(PROVIDER_NAMES));
});

test('the hosts that are counted are exactly these five, and each one is counted', () => {
  assert.deepStrictEqual([...PROVIDER_HOSTS], [
    'api.twitter.com',
    'api.x.com',
    'api.search.brave.com',
    'www.googleapis.com',
    'api.github.com',
  ]);
  assert.ok(Object.isFrozen(PROVIDER_HOSTS));
  for (const host of PROVIDER_HOSTS) {
    resetProviderStats();
    recordProviderResponse(`https://${host}/anything`, 200);
    assert.strictEqual(
      Object.values(snapshotProviderStats()).reduce((total, entry) => total + entry.responses, 0), 1,
      `a response from ${host} is counted once, under one provider`);
  }
});

test('a response is counted under the provider whose host the request went to', () => {
  const requests = {
    x: ['https://api.twitter.com/2/tweets/search/recent?query=a', 'https://api.x.com/2/tweets/search/recent'],
    brave: ['https://api.search.brave.com/res/v1/web/search?q=a'],
    google: ['https://www.googleapis.com/customsearch/v1?q=a'],
    github: ['https://api.github.com/search/issues?q=a', 'https://api.github.com/repos/o/r/issues/1'],
  };
  for (const urls of Object.values(requests)) for (const url of urls) recordProviderResponse(url, 200);

  const snapshot = snapshotProviderStats();
  for (const [provider, urls] of Object.entries(requests)) {
    assert.strictEqual(snapshot[provider].responses, urls.length, `${provider} answered ${urls.length} request(s)`);
    assert.deepStrictEqual(snapshot[provider].statuses, { 200: urls.length });
    assert.strictEqual(snapshot[provider].clientErrors, 0);
  }
  assert.deepStrictEqual(Object.keys(snapshot), ['x', 'brave', 'google', 'github']);
});

test('the address may be a URL object, in capitals, or end its host with a dot', () => {
  recordProviderResponse(new URL('https://api.github.com/search/issues'), 200);
  recordProviderResponse('HTTPS://API.GITHUB.COM/search/issues', 200);
  recordProviderResponse('https://api.github.com./search/issues', 200);
  assert.strictEqual(snapshotProviderStats().github.responses, 3);
});

test('only these exact hosts are providers: look-alikes, sub-domains and other services are not', () => {
  for (const url of [
    'https://example.com/',
    'https://api.github.com.example.org/',
    'https://evil-api.github.com/',
    'https://sub.api.github.com/',
    'https://github.com/o/r/issues/1',
    'https://raw.githubusercontent.com/o/r/main/README.md',
    'https://notapi.twitter.com/',
    'https://twitter.com/i/status/1',
    'https://api.search.brave.com.example.org/',
    'https://search.brave.com/',
    'https://generativelanguage.googleapis.com/v1beta/models',
    'https://googleapis.com/',
    'https://hn.algolia.com/api/v1/search',
    'https://registry.npmjs.org/-/v1/search',
    'https://example.com/?next=https://api.github.com/',
    'https://example.com/api.github.com',
  ]) {
    recordProviderResponse(url, 200);
    recordProviderResponse(url, 401);
  }
  assert.deepStrictEqual(snapshotProviderStats(), {});
});

test('something that is not a web address is never a provider, and never an error', () => {
  const hostile = { toString() { throw new Error('no string for you'); } };
  for (const value of [undefined, null, '', 'not a url', '/relative/path', 42, {}, [], Symbol('x'), hostile]) {
    assert.doesNotThrow(() => recordProviderResponse(value, 200), `${String(typeof value)} did not throw`);
  }
  assert.deepStrictEqual(snapshotProviderStats(), {});
});

test('only a real HTTP status is recorded', () => {
  for (const status of [undefined, null, NaN, Infinity, -Infinity, '200', 99, 0, -1, 600, 1000, 200.5, {}, [200], true]) {
    recordProviderResponse('https://api.github.com/search/issues', status);
  }
  assert.deepStrictEqual(snapshotProviderStats(), {}, 'none of them was a status');

  for (const status of [100, 599]) recordProviderResponse('https://api.github.com/search/issues', status);
  assert.deepStrictEqual(snapshotProviderStats().github.statuses, { 100: 1, 599: 1 }, 'the ends of the range are statuses');
});

test('a client error is a 4xx that does not just say the thing is not there', () => {
  for (const status of [400, 401, 402, 403, 405, 406, 408, 409, 411, 413, 418, 422, 429, 451, 499]) {
    assert.strictEqual(isClientError(status), true, `${status} is a client error`);
  }
  // 404 and 410 are answers (a deleted issue, a withdrawn package), not faults.
  for (const status of [100, 200, 204, 301, 304, 399, 404, 410, 500, 503, 599]) {
    assert.strictEqual(isClientError(status), false, `${status} is not`);
  }
});

test('responses are counted by status, and the client errors among them', () => {
  const url = 'https://api.search.brave.com/res/v1/web/search?q=a';
  for (const status of [200, 200, 200, 400, 429, 429, 404, 410, 503]) recordProviderResponse(url, status);

  assert.deepStrictEqual(snapshotProviderStats(), {
    brave: {
      responses: 9,
      clientErrors: 3,
      statuses: { 200: 3, 400: 1, 404: 1, 410: 1, 429: 2, 503: 1 },
    },
  });
});

test('providers are counted apart', () => {
  recordProviderResponse('https://api.twitter.com/2/tweets/search/recent', 400);
  recordProviderResponse('https://api.github.com/search/issues', 200);
  recordProviderResponse('https://api.github.com/search/issues', 200);

  const snapshot = snapshotProviderStats();
  assert.deepStrictEqual(snapshot.x, { responses: 1, clientErrors: 1, statuses: { 400: 1 } });
  assert.deepStrictEqual(snapshot.github, { responses: 2, clientErrors: 0, statuses: { 200: 2 } });
  assert.strictEqual(snapshot.brave, undefined, 'a provider that was never asked is not listed');
});

test('the providers come out in a fixed order, whichever answered first', () => {
  recordProviderResponse('https://api.github.com/search/issues', 200);
  recordProviderResponse('https://www.googleapis.com/customsearch/v1', 200);
  recordProviderResponse('https://api.search.brave.com/res/v1/web/search', 200);
  recordProviderResponse('https://api.twitter.com/2/tweets/search/recent', 200);
  assert.deepStrictEqual(Object.keys(snapshotProviderStats()), ['x', 'brave', 'google', 'github']);
});

test('a snapshot is a copy: changing it does not change the counts', () => {
  recordProviderResponse('https://api.github.com/search/issues', 200);
  const snapshot = snapshotProviderStats();
  snapshot.github.responses = 99;
  snapshot.github.statuses[200] = 99;
  delete snapshot.github.clientErrors;
  snapshot.brave = { responses: 1 };

  assert.deepStrictEqual(snapshotProviderStats(), { github: { responses: 1, clientErrors: 0, statuses: { 200: 1 } } });
});

test('a new run starts from nothing', () => {
  recordProviderResponse('https://api.github.com/search/issues', 403);
  resetProviderStats();
  assert.deepStrictEqual(snapshotProviderStats(), {});
  recordProviderResponse('https://api.github.com/search/issues', 200);
  assert.deepStrictEqual(snapshotProviderStats().github, { responses: 1, clientErrors: 0, statuses: { 200: 1 } });
});

test('the log says what each provider answered, and how many of those were client errors', () => {
  for (const status of [200, 200, 400]) recordProviderResponse('https://api.twitter.com/2/tweets/search/recent', status);
  recordProviderResponse('https://api.github.com/search/issues', 200);
  recordProviderResponse('https://api.github.com/repos/o/r/issues/1', 404);

  assert.deepStrictEqual(describeProviderStats(), [
    'X (Twitter) API: 3 response(s) (200 ×2, 400 ×1), 1 of them client errors',
    'GitHub API: 2 response(s) (200 ×1, 404 ×1)',
  ]);
});

test('the log describes the snapshot it is given, and ignores providers that did not answer', () => {
  const snapshot = {
    brave: { responses: 2, clientErrors: 2, statuses: { 401: 2 } },
    x: { responses: 0, clientErrors: 0, statuses: {} },
  };
  assert.deepStrictEqual(describeProviderStats(snapshot), ['Brave Search: 2 response(s) (401 ×2), 2 of them client errors']);
  assert.deepStrictEqual(describeProviderStats({}), []);
});

test('the log lists the providers in their fixed order, whatever order the snapshot was built in', () => {
  const answered = { responses: 1, clientErrors: 0, statuses: { 200: 1 } };
  assert.deepStrictEqual(describeProviderStats({ github: answered, brave: answered, x: answered }), [
    'X (Twitter) API: 1 response(s) (200 ×1)',
    'Brave Search: 1 response(s) (200 ×1)',
    'GitHub API: 1 response(s) (200 ×1)',
  ]);
});
