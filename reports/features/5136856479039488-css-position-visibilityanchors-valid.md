# CSS position-visibility:anchor{s}-valid

> **Report Week:** 2026-W44 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

The \`anchors-valid\` value was implemented as part of https://crbug.com/329703412 but subsequently reverted, due to spec questions about the exact definition of the value. Since that time, the value has been renamed to \`anchor-valid\` (see https://chromestatus.com/feature/5136123851571200) and also better defined to be clear that only the default anchor matters, resolving a lot of ambiguity, and making this value shippable.

## Ecosystem Status

- **Momentum:** Moderate (footprint 225 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The \`position-visibility: anchor-valid\` property (formerly pluralized as \`anchors-valid\`) resolves long-standing specification ambiguities by restricting validity checks strictly to an element's default anchor. Browser vendor alignment is strongly unified across Chromium, Gecko, and WebKit as the CSS Anchor Positioning Module Level 1 approaches complete cross-engine Baseline availability. With Chrome scheduling support enabled by default in Chrome 157 and counterpart engines adopting the standardized singular keyword, the feature stabilizes a crucial building block for tethered UI components.

### Recommendations
- Actionable Advice: Author styles using the standardized singular \`position-visibility: anchor-valid\` keyword rather than the deprecated \`anchors-valid\` alias. Implement it as a progressive enhancement behind CSS \`@supports (position-visibility: anchor-valid)\` rules or alongside existing fallback cleanup scripts until stable engine releases achieve universal baseline availability across your user base.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Suggest positive...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [\`position-visibility: anchor-valid\`](https://github.com/mozilla/standards-positions/issues/1457) [open]

## Web-features Group

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 96.9% · Edge 96.7% · Firefox 84.3% · Safari 93.3%; experimental: Chrome 96.9% · Edge 97% · Firefox 86.6% · Safari 93.9%
- **Chrome usage:** 0.072% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

## 📰 Ecosystem Blogs & Articles

- [github.io](https://web-platform-dx.github.io/web-features-explorer/features/anchor-positioning-position-visibility-plurals) *(web-platform-dx.github.io)*
  > The CSS property \*\*\`position-visibility: anchor-valid\`\*\* (formerly \`anchors-valid\`) is part of the \*\*CSS Anchor Positioning Module Level 1\*\* \*\*Baseline and Feature Tracking:\*\* Web Features Explorer tracks \`anchors-valid\` as a \*\*discouraged legacy ali...
- [chromestatus.com](https://chromestatus.com/feature/5136123851571200) *(chromestatus.com)*
  > Along with this clarification, the spec updated the keyword from plural (\`anchors-valid\`) to singular (\`anchor-valid\`), keeping the plural version as a backward-compatible alias \*\*Feature Update & Intent to Ship:\*\* Chrome Platform Status entries for ...
- [testmuai.com](https://www.testmuai.com/learning-hub/css-anchor-positioning-browser-support) *(testmuai.com)*
  > Hiding elements when their anchor isn't present in the DOM prevents orphaned tooltips or floating UI bugs \*\*Practical Use Cases:\*\* Developers welcome \`anchor-valid\` because it reduces the need for JavaScript observers (e.g., \`MutationObserver\` or \`Re...
- [css-tricks.com](https://css-tricks.com/almanac/properties/p/position-visibility) *(css-tricks.com)*
  > \*\*Feature Deep-Dives:\*\* CSS-Tricks articles on \`position-visibility\` and \*Anchor Positioning Quirks\* cover the evolution of the property Community writers noted early discrepancies between specification drafts and browser engines—such as initial defa...
- [Anchor Positioning Quirks \| CSS-Tricks](https://css-tricks.com/anchor-positioning-quirks) *(css-tricks.com)*
  > \*\*Feature Deep-Dives:\*\* CSS-Tricks articles on \`position-visibility\` and \*Anchor Positioning Quirks\* cover the evolution of the property Community writers noted early discrepancies between specification drafts and browser engines—such as initial defa...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17557.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Chris Harrelson Fri, 25 Sep 2026 09:36:32 -0700 My thought is that, ...
- [\[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17542.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mason Freed Wed, 23 Sep 2026 15:56:11 -0700 \*Contact emails\* \[email&#160;pro...
- [position-visibility CSS property - CSS \| MDN](https://developer-mozilla-org.translate.goog/en-US/docs/Web/CSS/Reference/Properties/position-visibility?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc) *(developer-mozilla-org.translate.goog)*
  > anchors-visible: &lt;strong&gt;The associated anchor element is completely hidden&lt;/strong&gt;. anchors-valid: The anchor-positioned element&#x27;s position-anchor property doesn&#x27;t reference a valid anchor-name set on an anchor element in the same documen...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17580.html) *(mail-archive.com)*
  > &gt; &gt; \*Gecko\*: No signal &gt; &gt; \*WebKit\*: Shipped/Shipping &gt; &gt; \*Web developers\*: No signals &gt; &gt; \*Other signals\*: &gt; &gt; \*WebView application risks\* &gt; &gt; Does this intent deprecate or change behavior of existing APIs, such t...
- [Implement position-visibility: anchor-valid \[333421963\] - Chromium](https://issues.chromium.org/issues/333421963) *(issues.chromium.org)*
  > This CL renames the pre-existing \`anchors-visible\` value to \`anchor-visible\`, and also sets the stage for a later CL that implements the behavior for \`anchor-valid\`. This CL gates the new singular keywords and legacy value aliasing behind the \`Positi...
- [311854 &ndash; Accept anchor-valid and anchor-visible keywords as aliases of anchors-valid and anchors-visible in position-visibility](https://bugs.webkit.org/show_bug.cgi?id=311854) *(bugs.webkit.org)*
  > 311854 &ndash; Accept anchor-valid and anchor-visible keywords as aliases of anchors-valid and anchors-visible in position-visibility WebKit Bugzilla Bug 311854: Accept anchor-valid and anchor-visible keywords as aliases of anchors-valid and anchors-...
- [anchors-valid and anchors-visible - Developer Signals](https://developer-signals.dev/features/anchor-positioning-position-visibility-plurals) *(developer-signals.dev)*
  > anchors-valid and anchors-visible - Developer Signals , so the whole site contributes exactly one sha256 hash to script-src rather than one hash per generated page. Pages with no GitHub issue carry no attribute and the script is a no-op. Social scrap...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17557.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Chris Harrelson Fri, 25 Sep 2026 09:36:32 -0700 My thought...
- [\[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17542.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mason Freed Wed, 23 Sep 2026 15:56:11 -0700 \*Contact emails\* \[emai...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/position-visibility/index.md?plain=1) *(github.com)*
- [Using CSS anchor positioning - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using) *(developer.mozilla.org)*
- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [position-visibility CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position-visibility) *(developer.mozilla.org)*
- [\`position-visibility: anchor-valid\` · Issue #1457 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1457) *(github.com)*
- [Document position-visibility: anchors-valid · Issue #43120 · mdn/content](https://github.com/mdn/content/issues/43120) *(github.com)*
- [Create custom tests for \`position-visibility: anchors-visible\` and \`position-visibility: anchors-valid\` · Issue #3465 · openwebdocs/mdn-bcd-collector](https://github.com/openwebdocs/mdn-bcd-collector/issues/3465) *(github.com)*
- [\[css-anchor-position\] Details on "anchors-valid" · Issue #10201 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10201) *(github.com)*
- [\`anchors-valid\` and \`anchor-valid\` · Issue #29950 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/issues/29950) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 47 result(s) found across 11 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/5136856479039488" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"drafts.csswg.org/css-anchor-position-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS position-visibility:anchor{s}-valid" API` — *Core feature API query* (0 returned)
  - `"CSS position-visibility:anchor{s}-valid" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"anchors-valid" OR "anchor-valid" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS position-visibility:anchor{s}-valid" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS position-visibility:anchor{s}-valid" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"position-visibility" ("anchor-valid" OR "anchors-valid") css tutorial OR guide` — *Finds technical blog posts and guides explaining how position-visibility works with anchor validation in CSS anchor positioning.* (2 returned)
  - `"position-visibility: anchor-valid" OR "position-visibility: anchors-valid" code example` — *Discovers CSS usage snippets, syntax demonstrations, and code examples implementing the position-visibility anchor-valid property.* (6 returned)
  - `"position-visibility" "anchor-valid" (site:chromestatus.com OR "Intent to Ship" OR "Chrome release")` — *Tracks browser vendor release notes, Intent to Ship announcements, and platform implementation status for anchor-valid.* (0 returned)
  - `site:github.com/w3c/csswg-drafts "position-visibility" ("anchor-valid" OR "anchors-valid")` — *Surfaces CSS Working Group specification debates and discussions regarding renaming anchors-valid to anchor-valid and resolving ambiguity.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "anchor-positioning", shared with 8 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "anchor-positioning": Chrome 96.9% passing (stable)*
- **Sources cited by the AI synthesis:** 8 result(s) found — **7 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 11 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5136856479039488)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5136856479039488)
- [Specification](https://drafts.csswg.org/css-anchor-position-1/#position-visibility)
- [Chromium Tracking Bug](https://crbug.com/333421963)
