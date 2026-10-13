import { config } from '../config.js';
import { callGeminiWithSearchGrounding } from './gemini-grounding.js';
import { logger } from '../logger.js';
import { fetchWithTimeout } from '../http.js';
import { cleanUrl, extractDomain, canonicalUrl } from './urls.js';
import { isHostnameTitle } from './articles.js';

// These two used to be defined here and are still imported from this module in many places.
export { cleanUrl, extractDomain };

/**
 * Reads a link to a single tweet: a `/<user>/status/<id>` path on twitter.com or
 * x.com (or one of their subdomains, such as mobile.twitter.com). Anything else
 * returns null.
 *
 * Tweets used to be recognised by `url.includes('x.com')`, which also matched
 * 3cx.com, linux.com and dropbox.com, and `includes('twitter.com')`, which
 * matched help.twitter.com's documentation: 12 of the 99 "tweets" in one weekly
 * report were not tweets at all.
 *
 * @returns {{author: string, id: string}|null}
 */
export function parseTweetUrl(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }
  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return null;
  const host = parsed.hostname; // already lower-case: the URL parser normalises it
  const isTwitter = ['twitter.com', 'x.com'].some(domain => host === domain || host.endsWith(`.${domain}`));
  if (!isTwitter) return null;
  // Handles are at most 15 characters of letters, digits and underscores.
  const match = parsed.pathname.match(/^\/([A-Za-z0-9_]{1,15})\/status\/(\d+)(?:\/|$)/);
  return match ? { author: match[1], id: match[2] } : null;
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

    const result = await callGeminiWithSearchGrounding(prompt, { temperature: 0.1, stage: 'gemini/search' });
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
        const display = cleanUrl(item.url);
        const key = canonicalUrl(item.url);
        if (display && !seenUrls.has(key)) {
          seenUrls.add(key);
          allItems.push({ ...item, url: display });
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
      const display = cleanUrl(item.url);
      if (!display) continue;
      // One entry per page: another provider's spelling of the same page (http
      // against https, with or without www.) is a second vote for it, not a second result.
      const key = canonicalUrl(item.url);

      if (!mergedMap.has(key)) {
        mergedMap.set(key, {
          ...item,
          url: display,
          providers: [provider],
          sources: [item.source],
          searchConsensusCount: 1,
        });
      } else {
        const existing = mergedMap.get(key);
        if (!existing.providers.includes(provider)) {
          existing.providers.push(provider);
          existing.sources.push(item.source);
          existing.source = existing.sources.join(' + ');
          existing.searchConsensusCount++;
        }
        if ((!existing.snippet || existing.snippet.length < 50) && item.snippet) {
          existing.snippet = item.snippet;
        }
        // A provider that only names the site (Gemini's grounding does) gives way to one that says what the page is.
        if (isHostnameTitle(existing.title) && item.title && !isHostnameTitle(item.title)) {
          existing.title = item.title;
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
