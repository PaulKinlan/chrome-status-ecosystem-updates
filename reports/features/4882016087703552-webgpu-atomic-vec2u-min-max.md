# WebGPU: atomic-vec2u-min-max

> **Report Week:** 2026-W40 | **Milestone:** Chrome 155 | **Category:** In developer trial (Behind a flag)

## Overview

Allows the use of 64-bit atomic minimum and maximum operations on \`atomic&lt;vec2u&gt;\` in WGSL.  This provides WebGPU shader authors with a way to implement certain algorithms that use 64-bit atomics without requiring full support for 64-bit integers.

### Motivation

This provides WebGPU shader authors with a way to implement certain algorithms that use 64-bit atomics without requiring full support for 64-bit integers. Not every device that supports 64-bit atomics can support every atomic operation on these types, so this feature is scoped to the min and max operations to deliver broadest reach.

## Ecosystem Status

- **Momentum:** High (160 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The 'atomic-vec2u-min-max' extension is an optional WebGPU feature enabling 64-bit atomic minimum and maximum operations on 'atomic&lt;vec2u&gt;' in WGSL storage buffers without requiring full hardware 64-bit integer support. Standardized collaboratively in the W3C GPU for the Web Working Group (via issue #5071), it has entered developer trial behind a flag in Chrome 155 alongside official CTS validation suites. The API represents a pragmatic cross-engine compromise designed to deliver high-performance 64-bit atomic capabilities across the widest possible spectrum of desktop and mobile GPUs.

### Recommendations
- Actionable Advice: Evaluate the feature behind flags in Chrome Canary/developer trial to prototype packed 64-bit depth and atomic rasterization pipelines. Because this is an optional feature rather than core Baseline functionality, ensure production code checks 'adapter.features.has("atomic-vec2u-min-max")' and maintains 32-bit atomic fallback paths for unsupported hardware.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFBMt2dtiO46QSdvn6AwKPHulr1CKA7JRnuSx4tg5lQPs-i50ztI3YPezoM3r8mZ-XFj8fFGIlJBZOdVgPYK96D8ji3KFbj1lLYKEd0yHzh3A==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"WebGPU: atomic-vec2u-min-max"** is an optional WebGPU feature (and WGSL extension `atomic_vec2u_min_max`) that introduces 64-bit atomic minimum and maximum operations specifically on `atomic<vec2<u32>>` types located in
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQECisE7To4dfVTCN4Tlbol8NQiygamiCbmzBCoW9ggmE7yAzg81Vhd3zVHXej-OO4P6He1yu8oyneVyXpfE4fU0bCmtPjM-gX_WFiyv9u3e98eO) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"WebGPU: atomic-vec2u-min-max"** is an optional WebGPU feature (and WGSL extension `atomic_vec2u_min_max`) that introduces 64-bit atomic minimum and maximum operations specifically on `atomic<vec2<u32>>` types located in
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFiCUdZpQqi63m-mfy0VD0J5zpNuE9y0N2Eaa9TMxrWR1-QMi4ARo6RpDDaGc5kAziW8WlGfAnGH6Ieb2PTv7J0MBesz6wJn_FOobhP7S9R3Eg=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"WebGPU: atomic-vec2u-min-max"** is an optional WebGPU feature (and WGSL extension `atomic_vec2u_min_max`) that introduces 64-bit atomic minimum and maximum operations specifically on `atomic<vec2<u32>>` types located in
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFQnvegToo_JLV5W5Lse2eNKwisHq03BdY0oV0bfw8wUKDErcWauJSTtXPP6-nhtb_2hEasqwkfAg8X60OcNqj5iU8VtwuegxfR7VStB6fjHWZ7n5UKaocLORYXKI4w5Bsb) *(vertexaisearch.cloud.google.com)*
  > Add limited support for 64 bit atomics · Issue #5071 · gpuweb/gpuweb · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your se...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGS1U84FS53bNiRPV19JgCmhROwnzs20tcGXfaAq1ODxn4kr85yIWYdK909Fz_rxqIZVaZ54fZToYHX2FHFPIlF2Dyon4pNMuDu7oRpSbSejLCruOLZ87I4klIrTrhRpdHPg39HehQwvcvy4xVZ2Xd6TrBuA_CMrj0dVrXs) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"WebGPU: atomic-vec2u-min-max"** is an optional WebGPU feature (and WGSL extension `atomic_vec2u_min_max`) that introduces 64-bit atomic minimum and maximum operations specifically on `atomic<vec2<u32>>` types located in
- [khronos.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF5n8oWz1GfHJzSnNLFlBKon7PR5jBo2d_4DyqsBRfo_zSYDq686nVsSj4h9tZBac2Iz-AQ3DPx03eRHeWVlNNT3hU_hcyYk3N1aD8jBt9yGG5O8J6men6uf0bmdhGgxafHi_Y=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"WebGPU: atomic-vec2u-min-max"** is an optional WebGPU feature (and WGSL extension `atomic_vec2u_min_max`) that introduces 64-bit atomic minimum and maximum operations specifically on `atomic<vec2<u32>>` types located in
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH_MRzpN9l4vCuRusxpZ7P0wOrpTTpL-_hYWDu0UENlpB6ieZqb2Vx_cdwYWlDJ0go257oliqxkuTgappEjX9ZTZVncQYOGlT6MqBh41P-NItiOgx1YyCStwD0=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"WebGPU: atomic-vec2u-min-max"** is an optional WebGPU feature (and WGSL extension `atomic_vec2u_min_max`) that introduces 64-bit atomic minimum and maximum operations specifically on `atomic<vec2<u32>>` types located in
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17534.html) *(mail-archive.com)*
  > &gt;&gt; *No information provided* &gt;&gt; &gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt; https://<strong>chromestatus.com/feature/4882016087703552</strong>?gate=5204891327922176 &gt;&gt; &gt;&gt; This intent message was generated b...
- [\[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17518.html) *(mail-archive.com)*
  > Please list open issues (eg links ... non-backward-compatible way). No information provided Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/4882016087703552</strong>?gate=5204891327922176 This intent message was g...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)*
  > /No information provided/ *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/4882016087703552</strong>?gate=5204891327922176 &lt;https://<strong>chromestatus.com/feature/4882016087703552</strong>?gate=5204891327922...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected], [email protected] &gt; &gt; *Explainer* &gt; https://github.com/gpuweb/gpuweb/issues/5071 &gt; &gt; *Specification* &gt; https://www.w3.org/TR/webgpu/#dom-gpufeaturename-atomic-vec2u-min-max &gt; &gt; *Su...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes) *(chromestatus.com)*
  > <strong>Allows the use of 64-bit atomic minimum and maximum operations on atomic&lt;vec2u&gt; in WGSL</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17534.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4882016087703552`)*
  > &gt;&gt; *No information provided* &gt;&gt; &gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt; https://<strong>chromestatus.com/feature/4882016087703552</strong>?gate=5204891327922176 &gt;&gt; &gt;&gt; This intent message was g...
- [\[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17518.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4882016087703552`)*
  > Please list open issues (eg links ... non-backward-compatible way). No information provided Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/4882016087703552</strong>?gate=5204891327922176 This intent mes...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4882016087703552`)*
  > /No information provided/ *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/4882016087703552</strong>?gate=5204891327922176 &lt;https://<strong>chromestatus.com/feature/4882016087703552</strong>?gate=520...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > &gt; *Contact emails* &gt; [email protected], [email protected] &gt; &gt; *Explainer* &gt; https://github.com/gpuweb/gpuweb/issues/5071 &gt; &gt; *Specification* &gt; https://www.w3.org/TR/webgpu/#dom-gpufeaturename-atomic-vec2u-min-max &gt...

## 📚 Platform Documentation & Specifications

- [Implement \`atomic-vec2u-min-max\` feature · Issue #10435 · gfx-rs/wgpu](https://github.com/gfx-rs/wgpu/issues/10435) *(github.com)*
- [\[editorial\] Move atomic-vec2u-min-max to chronological position by kainino0x · Pull Request #10497 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/pull/10497) *(github.com)*
- [Update gpuweb by Kangz · Pull Request #206 · gpuweb/types](https://github.com/gpuweb/types/pull/206) *(github.com)*
- [Spec changes for atomic vec2u by petermcneeleychromium · Pull Request #5610 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/pull/5610) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 54 result(s) found across 12 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/4882016087703552" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/gpuweb/gpuweb/issues/5071" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"www.w3.org/TR/webgpu" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebGPU: atomic-vec2u-min-max" API` — *Core feature API query* (3 returned)
  - `"WebGPU: atomic-vec2u-min-max" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"atomic-vec" OR "u-min-max" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebGPU: atomic-vec2u-min-max" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (6 returned)
  - `"WebGPU: atomic-vec2u-min-max" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `WebGPU "atomic-vec2u-min-max" OR "atomic<vec2u>" WGSL` — *Finds real-world WGSL shader implementations and JavaScript requestDevice feature request snippets utilizing atomic-vec2u-min-max.* (6 returned)
  - `"atomic-vec2u-min-max" (tutorial OR guide OR "how to" OR example) WebGPU` — *Discovers developer blog posts, practical walkthroughs, and tutorials explaining 64-bit atomic min/max simulation on vec2u.* (8 returned)
  - `"atomic-vec2u-min-max" (Chrome OR Dawn OR Firefox OR Safari OR "release notes")` — *Tracks browser vendor implementation milestones, Dawn framework integration, and shipping status across browsers.* (8 returned)
  - `site:github.com/gpuweb/gpuweb "atomic-vec2u-min-max" OR "atomic<vec2u>"` — *Locates WGSL specification deliberations, trade-offs regarding 64-bit atomic limits, and discussions within the GPU on the Web Working Group.* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 5 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4882016087703552)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4882016087703552)
- [Specification](https://www.w3.org/TR/webgpu/#dom-gpufeaturename-atomic-vec2u-min-max)
- [Chromium Tracking Bug](https://crbug.com/453689550)
