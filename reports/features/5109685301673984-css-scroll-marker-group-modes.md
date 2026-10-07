# CSS scroll-marker-group modes

> **Report Week:** 2026-W41 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The scroll-marker-group property is enhaced to support modes: 1) 'links' - The generated ::scroll-marker-group operates in "links" mode, functioning like a navigation list. This is the default mode if omitted. 2) 'tabs' - The generated ::scroll-marker-group operates in "tabs" mode, functioning like a tablist.  Each mode changes focus order and accessibility behavior of ::scroll-marker-group and ::scroll-markers, following WAI-ARIA patterns.  More details: # The links mode (default) This mode is designed to mimic standard Navigation Landmarks combined with fragment anchors.  ## Semantic roles The ::scroll-marker-group takes on the navigation role, and the ::scroll-marker elements take on the link role. This perfectly maps to the &lt;nav&gt; + &lt;a&gt; structural pattern.  ## Keyboard navigation All ::scroll-marker elements are sequential tab stops, natively acting like a list of standard anchor links.  ## Unaffected targets The originating elements do not get forced into any role, leaving the document's natural semantic structure intact.  ## Activation focus management When a link marker is activated, it sets the sequential focus navigation starting point to the target element (the originating element), and focus is lost from the marker. This mimics the native behavior of clicking a standard internal &lt;a href="#target"&gt; link.  # The tabs mode This mode is designed to natively replicate the Tabs Pattern and serves as the interactive foundation for the Tabbed Carousel Pattern.  ## Semantic roles The ::scroll-marker-group is implicitly assigned the tablist role, ::scroll-marker elements act as tab roles, and their originating elements get the tabpanel role. This mirrors the required WAI-ARIA Tabs structure.  ## Keyboard navigation (roving tabindex) It follows the complex keyboard interactions outlined in standard practices. Only the active ::scroll-marker acts as a tab stop. Users use arrow keys to navigate the focusgroup (switching between markers), preventing the "tab trap" of having to tab through 20 carousel dots.  ## Focus scope management The marker acts as a focus navigation scope owner. Pressing Tab from the active marker moves focus directly into the active tabpanel content, matching the specification for tabbed interfaces.  ## Tree pruning Content from inactive tabs is explicitly hidden from the accessibility tree. This mimics the expected behavior of aria-hidden="true" or inert on inactive tab panels, saving developers from manually scripting state changes.  ## Activation focus When a marker is activated, focus is retained on the marker, which is exactly how standard tabs operate.

## Ecosystem Status

- **Momentum:** High (395 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Shipped enabled by default in Chrome 154, CSS \`scroll-marker-group\` modes allow developers to explicitly toggle between \`links\` (navigation landmarks and fragment anchors) and \`tabs\` (tablist/tabpanel with roving tabindex and accessibility tree pruning). The enhancement directly addresses long-standing usability and accessibility criticisms of CSS carousels, but currently exists as a Chromium-only implementation without Baseline interoperability.

### Recommendations
- Actionable Advice: Web teams should treat \`scroll-marker-group\` modes as an experimental, progressive enhancement rather than a baseline solution. If experimenting with CSS-driven carousels or tabs in Chromium, ensure feature queries or accessible HTML/JS fallbacks remain in place for Safari and Firefox users.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Some issues that seem pretty fundamental: - https://github.com/w3c/csswg-drafts/issues/12240 - https://github.com/w3c/csswg-drafts/issues/12269..."
- Standards Activity (Mozilla): Latest discussion from @jcsteh: "I have some significant accessibility concerns regarding CSS inert specifically. See https://github.com/w3ctag/design-reviews/issues/1055#issuecomment..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "New in Chrome 154 \| Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [CSS Overflow Navigation Controls](https://github.com/WebKit/standards-positions/issues/447) [open]
- **Mozilla:** [CSS Overflow Navigation Controls](https://github.com/mozilla/standards-positions/issues/1161) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [New in Chrome 154 \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2102804599325528424) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg17237.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS scroll-marker-group modes Robert Flack Wed, 19 Aug 2026 16:39:42 -0700 On Wed, Jul 29, 2026 at 8:04 PM 'Dan Clark'...
- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS scroll-marker-group modes Chromestatus Wed, 15 Jul 2026 12:40:07 -0700 Contact emails [email&#160;protected] Explainer htt...
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > Chrome 154 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中...
- [New in Chrome 154 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > New in Chrome 154 | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 ...
- [Common Issues and Workarounds for CSS scroll-marker-group](https://runebook.dev/en/docs/css/scroll-marker-group) *(runebook.dev)*
  > Common Issues and Workarounds for CSS scroll-marker-group Common Issues and Workarounds for CSS scroll-marker-group 2025-09-09 This property is designed to allow developers to style the scroll markers of an element, which are visual indicators for sc...
- [CSS scroll-behavior property](https://www.w3schools.com/cssref/pr_scroll-behavior.php) *(w3schools.com)*
  > Add a smooth scrolling effect to the document.
- [How To Create a Scroll Indicator](https://www.w3schools.com/howto/howto_js_scroll_indicator.asp) *(w3schools.com)*
  > 2 Column Layout 3 Column Layout 4 Column Layout Expanding Grid List Grid View Mixed Column Layout Column Cards Zig Zag Layout Blog Layout · Google Charts Google Fonts Google Font Pairings Google Set up Analytics · Convert Weight Convert Temperature C...
- [A guide to Scroll-driven Animations with just CSS \| WebKit](https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css) *(webkit.org · 2025-07-07T23:17:11)*
  > First, let’s break down the components of a scroll-driven animation. ... What’s great about these three parts is that two out of the three are probably already familiar to you. The first, the target, can be whatever you want to move on your page, sty...
- [CSS scroll-margin property](https://www.w3schools.com/cssref/css_pr_scroll-margin.php) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java and XML.
- [CSS Scroll Effects: 50 Interactive Animations to Try](https://prismic.io/blog/css-scroll-effects) *(prismic.io · 2025-03-13T00:00:00)*
  > TAOS is a lightweight (approximately 600 bytes) JavaScript library designed to integrate seamlessly with Tailwind CSS. It allows you to apply animations to elements when they enter the viewport during scrolling, utilizing Tailwind&#x27;s Just-In-Time...
- [scroll-marker-group \| CSS-Tricks](https://css-tricks.com/almanac/properties/s/scroll-marker-group) *(css-tricks.com · 2025-05-28T15:25:53)*
  > The scroll-marker-group CSS property <strong>determines if the ::scroll-marker-group pseudo-element is generated within the scroll container that the property is set on, and where</strong>.
- [CSS-only scrollspy effect using scroll-marker-group and :target-current](https://www.sarasoueidan.com/blog/css-scrollspy) *(sarasoueidan.com · 2025-08-18T00:00:00)*
  > Let’s demonstrate how. In the CSS Carousels article we talked about how the scroll-marker-group property is <strong>used to generate a grouping container for a group of ::scroll-markers</strong>.
- [Intent to Ship: ::scroll-marker and ::scroll-marker-group for Carousel, ::column pseudo element for Carousel and ::scroll-button() pseudo elements](https://groups.google.com/a/chromium.org/g/blink-dev/c/7EQ8-VzPZh0/m/NMyrGCjuAAAJ) *(groups.google.com)*
  > Can you do a triage pass over the open issues and summarize here what you see the web compat risk to be for potentially upcoming spec changes to resolve the issues? Given this is an unpolyfillable CSS feature I assume we don&#x27;t expect much adopti...
- [A Checklist of Issues for Progressive Web Apps and How to Fix them \| Philip Heltweg](https://heltweg.org/posts/checklist-issues-progressive-web-apps-how-to-fix) *(heltweg.org · 2024-10-15T00:00:00)*
  > <strong>Set overflow hidden on the body and show content in an element with overflow-y: scroll; and a fixed height</strong>:
- [Take control of your scroll - customizing pull-to-refresh and overflow effects \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/overscroll-behavior) *(developer.chrome.com · 2017-11-14T00:00:00)*
  > Pulling down on a social feed and releasing creates new space for more recent posts to be loaded. In fact, this particular UX has become so popular that mobile browsers like Chrome on Android have adopted the same effect. Swiping down at the top of t...
- [css - Content showing in statusbar when scrolling in PWA - Stack Overflow](https://stackoverflow.com/questions/61735881/content-showing-in-statusbar-when-scrolling-in-pwa) *(stackoverflow.com)*
  > Thanks Max Di Campo. This solution worked for me. In my PWA, the body content was showing behind the status bar when body is scrolled.
- [Scroll marker group type](https://flackr.github.io/web-demos/css-overflow/scroll-marker-type) *(flackr.github.io)*
  > Pressing enter to activate a scroll marker will, like following an anchor link, scroll to its target element and set the sequential focus navigation starting point to the target meaning that subsequent tab presses will move focus starting from that c...
- [::scroll-marker \| CSS-Tricks](https://css-tricks.com/almanac/pseudo-selectors/s/scroll-marker) *(css-tricks.com · 2025-05-06T12:38:13)*
  > scroll-marker-group is set to before this time, because the tabs are at the top/before the scroll container’s content.
- [Make accessible carousels \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/accessible-carousel?hl=en) *(developer.chrome.com)*
  > Note: Be aware that this approach does not conform to the expectations for the tablist and tabs generated by the ::scroll-marker-group and ::scroll-marker pseudo-elements.
- [Chrome 154 Takes Over Iframe Sizing and Carousel Semantics — Here's Where to Adopt It \| Mintec Blog](https://mintec.co/blog/chrome-154-frame-sizing-carousel-tabs) *(mintec.co · 2026-09-26T14:39:22)*
  > CSS scroll marker modes. scroll-marker-group already generated the <strong>::scroll-marker-group and ::scroll-marker pseudo-elements that turn a scroll-snap list into a carousel with dots</strong>.
- [你以为 tab 无障碍只能靠 WAI-ARIA 一个个配？今天 scroll-marker-group 两个模式把这件事彻底原生化了 - AI产品库官网 - AIProductHub](https://aiproducthub.cn/s/46558.html) *(aiproducthub.cn · 2026-09-13T13:26:57)*
  > scroll-marker-group: tabs 模式下，浏览器会自动给滚动容器内的标记点赋予正确的 ARIA 语义：::scroll-marker-group 隐式获得 tablist 角色，每个 ::scroll-marker 获得 tab 角色，对应的原始元素自动获得 tabpanel 角色。不需要写任何 role 属性，浏览器自己推断。
- [CSS Overflow Module Level 3](https://drafts.csswg.org/css-overflow) *(drafts.csswg.org · 2025-10-07T00:00:00)*
  > Clarify which clipping affects limit contributions to the scrollable overflow area of the nearest scroll container. (Issue 8607) Clarify application of overflow to tables.
- [Re: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg17270.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; *&gt; Is this feature fully tested by web-platform-tests &gt;&gt;&gt;&gt;&gt; &lt;https://chromium.googlesource.com/chromium/src/+/main/docs/testing/web_platform_test...
- [security - Google Chrome weird cursor blink on pages, never seen 'em before - Stack Overflow](https://stackoverflow.com/questions/64499328/google-chrome-weird-cursor-blink-on-pages-never-seen-em-before) *(stackoverflow.com)*
  > <strong>On Firefox, it&#x27;s allowing to select and no cursor blinks</strong> and that&#x27;s the default behaviour.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg17237.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > Re: [blink-dev] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS scroll-marker-group modes Robert Flack Wed, 19 Aug 2026 16:39:42 -0700 On Wed, Jul 29, 2026 at 8:04 PM '...
- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...
- [Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss](https://github.com/parcel-bundler/lightningcss/issues/1184) *(github.com · 2026-03-16T06:55:52)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)*
- [Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss](https://github.com/parcel-bundler/lightningcss/issues/1184) *(github.com)*
- [\`scroll-marker-group\` CSS property flagged as 'Unknown property' · Issue #120 · microsoft/vscode-custom-data](https://github.com/microsoft/vscode-custom-data/issues/120) *(github.com)*
- [scroll-marker-group CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-marker-group) *(developer.mozilla.org)*
- [scroll-marker-group CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker-group) *(developer.mozilla.org)*
- [scroll-marker-group CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-marker-group) *(developer.mozilla.org)*
- [::scroll-marker-group CSS pseudo-element - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker-group) *(developer.mozilla.org)*
- [scroll-marker CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker) *(developer.mozilla.org)*
- [::scroll-marker CSS pseudo-element - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker) *(developer.mozilla.org)*
- [Scroll markers · Issue #1406 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1406) *(github.com)*
- [Creating CSS carousels - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Overflow/Carousels) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 55 result(s) found across 13 planned queries — **35 verified relevant**
  - `"chromestatus.com/feature/5109685301673984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"drafts.csswg.org/css-overflow-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"CSS scroll-marker-group modes" API` — *Core feature API query* (2 returned)
  - `"CSS scroll-marker-group modes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"scroll-marker-group" OR ":scroll-marker-group" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS scroll-marker-group modes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS scroll-marker-group modes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"scroll-marker-group" "tabs" OR "links" tutorial OR guide` — *Finds technical blog posts, guides, and practical tutorials explaining the difference between the tabs and links modes of scroll-marker-group.* (8 returned)
  - `"scroll-marker-group" tabs "tabpanel" OR "tablist" CSS carousel` — *Surfaces real-world CSS code snippets and carousel implementations that leverage the tabs mode with automatic ARIA semantics.* (8 returned)
  - `site:drafts.csswg.org/css-overflow OR site:github.com/w3c/csswg-drafts "scroll-marker-group" "links" "tabs"` — *Finds formal spec drafts, discussions, and syntax issue threads in CSSWG repositories for scroll-marker-group modes.* (1 returned)
  - `"scroll-marker-group" ("tabs" OR "links") (Chrome OR WebKit OR Firefox OR Blink OR "web-platform-tests")` — *Tracks browser engine implementation status, intent to ship/prototype announcements, and test suites across web engines.* (3 returned)
  - `"scroll-marker-group" "tabs" ("accessibility" OR "a11y" OR "ARIA" OR "roving tabindex")` — *Identifies web accessibility community opinions, articles, and feedback regarding the automatic roving tabindex and a11y tree pruning behaviors.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 906 item(s) inspected

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
