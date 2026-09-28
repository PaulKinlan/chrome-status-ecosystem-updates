# CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions

> **Report Week:** 2026-W40 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Support for CSSPseudoElement - which is currently only defined for ::after, ::before, and ::marker - is now being extended to include several new pseudo-elements:  ::backdrop: useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog's content. This eliminates the need for complex intersection logic to determine where the click occurred.  ::scroll-marker: can be used to collect click statistics.  view transitions: enables geometry-aware view transitions.It also allows you to intercept a view transition mid-flight to start a new one, utilizing the coordinates of the currently animating element to avoid sudden visual jumps.

### Motivation

Support for CSSPseudoElement - which is currently only defined for ::after, ::before, and ::marker - is now being extended to include several new pseudo-elements:

::backdrop: useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog's content. This eliminates the need for complex intersection logic to determine where the click occurred.

::scroll-marker: can be used to collect click statistics.

view transitions: enables geometry-aware view transitions.It also allows you to intercept a view transition mid-flight to start a new one, utilizing the coordinates of the currently animating element to avoid sudden visual jumps.

## Ecosystem Status

- **Momentum:** High (490 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chrome 152 enabled expanded CSSPseudoElement support by default, extending the interface beyond ::before, ::after, and ::marker to include ::backdrop, ::scroll-marker, and view-transition pseudo-elements. The change aligns with a CSS Working Group resolution (issue #13804) to support all standardized tree-abiding pseudo-elements in the interface. This enables JavaScript capabilities like detecting clicks directly on pseudoTarget and inspecting geometry during view transitions.

### Recommendations
- Actionable Advice: Adopt the API cautiously via progressive enhancement using feature detection for event.pseudoTarget or Element.prototype.pseudo. Keep fallback dialog backdrop-click bounds checks in production code until Firefox and Safari achieve interoperability.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @danielsakhapov: "Addition - in https://github.com/w3c/csswg-drafts/issues/13804 it was resolved that CSSPseudoElement now supports all standardized non-element-backed ..."
- Standards Activity (Mozilla): Latest discussion from @danielsakhapov: "Addition - in https://github.com/w3c/csswg-drafts/issues/13804 it was resolved that CSSPseudoElement now supports all standardized non-element-backed ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSSPseudoElement interface](https://github.com/WebKit/standards-positions/issues/607) [open]
- **Mozilla:** [CSSPseudoElement interface](https://github.com/mozilla/standards-positions/issues/1345) [open]

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFk3OdfU2RVhJ7JHups9evgSVT6iotTfPw0AYUGQtG4QSq3H-DEj1arTapGXujJEXbYckNPGZlzVFtpLMQ2UOgsHWVTG8cla8gcZ4VoMQi7efnBdSWbs-89-klVFk_CgTh7plc4Ai0wNDU6) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The Web Platform has expanded the **`CSSPseudoElement`** interface—which was historically restricted to `::before`, `::after`, and `::marker`—to support additional modern pseudo-elements, notably **`::backdrop`**, **`::scroll-marker`**,
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHNh4HvVE7o7q0IkTY04viexQXUqlMqyOKUS9U5WMc_vhAIPWG_JK8wTd26LAEmKhnLvoVaadT2dIpDPaS-jdDLCrEFl9qiMNJMOgd6FBcnkVNMQzzjInNP4g==) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The Web Platform has expanded the **`CSSPseudoElement`** interface—which was historically restricted to `::before`, `::after`, and `::marker`—to support additional modern pseudo-elements, notably **`::backdrop`**, **`::scroll-marker`**,
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHy4drKuNH2GkPiIesOFCbQnhi25aGs-D-ko40oEJiML6w5a4j2b07gYbwva0zz7BLVFN11kmI78sZ2SXms3ValeHKrTbhAZzO7TX53LteNNauQbGTp6x7LXGOVvHC2_bHRrJciAtAooS0mggiYRgd7ie7_jkVRC5z4YyTLeJxzUfQr64wX4p1kYcl4z0-AgbpFciU52xs=) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The Web Platform has expanded the **`CSSPseudoElement`** interface—which was historically restricted to `::before`, `::after`, and `::marker`—to support additional modern pseudo-elements, notably **`::backdrop`**, **`::scroll-marker`**,
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEdCWbxKG69f_steZ1f-0uC0It9zTgLhLLclwFQgoi8A62bFwoiAEoqZgb7_v2O8_S_9B5WesBJ7gutx6aTIpstOE2YPyMZCT9RHUH08iPv9SEDJRt1MDf9bWy9UWUkKHmaKcCi4pSnIqkQT9ketTolmfA6zyVIsLWzw0EUWdI4MXJ5L0p5NtLmUSGqR97UZFHPEI_ghQYMEMhhlWV1oxuGIeaQ) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The Web Platform has expanded the **`CSSPseudoElement`** interface—which was historically restricted to `::before`, `::after`, and `::marker`—to support additional modern pseudo-elements, notably **`::backdrop`**, **`::scroll-marker`**,
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFSL1MM7cliXsJBs1oLt9GP9WzZqzbG95brAsdQB-1X6rAdNF1lnqaP2Qgjw99IquSPFigIINvv2zv8IsIQfHZRdyjg2SqMvTy25JHAe-KmB2X9ndwkv3ZCwdNLtBXYju9HZM6yEA==) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The Web Platform has expanded the **`CSSPseudoElement`** interface—which was historically restricted to `::before`, `::after`, and `::marker`—to support additional modern pseudo-elements, notably **`::backdrop`**, **`::scroll-marker`**,
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGbgy5PK6WViCiu3dL1ffvyUaWlEH96Xvf6S0tp6GNAqHNvsVqheFFnHEzd59BO6Bk-6P4vHnEr2F-PzRqqXav-dQ94wD8MHUB6iub73hUDBzF8Fm980nj2WSDnVWuB) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The Web Platform has expanded the **`CSSPseudoElement`** interface—which was historically restricted to `::before`, `::after`, and `::marker`—to support additional modern pseudo-elements, notably **`::backdrop`**, **`::scroll-marker`**,
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEexcydEAodZMt9W1zvLxB5DQMOaJko2puu-PmVyeyq2ERy6BOwwCnTnHjFYQP1FrMafdP2zf8ym1Fg9GhReHKOv8yTeB96QQGxo25DvTvc2xja3H2ZfzxB7Wttmf1P0EiyDyoI-aYRjS87O5UCrfYUdNkOGoOSfkuGdWZxiGJznzTttCdhhLyjQMVGvUH8_JToIg==) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The Web Platform has expanded the **`CSSPseudoElement`** interface—which was historically restricted to `::before`, `::after`, and `::marker`—to support additional modern pseudo-elements, notably **`::backdrop`**, **`::scroll-marker`**,
- [master.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEAeWJSLK3A3l5szo_nKv78JwyH-FfS19sFwx6mqswgd6GDuavzNEmWQvtW6OfeAIDF963QwZZDOv0FmDPeH86N7b8LNOPsmM22B54gGJCnzQJw3WJUkNvNzePQAuEPtvGshd1_0IvXHd1LemZAodOjI786YNxw4GT_5sg=) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The Web Platform has expanded the **`CSSPseudoElement`** interface—which was historically restricted to `::before`, `::after`, and `::marker`—to support additional modern pseudo-elements, notably **`::backdrop`**, **`::scroll-marker`**,
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFC__7PzD9E0mDtEqzDfC4LTQoHbHEID3mxrO3Iys59DDt4TGgtihBXxxJDrP5pWMDn3S8rYVN7DuALJkShtKBIVxksJx6x5a20YGbCNUzSm9mS-g6or3iWghUdwUkK5A53067UrP9M-w==) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The Web Platform has expanded the **`CSSPseudoElement`** interface—which was historically restricted to `::before`, `::after`, and `::marker`—to support additional modern pseudo-elements, notably **`::backdrop`**, **`::scroll-marker`**,
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFbNxSuaoT9kj5BS582EzXeJDtfPueeAGnyhTUB3gfsqN9jsd1hi1N0ZnLhnumfPnrv9AjIPOapXF-d3d2gP_u8TcAK49qi3rWjA9ZWe94zOyGCdSCb5Mfm_rQtbQzeCP-XMtw=) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The Web Platform has expanded the **`CSSPseudoElement`** interface—which was historically restricted to `::before`, `::after`, and `::marker`—to support additional modern pseudo-elements, notably **`::backdrop`**, **`::scroll-marker`**,
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGrZCD1fKDO6wwi26l8zEkadZIDhCjq2POT0yoGAVY5RdPxMMyQosEe5yBKdGvJanR_Bzh95KAMy96s3-2Zol17WEfYXyncTLZJu-r9o8OqH_OL3eDc8wtfwupG1rsNSjM8gM1yXTw=) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The Web Platform has expanded the **`CSSPseudoElement`** interface—which was historically restricted to `::before`, `::after`, and `::marker`—to support additional modern pseudo-elements, notably **`::backdrop`**, **`::scroll-marker`**,
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEhkEmSs_N662rkET4zEyEPRK1SPytb-RcNbAUcRYsX2XTzGa5yMOH5oJFajGCvjT01NfOXakI7IaWKWAezMZ3sBgRRMBvGoBJ-as_-bcNwGQj_OVV1Jgr1LzCNlQVOLqNh-dfNKg==) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The Web Platform has expanded the **`CSSPseudoElement`** interface—which was historically restricted to `::before`, `::after`, and `::marker`—to support additional modern pseudo-elements, notably **`::backdrop`**, **`::scroll-marker`**,
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEQGcPygyVNQUA3Z9rZSeEyvL0CMSLcHb-7GAkefhe5eAZ5-UxcrZBDjc-PdpMgOEffRBRmpvu4fw9FQZTTcEntrvQ7SFgbgV71QQ0xXpSXFhff9hi6_Kn975BcgGyga-C274qu4_r4R-Ph9TbLEczRO5PlSpwcBA==) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The Web Platform has expanded the **`CSSPseudoElement`** interface—which was historically restricted to `::before`, `::after`, and `::marker`—to support additional modern pseudo-elements, notably **`::backdrop`**, **`::scroll-marker`**,
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEDPn0w-WAkgXepd-rhb5HdrZKfzEVItZMJcIsxCs0KTCrNNbUAH1qsVsbYoo73ZWW-Q92GL-8y739FCF0dMz4-COhosFOIWZuy3M30nQoX7wxQ4k21bFVehMu0va1-x3fDoHSQ0-2x2JMkzlFtk0w58zzglIy-d-Moo6M51Q==) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The Web Platform has expanded the **`CSSPseudoElement`** interface—which was historically restricted to `::before`, `::after`, and `::marker`—to support additional modern pseudo-elements, notably **`::backdrop`**, **`::scroll-marker`**,
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH3ZrxbXk5frP9YRT_Ut4txXZeLkD5-SPD-TdEw41wdR7i1sLT3lUAotTdqVfgXjafwLheFX-qcTokY8wWbl5uTLvSaeSE_PQiZLOtFaB05ttCZF42M3qKyYhIgaHCyW5ititAU4TSU8JL5sbPKOT6fQtdRLiXVnnI3XmdEwCM=) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The Web Platform has expanded the **`CSSPseudoElement`** interface—which was historically restricted to `::before`, `::after`, and `::marker`—to support additional modern pseudo-elements, notably **`::backdrop`**, **`::scroll-marker`**,
- [cassidoo.co](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFriH5XYS0MtZbd26SQ47ag-dkh3iP8QzuysCkJoIMoEOmiejdwn-3DJ_0Q9RwGlyN5meEErY6cLjKwA8sjRUcZQavRNVYWRQGVekmA8HQLueguHOgFFwfg-gU5SN1Pig==) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The Web Platform has expanded the **`CSSPseudoElement`** interface—which was historically restricted to `::before`, `::after`, and `::marker`—to support additional modern pseudo-elements, notably **`::backdrop`**, **`::scroll-marker`**,
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGJjVnZ_FP4ktIoBAOeSww6FPGjFMTIArPvEjEo2IaEVGBatZNn4i72cW3UYIt2vJbDWE-HKokDUD-pGb5mvI9BYs4jgMFXJnWGLtUvUBmEX7gUu52FYwoNHh2pXIAzY9IldJY6lii9szzLgsky3Bd7QjYSi1yhQl2Z5iFMAPD8m0ywoLRFFrpEL3Qgbhc=) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The Web Platform has expanded the **`CSSPseudoElement`** interface—which was historically restricted to `::before`, `::after`, and `::marker`—to support additional modern pseudo-elements, notably **`::backdrop`**, **`::scroll-marker`**,
- [\[blink-dev\] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16597.html) *(mail-archive.com)*
  > &gt; *No information provided* &gt; &gt; ... generated by Chrome Platform Status &gt; &lt;https://chromestatus.com&gt;. &gt; -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-dev&quot; group</strong>....
- [Re: \[blink-dev\] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16676.html) *(mail-archive.com)*
  > &gt;&gt;&gt; *No information provided* &gt;&gt;&gt; &gt;&gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt;&gt; https://<strong>chromestatus.com/feature/6516055192240128</strong>?gate=6196512880197632 &gt;&gt;&gt; &gt;&gt;&gt; This intent...
- [Re: \[blink-dev\] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16843.html) *(mail-archive.com)*
  > On Thursday, June 4, 2026 at 11:01:29 PM UTC+3 Daniil Sakhapov wrote: &gt; ::scroll-marker click detection has been requested by our partners trying &gt; out CSS Carousels &gt; ::backdrop can be used to avoid intersection checks on dialog dismiss (by...
- [\[blink-dev\] Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16588.html) *(mail-archive.com)*
  > Explainer No information provided ... to include several new pseudo-elements: ::backdrop: <strong>useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog&#x27;s content</strong>....
- [CSS ::backdrop Pseudo-element](https://www.w3schools.com/cssref/sel_backdrop.php) *(w3schools.com)*
  > accent-color align-content align-items align-self all animation animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-timing-function aspect-ratio backdrop-f...
- [Day 22: the ::backdrop pseudo-element \| daily.dev](https://daily.dev/posts/day-22-the-backdrop-pseudo-element-kmhbpxmzx) *(daily.dev · 2026-06-22T14:45:20)*
  > A quick guide to the CSS ::backdrop pseudo-element, which <strong>lets you style the backdrop behind modal dialogs and fullscreen elements</strong>. Covers basic usage with...
- [CSS Pseudo-elements Reference](https://www.w3schools.com/CSSREF/css_ref_pseudo_elements.php) *(w3schools.com)*
  > accent-color align-content align-items align-self all animation animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-timing-function aspect-ratio backdrop-f...
- [A Practical Guide to the CSS View Transition API \| Blog Cyd Stumpel](https://cydstumpel.nl/a-practical-guide-to-the-css-view-transition-api) *(cydstumpel.nl · 2025-09-18T20:36:48)*
  > View transitions are, at the time I’m writing this article, supported in all major browsers, except for Firefox. Until a short time ago you could only use view transitions in a Single Page App (SPA) and not with ‘Multi Page Apps’ that use cross-docum...
- [CSS ::marker Pseudo-element](https://www.w3schools.com/cssref/sel_marker.php) *(w3schools.com)*
  > accent-color align-content align-items align-self all animation animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-timing-function aspect-ratio backdrop-f...
- [A guide to CSS pseudo-elements - LogRocket Blog](https://blog.logrocket.com/css-pseudo-elements-guide) *(blog.logrocket.com · 2024-06-04T21:04:25)*
  > <strong>The ::backdrop CSS pseudo-element represents a viewport-sized box rendered immediately beneath any element being presented in full-screen mode</strong>.
- [View Transitions API and CSS Scroll-Driven Animations: The Browser Wins of 2026 \| Frontend Horizon](https://www.frontendhorizon.com/blog/view-transitions-api-and-css-scroll-driven-animations-the-browser-wins-of-2026) *(frontendhorizon.com · 2026-07-06T00:00:00)*
  > <strong>CSS scroll-driven animations let you tie an animation to scroll position</strong>. No JavaScript IntersectionObserver, no scroll-event listeners, no main-thread blocking — the animation runs on the compositor.
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > Support for CSSPseudoElement, previously defined for ::after, ::before, and ::marker, extends to include several new pseudo-elements: ::backdrop: Helps close a dialog when the backdrop is clicked without interfering with clicks inside the dialog cont...
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > Support for CSSPseudoElement, ... <strong>::backdrop: Helps close a dialog when the backdrop is clicked without interfering with clicks inside the dialog content, eliminating the need for complex intersection logic</strong>...
- [Microsoft Edge 152 web platform release notes (Aug. 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > <strong>The CSSPseudoElement interface now supports the ::backdrop, ::scroll-marker, and ::view-transitions pseudo-elements, in addition to the ::after, ::before, and ::marker pseudo-elements</strong>.
- [Chrome 152 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/152) *(chromestatus.com)*
  > Tracking bug #327449602 ↗ (opens ... new pseudo-elements: ::backdrop: <strong>useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog&#x27;s content</strong>....
- [Intent to Ship: ::scroll-marker and ::scroll-marker-group for Carousel, ::column pseudo element for Carousel and ::scroll-button() pseudo elements](https://groups.google.com/a/chromium.org/g/blink-dev/c/7EQ8-VzPZh0/m/NMyrGCjuAAAJ) *(groups.google.com)*
  > Can you do a triage pass over the open issues and summarize here what you see the web compat risk to be for potentially upcoming spec changes to resolve the issues? Given this is an unpolyfillable CSS feature I assume we don&#x27;t expect much adopti...
- [CSS Wrapped 2024 - Chrome Demos](https://chrome.dev/css-wrapped-2024) *(chrome.dev)*
  > This year we also welcomed Safari in shipping view transitions and are looking forward to seeing Firefox continue working on their same-document implementation. ... Scroll-driven animations are a common UX pattern on the web. A scroll-driven animatio...
- [PWA \| Backdrop CMS](https://backdropcms.org/project/pwa) *(backdropcms.org · 2026-01-06T00:00:00)*
  > This module provides basic components to progressively enhance your website with offline functionality. It uses Service Worker and manifest.json to provide a more app-like experience on mobile devices · <strong>Visit the configuration page (/admin/co...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16597.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6516055192240128`)*
  > &gt; *No information provided* &gt; &gt; ... generated by Chrome Platform Status &gt; &lt;https://chromestatus.com&gt;. &gt; -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-dev&quot; group</s...
- [Re: \[blink-dev\] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16676.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6516055192240128`)*
  > &gt;&gt;&gt; *No information provided* &gt;&gt;&gt; &gt;&gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt;&gt; https://<strong>chromestatus.com/feature/6516055192240128</strong>?gate=6196512880197632 &gt;&gt;&gt; &gt;&gt;&gt; T...
- [\[css-pseudo-4\] should CSSPseudoElement have a pseudo() method? · Issue #3836 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3836) *(github.com)* *(Cites: `https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface`)*
  > https://<strong>drafts.csswg.org/css-pseudo-4</strong>/#CSSPseudoElement-interface You can get to the pseudo-element of an element with Element.pseudo(). But some pseudos are defined to have other pseudos hanging off them, like with ::part(...
- [Allow user-select on ::marker pseudoelements · Issue #8892 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8892) *(github.com · 2023-05-31T21:21:53)* *(Cites: `https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface`)*
  > please link to the spec section you&#x27;re talking about, or at least the spec I&#x27;m unfamiliar with the structure of the spec, but it pertains to the ::marker pseudoelement. I guess that means this: https://<strong>drafts.csswg.org/css...
- [\[css-pseudo\] highlight pseudos and non-applicable properties · Issue #7591 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7591) *(github.com · 2022-08-11T10:45:36)* *(Cites: `https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface`)*
  > https://drafts.csswg.org/css-pseudo-4/#highlight-styling <strong>The highlight pseudo-elements can only be styled by a limited set of properties that do not affect layout and can be applied performantly in a highly dynamic environment</stro...

## 📚 Platform Documentation & Specifications

- [\[css-pseudo-4\] should CSSPseudoElement have a pseudo() method? · Issue #3836 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3836) *(github.com)*
- [Allow user-select on ::marker pseudoelements · Issue #8892 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8892) *(github.com)*
- [\[css-pseudo\] highlight pseudos and non-applicable properties · Issue #7591 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7591) *(github.com)*
- [A beginner-friendly guide to view transitions in CSS \| MDN Blog](https://developer.mozilla.org/en-US/blog/view-transitions-beginner-guide) *(developer.mozilla.org)*
- [CSS view transitions - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/View_transitions) *(developer.mozilla.org)*
- [scroll-marker CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker) *(developer.mozilla.org)*
- [Use CSS transitions to scroll to element · GitHub](https://gist.github.com/desandro/4206095) *(gist.github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/152.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/152.md) *(github.com)*
- [CSSPseudoElement](https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement) *(developer.mozilla.org)*
- [Using element-scoped view transitions](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using_element-scoped) *(developer.mozilla.org)*
- [CSSPseudoElement: pseudo() method](https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement/pseudo) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 44 result(s) found across 7 planned queries — **26 verified relevant**
  - `"chromestatus.com/feature/6516055192240128" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"drafts.csswg.org/css-pseudo-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions" API` — *Core feature API query* (3 returned)
  - `"CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"transitions.it" OR ":scroll-marker" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 21 result(s) found — **17 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 348 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 4 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6516055192240128)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6516055192240128)
- [Specification](https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface)
