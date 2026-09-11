# Speculative load measurement

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Origin trial

## Overview

Expose measurement data regarding speculative loads (preloads, prefetches and prerenders) as part of a newly exposed `performance.getSpeculations()` method. That would enable developers to measure the efficacy of various speculative loading strategies and adapt them accordingly.

### Motivation

Modern web applications can use speculative loading techniques to improve navigation performance. However, developers currently lack visibility into whether these speculations were actually used, making it hard for them to deploy higher eagerness values than "conservative". Such values can result in wasted user bandwidth and server-side load, and currently developers have no way to weigh the trade-off between those and potential performance gains.

This proposal addresses this by exposing information about used and unused speculative loads on page dismissal, enabling developers to measure speculation effectiveness and optimize their speculative load strategies, to pick the trade-off that's right for them.

## Ecosystem Status

- **Momentum:** Moderate (40 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Speculative load measurement is currently Origin trial in Chrome 150. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- In active Origin Trial in Chrome 150. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: ""Chrome's experimental Speculative Load Measurement API gave us the missing visibility." https://t.co/TEkfEKnznR" (7 points, 1 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** ["Chrome's experimental Speculative Load Measurement API gave us the missing visibility." https://t.co/TEkfEKnznR](https://twitter.com/nhiroki_/status/2094637720618631207) — *by @nhiroki_, 7 likes/RTs, 1 replies*

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEBpiKriE5q2Catlt4hQqdbHz-nKjuCEMawbE7cmDfX8jaQfpFhKGs4LMtiZCcq7Ti-CbpfbMK_loPYdFZTHlIWzfRBrspNaQNN6DL1vyOnXjlDM-2oDSzQFbtYXfSYSMUfbc_3Zl3iUUEh) *(vertexaisearch.cloud.google.com)*
  > GitHub - WICG/speculative_load_measurement · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signed out in a...
- [[blink-dev] Intent to Prototype: Speculative load measurement](http://www.mail-archive.com/blink-dev@chromium.org/msg15724.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Speculative load measurement Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Speculative load measurement Yoav Weiss (@Shopify) Wed, 04 Feb 2026 05:12:44 -0800 *Contact emails* [email&#160;prote...
- [[blink-dev] Re: Intent to Experiment: Speculative load measurement](http://www.mail-archive.com/blink-dev@chromium.org/msg16562.html) *(mail-archive.com)*
  > *No* *Ongoing technical constraints* *No* *Debuggability* *Nothing in particular.* *Will this feature be supported on all six Blink platforms (Windows, Mac, Linux, ChromeOS, Android, and Android WebView)?* Yes *Is this feature fully tested by web-pla...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Intent to Prototype: Speculative load measurement](http://www.mail-archive.com/blink-dev@chromium.org/msg15724.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5118840377835520`)*
  > [blink-dev] Intent to Prototype: Speculative load measurement Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Speculative load measurement Yoav Weiss (@Shopify) Wed, 04 Feb 2026 05:12:44 -0800 *Contact emails* [email&...

## 📚 Platform Documentation & Specifications

- [GitHub - WICG/speculative_load_measurement · GitHub](https://github.com/WICG/speculative_load_measurement) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 18 result(s) found across 6 planned queries — **3 verified relevant**
  - `"chromestatus.com/feature/5118840377835520" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/speculative_load_measurement/blob/main/README.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"performance.getSpeculations()" OR "performance.getSpeculations" javascript` — *Finds code snippets, implementation examples, and exact WebIDL/JavaScript usage of the performance.getSpeculations method.* (8 returned)
  - `"Speculation Rules API" ("measure" OR "analytics" OR "metrics") ("speculative load measurement" OR "performance.getSpeculations")` — *Searches for developer guides, blog posts, and tutorials on measuring the efficacy and success rate of speculative prefetches and prerenders.* (0 returned)
  - `"speculative load measurement" ("Intent to Prototype" OR "Intent to Ship" OR "Chrome Platform Status" OR "web.dev")` — *Captures official vendor signals, standards milestones, and feature release announcements across Chromium and web platform channels.* (1 returned)
  - `"speculative_load_measurement" OR "speculative load measurement" (site:github.com/WICG OR site:discourse.wicg.io OR site:issues.chromium.org)` — *Surfaces standards deliberations, design trade-offs, developer feedback, and bug tracker discussions in WICG and Chromium repositories.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 6 result(s) found — **1 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 3 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5118840377835520)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5118840377835520)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/481590676)
