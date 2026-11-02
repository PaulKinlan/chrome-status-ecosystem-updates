# Scroll snap for single-axis scroll containers

> **Report Week:** 2026-W45 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

This feature lets a single-axis scroll container (for example, one with overflow: auto clip) handle scroll snap area propagation and alignment separately for each axis.  Single-axis scroll containers are now supported (https://chromestatus.com/feature/5067363861004288). Without this feature, such a container captures a snap area on both axes, even the axis it can't scroll. The snap area then can't align on that axis.  With this feature, if a snap area sets alignment on both axes, the single-axis container handles only the axis it scrolls. The other axis goes up to the nearest ancestor scroll container that scrolls in that direction.

### Motivation

This is part of the single-axis scroll container feature (https://github.com/explainers-by-googlers/single-axis-scroll-containers) to align the scroll snap behavior with the sticky header in a single-axis scroll container.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 100 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Scroll snap for single-axis scroll containers resolves a longstanding layout limitation where a single-axis scroller (such as one using overflow: auto clip) captured and suppressed snap points on its non-scrollable axis. Chromium has enabled this behavior by default starting in Chrome 158 following formal resolutions within the W3C CSS Working Group. Cross-engine consensus is strong, establishing an inheritance model where unconsumed snap axes cleanly propagate to ancestor scroll containers.

### Recommendations
- Actionable Advice: Treat per-axis scroll snap inheritance as a progressive enhancement today, taking advantage of smoother nesting in Chromium 158 while avoiding critical dependencies on outer-axis propagation until Gecko and WebKit ship support. Audit existing nested and sticky components in Firefox and Safari to ensure fallback snapping remains usable without trapped alignment axes.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @hiikezoe: "Looks basically reasonable to me.    That's said, it seems that the spec change hasn't yet clarified mixed up writing mode cases. From a sentence of t..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/712) [open]
- **Mozilla:** [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1445) [open]

## Web-features Group

*group-level data: web-features [`scroll-snap`](https://webstatus.dev/features/scroll-snap), shared with 4 other ChromeStatus features*

- Share of tests passing in the web-features group `scroll-snap` on [wpt.fyi](https://wpt.fyi/results?q=feature:scroll-snap) (via webstatus.dev) — stable: Chrome 90.4% · Edge 88.8% · Firefox 83.7% · Safari 70.2%; experimental: Chrome 97.2% · Edge 94.9% · Firefox 83.7% · Safari 76.4%
- **Chrome usage:** 0.21% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/59))

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug 2026 14:06:10 -0700 Contact e...
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > &lt;strong&gt;Single-axis scroll containers are now supported&lt;/strong&gt; (https://chromestatus.com/feature/5067363861004288). Without this feature, such a container captures a snap area on both axes, even the axis it can&#x27;t scroll.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-snap`)*
  > \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug 2026 14:06:10 -0700...

## 📚 Platform Documentation & Specifications

- [Other Spec Review: Scroll snap for single-axis scroll container · Issue #1266 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1266) *(github.com)*
- [github.com](https://github.com/mozilla/standards-positions/issues/1445) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/712) *(github.com)*
- [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers #14018 by lcdavid94 · Pull Request #14354 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/pull/14354) *(github.com)*
- [\[css-scroll-snap\] Clarify snapping behavior with multiple single-axis scrollers · Issue #14018 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/14018) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 54 result(s) found across 12 planned queries — **5 verified relevant**
  - `"chromestatus.com/feature/5086608215900160" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/explainers-by-googlers/single-axis-scroll-snap" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"drafts.csswg.org/css-scroll-snap-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Scroll snap for single-axis scroll containers" API` — *Core feature API query* (3 returned)
  - `"Scroll snap for single-axis scroll containers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Scroll snap for single-axis scroll containers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (3 returned)
  - `"Scroll snap for single-axis scroll containers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"single-axis scroll" "scroll-snap" (tutorial OR guide OR "how to")` — *Finds developer guides and articles explaining how scroll snap works in single-axis scroll containers.* (8 returned)
  - `"scroll-snap-type" ("overflow: auto clip" OR "overflow: clip auto") "scroll-snap-align"` — *Locates real-world CSS code examples demonstrating single-axis overflow paired with scroll snap alignment.* (8 returned)
  - `"single-axis scroll container" "scroll snap" site:chromestatus.com OR "Intent to Ship"` — *Tracks platform feature status announcements, shipping milestones, and browser implementation updates.* (2 returned)
  - `site:github.com/w3c/csswg-drafts "single-axis" "scroll-snap"` — *Discovers W3C CSS Working Group discussions, spec issue debates, and consensus around single-axis snap behavior.* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "scroll-snap", shared with 4 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "scroll-snap": Chrome 90.4% passing (stable)*
- **Sources cited by the AI synthesis:** 3 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5086608215900160)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5086608215900160)
- [Specification](https://drafts.csswg.org/css-scroll-snap-1)
- [Chromium Tracking Bug](http://crbug.com/473576119)
