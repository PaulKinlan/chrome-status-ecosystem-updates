import { logger } from '../logger.js';

const cache = new Map();

/**
 * Searches the official WebDX / webstatus.dev API (powers baseline.dev)
 * for the feature's cross-browser Baseline status (Widely available, Newly available, Limited).
 */
export async function searchBaseline(feature) {
  const query = feature.name;
  if (!query) return null;

  const cacheKey = `baseline_${query.toLowerCase()}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  try {
    const url = `https://api.webstatus.dev/v1/features?q=${encodeURIComponent(query)}`;
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

    if (!res.ok) return null;

    const data = await res.json();
    const items = data.data || data.features || (Array.isArray(data) ? data : []);

    if (!items || items.length === 0) return null;

    // Find the most relevant matching feature
    const nameLower = query.toLowerCase();
    const matched = items.find(item => {
      const fName = (item.name || item.feature_id || '').toLowerCase();
      return fName.includes(nameLower) || nameLower.includes(fName);
    }) || items[0];

    const baselineStatus = matched.baseline?.status || 'limited'; // widely, newly, limited
    const result = {
      featureId: matched.feature_id,
      name: matched.name || matched.feature_id,
      status: baselineStatus,
      statusLabel: baselineStatus === 'widely'
        ? 'Baseline Widely Available'
        : baselineStatus === 'newly'
        ? 'Baseline Newly Available'
        : 'Limited Availability',
      lowDate: matched.baseline?.low_date || null,
      highDate: matched.baseline?.high_date || null,
      browserSupport: {
        chrome: matched.browser_implementations?.chrome?.version || null,
        edge: matched.browser_implementations?.edge?.version || null,
        firefox: matched.browser_implementations?.firefox?.version || null,
        safari: matched.browser_implementations?.safari?.version || null,
      },
      url: `https://webstatus.dev/features/${matched.feature_id}`,
    };

    logger.debug(`[Baseline] Found status for "${feature.name}": ${result.statusLabel} (${result.url})`);
    cache.set(cacheKey, result);
    return result;
  } catch (err) {
    logger.debug(`[Baseline] Query error: ${err.message}`);
    return null;
  }
}
