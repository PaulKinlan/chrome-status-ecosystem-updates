import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert/strict';
import { webFeatureFor, resetWebFeatures, chromeStatusKey, wptResultsUrl, WEB_FEATURE_ID } from '../src/search/web-features.js';
import {
  webFeatureStatsSnapshot,
  resetWebFeatureStats,
  describeWebFeatureStats,
  warnIfMappingsUnavailable,
} from '../src/web-features-stats.js';
import { installFetchMock } from './_support/fetch-mock.js';
import { mappingRoutes, SAMPLE_MAPPING, MAPPINGS_URL } from './_support/web-features-mock.js';

/** Starts a test with nothing downloaded and nothing counted, serving `files` as the mapping. */
function serve(t, files = SAMPLE_MAPPING) {
  resetWebFeatures();
  resetWebFeatureStats();
  const mock = installFetchMock(mappingRoutes(files));
  t.after(() => {
    mock.restore();
    resetWebFeatures();
    resetWebFeatureStats();
  });
  return mock;
}

const ANCHOR = { id: 5124767085953024 };

test('a ChromeStatus id finds its web-features group, with what the mapping files say about it', async t => {
  serve(t);

  assert.deepEqual(await webFeatureFor(ANCHOR), {
    id: 'anchor-positioning',
    scope: 'group',
    groupSize: 1,
    url: 'https://webstatus.dev/features/anchor-positioning',
    wptUrl: 'https://wpt.fyi/results?q=feature:anchor-positioning',
    positions: [
      { vendor: 'Mozilla', position: 'positive', concerns: [], url: 'https://github.com/mozilla/standards-positions/issues/794' },
      { vendor: 'WebKit', position: 'support', concerns: [], url: 'https://github.com/WebKit/standards-positions/issues/167' },
    ],
    usage: { percentageOfPageLoad: 0.0735, url: 'https://chromestatus.com/metrics/webfeature/timeline/popularity/4321' },
  });
});

test('the id may be a number or its text', async t => {
  serve(t);
  assert.equal((await webFeatureFor({ id: '5124767085953024' })).id, 'anchor-positioning');
  assert.equal((await webFeatureFor({ id: 5124767085953024 })).id, 'anchor-positioning');
});

test('features of one group are told how many share it, and the position and concerns are kept as the mapping words them', async t => {
  serve(t);

  for (const id of [5000000000000001, 5000000000000002, 5000000000000003]) {
    const group = await webFeatureFor({ id });
    assert.equal(group.id, 'webtransport');
    assert.equal(group.groupSize, 3);
    // The mapping publishes "no position yet" as an empty string; that is null here, not a made-up stance.
    assert.deepEqual(group.positions, [
      { vendor: 'Mozilla', position: null, concerns: ['security', 'API design'], url: 'https://github.com/mozilla/standards-positions/issues/1' },
    ]);
  }
});

test('a group with no tests, positions or usage figure says so with nulls and an empty list', async t => {
  serve(t);
  const group = await webFeatureFor({ id: 5000000000000009 });
  assert.equal(group.id, 'no-tests-here');
  assert.equal(group.wptUrl, null);
  assert.deepEqual(group.positions, []);
  assert.equal(group.usage, null);
});

test('a feature that is not in the mapping gets null, and is counted as unmapped once however often it is asked about', async t => {
  serve(t);

  assert.equal(await webFeatureFor({ id: 1 }), null);
  assert.equal(await webFeatureFor({ id: 1 }), null);
  await webFeatureFor(ANCHOR);
  await webFeatureFor(ANCHOR);
  await webFeatureFor({ id: 5000000000000001 });

  assert.deepEqual(webFeatureStatsSnapshot().features, { mapped: 2, unmapped: 1 });
});

test('a feature without a usable id is null and is not counted', async t => {
  serve(t);
  for (const feature of [{}, { id: null }, { id: 0 }, { id: -5 }, { id: 1.5 }, { id: 'abc' }, { id: 2 ** 53 }, null, undefined]) {
    assert.equal(await webFeatureFor(feature), null, JSON.stringify(feature));
  }
  assert.deepEqual(webFeatureStatsSnapshot().features, { mapped: 0, unmapped: 0 });
});

test('the four files are downloaded once however many features ask at the same time, and again after a reset', async t => {
  const mock = serve(t);

  await Promise.all(Array.from({ length: 20 }, (_, i) => webFeatureFor({ id: 5000000000000000 + i })));
  assert.deepEqual([...mock.calls].sort(), [
    `${MAPPINGS_URL}/chrome-status.json`,
    `${MAPPINGS_URL}/chrome-use-counters.json`,
    `${MAPPINGS_URL}/standards-positions.json`,
    `${MAPPINGS_URL}/wpt.json`,
  ]);

  await webFeatureFor(ANCHOR);
  assert.equal(mock.calls.length, 4, 'a later feature reuses the download');

  resetWebFeatures();
  await webFeatureFor(ANCHOR);
  assert.equal(mock.calls.length, 8, 'a reset downloads it again');
});

test('the files are asked for as JSON from a fixed host, with no credentials', async t => {
  const mock = serve(t);
  await webFeatureFor(ANCHOR);

  assert.equal(mock.requests.length, 4);
  for (const request of mock.requests) {
    assert.equal(request.method, 'GET');
    assert.equal(request.headers.Accept, 'application/json');
    assert.match(request.headers['User-Agent'], /chrome-status-ecosystem-tracker/);
    assert.deepEqual(Object.keys(request.headers).filter(name => /authorization|cookie|key|token/i.test(name)), []);
  }
});

test('when the join file cannot be downloaded nothing is mapped, and the files are not asked for again', async t => {
  const mock = serve(t, { ...SAMPLE_MAPPING, chromeStatus: undefined });

  assert.equal(await webFeatureFor(ANCHOR), null);
  assert.equal(await webFeatureFor({ id: 5000000000000001 }), null);
  assert.equal(mock.calls.length, 4);

  const stats = webFeatureStatsSnapshot();
  assert.equal(stats.mappings.available, false);
  assert.deepEqual(stats.features, { mapped: 0, unmapped: 0 });
  assert.match(describeWebFeatureStats(stats)[0], /could not be loaded/);
});

test('the join file counts as unusable when it is not JSON, has no ids, or is larger than the limit', async t => {
  const html = '<html>Service Unavailable</html>';
  // About 18 MB, past the 16 MB limit. It names a real feature first: without the limit it would be accepted.
  const tooBig = `{"anchor-positioning":[{"id":5124767085953024}],"padding":[${'1,'.repeat(9_000_000)}1]}`;

  const cases = [
    ['not JSON', () => installFetchMock([{ match: u => u.endsWith('/chrome-status.json'), text: html }], { onUnmatched: 'empty' })],
    ['an empty object', () => installFetchMock(mappingRoutes({ ...SAMPLE_MAPPING, chromeStatus: {} }))],
    ['an array', () => installFetchMock(mappingRoutes({ ...SAMPLE_MAPPING, chromeStatus: [] }))],
    ['ids that are not ChromeStatus ids', () => installFetchMock(mappingRoutes({ ...SAMPLE_MAPPING, chromeStatus: { a: [{ id: 'x' }, { id: -1 }, {}] } }))],
    ['over the size limit', () => installFetchMock([{ match: u => u.endsWith('/chrome-status.json'), text: tooBig }], { onUnmatched: 'empty' })],
  ];

  for (const [name, install] of cases) {
    resetWebFeatures();
    resetWebFeatureStats();
    const mock = install();
    try {
      assert.equal(await webFeatureFor(ANCHOR), null, name);
      assert.equal(webFeatureStatsSnapshot().mappings.available, false, name);
    } finally {
      mock.restore();
    }
  }
  resetWebFeatures();
  resetWebFeatureStats();
});

test('an optional file that is missing, broken or too large only removes its own kind of data', async t => {
  const mock = serve(t, { ...SAMPLE_MAPPING, positions: undefined, usage: ['not', 'an', 'object'] });
  const group = await webFeatureFor(ANCHOR);

  assert.equal(group.id, 'anchor-positioning');
  assert.equal(group.wptUrl, 'https://wpt.fyi/results?q=feature:anchor-positioning');
  assert.deepEqual(group.positions, []);
  assert.equal(group.usage, null);
  assert.deepEqual(webFeatureStatsSnapshot().mappings, {
    available: true,
    chromeStatusIds: 5,
    groups: 3,
    missing: ['standards-positions.json', 'chrome-use-counters.json'],
  });
  assert.equal(mock.calls.length, 4);
});

test('an optional file over its 4 MB limit counts as missing, whichever file it is', async t => {
  // About 5 MB, past the 4 MB limit. Each lists a real group first: without the limit it would be accepted.
  const padding = `"padding":[${'1,'.repeat(2_600_000)}1]`;
  const mozilla = 'https://github.com/mozilla/standards-positions/issues/794';
  const cases = [
    ['wpt.json', `{"anchor-positioning":{},${padding}}`, group => group.wptUrl === null],
    ['standards-positions.json', `{"anchor-positioning":[{"vendor":"mozilla","url":"${mozilla}","position":"positive"}],${padding}}`, group => group.positions.length === 0],
    ['chrome-use-counters.json', `{"anchor-positioning":{"percentageOfPageLoad":1},${padding}}`, group => group.usage === null],
  ];

  for (const [file, tooBig, isEmpty] of cases) {
    resetWebFeatures();
    resetWebFeatureStats();
    const mock = installFetchMock([
      { match: u => u.endsWith(`/${file}`), text: tooBig },
      ...mappingRoutes({ ...SAMPLE_MAPPING, wpt: undefined, positions: undefined, usage: undefined }).filter(route => !route.match(`${MAPPINGS_URL}/${file}`)),
    ]);
    try {
      const group = await webFeatureFor(ANCHOR);
      assert.ok(isEmpty(group), `${file}: what it held is not used`);
      assert.ok(webFeatureStatsSnapshot().mappings.missing.includes(file), `${file} is reported as not loaded`);
    } finally {
      mock.restore();
    }
  }
  resetWebFeatures();
  resetWebFeatureStats();
});

test('only well-formed group ids and ChromeStatus ids are used; the first group to claim an id keeps it', async t => {
  // __proto__ arrives as an ordinary key when parsed from text, which is how the file really comes.
  const text = `{
    "__proto__": [{"id": 101}],
    "Upper-Case": [{"id": 102}],
    "has space": [{"id": 103}],
    "${'x'.repeat(101)}": [{"id": 104}],
    "not-a-list": {"id": 105},
    "ok-one": [{"id": 106}, {"id": "107"}, {"id": 0}, {"id": -3}, {"id": 1.5}, {"id": "12e3"}, {"id": 9007199254740993}, {"id": null}, {"id": true}, {}, null, 7, "x"],
    "ok-two": [{"id": 106}, {"id": 108}],
    "3d-transforms": [{"id": 109}]
  }`;
  resetWebFeatures();
  resetWebFeatureStats();
  const mock = installFetchMock([
    { match: u => u.endsWith('/chrome-status.json'), text },
    { match: () => true, status: 404, text: 'no' },
  ]);
  t.after(() => { mock.restore(); resetWebFeatures(); resetWebFeatureStats(); });

  const found = async id => (await webFeatureFor({ id }))?.id ?? null;
  assert.equal(await found(106), 'ok-one', 'the first claim stays');
  assert.equal(await found('107'), 'ok-one', 'an id written as text is accepted');
  assert.equal(await found(108), 'ok-two');
  assert.equal(await found(109), '3d-transforms', 'a group id may start with a digit');
  for (const id of [101, 102, 103, 104, 105]) assert.equal(await found(id), null, `group of id ${id} is not valid`);
  assert.equal(({}).polluted, undefined);
  assert.equal(Object.getPrototypeOf({}), Object.prototype);

  const { mappings } = webFeatureStatsSnapshot();
  assert.equal(mappings.chromeStatusIds, 4, 'ids 106, 107, 108 and 109');
  assert.equal(mappings.groups, 3);
});

test('a position counts only from a vendor repository, in the vendor\'s own name, as plain words', async t => {
  const mozilla = 'https://github.com/mozilla/standards-positions/issues/5';
  const webkit = 'https://github.com/WebKit/standards-positions/issues/6';
  serve(t, {
    ...SAMPLE_MAPPING,
    chromeStatus: { 'g-one': [{ id: 11 }], 'g-two': [{ id: 12 }], 'g-three': [{ id: 13 }] },
    positions: {
      'g-one': [
        { vendor: 'mozilla', url: mozilla, position: 'Positive', concerns: ['privacy', '<script>', 'x'.repeat(41), 7, 'use  cases', 'API design'] },
        { vendor: 'mozilla', url: 'https://github.com.evil.example/mozilla/standards-positions/issues/5', position: 'positive', concerns: [] },
        { vendor: 'mozilla', url: 'https://github.com/evil/standards-positions/issues/5', position: 'positive', concerns: [] },
        { vendor: 'mozilla', url: 'http://github.com/mozilla/standards-positions/issues/5', position: 'positive', concerns: [] },
        { vendor: 'mozilla', url: 'https://github.com/mozilla/standards-positions/issues/five', position: 'positive', concerns: [] },
        { vendor: 'mozilla', url: webkit, position: 'positive', concerns: [] },
        { vendor: 'google', url: mozilla, position: 'positive', concerns: [] },
        { vendor: 'apple', url: webkit, position: '<img src=x>', concerns: 'not a list' },
        null,
      ],
      'g-two': Array.from({ length: 6 }, (_, i) => ({ vendor: i % 2 ? 'apple' : 'mozilla', url: i % 2 ? webkit : mozilla, position: 'neutral' })),
      'g-three': { vendor: 'mozilla', url: mozilla },
    },
  });

  assert.deepEqual((await webFeatureFor({ id: 11 })).positions, [
    { vendor: 'Mozilla', position: 'positive', concerns: ['privacy', 'use cases', 'API design'], url: mozilla },
    { vendor: 'WebKit', position: null, concerns: [], url: webkit },
  ]);
  assert.equal((await webFeatureFor({ id: 12 })).positions.length, 4, 'at most four per group');
  assert.deepEqual((await webFeatureFor({ id: 13 })).positions, []);
});

test('at most eight concerns are kept for a position', async t => {
  const mozilla = 'https://github.com/mozilla/standards-positions/issues/5';
  serve(t, {
    ...SAMPLE_MAPPING,
    chromeStatus: { 'g-one': [{ id: 11 }] },
    positions: { 'g-one': [{ vendor: 'mozilla', url: mozilla, position: 'negative', concerns: Array.from({ length: 12 }, (_, i) => `concern ${i}`) }] },
  });
  const [position] = (await webFeatureFor({ id: 11 })).positions;
  assert.deepEqual(position.concerns, Array.from({ length: 8 }, (_, i) => `concern ${i}`));
});

test('a usage figure must be a percentage; its link is kept only in the form ChromeStatus publishes it', async t => {
  serve(t, {
    ...SAMPLE_MAPPING,
    chromeStatus: Object.fromEntries(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'].map((g, i) => [`g-${g}`, [{ id: 20 + i }]])),
    usage: {
      'g-a': { percentageOfPageLoad: 0.123456789, url: 'https://chromestatus.com/metrics/css/timeline/popularity/77' },
      'g-b': { percentageOfPageLoad: 0, url: 'https://chromestatus.com/metrics/webfeature/timeline/popularity/1' },
      'g-c': { percentageOfPageLoad: 100, url: 'https://evil.example/metrics/webfeature/timeline/popularity/1' },
      'g-d': { percentageOfPageLoad: 100.5, url: 'https://chromestatus.com/metrics/webfeature/timeline/popularity/1' },
      'g-e': { percentageOfPageLoad: -0.1, url: 'https://chromestatus.com/metrics/webfeature/timeline/popularity/1' },
      'g-f': { percentageOfPageLoad: '0.5', url: 'https://chromestatus.com/metrics/webfeature/timeline/popularity/1' },
      'g-g': { url: 'https://chromestatus.com/metrics/webfeature/timeline/popularity/1' },
      'g-h': [0.5],
      'g-i': null,
      'g-j': { percentageOfPageLoad: 1, url: ['https://chromestatus.com/metrics/webfeature/timeline/popularity/3'] },
      'g-k': { percentageOfPageLoad: 1, url: 'http://chromestatus.com/metrics/webfeature/timeline/popularity/3' },
      'g-l': { percentageOfPageLoad: 1, url: 'https://chromestatus.com/metrics/webfeature/timeline/popularity/3?x=1' },
      'g-m': { percentageOfPageLoad: 1, url: 'https://chromestatus.com/metrics/webfeature/timeline/popularity/12345678901' },
    },
  });

  const usage = async id => (await webFeatureFor({ id })).usage;
  assert.deepEqual(await usage(20), { percentageOfPageLoad: 0.123457, url: 'https://chromestatus.com/metrics/css/timeline/popularity/77' });
  assert.deepEqual(await usage(21), { percentageOfPageLoad: 0, url: 'https://chromestatus.com/metrics/webfeature/timeline/popularity/1' });
  assert.deepEqual(await usage(22), { percentageOfPageLoad: 100, url: null }, 'a link to another host is dropped, the figure is kept');
  for (const id of [23, 24, 25, 26, 27, 28]) assert.equal(await usage(id), null, `usage of id ${id}`);
  for (const id of [29, 30, 31, 32]) {
    assert.deepEqual(await usage(id), { percentageOfPageLoad: 1, url: null }, `the link of id ${id} is not in the published form: the figure stays, the link goes`);
  }
});

test('what a lookup returns is the caller\'s own: changing it leaves the next feature of the group alone', async t => {
  serve(t);
  const first = await webFeatureFor(ANCHOR);
  first.positions[0].vendor = 'Changed';
  first.positions[0].concerns.push('x');
  first.positions.pop();
  first.usage.percentageOfPageLoad = 99;

  const second = await webFeatureFor(ANCHOR);
  assert.equal(second.positions.length, 2);
  assert.equal(second.positions[0].vendor, 'Mozilla');
  assert.deepEqual(second.positions[0].concerns, []);
  assert.equal(second.usage.percentageOfPageLoad, 0.0735);
});

test('only groups the wpt file lists have a results page', async t => {
  serve(t, { ...SAMPLE_MAPPING, wpt: { 'webtransport': { url: 'https://wpt.fyi/results?q=feature:webtransport' }, 'Bad Id': {}, 'anchor-positioning': 'not an object' } });
  assert.equal((await webFeatureFor({ id: 5000000000000001 })).wptUrl, 'https://wpt.fyi/results?q=feature:webtransport');
  assert.equal((await webFeatureFor(ANCHOR)).wptUrl, null);
});

test('chromeStatusKey accepts positive whole numbers, as numbers or text, and nothing else', () => {
  assert.equal(chromeStatusKey(5124767085953024), '5124767085953024');
  assert.equal(chromeStatusKey('5124767085953024'), '5124767085953024');
  assert.equal(chromeStatusKey(1), '1');
  assert.equal(chromeStatusKey('1'.repeat(20)), '1'.repeat(20));
  for (const bad of [0, -1, 1.5, NaN, Infinity, 2 ** 53, '0', '01', '', ' 5', '5 ', '1e3', '+5', '-5', '5a', '0x10', '5.0', '\u0661\u0662', '1'.repeat(21), null, undefined, true, {}, [5]]) {
    assert.equal(chromeStatusKey(bad), null, String(bad));
  }
});

test('a web-features id is lower-case words and digits joined by hyphens, at most 100 characters', () => {
  for (const good of ['a', 'anchor-positioning', '3d-transforms', 'x'.repeat(100)]) assert.match(good, WEB_FEATURE_ID);
  for (const bad of ['', 'Anchor', '-x', 'x_y', 'x y', 'x/y', 'x.y', 'x'.repeat(101), '../etc']) assert.doesNotMatch(bad, WEB_FEATURE_ID);
  assert.equal(wptResultsUrl('anchor-positioning'), 'https://wpt.fyi/results?q=feature:anchor-positioning');
});

test('the log lines say how many features were mapped, what was not loaded and how webstatus.dev answered', async t => {
  serve(t, { ...SAMPLE_MAPPING, usage: undefined });
  await webFeatureFor(ANCHOR);
  await webFeatureFor({ id: 99 });

  const stats = webFeatureStatsSnapshot();
  assert.deepEqual(describeWebFeatureStats(stats), ['1 of 2 feature(s) belong to a web-features group; not loaded: chrome-use-counters.json']);
  assert.equal(warnIfMappingsUnavailable(stats), null);
  assert.deepEqual(describeWebFeatureStats({ ...stats, webstatus: { requests: 10, ok: 7, absent: 1, failed: 2 } }).slice(1), [
    'webstatus.dev answered 7 of 10 request(s), 1 group(s) unknown to it, 2 failed',
  ]);
  assert.deepEqual(describeWebFeatureStats({ ...stats, webstatus: { requests: 3, ok: 3, absent: 0, failed: 0 } }).slice(1), [
    'webstatus.dev answered 3 of 3 request(s)',
  ]);
});

test('a group none of whose entries has a usable id is not counted, and is not mapped', async t => {
  serve(t, {
    ...SAMPLE_MAPPING,
    chromeStatus: { 'good-group': [{ id: 11 }], 'empty-group': [{ id: 'x' }, { id: -1 }], 'also-empty': [] },
  });
  assert.equal((await webFeatureFor({ id: 11 })).id, 'good-group');
  assert.equal((await webFeatureFor({ id: 11 })).groupSize, 1);
  assert.deepEqual(webFeatureStatsSnapshot().mappings, { available: true, chromeStatusIds: 1, groups: 1, missing: [] });
});

test('positions and concerns are plain words: padding is trimmed, anything with punctuation or a leading hyphen is dropped', async t => {
  const mozilla = 'https://github.com/mozilla/standards-positions/issues/5';
  serve(t, {
    ...SAMPLE_MAPPING,
    chromeStatus: { 'g-one': [{ id: 11 }], 'g-two': [{ id: 12 }], 'g-three': [{ id: 13 }] },
    positions: {
      'g-one': [{
        vendor: 'mozilla', url: mozilla, position: '  Positive  ',
        concerns: ['-leading hyphen', '', '   ', 'dotted.word', '(parens)', 'under_score', 'a/b', 'caf\u00e9', '<b>x</b>', 'back`tick', 'fine words', ' padded '],
      }],
      'g-two': [{ vendor: 'mozilla', url: mozilla, position: '-negative', concerns: [] }],
      'g-three': [{ vendor: 'mozilla', url: mozilla, position: 'neutral!', concerns: ['x'.repeat(40), 'x'.repeat(41)] }],
    },
  });

  const [first] = (await webFeatureFor({ id: 11 })).positions;
  assert.equal(first.position, 'positive');
  assert.deepEqual(first.concerns, ['fine words', 'padded']);
  assert.equal((await webFeatureFor({ id: 12 })).positions[0].position, null, 'a leading hyphen is not a word');
  const [third] = (await webFeatureFor({ id: 13 })).positions;
  assert.equal(third.position, null, 'punctuation is not a word');
  assert.deepEqual(third.concerns, ['x'.repeat(40)], '40 characters are allowed, 41 are not');
});

test('the four files are downloaded at the same time, not one after another', async t => {
  serve(t);
  const mocked = globalThis.fetch;
  let running = 0;
  let peak = 0;
  globalThis.fetch = async (...args) => {
    running += 1;
    peak = Math.max(peak, running);
    await new Promise(resolve => setTimeout(resolve, 15));
    try {
      return await mocked(...args);
    } finally {
      running -= 1;
    }
  };

  await webFeatureFor(ANCHOR);
  assert.equal(peak, 4);
});
