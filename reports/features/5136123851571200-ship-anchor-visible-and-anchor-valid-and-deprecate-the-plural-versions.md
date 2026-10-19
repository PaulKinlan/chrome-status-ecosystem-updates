# Ship anchor-visible and anchor-valid, and deprecate the plural versions

> **Report Week:** 2026-W43 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

The CSSWG resolved to rename \`anchors-valid\` --&gt; \`anchor-valid\` \[1\] and \`anchors-visible\` --&gt; \`anchor-visible\` \[2\]. To accomplish this, we'll rename the properties to the singular variants, and add aliases from the plural versions to the singular versions. At a later date, we will remove the plural variants. This chromestatus is only about shipping the new versions, and deprecating the old ones (but not removing them).  \[1\] https://github.com/w3c/csswg-drafts/issues/10201#issuecomment-4180411971 \[2\] https://github.com/w3c/csswg-drafts/issues/10201#issuecomment-4390233490

### Motivation

CSSWG resolved to rename, and to maintain baseline status for anchor positioning, Chrome needs to ship the new names.

## Ecosystem Status

- **Momentum:** Moderate (footprint 260 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chrome 157 ships the rename of CSS anchor positioning properties from \`anchors-valid\` and \`anchors-visible\` to their singular forms, \`anchor-valid\` and \`anchor-visible\`, aligning with CSSWG resolutions. While backward-compatible aliases are temporarily maintained, developers need to transition to the singular syntax to stay aligned with the evolving spec and maintain future-proof codebases.

### Recommendations
- Actionable Advice: Development teams should update their stylesheets to use the new singular properties (\`anchor-valid\` and \`anchor-visible\`) while leveraging the temporary plural aliases for older environments.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 96.7% · Edge 96.1% · Firefox 84.3% · Safari 93.3%; experimental: Chrome 96.9% · Edge 97% · Firefox 86.6% · Safari 93.7%
- **Chrome usage:** 0.073% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

## 📰 Ecosystem Blogs & Articles

- [position-visibility \| CSS-Tricks](https://css-tricks.com/almanac/properties/p/position-visibility) *(css-tricks.com)*
  > Discussions tracked under CSSWG GitHub issues (such as Issue #10201) highlighted the nuance of defining conditional visibility states like \`anchor-valid\` (which dictates how an element behaves if its corresponding anchor reference or \`anchor()\` funct...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17578.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid 'Mason Freed' via blink-dev Tue, 29 Sep 2026 07:48:03 -0700 On Monda...
- [Re: \[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17543.html) *(mail-archive.com)*
  > On Wed, Sep 23, 2026, 2:12 PM Mason ... \`anchors-visible\` --&gt; \`anchor-visible\` \[2\]. To accomplish this, we&#x27;ll &lt;strong&gt;rename the properties to the singular variants, and add aliases from the plural versions to the singular versions&lt;/strong&gt;.....
- [\[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17540.html) *(mail-archive.com)*
  > \*Specification\* https://drafts... \`anchors-visible\` --&gt; \`anchor-visible\` \[2\]. To accomplish this, we&#x27;ll &lt;strong&gt;rename the properties to the singular variants, and add aliases from the plural versions to the singular versions&lt;/strong&gt;....
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17557.html) *(mail-archive.com)*
  > My thought is that, because Firefox doesn&#x27;t ship anchor-valid yet, it seems helpful to just file the positions request to encourage interop on this subfeature. Especially since this feature came a bit later than the others due to additional spec...
- [Introducing the CSS anchor positioning API \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/anchor-positioning-api) *(developer.chrome.com)*
  > You have control over these options with this feature. &lt;strong&gt;You use position-visibility: anchors-visible when you want the positioned element to stay in view until the anchor is out of view&lt;/strong&gt;:
- [The CSS anchor positioning API \| CSS and UI \| Chrome for Developers](https://developer.chrome.com/docs/css-ui/anchor-positioning-api) *(developer.chrome.com · 2024-10-04T00:00:00)*
  > You have control over these options with this feature. &lt;strong&gt;You use position-visibility: anchors-visible when you want the positioned element to stay in view until the anchor is out of view&lt;/strong&gt;:
- [CSS Anchor Positioning: Scoping, Implicit Anchors, and Conditional Hiding - Schalk Neethling - Open Web Engineer](https://schalkneethling.com/posts/css-anchor-positioning-scoping-implicit-anchors-and-conditional-hiding) *(schalkneethling.com · 2026-02-21T00:00:00)*
  > The key word is completely: if ... it is hidden. anchors-valid — &lt;strong&gt;If any required anchor references do not resolve to an actual anchor element, hide the positioned element&lt;/strong&gt;....
- [position-visibility \| CSS CSS Properties](https://modern-css.com/reference/properties/position-visibility) *(modern-css.com)*
  > For example, you can &lt;strong&gt;hide a tooltip if its anchor is scrolled out of view&lt;/strong&gt;. .tooltip { /\* Hide the tooltip if the button it&#x27;s attached to is scrolled off-screen \*/ position-visibility: anchors-visible; }
- [Implement position-visibility: anchor-valid \[333421963\] - Chromium](https://issues.chromium.org/issues/333421963) *(issues.chromium.org)*
  > Rename position-visibility:anchors-visible to anchor-visible The CSSWG renamed the \`position-visibility\` property values \`anchors-visible\` and \`anchors-valid\` to the singular \`anchor-visible\` and \`anchor-valid\`, keeping the plural keywords as legacy ...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > The CSSWG resolved to rename anchors-valid --&gt; anchor-valid \[1\] and anchors-visible --&gt; anchor-visible \[2\]. To accomplish this, we&#x27;ll &lt;strong&gt;rename the properties to the singular variants, and add aliases from the plural versions to the s...
- [Re: \[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17544.html) *(mail-archive.com)*
  > &gt; LGTM2 &gt; On 9/23/26 5:30 p.m., ... singular variants, and add aliases from the &gt;&gt; plural versions to the singular versions. &lt;strong&gt;At a later date, we will remove &gt;&gt; the plural variants&lt;/strong&gt;. This chromestatus is only about sh...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17586.html) *(mail-archive.com)*
  > Thanks, Mason On Wed, Sep 23, 2026 at 3:56 PM Mason Freed &lt;\[email protected\]&gt; wrote: \*Contact emails\* \[email protected\] \*Explainer\* /No information provided/ \*Specification\* https://drafts.csswg.org/css-anchor-position-1/#position-visibility \*S...
- [CSS Anchor Positioning Module Level 1](https://drafts.csswg.org/css-anchor-position) *(drafts.csswg.org)*
  > Significant changes since the 27 March 2026 Working Draft: Defined anchor-valid to (like anchor-valid) only check the default anchor box. (Issue 10201) &lt;strong&gt;Renamed anchors-valid and anchors-visible to anchor-valid and anchor-visible since they on...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17578.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136123851571200`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid 'Mason Freed' via blink-dev Tue, 29 Sep 2026 07:48:03 -070...
- [Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30757) *(github.com)* *(Cites: `https://chromestatus.com/feature/5136123851571200`)*
  > Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ta...
- [csswg-drafts/css-anchor-position-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-anchor-position-1/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-visibility`)*
  > csswg-drafts/css-anchor-position-1/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ...

## 📚 Platform Documentation & Specifications

- [CSS Anchor Positioning Module Level 1](https://www.w3.org/TR/css-anchor-position-1) *(w3.org)*
- [\[css-anchor-position\] Details on "anchors-valid" · Issue #10201 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10201) *(github.com)*
- [Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30757) *(github.com)*
- [csswg-drafts/css-anchor-position-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-anchor-position-1/Overview.bs) *(github.com)*
- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [position-visibility CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position-visibility) *(developer.mozilla.org)*
- [\[css-anchor-position\] position-visibility initial value should be \`always\`, not \`anchors-visible\` ? · Issue #10425 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10425) *(github.com)*
- [\`position-visibility: anchor-valid\` · Issue #1457 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1457) *(github.com)*
- [Rename position-visibility:anchors-visible to anchor-visible by chromium-wpt-export-bot · Pull Request #63021 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63021) *(github.com)*
- [\[css-anchor-position-1\] position-visibility: anchors-visible should be clear about when is visibility determined · Issue #12732 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12732) *(github.com)*
- [\[css-anchor-position-1\] anchors-visible still needs more details · Issue #13176 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13176) *(github.com)*
- [\[css-anchor-position\] The "acceptable anchor" algo seems broken · Issue #11030 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11030) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 65 result(s) found across 11 planned queries — **26 verified relevant**
  - `"chromestatus.com/feature/5136123851571200" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"drafts.csswg.org/css-anchor-position-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Ship anchor-visible and anchor-valid, and deprecate the plural versions" API` — *Core feature API query* (0 returned)
  - `"Ship anchor-visible and anchor-valid, and deprecate the plural versions" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"anchors-valid" OR "anchor-valid" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Ship anchor-visible and anchor-valid, and deprecate the plural versions" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Ship anchor-visible and anchor-valid, and deprecate the plural versions" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `css anchor-visible anchor-valid tutorial guide` — *Finds developer blog posts and practical tutorials on using the new anchor-visible and anchor-valid CSS properties.* (8 returned)
  - `css position-visibility anchor-visible anchor-valid examples` — *Discovers real-world CSS code examples showing position-visibility and the updated singular anchor property names.* (8 returned)
  - `chromestatus anchor-visible anchor-valid deprecate plural` — *Tracks browser status announcements and ecosystem adoption regarding the renaming of anchors-visible to anchor-visible.* (8 returned)
  - `w3c csswg-drafts anchor-visible anchor-valid css-anchor-position` — *Locates community discussions and specification details regarding the CSSWG resolution on anchor positioning.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 4 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "anchor-positioning", shared with 8 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "anchor-positioning": Chrome 96.7% passing (stable)*

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
