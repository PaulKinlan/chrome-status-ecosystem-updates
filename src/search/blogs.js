import { logger } from '../logger.js';
import { cleanUrl, extractDomain } from './web.js';
import { fetchArticleExcerpt } from './content-fetcher.js';

const cache = new Map();

/**
 * Searches dev.to public developer articles for community posts and tutorials
 */
export async function searchDevToBlogs(feature) {
  const query = feature.name;
  if (!query) return [];

  const cacheKey = `devto_${query.toLowerCase()}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  try {
    const url = `https://dev.to/api/articles?q=${encodeURIComponent(query)}&per_page=8`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4500);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
      },
    });
    clearTimeout(timer);

    if (!res.ok) return [];

    const items = await res.json();
    if (!Array.isArray(items)) return [];

    const articles = [];
    for (const item of items) {
      const artUrl = cleanUrl(item.url);
      if (!artUrl) continue;

      const excerpt = item.description || '';
      articles.push({
        source: 'Dev.to Community',
        type: 'article',
        isBlog: true,
        title: item.title,
        url: artUrl,
        domain: 'dev.to',
        author: item.user?.name || item.user?.username || null,
        publishedAt: item.readable_publish_date || item.published_at || null,
        snippet: excerpt,
        tags: item.tag_list || [],
        points: item.public_reactions_count || 0,
      });
    }

    if (articles.length > 0) {
      logger.debug(`[Ecosystem Blogs] Found ${articles.length} Dev.to candidate article(s) for "${query}"`);
    }

    cache.set(cacheKey, articles);
    return articles;
  } catch (err) {
    logger.debug(`[Ecosystem Blogs] Dev.to search error: ${err.message}`);
    return [];
  }
}
