import { config } from '../config.js';
import { logger } from '../logger.js';
import { LLM_FAILURE, httpFailure } from '../llm-stats.js';

/**
 * Which Gemini model to call, in what order, and which of them are worth
 * trying right now.
 *
 * Three things were wrong before. All were measured against the live API while
 * investigating why roughly a third of features in a published report had no
 * AI synthesis:
 *
 *  1. The fallback list named `gemini-3-flash` and `gemini-2.5-flash`. The API
 *     answers 404 for both (retired or renamed), so when the configured model
 *     was overloaded there was nothing real to fall back to.
 *  2. The newest models are routinely overloaded: HTTP 503 "experiencing high
 *     demand" on a sizeable share of calls, and one that did not answer a
 *     14-token prompt within 40 seconds while older models answered in about
 *     1.5. Every call still asked the configured model first and waited out its
 *     whole timeout before moving on.
 *  3. Nothing remembered any of this, so the next call paid the same price.
 *
 * So the chain now ends in models that exist, and a per-run health record
 * decides which of them are worth a request right now:
 *
 *  - A model the API says does not exist is left alone for ten minutes, so a
 *    retired name costs one quick 404 per ten minutes instead of one per call.
 *  - A model that fails twice in a row (overload, timeout, network) is set aside
 *    for a minute. It is not simply put back in rotation afterwards: ONE request
 *    is sent to it as a test while everyone else keeps using the models that
 *    work. If the test fails the model is set aside for twice as long (up to
 *    five minutes); if it succeeds the model is back in rotation.
 *
 * The single test request matters. Several features are processed at once, and
 * with a plain timer every caller that arrived after the cooldown sent its own
 * request to the model, so each of them lost the model's whole timeout. In a
 * simulation of a model that hangs, that spent 42% of all worker time waiting
 * on a model already known to be down; one test per cooldown spent 11%.
 */

export const DEFAULT_GEMINI_MODEL = 'gemini-3.8-flash';

/**
 * Tried, in order, after the configured model.
 *
 * - `gemini-3.5-flash`: the previous generation of the same family. It still
 *   shed load with 503s now and then, but answered far more often than the
 *   newest models did.
 * - `gemini-flash-lite-latest`: an alias Google keeps pointing at a current
 *   lite model, so unlike a pinned name it cannot go stale. Lighter, hence last.
 *
 * Pinned names do age out (that is how the old list died). A name that starts
 * returning 404 is set aside, see NOT_FOUND_RETRY_MS.
 */
export const FALLBACK_MODELS = Object.freeze(['gemini-3.5-flash', 'gemini-flash-lite-latest']);

/** Consecutive transient failures after which a model is set aside. */
export const FAILURES_BEFORE_COOLDOWN = 2;

/** How long a model that keeps failing is skipped the first time. Doubled every time its test request fails. */
export const COOLDOWN_MS = 60_000;

/** The cooldown stops growing here. */
export const MAX_COOLDOWN_MS = 300_000;

/** How long a model the API reports as not found is left alone before it is tried again, in case that was a glitch. */
export const NOT_FOUND_RETRY_MS = 600_000;

/** A test request whose result never arrives (its caller crashed) stops holding up everyone else after this long. */
const TEST_REQUEST_STALE_MS = 120_000;

/**
 * How a call that no model could answer is retried.
 *
 * Overload comes in bursts that clear within seconds, so when a pass failed for
 * a transient reason, the models are asked once more after a pause (with
 * jitter, so concurrent callers do not all come back in the same instant).
 * Mutable so tests can make the pause instant.
 */
export const retryPolicy = { passes: 2, delayMs: 3_000, jitterMs: 1_000 };

/** Failures that say the model was unavailable, as opposed to the request or answer being wrong. */
const TRANSIENT = new Set([
  LLM_FAILURE.TIMEOUT,
  LLM_FAILURE.NETWORK,
  ...[408, 425, 429, 500, 502, 503, 504].map(httpFailure),
]);

/** Is `cause` (an LLM_FAILURE or `http_<status>`) worth trying again, here or elsewhere? */
export function isTransientFailure(cause) {
  return TRANSIENT.has(cause);
}

/** model -> { deadUntil, failures, coolingUntil, cooldownMs, testStartedAt, warnedCooldown, warnedNotFound } */
const health = new Map();

function healthOf(model) {
  let entry = health.get(model);
  if (!entry) {
    entry = { deadUntil: 0, failures: 0, coolingUntil: 0, cooldownMs: 0, testStartedAt: 0, warnedCooldown: false, warnedNotFound: false };
    health.set(model, entry);
  }
  return entry;
}

/** Has the model been failing without answering since? Such a model is only sent one request at a time. */
function isOnTrial(entry) {
  return entry.failures >= FAILURES_BEFORE_COOLDOWN;
}

/** The configured model followed by the fallbacks, ignoring health. */
export function modelChain() {
  const configured = config.geminiModel || DEFAULT_GEMINI_MODEL;
  return [...new Set([configured, ...FALLBACK_MODELS])];
}

/**
 * The models worth a request right now, best first.
 *
 * Models known not to exist are left out. So are models that are cooling down,
 * unless nothing else is left: asking a struggling model is better than giving
 * up without sending anything. A model whose cooldown is over is included, but
 * it is only sent one request at a time: see `claimModel`.
 */
export function modelCandidates(now = Date.now()) {
  const chain = modelChain().filter(model => healthOf(model).deadUntil <= now);
  const ready = chain.filter(model => healthOf(model).coolingUntil <= now);
  return ready.length > 0 ? ready : chain;
}

/**
 * Reserves the right to send a request to `model`; false means "use another".
 *
 * A model in good standing can be asked by anyone, any time. One that has been
 * failing can be asked by one caller at a time: that request is the test, and
 * its result (`recordModelResult`) decides whether everybody else may use the
 * model again. Call this right before the request, not when choosing models,
 * so that a model that was claimed but not needed is not left reserved.
 */
export function claimModel(model, now = Date.now()) {
  const entry = healthOf(model);
  if (!isOnTrial(entry)) return true;
  if (entry.testStartedAt && now - entry.testStartedAt < TEST_REQUEST_STALE_MS) return false;
  entry.testStartedAt = now;
  return true;
}

/**
 * Feeds one attempt's outcome into the health record.
 *
 * @param {string} model
 * @param {string|null} cause null for an answer; otherwise an LLM_FAILURE or `http_<status>`
 * @param {number} [now]
 */
export function recordModelResult(model, cause = null, now = Date.now()) {
  const entry = healthOf(model);
  entry.testStartedAt = 0; // whatever happened, the test request (if this was one) is over

  if (cause === null) {
    entry.failures = 0;
    entry.coolingUntil = 0;
    entry.cooldownMs = 0;
    entry.deadUntil = 0;
    return;
  }

  if (cause === httpFailure(404)) {
    entry.deadUntil = now + NOT_FOUND_RETRY_MS;
    entry.failures = Math.max(entry.failures, FAILURES_BEFORE_COOLDOWN); // when it is tried again, one request at a time
    if (!entry.warnedNotFound) {
      entry.warnedNotFound = true;
      logger.warn(`[Gemini] Model "${model}" was not found (HTTP 404). It was probably retired or is misspelt in GEMINI_MODEL; skipping it for the next ${NOT_FOUND_RETRY_MS / 60_000} minutes.`);
    }
    return;
  }

  // A 400, a refusal or an unparseable answer is about this request, not about
  // whether the model is up, so it must not push the model out of rotation.
  if (!isTransientFailure(cause)) return;

  entry.failures++;
  if (entry.failures < FAILURES_BEFORE_COOLDOWN) return;

  // A failure that lands while the model is already set aside belongs to a
  // request that was in flight before that happened. The model has not had a
  // fresh chance since, so it must not count against it again.
  if (entry.coolingUntil > now) return;

  entry.cooldownMs = entry.cooldownMs > 0 ? Math.min(entry.cooldownMs * 2, MAX_COOLDOWN_MS) : COOLDOWN_MS;
  entry.coolingUntil = now + entry.cooldownMs;
  const message = `[Gemini] Model "${model}" failed ${entry.failures} times in a row (${cause}); using the other models for the next ${Math.round(entry.cooldownMs / 1000)}s, then testing it with a single request.`;
  if (entry.warnedCooldown) {
    logger.debug(message);
  } else {
    entry.warnedCooldown = true;
    logger.warn(message);
  }
}

/** Forgets everything learned about the models. Call at the start of a run (and in tests). */
export function resetModelHealth() {
  health.clear();
}
