import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import { config } from '../src/config.js';
import { analyzeEcosystemData } from '../src/analyzer/heuristic.js';
import { analyzeFeature } from '../src/analyzer/index.js';
import { sanitizeAiAnalysis } from '../src/analyzer/ai.js';
import { SENTIMENTS, SENTIMENT, normalizeSentiment } from '../src/analyzer/sentiment.js';
import { installFetchMock } from './_support/fetch-mock.js';
import { resetLlmStats, llmStatsSnapshot } from '../src/llm-stats.js';

const feature = {
  id: 1, name: 'Test API', milestone: 154, category: 'Enabled by default', statusType: 'enabled',
  summary: 'Does a thing.', browsers: { firefox: { view: 'No signal' }, safari: { view: 'No signal' } },
};

function ecosystem(metrics = {}) {
  return {
    metrics: {
      hnPoints: 0, hnComments: 0, twitterLikes: 0, twitterReplies: 0, totalArticles: 0,
      totalStandards: 0, totalPackages: 0, hasPolyfill: false, hasDemos: false, ...metrics,
    },
    discussions: [], standards: [], packages: [], articles: [], resources: [], verifiedPolyfill: null,
  };
}

/** Temporarily gives `config` a key, mocks Gemini to answer with `text`, and restores both. */
function withGemini(t, text, extra = {}) {
  const saved = config.geminiApiKey;
  config.geminiApiKey = 'test-key';
  const mock = installFetchMock([{
    match: 'generativelanguage.googleapis.com',
    json: { candidates: [{ content: { parts: [{ text }] }, ...extra }] },
  }], { onUnmatched: 'empty' });
  t.after(() => {
    config.geminiApiKey = saved;
    mock.restore();
  });
  return mock;
}

const jsonBlock = (obj) => '```json\n' + JSON.stringify(obj) + '\n```';

test('the canonical sentiment list is what the product promises', () => {
  assert.deepStrictEqual([...SENTIMENTS], ['Positive', 'Cautiously Optimistic', 'Mixed / Skeptical', 'Opposed', 'Neutral']);
});

test('normalizeSentiment maps every dialect seen so far onto the canonical vocabulary', () => {
  const expected = {
    'Positive': SENTIMENT.POSITIVE,
    'Positive / High Interest': SENTIMENT.POSITIVE, // the heuristic engine\'s old spelling
    'positive': SENTIMENT.POSITIVE,
    '  Positive  ': SENTIMENT.POSITIVE,
    'Very enthusiastic': SENTIMENT.POSITIVE,
    'Favourable': SENTIMENT.POSITIVE,
    'Cautiously Optimistic': SENTIMENT.CAUTIOUS,
    'cautiously optimistic': SENTIMENT.CAUTIOUS,
    'Cautiously positive': SENTIMENT.CAUTIOUS,
    'Mixed / Skeptical': SENTIMENT.MIXED,
    'Mixed': SENTIMENT.MIXED,
    'Skeptical': SENTIMENT.MIXED,
    'Mixed, leaning positive': SENTIMENT.MIXED,
    'Opposed': SENTIMENT.OPPOSED,
    'Negative': SENTIMENT.OPPOSED,
    'Neutral': SENTIMENT.NEUTRAL,
  };
  for (const [input, canonical] of Object.entries(expected)) {
    assert.strictEqual(normalizeSentiment(input), canonical, JSON.stringify(input));
  }
});

test('normalizeSentiment never turns a negative into a positive', () => {
  const expected = {
    // contain a positive word, mean the opposite
    'Unfavourable': SENTIMENT.OPPOSED,
    'Unfavorable': SENTIMENT.OPPOSED,
    'not favorable': SENTIMENT.MIXED,
    'Not positive': SENTIMENT.MIXED,
    'Not optimistic': SENTIMENT.MIXED,
    'Unenthusiastic': SENTIMENT.MIXED,
    // contain a positive word, are hedged or inverted
    'Cautiously pessimistic': SENTIMENT.MIXED,
    'Guardedly optimistic': SENTIMENT.CAUTIOUS,
    // words the first version did not know
    'Pessimistic': SENTIMENT.MIXED,
    'Concerned': SENTIMENT.MIXED,
    'Divided': SENTIMENT.MIXED,
    'Lukewarm': SENTIMENT.MIXED,
    // canonical values, whatever their case
    'OPPOSED': SENTIMENT.OPPOSED,
    'mixed / skeptical': SENTIMENT.MIXED,
  };
  for (const [input, canonical] of Object.entries(expected)) {
    assert.strictEqual(normalizeSentiment(input), canonical, JSON.stringify(input));
  }

  // Too ambiguous to place: the caller falls back to the heuristic's sentiment rather than guess.
  for (const input of ['Neutral to positive', 'Neutral to negative', 'No concerns', 'Not opposed', 'not negative']) {
    assert.strictEqual(normalizeSentiment(input), null, JSON.stringify(input));
  }
});

test('normalizeSentiment returns null for anything it cannot place', () => {
  for (const input of ['', '   ', 'bananas', null, undefined, 42, {}, ['Positive']]) {
    assert.strictEqual(normalizeSentiment(input), null, JSON.stringify(input));
  }
});

test('the heuristic engine only ever emits canonical sentiments', () => {
  const seen = new Set();
  for (const firefox of ['No signal', 'Negative', 'Positive']) {
    for (const metrics of [{}, { hnPoints: 30 }, { hnPoints: 100, hnComments: 40 }]) {
      const result = analyzeEcosystemData(
        { ...feature, browsers: { firefox: { view: firefox }, safari: { view: 'No signal' } } },
        ecosystem(metrics)
      );
      seen.add(result.sentiment);
      assert.ok(SENTIMENTS.includes(result.sentiment), `non-canonical sentiment: ${result.sentiment}`);
    }
  }
  assert.ok(seen.size >= 3, `expected several distinct sentiments, saw ${[...seen]}`);
  assert.ok(![...seen].includes('Positive / High Interest'));
});

test('sanitizeAiAnalysis keeps good prose, trims it and canonicalises the sentiment', () => {
  const clean = sanitizeAiAnalysis({
    executiveSummary: '  A good summary.  ',
    communityPulse: 'Folks like it.',
    sentiment: 'Positive / High Interest',
    somethingElse: 'dropped',
  });
  assert.deepStrictEqual(clean, {
    executiveSummary: 'A good summary.',
    communityPulse: 'Folks like it.',
    sentiment: 'Positive',
  });
});

test('sanitizeAiAnalysis rejects values that would render as garbage', () => {
  const clean = sanitizeAiAnalysis({
    executiveSummary: 'Fine.',
    communityPulse: { text: 'an object where a string belongs' },
    browserAlignmentSummary: ['an', 'array'],
    developerActionableAdvice: '   ',
    sentiment: 'bananas',
  });
  assert.deepStrictEqual(clean, { executiveSummary: 'Fine.' });
});

test('sanitizeAiAnalysis caps runaway output', () => {
  const clean = sanitizeAiAnalysis({ executiveSummary: 'x'.repeat(50_000) });
  assert.ok(clean.executiveSummary.length <= 1500);
  assert.ok(clean.executiveSummary.endsWith('…'));
});

test('sanitizeAiAnalysis treats a response with no usable prose as a failure', () => {
  for (const raw of [null, undefined, 'text', 7, [], {}, { sentiment: 'Positive' }, { executiveSummary: 42 }]) {
    assert.strictEqual(sanitizeAiAnalysis(raw), null, JSON.stringify(raw));
  }
});

test('analyzeFeature uses a canonicalised AI sentiment and the AI prose', async (t) => {
  withGemini(t, jsonBlock({
    executiveSummary: 'It is shipping and developers are happy.',
    developerActionableAdvice: 'Adopt with feature detection.',
    sentiment: 'Positive / High Interest',
  }), {
    groundingMetadata: {
      webSearchQueries: ['test api'],
      groundingChunks: [{ web: { uri: 'https://example.com/post', title: 'A post' } }],
    },
  });

  const analysis = await analyzeFeature(feature, ecosystem());

  assert.strictEqual(analysis.isAiEnhanced, true);
  assert.strictEqual(analysis.sentiment, 'Positive');
  assert.strictEqual(analysis.executiveSummary, 'It is shipping and developers are happy.');
  assert.strictEqual(analysis.isGroundedWithGoogleSearch, true);
  assert.deepStrictEqual(analysis.groundedQueries, ['test api']);
  assert.strictEqual(analysis.takeaways[0], 'Actionable Advice: Adopt with feature detection.');
});

test('analyzeFeature falls back to the heuristic sentiment when the AI one is unrecognisable', async (t) => {
  withGemini(t, jsonBlock({ executiveSummary: 'Some prose.', sentiment: 'bananas' }));

  const analysis = await analyzeFeature(feature, ecosystem());

  assert.strictEqual(analysis.isAiEnhanced, true);
  assert.strictEqual(analysis.executiveSummary, 'Some prose.');
  assert.ok(SENTIMENTS.includes(analysis.sentiment));
  assert.strictEqual(analysis.sentiment, analyzeEcosystemData(feature, ecosystem()).sentiment);
});

test('analyzeFeature degrades to the heuristic result when the AI answer has no usable prose', async (t) => {
  withGemini(t, jsonBlock({ executiveSummary: { nested: true }, sentiment: 'Positive' }));

  const analysis = await analyzeFeature(feature, ecosystem());

  assert.strictEqual(analysis.isAiEnhanced, false);
  assert.strictEqual(analysis.executiveSummary, analyzeEcosystemData(feature, ecosystem()).executiveSummary);
});

test('the OpenAI path is validated the same way', async (t) => {
  const saved = config.openaiApiKey;
  config.openaiApiKey = 'test-key';
  const mock = installFetchMock([{
    match: 'api.openai.com',
    json: { choices: [{ message: { content: JSON.stringify({ executiveSummary: 'From OpenAI.', sentiment: 'Mixed' }) } }] },
  }], { onUnmatched: 'empty' });
  t.after(() => {
    config.openaiApiKey = saved;
    mock.restore();
  });

  const analysis = await analyzeFeature(feature, ecosystem());

  assert.strictEqual(analysis.isAiEnhanced, true);
  assert.strictEqual(analysis.executiveSummary, 'From OpenAI.');
  assert.strictEqual(analysis.sentiment, 'Mixed / Skeptical');
});

test('an exception inside the AI synthesis is counted and warned about, and the feature keeps its heuristic analysis', async t => {
  resetLlmStats();
  const logged = [];
  t.mock.method(console, 'error', (...args) => logged.push(args.join(' ')));
  const saved = config.geminiApiKey;
  config.geminiApiKey = 'test-key';
  t.after(() => {
    config.geminiApiKey = saved;
  });

  // The prompt builder reads every package's name; the heuristic engine does not.
  const broken = ecosystem();
  broken.packages = [{ get name() { throw new Error('boom while building the prompt'); } }];

  const analysis = await analyzeFeature(feature, broken);

  assert.strictEqual(analysis.isAiEnhanced, false);
  assert.ok(analysis.executiveSummary, 'the heuristic summary is still there');
  assert.deepStrictEqual(llmStatsSnapshot().byStage['analysis/synthesis'], { ok: 0, failed: 1, failures: { internal_error: 1 } });
  assert.ok(logged.some(line => /analysis\/synthesis failed \(internal_error\): "Test API": boom while building the prompt/.test(line)), logged.join('\n'));
});
