import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test, { beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';
import { config } from '../src/config.js';
import { callGeminiWithSearchGrounding } from '../src/search/gemini-grounding.js';
import { resetModelHealth } from '../src/search/gemini-models.js';
import { resetLlmStats } from '../src/llm-stats.js';
import { resetGroundingStats, groundingStatsSnapshot } from '../src/grounding-stats.js';
import { setHostResolver } from '../src/safe-fetch.js';
import { installFetchMock, makeResponse } from './_support/fetch-mock.js';
import { PUBLIC_TEST_ADDRESS } from './_support/setup.js';
import { installGeminiMock, answer, synthesisText } from './_support/gemini-mock.js';

/**
 * What became of the pages Gemini cites. Its search grounding names them through
 * links on a Google host that expire within a month and say nothing about the
 * page behind them; they are followed once, when the answer arrives.
 */

const PRIMARY = 'gemini-3.8-flash';
const SECOND = 'gemini-3.5-flash';
const REDIRECT_HOST = 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/';
const link = token => `${REDIRECT_HOST}${token}`;

beforeEach(() => {
  resetLlmStats();
  resetModelHealth();
  resetGroundingStats();
  config.geminiApiKey = 'test-key-do-not-log';
  config.geminiModel = PRIMARY;
});

afterEach(() => {
  config.geminiApiKey = '';
});

/** The redirect service answering for one link. A falsy `location` is a redirect with nowhere to go. */
const redirectRoute = (token, location, status = 302) => ({
  match: link(token),
  status,
  headers: location ? { location } : {},
  text: '',
});

const chunk = (uri, title) => ({ web: { uri, ...(title === undefined ? {} : { title }) } });
const support = (text, ...indices) => ({ segment: { text }, groundingChunkIndices: indices });
const grounded = (groundingChunks, groundingSupports) => ({
  groundingMetadata: {
    webSearchQueries: ['feature news'],
    groundingChunks,
    ...(groundingSupports ? { groundingSupports } : {}),
  },
});

/**
 * Installs the mocks for one test: the redirect service (static routes), then an
 * optional layer in front of it, then Gemini. Everything is put back afterwards.
 *
 * @param {{routes?: object[], wrap?: Function, gemini: Function}} setup
 *   `wrap(url, init, forward)` may answer a request itself or call `forward()` for the routed answer
 */
function mocks(t, { routes = [], wrap, gemini }) {
  t.mock.method(console, 'error', () => {}); // warnings about answers that were set aside are expected here
  const fetchMock = installFetchMock(routes);
  const routed = globalThis.fetch;
  if (wrap) {
    globalThis.fetch = (input, init) => {
      const url = typeof input === 'string' ? input : input?.url ?? String(input);
      return wrap(url, init, () => routed(input, init));
    };
  }
  const geminiMock = installGeminiMock(gemini);
  t.after(() => {
    geminiMock.restore();
    globalThis.fetch = routed;
    fetchMock.restore();
  });
  return { fetchMock, geminiMock };
}

const ask = (options = {}) => callGeminiWithSearchGrounding('prompt', { stage: 'gemini/search', ...options });
const redirectLookups = fetchMock => fetchMock.requests.filter(request => request.url.startsWith(REDIRECT_HOST));

// --- the real page --------------------------------------------------------------------------------------------

test('the sources of a grounded answer are the real pages, not Google\'s redirects', async t => {
  mocks(t, {
    routes: [
      redirectRoute('alpha', 'https://developer.chrome.com/blog/feature-x?utm_source=feed'),
      redirectRoute('bravo', 'https://www.example.org/posts/2026/thing/#comments'),
    ],
    gemini: () => answer('Prose.', grounded([chunk(link('alpha'), 'developer.chrome.com'), chunk(link('bravo'), 'example.org')])),
  });

  const result = await ask();

  assert.deepStrictEqual(result.groundedArticles, [
    {
      source: 'Google Search (Gemini Grounded)',
      type: 'article',
      title: 'developer.chrome.com',
      url: 'https://developer.chrome.com/blog/feature-x',
      domain: 'developer.chrome.com',
      isGrounded: true,
      snippet: '',
    },
    {
      source: 'Google Search (Gemini Grounded)',
      type: 'article',
      title: 'example.org',
      url: 'https://www.example.org/posts/2026/thing',
      domain: 'example.org',
      isGrounded: true,
      snippet: '',
    },
  ]);
  assert.ok(!JSON.stringify(result.groundedArticles).includes('vertexaisearch'));
  // What Gemini sent is passed on as it was, redirects and all.
  assert.deepStrictEqual(result.groundingChunks.map(c => c.web.uri), [link('alpha'), link('bravo')]);
});

test('following a link sends no credentials and says who is asking', async t => {
  const { fetchMock } = mocks(t, {
    routes: [redirectRoute('alpha', 'https://a.example/1'), redirectRoute('bravo', 'https://b.example/2')],
    gemini: () => answer('Prose.', grounded([chunk(link('alpha')), chunk(link('bravo'))])),
  });

  await ask();

  const lookups = redirectLookups(fetchMock);
  assert.strictEqual(lookups.length, 2);
  for (const { headers } of lookups) {
    const names = Object.keys(headers).map(name => name.toLowerCase());
    assert.ok(!names.includes('x-goog-api-key'), 'the Gemini key must not travel to the redirect host');
    assert.ok(!names.includes('authorization'));
    assert.match(headers['User-Agent'], /^chrome-status-ecosystem-tracker\//);
  }
  assert.ok(fetchMock.requests.every(request => request.method === 'GET'));
});

test('a source without a title is named after its real domain', async t => {
  mocks(t, {
    routes: [redirectRoute('alpha', 'https://www.deep.example.org/a'), redirectRoute('bravo', 'https://b.example/b')],
    gemini: () => answer('Prose.', grounded([chunk(link('alpha')), chunk(link('bravo'), '')])),
  });

  const { groundedArticles } = await ask();

  assert.deepStrictEqual(groundedArticles.map(a => [a.title, a.domain]), [
    ['deep.example.org', 'deep.example.org'],
    ['b.example', 'b.example'],
  ]);
});

test('a link that is not a redirect is used as it is and is not requested', async t => {
  const { fetchMock } = mocks(t, {
    gemini: () => answer('Prose.', grounded([
      chunk('https://example.com/article', 'An article'),
      // A look-alike host is not the redirect host: it is an ordinary link.
      chunk('https://vertexaisearch.cloud.google.com.evil.example/x', 'Other'),
    ])),
  });

  const { groundedArticles } = await ask();

  assert.deepStrictEqual(groundedArticles.map(a => [a.url, a.title]), [
    ['https://example.com/article', 'An article'],
    ['https://vertexaisearch.cloud.google.com.evil.example/x', 'Other'],
  ]);
  assert.deepStrictEqual(fetchMock.calls, [], 'nothing was fetched');
  const stats = groundingStatsSnapshot();
  assert.deepStrictEqual([stats.found, stats.redirects, stats.resolved], [2, 0, 0]);
});

test('a link cited twice is followed once, and the first title that says anything is kept', async t => {
  const { fetchMock } = mocks(t, {
    routes: [redirectRoute('alpha', 'https://a.example/1')],
    gemini: () => answer('Prose.', grounded([chunk(link('alpha')), chunk(link('alpha'), 'A Title'), chunk(link('alpha'), 'Later title')])),
  });

  const { groundedArticles } = await ask();

  assert.strictEqual(redirectLookups(fetchMock).length, 1);
  assert.deepStrictEqual(groundedArticles.map(a => a.title), ['A Title']);
  assert.strictEqual(groundingStatsSnapshot().found, 1, 'one distinct source');
});

// --- what the answer says about each source -----------------------------------------------------------------------

test('a source\'s snippet is what the answer says about it, not the start of the answer', async t => {
  mocks(t, {
    routes: ['alpha', 'bravo', 'charlie'].map(token => redirectRoute(token, `https://${token}.example/page`)),
    gemini: () => answer('The whole answer, which no snippet should echo.', grounded(
      [chunk(link('alpha'), 'alpha.example'), chunk(link('bravo'), 'bravo.example'), chunk(link('charlie'), 'charlie.example')],
      [
        support('Alpha is described here.', 0),
        support('Both mention it.', 0, 1),
        support('A third remark never used for alpha.', 0),
        support('Only bravo says this.', 1),
      ]
    )),
  });

  const { groundedArticles } = await ask();

  assert.deepStrictEqual(groundedArticles.map(a => a.snippet), [
    'Alpha is described here. Both mention it.',
    'Both mention it. Only bravo says this.',
    '', // nothing in the answer rests on it
  ]);
});

test('pieces of the JSON the model wrote are tidied out of a snippet', async t => {
  mocks(t, {
    routes: ['alpha', 'bravo', 'charlie', 'delta'].map(token => redirectRoute(token, `https://${token}.example/page`)),
    gemini: () => answer('Prose.', grounded(
      [chunk(link('alpha')), chunk(link('bravo')), chunk(link('charlie')), chunk(link('delta'))],
      [
        support('"communityPulse": "Developers like it, but wait for Safari.",', 0),
        support('```json\n{\n  "executiveSummary": "It shipped in Chrome 150."', 1),
        support('Line one.\\nLine two says \\"quoted\\".', 2),
        support('   {"x"  :  "kept after a key"}  ', 3),
      ]
    )),
  });

  const { groundedArticles } = await ask();

  assert.deepStrictEqual(groundedArticles.map(a => a.snippet), [
    'Developers like it, but wait for Safari.',
    'It shipped in Chrome 150.',
    'Line one. Line two says "quoted".',
    'kept after a key',
  ]);
});

test('a snippet is cut at 300 characters, with an ellipsis, and never earlier', async t => {
  mocks(t, {
    routes: ['alpha', 'bravo', 'charlie'].map(token => redirectRoute(token, `https://${token}.example/page`)),
    gemini: () => answer('Prose.', grounded(
      [chunk(link('alpha')), chunk(link('bravo')), chunk(link('charlie'))],
      [support('a'.repeat(300), 0), support('b'.repeat(301), 1), support('c'.repeat(150), 2), support('d'.repeat(150), 2)]
    )),
  });

  const [exact, over, two] = (await ask()).groundedArticles.map(a => a.snippet);

  assert.strictEqual(exact, 'a'.repeat(300));
  assert.strictEqual(over, `${'b'.repeat(299)}…`);
  assert.strictEqual(two.length, 300, 'two 150-character segments and the space between them are cut to 300');
  assert.ok(two.endsWith('…'));
});

test('only the first two stretches of the answer about a source make its snippet', async t => {
  mocks(t, {
    routes: [redirectRoute('alpha', 'https://alpha.example/page')],
    gemini: () => answer('Prose.', grounded(
      [chunk(link('alpha'))],
      [support('One.', 0), support('Two.', 0), support('Three.', 0), support('One.', 0)]
    )),
  });

  assert.strictEqual((await ask()).groundedArticles[0].snippet, 'One. Two.');
});

test('a cut snippet never ends in a space before its ellipsis', async t => {
  mocks(t, {
    routes: [redirectRoute('alpha', 'https://alpha.example/page')],
    gemini: () => answer('Prose.', grounded([chunk(link('alpha'))], [support(`${'a'.repeat(298)} ${'b'.repeat(50)}`, 0)])),
  });

  assert.strictEqual((await ask()).groundedArticles[0].snippet, `${'a'.repeat(298)}…`);
});

test('whitespace inside a stretch of the answer is collapsed to single spaces', async t => {
  mocks(t, {
    routes: [redirectRoute('alpha', 'https://alpha.example/page')],
    gemini: () => answer('Prose.', grounded([chunk(link('alpha'))], [support('Line one.\n\n   Line   two.\tEnd.\r\nReally.', 0)])),
  });

  assert.strictEqual((await ask()).groundedArticles[0].snippet, 'Line one. Line two. End. Really.');
});

test('a stretch of the answer that backs a source more than once is counted once', async t => {
  mocks(t, {
    routes: [redirectRoute('alpha', 'https://alpha.example/page'), redirectRoute('bravo', 'https://bravo.example/page')],
    gemini: () => answer('Prose.', grounded(
      [chunk(link('alpha')), chunk(link('bravo')), chunk(link('bravo'))],
      [
        support('Listed twice for alpha.', 0, 0), // one support naming the source twice
        support('Same wording.', 0), support('Same wording.', 0), // two supports with identical text
        support('Cited through both chunks.', 1, 2), // bravo is cited through two chunks that name one link
        support('Only the second chunk.', 2),
      ]
    )),
  });

  const { groundedArticles } = await ask();

  assert.deepStrictEqual(groundedArticles.map(a => a.snippet), [
    'Listed twice for alpha. Same wording.',
    'Cited through both chunks. Only the second chunk.',
  ]);
});

test('malformed support records are ignored, and a support can point at a source that is not there', async t => {
  mocks(t, {
    routes: [redirectRoute('alpha', 'https://alpha.example/page')],
    gemini: () => answer('Prose.', grounded([chunk(link('alpha'))], [
      null,
      'junk',
      {},
      { segment: { text: 42 }, groundingChunkIndices: [0] },
      { segment: { text: 'No indices.' } },
      { segment: { text: 'Bad indices.' }, groundingChunkIndices: 'zero' },
      { segment: { text: 'Indices that are no use.' }, groundingChunkIndices: [-1, 1.5, '0', null, 99] },
      { segment: { text: 'The one that counts.' }, groundingChunkIndices: [0, 'x'] },
    ])),
  });

  assert.strictEqual((await ask()).groundedArticles[0].snippet, 'The one that counts.');
});

test('groundingSupports that is not a list is ignored', async t => {
  mocks(t, {
    routes: [redirectRoute('alpha', 'https://alpha.example/page')],
    gemini: () => answer('Prose.', { groundingMetadata: { groundingChunks: [chunk(link('alpha'))], groundingSupports: { segment: { text: 'x' } } } }),
  });

  assert.strictEqual((await ask()).groundedArticles[0].snippet, '');
});

// --- two links, one page --------------------------------------------------------------------------------------------

test('sources that name the same page become one, keeping what the answer says about each', async t => {
  mocks(t, {
    routes: [
      redirectRoute('alpha', 'https://web.dev/articles/x'),
      redirectRoute('bravo', 'http://www.web.dev/articles/x/?utm_source=a#intro'),
      redirectRoute('charlie', 'https://web.dev/articles/y'),
    ],
    gemini: () => answer('Prose.', grounded(
      [chunk(link('alpha'), 'web.dev'), chunk(link('bravo'), 'web.dev'), chunk(link('charlie'), 'web.dev')],
      [support('From alpha.', 0), support('From bravo.', 1), support('From charlie.', 2)]
    )),
  });

  const { groundedArticles } = await ask();

  assert.deepStrictEqual(groundedArticles.map(a => [a.url, a.snippet]), [
    ['https://web.dev/articles/x', 'From alpha. From bravo.'],
    ['https://web.dev/articles/y', 'From charlie.'],
  ]);
  const stats = groundingStatsSnapshot();
  assert.deepStrictEqual([stats.found, stats.redirects, stats.resolved, stats.duplicates], [3, 3, 3, 1]);
});

test('two links to one page do not repeat the wording the answer shares between them', async t => {
  mocks(t, {
    routes: [redirectRoute('alpha', 'https://web.dev/articles/x'), redirectRoute('bravo', 'https://www.web.dev/articles/x/')],
    gemini: () => answer('Prose.', grounded(
      [chunk(link('alpha'), 'web.dev'), chunk(link('bravo'), 'web.dev')],
      [support('Shared by both.', 0, 1), support('Only for bravo.', 1)]
    )),
  });

  const { groundedArticles } = await ask();

  assert.deepStrictEqual(groundedArticles.map(a => a.snippet), ['Shared by both. Only for bravo.']);
});

// --- what is lost, and why ---------------------------------------------------------------------------------------------

test('a link that cannot be followed costs the source, and the reason is counted', async t => {
  mocks(t, {
    routes: [
      redirectRoute('gone', null, 404),
      redirectRoute('removed', null, 410), // not "gone-for-good": routes match by substring, and that would be answered by the route above
      redirectRoute('page', null, 200),
      redirectRoute('bare', null, 302),
      redirectRoute('broken', 'http://'),
      redirectRoute('private', 'http://127.0.0.1/admin'),
      redirectRoute('file', 'file:///etc/passwd'),
      { match: link('down'), throws: new Error('connect ECONNREFUSED 203.0.113.9:443') },
      { match: link('slow'), throws: Object.assign(new Error('The operation timed out'), { name: 'TimeoutError' }) },
      redirectRoute('alive', 'https://alive.example/post'),
    ],
    gemini: () => answer('Prose.', grounded([
      chunk('https://example.com/direct', 'Direct'),
      ...['gone', 'removed', 'page', 'bare', 'broken', 'private', 'file', 'down', 'slow', 'alive'].map(token => chunk(link(token), `${token}.example`)),
      chunk('ftp://files.example/readme', 'ftp'),
      chunk('javascript:void(0)', 'js'),
      chunk('/relative/path', 'relative'),
      chunk('http://', 'a scheme and nothing else'),
      chunk('HTTP://Upper.Example/Path?x=1#top', 'Upper'), // an address in capitals is still an address
    ])),
  });

  const { groundedArticles, groundingChunks } = await ask();

  assert.deepStrictEqual(groundedArticles.map(a => a.url), [
    'https://example.com/direct',
    'https://alive.example/post',
    'http://upper.example/Path?x=1',
  ]);
  assert.strictEqual(groundingChunks.length, 16, 'what Gemini sent is untouched');
  assert.deepStrictEqual(groundingStatsSnapshot(), {
    found: 16,
    redirects: 10,
    resolved: 1,
    duplicates: 0,
    dropped: { expired: 2, no_redirect: 3, unsafe: 2, network: 1, timeout: 1, invalid: 4 },
    adoption: { considered: 0, alreadyListed: 0, added: 0, rejected: 0, unread: 0, skipped: 0 },
  });
});

test('a link that leads on to another of Google\'s links has not led to a page', async t => {
  mocks(t, {
    routes: [
      redirectRoute('hop', link('onward')), // the target is on the redirect host again
      redirectRoute('credentials', 'https://user:secret@example.org/post'),
      redirectRoute('fine', 'https://fine.example/post'),
    ],
    gemini: () => answer('Prose.', grounded([chunk(link('hop'), 'a'), chunk(link('credentials'), 'b'), chunk(link('fine'), 'c')])),
  });

  const { groundedArticles } = await ask();

  assert.deepStrictEqual(groundedArticles.map(a => a.url), ['https://fine.example/post']);
  const stats = groundingStatsSnapshot();
  assert.deepStrictEqual([stats.found, stats.redirects, stats.resolved], [3, 3, 1], 'only the one that reached a page counts as resolved');
  assert.deepStrictEqual(stats.dropped, { no_redirect: 1, unsafe: 1 });
});

test('a name that does not resolve, for the link or the page it names, is a network failure', async t => {
  const restore = setHostResolver(async host => {
    if (host === 'nowhere.example') throw Object.assign(new Error('getaddrinfo ENOTFOUND nowhere.example'), { code: 'ENOTFOUND' });
    return [{ address: PUBLIC_TEST_ADDRESS, family: 4 }];
  });
  t.after(restore);
  mocks(t, {
    routes: [redirectRoute('alpha', 'https://nowhere.example/page')],
    gemini: () => answer('Prose.', grounded([chunk(link('alpha'), 'x')])),
  });

  const { groundedArticles } = await ask();

  assert.deepStrictEqual(groundedArticles, []);
  assert.deepStrictEqual(groundingStatsSnapshot().dropped, { network: 1 });
});

test('a transient failure of the redirect service is retried once, and no more', async t => {
  const attempts = {};
  mocks(t, {
    routes: [redirectRoute('flaky', 'https://flaky.example/post'), redirectRoute('dead', 'https://dead.example/post')],
    wrap: (url, init, forward) => {
      const token = url.startsWith(REDIRECT_HOST) ? url.slice(REDIRECT_HOST.length) : null;
      if (!token) return forward();
      attempts[token] = (attempts[token] || 0) + 1;
      // `flaky` fails once; `dead` keeps failing, so it can only be the retry limit that ends it.
      return token === 'flaky' && attempts[token] > 1
        ? forward()
        : token === 'dead' && attempts[token] > 2
          ? forward()
          : Promise.resolve(makeResponse({ status: 503, headers: { 'retry-after': '0' }, text: 'busy' }));
    },
    gemini: () => answer('Prose.', grounded([chunk(link('flaky'), 'a'), chunk(link('dead'), 'b')])),
  });

  const { groundedArticles } = await ask();

  assert.deepStrictEqual(groundedArticles.map(a => a.url), ['https://flaky.example/post']);
  assert.deepStrictEqual(attempts, { flaky: 2, dead: 2 });
  assert.deepStrictEqual(groundingStatsSnapshot().dropped, { no_redirect: 1 });
});

test('an answer whose every link is lost is still an answer', async t => {
  mocks(t, {
    routes: [redirectRoute('gone', null, 404)],
    gemini: () => answer('The answer, in prose.', grounded([chunk(link('gone'), 'x.example')])),
  });

  const result = await ask();

  assert.strictEqual(result.text, 'The answer, in prose.');
  assert.deepStrictEqual(result.groundedArticles, []);
  assert.strictEqual(result.groundingChunks.length, 1);
  assert.deepStrictEqual(result.webSearchQueries, ['feature news']);
});

test('an answer with no sources follows nothing and records nothing', async t => {
  const { fetchMock } = mocks(t, { gemini: () => answer('Prose only.') });

  const result = await ask();

  assert.deepStrictEqual(result.groundedArticles, []);
  assert.deepStrictEqual(fetchMock.calls, []);
  assert.deepStrictEqual(groundingStatsSnapshot(), {
    found: 0, redirects: 0, resolved: 0, duplicates: 0, dropped: {},
    adoption: { considered: 0, alreadyListed: 0, added: 0, rejected: 0, unread: 0, skipped: 0 },
  });
});

// --- when, how many, how long ----------------------------------------------------------------------------------------

test('only the answer that was kept has its links followed', async t => {
  const { fetchMock } = mocks(t, {
    routes: [redirectRoute('first', 'https://a.example/1'), redirectRoute('second', 'https://b.example/2')],
    gemini: call => (call.model === PRIMARY
      ? answer('Prose only, no JSON.', grounded([chunk(link('first'), 'a.example')]))
      : answer(synthesisText(), grounded([chunk(link('second'), 'b.example')]))),
  });

  const result = await ask({ stage: 'gemini/synthesis', requireJson: true });

  assert.strictEqual(result.model, SECOND);
  assert.deepStrictEqual(result.groundedArticles.map(a => a.url), ['https://b.example/2']);
  assert.deepStrictEqual(fetchMock.calls, [link('second')], 'the discarded answer\'s link was never followed');
  assert.strictEqual(groundingStatsSnapshot().found, 1);
});

test('no more than four links are followed at a time', async t => {
  const tokens = Array.from({ length: 10 }, (_, i) => `link${String(i).padStart(2, '0')}`);
  let inFlight = 0;
  let peak = 0;
  mocks(t, {
    routes: tokens.map(token => redirectRoute(token, `https://${token}.example/page`)),
    wrap: async (url, init, forward) => {
      if (!url.startsWith(REDIRECT_HOST)) return forward();
      inFlight++;
      peak = Math.max(peak, inFlight);
      await new Promise(resolve => setTimeout(resolve, 15));
      inFlight--;
      return forward();
    },
    gemini: () => answer('Prose.', grounded(tokens.map(token => chunk(link(token), token)))),
  });

  const { groundedArticles } = await ask();

  assert.strictEqual(groundedArticles.length, 10);
  assert.strictEqual(peak, 4);
  assert.deepStrictEqual(groundedArticles.map(a => a.title), tokens, 'in the order Gemini cited them');
});

test('a link gets a few seconds, not the default patience of an ordinary request', async t => {
  const armed = [];
  const realSetTimeout = globalThis.setTimeout;
  globalThis.setTimeout = (callback, ms, ...rest) => {
    armed.push(ms);
    return realSetTimeout(callback, ms, ...rest);
  };
  t.after(() => { globalThis.setTimeout = realSetTimeout; });
  mocks(t, {
    routes: [redirectRoute('alpha', 'https://alpha.example/page')],
    gemini: () => {
      armed.length = 0; // from here on, only what the lookup of the link arms
      return answer('Prose.', grounded([chunk(link('alpha'), 'x')]));
    },
  });

  await ask();

  assert.ok(armed.length > 0, 'the lookup armed no deadline');
  assert.ok(Math.max(...armed) <= 4000 && Math.max(...armed) >= 3900, `deadlines armed: ${armed.join(', ')}`);
});

test('the sources are returned with the same keys as before, whatever happened to the links', async t => {
  mocks(t, {
    routes: [redirectRoute('alpha', 'https://alpha.example/page')],
    gemini: () => answer('Prose.', grounded([chunk(link('alpha'), 'x')])),
  });

  const result = await ask();

  assert.deepStrictEqual(Object.keys(result).sort(), ['groundedArticles', 'groundingChunks', 'model', 'parsedJson', 'text', 'webSearchQueries']);
});
