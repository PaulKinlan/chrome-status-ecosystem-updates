# JPEG XL decoding support (image/jxl) in blink

> **Report Week:** 2026-W40 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Adds support for decoding JPEG XL (image/jxl) images in Blink using jxl-rs, a memory-safe pure Rust decoder (https://github.com/libjxl/jxl-rs). JPEG XL is a modern image format standardized as ISO/IEC 18181 that offers progressive decoding for improved perceived loading performance, support for wide color gamut, HDR, and high bit depth, and support for animation.

### Motivation

(see Summary)

## Ecosystem Status

- **Momentum:** High (480 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** JPEG XL decoding support (image/jxl) in blink is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [gigazine.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHdnm3-4E-WNws7WZ5vwdbSbad_iEt7yJde16MLMHmdzfgpxjFzoS1PSL5uidF8E_cUWNpu-ymz3GQHh9809tuTdxOdVsqi_eHWOakLpC6WLkBKfCdaVOXbXutvrFMQrYx8Btcy504WLDb1S1x_KMIdTHtAdT6RwLQdNSRJsg==) *(vertexaisearch.cloud.google.com)*
  > Google reconsiders adopting JPEG XL format in Chrome, could it be revived? - GIGAZINE Dec 03, 2025 08:00:00 Google reconsiders adopting JPEG XL format in Chrome, could it be revived? Google has announced that it is working to restore support for the ...
- [ycombinator.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEo4PW5ajDdPzczZQ_7ue4HrIggjAPIO3Sy22XNUZTxlJEV9NWqxgP5TClm9MG526TVVH065FNrwZWzoYa4F0ICFhA0-CwfOYJ-qQaw3BtD4gZtQOurC_6i2ERkwuMwY60kKCs=) *(vertexaisearch.cloud.google.com)*
  > Google Revisits JPEG XL in Chromium After Earlier Removal | Hacker News Hacker News new | past | comments | ask | show | jobs | submit login Google Revisits JPEG XL in Chromium After Earlier Removal ( windowsreport.com ) 216 points by eln1 10 months ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH0tXTAAJSkboYfPxLsC9h97foRvNj48I4C4btGfVAL1_QxAEJLpLvxu18kpZnZ5YwQbS9YtKyxBYjTA9oJRqTdexqwGtTL_1uqtiq_GUT585iaHluRbVvtz1QAXcHwhq46YwVz) *(vertexaisearch.cloud.google.com)*
  > Chrome 145 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中...
- [januschka.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGIZCgY59TrvcOPJBjnJcCv8pja4J5svC4rHbPG1g5ZgZ-h3VpB34QUU9D3lTAYTU8kFuUvaXtGxMx-1Wm6Mv2JgQQcvAkO_guFF3mzR0JJT4nNKDXSJbbGXy3D-qXaok0EErslO6rubXr9RohyuA==) *(vertexaisearch.cloud.google.com)*
  > Integrating JPEG XL in Chromium with jxl-rs - Helmut Januschka Integrating JPEG XL in Chromium with jxl-rs ⚡ Chromium 🔧 Rust / C++ 👤 Helmut Januschka Why Chromium selected a Rust decoder, how it was integrated, and how it reached default enablement...
- [freenode.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE8MAZD0pVELuwsFqzsPpinKSWsEV3pG34qGj9LJGfyEvE51dPmOuYPJuOw_ed5rHa1mz5OIuTAMQZahijlJPw65QcUUhTGvzJOhMeWvkZ93KgZnm54gROE1hJYynC6ybP0N_SpBtW4wQNRcRS-4bSiePSlDGamjWTtM1FCZpt2J-P4PsjxySYYzA==) *(vertexaisearch.cloud.google.com)*
  > Chromium plans to ship JPEG XL image decoding in Blink · freenode free node Web Platform By ampersand August 24, 2026 Chromium plans to ship JPEG XL image decoding in Blink The engine will decode image/jxl via the memory-safe jxl-rs Rust library, mat...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFgtUVaU5DirBuxJS1PHAyBOq-6pGSL2HIpHaaXFR40J3oOi219atl7mEzfsAuVxdp1pw1OP03wXN5upJ3GVQl6PdJGWLdHCGKStRLCEzKYZ6_9ysjWm_Eve1IjtyS-IiP0qw==) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHtEso9Q1m44LTl1jUDpZ730MeQRoBsxSDpQxzB5-b2Vqx4ZGUg0mZuC3DhzjtlZVPSmOutfZuQraj3HKL4y_nBXaEeDmdcJqinu9MnnFkw6s3zF2LEBlKoWHzhg6bTUlnZqcRJR2lKV9TRdhAPtCo=) *(vertexaisearch.cloud.google.com)*
  > Intent to Ship: JPEG XL - Mozilla Hacks - the Web developer blog Hac k s Intent to Ship: JPEG XL By Jake Archibald Posted on August 24, 2026 in Uncategorized It isn&#8217;t often that new image formats land in browsers. In the early 2000s we had JPEG...
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH4vqgHzrkYPm1hpkc2JIBSfiIusJFihXPwuHvvCjaUKboN0RovyCESzt7rgYCcejgJC42MRti7hXSEqLajtG0nMPu_CB2h82_id-Ia6nHygPPbjDDEGYV-d2yy_q8dgroTEgLCrrcwv_UcDTitvSKzcY0T4BubvTLK4rhR71qvrCzrabVcIxhPqb1Z2LU=) *(vertexaisearch.cloud.google.com)*
  > The Web Platform feature **"JPEG XL decoding support (`image/jxl`) in Blink"** represents one of the most anticipated U-turns in modern web platform history. After controversially deprecating experimental JPEG XL support in late 2022, Chromium has re
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE0lVg_Nz45gAWUSg-tul5iG1V9aCvx6Cp1H_FvCulmUcKzYYzidZxrJigEBt6l_GOO0A3GexIB9PhBRSbz6l7rK4hq4m-Y5w0HKv2ul37TDWCT_KvCZGg0WzKkHXe_FbVOKIvfAfhf) *(vertexaisearch.cloud.google.com)*
  > The Web Platform feature **"JPEG XL decoding support (`image/jxl`) in Blink"** represents one of the most anticipated U-turns in modern web platform history. After controversially deprecating experimental JPEG XL support in late 2022, Chromium has re
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEhkBOTOgda2s6GNRMwqDnFAkmXGHPcW3-SlmQ1-q-AdkQK7cNDvLO-5O__gJZzI0EdJAfMJnHSLCk_kxgaHbc0fdBPvL-lKrY6y9HxBDZQg7VyqA96i2E53I_nhmJjlNLqGz0G1znJv9d9e0hPcSDnpDMYuXblBVRV) *(vertexaisearch.cloud.google.com)*
  > The Web Platform feature **"JPEG XL decoding support (`image/jxl`) in Blink"** represents one of the most anticipated U-turns in modern web platform history. After controversially deprecating experimental JPEG XL support in late 2022, Chromium has re
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGueqwnRPsK2-oQW-mTvnpQnltvOO7bowJXHj6sDfu5b0gmCxYmL-KYu6j8p9-aRVcAlTvfoZ_wXOZtRXAl8gMJq09kye3Gl2eMVDc0ju58VhoO0PRz3ENNtAG7r7nDYepI_poIkepIXNEF_Ck=) *(vertexaisearch.cloud.google.com)*
  > The Web Platform feature **"JPEG XL decoding support (`image/jxl`) in Blink"** represents one of the most anticipated U-turns in modern web platform history. After controversially deprecating experimental JPEG XL support in late 2022, Chromium has re
- [web-standards.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHNVo4WtthcuIJOezfjJlRI1ocbH6--hF0KsaO94TaK-cdPIdHwumC_7VpWHUCwoTV5hfcfejmgshJ5BPCoktLk3YAzfBhLdzwTBtmvyvM2CIYamE8UvNInVu00hXKXKVUjvS-CDw-WArP8SOUnt1L4arXOHw==) *(vertexaisearch.cloud.google.com)*
  > The Web Platform feature **"JPEG XL decoding support (`image/jxl`) in Blink"** represents one of the most anticipated U-turns in modern web platform history. After controversially deprecating experimental JPEG XL support in late 2022, Chromium has re
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHjsZCAATk6M-zm9ifKQTsA0uUz2kuxNB11dYqzqkFv69NVIbua5FJew2YxmyZNh6HJJ1L9kbk9FJM3ow6kJvNL047_iihCttukeBNE95ux8ohkJ9VSBxgFulyxfiDNapgG32u60Tp3MXsVVQaD-FQNmRaI2aWjqB3VMCL_6QTKzEnus7l5NuMHVC9xgfguPWHXgg8=) *(vertexaisearch.cloud.google.com)*
  > The Web Platform feature **"JPEG XL decoding support (`image/jxl`) in Blink"** represents one of the most anticipated U-turns in modern web platform history. After controversially deprecating experimental JPEG XL support in late 2022, Chromium has re
- [januschka.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHSLGV8cSlkJ7HAJFcfILNsqeWZylvHHDjju4pLoiapktokGfRsp8PqLU8XTBZqpOecdYUZjJF1xqCzqvHlotRmpbKuiSNh1iedccTcyY5an1sJaOb0QbjQnQ4Q1lqscQ==) *(vertexaisearch.cloud.google.com)*
  > The Web Platform feature **"JPEG XL decoding support (`image/jxl`) in Blink"** represents one of the most anticipated U-turns in modern web platform history. After controversially deprecating experimental JPEG XL support in late 2022, Chromium has re
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGDEkKrZgtpkrCpwT3oZNo7XApVcCcYSDjKvZ84VLja7pyeWrjzBWI5xEEzr6JhPFoCY8gKhvoNaBxoXezKvPW1ZihPGVpeile3z_FMbdL4ams4D2EQeFyPi1Q=) *(vertexaisearch.cloud.google.com)*
  > The Web Platform feature **"JPEG XL decoding support (`image/jxl`) in Blink"** represents one of the most anticipated U-turns in modern web platform history. After controversially deprecating experimental JPEG XL support in late 2022, Chromium has re
- [corewebvitals.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGbOrYB0Hdd2vNbNlsY-UZOGRahiMQklGhbjWy74jhZA_jha-MmvZHXinnfj-nlMxYCgpNcy_H0-tBK7pMRjYvpEp3WDJvxajYICQA8XiijlpaKWbw-d2sav3JHooDiLxE9rjb_Hwg5R4sPpUAZ_qxurAkR9zuylGaaMONR) *(vertexaisearch.cloud.google.com)*
  > The Web Platform feature **"JPEG XL decoding support (`image/jxl`) in Blink"** represents one of the most anticipated U-turns in modern web platform history. After controversially deprecating experimental JPEG XL support in late 2022, Chromium has re
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGTXGetv2eLs4vbCP4vX9NWbNJpzkZ4RURlAIgROOD7-XJt6xQtb-uH7fzFv2HTI38NoK8niYs51S6zIQnFOUEbELWFPlK3KLnyNwxervNg7pgfkIuGvhXq7QGpXH7zLXzCXNf_BiO8X2vKhPYauuWyttiAxijcAlDIBLKKbFAyIVRBhIv2AnznLjLxmAAQQTIn4Us6r8jx) *(vertexaisearch.cloud.google.com)*
  > The Web Platform feature **"JPEG XL decoding support (`image/jxl`) in Blink"** represents one of the most anticipated U-turns in modern web platform history. After controversially deprecating experimental JPEG XL support in late 2022, Chromium has re
- [wikipedia.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFrDNjK3ZVsBQXpvt2Br3yXP5AfN3f83Z9SEhTpbjyIdSpK8tozsU8RGj19suLqZBUg1NghFtqlxwLkuAAay7d7Ea2RNMVs4sjdyTlO1Rdm0iLftOEFbj299Ifs) *(vertexaisearch.cloud.google.com)*
  > The Web Platform feature **"JPEG XL decoding support (`image/jxl`) in Blink"** represents one of the most anticipated U-turns in modern web platform history. After controversially deprecating experimental JPEG XL support in late 2022, Chromium has re
- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5114042131808256</strong>?gate=6594362739916800
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/WjCKcBw219k/m/NmOyvMCCBAAJ) *(groups.google.com)*
  > As for the WebAssembly implementation, the jxl_dec.wasm file is 821 KB [3] (290 KB gzipped) and it can only run after DOM tree is ready and JS is parsed, so it will never be as performant as the native JPEG XL decoder and it will not work when JS is ...
- [JPEG XL - Wikipedia](https://en.wikipedia.org/wiki/JPEG_XL) *(en.wikipedia.org · 2026-09-23T07:36:02)*
  > 1 2 3 &quot;Issue 1178058: <strong>JPEG</strong> <strong>XL</strong> <strong>decoding</strong> <strong>support</strong> (<strong>image</strong>/<strong>jxl</strong>) <strong>in</strong> <strong>blink</strong> (tracking bug)&quot;. bugs.chromium.org. ...
- [Ready for Trial: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/NttEYOmuB5U) *(groups.google.com)*
  > JPEG XL is a new royalty-free image ... lossless JPEG recompression, lossless and progressive modes. It is based on Google&#x27;s PIK and Cloudinary&#x27;s FUIF, and is in the final steps of standardization with ISO. <strong>This feature enables imag...
- [\[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17256.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://www.iso.org/standard/85066.html Summary Adds support for decoding JPEG XL (image/jxl) images in Blink using <strong>jxl-rs</strong>, a memory-safe pure Rust decoder (https://github.com/libjxl/<s...
- [\[blink-dev\] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17266.html) *(mail-archive.com)*
  > &#x27;Luca Versari&#x27; via blink-dev Mon, ... &gt; Adds support for decoding JPEG XL (image/jxl) images in Blink using &gt; <strong>jxl-rs, a memory-safe pure Rust decoder (https://github.com/libjxl/jxl-rs).</strong>...
- [Re: \[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17258.html) *(mail-archive.com)*
  > On Mon, Aug 24, 2026 at 2:15 PM ... https://www.iso.org/standard/85066.html &gt;&gt; &gt;&gt; *Summary* &gt;&gt; Adds support for decoding JPEG XL (image/jxl) images in Blink <strong>using &gt;&gt; jxl-rs</strong>, a memory-safe pure Rust decoder (ht...
- [JPEG XL: The Future Image Format (Adoption Guide) \| ImageGuide](https://www.imageguide.dev/guides/jpeg-xl-future-format) *(imageguide.dev · 2026-01-19T00:00:00)*
  > The release notes describe it as decoding image/jxl in Blink “<strong>using jxl-rs, a memory-safe pure Rust decoder</strong>.” That detail is the whole story: memory safety was a stated obstacle to shipping the C++ reference decoder, and a Rust reimp...
- [Enable JPEG-XL (.jxl) Image Support in Ubuntu 24.04 & 22.04 \| UbuntuHandbook](https://ubuntuhandbook.org/index.php/2024/06/enable-jxl-support-ubuntu) *(ubuntuhandbook.org)*
  > This tutorial shows how to enable .jxl file support for system image viewer, GIMP, and some other apps in Ubuntu 24.04, Ubuntu 22.04, Ubuntu 20.04, and even Ubuntu 18.04. JPEG-XL is a new image format by JPEG committee. It supports both lossy and los...
- [r/javascript on Reddit: GitHub - niutech/jxl.js: JPEG XL decoder in JavaScript using WebAssembly (WASM)](https://www.reddit.com/r/javascript/comments/z3hjyj/github_niutechjxljs_jpeg_xl_decoder_in_javascript) *(reddit.com · 2022-11-24T11:26:55)*
  > News, information, and discussion about WebGPU, an upcoming standard and JavaScript API for accelerated graphics and compute.
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/WjCKcBw219k/m/xX-NnWtTBQAJ) *(groups.google.com)*
  > If JPEG XL was implemented in Chromium, it would quickly boost adoption by CDNs and replace JPEG in a short time thanks to lossless JPEG transcoding capability. So what was the real rationale for dropping JPEG XL support? As for the WebAssembly imple...
- [JPEG XL decoding support (image/jxl) in blink (tracking bug) \[40168998\] - Chromium](https://issues.chromium.org/issues/40168998) *(issues.chromium.org)*
  > https://crrev.com/55dc7eb5296a32011c9bf7f41ebf2b0012a31c5a/third_party/blink/renderer/platform/image-decoders/jxl/jxl_image_decoder_test.cc · I would like to add support from Adobe on the adoption of JPEG-XL into blink/chromium.
- [Re: \[blink-dev\] Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://www.mail-archive.com/blink-dev@chromium.org/msg14601.html) *(mail-archive.com)*
  > A lot of interest on encode.su &gt;&gt; &lt;http://encode.su&gt;, r/jpegxl, &lt;https://reddit.com/r/jpegxl/&gt; discord &gt;&gt; &lt;https://discord.com/channels/794206087879852103&gt;, ...*Is this feature &gt;&gt; fully tested by web-platform-tests...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://archive.ph/up04r) *(archive.ph · 2025-11-22T18:01:49)*
  > Even you colleagues at Google have bet on JPEG XL by developing Attention Center Model with an JPEG XL encoder[3]. Please reconsider your decision. ... Either email addresses are anonymous for this group or you need the view member email addresses pe...
- [JPEG XL (JXL) is coming back to Chrome - Coywolf](https://coywolf.com/news/web-development/jpeg-xl-jxl-is-coming-back-to-chrome) *(coywolf.com · 2026-06-14T23:35:34)*
  > Comment from Chromium developer on “JPEG XL decoding support (image/jxl) in blink” 40168998 · Declan Chidlow, a front-end developer, wrote about the ordeal in an article titled “JPEG XL and Google’s war against it.” In it, he said there was an immedi...
- [Converting Images to JPEG XL: The Practical Guide for 2026 \| Mochify](https://mochify.app/guides/converting-images-to-jpeg-xl) *(mochify.app · 2026-09-14T00:00:00)*
  > : Full timeline on Chrome&#x27;s JPEG XL reversal and what it means for production sites in 2026. Should I Optimize My Images Before I Upload Them? : Pre-upload optimization decisions and how modern formats fit into your workflow. Optimizing Hero Ima...
- [Chromium plans to ship JPEG XL image decoding in Blink · freenode](https://freenode.net/article/chromium-plans-to-ship-jpeg-xl-image-decoding-in-blink) *(freenode.net · 2026-08-24T15:11:08)*
  > <strong>The engine will decode image/jxl via the memory-safe jxl-rs Rust library</strong>, matching support already present in Gecko and WebKit.
- [\[dev-platform\] Re: Intent to ship: JPEG XL](http://www.mail-archive.com/dev-platform@mozilla.org/msg01868.html) *(mail-archive.com)*
  > &gt; Chromium sent an intent to ship: &gt; https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI &gt; &gt; On Mon, Aug 24, 2026 at 6:07 AM Timothy Nikkel &lt;[email protected]&gt; wrote: &gt; &gt;&gt; As of Firefox 157 I intend to turn J...
- [r/programming on Reddit: Modern image formats: JXL and AVIF](https://www.reddit.com/r/programming/comments/1ad439r/modern_image_formats_jxl_and_avif) *(reddit.com · 2024-01-28T14:41:19)*
  > JPEG XL is finally useful – Chrome 145 ships native JXL decoder.
- [What Is JPEG XL, and Should You Use It in 2026? — PasteDoc](https://pastedoc.com/guides/what-is-jpeg-xl) *(pastedoc.com · 2026-07-03T00:00:00)*
  > Modern capabilities — high bit depth, wide color gamut, HDR, animation, and progressive decoding.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1086) *(github.com · 2026-07-29T21:39:58)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > https://<strong>chromestatus.com/feature/5114042131808256</strong> · Reactions are currently unavailable · Sign up for free to join this conversation on GitHub. Already have an account? Sign in to comment · No one assigned · needs-atlConten...
- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5114042131808256</strong>?gate=6594362739916800
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > JPEG XL, https://<strong>chromestatus.com/feature/5114042131808256</strong>
- [JPEG-XL is be enabled in Firefox 157 and Chrome 155 by tunetheweb · Pull Request #7565 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/pull/7565) *(github.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > Oh and I&#x27;ve also got them to update the planned version in chromestatus: https://<strong>chromestatus.com/feature/5114042131808256</strong>

## 📚 Platform Documentation & Specifications

- [JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1086) *(github.com)*
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [JPEG-XL is be enabled in Firefox 157 and Chrome 155 by tunetheweb · Pull Request #7565 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/pull/7565) *(github.com)*
- [GitHub - niutech/jxl.js: JPEG XL decoder in JavaScript using WebAssembly (WASM) · GitHub](https://github.com/niutech/jxl.js) *(github.com)*
- [jxl · GitHub Topics · GitHub](https://github.com/topics/jxl?l=javascript) *(github.com)*
- [GitHub - documize/jexcel: jExcel \| the javascript spreadsheet is a very light jquery plugin to add a excel compatible spreadsheet in your application or web based software. Create smarter apps including data tables, grid and spreasheets with this awesome jquery spreadsheet plugin. For live examples, please visit: · GitHub](https://github.com/documize/jexcel) *(github.com)*
- [GitHub - hjanuschka/jxl-rs-polyfill: JPEG XL (JXL) polyfill for browsers - decodes JXL to PNG using WebAssembly · GitHub](https://github.com/hjanuschka/jxl-rs-polyfill) *(github.com)*
- [jxl.js/index.html at main · niutech/jxl.js · ...](https://github.com/niutech/jxl.js/blob/main/index.html) *(github.com)*
- [jxl.js/README.md at main · niutech/jxl.js](https://github.com/niutech/jxl.js/blob/main/README.md) *(github.com)*
- [decoding](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/decoding) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 58 result(s) found across 12 planned queries — **29 verified relevant**
  - `"chromestatus.com/feature/5114042131808256" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"www.iso.org/standard/85066.html" -site:www.iso.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" API` — *Core feature API query* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (3 returned)
  - `"github.com" OR "jxl-rs" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"image/jxl" "picture" "type=" html css example` — *Finds real-world HTML markup and CSS implementations demonstrating picture element fallback configurations for image/jxl.* (1 returned)
  - `"JPEG XL" web performance tutorial responsive images guide` — *Surfaces practical developer tutorials, guides, and performance benchmarks for implementing JPEG XL on the web.* (8 returned)
  - `Blink Chrome "JPEG XL" "jxl-rs" ("Intent to Prototype" OR "Intent to Ship")` — *Tracks official Chromium/Blink announcements, intents, and browser engine adoption related to the pure Rust jxl-rs decoder.* (8 returned)
  - `"JPEG XL" Blink Rust "jxl-rs" (site:news.ycombinator.com OR site:reddit.com/r/programming)` — *Discovers community developer discussions and reactions regarding Blink re-evaluating or re-adding JPEG XL support via Rust.* (8 returned)
  - `"JPEG XL" ("HDR" OR "wide color gamut") web browser support 2024 OR 2025` — *Identifies industry adoption updates, ecosystem sentiment, and current browser capabilities regarding advanced JPEG XL HDR features.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 18 result(s) found — **18 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
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
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5114042131808256)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5114042131808256)
- [Specification](https://www.iso.org/standard/85066.html)
