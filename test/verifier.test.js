import test from 'node:test';
import assert from 'node:assert';
import {
  extractTechnicalAnchors,
  verifySemantically,
} from '../src/search/verifier.js';

test('verifySemantically rejects false-positive word collisions for CSS Symbols()', () => {
  const cssSymbolsFeature = {
    name: 'CSS Symbols()',
    summary: 'The CSS symbols() function lets authors define a counter style inline instead of first declaring a named @counter-style at-rule.',
  };

  // Unrelated Unicode symbol tool
  const falsePositive1 = {
    title: 'Show HN: One clean, developer-focused page for every Unicode symbol',
    snippet: 'Search every unicode symbol with search and copy paste',
    type: 'discussion',
  };
  const result1 = verifySemantically(cssSymbolsFeature, falsePositive1);
  assert.strictEqual(result1.isRelevant, false);

  // Unrelated lambda symbol with css
  const falsePositive2 = {
    title: 'Lambda symbol with css',
    snippet: 'Drawing a lambda greek symbol using pure CSS pseudo elements',
    type: 'discussion',
  };
  const result2 = verifySemantically(cssSymbolsFeature, falsePositive2);
  assert.strictEqual(result2.isRelevant, false);

  // Genuinely relevant CSS symbols() discussion
  const genuineItem = {
    title: 'CSS symbols() function for inline counter-style',
    snippet: 'MDN documentation on defining custom counter markers with symbols() in list-style-type',
    type: 'article',
  };
  const result3 = verifySemantically(cssSymbolsFeature, genuineItem);
  assert.strictEqual(result3.isRelevant, true);
});

test('verifySemantically filters unrelated npm packages for Web Install API', () => {
  const webInstallFeature = {
    name: 'Web Install API',
    summary: 'Allows a website to install a web app via navigator.install().',
  };

  // Generic connector library
  const unrelatedPkg = {
    name: '@hasna/connectors',
    description: 'Open source connector library - Install API connectors with a single command',
    type: 'package',
  };
  const result1 = verifySemantically(webInstallFeature, unrelatedPkg);
  assert.strictEqual(result1.isRelevant, false);

  // Genuinely relevant types package
  const genuinePkg = {
    name: '@types/web-install-api',
    description: 'TypeScript definitions for web-install-api and web app installation',
    type: 'package',
  };
  const result2 = verifySemantically(webInstallFeature, genuinePkg);
  assert.strictEqual(result2.isRelevant, true);
});

test('extractTechnicalAnchors produces domain-specific terms', () => {
  const feature = {
    name: 'Algorithm Updates in WebCrypto',
    summary: 'Add ML-KEM and ChaCha20 to `crypto.subtle`.',
  };
  const anchors = extractTechnicalAnchors(feature);
  assert.ok(anchors.includes('subtle'));
  assert.ok(anchors.includes('ml-kem'));
  assert.ok(anchors.includes('chacha20'));
});
