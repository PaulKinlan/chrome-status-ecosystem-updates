# WebGPU: WGSL Fragment Depth

> **Report Week:** 2026-W41 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Adds the ability to provide a \`less\` or \`greater\` modifier to the \`@builtin(frag\_depth)\` in WGSL.  The current \`@builtin(frag\_depth)\` can potentially introduce a performance penalty due to disabling the early-Z optimizations on a draw call. The new modifiers allow the explicit setting of the buffer mode and allow the early-Z optimizations to be applied.

### Motivation

In the current WGSL specification, the mere act of writing to @builtin(frag_depth) often incurs a significant performance penalty because driver heuristics cannot guarantee that the fragment shader output will adhere to the depth written by the rasterizer's interpolated depth. Consequently, writing to frag_depth typically forces the GPU to disable crucial early-Z optimizations for the entire draw call.

The introduction of a new depth_mode built-in parameter for the @builtin(frag_depth) with modes less, and greater directly addressing this performance limitation by letting the developer express their intent to the hardware.

## Ecosystem Status

- **Momentum:** High (120 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** WGSL Fragment Depth introduces optional \`less\` and \`greater\` depth-mode modifiers to \`@builtin(frag\_depth)\`, enabling GPU drivers to preserve critical early-Z hardware culling optimizations when shaders write custom depth. The enhancement directly resolves severe fill-rate performance degradation historically incurred whenever fragment shaders modified depth. Shipping by default in Chromium and standardized in the W3C GPU for the Web specification, it establishes a high-impact optimization for modern web graphics engines.

### Recommendations
- Actionable Advice: Teams should adopt the \`less\` and \`greater\` qualifiers to reclaim early-Z performance on depth-writing shaders, but must provide shader compilation fallbacks or feature-gate shader strings because unupdated WGSL parsers in non-Chromium or older runtimes will fail validation on the new syntax.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Packages & Polyfills

- [typegpu](https://www.npmjs.com/package/typegpu) `v0.12.6` — A thin layer between JS and WebGPU/WGSL that improves development experience and allows for faster iteration.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails [email&#160;protected] Explainer https:/...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 There are signals, but indirect...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /Daniel On 2026-08-26 12:21, Yo...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17276.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected] ... &gt; https://github.com/gpuweb/gpuweb/pull/6299 &gt; &gt; *Summary* &gt; <strong>Adds the ability to provide a `less` or `greater` modifier to the &gt; `@builtin(frag_depth)` in WGSL</strong>....
- [WebGPU Shading Language](https://mehmetoguzderin.github.io/webgpu/wgsl.html) *(mehmetoguzderin.github.io)*
  > Fixed-function stages consume a fragment output, possibly updating external state such as color attachments and depth and stencil buffers. The WebGPU specification describes pipelines in greater detail. WGSL defines three shader stages, corresponding...
- [Does WebGPU Support 'Early Fragment Test'?](https://groups.google.com/g/webgl-dev-list/c/nG7yEjCHxGI) *(groups.google.com · 2024-09-16T00:00:00)*
  > Yes, <strong>WebGPU will do early Z rejection by default</strong>. This is disabled if the fragment shader alters the frag_depth builtin.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails [email&#160;protected] Explain...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 There are signals, bu...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /Daniel On 2026-08-26...

## 📚 Platform Documentation & Specifications

- [WGSL Proposal for fragment depth (less, greater, any) · Issue #5342 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5342) *(github.com)*
- [Support for conservative depth · Issue #3961 · gfx-rs/wgpu](https://github.com/gfx-rs/wgpu/issues/3961) *(github.com)*
- [Language: an author spelling for enable and requires, and a Capability for every WGSL extension and built-in value · Issue #146 · typeshade/typeshade](https://github.com/typeshade/typeshade/issues/146) *(github.com)*
- [Guarantees about early-z fragment discard · Issue #4878 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/4878) *(github.com)*
- [GPU: wgslLanguageFeatures property](https://developer.mozilla.org/en-US/docs/Web/API/GPU/wgslLanguageFeatures) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 36 result(s) found across 12 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5663304168112128" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/gpuweb/gpuweb/pull/6299" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"WebGPU: WGSL Fragment Depth" API` — *Core feature API query* (1 returned)
  - `"WebGPU: WGSL Fragment Depth" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"@builtin(frag_depth)" OR "early-z" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebGPU: WGSL Fragment Depth" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (3 returned)
  - `"WebGPU: WGSL Fragment Depth" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"@builtin(frag_depth)" ("less" OR "greater") WGSL` — *Finds WGSL shader code examples demonstrating the syntax for depth_mode modifiers on frag_depth.* (8 returned)
  - `WGSL "frag_depth" ("early-z" OR "early depth") "WebGPU"` — *Surfaces practical developer guides and technical articles on preserving early-Z optimizations in WebGPU shaders.* (5 returned)
  - `site:github.com/gpuweb/gpuweb ("frag_depth" OR "fragment-depth") ("less" OR "greater" OR "depth_mode")` — *Retrieves working group discussions, feedback, and issue tracking related to the fragment depth proposal.* (2 returned)
  - `("WebGPU" OR "Dawn" OR "wgpu") ("frag_depth" OR "fragment depth") ("early-z" OR "depth_mode")` — *Tracks implementation announcements, release notes, and framework adoption across major WebGPU runtimes.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **1 verified relevant**
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
