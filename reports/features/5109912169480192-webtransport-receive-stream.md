# WebTransport receive stream

> **Report Week:** 2026-W42 | **Milestone:** Chrome 155 | **Category:** In developer trial (Behind a flag)

## Overview

Adds the standardized WebTransportReceiveStream interface, a ReadableStream subclass used for incoming unidirectional streams and the readable side of bidirectional streams. Its getStats() method returns per-stream byte counters: bytesReceived reports bytes received from the network, while bytesRead reports bytes delivered to the application.

### Motivation

Incoming WebTransport streams have historically been exposed as generic ReadableStream objects in Chromium. The WebTransport specification defines a dedicated WebTransportReceiveStream subclass with stream-specific statistics.  Applications that receive large or latency-sensitive streams need to distinguish bytes received by the browser from bytes actually consumed by JavaScript. This helps diagnose application backpressure, buffering, and slow-consumer behavior. Exposing the standardized subclass also aligns the runtime type of incoming streams with the WebTransport specification and other browser engines.

## Ecosystem Status

- **Momentum:** Emerging (footprint 120 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The WebTransportReceiveStream interface formalizes incoming WebTransport streams as a dedicated ReadableStream subclass, replacing generic stream wrappers and introducing per-stream telemetry through getStats(). By exposing bytesReceived alongside bytesRead, it enables real-time web applications to distinguish network arrival from JavaScript consumption and pinpoint backpressure bottlenecks. The feature aligns runtime stream types with the W3C specification across engines, with Chromium currently validating the change behind a developer flag in Chrome 155.

### Recommendations
- Actionable Advice: Teams should treat stream.getStats() as a progressive enhancement by feature-detecting the method before querying per-stream counters to monitor queue health. Additionally, audits should ensure existing reader pipelines do not rely on fragile type assumptions that could break when incoming streams transition from base ReadableStream objects to the WebTransportReceiveStream subclass.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 48.6% · Edge 48.6% · Firefox 67.6% · Safari 44.8%; experimental: Chrome 92.4% · Edge 87.6% · Firefox 63.8% · Safari 80%
- **Chrome usage:** 0.000088% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img536-dot-cr-status.appspot.com/feature/5109912169480192) *(img536-dot-cr-status.appspot.com)*
  > \*\*\`WebTransportReceiveStream\`\*\* is a standardized subclass of \`ReadableStream\` designed specifically for incoming unidirectional WebTransport streams and the readable side of incoming bidirectional streams Historically in Chromium, incoming WebTransp...
- [chromestatus.com](https://chromestatus.com/feature/5109912169480192/activity) *(chromestatus.com)*
  > Exposing \`getStats()\` per stream snapshot provides this telemetry without introducing synchronous overhead
- [How to use WebTransport \| Capabilities \| Chrome for Developers](https://developer.chrome.com/docs/capabilities/web-apis/webtransport) *(developer.chrome.com)*
  > incomingUnidirectionalStreams\`, which yields instances of \`WebTransportReceiveStream\` \* \*\*Streaming Mechanics:\*\* Highlights how WebTransport avoids head-of-line blocking across independent streams and relies on the standard Streams API backpressure m...
- [Platform - Web documentation \| Deno Docs](https://docs.deno.com/api/web/platform) *(docs.deno.com)*
  > #getStats(): Promise&lt;WebTransportReceiveStreamStats&gt; MDN Reference · The constructor object for WebTransportReceiveStream. Instances are obtained from a WebTransport session rather than constructed directly. #prototype: WebTransportReceiveStrea...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com · 2026-10-06T13:24:25)*
  > Adds the standardized ... returns per-stream byte counters: &lt;strong&gt;bytesReceived reports bytes received from the network, while bytesRead reports bytes delivered to the application&lt;/strong&gt;....
- [320390 &ndash; Implement WebTransportReceiveStream pull bytes algorithm](https://bugs.webkit.org/show_bug.cgi?id=320390) *(bugs.webkit.org)*
  > 320390 &ndash; Implement WebTransportReceiveStream pull bytes algorithm WebKit Bugzilla Bug 320390: Implement WebTransportReceiveStream pull bytes algorithm --&gt; New Browse Search+ Log In &times; Sign in with GitHub or Remember my login Create Account...

## 📚 Platform Documentation & Specifications

- [WebTransportReceiveStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream) *(developer.mozilla.org)*
- [w3.org](https://www.w3.org/TR/webtransport) *(w3.org)*
- [mozilla.org](https://developer.mozilla.org/de/docs/Web/API/WebTransportReceiveStream/getStats) *(developer.mozilla.org)*
- [WebTransportReceiveStream: getStats() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream/getStats) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/2023/WD-webtransport-20230405) *(w3.org)*
- [WebTransport/Meetings - W3C Wiki](https://www.w3.org/wiki/WebTransport/Meetings) *(w3.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 55 result(s) found across 13 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/5109912169480192" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/webtransport/issues/372" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"github.com/w3c/webtransport/pull/395" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"w3c.github.io/webtransport" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"WebTransport receive stream" API` — *Core feature API query* (0 returned)
  - `"WebTransport receive stream" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"per-stream" OR "stream-specific" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport receive stream" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (5 returned)
  - `"WebTransport receive stream" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransportReceiveStream" (guide OR tutorial OR example) "WebTransport"` — *Discovers practical tutorials, blog guides, and walkthroughs explaining the WebTransportReceiveStream API.* (8 returned)
  - `"WebTransportReceiveStream" "getStats()" ("bytesReceived" OR "bytesRead")` — *Finds technical code snippets and WebIDL implementations leveraging stream-level getStats metrics for tracking backpressure.* (8 returned)
  - `"WebTransportReceiveStream" ("Intent to Ship" OR "Chrome Platform Status" OR "support")` — *Tracks browser vendor release notes, standardization milestones, and Intent to Ship signals across Chromium and other engines.* (8 returned)
  - `site:github.com/w3c/webtransport ("WebTransportReceiveStream" OR "bytesRead")` — *Surfaces specification debates, issue discussions, and developer feedback directly within the W3C WebTransport repository.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 7 result(s) found — **3 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 16 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 48.6% passing (stable)*
- **Sources cited by the AI synthesis:** 4 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 2 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5109912169480192)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5109912169480192)
- [Specification](https://w3c.github.io/webtransport/#webtransportreceivestream)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/568317222)
