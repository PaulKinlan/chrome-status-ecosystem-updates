# Light dismiss improvements for popovers and dialogs

> **Report Week:** 2026-W36 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Improves and simplifies the light dismiss behavior for popovers and dialogs to fix a few bugs. "Light dismiss" is the behavior where clicking outside of a popover or dialog closes it. The fixed bugs include making scrolling gestures on touch screens no longer trigger light dismiss and making right clicks no longer trigger light dismiss.

The underlying mechanism of this change is that the browser will use click events to trigger light dismiss instead of a combination of pointerdown and pointerup events.

### Motivation

We need to fix these bugs with light dismiss:
https://issues.chromium.org/issues/408010435
https://issues.chromium.org/issues/425579196

## Ecosystem Status

- **Momentum:** High (460 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Light dismiss improvements for popovers and dialogs refactor the light dismiss trigger mechanism from pointerdown/pointerup combinations to standard click events in WHATWG HTML (PR #11536). Enabled by default starting in Chrome 154, this update eliminates long-standing mobile usability bugs, preventing touch-scrolling gestures and right-click context menus from inadvertently dismissing open overlays. Standardized across the WHATWG HTML and OpenUI working groups, this refinement brings predictable behavior to native HTML popovers and dialogs with the closedby attribute.

### Recommendations
- Actionable Advice: Web developers can rely on default light dismiss behavior without implementing custom pointer event suppression or backdrop drag-detection workarounds. Continue testing overlay touch interactions in mobile environments and remove legacy JavaScript hacks previously needed to prevent touch-scroll dismissals.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Packages & Polyfills

- [@inertiaui/vanilla](https://www.npmjs.com/package/@inertiaui/vanilla) `v1.3.1` — A lightweight vanilla TypeScript library providing UI utilities for dialogs, animations, focus management, menu navigation, click outside detection, floating element positioning, and common helper functions. Framework-agnostic and designed to integrate se

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHff6_TP9YmDWtf2J_n-Br7e61o5GEqtvV67C7M1aamOs9oluDrleelPEekOS2Ago7yXffdAur9aXrLKl-_Z5aCmmUyxkBiFGLJo99vbQv5LBUfJS-M9ZSkeoLRo-JGvEO5N0U=) *(vertexaisearch.cloud.google.com)*
  > Popover = hint | Blog | Chrome for Developers 跳至主要內容 / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH24bd0q0cU7693e89JOCRCGwIur6ymyEtUAlBOEMavuziJAtMuZnIQRBtg17ZcLHPTE_bE9F7AgE2PMGGWLEmPwMpyGnTfgHu625ddNyKV2lysmt7QMc7BYGw2iPsZgg9Ni2ZF0KZy46BNFccBCdbrjtfgFC1Lkw0PKn0trvOdljzsPZHvBk3SaJE=) *(vertexaisearch.cloud.google.com)*
  > popover HTML global attribute - HTML | MDN Skip to main content Skip to search Toggle sidebar Web HTML Reference Global attributes popover Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 中文 (简体)...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG9efqgPQ1J2n83NUgH8gH-TFjkqf9pDz1qVkmZpPYayFv18-xgHSqgckNXZmRAhMKNxsEt8pzvWClOWhhvdHpMeB0pUGVNQ4RV6IqSqMutSucS5iHaH7G9kvdFEPoyM3mWuMNmLg8=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [modern-css.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGZB7PthnA5xlE5Ep0Tk1_8Ogm7KraErpjynId2lp1qKf0ZEw29DC7UWSxWSWqWSYQ2mXLRGU5fPinnGARvjJtK65cFKmnezjzANB0Lc21VAh1FnuMHpBjCrsbSx6dRjPh5Ip-Fj6rvM9-yk9Mm8nF5KBatlX4QGkoDWwYUnFXJgKU=) *(vertexaisearch.cloud.google.com)*
  > CSS Dialog Light Dismiss with closedby Attribute Explore All snippets CSS snippets HTML snippets CSS Tools CSS Blocks Articles Cheatsheet Resources AI Tools UI Terms CSS Reference Overview Properties Selectors At-rules Functions Units Interop 2026 Br...
- [chromestatuslite.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGvQiv8eJkDQHfUYvMjjHkyKJu6lONfh4-GbgETR8bdiLUf7RGE1oOdFHiFPd2BPBeqd15gn2m1ZjGRTCDsVIC0_gGAz1ETDH_pZ4K1k3PEWZBsKw==) *(vertexaisearch.cloud.google.com)*
  > Chrome Release 154 Chrome Release Summary Chrome version: 154 153 152 151 150 149 148 147 +147 146 145 144 143 142 141 140 139 138 137 136 135 134 133 132 131 130 129 128 127 126 125 124 123 122 121 120 119 118 117 116 115 114 113 112 111 110 109 108...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFgdIhm9HC2UAyFbyZ6UJn2p8DgRgwKxGXawAHbLr7Y4TI5SNQYboT1aHuQJ35DMS46pbhKFeRIFz9eTyi3ZMGsA2vfvAMQ7qXgwyCsSIbB9UuwyWNmY4YaT619CoTef4drLQ==) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFFOUfP57NSqkrpMP8SrlTIirl4WHeg1EDC0tg4YuNxamd2yjcV-XGiNOBfr-XnYl5BJtJiKZ1mYOP6Yt1d5Akre8D4z6CFppyGbFyYCBaA72Bdw6Dj_S30KLrpBSs=) *(vertexaisearch.cloud.google.com)*
  > Chrome features Chrome features Enable with --enable-features , disable with --disable-features : Name Description Enabled by default AbortNavigationsFromTabClosures Marks navigations as aborted when the NavigationHandle is destroyed mid navigation, ...
- [googlesource.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE_tikw_O6ban3Kd8xDW9mMhf36Y3f1BUZHk5l8f_lXelSeq7oB9KQ77en5dPCgAx16mzA66z75R4BT9ug1kBZV3c7Sk8di4U1P0tfH4HvFwCU7j1NC8XHd0pahoCZftjoFuXbeol1GEr2NPF4Ncy_fPlW7e4tY7GHrzkRiq2A8QOBROw5mqpYxwBItRtgtcvIdoQ1HmwBTM0oBPIPq45zEqMZMVzlhWDo4edzcbbrw09_R) *(vertexaisearch.cloud.google.com)*
  > third_party/blink/renderer/platform/runtime_enabled_features.json5 - chromium/src.git - Git at Google Sign in chromium / chromium / src.git / HEAD / . / third_party / blink / renderer / platform / runtime_enabled_features.json5 blob: 7bc49f7652710fe7...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGAmwMbWCRvhHgXmBj8qHiKEP8yZaF08fVc1SFO3jC5PETCX4fhoeBbMUh2nyTVtUIPIgLGyD3qPrccsTzxXqsR1ATCvmTS1hQxkvyQi-DyyOsKo5904_Nu86s1b61fmgbhuBMSH1Wr1w4=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss improvements for popovers and dialogs"** updates how browsers detect outside interactions to dismiss popovers (`popover="auto"` or `popover="hint"`) and dialogs using declarative dismiss mechanics (such as
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH_54n9_amh1HkPC2nj6pjCaTmlQZjuFaOuDYrVWsajfORJtDnK_bM0FyD4vek2dI1elWxjLlMXhruR4Z4e27pxO94anaHNVROEdck7-Ce2BMtr7nKO_r0LCWRkBYEhu_k1QIVwtdgK3dP_) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss improvements for popovers and dialogs"** updates how browsers detect outside interactions to dismiss popovers (`popover="auto"` or `popover="hint"`) and dialogs using declarative dismiss mechanics (such as
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHmyQ3p6s5UHsuuHUpfJsedwgIY3kkwULEovht9UUwReK2kYCLuIIKibZ8VMgy4t-GM8kyA5BlyAhkbhNTFiBcUZcMQzGOencZY3ZamAaOKCiMFty-ProKD-woJ1QqojNkxNnYa_Kb6i4SLoezdVaWa6Eb2gyFmFjQWT0QB3_xDHUc=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss improvements for popovers and dialogs"** updates how browsers detect outside interactions to dismiss popovers (`popover="auto"` or `popover="hint"`) and dialogs using declarative dismiss mechanics (such as
- [nerdy.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHqyPnJMy68za0ZJlDGBB8lJj5bK11UzTDx6CZ7Mc1qQwx8fAqT1C4kOnlU2BmELrsS9H5h23eA8kuWO-5KvpI_9mEDJHMU386qa8weYZiwQl_HKog=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss improvements for popovers and dialogs"** updates how browsers detect outside interactions to dismiss popovers (`popover="auto"` or `popover="hint"`) and dialogs using declarative dismiss mechanics (such as
- [scottohara.me](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGpvfa__CcWZ_mnsX7-ZMYoNGXoc9K9cCGHE4_d_NZXxWaBgGCdMaBaQtQnusrD-V4kypsFz41-zeeT2t3r8hfX4YH7LMkAa_A7OXiCP6bzRxLGflJxwvmU6dAB1u02aFAVt4Z_dIzZI2eXVe8=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss improvements for popovers and dialogs"** updates how browsers detect outside interactions to dismiss popovers (`popover="auto"` or `popover="hint"`) and dialogs using declarative dismiss mechanics (such as
- [scottohara.me](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFw5f9qpBxkuEC9qc9R5h7z0HEG1HAsPcJjrqrbAOHJWmvrOj7DEt-7GMuUYa_SLibHWN1VSImtFIa-q6lmndw2_izoEut-ZuU8RQubtrOXEtyq9cgTjgUqBO4CQxv7S_CdmTOtd1iMBBWksoJl) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss improvements for popovers and dialogs"** updates how browsers detect outside interactions to dismiss popovers (`popover="auto"` or `popover="hint"`) and dialogs using declarative dismiss mechanics (such as
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEBo6D41KtrqJ4bm7JghET8B4xaCjWoj90VNFNIxlaex3rgMmU4xA3d9wl88VBiqusc1T7MoRTJ1ku0ydl3L7udM1Jf-J-gl-D_KQeGYweJXBru5kMjgSYMUhWPpFrKimRX) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss improvements for popovers and dialogs"** updates how browsers detect outside interactions to dismiss popovers (`popover="auto"` or `popover="hint"`) and dialogs using declarative dismiss mechanics (such as
- [[blink-dev] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs](http://www.mail-archive.com/blink-dev@chromium.org/msg17139.html) *(mail-archive.com)*
  > *No information provided* ... on Android 145 Shipping on WebView 153 *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/6209615938322432</strong> This intent message was generated by Chrome Platform Status &lt;http...
- [Popover and dialog | web.dev](https://web.dev/learn/css/popover-and-dialog) *(web.dev · 2025-08-22T00:00:00)*
  > The manual popover is unaffected by the auto or hint popovers, and when it opens, it doesn&#x27;t close any hint or auto popovers. However, <strong>if you open a manual popover by clicking on a button, this does trigger a light dismiss of hint and au...
- [Popups, dialogs, tooltips, and popovers— UX Patterns #2 | by Alicja Suska | Bootcamp | Medium](https://medium.com/design-bootcamp/popups-dialogs-tooltips-and-popovers-ux-patterns-2-939da7a1ddcd) *(medium.com · 2023-07-16T00:23:57)*
  > They usually don’t use backdrops ... use the ‘light dismiss’ — <strong>The popover will disappear if a user hovers out of the element that triggered it or clicks out of the popover</strong>....
- [The HTML popover attribute nobody warned you about just killed your modal JS - Botmonster Tech](https://botmonster.com/web-dev/native-html-popover-attribute-menus-tooltips-modals) *(botmonster.com · 2026-07-13T00:00:00)*
  > When you need a true modal with a focus trap, an inert background, and a ::backdrop overlay, use &lt;dialog&gt; instead of popover. The new closedby attribute ships in Chrome 134+ and is part of Interop 2026 . It adds light-dismiss to dialogs: &lt;di...
- [Dialogs and popovers seem similar. How are they different? | hidde.blog](https://hidde.blog/dialog-modal-popover-differences) *(hidde.blog)*
  > For this reason, it will be rare (but not impossible) for them to have a backdrop or focus trap. Popovers can have ‘light dismiss’ behaviour, meaning <strong>they close by themselves, except when they are of the “manual” type</strong>.
- [Accessible Popovers: Code Examples and WCAG Guidance](https://a11y-examples.com/examples/popovers) *(a11y-examples.com · 2026-08-08T00:00:00)*
  > The Popover API is a browser-native mechanism for creating light-dismiss overlays — popovers that close when the user clicks outside, presses Escape, or opens another popover. It handles top-layer rendering, light dismiss, and aria-expanded toggling ...
- [Native Dialogs and the Popover API — What you need to know](https://www.oidaisdes.org/blog/native-dialog-and-popover) *(oidaisdes.org · 2024-06-15T00:00:00)*
  > I hope my learnings can help you to make great use of these awesome features in your own projects. Happy coding! 😊 · <strong>Use the new closedby attribute instead of JavaScript to add light dismiss behavior to the dialog</strong>.
- [HTML Standard](https://html.rivoal.net/multipage/popover.html) *(html.rivoal.net)*
  > If ancestor is null, then set ancestor to document. If sameTarget is true, then run hide all popovers until given ancestor, false, and true. <strong>Light dismiss open popovers will be called by the Pointer Events spec when the user clicks or touches...
- [6.11 The popover attribute - HTML](https://whatpr.org/html/9241/popover.html) *(whatpr.org · 2023-05-09T00:00:00)*
  > If ancestor is null, then set ancestor to document. If sameTarget is true, then run hide all popovers until given ancestor, false, and true. <strong>Light dismiss open popovers will be called by the Pointer Events spec when the user clicks or touches...
- [267688 – [popover] Light dismiss doesn't work on iOS/iPadOS](https://bugs.webkit.org/show_bug.cgi?id=267688) *(bugs.webkit.org)*
  > WebKit Bugzilla · Browse · Search+ · Log In · Top of Page · Format For Printing · Clone This Bug · Reports
- [Popover = hint | Blog | Chrome for Developers](https://developer.chrome.com/blog/popover-hint) *(developer.chrome.com · 2025-02-26T00:00:00)*
  > Both popover=&quot;auto&quot; and popover=&quot;hint&quot; support light dismiss, meaning they <strong>automatically close when the user clicks outside them, or hits Esc on the keyboard</strong>.
- [Introducing the popover API | Blog | Chrome for Developers](https://developer.chrome.com/blog/introducing-popover-api) *(developer.chrome.com · 2023-05-23T00:00:00)*
  > Using the popover attribute on its own is actually a shortcut for popover=&quot;auto&quot;. When opened, the default popover will force close other auto popovers, except for ancestor popovers. <strong>It can be dismissed via light-dismiss or a close ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs](http://www.mail-archive.com/blink-dev@chromium.org/msg17139.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6209615938322432`)*
  > *No information provided* ... on Android 145 Shipping on WebView 153 *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/6209615938322432</strong> This intent message was generated by Chrome Platform Statu...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-17 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0002.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11536`)*
  > (4 by emilio, josepharhar) ... Expand disabled form control event handling spec text (1 by josepharhar) https://github.com/whatwg/html/pull/12219 [agenda+] - #11536 Change light dismiss to use click events (1 by josepharhar) https://<strong...

## 📚 Platform Documentation & Specifications

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-17 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0002.html) *(lists.w3.org)*
- [Add light dismiss functionality to `<dialog>` · Issue #9373 · whatwg/html](https://github.com/whatwg/html/issues/9373) *(github.com)*
- [Using the Popover API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using) *(developer.mozilla.org)*
- [Add popover light dismiss integration by josepharhar · Pull Request #460 · w3c/pointerevents](https://github.com/w3c/pointerevents/pull/460) *(github.com)*
- [1804567 - [wpt-sync] Sync PR 37389 - Add WPT for popover light dismiss pointer events](https://bugzilla.mozilla.org/show_bug.cgi?id=1804567) *(bugzilla.mozilla.org)*
- [Bug 1821732 - implement popover light dismiss](https://bugzilla.mozilla.org/show_bug.cgi?id=1821732) *(bugzilla.mozilla.org)*
- [popover HTML global attribute - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover) *(developer.mozilla.org)*
- [popover HTML global attribute - HTML | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover) *(developer.mozilla.org)*
- [HTMLElement: popover property - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/popover) *(developer.mozilla.org)*
- [HTMLInputElement: popoverTargetAction property - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/popoverTargetAction) *(developer.mozilla.org)*
- [popover light dismiss behavior is not specified for Esc key · Issue #9143 · whatwg/html](https://github.com/whatwg/html/issues/9143) *(github.com)*
- [Don't throw when popover/dialog is in requested state by josepharhar · Pull Request #9142 · whatwg/html](https://github.com/whatwg/html/pull/9142) *(github.com)*
- [Should we deprecate `dialog.show()`? · Issue #9376 · whatwg/html](https://github.com/whatwg/html/issues/9376) *(github.com)*
- [Should non-modal top layer elements that come after modal dialogs also escape inertness? · Issue #10811 · whatwg/html](https://github.com/whatwg/html/issues/10811) *(github.com)*
- [Add popover=hint by josepharhar · Pull Request #9778 · whatwg/html](https://github.com/whatwg/html/pull/9778) *(github.com)*
- [Popovers are broken when shown in a `contextmenu` event listener · Issue #10905 · whatwg/html](https://github.com/whatwg/html/issues/10905) *(github.com)*
- [DOM improvements in Firefox 3](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/3/DOM_improvements) *(developer.mozilla.org)*
- [XUL improvements in Firefox 3](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/3/XUL_improvements_in_Firefox_3) *(developer.mozilla.org)*
- [SVG improvements in Firefox 3](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/3/SVG_improvements) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 30 result(s) found across 7 planned queries — **28 verified relevant**
  - `"chromestatus.com/feature/6209615938322432" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c/pointerevents/issues/542" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"github.com/whatwg/html/pull/11536" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"popover" OR "dialog" "light dismiss" ("scroll" OR "right click" OR "touch")` — *Finds developer blog posts and guides detailing recent fixes to popover/dialog light dismiss behavior during touch gestures and right clicks.* (8 returned)
  - `"popover" "light dismiss" ("click event" OR "pointerdown" OR "pointerup")` — *Discovers code patterns and documentation exploring the mechanism shift from pointer events to click events for light dismiss.* (8 returned)
  - `site:developer.chrome.com OR site:webkit.org OR site:developer.mozilla.org "light dismiss" popover` — *Surfaces official browser release notes, compatibility updates, and web platform announcements regarding popover light dismiss improvements.* (8 returned)
  - `"light dismiss" (site:github.com/whatwg/html OR site:github.com/w3c/pointerevents OR site:issues.chromium.org) ("popover" OR "dialog")` — *Retrieves standards discussions, Chromium bug tracker updates, and WHATWG/W3C pull request debates on fixing edge-case dismiss triggers.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 15 result(s) found — **15 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 8 result(s) found — **27 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6209615938322432)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6209615938322432)
- [Specification](https://github.com/whatwg/html/pull/11536)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/408010435)
