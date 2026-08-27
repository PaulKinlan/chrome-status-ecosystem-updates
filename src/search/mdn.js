import { logger } from '../logger.js';

const cache = new Map();

/**
 * Queries MDN Web Docs search API for official documentation and compatibility pages
 */
export async function searchMdn(feature) {
  const query = feature.name;
  if (!query) return [];

  const cacheKey = `mdn_${query.toLowerCase()}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  try {
    const url = `https://developer.mozilla.org/api/v1/search?q=${encodeURIComponent(query)}&locale=en-US`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
      },
    });
    clearTimeout(timer);

    if (!res.ok) return [];

    const data = await res.json();
    const documents = data.documents || [];

    const results = documents.slice(0, 3).map(doc => ({
      source: 'MDN Web Docs',
      type: 'documentation',
      title: doc.title || doc.mdn_url,
      url: `https://developer.mozilla.org${doc.mdn_url}`,
      snippet: doc.summary || '',
      domain: 'developer.mozilla.org',
    }));

    if (results.length > 0) {
      logger.debug(`[MDN] Found ${results.length} documentation page(s) for "${query}"`);
    }

    cache.set(cacheKey, results);
    return results;
  } catch (err) {
    logger.debug(`[MDN] Search error: ${err.message}`);
    return [];
  }
}
