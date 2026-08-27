import { searchHackerNews } from './hackernews.js';
import { searchStandardsPositions } from './standards.js';
import { searchEngineBugzillas } from './bugzilla.js';
import { searchBaseline } from './baseline.js';
import { searchMdn } from './mdn.js';
import { searchTwitter } from './twitter.js';
import { searchNpmEcosystem } from './npm.js';
import { searchWpt } from './wpt.js';
import { searchWeb, extractDomain, cleanUrl, getActiveSearchProviders } from './web.js';
import { fetchExplainerSummary, fetchArticleExcerpt } from './content-fetcher.js';
import { filterRelevantItems } from './verifier.js';
import { logger } from '../logger.js';
import { config } from '../config.js';

/**
 * Searches the web and developer ecosystem for activity around an API/feature,
 * deeply inspecting linked resources across standards, bug trackers, tests,
 * documentation, and community channels.
 */
export async function gatherEcosystemData(feature) {
  const seenUrls = new Set();
  const candidateArticles = [];
  const resources = [];

  // Register ChromeStatus official link URLs
  if (feature.specUrl) {
    seenUrls.add(cleanUrl(feature.specUrl));
    resources.push({
      source: 'W3C / WHATWG Spec',
      type: 'spec',
      title: `${feature.name} Specification`,
      url: feature.specUrl,
      domain: extractDomain(feature.specUrl),
    });
  }

  // Inspect Explainer links
  for (const explainerUrl of feature.explainerUrls || []) {
    const cleaned = cleanUrl(explainerUrl);
    if (!seenUrls.has(cleaned)) {
      seenUrls.add(cleaned);
      const summary = await fetchExplainerSummary(explainerUrl);
      resources.push({
        source: 'Feature Explainer',
        type: 'explainer',
        title: `${feature.name} Explainer`,
        url: explainerUrl,
        domain: extractDomain(explainerUrl),
        snippet: summary,
      });
    }
  }

  for (const docUrl of feature.docUrls || []) {
    const cleaned = cleanUrl(docUrl);
    if (!seenUrls.has(cleaned)) {
      seenUrls.add(cleaned);
      resources.push({
        source: 'Chrome Platform Docs',
        type: 'documentation',
        title: `${feature.name} Documentation`,
        url: docUrl,
        domain: extractDomain(docUrl),
      });
    }
  }

  for (const sampleUrl of feature.sampleUrls || []) {
    const cleaned = cleanUrl(sampleUrl);
    if (!seenUrls.has(cleaned)) {
      seenUrls.add(cleaned);
      resources.push({
        source: 'Demo / Sample',
        type: 'demo',
        title: `${feature.name} Demo`,
        url: sampleUrl,
        domain: extractDomain(sampleUrl),
      });
    }
  }

  logger.substep('Inspecting ChromeStatus links', `Spec: ${feature.specUrl ? '✔' : '○'} | Explainers: ${(feature.explainerUrls || []).length} | Docs: ${(feature.docUrls || []).length} | Demos: ${(feature.sampleUrls || []).length}`);

  // Execute external searches across breadth of ecosystem sources
  const webQuery = `"${feature.name}" API`;
  const activeSearchProviders = getActiveSearchProviders();
  const searchEngineLabel = activeSearchProviders.length > 0
    ? activeSearchProviders.join(' + ')
    : config.searchProvider;

  logger.substep('Running ecosystem searches', `Web: [${searchEngineLabel}] | Standards | Bugzilla | Baseline | MDN | HN | NPM | WPT`);
  logger.debug(`Web search query: ${webQuery}`);
  logger.debug(`Hacker News query: "${feature.name}"`);

  const [
    rawWebResults,
    rawHnResults,
    standardsResults,
    bugsResult,
    baselineResult,
    mdnResult,
    twitterResult,
    rawNpmResults,
    wptResult,
  ] = await Promise.all([
    searchWeb(webQuery, { feature }).catch(err => {
      logger.debug(`Web search error: ${err.message}`);
      return [];
    }),
    searchHackerNews(feature.name).catch(err => {
      logger.debug(`HN search error: ${err.message}`);
      return [];
    }),
    searchStandardsPositions(feature).catch(err => {
      logger.debug(`Standards search error: ${err.message}`);
      return [];
    }),
    searchEngineBugzillas(feature).catch(err => {
      logger.debug(`Bugzilla search error: ${err.message}`);
      return [];
    }),
    searchBaseline(feature).catch(err => {
      logger.debug(`Baseline query error: ${err.message}`);
      return null;
    }),
    searchMdn(feature).catch(err => {
      logger.debug(`MDN search error: ${err.message}`);
      return [];
    }),
    searchTwitter(feature).catch(err => {
      logger.debug(`Twitter search error: ${err.message}`);
      return [];
    }),
    searchNpmEcosystem(feature).catch(err => {
      logger.debug(`NPM search error: ${err.message}`);
      return [];
    }),
    searchWpt(feature).catch(err => {
      logger.debug(`WPT search error: ${err.message}`);
      return null;
    }),
  ]);

  // Merge web search candidates and MDN docs
  for (const item of [...rawWebResults, ...mdnResult]) {
    const cleaned = cleanUrl(item.url);
    if (cleaned && !seenUrls.has(cleaned)) {
      seenUrls.add(cleaned);
      candidateArticles.push(item);
    }
  }

  // Fetch page content excerpts for candidate articles to inspect what is happening inside the links
  if (candidateArticles.length > 0) {
    logger.substep('Ingesting page contents', `Fetching HTTP body text for ${Math.min(candidateArticles.length, 6)} article candidate(s)...`);
    await Promise.all(
      candidateArticles.slice(0, 6).map(async (art) => {
        if (!art.contentExcerpt) {
          const excerpt = await fetchArticleExcerpt(art.url);
          if (excerpt) {
            art.contentExcerpt = excerpt;
          }
        }
      })
    );
  }

  // Combine discussions from Hacker News and Twitter
  const candidateDiscussions = [...rawHnResults, ...twitterResult];

  // PRIMARY RELEVANCE VERIFICATION (Using LLM with dynamic NLP token fallback)
  logger.substep('Relevance Verification', `Testing ${candidateDiscussions.length} discussion(s), ${candidateArticles.length} article(s), ${rawNpmResults.length} package(s)`);
  const [verifiedDiscussions, verifiedArticles, verifiedPackages] = await Promise.all([
    filterRelevantItems(feature, candidateDiscussions),
    filterRelevantItems(feature, candidateArticles),
    filterRelevantItems(feature, rawNpmResults),
  ]);

  // Standards positions from WebKit/Mozilla/TAG issues
  const standards = standardsResults;

  // Identify true polyfills
  const verifiedPolyfill = verifiedPackages.find(p => p.isPolyfill) || null;
  const hasPolyfill = !!verifiedPolyfill;

  // Log verification audit summary
  logger.audit('Standards Positions', standards.length, standards.length, `${standards.map(s => s.vendor).join(', ') || 'none'}`);
  logger.audit('Engine Bug Trackers', bugsResult.length, bugsResult.length, `${bugsResult.map(b => b.vendor).join(', ') || 'none'}`);
  if (baselineResult) {
    logger.audit('Baseline Status', 1, 1, `${baselineResult.statusLabel}`);
  }
  logger.audit('Community Discussions', verifiedDiscussions.length, candidateDiscussions.length, verifiedDiscussions.length < candidateDiscussions.length ? `filtered ${candidateDiscussions.length - verifiedDiscussions.length} unrelated` : '');
  logger.audit('NPM Packages', verifiedPackages.length, rawNpmResults.length, verifiedPolyfill ? `polyfill: ${verifiedPolyfill.name}` : 'no polyfill');
  logger.audit('Articles & Documentation', verifiedArticles.length, candidateArticles.length);

  // Metrics rollup based ONLY on verified findings
  const totalHnPoints = verifiedDiscussions.reduce((acc, d) => acc + (d.points || 0), 0);
  const totalHnComments = verifiedDiscussions.reduce((acc, d) => acc + (d.commentsCount || 0), 0);

  const auditTrail = {
    searchesExecuted: [
      { type: 'web', provider: searchEngineLabel, providers: activeSearchProviders, query: webQuery, rawFound: rawWebResults.length, verified: verifiedArticles.length },
      { type: 'hackernews', query: feature.name, rawFound: rawHnResults.length, verified: verifiedDiscussions.filter(d => d.source.includes('Hacker News')).length },
      { type: 'standards', count: standards.length, vendors: standards.map(s => s.vendor) },
      { type: 'bugzilla', count: bugsResult.length, vendors: bugsResult.map(b => b.vendor) },
      { type: 'baseline', status: baselineResult?.status || 'untracked', url: baselineResult?.url || null },
      { type: 'npm', rawFound: rawNpmResults.length, verified: verifiedPackages.length, polyfillFound: hasPolyfill },
      { type: 'wpt', testCount: wptResult?.testCount || 0 },
      ...(twitterResult.length > 0 ? [{ type: 'twitter', rawFound: twitterResult.length, verified: verifiedDiscussions.filter(d => d.source.includes('Twitter')).length }] : []),
    ],
    contentInspected: {
      hasSpec: !!feature.specUrl,
      explainerCount: (feature.explainerUrls || []).length,
      docCount: (feature.docUrls || []).length,
      sampleCount: (feature.sampleUrls || []).length,
      standardsCommentsRead: standards.reduce((acc, s) => acc + (s.comments?.length || 0), 0),
      webArticleExcerptsRead: candidateArticles.filter(a => !!a.contentExcerpt).length,
    },
  };

  return {
    featureId: feature.id,
    featureName: feature.name,
    gatheredAt: new Date().toISOString(),
    articles: verifiedArticles,
    discussions: verifiedDiscussions,
    standards,
    bugs: bugsResult,
    baseline: baselineResult,
    packages: verifiedPackages,
    resources,
    wpt: wptResult,
    verifiedPolyfill,
    auditTrail,
    metrics: {
      totalArticles: verifiedArticles.length,
      totalDiscussions: verifiedDiscussions.length,
      totalStandards: standards.length,
      totalBugs: bugsResult.length,
      totalHnPoints,
      totalHnComments,
      hasPolyfill,
    },
  };
}
