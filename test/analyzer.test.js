import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import { analyzeEcosystemData, classifyStance } from '../src/analyzer/heuristic.js';

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

test('classifyStance understands every position ChromeStatus records for Firefox and Safari', () => {
  const expected = {
    // shipped / committed: an engine that has shipped or is building it is engaged
    'Shipped/Shipping': 'shipped',
    'Shipping': 'shipped',
    'In development': 'committed',
    // positive
    'Positive': 'positive',
    'Support': 'positive',
    'Public support': 'positive',
    'Worth prototyping': 'positive',
    'Important': 'positive',
    // neutral: a stated position that is not an endorsement
    'Neutral': 'neutral',
    'Defer': 'neutral',
    'Under consideration': 'neutral',
    'Closed Without a Position': 'neutral',
    'Non-harmful': 'neutral',
    'something ChromeStatus invents next year': 'neutral',
    // negative
    'Negative': 'negative',
    'Oppose': 'negative',
    'Opposed': 'negative',
    'Harmful': 'negative',
    'Not supported': 'negative',
    // none
    'No signal': 'none',
    'No signals': 'none',
    'No public signals': 'none',
    'N/A': 'none',
    '': 'none',
    '   ': 'none',
  };
  for (const [view, stance] of Object.entries(expected)) {
    assert.strictEqual(classifyStance(view), stance, `classifyStance(${JSON.stringify(view)})`);
  }
  assert.strictEqual(classifyStance(undefined), 'none');
  assert.strictEqual(classifyStance(null), 'none');
  assert.strictEqual(classifyStance('SHIPPED/SHIPPING'), 'shipped', 'case-insensitive');
});

test('consensus follows what Firefox and Safari have actually done (observed ChromeStatus value pairs)', () => {
  // [firefox view, safari view, expected consensus]. Rows marked (was ...) are
  // real combinations the old substring matching got wrong.
  const cases = [
    ['No signal', 'No signal', 'Chromium-Led'],
    ['Neutral', 'Neutral', 'Chromium-Led'],
    ['Under consideration', 'No signal', 'Chromium-Led'],
    ['No signal', 'Closed Without a Position', 'Chromium-Led'],
    ['No signal', 'N/A', 'Chromium-Led'],
    ['Defer', 'No signal', 'Chromium-Led'],

    ['Positive', 'Support', 'Multi-Engine Consensus'],
    ['Positive', 'Positive', 'Multi-Engine Consensus'],
    ['Shipped/Shipping', 'Shipped/Shipping', 'Multi-Engine Consensus'], // (was Chromium-Led, 52 rows)
    ['Shipped/Shipping', 'In development', 'Multi-Engine Consensus'],   // (was Chromium-Led, 25 rows)
    ['In development', 'Shipped/Shipping', 'Multi-Engine Consensus'],
    ['Positive', 'Shipped/Shipping', 'Multi-Engine Consensus'],         // (was Partial, 9 rows)
    ['Shipped/Shipping', 'Support', 'Multi-Engine Consensus'],          // (was Partial, 5 rows)
    ['Positive', 'In development', 'Multi-Engine Consensus'],

    ['Positive', 'No signal', 'Partial Multi-Engine Interest'],
    ['No signal', 'Support', 'Partial Multi-Engine Interest'],
    ['Shipped/Shipping', 'No signal', 'Partial Multi-Engine Interest'], // (was Chromium-Led, 26 rows)
    ['No signal', 'Shipped/Shipping', 'Partial Multi-Engine Interest'], // (was Chromium-Led, 10 rows)
    ['Shipped/Shipping', 'Closed Without a Position', 'Partial Multi-Engine Interest'],
    ['Under consideration', 'Shipped/Shipping', 'Partial Multi-Engine Interest'],

    ['No signal', 'Oppose', 'Contested / Concerns Raised'],
    ['Negative', 'Negative', 'Contested / Concerns Raised'],
    ['Negative', 'Support', 'Contested / Concerns Raised'],
    ['Negative', 'No signal', 'Contested / Concerns Raised'],
    ['Shipped/Shipping', 'Oppose', 'Contested / Concerns Raised'],
  ];

  for (const [firefox, safari, expected] of cases) {
    const feature = {
      name: 'F', milestone: 154, category: 'Enabled by default', statusType: 'enabled',
      browsers: { firefox: { view: firefox }, safari: { view: safari } },
    };
    const { consensus } = analyzeEcosystemData(feature, ecosystem());
    assert.strictEqual(consensus, expected, `Firefox "${firefox}" + Safari "${safari}"`);
  }
});

test('consensus labels stay stable, because reporters and history key off them', () => {
  const labels = new Set();
  for (const [firefox, safari] of [['No signal', 'No signal'], ['Positive', 'Support'], ['Positive', 'No signal'], ['Negative', 'No signal']]) {
    labels.add(analyzeEcosystemData(
      { name: 'F', browsers: { firefox: { view: firefox }, safari: { view: safari } } },
      ecosystem()
    ).consensus);
  }
  assert.deepStrictEqual(
    [...labels].sort(),
    ['Chromium-Led', 'Contested / Concerns Raised', 'Multi-Engine Consensus', 'Partial Multi-Engine Interest']
  );
});

test('a vendor standards-position label of oppose/negative still marks a feature contested', () => {
  const feature = {
    name: 'F', browsers: { firefox: { view: 'No signal' }, safari: { view: 'No signal' } },
  };
  const result = analyzeEcosystemData(feature, ecosystem({
    standards: [{ vendor: 'Mozilla', labels: ['position: negative'] }],
  }));
  assert.strictEqual(result.consensus, 'Contested / Concerns Raised');
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

// --- the level the heuristic engine can see: the footprint ----------------

const plainFeature = {
  name: 'Sized Feature',
  milestone: 154,
  category: 'Enabled by default',
  statusType: 'enabled',
  browsers: { firefox: { view: 'No signal' }, safari: { view: 'No signal' } },
};

test('the level is read from the score that is shown: 79.5 points is shown as 80 and is High', () => {
  // One Hacker News point is 1.5 points and a comment is 2, so these add up to a score ending in .5.
  const cases = [
    [{ hnPoints: 1, hnComments: 39 }, 80, 'High'],
    [{ hnPoints: 1, hnComments: 38 }, 78, 'Moderate'],
    [{ hnPoints: 1, hnComments: 16, twitterLikes: 2 }, 35, 'Moderate'],
    [{ hnPoints: 1, hnComments: 15, twitterLikes: 2 }, 33, 'Emerging'],
    [{ hnPoints: 1, hnComments: 4 }, 10, 'Emerging'],
    [{ hnPoints: 1, hnComments: 3 }, 8, 'Quiet'],
    [{}, 0, 'Quiet'],
  ];

  for (const [metrics, score, level] of cases) {
    const result = analyzeEcosystemData(plainFeature, ecosystem({ metrics }));
    assert.strictEqual(result.momentumScore, score, JSON.stringify(metrics));
    assert.strictEqual(result.momentumLevel, level, `a score of ${score}`);
  }
});

test('the written summary quotes the footprint, not a tier that is only assigned once the whole run is known', () => {
  const result = analyzeEcosystemData(plainFeature, ecosystem({ metrics: { hnPoints: 1, hnComments: 39 } }));

  assert.strictEqual(
    result.executiveSummary,
    'Sized Feature is currently Enabled by default in Chrome 154. Verified ecosystem footprint is 80 points with Chromium-Led standards alignment and positive developer pulse.'
  );
  assert.ok(!/momentum/i.test(result.executiveSummary), result.executiveSummary);
});
