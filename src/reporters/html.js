import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config.js';

export function generateDashboardHtml(reportData) {
  const { weekString, date, milestones, features } = reportData;
  const safeJsonData = JSON.stringify(reportData).replace(/</g, '\\u003c');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Chrome Ecosystem Updates — ${weekString}</title>
  <meta name="description" content="Weekly Web Platform & API Ecosystem Intelligence Report">
  <style>
    :root {
      --bg: #0d1117;
      --surface: #161b22;
      --surface-hover: #1f242c;
      --border: #30363d;
      --text: #c9d1d9;
      --text-bright: #f0f6fc;
      --text-muted: #8b949e;
      --primary: #58a6ff;
      --primary-hover: #79b8ff;
      --success: #3fb950;
      --warning: #d29922;
      --danger: #f85149;
      --purple: #bc8cff;
      --card-radius: 12px;
      --pill-radius: 999px;
      --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
    }

    @media (prefers-color-scheme: light) {
      :root {
        --bg: #f6f8fa;
        --surface: #ffffff;
        --surface-hover: #f3f4f6;
        --border: #d0d7de;
        --text: #24292f;
        --text-bright: #0969da;
        --text-muted: #57606a;
        --primary: #0969da;
        --primary-hover: #0550ae;
        --success: #1a7f37;
        --warning: #9a6700;
        --danger: #cf222e;
        --purple: #8250df;
      }
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: var(--font-sans);
      line-height: 1.6;
      padding-bottom: 80px;
    }

    a { color: var(--primary); text-decoration: none; }
    a:hover { text-decoration: underline; }

    header {
      background-color: var(--surface);
      border-bottom: 1px solid var(--border);
      padding: 2rem 1.5rem;
      margin-bottom: 2rem;
    }

    .header-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .title-area h1 {
      color: var(--text-bright);
      font-size: 1.8rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .title-area p {
      color: var(--text-muted);
      font-size: 0.95rem;
      margin-top: 0.25rem;
    }

    .header-badges {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.25rem 0.65rem;
      border-radius: var(--pill-radius);
      font-size: 0.8rem;
      font-weight: 600;
      border: 1px solid var(--border);
      background: var(--surface);
      color: var(--text);
    }

    .badge-primary { background: rgba(88, 166, 255, 0.15); color: var(--primary); border-color: rgba(88, 166, 255, 0.3); }
    .badge-success { background: rgba(63, 185, 80, 0.15); color: var(--success); border-color: rgba(63, 185, 80, 0.3); }
    .badge-warning { background: rgba(210, 153, 34, 0.15); color: var(--warning); border-color: rgba(210, 153, 34, 0.3); }
    .badge-danger { background: rgba(248, 81, 73, 0.15); color: var(--danger); border-color: rgba(248, 81, 73, 0.3); }
    .badge-purple { background: rgba(188, 140, 255, 0.15); color: var(--purple); border-color: rgba(188, 140, 255, 0.3); }

    .main-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .stat-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--card-radius);
      padding: 1.25rem;
    }

    .stat-card .num {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-bright);
    }

    .stat-card .label {
      font-size: 0.85rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .controls-bar {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--card-radius);
      padding: 1rem;
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .search-row {
      display: flex;
      gap: 0.5rem;
    }

    .search-input {
      flex: 1;
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.65rem 1rem;
      color: var(--text-bright);
      font-size: 0.95rem;
      outline: none;
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
      font-weight: 600;
      color: var(--text-muted);
      margin-right: 0.25rem;
    }

    .filter-btn {
      background: transparent;
      border: 1px solid var(--border);
      border-radius: var(--pill-radius);
      padding: 0.25rem 0.75rem;
      font-size: 0.8rem;
      color: var(--text-muted);
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .filter-btn:hover {
      background: var(--surface-hover);
      color: var(--text);
    }

    .filter-btn.active {
      background: var(--primary);
      color: #ffffff;
      border-color: var(--primary);
    }

    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .feature-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--card-radius);
      padding: 1.5rem;
      transition: border-color 0.15s ease;
    }

    .feature-card:hover {
      border-color: var(--primary);
    }

    .feature-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 0.75rem;
      flex-wrap: wrap;
    }

    .feature-title {
      font-size: 1.3rem;
      color: var(--text-bright);
      font-weight: 700;
    }

    .feature-badges {
      display: flex;
      gap: 0.4rem;
      flex-wrap: wrap;
    }

    .feature-summary {
      color: var(--text);
      font-size: 0.95rem;
      margin-bottom: 1rem;
    }

    .analysis-callout {
      background: var(--bg);
      border-left: 3px solid var(--primary);
      padding: 0.85rem 1rem;
      border-radius: 4px;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }

    .vendors-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .vendor-box {
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.5rem 0.75rem;
      font-size: 0.85rem;
    }

    .vendor-box .name {
      font-weight: 600;
      color: var(--text-muted);
      font-size: 0.75rem;
      text-transform: uppercase;
    }

    .vendor-box .val {
      font-weight: 600;
      color: var(--text-bright);
    }

    .details-toggle {
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 6px;
      color: var(--text);
      padding: 0.4rem 0.85rem;
      font-size: 0.85rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
    }

    .details-toggle:hover {
      background: var(--surface-hover);
    }

    .feature-details {
      display: none;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border);
      font-size: 0.9rem;
    }

    .feature-details.open {
      display: block;
    }

    .section-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-bright);
      margin: 0.75rem 0 0.4rem;
    }

    .links-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    .links-list li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .tag-pill {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      background: var(--bg);
      border: 1px solid var(--border);
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
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
        <p>Weekly web intelligence on what's shipping, developer sentiment, and standards alignment</p>
      </div>
      <div class="header-badges">
        <span class="badge badge-primary">Report Week: ${weekString}</span>
        <span class="badge">Chrome ${milestones.join(', ')}</span>
        <a href="feed.xml" class="badge badge-warning" title="Subscribe via RSS">📡 RSS Feed</a>
        <a href="latest.json" class="badge" target="_blank">📄 JSON</a>
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

    let currentStatus = 'all';
    let currentMomentum = 'all';
    let currentSearch = '';

    function updateStats() {
      document.getElementById('stat-total').textContent = features.length;
      document.getElementById('stat-high').textContent = features.filter(f => f.analysis.momentumLevel === 'High').length;
      document.getElementById('stat-consensus').textContent = features.filter(f => f.analysis.consensus === 'Multi-Engine Consensus').length;
      document.getElementById('stat-contested').textContent = features.filter(f => f.analysis.consensus.includes('Contested') || f.analysis.consensus.includes('Concerns')).length;
    }

    function renderFeatures() {
      const container = document.getElementById('feature-container');
      const emptyState = document.getElementById('empty-state');

      const filtered = features.filter(item => {
        const f = item.feature;
        const a = item.analysis;

        // Status match
        if (currentStatus !== 'all' && f.statusType !== currentStatus) {
          return false;
        }

        // Momentum match
        if (currentMomentum !== 'all' && a.momentumLevel !== currentMomentum) {
          return false;
        }

        // Search match
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

        return \`
          <article class="feature-card" id="card-\${f.id}">
            <div class="feature-header">
              <h2 class="feature-title">
                <a href="\${f.chromeStatusUrl}" target="_blank" rel="noopener">\${f.name}</a>
              </h2>
              <div class="feature-badges">
                <span class="badge">Chrome \${f.milestone || ''}</span>
                <span class="badge \${momentumBadgeClass}">\${a.momentumLevel} Momentum</span>
                <span class="badge \${consensusBadgeClass}">\${a.consensus}</span>
                \${eco.metrics.hasPolyfill ? '<span class="badge badge-purple">Polyfill Available</span>' : ''}
              </div>
            </div>

            <p class="feature-summary">\${escapeHtml(f.summary)}</p>

            <div class="analysis-callout">
              <strong>💡 Takeaway:</strong> \${escapeHtml(a.executiveSummary)}
            </div>

            <div class="vendors-grid">
              <div class="vendor-box">
                <div class="name">Chromium</div>
                <div class="val">\${f.browsers?.chrome?.status || 'Active'}</div>
              </div>
              <div class="vendor-box">
                <div class="name">Firefox</div>
                <div class="val">\${f.browsers?.firefox?.view || 'No signal'}</div>
              </div>
              <div class="vendor-box">
                <div class="name">Safari</div>
                <div class="val">\${f.browsers?.safari?.view || 'No signal'}</div>
              </div>
              <div class="vendor-box">
                <div class="name">HN Buzz</div>
                <div class="val">\${eco.metrics.hnPoints || 0} pts (\${eco.metrics.hnComments || 0} msgs)</div>
              </div>
            </div>

            <button class="details-toggle" onclick="toggleDetails('\${f.id}')">
              <span>View Ecosystem Findings & Details</span> ▾
            </button>

            <div class="feature-details" id="details-\${f.id}">
              \${a.takeaways && a.takeaways.length ? \`
                <div class="section-title">Key Recommendations:</div>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                  \${a.takeaways.map(t => \`<li>\${escapeHtml(t)}</li>\`).join('')}
                </ul>
              \` : ''}

              \${eco.discussions && eco.discussions.length ? \`
                <div class="section-title">Community Discussions:</div>
                <ul class="links-list" style="margin-bottom: 1rem;">
                  \${eco.discussions.slice(0, 5).map(d => \`
                    <li>💬 <a href="\${d.discussionUrl || d.url}" target="_blank" rel="noopener">\${escapeHtml(d.title)}</a> <span class="tag-pill">\${d.points} pts / \${d.commentsCount} comments</span></li>
                  \`).join('')}
                </ul>
              \` : ''}

              \${eco.standards && eco.standards.length ? \`
                <div class="section-title">Standards Positions & Issues:</div>
                <ul class="links-list" style="margin-bottom: 1rem;">
                  \${eco.standards.map(s => \`
                    <li>🏛️ <strong>\${s.vendor}:</strong> <a href="\${s.url}" target="_blank" rel="noopener">\${escapeHtml(s.title)}</a> <span class="tag-pill">[\${s.state}]</span></li>
                  \`).join('')}
                </ul>
              \` : ''}

              \${eco.packages && eco.packages.length ? \`
                <div class="section-title">NPM Packages & Polyfills:</div>
                <ul class="links-list" style="margin-bottom: 1rem;">
                  \${eco.packages.map(p => \`
                    <li>📦 <a href="\${p.url}" target="_blank" rel="noopener">\${escapeHtml(p.name)}</a> <span class="tag-pill">v\${p.version}</span> - \${escapeHtml(p.description)}</li>
                  \`).join('')}
                </ul>
              \` : ''}

              \${eco.articles && eco.articles.length ? \`
                <div class="section-title">Articles & Guides:</div>
                <ul class="links-list" style="margin-bottom: 1rem;">
                  \${eco.articles.slice(0, 5).map(art => \`
                    <li>📰 <a href="\${art.url}" target="_blank" rel="noopener">\${escapeHtml(art.title)}</a> \${art.domain ? \`<span class="tag-pill">\${art.domain}</span>\` : ''}</li>
                  \`).join('')}
                </ul>
              \` : ''}

              <div class="section-title">Reference Links:</div>
              <ul class="links-list">
                <li>🔗 <a href="\${f.chromeStatusUrl}" target="_blank">ChromeStatus (#\${f.id})</a></li>
                <li>⚡ <a href="\${f.chromeStatusLiteUrl}" target="_blank">ChromeStatusLite</a></li>
                \${f.specUrl ? \`<li>📜 <a href="\${f.specUrl}" target="_blank">Specification</a></li>\` : ''}
                \${f.bugUrl ? \`<li>🐛 <a href="\${f.bugUrl}" target="_blank">Chromium Bug</a></li>\` : ''}
              </ul>
            </div>
          </article>
        \`;
      }).join('');
    }

    function toggleDetails(id) {
      const el = document.getElementById('details-' + id);
      if (el) el.classList.toggle('open');
    }

    function escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    // Set up filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const type = btn.dataset.filterType;
        const val = btn.dataset.filterVal;

        document.querySelectorAll(\`[data-filter-type="\${type}"]\`).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (type === 'status') currentStatus = val;
        if (type === 'momentum') currentMomentum = val;
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
  return filePath;
}
