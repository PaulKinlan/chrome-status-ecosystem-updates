# CSS scroll-marker-group modes

> **Report Week:** 2026-W45 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The scroll-marker-group property is enhaced to support modes: 1) 'links' - The generated ::scroll-marker-group operates in "links" mode, functioning like a navigation list. This is the default mode if omitted. 2) 'tabs' - The generated ::scroll-marker-group operates in "tabs" mode, functioning like a tablist.  Each mode changes focus order and accessibility behavior of ::scroll-marker-group and ::scroll-markers, following WAI-ARIA patterns.  More details: # The links mode (default) This mode is designed to mimic standard Navigation Landmarks combined with fragment anchors.  ## Semantic roles The ::scroll-marker-group takes on the navigation role, and the ::scroll-marker elements take on the link role. This perfectly maps to the &lt;nav&gt; + &lt;a&gt; structural pattern.  ## Keyboard navigation All ::scroll-marker elements are sequential tab stops, natively acting like a list of standard anchor links.  ## Unaffected targets The originating elements do not get forced into any role, leaving the document's natural semantic structure intact.  ## Activation focus management When a link marker is activated, it sets the sequential focus navigation starting point to the target element (the originating element), and focus is lost from the marker. This mimics the native behavior of clicking a standard internal &lt;a href="#target"&gt; link.  # The tabs mode This mode is designed to natively replicate the Tabs Pattern and serves as the interactive foundation for the Tabbed Carousel Pattern.  ## Semantic roles The ::scroll-marker-group is implicitly assigned the tablist role, ::scroll-marker elements act as tab roles, and their originating elements get the tabpanel role. This mirrors the required WAI-ARIA Tabs structure.  ## Keyboard navigation (roving tabindex) It follows the complex keyboard interactions outlined in standard practices. Only the active ::scroll-marker acts as a tab stop. Users use arrow keys to navigate the focusgroup (switching between markers), preventing the "tab trap" of having to tab through 20 carousel dots.  ## Focus scope management The marker acts as a focus navigation scope owner. Pressing Tab from the active marker moves focus directly into the active tabpanel content, matching the specification for tabbed interfaces.  ## Tree pruning Content from inactive tabs is explicitly hidden from the accessibility tree. This mimics the expected behavior of aria-hidden="true" or inert on inactive tab panels, saving developers from manually scripting state changes.  ## Activation focus When a marker is activated, focus is retained on the marker, which is exactly how standard tabs operate.

## Ecosystem Status

- **Momentum:** Emerging (+10 points since 2026-10-12; footprint 155 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** CSS scroll-marker-group modes in CSS Overflow Level 5 introduce declarative 'links' and 'tabs' keywords to control the focus order and WAI-ARIA semantic roles generated for scroll navigation markers. Chromium has taken the lead by shipping the feature by default, aiming to natively solve common carousel keyboard traps and semantic discrepancies. However, the feature currently lacks cross-browser parity, as neither Gecko nor WebKit has finalized implementation.

### Recommendations
- Actionable Advice: Teams should treat CSS scroll-marker-group modes as an experimental, progressive enhancement rather than a primary production architecture for critical UI. Use feature queries or fallback script-based carousel/tab patterns to ensure full keyboard navigation and screen reader support across Safari and Firefox.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Some issues that seem pretty fundamental: - https://github.com/w3c/csswg-drafts/issues/12240 - https://github.com/w3c/csswg-drafts/issues/12269..."
- Standards Activity (Mozilla): Latest discussion from @jcsteh: "I have some significant accessibility concerns regarding CSS inert specifically. See https://github.com/w3ctag/design-reviews/issues/1055#issuecomment..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Overflow Navigation Controls](https://github.com/WebKit/standards-positions/issues/447) [open]
- **Mozilla:** [CSS Overflow Navigation Controls](https://github.com/mozilla/standards-positions/issues/1161) [open]

## 📰 Ecosystem Blogs & Articles

- [github.io](https://flackr.github.io/web-demos/css-overflow/scroll-marker-type) *(flackr.github.io)*
  > \*\*\`links\` (default):\*\* Configures \`::scroll-marker-group\` to act like a \`&lt;nav&gt;\` landmark with internal fragment anchor links All markers are sequential Tab stops
- [smashingmagazine.com](https://www.smashingmagazine.com/2025/12/state-logic-native-power-css-wrapped-2025) *(smashingmagazine.com)*
  > \*\*Smashing Magazine: \*“State, Logic, And Native Power: CSS Wrapped”\*\*\* The author highlighted the transition away from fragile JavaScript carousel libraries (like Swiper or Slick) while acknowledging that native, spec-compliant keyboard focus handlin...
- [RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)*
  > RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes 'Daniel Clark' via blink-dev Mon, 20 Jul 2026 09:49:59 -0700 It's stated here that "link...
- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Chromestatus Wed, 15 Jul 2026 12:40:07 -0700 Contact emails \[email&#160;protected\] Explainer htt...
- [New in Chrome 154  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > &lt;strong&gt;/\* Links mode (default) \*/ scroll-marker-group: after links; /\* Tabs mode \*/ scroll-marker-group: before tabs;&lt;/strong&gt; By default, an element&#x27;s text decoration (such as an underline, overline, or line-through) is the same length as the ...
- [CSS Scroll Markers: Building Accessible Tabs in Chrome \| Alexander Burgos](https://alexanderburgos.netlify.app/blog/css-scroll-markers-tabs) *(alexanderburgos.netlify.app · 2026-09-27T11:43:43)*
  > Now, we layer on the CSS to instantiate the scroll container and instruct the browser to generate the tabbed controls automatically. Notice how we target the pseudo-elements directly for layout and decoration. .carousel { display: flex; overflow-x: a...
- [Re: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg17056.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Daniil Sakhapov Fri, 24 Jul 2026 03:48:51 -0700 1) Current usage is extermly low/close t...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com · 2026-09-22T00:00:00)*
  > &#x27;links&#x27; - &lt;strong&gt;The generated ::scroll-marker-group operates in &quot;links&quot; mode, functioning like a navigation list&lt;/strong&gt;. This is the default mode if omitted. &#x27;tabs&#x27; - The generated ::scroll-marker-group operates in &...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes 'Daniel Clark' via blink-dev Mon, 20 Jul 2026 09:49:59 -0700 It's stated here ...
- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Chromestatus Wed, 15 Jul 2026 12:40:07 -0700 Contact emails \[email&#160;protected\] Exp...

## 📚 Platform Documentation & Specifications

- [scroll-marker-group CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-marker-group) *(developer.mozilla.org)*
- [scroll-marker-group CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker-group) *(developer.mozilla.org)*
- [\[css-overflow-5\] Discrete versus navigation scroll marker mode · Issue #12122 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/12122) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 12 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5109685301673984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"drafts.csswg.org/css-overflow-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"CSS scroll-marker-group modes" API` — *Core feature API query* (5 returned)
  - `"CSS scroll-marker-group modes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"scroll-marker-group" OR ":scroll-marker-group" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS scroll-marker-group modes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (5 returned)
  - `"CSS scroll-marker-group modes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"scroll-marker-group" ("tabs" OR "links") (carousel OR tutorial OR guide)` — *Discovers practical guides, articles, and tutorials explaining how to use scroll-marker-group modes for carousels and tabs.* (8 returned)
  - `"scroll-marker-group" ("::scroll-marker-group" OR "::scroll-marker") "tabs" css code` — *Locates developer-oriented CSS code snippets and syntax examples combining pseudo-elements and the tabs mode.* (8 returned)
  - `"scroll-marker-group" ("tabs" OR "links") ("Intent to" OR chromestatus OR "wpt")` — *Tracks browser vendor implementation status, Intent to Ship/Prototype threads, and web-platform-tests.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "scroll-marker-group" ("tabs" OR "links")` — *Finds standards discussions, accessibility debates, and spec evolution within the CSS Working Group issue tracker.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5109685301673984)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5109685301673984)
- [Specification](https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/425931511)
