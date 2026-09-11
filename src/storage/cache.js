import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config.js';
import { logger } from '../logger.js';
import { cleanUrl } from '../search/web.js';

const historySubdir = path.join(config.dataDir, 'history');

/**
 * Loads previous history snapshot from disk.
 * Fallback priority:
 * 1. data/history.json
 * 2. Most recent file in data/history/YYYY-Wxx.json
 * 3. Most recent weekly report JSON in reports/weekly/YYYY-Wxx.json
 */
export async function loadHistory() {
  // 1. Try data/history.json
  try {
    const data = await fs.readFile(config.historyFilePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    // Continue to fallbacks
  }

  // 2. Try data/history/ directory for latest snapshot
  try {
    const files = await fs.readdir(historySubdir);
    const jsonFiles = files.filter(f => f.endsWith('.json')).sort().reverse();
    if (jsonFiles.length > 0) {
      const latestFile = path.join(historySubdir, jsonFiles[0]);
      const data = await fs.readFile(latestFile, 'utf-8');
      logger.debug(`[History] Loaded previous snapshot from ${latestFile}`);
      return JSON.parse(data);
    }
  } catch {
    // Continue to report fallback
  }

  // 3. Reconstruct snapshot from latest weekly report in reports/weekly/
  try {
    const weeklyDir = path.join(config.reportsDir, 'weekly');
    const files = await fs.readdir(weeklyDir);
    const reportFiles = files.filter(f => f.endsWith('.json')).sort().reverse();
    if (reportFiles.length > 0) {
      const latestReport = path.join(weeklyDir, reportFiles[0]);
      const raw = await fs.readFile(latestReport, 'utf-8');
      const parsed = JSON.parse(raw);
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

      logger.debug(`[History] Reconstructed previous snapshot from weekly report: ${latestReport}`);
      return {
        lastRun: parsed.generatedAt || null,
        lastWeekString: parsed.weekString || null,
        telemetry: parsed.telemetry || {},
        features: reconstructedFeatures,
      };
    }
  } catch {
    // No prior reports found
  }

  return {
    lastRun: null,
    features: {},
  };
}

/**
 * Saves updated history snapshot to disk in data/history.json AND data/history/YYYY-Wxx.json
 */
export async function saveHistory(historyData) {
  try {
    await fs.mkdir(config.dataDir, { recursive: true });
    await fs.mkdir(historySubdir, { recursive: true });

    // Save primary pointer
    await fs.writeFile(
      config.historyFilePath,
      JSON.stringify(historyData, null, 2),
      'utf-8'
    );

    // Save historical archive snapshot
    const archiveFilename = `${historyData.lastWeekString || new Date().toISOString().split('T')[0]}.json`;
    const archivePath = path.join(historySubdir, archiveFilename);
    await fs.writeFile(
      archivePath,
      JSON.stringify(historyData, null, 2),
      'utf-8'
    );
  } catch (err) {
    console.error('Failed to save history snapshot:', err.message);
  }
}

/**
 * Hosts that mint a fresh, expiring URL for every single request. Storing these
 * in `knownUrls` makes every article look brand new on the next run, which
 * permanently inflates the "What Happened This Week" section.
 */
const EPHEMERAL_URL_HOSTS = [
  'vertexaisearch.cloud.google.com',
  'googleusercontent.com',
];

function isEphemeralUrl(url) {
  return EPHEMERAL_URL_HOSTS.some(host => String(url).includes(host));
}

/**
 * Canonicalises a URL for identity comparison across runs, discarding any that
 * cannot be compared meaningfully. Exported for testing.
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

function isNewUrl(prevUrls, rawUrl) {
  // An item with no comparable URL (or an ephemeral one) can never be matched
  // against history, so treat it as not-new rather than perpetually new.
  if (!rawUrl || isEphemeralUrl(rawUrl)) return false;
  const cleaned = cleanUrl(rawUrl);
  return cleaned ? !prevUrls.has(cleaned) : false;
}

/**
 * Calculates week-over-week deltas for a feature against previous snapshot
 */
export function computeFeatureDelta(feature, ecosystemData, previousFeatureHistory, analysis = null) {
  const articles = ecosystemData.articles || [];
  const discussions = ecosystemData.discussions || [];
  const standardsList = ecosystemData.standards || [];

  if (!previousFeatureHistory) {
    return {
      isNewFeature: true,
      statusChanged: false,
      momentumChanged: false,
      newArticlesCount: articles.length,
      newDiscussionsCount: discussions.length,
      newStandardsCount: standardsList.length,
      newArticles: articles,
      newDiscussions: discussions,
      newStandards: standardsList,
      previousMilestone: null,
      previousStatus: null,
      previousMomentum: null,
      hasDelta: true,
    };
  }

  const prevUrls = toComparableUrls(previousFeatureHistory.knownUrls || []);

  const newArticles = articles.filter(a => isNewUrl(prevUrls, a.url));
  const newDiscussions = discussions.filter(d => isNewUrl(prevUrls, d.url || d.discussionUrl));
  const newStandards = standardsList.filter(s => isNewUrl(prevUrls, s.url));

  const statusChanged =
    previousFeatureHistory.status !== feature.category ||
    previousFeatureHistory.milestone !== feature.milestone;

  const currentMomentum = analysis?.momentumLevel;
  const momentumChanged = Boolean(
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
    previousMomentum: previousFeatureHistory.lastMomentumLevel,
    hasDelta,
  };
}

/**
 * Updates the feature history object with current run's data
 */
export function buildFeatureHistoryEntry(feature, ecosystemData, analysis) {
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
    lastSeen: new Date().toISOString(),
    // Canonicalised and stripped of ephemeral redirects so that next week's
    // diff compares like with like.
    knownUrls: Array.from(toComparableUrls(currentUrls)),
    lastMomentumLevel: analysis.momentumLevel,
    lastConsensus: analysis.consensus,
  };
}
