# Ship anchor-visible and anchor-valid, and deprecate the plural versions

> **Report Week:** 2026-W45 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

The CSSWG resolved to rename \`anchors-valid\` --&gt; \`anchor-valid\` \[1\] and \`anchors-visible\` --&gt; \`anchor-visible\` \[2\]. To accomplish this, we'll rename the properties to the singular variants, and add aliases from the plural versions to the singular versions. At a later date, we will remove the plural variants. This chromestatus is only about shipping the new versions, and deprecating the old ones (but not removing them).  \[1\] https://github.com/w3c/csswg-drafts/issues/10201#issuecomment-4180411971 \[2\] https://github.com/w3c/csswg-drafts/issues/10201#issuecomment-4390233490

### Motivation

CSSWG resolved to rename, and to maintain baseline status for anchor positioning, Chrome needs to ship the new names.

## Ecosystem Status

- **Momentum:** Emerging (+30 points since 2026-10-12; footprint 180 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The CSS Working Group resolved to rename the position-visibility values from the plural anchors-visible and anchors-valid to the singular anchor-visible and anchor-valid to clarify that evaluations target a single default anchor. Chromium is shipping the singular keywords in Chrome 157 with backward-compatible aliases for the plural forms ahead of eventual deprecation. Major engine implementations are aligning around the singular syntax to achieve seamless cross-browser baseline interoperability for CSS Anchor Positioning.

### Recommendations
- Actionable Advice: Teams should adopt the singular anchor-visible and anchor-valid keywords for all modern CSS stylesheets and UI component libraries. If supporting legacy Chromium builds that only recognized the plural names is necessary, declare the plural property first as a fallback immediately followed by the standard singular keyword.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 95.6% · Edge 95.4% · Firefox 83.3% · Safari 93.4%; experimental: Chrome 95.8% · Edge 95.4% · Firefox 85.6% · Safari 94%
- **Chrome usage:** 0.078% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

## 📰 Ecosystem Blogs & Articles

- [caniuse.com](https://caniuse.com/?search=anchors-visible) *(caniuse.com)*
  > \*\*Motivation:\*\* The conditions for conditional hiding in CSS Anchor Positioning (Module Level 1) evaluate against a single default anchor element at a time MDN and the \*web-features\* project flag \`anchors-visible\` and \`anchors-valid\` as legacy aliase...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > \*\*Motivation:\*\* The conditions for conditional hiding in CSS Anchor Positioning (Module Level 1) evaluate against a single default anchor element at a time The original plural naming caused ambiguity
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > \*\*Title:\*\* \*Microsoft Edge 157 web platform release notes\* \*\*Key Details:\*\* Highlights the arrival of \`position-visibility: anchor-valid and anchor-visible\`
- [css-tricks.com](https://css-tricks.com/almanac/properties/p/position-visibility) *(css-tricks.com)*
  > The documentation explains conditional hiding: \`anchor-visible\` ensures that an anchored overlay is strongly hidden when its anchor scrolls out of view, while \`anchor-valid\` hides the element if its anchor references fail to resolve \*\*CSS-Tricks Alma...
- [caniuse.com](https://caniuse.com/?search=anchor-visible) *(caniuse.com)*
  > MDN and the \*web-features\* project flag \`anchors-visible\` and \`anchors-valid\` as legacy aliases discouraged for new code
- [entranttechnologies.com](https://entranttechnologies.com/tech-news/safari-27-release-customizable-select-scroll-anchoring) *(entranttechnologies.com)*
  > \*\*Articles & Release Notes:\*\* \*Safari 27 Released: Customizable Select, Scroll Anchoring, and CSS Anchor Updates\* \*\*Key Details:\*\* WebKit adopted the spec modifications early, shifting \`position-anchor: auto\` to \`normal\` and moving from the plural ke...
- [CSS Anchor Positioning Guide \| CSS-Tricks](https://css-tricks.com/css-anchor-positioning-guide) *(css-tricks.com)*
  > \*\*CSS-Tricks Almanac:\*\* In earlier articles (such as Juan Diego Rodríguez’s \*CSS Anchor Positioning Guide\* and Almanac entries for \`position-visibility\`), the syntax originally referenced \`anchors-visible\` and highlighted that \`anchors-valid\` had yet...
- [position-visibility CSS property - CSS \| MDN](https://developer-mozilla-org.translate.goog/en-US/docs/Web/CSS/Reference/Properties/position-visibility?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc) *(developer-mozilla-org.translate.goog)*
  > &lt;strong&gt;The position-visibility property can be used to always show the anchor-positioned element, or conditionally hide it in certain situations&lt;/strong&gt;: anchors-visible: The associated anchor element is completely hidden. anchors-valid: The anchor...
- [Implement position-visibility: anchor-valid \[333421963\] - Chromium](https://issues.chromium.org/issues/333421963) *(issues.chromium.org)*
  > Rename position-visibility:anchors-visible to anchor-visible The CSSWG renamed the \`position-visibility\` property values \`anchors-visible\` and \`anchors-valid\` to the singular \`anchor-visible\` and \`anchor-valid\`, keeping the plural keywords as legacy ...
- [Re: \[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17544.html) *(mail-archive.com)*
  > &gt; LGTM2 &gt; On 9/23/26 5:30 p.m., Chris Harrelson wrote: &gt; &gt; LGTM1 &gt; &gt; On Wed, Sep 23, 2026, 2:12 PM Mason Freed &lt;\[email protected\]&gt; wrote: &gt; &gt;&gt; \*Contact emails\* &gt;&gt; \[email protected\] &gt;&gt; &gt;&gt; \*Explainer\* ...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17578.html) *(mail-archive.com)*
  > Thanks, Mason On Wed, Sep 23, 2026 at 3:56 PM Mason Freed &lt;\[email protected\]&gt; wrote: \*Contact emails\* \[email protected\] \*Explainer\* \*No information provided\* \*Specification\* https://drafts.csswg.org/css-anchor-position-1/#position-visibility \*S...
- [\[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17542.html) *(mail-archive.com)*
  > \*Specification\* https://drafts.csswg.org/css-anchor-position-1/#position-visibility \*Summary\* The \`anchors-valid\` value was implemented as part of https://crbug.com/329703412 but subsequently reverted, due to spec questions about the exact definition...
- [Web features explorer - anchors-valid and anchors-visible](https://web-platform-dx.github.io/web-features-explorer/features/anchor-positioning-position-visibility-plurals) *(web-platform-dx.github.io)*
  > Web features explorer - anchors-valid and anchors-visible Web features explorer Web features explorer anchors-valid and anchors-visible Copy ID This feature is discouraged &mdash; The anchors-valid and anchors-visible values were renamed to the singu...
- [311854 &ndash; Accept anchor-valid and anchor-visible keywords as aliases of anchors-valid and anchors-visible in position-visibility](https://bugs.webkit.org/show_bug.cgi?id=311854) *(bugs.webkit.org)*
  > 311854 &ndash; Accept anchor-valid and anchor-visible keywords as aliases of anchors-valid and anchors-visible in position-visibility WebKit Bugzilla Bug 311854: Accept anchor-valid and anchor-visible keywords as aliases of anchors-valid and anchors-...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/web-platform-dx/web-features/issues/3558?timeline_page=1) *(github.com)*
- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [github.com](https://github.com/w3c/csswg-drafts/issues/13176) *(github.com)*
- [\`position-visibility: anchor-valid\` · Issue #1457 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1457) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 55 result(s) found across 11 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5136123851571200" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"drafts.csswg.org/css-anchor-position-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Ship anchor-visible and anchor-valid, and deprecate the plural versions" API` — *Core feature API query* (1 returned)
  - `"Ship anchor-visible and anchor-valid, and deprecate the plural versions" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"anchors-valid" OR "anchor-valid" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Ship anchor-visible and anchor-valid, and deprecate the plural versions" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Ship anchor-visible and anchor-valid, and deprecate the plural versions" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"position-visibility" ("anchor-visible" OR "anchor-valid") (guide OR tutorial OR overview)` — *Finds developer guides and articles explaining how to use anchor-visible and anchor-valid in CSS Anchor Positioning.* (4 returned)
  - `"position-visibility: anchor-visible" OR "position-visibility: anchor-valid" CSS` — *Locates real-world CSS code snippets and syntax demonstrations using the new singular anchor visibility keywords.* (8 returned)
  - `Chrome ("anchor-visible" OR "anchor-valid") "deprecate" ("anchors-visible" OR "anchors-valid")` — *Surfaces browser release announcements and ecosystem notices regarding the renaming and deprecation of the plural values.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "anchors-visible" "anchor-visible" OR "anchor-valid"` — *Retrieves standards discussions, deliberations, and developer feedback within the CSSWG repository.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "anchor-positioning", shared with 8 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "anchor-positioning": Chrome 95.6% passing (stable)*
- **Sources cited by the AI synthesis:** 3 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5136123851571200)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5136123851571200)
- [Specification](https://drafts.csswg.org/css-anchor-position-1/#position-visibility)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/526682332)
