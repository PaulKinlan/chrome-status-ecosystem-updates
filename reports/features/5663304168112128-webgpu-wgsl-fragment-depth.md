# WebGPU: WGSL Fragment Depth

> **Report Week:** 2026-W42 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Adds the ability to provide a \`less\` or \`greater\` modifier to the \`@builtin(frag\_depth)\` in WGSL.  The current \`@builtin(frag\_depth)\` can potentially introduce a performance penalty due to disabling the early-Z optimizations on a draw call. The new modifiers allow the explicit setting of the buffer mode and allow the early-Z optimizations to be applied.

### Motivation

In the current WGSL specification, the mere act of writing to @builtin(frag\_depth) often incurs a significant performance penalty because driver heuristics cannot guarantee that the fragment shader output will adhere to the depth written by the rasterizer's interpolated depth. Consequently, writing to frag\_depth typically forces the GPU to disable crucial early-Z optimizations for the entire draw call.  The introduction of a new depth\_mode built-in parameter for the @builtin(frag\_depth) with modes less, and greater directly addressing this performance limitation by letting the developer express their intent to the hardware.

## Ecosystem Status

- **Momentum:** Emerging (footprint 160 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The \`fragment\_depth\` WGSL extension introduces \`less\` and \`greater\` qualifiers to \`@builtin(frag\_depth)\`, restoring hardware early-Z optimizations when fragment shaders adjust depth predictably. Merged into the W3C WGSL specification and enabled by default in Chrome 156, the capability closely mirrors native hardware semantics across Metal, HLSL, and Vulkan. However, cross-browser availability is currently nascent as implementation in Gecko and WebKit trails Chromium's Dawn release.

### Recommendations
- Actionable Advice: Adopt the feature progressively by guarding shaders behind \`navigator.gpu.wgslLanguageFeatures.has('fragment\_depth')\` and including the \`requires fragment\_depth;\` directive inside the WGSL module. Maintain a fallback shader pipeline using plain \`@builtin(frag\_depth)\` to ensure compatibility on non-supporting browsers.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)
- **Chrome usage:** 0.085% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

## 📰 Ecosystem Blogs & Articles

- [What's New in WebGPU (Chrome 155-156) \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-webgpu-155-156) *(developer.chrome.com)*
  > Yang Baru di WebGPU (Chrome 155-156) \| Blog \| Chrome for Developers Langsung ke konten utama / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی ...
- [fragment\_depth - WGSL language feature availability (1%) - webgpu.report](https://webgpu.report/features/wgsl:fragment_depth) *(webgpu.report)*
  > fragment\_depth - WGSL language feature availability (1%) - webgpu.report webgpu .report fragment\_depth WGSL language feature Specification: WGSL § fragment\_depth Availability now 1% last 30 days, n = 161 Year over year — unlocks once the dataset span...
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > \*Chrome for Developers\* (\`developer.chrome.com\`) \* \*\*"What's New in WebGPU" (Chrome 155–156) / Chrome Beta Announcements\*\*: \* Chrome’s developer blog features this enhancement under the \`fragment\_depth\` extension
- [chrome.com](https://developer.chrome.com/blog/new-in-webgpu-155-156?hl=it) *(developer.chrome.com)*
  > \* \*\*Chrome Platform Status Entry\*\*: \* Documents the intent to implement and ship the WGSL \`fragment\_depth\` extension, tracking implementation across Chromium and the Dawn WebGPU implementation
- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails \[email&#160;protected\] Explainer https:/...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /Daniel On 2026-08-26 12:21, Yo...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 There are signals, but indirect...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17276.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Alex Russell Mon, 24 Aug 2026 11:54:22 -0700 Are there really no signals from developers? Is...
- [What's New in WebGPU (Chrome 155-156) \| daily.dev](https://daily.dev/posts/what-s-new-in-webgpu-chrome-155-156--bbih4rnaw) *(daily.dev · 2026-10-12T15:46:22)*
  > &lt;strong&gt;Chrome 155-156 adds a WGSL fragment\_depth extension letting shaders declare less/greater depth comparison modes to preserve early-Z optimizations&lt;/strong&gt;, a texture-compression-unaligned GPU feature removing block-alignment requirements for ...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > &lt;strong&gt;Adds the ability to provide a less or greater modifier to the @builtin(frag\_depth) in WGSL&lt;/strong&gt;.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails \[email&#160;protected\] Explain...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /Daniel On 2026-08-26...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 There are signals, bu...

## 📚 Platform Documentation & Specifications

- [WGSL Proposal for fragment depth (less, greater, any) · Issue #5342 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5342) *(github.com)*
- [w3.org](https://www.w3.org/TR/WGSL) *(w3.org)*
- [feat(graphics): adopt WGSL fragment\_depth once every WebGPU browser ships it · Issue #9703 · playcanvas/engine](https://github.com/playcanvas/engine/issues/9703) *(github.com)*
- [GPU Web 2026‐03‐10 WGSL](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2026%E2%80%9003%E2%80%9010-WGSL) *(github.com)*
- [GPU Web 2026‐01‐06 WGSL](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2026%E2%80%9001%E2%80%9006-WGSL) *(github.com)*
- [GPU Web 2025‐12‐09 WGSL](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2025%E2%80%9012%E2%80%9009-WGSL) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 46 result(s) found across 12 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5663304168112128" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/gpuweb/gpuweb/pull/6299" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"WebGPU: WGSL Fragment Depth" API` — *Core feature API query* (1 returned)
  - `"WebGPU: WGSL Fragment Depth" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"@builtin(frag_depth)" OR "early-z" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebGPU: WGSL Fragment Depth" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (4 returned)
  - `"WebGPU: WGSL Fragment Depth" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"@builtin(frag_depth)" ("less" OR "greater") WGSL` — *Finds code snippets, shaders, and specifications detailing the exact syntax for the frag\_depth modifier in WGSL.* (8 returned)
  - `WebGPU "frag_depth" ("early-Z" OR "early depth test") tutorial OR guide` — *Discovers developer blog posts and guides explaining early-Z depth optimizations and how to use frag\_depth without performance loss.* (2 returned)
  - `"frag_depth" (less OR greater) site:chromestatus.com OR site:github.com/gpuweb` — *Tracks browser support, Chrome status rollouts, and standards committee implementation milestones.* (8 returned)
  - `"frag_depth" "early-Z" (WebGPU OR WGSL) performance benchmark OR discussion` — *Surfaces community feedback, developer sentiment, and performance comparisons regarding early depth testing penalties.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 7 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5663304168112128)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5663304168112128)
- [Specification](https://github.com/gpuweb/gpuweb/pull/6299)
- [Chromium Tracking Bug](https://crbug.com/457993779)
