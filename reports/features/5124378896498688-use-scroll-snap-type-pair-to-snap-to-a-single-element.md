# Use scroll-snap-type: pair to snap to a single element

> **Report Week:** 2026-W41 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

https://github.com/w3c/csswg-drafts/issues/9519  Add a "pair" keyword to scroll-snap-type. If used, when the container scroll snaps to an element on one axis, it should snap to the same element on the other axis. In the existing spec, the "both" keyword allows the scroll container to select snap targets in X and Y axes independently and snap to different targets.

### Motivation

See explainer

## Ecosystem Status

- **Momentum:** High (620 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The \`scroll-snap-type: pair\` keyword solves a longstanding limitation where \`scroll-snap-type: both\` snaps axes independently, allowing 2D scroll containers to lock onto the same single element across both X and Y axes. The feature is shipping enabled by default in Chrome 156 with official support from WebKit, while Mozilla's position remains open but receptive. Cross-engine consensus is strong at the CSSWG specification level, though widespread baseline support awaits implementation in Gecko and WebKit.

### Recommendations
- Actionable Advice: Adopt \`pair\` as a progressive enhancement today by declaring \`scroll-snap-type: both mandatory;\` followed by \`scroll-snap-type: pair mandatory;\` (or guarded via \`@supports (scroll-snap-type: pair)\`), ensuring graceful fallback to standard dual-axis snapping on older browser engines.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."
- Standards Activity (Mozilla): Latest discussion from @theres-waldo: "&gt; I think this seems reasonable but I'd like \[@hiikezoe\](https://github.com/hiikezoe) / \[@theres-waldo\](https://github.com/theres-waldo) to take a loo..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/WebKit/standards-positions/issues/716) [closed]
- **Mozilla:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/mozilla/standards-positions/issues/1448) [open]

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHJjkId2_XzwIqnNhWGJMuwb__8XdWq3oqBb9iIUvMr5zq1004_HBOZeTl6lXOtNcEAcixTkwOKTO1xiA2xfJVRasv7VNPPurBa0nOFriUUEZ3SJNSvjvBBfk7k6HnAaf_MVSRptdcN) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE8qkQ6w8ZEDMmFsY4OW5qnJ4kgLGiYrJYckf2Wk1v9rk1p19lxPqZfNdpRveIm8spkTsghx34V2lSrnoztKcy5ftbELM7xB1NJpcVUlwQyv1AioHM_fb5i-HDnvDBJUtvRHWzfdcZCVL3Iu5lw9tMHYCogEXNnnMEHFO_kQ0kw3brFtrM5zTiUh7p4xQ==) *(vertexaisearch.cloud.google.com)*
  > scroll-snap-type CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties scroll-snap-type Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 Русский...
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHTXt7BvFf9YMzhwX0XkXLNdL5F9Axfaas_Os9kgrs8KntkHeLefC6l_OzM1hsMkaJ8uXeeaXYF-KF1SJARMPagJcYbPpsQ47B6GpXqR0H2jeGHb68DRvR8CO7mOU9wLN9JFMUwpQ==) *(vertexaisearch.cloud.google.com)*
  > New to the web platform in September | Blog | web.dev Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFjzTkyswgMSMEYDhYDzMss_NarA2kjwfUERHH80aQxiBlXQayoLBw-Cqmw-uDNddqngVtEltA4Dy3q6yYSgm0aKwYtjqwXRpHYPwt9t-T4ob_9mezoP3t0brgakBVa7ZI=) *(vertexaisearch.cloud.google.com)*
  > Chrome 156 Release Notes - Chrome Platform Status Chrome 156 Release Notes Preview Scheduled Stable Release October 20, 2026 (Currently on Beta channel) Network / Connectivity Avoid caching module failures # Link copied! Currently web developers cann...
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHo11nHQcbvNF5V04y46-_IjCv5Y0vz60kMgrrwo4vOfRapDHLVcWliFQT4Hdkh0O1gIZsu6qgaXKQsfMyfIXH5E-OZ5PyoMJ5AipipN4NOJxf0VPMo_vWdbE6L3-KjrSN7aewlLf5if8vcYk2tkjJR0K5fjWXEjihQVeAlTWuAEVk8ZL0sIg==) *(vertexaisearch.cloud.google.com)*
  > Chromium Dash
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHbfn4GRc5JHHT2g7s-CvPBWzwIzsTsUI-rN67HGZhamjDiZmghNuyyO-XtYvy1ay7IIedKAQKITIhr6LWX2zWPmT2oujnDLk7hwwWN7DBSLQE6_sQpEUEEsn931u2eD4MwEZgty4nLmF1xj7gZ3FKgFYnYIbxSLli1O88izNhURr1NZIU=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGuHaHhIGJo7cHZyAW_v6t3Vwwz9Lc24EEK9qHvqSqwYanC4xOq_p4zEAtEjeaTpRWWul_oJxWMrrxnZ2Y-ow8K6fAHq9IaZK1_QiCJNxDrtyMreEo6t8vSsFNyKbX9p5s4ufpcJPOU4t94sg_dfi5WOmF4EODlpp-Mh0ddJZm320h7mJESdJEYyk9EMu9tTdmy8Q==) *(vertexaisearch.cloud.google.com)*
  > Using scroll snap events - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Guides Scroll snap Using scroll snap events Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) 日本語 Using scroll sn...
- [webkit.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGJfDWWSGNsKflQWaVAjcXDZmrHHwvysbMzB-Q_p60jGeHAxfvFhkrazzBP-gIcKrT3ge0Ek-kulxwgVUYD0t2CUJKjRs5nWRzpgKKhLP5JELeFDcDUCZ3ncIGuGkg=) *(vertexaisearch.cloud.google.com)*
  > Standards Positions | WebKit WebKit Standards Positions Enable JavaScript for an interactive summary table of WebKit's standards positions. Failing that, browse the standards-positions GitHub repository directly.
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGGNRPBuzFDTLQ_XEgRW3cLWdKEMkL8j35nQN8EcIMqf-YurvZ6O7IGiJM-YsU9G50ZD8ORivO3h426vSXHs4qj3-hqtnK7Jm5QZopgKduSZCrJtCDuYVjXQl9yu3loxeJuWQpV8_3mt2t-F1eseAQg9pjXfOU=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The `scroll-snap-type: pair` property value resolves a longstanding limitation in two-dimensional scroll snapping (originating from [CSSWG Issue #9519](https://drafts.csswg.org/css-scroll-snap-1)):  * **The Problem:** In C
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFxyNUcLDHLPaFnczPCDetBktGmbJRZvkcfZNAYdFKR4EpFgi4XUh7Bpvo9wFl1UwVIMWNLpBGw5eT2arFnWnHH97sYuMnMU0IWlvuAW_atjB8-LQvA0q7RNuSXwoHU6GQP6L7b_4gXJk0ViQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The `scroll-snap-type: pair` property value resolves a longstanding limitation in two-dimensional scroll snapping (originating from [CSSWG Issue #9519](https://drafts.csswg.org/css-scroll-snap-1)):  * **The Problem:** In C
- [polypane.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF7YxLNliA2-OA5-gAZaPuyHOpmK7o4G6lJYYLSJEnfa9XN8R4hwpw_4DOz14ZJ8t3-R3lHxwVeCqMB2cNpSy9FGXI-YzqnbE3Gm5Bg742CQ3dTRGfTbpyhEOVLn9lkIkczAasCRV03Emq-kyhI3g==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The `scroll-snap-type: pair` property value resolves a longstanding limitation in two-dimensional scroll snapping (originating from [CSSWG Issue #9519](https://drafts.csswg.org/css-scroll-snap-1)):  * **The Problem:** In C
- [polypane.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF0WTClg_0n_RXGy0W5-SMN_rzi7Hie4ASAkoq0ivZ7NaZGwjkdPfchcPCvlldTojhVLyDXCrYyM-duuPmdjRI-wh97rx-JA-Trws3hFFjgtM2wub21Pllkemzseho0MCSL-cA1O7EpG6YI5dtEMw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The `scroll-snap-type: pair` property value resolves a longstanding limitation in two-dimensional scroll snapping (originating from [CSSWG Issue #9519](https://drafts.csswg.org/css-scroll-snap-1)):  * **The Problem:** In C
- [bsky.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG06G4mDHEUto17v_bridbgqjyyJX1g87fZuPZ7xDHYlVaTbuFPaGOHk8dC_UigTtlciRAQaGsSO2msw7ZeelE5Ott3CmFldsJZeGMwBxSLIwRPpkgH11tVFIiUQZw6vw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The `scroll-snap-type: pair` property value resolves a longstanding limitation in two-dimensional scroll snapping (originating from [CSSWG Issue #9519](https://drafts.csswg.org/css-scroll-snap-1)):  * **The Problem:** In C
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17535.html) *(mail-archive.com)*
  > &gt; *No information provided* &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://<strong>chromestatus.com/feature/5124378896498688</strong>?gate=6676576856047616 &gt; &gt; *Links to previous Intent discussions* &gt; Intent to Proto...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)*
  > Explainer https://github.com/explainers-by-googlers/scroll-snap-type-pair Specification https://drafts.csswg.org/css-scroll-snap-1 Summary https://github.com/w3c/csswg-drafts/issues/9519 <strong>Add a &quot;pair&quot; keyword to scroll-snap-type</str...
- [\[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17244.html) *(mail-archive.com)*
  > Explainer https://github.com/explainers-by-googlers/scroll-snap-type-pair Specification No information provided Summary https://github.com/w3c/csswg-drafts/issues/9519 <strong>Add a &quot;pair&quot; keyword to scroll-snap-type</strong>. If used, when...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17536.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Tue, Sep 22, 2026 ...ts.csswg.org/css-scroll-snap-1 &gt;&gt; &gt;&gt; *Summary* &gt;&gt; https://github.com/w3c/csswg-drafts/issues/9519 <strong>Add a &quot;pair&quot; keyword to &gt;&gt; scroll-snap-type</strong>....
- [CSS Scroll Snap Module Level 2](https://w3c.github.io/csswg-drafts/css-scroll-snap-2) *(w3c.github.io · 2023-05-12T00:00:00)*
  > URL: https://<strong>drafts.csswg.org/css-scroll-snap-1</strong>/
- [CSS scroll-snap-type property](https://www.w3schools.com/cssref/css_pr_scroll-snap-type.php) *(w3schools.com)*
  > To acheive scroll snap behaviour, <strong>the scroll-snap-type property must be set on the parent element, and the scroll-snap-align property must be set on the child elements</strong>.
- [How to use CSS Scroll Snap - LogRocket Blog](https://blog.logrocket.com/how-to-use-css-scroll-snap) *(blog.logrocket.com · 2024-06-04T21:29:41)*
  > CSS Scroll Snap works by applying two primary properties: <strong>scroll-snap-type and scroll-snap-align</strong>.
- [CSS scroll snap: a step-by-step tutorial \| by Ludivine Constanti \| Medium](https://medium.com/@ludivine.constanti/how-to-use-the-css-scroll-snap-dca954156afc) *(medium.com · 2023-12-10T19:21:19)*
  > .parent { height: 100vh; overflow-y: scroll; scroll-snap-type: y mandatory; } Setting the height to 100vh and the overflow-y to scroll will make this container scrollable (if the height of the content is higher than 100vh). It works as long as the he...
- [CSS Scroll Snap: The Complete Guide to Smooth Navigation \| Effect.Labs Blog](https://effect-labs.com/en/pages/blog/scroll-snap-sections.html) *(effect-labs.com · 2026-04-03T00:19:00)*
  > The scroll-snap-type property is the starting point of any implementation. It is defined on the scrollable container (the parent element) and accepts two parameters: the axis and the behavior.
- [Mastering HTML CSS Scroll Snap: A Comprehensive Guide — tutorialpedia.org](https://www.tutorialpedia.org/blog/html-css-scroll-snap) *(tutorialpedia.org)*
  > In the CSS file (styles.css), you need to <strong>set the scroll - snap - type property on the scroll container and the scroll - snap - align property on the child elements</strong>.
- [CSS Scroll Snap Property: Complete Guide with Practical Examples \| TestMu AI (Formerly LambdaTest)](https://www.testmuai.com/blog/complete-guide-to-css-scroll-snap-for-awesome-ux) *(testmuai.com · 2023-10-26T00:00:00)*
  > Whereas in Mandatory scroll-snap-type, the browser snaps to the scrolling point decided by the user irrespective of his scroll position. As a web developer, you should know that even though the mandatory value is more consistent, it can raise issues ...
- [CSS Scroll Snap: Control the Scrolling Experience \| Savvy](https://savvy.co.il/en/blog/css/css-scroll-snapping) *(savvy.co.il · 2026-03-17T17:04:28)*
  > For the sake of writing convenience, this post refers to that parent element as a container or snap container. The following section explains the main property that refers only to the parent element, namely the container. scroll-snap-type determines ...
- [How to style scroll snap points with CSS - LogRocket Blog](https://blog.logrocket.com/style-scroll-snap-points-css) *(blog.logrocket.com · 2024-06-04T21:01:41)*
  > This benefit is that it helps users snap to various elements of content that are supposed to be observed together, reduces the amount of scrolling required overall, and prevents over-scrolling. In this tutorial, you’ll learn how to build HTML contain...
- [How to Use CSS Scroll Snap Points \| by GrapeCity Developer Solutions \| Medium](https://medium.com/@grapecitydevsolutions/how-to-use-css-scroll-snap-points-407c151ae89e) *(medium.com · 2018-08-24T20:55:48)*
  > Scroll snap points determine the precise positions where a container’s scrollport will end after a scrolling action. Implementing CSS scroll snap points makes it easy to add “swipe views” (commonly used in native mobile apps) to your web apps and pro...
- [Practical CSS Scroll Snapping \| CSS-Tricks](https://css-tricks.com/practical-css-scroll-snapping) *(css-tricks.com · 2020-06-18T19:04:10)*
  > Scroll snapping is used by <strong>setting the scroll-snap-type property on a container element and the scroll-snap-align property on elements inside it</strong>. When the container element is scrolled, it will snap to the child elements you’ve defin...
- [Mastering the CSS Scroll Snap Property - DEV Community](https://dev.to/joanayebola/mastering-the-css-scroll-snap-property-135a) *(dev.to · 2023-08-27T16:01:40)*
  > Here&#x27;s an example of using Scroll Snap with Flexbox: <strong>.flex-container { display: flex; overflow-x: scroll; scroll-snap-type: x mandatory; } .</strong>flex-item { scroll-snap-align: start; flex: 0 0 100%; /* Each item occupies the full wid...
- [CSS Scroll Snap Property: Complete Guide with Practical Examples \| by Harish Rajora \| Medium](https://medium.com/@harish_rajora/css-scroll-snap-property-complete-guide-with-practical-examples-88588f8bc725) *(medium.com · 2023-07-10T07:53:10)*
  > The syntax used is: ... For example, <strong>scroll-padding: 20px or scroll-padding: 10%</strong>. By using the scroll-padding with scroll-snap-type, the edges are not snapped but an offset is created which is equal to the scroll-padding value the us...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > <strong>Add a &quot;pair&quot; keyword to scroll-snap-type</strong>. If used, when the container scroll snaps to an element on one axis, it should snap to the same element on the other axis.
- [Scroll Snapping Examples](https://webkit.org/demos/scroll-snap) *(webkit.org)*
  > The following examples are overflow-scrolling divs. In the second, third and fourth examples, the blue cross represents the location of each container’s scroll snap destination.
- [Scroll Snapping with CSS Snap Points \| WebKit](https://webkit.org/blog/4017/scroll-snapping-with-css-snap-points) *(webkit.org · 2015-11-20T23:03:27)*
  > By default, scroll-snap-type on the parent scrolling container is none, which indicates that the container opts out of any scroll snapping behavior. To opt in, we set the value to be mandatory, which guarantees that the visual viewport of the contain...
- [CSS Scroll Snap Points](https://chromestatus.com/feature/5721832506261504) *(chromestatus.com · 2015-06-08T00:00:00)*
  > We cannot provide a description for this page right now
- [Changeset 268665 – WebKit](https://trac.webkit.org/changeset/268665/webkit) *(trac.webkit.org)*
  > axis in scroll-snap-type should be required ​https://bugs.webkit.org/show_bug.cgi?id=210468 &lt;rdar://problem/61746766&gt;
- [145843 – CSS Scroll Snap - support snapping to nested elements](https://bugs.webkit.org/show_bug.cgi?id=145843) *(bugs.webkit.org)*
  > WebKit Bugzilla · Browse · Search+ · Log In · Top of Page · Format For Printing · Clone This Bug · Reports

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Other Spec Review: Add keyword "pair" to scroll-snap-type for snapping to the same element in X and Y axes · Issue #1271 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1271) *(github.com · 2026-08-25T15:03:43)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > Status/issue trackers for implementations: Chromium comments: https://<strong>chromestatus.com/feature/5124378896498688</strong>
- [scroll-snap-pair · Issue #4461 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4461) *(github.com · 2026-10-01T21:55:02)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > Chrome status: https://<strong>chromestatus.com/feature/5124378896498688</strong>?gate=6676576856047616
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17535.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > &gt; *No information provided* &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://<strong>chromestatus.com/feature/5124378896498688</strong>?gate=6676576856047616 &gt; &gt; *Links to previous Intent discussions* &gt; Inten...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > Explainer https://github.com/explainers-by-googlers/scroll-snap-type-pair Specification https://drafts.csswg.org/css-scroll-snap-1 Summary https://github.com/w3c/csswg-drafts/issues/9519 <strong>Add a &quot;pair&quot; keyword to scroll-snap...
- [\[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17244.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > Explainer https://github.com/explainers-by-googlers/scroll-snap-type-pair Specification No information provided Summary https://github.com/w3c/csswg-drafts/issues/9519 <strong>Add a &quot;pair&quot; keyword to scroll-snap-type</strong>. If ...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17536.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > &gt; LGTM1 &gt; &gt; On Tue, Sep 22, 2026 ...ts.csswg.org/css-scroll-snap-1 &gt;&gt; &gt;&gt; *Summary* &gt;&gt; https://github.com/w3c/csswg-drafts/issues/9519 <strong>Add a &quot;pair&quot; keyword to &gt;&gt; scroll-snap-type</strong>......
- [csswg-drafts/css-scroll-snap-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-scroll-snap-1/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-scroll-snap-1`)*
  > Previous Version: https://www.w3.org/TR/2016/WD-css-scroll-snap-1-20160623/ Previous Version: https://www.w3.org/TR/2016/WD-css-snappoints-1-20160329/ Previous Version: https://www.w3.org/TR/2015/WD-css-snappoints-1-20150326/ Work Status: T...
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/css-scroll-snap-1) *(w3.org · 2021-03-11T00:00:00)* *(Cites: `https://drafts.csswg.org/css-scroll-snap-1`)*
  > https://www.w3.org/TR/css-scroll-snap-1/ Editor&#x27;s Draft: https://<strong>drafts.csswg.org/css-scroll-snap-1</strong>/ Previous Versions: https://www.w3.org/TR/2019/CR-css-scroll-snap-1-20190319/ https://www.w3.org/TR/2019/CR-css-scroll...
- [\[css-scroll-snap\] Allow control over snap smoothness for art-direction · Issue #5464 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/5464) *(github.com · 2020-08-24T09:21:50)* *(Cites: `https://drafts.csswg.org/css-scroll-snap-1`)*
  > The scroll snap module does not specify the physics or animations used when enforcing snap positions. This is intentionally left for the UA to decide. (https://<strong>drafts.csswg.org/css-scroll-snap-1</strong>/) ...
- [\[css-scroll-snap\] Clarify scrollbar arrow behavior? · Issue #4712 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4712) *(github.com · 2020-01-29T00:37:31)* *(Cites: `https://drafts.csswg.org/css-scroll-snap-1`)*
  > Spec: https://www.w3.org/TR/css-scroll-snap-1/ respectively https://<strong>drafts.csswg.org/css-scroll-snap-1</strong>/ Given http://snap.glitch.me/carousel-with-snap-stop.html, Firefox 72.0.2 and Chrome 79.0.3945...
- [\[css-scroll-snap-1\] Example 11 should also include scrollbar arrows · Issue #3752 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3752) *(github.com · 2019-03-20T14:34:19)* *(Cites: `https://drafts.csswg.org/css-scroll-snap-1`)*
  > Closed Accepted as EditorialNo ...g.org/css-scroll-snap-1/#intended-direction should specify that <strong>clicking on the scrollbar arrows defines an intended direction</strong>....
- [\[css-scroll-snap\] Do scroll-margin-\* properties accept percentages? · Issue #3289 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3289) *(github.com · 2018-11-06T22:54:43)* *(Cites: `https://drafts.csswg.org/css-scroll-snap-1`)*
  > Should the value accept percentages, or should the computed value exclude percentages? https://<strong>drafts.csswg.org/css-scroll-snap-1</strong>/#propdef-scroll-margin-top Name: scroll-margin-top, scroll-margin-right, scroll-margin-bottom...
- [CSS Scroll Snap Module Level 2](https://w3c.github.io/csswg-drafts/css-scroll-snap-2) *(w3c.github.io · 2023-05-12T00:00:00)* *(Cites: `https://drafts.csswg.org/css-scroll-snap-1`)*
  > URL: https://<strong>drafts.csswg.org/css-scroll-snap-1</strong>/

## 📚 Platform Documentation & Specifications

- [Other Spec Review: Add keyword "pair" to scroll-snap-type for snapping to the same element in X and Y axes · Issue #1271 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1271) *(github.com)*
- [scroll-snap-pair · Issue #4461 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4461) *(github.com)*
- [csswg-drafts/css-scroll-snap-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-scroll-snap-1/Overview.bs) *(github.com)*
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/css-scroll-snap-1) *(w3.org)*
- [\[css-scroll-snap\] Allow control over snap smoothness for art-direction · Issue #5464 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/5464) *(github.com)*
- [\[css-scroll-snap\] Clarify scrollbar arrow behavior? · Issue #4712 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4712) *(github.com)*
- [\[css-scroll-snap-1\] Example 11 should also include scrollbar arrows · Issue #3752 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3752) *(github.com)*
- [\[css-scroll-snap\] Do scroll-margin-\* properties accept percentages? · Issue #3289 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3289) *(github.com)*
- [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element · Issue #1448 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1448) *(github.com)*
- [GitHub - lucafalasco/scroll-snap: ↯ Snap page when user stops scrolling, with a customizable configuration and a consistent cross browser behaviour](https://github.com/lucafalasco/scroll-snap) *(github.com)*
- [css-scroll-snap · GitHub Topics · GitHub](https://github.com/topics/css-scroll-snap) *(github.com)*
- [GitHub - LachlanArthur/scroll-snap-api: JavaScript API for interacting with CSS scroll-snap · GitHub](https://github.com/LachlanArthur/scroll-snap-api) *(github.com)*
- [GitHub - rezamini/css-scroll-snap: This project showcases the usage of a simple and pure CSS Scroll Snap feature in vertical scrolling. It provides a practical demonstration of how to create a webpage with multiple sections that snap into view as the user scrolls. · GitHub](https://github.com/rezamini/css-scroll-snap) *(github.com)*
- [GitHub - tannerhodges/snap-slider: Simple JavaScript plugin to manage sliders using CSS Scroll Snap. · GitHub](https://github.com/tannerhodges/snap-slider) *(github.com)*
- [CSS scroll snap - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll_snap) *(developer.mozilla.org)*
- [GitHub - barthy-koeln/scroll-snap-slider: Mostly CSS slider with great performance. · GitHub](https://github.com/barthy-koeln/scroll-snap-slider) *(github.com)*
- [scroll-snapping · GitHub Topics · GitHub](https://github.com/topics/scroll-snapping) *(github.com)*
- [scroll-snap-type CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-snap-type) *(developer.mozilla.org)*
- [scroll-snap-type CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type) *(developer.mozilla.org)*
- [Basic concepts of scroll snap - CSS - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll_snap/Basic_concepts) *(developer.mozilla.org)*
- [Scroll snap to a single element with scroll-snap-type: pair · Issue #1438 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1438) *(github.com)*
- [\[css-scroll-snap-1\] Why does scroll-snap-align: both snap in each axis independently? · Issue #9519 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9519) *(github.com)*
- [Scroll snap](https://developer.mozilla.org/en-US/docs/Glossary/Scroll_snap) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 12 planned queries — **45 verified relevant**
  - `"chromestatus.com/feature/5124378896498688" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/explainers-by-googlers/scroll-snap-type-pair" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"drafts.csswg.org/css-scroll-snap-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" API` — *Core feature API query* (5 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"github.com" OR "scroll-snap-type" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (2 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"scroll-snap-type" "pair" (tutorial OR guide OR example) CSS` — *Finds developer-oriented articles, blog posts, and guides demonstrating 2D scroll snapping locked to a single element.* (8 returned)
  - `"scroll-snap-type" ("both pair" OR "pair") CSS "snap target"` — *Surfaces exact CSS syntax declarations, code snippets, and technical examples contrasting independent axis snapping with paired element snapping.* (1 returned)
  - `site:chromestatus.com OR site:webkit.org OR site:mozilla.org "scroll-snap-type" "pair"` — *Monitors browser engine implementation tracking, Intent to Prototype/Ship threads, and vendor consensus.* (8 returned)
  - `site:github.com/w3c/csswg-drafts ("9519" OR "scroll-snap-type: pair")` — *Accesses the primary CSS Working Group issue, spec author debate, and community feedback shaping the feature.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **13 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 214 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 3 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5124378896498688)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5124378896498688)
- [Specification](https://drafts.csswg.org/css-scroll-snap-1)
- [Chromium Tracking Bug](https://crbug.com/542706103)
