# WebGPU: Subgroup Size Control

> **Report Week:** 2026-W39 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Adds the optional GPU feature "subgroup-size-control" that allows explicitly setting the subgroup size in a compute shader.  This technique is particularly useful for the applications that need to optimize the performance of the compute shader using subgroup operations with specifc subgroup size on certain platforms, such as the AI workloads.

### Motivation

Adds the optional GPU feature "subgroup-size-control" that allows explicitly setting the subgroup size in a compute shader.

This technique is particularly useful for the applications that need to optimize the performance of the compute shader using subgroup operations with specifc subgroup size on certain platforms, such as the AI workloads.

## Ecosystem Status

- **Momentum:** High (250 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive / High Interest
- **Executive Take:** WebGPU: Subgroup Size Control is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Multi-Engine Consensus standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGhDRiqIESFY7U9lEEw6HJL3p1uX0-1aGw75hTUlzQ4WwA9SevSBDcm37zXTte1f9N5W7vfIhkdL02kFyugCDGnOT1KvgMoxjTp-pbzAERpRD74mUfw_98CGtaBD_OLJmDoTcIU0iQg1LLqNoMf) *(vertexaisearch.cloud.google.com)*
  > WebGPU の新機能（Chrome 151 ～ 152） | Blog | Chrome for Developers メイン コンテンツにスキップ / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFbtVMMKDUuSjFMUOJXqTum0RdvZojgjxU1o9ZZiyxRR5R9fr6Mtnk4vAtxwD1YwhQVpXNQLIO2sJ1vcJzIDmhxzkBEIoQJxuG7ssKIeZwidV3JcDIkxiGR7nkFCEbO_YLdXNkVeljWz06NlOuhKfX53DMVjliz45luLh9Gxb3x7Qn9Sg==) *(vertexaisearch.cloud.google.com)*
  > gpuweb/proposals/subgroup-size-control.md at main · gpuweb/gpuweb · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your sessi...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHW06dFQc65BoT2i1DgIDHmF1GMBiLS2tLF5CvjSfkc5qvHWZxU4mIKCrOH8xIoK04Y94OzXo7_Q8g-1IsTSBhKo6IGC-hRhFZq2upSddtuo0UE_UDEgBCmx5jkKNpIeSmPIw0KkygrsAY=) *(vertexaisearch.cloud.google.com)*
  > What&#39;s New in WebGPU (Chrome 134) | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिं...
- [web3dsurvey.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHx0VWN6NFpSRslbASeOI2czmOYHmJ-0sMNUoFxD_EE3DnV83uCAl9tdnJwJn94a4syf4Zc92Tg9ge6ryu7Q4b5JhSXfZR190znmBxLqdl_CTuluxaI0C0LsetnjNwR_GdubGi3brXGjE43Ht9RI3fwAa_B) *(vertexaisearch.cloud.google.com)*
  > subgroup-size-control WebGPU support by browser and device | Web3D Survey Skip to content subgroup-size-control Lets pipelines request a specific subgroup size instead of taking whatever the implementation picks. This feature requires subgroups. Chec...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGA1IL3AFxpsqyiZo-zPhMNF1XKthAQv3l8hfEWGkH2NRx9nuwJP0svFsyzhPA5fUk_fSR8mEPo3Cga4bsAeXjn9FIsMqEN9OWyJGANFB5_V70PBA==) *(vertexaisearch.cloud.google.com)*
  > Recent developer articles, announcements, and specification documents from **developer.chrome.com**, the **W3C GPU for the Web Community Group**, and the broader web graphics ecosystem highlight the arrival of **WebGPU: Subgroup Size Control**.  ---
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQET9WFeAfUBFju7t5QOBr2ZjOLaRMRJk-k1v6hXvMAeoXIEK4sq0VzSUeXkOPrAUfciyeVcIOa3AtCmF6oKnXtX0YonCgk4pFNfBc9PgieltEB3OvqWLaagOVNTP-ob6xVyX_kHgQZ0) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG2Bb4TPROQEFrcLS7ph6P2r9C023YvWqt_zsVZRlDfwd2Hb8ktWJR4JMhLbZfkK53FHEQzS2hrMlxRS5sDBV8n6C-IP6MDBCmilm9vaGFXkW8-2eEA-CT_3dxzcdPAwqd6F2TObjeDYKOInw==) *(vertexaisearch.cloud.google.com)*
  > WebGPU | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGk2LSnyMKP3ALKQeCh9rdPAvg2QN5MP1Rnu435vLYg-PbWQKV5sqq_VzPA1r-I2oZFOBbXIza9ElHmPIcPhIsx_chNROKn2KI8-ouEyVQTxETQmnG-895FI3Z_Nh10D_s8ue48mR9gZI2OXwAQ0zTenZ2kzu1LK7nCHRJ7KRu2vKQIUPE48CFljlqeQIzEDdMduFCl) *(vertexaisearch.cloud.google.com)*
  > WebGPU Dev Extension - Chrome Web Store Skip to main content Chrome Web Store My extensions & themes Appearance Developer Dashboard Give feedback Sign in Discover Extensions Themes WebGPU Dev Extension 4.5 ( 2 ratings ) Ratings are updated daily and ...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16879.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Wednesday, June ... https://github.com/gpuweb/gpuweb/pull/5578 &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>Adds the optional GPU feature &quot;subgroup-size-control&quot; that allows &gt;&gt; explicitly setting the subgroup s...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16861.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; *No information provided* &gt; &gt; *Specification* &gt; https://github.com/gpuweb/gpuweb/pull/5578 &gt; &gt; *Summary* &gt; <strong>Adds the optional GPU feature &quot;subgroup-...
- [\[blink-dev\] Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16837.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://github.com/gpuweb/gpuweb/pull/5578 Summary <strong>Adds the optional GPU feature &quot;subgroup-size-control&quot; that allows explicitly setting the subgroup size in a compute shader</strong>.
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16882.html) *(mail-archive.com)*
  > LGTM1 On Wednesday, June 24, 2026 ... &quot;subgroup-size-control&quot; that <strong>allows explicitly setting the subgroup size in a compute shader</strong>. This technique is particularly useful for the applications that need to optimize the perfor...
- [Mastering Thread Calculations in WebGPU Compute Shaders: Workgroup Size, Count, and Thread Identification \| by Josh Sideris \| Medium](https://medium.com/@josh.sideris/mastering-thread-calculations-in-webgpu-workgroup-size-count-and-thread-identification-6b44a87a4764) *(medium.com · 2025-01-17T03:22:53)*
  > Guide for deciding (and understanding) workgroup size &amp; count, and determining global thread index from your compute shader.
- [WebGPU Compute Shader Basics](https://webgpufundamentals.org/webgpu/lessons/webgpu-compute-shaders.html) *(webgpufundamentals.org)*
  > The general advice for WebGPU is to <strong>choose a workgroup size of 64 unless you have some specific reason to choose another size</strong>. Apparently most GPUs can efficiently run 64 things in lockstep.
- [Subgroup Selectors - Dynamic HTML: The Definitive Reference \[Book\]](https://www.oreilly.com/library/view/dynamic-html-the/1565924940/ch03s07.html) *(oreilly.com · 1998-07-01T00:00:00)*
  > Subgroup Selectors While a selector for a style sheet rule is most often an HTML element name, that scenario is not flexible enough for more complex documents. Consider the... - Selection from Dynamic HTML: The Definitive Reference [Book]
- [CSS grouping and subgrouping - Stack Overflow](https://stackoverflow.com/questions/1610627/css-grouping-and-subgrouping) *(stackoverflow.com)*
  > Yes. And this is built into CSS.
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>Adds the optional GPU feature &quot;subgroup-size-control&quot; that lets developers explicitly set the subgroup size in a compute shader</strong>.
- [Microsoft Edge 152 web platform release notes (Aug. 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > The GPU subgroup-size-control feature <strong>allows you to explicitly set the subgroup size in a compute shader</strong>. This is useful when you need to optimize the performance of a compute shader on certain platforms, such as for AI workloads.
- [WebGPU Correspondence Reference](https://gpuweb.github.io/gpuweb/correspondence) *(gpuweb.github.io · 2026-07-27T00:00:00)*
  > The subgroup-size-control feature <strong>allows the use of the WGSL subgroup_size attribute in compute shaders to request a specific subgroup size for pipeline creation</strong>.
- [WebGPU Subgroups](https://webgpufundamentals.org/webgpu/lessons/webgpu-subgroups.html) *(webgpufundamentals.org)*
  > Camera Controls · Picking · Compute Shaders · Compute Shader Basics · Image Histogram · Image Histogram Part 2 · Misc · Resizing the Canvas · Multiple Canvases · Points · WebGPU from WebGL · Speed and Optimization · Debugging and Errors · Resources /...
- [A few questions about compute shaders workgroup size...](https://groups.google.com/g/dawn-graphics/c/7i69fWmM-sc) *(groups.google.com)*
  > the webgpu docs seem to suggest <strong>workgroup x and y can be max 256 and 64 for z</strong> ( https://gpuweb.github.io/gpuweb/#limits ) but the compute boids demo does Dispatch(1000), does this mean that 4 lots of 256 workgroups will be created, s...
- [4.0 Prefix Sum - WebGPU Unleashed: A Practical Tutorial](https://shi-yan.github.io/webgpuunleashed/Compute/prefix_sum.html) *(shi-yan.github.io)*
  > While uniform buffer bindings are constrained to sizes up to 64KB (maxUniformBufferBindingSize), a storage buffer binding in WebGPU boasts a capacity of at least 128MB (maxStorageBufferBindingSize). Furthermore, storage buffers can be writable, provi...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16879.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/5578`)*
  > &gt; LGTM1 &gt; &gt; On Wednesday, June ... https://github.com/gpuweb/gpuweb/pull/5578 &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>Adds the optional GPU feature &quot;subgroup-size-control&quot; that allows &gt;&gt; explicitly setting the ...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16861.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/5578`)*
  > &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; *No information provided* &gt; &gt; *Specification* &gt; https://github.com/gpuweb/gpuweb/pull/5578 &gt; &gt; *Summary* &gt; <strong>Adds the optional GPU feature &quot...
- [\[blink-dev\] Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16837.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/5578`)*
  > Explainer No information provided Specification https://github.com/gpuweb/gpuweb/pull/5578 Summary <strong>Adds the optional GPU feature &quot;subgroup-size-control&quot; that allows explicitly setting the subgroup size in a compute shader<...

## 📚 Platform Documentation & Specifications

- [GPU Web 2026‐02‐24 25 WGSL](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2026%E2%80%9002%E2%80%9024-25-WGSL) *(github.com)*
- [GPUAdapterInfo: subgroupMaxSize property](https://developer.mozilla.org/en-US/docs/Web/API/GPUAdapterInfo/subgroupMaxSize) *(developer.mozilla.org)*
- [GPUAdapterInfo: subgroupMinSize property](https://developer.mozilla.org/en-US/docs/Web/API/GPUAdapterInfo/subgroupMinSize) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 43 result(s) found across 11 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/5077657663438848" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/gpuweb/gpuweb/pull/5578" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"WebGPU: Subgroup Size Control" API` — *Core feature API query* (3 returned)
  - `"WebGPU: Subgroup Size Control" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"subgroup-size-control" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebGPU: Subgroup Size Control" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebGPU: Subgroup Size Control" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"subgroup-size-control" WebGPU (requestDevice OR WGSL)` — *Finds WebGPU JavaScript and WGSL compute shader code snippets demonstrating feature requesting and explicit subgroup size syntax.* (2 returned)
  - `WebGPU "subgroup-size-control" (tutorial OR guide OR "compute shader")` — *Discovers developer tutorials and articles discussing how to use and optimize compute shaders with explicit subgroup size control.* (8 returned)
  - `"subgroup-size-control" WebGPU (ONNX OR WebLLM OR Transformers.js OR AI)` — *Tracks adoption, performance gains, and benchmarks within browser-based machine learning runtimes and libraries.* (1 returned)
  - `site:github.com/gpuweb/gpuweb "subgroup-size-control"` — *Explores specification debates, developer feedback, and implementation status directly in the W3C GPU for the Web working group repository.* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **8 verified relevant**
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
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5077657663438848)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5077657663438848)
- [Specification](https://github.com/gpuweb/gpuweb/pull/5578)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/463721943)
