import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config.js';

/**
 * Escapes HTML tags and markdown table pipes to prevent raw HTML elements (like <iframe>)
 */
export function escapeMarkdown(text) {
  if (!text) return '';
  return String(text)
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\|/g, '\\|');
}

/**
 * Returns ISO week string e.g. "2026-W35"
 */
export function getIsoWeekString(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
}

/**
 * Generates the full weekly Markdown report
 */
export function generateWeeklyMarkdown(reportData) {
  const { weekString, date, milestones, features } = reportData;

  const totalFeatures = features.length;
  const highMomentum = features.filter(f => f.analysis.momentumLevel === 'High');
  const multiEngine = features.filter(f => f.analysis.consensus === 'Multi-Engine Consensus');
  const contested = features.filter(f => f.analysis.consensus.includes('Contested') || f.analysis.consensus.includes('Concerns'));
  const newActivityCount = features.reduce((acc, f) => acc + (f.delta?.newArticlesCount || 0) + (f.delta?.newDiscussionsCount || 0), 0);

  let md = `# 🌐 Chrome Web Platform Ecosystem Report — ${weekString}\n\n`;
  md += `> **Generated on:** ${date} | **Target Milestones:** Chrome ${milestones.join(', ')}\n`;
  if (reportData.telemetry) {
    md += `> **Search Engine:** ${reportData.telemetry.searchProvider} | **Analysis Model:** ${reportData.telemetry.aiProvider}\n`;
  }
  md += `\n`;

  // Executive Summary Cards
  md += `## 📊 Executive Snapshot\n\n`;
  md += `| Metric | Count | Description |\n`;
  md += `| :--- | :--- | :--- |\n`;
  md += `| **Features Tracked** | \`${totalFeatures}\` | APIs & platform features analyzed across milestones |\n`;
  md += `| **High Ecosystem Momentum** | \`${highMomentum.length}\` | Features with active community discussions & publications |\n`;
  md += `| **Multi-Engine Consensus** | \`${multiEngine.length}\` | Broad alignment across Chromium, Gecko, and WebKit |\n`;
  md += `| **Contested / Concerns** | \`${contested.length}\` | Features with open vendor or security/privacy objections |\n`;
  md += `| **New Mentions This Week** | \`${newActivityCount}\` | Net new articles, discussions, or standards updates |\n\n`;

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
        md += `- [${escapeMarkdown(item.feature.name)}](#${item.feature.slug}): Moved from *${item.delta.previousStatus || 'N/A'}* to **${item.feature.category}** in Chrome ${item.feature.milestone || ''}\n`;
      }
      md += `\n`;
    }

    if (momentumShifts.length > 0) {
      md += `### 🚀 Momentum Shifts\n\n`;
      for (const item of momentumShifts) {
        md += `- [${escapeMarkdown(item.feature.name)}](#${item.feature.slug}): Shifted from *${item.delta.previousMomentum}* to **${item.analysis.momentumLevel}** momentum\n`;
      }
      md += `\n`;
    }

    if (newActivityFeatures.length > 0) {
      md += `### 📰 Net New Publications & Discussions\n\n`;
      for (const item of newActivityFeatures.slice(0, 10)) {
        const parts = [];
        if (item.delta.newArticlesCount > 0) parts.push(`${item.delta.newArticlesCount} article(s)`);
        if (item.delta.newDiscussionsCount > 0) parts.push(`${item.delta.newDiscussionsCount} discussion(s)`);
        md += `- [${escapeMarkdown(item.feature.name)}](#${item.feature.slug}): +${parts.join(', ')}\n`;
      }
      md += `\n`;
    }

    if (newFeatures.length > 0) {
      md += `### ✨ Newly Tracked Features\n\n`;
      for (const item of newFeatures.slice(0, 10)) {
        md += `- [${escapeMarkdown(item.feature.name)}](#${item.feature.slug}) (Chrome ${item.feature.milestone || ''}, ${item.feature.category})\n`;
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
    const f = item.feature;
    const a = item.analysis;
    const delta = item.delta;
    const anchor = `#${f.slug}`;
    let deltaSummary = '—';
    if (delta) {
      if (delta.isNewFeature) deltaSummary = '✨ New';
      else if (delta.statusChanged) deltaSummary = `🔄 ${f.category}`;
      else if (delta.newArticlesCount > 0 || delta.newDiscussionsCount > 0) {
        deltaSummary = `⚡ +${delta.newArticlesCount} art / +${delta.newDiscussionsCount} msgs`;
      }
    }
    md += `| [${escapeMarkdown(f.name)}](${anchor}) | Chrome ${f.milestone || ''} | \`${f.category}\` | **${a.momentumLevel}** | ${a.consensus} | ${deltaSummary} |\n`;
  }
  md += `\n---\n\n`;

  // Feature Deep Dives
  md += `## 🔍 Feature Ecosystem Deep Dives\n\n`;

  for (const item of features) {
    const f = item.feature;
    const eco = item.ecosystem;
    const a = item.analysis;
    const delta = item.delta;

    md += `<a id="${f.slug}"></a>\n`;
    md += `### [${escapeMarkdown(f.name)}](${f.chromeStatusUrl})\n\n`;

    // Metadata Bar
    md += `- **Milestone:** Chrome ${f.milestone || 'N/A'} (${f.category})\n`;
    md += `- **ChromeStatus:** [chromestatus.com/feature/${f.id}](${f.chromeStatusUrl}) · [chromestatuslite.com/feature/${f.id}](${f.chromeStatusLiteUrl})\n`;
    if (f.specUrl) md += `- **Specification:** [${f.specUrl}](${f.specUrl})\n`;
    if (f.bugUrl) md += `- **Chromium Bug:** [${f.bugUrl}](${f.bugUrl})\n`;
    md += `- **Browser Signals:** Chrome: \`${f.browsers?.chrome?.status || 'Active'}\` · Firefox: \`${f.browsers?.firefox?.view || 'No signal'}\` · Safari: \`${f.browsers?.safari?.view || 'No signal'}\`\n`;
    if (eco.baseline) {
      md += `- **Baseline Interoperability:** [${eco.baseline.statusLabel}](${eco.baseline.url}) (Chrome: \`${eco.baseline.browserSupport?.chrome || '—'}\`, Firefox: \`${eco.baseline.browserSupport?.firefox || '—'}\`, Safari: \`${eco.baseline.browserSupport?.safari || '—'}\`)\n`;
    }
    md += `\n`;

    // Summary & Motivation
    md += `#### 📝 Overview\n\n`;
    md += `${f.summary}\n\n`;
    if (f.motivation) {
      md += `> **Motivation:** ${f.motivation.slice(0, 350)}${f.motivation.length > 350 ? '...' : ''}\n\n`;
    }

    // Ecosystem Analysis
    md += `#### 💡 Ecosystem Intelligence & Analysis\n\n`;
    md += `- **Momentum:** **${a.momentumLevel}** (Activity Score: ${a.momentumScore})\n`;
    md += `- **Consensus:** **${a.consensus}**\n`;
    md += `- **Developer Sentiment:** **${a.sentiment}**\n`;
    if (a.isGroundedWithGoogleSearch) {
      md += `- **Google Search Grounding:** Enabled via Gemini\n`;
    }
    if (a.groundedQueries && a.groundedQueries.length > 0) {
      md += `- **Search Queries:** ${a.groundedQueries.map(q => `\`"${q}"\``).join(', ')}\n`;
    }
    md += `- **Analysis:** ${a.executiveSummary}\n\n`;

    if (a.takeaways && a.takeaways.length > 0) {
      md += `**Key Recommendations & Takeaways:**\n`;
      for (const t of a.takeaways) {
        md += `- ${t}\n`;
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
      for (const disc of eco.discussions.slice(0, 8)) {
        const icon = (disc.source || '').includes('Twitter') ? '🐦' : '💬';
        const authorSuffix = disc.author ? ` by ${disc.author}` : '';
        const metricsStr = (disc.source || '').includes('Twitter')
          ? `${disc.points || 0} likes/RTs, ${disc.commentsCount || 0} replies`
          : `${disc.points || 0} pts, ${disc.commentsCount || 0} comments`;
        md += `- ${icon} [${escapeMarkdown(disc.title)}](${disc.discussionUrl || disc.url}) — *${disc.source}${authorSuffix} (${metricsStr})*\n`;
      }
      md += `\n`;
    }

    // Standards Positions
    if (eco.standards && eco.standards.length > 0) {
      md += `#### 🏛️ Browser Standards Positions\n\n`;
      for (const std of eco.standards) {
        const labelsStr = (std.labels || []).length > 0 ? `\`${std.labels.join('`, `')}\`` : '';
        md += `- **${std.vendor}:** [${std.title}](${std.url}) [${std.state}] ${labelsStr}\n`;
        if (std.commentSummary) {
          md += `  > *${std.commentSummary}*\n`;
        }
      }
      md += `\n`;
    }

    // Engine Bug Trackers (Mozilla Bugzilla & WebKit Bugzilla)
    if (eco.bugs && eco.bugs.length > 0) {
      md += `#### 🐛 Engine Bug Trackers (Bugzilla)\n\n`;
      for (const bug of eco.bugs) {
        md += `- **${bug.vendor}:** [Bug #${bug.id}: ${bug.title}](${bug.url}) \`[${bug.status}${bug.resolution ? ` (${bug.resolution})` : ''}]\`\n`;
      }
      md += `\n`;
    }

    // Polyfills & NPM Packages
    if (eco.packages && eco.packages.length > 0) {
      md += `#### 📦 Polyfills & NPM Ecosystem\n\n`;
      for (const pkg of eco.packages) {
        const polyBadge = pkg.isPolyfill ? ' *(Verified Polyfill)*' : '';
        md += `- [${pkg.name}](https://www.npmjs.com/package/${pkg.name}) \`v${pkg.version}\`${polyBadge} — ${pkg.description}\n`;
      }
      md += `\n`;
    }

    // Ecosystem Blogs & Articles
    const blogs = eco.blogs || (eco.articles || []).filter(a => a.isBlog || (a.domain && !a.domain.includes('mozilla.org') && !a.domain.includes('w3.org')));
    if (blogs.length > 0) {
      md += `#### 📰 Ecosystem Blogs & Articles\n\n`;
      for (const art of blogs.slice(0, 6)) {
        const meta = [art.domain, art.author, art.publishedAt].filter(Boolean).join(' · ');
        md += `- [${art.title}](${art.url}) ${meta ? `*(${meta})*` : ''}\n`;
        const snippet = (art.contentExcerpt || art.snippet || '').trim();
        if (snippet) {
          md += `  > ${snippet.slice(0, 220).replace(/\r?\n/g, ' ')}${snippet.length > 220 ? '...' : ''}\n`;
        }
      }
      md += `\n`;
    }

    // Inbound Citations & Reverse Links
    if (eco.reverseLinks && eco.reverseLinks.length > 0) {
      md += `#### 🔗 Inbound Citations & Reverse Links\n\n`;
      for (const link of eco.reverseLinks.slice(0, 5)) {
        const meta = [link.domain, link.author, link.publishedAt].filter(Boolean).join(' · ');
        const targetLabel = link.reverseLinkedTo ? `*(Cites: \`${link.reverseLinkedTo}\`)*` : '';
        md += `- [${link.title}](${link.url}) ${meta ? `*(${meta})*` : ''} ${targetLabel}\n`;
        const snippet = (link.contentExcerpt || link.snippet || '').trim();
        if (snippet) {
          md += `  > ${snippet.slice(0, 220).replace(/\r?\n/g, ' ')}${snippet.length > 220 ? '...' : ''}\n`;
        }
      }
      md += `\n`;
    }

    // Platform Documentation & References
    const docs = eco.docs || (eco.articles || []).filter(a => !blogs.includes(a));
    if (docs.length > 0) {
      md += `#### 📚 Platform Documentation & References\n\n`;
      for (const doc of docs.slice(0, 5)) {
        md += `- [${doc.title}](${doc.url}) ${doc.domain ? `*(${doc.domain})*` : ''}\n`;
      }
      md += `\n`;
    }

    // Demos & Samples
    const demos = (eco.resources || []).filter(r => r.type === 'demo');
    if (demos.length > 0) {
      md += `#### 🧪 Interactive Demos & Samples\n\n`;
      for (const demo of demos) {
        md += `- [${demo.title}](${demo.url})\n`;
      }
      md += `\n`;
    }

    // Web Platform Tests
    if (eco.wpt?.url) {
      md += `#### 🧪 Web Platform Tests (WPT)\n\n`;
      md += `- View cross-browser test results on [wpt.fyi](${eco.wpt.url}) (${eco.wpt.testCount} tests listed)\n\n`;
    }

    // Investigation Audit Trail
    if (eco.auditTrail) {
      md += `#### 🔍 Investigation Audit Trail\n\n`;
      const searchSummaries = (eco.auditTrail.searchesExecuted || []).map(s => {
        const name = s.provider || s.type;
        if (s.status) return `\`${name}\` *(${s.status})*`;
        const queryCountStr = s.queryAudits?.length ? ` across ${s.queryAudits.length} planned queries` : '';
        const countStr = s.rawFound !== undefined ? `${s.rawFound} found${queryCountStr}, ${s.verified} verified` : `${s.count || s.testCount || 0} items`;
        return `\`${name}\` (${countStr})`;
      });
      md += `- **Searches Run:** ${searchSummaries.join(' · ')}\n`;
      md += `- **Content Inspected:** Spec: ${eco.auditTrail.contentInspected.hasSpec ? '✔' : '○'} · Explainers: ${eco.auditTrail.contentInspected.explainerCount} · Standards Comments Read: ${eco.auditTrail.contentInspected.standardsCommentsRead}\n\n`;
    }

    md += `---\n\n`;
  }

  return md;
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

  // 2. Individual feature reports
  for (const item of features) {
    const featureReport = generateSingleFeatureMarkdown(item, weekString);
    const featureFilePath = path.join(featuresDir, `${item.feature.slug}.md`);
    await fs.writeFile(featureFilePath, featureReport, 'utf-8');
  }

  return {
    weeklyFilePath,
    featuresCount: features.length,
  };
}

/**
 * Generates an individual feature Markdown page
 */
function generateSingleFeatureMarkdown(item, weekString) {
  const f = item.feature;
  const eco = item.ecosystem;
  const a = item.analysis;

  let md = `# ${escapeMarkdown(f.name)}\n\n`;
  md += `> **Report Week:** ${weekString} | **Milestone:** Chrome ${f.milestone || 'N/A'} | **Category:** ${f.category}\n\n`;
  md += `## Overview\n\n${f.summary}\n\n`;
  if (f.motivation) {
    md += `### Motivation\n\n${f.motivation}\n\n`;
  }

  md += `## Ecosystem Status\n\n`;
  md += `- **Momentum:** ${a.momentumLevel} (${a.momentumScore} points)\n`;
  md += `- **Standards Alignment:** ${a.consensus}\n`;
  md += `- **Sentiment:** ${a.sentiment}\n`;
  md += `- **Executive Take:** ${a.executiveSummary}\n\n`;

  if (a.takeaways && a.takeaways.length > 0) {
    md += `### Recommendations\n`;
    for (const t of a.takeaways) md += `- ${t}\n`;
    md += `\n`;
  }

  if (eco.standards?.length > 0) {
    md += `## Standards Positions\n\n`;
    for (const s of eco.standards) {
      md += `- **${s.vendor}:** [${s.title}](${s.url}) [${s.state}]\n`;
    }
    md += `\n`;
  }

  if (eco.discussions?.length > 0) {
    md += `## Community Discussions & Social Pulse\n\n`;
    for (const d of eco.discussions) {
      const icon = (d.source || '').includes('Twitter') ? '🐦' : '💬';
      const authorSuffix = d.author ? ` by ${d.author}` : '';
      const metricsStr = (d.source || '').includes('Twitter')
        ? `${d.points || 0} likes/RTs, ${d.commentsCount || 0} replies`
        : `${d.points || 0} pts, ${d.commentsCount || 0} comments`;
      md += `- ${icon} **${d.source || 'Discussion'}:** [${escapeMarkdown(d.title)}](${d.discussionUrl || d.url}) — *${authorSuffix ? authorSuffix.trim() + ', ' : ''}${metricsStr}*\n`;
    }
    md += `\n`;
  }

  if (eco.packages?.length > 0) {
    md += `## Packages & Polyfills\n\n`;
    for (const p of eco.packages) {
      md += `- [${p.name}](https://www.npmjs.com/package/${p.name}) \`v${p.version}\` — ${p.description}\n`;
    }
    md += `\n`;
  }

  const singleBlogs = eco.blogs || (eco.articles || []).filter(a => a.isBlog || (a.domain && !a.domain.includes('mozilla.org') && !a.domain.includes('w3.org')));
  if (singleBlogs.length > 0) {
    md += `## 📰 Ecosystem Blogs & Articles\n\n`;
    for (const art of singleBlogs) {
      const meta = [art.domain, art.author, art.publishedAt].filter(Boolean).join(' · ');
      md += `- [${art.title}](${art.url}) ${meta ? `*(${meta})*` : ''}\n`;
      const snippet = (art.contentExcerpt || art.snippet || '').trim();
      if (snippet) {
        md += `  > ${snippet.slice(0, 250).replace(/\r?\n/g, ' ')}${snippet.length > 250 ? '...' : ''}\n`;
      }
    }
    md += `\n`;
  }

  if (eco.reverseLinks && eco.reverseLinks.length > 0) {
    md += `## 🔗 Inbound Citations & Reverse Links\n\n`;
    md += `The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:\n\n`;
    for (const link of eco.reverseLinks) {
      const meta = [link.domain, link.author, link.publishedAt].filter(Boolean).join(' · ');
      const targetLabel = link.reverseLinkedTo ? `*(Cites: \`${link.reverseLinkedTo}\`)*` : '';
      md += `- [${link.title}](${link.url}) ${meta ? `*(${meta})*` : ''} ${targetLabel}\n`;
      const snippet = (link.contentExcerpt || link.snippet || '').trim();
      if (snippet) {
        md += `  > ${snippet.slice(0, 240).replace(/\r?\n/g, ' ')}${snippet.length > 240 ? '...' : ''}\n`;
      }
    }
    md += `\n`;
  }

  const singleDocs = eco.docs || (eco.articles || []).filter(a => !singleBlogs.includes(a));
  if (singleDocs.length > 0) {
    md += `## 📚 Platform Documentation & Specifications\n\n`;
    for (const doc of singleDocs) {
      md += `- [${doc.title}](${doc.url}) ${doc.domain ? `*(${doc.domain})*` : ''}\n`;
    }
    md += `\n`;
  }

  if (eco.auditTrail) {
    md += `## 🔍 Investigation Audit Trail\n\n`;
    md += `### Searches Executed\n\n`;
    for (const s of eco.auditTrail.searchesExecuted || []) {
      const name = s.provider || s.type;
      if (s.status) {
        md += `- **${name}:** *${s.status}*\n`;
      } else if (s.rawFound !== undefined) {
        const queryCountStr = s.queryAudits?.length ? ` across ${s.queryAudits.length} planned queries` : '';
        md += `- **${name}:** ${s.rawFound} result(s) found${queryCountStr} — **${s.verified} verified relevant**\n`;
        if (s.queryAudits && s.queryAudits.length > 0) {
          for (const qa of s.queryAudits) {
            const revTag = qa.isReverseLink ? ' *(Reverse Citation)*' : '';
            md += `  - \`${qa.query}\`${revTag} — *${qa.description}* (${qa.count} returned)\n`;
          }
        }
      } else {
        md += `- **${name}:** ${s.count || s.testCount || 0} item(s) inspected\n`;
      }
    }
    md += `\n### Content Inspected\n\n`;
    md += `- **Specification:** ${eco.auditTrail.contentInspected?.hasSpec ? '✔ Formally verified' : '○ Not available'}\n`;
    md += `- **Explainers:** ${eco.auditTrail.contentInspected?.explainerCount || 0} document(s) analyzed\n`;
    md += `- **Standards Discussion Comments:** ${eco.auditTrail.contentInspected?.standardsCommentsRead || 0} engineer comment(s) read\n`;
    md += `- **Web Page Excerpts Ingested:** ${eco.auditTrail.contentInspected?.webArticleExcerptsRead || 0} page(s)\n\n`;
  }

  md += `## Useful Links\n\n`;
  md += `- [ChromeStatus](${f.chromeStatusUrl})\n`;
  md += `- [ChromeStatusLite](${f.chromeStatusLiteUrl})\n`;
  if (f.specUrl) md += `- [Specification](${f.specUrl})\n`;
  if (f.bugUrl) md += `- [Chromium Tracking Bug](${f.bugUrl})\n`;

  return md;
}
