# CSS scroll-marker-group modes

> **Report Week:** 2026-W39 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The scroll-marker-group property is enhaced to support modes: 1) 'links' - The generated ::scroll-marker-group operates in "links" mode, functioning like a navigation list. This is the default mode if omitted. 2) 'tabs' - The generated ::scroll-marker-group operates in "tabs" mode, functioning like a tablist.  Each mode changes focus order and accessibility behavior of ::scroll-marker-group and ::scroll-markers, following WAI-ARIA patterns.  More details: # The links mode (default) This mode is designed to mimic standard Navigation Landmarks combined with fragment anchors.  ## Semantic roles The ::scroll-marker-group takes on the navigation role, and the ::scroll-marker elements take on the link role. This perfectly maps to the &lt;nav&gt; + &lt;a&gt; structural pattern.  ## Keyboard navigation All ::scroll-marker elements are sequential tab stops, natively acting like a list of standard anchor links.  ## Unaffected targets The originating elements do not get forced into any role, leaving the document's natural semantic structure intact.  ## Activation focus management When a link marker is activated, it sets the sequential focus navigation starting point to the target element (the originating element), and focus is lost from the marker. This mimics the native behavior of clicking a standard internal &lt;a href="#target"&gt; link.  # The tabs mode This mode is designed to natively replicate the Tabs Pattern and serves as the interactive foundation for the Tabbed Carousel Pattern.  ## Semantic roles The ::scroll-marker-group is implicitly assigned the tablist role, ::scroll-marker elements act as tab roles, and their originating elements get the tabpanel role. This mirrors the required WAI-ARIA Tabs structure.  ## Keyboard navigation (roving tabindex) It follows the complex keyboard interactions outlined in standard practices. Only the active ::scroll-marker acts as a tab stop. Users use arrow keys to navigate the focusgroup (switching between markers), preventing the "tab trap" of having to tab through 20 carousel dots.  ## Focus scope management The marker acts as a focus navigation scope owner. Pressing Tab from the active marker moves focus directly into the active tabpanel content, matching the specification for tabbed interfaces.  ## Tree pruning Content from inactive tabs is explicitly hidden from the accessibility tree. This mimics the expected behavior of aria-hidden="true" or inert on inactive tab panels, saving developers from manually scripting state changes.  ## Activation focus When a marker is activated, focus is retained on the marker, which is exactly how standard tabs operate.

## Ecosystem Status

- **Momentum:** High (405 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** CSS scroll-marker-group modes is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Some issues that seem pretty fundamental: - https://github.com/w3c/csswg-drafts/issues/12240 - https://github.com/w3c/csswg-drafts/issues/12269..."
- Standards Activity (Mozilla): Latest discussion from @jcsteh: "I have some significant accessibility concerns regarding CSS inert specifically. See https://github.com/w3ctag/design-reviews/issues/1055#issuecomment..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Indicating Scroll Position on a Page With CSS" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [CSS Overflow Navigation Controls](https://github.com/WebKit/standards-positions/issues/447) [open]
- **Mozilla:** [CSS Overflow Navigation Controls](https://github.com/mozilla/standards-positions/issues/1161) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Indicating Scroll Position on a Page With CSS](https://twitter.com/css/status/1242465885983399937) — *by @css, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [teffcode (@teffcode) on X](https://twitter.com/teffcode/status/950171220036726784?lang=en) — *by @teffcode, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFASae9Jl4XO-EcCULN3RFQjFHePZLdUmmN-l0f7zmGZxJ28T8S37raGN8YeYfj6xMqpExWP_K5c85Wy7n1WDu3uBw8hD3yyq9jVXBuvhhlhCwFJIepxPZBh004zSmR2QUQQsRujr2cVKEdFrLZHawvdMFdOAHasFgtsQvVcVVv4SnT4hSEp0Nq3orGFK9Ftg==) *(vertexaisearch.cloud.google.com)*
  > scroll-marker-group CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties scroll-marker-group Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 s...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHOBK7IVVhVRpWxgGxjJeIEC7X9t5D0nWhiM9krDm4g2mhbpMO4OLWRTvFZaHHXr6HPyYVNbxFLpg7A8EoP-EDlyHkAQeQGYgJjf1kd3N-E3kfR4Pbx70h0aUlryXMNBJ9dvbOetED9F-zbqpD1gEbm42jLedcpXx90yxDD3A==) *(vertexaisearch.cloud.google.com)*
  > Description of the new scorll-marker-group modes for ARIAWG · GitHub Skip to content --> Search Gists Search Gists Sign in Sign up You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Relo...
- [sarasoueidan.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHsKPRjDNc_hForHZ6V-tLwvoQaHGqU4vQP2niWk37wICaGFtnUZ60FyE_XPzIVvnIYLnAqyyyZo52XS3wkh8VZzns5iSHo66k932v2S_isOLB7QUT7jXd7F_GdZX-FB6SYJH710N0=) *(vertexaisearch.cloud.google.com)*
  > CSS-only scrollspy effect using scroll-marker-group and :target-current would also go here but I’ve got it already defined in the Webmanifest file. --> Skip to main content This website is currently in the process of being refactored and redesigned. ...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFxNz1j_MYzN6AG6m0Si-DXoUbq8cJcQzdlJ-bPU2v-eJ0BfuDxsY63BWwcev37olMdaXqZ5gYfd4LOHyLptIiz2PO_7alw9vjid0Tsm0QdksjXPtObsvt8jRrT50_GPdEko3vis0dh) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEB8w8V-Ud1wvAICMn5ShM9zuFt1r9n6jR-pHyRfuaYShWEOXRaPCh4XKGWGi4gGxPGdDnOxAmH6qPT8y6aEV_EnzPiduh0cUTTorDnFrf4yNi0wi_b7zndGXGBI4sRDAsHxjUEv_cYni_WDYP44hNMpdnzsS--CW0y_O3EajomI7r7Lz0u) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge 154 web platform release notes (Sep. 2026) - Microsoft Edge Developer documentation | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advanta...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEv7qsMfvItrjlELu4G2WcKnL9vMA3Wnov8M_U6jso9FC5Mbs7fG6Z2EgDtnTPIadHNpkMjPBxiHXFhUOhDS36eJ-gn0cC01vQigMnhDb-Xz0ezjXa9qLkivwQ8GPDwKrKOc7Pzv8E-) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 ベータ版 | Blog | Chrome for Developers メイン コンテンツにスキップ / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH9ZcRPl7BWjOvQY7VEgWcbSJDGd7BD3wvUqqMstkm2WPX2T-H-WF0XQRtRBWo3-eMHVQbBnDmDSxtyoa2vChxuGIHGj_nqL9wPUaC3uBDgP_G0vNAVfvMyjcEwhIG32uBQMAH56YJhisK_CQ==) *(vertexaisearch.cloud.google.com)*
  > Make accessible carousels | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษ...
- [sarasoueidan.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF3XNc-rh_wHTBLMnnYHbj2mtTTRuQhOsJcMIQ7L_k0TfzPvWY_ruGC6G54V1ORgpIHINm1r3i2YfQGn4yKVX3U1t4Hp7EOhhDDQ-6QcP48Ut4UlDxwKem1mt-f3cBExRMvHXUfKkPcxRBXENGjFXc=) *(vertexaisearch.cloud.google.com)*
  > Redefining Scrollspy with CSS (No JS Needed!) would also go here but I’ve got it already defined in the Webmanifest file. --> Skip to main content This website is currently in the process of being refactored and redesigned. So if anything looks broke...
- [sarasoueidan.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGsh6iq8_NFuaXKcdeNK-keDjWNK5vIcLC32B3GlUEeBCzdANlRbNqSxYzqV_Y-1REO1olwLUuwwVijsdnHI6C5spSH3xZb7J9e1iFm06HhPu_k5LOwyQ2CLzPQqTxWHyM=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  As part of **CSS Overflow Module Level 5** (the CSS Carousels specification), the `scroll-marker-group` property was enhanced to accept an optional mode keyword alongside its placement (`before` or `after`):  ```css scroll-marker
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFPHfXj4Z45qN1667CxytDUmT2_0yFySVwD50DTeUJ929Lpg_ehq461RTwSHQ8mS0s6NRLuletEtfDu9ITcOxdtd4_N22UKcNInnLyheDZwDAtvkODVJBNP0yyicBa5) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  As part of **CSS Overflow Module Level 5** (the CSS Carousels specification), the `scroll-marker-group` property was enhanced to accept an optional mode keyword alongside its placement (`before` or `after`):  ```css scroll-marker
- [piccalil.li](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEYzVR2YwgsXhBqLDWo0KmxjePzc8zWBNNrQtCVuc3MTje3PEiNisLwg3PJkKJVTDpp7gQ1SViSAI9aUMxVOzjY4Vpqm1ayxqHiYwlar_bdwKRqTiYE7gKG) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  As part of **CSS Overflow Module Level 5** (the CSS Carousels specification), the `scroll-marker-group` property was enhanced to accept an optional mode keyword alongside its placement (`before` or `after`):  ```css scroll-marker
- [frontendfoc.us](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEJgxwtkBUaDqrl0DBdg8mu3C1DiyQn2Q8rQt-D_B98tU9buHZaD3jCw9Zr2wZZnQ8I80bZqpor4XZ1F_R90Ovji91Y9JqjQ80vMHRtgcSOT0yGyJEH1Wc=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  As part of **CSS Overflow Module Level 5** (the CSS Carousels specification), the `scroll-marker-group` property was enhanced to accept an optional mode keyword alongside its placement (`before` or `after`):  ```css scroll-marker
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGty9N4h59SrnyuteKcqi6onBK8NIbrA42xqo5vytQbv9Pa9JpKO3RR20DHFFUJReHCZLVqj0P3s5uKvbFktSvulmR3paYeHNRz6SD4bbOwutpmRjWTacTEBQ3poB3nBSBeVgc4tQ8AlTlQ08K1Ki3H5K5t8fccxmtVSia4) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  As part of **CSS Overflow Module Level 5** (the CSS Carousels specification), the `scroll-marker-group` property was enhanced to accept an optional mode keyword alongside its placement (`before` or `after`):  ```css scroll-marker
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF7uYeJK-0QX0hOJwK2BFZOSrX6PZ5s9bIjWT7llMwFL1mlPF4RQhwSvEyTIAu6HoQoI68F66tGsRP3y-6wr27Q9zltqexwdDupPxpcGEgoaEY0HyPp59iY_l4qm_H9Rm447dLxcv3AvkuB2lqOBcsivU4puvQC) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  As part of **CSS Overflow Module Level 5** (the CSS Carousels specification), the `scroll-marker-group` property was enhanced to accept an optional mode keyword alongside its placement (`before` or `after`):  ```css scroll-marker
- [RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)*
  > Thanks, Dan From: [email protected] ... modes Contact emails [email protected]&lt;mailto:[email protected]&gt; Explainer https://<strong>gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3</strong> Specification https://drafts.csswg.org/c...
- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)*
  > Explainer https://<strong>gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3</strong> Specification https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes Summary The scroll-marker-group property is enhaced to support modes: 1) &#x...
- [Common Issues and Workarounds for CSS scroll-marker-group](https://runebook.dev/en/docs/css/scroll-marker-group) *(runebook.dev)*
  > Imagine a long article with different sections; <strong>scroll-marker-group would allow you to create and style a visual marker in the scrollbar itself to show where a specific heading is</strong>.
- [How To Create a Scroll Indicator](https://www.w3schools.com/howto/howto_js_scroll_indicator.asp) *(w3schools.com)*
  > Learn how to create a scroll indicator with CSS and JavaScript.
- [CSS scroll-behavior property](https://www.w3schools.com/cssref/pr_scroll-behavior.php) *(w3schools.com)*
  > Add a smooth scrolling effect to the document.
- [A guide to Scroll-driven Animations with just CSS \| WebKit](https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css) *(webkit.org · 2025-07-07T23:17:11)*
  > First, let’s break down the components of a scroll-driven animation. ... What’s great about these three parts is that two out of the three are probably already familiar to you. The first, the target, can be whatever you want to move on your page, sty...
- [CSS scroll-margin property](https://www.w3schools.com/cssref/css_pr_scroll-margin.php) *(w3schools.com)*
  > W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many, many more.
- [How To Create a Custom Scrollbar](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp) *(w3schools.com)*
  > 2 Column Layout 3 Column Layout 4 Column Layout Expanding Grid List Grid View Mixed Column Layout Column Cards Zig Zag Layout Blog Layout · Google Charts Google Fonts Google Font Pairings Google Set up Analytics · Convert Weight Convert Temperature C...
- [CSS Scroll Effects: 50 Interactive Animations to Try](https://prismic.io/blog/css-scroll-effects) *(prismic.io · 2025-03-13T00:00:00)*
  > It allows you adjust the duration, delay, offset, easings, and repeat of your scroll effects. Explore the following resources to learn more about Tailwind CSS: 📖 Tailwind CSS Animations: Tutorial and 40+ Examples 📖 Tailwind CSS vs. Bootstrap: Which...
- [scroll-marker-group \| CSS-Tricks](https://css-tricks.com/almanac/properties/s/scroll-marker-group) *(css-tricks.com · 2025-05-28T15:25:53)*
  > In the carousel example below, the ::scroll-marker-group pseudo-element uses anchor positioning to position itself relative to the scroll container, which is probably the best way to go about it, but any method of alignment should work fine. And sinc...
- [CSS-only scrollspy effect using scroll-marker-group and :target-current](https://www.sarasoueidan.com/blog/css-scrollspy) *(sarasoueidan.com · 2025-08-18T00:00:00)*
  > Because the purpose of the scroll-target-group property and the :target-current selector is to allow us to create JavaScript-free native HTML scroll markers, we should expect the browser to add and manage the necessary ARIA attribute(s) required for ...
- [PWAs Power Tips － firt.dev](https://firt.dev/pwa-design-tips) *(firt.dev)*
  > While some modern browsers will accept muted mp4 files in an image, a PWA should have a fallback using &lt;video muted -webkit-plays-inline autoplay&gt; for the animation. After the browser download and parse all your HTML, CSS and JavaScript the nex...
- [Take control of your scroll - customizing pull-to-refresh and overflow effects \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/overscroll-behavior) *(developer.chrome.com · 2017-11-14T00:00:00)*
  > <strong>The CSS overscroll-behavior property allows developers to override the browser&#x27;s default overflow scroll behavior when reaching the top/bottom of content</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > Thanks, Dan From: [email protected] ... modes Contact emails [email protected]&lt;mailto:[email protected]&gt; Explainer https://<strong>gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3</strong> Specification https://drafts.c...
- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > Explainer https://<strong>gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3</strong> Specification https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes Summary The scroll-marker-group property is enhaced to support mod...
- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > &lt;!-- Abstract: <strong>This module contains the features of CSS relating to new mechanisms of overflow handling in visual media</strong> (e.g., screen or paper).  In interactive media, it describes features that allow the overflow from a...
- [Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss](https://github.com/parcel-bundler/lightningcss/issues/1184) *(github.com · 2026-03-16T06:55:52)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > Support CSS Overflow Module Level 5#1184 · Feature · Copy link · yisibl · opened · on Mar 16, 2026 · Issue body actions · https://<strong>drafts.csswg.org/css-overflow-5</strong> · scroll-marker-group · ::scroll-marker-group · ::scroll-mark...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)*
- [Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss](https://github.com/parcel-bundler/lightningcss/issues/1184) *(github.com)*
- [\`scroll-marker-group\` CSS property flagged as 'Unknown property' · Issue #120 · microsoft/vscode-custom-data](https://github.com/microsoft/vscode-custom-data/issues/120) *(github.com)*
- [scroll-marker-group CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-marker-group) *(developer.mozilla.org)*
- [scroll-marker-group CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker-group) *(developer.mozilla.org)*
- [scroll-marker CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker) *(developer.mozilla.org)*
- [::scroll-marker-group CSS pseudo-element - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker-group) *(developer.mozilla.org)*
- [::scroll-marker CSS pseudo-element - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker) *(developer.mozilla.org)*
- [scroll-target-group - CSS - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-target-group) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 36 result(s) found across 8 planned queries — **22 verified relevant**
  - `"chromestatus.com/feature/5109685301673984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"drafts.csswg.org/css-overflow-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"CSS scroll-marker-group modes" API` — *Core feature API query* (1 returned)
  - `"CSS scroll-marker-group modes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"scroll-marker-group" OR ":scroll-marker-group" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS scroll-marker-group modes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS scroll-marker-group modes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **14 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 887 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 7 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5109685301673984)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5109685301673984)
- [Specification](https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/425931511)
