import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test, { beforeEach } from 'node:test';
import assert from 'node:assert';
import { config } from '../src/config.js';
import { LLM_FAILURE, httpFailure } from '../src/llm-stats.js';
import {
  DEFAULT_GEMINI_MODEL,
  FALLBACK_MODELS,
  FAILURES_BEFORE_COOLDOWN,
  COOLDOWN_MS,
  MAX_COOLDOWN_MS,
  NOT_FOUND_RETRY_MS,
  modelChain,
  modelCandidates,
  claimModel,
  recordModelResult,
  resetModelHealth,
  isTransientFailure,
} from '../src/search/gemini-models.js';

const NOW = 1_000_000;

beforeEach(() => {
  resetModelHealth();
  config.geminiModel = DEFAULT_GEMINI_MODEL;
});

const captured = new WeakMap();

/**
 * Runs `fn` and returns the warnings the logger sent to stderr while it ran
 * (debug output is silent by default). May be called any number of times in one
 * test: `console.error` is only mocked once per test.
 */
function captureWarnings(t, fn) {
  let lines = captured.get(t);
  if (!lines) {
    lines = [];
    captured.set(t, lines);
    t.mock.method(console, 'error', (...args) => lines.push(args.join(' ')));
  }
  const before = lines.length;
  fn();
  return lines.slice(before);
}

test('the configured model comes first, followed by the fallbacks, without duplicates', () => {
  config.geminiModel = 'my-model';
  assert.deepStrictEqual(modelChain(), ['my-model', ...FALLBACK_MODELS]);

  config.geminiModel = FALLBACK_MODELS[0];
  assert.deepStrictEqual(modelChain(), [...FALLBACK_MODELS]);

  config.geminiModel = '';
  assert.strictEqual(modelChain()[0], DEFAULT_GEMINI_MODEL);
});

test('the fallbacks are not the two names the API answers 404 for, and one is an alias that cannot go stale', () => {
  // Found against the live API: both of the old fallbacks were 404, so there was nothing to fall back to.
  assert.ok(!FALLBACK_MODELS.includes('gemini-3-flash'));
  assert.ok(!FALLBACK_MODELS.includes('gemini-2.5-flash'));
  assert.ok(FALLBACK_MODELS.some(name => name.endsWith('-latest')), 'keep at least one Google-maintained alias in the chain');
  assert.ok(FALLBACK_MODELS.length >= 2);
});

test('a model the API reports as not found is not offered again, and the warning points at GEMINI_MODEL', t => {
  const warnings = captureWarnings(t, () => {
    recordModelResult('gemini-3.8-flash', httpFailure(404), NOW);
    recordModelResult('gemini-3.8-flash', httpFailure(404), NOW);
  });

  assert.ok(!modelCandidates(NOW).includes('gemini-3.8-flash'));
  assert.deepStrictEqual(modelCandidates(NOW), [...FALLBACK_MODELS]);
  assert.strictEqual(warnings.length, 1, 'only the first 404 warns');
  assert.match(warnings[0], /gemini-3\.8-flash/);
  assert.match(warnings[0], /GEMINI_MODEL/);
});

test('a model reported as not found gets a second chance after ten minutes, one request at a time', t => {
  captureWarnings(t, () => recordModelResult('gemini-3.8-flash', httpFailure(404), NOW));

  assert.ok(!modelCandidates(NOW + NOT_FOUND_RETRY_MS - 1).includes('gemini-3.8-flash'), 'still set aside');
  assert.strictEqual(modelCandidates(NOW + NOT_FOUND_RETRY_MS)[0], 'gemini-3.8-flash', 'offered again');

  const later = NOW + NOT_FOUND_RETRY_MS;
  assert.strictEqual(claimModel('gemini-3.8-flash', later), true, 'one caller makes the test request');
  assert.strictEqual(claimModel('gemini-3.8-flash', later), false, 'everyone else keeps using the models that work');

  recordModelResult('gemini-3.8-flash', null, later); // it exists after all
  assert.strictEqual(claimModel('gemini-3.8-flash', later), true);
  assert.strictEqual(claimModel('gemini-3.8-flash', later), true, 'back in good standing: no longer one at a time');
});

test('a retired model that is still not found goes back to sleep for another ten minutes without a second warning', t => {
  const warnings = captureWarnings(t, () => {
    recordModelResult('gemini-3.8-flash', httpFailure(404), NOW);
    const later = NOW + NOT_FOUND_RETRY_MS;
    claimModel('gemini-3.8-flash', later);
    recordModelResult('gemini-3.8-flash', httpFailure(404), later);
  });

  assert.ok(!modelCandidates(NOW + NOT_FOUND_RETRY_MS + 1).includes('gemini-3.8-flash'));
  assert.strictEqual(modelCandidates(NOW + 2 * NOT_FOUND_RETRY_MS)[0], 'gemini-3.8-flash');
  assert.strictEqual(warnings.length, 1);
});

test('a model that keeps failing is set aside for a while, then given another chance', t => {
  captureWarnings(t, () => {
    for (let i = 0; i < FAILURES_BEFORE_COOLDOWN; i++) {
      recordModelResult('gemini-3.8-flash', httpFailure(503), NOW);
    }
  });

  assert.deepStrictEqual(modelCandidates(NOW + 1), [...FALLBACK_MODELS], 'skipped while cooling down');
  assert.deepStrictEqual(modelCandidates(NOW + COOLDOWN_MS - 1), [...FALLBACK_MODELS]);
  assert.strictEqual(modelCandidates(NOW + COOLDOWN_MS)[0], 'gemini-3.8-flash', 'back in rotation once the cooldown is over');
});

test('one failure is not enough, and an answer resets the streak', t => {
  captureWarnings(t, () => {
    recordModelResult('gemini-3.8-flash', LLM_FAILURE.TIMEOUT, NOW);
    assert.strictEqual(modelCandidates(NOW)[0], 'gemini-3.8-flash');

    recordModelResult('gemini-3.8-flash', null, NOW); // it answered
    recordModelResult('gemini-3.8-flash', LLM_FAILURE.TIMEOUT, NOW);
    assert.strictEqual(modelCandidates(NOW)[0], 'gemini-3.8-flash', 'failures must be consecutive to count');
  });
});

test('after a cooldown the first failure sets the model aside again straight away', t => {
  captureWarnings(t, () => {
    for (let i = 0; i < FAILURES_BEFORE_COOLDOWN; i++) recordModelResult('gemini-3.8-flash', httpFailure(503), NOW);
    const later = NOW + COOLDOWN_MS + 1;
    assert.strictEqual(modelCandidates(later)[0], 'gemini-3.8-flash');

    recordModelResult('gemini-3.8-flash', httpFailure(503), later); // the probe fails
    assert.ok(!modelCandidates(later + 1).includes('gemini-3.8-flash'));
  });
});

test('failures that are about the request or the answer never push a model out', t => {
  captureWarnings(t, () => {
    for (const cause of [httpFailure(400), httpFailure(403), LLM_FAILURE.UNPARSEABLE, LLM_FAILURE.TRUNCATED, LLM_FAILURE.EMPTY, LLM_FAILURE.UNUSABLE]) {
      for (let i = 0; i < FAILURES_BEFORE_COOLDOWN + 2; i++) recordModelResult('gemini-3.8-flash', cause, NOW);
    }
  });

  assert.strictEqual(modelCandidates(NOW)[0], 'gemini-3.8-flash');
});

test('when every model is cooling down they are all still offered rather than none', t => {
  captureWarnings(t, () => {
    for (const model of modelChain()) {
      for (let i = 0; i < FAILURES_BEFORE_COOLDOWN; i++) recordModelResult(model, httpFailure(503), NOW);
    }
  });

  assert.deepStrictEqual(modelCandidates(NOW + 1), modelChain());
});

test('when every model is known not to exist there is nothing to offer', t => {
  captureWarnings(t, () => {
    for (const model of modelChain()) recordModelResult(model, httpFailure(404));
  });

  assert.deepStrictEqual(modelCandidates(NOW), []);
});

test('resetModelHealth forgets what was learned', t => {
  captureWarnings(t, () => recordModelResult('gemini-3.8-flash', httpFailure(404)));
  assert.ok(!modelCandidates(NOW).includes('gemini-3.8-flash'));

  resetModelHealth();
  assert.strictEqual(modelCandidates(NOW)[0], 'gemini-3.8-flash');
});

// --- one test request at a time, and a cooldown that grows ----------------------------------------------------------

/** Fails `model` the way an overloaded model does, enough times to set it aside, all at `at`. */
function tripBreaker(t, model, at) {
  captureWarnings(t, () => {
    for (let i = 0; i < FAILURES_BEFORE_COOLDOWN; i++) recordModelResult(model, httpFailure(503), at);
  });
}

test('a model in good standing can be asked by any number of callers at once', () => {
  for (let i = 0; i < 10; i++) assert.strictEqual(claimModel('gemini-3.8-flash', NOW), true);

  // A single failure does not change that.
  recordModelResult('gemini-3.8-flash', httpFailure(503), NOW);
  for (let i = 0; i < 10; i++) assert.strictEqual(claimModel('gemini-3.8-flash', NOW), true);
});

test('after the cooldown only one caller tests a failing model; the others are told to use another', t => {
  tripBreaker(t, 'gemini-3.8-flash', NOW);
  const later = NOW + COOLDOWN_MS + 1;

  assert.strictEqual(modelCandidates(later)[0], 'gemini-3.8-flash', 'it is a candidate again...');
  assert.strictEqual(claimModel('gemini-3.8-flash', later), true, '...but the first caller to claim it has the test');
  assert.strictEqual(claimModel('gemini-3.8-flash', later), false);
  assert.strictEqual(claimModel('gemini-3.8-flash', later + 30_000), false, 'for as long as the test is out');
});

test('a successful test puts the model back in rotation for everyone', t => {
  tripBreaker(t, 'gemini-3.8-flash', NOW);
  const later = NOW + COOLDOWN_MS + 1;
  claimModel('gemini-3.8-flash', later);

  recordModelResult('gemini-3.8-flash', null, later);

  for (let i = 0; i < 5; i++) assert.strictEqual(claimModel('gemini-3.8-flash', later), true);
  assert.strictEqual(modelCandidates(later)[0], 'gemini-3.8-flash');
});

test('a failed test sets the model aside again, for twice as long, and releases the claim', t => {
  tripBreaker(t, 'gemini-3.8-flash', NOW);
  const later = NOW + COOLDOWN_MS + 1;
  claimModel('gemini-3.8-flash', later);

  captureWarnings(t, () => recordModelResult('gemini-3.8-flash', LLM_FAILURE.TIMEOUT, later));

  assert.ok(!modelCandidates(later + 2 * COOLDOWN_MS - 1).includes('gemini-3.8-flash'), 'set aside for two minutes now');
  assert.strictEqual(modelCandidates(later + 2 * COOLDOWN_MS)[0], 'gemini-3.8-flash');
  assert.strictEqual(claimModel('gemini-3.8-flash', later + 2 * COOLDOWN_MS), true, 'the next test is open to the next caller');
});

test('the cooldown keeps doubling while the tests fail, stops at the maximum, and starts over after an answer', t => {
  tripBreaker(t, 'gemini-3.8-flash', NOW);
  let at = NOW;
  let expected = COOLDOWN_MS;

  for (let round = 0; round < 6; round++) {
    at += expected; // the cooldown just ended
    assert.strictEqual(modelCandidates(at)[0], 'gemini-3.8-flash', `round ${round}: due for a test`);
    assert.ok(!modelCandidates(at - 1).includes('gemini-3.8-flash'), `round ${round}: but not a moment earlier (${expected} ms)`);

    claimModel('gemini-3.8-flash', at);
    captureWarnings(t, () => recordModelResult('gemini-3.8-flash', httpFailure(503), at));
    expected = Math.min(expected * 2, MAX_COOLDOWN_MS);
  }
  assert.strictEqual(expected, MAX_COOLDOWN_MS, 'the sequence reached the cap');

  at += expected;
  claimModel('gemini-3.8-flash', at);
  recordModelResult('gemini-3.8-flash', null, at); // it answered
  tripBreaker(t, 'gemini-3.8-flash', at);

  assert.ok(!modelCandidates(at + COOLDOWN_MS - 1).includes('gemini-3.8-flash'));
  assert.strictEqual(modelCandidates(at + COOLDOWN_MS)[0], 'gemini-3.8-flash', 'back to the first cooldown, not the maximum');
});

test('failures from requests that were already in flight when the model was set aside do not lengthen the cooldown', t => {
  tripBreaker(t, 'gemini-3.8-flash', NOW);

  // Four more calls that started before the model was set aside now time out.
  captureWarnings(t, () => {
    for (let i = 0; i < 4; i++) recordModelResult('gemini-3.8-flash', LLM_FAILURE.TIMEOUT, NOW + 20_000);
  });

  assert.strictEqual(modelCandidates(NOW + COOLDOWN_MS)[0], 'gemini-3.8-flash', 'still one minute, not longer');

  // And the first failed test is only the second step of the doubling, not the sixth.
  claimModel('gemini-3.8-flash', NOW + COOLDOWN_MS);
  captureWarnings(t, () => recordModelResult('gemini-3.8-flash', httpFailure(503), NOW + COOLDOWN_MS));
  assert.strictEqual(modelCandidates(NOW + 3 * COOLDOWN_MS)[0], 'gemini-3.8-flash');
  assert.ok(!modelCandidates(NOW + 3 * COOLDOWN_MS - 1).includes('gemini-3.8-flash'), 'two minutes after the test');
});

test('a test whose outcome is a refusal or a bad request is over without changing the model\'s standing', t => {
  tripBreaker(t, 'gemini-3.8-flash', NOW);
  const later = NOW + COOLDOWN_MS + 1;
  assert.strictEqual(claimModel('gemini-3.8-flash', later), true);
  assert.strictEqual(claimModel('gemini-3.8-flash', later), false);

  recordModelResult('gemini-3.8-flash', httpFailure(400), later);

  assert.strictEqual(claimModel('gemini-3.8-flash', later), true, 'the claim was released, the model is still on trial');
  assert.strictEqual(claimModel('gemini-3.8-flash', later), false);
});

test('a test whose result never arrives stops blocking after two minutes', t => {
  tripBreaker(t, 'gemini-3.8-flash', NOW);
  const later = NOW + COOLDOWN_MS + 1;
  assert.strictEqual(claimModel('gemini-3.8-flash', later), true);

  assert.strictEqual(claimModel('gemini-3.8-flash', later + 119_999), false);
  assert.strictEqual(claimModel('gemini-3.8-flash', later + 120_000), true, 'the caller must have crashed: someone else tests');
});

test('when every model is cooling down each is still tested, but by one caller at a time', t => {
  for (const model of modelChain()) tripBreaker(t, model, NOW);

  assert.deepStrictEqual(modelCandidates(NOW + 1), modelChain(), 'all offered, as before');
  for (const model of modelChain()) {
    assert.strictEqual(claimModel(model, NOW + 1), true, `${model}: first caller`);
    assert.strictEqual(claimModel(model, NOW + 1), false, `${model}: everyone else`);
  }
});

test('resetModelHealth also releases tests that are out', t => {
  tripBreaker(t, 'gemini-3.8-flash', NOW);
  claimModel('gemini-3.8-flash', NOW + COOLDOWN_MS + 1);

  resetModelHealth();

  assert.strictEqual(claimModel('gemini-3.8-flash', NOW + COOLDOWN_MS + 1), true);
  assert.strictEqual(claimModel('gemini-3.8-flash', NOW + COOLDOWN_MS + 1), true, 'and it is in good standing again');
});

test('isTransientFailure separates "the model was unavailable" from "the request or answer was wrong"', () => {
  for (const cause of [LLM_FAILURE.TIMEOUT, LLM_FAILURE.NETWORK, httpFailure(408), httpFailure(429), httpFailure(500), httpFailure(503), httpFailure(504)]) {
    assert.strictEqual(isTransientFailure(cause), true, cause);
  }
  for (const cause of [httpFailure(400), httpFailure(401), httpFailure(403), httpFailure(404), LLM_FAILURE.UNPARSEABLE, LLM_FAILURE.TRUNCATED, LLM_FAILURE.EMPTY, LLM_FAILURE.UNUSABLE, LLM_FAILURE.NO_MODEL]) {
    assert.strictEqual(isTransientFailure(cause), false, cause);
  }
});
