# Single-axis scroll containers

> **Report Week:** 2026-W41 | **Milestone:** Chrome 154 | **Category:** In developer trial (Behind a flag)

## Overview

Extends the \`overflow\` property to support scrollable values together with \`clip\` (for example, \`overflow: scroll clip\`). This allows \`position: sticky\` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using \`overflow: clip\` stays in place.

### Motivation

The CSS `overflow` property currently allows behavior to be specified per axis, but it does not provide a way to make a scroll container responsible for only a single axis. The affects features that depend on scroll containers, namely `position: sticky` and DOM scroll APIs.

For example, authors may want to use `position: sticky` to create a table that keeps both the top and left labels in view while the user scrolls through large content. Or they may want to create a carousel that is visually clipped on one axis, while ensuring that `scrollIntoView()` does not unexpectedly move that clipped axis.

Please see the explainer for more details.

## Ecosystem Status

- **Momentum:** High (315 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Single-axis scroll containers is currently In developer trial (Behind a flag) in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Standards Activity (Mozilla): Latest discussion from @freedebreuil: "&gt; How does this play with touch-action?  Thanks, good point. I think the right model is that scroll containers are now per-axis. For \`touch-action\`, t..."
- Standards Activity (W3C TAG): Latest discussion from @freedebreuil: "Thanks @lukewarlow. The breaking change is limited to the case where \`clip\` on one axis is combined with a scrollable overflow value on the other (for..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/680) [open]
- **Mozilla:** [Single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1418) [open]
- **W3C TAG:** [Other Spec Review: Single-Axis Scroll Containers](https://github.com/w3ctag/design-reviews/issues/1222) [open]

## Packages & Polyfills

- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) `v7.2.1` — Infinite scroll component for React. Zero runtime dependencies, IntersectionObserver-based, TypeScript-first. Window scroll, fixed-height, and custom container modes. Pull-to-refresh and inverse (chat) scroll included.

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHpU98gjc_T5H8dfwmlKO5KQrFtQqAR9kkFyddxcxyuCuLFM3DzpbM2WTad8bdaVSWGxvI1Ym2xF-qM-nv64hhYMV76atpW_TXcjYNw3x7BTF7jg5dG1m0d_RRQasOrS2Xa-Y6TfMbhI3faTZ5zjCsRCTi-1SQqz8LZ1Tm3GN2-NX2hqawTyi8=) *(vertexaisearch.cloud.google.com)*
  > Ready for developer testing: Single-axis scroll containers | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עבר...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEK3vmsDgqSFUqFMxxQuFbMxLv3f19UL3ctd_scdE7LeAnH_vcso05ItT4V2D71LG0PslTfM4JOGz0SyCSkC8OFguQ9As9uHIBt43DXgihAMyHElIY1Z5GC6xkqDQyGyXz8epLI0bz0bagoAwYjt7vnSBEjO6LZh1Aq52vIwA==) *(vertexaisearch.cloud.google.com)*
  > GitHub - explainers-by-googlers/single-axis-scroll-containers: Single-Axis Scroll Containers explainer · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [localenhance.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFQFMw0YZ-4z1QfOjQU-YyFWA8jTOJQuHY_gH_fbf3Npkhrhac2TSw4z6UK4zntUfsoZfdSzH5RdZgYw4srOXkITF-5eulnsliiBHJK_WZfycVsKk07fXuWN04OiDvf6AH9VQ==) *(vertexaisearch.cloud.google.com)*
  > TWO AXES: the sticky element that could not pick a scroller Chrome 153 · stable 8 Sep 2026 · feature-detected Two axes A horizontal strip inside a vertical page, with one label that has to stay pinned to the left of the strip and to the top of the vi...
- [bram.us](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF05oRZeadxG8LXDoAbQuVPRKHg7I2rJBz0v6BzjNeqn2pxWNbQgg-b2CiDCZ8wVSW4y_vw9sCrL8asEX6IyoDnJYnXLqkHufpydDhU076_SJPDfx8RmsWkxaw1TrOfi68tT4JoA1p5AAk=) *(vertexaisearch.cloud.google.com)*
  > CSS position: sticky now sticks to the nearest scroller on a per axis basis! &#8211; Bram.us Skip to content Bram.us A rather geeky/technical weblog, est. 2001, by Bramus CSS position: sticky now sticks to the nearest scroller on a per axis basis! Po...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFHVhapoi-PFhWkPWLjwViHWTS7B90UAKJ0163FIgRMntmFOqfISmrsoc4UgykqMVhtEK5d-kjxmppLVaLXdv26wvBWNZ3aaEu3Wy9njk39rstmzNAOq1JC0jmvEC46CZsdbQuWBCagpQOW) *(vertexaisearch.cloud.google.com)*
  > Other Spec Review: Single-Axis Scroll Containers · Issue #1222 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload ...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Best, &gt;&gt;&gt; &gt;&gt;&gt; Alex &gt;&gt;&gt; &gt;&gt;&gt; On Tuesday, August 11, 2026 at 11:26:16 AM UTC-7 Chromestatus wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; *Contact emails* &gt;&gt;&gt;&gt; [email protected] &gt;&gt;&g...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)*
  > Explainer https://github.com/explainers-by-googlers/single-axis-scroll-containers Specification https://github.com/w3c/csswg-drafts/pull/13903 Summary <strong>Extends the `overflow` property to support scrollable values together with `clip`</strong> ...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)*
  > Best, Alex On Tuesday, August 11, 2026 at 11:26:16 AM UTC-7 Chromestatus wrote: &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https://<strong>github.com/explainers-by-googlers/single-axis-scroll-containers</strong> &gt; &gt;...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)*
  > Blink component Blink&gt;Scroll Web Feature ID scroll-snap Motivation This is part of the single-axis scroll container feature (https://github.com/explainers-by-googlers/single-axis-scroll-containers) to <strong>align the scroll snap behavior with th...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17200.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; *Blink component* &gt;&gt; Blink&gt;Layout ... a way to make a scroll container responsible &gt;&gt; for only a single axis. The affects features that depend on scroll &gt;&gt; containers, namely `position: sticky` and DOM scroll AP...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17374.html) *(mail-archive.com)*
  > This allows `position: sticky` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using `overflow: clip` stays in place.
- [How to use CSS Scroll Snap - LogRocket Blog](https://blog.logrocket.com/how-to-use-css-scroll-snap) *(blog.logrocket.com · 2024-06-04T21:29:41)*
  > What amazes me is that we don’t have anything else to do other than add the CSS lines below to automatically make the scroll snap to each box. &lt;style&gt; .container { width: 60vw; height: 70vh; margin: 15vh auto; overflow-x: scroll; scroll-snap-ty...
- [CSS @container scroll-state: Replace JS scroll listeners now - LogRocket Blog](https://blog.logrocket.com/css-container-scroll-state) *(blog.logrocket.com · 2026-03-27T14:43:50)*
  > The scroll-state() function currently supports three main queries that replace common JavaScript scroll hacks: This query detects when a position: sticky element has attached itself to one of its boundaries. You can target positions like top, bottom,...
- [Mastering Scroll: Concepts, Use Cases, Architecture, and Implementation Guide - scmGalaxy](https://www.scmgalaxy.com/tutorials/mastering-scroll-concepts-use-cases-architecture-and-implementation-guide) *(scmgalaxy.com · 2026-02-21T07:13:48)*
  > CSS is used to style the container with properties like overflow (which determines how content that exceeds the container should behave). overflow: auto allows scrolling when the content overflows.
- [JavaScript scrollIntoView() Explained By Examples](https://www.javascripttutorial.net/javascript-dom/javascript-scrollintoview) *(javascripttutorial.net · 2023-12-17T10:16:36)*
  > To align the JavaScript list item to the bottom of the view, you pass false value to the scrollIntoView() method:
- [Javascript scrollIntoView() method \| by Twinkal Doshi \| Medium](https://twinkal189.medium.com/javascript-scrollintoview-method-198436f81648) *(twinkal189.medium.com · 2024-03-03T06:53:39)*
  > &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;style&gt; #scroll-div { margin-left: 100%; padding-right: 100%; height: 800px; background-color: pink; overflow: auto; } &lt;/style&gt; &lt;body&gt; &lt;h1&gt;Javascript scrollIntoView&lt;/h1&gt; &lt;button oncl...
- [Define where an element should be scrolled to using elem.scrollIntoView \| Stefan Judis Web Development](https://www.stefanjudis.com/today-i-learned/define-where-an-element-should-be-scrolled-to-using-elem-scrollintoview) *(stefanjudis.com · 2023-11-27T07:21:55)*
  > document.querySelector(&#x27;.some-elem&#x27;).scrollIntoView({ behavior: &#x27;smooth&#x27;, // &#x27;auto&#x27; or &#x27;smooth&#x27; block: &#x27;center&#x27;, // &#x27;start&#x27;, &#x27;center&#x27;, &#x27;end&#x27; or &#x27;nearest&#x27; inline...
- [React scrollIntoView with useRef: Scroll to an Element (2026) - DEV Community](https://dev.to/childrentime/react-scrollintoview-with-useref-scroll-to-an-element-2026-4ha4) *(dev.to · 2026-08-18T01:54:50)*
  > <strong>The hook animates by assigning scrollTop/scrollLeft every frame</strong>. If CSS also says that box scrolls smoothly, the browser tries to animate each of those ~60 assignments and the result is a stuttering mess.
- [scrollIntoView: Browser Support, Options, Issues](https://www.testmuai.com/learning-hub/scrollintoview-browser-support) *(testmuai.com · 2026-05-02T00:00:00)*
  > scrollIntoView is a JavaScript method on the Element interface, defined by the W3C CSSOM View Module, that <strong>scrolls an element into the visible viewport</strong>.
- [HTML DOM Element scrollIntoView() Method](https://www.w3schools.com/jsref/met_element_scrollintoview.asp) *(w3schools.com)*
  > cssText getPropertyPriority() ... ❮ Previous ❮ Element Object Reference Next ❯ · <strong>Scroll the element with id=&quot;content&quot; into the visible area of the browser window</strong>: const element = document.getElementById(&quot;content&quot;)...
- [scrollIntoView axis options](https://codepen.io/stefanjudis/pen/wvMVLOQ) *(codepen.io)*
  > To get the best cross-browser support, it is a common practice to apply vendor prefixes to CSS properties and values that require them to work. For instance -webkit- or -moz-.
- [Take control of your scroll - customizing pull-to-refresh and overflow effects \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/overscroll-behavior) *(developer.chrome.com · 2017-11-14T00:00:00)*
  > For situations like the Twitter PWA, it might make sense to disable the native pull-to-refresh action. Why? In this app, you probably don&#x27;t want the user accidentally refreshing the page. There&#x27;s also the potential to see a double refresh a...
- [7 ways to lock down AI agent sandboxes in production (beyond Docker containers)](https://dev.to/googleai/7-ways-to-lock-down-ai-agent-sandboxes-in-production-beyond-docker-containers-2bg3) *(dev.to · Praveen Rajasekar · Sep 28)*
  > Running an autonomous coding or ops agent directly on your laptop feels like a superpower for the...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Best, &gt;&gt;&gt; &gt;&gt;&gt; Alex &gt;&gt;&gt; &gt;&gt;&gt; On Tuesday, August 11, 2026 at 11:26:16 AM UTC-7 Chromestatus wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; *Contact emails* &gt;&gt;&gt;&gt; [email protected] ...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Explainer https://github.com/explainers-by-googlers/single-axis-scroll-containers Specification https://github.com/w3c/csswg-drafts/pull/13903 Summary <strong>Extends the `overflow` property to support scrollable values together with `clip`...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Best, Alex On Tuesday, August 11, 2026 at 11:26:16 AM UTC-7 Chromestatus wrote: &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https://<strong>github.com/explainers-by-googlers/single-axis-scroll-containers</strong>...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Blink component Blink&gt;Scroll Web Feature ID scroll-snap Motivation This is part of the single-axis scroll container feature (https://github.com/explainers-by-googlers/single-axis-scroll-containers) to <strong>align the scroll snap behavi...

## 📚 Platform Documentation & Specifications

- [Single-axis scroll containers · Issue #1436 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1436) *(github.com)*
- [Other Spec Review: Scroll snap for single-axis scroll container · Issue #1266 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1266) *(github.com)*
- [Element: scrollIntoView() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 8 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5067363861004288" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/explainers-by-googlers/single-axis-scroll-containers" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"github.com/w3c/csswg-drafts/pull/13903" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Single-axis scroll containers" API` — *Core feature API query* (7 returned)
  - `"Single-axis scroll containers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"scrollintoview()" OR "single-axis" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Single-axis scroll containers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Single-axis scroll containers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **2 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 559 item(s) inspected

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
