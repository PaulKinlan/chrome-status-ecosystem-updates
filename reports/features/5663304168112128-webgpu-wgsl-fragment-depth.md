# WebGPU: WGSL Fragment Depth

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Adds the ability to provide a `less` or `greater` modifier to the `@builtin(frag_depth)` in WGSL.

The current `@builtin(frag_depth)` can potentially introduce a performance penalty due to disabling the early-Z optimizations on a draw call. The new modifiers allow the explicit setting of the buffer mode and allow the early-Z optimizations to be applied.

### Motivation

In the current WGSL specification, the mere act of writing to @builtin(frag_depth) often incurs a significant performance penalty because driver heuristics cannot guarantee that the fragment shader output will adhere to the depth written by the rasterizer's interpolated depth. Consequently, writing to frag_depth typically forces the GPU to disable crucial early-Z optimizations for the entire draw call.

The introduction of a new depth_mode built-in parameter for the @builtin(frag_depth) with modes less, and greater directly addressing this performance limitation by letting the developer express their intent to the hardware.

## Ecosystem Status

- **Momentum:** High (210 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** WGSL fragment depth modifiers (`less`, `greater`) allow fragment shaders to explicitly declare depth modification constraints, preserving crucial hardware early-Z optimizations that were previously disabled upon writing to `@builtin(frag_depth)`. Formally integrated into the W3C WebGPU Shading Language specification via PR #6299, the capability ships enabled by default in Chrome 154. The addition closes a major rendering performance gap, bringing WGSL to parity with native conservative depth features found in GLSL, HLSL, and MSL.

### Recommendations
- Actionable Advice: WebGPU rendering pipelines that write custom fragment depths should gate the use of `@builtin(frag_depth, less)` / `@builtin(frag_depth, greater)` behind WGSL language extension checks (or conditional shader compilation) to leverage early-Z performance gains in supporting browsers while gracefully falling back to standard `frag_depth` elsewhere.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHp7_NH8ZKUFaGf_RoxcUTjSC7kWgPclJB7erwSARPnM3QPfJEvmYZyq36nE2Fabfx_To3_BWEVmGc5lSA8alqYEeq1UDm_cqComVN0p3iVS-6m8pyps6sBIP_Irzyb0AKbvAXuKwqk) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEjzE2BgYnfcvAsNQIOLdYJkSvEt9lgmBoJQG3SDDGo2Y8n5lXUsrSIn2yTnD1TaN5-0xVJg7BLTEycXFkugOD8n7TMsSIUIXMC3BWOelQzcao=) *(vertexaisearch.cloud.google.com)*
  > ### Overview: WebGPU WGSL Fragment Depth Modifiers  In WebGPU, writing to `@builtin(frag_depth)` in a WGSL fragment shader historically introduced a significant performance overhead. Because GPU drivers cannot predict whether a shader-generated depth
- [docs.rs](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFyDcSR-MCV63fauhlTwGrFGYbIEOjxJ9fQlvRilxWUL5UhenHsxUUFMU1L6jssyxMrFhcAMBJv3n7Qm-DLsv1amD26htueBERrDHARs2OwOCmuiMRJIVhJMsDyweCVCQIbPAvnwVNUNOpdkg==) *(vertexaisearch.cloud.google.com)*
  > Features in wgpu - Rust Docs.rs wgpu-30.0.1 wgpu 30.0.1 Permalink Docs.rs crate page MIT OR Apache-2.0 Links Homepage Repository crates.io Source Owners jimblandy cwfitzgerald github:gfx-rs:wgpu Dependencies arrayvec ^0.7.1 normal bitflags ^2.9 norma...
- [shader-slang.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHZP7y9ib_oSo1gDmoFhqSXEXXqOcd4xYxn-LAb-KFZIHB4WNBQxWUIAQ4QSw53lEysTrjKkRY7oK30VCD3oAwS9DSgpreGogjCMYzTjW_SvbAH4Zvzso-nlPz-uffLlS1W3f66KkmpEuEqbjNYVerrpmQkcQ==) *(vertexaisearch.cloud.google.com)*
  > Metal-Specific Functionalities | slang Table of Contents Slang User's Guide Introduction Why use Slang? Who is Slang for? Who is this guide for? Goals and Non-Goals Getting Started with Slang Installation Your first Slang shader The full example Conv...
- [Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 On Wed, Aug 26, 2026, 10:52 Dan...
- [[blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17276.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Alex Russell Mon, 24 Aug 2026 11:54:22 -0700 Are there really no signals from developers? Is...
- [[blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails [email&#160;protected] Explainer https:/...
- [[blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 There are signals, but indirect...
- [Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)*
  > On Monday, August 24, 2026 at 9:03:33 ...gpuweb/pull/6299 &lt;https://github.com/gpuweb/gpuweb/pull/6299&gt; *Summary* <strong>Adds the ability to provide a `less` or `greater` modifier to the `@builtin(frag_depth)` in WGSL</strong>....
- [The Pipeline | Learn Wgpu](https://sotrh.github.io/learn-wgpu/beginner/tutorial3-pipeline) *(sotrh.github.io · 2026-07-21T00:00:00)*
  > <strong>Every pixel in the result image gets at least one fragment</strong>. Each fragment has a color that will be copied to its corresponding pixel. The fragment shader decides what color the fragment will be. WebGPU Shading Language (WGSL) is the ...
- [WebGPU Shaders: Beginner's Guide - Gift's Blog](https://giftmugweni.hashnode.dev/webgpu-shaders-a-beginners-step-by-step-guide) *(giftmugweni.hashnode.dev · 2024-12-24T09:47:10)*
  > To understand what’s going on here, remember that all the fragment shader cares about is assigning a colour to the given pixel on the screen. So, if we want to have different colours at different areas of the screen, we need to know what pixel we are...
- [WebGPU Fundamentals](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html) *(webgpufundamentals.org)*
  > We pass that as format into the webgpu canvas context by calling configure. We also pass in the device which associates this canvas with the device we just created. Next, we create a shader module. A shader module contains one or more shader function...
- [WebGPU Dynamic Shader Construction | Toji.dev](https://toji.dev/webgpu-best-practices/dynamic-shader-construction.html) *(toji.dev · 2023-04-19T00:00:00)*
  > It’s very common to see tutorials or samples of GPU APIs where the shader code is placed in separate files with names like default.wgsl or basic.vertex.wgsl. The WebGPU code will then load the contents of these files as plain text and pass it directl...
- [Dive Into WebGPU—Part 1 (Tutorial)](https://okaydev.co/articles/dive-into-webgpu-part-1) *(okaydev.co · 2025-11-11T06:35:20)*
  > Since we’ll use it only in the fragment shader, we <strong>set it to [&#x27;fragment&#x27;]</strong>. If we wanted to use it in the vertex shader as well, we could set it to [&#x27;vertex&#x27;, &#x27;fragment&#x27;] (or omit it, as it’s the default ...
- [Fundamentals of Compute Shaders | by Muhammadxon Najimov | WebGPU | Medium](https://medium.com/webgpu/fundamentals-of-compute-shaders-3f25739e5182) *(medium.com · 2025-09-06T17:34:00)*
  > To create a calculation module, it is necessary to know the programming language called WGSL. This language is syntactically similar to Rust and also includes some mathematical objects. For example, vec3 represents a 3-dimensional vector, and mat3x3 ...
- [Your first WebGPU app | Google Codelabs](https://codelabs.developers.google.com/your-first-webgpu-app) *(codelabs.developers.google.com · 2026-03-27T00:00:00)*
  > Each shader operates on a different stage of the data: Vertex processing, Fragment processing, or general Compute. Because they&#x27;re on the GPU, they are structured more rigidly than your average JavaScript. But that structure allows them to execu...
- [Speeding Up Three.JS with Depth-Based Fragment Culling - Casey Primozic's Homepage](https://cprimozic.net/blog/depth-based-fragment-culling-webgl) *(cprimozic.net)*
  > All that&#x27;s left is to implement the manual depth test itself and run it first thing so we can discard unnecessary fragments as early as possible: void main() { // This comes from the depth pre-pass; we know the depth of the closest fragment that...
- [WebGPU API Demo](https://progressier.com/pwa-capabilities/webgpu-demo) *(progressier.com · 2026-07-23T00:00:00)*
  > ... <strong>This demo renders a rotating 3D cube by linking JavaScript directly to your GPU</strong>. It uploads geometry and WGSL shaders to the video card, then runs a high-speed loop to calculate rotation and redraw the cube with accurate depth pe...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 On Wed, Aug 26, 2026,...
- [[blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17276.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Alex Russell Mon, 24 Aug 2026 11:54:22 -0700 Are there really no signals from deve...
- [[blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails [email&#160;protected] Explain...
- [[blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 There are signals, bu...
- [Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/6299`)*
  > On Monday, August 24, 2026 at 9:03:33 ...gpuweb/pull/6299 &lt;https://github.com/gpuweb/gpuweb/pull/6299&gt; *Summary* <strong>Adds the ability to provide a `less` or `greater` modifier to the `@builtin(frag_depth)` in WGSL</strong>....

## 📚 Platform Documentation & Specifications

- [EXT_frag_depth extension - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/EXT_frag_depth) *(developer.mozilla.org)*
- [WGSL Proposal for fragment depth (less, greater, any) · Issue #5342 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5342) *(github.com)*
- [GPU: wgslLanguageFeatures property](https://developer.mozilla.org/en-US/docs/Web/API/GPU/wgslLanguageFeatures) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 22 result(s) found across 7 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/5663304168112128" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/gpuweb/gpuweb/pull/6299" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"WebGPU: WGSL Fragment Depth" API` — *Core feature API query* (3 returned)
  - `"WebGPU: WGSL Fragment Depth" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"@builtin(frag_depth)" OR "early-z" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebGPU: WGSL Fragment Depth" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (3 returned)
- **Google Search Grounding (gemini-3.7-flash):** 4 result(s) found — **4 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found — **18 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5663304168112128)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5663304168112128)
- [Specification](https://github.com/gpuweb/gpuweb/pull/6299)
- [Chromium Tracking Bug](https://crbug.com/457993779)
