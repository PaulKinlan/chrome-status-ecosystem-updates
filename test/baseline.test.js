import test from 'node:test';
import assert from 'node:assert';
import { pickConfidentMatch } from '../src/search/baseline.js';

test('pickConfidentMatch returns null when querying a feature whose name does not match any result', () => {
  const feature = { name: 'popover', specUrl: '' };
  
  // Reproduction: searching 'popover' returns 'ToggleEvent source' first
  const items = [
    {
      feature_id: 'toggleevent-source',
      name: 'ToggleEvent source',
      baseline: { status: 'newly' }
    },
    {
      feature_id: 'some-other-thing',
      name: 'Some other thing',
      baseline: { status: 'limited' }
    }
  ];

  const match = pickConfidentMatch(feature, items);
  assert.strictEqual(match, null, 'Must return null, NOT the first result');
});

test('pickConfidentMatch prefers spec-URL match over name match', () => {
  const feature = {
    name: 'Popover API',
    specUrl: 'https://html.spec.whatwg.org/multipage/popover.html'
  };

  const items = [
    {
      feature_id: 'popover',
      name: 'Popover API',
      spec: { links: [{ link: 'https://html.spec.whatwg.org/multipage/popover.html' }] },
      baseline: { status: 'widely' }
    }
  ];

  const match = pickConfidentMatch(feature, items);
  assert.ok(match);
  assert.strictEqual(match.feature_id, 'popover', 'Must match');
  assert.strictEqual(match._matchedOn, 'spec URL', 'Spec match must win over name match on the same item');
});

test('pickConfidentMatch works with exact name match after punctuation normalization', () => {
  const feature = { name: 'CSS symbols()', specUrl: '' };

  const items = [
    {
      feature_id: 'css-symbols',
      name: 'CSS Symbols',
      baseline: { status: 'limited' }
    }
  ];

  const match = pickConfidentMatch(feature, items);
  assert.ok(match);
  assert.strictEqual(match.feature_id, 'css-symbols');
  assert.strictEqual(match._matchedOn, 'exact name');
});

test('pickConfidentMatch enforces length floor for name containment matches', () => {
  const feature = { name: 'CSS zoom', specUrl: '' };

  const items = [
    {
      feature_id: 'css-zoom-properties',
      name: 'CSS zoom properties',
      baseline: { status: 'newly' }
    }
  ];

  const match = pickConfidentMatch(feature, items);
  // targetName = "csszoom", length = 7. Minimum length for containment is 8.
  assert.strictEqual(match, null, 'Should not match by containment because the short generic name length is under 8');

  // Should work if name is long enough
  const feature2 = { name: 'CSS zoom properties', specUrl: '' };
  const items2 = [
    {
      feature_id: 'css-zoom-properties-api',
      name: 'CSS zoom properties API',
      baseline: { status: 'newly' }
    }
  ];
  const match2 = pickConfidentMatch(feature2, items2);
  assert.ok(match2);
  assert.strictEqual(match2._matchedOn, 'name containment');
});
