import test from 'node:test';
import assert from 'node:assert';
import { generateWeeklyMarkdown, getIsoWeekString } from '../src/reporters/markdown.js';
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
