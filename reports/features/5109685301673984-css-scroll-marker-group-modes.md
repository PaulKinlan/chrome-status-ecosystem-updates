# CSS scroll-marker-group modes

> **Report Week:** 2026-W36 | **Milestone:** Chrome 154 | **Category:** Enabled by default

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

- **Momentum:** High (340 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** CSS `scroll-marker-group` modes (`links` and `tabs`) extend the CSS Overflow Module Level 5 specification to provide declarative, built-in WAI-ARIA roles and keyboard focus management for carousels and tabbed interfaces. While Chromium has pushed implementation to default enablement to simplify accessible UI construction, the feature remains experimental without Baseline indexing or implementation in Gecko and WebKit. Cross-engine consensus continues to evolve as the working group refines accessibility semantics and focus scope rules.

### Recommendations
- Actionable Advice: Treat `scroll-marker-group` modes as an emerging progressive enhancement or evaluate them in Chromium canary/previews. For production multi-browser environments, continue relying on established, accessible JavaScript-driven tabs and carousel patterns until full cross-browser interoperability is achieved.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @danielsakhapov: "FYI, we've update scroll-marker-group property to support modes to better comply with WCAG patterns - https://chromestatus.com/feature/510968530167398..."
- Standards Activity (Mozilla): Latest discussion from @jcsteh: "I have some significant accessibility concerns regarding CSS inert specifically. See https://github.com/w3ctag/design-reviews/issues/1055#issuecomment..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Overflow Navigation Controls](https://github.com/WebKit/standards-positions/issues/447) [open]
- **Mozilla:** [CSS Overflow Navigation Controls](https://github.com/mozilla/standards-positions/issues/1161) [open]

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGZahzkoW6kwEjiICvJWaocIjZS7Yvb7rRdan5lKUj8q8FlPc3xUpwqUoiHtm5Bh4pv2R3U7qvigG0nZBSpsqrjR-E9Uq14d_RYmhgJDN5zNJhFp-eYHNIFg6iDLmbon9hqYw20xjirHKCs-ZaVhty4qKN4gVc_vZXxgISm3A==) *(vertexaisearch.cloud.google.com)*
  > Description of the new scorll-marker-group modes for ARIAWG · GitHub Skip to content --> Search Gists Search Gists Sign in Sign up You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Relo...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGU7ohwsecv8Zhtc1IXK31oUDRzWFRv4R2hdn2ZTENFiGnzB9IKqjLaQlMyjbVUogyeh9jsy7f5TSE5U_Y0fT2oNBTJGPGlmbloQH6sdYgxpFkZEdQ-6XpEx7RQeN4XJzcL4IUEWoicMx0bVA==) *(vertexaisearch.cloud.google.com)*
  > Make accessible carousels | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษ...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGGESYsHZhvBIvmBcC8ULC5VHnQXez-5-hPVms1UiqFUXzwDqXtxeeuU2hqmnYnXi35Vcz0YV4URZ-rrB8cRw1SRljmkGleYymS9XD8lD52t72mI9nm2WgR0ZNbGoYsApEIRrklhkix) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQETyplQvUSFe05gXS-94GOfy4Wub7SfYTJQMUD7TCP6IdTaiH-wR43qLtlizK5VL1HYlHy5bIqZa6kKFq7ez2RgoRB9bJrvpUkYBa7aaMlM8TTIuuqi3-PoL8h9XN1L8yAvxbpLxrRE3yEEQCaTLidCH3t9IVuGe2VU) *(vertexaisearch.cloud.google.com)*
  > Scroll marker group type Scroll marker group type By setting the scroll-marker-group type you can switch between tabs and links. The two examples below show use cases where you would want to use one or the other. Tabs Introduction Slides should follo...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFcdleBJCEQ2rf1E0lBq96sPxrQKq193jYHTbHRDecUSr62sYA3sofs9DuM1RGdFwUX-UuOoD3XaR6_52Uvk4eKGjVbSgh29sOxwZW1up5UTzeQ43fsUhcZSs8_I8PMODcnSMO21OQ=) *(vertexaisearch.cloud.google.com)*
  > [css-overflow-5] Discrete versus navigation scroll marker mode · Issue #12122 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or windo...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQETQib8ZlX3PGRKAp1VXrjQCVSWqz_X73E6hyGIx3bz3zBkiD6uWLsivnEhDgDjiQy-PxOf5KBMzTzs3zAUZyGjDlRkRE3MkkpGmibJoVh3_kBcONtHNLKFxvoxJP4uDFoArqtdsMZR1DhR7RfM7Nq9TjgCGmavUAAChFRYjjoKi6RucYz5Pq1mZiAivtF38w==) *(vertexaisearch.cloud.google.com)*
  > scroll-marker-group CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties scroll-marker-group Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 s...
- [sarasoueidan.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFYT1K-FFbP50bPtdxmolpa28ujwVKlrEvg5CFldU2Y7fq4N3E0BnEWVKJngRHSXOBxFlW3jGY5YKgqtsI1LDcgkRKpumB1jzDlmOfkNBXROaenh0YS_vjY_Tz_8l-dj3OGsBxQGEZkLbt4liGmEKJ6Syai3Q==) *(vertexaisearch.cloud.google.com)*
  > Are &#39;CSS Carousels&#39; accessible? would also go here but I’ve got it already defined in the Webmanifest file. --> Skip to main content This website is currently in the process of being refactored and redesigned. So if anything looks broken, or ...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEEj2Nv7U_N-x-k8Pct3ZLRoENYPbppeq4TYXotQqwozg-hZOHeOp1bifZqBy9joI0OGd-feMJoMuyb-ughJRrYVA_AXDVamCnqIGVcUtHHx_RcjivTUSamIO8mTFn8lubG4IxwgZChsQthQ_0H7M7CyP6lCmMbbKrgykjv) *(vertexaisearch.cloud.google.com)*
  > ::scroll-marker-group | CSS-Tricks Skip to main content CSS-Tricks Since 2007 CSS Almanac &rarr; Pseudo-Selectors &rarr; S &rarr; ::scroll-marker-group ::scroll-marker-group Daniel Schwarz on May 28, 2025 Experimental: Check browser support before us...
- [dandenney.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEPfKKrl2tijvpqHUV0fMuz2QBrwEoTt4ldm-EmeueuXEWe0AaIaLkKMy8q4f9WpWplWQDNFFltOzncQkL38eT3vmBMAlw5NkdRwg8W2Vnl0SRX80m01D3i9MNF4s4DnX2XioV0ymSN9KL_J9jqbvW4uyXgFuMzukatfEma9FjRld-O) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The enhancement of the **`scroll-marker-group`** property in **CSS Overflow Module Level 5** directly addresses long-standing accessibility and focus-management challenges in native CSS carousels and scrollspies. By adding expl
- [una.im](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHptca-c7UzvPxr45mcCA90dgInVBVjGo3VMvP-vO55YvWbZ-xFwAI34sXG9RaVst9x6_MQ4fJ2xVrouOya-DIpPHqhCuqS7oIhqah5rfdI86BZ3-emUS0I) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The enhancement of the **`scroll-marker-group`** property in **CSS Overflow Module Level 5** directly addresses long-standing accessibility and focus-management challenges in native CSS carousels and scrollspies. By adding expl
- [RE: [blink-dev] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)*
  > Thanks, Dan From: [email protected] ... modes Contact emails [email protected]&lt;mailto:[email protected]&gt; Explainer https://<strong>gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3</strong> Specification https://drafts.csswg.org/c...
- [[blink-dev] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)*
  > Explainer https://<strong>gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3</strong> Specification https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes Summary The scroll-marker-group property is enhaced to support modes: 1) &#x...
- [Common Issues and Workarounds for CSS scroll-marker-group](https://runebook.dev/en/docs/css/scroll-marker-group) *(runebook.dev)*
  > Imagine a long article with different sections; <strong>scroll-marker-group would allow you to create and style a visual marker in the scrollbar itself to show where a specific heading is</strong>.
- [How To Create a Scroll Indicator](https://www.w3schools.com/howto/howto_js_scroll_indicator.asp) *(w3schools.com)*
  > 2 Column Layout 3 Column Layout 4 Column Layout Expanding Grid List Grid View Mixed Column Layout Column Cards Zig Zag Layout Blog Layout · Google Charts Google Fonts Google Font Pairings Google Set up Analytics · Convert Weight Convert Temperature C...
- [CSS scroll-behavior property](https://www.w3schools.com/cssref/pr_scroll-behavior.php) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java and XML.
- [How To Create a Custom Scrollbar](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp) *(w3schools.com)*
  > 2 Column Layout 3 Column Layout 4 Column Layout Expanding Grid List Grid View Mixed Column Layout Column Cards Zig Zag Layout Blog Layout · Google Charts Google Fonts Google Font Pairings Google Set up Analytics · Convert Weight Convert Temperature C...
- [CSS scroll-margin property](https://www.w3schools.com/cssref/css_pr_scroll-margin.php) *(w3schools.com)*
  > W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many, many more.
- [CSS Scroll Effects: 50 Interactive Animations to Try](https://prismic.io/blog/css-scroll-effects) *(prismic.io · 2025-03-13T00:00:00)*
  > It allows you adjust the duration, delay, offset, easings, and repeat of your scroll effects. Explore the following resources to learn more about Tailwind CSS: 📖 Tailwind CSS Animations: Tutorial and 40+ Examples 📖 Tailwind CSS vs. Bootstrap: Which...
- [Scrolling Designs: 8 Patterns and When to Use Each (2026) | Lovable](https://lovable.dev/guides/scrolling-designs-patterns-when-to-use) *(lovable.dev · 2026-02-19T00:00:00)*
  > The approach <strong>uses CSS properties like scroll-snap-type: y mandatory on the container and scroll-snap-align: start on child elements, with no JavaScript required for basic functionality</strong>—making it highly accessible for non-technical bu...
- [scroll-marker-group | CSS-Tricks](https://css-tricks.com/almanac/properties/s/scroll-marker-group) *(css-tricks.com · 2025-05-28T15:25:53)*
  > In the carousel example below, the ::scroll-marker-group pseudo-element uses anchor positioning to position itself relative to the scroll container, which is probably the best way to go about it, but any method of alignment should work fine. And sinc...
- [Carousels with CSS | Blog | Chrome for Developers](https://developer.chrome.com/blog/carousels-with-css) *(developer.chrome.com · 2025-03-20T00:00:00)*
  > <strong>The containing element of the markers is called a ::scroll-marker-group and it is created as a sibling of the scroller, just like the scroll buttons</strong>. This container can be styled and placed wherever you need.
- [::scroll-marker | CSS-Tricks](https://css-tricks.com/almanac/pseudo-selectors/s/scroll-marker) *(css-tricks.com · 2025-05-06T12:38:13)*
  > Since the scroll container has five children, five scroll markers will be created inside a ::scroll-marker-group pseudo-element placed ::after the scroll container, thanks to the scroll-marker-group: after declaration.
- [Chrome 152 | Release notes | Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T16:14:52)*
  > Support for CSSPseudoElement, ... intersection logic to determine where the click occurred. ::scroll-marker: <strong>Used to collect click statistics</strong>....
- [PWAs Power Tips － firt.dev](https://firt.dev/pwa-design-tips) *(firt.dev)*
  > While some modern browsers will accept muted mp4 files in an image, a PWA should have a fallback using &lt;video muted -webkit-plays-inline autoplay&gt; for the animation. After the browser download and parse all your HTML, CSS and JavaScript the nex...
- [Take control of your scroll - customizing pull-to-refresh and overflow effects | Blog | Chrome for Developers](https://developer.chrome.com/blog/overscroll-behavior) *(developer.chrome.com · 2017-11-14T00:00:00)*
  > <strong>The CSS overscroll-behavior property allows developers to override the browser&#x27;s default overflow scroll behavior when reaching the top/bottom of content</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [RE: [blink-dev] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > Thanks, Dan From: [email protected] ... modes Contact emails [email protected]&lt;mailto:[email protected]&gt; Explainer https://<strong>gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3</strong> Specification https://drafts.c...
- [[blink-dev] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > Explainer https://<strong>gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3</strong> Specification https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes Summary The scroll-marker-group property is enhaced to support mod...
- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > &lt;!-- Abstract: <strong>This module contains the features of CSS relating to new mechanisms of overflow handling in visual media</strong> (e.g., screen or paper).  In interactive media, it describes features that allow the overflow from a...
- [Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss](https://github.com/parcel-bundler/lightningcss/issues/1184) *(github.com · 2026-03-16T06:55:52)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > Support CSS Overflow Module Level 5#1184 · Feature · Copy link · yisibl · opened · on Mar 16, 2026 · Issue body actions · https://<strong>drafts.csswg.org/css-overflow-5</strong> · scroll-marker-group · ::scroll-marker-group · ::scroll-mark...
- [CSS Overflow Navigation Controls · Issue #1161 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1161) *(github.com · 2025-01-09T15:58:35)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > Request for Mozilla Position on an Emerging Web Specification Specification title: CSS Overflow Navigation Controls Specification or proposal URL (if available): https://<strong>drafts.csswg.org/css-overflow-5</strong>/#scroll-navigation Ex...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)*
- [Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss](https://github.com/parcel-bundler/lightningcss/issues/1184) *(github.com)*
- [CSS Overflow Navigation Controls · Issue #1161 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1161) *(github.com)*
- [`scroll-marker-group` CSS property flagged as 'Unknown property' · Issue #120 · microsoft/vscode-custom-data](https://github.com/microsoft/vscode-custom-data/issues/120) *(github.com)*
- [scroll-marker-group CSS property - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-marker-group) *(developer.mozilla.org)*
- [scroll-marker-group CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker-group) *(developer.mozilla.org)*
- [scroll-marker CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker) *(developer.mozilla.org)*
- [::scroll-marker-group CSS pseudo-element - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker-group) *(developer.mozilla.org)*
- [::scroll-marker CSS pseudo-element - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 29 result(s) found across 7 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/5109685301673984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"drafts.csswg.org/css-overflow-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"CSS scroll-marker-group modes" API` — *Core feature API query* (2 returned)
  - `"CSS scroll-marker-group modes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"scroll-marker-group" OR ":scroll-marker-group" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS scroll-marker-group modes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 10 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 8 result(s) found — **25 verified relevant**
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
