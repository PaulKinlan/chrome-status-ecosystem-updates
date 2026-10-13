import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config.js';
import { normaliseReport } from '../report-schema.js';
import { writeFileAtomic } from '../storage/atomic.js';

/**
 * Writes the report as `schemaVersion` 2 JSON (see src/report-schema.js), to this week's archive and to
 * `latest.json`. It is compact: indentation was a fifth of an 11 MB file, and `jq .` puts it back.
 */
export async function writeJsonReports(reportData) {
  const { weekString } = reportData;
  const weeklyDir = path.join(config.reportsDir, 'weekly');
  await fs.mkdir(weeklyDir, { recursive: true });

  const jsonStr = JSON.stringify(normaliseReport(reportData));

  // 1. Weekly snapshot JSON
  const weeklyPath = path.join(weeklyDir, `${weekString}.json`);
  await writeFileAtomic(weeklyPath, jsonStr);

  // 2. Latest pointer JSON
  const latestPath = path.join(config.reportsDir, 'latest.json');
  await writeFileAtomic(latestPath, jsonStr);

  return { weeklyPath, latestPath };
}

/**
 * Summarises the report that is currently published (`latest.json`) so a new
 * run can be sanity-checked against it before it overwrites anything.
 *
 * Returns null when there is nothing usable to compare against (first run,
 * missing, unreadable, or not a report); that is never an error here.
 */
export async function readPublishedSummary() {
  try {
    const published = JSON.parse(await fs.readFile(path.join(config.reportsDir, 'latest.json'), 'utf-8'));
    const featuresCount = Number.isFinite(published?.featuresCount)
      ? published.featuresCount
      : Array.isArray(published?.features) ? published.features.length : null;
    if (featuresCount === null) return null;
    return {
      featuresCount,
      // What ChromeStatus listed for the window, before any feature cap; absent from older reports.
      upstreamCount: Number.isFinite(published.telemetry?.featuresAvailable) ? published.telemetry.featuresAvailable : null,
      milestones: Array.isArray(published.milestones) ? published.milestones : [],
      // Reports written before this field existed carry no filter information.
      statusTypes: Array.isArray(published.telemetry?.statusTypes) ? published.telemetry.statusTypes : null,
      weekString: published.weekString || null,
    };
  } catch {
    return null;
  }
}
