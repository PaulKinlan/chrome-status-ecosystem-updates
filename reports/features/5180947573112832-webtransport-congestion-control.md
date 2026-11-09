# WebTransport congestion control

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 | **Category:** Enabled by default

## Overview

Adds the congestionControl constructor option and read-only attribute to WebTransport. Applications can request "default", "throughput", or "low-latency" behavior, allowing the user agent to select suitable congestion-control behavior for each session.

### Motivation

WebTransport applications have different performance requirements. Interactive applications prioritize low latency, while bulk transfers prioritize throughput. This hint lets applications express that preference without selecting or controlling a specific congestion-control algorithm.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 310 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** The WebTransport congestion control API introduces declarative application-level hints ('default', 'throughput', and 'low-latency') to allow underlying QUIC transports to balance bandwidth against queueing delay. With Firefox and Safari having established early support, Chromium's shipping rollout in Chrome 159 completes baseline interoperability across all major browser engines. Standard consensus is unified around high-level intent hints that avoid brittle algorithm lock-in, granting engines the autonomy to tune QUIC implementations dynamically.

### Recommendations
- Actionable Advice: Teams should adopt the \`congestionControl\` constructor option today as progressive enhancement for latency-sensitive WebTransport connections. Because non-supporting engines or fallback environments simply treat unknown options gracefully or default to standard transport heuristics, there is zero risk of regression.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @larseggert: "CC @jesup @omansfeld @mxinden..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [WebTransport congestion control option and attribute](https://github.com/WebKit/standards-positions/issues/734) [open]
- **Mozilla:** [WebTransport congestion control option and attribute](https://github.com/mozilla/standards-positions/issues/1472) [open]

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%
- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5180947573112832/activity) *(chromestatus.com)*
  > This preserves browser autonomy and avoids interoperability lock-in \*\*Design Considerations:\*\* The Chromium intent notes minimal compatibility and security risks
- [WebTransport Explained: vs WebRTC, WHIP and MoQ in 2026](https://www.forasoft.com/learn/video-streaming/articles-streaming/webtransport-whip) *(forasoft.com)*
  > In the W3C Candidate Recommendation snapshot, \`congestionControl\` is formally specified under \`WebTransportOptions\` \*\*Media over QUIC (MoQ) & Real-Time Audio/Video:\*\* Developer ecosystems working on emerging protocols like Media over QUIC and WebCode...
- [chromium.org](https://issues.chromium.org/issues/435589295) *(issues.chromium.org)*
  > \*\*Media over QUIC (MoQ) & Real-Time Audio/Video:\*\* Developer ecosystems working on emerging protocols like Media over QUIC and WebCodecs pipelines highlight congestion control hinting as a critical missing piece
- [openpwa.net](https://openpwa.net/reference/capabilities/webtransport) *(openpwa.net)*
  > \*\*Developer Recommendation:\*\* Because \`congestionControl\` is an additive hint, developers can safely include it today; unsupported browsers will simply ignore the option or return \`"default"\` while establishing standard HTTP/3 sessions
- [\[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17735.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport congestion control Chromestatus Wed, 14 Oct 2026 22:53:52 -0700 Contact emails \[email&#160;protected\] Explainer...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17748.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Mike Taylor Thu, 15 Oct 2026 10:13:09 -0700 On 10/14/26 6:45 p.m., Chromestatus wrot...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17785.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control 'Monica Chintala' via blink-dev Mon, 19 Oct 2026 13:01:09 -0700 Thank you all. I’ve ...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17784.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control 'Dan Clark' via blink-dev Mon, 19 Oct 2026 11:44:45 -0700 LGTM2 On Monday, October 1...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17750.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control 'Monica Chintala' via blink-dev Thu, 15 Oct 2026 11:41:47 -0700 Thanks, the existing...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17783.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Alex Russell Mon, 19 Oct 2026 11:30:39 -0700 Can we update the positions of other br...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17888.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Daniel Bratell Wed, 28 Oct 2026 08:28:31 -0700 LGTM3 /Daniel On 2026-10-28 16:23, Ph...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17857.html) *(mail-archive.com)*
  > The shared WPT passes in all three engines, &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; but it &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; intentionally permits fallback to &quot;default&quot; and therefore tests API &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; interoperability rathe...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17789.html) *(mail-archive.com)*
  > The shared WPT passes in all three engines, but it &gt;&gt;&gt;&gt; intentionally permits fallback to &quot;default&quot; and therefore tests API &gt;&gt;&gt;&gt; interoperability rather than the underlying congestion-control behavior. &gt;&gt;&gt;&g...
- [How to Implement WebTransport API using JS?](https://www.videosdk.live/developer-hub/webtransport/webtransport-api) *(videosdk.live)*
  > When creating streams, developers can pass a congestion control hint requesting either throughput-oriented or low-latency behavior. Low-latency mode tells the stack to prioritize timely delivery over maximizing bandwidth, which suits interactive traf...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17846.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; \*Adoption plan\* &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; Adoption is expected to happen organically through existing &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; WebTransport applications ...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17804.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt; \*Adoption plan\* &gt;&gt;&gt;&gt;&gt;&gt;&gt; Adoption is expected to happen organically through existing &gt;&gt;&gt;&gt;&gt;&gt;&gt; WebTransport applications and documentation.
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17790.html) *(mail-archive.com)*
  > diagnose connection behavior &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \*Will this feature be supported on all six Blink platforms (Windows, &gt;&gt;&gt;&gt;&gt;&gt; Mac, Linux, ChromeOS, Android, and Android WebView)?\* &gt;&gt;&gt;&gt;&gt;&gt...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17844.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; \*Adoption plan\* &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; Adoption is expected to happen organically through existing &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; WebTransport applications and documentatio...
- [minutes-115-webtrans-202211101300-00](https://datatracker.ietf.org/meeting/115/materials/minutes-115-webtrans-202211101300-00) *(datatracker.ietf.org)*
  > WL: The problem is that the congestion control algorithms currently built into QUIC (and WebTransport) implementations (such as NewReno and BBRv1) are not friendly to applications desiring low-latency. So the application may need to calculate the app...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17847.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; On Thursday, ...congestioncontrol &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; \*Summary\* &gt;&gt;&...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17845.html) *(mail-archive.com)*
  > Existing DevTools networking, NetLog, &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; and &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; QUIC logging can diagnose connection behavior &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; \*Will this fea...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17735.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport congestion control Chromestatus Wed, 14 Oct 2026 22:53:52 -0700 Contact emails \[email&#160;protected\]...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17748.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Mike Taylor Thu, 15 Oct 2026 10:13:09 -0700 On 10/14/26 6:45 p.m., Chromes...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17785.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control 'Monica Chintala' via blink-dev Mon, 19 Oct 2026 13:01:09 -0700 Thank you ...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17784.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control 'Dan Clark' via blink-dev Mon, 19 Oct 2026 11:44:45 -0700 LGTM2 On Monday,...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17750.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control 'Monica Chintala' via blink-dev Thu, 15 Oct 2026 11:41:47 -0700 Thanks, th...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17783.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Alex Russell Mon, 19 Oct 2026 11:30:39 -0700 Can we update the positions o...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17888.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Daniel Bratell Wed, 28 Oct 2026 08:28:31 -0700 LGTM3 /Daniel On 2026-10-28...

## 📚 Platform Documentation & Specifications

- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [WebTransport congestion control option and attribute · Issue #1472 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1472) *(github.com)*
- [WebTransport congestion control option and attribute · Issue #734 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/734) *(github.com)*
- [github.com](https://github.com/zoharbabin/webrtc-inspector/issues/95) *(github.com)*
- [WebTransport: congestionControl property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/congestionControl) *(developer.mozilla.org)*
- [WebTransport: WebTransport() constructor - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/WebTransport) *(developer.mozilla.org)*
- [WebTransport/Meetings - W3C Wiki](https://www.w3.org/wiki/WebTransport/Meetings) *(w3.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 62 result(s) found across 12 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/5180947573112832" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (7 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport congestion control" API` — *Core feature API query* (8 returned)
  - `"WebTransport congestion control" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"read-only" OR "low-latency" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport congestion control" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport congestion control" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (4 returned)
  - `"new WebTransport" "congestionControl" ("throughput" OR "low-latency")` — *Finds concrete JavaScript code examples instantiating WebTransport with congestionControl options.* (8 returned)
  - `"WebTransport" "congestionControl" (tutorial OR guide OR "how to")` — *Discovers developer tutorials, practical guides, and walkthroughs for tuning WebTransport congestion control.* (8 returned)
  - `"WebTransport" "congestionControl" ("Intent to Ship" OR "Intent to Prototype" OR "Chromium")` — *Surfaces browser vendor announcements, standards tracking, and implementation status across rendering engines.* (7 returned)
  - `WebTransport "congestionControl" ("low-latency" OR "throughput") (discussion OR benchmark OR performance)` — *Uncovers developer discussions, community feedback, and performance benchmarks evaluating latency versus throughput modes.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 18 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 51.1% passing (stable)*
- **Sources cited by the AI synthesis:** 2 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5180947573112832)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5180947573112832)
- [Specification](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-congestioncontrol)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/501268547)
