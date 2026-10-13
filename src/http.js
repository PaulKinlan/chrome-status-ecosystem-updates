import { logger } from './logger.js';
import { redactSecrets } from './llm-stats.js';
import { recordProviderResponse } from './provider-stats.js';

/**
 * Shared HTTP client for every outbound call in the crawler.
 *
 * Previously each module called `fetch` directly and only 8 of 25 call sites
 * set a timeout, so a single unresponsive host could stall an unattended
 * weekly run until the CI job hit its 6-hour ceiling. Routing everything
 * through here guarantees a bounded wait and consistent retry behaviour.
 */

export const DEFAULT_TIMEOUT_MS = 10_000;
export const DEFAULT_RETRIES = 2;

/** Status codes worth retrying: transient server faults and rate limits. */
const RETRYABLE_STATUS = new Set([408, 425, 429, 500, 502, 503, 504]);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * A URL as it may appear in a log line or an error message.
 *
 * Some providers take their key in the query string (Google Custom Search sends
 * `key=`), and the verbose log is exactly what people paste into issues, so a
 * URL is never printed as it is.
 */
export function redactUrl(url) {
  return redactSecrets(String(url));
}

/**
 * Honours a Retry-After header when the server sends one, otherwise backs off
 * exponentially with jitter to avoid synchronised retries across the fan-out.
 */
function backoffDelay(attempt, response) {
  const header = response?.headers?.get?.('retry-after');
  if (header) {
    const seconds = Number(header);
    if (Number.isFinite(seconds) && seconds >= 0) {
      return Math.min(seconds * 1000, 30_000);
    }
    const date = Date.parse(header);
    if (!Number.isNaN(date)) {
      return Math.min(Math.max(0, date - Date.now()), 30_000);
    }
  }
  const base = 500 * 2 ** attempt;
  return Math.min(base + Math.random() * 250, 8_000);
}

/**
 * Cancels a response we are not going to read (e.g. before retrying) so its
 * socket is released straight away instead of waiting for garbage collection.
 */
export function discardBody(res) {
  try {
    res.body?.cancel?.().catch(() => {});
  } catch {
    // Best effort only; a locked or already-closed body is not worth failing over.
  }
}

/**
 * `fetch` with a hard timeout and bounded retries.
 *
 * Resolves with the Response even for non-2xx statuses (callers already branch
 * on `res.ok`); only network errors and exhausted retries throw.
 *
 * The deadline covers the whole exchange, body included. It used to be cleared
 * as soon as the headers arrived, which meant a server that sent headers and
 * then trickled (or stalled) the body could hang `res.text()` / `res.json()`
 * indefinitely - exactly the unattended-CI hang this module exists to prevent.
 * A body read that outlives the deadline now rejects with a `TimeoutError`.
 *
 * `timeoutMs` is the budget of ONE attempt. Pass `deadline` (an absolute time,
 * `Date.now() + n`) to also bound the whole call: no attempt starts, and no
 * back-off wait runs, past it, and a retry that could not finish in time is
 * skipped, handing back the last response (or throwing the last error) instead.
 *
 * @param {string|URL} url
 * @param {RequestInit & {timeoutMs?: number, retries?: number, label?: string, deadline?: number}} [options]
 */
export async function fetchWithTimeout(url, options = {}) {
  const {
    timeoutMs = DEFAULT_TIMEOUT_MS,
    retries = DEFAULT_RETRIES,
    label = '',
    deadline,
    signal: callerSignal,
    ...init
  } = options;

  const tag = label ? `[${label}] ` : '';
  const timeLeft = () => (deadline === undefined ? Infinity : deadline - Date.now());
  // Waiting `delay` and then making another attempt only makes sense if there is room for both.
  const canWait = delay => delay < timeLeft();
  let lastError = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    if (callerSignal?.aborted) throw new Error(`${tag}Aborted before request`);

    const attemptMs = Math.min(timeoutMs, timeLeft());
    const timeoutError = Object.assign(
      new Error(`${tag}Request to ${redactUrl(url)} timed out after ${timeoutMs}ms`),
      { name: 'TimeoutError' }
    );
    if (attemptMs <= 0) throw timeoutError;

    // A fresh controller per attempt. AbortSignal.any joins it to the caller's
    // signal without registering a listener on that signal, so one that lives
    // across many requests does not collect a listener per request.
    const controller = new AbortController();
    const signal = callerSignal ? AbortSignal.any([controller.signal, callerSignal]) : controller.signal;

    // unref(): the timer must never be the thing that keeps the process alive.
    // It outlives this call on purpose (see above), and a 45-60s LLM deadline
    // would otherwise delay the end of every CLI run by that long.
    const timer = setTimeout(() => controller.abort(timeoutError), attemptMs);
    timer.unref?.();

    let delivered = false;
    try {
      const res = await fetch(url, { ...init, signal });

      if (RETRYABLE_STATUS.has(res.status) && attempt < retries) {
        const delay = backoffDelay(attempt, res);
        if (canWait(delay)) {
          discardBody(res);
          clearTimeout(timer);
          logger.debug(`${tag}HTTP ${res.status} from ${redactUrl(url)}; retrying in ${Math.round(delay)}ms (attempt ${attempt + 1}/${retries})`);
          await sleep(delay);
          continue;
        }
        logger.debug(`${tag}HTTP ${res.status} from ${redactUrl(url)}; no time left to retry`);
      }

      // The one place a response leaves this client, so what is counted here is what the caller sees: a response
      // that was retried was never handed over and is not counted (see src/provider-stats.js).
      recordProviderResponse(url, res.status);

      // Hand the response over with the deadline still armed, so reading the
      // body is bounded too; the timer is already unref'd and fires harmlessly
      // if the body is finished by then.
      delivered = true;
      return res;
    } catch (err) {
      lastError = err;
      const isTimeout = err === timeoutError || err?.name === 'AbortError' || err?.name === 'TimeoutError';
      if (callerSignal?.aborted) throw err;

      if (attempt < retries) {
        const delay = backoffDelay(attempt, null);
        if (canWait(delay)) {
          logger.debug(`${tag}${isTimeout ? `Timed out after ${timeoutMs}ms` : `Network error: ${redactSecrets(err.message)}`} for ${redactUrl(url)}; retrying in ${Math.round(delay)}ms`);
          await sleep(delay);
          continue;
        }
      }
      throw isTimeout ? timeoutError : err;
    } finally {
      if (!delivered) clearTimeout(timer);
    }
  }

  throw lastError || new Error(`${tag}Request to ${redactUrl(url)} failed`);
}

/** Default ceiling for the size-limited readers below (10 MiB). */
export const DEFAULT_MAX_BODY_BYTES = 10 * 1024 * 1024;

export class ResponseTooLargeError extends Error {
  constructor(maxBytes, url) {
    super(`Response body exceeds the ${maxBytes}-byte limit${url ? ` (${redactUrl(url)})` : ''}`);
    this.name = 'ResponseTooLargeError';
    this.maxBytes = maxBytes;
  }
}

/**
 * Reads at most `maxBytes` of a response body.
 *
 * `res.text()` buffers whatever the server sends, which is fine for the handful
 * of fixed APIs this crawler talks to but not for URLs discovered in search
 * results. The cap is applied to *decoded* bytes as they stream in, so a small
 * gzip that inflates to gigabytes is cut off just the same, and once the cap is
 * hit the download is cancelled so the socket is released.
 *
 * @returns {Promise<{text: string, truncated: boolean}>}
 */
async function readBodyLimited(res, maxBytes) {
  if (!(maxBytes > 0)) throw new RangeError('maxBytes must be greater than zero');

  const reader = res?.body?.getReader?.();
  if (!reader) {
    // Not a streaming body (a test double, or a runtime without one): use the buffered API.
    const text = await res.text();
    return text.length > maxBytes
      ? { text: text.slice(0, maxBytes), truncated: true }
      : { text, truncated: false };
  }

  const chunks = [];
  let received = 0;
  let truncated = false;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const room = maxBytes - received;
      if (value.byteLength > room) {
        if (room > 0) chunks.push(value.subarray(0, room));
        truncated = true;
        break;
      }
      chunks.push(value);
      received += value.byteLength;
    }
  } finally {
    if (truncated) await reader.cancel().catch(() => {});
    reader.releaseLock?.();
  }

  // A cut that lands inside a multi-byte character becomes U+FFFD, which is
  // harmless for the excerpts this is used for.
  return { text: new TextDecoder().decode(Buffer.concat(chunks)), truncated };
}

/**
 * Reads the start of a text body, silently dropping anything past `maxBytes`.
 * Right for excerpts, where the first part of a page is all that is wanted.
 */
export async function readTextLimited(res, maxBytes = DEFAULT_MAX_BODY_BYTES) {
  return (await readBodyLimited(res, maxBytes)).text;
}

/**
 * Parses a JSON body of at most `maxBytes`. Unlike text, truncated JSON is
 * useless, so an oversized body is an error rather than a silent cut.
 */
export async function readJsonLimited(res, maxBytes = DEFAULT_MAX_BODY_BYTES) {
  const { text, truncated } = await readBodyLimited(res, maxBytes);
  if (truncated) throw new ResponseTooLargeError(maxBytes, res?.url);
  return JSON.parse(text);
}

/**
 * Convenience wrapper that parses JSON and returns null on any failure,
 * for the many optional enrichment sources that should degrade quietly.
 *
 * @param {string|URL} url
 * @param {Parameters<typeof fetchWithTimeout>[1] & {maxBytes?: number}} [options]
 */
export async function fetchJson(url, options = {}) {
  const { maxBytes, ...fetchOptions } = options;
  try {
    const res = await fetchWithTimeout(url, fetchOptions);
    if (!res.ok) return null;
    return await readJsonLimited(res, maxBytes);
  } catch (err) {
    logger.debug(`${options.label ? `[${options.label}] ` : ''}JSON fetch failed for ${redactUrl(url)}: ${redactSecrets(err.message)}`);
    return null;
  }
}

/**
 * Runs an async mapper over items with bounded concurrency.
 *
 * The crawler processes features strictly one at a time, which makes an
 * unattended `last-5` run take hours. Callers use this to overlap independent
 * work without stampeding rate-limited third-party APIs.
 *
 * Results preserve input order. Rejections are returned as `{ error }` entries
 * rather than aborting the batch.
 */
export async function mapWithConcurrency(items, limit, mapper) {
  const list = Array.from(items);
  const results = new Array(list.length);
  const size = Math.max(1, Math.min(limit, list.length));
  let cursor = 0;

  async function worker() {
    while (true) {
      const index = cursor++;
      if (index >= list.length) return;
      try {
        results[index] = { value: await mapper(list[index], index) };
      } catch (error) {
        results[index] = { error };
      }
    }
  }

  await Promise.all(Array.from({ length: size }, worker));
  return results;
}
