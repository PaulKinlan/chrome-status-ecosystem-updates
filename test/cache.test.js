import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {
  computeFeatureDelta,
  buildFeatureHistoryEntry,
  loadHistory,
  toComparableUrls
} from '../src/storage/cache.js';
import { config } from '../src/config.js';

test('computeFeatureDelta detects new feature', () => {
  const feature = { id: 1, name: 'Feat', category: 'Enabled', milestone: 100 };
  const ecosystemData = {
    articles: [{ url: 'https://example.com/1' }],
    discussions: [],
    standards: []
  };

  const delta = computeFeatureDelta(feature, ecosystemData, null);
  assert.strictEqual(delta.isNewFeature, true);
  assert.strictEqual(delta.hasDelta, true);
  assert.strictEqual(delta.newArticlesCount, 1);
});

test('computeFeatureDelta canonicalises URLs and detects known vs new URLs', () => {
  const feature = { id: 1, name: 'Feat', category: 'Enabled', milestone: 100 };
  
  // Previous history has standard URL
  const previousHistory = {
    knownUrls: ['https://example.com/a', 'https://example.com/b']
  };

  // Current data has UTM params for A, entirely new URL C
  const ecosystemData = {
    articles: [
      { url: 'https://example.com/a?utm_source=foo' }, // Should be excluded (known)
      { url: 'https://example.com/c' } // Should be counted as new
    ],
    discussions: [],
    standards: []
  };

  const delta = computeFeatureDelta(feature, ecosystemData, previousHistory);
  assert.strictEqual(delta.isNewFeature, false);
  assert.strictEqual(delta.newArticlesCount, 1);
  assert.strictEqual(delta.newArticles[0].url, 'https://example.com/c');
});

test('computeFeatureDelta and buildFeatureHistoryEntry exclude ephemeral Vertex grounding URLs', () => {
  const feature = { id: 1, name: 'Feat', category: 'Enabled', milestone: 100 };
  const ephemeralUrl = 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/ABC123';
  
  const ecosystemData = {
    articles: [{ url: ephemeralUrl }],
    discussions: [],
    standards: []
  };

  // 1. Should not count ephemeral as "new"
  const previousHistory = { knownUrls: [], status: 'Enabled', milestone: 100 };
  const delta = computeFeatureDelta(feature, ecosystemData, previousHistory);
  assert.strictEqual(delta.newArticlesCount, 0, 'Ephemeral URLs should not be counted as new');
  assert.strictEqual(delta.hasDelta, false, 'No delta if only ephemeral URL is found');

  // 2. Should not store ephemeral in history
  const entry = buildFeatureHistoryEntry(feature, ecosystemData, {});
  assert.strictEqual(entry.knownUrls.length, 0, 'Ephemeral URLs should not be stored in history');
});

test('computeFeatureDelta detects status and milestone transitions', () => {
  const feature = { id: 1, name: 'Feat', category: 'Enabled by default', milestone: 101 };
  
  const previousHistory = {
    status: 'In developer trial',
    milestone: 100,
    knownUrls: []
  };

  const delta = computeFeatureDelta(feature, {}, previousHistory);
  assert.strictEqual(delta.statusChanged, true);
  assert.strictEqual(delta.hasDelta, true);
});

test('computeFeatureDelta detects momentum shift', () => {
  const feature = { id: 1, name: 'Feat', category: 'Enabled', milestone: 100 };
  
  const previousHistory = {
    lastMomentumLevel: 'Quiet',
    knownUrls: []
  };

  const analysis = { momentumLevel: 'High' };
  
  const delta = computeFeatureDelta(feature, {}, previousHistory, analysis);
  assert.strictEqual(delta.momentumChanged, true);
  assert.strictEqual(delta.hasDelta, true);
});

test('computeFeatureDelta returns hasDelta false when nothing changed', () => {
  const feature = { id: 1, name: 'Feat', category: 'Enabled', milestone: 100 };
  const previousHistory = {
    status: 'Enabled',
    milestone: 100,
    lastMomentumLevel: 'Quiet',
    knownUrls: ['https://example.com/a']
  };

  const ecosystemData = {
    articles: [{ url: 'https://example.com/a' }] // Known
  };
  const analysis = { momentumLevel: 'Quiet' };

  const delta = computeFeatureDelta(feature, ecosystemData, previousHistory, analysis);
  assert.strictEqual(delta.hasDelta, false);
});

test('loadHistory fallback logic', async (t) => {
  // 1. empty state
  t.mock.method(fs, 'readFile', async () => { throw new Error('ENOENT'); });
  t.mock.method(fs, 'readdir', async () => { throw new Error('ENOENT'); });
  let history = await loadHistory();
  assert.deepStrictEqual(history.features, {});

  // 2. data/history.json exists
  t.mock.method(fs, 'readFile', async (p) => {
    if (String(p).endsWith('history.json')) {
      return JSON.stringify({ lastRun: '1', features: { 1: { id: 1, name: 'Test' } } });
    }
    throw new Error('ENOENT');
  });
  history = await loadHistory();
  assert.strictEqual(history.features[1].name, 'Test');

  // 3. data/history/*.json exists
  t.mock.method(fs, 'readFile', async (p) => {
    if (String(p).endsWith('history.json')) throw new Error('ENOENT');
    if (String(p).endsWith('2026-W01.json')) {
      return JSON.stringify({ lastRun: '2', features: { 2: { id: 2, name: 'Fallback 1' } } });
    }
    throw new Error('ENOENT');
  });
  t.mock.method(fs, 'readdir', async (p) => {
    if (String(p).endsWith('history')) return ['2026-W01.json'];
    throw new Error('ENOENT');
  });
  history = await loadHistory();
  assert.strictEqual(history.features[2].name, 'Fallback 1');

  // 4. reports/weekly/*.json exists
  t.mock.method(fs, 'readFile', async (p) => {
    if (String(p).endsWith('history.json')) throw new Error('ENOENT');
    if (String(p).endsWith('2026-W01.json')) {
      return JSON.stringify({
        generatedAt: '3',
        features: [
          {
            feature: { id: 3, name: 'Fallback 2', category: 'Enabled', milestone: 100 },
            ecosystem: { articles: [{ url: 'https://example.com' }] },
            analysis: { momentumLevel: 'High', consensus: 'Chromium-Led' }
          }
        ]
      });
    }
    throw new Error('ENOENT');
  });
  t.mock.method(fs, 'readdir', async (p) => {
    if (String(p).endsWith('history')) throw new Error('ENOENT');
    if (String(p).endsWith('weekly')) return ['2026-W01.json'];
    throw new Error('ENOENT');
  });
  
  history = await loadHistory();
  assert.strictEqual(history.features[3].name, 'Fallback 2');
  assert.strictEqual(history.features[3].knownUrls[0], 'https://example.com');
  assert.strictEqual(history.features[3].lastMomentumLevel, 'High');
});
