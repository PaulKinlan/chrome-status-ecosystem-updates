# CORS enforcement for Background Fetch

> **Report Week:** 2026-W44 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Starting in Chrome 157, the Background Fetch API now enforces Cross-Origin Resource Sharing (CORS).  This update aligns Chromium's implementation with the intent of the \[Background Fetch spec\](https://wicg.github.io/background-fetch/). This ensures that Background Fetch requests are subject to the same security policies as regular Fetch requests, such as Local Network Access checks.   This update prevents sites from bypassing CORS (and other security policy checks) by using Background Fetch instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as CORS (and CORP/COEP/DIP).  (crbug.com/515243254 is our meta bug tracking all of the different web platform security issues with Background Fetch.)

## Ecosystem Status

- **Momentum:** Emerging (footprint 160 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Background Fetch remains a Chromium-exclusive capability with limited ecosystem availability, having previously avoided deprecation in Chromium despite low web-wide adoption. The rollout of strict Cross-Origin Resource Sharing (CORS) enforcement in Chrome aligns Chromium with the WICG Background Fetch specification, closing security loopholes where background requests bypassed CORS, Local Network Access (LNA), and CORP/COEP policies. Non-Chromium engines continue to show no intention of implementing the broader specification, keeping the API confined to Chrome and Edge.

### Recommendations
- Actionable Advice: Teams utilizing Background Fetch must immediately verify that all cross-origin endpoints return valid Access-Control-Allow-Origin headers and satisfy Local Network Access permissions to avoid 'fetch-error' failures. Background Fetch should strictly be treated as a progressive enhancement behind feature detection, with standard Fetch fallbacks for Safari and Firefox users.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`background-fetch`](https://webstatus.dev/features/background-fetch), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `background-fetch` on [wpt.fyi](https://wpt.fyi/results?q=feature:background-fetch) (via webstatus.dev) — stable: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%; experimental: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%
- **Mozilla:** no position recorded ([standards position](https://github.com/mozilla/standards-positions/issues/30))
- **WebKit:** no position recorded ([standards position](https://github.com/WebKit/standards-positions/issues/149)) · concerns: `privacy`, `maintenance`

## 📰 Ecosystem Blogs & Articles

- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/resources/release-notes) *(chromeenterprise.google)*
  > The release notes warn developers that Background Fetch requests are now subject to the exact same origin checks and preflight rules as regular \`fetch()\` calls
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > The release notes warn developers that Background Fetch requests are now subject to the exact same origin checks and preflight rules as regular \`fetch()\` calls
- [chrome.com](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > It specifically highlights that service worker origins attempting to download resources from private or local IP ranges must also pass Local Network Access permissions \*\*Handle Local Network Access (LNA)\*\*: If fetching assets from intranet or private...
- [sentinelone.com](https://www.sentinelone.com/vulnerability-database/cve-2026-1504) *(sentinelone.com)*
  > Security researchers (such as David Bors at Snyk) and security advisories reported vulnerabilities where Background Fetch bypassed cross-origin data boundaries and accepted malformed headers (e.g., improper casing handling in \`Access-Control-Allow-Cr...
- [chromium.org](https://issues.chromium.org/issues/524406292) *(issues.chromium.org)*
  > Security researchers (such as David Bors at Snyk) and security advisories reported vulnerabilities where Background Fetch bypassed cross-origin data boundaries and accepted malformed headers (e.g., improper casing handling in \`Access-Control-Allow-Cr...
- [codercops.com](https://blog.codercops.com/blog/chrome-154-websocket-options-iterator-includes-https-prompts-2026) *(blog.codercops.com)*
  > Developer analysis blogs (such as \*Codercops: Chrome for Developers — What Changed and What to Test\*) identified the Background Fetch CORS update as one of the few potentially breaking changes for production apps Legacy PWAs that initiated large back...
- [appspot.com](https://img120-dot-cr-status.appspot.com/feature/6210300985606144/activity) *(img120-dot-cr-status.appspot.com)*
  > Enforcing standard CORS brings consistency across the codebase, ensuring that endpoints configured to work with normal \`fetch()\` will work seamlessly with Background Fetch without special exemptions \*\*Verify CORS Headers on CDNs/Media Servers\*\*: Ensu...
- [\[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17645.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chromestatus Fri, 02 Oct 2026 09:53:21 -0700 Contact emails \[email&#160;protecte...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17683.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Mike Taylor Wed, 07 Oct 2026 10:58:58 -0700 LGTM3 On 10/7/26 11:31 a.m.,...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > This update aligns Chromium&#x27;s implementation with the intent of the Background Fetch spec. This ensures that &lt;strong&gt;Background Fetch requests are subject to the same security policies as regular Fetch requests, such as Local Network Access chec...
- [Chrome Release 157](https://chromestatuslite.com/?version=157) *(chromestatuslite.com)*
  > Starting in Chrome 157, &lt;strong&gt;the Background Fetch API now enforces Cross-Origin Resource Sharing (CORS). This update aligns Chromium&#x27;s implementation with the intent of the \[Background Fetch spec\](https://wicg.github.io/background-fetch/). Th...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17674.html) *(mail-archive.com)*
  > This update prevents sites from ...s.dev/features/background-fetch&gt; &gt;&gt; &gt;&gt; \*Motivation\* &gt;&gt; &lt;strong&gt;This fixes a security issue where Background Fetch unintentionally &gt;&gt; bypasses security policies such as CORS (and CORP/COEP/...
- [CORS設定の見直し｜Background FetchのChrome 157変更](https://techinnovateit.com/background-fetch-cors-chrome-157) *(techinnovateit.com)*
  > CORS設定の見直し｜Background FetchのChrome 157変更 本文へ移動 Tech Innovate IT 記事を検索 ゲーム 記事を検索 Menu AI・セキュリティ・Web開発の最新テック情報をわかりやすく解説するブログ。トレンド技術の仕組みから実務活用まで、エンジニア目線で徹底的に調べた記事を無料で公開しています。 コピーURL OK Err Web開発・DevTools Chrome 157でBackground FetchにCORS適用、移行前の確認点 AD 202...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17645.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chromestatus Fri, 02 Oct 2026 09:53:21 -0700 Contact emails \[email&#16...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17683.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Mike Taylor Wed, 07 Oct 2026 10:58:58 -0700 LGTM3 On 10/7/26 1...

## 📚 Platform Documentation & Specifications

- [BackgroundFetchManager: fetch() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchManager/fetch) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchRegistration/failureReason) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/ja/docs/Web/API/BackgroundFetchRegistration/failureReason) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 12 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/6210300985606144" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/background-fetch" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CORS enforcement for Background Fetch" API` — *Core feature API query* (2 returned)
  - `"CORS enforcement for Background Fetch" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wicg.github" OR "fetch.spec" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CORS enforcement for Background Fetch" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CORS enforcement for Background Fetch" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Background Fetch" CORS "Access-Control-Allow-Origin" tutorial OR guide` — *Finds developer guides and articles explaining how to properly configure cross-origin headers for Background Fetch.* (0 returned)
  - `"registration.backgroundFetch.fetch" mode "cors" github OR example` — *Identifies real-world JavaScript code snippets and API calls configuring request modes within Background Fetch.* (8 returned)
  - `"Chrome 157" "Background Fetch" (CORS OR "Local Network Access" OR security)` — *Searches for release announcements, platform status notes, and Chrome 157 features detailing the security enforcement.* (8 returned)
  - `site:github.com/WICG/background-fetch (CORS OR "cross-origin" OR "security policy")` — *Explores WICG specification issues and consensus discussions regarding CORS enforcement and security bypasses in Background Fetch.* (0 returned)
  - `"Background Fetch" bypass CORS OR CORP OR COEP` — *Finds security research, exploit discussions, and developer commentary on using Background Fetch to circumvent web security boundaries.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "background-fetch", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "background-fetch": Chrome 37.5% passing (stable)*
- **Sources cited by the AI synthesis:** 6 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 12 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6210300985606144)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6210300985606144)
- [Specification](https://wicg.github.io/background-fetch)
