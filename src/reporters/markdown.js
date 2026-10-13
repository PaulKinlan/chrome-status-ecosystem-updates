import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config.js';
import { logger } from '../logger.js';
import { describeBasis, describeMomentum } from '../momentum.js';
import { describeCrawl } from '../crawl-budget.js';
import { escapeMarkdown, escapeMarkdownCell, markdownUrl, markdownCode, escapeHtml } from './escape.js';
import { toFeatureView } from './viewmodel.js';

/**
 * Escapes HTML tags and markdown table pipes to prevent raw HTML elements (like <iframe>)
 */

/** How the browsers are named next to a pass rate. */
const BROWSER_NAMES = [['chrome', 'Chrome'], ['edge', 'Edge'], ['firefox', 'Firefox'], ['safari', 'Safari']];

/** "Chrome 96.8% · Edge 94.8%" for the pass rates of one channel; empty when there are none. */
function passRateText(rates) {
  return BROWSER_NAMES
    .filter(([key]) => typeof rates?.[key] === 'number' && Number.isFinite(rates[key]))
    .map(([key, name]) => `${name} ${Math.round(rates[key] * 10) / 10}%`)
    .join(' · ');
}

/** Says whose data a figure is: the web-features group, which can be broader than this one ChromeStatus feature. */
function groupNote(webGroup) {
  const shared = webGroup.sharedWith > 0
    ? `, shared with ${webGroup.sharedWith} other ChromeStatus feature${webGroup.sharedWith === 1 ? '' : 's'}`
    : '';
  return `group-level data: web-features [${markdownCode(webGroup.id)}](${markdownUrl(webGroup.url)})${shared}`;
}

/** The line about a group's Web Platform Tests results. */
function wptLine(wpt, webGroup) {
  const group = markdownCode(wpt.webFeatureId || webGroup?.id || '');
  const stable = passRateText(wpt.passRates?.stable);
  const experimental = passRateText(wpt.passRates?.experimental);
  if (!stable && !experimental) {
    return `Results of the web-features group ${group} on [wpt.fyi](${markdownUrl(wpt.url)}) (webstatus.dev has no pass rates for it)`;
  }
  const rates = [stable && `stable: ${stable}`, experimental && `experimental: ${experimental}`].filter(Boolean).join('; ');
  return `Share of tests passing in the web-features group ${group} on [wpt.fyi](${markdownUrl(wpt.url)}) (via webstatus.dev) — ${rates}`;
}

/** A share of page loads (a percentage) in two significant digits: 0.85%, 1.5%, 12%. */
function usageShare(percent) {
  return `${Number(percent.toPrecision(2))}%`;
}

/** Lines about the group a feature belongs to that are not Baseline or test results: Chrome usage and the vendors' positions. */
function groupContextLines(eco) {
  const group = eco.webFeature;

  const lines = [];
  const share = group?.usage?.percentageOfPageLoad;
  if (typeof share === 'number' && Number.isFinite(share) && share >= 0) {
    const source = group.usage.url ? ` ([use counter](${markdownUrl(group.usage.url)}))` : '';
    lines.push(`- **Chrome usage:** ${usageShare(share)} of page loads${source}`);
  }
  for (const position of Array.isArray(group?.positions) ? group.positions : []) {
    const stance = position.position ? escapeMarkdown(position.position) : 'no position recorded';
    const concerns = Array.isArray(position.concerns) && position.concerns.length > 0
      ? ` · concerns: ${position.concerns.map(concern => markdownCode(concern)).join(', ')}`
      : '';
    lines.push(`- **${escapeMarkdown(position.vendor)}:** ${stance} ([standards position](${markdownUrl(position.url)}))${concerns}`);
  }
  return lines;
}

/**
 * Returns ISO week string e.g. "2026-W35", of the UTC calendar day of `date`: the day `isoDay` gives, which is what
 * the report is dated and what the history keys a week's numbers by, wherever the program runs.
 */
export function getIsoWeekString(date = new Date()) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
}

/**
 * The title, the line saying when and for which milestones, and the notes a reader must not miss: which
 * engines wrote the report, how many features the AI synthesis reached, what the momentum tiers rest on, a crawl
 * that ran out of time, and a forced publication.
 */
function reportHeader(reportData) {
  const { weekString, date, milestones } = reportData;

  let md = `# 🌐 Chrome Web Platform Ecosystem Report — ${weekString}\n\n`;
  md += `> **Generated on:** ${date} | **Target Milestones:** Chrome ${milestones.join(', ')}\n`;
  if (reportData.telemetry) {
    md += `> **Search Engine:** ${reportData.telemetry.searchProvider} | **Analysis Model:** ${reportData.telemetry.aiProvider}`;
    // Said outright so a week in which the model could not answer is not mistaken for a complete one.
    const coverage = reportData.telemetry.aiCoverage;
    if (coverage?.configured) {
      md += ` | **AI synthesis:** ${coverage.withAi} of ${coverage.total} features`;
    }
    md += `\n`;

    // What the momentum tiers below rest on, so that a tier is never taken for more than it is.
    if (reportData.telemetry.momentum) {
      md += `> **Momentum:** ${escapeMarkdown(describeBasis(reportData.telemetry.momentum).detail)}\n`;
    }

    // A crawl that ran out of time published what it had; the features it did not reach are not in this report.
    const partial = describeCrawl(reportData.telemetry.crawl);
    if (partial) {
      md += `> ⏱️ **Partial run:** ${partial.detail}\n`;
    }

    // A report published with --force went past a safety check; it says which, up here, where it cannot be missed.
    const overrides = reportData.telemetry.qualityOverrides;
    if (Array.isArray(overrides) && overrides.length > 0) {
      md += `> ⚠️ **Safety check overridden (--force):** ${overrides.map(escapeMarkdown).join(' ')}\n`;
    }
  }
  md += `\n`;

  return md;
}

/** The Executive Snapshot: the handful of counts a week is judged by. A fixed number of lines, however many features there are. */
function executiveSnapshot(features) {
  const totalFeatures = features.length;
  const highMomentum = features.filter(f => f.analysis.momentumLevel === 'High');
  const multiEngine = features.filter(f => f.analysis.consensus === 'Multi-Engine Consensus');
  const contested = features.filter(f => (f.analysis.consensus || '').includes('Contested') || (f.analysis.consensus || '').includes('Concerns'));
  const newActivityCount = features.reduce((acc, f) => acc + (f.delta?.newArticlesCount || 0) + (f.delta?.newDiscussionsCount || 0), 0);

  let md = `## 📊 Executive Snapshot\n\n`;
  md += `| Metric | Count | Description |\n`;
  md += `| :--- | :--- | :--- |\n`;
  md += `| **Features Tracked** | \`${totalFeatures}\` | APIs & platform features analyzed across milestones |\n`;
  md += `| **High Ecosystem Momentum** | \`${highMomentum.length}\` | Features in the highest momentum tier (see Methodology) |\n`;
  md += `| **Multi-Engine Consensus** | \`${multiEngine.length}\` | Broad alignment across Chromium, Gecko, and WebKit |\n`;
  md += `| **Contested / Concerns** | \`${contested.length}\` | Features with open vendor or security/privacy objections |\n`;
  md += `| **New Mentions This Week** | \`${newActivityCount}\` | Net new articles, discussions, or standards updates |\n\n`;

  return md;
}

/**
 * Generates the full weekly Markdown report
 */
export function generateWeeklyMarkdown(reportData) {
  const { features } = reportData;

  let md = reportHeader(reportData) + executiveSnapshot(features);

  // Week-over-Week Deltas Rollup
  const statusChanges = features.filter(f => f.delta?.statusChanged);
  const momentumShifts = features.filter(f => f.delta?.momentumChanged);
  const newFeatures = features.filter(f => f.delta?.isNewFeature);
  const newActivityFeatures = features.filter(f => !f.delta?.isNewFeature && ((f.delta?.newArticlesCount || 0) > 0 || (f.delta?.newDiscussionsCount || 0) > 0));

  if (statusChanges.length > 0 || momentumShifts.length > 0 || newFeatures.length > 0 || newActivityFeatures.length > 0) {
    md += `## ⚡ Week-over-Week Ecosystem Deltas\n\n`;

    if (statusChanges.length > 0) {
      md += `### 🔄 Status Transitions\n\n`;
      for (const item of statusChanges) {
        md += `- [${escapeMarkdown(item.feature.name)}](#${toFeatureView(item).slug}): Moved from *${item.delta.previousStatus || 'N/A'}* to **${item.feature.category}** in Chrome ${item.feature.milestone || ''}\n`;
      }
      md += `\n`;
    }

    if (momentumShifts.length > 0) {
      md += `### 🚀 Momentum Shifts\n\n`;
      for (const item of momentumShifts) {
        md += `- [${escapeMarkdown(item.feature.name)}](#${toFeatureView(item).slug}): Shifted from *${item.delta.previousMomentum}* to **${item.analysis.momentumLevel}** momentum\n`;
      }
      md += `\n`;
    }

    if (newActivityFeatures.length > 0) {
      md += `### 📰 Net New Publications & Discussions\n\n`;
      for (const item of newActivityFeatures.slice(0, 10)) {
        const parts = [];
        if (item.delta.newArticlesCount > 0) parts.push(`${item.delta.newArticlesCount} article(s)`);
        if (item.delta.newDiscussionsCount > 0) parts.push(`${item.delta.newDiscussionsCount} discussion(s)`);
        md += `- [${escapeMarkdown(item.feature.name)}](#${toFeatureView(item).slug}): +${parts.join(', ')}\n`;
      }
      md += `\n`;
    }

    if (newFeatures.length > 0) {
      md += `### ✨ Newly Tracked Features\n\n`;
      for (const item of newFeatures.slice(0, 10)) {
        md += `- [${escapeMarkdown(item.feature.name)}](#${toFeatureView(item).slug}) (Chrome ${item.feature.milestone || ''}, ${item.feature.category})\n`;
      }
      md += `\n`;
    }

    md += `---\n\n`;
  }

  // Quick Navigation Table
  md += `## 📋 Features Index\n\n`;
  md += `| Feature | Milestone | Category | Momentum | Consensus | Week Delta |\n`;
  md += `| :--- | :--- | :--- | :--- | :--- | :--- |\n`;

  for (const item of features) {
    const view = toFeatureView(item);
    const { f, a, eco, delta, blogs, docs, deltaSummary, sliceLimits } = view;
    
    const anchor = `#${view.slug}`;
        md += `| [${escapeMarkdown(f.name)}](${anchor}) | Chrome ${f.milestone || ''} | \`${f.category}\` | **${escapeMarkdownCell(a.momentumLevel)}** | ${escapeMarkdownCell(a.consensus)} | ${escapeMarkdownCell(deltaSummary)} |\n`;
  }
  md += `\n---\n\n`;

  // Feature Deep Dives
  md += `## 🔍 Feature Ecosystem Deep Dives\n\n`;

  for (const item of features) {
    const view = toFeatureView(item);
    const { f, a, eco, delta, blogs, docs, deltaSummary, sliceLimits } = view;

    // This is a raw HTML anchor embedded in Markdown, so it needs HTML
    // attribute encoding rather than Markdown backslash escaping.
    md += `<a id="${escapeHtml(view.slug)}"></a>\n`;
    md += `### [${escapeMarkdown(f.name)}](${markdownUrl(f.chromeStatusUrl)})\n\n`;

    // Metadata Bar
    md += `- **Milestone:** Chrome ${f.milestone || 'N/A'} (${f.category})${view.milestoneNote ? ` · ${view.milestoneNote}` : ''}\n`;
    md += `- **ChromeStatus:** [chromestatus.com/feature/${f.id}](${markdownUrl(f.chromeStatusUrl)}) · [chromestatuslite.com/feature/${f.id}](${markdownUrl(f.chromeStatusLiteUrl)})\n`;
    if (f.specUrl) md += `- **Specification:** [${escapeMarkdown(f.specUrl)}](${markdownUrl(f.specUrl)})\n`;
    if (f.bugUrl) md += `- **Chromium Bug:** [${escapeMarkdown(f.bugUrl)}](${markdownUrl(f.bugUrl)})\n`;
    md += `- **Browser Signals:** Chrome: \`${view.chromiumStage}\` · Firefox: \`${f.browsers?.firefox?.view || 'No signal'}\` · Safari: \`${f.browsers?.safari?.view || 'No signal'}\`\n`;
    if (eco.baseline) {
      md += `- **Baseline Interoperability:** [${escapeMarkdown(eco.baseline.statusLabel)}](${markdownUrl(eco.baseline.url)}) (Chrome: \`${eco.baseline.browserSupport?.chrome || '—'}\`, Firefox: \`${eco.baseline.browserSupport?.firefox || '—'}\`, Safari: \`${eco.baseline.browserSupport?.safari || '—'}\`)${view.webGroup ? ` · *${groupNote(view.webGroup)}*` : ''}\n`;
    }
    md += `\n`;

    // Summary & Motivation
    md += `#### 📝 Overview\n\n`;
    md += `${escapeMarkdown(f.summary)}\n\n`;
    if (f.motivation) {
      md += `> **Motivation:** ${escapeMarkdown(f.motivation.slice(0, 350))}${f.motivation.length > 350 ? '...' : ''}\n\n`;
    }

    // Ecosystem Analysis
    md += `#### 💡 Ecosystem Intelligence & Analysis\n\n`;
    md += `- **Momentum:** **${a.momentumLevel}** (${escapeMarkdown(describeMomentum(a))})\n`;
    md += `- **Consensus:** **${a.consensus}**\n`;
    md += `- **Developer Sentiment:** **${a.sentiment}**\n`;
    if (a.isGroundedWithGoogleSearch) {
      md += `- **Google Search Grounding:** Enabled via Gemini\n`;
    }
    if (a.groundedQueries && a.groundedQueries.length > 0) {
      md += `- **Search Queries:** ${a.groundedQueries.map(q => markdownCode(`"${q}"`)).join(', ')}\n`;
    }
    md += `- **Analysis:** ${escapeMarkdown(a.executiveSummary)}\n\n`;

    if (a.takeaways && a.takeaways.length > 0) {
      md += `**Key Recommendations & Takeaways:**\n`;
      for (const t of a.takeaways) {
        md += `- ${escapeMarkdown(t)}\n`;
      }
      md += `\n`;
    }

    // Delta / What's New This Week
    if (delta && (delta.newArticlesCount > 0 || delta.newDiscussionsCount > 0 || delta.statusChanged)) {
      md += `#### ⚡ What Happened This Week\n\n`;
      if (delta.statusChanged) {
        md += `- 🔄 **Status Change:** Moved from *${delta.previousStatus}* to *${f.category}*\n`;
      }
      if (delta.newDiscussionsCount > 0) {
        md += `- 💬 **${delta.newDiscussionsCount} new community discussions** found\n`;
      }
      if (delta.newArticlesCount > 0) {
        md += `- 📰 **${delta.newArticlesCount} new articles/tutorials** published\n`;
      }
      md += `\n`;
    }

    // Community Discussions (HN / Twitter / Forums)
    if (eco.discussions && eco.discussions.length > 0) {
      md += `#### 💬 Community Discussions & Developer Reactions\n\n`;
      for (const disc of eco.discussions.slice(0, sliceLimits.discussions)) {
        const icon = (disc.source || '').includes('Twitter') ? '🐦' : '💬';
        const authorSuffix = disc.author ? ` by ${escapeMarkdown(disc.author)}` : '';
        const metricsStr = (disc.source || '').includes('Twitter')
          ? `${disc.points || 0} likes/RTs, ${disc.commentsCount || 0} replies`
          : `${disc.points || 0} pts, ${disc.commentsCount || 0} comments`;
        md += `- ${icon} [${escapeMarkdown(disc.title)}](${markdownUrl(disc.discussionUrl || disc.url)}) — *${escapeMarkdown(disc.source)}${authorSuffix} (${metricsStr})*\n`;
      }
      md += `\n`;
    }

    // Standards Positions
    if (eco.standards && eco.standards.length > 0) {
      md += `#### 🏛️ Browser Standards Positions\n\n`;
      for (const std of eco.standards) {
        const labelsStr = (std.labels || []).length > 0 ? std.labels.map(label => markdownCode(label)).join(', ') : '';
        md += `- **${escapeMarkdown(std.vendor)}:** [${escapeMarkdown(std.title)}](${markdownUrl(std.url)}) [${escapeMarkdown(std.state)}] ${labelsStr}\n`;
        if (std.commentSummary) {
          md += `  > *${escapeMarkdown(std.commentSummary)}*\n`;
        }
      }
      md += `\n`;
    }

    // Engine Bug Trackers (Mozilla Bugzilla & WebKit Bugzilla)
    if (eco.bugs && eco.bugs.length > 0) {
      md += `#### 🐛 Engine Bug Trackers (Bugzilla)\n\n`;
      for (const bug of eco.bugs) {
        md += `- **${escapeMarkdown(bug.vendor)}:** [Bug #${escapeMarkdown(bug.id)}: ${escapeMarkdown(bug.title)}](${markdownUrl(bug.url)}) ${markdownCode(`[${bug.status}${bug.resolution ? ` (${bug.resolution})` : ''}]`)}\n`;
      }
      md += `\n`;
    }

    // Polyfills & NPM Packages
    if (eco.packages && eco.packages.length > 0) {
      md += `#### 📦 Polyfills & NPM Ecosystem\n\n`;
      for (const pkg of eco.packages) {
        const polyBadge = pkg.isPolyfill ? ' *(Verified Polyfill)*' : '';
        md += `- [${escapeMarkdown(pkg.name)}](${markdownUrl(`https://www.npmjs.com/package/${pkg.name}`)}) ${markdownCode(`v${pkg.version}`)}${polyBadge} — ${escapeMarkdown(pkg.description)}\n`;
      }
      md += `\n`;
    }

    // Ecosystem Blogs & Articles
    
    if (blogs.length > 0) {
      md += `#### 📰 Ecosystem Blogs & Articles\n\n`;
      for (const art of blogs.slice(0, sliceLimits.blogs)) {
        const meta = [art.domain, art.author, art.publishedAt].filter(Boolean).join(' · ');
        md += `- [${escapeMarkdown(art.title)}](${markdownUrl(art.url)}) ${meta ? `*(${escapeMarkdown(meta)})*` : ''}\n`;
        const snippet = (art.contentExcerpt || art.snippet || '').trim();
        if (snippet) {
          md += `  > ${escapeMarkdown(snippet.slice(0, 220))}${snippet.length > 220 ? '...' : ''}\n`;
        }
      }
      md += `\n`;
    }

    // Inbound Citations & Reverse Links
    if (eco.reverseLinks && eco.reverseLinks.length > 0) {
      md += `#### 🔗 Inbound Citations & Reverse Links\n\n`;
      for (const link of eco.reverseLinks.slice(0, sliceLimits.reverseLinks)) {
        const meta = [link.domain, link.author, link.publishedAt].filter(Boolean).join(' · ');
        const targetLabel = link.reverseLinkedTo ? `*(Cites: ${markdownCode(link.reverseLinkedTo)})*` : '';
        md += `- [${escapeMarkdown(link.title)}](${markdownUrl(link.url)}) ${meta ? `*(${escapeMarkdown(meta)})*` : ''} ${targetLabel}\n`;
        const snippet = (link.contentExcerpt || link.snippet || '').trim();
        if (snippet) {
          md += `  > ${escapeMarkdown(snippet.slice(0, 220))}${snippet.length > 220 ? '...' : ''}\n`;
        }
      }
      md += `\n`;
    }

    // Platform Documentation & References
    
    if (docs.length > 0) {
      md += `#### 📚 Platform Documentation & References\n\n`;
      for (const doc of docs.slice(0, sliceLimits.docs)) {
        md += `- [${escapeMarkdown(doc.title)}](${markdownUrl(doc.url)}) ${doc.domain ? `*(${escapeMarkdown(doc.domain)})*` : ''}\n`;
      }
      md += `\n`;
    }

    // Demos & Samples
    const demos = (eco.resources || []).filter(r => r.type === 'demo');
    if (demos.length > 0) {
      md += `#### 🧪 Interactive Demos & Samples\n\n`;
      for (const demo of demos) {
        md += `- [${escapeMarkdown(demo.title)}](${markdownUrl(demo.url)})\n`;
      }
      md += `\n`;
    }

    // Web Platform Tests
    if (eco.wpt?.url) {
      md += `#### 🧪 Web Platform Tests (WPT)\n\n`;
      md += `- ${wptLine(eco.wpt, view.webGroup)}\n\n`;
    }

    // What the web-features mapping says about the group the feature belongs to
    const contextLines = view.webGroup ? groupContextLines(eco) : [];
    if (contextLines.length > 0) {
      md += `#### 🌐 Web-features Group Context\n\n`;
      md += `*${groupNote(view.webGroup)}*\n\n`;
      md += `${contextLines.join('\n')}\n\n`;
    }

    // Investigation Audit Trail
    if (eco.auditTrail) {
      md += `#### 🔍 Investigation Audit Trail\n\n`;
      const searchSummaries = (eco.auditTrail.searchesExecuted || []).map(s => {
        const name = s.provider || s.type;
        if (s.status) return `${markdownCode(name)} *(${escapeMarkdown(s.status)})*`;
        const queryCountStr = s.queryAudits?.length ? ` across ${s.queryAudits.length} planned queries` : '';
        const countStr = s.rawFound !== undefined ? `${s.rawFound} found${queryCountStr}, ${s.verified} verified` : `${s.count || 0} items`;
        return `${markdownCode(name)} (${countStr})`;
      });
      md += `- **Searches Run:** ${searchSummaries.join(' · ')}\n`;
      md += `- **Content Inspected:** Spec: ${eco.auditTrail.contentInspected?.hasSpec ? '✔' : '○'} · Explainers: ${eco.auditTrail.contentInspected?.explainerCount} · Standards Comments Read: ${eco.auditTrail.contentInspected?.standardsCommentsRead}\n\n`;
    }

    md += `---\n\n`;
  }

  return md;
}

/**
 * What the GitHub Actions job summary shows: the report header and the Executive Snapshot, and nothing
 * else. The whole report is up to a megabyte (one week's was 1,056,510 bytes) and a job summary is cut
 * off at 1 MiB; the snapshot is a fixed handful of lines however many features there are.
 */
export function generateSummaryMarkdown(reportData) {
  const { weekString, features } = reportData;

  let md = reportHeader(reportData);
  md += executiveSnapshot(features);
  md += `The full report is ${markdownCode(`reports/weekly/${weekString}.md`)} in the repository and the dashboard on GitHub Pages.\n`;
  return md;
}

/** A file name written for a feature: its ChromeStatus id, a hyphen and the slug of its name. */
const FEATURE_PAGE = /^(\d+)-[a-z0-9_-]*\.md$/;

/**
 * The page that replaces one left behind when a feature was renamed (the file name carries the name,
 * so a rename writes a new file and the old one would show last week's text for ever).
 */
function movedPage(feature) {
  const name = escapeMarkdown(feature.name);
  return `# ${name}\n\n> **This page has moved.** The feature's page is now [${name}](${encodeURIComponent(feature.slug)}.md).\n`;
}

/**
 * Replaces the pages of a feature that this report writes under another name with a pointer to the new
 * page, rather than deleting them, so a link to the old name still leads somewhere. Pages of features
 * that are not in this report are never touched: a partial run, or a feature that has left the window,
 * keeps the page the last report that held it wrote. A page that cannot be replaced (a directory by that
 * name, a file that cannot be written) is reported and left as it is: it is housekeeping, and the
 * reports themselves are already on disk.
 */
async function pointSupersededPages(featuresDir, features) {
  const current = new Map(features
    .filter(({ feature }) => typeof feature.slug === 'string' && feature.slug !== '')
    .map(({ feature }) => [String(feature.id), feature]));
  for (const name of await fs.readdir(featuresDir)) {
    const feature = current.get(FEATURE_PAGE.exec(name)?.[1]);
    if (feature && name !== `${feature.slug}.md`) {
      try {
        await fs.writeFile(path.join(featuresDir, name), movedPage(feature), 'utf-8');
      } catch (error) {
        logger.warn(`[Reports] Could not replace ${name} with a pointer to ${feature.slug}.md: ${error.message}`);
      }
    }
  }
}

/**
 * Saves markdown reports to disk
 */
export async function writeMarkdownReports(reportData) {
  const { weekString, features } = reportData;
  const weeklyDir = path.join(config.reportsDir, 'weekly');
  const featuresDir = path.join(config.reportsDir, 'features');

  await fs.mkdir(weeklyDir, { recursive: true });
  await fs.mkdir(featuresDir, { recursive: true });

  // 1. Weekly rollup report
  const weeklyContent = generateWeeklyMarkdown(reportData);
  const weeklyFilePath = path.join(weeklyDir, `${weekString}.md`);
  await fs.writeFile(weeklyFilePath, weeklyContent, 'utf-8');

  // Also write reports/README.md as current latest report
  const latestReadmePath = path.join(config.reportsDir, 'README.md');
  await fs.writeFile(latestReadmePath, weeklyContent, 'utf-8');

  // And reports/summary.md, the Executive Snapshot alone: what the job summary of the Actions run shows
  await fs.writeFile(path.join(config.reportsDir, 'summary.md'), generateSummaryMarkdown(reportData), 'utf-8');

  // 2. Individual feature reports
  for (const item of features) {
    const featureReport = generateSingleFeatureMarkdown(item, weekString);
    const featureFilePath = path.join(featuresDir, `${item.feature.slug}.md`);
    await fs.writeFile(featureFilePath, featureReport, 'utf-8');
  }
  await pointSupersededPages(featuresDir, features);

  return {
    weeklyFilePath,
    featuresCount: features.length,
  };
}

/**
 * Generates an individual feature Markdown page
 */
function generateSingleFeatureMarkdown(item, weekString) {
  const view = toFeatureView(item);
  const { f, a, eco, delta, blogs: singleBlogs, docs: singleDocs, deltaSummary, sliceLimits } = view;

  let md = `# ${escapeMarkdown(f.name)}\n\n`;
  md += `> **Report Week:** ${weekString} | **Milestone:** Chrome ${f.milestone || 'N/A'}${view.milestoneNote ? ` (${view.milestoneNote})` : ''} | **Category:** ${f.category}\n\n`;
  md += `## Overview\n\n${escapeMarkdown(f.summary)}\n\n`;
  if (f.motivation) {
    md += `### Motivation\n\n${escapeMarkdown(f.motivation)}\n\n`;
  }

  md += `## Ecosystem Status\n\n`;
  md += `- **Momentum:** ${a.momentumLevel} (${escapeMarkdown(describeMomentum(a))})\n`;
  md += `- **Standards Alignment:** ${a.consensus}\n`;
  md += `- **Sentiment:** ${a.sentiment}\n`;
  md += `- **Executive Take:** ${escapeMarkdown(a.executiveSummary)}\n\n`;

  if (a.takeaways && a.takeaways.length > 0) {
    md += `### Recommendations\n`;
    for (const t of a.takeaways) md += `- ${escapeMarkdown(t)}\n`;
    md += `\n`;
  }

  if (eco.standards?.length > 0) {
    md += `## Standards Positions\n\n`;
    for (const s of eco.standards) {
      md += `- **${escapeMarkdown(s.vendor)}:** [${escapeMarkdown(s.title)}](${markdownUrl(s.url)}) [${escapeMarkdown(s.state)}]\n`;
    }
    md += `\n`;
  }

  const contextLines = view.webGroup ? groupContextLines(eco) : [];
  if (eco.wpt?.url || contextLines.length > 0) {
    md += `## Web-features Group\n\n`;
    if (view.webGroup) md += `*${groupNote(view.webGroup)}*\n\n`;
    if (eco.wpt?.url) md += `- ${wptLine(eco.wpt, view.webGroup)}\n`;
    if (contextLines.length > 0) md += `${contextLines.join('\n')}\n`;
    md += `\n`;
  }

  if (eco.discussions?.length > 0) {
    md += `## Community Discussions & Social Pulse\n\n`;
    for (const d of eco.discussions) {
      const icon = (d.source || '').includes('Twitter') ? '🐦' : '💬';
      const authorSuffix = d.author ? ` by ${escapeMarkdown(d.author)}` : '';
      const metricsStr = (d.source || '').includes('Twitter')
        ? `${d.points || 0} likes/RTs, ${d.commentsCount || 0} replies`
        : `${d.points || 0} pts, ${d.commentsCount || 0} comments`;
      md += `- ${icon} **${escapeMarkdown(d.source || 'Discussion')}:** [${escapeMarkdown(d.title)}](${markdownUrl(d.discussionUrl || d.url)}) — *${authorSuffix ? authorSuffix.trim() + ', ' : ''}${metricsStr}*\n`;
    }
    md += `\n`;
  }

  if (eco.packages?.length > 0) {
    md += `## Packages & Polyfills\n\n`;
    for (const p of eco.packages) {
      md += `- [${escapeMarkdown(p.name)}](${markdownUrl(`https://www.npmjs.com/package/${p.name}`)}) ${markdownCode(`v${p.version}`)} — ${escapeMarkdown(p.description)}\n`;
    }
    md += `\n`;
  }

  
  if (singleBlogs.length > 0) {
    md += `## 📰 Ecosystem Blogs & Articles\n\n`;
    for (const art of singleBlogs) {
      const meta = [art.domain, art.author, art.publishedAt].filter(Boolean).join(' · ');
      md += `- [${escapeMarkdown(art.title)}](${markdownUrl(art.url)}) ${meta ? `*(${escapeMarkdown(meta)})*` : ''}\n`;
      const snippet = (art.contentExcerpt || art.snippet || '').trim();
      if (snippet) {
        md += `  > ${escapeMarkdown(snippet.slice(0, 250))}${snippet.length > 250 ? '...' : ''}\n`;
      }
    }
    md += `\n`;
  }

  if (eco.reverseLinks && eco.reverseLinks.length > 0) {
    md += `## 🔗 Inbound Citations & Reverse Links\n\n`;
    md += `The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:\n\n`;
    for (const link of eco.reverseLinks) {
      const meta = [link.domain, link.author, link.publishedAt].filter(Boolean).join(' · ');
      const targetLabel = link.reverseLinkedTo ? `*(Cites: ${markdownCode(link.reverseLinkedTo)})*` : '';
      md += `- [${escapeMarkdown(link.title)}](${markdownUrl(link.url)}) ${meta ? `*(${escapeMarkdown(meta)})*` : ''} ${targetLabel}\n`;
      const snippet = (link.contentExcerpt || link.snippet || '').trim();
      if (snippet) {
        md += `  > ${escapeMarkdown(snippet.slice(0, 240))}${snippet.length > 240 ? '...' : ''}\n`;
      }
    }
    md += `\n`;
  }

  
  if (singleDocs.length > 0) {
    md += `## 📚 Platform Documentation & Specifications\n\n`;
    for (const doc of singleDocs) {
      md += `- [${escapeMarkdown(doc.title)}](${markdownUrl(doc.url)}) ${doc.domain ? `*(${escapeMarkdown(doc.domain)})*` : ''}\n`;
    }
    md += `\n`;
  }

  if (eco.auditTrail) {
    md += `## 🔍 Investigation Audit Trail\n\n`;
    md += `### Searches Executed\n\n`;
    for (const s of eco.auditTrail.searchesExecuted || []) {
      const name = s.provider || s.type;
      if (s.status) {
        md += `- **${escapeMarkdown(name)}:** *${escapeMarkdown(s.status)}*\n`;
      } else if (s.rawFound !== undefined) {
        const queryCountStr = s.queryAudits?.length ? ` across ${s.queryAudits.length} planned queries` : '';
        md += `- **${escapeMarkdown(name)}:** ${s.rawFound} result(s) found${queryCountStr} — **${s.verified} verified relevant**\n`;
        if (s.queryAudits && s.queryAudits.length > 0) {
          for (const qa of s.queryAudits) {
            const revTag = qa.isReverseLink ? ' *(Reverse Citation)*' : '';
            md += `  - ${markdownCode(qa.query)}${revTag} — *${escapeMarkdown(qa.description)}* (${qa.count} returned)\n`;
          }
        }
      } else {
        md += `- **${escapeMarkdown(name)}:** ${s.count || 0} item(s) inspected\n`;
      }
    }
    md += `\n### Content Inspected\n\n`;
    md += `- **Specification:** ${eco.auditTrail.contentInspected?.hasSpec ? '✔ Formally verified' : '○ Not available'}\n`;
    md += `- **Explainers:** ${eco.auditTrail.contentInspected?.explainerCount || 0} document(s) analyzed\n`;
    md += `- **Standards Discussion Comments:** ${eco.auditTrail.contentInspected?.standardsCommentsRead || 0} engineer comment(s) read\n`;
    md += `- **Web Page Excerpts Ingested:** ${eco.auditTrail.contentInspected?.webArticleExcerptsRead || 0} page(s)\n\n`;
  }

  md += `## Useful Links\n\n`;
  md += `- [ChromeStatus](${markdownUrl(f.chromeStatusUrl)})\n`;
  md += `- [ChromeStatusLite](${markdownUrl(f.chromeStatusLiteUrl)})\n`;
  if (f.specUrl) md += `- [Specification](${markdownUrl(f.specUrl)})\n`;
  if (f.bugUrl) md += `- [Chromium Tracking Bug](${markdownUrl(f.bugUrl)})\n`;

  return md;
}
