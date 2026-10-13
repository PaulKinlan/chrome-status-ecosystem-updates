import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test, { beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';
import { config } from '../src/config.js';
import { logger } from '../src/logger.js';
import { adoptGroundedSources } from '../src/analyzer/grounded.js';
import { analyzeFeature } from '../src/analyzer/index.js';
import { partitionArticles } from '../src/search/articles.js';
import { resetGroundingStats, groundingStatsSnapshot } from '../src/grounding-stats.js';
import { resetLlmStats } from '../src/llm-stats.js';
import { resetModelHealth } from '../src/search/gemini-models.js';
import { installFetchMock } from './_support/fetch-mock.js';
import { installGeminiMock, answer, synthesisText, SYNTHESIS } from './_support/gemini-mock.js';

/**
 * Sources Gemini finds for itself while it writes the synthesis.
 *
 * They used to be appended to a feature's articles as they came, unread and
 * unchecked, after the momentum score was worked out. They are now read, run
 * through the relevance check and, when they pass, counted - before the score.
 *
 * Without credentials the check is the offline one: the cited page is about
 * "Zorble Gadgets" when its title, text, snippet or address says so.
 */

const PRIMARY = 'gemini-3.8-flash';

beforeEach(() => {
  resetGroundingStats();
  resetLlmStats();
  resetModelHealth();
  config.geminiApiKey = '';
  config.openaiApiKey = '';
  config.geminiModel = PRIMARY;
});

afterEach(() => {
  config.geminiApiKey = '';
  config.openaiApiKey = '';
});

const feature = () => ({
  id: 7001,
  name: 'Zorble Gadgets',
  milestone: 150,
  category: 'Enabled by default',
  statusType: 'enabled',
  summary: 'Lets pages do zorbling.',
  specUrl: 'https://spec.example/zorble-gadgets',
  explainerUrls: ['https://explainers.example/zorble/README.md'],
  docUrls: ['https://docs.example/zorble-gadgets/'],
  sampleUrls: ['https://samples.example/zorble-gadgets-demo'],
  browsers: { firefox: { view: 'No signal' }, safari: { view: 'No signal' } },
});

/** What the search stage leaves behind for a feature: its verified articles and the totals counted from them. */
function ecosystem({ articles = [], resources = [] } = {}) {
  const { blogs, docs } = partitionArticles(articles);
  return {
    featureId: 7001,
    articles,
    blogs,
    docs,
    resources,
    discussions: [],
    standards: [],
    bugs: [],
    packages: [],
    verifiedPolyfill: null,
    auditTrail: { searchesExecuted: [], contentInspected: { webArticleExcerptsRead: 0 } },
    metrics: {
      totalArticles: articles.length,
      totalBlogs: blogs.length,
      totalDocs: docs.length,
      hnPoints: 0,
      hnComments: 0,
      twitterLikes: 0,
      twitterReplies: 0,
      totalStandards: 0,
      totalPackages: 0,
      hasPolyfill: false,
      hasDemos: false,
    },
  };
}

const hostOf = url => new URL(url).hostname.replace(/^www\./, '');

/** A source as `callGeminiWithSearchGrounding` returns it: named by its site, nothing more. */
const source = (url, extra = {}) => ({
  source: 'Google Search (Gemini Grounded)',
  type: 'article',
  title: hostOf(url),
  url,
  domain: hostOf(url),
  isGrounded: true,
  snippet: '',
  ...extra,
});

const html = (title, text) => `<html><head><title>${title}</title></head><body><p>${text}</p></body></html>`;
const pageRoute = (url, title, text) => ({ match: url, text: html(title, text), headers: { 'content-type': 'text/html; charset=utf-8' } });

/** Answers the pages (404 for the rest). Each test uses addresses of its own: a page that was read is remembered. */
function pages(t, routes = []) {
  const mock = installFetchMock(routes, { onUnmatched: 'empty' });
  t.after(() => mock.restore());
  return mock;
}

/** A page that is about the feature, and one that is not. */
const aboutIt = url => pageRoute(url, 'Zorble Gadgets, in practice', 'Zorble Gadgets is described on this page.');
const notAboutIt = url => pageRoute(url, 'Weather today', 'Rain all week.');

const NOTHING = { considered: 0, alreadyListed: 0, added: 0, rejected: 0, unread: 0, skipped: 0 };
const counts = (changes = {}) => ({ ...NOTHING, ...changes });
const adoption = () => groundingStatsSnapshot().adoption;
const urls = list => list.map(article => article.url);

// --- what is added -------------------------------------------------------------------------------------------

test('a cited source that is about the feature joins the articles, and the totals follow', async t => {
  const url = 'https://blog.example/posts/zorble-gadgets-in-practice';
  pages(t, [pageRoute(url, 'Zorble Gadgets in practice', 'How teams use Zorble Gadgets.')]);
  const earlierPost = { title: 'Earlier post', url: 'https://old.example/earlier', domain: 'old.example', isBlog: true };
  const reference = { title: 'Zorble Gadgets - MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Zorble', domain: 'developer.mozilla.org' };
  const data = ecosystem({ articles: [earlierPost, reference] });
  const cited = source(url, { snippet: 'Teams use it.' });

  const adopted = await adoptGroundedSources(feature(), data, [cited]);

  assert.strictEqual(adopted.length, 1);
  assert.strictEqual(adopted[0], cited, 'the record itself is added, not a copy');
  assert.deepStrictEqual(urls(data.articles), [earlierPost.url, reference.url, url]);
  assert.deepStrictEqual(urls(data.blogs), [earlierPost.url, url], 'filed as a blog post like any article off a reference site');
  assert.deepStrictEqual(urls(data.docs), [reference.url]);
  assert.deepStrictEqual(
    { articles: data.metrics.totalArticles, blogs: data.metrics.totalBlogs, docs: data.metrics.totalDocs },
    { articles: 3, blogs: 2, docs: 1 }
  );
  assert.strictEqual(cited.verifiedBy, 'heuristic');
  assert.ok(cited.relevanceReason, 'it carries the reason it was accepted');
  assert.deepStrictEqual(adoption(), counts({ considered: 1, added: 1 }));
});

test('the page is read first: its title replaces the site name, and its text is kept as the excerpt', async t => {
  const url = 'https://blog.example/posts/field-guide-4201';
  pages(t, [pageRoute(url, 'A field guide to Zorble Gadgets', 'Zorble Gadgets explained, step by step.')]);
  const data = ecosystem();
  const cited = source(url);
  assert.strictEqual(cited.title, 'blog.example');

  await adoptGroundedSources(feature(), data, [cited]);

  assert.strictEqual(cited.title, 'A field guide to Zorble Gadgets');
  assert.match(cited.contentExcerpt, /Zorble Gadgets explained, step by step\./);
  assert.strictEqual(data.auditTrail.contentInspected.webArticleExcerptsRead, 1, 'the pages that were read are counted');
  // Nothing about this address mentions the feature: it was the page that made the source relevant.
  assert.ok(!url.includes('zorble'));
  assert.deepStrictEqual(urls(data.articles), [url]);
});

test('the pages read here are added to the count of pages the search stage already read', async t => {
  const url = 'https://blog.example/posts/counted-4211';
  pages(t, [pageRoute(url, 'Zorble Gadgets, counted', 'Zorble Gadgets, in the text.')]);
  const data = ecosystem();
  data.auditTrail.contentInspected.webArticleExcerptsRead = 5;

  await adoptGroundedSources(feature(), data, [source(url)]);

  assert.strictEqual(data.auditTrail.contentInspected.webArticleExcerptsRead, 6);
});

test('a page that cannot be read is not added, however sure the answer sounds and whatever its address says', async t => {
  const said = 'https://blog.example/posts/said-4202';
  const named = 'https://blog.example/posts/zorble-gadgets-4203';
  const mock = pages(t, []); // every page is a 404
  const data = ecosystem();

  const adopted = await adoptGroundedSources(feature(), data, [
    source(said, { snippet: 'Zorble Gadgets landed in Chrome 150.' }),
    source(named),
  ]);

  assert.deepStrictEqual(adopted, []);
  assert.deepStrictEqual(data.articles, []);
  assert.strictEqual(mock.calls.length, 2, 'both pages were tried');
  assert.strictEqual(data.auditTrail.contentInspected.webArticleExcerptsRead, 0, 'none was read');
  assert.deepStrictEqual(adoption(), counts({ considered: 2, unread: 2 }));
  assert.deepStrictEqual(data.auditTrail.searchesExecuted, [
    { type: 'gemini_synthesis_sources', provider: 'Sources cited by the AI synthesis', rawFound: 2, verified: 0 },
  ]);
});

test('a page with no text to read counts as unread', async t => {
  const url = 'https://blog.example/posts/empty-4212';
  pages(t, [{ match: url, text: '', headers: { 'content-type': 'text/html; charset=utf-8' } }]);
  const data = ecosystem();

  const adopted = await adoptGroundedSources(feature(), data, [source(url, { snippet: 'Zorble Gadgets landed in Chrome 150.' })]);

  assert.deepStrictEqual(adopted, []);
  assert.deepStrictEqual(adoption(), counts({ considered: 1, unread: 1 }));
});

test('what the answer says about a source does not make it relevant: the page is judged, not the answer', async t => {
  const url = 'https://blog.example/posts/said-4213';
  pages(t, [notAboutIt(url)]);
  const data = ecosystem();
  // Gemini wrote about Zorble Gadgets, so its words about any source name the feature.
  const cited = source(url, { snippet: 'Zorble Gadgets shipped in Chrome 150 with a new gadget API.' });

  const adopted = await adoptGroundedSources(feature(), data, [cited]);

  assert.deepStrictEqual(adopted, []);
  assert.deepStrictEqual(data.articles, []);
  assert.deepStrictEqual(adoption(), counts({ considered: 1, rejected: 1 }));
});

test('a cited source that is not about the feature is dropped and the evidence stays as it was', async t => {
  const url = 'https://blog.example/posts/weather-4204';
  pages(t, [pageRoute(url, 'Zorble weather report', 'It rained in Zorble all week.')]);
  const earlier = { title: 'Earlier post', url: 'https://old.example/earlier', domain: 'old.example', isBlog: true };
  const data = ecosystem({ articles: [earlier] });
  data.metrics.totalArticles = 99; // nothing is added, so nothing is recounted: the totals are left exactly as they were
  const before = structuredClone({ articles: data.articles, blogs: data.blogs, docs: data.docs, metrics: data.metrics });

  const adopted = await adoptGroundedSources(feature(), data, [source(url)]);

  assert.deepStrictEqual(adopted, []);
  assert.deepStrictEqual({ articles: data.articles, blogs: data.blogs, docs: data.docs, metrics: data.metrics }, before);
  assert.deepStrictEqual(adoption(), counts({ considered: 1, rejected: 1 }));
  assert.deepStrictEqual(data.auditTrail.searchesExecuted, [
    { type: 'gemini_synthesis_sources', provider: 'Sources cited by the AI synthesis', rawFound: 1, verified: 0 },
  ]);
});

test('the audit trail says how many sources were cited and how many held up', async t => {
  const good = 'https://blog.example/posts/field-notes-4205';
  const weather = 'https://blog.example/posts/weather-4206';
  const silent = 'https://blog.example/posts/silent-4214';
  pages(t, [aboutIt(good), notAboutIt(weather)]); // `silent` is a 404
  const listed = { title: 'Zorble Gadgets, in depth', url: 'https://listed.example/zorble-gadgets-in-depth', domain: 'listed.example', isBlog: true };
  const data = ecosystem({ articles: [listed] });

  await adoptGroundedSources(feature(), data, [source(listed.url), source(good), source(weather), source(silent)]);

  assert.deepStrictEqual(data.auditTrail.searchesExecuted, [
    { type: 'gemini_synthesis_sources', provider: 'Sources cited by the AI synthesis', rawFound: 4, verified: 2 },
  ]);
  assert.deepStrictEqual(adoption(), counts({ considered: 4, alreadyListed: 1, added: 1, rejected: 1, unread: 1 }));
});

test('the totals are recounted from the lists, not added to', async t => {
  const url = 'https://blog.example/posts/recount-4207';
  pages(t, [aboutIt(url)]);
  const data = ecosystem({ articles: [{ title: 'Earlier', url: 'https://old.example/earlier', domain: 'old.example', isBlog: true }] });
  Object.assign(data.metrics, { totalArticles: 99, totalBlogs: 98, totalDocs: 97 });

  await adoptGroundedSources(feature(), data, [source(url)]);

  assert.deepStrictEqual(
    { articles: data.metrics.totalArticles, blogs: data.metrics.totalBlogs, docs: data.metrics.totalDocs },
    { articles: 2, blogs: 2, docs: 0 }
  );
});

test('a source on a reference site is filed as documentation, the others as blog posts', async t => {
  const mdn = source('https://developer.mozilla.org/en-US/docs/Web/API/Zorble_Gadgets_4208', { title: 'Zorble Gadgets - Web APIs | MDN' });
  const blog = source('https://blog.example/posts/a-blog-post-4209', { title: 'Zorble Gadgets, a blog post' });
  pages(t, [aboutIt(mdn.url), aboutIt(blog.url)]);
  const data = ecosystem();

  await adoptGroundedSources(feature(), data, [mdn, blog]);

  assert.deepStrictEqual(urls(data.docs), [mdn.url]);
  assert.deepStrictEqual(urls(data.blogs), [blog.url]);
  assert.deepStrictEqual(
    { articles: data.metrics.totalArticles, blogs: data.metrics.totalBlogs, docs: data.metrics.totalDocs },
    { articles: 2, blogs: 1, docs: 1 }
  );
});

test('the sources that held up come back in the order they were cited', async t => {
  const listed = { title: 'Listed', url: 'https://listed.example/zorble-gadgets-b', domain: 'listed.example', isBlog: true };
  const a = source('https://blog.example/posts/a-4215');
  const rejected = source('https://blog.example/posts/c-4216');
  const d = source('https://blog.example/posts/d-4217');
  pages(t, [aboutIt(a.url), notAboutIt(rejected.url), aboutIt(d.url)]);
  const data = ecosystem({ articles: [listed] });

  const adopted = await adoptGroundedSources(feature(), data, [a, source(listed.url), rejected, d]);

  assert.deepStrictEqual(adopted, [a, listed, d]);
  assert.strictEqual(adopted[1], listed, 'a source the feature already had is its existing record');
});

// --- what is left alone --------------------------------------------------------------------------------------

test('a page the feature already lists is not added again, however its address is spelled', async t => {
  const mock = pages(t, []);
  const listed = { title: 'Zorble Gadgets, in depth', url: 'https://blog.example/in-depth/', domain: 'blog.example', isBlog: true, verifiedBy: 'llm' };
  const data = ecosystem({ articles: [listed] });

  const adopted = await adoptGroundedSources(feature(), data, [source('http://www.blog.example/in-depth?utm_source=newsletter#top')]);

  assert.strictEqual(adopted.length, 1);
  assert.strictEqual(adopted[0], listed);
  assert.strictEqual(data.articles.length, 1);
  assert.strictEqual(data.metrics.totalArticles, 1);
  assert.deepStrictEqual(mock.calls, [], 'it was neither read nor checked again');
  assert.deepStrictEqual(adoption(), counts({ considered: 1, alreadyListed: 1 }));
});

test('the feature\'s own links and tweets are not looked at', async t => {
  const mock = pages(t, []);
  const data = ecosystem({ resources: [{ url: 'https://dev.example/resource-1', title: 'A resource' }] });

  const adopted = await adoptGroundedSources(feature(), data, [
    source('https://spec.example/zorble-gadgets#intro'), // its spec
    source('http://explainers.example/zorble/README.md'), // an explainer, over another scheme
    source('https://www.docs.example/zorble-gadgets'), // its documentation
    source('https://samples.example/zorble-gadgets-demo/'), // a sample
    source('https://dev.example/resource-1?ref_src=feed'), // a resource
    source('https://x.com/someone/status/1234567890'),
    source('https://twitter.com/someone/status/987654321'),
  ]);

  assert.deepStrictEqual(adopted, []);
  assert.deepStrictEqual(mock.calls, [], 'nothing was fetched');
  assert.deepStrictEqual(data.articles, []);
  assert.deepStrictEqual(data.auditTrail.searchesExecuted, [], 'nothing was considered, so there is nothing to report');
  assert.deepStrictEqual(adoption(), counts({ skipped: 7 }), 'they were not looked at, and are counted as such');
});

test('the feature\'s ChromeStatus pages and bug, and what was already found for it elsewhere, are not articles', async t => {
  const mock = pages(t, []);
  const data = ecosystem();
  data.standards = [{ vendor: 'Mozilla', title: 'Position', url: 'https://github.com/mozilla/standards-positions/issues/101', state: 'positive' }];
  data.bugs = [{ vendor: 'Mozilla', title: 'Bug', url: 'https://bugzilla.mozilla.org/show_bug.cgi?id=555' }];
  data.discussions = [{ source: 'Hacker News', title: 'Zorble Gadgets', url: 'https://blog.example/posts/hn-story-4222', discussionUrl: 'https://news.ycombinator.com/item?id=777' }];
  data.packages = [{ name: 'zorble-polyfill', url: 'https://www.npmjs.com/package/zorble-polyfill' }];
  const own = {
    ...feature(),
    chromeStatusUrl: 'https://chromestatus.com/feature/7001',
    chromeStatusLiteUrl: 'https://chromestatuslite.com/feature/7001',
    bugUrl: 'https://issues.chromium.org/issues/123456',
  };

  const adopted = await adoptGroundedSources(own, data, [
    source('https://chromestatus.com/feature/7001'),
    source('http://www.chromestatuslite.com/feature/7001/'),
    source('https://issues.chromium.org/issues/123456?utm_source=feed'),
    source('https://github.com/mozilla/standards-positions/issues/101'),
    source('https://bugzilla.mozilla.org/show_bug.cgi?id=555'),
    source('https://blog.example/posts/hn-story-4222/'), // the page a Hacker News story is about
    source('https://news.ycombinator.com/item?id=777'), // the story's thread
    source('https://npmjs.com/package/zorble-polyfill'),
  ]);

  assert.deepStrictEqual(adopted, []);
  assert.deepStrictEqual(mock.calls, [], 'none of them was read');
  assert.deepStrictEqual(data.articles, []);
  assert.deepStrictEqual(adoption(), counts({ skipped: 8 }));
});

test('evidence that is missing, or not a list of records, does not stop sources being added', async t => {
  const url = 'https://blog.example/posts/odd-data-4223';
  pages(t, [aboutIt(url)]);
  const data = ecosystem();
  // `bugs` is one record instead of a list: it is not read as if it were a list of them.
  Object.assign(data, { standards: 'oops', bugs: { url, discussionUrl: url }, discussions: [null, 5, {}, { url: 7 }], packages: undefined, resources: [null] });
  const cited = source(url);

  const adopted = await adoptGroundedSources({ ...feature(), explainerUrls: undefined, docUrls: null, sampleUrls: undefined }, data, [cited]);

  assert.deepStrictEqual(adopted, [cited]);
});

test('a source that is not a web address is not looked at', async t => {
  const mock = pages(t, []);
  const data = ecosystem();

  const adopted = await adoptGroundedSources(feature(), data, [
    { title: 'Zorble Gadgets', url: 'javascript:void("zorble gadgets")' },
    { title: 'Zorble Gadgets', url: 'ftp://files.example/zorble-gadgets' },
    { title: 'Zorble Gadgets', url: 'zorble-gadgets' },
    { title: 'Zorble Gadgets', url: ' https://blog.example/zorble-gadgets-lead' },
    { title: 'Zorble Gadgets', url: 'https://user:secret@blog.example/zorble-gadgets-credentials' },
    { title: 'Zorble Gadgets', url: 42 },
    { title: 'Zorble Gadgets' },
    'https://blog.example/zorble-gadgets-bare',
    null,
    undefined,
    42,
  ]);

  assert.deepStrictEqual(adopted, []);
  assert.deepStrictEqual(data.articles, []);
  assert.deepStrictEqual(mock.calls, []);
  assert.deepStrictEqual(adoption(), NOTHING);
});

test('a source whose address is written in capitals is still a web address', async t => {
  // The address is requested as it was written, so the page is matched without regard to case.
  pages(t, [{ ...aboutIt(''), match: /blog\.example\/posts\/capitals-4218/i }]);
  const data = ecosystem();
  const cited = source('HTTPS://Blog.Example/posts/capitals-4218');

  const adopted = await adoptGroundedSources(feature(), data, [cited]);

  assert.deepStrictEqual(adopted, [cited]);
  assert.deepStrictEqual(adoption(), counts({ considered: 1, added: 1 }));
});

test('at most eight sources are read and checked; listed ones, own links and tweets do not use up the limit', async t => {
  const fresh = Array.from({ length: 12 }, (_, i) => source(`https://blog.example/posts/many-${i + 1}-4219`));
  const mock = pages(t, fresh.map(cited => aboutIt(cited.url)));
  const listed = [1, 2, 3].map(n => ({ title: `Listed ${n}`, url: `https://listed.example/zorble-gadgets-${n}`, domain: 'listed.example', isBlog: true }));
  const data = ecosystem({ articles: listed });

  const adopted = await adoptGroundedSources(feature(), data, [
    source('https://x.com/someone/status/111'),
    source(listed[0].url),
    ...fresh.slice(0, 4),
    source('https://spec.example/zorble-gadgets'),
    source(listed[1].url),
    source(listed[2].url),
    ...fresh.slice(4),
  ]);

  const firstEight = fresh.slice(0, 8);
  assert.deepStrictEqual(urls(adopted), [
    listed[0].url, ...urls(firstEight.slice(0, 4)), listed[1].url, listed[2].url, ...urls(firstEight.slice(4)),
  ]);
  assert.deepStrictEqual([...mock.calls].sort(), urls(firstEight).sort(), 'only the first eight were read');
  assert.strictEqual(data.articles.length, 3 + 8);
  assert.strictEqual(data.metrics.totalArticles, 11);
  // A tweet, the spec and the four sources past the limit were not looked at.
  assert.deepStrictEqual(adoption(), counts({ considered: 11, alreadyListed: 3, added: 8, skipped: 6 }));
});

test('a page cited twice, under two spellings, is read and counted once', async t => {
  const mock = pages(t, [aboutIt('https://blog.example/posts/twice-4220')]);
  const data = ecosystem();

  const adopted = await adoptGroundedSources(feature(), data, [
    source('https://blog.example/posts/twice-4220'),
    source('http://www.blog.example/posts/twice-4220/?utm_medium=social#comments'),
  ]);

  assert.strictEqual(adopted.length, 1);
  assert.deepStrictEqual(mock.calls, ['https://blog.example/posts/twice-4220']);
  assert.deepStrictEqual(adoption(), counts({ considered: 1, added: 1 }));
});

// --- what it is given ----------------------------------------------------------------------------------------

test('nothing cited means nothing happens, whatever it is given', async t => {
  const mock = pages(t, []);
  for (const sources of [undefined, null, [], {}, 'https://blog.example/zorble-gadgets', 5]) {
    const data = {};
    assert.deepStrictEqual(await adoptGroundedSources(feature(), data, sources), [], String(sources));
    assert.deepStrictEqual(data, {}, 'ecosystem data without articles is not even given an empty list');
  }
  assert.deepStrictEqual(mock.calls, []);
  assert.deepStrictEqual(adoption(), NOTHING);
});

test('ecosystem data without totals or an audit trail is added to all the same', async t => {
  const cited = source('https://blog.example/posts/bare-data-4221');
  pages(t, [aboutIt(cited.url)]);
  const data = {};

  const adopted = await adoptGroundedSources(feature(), data, [cited]);

  assert.deepStrictEqual(adopted, [cited]);
  assert.deepStrictEqual(data, { articles: [cited], blogs: [cited], docs: [] });
});

// --- as the analysis runs it ---------------------------------------------------------------------------------

const REDIRECT_HOST = 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/';
const link = token => `${REDIRECT_HOST}${token}`;
const redirectRoute = (token, location) => ({ match: link(token), status: 302, headers: { location }, text: '' });
const chunk = (uri, title) => ({ web: { uri, title } });
const grounding = (...chunks) => ({ groundingMetadata: { webSearchQueries: ['zorble gadgets'], groundingChunks: chunks } });

/**
 * Gemini as the analysis meets it. The grounded call writes the synthesis and
 * cites `chunks`. Any other call is the relevance check, answered by a stand-in
 * that finds a candidate relevant when "zorble" is in what it was shown; what it
 * was shown is kept.
 */
function gemini(t, { routes = [], chunks = [] }) {
  config.geminiApiKey = 'test-key-do-not-log';
  const fetchMock = installFetchMock(routes, { onUnmatched: 'empty' });
  const shown = [];
  const mock = installGeminiMock(call => {
    if (call.grounded) return answer(synthesisText(), grounding(...chunks));

    const prompt = call.body.contents[0].parts[0].text;
    const candidates = JSON.parse(/BEGIN UNTRUSTED CANDIDATE DATA\n([\s\S]*?)\nEND UNTRUSTED CANDIDATE DATA/.exec(prompt)[1]);
    shown.push(...candidates);
    return answer(JSON.stringify({
      results: candidates.map(item => ({
        id: item.id,
        isRelevant: /zorble/i.test(`${item.title} ${item.snippet}`),
        confidence: 90,
        reason: 'Stand-in verdict',
      })),
    }));
  });
  t.after(() => {
    mock.restore();
    fetchMock.restore();
  });
  return { fetchMock, mock, shown };
}

test('analysis: a source Gemini found is read, verified and counted in the momentum score; one about something else is not', async t => {
  const good = 'https://blog.example/posts/launch-5001'; // the address says nothing about the feature
  const bad = 'https://other.example/news/weather-5002';
  const { shown } = gemini(t, {
    routes: [
      redirectRoute('good', good),
      redirectRoute('bad', bad),
      pageRoute(good, 'Zorble Gadgets launch', 'Zorble Gadgets shipped in Chrome 150.'),
      pageRoute(bad, 'Weather today', 'Rain all week.'),
    ],
    chunks: [chunk(link('good'), 'blog.example'), chunk(link('bad'), 'other.example')],
  });
  const data = ecosystem();

  const analysis = await analyzeFeature(feature(), data);

  assert.deepStrictEqual(urls(data.articles), [good]);
  assert.strictEqual(data.articles[0].title, 'Zorble Gadgets launch');
  assert.strictEqual(data.articles[0].verifiedBy, 'llm');
  assert.strictEqual(data.metrics.totalArticles, 1);
  // One article is worth 10 points. The score is worked out after the source was added, and without the rejected one.
  assert.strictEqual(analysis.momentumScore, 10);
  assert.strictEqual(analysis.momentumLevel, 'Emerging');
  assert.deepStrictEqual(urls(analysis.groundedSources), [good]);
  assert.strictEqual(analysis.groundedSources[0], data.articles[0]);
  assert.strictEqual(analysis.isAiEnhanced, true);
  assert.strictEqual(analysis.executiveSummary, SYNTHESIS.executiveSummary);

  // The check was shown the words of the page, not just the name of the site.
  const candidate = shown.find(item => item.url === good);
  assert.strictEqual(candidate.title, 'Zorble Gadgets launch');
  assert.match(candidate.snippet, /Zorble Gadgets shipped in Chrome 150\./);

  // Nothing Google minted for the request is left in what gets published.
  assert.ok(!JSON.stringify({ analysis, data }).includes('vertexaisearch'));
  assert.deepStrictEqual(groundingStatsSnapshot(), {
    found: 2,
    redirects: 2,
    resolved: 2,
    duplicates: 0,
    dropped: {},
    adoption: counts({ considered: 2, added: 1, rejected: 1 }),
  });
});

test('analysis: a source the feature already lists is not counted twice, and is not checked again', async t => {
  const url = 'https://blog.example/posts/launch-5003';
  const { mock } = gemini(t, {
    routes: [redirectRoute('listed', `https://www.blog.example/posts/launch-5003/?utm_source=feed`)],
    chunks: [chunk(link('listed'), 'blog.example')],
  });
  const listed = { title: 'Zorble Gadgets launch', url, domain: 'blog.example', isBlog: true, verifiedBy: 'llm' };
  const data = ecosystem({ articles: [listed] });

  const analysis = await analyzeFeature(feature(), data);

  assert.strictEqual(data.articles.length, 1);
  assert.strictEqual(analysis.momentumScore, 10, 'one article, counted once');
  assert.strictEqual(analysis.groundedSources[0], listed);
  assert.strictEqual(mock.calls.filter(call => !call.grounded).length, 0, 'the relevance check was not called');
});

test('analysis: a synthesis that cites nothing adds nothing', async t => {
  gemini(t, { chunks: [] });
  const data = ecosystem();

  const analysis = await analyzeFeature(feature(), data);

  assert.strictEqual(analysis.isAiEnhanced, true);
  assert.deepStrictEqual(analysis.groundedSources, []);
  assert.strictEqual(analysis.momentumScore, 0);
  assert.deepStrictEqual(data.auditTrail.searchesExecuted, []);
});

test('analysis: a cited page that cannot be read is not sent to the relevance check and does not count', async t => {
  const url = 'https://blog.example/posts/launch-5005';
  const { shown } = gemini(t, {
    routes: [redirectRoute('silent', url)], // the page itself is a 404
    chunks: [chunk(link('silent'), 'blog.example')],
  });
  const data = ecosystem();

  const analysis = await analyzeFeature(feature(), data);

  assert.deepStrictEqual(shown, [], 'the check was never asked about it');
  assert.deepStrictEqual(data.articles, []);
  assert.strictEqual(analysis.momentumScore, 0);
  assert.deepStrictEqual(analysis.groundedSources, []);
  assert.strictEqual(analysis.isAiEnhanced, true, 'the synthesis itself is kept');
  assert.deepStrictEqual(groundingStatsSnapshot().adoption, counts({ considered: 1, unread: 1 }));
});

test('analysis: when the sources cannot be added, the synthesis is still kept', async t => {
  const url = 'https://blog.example/posts/launch-5004';
  gemini(t, {
    routes: [redirectRoute('boom', url), pageRoute(url, 'Zorble Gadgets launch', 'Zorble Gadgets shipped.')],
    chunks: [chunk(link('boom'), 'blog.example')],
  });
  const warnings = [];
  t.mock.method(logger, 'warn', message => warnings.push(message));
  const data = ecosystem();
  // Adding sources reads the feature's resources; a failure there must not cost the feature its AI summary.
  Object.defineProperty(data, 'resources', {
    get() {
      if (new Error().stack.includes('grounded.js')) throw new Error('resources are unreadable');
      return [];
    },
  });

  const analysis = await analyzeFeature(feature(), data);

  assert.strictEqual(analysis.isAiEnhanced, true);
  assert.strictEqual(analysis.executiveSummary, SYNTHESIS.executiveSummary);
  assert.deepStrictEqual(analysis.groundedSources, []);
  assert.deepStrictEqual(data.articles, []);
  assert.strictEqual(warnings.length, 1);
  assert.match(warnings[0], /\[Grounded Sources\] Could not add the sources Gemini found for "Zorble Gadgets": resources are unreadable/);
});

test('analysis: without an AI provider nothing is fetched and the heuristic stands as it was', async t => {
  const mock = pages(t, []);
  const data = ecosystem({ articles: [{ title: 'Earlier', url: 'https://old.example/earlier', domain: 'old.example', isBlog: true }] });

  const analysis = await analyzeFeature(feature(), data);

  assert.strictEqual(analysis.isAiEnhanced, false);
  assert.deepStrictEqual(analysis.groundedSources, []);
  assert.strictEqual(analysis.momentumScore, 10);
  assert.deepStrictEqual(mock.calls, []);
  assert.deepStrictEqual(adoption(), NOTHING);
});
