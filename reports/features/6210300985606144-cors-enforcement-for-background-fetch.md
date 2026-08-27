# CORS enforcement for Background Fetch

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Starting in Chrome 154, the Background Fetch API will enforce Cross-Origin Resource Sharing (CORS). 
This update aligns Chromium's implementation with the intent of the [Background Fetch spec](https://wicg.github.io/background-fetch/). This ensures that Background Fetch requests are subject to the same security policies, such as Local Network Access checks. 
This update prevents sites from bypassing CORS (and other security policy checks) by using Background Fetch instead of regular [Fetch](https://fetch.spec.whatwg.org/).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as CORS (and CORP/COEP/DIP).

(crbug.com/515243254 is our meta bug tracking all of the different web platform security issues with Background Fetch.)

## Ecosystem Status

- **Momentum:** Quiet (0 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** The Background Fetch API remains a Chromium-exclusive capability incubated within the WICG, with overall web platform adoption remaining low. Rather than deprecating the API entirely, Chromium is tightening its security boundary in Chrome 154 by routing requests through standard network machinery to strictly enforce CORS, CORP/COEP/DIP, and Local Network Access restrictions. This change resolves long-standing security bypass vulnerabilities while bringing implementation behavior in line with the WHATWG Fetch and WICG Background Fetch specifications.

### Recommendations
- Actionable Advice: Audit all Background Fetch (`BackgroundFetchManager.fetch()`) endpoints immediately to confirm servers serve appropriate `Access-Control-Allow-Origin` headers and permit required CORS preflights. Always treat Background Fetch as a progressive enhancement behind strict feature detection, maintaining standard `fetch()` or stream download fallbacks for Safari and Firefox.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 0 result(s) found (query: `""CORS enforcement for Background Fetch" API"`) — **0 verified relevant**
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found (query: `"CORS enforcement for Background Fetch"`) — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found (query: `"CORS enforcement for Background Fetch"`) — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 18 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6210300985606144)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6210300985606144)
- [Specification](https://wicg.github.io/background-fetch)
