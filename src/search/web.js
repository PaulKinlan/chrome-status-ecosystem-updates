import { config } from '../config.js';
import { callGeminiWithSearchGrounding } from './gemini-grounding.js';
import { logger } from '../logger.js';
import { fetchWithTimeout } from '../http.js';

/**
 * Normalizes and strips tracking parameters from URLs for clean canonical deduplication
 */
export function cleanUrl(rawUrl) {
  if (!rawUrl) return '';
  try {
    const u = new URL(rawUrl);
    u.searchParams.delete('utm_source');
    u.searchParams.delete('utm_medium');
    u.searchParams.delete('utm_campaign');
    u.searchParams.delete('utm_term');
    u.searchParams.delete('utm_content');
    u.hash = '';
    return u.toString().replace(/\/$/, '');
  } catch {
    return rawUrl;
  }
}

/**
 * Helper to extract clean hostname/domain from URL
 */
export function extractDomain(urlStr) {
  try {
    const u = new URL(urlStr);
    return u.hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

/**
 * Searches the web using Google Search Grounding natively via Gemini API
 */
async function searchGemini(query, feature, options = {}) {
  if (!config.geminiApiKey) return [];
  try {
    const featureName = feature?.name || query;
    const summary = feature?.summary || '';
    const prompt = `Search Google for recent developer articles, tutorials, announcements, and ecosystem reactions about the Web Platform feature: "${featureName}".
Summary: "${summary}".
Find articles from web.dev, developer.chrome.com, MDN, CSS-Tricks, Smashing Magazine, and developer blogs.
Return a brief summary and discuss the key articles found.`;

    const result = await callGeminiWithSearchGrounding(prompt, { temperature: 0.1 });
    return result?.groundedArticles || [];
  } catch (err) {
    logger.debug(`Gemini search error: ${err.message}`);
    return [];
  }
}

/**
 * Executes a single Brave Search query with metadata tagging
 */
async function executeBraveQuery(queryObj, options = {}) {
  const queryStr = typeof queryObj === 'string' ? queryObj : queryObj.query;
  const description = queryObj.description || 'Web search';
  const isReverseLink = !!queryObj.isReverseLink;
  const targetUrl = queryObj.targetUrl || null;
  const intent = queryObj.intent || 'general';

  const url = new URL('https://api.search.brave.com/res/v1/web/search');
  url.searchParams.set('q', queryStr);
  url.searchParams.set('count', String(options.limit || 8));

  const res = await fetchWithTimeout(url, {
    label: 'Brave Search',
    timeoutMs: 15_000,
    headers: {
      'Accept': 'application/json',
      'X-Subscription-Token': config.braveSearchApiKey,
    },
  });

  if (!res.ok) {
    const errBody = await res.text().catch(() => '');
    logger.warn(`[Brave Search] Warning: API returned HTTP ${res.status} (${res.statusText}) for query "${queryStr}": ${errBody.slice(0, 100)}`);
    return { queryStr, description, items: [], isReverseLink, intent };
  }

  const data = await res.json();
  const rawResults = data.web?.results || [];
  const items = rawResults.map(r => ({
    source: 'Brave Search',
    type: 'article',
    title: r.title,
    url: r.url,
    snippet: r.description || '',
    publishedAt: r.page_age || null,
    domain: extractDomain(r.url),
    isReverseCitation: isReverseLink,
    reverseLinkedTo: targetUrl,
    discoveredViaQuery: queryStr,
    queryIntent: intent,
  }));

  logger.info(`[Brave Search] Query "${queryStr}" (${description}): HTTP 200, returned ${items.length} result(s)`);
  return { queryStr, description, items, isReverseLink, intent };
}

/**
 * Searches the web using Brave Search API, executing a multifaceted query plan
 * that includes reverse-link queries and LLM-synthesized queries.
 */
async function searchBrave(query, options = {}) {
  if (!config.braveSearchApiKey) {
    logger.debug('[Brave Search] Skipped (BRAVE_SEARCH_API_KEY not configured)');
    return [];
  }

  const queriesToRun = (options.queryPlan && options.queryPlan.length > 0)
    ? options.queryPlan
    : [{ query, intent: 'core-api', description: 'Core feature query' }];

  const allItems = [];
  const seenUrls = new Set();
  const queryAudits = [];

  for (const q of queriesToRun) {
    try {
      const res = await executeBraveQuery(q, options);
      queryAudits.push({
        query: res.queryStr,
        description: res.description,
        intent: res.intent,
        isReverseLink: res.isReverseLink,
        count: res.items.length,
      });

      for (const item of res.items) {
        const canonical = cleanUrl(item.url);
        if (canonical && !seenUrls.has(canonical)) {
          seenUrls.add(canonical);
          allItems.push({ ...item, url: canonical });
        }
      }

      if (queriesToRun.length > 1) {
        await new Promise(r => setTimeout(r, 100));
      }
    } catch (err) {
      logger.warn(`[Brave Search] Error querying "${q.query || q}": ${err.message}`);
    }
  }

  // Returned as a pair rather than as properties hung off the array: array
  // properties are dropped by map/filter/spread/JSON.stringify, so the audit
  // trail was being lost silently downstream.
  return { items: allItems, queryAudits };
}

/**
 * Searches the web using Google Custom Search JSON API
 */
async function searchGoogle(query, options = {}) {
  if (!config.googleSearchApiKey || !config.googleSearchCx) return [];
  try {
    const url = new URL('https://www.googleapis.com/customsearch/v1');
    url.searchParams.set('key', config.googleSearchApiKey);
    url.searchParams.set('cx', config.googleSearchCx);
    url.searchParams.set('q', query);
    url.searchParams.set('num', String(Math.min(options.limit || 8, 10)));

    const res = await fetchWithTimeout(url, {
      label: 'Google Custom Search',
      timeoutMs: 15_000,
    });
    if (!res.ok) {
      logger.debug(`Google search failed with status ${res.status}`);
      return [];
    }
    const data = await res.json();
    return (data.items || []).map(item => ({
      source: 'Google Search',
      type: 'article',
      title: item.title,
      url: item.link,
      snippet: item.snippet || '',
      publishedAt: item.pagemap?.metatags?.[0]?.['article:published_time'] || null,
      domain: extractDomain(item.link),
    }));
  } catch (err) {
    logger.debug(`Google search error: ${err.message}`);
    return [];
  }
}

/**
 * The providers `searchWeb` actually implements a `switch` case for. Anything
 * outside this set cannot produce results, so it must never be reported as active.
 */
const KNOWN_SEARCH_PROVIDERS = ['gemini', 'brave', 'google'];

/** Whether the credentials a given provider needs are actually configured. */
function hasCredentialsFor(provider) {
  switch (provider) {
    case 'gemini':
      return !!config.geminiApiKey;
    case 'brave':
      return !!config.braveSearchApiKey;
    case 'google':
      return !!(config.googleSearchApiKey && config.googleSearchCx);
    default:
      return false;
  }
}

/** Every known provider whose credentials are present. */
function detectCredentialedProviders() {
  return KNOWN_SEARCH_PROVIDERS.filter(hasCredentialsFor);
}

/**
 * Determines all active search providers based on configuration and available API keys.
 * Maximizes breadth by enabling all configured search engines concurrently.
 */
export function getActiveSearchProviders() {
  const mode = (config.searchProvider || 'auto').toLowerCase();

  // If user explicitly configured a single provider that isn't 'auto', 'all', or 'multi'
  if (mode !== 'auto' && mode !== 'all' && mode !== 'multi') {
    // This previously returned `[mode]` unconditionally, which created phantom
    // providers: a documented-but-unimplemented value such as
    // SEARCH_PROVIDER=ecosystem-only matched no case in searchWeb's switch and
    // yielded nothing, yet was still counted as an executed provider in the run
    // telemetry, making a silent no-op look like a search that found nothing.
    if (!KNOWN_SEARCH_PROVIDERS.includes(mode)) {
      logger.warn(`[Web Search] Unrecognised SEARCH_PROVIDER "${config.searchProvider}". Supported values are ${KNOWN_SEARCH_PROVIDERS.join(', ')} or auto/all/multi. Falling back to auto-detection.`);
      return detectCredentialedProviders();
    }

    // A known provider without its API key is equally incapable of returning
    // results, so report it as inactive rather than silently failing.
    if (!hasCredentialsFor(mode)) {
      logger.warn(`[Web Search] SEARCH_PROVIDER="${mode}" is selected but its API key is not configured; no web search provider is active.`);
      return [];
    }

    return [mode];
  }

  return detectCredentialedProviders();
}

/**
 * Multi-provider web search runner that queries ALL configured search engines
 * concurrently for maximum ecosystem breadth and reconciles the results.
 */
export async function searchWeb(query, options = {}) {
  const activeProviders = getActiveSearchProviders();
  if (activeProviders.length === 0) {
    return {
      items: [],
      audit: { providersExecuted: [], successfulProviders: [], providerCounts: {}, braveQueryAudits: [] },
    };
  }

  logger.debug(`Executing concurrent web searches across ${activeProviders.length} providers: [${activeProviders.join(', ')}]`);

  // Fan out concurrently across all active providers
  const searchTasks = activeProviders.map(provider => {
    switch (provider) {
      case 'gemini':
        return searchGemini(query, options.feature, options).then(items => ({ provider, items }));
      case 'brave':
        // Brave is the only provider that plans multiple queries, so it also
        // reports which ones it ran.
        return searchBrave(query, options).then(res => ({ provider, items: res.items, queryAudits: res.queryAudits }));
      case 'google':
        return searchGoogle(query, options).then(items => ({ provider, items }));
      default:
        return Promise.resolve({ provider, items: [] });
    }
  });


  const settled = await Promise.allSettled(searchTasks);

  // Merge and deduplicate by canonical URL, reconciling multi-provider findings
  const mergedMap = new Map();
  const successfulProviders = [];
  const providerCounts = {};

  for (const s of settled) {
    if (s.status !== 'fulfilled' || !s.value) continue;
    const { provider, items } = s.value;
    providerCounts[provider] = (items || []).length;
    if (items && items.length > 0) {
      successfulProviders.push(provider);
      logger.debug(`Provider [${provider}] discovered ${items.length} candidate(s)`);
    }

    for (const item of items || []) {
      const canonical = cleanUrl(item.url);
      if (!canonical) continue;

      if (!mergedMap.has(canonical)) {
        mergedMap.set(canonical, {
          ...item,
          url: canonical,
          providers: [provider],
          sources: [item.source],
          searchConsensusCount: 1,
        });
      } else {
        const existing = mergedMap.get(canonical);
        if (!existing.providers.includes(provider)) {
          existing.providers.push(provider);
          existing.sources.push(item.source);
          existing.source = existing.sources.join(' + ');
          existing.searchConsensusCount++;
        }
        if ((!existing.snippet || existing.snippet.length < 50) && item.snippet) {
          existing.snippet = item.snippet;
        }
      }
    }
  }

  const braveResult = settled.find(s => s.status === 'fulfilled' && s.value?.provider === 'brave');

  return {
    items: Array.from(mergedMap.values()),
    audit: {
      providersExecuted: activeProviders,
      successfulProviders,
      providerCounts,
      braveQueryAudits: braveResult?.value?.queryAudits || [],
    },
  };
}
