# JPEG XL decoding support (image/jxl) in blink

> **Report Week:** 2026-W38 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Adds support for decoding JPEG XL (image/jxl) images in Blink using jxl-rs, a memory-safe pure Rust decoder (https://github.com/libjxl/jxl-rs). JPEG XL is a modern image format standardized as ISO/IEC 18181 that offers progressive decoding for improved perceived loading performance, support for wide color gamut, HDR, and high bit depth, and support for animation.

### Motivation

(see Summary)

## Ecosystem Status

- **Momentum:** High (390 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** JPEG XL decoding support (image/jxl) in blink is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [daily.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHol6FMbJvSEL0MYC9_1tXwLAIqJqDDsG78uVH4L89gm6SoQVt_yfUqbgk0ZqzAZjHXYVC35u2SEXqS6bpcV1_2C1ivjFPS2XXKnrYDU2R49290bHWhmUEON0iQE3h-WkvHQE43QGQdIxqmTV2TbcalsAgCneOKkhJB2aD3z8y3Vse4UHGIkOikz3CSVA==) *(vertexaisearch.cloud.google.com)*
  > JPEG XL Is Finally Getting Real Cross-Browser Support Collection Subscribe JPEG XL Is Finally Getting Real Cross-Browser Support # rust # firefox Last updated 14h ago • 5 sources Questions this post answers Will Firefox support JPEG XL images by defa...
- [freenode.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQERBQz1HhJmgRebm80yt1PuD2TyflSbpHQYjvEfSSGjeL4r7bgfG_ComAkXtS49HjXzpJYPT7GfcLMTjkDLmisuIxfjuBrW-OZvPuuZfVqxakxpy3zYaWjXLsYo1DUZj0_QdshTufAZOJDC1KAyIf6VHgcESp2aakswRwDvcyBUxSQXD78KAopK) *(vertexaisearch.cloud.google.com)*
  > Chromium plans to ship JPEG XL image decoding in Blink · freenode free node Web Platform By ampersand August 24, 2026 Chromium plans to ship JPEG XL image decoding in Blink The engine will decode image/jxl via the memory-safe jxl-rs Rust library, mat...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEfmwMKvp64u0qrYaDq3bz3h-7zk3skBx12MlZNOF77TX4KSFjMzCAWvZ5N-APn7uw34ZY1NaxOBNz_QkmH5O8VJiQzxcri0uX_dcxY4JUwKqaBr5RppcLTp9OYTjauqdQnTrwh25qYmPieuvKQWQ==) *(vertexaisearch.cloud.google.com)*
  > Intent to Ship: JPEG XL - Mozilla Hacks - the Web developer blog Hac k s Intent to Ship: JPEG XL By Jake Archibald Posted on August 24, 2026 in Uncategorized It isn&#8217;t often that new image formats land in browsers. In the early 2000s we had JPEG...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG9b5h9gnUJXsA0pX0YiWBHN04s-pqWko4KsMKVfCuvmpVzQN7PNOmWjsv0ABnFnwxC3NvEMa3W-JPaebASc-CAQTQjZKqQbjxV0og2i0uQnF8ccybJYvm1YimqFoRDd76_xw7cZmOUl6v-Ii8lE97mfqBJDa6Kt109R8XbxVWfX_12oI_AkA==) *(vertexaisearch.cloud.google.com)*
  > Intent to Prototype: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: JPEG XL decodi...
- [januschka.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFlRuYNtOcOHO1sWdS_9znlCn6AtlFhRfVNthIIVBmzTmd5yUU7s5Tc1BZDEySWiiEyQ3OpvGGVT4-FadsFF5J3TTRMInzcznJCMPsFghMMINaGHayBpLbc17TV_AK4lYAOtB5TyjBngVUy8t2u) *(vertexaisearch.cloud.google.com)*
  > Integrating JPEG XL in Chromium with jxl-rs - Helmut Januschka Integrating JPEG XL in Chromium with jxl-rs ⚡ Chromium 🔧 Rust / C++ 👤 Helmut Januschka Why Chromium selected a Rust decoder, how it was integrated, and how it reached default enablement...
- [freetoolonline.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHPNLQamj2-NAOrmrtk6lJE2LcAYJYhrX70WziLcQ_lwcIiv4X6SzaM_z440vqU8-825Gy_pmcwWby8h_LILh0mcdS12OLoTGsYHCOah2aLBF2tLawmQapZZt81uCOe9fe4sDj3_E0iQvsRYXAFDSxBH6juCijwv2M=) *(vertexaisearch.cloud.google.com)*
  > JPEG XL Browser Support 2026 - Chrome, Firefox, Safari - Free Tool Online Donate Buy Me A Coffee FreeToolOnline JPEG XL Browser Support 2026 - Chrome, Firefox, Safari Disable Ads Initializing, please wait a moment JPEG XL returns to Chrome and Firefo...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGhWsO7xIzQJUtDLQ9G5AszM6xHNwvUeZp_BcdfKXp2EdP0wHQneZnO6ny2GIDg0MXfgNtm1BfdUefSdR2vaTA7hUQ6lQDvTRcl6OrScPZ-RG10lN25rvDqRUnQxAV20io=) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEHKF637QUDvQ5-huhX1L0l73QnNwgUEib6JVFkbdeBFmeUUbomugn9DmRUpVlecrVWrwNXDjm4R8ZKx07cLrPwXcQl8HnktAA1nbuIs1Og_ocrHmUEJSWWIeqaQ5ScYM4OcRsahJKUSqCu3h4a5ga-DwOha8yXvYLXZdN_vJrpaZMncJMC_yuwxP0fdbSvBVXTatbUZ2zRQg==) *(vertexaisearch.cloud.google.com)*
  > A coordinated milestone across major browser engines resulted in the formal **"Intent to Ship: JPEG XL decoding support (image/jxl) in blink"** alongside Firefox’s intent to ship the format by default.   The primary catalyst for this turnaround is **
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQETrF9fLYDDSm-E5uwRFOlt2-eUUfIk7plE5ZzzWmdHr_RxB_1ZIUHwFM_pDaYTXB49B2E39gg1H6b1kPwo5QXfAxb30S5ZyIFGvm1F7GM62WcYNT0vZu_Yxg==) *(vertexaisearch.cloud.google.com)*
  > A coordinated milestone across major browser engines resulted in the formal **"Intent to Ship: JPEG XL decoding support (image/jxl) in blink"** alongside Firefox’s intent to ship the format by default.   The primary catalyst for this turnaround is **
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE0SP8t0QQ1O9Vs11Fl21L6PCH68xZieyT0qazAU5W4FdnP-xl29JFuJqqzMEjB0LnMoslT_vW3D4yNH6uz7bOzZyoZuaKrzwtP3TOIsxQie509bkort5x6igYoZcS8MqLLtnGOa7y9sqsb7d-dOhnWAr_d9fyeWM3l1su11inCMEM78TC9xwHEmnl8pAqhhw==) *(vertexaisearch.cloud.google.com)*
  > A coordinated milestone across major browser engines resulted in the formal **"Intent to Ship: JPEG XL decoding support (image/jxl) in blink"** alongside Firefox’s intent to ship the format by default.   The primary catalyst for this turnaround is **
- [ycombinator.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGnP_b23xqD-TABXnZUZANOYDPuuNQnDaEXcXNH4bSKuFd4ZUX9BT8POM8CET-Ilcq8UCAx_4j_3K2j_MzCZrVo5lwTEekowM3E1TrzPE0ddtjQdLJRcMPXQk4-p2Dp5zcTBw==) *(vertexaisearch.cloud.google.com)*
  > A coordinated milestone across major browser engines resulted in the formal **"Intent to Ship: JPEG XL decoding support (image/jxl) in blink"** alongside Firefox’s intent to ship the format by default.   The primary catalyst for this turnaround is **
- [ycombinator.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFyhDudrzecwvl-3sMvZ-BS3lkQ89A5MqUAI1fYSfNuf60bebh_fOyuOk89zmkwOar7M3ynI6dJelsrPKiG3xIVVxw3LN-E1Ju2a2OLOncxoS1tReY7kLKndzjbOSxG2_chY2g=) *(vertexaisearch.cloud.google.com)*
  > A coordinated milestone across major browser engines resulted in the formal **"Intent to Ship: JPEG XL decoding support (image/jxl) in blink"** alongside Firefox’s intent to ship the format by default.   The primary catalyst for this turnaround is **
- [bsky.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEpXoV57rnJhydrWpjs93zVN52ME4-05d5jp5nqC6nnv5a2Q6IMnYoLnpIwqlh0yJjdijxnNSkuaQ0vj21cxlsR87RWZNuNwXMfbMbINnRfHWXVV6EsrMCAEwg=) *(vertexaisearch.cloud.google.com)*
  > A coordinated milestone across major browser engines resulted in the formal **"Intent to Ship: JPEG XL decoding support (image/jxl) in blink"** alongside Firefox’s intent to ship the format by default.   The primary catalyst for this turnaround is **
- [tonisagrista.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF7bCHtfebV8CbD2PV634Y38EiozO2oXBFaTT7nj433sNXinXaFsvgrGVWgN2ezGIqiNE7lii3ZJxzQ_vbT7Z96OWBZNYsWSHcXV9pCt2xQGYe5v6aMZCWFysSf3UPBWFWskPZr-23F6mMtgKQ0aQ==) *(vertexaisearch.cloud.google.com)*
  > A coordinated milestone across major browser engines resulted in the formal **"Intent to Ship: JPEG XL decoding support (image/jxl) in blink"** alongside Firefox’s intent to ship the format by default.   The primary catalyst for this turnaround is **
- [cyberinsider.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGwCgdBNibvjprb419dC1TI-26z66qy2WESA2cxeVhDc0ksng0SfPaRYcJXuQePXNfMoVW444yI68wTYjEVfsPH9y3Pac9OnstmuoTO47D4diOXDS-KQ0504H55uwhXHYsW9jfz1a4Z2TV38xHcYCptKW-x98TwKcn0Z8Iq5GLSv7t9IAEEBIDLiM96Vg==) *(vertexaisearch.cloud.google.com)*
  > A coordinated milestone across major browser engines resulted in the formal **"Intent to Ship: JPEG XL decoding support (image/jxl) in blink"** alongside Firefox’s intent to ship the format by default.   The primary catalyst for this turnaround is **
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHu9UVZ-ZiBoEzL_C731tIf3hcugrHFcZJZvTkHj2gK5sUHUa5bboNOV9B93nlMyHSYU5z6CzZ17SZXXuS40c-3Meln6R3ukWyH77L6QkI7Sf5_-cexBEScr0XOMLING0okPxn8JCc7LDXyVbem3fYCulqAt7t3wSEcJJaSdDv6GDlC_u9LRRUF6GjNYVQVP3M=) *(vertexaisearch.cloud.google.com)*
  > A coordinated milestone across major browser engines resulted in the formal **"Intent to Ship: JPEG XL decoding support (image/jxl) in blink"** alongside Firefox’s intent to ship the format by default.   The primary catalyst for this turnaround is **
- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5114042131808256</strong>?gate=6594362739916800
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/WjCKcBw219k/m/NmOyvMCCBAAJ) *(groups.google.com)*
  > As for the WebAssembly implementation, the jxl_dec.wasm file is 821 KB [3] (290 KB gzipped) and it can only run after DOM tree is ready and JS is parsed, so it will never be as performant as the native JPEG XL decoder and it will not work when JS is ...
- [JPEG XL - Wikipedia](https://en.wikipedia.org/wiki/JPEG_XL) *(en.wikipedia.org · 2026-09-10T18:28:28)*
  > 1 2 3 &quot;Issue 1178058: <strong>JPEG</strong> <strong>XL</strong> <strong>decoding</strong> <strong>support</strong> (<strong>image</strong>/<strong>jxl</strong>) <strong>in</strong> <strong>blink</strong> (tracking bug)&quot;. bugs.chromium.org. ...
- [Ready for Trial: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/NttEYOmuB5U/m/Hqojb5WdAwAJ) *(groups.google.com)*
  > JPEG XL is a new royalty-free image ... PIK and Cloudinary&#x27;s FUIF, and is in the final steps of standardization with ISO. <strong>This feature enables image/jxl decoding support in the blink renderer</strong>...
- [Re: \[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17258.html) *(mail-archive.com)*
  > On Mon, Aug 24, 2026 at 2:15 PM ... https://www.iso.org/standard/85066.html &gt;&gt; &gt;&gt; *Summary* &gt;&gt; Adds support for decoding JPEG XL (image/jxl) images in Blink <strong>using &gt;&gt; jxl-rs</strong>, a memory-safe pure Rust decoder (ht...
- [\[blink-dev\] Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17256.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://www.iso.org/standard/85066.html Summary Adds support for decoding JPEG XL (image/jxl) images in Blink using <strong>jxl-rs</strong>, a memory-safe pure Rust decoder (https://github.com/libjxl/<s...
- [\[blink-dev\] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17266.html) *(mail-archive.com)*
  > &#x27;Luca Versari&#x27; via blink-dev Mon, ... &gt; Adds support for decoding JPEG XL (image/jxl) images in Blink using &gt; <strong>jxl-rs, a memory-safe pure Rust decoder (https://github.com/libjxl/jxl-rs).</strong>...
- [JPEG XL decoding support (image/jxl) in blink](https://chromestatus.com/feature/5114042131808256) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [JPEG XL Image Encoding](https://www.loc.gov/preservation/digital/formats/fdd/fdd000536.shtml) *(loc.gov)*
  > Issue 1178058: JPEG XL decoding support (image/jxl) in blink (tracking bug) (https://bugs.chromium.org/p/chromium/issues/detail?id=1178058#c84).
- [Enable JPEG-XL (.jxl) Image Support in Ubuntu 24.04 & 22.04 \| UbuntuHandbook](https://ubuntuhandbook.org/index.php/2024/06/enable-jxl-support-ubuntu) *(ubuntuhandbook.org)*
  > This tutorial shows how to enable .jxl file support for system image viewer, GIMP, and some other apps in Ubuntu 24.04, Ubuntu 22.04, Ubuntu 20.04, and even Ubuntu 18.04. JPEG-XL is a new image format by JPEG committee. It supports both lossy and los...
- [JPEG-XL Viewer — Open .jxl Files Free with XnView MP](https://www.xnview.com/en/jpeg-xl-viewer) *(xnview.com)*
  > JPEG-XL (.jxl) is a next-generation image format standardized as ISO/IEC 18181 (2021-2022). <strong>XnView MP reads and displays JPEG-XL natively on Windows, macOS and Linux, with no plugin or external codec required</strong>.
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/WjCKcBw219k/m/xX-NnWtTBQAJ) *(groups.google.com)*
  > If JPEG XL was implemented in Chromium, it would quickly boost adoption by CDNs and replace JPEG in a short time thanks to lossless JPEG transcoding capability. So what was the real rationale for dropping JPEG XL support? As for the WebAssembly imple...
- [\[blink-dev\] Re: Intent to Ship: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg17338.html) *(mail-archive.com)*
  > &gt; I personally have a great use of JXL lossless images as I have huge &gt; archives of lossless images on my personal home server, but considering I &gt; like to view most of those images in browsers on my devices, I have been &gt; blocked from co...
- [Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://archive.ph/up04r) *(archive.ph · 2025-11-22T18:01:49)*
  > Even you colleagues at Google have bet on JPEG XL by developing Attention Center Model with an JPEG XL encoder[3]. Please reconsider your decision. ... Either email addresses are anonymous for this group or you need the view member email addresses pe...
- [Re: \[blink-dev\] Intent to Prototype: JPEG XL decoding support (image/jxl) in blink](https://www.mail-archive.com/blink-dev@chromium.org/msg11449.html) *(mail-archive.com)*
  > *Search tags &gt; &gt; &gt; *jxl &lt;https://www.chromestatus.com/features#tags:jxl&gt;*TAG review &gt; &gt; &gt; *Not applicable for image decoders*TAG review status &gt; &gt; &gt; *Not applicable*Risks &gt; &gt; Interoperability and Compatibility &...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5114042131808256</strong>?gate=6594362739916800

## 📚 Platform Documentation & Specifications

- [GitHub - niutech/jxl.js: JPEG XL decoder in JavaScript using WebAssembly (WASM) · GitHub](https://github.com/niutech/jxl.js) *(github.com)*
- [GitHub - hjanuschka/jxl-rs-polyfill: JPEG XL (JXL) polyfill for browsers - decodes JXL to PNG using WebAssembly · GitHub](https://github.com/hjanuschka/jxl-rs-polyfill) *(github.com)*
- [jxl · GitHub Topics · GitHub](https://github.com/topics/jxl?l=javascript) *(github.com)*
- [GitHub - documize/jexcel: jExcel \| the javascript spreadsheet is a very light jquery plugin to add a excel compatible spreadsheet in your application or web based software. Create smarter apps including data tables, grid and spreasheets with this awesome jquery spreadsheet plugin. For live examples, please visit: · GitHub](https://github.com/documize/jexcel) *(github.com)*
- [jxl.js/ at main · niutech/jxl.js](https://github.com/niutech/jxl.js?search=1) *(github.com)*
- [jxl.js/index.html at main · niutech/jxl.js · ...](https://github.com/niutech/jxl.js/blob/main/index.html) *(github.com)*
- [Intent to Ship: JPEG XL – Mozilla Hacks - the Web developer blog](https://hacks.mozilla.org/2026/08/intent-to-ship-jpeg-xl) *(hacks.mozilla.org)*
- [decoding](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/decoding) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 32 result(s) found across 7 planned queries — **22 verified relevant**
  - `"chromestatus.com/feature/5114042131808256" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"www.iso.org/standard/85066.html" -site:www.iso.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" API` — *Core feature API query* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (3 returned)
  - `"github.com" OR "jxl-rs" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"JPEG XL decoding support (image/jxl) in blink" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **16 verified relevant**
- **Twitter / X API v2:** *found 6 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 65 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5114042131808256)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5114042131808256)
- [Specification](https://www.iso.org/standard/85066.html)
