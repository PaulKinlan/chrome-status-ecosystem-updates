# Local Network Access restrictions for Background Fetch

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Background Fetch requests will soon require that the service worker's origin has the necessary Local Network Access (LNA) permission in order to send requests to local or loopback servers.

This aligns Chromium's implementation with the intent of the Background Fetch spec, which states that such requests go through the Fetch spec and have the same security policies applied to them, in this case LNA checks. This prevents sites from bypassing LNA checks by using [Background Fetch spec](https://wicg.github.io/background-fetch/) instead of regular [Fetch](https://fetch.spec.whatwg.org/).

For enterprises, you can use existing LNA enterprise policies in the same way you previously would have for regular Fetch API requests from service workers:
- [LocalNetworkAccessRestrictionsTemporaryOptOut](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut)
- [LocalNetworkAccessAllowedForUrls](https://chromeenterprise.google/policies/#LocalNetworkAccessAllowedForUrls)
- [LoopbackNetworkAllowedForUrls](https://chromeenterprise.google/policies/#LoopbackNetworkAllowedForUrls)
- [LocalNetworkAccessPermissionsPolicyDefaultEnabled](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled)
- [LocalNetworkAccessIpAddressSpaceOverrides](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides)).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as Local Network Access checks.

## Ecosystem Status

- **Momentum:** Emerging (30 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chromium 154 enables Local Network Access (LNA) restrictions for Background Fetch by default, closing a loophole where background requests could bypass local/loopback network checks. This change routes Background Fetch through standard Fetch specification security mechanics rather than legacy download pathways. Given the relatively low overall usage of Background Fetch, the ecosystem impact is modest but provides essential security hardening.

### Recommendations
- Actionable Advice: Audit service workers that utilize Background Fetch to target local or loopback servers, ensuring the origin has acquired the necessary LNA permissions. Enterprise teams maintaining internal web tools should configure LNA enterprise policies like `LocalNetworkAccessAllowedForUrls` if legacy local background traffic is required.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @christhompson: "We aren't sure about venue yet but it has been on my mind some. Some parts will just be merged into the various relevant specifications, but there def..."
- Standards Activity (Mozilla): Latest discussion from @dveditz: "We're presumably "positive" on this since we've implemented most of it and enabled it on Nightly. What are the formal steps needed at this point?..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Request for Position: Local Network Access](https://github.com/WebKit/standards-positions/issues/520) [open]
- **Mozilla:** [Local Network Access](https://github.com/mozilla/standards-positions/issues/1260) [open]

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Alex Russell Mon, 17 Aug 2026 11:49:38...
- [[blink-dev] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Local Network Access restrictions for Background Fetch Chromestatus Fri, 14 Aug 2026 16:10:09 -0700 C...
- [Re: [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17209.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Mike Taylor Tue, 18 Aug 2026 0...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 3 result(s) found (query: `""Local Network Access restrictions for Background Fetch" API"`) — **3 verified relevant**
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found (query: `"Local Network Access restrictions for Background Fetch"`) — **3 verified relevant**
- **Hacker News Algolia:** 0 result(s) found (query: `"Local Network Access restrictions for Background Fetch"`) — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 2 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 18 item(s) inspected

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
