# CORS enforcement for Background Fetch

> **Report Week:** 2026-W36 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Starting in Chrome 154, the Background Fetch API will enforce Cross-Origin Resource Sharing (CORS). 
This update aligns Chromium's implementation with the intent of the [Background Fetch spec](https://wicg.github.io/background-fetch/). This ensures that Background Fetch requests are subject to the same security policies, such as Local Network Access checks. 
This update prevents sites from bypassing CORS (and other security policy checks) by using Background Fetch instead of regular [Fetch](https://fetch.spec.whatwg.org/).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as CORS (and CORP/COEP/DIP).

(crbug.com/515243254 is our meta bug tracking all of the different web platform security issues with Background Fetch.)

## Ecosystem Status

- **Momentum:** Emerging (20 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** CORS enforcement for Background Fetch is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) (v3.6.20) for progressive enhancement.

## Packages & Polyfills

- [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) `v3.6.20` — A window.fetch polyfill.
- [react-native-background-fetch](https://www.npmjs.com/package/react-native-background-fetch) `v4.4.2` — iOS & Android BackgroundFetch API implementation for React Native
- [expo-background-fetch](https://www.npmjs.com/package/expo-background-fetch) `v57.0.14` — Expo universal module for BackgroundFetch API

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 25 result(s) found across 6 planned queries — **0 verified relevant**
  - `"chromestatus.com/feature/6210300985606144" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"wicg.github.io/background-fetch" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"Background Fetch" CORS enforcement ("Chrome 154" OR Chromium OR "Intent to Ship")` — *Finds official Chromium release notes, Intent to Ship threads, and developer ecosystem announcements about CORS enforcement in Background Fetch.* (3 returned)
  - `"backgroundFetch.fetch" ("mode: 'cors'" OR "cross-origin" OR "Access-Control-Allow-Origin")` — *Surfaces real-world JavaScript and Service Worker code implementations showing cross-origin request configurations for the Background Fetch API.* (0 returned)
  - `"Background Fetch API" CORS OR "Cross-Origin" (tutorial OR guide OR migration)` — *Discovers developer blog posts, tutorials, and migration guides explaining how to handle CORS headers and fetch policies with Background Fetch.* (8 returned)
  - `"Background Fetch" (bypass OR "crbug.com" OR "Local Network Access" OR CORP OR COEP) CORS` — *Uncovers developer discussions, bug reports, and web security analyses discussing the Background Fetch security bypass and its remediation.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 8 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **3 verified relevant**
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
