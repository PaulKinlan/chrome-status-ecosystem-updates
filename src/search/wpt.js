import { logger } from '../logger.js';
import { fetchWithTimeout } from '../http.js';

const cache = new Map();

// Words that appear in almost every feature title and match thousands of
// unrelated WPT paths, so they are never useful on their own.
const WPT_STOPWORDS = new Set([
  'api', 'web', 'css', 'the', 'for', 'and', 'new', 'support', 'attribute',
  'property', 'element', 'method', 'interface', 'feature', 'update', 'value',
]);

/**
 * Generates candidate search terms for wpt.fyi, most likely to match first.
 *
 * wpt.fyi's `q` matches against test *file paths* (`/css/css-anchor-position/...`),
 * which are named after spec shortnames and directories rather than prose
 * titles. The previous version tried the hyphenated feature name first
 * ("web-install-api"), which matches no path in the repository, so the very
 * common case was that the first query returned nothing and the reported test
 * count was 0 for almost every feature.
 */
function generateWptQueries(feature) {
  const queries = new Set();

  // 1. Spec shortname. WPT directories are conventionally named after it, so
  //    this is by far the strongest signal.
  if (feature.specUrl) {
    try {
      const u = new URL(feature.specUrl);
      const parts = u.pathname.split('/').filter(Boolean);
      const last = (parts[parts.length - 1] || '').replace(/\.html?$/, '');
      if (last && !/^index$/i.test(last)) {
        queries.add(last);
        // Levelled specs ("css-anchor-position-1") map to unlevelled dirs.
        queries.add(last.replace(/-\d+$/, ''));
      }
      // csswg-drafts style: /css-anchor-position-1/ sits under the host root,
      // while WHATWG specs put the shortname in the hostname.
      const host = u.hostname.split('.')[0];
      if (host && host !== 'www' && host !== 'w3c' && host !== 'github') {
        queries.add(host);
      }
    } catch {}
  }

  const nameClean = feature.name.toLowerCase().replace(/[()]/g, '').trim();

  // 2. Individual significant words. A single distinctive token ("popover",
  //    "scrollend") is what actually appears in a WPT path.
  const tokens = nameClean
    .split(/[^a-z0-9]+/)
    .filter(t => t.length >= 4 && !WPT_STOPWORDS.has(t));
  for (const t of tokens) queries.add(t);

  // 3. Hyphenated forms, last, as a best-effort exact directory match.
  queries.add(nameClean.replace(/^(css|web|api)\s+/i, '').replace(/\s+/g, '-'));
  queries.add(nameClean.replace(/\s+/g, '-'));

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

      const res = await fetchWithTimeout(apiUrl, {
        label: 'WPT',
        timeoutMs: 8_000,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
        },
      });

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
