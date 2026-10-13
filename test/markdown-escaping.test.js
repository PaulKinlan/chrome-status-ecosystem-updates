import './_support/setup.js'; // keep first: blanks credentials, redirects output, blocks real network
import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { config } from '../src/config.js';
import { generateWeeklyMarkdown, writeMarkdownReports } from '../src/reporters/markdown.js';
import { markdownCode } from '../src/reporters/escape.js';

/**
 * Everything the Markdown reports print that a third party (a web page, npm,
 * a bug tracker, an LLM) wrote must come out as text, never as markup.
 *
 * GitHub and most static-site generators pass raw HTML in Markdown through, so
 * one unescaped `<img onerror=...>` in a page excerpt becomes a live element on
 * a site that is published without review.
 */

const TAG = '<img src=x onerror=alert(1)>';
// Closes a code span, then opens markup.
const BREAKOUT = `\`${TAG}\``;
const HOSTILE = `${TAG} *bold* [link](javascript:alert(1)) ${BREAKOUT} | pipe\n# injected heading`;
// The space makes markdownUrl use its angle-bracket form; the `>` used to end it early.
const HOSTILE_URL = `https://example.com/a b>${TAG}`;

function hostileItem() {
  return {
    feature: {
      id: 4242,
      slug: '4242-hostile',
      name: HOSTILE,
      summary: HOSTILE,
      motivation: HOSTILE,
      milestone: 154,
      category: 'Enabled by default',
      statusType: 'enabled',
      specUrl: HOSTILE_URL,
      bugUrl: HOSTILE_URL,
      chromeStatusUrl: 'https://chromestatus.com/feature/4242',
      chromeStatusLiteUrl: 'https://chromestatuslite.com/feature/4242',
      browsers: { chrome: { status: 'Enabled' }, firefox: { view: 'No signal' }, safari: { view: 'No signal' } },
    },
    ecosystem: {
      metrics: {},
      discussions: [{ source: HOSTILE, title: HOSTILE, url: HOSTILE_URL, points: 1, commentsCount: 1, author: HOSTILE }],
      standards: [{ vendor: HOSTILE, title: HOSTILE, url: HOSTILE_URL, state: HOSTILE, labels: [HOSTILE, '`'], commentSummary: HOSTILE }],
      bugs: [{ vendor: HOSTILE, id: HOSTILE, title: HOSTILE, url: HOSTILE_URL, status: HOSTILE, resolution: HOSTILE }],
      packages: [{ name: HOSTILE, version: HOSTILE, description: HOSTILE, isPolyfill: true }],
      blogs: [{ title: HOSTILE, url: HOSTILE_URL, domain: HOSTILE, author: HOSTILE, publishedAt: HOSTILE, contentExcerpt: HOSTILE }],
      docs: [{ title: HOSTILE, url: HOSTILE_URL, domain: HOSTILE }],
      reverseLinks: [{
        title: HOSTILE, url: HOSTILE_URL, domain: HOSTILE, author: HOSTILE, publishedAt: HOSTILE,
        reverseLinkedTo: HOSTILE, snippet: HOSTILE,
      }],
      resources: [{ type: 'demo', title: HOSTILE, url: HOSTILE_URL }],
      wpt: {
        source: 'Web Platform Tests', type: 'test', scope: 'group', webFeatureId: HOSTILE, url: HOSTILE_URL,
        passRates: { stable: { chrome: 96.8, firefox: 90 }, experimental: { chrome: 97.1 } },
      },
      webFeature: {
        id: HOSTILE, scope: 'group', groupSize: 3, url: HOSTILE_URL, wptUrl: HOSTILE_URL,
        positions: [
          { vendor: HOSTILE, position: HOSTILE, concerns: [HOSTILE, '`'], url: HOSTILE_URL },
          { vendor: 'WebKit', position: null, concerns: [], url: HOSTILE_URL },
        ],
        usage: { percentageOfPageLoad: 1.5, url: HOSTILE_URL },
      },
      baseline: { featureId: HOSTILE, statusLabel: HOSTILE, url: HOSTILE_URL, browserSupport: {}, scope: 'group' },
      auditTrail: {
        searchesExecuted: [
          { provider: HOSTILE, status: HOSTILE },
          {
            provider: HOSTILE, rawFound: 2, verified: 1,
            queryAudits: [{ query: HOSTILE, description: HOSTILE, count: 1, isReverseLink: true }],
          },
          { type: HOSTILE, count: 3 },
        ],
        contentInspected: { hasSpec: true, explainerCount: 1, standardsCommentsRead: 1, webArticleExcerptsRead: 1 },
      },
    },
    analysis: {
      momentumScore: 10,
      momentumLevel: 'Quiet',
      consensus: 'Chromium-Led',
      sentiment: 'Neutral',
      executiveSummary: HOSTILE,
      takeaways: [HOSTILE],
      isGroundedWithGoogleSearch: true,
      groundedQueries: [HOSTILE, '`', '``'],
    },
    delta: { isNewFeature: true, newArticlesCount: 1, newDiscussionsCount: 1 },
  };
}

function hostileReport() {
  return {
    weekString: '2026-W41',
    date: '2026-10-07',
    milestones: [154],
    telemetry: { searchProvider: 'Brave', aiProvider: 'Heuristic Engine', qualityOverrides: [HOSTILE] },
    features: [hostileItem()],
  };
}

// --- A small model of what a CommonMark renderer would interpret -------------------------------------------------

/** Index of the next run of exactly `n` backticks at or after `from`, or -1. */
function findClosingRun(text, from, n) {
  let j = from;
  while (j < text.length) {
    if (text[j] !== '`') { j++; continue; }
    let m = 0;
    while (text[j + m] === '`') m++;
    if (m === n) return j;
    j += m;
  }
  return -1;
}

/**
 * What is left of a line once code spans are removed. A span's content is
 * literal, so markup inside one is harmless; a backslash-escaped character is
 * literal too, so it is dropped as well. An opening run with no matching closer
 * is plain text.
 */
function withoutCodeSpans(line) {
  let out = '';
  let i = 0;
  while (i < line.length) {
    const ch = line[i];
    if (ch === '\\') { i += 2; continue; }
    if (ch !== '`') { out += ch; i++; continue; }
    let n = 0;
    while (line[i + n] === '`') n++;
    const close = findClosingRun(line, i + n, n);
    if (close === -1) { out += line.slice(i, i + n); i += n; } else { i = close + n; }
  }
  return out;
}

// The only markup the reporter writes itself: the section anchor, and link
// destinations in angle-bracket form (which must not contain `<`, `>` or a line break).
const OWN_ANCHOR = /<a id="[^"<>]*"><\/a>/g;
const ANGLE_DESTINATION = /\]\(<[^<>\r\n]*>\)/g;

/** Lines in which something other than text would be rendered. Judged line by line so that no span can hide a later line. */
function linesWithLiveMarkup(markdown) {
  return markdown.split('\n').filter(line => {
    const rest = withoutCodeSpans(line.replace(OWN_ANCHOR, '').replace(ANGLE_DESTINATION, ']()'));
    return /</.test(rest) || /\]\(javascript:/i.test(rest);
  });
}

test('the checker itself recognises the defects this file guards against', () => {
  // Without these, a checker that never fires would make every test below pass.
  assert.ok(linesWithLiveMarkup('- [x](<https://example.com/a b><img src=x>)').length > 0, 'a URL that closes its brackets early');
  assert.ok(linesWithLiveMarkup('- **Search Queries:** `"a` <img src=x> `b"`').length > 0, 'a code span that is closed by the text inside it');
  assert.ok(linesWithLiveMarkup('  > <iframe src=x>').length > 0, 'raw HTML in a blockquote');
  assert.ok(linesWithLiveMarkup('see [here](javascript:alert(1))').length > 0, 'a javascript: link');
  // ...and does not cry wolf about what the reporter legitimately writes.
  assert.deepStrictEqual(linesWithLiveMarkup('<a id="x"></a>'), []);
  assert.deepStrictEqual(linesWithLiveMarkup('- [x](<https://example.com/a%20b%3E>)'), []);
  assert.deepStrictEqual(linesWithLiveMarkup('- `<img src=x>` and &lt;img&gt; and \\<b\\>'), []);
});

test('the weekly report prints nothing a third party wrote as live markup', () => {
  const md = generateWeeklyMarkdown(hostileReport());

  assert.deepStrictEqual(linesWithLiveMarkup(md), [], 'these lines would render as markup');
  assert.ok(!/^#+ injected heading/m.test(md), 'a line break in crawled text must not start a new block');
  assert.ok(md.includes('&lt;img src=x onerror=alert(1)&gt;'), 'the payload should still be visible, as text');
  // The web-features group lines are among those checked: without them the check above would say nothing about them.
  assert.ok(md.includes('Share of tests passing in the web-features group'), 'the test results of the group are printed');
  assert.ok(md.includes('#### 🌐 Web-features Group Context'), 'the usage and positions of the group are printed');
  assert.ok(md.includes('group-level data: web-features'), 'and are labelled as the group\'s');
});

test('the single-feature pages print nothing a third party wrote as live markup', async (t) => {
  const reportsDir = await fs.mkdtemp(path.join(os.tmpdir(), 'markdown-escaping-'));
  const saved = config.reportsDir;
  config.reportsDir = reportsDir;
  t.after(async () => {
    config.reportsDir = saved;
    await fs.rm(reportsDir, { recursive: true, force: true });
  });

  await writeMarkdownReports(hostileReport());
  const md = await fs.readFile(path.join(reportsDir, 'features', '4242-hostile.md'), 'utf-8');

  assert.deepStrictEqual(linesWithLiveMarkup(md), [], 'these lines would render as markup');
  assert.ok(!/^#+ injected heading/m.test(md), 'a line break in crawled text must not start a new block');
  assert.ok(md.includes('&lt;img src=x onerror=alert(1)&gt;'), 'the payload should still be visible, as text');
  assert.ok(md.includes('## Web-features Group'), 'the group section is part of what was checked');
  assert.ok(md.includes('group-level data: web-features'), 'and says whose data it is');
});

test('search queries chosen by the model stay inside their code spans', () => {
  const queries = ['a` <img src=x> `b', '`', '``', '`lead', 'trail`'];
  const item = hostileItem();
  item.analysis.groundedQueries = queries;
  const md = generateWeeklyMarkdown({ ...hostileReport(), features: [item] });

  const expected = `- **Search Queries:** ${queries.map(q => markdownCode(`"${q}"`)).join(', ')}`;
  assert.ok(md.split('\n').includes(expected), `expected the line\n${expected}`);
});

test('an excerpt is cut to length first and escaped after, never cut through an entity', () => {
  // htmlToText turns `&lt;` in a page into a real `<`, so excerpts do contain them.
  const item = hostileItem();
  item.ecosystem.blogs[0].contentExcerpt = '<'.repeat(300);
  const md = generateWeeklyMarkdown({ ...hostileReport(), features: [item] });

  const line = md.split('\n').find(l => l.startsWith('  > &lt;'));
  assert.strictEqual(line, `  > ${'&lt;'.repeat(220)}...`);
});

test('a forced publish is announced in the header, with its text escaped', () => {
  const md = generateWeeklyMarkdown(hostileReport());
  const header = md.split('\n').find(l => l.startsWith('> ⚠️ **Safety check overridden (--force):**'));
  assert.ok(header, 'the override line must be there');
  assert.ok(!header.includes('<'), header);

  const quiet = generateWeeklyMarkdown({ ...hostileReport(), telemetry: { searchProvider: 'Brave', aiProvider: 'Heuristic Engine', qualityOverrides: [] } });
  assert.ok(!quiet.includes('Safety check overridden'), 'no override, no line');
});
