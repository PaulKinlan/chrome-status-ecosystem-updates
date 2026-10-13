# CSS position-visibility:anchor{s}-valid

> **Report Week:** 2026-W42 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

The \`anchors-valid\` value was implemented as part of https://crbug.com/329703412 but subsequently reverted, due to spec questions about the exact definition of the value. Since that time, the value has been renamed to \`anchor-valid\` (see https://chromestatus.com/feature/5136123851571200) and also better defined to be clear that only the default anchor matters, resolving a lot of ambiguity, and making this value shippable.

## Ecosystem Status

- **Momentum:** Moderate (footprint 225 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The position-visibility property's anchor-valid keyword (previously specified as the plural anchors-valid) resolves a key architectural ambiguity in the CSS Anchor Positioning specification by scoping validity checks exclusively to the default anchor box rather than multiple disparate anchor references. Following consensus within the CSS Working Group to adopt the singular syntax while retaining plural aliases for backwards compatibility, the feature has achieved solid cross-engine convergence. Safari shipped support in version 27, and Chromium is enabling it by default in Chrome 157, solidifying declarative visibility controls for tooltips and floating popovers.

### Recommendations
- Actionable Advice: Teams building anchor-positioned UI components should standardize on the singular position-visibility: anchor-valid syntax today while ensuring their components designate an explicit default anchor. Treat the property as a progressive enhancement to clean up detached popovers and tooltips without relying on custom JavaScript intersection observers.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Suggest positive...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [\`position-visibility: anchor-valid\`](https://github.com/mozilla/standards-positions/issues/1457) [open]

## Web-features Group

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 96.8% · Edge 96% · Firefox 84.3% · Safari 93.8%; experimental: Chrome 96.8% · Edge 97% · Firefox 85.1% · Safari 94%
- **Chrome usage:** 0.067% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

## 📰 Ecosystem Blogs & Articles

- [position-visibility \| CSS-Tricks](https://css-tricks.com/almanac/properties/p/position-visibility) *(css-tricks.com)*
  > The \`position-visibility\` CSS property controls conditional hiding for anchor-positioned elements (such as tooltips, popovers, and floating menus) In practice, this caused significant spec ambiguity over what constituted a "required" anchor reference...
- [feedsanywhere.com](https://feedsanywhere.com/feed/11240) *(feedsanywhere.com)*
  > \* \*\*The Problem with \`anchors-valid\`\*\*: Under earlier CSS Anchor Positioning drafts, the plural value \`anchors-valid\` required the browser to hide an element if \*any\* required anchor reference failed to resolve In practice, this caused significant sp...
- [chromestatus.com](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > Because only a single default anchor is inspected, the keyword was renamed from plural \`anchors-valid\` to singular \`anchor-valid\` (alongside \`anchors-visible\` → \`anchor-visible\`) The plural keywords remain supported as legacy aliases for backwards co...
- [caniuse.com](https://caniuse.com/?search=anchor-valid) *(caniuse.com)*
  > The plural keywords remain supported as legacy aliases for backwards compatibility
- [webkit.org](https://webkit.org/blog/18325/webkit-features-for-safari-27-0) *(webkit.org)*
  > WebKit Blog & Safari Release Announcements (\*WebKit Features for Safari 27.0\*) \* \*\*Context\*\*: WebKit documented the spec evolution and behavior change when shipping anchor positioning improvements The \`anchors-valid\` value is now \`anchor-valid\`, whil...
- [webkit.org](https://webkit.org/blog/17962/release-notes-for-safari-technology-preview-244) *(webkit.org)*
  > The \`anchors-valid\` value is now \`anchor-valid\`, while \`anchors-visible\` is now \`anchor-visible\`."\* \* WebKit also confirmed that Safari supports the new singular syntax while aliasing the older plural values to avoid breaking early code
- [appspot.com](https://chromiumdash.appspot.com/commit/af33aa0b8c8467336398bd9e14108abb06608663) *(chromiumdash.appspot.com)*
  > \* \*\*Key Insights\*\*: \* Chromium logged the official intent to ship the stabilized singular \`anchor-valid\` keyword
- [caniuse.com](https://caniuse.com/?search=position-visibility) *(caniuse.com)*
  > \* Marks \`anchors-valid\` and \`anchors-visible\` as discouraged aliases maintained for transitional compatibility
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17586.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mike Taylor Tue, 29 Sep 2026 15:13:57 -0700 LGTM3 On 9/29/26 10:26 a...
- [position-visibility CSS property - CSS \| MDN](https://developer-mozilla-org.translate.goog/en-US/docs/Web/CSS/Reference/Properties/position-visibility?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc) *(developer-mozilla-org.translate.goog)*
  > anchors-visible: &lt;strong&gt;The associated anchor element is completely hidden&lt;/strong&gt;. anchors-valid: The anchor-positioned element&#x27;s position-anchor property doesn&#x27;t reference a valid anchor-name set on an anchor element in the same documen...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17566.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \*Gecko\*: No signal &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \*WebKit\*: Shipped/Shipping &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \*Web developers\*: No signals &gt;&gt;&gt;&gt;&gt;&gt; ...
- [position-visibility - CSS: Cascading Style Sheets \| MDN](https://developer-mozilla-org.translate.goog/en-US/docs/Web/CSS/position-visibility?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc) *(developer-mozilla-org.translate.goog)*
  > In most cases, it makes more sense to attempt to change the placement of positioned elements when they start to overflow, to keep them on-screen and usable. This can be done with the position-try-fallbacks property and @position-try at-rule. See the ...
- [\[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17542.html) *(mail-archive.com)*
  > \*No information provided\* \*Link to entry on the Chrome Platform Status\* https://chromestatus.com/feature/5136856479039488?gate=5692419038380032 This intent message was generated by Chrome Platform Status &lt;https://chromestatus.com/&gt;. -- You rece...
- [\[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17540.html) *(mail-archive.com)*
  > \[1\] https://github.com/w3c/csswg-drafts/issues/10201#issuecomment-4180411971 \[2\] https://github.com/w3c/csswg-drafts/issues/10201#issuecomment-4390233490 \*Blink component\* Blink&gt;CSS &lt;https://issues.chromium.org/issues?q=customfield1222907:&quot...
- [Re: \[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17544.html) *(mail-archive.com)*
  > &gt;&gt; \*No information provided\* &gt;&gt; &gt;&gt; \*Link to entry on the Chrome Platform Status\* &gt;&gt; https://chromestatus.com/feature/5136123851571200?gate=6099968887750656 &gt;&gt; &gt;&gt; This intent message was generated by Chrome Platform...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17586.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mike Taylor Tue, 29 Sep 2026 15:13:57 -0700 LGTM3 On 9/29/...

## 📚 Platform Documentation & Specifications

- [\`position-visibility: anchor-valid\` · Issue #1457 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1457) *(github.com)*
- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/de/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [Document position-visibility: anchors-valid · Issue #43120 · mdn/content](https://github.com/mdn/content/issues/43120) *(github.com)*
- [\[css-anchor-position\] Details on "anchors-valid" · Issue #10201 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10201) *(github.com)*
- [Implement position-visibility: anchor-valid by chromium-wpt-export-bot · Pull Request #63048 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63048) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 11 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/5136856479039488" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-anchor-position-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS position-visibility:anchor{s}-valid" API` — *Core feature API query* (0 returned)
  - `"CSS position-visibility:anchor{s}-valid" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"anchors-valid" OR "anchor-valid" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS position-visibility:anchor{s}-valid" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS position-visibility:anchor{s}-valid" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"position-visibility" "anchor-valid" tutorial OR guide OR "css anchor positioning"` — *Searches for developer tutorials and explainers on using position-visibility with anchor-valid in CSS Anchor Positioning.* (8 returned)
  - `"position-visibility: anchor-valid" OR "position-visibility: anchors-valid" site:codepen.io OR site:github.com` — *Finds practical CSS code snippets, live demos, and real-world syntax usage.* (8 returned)
  - `"position-visibility" "anchor-valid" "intent to ship" OR chromestatus OR "chrome for developers"` — *Tracks browser vendor release notes, Chromium shipping announcements, and implementation status.* (8 returned)
  - `"position-visibility" ("anchor-valid" OR "anchors-valid") site:github.com/w3c/csswg-drafts` — *Surfaces CSS Working Group specification debates, resolution notes, and standardization discussions regarding renaming and defining anchor validity.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "anchor-positioning", shared with 8 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "anchor-positioning": Chrome 96.8% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5136856479039488)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5136856479039488)
- [Specification](https://drafts.csswg.org/css-anchor-position-1/#position-visibility)
- [Chromium Tracking Bug](https://crbug.com/333421963)
