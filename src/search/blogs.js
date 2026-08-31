import { logger } from '../logger.js';
import { cleanUrl, extractDomain } from './web.js';
import { extractTechnicalAnchors } from './verifier.js';

const cache = new Map();

/**
 * Searches dev.to public developer articles for community posts and tutorials,
 * filtering candidates against technical feature anchors to avoid returning
 * unrelated global feed posts.
 */
export async function searchDevToBlogs(feature) {
  const query = feature.name;
  if (!query) return [];

  const cacheKey = `devto_${query.toLowerCase()}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  const nameLower = query.toLowerCase();
  const anchors = extractTechnicalAnchors(feature);

  // Determine appropriate tag if applicable to expand candidate pool
  let tag = '';
  if (nameLower.includes('css') || nameLower.includes('style')) tag = 'css';
  else if (nameLower.includes('webgpu') || nameLower.includes('canvas')) tag = 'webgl';
  else if (nameLower.includes('wasm') || nameLower.includes('webassembly')) tag = 'webassembly';
  else if (nameLower.includes('api') || nameLower.includes('javascript') || nameLower.includes('js')) tag = 'javascript';

  const endpoints = [
    `https://dev.to/api/articles?q=${encodeURIComponent(query)}&per_page=12`,
  ];
  if (tag) {
    endpoints.push(`https://dev.to/api/articles?tag=${tag}&per_page=15`);
  }

  const seenUrls = new Set();
  const matchedArticles = [];

  for (const endpoint of endpoints) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 4500);

      const res = await fetch(endpoint, {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
        },
      });
      clearTimeout(timer);

      if (!res.ok) continue;

      const items = await res.json();
      if (!Array.isArray(items)) continue;

      for (const item of items) {
        const artUrl = cleanUrl(item.url);
        if (!artUrl || seenUrls.has(artUrl)) continue;

        const text = `${item.title || ''} ${item.description || ''} ${(item.tag_list || []).join(' ')}`.toLowerCase();

        // Check if article actually relates to the feature
        const matchesName = text.includes(nameLower);
        const matchedAnchor = anchors.some(a => a.length >= 4 && text.includes(a));

        if (matchesName || matchedAnchor) {
          seenUrls.add(artUrl);
          matchedArticles.push({
            source: 'Dev.to Community',
            type: 'article',
            isBlog: true,
            title: item.title,
            url: artUrl,
            domain: 'dev.to',
            author: item.user?.name || item.user?.username || null,
            publishedAt: item.readable_publish_date || item.published_at || null,
            snippet: item.description || '',
            tags: item.tag_list || [],
            points: item.public_reactions_count || 0,
          });
        }
      }
    } catch (err) {
      logger.debug(`[Ecosystem Blogs] Dev.to fetch error: ${err.message}`);
    }
  }

  if (matchedArticles.length > 0) {
    logger.debug(`[Ecosystem Blogs] Found ${matchedArticles.length} Dev.to candidate article(s) for "${query}"`);
  }

  cache.set(cacheKey, matchedArticles);
  return matchedArticles;
}
