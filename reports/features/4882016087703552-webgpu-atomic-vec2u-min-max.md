# WebGPU: atomic-vec2u-min-max

> **Report Week:** 2026-W44 | **Milestone:** Chrome 157 (first listed in Chrome 155) | **Category:** Enabled by default

## Overview

Allows the use of 64-bit atomic minimum and maximum operations on \`atomic&lt;vec2u&gt;\` in WGSL.  This provides WebGPU shader authors with a way to implement certain algorithms that use 64-bit atomics without requiring full support for 64-bit integers.

### Motivation

This provides WebGPU shader authors with a way to implement certain algorithms that use 64-bit atomics without requiring full support for 64-bit integers. Not every device that supports 64-bit atomics can support every atomic operation on these types, so this feature is scoped to the min and max operations to deliver broadest reach.

## Ecosystem Status

- **Momentum:** Moderate (footprint 231 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The optional WebGPU feature \`atomic-vec2u-min-max\` exposes 64-bit atomic minimum and maximum operations in WGSL by utilizing \`atomic&lt;vec2u&gt;\` as an 8-byte composite surrogate, bypassing the need for full 64-bit integer (\`u64\`) type support. Standardized in the W3C GPU for the Web specifications and shipping enabled by default in Chromium's Dawn/Tint pipeline, it directly addresses critical compute-rendering bottlenecks. Consensus among engine vendors is firm, as the API's targeted design was engineered specifically around underlying hardware constraints across platforms.

### Recommendations
- Actionable Advice: Treat this capability strictly as progressive enhancement: query \`adapter.features.has('atomic-vec2u-min-max')\` before requesting the device and gating shader modules that use \`enable atomic\_vec2u\_min\_max;\`. Maintain traditional multipass or 32-bit depth-reduction fallbacks for devices lacking 64-bit atomic support.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "GPUにはベクトルのアトミック操作があるのかと思ったら ( atomic&lt;vec2u&gt; )、これはu64らしい。 WGSLには64ビット整数型がなくてこうなってるらしい。 アトミック操作のmin / maxはC++26でも入った" (2 points, 0 comments).

## Web-features Group

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)
- **Chrome usage:** 0.093% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [GPUにはベクトルのアトミック操作があるのかと思ったら ( atomic&lt;vec2u&gt; )、これはu64らしい。 WGSLには64ビット整数型がなくてこうなってるらしい。 アトミック操作のmin / maxはC++26でも入った](https://twitter.com/cpp_akira/status/2113526311432126833) — *by @cpp\_akira, 2 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [khronos.org](https://www.khronos.org/developers/linkto/wgsl) *(khronos.org)*
  > In modern GPU-driven software rasterization (such as Unreal Engine's Nanite), shaders pack depth (e.g., 32-bit depth) into the upper bits and a material/cluster/primitive ID into the lower bits \*\*Khronos Group Presentation: \*"WGSL: Past, Present and ...
- [appspot.com](https://polymer10-dot-cr-status.appspot.com/feature/4882016087703552/activity) *(polymer10-dot-cr-status.appspot.com)*
  > \*\*ChromeStatus Entry (\`WebGPU: atomic-vec2u-min-max\`):\*\* Tracks the implementation across Dawn/Tint and Chromium
- [WebGPU: atomic-vec2u-min-max \[564573901\] - Issue Tracker](https://issuetracker.google.com/issues/564573901/resources) *(issuetracker.google.com)*
  > \*\*Google Issue Tracker & MDN Documentation (Issue #564573901):\*\* Chromium engineers initiated the documentation push for MDN and Chrome for Developers, identifying the feature as part of the WebGPU API update wave
- [googleusercontent.com](https://doc-26bg-1o5g-issuetracker.googleusercontent.com/issues/564573901) *(doc-26bg-1o5g-issuetracker.googleusercontent.com)*
  > \*\*Google Issue Tracker & MDN Documentation (Issue #564573901):\*\* Chromium engineers initiated the documentation push for MDN and Chrome for Developers, identifying the feature as part of the WebGPU API update wave \*\*Chrome Developer Updates ("What's ...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > \*\*Edge 157 Web Platform Release Notes:\*\* Microsoft Edge officially included \`WebGPU: atomic-vec2u-min-max\` in its platform updates under Web APIs, highlighting continued feature parity with Chromium's WebGPU implementation
- [jendrikillner.com](https://www.jendrikillner.com/article_database) *(jendrikillner.com)*
  > \*\*Graphics Community Reactions:\*\* Graphics engineers (such as Corentin Wallez and contributors to the \*Graphics Programming Weekly\* digests) noted that \`atomic-vec2u-min-max\`, alongside features like \`bufferView\`, bindless textures (\`GPUResourceTable...
- [gamedev.place](https://mastodon.gamedev.place/@DaKangz) *(mastodon.gamedev.place)*
  > \*\*Graphics Community Reactions:\*\* Graphics engineers (such as Corentin Wallez and contributors to the \*Graphics Programming Weekly\* digests) noted that \`atomic-vec2u-min-max\`, alongside features like \`bufferView\`, bindless textures (\`GPUResourceTable...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Vladimir Levin Wed, 23 Sep 2026 08:21:02 -0700 LGTM1 On Monday, September 21, 2026 at 5:43...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Daniel Bratell Wed, 23 Sep 2026 08:35:46 -0700 LGTM3 Do note that there are some o...
- [\[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17518.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Chromestatus Mon, 21 Sep 2026 14:43:50 -0700 Contact emails \[email&#160;protected\] , \[email&#160;p...
- [WGSL: Add atomic min max for u64, to support Nanite \[453689550\] - Chromium](https://issues.chromium.org/issues/453689550) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17534.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Monday, September ...org/TR/webgpu/#dom-gpufeaturename-atomic-vec2u-min-max &gt;&gt; &gt;&gt; \*Summary\* &gt;&gt; &lt;strong&gt;Allows the use of 64-bit atomic minimum and maximum operations on &gt;&gt; \`atomic&lt;vec2u&gt;\` in WGSL&lt;...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4882016087703552`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Vladimir Levin Wed, 23 Sep 2026 08:21:02 -0700 LGTM1 On Monday, September 21, 20...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4882016087703552`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Daniel Bratell Wed, 23 Sep 2026 08:35:46 -0700 LGTM3 Do note that there ...
- [\[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17518.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Chromestatus Mon, 21 Sep 2026 14:43:50 -0700 Contact emails \[email&#160;protected\] , \[em...
- [WGSL: Add atomic min max for u64, to support Nanite \[453689550\] - Chromium](https://issues.chromium.org/issues/453689550) *(issues.chromium.org)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > Chromium Sign in

## 📚 Platform Documentation & Specifications

- [w3.org](https://www.w3.org/TR/WGSL) *(w3.org)*
- [github.com](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2025%E2%80%9012%E2%80%9009-WGSL) *(github.com)*
- [2074500 - (webgpu-atomic-vec2u-min-max) WebGPU: support \`atomic-vec2u-min-max\` feature](https://bugzilla.mozilla.org/show_bug.cgi?id=2074500) *(bugzilla.mozilla.org)*
- [gpuweb/proposals/atomic-64-min-max.md at main · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/blob/main/proposals/atomic-64-min-max.md) *(github.com)*
- [WGSL: expose 64-bit atomic min/max through atomic\_vec2u\_min\_max (atomicStoreMin/atomicStoreMax on atomic&lt;vec2&lt;u32&gt;&gt;) · Issue #13916 · shader-slang/slang](https://github.com/shader-slang/slang/issues/13916) *(github.com)*
- [Landscape watch 2026-10-05 · Issue #13 · davtamay/Godot\_WebGPU](https://github.com/davtamay/Godot_WebGPU/issues/13) *(github.com)*
- [Landscape watch 2026-10-19 · Issue #15 · davtamay/Godot\_WebGPU](https://github.com/davtamay/Godot_WebGPU/issues/15) *(github.com)*
- [Landscape watch 2026-10-12 · Issue #14 · davtamay/Godot\_WebGPU](https://github.com/davtamay/Godot_WebGPU/issues/14) *(github.com)*
- [Spec changes for atomic vec2u by petermcneeleychromium · Pull Request #5610 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/pull/5610) *(github.com)*
- [\[editorial\] Move atomic-vec2u-min-max to chronological position by kainino0x · Pull Request #10497 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/pull/10497) *(github.com)*
- [Update gpuweb by Kangz · Pull Request #206 · gpuweb/types](https://github.com/gpuweb/types/pull/206) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 58 result(s) found across 12 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/4882016087703552" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/gpuweb/gpuweb/issues/5071" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"www.w3.org/TR/webgpu" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebGPU: atomic-vec2u-min-max" API` — *Core feature API query* (6 returned)
  - `"WebGPU: atomic-vec2u-min-max" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"atomic-vec" OR "u-min-max" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebGPU: atomic-vec2u-min-max" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (7 returned)
  - `"WebGPU: atomic-vec2u-min-max" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"atomic-vec2u-min-max" OR "atomic<vec2u>" WebGPU WGSL tutorial OR guide` — *Finds developer guides and tutorials demonstrating how to implement 64-bit atomics using vec2u in WGSL shaders.* (0 returned)
  - `"atomic-vec2u-min-max" "atomicMin" OR "atomicMax" WGSL "atomic<vec2u>"` — *Locates real-world WGSL shader code snippets and JavaScript feature detection examples for atomic-vec2u-min-max.* (2 returned)
  - `"atomic-vec2u-min-max" ("intent to ship" OR "Chrome" OR "Dawn" OR "release notes")` — *Tracks browser vendor implementation status, engine landing announcements, and browser release notes.* (8 returned)
  - `site:github.com/gpuweb "atomic-vec2u-min-max" OR "5071" OR "atomic<vec2u>"` — *Surfaces W3C GPU for the Web working group discussions, feedback, and design trade-offs regarding 64-bit atomic vec2u operations.* (7 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webgpu", shared with 44 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webgpu": no stable pass rate for Chrome yet*
- **Sources cited by the AI synthesis:** 2 result(s) found — **2 verified relevant**

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
