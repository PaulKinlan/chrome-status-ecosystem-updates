import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import { partitionArticles, isHostnameTitle, applyPageDetails, canonicalUrlSet } from '../src/search/articles.js';

// --- partitionArticles ----------------------------------------------------------------------------------------

test('partitionArticles puts blog posts and tutorials in one list and reference pages in the other', () => {
  const flaggedBlog = { url: 'https://github.com/someone/post', domain: 'github.com', isBlog: true };
  const webDev = { url: 'https://web.dev/articles/x', domain: 'web.dev' };
  const mdn = { url: 'https://developer.mozilla.org/docs/x', domain: 'developer.mozilla.org' };
  const spec = { url: 'https://www.w3.org/TR/x', domain: 'w3.org' };
  const whatwg = { url: 'https://html.spec.whatwg.org/#x', domain: 'html.spec.whatwg.org' };
  const repo = { url: 'https://github.com/w3c/x', domain: 'github.com' };
  const noDomain = { url: 'broken' };
  const articles = [mdn, webDev, spec, flaggedBlog, whatwg, repo, noDomain];

  const { blogs, docs } = partitionArticles(articles);

  assert.deepStrictEqual(blogs, [webDev, flaggedBlog]);
  assert.deepStrictEqual(docs, [mdn, spec, whatwg, repo, noDomain]);
  assert.strictEqual(blogs[1], flaggedBlog, 'the same records, not copies');
});

test('partitionArticles puts every article in exactly one list, in its original order, and leaves its input alone', () => {
  const articles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    domain: i % 3 === 0 ? 'github.com' : i % 3 === 1 ? 'example.org' : '',
    isBlog: i % 4 === 0,
  }));
  const copy = [...articles];

  const { blogs, docs } = partitionArticles(articles);

  assert.deepStrictEqual(articles, copy);
  assert.strictEqual(blogs.length + docs.length, articles.length);
  assert.deepStrictEqual([...blogs, ...docs].map(a => a.id).sort((a, b) => a - b), articles.map(a => a.id));
  for (const list of [blogs, docs]) {
    assert.deepStrictEqual(list.map(a => a.id), [...list.map(a => a.id)].sort((a, b) => a - b), 'order kept');
  }
  assert.ok(blogs.every(a => !docs.includes(a)));
});

test('partitionArticles copes with nothing', () => {
  assert.deepStrictEqual(partitionArticles([]), { blogs: [], docs: [] });
});

// --- isHostnameTitle -------------------------------------------------------------------------------------------

test('isHostnameTitle recognises a title that is only a site name', () => {
  for (const title of ['web.dev', 'developer.chrome.com', 'www.w3.org', 'a-b.c-d.example', 'html.spec.whatwg.org', 'example.co.uk', 'xn--bcher-kva.example', 'site.xn--p1ai', '  web.dev  ', '1password.com']) {
    assert.strictEqual(isHostnameTitle(title), true, title);
  }
});

test('isHostnameTitle leaves real titles alone', () => {
  for (const title of [
    'Web Platform', 'web', 'An article', 'web.dev — Articles', 'web.dev articles', 'example.com/path', 'https://example.com',
    'Node.js', 'v2.0', '3.5', 'Zorble API v2.0', 'WEB.DEV', 'Web.dev', 'a..b', '.dev', 'web.dev.', '-x.dev', '',
    '   ', null, undefined, 42, ['web.dev'], { toString: () => 'web.dev' },
    '3.14', '1.20', 'v10.20', '192.168.1.20', // versions and addresses end in a number, a site name does not
    'e.g', 'a.b', 'node.j', // a top-level domain has at least two letters
  ]) {
    assert.strictEqual(isHostnameTitle(title), false, String(title));
  }
});

test('isHostnameTitle does not mind a hostile title', () => {
  const started = Date.now();
  for (const title of ['a.'.repeat(50_000) + '!', 'a'.repeat(200_000) + '!', `${'a-'.repeat(50_000)}.`, '.'.repeat(100_000), 'a.b'.repeat(40_000) + ' x']) {
    assert.strictEqual(isHostnameTitle(title), false);
  }
  assert.ok(Date.now() - started < 1000, `took ${Date.now() - started}ms`);
});

// --- applyPageDetails ----------------------------------------------------------------------------------------------

test('applyPageDetails gives a source that is only a site name the title and the excerpt of its page', () => {
  const article = { title: 'web.dev', url: 'https://web.dev/articles/x' };

  applyPageDetails(article, { excerpt: 'What the page says.', title: 'Shipping the Zorble API' });

  assert.deepStrictEqual(article, { title: 'Shipping the Zorble API', url: 'https://web.dev/articles/x', contentExcerpt: 'What the page says.' });
});

test('applyPageDetails never overwrites an excerpt, or a title that says something', () => {
  const article = { title: 'A Real Title', contentExcerpt: 'Already read.' };

  applyPageDetails(article, { excerpt: 'Another excerpt.', title: 'A different title' });

  assert.deepStrictEqual(article, { title: 'A Real Title', contentExcerpt: 'Already read.' });
});

test('applyPageDetails fills a missing excerpt even when the title stays', () => {
  const article = { title: 'A Real Title' };

  applyPageDetails(article, { excerpt: 'Fresh excerpt.', title: 'Page title' });

  assert.deepStrictEqual(article, { title: 'A Real Title', contentExcerpt: 'Fresh excerpt.' });
});

test('applyPageDetails does nothing without a page, and nothing with an empty one', () => {
  for (const page of [null, undefined, {}, { excerpt: '', title: null }, { excerpt: '', title: '' }]) {
    const article = { title: 'web.dev' };
    applyPageDetails(article, page);
    assert.deepStrictEqual(article, { title: 'web.dev' }, JSON.stringify(page));
  }
});

test('applyPageDetails keeps a site-name title when the page has none', () => {
  const article = { title: 'web.dev' };

  applyPageDetails(article, { excerpt: 'Text.', title: null });

  assert.strictEqual(article.title, 'web.dev');
});

test('applyPageDetails does not take a bot check, an error page or a login wall for the title of an article', () => {
  for (const placeholder of [
    'Just a moment...', 'Just a moment…', 'JUST A MOMENT', 'One moment', 'Please wait...', 'Please Wait... | Cloudflare',
    'Checking your browser', 'Redirecting...', 'Loading…', 'Attention Required! | Cloudflare', 'Attention required',
    'Access Denied', 'Forbidden', 'Not Found', 'Page not found', 'Error', 'Sign in', 'Log in', 'Login',
    '403', '404', '403 Forbidden', '404 Not Found', '500 Internal Server Error', '503 Service Unavailable', '503 Error',
  ]) {
    const article = { title: 'blog.example' };
    applyPageDetails(article, { excerpt: '', title: placeholder });
    assert.strictEqual(article.title, 'blog.example', placeholder);
  }
});

test('applyPageDetails takes a title that merely starts like a placeholder', () => {
  for (const title of [
    'Sign in form best practices', 'Login flows with WebAuthn', 'Error handling in fetch()', '404 pages and the web platform',
    'Not found: a history of status codes', 'Loading performance for the web', 'Access Denied: Designing permission prompts',
    'Redirecting users after sign-in', 'Please wait for the animation to end', 'Forbidden knowledge about CSS',
  ]) {
    const article = { title: 'blog.example' };
    applyPageDetails(article, { excerpt: '', title });
    assert.strictEqual(article.title, title);
  }
});

test('applyPageDetails takes a title that merely ends like a placeholder', () => {
  for (const title of [
    'Native lazy loading', 'How to design a login', 'Handling a 404 not found', 'Fixing the 404', 'Why an error', 'Moving to the new sign in',
    'Streaming and just a moment', 'A page not found', 'Notes on redirecting',
  ]) {
    const article = { title: 'blog.example' };
    applyPageDetails(article, { excerpt: '', title });
    assert.strictEqual(article.title, title);
  }
});

test('applyPageDetails does not mind a hostile page title', () => {
  const started = Date.now();
  for (const title of ['loading' + '!'.repeat(100_000) + 'x', 'please wait' + ' '.repeat(100_000) + 'x', 'loading' + ' | '.repeat(30_000) + 'x']) {
    applyPageDetails({ title: 'blog.example' }, { excerpt: '', title });
  }
  assert.ok(Date.now() - started < 1000, `took ${Date.now() - started}ms`);
});

// --- canonicalUrlSet ----------------------------------------------------------------------------------------------------

test('canonicalUrlSet holds one entry per page, however it was linked, and leaves out what is not there', () => {
  const set = canonicalUrlSet([
    'https://example.com/a',
    'http://www.example.com/a/?utm_source=x',
    'https://example.com/b',
    '', null, undefined, '   ', 42,
  ]);

  assert.deepStrictEqual([...set].sort(), ['example.com/a', 'example.com/b']);
  assert.ok(set.has('example.com/a'));
});

test('canonicalUrlSet accepts any iterable', () => {
  assert.deepStrictEqual([...canonicalUrlSet(new Set(['https://a.example/x', 'http://a.example/x/']))], ['a.example/x']);
  assert.deepStrictEqual([...canonicalUrlSet([])], []);
});
