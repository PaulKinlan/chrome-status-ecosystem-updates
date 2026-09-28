# Light dismiss improvements for popovers and dialogs

> **Report Week:** 2026-W40 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Improves and simplifies the light dismiss behavior for popovers and dialogs to fix a few bugs. "Light dismiss" is the behavior where clicking outside of a popover or dialog closes it. The fixed bugs include making scrolling gestures on touch screens no longer trigger light dismiss and making right clicks no longer trigger light dismiss.  The underlying mechanism of this change is that the browser will use click events to trigger light dismiss instead of a combination of pointerdown and pointerup events.

### Motivation

We need to fix these bugs with light dismiss:
https://issues.chromium.org/issues/408010435
https://issues.chromium.org/issues/425579196

## Ecosystem Status

- **Momentum:** High (380 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Shipping enabled by default in Chrome 154, this feature simplifies and corrects native light dismiss for popovers and dialogs by relying on standard 'click' events rather than a hybrid 'pointerdown'/'pointerup' heuristic. This resolves longstanding mobile usability issues where touchscreen scrolling gestures triggered accidental dismissals, and desktop bugs where right-clicks/context menus inadvertently closed popovers. The change formalizes fixes under WHATWG HTML PR #11536 and Pointer Events issue #542, solidifying core overlay ergonomics.

### Recommendations
- Actionable Advice: Developers can safely continue using standard Popover and Dialog light dismiss features and should audit custom code to retire manual 'pointerdown' event-canceling hacks. Keep cross-browser testing active on iOS Safari and Firefox to verify consistent scroll-dismiss behavior until non-Chromium engines adopt the click-based specification update.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Dying Light (@DyingLightGame) on X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Dying Light (@DyingLightGame) on X](https://twitter.com/DyingLightGame/status/1620527423602163716?lang=en) — *by @DyingLightGame, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFMW1-n1RF9mTpmJunLpYfbBhqfcii7G2DiakNJ6sRwn1sHE_0JM0kxaxbON1bywc8zGV5ufPYLOt32t3A4-_8d6uZQMbw8RVVgHlFh5TTQGdGYSb8rtNZ8Q5DWdyDGjxm89Op_K5g=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEoo7IwfQyYtAEuYAEJpp0J_2TI7BZxANfgvtwYdR7EMmw40Q4BVVERzYoNN_eCRgSwGzUUlPcp6B2vqyNSFtZSWg3-h9iyCJRIrUaEqnTYIcyJULKYiyOHEK7LOKpi0R7ak9k0uxGm0A==) *(vertexaisearch.cloud.google.com)*
  > الميزات الجديدة في الإصدار 134 من Chrome | Blog | Chrome for Developers التخطّي إلى المحتوى الرئيسي / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEv1EeUjOF05pFJL-RhPrAeEnydPz_qHpGMzyUSt_tArT094uGoEB4HKvmzJ3C4mRUgX3ze3eiK0DOAC82D5XdxjLBESY-Dmtek4wHTKoIa3yP0TefsKePElVhDfwIpNz2b4WylS-mxLitVrfY56Hog) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQETT6EgPWmi4EOjvOkkCnM3xxCNE8Xf4GV1Wy2zJfXDDRcOO9aHxVnHCEDgG19tTlO86o2EGI37dJPrWa9lElB2WWtGgAgJp4uCNRYinWrBMJpbpNdZX43vcFQLMfM=) *(vertexaisearch.cloud.google.com)*
  > Chrome features Chrome features Enable with --enable-features , disable with --disable-features : Name Description Enabled by default AbortNavigationsFromTabClosures Marks navigations as aborted when the NavigationHandle is destroyed mid navigation, ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHyJmLuMNoEbTWliNjklp05mErCgFWlqKTsi5ime9XIWbvjz4uEubub8pMJ44FDJ02utulYWyGGL_LztFJAAScfpQCOIHOQRtI5YgmSyk8GCsIRreB8HuSQlg458StdW7siu8m7FZh8) *(vertexaisearch.cloud.google.com)*
  > ক্রোম ১৫৪ বিটা | Blog | Chrome for Developers সরাসরি আসল কন্টেন্টে যান / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGZ2tIRalr0nPqBE7R7jWOKb7-bXPgft4pcHtmoV8io8Y7MksainkcTWJlu-lbPvw6MQRBPBOpou0mzjCQv6PM9CDe60ulZtc261teu15Aj0gR5L1AFymfKCaGmLgQ1oeg6xWCY) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFyJM8qmP0xRWQHILpOfN5ONCuFAp3diPVW5Gj61jSl33qIYuYfx1e8dBlRl8nbHX8jbYgHwCvLjxpEajKfn0IYIp18D4fmfDqjFDCo40q5zq9umdfDwLC8maRm2gOiPC0cNC8tH6g9) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG30rglbRR9YEN34mjbpA6OalUS5_8Ej2dsJI_hvxzemS63Z8nJwCXMdcCby2J0HO21Fc_JCeQ6HI6TUlNTdbOMPi6-lj_l1iRl-XPjis9hbcPnKZYPsErpHV-EuX8OHmKGV_m423F-HVDpjDXO1vnkbZTnbccAmTCYugFS5BAjGjRfXjyg) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge 154 web platform release notes (Sep. 24, 2026) - Microsoft Edge Developer documentation | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take adv...
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFP-7rOO62k50jbP3ts3Y7Jpnq4Pfs73lp3BZYoGsFMWVSH0hqEZ9ZgI0ehV5P6O1urr_suQFPs0aIBafPH71xOgQbSTwlzmVNDt-YIaa5gtbC44Iz21fj9vhIolzV5V3mS) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss"** is the native web platform mechanism that automatically closes an active overlay (such as an element using the `popover` attribute or a `<dialog closedby="any">`) when the user interacts outside of its
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFjto-GL_fcBKClLcQuSoWcR3wjZDPQ0G7V6u31ZNBUvVxDSE0CT4yoMybxi28OO2bwP1Dh_8aEMdEJVp_FFKXr009zosDO5VK1zsUoru0MT2vczs2pYXMVzQ3Q1abiHuNhCB4=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss"** is the native web platform mechanism that automatically closes an active overlay (such as an element using the `popover` attribute or a `<dialog closedby="any">`) when the user interacts outside of its
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEbhzR-sm4oy7iRASF6pg2vzLObtdo0SlJJmaTwHfkczIpETm5u5wteVWK9IkTKgI0vv6QXFjuPZiwOeuBceh-gBakH5bAJCn2tAxC6YldH-d1BG8M0o5RcMkmNsa44RI65-N8ogGVQD-RpxHkSxZ_Zdy_2BhkiKfmcNQx4MLifUjtpH1Tg) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss"** is the native web platform mechanism that automatically closes an active overlay (such as an element using the `popover` attribute or a `<dialog closedby="any">`) when the user interacts outside of its
- [scottohara.me](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGBrkpV-3wJ57HPjxzYCvHISStioSsfJQ8e0xoU0zgGMImELRZUoUMeKTI_DF91spnYjCBXKGfLr2xkX9pHvw7RJv-hKKj5bta2TvGyvLP1uBwSoa_j6d5BVYUrEUTlWCZ5Zewx5YD79cn931M=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss"** is the native web platform mechanism that automatically closes an active overlay (such as an element using the `popover` attribute or a `<dialog closedby="any">`) when the user interacts outside of its
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFDLEEP3h5RPlZAtQ_euD1C-Bi6eDPQzR7O0kLx-cK-wW5daRL94iXUw-csoUh5huBLBGGcEdv3wGDIGmpL3pz8HR3CFTW0y_hItTFb2eIufnKmRWpRRqIlih84psm1Vi209XuOevyC6w35hHJyQBQqUFpnU5-SEMBS08-GLRWtNqlBGEuu7vwx4xM=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss"** is the native web platform mechanism that automatically closes an active overlay (such as an element using the `popover` attribute or a `<dialog closedby="any">`) when the user interacts outside of its
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFcBEzi-2cOWPpl3uaCOWw_Z3GFaP8Ol4J3KmB_hKlXez430ON_A0D-9EYScJo-l8nNglPacDTbgTLfC-50zyZwWM_D3erC-g4nDyKdmk7BuWwMpWuDcKqGOAjA4fSxLi-XYFq8_0SJVDm0) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss"** is the native web platform mechanism that automatically closes an active overlay (such as an element using the `popover` attribute or a `<dialog closedby="any">`) when the user interacts outside of its
- [eleken.co](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHL4mqIZZws0FPsqrbNvg-755m2PsKSj6ymGf1qmu6Yf6sp-VEocbxdH0mhiOjB_UGEPZQ8bV5WuxPsC27ar8x2YNWvqrHApfMryNmz-1hkYwcMVocOoAj2y5G_2iTHf14=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss"** is the native web platform mechanism that automatically closes an active overlay (such as an element using the `popover` attribute or a `<dialog closedby="any">`) when the user interacts outside of its
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFDLkVKuosv8OymKbWbhhBb93AdE25I5byoFRHI1Dtbqp_Uxmj1ARPTJ_YFr81Cfp_FYScdIT6z7zDM50HLj0rd0lJd7QfVuDmDLtSgtSdg-_5CEpIihMApvY_KrqabUpZAKExl-fw=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss"** is the native web platform mechanism that automatically closes an active overlay (such as an element using the `popover` attribute or a `<dialog closedby="any">`) when the user interacts outside of its
- [Scroll on touch device triggers light dismiss \[408010435\] - Chromium](https://issues.chromium.org/issues/408010435) *(issues.chromium.org)*
  > Enable LightDismissFromClick by default Spec PR: https://github.com/whatwg/html/pull/11536 Chromestatus: https://<strong>chromestatus.com/feature/6209615938322432</strong> PSA: https://groups.google.com/a/chromium.org/g/blink-dev/c/RxOpZkL4yqM Fixed:...
- [\[blink-dev\] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs](http://www.mail-archive.com/blink-dev@chromium.org/msg17139.html) *(mail-archive.com)*
  > *Specification* https://github.com/whatwg/html/pull/11536 https://github.com/w3c/pointerevents/pull/460 *Summary* <strong>Improves and simplifies the light dismiss behavior for popovers and dialogs to fix a few bugs</strong>. &quot;Light dismiss&quot...
- [How to Open and Close HTML Dialogs \| Aleksandr Hovhannisyan](https://www.aleksandrhovhannisyan.com/blog/how-to-open-and-close-html-dialogs) *(aleksandrhovhannisyan.com · 2026-01-23T00:00:00)*
  > Our dialog can be closed either with the Escape key (natively supported) or with our custom close button. But users are also accustomed to clicking outside dialogs to dismiss them, a behavior known as light dismiss that’s been supported by modal libr...
- [Use popovers to simplify a workbook interface \| Sigma Documentation](https://help.sigmacomputing.com/docs/use-popovers-to-simplify-a-workbook-interface) *(help.sigmacomputing.com)*
  > <strong>Popovers open on demand without obscuring the rest of the workbook page</strong>, which can help create a more efficient and simplified workbook interface.
- [Fixing Google Chrome compatibility bugs in websites - FAQ](https://www.chromium.org/Home/chromecompatfaq) *(chromium.org)*
  > When diagnosing JavaScript issues, <strong>use Google Chrome&#x27;s built-in JavaScript debugger</strong>. Do not use browser-specific (e.g. -moz-*, -webkit-*, -ie-*) css selectors such as -moz-center or -webkit-highlight for critical visual features...
- [Chromium Web Development Style Guide](https://chromium.googlesource.com/chromium/src/+/main/styleguide/web/web.md) *(chromium.googlesource.com)*
  > This style guide targets Chromium frontend features implemented with TypeScript, CSS, and HTML. Developers of these features should adhere to the following rules where possible, just like those using C++ conform to the Chromium C++ styleguide. ... No...
- [246875 - chromium - An open-source project to help move the web forward. - Monorail](https://bugs.chromium.org/p/chromium/issues/detail?id=246875) *(bugs.chromium.org · 2022-07-14T00:00:00)*
  > About Monorail User Guide Release Notes Feedback on Monorail Terms Privacy
- [12 Common CSS Browser Compatibility Issues To Avoid In 2026](https://www.testmuai.com/blog/css-browser-compatibility-issues) *(testmuai.com · 2026-08-26T12:00:00)*
  > One such feature is animated grids which work perfectly in the Gecko engine of Mozilla but not on Chromium and Webkit. ... Browser support gaps in CSS Subgrids are resolved now. Chrome and Edge added support in version 117, Firefox has supported it s...
- [Find invalid, overridden, inactive, and other CSS \| Chrome DevTools \| Chrome for Developers](https://developer.chrome.com/docs/devtools/css/issues) *(developer.chrome.com · 2022-11-15T00:00:00)*
  > The Styles pane recognizes many kinds of CSS issues and highlights them in different ways.
- [How to Create Browser Specific CSS Code \| BrowserStack](https://www.browserstack.com/guide/create-browser-specific-css) *(browserstack.com · 2026-06-17T07:25:18)*
  > Given its ease of use and flexibility, CSS Grid has become a fixture among web designers and developers. However, elements of CSS Grid do not function consistently on all browsers. For example, animated grids operate seamlessly in Mozilla’s Gecko eng...
- [javascript - Chromium css/js support - Stack Overflow](https://stackoverflow.com/questions/55746807/chromium-css-js-support) *(stackoverflow.com)*
  > Does this infer that js/css support is inline with Chrome version 47? ... Yes, Chrome version 47 is based upon Chromium 47. The only difference is Chrome has Google branding.
- [Intent to Ship: The Popover API](https://groups.google.com/a/chromium.org/g/blink-dev/c/uB_jxbRmjAM/m/Ona8hJ1BAQAJ) *(groups.google.com · 2022-10-27T00:00:00)*
  > <strong>This API uses a new `popover` content attribute to enable any element to be displayed in the top layer</strong>. This is similar to the &lt;dialog&gt; element, but has several important differences, including light-dismiss behavior, popover i...
- [Intent to Implement and Ship: Rich PWA installation dialogs - desktop](https://groups.google.com/a/chromium.org/g/blink-dev/c/HWXv_04ORyU) *(groups.google.com)*
  > <strong>Gives developers the ability to add more data (descriptions and screenshots) to their PWA install dialog and gives users more insight into the apps they are about to install</strong>. This implements PWA richer install UI on desktop. See prev...
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-23T06:03:02)*
  > Light dismiss <strong>closes a popover or dialog when a user clicks outside of it</strong>. With this update, the browser uses click events instead of a combination of pointerdown and pointerup events to trigger light dismiss, ensuring that scrolling...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Scroll on touch device triggers light dismiss \[408010435\] - Chromium](https://issues.chromium.org/issues/408010435) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/6209615938322432`)*
  > Enable LightDismissFromClick by default Spec PR: https://github.com/whatwg/html/pull/11536 Chromestatus: https://<strong>chromestatus.com/feature/6209615938322432</strong> PSA: https://groups.google.com/a/chromium.org/g/blink-dev/c/RxOpZkL4...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-17 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0002.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11536`)*
  > (4 by emilio, josepharhar) ... Expand disabled form control event handling spec text (1 by josepharhar) https://github.com/whatwg/html/pull/12219 [agenda+] - #11536 Change light dismiss to use click events (1 by josepharhar) https://<strong...

## 📚 Platform Documentation & Specifications

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-17 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0002.html) *(lists.w3.org)*
- [Using the Popover API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using) *(developer.mozilla.org)*
- [modern-web-guidance/skills/modern-web-guidance/guides/ui-behaviors/light-dismiss-a-dialog.md at main · GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/light-dismiss-a-dialog.md) *(github.com)*
- [refactor(pwa): move app overlays onto Base UI Dialog with Back-to-close by nukipratama · Pull Request #1341 · nukipratama/temari](https://github.com/nukipratama/temari/pull/1341) *(github.com)*
- [fix(pwa): restore immediate press feedback on custom controls · Issue #1207 · nukipratama/temari](https://github.com/nukipratama/temari/issues/1207) *(github.com)*
- [audit(pwa): mobile touch, gesture and native-feel review · Issue #1205 · nukipratama/temari](https://github.com/nukipratama/temari/issues/1205) *(github.com)*
- [Add popover light dismiss integration by josepharhar · Pull Request #460 · w3c/pointerevents](https://github.com/w3c/pointerevents/pull/460) *(github.com)*
- [Popovers are broken when shown in a \`contextmenu\` event listener · Issue #10905 · whatwg/html](https://github.com/whatwg/html/issues/10905) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 39 result(s) found across 12 planned queries — **22 verified relevant**
  - `"chromestatus.com/feature/6209615938322432" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/w3c/pointerevents/issues/542" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"github.com/whatwg/html/pull/11536" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Light dismiss improvements for popovers and dialogs" API` — *Core feature API query* (1 returned)
  - `"Light dismiss improvements for popovers and dialogs" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (5 returned)
  - `"issues.chromium" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Light dismiss improvements for popovers and dialogs" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Light dismiss improvements for popovers and dialogs" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"light dismiss" (popover OR dialog) ("click" OR "pointerdown") scroll touch` — *Finds articles and developer guides detailing the changes in how popovers and dialogs handle touch scrolling and light dismiss events.* (8 returned)
  - `HTML popover "light dismiss" ("right click" OR contextmenu OR "click event")` — *Discovers code implementations and documentation explaining the event mechanism shift from pointer events to click events.* (4 returned)
  - `"Light dismiss improvements for popovers and dialogs" OR ("Intent to Ship" "light dismiss" popover)` — *Identifies official Chromium intent announcements, release tracking, and platform adoption signals.* (1 returned)
  - `"whatwg/html/pull/11536" OR ("w3c/pointerevents/issues/542" "light dismiss")` — *Tracks specification debates, standards rationale, and browser vendor feedback on light dismiss algorithms.* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **16 verified relevant**
- **Twitter / X API v2:** *found 6 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 394 item(s) inspected

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
