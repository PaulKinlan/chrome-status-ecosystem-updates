import { config } from '../config.js';
import { logger } from '../logger.js';

const cache = new Map();

/**
 * Searches Twitter / X for developer feedback, announcements, and sentiment
 * when TWITTER_BEARER_TOKEN or TWITTER_API_KEY is configured.
 */
export async function searchTwitter(feature) {
  const token = config.twitterBearerToken || config.twitterApiKey;
  if (!token) return [];

  const query = `"${feature.name}" -is:retweet lang:en`;
  const cacheKey = `twitter_${query}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  try {
    const url = new URL('https://api.twitter.com/2/tweets/search/recent');
    url.searchParams.set('query', query);
    url.searchParams.set('max_results', '10');
    url.searchParams.set('tweet.fields', 'public_metrics,created_at,author_id');

    const res = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
      },
    });

    if (!res.ok) {
      logger.debug(`[Twitter] API returned HTTP ${res.status}`);
      return [];
    }

    const data = await res.json();
    const tweets = (data.data || []).map(t => ({
      source: 'Twitter / X',
      type: 'discussion',
      id: t.id,
      title: t.text.slice(0, 100).replace(/\r?\n/g, ' '),
      content: t.text,
      url: `https://twitter.com/i/web/status/${t.id}`,
      points: (t.public_metrics?.like_count || 0) + (t.public_metrics?.retweet_count || 0),
      commentsCount: t.public_metrics?.reply_count || 0,
      createdAt: t.created_at,
    }));

    logger.debug(`[Twitter] Discovered ${tweets.length} tweet(s) for "${feature.name}"`);
    cache.set(cacheKey, tweets);
    return tweets;
  } catch (err) {
    logger.debug(`[Twitter] Search error: ${err.message}`);
    return [];
  }
}
