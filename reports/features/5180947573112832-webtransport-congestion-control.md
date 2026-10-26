# WebTransport congestion control

> **Report Week:** 2026-W44 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Adds the congestionControl constructor option and read-only attribute to WebTransport. Applications can request "default", "throughput", or "low-latency" behavior, allowing the user agent to select suitable congestion-control behavior for each session.

### Motivation

WebTransport applications have different performance requirements. Interactive applications prioritize low latency, while bulk transfers prioritize throughput. This hint lets applications express that preference without selecting or controlling a specific congestion-control algorithm.

## Ecosystem Status

- **Momentum:** Emerging (footprint 210 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** WebTransport congestion control introduces a standardized constructor option and read-only attribute allowing applications to hint whether sessions should prioritize 'low-latency' or 'throughput' over browser defaults. Chromium has led implementation and shipping with comprehensive unit and Web Platform Test coverage, while formal position requests remain open in Gecko and WebKit. Developer and networking working groups welcome the advisory hint design because it avoids rigid algorithm locking while letting real-time media and gaming workloads avoid latency-inducing bufferbloat.

### Recommendations
- Actionable Advice: Teams deploying WebTransport for interactive or bulk transfers can safely specify 'low-latency' or 'throughput' today as progressive enhancements without risk of runtime breakage. Inspect the session's 'congestionControl' instance attribute after initialization to verify whether the client honored the preference or fell back to system defaults.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @larseggert: "CC @jesup @omansfeld @mxinden..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [WebTransport congestion control option and attribute](https://github.com/WebKit/standards-positions/issues/734) [open]
- **Mozilla:** [WebTransport congestion control option and attribute](https://github.com/mozilla/standards-positions/issues/1472) [open]

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 42.3% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 70.1% · Safari 73%
- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [minutes-115-webtrans-202211101300-00](https://datatracker.ietf.org/meeting/115/materials/minutes-115-webtrans-202211101300-00) *(datatracker.ietf.org)*
  > congestionControl\` lets the application inspect whether the user agent honored the requested preference or fell back to default behavior \*\*Coverage\*\*: IETF WebTransport Working Group proceedings (e.g., IETF 115) and W3C WebTransport meeting notes
- [google.com](https://issuetracker.google.com/501268547) *(issuetracker.google.com)*
  > congestionControl\` lets the application inspect whether the user agent honored the requested preference or fell back to default behavior \*\*Coverage\*\*: Chromium issue tracker entries (e.g., Issue 501268547) and Blink commit reviews
- [appspot.com](https://polymer10-dot-cr-status.appspot.com/feature/5180947573112832) *(polymer10-dot-cr-status.appspot.com)*
  > \*\*Coverage\*\*: Chrome Platform Status feature tracking and release notes for Chrome's Blink shipping milestone
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17748.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Mike Taylor Thu, 15 Oct 2026 10:13:09 -0700 On 10/14/26 6:45 p.m., Chromestatus wrot...
- [\[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17735.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport congestion control Chromestatus Wed, 14 Oct 2026 22:53:52 -0700 Contact emails \[email&#160;protected\] Explainer...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17790.html) *(mail-archive.com)*
  > The shared WPT passes in all three engines, but &gt;&gt;&gt;&gt;&gt; it &gt;&gt;&gt;&gt;&gt; intentionally permits fallback to &quot;default&quot; and therefore tests API &gt;&gt;&gt;&gt;&gt; interoperability rather than the underlying congestion-con...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17750.html) *(mail-archive.com)*
  > The shared WPT passes in all three engines, but it intentionally permits fallback to &quot;default&quot; and therefore tests API interoperability rather than the underlying congestion-control behavior. On Thursday, October 15, 2026 at 10:13:21 AM UTC...
- [WebTransport API Explained: HTTP/3 Streaming Guide (2026) - VideoSDK](https://www.videosdk.live/developer-hub/webtransport/webtransport-api) *(videosdk.live)*
  > Third, flow control and congestion control are built into QUIC itself, and the API exposes hints so developers can bias the connection toward throughput or low latency. The WebTransport API is currently a W3C Candidate Recommendation, with shipping i...
- [WebTransport vs. WebSockets: Low-Latency Streaming \[2026\]](https://techbytes.app/posts/webtransport-vs-websockets-low-latency-streaming-2026) *(techbytes.app · 2026-05-01T00:00:00)*
  > const encoder = new TextEncoder(); const decoder = new TextDecoder(); const transport = new WebTransport(&#x27;https://localhost:4433/wt&#x27;, { congestionControl: &#x27;low-latency&#x27; }); await transport.ready; console.log(&#x27;wt ready&#x27;);...
- [Chrome Platform Status](https://chromestatus.com/feature/5180947573112832/activity) *(chromestatus.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17748.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Mike Taylor Thu, 15 Oct 2026 10:13:09 -0700 On 10/14/26 6:45 p.m., Chromes...
- [\[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17735.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport congestion control Chromestatus Wed, 14 Oct 2026 22:53:52 -0700 Contact emails \[email&#160;protected\]...
- [WebTransport congestion control option and attribute · Issue #734 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/734) *(github.com · 2026-10-21T17:43:58)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > WebTransport congestion control option and attribute · Issue #734 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab ...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/WebTransport) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/congestionControl) *(developer.mozilla.org)*
- [WebTransport/Meetings - W3C Wiki](https://www.w3.org/wiki/WebTransport/Meetings) *(w3.org)*
- [Pluggable Congestion Control · Issue #365 · w3c/webtransport](https://github.com/w3c/webtransport/issues/365) *(github.com)*
- [WebTransport congestion control option and attribute · Issue #734 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/734) *(github.com)*
- [WebTransport congestion control option and attribute · Issue #1472 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1472) *(github.com)*
- [WebTransport: congestionControl-Eigenschaft - Web-APIs \| MDN](https://developer.mozilla.org/de/docs/Web/API/WebTransport/congestionControl) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/2026/CR-webtransport-20260730) *(w3.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 72 result(s) found across 12 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/5180947573112832" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport congestion control" API` — *Core feature API query* (4 returned)
  - `"WebTransport congestion control" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"read-only" OR "low-latency" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport congestion control" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport congestion control" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `new WebTransport congestionControl "low-latency" OR "throughput"` — *Finds real-world JavaScript code examples and constructor usage configuring WebTransport congestion control options.* (8 returned)
  - `"WebTransport" "congestionControl" tutorial OR guide "low-latency"` — *Discovers developer tutorials and practical guides explaining how to tune WebTransport congestion control for interactive web applications.* (8 returned)
  - `"WebTransport" "congestionControl" "intent to ship" OR chromestatus OR "Chrome 1"` — *Tracks browser vendor release notes, Chrome status updates, and rollout announcements regarding WebTransport congestion control.* (8 returned)
  - `site:github.com/w3c/webtransport "congestionControl" OR "congestion control" issues OR pull` — *Surfaces W3C working group debates, developer feedback, and specification discussions on the congestion control API design.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 17 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 42.3% passing (stable)*
- **Sources cited by the AI synthesis:** 7 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 11 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5180947573112832)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5180947573112832)
- [Specification](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-congestioncontrol)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/501268547)
