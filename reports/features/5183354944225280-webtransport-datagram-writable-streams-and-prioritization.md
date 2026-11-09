# WebTransport Datagram writable streams and prioritization

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 (first listed in Chrome 155) | **Category:** Enabled by default

## Overview

Adds the modern WebTransport Datagram sending API.  WebTransportDatagramDuplexStream.createWritable() creates independent WebTransportDatagramsWritable streams. Each writable has mutable sendGroup and sendOrder attributes for expressing relative priority among queued WebTransport data in the same send group. Chromium currently applies this ordering among Datagram writables.  The implementation also reports the negotiated maximum outgoing Datagram payload size and discards oversized writes as required by the WebTransport specification.

### Motivation

The original WebTransport Datagram API exposes only a single writable stream, preventing applications from independently scheduling different classes of latency-sensitive messages.  The newer API allows applications such as games, remote-interaction systems, and real-time media applications to create multiple Datagram writables and prioritize urgent data over less time-sensitive data while preserving FIFO ordering within each writable.  Implementing this API also resolves WebTransport Datagram interoperability failures included in Interop 2026.

## Ecosystem Status

- **Momentum:** Emerging (+30 points since 2026-10-12; footprint 250 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The WebTransport Datagram writable streams and prioritization API replaces the legacy singleton datagram writer with \`createWritable()\`, introducing granular scheduling via \`sendGroup\` and \`sendOrder\` along with strict payload size enforcement. Standardized by the W3C WebTransport Working Group and targeted under Interop 2026, the upgrade transitions datagram transmission to align seamlessly with QUIC stream prioritization models. While broad baseline support for core WebTransport is already established across major browsers, this datagram dispatch overhaul addresses crucial multi-channel queuing bottlenecks for gaming and real-time media workloads.

### Recommendations
- Actionable Advice: Adopt a feature-detection progressive enhancement pattern by checking for \`transport.datagrams.createWritable\` before instantiating dedicated writables, falling back to the legacy \`transport.datagrams.writable\` property where necessary. Teams operating latency-sensitive pipelines should verify their datagram sizes against \`maxDatagramSize\` to prevent silent packet discards under the stricter specification rules.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%
- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [ietf.org](https://datatracker.ietf.org/meeting/123/materials/slides-123-webtrans-webtransport-slides-ietf-123-03) *(datatracker.ietf.org)*
  > The Web Platform feature \*\*"WebTransport Datagram writable streams and prioritization"\*\* introduces a modern sending architecture for WebTransport datagrams, replacing the legacy singleton writer (\`transport.datagrams.writable\`) \*\*Sources:\*\* \*W3C Web...
- [appspot.com](https://cr-status.appspot.com/feature/5183354944225280) *(cr-status.appspot.com)*
  > \*\*Datagram Prioritization (\`sendGroup\` and \`sendOrder\`)\*\*: Each datagram writable stream exposes mutable \`sendGroup\` and \`sendOrder\` properties \*\*Specification Compliance & Payload Enforcement\*\*: User agents report the negotiated \`maxDatagramSize\` an...
- [\[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17327.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization Chromestatus Fri, 28 Aug 2026 ...
- [\[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17849.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization 'Monica Chintala' via blink-dev ...
- [\[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17863.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization Alex Russell Tue, 27 Oct 2026 12...
- [\[blink-dev\] Intent to Ship: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17848.html) *(mail-archive.com)*
  > Blink component Blink&gt;Network&gt;WebTransport Web Feature ID webtransport Motivation &lt;strong&gt;The original WebTransport Datagram API exposes only a single writable stream&lt;/strong&gt;, preventing applications from independently scheduling different cla...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17881.html) *(mail-archive.com)*
  > \*Blink component\* Blink&gt;Network&gt;WebTransport &lt;https://issues.chromium.org/issues?q=customfield1222907:&quot;Blink&gt;Network&gt;WebTransport&quot;&gt; \*Web Feature ID\* webtransport &lt;https://webstatus.dev/features/webtransport&gt; \*Motivat...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes) *(chromestatus.com)*
  > Chromium currently applies this ordering among Datagram writables. The implementation also reports the negotiated maximum outgoing Datagram payload size and discards oversized writes as required by the WebTransport specification. Tracking bug #547572...
- [\[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17904.html) *(mail-archive.com)*
  > This feature implementation provides the scheduling functionality for sendGroup and sendOrder, which will also help enable WebTransportDatagramsWritable - WebTransport Datagram writable streams and prioritization - Chrome Platform Status &lt;https://...
- [WEBTRANS WG IETF 122 Hybrid Meeting Thursday, March 20, 2025](https://datatracker.ietf.org/meeting/122/materials/slides-122-webtrans-webtransport-slides-01) *(datatracker.ietf.org · 2025-03-20T00:00:00)*
  > Within the sendGroups strict priorities can still be applied between streams and datagrams ... Our understanding is that the one original reason for CORS was to protect legacy servers in the case of · plain HTTP. Can a request be recognized as a regu...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17875.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; On Thursday, October 22, ... WebTransport Datagram sending API. &gt;&gt;&gt; WebTransportDatagramDuplexStream.createWritable() &lt;strong&gt;creates independent &gt;&gt;&gt; WebTransportDatagramsWritable streams&lt;/strong&gt;....
- [320508 &ndash; Remove incorrect \`NODELETE\` annotation from \`WebTransportDatagramsWritable::setSendGroup()\`](https://bugs.webkit.org/show_bug.cgi?id=320508) *(bugs.webkit.org)*
  > 320508 &ndash; Remove incorrect \`NODELETE\` annotation from \`WebTransportDatagramsWritable::setSendGroup()\` WebKit Bugzilla Bug 320508: Remove incorrect \`NODELETE\` annotation from \`WebTransportDatagramsWritable::setSendGroup()\` --&gt; New Browse Search+ ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17327.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5183354944225280`)*
  > \[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization Chromestatus Fri, 28...
- [\[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17849.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5183354944225280`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization 'Monica Chintala' via ...
- [\[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17863.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5183354944225280`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization Alex Russell Tue, 27 O...

## 📚 Platform Documentation & Specifications

- [WebTransportDatagramsWritable - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable) *(developer.mozilla.org)*
- [WebTransportDatagramDuplexStream: createWritable() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) *(developer.mozilla.org)*
- [WebTransportDatagramsWritable: sendOrder property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable/sendOrder) *(developer.mozilla.org)*
- [WebTransportDatagramsWritable: sendGroup property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable/sendGroup) *(developer.mozilla.org)*
- [WebTransportDatagramDuplexStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramDuplexStream) *(developer.mozilla.org)*
- [WebTransportSendGroup - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendGroup) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransportdatagramduplexstream/index.md?plain=1) *(github.com)*
- [github.com](https://github.com/mdn/content/issues/44273) *(github.com)*
- [github.com](https://github.com/w3c/webtransport/issues/610) *(github.com)*
- [WebTransport: datagrams property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/datagrams) *(developer.mozilla.org)*
- [WebTransport: createSendGroup() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/createSendGroup) *(developer.mozilla.org)*
- [createWritable should throw if the send group is from the wrong Transport object · Issue #700 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/700) *(github.com)*
- [writeDatagrams only resolves back pressure once all buffered datagrams have been sent · Issue #787 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/787) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 62 result(s) found across 12 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/5183354944225280" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport Datagram writable streams and prioritization" API` — *Core feature API query* (7 returned)
  - `"WebTransport Datagram writable streams and prioritization" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webtransportdatagramduplexstream.createwritable" OR "latency-sensitive" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport Datagram writable streams and prioritization" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport Datagram writable streams and prioritization" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `WebTransport "createWritable" ("sendOrder" OR "sendGroup") datagram` — *Finds code examples and WebIDL usage illustrating createWritable and priority order attributes on WebTransport datagram streams.* (8 returned)
  - `WebTransport datagram writable prioritization tutorial OR guide` — *Discovers developer guides and blog posts explaining how to schedule and prioritize independent datagram streams in real-time web applications.* (8 returned)
  - `"WebTransport" datagram ("Interop 2026" OR Chromium OR Chrome) "createWritable"` — *Tracks browser release notes, Interop 2026 milestone progress, and implementation announcements across vendors.* (8 returned)
  - `WebTransport ("WebTransportDatagramsWritable" OR "createWritable") site:github.com/w3c/webtransport/issues` — *Surfaces community feedback, developer sentiment, and W3C working group discussions on datagram stream multiplexing and prioritization.* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 18 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 51.1% passing (stable)*
- **Sources cited by the AI synthesis:** 10 result(s) found — **6 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 13 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5183354944225280)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5183354944225280)
- [Specification](https://www.w3.org/TR/webtransport/#datagram-writable)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/547572475)
