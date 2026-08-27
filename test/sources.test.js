import test from 'node:test';
import assert from 'node:assert';
import { searchBaseline } from '../src/search/baseline.js';
import { searchMdn } from '../src/search/mdn.js';
import { searchEngineBugzillas } from '../src/search/bugzilla.js';
import { searchTwitter } from '../src/search/twitter.js';
import { searchDevToBlogs } from '../src/search/blogs.js';

test('searchBaseline queries webstatus.dev API without throwing', async () => {
  const result = await searchBaseline({ name: 'Web Install API' });
  // Result can be null or an object with status
  if (result) {
    assert.ok(result.status, 'Has baseline status');
    assert.ok(result.url, 'Has webstatus URL');
  }
});

test('searchMdn queries developer.mozilla.org without throwing', async () => {
  const results = await searchMdn({ name: 'Web Cryptography API' });
  assert.ok(Array.isArray(results), 'Returns an array of results');
});

test('searchEngineBugzillas queries Mozilla and WebKit without throwing', async () => {
  const results = await searchEngineBugzillas({ name: 'WebSocket' });
  assert.ok(Array.isArray(results), 'Returns an array of bug items');
});

test('searchTwitter gracefully returns empty array when no token is set', async () => {
  const results = await searchTwitter({ name: 'Web Install API' });
  assert.deepStrictEqual(results, []);
});

test('searchDevToBlogs queries dev.to API without throwing', async () => {
  const results = await searchDevToBlogs({ name: 'Web Install API' });
  assert.ok(Array.isArray(results), 'Returns an array of blog articles');
});
