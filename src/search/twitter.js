import { config, TWITTER_TOKEN_VARIABLES } from '../config.js';
import { logger } from '../logger.js';
import { fetchWithTimeout } from '../http.js';

const cache = new Map();

/**
 * Characters that X's search grammar treats as operators, grouping or
 * mentions. None carry meaning in a feature title, but any of them can make
 * the API reject the whole query: "Use scroll-snap-type: pair ..." reached the
 * API as an operator called `scroll-snap-type`, and HTTP 400 followed. That
 * hit 11 of 87 features in the W41 report, every one with a colon in its name.
 */
const OPERATOR_CHARS = /[`"'()[\]{}:;,@#$%^&*<>\\|~!?=+]/g;

/** X rejects recent-search queries over 512 characters; stay comfortably under. */
const MAX_QUERY_LENGTH = 480;

/** Web globals whose members are worth searching for verbatim. */
const IDL_GLOBALS = 'navigator|window|document|globalThis|self|CSS|Intl|crypto|performance|screen|history|location|navigation|scheduler|visualViewport|speechSynthesis|trustedTypes|customElements|indexedDB|caches|cookieStore';

/** Suffixes that make `a.b` a hostname or file name rather than an API member. */
const NOT_AN_API_MEMBER = new Set([
  'com', 'org', 'net', 'io', 'dev', 'app', 'google', 'html', 'htm', 'js', 'mjs', 'css',
  'json', 'md', 'txt', 'xml', 'png', 'jpg', 'svg', 'pdf', 'git', 'gov', 'edu', 'co', 'ai',
]);

/** Strips everything X could interpret as syntax, leaving plain words. */
export function sanitizeQueryText(text) {
  return String(text || '').replace(OPERATOR_CHARS, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Finds a WebIDL-style anchor (`navigator.install`, `CSS.supports`) in a
 * feature summary. Only code spans, call expressions and well-known globals
 * qualify. The old rule accepted the first `word.word` anywhere in the text,
 * which produced junk anchors such as `transitions.It` (a missing space after
 * a full stop) and `privacysandbox.google` (a hostname).
 */
export function extractIdlAnchor(summary) {
  const text = String(summary || '');
  const patterns = [
    /`([A-Za-z_]\w*(?:\.[A-Za-z_]\w*)+)(?:\(\))?`/g,
    /\b([A-Za-z_]\w*\.[A-Za-z_]\w*)\(/g,
    new RegExp(`\\b((?:${IDL_GLOBALS})\\.[A-Za-z_]\\w*)`, 'g'),
  ];
  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      const parts = match[1].split('.');
      const member = parts[parts.length - 1].toLowerCase();
      if (parts[0].length > 1 && !NOT_AN_API_MEMBER.has(member)) return match[1];
    }
  }
  return null;
}

/**
 * Builds the recent-search query for a feature, or null when there is nothing
 * usable to search for. Pure so it can be unit-tested without the network.
 */
export function buildTwitterQuery(feature) {
  const cleanName = sanitizeQueryText(feature?.name).slice(0, 300);
  const compose = parts => `(${parts.join(' OR ')}) -is:retweet`;

  // Ordered most to least valuable: when the query is too long the tail goes first.
  const parts = [];
  if (cleanName) parts.push(`"${cleanName}"`);
  if (feature?.id !== undefined && /^\d+$/.test(String(feature.id))) {
    parts.push(`"chromestatus.com/feature/${feature.id}"`);
  }

  // A long name also gets a loose keyword group. It is deliberately unquoted
  // (AND semantics), so every word must be plain: a leading `-` would negate it.
  if (cleanName.length > 30) {
    const words = [...new Set(
      cleanName.split(' ')
        .map(w => w.replace(/^[-.]+|[-.]+$/g, ''))
        .filter(w => w.length >= 4 && /^\w[\w.-]*$/.test(w))
    )];
    if (words.length >= 2) parts.push(`(${words.slice(0, 3).join(' ')})`);
  }

  const idl = extractIdlAnchor(feature?.summary);
  if (idl) parts.push(`"${idl}"`);

  while (parts.length > 1 && compose(parts).length > MAX_QUERY_LENGTH) parts.pop();
  return parts.length > 0 ? compose(parts) : null;
}

/**
 * Searches Twitter / X for developer feedback, announcements, and sentiment
 * when a Bearer Token is configured (TWITTER_BEARER_TOKEN or X_BEARER_TOKEN).
 *
 * Returns `{ items, audit }`. The audit used to be attached as a property on
 * the returned array, which meant it silently vanished the moment any caller
 * did `.filter()`, `.map()`, `[...spread]` or `JSON.stringify()` — so the
 * provider status quietly disappeared from the report's audit trail.
 */
export async function searchTwitter(feature) {
  const token = config.twitterBearerToken;
  if (!token) {
    return {
      items: [],
      audit: {
        provider: 'Twitter / X API v2',
        status: `Inactive (${TWITTER_TOKEN_VARIABLES} not configured)`,
        rawFound: 0,
        verified: 0,
      },
    };
  }

  const query = buildTwitterQuery(feature);
  if (!query) {
    return {
      items: [],
      audit: { provider: 'Twitter / X API v2', status: 'Skipped (no usable query terms)', rawFound: 0, verified: 0 },
    };
  }
  const cacheKey = `twitter_${query}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  try {
    const url = new URL('https://api.twitter.com/2/tweets/search/recent');
    url.searchParams.set('query', query);
    url.searchParams.set('max_results', '10');
    url.searchParams.set('tweet.fields', 'public_metrics,created_at,author_id');
    url.searchParams.set('expansions', 'author_id');
    url.searchParams.set('user.fields', 'username,name');

    const res = await fetchWithTimeout(url, {
      label: 'Twitter / X',
      timeoutMs: 8_000,
      headers: {
        'Authorization': `Bearer ${token}`,
        'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
      },
    });

    if (!res.ok) {
      const errorText = await res.text().catch(() => '');
      let errorMsg = `HTTP ${res.status}`;
      if (res.status === 401) {
        errorMsg = `HTTP 401 Unauthorized (Check your ${TWITTER_TOKEN_VARIABLES})`;
        logger.warn(`[Twitter / X] ${errorMsg}`);
      } else if (res.status === 403) {
        errorMsg = 'HTTP 403 Forbidden (Twitter App lacks access to /2/tweets/search/recent)';
        logger.warn(`[Twitter / X] ${errorMsg}`);
      } else if (res.status === 429) {
        errorMsg = 'HTTP 429 Rate Limit Exceeded';
        logger.warn(`[Twitter / X] ${errorMsg}`);
      } else if (res.status === 400) {
        // A rejected query used to be logged at debug level only, so an
        // operator-injection bug silently dropped the X signal for 13% of features.
        errorMsg = 'HTTP 400 Bad Request (X rejected the query)';
        logger.warn(`[Twitter / X] ${errorMsg} for "${feature.name}": ${errorText.slice(0, 200)} | query: ${query}`);
      } else {
        logger.debug(`[Twitter / X] API error HTTP ${res.status}: ${errorText}`);
      }

      return {
        items: [],
        audit: { provider: 'Twitter / X API v2', query, status: errorMsg, rawFound: 0, verified: 0 },
      };
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
    const result = {
      items: tweets,
      audit: {
        provider: 'Twitter / X API v2',
        query,
        rawFound: tweets.length,
        status: `found ${tweets.length} tweet(s)`,
      },
    };

    cache.set(cacheKey, result);
    return result;
  } catch (err) {
    logger.debug(`[Twitter / X] Search error: ${err.message}`);
    return {
      items: [],
      audit: { provider: 'Twitter / X API v2', query, status: `Error: ${err.message}`, rawFound: 0, verified: 0 },
    };
  }
}
