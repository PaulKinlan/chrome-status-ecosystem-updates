import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import { searchNpmEcosystem } from '../src/search/npm.js';
import { installFetchMock } from './_support/fetch-mock.js';

/**
 * The npm registry lookup: two searches (the feature's name without a leading CSS/Web/API, then the name as it is),
 * and for every package found one more request for its page, whose README says whether it is a polyfill.
 *
 * Every test uses package names of its own: the page of a package is remembered for the rest of the process.
 */

const SEARCH = 'https://registry.npmjs.org/-/v1/search?text=';
const searchUrl = query => `${SEARCH}${encodeURIComponent(query)}&size=5`;
const pageUrl = name => `https://registry.npmjs.org/${encodeURIComponent(name)}`;

/** A registry that answers `searches` (query -> hits, or a route's own status/text) and `pages` (package -> page). */
function registry(t, { searches = {}, pages = {} } = {}) {
  const routes = [
    ...Object.entries(searches).map(([query, answer]) => ({
      match: url => url === searchUrl(query),
      ...(Array.isArray(answer) ? { json: { objects: answer } } : answer),
    })),
    ...Object.entries(pages).map(([name, answer]) => ({ match: url => url === pageUrl(name), ...answer })),
  ];
  const mock = installFetchMock(routes, { onUnmatched: 'empty' });
  t.after(() => mock.restore());
  return mock;
}

const hit = (name, extra = {}) => ({ package: { name, version: '1.0.0', description: '', ...extra } });
const names = results => results.map(result => result.name);

test('the first search leaves out a leading CSS, Web or API and the second uses the name as it is', async t => {
  const mock = registry(t); // nothing is routed: every search is answered "not found"
  const cases = [
    ['CSS Anchor Positioning', 'anchor positioning'],
    ['Web Share', 'share'],
    ['API Observer', 'observer'],
    ['Webcam Capture', 'webcam capture'], // "Web" is only a prefix when a space follows it
    ['Trailing Space ', 'trailing space'],
  ];

  for (const [name, words] of cases) {
    mock.calls.length = 0;
    assert.deepStrictEqual(await searchNpmEcosystem({ name }), []);
    assert.deepStrictEqual(mock.calls, [searchUrl(words), searchUrl(name)], name);
  }
});

test('a search word under three characters is not searched for, and one of three is', async t => {
  const mock = registry(t);

  for (const name of ['Web UI', 'API UI', 'CSS UI']) {
    mock.calls.length = 0;
    await searchNpmEcosystem({ name });
    assert.deepStrictEqual(mock.calls, [searchUrl(name)], `"ui" is two characters, so only "${name}" is asked`);
  }

  mock.calls.length = 0;
  await searchNpmEcosystem({ name: 'Foo' });
  assert.deepStrictEqual(mock.calls, [searchUrl('foo'), searchUrl('Foo')], 'three characters are enough');
});

test('a package is described by what the search found and by its page in the registry', async t => {
  registry(t, {
    searches: {
      'npmtest widgets': [hit('npmtest-widgets', {
        version: '2.3.4',
        description: 'Widgets for the web',
        date: '2026-09-01T10:00:00.000Z',
        links: { npm: 'https://www.npmjs.com/package/npmtest-widgets?activeTab=readme' },
      })],
    },
    pages: {
      'npmtest-widgets': {
        json: {
          homepage: 'https://widgets.example/',
          repository: { url: 'git+https://github.com/example/widgets.git' },
          readme: '  Widgets\r\nfor everyone.\nSecond line.  ',
        },
      },
    },
  });

  const [pkg, ...rest] = await searchNpmEcosystem({ name: 'npmtest widgets' });

  assert.deepStrictEqual(rest, [], 'the second search finds nothing new');
  assert.deepStrictEqual(pkg, {
    source: 'NPM Registry',
    type: 'package',
    name: 'npmtest-widgets',
    version: '2.3.4',
    description: 'Widgets for the web',
    url: 'https://www.npmjs.com/package/npmtest-widgets?activeTab=readme',
    isPolyfill: false,
    publishedAt: '2026-09-01T10:00:00.000Z',
    readmeSnippet: 'Widgets for everyone. Second line.',
    homepage: 'https://widgets.example/',
    repository: 'git+https://github.com/example/widgets.git',
  });
});

test('a package with no description and no link of its own is linked to its page on npmjs.com, and one whose page is gone is still listed', async t => {
  registry(t, {
    searches: { 'npmtest orphan': [hit('npmtest-orphan', { description: undefined })] },
    // Gone, but with a body that looks like a page: it must not be used.
    pages: { 'npmtest-orphan': { status: 404, json: { homepage: 'https://orphan.example/', readme: 'A polyfill, once.' } } },
  });

  const [pkg] = await searchNpmEcosystem({ name: 'npmtest orphan' });

  assert.strictEqual(pkg.url, 'https://www.npmjs.com/package/npmtest-orphan');
  assert.strictEqual(pkg.description, '');
  assert.strictEqual(pkg.readmeSnippet, '');
  assert.strictEqual(pkg.homepage, null);
  assert.strictEqual(pkg.repository, null);
  assert.strictEqual(pkg.isPolyfill, false);
});

test('only the start of a README is kept', async t => {
  registry(t, {
    searches: { 'npmtest long readme': [hit('npmtest-long-readme')] },
    pages: { 'npmtest-long-readme': { json: { readme: `${'a'.repeat(499)}bcd` } } },
  });

  const [pkg] = await searchNpmEcosystem({ name: 'npmtest long readme' });

  assert.strictEqual(pkg.readmeSnippet, `${'a'.repeat(499)}b`, 'the first 500 characters');
});

test('the page of a package is asked for once, however many searches find it', async t => {
  const mock = registry(t, {
    searches: { 'npmtest again': [hit('npmtest-again-a')] },
    pages: { 'npmtest-again-a': { json: { readme: 'once' } } },
  });

  await searchNpmEcosystem({ name: 'npmtest again' });
  const [pkg] = await searchNpmEcosystem({ name: 'npmtest again' });

  assert.strictEqual(pkg.readmeSnippet, 'once', 'the second search has the page too');
  assert.strictEqual(mock.calls.filter(url => url === pageUrl('npmtest-again-a')).length, 1);
});

test('a repository that the registry gives as a plain string is kept as it is', async t => {
  registry(t, {
    searches: { 'npmtest string repo': [hit('npmtest-string-repo')] },
    pages: { 'npmtest-string-repo': { json: { repository: 'github:example/string-repo' } } },
  });

  const [pkg] = await searchNpmEcosystem({ name: 'npmtest string repo' });

  assert.strictEqual(pkg.repository, 'github:example/string-repo');
});

test('a package is a polyfill when its name, its description or its README says so, and not otherwise', async t => {
  const cases = [
    ['by its name', hit('npmtest-popover-polyfill'), {}, true],
    ['by its description', hit('npmtest-popover-a', { description: 'A Shim for the popover attribute' }), {}, true],
    ['by its README', hit('npmtest-popover-b'), { readme: 'This prollyfill follows the spec.' }, true],
    ['by the word polyfill in its README', hit('npmtest-popover-c'), { readme: 'A Polyfill, mostly.' }, true],
    ['by none of them', hit('npmtest-popover-d', { description: 'Popovers' }), { readme: 'Popovers for all.' }, false],
  ];
  registry(t, {
    searches: { 'npmtest popover': cases.map(([, found]) => found) },
    pages: Object.fromEntries(cases.map(([, found, page]) => [found.package.name, { json: page }])),
  });

  const results = await searchNpmEcosystem({ name: 'npmtest popover' });

  assert.deepStrictEqual(
    results.map(result => [result.name, result.isPolyfill]),
    cases.map(([, found, , expected]) => [found.package.name, expected]),
    cases.map(([label]) => label).join('; ')
  );
});

test('a package that both searches find is listed once and its page is fetched once', async t => {
  const mock = registry(t, {
    searches: {
      'npmtest twice': [hit('npmtest-twice-a'), hit('npmtest-twice-b')],
      'NPMTest Twice': [hit('npmtest-twice-b'), hit('npmtest-twice-c')],
    },
  });

  const results = await searchNpmEcosystem({ name: 'NPMTest Twice' });

  assert.deepStrictEqual(names(results), ['npmtest-twice-a', 'npmtest-twice-b', 'npmtest-twice-c']);
  assert.strictEqual(mock.calls.filter(url => url === pageUrl('npmtest-twice-b')).length, 1);
});

test('no more than eight packages are returned, in the order they were found', async t => {
  const first = Array.from({ length: 5 }, (_, i) => hit(`npmtest-many-a${i}`));
  const second = Array.from({ length: 5 }, (_, i) => hit(`npmtest-many-b${i}`));
  registry(t, { searches: { 'npmtest many': first, 'NPMTest Many': second } });

  const results = await searchNpmEcosystem({ name: 'NPMTest Many' });

  assert.deepStrictEqual(names(results), [...first, ...second].slice(0, 8).map(found => found.package.name));
});

test('a search that is refused does not stop the other search', async t => {
  registry(t, {
    searches: {
      // Not found, but with an answer that looks like a good one: it must not be used.
      'npmtest broken': { status: 404, json: { objects: [hit('npmtest-broken-ignored')] } },
      'NPMTest Broken': [hit('npmtest-broken-a')],
    },
  });

  assert.deepStrictEqual(names(await searchNpmEcosystem({ name: 'NPMTest Broken' })), ['npmtest-broken-a']);
});

test('a search that answers with something that is not JSON does not stop the other search', async t => {
  registry(t, {
    searches: {
      'npmtest garbled': { text: '<html>not json</html>' },
      'NPMTest Garbled': [hit('npmtest-garbled-a')],
    },
  });

  assert.deepStrictEqual(names(await searchNpmEcosystem({ name: 'NPMTest Garbled' })), ['npmtest-garbled-a']);
});

test('a hit without a package and an answer without hits are passed over', async t => {
  registry(t, {
    searches: {
      'npmtest sparse': { json: {} },
      'NPMTest Sparse': [{ rank: 1 }, hit('npmtest-sparse-a')],
    },
  });

  assert.deepStrictEqual(names(await searchNpmEcosystem({ name: 'NPMTest Sparse' })), ['npmtest-sparse-a']);
});

test('the registry is asked for JSON, by a crawler that gives its name', async t => {
  const mock = registry(t, {
    searches: { 'npmtest polite': [hit('npmtest-polite-a')], 'NPMTest Polite': [] },
  });

  await searchNpmEcosystem({ name: 'NPMTest Polite' });

  assert.ok(mock.requests.length >= 3, 'two searches and one package page');
  for (const request of mock.requests) {
    assert.strictEqual(request.headers.Accept, 'application/json', request.url);
    assert.strictEqual(request.headers['User-Agent'], 'chrome-status-ecosystem-tracker/1.0', request.url);
  }
});
