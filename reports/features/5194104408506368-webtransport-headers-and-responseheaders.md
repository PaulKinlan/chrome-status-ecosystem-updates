# WebTransport headers and responseHeaders

> **Report Week:** 2026-W39 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

Adds support for passing custom HTTP request headers via WebTransportOptions and inspecting server response headers through the WebTransport instance. This allows web applications to supply metadata, authentication tokens, and custom parameters during the initial CONNECT handshake and access server-provided headers once the connection is established.

### Motivation

The WebTransport constructor requires support for custom HTTP request headers to address several technical limitations in authentication, routing, and capability negotiation.

Without custom headers, developers must pass authentication tokens in URL query strings, which exposes credentials in server logs and telemetry, or authenticate over an initial data stream, which adds an additional round trip before the connection is usable.

Furthermore, API gateways and reverse proxies typically inspect HTTP headers at the CONNECT layer. Without custom headers, these intermediaries cannot authorize or route WebTransport sessions via existing pipelines, forcing servers to accept connections before verifying credentials.

Finally, applications often need to negotiate capabilities, such as supported video codecs, during connection setup. Providing custom request headers in WebTransportOptions and a readable responseHeaders property on the WebTransport instance allows clients and servers to authenticate, route, and negotiate capabilities during the initial handshake. This eliminates the need for custom stream-level initialization protocols.

## Ecosystem Status

- **Momentum:** High (110 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** WebTransport headers and responseHeaders is currently In developer trial (Behind a flag) in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17342.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: WebTransport headers and responseHeaders Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebTransport headers and responseHeaders Chromestatus Wed, 02 Sep 2026 07:28:08 -0700 Contact emails [email&#160;pr...
- [Re: \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17475.html) *(mail-archive.com)*
  > LGTM3 https://wpt.fyi/results/webtransport/headers.https.any.html?label=experimental&amp;label=master&amp;aligned is green \o/
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3-14) *(datatracker.ietf.org · 2025-10-20T00:00:00)*
  > In order to create a new WebTransport session, a WebTransport client sends an HTTP extended CONNECT request. In this request:¶ · The :protocol pseudo-header field([RFC8441]) MUST be set to webtransport.¶
- [WebTransport over HTTP/3](https://ietf-wg-webtrans.github.io/draft-ietf-webtrans-http3/draft-ietf-webtrans-http3.html) *(ietf-wg-webtrans.github.io · 2026-03-02T00:00:00)*
  > In order to create a new WebTransport session, a WebTransport client sends an HTTP extended CONNECT request. In this request:¶ · The :protocol pseudo-header field ([RFC8441]) MUST be set to webtransport-h3.¶
- [draft-ietf-webtrans-http3-16 - WebTransport over HTTP/3](https://datatracker.ietf.org/doc/draft-ietf-webtrans-http3) *(datatracker.ietf.org · 2026-07-06T00:00:00)*
  > [[RFC editor: please remove the ... an HTTP extended CONNECT request. In this request: * <strong>The :protocol pseudo-header field ([RFC8441]) MUST be set to webtransport-h3</strong>....
- [draft-ietf-webtrans-http2-13 - WebTransport over HTTP/2](https://datatracker.ietf.org/doc/draft-ietf-webtrans-http2) *(datatracker.ietf.org)*
  > 3.2. Creating a New Session As ... can send an HTTP CONNECT request. The :<strong>protocol pseudo-header field ([RFC8441]) MUST be set to webtransport (Section 7.1 of [WEBTRANSPORT-H3]).</strong>...
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > Adds support for passing custom HTTP request headers via WebTransportOptions and inspecting server response headers through the WebTransport instance.
- [Chrome Platform Status](https://chromestatus.com/feature/4854144902889472) *(chromestatus.com · 2019-10-04T00:00:00)*
  > We cannot provide a description for this page right now

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17342.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194104408506368`)*
  > [blink-dev] Intent to Ship: WebTransport headers and responseHeaders Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebTransport headers and responseHeaders Chromestatus Wed, 02 Sep 2026 07:28:08 -0700 Contact emails [ema...

## 📚 Platform Documentation & Specifications

- [Do we want to allow web developers to add headers of the CONNECT request? · Issue #263 · w3c/webtransport](https://github.com/w3c/webtransport/issues/263) *(github.com)*
- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [How to implement authentication and authorization? · BiagioFesta/wtransport · Discussion #244](https://github.com/BiagioFesta/wtransport/discussions/244) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 69 result(s) found across 11 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/5194104408506368" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport headers and responseHeaders" API` — *Core feature API query* (2 returned)
  - `"WebTransport headers and responseHeaders" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"server-provided" OR "stream-level" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport headers and responseHeaders" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport headers and responseHeaders" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"new WebTransport" headers responseHeaders` — *Finds practical JavaScript code examples showing how to pass custom headers in WebTransportOptions and read responseHeaders from a WebTransport instance.* (7 returned)
  - `WebTransport "headers" ("authentication" OR "bearer" OR "auth token") tutorial` — *Searches for developer tutorials and guides explaining how to securely authenticate WebTransport sessions during the CONNECT handshake.* (8 returned)
  - `site:chromestatus.com OR site:github.com/w3c/webtransport "WebTransportOptions" "headers"` — *Tracks browser implementation status, Intent to Ship discussions, and specification consensus around WebTransport request and response headers.* (8 returned)
  - `WebTransport custom headers ("reverse proxy" OR "gateway" OR "handshake") -site:w3.org` — *Surfaces community architectural discussions and feedback regarding API gateways, reverse proxies, and session routing with WebTransport headers.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 115 item(s) inspected

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
