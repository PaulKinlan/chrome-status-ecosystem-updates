import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import { config } from '../src/config.js';
import {
  buildTwitterQuery,
  extractIdlAnchor,
  sanitizeQueryText,
  searchTwitter,
} from '../src/search/twitter.js';
import { installFetchMock } from './_support/fetch-mock.js';

// Real feature names from the W41 report whose queries X rejected with HTTP 400.
// Every one contains a colon, which X parses as an operator when it is unquoted.
const REJECTED_IN_W41 = [
  { id: 5124378896498688, name: 'Use scroll-snap-type: pair to snap to a single element' },
  { id: 5162221567082496, name: 'Deprecate and Remove: document.requestStorageAccessFor' },
  { id: 5194473869017088, name: 'Deprecate and Remove: Related Website Sets (RWS)' },
  { id: 5158507786665984, name: 'Fetch API: Forward reason from AbortController to fetch Response' },
  { id: 6516055192240128, name: 'CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions' },
  { id: 5126146013396992, name: 'Secure Payment Confirmation: Locale Validation' },
  { id: 5153829504024576, name: 'Capability elements: <camera> and <microphone>' },
  { id: 4683382919397376, name: 'Deprecate and remove: Private Aggregation API' },
];

const SUFFIX = ' -is:retweet';

/** Everything before the trailing `-is:retweet` operator, which legitimately contains a colon. */
function body(query) {
  assert.ok(query.endsWith(SUFFIX), `query should end with${SUFFIX}: ${query}`);
  return query.slice(0, -SUFFIX.length);
}

function balanced(text, open, close) {
  let depth = 0;
  for (const ch of text) {
    if (ch === open) depth++;
    if (ch === close) depth--;
    if (depth < 0) return false;
  }
  return depth === 0;
}

test('sanitizeQueryText removes every character X treats as syntax', () => {
  assert.strictEqual(
    sanitizeQueryText('Use scroll-snap-type: pair "to" (snap) @a #b $c'),
    'Use scroll-snap-type pair to snap a b c'
  );
  assert.strictEqual(sanitizeQueryText(undefined), '');
});

test('buildTwitterQuery never leaks an operator-looking colon (regression: HTTP 400 for 11/87 features)', () => {
  for (const feature of REJECTED_IN_W41) {
    const query = buildTwitterQuery(feature);
    assert.ok(query, `expected a query for ${feature.name}`);
    assert.ok(!body(query).includes(':'), `colon leaked into: ${query}`);
    assert.ok(!/[<>]/.test(body(query)), `angle brackets leaked into: ${query}`);
    assert.ok(balanced(body(query), '(', ')'), `unbalanced parentheses: ${query}`);
    assert.strictEqual(body(query).split('"').length % 2, 1, `unbalanced quotes: ${query}`);
  }
});

test('buildTwitterQuery keeps the useful clauses and drops junk anchors', () => {
  const query = buildTwitterQuery({
    id: 5194473869017088,
    name: 'Deprecate and Remove: Related Website Sets (RWS)',
    // The old regex matched `chrome.privacy` here and produced a junk anchor.
    summary: 'Related Website Sets are removed. See chrome.privacy and privacysandbox.google for details.',
  });
  assert.match(query, /"Deprecate and Remove Related Website Sets RWS"/);
  assert.match(query, /"chromestatus\.com\/feature\/5194473869017088"/);
  assert.ok(!query.includes('chrome.privacy'));
  assert.ok(!query.includes('privacysandbox.google'));
});

test('buildTwitterQuery never negates a keyword group through a leading hyphen', () => {
  const query = buildTwitterQuery({ id: 1, name: 'Support -webkit-line-clamp across all layout modes today' });
  const group = body(query).match(/\(([^()"]+)\)/);
  assert.ok(group, `expected an unquoted keyword group in ${query}`);
  for (const word of group[1].split(' ')) {
    assert.ok(!word.startsWith('-'), `"${word}" would be parsed as a negation`);
  }
});

test('buildTwitterQuery stays under the API length limit, dropping the least valuable clauses first', () => {
  // Distinct long words: identical ones would be collapsed by de-duplication
  // and the query would never get near the limit, so nothing would be tested.
  const words = ['a', 'b', 'c'].map(ch => `${ch}${'x'.repeat(94)}`);
  const name = words.join(' ');
  const feature = { id: 7, name, summary: 'Adds `navigator.install()` for apps' };

  const untrimmed = `("${name}" OR "chromestatus.com/feature/7" OR (${words.join(' ')}) OR "navigator.install") -is:retweet`;
  assert.ok(untrimmed.length > 480, `the fixture must exceed the limit untrimmed (${untrimmed.length} chars)`);

  const query = buildTwitterQuery(feature);
  assert.ok(query.length <= 480, `query is ${query.length} chars`);
  // The title and the ChromeStatus link are the most valuable and survive...
  assert.ok(query.startsWith(`("${name}"`), query);
  assert.match(query, /"chromestatus\.com\/feature\/7"/);
  // ...the keyword group and the API anchor are dropped first.
  assert.ok(!query.includes(`(${words.join(' ')})`), `keyword group should have been dropped: ${query}`);
  assert.ok(!query.includes('navigator.install'), `API anchor should have been dropped: ${query}`);

  // A very long name is clamped before it is quoted.
  const clamped = buildTwitterQuery({ id: 7, name: 'word '.repeat(400) });
  assert.ok(clamped.length <= 480, `query is ${clamped.length} chars`);
  assert.ok(clamped.indexOf('" OR ') <= 302, 'the quoted name should be clamped to 300 characters');
});

test('buildTwitterQuery returns null with nothing to search and never interpolates a non-numeric id', () => {
  assert.strictEqual(buildTwitterQuery({}), null);
  assert.strictEqual(buildTwitterQuery({ name: '(:)' }), null);
  // A non-numeric id is never interpolated into the query.
  assert.ok(!buildTwitterQuery({ name: 'X', id: '1" OR from:evil' }).includes('evil'));
});

test('extractIdlAnchor accepts code spans, calls and web globals only', () => {
  assert.strictEqual(extractIdlAnchor('Adds `navigator.install` for apps'), 'navigator.install');
  assert.strictEqual(extractIdlAnchor('Call CSS.supports() to detect it'), 'CSS.supports');
  assert.strictEqual(extractIdlAnchor('Use window.setResizable to resize'), 'window.setResizable');

  // The junk the previous regex produced.
  assert.strictEqual(extractIdlAnchor('Handles transitions.It then continues'), null);
  assert.strictEqual(extractIdlAnchor('See privacysandbox.google for docs'), null);
  assert.strictEqual(extractIdlAnchor('Works e.g. with workers, i.e. everywhere'), null);
  assert.strictEqual(extractIdlAnchor('Hosted at `example.com`'), null);
  assert.strictEqual(extractIdlAnchor(''), null);
});

test('searchTwitter makes no request when no token is configured', async (t) => {
  const original = config.twitterBearerToken;
  config.twitterBearerToken = '';
  const { restore, calls } = installFetchMock([]);
  t.after(() => { restore(); config.twitterBearerToken = original; });

  const { items, audit } = await searchTwitter({ id: 1, name: 'Web Install API' });
  assert.deepStrictEqual(items, []);
  assert.match(audit.status, /Inactive/);
  assert.strictEqual(calls.length, 0, 'must not touch the network without a token');
});

test('searchTwitter sends the sanitised query and reports a rejected query clearly', async (t) => {
  const original = config.twitterBearerToken;
  config.twitterBearerToken = 'test-token';
  const { restore, calls } = installFetchMock([
    { match: 'api.twitter.com/2/tweets/search/recent', status: 400, text: '{"errors":[{"message":"Reference to invalid operator"}]}' },
  ]);
  t.after(() => { restore(); config.twitterBearerToken = original; });
  t.mock.method(console, 'error', () => {}); // logger.warn writes to stderr

  const feature = { id: 5126146013396992, name: 'Secure Payment Confirmation: Locale Validation' };
  const { items, audit } = await searchTwitter(feature);

  assert.deepStrictEqual(items, []);
  assert.match(audit.status, /HTTP 400/);
  assert.strictEqual(audit.query, buildTwitterQuery(feature));
  const sent = new URL(calls[0]).searchParams.get('query');
  assert.strictEqual(sent, buildTwitterQuery(feature));
  assert.ok(!body(sent).includes(':'));
});

test('searchTwitter parses tweets and authors from a successful response', async (t) => {
  const original = config.twitterBearerToken;
  config.twitterBearerToken = 'test-token';
  const { restore } = installFetchMock([
    {
      match: 'api.twitter.com/2/tweets/search/recent',
      json: {
        data: [{ id: '9', text: 'Loving the Digital Credentials API', author_id: 'u1', created_at: '2026-10-01T00:00:00Z', public_metrics: { like_count: 4, retweet_count: 1, reply_count: 2 } }],
        includes: { users: [{ id: 'u1', username: 'dev', name: 'Dev' }] },
      },
    },
  ]);
  t.after(() => { restore(); config.twitterBearerToken = original; });

  const { items, audit } = await searchTwitter({ id: 2, name: 'Digital Credentials API unique-name-for-cache' });
  assert.strictEqual(items.length, 1);
  assert.strictEqual(items[0].author, '@dev');
  assert.strictEqual(items[0].points, 5);
  assert.strictEqual(items[0].commentsCount, 2);
  assert.match(audit.status, /found 1 tweet/);
});

test('searchTwitter names both variables that can hold the token, with none and when X rejects the one it has', async (t) => {
  const original = config.twitterBearerToken;
  const { restore } = installFetchMock([
    { match: 'api.twitter.com/2/tweets/search/recent', status: 401, text: '{"title":"Unauthorized","detail":"Unauthorized"}' },
  ]);
  t.after(() => { restore(); config.twitterBearerToken = original; });
  t.mock.method(console, 'error', () => {}); // logger.warn writes to stderr

  config.twitterBearerToken = '';
  const { audit: inactive } = await searchTwitter({ id: 3, name: 'Web Install API' });
  config.twitterBearerToken = 'test-token';
  const { audit: rejected } = await searchTwitter({ id: 4, name: 'Unique name for the rejected token test' });

  assert.strictEqual(inactive.status, 'Inactive (TWITTER_BEARER_TOKEN or X_BEARER_TOKEN not configured)');
  assert.strictEqual(rejected.status, 'HTTP 401 Unauthorized (Check your TWITTER_BEARER_TOKEN or X_BEARER_TOKEN)');
});
