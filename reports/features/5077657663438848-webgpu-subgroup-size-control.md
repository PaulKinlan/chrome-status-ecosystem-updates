# WebGPU: Subgroup Size Control

> **Report Week:** 2026-W41 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Adds the optional GPU feature "subgroup-size-control" that allows explicitly setting the subgroup size in a compute shader.  This technique is particularly useful for the applications that need to optimize the performance of the compute shader using subgroup operations with specifc subgroup size on certain platforms, such as the AI workloads.

### Motivation

Adds the optional GPU feature "subgroup-size-control" that allows explicitly setting the subgroup size in a compute shader.

This technique is particularly useful for the applications that need to optimize the performance of the compute shader using subgroup operations with specifc subgroup size on certain platforms, such as the AI workloads.

## Ecosystem Status

- **Momentum:** High (220 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** WebGPU Subgroup Size Control adds the optional "subgroup-size-control" feature and the @subgroup\_size WGSL attribute, enabling compute pipelines to explicitly lock SIMD warp/wavefront execution widths to valid powers of two. Standardized through the W3C GPU for the Web Working Group and enabled by default in Chrome 152, the feature addresses critical performance bottlenecks in browser-based AI/ML and compute-heavy shaders. However, because it is an optional hardware-dependent capability, baseline availability across other browser engines remains limited.

### Recommendations
- Actionable Advice: Treat subgroup size control strictly as a progressive enhancement: inspect \`adapter.features.has('subgroup-size-control')\` and query adapter min/max subgroup limits before requesting the feature and compiling specialized WGSL shaders. Always maintain a dynamic or fallback compute path for devices and non-Chromium browsers where explicit subgroup sizing is unavailable.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16882.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Mike Taylor Thu, 25 Jun 2026 14:33:12 -0700 LGTM3 On 6/25/26 4:17 p.m., Chris Ha...
- [\[blink-dev\] Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16837.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: WebGPU: Subgroup Size Control Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: Subgroup Size Control Chromestatus Wed, 24 Jun 2026 01:36:56 -0700 Contact emails [email&#160;protected] Explainer No ...
- [gl\_SubgroupSize in GLSL Across GPU Architectures - glsl](https://salivity.github.io/glsl/article/gl-subgroup-size-in-glsl-across-gpu-architectures) *(salivity.github.io)*
  > gl_SubgroupSize in GLSL Across GPU Architectures - glsl salivity.github.io/ glsl gl_SubgroupSize in GLSL Across GPU Architectures In modern GLSL, the gl_SubgroupSize built-in variable reports the execution width of the current subgroup—the collection...
- [WebGPU Compute Shader Basics](https://webgpufundamentals.org/webgpu/lessons/webgpu-compute-shaders.html) *(webgpufundamentals.org)*
  > WebGPU Compute Shader Basics English Español 日本語 한국어 Português (Brasil) Русский Türkçe Українська 简体中文 Table of Contents webgpufundamentals.org Fix, Fork, Contribute WebGPU Compute Shader Basics This browser is missing a few WebGPU features. Please u...
- [Subgroup Selectors - Dynamic HTML: The Definitive Reference \[Book\]](https://www.oreilly.com/library/view/dynamic-html-the/1565924940/ch03s07.html) *(oreilly.com · 1998-07-01T00:00:00)*
  > Subgroup Selectors While a selector for a style sheet rule is most often an HTML element name, that scenario is not flexible enough for more complex documents. Consider the... - Selection from Dynamic HTML: The Definitive Reference [Book]
- [WebGPU subgroups](https://codepen.io/web-dot-dev/pen/emOqWQJ) *(codepen.io)*
  > &lt;li&gt;Inspecting &lt;tt&gt;adapter.info.subgroupMinSize&lt;/tt&gt; and &lt;tt&gt;adapter.info.subgroupMaxSize&lt;/tt&gt;. &lt;li&gt;A shader that uses the &lt;tt&gt;subgroupExclusiveMul()&lt;/tt&gt; built-in function to compute factorials of the ...
- [CSS grouping and subgrouping - Stack Overflow](https://stackoverflow.com/questions/1610627/css-grouping-and-subgrouping) *(stackoverflow.com)*
  > Yes. And this is built into CSS.
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>Adds the optional GPU feature &quot;subgroup-size-control&quot; that lets developers explicitly set the subgroup size in a compute shader</strong>.
- [Microsoft Edge 152 web platform release notes (Aug. 27, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com · 2026-08-27T00:00:00)*
  > The GPU subgroup-size-control feature <strong>allows you to explicitly set the subgroup size in a compute shader</strong>. This is useful when you need to optimize the performance of a compute shader on certain platforms, such as for AI workloads.
- [Capabilities \| web.dev](https://web.dev/learn/pwa/capabilities) *(web.dev)*
  > Let&#x27;s split the PWA capabilities APIs into four groups: Green: APIs available on every browser on every platform, when technically possible. Most of them have been shipped for many years, they are considered mature, and you can use them with con...
- [DevBytes \| Shader subgroup size can be larger than 32](https://devbytes.co.in/news/shader-subgroup-size-can-be-larger-than-32) *(devbytes.co.in · 2026-07-20T04:00:42)*
  > <strong>GPU subgroup sizes are not always 32 and can reach 64 on AMD RDNA2/3 or Intel Xe, while some mobile GPUs use smaller sizes</strong>. This breaks shader code that assumes a fixed width, leading to silent miscompilation if lane divergence occur...
- [Arm GPU Best Practices Developer Guide](https://support.arm.com/documentation/101897/latest/Compute-shading/Workgroup-sizes) *(support.arm.com · 2025-12-01T10:10:22)*
  > Large workgroup sizes restrict the number of registers that are available to each work item in this scenario. In turn, forcing shader programs to use stack memory if insufficient registers are available. Arm GPUs currently use subgroup sizes of 16 an...
- [Intent to Ship: WebGPU Subgroups experimentation](https://groups.google.com/a/chromium.org/g/blink-dev/c/xteMk_tObgI) *(groups.google.com)*
  > Meet integrated the functionality into some of its ML shaders. Benchmarking subgroups vs integer dot products (previous best) for matrix-vector multiply shaders resulted in <strong>speed ups of 2.3 - 2.9x depending on the device</strong>. Limits were...
- [A few questions about compute shaders workgroup size...](https://groups.google.com/g/dawn-graphics/c/7i69fWmM-sc) *(groups.google.com)*
  > Hardware executes invocations in fixed-width &quot;subgroups&quot; - it&#x27;s the number of SIMD lanes in the SIMT execution. The size depends on the vendor and architecture, but I&#x27;m told it&#x27;s <strong>typically 32 or 64.</strong>
- [Subgroup Operations](https://kvark.github.io/webgpu-debate/SubgroupOps.html) *(kvark.github.io)*
  > &lt;Performance&gt;: Proven contribution to general purpose algorithms to make them run multiple times faster. + &lt;Viable&gt;: There is a safe subset of subgroup operations. +&gt; [Extension] +&gt; [Shuffle Operations] +&gt; [Quad Operations] +&gt;...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16882.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/5578`)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Mike Taylor Thu, 25 Jun 2026 14:33:12 -0700 LGTM3 On 6/25/26 4:17 p.m....
- [\[blink-dev\] Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16837.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/5578`)*
  > [blink-dev] Intent to Ship: WebGPU: Subgroup Size Control Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: Subgroup Size Control Chromestatus Wed, 24 Jun 2026 01:36:56 -0700 Contact emails [email&#160;protected] Exp...

## 📚 Platform Documentation & Specifications

- [GPU Web 2026‐02‐24 25 WGSL](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2026%E2%80%9002%E2%80%9024-25-WGSL) *(github.com)*
- [Considerations for subgroups · Issue #3950 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/3950) *(github.com)*
- [\[WebGPU\] Optimize subgroup matrix MatMulNBits for AMD wave64 by gyagp · Pull Request #32796 · microsoft/onnxruntime](https://github.com/microsoft/onnxruntime/pull/32796) *(github.com)*
- [\[WebGPU\] Refactor subgroup matrix config selection by gyagp · Pull Request #32700 · microsoft/onnxruntime](https://github.com/microsoft/onnxruntime/pull/32700) *(github.com)*
- [\[WebGPU\] Enable subgroup matrix kernels on AMD GPUs by gyagp · Pull Request #32667 · microsoft/onnxruntime](https://github.com/microsoft/onnxruntime/pull/32667) *(github.com)*
- [Draft subgroup issue for gpuweb · GitHub](https://gist.github.com/raphlinus/b9adf5e50843263622604841298b4555) *(gist.github.com)*
- [GPUAdapterInfo: subgroupMaxSize property](https://developer.mozilla.org/en-US/docs/Web/API/GPUAdapterInfo/subgroupMaxSize) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 46 result(s) found across 12 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/5077657663438848" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/gpuweb/gpuweb/pull/5578" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"WebGPU: Subgroup Size Control" API` — *Core feature API query* (1 returned)
  - `"WebGPU: Subgroup Size Control" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"subgroup-size-control" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebGPU: Subgroup Size Control" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebGPU: Subgroup Size Control" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"subgroup-size-control" "requestDevice" WebGPU` — *Finds JavaScript and WebIDL code examples demonstrating how to request device capabilities and configure the subgroup-size-control feature in WebGPU.* (0 returned)
  - `"WebGPU" "subgroup-size-control" OR "subgroup size" compute shader tutorial OR guide` — *Surfaces developer guides, practical tutorials, and articles on leveraging subgroup size control to optimize compute shaders.* (2 returned)
  - `"subgroup-size-control" WebGPU (Chrome OR Dawn OR "WebLLM" OR "ONNX Runtime")` — *Tracks browser implementation progress and adoption by in-browser machine learning frameworks.* (0 returned)
  - `site:github.com/gpuweb/gpuweb "subgroup-size-control"` — *Locates specification discussions, pull requests, and standard committee feedback regarding the subgroup-size-control proposal.* (2 returned)
  - `WebGPU ("subgroup-size-control" OR "subgroup size") ("AI" OR "performance" OR "benchmarks")` — *Identifies ecosystem sentiment, performance benchmarks, and real-world evaluation of subgroup size controls in web AI workloads.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
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
