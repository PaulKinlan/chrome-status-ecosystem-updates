# JPEG XL decoding support (image/jxl) in blink

> **Report Week:** 2026-W41 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Adds support for decoding JPEG XL (image/jxl) images in Blink using jxl-rs, a memory-safe pure Rust decoder (https://github.com/libjxl/jxl-rs). JPEG XL is a modern image format standardized as ISO/IEC 18181 that offers progressive decoding for improved perceived loading performance, support for wide color gamut, HDR, and high bit depth, and support for animation.

### Motivation

(see Summary)

## Ecosystem Status

- **Momentum:** High (370 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Native JPEG XL (image/jxl) decoding returns to Blink enabled by default in Chrome 155, powered by jxl-rs—a memory-safe, high-performance pure Rust decoder. Coupled with Firefox's rollout and Safari's existing support, this default enablement completes cross-browser consensus after years of ecosystem deadlock. Web applications can now rely on full engine alignment for progressive decoding, lossless JPEG recompression, animation, and wide color gamut HDR capabilities.

### Recommendations
- Actionable Advice: Teams should adopt JPEG XL today via progressive enhancement using \`&lt;picture&gt;&lt;source type="image/jxl"&gt;\` with AVIF/WebP fallbacks, or serve it at the edge using HTTP \`Accept: image/jxl\` content negotiation. Image generation pipelines should also be evaluated, as origin CDNs are beginning to catch up with native JXL transformation tooling.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEnSi9b8plDrSBa4du8DShkixkKLjpIO2r2OO4EvoHT4XVHZdQZAtz9hGkYXBGeypQp6Q0ZWgqhPJlSolpdweX1GupSGrufhpj1SyOPxHWgIl38pjjysjvaprDfgKFvJF-Q0WB6vac=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [freetoolonline.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHbIdVHkRt1rVy2lDPw7ACLLAtXqs2zv06H7_oEb7l2Ttq3oFsYWnwu5hpJLiht5Z_V3Jj-v4WYDDnXxC8-i2EWaYrlvsqdkRpR4iSWrsZ11bVFt3yvKqIARrty7pSmqBJ8AUjSRXewBqFGdvaPStMJk2o0usIHhdA=) *(vertexaisearch.cloud.google.com)*
  > JPEG XL Browser Support 2026 - Chrome, Firefox, Safari - Free Tool Online Donate Buy Me A Coffee FreeToolOnline JPEG XL Browser Support 2026 - Chrome, Firefox, Safari Disable Ads Initializing, please wait a moment JPEG XL returns to Chrome and Firefo...
- [januschka.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEU2J694QFZBhdC1O1MtCcpn33Feq3fEuLJHZ1Ie-sEh1zz6wk2svB1wL6FFygmg7hpT_LBRzVKgWVf-unxLfLJfvf5rf1Ern9b8faYl1PCsK2SxvwGz_0e0nshpNR39tw7Iqx1bGrz8M2lk_PM) *(vertexaisearch.cloud.google.com)*
  > Integrating JPEG XL in Chromium with jxl-rs - Helmut Januschka Integrating JPEG XL in Chromium with jxl-rs ⚡ Chromium 🔧 Rust / C++ 👤 Helmut Januschka Why Chromium selected a Rust decoder, how it was integrated, and how it reached default enablement...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGQKhtasj2w0GM1vnBgLXmuolonfn5m3mjqNoBuGM7ixWMD9IaMGlJRBn3kdkyogvTZ-i03tykyM9cNkA_pfAmRrsEsDNi-LvLkjB6klVx1LCJUDxEO) *(vertexaisearch.cloud.google.com)*
  > GitHub - libjxl/jxl-rs · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window...
- [daily.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQERxWxHaTtHITsopVfaqZhzGzfv9G13VKxvhB3Is09QwRSueX_Km52qZGryP9wjgpxoV-aFi5zzJyeefTJyu0rPsq2x5U6hEiYsCiRhxdcI_JaD5PWwsEwMwuAPpPW5M7LKDseJPprmNoW3P8nlxQgxWgeunNeo_Lm5ClvxkAWaYk1ID2ZKwHCZS5GRUw==) *(vertexaisearch.cloud.google.com)*
  > JPEG XL Is Finally Getting Real Cross-Browser Support Collection Subscribe JPEG XL Is Finally Getting Real Cross-Browser Support # rust # firefox Last updated Sep 13 • 5 sources Questions this post answers Will Firefox support JPEG XL images by defau...
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEkGE9hyTJUYeMQpLv5A4GaXxjMJE3fW8nWZ4fWHlXsCp1UTwmnlT18LE-zfbDVHaF4y4xHC0zVSP1elX40_duPUw-BRIk2Ux2_-k2CeOxNwq17D7hiXUB9B8Dzy9uib_AnwTlVc5YaMlSdUvGKOp__hJICoC8x289BjoizYNOI5hHFRgbCgrzlJP6PkrOedg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"JPEG XL decoding support (image/jxl) in Blink"** marks the return of native JPEG XL (ISO/IEC 18181) support to Chromium and Blink-based browsers. After Chromium controversially removed experimental JPEG XL support in la
- [corewebvitals.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEwDXlN6y16UkepJ3_X73LYwoAd7waKnQszflIO__OGRzw3oAZfe4wzTiJaZGMlI8FkIsRMNOU6tUrHS_IKqKr_fnVV8pUzu4sA5pLow_DBE7xcgfUj-df0vToCwddJB8I4oJLwkIlthkWyVYFmteW6g2ap49IZ-tGoGK0=) *(vertexaisearch.cloud.google.com)*
  > JPEG XL and Core Web Vitals: what you need to know now that Chrome ships it JPEG XL and Core Web Vitals: what you need to know now that Chrome ships it How JPEG XL compares to AVIF, WebP and JPEG, what it means for your Core Web Vitals, and how to st...
- [ycombinator.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFpEQkVFVyBcxeP-T0RCPvev_Mxug9nwQuVY5tmY2_JkA4EucurHEh_OySHxACu4Ugqs2uuKyF5EIwPgMgm_1SAej2wUjRyhoxC8EGhE9qbuMPHS5M_dGZlm2PxlIv647-IHQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"JPEG XL decoding support (image/jxl) in Blink"** marks the return of native JPEG XL (ISO/IEC 18181) support to Chromium and Blink-based browsers. After Chromium controversially removed experimental JPEG XL support in la
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGjEJtalTVQ75lezDf-zK0kOzZNKVuQC-nj-H204Uj1iiOXL0lnb_2lz-jRlAJvzwXt15vXGtN_aNnYTfdbFtvDIBLCADWpcVwmWXvr9jGGdxo6VeH7HQd-I72RRA9d-Gvi4x6fwx7boFcepGIWiTVvrwIkx2kfOQB7GAr6pbHK-HA=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"JPEG XL decoding support (image/jxl) in Blink"** marks the return of native JPEG XL (ISO/IEC 18181) support to Chromium and Blink-based browsers. After Chromium controversially removed experimental JPEG XL support in la
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHSBVkQehZ2jhlLblBZjzfQrA1jYBdmtoYGfu3-FSJ_oeXd2hginSScaHqRpOZcMLGJLJ7HcoWZ94ID7IaqeI566ZMqX3Vl6D-8aIaOzv6qrRwtZKyoUbXSeamHRLuIaUToKISed81wWXL6cCnQ8es9R0QUm6_C8eDtQKgUTeiPLcz8DxSHy82GU_X_XI3VkIawhXYxgig=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"JPEG XL decoding support (image/jxl) in Blink"** marks the return of native JPEG XL (ISO/IEC 18181) support to Chromium and Blink-based browsers. After Chromium controversially removed experimental JPEG XL support in la
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGZzCHbQsqfja5_vqqjNr__juD_gPrOBRbFcPDoMysuGMAj9-7g4OkchdWzgGj-AccHFaZvUv7EkLmWEhKqWJ8Sj9MeTE2_aCEj1Hu2HdMP7tu4BqaZSYpQdd3E-_ZtrPjvalcz8wKAKQeGQTpi9TUAZSurr6M_ldbrCoWN4TIPUEpU7suoxLj6MCwGqn2ad8fq7w==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"JPEG XL decoding support (image/jxl) in Blink"** marks the return of native JPEG XL (ISO/IEC 18181) support to Chromium and Blink-based browsers. After Chromium controversially removed experimental JPEG XL support in la
- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5114042131808256</strong>?gate=6594362739916800
- [Intent to prototype: JPEG XL decoding in Rust](https://groups.google.com/a/mozilla.org/g/dev-platform/c/JMM5Nhdj6mc) *(groups.google.com · 2026-01-26T00:00:00)*
  > Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1986393 Specification: https://<strong>www.iso.org/standard/85066.html</strong> Standards Body: ISO/IEC Platform coverage: All Preference: image.jxl.enabled Link to standards-positions discussion: htt...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/WjCKcBw219k/m/NmOyvMCCBAAJ) *(groups.google.com)*
  > As for the WebAssembly implementation, the jxl_dec.wasm file is 821 KB [3] (290 KB gzipped) and it can only run after DOM tree is ready and JS is parsed, so it will never be as performant as the native JPEG XL decoder and it will not work when JS is ...
- [JPEG XL - Wikipedia](https://en.wikipedia.org/wiki/JPEG_XL) *(en.wikipedia.org · 2026-09-23T07:36:02)*
  > 1 2 3 &quot;Issue 1178058: <strong>JPEG</strong> <strong>XL</strong> <strong>decoding</strong> <strong>support</strong> (<strong>image</strong>/<strong>jxl</strong>) <strong>in</strong> <strong>blink</strong> (tracking bug)&quot;. bugs.chromium.org. ...
- [Ready for Trial: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/NttEYOmuB5U) *(groups.google.com)*
  > JPEG XL is a new royalty-free image ... lossless JPEG recompression, lossless and progressive modes. It is based on Google&#x27;s PIK and Cloudinary&#x27;s FUIF, and is in the final steps of standardization with ISO. <strong>This feature enables imag...
- [\[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17256.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://www.iso.org/standard/85066.html Summary Adds support for decoding JPEG XL (image/jxl) images in Blink using <strong>jxl-rs</strong>, a memory-safe pure Rust decoder (https://github.com/libjxl/<s...
- [Re: \[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17258.html) *(mail-archive.com)*
  > On Mon, Aug 24, 2026 at 2:15 PM ... https://www.iso.org/standard/85066.html &gt;&gt; &gt;&gt; *Summary* &gt;&gt; Adds support for decoding JPEG XL (image/jxl) images in Blink <strong>using &gt;&gt; jxl-rs</strong>, a memory-safe pure Rust decoder (ht...
- [\[blink-dev\] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17266.html) *(mail-archive.com)*
  > &#x27;Luca Versari&#x27; via blink-dev Mon, ... &gt; Adds support for decoding JPEG XL (image/jxl) images in Blink using &gt; <strong>jxl-rs, a memory-safe pure Rust decoder (https://github.com/libjxl/jxl-rs).</strong>...
- [JPEG XL: The Future Image Format (Adoption Guide) \| ImageGuide](https://www.imageguide.dev/guides/jpeg-xl-future-format) *(imageguide.dev · 2026-01-19T00:00:00)*
  > The release notes describe it as decoding image/jxl in Blink “<strong>using jxl-rs, a memory-safe pure Rust decoder</strong>.” That detail is the whole story: memory safety was a stated obstacle to shipping the C++ reference decoder, and a Rust reimp...
- [JPEG XL Image Encoding](https://www.loc.gov/preservation/digital/formats/fdd/fdd000536.shtml) *(loc.gov)*
  > Issue 1178058: JPEG XL decoding support (image/jxl) in blink (tracking bug) (https://bugs.chromium.org/p/chromium/issues/detail?id=1178058#c84).
- [Enable JPEG-XL (.jxl) Image Support in Ubuntu 24.04 & 22.04 \| UbuntuHandbook](https://ubuntuhandbook.org/index.php/2024/06/enable-jxl-support-ubuntu) *(ubuntuhandbook.org)*
  > This tutorial shows how to enable .jxl file support for system image viewer, GIMP, and some other apps in Ubuntu 24.04, Ubuntu 22.04, Ubuntu 20.04, and even Ubuntu 18.04. JPEG-XL is a new image format by JPEG committee. It supports both lossy and los...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/WjCKcBw219k/m/xX-NnWtTBQAJ) *(groups.google.com)*
  > If JPEG XL was implemented in Chromium, it would quickly boost adoption by CDNs and replace JPEG in a short time thanks to lossless JPEG transcoding capability. So what was the real rationale for dropping JPEG XL support? As for the WebAssembly imple...
- [JPEG XL decoding support (image/jxl) in blink (tracking bug) \[40168998\] - Chromium](https://issues.chromium.org/issues/40168998) *(issues.chromium.org)*
  > <strong>This library is now included in the build from the blink_platform_unittests_sources target so it is built in this commit</strong>. Since it is only in the unittest it won&#x27;t be included in chrome binary with this commit. This library will...
- [Re: \[blink-dev\] Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://www.mail-archive.com/blink-dev@chromium.org/msg11449.html) *(mail-archive.com)*
  > A lot of interest on encode.su &gt; &lt;http://encode.su&gt;, r/jpegxl, &lt;https://reddit.com/r/jpegxl/&gt; discord &gt; &lt;https://discord.com/channels/794206087879852103&gt;, ...*Is this feature &gt; fully tested by web-platform-tests &gt; &lt;ht...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://archive.ph/up04r) *(archive.ph · 2025-11-22T18:01:49)*
  > If JPEG XL was implemented in Chromium, it would quickly boost adoption by CDNs and replace JPEG in a short time thanks to lossless JPEG transcoding capability. So what was the real rationale for dropping JPEG XL support? As for the WebAssembly imple...
- [JPEG XL (JXL) is coming back to Chrome - Coywolf](https://coywolf.com/news/web-development/jpeg-xl-jxl-is-coming-back-to-chrome) *(coywolf.com · 2026-06-14T23:35:34)*
  > Comment from Chromium developer on “JPEG XL decoding support (image/jxl) in blink” 40168998 · Declan Chidlow, a front-end developer, wrote about the ordeal in an article titled “JPEG XL and Google’s war against it.” In it, he said there was an immedi...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1086) *(github.com · 2026-07-29T21:39:58)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > https://<strong>chromestatus.com/feature/5114042131808256</strong> · Reactions are currently unavailable · Sign up for free to join this conversation on GitHub. Already have an account? Sign in to comment · No one assigned · needs-atlConten...
- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5114042131808256</strong>?gate=6594362739916800
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > JPEG XL, https://<strong>chromestatus.com/feature/5114042131808256</strong>
- [Intent to prototype: JPEG XL decoding in Rust](https://groups.google.com/a/mozilla.org/g/dev-platform/c/JMM5Nhdj6mc) *(groups.google.com · 2026-01-26T00:00:00)* *(Cites: `https://www.iso.org/standard/85066.html`)*
  > Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1986393 Specification: https://<strong>www.iso.org/standard/85066.html</strong> Standards Body: ISO/IEC Platform coverage: All Preference: image.jxl.enabled Link to standards-positions discu...

## 📚 Platform Documentation & Specifications

- [JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1086) *(github.com)*
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [GitHub - niutech/jxl.js: JPEG XL decoder in JavaScript using WebAssembly (WASM) · GitHub](https://github.com/niutech/jxl.js) *(github.com)*
- [jxl · GitHub Topics · GitHub](https://github.com/topics/jxl?l=javascript) *(github.com)*
- [GitHub - hjanuschka/jxl-rs-polyfill: JPEG XL (JXL) polyfill for browsers - decodes JXL to PNG using WebAssembly · GitHub](https://github.com/hjanuschka/jxl-rs-polyfill) *(github.com)*
- [GitHub - documize/jexcel: jExcel \| the javascript spreadsheet is a very light jquery plugin to add a excel compatible spreadsheet in your application or web based software. Create smarter apps including data tables, grid and spreasheets with this awesome jquery spreadsheet plugin. For live examples, please visit: · GitHub](https://github.com/documize/jexcel) *(github.com)*
- [jxl.js/ at main · niutech/jxl.js](https://github.com/niutech/jxl.js?search=1) *(github.com)*
- [GitHub - nucliweb/jxl-in-css: PostCSS plugin to use JXL in CSS background · GitHub](https://github.com/nucliweb/jxl-in-css) *(github.com)*
- [jxl.js/index.html at main · niutech/jxl.js · ...](https://github.com/niutech/jxl.js/blob/main/index.html) *(github.com)*
- [decoding](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/decoding) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 34 result(s) found across 7 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/5114042131808256" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"www.iso.org/standard/85066.html" -site:www.iso.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" API` — *Core feature API query* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (3 returned)
  - `"github.com" OR "jxl-rs" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 67 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5114042131808256)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5114042131808256)
- [Specification](https://www.iso.org/standard/85066.html)
