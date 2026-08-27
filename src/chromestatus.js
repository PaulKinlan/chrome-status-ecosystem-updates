import { config } from './config.js';

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
  const response = await fetch(url, {
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
 * Resolves milestone numbers from 'auto' or explicit input
 */
export async function resolveTargetMilestones(targetInput = 'auto') {
  if (targetInput && targetInput !== 'auto') {
    return targetInput
      .toString()
      .split(',')
      .map(s => parseInt(s.trim(), 10))
      .filter(n => !isNaN(n));
  }

  const channels = await fetchChannels();
  // Default to Beta channel (upcoming features to prepare developers for)
  // or Stable if Beta not available
  const betaMilestone = channels.beta?.mstone;
  const stableMilestone = channels.stable?.mstone;

  if (betaMilestone) return [betaMilestone];
  if (stableMilestone) return [stableMilestone];
  return [154]; // Fallback
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
 */
function normalizeCategoryType(categoryName) {
  const lower = (categoryName || '').toLowerCase();
  if (lower.includes('enabled')) return 'enabled';
  if (lower.includes('origin trial')) return 'origin-trial';
  if (lower.includes('flag') || lower.includes('developer trial')) return 'flagged';
  if (lower.includes('deprecated')) return 'deprecated';
  if (lower.includes('removed')) return 'removed';
  if (lower.includes('rollout')) return 'rollout';
  return 'other';
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
