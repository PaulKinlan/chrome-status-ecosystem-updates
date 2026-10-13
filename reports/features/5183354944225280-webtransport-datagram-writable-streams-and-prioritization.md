# WebTransport Datagram writable streams and prioritization

> **Report Week:** 2026-W42 | **Milestone:** Chrome 155 | **Category:** In developer trial (Behind a flag)

## Overview

Adds the modern WebTransport Datagram sending API.  WebTransportDatagramDuplexStream.createWritable() creates independent WebTransportDatagramsWritable streams. Each writable has mutable sendGroup and sendOrder attributes for expressing relative priority among queued WebTransport data in the same send group. Chromium currently applies this ordering among Datagram writables.  The implementation also reports the negotiated maximum outgoing Datagram payload size and discards oversized writes as required by the WebTransport specification.

### Motivation

The original WebTransport Datagram API exposes only a single writable stream, preventing applications from independently scheduling different classes of latency-sensitive messages.  The newer API allows applications such as games, remote-interaction systems, and real-time media applications to create multiple Datagram writables and prioritize urgent data over less time-sensitive data while preserving FIFO ordering within each writable.  Implementing this API also resolves WebTransport Datagram interoperability failures included in Interop 2026.

## Ecosystem Status

- **Momentum:** Moderate (footprint 220 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The WebTransport Datagram writable streams and prioritization update modernizes client-server QUIC networking by replacing the legacy singleton writable stream with \`createWritable()\`, bringing fine-grained scheduling via \`sendGroup\` and \`sendOrder\` to datagrams. Reaching maturity within the W3C Candidate Recommendation track and tracked under Interop 2026, the specification resolves longstanding architectural bottlenecks for high-frequency gaming and Media over QUIC (MoQ) stacks. Ecosystem alignment is exceptionally strong, with Safari and Firefox already supporting the API while Chromium advances it behind flags.

### Recommendations
- Actionable Advice: Teams should adopt feature detection by prioritizing \`transport.datagrams.createWritable()\` while retaining a defensive fallback to the deprecated \`transport.datagrams.writable\` for older Chromium clients. Developers building streaming media or low-latency multiplayer architectures can immediately test prioritized datagram queues in Firefox, Safari, and flagged Chromium builds.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 48.6% · Edge 48.6% · Firefox 67.6% · Safari 44.8%; experimental: Chrome 92.4% · Edge 87.6% · Firefox 63.8% · Safari 80%
- **Chrome usage:** 0.000088% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5183354944225280) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > The \*\*"WebTransport Datagram writable streams and prioritization"\*\* update modernizes the WebTransport Datagram API to solve architectural bottlenecks inherent in its original design writable\`), preventing applications from segregating traffic classe...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com)*
  > createWritable()\` method allows applications to spawn multiple independent \`WebTransportDatagramsWritable\` instances \* \*\*Fine-Grained Prioritization (\`sendOrder\` & \`sendGroup\`):\*\* Each datagram writable stream includes mutable \`sendGroup\` and \`sendOr...
- [web.dev](https://web.dev/blog/web-platform-09-2026?hl=en) *(web.dev)*
  > dev’s release roundups highlight multi-browser progress on WebTransport features createWritable()\`, \`createSendGroup()\`, and session draining
- [\[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17327.html) *(mail-archive.com)*
  > Blink component Blink&gt;Network&gt;WebTransport Web Feature ID webtransport Motivation &lt;strong&gt;The original WebTransport Datagram API exposes only a single writable stream&lt;/strong&gt;, preventing applications from independently scheduling different cla...
- [WebTransport](https://w3c.github.io/webtransport) *(w3c.github.io · 2021-10-01T12:35:03)*
  > The WebTransportSendOptions is a base dictionary of parameters that affect how createUnidirectionalStream, createBidirectionalStream, and the createWritable methods behave.
- [WebTransportDatagramDuplexStream interface - WebIDLpedia](https://dontcallmedom.github.io/webidlpedia/names/WebTransportDatagramDuplexStream.html) *(dontcallmedom.github.io)*
  > \[Exposed=(Window,Worker), SecureContext\] interface WebTransportDatagramDuplexStream { WebTransportDatagramsWritable createWritable( optional WebTransportSendOptions options = {}); readonly attribute ReadableStream readable; readonly attribute unsigne...
- [Minutes IETF122: webtrans](https://datatracker.ietf.org/doc/minutes-122-webtrans) *(datatracker.ietf.org · 2025-03-26T00:00:00)*
  > Updates - redirection as network error - protocol constructor - datagrams.createWritable() replaces datagrams.writable - priorities with sendOrder, sendGroup - shared fairness between send groups, with sendOrder differentiating within sendGroup, Issu...
- [WebTransportDatagramDuplexStream API: createWritable \| Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-api_webtransportdatagramduplexstream_createwritable) *(caniuse.com)*
  > WebTransportDatagramDuplexStream API: createWritable \| Can I use... Support tables for HTML5, CSS3, etc Can I use Search ? Settings WebTransportDatagramDuplexStream API: createWritable Global usage 14.2% + 0% = 14.2% IE ❌ 6 - 10 : Not supported ❌ 11 ...

## 📚 Platform Documentation & Specifications

- [WebTransportDatagramDuplexStream: createWritable() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) *(developer.mozilla.org)*
- [WebTransportDatagramsWritable - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [WebTransport: createSendGroup() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/createSendGroup) *(developer.mozilla.org)*
- [WebTransportDatagramDuplexStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramDuplexStream) *(developer.mozilla.org)*
- [WebTransport: datagrams property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/datagrams) *(developer.mozilla.org)*
- [WebTransportDatagramsWritable: sendOrder property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable/sendOrder) *(developer.mozilla.org)*
- [WebTransportDatagramsWritable: sendGroup property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable/sendGroup) *(developer.mozilla.org)*
- [WebTransportSendGroup - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendGroup) *(developer.mozilla.org)*
- [wasm: gracefully closed datagram writer can wake forever in poll\_send\_datagram · Issue #375 · moq-dev/web-transport](https://github.com/moq-dev/web-transport/issues/375) *(github.com)*
- [transport: WebTransport datagrams — the browser's unreliable channel with no signaling by lesomnus · Pull Request #17 · lesomnus/grpc-dgram](https://github.com/lesomnus/grpc-dgram/pull/17) *(github.com)*
- [WebTransport: rewire the new datagram queue onto Connection's engine by jesup · Pull Request #3985 · mozilla/neqo](https://github.com/mozilla/neqo/pull/3985) *(github.com)*
- [Add transport outgoing-datagram queue engine by jesup · Pull Request #3982 · mozilla/neqo](https://github.com/mozilla/neqo/pull/3982) *(github.com)*
- [Relative prioritization of streams and datagrams · Issue #610 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/610) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 12 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/5183354944225280" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport Datagram writable streams and prioritization" API` — *Core feature API query* (1 returned)
  - `"WebTransport Datagram writable streams and prioritization" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (4 returned)
  - `"webtransportdatagramduplexstream.createwritable" OR "latency-sensitive" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport Datagram writable streams and prioritization" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (2 returned)
  - `"WebTransport Datagram writable streams and prioritization" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"createWritable" "sendOrder" webtransport datagram` — *Finds code samples and WebIDL usage demonstrating how to instantiate multiple WebTransport datagram writable streams and configure sendOrder.* (8 returned)
  - `webtransport datagram "createWritable" OR "sendOrder" tutorial OR guide` — *Discovers community blog posts, explainers, and practical guides on WebTransport datagram multiplexing and prioritization.* (8 returned)
  - `webtransport datagram "createWritable" "Interop 2026" OR "Chromium"` — *Tracks platform adoption, Chromium release notes, and Interop 2026 compatibility tracking for the new datagram sending API.* (8 returned)
  - `webtransport datagram ("sendOrder" OR "sendGroup" OR "prioritization") site:github.com OR site:news.ycombinator.com` — *Uncovers ecosystem discussions, developer feedback, and GitHub issue threads exploring real-time use cases like gaming and media streaming.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 16 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 48.6% passing (stable)*
- **Sources cited by the AI synthesis:** 8 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 12 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5183354944225280)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5183354944225280)
- [Specification](https://www.w3.org/TR/webtransport/#datagram-writable)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/547572475)
