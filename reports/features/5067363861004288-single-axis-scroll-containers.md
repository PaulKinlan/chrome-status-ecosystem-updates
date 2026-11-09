# Single-axis scroll containers

> **Report Week:** 2026-W46 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Extends the \`overflow\` property to support scrollable values together with \`clip\` (for example, \`overflow: scroll clip\`). This allows \`position: sticky\` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using \`overflow: clip\` stays in place.

### Motivation

The CSS \`overflow\` property currently allows behavior to be specified per axis, but it does not provide a way to make a scroll container responsible for only a single axis. The affects features that depend on scroll containers, namely \`position: sticky\` and DOM scroll APIs.  For example, authors may want to use \`position: sticky\` to create a table that keeps both the top and left labels in view while the user scrolls through large content. Or they may want to create a carousel that is visually clipped on one axis, while ensuring that \`scrollIntoView()\` does not unexpectedly move that clipped axis.  Please see the explainer for more details.

## Ecosystem Status

- **Momentum:** Emerging (+50 points since 2026-10-12; footprint 275 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Single-axis scroll containers update CSS Overflow by permitting scrollable keywords (such as auto or scroll) to pair explicitly with clip, preventing the browser from coercing the clipped axis into a full two-dimensional scroller. This resolves the decade-old CSS issue where position: sticky elements inside horizontally scrolling containers were trapped by local overflow rather than sticking to the viewport or document scroll ancestors. While Chromium has shipped support enabled by default starting in Chrome 156 following TAG satisfaction, Mozilla Gecko and Apple WebKit standards positions remain active and open.

### Recommendations
- Actionable Advice: Teams building responsive wide tables or horizontal carousels can adopt single-axis scroller syntax (e.g., overflow-x: auto; overflow-y: clip;) as a progressive enhancement, but must test fallback behaviors in non-supporting browsers where clip is still coerced into hidden, trapping vertical sticky positioning.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "In terms of layout, is it well defined what happens for a single-axis scroll container for things like baseline alignment? I guess we only adjust base..."
- Standards Activity (W3C TAG): Latest discussion from @lukewarlow: "Hi @freedebreuil the TAG has discussed this and we're satisfied with this change.  Thanks for flying TAG..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "New in Chrome 153" / X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/680) [open]
- **Mozilla:** [Single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1418) [open]
- **W3C TAG:** [Other Spec Review: Single-Axis Scroll Containers](https://github.com/w3ctag/design-reviews/issues/1222) [closed]

## Web-features Group

*group-level data: web-features [`overflow`](https://webstatus.dev/features/overflow), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `overflow` on [wpt.fyi](https://wpt.fyi/results?q=feature:overflow) (via webstatus.dev) — stable: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%; experimental: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%
- **Chrome usage:** 0.078% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/190))

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers on X: "New in Chrome 153" / X](https://x.com/ChromiumDev/status/2098134897923658034) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/blog/single-axis-scroll-containers-ready-for-testing) *(developer.chrome.com)*
  > \*\*Single-axis scroll containers\*\* update the CSS \`overflow\` specification by allowing scrollable keywords (\`auto\`, \`scroll\`, \`hidden\`) to be explicitly combined with \`clip\` (for example, \`overflow: auto clip\` or \`overflow-x: auto; overflow-y: clip\`) ...
- [river.me](https://blog.river.me/single-axis-scroll) *(blog.river.me)*
  > \*\*The \`position: sticky\` conflict:\*\* Because the element became a 2D scroller, any sticky child with \`position: sticky; top: 0\` would anchor to the local container rather than the viewport/document scroller This made the classic responsive data table...
- [CSS position: sticky now sticks to the nearest scroller on a per axis basis! – Bram.us](https://www.bram.us/2026/03/30/css-sticky-per-axis) *(bram.us)*
  > This made the classic responsive data table—horizontal scrolling for wide columns while keeping headers sticky to the viewport—almost impossible with pure CSS \*\*"CSS position: sticky now sticks to the nearest scroller on a per axis basis!"\*\*
- [chromestatus.com](https://chromestatus.com/feature/5086608215900160) *(chromestatus.com)*
  > \*\*Follow-up ("Scroll snap for single-axis scroll containers"):\*\* Chrome also introduced updates to the CSS Scroll Snap module so that snap areas on a single-axis container only snap along the active scroll axis; snap requests for the clipped axis pro...
- [css-tricks.com](https://css-tricks.com/dealing-with-overflow-and-position-sticky) *(css-tricks.com)*
  > \*\*Developer Sentiment:\*\* For data-dense websites, wikis, and dashboard builders, this solves a decade of complex JavaScript scroll-syncing workarounds
- [tildes.net](https://tildes.net/~comp/1waf/single_axis_scroll_has_been_adopted_into_the_css_spec_and_will_be_supported_in_chromium_soon) *(tildes.net)*
  > Discussions across W3C TAG review threads and developer forums noted that while full cross-browser interoperability will take time to mature in stable releases across all engines, this is one of the cleanest ergonomic wins for CSS layout It aligns th...
- [\[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg16097.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Chromestatus Mon, 16 Mar 2026 07:3...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Alex Russell Mon, 17 Aug 2026 11:59:23 -0700 Hey Free, Dan and I were reviewing this Int...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17200.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers 'Free Debreuil' via blink-dev Mon, 17 Aug 2026 13:58:22 -0700 Hey Alex, Thank yo...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Single-axis scroll containers Chromestatus Tue, 11 Aug 2026 11:26:13 -0700 Contact emails \[email&#160;protected\] Explainer htt...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17374.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers 'Bramus Van Damme' via blink-dev Fri, 04 Sep 2026 08:48:34 -0700 On Wednesday, A...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17220.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Yoav Weiss (@Shopify) Wed, 19 Aug 2026 07:28:39 -0700 LGTM2 On Monday, August 17...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Best, &gt;&gt;&gt; &gt;&gt;&gt; Alex &gt;&gt;&gt; &gt;&gt;&gt; On Tuesday, August 11, 2026 at 11:26:16 AM UTC-7 Chromestatus wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Contact emails\* &gt;&gt;&gt;&gt; \[email protected\] &gt;&gt;&g...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)*
  > Blink component Blink&gt;Scroll Web Feature ID scroll-snap Motivation This is part of the single-axis scroll container feature (https://github.com/explainers-by-googlers/single-axis-scroll-containers) to &lt;strong&gt;align the scroll snap behavior with th...
- [Microsoft Edge 156 web platform release notes (Oct. 22, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com · 2026-10-22T00:00:00)*
  > Setting overflow: scroll clip allows an element with position: sticky to be constrained by different scroll containers per axis. For example, use this to create a table that keeps both the column and row headers in view, while the user scrolls throug...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg16097.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5067363861004288`)*
  > \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Chromestatus Mon, 16 Mar...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5067363861004288`)*
  > \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Alex Russell Mon, 17 Aug 2026 11:59:23 -0700 Hey Free, Dan and I were reviewin...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17200.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5067363861004288`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers 'Free Debreuil' via blink-dev Mon, 17 Aug 2026 13:58:22 -0700 Hey Alex...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > \[blink-dev\] Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Single-axis scroll containers Chromestatus Tue, 11 Aug 2026 11:26:13 -0700 Contact emails \[email&#160;protected\] Exp...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17374.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers 'Bramus Van Damme' via blink-dev Fri, 04 Sep 2026 08:48:34 -0700 On We...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17220.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Yoav Weiss (@Shopify) Wed, 19 Aug 2026 07:28:39 -0700 LGTM2 On Monday,...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Best, &gt;&gt;&gt; &gt;&gt;&gt; Alex &gt;&gt;&gt; &gt;&gt;&gt; On Tuesday, August 11, 2026 at 11:26:16 AM UTC-7 Chromestatus wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Contact emails\* &gt;&gt;&gt;&gt; \[email protected\] ...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Blink component Blink&gt;Scroll Web Feature ID scroll-snap Motivation This is part of the single-axis scroll container feature (https://github.com/explainers-by-googlers/single-axis-scroll-containers) to &lt;strong&gt;align the scroll snap behavi...

## 📚 Platform Documentation & Specifications

- [Other Spec Review: Single-Axis Scroll Containers · Issue #1222 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1222) *(github.com)*
- [github.com](https://github.com/explainers-by-googlers/single-axis-scroll-snap) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow-x) *(developer.mozilla.org)*
- [design-reviews#1222: Other Spec Review: Single-Axis Scroll Containers](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1222) *(tag-github-bot.w3.org)*
- [edge-developer/microsoft-edge/web-platform/release-notes/156.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/156.md) *(github.com)*
- [Single-axis scroll containers · Issue #1418 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1418) *(github.com)*
- [Single-axis scroll containers · Issue #1436 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/1436) *(github.com)*
- [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers #14018 by lcdavid94 · Pull Request #14354 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/pull/14354) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 46 result(s) found across 13 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/5067363861004288" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (6 returned)
  - `"github.com/explainers-by-googlers/single-axis-scroll-containers" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"github.com/w3c/csswg-drafts/pull/13903" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"Single-axis scroll containers" API` — *Core feature API query* (8 returned)
  - `"Single-axis scroll containers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"scrollintoview()" OR "single-axis" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Single-axis scroll containers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Single-axis scroll containers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"single-axis scroll containers" CSS guide OR tutorial OR explainer` — *Finds developer guides, blog explanations, and tutorials covering single-axis scroll container mechanics and use cases.* (8 returned)
  - `"overflow: scroll clip" OR "overflow: clip scroll" "position: sticky"` — *Discovers CSS implementation patterns and code snippets using mixed scroll and clip overflow values for sticky positioning.* (2 returned)
  - `"single-axis scroll containers" Chrome "intent to" OR "standards-positions"` — *Tracks browser vendor positions, intent to prototype/ship announcements, and web platform adoption status.* (8 returned)
  - `"single-axis scroll containers" OR "overflow: scroll clip" site:github.com/w3c/csswg-drafts OR site:github.com/whatwg` — *Surfaces standards body debates, specification feedback, and issue discussions across W3C and WHATWG repositories.* (3 returned)
  - `"overflow: clip" "single-axis scroll" carousel OR table scrollIntoView` — *Looks for practical DOM scrolling examples such as carousels and multi-axis sticky tables leveraging single-axis clipping.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **1 verified relevant**
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
- **Standards Discussion Comments:** 7 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5067363861004288)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5067363861004288)
- [Specification](https://github.com/w3c/csswg-drafts/pull/13903)
- [Chromium Tracking Bug](https://issues.chromium.org/440038212)
