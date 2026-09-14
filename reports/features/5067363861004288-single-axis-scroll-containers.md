# Single-axis scroll containers

> **Report Week:** 2026-W38 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

Extends the \`overflow\` property to support scrollable values together with \`clip\` (for example, \`overflow: scroll clip\`). This allows \`position: sticky\` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using \`overflow: clip\` stays in place.

### Motivation

The CSS `overflow` property currently allows behavior to be specified per axis, but it does not provide a way to make a scroll container responsible for only a single axis. The affects features that depend on scroll containers, namely `position: sticky` and DOM scroll APIs.

For example, authors may want to use `position: sticky` to create a table that keeps both the top and left labels in view while the user scrolls through large content. Or they may want to create a carousel that is visually clipped on one axis, while ensuring that `scrollIntoView()` does not unexpectedly move that clipped axis.

Please see the explainer for more details.

## Ecosystem Status

- **Momentum:** High (285 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Single-axis scroll containers is currently In developer trial (Behind a flag) in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Standards Activity (Mozilla): Latest discussion from @freedebreuil: "&gt; How does this play with touch-action?  Thanks, good point. I think the right model is that scroll containers are now per-axis. For \`touch-action\`, t..."
- Standards Activity (W3C TAG): Latest discussion from @freedebreuil: "Thanks @lukewarlow. The breaking change is limited to the case where \`clip\` on one axis is combined with a scrollable overflow value on the other (for..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Proto.io - New video tutorial on scrollable containers" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/680) [open]
- **Mozilla:** [Single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1418) [open]
- **W3C TAG:** [Other Spec Review: Single-Axis Scroll Containers](https://github.com/w3ctag/design-reviews/issues/1222) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Proto.io - New video tutorial on scrollable containers](https://twitter.com/protoio/status/288578131906945025) — *by @protoio, 0 likes/RTs, 0 replies*

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
- [CSS overflow: auto clip 怎麼用？單軸捲動與 sticky 邊界 - ZeroOne](https://laplusda.com/posts/css-single-axis-scroll-container) *(laplusda.com · 2026-09-12T00:00:00)*
  > 如果元件還需要 snap、marker 或按鈕導覽，可以接著看 CSS Scroll Marker 建立可存取輪播導覽；不要把實驗中的 marker API 與單軸 overflow 當成同一個功能。 ... CSS overflow: auto clip 怎麼用？單軸捲動與 sticky 邊界 https://laplusda.com/posts/css-single-axis-scroll-container/
- [CSS Scroll Snap: The Complete Guide to Smooth Navigation \| Effect.Labs Blog](https://effect-labs.com/en/pages/blog/scroll-snap-sections.html) *(effect-labs.com · 2026-04-03T00:19:00)*
  > CSS Scroll Snap: The Complete Guide to Smooth Navigation | Effect.Labs Blog Effect.Labs &times; Fundamentals Buttons Text & Typography Forms Navigation & UI Loaders Design & Visuals Backgrounds Glass & Morphism Visual Effects Liquid & Morphing SVG & ...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17374.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Single-axis scroll containers 'Bramus Van Damme' via blink-dev Fri, 04 Sep 2026 08:48:34 -0700 On Wednesday, A...
- [HTML DOM Element scrollIntoView() Method](https://www.w3schools.com/jsref/met_element_scrollintoview.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [JavaScript scrollIntoView() Explained By Examples](https://www.javascripttutorial.net/javascript-dom/javascript-scrollintoview) *(javascripttutorial.net · 2023-12-17T10:16:36)*
  > In this tutorial, you&#x27;ll learn how to scroll an element into the view using the JavaScript scrollIntoView() method.
- [Javascript scrollIntoView() method \| by Twinkal Doshi \| Medium](https://twinkal189.medium.com/javascript-scrollintoview-method-198436f81648) *(twinkal189.medium.com · 2024-03-03T06:53:39)*
  > &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;style&gt; #scroll-div { margin-left: 100%; padding-right: 100%; height: 800px; background-color: pink; overflow: auto; } &lt;/style&gt; &lt;body&gt; &lt;h1&gt;Javascript scrollIntoView&lt;/h1&gt; &lt;button oncl...
- [scrollIntoView: Browser Support, Options, Issues](https://www.testmuai.com/learning-hub/scrollintoview-browser-support) *(testmuai.com · 2026-05-02T00:00:00)*
  > scrollIntoView is <strong>a W3C JavaScript method that scrolls an element into view</strong>. Learn which browsers support it, the options it accepts, and the known issues.
- [Define where an element should be scrolled to using elem.scrollIntoView \| Stefan Judis Web Development](https://www.stefanjudis.com/today-i-learned/define-where-an-element-should-be-scrolled-to-using-elem-scrollintoview) *(stefanjudis.com · 2023-11-27T07:21:55)*
  > document.querySelector(&#x27;.some-elem&#x27;).scrollIntoView({ behavior: &#x27;smooth&#x27;, // &#x27;auto&#x27; or &#x27;smooth&#x27; block: &#x27;center&#x27;, // &#x27;start&#x27;, &#x27;center&#x27;, &#x27;end&#x27; or &#x27;nearest&#x27; inline...
- [React scrollIntoView with useRef: Scroll to an Element (2026) - DEV Community](https://dev.to/childrentime/react-scrollintoview-with-useref-scroll-to-an-element-2026-4ha4) *(dev.to · 2026-08-18T01:54:50)*
  > <strong>The hook animates by assigning scrollTop/scrollLeft every frame</strong>. If CSS also says that box scrolls smoothly, the browser tries to animate each of those ~60 assignments and the result is a stuttering mess.
- [scrollIntoView axis options](https://codepen.io/stefanjudis/pen/wvMVLOQ) *(codepen.io)*
  > You can apply CSS to your Pen from any stylesheet on the web. Just put a URL to it here and we&#x27;ll apply it, in the order you have them, before the CSS in the Pen itself. You can also link to another Pen here (use the .css URL Extension) and we&#...
- [Take control of your scroll - customizing pull-to-refresh and overflow effects \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/overscroll-behavior) *(developer.chrome.com · 2017-11-14T00:00:00)*
  > For situations like the Twitter PWA, it might make sense to disable the native pull-to-refresh action. Why? In this app, you probably don&#x27;t want the user accidentally refreshing the page. There&#x27;s also the potential to see a double refresh a...
- [Chrome 153 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/153) *(developer.chrome.com · 2026-09-08T15:55:05)*
  > This <strong>lets position: sticky be constrained by different ancestor scroll containers per axis</strong>, and gives you a way to ensure an axis using overflow: clip stays in place. Tracking bug #440038212 | ChromeStatus.com entry | Spec · scroll-a...
- [New in Chrome 153 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-153) *(developer.chrome.com)*
  > <strong>Chrome 153 extends the CSS overflow property to support scrollable values (auto, scroll, hidden) combined with clip</strong> (for example, overflow: scroll clip or overflow: auto clip). This creates a scroll container for a single axis withou...
- [ScrollIntoView() causing the whole page to move](https://stackoverflow.com/questions/11039885/scrollintoview-causing-the-whole-page-to-move) *(stackoverflow.com)*
  > I was able to resolve this with { block: &#x27;nearest&#x27;, inline: &#x27;center&#x27; } by also applying overflow: clip to the parent element that was over-scrolling (in my case a horizontal over-scroll) 2021-03-19T05:50:30.49Z+00:00 ... @som I ha...
- [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250) *(dev.to · Randal L. Schwartz · Sep 11)*
  > Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.
- [Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b) *(dev.to · Mario Ezquerro · Sep 11)*
  > Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Re: [blink-dev] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Single-axis scroll containers Chris Harrelson Wed, 19 Aug 2026 07:31:33 -0700 LGTM3 On Wed, Aug 19, ...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > [blink-dev] Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Single-axis scroll containers Chromestatus Tue, 11 Aug 2026 11:26:13 -0700 Contact emails [email&#160;protected] Exp...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > [blink-dev] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Single-axis scroll containers Alex Russell Mon, 17 Aug 2026 11:59:23 -0700 Hey Free, Dan and I were reviewin...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > [blink-dev] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug 2026 14:06:10 -0700...

## 📚 Platform Documentation & Specifications

- [Element: scrollIntoView() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) *(developer.mozilla.org)*
- [CSS overflow - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Overflow) *(developer.mozilla.org)*
- [overflow-x CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow-x) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 44 result(s) found across 13 planned queries — **22 verified relevant**
  - `"chromestatus.com/feature/5067363861004288" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/explainers-by-googlers/single-axis-scroll-containers" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"github.com/w3c/csswg-drafts/pull/13903" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Single-axis scroll containers" API` — *Core feature API query* (5 returned)
  - `"Single-axis scroll containers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"scrollintoview()" OR "single-axis" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Single-axis scroll containers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Single-axis scroll containers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"overflow: scroll clip" OR "overflow: auto clip" CSS` — *Finds exact CSS declaration syntax and code snippets combining scrollable values with clip across axes.* (0 returned)
  - `"single-axis scroll containers" "position: sticky"` — *Surfaces developer guides, explainers, and articles detailing how single-axis scrolling enables multi-directional sticky layouts like fixed table headers and columns.* (3 returned)
  - `"single-axis scroll containers" site:github.com/w3c/csswg-drafts` — *Discovers standards discussions, consensus tracking, and design debate within the W3C CSS Working Group GitHub issues and pull requests.* (0 returned)
  - `"single-axis scroll containers" ("intent to prototype" OR "intent to ship" OR chromestatus OR WebKit OR Gecko)` — *Captures browser engine implementation tracking, Intent to Prototype/Ship announcements, and multi-engine adoption status.* (6 returned)
  - `"single-axis scroll" OR "overflow: clip" scrollIntoView carousel` — *Finds practical use cases, workarounds, and guides addressing unexpected scrollIntoView axis shifts in clipped UI components like carousels.* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 3 result(s) found — **3 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 548 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5067363861004288)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5067363861004288)
- [Specification](https://github.com/w3c/csswg-drafts/pull/13903)
- [Chromium Tracking Bug](https://issues.chromium.org/440038212)
