# CORS enforcement for Background Fetch

> **Report Week:** 2026-W43 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Starting in Chrome 157, the Background Fetch API now enforces Cross-Origin Resource Sharing (CORS).  This update aligns Chromium's implementation with the intent of the \[Background Fetch spec\](https://wicg.github.io/background-fetch/). This ensures that Background Fetch requests are subject to the same security policies, such as Local Network Access checks.   This update prevents sites from bypassing CORS (and other security policy checks) by using Background Fetch instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as CORS (and CORP/COEP/DIP).  (crbug.com/515243254 is our meta bug tracking all of the different web platform security issues with Background Fetch.)

## Ecosystem Status

- **Momentum:** Emerging (footprint 190 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chrome 157 introduces mandatory CORS enforcement for the Background Fetch API, aligning Chromium's implementation with the official WICG specification. This change closes a critical security loophole that previously permitted asynchronous background downloads to bypass standard security policies like CORS and Local Network Access checks. Overall, it transitions Background Fetch onto standard request machinery to prevent cross-origin data leaks.

### Recommendations
- Actionable Advice: Teams relying on Background Fetch for cross-origin resources must ensure proper CORS headers are configured on their servers. Existing implementations should be tested to confirm that assets load correctly under the new enforcement rules.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`background-fetch`](https://webstatus.dev/features/background-fetch), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `background-fetch` on [wpt.fyi](https://wpt.fyi/results?q=feature:background-fetch) (via webstatus.dev) — stable: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%; experimental: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%
- **Mozilla:** no position recorded ([standards position](https://github.com/mozilla/standards-positions/issues/30))
- **WebKit:** no position recorded ([standards position](https://github.com/WebKit/standards-positions/issues/149)) · concerns: `privacy`, `maintenance`

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img536-dot-cr-status.appspot.com/feature/6210300985606144) *(img536-dot-cr-status.appspot.com)*
  > Starting in \*\*Chrome 157\*\*, the Background Fetch API enforces \*\*Cross-Origin Resource Sharing (CORS)\*\* This update aligns Chromium's implementation with the intent of the official Background Fetch specification
- [sentinelone.com](https://www.sentinelone.com/vulnerability-database/cve-2026-1504) *(sentinelone.com)*
  > \*\*Key Takeaway:\*\* Previous gaps in the Background Fetch implementation occasionally led to information disclosure risks or cross-origin data leaks because same-origin policy constraints weren't consistently applied to asynchronous downloads
- [\[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17645.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chromestatus Fri, 02 Oct 2026 09:53:21 -0700 Contact emails \[email&#160;protecte...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17683.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Mike Taylor Wed, 07 Oct 2026 10:58:58 -0700 LGTM3 On 10/7/26 11:31 a.m.,...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17672.html) *(mail-archive.com)*
  > This update aligns Chromium&#x27;s ... Local &gt; Network Access checks. &lt;strong&gt;This update prevents sites from bypassing CORS (and &gt; other security policy checks) by using Background Fetch instead of regular &gt; \[Fetch\](https://fetch.spec.whatw...
- [BackgroundFetchManager.fetch() - Web APIs \| MDN](https://mdn2.netlify.app/en-us/docs/web/api/backgroundfetchmanager/fetch) *(mdn2.netlify.app · 2021-11-18T00:00:00)*
  > &lt;strong&gt;A Promise that resolves with a BackgroundFetchRegistration object&lt;/strong&gt;. ... Raised if no request is provided, if the mode of a request is &#x27;no-cors&#x27;, if no service worker is present, a request already exists with the requested id...
- [Background Fetch - JavaScript in the Background \| Frontend Masters](https://frontendmasters.com/courses/background-javascript/background-fetch) *(frontendmasters.com)*
  > Maximiliano discusses the Background Fetch API, which asks the web engine to make fetch download requests that the browser will download in the background. A walkthrough of the background fetch API …
- [Introducing Background Fetch \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/background-fetch) *(developer.chrome.com)*
  > &lt;strong&gt;if (&#x27;BackgroundFetchManager&#x27; in self) { // This browser supports Background Fetch! }&lt;/strong&gt; The main API hangs off a service worker registration, so make sure you&#x27;ve registered a service worker first.
- [JavaScript Web APIs Series: Background and Synchronization APIs](https://olodocoder.hashnode.dev/javascript-web-apis-series-background-and-synchronization-apis) *(olodocoder.hashnode.dev · 2023-07-18T17:39:47)*
  > Now that the introduction and prerequisites are out of the way let&#x27;s explore the JavaScript Web APIs under the Background and Synchronization category in the following sections. The Background Fetch API is an experimental API that helps your app...
- [Download AI models with the Background Fetch API \| web.dev](https://web.dev/articles/background-fetch-ai) *(web.dev · 2025-02-20T00:00:00)*
  > The Background Fetch API &lt;strong&gt;requires your app to register a service worker&lt;/strong&gt;.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17645.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chromestatus Fri, 02 Oct 2026 09:53:21 -0700 Contact emails \[email&#16...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17683.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Mike Taylor Wed, 07 Oct 2026 10:58:58 -0700 LGTM3 On 10/7/26 1...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=2079467) *(bugzilla.mozilla.org)*
- [GitHub - WICG/background-fetch: API proposal for background downloading/uploading · GitHub](https://github.com/WICG/background-fetch) *(github.com)*
- [background-fetch/README.md at main · WICG/background-fetch](https://github.com/WICG/background-fetch/blob/main/README.md) *(github.com)*
- [Icon fetch does not use CORS · Issue #117 · WICG/background-fetch](https://github.com/WICG/background-fetch/issues/117) *(github.com)*
- [Restrict requests to http(s): scheme · Issue #44 · WICG/background-fetch](https://github.com/WICG/background-fetch/issues/44) *(github.com)*
- [BackgroundFetchManager: fetch() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchManager/fetch) *(developer.mozilla.org)*
- [Background Fetch API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Background_Fetch_API) *(developer.mozilla.org)*
- [BackgroundFetchManager - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchManager) *(developer.mozilla.org)*
- [BackgroundFetchRegistration](https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchRegistration) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 63 result(s) found across 11 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/6210300985606144" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/background-fetch" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CORS enforcement for Background Fetch" API` — *Core feature API query* (1 returned)
  - `"CORS enforcement for Background Fetch" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wicg.github" OR "fetch.spec" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CORS enforcement for Background Fetch" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CORS enforcement for Background Fetch" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `Background Fetch API CORS enforcement Chrome 157` — *Finds official release notes and announcements regarding CORS enforcement for Background Fetch in Chrome.* (8 returned)
  - `background fetch api cors bypass security fix wicg spec` — *Discovers discussions, chromium bug tracker references, and security context around fixing the CORS bypass.* (8 returned)
  - `"backgroundFetch.fetch" CORS example JavaScript WebIDL` — *Searches for actual code snippets, WebIDL usage, and JavaScript syntax for using Background Fetch.* (5 returned)
  - `how to use background fetch api tutorial javascript guide` — *Finds developer guides and tutorials explaining how to implement Background Fetch while adhering to CORS policies.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 4 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "background-fetch", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "background-fetch": Chrome 37.5% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6210300985606144)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6210300985606144)
- [Specification](https://wicg.github.io/background-fetch)
