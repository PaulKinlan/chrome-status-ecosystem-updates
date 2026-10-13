import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import { generateSummaryMarkdown, generateWeeklyMarkdown, getIsoWeekString } from '../src/reporters/markdown.js';
import { escapeMarkdown, escapeHtml } from '../src/reporters/escape.js';
import { generateDashboardHtml } from '../src/reporters/html.js';
import { generateRssFeed } from '../src/reporters/rss.js';

const mockReportData = {
  weekString: '2026-W35',
  date: '2026-08-27',
  milestones: [154],
  features: [
    {
      feature: {
        id: 12345,
        name: 'Web Install API',
        slug: '12345-web-install-api',
        milestone: 154,
        category: 'Enabled by default',
        statusType: 'enabled',
        summary: 'Allows websites to install web apps.',
        specUrl: 'https://w3c.github.io/manifest/',
        chromeStatusUrl: 'https://chromestatus.com/feature/12345',
        chromeStatusLiteUrl: 'https://chromestatuslite.com/feature/12345',
        browsers: {
          chrome: { status: 'Enabled' },
          firefox: { view: 'No signal' },
          safari: { view: 'No signal' },
        },
      },
      ecosystem: {
        metrics: { hnPoints: 50, hnComments: 20, hasPolyfill: false },
        discussions: [{ title: 'HN Thread', points: 50, commentsCount: 20, url: 'https://news.ycombinator.com' }],
        standards: [],
        packages: [],
        articles: [],
        resources: [],
      },
      analysis: {
        momentumScore: 85,
        momentumLevel: 'High',
        consensus: 'Chromium-Led',
        sentiment: 'Positive / High Interest',
        executiveSummary: 'High interest in web apps.',
        takeaways: ['Adopt cautiously.'],
      },
      delta: {
        isNewFeature: true,
        newArticlesCount: 0,
        newDiscussionsCount: 1,
      },
    },
  ],
};

test('getIsoWeekString formats correctly', () => {
  const str = getIsoWeekString(new Date('2026-08-27'));
  assert.match(str, /^\d{4}-W\d{2}$/);
  assert.strictEqual(str, '2026-W35');
});

test('the week is the ISO week of the UTC day, in whatever time zone the program runs, and at the turn of a year', async (t) => {
  // `isoDay` (what the report is dated, and what the history keys its numbers by) is the UTC day; a week worked out from
  // the local calendar day was another week for a run that finished on a Sunday evening in the west or a Monday morning in
  // the east of Greenwich.
  const moments = [
    ['2026-10-04T20:00:00Z', '2026-W40'],  // Sunday evening UTC: already Monday in Auckland
    ['2026-10-05T03:00:00Z', '2026-W41'],  // Monday morning UTC: still Sunday in Los Angeles
    ['2026-12-28T00:00:00Z', '2026-W53'],
    ['2027-01-03T23:30:00Z', '2026-W53'],  // Monday 2027-01-04 in Auckland, which says 2027-W01
    ['2027-01-04T00:00:00Z', '2027-W01'],
    ['2024-12-30T00:00:00Z', '2025-W01'],
    ['2026-01-01T00:00:00Z', '2026-W01'],
  ];
  const zone = process.env.TZ;
  t.after(() => {
    if (zone === undefined) delete process.env.TZ;
    else process.env.TZ = zone;
  });

  for (const timeZone of ['UTC', 'Pacific/Auckland', 'America/Los_Angeles']) {
    process.env.TZ = timeZone;
    const localDay = new Date('2026-10-04T20:00:00Z').getDate();
    if (timeZone === 'Pacific/Auckland' && localDay !== 5) return t.skip('this platform ignores a change of TZ at run time');
    for (const [moment, week] of moments) {
      assert.strictEqual(getIsoWeekString(new Date(moment)), week, `${moment} in ${timeZone}`);
    }
  }
});

test('generateWeeklyMarkdown produces comprehensive markdown', () => {
  const md = generateWeeklyMarkdown(mockReportData);
  assert.ok(md.includes('Chrome Web Platform Ecosystem Report'));
  assert.ok(md.includes('Web Install API'));
  assert.ok(md.includes('High Ecosystem Momentum'));
  assert.ok(md.includes('Chromium-Led'));
});

test('generateDashboardHtml creates responsive standalone dashboard', () => {
  const html = generateDashboardHtml(mockReportData);
  assert.ok(String(html).includes('<!doctype html>'));
  assert.ok(String(html).includes('Web Install API'));
  assert.ok(String(html).includes('Chrome Ecosystem Updates'));
  assert.ok(String(html).includes('High Momentum'));
});

test('generateRssFeed outputs valid RSS 2.0 XML', () => {
  const rss = generateRssFeed(mockReportData);
  // The Atom namespace is required for the <atom:link rel="self"> element that
  // feed validators expect, so the root tag is not the bare `<rss version="2.0">`.
  assert.match(rss, /<rss version="2\.0"[^>]*>/);
  assert.ok(rss.includes('xmlns:atom="http://www.w3.org/2005/Atom"'));
  assert.ok(rss.includes('<title>Web Install API — Chrome 154 Ecosystem Update</title>'));
});

test('escapeHtml encodes <, >, &, ", and \' properly', () => {
  const input = 'responsively sized <iframe> & "test"';
  const escaped = escapeHtml(input);
  assert.strictEqual(escaped, 'responsively sized &lt;iframe&gt; &amp; &quot;test&quot;');
});

test('escapeMarkdown escapes inline constructs and table pipes', () => {
  const escaped = escapeMarkdown('responsively sized <iframe> | col2');
  // Markdown escaping backslash-escapes its own metacharacters; it does not
  // produce HTML entities. Angle brackets are left for the HTML escaper.
  assert.ok(escaped.includes('\\|'), 'pipes are escaped so table cells do not split');
  assert.strictEqual(escapeMarkdown('a*b_c'), 'a\\*b\\_c');
  assert.strictEqual(escapeMarkdown('line1\nline2'), 'line1 line2');
});

test('generateDashboardHtml encodes HTML in feature titles to prevent embedding elements like <iframe>', () => {
  const dataWithIframe = {
    ...mockReportData,
    features: [
      {
        ...mockReportData.features[0],
        feature: {
          ...mockReportData.features[0].feature,
          name: 'responsively sized <iframe>',
        },
      },
    ],
  };

  const html = generateDashboardHtml(dataWithIframe);
  assert.ok(!html.includes('<iframe>'), 'Raw <iframe> tag is not embedded in the HTML');
  assert.ok(String(html).includes('&lt;iframe&gt;'), 'HTML tags in feature name are safely encoded in HTML output');
});


test('generateWeeklyMarkdown encodes HTML in feature titles to prevent raw HTML elements in markdown', () => {
  const dataWithIframe = {
    ...mockReportData,
    features: [
      {
        ...mockReportData.features[0],
        feature: {
          ...mockReportData.features[0].feature,
          name: 'responsively sized <iframe>',
        },
      },
    ],
  };

  const md = generateWeeklyMarkdown(dataWithIframe);
  assert.ok(!md.includes('### [responsively sized <iframe>]'), 'Does not render unescaped <iframe> in headings');
  assert.ok(md.includes('&lt;iframe&gt;'), 'Encodes < and > as HTML entities');
});

test('generateWeeklyMarkdown renders Twitter discussions with author and bird icon', () => {
  const dataWithTweet = {
    ...mockReportData,
    features: [
      {
        ...mockReportData.features[0],
        ecosystem: {
          ...mockReportData.features[0].ecosystem,
          discussions: [
            {
              source: 'Twitter / X',
              title: 'Check out the new Web Install API!',
              url: 'https://twitter.com/dev/status/123',
              points: 25,
              commentsCount: 5,
              author: '@ChromiumDev',
            },
          ],
        },
      },
    ],
  };

  const md = generateWeeklyMarkdown(dataWithTweet);
  assert.ok(md.includes('🐦 [Check out the new Web Install API!]'));
  assert.ok(md.includes('Twitter / X by @ChromiumDev'));
  assert.ok(md.includes('25 likes/RTs, 5 replies'));
});

test('generateWeeklyMarkdown and generateDashboardHtml render Week-over-Week Deltas', async () => {
  const dataWithDelta = {
    ...mockReportData,
    features: [
      {
        ...mockReportData.features[0],
        delta: {
          isNewFeature: false,
          statusChanged: true,
          previousStatus: 'Origin Trial',
          momentumChanged: true,
          previousMomentum: 'Quiet',
          newArticlesCount: 3,
          newDiscussionsCount: 1,
          hasDelta: true,
        },
      },
    ],
  };

  const md = generateWeeklyMarkdown(dataWithDelta);
  assert.ok(md.includes('## ⚡ Week-over-Week Ecosystem Deltas'), 'Includes deltas section');
  assert.ok(md.includes('Moved from *Origin Trial* to **Enabled by default**'), 'Includes status transition');
  assert.ok(md.includes('Shifted from *Quiet* to **High** momentum'), 'Includes momentum shift');

  const html = generateDashboardHtml(dataWithDelta);
  assert.ok(String(html).includes('<span aria-hidden="true">⚡</span> Week Changes (Deltas)'), 'Includes delta stat card in HTML');
  assert.ok(html.includes('data-filter-val="deltas"'), 'Includes deltas filter button in HTML');
});

test('the Chromium tile shows the current stage, not ChromeStatus\'s stale per-browser status', () => {
  // Regression: 80 of 87 features in one real report said "Proposed" here, 54 of
  // them while already "Enabled by default".
  const stale = {
    ...mockReportData,
    features: [{
      ...mockReportData.features[0],
      feature: {
        ...mockReportData.features[0].feature,
        category: 'Enabled by default',
        browsers: { ...mockReportData.features[0].feature.browsers, chrome: { status: 'Proposed' } },
      },
    }],
  };

  const md = generateWeeklyMarkdown(stale);
  assert.ok(md.includes('Chrome: `Enabled by default`'), 'markdown should name the current stage');
  assert.ok(!md.includes('Chrome: `Proposed`'), 'markdown must not repeat the stale status');

  const html = String(generateDashboardHtml(stale));
  assert.ok(html.includes('<div class="val">Enabled by default</div>'), 'HTML tile should name the current stage');
  assert.ok(!html.includes('<div class="val">Proposed</div>'), 'HTML tile must not repeat the stale status');
});

test('the Chromium tile falls back to the legacy status, then to a neutral label', () => {
  const withoutCategory = (browsersChrome) => ({
    ...mockReportData,
    features: [{
      ...mockReportData.features[0],
      feature: {
        ...mockReportData.features[0].feature,
        category: undefined,
        browsers: { ...mockReportData.features[0].feature.browsers, chrome: browsersChrome },
      },
    }],
  });

  assert.ok(generateWeeklyMarkdown(withoutCategory({ status: 'Origin trial' })).includes('Chrome: `Origin trial`'));
  assert.ok(generateWeeklyMarkdown(withoutCategory({})).includes('Chrome: `Active`'));
});

test('the Chromium tile escapes whatever stage text it is given', () => {
  const hostile = {
    ...mockReportData,
    features: [{
      ...mockReportData.features[0],
      feature: { ...mockReportData.features[0].feature, category: '<img src=x onerror=alert(1)>' },
    }],
  };
  const html = String(generateDashboardHtml(hostile));
  assert.ok(!html.includes('<img src=x onerror=alert(1)>'));
});

const withTelemetry = (aiCoverage) => ({
  ...mockReportData,
  telemetry: {
    searchProvider: 'Brave',
    aiProvider: 'Google Gemini (gemini-3.8-flash)',
    ...(aiCoverage && { aiCoverage }),
  },
});

test('the header says how many features received AI synthesis, but only when an AI provider was configured', () => {
  const covered = withTelemetry({ configured: true, withAi: 59, total: 87, ratio: 0.678 });
  assert.match(generateWeeklyMarkdown(covered), /\| \*\*AI synthesis:\*\* 59 of 87 features\n/);
  assert.ok(String(generateDashboardHtml(covered)).includes('AI synthesis 59/87'));

  // An offline run, and a report written before the field existed.
  for (const aiCoverage of [{ configured: false, withAi: 0, total: 87, ratio: 0 }, undefined]) {
    assert.ok(!generateWeeklyMarkdown(withTelemetry(aiCoverage)).includes('AI synthesis'));
    assert.ok(!String(generateDashboardHtml(withTelemetry(aiCoverage))).includes('AI synthesis'));
  }
});

test('the AI synthesis badge escapes whatever it is given', () => {
  const html = String(generateDashboardHtml(withTelemetry({ configured: true, withAi: '<b>1</b>', total: 2, ratio: 0.5 })));
  assert.ok(!html.includes('<b>1</b>'));
});

const withOverrides = qualityOverrides => ({
  ...mockReportData,
  telemetry: {
    searchProvider: 'Brave',
    aiProvider: 'Heuristic Engine',
    ...(qualityOverrides && { qualityOverrides }),
  },
});

test('a report published with --force says which safety checks it overrode: Markdown header and HTML badge', () => {
  const forced = withOverrides([
    'ChromeStatus returned only 3 features for Chrome 153, 154, but it listed 12 when the published report was made.',
    '7 of 12 features failed to process, which is too many to publish a meaningful report.',
  ]);

  const md = generateWeeklyMarkdown(forced);
  assert.match(md, /^> ⚠️ \*\*Safety check overridden \(--force\):\*\* ChromeStatus returned only 3 features.* 7 of 12 features failed/m);
  assert.ok(md.indexOf('Safety check overridden') < md.indexOf('Executive Snapshot'), 'it belongs in the header, above the report');

  const html = String(generateDashboardHtml(forced));
  assert.match(html, /<span class="badge badge-danger" title="ChromeStatus returned only 3 features[^"]*7 of 12 features failed[^"]*">⚠ Safety check overridden<\/span>/);
});

test('a report that overrode nothing carries no override notice', () => {
  // [] is a normal run; undefined is a report written before the field existed; the last is a mangled one.
  for (const qualityOverrides of [[], undefined, 'not-a-list']) {
    const data = withOverrides(qualityOverrides);
    assert.ok(!generateWeeklyMarkdown(data).includes('overridden'));
    assert.ok(!String(generateDashboardHtml(data)).includes('overridden'));
  }
});

test('override text is escaped in both formats, because it is built from upstream data', () => {
  const hostile = withOverrides(['<img src=x onerror=alert(1)> "quoted" [click](javascript:alert(1)) | *bold*']);

  const md = generateWeeklyMarkdown(hostile);
  assert.ok(!md.includes('<img'), md);
  assert.match(md, /^> ⚠️ \*\*Safety check overridden \(--force\):\*\* &lt;img/m);
  assert.ok(!/(^|[^\\])\[click\]\(/m.test(md), 'the text must not become a link');

  const html = String(generateDashboardHtml(hostile));
  assert.ok(!html.includes('<img src=x'));
  const title = html.match(/<span class="badge badge-danger" title="([^"]*)">⚠ Safety check overridden<\/span>/)?.[1];
  assert.ok(title, 'the whole text must stay inside the title attribute');
  assert.ok(title.includes('&lt;img src=x onerror=alert(1)&gt; &quot;quoted&quot;'), title);
});

// --- momentum: what the tiers are based on --------------------------------

const momentumSummary = (basis, withBaseline) => ({
  basis,
  baselineDays: 28,
  withBaseline,
  total: 87,
  tiers: { High: 13, Moderate: 31, Emerging: 43, Quiet: 0 },
});

const withMomentum = summary => ({
  ...mockReportData,
  telemetry: { searchProvider: 'Brave', aiProvider: 'Heuristic Engine', ...(summary && { momentum: summary }) },
});

test('the dashboard header says what the momentum tiers are based on', () => {
  const warmingUp = String(generateDashboardHtml(withMomentum(momentumSummary('footprint rank', 12))));
  assert.match(warmingUp, /<span class="badge" title="Momentum tiers rank this week&#39;s footprint against the other features: the change over four weeks needs an earlier number, measured the same way, for at least 10 features and half of them, and 12 of 87 have one\.">📈 Momentum: footprint rank \(warm-up\)<\/span>/);

  const measured = String(generateDashboardHtml(withMomentum(momentumSummary('change', 60))));
  assert.match(measured, /title="Momentum is the change in footprint since about four weeks ago, in tiers relative to the other features \(60 of 87 features have an earlier number to compare with\)\.">📈 Momentum: change over four weeks<\/span>/);

  const tiny = String(generateDashboardHtml(withMomentum(momentumSummary('footprint level', 0))));
  assert.ok(tiny.includes('📈 Momentum: footprint level'));

  // A report from before momentum was a change carries no summary and gets no badge.
  assert.ok(!String(generateDashboardHtml(withMomentum(undefined))).includes('📈 Momentum'));
});

test('each card says in its momentum badge what the tier rests on', () => {
  const withAnalysis = fields => ({
    ...mockReportData,
    features: [{ ...mockReportData.features[0], analysis: { ...mockReportData.features[0].analysis, ...fields } }],
  });

  const measured = String(generateDashboardHtml(withAnalysis({
    momentumBasis: 'change', momentumChange: 45, footprint: 130, momentumBaseline: { week: '2026-W37', date: '2026-09-10', footprint: 85 },
  })));
  assert.ok(measured.includes('<span class="badge badge-primary" title="+45 points since 2026-09-10; footprint 130 points">High Momentum</span>'), measured.match(/<span class="badge badge-primary"[^>]*>High Momentum/)?.[0]);

  const ranked = String(generateDashboardHtml(withAnalysis({ momentumBasis: 'footprint rank', footprint: 85 })));
  assert.ok(ranked.includes('title="footprint 85 points, ranked against this week&#39;s features because too few have an earlier number to work out a change">High Momentum</span>'));

  // Analyses that carry nothing but the score (older code, other callers) still render, by their score.
  const plain = String(generateDashboardHtml(mockReportData));
  assert.ok(plain.includes('title="footprint 85 points">High Momentum</span>'));
});

test('the momentum text is escaped in the dashboard like everything else taken from a report', () => {
  const hostile = {
    ...mockReportData,
    features: [{
      ...mockReportData.features[0],
      analysis: {
        ...mockReportData.features[0].analysis,
        momentumBasis: 'change', momentumChange: 5, footprint: 90, momentumBaseline: { week: null, date: '<img src=x onerror=alert(1)>', footprint: 85 },
      },
    }],
  };

  const html = String(generateDashboardHtml(hostile));

  assert.ok(!html.includes('<img src=x'), 'the date must not become markup');
  assert.ok(html.includes('+5 points since &lt;img src=x onerror=alert(1)&gt;; footprint 90 points'));
});

test('the weekly report opens with the header and the Executive Snapshot exactly as it did before they were separate functions', () => {
  const snapshot =
    '## 📊 Executive Snapshot\n\n' +
    '| Metric | Count | Description |\n' +
    '| :--- | :--- | :--- |\n' +
    '| **Features Tracked** | `1` | APIs & platform features analyzed across milestones |\n' +
    '| **High Ecosystem Momentum** | `1` | Features in the highest momentum tier (see Methodology) |\n' +
    '| **Multi-Engine Consensus** | `0` | Broad alignment across Chromium, Gecko, and WebKit |\n' +
    '| **Contested / Concerns** | `0` | Features with open vendor or security/privacy objections |\n' +
    '| **New Mentions This Week** | `1` | Net new articles, discussions, or standards updates |\n\n';

  assert.ok(generateWeeklyMarkdown(mockReportData).startsWith(
    '# 🌐 Chrome Web Platform Ecosystem Report — 2026-W35\n\n' +
    '> **Generated on:** 2026-08-27 | **Target Milestones:** Chrome 154\n\n' +
    snapshot));

  assert.ok(generateWeeklyMarkdown({ ...mockReportData, telemetry: { searchProvider: 'Brave', aiProvider: 'Gemini' } }).startsWith(
    '# 🌐 Chrome Web Platform Ecosystem Report — 2026-W35\n\n' +
    '> **Generated on:** 2026-08-27 | **Target Milestones:** Chrome 154\n' +
    '> **Search Engine:** Brave | **Analysis Model:** Gemini\n\n' +
    snapshot));
});

// --- momentum in the Markdown reports --------------------------------------

const withAnalysis = fields => ({
  ...mockReportData,
  features: [{ ...mockReportData.features[0], analysis: { ...mockReportData.features[0].analysis, ...fields } }],
});

const headerOf = md => md.slice(0, md.indexOf('## 📊 Executive Snapshot'));

test('the weekly report header says what the momentum tiers rest on, after the engines line and before a safety-check notice', () => {
  const telemetry = {
    searchProvider: 'Brave', aiProvider: 'Gemini', momentum: momentumSummary('footprint rank', 12), qualityOverrides: ['ChromeStatus returned fewer features'],
  };

  const header = headerOf(generateWeeklyMarkdown({ ...mockReportData, telemetry }));

  assert.strictEqual(header,
    '# 🌐 Chrome Web Platform Ecosystem Report — 2026-W35\n\n' +
    '> **Generated on:** 2026-08-27 | **Target Milestones:** Chrome 154\n' +
    '> **Search Engine:** Brave | **Analysis Model:** Gemini\n' +
    '> **Momentum:** Momentum tiers rank this week\'s footprint against the other features: the change over four weeks needs an earlier number, measured the same way, for at least 10 features and half of them, and 12 of 87 have one.\n' +
    '> ⚠️ **Safety check overridden (--force):** ChromeStatus returned fewer features\n\n');
});

test('the header says it in the words of whichever basis the tiers have', () => {
  assert.ok(headerOf(generateWeeklyMarkdown(withMomentum(momentumSummary('change', 60)))).endsWith(
    '> **Momentum:** Momentum is the change in footprint since about four weeks ago, in tiers relative to the other features (60 of 87 features have an earlier number to compare with).\n\n'));
  assert.ok(headerOf(generateWeeklyMarkdown(withMomentum(momentumSummary('footprint level', 0)))).endsWith(
    '> **Momentum:** Too few features to rank: momentum tiers are the absolute footprint levels.\n\n'));
});

test('a report with no momentum summary has no momentum line in its header', () => {
  // Reports written before momentum was a change carry none, and a report with no telemetry at all carries no header notes.
  for (const report of [withMomentum(undefined), mockReportData]) {
    assert.ok(!headerOf(generateWeeklyMarkdown(report)).includes('Momentum'), headerOf(generateWeeklyMarkdown(report)));
    assert.ok(!headerOf(generateSummaryMarkdown(report)).includes('Momentum'));
  }
});

test('the momentum line of the header is escaped like everything else taken from a report', () => {
  const hostile = { ...momentumSummary('change', 60), withBaseline: '<img src=x onerror=alert(1)> *bold* | [x](javascript:alert(1))' };

  const header = headerOf(generateWeeklyMarkdown(withMomentum(hostile)));

  assert.ok(!header.includes('<img'), header);
  assert.ok(header.includes('(&lt;img src=x onerror=alert(1)&gt; \\*bold\\* \\| \\[x\\](javascript:alert(1)) of 87 features have an earlier number to compare with).'), header);
});

test('the summary of the report opens with the same momentum line as the report', () => {
  const report = withMomentum(momentumSummary('footprint rank', 12));

  const summary = generateSummaryMarkdown(report);

  assert.ok(summary.includes('> **Momentum:** Momentum tiers rank this week\'s footprint'), summary);
  assert.ok(generateWeeklyMarkdown(report).startsWith(headerOf(summary)), 'the header is the report\'s own');
});

test('the deep dive says what a feature\'s tier rests on: the change since its baseline, or the footprint and why that is all there is', () => {
  const measured = generateWeeklyMarkdown(withAnalysis({
    momentumBasis: 'change', momentumChange: 45, footprint: 130, momentumBaseline: { week: '2026-W37', date: '2026-09-10', footprint: 85 },
  }));
  assert.ok(measured.includes('- **Momentum:** **High** (+45 points since 2026-09-10; footprint 130 points)\n'), measured.match(/- \*\*Momentum:\*\*.*/)?.[0]);

  const fell = generateWeeklyMarkdown(withAnalysis({
    momentumBasis: 'change', momentumChange: -7, footprint: 78, momentumBaseline: { week: null, date: '2026-09-10', footprint: 85 },
  }));
  assert.ok(fell.includes('- **Momentum:** **High** (-7 points since 2026-09-10; footprint 78 points)\n'));

  const ranked = generateWeeklyMarkdown(withAnalysis({ momentumBasis: 'footprint rank', footprint: 85 }));
  assert.ok(ranked.includes('- **Momentum:** **High** (footprint 85 points, ranked against this week\'s features because too few have an earlier number to work out a change)\n'));

  const unmeasured = generateWeeklyMarkdown(withAnalysis({ momentumBasis: 'no baseline', footprint: 85 }));
  assert.ok(unmeasured.includes('- **Momentum:** **High** (no earlier number to compare with yet; footprint 85 points)\n'));

  // An analysis from before footprints existed has only the score.
  assert.ok(generateWeeklyMarkdown(mockReportData).includes('- **Momentum:** **High** (footprint 85 points)\n'));
});

test('the momentum text of the deep dive is escaped', () => {
  const md = generateWeeklyMarkdown(withAnalysis({
    momentumBasis: 'change', momentumChange: 5, footprint: 90, momentumBaseline: { week: null, date: '<img src=x onerror=alert(1)> *bold*', footprint: 85 },
  }));

  assert.ok(!md.includes('<img'), 'the date must not become markup');
  assert.ok(md.includes('- **Momentum:** **High** (+5 points since &lt;img src=x onerror=alert(1)&gt; \\*bold\\*; footprint 90 points)\n'));
});

// --- a crawl that stopped at its deadline -----------------------------------

const partialCrawl = {
  deadlineMinutes: 40,
  elapsedMinutes: 41.3,
  reached: 118,
  notReached: Array.from({ length: 32 }, (_, i) => ({ id: 2000 + i, name: `Feature ${i}` })),
};
const PARTIAL_DETAIL =
  'The crawl reached its 40-minute deadline (41.3 minutes in) and stopped starting features: ' +
  '118 of 150 were investigated, and the other 32 are not in this report. They come first in the next crawl.';

const withCrawl = crawl => ({
  ...mockReportData,
  telemetry: { searchProvider: 'Brave', aiProvider: 'Heuristic Engine', ...(crawl && { crawl }) },
});

test('the weekly report header says that the crawl stopped at its deadline, after the momentum line and before a safety-check notice', () => {
  const telemetry = {
    searchProvider: 'Brave', aiProvider: 'Gemini', momentum: momentumSummary('footprint level', 0), crawl: partialCrawl,
    qualityOverrides: ['ChromeStatus returned fewer features'],
  };

  const header = headerOf(generateWeeklyMarkdown({ ...mockReportData, telemetry }));

  assert.strictEqual(header,
    '# 🌐 Chrome Web Platform Ecosystem Report — 2026-W35\n\n' +
    '> **Generated on:** 2026-08-27 | **Target Milestones:** Chrome 154\n' +
    '> **Search Engine:** Brave | **Analysis Model:** Gemini\n' +
    '> **Momentum:** Too few features to rank: momentum tiers are the absolute footprint levels.\n' +
    `> ⏱️ **Partial run:** ${PARTIAL_DETAIL}\n` +
    '> ⚠️ **Safety check overridden (--force):** ChromeStatus returned fewer features\n\n');
});

test('the summary of the report, which the job summary shows, carries the same note', () => {
  const summary = generateSummaryMarkdown(withCrawl(partialCrawl));

  assert.ok(summary.includes(`> ⏱️ **Partial run:** ${PARTIAL_DETAIL}\n`), summary);
  assert.ok(generateWeeklyMarkdown(withCrawl(partialCrawl)).startsWith(headerOf(summary)), 'the header is the report\'s own');
});

test('the dashboard header has a warning badge for a partial crawl, and its tooltip says why', () => {
  const html = String(generateDashboardHtml(withCrawl(partialCrawl)));

  assert.ok(
    html.includes(`<span class="badge badge-warning" title="${escapeHtml(PARTIAL_DETAIL)}">⏱ Partial: 118 of 150 features</span>`),
    html.match(/<span class="badge badge-warning"[^>]*>[^<]*/)?.[0]
  );
});

test('the dashboard puts the partial badge after the momentum badge and before the safety-check badge', () => {
  const html = String(generateDashboardHtml({
    ...mockReportData,
    telemetry: {
      searchProvider: 'Brave', aiProvider: 'Gemini', momentum: momentumSummary('change', 60), crawl: partialCrawl,
      qualityOverrides: ['ChromeStatus returned fewer features'],
    },
  }));

  const order = ['📈 Momentum', '⏱ Partial', '⚠ Safety check overridden'].map(text => html.indexOf(text));
  assert.ok(order.every(index => index > 0), `all three badges are there: ${order}`);
  assert.ok(order[0] < order[1] && order[1] < order[2], `in the order they are meant to read: ${order}`);
});

test('a crawl that reached every feature, or a report with no record of the crawl, says nothing about a deadline', () => {
  const reachedAll = { deadlineMinutes: 40, elapsedMinutes: 12, reached: 150, notReached: [] };
  const noDeadline = { deadlineMinutes: 0, elapsedMinutes: 12, reached: 150 };
  for (const crawl of [undefined, reachedAll, noDeadline]) {
    const report = withCrawl(crawl);
    assert.ok(!generateWeeklyMarkdown(report).includes('Partial'), JSON.stringify(crawl));
    assert.ok(!generateSummaryMarkdown(report).includes('Partial'));
    assert.ok(!String(generateDashboardHtml(report)).includes('Partial'));
  }
  // A report with no telemetry at all (written before there was any) has no header notes either.
  assert.ok(!generateWeeklyMarkdown(mockReportData).includes('Partial'));
  assert.ok(!String(generateDashboardHtml(mockReportData)).includes('Partial'));
});

test('the notes about a partial crawl cannot carry markup, whatever the telemetry holds', () => {
  const hostile = withCrawl({
    deadlineMinutes: '<img src=x onerror=alert(1)>',
    elapsedMinutes: '*bold* | [x](javascript:alert(1))',
    reached: '`code`',
    notReached: [{ name: '<script>alert(1)</script>' }],
  });

  const md = generateWeeklyMarkdown(hostile);
  assert.ok(md.includes(
    '> ⏱️ **Partial run:** The crawl reached its deadline and stopped starting features: 0 of 1 were investigated, ' +
    'and the other 1 is not in this report. It comes first in the next crawl.\n'
  ), headerOf(md));
  assert.ok(!md.includes('<img') && !md.includes('<script'));

  const html = String(generateDashboardHtml(hostile));
  assert.ok(html.includes('⏱ Partial: 0 of 1 features</span>'));
  assert.ok(!html.includes('<img') && !html.includes('<script>alert'));
});
