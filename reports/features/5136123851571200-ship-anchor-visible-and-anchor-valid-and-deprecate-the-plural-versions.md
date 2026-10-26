# Ship anchor-visible and anchor-valid, and deprecate the plural versions

> **Report Week:** 2026-W44 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

The CSSWG resolved to rename \`anchors-valid\` --&gt; \`anchor-valid\` \[1\] and \`anchors-visible\` --&gt; \`anchor-visible\` \[2\]. To accomplish this, we'll rename the properties to the singular variants, and add aliases from the plural versions to the singular versions. At a later date, we will remove the plural variants. This chromestatus is only about shipping the new versions, and deprecating the old ones (but not removing them).  \[1\] https://github.com/w3c/csswg-drafts/issues/10201#issuecomment-4180411971 \[2\] https://github.com/w3c/csswg-drafts/issues/10201#issuecomment-4390233490

### Motivation

CSSWG resolved to rename, and to maintain baseline status for anchor positioning, Chrome needs to ship the new names.

## Ecosystem Status

- **Momentum:** Moderate (footprint 260 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The CSS Working Group resolved to rename the \`position-visibility\` values from their plural forms (\`anchors-valid\`, \`anchors-visible\`) to singular variants (\`anchor-valid\`, \`anchor-visible\`) to clarify that evaluation applies specifically to an element's default anchor box. Chrome 157 enables the singular keywords by default and marks the plural keywords as deprecated aliases ahead of planned future removal. This step harmonizes Chromium with recent WebKit implementations and clears the path for CSS Anchor Positioning to reach unified cross-engine Baseline status.

### Recommendations
- Actionable Advice: Teams utilizing anchor positioning should update stylesheets to the singular syntax \`position-visibility: anchor-visible\` (and \`anchor-valid\`), using \`@supports\` or cascaded plural fallback rules if backward compatibility with older browser releases is strictly necessary. Avoid authoring new features with the plural forms, as standards registries have categorized them as discouraged and slated for eventual removal.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 96.9% · Edge 96.7% · Firefox 84.3% · Safari 93.3%; experimental: Chrome 96.9% · Edge 97% · Firefox 86.6% · Safari 93.9%
- **Chrome usage:** 0.072% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

## 📰 Ecosystem Blogs & Articles

- [webkit.org](https://webkit.org/blog/18325/webkit-features-for-safari-27-0) *(webkit.org)*
  > \*\*The Reason for the Change:\*\* Originally, \`position-visibility: anchors-valid\` was intended to hide an element if \*any\* required anchor references could not be resolved However, defining what counted as an active "required anchor reference" proved a...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > The CSSWG clarified the spec to state that the rule only evaluates the element's \*\*default anchor box\*\* \*\*Key Insights:\*\* Chromium had previously reverted an earlier implementation of \`anchors-valid\` due to specification churn
- [caniuse.com](https://caniuse.com/wf-anchor-positioning-position-visibility-plurals) *(caniuse.com)*
  > Because the condition evaluates a single anchor at a time rather than a collection of anchors, the keywords were renamed to the singular form
- [caniuse.com](https://caniuse.com/?search=position-visibility) *(caniuse.com)*
  > To preserve backwards compatibility and prevent breaking existing sites, browsers maintain \`anchors-valid\` and \`anchors-visible\` as legacy aliases, marking the plural versions as deprecated ahead of eventual removal \*\*Key Insights:\*\* The plural varia...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > \*\*Sources:\*\* Chrome Platform Status & Microsoft Edge Release Notes \*\*Coverage:\*\* Chromium tracked the update under the entry \*"Ship anchor-visible and anchor-valid, and deprecate the plural versions"\* (targeted for Chrome 157 and Edge 157)
- [github.io](https://web-platform-dx.github.io/web-features-explorer/features/anchor-positioning-position-visibility-plurals) *(web-platform-dx.github.io)*
  > \*\*Sources:\*\* Can I Use & Web Features Explorer
- [kishan.design](https://www.kishan.design/read/css-anchor-positioning) *(kishan.design)*
  > Tooling authors and developer guides recommend avoiding the plural versions in favor of the singular \`anchor-valid\` and \`anchor-visible\` keywords to ensure forward compatibility as browsers move anchor positioning toward Baseline interoperability
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17578.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid 'Mason Freed' via blink-dev Tue, 29 Sep 2026 07:48:03 -0700 On Monda...
- [\[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17542.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mason Freed Wed, 23 Sep 2026 15:56:11 -0700 \*Contact emails\* \[email&#160;pro...
- [Re: \[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17543.html) *(mail-archive.com)*
  > On Wed, Sep 23, 2026, 2:12 PM Mason ... \`anchors-visible\` --&gt; \`anchor-visible\` \[2\]. To accomplish this, we&#x27;ll &lt;strong&gt;rename the properties to the singular variants, and add aliases from the plural versions to the singular versions&lt;/strong&gt;.....
- [\[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17540.html) *(mail-archive.com)*
  > \*Specification\* https://drafts... \`anchors-visible\` --&gt; \`anchor-visible\` \[2\]. To accomplish this, we&#x27;ll &lt;strong&gt;rename the properties to the singular variants, and add aliases from the plural versions to the singular versions&lt;/strong&gt;....
- [Re: \[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17544.html) *(mail-archive.com)*
  > &gt; LGTM2 &gt; On 9/23/26 5:30 p.m., ... --&gt; \`anchor-visible\` \[2\]. To accomplish this, we&#x27;ll &gt;&gt; &lt;strong&gt;rename the properties to the singular variants, and add aliases from the &gt;&gt; plural versions to the singular versions&lt;/strong&gt;...
- [Implement position-visibility: anchor-valid \[333421963\] - Chromium](https://issues.chromium.org/issues/333421963) *(issues.chromium.org)*
  > This was implemented in https://crrev.com/1280441 but later reverted in https://crrev.com/1283614 due to open spec issues (see: github discussion and issues on anchors-valid spec). We should re-land this support · Ok to assign to you, just to have an...
- [Chrome Platform Status](https://chromestatus.com/feature/5136856479039488) *(chromestatus.com)*
  > Chrome Platform Status
- [anchors-valid and anchors-visible - Developer Signals](https://developer-signals.dev/features/anchor-positioning-position-visibility-plurals) *(developer-signals.dev)*
  > anchors-valid and anchors-visible - Developer Signals , so the whole site contributes exactly one sha256 hash to script-src rather than one hash per generated page. Pages with no GitHub issue carry no attribute and the script is a no-op. Social scrap...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17578.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136123851571200`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid 'Mason Freed' via blink-dev Tue, 29 Sep 2026 07:48:03 -070...
- [\[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17542.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136123851571200`)*
  > \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mason Freed Wed, 23 Sep 2026 15:56:11 -0700 \*Contact emails\* \[emai...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/mdn/browser-compat-data/issues/29950) *(github.com)*
- [\[css-anchor-position\] Details on "anchors-valid" · Issue #10201 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10201) *(github.com)*
- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) *(developer.mozilla.org)*
- [Baseline status for Anchor positioning · Issue #3558 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3558) *(github.com)*
- [position-visibility CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position-visibility) *(developer.mozilla.org)*
- [\`position-visibility: anchor-valid\` · Issue #1457 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1457) *(github.com)*
- [\[css-anchor-position-1\] Initial value of position-visibility should be anchor-visible by tuankiet65 · Pull Request #75580 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/75580) *(github.com)*
- [Rename position-visibility:anchors-visible to anchor-visible by chromium-wpt-export-bot · Pull Request #63021 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63021) *(github.com)*
- [Implement position-visibility: anchor-valid by chromium-wpt-export-bot · Pull Request #63048 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63048) *(github.com)*
- [2076272 - \[wpt-sync\] Sync PR 63021 - Rename position-visibility:anchors-visible to anchor-visible](https://bugzilla.mozilla.org/show_bug.cgi?id=2076272) *(bugzilla.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 70 result(s) found across 11 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/5136123851571200" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"drafts.csswg.org/css-anchor-position-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Ship anchor-visible and anchor-valid, and deprecate the plural versions" API` — *Core feature API query* (1 returned)
  - `"Ship anchor-visible and anchor-valid, and deprecate the plural versions" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"anchors-valid" OR "anchor-valid" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Ship anchor-visible and anchor-valid, and deprecate the plural versions" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Ship anchor-visible and anchor-valid, and deprecate the plural versions" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `css "position-visibility" "anchor-visible" tutorial OR guide` — *Developer articles and tutorials showing practical implementation of position-visibility with the anchor-visible keyword.* (8 returned)
  - `"position-visibility" AND ("anchor-visible" OR "anchor-valid") site:codepen.io OR site:github.com` — *Real-world CSS code examples and demos using anchor-visible and anchor-valid.* (8 returned)
  - `"anchor-visible" "anchors-visible" (deprecate OR deprecated OR rename) (Chrome OR Blink)` — *Browser release announcements, intent to ship notices, and ecosystem tracking of the plural-to-singular keyword migration.* (8 returned)
  - `"position-visibility" ("anchor-visible" OR "anchors-visible") site:github.com/w3c/csswg-drafts` — *CSS Working Group resolution threads, community feedback, and spec discussions about renaming anchors-valid and anchors-visible.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "anchor-positioning", shared with 8 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "anchor-positioning": Chrome 96.9% passing (stable)*
- **Sources cited by the AI synthesis:** 7 result(s) found — **7 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5136123851571200)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5136123851571200)
- [Specification](https://drafts.csswg.org/css-anchor-position-1/#position-visibility)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/526682332)
