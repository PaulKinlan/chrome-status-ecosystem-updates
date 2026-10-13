# Ship anchor-visible and anchor-valid, and deprecate the plural versions

> **Report Week:** 2026-W42 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

The CSSWG resolved to rename \`anchors-valid\` --&gt; \`anchor-valid\` \[1\] and \`anchors-visible\` --&gt; \`anchor-visible\` \[2\]. To accomplish this, we'll rename the properties to the singular variants, and add aliases from the plural versions to the singular versions. At a later date, we will remove the plural variants. This chromestatus is only about shipping the new versions, and deprecating the old ones (but not removing them).  \[1\] https://github.com/w3c/csswg-drafts/issues/10201#issuecomment-4180411971 \[2\] https://github.com/w3c/csswg-drafts/issues/10201#issuecomment-4390233490

### Motivation

CSSWG resolved to rename, and to maintain baseline status for anchor positioning, Chrome needs to ship the new names.

## Ecosystem Status

- **Momentum:** Emerging (footprint 150 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The CSS Working Group resolved to rename the position-visibility values anchors-valid and anchors-visible to their singular counterparts, anchor-valid and anchor-visible, clarifying that visibility checks evaluate only the default anchor element. Chromium is rolling out the singular variants enabled by default while retaining the plural versions as backwards-compatible aliases. Engine alignment is solid across the web standards ecosystem to safeguard baseline interoperability for CSS Anchor Positioning.

### Recommendations
- Actionable Advice: Teams should adopt the singular anchor-visible and anchor-valid keywords in new styles while leveraging alias fallbacks or progressive enhancement until all target browsers update their parsers. Ensure automated linters recognize the singular syntax and flag the deprecated plural forms in existing codebases.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 96.8% · Edge 96% · Firefox 84.3% · Safari 93.8%; experimental: Chrome 96.8% · Edge 97% · Firefox 85.1% · Safari 94%
- **Chrome usage:** 0.067% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

## 📰 Ecosystem Blogs & Articles

- [feedsanywhere.com](https://feedsanywhere.com/feed/11240) *(feedsanywhere.com)*
  > #### Why the Change Happened Originally, \`anchors-valid\` was conceived to strongly hide an element if any associated anchor could not be resolved However, defining what constituted "required anchors" when multiple \`anchor()\` functions or implicit ref...
- [caniuse.com](https://caniuse.com/wf-anchor-positioning-position-visibility-plurals) *(caniuse.com)*
  > The CSSWG clarified the specification so that these visibility conditions only check the \*\*default anchor element\*\* (defined via \`position-anchor\`) Because the behavior strictly inspects a single anchor at a time, the keywords were updated from plura...
- [github.io](https://triple-underscore.github.io/css-anchor-position-ja.html) *(triple-underscore.github.io)*
  > The CSSWG clarified the specification so that these visibility conditions only check the \*\*default anchor element\*\* (defined via \`position-anchor\`)
- [webkit.org](https://webkit.org/blog/18325/webkit-features-for-safari-27-0) *(webkit.org)*
  > WebKit Blog & Safari Release Announcements (\*WebKit Features for Safari 27.0\*) \* \*\*What it covers:\*\* WebKit announced updates aligning Safari with the latest revisions of the CSS Anchor Positioning specification \* \*\*Key takeaway:\*\* WebKit highlighted...
- [github.io](https://web-platform-dx.github.io/web-features-explorer/release-notes/december-2025) *(web-platform-dx.github.io)*
  > Web Features Explorer & \*Can I Use\* Ecosystem Tracking \* \*\*What it covers:\*\* The web-platform-dx project and CanIUse created dedicated entries distinguishing the standardized \`position-visibility\` keywords from the legacy \`anchors-valid\` and \`anchors...
- [caniuse.com](https://caniuse.com/?search=anchor-visible) *(caniuse.com)*
  > \* \*\*Status:\*\* The plural values are flagged as \*\*Discouraged / Deprecated\*\* \* \*\*Status:\*\* The plural values are flagged as \*\*Discouraged / Deprecated\*\*, signaling to linters (like Stylelint) and toolchains that developers should migrate their CSS rul...
- [Re: \[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17543.html) *(mail-archive.com)*
  > On Wed, Sep 23, 2026, 2:12 PM Mason ... \`anchors-visible\` --&gt; \`anchor-visible\` \[2\]. To accomplish this, we&#x27;ll &lt;strong&gt;rename the properties to the singular variants, and add aliases from the plural versions to the singular versions&lt;/strong&gt;.....
- [\[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17540.html) *(mail-archive.com)*
  > \*Specification\* https://drafts... \`anchors-visible\` --&gt; \`anchor-visible\` \[2\]. To accomplish this, we&#x27;ll &lt;strong&gt;rename the properties to the singular variants, and add aliases from the plural versions to the singular versions&lt;/strong&gt;....
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17566.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \*Gecko\*: No signal &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \*WebKit\*: Shipped/Shipping &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \*Web developers\*: No signals &gt;&gt;&gt;&gt;&gt;&gt; ...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > The CSSWG resolved to rename anchors-valid --&gt; anchor-valid \[1\] and anchors-visible --&gt; anchor-visible \[2\]. To accomplish this, we&#x27;ll &lt;strong&gt;rename the properties to the singular variants, and add aliases from the plural versions to the s...
- [Re: \[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17544.html) *(mail-archive.com)*
  > This chromestatus is only about shipping the new &gt;&gt; versions, and deprecating the old ones (but not removing them). &gt;&gt; \[1\] &gt;&gt; https://github.com/w3c/csswg-drafts/issues/10201#issuecomment-4180411971 &gt;&gt; \[2\] &gt;&gt; https://git...

## 📚 Platform Documentation & Specifications

- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [github.com](https://github.com/web-platform-dx/web-features/issues/3558) *(github.com)*
- [\`position-visibility: anchor-valid\` · Issue #1457 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1457) *(github.com)*
- [Rename position-visibility:anchors-visible to anchor-visible by chromium-wpt-export-bot · Pull Request #63021 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63021) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 11 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5136123851571200" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-anchor-position-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Ship anchor-visible and anchor-valid, and deprecate the plural versions" API` — *Core feature API query* (0 returned)
  - `"Ship anchor-visible and anchor-valid, and deprecate the plural versions" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"anchors-valid" OR "anchor-valid" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Ship anchor-visible and anchor-valid, and deprecate the plural versions" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Ship anchor-visible and anchor-valid, and deprecate the plural versions" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"position-visibility" ("anchor-visible" OR "anchor-valid") (tutorial OR guide OR "css anchor positioning")` — *Finds developer tutorials and practical guides explaining how to control CSS anchor positioning visibility using the singular property values.* (4 returned)
  - `"position-visibility: anchor-visible" OR "position-visibility: anchor-valid"` — *Locates real-world CSS code examples and snippets demonstrating the exact syntax for the new singular anchor visibility keywords.* (1 returned)
  - `"anchors-visible" "anchor-visible" ("deprecated" OR "rename" OR "Chromium" OR "Chrome")` — *Tracks browser release notes, compatibility updates, and deprecation notices regarding the shift from plural to singular variants.* (8 returned)
  - `site:github.com/w3c/csswg-drafts/issues "anchor-visible" OR "anchor-valid"` — *Surfaces CSSWG specification discussions, issue resolutions, and community debate leading to the keyword renaming.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "anchor-positioning", shared with 8 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "anchor-positioning": Chrome 96.8% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5136123851571200)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5136123851571200)
- [Specification](https://drafts.csswg.org/css-anchor-position-1/#position-visibility)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/526682332)
