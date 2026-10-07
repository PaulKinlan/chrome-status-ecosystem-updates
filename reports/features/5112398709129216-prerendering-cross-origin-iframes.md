# Prerendering cross-origin iframes

> **Report Week:** 2026-W40 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Prerenders cross-origin iframes with an opt-in response header.    Browsers will now prerender all cross-origin frames if the top-level frame's HTTP response includes the Supports-Loading-Mode: prerender-cross-origin-frames.

### Motivation

By default, navigational prerendering delays the loading of all cross-origin iframes until the referring page activates the prerendered page.

However, there are some cases where cross-origin iframes are particularly important to an application, such that delaying them negates many of the benefits of prerendering.

## Ecosystem Status

- **Momentum:** High (465 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chrome has enabled cross-origin iframe prerendering by default via the opt-in 'Supports-Loading-Mode: prerender-cross-origin-frames' HTTP response header. This addresses a major limitation where navigational prerendering previously deferred all cross-origin frame loads until user activation, stalling critical embedded UI. However, the broader Speculation Rules ecosystem remains Chromium-driven, with other browser engines yet to implement native prerendering.

### Recommendations
- Actionable Advice: Adopt the header progressively on top-level pages and parent iframes hosting essential cross-origin embeds, as unsupported browsers safely ignore the directive with zero penalty. Before deploying, verify that cross-origin frame endpoints handle pre-activation lifecycles appropriately via the document.prerendering API to avoid wasted analytics or side-effects.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (W3C TAG): Latest discussion from @yoichio: "Still in discussion, but we lean to allow the nesting with some restriction. Roughly: - Allow if the nested iframe's origin is same to parent frame - ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Prerendering cross-origin iframes](https://github.com/WebKit/standards-positions/issues/636) [open]
- **Mozilla:** [Prerendering cross-origin iframes](https://github.com/mozilla/standards-positions/issues/1376) [open]
- **W3C TAG:** [Incubation: Prerendering cross-origin iframes](https://github.com/w3ctag/design-reviews/issues/1207) [closed]

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGrpFpeYuTuQymrRffX9G7S5dvjgNqiWZ_DkiIMJaYN6Q6-N5jp42_xTVQZhUSac1OeyZW-XuZK-Gbfm4i_tHXK3jH8sZ28QX1N2x6IroDj28jPO35PfYn4nZrQSDqj1sjOhaXxOaoI) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGLrS1VDObu8nq8qY-09dDLI6jqbn5IYUOLXZzmGSWU-b6VoyZUvZqiwyXX_ishPoRYKWacSb0fGenyJsKRrWHHYrLFItC_bZ2Aj6zfzA42BR1ALq5ulhcOZCLmof_QnvA2tw==) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEGedg-3oaKAvcaU8GO3g15PjMUOEZEY1hgZeuchp6xXtSCLOw1HKTEXZscBJZ7Mr3kMJr-apTIdOUR9cmj0-ua7ooRemEFfehTS_fk2zUpa6nL_jFU9vJ4xuYaLiQa6VyTx2q3FfOHFVGRfreeVif0zy8aJg==) *(vertexaisearch.cloud.google.com)*
  > Prerender pages in Chrome for instant page navigations | Web Platform | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG7_6mfllh0mn5rutChVn0GeSFw_CdFbrolY0gdmXZwPex56wyWB_Nc1AzfBBgStd0TNN66BGsBpktSVgysICsIPzQPIINnyBQUDxnxyE5WtEl35ITqS388KRIo4B_aLKwhZpFWf4BdD0erG6rk62-TR36cFrXr3_s0VRytKSmUVG0rhQ==) *(vertexaisearch.cloud.google.com)*
  > Guide to implementing speculation rules for more complex sites | Web Platform | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHzfwuHbUYWXS2C27ctl4kqSQbyUIosGS3koihupF0YVycBxpr5Rlns7aGsFmGLAj3HBQ1HqGkRDsBZu3hVMyel9ZZXaK5D7kpP4NFh3PvFf_NrumdOwHIfoYkTcHJ6FfL0EZPVM2hEVLVLosTs) *(vertexaisearch.cloud.google.com)*
  > Prerendering cross-origin iframes · Issue #636 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGEk7hY-P8EKrV1A6QEFfzjKYbU8erJ5Ioua_q2ENifAuphv5HKZ7XYc_q9F-NbiV3qjfWLiYMSxSTs2FdvtHoVOtYKIOmKO1JtOWCXyF0MXEtn_OtSH35nVTRFYF7JoaHfDyo=) *(vertexaisearch.cloud.google.com)*
  > Chrome 147 | Release notes | Chrome for Developers דילוג לתוכן הראשי / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 –...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEI3Dq774iKDhz-D1EJL0bsLa5z7t1LHGBJgjHvzauyq8D8-AvaubLgoA3ZuMkbyC9cMEldEcgu55MUu-x4jCR-KS64V0exBEWyrMukolb0I9LiaS4OP1IKdROviKk7qoz-ZqGy8jowdLWdiYaBYyruG_3EWEcisDKF8FdFI7g=) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge Origin Trials Skip to main content Sign-in to GitHub header Origin Trials Origin trials grant you access to experimental features while they are in design. Trials are open to all developers and are limited in duration. Active Trials Co...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFhsX7BwI1yKCCGpraPy6zbw7OPSqiV1CFFVxQ64IIHT86aARTBVgrkLpvkevq_vVFSNunSewV8y5p-zqvOTkb5UhLjxeMD82ITFI9s6X8RE2X9SXHEdhNWjebQQTs3yKa086yfthU-dlbC0S3l9zkGbSFXJk7V63s5cZRNG1KbHSy2MAQ=) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge 148 web platform release notes (May 2026) - Microsoft Edge Developer documentation | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantag...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQETGxa6NTOfzrB6HyQ3XgCwCxT04Du-Zkrhv6or1ng1uO2Ak93codC21aqQgjGvOpZQfbvwFVcatjbfd_y0xDd8i45FE2OdTFx3QL3DqzLcP6sDAeqiXwogsbBCx79Pb1LaZWae8c1r2jTIZJtSTRFS93djPWsD4hAciYGhbeX9bTgISp7R6M5jDEHa6tvtAg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Prerendering cross-origin iframes"** is an enhancement to the Web Platform's prerendering architecture (powered by the Speculation Rules API / Prerender2).   * **The Problem:** By default, navigational prerendering bloc
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHmEvgFpHEG6zq-xLTTusDqoHJweJBhu5w1sEiqo2nvgLMsS3a0oDmEizB80VJxDXrSYa5G7ARG7QX6xKFJ-ESN0twcl5_ya2TVDx2PFrTrFNKOnxysR9ji0yBwyt3T_pq_lctOuvNI2c8wLxO8) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Prerendering cross-origin iframes"** is an enhancement to the Web Platform's prerendering architecture (powered by the Speculation Rules API / Prerender2).   * **The Problem:** By default, navigational prerendering bloc
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGyfdovlL_jRsF8izMMB0dGnBbVfxC1cSfW6cAUQoi8MoFZSyhHE1-bXdhwK9zr5lSx7CnSgpeF5o86vJEtxRi-eYggDYJkEay7okT7HNTX7BCpOrvMTPLKvgnRY9PwpYnlSzWgmImxT6PMtooFGPHjtlOijm5HqCCbjJRQM4_RBDo=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Prerendering cross-origin iframes"** is an enhancement to the Web Platform's prerendering architecture (powered by the Speculation Rules API / Prerender2).   * **The Problem:** By default, navigational prerendering bloc
- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM) *(groups.google.com)*
  > https://<strong>chromestatus.com/feature/5112398709129216</strong>?gate=5179872041369600 · This intent message was generated by Chrome Platform Status. unread, Sep 2, 2025, 7:49:44 PM9/2/25 ·  ·  ·  · Reply to author · Sign in to reply to author ·...
- [Intent to Experiment: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyGHPL8Z6IY) *(groups.google.com)*
  > https://<strong>chromestatus.com/feature/5112398709129216</strong>?gate=5126116666900480 · Links to previous Intent discussions · Intent to Prototype: https://groups.google.com/a/chromium.org/d/msgid/blink-dev/68b670ba.050a0220.270bc4.0593.GAE@google...
- [\[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg16919.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md Specification https://wicg.github.io/nav-speculation/prerendering.html Summary <strong>Prerenders cross-origin iframes with an opt-in response header</st...
- [Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17240.html) *(mail-archive.com)*
  > &gt; &gt; On Thu, Jul 2, 2026 at 1:54 ... &gt;&gt; https://wicg.github.io/nav-speculation/prerendering.html &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>Prerenders cross-origin iframes with an opt-in response header</strong>....
- [\[blink-dev\] Intent to Prototype: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg14520.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md Specification https://wicg.github.io/nav-speculation/prerendering.html Summary <strong>Prerenders cross-origin iframes with an opt-in response header</st...
- [\[blink-dev\] Intent to Experiment: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg16200.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md Specification https://wicg.github.io/nav-speculation/prerendering.html Summary <strong>Prerenders cross-origin iframes with an opt-in response header</st...
- [\[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg16203.html) *(mail-archive.com)*
  > On Thursday, March 26, 2026 at ... Specification &gt; &gt; https://wicg.github.io/nav-speculation/prerendering.html &gt; &gt; Summary &gt; &gt; <strong>Prerenders cross-origin iframes with an opt-in response header</strong>....
- [Re: \[blink-dev\] Intent to Prototype: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg14530.html) *(mail-archive.com)*
  > On Tue, Sep 2, 2025 at 12:21 AM ... Specification https://wicg.github.io/nav-speculation/prerendering.html &gt; &gt; Summary &gt; &gt; <strong>Prerenders cross-origin iframes with an opt-in response header</strong>....
- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM/m/q_EQ5ceXHgAJ) *(groups.google.com)*
  > Prerenders cross-origin iframes with an opt-in response header.
- [Prerendering cross-origin iframes \[440387014\]](https://issues.chromium.org/issues/440387014) *(issues.chromium.org)*
  > Sign in
- [Same-Origin Policy: Web Security Fundamentals \| by StatusCode \| Medium](https://status-code.medium.com/same-origin-policy-web-security-fundamentals-091a82126e63) *(status-code.medium.com · 2025-05-12T11:27:45)*
  > CORS is a mechanism that extends the Same-Origin Policy to enable legitimate cross-origin requests. It <strong>allows servers to explicitly opt-in to allowing certain cross-origin requests by sending specific HTTP headers</strong>.
- [Loading CSS from different domain, and accessing it from Javascript - Stack Overflow](https://stackoverflow.com/questions/5739436/loading-css-from-different-domain-and-accessing-it-from-javascript) *(stackoverflow.com)*
  > Finetuning each not only gives ... the biggest costs of running a website. ... CORS (cross-origin resource sharing) is a standard that allows sites to opt-in to access of resources cross-origin. I do not know if Firefox applies this to CSS yet; I kno...
- [Understanding Same Origin Policy & CORS – Thibault Jan Beyer](https://blog.thibaultjanbeyer.com/cors-cross-origin-web) *(blog.thibaultjanbeyer.com)*
  > WebGL textures. Images, Videos, Scripts and Links when the crossorigin attribute is set. <strong>CORS allows a site to “opt-in” to weaken SOP and allow external pages to access and read data</strong>.
- [Understanding CORS and SVG — Using SVG with CSS3 and HTML5](https://oreillymedia.github.io/Using_SVG/extras/ch10-cors.html) *(oreillymedia.github.io)*
  > If you want to use SVG &lt;use&gt; references to an asset file that you host on a different web domain then your main web pages, the only solution (currently) is JavaScript. A JavaScript XMLHTTPRequest or fetch request can download the file—with cros...
- [A guide to enable cross-origin isolation \| Articles \| web.dev](https://web.dev/articles/cross-origin-isolation-guide) *(web.dev · 2021-02-09T00:00:00)*
  > After you have determined which ... On cross-origin resources such as images, scripts, stylesheets, iframes, and others, <strong>set the Cross-Origin-Resource-Policy:cross-origin header</strong>....
- [Microsoft Edge 148 web platform release notes (May 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/148) *(learn.microsoft.com)*
  > <strong>This origin trial prerenders cross-origin iframes by using an opt-in response header</strong>.
- [Intent to Ship: Same-origin prerendering triggered by the speculation rules API](https://groups.google.com/a/chromium.org/g/blink-dev/c/EdW7O8yG7Jc) *(groups.google.com)*
  > WebKit: WebKit already ships URL-bar triggered prerendering, but not any APIs for letting pages know about it, and it&#x27;s unclear what strategy they are using to prohibit disruptive behaviors for prerendered pages. We have reached out for a formal...
- [PWA not working with Angular Pre Rendering - Stack Overflow](https://stackoverflow.com/questions/64995099/pwa-not-working-with-angular-pre-rendering) *(stackoverflow.com)*
  > 1 Service worker registration failed -- PWA Not working after Universal Prerendering implementation in Angular 9
- [Make your website "cross-origin isolated" using COOP and COEP \| Articles \| web.dev](https://web.dev/articles/coop-coep) *(web.dev · 2020-04-13T00:00:00)*
  > Once you&#x27;ve confirmed that everything works and that all resources can be successfully loaded, switch the Cross-Origin-Embedder-Policy-Report-Only header to the Cross-Origin-Embedder-Policy header with the same value to all documents including t...
- [Chrome 147 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/147) *(developer.chrome.com)*
  > <strong>Browsers now prerender all cross-origin frames if the top-level frame&#x27;s HTTP response includes Supports-Loading-Mode: prerender-cross-origin-frames</strong>.
- [Intent to Ship: Prerender2 for Desktop](https://groups.google.com/a/chromium.org/d/msgid/blink-dev/CAA9vRHy7_o1ftcTz2-pC5rOPtZRhas5PGLw4HJ--v+ewkvcoww@mail.gmail.com) *(groups.google.com)*
  > Note that we are not shipping cross-origin prerendering, which allows a web page to prerender another page on a different origin. ... All issues have been addressed.
- [Intent to Extend Experiment (2nd): Same-origin prerendering triggered by the speculation rules API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Kpp6uJJRrqI/m/GTo_aF0qEQAJ) *(groups.google.com)*
  > <strong>To evaluate how the prerendering feature works on real sites before shipping it by default</strong>. This is a large feature and it&#x27;s risky to ship without trying it first on real sites. We will be evaluating performance, stability, and ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > https://<strong>chromestatus.com/feature/5112398709129216</strong>?gate=5179872041369600 · This intent message was generated by Chrome Platform Status. unread, Sep 2, 2025, 7:49:44 PM9/2/25 ·  ·  ·  · Reply to author · Sign in to reply t...
- [Intent to Experiment: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyGHPL8Z6IY) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > https://<strong>chromestatus.com/feature/5112398709129216</strong>?gate=5126116666900480 · Links to previous Intent discussions · Intent to Prototype: https://groups.google.com/a/chromium.org/d/msgid/blink-dev/68b670ba.050a0220.270bc4.0593....
- [Prerendering cross-origin iframes · Issue #34 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/34) *(github.com · 2026-09-21T08:09:46)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > 🔗 https://<strong>chromestatus.com/feature/5112398709129216</strong>
- [\[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg16919.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > Explainer https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md Specification https://wicg.github.io/nav-speculation/prerendering.html Summary <strong>Prerenders cross-origin iframes with an opt-in response ...
- [Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17240.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > &gt; &gt; On Thu, Jul 2, 2026 at 1:54 ... &gt;&gt; https://wicg.github.io/nav-speculation/prerendering.html &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>Prerenders cross-origin iframes with an opt-in response header</strong>....
- [\[blink-dev\] Intent to Prototype: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg14520.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > Explainer https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md Specification https://wicg.github.io/nav-speculation/prerendering.html Summary <strong>Prerenders cross-origin iframes with an opt-in response ...
- [\[blink-dev\] Intent to Experiment: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg16200.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > Explainer https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md Specification https://wicg.github.io/nav-speculation/prerendering.html Summary <strong>Prerenders cross-origin iframes with an opt-in response ...
- [\[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg16203.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > On Thursday, March 26, 2026 at ... Specification &gt; &gt; https://wicg.github.io/nav-speculation/prerendering.html &gt; &gt; Summary &gt; &gt; <strong>Prerenders cross-origin iframes with an opt-in response header</strong>....
- [Re: \[blink-dev\] Intent to Prototype: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg14530.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > On Tue, Sep 2, 2025 at 12:21 AM ... Specification https://wicg.github.io/nav-speculation/prerendering.html &gt; &gt; Summary &gt; &gt; <strong>Prerenders cross-origin iframes with an opt-in response header</strong>....

## 📚 Platform Documentation & Specifications

- [Prerendering cross-origin iframes · Issue #34 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/34) *(github.com)*
- [Prerendering cross-origin iframes · Issue #1474 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1474) *(github.com)*
- [Prerendering cross-origin iframes · Issue #1376 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1376) *(github.com)*
- [Prerendering cross-origin iframes · Issue #636 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/636) *(github.com)*
- [Cross-Origin Resource Sharing (CORS) - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) *(developer.mozilla.org)*
- [crossorigin HTML attribute - HTML \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin) *(developer.mozilla.org)*
- [crossorigin HTML attribute - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/crossorigin) *(developer.mozilla.org)*
- [On abusing cross-origin prerendering to incriminate a user subject to network monitoring · Issue #155 · WICG/nav-speculation](https://github.com/WICG/nav-speculation/issues/155) *(github.com)*
- [Window: crossOriginIsolated property](https://developer.mozilla.org/en-US/docs/Web/API/Window/crossOriginIsolated) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 12 planned queries — **30 verified relevant**
  - `"chromestatus.com/feature/5112398709129216" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"wicg.github.io/nav-speculation/prerendering.html" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Prerendering cross-origin iframes" API` — *Core feature API query* (8 returned)
  - `"Prerendering cross-origin iframes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"cross-origin" OR "opt-in" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Prerendering cross-origin iframes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Prerendering cross-origin iframes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"Supports-Loading-Mode" "prerender-cross-origin-frames"` — *Finds technical specifications, exact HTTP header configurations, and server response code examples opting into cross-origin iframe prerendering.* (8 returned)
  - `"prerender-cross-origin-frames" (speculation rules OR prerender) (guide OR tutorial OR howto)` — *Surfaces developer guides and optimization tutorials on integrating cross-origin iframe prerendering with the Speculation Rules API.* (5 returned)
  - `"prerender-cross-origin-frames" ("Intent to Ship" OR "Chrome Platform Status" OR "Chromium")` — *Tracks browser vendor implementation milestones, Intent to Ship threads, and Chromium rollout timelines for the feature.* (2 returned)
  - `"prerender-cross-origin-frames" (site:github.com OR site:groups.google.com/a/chromium.org) issues OR discussions` — *Locates web developer debates, standards discussions, and issue tracker feedback regarding security, privacy, and performance impacts of prerendering iframes.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 2 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5112398709129216)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5112398709129216)
- [Specification](https://wicg.github.io/nav-speculation/prerendering.html)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/440387014)
