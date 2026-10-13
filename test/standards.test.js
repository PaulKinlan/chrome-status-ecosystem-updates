import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import { config } from '../src/config.js';
import { searchStandardsPositions, isOfficialPositionIssue } from '../src/search/standards.js';
import { filterRelevantItems } from '../src/search/verifier.js';
import { installFetchMock } from './_support/fetch-mock.js';

const MOZ = 'https://github.com/mozilla/standards-positions/issues/823';
const WEBKIT = 'https://github.com/WebKit/standards-positions/issues/229';

function githubIssue(url, overrides = {}) {
  return {
    title: 'Request for position on something unrelated-sounding',
    html_url: url,
    state: 'closed',
    labels: [{ name: 'position: positive' }],
    comments: 0,
    body: 'body',
    created_at: '2026-01-01T00:00:00Z',
    updated_at: '2026-01-02T00:00:00Z',
    ...overrides,
  };
}

/** Mock routes for a GitHub that knows `issues` (url -> issue json); everything else is empty. */
function githubRoutes(issues) {
  const routes = [];
  for (const [url, json] of Object.entries(issues)) {
    const [, owner, repo, number] = url.match(/github\.com\/([^/]+)\/([^/]+)\/issues\/(\d+)/);
    routes.push({ match: `api.github.com/repos/${owner}/${repo}/issues/${number}/comments`, json: [] });
    routes.push({ match: `api.github.com/repos/${owner}/${repo}/issues/${number}`, json });
  }
  routes.push({ match: 'api.github.com/search/issues', json: { items: [] } });
  return routes;
}

test('isOfficialPositionIssue accepts only the vendor\'s own standards-positions repo', () => {
  const yes = [
    ['Mozilla', 'https://github.com/mozilla/standards-positions/issues/823'],
    ['Mozilla', 'https://github.com/mozilla/standards-positions/issues/823#issuecomment-1'],
    ['Mozilla', 'https://github.com/Mozilla/Standards-Positions/issues/1'],
    ['WebKit', 'https://github.com/WebKit/standards-positions/issues/229'],
    ['WebKit', 'https://github.com/webkit/standards-positions/issues/229/'],
  ];
  const no = [
    ['Mozilla', 'https://github.com/WebKit/standards-positions/issues/229'], // wrong vendor's repo
    ['WebKit', 'https://github.com/mozilla/standards-positions/issues/823'],
    ['Mozilla', 'https://github.com/someone/else/issues/5'],
    ['Mozilla', 'https://github.com/mozilla/standards-positions/pull/5'],
    ['Mozilla', 'https://github.com/mozilla/standards-positions/issues/abc'],
    ['Mozilla', 'https://github.com/mozilla/standards-positions'],
    ['Mozilla', 'http://github.com/mozilla/standards-positions/issues/823'], // not https
    ['Mozilla', 'https://github.com.evil.example/mozilla/standards-positions/issues/823'],
    ['Mozilla', 'https://evil.example/github.com/mozilla/standards-positions/issues/823'],
    ['Mozilla', 'https://www.github.com/mozilla/standards-positions/issues/823'],
    ['Mozilla', 'https://user@github.com.evil.example/mozilla/standards-positions/issues/823'],
    ['Opera', 'https://github.com/mozilla/standards-positions/issues/823'], // unknown vendor
    ['Mozilla', ''],
    ['Mozilla', null],
    ['Mozilla', 'not a url'],
  ];
  for (const [vendor, url] of yes) assert.strictEqual(isOfficialPositionIssue(url, vendor), true, `${vendor} ${url}`);
  for (const [vendor, url] of no) assert.strictEqual(isOfficialPositionIssue(url, vendor), false, `${vendor} ${url}`);
});

test('position issues linked from ChromeStatus come back marked trusted', async (t) => {
  const mock = installFetchMock(githubRoutes({ [MOZ]: githubIssue(MOZ), [WEBKIT]: githubIssue(WEBKIT) }), { onUnmatched: 'empty' });
  t.after(() => mock.restore());

  const results = await searchStandardsPositions({
    name: 'CSS corner shorthand properties',
    browsers: { firefox: { url: MOZ }, safari: { url: WEBKIT } },
  });

  const moz = results.find(r => r.vendor === 'Mozilla');
  const webkit = results.find(r => r.vendor === 'WebKit');
  assert.ok(moz && webkit, 'both direct links should be fetched');
  assert.strictEqual(moz.trusted, true);
  assert.strictEqual(webkit.trusted, true);
  assert.deepStrictEqual(moz.labels, ['position: positive']);
});

test('both GitHub requests of the standards search carry the API headers, and the token when one is set', async (t) => {
  const saved = config.githubToken;
  config.githubToken = 'ghp_test_token';
  const mock = installFetchMock(githubRoutes({ [MOZ]: githubIssue(MOZ) }), { onUnmatched: 'empty' });
  t.after(() => {
    mock.restore();
    config.githubToken = saved;
  });

  await searchStandardsPositions({ name: 'CSS corner shorthand properties', browsers: { firefox: { url: MOZ } } });

  const issueRequest = mock.requests.find(r => r.url === 'https://api.github.com/repos/mozilla/standards-positions/issues/823');
  const searchRequest = mock.requests.find(r => r.url.startsWith('https://api.github.com/search/issues'));
  assert.ok(issueRequest, 'the linked issue is fetched directly');
  assert.ok(searchRequest, 'the repositories are also searched');
  for (const request of [issueRequest, searchRequest]) {
    assert.strictEqual(request.headers.Authorization, 'Bearer ghp_test_token', request.url);
    assert.strictEqual(request.headers.Accept, 'application/vnd.github+json', request.url);
  }
});

test('without a GitHub token the standards search is anonymous but still asks for the JSON API', async (t) => {
  const saved = config.githubToken;
  config.githubToken = '';
  const mock = installFetchMock(githubRoutes({ [MOZ]: githubIssue(MOZ) }), { onUnmatched: 'empty' });
  t.after(() => {
    mock.restore();
    config.githubToken = saved;
  });

  await searchStandardsPositions({ name: 'CSS corner shorthand properties', browsers: { firefox: { url: MOZ } } });

  const github = mock.requests.filter(r => r.url.startsWith('https://api.github.com/'));
  assert.ok(github.length >= 2);
  for (const request of github) {
    assert.strictEqual(request.headers.Authorization, undefined, request.url);
    assert.strictEqual(request.headers.Accept, 'application/vnd.github+json', request.url);
  }
});

test('a link that is not really a vendor position issue is never trusted, and a look-alike host is never even fetched', async (t) => {
  const elsewhere = 'https://github.com/someone/else/issues/5';
  const lookalike = 'https://evil.example/github.com/mozilla/standards-positions/issues/1';
  const mock = installFetchMock(githubRoutes({
    [elsewhere]: githubIssue(elsewhere),
    // What the look-alike would have fetched when the issue parser was not anchored: the real repo's issue.
    'https://github.com/mozilla/standards-positions/issues/1': githubIssue('https://github.com/mozilla/standards-positions/issues/1'),
  }), { onUnmatched: 'empty' });
  t.after(() => mock.restore());

  const viaElsewhere = await searchStandardsPositions({ name: 'X', browsers: { firefox: { url: elsewhere } } });
  assert.ok(viaElsewhere.some(r => r.url === elsewhere));
  assert.ok(viaElsewhere.every(r => r.trusted !== true), 'an arbitrary repo must not earn trust');

  mock.calls.length = 0;
  const viaLookalike = await searchStandardsPositions({ name: 'X', browsers: { firefox: { url: lookalike } } });
  assert.deepStrictEqual(viaLookalike, [], 'a link that is not a GitHub issue address yields nothing');
  assert.ok(
    !mock.calls.some(url => url.includes('/repos/mozilla/standards-positions/issues/1')),
    'no GitHub API request was built from the look-alike'
  );
  assert.ok(viaLookalike.every(r => r.trusted !== true), 'a look-alike host must not earn trust');
});

test('results found by keyword search are never trusted', async (t) => {
  const found = 'https://github.com/mozilla/standards-positions/issues/99';
  const mock = installFetchMock([
    { match: 'api.github.com/repos/mozilla/standards-positions/issues/99/comments', json: [] },
    { match: 'repo%3Amozilla%2Fstandards-positions', json: { items: [githubIssue(found)] } },
    { match: 'api.github.com/search/issues', json: { items: [] } },
  ], { onUnmatched: 'empty' });
  t.after(() => mock.restore());

  const results = await searchStandardsPositions({ name: 'Some Feature', browsers: {} });

  assert.ok(results.some(r => r.url === found), 'the search hit should be returned');
  assert.ok(results.every(r => r.trusted !== true));
});

test('filterRelevantItems keeps trusted items the keyword fallback would reject, in order', async () => {
  const feature = { name: 'CSS corner shorthand properties', summary: 'Shorthands for corners.' };
  const trusted = { title: 'Position request #823', url: MOZ, trusted: true };
  const unrelated = { title: 'Totally different topic', url: 'https://example.com/other', snippet: 'nothing in common' };
  const related = { title: 'CSS corner shorthand properties explained', url: 'https://example.com/corners' };

  const kept = await filterRelevantItems(feature, [unrelated, trusted, related]);

  assert.deepStrictEqual(kept, [trusted, related], 'trusted + genuinely relevant survive, in the original order');
  assert.strictEqual(trusted.verifiedBy, 'chromestatus');
  assert.strictEqual(trusted.relevanceConfidence, 100);
  assert.strictEqual(related.verifiedBy, 'heuristic');
});

test('trusted items are not sent to the model, and survive a model that rejects everything', async (t) => {
  const savedKey = config.geminiApiKey;
  config.geminiApiKey = 'test-key';
  const bodies = [];
  const mock = installFetchMock([{
    match: 'generativelanguage.googleapis.com',
    json: {
      candidates: [{ content: { parts: [{ text: JSON.stringify({
        results: [{ id: 0, isRelevant: false, confidence: 95, reason: 'unrelated' }],
      }) }] } }],
    },
  }], { onUnmatched: 'empty' });
  const inner = globalThis.fetch;
  globalThis.fetch = async (input, init) => {
    bodies.push(String(init?.body ?? ''));
    return inner(input, init);
  };
  t.after(() => {
    config.geminiApiKey = savedKey;
    mock.restore();
  });

  const feature = { name: 'Foo', summary: 'Foo things.' };
  const trusted = { title: 'SECRET-TRUSTED-TITLE', url: MOZ, trusted: true };
  const candidate = { title: 'Some candidate', url: 'https://example.com/c' };

  const kept = await filterRelevantItems(feature, [trusted, candidate]);

  assert.deepStrictEqual(kept, [trusted], 'the model rejected the only candidate; the trusted item stays');
  assert.ok(bodies.length > 0, 'the untrusted candidate should still be verified by the model');
  assert.ok(!bodies.some(b => b.includes('SECRET-TRUSTED-TITLE')), 'the trusted item must not be sent to the model');
});

test('a list made only of trusted items needs no verification at all', async (t) => {
  const savedKey = config.geminiApiKey;
  config.geminiApiKey = 'test-key';
  const mock = installFetchMock([], { onUnmatched: 'throw' }); // any request would throw
  t.after(() => {
    config.geminiApiKey = savedKey;
    mock.restore();
  });

  const items = [{ title: 'A', url: MOZ, trusted: true }, { title: 'B', url: WEBKIT, trusted: true }];
  const kept = await filterRelevantItems({ name: 'Foo' }, items);

  assert.deepStrictEqual(kept, items);
  assert.deepStrictEqual(mock.calls, []);
});

test('only an exact `trusted: true` earns the bypass', async () => {
  const feature = { name: 'Foo', summary: 'Foo things.' };
  const lookalikes = [
    { title: 'Unrelated', url: 'https://example.com/1', trusted: 'true' },
    { title: 'Unrelated', url: 'https://example.com/2', trusted: 1 },
    { title: 'Unrelated', url: 'https://example.com/3', trusted: { value: true } },
  ];
  assert.deepStrictEqual(await filterRelevantItems(feature, lookalikes), []);
});
