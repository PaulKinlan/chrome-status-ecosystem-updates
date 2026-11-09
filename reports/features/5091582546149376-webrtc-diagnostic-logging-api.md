# WebRTC Diagnostic Logging API

> **Report Week:** 2026-W46 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

The Real-time Communication for the Web (\[WebRTC\](https://webrtc.org/)) Diagnostic Logging API allows authorized web applications to trigger the collection of WebRTC diagnostic data so that it can be used for local debugging. It also allows an application to share the WebRTC diagnostic data with the user agent vendor, subject to user authorization, with the purpose of providing information that can help fix bugs in or improve the user agent.  Admins can enable diagnostic logs with the enterprise policy \[WebRtcDiagnosticLogCollectionAllowedForOrigins\](https://chromeenterprise.google/policies/#WebRtcDiagnosticLogCollectionAllowedForOrigins).

### Motivation

WebRTC applications often encounter complex connectivity or media quality issues that are difficult to reproduce in local environments. To debug these issues in production, sometimes it is helpful for developers to have access to internal state and performance metrics. This also applies to issues in the user agent.  The WebRTC Web Diagnostic Logging API allows authorized web applications to trigger the collection of WebRTC diagnostic data so that it can be used for local debugging. It also allows an application to share the WebRTC diagnostic data with the user agent vendor, subject to user authorization, with the purpose of providing information that can help fix bugs in or improve the user agent.

## Ecosystem Status

- **Momentum:** Emerging (+50 points since 2026-10-12; footprint 330 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** The WebRTC Diagnostic Logging API introduces web-exposed triggers to collect internal peer connection telemetry for local troubleshooting and browser vendor bug triage. Chromium is leading the rollout with general availability in Chrome 156, complemented by enterprise origin management policies. However, the ecosystem remains fractured because the feature lacks multi-engine consensus and is not yet on an interoperable standards track.

### Recommendations
- Actionable Advice: Treat this feature as an optional, progressive debugging enhancement targeted strictly at Chromium-based desktop and managed enterprise deployments. Production applications should continue relying primarily on standardized WebRTC statistics reporting (\`getStats()\`) for portable, cross-browser session analytics.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "I think those are pretty weak use cases for adding a web API.  &gt; \* An organization has a custom WebRTC deployment and they want to analyze logs at sca..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [WebRTC Diagnostic Logging](https://github.com/WebKit/standards-positions/issues/699) [open]
- **Mozilla:** [WebRTC Diagnostic Logging](https://github.com/mozilla/standards-positions/issues/1436) [open]

## Web-features Group

*group-level data: web-features [`webrtc`](https://webstatus.dev/features/webrtc), shared with 66 other ChromeStatus features*

- Share of tests passing in the web-features group `webrtc` on [wpt.fyi](https://wpt.fyi/results?q=feature:webrtc) (via webstatus.dev) — stable: Chrome 72.8% · Edge 73.2% · Firefox 82.3% · Safari 72%; experimental: Chrome 73.2% · Edge 71.7% · Firefox 85.8% · Safari 74.4%

## 📰 Ecosystem Blogs & Articles

- [WebRTC Diagnostic Logging API](https://wicg.github.io/webrtc-diagnostic-logging) *(wicg.github.io)*
  > The \*\*WebRTC Diagnostic Logging API\*\* is a W3C-standardized extension to \`RTCPeerConnection\` designed to troubleshoot complex, intermittent media and connectivity issues that are notoriously hard to reproduce in local developer environments \`discardD...
- [google.com](https://groups.google.com/a/chromium.org/g/blink-dev/c/L2kX7raIUCE) *(groups.google.com)*
  > \*\*Out-of-Band Log Ingestion\*\*: Diagnostic logs are stored locally under user control or securely uploaded out-of-band directly to the browser vendor (with user consent) to facilitate browser bug triaging Developers can attach the provided UUID to bug...
- [samsung.com](https://developer.samsung.com/browser/policy/web-rtc-diagnostic-log-collection-allowed-for-origins.html) *(developer.samsung.com)*
  > \*\*Enterprise Controls\*\*: Log generation is strictly governed in managed environments by the enterprise policy \*\*\`WebRtcDiagnosticLogCollectionAllowedForOrigins\`\*\* (introduced in Chrome 147+), ensuring logs can only be initiated on explicit, allowlist...
- [chromeenterprise.google](https://chromeenterprise.google/policies/web-rtc-diagnostic-log-collection-allowed-for-origins) *(chromeenterprise.google)*
  > \*\*Enterprise Controls\*\*: Log generation is strictly governed in managed environments by the enterprise policy \*\*\`WebRtcDiagnosticLogCollectionAllowedForOrigins\`\*\* (introduced in Chrome 147+), ensuring logs can only be initiated on explicit, allowlist...
- [chromeenterprise.google](https://chromeenterprise.google/policies) *(chromeenterprise.google)*
  > \*\*Source:\*\* \[Chrome Enterprise Policy List (\`WebRtcDiagnosticLogCollectionAllowedForOrigins\`)\](https://chromeenterprise.google/policies/#WebRtcDiagnosticLogCollectionAllowedForOrigins)
- [yosuke4061.com](https://yosuke4061.com/new_toppage/powerword/webrtc-diagnostic-logging) *(yosuke4061.com)*
  > RTC developers welcome the API as a way to programmatically initiate diagnostics in managed agent fleets without disrupting the end user Trackers on \`web-platform-dx/web-features\` and \`GoogleChrome/modern-web-guidance-src\` note that while developers ...
- [\[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16867.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API 'Guido Urdaneta' via blink-dev Thu, 25 Jun 2026 02:57:32 -0700 After discuss...
- [\[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17555.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API Chromestatus Fri, 25 Sep 2026 08:29:54 -0700 Contact emails \[email&#160;protected\] Explainer htt...
- [\[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16865.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API 'Guido Urdaneta' via blink-dev Wed, 24 Jun 2026 16:07:36 -0700 Correction: T...
- [Re: \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16877.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API Chris Harrelson Thu, 25 Jun 2026 13:13:46 -0700 LGTM On Thu, Jun 25,...
- [Re: \[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17816.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API Chris Harrelson Wed, 21 Oct 2026 08:18:45 -0700 LGTM On Wed, O...
- [Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17563.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API Philip Jägenstedt Mon, 28 Sep 2026 07:02:18 -0700 LGTM1 On Fri, Sep 25, 2026 at 5:29 PM ...
- [\[blink-dev\] Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16832.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: WebRTC Diagnostic Logging API Chromestatus Tue, 23 Jun 2026 08:58:45 -0700 Contact emails \[email&#160;protected\] E...
- [Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17638.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API 'Ashley Newson' via blink-dev Thu, 01 Oct 2026 08:14:25 -0700 Just to check, is this fea...
- [Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17642.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; On Monday, September 28, 2026 at 6:24:40 AM UTC-7 Philip Jägenstedt &gt;&gt;&gt; wrote: &gt;&gt;&gt; &gt;&gt; LGTM1 &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; On Fri, Sep 25, 2026 at 5:29 PM Chromestatus &lt; &gt;&gt;&gt;&gt; \[email ...
- [Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17604.html) *(mail-archive.com)*
  > &gt; &gt; On Monday, September 28, 2026 ... &gt;&gt;&gt; &gt;&gt;&gt; \*Summary\* &gt;&gt;&gt; &lt;strong&gt;The WebRTC Web Diagnostic Logging API allows authorized web applications &gt;&gt;&gt; to trigger the collection of WebRTC diagnostic data so that it ...
- [Implement WebRTC diagnostic logging API \[481412281\] - Chromium](https://issues.chromium.org/issues/481412281) *(issues.chromium.org)*
  > This CL introducees an RTCLoggingDispatcher, which handles IPC requests for WebRTC diagnostic logging. The functionality is gated behind a Blink RuntimeEnabledFeature flag.
- [\[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17731.html) *(mail-archive.com)*
  > Explainer https://github.com/W... (\[WebRTC\](https://webrtc.org/)) Diagnostic Logging API &lt;strong&gt;allows authorized web applications to trigger the collection of WebRTC diagnostic data so that it can be used for local debugging&lt;/strong&gt;....
- [Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17571.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; \*Is this feature fully tested by web-platform-tests &gt;&gt; &lt;https://chromium.googlesource.com/chromium/src/+/main/docs/testing/web\_platform\_tests.md&gt;?\* &gt;&gt; Yes &gt;&gt; https://crsrc.org/c/third\_party/blink/web\_tests/wp...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com · 2026-10-20T00:00:00)*
  > It also allows an application to share the WebRTC diagnostic data with the user agent vendor, subject to user authorization, with the purpose of providing information that can help fix bugs in or improve the user agent. Admins can enable diagnostic l...
- [Chrome 156 Moves IndexedDB to SQLite: What Changes](https://www.digitbin.com/chrome-156-indexeddb-sqlite) *(digitbin.com · 2026-10-21T06:44:25)*
  > Chrome 156 adds a WebRTC Diagnostic Logging API. &lt;strong&gt;It lets authorized web apps collect diagnostic data about a video or voice call for local debugging and, with user consent, share it with the browser vendor&lt;/strong&gt;.
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/en_us/resources/release-notes/?ver=156) *(chromeenterprise.google)*
  > &lt;strong&gt;Admins can enable diagnostic logs with the enterprise policy WebRtcDiagnosticLogCollectionAllowedForOrigins&lt;/strong&gt;.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16867.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API 'Guido Urdaneta' via blink-dev Thu, 25 Jun 2026 02:57:32 -0700 Aft...
- [\[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17555.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API Chromestatus Fri, 25 Sep 2026 08:29:54 -0700 Contact emails \[email&#160;protected\] Exp...
- [\[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16865.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API 'Guido Urdaneta' via blink-dev Wed, 24 Jun 2026 16:07:36 -0700 Cor...
- [Re: \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16877.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > Re: \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API Chris Harrelson Thu, 25 Jun 2026 13:13:46 -0700 LGTM On Th...
- [Re: \[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17816.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > Re: \[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API Chris Harrelson Wed, 21 Oct 2026 08:18:45 -0700 LGTM...
- [Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17563.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API Philip Jägenstedt Mon, 28 Sep 2026 07:02:18 -0700 LGTM1 On Fri, Sep 25, 2026 a...
- [Chrome 156 adds WebRTC diagnostic logging by Elchi3 · Pull Request #30812 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30812) *(github.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > Summary Chrome 156 adds WebRTC diagnostic logging Test results and supporting details https://&lt;strong&gt;chromestatus.com/feature/5091582546149376&lt;/strong&gt; Related issues Previously appeared in Canary, #30757
- [\[blink-dev\] Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16832.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webrtc-diagnostic-logging/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: WebRTC Diagnostic Logging API Chromestatus Tue, 23 Jun 2026 08:58:45 -0700 Contact emails \[email&#160;pr...
- [Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17638.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webrtc-diagnostic-logging/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API 'Ashley Newson' via blink-dev Thu, 01 Oct 2026 08:14:25 -0700 Just to check, i...
- [Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17642.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webrtc-diagnostic-logging/blob/main/explainer.md`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; On Monday, September 28, 2026 at 6:24:40 AM UTC-7 Philip Jägenstedt &gt;&gt;&gt; wrote: &gt;&gt;&gt; &gt;&gt; LGTM1 &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; On Fri, Sep 25, 2026 at 5:29 PM Chromestatus &lt; &gt;&gt;&gt;&g...
- [Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17604.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webrtc-diagnostic-logging/blob/main/explainer.md`)*
  > &gt; &gt; On Monday, September 28, 2026 ... &gt;&gt;&gt; &gt;&gt;&gt; \*Summary\* &gt;&gt;&gt; &lt;strong&gt;The WebRTC Web Diagnostic Logging API allows authorized web applications &gt;&gt;&gt; to trigger the collection of WebRTC diagnostic data s...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/web-platform-dx/web-features/issues/4531) *(github.com)*
- [WebRTC Diagnostic Logging API · Issue #1343 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1343) *(github.com)*
- [Chrome 156 adds WebRTC diagnostic logging by Elchi3 · Pull Request #30812 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30812) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/156.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/156.md) *(github.com)*
- [WebRTC Diagnostic Logging · Issue #1436 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1436) *(github.com)*
- [Incubation: WebRTC Diagnostic Logging · Issue #1250 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1250) *(github.com)*
- [GitHub - WICG/webrtc-diagnostic-logging · GitHub](https://github.com/WICG/webrtc-diagnostic-logging) *(github.com)*
- [New incubation: WebRTC diagnostic logging from Chris Wilson on 2026-03-30 (public-new-work@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-new-work/2026Mar/0007.html) *(lists.w3.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 63 result(s) found across 12 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/5091582546149376" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"github.com/WICG/webrtc-diagnostic-logging/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"w3c.github.io/webrtc-extensions" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebRTC Diagnostic Logging API" API` — *Core feature API query* (8 returned)
  - `"WebRTC Diagnostic Logging API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webrtc.org" OR "chromeenterprise.google" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebRTC Diagnostic Logging API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebRTC Diagnostic Logging API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebRTC Diagnostic Logging" (tutorial OR guide OR "how to" OR debug)` — *Discovers community guides, blog posts, and debugging tutorials leveraging WebRTC diagnostic logs.* (8 returned)
  - `"WebRtcDiagnosticLogCollectionAllowedForOrigins" OR "webrtc-diagnostic-logging" (code OR javascript OR sample)` — *Finds code samples, configuration snippets, and API usage related to WebRTC diagnostic logging.* (8 returned)
  - `"WebRTC Diagnostic Logging" ("intent to prototype" OR "intent to ship" OR "enterprise policy")` — *Tracks browser vendor release status, Blink intents, and enterprise deployment announcements.* (8 returned)
  - `"webrtc-diagnostic-logging" OR "WebRTC Diagnostic Logging" (privacy OR telemetry OR concern OR RFC)` — *Surfaces community debates, standards feedback, and privacy discussions regarding remote diagnostic collection.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webrtc", shared with 66 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webrtc": Chrome 72.8% passing (stable)*
- **Sources cited by the AI synthesis:** 4 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5091582546149376)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5091582546149376)
- [Specification](https://w3c.github.io/webrtc-extensions/#diagnostic-logging)
- [Chromium Tracking Bug](https://crbug.com/481412281)
