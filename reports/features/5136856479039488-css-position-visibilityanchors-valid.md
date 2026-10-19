# CSS position-visibility:anchor{s}-valid

> **Report Week:** 2026-W43 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

The \`anchors-valid\` value was implemented as part of https://crbug.com/329703412 but subsequently reverted, due to spec questions about the exact definition of the value. Since that time, the value has been renamed to \`anchor-valid\` (see https://chromestatus.com/feature/5136123851571200) and also better defined to be clear that only the default anchor matters, resolving a lot of ambiguity, and making this value shippable.

## Ecosystem Status

- **Momentum:** High (footprint 355 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The \`position-visibility: anchor-valid\` property value (formerly \`anchors-valid\`) has been stabilized and implemented to automatically hide anchor-positioned elements like tooltips or dropdowns if their default anchor reference cannot be resolved. Following recent spec clarifications resolving ambiguities around multi-anchor definitions, the feature has been successfully shipped in modern browser milestones, driving improved alignment across the CSS Anchor Positioning ecosystem.

### Recommendations
- Actionable Advice: Development teams can start utilizing \`anchor-valid\` with standard feature queries or fallbacks, ensuring they migrate away from any legacy pluralized syntax (\`anchors-valid\`) which has been deprecated.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Suggest positive...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [\`position-visibility: anchor-valid\`](https://github.com/mozilla/standards-positions/issues/1457) [open]

## Web-features Group

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 96.7% · Edge 96.1% · Firefox 84.3% · Safari 93.3%; experimental: Chrome 96.9% · Edge 97% · Firefox 86.6% · Safari 93.7%
- **Chrome usage:** 0.073% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

## 📰 Ecosystem Blogs & Articles

- [position-visibility \| CSS-Tricks](https://css-tricks.com/almanac/properties/p/position-visibility) *(css-tricks.com)*
  > The \`position-visibility\` property is an essential component of the CSS Anchor Positioning module The \`position-visibility\` property is an essential component of the CSS Anchor Positioning module, designed to automatically hide a positioned element (...
- [Anchor positioning \| web.dev](https://web.dev/learn/css/anchor-positioning) *(web.dev)*
  > The \`position-visibility\` property is an essential component of the CSS Anchor Positioning module, designed to automatically hide a positioned element (like a tooltip or dropdown) under specific layout breakdown conditions
- [chromestatus.com](https://chromestatus.com/feature/5136123851571200) *(chromestatus.com)*
  > Following CSS Working Group resolutions, the feature has been officially \*\*renamed to the singular \`anchor-valid\`\*\* Recent entries on Chrome Platform Status map out the renaming from \`anchors-valid\` to \`anchor-valid\` (alongside companion updates to \`...
- [oddbird.net](https://www.oddbird.net/2025/01/29/anchor-position-validity) *(oddbird.net)*
  > Articles tracking CSS Anchor Positioning have continuously highlighted developer frustration when anchors fail silently (e.g., when dynamic content removes an anchor or scope rules fail, leaving floating elements stranded)
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17557.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Chris Harrelson Fri, 25 Sep 2026 09:36:32 -0700 My thought is that, ...
- [\[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17542.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mason Freed Wed, 23 Sep 2026 15:56:11 -0700 \*Contact emails\* \[email&#160;pro...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17586.html) *(mail-archive.com)*
  > On Tuesday, September 29, 2026 at 7:47:40 AM UTC-7 Mason Freed wrote: On Monday, September 28, 2026 at 11:32:35 AM UTC-7 Dan Clark wrote: /&gt; \*Is this feature fully tested by web-platform-tests &lt;https://chromium.googlesource.com/chromium/src/+/m...
- [CSS Anchor Positioning Guide \| CSS-Tricks](https://css-tricks.com/css-anchor-positioning-guide) *(css-tricks.com · 2026-06-04T16:36:22)*
  > &lt;strong&gt;position-visibility: always \| anchors-visible \| no-overflow&lt;/strong&gt;
- [Introducing the CSS anchor positioning API \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/anchor-positioning-api) *(developer.chrome.com)*
  > You have control over these options with this feature. &lt;strong&gt;You use position-visibility: anchors-visible when you want the positioned element to stay in view until the anchor is out of view&lt;/strong&gt;:
- [position-visibility CSS property - CSS \| MDN](https://developer-mozilla-org.translate.goog/en-US/docs/Web/CSS/Reference/Properties/position-visibility?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc) *(developer-mozilla-org.translate.goog)*
  > anchors-visible: &lt;strong&gt;The associated anchor element is completely hidden&lt;/strong&gt;. anchors-valid: The anchor-positioned element&#x27;s position-anchor property doesn&#x27;t reference a valid anchor-name set on an anchor element in the same documen...
- [The CSS anchor positioning API \| CSS and UI \| Chrome for Developers](https://developer.chrome.com/docs/css-ui/anchor-positioning-api) *(developer.chrome.com · 2024-10-04T00:00:00)*
  > You have control over these options with this feature. &lt;strong&gt;You use position-visibility: anchors-visible when you want the positioned element to stay in view until the anchor is out of view&lt;/strong&gt;:
- [Intent to Ship: CSS Anchor Positioning](https://groups.google.com/a/chromium.org/g/blink-dev/c/jGTYNuidPRs/m/qm7Z5qsrAQAJ) *(groups.google.com)*
  > There&#x27;s definitely some forward compat risk here, but we know adoption for these sorts of features tends to be slow before reaching all engines, so I&#x27;m confident in our ability to make small breaking changes as needed as the spec continues ...
- [\[blink-dev\] Re: Intent to Ship: CSS Anchor Positioning](https://www.mail-archive.com/blink-dev@chromium.org/msg09963.html) *(mail-archive.com)*
  > We are &gt; tracking this in crbug.com/333477766 &lt;http://crbug.com/333477766&gt;.We &gt; believe all of these corner cases will not impact early adopters of this &gt; feature, will be backward-compatible, and we also plan to add support for &gt; t...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17566.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \*Gecko\*: No signal &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \*WebKit\*: Shipped/Shipping &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \*Web developers\*: No signals &gt;&gt;&gt;&gt;&gt;&gt; ...
- [Implement position-visibility: anchor-valid \[333421963\] - Chromium](https://issues.chromium.org/issues/333421963) *(issues.chromium.org)*
  > Rename position-visibility:anchors-visible to anchor-visible The CSSWG renamed the \`position-visibility\` property values \`anchors-visible\` and \`anchors-valid\` to the singular \`anchor-visible\` and \`anchor-valid\`, keeping the plural keywords as legacy ...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17581.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; Thanks, &gt;&gt; Mason &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; On Wed, Sep 23, 2026 at 3:56 PM Mason Freed &lt;\[email protected\]&gt; wrote: &gt;&gt; &gt;&gt; \*Contact emails\* &gt;&gt; \[email protected\] &gt;&gt; &gt;&gt; \*Explainer\* &gt;...
- [\`anchor-visible\` and \`anchor-valid\` are missing \[526682332\] - Chromium](https://issues.chromium.org/issues/526682332) *(issues.chromium.org)*
  > This CL renames the pre-existing ... aliasing behind the \`PositionVisibilitySingularValues\` runtime-enabled feature (status: experimental), and adds UseCounters for the three variants (\`anchor-visible\`, \`anchors-visible\`, and \`anchor-valid\`). Bug: 52...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > CL: https://chromium-review.go... window) &lt;strong&gt;The anchors-valid value was implemented as part of https://crbug.com/329703412 but subsequently reverted, due to spec questions about the exact definition of the value&lt;/strong&gt;....
- [Chrome Release 157](https://chromestatuslite.com/?version=157) *(chromestatuslite.com)*
  > &lt;strong&gt;The \`anchors-valid\` value was implemented as part of https://crbug.com/329703412 but subsequently reverted, due to spec questions about the exact definition of the value&lt;/strong&gt;.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17557.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Chris Harrelson Fri, 25 Sep 2026 09:36:32 -0700 My thought...
- [\[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17542.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mason Freed Wed, 23 Sep 2026 15:56:11 -0700 \*Contact emails\* \[emai...
- [csswg-drafts/css-anchor-position-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-anchor-position-1/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-visibility`)*
  > csswg-drafts/css-anchor-position-1/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ...
- [CSS Anchor Positioning Module Level 1](https://www.w3.org/TR/css-anchor-position-1) *(w3.org · 2026-03-27T00:00:00)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-visibility`)*
  > https://www.w3.org/TR/css-anchor-position-1/ Editor&#x27;s Draft: https://&lt;strong&gt;drafts.csswg.org/css-anchor-position-1&lt;/strong&gt;/ History: https://www.w3.org/standards/history/css-anchor-position-1/ Feedback: CSSWG Issues Repository · Inli...
- [1838746 - (css-anchor-position-1) \[META\] \[css-anchor-position-1\] Implement CSS Anchor Positioning](https://bugzilla.mozilla.org/show_bug.cgi?id=1838746) *(bugzilla.mozilla.org)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-visibility`)*
  > 1838746 - (css-anchor-position-1) \[META\] \[css-anchor-position-1\] Implement CSS Anchor Positioning Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advance...
- [CSS Anchor Positioning · Issue #794 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/794) *(github.com · 2023-04-29T10:50:30)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-visibility`)*
  > CSS Anchor Positioning · Issue #794 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh ...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/mdn/browser-compat-data/actions/runs/29490028018) *(github.com)*
- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [csswg-drafts/css-anchor-position-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-anchor-position-1/Overview.bs) *(github.com)*
- [CSS Anchor Positioning Module Level 1](https://www.w3.org/TR/css-anchor-position-1) *(w3.org)*
- [1838746 - (css-anchor-position-1) \[META\] \[css-anchor-position-1\] Implement CSS Anchor Positioning](https://bugzilla.mozilla.org/show_bug.cgi?id=1838746) *(bugzilla.mozilla.org)*
- [CSS Anchor Positioning · Issue #794 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/794) *(github.com)*
- [CSS anchor positioning - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning) *(developer.mozilla.org)*
- [CSS anchor positioning - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning) *(developer.mozilla.org)*
- [Using CSS anchor positioning - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using) *(developer.mozilla.org)*
- [\`position-visibility: anchor-valid\` · Issue #1457 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1457) *(github.com)*
- [Document position-visibility: anchors-valid · Issue #43120 · mdn/content](https://github.com/mdn/content/issues/43120) *(github.com)*
- [\[css-anchor-position\] position-visibility initial value should be \`always\`, not \`anchors-visible\` ? · Issue #10425 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10425) *(github.com)*
- [Rename position-visibility:anchors-visible to anchor-visible by chromium-wpt-export-bot · Pull Request #63021 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63021) *(github.com)*
- [\[css-anchor-position-1\] Initial value of position-visibility should be anchor-visible by tuankiet65 · Pull Request #75580 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/75580) *(github.com)*
- [Implement position-visibility: anchor-valid by chromium-wpt-export-bot · Pull Request #63048 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63048) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 54 result(s) found across 11 planned queries — **31 verified relevant**
  - `"chromestatus.com/feature/5136856479039488" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"drafts.csswg.org/css-anchor-position-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS position-visibility:anchor{s}-valid" API` — *Core feature API query* (1 returned)
  - `"CSS position-visibility:anchor{s}-valid" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"anchors-valid" OR "anchor-valid" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS position-visibility:anchor{s}-valid" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS position-visibility:anchor{s}-valid" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `CSS position-visibility anchor-valid` — *Finds official documentation, specifications, and code examples for the anchor-valid value in CSS anchor positioning.* (8 returned)
  - `CSS position-visibility anchors-valid reverted renamed anchor-valid` — *Searches for release notes, bug tracker discussions, and ecosystem announcements regarding the renaming from anchors-valid to anchor-valid.* (8 returned)
  - `position-visibility anchor-valid tutorial guide CSS anchor positioning` — *Discovers developer blog posts, tutorials, and practical guides demonstrating how to use position-visibility: anchor-valid.* (8 returned)
  - `Chromium bug 329703412 position-visibility anchor-valid` — *Looks up developer discussions and Chromium issues surrounding the implementation challenges and spec updates for the feature.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 7 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "anchor-positioning", shared with 8 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "anchor-positioning": Chrome 96.7% passing (stable)*

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
