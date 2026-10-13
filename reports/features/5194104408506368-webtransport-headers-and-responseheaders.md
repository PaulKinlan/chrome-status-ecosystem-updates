# WebTransport headers and responseHeaders

> **Report Week:** 2026-W42 | **Milestone:** Chrome 156 (first listed in Chrome 153) | **Category:** Enabled by default

## Overview

Adds support for passing custom HTTP request headers via WebTransportOptions and inspecting server response headers through the WebTransport instance. This allows web applications to supply metadata, authentication tokens, and custom parameters during the initial CONNECT handshake and access server-provided headers once the connection is established.

### Motivation

The WebTransport constructor requires support for custom HTTP request headers to address several technical limitations in authentication, routing, and capability negotiation.  Without custom headers, developers must pass authentication tokens in URL query strings, which exposes credentials in server logs and telemetry, or authenticate over an initial data stream, which adds an additional round trip before the connection is usable.  Furthermore, API gateways and reverse proxies typically inspect HTTP headers at the CONNECT layer. Without custom headers, these intermediaries cannot authorize or route WebTransport sessions via existing pipelines, forcing servers to accept connections before verifying credentials.  Finally, applications often need to negotiate capabilities, such as supported video codecs, during connection setup. Providing custom request headers in WebTransportOptions and a readable responseHeaders property on the WebTransport instance allows clients and servers to authenticate, route, and negotiate capabilities during the initial handshake. This eliminates the need for custom stream-level initialization protocols.

## Ecosystem Status

- **Momentum:** Emerging (footprint 120 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The addition of custom HTTP headers and the responseHeaders attribute to WebTransport closes a long-standing architectural gap, enabling native authentication, capability negotiation, and reverse-proxy routing during the initial HTTP/3 CONNECT handshake. Formalized in the W3C WebTransport Candidate Recommendation, the feature eliminates insecure URL-token workarounds and unnecessary stream-level initialization round-trips. With Chromium shipping default support and strong multi-engine participation in its design, the API establishes a robust foundation for modern real-time web applications.

### Recommendations
- Actionable Advice: Teams deploying WebTransport should adopt the headers dictionary using progressive enhancement, falling back to legacy stream negotiation or ticket-based query parameters only when feature detection fails. Backend architectures should be updated to validate authentication tokens directly on incoming HTTP/3 CONNECT requests to prune connection setup latency.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 48.6% · Edge 48.6% · Firefox 67.6% · Safari 44.8%; experimental: Chrome 92.4% · Edge 87.6% · Firefox 63.8% · Safari 80%
- **Chrome usage:** 0.000088% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > \*\*Chrome for Developers & Chrome Platform Status\*\* \* \*\*Chrome 155 Beta Release Notes & ChromeStatus:\*\* Google documented this feature on the \*Chrome Platform Status\* portal and featured it in the \*Chrome 155 Beta\* release notes on \`developer.chrome.c...
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/3217580af2918bf0b2ba128e77d9b1c898c9a161) *(chromium.googlesource.com)*
  > \* \*\*Key Points Highlighted:\*\* \* Enabled behind the \`WebTransportHeaders\` runtime flag for developer trials (Milestones 153/154) and slated for general availability in Chrome 155 headers\` through to the underlying HTTP/3 CONNECT stream and exposing th...
- [github.io](https://dontcallmedom.github.io/webidlpedia/names/WebTransport.html) *(dontcallmedom.github.io)*
  > responseHeaders\`
- [google.com](https://issuetracker.google.com/issues/551879993) *(issuetracker.google.com)*
  > headers\` through to the underlying HTTP/3 CONNECT stream and exposing the response headers to the client-side JavaScript binding
- [\[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17342.html) *(mail-archive.com)*
  > &lt;strong&gt;Request headers are supplied at constructor initialization and response headers become accessible asynchronously upon connection establishment via wt&lt;/strong&gt;.ready, fitting naturally into existing WebTransport asynchronous workflows. Activat...
- [Re: \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17475.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; There&#x27;s an existing issue for WebTransport as a whole here: &gt;&gt;&gt; https://github.com/mozilla/standards-positions/issues/167 &gt;&gt;&gt; &gt;&gt;&gt; Because it is part of interop 2026 &gt;&gt;&gt; &...
- [Re: \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17473.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; &gt;&gt; There&#x27;s an existing issue .../chromium/chromium/src/+/main:third\_party/blink/renderer/platform/runtime\_enabled\_features.json5?q=file:third\_party/blink/renderer/platform/runtime\_enabled\_features.json5 WebTransport &gt; ...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [Do we want to allow web developers to add headers of the CONNECT request? · Issue #263 · w3c/webtransport](https://github.com/w3c/webtransport/issues/263) *(github.com)*
- [Remove \[SameObject\] from responseHeaders · Issue #783 · w3c/webtransport](https://github.com/w3c/webtransport/issues/783) *(github.com)*
- [Exposing headers of the CONNECT response · Issue #264 · w3c/webtransport](https://github.com/w3c/webtransport/issues/264) *(github.com)*
- [webtransport/explainer.md at main · w3c/webtransport](https://github.com/w3c/webtransport/blob/main/explainer.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 62 result(s) found across 11 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/5194104408506368" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport headers and responseHeaders" API` — *Core feature API query* (2 returned)
  - `"WebTransport headers and responseHeaders" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"server-provided" OR "stream-level" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport headers and responseHeaders" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport headers and responseHeaders" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransport" "WebTransportOptions" "headers" (tutorial OR guide OR "how to")` — *Searches for developer tutorials and walkthroughs detailing how to configure custom request headers in WebTransport sessions.* (8 returned)
  - `"new WebTransport" ("headers:" OR "responseHeaders") javascript` — *Finds exact JavaScript implementation snippets demonstrating constructor usage with headers and accessing responseHeaders.* (8 returned)
  - `"WebTransport" "responseHeaders" ("Intent to Ship" OR "Chromium" OR "Chrome")` — *Locates browser release notes, platform implementation updates, and Intent to Ship announcements regarding WebTransport headers.* (7 returned)
  - `site:github.com/w3c/webtransport ("headers" OR "responseHeaders") ("CONNECT" OR authentication)` — *Explores standards discussions, design rationales, and specification issue threads related to handshake authentication and proxying.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 16 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 48.6% passing (stable)*

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
