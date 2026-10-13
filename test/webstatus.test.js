import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeWebStatusFeature,
  lookupWebStatus,
  resetWebStatus,
  baselineLabel,
  pickConfidentMatch,
} from '../src/search/webstatus.js';
import { webFeatureStatsSnapshot, resetWebFeatureStats } from '../src/web-features-stats.js';
import { logger } from '../src/logger.js';
import { installFetchMock } from './_support/fetch-mock.js';
import { ANCHOR_POSITIONING, webStatusGroupRoute, webStatusSearchRoute } from './_support/web-features-mock.js';

function fresh(t, routes) {
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

const MAPPED = { id: 'anchor-positioning', scope: 'group', groupSize: 1 };

test('a webstatus.dev answer is reduced to a checked record, test pass rates as percentages', () => {
  assert.deepEqual(normalizeWebStatusFeature(ANCHOR_POSITIONING), {
    id: 'anchor-positioning',
    name: 'Anchor positioning',
    baseline: { status: 'limited', lowDate: null, highDate: null },
    browserSupport: { chrome: null, edge: null, firefox: null, safari: '27' },
    wpt: {
      stable: { chrome: 96.8, edge: 94.8, firefox: 84.3, safari: 93.6 },
      experimental: { chrome: 96.8, edge: 96.8, firefox: 85.1, safari: 94 },
    },
  });
});

test('the Baseline dates and browser versions are kept when they have the published form', () => {
  const record = normalizeWebStatusFeature({
    feature_id: 'popover',
    name: 'Popover',
    baseline: { status: 'widely', low_date: '2024-01-26', high_date: '2026-07-26' },
    browser_implementations: { chrome: { version: '114' }, edge: { version: '114' }, firefox: { version: '125' }, safari: { version: '17.0' } },
  });
  assert.deepEqual(record.baseline, { status: 'widely', lowDate: '2024-01-26', highDate: '2026-07-26' });
  assert.deepEqual(record.browserSupport, { chrome: '114', edge: '114', firefox: '125', safari: '17.0' });
  assert.equal(record.wpt, null, 'no test results at all is null, not an empty object');
});

test('anything that does not have the published form is dropped, not repaired', () => {
  const record = normalizeWebStatusFeature({
    feature_id: 'popover',
    name: `  Pop\n over ${'x'.repeat(300)}  `,
    baseline: { status: 'Widely!', low_date: '2024-1-26', high_date: 'yesterday' },
    browser_implementations: {
      chrome: { version: 114 },
      edge: { version: '<script>' },
      firefox: { version: '1'.repeat(17) },
      safari: { version: '' },
    },
    wpt: {
      stable: { chrome: { score: 1.2 }, edge: { score: -0.1 }, firefox: { score: '0.5' }, safari: { score: null }, chrome_android: { score: 0.5 } },
      experimental: 'nope',
    },
  });
  assert.equal(record.name.length, 200);
  assert.doesNotMatch(record.name, /\n/);
  assert.deepEqual(record.baseline, { status: null, lowDate: null, highDate: null });
  assert.deepEqual(record.browserSupport, { chrome: null, edge: null, firefox: null, safari: null });
  assert.equal(record.wpt, null);
});

test('a score of exactly 0 or 1 is a pass rate; the Android builds are not reported', () => {
  const record = normalizeWebStatusFeature({
    feature_id: 'x',
    wpt: { stable: { chrome: { score: 1 }, safari: { score: 0 }, chrome_android: { score: 0.5 }, firefox_android: { score: 0.5 } } },
  });
  assert.deepEqual(record.wpt, { stable: { chrome: 100, safari: 0 }, experimental: null });
  assert.equal(record.name, 'x', 'the id stands in for a missing name');
});

test('a record needs a feature id of the published form', () => {
  for (const raw of [null, undefined, 'x', [], {}, { feature_id: 5 }, { feature_id: '' }, { feature_id: 'Upper' }, { feature_id: '../x' }, { feature_id: 'a b' }]) {
    assert.equal(normalizeWebStatusFeature(raw), null, JSON.stringify(raw));
  }
});

test('a Baseline status has a label; a status the API did not give is "not yet assessed"', () => {
  assert.equal(baselineLabel('widely'), 'Baseline Widely Available');
  assert.equal(baselineLabel('newly'), 'Baseline Newly Available');
  assert.equal(baselineLabel('limited'), 'Limited Availability');
  assert.equal(baselineLabel(null), 'Not yet assessed by Baseline');
  assert.equal(baselineLabel('something-new'), 'Not yet assessed by Baseline');
  assert.equal(baselineLabel('constructor'), 'Not yet assessed by Baseline');
});

test('a mapped group is asked for by its id, once, however many features share it and however often', async t => {
  const mock = fresh(t, [webStatusGroupRoute('anchor-positioning', ANCHOR_POSITIONING)]);

  const answers = await Promise.all([
    lookupWebStatus({ name: 'A' }, MAPPED),
    lookupWebStatus({ name: 'B' }, MAPPED),
    lookupWebStatus({ name: 'C' }, MAPPED),
  ]);
  await lookupWebStatus({ name: 'D' }, MAPPED);

  assert.deepEqual(mock.calls, ['https://api.webstatus.dev/v1/features/anchor-positioning?wpt_metric_view=test_counts']);
  for (const answer of answers) {
    assert.equal(answer.matchedOn, 'web-features mapping');
    assert.equal(answer.record.id, 'anchor-positioning');
  }
  assert.deepEqual(webFeatureStatsSnapshot().webstatus, { requests: 1, ok: 1, absent: 0, failed: 0 });
});

test('the request carries no credentials', async t => {
  const mock = fresh(t, [webStatusGroupRoute('anchor-positioning', ANCHOR_POSITIONING)]);
  await lookupWebStatus({ name: 'A' }, MAPPED);

  const [request] = mock.requests;
  assert.equal(request.headers.Accept, 'application/json');
  assert.match(request.headers['User-Agent'], /chrome-status-ecosystem-tracker/);
  assert.deepEqual(Object.keys(request.headers).filter(name => /authorization|cookie|key|token/i.test(name)), []);
});

test('a group webstatus.dev does not know is counted as unknown and asked about again by the next feature', async t => {
  const mock = fresh(t, [webStatusGroupRoute('anchor-positioning', null, 404)]);

  assert.equal(await lookupWebStatus({ name: 'A' }, MAPPED), null);
  assert.equal(await lookupWebStatus({ name: 'B' }, MAPPED), null);

  assert.equal(mock.calls.length, 2);
  assert.deepEqual(webFeatureStatsSnapshot().webstatus, { requests: 2, ok: 0, absent: 2, failed: 0 });
});

test('a refusal, a broken answer or an answer about another group is a failure, and a later request can still succeed', async t => {
  const answers = [
    { status: 403, text: 'no' },
    { status: 200, text: '<html>not json</html>' },
    { status: 200, json: { ...ANCHOR_POSITIONING, feature_id: 'something-else' } },
    { status: 200, json: { name: 'no id' } },
    { status: 200, json: ANCHOR_POSITIONING },
  ];
  resetWebStatus();
  resetWebFeatureStats();
  let next = 0;
  const original = globalThis.fetch;
  globalThis.fetch = async () => {
    const answer = answers[next++];
    return new Response(answer.json !== undefined ? JSON.stringify(answer.json) : answer.text, { status: answer.status });
  };
  t.after(() => {
    globalThis.fetch = original;
    resetWebStatus();
    resetWebFeatureStats();
  });

  for (let i = 0; i < 4; i++) assert.equal(await lookupWebStatus({ name: 'A' }, MAPPED), null, `answer ${i}`);
  const good = await lookupWebStatus({ name: 'A' }, MAPPED);
  assert.equal(good.record.id, 'anchor-positioning');
  assert.deepEqual(webFeatureStatsSnapshot().webstatus, { requests: 5, ok: 1, absent: 0, failed: 4 });
  assert.equal(next, 5);
});

test('a group id is sent as one path segment', async t => {
  const mock = fresh(t, []);
  await lookupWebStatus({ name: 'A' }, { id: '../../etc/passwd?x=1#y' });
  assert.equal(mock.calls.length, 1);
  assert.equal(mock.calls[0], 'https://api.webstatus.dev/v1/features/..%2F..%2Fetc%2Fpasswd%3Fx%3D1%23y?wpt_metric_view=test_counts');
});

test('a feature that is not mapped is searched for by name, and a confident match is used', async t => {
  const mock = fresh(t, [webStatusSearchRoute([
    { ...ANCHOR_POSITIONING, feature_id: 'unrelated', name: 'Unrelated thing', spec: { links: [] } },
    ANCHOR_POSITIONING,
  ])]);

  const found = await lookupWebStatus({ name: 'Anchor positioning', specUrl: 'https://example.test/other' }, null);
  assert.equal(found.record.id, 'anchor-positioning');
  assert.equal(found.matchedOn, 'exact name');
  assert.deepEqual(mock.calls, ['https://api.webstatus.dev/v1/features?q=Anchor%20positioning']);
  assert.deepEqual(webFeatureStatsSnapshot().webstatus.requests, 0, 'the name search is not a group request');
});

test('the name search is shared by every ask for the same feature, and finds nothing for a feature that matches nothing', async t => {
  const mock = fresh(t, [webStatusSearchRoute([{ ...ANCHOR_POSITIONING, feature_id: 'unrelated', name: 'Unrelated thing', spec: { links: [] } }])]);

  const [a, b] = await Promise.all([
    lookupWebStatus({ name: 'Something else entirely' }, null),
    lookupWebStatus({ name: 'Something else entirely' }, null),
  ]);
  assert.equal(a, null);
  assert.equal(b, null);
  assert.equal(mock.calls.length, 1);
});

test('two features with one name but different specs are not given each other\'s match', async t => {
  const items = [
    { ...ANCHOR_POSITIONING, feature_id: 'first', name: 'Other', spec: { links: [{ link: 'https://spec.example/one' }] } },
    { ...ANCHOR_POSITIONING, feature_id: 'second', name: 'Another', spec: { links: [{ link: 'https://spec.example/two' }] } },
  ];
  fresh(t, [webStatusSearchRoute(items)]);

  const one = await lookupWebStatus({ name: 'Shared Feature Name', specUrl: 'https://spec.example/one#a' }, null);
  const two = await lookupWebStatus({ name: 'Shared Feature Name', specUrl: 'https://spec.example/two' }, null);
  assert.equal(one.record.id, 'first');
  assert.equal(one.matchedOn, 'spec URL');
  assert.equal(two.record.id, 'second');
});

test('a feature with no name and no group is not searched for', async t => {
  const mock = fresh(t, []);
  assert.equal(await lookupWebStatus({}, null), null);
  assert.equal(await lookupWebStatus(null, null), null);
  assert.equal(await lookupWebStatus({ name: '' }, null), null);
  assert.equal(mock.calls.length, 0);
});

test('a search that fails, or returns a match without a usable id, is no answer', async t => {
  fresh(t, [{ match: url => url.startsWith('https://api.webstatus.dev/v1/features?q='), status: 403, text: 'no' }]);
  assert.equal(await lookupWebStatus({ name: 'Anchor positioning' }, null), null);

  resetWebStatus();
  fresh(t, [webStatusSearchRoute([{ feature_id: 'Bad Id', name: 'Anchor positioning' }])]);
  assert.equal(await lookupWebStatus({ name: 'Anchor positioning' }, null), null);
});

test('a search answer may be a bare list or use "features"', async t => {
  fresh(t, [{ match: url => url.startsWith('https://api.webstatus.dev/v1/features?q='), json: [ANCHOR_POSITIONING] }]);
  assert.equal((await lookupWebStatus({ name: 'Anchor positioning' }, null)).record.id, 'anchor-positioning');

  resetWebStatus();
  fresh(t, [{ match: url => url.startsWith('https://api.webstatus.dev/v1/features?q='), json: { features: [ANCHOR_POSITIONING] } }]);
  assert.equal((await lookupWebStatus({ name: 'Anchor positioning' }, null)).record.id, 'anchor-positioning');
});

test('pickConfidentMatch is still exported from the module that now holds it', () => {
  assert.equal(pickConfidentMatch({ name: 'Anchor positioning' }, [ANCHOR_POSITIONING])._matchedOn, 'exact name');
  assert.equal(pickConfidentMatch({ name: 'Nothing like it' }, [ANCHOR_POSITIONING]), null);
});

test('each browser version is read from its own browser, and each Baseline date from its own field', () => {
  const record = normalizeWebStatusFeature({
    feature_id: 'popover',
    baseline: { status: 'newly', low_date: '2024-01-26', high_date: '2026-07-26' },
    browser_implementations: { chrome: { version: '114' }, edge: { version: '115' }, firefox: { version: '125' }, safari: { version: '17.0' } },
  });
  assert.deepEqual(record.browserSupport, { chrome: '114', edge: '115', firefox: '125', safari: '17.0' });
  assert.equal(record.baseline.lowDate, '2024-01-26');
  assert.equal(record.baseline.highDate, '2026-07-26');
});

test('results for only the experimental channel are kept, as are results for only the stable one', () => {
  const experimental = normalizeWebStatusFeature({ feature_id: 'x', wpt: { experimental: { chrome: { score: 0.5 } } } });
  assert.deepEqual(experimental.wpt, { stable: null, experimental: { chrome: 50 } });
  const stable = normalizeWebStatusFeature({ feature_id: 'x', wpt: { stable: { safari: { score: 0.25 } } } });
  assert.deepEqual(stable.wpt, { stable: { safari: 25 }, experimental: null });
  const neither = normalizeWebStatusFeature({ feature_id: 'x', wpt: { stable: {}, experimental: { chrome: {} } } });
  assert.equal(neither.wpt, null);
});

test('a name that is not text, a date or version that is not one string in the published form, and a status that is not a lower-case word are dropped', () => {
  const record = normalizeWebStatusFeature({
    feature_id: 'x',
    name: 12345,
    baseline: { status: 'x'.repeat(21), low_date: ['2024-01-26'], high_date: '2024-01-26T00:00:00Z' },
    browser_implementations: { chrome: { version: '.5' }, edge: { version: '1a' }, firefox: { version: ['125'] }, safari: { version: 'x2023-01-01' } },
  });
  assert.equal(record.name, 'x', 'a number is not a name');
  assert.deepEqual(record.baseline, { status: null, lowDate: null, highDate: null });
  assert.deepEqual(record.browserSupport, { chrome: null, edge: null, firefox: null, safari: null });

  for (const status of ['Widely', 'wide ly', 'widely1', '', ['widely']]) {
    assert.equal(normalizeWebStatusFeature({ feature_id: 'x', baseline: { status } }).baseline.status, null, JSON.stringify(status));
  }
  assert.equal(normalizeWebStatusFeature({ feature_id: 'x', baseline: { status: 'x'.repeat(20) } }).baseline.status, 'x'.repeat(20));
  assert.equal(normalizeWebStatusFeature({ feature_id: 'x', baseline: { low_date: '2024-01-26x' } }).baseline.lowDate, null);
  assert.equal(normalizeWebStatusFeature({ feature_id: 'x', baseline: { low_date: 'x2024-01-26' } }).baseline.lowDate, null);
  assert.equal(normalizeWebStatusFeature({ feature_id: 'x', browser_implementations: { chrome: { version: '1.2.3' } } }).browserSupport.chrome, '1.2.3');
});

// --- pickConfidentMatch: which search result, if any, is the feature ----------------------------------------

const item = (feature_id, name, specLinks = []) => ({ feature_id, name, spec: { links: specLinks.map(link => ({ link })) } });

test('a spec address matches whatever its trailing slash, capitals or query, and the fragment', () => {
  const match = (target, candidate) => pickConfidentMatch({ name: 'zzz', specUrl: target }, [item('a', 'Other', [candidate])]);

  assert.equal(match('https://drafts.csswg.org/css-anchor-position-1/', 'https://drafts.csswg.org/css-anchor-position-1')._matchedOn, 'spec URL');
  assert.equal(match('https://drafts.csswg.org/css-anchor-position-1', 'https://drafts.csswg.org/css-anchor-position-1/')._matchedOn, 'spec URL');
  assert.equal(match('https://Drafts.CSSWG.org/CSS-Anchor-Position-1', 'https://drafts.csswg.org/css-anchor-position-1')._matchedOn, 'spec URL');
  assert.equal(match('https://drafts.csswg.org/css-anchor-position-1?v=2', 'https://drafts.csswg.org/css-anchor-position-1?v=3')._matchedOn, 'spec URL');
  assert.equal(match('https://drafts.csswg.org/css-anchor-position-1#anchoring', 'http://drafts.csswg.org/css-anchor-position-1')._matchedOn, 'spec URL');
  assert.equal(match('https://drafts.csswg.org/css-anchor-position-1', 'https://drafts.csswg.org/css-anchor-position-2'), null);
  assert.equal(match('https://drafts.csswg.org/css-anchor-position-1', 'not a url'), null);
});

test('a feature with only a spec, or only a name, is matched on that', () => {
  assert.equal(pickConfidentMatch({ name: '', specUrl: 'https://spec.example/a' }, [item('x', 'Whatever', ['https://spec.example/a'])])._matchedOn, 'spec URL');
  assert.equal(pickConfidentMatch({ name: 'Popover API' }, [item('popover-api', 'Something else')])._matchedOn, 'exact name', 'the id is read as the name');
  assert.equal(pickConfidentMatch({ name: '' , specUrl: '' }, [item('', '')]), null, 'nothing to go on');
});

test('an empty name is not equal to an empty name', () => {
  // The feature has a spec, but not one this result lists, and no name; the result has no name either.
  assert.equal(pickConfidentMatch({ name: '', specUrl: 'https://spec.example/a' }, [item('', '', ['https://spec.example/b'])]), null);
});

test('a feature id equal to the name counts as an exact match', () => {
  assert.equal(pickConfidentMatch({ name: 'Anchor Positioning' }, [item('anchor-positioning', 'CSS anchoring')])._matchedOn, 'exact name');
});

test('containment needs eight characters and goes to the first result that has it', () => {
  const first = item('one', 'Anchor positioning extras');
  const second = item('two', 'Anchor positioning more');
  assert.equal(pickConfidentMatch({ name: 'Anchor positioning' }, [first, second]).feature_id, 'one');
  assert.equal(pickConfidentMatch({ name: 'Anchor positioning' }, [first, second])._matchedOn, 'name containment');
  assert.equal(pickConfidentMatch({ name: 'CSS zoom' }, [item('z', 'CSS zoom property')]), null, 'seven characters are not enough');
  assert.equal(pickConfidentMatch({ name: 'CSS zooms' }, [item('z', 'CSS zooms property')])._matchedOn, 'name containment', 'eight characters are enough');
});

test('containment is found from either side', () => {
  // The result is longer than the feature, and the feature is longer than the result.
  assert.equal(pickConfidentMatch({ name: 'anchor positioning' }, [item('a', 'CSS anchor positioning module')])._matchedOn, 'name containment');
  assert.equal(pickConfidentMatch({ name: 'CSS anchor positioning module' }, [item('a', 'anchor positioning')])._matchedOn, 'name containment');
});

// --- the name search ----------------------------------------------------------------------------------------

test('a search that webstatus.dev refuses, answers with nothing, or answers with something broken is no answer, and never throws', async t => {
  const search = response => [{ match: url => url.startsWith('https://api.webstatus.dev/v1/features?q='), ...response }];

  for (const [name, response] of [
    ['a refusal', { status: 500, text: 'down' }],
    ['a refusal that carries a matching answer', { status: 404, json: { data: [ANCHOR_POSITIONING] } }],
    ['no results', { json: { data: [] } }],
    ['no list at all', { json: { something: 'else' } }],
    ['text that is not JSON', { status: 200, text: '<html>oops</html>' }],
  ]) {
    fresh(t, search(response));
    assert.equal(await lookupWebStatus({ name: 'Anchor positioning' }, null), null, name);
    resetWebStatus();
  }
});

test('a search with nothing to read is untracked quietly: it is not reported as a query that went wrong', async t => {
  const debug = [];
  t.mock.method(logger, 'debug', message => debug.push(String(message)));
  const search = response => [{ match: url => url.startsWith('https://api.webstatus.dev/v1/features?q='), ...response }];

  for (const response of [{ json: { data: [] } }, { json: { something: 'else' } }, { json: { data: 'oops' } }]) {
    fresh(t, search(response));
    assert.equal(await lookupWebStatus({ name: 'Anchor positioning' }, null), null, JSON.stringify(response));
    resetWebStatus();
  }
  assert.deepEqual(debug.filter(line => /error/i.test(line)), []);
});

test('the first list in a search answer is the one read, wherever the answer keeps it', async t => {
  const search = json => [{ match: url => url.startsWith('https://api.webstatus.dev/v1/features?q='), json }];

  fresh(t, search({ data: 'not a list', features: [ANCHOR_POSITIONING] }));
  assert.equal((await lookupWebStatus({ name: 'Anchor positioning' }, null)).record.id, 'anchor-positioning');
  resetWebStatus();

  fresh(t, search({ data: [item('other-thing', 'Other thing')], features: [ANCHOR_POSITIONING] }));
  assert.equal(await lookupWebStatus({ name: 'Anchor positioning' }, null), null, 'the list under "data" comes first');
});

test('a match whose record is not usable is no answer', async t => {
  // The name matches, but the id is not a web-features id: the match is found and then refused.
  fresh(t, [webStatusSearchRoute([{ feature_id: 'Bad Id', name: 'Anchor positioning' }])]);
  assert.equal(await lookupWebStatus({ name: 'Anchor positioning' }, null), null);
});

test('two features with different names but one spec each get a search of their own', async t => {
  const mock = fresh(t, [{
    match: url => url.startsWith('https://api.webstatus.dev/v1/features?q='),
    json: { data: [item('anchor-positioning', 'Anchor positioning')] },
  }]);

  const spec = 'https://spec.example/shared';
  const one = await lookupWebStatus({ name: 'Anchor positioning', specUrl: spec }, null);
  const two = await lookupWebStatus({ name: 'Popover', specUrl: spec }, null);

  assert.equal(one.record.id, 'anchor-positioning');
  assert.equal(two, null, 'asked about Popover, not answered with the answer about anchor positioning');
  assert.equal(mock.calls.length, 2);
});

test('a reset forgets a lookup that is still under way, so the next one asks again', async t => {
  resetWebStatus();
  resetWebFeatureStats();
  const original = globalThis.fetch;
  const pending = [];
  globalThis.fetch = () => new Promise(resolve => pending.push(() => resolve(new Response(JSON.stringify(ANCHOR_POSITIONING), { status: 200 }))));
  t.after(() => {
    globalThis.fetch = original;
    resetWebStatus();
    resetWebFeatureStats();
  });
  const tick = () => new Promise(resolve => setImmediate(resolve));

  const first = lookupWebStatus({ name: 'A' }, MAPPED);
  await tick();
  assert.equal(pending.length, 1);

  resetWebStatus();
  const second = lookupWebStatus({ name: 'B' }, MAPPED);
  await tick();
  assert.equal(pending.length, 2, 'the lookup of the earlier run is not the answer to the later one');

  for (const answer of pending) answer();
  assert.equal((await first).record.id, 'anchor-positioning');
  assert.equal((await second).record.id, 'anchor-positioning');
});
