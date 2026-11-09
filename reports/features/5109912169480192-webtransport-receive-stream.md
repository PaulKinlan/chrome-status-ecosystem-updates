# WebTransport receive stream

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 (first listed in Chrome 155) | **Category:** Enabled by default

## Overview

Adds the standardized WebTransportReceiveStream interface, a ReadableStream subclass used for incoming unidirectional streams and the readable side of bidirectional streams. Its getStats() method returns per-stream byte counters: bytesReceived reports bytes received from the network, while bytesRead reports bytes delivered to the application.

### Motivation

Incoming WebTransport streams have historically been exposed as generic ReadableStream objects in Chromium. The WebTransport specification defines a dedicated WebTransportReceiveStream subclass with stream-specific statistics.  Applications that receive large or latency-sensitive streams need to distinguish bytes received by the browser from bytes actually consumed by JavaScript. This helps diagnose application backpressure, buffering, and slow-consumer behavior. Exposing the standardized subclass also aligns the runtime type of incoming streams with the WebTransport specification and other browser engines.

## Ecosystem Status

- **Momentum:** Emerging (+60 points since 2026-10-12; footprint 180 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The WebTransportReceiveStream interface standardizes incoming WebTransport unidirectional and bidirectional streams into a specialized ReadableStream subclass equipped with a stream-level getStats() method. This closes a key observability gap by exposing per-stream network counters (bytesReceived) alongside application-consumed counters (bytesRead) to identify reader bottlenecks and buffer bloat. With Chromium aligning with Safari and the W3C specification, and Firefox actively resolving test compliance, cross-engine interoperability for multiplexed transport diagnostics is rapidly stabilizing.

### Recommendations
- Actionable Advice: Teams utilizing WebTransport should adopt getStats() via progressive enhancement by feature-detecting the method on incoming stream readers to monitor client-side backpressure. Applications can safely offload these streams to Web Workers while continuing to support base ReadableStream fallback behavior on older engine runtimes.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%
- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img592-dot-cr-status.appspot.com/feature/5109912169480192) *(img592-dot-cr-status.appspot.com)*
  > The \*\*\`WebTransportReceiveStream\`\*\* interface is a specialized \`ReadableStream\` subclass defined in the W3C WebTransport specification Its key addition over a generic \`ReadableStream\` is the \*\*\`getStats()\`\*\* method
- [chromestatus.com](https://chromestatus.com/feature/5120203192139776) *(chromestatus.com)*
  > Discussions within developer tooling communities (such as the \*WebRTC-Inspector\* project and Chromium dev-tools trackers) highlight that while connection-level stats (\`WebTransport.getStats()\`) provide RTT and datagram packet loss, they fall short fo...
- [\[blink-dev\] Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17842.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport receive stream Chromestatus Wed, 21 Oct 2026 18:31:31 -0700 Contact emails \[email&#160;protected\] Explainer https:/...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17874.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Chris Harrelson Tue, 27 Oct 2026 22:20:40 -0700 LGTM2 On Tue, Oct 27, 2026 at 7:03 P...
- [\[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17862.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Alex Russell Tue, 27 Oct 2026 12:04:03 -0700 LGTM1; love to see these practical additions! O...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17896.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Mike Taylor Wed, 28 Oct 2026 19:46:04 -0700 LGTM3 On 10/28/26 5:20 a.m., Chris Harre...
- [Exploring the WebTransport API: A New Era of Web Communication](https://jsdev.space/webtransport-api) *(jsdev.space · 2025-01-16T00:00:00)*
  > This stream contains readable and writable properties that provide references to instances of WebTransportReceiveStream and WebTransportSendStream. These can be used for reading data received from the server and sending data to the server, respective...
- [Platform - Web documentation \| Deno Docs](https://docs.deno.com/api/web/platform) *(docs.deno.com)*
  > #getStats(): Promise&lt;WebTransportReceiveStreamStats&gt; MDN Reference · The constructor object for WebTransportReceiveStream. Instances are obtained from a WebTransport session rather than constructed directly. #prototype: WebTransportReceiveStrea...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17842.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109912169480192`)*
  > \[blink-dev\] Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport receive stream Chromestatus Wed, 21 Oct 2026 18:31:31 -0700 Contact emails \[email&#160;protected\] Explain...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17874.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109912169480192`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Chris Harrelson Tue, 27 Oct 2026 22:20:40 -0700 LGTM2 On Tue, Oct 27, 2026...
- [\[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17862.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109912169480192`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Alex Russell Tue, 27 Oct 2026 12:04:03 -0700 LGTM1; love to see these practical ad...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17896.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109912169480192`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Mike Taylor Wed, 28 Oct 2026 19:46:04 -0700 LGTM3 On 10/28/26 5:20 a.m., C...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransportreceivestream/index.md?plain=1) *(github.com)*
- [WebTransportReceiveStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream) *(developer.mozilla.org)*
- [WebTransportReceiveStream: getStats() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream/getStats) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/2023/WD-webtransport-20230405) *(w3.org)*
- [WebTransportBidirectionalStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportBidirectionalStream) *(developer.mozilla.org)*
- [WebTransport: incomingUnidirectionalStreams property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/incomingUnidirectionalStreams) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/2021/WD-webtransport-20210504) *(w3.org)*
- [WebTransport/Meetings - W3C Wiki](https://www.w3.org/wiki/WebTransport/Meetings) *(w3.org)*
- [WebTransport: wpt test for WebTransportReceiveStream by chromium-wpt-export-bot · Pull Request #63745 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/63745) *(github.com)*
- [content/files/en-us/web/api/webtransportreceivestream/getstats/index.md at main · mdn/content · GitHub](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransportreceivestream/getstats/index.md?plain=1) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 66 result(s) found across 14 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5109912169480192" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/w3c/webtransport/issues/372" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"github.com/w3c/webtransport/pull/395" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"w3c.github.io/webtransport" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport receive stream" API` — *Core feature API query* (4 returned)
  - `"WebTransport receive stream" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"per-stream" OR "stream-specific" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport receive stream" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport receive stream" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransportReceiveStream" "getStats" ("bytesReceived" OR "bytesRead")` — *Finds code snippets and API usage patterns demonstrating WebTransportReceiveStream's getStats method to track stream metrics.* (8 returned)
  - `"WebTransportReceiveStream" ("incomingBidirectionalStreams" OR "incomingUnidirectionalStreams") (tutorial OR guide OR "how to")` — *Searches for developer guides and tutorials covering consumption of incoming unidirectional and bidirectional WebTransport streams.* (8 returned)
  - `"WebTransportReceiveStream" ("Intent to Ship" OR "Chrome Platform Status" OR "Chromium" OR "WebKit")` — *Tracks browser vendor release notes, engine status entries, and intents to ship the standardized receive stream subclass.* (8 returned)
  - `"WebTransportReceiveStream" ("backpressure" OR "slow consumer") site:github.com` — *Surfaces community discussions, architectural feedback, and issues around handling stream backpressure using WebTransportReceiveStream.* (8 returned)
  - `"WebTransportReceiveStream" "ReadableStream" ("getReader" OR "pipeThrough" OR "pipeTo")` — *Discovers real-world JavaScript examples showing how WebTransportReceiveStream integrates with standard Web Streams API pipelines.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 8 result(s) found — **3 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 18 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 51.1% passing (stable)*
- **Sources cited by the AI synthesis:** 4 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 2 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5109912169480192)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5109912169480192)
- [Specification](https://w3c.github.io/webtransport/#webtransportreceivestream)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/568317222)
