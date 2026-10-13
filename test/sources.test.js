import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import { searchBaseline } from '../src/search/baseline.js';
import { searchMdn } from '../src/search/mdn.js';
import { searchEngineBugzillas } from '../src/search/bugzilla.js';
import { searchTwitter } from '../src/search/twitter.js';
import { searchDevToBlogs } from '../src/search/blogs.js';
import { isNewItem } from '../src/storage/seen.js';
import { config } from '../src/config.js';
import { installFetchMock } from './_support/fetch-mock.js';

test('searchBaseline parses webstatus.dev API response shape correctly', async (t) => {
  const { restore } = installFetchMock([
    {
      match: 'api.webstatus.dev/v1/features',
      json: {
        data: [{
          baseline: { low_date: '2026-05-11', status: 'newly' },
          browser_implementations: {
            chrome: { version: '140' },
            firefox: { version: '145' },
            safari: { version: '26.5' }
          },
          feature_id: 'toggleevent-source',
          name: 'ToggleEvent source',
          spec: { links: [{ link: 'https://html.spec.whatwg.org/...' }] }
        }]
      }
    }
  ]);
  t.after(restore);

  const result = await searchBaseline({ name: 'ToggleEvent source' });
  assert.ok(result, 'Expected a match');
  assert.strictEqual(result.status, 'newly');
  assert.strictEqual(result.url, 'https://webstatus.dev/features/toggleevent-source');
});

test('searchMdn parses developer.mozilla.org response shape correctly', async (t) => {
  const { restore } = installFetchMock([
    {
      match: 'developer.mozilla.org/api/v1/search',
      json: {
        documents: [{
          title: 'Web Cryptography API',
          mdn_url: '/en-US/docs/Web/API/Web_Cryptography_API',
          summary: 'The Web Cryptography API provides...'
        }]
      }
    }
  ]);
  t.after(restore);

  const results = await searchMdn({ name: 'Web Cryptography API' });
  assert.ok(Array.isArray(results), 'Returns an array of results');
  assert.strictEqual(results.length, 1);
  assert.strictEqual(results[0].title, 'Web Cryptography API');
  assert.strictEqual(results[0].url, 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Cryptography_API');
  assert.strictEqual(results[0].snippet, 'The Web Cryptography API provides...');
});

test('searchEngineBugzillas parses Bugzilla response shape correctly', async (t) => {
  const { restore, calls } = installFetchMock([
    {
      match: /bugzilla\.mozilla\.org/,
      json: {
        bugs: [{
          id: 123, summary: 'Mozilla Bug', status: 'NEW', resolution: '', last_change_time: '2026-01-01T00:00:00Z'
        }]
      }
    },
    {
      match: /bugs\.webkit\.org/,
      json: {
        bugs: [{
          id: 456, summary: 'WebKit Bug', status: 'RESOLVED', resolution: 'FIXED', last_change_time: '2026-01-02T00:00:00Z'
        }]
      }
    }
  ]);
  t.after(restore);

  const results = await searchEngineBugzillas({ name: 'WebSocket' });
  assert.ok(Array.isArray(results), 'Returns an array of bug items');
  assert.strictEqual(results.length, 2);
  
  const moz = results.find(r => r.url.includes('bugzilla.mozilla.org'));
  assert.ok(moz);
  assert.strictEqual(moz.title, 'Mozilla Bug');
  assert.strictEqual(moz.vendor, 'Mozilla (Gecko)');

  const wk = results.find(r => r.url.includes('bugs.webkit.org'));
  assert.ok(wk);
  assert.strictEqual(wk.title, 'WebKit Bug');
});

test('searchTwitter returns an empty result with audit info when no token is set', async (t) => {
  // Explicit rather than relying on the environment: with TWITTER_BEARER_TOKEN
  // exported, this test used to make a real authenticated call to api.twitter.com.
  const originalToken = config.twitterBearerToken;
  config.twitterBearerToken = '';
  const { restore, calls } = installFetchMock([]);
  t.after(() => { restore(); config.twitterBearerToken = originalToken; });

  const { items, audit } = await searchTwitter({ name: 'Web Install API' });
  assert.ok(Array.isArray(items));
  assert.strictEqual(items.length, 0);
  assert.ok(audit, 'Reports audit info');
  assert.match(audit.status, /Inactive/);
  assert.strictEqual(calls.length, 0, 'no network request without a token');
  // The audit must be a sibling of the items, not a property hung off the
  // array: array properties do not survive spreading, which is how callers
  // merge discussion sources.
  assert.strictEqual([...items].audit, undefined);
});

test('searchDevToBlogs parses dev.to API response shape correctly', async (t) => {
  const { restore } = installFetchMock([
    {
      match: 'dev.to/api/articles',
      json: [
        {
          title: 'Understanding Web Install API',
          url: 'https://dev.to/x/y',
          description: 'A deep dive into Web Install...',
          tag_list: ['css', 'webdev'],
          user: { name: 'Alice' },
          public_reactions_count: 5
        }
      ]
    }
  ]);
  t.after(restore);

  const results = await searchDevToBlogs({ name: 'Web Install API' });
  assert.ok(Array.isArray(results), 'Returns an array of blog articles');
  assert.strictEqual(results.length, 1);
  assert.strictEqual(results[0].title, 'Understanding Web Install API');
  assert.strictEqual(results[0].url, 'https://dev.to/x/y');
  assert.strictEqual(results[0].author, 'Alice');
});

test('searchDevToBlogs keeps the ISO timestamp, so a post can be dated although dev.to\'s readable date cannot', async (t) => {
  // dev.to writes "Mar 14" for this year's posts and "Mar 14 '23" for older ones: neither has a year that can be read, so
  // before the ISO `published_at` was kept every post it had not shown before counted as news, however old it was.
  const today = '2026-10-08';
  const daysAgo = days => new Date(Date.parse(`${today}T00:00:00Z`) - days * 86_400_000).toISOString();
  const post = (slug, readable, published) => ({
    title: `Popover Hint API ${slug}`,
    url: `https://dev.to/x/${slug}`,
    description: 'About the Popover Hint API',
    tag_list: [],
    user: { username: 'alice' },
    readable_publish_date: readable,
    ...(published ? { published_at: published } : {}),
  });
  const { restore } = installFetchMock([{
    match: 'dev.to/api/articles',
    json: [
      post('old', "Mar 14 '23", '2023-03-14T10:00:00Z'),
      post('recent', 'Oct 2', daysAgo(6)),
      post('undated', 'Oct 3', null),
    ],
  }]);
  t.after(restore);

  const results = await searchDevToBlogs({ name: 'Popover Hint API' });
  const bySlug = Object.fromEntries(results.map(result => [result.url.split('/').pop(), result]));

  // What a reader sees is unchanged: the readable date.
  assert.strictEqual(bySlug.old.publishedAt, "Mar 14 '23");
  assert.strictEqual(bySlug.old.createdAt, '2023-03-14T10:00:00Z');
  assert.strictEqual(bySlug.undated.createdAt, null, 'a post without a timestamp has none to offer');

  const nobody = new Map();
  assert.strictEqual(isNewItem(nobody, bySlug.old, today), false, 'a three-year-old post is not news');
  assert.strictEqual(isNewItem(nobody, bySlug.recent, today), true, 'last week\'s post is');
  assert.strictEqual(isNewItem(nobody, bySlug.undated, today), true, 'a post that does not say when it was written counts once');
});
