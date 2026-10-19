# Single-axis scroll containers

> **Report Week:** 2026-W43 | **Milestone:** Chrome 156 (first listed in Chrome 154) | **Category:** Enabled by default

## Overview

Extends the \`overflow\` property to support scrollable values together with \`clip\` (for example, \`overflow: scroll clip\`). This allows \`position: sticky\` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using \`overflow: clip\` stays in place.

### Motivation

The CSS \`overflow\` property currently allows behavior to be specified per axis, but it does not provide a way to make a scroll container responsible for only a single axis. The affects features that depend on scroll containers, namely \`position: sticky\` and DOM scroll APIs.  For example, authors may want to use \`position: sticky\` to create a table that keeps both the top and left labels in view while the user scrolls through large content. Or they may want to create a carousel that is visually clipped on one axis, while ensuring that \`scrollIntoView()\` does not unexpectedly move that clipped axis.  Please see the explainer for more details.

## Ecosystem Status

- **Momentum:** Moderate (footprint 338 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Single-axis scroll containers resolve a decade-old CSS limitation by permitting scrollable overflow values to pair with \`clip\`, ending the automatic coercion of containers into two-dimensional scrollers. Chromium leads implementation by enabling the capability by default in Chrome 156 following extensive testing channels, resolving foundational pain points for simultaneous horizontal scrolling and vertical sticky positioning. While the W3C CSS Working Group formally resolved the specification change under Issue #865 and the W3C TAG closed review as satisfied, multi-engine interoperability is still pending stable rollouts across Gecko and WebKit.

### Recommendations
- Actionable Advice: Teams should adopt single-axis scrolling through progressive enhancement today by gating paired declarations such as \`overflow: auto clip\` behind \`@supports (overflow: auto clip)\` blocks while maintaining legacy fallbacks. Additionally, audit existing interfaces that rely on programmatic DOM scrolling or snap points to verify that locking an axis with \`clip\` does not break intended script-driven viewport adjustments.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @freedebreuil: "&gt; How does this play with touch-action?  Thanks, good point. I think the right model is that scroll containers are now per-axis. For \`touch-action\`, t..."
- Standards Activity (W3C TAG): Latest discussion from @lukewarlow: "Hi @freedebreuil the TAG has discussed this and we're satisfied with this change.  Thanks for flying TAG..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Some CSS features are notoriously hard to detect when they update underlying behaviors. But now you can with \`@ supports" (139 points, 3 comments).

## Standards Positions

- **WebKit:** [Single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/680) [open]
- **Mozilla:** [Single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1418) [open]
- **W3C TAG:** [Other Spec Review: Single-Axis Scroll Containers](https://github.com/w3ctag/design-reviews/issues/1222) [closed]

## Web-features Group

*group-level data: web-features [`overflow`](https://webstatus.dev/features/overflow), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `overflow` on [wpt.fyi](https://wpt.fyi/results?q=feature:overflow) (via webstatus.dev) — stable: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%; experimental: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%
- **Chrome usage:** 0.11% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/190))

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Some CSS features are notoriously hard to detect when they update underlying behaviors. But now you can with \`@ supports](https://twitter.com/ChromiumDev/status/2109711660315296175) — *by @ChromiumDev, 139 likes/RTs, 3 replies*

## 📰 Ecosystem Blogs & Articles

- [Ready for developer testing: Single-axis scroll containers \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/single-axis-scroll-containers-ready-for-testing) *(developer.chrome.com)*
  > Ready for developer testing: Single-axis scroll containers \| Blog \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עבר...
- [framer.com](https://www.framer.com/help/articles/overflow-clip) *(framer.com)*
  > Because both \`scroll\` and \`hidden\` create scroll containers, the element inevitably became a two-dimensional scroller
- [CSS position: sticky now sticks to the nearest scroller on a per axis basis! – Bram.us](https://www.bram.us/2026/03/30/css-sticky-per-axis) *(bram.us)*
  > This quirk broke one of web development's most common UI patterns: \*\*data tables and carousels with sticky headers and sticky columns\*\* A sticky table header inside an \`overflow-x: auto\` wrapper could not stick to the viewport during page scrolling b...
- [Single-axis scroll containers – River Writes - A MediaWiki Blog](https://blog.river.me/single-axis-scroll) *(blog.river.me)*
  > Single-axis scroll containers – River Writes - A MediaWiki Blog This page looks best with JavaScript enabled Single-axis scroll containers 📅 Oct 2, 2026 &middot; ☕ 4 min read 🏷️ #css W3C has finally closed Issue #865 , and I couldn&rsquo;t be happi...
- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5086608215900160) *(img544-dot-cr-status.appspot.com)*
  > Complementing the core overflow change, modern Chromium features also extend CSS Scroll Snap so single-axis scrollers process snap alignment only along the active scrolling axis, delegating the non-scrolling axis to ancestor containers
- [localenhance.com](https://labs.localenhance.com/labs/two-axes) *(labs.localenhance.com)*
  > LocalEnhance published interactive performance comparisons between native \`overflow: scroll clip\` and standard JavaScript workarounds Their benchmarks demonstrated how developers previously relied on scroll event listeners, \`getBoundingClientRect\` ca...
- [tildes.net](https://tildes.net/~comp/1waf/single_axis_scroll_has_been_adopted_into_the_css_spec_and_will_be_supported_in_chromium_soon) *(tildes.net)*
  > Across community hubs (such as Tildes and frontend newsletters), the reaction has been overwhelmingly positive Front-end authors view this as the definitive fix to the notorious \*"why is my sticky element not sticking?"\* problem caused by parent cont...
- [artdirectiondaily.com](https://artdirectiondaily.com/issues/2026-09-13-one-keyword-ends-sticky-header-bug.html) *(artdirectiondaily.com)*
  > Across community hubs (such as Tildes and frontend newsletters), the reaction has been overwhelmingly positive
- [youtube.com](https://www.youtube.com/watch?v=Ae3IQn7LfaQ) *(youtube.com)*
  > Front-end authors view this as the definitive fix to the notorious \*"why is my sticky element not sticking?"\* problem caused by parent containers using \`overflow-x: hidden\` or \`auto\`
- [youtube.com](https://www.youtube.com/watch?v=2WWAEftnzf0) *(youtube.com)*
  > Educators and documentation authors (including references on MDN and YouTube guides by developers like Kevin Powell) emphasize reinforcing the distinction between \`clip\` and \`hidden\`
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > Experimental Chromium Web Platform Features \| Polypane This website works best with JavaScript enabled. Skip to content Skip to footer Polypane Brand kit Copy icon as SVG Copy logo as SVG Brand guidelines Homepage Search Changelog Polypane 31 Latest ...
- [\[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg16097.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Chromestatus Mon, 16 Mar 2026 07:3...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Single-axis scroll containers Chromestatus Tue, 11 Aug 2026 11:26:13 -0700 Contact emails \[email&#160;protected\] Explainer htt...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Chris Harrelson Wed, 19 Aug 2026 07:31:33 -0700 LGTM3 On Wed, Aug 19, 2026, 7:28...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Alex Russell Mon, 17 Aug 2026 11:59:23 -0700 Hey Free, Dan and I were reviewing this Int...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug 2026 14:06:10 -0700 Contact e...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17200.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; \*Blink component\* &gt;&gt; Blink&gt;Layout ... a way to make a scroll container responsible &gt;&gt; for only a single axis. The affects features that depend on scroll &gt;&gt; containers, namely \`position: sticky\` and DOM scroll AP...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17374.html) *(mail-archive.com)*
  > This allows \`position: sticky\` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using \`overflow: clip\` stays in place.
- [\[css-overflow-4\] Allow scrollable overflow to be clipped in off-axis \[440038212\] - Chromium](https://issues.chromium.org/issues/440038212) *(issues.chromium.org)*
  > A third\_party/blink/web\_tests/external/wpt/css/css-sizing/aspect-ratio/aspect-ratio-minimum-size-single-axis-scroll-container.html ... &lt;strong&gt;Add WPT coverage for default overflow alignment in flex and grid containers when only one overflow axis is ...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17220.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; \*Blink component\* &gt;&gt;&gt; ... property currently allows behavior to be specified &gt;&gt;&gt; per axis, but &lt;strong&gt;it does not provide a way to make a scroll container &gt;&gt;&gt; responsible for only a single axis&lt;/s...
- [google.com](https://groups.google.com/a/chromium.org/d/msgid/blink-dev/6a7b693b.dc132f77.2e13a8.076f.GAE%40google.com) *(groups.google.com)*
  > Intent to Ship: Single-axis scroll containers Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Single-axis scroll containers 219 views ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)* *(Cites: `https://chromestatus.com/feature/5067363861004288`)*
  > Experimental Chromium Web Platform Features \| Polypane This website works best with JavaScript enabled. Skip to content Skip to footer Polypane Brand kit Copy icon as SVG Copy logo as SVG Brand guidelines Homepage Search Changelog Polypane ...
- [\[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg16097.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5067363861004288`)*
  > \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Chromestatus Mon, 16 Mar...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > \[blink-dev\] Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Single-axis scroll containers Chromestatus Tue, 11 Aug 2026 11:26:13 -0700 Contact emails \[email&#160;protected\] Exp...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Chris Harrelson Wed, 19 Aug 2026 07:31:33 -0700 LGTM3 On Wed, Aug 19, ...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Alex Russell Mon, 17 Aug 2026 11:59:23 -0700 Hey Free, Dan and I were reviewin...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug 2026 14:06:10 -0700...

## 📚 Platform Documentation & Specifications

- [overflow CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow) *(developer.mozilla.org)*
- [Other Spec Review: Single-Axis Scroll Containers · Issue #1222 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1222) *(github.com)*
- [Single-axis scroll containers · Issue #1436 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1436) *(github.com)*
- [Other Spec Review: Scroll snap for single-axis scroll container · Issue #1266 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1266) *(github.com)*
- [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers #14018 by lcdavid94 · Pull Request #14354 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/pull/14354) *(github.com)*
- [\[css-scroll-snap\] Clarify snapping behavior with multiple single-axis scrollers · Issue #14018 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14018) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 12 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/5067363861004288" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/explainers-by-googlers/single-axis-scroll-containers" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"github.com/w3c/csswg-drafts/pull/13903" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Single-axis scroll containers" API` — *Core feature API query* (8 returned)
  - `"Single-axis scroll containers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"scrollintoview()" OR "single-axis" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Single-axis scroll containers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Single-axis scroll containers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `css overflow scroll clip single-axis scroll containers tutorial` — *Finds developer guides and blog posts explaining how to use single-axis scroll containers with overflow scroll clip.* (8 returned)
  - `"overflow: scroll clip" css position sticky example` — *Searches for real-world CSS code snippets and WebIDL examples implementing sticky positioning with single-axis overflow.* (0 returned)
  - `csswg-drafts single-axis scroll containers explainer github` — *Locates official specifications, draft proposals, and standardization updates regarding single-axis scroll containers.* (8 returned)
  - `single axis scroll containers css overflow feedback adoption` — *Tracks community sentiment, developer feedback, and browser implementation status for single-axis scroll containers.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "overflow", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "overflow": Chrome 100% passing (stable)*
- **Sources cited by the AI synthesis:** 4 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5067363861004288)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5067363861004288)
- [Specification](https://github.com/w3c/csswg-drafts/pull/13903)
- [Chromium Tracking Bug](https://issues.chromium.org/440038212)
