import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test, { beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';
import { config } from '../src/config.js';
import {
  callGeminiJson,
  callGeminiWithSearchGrounding,
  candidateText,
  extractJsonFromText,
  DEFAULT_MAX_OUTPUT_TOKENS,
} from '../src/search/gemini-grounding.js';
import { FAILURES_BEFORE_COOLDOWN, COOLDOWN_MS, recordModelResult, resetModelHealth, retryPolicy } from '../src/search/gemini-models.js';
import { LLM_FAILURE, resetLlmStats, llmStatsSnapshot } from '../src/llm-stats.js';
import { analyzeFeature } from '../src/analyzer/index.js';
import { verifyWithLLM } from '../src/search/verifier.js';
import { planEcosystemQueries } from '../src/search/query-planner.js';
import {
  installGeminiMock,
  answer,
  answerParts,
  apiError,
  overloaded,
  notFound,
  hangs,
  synthesisText,
  SYNTHESIS,
} from './_support/gemini-mock.js';

// With config.geminiModel = PRIMARY the chain is PRIMARY, then these two.
const PRIMARY = 'gemini-3.8-flash';
const SECOND = 'gemini-3.5-flash';
const THIRD = 'gemini-flash-lite-latest';

const KEY = 'test-key-do-not-log';

beforeEach(() => {
  resetLlmStats();
  resetModelHealth();
  config.geminiApiKey = KEY;
  config.geminiModel = PRIMARY;
});

afterEach(() => {
  config.geminiApiKey = '';
});

/** Installs the scriptable Gemini mock for the length of one test. */
function gemini(t, handler) {
  const mock = installGeminiMock(handler);
  t.after(() => mock.restore());
  return mock;
}

/** Collects what the logger sends to stderr (warnings); call once per test. */
function warnings(t) {
  const lines = [];
  t.mock.method(console, 'error', (...args) => lines.push(args.join(' ')));
  return lines;
}

const onlyPrimaryFails = failure => call => (call.model === PRIMARY ? failure : answer('{"ok":true}'));

// --- reading the reply ------------------------------------------------------------------------------------

test('candidateText joins every text part and ignores thoughts and non-text parts', () => {
  const candidate = { content: { parts: [{ text: 'thinking...', thought: true }, { inlineData: {} }, { text: 'b' }, { text: 'c' }] } };
  assert.strictEqual(candidateText(candidate), 'bc');
  assert.strictEqual(candidateText(undefined), '');
  assert.strictEqual(candidateText({ content: {} }), '');
});

test('a reply split over several parts, with a thought part in front, is read in full', async t => {
  warnings(t);
  gemini(t, () => answerParts([
    { text: 'First I will check the schema.', thought: true },
    { text: '{"results":[{"id":0,' },
    { text: '"relevant":true}]}' },
  ]));

  const result = await callGeminiJson('prompt', { stage: 'gemini/verification' });

  assert.deepStrictEqual(result.parsed, { results: [{ id: 0, relevant: true }] });
  assert.strictEqual(llmStatsSnapshot().ok, 1);
});

test('the request leaves room for thinking, and a caller can still choose its own budget', async t => {
  const mock = gemini(t, () => answer('{}'));

  await callGeminiJson('prompt');
  await callGeminiJson('prompt', { maxOutputTokens: 1234 });
  await callGeminiWithSearchGrounding('prompt');

  assert.ok(DEFAULT_MAX_OUTPUT_TOKENS >= 8192, 'thinking tokens count against the budget; 4096 truncated real answers');
  assert.strictEqual(mock.calls[0].body.generationConfig.maxOutputTokens, DEFAULT_MAX_OUTPUT_TOKENS);
  assert.strictEqual(mock.calls[1].body.generationConfig.maxOutputTokens, 1234);
  assert.strictEqual(mock.calls[2].body.generationConfig.maxOutputTokens, DEFAULT_MAX_OUTPUT_TOKENS);
});

// --- counting and reporting ---------------------------------------------------------------------------------

test('a successful call is counted under its stage and model, and says nothing', async t => {
  const logged = warnings(t);
  const mock = gemini(t, () => answer('{"queries":["a"]}'));

  const result = await callGeminiJson('prompt', { stage: 'gemini/query-planning' });

  assert.deepStrictEqual(result.parsed, { queries: ['a'] });
  assert.strictEqual(result.model, PRIMARY);
  assert.strictEqual(mock.calls.length, 1);
  const stats = llmStatsSnapshot();
  assert.deepStrictEqual(stats.byStage['gemini/query-planning'], { ok: 1, failed: 0, failures: {} });
  assert.deepStrictEqual(stats.byModel, { [PRIMARY]: { ok: 1, failed: 0 } });
  assert.deepStrictEqual(logged, []);
});

test('an overloaded model hands over to the next one; the status and reason are logged and both outcomes counted', async t => {
  const logged = warnings(t);
  const mock = gemini(t, onlyPrimaryFails(overloaded()));

  const result = await callGeminiJson('prompt', { stage: 'gemini/verification' });

  assert.strictEqual(result.model, SECOND);
  assert.deepStrictEqual(mock.calls.map(call => call.model), [PRIMARY, SECOND]);
  const stats = llmStatsSnapshot();
  assert.deepStrictEqual(stats.byStage['gemini/verification'], { ok: 1, failed: 1, failures: { http_503: 1 } });
  assert.deepStrictEqual(stats.byModel, { [PRIMARY]: { ok: 0, failed: 1 }, [SECOND]: { ok: 1, failed: 0 } });
  assert.strictEqual(logged.length, 1, logged.join('\n'));
  assert.match(logged[0], /gemini\/verification failed \(http_503\) on gemini-3\.8-flash: UNAVAILABLE: This model is currently experiencing high demand/);
});

test('a timeout is a failure of that model and the chain moves on; the key is never logged', async t => {
  const logged = warnings(t);
  gemini(t, onlyPrimaryFails(hangs()));

  const result = await callGeminiJson('prompt', { stage: 'gemini/verification' });

  assert.strictEqual(result.model, SECOND);
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/verification'].failures, { timeout: 1 });
  assert.match(logged[0], /\(timeout\) on gemini-3\.8-flash/);
  assert.ok(!logged.join('\n').includes(KEY));
});

test('an answer cut off by the output limit is counted as truncated, not unparseable', async t => {
  warnings(t);
  gemini(t, call => (call.model === PRIMARY
    ? answer('{"results":[{"id":0,"rel', { finishReason: 'MAX_TOKENS' })
    : answer('{"results":[]}')));

  const result = await callGeminiJson('prompt', { stage: 'gemini/verification' });

  assert.strictEqual(result.model, SECOND);
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/verification'].failures, { truncated: 1 });
});

test('a reply with no text because the whole budget went on thinking is truncated too', async t => {
  warnings(t);
  gemini(t, call => (call.model === PRIMARY
    ? { json: { candidates: [{ content: { role: 'model' }, finishReason: 'MAX_TOKENS' }] } }
    : answer('{"ok":true}')));

  await callGeminiJson('prompt', { stage: 'gemini/verification' });

  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/verification'].failures, { truncated: 1 });
});

test('prose where JSON was needed is counted as unparseable and the next model is asked', async t => {
  warnings(t);
  gemini(t, call => (call.model === PRIMARY ? answer('Sorry, I cannot produce that.') : answer('{"ok":true}')));

  const result = await callGeminiJson('prompt', { stage: 'gemini/verification' });

  assert.strictEqual(result.model, SECOND);
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/verification'].failures, { unparseable: 1 });
});

test('JSON the caller rejects is counted as unusable and the next model is asked', async t => {
  warnings(t);
  gemini(t, call => (call.model === PRIMARY ? answer('{"nope":1}') : answer('{"queries":["q"]}')));

  const result = await callGeminiJson('prompt', {
    stage: 'gemini/query-planning',
    accept: parsed => Array.isArray(parsed.queries),
  });

  assert.deepStrictEqual(result.parsed, { queries: ['q'] });
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/query-planning'], { ok: 1, failed: 1, failures: { unusable: 1 } });
});

test('when nothing usable ever comes back the result is null and every attempt is on record', async t => {
  warnings(t);
  const mock = gemini(t, () => answer('{"nope":1}'));

  const result = await callGeminiJson('prompt', { stage: 'gemini/query-planning', accept: () => false });

  assert.strictEqual(result, null);
  assert.strictEqual(mock.calls.length, 3, 'one try per model, no second pass: asking again would not change the answer');
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/query-planning'], { ok: 0, failed: 3, failures: { unusable: 3 } });
});

// --- overload, retries and the model chain -----------------------------------------------------------------

test('when every model is overloaded the whole chain is tried once more, and a recovery is used', async t => {
  warnings(t);
  const mock = gemini(t, call => (call.nth === 0 ? overloaded() : answer('{"ok":true}')));

  const result = await callGeminiJson('prompt', { stage: 'gemini/verification' });

  assert.deepStrictEqual(
    mock.calls.map(call => `${call.model}#${call.nth}`),
    [`${PRIMARY}#0`, `${SECOND}#0`, `${THIRD}#0`, `${PRIMARY}#1`]
  );
  assert.strictEqual(result.model, PRIMARY);
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/verification'], { ok: 1, failed: 3, failures: { http_503: 3 } });
});

test('there are only two passes: a persistent outage ends in null, not a retry loop', async t => {
  warnings(t);
  const mock = gemini(t, () => overloaded());

  const result = await callGeminiJson('prompt', { stage: 'gemini/verification' });

  assert.strictEqual(result, null);
  // Three models, two passes. A single call leaves each model at one failure on the first pass, so none is
  // set aside yet when the second pass starts; they reach two failures (and the cooldown) only at its end.
  assert.deepStrictEqual(
    mock.calls.map(call => `${call.model}#${call.nth}`),
    [PRIMARY, SECOND, THIRD].flatMap(model => [`${model}#0`]).concat([PRIMARY, SECOND, THIRD].map(model => `${model}#1`))
  );
});

test('the second pass waits first, since an overload usually clears within seconds, and the wait is jittered', async t => {
  warnings(t);
  // test/_support/setup.js zeroes the pause so that every other test stays fast; borrow the real mechanism here.
  const before = { ...retryPolicy };
  t.after(() => Object.assign(retryPolicy, before));
  retryPolicy.delayMs = 40;
  retryPolicy.jitterMs = 40;
  t.mock.method(Math, 'random', () => 0.5); // so the pause is 40 ms plus half of 40 ms

  const times = [];
  gemini(t, call => {
    times.push(performance.now());
    return call.nth === 0 ? overloaded() : answer('{"ok":true}');
  });

  await callGeminiJson('prompt', { stage: 'gemini/verification' });

  assert.strictEqual(times.length, 4, 'three models in the first pass, then the first one again');
  const waited = times[3] - times[2];
  // 60 ms were asked for. A timer cannot fire early, so the lower bound is safe; only the delay and the jitter
  // together reach it, and no wait at all is a few milliseconds.
  assert.ok(waited >= 50, `only ${waited.toFixed(1)} ms passed between the passes`);
});

test('failures that retrying cannot fix do not trigger a second pass', async t => {
  warnings(t);
  const mock = gemini(t, () => apiError(400, 'Request contains an invalid argument.', 'INVALID_ARGUMENT'));

  const result = await callGeminiJson('prompt', { stage: 'gemini/verification' });

  assert.strictEqual(result, null);
  assert.strictEqual(mock.calls.length, 3, 'each model once');
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/verification'].failures, { http_400: 3 });
});

test('a model the API no longer serves is asked once per run, not once per call', async t => {
  warnings(t);
  const mock = gemini(t, call => (call.model === PRIMARY ? notFound(call.model) : answer('{"ok":true}')));

  for (let i = 0; i < 4; i++) await callGeminiJson('prompt', { stage: 'gemini/verification' });

  assert.strictEqual(mock.calls.filter(call => call.model === PRIMARY).length, 1);
  assert.strictEqual(mock.calls.filter(call => call.model === SECOND).length, 4);
});

test('a model that keeps hanging is set aside instead of costing every call a full timeout', async t => {
  warnings(t);
  const mock = gemini(t, onlyPrimaryFails(hangs()));

  for (let i = 0; i < 6; i++) await callGeminiJson('prompt', { stage: 'gemini/verification' });

  assert.strictEqual(mock.calls.filter(call => call.model === PRIMARY).length, FAILURES_BEFORE_COOLDOWN);
  assert.strictEqual(llmStatsSnapshot().byStage['gemini/verification'].ok, 6, 'every call still got an answer');
});

test('with every model gone the call says so once and then sends nothing', async t => {
  const logged = warnings(t);
  const mock = gemini(t, call => notFound(call.model));

  assert.strictEqual(await callGeminiJson('prompt', { stage: 'gemini/verification' }), null);
  const sent = mock.calls.length;
  assert.strictEqual(sent, 3, 'each model once; a 404 is not retried');

  assert.strictEqual(await callGeminiJson('prompt', { stage: 'gemini/verification' }), null);
  assert.strictEqual(mock.calls.length, sent, 'no request once nothing can be asked');
  assert.strictEqual(llmStatsSnapshot().byStage['gemini/verification'].failures.no_model, 1);
  assert.ok(logged.some(line => /GEMINI_MODEL/.test(line)));
});

test('without an API key nothing is sent and nothing is counted', async t => {
  config.geminiApiKey = '';
  const mock = gemini(t, () => answer('{}'));

  assert.strictEqual(await callGeminiJson('prompt'), null);
  assert.strictEqual(await callGeminiWithSearchGrounding('prompt'), null);
  assert.strictEqual(mock.calls.length, 0);
  assert.strictEqual(llmStatsSnapshot().attempts, 0);
});

// --- grounded calls -------------------------------------------------------------------------------------------

const GROUNDING = {
  groundingMetadata: {
    webSearchQueries: ['web platform feature'],
    groundingChunks: [
      { web: { uri: 'https://example.com/article', title: 'An article' } },
      { web: { uri: 'https://example.com/article', title: 'The same article again' } },
      { web: { uri: 'https://blog.example.org/post' } },
    ],
  },
};

test('a grounded search needs no JSON: the answer and its sources are returned in the usual shape', async t => {
  warnings(t);
  const mock = gemini(t, () => answer('Here are the articles I found.', GROUNDING));

  const result = await callGeminiWithSearchGrounding('prompt', { stage: 'gemini/search' });

  assert.deepStrictEqual(Object.keys(result).sort(), ['groundedArticles', 'groundingChunks', 'model', 'parsedJson', 'text', 'webSearchQueries']);
  assert.strictEqual(result.model, PRIMARY);
  assert.strictEqual(result.text, 'Here are the articles I found.');
  assert.strictEqual(result.parsedJson, null);
  assert.deepStrictEqual(result.webSearchQueries, ['web platform feature']);
  assert.deepStrictEqual(result.groundedArticles.map(a => [a.url, a.domain, a.title]), [
    ['https://example.com/article', 'example.com', 'An article'],
    ['https://blog.example.org/post', 'blog.example.org', 'blog.example.org'],
  ]);
  assert.ok(mock.calls[0].grounded, 'the search tool is enabled');
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/search'], { ok: 1, failed: 0, failures: {} });
});

test('requireJson turns a prose-only grounded answer into a counted failure and asks the next model', async t => {
  warnings(t);
  gemini(t, call => (call.model === PRIMARY ? answer('Prose only, no JSON.', GROUNDING) : answer(synthesisText(), GROUNDING)));

  const result = await callGeminiWithSearchGrounding('prompt', { stage: 'gemini/synthesis', requireJson: true });

  assert.strictEqual(result.model, SECOND);
  assert.deepStrictEqual(result.parsedJson, SYNTHESIS);
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/synthesis'], { ok: 1, failed: 1, failures: { unparseable: 1 } });
});

test('a grounded answer cut off mid-JSON is truncated, and a model that answers properly is used', async t => {
  warnings(t);
  gemini(t, call => (call.model === PRIMARY
    ? answer('```json\n{"executiveSummary": "Cut off in the mid', { finishReason: 'MAX_TOKENS', ...GROUNDING })
    : answer(synthesisText(), GROUNDING)));

  const result = await callGeminiWithSearchGrounding('prompt', { stage: 'gemini/synthesis', requireJson: true });

  assert.strictEqual(result.model, SECOND);
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/synthesis'].failures, { truncated: 1 });
});

test('a grounded answer with no text and no sources is empty; a blocked prompt says why', async t => {
  const logged = warnings(t);
  gemini(t, () => ({ json: { promptFeedback: { blockReason: 'SAFETY' } } }));

  const result = await callGeminiWithSearchGrounding('prompt', { stage: 'gemini/search' });

  assert.strictEqual(result, null);
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/search'].failures, { empty: 3 });
  assert.match(logged[0], /blocked \(SAFETY\)/);
});

test('a grounded answer that is only sources still counts as an answer', async t => {
  warnings(t);
  gemini(t, () => answerParts([], GROUNDING));

  const result = await callGeminiWithSearchGrounding('prompt', { stage: 'gemini/search' });

  assert.strictEqual(result.groundedArticles.length, 2);
});

// --- the whole synthesis path -----------------------------------------------------------------------------------

const feature = {
  id: 1, name: 'Test API', milestone: 154, category: 'Enabled by default', statusType: 'enabled',
  summary: 'Does a thing.', browsers: { firefox: { view: 'No signal' }, safari: { view: 'No signal' } },
};

const ecosystem = () => ({
  metrics: {
    hnPoints: 0, hnComments: 0, twitterLikes: 0, twitterReplies: 0, totalArticles: 0,
    totalStandards: 0, totalPackages: 0, hasPolyfill: false, hasDemos: false,
  },
  discussions: [], standards: [], packages: [], articles: [], resources: [], verifiedPolyfill: null,
});

test('a feature still gets its AI synthesis when the configured model is overloaded and the fallback answers in parts', async t => {
  warnings(t);
  const mock = gemini(t, call => (call.model === PRIMARY
    ? overloaded()
    : answerParts([{ text: synthesisText().slice(0, 40) }, { text: synthesisText().slice(40) }], GROUNDING)));

  const analysis = await analyzeFeature(feature, ecosystem());

  assert.strictEqual(analysis.isAiEnhanced, true);
  assert.strictEqual(analysis.executiveSummary, SYNTHESIS.executiveSummary);
  // The sources the answer cited are then checked for relevance through the same mock; only the
  // synthesis itself (the calls with the search tool) says which models were tried for it.
  assert.deepStrictEqual(mock.calls.filter(call => call.grounded).map(call => call.model), [PRIMARY, SECOND]);
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/synthesis'], { ok: 1, failed: 1, failures: { http_503: 1 } });
});

test('a feature falls back to the heuristic analysis, loudly, when no model gives a usable synthesis', async t => {
  const logged = warnings(t);
  gemini(t, () => answer('{"unrelated":true}'));

  const analysis = await analyzeFeature(feature, ecosystem());

  assert.strictEqual(analysis.isAiEnhanced, false);
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/synthesis'].failures, { unusable: 3 });
  assert.ok(logged.some(line => /gemini\/synthesis failed \(unusable\)/.test(line)), logged.join('\n'));
});

// --- credentials ---------------------------------------------------------------------------------------------------

test('the API key travels in the x-goog-api-key header and never appears in a URL', async t => {
  warnings(t);
  const mock = gemini(t, () => answer('{"ok":true}', GROUNDING));

  await callGeminiJson('prompt');
  await callGeminiWithSearchGrounding('prompt');

  assert.strictEqual(mock.calls.length, 2);
  for (const call of mock.calls) {
    assert.strictEqual(call.headers['x-goog-api-key'], KEY);
    assert.ok(!call.url.includes(KEY), call.url);
    assert.ok(!/[?&]key=/i.test(call.url), call.url);
  }
});

// --- cut-off answers ---------------------------------------------------------------------------------------------

test('extractJsonFromText takes an array out of prose, unless it is told the answer was cut off', () => {
  assert.deepStrictEqual(extractJsonFromText('Result: [1,2] done'), [1, 2]);
  assert.strictEqual(extractJsonFromText('Result: [1,2] done', { salvageArrays: false }), null);
  assert.deepStrictEqual(extractJsonFromText('[1,2]', { salvageArrays: false }), [1, 2], 'a whole array is still read');
  assert.deepStrictEqual(extractJsonFromText('```json\n[1,2]\n```', { salvageArrays: false }), [1, 2]);
  assert.deepStrictEqual(extractJsonFromText('Here: {"a":1} and more', { salvageArrays: false }), { a: 1 });
});

test('an answer cut off inside a list is truncated, not rescued as that list', async t => {
  warnings(t);
  gemini(t, call => (call.model === PRIMARY
    ? answer('{"summary":"Chrome ships X behind a flag [1]. Developers say', { finishReason: 'MAX_TOKENS' })
    : answer('{"summary":"complete"}')));

  const result = await callGeminiJson('prompt', { stage: 'gemini/synthesis' });

  assert.strictEqual(result.model, SECOND);
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/synthesis'].failures, { truncated: 1 });
});

test('the same holds for a grounded answer that must contain JSON', async t => {
  warnings(t);
  gemini(t, call => (call.model === PRIMARY
    ? answer('{"queries":["a","b"],"extra":"cut off here', { finishReason: 'MAX_TOKENS', ...GROUNDING })
    : answer(synthesisText(), GROUNDING)));

  const result = await callGeminiWithSearchGrounding('prompt', { stage: 'gemini/synthesis', requireJson: true });

  assert.strictEqual(result.model, SECOND);
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/synthesis'].failures, { truncated: 1 });
});

test('a cut-off answer whose fragment is rejected by the caller is still counted as truncated', async t => {
  const logged = warnings(t);
  gemini(t, call => (call.model === PRIMARY
    ? answer('{"first":1} {"second":', { finishReason: 'MAX_TOKENS' }) // the complete object is all that parsed
    : answer('{"first":2}')));

  const result = await callGeminiJson('prompt', { stage: 'gemini/synthesis', accept: parsed => parsed.first === 2 });

  assert.strictEqual(result.model, SECOND);
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/synthesis'].failures, { truncated: 1 });
  // The detail tells this apart from a cut-off reply in which nothing parsed at all.
  assert.ok(
    logged.some(line => /failed \(truncated\) on gemini-3\.8-flash: .*only a fragment of it parsed/.test(line)),
    logged.join('\n')
  );
});

test('the same holds for a grounded answer whose cut-off JSON the caller rejects', async t => {
  const logged = warnings(t);
  gemini(t, call => (call.model === PRIMARY
    ? answer('{"first":1} {"second":', { finishReason: 'MAX_TOKENS', ...GROUNDING })
    : answer('{"first":2}', GROUNDING)));

  const result = await callGeminiWithSearchGrounding('prompt', {
    stage: 'gemini/synthesis',
    requireJson: true,
    accept: parsed => parsed.first === 2,
  });

  assert.strictEqual(result.model, SECOND);
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/synthesis'].failures, { truncated: 1 });
  assert.ok(logged.some(line => /only a fragment of it parsed/.test(line)), logged.join('\n'));
});

// --- surprises in the reply ---------------------------------------------------------------------------------------

test('an exception while handling one model\'s answer costs that model, not the whole call', async t => {
  const logged = warnings(t);
  gemini(t, call => (call.model === PRIMARY ? answer('{"first":true}') : answer('{"ok":true}')));

  const result = await callGeminiJson('prompt', {
    stage: 'gemini/verification',
    accept: parsed => {
      if (parsed.first) throw new TypeError('cannot read the thing');
      return true;
    },
  });

  assert.strictEqual(result.model, SECOND);
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/verification'], { ok: 1, failed: 1, failures: { internal_error: 1 } });
  assert.ok(logged.some(line => /internal_error\) on gemini-3\.8-flash: cannot read the thing/.test(line)), logged.join('\n'));
});

test('grounding data of an unexpected shape is read safely', async t => {
  warnings(t);
  gemini(t, () => answer('Found these.', {
    groundingMetadata: {
      webSearchQueries: ['real query', 5, null],
      groundingChunks: [null, 'junk', { web: 5 }, { web: { uri: 7 } }, { web: { uri: 'https://ok.example/a', title: { not: 'a string' } } }],
    },
  }));

  const result = await callGeminiWithSearchGrounding('prompt', { stage: 'gemini/search' });

  assert.deepStrictEqual(result.webSearchQueries, ['real query']);
  assert.deepStrictEqual(result.groundedArticles.map(article => [article.url, article.title]), [['https://ok.example/a', 'ok.example']]);
});

test('grounding data that is not even a list is ignored rather than thrown on', async t => {
  warnings(t);
  gemini(t, () => answer('Found these.', { groundingMetadata: { webSearchQueries: 'q', groundingChunks: { 0: { web: { uri: 'https://ok.example/a' } } } } }));

  const result = await callGeminiWithSearchGrounding('prompt', { stage: 'gemini/search' });

  assert.deepStrictEqual(result.webSearchQueries, []);
  assert.deepStrictEqual(result.groundedArticles, []);
  assert.strictEqual(result.text, 'Found these.');
});

// --- many calls at once ------------------------------------------------------------------------------------------

/** A request that is not answered until the test lets go of it (then it fails the way a timeout does). */
function gate() {
  let open;
  const opened = new Promise(resolve => {
    open = resolve;
  });
  return { opened, open };
}

/** Lets everything that can finish without waiting for a gate finish. */
const settle = () => new Promise(resolve => setTimeout(resolve, 25));

/** Fails `model` as often as it takes to set it aside, long enough ago that the cooldown is already over. */
function dueForATest(model) {
  const past = Date.now() - COOLDOWN_MS - 1_000;
  for (let i = 0; i < FAILURES_BEFORE_COOLDOWN; i++) recordModelResult(model, LLM_FAILURE.TIMEOUT, past);
}

test('after a cooldown one call tests the failing model while concurrent calls carry on with the models that work', async t => {
  warnings(t);
  const hung = gate();
  const mock = gemini(t, async call => {
    if (call.model !== PRIMARY) return answer('{"ok":true}');
    await hung.opened;
    return hangs();
  });
  dueForATest(PRIMARY);

  let finished = 0;
  const calls = Array.from({ length: 5 }, () =>
    callGeminiJson('prompt', { stage: 'gemini/verification' }).then(result => {
      finished++;
      return result;
    })
  );
  await settle();

  assert.strictEqual(mock.calls.filter(call => call.model === PRIMARY).length, 1, 'one request tests the model');
  assert.strictEqual(finished, 4, 'the other four did not wait for it');

  hung.open();
  const results = await Promise.all(calls);

  assert.ok(results.every(result => result.model === SECOND), 'the call that did the testing moved on to the next model');
  assert.strictEqual(mock.calls.filter(call => call.model === PRIMARY).length, 1, 'and nobody else asked');
});

test('a model that passes its test is used by everyone again', async t => {
  warnings(t);
  const mock = gemini(t, () => answer('{"ok":true}'));
  dueForATest(PRIMARY);

  const tester = await callGeminiJson('prompt', { stage: 'gemini/verification' });
  assert.strictEqual(tester.model, PRIMARY, 'the first call tests it, and it answers');

  const results = await Promise.all(Array.from({ length: 4 }, () => callGeminiJson('prompt', { stage: 'gemini/verification' })));

  assert.ok(results.every(result => result.model === PRIMARY), 'no longer one at a time');
  assert.strictEqual(mock.calls.length, 5);
});

test('when every model is already being tested, further calls give up at once instead of piling on', async t => {
  const logged = warnings(t);
  const hung = gate();
  const mock = gemini(t, async () => {
    await hung.opened;
    return hangs();
  });
  for (const model of [PRIMARY, SECOND, THIRD]) dueForATest(model);

  const testers = [0, 1, 2].map(() => callGeminiJson('prompt', { stage: 'gemini/verification' }));
  await settle();
  assert.strictEqual(mock.calls.length, 3, 'one test request per model');

  const late = await callGeminiJson('prompt', { stage: 'gemini/verification' });

  assert.strictEqual(late, null);
  assert.strictEqual(mock.calls.length, 3, 'nothing was sent for it');
  assert.strictEqual(llmStatsSnapshot().byStage['gemini/verification'].failures.cooling_down, 1);
  assert.ok(logged.some(line => /gemini\/verification failed \(cooling_down\)/.test(line)), logged.join('\n'));

  hung.open();
  await Promise.all(testers);
});

// --- the callers that ask for a particular shape --------------------------------------------------------------------

test('a verdict list under the wrong keys is rejected and the next model is asked', async t => {
  warnings(t);
  const wrong = JSON.stringify({ results: [{ id: 0, relevant: true, reason: 'x' }] });
  const right = JSON.stringify({ results: [{ id: 0, isRelevant: true, confidence: 95, reason: 'About it' }] });
  gemini(t, call => (call.model === PRIMARY ? answer(wrong) : answer(right)));

  const verdicts = await verifyWithLLM(feature, [{ title: 'Using Test API', url: 'https://example.com/x', source: 'web' }]);

  assert.deepStrictEqual(verdicts, [{ id: 0, isRelevant: true, confidence: 95, reason: 'About it' }]);
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/verification'], { ok: 1, failed: 1, failures: { unusable: 1 } });
});

test('a query plan without query strings is rejected and the next model is asked', async t => {
  warnings(t);
  gemini(t, call => (call.model === PRIMARY
    ? answer(JSON.stringify({ queries: [{ q: 'wrong key' }] }))
    : answer(JSON.stringify({ queries: [{ query: 'test api tutorial', intent: 'tutorials-blogs', description: 'Tutorials' }] }))));

  const queries = await planEcosystemQueries({ id: 1, name: 'Test API', summary: 'Does a thing.' });

  assert.ok(queries.some(q => q.query === 'test api tutorial'), 'the second model\'s query was planned');
  assert.deepStrictEqual(llmStatsSnapshot().byStage['gemini/query-planning'], { ok: 1, failed: 1, failures: { unusable: 1 } });
});
