# IndexedDB: SQLite backend

> **Report Week:** 2026-W46 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Chromium's IndexedDB implementation is rewritten on top of SQLite, to replace the previous implementation that uses a hybrid of LevelDB and flat files. There is no change to the Web API.  This is expected to improve reliability and, to a lesser extent, performance.  For now this is applied to \*new data stores\*. This is step 2 of a multi-phase rollout. See https://chromestatus.com/feature/5126896685809664 which tracks step 1, the rollout for in-memory i.e. incognito contexts. Step 3 will consist of migrating existing data from LevelDB stores to SQLite stores.  In this step, the first time a user visits a site, or after clearing site data, new IDB data will be stored in a backend that makes use of SQLite, but existing data stored in LevelDB is unimpacted.  See Documentation link below for a list of differences to be aware of.

### Motivation

Chromium's IndexedDB implementation suffers from poor reliability and maintainability because it is highly dependent on a database engine (LevelDB) that is not maintained or supported, or as featureful as a full RDBMS. Many sophisticated web apps report high rates of missing or corrupt data, and bugs in the aging backend are hard to find and fix. SQLite is a more suitable replacement for long-term maintainability as it has an active development team and community, and its features like native support for transactions should yield improved reliability.

## Ecosystem Status

- **Momentum:** Quiet (0 points since 2026-10-12; footprint 181 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** Chromium is transitioning its IndexedDB storage layer from an unmaintained LevelDB and flat-file hybrid to an ACID-compliant SQLite backend with write-ahead logging, rolling out by default to newly created stores in Chrome 156. The standardized IndexedDB JavaScript API remains unchanged, focusing architectural benefits on data resilience, crash recovery, and reduced database corruption rather than raw query speed. This shift brings Chromium into direct architectural alignment with Gecko and WebKit, which have long relied on SQLite for IndexedDB backing storage.

### Recommendations
- Actionable Advice: Web teams do not need to rewrite their IndexedDB queries, but teams building data-intensive or offline-first apps should audit their QA suites across both clean profiles (SQLite) and populated legacy profiles (LevelDB) to verify transaction scheduling and data durability under abnormal termination. Testing in Firefox and Safari serves as a reliable baseline for confirming compatibility with SQLite-backed transaction behavior.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Chrome IndexedDB: SQLite back end" (4 points, 0 comments).

## Web-features Group

*group-level data: web-features [`indexeddb`](https://webstatus.dev/features/indexeddb), shared with 16 other ChromeStatus features*

- Share of tests passing in the web-features group `indexeddb` on [wpt.fyi](https://wpt.fyi/results?q=feature:indexeddb) (via webstatus.dev) — stable: Chrome 99.5% · Edge 99.5% · Firefox 98.9% · Safari 95.8%; experimental: Chrome 99.5% · Edge 99.5% · Firefox 98.9% · Safari 99.5%

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Chrome IndexedDB: SQLite back end](https://news.ycombinator.com/item?id=48118595) — *4 pts, 0 comments*

## 📰 Ecosystem Blogs & Articles

- [IndexedDB: SQLite backend (in-memory contexts)](https://chromestatus.com/feature/5126896685809664) *(chromestatus.com)*
  > Chromium has undertaken an architectural rewrite of its \*\*IndexedDB backing store, moving away from its legacy hybrid LevelDB and flat-file storage engine to SQLite\*\* \*\*Core Motivation:\*\* LevelDB has been difficult to maintain and lacked the resilien...
- [Chrome 156 IndexedDB SQLite Migration: What You Need to Know \| Alexander Burgos](https://alexanderburgos.netlify.app/blog/chrome-156-indexeddb-sqlite-migration) *(alexanderburgos.netlify.app)*
  > \*\*The Web API Remains Unchanged:\*\* Developers will still interact with standard IndexedDB transactions, object stores, and cursors; it does \*\*not\*\* introduce a public SQL query API SQLite brings mature ACID compliance, an active upstream maintenance ...
- [Web-Facing Change PSA: IndexedDB: SQLite backend](https://groups.google.com/a/chromium.org/g/blink-dev/c/jS0khnC5IWA) *(groups.google.com)*
  > \*\*Chrome Platform Status & Blink-dev PSA:\*\* Authored by Chromium and Microsoft engineers (Evan Stade, Abhishek Shanthkumar)
- [Chrome 156 Moves IndexedDB to SQLite: What Changes for Your Offline-First App \| Trade Assistance LLC](https://trade-assistance.com/blog/indexeddb-sqlite-backend-chrome-156) *(trade-assistance.com)*
  > It highlights that web apps will benefit from SQLite's transaction model while cautioning teams about subtle edge cases in transaction scheduling \*\*Perspective:\*\* Local-first architecture and PWA development
- [Chrome 156 Uses SQLite for New IndexedDB Stores: Windows Update and Testing Guide](https://windowsforum.com/news/chrome-156-uses-sqlite-for-new-indexeddb-stores-windows-update-and-testing-guide.449458) *(windowsforum.com)*
  > \*\*The "Split-Brain" Period:\*\* Explains that developers profiling storage performance must realize a newly created test environment exercises the SQLite path, whereas existing user profiles will remain on LevelDB until Step 3 Recommends QA pipelines e...
- [Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16362.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Daniel Herr Sat, 25 Apr 2026 00:10:41 -0700 So we killed Web SQL because everyone ...
- [\[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16359.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend 'Evan Stade' via blink-dev Fri, 24 Apr 2026 12:03:06 -0700 Contact emails \[email&#160;prot...
- [Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16371.html) *(mail-archive.com)*
  > Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend 'Evan Stade' via blink-dev Mon, 27 Apr 2026 13:02:53...
- [Web-Facing Change PSA: IndexedDB: SQLite backend (in-memory contexts)](https://groups.google.com/a/chromium.org/g/blink-dev/c/jEDGJfRibfM) *(groups.google.com)*
  > There is no change to the Web API. This is expected to improve reliability and, to a lesser extent, performance. For now this is applied only to in-memory contexts such as Incognito mode in Chromium and Google Chrome. This limits the impact of any ne...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com · 2026-10-20T00:00:00)*
  > Chromium&#x27;s IndexedDB implementation is rewritten on top of SQLite, to replace the previous implementation that uses a hybrid of LevelDB and flat files. There is no change to the Web API.
- [Chrome 150 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-150-beta) *(developer.chrome.com · 2026-06-03T00:00:00)*
  > For now, this change applies to new data stores. This change is step 2 of a multi-phase progressive release. See the ChromeStatus feature page for SQLite in-memory contexts which tracks step 1.
- [Chrome 156 Moves IndexedDB to SQLite: What Changes](https://www.digitbin.com/chrome-156-indexeddb-sqlite) *(digitbin.com · 2026-10-21T06:44:25)*
  > Every Chromium browser keeps offline data for web apps in IndexedDB, the same place a web email client parks an unsent draft so it survives a dropped connection. Until now that store sat on a mix of LevelDB and flat files. According to the Chrome Sta...
- [\[October 2026 Latest\] Chrome 156 is here! A thorough explanation of the 353 vulnerability fixes and major internal specification overhauls｜P.E.Jp](https://note.com/vast_flax7410/n/nb4578577a8f0?hl=en) *(note.com · 2026-10-22T20:35:40)*
  > ... Data integrity, fault tolerance, and reliability are significantly improved. Reduced risk of data corruption due to unexpected crashes or power outages. ... There are no changes to existing Web API specifications. &lt;strong&gt;There is no need to rewr...
- [Potential Sandbox Escape via missing SQLite corruption guard in IndexedDB \[513858286\] - Chromium](https://issues.chromium.org/issues/513858286) *(issues.chromium.org)*
  > Overview: &lt;strong&gt;A missing corruption check in SQLite&#x27;s accessPayload function allows a compromised renderer to overwrite arbitrary cached b-tree pages in the browser process&lt;/strong&gt;. This is reachable via the IndexedDB SQLite backend during b...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com · 2026-09-28T08:15:45)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. ...
- [Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16362.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Daniel Herr Sat, 25 Apr 2026 00:10:41 -0700 So we killed Web SQL because...
- [\[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16359.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend 'Evan Stade' via blink-dev Fri, 24 Apr 2026 12:03:06 -0700 Contact emails \[email...
- [Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16371.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend 'Evan Stade' via blink-dev Mon, 27 Apr 202...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/MicrosoftEdge/WebView2Feedback/discussions/5754) *(github.com)*
- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 67 result(s) found across 11 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/5161589557821440" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"www.w3.org/TR/IndexedDB" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"IndexedDB: SQLite backend" API` — *Core feature API query* (8 returned)
  - `"IndexedDB: SQLite backend" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "multi-phase" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"IndexedDB: SQLite backend" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"IndexedDB: SQLite backend" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `Chrome "IndexedDB" ("SQLite" AND "LevelDB") rewrite OR backend` — *Finds Chromium release notes, Blink-dev intent threads, and official announcements about migrating IndexedDB to SQLite.* (8 returned)
  - `"IndexedDB" "SQLite" (corruption OR reliability OR "LevelDB") site:news.ycombinator.com OR site:reddit.com` — *Captures community reactions, developer sentiment, and discussions around IndexedDB data loss issues and the SQLite replacement.* (8 returned)
  - `"IndexedDB" "SQLite backend" (benchmarks OR differences OR performance) blog` — *Surfaces developer guides, engineering blog analyses, and technical summaries detailing changes and performance characteristics of SQLite-backed IndexedDB.* (8 returned)
  - `"enable-features=IndexedDBSQLite" OR "IndexedDB SQLite" flags chrome test` — *Discovers developer testing flags, Chromium CLI switches, and practical instructions for verifying local behavior under the new backend.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 6 result(s) found — **1 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "indexeddb", shared with 16 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "indexeddb": Chrome 99.5% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5161589557821440)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5161589557821440)
- [Specification](https://www.w3.org/TR/IndexedDB)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/498644996)
