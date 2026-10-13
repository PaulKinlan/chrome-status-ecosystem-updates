import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert/strict';
import { searchBaseline } from '../src/search/baseline.js';
import { searchWpt } from '../src/search/wpt.js';
import { resetWebStatus } from '../src/search/webstatus.js';
import { resetWebFeatureStats } from '../src/web-features-stats.js';
import { logger } from '../src/logger.js';
import { installFetchMock } from './_support/fetch-mock.js';
import { ANCHOR_POSITIONING, webStatusGroupRoute, webStatusSearchRoute } from './_support/web-features-mock.js';

const FEATURE = {
  id: 5124767085953024,
  name: 'CSS anchor positioning',
  specUrl: 'https://drafts.csswg.org/css-anchor-position-1/',
};

/** What `webFeatureFor` gives a feature of the anchor-positioning group. */
const GROUP = Object.freeze({
  id: 'anchor-positioning',
  scope: 'group',
  groupSize: 2,
  url: 'https://webstatus.dev/features/anchor-positioning',
  wptUrl: 'https://wpt.fyi/results?q=feature:anchor-positioning',
  positions: [],
  usage: null,
});

function serve(t, routes) {
  resetWebStatus();
  resetWebFeatureStats();
  const mock = installFetchMock(routes, { onUnmatched: 'empty' });
  t.after(() => {
    mock.restore();
    resetWebStatus();
    resetWebFeatureStats();
  });
  return mock;
}

test('Baseline of a mapped feature is the Baseline of its group, found by id and labelled as group-level', async t => {
  const mock = serve(t, [webStatusGroupRoute('anchor-positioning', ANCHOR_POSITIONING)]);

  assert.deepEqual(await searchBaseline(FEATURE, GROUP), {
    featureId: 'anchor-positioning',
    name: 'Anchor positioning',
    status: 'limited',
    statusLabel: 'Limited Availability',
    matchedOn: 'web-features mapping',
    scope: 'group',
    lowDate: null,
    highDate: null,
    browserSupport: { chrome: null, edge: null, firefox: null, safari: '27' },
    url: 'https://webstatus.dev/features/anchor-positioning',
  });
  assert.equal(mock.calls.length, 1);
});

test('a widely available group reports both dates and every engine\'s first version', async t => {
  serve(t, [webStatusGroupRoute('anchor-positioning', {
    ...ANCHOR_POSITIONING,
    baseline: { status: 'widely', low_date: '2023-03-27', high_date: '2025-09-27' },
    browser_implementations: { chrome: { version: '111' }, edge: { version: '111' }, firefox: { version: '113' }, safari: { version: '16.4' } },
  })]);

  const result = await searchBaseline(FEATURE, GROUP);
  assert.equal(result.status, 'widely');
  assert.equal(result.statusLabel, 'Baseline Widely Available');
  assert.equal(result.lowDate, '2023-03-27');
  assert.equal(result.highDate, '2025-09-27');
  assert.deepEqual(result.browserSupport, { chrome: '111', edge: '111', firefox: '113', safari: '16.4' });
});

test('a group with no Baseline status is "unknown", not given a status the API did not state', async t => {
  serve(t, [webStatusGroupRoute('anchor-positioning', { ...ANCHOR_POSITIONING, baseline: {} })]);
  const result = await searchBaseline(FEATURE, GROUP);
  assert.equal(result.status, 'unknown');
  assert.equal(result.statusLabel, 'Not yet assessed by Baseline');
});

test('a mapped feature whose group webstatus.dev does not know is untracked, and is not looked up again by name', async t => {
  const mock = serve(t, [
    webStatusGroupRoute('anchor-positioning', null, 404),
    webStatusSearchRoute([ANCHOR_POSITIONING]),
  ]);

  assert.equal(await searchBaseline(FEATURE, GROUP), null);
  assert.deepEqual(mock.calls, ['https://api.webstatus.dev/v1/features/anchor-positioning?wpt_metric_view=test_counts']);
});

test('a group webstatus.dev does not know is untracked quietly, not reported as a query that went wrong', async t => {
  const debug = [];
  t.mock.method(logger, 'debug', message => debug.push(String(message)));
  serve(t, [webStatusGroupRoute('anchor-positioning', null, 404)]);

  assert.equal(await searchBaseline(FEATURE, GROUP), null);
  assert.deepEqual(debug.filter(line => /error/i.test(line)), []);
});

test('a feature outside the mapping is still searched for by name and accepted only on a confident match', async t => {
  const mock = serve(t, [webStatusSearchRoute([
    { ...ANCHOR_POSITIONING, feature_id: 'other-thing', name: 'Other thing', spec: { links: [] } },
    ANCHOR_POSITIONING,
  ])]);

  const matched = await searchBaseline({ id: 1, name: 'Anchor positioning' });
  assert.equal(matched.featureId, 'anchor-positioning');
  assert.equal(matched.matchedOn, 'exact name');
  assert.equal(matched.scope, 'group');
  assert.equal(mock.calls.length, 1);

  assert.equal(await searchBaseline({ id: 2, name: 'Nothing like any entry' }), null);
});

test('every ask gets a result of its own', async t => {
  serve(t, [webStatusGroupRoute('anchor-positioning', ANCHOR_POSITIONING)]);

  const first = await searchBaseline(FEATURE, GROUP);
  first.browserSupport.safari = 'changed';
  first.name = 'changed';

  const second = await searchBaseline(FEATURE, GROUP);
  assert.equal(second.browserSupport.safari, '27');
  assert.equal(second.name, 'Anchor positioning');
});

test('Baseline never throws: whatever goes wrong, the feature is just untracked', async t => {
  serve(t, []);
  const broken = { get id() { throw new Error('unexpected'); } };

  assert.equal(await searchBaseline(FEATURE, broken), null);
  assert.equal(await searchBaseline({ id: 5 }), null, 'a feature with no name');
  assert.equal(await searchBaseline(FEATURE, GROUP), null, 'webstatus.dev answering 404');
});

test('WPT for a mapped feature is its group\'s pass rate on each browser, from webstatus.dev, with the group\'s results page', async t => {
  serve(t, [webStatusGroupRoute('anchor-positioning', ANCHOR_POSITIONING)]);

  assert.deepEqual(await searchWpt(FEATURE, GROUP), {
    source: 'Web Platform Tests',
    type: 'test',
    scope: 'group',
    webFeatureId: 'anchor-positioning',
    url: 'https://wpt.fyi/results?q=feature:anchor-positioning',
    passRates: {
      stable: { chrome: 96.8, edge: 94.8, firefox: 84.3, safari: 93.6 },
      experimental: { chrome: 96.8, edge: 96.8, firefox: 85.1, safari: 94 },
    },
  });
});

test('Baseline and WPT for one feature are read from one request', async t => {
  const mock = serve(t, [webStatusGroupRoute('anchor-positioning', ANCHOR_POSITIONING)]);
  const [baseline, wpt] = await Promise.all([searchBaseline(FEATURE, GROUP), searchWpt(FEATURE, GROUP)]);

  assert.equal(baseline.featureId, 'anchor-positioning');
  assert.equal(wpt.webFeatureId, 'anchor-positioning');
  assert.equal(mock.calls.length, 1);
});

test('a group that has tests listed but no pass rates yet still links to its results', async t => {
  serve(t, [webStatusGroupRoute('anchor-positioning', { ...ANCHOR_POSITIONING, wpt: undefined })]);
  const wpt = await searchWpt(FEATURE, GROUP);
  assert.equal(wpt.url, 'https://wpt.fyi/results?q=feature:anchor-positioning');
  assert.equal(wpt.passRates, null);
});

test('the results link survives webstatus.dev being unreachable', async t => {
  serve(t, [webStatusGroupRoute('anchor-positioning', null, 403)]);
  const wpt = await searchWpt(FEATURE, GROUP);
  assert.equal(wpt.url, 'https://wpt.fyi/results?q=feature:anchor-positioning');
  assert.equal(wpt.passRates, null);
  assert.equal(wpt.webFeatureId, 'anchor-positioning', 'the group is the mapping\'s even when webstatus.dev did not answer');
});

test('a group the mapping lists no tests for has none, whatever the name suggests', async t => {
  serve(t, [webStatusGroupRoute('anchor-positioning', { ...ANCHOR_POSITIONING, wpt: undefined })]);
  assert.equal(await searchWpt(FEATURE, { ...GROUP, wptUrl: null }), null);
});

test('pass rates webstatus.dev has are shown even when the mapping did not list the group', async t => {
  serve(t, [webStatusGroupRoute('anchor-positioning', ANCHOR_POSITIONING)]);
  const wpt = await searchWpt(FEATURE, { ...GROUP, wptUrl: null });
  assert.equal(wpt.url, 'https://wpt.fyi/results?q=feature:anchor-positioning');
  assert.equal(wpt.passRates.stable.chrome, 96.8);
});

test('wpt.fyi is never searched: a feature outside the mapping has no WPT result, not a count of paths that match a word', async t => {
  const mock = serve(t, [webStatusSearchRoute([])]);

  const generic = [
    { id: 1, name: 'HTML sanitizer API', specUrl: 'https://html.spec.whatwg.org/multipage/index.html' },
    { id: 2, name: 'Deprecate the thing', specUrl: 'https://wicg.github.io/deprecate/' },
    { id: 3, name: 'Chrome 125 feature' },
  ];
  for (const feature of generic) assert.equal(await searchWpt(feature), null, feature.name);

  assert.deepEqual(mock.calls.filter(url => url.includes('wpt.fyi')), []);
});

test('a feature outside the mapping that webstatus.dev matches confidently gets that group\'s pass rates', async t => {
  serve(t, [webStatusSearchRoute([ANCHOR_POSITIONING])]);

  const wpt = await searchWpt({ id: 7, name: 'Anchor positioning' });
  assert.equal(wpt.webFeatureId, 'anchor-positioning');
  assert.equal(wpt.scope, 'group');
  assert.equal(wpt.url, 'https://wpt.fyi/results?q=feature:anchor-positioning');
  assert.equal(wpt.passRates.stable.safari, 93.6);
});

test('a name match without any test results gives no WPT result', async t => {
  serve(t, [webStatusSearchRoute([{ ...ANCHOR_POSITIONING, wpt: undefined }])]);
  assert.equal(await searchWpt({ id: 7, name: 'Anchor positioning' }), null);
});
