# Local Network Access restrictions for Background Fetch

> **Report Week:** 2026-W43 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Background Fetch requests now require that the service worker's origin has the necessary Local Network Access (LNA) permission to send requests to local or loopback servers.  This aligns Chromium's implementation with the intent of the Background Fetch spec, which states that such requests go through the Fetch spec and have the same security policies applied to them including, in this case, LNA checks. This prevents sites from bypassing LNA checks by using \[Background Fetch spec\](https://wicg.github.io/background-fetch/) instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).  For enterprises, you can use existing LNA enterprise policies in the same way you previously would have for regular Fetch API requests from service workers: - \[LocalNetworkAccessRestrictionsTemporaryOptOut\](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut) - \[LocalNetworkAccessAllowedForUrls\](https://chromeenterprise.google/policies/#LocalNetworkAccessAllowedForUrls) - \[LoopbackNetworkAllowedForUrls\](https://chromeenterprise.google/policies/#LoopbackNetworkAllowedForUrls) - \[LocalNetworkAccessPermissionsPolicyDefaultEnabled\](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled) - \[LocalNetworkAccessIpAddressSpaceOverrides\](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides)).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as Local Network Access checks.

## Ecosystem Status

- **Momentum:** Emerging (footprint 130 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Shipped enabled by default in Chromium 154, this feature closes a long-standing security bypass by ensuring that Background Fetch requests undergo the same Local Network Access (LNA) and CORS enforcement as standard fetch calls. Because Chromium historically routed Background Fetch through internal browser download pipelines, origins could inadvertently query local and loopback addresses without user permission. The update aligns Chromium's implementation with the Background Fetch specification, ensuring uniform security enforcement across foreground and background contexts.

### Recommendations
- Actionable Advice: Audit service worker background fetches targeting private IP ranges, localhost, or intranet endpoints to verify that the requesting origin requests and obtains explicit LNA permissions in secure contexts. For internal enterprise applications that cannot immediately refactor local communication flows, configure administrative policies like LocalNetworkAccessAllowedForUrls or LoopbackNetworkAllowedForUrls to prevent breakage.
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

- [appspot.com](https://cr-status.appspot.com/feature/6210300985606144) *(cr-status.appspot.com)*
  > The \*\*Local Network Access (LNA) restrictions for Background Fetch\*\* feature closes a long-standing security bypass in Chromium-based browsers \*\*The Problem:\*\* Previously, Chromium handled Background Fetch requests via specialized navigation and down...
- [chromeenterprise.google](https://chromeenterprise.google/resources/release-notes) *(chromeenterprise.google)*
  > The release documentation highlights that routing Background Fetch requests through standard fetch controls ensures that both CORS and LNA policies are enforced identically across foreground and background contexts
- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17224.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Yoav Weiss (@Shopify) Wed, 19 ...
- [\[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch Chromestatus Fri, 14 Aug 2026 16:10:09 -0700 C...
- [\[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Alex Russell Mon, 17 Aug 2026 11:49:38...
- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17209.html) *(mail-archive.com)*
  > &lt;strong&gt;We considered completely removing the ability for Background Fetch to make local network requests&lt;/strong&gt;, which would be more disruptive. Treating Background Fetch requests the same as fetch() calls from a service worker context was deemed ...
- [\[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17645.html) *(mail-archive.com)*
  > Explainer No information provided ... Fetch spec\](https://wicg.github.io/background-fetch/). This &lt;strong&gt;ensures that Background Fetch requests are subject to the same security policies, such as Local Network Access checks&lt;/strong&gt;....
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17683.html) *(mail-archive.com)*
  > This update aligns Chromium&#x27;s ...und-fetch/ &lt;https://wicg.github.io/background-fetch/&gt;). This &lt;strong&gt;ensures that Background Fetch requests are subject to the same security policies, such as Local Network Access checks&lt;/strong&gt;....

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17224.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Yoav Weiss (@Shopify...
- [\[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > \[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch Chromestatus Fri, 14 Aug 2026 16:10:...
- [\[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Alex Russell Mon, 17 Aug 202...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/security/local-network-access.md) *(github.com)*
- [Local Network Access checks do not run on GTK and WPE by igower · Pull Request #76721 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/76721) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 11 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/6225598451154944" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"wicg.github.io/background-fetch" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" API` — *Core feature API query* (3 returned)
  - `"Local Network Access restrictions for Background Fetch" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wicg.github" OR "fetch.spec" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"Local Network Access" "Background Fetch" service worker guide OR tutorial` — *Searches for developer guides and articles explaining how Local Network Access restrictions affect Background Fetch in service workers.* (0 returned)
  - `"backgroundFetch.fetch" ("Local Network Access" OR "private network access" OR LNA)` — *Finds technical code examples and API usage showing Background Fetch interacting with local or loopback address spaces.* (0 returned)
  - `"Local Network Access" "Background Fetch" ("Intent to Ship" OR Chrome OR Chromium)` — *Tracks official browser vendor announcements, release notes, and rollout schedules for LNA enforcement on Background Fetch.* (5 returned)
  - `"Background Fetch" ("Local Network Access" OR LocalNetworkAccess) (blocked OR error OR policy)` — *Discovers community discussions, bug reports, and troubleshooting threads concerning blocked requests or enterprise policy handling for local network fetch requests.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 7 result(s) found — **0 verified relevant**
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
