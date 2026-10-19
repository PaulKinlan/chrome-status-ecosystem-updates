# WebTransport headers and responseHeaders

> **Report Week:** 2026-W43 | **Milestone:** Chrome 156 (first listed in Chrome 153) | **Category:** Enabled by default

## Overview

Adds support for passing custom HTTP request headers via WebTransportOptions and inspecting server response headers through the WebTransport instance. This allows web applications to supply metadata, authentication tokens, and custom parameters during the initial CONNECT handshake and access server-provided headers once the connection is established.

### Motivation

The WebTransport constructor requires support for custom HTTP request headers to address several technical limitations in authentication, routing, and capability negotiation.  Without custom headers, developers must pass authentication tokens in URL query strings, which exposes credentials in server logs and telemetry, or authenticate over an initial data stream, which adds an additional round trip before the connection is usable.  Furthermore, API gateways and reverse proxies typically inspect HTTP headers at the CONNECT layer. Without custom headers, these intermediaries cannot authorize or route WebTransport sessions via existing pipelines, forcing servers to accept connections before verifying credentials.  Finally, applications often need to negotiate capabilities, such as supported video codecs, during connection setup. Providing custom request headers in WebTransportOptions and a readable responseHeaders property on the WebTransport instance allows clients and servers to authenticate, route, and negotiate capabilities during the initial handshake. This eliminates the need for custom stream-level initialization protocols.

## Ecosystem Status

- **Momentum:** Emerging (footprint 130 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The WebTransport headers and responseHeaders feature adds native support for supplying custom HTTP request headers via WebTransportOptions and inspecting server response headers. This eliminates suboptimal workarounds like passing credentials in query strings or adding initial handshake streams, earning positive reception for streamlining API gateway authentication and proxy routing.

### Recommendations
- Actionable Advice: Web teams building real-time data applications can begin integrating custom headers for cleaner authentication flows, while ensuring fallback mechanisms or progressive enhancement are considered for browsers lacking immediate support.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 45% · Edge 45% · Firefox 61.5% · Safari 42.6%; experimental: Chrome 89.9% · Edge 86% · Firefox 67.5% · Safari 74.4%
- **Chrome usage:** 0.00013% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [google.com](https://issuetracker.google.com/issues/551879993) *(issuetracker.google.com)*
  > \*\*Milestones & Implementation:\*\* Led by Chromium engineers (such as Adam Rice), the entry outlines the roadmap for Chromium browsers
- [chromestatus.com](https://chromestatus.com/feature/6521719678042112) *(chromestatus.com)*
  > Protocol negotiation headers (such as \`wt-protocol\` / application protocol negotiation) were harmonized to integrate smoothly alongside custom application headers
- [\[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17342.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Chromestatus Wed, 02 Sep 2026 07:28:08 -0700 Contact emails \[email&#160;pr...
- [Re: \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17475.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; There&#x27;s an existing issue for WebTransport as a whole here: &gt;&gt;&gt; https://github.com/mozilla/standards-positions/issues/167 &gt;&gt;&gt; &gt;&gt;&gt; Because it is part of interop 2026 &gt;&gt;&gt; &...
- [WebTransport](https://w3c.github.io/webtransport) *(w3c.github.io · 2021-10-01T12:35:03)*
  > Set request’s method to &quot;CONNECT&quot;, and set the method’s associated :protocol pseudo-header to &quot;webtransport&quot;. &lt;strong&gt;Let headers be a new Headers object filled with options\[&quot;headers&quot;\]&lt;/strong&gt;.
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=Intent+to+Ship) *(groups.google.com)*
  > Intent to Ship: Resource Timing: Add spec-compliant Service Worker Router timing fields · archive this Intent? &gt;&gt; &gt;&gt; Best, &gt;&gt; &gt;&gt; Alex &gt;&gt; &gt;&gt; On Monday, June 15, 2026 at 11:37:54 AM UTC-7 Alex Russell wrote: &gt;&gt;...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > &lt;strong&gt;Adds support for passing custom HTTP request headers via WebTransportOptions and inspecting server response headers through the WebTransport instance&lt;/strong&gt;.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17342.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194104408506368`)*
  > \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Chromestatus Wed, 02 Sep 2026 07:28:08 -0700 Contact emails \[ema...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [Do we want to allow web developers to add headers of the CONNECT request? · Issue #263 · w3c/webtransport](https://github.com/w3c/webtransport/issues/263) *(github.com)*
- [Remove \[SameObject\] from responseHeaders · Issue #783 · w3c/webtransport](https://github.com/w3c/webtransport/issues/783) *(github.com)*
- [Exposing headers of the CONNECT response · Issue #264 · w3c/webtransport](https://github.com/w3c/webtransport/issues/264) *(github.com)*
- [Remove \[SameObject\] from responseHeaders attribute by jan-ivar · Pull Request #799 · w3c/webtransport](https://github.com/w3c/webtransport/pull/799) *(github.com)*
- [Constructor: validate options.headers (steps 30-32) next to the protocols validation · Issue #805 · w3c/webtransport](https://github.com/w3c/webtransport/issues/805) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 61 result(s) found across 11 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5194104408506368" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport headers and responseHeaders" API` — *Core feature API query* (2 returned)
  - `"WebTransport headers and responseHeaders" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"server-provided" OR "stream-level" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport headers and responseHeaders" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport headers and responseHeaders" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"new WebTransport" "headers" "responseHeaders" javascript` — *Finds real-world code snippets demonstrating how to initialize WebTransport with custom headers and inspect responseHeaders.* (2 returned)
  - `WebTransport custom headers authentication tutorial OR guide` — *Discovers developer tutorials and articles explaining how to authenticate WebTransport sessions via headers instead of query strings.* (8 returned)
  - `"WebTransport" ("headers" OR "responseHeaders") ("Intent to Ship" OR "Chrome")` — *Tracks browser vendor release notes, implementation status, and Intent-to-Ship announcements across Chromium and other engines.* (8 returned)
  - `site:github.com/w3c/webtransport ("headers" OR "responseHeaders") issue OR PR` — *Surfaces specification discussions, architectural trade-offs, and consensus-building around adding custom headers to the CONNECT handshake.* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 6 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 17 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 45% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5194104408506368)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5194104408506368)
- [Specification](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/551850821)
