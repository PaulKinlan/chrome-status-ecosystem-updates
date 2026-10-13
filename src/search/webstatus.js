import { fetchWithTimeout, readJsonLimited } from '../http.js';
import { logger } from '../logger.js';
import { recordWebStatusRequest } from '../web-features-stats.js';
import { WEB_FEATURE_ID } from './web-features.js';

/**
 * webstatus.dev client: the Baseline status and the Web Platform Tests pass
 * rates of a web-features group.
 *
 * A group is looked up by its id when the ChromeStatus feature is in the
 * web-features mapping (src/search/web-features.js), which is exact. Only a
 * feature that is not in the mapping is searched for by name, which is fuzzy
 * and so accepted only on a confident match (`pickConfidentMatch`).
 *
 * Either way the answer is about the web-features GROUP, not about the
 * ChromeStatus feature on its own.
 */

const API_URL = 'https://api.webstatus.dev/v1/features';
const MAX_BYTES = 2 * 1024 * 1024;
const BROWSERS = ['chrome', 'edge', 'firefox', 'safari'];
const REQUEST_HEADERS = {
  'Accept': 'application/json',
  'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
};

// A Map, not an object: a status of "constructor" must not find one of Object's properties.
const BASELINE_LABELS = new Map([
  ['widely', 'Baseline Widely Available'],
  ['newly', 'Baseline Newly Available'],
  ['limited', 'Limited Availability'],
]);

/** What a Baseline status is called in a report; a status the API did not give is "not yet assessed". */
export function baselineLabel(status) {
  return BASELINE_LABELS.get(status) ?? 'Not yet assessed by Baseline';
}

function isRecord(value) {
  return value !== null && typeof value === 'object';
}

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

  let containmentFallback = null;

  for (const item of items) {
    // 1. Strongest signal: the spec document matches. Names drift, specs don't.
    if (targetSpec) {
      const links = item.spec?.links || [];
      for (const l of links) {
        if (specKey(l?.link) === targetSpec) {
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

function plainText(value, max) {
  return typeof value === 'string' ? value.replace(/\s+/g, ' ').trim().slice(0, max) : '';
}

function isoDate(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : null;
}

function releaseVersion(value) {
  return typeof value === 'string' && /^[0-9][0-9.]{0,15}$/.test(value) ? value : null;
}

/** A browser's share of a group's tests that pass, as a percentage with one decimal; browsers with no figure are left out. */
function passRates(scores) {
  if (!isRecord(scores)) return null;
  const rates = {};
  for (const browser of BROWSERS) {
    const score = scores[browser]?.score;
    if (typeof score === 'number' && score >= 0 && score <= 1) rates[browser] = Math.round(score * 1000) / 10;
  }
  return Object.keys(rates).length > 0 ? rates : null;
}

/**
 * Reduces a webstatus.dev feature (from the single-feature endpoint or from the
 * search) to the fields used here, checking each one; null when it is not a
 * feature with a usable id.
 *
 * @returns {null | {
 *   id: string,
 *   name: string,
 *   baseline: {status: string | null, lowDate: string | null, highDate: string | null},
 *   browserSupport: {chrome: string | null, edge: string | null, firefox: string | null, safari: string | null},
 *   wpt: null | {stable: Record<string, number> | null, experimental: Record<string, number> | null},
 * }}
 */
export function normalizeWebStatusFeature(raw) {
  if (!isRecord(raw)) return null;
  const id = raw.feature_id;
  if (typeof id !== 'string' || !WEB_FEATURE_ID.test(id)) return null;

  const status = typeof raw.baseline?.status === 'string' && /^[a-z]{1,20}$/.test(raw.baseline.status)
    ? raw.baseline.status
    : null;

  const stable = passRates(raw.wpt?.stable);
  const experimental = passRates(raw.wpt?.experimental);

  return {
    id,
    name: plainText(raw.name, 200) || id,
    baseline: {
      status,
      lowDate: isoDate(raw.baseline?.low_date),
      highDate: isoDate(raw.baseline?.high_date),
    },
    browserSupport: {
      chrome: releaseVersion(raw.browser_implementations?.chrome?.version),
      edge: releaseVersion(raw.browser_implementations?.edge?.version),
      firefox: releaseVersion(raw.browser_implementations?.firefox?.version),
      safari: releaseVersion(raw.browser_implementations?.safari?.version),
    },
    wpt: stable || experimental ? { stable, experimental } : null,
  };
}

/** Results of lookups that succeeded, and the lookups under way, by key: one request however many features share a group. */
const answered = new Map();
const inFlight = new Map();

/** Runs `produce` once per key at a time and remembers a success. A lookup that found nothing is not remembered, so a later feature asks again. */
function once(key, produce) {
  if (answered.has(key)) return Promise.resolve(answered.get(key));
  if (inFlight.has(key)) return inFlight.get(key);

  const pending = produce()
    .then(found => {
      if (found) answered.set(key, found);
      return found;
    })
    .finally(() => inFlight.delete(key));
  inFlight.set(key, pending);
  return pending;
}

/** Asks webstatus.dev for one group by id. */
async function requestGroup(groupId) {
  const url = `${API_URL}/${encodeURIComponent(groupId)}?wpt_metric_view=test_counts`;
  try {
    const res = await fetchWithTimeout(url, { label: 'webstatus.dev', timeoutMs: 8_000, headers: REQUEST_HEADERS });
    if (!res.ok) {
      recordWebStatusRequest(res.status === 404 ? 'absent' : 'failed');
      return null;
    }
    const record = normalizeWebStatusFeature(await readJsonLimited(res, MAX_BYTES));
    // A different group than the one asked for is not an answer to the question.
    if (!record || record.id !== groupId) {
      recordWebStatusRequest('failed');
      return null;
    }
    recordWebStatusRequest('ok');
    return { record, matchedOn: 'web-features mapping' };
  } catch (err) {
    recordWebStatusRequest('failed');
    logger.debug(`[webstatus.dev] ${groupId}: ${err.message}`);
    return null;
  }
}

/** Searches webstatus.dev by the feature's name and keeps a match only when it is confident. */
async function searchByName(feature) {
  const url = `${API_URL}?q=${encodeURIComponent(feature.name)}`;
  try {
    const res = await fetchWithTimeout(url, { label: 'Baseline', timeoutMs: 8_000, headers: REQUEST_HEADERS });
    if (!res.ok) return null;

    const data = await res.json();
    const items = [data.data, data.features, data].find(Array.isArray) ?? [];

    const matched = pickConfidentMatch(feature, items);

    // Previously this fell back to `items[0]`, which attributed an arbitrary
    // unrelated feature's Baseline status to this one (e.g. q=popover returns
    // "ToggleEvent source" first). Reporting nothing is far better than
    // reporting someone else's interoperability status as fact.
    if (!matched) {
      logger.debug(`[Baseline] No confident match for "${feature.name}" among ${items.length} result(s); reporting untracked.`);
      return null;
    }

    const record = normalizeWebStatusFeature(matched);
    return record ? { record, matchedOn: matched._matchedOn } : null;
  } catch (err) {
    logger.debug(`[Baseline] Query error: ${err.message}`);
    return null;
  }
}

/**
 * The webstatus.dev record of the group `feature` belongs to.
 *
 * With `webFeature` (from the web-features mapping) the group is asked for by
 * id; without it the feature is searched for by name. Both the Baseline and the
 * test results are read from the one answer, which is shared by every feature
 * of the group.
 *
 * @returns {Promise<null | {record: ReturnType<typeof normalizeWebStatusFeature>, matchedOn: string}>}
 */
export function lookupWebStatus(feature, webFeature = null) {
  if (webFeature?.id) return once(`id:${webFeature.id}`, () => requestGroup(webFeature.id));
  if (!feature?.name) return Promise.resolve(null);
  return once(`name:${normalize(feature.name)}|${specKey(feature.specUrl)}`, () => searchByName(feature));
}

/** Forgets every answer, so the next lookup asks again. Call at the start of a run (and in tests). */
export function resetWebStatus() {
  answered.clear();
  inFlight.clear();
}
