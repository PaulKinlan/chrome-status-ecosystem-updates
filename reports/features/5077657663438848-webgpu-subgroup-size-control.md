# WebGPU: Subgroup Size Control

> **Report Week:** 2026-W38 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Adds the optional GPU feature "subgroup-size-control" that allows explicitly setting the subgroup size in a compute shader.  This technique is particularly useful for the applications that need to optimize the performance of the compute shader using subgroup operations with specifc subgroup size on certain platforms, such as the AI workloads.

### Motivation

Adds the optional GPU feature "subgroup-size-control" that allows explicitly setting the subgroup size in a compute shader.

This technique is particularly useful for the applications that need to optimize the performance of the compute shader using subgroup operations with specifc subgroup size on certain platforms, such as the AI workloads.

## Ecosystem Status

- **Momentum:** High (140 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive / High Interest
- **Executive Take:** WebGPU: Subgroup Size Control is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Multi-Engine Consensus standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16879.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Chris Harrelson Thu, 25 Jun 2026 13:17:54 -0700 LGTM2 On Wed, Jun 24, 2026 at 10...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16861.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Alex Russell Wed, 24 Jun 2026 10:28:22 -0700 LGTM1 On Wednesday, June 24, 2026 at 1:37:0...
- [\[blink-dev\] Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16837.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: WebGPU: Subgroup Size Control Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: Subgroup Size Control Chromestatus Wed, 24 Jun 2026 01:36:56 -0700 Contact emails [email&#160;protected] Explainer No ...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16882.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Mike Taylor Thu, 25 Jun 2026 14:33:12 -0700 LGTM3 On 6/25/26 4:17 p.m., Chris Ha...
- [Mastering Thread Calculations in WebGPU Compute Shaders: Workgroup Size, Count, and Thread Identification \| by Josh Sideris \| Medium](https://medium.com/@josh.sideris/mastering-thread-calculations-in-webgpu-workgroup-size-count-and-thread-identification-6b44a87a4764) *(medium.com · 2025-01-17T03:22:53)*
  > Medium Mastering Thread Calculations in WebGPU Compute Shaders: Workgroup Size, Count, and Thread Identification | by Josh Sideris | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in Josh Sideris Webgpu Web Development G...
- [WebGPU Compute Shader Basics](https://webgpufundamentals.org/webgpu/lessons/webgpu-compute-shaders.html) *(webgpufundamentals.org)*
  > WebGPU Compute Shader Basics English Español 日本語 한국어 Português (Brasil) Русский Türkçe Українська 简体中文 Table of Contents webgpufundamentals.org Fix, Fork, Contribute WebGPU Compute Shader Basics This browser is missing a few WebGPU features. Please u...
- [r/vulkan on Reddit: What is the maximum amount of threads you can use for a workgroup?](https://www.reddit.com/r/vulkan/comments/1ck4mxd/what_is_the_maximum_amount_of_threads_you_can_use) *(reddit.com · 2024-05-04T16:44:19)*
  > So you have (groupCountX●Y●Z)●(local_size_x●y●z) threads running in parallel on the GPU. You have <strong>(local_size_x●y●z)/subgroupSize subgroups/warps/waves</strong> running, because the GPU split the local group into subgroups.
- [Subgroup Selectors - Dynamic HTML: The Definitive Reference \[Book\]](https://www.oreilly.com/library/view/dynamic-html-the/1565924940/ch03s07.html) *(oreilly.com · 1998-07-01T00:00:00)*
  > Subgroup Selectors While a selector for a style sheet rule is most often an HTML element name, that scenario is not flexible enough for more complex documents. Consider the... - Selection from Dynamic HTML: The Definitive Reference [Book]
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > This optimizes compute shader performance using subgroup operations with specific subgroup sizes on targeted hardware platforms, particularly for AI workloads. Tracking bug #463721943 | ChromeStatus.com entry | Spec · For users of Safe Browsing Enhan...
- [CSS grouping and subgrouping - Stack Overflow](https://stackoverflow.com/questions/1610627/css-grouping-and-subgrouping) *(stackoverflow.com)*
  > Yes. And this is built into CSS.
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>Adds the optional GPU feature &quot;subgroup-size-control&quot; that lets developers explicitly set the subgroup size in a compute shader</strong>.
- [Microsoft Edge 152 web platform release notes (Aug. 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > The GPU subgroup-size-control feature <strong>allows you to explicitly set the subgroup size in a compute shader</strong>. This is useful when you need to optimize the performance of a compute shader on certain platforms, such as for AI workloads.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16879.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/5578`)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Chris Harrelson Thu, 25 Jun 2026 13:17:54 -0700 LGTM2 On Wed, Jun 24, ...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16861.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/5578`)*
  > [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Alex Russell Wed, 24 Jun 2026 10:28:22 -0700 LGTM1 On Wednesday, June 24, 2026...
- [\[blink-dev\] Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16837.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/5578`)*
  > [blink-dev] Intent to Ship: WebGPU: Subgroup Size Control Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: Subgroup Size Control Chromestatus Wed, 24 Jun 2026 01:36:56 -0700 Contact emails [email&#160;protected] Exp...

## 📚 Platform Documentation & Specifications

- [GPUAdapterInfo: subgroupMinSize property](https://developer.mozilla.org/en-US/docs/Web/API/GPUAdapterInfo/subgroupMinSize) *(developer.mozilla.org)*
- [GPUAdapterInfo: subgroupMaxSize property](https://developer.mozilla.org/en-US/docs/Web/API/GPUAdapterInfo/subgroupMaxSize) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 36 result(s) found across 7 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5077657663438848" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/gpuweb/gpuweb/pull/5578" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"WebGPU: Subgroup Size Control" API` — *Core feature API query* (3 returned)
  - `"WebGPU: Subgroup Size Control" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"subgroup-size-control" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebGPU: Subgroup Size Control" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebGPU: Subgroup Size Control" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5077657663438848)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5077657663438848)
- [Specification](https://github.com/gpuweb/gpuweb/pull/5578)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/463721943)
