import { searchHackerNews } from './hackernews.js';
import { searchStandardsPositions } from './standards.js';
import { searchNpmEcosystem } from './npm.js';
import { searchWpt } from './wpt.js';
import { searchWeb, extractDomain } from './web.js';
import { fetchExplainerSummary } from './content-fetcher.js';
import { filterRelevantItems } from './verifier.js';

/**
 * Normalizes and strips tracking parameters from URLs for deduplication
 */
function cleanUrl(rawUrl) {
  try {
    const u = new URL(rawUrl);
    u.searchParams.delete('utm_source');
    u.searchParams.delete('utm_medium');
    u.searchParams.delete('utm_campaign');
    u.searchParams.delete('utm_content');
    return u.toString().replace(/\/$/, '');
  } catch {
    return (rawUrl || '').trim().replace(/\/$/, '');
  }
}

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

  // Execute external searches
  const webQuery = `"${feature.name}" API`;
  const [rawWebResults, rawHnResults, standardsResults, rawNpmResults, wptResult] = await Promise.all([
    searchWeb(webQuery).catch(() => []),
    searchHackerNews(feature.name).catch(() => []),
    searchStandardsPositions(feature).catch(() => []),
    searchNpmEcosystem(feature).catch(() => []),
    searchWpt(feature).catch(() => null),
  ]);

  // Merge web search candidates
  for (const item of rawWebResults) {
    const cleaned = cleanUrl(item.url);
    if (!seenUrls.has(cleaned)) {
      seenUrls.add(cleaned);
      candidateArticles.push(item);
    }
  }

  // STRICT RELEVANCE VERIFICATION
  // Filter out false positives (e.g. Unicode symbol tools for CSS symbols(), or OpenAPI tools for Web Install API)
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

  // Metrics rollup based ONLY on verified findings
  const totalHnPoints = verifiedDiscussions.reduce((acc, d) => acc + (d.points || 0), 0);
  const totalHnComments = verifiedDiscussions.reduce((acc, d) => acc + (d.commentsCount || 0), 0);

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
