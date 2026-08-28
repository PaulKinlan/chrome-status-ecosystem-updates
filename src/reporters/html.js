import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config.js';

export function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function generateDashboardHtml(reportData) {
  const { weekString, date, milestones, features } = reportData;
  const safeJsonData = JSON.stringify(reportData)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Chrome Ecosystem Updates — ${weekString}</title>
  <meta name="description" content="Weekly Web Platform & API Ecosystem Intelligence Report">
  <style>
    :root {
      --bg: #090d13;
      --bg-subtle: #0f141c;
      --surface: #151b26;
      --surface-hover: #1c2433;
      --surface-active: #232d3f;
      --border: #283344;
      --border-focus: #3d82e6;
      --text: #cbd5e1;
      --text-bright: #f8fafc;
      --text-muted: #8190a6;
      --primary: #38bdf8;
      --primary-glow: rgba(56, 189, 248, 0.15);
      --success: #34d399;
      --success-glow: rgba(52, 211, 153, 0.15);
      --warning: #fbbf24;
      --warning-glow: rgba(251, 191, 36, 0.15);
      --danger: #f87171;
      --danger-glow: rgba(248, 113, 113, 0.15);
      --purple: #c084fc;
      --purple-glow: rgba(192, 132, 252, 0.15);
      --card-radius: 14px;
      --pill-radius: 999px;
      --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, -apple-system, sans-serif;
      --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
    }

    @media (prefers-color-scheme: light) {
      :root {
        --bg: #f8fafc;
        --bg-subtle: #f1f5f9;
        --surface: #ffffff;
        --surface-hover: #f8fafc;
        --surface-active: #f1f5f9;
        --border: #e2e8f0;
        --border-focus: #0284c7;
        --text: #334155;
        --text-bright: #0f172a;
        --text-muted: #64748b;
        --primary: #0284c7;
        --primary-glow: rgba(2, 132, 199, 0.1);
        --success: #059669;
        --success-glow: rgba(5, 150, 105, 0.1);
        --warning: #d97706;
        --warning-glow: rgba(217, 119, 6, 0.1);
        --danger: #dc2626;
        --danger-glow: rgba(220, 38, 38, 0.1);
        --purple: #9333ea;
        --purple-glow: rgba(147, 51, 234, 0.1);
        --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.04);
      }
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: var(--font-sans);
      line-height: 1.6;
      padding-bottom: 90px;
      -webkit-font-smoothing: antialiased;
    }

    a { color: var(--primary); text-decoration: none; transition: color 0.15s ease; }
    a:hover { text-decoration: underline; }

    header {
      background: linear-gradient(180deg, var(--bg-subtle) 0%, var(--surface) 100%);
      border-bottom: 1px solid var(--border);
      padding: 2.25rem 1.5rem;
      margin-bottom: 2rem;
    }

    .header-container {
      max-width: 1240px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1.25rem;
    }

    .title-area h1 {
      color: var(--text-bright);
      font-size: 1.85rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      gap: 0.65rem;
    }

    .title-area p {
      color: var(--text-muted);
      font-size: 0.95rem;
      margin-top: 0.35rem;
    }

    .header-badges {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      align-items: center;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.3rem 0.75rem;
      border-radius: var(--pill-radius);
      font-size: 0.8rem;
      font-weight: 600;
      border: 1px solid var(--border);
      background: var(--surface);
      color: var(--text);
      transition: all 0.15s ease;
    }

    .badge-link {
      cursor: pointer;
      text-decoration: none;
    }
    .badge-link:hover {
      text-decoration: none;
      filter: brightness(1.15);
      transform: translateY(-1px);
    }

    .badge-primary { background: var(--primary-glow); color: var(--primary); border-color: rgba(56, 189, 248, 0.3); }
    .badge-success { background: var(--success-glow); color: var(--success); border-color: rgba(52, 211, 153, 0.3); }
    .badge-warning { background: var(--warning-glow); color: var(--warning); border-color: rgba(251, 191, 36, 0.3); }
    .badge-danger  { background: var(--danger-glow);  color: var(--danger);  border-color: rgba(248, 113, 113, 0.3); }
    .badge-purple  { background: var(--purple-glow);  color: var(--purple);  border-color: rgba(192, 132, 252, 0.3); }

    .main-container {
      max-width: 1240px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .stat-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--card-radius);
      padding: 1.25rem 1.5rem;
      box-shadow: var(--shadow-sm);
    }

    .stat-card .num {
      font-size: 2.2rem;
      font-weight: 800;
      color: var(--text-bright);
      line-height: 1.1;
      letter-spacing: -0.02em;
    }

    .stat-card .label {
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 0.35rem;
    }

    .controls-bar {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--card-radius);
      padding: 1.25rem;
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      box-shadow: var(--shadow-sm);
    }

    .search-row {
      display: flex;
      gap: 0.75rem;
    }

    .search-input {
      flex: 1;
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.75rem 1.1rem;
      color: var(--text-bright);
      font-size: 0.95rem;
      outline: none;
      transition: border-color 0.15s ease;
    }

    .search-input:focus {
      border-color: var(--primary);
    }

    .filters-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
    }

    .filter-label {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text-muted);
      margin-right: 0.25rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .filter-btn {
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: var(--pill-radius);
      padding: 0.3rem 0.85rem;
      font-size: 0.82rem;
      font-weight: 500;
      color: var(--text);
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .filter-btn:hover {
      background: var(--surface-hover);
      color: var(--text-bright);
      border-color: var(--text-muted);
    }

    .filter-btn.active {
      background: var(--primary);
      color: #090d13;
      font-weight: 700;
      border-color: var(--primary);
    }

    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .feature-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--card-radius);
      padding: 1.75rem;
      box-shadow: var(--shadow-sm);
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .feature-card:hover {
      border-color: rgba(56, 189, 248, 0.4);
      box-shadow: var(--shadow-md);
    }

    .feature-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 0.85rem;
      flex-wrap: wrap;
    }

    .feature-title {
      font-size: 1.35rem;
      color: var(--text-bright);
      font-weight: 700;
      letter-spacing: -0.01em;
    }

    .feature-badges {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .feature-summary {
      color: var(--text);
      font-size: 0.95rem;
      line-height: 1.65;
      margin-bottom: 1.15rem;
    }

    .analysis-callout {
      background: var(--bg);
      border-left: 3px solid var(--primary);
      padding: 0.9rem 1.1rem;
      border-radius: 6px;
      margin-bottom: 1.25rem;
      font-size: 0.92rem;
      color: var(--text);
    }

    .analysis-callout strong {
      color: var(--text-bright);
    }

    /* Interactive Clickable Vendor Tiles */
    .vendors-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 0.75rem;
      margin-bottom: 1.25rem;
    }

    .vendor-tile {
      display: block;
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 0.75rem 1rem;
      color: inherit;
      text-decoration: none;
      transition: all 0.15s ease;
      cursor: pointer;
    }

    .vendor-tile:hover {
      background: var(--surface-hover);
      border-color: var(--primary);
      text-decoration: none;
      transform: translateY(-2px);
      box-shadow: var(--shadow-sm);
    }

    .vendor-tile-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.25rem;
    }

    .vendor-tile .name {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
    }

    .vendor-tile .external-arrow {
      font-size: 0.75rem;
      color: var(--primary);
    }

    .vendor-tile .val {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-bright);
    }

    .vendor-tile .subtext {
      font-size: 0.75rem;
      color: var(--primary);
      margin-top: 0.15rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Accordion / Details Expander Overhaul */
    .expander-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background: var(--bg-subtle);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 0.75rem 1.2rem;
      color: var(--text-bright);
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s ease;
      text-align: left;
    }

    .expander-trigger:hover {
      background: var(--surface-hover);
      border-color: var(--text-muted);
    }

    .expander-left {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      flex-wrap: wrap;
    }

    .expander-pill {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--pill-radius);
      padding: 0.15rem 0.55rem;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-muted);
    }

    .expander-chevron {
      font-size: 1.1rem;
      transition: transform 0.2s ease;
      color: var(--primary);
    }

    .expander-trigger.active .expander-chevron {
      transform: rotate(180deg);
    }

    .expander-body {
      display: none;
      margin-top: 1.25rem;
      padding-top: 1.25rem;
      border-top: 1px solid var(--border);
      animation: fadeIn 0.2s ease-in-out;
    }

    .expander-body.open {
      display: block;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .section-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-bright);
      margin: 1.25rem 0 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .section-title:first-child { margin-top: 0; }

    .links-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .links-list li {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .tag-pill {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      background: var(--bg);
      border: 1px solid var(--border);
      padding: 0.15rem 0.45rem;
      border-radius: 4px;
      color: var(--text-muted);
      flex-shrink: 0;
    }

    .comment-quote {
      background: var(--bg);
      border-left: 2px solid var(--border);
      padding: 0.4rem 0.75rem;
      margin: 0.25rem 0 0.5rem 1.25rem;
      font-size: 0.82rem;
      color: var(--text-muted);
      border-radius: 0 4px 4px 0;
      font-style: italic;
    }

    .empty-state {
      text-align: center;
      padding: 4rem 1rem;
      color: var(--text-muted);
    }
  </style>
</head>
<body>
  <header>
    <div class="header-container">
      <div class="title-area">
        <h1>🌐 Chrome Ecosystem Updates</h1>
        <p>Weekly web intelligence on shipping APIs, cross-browser consensus, developer sentiment, and polyfills</p>
      </div>
      <div class="header-badges">
        <span class="badge badge-primary">Week: ${weekString}</span>
        <span class="badge">Chrome ${milestones.length > 3 ? `${Math.min(...milestones)}–${Math.max(...milestones)} (${milestones.length} releases)` : milestones.join(', ')}</span>
        ${reportData.telemetry?.searchProvider ? `<span class="badge" title="Web Search Engine">🔎 ${reportData.telemetry.searchProvider}</span>` : ''}
        ${reportData.telemetry?.aiProvider ? `<span class="badge" title="AI Analysis Engine">🤖 ${reportData.telemetry.aiProvider}</span>` : ''}
        <a href="feed.xml" class="badge badge-warning badge-link" title="Subscribe via RSS">📡 RSS Feed</a>
        <a href="latest.json" class="badge badge-link" target="_blank">📄 JSON API</a>
      </div>
    </div>
  </header>

  <main class="main-container">
    <div class="stats-grid">
      <div class="stat-card">
        <div class="num" id="stat-total">0</div>
        <div class="label">Features Analyzed</div>
      </div>
      <div class="stat-card">
        <div class="num" id="stat-high" style="color: var(--primary);">0</div>
        <div class="label">High Momentum</div>
      </div>
      <div class="stat-card">
        <div class="num" id="stat-consensus" style="color: var(--success);">0</div>
        <div class="label">Multi-Engine Consensus</div>
      </div>
      <div class="stat-card">
        <div class="num" id="stat-contested" style="color: var(--danger);">0</div>
        <div class="label">Contested / Concerns</div>
      </div>
    </div>

    <div class="controls-bar">
      <div class="search-row">
        <input type="text" id="search-input" class="search-input" placeholder="Search features by name, API, CSS property, or keywords...">
      </div>
      ${milestones && milestones.length > 1 ? `
      <div class="filters-row">
        <span class="filter-label">Milestone:</span>
        <button class="filter-btn active" data-filter-type="milestone" data-filter-val="all">All (${milestones.length} releases)</button>
        ${[...milestones].sort((a, b) => b - a).map(m => `
          <button class="filter-btn" data-filter-type="milestone" data-filter-val="${m}">Chrome ${m}</button>
        `).join('')}
      </div>
      ` : ''}
      <div class="filters-row">
        <span class="filter-label">Status:</span>
        <button class="filter-btn active" data-filter-type="status" data-filter-val="all">All</button>
        <button class="filter-btn" data-filter-type="status" data-filter-val="enabled">Enabled by default</button>
        <button class="filter-btn" data-filter-type="status" data-filter-val="origin-trial">Origin Trial</button>
        <button class="filter-btn" data-filter-type="status" data-filter-val="flagged">Behind Flag</button>
        <button class="filter-btn" data-filter-type="status" data-filter-val="deprecated">Deprecated</button>
      </div>
      <div class="filters-row">
        <span class="filter-label">Momentum:</span>
        <button class="filter-btn active" data-filter-type="momentum" data-filter-val="all">All</button>
        <button class="filter-btn" data-filter-type="momentum" data-filter-val="High">High</button>
        <button class="filter-btn" data-filter-type="momentum" data-filter-val="Moderate">Moderate</button>
        <button class="filter-btn" data-filter-type="momentum" data-filter-val="Emerging">Emerging</button>
        <button class="filter-btn" data-filter-type="momentum" data-filter-val="Quiet">Quiet</button>
      </div>
    </div>

    <div id="feature-container" class="feature-list"></div>
    <div id="empty-state" class="empty-state" style="display: none;">
      <h2>No features match your current filters.</h2>
      <p>Try resetting filters or adjusting your search terms.</p>
    </div>
  </main>

  <script>
    const reportData = ${safeJsonData};
    const features = reportData.features || [];

    let currentMilestone = 'all';
    let currentStatus = 'all';
    let currentMomentum = 'all';
    let currentSearch = '';

    function updateStats() {
      const activeSubset = currentMilestone === 'all'
        ? features
        : features.filter(f => String(f.feature.milestone) === String(currentMilestone));

      document.getElementById('stat-total').textContent = activeSubset.length;
      document.getElementById('stat-high').textContent = activeSubset.filter(f => f.analysis.momentumLevel === 'High').length;
      document.getElementById('stat-consensus').textContent = activeSubset.filter(f => f.analysis.consensus === 'Multi-Engine Consensus').length;
      document.getElementById('stat-contested').textContent = activeSubset.filter(f => f.analysis.consensus.includes('Contested') || f.analysis.consensus.includes('Concerns')).length;
    }

    function renderFeatures() {
      const container = document.getElementById('feature-container');
      const emptyState = document.getElementById('empty-state');

      const filtered = features.filter(item => {
        const f = item.feature;
        const a = item.analysis;

        if (currentMilestone !== 'all' && String(f.milestone) !== String(currentMilestone)) return false;
        if (currentStatus !== 'all' && f.statusType !== currentStatus) return false;
        if (currentMomentum !== 'all' && a.momentumLevel !== currentMomentum) return false;

        if (currentSearch) {
          const q = currentSearch.toLowerCase();
          const matchName = f.name.toLowerCase().includes(q);
          const matchSummary = f.summary.toLowerCase().includes(q);
          const matchTags = (f.tags || []).some(t => t.toLowerCase().includes(q));
          if (!matchName && !matchSummary && !matchTags) return false;
        }

        return true;
      });

      if (filtered.length === 0) {
        container.innerHTML = '';
        emptyState.style.display = 'block';
        return;
      }

      emptyState.style.display = 'none';

      container.innerHTML = filtered.map(item => {
        const f = item.feature;
        const a = item.analysis;
        const eco = item.ecosystem;

        const momentumBadgeClass = a.momentumLevel === 'High' ? 'badge-primary'
          : a.momentumLevel === 'Moderate' ? 'badge-success'
          : 'badge';

        const consensusBadgeClass = a.consensus === 'Multi-Engine Consensus' ? 'badge-success'
          : a.consensus.includes('Contested') ? 'badge-danger'
          : 'badge-warning';

        // Vendor direct URLs
        const chromeUrl = f.bugUrl || f.chromeStatusUrl;
        const ffStd = (eco.standards || []).find(s => s.vendor === 'Mozilla');
        const firefoxUrl = f.browsers?.firefox?.url || ffStd?.url || \`https://github.com/mozilla/standards-positions/issues?q=\${encodeURIComponent(f.name)}\`;
        
        const safariStd = (eco.standards || []).find(s => s.vendor === 'WebKit');
        const safariUrl = f.browsers?.safari?.url || safariStd?.url || \`https://github.com/WebKit/standards-positions/issues?q=\${encodeURIComponent(f.name)}\`;

        // Top discussion URL for Community buzz tile (Hacker News or Twitter / X)
        const twitterDiscussions = (eco.discussions || []).filter(d => (d.source || '').includes('Twitter') || (d.source || '').includes('X'));
        const hnDiscussions = (eco.discussions || []).filter(d => (d.source || '').includes('Hacker News'));
        const topDiscussion = (eco.discussions && eco.discussions.length > 0) ? eco.discussions[0] : null;
        const communityUrl = topDiscussion ? (topDiscussion.discussionUrl || topDiscussion.url) : \`https://hn.algolia.com/?q=\${encodeURIComponent(f.name)}\`;
        const communityTileTitle = twitterDiscussions.length > 0 && hnDiscussions.length > 0
          ? 'Community Pulse'
          : twitterDiscussions.length > 0
            ? 'X / Twitter'
            : 'HN Buzz';
        const communityTileVal = twitterDiscussions.length > 0 && hnDiscussions.length > 0
          ? \`\${eco.metrics.hnPoints || 0} pts (HN) · \${eco.metrics.twitterLikes || 0} likes (X)\`
          : twitterDiscussions.length > 0
            ? \`\${eco.metrics.twitterLikes || 0} likes (\${eco.metrics.twitterReplies || 0} replies)\`
            : \`\${eco.metrics.hnPoints || 0} pts (\${eco.metrics.hnComments || 0} msgs)\`;

        // Clickable polyfill badge
        const polyfill = eco.verifiedPolyfill;
        const polyfillBadge = polyfill ? \`
          <a href="\${polyfill.url}" target="_blank" rel="noopener" class="badge badge-purple badge-link" title="Open \${escapeHtml(polyfill.name)} on NPM">
            📦 Polyfill: \${escapeHtml(polyfill.name)} ↗
          </a>
        \` : '';

        // Baseline badge
        const baseline = eco.baseline;
        const baselineBadge = baseline ? \`
          <a href="\${baseline.url}" target="_blank" rel="noopener" class="badge \${baseline.status === 'widely' ? 'badge-success' : baseline.status === 'newly' ? 'badge-primary' : 'badge-warning'}" title="View Baseline Status on baseline.dev">
            🌐 \${escapeHtml(baseline.statusLabel)} ↗
          </a>
        \` : '';

        // Counts for expander pill counters
        const stdCount = (eco.standards || []).length;
        const bzCount = (eco.bugs || []).length;
        const discCount = (eco.discussions || []).length;
        const blogCount = (eco.blogs || []).length;
        const docCount = (eco.docs || []).length;
        const pkgCount = (eco.packages || []).length;

        return \`
          <article class="feature-card" id="card-\${f.id}">
            <div class="feature-header">
              <h2 class="feature-title">
                <a href="\${escapeHtml(f.chromeStatusUrl)}" target="_blank" rel="noopener">\${escapeHtml(f.name)}</a>
              </h2>
              <div class="feature-badges">
                <span class="badge">Chrome \${escapeHtml(f.milestone || '')}</span>
                <span class="badge \${momentumBadgeClass}">\${escapeHtml(a.momentumLevel)} Momentum</span>
                <span class="badge \${consensusBadgeClass}">\${escapeHtml(a.consensus)}</span>
                \${baselineBadge}
                \${polyfillBadge}
                \${a.isGroundedWithGoogleSearch ? '<span class="badge badge-primary" title="Grounded with live Google Search via Gemini">🌐 Google Search Grounded</span>' : ''}
              </div>
            </div>

            <p class="feature-summary">\${escapeHtml(f.summary)}</p>

            <div class="analysis-callout">
              <strong>💡 Takeaway:</strong> \${escapeHtml(a.executiveSummary)}
              \${a.groundedQueries && a.groundedQueries.length ? \`
                <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.45rem;">
                  🔍 <strong>Google Search Grounding:</strong> \${a.groundedQueries.map(q => \`<em>"\${escapeHtml(q)}"</em>\`).join(', ')}
                </div>
              \` : ''}
            </div>

            <!-- Clickable Interactive Vendor Tiles -->
            <div class="vendors-grid">
              <a href="\${escapeHtml(chromeUrl)}" target="_blank" rel="noopener" class="vendor-tile" title="View Chromium Bug / Status">
                <div class="vendor-tile-header">
                  <span class="name">Chromium</span>
                  <span class="external-arrow">↗</span>
                </div>
                <div class="val">\${escapeHtml(f.browsers?.chrome?.status || 'Active')}</div>
                <div class="subtext">Tracking Bug & CLs</div>
              </a>

              <a href="\${escapeHtml(firefoxUrl)}" target="_blank" rel="noopener" class="vendor-tile" title="View Mozilla Standards Position Issue">
                <div class="vendor-tile-header">
                  <span class="name">Firefox</span>
                  <span class="external-arrow">↗</span>
                </div>
                <div class="val">\${escapeHtml(f.browsers?.firefox?.view || 'No signal')}</div>
                <div class="subtext">\${ffStd ? 'Standards Issue #' + escapeHtml(ffStd.url.split('/').pop()) : 'Search Position'}</div>
              </a>

              <a href="\${escapeHtml(safariUrl)}" target="_blank" rel="noopener" class="vendor-tile" title="View WebKit Standards Position Issue">
                <div class="vendor-tile-header">
                  <span class="name">Safari</span>
                  <span class="external-arrow">↗</span>
                </div>
                <div class="val">\${escapeHtml(f.browsers?.safari?.view || 'No signal')}</div>
                <div class="subtext">\${safariStd ? 'Standards Issue #' + escapeHtml(safariStd.url.split('/').pop()) : 'Search Position'}</div>
              </a>

              <a href="\${escapeHtml(communityUrl)}" target="_blank" rel="noopener" class="vendor-tile" title="View Developer Discussions on \${escapeHtml(communityTileTitle)}">
                <div class="vendor-tile-header">
                  <span class="name">\${escapeHtml(communityTileTitle)}</span>
                  <span class="external-arrow">↗</span>
                </div>
                <div class="val">\${escapeHtml(communityTileVal)}</div>
                <div class="subtext">\${topDiscussion ? 'View Top Discussion' : 'Search Discussions'}</div>
              </a>
            </div>

            <!-- Overhauled Accordion Expander (No longer looks like a select box!) -->
            <button type="button" class="expander-trigger" id="btn-exp-\${f.id}" onclick="toggleDetails('\${f.id}')">
              <div class="expander-left">
                <span>🔍 Ecosystem Evidence & Inspected Resources</span>
                <span class="expander-pill">🏛️ \${stdCount} standards</span>
                \${bzCount ? \`<span class="expander-pill">🐛 \${bzCount} bugs</span>\` : ''}
                \${blogCount ? \`<span class="expander-pill">📰 \${blogCount} blogs</span>\` : ''}
                <span class="expander-pill">💬 \${discCount} discussions</span>
                \${polyfill ? '<span class="expander-pill" style="color: var(--purple);">📦 1 polyfill</span>' : ''}
              </div>
              <span class="expander-chevron" id="chev-\${f.id}">⌄</span>
            </button>

            <div class="expander-body" id="details-\${f.id}">
              \${a.takeaways && a.takeaways.length ? \`
                <div class="section-title">💡 Key Recommendations & Analysis:</div>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.25rem;">
                  \${a.takeaways.map(t => \`<li>\${escapeHtml(t)}</li>\`).join('')}
                </ul>
              \` : ''}

              \${polyfill ? \`
                <div class="section-title">📦 Verified NPM Polyfill / Package:</div>
                <ul class="links-list" style="margin-bottom: 1.25rem;">
                  <li>
                    📦 <a href="\${polyfill.url}" target="_blank" rel="noopener"><strong>\${escapeHtml(polyfill.name)}</strong></a>
                    <span class="tag-pill">v\${polyfill.version}</span>
                    <span>— \${escapeHtml(polyfill.description)}</span>
                  </li>
                </ul>
              \` : ''}

              \${eco.standards && eco.standards.length ? \`
                <div class="section-title">🏛️ Standards Positions & Inspected Issues:</div>
                <ul class="links-list" style="margin-bottom: 1.25rem;">
                  \${eco.standards.map(s => \`
                    <li>
                      <div>
                        🏛️ <strong>\${s.vendor}:</strong>
                        <a href="\${s.url}" target="_blank" rel="noopener">\${escapeHtml(s.title)}</a>
                        <span class="tag-pill">[\${s.state}]</span>
                        \${(s.labels || []).map(l => \`<span class="tag-pill">\${escapeHtml(l)}</span>\`).join(' ')}
                        \${s.commentSummary ? \`<div class="comment-quote">\${escapeHtml(s.commentSummary)}</div>\` : ''}
                      </div>
                    </li>
                  \`).join('')}
                </ul>
              \` : ''}

              \${eco.bugs && eco.bugs.length ? \`
                <div class="section-title">🐛 Engine Implementation Trackers (Bugzilla):</div>
                <ul class="links-list" style="margin-bottom: 1.25rem;">
                  \${eco.bugs.map(b => \`
                    <li>
                      🐛 <strong>\${escapeHtml(b.vendor)}:</strong>
                      <a href="\${b.url}" target="_blank" rel="noopener">Bug #\${b.id}: \${escapeHtml(b.title)}</a>
                      <span class="tag-pill">\${escapeHtml(b.status)}\${b.resolution ? ' (' + escapeHtml(b.resolution) + ')' : ''}</span>
                    </li>
                  \`).join('')}
                </ul>
              \` : ''}

              \${eco.discussions && eco.discussions.length ? \`
                <div class="section-title">💬 Verified Community Discussions & Social Pulse:</div>
                <ul class="links-list" style="margin-bottom: 1.25rem;">
                  \${eco.discussions.slice(0, 8).map(d => \`
                    <li>
                      <div>
                        \${(d.source || '').includes('Twitter') ? '🐦' : '💬'}
                        <strong style="color: var(--text);">\${escapeHtml(d.source || 'Discussion')}:</strong>
                        <a href="\${escapeHtml(d.discussionUrl || d.url)}" target="_blank" rel="noopener">
                          \${escapeHtml(d.title || d.content)}
                        </a>
                        <span class="tag-pill">\${d.points} \${(d.source || '').includes('Twitter') ? 'likes & RTs' : 'pts'} / \${d.commentsCount} \${(d.source || '').includes('Twitter') ? 'replies' : 'comments'}</span>
                        \${d.author ? \`<span class="tag-pill" style="color: var(--primary);">\${escapeHtml(d.author)}</span>\` : ''}
                        \${(d.content && d.content !== d.title) ? \`<div class="comment-quote">\${escapeHtml(d.content.slice(0, 220))}...</div>\` : ''}
                      </div>
                    </li>
                  \`).join('')}
                </ul>
              \` : ''}

              \${(eco.blogs && eco.blogs.length) ? \`
                <div class="section-title">📰 Ecosystem Blogs & Articles:</div>
                <ul class="links-list" style="margin-bottom: 1.25rem;">
                  \${eco.blogs.slice(0, 6).map(art => \`
                    <li>
                      <div>
                        📰 <a href="\${art.url}" target="_blank" rel="noopener"><strong>\${escapeHtml(art.title)}</strong></a>
                        \${art.domain ? \`<span class="tag-pill">\${art.domain}</span>\` : ''}
                        \${art.author ? \`<span class="tag-pill">by \${escapeHtml(art.author)}</span>\` : ''}
                        \${(art.contentExcerpt || art.snippet) ? \`<div class="comment-quote">\${escapeHtml((art.contentExcerpt || art.snippet).slice(0, 220))}...</div>\` : ''}
                      </div>
                    </li>
                  \`).join('')}
                </ul>
              \` : ''}

              \${(eco.reverseLinks && eco.reverseLinks.length) ? \`
                <div class="section-title">🔗 Inbound Citations & Reverse Links:</div>
                <ul class="links-list" style="margin-bottom: 1.25rem;">
                  \${eco.reverseLinks.slice(0, 5).map(link => \`
                    <li>
                      <div>
                        🔗 <a href="\${link.url}" target="_blank" rel="noopener"><strong>\${escapeHtml(link.title)}</strong></a>
                        \${link.domain ? \`<span class="tag-pill">\${link.domain}</span>\` : ''}
                        \${link.reverseLinkedTo ? \`<span class="tag-pill" style="color: var(--purple);">Cites: \${escapeHtml(link.reverseLinkedTo)}</span>\` : ''}
                        \${(link.contentExcerpt || link.snippet) ? \`<div class="comment-quote">\${escapeHtml((link.contentExcerpt || link.snippet).slice(0, 220))}...</div>\` : ''}
                      </div>
                    </li>
                  \`).join('')}
                </ul>
              \` : ''}

              \${(eco.docs && eco.docs.length) ? \`
                <div class="section-title">📚 Documentation & Specifications:</div>
                <ul class="links-list" style="margin-bottom: 1.25rem;">
                  \${eco.docs.slice(0, 5).map(doc => \`
                    <li>
                      📚 <a href="\${doc.url}" target="_blank" rel="noopener">\${escapeHtml(doc.title)}</a>
                      \${doc.domain ? \`<span class="tag-pill">\${doc.domain}</span>\` : ''}
                    </li>
                  \`).join('')}
                </ul>
              \` : ''}

              \${eco.auditTrail ? \`
                <div class="section-title">🔍 Investigation Audit Trail:</div>
                <div style="background: var(--bg); border: 1px solid var(--border); border-radius: 8px; padding: 0.85rem 1rem; margin-bottom: 1.25rem; font-size: 0.85rem;">
                  <div style="margin-bottom: 0.4rem;"><strong>Searches Executed:</strong></div>
                  <ul style="list-style: none; margin-left: 0.5rem; margin-bottom: 0.65rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 0.35rem;">
                    \${(eco.auditTrail.searchesExecuted || []).map(s => \`
                      <li>
                        • <strong style="color: var(--text);">\${escapeHtml(s.provider || (s.type || '').toUpperCase())}:</strong> \${s.status ? \`<em style="color: var(--text-muted);">(\${escapeHtml(s.status)})</em>\` : \`\${s.query ? '<em>"' + escapeHtml(s.query) + '"</em> — ' : ''}found \${s.rawFound || s.count || 0} candidate(s), verified \${s.verified !== undefined ? s.verified : s.count || 0}\`}
                        \${s.queryAudits && s.queryAudits.length ? \`
                          <ul style="margin-left: 1.2rem; margin-top: 0.25rem; font-size: 0.8rem; color: var(--text-muted); list-style: circle;">
                            \${s.queryAudits.map(qa => \`
                              <li><code>\${escapeHtml(qa.query)}</code> \${qa.isReverseLink ? '<span class="tag-pill" style="font-size: 0.7rem;">Reverse</span>' : ''} — <em>\${escapeHtml(qa.description)}</em> (\${qa.count} found)</li>
                            \`).join('')}
                          </ul>
                        \` : ''}
                      </li>
                    \`).join('')}
                  </ul>
                  <div><strong>Content Inspected:</strong></div>
                  <div style="color: var(--text-muted); margin-left: 0.5rem; margin-top: 0.2rem;">
                    Spec verified: \${eco.auditTrail.contentInspected?.hasSpec ? '✔ Yes' : '○ None'} |
                    Explainers read: \${eco.auditTrail.contentInspected?.explainerCount || 0} |
                    Standards comments read: \${eco.auditTrail.contentInspected?.standardsCommentsRead || 0} |
                    Docs indexed: \${eco.auditTrail.contentInspected?.docCount || 0}
                  </div>
                </div>
              \` : ''}

              <div class="section-title">🔗 Official Platform References:</div>
              <ul class="links-list">
                <li>🔗 <a href="\${escapeHtml(f.chromeStatusUrl)}" target="_blank" rel="noopener">ChromeStatus (#\${escapeHtml(f.id)}) ↗</a></li>
                <li>⚡ <a href="\${escapeHtml(f.chromeStatusLiteUrl)}" target="_blank" rel="noopener">ChromeStatusLite ↗</a></li>
                \${f.specUrl ? \`<li>📜 <a href="\${escapeHtml(f.specUrl)}" target="_blank" rel="noopener">Specification Standard ↗</a></li>\` : ''}
                \${f.bugUrl ? \`<li>🐛 <a href="\${escapeHtml(f.bugUrl)}" target="_blank" rel="noopener">Chromium Bug Tracker ↗</a></li>\` : ''}
              </ul>
            </div>
          </article>
        \`;
      }).join('');
    }

    function toggleDetails(id) {
      const el = document.getElementById('details-' + id);
      const btn = document.getElementById('btn-exp-' + id);
      if (el) el.classList.toggle('open');
      if (btn) btn.classList.toggle('active');
    }

    function escapeHtml(str) {
      if (str === null || str === undefined) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const type = btn.dataset.filterType;
        const val = btn.dataset.filterVal;

        document.querySelectorAll(\`[data-filter-type="\${type}"]\`).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (type === 'milestone') currentMilestone = val;
        if (type === 'status') currentStatus = val;
        if (type === 'momentum') currentMomentum = val;
        updateStats();
        renderFeatures();
      });
    });

    document.getElementById('search-input').addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      renderFeatures();
    });

    updateStats();
    renderFeatures();
  </script>
</body>
</html>`;
}

export async function writeDashboardHtml(reportData) {
  await fs.mkdir(config.reportsDir, { recursive: true });
  const html = generateDashboardHtml(reportData);
  const filePath = path.join(config.reportsDir, 'index.html');
  await fs.writeFile(filePath, html, 'utf-8');
  await fs.writeFile(path.join(config.reportsDir, '.nojekyll'), '', 'utf-8');
  return filePath;
}
