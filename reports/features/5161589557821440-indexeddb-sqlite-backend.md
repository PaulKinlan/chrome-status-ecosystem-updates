# IndexedDB: SQLite backend

> **Report Week:** 2026-W40 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Chromium's IndexedDB implementation is rewritten on top of SQLite, to replace the previous implementation that uses a hybrid of LevelDB and flat files. There is no change to the Web API.  This is expected to improve reliability and, to a lesser extent, performance.  For now this is applied to \*new data stores\*. This is step 2 of a multi-phase rollout. See https://chromestatus.com/feature/5126896685809664 which tracks step 1, the rollout for in-memory i.e. incognito contexts. Step 3 will consist of migrating existing data from LevelDB stores to SQLite stores.  In this step, the first time a user visits a site, or after clearing site data, new IDB data will be stored in a backend that makes use of SQLite, but existing data stored in LevelDB is unimpacted.  See Documentation link below for a list of differences to be aware of.

### Motivation

Chromium's IndexedDB implementation suffers from poor reliability and maintainability because it is highly dependent on a database engine (LevelDB) that is not maintained or supported, or as featureful as a full RDBMS. Many sophisticated web apps report high rates of missing or corrupt data, and bugs in the aging backend are hard to find and fix. SQLite is a more suitable replacement for long-term maintainability as it has an active development team and community, and its features like native support for transactions should yield improved reliability.

## Ecosystem Status

- **Momentum:** High (221 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chromium's transition of its IndexedDB implementation from an unmaintained hybrid of LevelDB and flat files to an SQLite backend is an internal architectural overhaul to resolve chronic data corruption, missing data, and transaction reliability bugs. Because both WebKit (Safari) and Gecko (Firefox) already back their IndexedDB implementations with SQLite, this aligns Chromium's underlying storage architecture with the rest of the browser ecosystem without altering the public Web IDB API. Shipping by default for new persistent stores in Chrome 156 marks Phase 2 of the rollout following successful deployment in in-memory contexts.

### Recommendations
- Actionable Advice: No code changes are required since the JavaScript API surface remains identical, but developers building data-intensive or offline PWAs should proactively verify performance and durability by testing new storage creation in Chrome 156. Keep an eye out for Phase 3 rollout details regarding the automatic on-disk migration of legacy LevelDB stores to SQLite.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Chrome IndexedDB: SQLite back end" (4 points, 0 comments).

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Chrome IndexedDB: SQLite back end](https://news.ycombinator.com/item?id=48118595) — *4 pts, 0 comments*

## 📰 Ecosystem Blogs & Articles

- [Chrome IndexedDB: SQLite back end](https://chromestatus.com/feature/5161589557821440) *(chromestatus.com · 2026-05-13T06:46:44Z)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGsvdM_zsbZ2rcbB4OKXu4VFZBXSQF_OrWN1vUQj8Bolh7pfaHSUb0PxBgdCHd6VmyldZ-BAtaHGgA1yduhK6nsWy0AvUpHjNNGjPN5CYqMCQDt_SOyopl3ZXYMEScDtp15Zn6XvF2Y) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Chromium has undertaken a major internal re-architecture of its **IndexedDB** engine, replacing the legacy hybrid backend (LevelDB combined with custom flat files for large blobs) with **SQLite**.   * **The Problem:** LevelDB—o
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF9RV24u1P87ZcbTqAISl5dfFMDcisycy0niK1gc2x9E_rFANQVi_K2tRMvZS5uZTaSzTO72WgyatrT8yXFcrxqE37P2OUNCJrUGRUUNxlW6dojJby-eXzbeKZYFCI2JNkx7Ekwt09Nr-B2rqQVUmx6) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Chromium has undertaken a major internal re-architecture of its **IndexedDB** engine, replacing the legacy hybrid backend (LevelDB combined with custom flat files for large blobs) with **SQLite**.   * **The Problem:** LevelDB—o
- [chromestatuslite.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGqkOZBVOE2DhpyS-cBv5mIjNBf9O_lKOy6mQ_A5bmqm2DIoeqTVqNNbwOBDS_y6KHRoSk7IbixV2QzOtmxdiNfGlHsq7D0Ts2xc-8_QeMWDuLCrw==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Chromium has undertaken a major internal re-architecture of its **IndexedDB** engine, replacing the legacy hybrid backend (LevelDB combined with custom flat files for large blobs) with **SQLite**.   * **The Problem:** LevelDB—o
- [smashingmagazine.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEg1WqokOSQ1kWgbUmZ1g2D7_TH7sjcWD1zPUCKG55Zdip5hmOpYTvGkgNFZHKlHdcXDa6tLGMsA2ptoKZW5UxfgvadD7sS_0Q3Mzkz_XYouRziiOyf89doxIxdGHtOrFj8CuOtFFKTB1Vmx6SpMuJcSFY-9vYRQHkXhvHUp7C-9uwr3iZv35na) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Chromium has undertaken a major internal re-architecture of its **IndexedDB** engine, replacing the legacy hybrid backend (LevelDB combined with custom flat files for large blobs) with **SQLite**.   * **The Problem:** LevelDB—o
- [ycombinator.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEhEWOhx31cfCEhBXlkNKaFCZu0NYDkOLhoQ88mT_pVWAD0nZb2ilRUDM9eoZeKkP1YDaVNWOnE-JtIXaGiqqwd4qN8KiUWra6L9LlCH0DCwBCqM_1T-KtuEZBdSyN-6q6IvGE=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Chromium has undertaken a major internal re-architecture of its **IndexedDB** engine, replacing the legacy hybrid backend (LevelDB combined with custom flat files for large blobs) with **SQLite**.   * **The Problem:** LevelDB—o
- [nolanlawson.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHqJbJQ8uRUJKk8i7xavZuRgPfIgojGg4--f6Ywxa3n6c9qkz8yasAd8jmDZpEHlS_pfOp8hLenN9UzDehXYU_sE6eKs5p63-zR_9E50QVMbqdDrd289Fler-w3VS66imzFj9qvU-vuz_-sz-OFyYzdAFHeaZIJgpbMKecI) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Chromium has undertaken a major internal re-architecture of its **IndexedDB** engine, replacing the legacy hybrid backend (LevelDB combined with custom flat files for large blobs) with **SQLite**.   * **The Problem:** LevelDB—o
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHdgPvDPiaR82RObC-Jf227fTBWd7n_MF-f0hjDJyEBZfk4qW5TeIqF3ex9nqeSi_QnUaFzhO5izED6VN9jTkWN1jmf1P2xywSMLmjF0s9Qd7Hec8_kNXyF0p0K1bLm_7wIf0voWQbZGqQBW6ITdAhdUrRm_swI1kRYEzDKJeoDFCxnd1VVoXwVSbW1mv8MReNZPrnb) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Chromium has undertaken a major internal re-architecture of its **IndexedDB** engine, replacing the legacy hybrid backend (LevelDB combined with custom flat files for large blobs) with **SQLite**.   * **The Problem:** LevelDB—o
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEirdHbAAwrHlF0UdLo4h8AKyqKiTntEhCnrS5aRGNMbPlonHliNkeZEWvJrQyUF82hNVXchwOgomgXnT_ZvqIR1y272xCm9eBS5GFLvGYxmjh0SlK7r0pNzO0PtrbIMYmwysctqeE_HUdNroIXWZv5t4z-7mW_sGiBWqk5_pBnfYaZm61x4bAU1zpY1badkMGBGxgYRDyGlKNTgw==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  Chromium has undertaken a major internal re-architecture of its **IndexedDB** engine, replacing the legacy hybrid backend (LevelDB combined with custom flat files for large blobs) with **SQLite**.   * **The Problem:** LevelDB—o
- [Web-Facing Change PSA: IndexedDB: SQLite backend](https://groups.google.com/a/chromium.org/g/blink-dev/c/jS0khnC5IWA) *(groups.google.com · 2026-04-24T00:00:00)*
  > https://<strong>chromestatus.com/feature/5161589557821440</strong> · This intent message was generated by Chrome Platform Status. unread, Apr 25, 2026, 3:10:44 AMApr 25 ·  ·  ·  · Reply to author · Sign in to reply to author · Forward · Sign in to...
- [IndexedDB: SQLite backend (in-memory contexts) - Chrome Platform Status](https://chromestatus.com/feature/5126896685809664) *(chromestatus.com · 2025-11-21T00:00:00)*
  > We cannot provide a description for this page right now
- [Web-Facing Change PSA: IndexedDB: SQLite backend (in-memory contexts)](https://groups.google.com/a/chromium.org/g/blink-dev/c/jEDGJfRibfM) *(groups.google.com)*
  > There is no change to the Web API. This is expected to improve reliability and, to a lesser extent, performance. For now this is applied only to in-memory contexts such as Incognito mode in Chromium and Google Chrome. This limits the impact of any ne...
- [Chrome 150 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-150-beta?hl=en) *(developer.chrome.com · 2026-06-03T20:17:18)*
  > For now, this change applies to new data stores. This change is step 2 of a multi-phase progressive release. See the ChromeStatus feature page for SQLite in-memory contexts which tracks step 1.
- [How the browsers store IndexedDB data \| LINQ to Fail](https://www.aaron-powell.com/posts/2012-10-05-indexeddb-storage) *(aaron-powell.com · 2012-10-05T00:00:00)*
  > Firefox was the 2nd browser to go prefix free with IndexedDB, it is unprefixed as of version 16. Logically since Firefox is a cross-platform browser they use a cross-platform database, SQLite.
- [r/electronjs on Reddit: IndexedDB good enough for complex data in offline app?](https://www.reddit.com/r/electronjs/comments/atbu0e/indexeddb_good_enough_for_complex_data_in_offline) *(reddit.com · 2019-02-22T02:22:33)*
  > Our experience with indexeddb is it would suddenly eat up tons of disk space and memory when under heavy load. There are some issues related to this on leveldb (which is underlying db of indexeddb) github page.
- [r/programming on Reddit: leveldb - a fast and lightweight key/value database library](https://www.reddit.com/r/programming/comments/h6oup/leveldb_a_fast_and_lightweight_keyvalue_database) *(reddit.com · 2011-05-08T16:11:54)*
  > I agree that majority of people will never use leveldb specifically, but just because there are LOTS of alternative solutions, not because they don&#x27;t need it. E.g. apps which work with separate DBMS instance (SQL database) typically do not need ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com · 2026-09-28T08:15:45)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > 🔗 https://<strong>chromestatus.com/feature/5161589557821440</strong>
- [Web-Facing Change PSA: IndexedDB: SQLite backend](https://groups.google.com/a/chromium.org/g/blink-dev/c/jS0khnC5IWA) *(groups.google.com · 2026-04-24T00:00:00)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > https://<strong>chromestatus.com/feature/5161589557821440</strong> · This intent message was generated by Chrome Platform Status. unread, Apr 25, 2026, 3:10:44 AMApr 25 ·  ·  ·  · Reply to author · Sign in to reply to author · Forward · ...

## 📚 Platform Documentation & Specifications

- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com)*
- [IndexedDB](https://developer.mozilla.org/en-US/docs/Glossary/IndexedDB) *(developer.mozilla.org)*
- [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) *(developer.mozilla.org)*
- [Using IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 11 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5161589557821440" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"www.w3.org/TR/IndexedDB" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"IndexedDB: SQLite backend" API` — *Core feature API query* (4 returned)
  - `"IndexedDB: SQLite backend" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "multi-phase" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"IndexedDB: SQLite backend" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"IndexedDB: SQLite backend" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"IndexedDB" "SQLite" (Chromium OR Chrome) "LevelDB"` — *Finds official announcements, Intent to Ship threads, and technical overview tracking the Chromium migration from LevelDB to SQLite.* (8 returned)
  - `"IndexedDB" ("SQLite backend" OR "backed by SQLite") (differences OR reliability OR corruption)` — *Surfaces developer guides, engineering blogs, and articles detailing why Chromium is rewriting IndexedDB and what differences developers must watch out for.* (0 returned)
  - `"IndexedDB" "SQLite" ("enable-features" OR "chrome://flags" OR "chrome://indexeddb-internals")` — *Retrieves developer instructions, command-line flags, and browser internals inspection steps for testing and verifying the SQLite IndexedDB backend.* (8 returned)
  - `"IndexedDB" ("SQLite" AND "LevelDB") (corruption OR "data loss" OR reliability) site:news.ycombinator.com OR site:reddit.com` — *Discovers developer reactions, sentiment, and war stories regarding IndexedDB LevelDB corruption issues and the transition to SQLite.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 6 result(s) found — **1 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 838 item(s) inspected

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
