# CSS position-visibility:anchor{s}-valid

> **Report Week:** 2026-W45 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

The \`anchors-valid\` value was implemented as part of https://crbug.com/329703412 but subsequently reverted, due to spec questions about the exact definition of the value. Since that time, the value has been renamed to \`anchor-valid\` (see https://chromestatus.com/feature/5136123851571200) and also better defined to be clear that only the default anchor matters, resolving a lot of ambiguity, and making this value shippable.

## Ecosystem Status

- **Momentum:** Quiet (0 points since 2026-10-12; footprint 225 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Following specification clarification in the CSS Anchor Positioning Module Level 1 to evaluate only the default anchor, \`position-visibility: anchor-valid\` resolves prior implementation ambiguities and supersedes the deprecated plural \`anchors-valid\` syntax. The feature is enabled by default in Chromium and Edge 157, aligning with existing WebKit support to resolve a major blocker for conditional anchor positioning. With Mozilla displaying positive signals on standardization, the feature is positioned on a steady track toward full cross-browser baseline interop.

### Recommendations
- Actionable Advice: Adopt the modern singular \`position-visibility: anchor-valid\` keyword under progressive enhancement using \`@supports (position-visibility: anchor-valid)\` queries rather than relying on legacy plural aliases. Ensure secondary fallback strategies remain in place for Firefox users until stable Gecko builds incorporate the feature.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Suggest positive...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [\`position-visibility: anchor-valid\`](https://github.com/mozilla/standards-positions/issues/1457) [open]

## Web-features Group

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 95.6% · Edge 95.4% · Firefox 83.3% · Safari 93.4%; experimental: Chrome 95.8% · Edge 95.4% · Firefox 85.6% · Safari 94%
- **Chrome usage:** 0.078% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

## 📰 Ecosystem Blogs & Articles

- [position-visibility \| CSS-Tricks](https://css-tricks.com/almanac/properties/p/position-visibility) *(css-tricks.com)*
  > The \`position-visibility\` property in the CSS Anchor Positioning Module Level 1 provides controls for conditional visibility, automatically hiding anchored elements (like tooltips, popovers, and menus) when their positioning context breaks It was des...
- [webkit.org](https://webkit.org/blog/18325/webkit-features-for-safari-27-0) *(webkit.org)*
  > It was designed to strongly hide an element if any anchor references (such as those in \`anchor()\` or \`anchor-size()\` functions) failed to resolve However, this led to spec ambiguity over what constituted "required" anchor references when elements ref...
- [github.io](https://web-platform-dx.github.io/web-features-explorer/features/anchor-positioning-position-visibility-plurals) *(web-platform-dx.github.io)*
  > The plural forms (\`anchors-valid\`, \`anchors-visible\`) remain supported as deprecated aliases in browsers for backwards compatibility The documentation explains the single-value and multi-keyword combinatorial syntax, explicitly identifying the plural...
- [caniuse.com](https://caniuse.com/?search=anchor-visible) *(caniuse.com)*
  > The plural forms (\`anchors-valid\`, \`anchors-visible\`) remain supported as deprecated aliases in browsers for backwards compatibility Ecosystem discussions pushed the plural forms to a separate "discouraged/legacy" category in Can I Use and Web Featur...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > The plural forms (\`anchors-valid\`, \`anchors-visible\`) remain supported as deprecated aliases in browsers for backwards compatibility It documents the resolution of spec ambiguities and explicitly lists the deprecation of the pluralized keywords in fa...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > \*\*Chrome Platform Status entry (\*CSS position-visibility:anchor{s}-valid\*)\*\*: Tracks the feature landing in Chrome (shipped in Chrome 157 alongside Microsoft Edge 157) \*\*Microsoft Edge 157 Release Notes\*\*: Explicitly calls out the support for \`positi...
- [webkit.org](https://webkit.org/blog/17967/news-from-wwdc26-webkit-in-safari-27-beta) *(webkit.org)*
  > \*\*WebKit in Safari Beta / WebKit Features Posts\*\* \*\*WebKit in Safari Beta / WebKit Features Posts\*\*: WebKit documented their adoption of \`anchor-valid\` and \`anchor-visible\`
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com · 2026-10-30T05:29:22)*
  > Since that time, the value has been renamed to anchor-valid (see https://chromestatus.com/feature/5136123851571200) and also better defined to be clear that only the default anchor matters, resolving a lot of ambiguity, and making this value shippabl...
- [position-visibility CSS property - CSS \| MDN](https://developer-mozilla-org.translate.goog/en-US/docs/Web/CSS/Reference/Properties/position-visibility?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc) *(developer-mozilla-org.translate.goog)*
  > anchors-visible: &lt;strong&gt;The associated anchor element is completely hidden&lt;/strong&gt;. anchors-valid: The anchor-positioned element&#x27;s position-anchor property doesn&#x27;t reference a valid anchor-name set on an anchor element in the same documen...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17551.html) *(mail-archive.com)*
  > &gt; &gt; \*Gecko\*: No signal &gt; &gt; \*WebKit\*: Shipped/Shipping &gt; &gt; \*Web developers\*: No signals &gt; &gt; \*Other signals\*: &gt; &gt; \*WebView application risks\* &gt; &gt; Does this intent deprecate or change behavior of existing APIs, such t...
- [\[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17542.html) *(mail-archive.com)*
  > \*No information provided\* \*Debuggability\* \*No information provided\* \*Will this feature be supported on all six Blink platforms (Windows, Mac, Linux, ChromeOS, Android, and Android WebView)?\* Yes \*Is this feature fully tested by web-platform-tests &lt...
- [Implement position-visibility: anchor-valid \[333421963\] - Chromium](https://issues.chromium.org/issues/333421963) *(issues.chromium.org)*
  > This CL renames the pre-existing \`anchors-visible\` value to \`anchor-visible\`, and also sets the stage for a later CL that implements the behavior for \`anchor-valid\`. This CL gates the new singular keywords and legacy value aliasing behind the \`Positi...
- [Ship anchor-visible and anchor-valid, and deprecate the plural versions - Chrome Platform Status](https://chromestatus.com/feature/5136123851571200) *(chromestatus.com · 2026-09-23T00:00:00)*
  > We cannot provide a description for this page right now
- [Chrome Platform Status](https://cr-status.appspot.com/feature/5136856479039488/activity) *(cr-status.appspot.com)*
  > Chrome Platform Status

## 📚 Platform Documentation & Specifications

- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [github.com](https://github.com/web-platform-dx/web-features/issues/3558?timeline_page=1) *(github.com)*
- [github.com](https://github.com/web-platform-dx/web-features/issues/3558) *(github.com)*
- [\`position-visibility: anchor-valid\` · Issue #1457 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1457) *(github.com)*
- [Document position-visibility: anchors-valid · Issue #43120 · mdn/content · GitHub](https://github.com/mdn/content/issues/43120) *(github.com)*
- [Create custom tests for \`position-visibility: anchors-visible\` and \`position-visibility: anchors-valid\` · Issue #3465 · openwebdocs/mdn-bcd-collector · GitHub](https://github.com/openwebdocs/mdn-bcd-collector/issues/3465) *(github.com)*
- [\[css-anchor-position\] Details on "anchors-valid" · Issue #10201 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/10201) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 11 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5136856479039488" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.csswg.org/css-anchor-position-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS position-visibility:anchor{s}-valid" API` — *Core feature API query* (1 returned)
  - `"CSS position-visibility:anchor{s}-valid" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"anchors-valid" OR "anchor-valid" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS position-visibility:anchor{s}-valid" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS position-visibility:anchor{s}-valid" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"position-visibility" ("anchor-valid" OR "anchors-valid") (tutorial OR guide OR "anchor positioning")` — *Discovers web development guides, tutorials, and practical overviews of anchor visibility in CSS Anchor Positioning.* (8 returned)
  - `"position-visibility: anchor-valid" OR "position-visibility: anchors-valid" code example` — *Locates direct CSS implementation snippets and code patterns using the anchor-valid property value.* (8 returned)
  - `site:chromestatus.com OR site:developer.chrome.com "position-visibility" "anchor-valid"` — *Tracks Chrome status announcements, browser implementation timelines, and intent-to-ship records.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "position-visibility" ("anchor-valid" OR "anchors-valid")` — *Finds CSS Working Group specification debates, rename proposals, and edge-case resolutions around default anchor validity.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "anchor-positioning", shared with 8 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "anchor-positioning": Chrome 95.6% passing (stable)*
- **Sources cited by the AI synthesis:** 4 result(s) found — **3 verified relevant**

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
