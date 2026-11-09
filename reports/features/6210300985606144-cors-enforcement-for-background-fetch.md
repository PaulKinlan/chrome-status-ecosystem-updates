# CORS enforcement for Background Fetch

> **Report Week:** 2026-W46 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Starting in Chrome 157, the Background Fetch API now enforces Cross-Origin Resource Sharing (CORS).  This update aligns Chromium's implementation with the intent of the \[Background Fetch spec\](https://wicg.github.io/background-fetch/). This ensures that Background Fetch requests are subject to the same security policies as regular Fetch requests, such as Local Network Access checks.   This update prevents sites from bypassing CORS (and other security policy checks) by using Background Fetch instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as CORS (and CORP/COEP/DIP).  (crbug.com/515243254 is our meta bug tracking all of the different web platform security issues with Background Fetch.)

## Ecosystem Status

- **Momentum:** Quiet (-30 points since 2026-10-12; footprint 120 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Starting in Chrome and Edge 157, Chromium enforces Cross-Origin Resource Sharing (CORS) alongside related boundaries like Local Network Access on the Background Fetch API, closing an attack vector where downloads bypassed standard fetch security policies. While this aligns the implementation with the WICG specification, Background Fetch remains confined to Chromium with no uptake in Gecko or WebKit. The change solidifies Chromium's decision to maintain and secure the API rather than deprecating it after earlier removal discussions.

### Recommendations
- Actionable Advice: Audit all service worker background fetch endpoints immediately to verify that external CDNs return correct CORS headers, as non-compliant cross-origin requests will now abort in Chrome and Edge 157+. Continue treating Background Fetch strictly as a progressive enhancement gated by feature checks, pairing it with standard streaming fetch fallbacks for Safari and Firefox.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`background-fetch`](https://webstatus.dev/features/background-fetch), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `background-fetch` on [wpt.fyi](https://wpt.fyi/results?q=feature:background-fetch) (via webstatus.dev) — stable: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%; experimental: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%
- **Mozilla:** no position recorded ([standards position](https://github.com/mozilla/standards-positions/issues/30))
- **WebKit:** no position recorded ([standards position](https://github.com/WebKit/standards-positions/issues/149)) · concerns: `privacy`, `maintenance`

## 📰 Ecosystem Blogs & Articles

- [sentinelone.com](https://www.sentinelone.com/vulnerability-database/cve-2026-1504) *(sentinelone.com)*
  > \*\*Security Risk\*\*: The meta-bug (tracked under \`crbug.com/515243254\`) and related CVE filings (such as CVE-2026-1504) highlighted information disclosure risks associated with the legacy implementation \*\*Attack Vector Blocked\*\*: Before this update, an...
- [gigazine.net](https://gigazine.net/gsc_news/en/20261104-google-chrome-157) *(gigazine.net)*
  > \*\*Attack Vector Blocked\*\*: Before this update, an attacker could abuse \`Background Fetch\` from a Service Worker to probe local network endpoints or exfiltrate cross-origin data from authenticated user sessions without triggering CORS preflights or ch...
- [\[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17645.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chromestatus Fri, 02 Oct 2026 09:53:21 -0700 Contact emails \[email&#160;protecte...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17672.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chris Harrelson Wed, 07 Oct 2026 08:25:59 -0700 LGTM1 On Fri, Oct 2, 202...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17683.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Mike Taylor Wed, 07 Oct 2026 10:58:58 -0700 LGTM3 On 10/7/26 11:31 a.m.,...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17674.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Alex Russell Wed, 07 Oct 2026 08:31:37 -0700 LGTM2. Thanks for getting u...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com · 2026-11-02T20:19:23)*
  > &lt;strong&gt;Starting in Chrome 157, the Background Fetch API now enforces Cross-Origin Resource Sharing (CORS).&lt;/strong&gt; This update aligns Chromium&#x27;s implementation with the intent of the Background Fetch spec.
- [Chrome 154 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com · 2026-09-02T00:00:00)*
  > &lt;strong&gt;The Background Fetch API now enforces Cross-Origin Resource Sharing (CORS).&lt;/strong&gt;
- [Chrome 154  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > &lt;strong&gt;The Background Fetch API enforces Cross-Origin Resource Sharing (CORS).&lt;/strong&gt;
- [Chrome Release 157](https://chromestatuslite.com/?version=157) *(chromestatuslite.com)*
  > Starting in Chrome 157, &lt;strong&gt;the Background Fetch API now enforces Cross-Origin Resource Sharing (CORS). This update aligns Chromium&#x27;s implementation with the intent of the \[Background Fetch spec\](https://wicg.github.io/background-fetch/).&lt;/s...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17645.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chromestatus Fri, 02 Oct 2026 09:53:21 -0700 Contact emails \[email&#16...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17672.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chris Harrelson Wed, 07 Oct 2026 08:25:59 -0700 LGTM1 On Fri, ...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17683.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Mike Taylor Wed, 07 Oct 2026 10:58:58 -0700 LGTM3 On 10/7/26 1...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17674.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Alex Russell Wed, 07 Oct 2026 08:31:37 -0700 LGTM2. Thanks for...

## 📚 Platform Documentation & Specifications

- [Enforce CORS in Background Fetch by chromium-wpt-export-bot · Pull Request #63357 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/63357) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/154.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/154.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 64 result(s) found across 11 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/6210300985606144" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"wicg.github.io/background-fetch" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CORS enforcement for Background Fetch" API` — *Core feature API query* (8 returned)
  - `"CORS enforcement for Background Fetch" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wicg.github" OR "fetch.spec" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CORS enforcement for Background Fetch" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CORS enforcement for Background Fetch" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Background Fetch" ("CORS" OR "cross-origin") (guide OR tutorial OR migration)` — *Discovers developer guides, tutorials, and migration articles discussing CORS handling in the Background Fetch API.* (8 returned)
  - `"registration.backgroundFetch.fetch" (mode OR headers OR Access-Control-Allow-Origin)` — *Finds practical JavaScript code examples and API usage showing Background Fetch invocations with CORS configurations.* (8 returned)
  - `"Chrome 157" "Background Fetch" ("CORS" OR "enforcement" OR "Intent to Ship")` — *Tracks platform announcements, Chrome release notes, and official intent-to-ship threads regarding Background Fetch security alignment.* (8 returned)
  - `("Background Fetch" OR "wicg/background-fetch") ("CORS" OR "bypass" OR "Local Network Access") (site:github.com OR site:issues.chromium.org)` — *Surfaces standards issues, Chromium bug tracking, and developer discussions regarding CORS enforcement and security bypass mitigations.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 4 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "background-fetch", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "background-fetch": Chrome 37.5% passing (stable)*
- **Sources cited by the AI synthesis:** 4 result(s) found — **1 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6210300985606144)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6210300985606144)
- [Specification](https://wicg.github.io/background-fetch)
