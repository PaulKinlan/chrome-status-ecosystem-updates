import { fetchHackerNewsItemDetails } from './content-fetcher.js';
import { fetchWithTimeout, mapWithConcurrency } from '../http.js';

/** Item lookups in flight at once: a handful, so one search is quick without stampeding the API. */
const ITEM_FETCH_CONCURRENCY = 4;

/**
 * Hacker News Algolia Search API client (Free, public, no authentication required)
 */
export async function searchHackerNews(query, options = {}) {
  const { limit = 8, minPoints = 1 } = options;
  const results = [];

  try {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://hn.algolia.com/api/v1/search?query=${encodedQuery}&tags=story&hitsPerPage=${limit}`;

    const res = await fetchWithTimeout(url, {
      label: 'Hacker News',
      timeoutMs: 8_000,
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

    const selected = hits.filter(hit => !((hit.points || 0) < minPoints && hits.length > 3));

    // Fetch top comments to inspect actual developer discussion content. The lookups used to run one
    // after another, eight round trips in a row; the results keep the order of the hits.
    const lookups = await mapWithConcurrency(selected, ITEM_FETCH_CONCURRENCY, hit => fetchHackerNewsItemDetails(hit.objectID));

    for (const [index, hit] of selected.entries()) {
      const topComments = lookups[index]?.value?.topComments || [];

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
