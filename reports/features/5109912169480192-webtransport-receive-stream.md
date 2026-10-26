# WebTransport receive stream

> **Report Week:** 2026-W44 | **Milestone:** Chrome 158 (first listed in Chrome 155) | **Category:** Enabled by default

## Overview

Adds the standardized WebTransportReceiveStream interface, a ReadableStream subclass used for incoming unidirectional streams and the readable side of bidirectional streams. Its getStats() method returns per-stream byte counters: bytesReceived reports bytes received from the network, while bytesRead reports bytes delivered to the application.

### Motivation

Incoming WebTransport streams have historically been exposed as generic ReadableStream objects in Chromium. The WebTransport specification defines a dedicated WebTransportReceiveStream subclass with stream-specific statistics.  Applications that receive large or latency-sensitive streams need to distinguish bytes received by the browser from bytes actually consumed by JavaScript. This helps diagnose application backpressure, buffering, and slow-consumer behavior. Exposing the standardized subclass also aligns the runtime type of incoming streams with the WebTransport specification and other browser engines.

## Ecosystem Status

- **Momentum:** Emerging (footprint 200 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The WebTransportReceiveStream interface formalizes incoming WebTransport streams as a dedicated ReadableStream subclass equipped with a getStats() method to monitor network reception against application consumption. Shipped by default in Chromium as an engine catch-up effort led by Microsoft contributors, it replaces generic ReadableStream instances with the standardized type defined in the W3C WebTransport specification. This upgrade solidifies cross-engine consensus, providing essential stream-level telemetry for diagnosing consumer lag and managing backpressure.

### Recommendations
- Actionable Advice: Teams deploying WebTransport should adopt feature detection for stream.getStats() using progressive enhancement to monitor unread buffer volume without risking compatibility on older browser releases. Because the interface subclasses ReadableStream, existing BYOB and default reader loops continue to operate unchanged while gaining access to granular performance diagnostics.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 42.3% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 70.1% · Safari 73%
- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://2020-01-23-dot-cr-status.appspot.com/feature/5109912169480192) *(2020-01-23-dot-cr-status.appspot.com)*
  > The \*\*\`WebTransportReceiveStream\`\*\* interface is a standardized web platform feature that subclasses \`ReadableStream\` readable\`)
- [wpt.fyi](https://wpt.fyi/results/webtransport/receive-stream-pull.https.any.serviceworker.html?run_id=5103588010622976&run_id=5146139644133376&diff=) *(wpt.fyi)*
  > \*\*Interop & Microsoft Contribution:\*\* Led by Microsoft contributors (\`vbryhider@microsoft.com\`) as part of broader WebTransport and Interop initiatives, bringing Chromium up to speed with Safari/WebKit and Firefox
- [appspot.com](https://2020-01-23-dot-cr-status.appspot.com/feature/5109912169480192/activity) *(2020-01-23-dot-cr-status.appspot.com)*
  > \*\*Potential Breaking Change:\*\* The Chromium announcement noted that while the stream remains fully readable and backwards-compatible with \`instanceof ReadableStream\`, its concrete JavaScript prototype changes constructor === ReadableStream\` need upda...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Complementary WebTransport Capabilities:\*\* The introduction of receive-stream statistics arrived alongside related WebTransport primitives—such as \`anticipatedConcurrentStreams\`, session \`draining\`, send groups/stream prioritization, and datagram i...
- [\[blink-dev\] Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17842.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport receive stream Chromestatus Wed, 21 Oct 2026 18:31:31 -0700 Contact emails \[email&#160;protected\] Explainer https:/...
- [Platform - Web documentation \| Deno Docs](https://docs.deno.com/api/web/platform) *(docs.deno.com)*
  > #getStats(): Promise&lt;WebTransportReceiveStreamStats&gt; MDN Reference · The constructor object for WebTransportReceiveStream. Instances are obtained from a WebTransport session rather than constructed directly. #prototype: WebTransportReceiveStrea...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17842.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109912169480192`)*
  > \[blink-dev\] Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport receive stream Chromestatus Wed, 21 Oct 2026 18:31:31 -0700 Contact emails \[email&#160;protected\] Explain...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/incomingUnidirectionalStreams) *(developer.mozilla.org)*
- [WebTransportReceiveStream: getStats() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream/getStats) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/webtransport) *(w3.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransportreceivestream/getstats/index.md?plain=1) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [WebTransportReceiveStreamStats: define where bytes are "received" so bytesRead &lt;= bytesReceived can be guaranteed · Issue #804 · w3c/webtransport](https://github.com/w3c/webtransport/issues/804) *(github.com)*
- [WebTransport: wpt test for WebTransportReceiveStream by chromium-wpt-export-bot · Pull Request #63745 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63745) *(github.com)*
- [Release merge\_pr\_63745 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/releases/tag/merge_pr_63745) *(github.com)*
- [WebTransport](https://www.w3.org/TR/2023/WD-webtransport-20230405) *(w3.org)*
- [WebTransport/Meetings - W3C Wiki](https://www.w3.org/wiki/WebTransport/Meetings) *(w3.org)*
- [Test https://w3c.github.io/webtransport/#webtransportreceivestream-pull-bytes by achristensen07 · Pull Request #61577 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/61577) *(github.com)*
- [WebTransport API by hamishwillee · Pull Request #26529 · mdn/content](https://github.com/mdn/content/pull/26529) *(github.com)*
- [GitHub - dacely-cloud/rwebtransport: A fully-compatible WebTransport client for Node.js, powered by Cloudflare quiche + BoringSSL via neon. · GitHub](https://github.com/dacely-cloud/rwebtransport) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 13 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5109912169480192" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c/webtransport/issues/372" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"github.com/w3c/webtransport/pull/395" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"w3c.github.io/webtransport" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"WebTransport receive stream" API` — *Core feature API query* (1 returned)
  - `"WebTransport receive stream" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"per-stream" OR "stream-specific" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport receive stream" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (5 returned)
  - `"WebTransport receive stream" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransportReceiveStream" "getStats" ("bytesReceived" OR "bytesRead")` — *Real-world JavaScript implementation examples and WebIDL usage demonstrating getStats() on WebTransport receive streams.* (8 returned)
  - `"WebTransport" "WebTransportReceiveStream" (tutorial OR guide OR backpressure)` — *Developer guides and technical tutorials explaining how to handle incoming streams, buffering, and slow-consumer backpressure.* (8 returned)
  - `"WebTransportReceiveStream" ("Intent to Ship" OR "Chrome" OR "WebKit" OR "Firefox")` — *Browser engine intent-to-ship notices, implementation milestones, and cross-browser alignment status.* (6 returned)
  - `"WebTransportReceiveStream" (site:github.com OR site:news.ycombinator.com OR site:reddit.com)` — *Community reactions, standard discussion threads, and developer feedback across GitHub repositories and tech forums.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 9 result(s) found — **4 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 17 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 42.3% passing (stable)*
- **Sources cited by the AI synthesis:** 3 result(s) found — **3 verified relevant**

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
