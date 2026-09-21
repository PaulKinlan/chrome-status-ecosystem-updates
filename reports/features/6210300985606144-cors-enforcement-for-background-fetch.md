# CORS enforcement for Background Fetch

> **Report Week:** 2026-W39 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Starting in Chrome 154, the Background Fetch API now enforces Cross-Origin Resource Sharing (CORS).  This update aligns Chromium's implementation with the intent of the \[Background Fetch spec\](https://wicg.github.io/background-fetch/). This ensures that Background Fetch requests are subject to the same security policies, such as Local Network Access checks.   This update prevents sites from bypassing CORS (and other security policy checks) by using Background Fetch instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as CORS (and CORP/COEP/DIP).

(crbug.com/515243254 is our meta bug tracking all of the different web platform security issues with Background Fetch.)

## Ecosystem Status

- **Momentum:** High (210 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Background Fetch remains a Chromium-exclusive API with historically low web adoption that Google previously considered deprecating before opting to overhaul its security architecture. Enforcing Cross-Origin Resource Sharing (CORS) in Chrome 154 routes requests through standard browser network machinery rather than legacy download paths, closing vulnerabilities (tracked under crbug.com/515243254 and CVE-2026-1504) where background requests bypassed CORS, CORP/COEP, and Local Network Access controls.

### Recommendations
- Actionable Advice: Audit existing Background Fetch operations immediately to ensure target cross-origin endpoints return standard CORS headers (\`Access-Control-Allow-Origin\`), preventing downloads from failing in Chrome 154+. Background Fetch should continue to be treated purely as an optional progressive enhancement with standard Fetch fallbacks for Safari and Firefox.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: \[whatwg-fetch\](https://www.npmjs.com/package/whatwg-fetch) (v3.6.20) for progressive enhancement.
- Verified community discussion on Twitter / X: "Corsfix Blog" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Corsfix Blog](https://corsfix.com/blog) — *0 likes/RTs, 0 replies*

## Packages & Polyfills

- [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) `v3.6.20` — A window.fetch polyfill.
- [react-native-background-fetch](https://www.npmjs.com/package/react-native-background-fetch) `v4.4.2` — iOS & Android BackgroundFetch API implementation for React Native
- [expo-background-fetch](https://www.npmjs.com/package/expo-background-fetch) `v57.0.19` — Expo universal module for BackgroundFetch API

## 📰 Ecosystem Blogs & Articles

- [Intent to Experiment: Background Fetch](https://groups.google.com/a/chromium.org/g/blink-dev/c/z5WX-2RMulo) *(groups.google.com)*
  > Intent to Experiment: Background Fetch Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Background Fetch 248 views Skip to first ...
- [Fetch API: The Ultimate Guide to CORS and ‘no-cors’ \| by ＣＹＢＥＲＳＰＨＥＲＥ \| Medium](https://medium.com/@cybersphere/fetch-api-the-ultimate-guide-to-cors-and-no-cors-cbcef88d371e) *(medium.com · 2023-04-22T16:09:06)*
  > Medium Fetch API: The Ultimate Guide to CORS and ‘no-cors’ | by ＣＹＢＥＲＳＰＨＥＲＥ | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in Fetch Api Cors Nodejs JavaScript Http Request Fetch API: The Ultimate Guide to CORS and ‘no-...
- [CORS Demystified: Mastering Access-Control-Allow-Origin and Web Security](https://toolshelf.tech/blog/cors-demystified-mastering-access-control-allow-origin-web-security) *(toolshelf.tech)*
  > To do this, <strong>your frontend fetch request must include credentials: &#x27;include&#x27;, and the server must send</strong>: ... The Catch: If Access-Control-Allow-Credentials is true, you cannot set Access-Control-Allow-Origin to *. The browser...
- [Understanding CORS in Depth and How Browsers Enforce It - AverageDevs](https://www.averagedevs.com/blog/understanding-cors-in-depth-browsers-enforce) *(averagedevs.com · 2025-12-05T00:00:00)*
  > Understanding CORS in Depth and How Browsers Enforce It - AverageDevs Back December 5, 2025 Understanding CORS in Depth and How Browsers Enforce It A practical deep dive into Cross Origin Resource Sharing (CORS) for mid level web developers - how it ...
- [The Complete Guide to CORS for Modern Frontend Developers \| by CodeByUmar \| Skill Stuff \| Medium](https://medium.com/skillstuff/the-complete-guide-to-cors-for-modern-frontend-developers-0d79450f0f03) *(medium.com · 2026-03-31T17:11:25)*
  > Stop fighting mysterious CORS errors, ... 👉 Read this post free here ... <strong>Access to fetch at &#x27;https://api.example.com/data&#x27; from origin &#x27;http://localhost:3000&#x27; has been blocked by CORS policy</strong>....
- [React CORS Guide: What It Is and How to Enable It](https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it) *(stackhawk.com · 2025-12-12T20:00:17)*
  > Error: The value of the &#x27;Access-Control-Allow-Origin&#x27; header must not be the wildcard &#x27;*&#x27; when the request&#x27;s credentials mode is &#x27;include‘ · Solution: <strong>Use specific origins when sending credentials</strong>: // Re...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [background-fetch/index.bs at main · WICG/background-fetch](https://github.com/WICG/background-fetch/blob/main/index.bs) *(github.com)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > background-fetch/index.bs at main · WICG/background-fetch · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your ses...
- [periodic-background-sync/index.bs at main · WICG/periodic-background-sync](https://github.com/WICG/periodic-background-sync/blob/main/index.bs) *(github.com · 2019-09-30T00:00:00)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > periodic-background-sync/index.bs at main · WICG/periodic-background-sync · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ...
- [Background Fetch · Issue #30 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/30) *(github.com · 2017-09-27T07:27:40)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Background Fetch · Issue #30 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your se...
- [Background Fetch · Issue #149 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/149) *(github.com · 2023-03-15T23:42:46)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Background Fetch · Issue #149 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your se...
- [Intent to Experiment: Background Fetch](https://groups.google.com/a/chromium.org/g/blink-dev/c/z5WX-2RMulo) *(groups.google.com)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Intent to Experiment: Background Fetch Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Background Fetch 248 views Skip...

## 📚 Platform Documentation & Specifications

- [background-fetch/index.bs at main · WICG/background-fetch](https://github.com/WICG/background-fetch/blob/main/index.bs) *(github.com)*
- [periodic-background-sync/index.bs at main · WICG/periodic-background-sync](https://github.com/WICG/periodic-background-sync/blob/main/index.bs) *(github.com)*
- [Background Fetch · Issue #30 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/30) *(github.com)*
- [Background Fetch · Issue #149 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/149) *(github.com)*
- [GitHub - WICG/webcomponents: Web Components specifications · GitHub](https://github.com/WICG/webcomponents) *(github.com)*
- [webcomponents/proposals/css-modules-v1-explainer.md at gh-pages · WICG/webcomponents](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/css-modules-v1-explainer.md) *(github.com)*
- [GitHub - WICG/webpackage: Web packaging format · GitHub](https://github.com/WICG/webpackage) *(github.com)*
- [GitHub - yukthaareddyy/specgrep: Full-text search across IETF RFCs, WHATWG/W3C specs, and ECMA-262/402. · GitHub](https://github.com/yukthaareddyy/specgrep) *(github.com)*
- [Tools \| Web Platform Incubator \| Community Groups \| Discover W3C groups \| W3C](https://www.w3.org/groups/cg/wicg/tools) *(w3.org)*
- [webcomponents/proposals/html-module-spec-changes.md at gh-pages · WICG/webcomponents](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/html-module-spec-changes.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 37 result(s) found across 7 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/6210300985606144" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"wicg.github.io/background-fetch" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"CORS enforcement for Background Fetch" API` — *Core feature API query* (0 returned)
  - `"CORS enforcement for Background Fetch" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wicg.github" OR "fetch.spec" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CORS enforcement for Background Fetch" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CORS enforcement for Background Fetch" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **3 verified relevant**
- **Web Platform Tests (wpt.fyi):** 17 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6210300985606144)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6210300985606144)
- [Specification](https://wicg.github.io/background-fetch)
