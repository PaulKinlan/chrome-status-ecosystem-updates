# CSS flow-start and flow-end alignment keywords

> **Report Week:** 2026-W45 | **Milestone:** Chrome 158 (first listed in Chrome 157) | **Category:** Enabled by default

## Overview

Introduce the flow-start/end keywords as value aliases for the existing flex-start/end keywords as resolved in the CSSWG. These are needed for alignment in the case of placement reversals.  flow-start in CSS Grid-Lanes would indicate the starting edge of the container at which placement begins, which is useful in the case where placement is reversed (\`fill-reverse\`, \`track-reverse\`, discussed in this CSSWG issue: \[css-grid-3\]\[masonry\] item-flow row vs. column in masonry layouts · Issue #12803 · w3c/csswg-drafts).  Because these are acting as value aliases, we expect flex-start/end to follow the logical directions in Grid Lanes, as well, which will expand the definition of these keywords from only applying special behavior in flexbox to applying to any layout mode whose logical start/end is different from its physical start/end.  For serialization, if either flex-start/end  or flow-start/end  is used, the returned serialized value should be flow-start/end.

### Motivation

In grid-lanes, there is currently no alignment keyword to allow us to align based on the start of content placement when reversal is present; instead, we can only currently use the logical container start/end.  We wanted a keyword that behaves the way flex-start/end does in flexbox containers.  Introducing flow-start/end allows us to align based on content placement start/end, and aliasing it to flex-start/end means that we can have the same keyword used across flexbox, grid, and grid-lanes layout with the same expected behavior.

## Ecosystem Status

- **Momentum:** High (+140 points since 2026-10-12; footprint 270 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The CSS Working Group resolved to introduce flow-start and flow-end as canonical alignment keywords that alias legacy flex-start and flex-end across CSS Box Alignment Module Level 3 and CSS Grid Lanes. The feature solves alignment ambiguities when content placement is reversed (such as fill-reverse in masonry/grid-lanes layouts) while preserving container writing-mode semantics for start and end. With Chromium targeting enabled-by-default support in Chrome 158, Mozilla adopting an official positive stance, and WebKit reviewing the proposal without objection, engine consensus is solidly aligned.

### Recommendations
- Actionable Advice: Teams should treat flow-start and flow-end as an emerging progressive enhancement and continue using flex-start/flex-end or standard logical start/end for production flexbox and grid layouts today. If experimenting with reversed Grid Lanes layouts in Chromium developer builds, guard modern keyword usage behind CSS @supports (align-items: flow-start) fallbacks until Safari and Firefox complete their implementations.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @celestepan: "@dholbert thank you for the response!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/WebKit/standards-positions/issues/723) [open]
- **Mozilla:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/mozilla/standards-positions/issues/1455) [closed]

## 📰 Ecosystem Blogs & Articles

- [csswg.org](https://drafts.csswg.org/css-flexbox-2) *(drafts.csswg.org)*
  > The CSS Working Group (CSSWG) resolved to introduce \*\*\`flow-start\`\*\* and \*\*\`flow-end\`\*\* as canonical keywords in the \*\*CSS Box Alignment Module Level 3\*\* (and CSS Flexible Box Layout Level 2) Spec updates formally adopted \`flow-start\` and \`flow-end\` ...
- [appspot.com](https://cr-status.appspot.com/feature/5069051687731200?gate=5575518593351680) *(cr-status.appspot.com)*
  > They serve as aliases for the legacy \`flex-start\` and \`flex-end\` keywords The primary motivation arises from newer layout specifications—particularly \*\*CSS Grid-Lanes (Masonry)\*\*—where content placement can be reversed (e.g., using \`fill-reverse\` or ...
- [wpt.fyi](https://wpt.fyi/results/css/css-align/flow-start-and-end-serialization.html?run_id=5194407249969152&run_id=4902746892533760&diff=) *(wpt.fyi)*
  > \*\*Serialization:\*\* To normalize syntax across layout modes, any use of either \`flex-start\`/\`flex-end\` or \`flow-start\`/\`flow-end\` in alignment properties (\`align-content\`, \`align-items\`, \`align-self\`, \`justify-content\`, \`justify-items\`, \`justify-self\`...
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Chromium Runtime Flags\*\*: Chromium integrated tracking bug \`#555299635\` and implemented the feature under the internal flags \`CSSFlowStartAndEnd\` and \`CSSFlowStartAndEndSerialization\`, bringing native parsing and serialized computed style conversio...
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/platform/runtime_enabled_features.json5) *(chromium.googlesource.com)*
  > \*\*Chromium Runtime Flags\*\*: Chromium integrated tracking bug \`#555299635\` and implemented the feature under the internal flags \`CSSFlowStartAndEnd\` and \`CSSFlowStartAndEndSerialization\`, bringing native parsing and serialized computed style conversio...
- [github.io](https://mozilla.github.io/standards-positions) *(mozilla.github.io)*
  > Mozilla officially logged a \*\*positive\*\* position on \`flow-start\` and \`flow-end\`, supporting the effort to rationalize flow-relative alignment without overloading Flexbox terms in non-flex layouts
- [wpt.fyi](https://wpt.fyi/results/css/css-align/flow-start-and-end-serialization.html?run_id=5096399854370816&run_id=5129748195049472&diff=) *(wpt.fyi)*
  > html\` verify that \`align-content\`, \`justify-content\`, and shorthand properties inherit and serialize \`flow-start\` and \`flow-end\` instead of legacy \`flex-\*\` tokens
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17835.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blink-dev Wed, 21 Oct 2026 10:15:28 ...
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17780.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Alex Russell Mon, 19 Oct 2026 11:26:58 -0700 LGTM1 On ...
- [\[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17728.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blink-dev Wed, 14 Oct 2026 11:04:06 -0700 Co...
- [\[blink-dev\] Intent to Prototype: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17380.html) *(mail-archive.com)*
  > Specification Changes have not ... It was resolved in the CSSWG that we should introduce the flow-start/end keywords as &lt;strong&gt;value aliases for the existing flex-start/end keywords&lt;/strong&gt;....
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17781.html) *(mail-archive.com)*
  > Because of this, we plan to use a second &gt;&gt; flag to introduce a separate gate for the new serialization behavior of &gt;&gt; flex-start/end so that if we receive reports of site breakages as a result, &gt;&gt; we can disable the serialization b...
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17743.html) *(mail-archive.com)*
  > On Wed, Oct 14, 2026 at 8:04 PM ...s/pull/14539 &gt; &gt; Summary &gt; It was resolved in the CSSWG that we should &lt;strong&gt;introduce the flow-start/end &gt; keywords as value aliases for the existing flex-start/end keywords&lt;/strong&gt;....
- [Chrome Platform Status](https://polymer10-dot-cr-status.appspot.com/feature/5069051687731200) *(polymer10-dot-cr-status.appspot.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Create a new feature ID for \`flow-start\` and \`flow-end\` keywords in alignment · Issue #4282 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4282) *(github.com · 2026-08-27T23:18:04)* *(Cites: `https://chromestatus.com/feature/5069051687731200`)*
  > Create a new feature ID for \`flow-start\` and \`flow-end\` keywords in alignment · Issue #4282 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with anot...
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17835.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/pull/14539`)*
  > Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blink-dev Wed, 21 Oct 2026...

## 📚 Platform Documentation & Specifications

- [align-content CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-content) *(developer.mozilla.org)*
- [github.com](https://github.com/w3c/csswg-drafts/issues/12971) *(github.com)*
- [\[css-grid-3\]\[masonry\] For \`align-items\`/\`justify-items\`, should \`fill-reverse\` affect the definition of \`start\` and \`end\`? · Issue #14052 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/14052) *(github.com)*
- [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement · Issue #723 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/723) *(github.com)*
- [justify-content CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/justify-content) *(developer.mozilla.org)*
- [Create a new feature ID for \`flow-start\` and \`flow-end\` keywords in alignment · Issue #4282 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4282) *(github.com)*
- [align-items CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-items) *(developer.mozilla.org)*
- [CSS Align: \`flow-start\` and \`flow-end\` as aliases for \`flex-start\` and \`flex-end\` · Issue #1455 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1455) *(github.com)*
- [align-items CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) *(developer.mozilla.org)*
- [align-content CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 55 result(s) found across 11 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/5069051687731200" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/w3c/csswg-drafts/pull/14539" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"CSS flow-start and flow-end alignment keywords" API` — *Core feature API query* (4 returned)
  - `"CSS flow-start and flow-end alignment keywords" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"fill-reverse" OR "track-reverse" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS flow-start and flow-end alignment keywords" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS flow-start and flow-end alignment keywords" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"flow-start" OR "flow-end" css alignment "flex-start"` — *Discovers developer tutorials and articles explaining the introduction of flow-start and flow-end CSS alignment keywords as aliases for flex-start and flex-end.* (8 returned)
  - `css "align-content" OR "justify-content" "flow-start" OR "flow-end"` — *Finds CSS code snippets and syntax demonstrations utilizing flow-start or flow-end values in box alignment properties.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "flow-start" OR "flow-end" alignment` — *Tracks CSS Working Group specifications, issue threads, and debates regarding the flow-start/flow-end naming resolution and masonry layout integration.* (2 returned)
  - `"flow-start" "flow-end" ("intent to prototype" OR "intent to ship" OR "chromestatus" OR "webkit")` — *Surfaces browser vendor implementation signals, Intent-to-Prototype or Ship announcements, and bug tracker updates across layout engines.* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 5 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5069051687731200)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5069051687731200)
- [Specification](https://github.com/w3c/csswg-drafts/pull/14539)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/555299635)
