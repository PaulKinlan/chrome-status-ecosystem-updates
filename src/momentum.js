/**
 * Momentum: how much a feature's ecosystem has GROWN, not how big it is.
 *
 * The number the report always computed (the score of `analyzeEcosystemData`) adds up everything ever found: Hacker
 * News points, articles, standards entries, packages. It only goes up and it orders features by age and fame, so 80
 * of 87 features were "High" and the label told a reader nothing. That number is kept, and now called the
 * FOOTPRINT. Momentum is the change in it over about four weeks (`BASELINE_DAYS`), measured against the numbers
 * each feature saved in the history, and the tiers are percentiles of that change so the labels discriminate:
 *
 *   High      the top 15% of the features that grew by at least `MIN_CHANGE` points
 *   Moderate  the next 35% (the top half, cumulatively), growing by at least that much
 *   Emerging  growing, but not enough to rank; also a feature with nothing to compare against yet
 *   Quiet     flat or shrinking
 *
 * Features that tie at a boundary are all placed below it, so equal numbers never get different labels.
 *
 * Until there are earlier numbers to compare with (four weeks after this was introduced, and for any feature that is
 * new, or whose earlier number was measured with a different analysis engine, because the AI synthesis adds sources
 * and so points) the report says what it shows instead (`momentumBasis`):
 *
 *   'change'           tiers of the change since the baseline, as above
 *   'no baseline'      a feature without an earlier number, while others have one
 *   'footprint rank'   tiers of the footprint itself, ranked against this week's features, never above what the
 *                      absolute thresholds would say
 *   'footprint level'  fewer than `MIN_FEATURES_FOR_TIERS` features, too few to rank: the absolute thresholds
 *
 * Everything here is pure; the day is passed in as `YYYY-MM-DD`.
 */
import { dayNumber } from './storage/seen.js';

/** Strongest first. The order is used to rank and to take the lower of two levels. */
export const MOMENTUM_LEVELS = ['High', 'Moderate', 'Emerging', 'Quiet'];

/** How far back the earlier number is looked for, and how far from it a number may be and still serve (missed weeks, manual runs). */
export const BASELINE_DAYS = 28;
export const BASELINE_TOLERANCE_DAYS = 7;

/** How many weekly numbers a feature keeps. */
export const POINTS_KEPT = 13;

/** Fewer features than this are not ranked against each other. */
export const MIN_FEATURES_FOR_TIERS = 10;

/** A growth smaller than this (one more verified article is worth 10) is not enough for High or Moderate. */
export const MIN_CHANGE = 10;

/** The top 15% are High, the top half (cumulatively: the next 35%) Moderate. */
export const HIGH_SHARE = 0.15;
export const MODERATE_SHARE = 0.5;

/**
 * The level the absolute footprint alone would give: what "momentum" meant before it was a change. Still used for the
 * heuristic sentiment, for runs too small to rank, and as the ceiling of a rank in the weeks before there are numbers.
 */
export function footprintLevel(score) {
  if (score >= 80) return 'High';
  if (score >= 35) return 'Moderate';
  if (score >= 10) return 'Emerging';
  return 'Quiet';
}

const lowerOf = (a, b) => MOMENTUM_LEVELS[Math.max(MOMENTUM_LEVELS.indexOf(a), MOMENTUM_LEVELS.indexOf(b))];

/** Every number in a metrics rollup (a boolean as 0 or 1); nothing else is kept, so what is saved stays small and flat. */
function numbersOf(metrics) {
  const numbers = {};
  if (!metrics || typeof metrics !== 'object') return numbers;
  for (const [name, value] of Object.entries(metrics)) {
    const number = typeof value === 'boolean' ? Number(value) : value;
    if (typeof number === 'number' && Number.isFinite(number)) numbers[name] = number;
  }
  return numbers;
}

/**
 * One week's numbers for a feature, as saved in the history.
 *
 * @param {{week: string|null, date: string, analysis: object, metrics: object}} input `metrics` is the ecosystem's
 *   `metrics` rollup; every number in it is kept, so a different score can be worked out from them later.
 */
export function metricsPoint({ week, date, analysis, metrics }) {
  return {
    week: week ?? null,
    date,
    // The footprint `assignMomentum` set, which is the score; the score itself for an analysis it has not been run on.
    footprint: analysis.footprint ?? analysis.momentumScore,
    ai: Boolean(analysis.isAiEnhanced),
    metrics: numbersOf(metrics),
  };
}

/** The numbers a history entry holds, oldest first; whatever in them cannot be used is left out. */
export function pointsOf(entry) {
  if (!Array.isArray(entry?.metrics)) return [];
  return entry.metrics
    .filter(point => point && typeof point === 'object' && !Number.isNaN(dayNumber(point.date)) && Number.isFinite(point.footprint))
    .map(point => ({
      week: typeof point.week === 'string' ? point.week : null,
      date: point.date,
      footprint: point.footprint,
      ai: point.ai === true,
      metrics: numbersOf(point.metrics),
    }))
    .sort((a, b) => dayNumber(a.date) - dayNumber(b.date));
}

/**
 * `points` with this run's added: a second run in the same week replaces that week's number (a point is keyed by its
 * week, or by its day when it has none), unless the number of that week came from the AI synthesis and this one did
 * not (a rerun after the synthesis failed, a run without a key): the weaker number would only be good for comparing
 * with other weaker ones. Only the newest `POINTS_KEPT` stay.
 */
export function withMetricsPoint(points, point) {
  const keyOf = p => p.week ?? p.date;
  const aiPoint = point.ai ? undefined : points.find(p => keyOf(p) === keyOf(point) && p.ai);
  return [...points.filter(p => keyOf(p) !== keyOf(point)), aiPoint ?? point]
    .sort((a, b) => dayNumber(a.date) - dayNumber(b.date))
    .slice(-POINTS_KEPT);
}

/**
 * The earlier number to compare with: the one closest to `BASELINE_DAYS` ago (the older when two are as close), no
 * nearer than `BASELINE_DAYS - BASELINE_TOLERANCE_DAYS` and no further than `BASELINE_DAYS + BASELINE_TOLERANCE_DAYS`,
 * and measured the same way (with or without the AI synthesis).
 */
function baselineOf(points, today, ai) {
  let best = null;
  for (const point of points) {
    if (point.ai !== ai) continue;
    const age = dayNumber(today) - dayNumber(point.date);
    const distance = Math.abs(age - BASELINE_DAYS);
    if (distance > BASELINE_TOLERANCE_DAYS) continue;
    if (!best || distance < best.distance || (distance === best.distance && age > best.age)) best = { point, age, distance };
  }
  return best?.point ?? null;
}

/**
 * The level of each value among all of them: the top `HIGH_SHARE` are High, the top `MODERATE_SHARE` Moderate, the
 * rest Emerging. A value ties with every other that is as large, and the whole tie sits on the lower side of a
 * boundary it straddles.
 */
function rankedLevels(values) {
  const highest = Math.round(values.length * HIGH_SHARE);
  const upperHalf = Math.round(values.length * MODERATE_SHARE);
  return values.map(value => {
    const asLargeOrLarger = values.filter(other => other >= value).length;
    if (asLargeOrLarger <= highest) return 'High';
    return asLargeOrLarger <= upperHalf ? 'Moderate' : 'Emerging';
  });
}

/** What a change alone allows: nothing above Emerging for a small growth, Quiet when there was none. */
function changeCeiling(change) {
  if (change >= MIN_CHANGE) return 'High';
  return change > 0 ? 'Emerging' : 'Quiet';
}

function chooseBasis(total, compared) {
  if (total < MIN_FEATURES_FOR_TIERS) return 'footprint level';
  return compared >= MIN_FEATURES_FOR_TIERS && compared * 2 >= total ? 'change' : 'footprint rank';
}

/**
 * Sets the momentum fields on every feature's analysis, all together because a tier is relative to the other features.
 *
 * Adds `footprint` (the score the analysis computed, which keeps its old name `momentumScore` too), `momentumChange`
 * (the footprint minus the baseline's, null without one), `momentumBaseline` (`{week, date, footprint}` or null) and
 * `momentumBasis`, and replaces `momentumLevel`, which the analysis only holds provisionally, with the tier.
 *
 * @param {Array<{analysis: object, points: object[]}>} entries One per feature: its analysis, and the numbers it
 *   saved in earlier runs (`pointsOf` of its history entry).
 * @param {string} today
 * @returns {string} What this week's tiers are based on: 'change', 'footprint rank' or 'footprint level'.
 */
export function assignMomentum(entries, today) {
  const items = entries.map(({ analysis, points }) => {
    const footprint = Number.isFinite(analysis.momentumScore) ? analysis.momentumScore : 0;
    const baseline = baselineOf(points, today, Boolean(analysis.isAiEnhanced));
    return { analysis, footprint, baseline, change: baseline ? footprint - baseline.footprint : null };
  });
  const compared = items.filter(item => item.baseline);
  const basis = chooseBasis(items.length, compared.length);

  if (basis === 'change') {
    const levels = rankedLevels(compared.map(item => item.change));
    compared.forEach((item, i) => Object.assign(item, { basis: 'change', level: lowerOf(levels[i], changeCeiling(item.change)) }));
    for (const item of items) if (!item.baseline) Object.assign(item, { basis: 'no baseline', level: 'Emerging' });
  } else if (basis === 'footprint rank') {
    const levels = rankedLevels(items.map(item => item.footprint));
    items.forEach((item, i) => Object.assign(item, { basis, level: lowerOf(levels[i], footprintLevel(item.footprint)) }));
  } else {
    for (const item of items) Object.assign(item, { basis, level: footprintLevel(item.footprint) });
  }

  for (const { analysis, footprint, baseline, change, basis: itemBasis, level } of items) {
    Object.assign(analysis, {
      momentumLevel: level,
      footprint,
      momentumChange: change,
      momentumBaseline: baseline ? { week: baseline.week ?? null, date: baseline.date, footprint: baseline.footprint } : null,
      momentumBasis: itemBasis,
    });
  }
  return basis;
}

/** The run's momentum in a few numbers, for the report's telemetry: what the tiers are based on and how they came out. */
export function summariseMomentum(analyses, basis) {
  const tiers = Object.fromEntries(MOMENTUM_LEVELS.map(level => [level, 0]));
  for (const { momentumLevel } of analyses) {
    if (Object.hasOwn(tiers, momentumLevel)) tiers[momentumLevel]++;
  }
  return {
    basis,
    baselineDays: BASELINE_DAYS,
    withBaseline: analyses.filter(analysis => analysis.momentumBaseline).length,
    total: analyses.length,
    tiers,
  };
}

/**
 * The order the report lists features in: by tier, then by growth (a feature with nothing to compare with last), then by
 * footprint, then by name.
 */
export function compareByMomentum(a, b) {
  const rank = item => {
    const index = MOMENTUM_LEVELS.indexOf(item.analysis.momentumLevel);
    return index === -1 ? MOMENTUM_LEVELS.length : index;
  };
  if (rank(a) !== rank(b)) return rank(a) - rank(b);
  const changeA = a.analysis.momentumChange ?? -Infinity;
  const changeB = b.analysis.momentumChange ?? -Infinity;
  if (changeA !== changeB) return changeB - changeA;
  const footprintA = a.analysis.footprint ?? a.analysis.momentumScore;
  const footprintB = b.analysis.footprint ?? b.analysis.momentumScore;
  if (footprintA !== footprintB) return footprintB - footprintA;
  return a.feature.name.localeCompare(b.feature.name);
}

/**
 * What the run's tiers are based on, in a short label and a sentence, for the headers of the reports (`summary` is
 * `telemetry.momentum`). Said outright so that a reader is never left to take a tier for more than it is.
 */
export function describeBasis(summary) {
  const have = `${summary.withBaseline} of ${summary.total}`;
  switch (summary.basis) {
    case 'change':
      return {
        label: 'change over four weeks',
        detail: `Momentum is the change in footprint since about four weeks ago, in tiers relative to the other features (${have} features have an earlier number to compare with).`,
      };
    case 'footprint rank':
      // Not "until four weeks of numbers exist": numbers can exist and still not be comparable (see `baselineOf`).
      return {
        label: 'footprint rank (warm-up)',
        detail: `Momentum tiers rank this week's footprint against the other features: the change over four weeks needs an earlier number, measured the same way, for at least ${MIN_FEATURES_FOR_TIERS} features and half of them, and ${have} have one.`,
      };
    default:
      return {
        label: 'footprint level',
        detail: 'Too few features to rank: momentum tiers are the absolute footprint levels.',
      };
  }
}

/**
 * One line saying what a feature's momentum tier rests on, for the reports: a change since the baseline, or the
 * footprint with the reason it is not a change yet.
 */
export function describeMomentum(analysis) {
  const footprint = `footprint ${analysis.footprint ?? analysis.momentumScore} points`;
  const { momentumChange: change, momentumBaseline: baseline } = analysis;
  // A reporter must never be the thing that fails: a change that is not backed by a baseline is only the footprint.
  if (analysis.momentumBasis === 'change' && Number.isFinite(change) && baseline?.date) {
    return `${change > 0 ? '+' : ''}${change} points since ${baseline.date}; ${footprint}`;
  }
  switch (analysis.momentumBasis) {
    case 'no baseline':
      return `no earlier number to compare with yet; ${footprint}`;
    case 'footprint rank':
      return `${footprint}, ranked against this week's features because too few have an earlier number to work out a change`;
    default:
      return footprint;
  }
}
