import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test, { beforeEach } from 'node:test';
import assert from 'node:assert';
import {
  LLM_FAILURE,
  httpFailure,
  classifyError,
  redactSecrets,
  summarizeApiError,
  recordLlmSuccess,
  recordLlmFailure,
  llmStatsSnapshot,
  describeLlmStats,
  resetLlmStats,
} from '../src/llm-stats.js';

beforeEach(() => resetLlmStats());

/** Runs `fn` and returns every message the logger sent to stderr (where warnings go). */
function captureWarnings(t, fn) {
  const lines = [];
  t.mock.method(console, 'error', (...args) => lines.push(args.join(' ')));
  fn();
  return lines;
}

test('outcomes are counted per stage and cause', t => {
  captureWarnings(t, () => {
    recordLlmSuccess('gemini/synthesis');
    recordLlmSuccess('gemini/synthesis');
    recordLlmFailure('gemini/synthesis', httpFailure(429));
    recordLlmFailure('gemini/synthesis', httpFailure(429));
    recordLlmFailure('gemini/synthesis', LLM_FAILURE.UNPARSEABLE);
    recordLlmSuccess('gemini/verification');
  });

  assert.deepStrictEqual(llmStatsSnapshot(), {
    attempts: 6,
    ok: 3,
    failed: 3,
    byStage: {
      'gemini/synthesis': { ok: 2, failed: 3, failures: { http_429: 2, unparseable: 1 } },
      'gemini/verification': { ok: 1, failed: 0, failures: {} },
    },
    byModel: {},
  });
});

test('outcomes that name a model are also counted per model', t => {
  captureWarnings(t, () => {
    recordLlmFailure('gemini/synthesis', LLM_FAILURE.TIMEOUT, '', 'gemini-3.8-flash');
    recordLlmFailure('gemini/verification', httpFailure(503), '', 'gemini-3.8-flash');
    recordLlmSuccess('gemini/synthesis', 'gemini-3.5-flash');
    recordLlmSuccess('gemini/verification', 'gemini-3.5-flash');
    recordLlmSuccess('gemini/verification'); // no model named: counted in the totals only
  });

  const snapshot = llmStatsSnapshot();
  assert.deepStrictEqual(snapshot.byModel, {
    'gemini-3.8-flash': { ok: 0, failed: 2 },
    'gemini-3.5-flash': { ok: 2, failed: 0 },
  });
  assert.strictEqual(snapshot.attempts, 5);
});

test('the warning names the model, and each model gets its own first warning per cause', t => {
  const warnings = captureWarnings(t, () => {
    recordLlmFailure('gemini/synthesis', LLM_FAILURE.TIMEOUT, 'no answer in 60s', 'gemini-3.8-flash');
    recordLlmFailure('gemini/synthesis', LLM_FAILURE.TIMEOUT, 'no answer in 60s', 'gemini-3.8-flash');
    recordLlmFailure('gemini/synthesis', LLM_FAILURE.TIMEOUT, 'no answer in 60s', 'gemini-3.5-flash');
  });

  assert.strictEqual(warnings.length, 2, warnings.join('\n'));
  assert.match(warnings[0], /gemini\/synthesis failed \(timeout\) on gemini-3\.8-flash: no answer in 60s/);
  assert.match(warnings[1], /on gemini-3\.5-flash/);
});

test('describeLlmStats also lists models that had failures', t => {
  captureWarnings(t, () => {
    recordLlmSuccess('gemini/synthesis', 'gemini-3.5-flash');
    recordLlmFailure('gemini/synthesis', LLM_FAILURE.TIMEOUT, '', 'gemini-3.8-flash');
    recordLlmFailure('gemini/synthesis', LLM_FAILURE.TIMEOUT, '', 'gemini-3.8-flash');
    recordLlmSuccess('gemini/synthesis', 'gemini-3.8-flash');
  });

  assert.deepStrictEqual(describeLlmStats(), [
    'gemini/synthesis: 2 of 4 attempts failed (timeout ×2)',
    'model gemini-3.8-flash: 2 of 3 attempts failed',
  ]);
});

test('the first failure of each stage and cause is a warning; repeats are only counted', t => {
  const warnings = captureWarnings(t, () => {
    for (let i = 0; i < 5; i++) recordLlmFailure('gemini/synthesis', httpFailure(429), 'quota exceeded');
    recordLlmFailure('gemini/synthesis', httpFailure(403), 'key revoked');
    recordLlmFailure('gemini/verification', httpFailure(429));
  });

  assert.strictEqual(warnings.length, 3, warnings.join('\n'));
  assert.match(warnings[0], /gemini\/synthesis failed \(http_429\): quota exceeded/);
  assert.match(warnings[1], /gemini\/synthesis failed \(http_403\): key revoked/);
  assert.match(warnings[2], /gemini\/verification failed \(http_429\)/);
  assert.strictEqual(llmStatsSnapshot().byStage['gemini/synthesis'].failures.http_429, 5);
});

test('the warning reads as one clean sentence even when the API message ends in a full stop', t => {
  const warnings = captureWarnings(t, () => {
    recordLlmFailure('gemini/synthesis', httpFailure(503), 'This model is currently experiencing high demand. ', 'gemini-3.8-flash');
  });

  assert.strictEqual(
    warnings[0].replace(/\u001b\[[0-9;]*m/g, ''),
    '⚠ [LLM] gemini/synthesis failed (http_503) on gemini-3.8-flash: This model is currently experiencing high demand. ' +
    'Further http_503 failures for this stage and model are counted, not logged.'
  );
});

test('successes never warn', t => {
  const warnings = captureWarnings(t, () => recordLlmSuccess('gemini/synthesis'));
  assert.deepStrictEqual(warnings, []);
});

test('resetLlmStats clears the counters and forgets which warnings were shown', t => {
  const warnings = [];
  t.mock.method(console, 'error', (...args) => warnings.push(args.join(' ')));

  recordLlmFailure('gemini/synthesis', LLM_FAILURE.TIMEOUT);
  recordLlmFailure('gemini/synthesis', LLM_FAILURE.TIMEOUT);
  assert.strictEqual(warnings.length, 1);

  resetLlmStats();
  assert.deepStrictEqual(llmStatsSnapshot(), { attempts: 0, ok: 0, failed: 0, byStage: {}, byModel: {} });

  recordLlmFailure('gemini/synthesis', LLM_FAILURE.TIMEOUT);
  assert.strictEqual(warnings.length, 2, 'the same failure warns again in the next run');
});

test('describeLlmStats lists only stages with failures, with their causes', t => {
  captureWarnings(t, () => {
    recordLlmSuccess('gemini/verification');
    recordLlmSuccess('gemini/synthesis');
    recordLlmFailure('gemini/synthesis', httpFailure(503));
    recordLlmFailure('gemini/synthesis', LLM_FAILURE.TRUNCATED);
    recordLlmFailure('gemini/synthesis', LLM_FAILURE.TRUNCATED);
  });

  assert.deepStrictEqual(describeLlmStats(), [
    'gemini/synthesis: 3 of 4 attempts failed (http_503 ×1, truncated ×2)',
  ]);
});

test('describeLlmStats says nothing when everything worked', () => {
  recordLlmSuccess('gemini/synthesis');
  assert.deepStrictEqual(describeLlmStats(), []);
});

test('errors from fetch are classified as timeouts or network faults', () => {
  const timeout = Object.assign(new Error('Request to https://x timed out after 100ms'), { name: 'TimeoutError' });
  assert.strictEqual(classifyError(timeout), LLM_FAILURE.TIMEOUT);
  assert.strictEqual(classifyError(Object.assign(new Error('aborted'), { name: 'AbortError' })), LLM_FAILURE.TIMEOUT);
  assert.strictEqual(classifyError(new Error('Gemini Grounding request timed out')), LLM_FAILURE.TIMEOUT);

  assert.strictEqual(classifyError(new TypeError('fetch failed')), LLM_FAILURE.NETWORK);
  assert.strictEqual(classifyError(null), LLM_FAILURE.NETWORK);
});

test('httpFailure labels the status', () => {
  assert.strictEqual(httpFailure(429), 'http_429');
  assert.strictEqual(httpFailure(503), 'http_503');
});

// --- keeping credentials out of the log -------------------------------------------------------------------------

test('redactSecrets masks credentials an error message might quote, and leaves ordinary text alone', () => {
  const cases = [
    ['Incorrect API key provided: sk-proj-abcdEFGH1234. Find it at https://platform.openai.com', 'Incorrect API key provided: [redacted]. Find it at https://platform.openai.com'],
    // OpenAI quotes the key it rejected with the middle starred out: prefix and last four characters are still part of the secret.
    ['Incorrect API key provided: sk-proj-********************abcd.', 'Incorrect API key provided: [redacted].'],
    ['bad key AIzaSyA1234567890abcdefghijklmnopqrstuv in request', 'bad key [redacted] in request'],
    ['Authorization: Bearer abc123.def456-ghi789', 'Authorization: Bearer [redacted]'],
    ['GET https://x.example/search?q=1&key=SECRET123&cx=2', 'GET https://x.example/search?q=1&key=[redacted]&cx=2'],
    ['GET https://x.example/search?api_key=SECRET123', 'GET https://x.example/search?api_key=[redacted]'],
    ['token ghp_abcdefghijklmnopqrstuv1234 rejected', 'token [redacted] rejected'],
    ['Rate limit reached for gpt-4o-mini; task-12345678 and risk-assessment-framework are fine', 'Rate limit reached for gpt-4o-mini; task-12345678 and risk-assessment-framework are fine'],
  ];
  for (const [input, expected] of cases) assert.strictEqual(redactSecrets(input), expected);

  assert.strictEqual(redactSecrets(undefined), '');
  assert.strictEqual(redactSecrets(null), '');
});

test('summarizeApiError reduces an error response to one short line without credentials', () => {
  const gemini = JSON.stringify({ error: { code: 503, message: 'Overloaded.\n  Try again later', status: 'UNAVAILABLE' } });
  assert.strictEqual(summarizeApiError(gemini), 'UNAVAILABLE: Overloaded. Try again later');

  const openai = JSON.stringify({ error: { message: 'Incorrect API key provided: sk-proj-****abcd1234.', type: 'invalid_request_error', code: 'invalid_api_key' } });
  assert.strictEqual(summarizeApiError(openai), 'invalid_api_key: Incorrect API key provided: [redacted].');

  assert.strictEqual(summarizeApiError('<html>  Bad   gateway </html>'), '<html> Bad gateway </html>', 'a body that is not JSON is used as it is');
  assert.strictEqual(summarizeApiError(JSON.stringify({ error: 'plain string' })), '{"error":"plain string"}');
  assert.strictEqual(summarizeApiError(''), '');
  assert.strictEqual(summarizeApiError(undefined), '');
  assert.strictEqual(summarizeApiError('x'.repeat(500)).length, 200);

  // The key is masked before the line is cut to length, so a cut cannot leave half of it behind.
  const nearTheLimit = `${'a '.repeat(95)}sk-proj-abcdefghij1234567890`;
  assert.ok(!summarizeApiError(nearTheLimit).includes('sk-'));
});

test('a credential in a failure detail is masked in the warning, whoever supplied the detail', t => {
  const lines = captureWarnings(t, () => recordLlmFailure('openai/synthesis', httpFailure(401), 'Incorrect API key provided: sk-proj-abcdef123456.', 'gpt-4o-mini'));

  assert.strictEqual(lines.length, 1);
  assert.ok(!lines[0].includes('sk-proj'), lines[0]);
  assert.match(lines[0], /Incorrect API key provided: \[redacted\]\. Further http_401 failures/);
});

test('the two causes that need no request are counted like any other', t => {
  captureWarnings(t, () => {
    recordLlmFailure('gemini/synthesis', LLM_FAILURE.COOLING_DOWN, 'every model is being tested after repeated failures');
    recordLlmFailure('gemini/synthesis', LLM_FAILURE.INTERNAL, 'cannot read properties of null');
  });

  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/synthesis'].failures, { cooling_down: 1, internal_error: 1 });
});
