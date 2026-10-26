# Single-axis scroll containers

> **Report Week:** 2026-W44 | **Milestone:** Chrome 156 (first listed in Chrome 154) | **Category:** Enabled by default

## Overview

Extends the \`overflow\` property to support scrollable values together with \`clip\` (for example, \`overflow: scroll clip\`). This allows \`position: sticky\` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using \`overflow: clip\` stays in place.

### Motivation

The CSS \`overflow\` property currently allows behavior to be specified per axis, but it does not provide a way to make a scroll container responsible for only a single axis. The affects features that depend on scroll containers, namely \`position: sticky\` and DOM scroll APIs.  For example, authors may want to use \`position: sticky\` to create a table that keeps both the top and left labels in view while the user scrolls through large content. Or they may want to create a carousel that is visually clipped on one axis, while ensuring that \`scrollIntoView()\` does not unexpectedly move that clipped axis.  Please see the explainer for more details.

## Ecosystem Status

- **Momentum:** Moderate (footprint 285 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Single-axis scroll containers allow authors to pair scrollable values with clip (such as \`overflow: auto clip\`), preventing CSS engines from coercing the non-scrolling axis into a scroller and resolving a long-standing constraint for \`position: sticky\` and DOM scroll APIs. The feature shipped enabled by default in Chromium and Microsoft Edge 156 following CSS Working Group consensus and a satisfied W3C TAG review. However, cross-browser availability remains uneven as Gecko and WebKit implementations have not yet shipped.

### Recommendations
- Actionable Advice: Teams should avoid using \`@supports (overflow: scroll clip)\` to gate styles, as older browsers parse the syntax validly before coercing the axis into an implicit scrollport. Until the new \`@supports named-feature(single-axis-scroll-container)\` or Safari and Firefox catch up, gate enhancements using a lightweight JavaScript runtime probe (verifying that \`scrollTop\` cannot be set on the clipped axis) while preserving standard fallback scrolling wrappers.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @freedebreuil: "&gt; How does this play with touch-action?  Thanks, good point. I think the right model is that scroll containers are now per-axis. For \`touch-action\`, t..."
- Standards Activity (W3C TAG): Latest discussion from @lukewarlow: "Hi @freedebreuil the TAG has discussed this and we're satisfied with this change.  Thanks for flying TAG..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/680) [open]
- **Mozilla:** [Single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1418) [open]
- **W3C TAG:** [Other Spec Review: Single-Axis Scroll Containers](https://github.com/w3ctag/design-reviews/issues/1222) [closed]

## Web-features Group

*group-level data: web-features [`overflow`](https://webstatus.dev/features/overflow), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `overflow` on [wpt.fyi](https://wpt.fyi/results?q=feature:overflow) (via webstatus.dev) — stable: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%; experimental: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%
- **Chrome usage:** 0.1% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/190))

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/blog/single-axis-scroll-containers-ready-for-testing) *(developer.chrome.com)*
  > Historically in CSS, true single-axis scroll containers did not exist If you specified a scrollable value (\`auto\`, \`scroll\`, or \`hidden\`) on one axis and left the other as \`visible\` or \`clip\`, CSS layout engines automatically coerced the non-scrollin...
- [river.me](https://blog.river.me/single-axis-scroll) *(blog.river.me)*
  > \*\*Breaking \`position: sticky\` across axes:\*\* A descendant element could not stick to an outer scroll container (like the page/viewport) vertically while sticking horizontally inside a local table wrapper \*\*Article:\*\* \*"Single-axis scroll containers –...
- [CSS position: sticky now sticks to the nearest scroller on a per axis basis! – Bram.us](https://www.bram.us/2026/03/30/css-sticky-per-axis) *(bram.us)*
  > This unlocks per-axis \`position: sticky\` evaluation, where an element's vertical stickiness can skip the local container and resolve against an ancestor scroller \*\*Article:\*\* \*"CSS position: sticky now sticks to the nearest scroller on a per axis bas...
- [modern-css.com](https://modern-css.com/sticky-rows-and-columns-without-javascript) *(modern-css.com)*
  > This unlocks per-axis \`position: sticky\` evaluation, where an element's vertical stickiness can skip the local container and resolve against an ancestor scroller \*\*Articles:\*\* \*"TWO AXES: the sticky element that could not pick a scroller"\* and \*"Two-...
- [localenhance.com](https://labs.localenhance.com/labs/two-axes) *(labs.localenhance.com)*
  > \*\*Articles:\*\* \*"TWO AXES: the sticky element that could not pick a scroller"\* and \*"Two-Axis Sticky: Sticky Row and Column in the Same Table"\* Benchmarks the performance improvement over JavaScript workarounds
- [reddit.com](https://www.reddit.com/r/Frontend/comments/1tukmmq/css_position_sticky_now_sticks_to_the_nearest) *(reddit.com)*
  > The reaction across frontend communities (Reddit, GitHub, Mastodon/Twitter) has been overwhelmingly positive toward eliminating these workarounds
- [tildes.net](https://tildes.net/~comp/1waf/single_axis_scroll_has_been_adopted_into_the_css_spec_and_will_be_supported_in_chromium_soon) *(tildes.net)*
  > \*\*Progressive Enhancement:\*\* Because \`overflow: auto clip\` gracefully degrades to standard 2-value overflow support or falls back to standard clipping in older browsers, early adopters are already creating progressive fallbacks using \`@supports (over...
- [\[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg16097.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Chromestatus Mon, 16 Mar 2026 07:3...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Chris Harrelson Wed, 19 Aug 2026 07:31:33 -0700 LGTM3 On Wed, Aug 19, 2026, 7:28...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Single-axis scroll containers Chromestatus Tue, 11 Aug 2026 11:26:13 -0700 Contact emails \[email&#160;protected\] Explainer htt...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Alex Russell Mon, 17 Aug 2026 11:59:23 -0700 Hey Free, Dan and I were reviewing this Int...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug 2026 14:06:10 -0700 Contact e...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17200.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; \*Blink component\* &gt;&gt; Blink&gt;Layout ... a way to make a scroll container responsible &gt;&gt; for only a single axis. The affects features that depend on scroll &gt;&gt; containers, namely \`position: sticky\` and DOM scroll AP...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17374.html) *(mail-archive.com)*
  > This allows \`position: sticky\` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using \`overflow: clip\` stays in place.
- [Chrome 153 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/153) *(developer.chrome.com · 2026-09-08T00:00:00)*
  > Single-axis scroll containers, the scroll-axis-lock property, capability elements, and more.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg16097.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5067363861004288`)*
  > \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Chromestatus Mon, 16 Mar...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Chris Harrelson Wed, 19 Aug 2026 07:31:33 -0700 LGTM3 On Wed, Aug 19, ...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > \[blink-dev\] Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Single-axis scroll containers Chromestatus Tue, 11 Aug 2026 11:26:13 -0700 Contact emails \[email&#160;protected\] Exp...
- [design-reviews#1222: Other Spec Review: Single-Axis Scroll Containers](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1222) *(tag-github-bot.w3.org)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > https://&lt;strong&gt;github.com/explainers-by-googlers/single-axis-scroll-containers&lt;/strong&gt; ·
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Alex Russell Mon, 17 Aug 2026 11:59:23 -0700 Hey Free, Dan and I were reviewin...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug 2026 14:06:10 -0700...

## 📚 Platform Documentation & Specifications

- [Other Spec Review: Single-Axis Scroll Containers · Issue #1222 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1222) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow) *(developer.mozilla.org)*
- [design-reviews#1222: Other Spec Review: Single-Axis Scroll Containers](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1222) *(tag-github-bot.w3.org)*
- [Single-axis scroll containers · Issue #1436 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1436) *(github.com)*
- [GitHub - ics-creative/261112\_single\_axis\_scroll\_containers · GitHub](https://github.com/ics-creative/261112_single_axis_scroll_containers) *(github.com)*
- [Other Spec Review: Scroll snap for single-axis scroll container · Issue #1266 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1266) *(github.com)*
- [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers · Issue #1445 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1445) *(github.com)*
- [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers #14018 by lcdavid94 · Pull Request #14354 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/pull/14354) *(github.com)*
- [Explainers by Googlers · GitHub](https://github.com/explainers-by-googlers) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 61 result(s) found across 12 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/5067363861004288" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/explainers-by-googlers/single-axis-scroll-containers" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"github.com/w3c/csswg-drafts/pull/13903" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Single-axis scroll containers" API` — *Core feature API query* (8 returned)
  - `"Single-axis scroll containers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"scrollintoview()" OR "single-axis" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Single-axis scroll containers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Single-axis scroll containers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"single-axis scroll containers" CSS (tutorial OR guide OR explainer)` — *Discovers developer tutorials, practical guides, and conceptual explanations of single-axis scroll containers.* (7 returned)
  - `CSS ("overflow: scroll clip" OR "overflow: clip scroll" OR "overflow: auto clip") "position: sticky"` — *Finds code snippets, stylesheets, and real-world implementation examples using the new two-value overflow syntax with clip and scrollable values.* (8 returned)
  - `"Single-axis scroll containers" ("intent to" OR chromestatus OR WebKit OR "standards-positions")` — *Tracks browser vendor consensus, Intent to Prototype/Ship threads, and standard adoption status across Chrome, Firefox, and WebKit.* (8 returned)
  - `"single-axis scroll containers" site:github.com/w3c/csswg-drafts OR site:github.com/explainers-by-googlers` — *Surfaces specification discussions, issue feedback, and design deliberations in the CSS Working Group and Google explainers repository.* (7 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "overflow", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "overflow": Chrome 100% passing (stable)*
- **Sources cited by the AI synthesis:** 8 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5067363861004288)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5067363861004288)
- [Specification](https://github.com/w3c/csswg-drafts/pull/13903)
- [Chromium Tracking Bug](https://issues.chromium.org/440038212)
