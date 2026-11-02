# WebGPU: atomic-vec2u-min-max

> **Report Week:** 2026-W45 | **Milestone:** Chrome 157 (first listed in Chrome 155) | **Category:** Enabled by default

## Overview

Allows the use of 64-bit atomic minimum and maximum operations on \`atomic&lt;vec2u&gt;\` in WGSL.  This provides WebGPU shader authors with a way to implement certain algorithms that use 64-bit atomics without requiring full support for 64-bit integers.

### Motivation

This provides WebGPU shader authors with a way to implement certain algorithms that use 64-bit atomics without requiring full support for 64-bit integers. Not every device that supports 64-bit atomics can support every atomic operation on these types, so this feature is scoped to the min and max operations to deliver broadest reach.

## Ecosystem Status

- **Momentum:** Moderate (+90 points since 2026-10-12; footprint 240 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The \`atomic-vec2u-min-max\` feature introduces 64-bit atomic minimum and maximum operations to WebGPU storage buffers using \`atomic&lt;vec2u&gt;\` as a composite surrogate type, sidestepping the current absence of native 64-bit integer arithmetic in WGSL. It specifically targets high-performance graphics techniques—such as Nanite-style compute rasterization and visibility buffers packing depth and material IDs—while maximizing cross-platform hardware reach across Metal, Vulkan, and Direct3D 12. The feature has established consensus within the W3C GPU for the Web Working Group and is shipping enabled by default in Chromium.

### Recommendations
- Actionable Advice: WebGPU developers building compute-based rasterizers, clustering, or 64-bit atomic key-value operations should detect \`atomic-vec2u-min-max\` via \`adapter.features.has()\` and request it during device initialization. Because the extension remains an optional feature tied to modern hardware/driver capabilities, applications must maintain standard rasterization or 32-bit multi-pass fallbacks on unsupported devices.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)
- **Chrome usage:** 0.1% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

## 📰 Ecosystem Blogs & Articles

- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > Details the feature implementation in Chromium via Dawn/Tint
- [chromestatus.com](https://chromestatus.com/feature/4882016087703552?gate=6119685002231808) *(chromestatus.com)*
  > Explains the motivation: granting shader authors the ability to implement high-performance algorithms needing 64-bit atomics without blocking on complete 64-bit arithmetic support in WGSL
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > Listed under new Web APIs and GPU platform updates alongside incoming WebGPU extensions
- [khronos.org](https://www.khronos.org/developers/linkto/wgsl) *(khronos.org)*
  > \*\*Nanite-style Software Rasterization & Visibility Buffers\*\*: In modern deferred rendering, developers pack 32 bits of depth and 32 bits of material/cluster ID into a 64-bit integer An atomic minimum operation on the packed \`vec2u\` simultaneously tes...
- [htmlspecs.com](https://htmlspecs.com/WGSL) *(htmlspecs.com)*
  > \*\*Feature Gating\*\*: Because support depends on underlying hardware capabilities, developers must feature-check \`"atomic-vec2u-min-max"\` on the \`GPUAdapter\` when calling \`requestDevice()\` before enabling \`enable atomic\_vec2u\_min\_max;\` inside their WGS...
- [\[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17518.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Chromestatus Mon, 21 Sep 2026 14:43:50 -0700 Contact emails \[email&#160;protected\] , \[email&#160;p...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Vladimir Levin Wed, 23 Sep 2026 08:21:02 -0700 LGTM1 On Monday, September 21, 2026 at 5:43...
- [WGSL: Add atomic min max for u64, to support Nanite \[453689550\] - Chromium](https://issues.chromium.org/issues/453689550) *(issues.chromium.org)*
  > Chromium Sign in
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Daniel Bratell Wed, 23 Sep 2026 08:35:46 -0700 LGTM3 Do note that there are some o...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17534.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Monday, September ...org/TR/webgpu/#dom-gpufeaturename-atomic-vec2u-min-max &gt;&gt; &gt;&gt; \*Summary\* &gt;&gt; &lt;strong&gt;Allows the use of 64-bit atomic minimum and maximum operations on &gt;&gt; \`atomic&lt;vec2u&gt;\` in WGSL&lt;...
- [WebGPU: atomic-vec2u-min-max \[564573901\] - Issue Tracker](https://issuetracker.google.com/issues/564573901/resources) *(issuetracker.google.com)*
  > Sign in
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes) *(chromestatus.com)*
  > &lt;strong&gt;Allows the use of 64-bit atomic minimum and maximum operations on atomic&lt;vec2u&gt; in WGSL&lt;/strong&gt;. This provides WebGPU shader authors with a way to implement certain algorithms that use 64-bit atomics without requiring full support for ...
- [Chrome 155 Release Date: What's New? — ShopperCove](https://www.shoppercove.com/blog/chrome-155-stable-jpeg-xl-css-changes-october-2026) *(shoppercove.com · 2026-10-23T10:24:38)*
  > The 5 behind a flag are WebGPU atomic-vec2u-min-max and four WebTransport items (a datagram readable stream type, datagram writable streams with prioritization, reliability attributes, and WebTransportReceiveStream).
- [Expose atomic vec2u feature in Chrome \[559163248\] - Chromium](https://issues.chromium.org/issues/559163248) *(issues.chromium.org)*
  > Needs to happen before we land spec so that we get CTS coverage on a broad range of devices · Project: chromium/src Branch: main Author: James Price jrprice@google.com Link: https://chromium-review.googlesource.com/8389377

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17518.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Chromestatus Mon, 21 Sep 2026 14:43:50 -0700 Contact emails \[email&#160;protected\] , \[em...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Vladimir Levin Wed, 23 Sep 2026 08:21:02 -0700 LGTM1 On Monday, September 21, 20...
- [WGSL: Add atomic min max for u64, to support Nanite \[453689550\] - Chromium](https://issues.chromium.org/issues/453689550) *(issues.chromium.org)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > Chromium Sign in
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Daniel Bratell Wed, 23 Sep 2026 08:35:46 -0700 LGTM3 Do note that there ...

## 📚 Platform Documentation & Specifications

- [w3.org](https://www.w3.org/TR/WGSL) *(w3.org)*
- [gpuweb/proposals/atomic-64-min-max.md at main · gpuweb/gpuweb · GitHub](https://github.com/gpuweb/gpuweb/blob/main/proposals/atomic-64-min-max.md) *(github.com)*
- [2074500 - (webgpu-atomic-vec2u-min-max) WebGPU: support \`atomic-vec2u-min-max\` feature](https://bugzilla.mozilla.org/show_bug.cgi?id=2074500) *(bugzilla.mozilla.org)*
- [Implement \`atomic-vec2u-min-max\` feature · Issue #10435 · gfx-rs/wgpu · GitHub](https://github.com/gfx-rs/wgpu/issues/10435) *(github.com)*
- [Landscape watch 2026-10-26 · Issue #17 · davtamay/Godot\_WebGPU · GitHub](https://github.com/davtamay/Godot_WebGPU/issues/17) *(github.com)*
- [WGSL: expose 64-bit atomic min/max through atomic\_vec2u\_min\_max (atomicStoreMin/atomicStoreMax on atomic&lt;vec2&lt;u32&gt;&gt;) · Issue #13916 · shader-slang/slang · GitHub](https://github.com/shader-slang/slang/issues/13916) *(github.com)*
- [Spec changes for atomic vec2u by petermcneeleychromium · Pull Request #5610 · gpuweb/gpuweb · GitHub](https://github.com/gpuweb/gpuweb/pull/5610) *(github.com)*
- [Landscape watch 2026-10-05 · Issue #13 · davtamay/Godot\_WebGPU · GitHub](https://github.com/davtamay/Godot_WebGPU/issues/13) *(github.com)*
- [Landscape watch 2026-10-19 · Issue #15 · davtamay/Godot\_WebGPU · GitHub](https://github.com/davtamay/Godot_WebGPU/issues/15) *(github.com)*
- [\[editorial\] Move atomic-vec2u-min-max to chronological position by kainino0x · Pull Request #10497 · gpuweb/gpuweb · GitHub](https://github.com/gpuweb/gpuweb/pull/10497) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 13 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/4882016087703552" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/gpuweb/gpuweb/issues/5071" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"www.w3.org/TR/webgpu" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebGPU: atomic-vec2u-min-max" API` — *Core feature API query* (8 returned)
  - `"WebGPU: atomic-vec2u-min-max" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"atomic-vec" OR "u-min-max" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebGPU: atomic-vec2u-min-max" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebGPU: atomic-vec2u-min-max" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `WGSL "atomic<vec2u>" ("atomicMin" OR "atomicMax") "atomic-vec2u-min-max"` — *Finds WGSL shader code snippets demonstrating atomicMin and atomicMax operations on 64-bit atomic vec2u structures.* (3 returned)
  - `WebGPU "atomic-vec2u-min-max" ("requiredFeatures" OR "features.has")` — *Discovers JavaScript WebGPU device initialization code that requests or checks for atomic-vec2u-min-max feature support.* (8 returned)
  - `WebGPU "atomic-vec2u-min-max" OR "atomic<vec2u>" (tutorial OR guide OR algorithm OR 64-bit)` — *Searches for developer guides and articles explaining how to use 64-bit atomic operations in WebGPU without full 64-bit integer hardware support.* (8 returned)
  - `"atomic-vec2u-min-max" ("Chrome" OR "Dawn" OR "wgpu" OR "Chromium" OR "Safari") (intent OR status OR shipping)` — *Tracks browser vendor implementation status, engine support in Dawn or wgpu, and browser release notes.* (8 returned)
  - `site:github.com/gpuweb/gpuweb "atomic-vec2u-min-max"` — *Retrieves WGSL specification issue threads, discussions, and design trade-offs regarding 64-bit vector atomics.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webgpu", shared with 44 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webgpu": no stable pass rate for Chrome yet*
- **Sources cited by the AI synthesis:** 1 result(s) found — **1 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4882016087703552)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4882016087703552)
- [Specification](https://www.w3.org/TR/webgpu/#dom-gpufeaturename-atomic-vec2u-min-max)
- [Chromium Tracking Bug](https://crbug.com/453689550)
