import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config.js';
import { logger } from '../logger.js';
import { metricsPoint, pointsOf, withMetricsPoint } from '../momentum.js';
import { denormaliseReport } from '../report-schema.js';
import { cleanUrl, isEphemeralUrl } from '../search/urls.js';
import { writeFileAtomic } from './atomic.js';
import { isNewItem, isoDay, seenOf, updatedSeen } from './seen.js';

// Resolved on every use rather than once at import: `config.dataDir` can be
// redirected after this module loads (DATA_DIR, isolated trial runs, tests).
const historySubdir = () => path.join(config.dataDir, 'history');

/**
 * The shape of `data/history.json` and of the archives under `data/history/` (a file without the field is version 1).
 *
 * It is the history's own number and not the published report's (`SCHEMA_VERSION` in src/report-schema.js): raising
 * either one makes every file of the other kind unreadable, and the two change for different reasons.
 */
export const HISTORY_SCHEMA_VERSION = 2;

/** A file that is merely absent is normal (first run); anything else is not. */
function isMissing(err) {
  return err?.code === 'ENOENT' || err?.code === 'ENOTDIR';
}

/** Parses JSON and insists on an object, since callers index into the result. */
function parseJsonObject(raw) {
  const parsed = JSON.parse(raw);
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error('expected a JSON object');
  }
  return parsed;
}

/**
 * Parses a history snapshot, rejecting JSON that parses but cannot be one
 * (`null`, `[]`, a non-object `features`) because the runner indexes
 * `features` directly, and one written in a shape this program does not know
 * (a snapshot has no `schemaVersion` until version 2).
 */
function parseSnapshot(raw) {
  const parsed = parseJsonObject(raw);
  if (parsed.schemaVersion !== undefined && parsed.schemaVersion !== HISTORY_SCHEMA_VERSION) {
    throw new Error(`unsupported history schemaVersion ${JSON.stringify(parsed.schemaVersion)}`);
  }
  if (parsed.features != null && (typeof parsed.features !== 'object' || Array.isArray(parsed.features))) {
    throw new Error('"features" must be an object keyed by feature id');
  }
  return parsed;
}

/**
 * Rebuilds a history snapshot from a published weekly report, in either shape it has been published in
 * (see src/report-schema.js): the archive of any week can be the one that is read.
 */
function snapshotFromReport(published) {
  const parsed = denormaliseReport(published);
  if (parsed.features != null && !Array.isArray(parsed.features)) {
    throw new Error('"features" must be an array in a weekly report');
  }
  const reconstructedFeatures = {};

  for (const item of parsed.features || []) {
    const feat = item.feature;
    const eco = item.ecosystem || {};
    const ana = item.analysis || {};
    if (feat?.id) {
      const knownUrls = [
        ...(eco.articles || []).map(a => a.url),
        ...(eco.discussions || []).map(d => d.url || d.discussionUrl),
        ...(eco.standards || []).map(s => s.url),
        ...(eco.packages || []).map(p => p.url),
      ].filter(Boolean);

      reconstructedFeatures[feat.id] = {
        id: feat.id,
        name: feat.name,
        milestone: feat.milestone,
        status: feat.category,
        lastSeen: parsed.generatedAt || new Date().toISOString(),
        knownUrls: Array.from(new Set(knownUrls)),
        lastMomentumLevel: ana.momentumLevel || 'Quiet',
        lastConsensus: ana.consensus || 'Chromium-Led',
      };
    }
  }

  return {
    lastRun: parsed.generatedAt || null,
    lastWeekString: parsed.weekString || null,
    telemetry: parsed.telemetry || {},
    features: reconstructedFeatures,
  };
}

/**
 * Loads previous history snapshot from disk.
 * Fallback priority:
 * 1. data/history.json
 * 2. Most recent file in data/history/YYYY-Wxx.json
 * 3. Most recent weekly report JSON in reports/weekly/YYYY-Wxx.json
 *
 * A source that does not exist is skipped silently. A source that exists but
 * cannot be read or parsed is skipped with a warning, and if NOTHING usable
 * remains this throws instead of returning an empty history: an empty history
 * is indistinguishable from a first run, so every feature would be reported as
 * brand new and the damaged file would then be overwritten.
 */
export async function loadHistory() {
  const unusable = [];
  const noteUnusable = (file, err) => {
    unusable.push(`${file}: ${err.message}`);
    logger.warn(`[History] Ignoring unreadable snapshot ${file}: ${err.message}`);
  };

  // 1. Try data/history.json
  try {
    return parseSnapshot(await fs.readFile(config.historyFilePath, 'utf-8'));
  } catch (err) {
    if (!isMissing(err)) noteUnusable(config.historyFilePath, err);
  }

  // 2. Try data/history/ directory, newest snapshot first
  const archiveDir = historySubdir();
  try {
    const files = await fs.readdir(archiveDir);
    for (const file of files.filter(f => f.endsWith('.json')).sort().reverse()) {
      const candidate = path.join(archiveDir, file);
      try {
        const snapshot = parseSnapshot(await fs.readFile(candidate, 'utf-8'));
        logger.debug(`[History] Loaded previous snapshot from ${candidate}`);
        return snapshot;
      } catch (err) {
        if (!isMissing(err)) noteUnusable(candidate, err);
      }
    }
  } catch (err) {
    if (!isMissing(err)) noteUnusable(archiveDir, err);
  }

  // 3. Reconstruct snapshot from latest weekly report in reports/weekly/
  const weeklyDir = path.join(config.reportsDir, 'weekly');
  try {
    const files = await fs.readdir(weeklyDir);
    for (const file of files.filter(f => f.endsWith('.json')).sort().reverse()) {
      const candidate = path.join(weeklyDir, file);
      try {
        const snapshot = snapshotFromReport(parseJsonObject(await fs.readFile(candidate, 'utf-8')));
        logger.debug(`[History] Reconstructed previous snapshot from weekly report: ${candidate}`);
        return snapshot;
      } catch (err) {
        if (!isMissing(err)) noteUnusable(candidate, err);
      }
    }
  } catch (err) {
    if (!isMissing(err)) noteUnusable(weeklyDir, err);
  }

  if (unusable.length > 0) {
    throw new Error(
      `No usable history snapshot could be loaded, and ${unusable.length} existing source(s) were unreadable:\n` +
      unusable.map(u => `  - ${u}`).join('\n') +
      '\nFix or delete the damaged file(s) to start a fresh history (every feature will then be reported as new).'
    );
  }

  return {
    lastRun: null,
    features: {},
  };
}

/** How many weekly archives (`data/history/YYYY-Wxx.json`) are kept; the newest is the working copy's twin. */
export const HISTORY_ARCHIVES_KEPT = 26;
const ARCHIVE_NAME = /^\d{4}-W\d{2}\.json$/;

/**
 * Deletes the weekly archives beyond the newest `HISTORY_ARCHIVES_KEPT`: they are only read when
 * `data/history.json` is damaged, and an unbounded pile of full copies is the largest thing in `data/`.
 * Only files named exactly like an archive are touched, and never the one just written. Housekeeping
 * only: a failure here is a warning, because the history it follows has already been saved. Each
 * file is dealt with on its own, so one that cannot be removed does not keep the others.
 */
async function pruneHistoryArchives(justWritten) {
  let surplus;
  try {
    const archives = (await fs.readdir(historySubdir())).filter(name => ARCHIVE_NAME.test(name)).sort();
    surplus = archives.slice(0, -HISTORY_ARCHIVES_KEPT);
  } catch (err) {
    logger.warn(`[History] Could not list the old archives to remove: ${err.message}`);
    return;
  }
  for (const name of surplus) {
    if (name === justWritten) continue;
    try {
      await fs.rm(path.join(historySubdir(), name), { force: true });
    } catch (err) {
      logger.warn(`[History] Could not remove the old archive ${name}: ${err.message}`);
    }
  }
}

/**
 * Saves updated history snapshot to disk in data/history.json AND data/history/YYYY-Wxx.json
 *
 * Both writes are atomic, and a failure is thrown rather than logged: a run
 * that cannot persist its history would otherwise look successful while the
 * next one re-reports everything as new. The files are compact JSON: they are
 * state for the next run, not for reading.
 */
export async function saveHistory(historyData) {
  const archiveFilename = `${historyData.lastWeekString || new Date().toISOString().split('T')[0]}.json`;
  const body = JSON.stringify(historyData);

  try {
    await fs.mkdir(config.dataDir, { recursive: true });
    await fs.mkdir(historySubdir(), { recursive: true });
    await fs.mkdir(path.dirname(config.historyFilePath), { recursive: true });

    // Archive first, pointer last: the pointer is what the next run reads, so
    // it must never get ahead of the archive it belongs to.
    await writeFileAtomic(path.join(historySubdir(), archiveFilename), body);
    await writeFileAtomic(config.historyFilePath, body);
  } catch (err) {
    throw new Error(`Failed to save history snapshot: ${err.message}`, { cause: err });
  }

  await pruneHistoryArchives(archiveFilename);
}

/**
 * Canonicalises a URL for identity comparison across runs, discarding any that
 * cannot be compared meaningfully (links that expire within weeks, see
 * `isEphemeralUrl`: they would make every article look brand new on the next
 * run). Exported for testing.
 */
export function toComparableUrls(urls) {
  const out = new Set();
  for (const raw of urls) {
    if (!raw || isEphemeralUrl(raw)) continue;
    const cleaned = cleanUrl(raw);
    if (cleaned) out.add(cleaned);
  }
  return out;
}

/**
 * Is the momentum level last run's comparable with this run's? A tier means what the run's basis made it mean (a
 * change over four weeks, a rank of the footprint while there are no earlier numbers, ...), and the AI synthesis adds
 * sources and so points: a feature that moved from one to another has not moved at all, and a history written before
 * either was recorded cannot say. Nothing then is reported as a shift.
 */
function momentumComparable(previous, analysis) {
  return previous.lastMomentumBasis === analysis?.momentumBasis &&
    Boolean(previous.lastAi) === Boolean(analysis?.isAiEnhanced);
}

/**
 * Calculates week-over-week deltas for a feature against previous snapshot.
 *
 * An article, discussion or standards entry is new when the feature has never shown it (`seen` of the history
 * entry; an entry from before that existed has its `knownUrls`) and it was published within the last 30 days or does
 * not say when: see src/storage/seen.js. A feature the history has never seen is judged the same way, so its old
 * pages are not announced as news.
 *
 * Throws when the history entry holds pages in a shape that cannot be read, rather than calling everything new.
 */
export function computeFeatureDelta(feature, ecosystemData, previousFeatureHistory, analysis = null, today = isoDay()) {
  const articles = ecosystemData.articles || [];
  const discussions = ecosystemData.discussions || [];
  const standardsList = ecosystemData.standards || [];

  const seen = seenOf(previousFeatureHistory, today);
  const newArticles = articles.filter(a => isNewItem(seen, a, today));
  const newDiscussions = discussions.filter(d => isNewItem(seen, d, today));
  const newStandards = standardsList.filter(s => isNewItem(seen, s, today));

  if (!previousFeatureHistory) {
    return {
      isNewFeature: true,
      statusChanged: false,
      momentumChanged: false,
      newArticlesCount: newArticles.length,
      newDiscussionsCount: newDiscussions.length,
      newStandardsCount: newStandards.length,
      newArticles,
      newDiscussions,
      newStandards,
      previousMilestone: null,
      previousStatus: null,
      previousMomentum: null,
      hasDelta: true,
    };
  }

  const statusChanged =
    previousFeatureHistory.status !== feature.category ||
    previousFeatureHistory.milestone !== feature.milestone;

  const currentMomentum = analysis?.momentumLevel;
  const comparable = momentumComparable(previousFeatureHistory, analysis);
  const momentumChanged = Boolean(
    comparable &&
    previousFeatureHistory.lastMomentumLevel &&
    currentMomentum &&
    previousFeatureHistory.lastMomentumLevel !== currentMomentum
  );

  const hasDelta = Boolean(
    statusChanged ||
    momentumChanged ||
    newArticles.length > 0 ||
    newDiscussions.length > 0 ||
    newStandards.length > 0
  );

  return {
    isNewFeature: false,
    statusChanged,
    momentumChanged,
    newArticlesCount: newArticles.length,
    newDiscussionsCount: newDiscussions.length,
    newStandardsCount: newStandards.length,
    newArticles,
    newDiscussions,
    newStandards,
    previousMilestone: previousFeatureHistory.milestone,
    previousStatus: previousFeatureHistory.status,
    // Null when the earlier level cannot be compared with this one (see `momentumComparable`).
    previousMomentum: comparable ? previousFeatureHistory.lastMomentumLevel : null,
    hasDelta,
  };
}

/**
 * Updates the feature history object with current run's data.
 *
 * `previous` is the feature's entry from the last run: what it has shown (`seen`) and the weekly numbers it saved
 * (`metrics`) carry over, with this run's added. `knownUrls` is still written, the pages of this run alone, for
 * anything that reads the history the way it was before `seen` existed.
 *
 * @param {object} [context]
 * @param {object} [context.previous] The feature's entry in the history that was loaded, if any.
 * @param {Date} [context.now] The moment of the run: `lastSeen` is this, and `today` is its UTC day unless given.
 * @param {string} [context.today] `YYYY-MM-DD`
 * @param {string|null} [context.week] ISO week of the run, `2026-W41`
 */
export function buildFeatureHistoryEntry(feature, ecosystemData, analysis, { previous, now = new Date(), today = isoDay(now), week = null } = {}) {
  const currentUrls = [
    ...(ecosystemData.articles || []).map(a => a.url),
    ...(ecosystemData.discussions || []).map(d => d.url || d.discussionUrl),
    ...(ecosystemData.standards || []).map(s => s.url),
    ...(ecosystemData.packages || []).map(p => p.url),
  ];

  return {
    id: feature.id,
    name: feature.name,
    milestone: feature.milestone,
    status: feature.category,
    lastSeen: now.toISOString(),
    // Canonicalised and stripped of ephemeral redirects so that next week's
    // diff compares like with like.
    knownUrls: Array.from(toComparableUrls(currentUrls)),
    lastMomentumLevel: analysis.momentumLevel,
    lastConsensus: analysis.consensus,
    // What the level rests on and whether the AI synthesis was part of it: a level is only compared with one of
    // the same kind (see `momentumComparable`).
    lastMomentumBasis: analysis.momentumBasis,
    lastAi: Boolean(analysis.isAiEnhanced),
    // Every page the feature has shown and the day it last turned up (see src/storage/seen.js).
    seen: Object.fromEntries(updatedSeen(seenOf(previous, today), currentUrls, today)),
    // One number set per week, newest last: what momentum is the change of (see src/momentum.js).
    metrics: withMetricsPoint(pointsOf(previous), metricsPoint({ week, date: today, analysis, metrics: ecosystemData.metrics })),
  };
}
