# CSS scroll-marker-group modes

> **Report Week:** 2026-W40 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The scroll-marker-group property is enhaced to support modes: 1) 'links' - The generated ::scroll-marker-group operates in "links" mode, functioning like a navigation list. This is the default mode if omitted. 2) 'tabs' - The generated ::scroll-marker-group operates in "tabs" mode, functioning like a tablist.  Each mode changes focus order and accessibility behavior of ::scroll-marker-group and ::scroll-markers, following WAI-ARIA patterns.  More details: # The links mode (default) This mode is designed to mimic standard Navigation Landmarks combined with fragment anchors.  ## Semantic roles The ::scroll-marker-group takes on the navigation role, and the ::scroll-marker elements take on the link role. This perfectly maps to the &lt;nav&gt; + &lt;a&gt; structural pattern.  ## Keyboard navigation All ::scroll-marker elements are sequential tab stops, natively acting like a list of standard anchor links.  ## Unaffected targets The originating elements do not get forced into any role, leaving the document's natural semantic structure intact.  ## Activation focus management When a link marker is activated, it sets the sequential focus navigation starting point to the target element (the originating element), and focus is lost from the marker. This mimics the native behavior of clicking a standard internal &lt;a href="#target"&gt; link.  # The tabs mode This mode is designed to natively replicate the Tabs Pattern and serves as the interactive foundation for the Tabbed Carousel Pattern.  ## Semantic roles The ::scroll-marker-group is implicitly assigned the tablist role, ::scroll-marker elements act as tab roles, and their originating elements get the tabpanel role. This mirrors the required WAI-ARIA Tabs structure.  ## Keyboard navigation (roving tabindex) It follows the complex keyboard interactions outlined in standard practices. Only the active ::scroll-marker acts as a tab stop. Users use arrow keys to navigate the focusgroup (switching between markers), preventing the "tab trap" of having to tab through 20 carousel dots.  ## Focus scope management The marker acts as a focus navigation scope owner. Pressing Tab from the active marker moves focus directly into the active tabpanel content, matching the specification for tabbed interfaces.  ## Tree pruning Content from inactive tabs is explicitly hidden from the accessibility tree. This mimics the expected behavior of aria-hidden="true" or inert on inactive tab panels, saving developers from manually scripting state changes.  ## Activation focus When a marker is activated, focus is retained on the marker, which is exactly how standard tabs operate.

## Ecosystem Status

- **Momentum:** High (275 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Shipped by default in Chrome and Edge 154 under the CSS Overflow Module Level 5 draft, \`scroll-marker-group\` modes introduce declarative \`links\` and \`tabs\` values to map generated scroll markers directly to WAI-ARIA roles and keyboard behaviors. While the enhancement resolves major semantic and focus-management pitfalls inherent to CSS-driven navigation, it remains Chromium-exclusive without cross-vendor consensus. The feature is currently unindexed in Baseline, and formal standardization is still actively debated in the CSSWG.

### Recommendations
- Actionable Advice: Do not rely on \`scroll-marker-group\` modes as an immediate replacement for production tabs or interactive carousels without progressive enhancement or robust JavaScript fallbacks. Web teams should test the interaction models and assistive technology announcements in Chromium browsers today, but hold off on full architectural adoption until multi-engine intent solidifies.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Some issues that seem pretty fundamental: - https://github.com/w3c/csswg-drafts/issues/12240 - https://github.com/w3c/csswg-drafts/issues/12269..."
- Standards Activity (Mozilla): Latest discussion from @jcsteh: "I have some significant accessibility concerns regarding CSS inert specifically. See https://github.com/w3ctag/design-reviews/issues/1055#issuecomment..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [CSS Overflow Navigation Controls](https://github.com/WebKit/standards-positions/issues/447) [open]
- **Mozilla:** [CSS Overflow Navigation Controls](https://github.com/mozilla/standards-positions/issues/1161) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/status/2102804599325528424) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH9LKwyz5H1JcsLfJeRC4JG_5R7pCfvazEJEPTpN4h9BIC8yBPoR2UptwybJX0LQPiDxO_C-o5SPlouyxenfXfayAWt6-ZgFZx9MBpHDTsJX1fOwzebcPnfjS7rvitw) *(vertexaisearch.cloud.google.com)*
  > CSS scroll-marker-group modes && WAI-ARIA patterns · Issue #18 · w3c/css-aam · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...
- [sarasoueidan.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQErosPDpfUa5KL-aVezL1ip420bwcEa-91c-c_G16W9YM5wg2zeogKZq5slEmejF5qq1P0VhPWp45JVKIZgwz2TyyUjj4mH2i3pDkstnURa-5HSt0zIuFFSvirWpmdQBwLXVFk7uYU=) *(vertexaisearch.cloud.google.com)*
  > The introduction of **`links`** and **`tabs`** modes for the **`scroll-marker-group`** property (part of the **CSS Overflow Module Level 5** specification) addresses the accessibility and interaction nuances of CSS-driven carousels, tabs, and scroll
- [dandenney.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFaSFJEOk4BxbiY782ES66ZwGYyWNDtWl3UgrZxVjn0voTKR3TveTxMFwcU6katO5ctRvB3Ash_Sszc1nFL0LGpKaNZA0UruqLRoepSBB4hFPaWyxClqHhOEoDA0o786Kw4WswUwg_onA3VumgnFDebvs0z3ZVXP5QvWKftzjfP_pvV) *(vertexaisearch.cloud.google.com)*
  > The introduction of **`links`** and **`tabs`** modes for the **`scroll-marker-group`** property (part of the **CSS Overflow Module Level 5** specification) addresses the accessibility and interaction nuances of CSS-driven carousels, tabs, and scroll
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFMT7C45ftRmtjLaqCjg5krxv-_jrR9FB69NN09gEEuVacND3VMUKu6Weww27G3eMYme3-LtUkDlIr7qimAmIJuTKHavleA4Y_jeCNX5Nygyms_8EdA8gmT1X_IvPvgiZ18NJ7Mh7IZo0k9p41J5K0fQWQczhm_L780gBGq) *(vertexaisearch.cloud.google.com)*
  > The introduction of **`links`** and **`tabs`** modes for the **`scroll-marker-group`** property (part of the **CSS Overflow Module Level 5** specification) addresses the accessibility and interaction nuances of CSS-driven carousels, tabs, and scroll
- [jpcasabianca.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH74OexOgONn06zv1umdx8X3u3cUoi6vLEroRTv5b8_AeHhiwBB2x2DoFGxZkFhlUXs8e1XRGjUJRQMd9bmHD_TFK-v6yWLGFJDtTbpu8NkwlfmzO14MlKLrU2CALoud5dO1HPsOQFjcFldSjNlDC17Wfo=) *(vertexaisearch.cloud.google.com)*
  > The introduction of **`links`** and **`tabs`** modes for the **`scroll-marker-group`** property (part of the **CSS Overflow Module Level 5** specification) addresses the accessibility and interaction nuances of CSS-driven carousels, tabs, and scroll
- [RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)*
  > Thanks, Dan From: [email protected] ... modes Contact emails [email protected]&lt;mailto:[email protected]&gt; Explainer https://<strong>gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3</strong> Specification https://drafts.csswg.org/c...
- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)*
  > Explainer https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3 Specification <strong>https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes</strong> Summary The scroll-marker-group property is enhaced to support modes: 1) &#x...
- [CSS scroll-marker-group modes](https://chromestatus.com/feature/5109685301673984) *(chromestatus.com · 2026-06-26T00:00:00)*
  > We cannot provide a description for this page right now
- [CSS scroll-behavior property](https://www.w3schools.com/cssref/pr_scroll-behavior.php) *(w3schools.com)*
  > Add a smooth scrolling effect to the document.
- [A guide to Scroll-driven Animations with just CSS \| WebKit](https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css) *(webkit.org · 2025-07-07T23:17:11)*
  > First, let’s break down the components of a scroll-driven animation. ... What’s great about these three parts is that two out of the three are probably already familiar to you. The first, the target, can be whatever you want to move on your page, sty...
- [CSS scroll-margin property](https://www.w3schools.com/cssref/css_pr_scroll-margin.php) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java and XML.
- [How To Create a Custom Scrollbar](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp) *(w3schools.com)*
  > ::-webkit-scrollbar-corner the bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet. ::-webkit-resizer the draggable resizing handle that appears at the bottom corner of some elements. ... Coding fundamentals as bite-siz...
- [scroll-marker-group \| CSS-Tricks](https://css-tricks.com/almanac/properties/s/scroll-marker-group) *(css-tricks.com · 2025-05-28T15:25:53)*
  > The scroll-marker-group CSS property <strong>determines if the ::scroll-marker-group pseudo-element is generated within the scroll container that the property is set on, and where</strong>.
- [CSS-only scrollspy effect using scroll-marker-group and :target-current](https://www.sarasoueidan.com/blog/css-scrollspy) *(sarasoueidan.com · 2025-08-18T00:00:00)*
  > Let’s demonstrate how. In the CSS Carousels article we talked about how the scroll-marker-group property is <strong>used to generate a grouping container for a group of ::scroll-markers</strong>.
- [Carousels with CSS \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/carousels-with-css) *(developer.chrome.com · 2025-03-20T00:00:00)*
  > <strong>The containing element of the markers is called a ::scroll-marker-group and it is created as a sibling of the scroller, just like the scroll buttons</strong>. This container can be styled and placed wherever you need.
- [Intent to Ship: ::scroll-marker and ::scroll-marker-group for Carousel, ::column pseudo element for Carousel and ::scroll-button() pseudo elements](https://groups.google.com/a/chromium.org/g/blink-dev/c/7EQ8-VzPZh0/m/NMyrGCjuAAAJ) *(groups.google.com)*
  > Can you do a triage pass over the open issues and summarize here what you see the web compat risk to be for potentially upcoming spec changes to resolve the issues? Given this is an unpolyfillable CSS feature I assume we don&#x27;t expect much adopti...
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > Support for CSSPseudoElement, ... intersection logic to determine where the click occurred. ::scroll-marker: <strong>Used to collect click statistics</strong>....
- [css - Content showing in statusbar when scrolling in PWA - Stack Overflow](https://stackoverflow.com/questions/61735881/content-showing-in-statusbar-when-scrolling-in-pwa) *(stackoverflow.com)*
  > Thanks Max Di Campo. This solution worked for me. In my PWA, the body content was showing behind the status bar when body is scrolled.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > Thanks, Dan From: [email protected] ... modes Contact emails [email protected]&lt;mailto:[email protected]&gt; Explainer https://<strong>gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3</strong> Specification https://drafts.c...
- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > Explainer https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3 Specification <strong>https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes</strong> Summary The scroll-marker-group property is enhaced to support mod...

## 📚 Platform Documentation & Specifications

- [scroll-marker-group CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-marker-group) *(developer.mozilla.org)*
- [scroll-marker-group CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker-group) *(developer.mozilla.org)*
- [scroll-marker CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker) *(developer.mozilla.org)*
- [::scroll-marker-group CSS pseudo-element - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker-group) *(developer.mozilla.org)*
- [scroll-target-group - CSS - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-target-group) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 36 result(s) found across 8 planned queries — **18 verified relevant**
  - `"chromestatus.com/feature/5109685301673984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"drafts.csswg.org/css-overflow-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"CSS scroll-marker-group modes" API` — *Core feature API query* (2 returned)
  - `"CSS scroll-marker-group modes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"scroll-marker-group" OR ":scroll-marker-group" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS scroll-marker-group modes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS scroll-marker-group modes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 899 item(s) inspected

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
