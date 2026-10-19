# WebTransport Datagram writable streams and prioritization

> **Report Week:** 2026-W43 | **Milestone:** Chrome 155 | **Category:** In developer trial (Behind a flag)

## Overview

Adds the modern WebTransport Datagram sending API.  WebTransportDatagramDuplexStream.createWritable() creates independent WebTransportDatagramsWritable streams. Each writable has mutable sendGroup and sendOrder attributes for expressing relative priority among queued WebTransport data in the same send group. Chromium currently applies this ordering among Datagram writables.  The implementation also reports the negotiated maximum outgoing Datagram payload size and discards oversized writes as required by the WebTransport specification.

### Motivation

The original WebTransport Datagram API exposes only a single writable stream, preventing applications from independently scheduling different classes of latency-sensitive messages.  The newer API allows applications such as games, remote-interaction systems, and real-time media applications to create multiple Datagram writables and prioritize urgent data over less time-sensitive data while preserving FIFO ordering within each writable.  Implementing this API also resolves WebTransport Datagram interoperability failures included in Interop 2026.

## Ecosystem Status

- **Momentum:** Moderate (footprint 220 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The WebTransport Datagram writable streams and prioritization API upgrades the legacy singleton datagram writable model to a multi-stream architecture created via createWritable(), enabling granular scheduling through sendGroup and sendOrder attributes. This modernization is essential for low-latency networking applications such as gaming, remote interaction, and Media over QUIC (MoQ) by aligning datagram prioritization with WebTransport streams. The feature enjoys strong multi-engine consensus, resolving key interoperability targets in Interop 2026 as Chromium advances developer trials in Chrome 155.

### Recommendations
- Actionable Advice: Teams building real-time media or high-frequency state sync applications should test multi-stream datagram scheduling behind browser flags in Chromium while leveraging feature detection for createWritable(). Implementations should progressively enhance from the legacy singleton writable stream to WebTransportSendGroup and sendOrder parameters where supported.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 45% · Edge 45% · Firefox 61.5% · Safari 42.6%; experimental: Chrome 89.9% · Edge 86% · Firefox 67.5% · Safari 74.4%
- **Chrome usage:** 0.00013% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [ietf.org](https://datatracker.ietf.org/meeting/123/materials/slides-123-webtrans-webtransport-slides-ietf-123-03) *(datatracker.ietf.org)*
  > The \*\*WebTransport Datagram writable streams and prioritization\*\* feature introduces major enhancements to the WebTransport API by replacing the legacy, singular \`writable\` stream with a more flexible, multi-stream model Rather than relying on a sing...
- [appspot.com](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5183354944225280) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > The \*\*WebTransport Datagram writable streams and prioritization\*\* feature introduces major enhancements to the WebTransport API by replacing the legacy, singular \`writable\` stream with a more flexible, multi-stream model \*\*Payload Size Enforcement\*\*:...
- [appspot.com](https://cr-status.appspot.com/feature/5183354944225280) *(cr-status.appspot.com)*
  > createWritable()\`\*\*: This method creates independent \`WebTransportDatagramsWritable\` streams \*\*Granular Prioritization (\`sendGroup\` and \`sendOrder\`)\*\*: Each writable stream features mutable \`sendGroup\` and \`sendOrder\` attributes
- [\[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17327.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization Chromestatus Fri, 28 Aug 2026 ...
- [WebTransport](https://w3c.github.io/webtransport) *(w3c.github.io · 2021-10-01T12:35:03)*
  > The WebTransportSendOptions is a base dictionary of parameters that affect how createUnidirectionalStream, createBidirectionalStream, and the createWritable methods behave.
- [Minutes IETF122: webtrans](https://datatracker.ietf.org/doc/minutes-122-webtrans) *(datatracker.ietf.org · 2025-03-26T00:00:00)*
  > Updates - redirection as network error - protocol constructor - datagrams.createWritable() replaces datagrams.writable - priorities with sendOrder, sendGroup - shared fairness between send groups, with sendOrder differentiating within sendGroup, Issu...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes) *(chromestatus.com)*
  > WebTransportDatagramDuplexStream.createWritable() &lt;strong&gt;creates independent WebTransportDatagramsWritable streams&lt;/strong&gt;. Each writable has mutable sendGroup and sendOrder attributes for expressing relative priority among queued WebTransport data...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17327.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5183354944225280`)*
  > \[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization Chromestatus Fri, 28...

## 📚 Platform Documentation & Specifications

- [WebTransportDatagramsWritable - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable) *(developer.mozilla.org)*
- [WebTransportSendGroup - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendGroup) *(developer.mozilla.org)*
- [github.com](https://github.com/w3c/webtransport/issues/610) *(github.com)*
- [WebTransportDatagramDuplexStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramDuplexStream) *(developer.mozilla.org)*
- [WebTransportDatagramDuplexStream: createWritable() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) *(developer.mozilla.org)*
- [WebTransport: datagrams property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/datagrams) *(developer.mozilla.org)*
- [content/files/en-us/web/api/webtransportdatagramduplexstream/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransportdatagramduplexstream/index.md?plain=1) *(github.com)*
- [WebTransportDatagramsWritable: sendOrder property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable/sendOrder) *(developer.mozilla.org)*
- [WebTransport: createSendGroup() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/createSendGroup) *(developer.mozilla.org)*
- [WebTransportDatagramsWritable: sendGroup property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable/sendGroup) *(developer.mozilla.org)*
- [GitHub - Lillious-Networks/webtransport: W3C WebTransport for Bun, backed by a Rust QUIC/HTTP-3 stack. Client and server, datagrams and streams. · GitHub](https://github.com/Lillious-Networks/webtransport) *(github.com)*
- [createWritable should throw if the send group is from the wrong Transport object · Issue #700 · w3c/webtransport](https://github.com/w3c/webtransport/issues/700) *(github.com)*
- [docs(quest): plan Firefox 155 WebTransport adoption by kixelated · Pull Request #4251 · moq-dev/moq](https://github.com/moq-dev/moq/pull/4251) *(github.com)*
- [Add transport outgoing-datagram queue engine by jesup · Pull Request #3982 · mozilla/neqo](https://github.com/mozilla/neqo/pull/3982) *(github.com)*
- ["Concepts" section says that there are just two concepts · Issue #793 · w3c/webtransport](https://github.com/w3c/webtransport/issues/793) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 55 result(s) found across 12 planned queries — **18 verified relevant**
  - `"chromestatus.com/feature/5183354944225280" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport Datagram writable streams and prioritization" API` — *Core feature API query* (1 returned)
  - `"WebTransport Datagram writable streams and prioritization" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (5 returned)
  - `"webtransportdatagramduplexstream.createwritable" OR "latency-sensitive" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport Datagram writable streams and prioritization" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (3 returned)
  - `"WebTransport Datagram writable streams and prioritization" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"WebTransport" datagrams "createWritable" OR "sendOrder" tutorial OR guide` — *Find developer guides and tutorials explaining how to use independent WebTransport datagram writable streams and prioritization.* (8 returned)
  - `"createWritable" "sendGroup" "sendOrder" WebTransport` — *Search for code examples and WebIDL API usage featuring sendGroup and sendOrder properties on WebTransport datagram writable streams.* (8 returned)
  - `"WebTransport" "createWritable" OR "sendGroup" chromestatus OR "Interop 2026"` — *Track implementation progress, browser engine support, and WebTransport datagram Interop 2026 goals.* (8 returned)
  - `"WebTransport" datagram prioritization OR "sendOrder" site:github.com OR site:news.ycombinator.com` — *Discover developer discussions and community feedback regarding WebTransport datagram prioritization for latency-critical applications.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 6 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
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
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5183354944225280)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5183354944225280)
- [Specification](https://www.w3.org/TR/webtransport/#datagram-writable)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/547572475)
