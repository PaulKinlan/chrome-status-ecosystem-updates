import { config } from './config.js';
import { fetchWithTimeout } from './http.js';

/**
 * Strips the ChromeStatus API XSSI prevention prefix `)]}'\n`
 */
export function stripXSSIPrefix(text) {
  return text.replace(/^\)\]\}'\n?/, '');
}

/**
 * Fetches JSON from ChromeStatus API with XSSI stripping
 */
async function fetchChromeStatusJson(path) {
  const url = `${config.chromeStatusApiUrl}${path}`;
  const response = await fetchWithTimeout(url, {
    label: 'ChromeStatus',
    timeoutMs: 15_000,
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'chrome-status-ecosystem-updates/1.0',
    },
  });

  if (!response.ok) {
    throw new Error(`ChromeStatus API returned ${response.status} for ${path}`);
  }

  const rawText = await response.text();
  const cleanJson = stripXSSIPrefix(rawText);
  return JSON.parse(cleanJson);
}

/**
 * Fetches Chrome release channels (dev, beta, stable)
 */
export async function fetchChannels() {
  return fetchChromeStatusJson('/api/v0/channels');
}

/**
 * Reads the newest known milestone from the channels payload.
 *
 * This used to fall back to a hardcoded `154`. That silently produced a report
 * for the wrong five milestones whenever chromestatus was unreachable, and the
 * constant rotted a little more with every Chrome release. There is no safe
 * default here, so failure is surfaced instead.
 */
function latestMilestoneFrom(channels) {
  const latest = channels?.beta?.mstone || channels?.stable?.mstone;
  if (!Number.isFinite(Number(latest))) {
    throw new Error(
      'Could not determine the latest Chrome milestone from the chromestatus channels API. ' +
      'Pass an explicit milestone (e.g. --milestone 150-154) to continue.'
    );
  }
  return Number(latest);
}

/**
 * Resolves milestone numbers from 'auto', 'last-N', ranges ('150-154'), or explicit lists ('150,151,152')
 */
export async function resolveTargetMilestones(targetInput = 'auto') {
  if (Array.isArray(targetInput)) {
    return targetInput.map(Number).filter(n => !isNaN(n)).sort((a, b) => a - b);
  }

  const inputStr = String(targetInput || 'auto').trim().toLowerCase();

  // 1. Check for 'last-N', 'lastN', 'last N' (e.g. 'last-5', 'last 5')
  const lastMatch = inputStr.match(/^last[-_\s]?(\d+)$/);
  if (lastMatch) {
    const count = Math.max(1, parseInt(lastMatch[1], 10));
    const channels = await fetchChannels();
    const latest = latestMilestoneFrom(channels);
    return Array.from({ length: count }, (_, i) => latest - count + 1 + i);
  }

  // 2. Check for single small number <= 20 representing "last N versions"
  if (/^\d+$/.test(inputStr)) {
    const num = parseInt(inputStr, 10);
    if (num <= 20) {
      const channels = await fetchChannels();
      const latest = latestMilestoneFrom(channels);
      return Array.from({ length: num }, (_, i) => latest - num + 1 + i);
    }
    // Specific milestone e.g. 154
    return [num];
  }

  // 3. Check for milestone range e.g. "150-154" or "150..154"
  const rangeMatch = inputStr.match(/^(\d+)\s*[-–.]{1,2}\s*(\d+)$/);
  if (rangeMatch) {
    const start = Math.min(parseInt(rangeMatch[1], 10), parseInt(rangeMatch[2], 10));
    const end = Math.max(parseInt(rangeMatch[1], 10), parseInt(rangeMatch[2], 10));
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  // 4. Comma-separated milestones e.g. "150, 151, 152, 153, 154"
  if (inputStr.includes(',')) {
    return inputStr
      .split(',')
      .map(s => parseInt(s.trim(), 10))
      .filter(n => !isNaN(n))
      .sort((a, b) => a - b);
  }

  // 5. Default ('auto', 'last-5', empty) -> Last 5 Chrome releases (e.g. 150-154)
  const channels = await fetchChannels();
  const latest = latestMilestoneFrom(channels);

  if (inputStr === 'single' || inputStr === 'beta') {
    return [latest];
  }
  if (inputStr === 'stable') {
    return [channels.stable?.mstone || 153];
  }

  // Default to last 5 releases
  const count = 5;
  return Array.from({ length: count }, (_, i) => latest - count + 1 + i);
}

/**
 * Fetches all features grouped by type for a specific milestone
 */
export async function fetchMilestoneFeatures(milestone) {
  const data = await fetchChromeStatusJson(`/api/v0/features?milestone=${milestone}`);
  return data.features_by_type || {};
}

/**
 * Fetches detailed feature metadata by feature ID
 */
export async function fetchFeatureDetails(featureId) {
  return fetchChromeStatusJson(`/api/v0/features/${featureId}`);
}

/**
 * Converts feature name into a URL-safe slug
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Map raw ChromeStatus category name to normalized category code
 *
 * Order matters because a label can mention more than one stage: "Origin
 * trial" is tested before "enabled", or a trial described as "enabled for a
 * share of users" would be reported as shipped.
 */
function normalizeCategoryType(categoryName) {
  const lower = (categoryName || '').toLowerCase();
  if (lower.includes('origin trial')) return 'origin-trial';
  if (lower.includes('enabled')) return 'enabled';
  if (lower.includes('flag') || lower.includes('developer trial')) return 'flagged';
  if (lower.includes('deprecated')) return 'deprecated';
  if (lower.includes('removed')) return 'removed';
  if (lower.includes('rollout')) return 'rollout';
  return 'other';
}

/**
 * Status types from least to most advanced. When ChromeStatus lists one feature
 * under several milestones of the window, the more advanced stage is the one to
 * report. An unrecognised type ranks with `other`, the lowest.
 */
export const STATUS_PROGRESSION = Object.freeze([
  'other', 'flagged', 'origin-trial', 'rollout', 'enabled', 'deprecated', 'removed',
]);

function statusRank(statusType) {
  return Math.max(0, STATUS_PROGRESSION.indexOf(statusType));
}

/** Numeric ids compare as numbers, anything else as text, so the order never depends on how they were typed. */
function compareIds(a, b) {
  const x = Number(a);
  const y = Number(b);
  return Number.isFinite(x) && Number.isFinite(y) ? x - y : String(a).localeCompare(String(b));
}

/**
 * Is `candidate` a better listing of the same feature than `current`?
 * The more advanced stage wins; for the same stage the EARLIER milestone does.
 * Earlier, not later, so the milestone shown for a stage does not creep forward
 * whenever the window slides (an origin trial listed under Chrome 153-156 would
 * otherwise look like a different status every release).
 */
function isBetterListing(candidate, current) {
  const gap = statusRank(candidate.normalized.statusType) - statusRank(current.normalized.statusType);
  if (gap !== 0) return gap > 0;
  return candidate.milestone < current.milestone;
}

/** The order features are investigated in, and the order a cap cuts from. */
function compareListings(a, b) {
  return (b.milestone - a.milestone)
    || (statusRank(b.normalized.statusType) - statusRank(a.normalized.statusType))
    || String(a.normalized.name).localeCompare(String(b.normalized.name))
    || compareIds(a.normalized.id, b.normalized.id);
}

/**
 * Reduces the window's listings to one per feature.
 *
 * ChromeStatus lists a feature once for every milestone it has a stage in, so
 * a feature that moved from a developer trial in Chrome 152 to "Enabled by
 * default" in 153 appears twice. Keeping the first one (as this used to) showed
 * the stale stage for 4 of 9 such features; this keeps the most advanced
 * listing instead. Each result also carries `firstListedMilestone`, the
 * earliest milestone of the window the feature appears under.
 *
 * The result is sorted: newest milestone first, then furthest along, then by
 * name and id. That is the order work is done in, and what a cap (`--limit`,
 * MAX_FEATURES) cuts from, so a cap keeps the newest, most advanced features
 * rather than whatever the oldest milestone happened to list first.
 *
 * @param {Array<{milestone: number, normalized: {id: number|string, name?: string, statusType: string}}>} listings
 */
export function chooseListings(listings) {
  const byId = new Map();
  for (const listing of listings) {
    const known = byId.get(listing.normalized.id);
    if (!known) {
      byId.set(listing.normalized.id, { best: listing, firstListedMilestone: listing.milestone });
      continue;
    }
    known.firstListedMilestone = Math.min(known.firstListedMilestone, listing.milestone);
    if (isBetterListing(listing, known.best)) known.best = listing;
  }
  return [...byId.values()]
    .map(({ best, firstListedMilestone }) => ({ ...best, firstListedMilestone }))
    .sort(compareListings);
}

/**
 * Generates high-yield search terms for an API/feature
 */
export function generateSearchTerms(feature) {
  const terms = new Set();
  const name = feature.name;

  // Exact phrase
  terms.add(`"${name}"`);

  // Name + context keywords
  if (!name.toLowerCase().includes('api') && !name.toLowerCase().includes('css')) {
    terms.add(`"${name}" web API`);
  }

  // Check for backticked code or dot-syntax APIs (e.g. navigator.install or window.setShape)
  const backtickMatches = feature.summary.match(/`([^`]+)`/g);
  if (backtickMatches) {
    for (const match of backtickMatches.slice(0, 3)) {
      const code = match.replace(/`/g, '').trim();
      if (code.length > 3 && !code.includes(' ')) {
        terms.add(`"${code}" web`);
      }
    }
  }

  const apiMatches = feature.summary.match(/\b([a-zA-Z_]\w+\.[a-zA-Z_]\w+(?:\(\))?)\b/g);
  if (apiMatches) {
    for (const api of apiMatches.slice(0, 3)) {
      terms.add(`"${api}"`);
    }
  }

  // Blink component context
  if (feature.blink_components && feature.blink_components.length > 0) {
    const component = feature.blink_components[0].split('>').pop();
    if (component) {
      terms.add(`"${name}" ${component}`);
    }
  }

  return Array.from(terms);
}

/**
 * Normalizes a raw feature object into a consistent structure
 */
export function normalizeFeature(raw, milestone, categoryLabel) {
  const id = raw.id;
  const name = raw.name || 'Untitled Feature';
  const slug = `${id}-${slugify(name)}`;
  const summary = (raw.summary || '').trim();
  const motivation = (raw.motivation || '').trim();
  const category = categoryLabel || raw.category || 'Other';
  const statusType = normalizeCategoryType(category);

  // Extract links
  const explainerUrls = Array.isArray(raw.explainer_links)
    ? raw.explainer_links
    : raw.explainer_links ? [raw.explainer_links] : [];

  const docUrls = Array.isArray(raw.doc_links)
    ? raw.doc_links
    : raw.doc_links ? [raw.doc_links] : [];

  const sampleUrls = Array.isArray(raw.sample_links)
    ? raw.sample_links
    : raw.sample_links ? [raw.sample_links] : [];

  // Browser signals
  const browsers = {
    chrome: {
      status: raw.browsers?.chrome?.status?.text || null,
      bug: raw.browsers?.chrome?.bug || raw.bug_url || null,
      flag: raw.browsers?.chrome?.flag || false,
      origintrial: raw.browsers?.chrome?.origintrial || false,
    },
    firefox: {
      view: raw.browsers?.ff?.view?.text || 'No signal',
      url: raw.browsers?.ff?.view?.url || null,
      notes: raw.browsers?.ff?.view?.notes || null,
    },
    safari: {
      view: raw.browsers?.safari?.view?.text || 'No signal',
      url: raw.browsers?.safari?.view?.url || null,
      notes: raw.browsers?.safari?.view?.notes || null,
    },
    webdev: {
      view: raw.browsers?.webdev?.view?.text || 'No signals',
      notes: raw.browsers?.webdev?.view?.notes || null,
    },
  };

  const specUrl = raw.standards?.spec || raw.spec_link || null;
  const standardsMaturity = raw.standards?.maturity?.short_text || null;

  return {
    id,
    name,
    slug,
    milestone: milestone || raw.milestone || null,
    category,
    statusType,
    summary,
    motivation,
    blinkComponents: raw.blink_components || [],
    specUrl,
    standardsMaturity,
    explainerUrls,
    docUrls,
    sampleUrls,
    bugUrl: raw.browsers?.chrome?.bug || raw.bug_url || null,
    browsers,
    tags: raw.tags || raw.search_tags || [],
    updated: raw.updated?.when || null,
    created: raw.created?.when || null,
    searchTerms: generateSearchTerms({ name, summary, blink_components: raw.blink_components }),
    chromeStatusUrl: `https://chromestatus.com/feature/${id}`,
    chromeStatusLiteUrl: `https://chromestatuslite.com/feature/${id}`,
  };
}
