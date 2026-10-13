# JPEG XL decoding support (image/jxl) in blink

> **Report Week:** 2026-W42 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Adds support for decoding JPEG XL (image/jxl) images in Blink using jxl-rs, a memory-safe pure Rust decoder (https://github.com/libjxl/jxl-rs). JPEG XL is a modern image format standardized as ISO/IEC 18181 that offers progressive decoding for improved perceived loading performance, support for wide color gamut, HDR, and high bit depth, and support for animation.

### Motivation

(see Summary)

## Ecosystem Status

- **Momentum:** High (footprint 390 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** Google has reversed its controversial 2022 deprecation by enabling JPEG XL decoding by default in Chrome 155, powered by Google Research's memory-safe Rust decoder, jxl-rs. Coupled with Safari's support since version 17 and Mozilla Firefox enabling it by default in Firefox 158 using the same Rust engine, JPEG XL has officially achieved cross-browser consensus. The move eliminates historical security hesitations around complex C++ decoders while bringing advanced progressive decoding, lossless JPEG transcoding, and HDR fidelity to the mainstream web.

### Recommendations
- Actionable Advice: Web teams can immediately adopt JPEG XL in production using progressive enhancement via HTML picture elements with source type image/jxl and AVIF or JPEG fallbacks, or by leveraging content negotiation against the Accept: image/jxl request header.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Addy Osmani on X: "Sneak Preview: JPEG XL decoding working in Chrome - 65% smaller than a JPEG at comparable quality. JXL aims to offer better image quality at low sizes, progressive decoding, lossless JPEG recompression and more: https://t.co/sErChStUHZ" / X" (0 points, 0 comments).

## Web-features Group

*group-level data: web-features [`jpegxl`](https://webstatus.dev/features/jpegxl), shared with 2 other ChromeStatus features*

- Share of tests passing in the web-features group `jpegxl` on [wpt.fyi](https://wpt.fyi/results?q=feature:jpegxl) (via webstatus.dev) — stable: Chrome 96.9% · Edge 4.6% · Firefox 5.1% · Safari 56.9%; experimental: Chrome 98.5% · Edge 4.6% · Firefox 98.5% · Safari 56.9%
- **Chrome usage:** 0.018% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/418))
- **Mozilla:** neutral ([standards position](https://github.com/mozilla/standards-positions/issues/522))

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Addy Osmani on X: "Sneak Preview: JPEG XL decoding working in Chrome - 65% smaller than a JPEG at comparable quality. JXL aims to offer better image quality at low sizes, progressive decoding, lossless JPEG recompression and more: https://t.co/sErChStUHZ" / X](https://twitter.com/addyosmani/status/1379841205098311681?lang=en) — *by @addyosmani, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Jyrki Alakuijala 🇺🇦 (@jyzg) on X](https://twitter.com/jyzg/status/1399628849856532482) — *by @jyzg, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [januschka.com](https://www.januschka.com/chromium-jxl-resurrection.html) *(januschka.com)*
  > After removing experimental JPEG XL support in 2022 citing insufficient ecosystem interest, Google reversed course and officially shipped native \*\*JPEG XL (\`image/jxl\`) decoding by default in Blink (Chrome 155)\*\* The primary catalyst for this reversa...
- [Shipping JPEG XL in Chrome \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/jpeg-xl-in-chrome) *(developer.chrome.com)*
  > After removing experimental JPEG XL support in 2022 citing insufficient ecosystem interest, Google reversed course and officially shipped native \*\*JPEG XL (\`image/jxl\`) decoding by default in Blink (Chrome 155)\*\* With \`jxl-rs\`, browsers gained a memo...
- [gattyworks.com](https://gattyworks.com/news/chrome-155-jpeg-xl-rust-decoder) *(gattyworks.com)*
  > After removing experimental JPEG XL support in 2022 citing insufficient ecosystem interest, Google reversed course and officially shipped native \*\*JPEG XL (\`image/jxl\`) decoding by default in Blink (Chrome 155)\*\* With \`jxl-rs\`, browsers gained a memo...
- [daily.dev](https://daily.dev/posts/jpeg-xl-is-finally-getting-real-cross-browser-support-y58yn4twq) *(daily.dev)*
  > The primary catalyst for this reversal—and for broader cross-browser alignment across Safari, Firefox, and Chromium—was the re-implementation of the decoder in \*\*pure Rust via \`jxl-rs\`\*\* Previously, the official C++ reference implementation (\`libjxl\`...
- [daily.dev](https://daily.dev/posts/SQxIdSuCk) *(daily.dev)*
  > \* \*\*Performance via SIMD:\*\* Memory safety did not compromise speed; the Chrome team built a dedicated SIMD abstraction layer (\`jxl\_simd\`) to ensure that decoding speeds remain competitive with native C++
- [techaiwire.com](https://techaiwire.com/articles/chrome-155-jpeg-xl-enabled-by-default-jxl-rs) *(techaiwire.com)*
  > \* \*\*Performance via SIMD:\*\* Memory safety did not compromise speed; the Chrome team built a dedicated SIMD abstraction layer (\`jxl\_simd\`) to ensure that decoding speeds remain competitive with native C++ \* Reviews benchmark metrics comparing \`libjxl\`...
- [reddit.com](https://www.reddit.com/r/jpegxl/comments/1vx1qvz/jpeg_xl_hopefully_soon_to_be_stable_in_chrome_and) *(reddit.com)*
  > Once \`jxl-rs\` achieved stability, both Mozilla and the Chromium team posted matching "Intents to Ship
- [free-codecs.com](https://www.free-codecs.com/news/jpeg-xl-is-back-in-chrome-what-it-means-and-how-to-open-jxl-files.htm) *(free-codecs.com)*
  > jpg" alt="Optimized asset" width="1200" height="800"&gt; &lt;/picture&gt; \* Highlight the zero-generation-loss migration advantage: developers can transcode petabytes of historical JPEG libraries to JPEG XL to save server and CDN storage without altering a si...
- [ycombinator.com](https://news.ycombinator.com/item?id=49421758) *(news.ycombinator.com)*
  > \*\*The "Rust in Browsers" Precedent:\*\* Technical discussions across Hacker News and Reddit widely praise this effort as a prime example of browser vendors collaborating on modern systems languages Rather than blocking the format entirely, vendors set ...
- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)*
  > Intent to Ship: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: JPEG XL decoding support...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/WjCKcBw219k/m/NmOyvMCCBAAJ) *(groups.google.com)*
  > Intent to Prototype: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: JPEG XL decodi...
- [JPEG XL - Wikipedia](https://en.wikipedia.org/wiki/JPEG_XL) *(en.wikipedia.org · 2026-10-12T13:30:57)*
  > 1 2 3 &quot;Issue 1178058: &lt;strong&gt;JPEG&lt;/strong&gt; &lt;strong&gt;XL&lt;/strong&gt; &lt;strong&gt;decoding&lt;/strong&gt; &lt;strong&gt;support&lt;/strong&gt; (&lt;strong&gt;image&lt;/strong&gt;/&lt;strong&gt;jxl&lt;/strong&gt;) &lt;strong&gt;in&lt;/strong&gt; &lt;strong&gt;blink&lt;/strong&gt; (tracking bug)&quot;. bugs.chromium.org. ...
- [Ready for Trial: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/NttEYOmuB5U/m/Hqojb5WdAwAJ) *(groups.google.com)*
  > Ready for Trial: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Ready for Trial: JPEG XL decoding suppo...
- [\[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17256.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink Chromestatus Mon, 24 Aug 2026 04:08:38 -0700 Contact emails \[ema...
- [\[blink-dev\] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17266.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink 'Luca Versari' via blink-dev Mon, 24 Aug 2026 09:15:41 -...
- [Re: \[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17258.html) *(mail-archive.com)*
  > On Mon, Aug 24, 2026 at 2:15 PM ... https://www.iso.org/standard/85066.html &gt;&gt; &gt;&gt; \*Summary\* &gt;&gt; Adds support for decoding JPEG XL (image/jxl) images in Blink &lt;strong&gt;using &gt;&gt; jxl-rs&lt;/strong&gt;, a memory-safe pure Rust decoder (ht...
- [JPEG XL: The Future Image Format (Adoption Guide) \| ImageGuide](https://www.imageguide.dev/guides/jpeg-xl-future-format) *(imageguide.dev · 2026-01-19T00:00:00)*
  > The release notes describe it as decoding image/jxl in Blink “&lt;strong&gt;using jxl-rs, a memory-safe pure Rust decoder&lt;/strong&gt;.” That detail is the whole story: memory safety was a stated obstacle to shipping the C++ reference decoder, and a Rust reimp...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/WjCKcBw219k/m/xX-NnWtTBQAJ) *(groups.google.com)*
  > If JPEG XL was implemented in Chromium, it would quickly boost adoption by CDNs and replace JPEG in a short time thanks to lossless JPEG transcoding capability. So what was the real rationale for dropping JPEG XL support? As for the WebAssembly imple...
- [JPEG XL decoding support (image/jxl) in blink (tracking bug) \[40168998\] - Chromium](https://issues.chromium.org/issues/40168998) *(issues.chromium.org)*
  > &lt;strong&gt;This library is now included in the build from the blink\_platform\_unittests\_sources target so it is built in this commit&lt;/strong&gt;. Since it is only in the unittest it won&#x27;t be included in chrome binary with this commit. This library will...
- [Re: \[blink-dev\] Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://www.mail-archive.com/blink-dev@chromium.org/msg11449.html) *(mail-archive.com)*
  > A lot of interest on encode.su &gt; &lt;http://encode.su&gt;, r/jpegxl, &lt;https://reddit.com/r/jpegxl/&gt; discord &gt; &lt;https://discord.com/channels/794206087879852103&gt;, ...\*Is this feature &gt; fully tested by web-platform-tests &gt; &lt;ht...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://archive.ph/up04r) *(archive.ph · 2025-11-22T18:01:49)*
  > If JPEG XL was implemented in Chromium, it would quickly boost adoption by CDNs and replace JPEG in a short time thanks to lossless JPEG transcoding capability. So what was the real rationale for dropping JPEG XL support? As for the WebAssembly imple...
- [Chromium plans to ship JPEG XL image decoding in Blink · freenode](https://freenode.net/article/chromium-plans-to-ship-jpeg-xl-image-decoding-in-blink) *(freenode.net · 2026-08-24T15:11:08)*
  > The engine will decode image/jxl ... intent to ship JPEG XL decoding in Blink, &lt;strong&gt;adding native support for image/jxl across Windows, macOS, Linux, ChromeOS, Android, and Android WebView&lt;/strong&gt;....
- [Google's Chromium team decides it will add JPEG XL support, reverses 'obsolete' declaration](https://devclass.com/2025/11/24/googles-chromium-team-decides-it-will-add-jpeg-xl-support-reverses-obsolete-declaration) *(devclass.com · 2025-11-24T13:07:17)*
  > &lt;strong&gt;The Google Chromium team, responsible for the browser engine used in Chrome, Edge, Brave, Opera and more, has declared its intention to ship an implementation of a JPEG XL decoder&lt;/strong&gt;, reversing an October 2022 decision not to proceed wi...
- [Re: \[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17257.html) *(mail-archive.com)*
  > &gt; \*Contact emails\* &gt; \[email protected\], \[email protected\] &gt; &gt; \*Explainer\* &gt; \*No information provided\* &gt; &gt; \*Specification\* &gt; https://www.iso.org/standard/85066.html &gt; &gt; \*Summary\* &gt; &lt;strong&gt;Adds support for decoding JPE...
- [JPEG XL Is Back in Chrome: What the Chrome 155 Decoder Means for Image Performance \| Trade Assistance LLC](https://trade-assistance.com/blog/jpeg-xl-returns-chrome-155-image-performance) *(trade-assistance.com · 2026-09-28T00:00:00)*
  > Chrome 155, currently in beta, ... announcement describes it plainly — &lt;strong&gt;support for decoding image/jxl images in Blink using jxl-rs, a memory-safe, pure-Rust implementation of the codec&lt;/strong&gt;....
- [r/jpegxl on Reddit: JPEG-XL image support is back in the very latest Google Chrome/Chromium codebase](https://www.reddit.com/r/jpegxl/comments/1qcdch6/jpegxl_image_support_is_back_in_the_very_latest) *(reddit.com · 2026-01-14T04:07:50)*
  > 6 months later and edge continues to refuse to add, it, rest of the chromium based already did, hell chrome is on stable... ... JPEG XL is finally useful – Chrome 145 ships native JXL decoder.
- [r/jpegxl on Reddit: JPEG XL Chromium tracking bug is now closed WontFix](https://www.reddit.com/r/jpegxl/comments/znyvms/jpeg_xl_chromium_tracking_bug_is_now_closed) *(reddit.com · 2022-12-17T05:18:17)*
  > 51 votes, 34 comments. Issue 1178058: JPEG XL decoding support (image/jxl) in blink (tracking bug) with 793 stars has now been closed WontFix…
- [Google Revisits JPEG XL in Chromium After Earlier Removal \| Hacker News](https://news.ycombinator.com/item?id=46021179) *(news.ycombinator.com · 2025-11-29T20:35:11)*
  > But JPEG-XL is being quite widely used now, from PDF, medical images, camera lossless, as well as being evaluated in different stage of cinema / artist workflow production. Hopefully the rust decoder will be ready soon · And from the wording, it seem...
- [r/jpegxl on Reddit: Chromium Dev demos JPEG-XL support including animations!](https://www.reddit.com/r/jpegxl/comments/1p3shg3/chromium_dev_demos_jpegxl_support_including) *(reddit.com · 2025-11-22T12:51:21)*
  > There are issues in either the encoder for cjxl or the decoder but yes there are definitely issues that need to be ironed out for animated JXLs to be fully functioning. More replies More replies More replies · JPEG-XL image support is back in the ver...
- [r/brave\_browser on Reddit: JPEG-XL is coming to town, will Brave be brave about it?](https://www.reddit.com/r/brave_browser/comments/mvvx6h/jpegxl_is_coming_to_town_will_brave_be_brave) *(reddit.com · 2021-04-22T03:02:13)*
  > Brave is based on Chromium, in the testing phase image that appears to be version 92. Chrome stable is currently on version 90, if JPEG-XL support is in Chromium (and not confined only to Chrome) then Brave would probably just inherit that functional...
- [r/webdev on Reddit: Heads up! Both Chrome and Firefox support JPEG XL (jxl) now](https://www.reddit.com/r/webdev/comments/1uyprxm/heads_up_both_chrome_and_firefox_support_jpeg_xl) *(reddit.com · 2026-07-17T04:44:58)*
  > Actually I ran into a recent webp support problem, Safari and by extension all iOS browsers do not support client side image optimization with canvas to webp ... JPEG XL now in Chromium... when in Firefox...? ... JPEG XL is finally useful – Chrome 14...
- [r/jpegxl on Reddit: Google Chrome 145 Released With JPEG-XL Image Support](https://www.reddit.com/r/jpegxl/comments/1r1lqfe/google_chrome_145_released_with_jpegxl_image) *(reddit.com · 2026-02-11T02:59:30)*
  > JPEG XL is finally useful – &lt;strong&gt;Chrome 145 ships native JXL decoder&lt;/strong&gt;. Here&#x27;s what changes ... Chromium Ends JPEG XL Before It Even Lived: ~3x smaller images, progressive, HDR, recompression, lossless, alpha ...
- [r/jpegxl on Reddit: Several PR to keep JPEG-XL support in chromium based browsers](https://www.reddit.com/r/jpegxl/comments/111aiph/several_pr_to_keep_jpegxl_support_in_chromium) *(reddit.com · 2023-02-14T14:16:49)*
  > According to this thread in encode.su, several pr are currently open to keep jpeg-xl code in chromium derivative browsers : ... Also Basilisk and Waterfox. So currently there are five browsers with jxl support enabled by default.
- [JPEG XL (jxl) in ImageEngine – ImageEngine](https://support.imageengine.io/hc/en-us/articles/16739209580301-JPEG-XL-jxl-in-ImageEngine) *(support.imageengine.io)*
  > &lt;strong&gt;Support for JPEG XL in Chromium based browsers was first introduced in April 2021, but later removed in December 2022 (version 110)&lt;/strong&gt; JPEG XL can be enabled in Firefox Nightly via the image.jxl.enabled flag in about:config.
- [Does your browser support the new image format JPEG XL? \| NSpeaks](https://nspeaks.com/jpeg-xl-browser-support) *(nspeaks.com · 2021-05-10T00:00:00)*
  > &lt;strong&gt;As of 9 March 2026 Firefox Nightly 90.0a1+ (2021-05-09), and Safari 17.0+ support the JPEG XL format&lt;/strong&gt;. Google removed support for JPEG-XL with v110 but added it again with v145. And with Chrome dropping support for the format, all Chr...
- [r/jpegxl on Reddit: Mozilla Firefox is Getting JPEG-XL Image Format Support (works in Nightly)](https://www.reddit.com/r/jpegxl/comments/1j9a6qs/mozilla_firefox_is_getting_jpegxl_image_format) *(reddit.com · 2025-03-12T03:41:15)*
  > The about:config setting for image.jxl.enabled exists in Firefox v147.0 for Windows, but even when it is set to true .jxl files still are not displayed. &lt;strong&gt;Nor do they work in current versions of Chrome, Edge, Opera, Brave or Vivaldi&lt;/strong&gt;.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > Intent to Ship: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: JPEG XL decodi...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://hacks.mozilla.org/2026/08/intent-to-ship-jpeg-xl) *(hacks.mozilla.org)*
- [JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1086) *(github.com)*
- [1539075 - (JPEG-XL) Implement support for JPEG XL (image/jxl)](https://bugzilla.mozilla.org/show_bug.cgi?id=1539075) *(bugzilla.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 67 result(s) found across 12 planned queries — **30 verified relevant**
  - `"chromestatus.com/feature/5114042131808256" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"www.iso.org/standard/85066.html" -site:www.iso.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" API` — *Core feature API query* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (6 returned)
  - `"github.com" OR "jxl-rs" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"image/jxl" "JPEG XL" (picture OR srcset OR fallback) guide OR tutorial` — *Guides and tutorials demonstrating how to serve JPEG XL images on the web using HTML picture elements and format fallbacks.* (8 returned)
  - `("image/jxl" OR "jxl") ("createImageBitmap" OR "HTMLImageElement" OR "decode()") javascript` — *JavaScript examples demonstrating client-side feature detection, loading, and decoding of JPEG XL image resources.* (8 returned)
  - `("Chrome" OR "Chromium" OR "Blink") "JPEG XL" ("jxl-rs" OR "intent to prototype" OR "intent to ship")` — *Official Blink and Chromium tracking threads and announcements regarding re-adding JPEG XL support using the Rust decoder.* (8 returned)
  - `"JPEG XL" (Chromium OR Blink) (site:news.ycombinator.com OR site:reddit.com) "image/jxl"` — *Community reactions, developer discussions, and sentiment on forums regarding Blink's JPEG XL integration.* (8 returned)
  - `"image/jxl" browser support (Safari OR Firefox OR Chrome) HDR OR progressive` — *Analysis of cross-engine browser support and adoption of advanced JPEG XL features like HDR and progressive rendering.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 7 result(s) found — **2 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "jpegxl", shared with 2 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "jpegxl": Chrome 96.9% passing (stable)*
- **Sources cited by the AI synthesis:** 6 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5114042131808256)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5114042131808256)
- [Specification](https://www.iso.org/standard/85066.html)
