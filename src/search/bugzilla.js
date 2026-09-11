import { logger } from '../logger.js';
import { fetchWithTimeout } from '../http.js';

const cache = new Map();

/**
 * Queries Mozilla Bugzilla for Gecko/Firefox implementation bugs
 */
async function searchMozillaBugzilla(featureName) {
  const cacheKey = `bz_moz_${featureName.toLowerCase()}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  try {
    const url = `https://bugzilla.mozilla.org/rest/bug?quicksearch=${encodeURIComponent(featureName)}&limit=5&include_fields=id,summary,status,resolution,last_change_time,assigned_to`;

    const res = await fetchWithTimeout(url, {
      label: 'Mozilla Bugzilla',
      timeoutMs: 8_000,
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
      },
    });

    if (!res.ok) return [];

    const data = await res.json();
    const bugs = (data.bugs || []).map(b => ({
      vendor: 'Mozilla (Gecko)',
      id: b.id,
      title: b.summary,
      status: b.status,
      resolution: b.resolution || '',
      url: `https://bugzilla.mozilla.org/show_bug.cgi?id=${b.id}`,
      lastChangeTime: b.last_change_time,
    }));

    cache.set(cacheKey, bugs);
    return bugs;
  } catch (err) {
    logger.debug(`[Mozilla Bugzilla] Error: ${err.message}`);
    return [];
  }
}

/**
 * Queries WebKit Bugzilla for Safari/WebKit implementation bugs
 */
async function searchWebKitBugzilla(featureName) {
  const cacheKey = `bz_webkit_${featureName.toLowerCase()}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  try {
    const url = `https://bugs.webkit.org/rest/bug?quicksearch=${encodeURIComponent(featureName)}&limit=5&include_fields=id,summary,status,resolution,last_change_time,assigned_to`;

    const res = await fetchWithTimeout(url, {
      label: 'WebKit Bugzilla',
      timeoutMs: 8_000,
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
      },
    });

    if (!res.ok) return [];

    const data = await res.json();
    const bugs = (data.bugs || []).map(b => ({
      vendor: 'WebKit (Safari)',
      id: b.id,
      title: b.summary,
      status: b.status,
      resolution: b.resolution || '',
      url: `https://bugs.webkit.org/show_bug.cgi?id=${b.id}`,
      lastChangeTime: b.last_change_time,
    }));

    cache.set(cacheKey, bugs);
    return bugs;
  } catch (err) {
    logger.debug(`[WebKit Bugzilla] Error: ${err.message}`);
    return [];
  }
}

/**
 * Searches both Mozilla Bugzilla and WebKit Bugzilla for tracking and implementation bugs
 */
export async function searchEngineBugzillas(feature) {
  const query = feature.name;
  if (!query) return [];

  const [mozBugs, webkitBugs] = await Promise.all([
    searchMozillaBugzilla(query),
    searchWebKitBugzilla(query),
  ]);

  const allBugs = [...mozBugs, ...webkitBugs];
  if (allBugs.length > 0) {
    logger.debug(`[Bugzilla] Found ${mozBugs.length} Mozilla bug(s) and ${webkitBugs.length} WebKit bug(s) for "${query}"`);
  }
  return allBugs;
}
