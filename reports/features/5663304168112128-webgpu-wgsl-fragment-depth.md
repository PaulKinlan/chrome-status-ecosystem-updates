# WebGPU: WGSL Fragment Depth

> **Report Week:** 2026-W43 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Adds the ability to provide a \`less\` or \`greater\` modifier to the \`@builtin(frag\_depth)\` in WGSL.  The current \`@builtin(frag\_depth)\` can potentially introduce a performance penalty due to disabling the early-Z optimizations on a draw call. The new modifiers allow the explicit setting of the buffer mode and allow the early-Z optimizations to be applied.

### Motivation

In the current WGSL specification, the mere act of writing to @builtin(frag\_depth) often incurs a significant performance penalty because driver heuristics cannot guarantee that the fragment shader output will adhere to the depth written by the rasterizer's interpolated depth. Consequently, writing to frag\_depth typically forces the GPU to disable crucial early-Z optimizations for the entire draw call.  The introduction of a new depth\_mode built-in parameter for the @builtin(frag\_depth) with modes less, and greater directly addressing this performance limitation by letting the developer express their intent to the hardware.

## Ecosystem Status

- **Momentum:** Emerging (footprint 180 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The WGSL Fragment Depth extension enhances WebGPU by allowing shaders to specify \`less\` or \`greater\` modifiers on \`@builtin(frag\_depth)\`, preventing the GPU from disabling crucial early-Z optimizations during custom depth writes. Formally integrated into the specification by the W3C GPU for the Web Working Group, the feature achieves functional parity with native conservative depth semantics (such as DirectX's SV\_Depth semantics and WebGL extensions). Chromium has targeted enabled-by-default support starting in Chrome 156, though early release notes and bug tracking revealed temporary platform-specific driver hurdles on Windows.

### Recommendations
- Actionable Advice: Web graphics engineers should adopt this feature progressively by testing \`navigator.gpu?.wgslLanguageFeatures?.has('fragment\_depth')\` before emitting shaders with the \`requires fragment\_depth;\` directive. When the language feature is unsupported or temporarily disabled, graphics pipelines should safely fall back to standard, unqualified \`@builtin(frag\_depth)\` output.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)
- **Chrome usage:** 0.096% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

## 📰 Ecosystem Blogs & Articles

- [What's New in WebGPU (Chrome 155-156) \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-webgpu-155-156) *(developer.chrome.com)*
  > What&#39;s New in WebGPU (Chrome 155-156) \| Blog \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی...
- [fragment\_depth - WGSL language feature availability (1%) - webgpu.report](https://webgpu.report/features/wgsl:fragment_depth) *(webgpu.report)*
  > fragment\_depth - WGSL language feature availability (2%) - webgpu.report webgpu .report fragment\_depth WGSL language feature Specification: WGSL § fragment\_depth Availability now 2% last 30 days, n = 186 Year over year — unlocks once the dataset span...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17296.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'Ashley Gullen' via blink-dev Wed, 26 Aug 2026 01:02:48 -0700 FWIW as developers of ...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 There are signals, but indirect...
- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails \[email&#160;protected\] Explainer https:/...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 On Wed, Aug 26, 2026, 10:52 Dan...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /Daniel On 2026-08-26 12:21, Yo...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > The current @builtin(frag\_depth) &lt;strong&gt;can potentially introduce a performance penalty due to disabling the early-Z optimizations on a draw call&lt;/strong&gt;.
- [What's New in WebGPU (Chrome 155-156) \| daily.dev](https://daily.dev/posts/what-s-new-in-webgpu-chrome-155-156--bbih4rnaw) *(daily.dev · 2026-10-12T15:46:22)*
  > &lt;strong&gt;Chrome 155-156 adds a WGSL fragment\_depth extension letting shaders declare less/greater depth comparison modes to preserve early-Z optimizations&lt;/strong&gt;, a texture-compression-unaligned GPU feature removing block-alignment requirements for ...
- [Chrome Platform Status](https://chromestatus.com/feature/5663304168112128/activity) *(chromestatus.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17296.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'Ashley Gullen' via blink-dev Wed, 26 Aug 2026 01:02:48 -0700 FWIW as deve...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 There are signals, bu...
- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails \[email&#160;protected\] Explain...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 On Wed, Aug 26, 2026,...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/6299`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /Daniel On 2026-08-26...

## 📚 Platform Documentation & Specifications

- [feat(graphics): adopt WGSL fragment\_depth once every WebGPU browser ships it · Issue #9703 · playcanvas/engine](https://github.com/playcanvas/engine/issues/9703) *(github.com)*
- [w3.org](https://www.w3.org/TR/WGSL) *(w3.org)*
- [\[Time sensitive\] Rename WGSL feature "fragment\_depth" · Issue #11050 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/11050) *(github.com)*
- [WGSL Proposal for fragment depth (less, greater, any) · Issue #5342 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5342) *(github.com)*
- [\[WGSL fragment depth\] (less, greater, any) syntax change · Issue #5350 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5350) *(github.com)*
- [GPU Web 2026‐01‐06 WGSL](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2026%E2%80%9001%E2%80%9006-WGSL) *(github.com)*
- [GPU Web 2026‐03‐10 WGSL](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2026%E2%80%9003%E2%80%9010-WGSL) *(github.com)*
- [Unmeasured: indexed strips (\`stripIndexFormat\`), flat-varying provoking vertex, \`fragment\_depth\`, \`EXT\_conservative\_depth\`, and 16-bit norm and rgb9e5 render targets · Issue #644 · typeshade/typeshade](https://github.com/typeshade/typeshade/issues/644) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 43 result(s) found across 12 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/5663304168112128" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/gpuweb/gpuweb/pull/6299" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"WebGPU: WGSL Fragment Depth" API` — *Core feature API query* (3 returned)
  - `"WebGPU: WGSL Fragment Depth" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"@builtin(frag_depth)" OR "early-z" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebGPU: WGSL Fragment Depth" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (3 returned)
  - `"WebGPU: WGSL Fragment Depth" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"@builtin(frag_depth)" ("depth_mode" OR "less" OR "greater") WGSL shader` — *Locates code snippets and WGSL shader implementations utilizing the new frag\_depth modifiers and depth\_mode syntax.* (8 returned)
  - `WebGPU WGSL "frag_depth" ("early-z" OR "early depth") (performance OR optimization) (guide OR tutorial)` — *Finds technical articles, guides, and tutorials explaining how to preserve early-Z depth testing when writing fragment depth in WebGPU.* (5 returned)
  - `"frag_depth" ("depth_mode" OR "less" OR "greater") site:github.com/gpuweb OR site:bugs.chromium.org OR site:github.com/gfx-rs/wgpu` — *Tracks implementation status, engine adoption, and browser support across major WebGPU implementations like Dawn and wgpu.* (8 returned)
  - `WGSL "@builtin(frag_depth)" ("early-Z" OR "conservative depth") (discussion OR proposal OR issue)` — *Surfaces community feedback, developer debates, and spec proposals regarding conservative depth and early-Z penalties in WGSL.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 6 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webgpu", shared with 44 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webgpu": no stable pass rate for Chrome yet*
- **Sources cited by the AI synthesis:** 5 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5663304168112128)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5663304168112128)
- [Specification](https://github.com/gpuweb/gpuweb/pull/6299)
- [Chromium Tracking Bug](https://crbug.com/457993779)
