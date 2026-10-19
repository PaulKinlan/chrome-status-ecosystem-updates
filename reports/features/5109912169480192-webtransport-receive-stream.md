# WebTransport receive stream

> **Report Week:** 2026-W43 | **Milestone:** Chrome 155 | **Category:** In developer trial (Behind a flag)

## Overview

Adds the standardized WebTransportReceiveStream interface, a ReadableStream subclass used for incoming unidirectional streams and the readable side of bidirectional streams. Its getStats() method returns per-stream byte counters: bytesReceived reports bytes received from the network, while bytesRead reports bytes delivered to the application.

### Motivation

Incoming WebTransport streams have historically been exposed as generic ReadableStream objects in Chromium. The WebTransport specification defines a dedicated WebTransportReceiveStream subclass with stream-specific statistics.  Applications that receive large or latency-sensitive streams need to distinguish bytes received by the browser from bytes actually consumed by JavaScript. This helps diagnose application backpressure, buffering, and slow-consumer behavior. Exposing the standardized subclass also aligns the runtime type of incoming streams with the WebTransport specification and other browser engines.

## Ecosystem Status

- **Momentum:** Emerging (footprint 120 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The \`WebTransportReceiveStream\` interface brings Chromium into alignment with the W3C WebTransport specification by subclassing \`ReadableStream\` for incoming streams and exposing a dedicated \`getStats()\` method. Firefox and Safari already expose \`WebTransportReceiveStream\`, making Chromium's Developer Trial in version 155 a major milestone toward cross-browser alignment. By surfacing \`bytesReceived\` alongside \`bytesRead\`, the API gives web developers essential visibility into network transmission versus application backpressure.

### Recommendations
- Actionable Advice: Web developers should audit WebTransport stream intake code to ensure checks rely on \`instanceof ReadableStream\` rather than strict constructor comparisons (\`=== ReadableStream\`). Stream telemetry via \`getStats()\` can be safely feature-detected and used as a progressive enhancement for monitoring consumer throughput.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 45% · Edge 45% · Firefox 61.5% · Safari 42.6%; experimental: Chrome 89.9% · Edge 86% · Firefox 67.5% · Safari 74.4%
- **Chrome usage:** 0.00013% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://2020-01-23-dot-cr-status.appspot.com/feature/5109912169480192) *(2020-01-23-dot-cr-status.appspot.com)*
  > The Web Platform has introduced the standardized \*\*\`WebTransportReceiveStream\`\*\* interface This specialized \`ReadableStream\` subclass handles incoming unidirectional streams as well as the readable side of bidirectional streams within the WebTranspor...
- [Exploring the WebTransport API: A New Era of Web Communication](https://jsdev.space/webtransport-api) *(jsdev.space · 2025-01-16T00:00:00)*
  > To extract data from a unidirectional stream opened on the server, use the WebTransport.incomingUnidirectionalStreams property, which returns ReadableStream objects of WebTransportReceiveStream.
- [Platform - Web documentation \| Deno Docs](https://docs.deno.com/api/web/platform) *(docs.deno.com)*
  > #getStats(): Promise&lt;WebTransportReceiveStreamStats&gt; MDN Reference · The constructor object for WebTransportReceiveStream. Instances are obtained from a WebTransport session rather than constructed directly. #prototype: WebTransportReceiveStrea...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes) *(chromestatus.com)*
  > &lt;strong&gt;Adds the standardized WebTransportReceiveStream interface, a ReadableStream subclass used for incoming unidirectional streams and the readable side of bidirectional streams&lt;/strong&gt;.

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/webtransport) *(w3.org)*
- [WebTransport API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [WebTransportBidirectionalStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportBidirectionalStream) *(developer.mozilla.org)*
- [WebTransportReceiveStream: getStats() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream/getStats) *(developer.mozilla.org)*
- [WebTransportReceiveStreamStats: define where bytes are "received" so bytesRead &lt;= bytesReceived can be guaranteed · Issue #804 · w3c/webtransport](https://github.com/w3c/webtransport/issues/804) *(github.com)*
- [WebTransport API by hamishwillee · Pull Request #26529 · mdn/content](https://github.com/mdn/content/pull/26529) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 13 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5109912169480192" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/webtransport/issues/372" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"github.com/w3c/webtransport/pull/395" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"w3c.github.io/webtransport" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport receive stream" API` — *Core feature API query* (0 returned)
  - `"WebTransport receive stream" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"per-stream" OR "stream-specific" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport receive stream" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (7 returned)
  - `"WebTransport receive stream" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `WebTransportReceiveStream tutorial guide` — *Finds community blog posts and developer guides explaining how to use WebTransportReceiveStream.* (8 returned)
  - `WebTransportReceiveStream getStats bytesReceived bytesRead javascript example` — *Searches for real-world code snippets demonstrating the WebIDL syntax and statistics collection.* (8 returned)
  - `WebTransport incoming unidirectional streams ReadableStream subclass chrome status` — *Tracks browser support announcements, ecosystem sentiment, and standards alignment regarding WebTransportReceiveStream.* (8 returned)
  - `site:github.com w3c webtransport receive stream getStats` — *Discovers specifications, issues, and developer discussions directly from the working group repository.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 3 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 8 result(s) found — **4 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 17 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 45% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 2 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 5 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5109912169480192)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5109912169480192)
- [Specification](https://w3c.github.io/webtransport/#webtransportreceivestream)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/568317222)
