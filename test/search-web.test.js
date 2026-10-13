import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test, { beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';
import { config } from '../src/config.js';
import { searchWeb } from '../src/search/web.js';
import { resetModelHealth } from '../src/search/gemini-models.js';
import { resetLlmStats } from '../src/llm-stats.js';
import { resetGroundingStats } from '../src/grounding-stats.js';
import { installFetchMock } from './_support/fetch-mock.js';
import { installGeminiMock, answer } from './_support/gemini-mock.js';

/**
 * `searchWeb` asks every configured provider and merges what they find. A page
 * is one result however it is spelled: http against https, with or without
 * `www.`, with or without tracking parameters - the providers do not agree on
 * a spelling, and the same page listed twice counted twice in the report.
 */

const feature = { id: 1, name: 'Zorble Gadgets', summary: 'Lets pages do zorbling.' };

const saved = {};
beforeEach(() => {
  for (const key of ['braveSearchApiKey', 'geminiApiKey', 'googleSearchApiKey', 'googleSearchCx', 'searchProvider']) {
    saved[key] = config[key];
  }
  config.braveSearchApiKey = '';
  config.geminiApiKey = '';
  config.googleSearchApiKey = '';
  config.googleSearchCx = '';
  config.searchProvider = 'auto';
  resetModelHealth();
  resetLlmStats();
  resetGroundingStats();
});
afterEach(() => Object.assign(config, saved));

/** Brave's answer to one query (the query is written into the request the way URLSearchParams writes it). */
const braveFor = (query, results) => ({
  match: url => url.includes('api.search.brave.com') && url.includes(new URLSearchParams({ q: query }).toString()),
  json: { web: { results } },
});
const plan = (...queries) => queries.map(query => ({ query, intent: 'core-api', description: `Query ${query}` }));

test('one Brave response, or several queries of one search, give a page once however it is spelled', async t => {
  t.mock.method(console, 'log', () => {}); // the provider's progress lines
  config.braveSearchApiKey = 'test-brave';
  const mock = installFetchMock([
    braveFor('first', [
      { title: 'Zorble guide', url: 'https://blog.example/zorble/?utm_source=feed', description: 'A guide.' },
      { title: 'Zorble guide (again)', url: 'http://www.blog.example/zorble#top', description: 'A guide.' },
    ]),
    braveFor('second', [
      { title: 'Zorble guide (third time)', url: 'https://BLOG.example/zorble/', description: 'A guide.' },
      { title: 'Another page', url: 'https://blog.example/other', description: 'Something else.' },
    ]),
  ]);
  t.after(() => mock.restore());

  const { items, audit } = await searchWeb('"Zorble Gadgets" API', { feature, queryPlan: plan('first', 'second') });

  assert.deepStrictEqual(items.map(item => item.url), ['https://blog.example/zorble', 'https://blog.example/other']);
  assert.deepStrictEqual(items[0].providers, ['brave']);
  assert.strictEqual(items[0].title, 'Zorble guide', 'the first listing is kept');
  assert.strictEqual(audit.providerCounts.brave, 2, 'what the provider found is counted after its own de-duplication');
});

test('two providers naming the same page in different spellings are two votes for one result', async t => {
  t.mock.method(console, 'log', () => {});
  config.braveSearchApiKey = 'test-brave';
  config.geminiApiKey = 'test-gemini';
  const redirect = 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/zorble';
  const fetchMock = installFetchMock([
    { match: redirect, status: 302, headers: { location: 'http://www.blog.example/zorble?utm_campaign=feed' }, text: '' },
    braveFor('"Zorble Gadgets" API', [
      { title: 'Zorble guide', url: 'https://blog.example/zorble/', description: 'Brave\'s description of the guide.' },
      { title: 'Only Brave found this', url: 'https://brave.example/zorble', description: 'Brave only.' },
    ]),
  ]);
  const gemini = installGeminiMock(() => answer('A summary.', {
    groundingMetadata: {
      webSearchQueries: ['zorble gadgets'],
      groundingChunks: [{ web: { uri: redirect, title: 'blog.example' } }],
    },
  }));
  t.after(() => {
    gemini.restore();
    fetchMock.restore();
  });

  const { items, audit } = await searchWeb('"Zorble Gadgets" API', { feature, queryPlan: plan('"Zorble Gadgets" API') });

  assert.deepStrictEqual(items.map(item => item.url), ['http://www.blog.example/zorble', 'https://brave.example/zorble']);
  const [shared, braveOnly] = items;
  assert.deepStrictEqual(shared.providers, ['gemini', 'brave']);
  assert.strictEqual(shared.searchConsensusCount, 2);
  assert.strictEqual(shared.source, 'Google Search (Gemini Grounded) + Brave Search');
  assert.strictEqual(shared.snippet, 'Brave\'s description of the guide.', 'a snippet the first provider did not have is taken from the second');
  assert.strictEqual(shared.title, 'Zorble guide', 'Gemini only named the site; the second provider says what the page is');
  assert.deepStrictEqual(braveOnly.providers, ['brave']);
  assert.deepStrictEqual(audit.providerCounts, { gemini: 1, brave: 2 });
});

test('a title that only names the site gives way to one that says something; nothing, another site name or a title already said is not taken over it', async t => {
  t.mock.method(console, 'log', () => {});
  config.braveSearchApiKey = 'test-brave';
  config.geminiApiKey = 'test-gemini';
  const redirect = token => `https://vertexaisearch.cloud.google.com/grounding-api-redirect/${token}`;
  const fetchMock = installFetchMock([
    { match: redirect('site'), status: 302, headers: { location: 'https://one.example/site-named' }, text: '' },
    { match: redirect('said'), status: 302, headers: { location: 'https://two.example/already-titled' }, text: '' },
    { match: redirect('both'), status: 302, headers: { location: 'https://three.example/both-site-names' }, text: '' },
    { match: redirect('blank'), status: 302, headers: { location: 'https://four.example/brave-has-no-title' }, text: '' },
    braveFor('"Zorble Gadgets" API', [
      { title: 'A real title', url: 'https://one.example/site-named', description: 'x' },
      { title: 'Brave\'s title', url: 'https://two.example/already-titled', description: 'x' },
      { title: 'www.three.example', url: 'https://three.example/both-site-names', description: 'x' },
      { title: '', url: 'https://four.example/brave-has-no-title', description: 'x' },
    ]),
  ]);
  const gemini = installGeminiMock(() => answer('A summary.', {
    groundingMetadata: {
      webSearchQueries: ['zorble gadgets'],
      groundingChunks: [
        { web: { uri: redirect('site'), title: 'one.example' } },
        { web: { uri: redirect('said'), title: 'Gemini\'s title' } },
        { web: { uri: redirect('both'), title: 'three.example' } },
        { web: { uri: redirect('blank'), title: 'four.example' } },
      ],
    },
  }));
  t.after(() => {
    gemini.restore();
    fetchMock.restore();
  });

  const { items } = await searchWeb('"Zorble Gadgets" API', { feature, queryPlan: plan('"Zorble Gadgets" API') });

  assert.deepStrictEqual(
    items.map(item => item.title),
    ['A real title', 'Gemini\'s title', 'three.example', 'four.example'],
    'a second site name, or no title at all, does not replace the first site name'
  );
});
