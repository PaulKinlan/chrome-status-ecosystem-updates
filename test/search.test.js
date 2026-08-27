import test from 'node:test';
import assert from 'node:assert';
import { extractDomain } from '../src/search/web.js';

test('extractDomain correctly parses domains without www', () => {
  assert.strictEqual(extractDomain('https://www.web.dev/articles/install'), 'web.dev');
  assert.strictEqual(extractDomain('https://developer.chrome.com/blog/'), 'developer.chrome.com');
  assert.strictEqual(extractDomain('https://github.com/WebKit/standards-positions'), 'github.com');
  assert.strictEqual(extractDomain('not-a-valid-url'), '');
});
