# Long Animation Frames style and layout duration

> **Report Week:** 2026-W44 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Add \`styleDuration\` and \`forcedStyleDuration\` information to the Long Animation Frame API, enabling developers to distinguish style and layout times.

### Motivation

Currently performance-conscious developers have no way to distinguish their style time from their layout time, making CSS performance issues less actionable than they can be.  This feature enables developers to make that distinction.

## Ecosystem Status

- **Momentum:** Moderate (footprint 225 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Long Animation Frames style and layout duration enhancement disaggregates aggregate rendering metrics into discrete styleDuration, layoutDuration, forcedStyleDuration, and forcedLayoutDuration timings across animation frame and script timing interfaces. Shipping enabled by default in Chromium-based browsers following its standardization in the W3C Web Performance Working Group, it addresses longstanding gaps in pinpointing CSS recalculation costs versus DOM layout thrashing. However, it remains an engine-specific diagnostic enhancement as Gecko and WebKit have yet to adopt the foundational Long Animation Frames API.

### Recommendations
- Actionable Advice: Development teams should adopt these properties using progressive feature-checking inside existing PerformanceObserver entries to feed enriched RUM diagnostics for Chromium users. Use the isolated style and layout metrics to prioritize selector simplification over layout thrashing refactors, but maintain fallbacks for the composite durations across other environments.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tunetheweb: "Answering for @noamr who’s on annual leave at the moment.  This started off as part of the long tasks spec—hence the links in the original request in ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Performance timeline - Long Animation Frames](https://github.com/WebKit/standards-positions/issues/283) [open]

## 📰 Ecosystem Blogs & Articles

- [Microsoft Edge Origin Trials](https://developer.microsoft.com/microsoft-edge/origin-trials/trials/349e23d8-799a-4ac2-b45a-ffb91e09b4ce) *(developer.microsoft.com)*
  > Microsoft Edge Origin Trials Skip to main content Sign-in to GitHub Long Animation Frames - separate style and layout durations Add \`styleDuration\`, \`forcedStyleDuration\`, \`layoutDuration\` and \`forcedLayoutDuration\` information to the Long Animation ...
- [chrome.com](https://developer.chrome.com/docs/web-platform/long-animation-frames) *(developer.chrome.com)*
  > Previously, LoAF bundled style recalculation and layout calculations together (e.g., exposing only \`styleAndLayoutStart\` for the render cycle and aggregate \`forcedStyleAndLayoutDuration\` for script executions)
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > The update introduces fine-grained duration properties across two interfaces \`styleDuration\`: Time spent on style recalculation during the rendering phase
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > \*\*Chrome Release Notes & Beta Updates\*\*: Chrome documented the feature under release notes and intent entries for Long Animation Frames The entries highlight that splitting these durations allows developers to differentiate between CSS selector perfo...
- [google.com](https://issuetracker.google.com/514439436) *(issuetracker.google.com)*
  > The review notes that these attributes do not expose fundamentally new attack vectors or timing leaks beyond what was already observable via \`styleAndLayoutStart\` and \`forcedStyleAndLayoutDuration\`; rather, they represent a structured decomposition c...
- [nucliweb.net](https://webperf-snippets.nucliweb.net/Interaction/Long-Animation-Frames) *(webperf-snippets.nucliweb.net)*
  > High \`forcedLayoutDuration\` points to alternating DOM writes and dimension reads inside loops or animation loops
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17740.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Philip Jägenstedt Thu, 15 Oct 2026 01:30:08 ...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17667.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Rick Byers Wed, 07 Oct 2026 08:18:45 -0700 L...
- [\[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17610.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Alex Russell Wed, 30 Sep 2026 08:35:51 -0700 LGTM1; ...
- [\[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17594.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Yoav Weiss (@Shopify) Wed, 30 Sep 2026 06:47:27 -0700 \*Conta...
- [\[blink-dev\] Intent to Prototype: Long Animation Frames style duration](https://www.mail-archive.com/blink-dev@chromium.org/msg15596.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Yoav Weiss (@Shopify) Mon, 19 Jan 2026 02:27:24 -0800 \*Contact emails\* \[...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17739.html) *(mail-archive.com)*
  > &gt; &gt; Best, &gt; &gt; Alex &gt; &gt; On Wednesday, ...ng-animation-frames/pull/30 &gt; &gt; \*Summary\* &gt; &lt;strong&gt;Add \`styleDuration\` and \`forcedStyleDuration\` information to the Long &gt; Animation Frame API, enabling developers to distinguish ...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17738.html) *(mail-archive.com)*
  > Best, Alex On Wednesday, September ...m/w3c/long-animation-frames/pull/30 \*Summary\* &lt;strong&gt;Add \`styleDuration\` and \`forcedStyleDuration\` information to the Long Animation Frame API, enabling developers to distinguish style and layout times&lt;/strong&gt;....
- [Chrome Platform Status](https://chromestatus.com/feature/5127767286874112) *(chromestatus.com · 2020-11-20T00:00:00)*
  > We cannot provide a description for this page right now
- [Chrome Platform Status](https://img544-dot-cr-status.appspot.com/feature/5171478175809536) *(img544-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [Chrome Platform Status](https://img968-dot-cr-status.appspot.com/feature/5171478175809536?gate=6516503656660992) *(img968-dot-cr-status.appspot.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17740.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Philip Jägenstedt Thu, 15 Oct 2026...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17667.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Rick Byers Wed, 07 Oct 2026 08:18:...
- [\[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17610.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Alex Russell Wed, 30 Sep 2026 08:35:51 -07...
- [\[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17594.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Yoav Weiss (@Shopify) Wed, 30 Sep 2026 06:47:27 -0...
- [\[blink-dev\] Intent to Prototype: Long Animation Frames style duration](https://www.mail-archive.com/blink-dev@chromium.org/msg15596.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Yoav Weiss (@Shopify) Mon, 19 Jan 2026 02:27:24 -0800 \*Contact...

## 📚 Platform Documentation & Specifications

- [style\_layout\_duration\_security\_privacy\_questionnaire.md · GitHub](https://gist.github.com/yoavweiss/18e5c13239c43e34dadeda0fd2846834) *(gist.github.com)*
- [w3.org](https://www.w3.org/groups/wg/webperf/activity) *(w3.org)*
- [Long Animation Frames style and Layout duration · Issue #4453 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4453) *(github.com)*
- [Long Animation Frames style and layout duration · Issue #1615 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1615) *(github.com)*
- [Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/39) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 11 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5171478175809536" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/w3c/long-animation-frames/pull/30" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"Long Animation Frames style and layout duration" API` — *Core feature API query* (6 returned)
  - `"Long Animation Frames style and layout duration" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"performance-conscious" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Long Animation Frames style and layout duration" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Long Animation Frames style and layout duration" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Long Animation Frames" ("styleDuration" OR "forcedStyleDuration") blog OR guide OR tutorial` — *Discovers developer guides, performance writeups, and tutorials explaining how to measure style vs layout bottlenecks using LoAF.* (0 returned)
  - `"PerformanceLongAnimationFrameTiming" OR "long-animation-frame" ("styleDuration" AND "forcedStyleDuration")` — *Finds actual JavaScript code snippets, interface implementations, and WebIDL usage of the new duration attributes.* (8 returned)
  - `site:chromestatus.com OR site:web.dev "styleDuration" OR "forcedStyleDuration" "long animation frame"` — *Tracks platform status updates, browser implementation signals, and official web.dev articles on new LoAF layout timing metrics.* (8 returned)
  - `site:github.com/w3c/long-animation-frames OR site:issues.chromium.org "forcedStyleDuration" OR "styleDuration"` — *Surfaces community feedback, developer requests, spec discussions, and bug tracking related to splitting style and layout durations.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 3 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 9 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 16 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5171478175809536)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5171478175809536)
- [Specification](https://github.com/w3c/long-animation-frames/pull/30)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/476826067)
