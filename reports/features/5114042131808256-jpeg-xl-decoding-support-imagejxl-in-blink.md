# JPEG XL decoding support (image/jxl) in blink

> **Report Week:** 2026-W39 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Adds support for decoding JPEG XL (image/jxl) images in Blink using jxl-rs, a memory-safe pure Rust decoder (https://github.com/libjxl/jxl-rs). JPEG XL is a modern image format standardized as ISO/IEC 18181 that offers progressive decoding for improved perceived loading performance, support for wide color gamut, HDR, and high bit depth, and support for animation.

### Motivation

(see Summary)

## Ecosystem Status

- **Momentum:** High (370 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** After previously deprecating experimental JPEG XL support, Chromium has reversed course to enable native JPEG XL (image/jxl) decoding by default in Chrome 155, powered by Google Research's memory-safe Rust decoder, jxl-rs. With Mozilla simultaneously shipping jxl-rs support in Firefox 157 and Apple already supporting the format in WebKit/Safari, cross-engine interoperability has finally reached a critical breakthrough. Developer perception is overwhelmingly enthusiastic, positioning JPEG XL as a powerful companion and alternative to AVIF with superior lossless compression and progressive rendering capabilities.

### Recommendations
- Actionable Advice: Teams should adopt JPEG XL today using progressive enhancement via HTML \`&lt;picture&gt;\` elements (\`&lt;source type="image/jxl"&gt;\`) alongside AVIF, WebP, and standard JPEG fallbacks. Additionally, image CDNs and backend delivery pipelines should configure content negotiation via the HTTP \`Accept: image/jxl\` header to serve JXL assets automatically as Chrome 155 and Firefox 157 roll out to stable users.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Google Chrome 145 Released With JPEG-XL Image Support - Phoronix" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Google Chrome 145 Released With JPEG-XL Image Support - Phoronix](https://www.phoronix.com/news/Chrome-145-Released) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)*
  > Intent to Ship: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: JPEG XL decoding support...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/WjCKcBw219k/m/NmOyvMCCBAAJ) *(groups.google.com)*
  > Intent to Prototype: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: JPEG XL decodi...
- [Ready for Trial: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/NttEYOmuB5U) *(groups.google.com)*
  > Ready for Trial: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Ready for Trial: JPEG XL decoding suppo...
- [\[blink-dev\] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17266.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink 'Luca Versari' via blink-dev Mon, 24 Aug 2026 09:15:41 -...
- [\[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17256.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: JPEG XL decoding support (image/jxl) in blink Skip to site navigation (Press enter) [blink-dev] Intent to Ship: JPEG XL decoding support (image/jxl) in blink Chromestatus Mon, 24 Aug 2026 04:08:38 -0700 Contact emails [ema...
- [JPEG XL - Wikipedia](https://en.wikipedia.org/wiki/JPEG_XL) *(en.wikipedia.org · 2026-09-15T19:58:22)*
  > 1 2 3 &quot;Issue 1178058: <strong>JPEG</strong> <strong>XL</strong> <strong>decoding</strong> <strong>support</strong> (<strong>image</strong>/<strong>jxl</strong>) <strong>in</strong> <strong>blink</strong> (tracking bug)&quot;. bugs.chromium.org. ...
- [Re: \[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17258.html) *(mail-archive.com)*
  > On Mon, Aug 24, 2026 at 2:15 PM ... https://www.iso.org/standard/85066.html &gt;&gt; &gt;&gt; *Summary* &gt;&gt; Adds support for decoding JPEG XL (image/jxl) images in Blink <strong>using &gt;&gt; jxl-rs</strong>, a memory-safe pure Rust decoder (ht...
- [JPEG XL Image Encoding](https://www.loc.gov/preservation/digital/formats/fdd/fdd000536.shtml) *(loc.gov)*
  > Issue 1178058: JPEG XL decoding support (image/jxl) in blink (tracking bug) (https://bugs.chromium.org/p/chromium/issues/detail?id=1178058#c84).
- [Enable JPEG-XL (.jxl) Image Support in Ubuntu 24.04 & 22.04 \| UbuntuHandbook](https://ubuntuhandbook.org/index.php/2024/06/enable-jxl-support-ubuntu) *(ubuntuhandbook.org)*
  > This tutorial shows how to enable .jxl file support for system image viewer, GIMP, and some other apps in Ubuntu 24.04, Ubuntu 22.04, Ubuntu 20.04, and even Ubuntu 18.04. JPEG-XL is a new image format by JPEG committee. It supports both lossy and los...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/WjCKcBw219k/m/xX-NnWtTBQAJ) *(groups.google.com)*
  > If JPEG XL was implemented in Chromium, it would quickly boost adoption by CDNs and replace JPEG in a short time thanks to lossless JPEG transcoding capability. So what was the real rationale for dropping JPEG XL support? As for the WebAssembly imple...
- [\[blink-dev\] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17338.html) *(mail-archive.com)*
  > &gt; I personally have a great use of JXL lossless images as I have huge &gt; archives of lossless images on my personal home server, but considering I &gt; like to view most of those images in browsers on my devices, I have been &gt; blocked from co...
- [Re: \[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17261.html) *(mail-archive.com)*
  > The cmyk-basic-conversion-reftest.html failure is being fixed in https://chromium-review.git.corp.google.com/c/chromium/src/+/8275513 *Flag name on about://flags* enable-jxl-image-format *Finch feature name* JXLImageFormat *Rollout plan* Will ship en...
- [Re: \[blink-dev\] Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://www.mail-archive.com/blink-dev@chromium.org/msg14601.html) *(mail-archive.com)*
  > *Search tags &gt;&gt; &gt;&gt; &gt;&gt; *jxl &lt;https://www.chromestatus.com/features#tags:jxl&gt;*TAG review &gt;&gt; &gt;&gt; &gt;&gt; *Not applicable for image decoders*TAG review status &gt;&gt; &gt;&gt; &gt;&gt; *Not applicable*Risks &gt;&gt; &...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://archive.ph/up04r) *(archive.ph · 2025-11-22T18:01:49)*
  > Even you colleagues at Google have bet on JPEG XL by developing Attention Center Model with an JPEG XL encoder[3]. Please reconsider your decision. ... Either email addresses are anonymous for this group or you need the view member email addresses pe...
- [JPEG XL (JXL) Compression Guide \[2026\]](https://fileslim.com/guides/jpeg-xl-compression) *(fileslim.com · 2026-08-04T00:00:00)*
  > Web Implementation Tip: <strong>Use the HTML &lt;picture&gt; element to serve JPEG XL with fallbacks</strong>: &lt;picture&gt; &lt;source srcset=&quot;image.jxl&quot; type=&quot;image/jxl&quot; /&gt; &lt;source srcset=&quot;image.avif&quot; type=&quo...
- [JPEG XL Arrives in PDF: How the New Format Will Revolutionize Web Performance and Image Optimization in 2025](https://jeffbruchado.com.br/en/blog/jpeg-xl-pdf-performance-web-optimization-2025) *(jeffbruchado.com.br · 2025-11-16T15:00:00)*
  > &lt;picture&gt; &lt;!-- JPEG XL for supporting browsers --&gt; &lt;source type=&quot;image/jxl&quot; srcset=&quot; hero-400w.jxl 400w, hero-800w.jxl 800w, hero-1200w.jxl 1200w, hero-1600w.jxl 1600w &quot; sizes=&quot;(max-width: 640px) 100vw, (max-wi...
- [Chromium plans to ship JPEG XL image decoding in Blink · freenode](https://freenode.net/article/chromium-plans-to-ship-jpeg-xl-image-decoding-in-blink) *(freenode.net · 2026-08-24T15:11:08)*
  > <strong>The engine will decode image/jxl via the memory-safe jxl-rs Rust library, matching support already present in Gecko and WebKit</strong>.
- [Integrating JPEG XL in Chromium with jxl-rs - Helmut Januschka](https://www.januschka.com/chromium-jxl-resurrection.html) *(januschka.com · 2024-08-01T00:00:00)*
  > In <strong>November 2025</strong>, Chrome&#x27;s Architecture Tech Leads announced: &quot;We would welcome contributions to integrate a performant and memory-safe JPEG XL decoder in Chromium.&quot; ... Initial approach used libjxl in C++. Feature com...
- [JPEG XL Comes Back to Chrome and Firefox — Rebuilt From Scratch in Rust](https://pbxscience.com/jpeg-xl-comes-back-to-chrome-and-firefox-rebuilt-from-scratch-in-rust) *(pbxscience.com · 2026-08-28T03:57:17)*
  > What changed on August 24: Mozilla ... at the end of September. Separately, <strong>the Chromium team filed its own intent to ship JPEG XL decoding in Blink, also built on the jxl-rs Rust decoder</strong>....
- [r/jpegxl on Reddit: JPEG-XL image support is back in the very latest Google Chrome/Chromium codebase](https://www.reddit.com/r/jpegxl/comments/1qcdch6/jpegxl_image_support_is_back_in_the_very_latest) *(reddit.com · 2026-01-14T04:07:50)*
  > <strong>Back in December they merged jxl-rs as a pure Rust-based JPEG-XL image decoder from the official libjxl organization</strong>. At the end of December they did more JPEG-XL plumbing with the enums and build flags for the support.
- [Ready for Trial: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/NttEYOmuB5U/m/Hqojb5WdAwAJ) *(groups.google.com)*
  > JPEG XL is <strong>a new royalty-free image codec targeting the image quality as found on the web</strong>, providing about ~60% size savings when compared to original JPEG at the same perceptual quality, while supporting modern features like HDR, an...
- [Implement image/jxl decoding behind a flag. \[chromium/src : master\]](https://groups.google.com/a/chromium.org/g/blink-reviews/c/32k6JQcLF7U/m/yY-Fz4LoBAAJ) *(groups.google.com)*
  > Implement image/jxl decoding behind a flag. <strong>Adds support for decoding JPEG XL image format</strong>. We implement JPEG XL image decoding with the following features: - decoding to RGB, - alpha, - color profiles.
- [Intent to Prototype: jxl Content-Encoding](https://groups.google.com/a/chromium.org/g/blink-dev/c/4hFGYxBRIBU/m/dUgy9SUVAgAJ) *(groups.google.com)*
  > Contact emails eus...@chromium.org ...ment/d/1jiuaWa_xgFEnc7ILIajU8CBceNNcCa5dbEK-QdSecVA/edit#heading=h.xgjl2srtytjt TAG review Summary <strong>JPEG XL is a next generation image format</strong>....
- [Chrome Jpegxl Issue Reopened \| Hacker News](https://news.ycombinator.com/item?id=46033330) *(news.ycombinator.com · 2025-12-04T19:21:14)*
  > https://groups.google.com/a/chromium.org/g/blink-dev/c/WjCKc · just a different team in a different country :D
- [Firefox intent to ship: JPEG XL \| Hacker News](https://news.ycombinator.com/item?id=49421758) *(news.ycombinator.com · 2026-08-26T08:34:54)*
  > https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDoj · https://hacks.mozilla.org/2026/08/intent-to-ship-jpeg-xl/

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1086) *(github.com · 2026-07-29T21:39:58)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ...
- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > Intent to Ship: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: JPEG XL decodi...
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window...
- [JPEG-XL is be enabled in Firefox 157 and Chrome 155 by tunetheweb · Pull Request #7565 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/pull/7565) *(github.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > JPEG-XL is be enabled in Firefox 158 and Chrome 155 by tunetheweb · Pull Request #7565 · Fyrd/caniuse · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anoth...

## 📚 Platform Documentation & Specifications

- [JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1086) *(github.com)*
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [JPEG-XL is be enabled in Firefox 157 and Chrome 155 by tunetheweb · Pull Request #7565 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/pull/7565) *(github.com)*
- [GitHub - niutech/jxl.js: JPEG XL decoder in JavaScript using WebAssembly (WASM) · GitHub](https://github.com/niutech/jxl.js) *(github.com)*
- [jxl · GitHub Topics · GitHub](https://github.com/topics/jxl?l=javascript) *(github.com)*
- [GitHub - hjanuschka/jxl-rs-polyfill: JPEG XL (JXL) polyfill for browsers - decodes JXL to PNG using WebAssembly · GitHub](https://github.com/hjanuschka/jxl-rs-polyfill) *(github.com)*
- [GitHub - documize/jexcel: jExcel \| the javascript spreadsheet is a very light jquery plugin to add a excel compatible spreadsheet in your application or web based software. Create smarter apps including data tables, grid and spreasheets with this awesome jquery spreadsheet plugin. For live examples, please visit: · GitHub](https://github.com/documize/jexcel) *(github.com)*
- [jxl.js/index.html at main · niutech/jxl.js · ...](https://github.com/niutech/jxl.js/blob/main/index.html) *(github.com)*
- [jxl.js/README.md at main · niutech/jxl.js](https://github.com/niutech/jxl.js/blob/main/README.md) *(github.com)*
- [Intent to Ship: JPEG XL – Mozilla Hacks - the Web developer blog](https://hacks.mozilla.org/2026/08/intent-to-ship-jpeg-xl) *(hacks.mozilla.org)*
- [OffscreenCanvas, image.decode(), createImageBitmap(), WebWorker, transferToImageBitmap(), transferFromImageBitmap(), zero copy, Shape Detection API · GitHub](https://gist.github.com/uupaa/28673e2007613ae656e1f72d80a449e3) *(gist.github.com)*
- [decoding](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/decoding) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 11 planned queries — **36 verified relevant**
  - `"chromestatus.com/feature/5114042131808256" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"www.iso.org/standard/85066.html" -site:www.iso.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" API` — *Core feature API query* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (2 returned)
  - `"github.com" OR "jxl-rs" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"image/jxl" ("<picture>" OR "srcset") fallback JPEG XL web tutorial` — *Find practical developer guides and tutorials demonstrating how to serve JPEG XL images using modern HTML responsive picture elements with legacy fallbacks.* (8 returned)
  - `"image/jxl" (createImageBitmap OR HTMLImageElement OR decode OR CanvasRenderingContext2D) JavaScript example` — *Locate technical JavaScript code snippets showing programmatic handling, canvas drawing, or decode verification for image/jxl assets.* (8 returned)
  - `Blink "JPEG XL" (Chrome OR Chromium) ("jxl-rs" OR "Rust decoder") support announcement` — *Track official browser announcements, Blink intent threads, and news covering the reintegration of JPEG XL decoding via the jxl-rs Rust library.* (8 returned)
  - `"JPEG XL" ("jxl-rs" OR "Blink") site:news.ycombinator.com OR site:reddit.com/r/webdev OR site:groups.google.com/a/chromium.org` — *Discover developer community sentiment, debates, and Chromium engine bug tracking discussions regarding JPEG XL memory safety and browser adoption.* (7 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 66 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5114042131808256)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5114042131808256)
- [Specification](https://www.iso.org/standard/85066.html)
