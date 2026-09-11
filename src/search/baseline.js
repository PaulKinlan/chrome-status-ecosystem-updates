import { logger } from '../logger.js';
import { fetchWithTimeout } from '../http.js';

const cache = new Map();

function normalize(str) {
  return String(str || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
}

/**
 * Strips a spec URL down to host+path so that fragment/protocol differences
 * between ChromeStatus and webstatus.dev do not defeat the comparison.
 */
function specKey(url) {
  try {
    const u = new URL(url);
    return `${u.hostname}${u.pathname}`.replace(/\/$/, '').toLowerCase();
  } catch {
    return '';
  }
}

/**
 * Picks the webstatus.dev entry that genuinely corresponds to this ChromeStatus
 * feature, or null when nothing matches confidently.
 *
 * The search endpoint is a fuzzy text search, so the first result is frequently
 * a different feature that merely shares a word. Attributing its Baseline status
 * to ours produces a confident, wrong, cited claim in the report - the worst
 * possible failure mode - so an unmatched lookup must degrade to "untracked".
 *
 * Exported for testing.
 */
export function pickConfidentMatch(feature, items) {
  const targetSpec = specKey(feature.specUrl);
  const targetName = normalize(feature.name);
  if (!targetName && !targetSpec) return null;

  let containmentFallback = null;

  for (const item of items) {
    // 1. Strongest signal: the spec document matches. Names drift, specs don't.
    if (targetSpec) {
      const links = item.spec?.links || [];
      for (const l of links) {
        const candidate = specKey(l?.link);
        if (candidate && candidate === targetSpec) {
          return { ...item, _matchedOn: 'spec URL' };
        }
      }
    }

    // 2. Exact name or feature_id equality once punctuation is normalized away.
    const itemName = normalize(item.name);
    const itemId = normalize(item.feature_id);
    if (targetName && (itemName === targetName || itemId === targetName)) {
      return { ...item, _matchedOn: 'exact name' };
    }

    // 3. Containment, but only when the shorter string is long enough to be
    //    distinctive. Without the length floor, a feature called "CSS zoom"
    //    matches every CSS entry in the index.
    if (targetName && itemName) {
      const shorter = Math.min(targetName.length, itemName.length);
      const contains = itemName.includes(targetName) || targetName.includes(itemName);
      if (contains && shorter >= 8 && !containmentFallback) {
        containmentFallback = { ...item, _matchedOn: 'name containment' };
      }
    }
  }

  return containmentFallback;
}

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

    const res = await fetchWithTimeout(url, {
      label: 'Baseline',
      timeoutMs: 8_000,
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
      },
    });

    if (!res.ok) return null;

    const data = await res.json();
    const items = data.data || data.features || (Array.isArray(data) ? data : []);

    if (!items || items.length === 0) return null;

    const matched = pickConfidentMatch(feature, items);

    // Previously this fell back to `items[0]`, which attributed an arbitrary
    // unrelated feature's Baseline status to this one (e.g. q=popover returns
    // "ToggleEvent source" first). Reporting nothing is far better than
    // reporting someone else's interoperability status as fact.
    if (!matched) {
      logger.debug(`[Baseline] No confident match for "${feature.name}" among ${items.length} result(s); reporting untracked.`);
      return null;
    }

    // Only claim a Baseline status the API actually gave us.
    const baselineStatus = matched.baseline?.status || null;
    const result = {
      featureId: matched.feature_id,
      name: matched.name || matched.feature_id,
      status: baselineStatus || 'unknown',
      statusLabel: baselineStatus === 'widely'
        ? 'Baseline Widely Available'
        : baselineStatus === 'newly'
        ? 'Baseline Newly Available'
        : baselineStatus === 'limited'
        ? 'Limited Availability'
        : 'Not yet assessed by Baseline',
      matchedOn: matched._matchedOn,
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

    logger.debug(`[Baseline] Matched "${feature.name}" -> "${result.name}" via ${result.matchedOn}: ${result.statusLabel} (${result.url})`);
    cache.set(cacheKey, result);
    return result;
  } catch (err) {
    logger.debug(`[Baseline] Query error: ${err.message}`);
    return null;
  }
}
