# WebTransport congestion control

> **Report Week:** 2026-W45 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Adds the congestionControl constructor option and read-only attribute to WebTransport. Applications can request "default", "throughput", or "low-latency" behavior, allowing the user agent to select suitable congestion-control behavior for each session.

### Motivation

WebTransport applications have different performance requirements. Interactive applications prioritize low latency, while bulk transfers prioritize throughput. This hint lets applications express that preference without selecting or controlling a specific congestion-control algorithm.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 220 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The WebTransport congestion control feature introduces an ergonomic constructor hint and read-only reflection property allowing applications to request 'default', 'throughput', or 'low-latency' profiles without binding to specific underlying algorithms. Chromium has enabled the feature by default, building upon the broader Baseline availability of WebTransport across modern browsers. The feature provides a standardized, additive way to adapt QUIC transport behaviors to interactive gaming, media streaming, or bulk-data workloads.

### Recommendations
- Actionable Advice: Teams can safely pass the \`congestionControl\` option to the \`WebTransport\` constructor today as a progressive enhancement, as non-supporting engines will cleanly ignore unknown dictionary keys. Production applications requiring low-latency guarantees should check \`transport.congestionControl\` after initialization to detect whether the user agent honored the request or reverted to \`'default'\`.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @larseggert: "CC @jesup @omansfeld @mxinden..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [WebTransport congestion control option and attribute](https://github.com/WebKit/standards-positions/issues/734) [open]
- **Mozilla:** [WebTransport congestion control option and attribute](https://github.com/mozilla/standards-positions/issues/1472) [open]

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 43.1% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 78.8% · Safari 73%
- **Chrome usage:** 0.00016% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [google.com](https://issuetracker.google.com/501268547) *(issuetracker.google.com)*
  > Cubic) to avoid coupling the web API to ephemeral transport implementations congestionControl\` getter reports what the browser actually honored, returning \`"default"\` if the browser or platform network layer could not satisfy the requested preference
- [chromestatus.com](https://chromestatus.com/feature/5180947573112832/activity) *(chromestatus.com)*
  > Authored and shepherded through Chromium by Microsoft and Google contributors Details how the effective algorithm is reported in tools like Chrome's \`NetLog\` and JavaScript console
- [WebTransport Explained: vs WebRTC, WHIP and MoQ in 2026](https://www.forasoft.com/learn/video-streaming/articles-streaming/webtransport-whip) *(forasoft.com)*
  > \*\*Sources:\*\* Real-time media developer blogs and GitHub Interop discussions \*\*Replacing WebRTC Data Channels:\*\* Developers building media-over-QUIC (MoQ) architectures and low-latency streaming tools have cited congestion control hinting as the missi...
- [How to use WebTransport  \|  Capabilities  \|  Chrome for Developers](https://developer.chrome.com/docs/capabilities/web-apis/webtransport) *(developer.chrome.com)*
  > \*\*Low-Latency Gaming & Live Video:\*\* Tutorials emphasize that setting \`"low-latency"\` enables interactive applications to shed buffered packets or receive early packet backpressure instead of allowing high sender-side queueing
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17748.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Mike Taylor Thu, 15 Oct 2026 10:13:09 -0700 On 10/14/26 6:45 p.m., Chromestatus wrot...
- [\[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17735.html) *(mail-archive.com)*
  > Blink component Blink&gt;Network&gt;WebTransport Web Feature ID webtransport Motivation WebTransport applications have different performance requirements. Interactive applications prioritize low latency, while bulk transfers prioritize throughput. Th...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17750.html) *(mail-archive.com)*
  > The shared WPT passes in all three engines, but it intentionally permits fallback to &quot;default&quot; and therefore tests API interoperability rather than the underlying congestion-control behavior. On Thursday, October 15, 2026 at 10:13:21 AM UTC...
- [How to Implement WebTransport API using JS?](https://www.videosdk.live/developer-hub/webtransport/webtransport-api) *(videosdk.live)*
  > When creating streams, developers can pass a congestion control hint requesting either throughput-oriented or low-latency behavior. Low-latency mode tells the stack to prioritize timely delivery over maximizing bandwidth, which suits interactive traf...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17846.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; \*Adoption plan\* &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; Adoption is expected to happen organically through existing &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; WebTransport applications ...
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > Adds the congestionControl constructor option and read-only attribute to WebTransport.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17748.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Mike Taylor Thu, 15 Oct 2026 10:13:09 -0700 On 10/14/26 6:45 p.m., Chromes...

## 📚 Platform Documentation & Specifications

- [WebTransport: congestionControl property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/congestionControl) *(developer.mozilla.org)*
- [WebTransport congestion control option and attribute · Issue #734 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/734) *(github.com)*
- [WebTransport: WebTransport() constructor - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/WebTransport) *(developer.mozilla.org)*
- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [github.com](https://github.com/w3c/webtransport/issues/365) *(github.com)*
- [github.com](https://github.com/web-platform-tests/interop/issues/816) *(github.com)*
- [WebTransport congestion control option and attribute · Issue #1472 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1472) *(github.com)*
- [WebTransport](https://www.w3.org/TR/2023/WD-webtransport-20230405) *(w3.org)*
- [MDN doc updates: CSS selectors & media queries, WebGPU & WebTransport APIs, Progressive web apps \| MDN Blog](https://developer.mozilla.org/en-US/blog/mdn-docs-june-2023) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 69 result(s) found across 12 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/5180947573112832" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport congestion control" API` — *Core feature API query* (4 returned)
  - `"WebTransport congestion control" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"read-only" OR "low-latency" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport congestion control" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport congestion control" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"WebTransport" "congestionControl" tutorial OR guide OR "low-latency"` — *Find practical developer guides and tutorials explaining how to use the congestionControl option in WebTransport.* (8 returned)
  - `"new WebTransport" "congestionControl" "throughput" OR "low-latency"` — *Find JavaScript code examples and API usage pattern for instantiating WebTransport with congestionControl options.* (8 returned)
  - `"WebTransport" "congestionControl" site:chromestatus.com OR site:developer.mozilla.org OR "intent to ship"` — *Discover browser support status, Intent to Ship announcements, and implementation details across web engines.* (8 returned)
  - `"WebTransport" "congestionControl" site:github.com/w3c/webtransport OR site:news.ycombinator.com OR site:reddit.com` — *Find community discussions, spec issue threads, and feedback regarding WebTransport congestion control hints.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 18 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 43.1% passing (stable)*
- **Sources cited by the AI synthesis:** 4 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5180947573112832)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5180947573112832)
- [Specification](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-congestioncontrol)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/501268547)
