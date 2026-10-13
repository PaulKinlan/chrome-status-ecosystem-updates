import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { config } from '../src/config.js';
import { describeWebGroup } from '../src/reporters/viewmodel.js';
import { generateWeeklyMarkdown, writeMarkdownReports } from '../src/reporters/markdown.js';
import { renderCard } from '../src/reporters/html/templates/card.js';

/**
 * Baseline, the Web Platform Tests pass rates, the vendors' positions and the
 * usage figure all describe a web-features GROUP, which can be broader than the
 * one ChromeStatus feature printed above them. Every reporter has to say so, or
 * a reader takes a group's figure for the feature's own.
 */

const GROUP = 'anchor-positioning';

function webFeature(overrides = {}) {
  return {
    id: GROUP,
    scope: 'group',
    groupSize: 3,
    url: `https://webstatus.dev/features/${GROUP}`,
    wptUrl: `https://wpt.fyi/results?q=feature:${GROUP}`,
    positions: [
      { vendor: 'Mozilla', position: 'positive', concerns: ['API design', 'use cases'], url: 'https://github.com/mozilla/standards-positions/issues/1' },
      { vendor: 'WebKit', position: null, concerns: [], url: 'https://github.com/WebKit/standards-positions/issues/2' },
    ],
    usage: { percentageOfPageLoad: 1.5, url: 'https://chromestatus.com/metrics/webfeature/timeline/popularity/3' },
    ...overrides,
  };
}

function item(ecosystem = {}, featureOverrides = {}) {
  return {
    feature: {
      id: 4242,
      slug: '4242-anchor',
      name: 'Anchor positioning',
      summary: 'Position things next to other things.',
      milestone: 125,
      category: 'Enabled by default',
      statusType: 'enabled',
      chromeStatusUrl: 'https://chromestatus.com/feature/4242',
      chromeStatusLiteUrl: 'https://chromestatuslite.com/feature/4242',
      browsers: { chrome: { status: 'Enabled' }, firefox: { view: 'No signal' }, safari: { view: 'No signal' } },
      ...featureOverrides,
    },
    ecosystem: { metrics: {}, ...ecosystem },
    analysis: { momentumScore: 10, momentumLevel: 'Quiet', consensus: 'Chromium-Led', sentiment: 'Neutral', executiveSummary: 'x', takeaways: [] },
    delta: {},
  };
}

const BASELINE = { featureId: GROUP, name: 'Anchor positioning', statusLabel: 'Newly available', status: 'newly', url: `https://webstatus.dev/features/${GROUP}`, browserSupport: { chrome: '125', firefox: '—', safari: '26' }, scope: 'group' };
const WPT = {
  source: 'Web Platform Tests', type: 'test', scope: 'group', webFeatureId: GROUP, url: `https://wpt.fyi/results?q=feature:${GROUP}`,
  passRates: { stable: { chrome: 96.84, edge: 94.8, firefox: 90, safari: 100 }, experimental: { chrome: 97.1 } },
};

function report(...features) {
  return { weekString: '2026-W41', date: '2026-10-07', milestones: [125], telemetry: {}, features };
}

/** The lines of a Markdown document that mention `text`. */
const linesWith = (md, text) => md.split('\n').filter(line => line.includes(text));

test('a feature in a group is described by that group, a feature in none by nothing', () => {
  assert.strictEqual(describeWebGroup({}), null);
  assert.strictEqual(describeWebGroup({ baseline: {}, wpt: {}, webFeature: {} }), null);
  assert.strictEqual(describeWebGroup({ webFeature: { id: '' }, baseline: { featureId: null }, wpt: { webFeatureId: 0 } }), null);
});

test('the group id comes from the mapping first, then from Baseline, then from the tests', () => {
  assert.strictEqual(describeWebGroup({ webFeature: { id: 'a' }, baseline: { featureId: 'b' }, wpt: { webFeatureId: 'c' } }).id, 'a');
  assert.strictEqual(describeWebGroup({ baseline: { featureId: 'b' }, wpt: { webFeatureId: 'c' } }).id, 'b');
  assert.strictEqual(describeWebGroup({ wpt: { webFeatureId: 'c' } }).id, 'c');
});

test('a group links to its page on webstatus.dev, with the id as one path segment', () => {
  assert.strictEqual(describeWebGroup({ webFeature: { id: GROUP } }).url, `https://webstatus.dev/features/${GROUP}`);
  assert.strictEqual(describeWebGroup({ webFeature: { id: 'a b/c?d#e' } }).url, 'https://webstatus.dev/features/a%20b%2Fc%3Fd%23e');
});

test('a group is shared with the other features it has, and only when that is known', () => {
  const sharedWith = size => describeWebGroup({ webFeature: { id: GROUP, groupSize: size } }).sharedWith;
  assert.strictEqual(sharedWith(3), 2);
  assert.strictEqual(sharedWith(2), 1);
  assert.strictEqual(sharedWith(67), 66);
  for (const size of [1, 0, -4, 2.5, NaN, Infinity, '3', null, undefined, {}]) {
    assert.strictEqual(sharedWith(size), 0, `groupSize ${String(size)}`);
  }
  // A group found by Baseline's name search has no size.
  assert.strictEqual(describeWebGroup({ baseline: { featureId: GROUP } }).sharedWith, 0);
});

test('the Baseline line of the weekly report says it is the group\'s, and how many features share it', () => {
  const md = generateWeeklyMarkdown(report(item({ baseline: BASELINE, webFeature: webFeature() })));
  const [line, ...others] = linesWith(md, '**Baseline Interoperability:**');

  assert.deepStrictEqual(others, []);
  assert.ok(line.includes(`group-level data: web-features [\`${GROUP}\`](https://webstatus.dev/features/${GROUP}), shared with 2 other ChromeStatus features`), line);
  assert.ok(line.includes('[Newly available](https://webstatus.dev/features/anchor-positioning)'), 'the Baseline status itself is unchanged');
});

test('a group of two says "1 other feature", a group of one says nothing about sharing', () => {
  const baselineLine = size => linesWith(generateWeeklyMarkdown(report(item({ baseline: BASELINE, webFeature: webFeature({ groupSize: size }) }))), '**Baseline Interoperability:**')[0];

  assert.ok(baselineLine(2).includes('shared with 1 other ChromeStatus feature*'), baselineLine(2));
  assert.ok(!baselineLine(2).includes('other ChromeStatus features'), 'singular');
  assert.ok(baselineLine(1).includes('group-level data'), 'still labelled as the group\'s');
  assert.ok(!baselineLine(1).includes('shared with'), baselineLine(1));
});

test('a Baseline match found by name is labelled as the group\'s even though there is no mapping', () => {
  const md = generateWeeklyMarkdown(report(item({ baseline: BASELINE })));
  const line = linesWith(md, '**Baseline Interoperability:**')[0];

  assert.ok(line.includes(`group-level data: web-features [\`${GROUP}\`]`), line);
  assert.ok(!line.includes('shared with'), 'the size of the group is not known');
});

test('a feature with no group has no group note and no group sections', () => {
  const md = generateWeeklyMarkdown(report(item({})));

  assert.ok(!md.includes('group-level'), 'nothing is the group\'s');
  assert.ok(!md.includes('Web-features Group Context'));
  assert.ok(!md.includes('Web Platform Tests (WPT)'));
});

test('the weekly report gives the share of tests that pass in the group, by channel and browser, in a fixed order', () => {
  const md = generateWeeklyMarkdown(report(item({ wpt: WPT, webFeature: webFeature() })));
  const [line, ...others] = linesWith(md, 'Share of tests passing');

  assert.deepStrictEqual(others, []);
  assert.strictEqual(
    line,
    `- Share of tests passing in the web-features group \`${GROUP}\` on [wpt.fyi](https://wpt.fyi/results?q=feature:${GROUP}) (via webstatus.dev) — stable: Chrome 96.8% · Edge 94.8% · Firefox 90% · Safari 100%; experimental: Chrome 97.1%`,
  );
  assert.ok(md.includes('#### 🧪 Web Platform Tests (WPT)'));
});

test('a channel without rates is left out, and a group without any says that webstatus.dev has none', () => {
  const only = passRates => linesWith(generateWeeklyMarkdown(report(item({ wpt: { ...WPT, passRates } }))), 'wpt.fyi')[0];

  assert.ok(only({ stable: { chrome: 50 }, experimental: null }).endsWith('— stable: Chrome 50%'), only({ stable: { chrome: 50 }, experimental: null }));
  assert.ok(only({ stable: null, experimental: { safari: 12.25 } }).endsWith('— experimental: Safari 12.3%'), only({ stable: null, experimental: { safari: 12.25 } }));
  // Anything that is not a finite number is not a rate.
  assert.ok(only({ stable: { chrome: '99', edge: NaN, firefox: Infinity, safari: null }, experimental: {} }).includes('has no pass rates'));

  for (const passRates of [null, undefined, {}, { stable: null, experimental: null }]) {
    const line = only(passRates);
    assert.ok(line.includes(`Results of the web-features group \`${GROUP}\``), line);
    assert.ok(line.includes('(webstatus.dev has no pass rates for it)'), line);
    assert.ok(!line.includes('%'), line);
  }
});

test('a pass rate of 0 is printed, because 0 is a result', () => {
  const line = linesWith(generateWeeklyMarkdown(report(item({ wpt: { ...WPT, passRates: { stable: { chrome: 0 }, experimental: null } } }))), 'wpt.fyi')[0];
  assert.ok(line.endsWith('— stable: Chrome 0%'), line);
});

test('the old test-path count is gone from the report', () => {
  const md = generateWeeklyMarkdown(report(item({ wpt: { ...WPT, testCount: 114452, queryUsed: 'css/css-anchor-position' }, webFeature: webFeature() })));

  assert.ok(!md.includes('114452'), 'a count of paths that merely contain a word says nothing about the feature');
  assert.ok(!md.includes('css/css-anchor-position'));
  assert.ok(!md.includes('test path(s)'));
});

test('the context section gives the usage of the group and the vendors\' positions, as the group\'s', () => {
  const md = generateWeeklyMarkdown(report(item({ baseline: BASELINE, webFeature: webFeature() })));
  const start = md.indexOf('#### 🌐 Web-features Group Context');

  assert.ok(start > 0, 'the section is printed');
  const section = md.slice(start, md.indexOf('\n---', start));
  assert.ok(section.includes(`*group-level data: web-features [\`${GROUP}\`](https://webstatus.dev/features/${GROUP}), shared with 2 other ChromeStatus features*`), section);
  assert.ok(section.includes('- **Chrome usage:** 1.5% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/3))'), section);
  assert.ok(section.includes('- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/1)) · concerns: `API design`, `use cases`'), section);
  assert.ok(section.split('\n').includes('- **WebKit:** no position recorded ([standards position](https://github.com/WebKit/standards-positions/issues/2))'), 'no concerns, so nothing after the link');
});

test('usage is printed in as few digits as it needs', () => {
  const usageLine = percentageOfPageLoad => linesWith(
    generateWeeklyMarkdown(report(item({ webFeature: webFeature({ positions: [], usage: { percentageOfPageLoad, url: null } }) }))),
    'Chrome usage',
  )[0];

  assert.strictEqual(usageLine(0.85), '- **Chrome usage:** 0.85% of page loads');
  assert.strictEqual(usageLine(0.123456), '- **Chrome usage:** 0.12% of page loads');
  assert.strictEqual(usageLine(1.5), '- **Chrome usage:** 1.5% of page loads');
  assert.strictEqual(usageLine(9.96), '- **Chrome usage:** 10% of page loads');
  assert.strictEqual(usageLine(12.4), '- **Chrome usage:** 12% of page loads');
  assert.strictEqual(usageLine(100), '- **Chrome usage:** 100% of page loads');
  assert.strictEqual(usageLine(0), '- **Chrome usage:** 0% of page loads');
});

test('a usage figure that is not a plain share is not printed', () => {
  for (const percentageOfPageLoad of [-1, NaN, Infinity, '1.5', null, undefined]) {
    const md = generateWeeklyMarkdown(report(item({ webFeature: webFeature({ positions: [], usage: { percentageOfPageLoad, url: null } }) })));
    assert.ok(!md.includes('Chrome usage'), String(percentageOfPageLoad));
    assert.ok(!md.includes('Web-features Group Context'), 'nothing to say, so no section');
  }
});

test('a group with nothing but a Baseline match has no context section', () => {
  const md = generateWeeklyMarkdown(report(item({ baseline: BASELINE, webFeature: webFeature({ positions: [], usage: null }) })));
  assert.ok(!md.includes('Web-features Group Context'));
  assert.ok(md.includes('**Baseline Interoperability:**'));
});

test('a record without an id, or with lists that are not lists, does not stop the report', () => {
  const broken = [
    { groupSize: 4, positions: [], usage: null },
    { id: GROUP, positions: 'oops', usage: { percentageOfPageLoad: 2 } },
    { id: GROUP, positions: [{ vendor: 'Mozilla', position: 'positive', concerns: 'all of them', url: 'https://github.com/mozilla/standards-positions/issues/1' }] },
  ];
  for (const webFeatureRecord of broken) {
    const md = generateWeeklyMarkdown(report(item({ baseline: BASELINE, webFeature: webFeatureRecord })));
    assert.ok(md.includes('**Baseline Interoperability:**'), JSON.stringify(webFeatureRecord));
    assert.ok(!md.includes('concerns: `a`'), 'a string is not walked one letter at a time');
    assert.ok(!md.includes('- **undefined:**'), 'a position needs a vendor to be printed');
  }
  // `positions: 'oops'` is not walked letter by letter: the usage is all the section has to say.
  const odd = generateWeeklyMarkdown(report(item({ baseline: BASELINE, webFeature: broken[1] })));
  const start = odd.indexOf('#### 🌐 Web-features Group Context');
  assert.ok(start > 0, 'the usage alone is enough for a section');
  const section = odd.slice(start, odd.indexOf('\n---', start));
  assert.deepStrictEqual(section.split('\n').filter(line => line.startsWith('- ')), ['- **Chrome usage:** 2% of page loads']);
  // The id was taken from Baseline when the mapping record had none.
  const md = generateWeeklyMarkdown(report(item({ baseline: BASELINE, webFeature: broken[0] })));
  assert.ok(md.includes(`group-level data: web-features [\`${GROUP}\`]`));
  assert.ok(md.includes('shared with 3 other ChromeStatus features'));
});

test('the single-feature page has a section for the group, with the same labelling', async (t) => {
  const page = await singlePage(t, item({ baseline: BASELINE, wpt: WPT, webFeature: webFeature() }));

  const start = page.indexOf('## Web-features Group');
  assert.ok(start > 0, 'the section is printed');
  const section = page.slice(start);
  assert.ok(section.includes(`*group-level data: web-features [\`${GROUP}\`](https://webstatus.dev/features/${GROUP}), shared with 2 other ChromeStatus features*`), section);
  assert.ok(section.includes('- Share of tests passing in the web-features group'), section);
  assert.ok(section.includes('stable: Chrome 96.8% · Edge 94.8% · Firefox 90% · Safari 100%; experimental: Chrome 97.1%'), section);
  assert.ok(section.includes('- **Chrome usage:** 1.5% of page loads'), section);
  assert.ok(section.includes('- **Mozilla:** positive'), section);
});

test('the single-feature page of a feature with no group has no group section', async (t) => {
  const page = await singlePage(t, item({}));
  assert.ok(!page.includes('Web-features Group'));
  assert.ok(!page.includes('group-level'));
});

test('the Baseline badge on the dashboard card says it is the group\'s', () => {
  const card = ecosystem => String(renderCard(item(ecosystem)));

  const shared = card({ baseline: BASELINE, webFeature: webFeature() });
  assert.ok(shared.includes(`title="Baseline status of the web-features group ${GROUP}, shared with 2 other ChromeStatus features. Open it on webstatus.dev"`), shared);

  const pair = card({ baseline: BASELINE, webFeature: webFeature({ groupSize: 2 }) });
  assert.ok(pair.includes('shared with 1 other ChromeStatus feature. Open it'), 'singular');

  const alone = card({ baseline: BASELINE, webFeature: webFeature({ groupSize: 1 }) });
  assert.ok(alone.includes(`title="Baseline status of the web-features group ${GROUP}. Open it on webstatus.dev"`), alone);

  const byName = card({ baseline: BASELINE });
  assert.ok(byName.includes(`title="Baseline status of the web-features group ${GROUP}. Open it on webstatus.dev"`), byName);
});

test('a Baseline badge for a record with no group keeps the old tooltip', () => {
  const html = String(renderCard(item({ baseline: { statusLabel: 'Limited availability', status: 'limited', url: 'https://webstatus.dev/features/x', browserSupport: {} } })));
  assert.ok(html.includes('title="View Baseline Status on baseline.dev"'), html);
  assert.ok(!html.includes('web-features group'), html);
});

test('a group id cannot leave the tooltip attribute', () => {
  const hostile = '"><img src=x onerror=alert(1)>';
  const html = String(renderCard(item({ baseline: { ...BASELINE, featureId: hostile }, webFeature: webFeature({ id: hostile }) })));

  assert.ok(!html.includes('<img src=x'), 'markup in an id stays text');
  assert.ok(html.includes('web-features group &quot;&gt;&lt;img src=x onerror=alert(1)&gt;'), html);
});

test('a card without Baseline has no badge and no tooltip', () => {
  const html = String(renderCard(item({ webFeature: webFeature() })));
  assert.ok(!html.includes('Baseline status of the web-features group'), html);
});

test('an address with brackets or spaces stays inside its Markdown link', async (t) => {
  const hostile = 'a)b(c';
  const baselineLine = linesWith(
    generateWeeklyMarkdown(report(item({ baseline: { ...BASELINE, featureId: hostile }, webFeature: webFeature({ id: hostile }) }))),
    '**Baseline Interoperability:**',
  )[0];
  assert.ok(baselineLine.includes(`group-level data: web-features [\`${hostile}\`](<https://webstatus.dev/features/${hostile}>)`), baselineLine);

  // The results of the tests, with and without pass rates.
  const url = 'https://wpt.fyi/results?q=feature:a b)';
  for (const passRates of [WPT.passRates, null]) {
    const line = linesWith(generateWeeklyMarkdown(report(item({ wpt: { ...WPT, url, passRates } }))), 'wpt.fyi')[0];
    assert.ok(line.includes(`on [wpt.fyi](<${url}>)`), line);
  }

  // The use counter and the positions.
  const md = generateWeeklyMarkdown(report(item({
    webFeature: webFeature({
      usage: { percentageOfPageLoad: 1.5, url: 'https://chromestatus.com/metrics/a b)' },
      positions: [{ vendor: 'Mozilla', position: 'positive', concerns: [], url: 'https://github.com/mozilla/a b)' }],
    }),
  })));
  assert.ok(md.includes('([use counter](<https://chromestatus.com/metrics/a b)>))'));
  assert.ok(md.includes('([standards position](<https://github.com/mozilla/a b)>))'));
});

test('a results address that is not a web address is not linked', () => {
  const line = linesWith(generateWeeklyMarkdown(report(item({ wpt: { ...WPT, url: 'javascript:alert(1)' } }))), 'wpt.fyi')[0];
  assert.ok(!line.includes('javascript:'), line);
});

test('the test line names the group the tests belong to: their own id first, then the mapping\'s', () => {
  const testLine = (wpt, group) => linesWith(generateWeeklyMarkdown(report(item({ wpt, webFeature: group }))), 'wpt.fyi')[0];

  assert.ok(testLine({ ...WPT, webFeatureId: 'from-tests' }, webFeature({ id: 'from-mapping' })).includes('web-features group `from-tests` on'));
  assert.ok(testLine({ ...WPT, webFeatureId: undefined }, webFeature({ id: 'from-mapping' })).includes('web-features group `from-mapping` on'));
  assert.ok(testLine({ ...WPT, passRates: null, webFeatureId: undefined }, webFeature({ id: 'from-mapping' })).includes('web-features group `from-mapping` on'));

  // With no id from either, the line is still printed, and still links to the results.
  const bare = testLine({ ...WPT, webFeatureId: undefined }, undefined);
  assert.ok(bare.includes('on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning)'), bare);
});

test('tests without a results address have no section', () => {
  for (const url of [undefined, null, '']) {
    const md = generateWeeklyMarkdown(report(item({ wpt: { ...WPT, url }, webFeature: webFeature({ positions: [], usage: null }) })));
    assert.ok(!md.includes('Web Platform Tests (WPT)'), String(url));
    assert.ok(!md.includes('wpt.fyi'), String(url));
  }
});

test('a Baseline match with no group id has no group note', () => {
  const md = generateWeeklyMarkdown(report(item({ baseline: { ...BASELINE, featureId: undefined } })));
  const line = linesWith(md, '**Baseline Interoperability:**')[0];

  assert.ok(line.includes('[Newly available]'), 'the status is still printed');
  assert.ok(!line.includes('group-level'), line);
});

/** The single-feature page of `featureItem`, as written to a temporary reports directory. */
async function singlePage(t, featureItem) {
  const reportsDir = await fs.mkdtemp(path.join(os.tmpdir(), 'web-group-reporters-'));
  const saved = config.reportsDir;
  config.reportsDir = reportsDir;
  t.after(async () => {
    config.reportsDir = saved;
    await fs.rm(reportsDir, { recursive: true, force: true });
  });
  await writeMarkdownReports(report(featureItem));
  return fs.readFile(path.join(reportsDir, 'features', '4242-anchor.md'), 'utf-8');
}

test('the single-feature page has a group section for the tests alone, and for the context alone', async (t) => {
  const testsOnly = await singlePage(t, item({ wpt: WPT }));
  assert.ok(testsOnly.includes('## Web-features Group'));
  assert.ok(testsOnly.includes('- Share of tests passing in the web-features group'));
  assert.ok(testsOnly.includes('*group-level data: web-features'), 'the tests name their group, so the note is there');
  assert.ok(!testsOnly.includes('Chrome usage'));

  const contextOnly = await singlePage(t, item({ webFeature: webFeature() }));
  assert.ok(contextOnly.includes('## Web-features Group'));
  assert.ok(contextOnly.includes('- **Chrome usage:**'));
  assert.ok(!contextOnly.includes('Share of tests passing'));
});

test('tests that name no group are still listed on the single-feature page, without a group note', async (t) => {
  const page = await singlePage(t, item({ wpt: { ...WPT, webFeatureId: undefined } }));

  assert.ok(page.includes('## Web-features Group'));
  assert.ok(page.includes('on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning)'));
  assert.ok(!page.includes('group-level data'), 'no group is known, so none is named');
});

test('a mapping record with no id, when nothing else names the group, prints no group section anywhere', async (t) => {
  const record = { positions: webFeature().positions, usage: webFeature().usage };

  const md = generateWeeklyMarkdown(report(item({ webFeature: record })));
  assert.ok(!md.includes('Web-features Group Context'));
  assert.ok(!md.includes('group-level'));
  assert.ok(!md.includes('Chrome usage'));

  const page = await singlePage(t, item({ webFeature: record }));
  assert.ok(!page.includes('Web-features Group'));
  assert.ok(!page.includes('Chrome usage'));
});
