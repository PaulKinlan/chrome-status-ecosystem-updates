# CSS flow-start and flow-end alignment keywords

> **Report Week:** 2026-W46 | **Milestone:** Chrome 158 (first listed in Chrome 157) | **Category:** Enabled by default

## Overview

Introduce the flow-start/end keywords as value aliases for the existing flex-start/end keywords as resolved in the CSSWG. These are needed for alignment in the case of placement reversals.  flow-start in CSS Grid-Lanes would indicate the starting edge of the container at which placement begins, which is useful in the case where placement is reversed (\`fill-reverse\`, \`track-reverse\`, discussed in this CSSWG issue: \[css-grid-3\]\[masonry\] item-flow row vs. column in masonry layouts · Issue #12803 · w3c/csswg-drafts).  Because these are acting as value aliases, we expect flex-start/end to follow the logical directions in Grid Lanes, as well, which will expand the definition of these keywords from only applying special behavior in flexbox to applying to any layout mode whose logical start/end is different from its physical start/end.  For serialization, if either flex-start/end  or flow-start/end  is used, the returned serialized value should be flow-start/end.

### Motivation

In grid-lanes, there is currently no alignment keyword to allow us to align based on the start of content placement when reversal is present; instead, we can only currently use the logical container start/end.  We wanted a keyword that behaves the way flex-start/end does in flexbox containers.  Introducing flow-start/end allows us to align based on content placement start/end, and aliasing it to flex-start/end means that we can have the same keyword used across flexbox, grid, and grid-lanes layout with the same expected behavior.

## Ecosystem Status

- **Momentum:** High (+200 points since 2026-10-12; footprint 330 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The CSS flow-start and flow-end keywords introduce generic, placement-aware alignment values into CSS Box Alignment Module Level 3, serving as canonical aliases for flex-start and flex-end. They solve long-standing semantic friction and layout reversal challenges in modern specifications like CSS Grid Lanes (masonry), where item placement directions can invert relative to container logical edges. With Chrome shipping default support and Mozilla officially backing the design, engine alignment is rapidly solidifying around the CSS Working Group resolution.

### Recommendations
- Actionable Advice: Continue relying on established keywords like flex-start or logical start/end for production flexbox and standard grid code while cross-browser rollout completes. However, start testing flow-start and flow-end experimentally when prototyping CSS Grid Lanes and reversed masonry layouts in Chromium.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @celestepan: "@dholbert thank you for the response!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/WebKit/standards-positions/issues/723) [open]
- **Mozilla:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/mozilla/standards-positions/issues/1455) [closed]

## 📰 Ecosystem Blogs & Articles

- [Making features generic in CSS \| Rachel Andrew](https://rachelandrew.co.uk/archives/2026/11/02/making-features-generic-in-css) *(rachelandrew.co.uk)*
  > The CSS Working Group resolved to introduce \*\*\`flow-start\`\*\* and \*\*\`flow-end\`\*\* into \*\*CSS Box Alignment Module Level 3\*\* as value aliases for \`flex-start\` and \`flex-end\` \*\*The Problem:\*\* The existing \`flex-start\` and \`flex-end\` keywords were tightly...
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Reversals & Grid Lanes (Masonry):\*\* The need became pressing with work on CSS Grid Level 3 / Masonry layouts (CSS Grid Lanes), where placement can be reversed via keywords like \`fill-reverse\` and \`track-reverse\` In these cases, developers need alig...
- [csswg.org](https://drafts.csswg.org/css-flexbox-2) *(drafts.csswg.org)*
  > \*\*Canonical Serialization:\*\* To ensure consistency across the platform, \`flow-start\` and \`flow-end\` become the canonical keywords
- [csslayout.news](https://csslayout.news/a/3mzhziouk3323-issue-347) *(csslayout.news)*
  > \*\*Overview:\*\* In a widely circulated blog post and via her \*CSS Layout News\* newsletter, Rachel Andrew (CSSWG member and Chrome Developer Content Lead) broke down the addition of \`flow-start\` and \`flow-end\` Developers and CSS authors have welcomed th...
- [sifa.id](https://sifa.id/p/rachelandrew.co.uk) *(sifa.id)*
  > \*\*Overview:\*\* In a widely circulated blog post and via her \*CSS Layout News\* newsletter, Rachel Andrew (CSSWG member and Chrome Developer Content Lead) broke down the addition of \`flow-start\` and \`flow-end\`
- [\[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17728.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blink-dev Wed, 14 Oct 2026 11:04:06 -0700 Co...
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17830.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Chris Harrelson Wed, 21 Oct 2026 09:34:06 -0700 I'd li...
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17837.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Daniel Bratell Wed, 21 Oct 2026 11:33:32 -0700 LGTM3 /...
- [\[blink-dev\] Intent to Prototype: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17380.html) *(mail-archive.com)*
  > Specification Changes have not ... It was resolved in the CSSWG that we should introduce the flow-start/end keywords as &lt;strong&gt;value aliases for the existing flex-start/end keywords&lt;/strong&gt;....
- [Chrome Release 158](https://chromestatuslite.com/?version=158) *(chromestatuslite.com)*
  > &lt;strong&gt;Introduce the flow-start/end keywords as value aliases for the existing flex-start/end keywords as resolved in the CSSWG&lt;/strong&gt;. These are needed for alignment in the case of placement reversals.
- [Chrome Release 157](https://chromestatuslite.com/?version=157) *(chromestatuslite.com)*
  > It was resolved in the CSSWG that we should introduce the flow-start/end keywords as &lt;strong&gt;value aliases for the existing flex-start/end keywords&lt;/strong&gt;. These are needed for alignment in the case of placement reversals.
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17835.html) *(mail-archive.com)*
  > Because of this, we plan to use a second flag to introduce a separate gate for the new serialization behavior of flex-start/end so that if we receive reports of site breakages as a result, we can disable the serialization behavior separately from the...
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17781.html) *(mail-archive.com)*
  > Because of this, we plan to use a second &gt;&gt; flag to introduce a separate gate for the new serialization behavior of &gt;&gt; flex-start/end so that if we receive reports of site breakages as a result, &gt;&gt; we can disable the serialization b...
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17836.html) *(mail-archive.com)*
  > Because of this, we plan to use a second &gt; flag to introduce a separate gate for the new serialization behavior of &gt; flex-start/end so that if we receive reports of site breakages as a result, &gt; we can disable the serialization behavior sepa...
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17743.html) *(mail-archive.com)*
  > Because of this, we plan to use a second &gt; flag to introduce a separate gate for the new serialization behavior of &gt; flex-start/end so that if we receive reports of site breakages as a result, &gt; we can disable the serialization behavior sepa...
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17749.html) *(mail-archive.com)*
  > Because of this, we plan to use a second flag to introduce a separate gate for the new serialization behavior of flex-start/end so that if we receive reports of site breakages as a result, we can disable the serialization behavior separately from the...
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17780.html) *(mail-archive.com)*
  > Please list open issues (e.g. links to known github issues &gt; in the project for the feature specification) whose resolution may &gt; introduce web compat/interop risk (e.g., changing to naming or structure of &gt; the API in a non-backward-compati...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Add flow-start/flow-end values to CSS alignment properties by Elchi3 · Pull Request #31019 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/31019) *(github.com)* *(Cites: `https://chromestatus.com/feature/5069051687731200`)*
  > Add flow-start/flow-end values to CSS alignment properties by Elchi3 · Pull Request #31019 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another ta...
- [\[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17728.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/pull/14539`)*
  > \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blink-dev Wed, 14 Oct 2026 11:04:0...
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17830.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/pull/14539`)*
  > Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Chris Harrelson Wed, 21 Oct 2026 09:34:06 -0...

## 📚 Platform Documentation & Specifications

- [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement · Issue #723 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/723) *(github.com)*
- [\[css-grid-3\]\[masonry\] For \`align-items\`/\`justify-items\`, should \`fill-reverse\` affect the definition of \`start\` and \`end\`? · Issue #14052 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/14052) *(github.com)*
- [github.com](https://github.com/w3c/csswg-drafts/issues/12971) *(github.com)*
- [CSS Align: \`flow-start\` and \`flow-end\` as aliases for \`flex-start\` and \`flex-end\` · Issue #1455 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1455) *(github.com)*
- [align-items CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-items) *(developer.mozilla.org)*
- [align-content CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-content) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-self) *(developer.mozilla.org)*
- [Add flow-start/flow-end values to CSS alignment properties by Elchi3 · Pull Request #31019 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/31019) *(github.com)*
- [Weekly hardening 2026-10-04: build 11 pending demos, v149 critique batch, margin-trim goal-setting fix by PaulKinlan · Pull Request #23 · PaulKinlan/chrome-platform-showcase · GitHub](https://github.com/PaulKinlan/chrome-platform-showcase/pull/23) *(github.com)*
- [CSS flow-start and flow-end feature impact · Issue #2135 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/2135) *(github.com)*
- [align-items CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) *(developer.mozilla.org)*
- [justify-items CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/justify-items) *(developer.mozilla.org)*
- [justify-self CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/justify-self) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 11 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/5069051687731200" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"github.com/w3c/csswg-drafts/pull/14539" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"CSS flow-start and flow-end alignment keywords" API` — *Core feature API query* (7 returned)
  - `"CSS flow-start and flow-end alignment keywords" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"fill-reverse" OR "track-reverse" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS flow-start and flow-end alignment keywords" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS flow-start and flow-end alignment keywords" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"flow-start" "flow-end" css alignment (masonry OR grid OR flexbox)` — *Articles, guides, and explainers detailing flow-start and flow-end alignment keywords and how they handle placement reversals.* (8 returned)
  - `"align-content: flow-start" OR "justify-content: flow-start" OR "align-items: flow-start" OR "flow-end"` — *Direct code snippets and usage examples of flow-start and flow-end values in CSS box alignment properties.* (8 returned)
  - `site:github.com/w3c/csswg-drafts ("flow-start" OR "flow-end") ("flex-start" OR masonry OR "grid-lanes")` — *CSS Working Group deliberations, issue threads, and pull requests establishing the flow-start/end aliases and serialization rules.* (2 returned)
  - `("flow-start" OR "flow-end") css ("intent to ship" OR "intent to prototype" OR chromestatus OR webkit)` — *Browser engine tracking, implementation announcements, and platform release notes for flow-start and flow-end support.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5069051687731200)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5069051687731200)
- [Specification](https://github.com/w3c/csswg-drafts/pull/14539)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/555299635)
