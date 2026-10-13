import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import http from 'node:http';
import { execFile } from 'node:child_process';
import { installFetchMock } from './_support/fetch-mock.js';
import {
  parseGitHubIssueUrl,
  fetchArticleExcerpt,
  fetchArticlePage,
  fetchExplainerSummary,
  isFetchableExternalUrl,
  htmlToText,
  extractHtmlTitle,
} from '../src/search/content-fetcher.js';

const contentFetcherUrl = new URL('../src/search/content-fetcher.js', import.meta.url).href;

test('parseGitHubIssueUrl extracts owner, repo, and issueNumber', () => {
  const url = 'https://github.com/WebKit/standards-positions/issues/708';
  const parsed = parseGitHubIssueUrl(url);
  assert.deepStrictEqual(parsed, {
    owner: 'WebKit',
    repo: 'standards-positions',
    issueNumber: '708',
  });

  assert.strictEqual(parseGitHubIssueUrl('https://chromestatus.com/feature/123'), null);
});

test('parseGitHubIssueUrl accepts the forms a ChromeStatus link takes', () => {
  const issue = { owner: 'mozilla', repo: 'standards-positions', issueNumber: '1234' };
  for (const url of [
    'https://github.com/mozilla/standards-positions/issues/1234',
    'https://github.com/mozilla/standards-positions/issues/1234/',
    'https://github.com/mozilla/standards-positions/issues/1234#issuecomment-99',
    'https://github.com/mozilla/standards-positions/issues/1234?notification_referrer_id=x',
    'http://github.com/mozilla/standards-positions/issues/1234',
    'https://www.github.com/mozilla/standards-positions/issues/1234',
    'https://GitHub.com/mozilla/standards-positions/issues/1234',
    '  https://github.com/mozilla/standards-positions/issues/1234  ',
  ]) {
    assert.deepStrictEqual(parseGitHubIssueUrl(url), issue, url);
  }
  assert.deepStrictEqual(
    parseGitHubIssueUrl('https://github.com/w3c/web-platform-tests.v2/issues/7'),
    { owner: 'w3c', repo: 'web-platform-tests.v2', issueNumber: '7' },
    'dots, dashes and underscores are legal in names'
  );
});

test('parseGitHubIssueUrl is anchored: the address must BE a GitHub issue, not mention one', () => {
  for (const url of [
    'https://example.com/?r=github.com/a/b/issues/1',          // hidden in a query
    'https://example.com/github.com/a/b/issues/1',             // hidden in a path
    'https://notgithub.com/a/b/issues/1',                      // look-alike host
    'https://github.com.example.com/a/b/issues/1',             // look-alike host
    'https://gist.github.com/a/b/issues/1',                    // another GitHub host
    'https://raw.githubusercontent.com/a/b/issues/1',
    'https://user:pass@github.com/a/b/issues/1',               // credentials in the URL
    'ftp://github.com/a/b/issues/1',
    'javascript:alert(1)//github.com/a/b/issues/1',
    'github.com/a/b/issues/1',                                 // no scheme: not an address
    'https://github.com/a/b/pull/1',                           // not an issue
    'https://github.com/a/b/issues/',                          // no number
    'https://github.com/a/b/issues/12abc',                     // number followed by junk
    'https://github.com/a/b/issues/-1',
    'https://github.com/a/issues/1',                           // missing repo
    'https://github.com/a/b/c/issues/1',                       // extra segment
  ]) {
    assert.strictEqual(parseGitHubIssueUrl(url), null, url);
  }
});

test('parseGitHubIssueUrl never returns a name that could rewrite the GitHub API path built from it', () => {
  for (const url of [
    'https://github.com/../b/issues/1',
    'https://github.com/a/../issues/1',
    'https://github.com/./b/issues/1',
    'https://github.com/.../b/issues/1',                  // not a dot segment, but not a name either
    'https://github.com/a/.../issues/1',
    'https://github.com/a%2Fx/b/issues/1',
    'https://github.com/a%3Fx/b/issues/1',
    'https://github.com/a b/b/issues/1',
    'https://github.com/a:b/b/issues/1',
  ]) {
    assert.strictEqual(parseGitHubIssueUrl(url), null, url);
  }
});

test('parseGitHubIssueUrl tolerates anything that is not a URL string', () => {
  for (const value of [undefined, null, '', '   ', 42, {}, [], ['https://github.com/a/b/issues/1'], 'not a url', 'https://']) {
    assert.strictEqual(parseGitHubIssueUrl(value), null, String(value));
  }
});

// ---------------------------------------------------------------------------
// Arbitrary URLs (from search results and ChromeStatus entries) must not be able
// to reach internal services. The "secret" below is a real server on loopback.
// ---------------------------------------------------------------------------

async function startSecretServer(t) {
  const hits = [];
  const server = http.createServer((req, res) => {
    hits.push(req.url);
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('<html><body>TOP SECRET internal data</body></html>');
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => {
    server.closeAllConnections?.();
    server.close(() => resolve());
  }));
  return { port: server.address().port, hits };
}

test('isFetchableExternalUrl keeps refusing non-public targets, including a trailing-dot localhost', () => {
  for (const url of [
    'http://localhost/', 'http://localhost./', 'http://127.0.0.1/', 'http://[::1]/', 'http://169.254.169.254/latest/',
    'http://metadata.google.internal/', 'http://10.0.0.1/', 'file:///etc/passwd', 'ftp://example.com/', 'nonsense',
  ]) {
    assert.strictEqual(isFetchableExternalUrl(url), false, url);
  }
  for (const url of ['https://example.com/post', 'http://example.com:8080/x?y=1']) {
    assert.strictEqual(isFetchableExternalUrl(url), true, url);
  }
});

test('fetchArticleExcerpt never reaches a loopback server (regression: `localhost.` returned its contents)', async t => {
  const secret = await startSecretServer(t);
  for (const host of ['127.0.0.1', 'localhost', 'localhost.']) {
    assert.strictEqual(await fetchArticleExcerpt(`http://${host}:${secret.port}/secret`), null, host);
  }
  assert.deepStrictEqual(secret.hits, []);
});

test('fetchExplainerSummary never reaches a loopback server, even when the URL looks like an explainer', async t => {
  const secret = await startSecretServer(t);
  for (const url of [
    `http://127.0.0.1:${secret.port}/secret.md`,
    `http://localhost.:${secret.port}/readme.txt`,
    `http://127.0.0.1:${secret.port}/?ref=raw.githubusercontent.com`,
  ]) {
    assert.strictEqual(await fetchExplainerSummary(url), null, url);
  }
  assert.deepStrictEqual(secret.hits, []);
});

test('fetchArticleExcerpt does not follow a redirect from a public page to an internal address', async t => {
  const mock = installFetchMock([
    { match: 'https://blog.example/bounce', status: 302, headers: { location: 'http://169.254.169.254/latest/meta-data/' } },
  ]);
  t.after(() => mock.restore());

  assert.strictEqual(await fetchArticleExcerpt('https://blog.example/bounce'), null);
  assert.deepStrictEqual(mock.calls, ['https://blog.example/bounce'], 'the metadata address was never requested');
});

test('fetchArticleExcerpt still extracts a readable excerpt from an ordinary public page', async t => {
  const html = `<html><head><style>body{color:red}</style><script>var secret = 1;</script></head>
    <body><nav>Menu</nav><h1>New &amp; improved API</h1><p>It lets pages do &quot;things&quot; &lt;safely&gt;.</p><footer>Legal</footer></body></html>`;
  const mock = installFetchMock([{ match: 'https://blog.example/post', text: html, headers: { 'content-type': 'text/html; charset=utf-8' } }]);
  t.after(() => mock.restore());

  const excerpt = await fetchArticleExcerpt('https://blog.example/post');
  assert.strictEqual(excerpt, 'New & improved API It lets pages do "things" <safely>.');
});

test('fetchArticleExcerpt follows an ordinary public redirect and honours maxChars', async t => {
  const mock = installFetchMock([
    { match: 'https://short.example/p', status: 301, headers: { location: 'https://blog.example/long-form' } },
    { match: 'https://blog.example/long-form', text: '<p>' + 'word '.repeat(500) + '</p>', headers: { 'content-type': 'text/html' } },
  ]);
  t.after(() => mock.restore());

  const excerpt = await fetchArticleExcerpt('https://short.example/p', 50);
  assert.strictEqual(excerpt.length, 50);
  assert.deepStrictEqual(mock.calls, ['https://short.example/p', 'https://blog.example/long-form']);
});

test('fetchArticleExcerpt ignores non-text responses and errors', async t => {
  const mock = installFetchMock([
    { match: 'https://blog.example/image', text: 'PNG...', headers: { 'content-type': 'image/png' } },
    { match: 'https://blog.example/gone', status: 404, text: 'nope', headers: { 'content-type': 'text/html' } },
  ]);
  t.after(() => mock.restore());

  assert.strictEqual(await fetchArticleExcerpt('https://blog.example/image'), null);
  assert.strictEqual(await fetchArticleExcerpt('https://blog.example/gone'), null);
});

test('fetchExplainerSummary reads GitHub explainers through their raw URL and keeps a short snippet', async t => {
  const readme = '# Explainer\n\n' + 'Why this exists. '.repeat(100);
  const mock = installFetchMock([{ match: 'https://raw.githubusercontent.com/org/repo/main/EXPLAINER.md', text: readme }]);
  t.after(() => mock.restore());

  const snippet = await fetchExplainerSummary('https://github.com/org/repo/blob/main/EXPLAINER.md');
  assert.deepStrictEqual(mock.calls, ['https://raw.githubusercontent.com/org/repo/main/EXPLAINER.md']);
  assert.ok(snippet.length > 590 && snippet.length <= 600, `kept the first ~600 characters (got ${snippet.length})`);
  assert.ok(snippet.startsWith('# Explainer  Why this exists.'), 'newlines become spaces');
});

// ---------------------------------------------------------------------------
// HTML -> text. The markup is untrusted and is cleaned synchronously, so no
// timeout can interrupt it: cleaning must take time proportional to its size.
// ---------------------------------------------------------------------------

const ENTITY_TEXT = { '&nbsp;': ' ', '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"' };

/**
 * What `htmlToText` replaced: correct, but quadratic on hostile input, so it is
 * only ever run on tiny documents here. (Its entity step is the one-pass form;
 * decoding `&amp;` first was a separate, intended fix.)
 */
function referenceHtmlToText(html) {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ')
    .replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, ' ')
    .replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, ' ')
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:nbsp|amp|lt|gt|quot);/g, entity => ENTITY_TEXT[entity])
    .replace(/\s+/g, ' ')
    .trim();
}

test('htmlToText drops script, style, nav, footer and svg blocks, tags and entities, and keeps the words', () => {
  const html = '<html><head><title>T</title><style>p{color:red}</style><SCRIPT type="x">var a = "<b>";</SCRIPT></head>'
    + '<body><nav><a href="/">Home</a></nav><h1 class="a>b">Hello &amp; welcome</h1>'
    + '<p>Two&nbsp;words, &quot;quoted&quot;.</p><svg viewBox="0 0 1 1"><path d="M0"/></svg><footer>(c)</footer></body></html>';

  // The `>` inside the h1's attribute value ends that tag, exactly as it did before; `b">` is what is left.
  assert.strictEqual(htmlToText(html), 'T b">Hello & welcome Two words, "quoted".');
});

test('htmlToText accepts whitespace inside a closing tag, as browsers do', () => {
  assert.strictEqual(htmlToText('before<script>alert(1)</script >after'), 'before after');
  assert.strictEqual(htmlToText('before<nav>menu</nav\n>after'), 'before after');
});

test('htmlToText leaves an unterminated block in place and drops only its tag, as it always did', () => {
  assert.strictEqual(htmlToText('intro <script>never closed'), 'intro never closed');
  assert.strictEqual(htmlToText('menu <nav>one two'), 'menu one two');
});

test('htmlToText treats a lone "<" and the empty "<>" as text', () => {
  assert.strictEqual(htmlToText('a <> b'), 'a <> b');
  assert.strictEqual(htmlToText('1 < 2'), '1 < 2');
  assert.strictEqual(htmlToText('x <y'), 'x <y');
});

test('htmlToText decodes entities once: the literal text "&amp;lt;" must not become "<"', () => {
  assert.strictEqual(htmlToText('<p>&amp;lt;b&amp;gt; &amp;amp; &lt;b&gt;</p>'), '&lt;b&gt; &amp; <b>');
});

test('htmlToText copes with nothing at all', () => {
  assert.strictEqual(htmlToText(''), '');
  assert.strictEqual(htmlToText(undefined), '');
  assert.strictEqual(htmlToText(null), '');
});

test('htmlToText agrees with the implementation it replaced on a few thousand assorted documents', () => {
  const pieces = [
    '<script>', '</script>', '<SCRIPT type="x">', '</SCRIPT>', '<style>', '</style>', '<nav>', '</nav>',
    '<footer>', '</footer>', '<svg viewBox="0 0 1 1">', '</svg>', '<navigation>', '</navigation>', '<scripts>',
    '<p>', '</p>', '<a href="/x">', '</a>', '<br/>', '<div class="a>b">', '<!-- note -->', '<>', '<', '>',
    'hello', 'world', ' ', '\n', '\t', 'a < b', '1 > 0', '&amp;', '&lt;', '&gt;', '&quot;', '&nbsp;', '&amp;lt;', '&copy;',
  ];
  // mulberry32: a tiny seeded generator, so a failure is reproducible.
  let state = 0x9e3779b9;
  const random = () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  for (let i = 0; i < 3000; i++) {
    const length = 1 + Math.floor(random() * 24);
    let html = '';
    for (let j = 0; j < length; j++) html += pieces[Math.floor(random() * pieces.length)];
    assert.strictEqual(htmlToText(html), referenceHtmlToText(html), `document #${i}: ${JSON.stringify(html)}`);
  }
});

test('cleaning a hostile megabyte of markup takes milliseconds, not minutes', async () => {
  // Run in a child process with a hard limit: if cleaning ever turns quadratic again
  // (the old regexes took 3.5 s for 100 KB of "<nav "), this fails after 20 s instead of
  // freezing the whole test run, because a synchronous loop cannot be interrupted.
  const script = `
    import { htmlToText } from ${JSON.stringify(contentFetcherUrl)};
    const mebibyte = 1024 * 1024;
    const hostile = {
      'unclosed <nav>': '<nav '.repeat(mebibyte / 5),
      'unclosed <script>': '<script '.repeat(mebibyte / 8),
      'unclosed <style>': '<style>'.repeat(mebibyte / 7),
      'unclosed <footer><svg>': '<footer><svg '.repeat(mebibyte / 13),
      'opener, then closers only': '<nav '.repeat(1000) + '</script>'.repeat(mebibyte / 9),
      'run of "<" with no ">"': '<'.repeat(mebibyte),
      'run of "<a" with no ">"': '<a'.repeat(mebibyte / 2),
      'run of "<>"': '<>'.repeat(mebibyte / 2),
    };
    const times = {};
    for (const [name, html] of Object.entries(hostile)) {
      const started = performance.now();
      htmlToText(html);
      times[name] = Math.round(performance.now() - started);
    }
    console.log(JSON.stringify(times));
  `;
  const stdout = await new Promise((resolve, reject) => {
    execFile(process.execPath, ['--input-type=module', '-e', script], { timeout: 20_000 }, (error, out, stderr) => {
      if (error) reject(new Error(`child failed or hit the 20s limit: ${error.message}\n${stderr}`));
      else resolve(out);
    });
  });

  const times = JSON.parse(stdout.trim().split('\n').pop());
  assert.strictEqual(Object.keys(times).length, 8);
  for (const [name, ms] of Object.entries(times)) assert.ok(ms < 1000, `${name} took ${ms} ms`);
});

test('fetchArticleExcerpt survives a hostile page and still answers promptly', async t => {
  const mock = installFetchMock([{
    match: 'https://hostile.example/page',
    text: '<nav '.repeat(100_000),
    headers: { 'content-type': 'text/html' },
  }]);
  t.after(() => mock.restore());

  const started = Date.now();
  const excerpt = await fetchArticleExcerpt('https://hostile.example/page');
  assert.ok(Date.now() - started < 2000, `took ${Date.now() - started} ms`);
  assert.ok(typeof excerpt === 'string' && excerpt.length > 0 && excerpt.length <= 1200);
});

// ---------------------------------------------------------------------------
// Page titles: what a page calls itself, which is what a source cited by Gemini
// (named only after its site) is lacking.
// ---------------------------------------------------------------------------

test('extractHtmlTitle reads the title of a page', () => {
  const cases = [
    ['<html><head><title>Hello World</title></head><body>x</body></html>', 'Hello World'],
    ['<title id="t" class="x">With attributes</title>', 'With attributes'],
    ['<TITLE>Upper case</TITLE>', 'Upper case'],
    ['<title>Whitespace after the name</title >', 'Whitespace after the name'],
    ['<title>\n   Spaced\n\t out \u00a0 title \n</title>', 'Spaced out title'],
    ['<title>A</title><title>B</title>', 'A'],
    ['<head><meta charset="utf-8"><title>After other tags</title></head>', 'After other tags'],
    ['<title>Hello <b>bold</b></title>', 'Hello <b>bold</b>'], // a title holds text, not markup: it is kept as written
    ['<titlefoo>x</titlefoo><title>Real</title>', 'Real'], // another tag that starts the same way is not the title
    ['stray</title><title>Real</title>', 'Real'], // a closer before the opener belongs to nobody
  ];
  for (const [html, title] of cases) assert.strictEqual(extractHtmlTitle(html), title, html);
});

test('extractHtmlTitle says null when there is no usable title', () => {
  for (const html of [
    '<html><head></head><body>no title</body></html>',
    '',
    '   ',
    null,
    undefined,
    42,
    '<title>never closed',
    '<title',
    '<title/>',
    '<title></title>',
    '<title>   \n\t  </title>',
    '<title>\u200b\u200e\u202e</title>', // nothing visible
    '<titlefoo>not a title</titlefoo>',
    '</title><title>', // a closer before the opener
    'Not a title</title> <title', // ...and an opener that never ends
  ]) {
    assert.strictEqual(extractHtmlTitle(html), null, JSON.stringify(html));
  }
});

test('extractHtmlTitle decodes character references once', () => {
  const cases = [
    ['<title>Tom &amp; Jerry&#8217;s &lt;API&gt; &quot;guide&quot; &apos;1&apos;</title>', 'Tom & Jerry’s <API> "guide" \'1\''],
    ['<title>&#x2019;&#X41;&#65;&#x1F600;</title>', '’AA\u{1F600}'],
    ['<title>a&nbsp;b</title>', 'a b'],
    ['<title>&amp;lt;b&amp;gt;</title>', '&lt;b&gt;'], // never decoded twice
    ['<title>&amp;#65;</title>', '&#65;'],
    ['<title>one&#9;two&#10;three&#13;four</title>', 'one two three four'],
    ['<title>&#1114111;&#x10FFFF;</title>', '\u{10FFFF}\u{10FFFF}'],
  ];
  for (const [html, title] of cases) assert.strictEqual(extractHtmlTitle(html), title, html);
});

test('extractHtmlTitle leaves a reference to a character nobody types as it was written', () => {
  for (const reference of ['&#0;', '&#1;', '&#8;', '&#11;', '&#31;', '&#127;', '&#x7F;', '&#x85;', '&#x9F;', '&#xD800;', '&#xDFFF;', '&#1114112;', '&#x110000;']) {
    assert.strictEqual(extractHtmlTitle(`<title>a${reference}b</title>`), `a${reference}b`, reference);
  }
  // Too long to be a reference the parser would honour.
  assert.strictEqual(extractHtmlTitle('<title>&#00000065;</title>'), '&#00000065;');
  assert.strictEqual(extractHtmlTitle('<title>&#x0000041;</title>'), '&#x0000041;');
  // Unknown names and missing semicolons are text.
  assert.strictEqual(extractHtmlTitle('<title>&copy; &amp x &#65</title>'), '&copy; &amp x &#65');
});

test('extractHtmlTitle drops the bidi isolates and the Arabic letter mark too, whether written out or as character references', () => {
  assert.strictEqual(extractHtmlTitle('<title>Sa\u2066f\u2067e\u2068 \u2069t\u061Ci&#x2066;t&#8297;le&#x61C;</title>'), 'Safe title');
});

test('extractHtmlTitle drops control and invisible formatting characters, but keeps joiners', () => {
  assert.strictEqual(extractHtmlTitle('<title>Sa\u202Efe\u200B \u0007t\u007Fi\u0085t\uFEFFle\u2060\u200E\u200F</title>'), 'Safe title');
  assert.strictEqual(extractHtmlTitle('<title>a\u200Db\u200Cc</title>'), 'a\u200Db\u200Cc', 'zero-width joiners belong to some scripts and emoji');
});

test('extractHtmlTitle cuts a title at 200 characters', () => {
  assert.strictEqual(extractHtmlTitle(`<title>${'x'.repeat(500)}</title>`), 'x'.repeat(200));
  assert.strictEqual(extractHtmlTitle(`<title>${'y'.repeat(200)}</title>`), 'y'.repeat(200));
});

test('extractHtmlTitle only looks at the start of a page', () => {
  assert.strictEqual(extractHtmlTitle(`${'x'.repeat(128 * 1024 - '<title>Just in time</title>'.length)}<title>Just in time</title>`), 'Just in time');
  assert.strictEqual(extractHtmlTitle(`${'x'.repeat(128 * 1024 - '<title>Just in time</title>'.length + 1)}<title>Just in time</title>`), null, 'one character later and the closing tag is out of reach');
  assert.strictEqual(extractHtmlTitle(`${'x'.repeat(130 * 1024)}<title>Too late</title>`), null);
});

test('extractHtmlTitle takes milliseconds, not minutes, on markup made to stall it', () => {
  const hostile = [
    '<title '.repeat(100_000),
    '<title>' + '</title'.repeat(100_000),
    '<title>' + '</title '.repeat(100_000),
    '<title>' + ' '.repeat(1_000_000),
    '<title>' + '&#'.repeat(30_000) + '</title>',
    '<title>' + '&#1111111'.repeat(10_000) + '</title>',
    '<' + 'title'.repeat(50_000),
  ];
  for (const html of hostile) {
    const started = performance.now();
    extractHtmlTitle(html);
    const took = performance.now() - started;
    assert.ok(took < 250, `${html.slice(0, 30)}… took ${Math.round(took)} ms`);
  }
});

const PAGE_HTML = `<html><head><title>Shipping &amp; Using the Zorble API</title><style>x{}</style></head>
  <body><h1>Zorble API</h1><p>It lets pages do zorbling.</p></body></html>`;

test('fetchArticlePage returns the excerpt and the title of a page', async t => {
  const mock = installFetchMock([{ match: 'https://pages.example/zorble', text: PAGE_HTML, headers: { 'content-type': 'text/html; charset=utf-8' } }]);
  t.after(() => mock.restore());

  const page = await fetchArticlePage('https://pages.example/zorble');

  assert.deepStrictEqual(page, {
    excerpt: 'Shipping & Using the Zorble API Zorble API It lets pages do zorbling.',
    title: 'Shipping & Using the Zorble API',
  });
});

test('fetchArticlePage keeps the title when the excerpt is cut short, and caps the excerpt at maxChars', async t => {
  const mock = installFetchMock([{ match: 'https://pages.example/short', text: PAGE_HTML, headers: { 'content-type': 'text/html' } }]);
  t.after(() => mock.restore());

  const page = await fetchArticlePage('https://pages.example/short', 12);

  assert.deepStrictEqual(page, { excerpt: 'Shipping & U', title: 'Shipping & Using the Zorble API' });
});

test('fetchArticlePage has a null title for a page without one, and still an excerpt', async t => {
  const mock = installFetchMock([{ match: 'https://pages.example/untitled', text: '<p>Just text.</p>', headers: { 'content-type': 'text/html' } }]);
  t.after(() => mock.restore());

  assert.deepStrictEqual(await fetchArticlePage('https://pages.example/untitled'), { excerpt: 'Just text.', title: null });
});

test('fetchArticlePage reads a page once and remembers it', async t => {
  const mock = installFetchMock([{ match: 'https://pages.example/once', text: PAGE_HTML, headers: { 'content-type': 'text/html' } }]);
  t.after(() => mock.restore());

  const first = await fetchArticlePage('https://pages.example/once');
  const second = await fetchArticlePage('https://pages.example/once');

  assert.deepStrictEqual(second, first);
  assert.strictEqual(mock.calls.length, 1);
});

test('fetchArticlePage follows a public redirect and gives up on everything it should not read', async t => {
  const mock = installFetchMock([
    { match: 'https://pages.example/moved', status: 301, headers: { location: 'https://pages.example/new-home' } },
    { match: 'https://pages.example/new-home', text: PAGE_HTML, headers: { 'content-type': 'text/html' } },
    { match: 'https://pages.example/image', text: 'PNG', headers: { 'content-type': 'image/png' } },
    { match: 'https://pages.example/missing', status: 404, text: 'nope', headers: { 'content-type': 'text/html' } },
    { match: 'https://pages.example/to-metadata', status: 302, headers: { location: 'http://169.254.169.254/latest/meta-data/' } },
    { match: 'https://pages.example/broken', throws: new Error('connection reset') },
  ]);
  t.after(() => mock.restore());

  assert.strictEqual((await fetchArticlePage('https://pages.example/moved')).title, 'Shipping & Using the Zorble API');
  for (const path of ['image', 'missing', 'to-metadata', 'broken']) {
    assert.strictEqual(await fetchArticlePage(`https://pages.example/${path}`), null, path);
  }
  for (const url of ['http://127.0.0.1/', 'file:///etc/passwd', 'not a url', '', undefined, null, 42]) {
    assert.strictEqual(await fetchArticlePage(url), null, String(url));
  }
  assert.ok(!mock.calls.includes('http://169.254.169.254/latest/meta-data/'), 'the metadata address was never requested');
});

test('fetchArticleExcerpt is the excerpt of fetchArticlePage, or null', async t => {
  const mock = installFetchMock([
    { match: 'https://pages.example/wrapped', text: PAGE_HTML, headers: { 'content-type': 'text/html' } },
    { match: 'https://pages.example/absent', status: 404, text: '', headers: { 'content-type': 'text/html' } },
  ]);
  t.after(() => mock.restore());

  assert.strictEqual(await fetchArticleExcerpt('https://pages.example/wrapped'), 'Shipping & Using the Zorble API Zorble API It lets pages do zorbling.');
  assert.strictEqual(await fetchArticleExcerpt('https://pages.example/wrapped', 8), 'Shipping', 'maxChars is passed on');
  assert.strictEqual(await fetchArticleExcerpt('https://pages.example/absent'), null);
});
