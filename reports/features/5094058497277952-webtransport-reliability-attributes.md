# WebTransport reliability attributes

> **Report Week:** 2026-W41 | **Milestone:** Chrome 155 | **Category:** In developer trial (Behind a flag)

## Overview

Adds the  WebTransport.reliability  instance attribute and static WebTransport.supportsReliableOnly attribute. These APIs indicate whether the user agent supports WebTransport over exclusively reliable connections and whether an established session supports unreliable transport such as datagrams.  In Chromium, reliability initially returns "pending" and changes to  "supports-unreliable" after an HTTP/3 WebTransport connection is established.  Since Chromium does not currently support HTTP/2 fallback,  WebTransport.supportsReliableOnly returns false; any successfully established session uses HTTP/3 and supports unreliable datagrams.

### Motivation

WebTransport may operate over connections with different reliability capabilities. Applications such as games, interactive media, and real-time collaboration tools need to know whether unreliable datagrams are available before selecting their transport strategy.

WebTransport.supportsReliableOnly  reports whether the user agent supports WebTransport over exclusively reliable connections. The per-session reliability attribute is "pending" while connecting and becomes "reliable-only" or  "supports-unreliable" once the transport is known.

Chromium currently implements WebTransport over HTTP/3 with unreliable datagram support, so established sessions report "supports-unreliable" and  supportsReliableOnly  returns false.

## Ecosystem Status

- **Momentum:** High (160 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The WebTransport reliability attributes (\`WebTransport.supportsReliableOnly\` and \`transport.reliability\`) standardize how applications detect transport layer capabilities, specifically differentiating between reliable-only connections (such as HTTP/2 fallback) and those offering unreliable datagram delivery (HTTP/3). Originating from W3C WebTransport WG consensus to eliminate guesswork in transport protocol selection, the feature is in developer trial behind a flag in Chrome 155 while gaining documentation and preview support across MDN and other engines. Consensus is strong because it solves a long-standing protocol feature-detection gap for real-time applications like games and streaming.

### Recommendations
- Actionable Advice: Do not treat these attributes as universally available yet; gate access using standard progressive enhancement checks (\`'supportsReliableOnly' in WebTransport\`) and always inspect \`transport.reliability\` after \`await transport.ready\` resolves. For production real-time apps today, maintain existing fallback logic while testing protocol differentiation under flags in Chromium and preview channels.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Prototype: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17340.html) *(mail-archive.com)*
  > Explainer https://github.com/w...liableOnly attribute. These APIs <strong>indicate whether the user agent supports WebTransport over exclusively reliable connections and whether an established session supports unreliable transport such as datagrams</...
- [WebTransport](https://w3c.github.io/webtransport) *(w3c.github.io · 2021-10-01T12:35:03)*
  > supportsReliableOnly, of type boolean, readonly · <strong>Returns true if the user agent supports WebTransport sessions over exclusively reliable connections, otherwise false</strong>. anticipatedConcurrentIncomingUnidirectionalStreams, of type unsig...
- [WebTransport in web\_webtransport\_sys - Rust](https://docs.rs/web-webtransport-sys/latest/web_webtransport_sys/struct.WebTransport.html) *(docs.rs)*
  > The WebTransport class. ... Getter for the ready field of this object. ... Getter for the reliability field of this object. ... Getter for the congestionControl field of this object. ... Getter for the closed field of this object. ... Getter for the ...
- [Exploring the WebTransport API: A New Era of Web Communication](https://jsdev.space/webtransport-api) *(jsdev.space · 2025-01-16T00:00:00)*
  > It supports multiple streams, unidirectional streams, and out-of-order delivery. <strong>WebTransport enables reliable communication through streams and unreliable transport via UDP-like datagrams</strong>.
- [What Is Replacing WebSockets? 2026 Real-Time Protocol Guide - VideoSDK](https://www.videosdk.live/developer-hub/websocket/what-is-replacing-websockets) *(videosdk.live)*
  > WebTransport: <strong>A browser API for bidirectional real-time communication built on HTTP/3 and QUIC, supporting both reliable streams and unreliable datagrams with sub-millisecond handshake times</strong>.
- [WebTransport API: Secure Real-Time Connections - Noorani](https://nooranibrowser.com/blog/webtransport-secure-connections) *(nooranibrowser.com · 2026-09-25T09:48:03)*
  > WebTransport over HTTP can use modern HTTP transport foundations while exposing application-friendly streams and datagrams. WebSockets provide a widely supported, reliable, ordered connection. That model is excellent for many chats, dashboards, and n...
- [WebTransport](https://chromestatus.com/feature/4854144902889472) *(chromestatus.com · 2019-10-04T00:00:00)*
  > We cannot provide a description for this page right now
- [Intent to Ship: WebTransport](https://groups.google.com/a/chromium.org/g/blink-dev/c/kwC5wES3I4c) *(groups.google.com)*
  > WebTransport is <strong>an interface representing a set of reliable/unreliable streams to a server</strong>.
- [WebTransport Application Protocol Negotiation](https://chromestatus.com/feature/6521719678042112) *(chromestatus.com · 2025-05-07T00:00:00)*
  > We cannot provide a description for this page right now
- [Intent to Ship: WebTransport Application Protocol Negotiation](https://groups.google.com/a/chromium.org/g/blink-dev/c/PfPf23iI0n0/m/omqKJjLHAQAJ) *(groups.google.com)*
  > The feature in question adds a similar mechanism to WebTransport, by performing an ALPN-like negotiation inside the WebTransport handshake. ... Either email addresses are anonymous for this group or you need the view member email addresses permission...
- [WebTransport Stats](https://chromestatus.com/feature/5194440034746368) *(chromestatus.com)*
  > We cannot provide a description for this page right now

## 📚 Platform Documentation & Specifications

- [WebTransport: reliability property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/reliability) *(developer.mozilla.org)*
- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [content/files/en-us/web/api/webtransport/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransport/index.md?plain=1) *(github.com)*
- [\[HTTP\] Add support for WebTransport supportsReliableOnly · Issue #45894 · mdn/content](https://github.com/mdn/content/issues/45894) *(github.com)*
- [WebTransport: reliability-Eigenschaft - Web-APIs \| MDN](https://developer.mozilla.org/de/docs/Web/API/WebTransport/reliability) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 62 result(s) found across 13 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/5094058497277952" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport reliability attributes" API` — *Core feature API query* (2 returned)
  - `"WebTransport reliability attributes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webtransport.reliability" OR "webtransport.supportsreliableonly" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport reliability attributes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport reliability attributes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransport.reliability" OR "supportsReliableOnly" javascript example` — *Finds code samples and WebIDL usage demonstrating how to inspect the reliability state and static capability in client-side JavaScript.* (5 returned)
  - `"WebTransport" reliability "supports-unreliable" OR "reliable-only" tutorial OR guide` — *Discovers practical tutorials and developer blog posts discussing transport mode negotiation and datagram availability checks.* (8 returned)
  - `"WebTransport.supportsReliableOnly" OR "WebTransport.reliability" "intent to ship" OR chromestatus` — *Tracks browser engine release notes, intent-to-ship threads, and platform status updates across Chromium and other browser vendors.* (8 returned)
  - `site:github.com/w3c/webtransport "reliability" "supportsReliableOnly" OR "reliable-only"` — *Surfaces W3C working group specification discussions, design trade-offs, and issues regarding HTTP/2 fallback vs HTTP/3 transport modes.* (1 returned)
  - `"WebTransport" "supports-unreliable" datagram fallback "WebSockets" OR "HTTP/3"` — *Searches for real-world architecture guides detailing fallback patterns between reliable streaming and unreliable datagrams in real-time web apps.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 119 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5094058497277952)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5094058497277952)
- [Specification](https://www.w3.org/TR/webtransport/#dom-webtransport-reliability)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/545636884)
