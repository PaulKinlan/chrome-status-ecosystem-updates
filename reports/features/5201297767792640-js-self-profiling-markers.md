# JS Self-Profiling Markers

> **Report Week:** 2026-W43 | **Milestone:** Chrome 153 | **Category:** Origin trial

## Overview

The JavaScript Self-Profiling API lets a web application sample its own call stacks to measure performance on real user devices. This feature adds an optional marker field to each captured sample that identifies the type of browser activity running when the sample was taken: script, gc, style, layout, paint, or other. A trace normally shows gaps between stacks that cannot be interpreted, markers let developers attribute that time to browser work happening outside their JavaScript, for example distinguishing script execution from style recalculation, layout, or a garbage collection pause, making slow traces easier to analyze and optimize.

### Motivation

The JavaScript Self-Profiling API lets web apps sample their own call stacks on real user devices, but it profiles only the page's JavaScript, leaving unexplained gaps where time went to style, layout, paint, or garbage collection. Some of that work, like GC, interrupts stack execution and is invisible to stack sampling. A per-sample marker identifies the browser activity, letting developers attribute slow field traces to non-JavaScript work and optimize accordingly.

## Ecosystem Status

- **Momentum:** Moderate (footprint 210 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The JS Self-Profiling Markers extension enhances the JavaScript Self-Profiling API by adding an execution marker (such as gc, style, layout, or paint) to samples, demystifying unexplained gaps in real-user monitoring traces. Currently in a Chromium origin trial starting in Chrome 153, the feature is championed by large-scale web applications and APM tools like Excel Online and Datadog. However, broader web platform adoption is throttled because the underlying JS Self-Profiling API remains implemented only in Chromium engines.

### Recommendations
- Actionable Advice: Teams managing performance-critical web applications should test the origin trial or adopt the API strictly via feature detection and progressive enhancement under cross-origin isolated environments. Do not treat the markers as a universal telemetry standard or build exclusive monitoring pipelines around them until cross-browser consensus emerges.
- In active Origin Trial in Chrome 153. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @monica-ch: "Thanks @kmiller68   1. UA-enforced sample limits: The \[spec\](https://wicg.github.io/js-self-profiling/#states) makes sampling best-effort and explicit..."
- Standards Activity (W3C TAG): Latest discussion from @monica-ch: "@marcoscaceres Just filed a WebKit position https://github.com/WebKit/standards-positions/issues/717..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [JS Self-Profiling API (including the Markers extension)](https://github.com/WebKit/standards-positions/issues/717) [open]
- **W3C TAG:** [Other Spec Review: JS Self-Profiling Markers (ProfilerSample.marker)](https://github.com/w3ctag/design-reviews/issues/1251) [open]
- **W3C TAG:** [State extension for JS Self-Profiling API.](https://github.com/w3ctag/design-reviews/issues/682) [closed]

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17130.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Chris Harrelson Wed, 05 Aug 2026 14:02:43 -0700 LGTM On Wed, Aug 5, 2026 at 1:59 PM ...
- [\[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17114.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Chromestatus Tue, 04 Aug 2026 15:31:06 -0700 Contact emails \[email&#160;protected\] , \[email&...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17121.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Chris Harrelson Wed, 05 Aug 2026 08:08:52 -0700 Please provide an end milestone for ...
- [JS Self-Profiling API](https://wicg.github.io/js-self-profiling) *(wicg.github.io · 2026-02-18T00:00:00)*
  > &lt;strong&gt;This specification describes an API that allows web applications to control a sampling profiler for measuring client JavaScript execution times&lt;/strong&gt;. Complex web applications currently have limited visibility into where JS execution time ...
- [JS Self-Profiling API In Practice - NicJ.net](https://nicj.net/js-self-profiling-api-in-practice) *(nicj.net · 2021-12-31T19:16:36)*
  > The JS Self-Profiling API is a new API, currently only available in Chrome versions 94+ (on Desktop and Android). &lt;strong&gt;It provides a sampling profiler that you can enable, from JavaScript, for any of your visitors&lt;/strong&gt;.
- [The JavaScript Self-Profiling API \| AddyOsmani.com](https://addyosmani.com/blog/js-self-profiling) *(addyosmani.com · 2020-11-01T00:00:00)*
  > // Begin a new profiling session // Provide a sampleInterval (period which the session obtains samples) const profiler = await performance.profile({ sampleInterval: 10 }); // Do some expensive work performSomeTask(); // Stop the profiler and return t...
- [JS Self-Profiling API In Practice - Web Performance Calendar](https://calendar.perfplanet.com/2021/js-self-profiling-api-in-practice) *(calendar.perfplanet.com)*
  > The JS Self-Profiling API is a new API, currently only available in Chrome versions 94+ (on Desktop and Android). &lt;strong&gt;It provides a sampling profiler that you can enable, from JavaScript, for any of your visitors&lt;/strong&gt;.
- [New in Edge for developers – Create better components and make your site agent-ready - Microsoft Edge Blog](https://blogs.windows.com/msedgedev/2026/09/21/new-in-edge-for-developers-create-better-components-and-make-your-site-agent-ready) *(blogs.windows.com · 2026-09-22T08:58:27)*
  > The JS Self-Profiling API is a great way to measure your app’s performance in production, on real user devices. But it only samples your page’s JavaScript, which often leaves unexplained gaps in a trace, moments where the browser was styling, laying ...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17123.html) *(mail-archive.com)*
  > Specifically, we want to learn: - Whether per-sample markers let developers attribute slow field traces to browser activity outside their JavaScript (rendering, style/layout, GC) and act on it. - Whether the sampled marker data is accurate and stable...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [JS Self-Profiling Markers · Issue #1812 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1812) *(github.com · 2026-10-09T22:25:27)* *(Cites: `https://chromestatus.com/feature/5201297767792640`)*
  > JS Self-Profiling Markers · Issue #1812 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reloa...
- [JS Self-Profiling Markers · Issue #23 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/23) *(github.com · 2026-08-25T18:38:39)* *(Cites: `https://chromestatus.com/feature/5201297767792640`)*
  > JS Self-Profiling Markers · Issue #23 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to re...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17130.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Chris Harrelson Wed, 05 Aug 2026 14:02:43 -0700 LGTM On Wed, Aug 5, 2026 a...
- [\[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17114.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Chromestatus Tue, 04 Aug 2026 15:31:06 -0700 Contact emails \[email&#160;protected\]...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17121.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/pull/89`)*
  > Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Chris Harrelson Wed, 05 Aug 2026 08:08:52 -0700 Please provide an end mile...

## 📚 Platform Documentation & Specifications

- [JS Self-Profiling API (including the Markers extension) · Issue #717 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/717) *(github.com)*
- [JS Self-Profiling Markers · Issue #1812 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1812) *(github.com)*
- [JS Self-Profiling Markers · Issue #23 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/23) *(github.com)*
- [GitHub - monica-ch/js-profiling-markers-demo: Live demo of the JS Self-Profiling API markers extension (Origin Trial) — works in Edge and Chrome](https://github.com/monica-ch/js-profiling-markers-demo) *(github.com)*
- [Profiler - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Profiler) *(developer.mozilla.org)*
- [js-self-profiling/index.html at main · WICG/js-self-profiling](https://github.com/WICG/js-self-profiling/blob/main/index.html) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 12 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/5201297767792640" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"github.com/WICG/js-self-profiling/blob/main/markers.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"github.com/WICG/js-self-profiling/pull/89" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"JS Self-Profiling Markers" API` — *Core feature API query* (8 returned)
  - `"JS Self-Profiling Markers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"self-profiling" OR "per-sample" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"JS Self-Profiling Markers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"JS Self-Profiling Markers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"JS Self-Profiling" ("markers" OR "marker") "Profiler" sample.marker` — *Finds code examples and WebIDL usage demonstrating how to read the marker property on captured profile samples.* (8 returned)
  - `"JavaScript Self-Profiling API" ("markers" OR "marker") (guide OR tutorial OR "performance")` — *Discovers technical blog posts and developer guides explaining how to use self-profiling markers to identify GC, layout, and style delays.* (8 returned)
  - `"JS Self-Profiling" markers ("Intent to Ship" OR "Intent to Prototype" OR chromestatus)` — *Tracks browser standardization progress, Chromium release status, and browser vendor adoption announcements.* (8 returned)
  - `"js-self-profiling" markers ("garbage collection" OR "layout" OR "paint") (site:news.ycombinator.com OR site:reddit.com OR "github.com/WICG")` — *Surfaces developer reactions, performance discussions, and web standards feedback regarding non-JS execution gap attribution.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 3 result(s) found — **1 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 15 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 6 result(s) found — **1 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 13 engineer comment(s) read
- **Web Page Excerpts Ingested:** 11 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5201297767792640)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5201297767792640)
- [Specification](https://github.com/WICG/js-self-profiling/pull/89)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40800459)
