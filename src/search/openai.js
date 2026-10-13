import { config } from '../config.js';
import { logger } from '../logger.js';
import { fetchWithTimeout, readJsonLimited, readTextLimited } from '../http.js';
import { extractJsonFromText } from './gemini-grounding.js';
import { LLM_FAILURE, httpFailure, classifyError, recordLlmFailure, recordLlmSuccess, summarizeApiError } from '../llm-stats.js';

const OPENAI_CHAT_URL = 'https://api.openai.com/v1/chat/completions';
export const OPENAI_MODEL = 'gpt-4o-mini';

/**
 * Asks OpenAI for a JSON object and returns the parsed value.
 *
 * The analyzer, the relevance verifier and the query planner each carried their
 * own copy of this request, and each swallowed every failure at debug level.
 * Sharing one implementation means the fallback path is counted in the run's
 * LLM statistics (see src/llm-stats.js) exactly like the Gemini path instead of
 * failing invisibly.
 *
 * Returns `{ parsed, text }`, or null when OpenAI is not configured or the
 * attempt did not produce JSON that `accept` is happy with.
 *
 * @param {object} args
 * @param {string} args.system     system message
 * @param {string} args.prompt     user message
 * @param {string} args.stage      stats bucket, e.g. 'openai/synthesis'
 * @param {string} args.label      log label for timeouts and retries
 * @param {number} [args.temperature]
 * @param {number} [args.timeoutMs]
 * @param {number} [args.retries]   per-request retries for 429/5xx/network errors; the shared default when omitted
 * @param {(parsed: any) => boolean} [args.accept]  rejects JSON that parses but is not usable
 */
export async function callOpenAiJson({ system, prompt, stage, label, temperature = 0.2, timeoutMs = 45_000, retries, accept }) {
  if (!config.openaiApiKey) return null;

  const fail = (cause, detail) => {
    recordLlmFailure(stage, cause, detail, OPENAI_MODEL);
    logger.debug(`[${label}] ${detail}`);
    return null;
  };

  let res;
  try {
    res = await fetchWithTimeout(OPENAI_CHAT_URL, {
      method: 'POST',
      label,
      timeoutMs,
      retries,
      headers: {
        'Authorization': `Bearer ${config.openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: prompt },
        ],
        response_format: { type: 'json_object' },
        temperature,
      }),
    });
  } catch (err) {
    return fail(classifyError(err), err.message);
  }

  if (!res.ok) {
    // The error body is reduced to its message: OpenAI's 401 quotes (a masked
    // form of) the key it rejected, and this line goes to the CI log.
    const body = await readTextLimited(res, 8192).catch(() => '');
    return fail(httpFailure(res.status), summarizeApiError(body) || `HTTP ${res.status}`);
  }

  let text;
  let cutOff = false;
  try {
    const data = await readJsonLimited(res);
    text = data?.choices?.[0]?.message?.content;
    cutOff = data?.choices?.[0]?.finish_reason === 'length';
  } catch (err) {
    return fail(err instanceof SyntaxError ? LLM_FAILURE.UNPARSEABLE : classifyError(err), `the response body could not be read: ${err.message}`);
  }

  if (!text) return fail(LLM_FAILURE.EMPTY, 'the response had no message content');

  // See extractJsonFromText: an answer that was cut off must not be rescued by taking an inner array out of it.
  const parsed = extractJsonFromText(text, { salvageArrays: !cutOff });
  if (parsed === null) {
    return cutOff
      ? fail(LLM_FAILURE.TRUNCATED, 'the answer was cut off by the output token limit')
      : fail(LLM_FAILURE.UNPARSEABLE, 'no JSON in the response');
  }
  if (accept && !accept(parsed)) {
    return cutOff
      ? fail(LLM_FAILURE.TRUNCATED, 'the answer was cut off by the output token limit, so only a fragment of it parsed')
      : fail(LLM_FAILURE.UNUSABLE, 'the JSON lacks the fields that are needed');
  }

  recordLlmSuccess(stage, OPENAI_MODEL);
  return { parsed, text };
}
