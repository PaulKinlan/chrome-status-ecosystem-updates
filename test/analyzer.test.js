import test from 'node:test';
import assert from 'node:assert';
import { analyzeEcosystemData } from '../src/analyzer/heuristic.js';

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

  const ecosystemData = {
    metrics: {
      hnPoints: 120,
      hnComments: 45,
      totalArticles: 3,
      totalStandardsPositions: 2,
      totalPackages: 1,
      hasPolyfill: true,
      hasDemos: true,
    },
    discussions: [{ title: 'Discussion on HN', points: 120, commentsCount: 45 }],
    standards: [],
    packages: [{ name: 'feature-polyfill', isPolyfill: true }],
    articles: [],
    resources: [],
  };

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

  const ecosystemData = {
    metrics: {
      hnPoints: 10,
      hnComments: 5,
      totalArticles: 1,
      totalStandardsPositions: 1,
      totalPackages: 0,
      hasPolyfill: false,
      hasDemos: false,
    },
    discussions: [],
    standards: [{ vendor: 'WebKit', labels: ['concerns: fingerprinting'] }],
    packages: [],
    articles: [],
    resources: [],
  };

  const result = analyzeEcosystemData(feature, ecosystemData);
  assert.strictEqual(result.consensus, 'Contested / Concerns Raised');
  assert.strictEqual(result.sentiment, 'Mixed / Skeptical');
  assert.strictEqual(result.hasSecurityConcerns, true);
});
