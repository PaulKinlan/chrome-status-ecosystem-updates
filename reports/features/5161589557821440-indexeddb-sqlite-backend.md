# IndexedDB: SQLite backend

> **Report Week:** 2026-W44 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Chromium's IndexedDB implementation is rewritten on top of SQLite, to replace the previous implementation that uses a hybrid of LevelDB and flat files. There is no change to the Web API.  This is expected to improve reliability and, to a lesser extent, performance.  For now this is applied to \*new data stores\*. This is step 2 of a multi-phase rollout. See https://chromestatus.com/feature/5126896685809664 which tracks step 1, the rollout for in-memory i.e. incognito contexts. Step 3 will consist of migrating existing data from LevelDB stores to SQLite stores.  In this step, the first time a user visits a site, or after clearing site data, new IDB data will be stored in a backend that makes use of SQLite, but existing data stored in LevelDB is unimpacted.  See Documentation link below for a list of differences to be aware of.

### Motivation

Chromium's IndexedDB implementation suffers from poor reliability and maintainability because it is highly dependent on a database engine (LevelDB) that is not maintained or supported, or as featureful as a full RDBMS. Many sophisticated web apps report high rates of missing or corrupt data, and bugs in the aging backend are hard to find and fix. SQLite is a more suitable replacement for long-term maintainability as it has an active development team and community, and its features like native support for transactions should yield improved reliability.

## Ecosystem Status

- **Momentum:** Emerging (footprint 201 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** Chromium is overhauling its internal IndexedDB storage architecture, transitioning from a legacy, unmaintained LevelDB and flat-file hybrid engine to SQLite to address persistent corruption and write-reliability bugs. Shipped by default for new persistent data stores in Chrome 156 as part of a phased rollout, the change involves no public Web API modifications and brings Chromium into architectural alignment with Safari and Firefox.

### Recommendations
- Actionable Advice: No code changes or polyfills are required since the JavaScript API is intact, but offline-first teams should enforce strict transaction boundaries and audit asynchronous write completions rather than relying on legacy Chromium scheduling quirks. Teams should also tag client-side storage error telemetry by browser version to catch any unexpected regressions before existing databases are migrated in Phase 3.
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

- [Chrome 156 Moves IndexedDB to SQLite: What Changes for Your Offline-First App \| Trade Assistance LLC](https://trade-assistance.com/blog/indexeddb-sqlite-backend-chrome-156) *(trade-assistance.com)*
  > \*\*Phase 1:\*\* In-memory / Incognito contexts (shipped in Chrome 144–145) \*\*Sources:\*\* Developer analysis pieces (e.g., \*Trade Assistance\*, \*DigitBin: "Chrome 156 Moves IndexedDB to SQLite: What Changes for Your Offline-First App"\*)
- [appspot.com](https://img680-dot-cr-status.appspot.com/feature/5126896685809664) *(img680-dot-cr-status.appspot.com)*
  > \*\*Phase 1:\*\* In-memory / Incognito contexts (shipped in Chrome 144–145) \*\*Sources:\*\* \*Chrome Platform Status\* & \*Blink-dev Announcement\* (Evan Stade & Abhishek Shanthkumar, Microsoft/Chromium)
- [windowsforum.com](https://windowsforum.com/news/chrome-156-uses-sqlite-for-new-indexeddb-stores-windows-update-and-testing-guide.449458) *(windowsforum.com)*
  > \*\*Phase 2 (Current – Chrome 156):\*\* New persistent data stores created on first-time visits or after clearing site storage While SQLite may offer slight throughput improvements in certain patterns, the primary goal is crash consistency and eliminatin...
- [Chrome 156 Moves IndexedDB to SQLite: What Changes](https://www.digitbin.com/chrome-156-indexeddb-sqlite) *(digitbin.com)*
  > \*\*Phase 3:\*\* Automated migration of existing LevelDB disk stores to SQLite (deferred to mitigate data-loss risks during the transition) \*\*Sources:\*\* Developer analysis pieces (e.g., \*Trade Assistance\*, \*DigitBin: "Chrome 156 Moves IndexedDB to SQLite...
- [ycombinator.com](https://news.ycombinator.com/item?id=45067339) *(news.ycombinator.com)*
  > With Chromium’s engine rewrite, Chromium joins \*\*Firefox (Gecko)\*\* and \*\*Safari (WebKit)\*\*, both of which already run IndexedDB on top of SQLite under the hood
- [Web-Facing Change PSA: IndexedDB: SQLite backend](https://groups.google.com/a/chromium.org/g/blink-dev/c/jS0khnC5IWA) *(groups.google.com · 2026-04-24T00:00:00)*
  > Web-Facing Change PSA: IndexedDB: SQLite backend Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: IndexedDB: SQLite backend 287 ...
- [\[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16359.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend 'Evan Stade' via blink-dev Fri, 24 Apr 2026 12:03:06 -0700 Contact emails \[email&#160;prot...
- [Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16371.html) *(mail-archive.com)*
  > Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend 'Evan Stade' via blink-dev Mon, 27 Apr 2026 13:02:53...
- [Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16362.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Daniel Herr Sat, 25 Apr 2026 00:10:41 -0700 So we killed Web SQL because everyone ...
- [Chrome 150 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-150-beta) *(developer.chrome.com · 2026-06-03T00:00:00)*
  > For now, this change applies to new data stores. This change is step 2 of a multi-phase progressive release. See the ChromeStatus feature page for SQLite in-memory contexts which tracks step 1.
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com · 2026-10-20T08:23:54)*
  > Tracking bug #542706103 ↗ (opens in new window) \| ChromeStatus.com entry \| Spec ↗ (opens in new window) \| Explainer ↗ (opens in new window) Chromium&#x27;s IndexedDB implementation is rewritten on top of SQLite, to replace the previous implementation...
- [Write code to migrate from LevelDB to SQLite \[419264073\] - Chromium](https://issues.chromium.org/issues/419264073) *(issues.chromium.org · 2025-05-21T00:00:00)*
  > IDB: SQLite store - &lt;strong&gt;add support for blobs that are stored as files&lt;/strong&gt;. ... This will be used for DBs migrated from LevelDB, where blobs are stored as standalone files, to sidestep the need to re-write those blobs into the SQLite DB. No ...
- [Migrate IndexedDB from LevelDB to SQLite \[40253999\] - Chromium](https://issues.chromium.org/issues/40253999/dependencies) *(issues.chromium.org)*
  > Date of next expected progress update or deadline for providing requested information. \[ID: 1225154\] · This field contains Gerrit urls of code changes that ‘fix’ a security bug (i.e., excluding logging/cleanup commits) and is used when a singular fix...
- [Potential Sandbox Escape via missing SQLite corruption guard in IndexedDB \[513858286\] - Chromium](https://issues.chromium.org/issues/513858286) *(issues.chromium.org)*
  > Overview: &lt;strong&gt;A missing corruption check in SQLite&#x27;s accessPayload function allows a compromised renderer to overwrite arbitrary cached b-tree pages in the browser process&lt;/strong&gt;. This is reachable via the IndexedDB SQLite backend during b...
- [More efficient IndexedDB storage in Chrome \| Chromium \| Chrome for Developers](https://developer.chrome.com/docs/chromium/indexeddb-storage-improvements) *(developer.chrome.com · 2024-08-27T00:00:00)*
  > A new optimization in Chrome improves how IndexedDB data is stored on disk. This document summarizes the key points of this update.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Web-Facing Change PSA: IndexedDB: SQLite backend](https://groups.google.com/a/chromium.org/g/blink-dev/c/jS0khnC5IWA) *(groups.google.com · 2026-04-24T00:00:00)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > Web-Facing Change PSA: IndexedDB: SQLite backend Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: IndexedDB: SQLite ba...
- [\[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16359.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend 'Evan Stade' via blink-dev Fri, 24 Apr 2026 12:03:06 -0700 Contact emails \[email...
- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com · 2026-09-28T08:15:45)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to re...
- [Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16371.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend 'Evan Stade' via blink-dev Mon, 27 Apr 202...
- [Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16362.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Daniel Herr Sat, 25 Apr 2026 00:10:41 -0700 So we killed Web SQL because...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/MicrosoftEdge/WebView2Feedback/discussions/5754) *(github.com)*
- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com)*
- [Termius import: read Chromium's SQLite IndexedDB backend · Issue #449 · VoltiusApp/voltius](https://github.com/VoltiusApp/voltius/issues/449) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 71 result(s) found across 12 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5161589557821440" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"www.w3.org/TR/IndexedDB" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"IndexedDB: SQLite backend" API` — *Core feature API query* (5 returned)
  - `"IndexedDB: SQLite backend" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "multi-phase" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"IndexedDB: SQLite backend" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"IndexedDB: SQLite backend" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `Chromium "IndexedDB" "SQLite" (LevelDB OR backend OR migration)` — *Find official announcements, design docs, and release updates regarding Chromium rewriting the IndexedDB backend to use SQLite instead of LevelDB.* (8 returned)
  - `"IndexedDB" (corruption OR "data loss") "SQLite" Chromium` — *Discover developer discussions, Hacker News threads, and bug tracking debates addressing IndexedDB reliability issues and expectations around SQLite.* (8 returned)
  - `"IndexedDB" "SQLite backend" (performance OR differences OR reliability) blog` — *Look for technical writeups and blog posts detailing behavioral differences, storage quirks, and performance characteristics of the new SQLite-backed IndexedDB.* (5 returned)
  - `"IndexedDB" chrome://flags SQLite OR "IndexedDbSQLite" OR enable-features` — *Locate developer guides, CLI flags, and test setups for enabling, debugging, and benchmarking the SQLite IndexedDB implementation in Chromium.* (8 returned)
  - `"IndexedDB" SQLite ("Dexie" OR "localForage" OR "offline") reliability` — *Track how major client-side storage libraries, offline-first frameworks, and PWAs are reacting to the SQLite engine migration.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **1 verified relevant**
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
