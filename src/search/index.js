import { searchHackerNews } from './hackernews.js';
import { searchStandardsPositions } from './standards.js';
import { searchNpmEcosystem } from './npm.js';
import { searchWpt } from './wpt.js';
import { searchWeb, extractDomain } from './web.js';

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
 * Searches the web and developer ecosystem for activity around an API/feature
 */
export async function gatherEcosystemData(feature) {
  const seenUrls = new Set();
  const articles = [];
  const discussions = [];
  const standards = [];
  const packages = [];
  const resources = [];

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
      resources.push({
        source: 'Explainer',
        type: 'explainer',
        title: `${feature.name} Explainer`,
        url: expUrl,
        domain: extractDomain(expUrl),
      });
    }
  }

  for (const docUrl of feature.docUrls || []) {
    const cleaned = cleanUrl(docUrl);
    if (!seenUrls.has(cleaned)) {
      seenUrls.add(cleaned);
      articles.push({
        source: 'Documentation',
        type: 'article',
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

  // 1. Web Search
  const webQuery = `"${feature.name}" API`;
  const [webResults, hnResults, standardsResults, npmResults, wptResult] = await Promise.all([
    searchWeb(webQuery).catch(() => []),
    searchHackerNews(feature.name).catch(() => []),
    searchStandardsPositions(feature).catch(() => []),
    searchNpmEcosystem(feature).catch(() => []),
    searchWpt(feature).catch(() => null),
  ]);

  // Aggregate Web results
  for (const item of webResults) {
    const cleaned = cleanUrl(item.url);
    if (!seenUrls.has(cleaned)) {
      seenUrls.add(cleaned);
      articles.push(item);
    }
  }

  // Aggregate Hacker News results
  for (const item of hnResults) {
    const cleaned = cleanUrl(item.discussionUrl);
    if (!seenUrls.has(cleaned)) {
      seenUrls.add(cleaned);
      discussions.push(item);
    }
  }

  // Aggregate Standards Positions
  for (const item of standardsResults) {
    const cleaned = cleanUrl(item.url);
    if (!seenUrls.has(cleaned)) {
      seenUrls.add(cleaned);
      standards.push(item);
    }
  }

  // Aggregate NPM Packages
  for (const item of npmResults) {
    const cleaned = cleanUrl(item.url);
    if (!seenUrls.has(cleaned)) {
      seenUrls.add(cleaned);
      packages.push(item);
    }
  }

  // Metrics rollup
  const totalHnPoints = discussions.reduce((acc, d) => acc + (d.points || 0), 0);
  const totalHnComments = discussions.reduce((acc, d) => acc + (d.commentsCount || 0), 0);
  const hasPolyfill = packages.some(p => p.isPolyfill);

  return {
    featureId: feature.id,
    featureName: feature.name,
    gatheredAt: new Date().toISOString(),
    articles,
    discussions,
    standards,
    packages,
    resources,
    wpt: wptResult,
    metrics: {
      totalArticles: articles.length,
      totalDiscussions: discussions.length,
      totalStandardsPositions: standards.length,
      totalPackages: packages.length,
      hnPoints: totalHnPoints,
      hnComments: totalHnComments,
      hasPolyfill,
      hasDemos: resources.some(r => r.type === 'demo'),
    },
  };
}
