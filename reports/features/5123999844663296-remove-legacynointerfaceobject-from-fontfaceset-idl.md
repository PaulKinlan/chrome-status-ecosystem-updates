# Remove [LegacyNoInterfaceObject] from FontFaceSet IDL

> **Report Week:** 2026-W37 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Chromium's FontFaceSet IDL previously used [LegacyNoInterfaceObject], which hid FontFaceSet as a global property and deleted the constructor property from its prototype. This deviated from the CSS Font Loading spec and differed from Safari and Firefox behavior. This change removes [LegacyNoInterfaceObject] from the FontFaceSet IDL, so FontFaceSet is properly exposed as a global property. Since no constructor() is defined in the IDL, calling new FontFaceSet() from JavaScript now throws TypeError: Illegal constructor, matching the spec. This also fixes the historical.html WPT, which was previously failing in Chromium.

### Motivation

Chromium applied [LegacyNoInterfaceObject] to FontFaceSet, hiding it as a global property and breaking "FontFaceSet" in self. This caused 18 WPT idlharness failures and one historical.html failure. Safari and Firefox already expose FontFaceSet globally. This brings Chromium into spec compliance with no new constructor exposed.

## Ecosystem Status

- **Momentum:** High (440 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chromium's removal of [LegacyNoInterfaceObject] from the FontFaceSet IDL aligns Blink with the CSS Font Loading specification and achieves parity with Gecko and WebKit. This change exposes FontFaceSet globally across Window and Worker scopes while ensuring direct invocation via new FontFaceSet() cleanly throws a TypeError due to the lack of an IDL constructor. Resolving 19 failing Web Platform Tests, the update achieves complete multi-engine consensus on interface visibility and prototype chain behavior.

### Recommendations
- Actionable Advice: Continue accessing FontFaceSet instances via document.fonts or self.fonts rather than attempting manual instantiation, and safely utilize global 'FontFaceSet' in self checks for font-loading feature detection.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGJAeG0zKDCPVvBjT8p47yVpwjuwl8HbOb3UWyF1AceXyBD3mhy-vXKXwWpmiP6vmxUgcKcYEwv-sfMlTr360WQoH49D9Ty01Y-qGo_gQvAMRDEpcKulLky7jLS1zSLUjAHFmejw0gs) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGyX9SE2ZiM1VYPYK1Nb96jmLdOuoo4EcmwGobOTHlVQcTAbxZwws3x7R-fnlF5rpnBSqW8U-7A-55X3wmAV4q3x4kPMFiO0C-xQWuz6iGwQVMtBBdgf5nGauvWkuvqltAGH-fd) *(vertexaisearch.cloud.google.com)*
  > Chrome 151 | Release notes | Chrome for Developers Skip to main content / English Nederlands Русский فارسی বাংলা Sign in Release notes Chrome for Developers Docs Release notes Chrome 151 Stay organized with collections Save and categorize content bas...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEzp2uYnF3PZL-nEUFhJucPhD0kUGwtryRE18zaqNIDtZv69wIgs5mkiDYeMTXkqy5ibgJrRbN4xGJHdMjOzhmuwlyBUPgQilmBOzq-FG_OPb6vvAlCAF2logB_1Emdr1vdfASYRijhkosO2qcwix81) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [januschka.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF_6_PE7P6n47GYJ8VedghBgkK6kO0uoRVepF9b7SNcMhsGzS69-1pff2XJcGrMg77olLhKrbUe0chSxgCJFfhachj523rHwjc8clwmlBM7ejelVSi4G4G_65otF1boH9qSKSPAu60eOi5TH1ViLrjPT7AxWmk=) *(vertexaisearch.cloud.google.com)*
  > Chromium changelog -- 2026-06-17 &laquo; all changelogs Chromium changelog -- 2026-06-17 Featured contributors Loading...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQErmEjRyLqfAnzQU2P0YPvMVdjV8crCRLRJNuBjAQOQijxBaA2uwCQJQ6YtrYwaGefTHNlNpX_RwSLC0zyqccImgXFw_kXkyZgoKuRCb42kVOWFJb0BXmFkwkhOAjeaawVdsldsQkUG) *(vertexaisearch.cloud.google.com)*
  > Version bêta de Chrome 150 | Blog | Chrome for Developers Passer au contenu principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी ব...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQESI0AiSfosweAewju6Mymsr5VHsSr0Q9T8V5OQ7m1SXFJ4LYNU5zWiRSBlk7X0mq27U2aD_c-JUnJ7b9Soz7pndvrbImRpzU5u_5217nash1rlw1ufqIyZ2Ho3FBW833_wWkmaB7Ds) *(vertexaisearch.cloud.google.com)*
  > Chrome 151 베타 | Blog | Chrome for Developers 기본 콘텐츠로 건너뛰기 / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體...
- [googleusercontent.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHIFwIX6KoXEhbUgB_ZtI6E0Qz4rQpPOqxBKzWf9uEDI1GkSxCQrOMQ55kxzqSVhqFzWB3yKVcxcvIufpWd0JvzgpWfvMbqEVkMOQ2cCkVVUWhppqikjMKNqE3dYdIwrTMElfAHxNd7JaBw7idXv5u7hDIescGu-ZZiikW9tfYW) *(vertexaisearch.cloud.google.com)*
  > Google Issue Tracker Sign in
- [gigazine.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG2OqyGmNtjbSXKo36fdJ0KtjQ2GrH8of-SUsQ464sXGk_A-Ph83eEK_QjE4p04ABIrhz1Z6PI1v0aarLyKrumKAxiSSbU4-w7UayO81UAxx8jZud2DQX_gDOtr9owGSyItVtZPS7MrL63wNGK89je2Ois=) *(vertexaisearch.cloud.google.com)*
  > Google Chrome 151 stable version released, adding a Web API that makes it easy to stream text. - GIGAZINE Jul 29, 2026 10:27:00 Google Chrome 151 stable version released, adding a Web API that makes it easy to stream text. The latest stable version o...
- [mozaic.fm](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHoJZ2UAPIhThPQuYOQbWJjp9Ga03MpKuEHLHplBwTC9ysJYSyZmE1WPWI6jr4mNB8OEf14Jx7ThxWVbdXbDrj5AixgVpP6MUSdyEV5tZr5dbJo-gA3dhuSrNjwR1F3qmRirZ5tuWXqH03xFsCG1STNxQ==) *(vertexaisearch.cloud.google.com)*
  > A search across official platform channels, developer blogs, and release notes highlights the context, documentation, and ecosystem tracking for **"Remove `[LegacyNoInterfaceObject]` from FontFaceSet IDL"**.  ---  ### Summary of the Feature  * **The
- [CSS Font Loading Module Level 3](https://w3c.github.io/csswg-drafts/css-font-loading) *(w3c.github.io)*
  > Further information on submitting .../CSS/Test/. Questions should be directed to the public-css-testsuite@w3.org mailing list. ... Tab Atkins Jr.. CSS Font Loading Module Level 3. URL: https://<strong>drafts.csswg.org/css-font-loading</strong>/...
- [CSS Font Loading API's FontFaceSet Sample](https://googlechrome.github.io/samples/font-face-set) *(googlechrome.github.io · 2018-03-22T00:00:00)*
  > The sample illustrates constructing FontFace objects and explicitly adding them to the page&#x27;s document.fonts FontFaceSet, which is <strong>an alternative to the more traditional approach of using CSS&#x27;s @font-face rule</strong>.
- [FontFaceSet - Web APIs - W3cubDocs](https://docs.w3cub.com/dom/fontfaceset) *(docs.w3cub.com)*
  > <strong>A FontFaceSet instance is a Set-like object that can hold an ordered set of FontFace objects</strong>. This property is available as Document.fonts, or self.fonts in web workers.
- [FontFaceSet - Web APIs | MDN](https://www-igm.univ-mlv.fr/~forax/MDN/developer.mozilla.org/en-US/docs/Web/API/FontFaceSet.html) *(www-igm.univ-mlv.fr)*
  > <strong>A FontFaceSet instance is a Set-like object that can hold an ordered set of FontFace objects</strong>. This property is available as Document.fonts, or self.fonts in web workers.
- [Property 'add' does not exist on type 'FontFaceSet'](https://stackoverflow.com/questions/78191851/property-add-does-not-exist-on-type-fontfaceset) *(stackoverflow.com)*
  > Copy// Define a FontFace <strong>const font = new FontFace(&quot;myfont&quot;, &quot;url(myfont.woff)&quot;, { style: &quot;italic&quot;, weight: &quot;400&quot;, stretch: &quot;condensed&quot;, }); // Add to the document.fonts (FontFaceSet) document...
- [CSS Font Loading API's FontFaceSet Sample](https://googlechrome.github.io/samples/font-face-set/index.html) *(googlechrome.github.io)*
  > var bitterFontFace = new FontFace(&#x27;Bitter&#x27;, &#x27;url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)&#x27;); document.fonts.add(bitterFontFace); bitterFontFace.loaded.then(logLoaded); var oxygenFont...
- [Web API CSS Font Loading - GeeksforGeeks](https://www.geeksforgeeks.org/javascript/web-api-css-font-loading) *(geeksforgeeks.org · 2025-04-28T06:12:18)*
  > Example: In this example, we are loading a font and applying all the events of FontFaceSet. ... const result = document.getElementById(&quot;result&quot;); const canvas = document.getElementById(&quot;js-canvas&quot;); canvas.width = 650; canvas.heig...
- [Getting started with CSS Font Loading | by Manuel Matuzovic | Medium](https://medium.com/@matuzo/getting-started-with-css-font-loading-e24e7ffaa791) *(medium.com · 2016-10-12T20:49:49)*
  > <strong>document.fonts.ready.then((fontFaceSet) =&gt; { console.log(document.fonts.size, &#x27;FontFaces loaded.&#x27;); });</strong> Easy cheesy, right? As soon as the fonts are ready, you can apply the font-family via JavaScript or add a class, tha...
- [An Introduction to the CSS Font Loading API: Better Font Management for the Web | Webolution Designs](https://webolutiondesigns.com/an-introduction-to-the-css-font-loading-api-better-font-management-for-the-web) *(webolutiondesigns.com · 2024-12-31T14:14:19)*
  > The CSS Font Loading API revolves around two key components: document.fonts: <strong>A FontFaceSet object that represents all the loaded fonts on the page</strong>.
- [CSS Font Loading API - Web APIs - W3cubDocs](https://docs.w3cub.com/dom/css_font_loading_api) *(docs.w3cub.com)*
  > Using document.fonts.ready can be better in some circumstances, as it is only called when all fonts in the document have been resolved and layout is complete. ... Represents a single usable font face. ... An interface loading font faces and checking ...
- [[blink-dev] Web-Facing Change PSA: Remove [LegacyNoInterfaceObject] from FontFaceSet IDL](http://www.mail-archive.com/blink-dev@chromium.org/msg16782.html) *(mail-archive.com)*
  > Gecko: Shipped/Shipping (https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet) Firefox has long exposed FontFaceSet as a global without a constructor. WebKit: Shipped/Shipping (https://bugs.webkit.org/show_bug.cgi?id=276794) Web developers: N...
- [[WPT] New failures introduced in external/wpt/css/css-font-loading by import https://crrev.com/c/7499716 [477568263] - Chromium](https://issues.chromium.org/issues/477568263) *(issues.chromium.org)*
  > This caused the WPT historical.html test to fail because: 1. &quot;FontFaceSet&quot; in self was false (not globally exposed), so the test fell back to document.fonts.constructor. 2. The deleted &quot;constructor&quot; property caused prototype chain...
- [Intent to Re-implement and Ship: CSS Font Loading API - FontFaceSet: check() method](https://groups.google.com/a/chromium.org/g/blink-dev/c/TEgS0cqhZoI) *(groups.google.com · 2023-10-15T00:00:00)*
  > [1] https://chromium-review.googlesource.com/c/chromium/src/+/4913179 [2] https://crbug.com/1416842 ... The current behavior of Blink does neither follow the updated spec nor match other engines&#x27; behavior. This proposal aims at fixing it. https:...
- [Blink IDL Extended Attributes](https://chromium.googlesource.com/chromium/src/+/HEAD/third_party/blink/renderer/bindings/IDLExtendedAttributes.md) *(chromium.googlesource.com)*
  > If [Exposed] is not present or overridden by a standard extended attribute [LegacyNoInterfaceObject] (<strong>the value of the property on the global object corresponding to the interface is called the interface object</strong>), which results in no ...
- [Source/core/css/FontFaceSet.cpp - chromium/blink - Git at Google](https://chromium.googlesource.com/chromium/blink/+/refs/heads/main/Source/core/css/FontFaceSet.cpp) *(chromium.googlesource.com)*
  > Sign in · chromium/chromium/blink/refs/heads/main/./Source/core/css/FontFaceSet.cpp · blob: 38a4e99c6ad477867ec6cd2dc018220477803477 [file] [edit] · Powered by Gitiles| Privacy| Termstxt json
- [Intent to Ship: SpeechSynthesis and SpeechSynthesisVoice interface objects](https://groups.google.com/a/chromium.org/g/blink-dev/c/jFvTG8AJfnQ/m/Sfs4rZMQAQAJ) *(groups.google.com · 2021-06-29T00:00:00)*
  > Gecko: Shipped/Shipping (https://github.com/mozilla/gecko-dev/blob/44e39a47b27313029460bada366c67ebe6d7c57e/dom/webidl/SpeechSynthesis.webidl#L14) Gecko&#x27;s IDL does not have [LegacyNoInterfaceObject] here, and SpeechSynthesis was shipped in Firef...
- [Intent to Ship: Expose Reporting API interfaces to JavaScript](https://groups.google.com/a/chromium.org/g/blink-dev/c/j7vOAkMbu_M) *(groups.google.com)*
  > to Rick Byers, Domenic Denicola, Yoav Weiss, Ian Clelland, blink-dev · Well, that is exactly the situation outlined as a risk. I&#x27;m still running some HTTPArchive queries, but didn&#x27;t immediately see much there. I expect that +Domenic Denicol...
- [html/dom/historical.html - external/w3c/web-platform-tests - Git at Google](https://chromium.googlesource.com/external/w3c/web-platform-tests/+/merge_pr_7930/html/dom/historical.html) *(chromium.googlesource.com)*
  > Sign in · chromium / external / w3c / web-platform-tests / merge_pr_7930 / . / html / dom / historical.html · blob: a36b4b2e92b792b18fb8704d217a089ba07be254 [file] [log] [blame] · Powered by Gitiles| Privacy| Termstxt json
- [Chrome 151 beta | Blog | Chrome for Developers](https://developer.chrome.com/blog/chrome-151-beta) *(developer.chrome.com · 2026-07-03T00:00:00)*
  > Removes [LegacyNoInterfaceObject] from the FontFaceSet IDL definition to align with the CSS Font Loading specification. FontFaceSet is now exposed as a global property, and <strong>invoking new FontFaceSet() correctly throws a TypeError: Illegal cons...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [csswg-drafts/css-font-loading-3/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-font-loading-3/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-font-loading/#fontfaceset`)*
  > Shortname: css-font-loading · Level: 3 · Group: csswg · Status: ED · Prepare for TR: no · Work Status: Exploring · ED: https://<strong>drafts.csswg.org/css-font-loading</strong>/ TR: https://www.w3.org/TR/css-font-loading/ Previous Version:...
- [CSS Font Loading Module Level 3](https://www.w3.org/TR/css-font-loading) *(w3.org · 2023-04-06T00:00:00)* *(Cites: `https://drafts.csswg.org/css-font-loading/#fontfaceset`)*
  > https://www.w3.org/TR/css-font-loading/ Editor&#x27;s Draft: https://<strong>drafts.csswg.org/css-font-loading</strong>/ Previous Versions: https://www.w3.org/TR/2014/WD-css-font-loading-3-20140522/ History: https://www.w3.org/standards/his...
- [CSS Font Loading Module Level 3](https://w3c.github.io/csswg-drafts/css-font-loading) *(w3c.github.io)* *(Cites: `https://drafts.csswg.org/css-font-loading/#fontfaceset`)*
  > Further information on submitting .../CSS/Test/. Questions should be directed to the public-css-testsuite@w3.org mailing list. ... Tab Atkins Jr.. CSS Font Loading Module Level 3. URL: https://<strong>drafts.csswg.org/css-font-loading</stro...
- [[css-font-loading] CSS-connectedness of @font-face rules in constructed stylesheets · Issue #10378 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10378) *(github.com · 2024-05-29T23:19:22)* *(Cites: `https://drafts.csswg.org/css-font-loading/#fontfaceset`)*
  > In https://drafts.csswg.org/css-font-loading/#font-face-css-connection , <strong>the section describing the relationship between @font-face rules and their associated FontFace IDL objects</strong>, it&#x27;s unclear to ...
- [[font-loading] "pending on the environment" not clear about what "document is still loading" means · Issue #1081 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1081) *(github.com)* *(Cites: `https://drafts.csswg.org/css-font-loading/#fontfaceset`)*
  > <strong>Any script in the page can add a new style element or link element to load new fonts</strong>, and any DOM mutation like changing the attribute value can trigger new CSS selector to apply to that element and start loading new fonts ...
- [[css-font-loading] document.fonts is too vagely defined · Issue #6126 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/6126) *(github.com)* *(Cites: `https://drafts.csswg.org/css-font-loading/#fontfaceset`)*
  > The value of the context’s fonts attribute is its font source, which provides all of the fonts used in font-related operations, unless defined otherwise. and further: https://<strong>drafts.csswg.org/css-font-loading</strong>/#document-font...
- [[css-font-loading] Is the relative ordering of steps in "switch the FontFaceSet to loaded" actually correct? · Issue #1003 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1003) *(github.com · 2017-02-03T00:00:00)* *(Cites: `https://drafts.csswg.org/css-font-loading/#fontfaceset`)*
  > var eventsFired = 0; var facesSeen = []; document.fonts.onloadingdone = document.fonts.onloadingerror = function(e) { ++eventsFired; facesSeen = facesSeen.concat(e.fontfaces); if (eventsFired == 2) { document.documentElement.textContent = &...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-font-loading-3/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-font-loading-3/Overview.bs) *(github.com)*
- [CSS Font Loading Module Level 3](https://www.w3.org/TR/css-font-loading) *(w3.org)*
- [[css-font-loading] CSS-connectedness of @font-face rules in constructed stylesheets · Issue #10378 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10378) *(github.com)*
- [[font-loading] "pending on the environment" not clear about what "document is still loading" means · Issue #1081 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1081) *(github.com)*
- [[css-font-loading] document.fonts is too vagely defined · Issue #6126 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/6126) *(github.com)*
- [[css-font-loading] Is the relative ordering of steps in "switch the FontFaceSet to loaded" actually correct? · Issue #1003 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1003) *(github.com)*
- [FontFaceSet - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet) *(developer.mozilla.org)*
- [Document: fonts property - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/fonts) *(developer.mozilla.org)*
- [content/files/en-us/web/api/fontfaceset/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/fontfaceset/index.md) *(github.com)*
- [CSS Font Loading API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API) *(developer.mozilla.org)*
- [/css/css-font-loading/idlharness.https.html is flaky in Chrome · Issue #14862 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/issues/14862) *(github.com)*
- [web-platform-tests/css/cssom at master · jakearchibald/web-platform-tests](https://github.com/jakearchibald/web-platform-tests/tree/master/css/cssom) *(github.com)*
- [wpt/webxr at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/tree/master/webxr) *(github.com)*
- [wpt/webrtc/historical.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/webrtc/historical.html) *(github.com)*
- [FontFaceSet: add() method - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/add) *(developer.mozilla.org)*
- [FontFaceSet: delete() method](https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/delete) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 35 result(s) found across 7 planned queries — **34 verified relevant**
  - `"chromestatus.com/feature/5123999844663296" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.csswg.org/css-font-loading" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"FontFaceSet" in window OR "FontFaceSet" in self "document.fonts"` — *Finds JavaScript code snippets and feature-detection patterns checking for the FontFaceSet interface on the global object.* (8 returned)
  - `"FontFaceSet" "CSS Font Loading API" (tutorial OR guide OR "document.fonts")` — *Discovers developer tutorials and practical guides explaining how to inspect and manipulate font sets using the CSS Font Loading API.* (8 returned)
  - `"FontFaceSet" "LegacyNoInterfaceObject" (Chromium OR Blink OR WebKit OR Gecko)` — *Surfaces browser engine bugs, intent-to-ship discussions, and spec alignment commits regarding removing LegacyNoInterfaceObject from FontFaceSet.* (8 returned)
  - `"FontFaceSet" ("idlharness" OR "historical.html") "web-platform-tests"` — *Identifies Web Platform Tests (WPT) discussions, commits, and issue trackers resolving interface harness failures across browsers.* (6 returned)
  - `"TypeError: Illegal constructor" "FontFaceSet" OR "new FontFaceSet"` — *Searches for developer discussions and documentation regarding constructor behavior and illegal invocation errors for FontFaceSet.* (4 returned)
- **Google Search Grounding (gemini-3.7-flash):** 9 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 32 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5123999844663296)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5123999844663296)
- [Specification](https://drafts.csswg.org/css-font-loading/#fontfaceset)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/477568263)
