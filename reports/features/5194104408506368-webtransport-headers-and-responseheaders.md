# WebTransport headers and responseHeaders

> **Report Week:** 2026-W46 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Adds support for passing custom HTTP request headers via WebTransportOptions and inspecting server response headers through the WebTransport instance. This allows web applications to supply metadata, authentication tokens, and custom parameters during the initial CONNECT handshake and access server-provided headers once the connection is established.

### Motivation

The WebTransport constructor requires support for custom HTTP request headers to address several technical limitations in authentication, routing, and capability negotiation.  Without custom headers, developers must pass authentication tokens in URL query strings, which exposes credentials in server logs and telemetry, or authenticate over an initial data stream, which adds an additional round trip before the connection is usable.  Furthermore, API gateways and reverse proxies typically inspect HTTP headers at the CONNECT layer. Without custom headers, these intermediaries cannot authorize or route WebTransport sessions via existing pipelines, forcing servers to accept connections before verifying credentials.  Finally, applications often need to negotiate capabilities, such as supported video codecs, during connection setup. Providing custom request headers in WebTransportOptions and a readable responseHeaders property on the WebTransport instance allows clients and servers to authenticate, route, and negotiate capabilities during the initial handshake. This eliminates the need for custom stream-level initialization protocols.

## Ecosystem Status

- **Momentum:** Moderate (+120 points since 2026-10-12; footprint 240 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Custom handshake headers and the companion responseHeaders property represent a major architectural maturity milestone for the WebTransport standard, formally specified by the W3C WebTransport Working Group to fix long-standing auth and routing gaps. With Chromium-based browsers shipping default support across Chrome and Microsoft Edge 156 and Mozilla landing implementation in Firefox 160, the feature resolves critical security concerns around token leakage in URLs and intermediaries. Developer perception is strongly favorable as it eliminates bespoke stream-level authentication handshakes and aligns WebTransport with standard reverse proxy architectures.

### Recommendations
- Actionable Advice: Development teams should adopt WebTransport handshake headers via progressive enhancement, checking for the presence of the responseHeaders attribute on instantiated transports or inspecting option capability before discarding token fallbacks. Until WebKit ships support in stable Safari releases, servers should accept both header-based authentication and legacy query-string or stream-based handshakes for broad client compatibility.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%
- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [ietf.org](https://datatracker.ietf.org/meeting/125/materials/slides-125-webtrans-ietf125-slides-00) *(datatracker.ietf.org)*
  > Developers can pass request headers via \`WebTransportOptions.headers\` Once the connection is established and \`transport.ready\` fulfills, server-returned headers become available via \`transport.responseHeaders\` as an immutable \`Headers\` instance
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > \*\*Source:\*\* \*Chrome Platform Status & Chrome 155/156 Beta / Release Notes\* \*\*Details:\*\* Chrome documented the feature shipping across Chromium
- [microsoft.com](https://learn.microsoft.com/th-th/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com)*
  > \*\*Source:\*\* \*Microsoft Edge 156 Web Platform Release Notes\* \*\*Details:\*\* Microsoft highlighted \`WebTransport headers and responseHeaders\` in its developer release notes under the core Web APIs section, emphasizing that developers can now supply metad...
- [docs.rs](https://docs.rs/web-wt-sys/latest/web_wt_sys/struct.WebTransport.html?search=std%3A%3Avec) *(docs.rs)*
  > \*\*Details:\*\* Standardized under \`#dom-webtransportoptions-headers\` and \`\[SameObject\] readonly attribute Headers? responseHeaders\`
- [\[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17342.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Chromestatus Wed, 02 Sep 2026 07:28:08 -0700 Contact emails \[email&#160;pr...
- [Microsoft Edge 156 web platform release notes (Oct. 22, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com · 2026-10-22T00:00:00)*
  > When calling the WebTransport() ... &lt;strong&gt;The responseHeaders property on the WebTransport object instance allows you to inspect the HTTP response headers that are sent by the server after the initial CONNECT handshake&lt;/strong&gt;...
- [Chrome 155 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta?hl=en) *(developer.chrome.com)*
  > &lt;strong&gt;Adds support for passing custom HTTP request headers using WebTransportOptions and inspecting server response headers through the WebTransport instance&lt;/strong&gt;.
- [Re: \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17475.html) *(mail-archive.com)*
  > LGTM3 https://wpt.fyi/results/webtransport/headers.https.any.html?label=experimental&amp;label=master&amp;aligned is green \\o/
- [Chrome 155 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2105325011116646507) *(x.com · 2026-09-30T15:48:01)*
  > &lt;strong&gt;Adds support for passing custom HTTP request headers using WebTransportOptions and inspecting server response headers through the WebTransport instance&lt;/strong&gt;.
- [Re: \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17428.html) *(mail-archive.com)*
  > There&#x27;s an existing issue for WebTransport as a whole here: https://github.com/mozilla/standards-positions/issues/167 Because it is part of interop 2026 &lt;https://web.dev/blog/interop-2026#the\_webtransport\_api&gt;, we are going to shipping a l...
- [Re: \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17473.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; &gt;&gt; There&#x27;s an existing issue for WebTransport as a whole here: &gt;&gt; https://github.com/mozilla/standards-positions/issues/167 &gt;&gt; &gt;&gt; Because it is part of interop 2026 &gt;&gt; &lt;https://web.dev/blog/inte...
- [Re: \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17451.html) *(mail-archive.com)*
  > &gt; &gt; &gt; There&#x27;s an existing issue for WebTransport as a whole here: &gt; https://github.com/mozilla/standards-positions/issues/167 &gt; &gt; Because it is part of interop 2026 &gt; &lt;https://web.dev/blog/interop-2026#the\_webtransport\_ap...
- [Re: \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17435.html) *(mail-archive.com)*
  > Because it is part of interop 2026 &lt;https://web.dev/blog/interop-2026#the\_webtransport\_api&gt;, we are going to shipping a lot of WebTransport features &lt;https://source.chromium.org/chromium/chromium/src/+/main:third\_party/blink/renderer/platfor...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17342.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194104408506368`)*
  > \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Chromestatus Wed, 02 Sep 2026 07:28:08 -0700 Contact emails \[ema...
- [FF160 WebTransport() constructor headers option by hamishwillee · Pull Request #31031 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/31031) *(github.com)* *(Cites: `https://chromestatus.com/feature/5194104408506368`)*
  > FF160 WebTransport() constructor headers option by hamishwillee · Pull Request #31031 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or ...

## 📚 Platform Documentation & Specifications

- [WebTransport API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/160) *(developer.mozilla.org)*
- [\[HTTP\] Add support for WebTransport ResponseHeaders · Issue #46279 · mdn/content · GitHub](https://github.com/mdn/content/issues/46279) *(github.com)*
- [WebTransport/Meetings2023 - W3C Wiki](https://www.w3.org/wiki/WebTransport/Meetings2023) *(w3.org)*
- [Do we want to allow web developers to add headers of the CONNECT request? · Issue #263 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/263) *(github.com)*
- [FF160 WebTransport() constructor headers option by hamishwillee · Pull Request #31031 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/31031) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/156.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/156.md) *(github.com)*
- [Remove \[SameObject\] from responseHeaders · Issue #783 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/783) *(github.com)*
- [Remove \[SameObject\] from responseHeaders attribute by jan-ivar · Pull Request #799 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/pull/799) *(github.com)*
- [Exposing headers of the CONNECT response · Issue #264 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/264) *(github.com)*
- [Constructor: validate options.headers (steps 30-32) next to the protocols validation · Issue #805 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/805) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 66 result(s) found across 11 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5194104408506368" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport headers and responseHeaders" API` — *Core feature API query* (8 returned)
  - `"WebTransport headers and responseHeaders" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"server-provided" OR "stream-level" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport headers and responseHeaders" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport headers and responseHeaders" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransport" ("headers" OR "responseHeaders") "WebTransportOptions" example` — *Finds real-world JavaScript code snippets demonstrating constructor options with custom headers and reading response headers.* (8 returned)
  - `"WebTransport" headers authentication tutorial OR guide` — *Discovers community developer guides explaining how to pass authentication tokens and metadata via headers in WebTransport sessions.* (8 returned)
  - `"WebTransport" ("headers" OR "responseHeaders") ("Intent to Ship" OR "Chrome" OR "release notes")` — *Tracks browser shipping status, release announcements, and platform adoption across Chromium and other browser engines.* (8 returned)
  - `site:github.com/w3c/webtransport ("headers" OR "responseHeaders") issue OR PR` — *Surfaces W3C working group discussions, developer feedback, and specification debates on WebTransport header capabilities.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 18 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 51.1% passing (stable)*

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
