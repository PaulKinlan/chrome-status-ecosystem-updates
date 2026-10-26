# Use scroll-snap-type: pair to snap to a single element

> **Report Week:** 2026-W44 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

https://github.com/w3c/csswg-drafts/issues/9519  Add a "pair" keyword to scroll-snap-type. If used, when the container scroll snaps to an element on one axis, it should snap to the same element on the other axis. In the existing spec, the "both" keyword allows the scroll container to select snap targets in X and Y axes independently and snap to different targets.

### Motivation

See explainer

## Ecosystem Status

- **Momentum:** Moderate (footprint 213 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Introduced via the CSS Working Group and enabled by default in Chrome 156, 'scroll-snap-type: pair' solves a longstanding 2D scrolling flaw by locking snap points on both axes to a single target element rather than evaluating axes independently. Developer reception is enthusiastic because it eliminates clumsy diagonal misalignments in 2D panning surfaces like maps, game boards, and image matrices without requiring complex JavaScript scroll interception. Cross-engine consensus is robust, with WebKit formally supporting the addition and Mozilla engineers expressing positive alignment during ongoing review.

### Recommendations
- Actionable Advice: Teams should adopt 'scroll-snap-type: pair' as a progressive enhancement today by declaring 'both' as a fallback or wrapping rules in a CSS '@supports (scroll-snap-type: pair)' query. For mission-critical 2D canvas navigation where unified element lock-in is mandatory across all platforms, maintain polyfilling or JS-assisted scroll positioning until WebKit and Firefox ship implementations.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."
- Standards Activity (Mozilla): Latest discussion from @theres-waldo: "&gt; I think this seems reasonable but I'd like \[@hiikezoe\](https://github.com/hiikezoe) / \[@theres-waldo\](https://github.com/theres-waldo) to take a loo..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "What’s new in Chrome 156. CSS gains the random() function, the :navigation-source pseudo-class for the element that star" (1 points, 0 comments).

## Standards Positions

- **WebKit:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/WebKit/standards-positions/issues/716) [closed]
- **Mozilla:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/mozilla/standards-positions/issues/1448) [open]

## Web-features Group

*group-level data: web-features [`scroll-snap`](https://webstatus.dev/features/scroll-snap), shared with 4 other ChromeStatus features*

- Share of tests passing in the web-features group `scroll-snap` on [wpt.fyi](https://wpt.fyi/results?q=feature:scroll-snap) (via webstatus.dev) — stable: Chrome 91% · Edge 89.3% · Firefox 84.2% · Safari 70.6%; experimental: Chrome 97.2% · Edge 95.5% · Firefox 84.2% · Safari 76.8%
- **Chrome usage:** 0.2% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/59))

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [What’s new in Chrome 156. CSS gains the random() function, the :navigation-source pseudo-class for the element that star](https://twitter.com/webstandardsdev/status/2112846568810246470) — *by @webstandardsdev, 1 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Новинки Chrome 156. В CSS появились функция random(), псевдокласс :navigation-source для элемента, запустившего навигаци](https://twitter.com/webstandards_ru/status/2112846514766713029) — *by @webstandards\_ru, 2 likes/RTs, 1 replies*

## 📰 Ecosystem Blogs & Articles

- [web.dev](https://web.dev/blog/web-platform-09-2026?hl=en) *(web.dev)*
  > Featured in Google’s \*New to the web platform\* beta wrap-ups alongside companion features like single-axis scroll containers (\`overflow: scroll clip\`) and native CSS \`random()\`
- [chromegeek.com](https://www.chromegeek.com/chrome-156-stable-whats-new) *(chromegeek.com)*
  > Featured in Google’s \*New to the web platform\* beta wrap-ups alongside companion features like single-axis scroll containers (\`overflow: scroll clip\`) and native CSS \`random()\`
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > Chromium officially implemented and launched \`scroll-snap-type: pair\` in \*\*Chrome 156\*\* Chrome's release notes detail the transition away from independent axis selection, noting that front-end teams building 2D panning canvases no longer have to rely...
- [appauxin.com](https://appauxin.com/chrome-156-release-date-features) *(appauxin.com)*
  > Chrome's release notes detail the transition away from independent axis selection, noting that front-end teams building 2D panning canvases no longer have to rely on JavaScript scroll-interception scripts to achieve 2D lock-in Independent developer o...
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > Polypane highlighted the feature under its Chromium feature tracking, explaining how \`pair\` eliminates edge cases when dealing with non-uniform grid layouts where items do not conform to tidy, rigid columns and rows
- [gigazine.net](https://gigazine.net/gsc_news/en/20261021-google-chrome-156) *(gigazine.net)*
  > Independent developer outlets summarizing browser updates frequently highlight \`scroll-snap-type: pair\` as a top CSS quality-of-life improvement Commentators note that combining \`scroll-snap-type: pair\` with the new single-axis overflow clip (\`overfl...
- [nwjs.io](https://nwjs.io/blog/v0.119.0) *(nwjs.io)*
  > Commentators note that combining \`scroll-snap-type: pair\` with the new single-axis overflow clip (\`overflow: scroll clip\`) finally makes complex scroll ports—such as sticky-header multi-directional dashboards and canvas-like views—fully feasible in p...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17535.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Rick Byers Wed, 23 Sep 2026 08:29:51 -...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Chromestatus Tue, 22 Sep 2026 09:13:43 -0700 C...
- [\[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17244.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Chromestatus Thu, 20 Aug 2026 13:21:...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17536.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Tue, Sep 22, 2026 ...ts.csswg.org/css-scroll-snap-1 &gt;&gt; &gt;&gt; \*Summary\* &gt;&gt; https://github.com/w3c/csswg-drafts/issues/9519 &lt;strong&gt;Add a &quot;pair&quot; keyword to &gt;&gt; scroll-snap-type&lt;/strong&gt;....

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17535.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Rick Byers Wed, 23 Sep 2026 ...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Chromestatus Tue, 22 Sep 2026 09:13:...
- [\[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17244.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Chromestatus Thu, 20 Aug 2...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/w3c/csswg-drafts/issues/9519) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/716) *(github.com)*
- [Scroll snap to a single element with scroll-snap-type: pair · Issue #1438 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1438) *(github.com)*
- [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element · Issue #1448 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1448) *(github.com)*
- [Other Spec Review: Add keyword "pair" to scroll-snap-type for snapping to the same element in X and Y axes · Issue #1271 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1271) *(github.com)*
- [scroll-snap-pair · Issue #4461 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4461) *(github.com)*
- [scroll-snap-type CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 43 result(s) found across 12 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5124378896498688" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/explainers-by-googlers/scroll-snap-type-pair" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"drafts.csswg.org/css-scroll-snap-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" API` — *Core feature API query* (5 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"github.com" OR "scroll-snap-type" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (0 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"scroll-snap-type: pair" OR ("scroll-snap-type" "pair") tutorial OR guide OR explainer` — *Find developer tutorials, blog posts, and guides explaining the difference between scroll-snap-type pair and both.* (7 returned)
  - `"scroll-snap-type: pair" OR "scroll-snap-type: pair mandatory" codepen OR github` — *Locate real-world CSS snippets, demos, and code samples using the new pair snap keyword.* (8 returned)
  - `"scroll-snap-type" "pair" site:chromestatus.com OR "Intent to Prototype" OR "Intent to Ship"` — *Track browser adoption, implementation timelines, and engine intent-to-ship threads.* (2 returned)
  - `"scroll-snap-type" "pair" site:github.com/w3c/csswg-drafts/issues/9519 OR "explainers-by-googlers/scroll-snap-type-pair"` — *Discover standard committee discussions, developer feedback, and specification debates on 2D single-element snapping.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "scroll-snap", shared with 4 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "scroll-snap": Chrome 91% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 3 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5124378896498688)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5124378896498688)
- [Specification](https://drafts.csswg.org/css-scroll-snap-1)
- [Chromium Tracking Bug](https://crbug.com/542706103)
