import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import * as web from '../src/search/web.js';
import {
  cleanUrl,
  extractDomain,
  canonicalUrl,
  hostKey,
  isGroundingRedirect,
  isWebUrl,
  GROUNDING_REDIRECT_HOST,
} from '../src/search/urls.js';

test('web.js still exports cleanUrl and extractDomain: they are the same functions', () => {
  assert.strictEqual(web.cleanUrl, cleanUrl);
  assert.strictEqual(web.extractDomain, extractDomain);
});

test('cleanUrl drops campaign parameters, the fragment and a trailing slash, and nothing else', () => {
  const cases = [
    ['https://example.com/a/?utm_source=x&utm_medium=y&utm_campaign=z&utm_term=t&utm_content=c&id=5#top', 'https://example.com/a/?id=5'],
    ['https://example.com/', 'https://example.com'],
    ['https://example.com/path/', 'https://example.com/path'],
    ['http://www.example.com/a', 'http://www.example.com/a'],
    ['https://example.com/a?fbclid=1', 'https://example.com/a?fbclid=1'],
    ['', ''],
    [undefined, ''],
    [null, ''],
  ];
  for (const [input, expected] of cases) assert.strictEqual(cleanUrl(input), expected, String(input));
  assert.strictEqual(cleanUrl('not a url'), 'not a url', 'something that is not a URL comes back as it was');
});

test('extractDomain gives the host without www., and nothing for a non-URL', () => {
  assert.strictEqual(extractDomain('https://www.web.dev/articles/install'), 'web.dev');
  assert.strictEqual(extractDomain('https://Developer.Chrome.com/blog/'), 'developer.chrome.com');
  assert.strictEqual(extractDomain('https://sub.www.example.com/'), 'sub.www.example.com');
  assert.strictEqual(extractDomain('not-a-valid-url'), '');
  assert.strictEqual(extractDomain(undefined), '');
});

// --- canonicalUrl ------------------------------------------------------------------------------------------------

const SAME_PAGE = [
  // One page, however it was linked.
  [
    'https://example.com/post',
    'http://example.com/post',
    'https://www.example.com/post',
    'http://WWW.Example.COM/post/',
    'https://example.com./post',
    'https://example.com:443/post',
    'http://example.com:80/post',
    'https://example.com/post#comments',
    'https://example.com/post?utm_source=newsletter&utm_medium=email',
    'https://example.com/post?UTM_Campaign=x&fbclid=abc&gclid=def&msclkid=1&dclid=2&yclid=3&igshid=4',
    'https://example.com/post?mc_cid=1&mc_eid=2&_hsenc=3&_hsmi=4&ref_src=twsrc&ref_url=x',
    'https://user:secret@example.com/post',
    '  https://example.com/post  ',
    'https://example.com/post//',
  ],
  // Query parameters have no order.
  ['https://example.com/q?a=1&b=2', 'https://example.com/q?b=2&a=1', 'https://example.com/q?b=2&utm_term=z&a=1'],
  ['https://example.com/q?a=2&a=1', 'https://example.com/q?a=1&a=2'],
  // Spellings of the same characters.
  ['https://example.com/café', 'https://example.com/caf%C3%A9'],
  ['https://example.com', 'https://example.com/', 'http://www.example.com//'],
  ['https://example.com/a?x', 'https://example.com/a?x='],
];

test('canonicalUrl gives one key to every spelling of a page', () => {
  for (const group of SAME_PAGE) {
    const keys = new Set(group.map(canonicalUrl));
    assert.strictEqual(keys.size, 1, `${group.join('  |  ')}  =>  ${[...keys].join('  |  ')}`);
  }
});

test('canonicalUrl gives the key it promises', () => {
  const expected = {
    'https://www.Example.com/Path/?b=2&a=1#frag': 'example.com/Path?a=1&b=2',
    'http://example.com:8080/x': 'example.com:8080/x',
    'https://example.com:80/x': 'example.com:80/x', // not the default port for https
    'http://example.com:443/x': 'example.com:443/x', // nor for http
    'https://example.com:8443/x': 'example.com:8443/x',
    'https://example.com/a?id=5&utm_source=x': 'example.com/a?id=5',
    'https://example.com': 'example.com',
    'https://example.com/caf%C3%A9': 'example.com/caf%C3%A9',
    'https://user:secret@example.com/x': 'example.com/x', // credentials never end up in a key
  };
  for (const [input, key] of Object.entries(expected)) assert.strictEqual(canonicalUrl(input), key, input);
});

test('canonicalUrl keeps apart what servers keep apart', () => {
  const distinct = [
    ['https://example.com/Post', 'https://example.com/post'], // paths are case sensitive
    ['https://example.com/a?id=1', 'https://example.com/a?id=2'],
    ['https://example.com/a?Id=1', 'https://example.com/a?id=1'],
    ['https://example.com/a', 'https://example.com/a/b'],
    ['https://example.com/a', 'https://sub.example.com/a'],
    ['https://example.com/a', 'https://example.org/a'],
    ['https://example.com/a?page=2', 'https://example.com/a'], // a real parameter is not tracking
    ['https://example.com/a?ref=home', 'https://example.com/a'], // `ref` alone is not a tracking parameter
    ['https://example.com/a?utmx=1', 'https://example.com/a'], // only `utm_…` is
    ['https://example.com:8080/a', 'https://example.com/a'],
    ['https://example.com:80/a', 'https://example.com/a'],
  ];
  for (const [a, b] of distinct) assert.notStrictEqual(canonicalUrl(a), canonicalUrl(b), `${a}  vs  ${b}`);
});

test('canonicalUrl leaves anything that is not a web address as it is, so it still equals itself', () => {
  for (const value of ['mailto:someone@example.com', 'ftp://files.example.org/a', 'javascript:void(0)', 'not a url', '/relative/path']) {
    assert.strictEqual(canonicalUrl(value), value);
    assert.strictEqual(canonicalUrl(`  ${value}  `), value, 'trimmed');
  }
});

test('canonicalUrl is idempotent: a key that was stored is the key the same page is compared as', () => {
  // `seen` in the history holds keys, and a new run compares the key of a page with them, never the address it had.
  const inputs = [
    ...SAME_PAGE.flat(),
    'https://www.Example.com/Path/?b=2&a=1#frag', 'http://example.com:8080/x', 'https://example.com:80/x', 'http://example.com:443/x',
    'https://user:secret@example.com/x', 'https://example.com/a?id=5&utm_source=x', 'https://example.com/a b', 'https://example.com/%E2%9C%93?q=%20x',
    'https://example.com/a?x=1&x=1', 'https://[::1]:3000/a', 'https://Bücher.example/ü?ö=ä', 'https://example.com/a//b/', 'https://example.com./',
    'mailto:someone@example.com', 'ftp://files.example.org/a', 'javascript:void(0)', 'not a url', '/relative/path', 'example.com:8080/x',
  ];
  for (const input of inputs) {
    const key = canonicalUrl(input);
    assert.strictEqual(canonicalUrl(key), key, `${input}  =>  ${key}`);
  }
});

test('canonicalUrl of nothing is the empty string', () => {
  for (const value of ['', '   ', null, undefined, 42, {}, [], true]) assert.strictEqual(canonicalUrl(value), '', String(value));
});

test('canonicalUrl does not mind hostile input: long, nested and malformed values are handled in linear time', () => {
  const started = Date.now();
  canonicalUrl(`https://example.com/${'a/'.repeat(50_000)}?${'x=1&'.repeat(20_000)}`);
  canonicalUrl(`https://${'a.'.repeat(50_000)}com/`);
  canonicalUrl(`https://example.com/${'/'.repeat(100_000)}`);
  canonicalUrl(`https://example.com${'.'.repeat(100_000)}/`);
  assert.ok(Date.now() - started < 2000, `took ${Date.now() - started}ms`);
});

test('a long run of slashes or dots that is not at the end does not make canonicalUrl or isGroundingRedirect slow', () => {
  // `/\/+$/` and `/\.+$/` are quadratic on these shapes (about 12 s at this size); the values come from the web.
  const n = 150_000;
  const started = Date.now();

  assert.strictEqual(canonicalUrl(`https://example.com/${'/'.repeat(n)}x`), `example.com${'/'.repeat(n + 1)}x`);
  assert.strictEqual(canonicalUrl(`https://a${'.'.repeat(n)}b/`), `a${'.'.repeat(n)}b`);
  assert.strictEqual(isGroundingRedirect(`https://a${'.'.repeat(n)}b/`), false);
  assert.strictEqual(isGroundingRedirect(`https://vertexaisearch.cloud.google.com${'.'.repeat(n)}/x`), true);
  assert.strictEqual(hostKey(`https://a${'.'.repeat(n)}b/`), `a${'.'.repeat(n)}b`);
  assert.strictEqual(hostKey(`https://example.com${'.'.repeat(n)}/x`), 'example.com');

  assert.ok(Date.now() - started < 2000, `took ${Date.now() - started}ms`);
});

// --- hostKey -----------------------------------------------------------------------------------------------------

test('hostKey is the host in lower case, without the dot that may end it, whatever else the address holds', () => {
  assert.strictEqual(hostKey('https://example.com/path?x=1#y'), 'example.com');
  assert.strictEqual(hostKey('HTTPS://LH3.GoogleUserContent.COM/x'), 'lh3.googleusercontent.com');
  assert.strictEqual(hostKey('https://example.com./x'), 'example.com');
  assert.strictEqual(hostKey('https://example.com.../x'), 'example.com');
  assert.strictEqual(hostKey('http://user:secret@example.com:8080/x'), 'example.com');
  assert.strictEqual(hostKey('https://www.example.com/'), 'www.example.com', 'www. is part of the host');
  assert.strictEqual(hostKey('https://example.com/?u=googleusercontent.com'), 'example.com');
  assert.strictEqual(hostKey('https://[::1]/x'), '[::1]');
});

test('hostKey of anything that is not an address with a host is the empty string', () => {
  for (const value of ['', 'not a url', 'example.com/x', '/relative/path', 'mailto:a@example.com', 'javascript:alert(1)', null, undefined, 42, {}]) {
    assert.strictEqual(hostKey(value), '', String(value));
  }
});

// --- isGroundingRedirect -----------------------------------------------------------------------------------------

test('the redirect host is the one Gemini grounding uses', () => {
  assert.strictEqual(GROUNDING_REDIRECT_HOST, 'vertexaisearch.cloud.google.com');
});

test('isGroundingRedirect recognises links on the host Gemini mints them on', () => {
  for (const url of [
    'https://vertexaisearch.cloud.google.com/grounding-api-redirect/AbCdEf123',
    'http://vertexaisearch.cloud.google.com/grounding-api-redirect/AbCdEf123',
    'https://VERTEXAISEARCH.cloud.google.com/grounding-api-redirect/AbCdEf123',
    'https://vertexaisearch.cloud.google.com./grounding-api-redirect/AbCdEf123',
    'https://vertexaisearch.cloud.google.com:443/grounding-api-redirect/x?y=1#z',
    'https://vertexaisearch.cloud.google.com/any/other/path',
    'https://vertexaisearch.cloud.google.com',
  ]) {
    assert.strictEqual(isGroundingRedirect(url), true, url);
  }
});

test('isGroundingRedirect is judged on the host alone, not on text that merely mentions it', () => {
  for (const url of [
    'https://example.com/vertexaisearch.cloud.google.com/grounding-api-redirect/x',
    'https://example.com/?next=https://vertexaisearch.cloud.google.com/grounding-api-redirect/x',
    'https://vertexaisearch.cloud.google.com.evil.example/grounding-api-redirect/x',
    'https://evilvertexaisearch.cloud.google.com/x',
    'https://sub.vertexaisearch.cloud.google.com/x',
    'https://cloud.google.com/vertexaisearch',
    'https://user@vertexaisearch.cloud.google.com.evil.example/x',
    'ftp://vertexaisearch.cloud.google.com/x',
    'javascript:vertexaisearch.cloud.google.com',
    'vertexaisearch.cloud.google.com/grounding-api-redirect/x', // no scheme: not a URL
    'not a url',
    '',
    null,
    undefined,
    42,
  ]) {
    assert.strictEqual(isGroundingRedirect(url), false, String(url));
  }
});

// --- isWebUrl ----------------------------------------------------------------------------------------------------

test('isWebUrl accepts http and https addresses however they are written', () => {
  for (const url of [
    'https://example.com',
    'http://example.com/a?b=1#c',
    'HTTPS://Example.COM/Path',
    'Http://example.com',
    'https://example.com:8443/x',
    'http://127.0.0.1:8080/',
    'https://[::1]/x',
    'https://xn--bcher-kva.example/',
    'http:/example.com', // the parser repairs a missing slash after http: and https:
  ]) {
    assert.strictEqual(isWebUrl(url), true, url);
  }
});

test('isWebUrl refuses everything else: other schemes, bare schemes, relative paths, text and non-strings', () => {
  for (const value of [
    'ftp://files.example/readme',
    'javascript:alert(1)',
    'https://user:pass@example.com:8443/x', // an address with credentials in it is not one to store or publish
    'https://user@example.com/',
    'https://:secret@example.com/',
    'data:text/html,<p>x</p>',
    'file:///etc/passwd',
    'mailto:someone@example.com',
    ' https://example.com', // padding is something the parser ignores and a stored value would keep
    'https://example.com ',
    '\nhttps://example.com\t',
    'http://',
    'https://',
    '//example.com/protocol-relative',
    '/relative/path',
    'example.com',
    'not a url',
    '',
    '   ',
    null,
    undefined,
    42,
    true,
    {},
    ['https://example.com'],
    new URL('https://example.com'),
    { toString: () => 'https://example.com' },
  ]) {
    assert.strictEqual(isWebUrl(value), false, String(value));
  }
});
