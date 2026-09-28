# WebGPU: WGSL Fragment Depth

> **Report Week:** 2026-W40 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Adds the ability to provide a \`less\` or \`greater\` modifier to the \`@builtin(frag\_depth)\` in WGSL.  The current \`@builtin(frag\_depth)\` can potentially introduce a performance penalty due to disabling the early-Z optimizations on a draw call. The new modifiers allow the explicit setting of the buffer mode and allow the early-Z optimizations to be applied.

### Motivation

In the current WGSL specification, the mere act of writing to @builtin(frag_depth) often incurs a significant performance penalty because driver heuristics cannot guarantee that the fragment shader output will adhere to the depth written by the rasterizer's interpolated depth. Consequently, writing to frag_depth typically forces the GPU to disable crucial early-Z optimizations for the entire draw call.

The introduction of a new depth_mode built-in parameter for the @builtin(frag_depth) with modes less, and greater directly addressing this performance limitation by letting the developer express their intent to the hardware.

## Ecosystem Status

- **Momentum:** High (280 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** WebGPU: WGSL Fragment Depth is currently Enabled by default in Chrome 156. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails [email&#160;protected] Explainer https:/...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 There are signals, but indirect...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 On Wed, Aug 26, 2026, 10:52 Dan...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /Daniel On 2026-08-26 12:21, Yo...
- [The Pipeline \| Learn Wgpu](https://sotrh.github.io/learn-wgpu/beginner/tutorial3-pipeline) *(sotrh.github.io · 2026-07-21T00:00:00)*
  > The Pipeline | Learn Wgpu Learn Wgpu The Pipeline The Pipeline What&#39;s a pipeline? If you&#39;re familiar with OpenGL, you may remember using shader programs. You can think of a pipeline as a more robust version of that. A pipeline describes all t...
- [WebGPU Shaders: Beginner's Guide - Gift's Blog](https://giftmugweni.hashnode.dev/webgpu-shaders-a-beginners-step-by-step-guide) *(giftmugweni.hashnode.dev · 2024-12-24T09:47:10)*
  > WebGPU Shaders: Beginner&#x27;s Guide Skip to main content Hashnode Gift&#x27;s Blog Open search (press Control or Command and K) Toggle theme Open menu Hashnode Gift&#x27;s Blog Open search (press Control or Command and K) Toggle theme Write Command...
- [WebGPU Fundamentals](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html) *(webgpufundamentals.org)*
  > WebGPU Fundamentals English Español 日本語 한국어 Português (Brasil) Русский Türkçe Українська 简体中文 Table of Contents webgpufundamentals.org Fix, Fork, Contribute WebGPU Fundamentals This browser is missing a few WebGPU features. Please update your browser...
- [WebGPU Dynamic Shader Construction \| Toji.dev](https://toji.dev/webgpu-best-practices/dynamic-shader-construction.html) *(toji.dev · 2023-04-19T00:00:00)*
  > WebGPU Dynamic Shader Construction | Toji.dev WebGPU Dynamic Shader Construction Best practices Last Updated: Apr 19, 2023 Contents Introduction Define WGSL code in JavaScript, rather than standalone files. Use string interpolation in place of define...
- [WebGPU: The Complete Guide to Modern Graphics and \| explainx.ai Blog \| explainx.ai](https://explainx.ai/blog/webgpu-complete-guide-2026) *(explainx.ai · 2026-04-24T00:00:00)*
  > const pipeline = device.createRenderPipeline({ layout: &#x27;auto&#x27;, vertex: { module: device.createShaderModule({ code: vertexShaderCode }), entryPoint: &#x27;main&#x27;, buffers: [vertexBufferLayout] }, fragment: { module: device.createShaderMo...
- [Dive Into WebGPU—Part 1 (Tutorial)](https://okaydev.co/articles/dive-into-webgpu-part-1) *(okaydev.co · 2025-11-11T06:35:20)*
  > Since we’ll use it only in the fragment shader, we <strong>set it to [&#x27;fragment&#x27;]</strong>. If we wanted to use it in the vertex shader as well, we could set it to [&#x27;vertex&#x27;, &#x27;fragment&#x27;] (or omit it, as it’s the default ...
- [Field Guide to TSL and WebGPU - The Blog of Maxime Heckel](https://blog.maximeheckel.com/posts/field-guide-to-tsl-and-webgpu) *(blog.maximeheckel.com · 2025-10-14T08:00:00)*
  > Now supported in Apple&#x27;s most recent version of iOS and Safari 1, WebGPU is finally gaining widespread support, allowing for more advanced 3D capabilities on the web. As someone working with WebGL on the side, this was the push I needed to, at l...
- [Your first WebGPU app \| Google Codelabs](https://codelabs.developers.google.com/your-first-webgpu-app) *(codelabs.developers.google.com · 2026-03-27T00:00:00)*
  > Each shader operates on a different stage of the data: Vertex processing, Fragment processing, or general Compute. Because they&#x27;re on the GPU, they are structured more rigidly than your average JavaScript. But that structure allows them to execu...
- [EXT\_frag\_depth - Web APIs \| MDN](http://www.devdoc.net/web/developer.mozilla.org/en-US/docs/Web/API/EXT_frag_depth.html) *(devdoc.net)*
  > The EXT_frag_depth extension is part of the WebGL API and <strong>enables to set a depth value of a fragment from within the fragment shader</strong>.
- [Speeding Up Three.JS with Depth-Based Fragment Culling - Casey Primozic's Homepage](https://cprimozic.net/blog/depth-based-fragment-culling-webgl) *(cprimozic.net)*
  > All that&#x27;s left is to implement the manual depth test itself and run it first thing so we can discard unnecessary fragments as early as possible: void main() { // This comes from the depth pre-pass; we know the depth of the closest fragment that...
- [Does WebGPU Support 'Early Fragment Test'?](https://groups.google.com/g/webgl-dev-list/c/nG7yEjCHxGI) *(groups.google.com · 2024-09-16T00:00:00)*
  > Yes, WebGPU will do early Z rejection by default. This is disabled if the fragment shader alters the frag_depth builtin.
- [WebGPU API Demo](https://progressier.com/pwa-capabilities/webgpu-demo) *(progressier.com · 2026-08-31T00:00:00)*
  > ... <strong>This demo renders a rotating 3D cube by linking JavaScript directly to your GPU</strong>. It uploads geometry and WGSL shaders to the video card, then runs a high-speed loop to calculate rotation and redraw the cube with accurate depth pe...
- [LearnOpenGL - Depth testing](https://learnopengl.com/Advanced-OpenGL/Depth-testing) *(learnopengl.com)*
  > A restriction on the fragment shader for early depth testing is that you shouldn&#x27;t write to the fragment&#x27;s depth value.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails [email&#160;protected] Explain...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 There are signals, bu...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 On Wed, Aug 26, 2026,...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/6299`)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /Daniel On 2026-08-26...

## 📚 Platform Documentation & Specifications

- [EXT\_frag\_depth extension - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/EXT_frag_depth) *(developer.mozilla.org)*
- [WGSL Proposal for fragment depth (less, greater, any) · Issue #5342 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5342) *(github.com)*
- [Support for conservative depth · Issue #3961 · gfx-rs/wgpu](https://github.com/gfx-rs/wgpu/issues/3961) *(github.com)*
- [SM-202: implement per-pixel pseudo-depth and object ownership by techrote · Pull Request #68 · techrote/steelmoth](https://github.com/techrote/steelmoth/pull/68) *(github.com)*
- [Language: an author spelling for enable and requires, and a Capability for every WGSL extension and built-in value · Issue #146 · typeshade/typeshade](https://github.com/typeshade/typeshade/issues/146) *(github.com)*
- [GPU Web 2026‐03‐10 WGSL](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2026%E2%80%9003%E2%80%9010-WGSL) *(github.com)*
- [GPU Web 2026‐01‐06 WGSL](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2026%E2%80%9001%E2%80%9006-WGSL) *(github.com)*
- [SPIRV-Cross/shaders-msl/frag/depth-greater-than.frag at main · KhronosGroup/SPIRV-Cross](https://github.com/KhronosGroup/SPIRV-Cross/blob/main/shaders-msl/frag/depth-greater-than.frag) *(github.com)*
- [Guarantees about early-z fragment discard · Issue #4878 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/4878) *(github.com)*
- [Allow Early Fragment Tests to be forced · Issue #4891 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/4891) *(github.com)*
- [GPU: wgslLanguageFeatures property](https://developer.mozilla.org/en-US/docs/Web/API/GPU/wgslLanguageFeatures) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 12 planned queries — **27 verified relevant**
  - `"chromestatus.com/feature/5663304168112128" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/gpuweb/gpuweb/pull/6299" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"WebGPU: WGSL Fragment Depth" API` — *Core feature API query* (1 returned)
  - `"WebGPU: WGSL Fragment Depth" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"@builtin(frag_depth)" OR "early-z" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebGPU: WGSL Fragment Depth" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (4 returned)
  - `"WebGPU: WGSL Fragment Depth" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `WebGPU WGSL "@builtin(frag_depth)" ("early-z" OR "early depth") (performance OR guide OR tutorial)` — *Searches for developer guides, articles, and benchmarks explaining early-Z performance preservation using fragment depth modifiers.* (4 returned)
  - `WGSL "@builtin(frag_depth)" ("less" OR "greater") site:github.com` — *Finds real-world WGSL shader implementations, code snippets, and syntax tests utilizing the new frag_depth modifiers on GitHub.* (8 returned)
  - `"WebGPU" ("frag_depth" OR "fragment depth") ("Dawn" OR "wgpu" OR "Chrome") (implementation OR support OR "intent to")` — *Tracks browser engine implementation milestones and WebGPU runtime status across Dawn, wgpu, and Chromium.* (1 returned)
  - `site:github.com/gpuweb/gpuweb "frag_depth" ("depth_mode" OR "early-z" OR "pull/6299")` — *Locates working group debates, spec issues, and consensus discussions surrounding the frag_depth proposal.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1 item(s) inspected

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
