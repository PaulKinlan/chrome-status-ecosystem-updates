# Use scroll-snap-type: pair to snap to a single element

> **Report Week:** 2026-W42 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

https://github.com/w3c/csswg-drafts/issues/9519  Add a "pair" keyword to scroll-snap-type. If used, when the container scroll snaps to an element on one axis, it should snap to the same element on the other axis. In the existing spec, the "both" keyword allows the scroll container to select snap targets in X and Y axes independently and snap to different targets.

### Motivation

See explainer

## Ecosystem Status

- **Momentum:** Moderate (footprint 190 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The introduction of the pair keyword to scroll-snap-type refines the CSS Scroll Snap Module Level 1 specification by requiring 2D scroll containers to lock onto the same single element across both axes rather than resolving them independently. Chrome is shipping the feature enabled by default in Chrome 156, backed by broad consensus from the W3C CSS Working Group. The addition resolves a long-standing developer pain point for multi-axis interfaces such as 2D panning maps, whiteboards, and canvas viewers without requiring custom JavaScript scroll math.

### Recommendations
- Actionable Advice: Adopt the feature progressively today by layering scroll-snap-type: pair on top of a scroll-snap-type: both fallback or gating it with @supports (scroll-snap-type: pair mandatory) until Gecko and WebKit finish shipping support.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."
- Standards Activity (Mozilla): Latest discussion from @theres-waldo: "&gt; I think this seems reasonable but I'd like \[@hiikezoe\](https://github.com/hiikezoe) / \[@theres-waldo\](https://github.com/theres-waldo) to take a loo..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/WebKit/standards-positions/issues/716) [closed]
- **Mozilla:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/mozilla/standards-positions/issues/1448) [open]

## Web-features Group

*group-level data: web-features [`scroll-snap`](https://webstatus.dev/features/scroll-snap), shared with 4 other ChromeStatus features*

- Share of tests passing in the web-features group `scroll-snap` on [wpt.fyi](https://wpt.fyi/results?q=feature:scroll-snap) (via webstatus.dev) — stable: Chrome 85.3% · Edge 83.6% · Firefox 80.8% · Safari 70.1%; experimental: Chrome 97.2% · Edge 95.5% · Firefox 84.2% · Safari 77.4%
- **Chrome usage:** 0.21% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/59))

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5124378896498688) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > The introduction of the \*\*\`pair\`\*\* keyword (\`scroll-snap-type: pair \[mandatory \| proximity\]\`) resolves \*\*CSSWG Issue #9519\*\* MDN documentation contrasts \`both\` (orthogonal independent snaps) with \`pair\` (joint 2D snap coordinate lock onto a shared DO...
- [appauxin.com](https://appauxin.com/chrome-156-release-date-features) *(appauxin.com)*
  > When \`pair\` is specified, the scroll container is required to lock onto the \*\*same single element across both axes simultaneously\*\*, providing an ergonomic CSS-native solution for 2D snapping without requiring complex JavaScript scroll-offset trackin...
- [web.dev](https://web.dev/blog/web-platform-09-2026?hl=en) *(web.dev)*
  > dev featured \`scroll-snap-type: pair\` in its browser release previews (arriving with Chrome 156), bundling it among major CSS layout and animation enhancements such as single-axis scrolling (\`overflow: scroll clip\`), \`random()\`, and relaxed \`@propert...
- [appspot.com](https://chromiumdash.appspot.com/commit/a216248c97fbbd39bffa5780515af8d50f6d53cb) *(chromiumdash.appspot.com)*
  > \* \*\*Chrome Platform Status (\*Use scroll-snap-type: pair to snap to a single element\*):\*\* Authored and driven by the Chromium layout/scroll team (\`Blink&gt;Scroll\`), the ChromeStatus entry documents the motivation and transitions the feature through Chro...
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > Developer Tools & Blogs (Polypane, AppAuxin, Community Posts) \* \*\*Polypane Experimental Web Features Guide:\*\* Polypane highlighted the feature under its experimental Chromium flags and dev previews, identifying it as a crucial fix for multi-direction...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Chromestatus Tue, 22 Sep 2026 09:13:43 -0700 C...
- [\[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17244.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Chromestatus Thu, 20 Aug 2026 13:21:...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17536.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element 'Dan Clark' via blink-dev Wed, 23 Sep ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [scroll-snap-pair · Issue #4461 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4461) *(github.com · 2026-10-01T21:55:02)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > scroll-snap-pair · Issue #4461 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Chromestatus Tue, 22 Sep 2026 09:13:...
- [\[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17244.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Chromestatus Thu, 20 Aug 2...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17536.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element 'Dan Clark' via blink-dev We...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/w3c/csswg-drafts/issues/9519) *(github.com)*
- [scroll-snap-type CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-snap-type) *(developer.mozilla.org)*
- [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element · Issue #716 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/716) *(github.com)*
- [scroll-snap-pair · Issue #4461 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4461) *(github.com)*
- [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element · Issue #1448 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1448) *(github.com)*
- [Other Spec Review: Add keyword "pair" to scroll-snap-type for snapping to the same element in X and Y axes · Issue #1271 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1271) *(github.com)*
- [Scroll snap to a single element with scroll-snap-type: pair · Issue #1438 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1438) *(github.com)*
- [Explainers by Googlers · GitHub](https://github.com/explainers-by-googlers) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 48 result(s) found across 12 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5124378896498688" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/explainers-by-googlers/scroll-snap-type-pair" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"drafts.csswg.org/css-scroll-snap-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" API` — *Core feature API query* (5 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"github.com" OR "scroll-snap-type" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (2 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"scroll-snap-type: pair" OR "scroll-snap-type: both pair" CSS` — *Finds CSS syntax usage and code snippets demonstrating the pair keyword in scroll-snap-type declarations.* (4 returned)
  - `"scroll-snap-type" "pair" ("single element" OR "2D" OR carousel) (tutorial OR guide OR blog)` — *Discovers developer tutorials, practical guides, and articles explaining how the pair keyword solves 2D snap target coordination.* (5 returned)
  - `"scroll-snap-type" "pair" (site:github.com/w3c/csswg-drafts OR site:github.com/explainers-by-googlers)` — *Surfaces CSS Working Group spec issues, GitHub discussions, and explainer threads evaluating the feature.* (5 returned)
  - `"scroll-snap-type" "pair" ("Intent to Prototype" OR "Intent to Ship" OR "Chrome Status" OR "Firefox" OR "WebKit")` — *Tracks browser vendor implementation status, ecosystem support, and engine intent announcements.* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "scroll-snap", shared with 4 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "scroll-snap": Chrome 85.3% passing (stable)*
- **Sources cited by the AI synthesis:** 3 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 3 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5124378896498688)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5124378896498688)
- [Specification](https://drafts.csswg.org/css-scroll-snap-1)
- [Chromium Tracking Bug](https://crbug.com/542706103)
