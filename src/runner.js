import { config, TWITTER_TOKEN_VARIABLES } from './config.js';
import {
  resolveTargetMilestones,
  fetchMilestoneFeatures,
  fetchFeatureDetails,
  normalizeFeature,
  chooseListings,
} from './chromestatus.js';
import { gatherEcosystemData } from './search/index.js';
import { analyzeFeature } from './analyzer/index.js';
import {
  HISTORY_SCHEMA_VERSION,
  loadHistory,
  saveHistory,
  computeFeatureDelta,
  buildFeatureHistoryEntry,
} from './storage/cache.js';
import { assignMomentum, compareByMomentum, pointsOf, summariseMomentum } from './momentum.js';
import { isoDay, seenOf, withoutStaleFeatures } from './storage/seen.js';
import { writeMarkdownReports, getIsoWeekString } from './reporters/markdown.js';
import { writeDashboardHtml } from './reporters/html.js';
import { writeJsonReports, readPublishedSummary } from './reporters/json.js';
import { writeRssFeed } from './reporters/rss.js';
import { logger } from './logger.js';
import { mapWithConcurrency } from './http.js';
import { assessUpstreamCount, assessFailureRatio, assessAiCoverage } from './quality.js';
import { createCrawlBudget, describeCrawl, stalestFirst } from './crawl-budget.js';
import { resetLlmStats, llmStatsSnapshot, describeLlmStats } from './llm-stats.js';
import { resetProviderStats, snapshotProviderStats, describeProviderStats } from './provider-stats.js';
import { assessGuardrails } from './guardrails.js';
import { normaliseReport } from './report-schema.js';
import {
  resetGroundingStats,
  groundingStatsSnapshot,
  describeGroundingStats,
  warnIfNothingResolved,
} from './grounding-stats.js';
import {
  resetWebFeatureStats,
  webFeatureStatsSnapshot,
  describeWebFeatureStats,
  warnIfMappingsUnavailable,
} from './web-features-stats.js';
import { resetWebFeatures } from './search/web-features.js';
import { resetWebStatus } from './search/webstatus.js';
import { resetModelHealth } from './search/gemini-models.js';
import { annotate } from './github-actions.js';

import { getActiveSearchProviders } from './search/web.js';
import { OPENAI_MODEL } from './search/openai.js';

/**
 * What `investigate` hands back for a feature it did not start because the crawl's deadline had passed. A feature
 * that was not started did not fail, so it is neither an error nor a result; a symbol cannot be mistaken for either.
 */
const NOT_REACHED = Symbol('not reached');

/**
 * Applies a quality verdict. A failed one stops the run before anything is
 * written; with --force it is logged and recorded (in `overrides`, which ends
 * up in the report telemetry) so a published report always shows that a safety
 * check was bypassed.
 */
function enforceQuality(verdict, { force, overrides }) {
  if (verdict.ok) return;
  if (!force) {
    const alternative = verdict.alternative ? `, or ${verdict.alternative}` : '';
    throw new Error(`${verdict.problem} Refusing to publish: nothing was written and the published reports are untouched. Re-run with --force if this is expected${alternative}.`);
  }
  logger.warn(`${verdict.problem} Publishing anyway because --force was given.`);
  // A forced publish is exactly what someone reading the run page needs to be told about.
  annotate('warning', 'Safety check overridden', verdict.problem);
  overrides.push(verdict.problem);
}

/**
 * Puts the run's LLM outcomes where a person will see them: the log, a CI
 * annotation and (through the returned values) the report telemetry.
 *
 * A feature without AI synthesis falls back to the heuristic engine without
 * raising anything, so a run in which a model was overloaded, retired or out of
 * quota looks exactly like a healthy one unless something says otherwise. This
 * is that something. It never throws and never blocks publication - a report
 * without the prose is still a useful report, it just must not pass for a
 * complete one.
 */
function summariseLlmHealth(processedFeatures) {
  const llm = llmStatsSnapshot();
  for (const line of describeLlmStats(llm)) logger.warn(`[LLM summary] ${line}`);

  const total = processedFeatures.length;
  const withAi = processedFeatures.filter(item => item.analysis?.isAiEnhanced).length;
  const aiCoverage = {
    configured: Boolean(config.geminiApiKey || config.openaiApiKey),
    withAi,
    total,
    ratio: total > 0 ? Math.round((withAi / total) * 1000) / 1000 : 0,
  };

  if (aiCoverage.configured) {
    logger.info(
      `AI synthesis reached ${withAi} of ${total} features (${Math.round(aiCoverage.ratio * 100)}%); ` +
      `${llm.ok} of ${llm.attempts} LLM attempts succeeded.`
    );
  }

  const verdict = assessAiCoverage(aiCoverage);
  if (!verdict.ok) {
    logger.warn(verdict.problem);
    // On GitHub Actions this becomes a yellow annotation on the run's summary page rather than one line in a long log.
    annotate('warning', 'Low AI synthesis coverage', verdict.problem);
  }

  return { llm, aiCoverage };
}

/**
 * Puts what became of the sources Gemini's search grounding cited where a person
 * will see it: the log, a CI annotation when none of its links could be followed,
 * and (through the returned snapshot) the report telemetry.
 *
 * Links that cannot be followed are dropped, which on its own would look like a
 * quiet week. Like the LLM summary it never throws and never blocks publication.
 */
function summariseGroundingHealth() {
  const grounding = groundingStatsSnapshot();
  for (const line of describeGroundingStats(grounding)) logger.info(`[Grounding summary] ${line}`);

  const problem = warnIfNothingResolved(grounding);
  if (problem) annotate('warning', 'Gemini grounding links could not be followed', problem);

  return grounding;
}

/**
 * Puts what became of the web-features mapping where a person will see it: the log, a CI annotation
 * when it could not be loaded at all, and (through the returned snapshot) the report telemetry.
 *
 * Baseline, test pass rates, vendor positions and usage all hang on that mapping, so without it every
 * feature loses them at once and the week looks like one in which nothing is tracked. Like the two
 * summaries above it never throws and never blocks publication.
 */
function summariseWebFeatureHealth() {
  const webFeatures = webFeatureStatsSnapshot();
  for (const line of describeWebFeatureStats(webFeatures)) logger.info(`[Web-features summary] ${line}`);

  const problem = warnIfMappingsUnavailable(webFeatures);
  if (problem) annotate('warning', 'web-features mapping could not be loaded', problem);

  return webFeatures;
}

/**
 * Puts how the search and enrichment APIs answered where a person will see it: the log and (through the returned
 * snapshot) the report telemetry.
 *
 * Each of those APIs degrades to "no results" when it refuses a request, so one that rejects most of what it is sent
 * fails nothing. Like the summaries above this never throws, and it comes before the checks that may refuse the run,
 * because that is when the counts are most useful.
 */
function summariseProviderHealth() {
  const providers = snapshotProviderStats();
  for (const line of describeProviderStats(providers)) logger.info(`[Provider summary] ${line}`);
  return providers;
}

/**
 * Measures the report that is about to be written against the limits in src/guardrails.js and says what is past one:
 * a warning in the log, a CI annotation for each, and (through the returned assessment) the report telemetry.
 *
 * These are the signs of a crawl that succeeded and still produced a worse report than it looks, which a failure
 * count cannot show. They never stop the run, and neither does a failure to make a check: that is one more warning.
 * The size of the JSON file is measured before this assessment is added to the report.
 */
function summariseGuardrails({ features, providers, reportData, today, limits }) {
  let assessment;
  try {
    const latestJsonBytes = Buffer.byteLength(JSON.stringify(normaliseReport(reportData)));
    assessment = assessGuardrails({ features, providers, latestJsonBytes, today, limits });
  } catch (error) {
    assessment = { checks: [], warnings: [`The report guardrails could not be checked: ${error.message}`] };
  }

  for (const warning of assessment.warnings) {
    logger.warn(warning);
    annotate('warning', 'Report guardrail', warning);
  }
  return assessment;
}

/**
 * Puts a crawl that stopped at its deadline where a person will see it: the log, a CI annotation and (through the
 * crawl telemetry) the report. Like the summaries above it never throws; whether so partial a report may be
 * published is for the failure-ratio check to say.
 */
function summariseCrawl(crawl) {
  const partial = describeCrawl(crawl);
  if (!partial) return;
  logger.warn(partial.detail);
  annotate('warning', 'Crawl stopped at its deadline', partial.detail);
}

export async function runEcosystemReport(options = {}) {
  logger.setVerbose(options.verbose);
  // The deadline is measured from here: the whole run counts towards the CI step's time limit, not just the
  // features. (`deadlineMinutes` and `now` are for tests; the command line has no switch for the deadline.)
  const budget = createCrawlBudget({ minutes: options.deadlineMinutes ?? config.crawlDeadlineMinutes, now: options.now });
  // Counters and model health describe one run; a second run in the same process starts clean.
  resetLlmStats();
  resetGroundingStats();
  resetProviderStats();
  resetModelHealth();
  // The mapping is downloaded once per run, and what webstatus.dev answered about a group is kept for it.
  resetWebFeatureStats();
  resetWebFeatures();
  resetWebStatus();
  const targetInput = options.milestone || config.targetMilestones;
  const maxFeatures = options.limit !== undefined ? options.limit : config.maxFeatures;
  const allowedStatuses = options.statusTypes || config.featureStatuses;
  // Features are independent, so overlapping them turns an hours-long serial
  // crawl into something that fits inside a CI job. Kept low so the fan-out
  // does not trip rate limits on GitHub, Bugzilla or the LLM provider.
  const concurrency = options.concurrency || config.concurrency;
  // Escape hatch for the pre-publication safety checks (see src/quality.js).
  const force = options.force === true;
  const qualityOverrides = [];

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
  logger.info(`  • Twitter / X API v2: ${config.twitterBearerToken ? `✔ Enabled (${TWITTER_TOKEN_VARIABLES} detected)` : `○ Disabled (${TWITTER_TOKEN_VARIABLES} not configured)`}`);
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

  // One entry per feature - its most advanced listing - newest milestone first.
  let targetEntries = chooseListings(rawFeatureList);

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

  // Sanity-check what ChromeStatus returned BEFORE the limit trims it (a cap
  // says how much to crawl, not whether the upstream is healthy) and before an
  // hour of crawling. An empty or collapsed response must not replace a good
  // published report. A single-feature run is deliberately tiny, so it is exempt.
  if (!options.featureId) {
    enforceQuality(
      assessUpstreamCount({
        count: targetEntries.length,
        milestones,
        statusTypes: allowedStatuses,
        published: await readPublishedSummary(),
      }),
      { force, overrides: qualityOverrides }
    );

    // A milestone that comes back empty while its neighbours do not is the
    // signature of a partial response that the totals alone can hide. Judged on
    // what each response held, not on what survived de-duplication: a milestone
    // whose features are all listed under an earlier one is not an empty response.
    for (const ms of milestones) {
      if (rawFeatureList.length > 0 && !rawFeatureList.some(e => e.milestone === ms)) {
        logger.warn(`ChromeStatus returned no matching features for Chrome ${ms} although other milestones had some; the response may be partial.`);
      }
    }
  }

  // What ChromeStatus listed, before any cap: the baseline the next run's check compares against.
  const featuresAvailable = targetEntries.length;

  // Apply limit if set. The entries are already ordered (see chooseListings), so
  // a cap keeps the newest, most advanced features.
  if (maxFeatures && maxFeatures > 0) {
    targetEntries = targetEntries.slice(0, maxFeatures);
  }

  logger.info(`Starting investigation on ${targetEntries.length} Web Platform features (concurrency: ${concurrency})...\n`);

  // With a deadline, the features looked at the longest ago go first, and those never seen before all of them, so
  // what a deadline cut off last time is what is crawled first this time. Without one every feature is crawled and
  // the order only shows in the log.
  const queue = budget.minutes > 0
    ? stalestFirst(targetEntries, entry => history.features?.[entry.normalized.id]?.lastSeen)
    : targetEntries;

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
    // The deadline is read here, where a feature would start, and nowhere else: a feature that is under way is
    // allowed to finish (the step timeout is what ends a crawl that is stuck) and none is abandoned half way.
    if (budget.passed()) return NOT_REACHED;

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
    // The earliest milestone of the window the feature is listed under (the same
    // as `milestone` for a feature with one listing, or fetched directly).
    detailedFeature = { ...detailedFeature, firstListedMilestone: entry.firstListedMilestone ?? detailedFeature.milestone };

    // 1. Gather ecosystem data (HN, standards positions, npm, wpt, web search)
    const ecosystemData = await gatherEcosystemData(detailedFeature);

    // 2. Run analysis (heuristic + optional AI synthesis with search grounding)
    logger.substep('Analysis & Synthesis', config.geminiApiKey ? `${config.geminiModel} with Google Search Grounding` : 'Heuristic Engine');
    const analysis = await analyzeFeature(detailedFeature, ecosystemData);

    logger.debug(`Footprint: ${analysis.momentumScore} points | Consensus: ${analysis.consensus} | Sentiment: ${analysis.sentiment}`);
    if (analysis.groundedQueries && analysis.groundedQueries.length > 0) {
      logger.debug(`Live Search Queries: ${analysis.groundedQueries.map(q => '"' + q + '"').join(', ')}`);
    }

    // The week-over-week delta and the history record wait until every feature is done: momentum is a tier relative
    // to the other features, and both read it (see below).
    return { feature: detailedFeature, ecosystem: ecosystemData, analysis, delta: null };
  }

  const settled = await mapWithConcurrency(queue, concurrency, investigate);

  // The features the deadline kept from starting. They are left out of the report, and their history entries are
  // left as they were, so the next run compares them with the last time they were looked at.
  const notReached = [];

  for (let i = 0; i < settled.length; i++) {
    const outcome = settled[i];
    if (outcome.value === NOT_REACHED) {
      const f = queue[i].normalized;
      notReached.push({ id: f.id, name: f.name });
    } else if (outcome.value) {
      processedFeatures.push(outcome.value);
    } else {
      // Anything else is a failure, whatever was thrown: a feature must not vanish from the report without a trace.
      const f = queue[i].normalized;
      const message = outcome.error?.message || String(outcome.error);
      logger.warn(`Skipped "${f.name}" (#${f.id}): ${message}`);
      failures.push({ id: f.id, name: f.name, milestone: f.milestone, error: message });
    }
  }

  // What the crawl stage took, measured when the last feature under way was done.
  const crawl = {
    deadlineMinutes: budget.minutes,
    elapsedMinutes: Math.round(budget.elapsedMinutes() * 10) / 10,
    reached: queue.length - notReached.length,
    notReached,
  };

  const finishedAt = new Date();
  const today = isoDay(finishedAt);
  const weekString = getIsoWeekString(finishedAt);

  // A history entry that cannot be read fails its feature, as it did when this was done feature by feature. It does so
  // before the tiers are worked out, so that they are ranked among the features that are published, and what the
  // report says about them (how many have an earlier number, out of how many) is about those features.
  for (const item of processedFeatures.splice(0)) {
    const { feature } = item;
    try {
      seenOf(history.features?.[feature.id], today);
      processedFeatures.push(item);
    } catch (error) {
      logger.warn(`Skipped "${feature.name}" (#${feature.id}): ${error.message}`);
      failures.push({ id: feature.id, name: feature.name, milestone: feature.milestone, error: error.message });
    }
  }

  // Momentum is a change in the footprint, in tiers across this run's features, so it can only be worked out now that
  // all of them have been investigated. Then each feature's delta (which says whether its tier moved) and its history
  // record (which keeps the tier and this week's numbers) follow.
  const momentumBasis = assignMomentum(
    processedFeatures.map(item => ({ analysis: item.analysis, points: pointsOf(history.features?.[item.feature.id]) })),
    today
  );
  for (const item of processedFeatures) {
    const { feature, ecosystem, analysis } = item;
    const previous = history.features?.[feature.id];
    item.delta = computeFeatureDelta(feature, ecosystem, previous, analysis, today);
    updatedHistoryFeatures[feature.id] = buildFeatureHistoryEntry(feature, ecosystem, analysis, { previous, now: finishedAt, today, week: weekString });
  }

  if (failures.length > 0) {
    logger.warn(`${failures.length} of ${targetEntries.length} feature(s) failed and were omitted from this report.`);
  }

  // Before the checks below, which may refuse the run: if the LLM was the reason
  // so much went wrong, that is the first thing the log should say.
  const { llm, aiCoverage } = summariseLlmHealth(processedFeatures);
  const grounding = summariseGroundingHealth();
  const webFeatures = summariseWebFeatureHealth();
  const providers = summariseProviderHealth();
  summariseCrawl(crawl);

  if (processedFeatures.length === 0 && targetEntries.length > 0) {
    // Nothing to publish, with or without --force. A crawl that had no time left says so instead of blaming the features.
    const reason = notReached.length === 0
      ? `All ${targetEntries.length} features failed to process`
      : failures.length === 0
        ? `The crawl deadline of ${budget.minutes} minutes had passed before the first of ${targetEntries.length} feature(s) was started`
        : `All ${failures.length} features that were started failed to process, and ${notReached.length} were not reached before the crawl deadline`;
    throw new Error(
      `${reason}; refusing to overwrite reports with an empty run.` +
      (failures.length > 0 ? ` First error: ${failures[0].error || 'unknown'}` : '')
    );
  }

  enforceQuality(
    assessFailureRatio({
      attempted: processedFeatures.length + failures.length,
      failed: failures.length,
      notReached: notReached.length,
    }),
    { force, overrides: qualityOverrides }
  );

  // Sort: the highest momentum tier first, then the larger growth, then the larger footprint, then by name
  processedFeatures.sort(compareByMomentum);

  const reportData = {
    weekString,
    date: today,
    generatedAt: finishedAt.toISOString(),
    milestones,
    featuresCount: processedFeatures.length,
    telemetry: {
      searchProviders: activeProviders,
      searchProvider: searchEngineDisplay,
      aiProvider: config.geminiApiKey ? `Google Gemini (${config.geminiModel})` : config.openaiApiKey ? `OpenAI ${OPENAI_MODEL}` : 'Heuristic Engine',
      isGeminiSearchGrounded: !!config.geminiApiKey,
      hasGithubToken: !!config.githubToken,
      concurrency,
      statusTypes: allowedStatuses,
      // Safety checks that --force bypassed for this report; empty when none.
      qualityOverrides,
      // How many LLM calls each stage and model made and how they ended, and how
      // many features ended up with AI synthesis (see src/llm-stats.js).
      llm,
      aiCoverage,
      // What became of the sources Gemini's search grounding cited: how many links
      // were followed to the real page, why the rest were dropped, and how many of
      // the cited pages passed the relevance check (see src/grounding-stats.js).
      grounding,
      // Whether the web-features mapping that Baseline, test pass rates, positions and usage are read
      // through could be loaded, and how many features it placed in a group (see src/web-features-stats.js).
      webFeatures,
      // What this week's momentum tiers are based on (the change in footprint since about four weeks ago, or a
      // ranking of the footprint until there are earlier numbers) and how they came out (see src/momentum.js).
      momentum: summariseMomentum(processedFeatures.map(item => item.analysis), momentumBasis),
      featuresCount: processedFeatures.length,
      // How many features ChromeStatus listed for the window before any cap or
      // failure; what the next run's safety check compares itself with.
      featuresAvailable,
      // A partial run must be visible in the output. Without these, a week in
      // which a third of the features failed looks exactly like a clean week.
      featuresAttempted: processedFeatures.length + failures.length,
      featuresFailed: failures.length,
      failures: failures.map(fail => ({ id: fail.id, name: fail.name, error: fail.error })),
      // True when the crawl's deadline passed before every feature had been started: the report holds the features
      // reached and `crawl.notReached` names the rest (see src/crawl-budget.js).
      partial: notReached.length > 0,
      crawl,
    },

    features: processedFeatures,
  };

  // How the providers answered and whether the report is as good as it looks. Added last: the size check measures
  // the report without them. (`guardrailLimits` is for tests.)
  const guardrails = summariseGuardrails({ features: processedFeatures, providers, reportData, today, limits: options.guardrailLimits });
  reportData.telemetry.providers = providers;
  reportData.telemetry.guardrails = guardrails;

  logger.info('\nGenerating reports (Markdown, HTML dashboard, JSON, RSS)...');
  const mdResult = await writeMarkdownReports(reportData);
  const htmlPath = await writeDashboardHtml(reportData);
  const jsonResult = await writeJsonReports(reportData);
  const rssPath = await writeRssFeed(reportData);

  logger.info('Saving updated ecosystem history snapshot...');
  await saveHistory({
    schemaVersion: HISTORY_SCHEMA_VERSION,
    lastRun: finishedAt.toISOString(),
    lastWeekString: weekString,
    telemetry: reportData.telemetry,
    // A feature that has not been tracked for a year is dropped (see src/storage/seen.js).
    features: withoutStaleFeatures(updatedHistoryFeatures, today),
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
