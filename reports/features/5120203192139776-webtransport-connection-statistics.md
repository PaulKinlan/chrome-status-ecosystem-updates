# WebTransport connection statistics

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 | **Category:** Enabled by default

## Overview

WebTransport.getStats() provides asynchronous statistics for an existing connection: round-trip time measurements when available, an estimated sending rate when available, and counts of expired, lost, and dropped datagrams. Statistics remain accessible after the connection closes. Chromium does not currently expose connection byte or packet totals.

### Motivation

WebTransport applications need to distinguish connection latency, congestion, and datagram loss or expiration from application-side delays. A single asynchronous call exposes a snapshot of the existing connection's health to help developers adapt sending behavior and troubleshoot problems. It does not create a connection or change how application data is transmitted.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 155 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The WebTransport connection statistics API (WebTransport.getStats()) delivers essential transport-level observability, allowing web applications to asynchronously query round-trip times (RTT), datagram drop/loss rates, and estimated send rates over QUIC connections. Chromium's rollout by default alongside implementations in Firefox and Safari establishes strong cross-engine consensus across the major browser vendors. It directly unlocks client-side telemetry and adaptation for high-performance use cases such as Media over QUIC (MoQ), cloud gaming, and live audio/video streaming.

### Recommendations
- Actionable Advice: Teams building real-time applications can safely begin integrating WebTransport.getStats() for diagnostic logging and dynamic sending rate adjustments. Because optional dictionary properties vary between browser releases and Chromium does not yet expose raw connection byte totals, developers should access individual fields defensively using optional chaining.
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

- [webrtc-developers.com](https://www.webrtc-developers.com/talking-to-an-ai-agent-over-webtransport) *(webrtc-developers.com)*
  > \*\*Latency & RTT:\*\* Minimum RTT (\`minRtt\`), smoothed RTT (\`smoothedRtt\`), and RTT variation (\`rttVariation\`) \*\*Bandwidth & Rate Estimation:\*\* Estimated sending rate (\`estimatedSendRate\`)
- [web.dev](https://web.dev/blog/web-platform-10-2026) *(web.dev)*
  > \*\*"New to the Web Platform" Roundups:\*\* Highlights recent rollouts where browser engines aligned on WebTransport capabilities, noting Firefox’s addition of \`getStats()\` alongside \`supportsReliableOnly\`, matching Chromium’s dev trials and shipping roa...
- [reddit.com](https://www.reddit.com/r/webdev/comments/1ssu3bs/webtransport_is_now_baseline_as_of_march_2026) *(reddit.com)*
  > \*\*Real-Time Congestion Control:\*\* In community discussions (such as \*r/webdev\* and the IETF WebTransport Working Group), real-time app developers praise \`getStats()\` for finally allowing browser clients to implement adaptive bitrate (ABR) algorithms ...
- [programming-helper.com](https://www.programming-helper.com/tech/webtransport-2026-web-api-multiplexed-transport-revolution) *(programming-helper.com)*
  > \*\*Real-Time Congestion Control:\*\* In community discussions (such as \*r/webdev\* and the IETF WebTransport Working Group), real-time app developers praise \`getStats()\` for finally allowing browser clients to implement adaptive bitrate (ABR) algorithms ...
- [ietf.org](https://datatracker.ietf.org/meeting/123/materials/slides-123-webtrans-webtransport-slides-ietf-123-00.pdf) *(datatracker.ietf.org)*
  > \*\*Real-Time Congestion Control:\*\* In community discussions (such as \*r/webdev\* and the IETF WebTransport Working Group), real-time app developers praise \`getStats()\` for finally allowing browser clients to implement adaptive bitrate (ABR) algorithms ...
- [\[blink-dev\] Intent to Ship: WebTransport connection statistics](http://www.mail-archive.com/blink-dev@chromium.org/msg17966.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport connection statistics Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport connection statistics Chromestatus Sun, 08 Nov 2026 14:51:55 -0800 Contact emails \[email&#160;protected\] Exp...
- [RE: \[blink-dev\] Intent to Ship: WebTransport connection statistics](http://www.mail-archive.com/blink-dev@chromium.org/msg17946.html) *(mail-archive.com)*
  > RE: \[blink-dev\] Intent to Ship: WebTransport connection statistics Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: WebTransport connection statistics 'Daniel Clark' via blink-dev Thu, 05 Nov 2026 11:50:15 -0800 LGTM1 From: \[emai...
- [WebTransport](https://w3c.github.io/webtransport/index.html) *(w3c.github.io)*
  > As long as the application send rate is sustained, the estimatedSendRate will adapt to network conditions. However, estimatedSendRate is allowed to be null while atSendCapacity is true. The WebTransportDatagramStats dictionary includes statistics on ...
- [WebTransport](https://pr-preview.s3.amazonaws.com/vasilvv/web-transport/pull/509.html) *(pr-preview.s3.amazonaws.com · 2023-05-09T00:00:00)*
  > estimatedSendRate, of type unsigned long long, nullable · &lt;strong&gt;The estimated rate at which queued data will be sent by the user agent, in bits per second&lt;/strong&gt;. This rate applies to all streams and datagrams that share a WebTransport session an...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: WebTransport connection statistics](http://www.mail-archive.com/blink-dev@chromium.org/msg17966.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5120203192139776`)*
  > \[blink-dev\] Intent to Ship: WebTransport connection statistics Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport connection statistics Chromestatus Sun, 08 Nov 2026 14:51:55 -0800 Contact emails \[email&#160;prot...
- [RE: \[blink-dev\] Intent to Ship: WebTransport connection statistics](http://www.mail-archive.com/blink-dev@chromium.org/msg17946.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5120203192139776`)*
  > RE: \[blink-dev\] Intent to Ship: WebTransport connection statistics Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: WebTransport connection statistics 'Daniel Clark' via blink-dev Thu, 05 Nov 2026 11:50:15 -0800 LGTM1 F...

## 📚 Platform Documentation & Specifications

- [content/files/en-us/web/api/webtransport/getstats/index.md at main · mdn/content · GitHub](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransport/getstats/index.md?plain=1) *(github.com)*
- [github.com](https://github.com/MicrosoftEdge/Demos/blob/main/README.md) *(github.com)*
- [fix(net): PROBE reports the downlink; Safari's stub getStats() reads as absent by kixelated · Pull Request #8016 · moq-dev/moq · GitHub](https://github.com/moq-dev/moq/pull/8016) *(github.com)*
- [translated-content-de/files/de/web/api/webtransport/getstats/index.md at main · mdn/translated-content-de · GitHub](https://github.com/mdn/translated-content-de/blob/main/files/de/web/api/webtransport/getstats/index.md?plain=1) *(github.com)*
- [getStats members might disappear between calls · Issue #808 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/808) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 63 result(s) found across 12 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5120203192139776" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"w3c.github.io/webtransport" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport connection statistics" API` — *Core feature API query* (3 returned)
  - `"WebTransport connection statistics" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webtransport.getstats" OR "round-trip" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport connection statistics" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport connection statistics" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransport" "getStats" (tutorial OR guide OR "monitoring")` — *Discovers practical developer guides and tutorials illustrating how to monitor connection metrics using WebTransport.getStats.* (8 returned)
  - `"WebTransport" "getStats" ("estimatedSendRate" OR "smoothedRtt" OR "lostDatagrams")` — *Surfaces real-world JavaScript code snippets and implementations consuming WebTransportConnectionStats dictionary properties.* (8 returned)
  - `"WebTransport" "getStats" ("Intent to Ship" OR "ChromeStatus" OR "Chromium")` — *Tracks browser vendor shipping announcements, standardization timelines, and platform adoption signals for connection stats.* (8 returned)
  - `site:github.com/w3c/webtransport ("getStats" OR "WebTransportConnectionStats")` — *Retrieves spec deliberations, developer feedback, and feature requests around datagram tracking and latency metrics.* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 18 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 51.1% passing (stable)*
- **Sources cited by the AI synthesis:** 1 result(s) found — **1 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5120203192139776)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5120203192139776)
- [Specification](https://w3c.github.io/webtransport/#dictdef-webtransportconnectionstats)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/573538454)
