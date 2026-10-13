import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import { searchHackerNews } from '../src/search/hackernews.js';
import { parseTweetUrl } from '../src/search/web.js';
import { getGitHubHeaders } from '../src/search/content-fetcher.js';
import { config } from '../src/config.js';
import { makeResponse } from './_support/fetch-mock.js';

/**
 * Hacker News search: one search request, then one item lookup per story for
 * its top comments. The lookups used to run one after another.
 */

/** A Hacker News whose item lookups take `delay` ms, and a record of how many ran at once. */
function installHackerNews(t, { hits, items = {}, delay = 20 }) {
  const original = globalThis.fetch;
  const stats = { inFlight: 0, maxInFlight: 0, itemRequests: [] };

  globalThis.fetch = async (input) => {
    const url = String(input);
    if (url.includes('/api/v1/search')) return makeResponse({ json: { hits } });

    const id = /\/items\/(\d+)/.exec(url)?.[1];
    stats.itemRequests.push(id);
    stats.inFlight++;
    stats.maxInFlight = Math.max(stats.maxInFlight, stats.inFlight);
    try {
      await new Promise(resolve => setTimeout(resolve, delay));
      return items[id] ? makeResponse({ json: items[id] }) : makeResponse({ status: 404, text: 'gone' });
    } finally {
      stats.inFlight--;
    }
  };
  t.after(() => {
    globalThis.fetch = original;
  });
  return stats;
}

const hit = (id, extra = {}) => ({ objectID: String(id), title: `Story ${id}`, url: `https://example.com/story-${id}`, points: 10, num_comments: 2, created_at: '2026-10-01T00:00:00Z', ...extra });
const item = (...comments) => ({ title: 'x', points: 10, children: comments.map(text => ({ text: `<p>${text}</p>` })) });

test('item lookups overlap, a few at a time, and the results keep the order of the hits', async (t) => {
  const ids = [9101, 9102, 9103, 9104, 9105, 9106, 9107, 9108];
  const stats = installHackerNews(t, {
    hits: ids.map(id => hit(id)),
    items: Object.fromEntries(ids.map(id => [id, item(`first comment on ${id}`)])),
  });

  const results = await searchHackerNews('overlapping lookups');

  assert.deepStrictEqual(results.map(r => r.title), ids.map(id => `Story ${id}`));
  assert.deepStrictEqual(results.map(r => r.topComments[0]), ids.map(id => `first comment on ${id}`));
  assert.strictEqual(stats.itemRequests.length, 8);
  assert.ok(stats.maxInFlight > 1, `lookups ran one at a time (max ${stats.maxInFlight} in flight)`);
  assert.ok(stats.maxInFlight <= 4, `${stats.maxInFlight} lookups ran at once; the limit is 4`);
});

test('a story whose lookup fails is still reported, just without comments', async (t) => {
  installHackerNews(t, {
    hits: [hit(9201), hit(9202), hit(9203)],
    items: { 9201: item('kept comment'), 9203: item('also kept') },
  });

  const results = await searchHackerNews('one lookup fails');

  assert.deepStrictEqual(results.map(r => r.topComments), [['kept comment'], [], ['also kept']]);
  assert.deepStrictEqual(results.map(r => r.snippet), ['kept comment', '', 'also kept']);
  assert.strictEqual(results[1].discussionUrl, 'https://news.ycombinator.com/item?id=9202');
});

test('stories below the point threshold are skipped, and are not looked up, unless there are only a few hits', async (t) => {
  const many = installHackerNews(t, {
    hits: [hit(9301, { points: 0 }), hit(9302), hit(9303), hit(9304)],
    items: { 9302: item('a'), 9303: item('b'), 9304: item('c') },
  });

  const results = await searchHackerNews('threshold with many hits');
  assert.deepStrictEqual(results.map(r => r.title), ['Story 9302', 'Story 9303', 'Story 9304']);
  assert.deepStrictEqual(many.itemRequests.sort(), ['9302', '9303', '9304']);
});

test('with three hits or fewer even an unpopular story is kept', async (t) => {
  installHackerNews(t, { hits: [hit(9401, { points: 0 }), hit(9402)], items: { 9401: item('a'), 9402: item('b') } });

  const results = await searchHackerNews('threshold with few hits');
  assert.deepStrictEqual(results.map(r => r.title), ['Story 9401', 'Story 9402']);
});

test('a story without an external link points at its own discussion page', async (t) => {
  installHackerNews(t, { hits: [hit(9501, { url: null })], items: { 9501: item('c') } });

  const [result] = await searchHackerNews('ask hn');
  assert.strictEqual(result.url, 'https://news.ycombinator.com/item?id=9501');
});

test('a failed search is an empty result, not an error', async (t) => {
  const original = globalThis.fetch;
  globalThis.fetch = async () => makeResponse({ status: 404, text: 'nope' });
  t.after(() => {
    globalThis.fetch = original;
  });

  assert.deepStrictEqual(await searchHackerNews('nothing'), []);
});

// --- tweet permalinks ----------------------------------------------------------

test('parseTweetUrl accepts a tweet permalink on twitter.com, x.com and their subdomains', () => {
  const expected = { author: 'eve', id: '555' };
  for (const url of [
    'https://twitter.com/eve/status/555',
    'https://x.com/eve/status/555',
    'https://www.twitter.com/eve/status/555',
    'https://mobile.twitter.com/eve/status/555',
    'http://x.com/eve/status/555',
    'https://X.COM/eve/status/555',
    'https://x.com/eve/status/555/',
    'https://x.com/eve/status/555?s=20&t=abc',
    'https://x.com/eve/status/555/photo/1',
  ]) {
    assert.deepStrictEqual(parseTweetUrl(url), expected, url);
  }
  assert.deepStrictEqual(parseTweetUrl('https://x.com/Under_score_9/status/12'), { author: 'Under_score_9', id: '12' });
});

test('parseTweetUrl rejects look-alike hosts, other pages on the real hosts, and things that are not URLs', () => {
  for (const url of [
    'https://www.3cx.com/eve/status/555', // ends in "x.com" without being x.com
    'https://linux.com/eve/status/555',
    'https://dropbox.com/eve/status/555',
    'https://nottwitter.com/eve/status/555',
    'https://twitter.com.evil.example/eve/status/555',
    'https://evil.example/twitter.com/eve/status/555',
    'https://evil.example/?u=https://x.com/eve/status/555',
    'https://x.com/eve', // a profile
    'https://x.com/eve/status/', // no id
    'https://x.com/eve/status/abc', // not a number
    'https://x.com/eve/status/555abc',
    'https://x.com/search?q=status/555',
    'https://x.com/this_handle_is_far_too_long/status/555',
    'https://x.com/foo/bar/someone/status/555', // the handle is the first path segment, not any segment
    'https://x.com//status/555', // no handle
    'https://x.com/some-one/status/555', // a hyphen is not a handle character
    'https://x.com/jo%20hn/status/555', // nor is an escape
    'https://help.twitter.com/en/using-x/notifications',
    'ftp://x.com/eve/status/555',
    'javascript:alert(1)',
    'not a url',
    '',
    null,
    undefined,
  ]) {
    assert.strictEqual(parseTweetUrl(url), null, String(url));
  }
});

// --- GitHub headers --------------------------------------------------------------

test('getGitHubHeaders is shared, and authenticates only when a token is configured', (t) => {
  const saved = config.githubToken;
  t.after(() => {
    config.githubToken = saved;
  });

  config.githubToken = '';
  assert.deepStrictEqual(getGitHubHeaders(), {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'chrome-status-ecosystem-tracker/1.0',
  });

  config.githubToken = 'ghp_test';
  assert.strictEqual(getGitHubHeaders().Authorization, 'Bearer ghp_test');
});
