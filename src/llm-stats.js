import { logger } from './logger.js';

/**
 * Run-wide record of how every LLM call went.
 *
 * Why this exists: roughly a third of features in a published report had no AI
 * synthesis and nothing said so. Each failure was swallowed at debug level and
 * the code quietly fell back to the heuristic engine, so a revoked key, an
 * exhausted quota, an overloaded model or output that stopped being parseable
 * all looked exactly like a healthy run. Counting outcomes by stage, cause and
 * model makes that visible in the log, in the report telemetry and (through the
 * coverage check in src/quality.js) as a CI warning.
 *
 * Counters are per attempt, not per logical request: if the first model fails
 * and the fallback model succeeds, that is one failure and one success.
 */

/** The ways an attempt can end besides success. HTTP failures are `http_<status>`. */
export const LLM_FAILURE = Object.freeze({
  TIMEOUT: 'timeout',
  NETWORK: 'network',
  /** 200 OK but no usable text (blocked by safety filters, or no candidates). */
  EMPTY: 'empty',
  /** The model stopped at its output limit, so the answer is cut off. */
  TRUNCATED: 'truncated',
  /** Text came back but no JSON could be recovered from it. */
  UNPARSEABLE: 'unparseable',
  /** JSON parsed, but it lacks the fields the analysis needs. */
  UNUSABLE: 'unusable',
  /** Every candidate model is known not to exist, so no request was made. */
  NO_MODEL: 'no_model',
  /** Every model that could answer is being tested after repeated failures, so no request was made. */
  COOLING_DOWN: 'cooling_down',
  /** The code that handles an answer threw: a bug, or a response shape nobody expected. */
  INTERNAL: 'internal_error',
});

const state = {
  ok: 0,
  failed: 0,
  byStage: new Map(),
  byModel: new Map(),
  warned: new Set(),
};

function stageEntry(stage) {
  let entry = state.byStage.get(stage);
  if (!entry) {
    entry = { ok: 0, failures: new Map() };
    state.byStage.set(stage, entry);
  }
  return entry;
}

function modelEntry(model) {
  let entry = state.byModel.get(model);
  if (!entry) {
    entry = { ok: 0, failed: 0 };
    state.byModel.set(model, entry);
  }
  return entry;
}

/** Cause label for a non-2xx response. */
export function httpFailure(status) {
  return `http_${status}`;
}

/**
 * Masks anything in `text` that looks like a credential.
 *
 * Error text from an API is shown in the CI log, and providers sometimes echo
 * the key they were given back at us - OpenAI's 401 names the key it rejected
 * (masked, but with its prefix and last four characters), which is still part
 * of a secret. Callers keep error text short and free of keys by construction;
 * this is the net under that.
 */
export function redactSecrets(text) {
  return String(text ?? '')
    .replace(/\bsk-[\w*-]{6,}/g, '[redacted]')
    .replace(/\bAIza[\w-]{16,}/g, '[redacted]')
    .replace(/\b(?:gh[pousr]_|github_pat_)[\w]{16,}/g, '[redacted]')
    .replace(/\bBearer\s+[\w.~+/=*-]{8,}/gi, 'Bearer [redacted]')
    .replace(/([?&](?:key|api_?key|access_token|token)=)[^&\s"']+/gi, '$1[redacted]');
}

/**
 * One short, key-free line out of an API error response body.
 *
 * Both Gemini and OpenAI answer with `{ "error": { "message": ... } }`, and
 * Gemini adds a `status` such as UNAVAILABLE (OpenAI a `code` such as
 * invalid_api_key). Anything that is not that shape is used as it is.
 */
export function summarizeApiError(raw) {
  let text = typeof raw === 'string' ? raw : '';
  try {
    const error = JSON.parse(text)?.error;
    if (error?.message) {
      const label = [error.status, error.code, error.type].find(value => typeof value === 'string' && value);
      text = `${label ? `${label}: ` : ''}${error.message}`;
    }
  } catch {
    // Not JSON: use the body as it is.
  }
  return redactSecrets(text.replace(/\s+/g, ' ').trim()).slice(0, 200);
}

/** Cause label for an exception thrown by `fetch` (or by reading its body). */
export function classifyError(err) {
  const name = err?.name;
  if (name === 'TimeoutError' || name === 'AbortError' || /timed out/i.test(err?.message || '')) {
    return LLM_FAILURE.TIMEOUT;
  }
  return LLM_FAILURE.NETWORK;
}

/**
 * Records a successful attempt.
 *
 * @param {string} stage e.g. 'gemini/synthesis'
 * @param {string} [model] which model answered, so a run that quietly fell back to a weaker one shows it
 */
export function recordLlmSuccess(stage, model = '') {
  state.ok++;
  stageEntry(stage).ok++;
  if (model) modelEntry(model).ok++;
}

/**
 * Records a failed attempt. The first occurrence of each stage+cause+model is
 * logged as a warning (so a systematic problem is visible without flooding the
 * log); the rest are only counted and appear in the end-of-run summary.
 *
 * @param {string} stage e.g. 'gemini/synthesis'
 * @param {string} cause one of LLM_FAILURE or `http_<status>`
 * @param {string} [detail] short human-readable context (never a secret)
 * @param {string} [model] the model the attempt was made against
 */
export function recordLlmFailure(stage, cause, detail = '', model = '') {
  state.failed++;
  const failures = stageEntry(stage).failures;
  failures.set(cause, (failures.get(cause) || 0) + 1);
  if (model) modelEntry(model).failed++;

  const key = `${stage}:${cause}:${model}`;
  if (!state.warned.has(key)) {
    state.warned.add(key);
    // API messages often end in a full stop of their own; the sentence below adds the real one.
    const reason = redactSecrets(detail).replace(/[.\s]+$/, '');
    logger.warn(
      `[LLM] ${stage} failed (${cause})${model ? ` on ${model}` : ''}${reason ? `: ${reason}` : ''}. ` +
      `Further ${cause} failures for this stage${model ? ' and model' : ''} are counted, not logged.`
    );
  }
}

/** A plain-object copy of the counters, safe to serialise into telemetry. */
export function llmStatsSnapshot() {
  const byStage = {};
  for (const [stage, entry] of state.byStage) {
    byStage[stage] = {
      ok: entry.ok,
      failed: [...entry.failures.values()].reduce((sum, n) => sum + n, 0),
      failures: Object.fromEntries(entry.failures),
    };
  }
  const byModel = {};
  for (const [model, entry] of state.byModel) byModel[model] = { ok: entry.ok, failed: entry.failed };
  return { attempts: state.ok + state.failed, ok: state.ok, failed: state.failed, byStage, byModel };
}

/** One line per stage (then per model) that had any failure, for the end-of-run log. */
export function describeLlmStats(snapshot = llmStatsSnapshot()) {
  const lines = [];
  for (const [stage, entry] of Object.entries(snapshot.byStage)) {
    if (entry.failed === 0) continue;
    const causes = Object.entries(entry.failures).map(([cause, n]) => `${cause} ×${n}`).join(', ');
    lines.push(`${stage}: ${entry.failed} of ${entry.ok + entry.failed} attempts failed (${causes})`);
  }
  for (const [model, entry] of Object.entries(snapshot.byModel || {})) {
    if (entry.failed === 0) continue;
    lines.push(`model ${model}: ${entry.failed} of ${entry.ok + entry.failed} attempts failed`);
  }
  return lines;
}

/** Clears every counter and the warn-once memory. Call at the start of a run (and in tests). */
export function resetLlmStats() {
  state.ok = 0;
  state.failed = 0;
  state.byStage.clear();
  state.byModel.clear();
  state.warned.clear();
}
