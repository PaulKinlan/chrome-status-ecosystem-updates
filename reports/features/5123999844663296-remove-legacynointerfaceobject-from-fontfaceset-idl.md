# Remove \[LegacyNoInterfaceObject\] from FontFaceSet IDL

> **Report Week:** 2026-W39 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Chromium's FontFaceSet IDL previously used \[LegacyNoInterfaceObject\], which hid FontFaceSet as a global property and deleted the constructor property from its prototype. This deviated from the CSS Font Loading spec and differed from Safari and Firefox behavior. This change removes \[LegacyNoInterfaceObject\] from the FontFaceSet IDL, so FontFaceSet is properly exposed as a global property. Since no constructor() is defined in the IDL, calling new FontFaceSet() from JavaScript now throws TypeError: Illegal constructor, matching the spec. This also fixes the historical.html WPT, which was previously failing in Chromium.

### Motivation

Chromium applied [LegacyNoInterfaceObject] to FontFaceSet, hiding it as a global property and breaking "FontFaceSet" in self. This caused 18 WPT idlharness failures and one historical.html failure. Safari and Firefox already expose FontFaceSet globally. This brings Chromium into spec compliance with no new constructor exposed.

## Ecosystem Status

- **Momentum:** High (430 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chromium 151 removes the legacy \`\[LegacyNoInterfaceObject\]\` extended attribute from the \`FontFaceSet\` Web IDL, exposing \`FontFaceSet\` as a first-class global interface object across Window and Worker scopes. This resolves long-standing Web Platform Tests (WPT) harness failures and brings Blink into strict compliance with CSS Font Loading Module Level 3 and CSSWG resolution #10390. Because the interface defines no constructor, invoking \`new FontFaceSet()\` correctly produces a \`TypeError: Illegal constructor\` rather than a \`ReferenceError\`.

### Recommendations
- Actionable Advice: Continue managing web fonts using standard entry points such as \`document.fonts\` or \`workerGlobalScope.fonts\`, as \`FontFaceSet\` remains intentionally non-constructible via \`new\`. If your codebase previously relied on duck typing or avoided \`'FontFaceSet' in window\` checks due to Chromium-specific omission, you can now safely utilize standard global interface introspection.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFKJlXS6vseSz3_MhtEcO__vMQWC0cs95-_Tp-tsmnWrBnvJlSXa83S10TD2HL7KxvEdqKSs2UOGiX_NB9vrpkGU7PJGFyRpfNQSAx4h5fPx7nnfPzilXxasGN9mD5w3kEEVxU=) *(vertexaisearch.cloud.google.com)*
  > Chrome 151 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEaXeF_EN0eyWcx81nxRaAFTV8Cq-42R6Rij6nOlTGxjLB7q4Ebfq-jCQyh5O31vey2oAbQ-DJKVa10zQHiKjFtYDgFP1vNcYDYNrbuuBdbqt6noPJu5ioBGGyy89MFVba5k6sdkEXr2s8hTPsoAG0=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHI9NUFh7LYIqlYiMXGRFmm7hxe5Dt4mpcgzS-n5Z2YaEE2wNfTzYlWDPiugfyaBsQynzKmMoeVQwss6yfzWpPJEYtJ8PutDsFBthLruzHnzsv70v0tLjxvDl4_D87Y2X7nWDDUfoE=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFSKVNR_SnHVO2ePIvqmoubXVEwxCX0jO-QpKFYRBqJuDl9VlsV8oqM47NR2_YFGFDdiapOQC3HIoec1WpNGiZ5yeFsLffbCkEhmn-lr3QsQ1GawbGVEnr_cXFw-ZCjAdpZDKqmx24=) *(vertexaisearch.cloud.google.com)*
  > Chrome 150 ベータ版 | Blog | Chrome for Developers メイン コンテンツにスキップ / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEsSSm9Qh69AcFqPJs-IOkT2ckR0PF6CpkZrMpOLDDTZwVhpqrCsFoyl-oGxVgoYOKLEoUFkpvm1v91DGLf6G1Y5TDTZrfVgP_BEHNCSGOUKiV3Xc1j_aoSUaExn6406XB0AyY=) *(vertexaisearch.cloud.google.com)*
  > Chrome 151 | Release notes | Chrome for Developers Ana içeriğe atla / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG516s-S4JafOm9zjtCNs5WOlRkS3m8gEXm9wh1IwKt5fSqzb8ElndiSTUonClV29kSb94q0ZG0SY3YjMppZivaDqgp7ydqsEpCJhdHq1WHOwNH0sQhJSq0hu08Pjd1y4Gsn_BRFFY=) *(vertexaisearch.cloud.google.com)*
  > Chrome 151 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHGURdG5oyP15fFB9l6pjlHjCL5yRER-_qfd99629d2fqFsHmIR8P7HGuv2Nx4Br9rz7Yi-EVMoe93SjCnQ-yTelZ1N0PUL6FUqZrrGp1iCMEpOSjyvyRdnVw==) *(vertexaisearch.cloud.google.com)*
  > GitHub - nina-mir/nina-mir: about me · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signed out in another...
- [gigazine.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGVdElZvmyIcIlOVRQG6pkmbKKa4FsXdVhVC6MZEyolEfZpAyldcnb3g9H3Q8_01eRgjGRoO6LgKEnaUjGgvhEQ2lfenDxIqsTvEh_1tPrxDP54CZGzO2fa0fXtLSV4doA4f8MkmKDwoIS42ielvJL-Dg==) *(vertexaisearch.cloud.google.com)*
  > Google Chrome 151 stable version released, adding a Web API that makes it easy to stream text. - GIGAZINE Jul 29, 2026 10:27:00 Google Chrome 151 stable version released, adding a Web API that makes it easy to stream text. The latest stable version o...
- [comss.ru](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGCn6gQ8StreFv9f3gzRsOFsB2b9V2Uab7I54ydGyTnKqXVvOnHpLphTgFpsf64PMOpWBItse7TimdnkioY9Mbxy_h19gLcqbZ67ubDnL-qRfcFkS4z5eQFe7eM) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  In the CSS Font Loading specification, the `FontFaceSet` interface is defined without a constructor and is meant to be exposed on global scopes (`Window` and `Worker`). Historically, Chromium tagged `FontFaceSet` in its We
- [CSS Font Loading Module Level 3](https://w3c.github.io/csswg-drafts/css-font-loading) *(w3c.github.io)*
  > Further information on submitting .../CSS/Test/. Questions should be directed to the public-css-testsuite@w3.org mailing list. ... Tab Atkins Jr.. CSS Font Loading Module Level 3. URL: https://<strong>drafts.csswg.org/css-font-loading</strong>/...
- [\[blink-dev\] Web-Facing Change PSA: Remove \[LegacyNoInterfaceObject\] from FontFaceSet IDL](http://www.mail-archive.com/blink-dev@chromium.org/msg16782.html) *(mail-archive.com)*
  > This change removes [LegacyNoInterfaceObject] from the FontFaceSet IDL, so FontFaceSet is properly exposed as a global property. Since no constructor() is defined in the IDL, calling new FontFaceSet() from JavaScript now throws TypeError: Illegal con...
- [\[WPT\] New failures introduced in external/wpt/css/css-font-loading by import https://crrev.com/c/7499716 \[477568263\] - Chromium](https://issues.chromium.org/issues/477568263) *(issues.chromium.org)*
  > <strong>By removing [LegacyNoInterfaceObject], FontFaceSet is now properly exposed globally</strong>. Since no constructor() is defined in the IDL, V8&#x27;s IsValidConstructorMode callback correctly throws &quot;Illegal constructor&quot; (TypeError)...
- [IDL Reference Guide 2471 Appendix H: Fonts](https://faculty.college.emory.edu/sites/weeks/lab/papers/idlfonts.pdf) *(faculty.college.emory.edu)*
  > IDL Object Graphics can use the vector and TrueType font systems.
- [A Brief History of CSS-in-JS: How We Got Here and Where We’re Going \| by Dan Ward \| Level Up Coding](https://levelup.gitconnected.com/a-brief-history-of-css-in-js-how-we-got-here-and-where-were-going-ea6261c19f04?gi=82f7b90f9a12) *(levelup.gitconnected.com · 2018-07-13T02:26:41)*
  > He opened the talk with what has become a rather famous slide, outlining what he saw as the major problems with CSS that needed to be overcome so that developers could sanely maintain highly dynamic web applications, particularly at scale: ... Since ...
- [History of HTML, CSS and JavaScript: How the Web Was Born and Evolved](https://docs.div.zone/en/docs/tutorial-web-development-from-zero/html-css-javascript-history) *(docs.div.zone)*
  > Discover how HTML, CSS, and JavaScript were born from the 90s to today. The complete evolution of the technologies that build the modern web, with timeline and key facts.
- [How to Create a Dynamic History Timeline with JavaScript and CSS - Krasen Slavov](https://krasenslavov.com/how-to-create-a-dynamic-history-timeline-with-javascript-and-css) *(krasenslavov.com · 2025-12-02T15:37:56)*
  > This CSS <strong>ensures the timeline is visually appealing and responsive</strong>. To make the timeline interactive, use the following JavaScript: document.addEventListener(&quot;DOMContentLoaded&quot;, function () { const historyNav = document.que...
- [Calculator with History Function in HTML, CSS, and JavaScript](https://maximmaeder.com/calculator-with-history-function-in-html-css-and-javascript) *(maximmaeder.com · 2023-09-02T17:48:51)*
  > In this Tutorial, we will make a simple Calculator with a history function utilizing JavaScript, HTML, and CSS. We will use the eval function to evaluate the expression, but keep in mind that this is somewhat dangerous and it should be used with grea...
- [HTML - Wikipedia](https://en.wikipedia.org/wiki/HTML) *(en.wikipedia.org · 2026-09-18T03:42:33)*
  > Hypertext Markup Language (<strong>HTML</strong>) is the standard markup language for documents designed to be displayed in a <strong>web</strong> browser. It defines the content and structure of <strong>web</strong> content. It is often assisted by ...
- [A tale from 30 years of HTML. In a few days the Hypertext Markup… \| by Jan Kammerath \| Medium](https://medium.com/@jankammerath/a-tale-from-30-years-of-html-ef4d11069d28) *(medium.com · 2022-06-20T22:04:42)*
  > With JavaScript, CSS and HTML maturing with <strong>HTML 4.01</strong>, the web was progressing towards what was often defined as “Web 2.0”. Browsers were now able to render and operate relatively complex user interface components like calendars, aut...
- [Chrome 150 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-150-beta) *(developer.chrome.com · 2026-06-03T00:00:00)*
  > <strong>This removal removes [LegacyNoInterfaceObject] from the FontFaceSet IDL, making FontFaceSet properly accessible as a global property</strong>.
- [Intent to Ship: SpeechSynthesis and SpeechSynthesisVoice interface objects](https://groups.google.com/a/chromium.org/g/blink-dev/c/jFvTG8AJfnQ/m/Sfs4rZMQAQAJ) *(groups.google.com · 2021-06-29T00:00:00)*
  > Gecko: Shipped/Shipping (https://github.com/mozilla/gecko-dev/blob/44e39a47b27313029460bada366c67ebe6d7c57e/dom/webidl/SpeechSynthesis.webidl#L14) Gecko&#x27;s IDL does not have [LegacyNoInterfaceObject] here, and SpeechSynthesis was shipped in Firef...
- [Chrome Release 151](https://chromestatuslite.com/?version=151) *(chromestatuslite.com)*
  > <strong>This change removes [LegacyNoInterfaceObject] from the FontFaceSet IDL, so FontFaceSet is properly exposed as a global property</strong>. Since no constructor() is defined in the IDL, calling new FontFaceSet() from JavaScript now throws TypeE...
- [Chrome 151 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-151-beta?hl=en) *(developer.chrome.com)*
  > <strong>Removes [LegacyNoInterfaceObject] from the FontFaceSet IDL definition to align with the CSS Font Loading specification</strong>.
- [Google Chrome 151 stable version released, adding a Web API that makes it easy to stream text. - GIGAZINE](https://gigazine.net/gsc_news/en/20260729-google-chrome-151) *(gigazine.net · 2026-07-29T00:00:00)*
  > ◆Abolished/Deleted - End of support for macOS 12 - FontFaceSet : <strong>Remove the [LegacyNoInterfaceObject] attribute from the Web IDL definition</strong>. - Manifest V2 extension functionality is completely disabled.
- [Chrome 151 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/151) *(developer.chrome.com · 2026-07-28T00:00:00)*
  > Removes [LegacyNoInterfaceObject] from the FontFaceSet IDL <strong>so that FontFaceSet is properly exposed as a global property on the window object</strong>.
- [Property 'add' does not exist on type 'FontFaceSet'](https://stackoverflow.com/questions/78191851/property-add-does-not-exist-on-type-fontfaceset) *(stackoverflow.com)*
  > Copy// Define a FontFace <strong>const font = new FontFace(&quot;myfont&quot;, &quot;url(myfont.woff)&quot;, { style: &quot;italic&quot;, weight: &quot;400&quot;, stretch: &quot;condensed&quot;, }); // Add to the document.fonts (FontFaceSet) document...
- [FontFaceSet interface - WebIDLpedia](https://dontcallmedom.github.io/webidlpedia/names/FontFaceSet.html) *(dontcallmedom.github.io)*
  > CSS Font Loading Module Level 3 defines FontFaceSet · [Exposed=(Window,Worker)] interface FontFaceSet : EventTarget { setlike&lt;FontFace&gt;; FontFaceSet add(FontFace font); boolean delete(FontFace font); undefined clear(); // events for when loadin...
- [javascript - How to be notified once a web font has loaded](https://stackoverflow.com/questions/5680013/how-to-be-notified-once-a-web-font-has-loaded) *(stackoverflow.com)*
  > Chrome 35+ and Firefox 41+ implement the CSS font loading API (MDN, W3C). Call document.fonts to get a FontFaceSet object, which has a few useful APIs for detecting the load status of fonts:
- [node.js - TypeError: Illegal constructor for CSSStyleSheet in Safari - Stack Overflow](https://stackoverflow.com/questions/78094946/typeerror-illegal-constructor-for-cssstylesheet-in-safari) *(stackoverflow.com)*
  > The app works fine in Chrome, Firefox, and Edge but safari gives me a Type Error; Illegal constructor

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Font-face-set · Issue #1305 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1305) *(github.com · 2026-08-14T17:30:44)* *(Cites: `https://chromestatus.com/feature/5123999844663296`)*
  > Chromestatus: https://chromestatus.com/feature/5123999844663296 Feature Name: <strong>Remove [LegacyNoInterfaceObject] from FontFaceSet IDL</strong> Web Feature ID: Font-face-set Chrome Releases: Chrome 151
- [FontFaceSet: note that Chrome 151 exposes the interface globally by RizgarOzan · Pull Request #30535 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30535) *(github.com)* *(Cites: `https://chromestatus.com/feature/5123999844663296`)*
  > ChromeStatus: https://<strong>chromestatus.com/feature/5123999844663296</strong> (milestone 151 on desktop, Android and WebView)
- [\`api.FontFaceSet\` - Update Chrome exposure notes · Issue #30411 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/issues/30411) *(github.com · 2026-09-03T10:58:38)* *(Cites: `https://chromestatus.com/feature/5123999844663296`)*
  > https://<strong>chromestatus.com/feature/5123999844663296</strong> · No response · No response · No response · Reactions are currently unavailable · Sign up for free to join this conversation on GitHub. Already have an account? Sign in to c...
- [csswg-drafts/css-font-loading-3/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-font-loading-3/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-font-loading/#fontfaceset`)*
  > Shortname: css-font-loading · Level: 3 · Group: csswg · Status: ED · Prepare for TR: no · Work Status: Exploring · ED: https://<strong>drafts.csswg.org/css-font-loading</strong>/ TR: https://www.w3.org/TR/css-font-loading/ Previous Version:...
- [CSS Font Loading Module Level 3](https://w3c.github.io/csswg-drafts/css-font-loading) *(w3c.github.io)* *(Cites: `https://drafts.csswg.org/css-font-loading/#fontfaceset`)*
  > Further information on submitting .../CSS/Test/. Questions should be directed to the public-css-testsuite@w3.org mailing list. ... Tab Atkins Jr.. CSS Font Loading Module Level 3. URL: https://<strong>drafts.csswg.org/css-font-loading</stro...
- [CSS Font Loading Module Level 3](https://www.w3.org/TR/css-font-loading) *(w3.org · 2023-04-06T00:00:00)* *(Cites: `https://drafts.csswg.org/css-font-loading/#fontfaceset`)*
  > https://www.w3.org/TR/css-font-loading/ Editor&#x27;s Draft: https://<strong>drafts.csswg.org/css-font-loading</strong>/ Previous Versions: https://www.w3.org/TR/2014/WD-css-font-loading-3-20140522/ History: https://www.w3.org/standards/his...
- [\[css-font-loading\] CSS-connectedness of @font-face rules in constructed stylesheets · Issue #10378 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10378) *(github.com · 2024-05-29T23:19:22)* *(Cites: `https://drafts.csswg.org/css-font-loading/#fontfaceset`)*
  > In https://drafts.csswg.org/css-font-loading/#font-face-css-connection , <strong>the section describing the relationship between @font-face rules and their associated FontFace IDL objects</strong>, it&#x27;s unclear to ...
- [\[font-loading\] "pending on the environment" not clear about what "document is still loading" means · Issue #1081 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1081) *(github.com)* *(Cites: `https://drafts.csswg.org/css-font-loading/#fontfaceset`)*
  > <strong>Any script in the page can add a new style element or link element to load new fonts</strong>, and any DOM mutation like changing the attribute value can trigger new CSS selector to apply to that element and start loading new fonts ...
- [\[css-font-loading\] document.fonts is too vagely defined · Issue #6126 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/6126) *(github.com)* *(Cites: `https://drafts.csswg.org/css-font-loading/#fontfaceset`)*
  > The value of the context’s fonts attribute is its font source, which provides all of the fonts used in font-related operations, unless defined otherwise. and further: https://<strong>drafts.csswg.org/css-font-loading</strong>/#document-font...
- [\[css-font-loading\] Which value wins if both \`stretch\` and \`width\` are provided? · Issue #14451 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14451) *(github.com · 2026-09-05T12:56:44)* *(Cites: `https://drafts.csswg.org/css-font-loading/#fontfaceset`)*
  > https://<strong>drafts.csswg.org/css-font-loading</strong>/#fontface-interface dictionary FontFaceDescriptors { CSSOMString width; CSSOMString stretch = &quot;normal&quot;; // alias for width, sets the same attribute ... }; interface FontFa...
- [\[css-font-loading\] Is the relative ordering of steps in "switch the FontFaceSet to loaded" actually correct? · Issue #1003 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1003) *(github.com · 2017-02-03T00:00:00)* *(Cites: `https://drafts.csswg.org/css-font-loading/#fontfaceset`)*
  > var eventsFired = 0; var facesSeen = []; document.fonts.onloadingdone = document.fonts.onloadingerror = function(e) { ++eventsFired; facesSeen = facesSeen.concat(e.fontfaces); if (eventsFired == 2) { document.documentElement.textContent = &...

## 📚 Platform Documentation & Specifications

- [Font-face-set · Issue #1305 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1305) *(github.com)*
- [FontFaceSet: note that Chrome 151 exposes the interface globally by RizgarOzan · Pull Request #30535 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30535) *(github.com)*
- [\`api.FontFaceSet\` - Update Chrome exposure notes · Issue #30411 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/issues/30411) *(github.com)*
- [csswg-drafts/css-font-loading-3/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-font-loading-3/Overview.bs) *(github.com)*
- [CSS Font Loading Module Level 3](https://www.w3.org/TR/css-font-loading) *(w3.org)*
- [\[css-font-loading\] CSS-connectedness of @font-face rules in constructed stylesheets · Issue #10378 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10378) *(github.com)*
- [\[font-loading\] "pending on the environment" not clear about what "document is still loading" means · Issue #1081 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1081) *(github.com)*
- [\[css-font-loading\] document.fonts is too vagely defined · Issue #6126 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/6126) *(github.com)*
- [\[css-font-loading\] Which value wins if both \`stretch\` and \`width\` are provided? · Issue #14451 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14451) *(github.com)*
- [\[css-font-loading\] Is the relative ordering of steps in "switch the FontFaceSet to loaded" actually correct? · Issue #1003 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1003) *(github.com)*
- [A brief history of CSS until 2016](https://www.w3.org/Style/CSS20/history.html) *(w3.org)*
- [\[css-fonts\] FontFaceSet uses referential equality for calculating .has() · Issue #273 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/273) *(github.com)*
- [\[css-font-loading\] FontFaceSet.check() method: reality vs spec vs privacy · Issue #5744 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/5744) *(github.com)*
- [1595444 - new CSSStyleSheet causes a TypeError: Illegal constructor](https://bugzilla.mozilla.org/show_bug.cgi?id=1595444) *(bugzilla.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 11 planned queries — **34 verified relevant**
  - `"chromestatus.com/feature/5123999844663296" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"drafts.csswg.org/css-font-loading" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Remove [LegacyNoInterfaceObject] from FontFaceSet IDL" API` — *Core feature API query* (4 returned)
  - `"Remove [LegacyNoInterfaceObject] from FontFaceSet IDL" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"historical.html" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Remove [LegacyNoInterfaceObject] from FontFaceSet IDL" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Remove [LegacyNoInterfaceObject] from FontFaceSet IDL" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"FontFaceSet" in window OR "FontFaceSet in self" "document.fonts"` — *Find developer tutorials and articles explaining global feature detection and usage of CSS Font Loading FontFaceSet.* (7 returned)
  - `"document.fonts instanceof FontFaceSet" OR ("new FontFaceSet" "TypeError")` — *Locate code examples, WPT tests, and syntax usages testing FontFaceSet prototype inheritance and constructor restrictions.* (1 returned)
  - `"FontFaceSet" "LegacyNoInterfaceObject" (site:chromium.org OR site:wpt.fyi)` — *Track Chromium intent-to-ship discussions, bug tracker updates, and WPT test harness results for the IDL change.* (2 returned)
  - `"FontFaceSet" ("LegacyNoInterfaceObject" OR "Illegal constructor") ("interop" OR "Safari" OR "Firefox")` — *Discover discussions and issues regarding cross-browser interoperability and spec alignment for FontFaceSet across engines.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
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
