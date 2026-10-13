import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import {
  BASELINE_DAYS,
  BASELINE_TOLERANCE_DAYS,
  MIN_CHANGE,
  MIN_FEATURES_FOR_TIERS,
  MOMENTUM_LEVELS,
  POINTS_KEPT,
  assignMomentum,
  compareByMomentum,
  describeBasis,
  describeMomentum,
  footprintLevel,
  metricsPoint,
  pointsOf,
  summariseMomentum,
  withMetricsPoint,
} from '../src/momentum.js';
import { isoDay } from '../src/storage/seen.js';

/**
 * Momentum used to be the size of a feature's ecosystem, which only grows: 80 of 87 features were "High". It is now the
 * growth of that size (the footprint) since about four weeks ago, in percentile tiers, and until there are earlier
 * numbers it says plainly what it shows instead.
 */

const TODAY = '2026-10-08';

function daysBefore(days) {
  return isoDay(new Date(Date.parse(`${TODAY}T00:00:00Z`) - days * 86_400_000));
}

/** A saved weekly number, `age` days old. */
const point = ({ age, footprint, ai = false, week = null, metrics = {} }) => ({ week, date: daysBefore(age), footprint, ai, metrics });

/**
 * One feature for assignMomentum: this week's footprint, and (when `change` is given) a number from `age` days ago that
 * makes the growth since then exactly `change`.
 */
function entryOf(footprint, { change, age = BASELINE_DAYS, ai = false, week = null } = {}) {
  const points = change === undefined ? [] : [point({ age, footprint: footprint - change, ai, week })];
  return { analysis: { momentumScore: footprint, momentumLevel: 'provisional', consensus: 'Chromium-Led', isAiEnhanced: ai }, points };
}

const levelsOf = entries => entries.map(({ analysis }) => analysis.momentumLevel);

// --- what a footprint level is --------------------------------------------

test('the constants are what the report documents', () => {
  assert.deepStrictEqual(MOMENTUM_LEVELS, ['High', 'Moderate', 'Emerging', 'Quiet']);
  assert.strictEqual(BASELINE_DAYS, 28);
  assert.strictEqual(BASELINE_TOLERANCE_DAYS, 7);
  assert.strictEqual(POINTS_KEPT, 13);
  assert.strictEqual(MIN_FEATURES_FOR_TIERS, 10);
  assert.strictEqual(MIN_CHANGE, 10);
});

test('the footprint level is the absolute thresholds momentum used to have', () => {
  const levels = new Map([[0, 'Quiet'], [9, 'Quiet'], [10, 'Emerging'], [34, 'Emerging'], [35, 'Moderate'], [79, 'Moderate'], [80, 'High'], [863, 'High']]);
  for (const [score, level] of levels) assert.strictEqual(footprintLevel(score), level, `a footprint of ${score}`);
});

// --- the numbers a feature saves ------------------------------------------

test('a weekly number keeps the footprint, the engine and every number the ecosystem counted', () => {
  const analysis = { momentumScore: 120, isAiEnhanced: true };
  const metrics = {
    totalArticles: 3, hnPoints: 40.5, hasPolyfill: true, hasDemos: false,
    label: 'text', big: Infinity, nothing: NaN, missing: undefined, absent: null, nested: { a: 1 }, list: [1],
  };

  assert.deepStrictEqual(
    metricsPoint({ week: '2026-W41', date: TODAY, analysis, metrics }),
    { week: '2026-W41', date: TODAY, footprint: 120, ai: true, metrics: { totalArticles: 3, hnPoints: 40.5, hasPolyfill: 1, hasDemos: 0 } }
  );
});

test('the footprint a weekly number keeps is the one the momentum assignment set, or else the score', () => {
  assert.strictEqual(metricsPoint({ date: TODAY, analysis: { momentumScore: 120, footprint: 0 }, metrics: {} }).footprint, 0);
  assert.strictEqual(metricsPoint({ date: TODAY, analysis: { momentumScore: 120 }, metrics: {} }).footprint, 120);
});

test('a weekly number without a week, an engine or metrics still says what it must', () => {
  assert.deepStrictEqual(
    metricsPoint({ date: TODAY, analysis: { momentumScore: 5 }, metrics: undefined }),
    { week: null, date: TODAY, footprint: 5, ai: false, metrics: {} }
  );
  assert.deepStrictEqual(metricsPoint({ week: '2026-W41', date: TODAY, analysis: { momentumScore: 5 }, metrics: null }).metrics, {});
  assert.deepStrictEqual(metricsPoint({ week: '2026-W41', date: TODAY, analysis: { momentumScore: 5 }, metrics: 'text' }).metrics, {});
});

test('the numbers in a history entry are read back oldest first, and what cannot be used is left out', () => {
  const entry = {
    metrics: [
      point({ age: 7, footprint: 30 }),
      point({ age: 21, footprint: 10, week: '2026-W38', ai: true, metrics: { totalArticles: 1 } }),
      null, 'x', 5, [],
      { date: 'yesterday', footprint: 1 },
      { date: daysBefore(3) },
      { date: daysBefore(3), footprint: '7' },
      { date: daysBefore(3), footprint: NaN },
      { date: '2026-02-30', footprint: 1 },
    ],
  };

  const points = pointsOf(entry);

  assert.deepStrictEqual(points.map(p => [p.date, p.footprint]), [[daysBefore(21), 10], [daysBefore(7), 30]]);
  assert.deepStrictEqual(points[0], { week: '2026-W38', date: daysBefore(21), footprint: 10, ai: true, metrics: { totalArticles: 1 } });
});

test('a damaged history entry has no numbers, and what it holds cannot leak into the saved ones', () => {
  for (const entry of [undefined, null, {}, { metrics: 'x' }, { metrics: { a: 1 } }, { metrics: null }]) {
    assert.deepStrictEqual(pointsOf(entry), [], JSON.stringify(entry));
  }

  const [clean] = pointsOf({ metrics: [{ week: 41, date: TODAY, footprint: 3, ai: 'yes', metrics: { ok: 1, bad: 'x', deep: { a: 1 } }, extra: 'noise' }] });
  assert.deepStrictEqual(clean, { week: null, date: TODAY, footprint: 3, ai: false, metrics: { ok: 1 } });
});

test('reading the numbers back does not change the entry or share its objects', () => {
  const stored = point({ age: 7, footprint: 30, metrics: { totalArticles: 2 } });
  const entry = { metrics: [stored, point({ age: 14, footprint: 20 })] };
  const before = JSON.stringify(entry);

  const [first, second] = pointsOf(entry);
  second.metrics.totalArticles = 99;
  first.footprint = -1;

  assert.strictEqual(JSON.stringify(entry), before);
});

test('this run\'s number is added, and a second run in the same week replaces that week\'s', () => {
  const week40 = point({ age: 14, footprint: 10, week: '2026-W40' });
  const week41 = point({ age: 7, footprint: 20, week: '2026-W41' });
  const rerun = point({ age: 6, footprint: 25, week: '2026-W41' });

  assert.deepStrictEqual(withMetricsPoint([week40], week41), [week40, week41]);
  assert.deepStrictEqual(withMetricsPoint([week40, week41], rerun), [week40, rerun]);
});

test('a rerun without the AI synthesis does not replace the AI number of the same week', () => {
  const week40 = point({ age: 14, footprint: 10, week: '2026-W40', ai: true });
  const synthesised = point({ age: 7, footprint: 120, week: '2026-W41', ai: true });
  const failedRerun = point({ age: 6, footprint: 60, week: '2026-W41', ai: false });

  // The number the AI synthesis gave stays: only another number of the same kind could be compared with it later.
  assert.deepStrictEqual(withMetricsPoint([week40, synthesised], failedRerun), [week40, synthesised]);
  // Also when it is the only number the feature has.
  assert.deepStrictEqual(withMetricsPoint([synthesised], failedRerun), [synthesised]);
  // A rerun that has the synthesis too replaces it, and one without replaces a number that had none.
  const rerun = point({ age: 6, footprint: 130, week: '2026-W41', ai: true });
  assert.deepStrictEqual(withMetricsPoint([week40, synthesised], rerun), [week40, rerun]);
  const plain = point({ age: 7, footprint: 50, week: '2026-W41', ai: false });
  assert.deepStrictEqual(withMetricsPoint([week40, plain], failedRerun), [week40, failedRerun]);
  // A number that had none is replaced by one that has the synthesis, which is the better of the two.
  assert.deepStrictEqual(withMetricsPoint([plain], rerun), [rerun]);
  // Another week's AI number is not in the way.
  assert.deepStrictEqual(withMetricsPoint([week40], failedRerun), [week40, failedRerun]);
});

test('a number without a week is keyed by its day', () => {
  const first = point({ age: 7, footprint: 10 });
  const sameDay = { ...point({ age: 7, footprint: 11 }) };
  const otherDay = point({ age: 6, footprint: 12 });

  assert.deepStrictEqual(withMetricsPoint([first], sameDay), [sameDay]);
  assert.deepStrictEqual(withMetricsPoint([first], otherDay), [first, otherDay]);
  // A week and a day are different keys even if the dates agree.
  assert.strictEqual(withMetricsPoint([point({ age: 7, footprint: 1, week: '2026-W41' })], first).length, 2);
});

test('only the newest 13 numbers are kept, in date order', () => {
  const points = Array.from({ length: POINTS_KEPT }, (_, i) => point({ age: 7 * (POINTS_KEPT - i), footprint: i, week: `w${i}` }));
  const newest = point({ age: 0, footprint: 99, week: 'now' });

  const kept = withMetricsPoint(points, newest);

  assert.strictEqual(kept.length, POINTS_KEPT);
  assert.deepStrictEqual(kept.map(p => p.week), [...points.slice(1).map(p => p.week), 'now']);
  // An older number added late is placed by its date, and a number older than all the others is the one that goes.
  const old = point({ age: 7 * 40, footprint: 1, week: 'ancient' });
  assert.ok(!withMetricsPoint(points, old).some(p => p.week === 'ancient'));
  assert.deepStrictEqual(withMetricsPoint(points, point({ age: 3, footprint: 5, week: 'late' })).map(p => p.week).slice(-2), ['w12', 'late']);
});

// --- the baseline ---------------------------------------------------------

/** What a single feature, given these earlier numbers, is compared with. */
function baselineFor(points, { ai = false } = {}) {
  const entry = { analysis: { momentumScore: 100, isAiEnhanced: ai }, points };
  assignMomentum([entry], TODAY);
  return entry.analysis;
}

test('a feature is compared with its own number from about four weeks ago, and the change is the difference', () => {
  const a = baselineFor([point({ age: 28, footprint: 60, week: '2026-W37' })]);

  assert.strictEqual(a.momentumChange, 40);
  assert.deepStrictEqual(a.momentumBaseline, { week: '2026-W37', date: daysBefore(28), footprint: 60 });
  assert.strictEqual(a.footprint, 100);
  assert.strictEqual(a.momentumScore, 100, 'the score keeps its name');
});

test('the baseline is no nearer than three weeks and no further than five', () => {
  for (const [age, used] of [[20, false], [21, true], [28, true], [35, true], [36, false], [0, false], [7, false], [90, false]]) {
    const a = baselineFor([point({ age, footprint: 60 })]);
    assert.strictEqual(a.momentumBaseline !== null, used, `a number ${age} days old`);
    if (!used) assert.strictEqual(a.momentumChange, null);
  }
});

test('of two numbers the one closer to four weeks wins, and when equally close the older', () => {
  assert.strictEqual(baselineFor([point({ age: 22, footprint: 1 }), point({ age: 30, footprint: 2 })]).momentumBaseline.footprint, 2);
  assert.strictEqual(baselineFor([point({ age: 30, footprint: 2 }), point({ age: 22, footprint: 1 })]).momentumBaseline.footprint, 2, 'whatever the order');
  assert.strictEqual(baselineFor([point({ age: 25, footprint: 1 }), point({ age: 31, footprint: 2 })]).momentumBaseline.footprint, 2);
  assert.strictEqual(baselineFor([point({ age: 31, footprint: 2 }), point({ age: 25, footprint: 1 })]).momentumBaseline.footprint, 2);
  assert.strictEqual(baselineFor([point({ age: 28, footprint: 3 }), point({ age: 27, footprint: 4 }), point({ age: 29, footprint: 5 })]).momentumBaseline.footprint, 3);
});

test('a number measured with another engine is not a baseline: the AI synthesis adds sources, and so points', () => {
  const closer = point({ age: 28, footprint: 10, ai: false });
  const farther = point({ age: 31, footprint: 20, ai: true });

  assert.strictEqual(baselineFor([closer, farther], { ai: true }).momentumBaseline.footprint, 20);
  assert.strictEqual(baselineFor([closer, farther], { ai: false }).momentumBaseline.footprint, 10);
  assert.strictEqual(baselineFor([closer], { ai: true }).momentumBaseline, null);
  assert.strictEqual(baselineFor([farther], { ai: false }).momentumBaseline, null);
});

test('an analysis that does not say whether the AI synthesis was part of it is compared with the numbers measured without it', () => {
  const entry = { analysis: { momentumScore: 100 }, points: [point({ age: 28, footprint: 60, ai: false })] };

  assignMomentum([entry], TODAY);

  assert.strictEqual(entry.analysis.momentumChange, 40);
  assert.strictEqual(entry.analysis.momentumBaseline.footprint, 60);
});

test('a feature with no earlier numbers has no baseline and no change', () => {
  const a = baselineFor([]);

  assert.strictEqual(a.momentumChange, null);
  assert.strictEqual(a.momentumBaseline, null);
});

test('a baseline without a week says so with null, not undefined', () => {
  assert.deepStrictEqual(baselineFor([point({ age: 28, footprint: 5 })]).momentumBaseline, { week: null, date: daysBefore(28), footprint: 5 });
  // Points are normally read through `pointsOf`, but nothing stops a caller handing over a bare one.
  assert.deepStrictEqual(baselineFor([{ date: daysBefore(28), footprint: 5, ai: false }]).momentumBaseline, { week: null, date: daysBefore(28), footprint: 5 });
});

// --- which basis the tiers have -------------------------------------------

test('too few features to rank get the absolute levels, whatever earlier numbers they have', () => {
  const entries = [entryOf(500, { change: 400 }), entryOf(50, { change: 20 }), entryOf(12, { change: 2 }), entryOf(3, { change: 1 })];

  assert.strictEqual(assignMomentum(entries, TODAY), 'footprint level');
  assert.deepStrictEqual(levelsOf(entries), ['High', 'Moderate', 'Emerging', 'Quiet']);
  assert.deepStrictEqual(entries.map(e => e.analysis.momentumBasis), Array(4).fill('footprint level'));
  assert.deepStrictEqual(entries.map(e => e.analysis.momentumChange), [400, 20, 2, 1], 'the change is still reported');
});

test('nothing at all is no run', () => {
  assert.strictEqual(assignMomentum([], TODAY), 'footprint level');
});

test('ten features without earlier numbers are ranked by footprint, never above what the footprint itself says', () => {
  const entries = [900, 800, 700, 600, 500, 400, 300, 200, 100, 85].map(footprint => entryOf(footprint));

  assert.strictEqual(assignMomentum(entries, TODAY), 'footprint rank');
  // 15% of 10 is 2 (rounded), 50% is 5.
  assert.deepStrictEqual(levelsOf(entries), ['High', 'High', 'Moderate', 'Moderate', 'Moderate', 'Emerging', 'Emerging', 'Emerging', 'Emerging', 'Emerging']);
  assert.ok(entries.every(e => e.analysis.momentumBasis === 'footprint rank'));
  assert.ok(entries.every(e => e.analysis.momentumChange === null && e.analysis.momentumBaseline === null));
});

test('a rank cannot lift a small footprint: the best of a quiet crowd is still quiet', () => {
  const entries = Array.from({ length: 20 }, (_, i) => entryOf(20 - i)); // 20, 19, ... 1

  assert.strictEqual(assignMomentum(entries, TODAY), 'footprint rank');
  assert.deepStrictEqual(levelsOf(entries), [...Array(11).fill('Emerging'), ...Array(9).fill('Quiet')]);

  const middling = Array.from({ length: 20 }, (_, i) => entryOf(70 - i * 3));
  assignMomentum(middling, TODAY);
  assert.deepStrictEqual(levelsOf(middling).slice(0, 3), ['Moderate', 'Moderate', 'Moderate'], 'High needs a footprint of 80');
});

test('the percentiles are 15% High and 35% Moderate of the features, the rest Emerging', () => {
  const entries = Array.from({ length: 20 }, (_, i) => entryOf(1000 - i * 50));

  assignMomentum(entries, TODAY);

  const counts = Object.fromEntries(MOMENTUM_LEVELS.map(level => [level, levelsOf(entries).filter(l => l === level).length]));
  assert.deepStrictEqual(counts, { High: 3, Moderate: 7, Emerging: 10, Quiet: 0 });
});

test('87 features, as in the report that prompted this: 13 High, 31 Moderate, the rest Emerging', () => {
  const entries = Array.from({ length: 87 }, (_, i) => entryOf(900 - i * 8));

  assignMomentum(entries, TODAY);

  const counts = Object.fromEntries(MOMENTUM_LEVELS.map(level => [level, levelsOf(entries).filter(l => l === level).length]));
  assert.deepStrictEqual(counts, { High: 13, Moderate: 31, Emerging: 43, Quiet: 0 });
});

test('features that tie at a boundary are all placed below it, so equal numbers never get different labels', () => {
  const entries = [500, 400, 400, 300, 200, 200, 200, 100, 90, 85].map(footprint => entryOf(footprint));

  assignMomentum(entries, TODAY);

  // 15% of 10 is 2: 500 is first; the two 400s would be second and third, so both are Moderate. The three 200s reach past
  // the fifth place, so all three are Emerging.
  assert.deepStrictEqual(levelsOf(entries), ['High', 'Moderate', 'Moderate', 'Moderate', 'Emerging', 'Emerging', 'Emerging', 'Emerging', 'Emerging', 'Emerging']);
});

test('once half the features and at least ten have an earlier number, the tiers are of the change', () => {
  const entries = [
    ...[200, 150, 100, 80, 60, 50, 40, 30, 20, 15].map(change => entryOf(500, { change })),
    ...Array.from({ length: 10 }, () => entryOf(500)),
  ];

  assert.strictEqual(assignMomentum(entries, TODAY), 'change');
  assert.deepStrictEqual(entries.slice(0, 10).map(e => e.analysis.momentumBasis), Array(10).fill('change'));
  assert.deepStrictEqual(entries.slice(10).map(e => e.analysis.momentumBasis), Array(10).fill('no baseline'));
});

test('one more feature without an earlier number than with one, and the tiers are of the footprint again', () => {
  const baselines = Array.from({ length: 10 }, (_, i) => entryOf(500 + i, { change: 100 + i }));
  const justHalf = [...baselines, ...Array.from({ length: 10 }, () => entryOf(500))];
  const justUnder = [...baselines, ...Array.from({ length: 11 }, () => entryOf(500))];

  assert.strictEqual(assignMomentum(justHalf, TODAY), 'change');
  assert.strictEqual(assignMomentum(justUnder, TODAY), 'footprint rank');
  assert.ok(justUnder.every(e => e.analysis.momentumBasis === 'footprint rank'));
  assert.strictEqual(justUnder[0].analysis.momentumChange, 100, 'the change of those that have one is still reported');
});

test('nine features with an earlier number are too few to rank by change, even when they are every feature there is', () => {
  const nine = Array.from({ length: 9 }, (_, i) => entryOf(500 + i, { change: 50 + i }));
  const ten = [...nine, entryOf(509, { change: 59 })];

  assert.strictEqual(assignMomentum(nine, TODAY), 'footprint level');
  assert.strictEqual(assignMomentum(ten, TODAY), 'change');
});

test('ten features with an earlier number are the least that is ranked by change, however few features there are besides', () => {
  const withEarlier = count => Array.from({ length: count }, (_, i) => entryOf(500 + i, { change: 50 + i }));
  const twelveFeatures = count => [...withEarlier(count), ...Array.from({ length: 12 - count }, () => entryOf(100))];

  // Nine of twelve is three quarters of them, and still nine.
  assert.strictEqual(assignMomentum(twelveFeatures(9), TODAY), 'footprint rank');
  assert.strictEqual(assignMomentum(twelveFeatures(6), TODAY), 'footprint rank');
  assert.strictEqual(assignMomentum(twelveFeatures(10), TODAY), 'change');
  assert.strictEqual(assignMomentum(twelveFeatures(12), TODAY), 'change');
});

// --- the tiers of a change ------------------------------------------------

test('change tiers: top 15% of the growers High, the top half Moderate, the other growers Emerging, no growth Quiet', () => {
  const changes = [200, 150, 100, 80, 60, 50, 40, 30, 20, 15, 10, 9, 5, 1, 0, 0, -5, -20, -50, -100];
  const entries = changes.map(change => entryOf(700, { change }));

  assert.strictEqual(assignMomentum(entries, TODAY), 'change');

  assert.deepStrictEqual(levelsOf(entries), [
    'High', 'High', 'High',
    'Moderate', 'Moderate', 'Moderate', 'Moderate', 'Moderate', 'Moderate', 'Moderate',
    'Emerging', 'Emerging', 'Emerging', 'Emerging',
    'Quiet', 'Quiet', 'Quiet', 'Quiet', 'Quiet', 'Quiet',
  ]);
});

test('a growth below one more verified article is not enough for High or Moderate, however it ranks', () => {
  const entries = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map(change => entryOf(300, { change }));

  assignMomentum(entries, TODAY);

  assert.deepStrictEqual(levelsOf(entries), [...Array(9).fill('Emerging'), 'Quiet']);
  const exactlyEnough = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map(change => entryOf(300, { change }));
  assignMomentum(exactlyEnough, TODAY);
  assert.strictEqual(exactlyEnough[0].analysis.momentumLevel, 'High', `${MIN_CHANGE} points is enough`);
});

test('a feature without an earlier number is Emerging while others have one, and is not counted among them', () => {
  const entries = [
    ...[50, 40, 30, 20, 10, 5, 4, 3, 2, 1].map(change => entryOf(700, { change })),
    entryOf(9999), // enormous footprint, nothing to compare with
  ];

  assert.strictEqual(assignMomentum(entries, TODAY), 'change');
  assert.strictEqual(assignMomentum([entries[10], ...entries.slice(0, 10)], TODAY), 'change', 'the run\'s basis, not the first feature\'s');

  const newcomer = entries[10].analysis;
  assert.strictEqual(newcomer.momentumLevel, 'Emerging');
  assert.strictEqual(newcomer.momentumBasis, 'no baseline');
  assert.strictEqual(newcomer.momentumChange, null);
  assert.strictEqual(newcomer.momentumBaseline, null);
  // 15% of the ten compared is 2, 50% is 5: the newcomer did not take a place among them.
  assert.deepStrictEqual(levelsOf(entries).slice(0, 10), ['High', 'High', 'Moderate', 'Moderate', 'Moderate', 'Emerging', 'Emerging', 'Emerging', 'Emerging', 'Emerging']);
});

test('the engine a number was measured with decides whether it can be compared with', () => {
  const entries = [
    ...Array.from({ length: 10 }, (_, i) => entryOf(300 + i, { change: 40 + i, ai: true })),
    entryOf(500, { change: 400, age: 28, ai: false }),
  ];
  // The last feature now runs with the AI synthesis, its earlier number was without.
  entries[10].analysis.isAiEnhanced = true;

  assert.strictEqual(assignMomentum(entries, TODAY), 'change');
  assert.strictEqual(entries[10].analysis.momentumBasis, 'no baseline');
});

// --- what is set on an analysis -------------------------------------------

test('every analysis gets the footprint, the change, the baseline, the basis and the tier, and nothing else changes', () => {
  const entries = [entryOf(120, { change: 20, week: '2026-W37' })];
  const analysis = entries[0].analysis;

  assignMomentum(entries, TODAY);

  assert.deepStrictEqual(analysis, {
    momentumScore: 120,
    momentumLevel: 'High',
    consensus: 'Chromium-Led',
    isAiEnhanced: false,
    footprint: 120,
    momentumChange: 20,
    momentumBaseline: { week: '2026-W37', date: daysBefore(28), footprint: 100 },
    momentumBasis: 'footprint level',
  });
});

test('a score that is not a number counts as no footprint at all', () => {
  const entries = [entryOf(NaN), entryOf(undefined), entryOf('12')];

  assignMomentum(entries, TODAY);

  assert.deepStrictEqual(entries.map(e => e.analysis.footprint), [0, 0, 0]);
  assert.deepStrictEqual(levelsOf(entries), ['Quiet', 'Quiet', 'Quiet']);
});

// --- the run's summary ----------------------------------------------------

test('the run\'s momentum is summarised for the telemetry', () => {
  const entries = [
    ...[200, 150, 100, 80, 60, 50, 40, 30, 20, 15].map(change => entryOf(700, { change })),
    ...Array.from({ length: 10 }, () => entryOf(700)),
  ];
  const basis = assignMomentum(entries, TODAY);

  // Ranked among the ten that have an earlier number (15% of 10 is 2, 50% is 5); the ten without one are Emerging.
  assert.deepStrictEqual(summariseMomentum(entries.map(e => e.analysis), basis), {
    basis: 'change',
    baselineDays: 28,
    withBaseline: 10,
    total: 20,
    tiers: { High: 2, Moderate: 3, Emerging: 15, Quiet: 0 },
  });
});

test('a level that is not a tier is not counted as one', () => {
  const summary = summariseMomentum([{ momentumLevel: 'High' }, { momentumLevel: 'constructor' }, { momentumLevel: undefined }, { momentumLevel: 'toString' }], 'footprint level');

  assert.deepStrictEqual(summary.tiers, { High: 1, Moderate: 0, Emerging: 0, Quiet: 0 });
  assert.strictEqual(summary.total, 4);
  assert.strictEqual(summary.withBaseline, 0);
});

// --- order and wording ----------------------------------------------------

const item = (name, level, { change, footprint, score } = {}) => ({
  feature: { name },
  analysis: { momentumLevel: level, momentumChange: change ?? null, footprint, momentumScore: score ?? footprint },
});

test('the report lists by tier, then growth, then footprint, then name', () => {
  const shuffled = [
    item('Quiet one', 'Quiet', { change: -3, footprint: 900 }),
    item('B', 'Emerging', { change: 5, footprint: 20 }),
    item('Moderate one', 'Moderate', { change: 30, footprint: 10 }),
    item('Newcomer with the biggest footprint', 'Emerging', { footprint: 5000 }),
    item('A', 'Emerging', { change: 5, footprint: 20 }),
    item('Highest growth', 'High', { change: 90, footprint: 100 }),
    item('Bigger footprint', 'Emerging', { change: 5, footprint: 25 }),
    item('Biggest growth', 'Emerging', { change: 8, footprint: 1 }),
    item('Newcomer', 'Emerging', { footprint: 6 }),
  ];

  assert.deepStrictEqual(shuffled.sort(compareByMomentum).map(i => i.feature.name), [
    'Highest growth',
    'Moderate one',
    'Biggest growth',
    'Bigger footprint',
    'A',
    'B',
    'Newcomer with the biggest footprint',
    'Newcomer',
    'Quiet one',
  ]);
});

test('within a tier a feature with nothing to compare with comes after every feature that has a change, even a loss', () => {
  // This happens while the tiers are still a rank of the footprint: some features have an earlier number and some do not.
  const sorted = [
    item('Newcomer', 'Moderate', { footprint: 900 }),
    item('Shrinking', 'Moderate', { change: -40, footprint: 50 }),
    item('Level', 'Moderate', { change: 0, footprint: 40 }),
  ].sort(compareByMomentum);

  assert.deepStrictEqual(sorted.map(i => i.feature.name), ['Level', 'Shrinking', 'Newcomer']);
});

test('without a footprint field the score orders, and levels that are not tiers come after all of them', () => {
  const sorted = [
    item('Mystery', 'Mystery', { footprint: 9000 }),
    item('Alpha', 'Quiet', { score: 3 }),
    item('Zeta', 'Quiet', { score: 40 }),
    item('Nothing', undefined, { footprint: 9999 }),
  ].sort(compareByMomentum);

  // Both odd levels sort after the Quiet ones in spite of their footprints, and between themselves by footprint. The
  // names are in the opposite order to the scores, so it is the score that orders the Quiet ones.
  assert.deepStrictEqual(sorted.map(i => i.feature.name), ['Zeta', 'Alpha', 'Nothing', 'Mystery']);
});

test('a feature\'s momentum is described by what it rests on', () => {
  const baseline = { week: '2026-W37', date: '2026-09-10', footprint: 100 };

  assert.strictEqual(
    describeMomentum({ momentumBasis: 'change', momentumChange: 45, momentumBaseline: baseline, footprint: 145 }),
    '+45 points since 2026-09-10; footprint 145 points'
  );
  assert.strictEqual(
    describeMomentum({ momentumBasis: 'change', momentumChange: -12, momentumBaseline: baseline, footprint: 88 }),
    '-12 points since 2026-09-10; footprint 88 points'
  );
  assert.strictEqual(
    describeMomentum({ momentumBasis: 'change', momentumChange: 0, momentumBaseline: baseline, footprint: 100 }),
    '0 points since 2026-09-10; footprint 100 points'
  );
  assert.strictEqual(
    describeMomentum({ momentumBasis: 'no baseline', footprint: 70 }),
    'no earlier number to compare with yet; footprint 70 points'
  );
  assert.strictEqual(
    describeMomentum({ momentumBasis: 'footprint rank', footprint: 275 }),
    "footprint 275 points, ranked against this week's features because too few have an earlier number to work out a change"
  );
  assert.strictEqual(describeMomentum({ momentumBasis: 'footprint level', footprint: 12 }), 'footprint 12 points');
  assert.strictEqual(describeMomentum({ momentumScore: 33 }), 'footprint 33 points', 'an analysis from before footprints');
  assert.strictEqual(describeMomentum({ momentumBasis: 'footprint level', footprint: 0, momentumScore: 7 }), 'footprint 0 points', 'a footprint of 0 is a footprint');
});

test('a change that is not backed by a number to compare with is described by the footprint alone, and never throws', () => {
  const baseline = { week: null, date: '2026-09-10', footprint: 100 };

  assert.strictEqual(describeMomentum({ momentumBasis: 'change', momentumChange: 45, momentumBaseline: null, footprint: 145 }), 'footprint 145 points');
  assert.strictEqual(describeMomentum({ momentumBasis: 'change', momentumChange: 45, footprint: 145 }), 'footprint 145 points');
  assert.strictEqual(describeMomentum({ momentumBasis: 'change', momentumChange: null, momentumBaseline: baseline, footprint: 145 }), 'footprint 145 points');
  assert.strictEqual(describeMomentum({ momentumBasis: 'change', momentumChange: NaN, momentumBaseline: baseline, footprint: 145 }), 'footprint 145 points');
  assert.strictEqual(describeMomentum({ momentumBasis: 'change', momentumChange: 45, momentumBaseline: {}, footprint: 145 }), 'footprint 145 points');
  // A change without the basis that says it is one is not described as one either.
  assert.strictEqual(describeMomentum({ momentumBasis: 'footprint rank', momentumChange: 45, momentumBaseline: baseline, footprint: 145 }).startsWith('footprint 145 points, ranked'), true);
});

test('the header of a report says what the tiers are based on', () => {
  const summary = basis => ({ basis, baselineDays: 28, withBaseline: 31, total: 87, tiers: {} });

  assert.deepStrictEqual(describeBasis(summary('change')), {
    label: 'change over four weeks',
    detail: 'Momentum is the change in footprint since about four weeks ago, in tiers relative to the other features (31 of 87 features have an earlier number to compare with).',
  });
  assert.deepStrictEqual(describeBasis(summary('footprint rank')), {
    label: 'footprint rank (warm-up)',
    detail: "Momentum tiers rank this week's footprint against the other features: the change over four weeks needs an earlier number, measured the same way, for at least 10 features and half of them, and 31 of 87 have one.",
  });
  assert.deepStrictEqual(describeBasis(summary('footprint level')), {
    label: 'footprint level',
    detail: 'Too few features to rank: momentum tiers are the absolute footprint levels.',
  });
  assert.strictEqual(describeBasis(summary('something new')).label, 'footprint level', 'what is not known is described as the plainest basis');
});

test('numbers that exist but cannot be compared are not described as numbers that do not exist yet', () => {
  // Twelve features, each with a number from four weeks ago measured WITH the AI synthesis. This week the model was
  // unavailable and every analysis is heuristic-only, so none of those numbers can serve (see `baselineOf`): they are
  // there, and the header must not say that it is waiting for them.
  const entries = Array.from({ length: 12 }, (_, i) => {
    const entry = entryOf(40 + i * 10, { change: 20, ai: true });
    entry.analysis.isAiEnhanced = false;
    return entry;
  });

  const basis = assignMomentum(entries, TODAY);
  const summary = summariseMomentum(entries.map(entry => entry.analysis), basis);
  const { detail } = describeBasis(summary);

  assert.deepStrictEqual([basis, summary.withBaseline, summary.total], ['footprint rank', 0, 12]);
  assert.ok(!detail.includes('until four weeks of numbers exist'), detail);
  assert.match(detail, /an earlier number, measured the same way, for at least 10 features and half of them, and 0 of 12 have one\.$/);
  assert.ok(!describeMomentum(entries[0].analysis).includes('until four weeks'), describeMomentum(entries[0].analysis));
});
