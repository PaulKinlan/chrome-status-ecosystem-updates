# PredefinedColorSpace srgb-linear and display-p3-linear

> **Report Week:** 2026-W44 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases.

### Motivation

Linear color spaces (where pixel values correspond linearly to luminance) are extremely commonly used in applications with connections to physical light rendering (e.g, games) or spatial processing (e.g, decimation, anti-aliasing, and interpolation).

## Ecosystem Status

- **Momentum:** Moderate (footprint 265 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Expanding PredefinedColorSpace to include srgb-linear and display-p3-linear formally aligns canvas backing stores with CSS Color Module Level 4, unlocking accurate linear-light pipelines for physically based rendering and spatial image processing. Chromium has enabled the spaces by default in Chrome and Edge 155, matching WebKit's earlier implementation in Safari. With the WHATWG HTML specification updated, the ecosystem has reached consensus, with Firefox tracking implementation as the final major engine.

### Recommendations
- Actionable Advice: Teams building canvas, WebGL, or WebGPU graphics engines should progressively adopt srgb-linear and display-p3-linear using try-catch checks or context creation fallbacks to standard srgb or display-p3 for unsupported clients like Firefox. Adopting linear backing stores will immediately improve fidelity and shader performance for users on modern Chromium and WebKit browsers.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

## Standards Positions

- **Mozilla:** [srgb-linear and display-p3-linear PredefinedColorSpace](https://github.com/mozilla/standards-positions/issues/1453) [open]

## Web-features Group

*group-level data: web-features [`canvas-2d-color-management`](https://webstatus.dev/features/canvas-2d-color-management), shared with 3 other ChromeStatus features*

- Share of tests passing in the web-features group `canvas-2d-color-management` on [wpt.fyi](https://wpt.fyi/results?q=feature:canvas-2d-color-management) (via webstatus.dev) — stable: Chrome 37% · Edge 37% · Firefox 14.8% · Safari 81.5%; experimental: Chrome 59.3% · Edge 74.1% · Firefox 14.8% · Safari 85.2%

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [januschka.com](https://static.januschka.com/changelog/chromium/i2s/M155.html) *(static.januschka.com)*
  > configure({ colorSpace })\`)
- [stackoverflow.com](https://stackoverflow.com/questions/79981978/why-does-safari-not-support-linear-color-spaces-in-webgpu) *(stackoverflow.com)*
  > configure({ colorSpace })\`) Historically, \`PredefinedColorSpace\` only accepted \`"srgb"\` and \`"display-p3"\` (both of which use non-linear gamma transfer curves)
- [appspot.com](https://img480-dot-cr-status.appspot.com/feature/5122501071994880) *(img480-dot-cr-status.appspot.com)*
  > These values match the CSS Color Module Level 4 specifications and allow canvases to use a linear-light transfer function without gamma encoding
- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5122501071994880) *(img544-dot-cr-status.appspot.com)*
  > \*\*Feature Entry:\*\* \*PredefinedColorSpace srgb-linear and display-p3-linear\* (spearheaded by Christopher Cameron in Blink&gt;Canvas)
- [chrome.com](https://developer.chrome.com/docs/web-platform/webgpu) *(developer.chrome.com)*
  > \*\*Chrome for Developers Blog (\*What's New in WebGPU\*):\*\* Detailed that WebGPU canvases configured with floating-point formats (such as \`rgba16float\`) can now target linear spaces directly without manual, intermediate un-gamma calculations
- [apple.com](https://developer.apple.com/documentation/safari-release-notes/safari-27-release-notes) *(developer.apple.com)*
  > \*\*Safari Release Notes & WebKit Feature Guide:\*\* Documented support for \`srgb-linear\` and \`display-p3-linear\` across Canvas 2D and WebGPU, highlighting support for linear-light color workflows directly in the browser's compositing engine
- [webkit.org](https://webkit.org/blog/18325/webkit-features-for-safari-27-0) *(webkit.org)*
  > \*\*Safari Release Notes & WebKit Feature Guide:\*\* Documented support for \`srgb-linear\` and \`display-p3-linear\` across Canvas 2D and WebGPU, highlighting support for linear-light color workflows directly in the browser's compositing engine
- [microsoft.com](https://learn.microsoft.com/ga-ie/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > \*\*Microsoft Edge Web Platform Release Notes:\*\* Announced compatibility with \`srgb-linear\` and \`display-p3-linear\` for the Canvas API to align Chromium-based implementations across platforms
- [cinevva.com](https://app.cinevva.com/news/2026-09-17-safari-27-model-element-webgpu-clip-planes) *(app.cinevva.com)*
  > \*\*The Solution:\*\* Having native \`srgb-linear\` and \`display-p3-linear\` canvas targets enables rendering pipelines to output linear floating-point values without having the browser mistakenly apply standard non-linear gamma curves
- [threejs.org](https://discourse.threejs.org/t/understanding-wide-gamut-hdr-what-is-currently-achievable-in-threejs-and-how-to-achieve-it/95073) *(discourse.threejs.org)*
  > js forum discussions regarding wide-gamut and HDR workflows, graphics engineers noted that native linear canvas targets eliminate the need for workarounds like engine-specific "Extended" color spaces (\`ExtendedSRGBColorSpace\`) Developers can supply l...
- [hachyderm.io](https://hachyderm.io/@donmccurdy/117424100691999057) *(hachyderm.io)*
  > js / Web3D contributor) and Pekka Paalanen (Wayland / color architect):\*\* On social platforms (Mastodon/Hachyderm), graphics developers celebrated the update while discussing a subtle rendering pitfall McCurdy warned that while \`srgb-linear\` is usefu...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17407.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Mike Taylor Wed, 09 Sep 2026 07:49:38 ...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Chromestatus Fri, 04 Sep 2026 13:39:37 -0700 C...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17391.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Fri, Sep 4, 2026 ...html#colour-spaces-and-colour-correction &gt;&gt; &gt;&gt; \*Summary\* &gt;&gt; &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to &gt;&gt; PredefinedColorSpace for use with can...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17384.html) *(mail-archive.com)*
  > &gt; \*Contact emails\* &gt; \[email protected\] &gt; &gt; \*Specification\* &gt; &gt; https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction &gt; &gt; \*Summary\* &gt; Add srgb-linear and display-p3-linear color spaces (as de...
- [Chrome 155 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2105325011116646507) *(x.com · 2026-09-30T15:48:01)*
  > &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases&lt;/strong&gt;.
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17494.html) *(mail-archive.com)*
  > &gt; On 9/9/26 6:42 a.m., Yoav Weiss ...spaces-and-colour-correction &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Summary\* &gt;&gt;&gt;&gt; &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by CSS) &gt;&gt;&gt;&gt; to Pred...
- [blink-dev - Google Groups](https://groups.google.com/a/chromium.org/g/blink-dev) *(groups.google.com)*
  > Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear
- [Chrome Platform Status](https://img168-dot-cr-status.appspot.com/feature/5122501071994880) *(img168-dot-cr-status.appspot.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17407.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5122501071994880`)*
  > Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Mike Taylor Wed, 09 Sep 2026...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5122501071994880`)*
  > \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Chromestatus Fri, 04 Sep 2026 13:39:...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/mdn/content/issues/42050) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Glossary/Color_space) *(developer.mozilla.org)*
- [github.com](https://github.com/whatwg/html/issues/11526) *(github.com)*
- [WebGPU HDR output displays values above 1.0 brighter than rendered, and the canvas is always sRGB · Issue #9704 · playcanvas/engine](https://github.com/playcanvas/engine/issues/9704) *(github.com)*
- [srgb-linear and display-p3-linear PredefinedColorSpace · Issue #1453 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1453) *(github.com)*
- [Add srgb-linear, display-p3-linear, and rec2020-linear color spaces by ccameron-chromium · Pull Request #42 · WICG/canvas-color-space](https://github.com/WICG/canvas-color-space/pull/42) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 45 result(s) found across 11 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5122501071994880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"html.spec.whatwg.org/multipage/canvas.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" API` — *Core feature API query* (3 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"srgb-linear" OR "display-p" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (3 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `("srgb-linear" OR "display-p3-linear") "colorSpace" canvas getContext` — *Finds code samples demonstrating canvas context initialization with linear predefined color spaces.* (7 returned)
  - `canvas "PredefinedColorSpace" ("srgb-linear" OR "display-p3-linear") (tutorial OR guide OR "how to")` — *Discovers tutorials and developer guides covering canvas rendering using linear color spaces.* (0 returned)
  - `"PredefinedColorSpace" ("srgb-linear" OR "display-p3-linear") ("intent to ship" OR chromestatus OR webkit)` — *Tracks browser release notes, intent-to-ship threads, and platform support updates.* (5 returned)
  - `site:github.com/whatwg/html ("srgb-linear" OR "display-p3-linear")` — *Surfaces specification discussions, spec issues, and consensus deliberations within WHATWG.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 17 result(s) found — **15 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "canvas-2d-color-management", shared with 3 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "canvas-2d-color-management": Chrome 37% passing (stable)*
- **Sources cited by the AI synthesis:** 8 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5122501071994880)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5122501071994880)
- [Specification](https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction)
- [Chromium Tracking Bug](https://issuetracker.google.com/issues/454152417)
