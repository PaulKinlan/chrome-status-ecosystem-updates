import { config } from '../config.js';
import { callGeminiWithSearchGrounding } from './gemini-grounding.js';

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
  } catch {
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
  } catch {
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
    if (!res.ok) return [];
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
  } catch {
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
    if (!res.ok) return [];
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
  } catch {
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
  } catch {
    return [];
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
 * General web search runner that selects configured provider.
 * Supports Gemini Google Search Grounding natively when GEMINI_API_KEY is configured.
 */
export async function searchWeb(query, options = {}) {
  const provider = (config.searchProvider || 'auto').toLowerCase();

  // 1. If Gemini is requested or in auto mode with Gemini API key, use Gemini Google Search Grounding
  if (provider === 'gemini' || (provider === 'auto' && config.geminiApiKey)) {
    const results = await searchGemini(query, options.feature, options);
    if (results.length > 0) return results;
  }

  // 2. Tavily Search
  if (provider === 'tavily' || (provider === 'auto' && config.tavilyApiKey)) {
    const results = await searchTavily(query, options);
    if (results.length > 0) return results;
  }

  // 3. Google Custom Search
  if (provider === 'google' || (provider === 'auto' && config.googleSearchApiKey)) {
    const results = await searchGoogle(query, options);
    if (results.length > 0) return results;
  }

  // 4. Brave Search
  if (provider === 'brave' || (provider === 'auto' && config.braveSearchApiKey)) {
    const results = await searchBrave(query, options);
    if (results.length > 0) return results;
  }

  // 5. Serper Search
  if (provider === 'serper' || (provider === 'auto' && config.serperApiKey)) {
    const results = await searchSerper(query, options);
    if (results.length > 0) return results;
  }

  return [];
}
