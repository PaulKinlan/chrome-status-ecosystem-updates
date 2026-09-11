# 🌐 ChromeStatus Ecosystem Updates

Automated weekly web & developer ecosystem intelligence tracker for Web Platform features on [chromestatus.com](https://chromestatus.com) and [chromestatuslite.com](https://chromestatuslite.com).

Each week, this tool discovers what features are shipping, in origin trial, or deprecated in Chrome, searches the web and developer ecosystem to find out what is actually happening in relation to each API, and generates rich multi-format reports.

---

## 🌟 What It Does

For every feature across target Chrome milestones (or individual features), the crawler investigates:

1. **🏛️ Standards Consensus & Cross-Browser Alignment:**
   - Tracks **WebKit Standards Positions** (`WebKit/standards-positions` issues, labels, vendor sentiment).
   - Tracks **Mozilla Standards Positions** (`mozilla/standards-positions` issues, labels, vendor sentiment).
   - Tracks **W3C TAG Design Reviews** (`w3ctag/design-reviews`).
   - Identifies whether an API has true multi-engine consensus or is contested / raised concerns.

2. **💬 Community Discussions & Sentiment:**
   - Queries **Hacker News (Algolia API)** for developer threads, critiques, point counts, and comments.
   - Identifies whether developers are enthusiastic, skeptical, or raising security/privacy concerns.

3. **📦 Polyfills & NPM Ecosystem:**
   - Searches the **NPM registry** to check if community polyfills, shims, or TypeScript types (`@types/*`) exist for progressive enhancement.

4. **📚 Articles, Tutorials & Documentation:**
   - Searches the web for articles, blog posts, and guides from `web.dev`, `developer.chrome.com`, `MDN`, `Smashing Magazine`, `CSS-Tricks`, and developer blogs.
   - Supports pluggable search providers (**Google Gemini Live Search Grounding**, **Brave Search**, **Google Custom Search**, or built-in free web & feed sources).

5. **🧪 Web Platform Tests (WPT) & Demos:**
   - Links to **wpt.fyi** test pass rates and indexes official explainer docs, specifications, and interactive demos.

6. **⚡ Week-over-Week Delta Tracking:**
   - Preserves historical snapshots in `data/history.json` to highlight **What Happened This Week** (new articles, new discussions, status transitions).

7. **💡 Synthesized Executive Insights:**
   - Heuristic rule-based analyzer evaluates **Momentum Level** (*High*, *Moderate*, *Emerging*, *Quiet*), **Consensus**, and **Developer Takeaways**.
   - Optional **Google Gemini** or **OpenAI** LLM synthesis for natural language briefings.

---

## 📊 Generated Reports

Every run outputs:
- **`reports/index.html`**: Standalone, responsive HTML dashboard with instant search, filter pills (Milestone, Status, Momentum, Consensus), and expandable feature drawers.
- **`reports/weekly/YYYY-Wxx.md`**: Executive weekly summary formatted in GitHub-flavored Markdown.
- **`reports/features/<id>-<slug>.md`**: Dedicated deep-dive Markdown page for every feature.
- **`reports/latest.json`** & **`reports/weekly/YYYY-Wxx.json`**: Structured JSON data for downstream automations, Slack/Discord webhooks, or dashboards.
- **`reports/feed.xml`**: RSS 2.0 / Atom feed for RSS feed readers.

---

## 🚀 Quick Start

### Requirements
- **Node.js 20.0.0+** (ESM native, zero external dependencies required!)

### Installation
```bash
git clone https://github.com/PaulKinlan/chrome-status-ecosystem-updates.git
cd chrome-status-ecosystem-updates
```

No `npm install` required to get started — it uses Node's standard library!

---

## 💻 CLI Usage

### 1. Run the weekly ecosystem report
```bash
# Target the last 5 Chrome releases (the default)
node bin/cli.js run

# Target the last 5 Chrome releases (e.g. Chrome 150–154)
node bin/cli.js run --last 5

# Target a milestone range or comma-separated list
node bin/cli.js run --milestone 150-154
node bin/cli.js run --milestone 150,152,154

# Test run with a limit of 5 features across the last 5 releases
node bin/cli.js run --last 5 --limit 10

# Run and automatically start the preview web server
node bin/cli.js run --serve

# Control how many features are investigated in parallel (default 4)
node bin/cli.js run --concurrency 8

# Print the version
node bin/cli.js --version
```

### 2. Inspect a single feature in your terminal
Fetch real-time ecosystem intelligence for a specific ChromeStatus feature ID:
```bash
node bin/cli.js inspect 5183481574850560
```

### 3. View current Chrome release milestones
```bash
node bin/cli.js channels
```

### 4. Serve the HTML dashboard locally
```bash
node bin/cli.js serve --port 3000
# Open http://localhost:3000

# The server binds to 127.0.0.1 by default. Expose it deliberately if needed:
node bin/cli.js serve --host 0.0.0.0
```

### 5. Run the test suite
```bash
npm test              # offline unit tests (no network)
npm run test:coverage # with coverage summary
npm run test:integration  # additionally runs tests that hit live APIs
```

---

## ⚙️ Configuration (.env)

Copy `.env.example` to `.env` to configure search providers, tokens, or AI synthesis:

```bash
cp .env.example .env
```

| Environment Variable | Description | Default |
| :--- | :--- | :--- |
| `TARGET_MILESTONES` | Milestones to crawl (`last-5`, `auto`, `150-154`, `150,151,152`) | `last-5` |
| `FEATURE_STATUSES` | Filter by status: `enabled,origin-trial,flagged,deprecated` | all |
| `MAX_FEATURES` | Cap number of features processed per run | (unlimited) |
| `CONCURRENCY` | Features investigated in parallel (1–16) | `4` |
| `GITHUB_TOKEN` | GitHub Personal Access Token (boosts API limit from 60 to 5000/hr) | *(optional)* |
| `SEARCH_PROVIDER` | Web search provider: `auto`, `gemini`, `brave`, `google` | `auto` |
| `GEMINI_API_KEY` | Google Gemini API key (enables native Google Search Grounding & synthesis) | *(optional)* |
| `GEMINI_MODEL` | Gemini model version | `gemini-3.8-flash` |
| `BRAVE_SEARCH_API_KEY` | Brave Search API key (independent web index) | *(optional)* |
| `GOOGLE_SEARCH_API_KEY` | Google Custom Search API Key (needs `GOOGLE_SEARCH_CX` too) | *(optional)* |
| `GOOGLE_SEARCH_CX` | Google Custom Search Engine ID | *(optional)* |
| `TWITTER_BEARER_TOKEN` | Twitter / X Bearer Token (Twitter API v2 app-only search) | *(optional)* |
| `AI_PROVIDER` | Advisory only — see note below | `gemini` |
| `OPENAI_API_KEY` | OpenAI API key (alternative AI synthesis) | *(optional)* |
| `REPORTS_DIR` | Directory where reports are saved | `./reports` |
| `PORT` | Local preview server port | `3000` |
| `HOST` | Local preview server interface | `127.0.0.1` |

> [!NOTE]
> `AI_PROVIDER` is recorded in report telemetry but does not select the engine.
> The analyzer uses Gemini when `GEMINI_API_KEY` is set, otherwise OpenAI when
> `OPENAI_API_KEY` is set, otherwise the built-in heuristic engine. Leave both
> keys blank to force heuristics.


> [!NOTE]
> **Zero API Keys Required:** If no external search or AI keys are configured, the tool runs completely on free public ecosystem endpoints (Hacker News Algolia API, GitHub Standards Positions, NPM registry, WPT, ChromeStatus) and uses the smart rule-based Heuristic Analyzer!

---

## ⏰ Automated Weekly Scheduling

### GitHub Actions (Recommended)
This repository includes a scheduled GitHub Actions workflow in [`.github/workflows/weekly-report.yml`](.github/workflows/weekly-report.yml):
- Runs automatically **every Monday at 09:00 UTC** (`0 9 * * 1`).
- Generates new Markdown, HTML, JSON, and RSS reports.
- Automatically commits updated reports and `data/history.json` to git.
- Automatically deploys the interactive dashboard to **GitHub Pages**.
- Can also be triggered manually on demand via GitHub's **Run workflow** button.

---

## 🏗️ Project Architecture

```
chrome-status-ecosystem-updates/
├── .github/workflows/
│   └── weekly-report.yml       # Weekly cron automation + GitHub Pages deploy
├── bin/
│   └── cli.js                  # CLI executable entrypoint
├── src/
│   ├── index.js                # Core module exports
│   ├── config.js               # Environment & options loader
│   ├── chromestatus.js         # ChromeStatus / ChromeStatusLite data fetcher & normalizer
│   ├── search/
│   │   ├── index.js            # Unified search coordinator & deduplicator
│   │   ├── hackernews.js       # Hacker News Algolia discussion search
│   │   ├── standards.js        # WebKit, Mozilla & W3C TAG standards positions
│   │   ├── bugzilla.js         # Mozilla & WebKit Bugzilla trackers
│   │   ├── baseline.js         # baseline.dev & webstatus.dev interoperability
│   │   ├── mdn.js              # MDN Web Docs search
│   │   ├── twitter.js          # Twitter / X developer discussion search
│   │   ├── npm.js              # NPM registry search for polyfills & packages
│   │   ├── wpt.js              # Web Platform Tests status
│   │   ├── verifier.js         # LLM & NLP semantic relevance verifier
│   │   └── web.js              # Multi-engine web search (Gemini Grounded, Brave, Google)
│   ├── analyzer/
│   │   ├── index.js            # Analyzer coordinator
│   │   ├── heuristic.js        # Rule-based momentum, consensus & sentiment scoring
│   │   └── ai.js               # Optional Gemini & OpenAI LLM synthesis
│   ├── storage/
│   │   └── cache.js            # Week-over-week snapshot & delta tracker
│   ├── reporters/
│   │   ├── escape.js           # Shared HTML/Markdown/XML output encoding
│   │   ├── viewmodel.js        # Shared presentation shape for a feature
│   │   ├── markdown.js         # Weekly rollup & per-feature markdown generator
│   │   ├── html.js             # Re-export of the dashboard renderer
│   │   ├── html/               # Server-rendered dashboard (styles, client, card)
│   │   ├── json.js             # Structured JSON export
│   │   └── rss.js              # RSS 2.0 / Atom feed generator
│   ├── http.js                 # Timeouts, retries & bounded concurrency
│   ├── runner.js               # Pipeline orchestrator
│   └── server.js               # Preview HTTP server
├── data/
│   └── history.json            # Snapshot history for week-over-week diffing
├── reports/                    # Generated outputs
│   ├── index.html              # Interactive HTML dashboard
│   ├── latest.json             # Latest weekly data
│   ├── feed.xml                # RSS feed
│   ├── weekly/                 # Weekly archive (YYYY-Wxx.md & .json)
│   └── features/               # Per-feature deep-dive markdown files
└── test/                       # Native node:test unit & integration test suite
```

---

## 📄 License

Licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE).
