import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config.js';

/**
 * Loads previous history snapshot from disk
 */
export async function loadHistory() {
  try {
    const data = await fs.readFile(config.historyFilePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return {
      lastRun: null,
      features: {},
    };
  }
}

/**
 * Saves updated history snapshot to disk
 */
export async function saveHistory(historyData) {
  try {
    await fs.mkdir(config.dataDir, { recursive: true });
    await fs.writeFile(
      config.historyFilePath,
      JSON.stringify(historyData, null, 2),
      'utf-8'
    );
  } catch (err) {
    console.error('Failed to save history snapshot:', err.message);
  }
}

/**
 * Calculates week-over-week deltas for a feature against previous snapshot
 */
export function computeFeatureDelta(feature, ecosystemData, previousFeatureHistory) {
  if (!previousFeatureHistory) {
    return {
      isNewFeature: true,
      statusChanged: false,
      newArticlesCount: ecosystemData.articles.length,
      newDiscussionsCount: ecosystemData.discussions.length,
      newStandardsCount: ecosystemData.standards.length,
      newArticles: ecosystemData.articles,
      newDiscussions: ecosystemData.discussions,
      newStandards: ecosystemData.standards,
      previousMilestone: null,
      previousStatus: null,
    };
  }

  const prevUrls = new Set(previousFeatureHistory.knownUrls || []);

  const newArticles = ecosystemData.articles.filter(a => !prevUrls.has(a.url));
  const newDiscussions = ecosystemData.discussions.filter(d => !prevUrls.has(d.url || d.discussionUrl));
  const newStandards = ecosystemData.standards.filter(s => !prevUrls.has(s.url));

  const statusChanged =
    previousFeatureHistory.status !== feature.category ||
    previousFeatureHistory.milestone !== feature.milestone;

  return {
    isNewFeature: false,
    statusChanged,
    newArticlesCount: newArticles.length,
    newDiscussionsCount: newDiscussions.length,
    newStandardsCount: newStandards.length,
    newArticles,
    newDiscussions,
    newStandards,
    previousMilestone: previousFeatureHistory.milestone,
    previousStatus: previousFeatureHistory.status,
  };
}

/**
 * Updates the feature history object with current run's data
 */
export function buildFeatureHistoryEntry(feature, ecosystemData, analysis) {
  const currentUrls = [
    ...ecosystemData.articles.map(a => a.url),
    ...ecosystemData.discussions.map(d => d.url || d.discussionUrl),
    ...ecosystemData.standards.map(s => s.url),
    ...ecosystemData.packages.map(p => p.url),
  ].filter(Boolean);

  return {
    id: feature.id,
    name: feature.name,
    milestone: feature.milestone,
    status: feature.category,
    lastSeen: new Date().toISOString(),
    knownUrls: Array.from(new Set(currentUrls)),
    lastMomentumLevel: analysis.momentumLevel,
    lastConsensus: analysis.consensus,
  };
}
