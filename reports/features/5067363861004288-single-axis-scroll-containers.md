# Single-axis scroll containers

> **Report Week:** 2026-W42 | **Milestone:** Chrome 156 (first listed in Chrome 154) | **Category:** Enabled by default

## Overview

Extends the \`overflow\` property to support scrollable values together with \`clip\` (for example, \`overflow: scroll clip\`). This allows \`position: sticky\` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using \`overflow: clip\` stays in place.

### Motivation

The CSS \`overflow\` property currently allows behavior to be specified per axis, but it does not provide a way to make a scroll container responsible for only a single axis. The affects features that depend on scroll containers, namely \`position: sticky\` and DOM scroll APIs.  For example, authors may want to use \`position: sticky\` to create a table that keeps both the top and left labels in view while the user scrolls through large content. Or they may want to create a carousel that is visually clipped on one axis, while ensuring that \`scrollIntoView()\` does not unexpectedly move that clipped axis.  Please see the explainer for more details.

## Ecosystem Status

- **Momentum:** Moderate (footprint 225 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Single-axis scroll containers extend the CSS overflow property to pair scrollable values with clip (such as \`overflow: auto clip\`), preventing the browser from coercing the clipped axis into a two-dimensional scroller. Shipped by Chromium and endorsed by a closed W3C TAG design review, the specification directly addresses a decade-old CSS Working Group bottleneck that broke directional sticky positioning and DOM scroll APIs. While cross-browser interoperability awaits official Gecko and WebKit implementations, consensus around the technical direction is solid.

### Recommendations
- Actionable Advice: Developers should begin testing two-dimensional layouts using \`overflow: auto clip\` or \`overflow: scroll clip\`, but should guard the rule with \`@supports (overflow: auto clip)\` as a progressive enhancement until Gecko and WebKit deliver production support.
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
- **Chrome usage:** 0.081% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/190))

## 📰 Ecosystem Blogs & Articles

- [Ready for developer testing: Single-axis scroll containers \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/single-axis-scroll-containers-ready-for-testing) *(developer.chrome.com)*
  > Ready for developer testing: Single-axis scroll containers \| Blog \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עבר...
- [localenhance.com](https://labs.localenhance.com/labs/two-axes) *(labs.localenhance.com)*
  > This turned the element into a two-dimensional scroller on both axes \*LocalEnhance Labs\*: \*"TWO AXES: The Sticky Element That Could Not Pick a Scroller"\* \* \*\*Source:\*\* \*LocalEnhance Labs Drop 055\*
- [Single-axis scroll containers – River Writes - A MediaWiki Blog](https://blog.river.me/single-axis-scroll) *(blog.river.me)*
  > Single-axis scroll containers – River Writes - A MediaWiki Blog This page looks best with JavaScript enabled Single-axis scroll containers 📅 Oct 2, 2026 &middot; ☕ 4 min read 🏷️ #css W3C has finally closed Issue #865 , and I couldn&rsquo;t be happi...
- [kneepotato.com](https://kneepotato.com/articles/single-axis-scroll-sticky-label-observation-record) *(kneepotato.com)*
  > \*Knee Potato\*: \*"Single-Axis Scrolling: A Sticky-Label Observation Record"\* \* \*\*Source:\*\* \*Developer testing & implementation guide\* \*Knee Potato\*: \*"Single-Axis Scrolling: A Sticky-Label Observation Record"\* \* \*\*Source:\*\* \*Developer testing & implem...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Chris Harrelson Wed, 19 Aug 2026 07:31:33 -0700 LGTM3 On Wed, Aug 19, 2026, 7:28...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Single-axis scroll containers Chromestatus Tue, 11 Aug 2026 11:26:13 -0700 Contact emails \[email&#160;protected\] Explainer htt...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Alex Russell Mon, 17 Aug 2026 11:59:23 -0700 Hey Free, Dan and I were reviewing this Int...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17200.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; \*Blink component\* &gt;&gt; Blink&gt;Layout ... a way to make a scroll container responsible &gt;&gt; for only a single axis. The affects features that depend on scroll &gt;&gt; containers, namely \`position: sticky\` and DOM scroll AP...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17374.html) *(mail-archive.com)*
  > This allows \`position: sticky\` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using \`overflow: clip\` stays in place.
- [CSS position: sticky now sticks to the nearest scroller on a per axis basis! – Bram.us](https://www.bram.us/2026/03/30/css-sticky-per-axis) *(bram.us · 2026-03-30T00:00:00)*
  > ... Thanks to a recent change in the overflow specification that allows containers to be a scroller for only a single axis, &lt;strong&gt;position: sticky can now track two different scrollers — one per axis — for the stickiness&lt;/strong&gt;.
- [CSS \`position: sticky\` for Single Axis Scroll Containers](https://codepen.io/bramus/pen/VYKQwmK) *(codepen.io)*
  > Define the internal structure // We use inline styles to ensure &#x27;all: unset&#x27; is applied to every element const unsetBase = &#x27;all: unset; display: block;&#x27;; container.innerHTML = \` &lt;div style=&quot;${unsetBase} position: relative;...
- [CSS \`position: sticky\` for Single Axis Scroll Containers](https://cdpn.io/bramus/fullpage/VYKQwmK?anon=true&view=fullpage) *(cdpn.io)*
  > This is a code demo posted by a web developer on CodePen. A referer from CodePen is required to render this page view, and your browser is not sending one (more details) · Your browser does not support sticky-per-axis. Try Chrome &amp;ge;148 with the...
- [CSS overflow: auto clip 怎麼用？單軸捲動與 sticky 邊界 - ZeroOne](https://laplusda.com/posts/css-single-axis-scroll-container) *(laplusda.com · 2026-09-12T00:00:00)*
  > overflow shorthand 在常見的水平 ... clip」的處理可能不同。 · &lt;strong&gt;position: sticky 不是固定在 viewport；它會受祖先的 scroll container、inset 與可用空間限制&lt;/strong&gt;。當外層只因為 overflow: auto 意外建立 ...
- [Chrome 153 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/153) *(developer.chrome.com · 2026-09-08T00:00:00)*
  > Single-axis scroll containers, the scroll-axis-lock property, capability elements, and more.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Other Spec Review: Single-Axis Scroll Containers · Issue #1222 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1222) *(github.com · 2026-04-24T21:00:17)* *(Cites: `https://chromestatus.com/feature/5067363861004288`)*
  > Other Spec Review: Single-Axis Scroll Containers · Issue #1222 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or windo...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Chris Harrelson Wed, 19 Aug 2026 07:31:33 -0700 LGTM3 On Wed, Aug 19, ...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > \[blink-dev\] Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Single-axis scroll containers Chromestatus Tue, 11 Aug 2026 11:26:13 -0700 Contact emails \[email&#160;protected\] Exp...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Alex Russell Mon, 17 Aug 2026 11:59:23 -0700 Hey Free, Dan and I were reviewin...

## 📚 Platform Documentation & Specifications

- [w3.org](https://www.w3.org/2026/07/22-css-minutes.html) *(w3.org)*
- [Other Spec Review: Single-Axis Scroll Containers · Issue #1222 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1222) *(github.com)*
- [Single-axis scroll containers · Issue #1436 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1436) *(github.com)*
- [Overflowing content - Learn web development \| MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Overflow) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 12 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/5067363861004288" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/explainers-by-googlers/single-axis-scroll-containers" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"github.com/w3c/csswg-drafts/pull/13903" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Single-axis scroll containers" API` — *Core feature API query* (8 returned)
  - `"Single-axis scroll containers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"scrollintoview()" OR "single-axis" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Single-axis scroll containers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Single-axis scroll containers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"single-axis scroll containers" OR "overflow: scroll clip" "position: sticky"` — *Finds articles and guides explaining how single-axis scroll containers solve position sticky and axis constraint issues.* (8 returned)
  - `"overflow: auto clip" OR "overflow: scroll clip" OR "overflow: clip auto" css` — *Discovers code snippets and syntax usage showcasing the combined scroll/clip overflow property values.* (1 returned)
  - `"single-axis scroll containers" ("intent to prototype" OR "intent to ship" OR chromestatus OR csswg)` — *Tracks browser vendor implementation status, feature flags, and official standardization progress.* (8 returned)
  - `"single-axis scroll containers" OR "overflow: scroll clip" (site:github.com/w3c/csswg-drafts OR site:news.ycombinator.com OR site:reddit.com)` — *Surfaces community feedback, developer debates, and working group discussions on single-axis scroll behavior.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 6 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "overflow", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "overflow": Chrome 100% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5067363861004288)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5067363861004288)
- [Specification](https://github.com/w3c/csswg-drafts/pull/13903)
- [Chromium Tracking Bug](https://issues.chromium.org/440038212)
