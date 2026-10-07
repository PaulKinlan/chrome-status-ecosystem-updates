# Deprecate and remove XSLT

> **Report Week:** 2026-W41 | **Milestone:** Chrome 152 | **Category:** Origin trial

## Overview

\[XSLT v1.0\](https://www.w3.org/TR/xslt-10/), which all browsers adhere to, was standardized in 1999. In the meantime, XSLT has evolved to v2.0 and v3.0, adding features, and growing apart from the old version frozen into browsers. This lack of advancement, coupled with the rise of JavaScript libraries and frameworks that offer more flexible and powerful DOM manipulation, has led to a significant decline in the use of client-side XSLT. Its role within the web browser has been largely superseded by JavaScript-based technologies, such as JSON and React.  Chromium uses the \*\*libxslt\*\* library to process these transformations, and \[libxslt was unmaintained\](https://discourse.gnome.org/t/stepping-down-as-libxslt-maintainer/27615) for ~6 months of 2025. Libxslt is a complex, aging C codebase of the type notoriously susceptible to memory safety vulnerabilities like buffer overflows, which can lead to arbitrary code execution. Because client-side XSLT is now a niche, rarely-used feature, these libraries receive far less maintenance and security scrutiny than core JavaScript engines, yet they represent a direct, potent attack surface for processing untrusted web content. Indeed, XSLT is the source of several recent high-profile security exploits that continue to put browser users at risk.   For these reasons, Chromium (along with both other browser engines, Gecko and WebKit) plans to deprecate and remove XSLT from the web platform. The modern web is powered by three major browser engines: \[Blink\](https://www.chromium.org/blink/) (Chromium), \[Gecko\](https://firefox-source-docs.mozilla.org/overview/gecko.html) (Firefox), and \[WebKit\](https://webkit.org/) (Safari). They interpret code to render pages.   For more details, see this \[Chrome for Developers article\](https://developer.chrome.com/docs/web-platform/deprecating-xslt).  From Chrome 158, XSLT will stop functioning on Stable releases.

### Motivation

Security risks for all users outweigh the very small usage of this feature on the open web.

Usage of XSLTProcessor (https://chromestatus.com/metrics/feature/timeline/popularity/79) is fairly volatile, registering somewhere between 0.01% and 0.1% of page loads, averaging around 0.05% over time. These numbers are above the typical 0.001% deprecation threshold. Again, we feel that the increased potential for breakage is balanced by the reduced security risk to 100% of Chromium users. And we are doing everything we can to mitigate this breakage and be proactive in reaching out to potentially affected sites and particularly libraries that might account for significant chunks of the overall usage. In addition, several sites we surveyed that use XSLTProcessor have feature detection code with fallbacks to JS libraries like Saxonica. Of the ~220 sites we've surveyed so far, roughly 72% of them are still functional even with XSLT disabled.

The usage of XSL Processing Instructions (https://chromestatus.com/metrics/feature/timeline/popularity/78) is significantly lower, around 0.001% for the last few years.

## Ecosystem Status

- **Momentum:** High (863 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Browser engines are coordinating the removal of client-side XSLT v1.0, citing severe memory safety risks in legacy C libraries like libxslt and diminishing open-web usage. While browser vendors view the attack surface reduction as imperative, the deprecation breaks standard web compatibility thresholds (~0.05% page loads for XSLTProcessor), targeting full removal in Chrome Stable by version 158. Ecosystem consensus among vendors is strong, but the transition has triggered substantial debate regarding backwards compatibility for legacy XML and styled feeds.

### Recommendations
- Actionable Advice: Audit existing applications immediately for client-side \`XSLTProcessor\` calls or \`&lt;?xml-stylesheet type="text/xsl"?&gt;\` processing instructions. Migrate transformation pipelines either upstream to server-side build steps or to modern client-side JavaScript/Wasm runtimes like SaxonJS, and enroll critical enterprise origins in deprecation trials where extended runway is needed.
- In active Origin Trial in Chrome 152. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @annevk: "WebKit is cautiously supportive. We'd probably wait for one implementation to fully remove support, though if there's a known list of origins that par..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Intent to Deprecate and Remove XSLT" (87 points, 149 comments).

## Standards Positions

- **WebKit:** [Should we remove XSLT from the web platform?](https://github.com/whatwg/html/issues/11523) [open]

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Intent to Deprecate and Remove XSLT](https://news.ycombinator.com/item?id=45779261) — *87 pts, 149 comments*
- 💬 **Hacker News:** [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=45734849) — *3 pts, 1 comments*
- 💬 **Hacker News:** [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=6102357) — *2 pts, 0 comments*
- 🐦 **Twitter / X:** [Chrome 153 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2093424350036660456) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA/m/yNs4EsD5AQAJ) *(groups.google.com · 2025-11-01T04:31:52Z)*
  > Intent to Deprecate and Remove: Deprecate and remove XSLT Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Deprecate an...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGGBZfr9A3hBAdSlPF0Zf83Cy4IB1VcmWUxA6fn1NqLTW2m1zA2uNls0FityQN83NNsM1uaq6_DR6HXQwBBEPKGV9ha1BZeFDSjGcPh_o8njgCiAvw-2k_1kc9g1DbakNZfOYiNRiYQEWiKnLUmfawAiwY-0yg=) *(vertexaisearch.cloud.google.com)*
  > Se quitó XSLT para tener un navegador más seguro | Web Platform | Chrome for Developers Ir al contenido principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский ...
- [web-standards.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEsyCwnTfC1O7Jc1YgCb16eYN9c_mAEAVwcVAdpVYaxzM_0DBiYBdtcliSzFfcwqa9_oPP9PVbGsBZL2gLPlH09pmFA1knkLyGw0JMVHb804DAYbVqA87TO-z1ZMsgC5bwIBBNSSTW42VvVmynQCw==) *(vertexaisearch.cloud.google.com)*
  > Deprecating XSLT in browsers — Web Standards Web Standards Daily web platform news 326 414 311 Deprecating XSLT in browsers 2025-10-28 Mason Freed announced Chromium’s plan to fully remove support for XSLT, the XML transformation technology standardi...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF7p4cI_vaAdVPkquoUyEawQV0nzjrUycz98Ul1wtXtV27w_yt9mggeqxHB_KTr09YeZE5D6cXX-daE23DiMosy8N2uiAmrH74QUrtZLd7zjF2EbbZR7NdPVGzpkdcCkcoX) *(vertexaisearch.cloud.google.com)*
  > Should we remove XSLT from the web platform? · Issue #11523 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh yo...
- [pcjs.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF3KZqjZBeq41WDH318JNN0EdEvPlgrroLQz7xTsvhb-V3xRE12RRGYbifUMfBxXgfzDuk_WK7TIr9RA86lXpXK3vpglNqCzFZbDizPsWtPYCS4u83XaEeKWqMo) *(vertexaisearch.cloud.google.com)*
  > Goodbye XSLT | PCjs Machines PCjs Machines Home of the original IBM PC emulator for browsers. About Blog Explorer Repository Tools PCjs Blog Goodbye XSLT This is my brief take on the story of a web standard (XSLT) that was created around 25 years ago...
- [simonwillison.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHn-tfQZJ4TjAZfu2e5F3rv3dzhlF8Ww5jBvVFIEbTV38UQ7gASHMnzvuPaZyTlE9MC35k2lqijC4aMtyrkgE2ENT6hzZirI1kFd8hlJz-6w9fe81opigg_sgoWptSxeQLQK5MIKTfOKfI=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature & Announcement  Chromium, in coordination with WebKit (Safari) and Gecko (Firefox), announced plans to **deprecate and remove native client-side XSLT support**—specifically the `<?xml-stylesheet type="text/xsl" ... ?>` proc
- [saxonica.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH2yR8lmEyPC-9dhN-ZOpFFF0hc5YesoWOuBN8HXLDORYiTcPSgKi0ruh6AAnYPKlpC-c2uOWdCCz2L3WIei78KeEo8YN2ZOUMPb9ek0c8xJ4xszgJF7Hs0nA5GUM6-loyAoYzc_kTOerP5tTR-RhEG6SI=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature & Announcement  Chromium, in coordination with WebKit (Safari) and Gecko (Firefox), announced plans to **deprecate and remove native client-side XSLT support**—specifically the `<?xml-stylesheet type="text/xsl" ... ?>` proc
- [xlmsolutions.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFpMv5s5K7xea0IRhPclzDxeDObGKs71tfp3NcaSCOY5dCYc6xPzpsOjqxlh9m62dGBT10CFdhzT-8pmrD77xMb7hj5WJJQ-GtqdZeGsMmDLiTYJf3JQIfQEPTbK7V5NsHgvxS0XY2Z01ps9aMGT6xk44MzpbirH_8kzjIHp1ysDrRQo9RpU83HE4dOa-XqDcvhp0Qgf8Szl_s5yZ6nK2m_dVt6v9tMWDTKED66M1JAv-Fx) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature & Announcement  Chromium, in coordination with WebKit (Safari) and Gecko (Firefox), announced plans to **deprecate and remove native client-side XSLT support**—specifically the `<?xml-stylesheet type="text/xsl" ... ?>` proc
- [acumatica.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQErQcvZ0NmVoXSr6kVW24kdAP8w6JNE8A3DrnuhuiX1BIxlCX8tqy52m3O2IFHSiPy9H4TliN6HEFn5CyzDtphoijivUpDZZBC8fui6Vd6uMHAbQLjecXrFHDh5cef44vkgbexrJOSPER15xdAxPfk8KO81Qf5WFmaQukZYXCdaSCHHgn8SJkBAFLYHRzYTLQrjAekJdRzkgfEIaJ8aTjy_KLFv5Yaw3JxlIRfp3PueYv_usw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature & Announcement  Chromium, in coordination with WebKit (Safari) and Gecko (Firefox), announced plans to **deprecate and remove native client-side XSLT support**—specifically the `<?xml-stylesheet type="text/xsl" ... ?>` proc
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE1V7-SLYdMeub_1mvGg5WJDJUxPeXkwUiEFlB5O9gQK8AtYZcGMVmYwmOagTySaV6Q-z0l3EAFZpB3aIjAF5TsEbBPf9ZoBF4Zfd4HDWfJJKxNdgwM8O5VM9euUU4usmgn2jI=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature & Announcement  Chromium, in coordination with WebKit (Safari) and Gecko (Firefox), announced plans to **deprecate and remove native client-side XSLT support**—specifically the `<?xml-stylesheet type="text/xsl" ... ?>` proc
- [drupal.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFduNhOs3DdEb5YW8tDVb2Xwj-TubsHnUpeHXsTG0cetg38zO20mzDwy7GQrdJx920lsvGDj0cZ9vlJmcXm5DUQd61ZDBbDYnrgSMkKVIKp3CV9Cc3Bwtic_vhe7URQBnf5BsQMvDXnd4HQMl7O9QUdBmM=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature & Announcement  Chromium, in coordination with WebKit (Safari) and Gecko (Firefox), announced plans to **deprecate and remove native client-side XSLT support**—specifically the `<?xml-stylesheet type="text/xsl" ... ?>` proc
- [xsltplayground.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFtqNxLqIK1ox_WytBFKLMR23XQ8t5T2Qx7cvgfTUMVsu5LQWXuq85HUOYGflX3JLuNZ9alLM6uvIZeBmalbH_-Y64khlDuYXZ7SPTlrgkEVokSu1SSTQiPFZYqlU98gTERTB61KCpGceugdXY6ezjmzoaMb3e2XqVWadI33vE=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature & Announcement  Chromium, in coordination with WebKit (Safari) and Gecko (Firefox), announced plans to **deprecate and remove native client-side XSLT support**—specifically the `<?xml-stylesheet type="text/xsl" ... ?>` proc
- [Chromium base browsers removing support for XSLT view \| InterSystems DC](https://community.intersystems.com/post/chromium-base-browsers-removing-support-xslt-view) *(community.intersystems.com · 2026-09-28T08:13:04)*
  > https://<strong>chromestatus.com/feature/4709671889534976</strong> · Product version: IRIS 2024.1 · Discussion (4)0 · Log in or sign up to continue · Brian Porterfield · Sep 30 · I am seeing this as well. I&#x27;m not sure yet how we are proceeding. ...
- [Removing XSLT for a more secure browser \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/deprecating-xslt) *(developer.chrome.com · 2025-10-29T00:00:00)*
  > <strong>Chrome intends to deprecate and remove XSLT from the browser</strong>. This document details how you can migrate your code before the removal in late-2026. Chromium has officially deprecated XSLT, including the XSLTProcessor JavaScript API an...
- [Intent to Deprecate and Remove: Deprecate and remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA) *(groups.google.com · 2025-10-24T00:00:00)*
  > The proposed timeline for Chromium is to <strong>deprecate in M143, remove in M155 (except for Origin Trial and Enterprise Policy users), and discontinue the Origin Trial and Enterprise Policy in M164</strong>. See below for more details. ... Securit...
- [Intent to Deprecate and Remove: Deprecate and remove XSLT \| Lobsters](https://lobste.rs/s/r3ckga/intent_deprecate_remove_deprecate) *(lobste.rs · 2025-10-31T00:00:00)*
  > Unfortunately when maintenance of the HTML specification moved to WhatWG it also became less of a &quot;specification&quot; and more &quot;summary of whatever Chrome and Firefox are doing this week&quot;, so its value for determining which APIs are p...
- [Deprecate and remove XSLT - Chrome Platform Status](https://chromestatus.com/feature/4709671889534976?gate=5156253931929600) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Intent to Deprecate and Remove: Deprecate and remove XSLT](http://www.mail-archive.com/blink-dev@chromium.org/msg14983.html) *(mail-archive.com · 2025-10-24T00:00:00)*
  > Deprecation/Removal Plan The tentative deprecation/removal plan would be as follows: - M142 (Oct 28, 2025): Early warning console messages added to Chrome. - M143 (Dec 2, 2025): Official deprecation of the API - deprecation warning messages begin to ...
- [Deprecate and remove XSLT - Chrome Platform Status](https://cr-status.appspot.com/feature/4709671889534976) *(cr-status.appspot.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [Chromium's Plan to Deprecate and Remove XSLT \| daily.dev](https://app.daily.dev/posts/chromium-s-plan-to-deprecate-and-remove-xslt-dhq8zbv55) *(app.daily.dev · 2025-11-05T17:26:05)*
  > Chromium will deprecate and remove XSLT support <strong>between December 2025 (M143) and August 2027 (M164)</strong> due to security vulnerabilities in libxslt and minimal...
- [Intent to Deprecate and Remove: XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/zIg2KC7PyH0/m/Ho1tm5mo7qAJ) *(groups.google.com)*
  > A use counter measurement from the Chrome Beta channel indicates that less than 0.02% of page views use XSLT. Moreover, less than 0.003% of page view use the XSLT processing instruction.
- [Michael Tsai - Blog - Removing XSLT From the Web Platform](https://mjtsai.com/blog/2025/08/21/removing-xslt-from-the-web-platform) *(mjtsai.com · 2025-08-21T00:00:00)*
  > <strong>Chromium has officially deprecated XSLT, including the XSLTProcessor JavaScript API and the XML stylesheet processing instruction</strong>. We intend to remove support from version 155 (November 17, 2026). The Firefox and WebKit projects have...
- [Chrome is removing XSLT on November 17, 2026: what breaks and what to do \| XSLT Playground](https://xsltplayground.com/blog/posts/chrome-removing-xslt-what-to-do) *(xsltplayground.com · 2026-08-14T00:00:00)*
  > Quick answer: <strong>Chrome removes built-in XSLT support in version 158, shipping November 17, 2026</strong>, with deprecation warnings already appearing since Chrome 142–143 (official announcement). Both the XSLTProcessor JavaScript API and &lt;?x...
- [Previous release notes - Chrome Enterprise and Education Help](https://support.google.com/chrome/a/answer/10314655?hl=en-IN) *(support.google.com)*
  > Chrome 176 on Android, ChromeOS, Linux, macOS, Windows Origin Trial and Enterprise Policy stop functioning. XSLT is disabled for all users. ... recently announced that the current approach to third-party cookies is to be maintained, following which, ...
- [XSLT Debate Leads to Bigger Questions of Web Governance - The New Stack](https://thenewstack.io/xslt-debate-leads-to-bigger-questions-of-web-governance) *(thenewstack.io · 2025-09-02T13:16:43)*
  > Removing (or changing) a browser feature might improve security, privacy or performance; and that gets weighed against the inconvenience that removal would cause to users and developers. Some obsolete, deprecated features — like &lt;font&gt;, align= ...
- [The tangled web of XSLT browser support \[LWN.net\]](https://lwn.net/Articles/1034560) *(lwn.net · 2025-08-27T00:00:00)*
  > Barring a sudden reversal, the Chrome team looks poised to ship that prototype before too long. <strong>The Chrome Platform Status page for the &quot;feature&quot; to deprecate XSLT lists 2026 as the estimated shipping year</strong>, though many of t...
- [Chrome Removes XSLT: What Breaks and How to Detect It](https://ortamarco.me/en/blog/chrome-removes-xslt-what-breaks) *(ortamarco.me · 2026-09-13T00:00:00)*
  > Mozilla took a positive position, ... wait for one engine to remove it fully. The HTML standard marked XSLT deprecated on <strong>25 August 2026</strong>....
- [Intent to Deprecate and Remove: XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/zIg2KC7PyH0) *(groups.google.com)*
  > <strong>Server-side XSLT processing will not be affected by deprecating and removing XSLT support in Blink</strong>. ... 1) The XSLT implementation in Blink is &quot;glued on&quot; to the rest of Blink&#x27;s machinery and introduces more than its sh...
- [Intent to Deprecate and Remove: XSLT (Again)](https://groups.google.com/a/chromium.org/g/blink-dev/c/6MOMhQaX3N8/m/s-8UHedjCAAJ) *(groups.google.com)*
  > We agree that we&#x27;d love to eliminate XSLT from blink eventually - it&#x27;s a proven source of security and other issues that we believe is adding relatively little to the web platform compared to the alternative of XSLT processing on the server...
- [Deprecate, and consider removing, XSLT \[41191265\] - Chromium](https://issues.chromium.org/issues/41191265) *(issues.chromium.org)*
  > Change description: Remove XSLT from Blink. Changes to API surface: &lt;?xml-stylesheet ...?&gt; PIs will no longer be processed. XSLTTransform API will be removed. Links: See · https://www.chromestatus.com/features/4730954895589376 · Hide all · All ...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: XSLT - Google Groups](https://groups.google.com/a/chromium.org/d/msg/blink-dev/zIg2KC7PyH0/zmNw3BmKzQcJ) *(groups.google.com)*
  > Posted by Kenney, Jan 2, 2014 9:44 AM
- [Chrome XSLT removal: migrate before Chrome 158](https://ecorpit.com/chrome-xslt-removal-november-2026-migration-guide) *(ecorpit.com · 2026-08-03T00:00:00)*
  > <strong>Chrome 158 turns off XSLT on 17 November 2026</strong>. How to detect XSLT in your codebase and pick between server-side rendering, JSON, SaxonJS and the WASM polyfill.
- [Chrome is Removing XSLT: dates, impact and what to do](https://xmlvalidators.com/guides/chrome-is-removing-xslt) *(xmlvalidators.com)*
  > Two things go away, the XSLTProcessor JavaScript class and the &lt;?xml-stylesheet type=&quot;text/xsl&quot;?&gt; processing instruction, and both stop working on Chrome stable on <strong>17 November 2026</strong>.
- ["This site uses XSLT; that functionality is being removed" — what to do \| XSLT Playground](https://xsltplayground.com/blog/chrome-xslt/this-site-uses-xslt-warning) *(xsltplayground.com · 2026-09-18T00:00:00)*
  > [...document.childNodes].some(n ... look at the first few lines for &lt;?xml-stylesheet. <strong>If you cannot migrate before November, Chrome runs an origin trial that keeps XSLT working on your origin until Chrome 176 (August 2027).</strong>...
- [Removing XSLT for a more secure browser](https://simonwillison.net/2025/Nov/5/removing-xslt) *(simonwillison.net · 2025-11-05T22:24:57)*
  > The underlying libraries that process these transformations, such as libxslt (used by Chromium browsers), are complex, aging C/C++ codebases. This type of code is notoriously susceptible to memory safety vulnerabilities like <strong>buffer overflows<...
- [Removing XSLT for a more secure browser](https://www.alldevblogs.com/article/simon-willison/removing-xslt-for-a-more-secure-browser) *(alldevblogs.com · 2025-11-05T23:24:57)*
  > <strong>Chrome has officially announced plans to deprecate and remove XSLT support by version 155 in November 2026</strong>, citing significant security risks. Firefox and WebKit are also following suit.
- [Deprecate and remove XSLT — Chrome Platform Status](https://chromestatuslite.com/feature/4709671889534976) *(chromestatuslite.com)*
  > Chromium uses the **libxslt** library ... is a complex, aging C codebase of the type notoriously susceptible to memory safety vulnerabilities like <strong>buffer overflows</strong>, which can lead to arbitrary code execution....
- [Google's XSLT Removal Sparks Web Platform Precedent Debate - BigGo News](https://biggo.com/news/202511011343_XSLT-Removal-Precedent-Debate) *(biggo.com · 2025-11-01T13:43:48)*
  > <strong>The libxslt library, which powers XSLT transformations in Chromium, was unmaintained for approximately six months in 2025</strong> and represents what security experts describe as a highly-vulnerable external library.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Chromium base browsers removing support for XSLT view \| InterSystems DC](https://community.intersystems.com/post/chromium-base-browsers-removing-support-xslt-view) *(community.intersystems.com · 2026-09-28T08:13:04)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > https://<strong>chromestatus.com/feature/4709671889534976</strong> · Product version: IRIS 2024.1 · Discussion (4)0 · Log in or sign up to continue · Brian Porterfield · Sep 30 · I am seeing this as well. I&#x27;m not sure yet how we are pr...

## 📚 Platform Documentation & Specifications

- [1990759 - Investigate deprecation and removal of XSLT (deprecate and remove XSLT)](https://bugzilla.mozilla.org/show_bug.cgi?id=1990759) *(bugzilla.mozilla.org)*
- [xslt · Issue #1310 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1310) *(github.com)*
- [GitHub - mfreed7/xslt\_polyfill: A polyfill for XSLTProcessor · GitHub](https://github.com/mfreed7/xslt_polyfill) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 62 result(s) found across 11 planned queries — **29 verified relevant**
  - `"chromestatus.com/feature/4709671889534976" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"Deprecate and remove XSLT" API` — *Core feature API query* (8 returned)
  - `"Deprecate and remove XSLT" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"v1.0" OR "www.w3" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and remove XSLT" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (7 returned)
  - `"Deprecate and remove XSLT" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Intent to Deprecate and Remove" "XSLT" chromium OR blink` — *Finds official Chromium developer discussion threads, standards consensus, and timeline announcements regarding the removal of XSLT.* (8 returned)
  - `"XSLTProcessor" ("importStylesheet" AND "transformToFragment") javascript example` — *Locates concrete JavaScript code examples demonstrating how client-side XSL transformations are invoked using standard DOM APIs.* (8 returned)
  - `"XSLTProcessor" deprecation migrate OR replace ("Saxon-JS" OR "JSON")` — *Discovers developer migration guides, polyfill solutions, and tutorials for transitioning away from browser-native XSLT.* (8 returned)
  - `"XSLT" browser deprecation ("libxslt" OR "memory safety") vulnerability` — *Uncovers developer reactions, security analyses, and industry commentary regarding libxslt risks and the deprecation of XSLT across engines.* (8 returned)
  - `"window.XSLTProcessor" feature detection fallback javascript` — *Retrieves real-world code patterns checking for native XSLTProcessor support and falling back to JavaScript-based engines.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 3 result(s) found — **3 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 6 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 27 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4709671889534976)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4709671889534976)
- [Chromium Tracking Bug](https://crbug.com/435623334)
