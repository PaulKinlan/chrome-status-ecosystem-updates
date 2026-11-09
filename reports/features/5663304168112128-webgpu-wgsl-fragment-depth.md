# WebGPU: WGSL Fragment Depth

> **Report Week:** 2026-W46 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Adds the ability to provide a \`less\` or \`greater\` modifier to the \`@builtin(frag\_depth)\` in WGSL.  The current \`@builtin(frag\_depth)\` can potentially introduce a performance penalty due to disabling the early-Z optimizations on a draw call. The new modifiers allow the explicit setting of the buffer mode and allow the early-Z optimizations to be applied.

### Motivation

In the current WGSL specification, the mere act of writing to @builtin(frag\_depth) often incurs a significant performance penalty because driver heuristics cannot guarantee that the fragment shader output will adhere to the depth written by the rasterizer's interpolated depth. Consequently, writing to frag\_depth typically forces the GPU to disable crucial early-Z optimizations for the entire draw call.  The introduction of a new depth\_mode built-in parameter for the @builtin(frag\_depth) with modes less, and greater directly addressing this performance limitation by letting the developer express their intent to the hardware.

## Ecosystem Status

- **Momentum:** Emerging (+50 points since 2026-10-12; footprint 210 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The WGSL \`fragment\_depth\` extension introduces \`less\` and \`greater\` qualifiers to \`@builtin(frag\_depth)\`, allowing GPUs to preserve early-Z depth rejection optimizations when fragment shaders write custom depth. Formally integrated into the W3C WebGPU Shading Language specification, the extension resolves a major performance penalty for depth-altering rendering effects like decals and parallax occlusion mapping. Chromium has shipped the capability in its 155–156 release cycle, though broad cross-engine availability remains pending.

### Recommendations
- Actionable Advice: Treat this extension as a progressive performance enhancement by checking \`navigator.gpu.wgslLanguageFeatures.has('fragment\_depth')\` before emitting shaders with \`requires fragment\_depth;\`. Maintain a fallback path using unadorned \`@builtin(frag\_depth)\` to preserve compatibility across engines that have not yet implemented the feature.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)
- **Chrome usage:** 0.092% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

## 📰 Ecosystem Blogs & Articles

- [What's New in WebGPU (Chrome 155-156)  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/new-in-webgpu-155-156) *(developer.chrome.com)*
  > What&#39;s New in WebGPU (Chrome 155-156) \| Blog \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی...
- [fragment\_depth - WGSL language feature availability (1%) - webgpu.report](https://webgpu.report/features/wgsl:fragment_depth) *(webgpu.report)*
  > When a fragment shader outputs a custom depth using \`@builtin(frag\_depth)\`, hardware heuristics generally disable early-Z for the entire draw call because the final depth value is indeterminate prior to shader execution \*\*\`@builtin(frag\_depth, less)\`...
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > \*\*Announcement\*\*: Introduced and highlighted by François Beaufort in the Chrome developer series (appearing across Chrome 154 Beta and Chrome 155–156 feature roundups)
- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails \[email&#160;protected\] Explainer https:/...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17296.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'Ashley Gullen' via blink-dev Wed, 26 Aug 2026 01:02:48 -0700 FWIW as developers of ...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /Daniel On 2026-08-26 12:21, Yo...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17276.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Alex Russell Mon, 24 Aug 2026 11:54:22 -0700 Are there really no signals from developers? Is...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 On Wed, Aug 26, 2026, 10:52 Dan...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17299.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Yoav Weiss (@Shopify) Wed, 26 Aug 2026 03:31:37 -0700 LGTM1 On Wednesday, August 26,...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 There are signals, but indirect...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com · 2026-10-20T00:00:00)*
  > &lt;strong&gt;Adds the ability to provide a less or greater modifier to the @builtin(frag\_depth) in WGSL&lt;/strong&gt;.
- [Microsoft Edge 156 web platform release notes (Oct. 22, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com · 2026-10-22T00:00:00)*
  > Previously, @builtin(frag\_depth) could potentially negatively impact performance, due to disabling the early-Z optimizations on a draw call.
- [Google Chrome 156 stable version released, enabling random layout using only CSS and changing the IndexedDB storage method to SQLite-based. - GIGAZINE](https://gigazine.net/gsc_news/en/20261021-google-chrome-156) *(gigazine.net · 2026-10-21T00:00:00)*
  > This &lt;strong&gt;allows you to specify the &#x27;less&#x27; or &#x27;greater&#x27; modifier for &#x27;@builtin(frag\_depth)&#x27; used in fragment shaders&lt;/strong&gt;. Previously, rewriting depth values from the fragment shader could disable the &#x27;Early-...
- [What's New in WebGPU (Chrome 155-156) \| daily.dev](https://daily.dev/posts/what-s-new-in-webgpu-chrome-155-156--bbih4rnaw) *(daily.dev · 2026-10-12T15:46:22)*
  > &lt;strong&gt;It lets a fragment shader declare a less or greater depth mode on @builtin(frag\_depth), explicitly stating how the written depth compares to the rasterizer-interpolated depth&lt;/strong&gt;. This lets the GPU driver safely keep early-Z optimization...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails \[email&#160;protected\] Explain...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17296.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'Ashley Gullen' via blink-dev Wed, 26 Aug 2026 01:02:48 -0700 FWIW as deve...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /Daniel On 2026-08-26...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17276.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Alex Russell Mon, 24 Aug 2026 11:54:22 -0700 Are there really no signals from deve...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 On Wed, Aug 26, 2026,...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17299.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Yoav Weiss (@Shopify) Wed, 26 Aug 2026 03:31:37 -0700 LGTM1 On Wednesday, ...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 There are signals, bu...

## 📚 Platform Documentation & Specifications

- [WGSL Proposal for fragment depth (less, greater, any) · Issue #5342 · gpuweb/gpuweb · GitHub](https://github.com/gpuweb/gpuweb/issues/5342) *(github.com)*
- [WebGPU Shading Language](https://www.w3.org/TR/WGSL) *(w3.org)*
- [\[WGSL fragment depth\] (less, greater, any) syntax change · Issue #5350 · gpuweb/gpuweb · GitHub](https://github.com/gpuweb/gpuweb/issues/5350) *(github.com)*
- [github.com](https://github.com/gpuweb/gpuweb/issues/5342?timeline_page=1) *(github.com)*
- [feat(graphics): adopt WGSL fragment\_depth once every WebGPU browser ships it · Issue #9703 · playcanvas/engine · GitHub](https://github.com/playcanvas/engine/issues/9703) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/156.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/156.md) *(github.com)*
- [\[Time sensitive\] Rename WGSL feature "fragment\_depth" · Issue #11050 · gpuweb/gpuweb · GitHub](https://github.com/gpuweb/gpuweb/issues/11050) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 50 result(s) found across 12 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/5663304168112128" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (7 returned)
  - `"github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/gpuweb/gpuweb/pull/6299" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"WebGPU: WGSL Fragment Depth" API` — *Core feature API query* (6 returned)
  - `"WebGPU: WGSL Fragment Depth" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"@builtin(frag_depth)" OR "early-z" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebGPU: WGSL Fragment Depth" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebGPU: WGSL Fragment Depth" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `WGSL "@builtin(frag_depth)" ("less" OR "greater" OR depth_mode)` — *Finds technical specifications, syntax definitions, and WGSL shader code snippets demonstrating fragment depth modifiers.* (8 returned)
  - `"WebGPU" WGSL "frag_depth" ("early-Z" OR "early depth") (performance OR guide OR tutorial)` — *Discovers tutorials and developer articles explaining early-Z optimization and performance implications of writing to frag\_depth in WebGPU.* (8 returned)
  - `"WebGPU" "frag_depth" ("early-Z" OR depth_mode) (site:github.com/gpuweb/gpuweb/issues OR site:github.com/gpuweb/gpuweb/pull)` — *Surfaces standards body debates, developer feedback, and specification discussions around fragment depth behavior.* (8 returned)
  - `("WebGPU" OR WGSL) ("frag_depth" OR "fragment depth") ("Three.js" OR "Babylon.js" OR Dawn OR wgpu)` — *Tracks adoption, implementation status, and integration across WebGPU rendering engines and native runtimes like Dawn and wgpu.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webgpu", shared with 44 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webgpu": no stable pass rate for Chrome yet*
- **Sources cited by the AI synthesis:** 5 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5663304168112128)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5663304168112128)
- [Specification](https://github.com/gpuweb/gpuweb/pull/6299)
- [Chromium Tracking Bug](https://crbug.com/457993779)
