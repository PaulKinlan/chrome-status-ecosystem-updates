# Scroll snap for single-axis scroll containers

> **Report Week:** 2026-W44 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

This feature lets a single-axis scroll container (for example, one with overflow: auto clip) handle scroll snap area propagation and alignment separately for each axis.  Single-axis scroll containers are now supported (https://chromestatus.com/feature/5067363861004288). Without this feature, such a container captures a snap area on both axes, even the axis it can't scroll. The snap area then can't align on that axis.  With this feature, if a snap area sets alignment on both axes, the single-axis container handles only the axis it scrolls. The other axis goes up to the nearest ancestor scroll container that scrolls in that direction.

### Motivation

This is part of the single-axis scroll container feature (https://github.com/explainers-by-googlers/single-axis-scroll-containers) to align the scroll snap behavior with the sticky header in a single-axis scroll container.

## Ecosystem Status

- **Momentum:** Emerging (footprint 150 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** This specification refinement addresses a persistent quirk in CSS Scroll Snap where single-axis scroll containers (such as those using overflow combinations like auto and clip) previously trapped snap alignment on their non-scrollable axis. By allowing unhandled snap axes to bubble to the nearest ancestor scroller, it significantly improves composability for complex grid and sticky-header layouts. With Chrome shipping default support and other engine vendors leaning favorable during standards review, cross-engine alignment is advancing steadily.

### Recommendations
- Actionable Advice: Teams should treat this behavior as a transparent progressive enhancement, testing nested single-axis layouts in Chrome while verifying that fallback browsers still scroll gracefully without snapping failures. Explicitly setting axis-targeted snap alignment values where appropriate can also help prevent unintended multi-axis captures in non-supporting engines.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @hiikezoe: "Looks basically reasonable to me.    That's said, it seems that the spec change hasn't yet clarified mixed up writing mode cases. From a sentence of t..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/712) [open]
- **Mozilla:** [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1445) [open]

## Web-features Group

*group-level data: web-features [`scroll-snap`](https://webstatus.dev/features/scroll-snap), shared with 4 other ChromeStatus features*

- Share of tests passing in the web-features group `scroll-snap` on [wpt.fyi](https://wpt.fyi/results?q=feature:scroll-snap) (via webstatus.dev) — stable: Chrome 91% · Edge 89.3% · Firefox 84.2% · Safari 70.6%; experimental: Chrome 97.2% · Edge 95.5% · Firefox 84.2% · Safari 76.8%
- **Chrome usage:** 0.2% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/59))

## 📰 Ecosystem Blogs & Articles

- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*The Problem:\*\* When an inner element specifies snap alignment for both directions (e.g., \`scroll-snap-align: start start\`), an ancestor scroll container would capture snap areas on \*\*both\*\* axes—even the axis it could not scroll This meant snapping...
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > \*\*The Problem:\*\* When an inner element specifies snap alignment for both directions (e.g., \`scroll-snap-align: start start\`), an ancestor scroll container would capture snap areas on \*\*both\*\* axes—even the axis it could not scroll This meant snapping...
- [Chrome Platform Status](https://polymer10-dot-cr-status.appspot.com/feature/5086608215900160/activity) *(polymer10-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [webkit.org](https://webkit.org/standards-positions) *(webkit.org)*
  > WebKit engineers tracked the single-axis scroll container changes alongside the per-axis scroll snap proposal with generally positive reception, noting that decoupling horizontal and vertical scroll trees reflects actual modern UI component expectati...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug 2026 14:06:10 -0700 Contact e...
- [Ready for developer testing: Single-axis scroll containers \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/single-axis-scroll-containers-ready-for-testing) *(developer.chrome.com)*
  > Ready for developer testing: Single-axis scroll containers \| Blog \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עבר...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5086608215900160`)*
  > \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug 2026 14:06:10 -0700...

## 📚 Platform Documentation & Specifications

- [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers · Issue #1445 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1445) *(github.com)*
- [w3.org](https://lists.w3.org/Archives/Public/public-css-archive/2026Aug/0705.html) *(lists.w3.org)*
- [github.com](https://github.com/WebKit/standards-positions/issues/680) *(github.com)*
- [github.com](https://github.com/web-platform-tests/interop/issues/1438) *(github.com)*
- [Other Spec Review: Scroll snap for single-axis scroll container · Issue #1266 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1266) *(github.com)*
- [\[css-scroll-snap\] Clarify snapping behavior with multiple single-axis scrollers · Issue #14018 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14018) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 46 result(s) found across 12 planned queries — **5 verified relevant**
  - `"chromestatus.com/feature/5086608215900160" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/explainers-by-googlers/single-axis-scroll-snap" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"drafts.csswg.org/css-scroll-snap-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Scroll snap for single-axis scroll containers" API` — *Core feature API query* (3 returned)
  - `"Scroll snap for single-axis scroll containers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Scroll snap for single-axis scroll containers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (2 returned)
  - `"Scroll snap for single-axis scroll containers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"single-axis scroll" "scroll-snap" (tutorial OR guide OR explainer OR overview)` — *Finds developer guides, explainers, and blog articles introducing single-axis scroll containers and scroll snap behavior.* (8 returned)
  - `"scroll-snap-align" ("overflow: auto clip" OR "overflow: clip auto") "scroll-snap-type"` — *Identifies code snippets and CSS examples pairing single-axis overflow definitions with scroll snap properties.* (2 returned)
  - `"single-axis scroll-snap" OR "single-axis scroll containers" (chromestatus OR "Intent to Ship" OR release)` — *Tracks browser adoption, feature status announcements, and browser release notes for Chromium.* (8 returned)
  - `site:github.com/w3c/csswg-drafts/issues "single-axis" "scroll-snap"` — *Surfaces specification discussions, issue threads, and standards group debates regarding cross-axis snap propagation.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 3 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "scroll-snap", shared with 4 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "scroll-snap": Chrome 91% passing (stable)*
- **Sources cited by the AI synthesis:** 5 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 11 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5086608215900160)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5086608215900160)
- [Specification](https://drafts.csswg.org/css-scroll-snap-1)
- [Chromium Tracking Bug](http://crbug.com/473576119)
