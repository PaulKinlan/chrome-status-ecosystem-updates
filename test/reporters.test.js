import test from 'node:test';
import assert from 'node:assert';
import { generateWeeklyMarkdown, getIsoWeekString } from '../src/reporters/markdown.js';
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
  assert.ok(html.includes('<!doctype html>'));
  assert.ok(html.includes('Web Install API'));
  assert.ok(html.includes('Chrome Ecosystem Updates'));
  assert.ok(html.includes('High Momentum'));
});

test('generateRssFeed outputs valid RSS 2.0 XML', () => {
  const rss = generateRssFeed(mockReportData);
  assert.ok(rss.includes('<rss version="2.0">'));
  assert.ok(rss.includes('<title>Web Install API — Chrome 154 Ecosystem Update</title>'));
});
