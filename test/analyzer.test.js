import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import { analyzeEcosystemData } from '../src/analyzer/heuristic.js';

/**
 * Builds an ecosystem payload using the SAME key names that
 * gatherEcosystemData() emits. Do not invent keys here: the previous version of
 * this fixture used `totalStandardsPositions`/`totalPackages`/`hasDemos`, none
 * of which the pipeline produced, so these tests passed for months while the
 * momentum score silently discarded 45 points of signal in production.
 * The contract test at the bottom of this file now guards against that.
 */
function ecosystem(overrides = {}) {
  return {
    metrics: {
      hnPoints: 0,
      hnComments: 0,
      twitterLikes: 0,
      twitterReplies: 0,
      totalArticles: 0,
      totalStandards: 0,
      totalPackages: 0,
      hasPolyfill: false,
      hasDemos: false,
      ...(overrides.metrics || {}),
    },
    discussions: overrides.discussions || [],
    standards: overrides.standards || [],
    packages: overrides.packages || [],
    articles: overrides.articles || [],
    resources: overrides.resources || [],
    verifiedPolyfill: overrides.verifiedPolyfill || null,
  };
}

test('analyzeEcosystemData detects Multi-Engine Consensus', () => {
  const feature = {
    name: 'Standardized Feature',
    milestone: 154,
    category: 'Enabled by default',
    statusType: 'enabled',
    browsers: {
      firefox: { view: 'Positive' },
      safari: { view: 'Support' },
    },
  };

  const ecosystemData = ecosystem({
    metrics: {
      hnPoints: 120,
      hnComments: 45,
      totalArticles: 3,
      totalStandards: 2,
      totalPackages: 1,
      hasPolyfill: true,
      hasDemos: true,
    },
    discussions: [{ source: 'Hacker News', title: 'Discussion on HN', points: 120, commentsCount: 45 }],
    packages: [{ name: 'feature-polyfill', isPolyfill: true }],
  });

  const result = analyzeEcosystemData(feature, ecosystemData);
  assert.strictEqual(result.consensus, 'Multi-Engine Consensus');
  assert.strictEqual(result.momentumLevel, 'High');
  assert.ok(result.momentumScore >= 80);
});

test('analyzeEcosystemData detects Contested / Concerns Raised', () => {
  const feature = {
    name: 'Controversial API',
    milestone: 154,
    category: 'Origin trial',
    statusType: 'origin-trial',
    browsers: {
      firefox: { view: 'Oppose' },
      safari: { view: 'No signal' },
    },
  };

  const ecosystemData = ecosystem({
    metrics: { hnPoints: 10, hnComments: 5, totalArticles: 1, totalStandards: 1 },
    standards: [{ vendor: 'WebKit', labels: ['concerns: fingerprinting'] }],
  });

  const result = analyzeEcosystemData(feature, ecosystemData);
  assert.strictEqual(result.consensus, 'Contested / Concerns Raised');
  assert.strictEqual(result.sentiment, 'Mixed / Skeptical');
  assert.strictEqual(result.hasSecurityConcerns, true);
});

test('standards positions, packages and demos actually move the momentum score', () => {
  const feature = {
    name: 'Signal Feature',
    milestone: 154,
    category: 'Enabled by default',
    statusType: 'enabled',
    browsers: { firefox: { view: 'No signal' }, safari: { view: 'No signal' } },
  };

  const baseline = analyzeEcosystemData(feature, ecosystem());

  // Each of these three was previously read under a key the pipeline never
  // emitted, so each contributed exactly nothing. Assert they are live.
  const withStandards = analyzeEcosystemData(feature, ecosystem({ metrics: { totalStandards: 2 } }));
  const withPackages = analyzeEcosystemData(feature, ecosystem({ metrics: { totalPackages: 2 } }));
  const withDemos = analyzeEcosystemData(feature, ecosystem({ metrics: { hasDemos: true } }));

  assert.ok(withStandards.momentumScore > baseline.momentumScore, 'totalStandards must affect the score');
  assert.ok(withPackages.momentumScore > baseline.momentumScore, 'totalPackages must affect the score');
  assert.ok(withDemos.momentumScore > baseline.momentumScore, 'hasDemos must affect the score');
});

test('social signal is counted but capped so one viral tweet cannot dominate', () => {
  const feature = {
    name: 'Chatty Feature',
    milestone: 154,
    category: 'Enabled by default',
    statusType: 'enabled',
    browsers: { firefox: { view: 'No signal' }, safari: { view: 'No signal' } },
  };

  const quiet = analyzeEcosystemData(feature, ecosystem());
  const some = analyzeEcosystemData(feature, ecosystem({ metrics: { twitterLikes: 10 } }));
  const viral = analyzeEcosystemData(feature, ecosystem({ metrics: { twitterLikes: 100000 } }));

  assert.ok(some.momentumScore > quiet.momentumScore, 'twitter signal must count');
  assert.ok(
    viral.momentumScore < 80,
    'social reach alone must not be able to push a feature to High momentum'
  );
});

test('CONTRACT: every metrics key heuristic.js reads is emitted by search/index.js', () => {
  // This is the regression guard for the original bug. Rather than trusting a
  // hand-written fixture, read both sources and compare the key names directly.
  const heuristicSrc = fs.readFileSync(new URL('../src/analyzer/heuristic.js', import.meta.url), 'utf-8');
  const searchSrc = fs.readFileSync(new URL('../src/search/index.js', import.meta.url), 'utf-8');

  const consumed = new Set(
    [...heuristicSrc.matchAll(/\bmetrics\.([A-Za-z0-9_]+)/g)].map(m => m[1])
  );
  assert.ok(consumed.size > 0, 'expected to find metrics.* reads in heuristic.js');

  // Extract the object literal assigned to `metrics:` in the returned payload.
  const block = searchSrc.match(/\n {4}metrics: \{([\s\S]*?)\n {4}\},/);
  assert.ok(block, 'could not locate the metrics rollup in search/index.js');
  const produced = new Set(
    [...block[1].matchAll(/^\s{6}([A-Za-z0-9_]+)\s*[:,]/gm)].map(m => m[1])
  );

  const missing = [...consumed].filter(k => !produced.has(k));
  assert.deepStrictEqual(
    missing,
    [],
    `heuristic.js reads metrics keys that gatherEcosystemData never emits: ${missing.join(', ')}. ` +
    'These silently evaluate to undefined and score zero.'
  );
});
