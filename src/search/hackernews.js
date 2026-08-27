import { fetchHackerNewsItemDetails } from './content-fetcher.js';

/**
 * Hacker News Algolia Search API client (Free, public, no authentication required)
 */
export async function searchHackerNews(query, options = {}) {
  const { limit = 8, minPoints = 1 } = options;
  const results = [];

  try {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://hn.algolia.com/api/v1/search?query=${encodedQuery}&tags=story&hitsPerPage=${limit}`;

    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
      },
    });

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    const hits = data.hits || [];

    for (const hit of hits) {
      const points = hit.points || 0;
      if (points < minPoints && hits.length > 3) continue;

      // Fetch top comments to inspect actual developer discussion content
      const itemDetails = await fetchHackerNewsItemDetails(hit.objectID);
      const topComments = itemDetails?.topComments || [];

      results.push({
        source: 'Hacker News',
        type: 'discussion',
        title: hit.title,
        url: hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`,
        discussionUrl: `https://news.ycombinator.com/item?id=${hit.objectID}`,
        points: hit.points || 0,
        commentsCount: hit.num_comments || 0,
        publishedAt: hit.created_at,
        snippet: hit.story_text ? hit.story_text.slice(0, 300) : (topComments[0] || ''),
        topComments,
      });
    }
  } catch {
    // Graceful degradation on network timeout
  }

  return results;
}
