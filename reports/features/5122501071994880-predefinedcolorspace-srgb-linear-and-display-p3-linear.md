# PredefinedColorSpace srgb-linear and display-p3-linear

> **Report Week:** 2026-W41 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases.

### Motivation

Linear color spaces (where pixel values correspond linearly to luminance) are extremely commonly used in applications with connections to physical light rendering (e.g, games) or spatial processing (e.g, decimation, anti-aliasing, and interpolation).

## Ecosystem Status

- **Momentum:** High (225 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The HTML standard has officially expanded the \`PredefinedColorSpace\` enumeration to include \`srgb-linear\` and \`display-p3-linear\`, standardizing native linear-light canvas backing stores across 2D Canvas, ImageData, WebGL, and WebGPU. Shipped enabled by default in Chrome 155 and supported in WebKit/Safari, this feature resolves longstanding color management pain points for physically based rendering and spatial image processing. Firefox currently tracks implementation under Gecko Bug #1996208 alongside an open standards position, demonstrating strong cross-engine momentum toward Baseline support.

### Recommendations
- Actionable Advice: Teams building advanced graphics, image processing, or PBR pipelines should adopt \`srgb-linear\` and \`display-p3-linear\` using progressive enhancement. Verify support via a \`try...catch\` block during canvas context or \`ImageData\` creation, falling back to manual sRGB conversion passes in non-supporting engines until Gecko completes implementation.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [srgb-linear and display-p3-linear PredefinedColorSpace](https://github.com/mozilla/standards-positions/issues/1453) [open]

## 📰 Ecosystem Blogs & Articles

- [\[canvas\] Warning on getImageData uses from create.js library \| Community](https://community.adobe.com/t5/animate-discussions/canvas-warning-on-getimagedata-uses-from-create-js-library/td-p/13396005) *(community.adobe.com · 2022-12-05T15:05:19)*
  > --> [canvas] Warning on getImageData uses from create.js library | Community Skip to main content Create a post Login Home App communities Animate Questions [canvas] Warning on getImageData uses from create.js library chespio Inspiring Forum|Forum|3 ...
- [Canvas2D: Multiple readback operations \| CanvasJS Charts](https://canvasjs.com/forums/topic/canvas2d-multiple-readback-operations) *(canvasjs.com · 2023-05-15T05:10:58)*
  > canvasjs.min.js:27 Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true. See: https://<strong>html.spec.whatwg.org/multipage/canvas.html</strong>#concept-canvas-will-read-frequently · ...
- [Web application related coding questions - SheCodes Athena \| SheCodes](https://www.shecodes.io/athena?tag=web+application) *(shecodes.io)*
  > Web application related coding questions - SheCodes Athena | SheCodes See what students from United States are saying 250,000+ students recommend See reviews AI + Coding Workshops NEW AI Coding Workshops New Build with AI from week one Coding Worksho...
- [PredefinedColorSpace srgb-linear and display-p3-linear - Chrome Platform Status](https://chromestatus.com/feature/5122501071994880) *(chromestatus.com · 2025-10-21T00:00:00)*
  > We cannot provide a description for this page right now
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17494.html) *(mail-archive.com)*
  > &gt; On 9/9/26 6:42 a.m., Yoav Weiss ...spaces-and-colour-correction &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; *Summary* &gt;&gt;&gt;&gt; <strong>Add srgb-linear and display-p3-linear color spaces (as defined by CSS) &gt;&gt;&gt;&gt; to Pred...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)*
  > Specification https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction Summary <strong>Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases</strong>.
- [Introduction to Colour Spaces and DCI-P3 – Metail Tech](https://tech.metail.com/introduction-colour-spaces-dci-p3) *(tech.metail.com · 2018-12-13T00:00:00)*
  > If you need to do the conversion yourself, I’ve written a couple of posts on how to compute (Exploring Display P3) and test (Stack Overflow). It boils down to this matrix that you can <strong>apply to your linear RGB colours (before applying the gamm...
- [Exploring the display-P3 color space - EnDavid.com](https://endavid.com/index.php?entry=79) *(endavid.com · 2018-03-11T00:00:00)*
  > In short, you can use <strong>use UIColor to easily create color instances in both sRGB and displayP3</strong>. But notice that those colors will have the gamma already applied to them. If you need linear values, or other color spaces like XYZ, you w...
- [Display P3 and Wide Gamut CSS: A Practical Guide for Designers \| ColorUI - ColorUI](https://colorui.io/blog/display-p3-wide-gamut-css) *(colorui.io · 2026-05-05T00:00:00)*
  > Every iPhone and modern MacBook can show colors sRGB cannot. Here is how to use Display P3 in CSS today, with a clean fallback for older screens.
- [Color space - Glossary \| MDN](https://translate.google.com/translate?u=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FGlossary%2FColor_space&hl=pt&sl=en&tl=pt&client=srp) *(translate.google.com)*
  > The sRGB color space (standard red, green, and blue) was created for the web, but we are no longer limited to this color space. CSS Color Module Level 4 specifies several predefined color spaces, and CSS Color Module Level 5 goes further, specifying ...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17384.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Specification* &gt; &gt; https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction &gt; &gt; *Summary* &gt; Add srgb-linear and display-p3-linear color spaces (as de...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes) *(chromestatus.com)*
  > <strong>Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases</strong>.
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17407.html) *(mail-archive.com)*
  > On Tue, Sep 8, 2026 at 10:49 PM ...age/canvas.html#colour-spaces-and-colour-correction *Summary* <strong>Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases</strong>....
- [Chrome 155 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com · 2026-09-16T00:00:00)*
  > <strong>Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true · Issue #2986 · niklasvh/html2canvas](https://github.com/niklasvh/html2canvas/issues/2986) *(github.com · 2022-11-04T10:45:56)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true · Issue #2986 · niklasvh/html2canvas · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign i...
- [\[canvas\] Warning on getImageData uses from create.js library \| Community](https://community.adobe.com/t5/animate-discussions/canvas-warning-on-getimagedata-uses-from-create-js-library/td-p/13396005) *(community.adobe.com · 2022-12-05T15:05:19)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > --> [canvas] Warning on getImageData uses from create.js library | Community Skip to main content Create a post Login Home App communities Animate Questions [canvas] Warning on getImageData uses from create.js library chespio Inspiring Foru...
- [Canvas2D: Multiple readback operations \| CanvasJS Charts](https://canvasjs.com/forums/topic/canvas2d-multiple-readback-operations) *(canvasjs.com · 2023-05-15T05:10:58)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > canvasjs.min.js:27 Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true. See: https://<strong>html.spec.whatwg.org/multipage/canvas.html</strong>#concept-canvas-will-read-fre...
- [GitHub - w3c/2dcontext: Moved to https://html.spec.whatwg.org/multipage/canvas.html · GitHub](https://github.com/w3c/2dcontext) *(github.com)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > GitHub - w3c/2dcontext: Moved to https://html.spec.whatwg.org/multipage/canvas.html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. ...
- [whatwg/html](https://github.com/whatwg/html/issues/11101) *(github.com · 2025-03-04T18:44:58)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > OffscreenCanvas convertToBlob(options) has copy paste errors · Issue #11101 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wi...
- [Web application related coding questions - SheCodes Athena \| SheCodes](https://www.shecodes.io/athena?tag=web+application) *(shecodes.io)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > Web application related coding questions - SheCodes Athena | SheCodes See what students from United States are saying 250,000+ students recommend See reviews AI + Coding Workshops NEW AI Coding Workshops New Build with AI from week one Codi...
- [Setting willReadFrequently on layers created/managed by Konva? · Issue #1417 · konvajs/konva](https://github.com/konvajs/konva/issues/1417) *(github.com · 2022-09-30T15:23:37)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > Setting willReadFrequently on layers created/managed by Konva? · Issue #1417 · konvajs/konva · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [willReadFrequently on getResult() canvas ? · Issue #287 · advanced-cropper/vue-advanced-cropper](https://github.com/advanced-cropper/vue-advanced-cropper/issues/287) *(github.com · 2024-09-21T23:25:32)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > willReadFrequently on getResult() canvas ? · Issue #287 · advanced-cropper/vue-advanced-cropper · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab...

## 📚 Platform Documentation & Specifications

- [Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true · Issue #2986 · niklasvh/html2canvas](https://github.com/niklasvh/html2canvas/issues/2986) *(github.com)*
- [GitHub - w3c/2dcontext: Moved to https://html.spec.whatwg.org/multipage/canvas.html · GitHub](https://github.com/w3c/2dcontext) *(github.com)*
- [whatwg/html](https://github.com/whatwg/html/issues/11101) *(github.com)*
- [Setting willReadFrequently on layers created/managed by Konva? · Issue #1417 · konvajs/konva](https://github.com/konvajs/konva/issues/1417) *(github.com)*
- [willReadFrequently on getResult() canvas ? · Issue #287 · advanced-cropper/vue-advanced-cropper](https://github.com/advanced-cropper/vue-advanced-cropper/issues/287) *(github.com)*
- [srgb-linear and display-p3-linear PredefinedColorSpace · Issue #1453 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1453) *(github.com)*
- [Add srgb-linear, display-p3-linear, and rec2020-linear color spaces by ccameron-chromium · Pull Request #42 · WICG/canvas-color-space](https://github.com/WICG/canvas-color-space/pull/42) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 45 result(s) found across 11 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/5122501071994880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"html.spec.whatwg.org/multipage/canvas.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" API` — *Core feature API query* (3 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"srgb-linear" OR "display-p" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (3 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `canvas getContext ("srgb-linear" OR "display-p3-linear") colorSpace` — *Finds practical JavaScript code examples and API usage configuring HTML canvas 2D or WebGPU/WebGL contexts with linear color spaces.* (4 returned)
  - `"PredefinedColorSpace" ("srgb-linear" OR "display-p3-linear") canvas (tutorial OR guide OR "linear color")` — *Surfaces technical blog posts, explanations, and guides detailing how and why to use linear color spaces in web rendering.* (4 returned)
  - `("srgb-linear" OR "display-p3-linear") "PredefinedColorSpace" ("Intent to Ship" OR "Chrome Platform Status" OR release notes)` — *Tracks browser vendor announcements, standardization progress, and shipment status across Chromium, WebKit, and Gecko.* (5 returned)
  - `("srgb-linear" OR "display-p3-linear") canvas ("color management" OR blending OR interpolation) (site:github.com OR site:news.ycombinator.com OR site:reddit.com)` — *Locates developer discussions, issues, and sentiment regarding linear blending, light simulation, and color space handling on the web.* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 4130 item(s) inspected

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
