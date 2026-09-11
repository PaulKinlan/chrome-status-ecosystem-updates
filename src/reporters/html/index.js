import fs from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { config } from '../../config.js';
import { h, raw } from '../escape.js';
import { STYLES } from './styles.js';
import { renderCard } from './templates/card.js';

// The browser script lives in a real .js file so editors lint and highlight it,
// but it is inlined into the single-file dashboard rather than served as a
// separate request. Reading it once at module load keeps generateDashboardHtml
// synchronous, which is the signature the runner and the tests already expect.
const CLIENT_JS = readFileSync(new URL('./client.js', import.meta.url), 'utf-8');

/**
 * Renders the full dashboard.
 *
 * Every card is server-rendered. The previous version shipped the entire report
 * as a JSON blob and rebuilt the DOM in the browser, which meant the page was
 * blank without JavaScript, unreadable to crawlers, and re-escaped everything a
 * second time client-side. The browser script now only filters pre-rendered
 * markup.
 */
export function generateDashboardHtml(reportData) {
  const { weekString, milestones = [], features = [] } = reportData;

  const renderedCards = features.map(item => renderCard(item)).join('\n');

  const highMomentumCount = features.filter(item => item.analysis?.momentumLevel === 'High').length;
  const consensusCount = features.filter(item => item.analysis?.consensus === 'Multi-Engine Consensus').length;
  const contestedCount = features.filter(item =>
    (item.analysis?.consensus || '').includes('Contested') || (item.analysis?.consensus || '').includes('Concerns')
  ).length;
  const deltasCount = features.filter(item => item.delta && (
    item.delta.isNewFeature || item.delta.statusChanged || item.delta.momentumChanged ||
    item.delta.newArticlesCount > 0 || item.delta.newDiscussionsCount > 0
  )).length;

  const milestoneButtons = (milestones.length > 1) ? h`
      <div class="filters-row" role="group" aria-label="Filter by Milestone">
        <span class="filter-label">Milestone:</span>
        <button class="filter-btn active" data-filter-type="milestone" data-filter-val="all" aria-pressed="true">All (${milestones.length} releases)</button>
        ${[...milestones].sort((a, b) => b - a).map(m => raw(h`
          <button class="filter-btn" data-filter-type="milestone" data-filter-val="${m}" aria-pressed="false">Chrome ${m}</button>
        `))}
      </div>
  ` : '';

  const milestoneLabel = milestones.length > 3
    ? `${Math.min(...milestones)}–${Math.max(...milestones)} (${milestones.length} releases)`
    : milestones.join(', ');

  const providerBadges = [
    reportData.telemetry?.searchProvider
      ? h`<span class="badge" title="Web Search Engine">🔎 ${reportData.telemetry.searchProvider}</span>`
      : '',
    reportData.telemetry?.aiProvider
      ? h`<span class="badge" title="AI Analysis Engine">🤖 ${reportData.telemetry.aiProvider}</span>`
      : '',
  ].join('\n        ');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${h`<title>Chrome Ecosystem Updates — ${weekString}</title>`}
  <meta name="description" content="Weekly Web Platform &amp; API Ecosystem Intelligence Report">
  <style>
${STYLES}
  </style>
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <header>
    <div class="header-container">
      <div class="title-area">
        <h1>🌐 Chrome Ecosystem Updates</h1>
        <p>Weekly web intelligence on shipping APIs, cross-browser consensus, developer sentiment, and polyfills</p>
      </div>
      <div class="header-badges">
        ${h`<span class="badge badge-primary">Week: ${weekString}</span>`}
        ${h`<span class="badge">Chrome ${milestoneLabel}</span>`}
        ${providerBadges}
        <a href="feed.xml" class="badge badge-warning badge-link" title="Subscribe via RSS">📡 RSS Feed</a>
        <a href="latest.json" class="badge badge-link">📄 JSON API</a>
      </div>
    </div>
  </header>

  <main id="main-content" class="main-container">
    <div class="stats-grid">
      <div class="stat-card">
        <div class="num" id="stat-total">${features.length}</div>
        <div class="label">Features Analyzed</div>
      </div>
      <div class="stat-card">
        <div class="num num-primary" id="stat-high">${highMomentumCount}</div>
        <div class="label">High Momentum</div>
      </div>
      <div class="stat-card">
        <div class="num num-success" id="stat-consensus">${consensusCount}</div>
        <div class="label">Multi-Engine Consensus</div>
      </div>
      <div class="stat-card">
        <div class="num num-danger" id="stat-contested">${contestedCount}</div>
        <div class="label">Contested / Concerns</div>
      </div>
      <button type="button" class="stat-card" id="stat-card-deltas" title="Click to view features with week-over-week changes">
        <div class="num num-purple" id="stat-deltas">${deltasCount}</div>
        <div class="label"><span aria-hidden="true">⚡</span> Week Changes (Deltas)</div>
      </button>
    </div>

    <div class="controls-bar">
      <div class="search-row">
        <label for="search-input" class="visually-hidden">Search features</label>
        <input type="search" id="search-input" class="search-input" placeholder="Search features by name, API, CSS property, or keywords...">
      </div>
      <div class="filters-row" role="group" aria-label="Filter by Activity">
        <span class="filter-label">Activity:</span>
        <button class="filter-btn active" data-filter-type="activity" data-filter-val="all" aria-pressed="true">All Features</button>
        <button class="filter-btn" data-filter-type="activity" data-filter-val="deltas" aria-pressed="false">⚡ What's New This Week</button>
        <button class="filter-btn" data-filter-type="activity" data-filter-val="new" aria-pressed="false">✨ Newly Tracked</button>
        <button class="filter-btn" data-filter-type="activity" data-filter-val="status-change" aria-pressed="false">🔄 Status Changed</button>
      </div>
      ${milestoneButtons}
      <div class="filters-row" role="group" aria-label="Filter by Status">
        <span class="filter-label">Status:</span>
        <button class="filter-btn active" data-filter-type="status" data-filter-val="all" aria-pressed="true">All</button>
        <button class="filter-btn" data-filter-type="status" data-filter-val="enabled" aria-pressed="false">Enabled by default</button>
        <button class="filter-btn" data-filter-type="status" data-filter-val="origin-trial" aria-pressed="false">Origin Trial</button>
        <button class="filter-btn" data-filter-type="status" data-filter-val="flagged" aria-pressed="false">Behind Flag</button>
        <button class="filter-btn" data-filter-type="status" data-filter-val="deprecated" aria-pressed="false">Deprecated</button>
      </div>
      <div class="filters-row" role="group" aria-label="Filter by Momentum">
        <span class="filter-label">Momentum:</span>
        <button class="filter-btn active" data-filter-type="momentum" data-filter-val="all" aria-pressed="true">All</button>
        <button class="filter-btn" data-filter-type="momentum" data-filter-val="High" aria-pressed="false">High</button>
        <button class="filter-btn" data-filter-type="momentum" data-filter-val="Moderate" aria-pressed="false">Moderate</button>
        <button class="filter-btn" data-filter-type="momentum" data-filter-val="Emerging" aria-pressed="false">Emerging</button>
        <button class="filter-btn" data-filter-type="momentum" data-filter-val="Quiet" aria-pressed="false">Quiet</button>
      </div>
    </div>

    <div aria-live="polite" id="filter-announcer" class="visually-hidden"></div>

    <div id="feature-container" class="feature-list">
      ${renderedCards}
    </div>
    <div id="empty-state" class="empty-state" hidden>
      <h2>No features match your current filters.</h2>
      <p>Try resetting filters or adjusting your search terms.</p>
    </div>
  </main>

  <noscript>
    <p class="noscript-note"><strong>Note:</strong> Search and filters require JavaScript, but the full report above is readable without it.</p>
  </noscript>
  <script>
${CLIENT_JS}
  </script>
</body>
</html>`;
}

export async function writeDashboardHtml(reportData) {
  await fs.mkdir(config.reportsDir, { recursive: true });
  const html = generateDashboardHtml(reportData);
  const filePath = path.join(config.reportsDir, 'index.html');
  await fs.writeFile(filePath, html, 'utf-8');
  // GitHub Pages runs Jekyll by default, which would strip files and folders
  // beginning with an underscore from the published output.
  await fs.writeFile(path.join(config.reportsDir, '.nojekyll'), '', 'utf-8');
  return filePath;
}
