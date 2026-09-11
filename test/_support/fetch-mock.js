/**
 * Test support: a deterministic `fetch` replacement.
 *
 * The suite must never touch the network. Beyond flakiness, several modules
 * branch to a live LLM call when an API key happens to be present in the
 * developer's .env, which made `npm test` both non-deterministic and billable.
 *
 * This file lives under test/ and is therefore executed by `node --test` as a
 * test file containing zero tests. That is harmless - keep it side-effect free.
 */

/**
 * Installs a stub `globalThis.fetch` that answers from `routes`.
 *
 * @param {Array<{match: string|RegExp|((url: string) => boolean), status?: number, json?: unknown, text?: string, headers?: Record<string,string>}>} routes
 * @param {{onUnmatched?: 'throw'|'empty'}} [options]
 * @returns {{restore: () => void, calls: string[]}}
 */
export function installFetchMock(routes = [], options = {}) {
  const onUnmatched = options.onUnmatched || 'throw';
  const original = globalThis.fetch;
  const calls = [];

  globalThis.fetch = async (input, init = {}) => {
    const url = typeof input === 'string' ? input : input?.url ?? String(input);
    calls.push(url);

    if (init.signal?.aborted) {
      throw Object.assign(new Error('The operation was aborted'), { name: 'AbortError' });
    }

    const route = routes.find(r => {
      if (typeof r.match === 'function') return r.match(url);
      if (r.match instanceof RegExp) return r.match.test(url);
      return url.includes(r.match);
    });

    if (!route) {
      if (onUnmatched === 'empty') return makeResponse({ status: 404, text: 'not found' });
      throw new Error(
        `Unmocked network call in test: ${url}\n` +
        'Add a route to installFetchMock(), or pass { onUnmatched: "empty" }.'
      );
    }

    if (route.throws) throw route.throws;
    return makeResponse(route);
  };

  return {
    calls,
    restore() {
      globalThis.fetch = original;
    },
  };
}

function makeResponse({ status = 200, json, text, headers = {} }) {
  const bodyText = text !== undefined ? text : JSON.stringify(json ?? {});
  const headerMap = new Map(
    Object.entries({ 'content-type': 'application/json', ...headers }).map(([k, v]) => [k.toLowerCase(), v])
  );

  return {
    ok: status >= 200 && status < 300,
    status,
    statusText: status === 200 ? 'OK' : 'Error',
    headers: { get: name => headerMap.get(String(name).toLowerCase()) ?? null },
    async text() { return bodyText; },
    async json() { return JSON.parse(bodyText); },
  };
}

/**
 * Removes every provider credential from the environment so modules under test
 * take their deterministic offline path. Returns a restore function.
 */
export function clearProviderKeys() {
  const keys = [
    'GEMINI_API_KEY', 'OPENAI_API_KEY', 'BRAVE_SEARCH_API_KEY',
    'GOOGLE_SEARCH_API_KEY', 'GOOGLE_SEARCH_CX', 'TWITTER_BEARER_TOKEN',
    'X_BEARER_TOKEN', 'GITHUB_TOKEN',
  ];
  const saved = {};
  for (const k of keys) {
    saved[k] = process.env[k];
    delete process.env[k];
  }
  return () => {
    for (const [k, v] of Object.entries(saved)) {
      if (v === undefined) delete process.env[k];
      else process.env[k] = v;
    }
  };
}
