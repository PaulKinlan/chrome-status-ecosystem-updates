# JPEG XL decoding support (image/jxl) in blink

> **Report Week:** 2026-W44 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Adds support for decoding JPEG XL (image/jxl) images in Blink using jxl-rs, a memory-safe pure Rust decoder (https://github.com/libjxl/jxl-rs). JPEG XL is a modern image format standardized as ISO/IEC 18181 that offers progressive decoding for improved perceived loading performance, support for wide color gamut, HDR, and high bit depth, and support for animation.

### Motivation

(see Summary)

## Ecosystem Status

- **Momentum:** Moderate (footprint 300 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** Following its controversial removal in 2022, JPEG XL (image/jxl) has made a major return to Chromium, enabled by default in Chrome 155 using the memory-safe pure-Rust decoder jxl-rs. With Safari supporting the format since version 17 and Mozilla scheduling default support for Firefox 158 using the same Rust engine, the web platform has achieved broad multi-engine consensus. The format provides significant web performance benefits, including progressive rendering, HDR and wide-gamut support, and lossless transcoding of legacy JPEG assets.

### Recommendations
- Actionable Advice: Teams should adopt JPEG XL today via progressive enhancement, wrapping image/jxl sources inside standard HTML picture elements alongside AVIF and WebP fallbacks. Avoid serving standalone JXL files as primary assets until Chrome 155 and Firefox 158 achieve widespread user-base saturation and image crawling bots update their support.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "@Vikas\_Kr @i2cjak Got it. WebP's been a reliable upgrade over JPEG/PNG for ages with broad support. JPEG XL builds on th" (0 points, 0 comments).

## Web-features Group

*group-level data: web-features [`jpegxl`](https://webstatus.dev/features/jpegxl), shared with 2 other ChromeStatus features*

- Share of tests passing in the web-features group `jpegxl` on [wpt.fyi](https://wpt.fyi/results?q=feature:jpegxl) (via webstatus.dev) — stable: Chrome 96.9% · Edge 4.6% · Firefox 98.5% · Safari 56.9%; experimental: Chrome 98.5% · Edge 4.6% · Firefox 95.4% · Safari 56.9%
- **Chrome usage:** 0.017% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/418))
- **Mozilla:** neutral ([standards position](https://github.com/mozilla/standards-positions/issues/522))

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [@Vikas\_Kr @i2cjak Got it. WebP's been a reliable upgrade over JPEG/PNG for ages with broad support. JPEG XL builds on th](https://twitter.com/grok/status/2112812880693174467) — *by @grok, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Addy Osmani on X: "Sneak Preview: JPEG XL decoding working in Chrome - 65% smaller than a JPEG at comparable quality. JXL aims to offer better image quality at low sizes, progressive decoding, lossless JPEG recompression and more: https://t.co/sErChStUHZ" / X](https://twitter.com/addyosmani/status/1379841205098311681?lang=en) — *by @addyosmani, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [phoronix.com](https://www.phoronix.com/news/JPEG-XL-Possible-Chrome-Back) *(phoronix.com)*
  > After controversially removing experimental JPEG XL support in late 2022 (Chromium 110) After controversially removing experimental JPEG XL support in late 2022 (Chromium 110), Google reversed course following persistent developer demand, Safari's ad...
- [trade-assistance.com](https://trade-assistance.com/blog/jpeg-xl-returns-chrome-155-image-performance) *(trade-assistance.com)*
  > After controversially removing experimental JPEG XL support in late 2022 (Chromium 110) \*\*Vindication for the Web Community:\*\* When Google originally dropped JXL citing lack of interest, major industry players—including Adobe, Cloudinary, Intel, Meta...
- [januschka.com](https://www.januschka.com/chromium-jxl-resurrection.html) *(januschka.com)*
  > After controversially removing experimental JPEG XL support in late 2022 (Chromium 110), Google reversed course following persistent developer demand, Safari's adoption, and the PDF Association's standardization \*\*Articles:\*\* \*"Image compression in C...
- [windowsforum.com](https://windowsforum.com/news/chrome-155-enables-jpeg-xl-by-default-firefox-157-claim-is-wrong-158-expected.447532) *(windowsforum.com)*
  > The Blink team integrated \*\*JPEG XL (\`image/jxl\`) decoding into Chrome 155\*\*, enabled by default \*\*Fallback Handling:\*\* Because Firefox was scheduling default support slightly later (Firefox 158) and older Chromium installs persist, developers are in...
- [Shipping JPEG XL in Chrome \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/jpeg-xl-in-chrome) *(developer.chrome.com)*
  > The Blink team integrated \*\*JPEG XL (\`image/jxl\`) decoding into Chrome 155\*\*, enabled by default Crucially, rather than re-introducing the C++ reference decoder (\`libjxl\`), Blink implemented decoding via \*\*\`jxl-rs\`\*\*, a pure-Rust, memory-safe decoder...
- [mochify.app](https://mochify.app/guides/jpeg-xl-chrome-support) *(mochify.app)*
  > Crucially, rather than re-introducing the C++ reference decoder (\`libjxl\`), Blink implemented decoding via \*\*\`jxl-rs\`\*\*, a pure-Rust, memory-safe decoder developed under the libjxl project \*\*Articles:\*\* \*"Viewing JPEG XL in Chrome 155"\* (DevelopersIO...
- [dev.to](https://dev.to/axrisi/image-compression-in-chrome-jpeg-xl-returns-with-a-rust-decoder-1m55) *(dev.to)*
  > Image decoders parse untrusted binary data inside the browser's rendering process and have historically been a frequent source of memory corruption vulnerabilities; using Rust eliminates entire classes of buffer overflows and use-after-free exploits ...
- [reddit.com](https://www.reddit.com/r/rust/comments/1x03ajn/shipping_jpeg_xl_in_chrome_via_jxlrs_a_decoder) *(reddit.com)*
  > \*\*SIMD & Performance:\*\* Detail on the \`jxl\_simd\` abstraction layer in Rust, which delivered decoding speeds competitive with C++ while reducing memory footprints on mobile/desktop architectures \*\*Rust in Major Browsers:\*\* Rust developers and systems ...
- [chromestatus.com](https://chromestatus.com/feature/5188299478007808) *(chromestatus.com)*
  > AVIF:\*\* Highlights JXL’s progressive decode capabilities (yielding recognizable images at a fraction of the download) compared to AVIF's tiling-based progressive approach
- [reddit.com](https://www.reddit.com/r/jpegxl/comments/1vx1qvz/jpeg_xl_hopefully_soon_to_be_stable_in_chrome_and) *(reddit.com)*
  > AVIF:\*\* Highlights JXL’s progressive decode capabilities (yielding recognizable images at a fraction of the download) compared to AVIF's tiling-based progressive approach
- [classmethod.jp](https://dev.classmethod.jp/en/articles/chrome-jpeg-xl-decode) *(dev.classmethod.jp)*
  > \*\*Articles:\*\* \*"Viewing JPEG XL in Chrome 155"\* (DevelopersIO) and \*"JPEG XL in Chrome: What Changes Now"\* (Mochify) \*\*Fallback Handling:\*\* Because Firefox was scheduling default support slightly later (Firefox 158) and older Chromium installs persis...
- [Michael Tsai - Blog - Chrome Supports JPEG XL](https://mjtsai.com/blog/2026/10/12/chrome-supports-jpeg-xl) *(mjtsai.com)*
  > \*\*Lossless Recompression:\*\* Guides emphasize that existing JPEG archives can be losslessly transcoded to JPEG XL without quality degradation, saving roughly 20% in storage/bandwidth while preserving exact original DCT coefficients \*\*Vindication for t...
- [reddit.com](https://www.reddit.com/r/jpegxl/comments/1w5n2l5/enable_jpeg_xl_decoding_by_default) *(reddit.com)*
  > \*\*Cross-Browser Cohesion:\*\* With Apple WebKit/Safari already supporting JPEG XL and Gecko/Firefox delivering default support alongside Blink, JPEG XL now has an unblocked path to become a ubiquitous standard format across the web
- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)*
  > Intent to Ship: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: JPEG XL decoding support...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/WjCKcBw219k/m/8zzn4E39BgAJ) *(groups.google.com)*
  > Intent to Prototype: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: JPEG XL decodi...
- [Ready for Trial: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/NttEYOmuB5U) *(groups.google.com)*
  > Ready for Trial: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Ready for Trial: JPEG XL decoding suppo...
- [\[blink-dev\] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17266.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink 'Luca Versari' via blink-dev Mon, 24 Aug 2026 09:15:41 -...
- [JPEG XL decoding support (image/jxl) in blink (tracking bug) \[40168998\] - Chromium](https://issues.chromium.org/issues/40168998) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17256.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink Chromestatus Mon, 24 Aug 2026 04:08:38 -0700 Contact emails \[ema...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com · 2026-10-06T00:00:00)*
  > Tracking bug #494350643 ↗ (opens ... \| Explainer ↗ (opens in new window) &lt;strong&gt;Adds support for decoding JPEG XL (image/jxl) images in Blink using jxl-rs, a memory-safe pure Rust decoder&lt;/strong&gt; (https://github.com/libjxl/jxl-r...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/WjCKcBw219k/m/xX-NnWtTBQAJ) *(groups.google.com)*
  > If JPEG XL was implemented in Chromium, it would quickly boost adoption by CDNs and replace JPEG in a short time thanks to lossless JPEG transcoding capability. So what was the real rationale for dropping JPEG XL support? As for the WebAssembly imple...
- [\[blink-dev\] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17289.html) *(mail-archive.com)*
  > The cmyk-basic-conversion-reftest.html failure is &gt;&gt; being fixed in &gt;&gt; https://chromium-review.git.corp.google.com/c/chromium/src/+/8275513 &gt;&gt; &gt;&gt; \*Flag name on about://flags\* &gt;&gt; enable-jxl-image-format &gt;&gt; &gt;&gt; ...
- [Re: \[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17261.html) *(mail-archive.com)*
  > The cmyk-basic-conversion-reftest.html failure is being fixed in https://chromium-review.git.corp.google.com/c/chromium/src/+/8275513 \*Flag name on about://flags\* enable-jxl-image-format \*Finch feature name\* JXLImageFormat \*Rollout plan\* Will ship en...
- [Re: \[blink-dev\] Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://www.mail-archive.com/blink-dev@chromium.org/msg11449.html) *(mail-archive.com)*
  > A lot of interest on encode.su &gt; &lt;http://encode.su&gt;, r/jpegxl, &lt;https://reddit.com/r/jpegxl/&gt; discord &gt; &lt;https://discord.com/channels/794206087879852103&gt;, ...\*Is this feature &gt; fully tested by web-platform-tests &gt; &lt;ht...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://archive.ph/up04r) *(archive.ph · 2025-11-22T18:01:49)*
  > If JPEG XL was implemented in Chromium, it would quickly boost adoption by CDNs and replace JPEG in a short time thanks to lossless JPEG transcoding capability. So what was the real rationale for dropping JPEG XL support? As for the WebAssembly imple...
- [JPEG XL in Chrome: Image Fallback and Rollout Guide](https://techpulsesite.com/jpeg-xl-chrome-image-fallback-guide) *(techpulsesite.com · 2026-10-12T12:47:57)*
  > JPEG XL uses image/jxl. This illustrative pattern offers JPEG XL first, WebP next and a JPEG fallback: &lt;picture&gt; &lt;source srcset=&quot;/images/gallery-photo.jxl&quot; type=&quot;image/jxl&quot;&gt; &lt;source srcset=&quot;/images/gallery-phot...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/WjCKcBw219k) *(groups.google.com)*
  > Decades-old standards like the original JPEG or the JPEG 2000 are still to this day being actively maintained by the JPEG committee, so I think it&#x27;s safe to say that this organization has a proven track record of commitment to long-term maintena...
- [Chrome 155 JPEG XL support: Rust decoder jxl-rs](https://pulse.adyog.com/insights/chrome-155-jpeg-xl-rust-decoder) *(pulse.adyog.com · 2026-10-12T00:00:00)*
  > &lt;strong&gt;Chrome will decode JPEG XL images from version 155, using jxl-rs, a decoder written in Rust, a memory-safe language&lt;/strong&gt;.
- [Google Revisits JPEG XL in Chromium After Earlier Removal \| Hacker News](https://news.ycombinator.com/item?id=46021179) *(news.ycombinator.com · 2025-11-29T20:35:11)*
  > But JPEG-XL is being quite widely used now, from PDF, medical images, camera lossless, as well as being evaluated in different stage of cinema / artist workflow production. Hopefully the rust decoder will be ready soon · And from the wording, it seem...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > Intent to Ship: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: JPEG XL decodi...

## 📚 Platform Documentation & Specifications

- [JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1086) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 11 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/5114042131808256" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"www.iso.org/standard/85066.html" -site:www.iso.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" API` — *Core feature API query* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (6 returned)
  - `"github.com" OR "jxl-rs" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"image/jxl" "JPEG XL" (picture OR srcset OR fallback) (tutorial OR guide)` — *Finds practical developer guides and tutorials on serving JPEG XL on the web with HTML image fallbacks.* (8 returned)
  - `"image/jxl" ("createImageBitmap" OR "HTMLImageElement" OR "isTypeSupported") example` — *Searches for real-world JavaScript code snippets and API usage patterns involving JPEG XL image handling.* (8 returned)
  - `site:chromestatus.com OR site:groups.google.com/a/chromium.org "JPEG XL" "jxl-rs"` — *Tracks official Blink/Chromium developer discussions, intents to prototype/ship, and browser implementation milestones.* (8 returned)
  - `("JPEG XL" OR "jxl") "Blink" ("jxl-rs" OR "Rust decoder") (Hacker News OR Reddit OR blog)` — *Surfaces community reactions, developer sentiment, and debates surrounding Blink re-adding JPEG XL support via Rust.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **13 verified relevant**
- **Twitter / X API v2:** *found 3 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "jpegxl", shared with 2 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "jpegxl": Chrome 96.9% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5114042131808256)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5114042131808256)
- [Specification](https://www.iso.org/standard/85066.html)
