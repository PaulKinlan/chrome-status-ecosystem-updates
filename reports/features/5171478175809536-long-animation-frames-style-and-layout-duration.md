# Long Animation Frames style and layout duration

> **Report Week:** 2026-W42 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Add \`styleDuration\` and \`forcedStyleDuration\` information to the Long Animation Frame API, enabling developers to distinguish style and layout times.

### Motivation

Currently performance-conscious developers have no way to distinguish their style time from their layout time, making CSS performance issues less actionable than they can be.  This feature enables developers to make that distinction.

## Ecosystem Status

- **Momentum:** Moderate (footprint 185 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Long Animation Frames (LoAF) style and layout duration enhancements introduce discrete \`styleDuration\` and \`forcedStyleDuration\` metrics, resolving a long-standing telemetry blind spot that previously lumped style recalculation and layout into a single opaque duration. Championed by Chromium and targeted for broad release in Chrome 157, the feature provides much-needed granularity for field performance diagnosis. However, broader multi-engine consensus remains limited because Gecko and WebKit have not yet shipped the baseline Long Animation Frames API.

### Recommendations
- Actionable Advice: Web performance and observability teams should progressively enhance their RUM collectors to record \`styleDuration\` and \`forcedStyleDuration\` when present, while retaining fallback calculations based on \`styleAndLayoutStart\` for older Chromium clients. Because non-Chromium browsers do not support LoAF, these metrics should supplement rather than replace synthetic lab profiling tools like DevTools traces.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tunetheweb: "Answering for @noamr who’s on annual leave at the moment.  This started off as part of the long tasks spec—hence the links in the original request in ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Performance timeline - Long Animation Frames](https://github.com/WebKit/standards-positions/issues/283) [open]

## 📰 Ecosystem Blogs & Articles

- [Long Animation Frames API \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/long-animation-frames) *(developer.chrome.com)*
  > Previously, LoAF only exposed a combined timestamp (\`styleAndLayoutStart\`), which meant developers and Real User Monitoring (RUM) tools had to bundle style recalculations and layout calculations into a single opaque duration The enhancement makes sty...
- [SpeedCurve \| The Definitive Guide to Long Animation Frames (LoAF)](https://www.speedcurve.com/blog/guide-long-animation-frames-loaf) *(speedcurve.com)*
  > Previously, LoAF only exposed a combined timestamp (\`styleAndLayoutStart\`), which meant developers and Real User Monitoring (RUM) tools had to bundle style recalculations and layout calculations into a single opaque duration dev\`) \* \*\*Source:\*\* \*“Lon...
- [googlesource.com](https://chromium.googlesource.com/chromium/src.git/+/refs/heads/main/third_party/blink/renderer/platform/runtime_enabled_features.json5) *(chromium.googlesource.com)*
  > This update introduces granular duration properties across two interfaces \* \*\*\`PerformanceLongAnimationFrameTiming\`\*\*: Adds distinct \`styleDuration\` and \`layoutDuration\` properties, allowing developers to isolate time spent evaluating CSS rules from ...
- [appspot.com](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5171478175809536) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > Chrome Platform Status & W3C Working Group Specification \* \*\*Source:\*\* \[Chrome Platform Status\](https://chromestatus.com/) / \[W3C \`long-animation-frames\` Repository\](https://github.com/w3c/long-animation-frames)
- [What are Long Animation Frames (LoAF)? - Request Metrics 🦥](https://requestmetrics.com/web-performance/long-animation-frame-loaf) *(requestmetrics.com)*
  > \* (Request Metrics) \* \*\*Distinguishing Bottlenecks:\*\* Complex CSS selectors, large DOM trees, or shadow DOM styling cause expensive \*\*recalc style\*\* spikes (\`styleDuration\`), whereas deeply nested flexbox/grid changes or DOM insertion loops cause \*\*r...
- [nucliweb.net](https://webperf-snippets.nucliweb.net/Interaction/Long-Animation-Frames) *(webperf-snippets.nucliweb.net)*
  > Ecosystem leaders highlight that knowing an interaction stalled during "rendering" wasn't actionable enough \* \*\*Distinguishing Bottlenecks:\*\* Complex CSS selectors, large DOM trees, or shadow DOM styling cause expensive \*\*recalc style\*\* spikes (\`styl...
- [\[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17594.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Yoav Weiss (@Shopify) Wed, 30 Sep 2026 06:47:27 -0700 \*Conta...
- [\[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg16017.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration Yoav Weiss (@Shopify) Fri, 06 Mar 2026 08:58:16 -0800 \*C...
- [\[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17610.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Alex Russell Wed, 30 Sep 2026 08:35:51 -0700 LGTM1; ...
- [\[blink-dev\] Intent to Prototype: Long Animation Frames style duration](https://www.mail-archive.com/blink-dev@chromium.org/msg15596.html) *(mail-archive.com)*
  > \*Specification\* https://github.com/w3c/long-animation-frames/pull/30 \*Summary\* &lt;strong&gt;Add \`styleDuration\` and \`forcedStyleDuration\` information to the Long Animation Frame API, enabling developers to distinguish style and layout times&lt;/strong&gt;.
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17667.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Rick Byers Wed, 07 Oct 2026 08:18:45 -0700 L...
- [Re: \[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg16034.html) *(mail-archive.com)*
  > On Fri, Mar 6, 2026 at 9:02 AM ...frames/pull/30 \*Summary\* &lt;strong&gt;Add \`styleDuration\`, \`forcedStyleDuration\`, \`layoutDuration\` and \`forcedLayoutDuration\` information to the Long Animation Frame API, enabling developers to distinguish style and layou...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/39) *(github.com · 2026-10-05T08:17:16)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab o...
- [\[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17594.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Yoav Weiss (@Shopify) Wed, 30 Sep 2026 06:47:27 -0...
- [\[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg16017.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration Yoav Weiss (@Shopify) Fri, 06 Mar 2026 08:58:1...

## 📚 Platform Documentation & Specifications

- [Long Animation Frames style and layout duration · Issue #1615 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1615) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing) *(developer.mozilla.org)*
- [Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/39) *(github.com)*
- [Long Animation Frames style and Layout duration · Issue #4453 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4453) *(github.com)*
- [Add bounds to LoAF style and layout durations by yoavweiss · Pull Request #63399 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63399) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 46 result(s) found across 11 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/5171478175809536" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c/long-animation-frames/pull/30" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"Long Animation Frames style and layout duration" API` — *Core feature API query* (5 returned)
  - `"Long Animation Frames style and layout duration" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"performance-conscious" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Long Animation Frames style and layout duration" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Long Animation Frames style and layout duration" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"PerformanceObserver" "long-animation-frame" ("styleDuration" OR "forcedStyleDuration")` — *Finds code samples and Web API usage demonstrating PerformanceObserver handling styleDuration and forcedStyleDuration in LoAF entries.* (8 returned)
  - `"Long Animation Frames" ("styleDuration" OR "forcedStyleDuration") (guide OR tutorial OR "CSS performance")` — *Discovers practical tutorials and developer guides for diagnosing style recalculation vs layout bottlenecks using LoAF.* (2 returned)
  - `"styleDuration" ("Long Animation Frame" OR "LoAF") (site:developer.chrome.com OR site:web.dev OR "Chrome Status")` — *Identifies official platform announcements, web.dev performance documentation, and Chrome release notes tracking feature adoption.* (8 returned)
  - `("Intent to Prototype" OR "Intent to Ship") ("styleDuration" OR "forcedStyleDuration") "long animation frame"` — *Surfaces Blink dev threads, web standards proposals, and engineering consensus discussing the split between style and layout timings.* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 5 result(s) found — **1 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 12 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5171478175809536)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5171478175809536)
- [Specification](https://github.com/w3c/long-animation-frames/pull/30)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/476826067)
