# PredefinedColorSpace srgb-linear and display-p3-linear

> **Report Week:** 2026-W43 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases.

### Motivation

Linear color spaces (where pixel values correspond linearly to luminance) are extremely commonly used in applications with connections to physical light rendering (e.g, games) or spatial processing (e.g, decimation, anti-aliasing, and interpolation).

## Ecosystem Status

- **Momentum:** Moderate (footprint 235 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Chrome 155 enables 'srgb-linear' and 'display-p3-linear' as valid PredefinedColorSpace options for HTML canvas contexts, aligning 2D and 3D web graphics directly with CSS Color Level 4 specifications. This addition allows WebGL, WebGPU, and 2D canvas pipelines to operate directly in linear-light luminance spaces without manual gamma encoding and decoding. Browser vendor alignment is advancing through WHATWG spec updates, with Chrome leading shipping while Mozilla tracks implementation.

### Recommendations
- Actionable Advice: Canvas and WebGL/WebGPU application developers should adopt these color spaces using feature detection or fallback logic to standard 'srgb' or 'display-p3' contexts for older browser engines. Graphics library authors should update PredefinedColorSpace type aliases and verify shaders under linear intensity configurations in Chrome 155+.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

## Standards Positions

- **Mozilla:** [srgb-linear and display-p3-linear PredefinedColorSpace](https://github.com/mozilla/standards-positions/issues/1453) [open]

## Web-features Group

*group-level data: web-features [`canvas-2d-color-management`](https://webstatus.dev/features/canvas-2d-color-management), shared with 3 other ChromeStatus features*

- Share of tests passing in the web-features group `canvas-2d-color-management` on [wpt.fyi](https://wpt.fyi/results?q=feature:canvas-2d-color-management) (via webstatus.dev) — stable: Chrome 37% · Edge 37% · Firefox 14.8% · Safari 81.5%; experimental: Chrome 59.3% · Edge 74.1% · Firefox 14.8% · Safari 81.5%

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [pixijs.download](https://pixijs.download/dev/docs/environment.PredefinedColorSpace.html) *(pixijs.download)*
  > Traditionally, \`PredefinedColorSpace\` restricted web canvases (\`HTMLCanvasElement\`, \`OffscreenCanvas\`, WebGL/WebGPU contexts) primarily to gamma-encoded spaces like \`"srgb"\` and wide-gamut spaces like \`"display-p3"\` js) that rely on \`PredefinedColorS...
- [github.io](https://facelessuser.github.io/coloraide/colors/display_p3_linear) *(facelessuser.github.io)*
  > Modern CSS supports a wide variety of rectangular and polar color spaces (including \`srgb-linear\` and \`display-p3-linear\`) via strings like \`color(srgb-linear ...)\` and \`color(display-p3-linear ...)\`
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17407.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Mike Taylor Wed, 09 Sep 2026 07:49:38 ...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Chromestatus Fri, 04 Sep 2026 13:39:37 -0700 C...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17396.html) *(mail-archive.com)*
  > &gt; LGTM2 &gt; &gt; On Mon, Sep 7, 2026 ...l#colour-spaces-and-colour-correction &gt;&gt;&gt; &gt;&gt;&gt; \*Summary\* &gt;&gt;&gt; &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by CSS) &gt;&gt;&gt; to PredefinedColorSpace for...
- [Color space - Glossary \| MDN](https://translate.google.com/translate?u=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FGlossary%2FColor_space&hl=pt&sl=en&tl=pt&client=srp) *(translate.google.com)*
  > The sRGB color space (standard red, green, and blue) was created for the web, but we are no longer limited to this color space. CSS Color Module Level 4 specifies several predefined color spaces, and CSS Color Module Level 5 goes further, specifying ...
- [New CSS color spaces and functions in all major engines \| Blog \| web.dev](https://web.dev/blog/color-spaces-and-functions) *(web.dev)*
  > This includes sRGB, Display P3, and Rec2020. You can see some examples in the following CSS: .valid-css-color-function-colors { --srgb: color(srgb 1 1 1); --srgb-linear: color(srgb-linear 100% 100% 100% / 50%); --display-p3: color(display-p3 1 1 1); ...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17384.html) *(mail-archive.com)*
  > &gt; \*Contact emails\* &gt; \[email protected\] &gt; &gt; \*Specification\* &gt; &gt; https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction &gt; &gt; \*Summary\* &gt; Add srgb-linear and display-p3-linear color spaces (as de...
- [Chrome 155 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2105325011116646507) *(x.com · 2026-09-30T15:48:01)*
  > &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases&lt;/strong&gt;.
- [Re: \[blink-dev\] Intent to Ship: CSS color space display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg14921.html) *(mail-archive.com)*
  > https://chromestatus.com/feature/5122501071994880 \*Contact emails\* \[email protected\] \*Specification\* /No information provided/ \*Summary\* Add display-p3-linear CSS color space \*Blink component\* Blink&gt;CSS &lt;https://issues.chromium.org/issues?q=cus...
- [\[blink-dev\] Intent to Ship: CSS color space display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg14920.html) *(mail-archive.com)*
  > Adding this space to the list of canvas spaces is a separate feature over at: https://chromestatus.com/feature/5122501071994880 \*Contact emails\* \[email protected\] \*Specification\* \*No information provided\* \*Summary\* &lt;strong&gt;Add display-p3-linear CSS c...
- [blink-dev](https://www.mail-archive.com/blink-dev@chromium.org) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Chromestatus
- [Chrome 155 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com · 2026-09-16T00:00:00)*
  > &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases&lt;/strong&gt;.
- [blink-dev - Google Groups](https://groups.google.com/a/chromium.org/g/blink-dev) *(groups.google.com)*
  > Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17407.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5122501071994880`)*
  > Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Mike Taylor Wed, 09 Sep 2026...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5122501071994880`)*
  > \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Chromestatus Fri, 04 Sep 2026 13:39:...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/mdn/content/issues/42050) *(github.com)*
- [Color space - Glossary - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Glossary/Color_space) *(developer.mozilla.org)*
- [srgb-linear and display-p3-linear PredefinedColorSpace · Issue #1453 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1453) *(github.com)*
- [\[css-color-4\] Expose Linear-light sRGB as CSS syntax? · Issue #6087 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/6087) *(github.com)*
- [Add srgb-linear, display-p3-linear, and rec2020-linear color spaces by ccameron-chromium · Pull Request #42 · WICG/canvas-color-space](https://github.com/WICG/canvas-color-space/pull/42) *(github.com)*
- [Is a canvas swap chain in sRGB or linear space? · gpuweb/gpuweb · Discussion #2537](https://github.com/gpuweb/gpuweb/discussions/2537) *(github.com)*
- [WebGPU HDR output displays values above 1.0 brighter than rendered, and the canvas is always sRGB · Issue #9704 · playcanvas/engine](https://github.com/playcanvas/engine/issues/9704) *(github.com)*
- [\[css-color\] Add display-p3-linear · Issue #12596 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12596) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 11 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/5122501071994880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"html.spec.whatwg.org/multipage/canvas.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" API` — *Core feature API query* (3 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"srgb-linear" OR "display-p" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (3 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `canvas.getContext "colorSpace" "srgb-linear" OR "display-p3-linear"` — *Finds real-world JavaScript code snippets and API calls initializing 2D or WebGL canvas contexts with linear color spaces.* (7 returned)
  - `canvas "srgb-linear" OR "display-p3-linear" "colorSpace" tutorial OR guide` — *Surfaces developer blog posts and practical tutorials explaining linear color spaces and physical light rendering in HTML canvas.* (8 returned)
  - `"PredefinedColorSpace" ("srgb-linear" OR "display-p3-linear") "intent to ship" OR "chromestatus"` — *Tracks browser release notes, feature shipping announcements, and standard adoption milestones across engines.* (8 returned)
  - `canvas ("display-p3-linear" OR "srgb-linear") site:github.com OR site:news.ycombinator.com` — *Discovers community discussions, developer feedback, and framework issue tracker threads regarding linear canvas color spaces.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 4 result(s) found — **4 verified relevant**
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

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5122501071994880)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5122501071994880)
- [Specification](https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction)
- [Chromium Tracking Bug](https://issuetracker.google.com/issues/454152417)
