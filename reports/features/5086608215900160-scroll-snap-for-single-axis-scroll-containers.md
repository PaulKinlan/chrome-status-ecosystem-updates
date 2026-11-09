# Scroll snap for single-axis scroll containers

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 | **Category:** Enabled by default

## Overview

This feature lets a single-axis scroll container (for example, one with overflow: auto clip) handle scroll snap area propagation and alignment separately for each axis.  Single-axis scroll containers are now supported (https://chromestatus.com/feature/5067363861004288). Without this feature, such a container captures a snap area on both axes, even the axis it can't scroll. The snap area then can't align on that axis.  With this feature, if a snap area sets alignment on both axes, the single-axis container handles only the axis it scrolls. The other axis goes up to the nearest ancestor scroll container that scrolls in that direction.

### Motivation

This is part of the single-axis scroll container feature (https://github.com/explainers-by-googlers/single-axis-scroll-containers) to align the scroll snap behavior with the sticky header in a single-axis scroll container.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 180 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Scroll snap for single-axis scroll containers addresses a long-standing limitation where single-axis scrollers (such as containers with overflow: auto clip) inadvertently swallowed snap points along their non-scrollable axis. By propagating orthogonal snap alignment upward to ancestor scroll containers, the specification aligns snapping behavior with sticky positioning. Chromium is shipping this by default in Chrome 159, while standards discussion at the CSS Working Group and cross-engine consensus remain generally supportive but still emerging in implementations.

### Recommendations
- Actionable Advice: Teams should evaluate this feature as an enhancement and test single-axis scrollers against nested scroll snapping, but avoid relying on orthogonal snap propagation for mission-critical UX until Safari and Firefox land matching support. Maintain explicit, single-axis snap declarations (such as targeting only inline or block axes) where fallback behavior across non-supporting browsers is needed.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @hiikezoe: "Looks basically reasonable to me.    That's said, it seems that the spec change hasn't yet clarified mixed up writing mode cases. From a sentence of t..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/712) [open]
- **Mozilla:** [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1445) [open]

## Web-features Group

*group-level data: web-features [`scroll-snap`](https://webstatus.dev/features/scroll-snap), shared with 4 other ChromeStatus features*

- Share of tests passing in the web-features group `scroll-snap` on [wpt.fyi](https://wpt.fyi/results?q=feature:scroll-snap) (via webstatus.dev) — stable: Chrome 89.9% · Edge 88.3% · Firefox 83.2% · Safari 70.4%; experimental: Chrome 97.2% · Edge 95% · Firefox 83.2% · Safari 75.4%
- **Chrome usage:** 0.22% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/59))

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img664-dot-cr-status.appspot.com/release-notes/159) *(img664-dot-cr-status.appspot.com)*
  > \*\*Chrome Beta & Release Notes:\*\* Included in the release notes for \*\*Chrome 158 and 159\*\* The release documentation notes that single-axis scroll containers (\`overflow: auto clip\`) now separate snap area propagation per axis, ensuring dual-axis snap ...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug 2026 14:06:10 -0700 Contact e...
- [Chrome Release 158](https://chromestatuslite.com/?version=158) *(chromestatuslite.com)*
  > With this feature, &lt;strong&gt;if a snap area sets alignment on both axes, the single-axis container handles only the axis it scrolls&lt;/strong&gt;. The other axis goes up to the nearest ancestor scroll container that scrolls in that direction. # This feature...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17200.html) *(mail-archive.com)*
  > &gt;&gt; \*No information provided\* &gt;&gt; &gt;&gt; \*Link to entry on the Chrome Platform Status\* &gt;&gt; https://chromestatus.com/feature/5067363861004288?gate=6477880110481408 &gt;&gt; &gt;&gt; \*Links to previous Intent discussions\* &gt;&gt; Inte...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17220.html) *(mail-archive.com)*
  > &gt;&gt;&gt; \*No information provided\* &gt;&gt;&gt; &gt;&gt;&gt; \*Link to entry on the Chrome Platform Status\* &gt;&gt;&gt; https://chromestatus.com/feature/5067363861004288?gate=6477880110481408 &gt;&gt;&gt; &gt;&gt;&gt; \*Links to previous Intent di...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; \*No information provided\* &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Link to entry on the Chrome Platform Status\* &gt;&gt;&gt;&gt; https://chromestatus.com/feature/5067363861004288?gate=6477880110481408 &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Lin...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5086608215900160`)*
  > \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug 2026 14:06:10 -0700...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/w3c/csswg-drafts/blob/main/css-conditional-5/Overview.bs) *(github.com)*
- [Other Spec Review: Scroll snap for single-axis scroll container · Issue #1266 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1266) *(github.com)*
- [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers · Issue #1445 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1445) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/680) *(github.com)*
- [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers #14018 by lcdavid94 · Pull Request #14354 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/pull/14354) *(github.com)*
- [Other Spec Review: Single-Axis Scroll Containers · Issue #1222 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1222) *(github.com)*
- [Update mentions of 'scroll container' to refer to scrollable axises when appropriate. #12289 by tabatkins · Pull Request #13903 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/pull/13903) *(github.com)*
- [GitHub - explainers-by-googlers/single-axis-scroll-containers: Single-Axis Scroll Containers explainer · GitHub](https://github.com/explainers-by-googlers/single-axis-scroll-containers) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/156.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/156.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 58 result(s) found across 12 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5086608215900160" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/explainers-by-googlers/single-axis-scroll-snap" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"drafts.csswg.org/css-scroll-snap-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Scroll snap for single-axis scroll containers" API` — *Core feature API query* (5 returned)
  - `"Scroll snap for single-axis scroll containers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Scroll snap for single-axis scroll containers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (4 returned)
  - `"Scroll snap for single-axis scroll containers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"scroll snap" ("single-axis scroll" OR "overflow: auto clip") guide OR tutorial` — *Discovers articles and developer guides covering nested or single-axis container scroll snap behavior.* (8 returned)
  - `"scroll-snap-type" ("overflow: clip auto" OR "overflow: auto clip") "scroll-snap-align"` — *Locates real-world CSS code examples configuring single-axis scroll snapping alongside clip overflow values.* (8 returned)
  - `"Scroll snap for single-axis scroll containers" OR "single-axis-scroll-snap" chromestatus OR blink-dev` — *Finds browser release milestones, Chromium implementation tracking, and ecosystem intent-to-ship threads.* (8 returned)
  - `site:github.com ("single-axis-scroll-snap" OR "single-axis-scroll-containers") issues OR discussions` — *Retrieves developer and spec author debates, edge cases, and design rationale from GitHub issue trackers.* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **5 verified relevant**
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

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5086608215900160)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5086608215900160)
- [Specification](https://drafts.csswg.org/css-scroll-snap-1)
- [Chromium Tracking Bug](http://crbug.com/473576119)
