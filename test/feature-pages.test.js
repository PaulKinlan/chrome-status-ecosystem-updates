import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { config } from '../src/config.js';
import { generateSummaryMarkdown, generateWeeklyMarkdown, writeMarkdownReports } from '../src/reporters/markdown.js';

/**
 * Two things about what is written under reports/ besides the weekly report itself:
 *
 *  - reports/summary.md, the Executive Snapshot alone, which is what the Actions job summary shows
 *    (a job summary is cut off at 1 MiB, and the whole weekly report can be more than that);
 *  - the page of a feature that was renamed on ChromeStatus, whose file name carries the old name: it
 *    must not go on showing last week's text, and a link to it must not break.
 */

const TAG = '<img src=x onerror=alert(1)>';

function item(id, name, { level = 'High', consensus = 'Multi-Engine Consensus', slug = `${id}-${name.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`, summary = 'What it does.' } = {}) {
  return {
    feature: {
      id,
      slug,
      name,
      summary,
      motivation: '',
      milestone: 154,
      category: 'Enabled by default',
      statusType: 'enabled',
      chromeStatusUrl: `https://chromestatus.com/feature/${id}`,
      chromeStatusLiteUrl: `https://chromestatuslite.com/feature/${id}`,
      browsers: { chrome: { status: 'Enabled' }, firefox: { view: 'No signal' }, safari: { view: 'No signal' } },
    },
    ecosystem: { metrics: {}, discussions: [], standards: [], packages: [], blogs: [], docs: [], reverseLinks: [], resources: [] },
    analysis: { momentumLevel: level, momentumScore: 120, consensus, sentiment: 'Positive', executiveSummary: 'Summary.', takeaways: [] },
    delta: { isNewFeature: false, statusChanged: false, momentumChanged: false, newArticlesCount: 2, newDiscussionsCount: 1 },
  };
}

const reportOf = (features, telemetry = { searchProvider: 'Brave', aiProvider: 'Gemini' }) => ({
  weekString: '2026-W41',
  date: '2026-10-08',
  milestones: [153, 154],
  featuresCount: features.length,
  telemetry,
  features,
});

async function reportsSandbox(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'feature-pages-test-'));
  const saved = config.reportsDir;
  config.reportsDir = path.join(root, 'reports');
  t.after(async () => {
    config.reportsDir = saved;
    await fs.rm(root, { recursive: true, force: true });
  });
  return config.reportsDir;
}

const read = (...parts) => fs.readFile(path.join(config.reportsDir, ...parts), 'utf-8');
const exists = (...parts) => fs.access(path.join(config.reportsDir, ...parts)).then(() => true, () => false);

// --- the summary ----------------------------------------------------------------------------------------------------

test('the summary is the header and the Executive Snapshot, with the same counts as the full report', () => {
  const report = reportOf([
    item(1, 'First feature'),
    item(2, 'Second feature', { level: 'Moderate', consensus: 'Contested: Mozilla has concerns' }),
    item(3, 'Third feature', { level: 'Quiet' }),
  ], { searchProvider: 'Brave', aiProvider: 'Gemini', aiCoverage: { configured: true, withAi: 2, total: 3 } });

  const summary = generateSummaryMarkdown(report);
  const full = generateWeeklyMarkdown(report);

  assert.ok(summary.startsWith('# 🌐 Chrome Web Platform Ecosystem Report — 2026-W41\n\n> **Generated on:** 2026-10-08 | **Target Milestones:** Chrome 153, 154\n'));
  assert.match(summary, /\*\*Search Engine:\*\* Brave \| \*\*Analysis Model:\*\* Gemini \| \*\*AI synthesis:\*\* 2 of 3 features\n/);
  assert.match(summary, /\| \*\*Features Tracked\*\* \| `3` \|/);
  assert.match(summary, /\| \*\*High Ecosystem Momentum\*\* \| `1` \|/);
  assert.match(summary, /\| \*\*Contested \/ Concerns\*\* \| `1` \|/);
  assert.match(summary, /\| \*\*New Mentions This Week\*\* \| `9` \|/);

  // Everything the summary says is word for word what the full report says.
  const snapshot = summary.slice(summary.indexOf('## 📊 Executive Snapshot'), summary.indexOf('The full report'));
  assert.ok(snapshot.length > 300 && full.includes(snapshot), 'the snapshot is the full report\'s own');
  assert.ok(full.startsWith(summary.slice(0, summary.indexOf('## 📊 Executive Snapshot'))), 'and so is the header');
});

test('the summary leaves out everything that grows with the number of features', () => {
  const summary = generateSummaryMarkdown(reportOf([item(1, 'First feature'), item(2, 'Second feature')]));

  for (const heading of ['Week-over-Week', 'Features Index', 'Deep Dives', '###']) {
    assert.ok(!summary.includes(heading), `the summary holds "${heading}"`);
  }
  assert.ok(!summary.includes('First feature') && !summary.includes('Second feature'), 'no feature is named');
  assert.strictEqual(summary.split('\n').filter(line => line.startsWith('| ')).length, 7, 'the table header, its rule and five counts');
});

test('a report too long for a job summary has a summary that is a few lines', () => {
  const features = Array.from({ length: 400 }, (_, i) => item(1000 + i, `Feature number ${i}`, { summary: 'Long text. '.repeat(250) }));
  const report = reportOf(features);

  assert.ok(Buffer.byteLength(generateWeeklyMarkdown(report)) > 1024 * 1024, 'the whole report is over the 1 MiB a job summary may hold');
  assert.ok(Buffer.byteLength(generateSummaryMarkdown(report)) < 4096, 'the snapshot is not');
});

test('the summary says what the header of the report says about a forced publication, and escapes it', () => {
  const summary = generateSummaryMarkdown(reportOf([item(1, 'A')], { searchProvider: 'Brave', aiProvider: 'Gemini', qualityOverrides: [`ChromeStatus returned ${TAG}`] }));

  assert.match(summary, /^> ⚠️ \*\*Safety check overridden \(--force\):\*\* ChromeStatus returned &lt;img/m);
  assert.ok(!summary.includes(TAG));
});

test('the summary points at the full report, and the file name cannot leave its code span', () => {
  const summary = generateSummaryMarkdown({ ...reportOf([item(1, 'A')]), weekString: '2026-W41`<b>' });

  const last = summary.trimEnd().split('\n').at(-1);
  assert.strictEqual(last, 'The full report is ``reports/weekly/2026-W41`<b>.md`` in the repository and the dashboard on GitHub Pages.');
  assert.strictEqual(generateSummaryMarkdown(reportOf([item(1, 'A')])).trimEnd().split('\n').at(-1),
    'The full report is `reports/weekly/2026-W41.md` in the repository and the dashboard on GitHub Pages.');
});

test('a report with no features and no telemetry still has a summary', () => {
  const summary = generateSummaryMarkdown({ weekString: '2026-W41', date: '2026-10-08', milestones: [153], features: [] });

  assert.match(summary, /\| \*\*Features Tracked\*\* \| `0` \|/);
  assert.ok(!summary.includes('Search Engine'));
});

test('writeMarkdownReports writes reports/summary.md next to the full report, which is unchanged', async (t) => {
  await reportsSandbox(t);
  const report = reportOf([item(1, 'First feature'), item(2, 'Second feature')]);

  const { weeklyFilePath } = await writeMarkdownReports(report);

  assert.strictEqual(await read('summary.md'), generateSummaryMarkdown(report));
  assert.strictEqual(await read('README.md'), generateWeeklyMarkdown(report));
  assert.strictEqual(await fs.readFile(weeklyFilePath, 'utf-8'), generateWeeklyMarkdown(report));
  assert.ok(Buffer.byteLength(await read('summary.md')) < Buffer.byteLength(await read('README.md')));
});

// --- pages of renamed features ----------------------------------------------------------------------------------------

async function writePage(name, text) {
  await fs.mkdir(path.join(config.reportsDir, 'features'), { recursive: true });
  await fs.writeFile(path.join(config.reportsDir, 'features', name), text);
}

test('a renamed feature\'s page under the old name becomes a pointer to the page under the new one', async (t) => {
  await reportsSandbox(t);
  await writePage('4242-old-name.md', '# Old name\n\nOut-of-date text about the feature.\n');

  await writeMarkdownReports(reportOf([item(4242, 'New name', { summary: 'The current text.' })]));

  assert.match(await read('features', '4242-new-name.md'), /The current text\./, 'the page under the new name is the full page');
  assert.strictEqual(await read('features', '4242-old-name.md'),
    '# New name\n\n> **This page has moved.** The feature\'s page is now [New name](4242-new-name.md).\n');
});

test('every earlier name of the feature is pointed at its current page, so no pointer leads to another pointer', async (t) => {
  await reportsSandbox(t);
  await writePage('4242-first-name.md', '# First\n');
  await writePage('4242-second-name.md', '# Moved\n\n> **This page has moved.** The feature\'s page is now [Second name](4242-second-name.md).\n');

  await writeMarkdownReports(reportOf([item(4242, 'Third name')]));

  for (const old of ['4242-first-name.md', '4242-second-name.md']) {
    assert.match(await read('features', old), /\[Third name\]\(4242-third-name\.md\)/, old);
  }
  assert.ok(!(await read('features', '4242-third-name.md')).includes('has moved'), 'the current page is not a pointer');
});

test('only pages of features that are in the report, under another name, are replaced', async (t) => {
  await reportsSandbox(t);
  const untouched = {
    '9999-left-the-window.md': '# A feature that is no longer listed\n',         // not in this report
    '4242-something.md': '# The feature 4242\n',                                    // id 4242 is not id 42
    '42-answer.md': '# Current page of 42, rewritten below\n',
    'notes.md': 'not a feature page',
    '42-old-name.txt': 'not markdown',
    '42_old_name.md': 'no hyphen after the id',
    '42-Old-Name.md': 'slugs are lower case, so this is not one',
    '-no-id.md': 'no id',
    'x42-old-name.md': 'the name does not start with the id',
    'page-42-old-name.md': 'nor does this one',
    '42-old-name.md.bak': 'a copy, not a page',
    '42-old name.md': 'a slug has no space in it',
    '42-old-name-md': 'no extension',
  };
  for (const [name, text] of Object.entries(untouched)) await writePage(name, text);
  // What a slug can be: letters and digits, hyphens, underscores, and nothing at all for a name with no letters in it.
  const supersededNames = ['42-renamed-away.md', '42-.md', '42-old_name.md', '42--x-9.md'];
  for (const name of supersededNames) await writePage(name, '# Out of date\n');

  await writeMarkdownReports(reportOf([item(42, 'Answer')]));

  assert.ok((await read('features', '42-answer.md')).startsWith('# Answer'), 'the current page is written');
  for (const name of supersededNames) assert.match(await read('features', name), /has moved/, name);
  for (const [name, text] of Object.entries(untouched)) {
    if (name !== '42-answer.md') assert.strictEqual(await read('features', name), text, `${name} must not be touched`);
  }
});

test('a partial report leaves every other feature\'s page as the last full report wrote it', async (t) => {
  await reportsSandbox(t);
  const full = reportOf([item(1, 'One'), item(2, 'Two'), item(3, 'Three')]);
  await writeMarkdownReports(full);
  const before = await Promise.all(['1-one.md', '2-two.md', '3-three.md'].map(name => read('features', name)));

  await writeMarkdownReports(reportOf([item(2, 'Two')]));

  assert.deepStrictEqual(await Promise.all(['1-one.md', '2-two.md', '3-three.md'].map(name => read('features', name))), before);
});

test('writing the same report again changes nothing, pointers included', async (t) => {
  await reportsSandbox(t);
  await writePage('7-before.md', '# Before\n');
  const report = reportOf([item(7, 'After'), item(8, 'Other')]);

  await writeMarkdownReports(report);
  const files = await fs.readdir(path.join(config.reportsDir, 'features'));
  const first = await Promise.all(files.map(name => read('features', name)));
  await writeMarkdownReports(report);

  assert.deepStrictEqual((await fs.readdir(path.join(config.reportsDir, 'features'))).sort(), files.sort());
  assert.deepStrictEqual(await Promise.all(files.map(name => read('features', name))), first);
});

test('the name in a pointer is text, and the file it links to is encoded', async (t) => {
  await reportsSandbox(t);
  await writePage('5-old.md', '# Old\n');

  await writeMarkdownReports(reportOf([item(5, `${TAG} *bold* [x](javascript:alert(1))`, { slug: '5-new name' })]));

  const pointer = await read('features', '5-old.md');
  assert.ok(!pointer.includes(TAG), pointer);
  assert.match(pointer, /&lt;img src=x onerror=alert\(1\)&gt;/);
  assert.match(pointer, /\]\(5-new%20name\.md\)\.\n$/, 'a space in the link target would end the link');
});

test('pages are only replaced after every current page has been written', async (t) => {
  await reportsSandbox(t);
  await writePage('11-old.md', '# Old\n');
  await fs.mkdir(path.join(config.reportsDir, 'features', '12-blocked.md')); // a directory where page 12 must go

  await assert.rejects(writeMarkdownReports(reportOf([item(11, 'New'), item(12, 'Blocked')])), { code: 'EISDIR' });

  assert.strictEqual(await read('features', '11-old.md'), '# Old\n', 'a run that failed part way has not replaced anything');
});

test('a page that cannot be replaced is reported and left alone; the report and the other pointers are still written', async (t) => {
  await reportsSandbox(t);
  const warnings = [];
  t.mock.method(console, 'error', (...args) => { warnings.push(args.join(' ')); });
  await writePage('11-aaa-first.md', '# Out of date\n');
  await fs.mkdir(path.join(config.reportsDir, 'features', '11-bbb-directory.md')); // something that is not a file, by a superseded name
  await writePage('11-ccc-last.md', '# Out of date\n');

  const { featuresCount } = await writeMarkdownReports(reportOf([item(11, 'Current name')]));

  assert.strictEqual(featuresCount, 1);
  assert.match(await read('features', '11-current-name.md'), /^# Current name/);
  for (const name of ['11-aaa-first.md', '11-ccc-last.md']) assert.match(await read('features', name), /has moved/, name);
  assert.ok((await fs.stat(path.join(config.reportsDir, 'features', '11-bbb-directory.md'))).isDirectory());
  const warning = warnings.filter(line => line.includes('11-bbb-directory.md'));
  assert.strictEqual(warning.length, 1, warnings.join('\n'));
  assert.match(warning[0], /Could not replace 11-bbb-directory\.md with a pointer to 11-current-name\.md: /);
});

test('a feature with no usable slug has no pointer pages: nothing is overwritten on its behalf', async (t) => {
  await reportsSandbox(t);
  for (const slug of [undefined, '', 7, null]) {
    await writePage('7-old.md', '# Old\n');
    const report = reportOf([item(7, 'Seven')]);
    if (slug === undefined) delete report.features[0].feature.slug;
    else report.features[0].feature.slug = slug;

    await writeMarkdownReports(report);

    assert.strictEqual(await read('features', '7-old.md'), '# Old\n', `slug ${String(slug)}`);
  }
});

// --- the momentum line of a feature's own page --------------------------------------------------------------------------

test('a feature page says what its momentum tier rests on, and escapes it', async (t) => {
  await reportsSandbox(t);
  const measured = item(1, 'Measured');
  Object.assign(measured.analysis, { momentumBasis: 'change', momentumChange: 45, footprint: 130, momentumBaseline: { week: '2026-W37', date: '2026-09-10', footprint: 85 } });
  const ranked = item(2, 'Ranked');
  Object.assign(ranked.analysis, { momentumBasis: 'footprint rank', footprint: 85 });
  const unmeasured = item(3, 'Unmeasured', { level: 'Emerging' });
  Object.assign(unmeasured.analysis, { momentumBasis: 'no baseline', footprint: 20 });
  const hostile = item(4, 'Hostile');
  Object.assign(hostile.analysis, { momentumBasis: 'change', momentumChange: -7, footprint: 113, momentumBaseline: { week: null, date: `${TAG} *bold*`, footprint: 120 } });
  const plain = item(5, 'Plain'); // an analysis that has only the score (momentumScore: 120)

  await writeMarkdownReports(reportOf([measured, ranked, unmeasured, hostile, plain]));

  const line = async name => (await read('features', name)).split('\n').find(l => l.startsWith('- **Momentum:**'));
  assert.strictEqual(await line('1-measured.md'), '- **Momentum:** High (+45 points since 2026-09-10; footprint 130 points)');
  assert.strictEqual(await line('2-ranked.md'), '- **Momentum:** High (footprint 85 points, ranked against this week\'s features because too few have an earlier number to work out a change)');
  assert.strictEqual(await line('3-unmeasured.md'), '- **Momentum:** Emerging (no earlier number to compare with yet; footprint 20 points)');
  assert.strictEqual(await line('4-hostile.md'), '- **Momentum:** High (-7 points since &lt;img src=x onerror=alert(1)&gt; \\*bold\\*; footprint 113 points)');
  assert.ok(!(await read('features', '4-hostile.md')).includes(TAG));
  assert.strictEqual(await line('5-plain.md'), '- **Momentum:** High (footprint 120 points)');
});
