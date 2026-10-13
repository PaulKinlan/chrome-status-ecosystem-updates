import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import { config } from '../src/config.js';
import { logger } from '../src/logger.js';
import { normalizeFeature } from '../src/chromestatus.js';
import { gatherEcosystemData } from '../src/search/index.js';
import { verifySemantically } from '../src/search/verifier.js';
import { resetWebFeatures } from '../src/search/web-features.js';
import { resetWebStatus } from '../src/search/webstatus.js';
import { resetWebFeatureStats } from '../src/web-features-stats.js';
import { installFetchMock } from './_support/fetch-mock.js';
import { installGeminiMock, answer } from './_support/gemini-mock.js';
import { ANCHOR_POSITIONING, SAMPLE_MAPPING, mappingRoutes, webStatusGroupRoute, webStatusSearchRoute } from './_support/web-features-mock.js';

/**
 * `gatherEcosystemData` is the orchestrator: it fans out to every source,
 * verifies what came back and builds the audit trail. These tests run it with
 * every upstream mocked and look at what it reports.
 */

/** A feature as the pipeline passes it around. Each test names its own (see the Twitter cache note). */
const featureNamed = (id, name) => normalizeFeature({ id, name, summary: `Lets a page use ${name}.` }, 154, 'Enabled by default');

const withoutColor = line => line.replace(/\x1b\[[0-9;]*m/g, '');

/**
 * Runs the orchestrator with `routes` answering the network (everything else is
 * a 404) and the given `config` overrides, restored afterwards. `gemini`, when
 * given, answers Gemini requests (see gemini-mock.js); `calls` lists every URL requested.
 */
async function gather(t, feature, { routes, settings = {}, gemini = null }) {
  const saved = {};
  for (const [key, value] of Object.entries(settings)) {
    saved[key] = config[key];
    config[key] = value;
  }

  // The web-features mapping is downloaded once per run and kept at module level: one test's must not answer the next's.
  const forgetMapping = () => {
    resetWebFeatures();
    resetWebStatus();
    resetWebFeatureStats();
  };
  forgetMapping();

  const lines = [];
  t.mock.method(console, 'log', (...args) => { lines.push(withoutColor(args.join(' '))); });
  t.mock.method(console, 'error', () => {});
  logger.setVerbose(true); // an audit line with nothing verified is only printed when verbose

  const mock = installFetchMock(routes, { onUnmatched: 'empty' });
  const ai = gemini ? installGeminiMock(gemini) : null;
  t.after(() => {
    ai?.restore();
    mock.restore();
    logger.setVerbose(false);
    Object.assign(config, saved);
    forgetMapping();
  });

  const result = await gatherEcosystemData(feature);
  return { result, lines, calls: mock.calls, geminiCalls: ai?.calls ?? [] };
}

const xApi = tweets => ({
  match: 'api.twitter.com/2/tweets/search/recent',
  json: {
    data: tweets.map(({ id, text }) => ({ id, text, author_id: 'u1', created_at: '2026-10-01T10:00:00Z', public_metrics: { like_count: 3, retweet_count: 1, reply_count: 1 } })),
    includes: { users: [{ id: 'u1', username: 'alice', name: 'Alice' }] },
  },
});

const brave = results => ({
  match: 'api.search.brave.com/res/v1/web/search',
  json: { web: { results } },
});

const hackerNews = hits => ({ match: 'hn.algolia.com/api/v1/search', json: { hits } });

const entryOf = (result, type) => result.auditTrail.searchesExecuted.find(entry => entry.type === type);

// ---------------------------------------------------------------------------
// The "Twitter / X API v2 N/M verified" audit line. Tweets reach a report from
// the X API and from x.com links in web-search results; the line used to set
// every verified tweet against the API's own count and printed "2/1".
// ---------------------------------------------------------------------------

test('the X audit counts the API\'s tweets and the web search\'s tweets each against their own candidates', async t => {
  const feature = featureNamed(4242, 'Frobnicate Widgets');
  const { result, lines } = await gather(t, feature, {
    settings: { twitterBearerToken: 'test-bearer', braveSearchApiKey: 'test-brave' },
    routes: [
      xApi([{ id: '1', text: 'Trying Frobnicate Widgets in Chrome today' }]),
      brave([
        { title: 'Frobnicate Widgets are shipping', url: 'https://x.com/bob/status/222', description: 'Frobnicate Widgets everywhere' },
        { title: 'My cat photos', url: 'https://x.com/carol/status/333', description: 'cats' },
      ]),
      // A verified non-tweet discussion must count towards neither tweet figure.
      hackerNews([{ objectID: '9', title: 'Frobnicate Widgets launch', points: 12, num_comments: 3, created_at: '2026-10-02T08:00:00Z' }]),
    ],
  });

  assert.ok(lines.some(l => /Twitter \/ X API v2: 1\/1 verified/.test(l)), `API line missing or wrong:\n${lines.filter(l => /Twitter|Tweets/.test(l)).join('\n')}`);
  assert.ok(lines.some(l => /Tweets found by web search: 1\/2 verified/.test(l)), `web line missing or wrong:\n${lines.filter(l => /Twitter|Tweets/.test(l)).join('\n')}`);
  assert.ok(!lines.some(l => /Twitter \/ X API v2: 2\/1/.test(l)), 'the impossible "2/1" must never be printed');

  const api = entryOf(result, 'twitter');
  assert.strictEqual(api.provider, 'Twitter / X API v2');
  assert.strictEqual(api.rawFound, 1);
  assert.strictEqual(api.verified, 1, 'verified cannot exceed found');

  const web = entryOf(result, 'twitter_web');
  assert.strictEqual(web.provider, 'Tweets found by web search');
  assert.strictEqual(web.rawFound, 2);
  assert.strictEqual(web.verified, 1);

  assert.strictEqual(result.metrics.twitterCount, 2, 'the metrics still count every verified tweet, however it was found');
  assert.strictEqual(result.discussions.filter(d => d.source === 'Hacker News').length, 1);
});

test('without an X token the audit says so, and tweets found by web search are still reported', async t => {
  const feature = featureNamed(4243, 'Quuxify Panels');
  const { result, lines } = await gather(t, feature, {
    settings: { twitterBearerToken: '', braveSearchApiKey: 'test-brave' },
    routes: [
      brave([{ title: 'Quuxify Panels in the wild', url: 'https://twitter.com/dave/status/444', description: 'Quuxify Panels demo' }]),
    ],
  });

  assert.ok(lines.some(l => /Twitter \/ X API v2: 0\/0 verified .*disabled: TWITTER_BEARER_TOKEN or X_BEARER_TOKEN not configured/.test(l)));
  assert.ok(lines.some(l => /Tweets found by web search: 1\/1 verified/.test(l)));

  assert.match(entryOf(result, 'twitter').status, /Inactive/);
  assert.strictEqual(entryOf(result, 'twitter').verified, 0);
  assert.deepStrictEqual(
    { rawFound: entryOf(result, 'twitter_web').rawFound, verified: entryOf(result, 'twitter_web').verified },
    { rawFound: 1, verified: 1 }
  );
  assert.strictEqual(result.metrics.twitterCount, 1);
});

test('no tweet found by web search means no separate line and no extra audit entry', async t => {
  const feature = featureNamed(4244, 'Garply Anchors');
  const { result, lines } = await gather(t, feature, {
    settings: { twitterBearerToken: 'test-bearer', braveSearchApiKey: 'test-brave' },
    routes: [
      xApi([{ id: '5', text: 'Garply Anchors look great' }]),
      brave([{ title: 'Garply Anchors explained', url: 'https://blog.example.com/garply-anchors', description: 'A tutorial on Garply Anchors' }]),
    ],
  });

  assert.ok(lines.some(l => /Twitter \/ X API v2: 1\/1 verified/.test(l)));
  assert.ok(!lines.some(l => /Tweets found by web search/.test(l)), 'nothing to report, nothing printed');
  assert.strictEqual(entryOf(result, 'twitter_web'), undefined);
  assert.strictEqual(entryOf(result, 'twitter').rawFound, 1);
});

// ---------------------------------------------------------------------------
// What counts as a tweet. Web results used to be classed by `url.includes('x.com')`,
// which also matched 3cx.com, linux.com and dropbox.com, and by
// `includes('twitter.com')`, which matched help.twitter.com: 12 of the 99 "tweets"
// in one weekly report were ordinary pages.
// ---------------------------------------------------------------------------

test('only a link to a single tweet is a tweet; look-alike hosts and other twitter.com pages stay articles', async t => {
  const feature = featureNamed(4251, 'Wibble Frames');
  const pages = [
    ['https://www.3cx.com/blog/wibble-frames', 'Wibble Frames on a phone system'],
    ['https://www.linux.com/news/wibble-frames', 'Wibble Frames on Linux'],
    ['https://www.dropbox.com/blog/wibble-frames', 'Wibble Frames at Dropbox'],
    ['https://help.twitter.com/en/using-x/wibble-frames', 'Wibble Frames notifications help'],
    ['https://x.com/wibbleframes', 'Wibble Frames profile'],
    ['https://twitter.com/search?q=wibble', 'Wibble Frames search'],
  ];
  const { result } = await gather(t, feature, {
    settings: { braveSearchApiKey: 'test-brave' },
    routes: [
      brave([
        ...pages.map(([url, title]) => ({ url, title, description: 'Wibble Frames' })),
        { title: 'Wibble Frames are shipping', url: 'https://mobile.twitter.com/eve/status/555', description: 'Wibble Frames are shipping' },
      ]),
    ],
  });

  const tweets = result.discussions.filter(d => d.source === 'Twitter / X');
  assert.deepStrictEqual(tweets.map(d => [d.id, d.author, d.url]), [['555', '@eve', 'https://mobile.twitter.com/eve/status/555']]);
  assert.strictEqual(entryOf(result, 'twitter_web').rawFound, 1);
  assert.strictEqual(result.metrics.twitterCount, 1);

  const articleUrls = result.articles.map(a => a.url);
  for (const [url] of pages) assert.ok(articleUrls.includes(url), `${url} was dropped instead of being kept as an article`);
});

// ---------------------------------------------------------------------------
// Only a few pages can be read per feature. They used to be the first eight in
// provider order; they are now the eight most likely to be about the feature.
// ---------------------------------------------------------------------------

test('page excerpts are fetched for the candidates most likely to be about the feature, not the first eight listed', async t => {
  const feature = featureNamed(4252, 'Zorble Gadgets');
  const filler = Array.from({ length: 8 }, (_, i) => ({ title: `Unrelated page ${i}`, url: `https://filler.example/page-${i}`, description: 'nothing relevant' }));
  const relevant = [
    // Listed first, but only a keyword match (confidence 80): ranking puts it below the exact name matches listed after it.
    { title: 'Gadgets and zorble', url: 'https://guide.example/zorble-0', description: 'Notes on gadgets and zorble' },
    ...Array.from({ length: 3 }, (_, i) => ({ title: `Zorble Gadgets guide ${i + 1}`, url: `https://guide.example/zorble-${i + 1}`, description: 'Zorble Gadgets explained' })),
  ];
  assert.deepStrictEqual(
    relevant.map(({ title, url, description }) => verifySemantically(feature, { title, url, snippet: description })).map(v => [v.isRelevant, v.confidence]),
    [[true, 80], [true, 90], [true, 90], [true, 90]],
    'the setup: all four are relevant, and ranking would move the first to the end'
  );

  const { result, calls } = await gather(t, feature, {
    settings: { braveSearchApiKey: 'test-brave' },
    routes: [
      brave([...filler, ...relevant]), // the relevant ones are listed last
      { match: url => /^https:\/\/(filler|guide)\.example\//.test(url), text: '<html><body><p>Page text.</p></body></html>', headers: { 'content-type': 'text/html' } },
    ],
  });

  const fetched = calls.filter(url => /^https:\/\/(filler|guide)\.example\//.test(url));
  assert.strictEqual(fetched.length, 8, 'the cap is still eight');
  for (let i = 0; i < 4; i++) {
    assert.ok(fetched.includes(`https://guide.example/zorble-${i}`), `relevant page ${i} was not read: ${fetched.join(', ')}`);
  }
  // The candidates keep their own order; only the choice of what to read changed.
  assert.deepStrictEqual(result.articles.map(a => a.url), relevant.map(r => r.url));
  assert.ok(result.articles.every(a => a.contentExcerpt === 'Page text.'));
});

// ---------------------------------------------------------------------------
// The query plan only ever drives Brave, so the LLM call that extends it is
// wasted - one Gemini call per feature - when Brave is not in use.
// ---------------------------------------------------------------------------

const plannerCalls = geminiCalls => geminiCalls.filter(call => call.body.contents[0].parts[0].text.includes('search query strategist'));
const plannerAnswer = () => answer(JSON.stringify({ queries: [{ query: '"Blorp Panels" tutorial', intent: 'tutorials-blogs', description: 'tutorials' }] }));

test('without a Brave key the query planner does not spend an LLM call, and says so in the plan', async t => {
  const feature = featureNamed(4253, 'Blorp Panels');
  const { result, geminiCalls } = await gather(t, feature, {
    settings: { geminiApiKey: 'test-gemini', braveSearchApiKey: '' },
    routes: [],
    gemini: () => plannerAnswer(),
  });

  assert.strictEqual(plannerCalls(geminiCalls).length, 0);
  assert.ok(!result.queryPlan.some(q => q.query === '"Blorp Panels" tutorial'));
  assert.ok(result.queryPlan.some(q => q.intent === 'core-api'), 'the deterministic plan is still built');
});

test('with a Brave key the query planner still asks the LLM for more queries', async t => {
  const feature = featureNamed(4254, 'Blorp Frames');
  const { result, geminiCalls } = await gather(t, feature, {
    settings: { geminiApiKey: 'test-gemini', braveSearchApiKey: 'test-brave' },
    routes: [brave([])],
    gemini: () => plannerAnswer(),
  });

  assert.strictEqual(plannerCalls(geminiCalls).length, 1);
  assert.ok(result.queryPlan.some(q => q.query === '"Blorp Panels" tutorial'));
});

// ---------------------------------------------------------------------------
// One page is one article, however its address is spelled; and a candidate that
// came with nothing but its site's name takes the title of its page.
// ---------------------------------------------------------------------------

const htmlPage = title => `<html><head><title>${title}</title></head><body><p>Zorble Gadgets, as the page says.</p></body></html>`;
const HTML = { 'content-type': 'text/html' };

test('a page found under different spellings by different sources is one article', async t => {
  const feature = featureNamed(4261, 'Zorble Gadgets');
  const { result } = await gather(t, feature, {
    settings: { braveSearchApiKey: 'test-brave' },
    routes: [
      brave([
        { title: 'Zorble Gadgets, in depth', url: 'https://www.blog.example/zorble-gadgets-in-depth/', description: 'Zorble Gadgets in depth' },
        { title: 'A second page', url: 'https://other.example/zorble-gadgets-second', description: 'Zorble Gadgets, again' },
      ]),
      hackerNews([{ objectID: '4261001', title: 'Zorble Gadgets, in depth', url: 'http://blog.example/zorble-gadgets-in-depth?utm_source=hn', points: 40, num_comments: 12, created_at: '2026-10-02T08:00:00Z' }]),
    ],
  });

  const inDepth = result.articles.filter(article => article.url.includes('zorble-gadgets-in-depth'));
  assert.strictEqual(inDepth.length, 1, `listed ${inDepth.length} times: ${inDepth.map(a => a.url).join(', ')}`);
  assert.strictEqual(inDepth[0].source, 'Hacker News Link', 'the first to find it keeps it');
  assert.strictEqual(inDepth[0].url, 'http://blog.example/zorble-gadgets-in-depth', 'shown as that source spelled it, without tracking');
  assert.deepStrictEqual(result.articles.map(article => article.domain).sort(), ['blog.example', 'other.example']);
  assert.strictEqual(result.metrics.totalArticles, 2);
});

test('a page the feature links to officially does not come back as an article under another spelling', async t => {
  const feature = {
    ...featureNamed(4262, 'Zorble Gadgets'),
    specUrl: 'https://spec.example/zorble-gadgets',
    explainerUrls: ['http://explainers.example/zorble/README.md'],
    docUrls: ['http://docs.example/zorble-gadgets/'],
    sampleUrls: ['https://samples.example/zorble-gadgets-demo'],
  };
  const { result } = await gather(t, feature, {
    settings: { braveSearchApiKey: 'test-brave' },
    routes: [
      brave([
        { title: 'Zorble Gadgets spec', url: 'http://www.spec.example/zorble-gadgets#intro', description: 'Zorble Gadgets' },
        { title: 'Zorble Gadgets explainer', url: 'https://www.explainers.example/zorble/README.md#motivation', description: 'Zorble Gadgets' },
        { title: 'Zorble Gadgets docs', url: 'https://docs.example/zorble-gadgets', description: 'Zorble Gadgets' },
        { title: 'Zorble Gadgets demo', url: 'https://www.samples.example/zorble-gadgets-demo/?utm_source=feed', description: 'Zorble Gadgets' },
        { title: 'A new article', url: 'https://blog.example/zorble-gadgets-new', description: 'Zorble Gadgets' },
      ]),
    ],
  });

  assert.deepStrictEqual(result.articles.map(article => article.url), ['https://blog.example/zorble-gadgets-new']);
  assert.deepStrictEqual(result.resources.map(resource => resource.type), ['spec', 'explainer', 'documentation', 'demo']);
});

test('a candidate that came with only its site\'s name takes the title of its page, unless the page only says what stood in the way', async t => {
  const feature = featureNamed(4263, 'Zorble Gadgets');
  const { result } = await gather(t, feature, {
    settings: { braveSearchApiKey: 'test-brave' },
    routes: [
      brave([
        { title: 'blog.example', url: 'https://blog.example/zorble-gadgets-titled', description: 'Zorble Gadgets' },
        { title: 'walled.example', url: 'https://walled.example/zorble-gadgets-walled', description: 'Zorble Gadgets' },
        { title: 'A title the search gave', url: 'https://named.example/zorble-gadgets-named', description: 'Zorble Gadgets' },
      ]),
      { match: 'https://blog.example/zorble-gadgets-titled', text: htmlPage('Zorble Gadgets, explained'), headers: HTML },
      { match: 'https://walled.example/zorble-gadgets-walled', text: htmlPage('Just a moment... | Cloudflare'), headers: HTML },
      { match: 'https://named.example/zorble-gadgets-named', text: htmlPage('The page\'s own title'), headers: HTML },
    ],
  });

  assert.deepStrictEqual(
    Object.fromEntries(result.articles.map(article => [article.domain, article.title])),
    {
      'blog.example': 'Zorble Gadgets, explained',
      'walled.example': 'walled.example',
      'named.example': 'A title the search gave',
    }
  );
  assert.ok(result.articles.every(article => /Zorble Gadgets, as the page says\./.test(article.contentExcerpt)), 'every page was still read');
});

test('the feature\'s own ChromeStatus pages and bug are not listed as articles, however a search spells them', async t => {
  const feature = { ...featureNamed(4264, 'Zorble Gadgets'), bugUrl: 'https://issues.chromium.org/issues/4264001' };
  const { result } = await gather(t, feature, {
    settings: { braveSearchApiKey: 'test-brave' },
    routes: [
      brave([
        { title: 'Zorble Gadgets - Chrome Platform Status', url: 'http://www.chromestatus.com/feature/4264?utm_source=x', description: 'Zorble Gadgets' },
        { title: 'Zorble Gadgets (lite)', url: 'https://chromestatuslite.com/feature/4264/', description: 'Zorble Gadgets' },
        { title: 'Zorble Gadgets bug', url: 'http://issues.chromium.org/issues/4264001#c3', description: 'Zorble Gadgets' },
        { title: 'A real article', url: 'https://blog.example/zorble-gadgets-real', description: 'Zorble Gadgets' },
      ]),
      hackerNews([{ objectID: '4264001', title: 'Zorble Gadgets', url: 'https://chromestatus.com/feature/4264', points: 9, num_comments: 1, created_at: '2026-10-02T08:00:00Z' }]),
    ],
  });

  assert.deepStrictEqual(result.articles.map(article => article.url), ['https://blog.example/zorble-gadgets-real']);
});

test('a feature with no bug and no ChromeStatus address of its own still gathers coverage', async t => {
  const feature = { ...featureNamed(4265, 'Zorble Gadgets'), bugUrl: null, chromeStatusUrl: undefined, chromeStatusLiteUrl: '' };
  const { result } = await gather(t, feature, {
    settings: { braveSearchApiKey: 'test-brave' },
    routes: [brave([{ title: 'A real article', url: 'https://blog.example/zorble-gadgets-real', description: 'Zorble Gadgets' }])],
  });

  assert.deepStrictEqual(result.articles.map(article => article.url), ['https://blog.example/zorble-gadgets-real']);
});

// ---------------------------------------------------------------------------
// The web-features group: Baseline, test pass rates, positions and use counters
// are read for the group the feature is mapped to (src/search/web-features.js).
// ---------------------------------------------------------------------------

const ANCHOR = 5124767085953024;            // the one feature of the `anchor-positioning` group in SAMPLE_MAPPING
const SHARED = 5000000000000002;            // one of the three features of the `webtransport` group
const NO_TESTS = 5000000000000009;          // the only feature of `no-tests-here`, which has no results page
const withMapping = (...routes) => [...mappingRoutes(SAMPLE_MAPPING), ...routes];
const groupBody = (id, overrides = {}) => ({ ...ANCHOR_POSITIONING, feature_id: id, name: id, ...overrides });
const wptCalls = calls => calls.filter(url => url.includes('wpt.fyi'));

test('a feature in the mapping is read for its group: Baseline by id, the group\'s pass rates, the mapping\'s own details, and no search of wpt.fyi', async t => {
  const { result, lines, calls } = await gather(t, featureNamed(ANCHOR, 'CSS anchor positioning'), {
    routes: withMapping(webStatusGroupRoute('anchor-positioning', ANCHOR_POSITIONING)),
  });

  assert.strictEqual(result.webFeature.id, 'anchor-positioning');
  assert.strictEqual(result.webFeature.scope, 'group');
  assert.strictEqual(result.webFeature.groupSize, 1);
  assert.deepStrictEqual(result.webFeature.positions.map(p => p.vendor), ['Mozilla', 'WebKit']);
  assert.strictEqual(result.webFeature.usage.percentageOfPageLoad, 0.0735, 'a share of page loads, to the precision the mapping is read at');

  assert.strictEqual(result.baseline.featureId, 'anchor-positioning');
  assert.strictEqual(result.baseline.matchedOn, 'web-features mapping');
  assert.strictEqual(result.baseline.status, 'limited');

  assert.strictEqual(result.wpt.scope, 'group');
  assert.strictEqual(result.wpt.webFeatureId, 'anchor-positioning');
  assert.strictEqual(result.wpt.url, 'https://wpt.fyi/results?q=feature:anchor-positioning');
  assert.strictEqual(result.wpt.passRates.stable.chrome, 96.8);
  assert.strictEqual('testCount' in result.wpt, false, 'the count of test paths that matched a word is gone');
  assert.strictEqual('wptTestCount' in result.metrics, false);

  assert.deepStrictEqual(wptCalls(calls), [], 'wpt.fyi is not searched');
  assert.strictEqual(calls.filter(url => url.startsWith('https://api.webstatus.dev/v1/features/anchor-positioning?')).length, 1, 'one request serves Baseline and the tests');
  assert.ok(lines.some(line => /Web Platform Tests: 1\/1 verified \(group "anchor-positioning": Chrome 96\.8% passing \(stable\)\)/.test(line)), lines.join('\n'));
});

test('the audit trail names the group, how many other features share it, and whose test results these are', async t => {
  const { result } = await gather(t, featureNamed(ANCHOR, 'CSS anchor positioning'), {
    routes: withMapping(webStatusGroupRoute('anchor-positioning', ANCHOR_POSITIONING)),
  });

  assert.deepStrictEqual(entryOf(result, 'web_features'), {
    type: 'web_features',
    provider: 'web-features mapping',
    status: 'group "anchor-positioning", shared with 0 other ChromeStatus feature(s)',
    url: 'https://webstatus.dev/features/anchor-positioning',
  });
  assert.deepStrictEqual(entryOf(result, 'wpt'), {
    type: 'wpt',
    provider: 'Web Platform Tests (wpt.fyi)',
    scope: 'group',
    webFeatureId: 'anchor-positioning',
    status: 'group "anchor-positioning": Chrome 96.8% passing (stable)',
  });
  assert.strictEqual(entryOf(result, 'baseline').status, 'limited');
  assert.strictEqual(entryOf(result, 'baseline').url, 'https://webstatus.dev/features/anchor-positioning');
});

test('a group shared with other ChromeStatus features says how many', async t => {
  const { result } = await gather(t, featureNamed(SHARED, 'WebTransportReceiveStream'), {
    routes: withMapping(webStatusGroupRoute('webtransport', groupBody('webtransport'))),
  });

  assert.strictEqual(result.webFeature.groupSize, 3);
  assert.strictEqual(entryOf(result, 'web_features').status, 'group "webtransport", shared with 2 other ChromeStatus feature(s)');
});

test('a feature outside the mapping has no group and no test results, and is looked up by name for Baseline only', async t => {
  const { result, lines, calls } = await gather(t, featureNamed(999999, 'Blorp Panels'), {
    routes: withMapping(webStatusSearchRoute([])),
  });

  assert.strictEqual(result.webFeature, null);
  assert.strictEqual(result.wpt, null);
  assert.strictEqual(result.baseline, null);
  assert.deepStrictEqual(entryOf(result, 'web_features'), { type: 'web_features', provider: 'web-features mapping', status: 'not in a web-features group', url: null });
  assert.deepStrictEqual(entryOf(result, 'wpt'), { type: 'wpt', provider: 'Web Platform Tests (wpt.fyi)', scope: 'group', webFeatureId: null, status: 'not in a web-features group' });
  assert.strictEqual(entryOf(result, 'baseline').status, 'untracked');
  assert.ok(calls.some(url => url.startsWith('https://api.webstatus.dev/v1/features?q=')), 'the name search is still made');
  assert.deepStrictEqual(wptCalls(calls), []);
  assert.ok(!lines.some(line => line.includes('Web Platform Tests')), 'nothing to report, nothing verified: no line');
});

test('a group the mapping lists no tests for has no test results, and says so', async t => {
  const { result } = await gather(t, featureNamed(NO_TESTS, 'Untested thing'), {
    routes: withMapping(webStatusGroupRoute('no-tests-here', groupBody('no-tests-here', { wpt: undefined, baseline: { status: 'widely' } }))),
  });

  assert.strictEqual(result.webFeature.wptUrl, null);
  assert.strictEqual(result.wpt, null);
  assert.strictEqual(result.baseline.status, 'widely', 'the group is still found by id');
  assert.strictEqual(entryOf(result, 'wpt').status, 'group "no-tests-here" has no test results');
  assert.strictEqual(entryOf(result, 'wpt').webFeatureId, null, 'there is no result to name a group for');
});

test('a group whose pass rates webstatus.dev did not give still links to its results and says there is no rate yet', async t => {
  const { result, lines } = await gather(t, featureNamed(ANCHOR, 'CSS anchor positioning'), {
    routes: withMapping(webStatusGroupRoute('anchor-positioning', null, 404)),
  });

  assert.strictEqual(result.baseline, null, 'Baseline needs webstatus.dev');
  assert.strictEqual(result.wpt.passRates, null);
  assert.strictEqual(result.wpt.url, 'https://wpt.fyi/results?q=feature:anchor-positioning');
  assert.strictEqual(entryOf(result, 'wpt').status, 'group "anchor-positioning": no stable pass rate for Chrome yet');
  assert.ok(lines.some(line => /Web Platform Tests: 1\/1 verified \(group "anchor-positioning": no stable pass rate for Chrome yet\)/.test(line)), lines.join('\n'));
});

test('stable rates for other browsers but not Chrome are no stable rate for Chrome; a rate of 0 is a rate', async t => {
  const other = await gather(t, featureNamed(ANCHOR, 'CSS anchor positioning'), {
    routes: withMapping(webStatusGroupRoute('anchor-positioning', groupBody('anchor-positioning', { wpt: { stable: { firefox: { score: 0.5 } }, experimental: { chrome: { score: 0.9 } } } }))),
  });
  assert.strictEqual(entryOf(other.result, 'wpt').status, 'group "anchor-positioning": no stable pass rate for Chrome yet');

  const experimentalOnly = await gather(t, featureNamed(ANCHOR, 'CSS anchor positioning'), {
    routes: withMapping(webStatusGroupRoute('anchor-positioning', groupBody('anchor-positioning', { wpt: { experimental: { chrome: { score: 0.9 } } } }))),
  });
  assert.strictEqual(experimentalOnly.result.wpt.passRates.stable, null, 'webstatus.dev gave no stable object at all');
  assert.strictEqual(entryOf(experimentalOnly.result, 'wpt').status, 'group "anchor-positioning": no stable pass rate for Chrome yet');

  const zero = await gather(t, featureNamed(ANCHOR, 'CSS anchor positioning'), {
    routes: withMapping(webStatusGroupRoute('anchor-positioning', groupBody('anchor-positioning', { wpt: { stable: { chrome: { score: 0 } } } }))),
  });
  assert.strictEqual(entryOf(zero.result, 'wpt').status, 'group "anchor-positioning": Chrome 0% passing (stable)');
});

test('a feature the mapping does not list, but webstatus.dev matches by name confidently, gets that group\'s Baseline and tests', async t => {
  const { result } = await gather(t, featureNamed(999999, 'Anchor positioning'), {
    routes: withMapping(webStatusSearchRoute([ANCHOR_POSITIONING])),
  });

  assert.strictEqual(result.webFeature, null, 'the mapping does not know it');
  assert.strictEqual(result.baseline.featureId, 'anchor-positioning');
  assert.strictEqual(result.baseline.scope, 'group');
  assert.strictEqual(result.wpt.webFeatureId, 'anchor-positioning');
  assert.strictEqual(entryOf(result, 'wpt').status, 'group "anchor-positioning": Chrome 96.8% passing (stable)');
  assert.strictEqual(entryOf(result, 'web_features').status, 'not in a web-features group');
});

test('when the mapping cannot be downloaded the feature is gathered all the same, and Baseline falls back to the name search', async t => {
  const { result, calls } = await gather(t, featureNamed(ANCHOR, 'Anchor positioning'), {
    routes: [webStatusSearchRoute([ANCHOR_POSITIONING])],
  });

  assert.strictEqual(result.webFeature, null);
  assert.strictEqual(result.baseline.featureId, 'anchor-positioning');
  assert.strictEqual(result.baseline.matchedOn, 'exact name');
  assert.strictEqual(entryOf(result, 'web_features').status, 'not in a web-features group');
  assert.deepStrictEqual(wptCalls(calls), []);
});
