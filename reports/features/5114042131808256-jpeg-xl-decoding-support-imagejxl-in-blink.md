# JPEG XL decoding support (image/jxl) in blink

> **Report Week:** 2026-W43 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Adds support for decoding JPEG XL (image/jxl) images in Blink using jxl-rs, a memory-safe pure Rust decoder (https://github.com/libjxl/jxl-rs). JPEG XL is a modern image format standardized as ISO/IEC 18181 that offers progressive decoding for improved perceived loading performance, support for wide color gamut, HDR, and high bit depth, and support for animation.

### Motivation

(see Summary)

## Ecosystem Status

- **Momentum:** High (footprint 360 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** JPEG XL (\`image/jxl\`) decoding support has officially achieved cross-browser availability, marked by Chrome 155 enabling the format by default in Blink using \`jxl-rs\`, a memory-safe pure Rust decoder developed by Google Research. Following Safari's baseline adoption in version 17 and Firefox enabling default support in version 158, all major browser engines now support native JXL decoding. The browser consensus has shifted from past C++ attack surface concerns to enthusiastic alignment around a shared, memory-safe Rust architecture.

### Recommendations
- Actionable Advice: Web development teams should implement JPEG XL today using progressive enhancement via standard HTML \`&lt;picture&gt;\` elements or HTTP \`Accept\` header negotiation with AVIF/WebP fallbacks. Image-heavy platforms and asset pipelines should also evaluate bit-for-bit lossless JPEG XL transcoding, which can immediately trim up to 20% of image storage and transfer bytes without altering source pixels.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "@chrylis @mattbramanti @fahdpar23 JPEG-XL beats PNG on nearly every technical front: lossless files typically 20-50% sma" (0 points, 0 comments).

## Web-features Group

*group-level data: web-features [`jpegxl`](https://webstatus.dev/features/jpegxl), shared with 2 other ChromeStatus features*

- Share of tests passing in the web-features group `jpegxl` on [wpt.fyi](https://wpt.fyi/results?q=feature:jpegxl) (via webstatus.dev) — stable: Chrome 96.9% · Edge 4.6% · Firefox 93.8% · Safari 56.9%; experimental: Chrome 98.5% · Edge 4.6% · Firefox 98.5% · Safari 58.5%
- **Chrome usage:** 0.016% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/418))
- **Mozilla:** neutral ([standards position](https://github.com/mozilla/standards-positions/issues/522))

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [@chrylis @mattbramanti @fahdpar23 JPEG-XL beats PNG on nearly every technical front: lossless files typically 20-50% sma](https://twitter.com/grok/status/2110731126218039352) — *by @grok, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Chrome 155 will ship decoding support for JPEG XL (.jxl).  It's a next-gen format built for devs &amp; photographers: 30](https://twitter.com/sandeepranjan_/status/2109742562831675539) — *by @sandeepranjan\_, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Addy Osmani on X: "Sneak Preview: JPEG XL decoding working in Chrome - 65% smaller than a JPEG at comparable quality. JXL aims to offer better image quality at low sizes, progressive decoding, lossless JPEG recompression and more: https://t.co/sErChStUHZ" / X](https://twitter.com/addyosmani/status/1379841205098311681?lang=en) — *by @addyosmani, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [biggo.com](https://finance.biggo.com/news/7ec0cac0-10ec-457a-a8ed-e8598414dc9f) *(finance.biggo.com)*
  > Recent developer articles, tutorials, official announcements, and community reactions highlight the re-introduction of \*\*JPEG XL (\`image/jxl\`) decoding support in Blink/Chromium\*\* Chrome officially enabled JPEG XL by default starting in \*\*Chrome 155\*...
- [dev.to](https://dev.to/leobaniak/chrome-155-decodes-jpeg-xl-and-the-decoder-is-written-in-rust-jg) *(dev.to)*
  > Recent developer articles, tutorials, official announcements, and community reactions highlight the re-introduction of \*\*JPEG XL (\`image/jxl\`) decoding support in Blink/Chromium\*\* Chrome officially enabled JPEG XL by default starting in \*\*Chrome 155\*...
- [Shipping JPEG XL in Chrome \| Hacker News](https://news.ycombinator.com/item?id=49991227) *(news.ycombinator.com)*
  > The comeback was enabled by the development of \*\*\`jxl-rs\`\*\*, a memory-safe, SIMD-accelerated pure Rust decoder developed by the JPEG XL / Google Research team Discussions on \*\*Hacker News\*\*, \*\*Reddit (\`r/rust\`, \`r/webdev\`)\*\*, and developer forums hig...
- [r/rust on Reddit: Shipping JPEG XL in Chrome (via jxl-rs, a decoder written in Rust)](https://www.reddit.com/r/rust/comments/1x03ajn/shipping_jpeg_xl_in_chrome_via_jxlrs_a_decoder) *(reddit.com)*
  > \*\*Article:\*\* \*"Shipping JPEG XL in Chrome (via jxl-rs, a decoder written in Rust)"\* by Luca Versari, Moritz Firsching, and Philip Jägenstedt Security researchers and web developers praised Google Research and Chromium for setting a precedent by build...
- [Integrating JPEG XL in Chromium with jxl-rs - Helmut Januschka](https://www.januschka.com/chromium-jxl-resurrection.html) *(januschka.com)*
  > \*\*Helmut Januschka's Engineering Blog:\*\* \*"Integrating JPEG XL in Chromium with jxl-rs"\* \*\*Technical Journey:\*\* Details the pivot from Phase 1 (an abandoned C++ \`libjxl\` integration due to memory safety concerns) to Phase 2 (adopting \`jxl-rs\`)
- [adyog.com](https://pulse.adyog.com/insights/chrome-155-jpeg-xl-rust-decoder) *(pulse.adyog.com)*
  > \*\*DEV Community & WebPulse Analysis:\*\* \*"Chrome 155 decodes JPEG XL, and the decoder is written in Rust"\* \*\*Architectural Impact:\*\* Explores the security precedent set by Chromium adopting Rust for high-risk network parsers
- [classmethod.jp](https://dev.classmethod.jp/en/articles/chrome-jpeg-xl-decode) *(dev.classmethod.jp)*
  > Verified picture element fallback"\* jxl\` today using the HTML \`&lt;picture&gt;\` element with MIME-type fallback strategies for older browsers
- [dev.to](https://dev.to/axrisi/image-compression-in-chrome-jpeg-xl-returns-with-a-rust-decoder-1m55) *(dev.to)*
  > Discussions on \*\*Hacker News\*\*, \*\*Reddit (\`r/rust\`, \`r/webdev\`)\*\*, and developer forums highlighted that persistent developer requests, Interop proposals, and strong interest from photography and CMS ecosystems were critical in reversing the 2022 dep...
- [neowin.net](https://www.neowin.net/news/google-chrome-155-brings-support-for-jpeg-xl-jxl) *(neowin.net)*
  > The creation of \`jxl-rs\` satisfied requirements for both Chromium and Firefox, creating broad cross-browser coverage
- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)*
  > Intent to Ship: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: JPEG XL decoding support...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/WjCKcBw219k/m/8zzn4E39BgAJ) *(groups.google.com)*
  > Intent to Prototype: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: JPEG XL decodi...
- [JPEG XL - Wikipedia](https://en.wikipedia.org/wiki/JPEG_XL) *(en.wikipedia.org · 2026-10-18T06:59:10)*
  > 1 2 3 &quot;Issue 1178058: &lt;strong&gt;JPEG&lt;/strong&gt; &lt;strong&gt;XL&lt;/strong&gt; &lt;strong&gt;decoding&lt;/strong&gt; &lt;strong&gt;support&lt;/strong&gt; (&lt;strong&gt;image&lt;/strong&gt;/&lt;strong&gt;jxl&lt;/strong&gt;) &lt;strong&gt;in&lt;/strong&gt; &lt;strong&gt;blink&lt;/strong&gt; (tracking bug)&quot;. bugs.chromium.org. ...
- [Ready for Trial: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/NttEYOmuB5U/m/Hqojb5WdAwAJ) *(groups.google.com)*
  > Ready for Trial: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Ready for Trial: JPEG XL decoding suppo...
- [\[blink-dev\] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17266.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink 'Luca Versari' via blink-dev Mon, 24 Aug 2026 09:15:41 -...
- [Re: \[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17258.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink Yoav Weiss (@Shopify) Mon, 24 Aug 2026 06:20:20 -0700 I ...
- [JPEG XL decoding support (image/jxl) in blink (tracking bug) \[40168998\] - Chromium](https://issues.chromium.org/issues/40168998) *(issues.chromium.org)*
  > Chromium Sign in
- [JPEG XL: The Future Image Format (Adoption Guide) \| ImageGuide](https://www.imageguide.dev/guides/jpeg-xl-future-format) *(imageguide.dev · 2026-08-15T00:00:00)*
  > The release notes describe it as decoding image/jxl in Blink “&lt;strong&gt;using jxl-rs, a memory-safe pure Rust decoder&lt;/strong&gt;.” That detail is the whole story: memory safety was a stated obstacle to shipping the C++ reference decoder, and a Rust reimp...
- [JPEG XL Image Encoding](https://www.loc.gov/preservation/digital/formats/fdd/fdd000536.shtml) *(loc.gov)*
  > Issue 1178058: JPEG XL decoding support (image/jxl) in blink (tracking bug) (https://bugs.chromium.org/p/chromium/issues/detail?id=1178058#c84).
- [What Is JPEG XL? Format Guide for Web Developers - Small Pics](https://www.smallpics.io/blog/what-is-jpeg-xl) *(smallpics.io · 2026-07-29T00:00:00)*
  > Users see a usable preview almost immediately. Lossless JPEG transcoding. &lt;strong&gt;Convert an existing JPEG to JPEG XL and back to an identical JPEG with zero quality loss&lt;/strong&gt;. The JXL version is typically 20% smaller.
- [JPEG XL Test Page – JPEG XL](https://jpegxl.info/resources/jpeg-xl-test-page.html) *(jpegxl.info)*
  > &lt;strong&gt;Try if your browser supports JPEG XL images&lt;/strong&gt;.
- [Shipping JPEG XL in Chrome \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/jpeg-xl-in-chrome) *(developer.chrome.com · 2026-10-06T00:00:00)*
  > Historically, decoders written in memory-unsafe languages like C++ have been prone to vulnerabilities such as out-of-bounds reads, heap overflows, and use-after-free bugs. Our security model relies on sandboxing and defense-in-depth, guided by the ru...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/WjCKcBw219k/m/xX-NnWtTBQAJ) *(groups.google.com)*
  > If JPEG XL was implemented in Chromium, it would quickly boost adoption by CDNs and replace JPEG in a short time thanks to lossless JPEG transcoding capability. So what was the real rationale for dropping JPEG XL support? As for the WebAssembly imple...
- [\[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17256.html) *(mail-archive.com)*
  > The cmyk-basic-conversion-reftest.html failure is being fixed in https://chromium-review.git.corp.google.com/c/chromium/src/+/8275513 Flag name on about://flags enable-jxl-image-format Finch feature name JXLImageFormat Rollout plan Will ship enabled ...
- [Re: \[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17261.html) *(mail-archive.com)*
  > The cmyk-basic-conversion-reftest.html failure is being fixed in https://chromium-review.git.corp.google.com/c/chromium/src/+/8275513 \*Flag name on about://flags\* enable-jxl-image-format \*Finch feature name\* JXLImageFormat \*Rollout plan\* Will ship en...
- [\[blink-dev\] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17297.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; &gt;&gt; Surely websites can select compression options that fit their use cases? &gt;&gt; Perhaps all that is needed is to change the default in libjxl&#x27;s CLI tool to &gt;&gt; use faster\_decoding=1. &gt;&gt; &gt; -- You receive...
- [Re: \[blink-dev\] Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://www.mail-archive.com/blink-dev@chromium.org/msg11449.html) *(mail-archive.com)*
  > A lot of interest on encode.su &gt; &lt;http://encode.su&gt;, r/jpegxl, &lt;https://reddit.com/r/jpegxl/&gt; discord &gt; &lt;https://discord.com/channels/794206087879852103&gt;, ...\*Is this feature &gt; fully tested by web-platform-tests &gt; &lt;ht...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://archive.ph/up04r) *(archive.ph · 2025-11-22T18:01:49)*
  > If JPEG XL was implemented in Chromium, it would quickly boost adoption by CDNs and replace JPEG in a short time thanks to lossless JPEG transcoding capability. So what was the real rationale for dropping JPEG XL support? As for the WebAssembly imple...
- [Implementation Guide — JPEG XL](https://jpegxl.com/guide) *(jpegxl.com)*
  > If image/jxl isn&#x27;t recognized, the browser will fallback to using the &lt;img&gt; tag.
- [JPEG XL Is Back in Chrome: What the Chrome 155 Decoder Means for Image Performance \| Trade Assistance LLC](https://trade-assistance.com/blog/jpeg-xl-returns-chrome-155-image-performance) *(trade-assistance.com · 2026-09-28T00:00:00)*
  > Chrome 155, currently in beta, ... announcement describes it plainly — &lt;strong&gt;support for decoding image/jxl images in Blink using jxl-rs, a memory-safe, pure-Rust implementation of the codec&lt;/strong&gt;....
- [Google Chrome 145 Released With JPEG-XL Image Support - Phoronix](https://www.phoronix.com/news/Chrome-145-Released) *(phoronix.com · 2026-02-10T00:00:00)*
  > Google today announced Chrome 145 being pushed out to the stable channel across Windows, macOS, and Linux systems. Most exciting is JPEG-XL decoding support returning to the Blink engine. &lt;strong&gt;Google is using the Rust-based jxl-rs decoder rather t...
- [r/jpegxl on Reddit: JPEG-XL image support is back in the very latest Google Chrome/Chromium codebase](https://www.reddit.com/r/jpegxl/comments/1qcdch6/jpegxl_image_support_is_back_in_the_very_latest) *(reddit.com · 2026-01-14T04:07:50)*
  > &lt;strong&gt;JPEG-XL image support is back in the very latest Google Chrome/Chromium codebase&lt;/strong&gt;. Back in December they merged jxl-rs as a pure Rust-based JPEG-XL image decoder from the official libjxl organization.
- [r/webdev on Reddit: Heads up! Both Chrome and Firefox support JPEG XL (jxl) now](https://www.reddit.com/r/webdev/comments/1uyprxm/heads_up_both_chrome_and_firefox_support_jpeg_xl) *(reddit.com · 2026-07-17T04:44:58)*
  > JPEG XL is finally useful – Chrome 145 ships native JXL decoder. Here&#x27;s what changes ... JPEG XL is objectively better than WebP in almost every way - so why are most browsers still ghosting it? And should we start a petition? ... Chromium Dev d...
- [Google Revisits JPEG XL in Chromium After Earlier Removal \| Hacker News](https://news.ycombinator.com/item?id=46021179) *(news.ycombinator.com · 2025-11-29T20:35:11)*
  > But JPEG-XL is being quite widely used now, from PDF, medical images, camera lossless, as well as being evaluated in different stage of cinema / artist workflow production. Hopefully the rust decoder will be ready soon · And from the wording, it seem...
- [r/jpegxl on Reddit: Google Chrome 145 Released With JPEG-XL Image Support](https://www.reddit.com/r/jpegxl/comments/1r1lqfe/google_chrome_145_released_with_jpegxl_image) *(reddit.com · 2026-02-11T02:59:30)*
  > JPEG XL is finally useful – &lt;strong&gt;Chrome 145 ships native JXL decoder. Here&#x27;s what changes ... Chromium Ends JPEG XL Before It Even Lived: ~3x smaller images, progressive, HDR, recompression, lossless, alpha&lt;/strong&gt; ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > Intent to Ship: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: JPEG XL decodi...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/libjxl/jxl-rs) *(github.com)*
- [JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1086) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 11 planned queries — **29 verified relevant**
  - `"chromestatus.com/feature/5114042131808256" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"www.iso.org/standard/85066.html" -site:www.iso.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" API` — *Core feature API query* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (6 returned)
  - `"github.com" OR "jxl-rs" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"image/jxl" ("JPEG XL" OR jxl) (guide OR tutorial OR responsive) (HTML OR CSS)` — *Guides and tutorials detailing how to implement and serve JPEG XL images with web fallbacks.* (4 returned)
  - `"<source type=\"image/jxl\">" OR "image/jxl" HTML picture element example` — *Markup patterns and code examples showing progressive enhancement and fallback syntax for image/jxl in HTML.* (8 returned)
  - `"JPEG XL" (Chromium OR Blink OR Chrome) ("jxl-rs" OR "Rust decoder") ("intent to" OR chromestatus)` — *Chromium intent threads, status pages, and release announcements tracking the re-introduction of JPEG XL via jxl-rs.* (8 returned)
  - `"JPEG XL" (Chrome OR Blink OR Chromium) (site:news.ycombinator.com OR site:reddit.com)` — *Developer community reactions, sentiment, and technical debates regarding Blink adopting JPEG XL decoding.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **2 verified relevant**
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
