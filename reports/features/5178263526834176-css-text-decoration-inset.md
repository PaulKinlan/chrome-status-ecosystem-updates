# CSS text-decoration-inset

> **Report Week:** 2026-W41 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

CSS text-decoration-inset controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges. It supports auto, length, and percentage values, including one-value and two-value syntax for setting the start and end offsets. This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements.   sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

### Motivation

This change implements CSS text-decoration-inset (CSS Text Decoration Level 4), including percentage values. It gives authors direct control over decoration inset and reduces the need for wrapper/pseudo-element workarounds used to fine-tune underline/overline/line-through rendering.



sampler: https://static.januschka.com/i-468928416/?asddsaasd
MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset

CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

## Ecosystem Status

- **Momentum:** High (380 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Part of CSS Text Decoration Module Level 4, \`text-decoration-inset\` standardizes horizontal adjustment of underlines, overlines, and line-throughs using length or percentage values. With Firefox having introduced initial support in version 146, WebKit implementing support in Safari Technology Preview, and Chromium enabling it by default with full percentage parsing, cross-engine interoperability is rapidly solidifying. Developers widely celebrate the property for replacing brittle markup wrappers and background gradient hacks previously required for bespoke typographical styling.

### Recommendations
- Actionable Advice: Adopt \`text-decoration-inset\` immediately as a progressive enhancement, since unsupported browsers gracefully fall back to default text decoration boundaries without breaking content. If pairing with reveal animations or structural layout shifts, guard rules with \`@supports (text-decoration-inset: 0)\` to maintain visual consistency across older browser versions.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "New in Chrome 154 \| Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [New in Chrome 154 \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2102804599325528424) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [What kind of witchcraft is CSS nowadays? text-decoration ...](https://twitter.com/javve/status/1772732077441417412) — *by @javve, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Kevin Mandeville on Twitter: "Hey #emailgeeks to remove Windows 10 Mail link underlining set a { text-decoration: none; } in &lt;style&gt; block - removes or strips if inline"](https://twitter.com/kevinmandeville/status/770361809924653056) — *by @kevinmandeville, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [CSS-Tricks - Multiline truncated text with “show more” button](https://twitter.com/css/status/1169368804666880001) — *by @css, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [鹿野 壮 Takeshi Kano (@tonkotsuboy\_com) on X](https://twitter.com/tonkotsuboy_com/status/1552257149673148416) — *by @tonkotsuboy_com, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEp9HYIYZmuj_dkeJ42M-y6CKpL6ASbXnKLXpWsAieBssNuwlVbT3uv-UoU1Z4p77O-VE5z-o0YcPHVBKXPu7Zu06Uy90oXmMiwJ3MuJBaNdvJMKmqOSqSZE-ju-9ibaUBxjGjo5fNAHWW0BxP6kMbQXl4CcHdLIp2cBBCIMa4XMIiCyVVevLlNKr0RpniHCAYU) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties text-decoration-inset Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEehjrr5xo2epQv1QbgnfC91vWPPnlXbA4kO-fQFNZtirHwZgfjN91iL9Nihksre10xLD5J09vWMt84mZd3jtJbE8foa9EVOvaSD2v69GR9aHLvtTXyn76Tkwq68fViKbKxlXO9XRfu) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHY6Q18ko1akdDgogWBaotyPw586mvRYSJs9Iq7ZErsE_Q7fztin4cQooDqw-zaefXFElYEeAtV9KZZ-qzyohu-z6CD_3aKk4R2WGYmMHvDwSWdKB-_HbEBeZrjUDNNnU9pl5jZuJeR) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – ...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH3dbOZAX_dbwTFR3iHy4p9gk77OOJd-rCGODAudrxCo7JPkI7EsTv8uqfw4p_JJH0sNq4oEPwsbBtDJrd0heMDa7buccpW3vQeCuy6GNoVCkl_kRqsHwbHrQc0dQy-_jThsnHjU8c7q6xEOnqea6gpi8QWjt2pYH8CWLxOEiBmR1aCC9PYqsgm) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset is Like Padding for Text Decorations | CSS-Tricks Skip to main content CSS-Tricks Since 2007 typography text-decoration-inset is Like Padding for Text Decorations Daniel Schwarz on Dec 22, 2025 The text-decoration-inset CSS prop...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEWK8hLW5YcyEv3TqhAh1QCCEXIysyFj-H5ix5tv6bCLV9LNJ0VZxDAxQZ-EjZTpi6CcYERYGi6hxFlTolf3svHWA5o6fF-u3N5HjcTbCgw1FkfqVbneLRvimVoIrGp6j-8H0QYmPjnupKIFoqg1PQzAH6Vy1sJ1ophYjHLfmCqwGbBdkNzj37g) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset is Like Padding for Text Decorations | CSS-Tricks Skip to main content CSS-Tricks Since 2007 typography text-decoration-inset is Like Padding for Text Decorations Daniel Schwarz on Dec 22, 2025 The text-decoration-inset CSS prop...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEdHfAuQ5s5Mhrwy-rZGZ6TomEiWc4VqVn0rRlOL_3LYffeTPhsya7BuO-MeafxwUZ5pY0DXc4ALHyN2rZeOCqhk0CeL1kD8-yqbnnr8dvSNWE6peiqETuwSxdNhWnmNaqdEXGYqL7O1HpWCH5r4WCks--Y9EiNC5JLtTAjXg==) *(vertexaisearch.cloud.google.com)*
  > CSS text decoration - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Guides Text decoration Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 한국어 Русский 中文 (简体) CSS text dec...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFZ21NQ02AQpbtCXANe-fEsAhIK3FL9MLIeNTUeM58wUkKwoLyRwWn1O41hWkX9TkzrZJtVV0pMKMJ5lO4xHGbE2Ta3PHtL5yc3Su_clRbOh_-VY2cUy9nvWSCVvm3k3-ht06PuiZDeo7ruKHzcAd9kY3zsYNvwY95D) *(vertexaisearch.cloud.google.com)*
  > When to Avoid the text-decoration Shorthand Property | CSS-Tricks Skip to main content CSS-Tricks Since 2007 text-decoration When to Avoid the text-decoration Shorthand Property Šime Vidas on Feb 25, 2022 In my recent article about CSS underline bugs...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG4rFcX_3XpOlZ6lLSWyGSWtT8mdcz6ZbrZDygR40pP8PHHZgFPfRBUNsD3KqKOQX6fBZ8LCVg0xOnZ9xjYUue9la_Pou20ZGTTy4BuvLCvqN1yO21TdUFColZDL3nw) *(vertexaisearch.cloud.google.com)*
  > CSS and UI | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEhlRPTlzqxl_LevYIY57SSn97oiaN9_yyAIVly3A5tAkmNhR55vGa8Pu8BFcF3gScX_vtOcBuMhGvQdH2L2imDxyRleJDtWwa68CUKYrTt6jr4qIoUSYGwKSf-J3jkSYcY4Q==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of `CSS text-decoration-inset`  The **`text-decoration-inset`** property (specified in [CSS Text Decoration Module Level 4](https://drafts.csswg.org/css-text-decor-4/)) gives authors fine-grained control over the horizontal span of inlin
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFdZ5ZWimOC7a8BiqvmAsQeaBcPEEA5QiK9_TqLFdqTTuKcFzgCrem8jmt8VWi_KOs5yyA7_O7GhzgxLY2QngTQmyIng1lk5zcSAV96o_2Pii89YY1HjszRPPJqrw==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of `CSS text-decoration-inset`  The **`text-decoration-inset`** property (specified in [CSS Text Decoration Module Level 4](https://drafts.csswg.org/css-text-decor-4/)) gives authors fine-grained control over the horizontal span of inlin
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF3IA56L9lzsGtJWeyUzyPOP0cL8r2NsLVfjwetEoJr6mlWy5TTYksagMDBsxDtIYO1AzmaKjhPYSFZ977GuxmEorhMAa3KyEXGCECGe5bULibvqfFINyXNObWkXExIuQ==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of `CSS text-decoration-inset`  The **`text-decoration-inset`** property (specified in [CSS Text Decoration Module Level 4](https://drafts.csswg.org/css-text-decor-4/)) gives authors fine-grained control over the horizontal span of inlin
- [frontenddogma.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEMr5FIQ68cMWsLaNUs6c_OAKOxPRdl42JZTg2G-SR9wZ1LbupPZWz2VaG89O8aR_-9hzu_uLflU6Kxk7BCvrXfLuZgs5irLly-w7JPXhIZVWDYCC77fB4z5-bF) *(vertexaisearch.cloud.google.com)*
  > ### Overview of `CSS text-decoration-inset`  The **`text-decoration-inset`** property (specified in [CSS Text Decoration Module Level 4](https://drafts.csswg.org/css-text-decor-4/)) gives authors fine-grained control over the horizontal span of inlin
- [podcastluisteren.nl](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHkYguizyVZU0x5XhW_GmHdA_jEOGVaDNKQNi6OmBu46hiHdhhYMDPmn84_80FCRCT6Jz05b09XB_uLR5EUojybmynR3vPHW7ecMunQuS3-GluDOMEkHxGvJyLiXB9-fLEZTZmxaXbMaZ4OjenSdKWL10jW) *(vertexaisearch.cloud.google.com)*
  > ### Overview of `CSS text-decoration-inset`  The **`text-decoration-inset`** property (specified in [CSS Text Decoration Module Level 4](https://drafts.csswg.org/css-text-decor-4/)) gives authors fine-grained control over the horizontal span of inlin
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFPN9W2H0956kKxb5GDuGloM6IkPtKZqied3N6IehoQaI2z_TfGIdJxMc1QjO6lfHd5dMTSuGNBhZHxY29hbe84PF2XpfMLinQGeJ9862j2Ujmv_MEAiRzwqa4W7kz09H1n-jhtw1ke14ElPSVo9D05LJ_uoL7FvfVZt_JBsci3BT8=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of `CSS text-decoration-inset`  The **`text-decoration-inset`** property (specified in [CSS Text Decoration Module Level 4](https://drafts.csswg.org/css-text-decor-4/)) gives authors fine-grained control over the horizontal span of inlin
- [Implement text-decoration-inset \[468928416\] - Chromium](https://issues.chromium.org/issues/468928416) *(issues.chromium.org)*
  > https://<strong>chromestatus.com/feature/5178263526834176</strong> , is that correct?
- [CSS text-decoration-inset - Chrome Platform Status](https://chromestatus.com/feature/5178263526834176) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > The text-decoration-inset CSS property <strong>controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges</strong>. It supports auto, length, and percentage values, including one-value and tw...
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements. sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla....
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)*
  > Yes *Flag name on about://flags* /No information provided/ *Finch feature name* CSSTextDecorationInset *Rollout plan* Will ship enabled for all users *Requires code in //chrome?* False *Tracking bug* https://issues.chromium.org/issues/468928416 *Esti...
- [Display your PWA / website fullscreen - DEV Community](https://dev.to/oncode/display-your-pwa-website-fullscreen-4776) *(dev.to · 2021-02-11T00:49:15)*
  > Since we can display content underneath the status bar now, we&#x27;ll have to make sure that the white text will always be readable (e.g. with a decorative shadow or ensuring dark background colors) and that there will be no interactive elements und...
- [Avoid notches in your PWA with just CSS - DEV Community](https://dev.to/marionauta/avoid-notches-in-your-pwa-with-just-css-al7) *(dev.to · 2019-10-27T13:37:30)*
  > For browsers that do support them, we want the bottom padding to be equal to safe-area-inset-bottom, and fall back to 0 if the variable isn&#x27;t set. Similarly, there are also variables for the top, left and right screen edges. ... Thanks for the q...
- [text-decoration \| CSS-Tricks](https://css-tricks.com/almanac/properties/t/text-decoration) *(css-tricks.com · 2021-08-02T16:54:53)*
  > That situation looks to be changing slowly. Safari 8 (in the Yosemite developer preview) now has partial support for it: the double and wavy options render (the latter is ugly, though), and the text-decoration-color property is supported as well.
- [Rediscovering the Schwartzian Transform: Why I Had to Comment on a Flutter Performance Article](https://dev.to/gde/rediscovering-the-schwartzian-transform-why-i-had-to-comment-on-a-flutter-performance-article-30l0) *(dev.to · Randal L. Schwartz · Oct 2)*
  > When a Flutter developer tackled a UI freeze sorting 10,000 timeline events, they unwittingly reinvented a 30-year-old computer science idiom. Here is how modern Dart 3 records turn the Schwartzian Transform into an elegant, 13x faster one-liner.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com · 2026-10-02T00:49:44)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > ChromeStatus: https://<strong>chromestatus.com/feature/5178263526834176</strong> (targeting Chrome 154)
- [CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com · 2026-08-17T19:47:28)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Chrome 154: https://<strong>chromestatus.com/feature/5178263526834176</strong> Firefox 146 (since December 2025) Safari TP
- [\[pull\] main from chromium:main by pull\[bot\] · Pull Request #2228 · txwdzxq/chromium](https://github.com/txwdzxq/chromium/pull/2228) *(github.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > ChromeStatus: https://<strong>chromestatus.com/feature/5178263526834176</strong> I2S: https://groups.google.com/a/chromium.org/g/blink-dev/c/XqfJTwXB6FI/m/Gb-ftYGoDgAJ Bug: 468928416, 498974811 Change-Id: I177fe03d66a65ee1af642abfa0b967c8ca...
- [\[pull\] main from chromium:main by pull\[bot\] · Pull Request #1649 · bubbleswarm/chromium](https://github.com/bubbleswarm/chromium/pull/1649) *(github.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > ChromeStatus: https://<strong>chromestatus.com/feature/5178263526834176</strong> I2S: https://groups.google.com/a/chromium.org/g/blink-dev/c/XqfJTwXB6FI/m/Gb-ftYGoDgAJ Bug: 468928416, 498974811 Change-Id: I177fe03d66a65ee1af642abfa0b967c8ca...
- [Implement text-decoration-inset \[468928416\] - Chromium](https://issues.chromium.org/issues/468928416) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > https://<strong>chromestatus.com/feature/5178263526834176</strong> , is that correct?
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > Shortname: css-text-decor · Level: 4 · Status: ED · Work Status: Exploring · Group: csswg · ED: https://<strong>drafts.csswg.org/css-text-decor-4</strong>/ TR: https://www.w3.org/TR/css-text-decor-4/ Previous Version: https://www.w3.org/TR/...

## 📚 Platform Documentation & Specifications

- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com)*
- [CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com)*
- [\[pull\] main from chromium:main by pull\[bot\] · Pull Request #2228 · txwdzxq/chromium](https://github.com/txwdzxq/chromium/pull/2228) *(github.com)*
- [\[pull\] main from chromium:main by pull\[bot\] · Pull Request #1649 · bubbleswarm/chromium](https://github.com/bubbleswarm/chromium/pull/1649) *(github.com)*
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)*
- [Propriété CSS text-decoration-inset - MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [CSS: supports() static method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSS/supports_static) *(developer.mozilla.org)*
- [MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US) *(developer.mozilla.org)*
- [JavaScript: Adding interactivity - Learn web development \| MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) *(developer.mozilla.org)*
- [Web development tutorials - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/MDN/Tutorials) *(developer.mozilla.org)*
- [Your first website - Learn web development \| MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website) *(developer.mozilla.org)*
- [env() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/env) *(developer.mozilla.org)*
- [text-decoration-inset CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [CSS text decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Text_decoration) *(developer.mozilla.org)*
- [text-decoration-skip CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-skip) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 47 result(s) found across 7 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5178263526834176" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS text-decoration-inset" API` — *Core feature API query* (4 returned)
  - `"CSS text-decoration-inset" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"static.januschka" OR "developer.mozilla" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS text-decoration-inset" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS text-decoration-inset" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **14 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 4 result(s) found — **3 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **3 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 365 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5178263526834176)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5178263526834176)
- [Specification](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/468928416)
