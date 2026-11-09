# Use scroll-snap-type: pair to snap to a single element

> **Report Week:** 2026-W46 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

https://github.com/w3c/csswg-drafts/issues/9519  Add a "pair" keyword to scroll-snap-type. If used, when the container scroll snaps to an element on one axis, it should snap to the same element on the other axis. In the existing spec, the "both" keyword allows the scroll container to select snap targets in X and Y axes independently and snap to different targets.

### Motivation

See explainer

## Ecosystem Status

- **Momentum:** Moderate (+70 points since 2026-10-12; footprint 260 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The \`scroll-snap-type: pair\` keyword resolves a longstanding limitation in CSS Scroll Snap Level 1 by requiring 2D scroll containers to snap to the same element along both axes rather than independently mismatching targets. Shipping enabled by default in Chrome 156 and proposed for Interop 2027, the addition enjoys strong cross-engine interest and standard track backing. The feature bridges a significant ergonomic gap for complex 2D viewports like maps, interactive galleries, and canvas-style layouts.

### Recommendations
- Actionable Advice: Teams building 2D panning or map interfaces should adopt \`scroll-snap-type: pair\` via progressive enhancement, providing fallback to standard scroll snap or querying support with \`@supports (scroll-snap-type: pair)\`. Production apps needing strict single-element 2D snapping across all engines should keep lightweight script fallbacks in place until Safari and Firefox implement the keyword.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."
- Standards Activity (Mozilla): Latest discussion from @theres-waldo: "&gt; I think this seems reasonable but I'd like \[@hiikezoe\](https://github.com/hiikezoe) / \[@theres-waldo\](https://github.com/theres-waldo) to take a loo..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/WebKit/standards-positions/issues/716) [closed]
- **Mozilla:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/mozilla/standards-positions/issues/1448) [open]

## Web-features Group

*group-level data: web-features [`scroll-snap`](https://webstatus.dev/features/scroll-snap), shared with 4 other ChromeStatus features*

- Share of tests passing in the web-features group `scroll-snap` on [wpt.fyi](https://wpt.fyi/results?q=feature:scroll-snap) (via webstatus.dev) — stable: Chrome 89.9% · Edge 88.3% · Firefox 83.2% · Safari 70.4%; experimental: Chrome 97.2% · Edge 95% · Firefox 83.2% · Safari 75.4%
- **Chrome usage:** 0.22% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/59))

## 📰 Ecosystem Blogs & Articles

- [chromium.org](https://issues.chromium.org/issues/540413041) *(issues.chromium.org)*
  > To solve this, the CSS Working Group (CSSWG Issue #9519) resolved to introduce the \*\*\`pair\`\*\* keyword to \`scroll-snap-type\` The core discussion addressed developer complaints that 2D scroll snapping was frequently unusable without JavaScript workarou...
- [web.dev](https://web.dev/blog/web-platform-09-2026) *(web.dev)*
  > Chromium officially shipped \`scroll-snap-type: pair\` in \*\*Chrome 156\*\* It was featured alongside a wave of modern scroll and layout improvements, such as single-axis scroll containers (\`overflow: scroll clip\`), the CSS \`random()\` function, and the \`:...
- [appspot.com](https://cr-status.appspot.com/feature/5124378896498688) *(cr-status.appspot.com)*
  > Chromium officially shipped \`scroll-snap-type: pair\` in \*\*Chrome 156\*\*
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com)*
  > It was featured alongside a wave of modern scroll and layout improvements, such as single-axis scroll containers (\`overflow: scroll clip\`), the CSS \`random()\` function, and the \`:navigation-source\` pseudo-class Microsoft highlighted \`scroll-snap-type...
- [caniuse.com](https://caniuse.com/mdn-css_properties_scroll-snap-type_pair) *(caniuse.com)*
  > Ecosystem consensus has generally recognized the omission of paired snapping in CSS Scroll Snap 1 as an ergonomic oversight, though Safari and Firefox have not yet finalized implementations
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > Developer newsletters and web tooling teams highlighted \`scroll-snap-type: pair\` as a major quality-of-life win
- [webdevbriefing.com](https://webdevbriefing.com/new-css-scrolling-web-components) *(webdevbriefing.com)*
  > Developer newsletters and web tooling teams highlighted \`scroll-snap-type: pair\` as a major quality-of-life win
- [appauxin.com](https://appauxin.com/chrome-156-release-date-features) *(appauxin.com)*
  > Developer newsletters and web tooling teams highlighted \`scroll-snap-type: pair\` as a major quality-of-life win Front-end commentators noted that paired 2D scrolling previously required heavy JavaScript scroll listeners or custom touch/pointer event ...
- [\[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17244.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Chromestatus Thu, 20 Aug 2026 13:21:...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Chromestatus Tue, 22 Sep 2026 09:13:43 -0700 C...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17536.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element 'Dan Clark' via blink-dev Wed, 23 Sep ...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17535.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Rick Byers Wed, 23 Sep 2026 08:29:51 -...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17539.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Chris Harrelson Wed, 23 Sep 2026 12:31...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com · 2026-10-20T00:00:00)*
  > &lt;strong&gt;Add a &quot;pair&quot; keyword to scroll-snap-type&lt;/strong&gt;. If used, when the container scroll snaps to an element on one axis, it should snap to the same element on the other axis.
- [Chrome Platform Status](https://chromestatus.com/feature/5124378896498688/activity) *(chromestatus.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17244.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Chromestatus Thu, 20 Aug 2...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Chromestatus Tue, 22 Sep 2026 09:13:...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17536.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element 'Dan Clark' via blink-dev We...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17535.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Rick Byers Wed, 23 Sep 2026 ...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17539.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Chris Harrelson Wed, 23 Sep ...

## 📚 Platform Documentation & Specifications

- [scroll-snap-pair · Issue #4461 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4461) *(github.com)*
- [scroll-snap-type CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-snap-type) *(developer.mozilla.org)*
- [Other Spec Review: Add keyword "pair" to scroll-snap-type for snapping to the same element in X and Y axes · Issue #1271 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1271) *(github.com)*
- [github.com](https://github.com/mozilla/standards-positions/issues/1448) *(github.com)*
- [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element · Issue #716 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/716) *(github.com)*
- [github.com](https://github.com/web-platform-tests/interop/issues/1438) *(github.com)*
- [Explainers by Googlers · GitHub](https://github.com/explainers-by-googlers) *(github.com)*
- [\[css-scroll-snap-1\] Why does scroll-snap-align: both snap in each axis independently? · Issue #9519 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/9519) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 12 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/5124378896498688" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (6 returned)
  - `"github.com/explainers-by-googlers/scroll-snap-type-pair" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"drafts.csswg.org/css-scroll-snap-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" API` — *Core feature API query* (8 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"github.com" OR "scroll-snap-type" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (5 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"scroll-snap-type" "pair" (tutorial OR guide OR explainer OR "css-tricks")` — *Searches for developer guides, tutorials, and explainer articles introducing the scroll-snap-type pair keyword.* (8 returned)
  - `"scroll-snap-type" "pair" ("mandatory" OR "proximity") css` — *Discovers CSS syntax definitions and real-world code snippets combining pair with strictness values.* (8 returned)
  - `"scroll-snap-type" "pair" ("Intent to" OR "Chromium status" OR "WebKit" OR "Firefox")` — *Tracks browser engine implementation milestones, intents to prototype/ship, and cross-browser support.* (8 returned)
  - `"scroll-snap-type" "pair" (site:github.com/w3c/csswg-drafts OR site:github.com/explainers-by-googlers)` — *Finds W3C CSSWG specification debates, issue #9519 discussions, and feedback on the Google explainer repository.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **14 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "scroll-snap", shared with 4 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "scroll-snap": Chrome 89.9% passing (stable)*
- **Sources cited by the AI synthesis:** 6 result(s) found — **6 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 3 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5124378896498688)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5124378896498688)
- [Specification](https://drafts.csswg.org/css-scroll-snap-1)
- [Chromium Tracking Bug](https://crbug.com/542706103)
