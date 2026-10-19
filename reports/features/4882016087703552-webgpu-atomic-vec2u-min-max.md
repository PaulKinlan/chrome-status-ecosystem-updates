# WebGPU: atomic-vec2u-min-max

> **Report Week:** 2026-W43 | **Milestone:** Chrome 157 (first listed in Chrome 155) | **Category:** Enabled by default

## Overview

Allows the use of 64-bit atomic minimum and maximum operations on \`atomic&lt;vec2u&gt;\` in WGSL.  This provides WebGPU shader authors with a way to implement certain algorithms that use 64-bit atomics without requiring full support for 64-bit integers.

### Motivation

This provides WebGPU shader authors with a way to implement certain algorithms that use 64-bit atomics without requiring full support for 64-bit integers. Not every device that supports 64-bit atomics can support every atomic operation on these types, so this feature is scoped to the min and max operations to deliver broadest reach.

## Ecosystem Status

- **Momentum:** Emerging (footprint 140 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The 'atomic-vec2u-min-max' feature introduces 64-bit atomic minimum and maximum capabilities to WebGPU by using composite 8-byte 'atomic&lt;vec2u&gt;' storage variables through WGSL's 'atomicStoreMin' and 'atomicStoreMax' built-ins. Officially enabled by default in Chromium 157 following an approved Blink Intent to Ship, the API bypasses the absence of full 64-bit integer types to map directly to hardware-level 64-bit atomic operations across underlying backends like Metal, Vulkan, and Direct3D 12. The specification has landed in W3C GPU for the Web standards with broad multi-engine working group backing.

### Recommendations
- Actionable Advice: Treat this capability strictly as an optional hardware-dependent feature: verify support with adapter.features.has('atomic-vec2u-min-max') and request it explicitly during device initialization before adding 'enable atomic\_vec2u\_min\_max;' in WGSL. Maintain fallback rendering paths—such as packed 32-bit reduced precision keys or two-pass visibility evaluations—for platforms and adapters where 64-bit atomics remain unsupported.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)
- **Chrome usage:** 0.096% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

## 📰 Ecosystem Blogs & Articles

- [webgpu.report](https://webgpu.report/features/atomic-vec2u-min-max) *(webgpu.report)*
  > The \*\*\`atomic-vec2u-min-max\`\*\* feature introduces support for 64-bit atomic minimum and maximum operations on \`atomic&lt;vec2u&gt;\` variables within WGSL (WebGPU Shading Language) storage buffers \*\*New Built-ins\*\*: The feature introduces the \`atomicStoreMi...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17534.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Alex Russell Wed, 23 Sep 2026 08:27:12 -0700 LGTM2 On Wednesday, September 23, 2026 at 8:2...
- [\[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17518.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Chromestatus Mon, 21 Sep 2026 14:43:50 -0700 Contact emails \[email&#160;protected\] , \[email&#160;p...
- [WGSL: Add atomic min max for u64, to support Nanite \[453689550\] - Chromium](https://issues.chromium.org/issues/453689550) *(issues.chromium.org)*
  > Chromium Sign in
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Daniel Bratell Wed, 23 Sep 2026 08:35:46 -0700 LGTM3 Do note that there are some o...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Vladimir Levin Wed, 23 Sep 2026 08:21:02 -0700 LGTM1 On Monday, September 21, 2026 at 5:43...
- [WebGPU: atomic-vec2u-min-max \[564573901\] - Issue Tracker](https://issuetracker.google.com/issues/564573901/resources) *(issuetracker.google.com)*
  > Sign in

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17534.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4882016087703552`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Alex Russell Wed, 23 Sep 2026 08:27:12 -0700 LGTM2 On Wednesday, September 23, 2...
- [\[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17518.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Chromestatus Mon, 21 Sep 2026 14:43:50 -0700 Contact emails \[email&#160;protected\] , \[em...
- [WGSL: Add atomic min max for u64, to support Nanite \[453689550\] - Chromium](https://issues.chromium.org/issues/453689550) *(issues.chromium.org)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > Chromium Sign in
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Daniel Bratell Wed, 23 Sep 2026 08:35:46 -0700 LGTM3 Do note that there ...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Vladimir Levin Wed, 23 Sep 2026 08:21:02 -0700 LGTM1 On Monday, September 21, 20...

## 📚 Platform Documentation & Specifications

- [gpuweb/proposals/atomic-64-min-max.md at main · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/blob/main/proposals/atomic-64-min-max.md) *(github.com)*
- [w3.org](https://www.w3.org/TR/WGSL) *(w3.org)*
- [2074500 - (webgpu-atomic-vec2u-min-max) WebGPU: support \`atomic-vec2u-min-max\` feature](https://bugzilla.mozilla.org/show_bug.cgi?id=2074500) *(bugzilla.mozilla.org)*
- [Add atomic\_vec2u\_min\_max by MendyBerger · Pull Request #604 · webgpu-native/webgpu-headers](https://github.com/webgpu-native/webgpu-headers/pull/604) *(github.com)*
- [Implement \`atomic-vec2u-min-max\` feature · Issue #10435 · gfx-rs/wgpu](https://github.com/gfx-rs/wgpu/issues/10435) *(github.com)*
- [Spec changes for atomic vec2u by petermcneeleychromium · Pull Request #5610 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/pull/5610) *(github.com)*
- [\[editorial\] Move atomic-vec2u-min-max to chronological position by kainino0x · Pull Request #10497 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/pull/10497) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 50 result(s) found across 12 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/4882016087703552" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/gpuweb/gpuweb/issues/5071" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"www.w3.org/TR/webgpu" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebGPU: atomic-vec2u-min-max" API` — *Core feature API query* (6 returned)
  - `"WebGPU: atomic-vec2u-min-max" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"atomic-vec" OR "u-min-max" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebGPU: atomic-vec2u-min-max" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (6 returned)
  - `"WebGPU: atomic-vec2u-min-max" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"atomic-vec2u-min-max" WebGPU WGSL shader tutorial` — *Finds developer guides and tutorials explaining how to use atomic-vec2u-min-max in WebGPU shaders.* (8 returned)
  - `WebGPU "atomic<vec2u>" min max WGSL code example` — *Discovers real-world WGSL code snippets and API usage examples for 64-bit atomic min and max on vec2u.* (8 returned)
  - `GPUWeb issue 5071 atomic-vec2u-min-max adoption sentiment` — *Tracks the discussion, feature announcements, and ecosystem adoption around the atomic-vec2u-min-max proposal.* (8 returned)
  - `WebGPU 64-bit atomic min max vec2u discussion community` — *Gauges developer feedback and community sentiment regarding the atomic-vec2u-min-max feature limits and hardware support.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 5 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webgpu", shared with 44 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webgpu": no stable pass rate for Chrome yet*
- **Sources cited by the AI synthesis:** 5 result(s) found — **4 verified relevant**

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
