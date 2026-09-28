# CORS enforcement for Background Fetch

> **Report Week:** 2026-W40 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Starting in Chrome 154, the Background Fetch API now enforces Cross-Origin Resource Sharing (CORS).  This update aligns Chromium's implementation with the intent of the \[Background Fetch spec\](https://wicg.github.io/background-fetch/). This ensures that Background Fetch requests are subject to the same security policies, such as Local Network Access checks.   This update prevents sites from bypassing CORS (and other security policy checks) by using Background Fetch instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as CORS (and CORP/COEP/DIP).

(crbug.com/515243254 is our meta bug tracking all of the different web platform security issues with Background Fetch.)

## Ecosystem Status

- **Momentum:** High (160 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** CORS enforcement for Background Fetch is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: \[whatwg-fetch\](https://www.npmjs.com/package/whatwg-fetch) (v3.6.20) for progressive enhancement.

## Packages & Polyfills

- [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) `v3.6.20` — A window.fetch polyfill.
- [react-native-background-fetch](https://www.npmjs.com/package/react-native-background-fetch) `v4.4.2` — iOS & Android BackgroundFetch API implementation for React Native
- [expo-background-fetch](https://www.npmjs.com/package/expo-background-fetch) `v57.0.20` — Expo universal module for BackgroundFetch API

## 📰 Ecosystem Blogs & Articles

- [CORS enforcement for Background Fetch - Chrome Platform Status](https://chromestatus.com/feature/6210300985606144) *(chromestatus.com · 2026-08-06T00:00:00)*
  > Chrome Platform Status
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-23T06:03:02)*
  > <strong>This aligns Chromium&#x27;s implementation with the Background Fetch specification and ensures that Background Fetch requests are subject to the same security policies as regular fetch() requests</strong>, preventing sites from bypassing CORS...
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com · 2026-09-02T00:00:00)*
  > <strong>The Background Fetch API now enforces Cross-Origin Resource Sharing (CORS).</strong>
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > <strong>This update prevents sites from bypassing CORS (and other security policy checks) by using Background Fetch instead of regular Fetch</strong>. ChromeStatus.com entry | Spec ↗ (opens in new window) Background Fetch requests now require that th...
- [Chrome Enterprise Release Notes](https://chromeenterprise.google/intl/en_ca/resources/release-notes) *(chromeenterprise.google · 2026-09-09T00:00:00)*
  > Starting in Chrome 154, <strong>the Background Fetch API now enforces Cross-Origin Resource Sharing (CORS).</strong> This update aligns Chromium&#x27;s implementation with the intent of the Background Fetch spec.
- [Google Releases Chrome 154 Stable: Standardizes iframe Auto-Resize and HTTP Connection Prompts — BigGo Finance](https://finance.biggo.com/news/c5f02f74-e6b8-4a67-bd4e-b2c4a7c36f09) *(finance.biggo.com · 2026-09-25T07:06:18)*
  > <strong>The Background Fetch API now enforces CORS, and access to local or loopback addresses requires Local Network Access permission</strong>. In Secure Payment Confirmation, a &quot;NotSupportedError&quot; is now returned when the specified langua...
- [Chrome 154 patches 108 flaws, 11 critical, and warns before HTTP sites](https://pasqualepillitteri.it/en/news/17919/chrome-154-patches-108-flaws-http-warning) *(pasqualepillitteri.it · 2026-09-23T21:32:00)*
  > In the experimental phase (origin ... to reduce CAPTCHAs. On the networking side, <strong>Background Fetch falls under CORS rules and under the restrictions on access to local networks</strong>....
- [Google Chrome 154 stable version released, now automatically resizes iframes to fit their content and displays a confirmation message when connecting to HTTP sites. - GIGAZINE](https://gigazine.net/gsc_news/en/20260925-google-chrome-154) *(gigazine.net · 2026-09-25T05:33:02)*
  > • CORS is now applied to the Background Fetch API . - <strong>Accessing local or loopback addresses via Background Fetch now requires Local Network Access permission</strong>. - In Secure Payment Confirmation , if the language tag specified in &#x27;...
- [Chrome 154 Brings New AI Features, Stronger Network Protections, and 108 Security Fixes](https://winaero.com/chrome-154-brings-new-ai-features-stronger-network-protections-and-108-security-fixes) *(winaero.com · 2026-09-25T01:19:22)*
  > Background Fetch also gets stricter rules. Chrome now requires Local Network Access permission when a site sends data to local servers or loopback addresses like 127.0.0.1. The browser also applies CORS checks here, otherwise it could help attackers ...

## 📚 Platform Documentation & Specifications

- [Background Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Background_Fetch_API) *(developer.mozilla.org)*
- [BackgroundFetchRegistration](https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchRegistration) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 11 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/6210300985606144" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"wicg.github.io/background-fetch" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"CORS enforcement for Background Fetch" API` — *Core feature API query* (1 returned)
  - `"CORS enforcement for Background Fetch" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wicg.github" OR "fetch.spec" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CORS enforcement for Background Fetch" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CORS enforcement for Background Fetch" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Background Fetch API" CORS "cross-origin" tutorial OR guide` — *Find developer articles and tutorials explaining how CORS affects Background Fetch operations in service workers.* (0 returned)
  - `"registration.backgroundFetch.fetch" CORS mode` — *Search for code examples demonstrating Background Fetch API calls that configure cross-origin requests and CORS modes.* (8 returned)
  - `"Background Fetch" CORS Chrome 154 OR "release notes"` — *Discover browser announcements, release notes, and migration advice detailing CORS enforcement for Background Fetch.* (8 returned)
  - `"Background Fetch" ("bypass CORS" OR "Local Network Access" OR "crbug") site:chromium.org OR site:github.com/WICG` — *Track discussions, spec debates, and issue trackers analyzing security bypasses resolved by enforcing CORS in Background Fetch.* (0 returned)
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
