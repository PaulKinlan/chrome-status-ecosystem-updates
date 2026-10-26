# WebGPU: WGSL Fragment Depth

> **Report Week:** 2026-W44 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Adds the ability to provide a \`less\` or \`greater\` modifier to the \`@builtin(frag\_depth)\` in WGSL.  The current \`@builtin(frag\_depth)\` can potentially introduce a performance penalty due to disabling the early-Z optimizations on a draw call. The new modifiers allow the explicit setting of the buffer mode and allow the early-Z optimizations to be applied.

### Motivation

In the current WGSL specification, the mere act of writing to @builtin(frag\_depth) often incurs a significant performance penalty because driver heuristics cannot guarantee that the fragment shader output will adhere to the depth written by the rasterizer's interpolated depth. Consequently, writing to frag\_depth typically forces the GPU to disable crucial early-Z optimizations for the entire draw call.  The introduction of a new depth\_mode built-in parameter for the @builtin(frag\_depth) with modes less, and greater directly addressing this performance limitation by letting the developer express their intent to the hardware.

## Ecosystem Status

- **Momentum:** Emerging (footprint 210 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The WGSL Fragment Depth extension integrates \`less\` and \`greater\` depth-mode modifiers into \`@builtin(frag\_depth)\`, preventing fragment shaders from forfeiting critical hardware early-Z optimizations during depth output. Standardized and merged upstream by the W3C GPU for the Web Working Group, the feature enabled by default in Chromium and Microsoft Edge 156. It provides a standardized WebGPU abstraction for conservative depth semantics found natively in Direct3D HLSL, Metal, and Vulkan.

### Recommendations
- Actionable Advice: WebGPU developers should treat the feature as a progressive performance enhancement by querying \`navigator.gpu.wgslLanguageFeatures.has('fragment\_depth')\` and including \`requires fragment\_depth;\` in shader modules. Teams should continue providing fallback shader variants using standard \`@builtin(frag\_depth)\` to preserve compatibility across engines where the language extension is not yet exposed.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)
- **Chrome usage:** 0.093% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

## 📰 Ecosystem Blogs & Articles

- [fragment\_depth - WGSL language feature availability (1%) - webgpu.report](https://webgpu.report/features/wgsl:fragment_depth) *(webgpu.report)*
  > fragment\_depth - WGSL language feature availability (1%) - webgpu.report webgpu .report fragment\_depth WGSL language feature Specification: WGSL § fragment\_depth Availability now 1% last 30 days, n = 224 Year over year — unlocks once the dataset span...
- [What's New in WebGPU (Chrome 155-156) \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-webgpu-155-156) *(developer.chrome.com)*
  > What&#39;s New in WebGPU (Chrome 155-156) \| Blog \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی...
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Chrome’s developer post highlights the addition of the \`fragment\_depth\` WGSL extension
- [microsoft.com](https://learn.microsoft.com/th-th/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com)*
  > \*\*Microsoft Edge Platform Release Notes:\*\* Edge 156 similarly announced support for the \`less\` and \`greater\` depth modifiers, aligning Chromium-based browser capabilities
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17296.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'Ashley Gullen' via blink-dev Wed, 26 Aug 2026 01:02:48 -0700 FWIW as developers of ...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 There are signals, but indirect...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 On Wed, Aug 26, 2026, 10:52 Dan...
- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails \[email&#160;protected\] Explainer https:/...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /Daniel On 2026-08-26 12:21, Yo...
- [Google Chrome 156 stable version released, enabling random layout using only CSS and changing the IndexedDB storage method to SQLite-based. - GIGAZINE](https://gigazine.net/gsc_news/en/20261021-google-chrome-156) *(gigazine.net · 2026-10-21T08:23:54)*
  > This &lt;strong&gt;allows you to specify the &#x27;less&#x27; or &#x27;greater&#x27; modifier for &#x27;@builtin(frag\_depth)&#x27; used in fragment shaders&lt;/strong&gt;. Previously, rewriting depth values from the fragment shader could disable the &#x27;Early-...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com · 2026-10-20T08:23:54)*
  > The current @builtin(frag\_depth) &lt;strong&gt;can potentially introduce a performance penalty due to disabling the early-Z optimizations on a draw call&lt;/strong&gt;.
- [Microsoft Edge 156 web platform release notes (Oct. 22, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com · 2026-10-21T22:28:01)*
  > Previously, @builtin(frag\_depth) could potentially negatively impact performance, due to disabling the early-Z optimizations on a draw call.
- [What's New in WebGPU (Chrome 155-156) \| daily.dev](https://daily.dev/posts/what-s-new-in-webgpu-chrome-155-156--bbih4rnaw) *(daily.dev · 2026-10-12T15:46:22)*
  > &lt;strong&gt;Chrome 155-156 adds a WGSL fragment\_depth extension letting shaders declare less/greater depth comparison modes to preserve early-Z optimizations&lt;/strong&gt;, a texture-compression-unaligned GPU feature removing block-alignment requirements for ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17296.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'Ashley Gullen' via blink-dev Wed, 26 Aug 2026 01:02:48 -0700 FWIW as deve...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 There are signals, bu...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 On Wed, Aug 26, 2026,...
- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails \[email&#160;protected\] Explain...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/6299`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /Daniel On 2026-08-26...

## 📚 Platform Documentation & Specifications

- [WGSL Proposal for fragment depth (less, greater, any) · Issue #5342 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5342) *(github.com)*
- [w3.org](https://www.w3.org/TR/WGSL) *(w3.org)*
- [feat(graphics): adopt WGSL fragment\_depth once every WebGPU browser ships it · Issue #9703 · playcanvas/engine](https://github.com/playcanvas/engine/issues/9703) *(github.com)*
- [\[WGSL fragment depth\] (less, greater, any) Metal behavior · Issue #5351 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5351) *(github.com)*
- [\[WGSL fragment depth\] (less, greater, any) portability · Issue #5349 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5349) *(github.com)*
- [\[WGSL fragment depth\] (less, greater, any) syntax change · Issue #5350 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5350) *(github.com)*
- [Support for conservative depth · Issue #3961 · gfx-rs/wgpu](https://github.com/gfx-rs/wgpu/issues/3961) *(github.com)*
- [\[Time sensitive\] Rename WGSL feature "fragment\_depth" · Issue #11050 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/11050) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 46 result(s) found across 12 planned queries — **18 verified relevant**
  - `"chromestatus.com/feature/5663304168112128" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/gpuweb/gpuweb/pull/6299" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"WebGPU: WGSL Fragment Depth" API` — *Core feature API query* (3 returned)
  - `"WebGPU: WGSL Fragment Depth" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"@builtin(frag_depth)" OR "early-z" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebGPU: WGSL Fragment Depth" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (4 returned)
  - `"WebGPU: WGSL Fragment Depth" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WGSL" "frag_depth" ("less" OR "greater") "early-z"` — *Searches for developer guides and tutorials explaining early-Z performance optimizations using WGSL fragment depth modifiers.* (8 returned)
  - `"@builtin(frag_depth" ("less" OR "greater") WGSL shader example` — *Finds real-world WGSL fragment shader code examples demonstrating the updated frag\_depth syntax.* (8 returned)
  - `"frag_depth" ("gpuweb" OR "Dawn" OR "tint" OR "Chrome") "less" OR "greater"` — *Tracks browser engine implementation, Dawn/Tint compiler support, and feature availability for WGSL fragment depth mode.* (8 returned)
  - `site:github.com/gpuweb/gpuweb "frag_depth" "depth_mode" OR "early-z"` — *Locates spec discussions, proposals, and working group feedback on fragment depth modifiers in WebGPU/WGSL.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webgpu", shared with 44 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webgpu": no stable pass rate for Chrome yet*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5663304168112128)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5663304168112128)
- [Specification](https://github.com/gpuweb/gpuweb/pull/6299)
- [Chromium Tracking Bug](https://crbug.com/457993779)
