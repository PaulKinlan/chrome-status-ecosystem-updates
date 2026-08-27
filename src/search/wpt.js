import { logger } from '../logger.js';

const cache = new Map();

/**
 * Generates candidate search terms for wpt.fyi based on feature name and spec
 */
function generateWptQueries(feature) {
  const queries = new Set();

  const nameClean = feature.name
    .toLowerCase()
    .replace(/[()]/g, '')
    .trim();

  queries.add(nameClean.replace(/\s+/g, '-'));
  queries.add(nameClean.replace(/^(css|web|api)\s+/i, '').replace(/\s+/g, '-'));

  // Extract from spec URL if available
  if (feature.specUrl) {
    try {
      const u = new URL(feature.specUrl);
      const parts = u.pathname.split('/').filter(Boolean);
      if (parts.length > 0) {
        queries.add(parts[parts.length - 1].replace(/\.html?$/, ''));
      }
    } catch {}
  }

  return Array.from(queries).filter(q => q.length >= 3);
}

/**
 * Web Platform Tests (wpt.fyi) client
 */
export async function searchWpt(feature) {
  const queries = generateWptQueries(feature);
  const primaryQuery = queries[0] || feature.name.toLowerCase().replace(/\s+/g, '-');
  const wptUrl = `https://wpt.fyi/results/?q=${encodeURIComponent(primaryQuery)}`;

  const cacheKey = `wpt_${primaryQuery}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  for (const q of queries) {
    try {
      const apiUrl = `https://wpt.fyi/api/search?q=${encodeURIComponent(q)}`;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 4000);

      const res = await fetch(apiUrl, {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
        },
      });
      clearTimeout(timer);

      if (!res.ok) continue;

      const data = await res.json();
      const results = data.results || [];

      if (results.length > 0) {
        const resultObj = {
          source: 'Web Platform Tests',
          type: 'test',
          url: `https://wpt.fyi/results/?q=${encodeURIComponent(q)}`,
          queryUsed: q,
          testCount: results.length,
          sampleTests: results.slice(0, 5).map(r => r.test || r),
        };
        logger.debug(`[WPT] Found ${results.length} test(s) on wpt.fyi using query "${q}"`);
        cache.set(cacheKey, resultObj);
        return resultObj;
      }
    } catch (err) {
      logger.debug(`[WPT] Error querying "${q}": ${err.message}`);
    }
  }

  const fallback = {
    source: 'Web Platform Tests',
    type: 'test',
    url: wptUrl,
    queryUsed: primaryQuery,
    testCount: 0,
    sampleTests: [],
  };
  cache.set(cacheKey, fallback);
  return fallback;
}
