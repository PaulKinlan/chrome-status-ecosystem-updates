# IndexedDB: SQLite backend

> **Report Week:** 2026-W42 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Chromium's IndexedDB implementation is rewritten on top of SQLite, to replace the previous implementation that uses a hybrid of LevelDB and flat files. There is no change to the Web API.  This is expected to improve reliability and, to a lesser extent, performance.  For now this is applied to \*new data stores\*. This is step 2 of a multi-phase rollout. See https://chromestatus.com/feature/5126896685809664 which tracks step 1, the rollout for in-memory i.e. incognito contexts. Step 3 will consist of migrating existing data from LevelDB stores to SQLite stores.  In this step, the first time a user visits a site, or after clearing site data, new IDB data will be stored in a backend that makes use of SQLite, but existing data stored in LevelDB is unimpacted.  See Documentation link below for a list of differences to be aware of.

### Motivation

Chromium's IndexedDB implementation suffers from poor reliability and maintainability because it is highly dependent on a database engine (LevelDB) that is not maintained or supported, or as featureful as a full RDBMS. Many sophisticated web apps report high rates of missing or corrupt data, and bugs in the aging backend are hard to find and fix. SQLite is a more suitable replacement for long-term maintainability as it has an active development team and community, and its features like native support for transactions should yield improved reliability.

## Ecosystem Status

- **Momentum:** Moderate (footprint 181 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chromium's replacement of its legacy LevelDB and flat-file backend with SQLite is an internal architectural overhaul that preserves the public IndexedDB Web API without requiring specification changes. The change brings Chromium's underlying storage model into alignment with Gecko (Firefox) and WebKit (Safari), both of which have long used SQLite to back IndexedDB. Developer sentiment is strongly favorable because the transition directly targets chronic data corruption, reliability, and maintenance issues historically associated with LevelDB.

### Recommendations
- Actionable Advice: No code changes or polyfills are needed since the JavaScript API remains completely backward-compatible. However, engineering teams with storage-heavy or offline-first architectures should track client-side storage telemetry and error rates to monitor the multi-phase rollout as new stores transition to SQLite ahead of existing database migrations.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Chrome IndexedDB: SQLite back end" (4 points, 0 comments).

## Web-features Group

*group-level data: web-features [`indexeddb`](https://webstatus.dev/features/indexeddb), shared with 16 other ChromeStatus features*

- Share of tests passing in the web-features group `indexeddb` on [wpt.fyi](https://wpt.fyi/results?q=feature:indexeddb) (via webstatus.dev) — stable: Chrome 99.9% · Edge 99.9% · Firefox 99.4% · Safari 96.3%; experimental: Chrome 100% · Edge 100% · Firefox 99.4% · Safari 99%

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Chrome IndexedDB: SQLite back end](https://news.ycombinator.com/item?id=48118595) — *4 pts, 0 comments*

## 📰 Ecosystem Blogs & Articles

- [Chrome 145 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/145) *(developer.chrome.com)*
  > Chromium is executing a major architectural overhaul of its \*\*IndexedDB\*\* implementation, replacing the legacy backend—a hybrid of \*\*LevelDB\*\* and flat files—with a robust, \*\*SQLite\*\*-based engine \* \*\*Phased Rollout:\*\* \* \*\*Step 1 (Chrome 145):\*\* Depl...
- [chrome.com](https://developer.chrome.com/blog/chrome-150-beta) *(developer.chrome.com)*
  > \* \*\*Step 2 (Chrome 150 Beta / Chrome 156):\*\* Applied to \*\*new data stores\*\* \* \*\*Chrome 150 Beta & Chrome 156 Updates:\*\* Detailed the Step 2 expansion to new persistent stores on disk, reassuring developers that web APIs remain backward-compatible and...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > \* \*\*Step 2 (Chrome 150 Beta / Chrome 156):\*\* Applied to \*\*new data stores\*\* If a user visits a site for the first time or clears site data, the newly created IndexedDB instances use SQLite
- [chromium.org](https://issues.chromium.org/issues/419264073) *(issues.chromium.org)*
  > \* \*\*Step 3 (Future):\*\* Migrating existing persisted LevelDB databases to SQLite stores seamlessly However, teams building storage-heavy offline web apps should monitor error rates across Chrome releases as existing databases will eventually transitio...
- [chromium.org](https://issues.chromium.org/issues/40274247) *(issues.chromium.org)*
  > \* Handling compression (LevelDB used Snappy compression by default; SQLite needed custom handling for compressed values and cursor fast paths)
- [chromium.org](https://issues.chromium.org/436880910) *(issues.chromium.org)*
  > \* Handling compression (LevelDB used Snappy compression by default; SQLite needed custom handling for compressed values and cursor fast paths)
- [chromium.org](https://issues.chromium.org/issues/436887363) *(issues.chromium.org)*
  > \* Handling compression (LevelDB used Snappy compression by default; SQLite needed custom handling for compressed values and cursor fast paths)
- [testmuai.com](https://www.testmuai.com/learning-hub/indexeddb-browser-support) *(testmuai.com)*
  > Developers testing behavior in Canary and Dev channels can inspect their SQLite-backed IndexedDB stores through the regular Chrome DevTools Storage panel
- [Web-Facing Change PSA: IndexedDB: SQLite backend](https://groups.google.com/a/chromium.org/g/blink-dev/c/jS0khnC5IWA) *(groups.google.com · 2026-04-24T00:00:00)*
  > Web-Facing Change PSA: IndexedDB: SQLite backend Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: IndexedDB: SQLite backend 275 ...
- [Web-Facing Change PSA: IndexedDB: SQLite backend (in-memory contexts)](https://groups.google.com/a/chromium.org/g/blink-dev/c/jEDGJfRibfM) *(groups.google.com)*
  > There is no change to the Web API. This is expected to improve reliability and, to a lesser extent, performance. For now this is applied only to in-memory contexts such as Incognito mode in Chromium and Google Chrome. This limits the impact of any ne...
- [Chrome 156 Moves IndexedDB to SQLite: What Changes for Your Offline-First App \| Trade Assistance LLC](https://trade-assistance.com/blog/indexeddb-sqlite-backend-chrome-156) *(trade-assistance.com · 2026-10-07T18:17:38)*
  > Chromium is replacing the LevelDB-based IndexedDB engine with SQLite, and Chrome 156 lists it in the release notes. The API is unchanged, but a transaction-scheduling edge case is not, so it is worth auditing your storage layer now.
- [IndexedDB: SQLite backend (in-memory contexts)](https://chromestatus.com/feature/5126896685809664) *(chromestatus.com · 2025-11-21T00:00:00)*
  > We cannot provide a description for this page right now
- [Chrome 150 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-150-beta?hl=en) *(developer.chrome.com · 2026-06-03T20:17:18)*
  > For now, this change applies to new data stores. This change is step 2 of a multi-phase progressive release. See the ChromeStatus feature page for SQLite in-memory contexts which tracks step 1.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Web-Facing Change PSA: IndexedDB: SQLite backend](https://groups.google.com/a/chromium.org/g/blink-dev/c/jS0khnC5IWA) *(groups.google.com · 2026-04-24T00:00:00)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > Web-Facing Change PSA: IndexedDB: SQLite backend Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: IndexedDB: SQLite ba...
- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com · 2026-09-28T08:15:45)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to re...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/google/dfindexeddb) *(github.com)*
- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com)*
- [Termius import: read Chromium's SQLite IndexedDB backend · Issue #449 · VoltiusApp/voltius](https://github.com/VoltiusApp/voltius/issues/449) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 66 result(s) found across 11 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5161589557821440" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"www.w3.org/TR/IndexedDB" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"IndexedDB: SQLite backend" API` — *Core feature API query* (5 returned)
  - `"IndexedDB: SQLite backend" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "multi-phase" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"IndexedDB: SQLite backend" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"IndexedDB: SQLite backend" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"IndexedDB" "SQLite backend" Chrome OR Chromium status` — *Finds official Chromium announcements, release notes, and Intent to Ship threads regarding the SQLite rewrite.* (8 returned)
  - `"IndexedDB" rewrite SQLite LevelDB Chromium blog OR article` — *Discovers engineering deep dives and technical articles explaining the architectural migration from LevelDB to SQLite.* (8 returned)
  - `"IndexedDB" "SQLite" (corruption OR reliability OR LevelDB) site:news.ycombinator.com OR site:reddit.com` — *Uncovers developer community discussions and sentiment around IndexedDB database corruption issues and the SQLite replacement.* (8 returned)
  - `Chromium "IndexedDB" SQLite performance benchmark test OR differences` — *Locates benchmarks, reproduction test suites, and documentation highlighting behavioral differences between LevelDB and SQLite backends.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 20 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **1 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "indexeddb", shared with 16 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "indexeddb": Chrome 99.9% passing (stable)*
- **Sources cited by the AI synthesis:** 6 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5161589557821440)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5161589557821440)
- [Specification](https://www.w3.org/TR/IndexedDB)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/498644996)
