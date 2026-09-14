# PredefinedColorSpace srgb-linear and display-p3-linear

> **Report Week:** 2026-W38 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases.

### Motivation

Linear color spaces (where pixel values correspond linearly to luminance) are extremely commonly used in applications with connections to physical light rendering (e.g, games) or spatial processing (e.g, decimation, anti-aliasing, and interpolation).

## Ecosystem Status

- **Momentum:** High (170 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** PredefinedColorSpace srgb-linear and display-p3-linear is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17407.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Mike Taylor Wed, 09 Sep 2026 07:49:38 ...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) [blink-dev] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Chromestatus Fri, 04 Sep 2026 13:39:37 -0700 C...
- [\[canvas\] Warning on getImageData uses from create.js library \| Community](https://community.adobe.com/t5/animate-discussions/canvas-warning-on-getimagedata-uses-from-create-js-library/td-p/13396005) *(community.adobe.com · 2022-12-05T15:05:19)*
  > --> [canvas] Warning on getImageData uses from create.js library | Community Skip to main content Create a post Login Home App communities Animate Questions [canvas] Warning on getImageData uses from create.js library chespio Inspiring Forum|Forum|3 ...
- [Canvas2D: Multiple readback operations \| CanvasJS Charts](https://canvasjs.com/forums/topic/canvas2d-multiple-readback-operations) *(canvasjs.com · 2023-05-15T05:10:58)*
  > When I try to use CanvasJs I get this warning on Chrome: canvasjs.min.js:27 Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true. See: https://<strong>html.spec.whatwg.org/multipage/ca...
- [Web application related coding questions - SheCodes Athena \| SheCodes](https://www.shecodes.io/athena?tag=web+application) *(shecodes.io)*
  > Web application related coding questions - SheCodes Athena | SheCodes Back to School Sale 🎉 30% off on all coding workshops ending on September 15th Ending in 14 hours Get Deal Get This Deal NOW AI + Coding Workshops NEW AI Coding Workshops New Buil...
- [r/Crunchyroll on Reddit: So, does Crunchyroll support Microsoft Edge on Windows 11?](https://www.reddit.com/r/Crunchyroll/comments/1ki2ehg/so_does_crunchyroll_support_microsoft_edge_on) *(reddit.com · 2025-05-08T21:55:03)*
  > (anonymous) @ bundle.js:2 bundle.js:2 WebAssembly support detected: yes bundle.js:2 Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true. See: https://<strong>html.spec.whatwg.org/mult...
- [PredefinedColorSpace srgb-linear and display-p3-linear - Chrome Platform Status](https://chromestatus.com/feature/5122501071994880) *(chromestatus.com · 2025-10-21T00:00:00)*
  > We cannot provide a description for this page right now
- [Introduction to Colour Spaces and DCI-P3 – Metail Tech](https://tech.metail.com/introduction-colour-spaces-dci-p3) *(tech.metail.com · 2018-12-13T00:00:00)*
  > ... DCI-P3 if you target newer screens, because you can represent more colours; sRGB if you can only afford 8-bit per channel – <strong>make sure the gamma is applied to avoid banding artefacts in dark colours</strong> (the eye is more sensitive to d...
- [Exploring the display-P3 color space - EnDavid.com](https://endavid.com/index.php?entry=79) *(endavid.com · 2018-03-11T00:00:00)*
  > In short, you can use <strong>use UIColor to easily create color instances in both sRGB and displayP3</strong>. But notice that those colors will have the gamma already applied to them. If you need linear values, or other color spaces like XYZ, you w...
- [Display P3 and Wide Gamut CSS: A Practical Guide for Designers \| ColorUI - ColorUI](https://colorui.io/blog/display-p3-wide-gamut-css) *(colorui.io · 2026-05-05T00:00:00)*
  > Every iPhone and modern MacBook can show colors sRGB cannot. Here is how to use Display P3 in CSS today, with a clean fallback for older screens.
- [🎨 Colour Spaces Simplified: A Practical Guide — Glyn Dewis](https://glyndewis.com/blog/colour-spaces-simplified) *(glyndewis.com · 2025-12-30T13:15:57)*
  > If you use an iPhone, a Mac, or a recent high-end monitor, you have probably seen Display P3 mentioned. It is a modern wide-gamut colour space, built from the cinema P3 primaries but adapted to the D65 white point and an sRGB-style tone curve used on...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17391.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Fri, Sep 4, 2026 ...html#colour-spaces-and-colour-correction &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to &gt;&gt; PredefinedColorSpace for use with can...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17407.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5122501071994880`)*
  > Re: [blink-dev] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Mike Taylor Wed, 09 Sep 2026...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5122501071994880`)*
  > [blink-dev] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) [blink-dev] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Chromestatus Fri, 04 Sep 2026 13:39:...
- [Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true · Issue #2986 · niklasvh/html2canvas](https://github.com/niklasvh/html2canvas/issues/2986) *(github.com · 2022-11-04T10:45:56)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true · Issue #2986 · niklasvh/html2canvas · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign i...
- [\[canvas\] Warning on getImageData uses from create.js library \| Community](https://community.adobe.com/t5/animate-discussions/canvas-warning-on-getimagedata-uses-from-create-js-library/td-p/13396005) *(community.adobe.com · 2022-12-05T15:05:19)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > --> [canvas] Warning on getImageData uses from create.js library | Community Skip to main content Create a post Login Home App communities Animate Questions [canvas] Warning on getImageData uses from create.js library chespio Inspiring Foru...
- [Canvas2D: Multiple readback operations \| CanvasJS Charts](https://canvasjs.com/forums/topic/canvas2d-multiple-readback-operations) *(canvasjs.com · 2023-05-15T05:10:58)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > When I try to use CanvasJs I get this warning on Chrome: canvasjs.min.js:27 Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true. See: https://<strong>html.spec.whatwg.org/mu...
- [GitHub - w3c/2dcontext: Moved to https://html.spec.whatwg.org/multipage/canvas.html · GitHub](https://github.com/w3c/2dcontext) *(github.com)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > GitHub - w3c/2dcontext: Moved to https://html.spec.whatwg.org/multipage/canvas.html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. ...
- [Web application related coding questions - SheCodes Athena \| SheCodes](https://www.shecodes.io/athena?tag=web+application) *(shecodes.io)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > Web application related coding questions - SheCodes Athena | SheCodes Back to School Sale 🎉 30% off on all coding workshops ending on September 15th Ending in 14 hours Get Deal Get This Deal NOW AI + Coding Workshops NEW AI Coding Workshop...
- [whatwg/html](https://github.com/whatwg/html/issues/11101) *(github.com · 2025-03-04T18:44:58)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > OffscreenCanvas convertToBlob(options) has copy paste errors · Issue #11101 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wi...
- [r/Crunchyroll on Reddit: So, does Crunchyroll support Microsoft Edge on Windows 11?](https://www.reddit.com/r/Crunchyroll/comments/1ki2ehg/so_does_crunchyroll_support_microsoft_edge_on) *(reddit.com · 2025-05-08T21:55:03)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > (anonymous) @ bundle.js:2 bundle.js:2 WebAssembly support detected: yes bundle.js:2 Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true. See: https://<strong>html.spec.whatw...
- [willReadFrequently on getResult() canvas ? · Issue #287 · advanced-cropper/vue-advanced-cropper](https://github.com/advanced-cropper/vue-advanced-cropper/issues/287) *(github.com · 2024-09-21T23:25:32)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > In devtools console I get the following warning: Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true. See: https://<strong>html.spec.whatwg.org/multipage/canvas.html</strong...

## 📚 Platform Documentation & Specifications

- [Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true · Issue #2986 · niklasvh/html2canvas](https://github.com/niklasvh/html2canvas/issues/2986) *(github.com)*
- [GitHub - w3c/2dcontext: Moved to https://html.spec.whatwg.org/multipage/canvas.html · GitHub](https://github.com/w3c/2dcontext) *(github.com)*
- [whatwg/html](https://github.com/whatwg/html/issues/11101) *(github.com)*
- [willReadFrequently on getResult() canvas ? · Issue #287 · advanced-cropper/vue-advanced-cropper](https://github.com/advanced-cropper/vue-advanced-cropper/issues/287) *(github.com)*
- [color() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 38 result(s) found across 7 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/5122501071994880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"html.spec.whatwg.org/multipage/canvas.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" API` — *Core feature API query* (3 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"srgb-linear" OR "display-p" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (4 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 4096 item(s) inspected

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
