# PredefinedColorSpace srgb-linear and display-p3-linear

> **Report Week:** 2026-W42 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases.

### Motivation

Linear color spaces (where pixel values correspond linearly to luminance) are extremely commonly used in applications with connections to physical light rendering (e.g, games) or spatial processing (e.g, decimation, anti-aliasing, and interpolation).

## Ecosystem Status

- **Momentum:** Emerging (footprint 175 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The addition of \`srgb-linear\` and \`display-p3-linear\` to the canvas \`PredefinedColorSpace\` enumeration aligns the WHATWG HTML canvas backing-store pipeline with CSS Color Module Level 4 and WebGPU specifications. The enhancement resolves longstanding ergonomics friction for graphics and game developers by supporting physically linear color calculations directly in canvas without manual gamma conversions. Broad multi-engine consensus is rapidly solidifying, with Chromium enabling it by default in Chrome 155 and Apple already shipping support in Safari release channels.

### Recommendations
- Actionable Advice: Teams building 2D Canvas, WebGL, or WebGPU pipelines should adopt the linear color space identifiers using progressive enhancement, checking context creation parameters before initializing buffers. Fallback branches should continue supplying standard gamma-encoded spaces (\`srgb\` or \`display-p3\`) alongside manual shader transformations until Firefox completes its implementation.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

## Standards Positions

- **Mozilla:** [srgb-linear and display-p3-linear PredefinedColorSpace](https://github.com/mozilla/standards-positions/issues/1453) [open]

## Web-features Group

*group-level data: web-features [`canvas-2d-color-management`](https://webstatus.dev/features/canvas-2d-color-management), shared with 3 other ChromeStatus features*

- Share of tests passing in the web-features group `canvas-2d-color-management` on [wpt.fyi](https://wpt.fyi/results?q=feature:canvas-2d-color-management) (via webstatus.dev) — stable: Chrome 37% · Edge 37% · Firefox 14.8% · Safari 85.2%; experimental: Chrome 59.3% · Edge 74.1% · Firefox 14.8% · Safari 85.2%

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img168-dot-cr-status.appspot.com/feature/5122501071994880) *(img168-dot-cr-status.appspot.com)*
  > The addition of \*\*\`srgb-linear\`\*\* and \*\*\`display-p3-linear\`\*\* to the Canvas \*\*\`PredefinedColorSpace\`\*\* enumeration updates the Web Platform canvas color pipeline Adding their linear-light equivalents aligns the Canvas API directly with the CSS Color ...
- [google.com](https://issuetracker.google.com/issues/454152417/blocking) *(issuetracker.google.com)*
  > Chromium & Chrome Platform Status (Chrome 155) \* \*\*Announcement\*\*: Documented on \*\*Chrome Platform Status\*\* and the \*\*Chrome 155 Beta / Release Notes\*\* under the title \*"PredefinedColorSpace srgb-linear and display-p3-linear"\* (Tracking Bug #45415241...
- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > Chromium & Chrome Platform Status (Chrome 155) \* \*\*Announcement\*\*: Documented on \*\*Chrome Platform Status\*\* and the \*\*Chrome 155 Beta / Release Notes\*\* under the title \*"PredefinedColorSpace srgb-linear and display-p3-linear"\* (Tracking Bug #45415241...
- [chromestatus.com](https://chromestatus.com/release-notes/155) *(chromestatus.com)*
  > Chromium & Chrome Platform Status (Chrome 155) \* \*\*Announcement\*\*: Documented on \*\*Chrome Platform Status\*\* and the \*\*Chrome 155 Beta / Release Notes\*\* under the title \*"PredefinedColorSpace srgb-linear and display-p3-linear"\* (Tracking Bug #45415241...
- [microsoft.com](https://learn.microsoft.com/ga-ie/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > \* \*\*Microsoft Edge 155 Release Notes\*\*: Echoed the Chromium milestone, highlighting native canvas engine support for both linear color spaces across Chromium-based browsers
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17494.html) *(mail-archive.com)*
  > &gt; On 9/9/26 6:42 a.m., Yoav Weiss ...spaces-and-colour-correction &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Summary\* &gt;&gt;&gt;&gt; &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by CSS) &gt;&gt;&gt;&gt; to Pred...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)*
  > Specification https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction Summary &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases&lt;/strong&gt;.
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17384.html) *(mail-archive.com)*
  > &gt; \*Contact emails\* &gt; \[email protected\] &gt; &gt; \*Specification\* &gt; &gt; https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction &gt; &gt; \*Summary\* &gt; Add srgb-linear and display-p3-linear color spaces (as de...
- [Chrome 155 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2105325011116646507) *(x.com · 2026-09-30T15:48:01)*
  > &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases&lt;/strong&gt;.
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17407.html) *(mail-archive.com)*
  > On Tue, Sep 8, 2026 at 10:49 PM ...age/canvas.html#colour-spaces-and-colour-correction \*Summary\* &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases&lt;/strong&gt;....
- [PredefinedColorSpace enum - WebIDLpedia](https://dontcallmedom.github.io/webidlpedia/names/PredefinedColorSpace.html) *(dontcallmedom.github.io)*
  > PredefinedColorSpace enum - WebIDLpedia PredefinedColorSpace enum"&gt; --&gt; WebIDLpedia PredefinedColorSpace enum Definition HTML Standard defines PredefinedColorSpace enum PredefinedColorSpace { " srgb " , " srgb-linear " , " display-p3 " , " display-p3...

## 📚 Platform Documentation & Specifications

- [srgb-linear and display-p3-linear PredefinedColorSpace · Issue #1453 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1453) *(github.com)*
- [github.com](https://github.com/mdn/content/issues/42050) *(github.com)*
- [github.com](https://github.com/whatwg/html/issues/11526) *(github.com)*
- [Add srgb-linear, display-p3-linear, and rec2020-linear color spaces by ccameron-chromium · Pull Request #42 · WICG/canvas-color-space](https://github.com/WICG/canvas-color-space/pull/42) *(github.com)*
- [Issue · playcanvas/engine](https://github.com/playcanvas/engine/issues/9704) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 48 result(s) found across 11 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5122501071994880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"html.spec.whatwg.org/multipage/canvas.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" API` — *Core feature API query* (3 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"srgb-linear" OR "display-p" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (3 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `("srgb-linear" OR "display-p3-linear") canvas getContext "colorSpace"` — *Finds code snippets and WebIDL usage initializing HTML canvas contexts or ImageData with linear color spaces.* (8 returned)
  - `canvas ("srgb-linear" OR "display-p3-linear") ("linear color space" OR "gamma correction") (guide OR tutorial OR blog)` — *Discovers developer guides and blog posts explaining physical luminance and linear color workflow on the web.* (0 returned)
  - `"PredefinedColorSpace" ("srgb-linear" OR "display-p3-linear") ("Intent to Ship" OR Chrome OR WebKit OR Safari)` — *Surfaces browser vendor announcements, release notes, and Intent to Ship discussions tracking feature implementation.* (4 returned)
  - `("srgb-linear" OR "display-p3-linear") canvas (Three.js OR WebGL OR WebGPU OR shaders) (site:github.com OR site:news.ycombinator.com)` — *Identifies community feedback, issue discussions, and adoption sentiment within graphics programming communities.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 17 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 6 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "canvas-2d-color-management", shared with 3 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "canvas-2d-color-management": Chrome 37% passing (stable)*
- **Sources cited by the AI synthesis:** 8 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 11 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5122501071994880)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5122501071994880)
- [Specification](https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction)
- [Chromium Tracking Bug](https://issuetracker.google.com/issues/454152417)
