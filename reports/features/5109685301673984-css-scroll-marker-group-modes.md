# CSS scroll-marker-group modes

> **Report Week:** 2026-W42 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The scroll-marker-group property is enhaced to support modes: 1) 'links' - The generated ::scroll-marker-group operates in "links" mode, functioning like a navigation list. This is the default mode if omitted. 2) 'tabs' - The generated ::scroll-marker-group operates in "tabs" mode, functioning like a tablist.  Each mode changes focus order and accessibility behavior of ::scroll-marker-group and ::scroll-markers, following WAI-ARIA patterns.  More details: # The links mode (default) This mode is designed to mimic standard Navigation Landmarks combined with fragment anchors.  ## Semantic roles The ::scroll-marker-group takes on the navigation role, and the ::scroll-marker elements take on the link role. This perfectly maps to the &lt;nav&gt; + &lt;a&gt; structural pattern.  ## Keyboard navigation All ::scroll-marker elements are sequential tab stops, natively acting like a list of standard anchor links.  ## Unaffected targets The originating elements do not get forced into any role, leaving the document's natural semantic structure intact.  ## Activation focus management When a link marker is activated, it sets the sequential focus navigation starting point to the target element (the originating element), and focus is lost from the marker. This mimics the native behavior of clicking a standard internal &lt;a href="#target"&gt; link.  # The tabs mode This mode is designed to natively replicate the Tabs Pattern and serves as the interactive foundation for the Tabbed Carousel Pattern.  ## Semantic roles The ::scroll-marker-group is implicitly assigned the tablist role, ::scroll-marker elements act as tab roles, and their originating elements get the tabpanel role. This mirrors the required WAI-ARIA Tabs structure.  ## Keyboard navigation (roving tabindex) It follows the complex keyboard interactions outlined in standard practices. Only the active ::scroll-marker acts as a tab stop. Users use arrow keys to navigate the focusgroup (switching between markers), preventing the "tab trap" of having to tab through 20 carousel dots.  ## Focus scope management The marker acts as a focus navigation scope owner. Pressing Tab from the active marker moves focus directly into the active tabpanel content, matching the specification for tabbed interfaces.  ## Tree pruning Content from inactive tabs is explicitly hidden from the accessibility tree. This mimics the expected behavior of aria-hidden="true" or inert on inactive tab panels, saving developers from manually scripting state changes.  ## Activation focus When a marker is activated, focus is retained on the marker, which is exactly how standard tabs operate.

## Ecosystem Status

- **Momentum:** Emerging (footprint 145 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** CSS \`scroll-marker-group\` modes (\`links\` and \`tabs\`), specified under CSS Overflow Module Level 5, shipped enabled by default in Chromium starting with Chrome 154 to provide native, declarative accessibility and focus models for CSS-driven carousels and tabbed interfaces. While Chromium has pushed ahead with implementation, the feature remains absent from Baseline and lacks cross-engine adoption. Multi-engine consensus is still developing, as other browser vendors continue evaluating core accessibility and focus interactions in standards discussions.

### Recommendations
- Actionable Advice: Teams should refrain from replacing established JavaScript-backed tablist and carousel components in production until cross-engine support matures. For progressive enhancements or non-critical interfaces, experiment in Chromium while providing robust fallbacks for unsupported engines.
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

- [mintec.co](https://mintec.co/blog/chrome-154-frame-sizing-carousel-tabs) *(mintec.co)*
  > The \*\*CSS \`scroll-marker-group\` modes\*\* (\`links\` and \`tabs\`), formalized under the \*\*CSS Overflow Module Level 5\*\* specification, shipped in \*\*Chromium (Chrome 154 and Microsoft Edge 154)\*\* Microsoft Edge 154 Web Platform Release Notes \* \*\*Coverage:\*...
- [chrome.com](https://developer.chrome.com/blog/accessible-carousel) *(developer.chrome.com)*
  > \* \*\*Details:\*\* The Chromium team introduced this feature to solve long-standing friction in CSS-only carousels and tabs Historical Context & Ecosystem Feedback (Sara Soueidan & Chrome UI Posts) \* \*\*Background:\*\* Early experiments with CSS carousels (...
- [netlify.app](https://alexanderburgos.netlify.app/blog/css-scroll-markers-tabs) *(alexanderburgos.netlify.app)*
  > Rather than forcing a one-size-fits-all approach, developers can select between two semantic paradigms \*"CSS Scroll Markers: Building Accessible Tabs in Chrome"\* — Alexander Burgos \* \*\*Focus:\*\* Deep-dive tutorial comparing legacy JavaScript tab imple...
- [RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)*
  > RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes 'Daniel Clark' via blink-dev Mon, 20 Jul 2026 09:49:59 -0700 It's stated here that "link...
- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Chromestatus Wed, 15 Jul 2026 12:40:07 -0700 Contact emails \[email&#160;protected\] Explainer htt...
- [New in Chrome 154 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > &lt;strong&gt;/\* Links mode (default) \*/ scroll-marker-group: after links; /\* Tabs mode \*/ scroll-marker-group: before tabs;&lt;/strong&gt; By default, an element&#x27;s text decoration (such as an underline, overline, or line-through) is the same length as the ...
- [Scroll marker group type](https://flackr.github.io/web-demos/css-overflow/scroll-marker-type) *(flackr.github.io)*
  > The focus behaves just as a list of links that occur before the content. In particular: All markers are tab stops. Arrow keys do not move between markers, they scroll the page as usual.
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > &lt;strong&gt;&#x27;links&#x27; - The generated ::scroll-marker-group operates in &quot;links&quot; mode, functioning like a navigation list&lt;/strong&gt;. This is the default mode if omitted. &#x27;tabs&#x27; - The generated ::scroll-marker-group operates in &...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes 'Daniel Clark' via blink-dev Mon, 20 Jul 2026 09:49:59 -0700 It's stated here ...
- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)*
- [\[css-overflow-5\] Discrete versus navigation scroll marker mode · Issue #12122 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12122) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 58 result(s) found across 12 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/5109685301673984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"drafts.csswg.org/css-overflow-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"CSS scroll-marker-group modes" API` — *Core feature API query* (1 returned)
  - `"CSS scroll-marker-group modes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"scroll-marker-group" OR ":scroll-marker-group" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS scroll-marker-group modes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS scroll-marker-group modes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"scroll-marker-group" ("tabs" OR "links") (carousel OR guide OR tutorial)` — *Developer articles, tutorials, and practical walk-throughs demonstrating CSS scroll-marker-group modes for tabs and carousels.* (8 returned)
  - `"scroll-marker-group" ("tabs" OR "links") "::scroll-marker" CSS` — *Code snippets and CSS rule syntax showing how to declare scroll-marker-group modes alongside ::scroll-marker pseudo-elements.* (8 returned)
  - `"scroll-marker-group" ("tabs" OR "links") ("Intent to Ship" OR "Intent to Prototype" OR chromestatus)` — *Browser engine implementation status, Blink intent threads, and browser release milestones.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "scroll-marker-group" ("tabs" OR "links")` — *CSS Working Group issue tracker debates and specification discussions around accessibility semantics and roving tabindex.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 6 result(s) found — **1 verified relevant**
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
