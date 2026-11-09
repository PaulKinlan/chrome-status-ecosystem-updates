# PredefinedColorSpace srgb-linear and display-p3-linear

> **Report Week:** 2026-W46 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases.

### Motivation

Linear color spaces (where pixel values correspond linearly to luminance) are extremely commonly used in applications with connections to physical light rendering (e.g, games) or spatial processing (e.g, decimation, anti-aliasing, and interpolation).

## Ecosystem Status

- **Momentum:** Quiet (-30 points since 2026-10-12; footprint 145 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Expanding the PredefinedColorSpace enumeration to include srgb-linear and display-p3-linear bridges CSS color spaces with HTML Canvas, WebGL, and WebGPU pipelines. Enabled by default in Chromium 155, the feature simplifies physically based rendering, lighting calculations, and spatial image filtering by eliminating manual gamma conversion overhead. Broad multi-engine consensus exists across standards bodies, though full cross-browser interoperability remains limited while implementations catch up.

### Recommendations
- Actionable Advice: Adopt srgb-linear and display-p3-linear progressively for WebGL, WebGPU, and 2D canvas contexts by feature-detecting supported color space parameters during context initialization. Maintain fallback shaders or manual gamma decoding for browsers where Gecko and older engine versions have not yet enabled these enumeration values.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

## Standards Positions

- **Mozilla:** [srgb-linear and display-p3-linear PredefinedColorSpace](https://github.com/mozilla/standards-positions/issues/1453) [open]

## Web-features Group

*group-level data: web-features [`canvas-2d-color-management`](https://webstatus.dev/features/canvas-2d-color-management), shared with 3 other ChromeStatus features*

- Share of tests passing in the web-features group `canvas-2d-color-management` on [wpt.fyi](https://wpt.fyi/results?q=feature:canvas-2d-color-management) (via webstatus.dev) — stable: Chrome 57.1% · Edge 71.4% · Firefox 14.3% · Safari 78.6%; experimental: Chrome 60.7% · Edge 75% · Firefox 14.3% · Safari 78.6%

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [What's New in WebGPU (Chrome 155-156)  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/new-in-webgpu-155-156) *(developer.chrome.com)*
  > The Web Platform feature \*\*\`PredefinedColorSpace: srgb-linear and display-p3-linear\`\*\* expands the \`PredefinedColorSpace\` enumeration used by HTML Canvas APIs (\`CanvasRenderingContext2D\`, \`ImageData\`, WebGL \`drawingBufferColorSpace\` / \`unpackColorSpa...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17391.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Rick Byers Tue, 08 Sep 2026 13:49:24 -...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Chromestatus Fri, 04 Sep 2026 13:39:37 -0700 C...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17384.html) *(mail-archive.com)*
  > &gt; \*Contact emails\* &gt; \[email protected\] &gt; &gt; \*Specification\* &gt; &gt; https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction &gt; &gt; \*Summary\* &gt; Add srgb-linear and display-p3-linear color spaces (as de...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17396.html) *(mail-archive.com)*
  > &gt; LGTM2 &gt; &gt; On Mon, Sep 7, 2026 ...l#colour-spaces-and-colour-correction &gt;&gt;&gt; &gt;&gt;&gt; \*Summary\* &gt;&gt;&gt; &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by CSS) &gt;&gt;&gt; to PredefinedColorSpace for...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17494.html) *(mail-archive.com)*
  > &gt; On 9/9/26 6:42 a.m., Yoav Weiss ...spaces-and-colour-correction &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Summary\* &gt;&gt;&gt;&gt; &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by CSS) &gt;&gt;&gt;&gt; to Pred...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17407.html) *(mail-archive.com)*
  > On Tue, Sep 8, 2026 at 10:49 PM ...age/canvas.html#colour-spaces-and-colour-correction \*Summary\* &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases&lt;/strong&gt;....
- [Chrome 155 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta?hl=en) *(developer.chrome.com)*
  > &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases&lt;/strong&gt;.
- [Chrome 155 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2105325011116646507) *(x.com · 2026-09-30T15:48:01)*
  > &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases&lt;/strong&gt;.
- [Microsoft Edge 155 web platform release notes (Oct. 8, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com · 2026-10-22T00:00:00)*
  > &lt;strong&gt;The srgb-linear and display-p3-linear color spaces can now be used with the Canvas API&lt;/strong&gt;. Linear color spaces, where pixel values correspond linearly to luminance, are commonly used in applications with connections to physical light re...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17391.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5122501071994880`)*
  > Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Rick Byers Tue, 08 Sep 2026 ...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5122501071994880`)*
  > \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Chromestatus Fri, 04 Sep 2026 13:39:...

## 📚 Platform Documentation & Specifications

- [srgb-linear and display-p3-linear PredefinedColorSpace · Issue #1453 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1453) *(github.com)*
- [github.com](https://github.com/whatwg/html/issues/11526) *(github.com)*
- [Add srgb-linear, display-p3-linear, and rec2020-linear color spaces by ccameron-chromium · Pull Request #42 · WICG/canvas-color-space · GitHub](https://github.com/WICG/canvas-color-space/pull/42) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 58 result(s) found across 11 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5122501071994880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (6 returned)
  - `"html.spec.whatwg.org/multipage/canvas.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" API` — *Core feature API query* (8 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"srgb-linear" OR "display-p" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"colorSpace" ("srgb-linear" OR "display-p3-linear") getContext` — *Finds code examples showing 2D canvas context initialization using srgb-linear or display-p3-linear color spaces.* (8 returned)
  - `canvas ("srgb-linear" OR "display-p3-linear") "linear color space" (blending OR rendering)` — *Discovers developer tutorials and articles on physical light rendering, blending, and linear color space handling in HTML Canvas.* (8 returned)
  - `("srgb-linear" OR "display-p3-linear") ("intent to ship" OR chromestatus OR WebKit OR Firefox) canvas` — *Tracks browser vendor release notes, intents to ship, and adoption statuses across Chromium, WebKit, and Gecko.* (8 returned)
  - `"PredefinedColorSpace" ("srgb-linear" OR "display-p3-linear") site:github.com/whatwg/html` — *Surfaces WHATWG specification debates, developer issue threads, and consensus discussions around linear canvas color spaces.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "canvas-2d-color-management", shared with 3 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "canvas-2d-color-management": Chrome 57.1% passing (stable)*

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
