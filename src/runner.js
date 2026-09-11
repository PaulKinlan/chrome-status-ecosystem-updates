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
import { logger } from './logger.js';
import { mapWithConcurrency } from './http.js';

import { getActiveSearchProviders } from './search/web.js';

export async function runEcosystemReport(options = {}) {
  logger.setVerbose(options.verbose);
  const targetInput = options.milestone || config.targetMilestones;
  const maxFeatures = options.limit !== undefined ? options.limit : config.maxFeatures;
  const allowedStatuses = options.statusTypes || config.featureStatuses;
  // Features are independent, so overlapping them turns an hours-long serial
  // crawl into something that fits inside a CI job. Kept low so the fan-out
  // does not trip rate limits on GitHub, Bugzilla or the LLM provider.
  const concurrency = options.concurrency || config.concurrency;

  logger.header('ChromeStatus Ecosystem Updates Crawler');

  logger.info('Resolving Chrome release milestones...');
  const milestones = await resolveTargetMilestones(targetInput);
  logger.info(`Target milestones: Chrome ${milestones.join(', ')}`);

  const activeProviders = getActiveSearchProviders();
  const searchEngineDisplay = activeProviders.length > 0
    ? activeProviders.map(p => p === 'gemini' ? 'Gemini (Google Grounded)' : p.toUpperCase()).join(' + ')
    : config.searchProvider;

  logger.info(`Ecosystem Engines & Configuration:`);
  logger.info(`  • Brave Search: ${config.braveSearchApiKey ? '✔ Enabled (BRAVE_SEARCH_API_KEY detected)' : '○ Disabled (BRAVE_SEARCH_API_KEY not configured)'}`);
  logger.info(`  • Gemini Search Grounding: ${config.geminiApiKey ? `✔ Enabled (${config.geminiModel})` : '○ Disabled (GEMINI_API_KEY not configured)'}`);
  logger.info(`  • Twitter / X API v2: ${config.twitterBearerToken ? '✔ Enabled (TWITTER_BEARER_TOKEN detected)' : '○ Disabled (TWITTER_BEARER_TOKEN not configured)'}`);
  logger.info(`  • GitHub API: ${config.githubToken ? '✔ Authenticated (5,000 req/hr)' : '○ Public access (60 req/hr)'}`);

  logger.info('Loading historical snapshot for delta computation...');
  const history = await loadHistory();
  const updatedHistoryFeatures = { ...(history.features || {}) };

  const rawFeatureList = [];

  for (const ms of milestones) {
    logger.info(`Fetching features for Chrome ${ms} from chromestatus.com...`);
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
      logger.info(`Fetching single feature #${options.featureId} directly...`);
      const directRaw = await fetchFeatureDetails(options.featureId);
      const normalized = normalizeFeature(directRaw, directRaw.milestone || milestones[0], directRaw.category);
      targetEntries.push({ raw: directRaw, milestone: normalized.milestone, categoryLabel: normalized.category, normalized });
    }
  }

  // Apply limit if set
  if (maxFeatures && maxFeatures > 0) {
    targetEntries = targetEntries.slice(0, maxFeatures);
  }

  logger.info(`Starting investigation on ${targetEntries.length} Web Platform features (concurrency: ${concurrency})...\n`);

  const processedFeatures = [];
  const failures = [];
  let completed = 0;

  /**
   * Investigates a single feature.
   *
   * Every throw is contained here. Previously an error anywhere in this body
   * propagated out of the loop and aborted the entire run: no reports written,
   * no history saved, and in CI the deploy skipped too - discarding potentially
   * an hour of crawling and hundreds of LLM calls because of one bad feature.
   */
  async function investigate(entry) {
    const f = entry.normalized;
    const position = ++completed;
    logger.step(position, targetEntries.length, f.name, f.id, `Chrome ${f.milestone}, ${f.category}`);

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

    // 2. Run analysis (heuristic + optional AI synthesis with search grounding)
    logger.substep('Analysis & Synthesis', config.geminiApiKey ? `${config.geminiModel} with Google Search Grounding` : 'Heuristic Engine');
    const analysis = await analyzeFeature(detailedFeature, ecosystemData);

    logger.debug(`Momentum: ${analysis.momentumLevel} (score: ${analysis.momentumScore}) | Consensus: ${analysis.consensus} | Sentiment: ${analysis.sentiment}`);
    if (analysis.groundedQueries && analysis.groundedQueries.length > 0) {
      logger.debug(`Live Search Queries: ${analysis.groundedQueries.map(q => '"' + q + '"').join(', ')}`);
    }

    // 3. Compute week-over-week deltas
    const prevHistory = history.features?.[detailedFeature.id];
    const delta = computeFeatureDelta(detailedFeature, ecosystemData, prevHistory, analysis);

    // 4. Update history record
    updatedHistoryFeatures[detailedFeature.id] = buildFeatureHistoryEntry(
      detailedFeature,
      ecosystemData,
      analysis
    );

    return { feature: detailedFeature, ecosystem: ecosystemData, analysis, delta };
  }

  const settled = await mapWithConcurrency(targetEntries, concurrency, investigate);

  for (let i = 0; i < settled.length; i++) {
    const outcome = settled[i];
    if (outcome.value) {
      processedFeatures.push(outcome.value);
    } else if (outcome.error) {
      const f = targetEntries[i].normalized;
      logger.warn(`Skipped "${f.name}" (#${f.id}): ${outcome.error.message}`);
      failures.push({ id: f.id, name: f.name, milestone: f.milestone, error: outcome.error.message });
    }
  }

  if (failures.length > 0) {
    logger.warn(`${failures.length} of ${targetEntries.length} feature(s) failed and were omitted from this report.`);
  }

  if (processedFeatures.length === 0 && targetEntries.length > 0) {
    throw new Error(
      `All ${targetEntries.length} features failed to process; refusing to overwrite reports with an empty run. ` +
      `First error: ${failures[0]?.error || 'unknown'}`
    );
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
    telemetry: {
      searchProviders: activeProviders,
      searchProvider: searchEngineDisplay,
      aiProvider: config.geminiApiKey ? `Google Gemini (${config.geminiModel})` : config.openaiApiKey ? 'OpenAI gpt-4o-mini' : 'Heuristic Engine',
      isGeminiSearchGrounded: !!config.geminiApiKey,
      hasGithubToken: !!config.githubToken,
      concurrency,
      featuresCount: processedFeatures.length,
      // A partial run must be visible in the output. Without these, a week in
      // which a third of the features failed looks exactly like a clean week.
      featuresAttempted: processedFeatures.length + failures.length,
      featuresFailed: failures.length,
      failures: failures.map(fail => ({ id: fail.id, name: fail.name, error: fail.error })),
    },

    features: processedFeatures,
  };

  logger.info('\nGenerating reports (Markdown, HTML dashboard, JSON, RSS)...');
  const mdResult = await writeMarkdownReports(reportData);
  const htmlPath = await writeDashboardHtml(reportData);
  const jsonResult = await writeJsonReports(reportData);
  const rssPath = await writeRssFeed(reportData);

  logger.info('Saving updated ecosystem history snapshot...');
  await saveHistory({
    lastRun: new Date().toISOString(),
    lastWeekString: weekString,
    telemetry: reportData.telemetry,
    features: updatedHistoryFeatures,
  });

  logger.success('Ecosystem crawl and report generation completed!');
  console.log(`\n  📄 Weekly Markdown: ${mdResult.weeklyFilePath}`);
  console.log(`  🌐 HTML Dashboard:  ${htmlPath}`);
  console.log(`  📊 JSON Export:     ${jsonResult.weeklyPath}`);
  console.log(`  📡 RSS Feed:        ${rssPath}\n`);

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
