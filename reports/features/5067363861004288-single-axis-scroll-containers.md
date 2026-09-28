# Single-axis scroll containers

> **Report Week:** 2026-W40 | **Milestone:** Chrome 154 | **Category:** In developer trial (Behind a flag)

## Overview

Extends the \`overflow\` property to support scrollable values together with \`clip\` (for example, \`overflow: scroll clip\`). This allows \`position: sticky\` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using \`overflow: clip\` stays in place.

### Motivation

The CSS `overflow` property currently allows behavior to be specified per axis, but it does not provide a way to make a scroll container responsible for only a single axis. The affects features that depend on scroll containers, namely `position: sticky` and DOM scroll APIs.

For example, authors may want to use `position: sticky` to create a table that keeps both the top and left labels in view while the user scrolls through large content. Or they may want to create a carousel that is visually clipped on one axis, while ensuring that `scrollIntoView()` does not unexpectedly move that clipped axis.

Please see the explainer for more details.

## Ecosystem Status

- **Momentum:** High (369 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Single-axis scroll containers allow authors to pair scrollable \`overflow\` values with \`clip\` (e.g., \`overflow: scroll clip\`), resolving a decades-old web platform quirk where scrollers were forced into two dimensions. Chromium is aggressively advancing the feature—progressing through developer testing in Chrome/Edge 153 and completing its Intent to Ship review—to unlock independent per-axis sticky positioning and prevent off-axis scroll drift. However, the specification remains under active CSSWG/TAG review, and cross-browser consensus has not yet solidified into multi-engine implementation.

### Recommendations
- Actionable Advice: Teams should treat single-axis scrollers as an experimental capability: test layouts in Chromium pre-release channels (Chrome 153+) to verify sticky tables and carousels, but avoid relying on them exclusively in production. Ensure critical table layouts and scrolling containers maintain acceptable baseline fallbacks via feature detection or defensive CSS until Safari and Firefox implement the syntax.
- Standards Activity (Mozilla): Latest discussion from @freedebreuil: "&gt; How does this play with touch-action?  Thanks, good point. I think the right model is that scroll containers are now per-axis. For \`touch-action\`, t..."
- Standards Activity (W3C TAG): Latest discussion from @freedebreuil: "Thanks @lukewarlow. The breaking change is limited to the case where \`clip\` on one axis is combined with a scrollable overflow value on the other (for..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Single-axis scroll containers fix long-standing CSS overflow quirks → https://t.co/fbw3j4UrnG  Key capabilities ready fo" (219 points, 3 comments).

## Standards Positions

- **WebKit:** [Single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/680) [open]
- **Mozilla:** [Single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1418) [open]
- **W3C TAG:** [Other Spec Review: Single-Axis Scroll Containers](https://github.com/w3ctag/design-reviews/issues/1222) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Single-axis scroll containers fix long-standing CSS overflow quirks → https://t.co/fbw3j4UrnG  Key capabilities ready fo](https://twitter.com/ChromiumDev/status/2102842144990085285) — *by @ChromiumDev, 219 likes/RTs, 3 replies*
- 🐦 **Twitter / X:** [Single-axis scroll containers fix long-standing CSS overflow quirks → https://t.co/fbw3j4TTy8 Key capabilities ready for](https://twitter.com/ChromiumDev/status/2102835390688141444) — *by @ChromiumDev, 2 likes/RTs, 1 replies*

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Single-axis scroll containers Chris Harrelson Wed, 19 Aug 2026 07:31:33 -0700 LGTM3 On Wed, Aug 19, 2026, 7:28...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Single-axis scroll containers Chromestatus Tue, 11 Aug 2026 11:26:13 -0700 Contact emails [email&#160;protected] Explainer htt...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Single-axis scroll containers Alex Russell Mon, 17 Aug 2026 11:59:23 -0700 Hey Free, Dan and I were reviewing this Int...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug 2026 14:06:10 -0700 Contact e...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17200.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Single-axis scroll containers 'Free Debreuil' via blink-dev Mon, 17 Aug 2026 13:58:22 -0700 Hey Alex, Thank yo...
- [CSS Scroll Snap: The Complete Guide to Smooth Navigation \| Effect.Labs Blog](https://effect-labs.com/en/pages/blog/scroll-snap-sections.html) *(effect-labs.com · 2026-04-03T00:19:00)*
  > One of the most popular use cases for Scroll Snap is creating full-screen sections, as seen on many modern landing pages. ... /* Main container - takes full viewport */ .fullpage-container { height: 100vh; overflow-y: auto; scroll-snap-type: y mandat...
- [Horizontal Scrolling with CSS and JavaScript: A Complete Step-by-Step Guide - Desarrollolibre](https://www.desarrollolibre.net/blog/css/horizontal-scrolling-with-pure-css-in-javascript) *(desarrollolibre.net · 2025-12-20T00:00:00)*
  > The white-space property specifies how whitespace inside the container is handled; with the value nowrap, we indicate that there should be no line breaks, meaning all content is displayed in a single row. In my experience, this is the most important ...
- [Flix: Creating a Scrollable Area \| HTML & CSS Tutorial](https://blog.nobledesktop.com/learn/html-css/flix-creating-a-scrollable-area-html-css) *(blog.nobledesktop.com · 2026-04-19T18:18:03)*
  > Switch back to your code editor. ... .movies { <strong>background-color: #fff; padding: 15px; margin: 0; white-space: nowrap; overflow-X: auto; }</strong> NOTE: overflow-X refers to the X-axis (which is horizontal scrolling).
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17374.html) *(mail-archive.com)*
  > This allows `position: sticky` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using `overflow: clip` stays in place.
- [How to use CSS Scroll Snap - LogRocket Blog](https://blog.logrocket.com/how-to-use-css-scroll-snap) *(blog.logrocket.com · 2024-06-04T21:29:41)*
  > What amazes me is that we don’t have anything else to do other than add the CSS lines below to automatically make the scroll snap to each box. &lt;style&gt; .container { width: 60vw; height: 70vh; margin: 15vh auto; overflow-x: scroll; scroll-snap-ty...
- [CSS @container scroll-state: Replace JS scroll listeners now - LogRocket Blog](https://blog.logrocket.com/css-container-scroll-state) *(blog.logrocket.com · 2026-03-27T14:43:50)*
  > The scroll-state() function currently supports three main queries that replace common JavaScript scroll hacks: This query detects when a position: sticky element has attached itself to one of its boundaries. You can target positions like top, bottom,...
- [JavaScript scrollIntoView() Explained By Examples](https://www.javascripttutorial.net/javascript-dom/javascript-scrollintoview) *(javascripttutorial.net · 2023-12-17T10:16:36)*
  > To align the JavaScript list item to the bottom of the view, you pass false value to the scrollIntoView() method:
- [Javascript scrollIntoView() method \| by Twinkal Doshi \| Medium](https://twinkal189.medium.com/javascript-scrollintoview-method-198436f81648) *(twinkal189.medium.com · 2024-03-03T06:53:39)*
  > &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;style&gt; #scroll-div { margin-left: 100%; padding-right: 100%; height: 800px; background-color: pink; overflow: auto; } &lt;/style&gt; &lt;body&gt; &lt;h1&gt;Javascript scrollIntoView&lt;/h1&gt; &lt;button oncl...
- [Define where an element should be scrolled to using elem.scrollIntoView \| Stefan Judis Web Development](https://www.stefanjudis.com/today-i-learned/define-where-an-element-should-be-scrolled-to-using-elem-scrollintoview) *(stefanjudis.com · 2023-11-27T07:21:55)*
  > document.querySelector(&#x27;.some-elem&#x27;).scrollIntoView({ behavior: &#x27;smooth&#x27;, // &#x27;auto&#x27; or &#x27;smooth&#x27; block: &#x27;center&#x27;, // &#x27;start&#x27;, &#x27;center&#x27;, &#x27;end&#x27; or &#x27;nearest&#x27; inline...
- [scrollIntoView: Browser Support, Options, Issues](https://www.testmuai.com/learning-hub/scrollintoview-browser-support) *(testmuai.com · 2026-05-02T00:00:00)*
  > scrollIntoView is a JavaScript method on the Element interface, defined by the W3C CSSOM View Module, that <strong>scrolls an element into the visible viewport</strong>.
- [HTML DOM Element scrollIntoView() Method](https://www.w3schools.com/jsref/met_element_scrollintoview.asp) *(w3schools.com)*
  > cssText getPropertyPriority() ... ❮ Previous ❮ Element Object Reference Next ❯ · <strong>Scroll the element with id=&quot;content&quot; into the visible area of the browser window</strong>: const element = document.getElementById(&quot;content&quot;)...
- [scrollIntoView axis options](https://codepen.io/stefanjudis/pen/wvMVLOQ) *(codepen.io)*
  > To get the best cross-browser support, it is a common practice to apply vendor prefixes to CSS properties and values that require them to work. For instance -webkit- or -moz-.
- [JavaScript scrollIntoView() Method: Syntax, Parameters & Examples](https://codeshack.io/references/javascript/scrollintoview) *(codeshack.io · 2026-06-23T00:00:00)*
  > Click the button below.&lt;/p&gt; &lt;div style=&quot;height:120px&quot;&gt;&lt;/div&gt; &lt;p id=&quot;target&quot; style=&quot;color:#1c7ce9;font-weight:700&quot;&gt;&gt;&gt; Target paragraph &lt;&lt;&lt;/p&gt; &lt;div style=&quot;height:120px&quot...
- [Take control of your scroll - customizing pull-to-refresh and overflow effects \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/overscroll-behavior) *(developer.chrome.com · 2017-11-14T00:00:00)*
  > For situations like the Twitter PWA, it might make sense to disable the native pull-to-refresh action. Why? In this app, you probably don&#x27;t want the user accidentally refreshing the page. There&#x27;s also the potential to see a double refresh a...
- [\[css-overflow-4\] Allow scrollable overflow to be clipped in off-axis \[440038212\] - Chromium](https://issues.chromium.org/issues/440038212) *(issues.chromium.org)*
  > RESOLVED: <strong>Allow overflow: clip in other axis of a scrollable container</strong>. It is still a scroll container but prevents scrolling away from origin in that axis.
- [CSS overflow: auto clip 怎麼用？單軸捲動與 sticky 邊界 - ZeroOne](https://laplusda.com/posts/css-single-axis-scroll-container) *(laplusda.com · 2026-09-12T00:00:00)*
  > 直接答案是：水平元件先用 overflow: auto clip 表達「inline 軸可捲動、另一軸只裁切」；針對要允許斜向手勢的地圖或放大圖片，再評估 scroll-axis-lock: none。兩者目前都不該被當成所有瀏覽器都已支援的 production 基線。 · Chrome 153 release notes 將 single-axis scroll containers 標示為非穩定 channel 功能；scroll-axis-lock 也來自 CSS Overflow Le...
- [Chrome 153 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/153) *(developer.chrome.com · 2026-09-08T00:00:00)*
  > <strong>Extends the overflow property to support scrollable values together with clip</strong> (for example, overflow: scroll clip). This lets position: sticky be constrained by different ancestor scroll containers per axis, and gives you a way to en...
- [New in Chrome 153 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-153?hl=en) *(developer.chrome.com · 2026-09-08T18:00:03)*
  > <strong>Chrome 153 extends the CSS overflow property to support scrollable values (auto, scroll, hidden) combined with clip (for example, overflow: scroll clip or overflow: auto clip). This creates a scroll container for a single axis without turning...
- [Scroll-driven Animations Explainer](https://drafts.csswg.org/scroll-animations-1/EXPLAINER.html) *(drafts.csswg.org)*
  > <strong>Timeline current time = (current scroll offset) / (scrollable overflow size - scroll container size)</strong> ... axis: Determines the scrolling orientation which triggers the activation and drives the progress of the trigger.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[pull\] main from chromium:main by pull\[bot\] · Pull Request #1627 · bubbleswarm/chromium](https://github.com/bubbleswarm/chromium/pull/1627) *(github.com)* *(Cites: `https://chromestatus.com/feature/5067363861004288`)*
  > [pull] main from chromium:main by pull[bot] · Pull Request #1627 · bubbleswarm/chromium · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wind...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Re: [blink-dev] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Single-axis scroll containers Chris Harrelson Wed, 19 Aug 2026 07:31:33 -0700 LGTM3 On Wed, Aug 19, ...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > [blink-dev] Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Single-axis scroll containers Chromestatus Tue, 11 Aug 2026 11:26:13 -0700 Contact emails [email&#160;protected] Exp...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > [blink-dev] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Single-axis scroll containers Alex Russell Mon, 17 Aug 2026 11:59:23 -0700 Hey Free, Dan and I were reviewin...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > [blink-dev] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug 2026 14:06:10 -0700...

## 📚 Platform Documentation & Specifications

- [\[pull\] main from chromium:main by pull\[bot\] · Pull Request #1627 · bubbleswarm/chromium](https://github.com/bubbleswarm/chromium/pull/1627) *(github.com)*
- [Single-axis scroll containers · Issue #1436 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1436) *(github.com)*
- [Other Spec Review: Scroll snap for single-axis scroll container · Issue #1266 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1266) *(github.com)*
- [Element: scrollIntoView() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) *(developer.mozilla.org)*
- [csswg-drafts/scroll-animations-1/EXPLAINER.md at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/scroll-animations-1/EXPLAINER.md) *(github.com)*
- [\[css-contain-3\] Ancestor Layout Loops with Single-Axis Containment · Issue #6426 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/6426) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 49 result(s) found across 12 planned queries — **30 verified relevant**
  - `"chromestatus.com/feature/5067363861004288" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/explainers-by-googlers/single-axis-scroll-containers" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"github.com/w3c/csswg-drafts/pull/13903" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Single-axis scroll containers" API` — *Core feature API query* (7 returned)
  - `"Single-axis scroll containers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"scrollintoview()" OR "single-axis" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Single-axis scroll containers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Single-axis scroll containers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"single-axis scroll containers" OR "overflow: clip scroll" OR "overflow: scroll clip" css` — *Finds early developer guides, articles, and blog write-ups exploring CSS single-axis scroll containers and the expanded overflow syntax.* (4 returned)
  - `("overflow: clip scroll" OR "overflow: scroll clip") ("position: sticky" OR scrollIntoView)` — *Targets concrete CSS code snippets and practical implementations showing how single-axis clipping interacts with sticky positioning and scrolling behavior.* (1 returned)
  - `"single-axis scroll containers" ("intent to prototype" OR "intent to ship" OR chromestatus OR "standards-positions")` — *Discovers browser engine status entries, intents to implement or ship, and multi-vendor position reviews from WebKit or Mozilla.* (7 returned)
  - `"single-axis scroll containers" ("csswg-drafts" OR github OR "explainer")` — *Retrieves developer reactions, specification debates, and feedback on CSSWG tracking issues and W3C draft pull requests.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 549 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5067363861004288)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5067363861004288)
- [Specification](https://github.com/w3c/csswg-drafts/pull/13903)
- [Chromium Tracking Bug](https://issues.chromium.org/440038212)
