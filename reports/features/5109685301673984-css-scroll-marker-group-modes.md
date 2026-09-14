# CSS scroll-marker-group modes

> **Report Week:** 2026-W38 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The scroll-marker-group property is enhaced to support modes: 1) 'links' - The generated ::scroll-marker-group operates in "links" mode, functioning like a navigation list. This is the default mode if omitted. 2) 'tabs' - The generated ::scroll-marker-group operates in "tabs" mode, functioning like a tablist.  Each mode changes focus order and accessibility behavior of ::scroll-marker-group and ::scroll-markers, following WAI-ARIA patterns.  More details: # The links mode (default) This mode is designed to mimic standard Navigation Landmarks combined with fragment anchors.  ## Semantic roles The ::scroll-marker-group takes on the navigation role, and the ::scroll-marker elements take on the link role. This perfectly maps to the &lt;nav&gt; + &lt;a&gt; structural pattern.  ## Keyboard navigation All ::scroll-marker elements are sequential tab stops, natively acting like a list of standard anchor links.  ## Unaffected targets The originating elements do not get forced into any role, leaving the document's natural semantic structure intact.  ## Activation focus management When a link marker is activated, it sets the sequential focus navigation starting point to the target element (the originating element), and focus is lost from the marker. This mimics the native behavior of clicking a standard internal &lt;a href="#target"&gt; link.  # The tabs mode This mode is designed to natively replicate the Tabs Pattern and serves as the interactive foundation for the Tabbed Carousel Pattern.  ## Semantic roles The ::scroll-marker-group is implicitly assigned the tablist role, ::scroll-marker elements act as tab roles, and their originating elements get the tabpanel role. This mirrors the required WAI-ARIA Tabs structure.  ## Keyboard navigation (roving tabindex) It follows the complex keyboard interactions outlined in standard practices. Only the active ::scroll-marker acts as a tab stop. Users use arrow keys to navigate the focusgroup (switching between markers), preventing the "tab trap" of having to tab through 20 carousel dots.  ## Focus scope management The marker acts as a focus navigation scope owner. Pressing Tab from the active marker moves focus directly into the active tabpanel content, matching the specification for tabbed interfaces.  ## Tree pruning Content from inactive tabs is explicitly hidden from the accessibility tree. This mimics the expected behavior of aria-hidden="true" or inert on inactive tab panels, saving developers from manually scripting state changes.  ## Activation focus When a marker is activated, focus is retained on the marker, which is exactly how standard tabs operate.

## Ecosystem Status

- **Momentum:** High (175 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** CSS \`scroll-marker-group\` modes (\`links\` and \`tabs\`) have shipped enabled by default in Chrome 154, addressing longstanding WCAG compliance gaps by letting developers declaratively toggle between standard navigation anchor behavior and a full WAI-ARIA tablist pattern. While the CSS Working Group resolved to add this \`\[ tabs \| links \]\` syntax to CSS Overflow Module Level 5 (Issue #12122), the feature remains Chromium-exclusive and is not yet part of Baseline.

### Recommendations
- Actionable Advice: Treat CSS scroll marker modes strictly as progressive enhancement or experimental prototypes for modern Chromium users; keep existing accessible JavaScript and semantic markup patterns in production to ensure keyboard and assistive-technology parity across Safari and Firefox.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @danielsakhapov: "FYI, we've update scroll-marker-group property to support modes to better comply with WCAG patterns - https://chromestatus.com/feature/510968530167398..."
- Standards Activity (Mozilla): Latest discussion from @jcsteh: "I have some significant accessibility concerns regarding CSS inert specifically. See https://github.com/w3ctag/design-reviews/issues/1055#issuecomment..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Overflow Navigation Controls](https://github.com/WebKit/standards-positions/issues/447) [open]
- **Mozilla:** [CSS Overflow Navigation Controls](https://github.com/mozilla/standards-positions/issues/1161) [open]

## 📰 Ecosystem Blogs & Articles

- [RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)*
  > RE: [blink-dev] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) RE: [blink-dev] Intent to Ship: CSS scroll-marker-group modes 'Daniel Clark' via blink-dev Mon, 20 Jul 2026 09:49:59 -0700 It's stated here that "link...
- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS scroll-marker-group modes Chromestatus Wed, 15 Jul 2026 12:40:07 -0700 Contact emails [email&#160;protected] Explainer htt...
- [Take control of your scroll - customizing pull-to-refresh and overflow effects \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/overscroll-behavior) *(developer.chrome.com · 2017-11-14T00:00:00)*
  > <strong>The CSS overscroll-behavior property allows developers to override the browser&#x27;s default overflow scroll behavior when reaching the top/bottom of content</strong>.
- [css - Content showing in statusbar when scrolling in PWA - Stack Overflow](https://stackoverflow.com/questions/61735881/content-showing-in-statusbar-when-scrolling-in-pwa) *(stackoverflow.com)*
  > Thanks Max Di Campo. This solution worked for me. In my PWA, the body content was showing behind the status bar when body is scrolled.
- [Scroll-marker elements and pseudo-elements \| carousel](https://flackr.github.io/carousel/scroll-marker) *(flackr.github.io)*
  > Scroll markers require the combination ... activated as a result of scrolling, and · The active marker should be stylable. <strong>A scroll marker is an anchor link to an element on the page</strong>....
- [Carousels with CSS \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/carousels-with-css) *(developer.chrome.com · 2025-03-20T00:00:00)*
  > <strong>A carousel is a scroll area with up to two added UI affordances—buttons and markers</strong>. In version one of CSS carousel features, the buttons and markers are created from CSS. The browser places the elements as siblings, with the proper ...
- [Scroll marker group type](https://flackr.github.io/web-demos/css-overflow/scroll-marker-type) *(flackr.github.io)*
  > <strong>By setting the scroll-marker-group type you can switch between tabs and links</strong>.
- [CSS Carousels \| CSS-Tricks](https://css-tricks.com/css-carousels) *(css-tricks.com · 2026-04-03T19:06:44)*
  > In this case, let’s set Flexbox on the group so that we can display them on a single line and place gaps between them in the center of the carousel’s inline size: .carousel::scroll-marker-group { display: flex; justify-content: center; gap: 1rem; }
- [Chrome 153 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-153-beta) *(developer.chrome.com · 2026-08-20T00:00:00)*
  > Learn more about these features by using the provided links or by visiting ChromeStatus.com. Chrome is in beta as of this release. You can download the latest beta version from Google.com for desktop or from Google Play Store on Android. Note: Chrome...
- [Safari Technology Preview 252 adds @supports named-feature(), unprefixed user-select and two accessible-name fixes](https://dev.to/leobaniak/safari-technology-preview-252-adds-supports-named-feature-unprefixed-user-select-and-two-50d5) *(dev.to · Leo · Sep 12)*
  > WebKit's 11 September preview adds a named-feature() function to @supports, exposes CSSConditionRule.supports and CSSMediaRule.matches on the CSSOM, ships the unprefixed user-select property, allows percentage values in text-decoration-inset, and cle...
- [CSS LED ART CHALLENGE!](https://dev.to/ivorjetski/css-led-art-challenge-5e6b) *(dev.to · Ben Evans · Sep 12)*
  > So I saw a cool thing whilst doom-scrolling, and thought: Wouldn't it be fun to recreate all the real...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > RE: [blink-dev] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) RE: [blink-dev] Intent to Ship: CSS scroll-marker-group modes 'Daniel Clark' via blink-dev Mon, 20 Jul 2026 09:49:59 -0700 It's stated here ...
- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > [blink-dev] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS scroll-marker-group modes Chromestatus Wed, 15 Jul 2026 12:40:07 -0700 Contact emails [email&#160;protected] Exp...

## 📚 Platform Documentation & Specifications

- [::scroll-marker CSS pseudo-element - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker) *(developer.mozilla.org)*
- [\[css-overflow-5\] Scroll-markers · Issue #10720 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10720) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 43 result(s) found across 12 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/5109685301673984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"drafts.csswg.org/css-overflow-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"CSS scroll-marker-group modes" API` — *Core feature API query* (1 returned)
  - `"CSS scroll-marker-group modes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"scroll-marker-group" OR ":scroll-marker-group" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS scroll-marker-group modes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS scroll-marker-group modes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"scroll-marker-group" ("tabs" OR "links") carousel CSS` — *Finds practical developer guides, blog posts, and tutorials demonstrating how to build carousels or tab panels using CSS scroll-marker-group modes.* (8 returned)
  - `"scroll-marker-group: tabs" OR "scroll-marker-group: links" "::scroll-marker"` — *Targets exact CSS syntax snippets, code examples, and spec implementations combining scroll-marker-group modes with ::scroll-marker pseudo-elements.* (0 returned)
  - `"scroll-marker-group" ("tabs" OR "links") ("intent to" OR chromestatus OR webkit OR "css-overflow-5")` — *Tracks browser vendor implementation status, Intent to Prototype or Ship announcements, and standards tracking for scroll-marker-group modes.* (4 returned)
  - `"scroll-marker-group" tabs (accessibility OR "roving tabindex" OR tablist OR "focus")` — *Uncovers web accessibility discussions, developer feedback, and debates regarding the native roving tabindex, ARIA tablist mapping, and focus management in tabs mode.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **2 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 858 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5109685301673984)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5109685301673984)
- [Specification](https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/425931511)
