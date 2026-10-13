/**
 * Test support: a scriptable stand-in for the OpenAI chat-completions API.
 *
 * Counterpart of gemini-mock.js. Every request to api.openai.com is handed to a
 * handler that sees the decoded request (headers and JSON body included, which
 * `installFetchMock` does not expose) and returns a response spec: `{ status,
 * json | text, headers }` or `{ throws }`. Requests to any other host go to
 * whatever `fetch` was installed before, so mocks can be layered; restore in
 * the reverse order of installation.
 *
 * This file lives under test/ and is therefore executed by `node --test` as a
 * test file containing zero tests. That is harmless - keep it side-effect free.
 */
import { makeResponse } from './fetch-mock.js';

/** A normal reply whose message text is `content`. */
export const completion = content => ({
  json: { choices: [{ index: 0, message: { role: 'assistant', content }, finish_reason: 'stop' }] },
});

/** What the API sends for a failed request. `retry-after: 0` keeps the shared client's backoff from sleeping. */
export const openAiError = (status, message, code) => ({
  status,
  json: { error: { message, type: 'error', code } },
  headers: { 'retry-after': '0' },
});

/**
 * @param {(call: {url: string, headers: Record<string,string>, body: any, index: number}, calls: object[]) => object|Promise<object>} handler
 * @returns {{calls: Array<{url: string, headers: Record<string,string>, body: any, index: number}>, restore: () => void}}
 */
export function installOpenAiMock(handler) {
  const previous = globalThis.fetch;
  const calls = [];

  globalThis.fetch = async (input, init = {}) => {
    const url = typeof input === 'string' ? input : input?.url ?? String(input);
    if (!url.startsWith('https://api.openai.com/')) return previous(input, init);

    const call = { url, headers: init.headers, body: JSON.parse(init.body), index: calls.length };
    calls.push(call);

    const spec = await handler(call, calls);
    if (spec.throws) throw spec.throws;
    return makeResponse(spec);
  };

  return {
    calls,
    restore() {
      globalThis.fetch = previous;
    },
  };
}
