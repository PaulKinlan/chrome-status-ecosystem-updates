import { searchHackerNews } from './hackernews.js';
import { searchStandardsPositions } from './standards.js';
import { searchNpmEcosystem } from './npm.js';
import { searchWpt } from './wpt.js';
import { searchWeb, extractDomain, cleanUrl, getActiveSearchProviders } from './web.js';
import { fetchExplainerSummary, fetchArticleExcerpt } from './content-fetcher.js';
import { filterRelevantItems } from './verifier.js';
import { logger } from '../logger.js';
import { config } from '../config.js';

/**
 * Searches the web and developer ecosystem for activity around an API/feature,
 * deeply inspecting linked resources and strictly verifying relevance.
 */
export async function gatherEcosystemData(feature) {
  const seenUrls = new Set();
  const resources = [];
  const candidateArticles = [];

  // Register feature's own spec & explainer links
  if (feature.specUrl) {
    const cleaned = cleanUrl(feature.specUrl);
    seenUrls.add(cleaned);
    resources.push({
      source: 'Specification',
      type: 'spec',
      title: `${feature.name} Specification`,
      url: feature.specUrl,
      domain: extractDomain(feature.specUrl),
    });
  }

  for (const expUrl of feature.explainerUrls || []) {
    const cleaned = cleanUrl(expUrl);
    if (!seenUrls.has(cleaned)) {
      seenUrls.add(cleaned);
      // Fetch explainer content snippet
      const explainerSnippet = await fetchExplainerSummary(expUrl);
      resources.push({
        source: 'Explainer',
        type: 'explainer',
        title: `${feature.name} Explainer`,
        url: expUrl,
        domain: extractDomain(expUrl),
        snippet: explainerSnippet || '',
      });
    }
  }

  for (const docUrl of feature.docUrls || []) {
    const cleaned = cleanUrl(docUrl);
    if (!seenUrls.has(cleaned)) {
      seenUrls.add(cleaned);
      candidateArticles.push({
        source: 'Documentation',
        type: 'article',
        title: `${feature.name} Documentation`,
        url: docUrl,
        domain: extractDomain(docUrl),
        isOfficialDoc: true,
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

  // Execute external searches
  const webQuery = `"${feature.name}" API`;
  const activeSearchProviders = getActiveSearchProviders();
  const searchEngineLabel = activeSearchProviders.length > 0
    ? activeSearchProviders.join(' + ')
    : config.searchProvider;

  logger.substep('Running ecosystem searches', `Web: [${searchEngineLabel}] | HN | Standards | NPM | WPT`);
  logger.debug(`Web search query: ${webQuery}`);
  logger.debug(`Hacker News query: "${feature.name}"`);

  const [rawWebResults, rawHnResults, standardsResults, rawNpmResults, wptResult] = await Promise.all([
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
    searchNpmEcosystem(feature).catch(err => {
      logger.debug(`NPM search error: ${err.message}`);
      return [];
    }),
    searchWpt(feature).catch(err => {
      logger.debug(`WPT search error: ${err.message}`);
      return null;
    }),
  ]);

  // Merge web search candidates
  for (const item of rawWebResults) {
    const cleaned = cleanUrl(item.url);
    if (!seenUrls.has(cleaned)) {
      seenUrls.add(cleaned);
      candidateArticles.push(item);
    }
  }

  // Fetch page content excerpts for candidate articles to inspect what is happening inside the links
  if (candidateArticles.length > 0) {
    logger.debug(`Fetching content excerpts for ${Math.min(candidateArticles.length, 6)} web article candidates...`);
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

  // STRICT RELEVANCE VERIFICATION
  logger.substep('Relevance Verification', `Testing ${rawHnResults.length} HN threads, ${candidateArticles.length} articles, ${rawNpmResults.length} npm packages`);
  const [verifiedDiscussions, verifiedArticles, verifiedPackages] = await Promise.all([
    filterRelevantItems(feature, rawHnResults),
    filterRelevantItems(feature, candidateArticles),
    filterRelevantItems(feature, rawNpmResults),
  ]);

  // Standards positions from WebKit/Mozilla/TAG issues (already queried with feature name and direct URLs)
  const standards = standardsResults;

  // Identify true polyfills
  const verifiedPolyfill = verifiedPackages.find(p => p.isPolyfill) || null;
  const hasPolyfill = !!verifiedPolyfill;

  // Log verification audit summary
  logger.audit('Standards Positions', standards.length, standards.length, `${standards.map(s => s.vendor).join(', ') || 'none'}`);
  logger.audit('Hacker News Threads', verifiedDiscussions.length, rawHnResults.length, verifiedDiscussions.length < rawHnResults.length ? `filtered ${rawHnResults.length - verifiedDiscussions.length} false-positives` : '');
  logger.audit('NPM Packages', verifiedPackages.length, rawNpmResults.length, verifiedPolyfill ? `polyfill: ${verifiedPolyfill.name}` : 'no polyfill');
  logger.audit('Articles & Docs', verifiedArticles.length, candidateArticles.length);

  // Metrics rollup based ONLY on verified findings
  const totalHnPoints = verifiedDiscussions.reduce((acc, d) => acc + (d.points || 0), 0);
  const totalHnComments = verifiedDiscussions.reduce((acc, d) => acc + (d.commentsCount || 0), 0);

  const auditTrail = {
    searchesExecuted: [
      { type: 'web', provider: searchEngineLabel, providers: activeSearchProviders, query: webQuery, rawFound: rawWebResults.length, verified: verifiedArticles.length },
      { type: 'hackernews', query: feature.name, rawFound: rawHnResults.length, verified: verifiedDiscussions.length },
      { type: 'standards', count: standards.length, vendors: standards.map(s => s.vendor) },
      { type: 'npm', rawFound: rawNpmResults.length, verified: verifiedPackages.length, polyfillFound: hasPolyfill },
      { type: 'wpt', testCount: wptResult?.testCount || 0 },
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
    packages: verifiedPackages,
    resources,
    wpt: wptResult,
    verifiedPolyfill,
    auditTrail,
    metrics: {
      totalArticles: verifiedArticles.length,
      totalDiscussions: verifiedDiscussions.length,
      totalStandardsPositions: standards.length,
      totalPackages: verifiedPackages.length,
      hnPoints: totalHnPoints,
      hnComments: totalHnComments,
      hasPolyfill,
      hasDemos: resources.some(r => r.type === 'demo'),
    },
  };
}
