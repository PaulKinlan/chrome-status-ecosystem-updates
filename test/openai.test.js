import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test, { beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';
import { config } from '../src/config.js';
import { callOpenAiJson, OPENAI_MODEL } from '../src/search/openai.js';
import { resetLlmStats, llmStatsSnapshot } from '../src/llm-stats.js';
import { resetModelHealth } from '../src/search/gemini-models.js';
import { analyzeFeature } from '../src/analyzer/index.js';
import { verifyWithLLM } from '../src/search/verifier.js';
import { planEcosystemQueries } from '../src/search/query-planner.js';
import { installOpenAiMock, completion, openAiError } from './_support/openai-mock.js';
import { installGeminiMock, overloaded, SYNTHESIS } from './_support/gemini-mock.js';

const KEY = 'sk-test-key-do-not-log';

beforeEach(() => {
  resetLlmStats();
  resetModelHealth();
  config.openaiApiKey = KEY;
});

afterEach(() => {
  config.openaiApiKey = '';
  config.geminiApiKey = '';
});

/** Installs the scriptable OpenAI mock for the length of one test. */
function openai(t, handler) {
  const mock = installOpenAiMock(handler);
  t.after(() => mock.restore());
  return mock;
}

/** Collects what the logger sends to stderr (warnings); call once per test. */
function warnings(t) {
  const lines = [];
  t.mock.method(console, 'error', (...args) => lines.push(args.join(' ')));
  return lines;
}

/** One request, with no per-request retries so a failure is a single attempt. */
const ask = (extra = {}) =>
  callOpenAiJson({ system: 'You answer in JSON.', prompt: 'What is 1+1?', stage: 'openai/test', label: 'OpenAI test', retries: 0, ...extra });

const stage = () => llmStatsSnapshot().byStage['openai/test'];

// --- the request and the happy path -----------------------------------------------------------------------------

test('without a key nothing is sent and nothing is counted', async t => {
  config.openaiApiKey = '';
  const mock = openai(t, () => completion('{}'));

  assert.strictEqual(await ask(), null);

  assert.strictEqual(mock.calls.length, 0);
  assert.strictEqual(llmStatsSnapshot().attempts, 0);
});

test('a JSON answer comes back parsed, from a request shaped for JSON mode, and is counted against its model', async t => {
  warnings(t);
  const mock = openai(t, () => completion('Sure:\n```json\n{"answer":2}\n```'));

  const result = await ask({ temperature: 0.4 });

  assert.deepStrictEqual(result.parsed, { answer: 2 });
  assert.match(result.text, /"answer":2/);

  assert.strictEqual(mock.calls.length, 1);
  const [call] = mock.calls;
  assert.strictEqual(call.url, 'https://api.openai.com/v1/chat/completions');
  assert.strictEqual(call.headers.Authorization, `Bearer ${KEY}`);
  assert.deepStrictEqual(call.body, {
    model: OPENAI_MODEL,
    messages: [
      { role: 'system', content: 'You answer in JSON.' },
      { role: 'user', content: 'What is 1+1?' },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.4,
  });

  assert.deepStrictEqual(stage(), { ok: 1, failed: 0, failures: {} });
  assert.deepStrictEqual(llmStatsSnapshot().byModel, { [OPENAI_MODEL]: { ok: 1, failed: 0 } });
});

test('JSON the caller accepts is a success; JSON it rejects is an unusable failure', async t => {
  const logged = warnings(t);
  openai(t, call => completion(call.index === 0 ? '{"executiveSummary":"fine"}' : '{"other":1}'));
  const accept = parsed => typeof parsed.executiveSummary === 'string';

  assert.deepStrictEqual((await ask({ accept })).parsed, { executiveSummary: 'fine' });
  assert.strictEqual(await ask({ accept }), null);

  assert.deepStrictEqual(stage(), { ok: 1, failed: 1, failures: { unusable: 1 } });
  assert.match(logged[0], /openai\/test failed \(unusable\)/);
});

// --- the ways a call can fail ------------------------------------------------------------------------------------

const failures = [
  ['a rate limit', openAiError(429, 'Rate limit reached for gpt-4o-mini', 'rate_limit_exceeded'), 'http_429', /Rate limit reached/],
  ['an outage', { status: 503, text: 'upstream connect error', headers: { 'retry-after': '0' } }, 'http_503', /upstream connect error/],
  ['a revoked key', openAiError(401, 'Incorrect API key provided', 'invalid_api_key'), 'http_401', /Incorrect API key provided/],
  ['a request that outlives its deadline', { throws: Object.assign(new Error('Request timed out after 45000ms'), { name: 'TimeoutError' }) }, 'timeout', /timed out/],
  ['a dropped connection', { throws: new TypeError('fetch failed') }, 'network', /fetch failed/],
  ['a body that is not JSON', { text: '<html>Bad gateway</html>' }, 'unparseable', /could not be read/],
  ['a reply with no message', { json: { choices: [] } }, 'empty', /no message content/],
  ['a message that is not JSON', completion("I'm sorry, I can't help with that."), 'unparseable', /no JSON/],
];

for (const [name, spec, cause, detail] of failures) {
  test(`${name} is a counted ${cause} failure, warned about with the model named and no secret in it`, async t => {
    const logged = warnings(t);
    const mock = openai(t, () => spec);

    assert.strictEqual(await ask(), null);

    assert.strictEqual(mock.calls.length, 1, 'retries: 0 means one request');
    assert.deepStrictEqual(stage(), { ok: 0, failed: 1, failures: { [cause]: 1 } });
    assert.deepStrictEqual(llmStatsSnapshot().byModel, { [OPENAI_MODEL]: { ok: 0, failed: 1 } });
    assert.strictEqual(logged.length, 1, logged.join('\n'));
    assert.match(logged[0], new RegExp(`openai/test failed \\(${cause}\\) on ${OPENAI_MODEL}`));
    assert.match(logged[0], detail);
    assert.ok(!logged[0].includes(KEY), 'the API key never reaches the log');
  });
}

test('a repeated failure is warned about once and counted every time', async t => {
  const logged = warnings(t);
  openai(t, () => openAiError(429, 'Rate limit reached', 'rate_limit_exceeded'));

  for (let i = 0; i < 3; i++) await ask();

  assert.strictEqual(logged.length, 1);
  assert.deepStrictEqual(stage(), { ok: 0, failed: 3, failures: { http_429: 3 } });
});

test('a transient 5xx is retried by the shared client before anything is counted', async t => {
  warnings(t);
  const mock = openai(t, call => (call.index === 0
    ? { status: 503, text: 'busy', headers: { 'retry-after': '0' } }
    : completion('{"ok":true}')));

  const result = await ask({ retries: undefined });

  assert.deepStrictEqual(result.parsed, { ok: true });
  assert.strictEqual(mock.calls.length, 2);
  assert.deepStrictEqual(stage(), { ok: 1, failed: 0, failures: {} });
});

// --- the callers: OpenAI takes over when Gemini cannot answer -----------------------------------------------------

/** Installs both mocks; they are restored in the reverse order because the second wraps the first. */
function bothProviders(t, { gemini, openaiHandler }) {
  config.geminiApiKey = 'gemini-test-key-do-not-log';
  config.geminiModel = 'gemini-3.8-flash';
  const o = installOpenAiMock(openaiHandler);
  const g = installGeminiMock(gemini);
  t.after(() => {
    g.restore();
    o.restore();
  });
  return { gemini: g, openai: o };
}

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

test('a feature is synthesised by OpenAI when every Gemini model is overloaded, and both outcomes are visible', async t => {
  warnings(t);
  const { openai: o } = bothProviders(t, {
    gemini: () => overloaded(),
    openaiHandler: () => completion(JSON.stringify(SYNTHESIS)),
  });

  const analysis = await analyzeFeature(feature, ecosystem());

  assert.strictEqual(analysis.isAiEnhanced, true);
  assert.strictEqual(analysis.executiveSummary, SYNTHESIS.executiveSummary);
  assert.strictEqual(analysis.isGroundedWithGoogleSearch, false);
  assert.strictEqual(o.calls.length, 1);

  const stats = llmStatsSnapshot();
  assert.deepStrictEqual(stats.byStage['gemini/synthesis'], { ok: 0, failed: 6, failures: { http_503: 6 } });
  assert.deepStrictEqual(stats.byStage['openai/synthesis'], { ok: 1, failed: 0, failures: {} });
  assert.deepStrictEqual(stats.byModel[OPENAI_MODEL], { ok: 1, failed: 0 });
});

test('verdicts come from OpenAI when Gemini cannot give any, and the verification stages say so', async t => {
  warnings(t);
  const verdicts = JSON.stringify({ results: [{ id: 0, isRelevant: true, confidence: 90, reason: 'About the feature' }] });
  bothProviders(t, {
    gemini: () => overloaded(),
    openaiHandler: () => completion(verdicts),
  });

  const result = await verifyWithLLM(feature, [{ title: 'Using Test API', url: 'https://example.com/test-api', source: 'web' }]);

  assert.deepStrictEqual(result, [{ id: 0, isRelevant: true, confidence: 90, reason: 'About the feature' }]);
  const stats = llmStatsSnapshot();
  assert.strictEqual(stats.byStage['gemini/verification'].failed, 6);
  assert.deepStrictEqual(stats.byStage['openai/verification'], { ok: 1, failed: 0, failures: {} });
});

test('with neither provider able to answer, the analysis is heuristic and every failed attempt is counted', async t => {
  warnings(t);
  const { openai: o } = bothProviders(t, {
    gemini: () => overloaded(),
    openaiHandler: () => openAiError(429, 'Rate limit reached', 'rate_limit_exceeded'),
  });

  const analysis = await analyzeFeature(feature, ecosystem());

  assert.strictEqual(analysis.isAiEnhanced, false);
  const stats = llmStatsSnapshot();
  assert.strictEqual(stats.ok, 0);
  assert.strictEqual(stats.byStage['gemini/synthesis'].failed, 6);
  // The shared client retries a 429 twice inside one call, so three requests are one counted failure.
  assert.strictEqual(o.calls.length, 3);
  assert.deepStrictEqual(stats.byStage['openai/synthesis'], { ok: 0, failed: 1, failures: { http_429: 1 } });
});

test('JSON from OpenAI that lacks the synthesis fields is a counted unusable failure, not a success', async t => {
  const logged = warnings(t);
  bothProviders(t, {
    gemini: () => overloaded(),
    openaiHandler: () => completion('{"unrelated":true}'),
  });

  const analysis = await analyzeFeature(feature, ecosystem());

  assert.strictEqual(analysis.isAiEnhanced, false);
  const stats = llmStatsSnapshot();
  assert.strictEqual(stats.ok, 0);
  assert.deepStrictEqual(stats.byStage['openai/synthesis'], { ok: 0, failed: 1, failures: { unusable: 1 } });
  assert.ok(logged.some(line => /openai\/synthesis failed \(unusable\) on gpt-4o-mini/.test(line)), logged.join('\n'));
});

// --- what reaches the log -------------------------------------------------------------------------------------------

test('a revoked key is reported without the key OpenAI quotes back at us', async t => {
  const logged = warnings(t);
  // The wording and masking are what the real API sends for an invalid key.
  openai(t, () => openAiError(
    401,
    'Incorrect API key provided: sk-proj-********************abcd. You can find your API key at https://platform.openai.com/account/api-keys.',
    'invalid_api_key'
  ));

  assert.strictEqual(await ask(), null);

  assert.strictEqual(logged.length, 1);
  assert.match(logged[0], /http_401\) on gpt-4o-mini: invalid_api_key: Incorrect API key provided: \[redacted\]\. You can find your API key/);
  assert.ok(!/sk-proj|abcd/.test(logged[0]), logged[0]);
});

// --- answers that were cut off --------------------------------------------------------------------------------------

const cutOff = content => ({ json: { choices: [{ index: 0, message: { role: 'assistant', content }, finish_reason: 'length' }] } });

test('an answer cut off at the token limit is truncated, not rescued as a list from inside it', async t => {
  const logged = warnings(t);
  openai(t, () => cutOff('{"summary":"Ships behind a flag [1]. Developers say'));

  assert.strictEqual(await ask(), null);

  assert.deepStrictEqual(stage(), { ok: 0, failed: 1, failures: { truncated: 1 } });
  assert.match(logged[0], /openai\/test failed \(truncated\)/);
});

test('a fragment of a cut-off answer that the caller rejects is still counted as truncated', async t => {
  warnings(t);
  openai(t, () => cutOff('{"first":1'));

  assert.strictEqual(await ask({ accept: parsed => parsed.first === 2 }), null);

  assert.deepStrictEqual(stage(), { ok: 0, failed: 1, failures: { truncated: 1 } });
});

// --- OpenAI has no schema to enforce the reply shape, so the prompt states it and the callers check it -------------

const aFeature = { id: 1, name: 'Test API', summary: 'Does a thing.' };
const aCandidate = { title: 'Using Test API', url: 'https://example.com/x', source: 'web' };

test('the verifier prompt spells out the verdict format', async t => {
  warnings(t);
  const mock = openai(t, () => completion(JSON.stringify({ results: [{ id: 0, isRelevant: true, confidence: 90, reason: 'ok' }] })));

  await verifyWithLLM(aFeature, [aCandidate]);

  const prompt = mock.calls[0].body.messages[1].content;
  for (const field of ['"results"', '"id"', '"isRelevant"', '"confidence"', '"reason"']) assert.ok(prompt.includes(field), field);
});

test('a verdict list under the wrong keys is an unusable answer, not a list of rejections', async t => {
  warnings(t);
  openai(t, () => completion(JSON.stringify({ results: [{ id: 0, relevant: true, reason: 'x' }] })));

  const verdicts = await verifyWithLLM(aFeature, [aCandidate]);

  assert.strictEqual(verdicts, null, 'so the caller falls back to the deterministic check');
  assert.deepStrictEqual(llmStatsSnapshot().byStage['openai/verification'], { ok: 0, failed: 1, failures: { unusable: 1 } });
});

test('verdicts are read strictly: only entries with an id and a true/false judgement count, and nothing is coerced into one', async t => {
  warnings(t);
  openai(t, () => completion(JSON.stringify({
    results: [
      { id: '1', isRelevant: 'false', confidence: 250, reason: 'y'.repeat(500) }, // string id and flag are understood; the rest is bounded
      { id: null, isRelevant: true },     // Number(null) is 0: a missing id must not become candidate 0
      { id: 2, isRelevant: 'maybe' },     // not a judgement
      { id: 3 },                          // no judgement at all
      'not an object',
      { id: 4, isRelevant: false, confidence: 'high' }, // no usable confidence: the default
    ],
  })));

  const verdicts = await verifyWithLLM(aFeature, [aCandidate, aCandidate, aCandidate, aCandidate, aCandidate]);

  assert.deepStrictEqual(verdicts, [
    { id: 1, isRelevant: false, confidence: 100, reason: 'y'.repeat(300) },
    { id: 4, isRelevant: false, confidence: 85, reason: 'Verified by LLM' },
  ]);
});

test('the query planner prompt spells out the reply format', async t => {
  warnings(t);
  const mock = openai(t, () => completion(JSON.stringify({ queries: [{ query: 'x', intent: 'api-syntax', description: 'd' }] })));

  await planEcosystemQueries(aFeature);

  const prompt = mock.calls[0].body.messages[1].content;
  assert.match(prompt, /"queries":\[\{"query":/);
});

test('planned queries are used whether they arrive as objects or as bare strings, and entries without one are skipped', async t => {
  warnings(t);
  openai(t, () => completion(JSON.stringify({ queries: ['first llm query', { query: 'second llm query', intent: 'api-syntax' }, { q: 'ignored' }, 7, '   '] })));

  const planned = await planEcosystemQueries(aFeature);

  const texts = planned.map(q => q.query);
  assert.ok(texts.includes('first llm query'));
  assert.ok(texts.includes('second llm query'));
  assert.ok(!texts.includes('ignored'));
  assert.deepStrictEqual(llmStatsSnapshot().byStage['openai/query-planning'], { ok: 1, failed: 0, failures: {} });
});

test('a query plan under other key names is an unusable answer and plans nothing extra', async t => {
  warnings(t);
  openai(t, () => completion(JSON.stringify({ queries: [{ q: 'wrong key' }] })));

  const planned = await planEcosystemQueries(aFeature);

  assert.ok(planned.every(q => q.intent !== 'llm-semantic' && q.query !== 'wrong key'));
  assert.deepStrictEqual(llmStatsSnapshot().byStage['openai/query-planning'], { ok: 0, failed: 1, failures: { unusable: 1 } });
});
