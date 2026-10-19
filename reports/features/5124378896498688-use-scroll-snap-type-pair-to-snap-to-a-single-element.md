# Use scroll-snap-type: pair to snap to a single element

> **Report Week:** 2026-W43 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

https://github.com/w3c/csswg-drafts/issues/9519  Add a "pair" keyword to scroll-snap-type. If used, when the container scroll snaps to an element on one axis, it should snap to the same element on the other axis. In the existing spec, the "both" keyword allows the scroll container to select snap targets in X and Y axes independently and snap to different targets.

### Motivation

See explainer

## Ecosystem Status

- **Momentum:** Moderate (footprint 300 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The \`scroll-snap-type: pair\` keyword resolves a longstanding CSS Scroll Snap limitation where \`both\` evaluates horizontal and vertical axes independently, potentially snapping to two disparate targets. By treating multi-axis snap targets as unified 2D coordinates, \`pair\` guarantees the scroller locks onto the same element across both dimensions. Chromium is shipping the feature enabled by default in Chrome 156 with upstreamed Web Platform Tests, while broad multi-engine consensus is forming.

### Recommendations
- Actionable Advice: Adopt \`scroll-snap-type: pair\` as a progressive enhancement by cascading it after \`scroll-snap-type: both\` or wrapping it in a \`@supports (scroll-snap-type: pair)\` query. Maintain standard two-axis snapping fallbacks for non-Chromium browsers until cross-vendor implementations land.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."
- Standards Activity (Mozilla): Latest discussion from @theres-waldo: "&gt; I think this seems reasonable but I'd like \[@hiikezoe\](https://github.com/hiikezoe) / \[@theres-waldo\](https://github.com/theres-waldo) to take a loo..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/WebKit/standards-positions/issues/716) [closed]
- **Mozilla:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/mozilla/standards-positions/issues/1448) [open]

## Web-features Group

*group-level data: web-features [`scroll-snap`](https://webstatus.dev/features/scroll-snap), shared with 4 other ChromeStatus features*

- Share of tests passing in the web-features group `scroll-snap` on [wpt.fyi](https://wpt.fyi/results?q=feature:scroll-snap) (via webstatus.dev) — stable: Chrome 85.3% · Edge 83.6% · Firefox 84.2% · Safari 70.6%; experimental: Chrome 97.2% · Edge 95.5% · Firefox 84.2% · Safari 77.4%
- **Chrome usage:** 0.2% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/59))

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > \*\*Chrome Platform Status & Chrome 156 Release:\*\* Chromium tracked the feature under \*"Use scroll-snap-type: pair to snap to a single element"\*
- [appspot.com](https://chromiumdash.appspot.com/commit/a216248c97fbbd39bffa5780515af8d50f6d53cb) *(chromiumdash.appspot.com)*
  > Chromium enabled this by default in Chrome 156, and tests were upstreamed directly to Web Platform Tests (WPT)
- [appspot.com](https://cr-status.appspot.com) *(cr-status.appspot.com)*
  > Chromium enabled this by default in Chrome 156, and tests were upstreamed directly to Web Platform Tests (WPT)
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com)*
  > \*\*Microsoft Edge 156 Web Platform Notes:\*\* Edge’s developer release documentation for version 156 listed \`scroll-snap-type: pair\` alongside other modern scrolling additions (such as single-axis scroll container enhancements)
- [developer-signals.dev](https://developer-signals.dev/interop/proposals/1438) *(developer-signals.dev)*
  > \*\*Interop 2027 Proposals & Developer Signals:\*\* Submitted as a focus candidate for Interop 2027 under the WebDX Community Group Developer Signals repo, indicating developer priority for getting uniform multi-engine support across Blink, Gecko, and We...
- [testmuai.com](https://www.testmuai.com/learning-hub/css-scroll-snap-browser-support) *(testmuai.com)*
  > Developer blogs highlighting CSS-only patterns welcomed \`pair\` as a native replacement \*\*Adoption Caveat:\*\* Because \`pair\` is an extension to CSS Scroll Snap Level 1, progressive enhancement via \`@supports (scroll-snap-type: pair mandatory)\` or a fal...
- [youtube.com](https://www.youtube.com/watch?v=hd_w4Jwiils) *(youtube.com)*
  > Developer blogs highlighting CSS-only patterns welcomed \`pair\` as a native replacement
- [chrome.com](https://developer.chrome.com/blog/scroll-snap-events) *(developer.chrome.com)*
  > \*\*Synergy with JavaScript Snap Events:\*\* With the introduction of built-in scroll snap events (\`scrollSnapChange\` and \`scrollSnapChanging\`), developers faced confusion when listening to snapped elements in \`both\`-axis scrollers because two distinct t...
- [googleusercontent.com](https://doc-2gh0-0gig-issuetracker.googleusercontent.com/issues/543284190/resources) *(doc-2gh0-0gig-issuetracker.googleusercontent.com)*
  > Ecosystem commentary notes that \`scroll-snap-type: pair\` makes scroll-state queries and snap events predictable by ensuring a single active snapped node
- [searchfox.org](https://searchfox.org/firefox-main/source/testing/web-platform/meta/css/css-scroll-snap/scroll-snap-type-pair-002.html.ini) *(searchfox.org)*
  > \*\*Adoption Caveat:\*\* Because \`pair\` is an extension to CSS Scroll Snap Level 1, progressive enhancement via \`@supports (scroll-snap-type: pair mandatory)\` or a fallback to \`scroll-snap-type: both mandatory\` is recommended until all major browser rend...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17535.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Rick Byers Wed, 23 Sep 2026 08:29:51 -...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Chromestatus Tue, 22 Sep 2026 09:13:43 -0700 C...
- [\[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17244.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Chromestatus Thu, 20 Aug 2026 13:21:...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17536.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Tue, Sep 22, 2026 ...ts.csswg.org/css-scroll-snap-1 &gt;&gt; &gt;&gt; \*Summary\* &gt;&gt; https://github.com/w3c/csswg-drafts/issues/9519 &lt;strong&gt;Add a &quot;pair&quot; keyword to &gt;&gt; scroll-snap-type&lt;/strong&gt;....
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17539.html) *(mail-archive.com)*
  > &gt; LGTM2 &gt; &gt; On Wednesday, September ...csswg.org/css-scroll-snap-1 &gt;&gt;&gt; &gt;&gt;&gt; \*Summary\* &gt;&gt;&gt; https://github.com/w3c/csswg-drafts/issues/9519 &lt;strong&gt;Add a &quot;pair&quot; keyword to &gt;&gt;&gt; scroll-snap-type&lt;/stro...
- [Chrome Platform Status](https://img544-dot-cr-status.appspot.com/feature/5124378896498688) *(img544-dot-cr-status.appspot.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [scroll-snap-pair · Issue #4461 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4461) *(github.com · 2026-10-01T21:55:02)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > scroll-snap-pair · Issue #4461 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17535.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Rick Byers Wed, 23 Sep 2026 ...
- [Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30754) *(github.com)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Chromestatus Tue, 22 Sep 2026 09:13:...
- [\[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17244.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Chromestatus Thu, 20 Aug 2...
- [csswg-drafts/css-scroll-snap-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-scroll-snap-1/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-scroll-snap-1`)*
  > csswg-drafts/css-scroll-snap-1/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refr...
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/css-scroll-snap-1) *(w3.org · 2021-03-11T00:00:00)* *(Cites: `https://drafts.csswg.org/css-scroll-snap-1`)*
  > https://www.w3.org/TR/css-scroll-snap-1/ Editor&#x27;s Draft: https://&lt;strong&gt;drafts.csswg.org/css-scroll-snap-1&lt;/strong&gt;/ Previous Versions: https://www.w3.org/TR/2019/CR-css-scroll-snap-1-20190319/ https://www.w3.org/TR/2019/CR-css-scroll...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/w3c/csswg-drafts/issues/9519) *(github.com)*
- [scroll-snap-type CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-snap-type) *(developer.mozilla.org)*
- [github.com](https://github.com/WebKit/standards-positions/issues/716) *(github.com)*
- [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element · Issue #1448 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1448) *(github.com)*
- [Scroll snap to a single element with scroll-snap-type: pair · Issue #1438 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1438) *(github.com)*
- [scroll-snap-pair · Issue #4461 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4461) *(github.com)*
- [Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30754) *(github.com)*
- [csswg-drafts/css-scroll-snap-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-scroll-snap-1/Overview.bs) *(github.com)*
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/css-scroll-snap-1) *(w3.org)*
- [Other Spec Review: Add keyword "pair" to scroll-snap-type for snapping to the same element in X and Y axes · Issue #1271 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1271) *(github.com)*
- [Explainers by Googlers · GitHub](https://github.com/explainers-by-googlers) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 61 result(s) found across 12 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5124378896498688" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/explainers-by-googlers/scroll-snap-type-pair" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"drafts.csswg.org/css-scroll-snap-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" API` — *Core feature API query* (5 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"github.com" OR "scroll-snap-type" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (0 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"scroll-snap-type" pair tutorial OR guide CSS` — *Searches for developer blog posts, tutorials, and practical guides explaining the scroll-snap-type pair feature.* (8 returned)
  - `CSS "scroll-snap-type" pair example code` — *Finds CSS code snippets and syntax usage for scroll-snap-type with the pair keyword.* (8 returned)
  - `"scroll-snap-type" pair chromestatus OR "intent to" OR caniuse` — *Tracks browser vendor implementation status, Intent to Ship, and support for scroll-snap-type: pair.* (8 returned)
  - `"scroll-snap-type" pair site:github.com/w3c/csswg-drafts OR site:github.com/explainers-by-googlers` — *Finds specification discussions, issue threads, and explainers regarding snapping to a single element using pair.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **15 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "scroll-snap", shared with 4 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "scroll-snap": Chrome 85.3% passing (stable)*
- **Sources cited by the AI synthesis:** 8 result(s) found — **7 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 3 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5124378896498688)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5124378896498688)
- [Specification](https://drafts.csswg.org/css-scroll-snap-1)
- [Chromium Tracking Bug](https://crbug.com/542706103)
