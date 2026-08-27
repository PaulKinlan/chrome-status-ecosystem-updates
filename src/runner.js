import { config } from './config.js';
import {
  resolveTargetMilestones,
  fetchMilestoneFeatures,
  fetchFeatureDetails,
  normalizeFeature,
} from './chromestatus.js';
import { gatherEcosystemData } from './search/index.js';
import { analyzeFeature } from './analyzer/index.js';
import {
  loadHistory,
  saveHistory,
  computeFeatureDelta,
  buildFeatureHistoryEntry,
} from './storage/cache.js';
import { writeMarkdownReports, getIsoWeekString } from './reporters/markdown.js';
import { writeDashboardHtml } from './reporters/html.js';
import { writeJsonReports } from './reporters/json.js';
import { writeRssFeed } from './reporters/rss.js';

export async function runEcosystemReport(options = {}) {
  const log = options.onProgress || console.log;
  const targetInput = options.milestone || config.targetMilestones;
  const maxFeatures = options.limit !== undefined ? options.limit : config.maxFeatures;
  const allowedStatuses = options.statusTypes || config.featureStatuses;

  log('🎯 Resolving Chrome release milestones...');
  const milestones = await resolveTargetMilestones(targetInput);
  log(`📌 Target milestones: Chrome ${milestones.join(', ')}`);

  log('📂 Loading historical snapshot...');
  const history = await loadHistory();
  const updatedHistoryFeatures = { ...(history.features || {}) };

  const rawFeatureList = [];

  for (const ms of milestones) {
    log(`🌐 Fetching features for Chrome ${ms}...`);
    const featuresByType = await fetchMilestoneFeatures(ms);

    for (const [categoryLabel, items] of Object.entries(featuresByType)) {
      if (!Array.isArray(items)) continue;
      for (const item of items) {
        const normalized = normalizeFeature(item, ms, categoryLabel);
        if (allowedStatuses.length === 0 || allowedStatuses.includes(normalized.statusType)) {
          rawFeatureList.push({
            raw: item,
            milestone: ms,
            categoryLabel,
            normalized,
          });
        }
      }
    }
  }

  // Deduplicate by feature id
  const uniqueFeaturesMap = new Map();
  for (const entry of rawFeatureList) {
    if (!uniqueFeaturesMap.has(entry.normalized.id)) {
      uniqueFeaturesMap.set(entry.normalized.id, entry);
    }
  }

  let targetEntries = Array.from(uniqueFeaturesMap.values());

  // If specific feature ID requested
  if (options.featureId) {
    targetEntries = targetEntries.filter(e => String(e.normalized.id) === String(options.featureId));
    if (targetEntries.length === 0) {
      log(`🔎 Fetching single feature #${options.featureId} directly...`);
      const directRaw = await fetchFeatureDetails(options.featureId);
      const normalized = normalizeFeature(directRaw, directRaw.milestone || milestones[0], directRaw.category);
      targetEntries.push({ raw: directRaw, milestone: normalized.milestone, categoryLabel: normalized.category, normalized });
    }
  }

  // Apply limit if set
  if (maxFeatures && maxFeatures > 0) {
    targetEntries = targetEntries.slice(0, maxFeatures);
  }

  log(`📊 Processing ${targetEntries.length} features across ecosystem sources...`);

  const processedFeatures = [];
  let index = 0;

  for (const entry of targetEntries) {
    index++;
    const f = entry.normalized;
    log(`[${index}/${targetEntries.length}] 🔎 Investigating: "${f.name}" (ID: ${f.id})...`);

    // Fetch deep details if not already complete
    let detailedFeature = f;
    try {
      const fullDetails = await fetchFeatureDetails(f.id);
      detailedFeature = normalizeFeature(fullDetails, f.milestone, f.category);
    } catch {
      // Use existing normalized feature if detail fetch fails
    }

    // 1. Gather ecosystem data (HN, standards positions, npm, wpt, web search)
    const ecosystemData = await gatherEcosystemData(detailedFeature);

    // 2. Run analysis (heuristic + optional AI synthesis)
    const analysis = await analyzeFeature(detailedFeature, ecosystemData);

    // 3. Compute week-over-week deltas
    const prevHistory = history.features?.[detailedFeature.id];
    const delta = computeFeatureDelta(detailedFeature, ecosystemData, prevHistory);

    // 4. Update history record
    updatedHistoryFeatures[detailedFeature.id] = buildFeatureHistoryEntry(
      detailedFeature,
      ecosystemData,
      analysis
    );

    processedFeatures.push({
      feature: detailedFeature,
      ecosystem: ecosystemData,
      analysis,
      delta,
    });
  }

  // Sort: High momentum first, then enabled, then by name
  processedFeatures.sort((a, b) => {
    if (b.analysis.momentumScore !== a.analysis.momentumScore) {
      return b.analysis.momentumScore - a.analysis.momentumScore;
    }
    return a.feature.name.localeCompare(b.feature.name);
  });

  const weekString = getIsoWeekString(new Date());
  const reportData = {
    weekString,
    date: new Date().toISOString().split('T')[0],
    generatedAt: new Date().toISOString(),
    milestones,
    featuresCount: processedFeatures.length,
    features: processedFeatures,
  };

  log('📝 Generating reports...');
  const mdResult = await writeMarkdownReports(reportData);
  const htmlPath = await writeDashboardHtml(reportData);
  const jsonResult = await writeJsonReports(reportData);
  const rssPath = await writeRssFeed(reportData);

  log('💾 Saving updated ecosystem history...');
  await saveHistory({
    lastRun: new Date().toISOString(),
    lastWeekString: weekString,
    features: updatedHistoryFeatures,
  });

  log(`\n🎉 Report generation complete!`);
  log(`📄 Weekly Markdown: ${mdResult.weeklyFilePath}`);
  log(`🌐 HTML Dashboard:  ${htmlPath}`);
  log(`📊 JSON Export:     ${jsonResult.weeklyPath}`);
  log(`📡 RSS Feed:        ${rssPath}\n`);

  return {
    reportData,
    outputs: {
      markdown: mdResult.weeklyFilePath,
      html: htmlPath,
      json: jsonResult.weeklyPath,
      rss: rssPath,
    },
  };
}
