# Support Long Animation Frames API in Web Workers

> **Report Week:** 2026-W42 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

This feature extends the existing Long Animation Frames (LoAF) API to Web Workers. Today LoAF reports only on the main thread and is anchored to rendering frames, so it cannot observe work that blocks a worker's event loop. With this change, a long task that blocks a worker's event loop is reported as a long-animation-frame entry that is observable from inside the worker via PerformanceObserver, with the usual per-script attribution.  The prototype starts with dedicated workers, reporting a single long task that blocks the worker's event loop. The broader goal is to surface congested moments, intervals where an event loop remains busy and runnable work is delayed. This includes detecting a flood of many small tasks that keeps the event loop busy and reporting it as a long-animation-frame entry, as well as supporting the main thread. This is planned as follow-up work.

### Motivation

Web apps increasingly offload work to Web Workers, but a worker that blocks its own event loop is invisible to today's performance APIs. Workers usually have no rendering lifecycle, so there are no animation frames for LoAF to anchor to, and the main-thread LoAF and Long Tasks APIs cannot observe work running in a worker. As a result, a long task in a worker, which delays incoming message events and any OffscreenCanvas rendering, goes unreported even though it directly degrades responsiveness.  Rather than introduce a new API, we extend LoAF, because detecting a long animation frame and detecting a congested moment are fundamentally the same task: identifying bottlenecks in an event loop and attributing them to the responsible scripts. Reusing the existing API gives developers a single, familiar mechanism for diagnosing blocking work across both documents and workers.

## Ecosystem Status

- **Momentum:** Emerging (footprint 70 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The proposal to support the Long Animation Frames (LoAF) API in Web Workers extends main-thread performance diagnostics into dedicated workers, capturing event loop bottlenecks that delay message processing and OffscreenCanvas rendering. Developed cooperatively by Microsoft and Google within the W3C Web Performance Working Group, the capability is currently in developer trial behind a flag in Chrome 153. While widely praised by performance specialists for addressing worker telemetry blind spots, the extension remains experimental and strictly Chromium-led.

### Recommendations
- Actionable Advice: Teams should treat LoAF in Web Workers as strictly experimental and avoid relying on it in production environments today. Instead, monitor upstream W3C specification developments, experiment with dedicated worker diagnostics behind Chromium flags, and always guard performance observer registrations with runtime feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`long-animation-frames`](https://webstatus.dev/features/long-animation-frames), shared with 3 other ChromeStatus features*

- Share of tests passing in the web-features group `long-animation-frames` on [wpt.fyi](https://wpt.fyi/results?q=feature:long-animation-frames) (via webstatus.dev) — stable: Chrome 65.9% · Edge 65.9% · Firefox 0% · Safari 0%; experimental: Chrome 88.6% · Edge 88.6% · Firefox 0% · Safari 0%
- **Chrome usage:** 0.37% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/236))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/929))
- **WebKit:** no position recorded ([standards position](https://github.com/WebKit/standards-positions/issues/283))

## 📰 Ecosystem Blogs & Articles

- [googleusercontent.com](https://doc-48mg-1o5g-issuetracker.googleusercontent.com/issues/534893134) *(doc-48mg-1o5g-issuetracker.googleusercontent.com)*
  > Chrome Platform Status & Chromium Bug Tracker \* \*\*Sources:\*\* \*Chrome Platform Status (Feature #5387465121726464)\* and \*Chromium Issue #534893134\*
- [\[blink-dev\] Intent to Prototype: Support Long Animation Frames API in Web Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17008.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md Specification No information provided Summary &lt;strong&gt;This feature extends the existing Long Animation Frames (LoAF) API to Web Workers&lt;/strong&gt;. T...
- [Web-Perf Wednesday 007 – Chrome Makes Busy Workers Measurable – CSS Wizardry](https://csswizardry.com/2026/09/web-perf-wednesday-007-chrome-makes-busy-workers-measurable) *(csswizardry.com · 2026-09-02T11:00:00)*
  > Among its performance changes, ... Frames (LoAF) currently &lt;strong&gt;helps explain congested moments on the main thread by combining long-running script with the rendering work that follows it&lt;/strong&gt;....
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com · 2026-09-08T00:00:00)*
  > &lt;strong&gt;This feature extends the existing Long Animation Frames (LoAF) API to Web Workers&lt;/strong&gt;. Today LoAF reports only on the main thread and is anchored to rendering frames, so it cannot observe work that blocks a worker&#x27;s event loop.
- [Long Animation Frames in Workers: Solving Modern Web Jank \| Alexander Burgos](https://alexanderburgos.netlify.app/blog/long-animation-frames-dedicated-workers) *(alexanderburgos.netlify.app)*
  > Long Animation Frames in Workers: Solving Modern Web Jank \| Alexander Burgos View Skip to content Alexander Aguirre UX Engineer Blog Books Let's Talk Post not found The post you're looking for doesn't exist or has been removed. ← Back to Blog Perform...
- [Chrome Platform Status](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5171478175809536) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Support Long Animation Frames API in Web Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17008.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md`)*
  > Explainer https://github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md Specification No information provided Summary &lt;strong&gt;This feature extends the existing Long Animation Frames (LoAF) API to Web Workers&lt;/...

## 📚 Platform Documentation & Specifications

- [Support Long Animation Frames API in Web Workers · Issue #38 · w3c/long-animation-frames · GitHub](https://github.com/w3c/long-animation-frames/issues/38) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 11 planned queries — **3 verified relevant**
  - `"chromestatus.com/feature/5387465121726464" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"Support Long Animation Frames API in Web Workers" API` — *Core feature API query* (1 returned)
  - `"Support Long Animation Frames API in Web Workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"long-animation-frame" OR "per-script" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support Long Animation Frames API in Web Workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support Long Animation Frames API in Web Workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Long Animation Frames" ("web worker" OR "workers") (LoAF OR performance)` — *Find developer blog posts and explainers discussing the extension of LoAF to Web Workers.* (8 returned)
  - `"PerformanceObserver" "long-animation-frame" ("DedicatedWorkerGlobalScope" OR "self.addEventListener")` — *Locate code snippets and API usage patterns observing long animation frames inside Web Workers.* (4 returned)
  - `"Intent to Prototype" "Long Animation Frames" ("Web Workers" OR "worker")` — *Search for Blink-dev standards discussions and Intent to Prototype threads regarding worker LoAF support.* (1 returned)
  - `WICG "congested moments" ("long animation frames" OR "LoAF")` — *Track standardization activity, explainer updates, and browser discussions on event loop congested moments.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "long-animation-frames", shared with 3 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "long-animation-frames": Chrome 65.9% passing (stable)*
- **Sources cited by the AI synthesis:** 4 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5387465121726464)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5387465121726464)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/534893134)
