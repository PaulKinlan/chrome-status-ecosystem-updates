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

- **Momentum:** Moderate (70 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Background Fetch remains a Chromium-exclusive API that narrowly avoided complete deprecation due to low web-wide usage. In Chrome 154, Chromium is hardening the feature by routing all requests through standard Fetch pipeline machinery, closing a security bypass to enforce CORS, CORP/COEP/DIP, and Local Network Access (LNA) checks.

### Recommendations
- Actionable Advice: Audit all `backgroundFetch.fetch()` requests to ensure remote media or data assets explicitly return appropriate `Access-Control-Allow-Origin` headers and comply with CORP/LNA policies. Background Fetch must remain guarded behind feature detection (`'BackgroundFetchManager' in self`) as progressive enhancement.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [background-fetch/index.bs at main · WICG/background-fetch](https://github.com/WICG/background-fetch/blob/main/index.bs) *(github.com)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > background-fetch/index.bs at main · WICG/background-fetch · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your ses...
- [Background Fetch · Issue #149 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/149) *(github.com · 2023-03-15T23:42:46)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Background Fetch · Issue #149 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your se...
- [Background Fetch · Issue #30 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/30) *(github.com · 2017-09-27T07:27:40)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Background Fetch · Issue #30 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your se...
- [content/files/en-us/web/api/background_fetch_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/background_fetch_api/index.md?plain=1) *(github.com)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > content/files/en-us/web/api/background_fetch_api/index.md at main · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...

## 📚 Platform Documentation & Specifications

- [background-fetch/index.bs at main · WICG/background-fetch](https://github.com/WICG/background-fetch/blob/main/index.bs) *(github.com)*
- [Background Fetch · Issue #149 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/149) *(github.com)*
- [Background Fetch · Issue #30 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/30) *(github.com)*
- [content/files/en-us/web/api/background_fetch_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/background_fetch_api/index.md?plain=1) *(github.com)*
- [BackgroundFetchManager: fetch() method](https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchManager/fetch) *(developer.mozilla.org)*
- [Background Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Background_Fetch_API) *(developer.mozilla.org)*
- [BackgroundFetchRegistration](https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchRegistration) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 30 result(s) found across 6 planned queries — **4 verified relevant**
  - `"chromestatus.com/feature/6210300985606144" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"wicg.github.io/background-fetch" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"CORS enforcement for Background Fetch" API` — *Core feature API query* (0 returned)
  - `"CORS enforcement for Background Fetch" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wicg.github" OR "fetch.spec" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CORS enforcement for Background Fetch" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
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
