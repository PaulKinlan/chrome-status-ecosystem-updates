# WebTransport Datagram readable stream type

> **Report Week:** 2026-W42 | **Milestone:** Chrome 155 | **Category:** In developer trial (Behind a flag)

## Overview

Adds the  WebTransportOptions.datagramsReadableType  constructor option. By default, incoming WebTransport Datagrams are exposed through a default  ReadableStream . Applications that require BYOB reading can request a readable byte stream by setting  datagramsReadableType: "bytes" .

### Motivation

WebTransport Datagrams are discrete messages rather than an undifferentiated byte sequence. A readable byte stream can lose empty Datagrams and can lose message boundaries when BYOB reads use a minimum byte count spanning multiple Datagrams.  Making a default  ReadableStream  the default preserves Datagram boundaries and empty Datagrams. Applications that benefit from BYOB allocation control can explicitly opt into the byte-stream behavior.

## Ecosystem Status

- **Momentum:** Emerging (footprint 90 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The WebTransport Datagram readable stream type configuration addresses an edge-case architectural flaw by setting a default chunk-based ReadableStream to preserve discrete datagram boundaries and zero-length payloads, while allowing high-throughput applications to opt into byte-stream BYOB reading via datagramsReadableType: 'bytes'. Standardized within the W3C WebTransport specification, the feature is currently in developer trials behind flags in Chromium as it catches up to the refined specification. Cross-engine alignment is strong in principle as part of the broader WebTransport standard, with WebKit tracking implementation and Mozilla maintaining positive standards alignment.

### Recommendations
- Actionable Advice: Web teams operating real-time UDP-style communication should test datagramsReadableType in Chromium canary builds behind experimental flags if zero-copy BYOB readers are critical for memory optimization. For production deployments today, continue using standard datagram reading patterns without assuming BYOB stream support until the option reaches cross-browser stable baselines.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 48.6% · Edge 48.6% · Firefox 67.6% · Safari 44.8%; experimental: Chrome 92.4% · Edge 87.6% · Firefox 63.8% · Safari 80%
- **Chrome usage:** 0.000088% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com)*
  > \* \*\*Status:\*\* Integrated into Chromium (appearing across Chrome 155 release notes and experimental tracking dashboards like Polypane)
- [googleusercontent.com](https://doc-1qa0-4ra0-issuetracker.googleusercontent.com/issues/546106919/resources) *(doc-1qa0-4ra0-issuetracker.googleusercontent.com)*
  > Web Platform Tests & Runtime Implementations \* \*\*Web Platform Tests (WPT):\*\* Test suites (e.g., commit \`wpt/#61428\`) were updated to validate browser compliance when passing \`datagramsReadableType\` through the \`WebTransport\` constructor
- [googleusercontent.com](https://doc-2gh0-0gig-issuetracker.googleusercontent.com/issues/546237332) *(doc-2gh0-0gig-issuetracker.googleusercontent.com)*
  > Web Platform Tests & Runtime Implementations \* \*\*Web Platform Tests (WPT):\*\* Test suites (e.g., commit \`wpt/#61428\`) were updated to validate browser compliance when passing \`datagramsReadableType\` through the \`WebTransport\` constructor
- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)*
  > Explainer https://github.com/w... ReadableStream . Applications that require BYOB reading can request a readable byte stream by setting &lt;strong&gt;datagramsReadableType: &quot;bytes&quot;&lt;/strong&gt; ....
- [webtransport-bun \| Ecosystem Directory \| market.dev](https://explore.market.dev/ecosystems/typescript/projects/webtransport-bun) *(explore.market.dev)*
  > requireUnreliable: accepted; satisfied ... with allowPooling: true. datagramsReadableType: &lt;strong&gt;&quot;bytes&quot; uses ReadableByteStream with BYOB; &quot;default&quot; uses normal ReadableStream&lt;/strong&gt;....
- [WebTransport](https://triple-underscore.github.io/webtransport-ja.html) *(triple-underscore.github.io · 2026-04-01T00:00:00)*
  > ◎ Note: Using 64 kibibytes buffers ... the buffer. ◎ If datagramsReadableType is &quot;bytes&quot;, &lt;strong&gt;set up with byte reading support incomingDatagrams with pullAlgorithm set to pullDatagramsAlgorithm, and highWaterMark set to 0&lt;/strong&gt;....
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > Tracking bug #476826067 ↗ (opens in new window) \| ChromeStatus.com entry \| Spec ↗ (opens in new window) \| Explainer ↗ (opens in new window) Adds the WebTransportOptions.datagramsReadableType constructor option. By default, incoming WebTransport Datag...

## 📚 Platform Documentation & Specifications

- [w3.org](https://www.w3.org/wiki/WebTransport/Meetings2023) *(w3.org)*
- [\`pullDatagrams\` errors \`datagrams.readable\` on a zero-length datagram when \`datagramsReadableType\` is \`"bytes"\` · Issue #795 · w3c/webtransport](https://github.com/w3c/webtransport/issues/795) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 44 result(s) found across 12 planned queries — **6 verified relevant**
  - `"chromestatus.com/feature/5148774971342848" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport Datagram readable stream type" API` — *Core feature API query* (1 returned)
  - `"WebTransport Datagram readable stream type" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (6 returned)
  - `"webtransportoptions.datagramsreadabletype" OR "byte-stream" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport Datagram readable stream type" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (1 returned)
  - `"WebTransport Datagram readable stream type" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"WebTransport" "datagramsReadableType" (tutorial OR guide OR example)` — *Find developer guides and tutorials explaining how to configure and consume WebTransport datagram streams.* (8 returned)
  - `"datagramsReadableType: \"bytes\"" "new WebTransport"` — *Locate real-world JavaScript code examples and constructor usage enabling BYOB byte-stream reads on datagrams.* (8 returned)
  - `"WebTransportOptions" "datagramsReadableType" ("Intent to Ship" OR "Chrome")` — *Track browser engine release notes, standards roadmap announcements, and Chrome feature launch intents.* (3 returned)
  - `site:github.com/w3c/webtransport "datagramsReadableType" OR "datagram boundaries"` — *Investigate W3C standards discussions, issue threads, and consensus regarding datagram boundary preservation versus BYOB allocation performance.* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 16 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 48.6% passing (stable)*

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
