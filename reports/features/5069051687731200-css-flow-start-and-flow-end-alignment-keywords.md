# CSS flow-start and flow-end alignment keywords

> **Report Week:** 2026-W42 | **Milestone:** Chrome 157 | **Category:** In developer trial (Behind a flag)

## Overview

It was resolved in the CSSWG that we should introduce the flow-start/end keywords as value aliases for the existing flex-start/end keywords. These are needed for alignment in the case of placement reversals.  flow-start in CSS Grid-Lanes would indicate the starting edge of the container at which placement begins, which is useful in the case where placement is reversed (\`fill-reverse\`, \`track-reverse\`, discussed in this CSSWG issue: \[css-grid-3\]\[masonry\] item-flow row vs. column in masonry layouts · Issue #12803 · w3c/csswg-drafts).  Because these are acting as value aliases, we expect flex-start/end to follow the logical directions in Grid Lanes, as well, which will expand the definition of these keywords from only applying special behavior in flexbox to applying to any layout mode whose logical start/end is different from its physical start/end.  For serialization, if either flex-start/end  or flow-start/end  is used, the returned serialized value should be flow-start/end.

### Motivation

In grid-lanes, there is currently no alignment keyword to allow us to align based on the start of content placement when reversal is present; instead, we can only currently use the logical container start/end.  We wanted a keyword that behaves the way flex-start/end does in flexbox containers.  Introducing flow-start/end allows us to align based on content placement start/end, and aliasing it to flex-start/end means that we can have the same keyword used across flexbox, grid, and grid-lanes layout with the same expected behavior.

## Ecosystem Status

- **Momentum:** Emerging (footprint 130 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The CSS flow-start and flow-end keywords are formal value aliases for flex-start and flex-end, designed to align items relative to content placement flow rather than container logical edges when layout directions reverse in Flexbox and CSS Grid Lanes. Resolved by the CSS Working Group and backed by canonical serialization to the flow-\* variants, the feature is progressing into developer trials in Chromium behind runtime flags while receiving strong multi-engine endorsement.

### Recommendations
- Actionable Advice: Developers should experiment with the keywords in Chromium Canary under experimental web platform features or the CSSFlowStartAndEnd flag, but continue authoring with standard start, end, or flex-start values with feature detection for production layouts until Safari and Firefox implement the aliases.
- Standards Activity (Mozilla): Latest discussion from @celestepan: "@dholbert thank you for the response!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/WebKit/standards-positions/issues/723) [open]
- **Mozilla:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/mozilla/standards-positions/issues/1455) [closed]

## 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5069051687731200) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [github.io](https://niek.github.io/chrome-features) *(niek.github.io)*
  > \* \*\*Serialization:\*\* If either \`flex-start\`/\`flex-end\` or \`flow-start\`/\`flow-end\` is specified in CSS, the serialized computed value will canonically normalize to \`flow-start\` and \`flow-end\` \* \*\*Chromium Gerrit / Source:\*\* Chromium engineers and cont...
- [semanticdiff.com](https://app.semanticdiff.com/gh/web-platform-tests/wpt/commit/66c8558479cb6d5583366a30bd7c170fba21ea7f) *(app.semanticdiff.com)*
  > \* \*\*Chromium Gerrit / Source:\*\* Chromium engineers and contributors (including Microsoft’s Celeste Pan) introduced patches implementing parsing for the keywords behind the runtime flags \`CSSFlowStartAndEnd\` and \`CSSFlowStartAndEndSerialization\`
- [\[blink-dev\] Intent to Prototype: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17380.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blink-dev Fri, 04 Sep 2026 15:41:5...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Create a new feature ID for \`flow-start\` and \`flow-end\` keywords in alignment · Issue #4282 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4282) *(github.com · 2026-08-27T23:18:04)* *(Cites: `https://chromestatus.com/feature/5069051687731200`)*
  > Create a new feature ID for \`flow-start\` and \`flow-end\` keywords in alignment · Issue #4282 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You...

## 📚 Platform Documentation & Specifications

- [CSS Align: \`flow-start\` and \`flow-end\` as aliases for \`flex-start\` and \`flex-end\` · Issue #1455 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1455) *(github.com)*
- [w3.org](https://lists.w3.org/Archives/Public/public-css-archive/2026Aug/0191.html) *(lists.w3.org)*
- [mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=2070631) *(bugzilla.mozilla.org)*
- [Create a new feature ID for \`flow-start\` and \`flow-end\` keywords in alignment · Issue #4282 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4282) *(github.com)*
- [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement · Issue #723 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/723) *(github.com)*
- [\[css-grid-3\]\[masonry\] For \`align-items\`/\`justify-items\`, should \`fill-reverse\` affect the definition of \`start\` and \`end\`? · Issue #2582 · mozilla/wg-decisions](https://github.com/mozilla/wg-decisions/issues/2582) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 11 planned queries — **5 verified relevant**
  - `"chromestatus.com/feature/5069051687731200" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/w3c/csswg-drafts/pull/14539" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"CSS flow-start and flow-end alignment keywords" API` — *Core feature API query* (1 returned)
  - `"CSS flow-start and flow-end alignment keywords" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"fill-reverse" OR "track-reverse" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS flow-start and flow-end alignment keywords" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS flow-start and flow-end alignment keywords" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `css "flow-start" OR "flow-end" "align-content" OR "justify-content" OR "align-items"` — *Practical CSS syntax and rules showcasing how flow-start and flow-end keywords are used with standard alignment properties.* (8 returned)
  - `"flow-start" "flow-end" css ("grid-lanes" OR "masonry" OR "flex-start")` — *Articles, explainer posts, and developer guides covering the introduction of flow-start and flow-end in modern CSS layout specifications.* (3 returned)
  - `site:github.com/w3c/csswg-drafts "flow-start" OR "flow-end" "flex-start"` — *CSSWG spec discussions, resolutions, and issue threads about aliasing flex-start and flex-end to flow-start and flow-end.* (1 returned)
  - `"flow-start" "flow-end" (ChromeStatus OR WebKit OR bugzilla OR "intent to ship" OR "intent to prototype")` — *Browser engine tracking issues, implementation roadmaps, and intent announcements across Chromium, WebKit, and Gecko.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5069051687731200)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5069051687731200)
- [Specification](https://github.com/w3c/csswg-drafts/pull/14539)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/555299635)
