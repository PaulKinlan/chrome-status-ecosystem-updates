import test from 'node:test';
import assert from 'node:assert';
import {
  stripXSSIPrefix,
  slugify,
  generateSearchTerms,
  normalizeFeature,
  resolveTargetMilestones,
} from '../src/chromestatus.js';

test('stripXSSIPrefix removes )]}\' prefix correctly', () => {
  const input = ")]}'\n{\"status\": \"ok\"}";
  const output = stripXSSIPrefix(input);
  assert.strictEqual(output, '{"status": "ok"}');

  const clean = '{"status": "clean"}';
  assert.strictEqual(stripXSSIPrefix(clean), clean);
});

test('slugify generates clean URL-safe slugs', () => {
  assert.strictEqual(slugify('Web Install API'), 'web-install-api');
  assert.strictEqual(slugify('CSS Symbols() Function'), 'css-symbols-function');
  assert.strictEqual(slugify('Responsively-sized <iframe>'), 'responsively-sized-iframe');
});

test('generateSearchTerms produces contextual query variants', () => {
  const feature = {
    name: 'Web Install API',
    summary: 'Allows websites to install a web app via navigator.install().',
    blink_components: ['Blink>App'],
  };
  const terms = generateSearchTerms(feature);
  assert.ok(terms.some(t => t.includes('"Web Install API"')));
  assert.ok(terms.some(t => t.includes('navigator.install')));
});

test('normalizeFeature maps fields accurately', () => {
  const raw = {
    id: 123456789,
    name: 'Sample API',
    summary: 'A test web platform feature.',
    category: 'Enabled by default',
    browsers: {
      chrome: { status: { text: 'Shipped' } },
      ff: { view: { text: 'Positive', url: 'https://github.com/mozilla/standards-positions/issues/1' } },
      safari: { view: { text: 'Support', url: 'https://github.com/WebKit/standards-positions/issues/2' } },
    },
    standards: {
      spec: 'https://example.com/spec',
    },
  };

  const normalized = normalizeFeature(raw, 154, 'Enabled by default');
  assert.strictEqual(normalized.id, 123456789);
  assert.strictEqual(normalized.name, 'Sample API');
  assert.strictEqual(normalized.milestone, 154);
  assert.strictEqual(normalized.statusType, 'enabled');
  assert.strictEqual(normalized.specUrl, 'https://example.com/spec');
  assert.strictEqual(normalized.browsers.firefox.view, 'Positive');
  assert.strictEqual(normalized.browsers.safari.view, 'Support');
  assert.strictEqual(normalized.chromeStatusUrl, 'https://chromestatus.com/feature/123456789');
  assert.strictEqual(normalized.chromeStatusLiteUrl, 'https://chromestatuslite.com/feature/123456789');
});

test('resolveTargetMilestones parses last-N, ranges, lists, and numbers', async () => {
  // Test range
  const range = await resolveTargetMilestones('150-154');
  assert.deepStrictEqual(range, [150, 151, 152, 153, 154]);

  // Test dot range
  const dotRange = await resolveTargetMilestones('150..152');
  assert.deepStrictEqual(dotRange, [150, 151, 152]);

  // Test comma-separated list
  const list = await resolveTargetMilestones('150, 152, 154');
  assert.deepStrictEqual(list, [150, 152, 154]);

  // Test array input
  const arr = await resolveTargetMilestones([154, 150]);
  assert.deepStrictEqual(arr, [150, 154]);

  // Test last-5
  const last5 = await resolveTargetMilestones('last-5');
  assert.strictEqual(last5.length, 5);
  for (let i = 1; i < last5.length; i++) {
    assert.strictEqual(last5[i], last5[i - 1] + 1);
  }

  // Test single number <= 20 as last N
  const smallNum = await resolveTargetMilestones(3);
  assert.strictEqual(smallNum.length, 3);
  for (let i = 1; i < smallNum.length; i++) {
    assert.strictEqual(smallNum[i], smallNum[i - 1] + 1);
  }
});
