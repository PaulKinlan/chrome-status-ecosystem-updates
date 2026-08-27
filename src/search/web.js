import { config } from '../config.js';
import { callGeminiWithSearchGrounding } from './gemini-grounding.js';
import { logger } from '../logger.js';

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
 * Searches the web using Brave Search API
 */
async function searchBrave(query, options = {}) {
  if (!config.braveSearchApiKey) return [];
  try {
    const url = new URL('https://api.search.brave.com/res/v1/web/search');
    url.searchParams.set('q', query);
    url.searchParams.set('count', String(options.limit || 8));

    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'X-Subscription-Token': config.braveSearchApiKey,
      },
    });
    if (!res.ok) {
      logger.debug(`Brave search failed with status ${res.status}`);
      return [];
    }
    const data = await res.json();
    return (data.web?.results || []).map(r => ({
      source: 'Brave Search',
      type: 'article',
      title: r.title,
      url: r.url,
      snippet: r.description || '',
      publishedAt: r.page_age || null,
      domain: extractDomain(r.url),
    }));
  } catch (err) {
    logger.debug(`Brave search error: ${err.message}`);
    return [];
  }
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

    const res = await fetch(url);
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
 * Searches the web using Tavily AI Search
 */
async function searchTavily(query, options = {}) {
  if (!config.tavilyApiKey) return [];
  try {
    const res = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: config.tavilyApiKey,
        query,
        search_depth: 'advanced',
        include_answer: false,
        max_results: options.limit || 8,
      }),
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.results || []).map(r => ({
      source: 'Tavily Search',
      type: 'article',
      title: r.title,
      url: r.url,
      snippet: r.content || '',
      publishedAt: r.published_date || null,
      domain: extractDomain(r.url),
    }));
  } catch (err) {
    logger.debug(`Tavily search error: ${err.message}`);
    return [];
  }
}

/**
 * Searches the web using Serper.dev
 */
async function searchSerper(query, options = {}) {
  if (!config.serperApiKey) return [];
  try {
    const res = await fetch('https://google.serper.dev/search', {
      method: 'POST',
      headers: {
        'X-API-KEY': config.serperApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: query,
        num: options.limit || 8,
      }),
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.organic || []).map(r => ({
      source: 'Google (via Serper)',
      type: 'article',
      title: r.title,
      url: r.link,
      snippet: r.snippet || '',
      publishedAt: r.date || null,
      domain: extractDomain(r.link),
    }));
  } catch (err) {
    logger.debug(`Serper search error: ${err.message}`);
    return [];
  }
}

/**
 * Determines all active search providers based on configuration and available API keys.
 * Maximizes breadth by enabling all configured search engines concurrently.
 */
export function getActiveSearchProviders() {
  const mode = (config.searchProvider || 'auto').toLowerCase();

  // If user explicitly configured a single provider that isn't 'auto', 'all', or 'multi'
  if (mode !== 'auto' && mode !== 'all' && mode !== 'multi') {
    return [mode];
  }

  const providers = [];
  if (config.geminiApiKey) {
    providers.push('gemini');
  }
  if (config.braveSearchApiKey) {
    providers.push('brave');
  }
  if (config.googleSearchApiKey && config.googleSearchCx) {
    providers.push('google');
  }
  if (config.tavilyApiKey) {
    providers.push('tavily');
  }
  if (config.serperApiKey) {
    providers.push('serper');
  }

  return providers;
}

/**
 * Multi-provider web search runner that queries ALL configured search engines
 * concurrently for maximum ecosystem breadth and reconciles the results.
 */
export async function searchWeb(query, options = {}) {
  const activeProviders = getActiveSearchProviders();
  if (activeProviders.length === 0) {
    return [];
  }

  logger.debug(`Executing concurrent web searches across ${activeProviders.length} providers: [${activeProviders.join(', ')}]`);

  // Fan out concurrently across all active providers
  const searchTasks = activeProviders.map(provider => {
    switch (provider) {
      case 'gemini':
        return searchGemini(query, options.feature, options).then(items => ({ provider, items }));
      case 'brave':
        return searchBrave(query, options).then(items => ({ provider, items }));
      case 'google':
        return searchGoogle(query, options).then(items => ({ provider, items }));
      case 'tavily':
        return searchTavily(query, options).then(items => ({ provider, items }));
      case 'serper':
        return searchSerper(query, options).then(items => ({ provider, items }));
      default:
        return Promise.resolve({ provider, items: [] });
    }
  });

  const settled = await Promise.allSettled(searchTasks);

  // Merge and deduplicate by canonical URL, reconciling multi-provider findings
  const mergedMap = new Map();
  const successfulProviders = [];

  for (const s of settled) {
    if (s.status !== 'fulfilled' || !s.value) continue;
    const { provider, items } = s.value;
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

  const allArticles = Array.from(mergedMap.values());
  allArticles.providersExecuted = activeProviders;
  allArticles.successfulProviders = successfulProviders;

  return allArticles;
}
