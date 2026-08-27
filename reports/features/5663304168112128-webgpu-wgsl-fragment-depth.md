# WebGPU: WGSL Fragment Depth

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Adds the ability to provide a `less` or `greater` modifier to the `@builtin(frag_depth)` in WGSL.

The current `@builtin(frag_depth)` can potentially introduce a performance penalty due to disabling the early-Z optimizations on a draw call. The new modifiers allow the explicit setting of the buffer mode and allow the early-Z optimizations to be applied.

### Motivation

In the current WGSL specification, the mere act of writing to @builtin(frag_depth) often incurs a significant performance penalty because driver heuristics cannot guarantee that the fragment shader output will adhere to the depth written by the rasterizer's interpolated depth. Consequently, writing to frag_depth typically forces the GPU to disable crucial early-Z optimizations for the entire draw call.

The introduction of a new depth_mode built-in parameter for the @builtin(frag_depth) with modes less, and greater directly addressing this performance limitation by letting the developer express their intent to the hardware.

## Ecosystem Status

- **Momentum:** High (140 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** WGSL Fragment Depth modifiers (`less`, `greater`) allow fragment shaders to declare conservative depth bounds on `@builtin(frag_depth)`, preventing the GPU from disabling critical early-Z depth test optimizations. The feature has been merged directly into the core W3C WGSL specification via PR #6299 and is enabled by default starting in Chrome 154. Cross-engine consensus was achieved within the W3C GPU for the Web Working Group, aligning WGSL with native shading equivalents like HLSL conservative depth and Metal depth arguments.

### Recommendations
- Actionable Advice: Teams should adopt WGSL fragment depth modifiers progressively by querying WGSL language feature support or compiling conditional shader variants—using `@builtin(frag_depth, less)` / `@builtin(frag_depth, greater)` where supported to regain early-Z performance and falling back to standard `@builtin(frag_depth)` on unsupporting runtimes.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGlEbt2DtlhMgEangWK82wppIXvfoYNuRoQJSaTCnw8P4BAYDZVm-0gbBWIbGs6LPXOfHDBSwfCNdUoT29MCydfLKEUmd-dLcRmHQh0fENnPTMDDuWDjVXa31cUIaTclb54) *(vertexaisearch.cloud.google.com)*
  > WGSL Proposal for fragment depth (less, greater, any) · Issue #5342 · gpuweb/gpuweb · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ...
- [derivative.ca](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFUZ5ts96KVReXw2vgKZvbOxr80XzcjBG78B4UJFnekLP5wwHI59L2Nc9N22IjF-itA37cUn7UcX-m1RKiO-FuWU-r7G9lNMZ0z5Pn-yWHynDTjTXa4nds4TZ19kUSUyhS6EYh1CA==) *(vertexaisearch.cloud.google.com)*
  > Early Depth-Test | Derivative Skip to main content Close Home TouchDesigner TouchDesigner Features Showcase Community Job Board About Derivative Learn Learn User Guide Curriculum Forum Tutorials Workshops & Events Resources Support Get It Now Privacy...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGp7AWqMTKpwhDF9ScSqEe5vjE5OmhroixwUsZ2v6JLWJKRLI6s2R5UAYxCDvRBq77BJAkvUgVdgH7L-SrtACBzySWK52DOvXekaXMo-ma3dWbEHOBH1TS1F8S2vlwaxLR5) *(vertexaisearch.cloud.google.com)*
  > [WGSL fragment depth] (less, greater, any) syntax change · Issue #5350 · gpuweb/gpuweb · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload ...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGz2djR9kxCiw3_nqG05D_LZWg2DRABwz7WG46xgN08X7wOOrs9dsDTjUuoCrvgo7qnrECXVSrEQfJY2RcIwrKeuiwJuRRz8xH_lRSbADfmiA==) *(vertexaisearch.cloud.google.com)*
  > A search for developer announcements, specifications, and platform tracking entries regarding **WebGPU: WGSL Fragment Depth** reveals the following updates and resources:  ---  ### 1. Summary of the Feature In standard graphics pipelines, writing cus
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGvevGb65iY_3KWGOAjo4yKQTx1H0krYasEoc3QD4EyZ7ZjTG5vkmhoT54GrOmt9gTcyVVlQCL1QT37vPMY2Akl7fQdlHB4DsxwD9Ne8E-nwkFxm2ncUq7zgrlfBABS5-Cv-LJpi5k=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHI9EUpp-qxiTFfOb5ixVKPx24d8N39cB_2DZD95VIHtRJ6AZcKRgrKgDq4Rf4f34G0OaEiCaB2CsnljOMUijdpMqdOgldQxf4MaQNlErQ5qsO51e-xiWrIpK3yNONb6LvYVQlMvkF9nqAd3Ng=) *(vertexaisearch.cloud.google.com)*
  > What&#39;s New in WebGPU (Chrome 149-150) | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQElOZ9x3qCAAQQpAz_3uGK6jLC2mfWbon_ikKlSurxxZAbkMK32XG4qC_ftUhIPs0EsrsKS_3CIePcuJ1aHSPzng1VPZuE53E5whFKHGYHBMiHYyN_zWMRsV44wZk8e5GDz) *(vertexaisearch.cloud.google.com)*
  > [WGSL fragment depth] (less, greater, any) Metal behavior · Issue #5351 · gpuweb/gpuweb · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload...
- [stackexchange.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGTwNZ_1_YivTCl9JSpT8igkBh-gE7bGBauQQwXQEUu6AxF8Y_FHj661eDeQzXa7u7D_uiv2HFpjO_mWoxFgqk3zcZimGwGKyoC0GQocy1JTaCFKvqD5U0Q-_DlLYmuhHxu08NPzJtA8dHwOvKJj3jklcnCGQMZGVQ2hw-CMHj4t6NCZWi4zZ8=) *(vertexaisearch.cloud.google.com)*
  > A search for developer announcements, specifications, and platform tracking entries regarding **WebGPU: WGSL Fragment Depth** reveals the following updates and resources:  ---  ### 1. Summary of the Feature In standard graphics pipelines, writing cus
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQElLk-yjVLILXJgTIRIIk5R0P1dpUulJCqgMp40fYHqxdtlCLkyp0qb3DUO-LBtbzEDL9Q8cN5wpGzV6WP78WOtJ48dhDUsbE8yX_l--CWHJxoCus6zQSp325gcg0LxEx6YWWm-gC6XnA==) *(vertexaisearch.cloud.google.com)*
  > A search for developer announcements, specifications, and platform tracking entries regarding **WebGPU: WGSL Fragment Depth** reveals the following updates and resources:  ---  ### 1. Summary of the Feature In standard graphics pipelines, writing cus
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEGXv009XK7bYChLUO-PsDQynqBpk1_fIc7kNhBe4NCqnTMqsIXBfM94zDchD9t6gvMIrfexrDwgM0VtfgvFxWphz6WzhPH0bk1DWTI9P8pidy_R7Q4bpOWrdc=) *(vertexaisearch.cloud.google.com)*
  > A search for developer announcements, specifications, and platform tracking entries regarding **WebGPU: WGSL Fragment Depth** reveals the following updates and resources:  ---  ### 1. Summary of the Feature In standard graphics pipelines, writing cus
- [[blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)*
  > Blink component Blink&gt;WebGPU Web Feature ID webgpu Motivation In the current WGSL specification, the mere act of writing to @builtin(frag_depth) often incurs a significant performance penalty because driver heuristics cannot guarantee that the fra...
- [[blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17276.html) *(mail-archive.com)*
  > &gt; &gt; *Blink component* &gt; Blink&gt;WebGPU .../features/webgpu&gt; &gt; &gt; *Motivation* &gt; In the current WGSL specification, the mere act of writing to &gt; @builtin(frag_depth) often incurs a significant performance penalty because &gt; d...
- [Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)*
  > *Blink component* Blink&gt;WebGPU &lt;https://issues.chromium.org/issues?q=customfield1222907:&quot;Blink&gt;WebGPU&quot;&gt; *Web Feature ID* webgpu &lt;https://webstatus.dev/features/webgpu&gt; *Motivation* In the current WGSL specification, the me...

## 📚 Platform Documentation & Specifications

- [GPU: wgslLanguageFeatures property](https://developer.mozilla.org/en-US/docs/Web/API/GPU/wgslLanguageFeatures) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 3 result(s) found (query: `""WebGPU: WGSL Fragment Depth" API"`) — **3 verified relevant**
- **Google Search Grounding (gemini-3.7-flash):** 10 result(s) found — **10 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found (query: `"WebGPU: WGSL Fragment Depth"`) — **13 verified relevant**
- **Hacker News Algolia:** 0 result(s) found (query: `"WebGPU: WGSL Fragment Depth"`) — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5663304168112128)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5663304168112128)
- [Specification](https://github.com/gpuweb/gpuweb/pull/6299)
- [Chromium Tracking Bug](https://crbug.com/457993779)
