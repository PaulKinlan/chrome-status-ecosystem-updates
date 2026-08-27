import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config.js';

export function generateRssFeed(reportData) {
  const { weekString, date, milestones, features } = reportData;

  const itemsXml = features.slice(0, 30).map(item => {
    const f = item.feature;
    const a = item.analysis;
    const desc = `<p><strong>${f.name}</strong> (Chrome ${f.milestone}, ${f.category})</p><p>${escapeXml(f.summary)}</p><p><strong>Ecosystem Analysis:</strong> ${escapeXml(a.executiveSummary)}</p>`;

    return `    <item>
      <title>${escapeXml(f.name)} — Chrome ${f.milestone} Ecosystem Update</title>
      <link>${escapeXml(f.chromeStatusUrl)}</link>
      <guid isPermaLink="false">${f.id}-${weekString}</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <description>${escapeXml(desc)}</description>
    </item>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Chrome Web Platform Ecosystem Updates</title>
    <link>https://chromestatuslite.com</link>
    <description>Weekly web intelligence on ChromeStatus features, web standards, and developer community pulse</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${itemsXml}
  </channel>
</rss>`;
}

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/[<>&'"]/g, c => {
      switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
      }
    });
}

export async function writeRssFeed(reportData) {
  await fs.mkdir(config.reportsDir, { recursive: true });
  const xml = generateRssFeed(reportData);
  const filePath = path.join(config.reportsDir, 'feed.xml');
  await fs.writeFile(filePath, xml, 'utf-8');
  return filePath;
}
