# WebGPU: Subgroup Size Control

> **Report Week:** 2026-W40 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Adds the optional GPU feature "subgroup-size-control" that allows explicitly setting the subgroup size in a compute shader.  This technique is particularly useful for the applications that need to optimize the performance of the compute shader using subgroup operations with specifc subgroup size on certain platforms, such as the AI workloads.

### Motivation

Adds the optional GPU feature "subgroup-size-control" that allows explicitly setting the subgroup size in a compute shader.

This technique is particularly useful for the applications that need to optimize the performance of the compute shader using subgroup operations with specifc subgroup size on certain platforms, such as the AI workloads.

## Ecosystem Status

- **Momentum:** High (270 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** Subgroup Size Control introduces the optional WebGPU feature "subgroup-size-control" alongside the WGSL extension of the same name, allowing developers to lock compute shader entry points to a fixed SIMD subgroup width via the @subgroup\_size attribute. Standardized through the W3C GPU for the Web Working Group (PR #5578) and enabled by default in Chromium starting in Chrome 152, this feature removes driver-level subgroup width ambiguity. While standard support is consensus-backed in spec discussions, actual engine rollout remains Chromium-led while other engines complete foundational subgroup support.

### Recommendations
- Actionable Advice: Treat subgroup-size-control as an optional progressive enhancement: guard pipeline creation with adapter.features.has('subgroup-size-control') and check adapter-reported minimum and maximum subgroup sizes before requesting the device. Always maintain dynamic-width or non-subgroup compute fallback shaders for devices and browsers that lack the extension.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHEFeidPhpmierHGukTp49xrWFUBcYpAysoodyMQU_S_70s-Dm87nSKgTwaw1yu8WewWJpDSMnnWQZHkM4I6wzoeXB99IcgMKaF9FZXqpxU-oSeEQ==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  **WebGPU: Subgroup Size Control** introduces the optional device feature `"subgroup-size-control"` (and corresponding WGSL extension `subgroup_size_control`). It allows developers to explicitly set the SIMD subgroup width in co
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGkmQ0CxrnRUVU2via0FXB3RRRdCj1yYpOlaBhfs7ORWSDc5DA0Rl3vVKtw2-3MsuDme0k1ZsqF1bQUF_MMN47bFByXSd_MXm_D5ooOHLPLYkk=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  **WebGPU: Subgroup Size Control** introduces the optional device feature `"subgroup-size-control"` (and corresponding WGSL extension `subgroup_size_control`). It allows developers to explicitly set the SIMD subgroup width in co
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHulmqdglx-8bUtQ7UxNR9M6KTYkpGb9owKDGN8iuPb4gCCPG7USyqPQL499JXzTe9pbncDVKk7EFpSdquUrP46dpVSy5Z6L3rbZAV1qJko7Fr5YGSxmf-_yML4hhcC__UaPF2YxZ6ublVWzS2qFDzMVD9N) *(vertexaisearch.cloud.google.com)*
  > Tính năng mới trong WebGPU (Chrome 151 – 152) | Blog | Chrome for Developers Chuyển ngay đến nội dung chính / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG_hVBu2bBrwJrsGom8sHYlt0AQd2rvR8CENlUWvgGZsNOqeO0fd8C_6xxLHcVo00wXjB9drnku0jQ-knQhsZ7foIy0olByuaih_JVN7pjQnBLQEtB0niKJYzvcO2z9y_8Eo5k0G2L3VzLGMrpNobtVCv3ensvM9lfDCAM5q8b5RR3RoQ==) *(vertexaisearch.cloud.google.com)*
  > WebGPU 新功能 (Chrome 151-152) | Blog | Chrome for Developers 跳至主要內容 / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHEXsOk2nVmk-HBBIDvn44PI8rEl_M4CfFMpUBBUIUMl6e5dWeNfGLH8GLtQyVmm3xEvYP4rW88fMqUoddqM5VlEtoIJYzISOixBKRwtkUWKtLQeLGZ2IVt550_v8jAFVOhy1sOIUTUkivLaPS1HKPxWTLFbz96m0EJI1m3gl--) *(vertexaisearch.cloud.google.com)*
  > WebGPU&apos;daki yenilikler (Chrome 151-152) | Blog | Chrome for Developers Ana içeriğe atla / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHx8lTmUZq6BIohC_Pe7TqGNeu_DQVVSIg0pp-Pf7UMpVrunqDAgk_tjppDX4lPiXYpCH5RV72hmXvt_t3s3xYI5eMnbTIngtQPeuelBdQn_Jlf22jMzM2qRMnS3Y0No6MGEQ==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  **WebGPU: Subgroup Size Control** introduces the optional device feature `"subgroup-size-control"` (and corresponding WGSL extension `subgroup_size_control`). It allows developers to explicitly set the SIMD subgroup width in co
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG9oTDQNg2CG-VmQeE_e1xPpyATQpCd3NbW4jmYnCn_U_sJMv8Hl07RdN_V0y-_UgwVrcZnQIhBJoVDk98u-8VECZnR8VBQGGPqkC80aKUskPbqMp9eccq1XtAEc78QIhPDuncGlJVH) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  **WebGPU: Subgroup Size Control** introduces the optional device feature `"subgroup-size-control"` (and corresponding WGSL extension `subgroup_size_control`). It allows developers to explicitly set the SIMD subgroup width in co
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFEr3ib6YeoqMNeGJesB7_B1X-QrIX4IYa8xRtOGlWGx01GlAPuhvzkLJyo0novwaCJPp0N38Yhr8pAIVqhl33nL1wUVBYevfe8yaCNMQEgiFbxMueWPdEUcjqOZXYwQ43qEqjXJm02NxaOTXecFq8GZ2zHuD3ztX2hC1tSKEaEOLFJv0EuZaLfxphTMg==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  **WebGPU: Subgroup Size Control** introduces the optional device feature `"subgroup-size-control"` (and corresponding WGSL extension `subgroup_size_control`). It allows developers to explicitly set the SIMD subgroup width in co
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEGESAT6htfIlzumNE9JK53GYUFs03z3LQOjo3DUvUxtnkUKqCoJAAuv2lYVIQrsJ2Kt_9g4YdfO1pjKeVUgo1dXBez_5rKdjUvq4IHX6ZcpFJpSPj5dwI8wdyc1oaGzQok8ZEOU5bLcZQBDWsFplo204O4yva0wvUy_ZmSehvZzp11Pe1T) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  **WebGPU: Subgroup Size Control** introduces the optional device feature `"subgroup-size-control"` (and corresponding WGSL extension `subgroup_size_control`). It allows developers to explicitly set the SIMD subgroup width in co
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFzzcsa6odHScmIF0vAIjs6KOcsjRhNEDjAw5TPvXy8JoLQvjbiASs9cPqkwm8k4wofVOJNAcHyY3vdQ5ydN1utT87_P3m-k-Sr3EAmfaYmuO9VZml-HjCndcNQ7zC4Gj0FmqW_q22nW1USRD902sZsBgheELhhePWqAxw=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  **WebGPU: Subgroup Size Control** introduces the optional device feature `"subgroup-size-control"` (and corresponding WGSL extension `subgroup_size_control`). It allows developers to explicitly set the SIMD subgroup width in co
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG3kANusfBNIDrNTq2dTBFgsxycB1gC3UGWa2xLh8zaECvyUqXhDD7uCFVtioG0HrvTd_fb2MQCM6AiSZk1DhnaOvOLHPL4pxjHGU59UmNcW587oJQr7_hBo-lP4YdBWKfGGbAm7J_oRPs=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  **WebGPU: Subgroup Size Control** introduces the optional device feature `"subgroup-size-control"` (and corresponding WGSL extension `subgroup_size_control`). It allows developers to explicitly set the SIMD subgroup width in co
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEF8mI1J19DyUQTYE-CIufqTHme_3vdzqFh9rNa2sWlq58rx3kZ6W12cskY2SuFXMDgtKnLJRxjilEh8_YTqD7C7nVmcYFEhkF7fdJQ99_CkzOWweUAjJ4m6D3PYt2kYlVUw_V6qJ5d19kv9sXX) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  **WebGPU: Subgroup Size Control** introduces the optional device feature `"subgroup-size-control"` (and corresponding WGSL extension `subgroup_size_control`). It allows developers to explicitly set the SIMD subgroup width in co
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEskdBQoJ8iH6OSJ8OqOVumpbyj5eKNvEDX_DMNlyHf_RgT1WbBTSbSlL2tfOdZKecIHpu6hxe6nQU0SFaxPJRYtgiIGKj00ye3ox6oVQGMDVS-eGGiODlkU2JO1q3cVAdlHlfmDJfXyihrcPjaNeoOOTqcq4g3fQ==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  **WebGPU: Subgroup Size Control** introduces the optional device feature `"subgroup-size-control"` (and corresponding WGSL extension `subgroup_size_control`). It allows developers to explicitly set the SIMD subgroup width in co
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16879.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Wednesday, June 24, 2026 at 1:37:02 AM UTC-7 Chromestatus wrote: &gt; &gt;&gt; *Contact emails* &gt;&gt; [email protected] &gt;&gt; &gt;&gt; *Explainer* &gt;&gt; *No information provided* &gt;&gt; &gt;&gt; *Specification* &gt;...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16861.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; *No information provided* &gt; &gt; *Specification* &gt; https://github.com/gpuweb/gpuweb/pull/5578 &gt; &gt; *Summary* &gt; <strong>Adds the optional GPU feature &quot;subgroup-...
- [\[blink-dev\] Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16837.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://github.com/gpuweb/gpuweb/pull/5578 Summary <strong>Adds the optional GPU feature &quot;subgroup-size-control&quot; that allows explicitly setting the subgroup size in a compute shader</strong>.
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16882.html) *(mail-archive.com)*
  > LGTM1 On Wednesday, June 24, 2026 ...b/gpuweb/pull/5578 *Summary* Adds the optional GPU feature &quot;subgroup-size-control&quot; that <strong>allows explicitly setting the subgroup size in a compute shader</strong>....
- [Mastering Thread Calculations in WebGPU Compute Shaders: Workgroup Size, Count, and Thread Identification \| by Josh Sideris \| Medium](https://medium.com/@josh.sideris/mastering-thread-calculations-in-webgpu-workgroup-size-count-and-thread-identification-6b44a87a4764) *(medium.com · 2025-01-17T03:22:53)*
  > One of the most critical skills when working with compute shaders, and one that I personally found particularly confusing at first, is understanding how to organize and identify threads. This guide will walk you through the core concepts of workgroup...
- [WebGPU Compute Shader Basics](https://webgpufundamentals.org/webgpu/lessons/webgpu-compute-shaders.html) *(webgpufundamentals.org)*
  > The general advice for WebGPU is to <strong>choose a workgroup size of 64 unless you have some specific reason to choose another size</strong>. Apparently most GPUs can efficiently run 64 things in lockstep.
- [Subgroup Selectors - Dynamic HTML: The Definitive Reference \[Book\]](https://www.oreilly.com/library/view/dynamic-html-the/1565924940/ch03s07.html) *(oreilly.com · 1998-07-01T00:00:00)*
  > Subgroup Selectors While a selector for a style sheet rule is most often an HTML element name, that scenario is not flexible enough for more complex documents. Consider the... - Selection from Dynamic HTML: The Definitive Reference [Book]
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > Tracking bug #535514300 | ChromeStatus.com entry | Spec · Adds the optional GPU feature &quot;subgroup-size-control&quot; that <strong>allows explicitly setting the subgroup size in a compute shader</strong>.
- [CSS grouping and subgrouping - Stack Overflow](https://stackoverflow.com/questions/1610627/css-grouping-and-subgrouping) *(stackoverflow.com)*
  > Yes. And this is built into CSS.
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>Adds the optional GPU feature &quot;subgroup-size-control&quot; that lets developers explicitly set the subgroup size in a compute shader</strong>.
- [Microsoft Edge 152 web platform release notes (Aug. 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > The GPU subgroup-size-control feature <strong>allows you to explicitly set the subgroup size in a compute shader</strong>. This is useful when you need to optimize the performance of a compute shader on certain platforms, such as for AI workloads.
- [Chrome 151 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-151-beta) *(developer.chrome.com · 2026-07-03T00:00:00)*
  > Adds the optional GPU feature subgroup-size-control that <strong>lets you explicitly set the subgroup size in a compute shader</strong>.
- [Chrome 152 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/152) *(chromestatus.com)*
  > To exclude specific sites from triggering the warning, admins can add URLs to the SafeBrowsingAllowlistDomains policy. ... Adds the optional GPU feature &quot;subgroup-size-control&quot; that <strong>allows explicitly setting the subgroup size in a c...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16879.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/5578`)*
  > &gt; LGTM1 &gt; &gt; On Wednesday, June 24, 2026 at 1:37:02 AM UTC-7 Chromestatus wrote: &gt; &gt;&gt; *Contact emails* &gt;&gt; [email protected] &gt;&gt; &gt;&gt; *Explainer* &gt;&gt; *No information provided* &gt;&gt; &gt;&gt; *Specifica...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16861.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/5578`)*
  > &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; *No information provided* &gt; &gt; *Specification* &gt; https://github.com/gpuweb/gpuweb/pull/5578 &gt; &gt; *Summary* &gt; <strong>Adds the optional GPU feature &quot...
- [\[blink-dev\] Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16837.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/5578`)*
  > Explainer No information provided Specification https://github.com/gpuweb/gpuweb/pull/5578 Summary <strong>Adds the optional GPU feature &quot;subgroup-size-control&quot; that allows explicitly setting the subgroup size in a compute shader<...

## 📚 Platform Documentation & Specifications

- [GPU Web 2026‐02‐24 25 WGSL](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2026%E2%80%9002%E2%80%9024-25-WGSL) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 62 result(s) found across 12 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5077657663438848" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/gpuweb/gpuweb/pull/5578" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"WebGPU: Subgroup Size Control" API` — *Core feature API query* (3 returned)
  - `"WebGPU: Subgroup Size Control" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"subgroup-size-control" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebGPU: Subgroup Size Control" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebGPU: Subgroup Size Control" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `WebGPU "subgroup-size-control" requiredFeatures OR computePipeline` — *Finds API usage and WebGPU code samples requesting the subgroup-size-control feature and configuring compute pipelines.* (7 returned)
  - `WebGPU "subgroup-size-control" OR "subgroups" compute shader AI optimization tutorial OR guide` — *Discovers developer tutorials, guides, and articles explaining how to leverage subgroup size control in WebGPU compute pipelines for AI/ML performance.* (1 returned)
  - `site:chromestatus.com OR site:developer.chrome.com "subgroup-size-control" OR "Subgroup Size Control"` — *Tracks browser release notes, Chromium intent to ship announcements, and platform adoption milestones for subgroup size control.* (8 returned)
  - `site:github.com/gpuweb/gpuweb "subgroup-size-control" OR "subgroup_size"` — *Uncovers technical debates, WGSL spec discussion, and developer feedback within the W3C GPU for the Web working group repository.* (4 returned)
  - `WebGPU "subgroup-size-control" OR "subgroup" (WebLLM OR "transformers.js" OR "onnxruntime-web")` — *Identifies real-world adoption, performance benchmarks, and implementation in client-side AI/ML inference frameworks using WebGPU subgroups.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **13 verified relevant**
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
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5077657663438848)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5077657663438848)
- [Specification](https://github.com/gpuweb/gpuweb/pull/5578)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/463721943)
