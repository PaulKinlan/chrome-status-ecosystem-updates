import { logger } from './logger.js';

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
 * `fetch` with a hard timeout and bounded retries.
 *
 * Resolves with the Response even for non-2xx statuses (callers already branch
 * on `res.ok`); only network errors and exhausted retries throw.
 *
 * @param {string|URL} url
 * @param {RequestInit & {timeoutMs?: number, retries?: number, label?: string}} [options]
 */
export async function fetchWithTimeout(url, options = {}) {
  const {
    timeoutMs = DEFAULT_TIMEOUT_MS,
    retries = DEFAULT_RETRIES,
    label = '',
    signal: callerSignal,
    ...init
  } = options;

  const tag = label ? `[${label}] ` : '';
  let lastError = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    // A fresh controller per attempt; AbortSignal.timeout alone would not let
    // us also honour a caller-supplied signal.
    const controller = new AbortController();
    const onCallerAbort = () => controller.abort(callerSignal?.reason);
    if (callerSignal) {
      if (callerSignal.aborted) throw new Error(`${tag}Aborted before request`);
      callerSignal.addEventListener('abort', onCallerAbort, { once: true });
    }
    const timer = setTimeout(() => controller.abort(new Error('timeout')), timeoutMs);

    try {
      const res = await fetch(url, { ...init, signal: controller.signal });

      if (RETRYABLE_STATUS.has(res.status) && attempt < retries) {
        const delay = backoffDelay(attempt, res);
        logger.debug(`${tag}HTTP ${res.status} from ${url}; retrying in ${Math.round(delay)}ms (attempt ${attempt + 1}/${retries})`);
        await sleep(delay);
        continue;
      }

      return res;
    } catch (err) {
      lastError = err;
      const isTimeout = err?.name === 'AbortError' || err?.name === 'TimeoutError';
      if (callerSignal?.aborted) throw err;

      if (attempt < retries) {
        const delay = backoffDelay(attempt, null);
        logger.debug(`${tag}${isTimeout ? `Timed out after ${timeoutMs}ms` : `Network error: ${err.message}`} for ${url}; retrying in ${Math.round(delay)}ms`);
        await sleep(delay);
        continue;
      }
      throw isTimeout
        ? new Error(`${tag}Request to ${url} timed out after ${timeoutMs}ms`)
        : err;
    } finally {
      clearTimeout(timer);
      callerSignal?.removeEventListener('abort', onCallerAbort);
    }
  }

  throw lastError || new Error(`${tag}Request to ${url} failed`);
}

/**
 * Convenience wrapper that parses JSON and returns null on any failure,
 * for the many optional enrichment sources that should degrade quietly.
 */
export async function fetchJson(url, options = {}) {
  try {
    const res = await fetchWithTimeout(url, options);
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    logger.debug(`${options.label ? `[${options.label}] ` : ''}JSON fetch failed for ${url}: ${err.message}`);
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
