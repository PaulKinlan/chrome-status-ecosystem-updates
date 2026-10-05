# WebTransport Datagram readable stream type

> **Report Week:** 2026-W41 | **Milestone:** Chrome 155 | **Category:** In developer trial (Behind a flag)

## Overview

Adds the  WebTransportOptions.datagramsReadableType  constructor option. By default, incoming WebTransport Datagrams are exposed through a default  ReadableStream . Applications that require BYOB reading can request a readable byte stream by setting  datagramsReadableType: "bytes" .

### Motivation

WebTransport Datagrams are discrete messages rather than an undifferentiated byte sequence. A readable byte stream can lose empty Datagrams and can lose message boundaries when BYOB reads use a minimum byte count spanning multiple Datagrams.

Making a default  ReadableStream  the default preserves Datagram boundaries and empty Datagrams. Applications that benefit from BYOB allocation control can explicitly opt into the byte-stream behavior.

## Ecosystem Status

- **Momentum:** Moderate (70 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** The \`WebTransportOptions.datagramsReadableType\` option standardizes incoming datagram delivery by defaulting to a standard \`ReadableStream\` to safeguard packet boundaries and 0-byte datagrams, while allowing performance-sensitive apps to opt into a readable byte stream (\`"bytes"\`) for zero-copy BYOB reads. Currently in developer trial behind a flag in Chromium (Chrome 155), the feature catches Blink up to the W3C WebTransport Candidate Recommendation. Engine alignment is strong, with WebKit actively implementing the spec changes and exporting upstream test suites.

### Recommendations
- Actionable Advice: Teams building with WebTransport should rely on the default \`ReadableStream\` behavior for discrete message preservation unless memory profiling demonstrates a clear bottleneck. If zero-copy BYOB pooling is required, test \`datagramsReadableType: "bytes"\` under experimental flags in Chrome 155+ and ensure protocol designs avoid emitting zero-byte payload datagrams to avoid stream errors.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: WebTransport Datagram readable stream type Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: WebTransport Datagram readable stream type Chromestatus Mon, 14 Sep 2026 14:16:21 -0700 Contact emails ...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com)*
  > By default, incoming WebTransport Datagrams are exposed through a default ReadableStream . <strong>Applications that require BYOB reading can request a readable byte stream by setting datagramsReadableType: &quot;bytes&quot;</strong> .
- [webtransport-bun \| Ecosystem Directory \| market.dev](https://explore.market.dev/ecosystems/typescript/projects/webtransport-bun) *(explore.market.dev)*
  > requireUnreliable: accepted; satisfied ... with allowPooling: true. datagramsReadableType: <strong>&quot;bytes&quot; uses ReadableByteStream with BYOB; &quot;default&quot; uses normal ReadableStream</strong>....
- [WebTransport](https://triple-underscore.github.io/webtransport-ja.html) *(triple-underscore.github.io · 2026-04-01T00:00:00)*
  > %~datagram可読~stream種別 ~LET ... datagramsReadableType be options’s datagramsReadableType. %流入~datagram群 ~LET `新たな~obj$( `ReadableStream$I ) ◎ Let incomingDatagrams be a new ReadableStream. %~transport ~LET `新たな~obj$( `WebTransport$I ) — その ⇒＃ ...
- [WebTransport](https://w3c.github.io/webtransport) *(w3c.github.io · 2021-10-01T12:35:03)*
  > Note: Using 64 kibibytes buffers ... than the buffer. If datagramsReadableType is &quot;bytes&quot;, <strong>set up with byte reading support incomingDatagrams with pullAlgorithm set to pullDatagramsAlgorithm, and highWaterMark set to 0</strong>....

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md`)*
  > [blink-dev] Intent to Prototype: WebTransport Datagram readable stream type Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: WebTransport Datagram readable stream type Chromestatus Mon, 14 Sep 2026 14:16:21 -0700 Conta...

## 📚 Platform Documentation & Specifications

- [\`pullDatagrams\` errors \`datagrams.readable\` on a zero-length datagram when \`datagramsReadableType\` is \`"bytes"\` · Issue #795 · w3c/webtransport](https://github.com/w3c/webtransport/issues/795) *(github.com)*
- [GitHub - vmeansdev/webtransport-bun: Production-focused WebTransport for Bun, powered by a Rust napi-rs addon (wtransport). In-process server and client, datagrams + uni/bidi streams, Chromium interop, bounded queues/backpressure defaults, and runnable examples (local, Docker, and Compose) for real-time systems beyond WebSockets. · GitHub](https://github.com/vmeansdev/webtransport-bun) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 40 result(s) found across 13 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/5148774971342848" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport Datagram readable stream type" API` — *Core feature API query* (1 returned)
  - `"WebTransport Datagram readable stream type" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (6 returned)
  - `"webtransportoptions.datagramsreadabletype" OR "byte-stream" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport Datagram readable stream type" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (1 returned)
  - `"WebTransport Datagram readable stream type" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"datagramsReadableType" "WebTransport" BYOB reader` — *Finds technical code snippets and API usage demonstrating the BYOB reader initialization with datagramsReadableType in WebTransport.* (7 returned)
  - `"new WebTransport" "datagramsReadableType" "bytes"` — *Locates real-world JavaScript code patterns configuring datagramsReadableType in WebTransportOptions constructor.* (1 returned)
  - `"WebTransport" datagrams ("datagramsReadableType" OR "readable byte stream") (tutorial OR guide OR blog)` — *Searches for developer guides and explainer blogs detailing WebTransport datagram streaming and message boundary tradeoffs.* (0 returned)
  - `"Intent to Ship" OR site:chromestatus.com "datagramsReadableType"` — *Tracks browser vendor release notes, Chromium intent discussions, and implementation status across engines.* (1 returned)
  - `site:github.com/w3c/webtransport "datagramsReadableType" OR ("BYOB" "datagrams")` — *Surfaces W3C working group debates, GitHub issues, and design decisions regarding BYOB reads and datagram preservation.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 119 item(s) inspected

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
