import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config.js';
import { escapeXml, cdata, isSafeUrl } from './escape.js';

const FEED_TITLE = 'Chrome Web Platform Ecosystem Updates';
const FEED_HOME = 'https://chromestatuslite.com';
const FEED_DESCRIPTION =
  'Weekly web intelligence on ChromeStatus features, web standards, and developer community pulse';

/**
 * Derives a stable publication date for an item.
 *
 * Using `new Date()` per item (as this previously did) re-dates all thirty
 * entries on every build, so every subscriber sees the entire feed resurface as
 * unread each week.
 */
function itemPubDate(feature, fallbackIso) {
  const candidate = feature.updated || feature.created || fallbackIso;
  const d = new Date(candidate);
  return Number.isNaN(d.getTime()) ? new Date(fallbackIso).toUTCString() : d.toUTCString();
}

export function generateRssFeed(reportData) {
  const { weekString, features, generatedAt } = reportData;
  const builtAt = generatedAt || new Date().toISOString();
  const selfUrl = `${FEED_HOME}/feed.xml`;

  const itemsXml = features.slice(0, 30).map(item => {
    const f = item.feature;
    const a = item.analysis || {};

    // Build the HTML body ONCE, escaping each untrusted field exactly once, then
    // hand the finished markup to CDATA. The previous implementation escaped the
    // fields and then escaped the whole assembled string again, which shipped
    // literal "&lt;number&gt;" text to subscribers, while interpolating the raw
    // feature name so it survived as live HTML after the reader's single unescape.
    const parts = [
      `<p><strong>${escapeXml(f.name)}</strong> (Chrome ${escapeXml(f.milestone)}, ${escapeXml(f.category)})</p>`,
      `<p>${escapeXml(f.summary)}</p>`,
    ];
    if (a.executiveSummary) {
      parts.push(`<p><strong>Ecosystem Analysis:</strong> ${escapeXml(a.executiveSummary)}</p>`);
    }
    const desc = parts.join('');

    const link = isSafeUrl(f.chromeStatusUrl)
      ? f.chromeStatusUrl
      : `https://chromestatus.com/feature/${encodeURIComponent(f.id)}`;

    const categoryXml = f.category
      ? `\n      <category>${escapeXml(f.category)}</category>`
      : '';

    return `    <item>
      <title>${escapeXml(f.name)} — Chrome ${escapeXml(f.milestone)} Ecosystem Update</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="false">chromestatus-feature-${escapeXml(f.id)}</guid>
      <pubDate>${escapeXml(itemPubDate(f, builtAt))}</pubDate>${categoryXml}
      <description>${cdata(desc)}</description>
    </item>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${escapeXml(FEED_HOME)}</link>
    <atom:link href="${escapeXml(selfUrl)}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en</language>
    <lastBuildDate>${escapeXml(new Date(builtAt).toUTCString())}</lastBuildDate>
    <generator>chrome-status-ecosystem-updates${weekString ? ` (${escapeXml(weekString)})` : ''}</generator>
${itemsXml}
  </channel>
</rss>`;
}

export async function writeRssFeed(reportData) {
  await fs.mkdir(config.reportsDir, { recursive: true });
  const xml = generateRssFeed(reportData);
  const filePath = path.join(config.reportsDir, 'feed.xml');
  await fs.writeFile(filePath, xml, 'utf-8');
  return filePath;
}
