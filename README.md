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
   - Pages that Gemini cites while writing its synthesis are followed to their real addresses, read and relevance-checked like any other article (see *Sources cited by Gemini* below).

5. **🧪 Baseline, Web Platform Tests & Demos:**
   - Joins each feature to its **web-features** group with the maintained [web-features-mappings](https://github.com/web-platform-dx/web-features-mappings) (by ChromeStatus id) and reports that group's **Baseline** status and **wpt.fyi** pass rate for each browser (read from [webstatus.dev](https://webstatus.dev)), Chrome's use counter and the Mozilla and WebKit positions. All of it is group-level data and is labelled as such (see *Methodology*).
   - Indexes official explainer docs, specifications, and interactive demos.

6. **⚡ Week-over-Week Delta Tracking:**
   - Preserves historical snapshots in `data/history.json` to highlight **What Happened This Week** (new articles, new discussions, status transitions).

7. **💡 Synthesized Executive Insights:**
   - Heuristic rule-based analyzer evaluates **Momentum Level** (*High*, *Moderate*, *Emerging*, *Quiet*), **Consensus**, and **Developer Takeaways**.
   - Optional **Google Gemini** (with automatic fallback to other Gemini models) or **OpenAI** LLM synthesis for natural language briefings. How many features received it is reported with every run (see *Safety Checks & Run Health* below).

---

## 📊 Generated Reports

Every run outputs:
- **`reports/index.html`**: Standalone, responsive HTML dashboard with instant search, filter pills (Milestone, Status, Momentum, Consensus), and expandable feature drawers.
- **`reports/weekly/YYYY-Wxx.md`**: Executive weekly summary formatted in GitHub-flavored Markdown.
- **`reports/summary.md`**: Just the header and the Executive Snapshot of that report, about a kilobyte. It is what the Actions run's summary page shows: a job summary is cut off at 1 MiB, and the whole weekly report can be more than that.
- **`reports/features/<id>-<slug>.md`**: Dedicated deep-dive Markdown page for every feature.
- **`reports/latest.json`** & **`reports/weekly/YYYY-Wxx.json`**: Structured JSON data for downstream automations, Slack/Discord webhooks, or dashboards. The two are the same compact document, `"schemaVersion": 2`, with every article record stored once (see *Output changes*).
- **`reports/feed.xml`**: RSS 2.0 / Atom feed for RSS feed readers.

---

## 🔬 Methodology

What the labels in a report mean and where they come from. Most are heuristics; this section says which.

- **Which features are covered.** Every feature ChromeStatus lists for the milestone window whose stage is in `FEATURE_STATUSES`. A feature listed under several milestones is reported once, at its most advanced stage (see *Known limitations*). `MAX_FEATURES` then keeps the newest milestones first.
- **Momentum** (*High* / *Moderate* / *Emerging* / *Quiet*) is **how much a feature's footprint has grown over about four weeks**, ranked against the other features. The **footprint** is what this tool used to call momentum: a score added up from the evidence found this run, namely Hacker News points ×1.5 and comments ×2, tweet likes ×0.5 (at most 20) and replies (at most 15), 10 per verified article, 15 per standards position, 10 per npm package, +20 for a polyfill and +15 for demos. It measures how much verified evidence exists about a feature, it saturates for well-covered features and it does not say whether attention is growing (80 of the 87 features of one real report were *High* on it). It is still in the report, as `analysis.footprint` and as `analysis.momentumScore`. Every run saves each feature's footprint and the counts behind it (`metrics` in `data/history.json`, one entry per week, the newest 13; a second run in the same week replaces the week's entry, unless that one was measured with the AI synthesis and the second run was not). A feature's **change** is its footprint now minus the one saved about four weeks ago: the saved number nearest to 28 days old, no younger than 21 and no older than 35 days, so a skipped week does not matter. A number measured without the AI synthesis is never compared with one measured with it, because the synthesis adds sources and so points. The tiers are percentiles of the change: the top 15% of the features are *High*, the next 35% *Moderate* and the others that grew *Emerging*; a feature whose footprint did not grow is *Quiet*, and growth of less than 10 points (one more verified article) is never *High* or *Moderate*. Features that tie at a boundary are all placed below it.
- **Momentum before there are numbers to compare.** Every report says what its tiers rest on: the *Momentum* line under the title, `telemetry.momentum.basis`, and the momentum line of each feature. It is `change over four weeks` when at least 10 features, and at least half of the features in the report, have an earlier number to compare with (one measured the same way, about 28 days old, as described above); a feature that has none is then *Emerging* (*no baseline*) and takes no place among the others. Otherwise (a first run, the first weeks after upgrading from a history that has no numbers, when the change can be worked out from the fourth weekly run on, or a week in which the AI synthesis failed for most features, so that this week's numbers cannot be compared with last month's) it is `footprint rank (warm-up)`: this week's footprint ranked against the other features with the same percentiles, and never above what the footprint alone gives (80 or more is *High*, 35 *Moderate*, 10 *Emerging*). A run of fewer than 10 features is too small to rank and shows `footprint level`, that absolute scale. The counts in the *Momentum* line (*N of M features have an earlier number*) are about the features the report lists. A run that does not say `change over four weeks` has not measured four weeks of anything: read its tiers as a ranking of size.
- **Consensus.** From the Firefox and Safari positions ChromeStatus records and the labels on the linked standards-position issues: both engines engaged (shipped, in development or positive) is *Multi-Engine Consensus*; either one opposed, or an oppose/negative label, is *Contested / Concerns Raised*; one engaged is *Partial Multi-Engine Interest*; otherwise *Chromium-Led*.
- **Verified.** An article, discussion or package counts only after a relevance check ([`src/search/verifier.js`](src/search/verifier.js)). A language model decides when an AI key is configured and it answers; otherwise a keyword match against the feature's name, summary and API names decides. Vendor positions that ChromeStatus itself links are trusted without the check. Pages cited by the AI synthesis are read and put through the check too, on the text of the page itself, before the footprint is worked out, so the ones that pass count towards it; a page that cannot be read is not counted.
- **One page, one article.** Pages are compared by `canonicalUrl` ([`src/search/urls.js`](src/search/urls.js)): `http://` and `https://`, with or without `www.`, a trailing slash or dot, a `#fragment`, campaign and click-tracking parameters (`utm_*`, `fbclid`, `gclid`, …) and the order of the remaining query parameters make no difference. The link that is shown is the first spelling found, without the tracking. A feature's own spec, explainer, documentation and sample links are never listed again as articles, whichever way they are spelled.
- **New this week.** Each feature remembers every page it has shown, with the day it last turned up (`seen` in `data/history.json`: at most 500 pages per feature, and a page that has not turned up for a year is forgotten). An article, discussion or standards entry is new only if the feature has **never shown it** and it was **published in the last 30 days or does not say when** (an undated page is new once, then it has been shown). A feature the history has not seen before is judged the same way, so its old pages are not announced as news, and a link that expires within weeks (a redirect) is never remembered and so never new. Search results churn, and the rule this replaced (a link missing from last week's snapshot is new, whatever its date) called a page new each time it came back: in one real report 84% of the dated *new* articles were over 30 days old.
- **Tweets.** Only a status permalink on `x.com` or `twitter.com` (or a subdomain of either), `/<handle>/status/<id>`, counts as a tweet. Other pages on those hosts (help pages, the developer blog) stay ordinary article candidates.
- **Baseline, test results, positions and usage are group-level.** None of them is found by searching for the feature's name. [web-features-mappings](https://github.com/web-platform-dx/web-features-mappings) maps a ChromeStatus id to a *web-features group*, and the group is what Baseline, [webstatus.dev](https://webstatus.dev) and wpt.fyi are organised by ([`src/search/web-features.js`](src/search/web-features.js), [`src/search/webstatus.js`](src/search/webstatus.js)). A group often holds several ChromeStatus features (a sub-feature such as `WebTransportReceiveStream` shares `webtransport` with its parent), so a Baseline status, a pass rate or a use counter describes the whole group, and the reports, the dashboard and the AI prompt say so (*group-level data*, *shared with N other ChromeStatus features*). The pass rate is webstatus.dev's: the share of the group's tests that pass, per browser, for the stable and experimental channels. Chrome's use counter and the Mozilla and WebKit positions come from the same mapping; they are shown, and given to the model as evidence, but they are not part of the *Consensus* label or the footprint. A feature that the mapping does not list is looked up in webstatus.dev by name, and a match is used only when it is confident (the same spec address, or the same or a clearly contained name); without one it has no Baseline status and no test results. The count of wpt.fyi test *paths that contain a word of the feature's name*, which this tool used to report as *WPT tests*, is gone: it often counted a generic word and said nothing about whether anything passes.

---

## 🚀 Quick Start

### Requirements
- **Node.js 22.0.0+** (ESM native, zero external dependencies required!)

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

# Publish even though a safety check refused (see "Safety checks" below)
node bin/cli.js run --force

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
npm test                  # hermetic: no network, no credentials, nothing written to reports/ or data/
npm run test:coverage     # with coverage summary
npm run test:integration  # lifts the network guard for tests that deliberately talk to live services
```

Every test file starts with `import './_support/setup.js'`. That module blanks the API keys held by `config` (so a developer's `.env` can never turn a test into a billable, authenticated call), redirects report and history output to a temp directory, answers DNS lookups from a stub, and makes any non-loopback network request fail loudly. Tests that need HTTP use `installFetchMock` ([test/_support/fetch-mock.js](test/_support/fetch-mock.js)) or a server on `127.0.0.1`; `test/hermetic.test.js` fails if a test file forgets the import. [test/pipeline.test.js](test/pipeline.test.js) runs the whole crawl → analyse → report pipeline against mocked upstreams. The scripts give every test a deadline (`--test-timeout`: 30 s, and 120 s for the live-service mode), so a test that ends up waiting for something that never happens fails instead of hanging; the slowest test in the suite takes about 1.5 s.

---

## ⚙️ Configuration (.env)

Copy `.env.example` to `.env` to configure search providers, tokens, or AI synthesis:

```bash
cp .env.example .env
```

| Environment Variable | Description | Default |
| :--- | :--- | :--- |
| `TARGET_MILESTONES` | Milestones to crawl (`last-5`, `auto`, `150-154`, `150,151,152`) | `last-5` |
| `FEATURE_STATUSES` | Comma-separated status filter (`enabled`, `origin-trial`, `flagged`, `deprecated`, `rollout`, `removed`) | `enabled,origin-trial,flagged,deprecated,rollout` |
| `MAX_FEATURES` | Cap number of features processed per run; the cap keeps the newest milestones first | (unlimited) |
| `CONCURRENCY` | Features investigated in parallel (1–16) | `4` |
| `CRAWL_DEADLINE_MINUTES` | Minutes after which no further feature is started (0–1440); the report is then published with the features reached, marked partial (see *Safety Checks & Run Health*). The workflow sets `40` | `0` (no deadline) |
| `GITHUB_TOKEN` | GitHub Personal Access Token (boosts API limit from 60 to 5000/hr) | *(optional)* |
| `SEARCH_PROVIDER` | Web search provider: `auto`, `gemini`, `brave`, `google` | `auto` |
| `GEMINI_API_KEY` | Google Gemini API key (enables native Google Search Grounding & synthesis) | *(optional)* |
| `GEMINI_MODEL` | Gemini model tried first; if it is overloaded, too slow or retired, `gemini-3.5-flash` then `gemini-flash-lite-latest` are used instead | `gemini-3.8-flash` |
| `BRAVE_SEARCH_API_KEY` | Brave Search API key (independent web index) | *(optional)* |
| `GOOGLE_SEARCH_API_KEY` | Google Custom Search API Key (needs `GOOGLE_SEARCH_CX` too) | *(optional)* |
| `GOOGLE_SEARCH_CX` | Google Custom Search Engine ID | *(optional)* |
| `TWITTER_BEARER_TOKEN` or `X_BEARER_TOKEN` | Twitter / X Bearer Token (Twitter API v2 app-only search). The two names are one setting: set either one (a blank one is ignored, and `TWITTER_BEARER_TOKEN` is used if both are set). The workflow passes on a repository secret of either name | *(optional)* |
| `AI_PROVIDER` | Advisory only — see note below | `gemini` |
| `OPENAI_API_KEY` | OpenAI API key (alternative AI synthesis) | *(optional)* |
| `REPORTS_DIR` | Directory where reports are saved | `./reports` |
| `DATA_DIR` | Directory holding the week-over-week history snapshots | `./data` |
| `FORCE_REPORT` | `1`/`true` publishes even if a safety check refuses (same as `run --force`) | *(off)* |
| `PORT` | Local preview server port | `3000` |
| `HOST` | Local preview server interface | `127.0.0.1` |
| `CHROMESTATUS_API_URL` | Base URL of the ChromeStatus API (a mirror or a test server) | `https://chromestatus.com` |
| `CHROMESTATUSLITE_URL` | Base URL of ChromeStatusLite | `https://chromestatuslite.com` |
| `DEBUG` | Any value makes the CLI print the full error, with its stack, when a command fails | *(off)* |

> [!NOTE]
> `AI_PROVIDER` is recorded in report telemetry but does not select the engine.
> The analyzer tries Gemini when `GEMINI_API_KEY` is set (walking the model
> chain described below); when Gemini is not configured or cannot produce a
> usable answer it uses OpenAI if `OPENAI_API_KEY` is set, and otherwise the
> built-in heuristic engine. Leave both keys blank to force heuristics.


> [!NOTE]
> **Zero API Keys Required:** If no external search or AI keys are configured, the tool runs completely on free public ecosystem endpoints (Hacker News Algolia API, GitHub Standards Positions, NPM registry, web-features-mappings with webstatus.dev, ChromeStatus) and uses the smart rule-based Heuristic Analyzer!

---

## 🛡️ Safety Checks & Run Health

An unattended weekly job should fail loudly rather than quietly publish something worse than last week's report, so the pipeline checks itself.

### Checks that stop a run

| Check | Trips when | What happens |
| :--- | :--- | :--- |
| **ChromeStatus returned nothing** | 0 features for the milestone window (or no milestones could be resolved) | The run stops before crawling; nothing is written. |
| **ChromeStatus returned far less than last time** | Fewer than 50 % of what ChromeStatus listed when the published report was made, comparing like with like: the same number of milestones, at least half of them shared, the same status filter, and a baseline of at least 10 | The run stops before crawling; the published reports and history are untouched. |
| **Most of the crawl failed, or ran out of time** | More than 50 % of at least 10 features either failed or, when the crawl has a deadline, were never started because it had passed (*A crawl that runs out of time*, below) | The run stops before any report or history is written. |
| **Damaged history snapshot** | `data/history.json` exists but cannot be read, and no earlier snapshot (`data/history/`, or a published weekly report) can stand in for it | The run stops before crawling or writing anything (it used to restart silently from an empty history). |

The "last time" baseline is `telemetry.featuresAvailable` in the published `latest.json`: how many features ChromeStatus listed *before* `MAX_FEATURES` trimmed the list, so a cap can neither hide a collapse nor cause a false alarm. Reports published before that was recorded fall back to their feature count. A `--feature` run is exempt from the first two checks.

Pass `--force` (or set `FORCE_REPORT=1`, or tick the workflow's **force** input) when the result is expected, for example after deliberately narrowing the milestone window. A forced publish is never silent: it is recorded in `telemetry.qualityOverrides`, shown in the report header and as a badge on the dashboard, and raised as a warning annotation on GitHub Actions.

On GitHub Actions a run that a safety check refuses writes nothing and fails the `crawl` job, so nothing is handed on, committed or deployed (the `publish` and `deploy-pages` jobs are skipped); the published site stays as it was. The reason appears on the run's summary page as an error annotation and a "The crawl stopped with an error" section; last week's report is not shown there as though it were new.

### A crawl that runs out of time

Nothing is written until the crawl is over, and the workflow gives the crawl step 50 minutes before it kills it. A killed step publishes nothing, so a run that is too slow loses the whole week. The crawl step of the scheduled runs from 14 September to 5 October (87 to 98 features) took 28 to 38 minutes, 0.32 to 0.40 minutes a feature. At the slowest of those rates the 40 minutes of the deadline below hold about 100 features. Those runs were made before cited pages were followed and checked; a full run of 93 features with every check described in this document took 39.3 minutes on a development machine (0.42 minutes a feature, nothing left out), so at that rate the 40 minutes hold about 95 features and a week with more may end as a partial report. Nothing is lost when it does (what was left out comes first next time), but if it becomes routine, raise `CRAWL_DEADLINE_MINUTES` and the crawl step's `timeout-minutes` together, keeping about ten minutes between them, or lower `SCHEDULED_MAX_FEATURES`. `CRAWL_DEADLINE_MINUTES` ([`src/crawl-budget.js`](src/crawl-budget.js)) makes a crawl longer than that a partial report, where before it was complete if it finished inside the step's 50 minutes and lost if it did not:

- **A soft deadline.** Off at 0; the workflow sets 40. It is measured from the start of the run, so listing the milestones counts. Once it has passed, no further feature is started. A feature that is under way is allowed to finish and none is abandoned half way, so the step timeout stays what ends a crawl that is stuck, and a crawl that is killed still publishes nothing. There is no command-line switch for it.
- **What was not started is left out.** The report holds the features that were reached. A feature that was not is not carried over from last week's report (a copy of an old record would be shown as this week's), and its history entry is not touched, so next time it is compared with the last time it was looked at. The momentum tiers are ranked among the features that were reached, as in a run limited with `--limit`.
- **They go first next time.** When there is a deadline the features are crawled in order of when each was last investigated, the longest ago first and any that were never investigated before all of them (without a deadline, in the order ChromeStatus lists them), so the same features are not the ones cut off every week.
- **It is said so.** `telemetry.partial` is `true`, and `telemetry.crawl` (always present) is `{ deadlineMinutes, elapsedMinutes, reached, notReached: [{ id, name }] }`: `reached` counts the features that were started, including any that then failed. The header of the Markdown reports (`summary.md` included) has a *Partial run* line, the dashboard header a warning badge, the log a warning and, on GitHub Actions, a workflow annotation (*Crawl stopped at its deadline*). The report is published.
- **Not too partial to publish.** The features that were not reached count with those that failed in the check above: if more than 50 % of at least 10 are missing the run is refused, unless forced (a forced publish is recorded in `qualityOverrides`). If the deadline had passed before the first feature was started there is nothing to publish, and the run is refused even with `--force`. The baseline for *ChromeStatus returned far less than last time* is still how many features ChromeStatus listed (`telemetry.featuresAvailable`), not how many were reached. A refusal writes nothing, history included (pages marked as seen in a report that nobody got would be wrong), so the next run starts where this one did and is cut at the same place: a crawl that is lastingly too slow for its number of features keeps being refused until that number is lowered (`MAX_FEATURES`; in the workflow `SCHEDULED_MAX_FEATURES`, or the *limit* input of a manual run), which is what the refusal suggests, or until someone publishes what it reaches with `--force`.

### AI synthesis is monitored, not gated

A feature whose AI call fails falls back to the heuristic engine without raising an error, so an unhealthy provider used to look exactly like a healthy one. Every LLM call is now counted by stage and model ([`src/llm-stats.js`](src/llm-stats.js)):

- the first failure of each kind is logged as a warning (`[LLM] gemini/synthesis failed (http_503) on gemini-3.8-flash: …`), and a per-stage and per-model summary follows the crawl (also when a safety check then refuses the run, which is when it is most useful);
- the report's `telemetry` gains `llm` (`{ attempts, ok, failed, byStage, byModel }`) and `aiCoverage` (`{ configured, withAi, total, ratio }`), and the Markdown header and dashboard show *AI synthesis X of Y*;
- when an AI key is configured and fewer than 90 % of at least 5 features received synthesis, the run logs a warning and, on GitHub Actions, a workflow annotation. The report is still published;
- API keys are masked in everything that is logged or recorded: error details, LLM failure reasons and annotations. The HTTP client also masks credentials in any URL it names in a log line or an error (retries, timeouts, oversized responses), because Google Custom Search sends its key in the query string: `--verbose` shows `…/customsearch/v1?key=[redacted]&cx=…`.

### How Gemini calls cope with overload

- **Model chain.** The call goes to `GEMINI_MODEL`, then `gemini-3.5-flash`, then `gemini-flash-lite-latest`. `llm.byModel` shows which model actually answered.
- **Health memory (per run).** A model that fails twice in a row (timeout, network error, 429 or 5xx) is set aside for a minute. It is not then simply put back in rotation: one request at a time is sent to it as a test while the other models keep serving, each failed test doubles the wait (up to five minutes), and a success restores it. A model the API no longer serves (404) is skipped for ten minutes and a warning names `GEMINI_MODEL`, so a retired model name cannot silently disable AI.
- **Unusable answers count as failures.** A reply that arrives but cannot be used (invalid JSON, an empty verdict list, the wrong shape) is recorded as a failure and the next model is asked.
- **A second pass.** If every model failed and at least one failure was transient (overload, timeout, network), the chain is tried once more after a short pause.
- **Output budget.** Replies may use 8,192 tokens because the model's *thinking* counts against the limit; an answer cut off at the limit is counted as `truncated`, not as bad JSON.

### Network safeguards

- Every outbound request has a deadline that also covers the response body, so a server that stalls mid-body cannot hang a run. LLM replies and pages fetched from third-party URLs are additionally size-capped (10 MB for LLM replies, 1 MB for article pages, 256 KB for explainers).
- Pages fetched from URLs found in third-party data (explainer documents and article excerpts) go through an SSRF guard ([`src/safe-fetch.js`](src/safe-fetch.js)): only public `http(s)` hosts (every address a name resolves to must be public), every redirect hop re-checked, and one deadline for the whole exchange including DNS, redirects and retries. A DNS-rebinding race between the check and the connection remains possible, because the built-in `fetch` cannot pin an address.
- Fetched pages are reduced to text in linear time, so a hostile page cannot stall the crawl with pathological markup.
- A GitHub issue link is only treated as one when the address really is `github.com/<owner>/<repo>/issues/<n>` (it is parsed as a URL, not searched as text), so a look-alike host or a link that merely contains such a path is not used to build GitHub API requests.
- Following one of Gemini's source links (`resolveRedirect` in [`src/safe-fetch.js`](src/safe-fetch.js)) asks the link where it leads and never follows it (a transient failure is retried once, inside the same deadline): the link itself must point to a public host, and so must the address it names, which is only read as text and never requested. No credentials are sent.

### Sources cited by Gemini

When Gemini's search grounding writes the synthesis it cites the pages it relied on, but not by their addresses: each is a link on `vertexaisearch.cloud.google.com` that expires within about a month, and its title is nothing more than the site's name. Reports used to publish those links, which had gone dead by the time anyone read the archive. They are now followed once, during the crawl ([`src/search/gemini-grounding.js`](src/search/gemini-grounding.js), `resolveGroundedSources`):

- **Following the link.** Four at a time, 4 seconds each, one retry. A link that cannot be followed (expired, not a redirect, an unsafe target, a timeout) is dropped rather than kept as a dead link, and counted by reason (`expired`, `no_redirect`, `unsafe`, `timeout`, `network`, `invalid`). Only the answer that was kept has its links followed.
- **What is stored.** The real address, its domain, a title (the site's name is replaced by the page's own `<title>` once the page has been read, unless that is a placeholder such as "Just a moment… | Cloudflare") and a snippet built from `groundingSupports`: what the answer says about that source, at most two stretches and 300 characters. It used to be the start of the whole answer, the same for every source. Two links to the same page become one.
- **Verified before it counts.** A cited page that the feature does not already list, that is not one of its own spec, explainer, documentation or sample links and is not a tweet is read and put through the relevance check ([`src/analyzer/grounded.js`](src/analyzer/grounded.js)): at most 8 per feature. The page is the evidence: it has to be readable, and what is judged is its own text, not the snippet the synthesis gave for it, so a page that cannot be read is not added (counted as `unread`). A page the web search turned down is not on record anywhere, so it is checked again, and the second check can come out differently. The ones that pass join the feature's articles **before** the footprint is worked out. `analysis.groundedSources` holds only the sources that passed.
- **Where it shows.** The audit trail gains a `gemini_synthesis_sources` entry (`rawFound`, `verified`), the crawl log a `[Grounding summary]` line, and `telemetry.grounding` the totals: `{ found, redirects, resolved, duplicates, dropped, adoption: { considered, alreadyListed, added, rejected, unread, skipped } }` (`unread`: pages that could not be read and so were not added; `skipped`: sources not looked at, which are the feature's own links, tweets and anything past the limit of 8). If links were followed and not one could be resolved, or at least four were followed and more than half failed for a reason other than having expired (not a redirect, an unsafe target, a timeout, the network), the run logs a warning and, on GitHub Actions, a workflow annotation (*Gemini grounding links could not be followed*); the report is still published.

### The web-features mapping is monitored, not gated

Baseline, test pass rates, vendor positions and Chrome usage are read through the web-features mapping (see *Methodology*). If `chrome-status.json`, the file that joins ChromeStatus ids to groups, cannot be downloaded or read, every feature loses all four at once, which looks like a week in which nothing is tracked. So the outcome is recorded ([`src/web-features-stats.js`](src/web-features-stats.js)):

- `telemetry.webFeatures` is `{ mappings: { available, chromeStatusIds, groups, missing }, features: { mapped, unmapped }, webstatus: { requests, ok, absent, failed } }`; `missing` names the optional files (tests, positions, use counters) that could not be read, and `absent` counts groups that webstatus.dev does not know;
- the crawl log has `[Web-features summary]` lines;
- when the mapping is unavailable the run logs a warning and, on GitHub Actions, a workflow annotation (*web-features mapping could not be loaded*). It still publishes: Baseline falls back to the search by name, and there are no test results, positions or usage figures that week.

The mapping is third-party data, so each of its files is downloaded with a size cap and a deadline, and every id, word, address and number in it is checked against the form it is published in before it is used. It is downloaded once per run, and what webstatus.dev answered about a group is asked once however many features share it.

### Report guardrails: warnings, never gates

A crawl can succeed and still publish a report that is worse than it looks. In the checked-in 2026-W41 report (87 features) 830 of 2,619 articles were Gemini's expiring redirect links, 80 of 87 features were *High* momentum, 84 % of the dated *new* articles were more than 30 days old, X had answered HTTP 400 to the query for 11 of the 87 features (13 %) and `latest.json` was 11 MB, and nothing said so. None of these stops a run (what does is under *Checks that stop a run*): each is measured after the crawl ([`src/guardrails.js`](src/guardrails.js)) and, when it is past its limit, reported:

| Guardrail | Warns when | Judged from | Before the fixes |
| :--- | :--- | :--- | :--- |
| **Gemini redirect links** | more than 0 different addresses on `vertexaisearch.cloud.google.com` anywhere in the features (an article, a source, a link the feature carries, the text of an analysis) | every feature | 830 of 2,619 articles |
| **High momentum** | more than 50 % of the features are *High* | at least 10 features | 92 % |
| **Old *new* articles** | more than 20 % of the *new* articles that say when they were published were published more than 30 days ago | at least 10 such articles | 84 % |
| **A provider refusing requests** | more than 2 % of what the X, Brave Search, Google Custom Search or GitHub API answered was a client error: any 4xx except 404 and 410 | at least 20 answers from that provider | 13 % (X, 11 of 87 features) |
| **Size of the JSON report** | more than 15 MB (15,000,000 bytes) | the file as it is written | 11 MB |

Two older guardrails are described above: the number of features against what ChromeStatus listed stops a run, and the share of features that received an AI synthesis warns.

- **Provider answers are counted where they arrive.** The HTTP client counts each response it hands to its caller ([`src/provider-stats.js`](src/provider-stats.js)) when the request went to `api.twitter.com`, `api.x.com`, `api.search.brave.com`, `www.googleapis.com` or `api.github.com`, and to no other host: Hacker News, npm, webstatus.dev, Gemini and the pages that are read are not providers. A response that was retried is not counted, only the one the caller got, and a request that got no answer at all (a timeout, a network error) counts nothing. Below 20 answers from a provider the counts are recorded and not judged.
- **Where the warnings show.** Each is logged as a warning and, on GitHub Actions, raised as an annotation titled *Report guardrail*. `telemetry.providers` records what each provider answered, `{ x | brave | google | github: { responses, clientErrors, statuses: { "200": n } } }` for each that answered, and `telemetry.guardrails` every check that was made, `{ checks: [{ id, ok, skipped, value, limit, sample? }], warnings }`. The crawl log has `[Provider summary]` lines, also when a safety check then refuses the run. The Markdown, HTML and RSS reports do not carry the warnings.
- **The size is that of the file as written.** It is measured in bytes (UTF-8) as the version 2 JSON is written, before the two telemetry blocks above are added to it. The 87 features of 2026-W41 take 4.3 MB as version 2, and the workflow's cap (`SCHEDULED_MAX_FEATURES`, 150 features) would take about 7.4 MB at the same size per feature, so 15 MB is about twice the largest report the workflow can make.
- **A guardrail that cannot be checked is one more warning.** If making the checks fails, the warning is *The report guardrails could not be checked: …* and the run goes on. The limits are the constants in `GUARDRAIL_LIMITS`; there is no environment variable or switch for them.

### Untrusted text in AI prompts

Article titles, snippets, Hacker News and X text, explainer excerpts, package descriptions and standards-position comments are written by third parties, and some of that text is sent to a language model.

- **Delimited evidence.** The synthesis prompt ([`src/analyzer/ai.js`](src/analyzer/ai.js), `buildSynthesisPrompt`) puts each kind of evidence (the feature, its Baseline status, its web-features group, standards threads, bug trackers, explainers, articles, discussions and packages) in its own block, `BEGIN UNTRUSTED <KIND> DATA <token>` … `END UNTRUSTED <KIND> DATA <token>`, with a random token per prompt that a page cannot guess, and tells the model to treat the blocks as data and never as instructions. Every item is a single line cleaned by `sanitizeForPrompt` (control, zero-width and bidirectional-formatting characters removed, code fences defused, a forged delimiter cannot survive) and cut to a fixed length; lists are capped (10 items, 6 articles).
- **Validated answers.** The model's reply is reduced to fixed fields with fixed vocabularies and lengths (`sanitizeAiAnalysis`), and any link in its prose that is not one of the evidence URLs the model was given is replaced by `[link removed]`, so text planted in a page cannot get a link of its own into a published report.
- The relevance verifier cleans its input with the same `sanitizeForPrompt` and requires a strict reply shape.

### Known limitations

- A feature that ChromeStatus lists under several milestones of the window is reported once, with the stage and milestone of its **most advanced** listing (`rollout` ranks above a trial and below `enabled`; for the same stage the earliest milestone is kept so it does not creep forward as the window slides). The report notes the milestone it was first listed under ("first listed in Chrome 152"). Earlier versions reported such a feature at its *earliest* listing, so the first run after upgrading shows each feature whose later stage was missed as having moved on (*What happened this week*); that is a one-time catch-up, not a new event.
- A partial run (`--limit`, `--feature`) still replaces `reports/latest.json` and the history snapshot; publish from full runs. A crawl that stopped at its deadline (*A crawl that runs out of time*) is a partial run too, and the workflow publishes it, saying so in the report.
- The first run after upgrading to the grounded-source handling lists the pages Gemini cited as *new articles* once, under their real addresses, as long as they were published in the last 30 days or do not say when (every feature that has any also shows as having *changes this week*): the history never held those pages' real addresses. It did hold some of the expiring redirect links (the snapshot rebuilt from a published report keeps whatever the report listed); they identify nothing and are ignored when comparing. The same release treats `http`/`https`/`www` spellings of one page as a single article, so a feature's article count can drop slightly.
- Pages Gemini cited that pass the relevance check count as articles in the footprint (10 each). Which pages the grounded search cites changes from run to run, so this adds some run-to-run noise to the footprint, and so to momentum.
- **Momentum is a relative, noisy indicator.** The footprint is rebuilt from search results every week, and which pages a search finds changes from run to run: across the weekly reports checked in here (2026-W37 to W41) a feature's footprint moved by about 100 points from one week to the next at the median (90 to 110, depending on the week), by 200 to 300 points for one feature in ten, and by 400 to 500 at most. That is many times the 10 points a tier needs (which only keeps a trivial change from being *High* or *Moderate*), so a good part of a change can be a search rather than an event, and a feature can change tier for that reason. The tiers are relative too: at most about 15% of the features can be *High* and 35% *Moderate*, however busy or quiet the week was. Use them to decide what to look at, not as a measurement. Adoption and usage counters do not feed momentum on purpose: they describe a web-features group, not one feature.
- **The history grows.** `seen` remembers every page a feature has shown, because most of what a search finds says nothing about when it was written (about two thirds of the items of one real report were undated) and has to be remembered to be announced only once. It is bounded: at most 500 pages per feature, and a page that has not turned up for a year is forgotten. Over the five weeks of history this was developed against, the pages a feature had shown grew by about six a week, so expect `data/history.json`, and each of the 26 archives under `data/history/`, to grow from a few hundred kilobytes to a few megabytes over a year. Git stores identical files once, and each week's change is small.
- **A page is remembered under its canonical URL as the current rules write it.** If a later release changes what `canonicalUrl` makes of an address (one more tracking parameter to strip, say), the pages remembered under the old spelling are not recognised, and the undated ones among them show as new once more. The rules are idempotent (`test/urls.test.js`), so what is stored is what is compared.
- A page is told apart from a redirect or a user-content link by its host only: `lh3.googleusercontent.com` is ephemeral and is not remembered between runs, a page that merely mentions `googleusercontent.com` in its path or query is an ordinary page.
- Baseline, test pass rates, positions and usage describe a web-features *group*, not one ChromeStatus feature, and a good share of a typical week's features are in none (in one report of 87 features, matching by name found 7 and the mapping, by ChromeStatus id, found 49). A feature outside the mapping has no test results.

### Output changes

What a consumer of `latest.json`, the weekly JSON files, `data/history.json` or the files under `reports/` will notice. `latest.json` and `weekly/*.json` now carry `"schemaVersion": 2`; a file with no `schemaVersion` is version 1, the shape published before, and the files already in a repository stay that way until they are replaced (the program reads both). The changes below that are not listed as *removed* or *changed* are additive.

**The shape of the report (changed, breaking).**

- **Articles are stored once, in a table.** Version 1 wrote a full copy of an article's record in every list that mentioned it, and a page is mentioned by several: a typical week held 6,636 references to 2,615 different records, four fifths of an 11 MB file. In version 2 the top-level `articles` object holds each record once (`{ "a1": { "url": …, "title": … }, "a2": … }`) and the six lists that held records, `ecosystem.articles`, `ecosystem.blogs`, `ecosystem.docs`, `ecosystem.reverseLinks`, `delta.newArticles` and `analysis.groundedSources`, now hold **ids** into it. To get the version 1 lists back: `ids.map(id => report.articles[id])`. Two records are shared only when they are identical, so a page two features judged differently is two records; the ids are handed out in the order the records are met and mean nothing outside their file. Discussions, standards positions, packages and everything else are unchanged. Version 1 files have no `schemaVersion` and no `articles`.
- **Compact JSON.** `latest.json`, `weekly/YYYY-Wxx.json`, `data/history.json` and `data/history/*.json` are written without indentation (`jq .` puts it back; a changed file shows in `git diff` as one very long line, so compare two of them with `jq` rather than line by line). `latest.json` and the weekly file of the same week are byte for byte one document.
- **Files that are not rewritten.** The weekly reports of earlier weeks stay as they were written. A run that cannot read `data/history.json` uses the newest readable snapshot in `data/history/` instead and, failing that, rebuilds what it can from the newest readable weekly report, whichever of the two shapes that is (a rebuild knows the links, status and momentum of the features in that report, not what an earlier snapshot remembered about features that had left it).

**Other files.**

- **`reports/summary.md` (new).** The header and Executive Snapshot, rewritten by every run; the workflow shows it on the run's summary page instead of the whole weekly report.
- **Renamed features keep their links.** If a feature changes name on ChromeStatus its page gets a new file name (`<id>-<new-slug>.md`). The old file is then replaced by a short page that says the page has moved and links to the new one; pages of features that are not in the report (a partial run, a feature that left the window) are never touched.
- **`data/history/` is pruned.** Only the newest 26 archives (`YYYY-Wxx.json`, a full copy of the history for each week) are kept; the run that writes a new one deletes the older ones, and a file that cannot be deleted is a logged warning that does not stop the others from going.
- **Not touched by any of the above:** the layout of the weekly Markdown report (its sections and tables) and `reports/README.md`, the RSS feed and the structure of the HTML dashboard. What *Momentum* means, and the lines that say so, did change (next).

**Momentum and what counts as new (changed, part of version 2).** The rules are in *Methodology*.

- **`momentumLevel` means something else (changed, breaking for anyone who read it as "how much evidence there is").** It keeps its name and its four values and is now the tier of the *change* in footprint, so about 15% of the features are *High*, not 80 of 87. The old number is unchanged: it is now also called `analysis.footprint`, and `analysis.momentumScore` still holds it. New in `analysis`: `momentumChange` (this week's footprint minus the baseline's, `null` without a baseline), `momentumBaseline` (`{ week, date, footprint }` or `null`) and `momentumBasis` (`"change"`, `"no baseline"`, `"footprint rank"` or `"footprint level"`).
- **`telemetry.momentum` (new)** is `{ basis, baselineDays, withBaseline, total, tiers: { High, Moderate, Emerging, Quiet } }`: what this week's tiers rest on and how they came out.
- **The order of the features changed.** The report lists them by tier, then by change (a feature with nothing to compare with after the others of its tier), then by footprint, then by name; it used to order by the score. The first feature is no longer the one with the most evidence.
- **New lines in the reports.** The header of the Markdown reports, `summary.md` included, has a *Momentum:* line saying what the tiers rest on, the dashboard header has a badge for it, and the momentum line of a feature in the Markdown reports (and the tooltip of its badge in the dashboard) says what its tier rests on, for example `+45 points since 2026-09-10; footprint 130 points`. The Executive Snapshot labels are as they were; the description beside *High Ecosystem Momentum* now says that the number counts the features in the highest tier. The heuristic `analysis.executiveSummary` says "Verified ecosystem footprint is N points …" where it used to say "Verified ecosystem momentum is *High* …": the tier is only worked out once every feature has been looked at, which is after that text is written.
- **No momentum shift is reported between levels that mean different things.** `delta.momentumChanged` is `false` and `delta.previousMomentum` is `null` when last week's level rested on another basis (a footprint rank, say, and this week a change) or was measured with another engine (the AI synthesis adds sources, and so points). The first run after upgrading, and a run that rebuilt its history from a published report, therefore report no shifts at all. There is no separate sentiment-change flag for this to hide.
- **What is new changed.** `delta.newArticles`, `delta.newDiscussions`, `delta.newStandards` and their counts follow the rule in *Methodology* and so are far smaller; their shape, `isNewFeature`, `statusChanged` and the rest of `delta` are as before. A history written before this version remembers only the pages of the last run (`knownUrls`), so the first run after upgrading may announce once more a recent or undated page that was shown two or more weeks earlier.
- **`data/history.json` and `data/history/*.json`** carry `"schemaVersion": 2` (the version of the history, which is its own number and not the report's, though both are 2 today) and, per feature, `seen` (the day each page last turned up, keyed by its canonical URL), `metrics` (the weekly numbers, `{ week, date, footprint, ai, metrics }`, newest last, at most 13), `lastMomentumBasis` and `lastAi`. `knownUrls` (the pages of the last run) is still written, so an older version of the tool can still read the file. A feature not seen for a year is dropped. A history with no `schemaVersion`, which is every file written so far, is read as before; one that names a version other than 2 is treated as a damaged snapshot (see *Safety Checks & Run Health*). A history rebuilt from a weekly report has no `seen` or `metrics`: its pages count as shown on the day of the report and momentum starts again from a footprint rank.
- **`inspect`** prints the footprint, and the level it would have on the absolute scale, where it printed momentum: momentum needs the history.

**The crawl's deadline and the workflow (part of version 2; additive except where marked).** The rules are in *A crawl that runs out of time*.

- **`telemetry.partial` and `telemetry.crawl` (new).** `partial` is `true` when the crawl stopped at its deadline before it had started every feature. `crawl` is `{ deadlineMinutes, elapsedMinutes, reached, notReached: [{ id, name }] }` and is in every report from now on, `deadlineMinutes` being 0 for a crawl with no deadline. A report published earlier has neither; read a missing `partial` as `false`. `featuresCount` and `features` hold what is in the report, and `notReached` is the only record of the rest.
- **A *Partial run* line** in the header of the Markdown reports (and in `summary.md`), and a warning badge on the dashboard, appear for a partial run only; the report of a crawl that reached every feature is as before.
- **`CRAWL_DEADLINE_MINUTES` (new).** Off (0) unless set, so a run from a checkout behaves as it did.
- **The workflow's jobs changed (breaking for anything that refers to a job by its id).** `report` is now two jobs, `crawl` (*Crawl & build reports*, which keeps the secrets and has a read-only token) and `publish` (*Commit & publish reports*, which commits and uploads for Pages), and `deploy-pages` waits for `publish`. The name of the workflow, its triggers, the schedule and the inputs are as they were. The artifact `crawl-output` passes the files between the two and is deleted after 3 days.

**Guardrails (part of version 2; additive).** The rules are in *Report guardrails: warnings, never gates*.

- **`telemetry.providers` and `telemetry.guardrails` (new)** are in every report from now on, and in the `telemetry` that `data/history.json` keeps from the last run. `providers` is `{}` when no provider answered; when the checks could not be made `guardrails.checks` is empty and `guardrails.warnings` holds the one warning saying so. A report published earlier has neither. Nothing else in the report or the history changes.

**The X token (changed wording only).**

- **The X entry of the audit names both variables.** `TWITTER_BEARER_TOKEN` and `X_BEARER_TOKEN` are one setting (see *Configuration*), so the `status` of the `twitter` entry in `ecosystem.auditTrail.searchesExecuted` now reads `Inactive (TWITTER_BEARER_TOKEN or X_BEARER_TOKEN not configured)` and, for a rejected token, `HTTP 401 Unauthorized (Check your TWITTER_BEARER_TOKEN or X_BEARER_TOKEN)`; each named only `TWITTER_BEARER_TOKEN`. Reports published earlier keep the old text. The requests made, the counts and the shape of the report are as they were.

**From the earlier changes to the data behind the report (all part of version 2).**

- **Web Platform Tests (changed, breaking).** `ecosystem.wpt.testCount`, `ecosystem.wpt.queryUsed`, `ecosystem.wpt.sampleTests` and `ecosystem.metrics.wptTestCount` are **removed**: they counted wpt.fyi test paths containing a word from the feature's name. `ecosystem.wpt` is now `{ source, type, scope: 'group', webFeatureId, url, passRates: { stable, experimental } | null }` where each channel maps `chrome`, `edge`, `firefox` and `safari` to the percentage of the group's tests that pass, and it is `null` for a feature with no group or whose group has no tests. Reports that were published earlier keep the old shape.
- **Baseline (additive).** `ecosystem.baseline` gains `scope: 'group'`, and `matchedOn` says how the group was found (`web-features mapping`, `spec URL`, `exact name` or `name containment`). Far more features have a Baseline record than before, because the ChromeStatus id finds the group where the name did not.
- **New fields.** `ecosystem.webFeature` (`{ id, scope: 'group', groupSize, url, wptUrl, positions, usage }`, `null` for a feature with no group), the audit entries `web_features` and `wpt` (`scope`, `webFeatureId`, `status`; the old `wpt` entry's `testCount` is gone) and `telemetry.webFeatures`.

---

## ⏰ Automated Weekly Scheduling

### GitHub Actions (Recommended)
This repository includes a scheduled GitHub Actions workflow in [`.github/workflows/weekly-report.yml`](.github/workflows/weekly-report.yml):
- Runs automatically **every Monday at 09:00 UTC** (`0 9 * * 1`), and on demand via GitHub's **Run workflow** button.
- It is four jobs, so that the one that reads untrusted web pages with the API keys cannot write to the repository:
  1. **`test`** runs the test suite on Node 22 and 24; nothing else starts unless it passes.
  2. **`crawl`** (scheduled runs, and manual runs unless *skip_crawl* is ticked) runs the crawler and writes `reports/` and `data/`. Its token is read-only (`contents: read`), its checkout keeps no credentials (`persist-credentials: false`), and the secrets are in the environment of this one step. It sets `CRAWL_DEADLINE_MINUTES` to 40 and the step's timeout to 50 (see *A crawl that runs out of time*). When it succeeds it hands `reports/` and `data/` on as the artifact `crawl-output`, kept for 3 days (hidden files are not handed on: `publish` makes `reports/.nojekyll` itself). A crawl that fails, or that a safety check refuses (see *Safety Checks & Run Health*), hands nothing on, so nothing is committed or deployed. A manually triggered run can override a refusal with the **force** input.
  3. **`publish`** is the only job that can write (`contents: write`) and it never runs the crawler or sees a secret. It first checks what it was handed (`reports/latest.json` and `data/history.json` must be there and not empty, and nothing in it may be a symbolic link; if not, the job stops before anything is deleted), then replaces `reports/` and `data/` with the crawl's, shows the Executive Snapshot (`reports/summary.md`, including *AI synthesis X of Y*) on the run's summary page (the whole report may not fit in the 1 MiB a summary may hold), uploads `reports/` for GitHub Pages and then commits and pushes the reports and the history (`data/history.json` and `data/history/`, including the archives it deletes), pulling and retrying up to three times if `main` moved. A run that does not crawl (a push to `reports/**` or the workflow, or a manual run with *skip_crawl*) skips the replacing and the commit and deploys what is already committed, and shows the last committed `reports/summary.md`.
  4. **`deploy-pages`** deploys the dashboard to **GitHub Pages**.
- **What the split protects, and what it does not.** A crawl that a hostile page has steered cannot push (its token is read-only and its checkout leaves no credential in the repository's git configuration), cannot change the workflow or the source, and nothing it hands on is used except `reports/` and `data/`. It can still choose what those two directories contain, and `publish` commits them to `main` and deploys them: the only checks are the two files and the symbolic links named above. It also still has the API keys and the network, which it needs to do its work. The split narrows what a compromised crawl can do; it does not make its output trustworthy.
- Reports a low share of AI-synthesised features, a crawl that stopped at its deadline and each report guardrail that is past its limit (*Report guardrails*) as workflow annotations. A failed or refused crawl shows its error on the run's summary page and leaves the published site as it was.
- A pull request runs `test` only.

### Moving the generated files off `main` (a plan; nothing here is switched on)

`reports/` is 82 MiB in a checkout today (66 MiB of it `reports/weekly`, where the version 1 JSON of 2026-W37 to W41 is 11 to 13.5 MB a week and the Markdown up to 1 MB) and `data/` is 2 MB. Git packs all of it into 13 MB. What moving the files off `main` would buy is a small `main`: a clone, or the checkout of a test run or a pull request, would no longer carry them, and the history of `main` would no longer fill with the weekly report commits. What it would not do is make the hand-over from `crawl` to `publish`, or the GitHub Pages upload, any smaller: they carry the same files wherever those live (step 5 below, the rewrite as version 2, is what makes them smaller). A week now adds about 6 MB (about 4.7 MB of version 2 JSON and up to 1 MB of Markdown), which puts the 1 GB a Pages site may not exceed about three years away. A reasonable moment to do it is when `reports/` passes about 500 MiB, or when clones become slow. It is not done, because it moves the source of the published site to a branch that only the repository's owner can create and protect, and a workflow cannot be run here to prove it.

1. Create an orphan branch `data` and put `reports/` and `data/` on it, as they are. `main` keeps its copy, so nothing is lost and nothing breaks while it is tried.
2. In `crawl` and `publish`, check that branch out into a subdirectory (`actions/checkout` with `ref: data` and `path:`) and point the program at it with `REPORTS_DIR` and `DATA_DIR`, which it already reads. `crawl` hands the two directories over as it does now; `publish` commits them to the `data` branch, uploads Pages from there and deploys.
3. Change the `push` trigger (its `paths: reports/**` is about `main`) and update `test/workflow.test.js`, which pins the job layout and would fail until it is told the new one.
4. After a few good weeks delete `reports/` and `data/` from `main`. Until then rolling back is pointing the checkouts at `main` again.
5. Optionally, once, rewrite the version 1 weekly archives as version 2 (`normaliseReport` in [`src/report-schema.js`](src/report-schema.js) does it, and the program reads both). Converting the five of W37 to W41 in memory (nothing was written) gave 23 MB for 61 MB, about 38 %. Nothing does this automatically: the old files are the record of what was published, and rewriting them is for the owner to decide.

---

## 🏗️ Project Architecture

```
chrome-status-ecosystem-updates/
├── .github/workflows/
│   └── weekly-report.yml       # Weekly cron: test → crawl (read-only) → publish (commits) → GitHub Pages deploy
├── bin/
│   └── cli.js                  # CLI executable entrypoint
├── src/
│   ├── index.js                # Core module exports
│   ├── config.js               # Environment & options loader
│   ├── logger.js               # Console logging (warnings to stderr, colour opt-out, --verbose)
│   ├── chromestatus.js         # ChromeStatus / ChromeStatusLite data fetcher & normalizer
│   ├── search/
│   │   ├── index.js            # Unified search coordinator & deduplicator
│   │   ├── query-planner.js    # LLM-planned search queries (used with Brave)
│   │   ├── blogs.js            # dev.to community article search
│   │   ├── hackernews.js       # Hacker News Algolia discussion search
│   │   ├── standards.js        # WebKit, Mozilla & W3C TAG standards positions
│   │   ├── bugzilla.js         # Mozilla & WebKit Bugzilla trackers
│   │   ├── baseline.js         # Baseline status of a feature's web-features group (webstatus.dev)
│   │   ├── mdn.js              # MDN Web Docs search
│   │   ├── twitter.js          # Twitter / X developer discussion search
│   │   ├── npm.js              # NPM registry search for polyfills & packages
│   │   ├── wpt.js              # Web Platform Tests pass rates of the group (from webstatus.dev)
│   │   ├── verifier.js         # LLM & NLP semantic relevance verifier
│   │   ├── web.js              # Multi-engine web search (Gemini Grounded, Brave, Google)
│   │   ├── urls.js             # cleanUrl, canonicalUrl (same-page key) & grounding-redirect detection
│   │   ├── articles.js         # Blog/doc split and page titles for article records
│   │   ├── web-features.js     # web-features-mappings: a ChromeStatus feature's web-features group, tests, positions, use counters
│   │   ├── webstatus.js        # webstatus.dev client: the Baseline status and WPT pass rates of a group
│   │   ├── gemini-grounding.js # Gemini requests: model chain, retries, truncation handling, source links
│   │   ├── gemini-models.js    # Fallback models and the per-run model health record
│   │   ├── openai.js           # OpenAI JSON requests (instrumented like the Gemini ones)
│   │   └── content-fetcher.js  # Article & explainer excerpts (SSRF-guarded, size-capped)
│   ├── analyzer/
│   │   ├── index.js            # Analyzer coordinator
│   │   ├── heuristic.js        # Rule-based footprint, consensus & sentiment scoring
│   │   ├── sentiment.js        # The one sentiment vocabulary shared by heuristics and AI
│   │   ├── grounded.js         # Verifies the sources the AI synthesis cited before they count
│   │   └── ai.js               # Optional Gemini & OpenAI LLM synthesis
│   ├── storage/
│   │   ├── cache.js            # Week-over-week snapshot & delta tracker
│   │   ├── seen.js             # The links a feature has been seen with and since when (what counts as new), bounded
│   │   └── atomic.js           # Crash-safe file writes
│   ├── reporters/
│   │   ├── escape.js           # Shared HTML/Markdown/XML output encoding
│   │   ├── viewmodel.js        # Shared presentation shape for a feature
│   │   ├── markdown.js         # Weekly rollup & per-feature markdown generator
│   │   ├── html.js             # Re-export of the dashboard renderer
│   │   ├── html/               # Server-rendered dashboard
│   │   │   ├── index.js        # Page shell, summary tiles & filters
│   │   │   ├── styles.js       # Inlined CSS
│   │   │   ├── client.js       # Filter & search script (inlined into the page)
│   │   │   └── templates/
│   │   │       └── card.js     # One feature card
│   │   ├── json.js             # Structured JSON export
│   │   └── rss.js              # RSS 2.0 / Atom feed generator
│   ├── http.js                 # Timeouts (body included), retries, size caps & bounded concurrency
│   ├── safe-fetch.js           # SSRF guard for URLs that come from third-party data
│   ├── quality.js              # Pre-publication checks and the AI-coverage check
│   ├── crawl-budget.js         # The crawl's deadline clock, stalest-first order and the "partial run" wording
│   ├── momentum.js             # Footprint, its change over four weeks, and the percentile tiers that make it momentum
│   ├── github-actions.js       # Annotations and job-summary output (no-ops off Actions)
│   ├── report-schema.js        # The published JSON's shape (schemaVersion 2): article table in, records back out
│   ├── llm-stats.js            # Per-run counters of LLM successes and failures
│   ├── grounding-stats.js      # Per-run counters of what became of Gemini's cited sources
│   ├── web-features-stats.js   # Per-run counters of web-features mapping and webstatus.dev lookups
│   ├── provider-stats.js       # Per-run counters of how the search and enrichment APIs answered, by status
│   ├── guardrails.js           # Warnings about a report that is worse than it looks (redirects, momentum, old "new" articles, refused requests, size)
│   ├── text.js                 # Control and invisible characters stripped from titles and prompt evidence
│   ├── runner.js               # Pipeline orchestrator
│   └── server.js               # Preview HTTP server
├── data/
│   ├── history.json            # Snapshot history for week-over-week diffing
│   └── history/                # The newest 26 weekly copies of it (YYYY-Wxx.json)
├── reports/                    # Generated outputs
│   ├── index.html              # Interactive HTML dashboard
│   ├── summary.md              # Header & Executive Snapshot (the Actions job summary)
│   ├── latest.json             # Latest weekly data (schemaVersion 2)
│   ├── feed.xml                # RSS feed
│   ├── weekly/                 # Weekly archive (YYYY-Wxx.md & .json)
│   └── features/               # Per-feature deep-dive markdown files
└── test/                       # Hermetic node:test suite (no network, no credentials)
    ├── _support/               # Test harness: network guard, fetch/Gemini/OpenAI mocks
    └── pipeline.test.js        # End-to-end crawl → report run against mocked upstreams
```

---

## 📄 License

Licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE).
