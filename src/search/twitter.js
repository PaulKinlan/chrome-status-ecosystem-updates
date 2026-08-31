import { config } from '../config.js';
import { logger } from '../logger.js';

const cache = new Map();

/**
 * Searches Twitter / X for developer feedback, announcements, and sentiment
 * when TWITTER_BEARER_TOKEN is configured.
 */
export async function searchTwitter(feature) {
  const token = config.twitterBearerToken;
  if (!token) {
    const empty = [];
    empty.audit = {
      provider: 'Twitter / X API v2',
      status: 'Inactive (TWITTER_BEARER_TOKEN not configured)',
      rawFound: 0,
      verified: 0,
    };
    return empty;
  }

  // Clean feature name to remove characters that trigger Twitter query syntax errors
  const cleanName = (feature.name || '')
    .replace(/[`"'()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const queryClauses = [];
  if (cleanName) {
    queryClauses.push(`"${cleanName}"`);
    // If name is long, also add concise technical anchor phrase
    if (cleanName.length > 30) {
      const words = cleanName.split(/\s+/).filter(w => w.length >= 4);
      if (words.length >= 2) {
        queryClauses.push(`(${words.slice(0, 3).join(' ')})`);
      }
    }
  }
  if (feature.id) {
    queryClauses.push(`"chromestatus.com/feature/${feature.id}"`);
  }

  // Optional WebIDL anchor e.g. `navigator.install` or `window.setResizable`
  const idlMatch = (feature.summary || '').match(/\b([a-zA-Z0-9_]+\.[a-zA-Z0-9_]+)\b/);
  if (idlMatch && idlMatch[1] && !idlMatch[1].endsWith('.com') && !idlMatch[1].endsWith('.org')) {
    queryClauses.push(`"${idlMatch[1]}"`);
  }

  const query = `(${queryClauses.join(' OR ')}) -is:retweet`;
  const cacheKey = `twitter_${query}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  try {
    const url = new URL('https://api.twitter.com/2/tweets/search/recent');
    url.searchParams.set('query', query);
    url.searchParams.set('max_results', '10');
    url.searchParams.set('tweet.fields', 'public_metrics,created_at,author_id');
    url.searchParams.set('expansions', 'author_id');
    url.searchParams.set('user.fields', 'username,name');

    const res = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
      },
    });

    if (!res.ok) {
      const errorText = await res.text().catch(() => '');
      let errorMsg = `HTTP ${res.status}`;
      if (res.status === 401) {
        errorMsg = 'HTTP 401 Unauthorized (Check your TWITTER_BEARER_TOKEN)';
        logger.warn(`[Twitter / X] ${errorMsg}`);
      } else if (res.status === 403) {
        errorMsg = 'HTTP 403 Forbidden (Twitter App lacks access to /2/tweets/search/recent)';
        logger.warn(`[Twitter / X] ${errorMsg}`);
      } else if (res.status === 429) {
        errorMsg = 'HTTP 429 Rate Limit Exceeded';
        logger.warn(`[Twitter / X] ${errorMsg}`);
      } else {
        logger.debug(`[Twitter / X] API error HTTP ${res.status}: ${errorText}`);
      }

      const empty = [];
      empty.audit = {
        provider: 'Twitter / X API v2',
        query,
        status: errorMsg,
        rawFound: 0,
        verified: 0,
      };
      return empty;
    }

    const data = await res.json();
    const usersMap = new Map();
    for (const u of data.includes?.users || []) {
      usersMap.set(u.id, u);
    }

    const tweets = (data.data || []).map(t => {
      const user = usersMap.get(t.author_id);
      const authorHandle = user ? `@${user.username}` : (user?.name || null);
      return {
        source: 'Twitter / X',
        type: 'discussion',
        id: t.id,
        title: t.text.slice(0, 120).replace(/\r?\n/g, ' '),
        content: t.text,
        snippet: t.text,
        author: authorHandle,
        url: user ? `https://twitter.com/${user.username}/status/${t.id}` : `https://twitter.com/i/web/status/${t.id}`,
        points: (t.public_metrics?.like_count || 0) + (t.public_metrics?.retweet_count || 0),
        commentsCount: t.public_metrics?.reply_count || 0,
        createdAt: t.created_at,
      };
    });

    logger.debug(`[Twitter / X] Discovered ${tweets.length} tweet(s) for "${feature.name}"`);
    tweets.audit = {
      provider: 'Twitter / X API v2',
      query,
      rawFound: tweets.length,
      status: `found ${tweets.length} tweet(s)`,
    };

    cache.set(cacheKey, tweets);
    return tweets;
  } catch (err) {
    logger.debug(`[Twitter / X] Search error: ${err.message}`);
    const empty = [];
    empty.audit = {
      provider: 'Twitter / X API v2',
      query,
      status: `Error: ${err.message}`,
      rawFound: 0,
      verified: 0,
    };
    return empty;
  }
}
