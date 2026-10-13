import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {
  computeFeatureDelta,
  buildFeatureHistoryEntry,
  HISTORY_ARCHIVES_KEPT,
  HISTORY_SCHEMA_VERSION,
  loadHistory,
  saveHistory,
  toComparableUrls
} from '../src/storage/cache.js';
import { config } from '../src/config.js';
import { normaliseReport } from '../src/report-schema.js';
import { canonicalUrl, cleanUrl } from '../src/search/urls.js';

/** What `fs` throws for a file that is simply not there (as opposed to unreadable). */
const enoent = () => Object.assign(new Error('ENOENT: no such file or directory'), { code: 'ENOENT' });

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

test('a page is not new because its scheme, www, host capitals, trailing slash or parameter order differ from last week\'s', () => {
  const feature = { id: 1, name: 'Feat', category: 'Enabled', milestone: 100 };
  const previousHistory = {
    status: 'Enabled',
    milestone: 100,
    knownUrls: ['https://example.com/a?x=1&y=2', 'https://example.com/b', 'https://news.example.org/story', 'https://spec.example/s'],
  };
  const ecosystemData = {
    articles: [
      { url: 'http://www.example.com/a?y=2&x=1' },
      { url: 'https://EXAMPLE.com/b/' },
      { url: 'https://example.com/a?x=1&y=3' }, // another page
    ],
    discussions: [{ url: 'http://news.example.org/story/' }, { discussionUrl: 'https://news.example.org/other' }],
    standards: [{ url: 'http://www.spec.example/s#heading' }, { url: 'https://spec.example/t' }],
  };

  const delta = computeFeatureDelta(feature, ecosystemData, previousHistory);
  assert.deepStrictEqual(delta.newArticles.map(a => a.url), ['https://example.com/a?x=1&y=3']);
  assert.deepStrictEqual(delta.newDiscussions.map(d => d.discussionUrl), ['https://news.example.org/other']);
  assert.deepStrictEqual(delta.newStandards.map(s => s.url), ['https://spec.example/t']);
});

test('an address that is not a page of its own counts as new when it is not on record, and as known when it is', () => {
  const feature = { id: 1, name: 'Feat', category: 'Enabled', milestone: 100 };
  const delta = (knownUrls, url) => computeFeatureDelta(feature, { articles: [{ url }] }, { status: 'Enabled', milestone: 100, knownUrls });

  assert.strictEqual(delta([], 'not a url at all').newArticlesCount, 1);
  assert.strictEqual(delta(['not a url at all'], 'not a url at all').newArticlesCount, 0);
  assert.strictEqual(delta([], '').newArticlesCount, 0, 'no address can never be matched against history');
  assert.strictEqual(delta([], '   ').newArticlesCount, 0, 'nor can one that is only white space');
});

test('only a link on an ephemeral host is ephemeral: a page that merely mentions one is kept and compared', () => {
  const feature = { id: 1, name: 'Feat', category: 'Enabled', milestone: 100 };
  const ephemeral = [
    'https://vertexaisearch.cloud.google.com/grounding-api-redirect/ABC',
    'https://VERTEXAISEARCH.cloud.google.com/grounding-api-redirect/ABC',
    'https://vertexaisearch.cloud.google.com./grounding-api-redirect/ABC',
    'https://googleusercontent.com/x',
    'https://lh3.googleusercontent.com/x',
    'https://LH3.GoogleUserContent.com./x',
  ];
  const ordinary = [
    'https://example.com/?u=googleusercontent.com',
    'https://example.com/vertexaisearch.cloud.google.com/page',
    'https://notgoogleusercontent.com/x',
    'https://googleusercontent.com.example.net/x',
    'https://vertexaisearch.cloud.google.com.example.net/x',
  ];

  const previousHistory = { status: 'Enabled', milestone: 100, knownUrls: [] };
  const delta = computeFeatureDelta(feature, { articles: [...ephemeral, ...ordinary].map(url => ({ url })) }, previousHistory);
  assert.deepStrictEqual(delta.newArticles.map(a => a.url), ordinary);

  const entry = buildFeatureHistoryEntry(feature, { articles: [...ephemeral, ...ordinary].map(url => ({ url })) }, {});
  assert.deepStrictEqual(entry.knownUrls.sort(), ordinary.map(url => cleanUrl(url)).sort());
  assert.deepStrictEqual([...toComparableUrls(ephemeral)], []);
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

// --- what is new: a page the feature never showed, published recently or not dated --------------------------------------

const TODAY = '2026-10-08';
const FEATURE = { id: 1, name: 'Feat', category: 'Enabled', milestone: 100 };
const UNCHANGED = { status: 'Enabled', milestone: 100 };
const key = url => canonicalUrl(url);

test('a page is new only when the feature never showed it, and it was published within 30 days or does not say when', () => {
  const previous = { ...UNCHANGED, seen: { [key('https://example.com/shown')]: '2026-09-01' } };
  const ecosystem = {
    articles: [
      { url: 'https://example.com/shown', publishedAt: '2026-10-07' },   // shown before, however recent
      { url: 'https://example.com/fresh', publishedAt: '2026-10-01' },   // never shown, published a week ago
      { url: 'https://example.com/old', publishedAt: '2026-01-01' },     // never shown, but old: only found late
      { url: 'https://example.com/undated' },                             // never shown, no date
      { url: 'https://example.com/odd', publishedAt: 'Updated 2020' },   // a date nothing can read is no date
    ],
    discussions: [
      { url: 'https://news.example/old', publishedAt: '2025-03-01T00:00:00Z' },
      { discussionUrl: 'https://news.example/new', publishedAt: '2026-10-06T10:00:00Z' },
    ],
    standards: [
      { url: 'https://spec.example/p', createdAt: '2020-01-01T00:00:00Z' },
      { url: 'https://spec.example/q', createdAt: '2026-09-30T00:00:00Z' },
    ],
  };

  const delta = computeFeatureDelta(FEATURE, ecosystem, previous, null, TODAY);

  assert.deepStrictEqual(delta.newArticles.map(a => a.url), ['https://example.com/fresh', 'https://example.com/undated', 'https://example.com/odd']);
  assert.deepStrictEqual(delta.newDiscussions.map(d => d.discussionUrl), ['https://news.example/new']);
  assert.deepStrictEqual(delta.newStandards.map(s => s.url), ['https://spec.example/q']);
  assert.deepStrictEqual([delta.newArticlesCount, delta.newDiscussionsCount, delta.newStandardsCount], [3, 1, 1]);
  assert.strictEqual(delta.hasDelta, true);
});

test('an old page found for the first time is not a change: a feature with only those has no delta', () => {
  const ecosystem = { articles: [{ url: 'https://example.com/old', publishedAt: '2025-01-01' }] };

  const delta = computeFeatureDelta(FEATURE, ecosystem, { ...UNCHANGED, seen: {} }, null, TODAY);

  assert.strictEqual(delta.newArticlesCount, 0);
  assert.strictEqual(delta.hasDelta, false);
});

test('a page that left the search results for a while is not new when it comes back', () => {
  // It is not in last week's knownUrls, which holds that week's pages only, but the feature showed it once.
  const previous = { ...UNCHANGED, knownUrls: [], seen: { [key('https://example.com/back')]: '2026-08-01' } };

  const delta = computeFeatureDelta(FEATURE, { articles: [{ url: 'https://example.com/back' }] }, previous, null, TODAY);

  assert.strictEqual(delta.newArticlesCount, 0);
});

test('what a history entry shows is its seen map; knownUrls is read only for an entry that has none', () => {
  const ecosystem = { articles: [{ url: 'https://example.com/a' }, { url: 'https://example.com/b' }] };
  const newOnes = previous => computeFeatureDelta(FEATURE, ecosystem, previous, null, TODAY).newArticles.map(a => a.url);

  assert.deepStrictEqual(newOnes({ ...UNCHANGED, knownUrls: ['https://example.com/a'] }), ['https://example.com/b']);
  assert.deepStrictEqual(
    newOnes({ ...UNCHANGED, knownUrls: ['https://example.com/a'], seen: { [key('https://example.com/b')]: '2026-09-01' } }),
    ['https://example.com/a']
  );
  assert.deepStrictEqual(newOnes({ ...UNCHANGED, seen: {} }), ['https://example.com/a', 'https://example.com/b']);
});

test('a feature the history has never seen is judged the same way: its old pages are not announced as news', () => {
  const ecosystem = {
    articles: [
      { url: 'https://example.com/old', publishedAt: '2024-05-01' },
      { url: 'https://example.com/fresh', publishedAt: '2026-10-03' },
      { url: 'https://example.com/undated' },
    ],
    discussions: [{ url: 'https://news.example/old', publishedAt: '2024-01-01T00:00:00Z' }, { url: 'https://news.example/fresh', publishedAt: '2026-10-07T00:00:00Z' }],
    standards: [{ url: 'https://spec.example/old', createdAt: '2020-01-01T00:00:00Z' }],
  };

  for (const missing of [undefined, null]) {
    const delta = computeFeatureDelta(FEATURE, ecosystem, missing, null, TODAY);

    assert.strictEqual(delta.isNewFeature, true);
    assert.strictEqual(delta.hasDelta, true, 'a feature that is new is a change whatever it shows');
    assert.deepStrictEqual(delta.newArticles.map(a => a.url), ['https://example.com/fresh', 'https://example.com/undated']);
    assert.deepStrictEqual(delta.newDiscussions.map(d => d.url), ['https://news.example/fresh']);
    assert.deepStrictEqual(delta.newStandards, []);
    assert.deepStrictEqual([delta.newArticlesCount, delta.newDiscussionsCount, delta.newStandardsCount], [2, 1, 0]);
    assert.strictEqual(delta.previousMomentum, null);
  }
});

test('a page whose address expires, or that has none, is never new, for a feature that is new or not', () => {
  const ecosystem = { articles: [{ url: 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/X' }, { url: '' }, {}] };

  assert.strictEqual(computeFeatureDelta(FEATURE, ecosystem, undefined, null, TODAY).newArticlesCount, 0);
  assert.strictEqual(computeFeatureDelta(FEATURE, ecosystem, { ...UNCHANGED, seen: {} }, null, TODAY).newArticlesCount, 0);
});

test('a history entry whose pages are kept in a shape that cannot be read fails, rather than making everything new', () => {
  const ecosystem = { articles: [{ url: 'https://example.com/a' }] };
  const damaged = [{ seen: [] }, { seen: null }, { seen: 'x' }, { seen: 4 }, { knownUrls: 5 }, { knownUrls: 'https://example.com/a' }, { knownUrls: { 0: 'https://example.com/a' } }];

  for (const damage of damaged) {
    const previous = { ...UNCHANGED, ...damage };
    assert.throws(() => computeFeatureDelta(FEATURE, ecosystem, previous, null, TODAY), /"seen"|"knownUrls"/, JSON.stringify(damage));
    assert.throws(() => buildFeatureHistoryEntry(FEATURE, ecosystem, {}, { previous, today: TODAY }), /"seen"|"knownUrls"/, JSON.stringify(damage));
  }
});

test('a missing or null list of pages in an entry is an empty one', () => {
  const ecosystem = { articles: [{ url: 'https://example.com/a' }] };

  for (const previous of [UNCHANGED, { ...UNCHANGED, knownUrls: null }, { ...UNCHANGED, knownUrls: [] }]) {
    assert.strictEqual(computeFeatureDelta(FEATURE, ecosystem, previous, null, TODAY).newArticlesCount, 1);
  }
});

// --- a tier that moved: only when the two tiers mean the same ---------------------------------------------------------

test('a move from one momentum tier to another is a shift when both weeks were judged the same way', () => {
  const previous = { ...UNCHANGED, lastMomentumLevel: 'Quiet', lastMomentumBasis: 'change', lastAi: false };
  const analysis = { momentumLevel: 'High', momentumBasis: 'change', isAiEnhanced: false };

  const delta = computeFeatureDelta(FEATURE, {}, previous, analysis, TODAY);

  assert.strictEqual(delta.momentumChanged, true);
  assert.strictEqual(delta.previousMomentum, 'Quiet');
  assert.strictEqual(delta.hasDelta, true);

  const unmoved = computeFeatureDelta(FEATURE, {}, { ...previous, lastMomentumLevel: 'High' }, analysis, TODAY);
  assert.strictEqual(unmoved.momentumChanged, false);
  assert.strictEqual(unmoved.previousMomentum, 'High');
});

test('a move between tiers that mean different things is not a shift, and last week\'s tier is not offered as the earlier one', () => {
  const previous = { ...UNCHANGED, lastMomentumLevel: 'Quiet', lastMomentumBasis: 'footprint rank', lastAi: false };
  const analysis = { momentumLevel: 'High', momentumBasis: 'footprint rank', isAiEnhanced: false };
  const differs = [
    ['the basis', previous, { ...analysis, momentumBasis: 'change' }],
    ['the basis, to one with no baseline', previous, { ...analysis, momentumBasis: 'no baseline' }],
    ['no basis was recorded last week (a history from before momentum was a change)', { ...previous, lastMomentumBasis: undefined }, analysis],
    ['no basis is recorded this week', previous, { ...analysis, momentumBasis: undefined }],
    ['the engine: AI last week, none now', { ...previous, lastAi: true }, analysis],
    ['the engine: none last week, AI now', previous, { ...analysis, isAiEnhanced: true }],
    ['the engine: not recorded last week, AI now', { ...previous, lastAi: undefined }, { ...analysis, isAiEnhanced: true }],
  ];

  for (const [what, was, now] of differs) {
    const delta = computeFeatureDelta(FEATURE, {}, was, now, TODAY);
    assert.strictEqual(delta.momentumChanged, false, what);
    assert.strictEqual(delta.previousMomentum, null, what);
    assert.strictEqual(delta.hasDelta, false, `${what}: nothing else changed`);
  }
});

test('a tier is comparable with last week\'s when neither engine nor basis is recorded anywhere, or when no engine was and none is', () => {
  const was = { ...UNCHANGED, lastMomentumLevel: 'Quiet' };

  // A caller that knows nothing of bases (all that existed before) keeps what it had.
  assert.strictEqual(computeFeatureDelta(FEATURE, {}, was, { momentumLevel: 'High' }, TODAY).momentumChanged, true);
  // An engine that is missing is the same as one that was not used.
  assert.strictEqual(computeFeatureDelta(FEATURE, {}, { ...was, lastAi: false }, { momentumLevel: 'High', isAiEnhanced: undefined }, TODAY).momentumChanged, true);
  assert.strictEqual(computeFeatureDelta(FEATURE, {}, { ...was, lastAi: undefined }, { momentumLevel: 'High', isAiEnhanced: false }, TODAY).momentumChanged, true);
  // And it still takes both tiers to have one.
  assert.strictEqual(computeFeatureDelta(FEATURE, {}, { ...UNCHANGED, lastMomentumLevel: '' }, { momentumLevel: 'High' }, TODAY).momentumChanged, false);
  assert.strictEqual(computeFeatureDelta(FEATURE, {}, was, { momentumLevel: '' }, TODAY).momentumChanged, false);
  assert.strictEqual(computeFeatureDelta(FEATURE, {}, was, null, TODAY).momentumChanged, false);
});

// --- what is written for the next run ------------------------------------------------------------------------------------

test('the history entry of a feature keeps every page it has shown with the day it first did, and a number set for each week', () => {
  const previous = {
    seen: { [key('https://example.com/a')]: '2026-08-20' },
    metrics: [{ week: '2026-W38', date: '2026-09-17', footprint: 40, ai: false, metrics: { totalArticles: 1 } }],
  };
  const ecosystem = {
    articles: [
      { url: 'https://www.example.com/a?utm_source=x' },
      { url: 'https://example.com/b' },
      { url: 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/X' },
    ],
    discussions: [{ discussionUrl: 'https://news.example/1' }],
    standards: [{ url: 'https://spec.example/s' }],
    packages: [{ url: 'https://npm.example/pkg' }],
    metrics: { totalArticles: 2, hasPolyfill: true, hnPoints: 3.5, label: 'not a number' },
  };
  const analysis = { momentumLevel: 'Moderate', momentumScore: 61, footprint: 61, consensus: 'Chromium-Led', isAiEnhanced: true, momentumBasis: 'footprint rank' };

  const entry = buildFeatureHistoryEntry(FEATURE, ecosystem, analysis, { previous, today: TODAY, week: '2026-W41' });

  assert.deepStrictEqual(Object.keys(entry), [
    'id', 'name', 'milestone', 'status', 'lastSeen', 'knownUrls', 'lastMomentumLevel', 'lastConsensus',
    'lastMomentumBasis', 'lastAi', 'seen', 'metrics',
  ]);
  assert.deepStrictEqual([entry.id, entry.name, entry.milestone, entry.status], [1, 'Feat', 100, 'Enabled']);
  assert.deepStrictEqual([entry.lastMomentumLevel, entry.lastConsensus, entry.lastMomentumBasis, entry.lastAi], ['Moderate', 'Chromium-Led', 'footprint rank', true]);
  assert.deepStrictEqual(entry.seen, {
    [key('https://example.com/a')]: TODAY,            // already known, and turned up again: the day it last did
    [key('https://example.com/b')]: TODAY,
    [key('https://news.example/1')]: TODAY,
    [key('https://spec.example/s')]: TODAY,
    [key('https://npm.example/pkg')]: TODAY,
  });
  assert.deepStrictEqual(entry.metrics, [
    previous.metrics[0],
    { week: '2026-W41', date: TODAY, footprint: 61, ai: true, metrics: { totalArticles: 2, hasPolyfill: 1, hnPoints: 3.5 } },
  ]);
  // Still written, for anything that reads the history the way it was: this run's pages alone, none that expires.
  assert.strictEqual(entry.knownUrls.length, 5);
  assert.ok(entry.knownUrls.every(url => !url.includes('vertexaisearch')));
  // JSON round trip: it is what the next run reads back.
  assert.deepStrictEqual(JSON.parse(JSON.stringify(entry)), entry);
});

test('a feature with no earlier entry, week or context starts its history today, and says which engine its number is from', () => {
  const entry = buildFeatureHistoryEntry(FEATURE, { articles: [{ url: 'https://example.com/a' }], metrics: { totalArticles: 1 } }, { momentumLevel: 'Quiet', momentumScore: 10 });

  assert.match(Object.values(entry.seen)[0], /^\d{4}-\d{2}-\d{2}$/);
  assert.strictEqual(entry.metrics.length, 1);
  assert.deepStrictEqual({ ...entry.metrics[0], date: undefined }, { week: null, date: undefined, footprint: 10, ai: false, metrics: { totalArticles: 1 } });
  assert.strictEqual(entry.metrics[0].date, Object.values(entry.seen)[0]);
  assert.strictEqual(entry.lastAi, false);
  assert.strictEqual(entry.lastMomentumBasis, undefined);
  assert.ok(!('lastMomentumBasis' in JSON.parse(JSON.stringify(entry))), 'nothing is written for a basis that is not there');
});

test('a history entry is stamped with the moment it is given, and today is that moment\'s day unless said otherwise', () => {
  const ecosystem = { articles: [{ url: 'https://example.com/a' }], metrics: { totalArticles: 1 } };
  const analysis = { momentumLevel: 'Quiet', momentumScore: 10 };
  const now = new Date('2020-01-01T23:59:58.123Z');

  const entry = buildFeatureHistoryEntry(FEATURE, ecosystem, analysis, { now, week: '2020-W01' });

  assert.strictEqual(entry.lastSeen, '2020-01-01T23:59:58.123Z');
  assert.deepStrictEqual(Object.values(entry.seen), ['2020-01-01']);
  assert.strictEqual(entry.metrics[0].date, '2020-01-01');
  // A day that is given wins (the runner computes it once for everything it does).
  const given = buildFeatureHistoryEntry(FEATURE, ecosystem, analysis, { now, today: '2020-01-02' });
  assert.strictEqual(given.lastSeen, '2020-01-01T23:59:58.123Z');
  assert.strictEqual(given.metrics[0].date, '2020-01-02');
});

test('a second run in the same week replaces that week\'s numbers; the next week adds to them', () => {
  const ecosystem = { articles: [], metrics: { totalArticles: 0 } };
  const analysis = score => ({ momentumLevel: 'Quiet', momentumScore: score });
  const first = buildFeatureHistoryEntry(FEATURE, ecosystem, analysis(10), { today: '2026-10-05', week: '2026-W41' });
  const again = buildFeatureHistoryEntry(FEATURE, ecosystem, analysis(30), { previous: first, today: '2026-10-08', week: '2026-W41' });
  const next = buildFeatureHistoryEntry(FEATURE, ecosystem, analysis(50), { previous: again, today: '2026-10-12', week: '2026-W42' });

  assert.deepStrictEqual(again.metrics.map(p => [p.week, p.date, p.footprint]), [['2026-W41', '2026-10-08', 30]]);
  assert.deepStrictEqual(next.metrics.map(p => [p.week, p.date, p.footprint]), [['2026-W41', '2026-10-08', 30], ['2026-W42', '2026-10-12', 50]]);
});

test('the numbers a feature keeps are the footprint its tier was worked out from, not a number it might have had', () => {
  const entry = buildFeatureHistoryEntry(FEATURE, {}, { momentumLevel: 'Quiet', momentumScore: 120, footprint: 80 }, { today: TODAY, week: '2026-W41' });

  assert.strictEqual(entry.metrics[0].footprint, 80);
});

test('an entry from before `seen` existed becomes one: its pages count as shown on the day it was last seen', () => {
  const previous = {
    lastSeen: '2026-09-24T09:00:00.000Z',
    knownUrls: ['https://example.com/old', 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/X', 'https://example.com/old/'],
  };

  const entry = buildFeatureHistoryEntry(FEATURE, { articles: [{ url: 'https://example.com/new' }] }, {}, { previous, today: TODAY });

  assert.deepStrictEqual(entry.seen, { [key('https://example.com/old')]: '2026-09-24', [key('https://example.com/new')]: TODAY });
  assert.deepStrictEqual(entry.metrics.map(p => p.date), [TODAY], 'there are no earlier numbers to carry over');
});

test('what a feature showed over a year ago and does not show now is forgotten; what it still shows is not', () => {
  const previous = {
    seen: {
      [key('https://example.com/gone')]: '2025-08-01',
      [key('https://example.com/still-there')]: '2025-08-01',
      [key('https://example.com/recent')]: '2026-06-01',
    },
  };

  const entry = buildFeatureHistoryEntry(FEATURE, { articles: [{ url: 'https://example.com/still-there' }] }, {}, { previous, today: TODAY });

  // What still shows is remembered as of today (so it is not forgotten next year either); what did not keeps its day.
  assert.deepStrictEqual(entry.seen, { [key('https://example.com/still-there')]: TODAY, [key('https://example.com/recent')]: '2026-06-01' });
});

test('the numbers kept for a feature are the thirteen newest weeks', () => {
  let entry;
  for (let week = 1; week <= 15; week++) {
    const date = new Date(Date.UTC(2026, 0, 5 + 7 * (week - 1))).toISOString().slice(0, 10);
    entry = buildFeatureHistoryEntry(FEATURE, {}, { momentumLevel: 'Quiet', momentumScore: week }, { previous: entry, today: date, week: `2026-W${String(week + 1).padStart(2, '0')}` });
  }

  assert.deepStrictEqual(entry.metrics.map(p => p.footprint), [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
});

test('damaged numbers in an entry are ignored, not carried forward and not fatal', () => {
  const previous = {
    seen: {},
    metrics: [null, 'x', { date: 'soon', footprint: 3 }, { date: '2026-09-17', footprint: 'lots' }, { week: '2026-W38', date: '2026-09-17', footprint: 40, ai: false, metrics: { totalArticles: 1, label: 'x' } }],
  };

  const entry = buildFeatureHistoryEntry(FEATURE, {}, { momentumLevel: 'Quiet', momentumScore: 50 }, { previous, today: TODAY, week: '2026-W41' });

  assert.deepStrictEqual(entry.metrics.map(p => p.week), ['2026-W38', '2026-W41']);
  assert.deepStrictEqual(entry.metrics[0].metrics, { totalArticles: 1 });
  assert.doesNotThrow(() => buildFeatureHistoryEntry(FEATURE, {}, { momentumLevel: 'Quiet', momentumScore: 50 }, { previous: { seen: {}, metrics: 'x' }, today: TODAY }));
});

// --- a history written in a shape this program does not know -------------------------------------------------------------

test('a history snapshot of version 2, or of no version, is read; any other version is treated as damaged', async (t) => {
  await withScratchDirs(t);
  const warnings = captureWarnings(t);

  for (const readable of [{}, { schemaVersion: 2 }]) {
    await writeJson(config.historyFilePath, { lastRun: 'ok', features: { 1: { id: 1 } }, ...readable });
    assert.strictEqual((await loadHistory()).lastRun, 'ok', JSON.stringify(readable));
  }
  assert.deepStrictEqual(warnings, []);

  for (const unknown of [1, 3, '2', null, 2.5]) {
    await writeJson(config.historyFilePath, { lastRun: 'unknown', schemaVersion: unknown, features: {} });
    await assert.rejects(loadHistory(), (err) => {
      assert.match(err.message, /No usable history snapshot/);
      assert.ok(err.message.includes(`unsupported history schemaVersion ${JSON.stringify(unknown)}`), err.message);
      return true;
    }, `schemaVersion ${JSON.stringify(unknown)}`);
  }
});

test('the history has a version of its own, which is not the published report\'s', async () => {
  // Raising the report's SCHEMA_VERSION must not make every history file unreadable (nor the other way round): two
  // constants that merely happen to be equal are not a test of that, so the sources are read.
  assert.strictEqual(HISTORY_SCHEMA_VERSION, 2);
  const read = file => fs.readFile(new URL(file, import.meta.url), 'utf-8');
  assert.doesNotMatch(await read('../src/storage/cache.js'), /import \{[^}]*\bSCHEMA_VERSION\b[^}]*\} from/, 'cache.js checks the history against its own version');
  assert.doesNotMatch(await read('../src/runner.js'), /import \{[^}]*\bSCHEMA_VERSION\b[^}]*\} from/, 'and the run writes it');
  assert.match(await read('../src/runner.js'), /schemaVersion: HISTORY_SCHEMA_VERSION,/);
});

test('a history snapshot of a version this program does not know is passed over for an older archive that it can read', async (t) => {
  await withScratchDirs(t);
  const warnings = captureWarnings(t);
  await writeJson(config.historyFilePath, { lastRun: 'future', schemaVersion: 3, features: { 1: { id: 1 } } });
  await writeJson(path.join(config.dataDir, 'history', '2026-W09.json'), { lastRun: 'week-9', features: { 7: { id: 7 } } });

  assert.strictEqual((await loadHistory()).lastRun, 'week-9');
  assert.ok(warnings.some(w => w.includes('history.json') && w.includes('schemaVersion 3')), warnings.join('\n'));
});

test('loadHistory fallback logic', async (t) => {
  // Mock each method ONCE and re-point it per scenario. Re-mocking the same
  // method repeatedly makes t.mock restore to a stale intermediate mock, which
  // then leaks into every later test in the process.
  const readFile = t.mock.method(fs, 'readFile', async () => { throw enoent(); });
  const readdir = t.mock.method(fs, 'readdir', async () => { throw enoent(); });

  // 1. empty state
  let history = await loadHistory();
  assert.deepStrictEqual(history.features, {});

  // 2. data/history.json exists
  readFile.mock.mockImplementation(async (p) => {
    if (String(p).endsWith('history.json')) {
      return JSON.stringify({ lastRun: '1', features: { 1: { id: 1, name: 'Test' } } });
    }
    throw enoent();
  });
  history = await loadHistory();
  assert.strictEqual(history.features[1].name, 'Test');

  // 3. data/history/*.json exists
  readFile.mock.mockImplementation(async (p) => {
    if (String(p).endsWith('history.json')) throw enoent();
    if (String(p).endsWith('2026-W01.json')) {
      return JSON.stringify({ lastRun: '2', features: { 2: { id: 2, name: 'Fallback 1' } } });
    }
    throw enoent();
  });
  readdir.mock.mockImplementation(async (p) => {
    if (String(p).endsWith('history')) return ['2026-W01.json'];
    throw enoent();
  });
  history = await loadHistory();
  assert.strictEqual(history.features[2].name, 'Fallback 1');

  // 4. reports/weekly/*.json exists
  readFile.mock.mockImplementation(async (p) => {
    if (String(p).endsWith('history.json')) throw enoent();
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
    throw enoent();
  });
  readdir.mock.mockImplementation(async (p) => {
    if (String(p).endsWith('history')) throw enoent();
    if (String(p).endsWith('weekly')) return ['2026-W01.json'];
    throw enoent();
  });
  
  history = await loadHistory();
  assert.strictEqual(history.features[3].name, 'Fallback 2');
  assert.strictEqual(history.features[3].knownUrls[0], 'https://example.com');
  assert.strictEqual(history.features[3].lastMomentumLevel, 'High');
});

/**
 * Points every output path at an empty scratch tree for the duration of a test.
 * Real files rather than `fs` mocks: these tests are about what actually lands
 * on disk (atomicity, corruption), which a mock cannot show.
 */
async function withScratchDirs(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'history-test-'));
  const saved = {
    dataDir: config.dataDir,
    historyFilePath: config.historyFilePath,
    reportsDir: config.reportsDir,
  };
  config.dataDir = path.join(root, 'data');
  config.historyFilePath = path.join(config.dataDir, 'history.json');
  config.reportsDir = path.join(root, 'reports');
  t.after(async () => {
    Object.assign(config, saved);
    await fs.rm(root, { recursive: true, force: true });
  });
  return root;
}

async function writeJson(file, value) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, typeof value === 'string' ? value : JSON.stringify(value), 'utf-8');
}

/** Captures logger.warn() output (it goes to stderr). */
function captureWarnings(t) {
  const lines = [];
  t.mock.method(console, 'error', (...args) => { lines.push(args.join(' ')); });
  return lines;
}

test('saveHistory writes the archive and the pointer under config.dataDir, atomically', async (t) => {
  await withScratchDirs(t);
  const snapshot = { lastRun: 'now', lastWeekString: '2026-W10', features: { 1: { id: 1, name: 'A' } } };

  await saveHistory(snapshot);

  assert.deepStrictEqual(JSON.parse(await fs.readFile(config.historyFilePath, 'utf-8')), snapshot);
  const archive = path.join(config.dataDir, 'history', '2026-W10.json');
  assert.deepStrictEqual(JSON.parse(await fs.readFile(archive, 'utf-8')), snapshot);

  const leftovers = [
    ...(await fs.readdir(config.dataDir)),
    ...(await fs.readdir(path.join(config.dataDir, 'history'))),
  ].filter(name => name.endsWith('.tmp'));
  assert.deepStrictEqual(leftovers, [], 'no temp files may survive a successful save');
});

test('saveHistory throws when the history cannot be persisted instead of swallowing the error', async (t) => {
  const root = await withScratchDirs(t);
  // A regular file where a directory is needed makes mkdir fail on every platform.
  const blocker = path.join(root, 'blocker');
  await fs.writeFile(blocker, 'not a directory');
  config.dataDir = path.join(blocker, 'data');
  config.historyFilePath = path.join(config.dataDir, 'history.json');

  await assert.rejects(
    saveHistory({ lastWeekString: '2026-W10', features: {} }),
    /Failed to save history snapshot/
  );
});

/** Makes `rename` fail for one destination only, leaving every other write alone. */
function failRenameInto(t, destination) {
  const realRename = fs.rename;
  t.mock.method(fs, 'rename', async (from, to) => {
    if (String(to) === destination) throw Object.assign(new Error('EIO: i/o error'), { code: 'EIO' });
    return realRename(from, to);
  });
}

const tempFilesUnder = async dataDir => [
  ...(await fs.readdir(dataDir)),
  ...(await fs.readdir(path.join(dataDir, 'history'))),
].filter(name => name.endsWith('.tmp'));

test('if the pointer cannot be written, the archive already holds the new snapshot and the pointer still holds the old one', async (t) => {
  await withScratchDirs(t);
  const older = { lastRun: 'old', lastWeekString: '2026-W09', features: { 1: { id: 1, name: 'Old' } } };
  await saveHistory(older);
  failRenameInto(t, config.historyFilePath);

  const newer = { lastRun: 'new', lastWeekString: '2026-W10', features: { 1: { id: 1, name: 'New' } } };
  await assert.rejects(saveHistory(newer), /Failed to save history snapshot: EIO/);
  t.mock.restoreAll();

  // The pointer is what the next run reads, so it must still be a complete (older) snapshot.
  assert.deepStrictEqual(JSON.parse(await fs.readFile(config.historyFilePath, 'utf-8')), older);
  assert.deepStrictEqual(JSON.parse(await fs.readFile(path.join(config.dataDir, 'history', '2026-W10.json'), 'utf-8')), newer);
  assert.deepStrictEqual(await tempFilesUnder(config.dataDir), []);
});

test('if the archive cannot be written, the pointer is not touched at all', async (t) => {
  await withScratchDirs(t);
  const older = { lastRun: 'old', lastWeekString: '2026-W09', features: {} };
  await saveHistory(older);
  failRenameInto(t, path.join(config.dataDir, 'history', '2026-W10.json'));

  await assert.rejects(saveHistory({ lastRun: 'new', lastWeekString: '2026-W10', features: {} }), /Failed to save history snapshot: EIO/);
  t.mock.restoreAll();

  assert.deepStrictEqual(JSON.parse(await fs.readFile(config.historyFilePath, 'utf-8')), older, 'pointer unchanged');
  await assert.rejects(fs.access(path.join(config.dataDir, 'history', '2026-W10.json')), { code: 'ENOENT' });
  assert.deepStrictEqual(await tempFilesUnder(config.dataDir), []);
});

test('loadHistory on a true first run returns an empty history without complaint', async (t) => {
  await withScratchDirs(t);
  const warnings = captureWarnings(t);

  const history = await loadHistory();

  assert.deepStrictEqual(history, { lastRun: null, features: {} });
  assert.deepStrictEqual(warnings, []);
});

test('loadHistory falls back to an older archive when the pointer is corrupt, and warns about it', async (t) => {
  await withScratchDirs(t);
  const warnings = captureWarnings(t);
  await writeJson(config.historyFilePath, '{"lastRun": "2026-0'); // truncated mid-write
  await writeJson(path.join(config.dataDir, 'history', '2026-W09.json'), { lastRun: 'older', features: { 7: { id: 7 } } });

  const history = await loadHistory();

  assert.strictEqual(history.lastRun, 'older');
  assert.ok(warnings.some(w => w.includes('history.json')), `expected a warning naming the corrupt file, got: ${warnings}`);
});

test('loadHistory skips a corrupt newest archive in favour of the previous week', async (t) => {
  await withScratchDirs(t);
  captureWarnings(t);
  const archive = path.join(config.dataDir, 'history');
  await writeJson(path.join(archive, '2026-W10.json'), 'not json at all');
  await writeJson(path.join(archive, '2026-W09.json'), { lastRun: 'week-9', features: {} });

  assert.strictEqual((await loadHistory()).lastRun, 'week-9');
});

test('loadHistory refuses to restart from nothing when every existing snapshot is damaged', async (t) => {
  await withScratchDirs(t);
  captureWarnings(t);
  await writeJson(config.historyFilePath, '{"lastRun":');

  await assert.rejects(loadHistory(), (err) => {
    assert.match(err.message, /No usable history snapshot/);
    assert.match(err.message, /history\.json/);
    return true;
  });
});

test('loadHistory treats JSON of the wrong shape as damaged', async (t) => {
  await withScratchDirs(t);
  captureWarnings(t);

  await writeJson(config.historyFilePath, '[]');
  await assert.rejects(loadHistory(), /No usable history snapshot/);

  await writeJson(config.historyFilePath, { features: [1, 2, 3] });
  await assert.rejects(loadHistory(), /No usable history snapshot/);
});

test('loadHistory still reconstructs from a published weekly report (features is an array there)', async (t) => {
  await withScratchDirs(t);
  await writeJson(path.join(config.reportsDir, 'weekly', '2026-W08.json'), {
    weekString: '2026-W08',
    generatedAt: '2026-02-23T09:00:00.000Z',
    features: [{
      feature: { id: 3, name: 'From report', category: 'Enabled', milestone: 150 },
      ecosystem: { articles: [{ url: 'https://example.com/post' }] },
      analysis: { momentumLevel: 'Medium', consensus: 'Chromium-Led' },
    }],
  });

  const history = await loadHistory();

  assert.strictEqual(history.lastWeekString, '2026-W08');
  assert.strictEqual(history.features[3].name, 'From report');
  assert.deepStrictEqual(history.features[3].knownUrls, ['https://example.com/post']);
});

// --- report shapes and the size of what is kept -----------------------------------------------------------------------

/** A weekly report as the program holds it: the article sits in two lists of the feature. */
function inMemoryWeek(weekString, generatedAt) {
  const post = { title: 'Post', url: 'https://example.com/post', domain: 'example.com' };
  return {
    weekString,
    generatedAt,
    featuresCount: 1,
    telemetry: { featuresAvailable: 1 },
    features: [{
      feature: { id: 3, name: 'From report', category: 'Enabled', milestone: 150 },
      ecosystem: {
        articles: [post],
        blogs: [post],
        discussions: [{ discussionUrl: 'https://news.example/item?id=1' }],
        standards: [{ url: 'https://github.com/mozilla/standards-positions/issues/1' }],
        packages: [{ url: 'https://www.npmjs.com/package/polyfill' }],
      },
      analysis: { momentumLevel: 'Medium', consensus: 'Chromium-Led' },
      delta: { newArticles: [post] },
    }],
  };
}

test('loadHistory rebuilds the same history from a weekly report in either published shape', async (t) => {
  await withScratchDirs(t);
  const week = inMemoryWeek('2026-W08', '2026-02-23T09:00:00.000Z');

  await writeJson(path.join(config.reportsDir, 'weekly', '2026-W08.json'), JSON.stringify(week, null, 2)); // as published until version 2
  const fromOld = await loadHistory();
  await fs.rm(path.join(config.reportsDir, 'weekly', '2026-W08.json'));

  await writeJson(path.join(config.reportsDir, 'weekly', '2026-W08.json'), JSON.stringify(normaliseReport(week)));
  const fromNew = await loadHistory();

  assert.deepStrictEqual(fromNew, fromOld);
  assert.deepStrictEqual(fromNew.features[3].knownUrls, [
    'https://example.com/post',
    'https://news.example/item?id=1',
    'https://github.com/mozilla/standards-positions/issues/1',
    'https://www.npmjs.com/package/polyfill',
  ], 'the article is found through its id');
});

test('weekly reports of both shapes can sit side by side: the newest one is the one used', async (t) => {
  await withScratchDirs(t);
  const older = inMemoryWeek('2026-W07', '2026-02-16T09:00:00.000Z');
  older.features[0].feature.name = 'Old name';
  await writeJson(path.join(config.reportsDir, 'weekly', '2026-W07.json'), JSON.stringify(older, null, 2));
  await writeJson(path.join(config.reportsDir, 'weekly', '2026-W08.json'), JSON.stringify(normaliseReport(inMemoryWeek('2026-W08', '2026-02-23T09:00:00.000Z'))));

  const history = await loadHistory();

  assert.strictEqual(history.lastWeekString, '2026-W08');
  assert.strictEqual(history.features[3].name, 'From report');
});

test('a version 2 report that cites an article its table lacks is damaged: warned about, and the next report is used', async (t) => {
  await withScratchDirs(t);
  const warnings = captureWarnings(t);
  const damaged = normaliseReport(inMemoryWeek('2026-W09', '2026-03-02T09:00:00.000Z'));
  delete damaged.articles.a1;
  await writeJson(path.join(config.reportsDir, 'weekly', '2026-W09.json'), JSON.stringify(damaged));
  await writeJson(path.join(config.reportsDir, 'weekly', '2026-W08.json'), JSON.stringify(inMemoryWeek('2026-W08', '2026-02-23T09:00:00.000Z')));

  const history = await loadHistory();

  assert.strictEqual(history.lastWeekString, '2026-W08', 'a report that cannot be read whole is not used for a part of its history');
  assert.ok(warnings.some(w => w.includes('2026-W09.json') && w.includes('cites article "a1"')), warnings.join('\n'));

  await fs.rm(path.join(config.reportsDir, 'weekly', '2026-W08.json'));
  await assert.rejects(loadHistory(), /No usable history snapshot[\s\S]*2026-W09\.json/);
});

test('a report from a schemaVersion this program does not know is not mistaken for an old one', async (t) => {
  await withScratchDirs(t);
  captureWarnings(t);
  await writeJson(path.join(config.reportsDir, 'weekly', '2026-W09.json'), { schemaVersion: 3, weekString: '2026-W09', features: [] });

  await assert.rejects(loadHistory(), /unsupported report schemaVersion 3/);
});

test('saveHistory writes compact JSON, the same bytes in the archive and the pointer', async (t) => {
  await withScratchDirs(t);
  const snapshot = { lastRun: 'now', lastWeekString: '2026-W10', telemetry: {}, features: { 1: { id: 1, name: 'A', knownUrls: ['https://example.com/a'] } } };

  await saveHistory(snapshot);

  const pointer = await fs.readFile(config.historyFilePath, 'utf-8');
  assert.strictEqual(pointer, JSON.stringify(snapshot));
  assert.strictEqual(await fs.readFile(path.join(config.dataDir, 'history', '2026-W10.json'), 'utf-8'), pointer);
});

/** Files in data/history/ that are not archives, some named very like one. Several sort among the oldest archives. */
const BYSTANDERS = [
  '2026-W001.json', '2026-W01.json.bak', '2026-W01.jsonl', '2026-W5.json', 'README.md', 'notes.json', 'old-2026-W01.json',
  '12026-W01.json', '026-W01.json', '2026-01.json', '2026-W01-json',
];

/** `n` weekly archives, named 2026-W01 upwards, and the bystanders, which must never be touched. */
async function archivesAndBystanders(n, { prefix = '2026' } = {}) {
  const dir = path.join(config.dataDir, 'history');
  await fs.mkdir(dir, { recursive: true });
  for (let week = 1; week <= n; week++) {
    await fs.writeFile(path.join(dir, `${prefix}-W${String(week).padStart(2, '0')}.json`), '{}');
  }
  for (const bystander of BYSTANDERS) await fs.writeFile(path.join(dir, bystander), 'keep me');
  return dir;
}

const weeks = (from, to, prefix = '2026') => Array.from({ length: to - from + 1 }, (_, i) => `${prefix}-W${String(from + i).padStart(2, '0')}.json`);

test(`saveHistory keeps the newest ${HISTORY_ARCHIVES_KEPT} weekly archives and removes the older ones, and nothing that is not an archive`, async (t) => {
  await withScratchDirs(t);
  const dir = await archivesAndBystanders(HISTORY_ARCHIVES_KEPT + 4);

  await saveHistory({ lastRun: 'now', lastWeekString: `2026-W${HISTORY_ARCHIVES_KEPT + 5}`, features: {} });

  // Four more than are kept, and the one just written: the first five are the surplus.
  assert.deepStrictEqual((await fs.readdir(dir)).sort(), [...BYSTANDERS, ...weeks(6, HISTORY_ARCHIVES_KEPT + 5)].sort());
  assert.ok(await fs.access(config.historyFilePath).then(() => true, () => false), 'the working copy is not an archive');
});

test('exactly as many archives as are kept are all kept', async (t) => {
  await withScratchDirs(t);
  const dir = await archivesAndBystanders(HISTORY_ARCHIVES_KEPT - 1);

  await saveHistory({ lastRun: 'now', lastWeekString: `2026-W${HISTORY_ARCHIVES_KEPT}`, features: {} });

  assert.deepStrictEqual((await fs.readdir(dir)).sort(), [...BYSTANDERS, ...weeks(1, HISTORY_ARCHIVES_KEPT)].sort());
});

test('the archive just written is never the one removed, even when it is the oldest', async (t) => {
  await withScratchDirs(t);
  const dir = await archivesAndBystanders(HISTORY_ARCHIVES_KEPT + 4, { prefix: '2027' });

  await saveHistory({ lastRun: 'now', lastWeekString: '2026-W10', features: {} });

  // Sorted, the new one comes first and so is in the surplus; it is skipped and the next four are removed.
  assert.deepStrictEqual((await fs.readdir(dir)).sort(), [...BYSTANDERS, '2026-W10.json', ...weeks(5, HISTORY_ARCHIVES_KEPT + 4, '2027')].sort());
});

test('an archive that cannot be removed is a warning: the history is saved, and the other old archives are still removed', async (t) => {
  await withScratchDirs(t);
  const warnings = captureWarnings(t);
  const dir = await archivesAndBystanders(HISTORY_ARCHIVES_KEPT + 4);
  await fs.rm(path.join(dir, '2026-W01.json'));
  await fs.mkdir(path.join(dir, '2026-W01.json')); // a directory with an archive's name cannot be removed as a file, and it is the oldest

  await assert.doesNotReject(saveHistory({ lastRun: 'now', lastWeekString: `2026-W${HISTORY_ARCHIVES_KEPT + 5}`, features: { 1: { id: 1 } } }));

  const complaints = warnings.filter(w => w.includes('Could not remove'));
  assert.strictEqual(complaints.length, 1, warnings.join('\n'));
  assert.match(complaints[0], /\[History\] Could not remove the old archive 2026-W01\.json: /);
  assert.deepStrictEqual(JSON.parse(await fs.readFile(config.historyFilePath, 'utf-8')).features, { 1: { id: 1 } });
  assert.ok(await fs.access(path.join(dir, `2026-W${HISTORY_ARCHIVES_KEPT + 5}.json`)).then(() => true, () => false));
  // The four that follow it in the surplus are gone all the same.
  assert.deepStrictEqual((await fs.readdir(dir)).sort(), [...BYSTANDERS, '2026-W01.json', ...weeks(6, HISTORY_ARCHIVES_KEPT + 5)].sort());
});

test('the warning about an archive that could not be removed names it and says why', async (t) => {
  await withScratchDirs(t);
  const warnings = captureWarnings(t);
  await archivesAndBystanders(HISTORY_ARCHIVES_KEPT + 4);
  t.mock.method(fs, 'rm', async () => { throw new Error('disk on fire'); });

  await saveHistory({ lastRun: 'now', lastWeekString: `2026-W${HISTORY_ARCHIVES_KEPT + 5}`, features: {} });
  t.mock.restoreAll();

  // One warning for each of the five that could not go, oldest first.
  assert.deepStrictEqual(
    warnings.filter(w => w.includes('Could not remove')).map(w => w.slice(w.indexOf('[History]'))),
    weeks(1, 5).map(name => `[History] Could not remove the old archive ${name}: disk on fire`),
  );
});

test('an archive folder that cannot be listed is a warning: the history is saved all the same', async (t) => {
  await withScratchDirs(t);
  const warnings = captureWarnings(t);
  const realReaddir = fs.readdir;
  t.mock.method(fs, 'readdir', async (dir, ...rest) => {
    if (String(dir).endsWith('history')) throw new Error('listing denied');
    return realReaddir(dir, ...rest);
  });

  await assert.doesNotReject(saveHistory({ lastRun: 'now', lastWeekString: '2026-W10', features: { 1: { id: 1 } } }));
  t.mock.restoreAll();

  assert.ok(warnings.some(w => w.endsWith('[History] Could not list the old archives to remove: listing denied')), warnings.join('\n'));
  assert.deepStrictEqual(JSON.parse(await fs.readFile(config.historyFilePath, 'utf-8')).features, { 1: { id: 1 } });
});

test('an archive that has already gone when its turn comes is not a problem', async (t) => {
  await withScratchDirs(t);
  const warnings = captureWarnings(t);
  const dir = await archivesAndBystanders(HISTORY_ARCHIVES_KEPT + 4);
  const realRm = fs.rm;
  // Something else removes each file a moment before this run gets to it.
  t.mock.method(fs, 'rm', async (file, options) => {
    await realRm(file, { force: true });
    return realRm(file, options);
  });

  await saveHistory({ lastRun: 'now', lastWeekString: `2026-W${HISTORY_ARCHIVES_KEPT + 5}`, features: {} });
  t.mock.restoreAll();

  assert.deepStrictEqual(warnings.filter(w => w.includes('Could not remove')), []);
  assert.deepStrictEqual((await fs.readdir(dir)).sort(), [...BYSTANDERS, ...weeks(6, HISTORY_ARCHIVES_KEPT + 5)].sort());
});

test('which archives are the oldest does not depend on the order the file system lists them in', async (t) => {
  await withScratchDirs(t);
  const dir = await archivesAndBystanders(HISTORY_ARCHIVES_KEPT + 4);
  const realReaddir = fs.readdir;
  t.mock.method(fs, 'readdir', async (...args) => (await realReaddir(...args)).sort().reverse());

  await saveHistory({ lastRun: 'now', lastWeekString: `2026-W${HISTORY_ARCHIVES_KEPT + 5}`, features: {} });
  t.mock.restoreAll();

  assert.deepStrictEqual((await fs.readdir(dir)).sort(), [...BYSTANDERS, ...weeks(6, HISTORY_ARCHIVES_KEPT + 5)].sort());
});
