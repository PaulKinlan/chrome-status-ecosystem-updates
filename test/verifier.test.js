import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import { config } from '../src/config.js';
import {
  extractTechnicalAnchors,
  verifySemantically,
  verifyWithLLM,
} from '../src/search/verifier.js';
import { resetModelHealth } from '../src/search/gemini-models.js';
import { resetLlmStats } from '../src/llm-stats.js';
import { installGeminiMock, answer } from './_support/gemini-mock.js';

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

// --- which candidates get their page read -----------------------------------------

test('rankByLikelyRelevance puts inbound citations first, then keyword matches, then widely found pages', async () => {
  const { rankByLikelyRelevance } = await import('../src/search/verifier.js');
  const feature = { name: 'Zorble Gadgets', summary: 'Gadgets that zorble.' };
  const item = (title, extra = {}) => ({ title, url: `https://e.example/${encodeURIComponent(title)}`, snippet: '', ...extra });

  const ranked = rankByLikelyRelevance(feature, [
    item('Cats'),
    item('Dogs', { providers: ['brave', 'gemini'] }),
    item('Zorble Gadgets in practice'),
    item('Birds', { providers: ['brave'] }),
    item('Citation of something', { isReverseCitation: true }),
  ]);

  assert.deepStrictEqual(ranked.map(i => i.title), [
    'Citation of something', // inbound citations first
    'Zorble Gadgets in practice', // then what the keyword check accepts
    'Dogs', // then more providers
    'Birds',
    'Cats', // then the rest, in their own order
  ]);
});

test('rankByLikelyRelevance is stable, does not modify its input and handles nothing', async () => {
  const { rankByLikelyRelevance } = await import('../src/search/verifier.js');
  const feature = { name: 'Zorble Gadgets', summary: '' };
  const items = ['A', 'B', 'C', 'D'].map(title => ({ title, url: `https://e.example/${title}` }));
  const before = items.map(i => i.title);

  assert.deepStrictEqual(rankByLikelyRelevance(feature, items).map(i => i.title), before, 'equals keep their order');
  assert.deepStrictEqual(items.map(i => i.title), before);
  assert.notStrictEqual(rankByLikelyRelevance(feature, items), items, 'a new array');
  assert.deepStrictEqual(rankByLikelyRelevance(feature, []), []);
});

test('rankByLikelyRelevance prefers the more confident keyword match', async () => {
  const { rankByLikelyRelevance } = await import('../src/search/verifier.js');
  const feature = { name: 'Zorble Gadgets', summary: 'Uses `navigator.zorble()` and zorble-state handling.' };
  const exact = { title: 'Zorble Gadgets', url: 'https://e.example/exact' }; // exact name: confidence 90
  const anchors = { title: 'About navigator.zorble and zorble-state', url: 'https://e.example/anchors' }; // two anchors: lower confidence

  assert.deepStrictEqual(rankByLikelyRelevance(feature, [anchors, exact]).map(i => i.url), ['https://e.example/exact', 'https://e.example/anchors']);
});

test('rankByLikelyRelevance ranks a copy: the caller\'s own array keeps its order', async () => {
  const { rankByLikelyRelevance } = await import('../src/search/verifier.js');
  const feature = { name: 'Zorble Gadgets', summary: '' };
  const items = [{ title: 'Cats', url: 'https://e.example/cats' }, { title: 'Zorble Gadgets', url: 'https://e.example/zorble' }];

  assert.deepStrictEqual(rankByLikelyRelevance(feature, items).map(i => i.title), ['Zorble Gadgets', 'Cats']);
  assert.deepStrictEqual(items.map(i => i.title), ['Cats', 'Zorble Gadgets'], 'the order the pipeline holds them in is unchanged');
});

test('rankByLikelyRelevance does not rank items the keyword check rejects by how sure it was of rejecting them', async () => {
  const { rankByLikelyRelevance, verifySemantically } = await import('../src/search/verifier.js');
  const feature = { name: 'Zorble Gadgets', summary: '' };
  const article = { title: 'Cats', url: 'https://e.example/cats' };
  const unrelatedPackage = { type: 'package', name: 'left-pad', url: 'https://www.npmjs.com/package/left-pad' };

  // Both are rejected, but the check is surer about the package (85) than the article (70): that is no reason to read it first.
  assert.deepStrictEqual(
    [article, unrelatedPackage].map(item => verifySemantically(feature, item)).map(({ isRelevant, confidence }) => ({ isRelevant, confidence })),
    [{ isRelevant: false, confidence: 70 }, { isRelevant: false, confidence: 85 }]
  );
  assert.deepStrictEqual(rankByLikelyRelevance(feature, [article, unrelatedPackage]), [article, unrelatedPackage]);
  assert.deepStrictEqual(rankByLikelyRelevance(feature, [unrelatedPackage, article]), [unrelatedPackage, article]);
});

test('verifyWithLLM shows the model what the page says before what a search engine said about it', async t => {
  const saved = { geminiApiKey: config.geminiApiKey, openaiApiKey: config.openaiApiKey };
  config.geminiApiKey = 'test-key-do-not-log';
  config.openaiApiKey = '';
  resetModelHealth();
  resetLlmStats();
  const gemini = installGeminiMock(() => answer(JSON.stringify({ results: [{ id: 0, isRelevant: true, confidence: 90, reason: 'About it' }] })));
  t.after(() => {
    gemini.restore();
    Object.assign(config, saved);
    resetModelHealth();
    resetLlmStats();
  });
  const at = name => `https://e.example/${name}`;

  await verifyWithLLM({ id: 1, name: 'Zorble Gadgets', summary: 'Zorbles.' }, [
    { title: 'Both', url: at('both'), snippet: 'what the search engine said', contentExcerpt: 'what the page says', description: 'a description' },
    { title: 'Snippet', url: at('snippet'), snippet: 'what the search engine said', description: 'a description' },
    { title: 'Described', url: at('described'), description: 'a description', readmeSnippet: 'a readme' },
    { title: 'Readme', url: at('readme'), readmeSnippet: 'a readme' },
    { title: 'Nothing', url: at('nothing') },
  ]);

  assert.strictEqual(gemini.calls.length, 1);
  const prompt = gemini.calls[0].body.contents[0].parts[0].text;
  const shown = JSON.parse(/BEGIN UNTRUSTED CANDIDATE DATA\n([\s\S]*?)\nEND UNTRUSTED CANDIDATE DATA/.exec(prompt)[1]);
  assert.deepStrictEqual(
    shown.map(({ title, snippet }) => [title, snippet]),
    [
      ['Both', 'what the page says'],
      ['Snippet', 'what the search engine said'],
      ['Described', 'a description'],
      ['Readme', 'a readme'],
      ['Nothing', ''],
    ]
  );
});

test('sanitizeForPrompt and rankByLikelyRelevance are part of the verifier\'s public surface', async () => {
  const verifier = await import('../src/search/verifier.js');
  assert.strictEqual(typeof verifier.sanitizeForPrompt, 'function');
  assert.strictEqual(typeof verifier.rankByLikelyRelevance, 'function');
});
