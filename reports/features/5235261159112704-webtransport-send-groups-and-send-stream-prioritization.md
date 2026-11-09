# WebTransport send groups and send-stream prioritization

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 | **Category:** Enabled by default

## Overview

WebTransport already lets sites send data through WritableStreams. This feature lets applications assign outgoing streams to send groups and use sendOrder to prioritize streams within each group. It also provides sending statistics for streams and groups while preserving WritableStream transfer behavior.

### Motivation

Real-time applications often send multiple independent flows over one WebTransport session. When those flows compete for bandwidth, applications need to keep one flow from dominating while deciding which streams within each flow should go first. They also need visibility into sending progress so they can understand how those flows are performing.

## Ecosystem Status

- **Momentum:** Moderate (+120 points since 2026-10-12; footprint 290 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** WebTransport send groups and send-stream prioritization address a critical multiplexing bottleneck by providing fair-share bandwidth allocation across groups alongside strict numeric sendOrder scheduling within groups. Standardized through the W3C WebTransport Working Group, this API is essential for advanced architectures such as Media over QUIC (MoQ) and high-frequency multiplayer gaming. With Chromium enabling the feature by default in Chrome 159 and Firefox adding support, the platform is moving toward deterministic transport scheduling.

### Recommendations
- Actionable Advice: Teams implementing low-latency media or game state synchronization should adopt createSendGroup() and sendOrder via progressive enhancement by checking for the method on the WebTransport prototype. Applications must retain fallback scheduling at the application layer or graceful degradation to standard unprioritized streams where full send-group support has not yet shipped.
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

- [WebTransport: A new way to communicate over HTTP/3 \| by Queens Kisivuli \| Medium](https://medium.com/@queenskisivuli/webtransport-a-new-way-to-communicate-over-http-3-a730a8c84790) *(medium.com)*
  > \*\*WebTransport send groups and send-stream prioritization\*\* enhances the WebTransport API by giving web applications fine-grained control over how outgoing data is multiplexed and scheduled across an HTTP/3 (QUIC) connection
- [appspot.com](https://cr-status.appspot.com/feature/5183354944225280) *(cr-status.appspot.com)*
  > The order is mutable and can be changed dynamically at runtime \*\*Motivation & Impact\*\*: Chrome’s dev team noted that while \`WritableStream\` previously allowed data transmission, implementations determined stream scheduling arbitrarily
- [chromestatus.com](https://chromestatus.com/release-notes/159) *(chromestatus.com)*
  > \*\*Chromium Feature Entry & Release Notes\*\*: Chrome introduced \*\*WebTransport send groups and send-stream prioritization\*\* as part of a broader suite of WebTransport updates (alongside \*Datagram writable streams and prioritization\*, \*receive stream by...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Chromium Feature Entry & Release Notes\*\*: Chrome introduced \*\*WebTransport send groups and send-stream prioritization\*\* as part of a broader suite of WebTransport updates (alongside \*Datagram writable streams and prioritization\*, \*receive stream by...
- [How to use WebTransport  \|  Capabilities  \|  Chrome for Developers](https://developer.chrome.com/docs/capabilities/web-apis/webtransport) *(developer.chrome.com)*
  > Applications such as multiplayer web games, remote desktop/interaction systems, and live media pipelines needed a standard browser-level way to prioritize critical control packets or audio streams ahead of lower-priority background bulk transfers
- [openpwa.net](https://openpwa.net/reference/capabilities/webtransport) *(openpwa.net)*
  > Without browser-level send-stream prioritization, applications risked head-of-line blocking or were forced to terminate streams prematurely to prioritize urgent data Unlike WebSockets (which suffer from TCP head-of-line blocking and cannot interleave...
- [What is WebTransport and How Does it Work?](https://www.pubnub.com/guides/webtransport) *(pubnub.com)*
  > Developer blogs and networking platforms (such as PubNub and Ably) highlighting WebTransport comparisons against WebSockets and WebRTC frequently emphasize stream multiplexing and prioritization as the decisive architectural advantage of HTTP/3
- [ably.com](https://ably.com/blog/can-webtransport-replace-websockets) *(ably.com)*
  > Developer blogs and networking platforms (such as PubNub and Ably) highlighting WebTransport comparisons against WebSockets and WebRTC frequently emphasize stream multiplexing and prioritization as the decisive architectural advantage of HTTP/3 Unlik...
- [chromestatus.com](https://chromestatus.com/feature/4854144902889472) *(chromestatus.com)*
  > Unlike WebSockets (which suffer from TCP head-of-line blocking and cannot interleave prioritized traffic on a single connection) or WebRTC DataChannels (which are complex to manage at client-server scale), WebTransport with send groups provides a pre...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17913.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization Philip Jägenstedt Mon, 02 No...
- [\[blink-dev\] Intent to Ship: WebTransport send groups and send-stream prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17894.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport send groups and send-stream prioritization Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport send groups and send-stream prioritization Chromestatus Wed, 28 Oct 2026 16:34:38 -0700...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17940.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization Alex Russell Wed, 04 Nov 202...
- [\[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17905.html) *(mail-archive.com)*
  > &gt; Low. This is an additive API on existing WebTransport streams and does not &gt; change connection establishment or network behavior. &gt; &gt; &gt; \*Debuggability\* &gt; The stream&#x27;s sendGroup and sendOrder values are directly observable fro...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17961.html) *(mail-archive.com)*
  > &gt;&gt;&gt; Low. This is an additive API on existing WebTransport streams and does &gt;&gt;&gt; not change connection establishment or network behavior. &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; \*Debuggability\* &gt;&gt;&gt; The stream&#x27;s sendGroup ...
- [WebTransport](https://w3c.github.io/webtransport/index.html) *(w3c.github.io)*
  > &lt;strong&gt;WebTransportSendStreams can, at their creation or through assignment of their sendGroup attribute, be grouped under at most one WebTransportSendGroup at any time&lt;/strong&gt;. By default, they are ungrouped. The user agent considers WebTransportS...
- [BaseWatch — Track CSS & Browser Feature Support, Get Baseline Alerts](https://basewatch.dev/feature/mdn-api_WebTransport_createSendGroup) *(basewatch.dev)*
  > BaseWatch — Track CSS & Browser Feature Support, Get Baseline Alerts Edit with

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17913.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5235261159112704`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization Philip Jägenstedt ...
- [\[blink-dev\] Intent to Ship: WebTransport send groups and send-stream prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17894.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5235261159112704`)*
  > \[blink-dev\] Intent to Ship: WebTransport send groups and send-stream prioritization Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport send groups and send-stream prioritization Chromestatus Wed, 28 Oct 2026 16:3...
- [WebTransport stream/send group getStats(): mark partial implementations by hamishwillee · Pull Request #31011 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/31011) *(github.com)* *(Cites: `https://chromestatus.com/feature/5235261159112704`)*
  > WebTransport stream/send group getStats(): mark partial implementations by hamishwillee · Pull Request #31011 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17940.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5235261159112704`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization Alex Russell Wed, ...

## 📚 Platform Documentation & Specifications

- [WebTransportSendGroup - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendGroup) *(developer.mozilla.org)*
- [WebTransport: createSendGroup() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/createSendGroup) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendStream/sendOrder) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendStream) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendGroup/getStats) *(developer.mozilla.org)*
- [github.com](https://github.com/w3c/webtransport/issues/515) *(github.com)*
- [github.com](https://github.com/hyperium/h3/issues/197) *(github.com)*
- [WebTransport stream/send group getStats(): mark partial implementations by hamishwillee · Pull Request #31011 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/31011) *(github.com)*
- [WebTransportSendStream: sendGroup property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendStream/sendGroup) *(developer.mozilla.org)*
- [Retransmissions and send order · Issue #523 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/523) *(github.com)*
- [WPT tests are needed for sendOrder · Issue #516 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/516) *(github.com)*
- [Support minimal prioritization necessary to enable IETF MoQ base streaming protocol · Issue #431 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/431) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 12 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/5235261159112704" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport send groups and send-stream prioritization" API` — *Core feature API query* (5 returned)
  - `"WebTransport send groups and send-stream prioritization" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"send-stream" OR "real-time" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport send groups and send-stream prioritization" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport send groups and send-stream prioritization" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"WebTransport" ("sendOrder" OR "send group" OR "sendGroup") (tutorial OR guide OR "how to")` — *Finds developer tutorials, architecture guides, and practical walkthroughs on WebTransport stream prioritization.* (8 returned)
  - `WebTransport ("sendGroup" OR "createSendGroup" OR "sendOrder") "createSendStream"` — *Discovers real-world JavaScript code snippets and API calls configuring WebTransport send groups and stream priorities.* (0 returned)
  - `"WebTransport" ("send groups" OR "send-stream prioritization") ("Intent to Ship" OR ChromeStatus OR Chromium OR Safari)` — *Tracks browser vendor release notes, engine status updates, and implementation milestones across Chromium and WebKit.* (8 returned)
  - `site:github.com/w3c/webtransport ("sendOrder" OR "send group") (issue OR "pull request")` — *Surfaces specification debates, developer feedback, and design consensus within the W3C WebTransport working group repository.* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 18 result(s) found — **17 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 18 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 51.1% passing (stable)*
- **Sources cited by the AI synthesis:** 7 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 3 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 12 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5235261159112704)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5235261159112704)
- [Specification](https://www.w3.org/TR/webtransport/#webtransportsendstream)
- [Chromium Tracking Bug](https://crbug.com/568825278)
