# CORS enforcement for Background Fetch

> **Report Week:** 2026-W42 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Starting in Chrome 157, the Background Fetch API now enforces Cross-Origin Resource Sharing (CORS).  This update aligns Chromium's implementation with the intent of the \[Background Fetch spec\](https://wicg.github.io/background-fetch/). This ensures that Background Fetch requests are subject to the same security policies, such as Local Network Access checks.   This update prevents sites from bypassing CORS (and other security policy checks) by using Background Fetch instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as CORS (and CORP/COEP/DIP).  (crbug.com/515243254 is our meta bug tracking all of the different web platform security issues with Background Fetch.)

## Ecosystem Status

- **Momentum:** Emerging (footprint 150 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** The Background Fetch API remains an isolated Chromium feature with virtually no adoption momentum across other browser engines, having even faced past Chromium-internal deprecation proposals due to low overall usage. Chrome's enforcement of Cross-Origin Resource Sharing (CORS) and Local Network Access checks closes longstanding security loopholes where background requests bypassed standard fetch boundary checks. While this update brings Chromium closer to the original WICG specification intent, it reinforces security boundaries on an API that lacks cross-engine consensus.

### Recommendations
- Actionable Advice: Continue treating the Background Fetch API strictly as a progressive enhancement for Chromium-based browsers, always providing a standard Fetch or Streams fallback. Audit all endpoints targeted by background fetches immediately to ensure cross-origin CDN assets serve valid CORS response headers and comply with Local Network Access restrictions.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`background-fetch`](https://webstatus.dev/features/background-fetch), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `background-fetch` on [wpt.fyi](https://wpt.fyi/results?q=feature:background-fetch) (via webstatus.dev) — stable: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%; experimental: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%
- **Mozilla:** no position recorded ([standards position](https://github.com/mozilla/standards-positions/issues/30))
- **WebKit:** no position recorded ([standards position](https://github.com/WebKit/standards-positions/issues/149)) · concerns: `privacy`, `maintenance`

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/blog/background-fetch) *(developer.chrome.com)*
  > The Background Fetch API is designed to allow service workers to manage long-running background uploads and downloads (such as podcasts, movies, or game assets) even after the user closes the browser Under \*\*"CORS enforcement for Background Fetch"\*\* ...
- [chrome.com](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > Under \*\*"CORS enforcement for Background Fetch"\*\* (tracked under Chromium bug \[crbug.com/515243254\]), Chromium routes Background Fetch requests through standard network request machinery: \* \*\*CORS Compliance:\*\* Background Fetch requests to cross-orig...
- [chromestatus.com](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > \* \*\*Local Network Access (LNA) Protection:\*\* Requests to local or loopback servers are now blocked unless the origin has received explicit LNA user permission \* \*\*Elimination of Security Bypasses:\*\* Malicious sites can no longer bypass cross-origin r...
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > \* \*\*Chrome Beta & Stable Release Notes:\*\* Official release articles formally announce the enforcement alongside companion security updates (such as requiring Local Network Access permissions for background fetches targeting private IP ranges)
- [chromeenterprise.google](https://chromeenterprise.google/intl/en_CA/resources/release-notes) *(chromeenterprise.google)*
  > Chrome Enterprise Release Notes & Microsoft Edge \* \*\*Chrome Enterprise Roadmaps:\*\* Enterprise documentation highlights the enforcement rollout timeline (targeting broad general enforcement up through Chrome 157) and flags enterprise administration co...
- [tplant.com.au](https://gpedit.tplant.com.au/en-us/policy/chrome/RestrictBackgroundFetchFromServiceWorkerEnabled) *(gpedit.tplant.com.au)*
  > Chrome Enterprise Release Notes & Microsoft Edge \* \*\*Chrome Enterprise Roadmaps:\*\* Enterprise documentation highlights the enforcement rollout timeline (targeting broad general enforcement up through Chrome 157) and flags enterprise administration co...
- [codercops.com](https://blog.codercops.com/blog/chrome-154-websocket-options-iterator-includes-https-prompts-2026) *(blog.codercops.com)*
  > Developer Blogs & Ecosystem Coverage \* \*\*Codercops (\*"Chrome: What Changed and What to Test"\*):\*\* Developer analysis identified this security tightening as one of the few potentially \*\*breaking changes\*\* for existing web applications The blog highlig...
- [\[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17645.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chromestatus Fri, 02 Oct 2026 09:53:21 -0700 Contact emails \[email&#160;protecte...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17674.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Alex Russell Wed, 07 Oct 2026 08:31:37 -0700 LGTM2. Thanks for getting u...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17683.html) *(mail-archive.com)*
  > On Wednesday, October 7, 2026 at .../background-fetch &lt;https://wicg.github.io/background-fetch&gt; \*Summary\* &lt;strong&gt;Starting in Chrome 157, the Background Fetch API now enforces Cross-Origin Resource Sharing (CORS).&lt;/strong&gt;...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > Starting in Chrome 157, &lt;strong&gt;the Background Fetch API now enforces Cross-Origin Resource Sharing (CORS).&lt;/strong&gt; This update aligns Chromium&#x27;s implementation with the intent of the Background Fetch spec.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17645.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chromestatus Fri, 02 Oct 2026 09:53:21 -0700 Contact emails \[email&#16...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17674.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Alex Russell Wed, 07 Oct 2026 08:31:37 -0700 LGTM2. Thanks for...

## 📚 Platform Documentation & Specifications

- [BackgroundFetchManager: fetch() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchManager/fetch) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/ja/docs/Web/API/BackgroundFetchRegistration/failureReason) *(developer.mozilla.org)*
- [Address various Background Fetch CORS issues by chromium-wpt-export-bot · Pull Request #63356 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63356) *(github.com)*
- [Enforce CORS in Background Fetch by chromium-wpt-export-bot · Pull Request #63357 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63357) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 68 result(s) found across 12 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/6210300985606144" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/background-fetch" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CORS enforcement for Background Fetch" API` — *Core feature API query* (2 returned)
  - `"CORS enforcement for Background Fetch" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wicg.github" OR "fetch.spec" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CORS enforcement for Background Fetch" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CORS enforcement for Background Fetch" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Background Fetch" "CORS" ("Chrome 157" OR "Chromium") OR "Intent to Ship"` — *Finds browser release notes, Chromium intent-to-ship threads, and platform announcements regarding CORS enforcement for Background Fetch.* (8 returned)
  - `"Background Fetch" ("CORS" OR "Local Network Access") bypass security OR vulnerability` — *Surfaces community and security researcher discussions examining the Background Fetch CORS bypass issue and security implications.* (4 returned)
  - `"backgroundFetch.fetch" CORS OR "cross-origin" guide OR tutorial OR "ServiceWorker"` — *Discovers web developer guides and tutorials detailing how to handle cross-origin assets and CORS configuration when using Background Fetch.* (8 returned)
  - `"registration.backgroundFetch.fetch" ("mode: 'cors'" OR "CORS") example javascript` — *Retrieves real-world JavaScript code examples and API implementations of Background Fetch invoking cross-origin requests.* (8 returned)
  - `site:github.com/WICG/background-fetch ("CORS" OR "Local Network Access" OR "CORP")` — *Tracks specification updates, issue discussions, and pull requests defining CORS and network access enforcement rules in the WICG repository.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "background-fetch", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "background-fetch": Chrome 37.5% passing (stable)*
- **Sources cited by the AI synthesis:** 5 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 11 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6210300985606144)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6210300985606144)
- [Specification](https://wicg.github.io/background-fetch)
