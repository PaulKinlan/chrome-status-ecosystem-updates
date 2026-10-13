/**
 * Test support: a scriptable stand-in for the Gemini API.
 *
 * `installFetchMock` answers by URL, which is not enough for the behaviour that
 * matters here: what a *particular model* says on its *n-th* call (overloaded,
 * then fine; retired; hanging). This mock hands every Gemini request to a
 * handler that sees the model, the decoded request body and how often that
 * model has been asked before, and returns one of the response specs below.
 *
 * Requests to any other host go to whatever `fetch` was installed before, so it
 * can be layered over `installFetchMock` (install that first, this second).
 *
 * This file lives under test/ and is therefore executed by `node --test` as a
 * test file containing zero tests. That is harmless - keep it side-effect free.
 */
import { makeResponse } from './fetch-mock.js';

/** A normal answer: one text part. */
export const answer = (text, extra = {}) => ({
  json: { candidates: [{ content: { parts: [{ text }] }, finishReason: 'STOP', ...extra }] },
});

/** An answer split over several parts (as models do), possibly with thought parts. */
export const answerParts = (parts, extra = {}) => ({
  json: { candidates: [{ content: { parts }, finishReason: 'STOP', ...extra }] },
});

/** What the API sends for a failed request. */
export const apiError = (status, message, code) => ({
  status,
  json: { error: { code: status, message, status: code } },
});

/** HTTP 503 as the real API words it when a model is swamped. */
export const overloaded = () =>
  apiError(503, 'This model is currently experiencing high demand. Spikes in demand are usually temporary.', 'UNAVAILABLE');

/** HTTP 404 for a model name the API no longer serves. */
export const notFound = model =>
  apiError(404, `models/${model} is not found for API version v1beta, or is not supported for generateContent.`, 'NOT_FOUND');

/** A request that never got an answer before its deadline. */
export const hangs = () => ({
  throws: Object.assign(new Error('Request to https://generativelanguage.googleapis.com timed out after 60000ms'), {
    name: 'TimeoutError',
  }),
});

/** The JSON object the synthesis prompt asks for. */
export const SYNTHESIS = Object.freeze({
  executiveSummary: 'A clear summary of where this API stands.',
  communityPulse: 'Developers are cautiously interested.',
  browserAlignmentSummary: 'Other engines have not objected.',
  developerActionableAdvice: 'Use it behind feature detection.',
  sentiment: 'Positive',
});

/** The synthesis object wrapped the way models usually wrap it. */
export const synthesisText = (overrides = {}) => '```json\n' + JSON.stringify({ ...SYNTHESIS, ...overrides }) + '\n```';

/**
 * @param {(call: {model: string, url: string, headers: Record<string, string>, body: any, grounded: boolean, index: number, nth: number}, calls: object[]) => object|Promise<object>} handler
 *   returns a spec from the builders above (or `{ status, json | text }`).
 *   `headers` has lower-cased names, so credentials are visible to assertions.
 * @returns {{calls: Array<{model: string, url: string, headers: Record<string, string>, body: any, grounded: boolean, index: number, nth: number}>, restore: () => void}}
 */
export function installGeminiMock(handler) {
  const previous = globalThis.fetch;
  const calls = [];

  globalThis.fetch = async (input, init = {}) => {
    const url = typeof input === 'string' ? input : input?.url ?? String(input);
    const model = url.match(/\/models\/([^:/]+):generateContent/)?.[1];
    if (!url.includes('generativelanguage.googleapis.com') || !model) {
      return previous(input, init);
    }

    const body = JSON.parse(init.body);
    const call = {
      model,
      url,
      headers: Object.fromEntries(new Headers(init.headers).entries()),
      body,
      grounded: Boolean(body.tools),
      index: calls.length,
      nth: calls.filter(earlier => earlier.model === model).length,
    };
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
