import { hostKey } from './search/urls.js';

/**
 * Run-wide record of how the search and enrichment APIs answered.
 *
 * Why this exists: each of these providers degrades to "no results" when it refuses a request, so one that rejects
 * most of what it is sent (an expired token, a query it cannot read, an exhausted quota) fails nothing. The report is
 * published and the week looks like one in which nobody said anything. X answered HTTP 400 to 13% of the queries
 * behind the last published week and nothing showed it until the log was read by hand.
 *
 * The HTTP client counts every response it hands back (`recordProviderResponse`, see src/http.js), the runner reads
 * the counts when the crawl is over, and src/guardrails.js judges them.
 */

/** The providers that are counted, by the host their requests go to. A response from any other host is not recorded. */
const PROVIDER_BY_HOST = new Map([
  ['api.twitter.com', 'x'],
  ['api.x.com', 'x'],
  ['api.search.brave.com', 'brave'],
  ['www.googleapis.com', 'google'],
  ['api.github.com', 'github'],
]);

/** The hosts whose answers are counted. The README lists them, and test/docs.test.js keeps that list in step. */
export const PROVIDER_HOSTS = Object.freeze([...PROVIDER_BY_HOST.keys()]);

/** What a reader is told each provider is called. Also the order they are listed in. */
export const PROVIDER_NAMES = Object.freeze({
  x: 'X (Twitter) API',
  brave: 'Brave Search',
  google: 'Google Custom Search',
  github: 'GitHub API',
});

/** provider -> { responses, clientErrors, statuses: Map<status, count> }: an entry for every provider that is counted. */
let state = emptyState();

function emptyState() {
  return new Map(Object.keys(PROVIDER_NAMES).map(provider => [provider, { responses: 0, clientErrors: 0, statuses: new Map() }]));
}

/**
 * An answer that says the request itself was wrong or refused: any 4xx except 404 and 410. Those two say that
 * something is not there (an issue that was deleted, a package that was withdrawn), which is an answer and not a fault.
 */
export function isClientError(status) {
  return status >= 400 && status < 500 && status !== 404 && status !== 410;
}

/**
 * Records a response that the HTTP client handed to its caller. A request is counted under the provider whose host it
 * was sent to, whatever redirects led it elsewhere. Anything that is not a status code, and any other host, is ignored.
 */
export function recordProviderResponse(url, status) {
  if (!Number.isInteger(status) || status < 100 || status > 599) return;
  // A host that is not a provider has no provider, and `state` has no entry for no provider.
  const entry = state.get(PROVIDER_BY_HOST.get(hostKey(url)));
  if (!entry) return;

  entry.responses++;
  if (isClientError(status)) entry.clientErrors++;
  entry.statuses.set(status, (entry.statuses.get(status) || 0) + 1);
}

/**
 * A plain-object copy of the counts, safe to serialise into telemetry: one entry for each provider that answered at
 * least once, `{ responses, clientErrors, statuses: { '200': 31, '400': 2 } }`.
 */
export function snapshotProviderStats() {
  const snapshot = {};
  for (const [provider, entry] of state) {
    if (entry.responses === 0) continue;
    snapshot[provider] = {
      responses: entry.responses,
      clientErrors: entry.clientErrors,
      statuses: Object.fromEntries(entry.statuses),
    };
  }
  return snapshot;
}

/** Lines for the end-of-run log; none for a provider that was never asked. */
export function describeProviderStats(snapshot = snapshotProviderStats()) {
  return Object.keys(PROVIDER_NAMES)
    .filter(provider => snapshot[provider]?.responses > 0)
    .map(provider => {
      const { responses, clientErrors, statuses } = snapshot[provider];
      const answers = Object.entries(statuses).map(([status, count]) => `${status} ×${count}`).join(', ');
      return `${PROVIDER_NAMES[provider]}: ${responses} response(s) (${answers})` +
        (clientErrors > 0 ? `, ${clientErrors} of them client errors` : '');
    });
}

/** Clears every count. Call at the start of a run (and in tests). */
export function resetProviderStats() {
  state = emptyState();
}
