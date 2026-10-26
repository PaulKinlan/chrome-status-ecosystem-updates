# CSS flow-start and flow-end alignment keywords

> **Report Week:** 2026-W44 | **Milestone:** Chrome 158 (first listed in Chrome 157) | **Category:** Enabled by default

## Overview

Introduce the flow-start/end keywords as value aliases for the existing flex-start/end keywords as resolved in the CSSWG. These are needed for alignment in the case of placement reversals.  flow-start in CSS Grid-Lanes would indicate the starting edge of the container at which placement begins, which is useful in the case where placement is reversed (\`fill-reverse\`, \`track-reverse\`, discussed in this CSSWG issue: \[css-grid-3\]\[masonry\] item-flow row vs. column in masonry layouts · Issue #12803 · w3c/csswg-drafts).  Because these are acting as value aliases, we expect flex-start/end to follow the logical directions in Grid Lanes, as well, which will expand the definition of these keywords from only applying special behavior in flexbox to applying to any layout mode whose logical start/end is different from its physical start/end.  For serialization, if either flex-start/end  or flow-start/end  is used, the returned serialized value should be flow-start/end.

### Motivation

In grid-lanes, there is currently no alignment keyword to allow us to align based on the start of content placement when reversal is present; instead, we can only currently use the logical container start/end.  We wanted a keyword that behaves the way flex-start/end does in flexbox containers.  Introducing flow-start/end allows us to align based on content placement start/end, and aliasing it to flex-start/end means that we can have the same keyword used across flexbox, grid, and grid-lanes layout with the same expected behavior.

## Ecosystem Status

- **Momentum:** Moderate (footprint 230 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The CSS flow-start and flow-end alignment keywords standardize placement-relative alignment across modern layout modes such as Flexbox and emerging CSS Grid-Lanes masonry layouts, aliasing and canonically superseding flex-start and flex-end. Chrome is enabling the feature by default, backed by formal CSS Working Group resolutions to decouple placement-flow alignment from flexbox-specific naming. While browser consensus is firmly positive, the keywords are not yet universally available across all stable browser engines.

### Recommendations
- Actionable Advice: Web development teams should treat flow-start and flow-end as progressive enhancements or wait for cross-engine baseline support before using them in production. In the meantime, continue using flex-start and flex-end for flexbox layouts, or gate flow-start and flow-end behind CSS @supports rules when experimenting with CSS Grid-Lanes.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @celestepan: "@dholbert thank you for the response!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/WebKit/standards-positions/issues/723) [open]
- **Mozilla:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/mozilla/standards-positions/issues/1455) [closed]

## 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://cr-status.appspot.com/feature/5069051687731200?gate=5575518593351680) *(cr-status.appspot.com)*
  > Chrome Platform Status
- [stackoverflow.com](https://stackoverflow.com/questions/50919447/flexbox-flex-start-flex-end-self-start-self-end-and-start-end-whats-the-dif) *(stackoverflow.com)*
  > \*\*Why they are needed:\*\* In layout modes where item placement can be reversed (such as Flexbox with \`row-reverse\` / \`column-reverse\`, or CSS Grid-Lanes / Masonry layouts with \`fill-reverse\` and \`track-reverse\`), \`start\` and \`end\` refer strictly to th...
- [csswg.org](https://drafts.csswg.org/css-flexbox-2) *(drafts.csswg.org)*
  > \*\*Canonical Serialization:\*\* In CSS Flexible Box Layout Module Level 2 and CSS Align Level 3, \`flow-start\` and \`flow-end\` have been made the canonical alignment keywords \*\*CSS Flexible Box Layout Module Level 2 (CRD):\*\* Updated normative changes expl...
- [wpt.fyi](https://wpt.fyi/results/css/css-align/flow-start-and-end-serialization.html?run_id=5194407249969152&run_id=4902746892533760&diff=) *(wpt.fyi)*
  > When either \`flex-start\`/\`flex-end\` or \`flow-start\`/\`flow-end\` is declared, computed style serialization returns \`flow-start\` or \`flow-end\` html\`) have been deployed across major browser test harnesses to verify both parsing and computed serializatio...
- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Chrome 158 Release Notes:\*\* Documents the official rollout of the feature in Chromium (tracked under Chromium Bug \`#555299635\`) It highlights the aliasing behavior and notes the serialization requirement where \`flex-start\` and \`flex-end\` normalize ...
- [github.io](https://mozilla.github.io/standards-positions) *(mozilla.github.io)*
  > \*\*Mozilla Standards Positions:\*\* Issue \`#1455\` records Mozilla’s position on \*CSS Align: flow-start and flow-end as alignment keywords to indicate the start and end of content placement\* as officially \*\*positive\*\*
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > \*\*Polypane Feature Tracker:\*\* Polypane and web platform watchlogs highlighted the experimental arrival of \`CSSFlowStartAndEnd\`, noting it as a welcome simplification for layout consistency
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17781.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Dan Clark' via blink-dev Mon, 19 Oct 2026 11:28:25 -0...
- [\[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17728.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blink-dev Wed, 14 Oct 2026 11:04:06 -0700 Co...
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17743.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Philip Jägenstedt Thu, 15 Oct 2026 02:10:42 -0700 http...
- [\[blink-dev\] Intent to Prototype: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17380.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blink-dev Fri, 04 Sep 2026 15:41:5...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17781.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069051687731200`)*
  > Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Dan Clark' via blink-dev Mon, 19 Oct 2026 1...
- [\[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17728.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/pull/14539`)*
  > \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blink-dev Wed, 14 Oct 2026 11:04:0...

## 📚 Platform Documentation & Specifications

- [w3.org](https://lists.w3.org/Archives/Public/public-css-archive/2026Aug/0191.html) *(lists.w3.org)*
- [github.com](https://github.com/WebKit/standards-positions/issues/723) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-content) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-items) *(developer.mozilla.org)*
- [github.com](https://github.com/w3c/csswg-drafts/issues/12971) *(github.com)*
- [Create a new feature ID for \`flow-start\` and \`flow-end\` keywords in alignment · Issue #4282 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4282) *(github.com)*
- [CSS flow-start and flow-end feature impact · Issue #2135 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/2135) *(github.com)*
- [\[css-grid-3\]\[masonry\] For \`align-items\`/\`justify-items\`, should \`fill-reverse\` affect the definition of \`start\` and \`end\`? · Issue #2582 · mozilla/wg-decisions](https://github.com/mozilla/wg-decisions/issues/2582) *(github.com)*
- [\[css-grid-3\]\[masonry\] For \`align-items\`/\`justify-items\`, should \`fill-reverse\` affect the definition of \`start\` and \`end\`? · Issue #14052 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14052) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 39 result(s) found across 12 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5069051687731200" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/w3c/csswg-drafts/pull/14539" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"CSS flow-start and flow-end alignment keywords" API` — *Core feature API query* (3 returned)
  - `"CSS flow-start and flow-end alignment keywords" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"fill-reverse" OR "track-reverse" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS flow-start and flow-end alignment keywords" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS flow-start and flow-end alignment keywords" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `CSS "flow-start" OR "flow-end" alignment grid masonry` — *Searches for developer tutorials and articles explaining the flow-start and flow-end alignment keywords in CSS Grid and Masonry.* (3 returned)
  - `"align-items: flow-start" OR "justify-content: flow-start" OR "align-content: flow-end"` — *Finds direct CSS code snippets and syntax declarations using flow-start or flow-end in alignment properties.* (0 returned)
  - `site:github.com/w3c/csswg-drafts "flow-start" OR "flow-end" "flex-start"` — *Identifies CSS Working Group issue discussions and pull requests regarding the introduction and aliasing of flow-start and flow-end.* (2 returned)
  - `"flow-start" "flow-end" ("Intent to Ship" OR "Intent to Prototype" OR "WebKit bug" OR "Chromium issue")` — *Discovers browser vendor announcements, implementation bugs, and intent-to-implement discussions across Chromium and WebKit.* (1 returned)
  - `"flow-start" "grid-lanes" OR "masonry" "css-align"` — *Tracks discussions and feedback concerning flow-based alignment within CSS masonry layout and grid-lanes specifications.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5069051687731200)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5069051687731200)
- [Specification](https://github.com/w3c/csswg-drafts/pull/14539)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/555299635)
