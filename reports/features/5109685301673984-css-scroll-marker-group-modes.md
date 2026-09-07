# CSS scroll-marker-group modes

> **Report Week:** 2026-W37 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The scroll-marker-group property is enhaced to support modes:
1) 'links' - The generated ::scroll-marker-group operates in "links" mode, functioning like a navigation list. This is the default mode if omitted.
2) 'tabs' - The generated ::scroll-marker-group operates in "tabs" mode, functioning like a tablist.

Each mode changes focus order and accessibility behavior of ::scroll-marker-group and ::scroll-markers, following WAI-ARIA patterns.

More details:
# The links mode (default)
This mode is designed to mimic standard Navigation Landmarks combined with fragment anchors.

## Semantic roles
The ::scroll-marker-group takes on the navigation role, and the ::scroll-marker elements take on the link role. This perfectly maps to the <nav> + <a> structural pattern.

## Keyboard navigation
All ::scroll-marker elements are sequential tab stops, natively acting like a list of standard anchor links.

## Unaffected targets
The originating elements do not get forced into any role, leaving the document's natural semantic structure intact.

## Activation focus management
When a link marker is activated, it sets the sequential focus navigation starting point to the target element (the originating element), and focus is lost from the marker. This mimics the native behavior of clicking a standard internal <a href="#target"> link.

# The tabs mode
This mode is designed to natively replicate the Tabs Pattern and serves as the interactive foundation for the Tabbed Carousel Pattern.

## Semantic roles
The ::scroll-marker-group is implicitly assigned the tablist role, ::scroll-marker elements act as tab roles, and their originating elements get the tabpanel role. This mirrors the required WAI-ARIA Tabs structure.

## Keyboard navigation (roving tabindex)
It follows the complex keyboard interactions outlined in standard practices. Only the active ::scroll-marker acts as a tab stop. Users use arrow keys to navigate the focusgroup (switching between markers), preventing the "tab trap" of having to tab through 20 carousel dots.

## Focus scope management
The marker acts as a focus navigation scope owner. Pressing Tab from the active marker moves focus directly into the active tabpanel content, matching the specification for tabbed interfaces.

## Tree pruning
Content from inactive tabs is explicitly hidden from the accessibility tree. This mimics the expected behavior of aria-hidden="true" or inert on inactive tab panels, saving developers from manually scripting state changes.

## Activation focus
When a marker is activated, focus is retained on the marker, which is exactly how standard tabs operate.

## Ecosystem Status

- **Momentum:** High (250 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** CSS scroll-marker-group modes ('links' and 'tabs') land enabled by default in Chrome 154, refining the CSS Overflow Module Level 5 carousel specification to properly map to WAI-ARIA navigation and tablist patterns. By splitting behavior into distinct modes, Chromium automates focus scoping, roving tabindex, and accessibility tree pruning without requiring heavy JavaScript orchestration. However, full multi-engine consensus is still developing as Safari and Firefox weigh accessibility and architectural considerations.

### Recommendations
- Actionable Advice: Adopt CSS scroll-marker-group modes as a progressive enhancement or for internal Chromium-targeted environments, but retain semantic HTML/JavaScript carousel and tab patterns in production to ensure universal accessibility across non-supporting engines.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @danielsakhapov: "FYI, we've update scroll-marker-group property to support modes to better comply with WCAG patterns - https://chromestatus.com/feature/510968530167398..."
- Standards Activity (Mozilla): Latest discussion from @jcsteh: "I have some significant accessibility concerns regarding CSS inert specifically. See https://github.com/w3ctag/design-reviews/issues/1055#issuecomment..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Overflow Navigation Controls](https://github.com/WebKit/standards-positions/issues/447) [open]
- **Mozilla:** [CSS Overflow Navigation Controls](https://github.com/mozilla/standards-positions/issues/1161) [open]

## 📰 Ecosystem Blogs & Articles

- [RE: [blink-dev] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)*
  > RE: [blink-dev] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) RE: [blink-dev] Intent to Ship: CSS scroll-marker-group modes 'Daniel Clark' via blink-dev Mon, 20 Jul 2026 09:49:59 -0700 It's stated here that "link...
- [[blink-dev] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS scroll-marker-group modes Chromestatus Wed, 15 Jul 2026 12:40:07 -0700 Contact emails [email&#160;protected] Explainer htt...
- [Common Issues and Workarounds for CSS scroll-marker-group](https://runebook.dev/en/docs/css/scroll-marker-group) *(runebook.dev)*
  > Common Issues and Workarounds for CSS scroll-marker-group Common Issues and Workarounds for CSS scroll-marker-group 2025-09-09 This property is designed to allow developers to style the scroll markers of an element, which are visual indicators for sc...
- [How To Create a Scroll Indicator](https://www.w3schools.com/howto/howto_js_scroll_indicator.asp) *(w3schools.com)*
  > 2 Column Layout 3 Column Layout 4 Column Layout Expanding Grid List Grid View Mixed Column Layout Column Cards Zig Zag Layout Blog Layout · Google Charts Google Fonts Google Font Pairings Google Set up Analytics · Convert Weight Convert Temperature C...
- [CSS scroll-behavior property](https://www.w3schools.com/cssref/pr_scroll-behavior.php) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java and XML.
- [How To Create a Custom Scrollbar](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp) *(w3schools.com)*
  > 2 Column Layout 3 Column Layout 4 Column Layout Expanding Grid List Grid View Mixed Column Layout Column Cards Zig Zag Layout Blog Layout · Google Charts Google Fonts Google Font Pairings Google Set up Analytics · Convert Weight Convert Temperature C...
- [A guide to Scroll-driven Animations with just CSS | WebKit](https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css) *(webkit.org · 2025-07-07T23:17:11)*
  > First, let’s break down the components of a scroll-driven animation. ... What’s great about these three parts is that two out of the three are probably already familiar to you. The first, the target, can be whatever you want to move on your page, sty...
- [CSS scroll-margin property](https://www.w3schools.com/cssref/css_pr_scroll-margin.php) *(w3schools.com)*
  > W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many, many more.
- [CSS Scroll Effects: 50 Interactive Animations to Try](https://prismic.io/blog/css-scroll-effects) *(prismic.io · 2025-03-13T00:00:00)*
  > It allows you adjust the duration, delay, offset, easings, and repeat of your scroll effects. Explore the following resources to learn more about Tailwind CSS: 📖 Tailwind CSS Animations: Tutorial and 40+ Examples 📖 Tailwind CSS vs. Bootstrap: Which...
- [scroll-marker-group | CSS-Tricks](https://css-tricks.com/almanac/properties/s/scroll-marker-group) *(css-tricks.com · 2025-05-28T15:25:53)*
  > In the carousel example below, the ::scroll-marker-group pseudo-element uses anchor positioning to position itself relative to the scroll container, which is probably the best way to go about it, but any method of alignment should work fine. And sinc...
- [::scroll-marker | CSS-Tricks](https://css-tricks.com/almanac/pseudo-selectors/s/scroll-marker) *(css-tricks.com · 2025-05-06T12:38:13)*
  > Since the scroll container has five children, five scroll markers will be created inside a ::scroll-marker-group pseudo-element placed ::after the scroll container, thanks to the scroll-marker-group: after declaration.
- [Microsoft Edge 152 web platform release notes (Aug. 2026) - Microsoft Edge Developer documentation | Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > <strong>The CSSPseudoElement interface now supports the ::backdrop, ::scroll-marker, and ::view-transitions pseudo-elements, in addition to the ::after, ::before, and ::marker pseudo-elements</strong>.
- [Chrome 152 | Release notes | Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > Support for CSSPseudoElement, ... intersection logic to determine where the click occurred. ::scroll-marker: <strong>Used to collect click statistics</strong>....
- [css - Content showing in statusbar when scrolling in PWA - Stack Overflow](https://stackoverflow.com/questions/61735881/content-showing-in-statusbar-when-scrolling-in-pwa) *(stackoverflow.com)*
  > Thanks Max Di Campo. This solution worked for me. In my PWA, the body content was showing behind the status bar when body is scrolled.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [RE: [blink-dev] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > RE: [blink-dev] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) RE: [blink-dev] Intent to Ship: CSS scroll-marker-group modes 'Daniel Clark' via blink-dev Mon, 20 Jul 2026 09:49:59 -0700 It's stated here ...
- [[blink-dev] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > [blink-dev] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS scroll-marker-group modes Chromestatus Wed, 15 Jul 2026 12:40:07 -0700 Contact emails [email&#160;protected] Exp...
- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...
- [Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss](https://github.com/parcel-bundler/lightningcss/issues/1184) *(github.com · 2026-03-16T06:55:52)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [CSS Overflow Navigation Controls · Issue #1161 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1161) *(github.com · 2025-01-09T15:58:35)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > CSS Overflow Navigation Controls · Issue #1161 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload ...
- [Other Spec Review: CSS scroll-axis-lock · Issue #1248 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1248) *(github.com · 2026-07-21T15:52:31)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > Other Spec Review: CSS scroll-axis-lock · Issue #1248 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)*
- [Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss](https://github.com/parcel-bundler/lightningcss/issues/1184) *(github.com)*
- [CSS Overflow Navigation Controls · Issue #1161 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1161) *(github.com)*
- [Other Spec Review: CSS scroll-axis-lock · Issue #1248 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1248) *(github.com)*
- [`scroll-marker-group` CSS property flagged as 'Unknown property' · Issue #120 · microsoft/vscode-custom-data](https://github.com/microsoft/vscode-custom-data/issues/120) *(github.com)*
- [scroll-marker-group CSS property - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-marker-group) *(developer.mozilla.org)*
- [scroll-marker-group CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker-group) *(developer.mozilla.org)*
- [scroll-marker CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker) *(developer.mozilla.org)*
- [::scroll-marker-group CSS pseudo-element - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker-group) *(developer.mozilla.org)*
- [scroll-target-group CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-target-group) *(developer.mozilla.org)*
- [::scroll-marker CSS pseudo-element - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 37 result(s) found across 8 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/5109685301673984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"drafts.csswg.org/css-overflow-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"CSS scroll-marker-group modes" API` — *Core feature API query* (2 returned)
  - `"CSS scroll-marker-group modes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"scroll-marker-group" OR ":scroll-marker-group" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS scroll-marker-group modes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS scroll-marker-group modes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

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
