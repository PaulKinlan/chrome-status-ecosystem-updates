# CSS scroll-marker-group modes

> **Report Week:** 2026-W43 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The scroll-marker-group property is enhaced to support modes: 1) 'links' - The generated ::scroll-marker-group operates in "links" mode, functioning like a navigation list. This is the default mode if omitted. 2) 'tabs' - The generated ::scroll-marker-group operates in "tabs" mode, functioning like a tablist.  Each mode changes focus order and accessibility behavior of ::scroll-marker-group and ::scroll-markers, following WAI-ARIA patterns.  More details: # The links mode (default) This mode is designed to mimic standard Navigation Landmarks combined with fragment anchors.  ## Semantic roles The ::scroll-marker-group takes on the navigation role, and the ::scroll-marker elements take on the link role. This perfectly maps to the &lt;nav&gt; + &lt;a&gt; structural pattern.  ## Keyboard navigation All ::scroll-marker elements are sequential tab stops, natively acting like a list of standard anchor links.  ## Unaffected targets The originating elements do not get forced into any role, leaving the document's natural semantic structure intact.  ## Activation focus management When a link marker is activated, it sets the sequential focus navigation starting point to the target element (the originating element), and focus is lost from the marker. This mimics the native behavior of clicking a standard internal &lt;a href="#target"&gt; link.  # The tabs mode This mode is designed to natively replicate the Tabs Pattern and serves as the interactive foundation for the Tabbed Carousel Pattern.  ## Semantic roles The ::scroll-marker-group is implicitly assigned the tablist role, ::scroll-marker elements act as tab roles, and their originating elements get the tabpanel role. This mirrors the required WAI-ARIA Tabs structure.  ## Keyboard navigation (roving tabindex) It follows the complex keyboard interactions outlined in standard practices. Only the active ::scroll-marker acts as a tab stop. Users use arrow keys to navigate the focusgroup (switching between markers), preventing the "tab trap" of having to tab through 20 carousel dots.  ## Focus scope management The marker acts as a focus navigation scope owner. Pressing Tab from the active marker moves focus directly into the active tabpanel content, matching the specification for tabbed interfaces.  ## Tree pruning Content from inactive tabs is explicitly hidden from the accessibility tree. This mimics the expected behavior of aria-hidden="true" or inert on inactive tab panels, saving developers from manually scripting state changes.  ## Activation focus When a marker is activated, focus is retained on the marker, which is exactly how standard tabs operate.

## Ecosystem Status

- **Momentum:** High (footprint 425 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The CSS scroll-marker-group modes feature introduces native 'links' and 'tabs' behaviors to scroll markers, dramatically improving semantic alignment and keyboard navigation for declarative carousels and tabs. While Chromium has advanced implementation to enabled-by-default status, the feature lacks cross-browser baseline status and faces substantial accessibility scrutiny from other vendors.

### Recommendations
- Actionable Advice: Teams should treat this feature as an experimental progressive enhancement, testing behavior carefully under feature flags while ensuring robust JavaScript fallbacks for non-Chromium browsers.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Some issues that seem pretty fundamental: - https://github.com/w3c/csswg-drafts/issues/12240 - https://github.com/w3c/csswg-drafts/issues/12269..."
- Standards Activity (Mozilla): Latest discussion from @jcsteh: "I have some significant accessibility concerns regarding CSS inert specifically. See https://github.com/w3ctag/design-reviews/issues/1055#issuecomment..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Overflow Navigation Controls](https://github.com/WebKit/standards-positions/issues/447) [open]
- **Mozilla:** [CSS Overflow Navigation Controls](https://github.com/mozilla/standards-positions/issues/1161) [open]

## 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://img680-dot-cr-status.appspot.com/feature/5109685301673984) *(img680-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [sarasoueidan.com](https://www.sarasoueidan.com/newsletter/issue-2025-08-18) *(sarasoueidan.com)*
  > Articles and developer guides (such as those exploring CSS-only carousels and scrollspy utilities by developers like Sara Soueidan Earlier iterations of CSS scroll markers faced heavy scrutiny from accessibility experts regarding broken semantics and...
- [dandenney.com](https://www.dandenney.com/blips/css-only-scrollspy-with-scroll-marker-group) *(dandenney.com)*
  > Articles and developer guides (such as those exploring CSS-only carousels and scrollspy utilities by developers like Sara Soueidan and Dan Denney Articles and developer guides (such as those exploring CSS-only carousels and scrollspy utilities by dev...
- [medium.com](https://pixicstudio.medium.com/css-scroll-markers-building-carousels-without-javascript-509e6a3d4005) *(pixicstudio.medium.com)*
  > Articles and developer guides (such as those exploring CSS-only carousels and scrollspy utilities by developers like Sara Soueidan and Dan Denney) celebrate \`scroll-marker-group\` as a monumental step toward building complex UI patterns—like carousels...
- [caniuse.com](https://caniuse.com/css-scroll-markers) *(caniuse.com)*
  > Articles and developer guides (such as those exploring CSS-only carousels and scrollspy utilities by developers like Sara Soueidan and Dan Denney) celebrate \`scroll-marker-group\` as a monumental step toward building complex UI patterns—like carousels...
- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Chromestatus Wed, 15 Jul 2026 12:40:07 -0700 Contact emails \[email&#160;protected\] Explainer htt...
- [RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)*
  > RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes 'Daniel Clark' via blink-dev Mon, 20 Jul 2026 09:49:59 -0700 It's stated here that "link...
- [Re: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg17056.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Daniil Sakhapov Fri, 24 Jul 2026 03:48:51 -0700 1) Current usage is extermly low/close t...
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > The scroll-marker-group property supports two modes that &lt;strong&gt;control the focus order and accessibility behavior of ::scroll-marker-group and ::scroll-marker&lt;/strong&gt; following WAI-ARIA patterns:
- [New in Chrome 154 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > &lt;strong&gt;/\* Links mode (default) \*/ scroll-marker-group: after links; /\* Tabs mode \*/ scroll-marker-group: before tabs;&lt;/strong&gt; By default, an element&#x27;s text decoration (such as an underline, overline, or line-through) is the same length as the ...
- [Common Issues and Workarounds for CSS scroll-marker-group](https://runebook.dev/en/docs/css/scroll-marker-group) *(runebook.dev)*
  > This property is designed to allow developers to style the scroll markers of an element, which are visual indicators for scroll positions
- [scroll-marker-group \| CSS-Tricks](https://css-tricks.com/almanac/properties/s/scroll-marker-group) *(css-tricks.com · 2025-05-28T15:25:53)*
  > The scroll-marker-group CSS property &lt;strong&gt;determines if the ::scroll-marker-group pseudo-element is generated within the scroll container that the property is set on, and where&lt;/strong&gt;.
- [Intent to Ship: ::scroll-marker and ::scroll-marker-group for Carousel, ::column pseudo element for Carousel and ::scroll-button() pseudo elements](https://groups.google.com/a/chromium.org/g/blink-dev/c/7EQ8-VzPZh0/m/NMyrGCjuAAAJ?hl=id) *(groups.google.com)*
  > Of those that remain, some are not relevant to the shipping features here (#10493, #11553, #10916), many are clarifying the implementation that won&#x27;t require implementation changes (#11198, #10705, #10708, #10704, #11166), many are minor changes...
- [CSS Scroll Markers: Building Accessible Tabs in Chrome \| Alexander Burgos](https://alexanderburgos.netlify.app/blog/css-scroll-markers-tabs) *(alexanderburgos.netlify.app · 2026-09-27T11:43:43)*
  > Using before or after in your ... sequence. ... Understand the semantics: &lt;strong&gt;Use links mode for sequential, independent content navigation, and tabs mode for unified composite widgets&lt;/strong&gt;....
- [Scroll marker group type](https://flackr.github.io/web-demos/css-overflow/scroll-marker-type) *(flackr.github.io)*
  > Only the active tabpanel is in ... the expectations of a carousel with markers. &lt;strong&gt;When using scroll markers as navigational markers to scroll to particular content, it should use the links mode to behave as a navigation landmark&lt;/strong&gt;....
- [Scroll-marker elements and pseudo-elements \| carousel](https://flackr.github.io/carousel/scroll-marker) *(flackr.github.io)*
  > By having a way to automatically generate markers, many more advanced UI patterns can be solved in CSS. Scroll markers require the combination of several behaviors: ... only one of the scroll markers in a group should be active (and focusable) at a t...
- [CSS-only scrollspy effect using scroll-marker-group and :target-current](https://www.sarasoueidan.com/blog/css-scrollspy) *(sarasoueidan.com · 2025-08-18T00:00:00)*
  > Instead of using ::scroll-markers to implement \[the Scrollspy\] example, I would instead expect to be able to create a semantic table of contents using an HTML list of &lt;a href=&quot;&quot;&gt;, and then use the :target-current pseudo-class to apply...
- [::scroll-marker \| CSS-Tricks](https://css-tricks.com/almanac/pseudo-selectors/s/scroll-marker) *(css-tricks.com · 2025-05-06T12:38:13)*
  > The required value of scroll-marker-group (either before or after) should match the visual tab order.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109685301673984`)*
  > \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Chromestatus Wed, 15 Jul 2026 12:40:07 -0700 Contact emails \[email&#160;protected\] Exp...
- [RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109685301673984`)*
  > RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes 'Daniel Clark' via blink-dev Mon, 20 Jul 2026 09:49:59 -0700 It's stated here ...
- [Re: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg17056.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > Re: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Daniil Sakhapov Fri, 24 Jul 2026 03:48:51 -0700 1) Current usage is extermly l...
- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...
- [Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss](https://github.com/parcel-bundler/lightningcss/issues/1184) *(github.com · 2026-03-16T06:55:52)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [CSS Overflow Navigation Controls · Issue #1161 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1161) *(github.com · 2025-01-09T15:58:35)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > CSS Overflow Navigation Controls · Issue #1161 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload ...

## 📚 Platform Documentation & Specifications

- [scroll-marker-group CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-marker-group) *(developer.mozilla.org)*
- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)*
- [Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss](https://github.com/parcel-bundler/lightningcss/issues/1184) *(github.com)*
- [CSS Overflow Navigation Controls · Issue #1161 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1161) *(github.com)*
- [\`scroll-marker-group\` CSS property flagged as 'Unknown property' · Issue #120 · microsoft/vscode-custom-data](https://github.com/microsoft/vscode-custom-data/issues/120) *(github.com)*
- [scroll-marker-group CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker-group) *(developer.mozilla.org)*
- [scroll-marker-group CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-marker-group) *(developer.mozilla.org)*
- [::scroll-marker-group CSS pseudo-element - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker-group) *(developer.mozilla.org)*
- [scroll-marker CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker) *(developer.mozilla.org)*
- [scroll-target-group CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-target-group) *(developer.mozilla.org)*
- [::scroll-marker CSS pseudo-element - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker) *(developer.mozilla.org)*
- [\[css-overflow-5\] Scroll-markers · Issue #10720 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10720) *(github.com)*
- [\[css-overflow-5\] Discrete versus navigation scroll marker mode · Issue #12122 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12122) *(github.com)*
- [\[css-overflow-5\]: CSS scroll-marker and scroll-button create a wide array of developer footguns for questionable benefit · Issue #14218 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14218) *(github.com)*
- [\[css-overflow-5\] Focus order of scroll markers revisited · Issue #14583 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14583) *(github.com)*
- [Scroll markers · Issue #1406 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1406) *(github.com)*
- [\[css-overflow-5\] Skip scroll buttons if tab scroll markers exist? · Issue #14584 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14584) *(github.com)*
- [\[css-overflow-5\] Default UA styles for scroll markers and scroll buttons · Issue #10935 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10935) *(github.com)*
- [carousel/scroll-marker at main · flackr/carousel](https://github.com/flackr/carousel/tree/main/scroll-marker) *(github.com)*
- [content/files/en-us/web/css/reference/properties/scroll-marker-group/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/scroll-marker-group/index.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 12 planned queries — **33 verified relevant**
  - `"chromestatus.com/feature/5109685301673984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"drafts.csswg.org/css-overflow-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"CSS scroll-marker-group modes" API` — *Core feature API query* (4 returned)
  - `"CSS scroll-marker-group modes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"scroll-marker-group" OR ":scroll-marker-group" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS scroll-marker-group modes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS scroll-marker-group modes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `CSS scroll-marker-group modes tabs links tutorial guide` — *Finds developer blog posts and practical guides explaining the difference between links and tabs modes in scroll-marker-group.* (8 returned)
  - `scroll-marker-group tabs links css code example webidl` — *Locates real-world CSS and HTML implementation examples showcasing scroll-marker modes and WAI-ARIA tablist mappings.* (8 returned)
  - `csswg drafts scroll-marker-modes announcement sentiment` — *Discovers standards discussions, status updates, and ecosystem sentiment regarding CSS scroll-marker-group enhancements.* (8 returned)
  - `scroll-marker-group accessibility roving tabindex discussion` — *Searches for developer discussions on accessibility behavior, keyboard navigation, and roving tabindex in scroll marker modes.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 6 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

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
