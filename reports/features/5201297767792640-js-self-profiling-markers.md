# JS Self-Profiling Markers

> **Report Week:** 2026-W42 | **Milestone:** Chrome 153 | **Category:** Origin trial

## Overview

The JavaScript Self-Profiling API lets a web application sample its own call stacks to measure performance on real user devices. This feature adds an optional marker field to each captured sample that identifies the type of browser activity running when the sample was taken: script, gc, style, layout, paint, or other. A trace normally shows gaps between stacks that cannot be interpreted, markers let developers attribute that time to browser work happening outside their JavaScript, for example distinguishing script execution from style recalculation, layout, or a garbage collection pause, making slow traces easier to analyze and optimize.

### Motivation

The JavaScript Self-Profiling API lets web apps sample their own call stacks on real user devices, but it profiles only the page's JavaScript, leaving unexplained gaps where time went to style, layout, paint, or garbage collection. Some of that work, like GC, interrupts stack execution and is invisible to stack sampling. A per-sample marker identifies the browser activity, letting developers attribute slow field traces to non-JavaScript work and optimize accordingly.

## Ecosystem Status

- **Momentum:** Emerging (footprint 170 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** The JS Self-Profiling Markers proposal extends the existing JavaScript Self-Profiling API by annotating sampled traces with browser activity tags like garbage collection, layout, paint, and style calculation. Currently running in an origin trial in Chromium, the extension addresses a major visibility blind spot where non-script main-thread work created unexplained gaps in real-user traces. However, because the underlying base profiling API remains Chromium-only, the feature struggles with broader standards momentum and lacks cross-engine consensus.

### Recommendations
- Actionable Advice: Do not depend on markers or the Self-Profiling API for core application logic or universal telemetry; treat it strictly as an opt-in, progressive enhancement for Chromium-specific field profiling. Teams operating high-value web applications can evaluate the origin trial behind cross-origin isolation headers to diagnose GC and layout bottlenecks while retaining fallback RUM instrumentation.
- In active Origin Trial in Chrome 153. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @monica-ch: "Thanks @kmiller68   1. UA-enforced sample limits: The \[spec\](https://wicg.github.io/js-self-profiling/#states) makes sampling best-effort and explicit..."
- Standards Activity (W3C TAG): Latest discussion from @monica-ch: "@marcoscaceres Just filed a WebKit position https://github.com/WebKit/standards-positions/issues/717..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [JS Self-Profiling API (including the Markers extension)](https://github.com/WebKit/standards-positions/issues/717) [open]
- **W3C TAG:** [Other Spec Review: JS Self-Profiling Markers (ProfilerSample.marker)](https://github.com/w3ctag/design-reviews/issues/1251) [open]
- **W3C TAG:** [State extension for JS Self-Profiling API.](https://github.com/w3ctag/design-reviews/issues/682) [closed]

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5201297767792640/activity) *(chromestatus.com)*
  > WICG Specification & W3C TAG Review \* \*\*Resources:\*\* \*WICG/js-self-profiling Repository\* & \*W3C TAG Review #1251\* \* \*\*Key Insights:\*\* The WICG specification discussion centers on how markers are exposed without opening new timing-attack side channels
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17130.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Chris Harrelson Wed, 05 Aug 2026 14:02:43 -0700 LGTM On Wed, Aug 5, 2026 at 1:59 PM ...
- [\[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17114.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Chromestatus Tue, 04 Aug 2026 15:31:06 -0700 Contact emails \[email&#160;protected\] , \[email&...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17121.html) *(mail-archive.com)*
  > On Tue, Aug 4, 2026 at 3:30 PM ...hub.com/WICG/js-self-profiling/pull/89 &gt; &gt; \*Summary\* &gt; &lt;strong&gt;The JavaScript Self-Profiling API lets a web application sample its own &gt; call stacks to measure performance on real user devices&lt;/strong&gt;......
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17123.html) *(mail-archive.com)*
  > \*Origin Trial documentation link\* https://github.com/WICG/js-self-profiling/blob/main/markers.md \*Risks\* \*Interoperability and Compatibility\* /No information provided/ /Gecko/: No signal /WebKit/: No signal /Web developers/: No signals /Other signals...
- [New in Edge for developers – Create better components and make your site agent-ready - Microsoft Edge Blog](https://blogs.windows.com/msedgedev/2026/09/21/new-in-edge-for-developers-create-better-components-and-make-your-site-agent-ready) *(blogs.windows.com · 2026-09-22T08:58:27)*
  > The JS Self-Profiling API is a great way to measure your app’s performance in production, on real user devices. But it only samples your page’s JavaScript, which often leaves unexplained gaps in a trace, moments where the browser was styling, laying ...

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
  > On Tue, Aug 4, 2026 at 3:30 PM ...hub.com/WICG/js-self-profiling/pull/89 &gt; &gt; \*Summary\* &gt; &lt;strong&gt;The JavaScript Self-Profiling API lets a web application sample its own &gt; call stacks to measure performance on real user devices&lt;/...

## 📚 Platform Documentation & Specifications

- [JS Self-Profiling API (including the Markers extension) · Issue #717 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/717) *(github.com)*
- [w3.org](https://lists.w3.org/Archives/Public/public-webapps-github/2026Jul/0567.html) *(lists.w3.org)*
- [JS Self-Profiling Markers · Issue #1812 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1812) *(github.com)*
- [JS Self-Profiling Markers · Issue #23 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/23) *(github.com)*
- [GitHub - monica-ch/js-profiling-markers-demo: Live demo of the JS Self-Profiling API markers extension (Origin Trial) — works in Edge and Chrome](https://github.com/monica-ch/js-profiling-markers-demo) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 48 result(s) found across 12 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5201297767792640" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"github.com/WICG/js-self-profiling/blob/main/markers.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"github.com/WICG/js-self-profiling/pull/89" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"JS Self-Profiling Markers" API` — *Core feature API query* (8 returned)
  - `"JS Self-Profiling Markers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"self-profiling" OR "per-sample" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"JS Self-Profiling Markers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"JS Self-Profiling Markers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"JS Self-Profiling" OR "JavaScript Self-Profiling API" markers ("gc" OR "layout" OR "paint")` — *Finds technical articles, developer guides, and explainers detailing how to use trace markers to identify browser overhead outside of JavaScript execution.* (8 returned)
  - `"new Profiler" ("marker" OR "markers") ("gc" OR "style" OR "layout")` — *Searches for real-world JavaScript code snippets and implementation examples using the Profiler interface with per-sample markers.* (8 returned)
  - `"JS Self-Profiling" markers ("intent to prototype" OR "intent to ship" OR site:chromestatus.com)` — *Locates browser engine intent threads, standardization progress, and platform status announcements across browser vendors.* (2 returned)
  - `"js-self-profiling" markers (site:github.com/WICG OR site:issues.chromium.org)` — *Discovers standards discussions, pull requests, issue tracker debates, and API design trade-offs regarding marker attribution.* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 7 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 15 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 13 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5201297767792640)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5201297767792640)
- [Specification](https://github.com/WICG/js-self-profiling/pull/89)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40800459)
