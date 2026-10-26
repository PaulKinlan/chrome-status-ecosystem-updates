# WebTransport Datagram readable stream type

> **Report Week:** 2026-W44 | **Milestone:** Chrome 155 | **Category:** In developer trial (Behind a flag)

## Overview

Adds the  WebTransportOptions.datagramsReadableType  constructor option. By default, incoming WebTransport Datagrams are exposed through a default  ReadableStream . Applications that require BYOB reading can request a readable byte stream by setting  datagramsReadableType: "bytes" .

### Motivation

WebTransport Datagrams are discrete messages rather than an undifferentiated byte sequence. A readable byte stream can lose empty Datagrams and can lose message boundaries when BYOB reads use a minimum byte count spanning multiple Datagrams.  Making a default  ReadableStream  the default preserves Datagram boundaries and empty Datagrams. Applications that benefit from BYOB allocation control can explicitly opt into the byte-stream behavior.

## Ecosystem Status

- **Momentum:** Emerging (footprint 140 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The WebTransport Datagram readable stream type feature introduces the datagramsReadableType constructor option, allowing developers to switch between default chunked ReadableStreams that preserve datagram boundaries and readable byte streams optimized for BYOB buffer reuse. Currently in developer trial behind a flag in Chromium, this enhancement addresses edge cases where byte streams coalesced discrete datagrams or dropped zero-length payloads. While the core WebTransport API has baseline cross-browser support, this refinement standardizes datagram streaming semantics across the W3C WebTransport Working Group.

### Recommendations
- Actionable Advice: Applications should continue utilizing standard chunk-based datagram consumption for cross-browser production code to ensure message integrity and broad compatibility. Teams with intensive zero-copy throughput requirements can prototype datagramsReadableType set to 'bytes' with 64 KiB BYOB read buffers in Chromium developer trials using feature detection and fallback wrappers.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 42.3% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 70.1% · Safari 73%
- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [openpwa.net](https://openpwa.net/reference/capabilities/webtransport) *(openpwa.net)*
  > readable\` \*\*Byte stream mode (\`datagramsReadableType: "bytes"\`)\*\*: Converts the stream into a readable byte stream
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > By default, incoming WebTransport Datagrams are exposed through a default ReadableStream . &lt;strong&gt;Applications that require BYOB reading can request a readable byte stream by setting datagramsReadableType: &quot;bytes&quot;&lt;/strong&gt; .
- [googleusercontent.com](https://doc-2gh0-0gig-issuetracker.googleusercontent.com/issues/571879167) *(doc-2gh0-0gig-issuetracker.googleusercontent.com)*
  > \*\*MDN Content Tracking\*\*: Active documentation tracking issues (\*"Document WebTransport Datagram API updates: writable streams, priority, datagramsReadableType"\*) reflect changes to the \`WebTransport()\` constructor and \`WebTransportDatagramDuplexStre...
- [googleusercontent.com](https://doc-1jrg-48u0-issuetracker.googleusercontent.com/issues/571879167/resources) *(doc-1jrg-48u0-issuetracker.googleusercontent.com)*
  > \*\*MDN Content Tracking\*\*: Active documentation tracking issues (\*"Document WebTransport Datagram API updates: writable streams, priority, datagramsReadableType"\*) reflect changes to the \`WebTransport()\` constructor and \`WebTransportDatagramDuplexStre...
- [chromestatus.com](https://chromestatus.com/feature/5148774971342848/activity) *(chromestatus.com)*
  > Attempting to acquire a BYOB reader on a standard connection without this flag explicitly set will throw a \`TypeError\` \*\*WebKit / Safari\*\*: Safari earlier supported an experimental \`datagramsReadableMode\`
- [shiguredo.app](https://moqt-devtools.shiguredo.app/webtransport-devtools) *(moqt-devtools.shiguredo.app)*
  > Real-time networking frameworks—such as implementations for \*\*MOQT (Media over QUIC Transport)\*\* (e.g., \`moqt-js\`) and diagnostic tools like \*\*WebTransport DevTools\*\*—have surfaced options to toggle \`datagramsReadableType: "bytes"\`
- [\[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17839.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type Chromestatus Wed, 21 Oct 2026 13:52:50 -0700 Contact emails \[email&#16...
- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)*
  > Explainer https://github.com/w... ReadableStream . Applications that require BYOB reading can request a readable byte stream by setting &lt;strong&gt;datagramsReadableType: &quot;bytes&quot;&lt;/strong&gt; ....
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes) *(chromestatus.com)*
  > By default, incoming WebTransport Datagrams are exposed through a default ReadableStream . &lt;strong&gt;Applications that require BYOB reading can request a readable byte stream by setting datagramsReadableType: &quot;bytes&quot;&lt;/strong&gt; .
- [webtransport-bun \| Ecosystem Directory \| market.dev](https://explore.market.dev/ecosystems/typescript/projects/webtransport-bun) *(explore.market.dev)*
  > requireUnreliable: accepted; satisfied ... with allowPooling: true. datagramsReadableType: &lt;strong&gt;&quot;bytes&quot; uses ReadableByteStream with BYOB; &quot;default&quot; uses normal ReadableStream&lt;/strong&gt;....

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17839.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5148774971342848`)*
  > \[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type Chromestatus Wed, 21 Oct 2026 13:52:50 -0700 Contact emails ...

## 📚 Platform Documentation & Specifications

- [w3.org](https://www.w3.org/wiki/WebTransport/Meetings2023) *(w3.org)*
- [webtransport/index.bs at main · w3c/webtransport](https://github.com/w3c/webtransport/blob/main/index.bs) *(github.com)*
- [github.com](https://github.com/shiguredo/moqt-js) *(github.com)*
- [\`pullDatagrams\` errors \`datagrams.readable\` on a zero-length datagram when \`datagramsReadableType\` is \`"bytes"\` · Issue #795 · w3c/webtransport](https://github.com/w3c/webtransport/issues/795) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 47 result(s) found across 12 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/5148774971342848" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport Datagram readable stream type" API` — *Core feature API query* (2 returned)
  - `"WebTransport Datagram readable stream type" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (7 returned)
  - `"webtransportoptions.datagramsreadabletype" OR "byte-stream" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport Datagram readable stream type" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (3 returned)
  - `"WebTransport Datagram readable stream type" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"datagramsReadableType" "WebTransport" (BYOB OR "ReadableStreamBYOBReader")` — *Finds practical JavaScript code examples configuring datagramsReadableType for zero-copy BYOB reads.* (8 returned)
  - `"WebTransport" datagrams "datagramsReadableType" (guide OR tutorial OR "readable stream")` — *Surfaces developer guides and deep-dive articles explaining how to manage datagram readable streams and message boundaries.* (3 returned)
  - `"WebTransport" "datagramsReadableType" ("Intent to Ship" OR "Chrome" OR "Firefox" OR "Safari")` — *Tracks browser vendor release notes, Intent to Ship threads, and platform support status across engines.* (3 returned)
  - `site:github.com/w3c/webtransport "datagramsReadableType" OR "datagrams" "ReadableStream"` — *Surfaces W3C Working Group deliberations, architecture issues, and community feedback on discrete datagram preservation vs byte streams.* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 17 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 42.3% passing (stable)*
- **Sources cited by the AI synthesis:** 4 result(s) found — **1 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 11 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5148774971342848)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5148774971342848)
- [Specification](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-datagramsreadabletype)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/547572475)
