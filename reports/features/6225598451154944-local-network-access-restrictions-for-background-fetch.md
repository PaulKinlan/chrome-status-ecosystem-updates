# Local Network Access restrictions for Background Fetch

> **Report Week:** 2026-W42 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Background Fetch requests now require that the service worker's origin has the necessary Local Network Access (LNA) permission to send requests to local or loopback servers.  This aligns Chromium's implementation with the intent of the Background Fetch spec, which states that such requests go through the Fetch spec and have the same security policies applied to them including, in this case, LNA checks. This prevents sites from bypassing LNA checks by using \[Background Fetch spec\](https://wicg.github.io/background-fetch/) instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).  For enterprises, you can use existing LNA enterprise policies in the same way you previously would have for regular Fetch API requests from service workers: - \[LocalNetworkAccessRestrictionsTemporaryOptOut\](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut) - \[LocalNetworkAccessAllowedForUrls\](https://chromeenterprise.google/policies/#LocalNetworkAccessAllowedForUrls) - \[LoopbackNetworkAllowedForUrls\](https://chromeenterprise.google/policies/#LoopbackNetworkAllowedForUrls) - \[LocalNetworkAccessPermissionsPolicyDefaultEnabled\](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled) - \[LocalNetworkAccessIpAddressSpaceOverrides\](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides)).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as Local Network Access checks.

## Ecosystem Status

- **Momentum:** Emerging (footprint 90 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Neutral
- **Executive Take:** Shipping in Chrome 154, this update closes a security loophole by subjecting Background Fetch requests to standard Local Network Access (LNA) permissions and CORS checks. Background Fetch itself remains primarily a Chromium feature after earlier Blink deprecation proposals were dropped in favor of tightening its security pipeline to match regular Fetch semantics. Cross-engine availability remains limited, meaning the operational impact is focused largely on enterprise web applications and local network tools running in Chromium-based browsers.

### Recommendations
- Actionable Advice: Audit existing service workers to confirm that any Background Fetch tasks targeting local or loopback IPs hold explicit local network permissions or configure corresponding enterprise policy overrides. Maintain standard Fetch fallbacks wrapped in feature detection, as Background Fetch is not universally supported across major browser engines.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @christhompson: "We aren't sure about venue yet but it has been on my mind some. Some parts will just be merged into the various relevant specifications, but there def..."
- Standards Activity (Mozilla): Latest discussion from @dveditz: "We're presumably "positive" on this since we've implemented most of it and enabled it on Nightly. What are the formal steps needed at this point?..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Request for Position: Local Network Access](https://github.com/WebKit/standards-positions/issues/520) [open]
- **Mozilla:** [Local Network Access](https://github.com/mozilla/standards-positions/issues/1260) [open]

## Web-features Group

*group-level data: web-features [`local-network-access`](https://webstatus.dev/features/local-network-access), shared with 7 other ChromeStatus features*

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

## 📰 Ecosystem Blogs & Articles

- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > x.x\`) without user consent or proper permissions Chrome and Chromium-based browsers now require the service worker’s origin to hold explicit Local Network Access permissions before it can trigger Background Fetch operations targeting private address ...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com)*
  > Cross-Browser & Standards Tracking \* \*\*Microsoft Edge Developer Documentation:\*\* \* \*\*Entry:\*\* \*Microsoft Edge Web Platform Release Notes\* \* \*\*Highlights:\*\* Synchronized with the Chromium engine rollout, Edge lists the LNA enforcement and CORS restric...
- [\[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html) *(mail-archive.com)*
  > &lt;strong&gt;We considered completely removing the ability for Background Fetch to make local network requests&lt;/strong&gt;, which would be more disruptive. Treating Background Fetch requests the same as fetch() calls from a service worker context was deemed ...
- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17209.html) *(mail-archive.com)*
  > &lt;strong&gt;We considered completely removing the ability for Background Fetch to make local network requests&lt;/strong&gt;, which would be more disruptive. Treating Background Fetch requests the same as fetch() calls from a service worker context was deemed ...
- [\[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)*
  > We considered &gt; &lt;strong&gt;completely removing the ability for Background Fetch to make local network &gt; requests&lt;/strong&gt;, which would be more disruptive. Treating Background Fetch &gt; requests the same as fetch() calls from a service worker cont...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > This &lt;strong&gt;prevents sites from bypassing LNA checks by using Background Fetch spec instead of regular Fetch&lt;/strong&gt;. For enterprises, you can use existing LNA enterprise policies in the same way you previously would have for regular Fetch API requ...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 58 result(s) found across 11 planned queries — **5 verified relevant**
  - `"chromestatus.com/feature/6225598451154944" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"wicg.github.io/background-fetch" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" API` — *Core feature API query* (3 returned)
  - `"Local Network Access restrictions for Background Fetch" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wicg.github" OR "fetch.spec" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (2 returned)
  - `"Background Fetch" "Local Network Access" OR "Private Network Access" service worker` — *Guides and developer articles explaining how Local Network Access restrictions apply to Background Fetch in Service Workers.* (8 returned)
  - `"backgroundFetch.fetch" "Local-Network-Access" OR "target-ip-address-space" OR loopback` — *Code examples and syntax patterns for Background Fetch requests interacting with local or loopback servers.* (8 returned)
  - `"LocalNetworkAccessRestrictionsTemporaryOptOut" OR "LocalNetworkAccessAllowedForUrls" "background fetch"` — *Enterprise policy guidance and adoption reports detailing configuration overrides for Background Fetch LNA restrictions.* (8 returned)
  - `"Background Fetch" "Local Network Access" (site:issues.chromium.org OR site:groups.google.com/a/chromium.org)` — *Chromium issue tracker discussions and blink-dev intents debating the security fix for Background Fetch LNA bypasses.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 1 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "local-network-access", shared with 7 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "local-network-access": no stable pass rate for Chrome yet*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 8 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6225598451154944)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6225598451154944)
- [Specification](https://wicg.github.io/background-fetch)
- [Chromium Tracking Bug](https://crbug.com/455486148)
