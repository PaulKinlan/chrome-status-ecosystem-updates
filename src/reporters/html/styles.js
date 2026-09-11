export const STYLES = `
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
      color-scheme: dark light;
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

    /* Accessibility focus-visible */
    *:focus-visible {
      outline: 2px solid var(--border-focus);
      outline-offset: 2px;
    }

    /* Skip link */
    .skip-link {
      position: absolute;
      top: -40px;
      left: 0;
      background: var(--primary);
      color: #fff;
      padding: 8px;
      z-index: 100;
      transition: top 0.2s;
    }
    .skip-link:focus {
      top: 0;
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
      text-align: left;
      font-family: inherit;
    }

    button.stat-card {
      cursor: pointer;
      transition: background 0.15s ease, transform 0.1s ease;
    }

    button.stat-card:hover {
      background: var(--surface-hover);
    }

    button.stat-card:active {
      background: var(--surface-active);
      transform: scale(0.98);
    }

    .stat-card .num {
      font-size: 2.2rem;
      font-weight: 800;
      color: var(--text-bright);
      line-height: 1.1;
      letter-spacing: -0.02em;
    }

    /* Colour modifiers live here rather than as inline style attributes so the
       page can be served under a CSP without unsafe-inline. */
    .stat-card .num-primary { color: var(--primary); }
    .stat-card .num-success { color: var(--success); }
    .stat-card .num-danger  { color: var(--danger); }
    .stat-card .num-purple  { color: var(--purple); }

    .noscript-note {
      text-align: center;
      padding: 2rem;
      color: var(--text-muted);
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

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    .search-input {
      flex: 1;
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.75rem 1.1rem;
      color: var(--text-bright);
      font-size: 0.95rem;
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

    .filter-btn[aria-pressed="true"] {
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
      content-visibility: auto;
      contain-intrinsic-size: 1px 500px;
    }

    /* The first few cards shouldn't have content-visibility so they render instantly */
    .feature-card:nth-child(-n+3) {
      content-visibility: visible;
    }

    .feature-card:hover {
      border-color: rgba(56, 189, 248, 0.4);
      box-shadow: var(--shadow-md);
    }

    .feature-card[hidden] {
      display: none !important;
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

    @media (prefers-reduced-motion: reduce) {
      .vendor-tile:hover {
        transform: none;
      }
      .expander-chevron {
        transition: none;
      }
      .expander-body {
        animation: none;
      }
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

    .expander-trigger[aria-expanded="true"] .expander-chevron {
      transform: rotate(180deg);
    }

    .expander-body {
      margin-top: 1.25rem;
      padding-top: 1.25rem;
      border-top: 1px solid var(--border);
      animation: fadeIn 0.2s ease-in-out;
    }

    .expander-body[hidden] {
      display: none !important;
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
    .empty-state[hidden] {
      display: none !important;
    }
`;
