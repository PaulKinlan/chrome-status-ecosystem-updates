import test from 'node:test';
import assert from 'node:assert';
import {
  stripXSSIPrefix,
  slugify,
  generateSearchTerms,
  normalizeFeature,
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
