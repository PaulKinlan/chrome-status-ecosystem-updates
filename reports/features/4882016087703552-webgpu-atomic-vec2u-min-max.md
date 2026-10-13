# WebGPU: atomic-vec2u-min-max

> **Report Week:** 2026-W42 | **Milestone:** Chrome 157 (first listed in Chrome 155) | **Category:** Enabled by default

## Overview

Allows the use of 64-bit atomic minimum and maximum operations on \`atomic&lt;vec2u&gt;\` in WGSL.  This provides WebGPU shader authors with a way to implement certain algorithms that use 64-bit atomics without requiring full support for 64-bit integers.

### Motivation

This provides WebGPU shader authors with a way to implement certain algorithms that use 64-bit atomics without requiring full support for 64-bit integers. Not every device that supports 64-bit atomics can support every atomic operation on these types, so this feature is scoped to the min and max operations to deliver broadest reach.

## Ecosystem Status

- **Momentum:** Emerging (footprint 150 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The atomic-vec2u-min-max extension introduces scoped 64-bit atomic minimum and maximum operations to WGSL storage buffers via atomic&lt;vec2u&gt;, sidestepping the hardware limits of full 64-bit integer arithmetic. The feature has achieved cross-vendor consensus within the W3C GPU for the Web Community Group, shipping enabled by default in Chromium while implementation tracks through Firefox and Safari backends. Advanced graphics developers regard this as an essential bridge for high-performance rendering techniques like visibility buffers and software rasterization.

### Recommendations
- Actionable Advice: Teams should adopt this feature progressively by querying adapter.features.has('atomic-vec2u-min-max') and enabling the atomic\_vec2u\_min\_max WGSL extension. Maintain existing fallback paths—such as packed 32-bit atomic keys or multi-pass resolves—for devices and engines where 64-bit atomics are not yet exposed.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)
- **Chrome usage:** 0.085% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Vladimir Levin Wed, 23 Sep 2026 08:21:02 -0700 LGTM1 On Monday, September 21, 2026 at 5:43...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Daniel Bratell Wed, 23 Sep 2026 08:35:46 -0700 LGTM3 Do note that there are some o...
- [\[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17518.html) *(mail-archive.com)*
  > Explainer https://github.com/gpuweb/gpuweb/issues/5071 Specification https://www.w3.org/TR/webgpu/#dom-gpufeaturename-atomic-vec2u-min-max Summary &lt;strong&gt;Allows the use of 64-bit atomic minimum and maximum operations on \`atomic&lt;vec2u&gt;\` in WGSL...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17534.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Monday, September ...org/TR/webgpu/#dom-gpufeaturename-atomic-vec2u-min-max &gt;&gt; &gt;&gt; \*Summary\* &gt;&gt; &lt;strong&gt;Allows the use of 64-bit atomic minimum and maximum operations on &gt;&gt; \`atomic&lt;vec2u&gt;\` in WGSL&lt;...
- [WebGPU: atomic-vec2u-min-max \[564573901\] - Issue Tracker](https://issuetracker.google.com/issues/564573901/resources) *(issuetracker.google.com)*
  > Sign in
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=Intent+to+Ship) *(groups.google.com)*
  > Intent to Ship: WebGPU: atomic-vec2u-min-max · Does this intent deprecate or change behavior of existing &gt; APIs, such that it has potentially high risk for Android &gt; WebView-based applications? &gt; &gt; /No informationunread, Intent to Ship: W...
- [atomic-vec2u-min-max - WebGPU feature availability (0%) - webgpu.report](https://webgpu.report/features/atomic-vec2u-min-max) *(webgpu.report)*
  > atomic-vec2u-min-max - WebGPU feature availability (0%) - webgpu.report webgpu .report atomic-vec2u-min-max Specification: WebGPU § atomic-vec2u-min-max · WGSL § atomic\_vec2u\_min\_max Availability now 0% last 30 days, n = 161 Year over year — unlocks ...
- [Chrome Platform Status](https://chromestatus.com/feature/4882016087703552?gate=6119685002231808) *(chromestatus.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Vladimir Levin Wed, 23 Sep 2026 08:21:02 -0700 LGTM1 On Monday, September 21, 20...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Daniel Bratell Wed, 23 Sep 2026 08:35:46 -0700 LGTM3 Do note that there ...

## 📚 Platform Documentation & Specifications

- [w3.org](https://www.w3.org/TR/WGSL) *(w3.org)*
- [gpuweb/proposals/atomic-64-min-max.md at main · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/blob/main/proposals/atomic-64-min-max.md) *(github.com)*
- [github.com](https://github.com/gfx-rs/wgpu/issues/10435) *(github.com)*
- [2074500 - (webgpu-atomic-vec2u-min-max) WebGPU: support \`atomic-vec2u-min-max\` feature](https://bugzilla.mozilla.org/show_bug.cgi?id=2074500) *(bugzilla.mozilla.org)*
- [Landscape watch 2026-10-05 · Issue #13 · davtamay/Godot\_WebGPU](https://github.com/davtamay/Godot_WebGPU/issues/13) *(github.com)*
- [Add atomic\_vec2u\_min\_max by MendyBerger · Pull Request #604 · webgpu-native/webgpu-headers](https://github.com/webgpu-native/webgpu-headers/pull/604) *(github.com)*
- [\[editorial\] Move atomic-vec2u-min-max to chronological position by kainino0x · Pull Request #10497 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/pull/10497) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 60 result(s) found across 12 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/4882016087703552" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/gpuweb/gpuweb/issues/5071" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"www.w3.org/TR/webgpu" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebGPU: atomic-vec2u-min-max" API` — *Core feature API query* (6 returned)
  - `"WebGPU: atomic-vec2u-min-max" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"atomic-vec" OR "u-min-max" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebGPU: atomic-vec2u-min-max" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (7 returned)
  - `"WebGPU: atomic-vec2u-min-max" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"atomic-vec2u-min-max" WGSL (tutorial OR guide OR example) WebGPU` — *Find developer guides and shader tutorials demonstrating atomic-vec2u-min-max in WGSL.* (0 returned)
  - `"atomic-vec2u-min-max" "atomic<vec2u>" (atomicMin OR atomicMax)` — *Search for code implementations and API syntax showing 64-bit atomic min and max on atomic&lt;vec2u&gt; in WebGPU.* (8 returned)
  - `"atomic-vec2u-min-max" (Chrome OR Dawn OR "Intent to Ship" OR release)` — *Track browser rollout, Dawn implementation, and shipping status across engines.* (8 returned)
  - `site:github.com/gpuweb/gpuweb "atomic-vec2u-min-max" OR "5071"` — *Locate GPUWeb Working Group discussions, rationale, and hardware constraints regarding 64-bit atomics.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webgpu", shared with 44 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webgpu": no stable pass rate for Chrome yet*
- **Sources cited by the AI synthesis:** 3 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4882016087703552)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4882016087703552)
- [Specification](https://www.w3.org/TR/webgpu/#dom-gpufeaturename-atomic-vec2u-min-max)
- [Chromium Tracking Bug](https://crbug.com/453689550)
