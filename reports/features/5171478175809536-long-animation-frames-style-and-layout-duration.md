# Long Animation Frames style and layout duration

> **Report Week:** 2026-W43 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Add \`styleDuration\` and \`forcedStyleDuration\` information to the Long Animation Frame API, enabling developers to distinguish style and layout times.

### Motivation

Currently performance-conscious developers have no way to distinguish their style time from their layout time, making CSS performance issues less actionable than they can be.  This feature enables developers to make that distinction.

## Ecosystem Status

- **Momentum:** High (footprint 355 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** The Long Animation Frames (LoAF) API has been expanded to include granular sub-metrics like \`styleDuration\` and \`forcedStyleDuration\` (along with layout durations), offering unprecedented visibility into CSS performance bottlenecks. While fully enabled in Chromium-based browsers, it lacks baseline interoperability as other engines have yet to ship matching implementations.

### Recommendations
- Actionable Advice: Teams can leverage these granular metrics in Chromium/Edge environments today for advanced Real User Monitoring (RUM) and performance debugging. Because it functions as an additive diagnostic API, it can be progressively adopted wherever supported without breaking fallback experiences.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tunetheweb: "Answering for @noamr who’s on annual leave at the moment.  This started off as part of the long tasks spec—hence the links in the original request in ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Performance timeline - Long Animation Frames](https://github.com/WebKit/standards-positions/issues/283) [open]

## 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://learn.microsoft.com/ga-ie/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > The \*\*Long Animation Frames (LoAF) API\*\* has been expanded to include granular sub-metrics—specifically \*\*\`styleDuration\`\*\*, \*\*\`forcedStyleDuration\`\*\*, \*\*\`layoutDuration\`\*\*, and \*\*\`forcedLayoutDuration\`\*\* Browser platform updates (such as Chrome and ...
- [Long Animation Frames API \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/long-animation-frames) *(developer.chrome.com)*
  > Previously, the API provided a high-level \`styleAndLayoutStart\` timestamp and an aggregated total duration for rendering-related tasks
- [mironsoft.de](https://www.mironsoft.de/en/blog/performance-long-animation-frames-api-loaf-diagnostics) *(mironsoft.de)*
  > Previously, the API provided a high-level \`styleAndLayoutStart\` timestamp and an aggregated total duration for rendering-related tasks
- [appspot.com](https://cr-status.appspot.com/release-notes/157) *(cr-status.appspot.com)*
  > Browser platform updates (such as Chrome and Microsoft Edge platform releases) highlight this feature as a critical upgrade for web performance tooling
- [debugbear.com](https://www.debugbear.com/blog/long-animation-frames) *(debugbear.com)*
  > Ecosystem reactions from performance monitoring blogs (like DebugBear and RUM providers) emphasize that diagnosing INP bottlenecks requires understanding what happens \*outside\* of raw JavaScript execution
- [chrome.com](https://developer.chrome.com/blog/loaf-has-shipped) *(developer.chrome.com)*
  > Ecosystem reactions from performance monitoring blogs (like DebugBear and RUM providers) emphasize that diagnosing INP bottlenecks requires understanding what happens \*outside\* of raw JavaScript execution
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17740.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Philip Jägenstedt Thu, 15 Oct 2026 01:30:08 ...
- [\[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17610.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Alex Russell Wed, 30 Sep 2026 08:35:51 -0700 LGTM1; ...
- [\[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17594.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Yoav Weiss (@Shopify) Wed, 30 Sep 2026 06:47:27 -0700 \*Conta...
- [\[blink-dev\] Intent to Prototype: Long Animation Frames style duration](https://www.mail-archive.com/blink-dev@chromium.org/msg15596.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Yoav Weiss (@Shopify) Mon, 19 Jan 2026 02:27:24 -0800 \*Contact emails\* \[...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17739.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Philip Jägenstedt Thu, 15 Oct 2026 01:28:45 ...
- [SpeedCurve \| The Definitive Guide to Long Animation Frames (LoAF)](https://www.speedcurve.com/blog/guide-long-animation-frames-loaf) *(speedcurve.com · 2025-05-19T00:00:00)*
  > { &quot;name&quot;: &quot;long-animation-frame&quot;, &quot;entryType&quot;: &quot;long-animation-frame&quot;, &quot;navigationId&quot;: &quot;508afc4b-f812-456f-a22a-4938478e4e1b&quot;, &quot;startTime&quot;: 2899, &quot;duration&quot;: 143, &quot;r...
- [Long Animation Frames (LoAF): How to Use It To Improve INP](https://nitropack.io/blog/post/long-animation-frames) *(nitropack.io · 2024-06-07T00:00:00)*
  > Better attribution: One of the critical strengths of the LoAF API is its ability to provide detailed attribution for long frames. This means you can precisely identify what processes or elements are causing delays. Whether it&#x27;s a particular scri...
- [Fixing Long Animation Frames (LoAF) - Request Metrics 🦥](https://requestmetrics.com/web-performance/fixing-long-animation-frame-loaf) *(requestmetrics.com · 2026-05-19T15:45:06)*
  > &lt;strong&gt;Any duration over 50 milliseconds will be reported as a Long Animation Frame&lt;/strong&gt;. During the frame, there may be a firstUIEvent, such as a click or keystroke. These are user interactions that need to be handled before the browser can ren...
- [Catch Metrics - the web performance experts - Enhancing Web Performance with Long Animation Frames API: Analyze, Measure, Optimize](http://www.catchmetrics.io/blog/enhancing-web-performance-with-long-animation-frames-api-analyze-measure-optimize) *(catchmetrics.io)*
  > ⁠Displays timing details, helping pinpoint when long frames occur. To visualize and analyze long animation frames in the browser: &lt;strong&gt;Open Chrome DevTools (Ctrl+Shift+I or Cmd+Opt+I).&lt;/strong&gt; ... Hover over long tasks to inspect their causes (e....
- [What are Long Animation Frames (LoAF)? - Request Metrics 🦥](https://requestmetrics.com/web-performance/long-animation-frame-loaf) *(requestmetrics.com · 2026-05-19T15:45:06)*
  > From the time the user clicks the button until the spinner is visible, that entire process is considered one animation frame. &lt;strong&gt;Ideally, animation frames on the web should happen about 20 times per second&lt;/strong&gt; for users to feel like the web...
- [Intent to Ship: Long Animation Frame Timing](https://groups.google.com/a/chromium.org/g/blink-dev/c/5IzAuV4WtfU/m/ajbaoKf6BgAJ) *(groups.google.com)*
  > &lt;strong&gt;This is an extension of long tasks&lt;/strong&gt;. It measures the task together with its subsequent rendering update, adding information such as long running scripts, rendering time, and time spent in forced layout and style (&quot;layout thrashin...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17738.html) *(mail-archive.com)*
  > Best, Alex On Wednesday, September ...m/w3c/long-animation-frames/pull/30 \*Summary\* &lt;strong&gt;Add \`styleDuration\` and \`forcedStyleDuration\` information to the Long Animation Frame API, enabling developers to distinguish style and layout times&lt;/strong&gt;....
- [Re: \[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg16034.html) *(mail-archive.com)*
  > On Fri, Mar 6, 2026 at 9:02 AM ...frames/pull/30 \*Summary\* &lt;strong&gt;Add \`styleDuration\`, \`forcedStyleDuration\`, \`layoutDuration\` and \`forcedLayoutDuration\` information to the Long Animation Frame API, enabling developers to distinguish style and layou...
- [Long Animation Frames API](https://w3c.github.io/long-animation-frames) *(w3c.github.io · 2026-09-03T00:00:00)*
  > If frameDuration is less than 50 milliseconds, then set document’s nearest same-origin root’s current frame timing info to null and return. Set timingInfo’s update the rendering start time to timingInfo’s current task start time. Set timingInfo’s sty...
- [\[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg16017.html) *(mail-archive.com)*
  > \*Specification\* &lt;strong&gt;https://github.com/w3c/long-animation-frames/pull/30&lt;/strong&gt; \*Summary\* Add \`styleDuration\`, \`forcedStyleDuration\`, \`layoutDuration\` and \`forcedLayoutDuration\` information to the Long Animation Frame API, enabling developers t...
- [Re: \[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg16025.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; ...ames/pull/30 &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; \*Summary\* &gt;&gt;&gt;&gt;&gt;&gt;&gt;...
- [The Long Animation Frames API: Find What Actually Broke Your INP - DEV Community](https://dev.to/grimicorn/the-long-animation-frames-api-find-what-actually-broke-your-inp-bep) *(dev.to · 2026-08-10T08:06:37)*
  > const observer = new ... frame.blockingDuration, scriptTime: frame.renderStart ? &lt;strong&gt;frame.renderStart - frame.startTime : 0, styleAndLayout: frame.styleAndLayoutStart ?&lt;/strong&gt;...
- [Your Lighthouse Score Is 100. Long Animation Frames Explain the Jank. - DEV Community](https://dev.to/parsajiravand/your-lighthouse-score-is-100-long-animation-frames-explain-the-jank-1fip) *(dev.to · 2026-10-11T12:25:55)*
  > &lt;strong&gt;new PerformanceObserver((list) =&gt; { for (const entry of list.getEntries()) { console.log(entry.duration); // 187&lt;/strong&gt; // ...and basically nothing else usable.
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17762.html) *(mail-archive.com)*
  > Best, Alex On Wednesday, September .../w3c/long-animation-frames/pull/30&gt; \*Summary\* &lt;strong&gt;Add \`styleDuration\` and \`forcedStyleDuration\` information to the Long Animation Frame API, enabling developers to distinguish style and layout times&lt;/stron...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17740.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Philip Jägenstedt Thu, 15 Oct 2026...
- [\[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17610.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Alex Russell Wed, 30 Sep 2026 08:35:51 -07...
- [\[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17594.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Yoav Weiss (@Shopify) Wed, 30 Sep 2026 06:47:27 -0...
- [\[blink-dev\] Intent to Prototype: Long Animation Frames style duration](https://www.mail-archive.com/blink-dev@chromium.org/msg15596.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Yoav Weiss (@Shopify) Mon, 19 Jan 2026 02:27:24 -0800 \*Contact...

## 📚 Platform Documentation & Specifications

- [Long Animation Frames style and Layout duration · Issue #4453 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4453) *(github.com)*
- [w3.org](https://www.w3.org/TR/long-animation-frames) *(w3.org)*
- [Long Animation Frames style and layout duration · Issue #1615 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1615) *(github.com)*
- [Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/39) *(github.com)*
- [Long Animation Frames API · Issue #1372 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1372) *(github.com)*
- [Long animation frame timing - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing) *(developer.mozilla.org)*
- [Add bounds to LoAF style and layout durations by yoavweiss · Pull Request #63399 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63399) *(github.com)*
- [PerformanceLongAnimationFrameTiming: styleAndLayoutStart property](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart) *(developer.mozilla.org)*
- [PerformanceLongAnimationFrameTiming: blockingDuration property](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 11 planned queries — **26 verified relevant**
  - `"chromestatus.com/feature/5171478175809536" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/w3c/long-animation-frames/pull/30" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"Long Animation Frames style and layout duration" API` — *Core feature API query* (6 returned)
  - `"Long Animation Frames style and layout duration" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"performance-conscious" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Long Animation Frames style and layout duration" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Long Animation Frames style and layout duration" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Long Animation Frames" styleDuration forcedStyleDuration tutorial` — *Finds developer blog posts and guides explaining how to use styleDuration and forcedStyleDuration.* (8 returned)
  - `PerformanceObserver "long-animation-frame" styleDuration layoutDuration code example` — *Searches for practical JavaScript code snippets using the Long Animation Frame API to inspect style and layout times.* (8 returned)
  - `w3c long-animation-frames pull request 30 styleDuration` — *Tracks the specification discussions, official announcements, and status of the style and layout duration proposal.* (8 returned)
  - `debug css performance long animation frames styleDuration vs forcedStyleDuration` — *Discovers developer discussions and sentiment around using LoAF data to diagnose CSS and layout bottlenecks.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 6 result(s) found — **2 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5171478175809536)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5171478175809536)
- [Specification](https://github.com/w3c/long-animation-frames/pull/30)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/476826067)
