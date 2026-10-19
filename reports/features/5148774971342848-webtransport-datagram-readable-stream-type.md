# WebTransport Datagram readable stream type

> **Report Week:** 2026-W43 | **Milestone:** Chrome 155 | **Category:** In developer trial (Behind a flag)

## Overview

Adds the  WebTransportOptions.datagramsReadableType  constructor option. By default, incoming WebTransport Datagrams are exposed through a default  ReadableStream . Applications that require BYOB reading can request a readable byte stream by setting  datagramsReadableType: "bytes" .

### Motivation

WebTransport Datagrams are discrete messages rather than an undifferentiated byte sequence. A readable byte stream can lose empty Datagrams and can lose message boundaries when BYOB reads use a minimum byte count spanning multiple Datagrams.  Making a default  ReadableStream  the default preserves Datagram boundaries and empty Datagrams. Applications that benefit from BYOB allocation control can explicitly opt into the byte-stream behavior.

## Ecosystem Status

- **Momentum:** Emerging (footprint 100 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The WebTransport \`datagramsReadableType\` constructor option standardizes how incoming datagrams are handled, defaulting to a standard ReadableStream to preserve message boundaries and zero-length datagrams. Developers requiring explicit Bring Your Own Buffer (BYOB) allocation control can request a byte stream by setting \`datagramsReadableType: "bytes"\`. This change resolves historical issues where standard byte stream readers inadvertently merged datagram boundaries or dropped empty messages.

### Recommendations
- Actionable Advice: Web development teams building low-latency WebTransport applications should evaluate \`datagramsReadableType: "bytes"\` under developer flags if BYOB memory efficiency is critical. For general message handling, rely on default non-byte streams to ensure discrete datagram boundaries and empty payloads are properly preserved.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 45% · Edge 45% · Firefox 61.5% · Safari 42.6%; experimental: Chrome 89.9% · Edge 86% · Firefox 67.5% · Safari 74.4%
- **Chrome usage:** 0.00013% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5148774971342848/activity) *(chromestatus.com)*
  > Originally in Chromium, incoming datagrams were exposed as a byte stream (\`ReadableByteStreamController\`), allowing "Bring Your Own Buffer" (BYOB) readers by default readable\` is standardized as a default (non-byte) \`ReadableStream\` yielding discrete...
- [chromium.org](https://issues.chromium.org/issues/546106919/resources) *(issues.chromium.org)*
  > html\`) to validate boundary preservation on default streams and enforce \`TypeError\` when BYOB is requested on a non-byte stream
- [googleusercontent.com](https://doc-2gh0-0gig-issuetracker.googleusercontent.com/issues/571879167) *(doc-2gh0-0gig-issuetracker.googleusercontent.com)*
  > \*\*MDN Tracking:\*\* GitHub documentation tracking issues for the WebTransport Datagram API document the transition from legacy draft properties (such as WebKit's earlier \`datagramsReadableMode\`) to the standardized \`datagramsReadableType\` constructor o...
- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type Chromestatus Mon, 14 Sep 2026 14:16:21 -0700 Contact emails ...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes) *(chromestatus.com)*
  > By default, incoming WebTransport Datagrams are exposed through a default ReadableStream . &lt;strong&gt;Applications that require BYOB reading can request a readable byte stream by setting datagramsReadableType: &quot;bytes&quot;&lt;/strong&gt; .
- [WebTransport（日本語訳）](https://triple-underscore.github.io/webtransport-ja.html) *(triple-underscore.github.io · 2026-04-01T00:00:00)*
  > ◎ Note: Using 64 kibibytes buffers ... the buffer. ◎ If datagramsReadableType is &quot;bytes&quot;, &lt;strong&gt;set up with byte reading support incomingDatagrams with pullAlgorithm set to pullDatagramsAlgorithm, and highWaterMark set to 0&lt;/strong&gt;....
- [webtransport-bun \| Ecosystem Directory \| market.dev](https://explore.market.dev/ecosystems/typescript/projects/webtransport-bun) *(explore.market.dev)*
  > datagramsReadableType: &quot;bytes&quot; &lt;strong&gt;uses ReadableByteStream with BYOB&lt;/strong&gt;; &quot;default&quot; uses normal ReadableStream.
- [WebTransport](https://w3c.github.io/webtransport) *(w3c.github.io · 2021-10-01T12:35:03)*
  > Note: Using 64 kibibytes buffers with datagrams is recommended because the effective maximum WebTransport datagram frame size has an upper bound of the QUIC maximum datagram frame size which is recommended to be 64 kibibytes (See \[QUIC-DATAGRAM\] Sect...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5148774971342848`)*
  > \[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type Chromestatus Mon, 14 Sep 2026 14:16:21 -0700 Conta...

## 📚 Platform Documentation & Specifications

- [\`pullDatagrams\` errors \`datagrams.readable\` on a zero-length datagram when \`datagramsReadableType\` is \`"bytes"\` · Issue #795 · w3c/webtransport](https://github.com/w3c/webtransport/issues/795) *(github.com)*
- [GitHub - vmeansdev/webtransport-bun: Production-focused WebTransport for Bun, powered by a Rust napi-rs addon (wtransport). In-process server and client, datagrams + uni/bidi streams, Chromium interop, bounded queues/backpressure defaults, and runnable examples (local, Docker, and Compose) for real-time systems beyond WebSockets. · GitHub](https://github.com/vmeansdev/webtransport-bun) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 45 result(s) found across 12 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/5148774971342848" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport Datagram readable stream type" API` — *Core feature API query* (1 returned)
  - `"WebTransport Datagram readable stream type" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (6 returned)
  - `"webtransportoptions.datagramsreadabletype" OR "byte-stream" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport Datagram readable stream type" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (2 returned)
  - `"WebTransport Datagram readable stream type" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `WebTransportOptions datagramsReadableType bytes` — *Finds API documentation, WebIDL specifications, and syntax references for the datagramsReadableType constructor option.* (8 returned)
  - `WebTransport datagramsReadableType BYOB readable byte stream tutorial` — *Discovers practical guides and tutorials explaining how to use BYOB reading with WebTransport datagrams.* (8 returned)
  - `WebTransport datagramsReadableType code example` — *Searches for real-world JavaScript code snippets demonstrating the implementation of datagramsReadableType in web applications.* (8 returned)
  - `WebTransport datagramsReadableType OR "datagramsReadableType" w3c github` — *Locates GitHub discussions, standard proposals, and ecosystem sentiment regarding the design decisions of datagramsReadableType.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 17 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 45% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5148774971342848)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5148774971342848)
- [Specification](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-datagramsreadabletype)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/547572475)
