import { config } from '../config.js';
import { cleanUrl, extractDomain, canonicalUrl, isGroundingRedirect, isWebUrl } from './urls.js';
import { logger } from '../logger.js';
import { fetchWithTimeout, mapWithConcurrency, readJsonLimited, readTextLimited } from '../http.js';
import { resolveRedirect, NoRedirectError, UnsafeUrlError } from '../safe-fetch.js';
import { GROUNDING_DROP, recordGroundedSources } from '../grounding-stats.js';
import {
  LLM_FAILURE,
  httpFailure,
  classifyError,
  recordLlmFailure,
  recordLlmSuccess,
  summarizeApiError,
} from '../llm-stats.js';
import { modelCandidates, claimModel, recordModelResult, isTransientFailure, retryPolicy } from './gemini-models.js';

// The model chain and its health tracking live in ./gemini-models.js; re-exported
// because this module has always been where callers look for it.
export { modelCandidates };

const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models';

/**
 * Default output budget per call, in tokens.
 *
 * It covers the model's hidden "thinking" as well as the visible answer, so a
 * budget sized for the answer alone truncates the answer. At the previous 4096
 * the relevance verifier ran out (`finishReason: MAX_TOKENS`) when thinking
 * alone took 3,500-3,900 tokens, leaving a few hundred tokens of cut-off JSON;
 * grounded calls were measured using up to about 4,000 (roughly 2,400 thinking
 * plus 1,600 answer). Unused budget costs nothing.
 */
export const DEFAULT_MAX_OUTPUT_TOKENS = 8192;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Builds request headers for the Gemini API.
 *
 * The key goes in `x-goog-api-key`, never the query string: URLs end up in
 * logs, proxies, and error messages, and this crawler prints URLs on failure.
 */
export function geminiHeaders() {
  return {
    'Content-Type': 'application/json',
    'x-goog-api-key': config.geminiApiKey,
  };
}

/**
 * Extracts and parses JSON from model output text,
 * handling ```json ... ``` blocks, raw JSON, or substring braces.
 *
 * Still needed for grounded calls, where a response schema cannot be combined
 * with the search tool. Prefer `callGeminiJson` for everything else.
 *
 * The last resort is to take whatever sits between the first `[` and the last
 * `]`. For an answer that was cut off by the token limit that returns an inner
 * array of the unfinished object (`{"summary":"...[1]. Devs say` gives `[1]`),
 * which then passes for the answer. `salvageArrays: false` skips it.
 */
export function extractJsonFromText(text, { salvageArrays = true } = {}) {
  if (!text) return null;

  // 1. Try markdown code block ```json ... ```
  const codeBlockMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (codeBlockMatch) {
    try {
      return JSON.parse(codeBlockMatch[1].trim());
    } catch {}
  }

  // 2. Try raw string
  try {
    return JSON.parse(text.trim());
  } catch {}

  // 3. Try finding substring between outermost { and }
  const firstBrace = text.indexOf('{');
  const lastBrace = text.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace > firstBrace) {
    try {
      return JSON.parse(text.slice(firstBrace, lastBrace + 1));
    } catch {}
  }

  // 4. Try an array payload
  if (!salvageArrays) return null;
  const firstBracket = text.indexOf('[');
  const lastBracket = text.lastIndexOf(']');
  if (firstBracket !== -1 && lastBracket > firstBracket) {
    try {
      return JSON.parse(text.slice(firstBracket, lastBracket + 1));
    } catch {}
  }

  return null;
}

/**
 * The text a candidate actually contains: every text part except thought
 * summaries, joined without a separator (what the official SDKs' `.text`
 * accessor does).
 *
 * Reading only `parts[0]` loses the answer whenever the model splits its reply
 * over several parts or leads with a thought part.
 */
export function candidateText(candidate) {
  const parts = candidate?.content?.parts;
  if (!Array.isArray(parts)) return '';
  return parts
    .filter(part => typeof part?.text === 'string' && part.thought !== true)
    .map(part => part.text)
    .join('');
}

/**
 * Records a request that failed outright (stats and model health) and returns
 * it in the shape the model loop expects.
 */
function failed(model, stage, label, cause, detail, error = new Error(`Gemini API (${model}) ${detail}`)) {
  recordLlmFailure(stage, cause, detail, model);
  recordModelResult(model, cause);
  logger.debug(`[${label}] ${error.message}`);
  return { ok: false, error, transient: isTransientFailure(cause) };
}

/**
 * Records a response that arrived fine but did not contain what was needed.
 * The model is up, so its health is untouched; only the statistics change, and
 * asking the same model again later would not help, so it is not transient.
 */
function rejected(model, stage, label, cause, detail) {
  recordLlmFailure(stage, cause, detail, model);
  const error = new Error(`Gemini API (${model}) ${detail}`);
  logger.debug(`[${label}] ${error.message}`);
  return { ok: false, error, transient: false };
}

/**
 * One `generateContent` request against one model. Never throws: the outcome is
 * recorded and handed back so the caller can move on to the next model.
 *
 * `fetchWithTimeout` is told not to retry: whether and where to try again is
 * decided across the whole model chain (see `askModels`), which is a better
 * second chance than asking the same overloaded model again half a second later.
 */
async function requestModel(model, body, { label, timeoutMs, stage }) {
  let res;
  try {
    res = await fetchWithTimeout(`${GEMINI_ENDPOINT}/${model}:generateContent`, {
      method: 'POST',
      label,
      timeoutMs,
      retries: 0,
      headers: geminiHeaders(),
      body: JSON.stringify(body),
    });
  } catch (err) {
    return failed(model, stage, label, classifyError(err), err.message, err);
  }

  if (!res.ok) {
    const detail = summarizeApiError(await readTextLimited(res, 8192).catch(() => '')) || `HTTP ${res.status}`;
    return failed(
      model,
      stage,
      label,
      httpFailure(res.status),
      detail,
      new Error(`Gemini API (${model}) returned ${res.status}: ${detail}`)
    );
  }

  let data;
  try {
    data = await readJsonLimited(res);
  } catch (err) {
    const cause = err instanceof SyntaxError ? LLM_FAILURE.UNPARSEABLE : classifyError(err);
    return failed(model, stage, label, cause, `the response body could not be read: ${err.message}`, err);
  }

  recordModelResult(model, null);
  const candidate = data?.candidates?.[0];
  return { ok: true, data, candidate, text: candidateText(candidate), finishReason: candidate?.finishReason };
}

/**
 * Runs one attempt, keeping an exception in the code that handles the answer
 * from costing the models that have not been asked yet.
 *
 * `requestModel` itself never throws; what can is the callback's own
 * post-processing (reading grounding data, the caller's `accept`), on a
 * response shape nobody planned for. That attempt is recorded as a failure.
 */
async function runAttempt(stage, model, attempt) {
  try {
    return await attempt(model);
  } catch (err) {
    recordLlmFailure(stage, LLM_FAILURE.INTERNAL, err.message, model);
    logger.debug(`[${stage}] Handling the ${model} response failed: ${err.stack || err.message}`);
    return { ok: false, error: err, transient: false };
  }
}

/**
 * Asks the models in order until one produces an accepted answer.
 *
 * `attempt(model)` resolves to `{ ok: true, value }` or
 * `{ ok: false, error, transient }`. When a whole pass fails and at least one
 * failure was transient (overload, timeout, network), the models are asked once
 * more after a pause (`retryPolicy`); demand spikes clear within seconds.
 *
 * A model that has been failing is only sent one request at a time (see
 * `claimModel`); a call that finds the model busy with someone else's test goes
 * on to the next model. If every model is busy like that the call gives up
 * without sending anything: more requests to models that are down would only
 * add waiting.
 *
 * @returns {Promise<{value: any, error: Error|null}>} `value` is null when nothing worked
 */
async function askModels(stage, attempt) {
  let lastError = null;

  for (let pass = 0; pass < retryPolicy.passes; pass++) {
    const models = modelCandidates();
    if (models.length === 0) {
      // Only count this when nothing was even tried: after a failed first pass
      // the individual failures have already been recorded.
      if (pass === 0) {
        recordLlmFailure(stage, LLM_FAILURE.NO_MODEL, 'every configured model was rejected as not found; check GEMINI_MODEL');
      }
      break;
    }

    let transient = false;
    let asked = 0;
    for (const model of models) {
      if (!claimModel(model)) continue;

      asked++;
      const outcome = await runAttempt(stage, model, attempt);
      if (outcome.ok) return { value: outcome.value, error: null };
      lastError = outcome.error;
      transient = transient || outcome.transient === true;
    }

    if (asked === 0) {
      if (pass === 0) {
        recordLlmFailure(stage, LLM_FAILURE.COOLING_DOWN, 'every model is being tested after repeated failures, so no request was sent');
      }
      break;
    }

    if (!transient || pass === retryPolicy.passes - 1) break;
    await sleep(retryPolicy.delayMs + Math.random() * retryPolicy.jitterMs);
  }

  return { value: null, error: lastError };
}

/** Why a successful response carried no text. */
function whyNoText(data, candidate) {
  if (candidate?.finishReason === 'MAX_TOKENS') {
    return { cause: LLM_FAILURE.TRUNCATED, detail: 'the output token limit was reached before any text was written' };
  }
  const blocked = data?.promptFeedback?.blockReason;
  return {
    cause: LLM_FAILURE.EMPTY,
    detail: blocked ? `the prompt was blocked (${blocked})` : `no text in the response (finishReason: ${candidate?.finishReason || 'none'})`,
  };
}

/** Why a response with text yielded no JSON. */
function whyNotJson(finishReason, text) {
  return finishReason === 'MAX_TOKENS'
    ? { cause: LLM_FAILURE.TRUNCATED, detail: 'the answer was cut off by the output token limit' }
    : { cause: LLM_FAILURE.UNPARSEABLE, detail: `no JSON in the answer (finishReason: ${finishReason || 'none'}, ${text.length} chars)` };
}

/** Why JSON that parsed was still not accepted. */
function whyUnusable(finishReason) {
  return finishReason === 'MAX_TOKENS'
    ? { cause: LLM_FAILURE.TRUNCATED, detail: 'the answer was cut off by the output token limit, so only a fragment of it parsed' }
    : { cause: LLM_FAILURE.UNUSABLE, detail: 'the JSON lacks the fields that are needed' };
}

/**
 * Calls Gemini asking for schema-constrained JSON.
 *
 * Using responseSchema removes the need to scrape JSON back out of prose, which
 * previously failed silently and fell through to the heuristic path with no
 * warning.
 *
 * Models are tried in order until one gives an answer that parses and, when
 * `accept` is given, passes it. Every attempt is counted in the run's LLM
 * statistics under `stage`.
 *
 * @param {string} prompt
 * @param {{
 *   schema: object,
 *   temperature?: number,
 *   systemInstruction?: string,
 *   label?: string,
 *   maxOutputTokens?: number,
 *   stage?: string,
 *   accept?: (parsed: any) => boolean,
 * }} options `accept` rejects JSON that parses but is not usable, so the next model gets a go
 */
export async function callGeminiJson(prompt, options = {}) {
  if (!config.geminiApiKey) return null;

  const {
    schema,
    temperature = 0.1,
    systemInstruction,
    label = 'Gemini',
    maxOutputTokens = DEFAULT_MAX_OUTPUT_TOKENS,
    stage = 'gemini/json',
    accept,
  } = options;

  const { value, error } = await askModels(stage, async model => {
    const body = {
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature,
        maxOutputTokens,
        responseMimeType: 'application/json',
        ...(schema ? { responseSchema: schema } : {}),
      },
    };
    if (systemInstruction) {
      body.systemInstruction = { parts: [{ text: systemInstruction }] };
    }

    const response = await requestModel(model, body, { label, timeoutMs: 45_000, stage });
    if (!response.ok) return response;

    const { text, finishReason } = response;
    if (!text) {
      const why = whyNoText(response.data, response.candidate);
      return rejected(model, stage, label, why.cause, why.detail);
    }

    const parsed = extractJsonFromText(text, { salvageArrays: finishReason !== 'MAX_TOKENS' });
    if (parsed === null) {
      const why = whyNotJson(finishReason, text);
      return rejected(model, stage, label, why.cause, why.detail);
    }

    if (accept && !accept(parsed)) {
      const why = whyUnusable(finishReason);
      return rejected(model, stage, label, why.cause, why.detail);
    }

    recordLlmSuccess(stage, model);
    return { ok: true, value: { model, parsed, text } };
  });

  if (!value && error) logger.debug(`[${label}] All model candidates failed: ${error.message}`);
  return value;
}

/** What the sources Gemini cites are called in the report. */
const GROUNDED_SOURCE_NAME = 'Google Search (Gemini Grounded)';

/** How many redirect links are followed at once. */
const RESOLVE_CONCURRENCY = 4;

/**
 * What one redirect lookup may take, retries and the wait before one included.
 * The service answers in 30-200 ms; a link that takes longer is not worth
 * holding a feature up for.
 */
const RESOLVE_TIMEOUT_MS = 4_000;

/** How much of the answer's own wording becomes a source's snippet. */
const SNIPPET_SEGMENTS = 2;
const SNIPPET_MAX_LENGTH = 300;

/** `text` without whatever `isTrimmed` accepts at its end, in linear time (the regex for this backtracks quadratically). */
function trimEndWhile(text, isTrimmed) {
  let end = text.length;
  while (end > 0 && isTrimmed(text[end - 1])) end--;
  return text.slice(0, end);
}

/**
 * Tidies a stretch of the model's answer for use as a snippet.
 *
 * For a synthesis the answer is a JSON block, so a stretch can begin or end in
 * the middle of it: `"communityPulse": "Developers like it.",`.
 */
function tidyAnswerText(value) {
  if (typeof value !== 'string') return '';
  const withoutKey = value
    .replace(/```(?:json)?/gi, ' ')
    .replace(/^[\s{[,]*"[A-Za-z][\w-]*"\s*:\s*"?/, '');
  return trimEndWhile(withoutKey, ch => /[\s",}\]]/.test(ch))
    .replace(/\\n/g, ' ')
    .replace(/\\"/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Which stretches of the answer each source backs, by the source's position in
 * `groundingChunks`. Gemini reports this as `groundingSupports`: a segment of
 * the answer and the sources it rests on.
 */
function answerTextByChunk(groundingSupports) {
  const byChunk = new Map();
  for (const support of groundingSupports) {
    const text = tidyAnswerText(support?.segment?.text);
    if (!text || !Array.isArray(support?.groundingChunkIndices)) continue;
    for (const index of support.groundingChunkIndices) {
      const texts = byChunk.get(index) || [];
      texts.push(text);
      byChunk.set(index, texts);
    }
  }
  return byChunk;
}

/**
 * Reads the grounding data of a candidate: the queries Google was asked, the
 * sources cited (`groundingChunks`, as Gemini gave them) and which stretches of
 * the answer rest on which source.
 */
function readGrounding(candidate) {
  const groundingMeta = candidate?.groundingMetadata || {};
  const webSearchQueries = Array.isArray(groundingMeta.webSearchQueries)
    ? groundingMeta.webSearchQueries.filter(query => typeof query === 'string')
    : [];
  const groundingChunks = Array.isArray(groundingMeta.groundingChunks) ? groundingMeta.groundingChunks : [];
  const groundingSupports = Array.isArray(groundingMeta.groundingSupports) ? groundingMeta.groundingSupports : [];

  if (webSearchQueries.length > 0) {
    logger.debug(`Google Search Grounding executed queries: ${webSearchQueries.map(q => '"' + q + '"').join(', ')}`);
  }

  return { webSearchQueries, groundingChunks, groundingSupports };
}

/**
 * The distinct web sources an answer cites, still as Gemini gave them: the link
 * (nearly always a redirect), a title (nearly always only the site's name) and
 * the stretches of the answer that rest on the source.
 */
function listSources(groundingChunks, groundingSupports) {
  const backing = answerTextByChunk(groundingSupports);
  const sources = new Map();

  groundingChunks.forEach((chunk, index) => {
    const uri = chunk?.web?.uri;
    if (typeof uri !== 'string' || !uri) return;
    const title = typeof chunk.web.title === 'string' ? chunk.web.title : '';

    const source = sources.get(uri) || { uri, title, texts: [] };
    if (!source.title) source.title = title;
    for (const text of backing.get(index) || []) {
      if (!source.texts.includes(text)) source.texts.push(text);
    }
    sources.set(uri, source);
  });

  return [...sources.values()];
}

/** Which of `GROUNDING_DROP` a failed lookup counts as. */
function dropReason(err) {
  if (err instanceof UnsafeUrlError) return GROUNDING_DROP.UNSAFE;
  if (err instanceof NoRedirectError) {
    return err.status === 404 || err.status === 410 ? GROUNDING_DROP.EXPIRED : GROUNDING_DROP.NO_REDIRECT;
  }
  return classifyError(err) === LLM_FAILURE.TIMEOUT ? GROUNDING_DROP.TIMEOUT : GROUNDING_DROP.NETWORK;
}

/** A source's snippet: the first stretches of the answer that rest on it, shortened to a sentence or two. */
function snippetFrom(texts) {
  const joined = texts.slice(0, SNIPPET_SEGMENTS).join(' ');
  return joined.length > SNIPPET_MAX_LENGTH ? `${joined.slice(0, SNIPPET_MAX_LENGTH - 1).trimEnd()}…` : joined;
}

/**
 * Turns the sources of an answer into article records that point at real pages.
 *
 * Gemini cites a page through a link on a Google host that stands in for it for
 * about a month and reveals nothing about it, so every such link is followed
 * once, now, to the address it names. A link that cannot be followed (expired,
 * not a redirect, an unsafe target, a timeout) costs the source: nothing is
 * kept that would be a dead link in a published report within weeks. Links that
 * are not redirects are used as they are, if they are web addresses.
 *
 * Two sources that name the same page (compared by `canonicalUrl`) become one,
 * and what the answer says about either is kept. The snippet is that wording, the
 * one thing that is specific to the source; it used to be the start of the whole
 * answer, the same for every source. A source with no supporting wording has no
 * snippet.
 *
 * Every outcome is counted in the run's grounding statistics.
 */
async function resolveGroundedSources(sources) {
  const dropped = {};
  const drop = (reason, uri, detail) => {
    dropped[reason] = (dropped[reason] || 0) + 1;
    logger.debug(`[Grounding] Dropped ${uri}: ${reason}${detail ? ` (${detail})` : ''}`);
  };

  const outcomes = await mapWithConcurrency(sources, RESOLVE_CONCURRENCY, async source => {
    if (!isGroundingRedirect(source.uri)) {
      return isWebUrl(source.uri)
        ? { source, url: source.uri, redirect: false }
        : { source, reason: GROUNDING_DROP.INVALID, detail: 'not a web address', redirect: false };
    }
    try {
      const url = await resolveRedirect(source.uri, {
        timeoutMs: RESOLVE_TIMEOUT_MS,
        retries: 1,
        label: 'Grounding Redirect',
        headers: { 'User-Agent': 'chrome-status-ecosystem-tracker/1.0' },
      });
      // The link must have led to a page: not on to another of Google's links, which would be as unreadable, and
      // not to an address with credentials in it, which nothing published should carry.
      if (isGroundingRedirect(url)) {
        return { source, reason: GROUNDING_DROP.NO_REDIRECT, detail: 'the link led on to another redirect link', redirect: true };
      }
      if (!isWebUrl(url)) {
        return { source, reason: GROUNDING_DROP.UNSAFE, detail: 'the page address is not a plain web address', redirect: true };
      }
      return { source, url, redirect: true };
    } catch (err) {
      return { source, reason: dropReason(err), detail: err?.message, redirect: true };
    }
  });

  let redirects = 0;
  let resolved = 0;
  let duplicates = 0;
  const byPage = new Map();

  for (const { value: outcome } of outcomes) {
    const { source, url, reason, detail, redirect } = outcome;
    if (redirect) redirects++;
    if (reason) {
      drop(reason, source.uri, detail);
      continue;
    }
    if (redirect) resolved++;

    const key = canonicalUrl(url);
    const page = byPage.get(key);
    if (!page) {
      byPage.set(key, { source, url, texts: [...source.texts] });
      continue;
    }
    duplicates++;
    for (const text of source.texts) {
      if (!page.texts.includes(text)) page.texts.push(text);
    }
  }

  const groundedArticles = [...byPage.values()].map(({ source, url, texts }) => ({
    source: GROUNDED_SOURCE_NAME,
    type: 'article',
    title: source.title || extractDomain(url),
    url: cleanUrl(url),
    domain: extractDomain(url),
    isGrounded: true,
    snippet: snippetFrom(texts),
  }));

  recordGroundedSources({ found: sources.length, redirects, resolved, duplicates, dropped });

  if (groundedArticles.length > 0) {
    logger.debug(`Google Search Grounding discovered ${groundedArticles.length} live web sources: ${groundedArticles.map(a => a.domain).filter(Boolean).join(', ')}`);
  }

  return groundedArticles;
}

/**
 * Calls the Gemini API with Google Search Grounding enabled.
 * Gemini automatically queries Google Search, fetches web content,
 * grounds its response, and returns the web pages it relied on and the queries.
 *
 * NOTE: grounded calls cannot also use a response schema, so the JSON is still
 * recovered from the prose via extractJsonFromText.
 *
 * Models are tried in order. A response counts as an answer when it has text
 * or grounding sources; with `requireJson` it must also contain JSON (that
 * `accept` approves, if given), otherwise the next model is asked. Every
 * attempt is counted in the run's LLM statistics under `stage`.
 *
 * The result is `{ model, text, parsedJson, webSearchQueries, groundingChunks,
 * groundedArticles }`, or null when no model produced an answer. `groundingChunks`
 * is what Gemini sent. `groundedArticles` is what became of it: one record per
 * distinct page, with the real address, domain and title rather than the expiring
 * redirect, and a snippet taken from what the answer says about that source (see
 * `resolveGroundedSources`). Sources whose link could not be followed are not in it.
 *
 * @param {string} prompt
 * @param {{
 *   temperature?: number,
 *   maxOutputTokens?: number,
 *   systemInstruction?: string,
 *   stage?: string,
 *   requireJson?: boolean,
 *   accept?: (parsed: any) => boolean,
 * }} [options]
 */
export async function callGeminiWithSearchGrounding(prompt, options = {}) {
  if (!config.geminiApiKey) return null;

  const { stage = 'gemini/grounded', requireJson = false, accept } = options;
  const label = 'Gemini Grounding';

  const { value, error } = await askModels(stage, async model => {
    const requestBody = {
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      // Enable native Google Search Grounding
      tools: [{ googleSearch: {} }],
      generationConfig: {
        temperature: options.temperature !== undefined ? options.temperature : 0.1,
        maxOutputTokens: options.maxOutputTokens || DEFAULT_MAX_OUTPUT_TOKENS,
      },
    };
    if (options.systemInstruction) {
      requestBody.systemInstruction = { parts: [{ text: options.systemInstruction }] };
    }

    const response = await requestModel(model, requestBody, { label, timeoutMs: 60_000, stage });
    if (!response.ok) return response;

    const { text, candidate, finishReason } = response;
    const { webSearchQueries, groundingChunks, groundingSupports } = readGrounding(candidate);
    const sources = listSources(groundingChunks, groundingSupports);

    if (!text && sources.length === 0) {
      const why = whyNoText(response.data, candidate);
      return rejected(model, stage, label, why.cause, why.detail);
    }

    const parsedJson = extractJsonFromText(text, { salvageArrays: finishReason !== 'MAX_TOKENS' });

    if (requireJson) {
      if (parsedJson === null) {
        const why = whyNotJson(finishReason, text);
        return rejected(model, stage, label, why.cause, why.detail);
      }
      if (accept && !accept(parsedJson)) {
        const why = whyUnusable(finishReason);
        return rejected(model, stage, label, why.cause, why.detail);
      }
    }

    recordLlmSuccess(stage, model);
    return { ok: true, value: { model, text, parsedJson, webSearchQueries, groundingChunks, sources } };
  });

  if (!value) {
    if (error) logger.debug(`Gemini search grounding error: ${error.message}`);
    return value;
  }

  // Only the answer that was kept has its sources followed to their pages: the
  // others (a cut-off answer, a model that was down) would be wasted lookups.
  const { sources, ...answer } = value;
  return { ...answer, groundedArticles: await resolveGroundedSources(sources) };
}
