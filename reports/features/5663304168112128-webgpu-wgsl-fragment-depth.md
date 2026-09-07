# WebGPU: WGSL Fragment Depth

> **Report Week:** 2026-W37 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Adds the ability to provide a `less` or `greater` modifier to the `@builtin(frag_depth)` in WGSL.

The current `@builtin(frag_depth)` can potentially introduce a performance penalty due to disabling the early-Z optimizations on a draw call. The new modifiers allow the explicit setting of the buffer mode and allow the early-Z optimizations to be applied.

### Motivation

In the current WGSL specification, the mere act of writing to @builtin(frag_depth) often incurs a significant performance penalty because driver heuristics cannot guarantee that the fragment shader output will adhere to the depth written by the rasterizer's interpolated depth. Consequently, writing to frag_depth typically forces the GPU to disable crucial early-Z optimizations for the entire draw call.

The introduction of a new depth_mode built-in parameter for the @builtin(frag_depth) with modes less, and greater directly addressing this performance limitation by letting the developer express their intent to the hardware.

## Ecosystem Status

- **Momentum:** High (130 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** WebGPU: WGSL Fragment Depth is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17296.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'Ashley Gullen' via blink-dev Wed, 26 Aug 2026 01:02:48 -0700 FWIW as developers of ...
- [[blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17276.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Alex Russell Mon, 24 Aug 2026 11:54:22 -0700 Are there really no signals from developers? Is...
- [[blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails [email&#160;protected] Explainer https:/...
- [Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 On Wed, Aug 26, 2026, 10:52 Dan...
- [[blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 There are signals, but indirect...
- [Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /Daniel On 2026-08-26 12:21, Yo...
- [WebGPU Shading Language](https://mehmetoguzderin.github.io/webgpu/wgsl.html) *(mehmetoguzderin.github.io)*
  > Fixed-function stages consume a fragment output, possibly updating external state such as color attachments and depth and stencil buffers. The WebGPU specification describes pipelines in greater detail. WGSL defines three shader stages, corresponding...
- [The Depth Buffer | Learn Wgpu](https://sotrh.github.io/learn-wgpu/beginner/tutorial8-depth) *(sotrh.github.io · 2026-07-21T00:00:00)*
  > #[repr(C)] #[derive(Copy, Clone, Debug, Hash, Eq, PartialEq)] #[cfg_attr(feature = &quot;serde&quot;, derive(Serialize, Deserialize))] pub enum CompareFunction { Undefined = 0, Never = 1, Less = 2, Equal = 3, LessEqual = 4, Greater = 5, NotEqual = 6,...
- [Does WebGPU Support 'Early Fragment Test'?](https://groups.google.com/g/webgl-dev-list/c/nG7yEjCHxGI) *(groups.google.com · 2024-09-16T00:00:00)*
  > ... Either email addresses are anonymous for this group or you need the view member email addresses permission to view the original message ... Yes, WebGPU will do early Z rejection by default. <strong>This is disabled if the fragment shader alters t...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17296.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'Ashley Gullen' via blink-dev Wed, 26 Aug 2026 01:02:48 -0700 FWIW as deve...
- [[blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17276.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Alex Russell Mon, 24 Aug 2026 11:54:22 -0700 Are there really no signals from deve...
- [[blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails [email&#160;protected] Explain...
- [Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 On Wed, Aug 26, 2026,...
- [[blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 There are signals, bu...
- [Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/6299`)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /Daniel On 2026-08-26...

## 📚 Platform Documentation & Specifications

- [WGSL Proposal for fragment depth (less, greater, any) · Issue #5342 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5342) *(github.com)*
- [Support for conservative depth · Issue #3961 · gfx-rs/wgpu](https://github.com/gfx-rs/wgpu/issues/3961) *(github.com)*
- [Guarantees about early-z fragment discard · Issue #4878 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/4878) *(github.com)*
- [GPU: wgslLanguageFeatures property](https://developer.mozilla.org/en-US/docs/Web/API/GPU/wgslLanguageFeatures) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 13 result(s) found across 7 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5663304168112128" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/gpuweb/gpuweb/pull/6299" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"@builtin(frag_depth)" ("less" OR "greater" OR "depth_mode") wgsl` — *Finds exact WGSL syntax examples and shader implementations using the new fragment depth modifier keywords.* (8 returned)
  - `webgpu wgsl "frag_depth" ("early-Z" OR "early depth") optimization` — *Surfaces developer guides, graphics programming articles, and performance tutorials on mitigating early-Z pipeline stalls in WebGPU.* (8 returned)
  - `"WebGPU" "frag_depth" ("conservative depth" OR "depth_mode") (Chrome OR Dawn OR "Release Notes")` — *Discovers engine adoption announcements, browser implementation status updates, and release notes across Chromium/Dawn/WebKit.* (0 returned)
  - `site:github.com/gpuweb/gpuweb ("frag_depth" OR "fragment-depth") ("less" OR "greater")` — *Retrieves specification discussions, WGSL working group meeting notes, and pull request feedback on the fragment depth mode proposal.* (2 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 4 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5663304168112128)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5663304168112128)
- [Specification](https://github.com/gpuweb/gpuweb/pull/6299)
- [Chromium Tracking Bug](https://crbug.com/457993779)
