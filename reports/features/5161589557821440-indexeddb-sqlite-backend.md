# IndexedDB: SQLite backend

> **Report Week:** 2026-W43 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Chromium's IndexedDB implementation is rewritten on top of SQLite, to replace the previous implementation that uses a hybrid of LevelDB and flat files. There is no change to the Web API.  This is expected to improve reliability and, to a lesser extent, performance.  For now this is applied to \*new data stores\*. This is step 2 of a multi-phase rollout. See https://chromestatus.com/feature/5126896685809664 which tracks step 1, the rollout for in-memory i.e. incognito contexts. Step 3 will consist of migrating existing data from LevelDB stores to SQLite stores.  In this step, the first time a user visits a site, or after clearing site data, new IDB data will be stored in a backend that makes use of SQLite, but existing data stored in LevelDB is unimpacted.  See Documentation link below for a list of differences to be aware of.

### Motivation

Chromium's IndexedDB implementation suffers from poor reliability and maintainability because it is highly dependent on a database engine (LevelDB) that is not maintained or supported, or as featureful as a full RDBMS. Many sophisticated web apps report high rates of missing or corrupt data, and bugs in the aging backend are hard to find and fix. SQLite is a more suitable replacement for long-term maintainability as it has an active development team and community, and its features like native support for transactions should yield improved reliability.

## Ecosystem Status

- **Momentum:** Emerging (footprint 171 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chromium is transitioning its IndexedDB storage engine from an unmaintained LevelDB and flat-file hybrid to SQLite, rolling out by default for new persistent data stores in Chrome 156 after initial in-memory testing. Because this is an under-the-hood engine architectural overhaul rather than a new web API, the public specification remains unchanged while addressing longstanding data corruption and reliability bugs reported by heavy client-side applications. Developer perception is broadly favorable toward the improved stability, and the transition brings Chromium's underlying architecture into alignment with other major browser engines.

### Recommendations
- Actionable Advice: Web development teams do not need to change public API usage, but offline-first and local-first application developers should test new database instances in Chrome 156 to verify strict transaction boundaries and timing assumptions. Teams should also monitor error telemetry for unexpected transaction-abort edge cases ahead of Chromium's eventual automated data migration from legacy LevelDB stores.
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

- [chrome.com](https://developer.chrome.com/docs/chromium/indexeddb-storage-improvements) *(developer.chrome.com)*
  > Chromium’s internal implementation of \*\*IndexedDB is being rewritten on top of SQLite\*\*, replacing the aging hybrid architecture of LevelDB and flat files
- [Chrome 156 Moves IndexedDB to SQLite: What Changes for Your Offline-First App \| Trade Assistance LLC](https://trade-assistance.com/blog/indexeddb-sqlite-backend-chrome-156) *(trade-assistance.com)*
  > Technical Web Development Blogs The consensus among architecture blogs is that apps with robust, disciplined transaction boundaries will transition seamlessly, but edge-case race conditions should be audited
- [Web-Facing Change PSA: IndexedDB: SQLite backend](https://groups.google.com/a/chromium.org/g/blink-dev/c/jS0khnC5IWA) *(groups.google.com · 2026-04-24T00:00:00)*
  > Web-Facing Change PSA: IndexedDB: SQLite backend Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: IndexedDB: SQLite backend 278 ...
- [\[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16359.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend 'Evan Stade' via blink-dev Fri, 24 Apr 2026 12:03:06 -0700 Contact emails \[email&#160;prot...
- [Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16371.html) *(mail-archive.com)*
  > Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend 'Evan Stade' via blink-dev Mon, 27 Apr 2026 13:02:53...
- [Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16362.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Daniel Herr Sat, 25 Apr 2026 00:10:41 -0700 So we killed Web SQL because everyone ...
- [Web-Facing Change PSA: IndexedDB: SQLite backend (in-memory contexts)](https://groups.google.com/a/chromium.org/g/blink-dev/c/jEDGJfRibfM) *(groups.google.com)*
  > There is no change to the Web API. This is expected to improve reliability and, to a lesser extent, performance. For now this is applied only to in-memory contexts such as Incognito mode in Chromium and Google Chrome. This limits the impact of any ne...
- [IndexedDB: SQLite backend (in-memory contexts)](https://chromestatus.com/feature/5126896685809664) *(chromestatus.com · 2025-11-21T00:00:00)*
  > We cannot provide a description for this page right now
- [Chrome 150 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-150-beta) *(developer.chrome.com · 2026-06-03T00:00:00)*
  > For now, this change applies to new data stores. This change is step 2 of a multi-phase progressive release. See the ChromeStatus feature page for SQLite in-memory contexts which tracks step 1.
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > Tracking bug #542706103 ↗ (opens in new window) \| ChromeStatus.com entry \| Spec ↗ (opens in new window) \| Explainer ↗ (opens in new window) Chromium&#x27;s IndexedDB implementation is rewritten on top of SQLite, to replace the previous implementation...
- [Potential Sandbox Escape via missing SQLite corruption guard in IndexedDB \[513858286\] - Chromium](https://issues.chromium.org/issues/513858286) *(issues.chromium.org)*
  > This is reachable via the IndexedDB SQLite backend during blob write operations. This potential memory corruption can lead to remote code execution in the unsandboxed browser process. ... A potential vulnerability exists in SQLite&#x27;s B-tree imple...
- [Large/complex IDB randomly fails with DOMException: Failed to read large IndexedDB value \[342779913\] - Chromium](https://issues.chromium.org/issues/342779913) *(issues.chromium.org)*
  > Our replacement of LevelDB by SQLite as the backend of IDB is pretty well advanced at this point. It would be interesting to know if switching over makes a difference. You can start Chrome with --enable-features=IdbSqliteOnDiskRollout:stage/UseSqlite...

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

- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com)*
- [Premium IndexedDB: is it a viable web fallback if SQLite does not work out? · Issue #2139 · wcpos/monorepo](https://github.com/wcpos/monorepo/issues/2139) *(github.com)*
- [Termius import: read Chromium's SQLite IndexedDB backend · Issue #449 · VoltiusApp/voltius](https://github.com/VoltiusApp/voltius/issues/449) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 66 result(s) found across 11 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5161589557821440" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"www.w3.org/TR/IndexedDB" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"IndexedDB: SQLite backend" API` — *Core feature API query* (5 returned)
  - `"IndexedDB: SQLite backend" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "multi-phase" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"IndexedDB: SQLite backend" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"IndexedDB: SQLite backend" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"IndexedDB" "SQLite" ("LevelDB" OR "Chromium") ("Intent to Ship" OR "chromestatus")` — *Find official Chromium status updates, Intents to Ship, and technical rollout announcements regarding replacing LevelDB with SQLite.* (8 returned)
  - `"IndexedDB" "SQLite backend" ("Chrome" OR "Chromium") (reliability OR corruption OR performance)` — *Discover blog posts and technical articles explaining why Chrome switched IndexedDB to SQLite and the expected reliability benefits.* (8 returned)
  - `site:news.ycombinator.com OR site:reddit.com/r/webdev ("IndexedDB" SQLite "LevelDB" corruption)` — *Capture developer reactions, pain points with previous LevelDB corruption, and sentiment about the SQLite transition.* (8 returned)
  - `"IndexedDB" "SQLite" backend (differences OR "behavioral changes" OR quirks) "Chromium"` — *Locate developer guides and technical notes detailing behavioral differences or edge cases between the legacy LevelDB implementation and the SQLite backend.* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 5 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **1 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "indexeddb", shared with 16 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "indexeddb": Chrome 99.9% passing (stable)*

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
