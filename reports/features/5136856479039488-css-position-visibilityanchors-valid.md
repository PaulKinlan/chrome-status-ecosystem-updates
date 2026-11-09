# CSS position-visibility:anchor{s}-valid

> **Report Week:** 2026-W46 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

The \`anchors-valid\` value was implemented as part of https://crbug.com/329703412 but subsequently reverted, due to spec questions about the exact definition of the value. Since that time, the value has been renamed to \`anchor-valid\` (see https://chromestatus.com/feature/5136123851571200) and also better defined to be clear that only the default anchor matters, resolving a lot of ambiguity, and making this value shippable.

## Ecosystem Status

- **Momentum:** Moderate (+120 points since 2026-10-12; footprint 345 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The CSS \`position-visibility: anchor-valid\` property (formerly \`anchors-valid\`) enables anchor-positioned elements such as menus and tooltips to be strongly hidden whenever their default anchor cannot be resolved, eliminating orphaned floating UI without manual JavaScript. Following CSS Working Group resolutions that clarified the specification to focus solely on the default anchor and standardized the singular syntax, the feature is set to ship enabled by default in Chromium 157. Engine consensus is aligned across the ecosystem, with Gecko and WebKit backing the clarified specification and supporting legacy plural aliases to safeguard web compatibility.

### Recommendations
- Actionable Advice: Web teams building anchor-positioned interfaces should adopt \`position-visibility: anchor-valid\` progressively, optionally declaring the legacy \`anchors-valid\` alias alongside modern syntax inside CSS \`@supports\` blocks. As full cross-browser baseline support for anchor positioning continues to mature, teams should maintain fallback positioning strategies for non-supporting legacy browsers.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Suggest positive...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [\`position-visibility: anchor-valid\`](https://github.com/mozilla/standards-positions/issues/1457) [closed]

## Web-features Group

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 95.6% · Edge 95.4% · Firefox 83.2% · Safari 93.1%; experimental: Chrome 96.9% · Edge 94.8% · Firefox 85.9% · Safari 93.7%
- **Chrome usage:** 0.073% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

## 📰 Ecosystem Blogs & Articles

- [position-visibility \| CSS-Tricks](https://css-tricks.com/almanac/properties/p/position-visibility) *(css-tricks.com)*
  > The CSS property \*\*\`position-visibility\`\*\* allows developers to conditionally hide anchor-positioned elements (such as tooltips, popovers, and menus) without requiring JavaScript or custom IntersectionObservers If the default anchor element does not ...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > If the default anchor element does not exist or cannot be resolved, the element is strongly hidden \*\*Microsoft Edge Platform Release Notes (Edge 157):\*\* Highlights \`position-visibility: anchor-valid\` and \`anchor-visible\` as core CSS updates
- [caniuse.com](https://caniuse.com/?search=position-visibility) *(caniuse.com)*
  > \*\*Renaming:\*\* The CSSWG updated the keywords to singular form—\`anchor-valid\` and \`anchor-visible\`—because they evaluate one default anchor at a time
- [appspot.com](https://cr-status.appspot.com/feature/5136123851571200) *(cr-status.appspot.com)*
  > \*\*Renaming:\*\* The CSSWG updated the keywords to singular form—\`anchor-valid\` and \`anchor-visible\`—because they evaluate one default anchor at a time The plural forms (\`anchors-valid\`, \`anchors-visible\`) remain legacy aliases
- [github.io](https://web-platform-dx.github.io/web-features-explorer/features/anchor-positioning-position-visibility-plurals) *(web-platform-dx.github.io)*
  > The plural forms (\`anchors-valid\`, \`anchors-visible\`) remain legacy aliases \*\*MDN BCD Issue #29950 & Web Features Explorer:\*\* Outlines how browser engines and documentation handle the transition from the legacy plural \`anchors-valid\` to canonical sin...
- [\[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17542.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mason Freed Wed, 23 Sep 2026 15:56:11 -0700 \*Contact emails\* \[email&#160;pro...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17560.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Chris Harrelson Fri, 25 Sep 2026 14:53:43 -0700 Thanks! LGTM1 On Fri...
- [\`anchor-visible\` and \`anchor-valid\` are missing \[526682332\] - Chromium](https://issues.chromium.org/issues/526682332) *(issues.chromium.org)*
  > Chromium Sign in
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17581.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid 'Dan Clark' via blink-dev Tue, 29 Sep 2026 10:27:16 -0700 Oops, I me...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17586.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mike Taylor Tue, 29 Sep 2026 15:13:57 -0700 LGTM3 On 9/29/26 10:26 a...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17566.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid 'Dan Clark' via blink-dev Mon, 28 Sep 2026 11:32:48 -0700 \*&gt; Is this...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17580.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid 'Dan Clark' via blink-dev Tue, 29 Sep 2026 10:26:13 -0700 Thanks Mas...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17558.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mason Freed Fri, 25 Sep 2026 13:24:19 -0700 On Fri, Sep 25, 2026 at ...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com · 2026-11-02T20:19:23)*
  > Since that time, the value has been renamed to anchor-valid (see https://chromestatus.com/feature/5136123851571200) and also better defined to be clear that only the default anchor matters, resolving a lot of ambiguity, and making this value shippabl...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17551.html) *(mail-archive.com)*
  > &gt; \*Contact emails\* &gt; \[email protected\] &gt; &gt; \*Explainer\* &gt; \*No information provided\* &gt; &gt; \*Specification\* &gt; https://drafts.csswg.org/css-anchor-position-1/#position-visibility &gt; &gt; \*Summary\* &gt; The \`anchors-valid\` value wa...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17556.html) *(mail-archive.com)*
  > Do you think \`anchor-valid\` by itself deserves its own standards position? I think perhaps we should think about #794 as a position on the entire feature, including all sub-features. If you disagree, of course I&#x27;m happy to file a new one. Thanks...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17557.html) *(mail-archive.com)*
  > &gt; &gt; Thanks, &gt; Mason &gt; &gt; &gt; &gt;&gt; On Wed, Sep 23, 2026 at 3:56 PM Mason Freed &lt;\[email protected\]&gt; wrote: &gt;&gt; &gt;&gt;&gt; \*Contact emails\* &gt;&gt;&gt; \[email protected\] &gt;&gt;&gt; &gt;&gt;&gt; \*Explainer\* &gt;&gt;&gt;...
- [position-visibility CSS property - CSS \| MDN](https://developer-mozilla-org.translate.goog/en-US/docs/Web/CSS/Reference/Properties/position-visibility?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc) *(developer-mozilla-org.translate.goog)*
  > anchors-visible: The associated anchor element is completely hidden. anchors-valid: &lt;strong&gt;The anchor-positioned element&#x27;s position-anchor property doesn&#x27;t reference a valid anchor-name set on an anchor element in the same document&lt;/strong...
- [Implement position-visibility \[329703412\] - Chromium](https://issues.chromium.org/issues/329703412) *(issues.chromium.org)*
  > This is a tracking bug for implementing and shipping position-visibilty. This is described in this github issue, and the spec is in-progress · Can this bug be closed as &quot;Fixed&quot; now? I think position-visibility is implemented, modulo the anc...
- [Scoping and Visibility \| Anchor Positioning in Space](https://anchor-positioning-in-space.schalkneethling.com/parts/scoping-visibility) *(anchor-positioning-in-space.schalkneethling.com)*
  > The key word is completely: if ... it is hidden. anchors-valid — &lt;strong&gt;If any required anchor references do not resolve to an actual anchor element, hide the positioned element&lt;/strong&gt;....
- [Implement position-visibility: anchor-valid \[333421963\] - Chromium](https://issues.chromium.org/issues/333421963) *(issues.chromium.org)*
  > This CL renames the pre-existing \`anchors-visible\` value to \`anchor-visible\`, and also sets the stage for a later CL that implements the behavior for \`anchor-valid\`. This CL gates the new singular keywords and legacy value aliasing behind the \`Positi...
- [\[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17540.html) *(mail-archive.com)*
  > \*Specification\* https://drafts... singular versions. At a later date, we will remove the plural variants. &lt;strong&gt;This chromestatus is only about shipping the new versions, and deprecating the old ones&lt;/strong&gt; (but not removing them)....
- [Re: \[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17543.html) *(mail-archive.com)*
  > On Wed, Sep 23, 2026, 2:12 PM Mason ... versions to the singular versions. At a later date, we will remove the plural variants. &lt;strong&gt;This chromestatus is only about shipping the new versions&lt;/strong&gt;, ......
- [Re: \[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17544.html) *(mail-archive.com)*
  > &gt; LGTM2 &gt; On 9/23/26 5:30 p.m., Chris Harrelson wrote: &gt; &gt; LGTM1 &gt; &gt; On Wed, Sep 23, 2026, 2:12 PM Mason Freed &lt;\[email protected\]&gt; wrote: &gt; &gt;&gt; \*Contact emails\* &gt;&gt; \[email protected\] &gt;&gt; &gt;&gt; \*Explainer\* ...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17578.html) *(mail-archive.com)*
  > Thanks, Mason On Wed, Sep 23, 2026 ... renamed to \`anchor-valid\` (see https://chromestatus.com/feature/5136123851571200) and also better defined to be clear that only the default anchor matters, resolving a lot of ambiguity, and making this value shi...
- [Re: \[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17541.html) *(mail-archive.com)*
  > &gt; \*Contact emails\* &gt; \[email protected\] ... singular versions. At a later date, we will remove &gt; the plural variants. &lt;strong&gt;This chromestatus is only about shipping the new &gt; versions, and deprecating the old ones&lt;/strong&gt; (but not remov...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17542.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mason Freed Wed, 23 Sep 2026 15:56:11 -0700 \*Contact emails\* \[emai...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17560.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Chris Harrelson Fri, 25 Sep 2026 14:53:43 -0700 Thanks! LG...
- [\`anchor-visible\` and \`anchor-valid\` are missing \[526682332\] - Chromium](https://issues.chromium.org/issues/526682332) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > Chromium Sign in
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17581.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid 'Dan Clark' via blink-dev Tue, 29 Sep 2026 10:27:16 -0700 ...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17586.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mike Taylor Tue, 29 Sep 2026 15:13:57 -0700 LGTM3 On 9/29/...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17566.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid 'Dan Clark' via blink-dev Mon, 28 Sep 2026 11:32:48 -0700 ...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17580.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid 'Dan Clark' via blink-dev Tue, 29 Sep 2026 10:26:13 -0700 ...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17558.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mason Freed Fri, 25 Sep 2026 13:24:19 -0700 On Fri, Sep 25...

## 📚 Platform Documentation & Specifications

- [\[css-anchor-position\] Details on "anchors-valid" · Issue #10201 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/10201) *(github.com)*
- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/position-visibility/index.md?plain=1) *(github.com)*
- [github.com](https://github.com/mdn/browser-compat-data/issues/29950) *(github.com)*
- [\`position-visibility: anchor-valid\` · Issue #1457 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1457) *(github.com)*
- [Implement position-visibility: anchor-valid by chromium-wpt-export-bot · Pull Request #63048 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/63048) *(github.com)*
- [Document position-visibility: anchors-valid · Issue #43120 · mdn/content · GitHub](https://github.com/mdn/content/issues/43120) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 60 result(s) found across 11 planned queries — **27 verified relevant**
  - `"chromestatus.com/feature/5136856479039488" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"drafts.csswg.org/css-anchor-position-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS position-visibility:anchor{s}-valid" API` — *Core feature API query* (7 returned)
  - `"CSS position-visibility:anchor{s}-valid" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"anchors-valid" OR "anchor-valid" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS position-visibility:anchor{s}-valid" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS position-visibility:anchor{s}-valid" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"position-visibility" "anchor-valid" (guide OR tutorial OR "anchor positioning")` — *Discovers developer tutorials and articles explaining the usage of anchor-valid in CSS anchor positioning.* (8 returned)
  - `"position-visibility: anchor-valid" OR "position-visibility: anchors-valid"` — *Finds code examples, demos, and style rules demonstrating the syntax of position-visibility.* (8 returned)
  - `"position-visibility" ("anchor-valid" OR "anchors-valid") ("intent to ship" OR chromestatus)` — *Tracks browser support, release timelines, and implementation announcements from Chromium and other engines.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "position-visibility" ("anchor-valid" OR "anchors-valid")` — *Surfaces CSS Working Group specification debates, resolution notes, and rationale behind renaming the value.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 3 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "anchor-positioning", shared with 8 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "anchor-positioning": Chrome 95.6% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5136856479039488)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5136856479039488)
- [Specification](https://drafts.csswg.org/css-anchor-position-1/#position-visibility)
- [Chromium Tracking Bug](https://crbug.com/333421963)
