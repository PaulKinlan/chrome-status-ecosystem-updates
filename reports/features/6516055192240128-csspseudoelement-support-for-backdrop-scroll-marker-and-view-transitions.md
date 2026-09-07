# CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions

> **Report Week:** 2026-W37 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Support for CSSPseudoElement - which is currently only defined for ::after, ::before, and ::marker - is now being extended to include several new pseudo-elements:

::backdrop: useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog's content. This eliminates the need for complex intersection logic to determine where the click occurred.

::scroll-marker: can be used to collect click statistics.

view transitions: enables geometry-aware view transitions.It also allows you to intercept a view transition mid-flight to start a new one, utilizing the coordinates of the currently animating element to avoid sudden visual jumps.

### Motivation

Support for CSSPseudoElement - which is currently only defined for ::after, ::before, and ::marker - is now being extended to include several new pseudo-elements:

::backdrop: useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog's content. This eliminates the need for complex intersection logic to determine where the click occurred.

::scroll-marker: can be used to collect click statistics.

view transitions: enables geometry-aware view transitions.It also allows you to intercept a view transition mid-flight to start a new one, utilizing the coordinates of the currently animating element to avoid sudden visual jumps.

## Ecosystem Status

- **Momentum:** High (320 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @danielsakhapov: "Addition - in https://github.com/w3c/csswg-drafts/issues/13804 it was resolved that CSSPseudoElement now supports all standardized non-element-backed ..."
- Standards Activity (Mozilla): Latest discussion from @danielsakhapov: "Addition - in https://github.com/w3c/csswg-drafts/issues/13804 it was resolved that CSSPseudoElement now supports all standardized non-element-backed ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSSPseudoElement interface](https://github.com/WebKit/standards-positions/issues/607) [open]
- **Mozilla:** [CSSPseudoElement interface](https://github.com/mozilla/standards-positions/issues/1345) [open]

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16597.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-...
- [Microsoft Edge 152 web platform release notes (Aug. 2026) - Microsoft Edge Developer documentation | Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > Using the CSSPseudoElement interface with these new pseudo-elements enables you to do the following: ::backdrop: <strong>Useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog&#x27;s content</stron...
- [New in Chrome 152 | Blog | Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-152) *(developer.chrome.com)*
  > For example, you can close a dialog ... complex intersection calculations. ::scroll-marker: <strong>Enables interaction handling on scroll markers, such as collecting click statistics</strong>....
- [Chrome 152 | Release notes | Chrome for Developers](https://developer.chrome.com/release-notes/152?hl=en) *(developer.chrome.com · 2026-08-25T15:50:03)*
  > Support for CSSPseudoElement, ... <strong>Helps close a dialog when the backdrop is clicked without interfering with clicks inside the dialog content, eliminating the need for complex intersection logic to determine where the click occurred. ::scroll...
- [CSS Wrapped 2025 - Chrome Demos](https://chrome.dev/css-wrapped-2025) *(chrome.dev)*
  > <strong>The ::scroll-marker pseudo-element represents a marker for an element within a scroll container</strong>. These markers are grouped in a ::scroll-marker-group and behave like anchor links, letting users jump directly to a specific item in the...
- [Re: [blink-dev] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16843.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Best, &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Alex ... &gt;&gt;&gt;&gt;&gt; several &gt;&gt;&gt;&gt;&gt; new pseudo-elements: ::backdrop: <strong>useful for closing a dialog when the &gt;&gt;&gt;&gt;&gt; backdrop is clicke...
- [Scroll-marker elements and pseudo-elements | carousel](https://flackr.github.io/carousel/scroll-marker) *(flackr.github.io)*
  > The ::scroll-marker pseudo-element will <strong>create a focusable marker which when activated will scroll the element into view</strong>. It behaves as an anchor link with a scrollTargetElement set to the pseudo-element’s owning element.
- [CSS ::backdrop Pseudo-element](https://www.w3schools.com/cssref/sel_backdrop.php) *(w3schools.com)*
  > The numbers in the table specifies the first browser version that fully supports the pseudo-element. ... dialog::backdrop { background-color: #1fc8db; /* For browsers that do not support gradients */ background-image: linear-gradient(140deg, #EADEDB ...
- [::backdrop | CSS-Tricks](https://css-tricks.com/almanac/pseudo-selectors/b/backdrop) *(css-tricks.com · 2024-10-16T14:46:14)*
  > The ::backdrop CSS pseudo-element <strong>creates a backdrop that covers the entire viewport and is rendered immediately below a &lt;dialog&gt;, an element with the popup attribute, or any element that enters fullscreen mode using the Fullscreen API<...
- [CSS View Transitions Module Level 2](https://drafts.csswg.org/css-view-transitions-2) *(drafts.csswg.org · 2026-08-31T16:10:05)*
  > These captures are represented as a tree of pseudo-elements (detailed in § 5.2 View Transition Pseudo-elements), where the old visual state co-exists with the new state, allowing effects such as cross-fading while animating from the old to new size a...
- [Guides: View transitions | Next.js](https://nextjs.org/docs/app/guides/view-transitions) *(nextjs.org · 2026-08-25T00:00:00)*
  > If the destination suspends into a fallback first, no pair forms, and the content animates with its enter animation instead when it arrives. The morph works without any CSS. To customize it, add share=&quot;morph&quot; together with default=&quot;non...
- [CSS View Transitions | BigDevSoon Knowledge Pills](https://bigdevsoon.me/pills/css-view-transitions) *(bigdevsoon.me · 2026-02-24T00:00:00)*
  > <strong>::view-transition-group(*) controls the animation duration</strong>.
- [Effortless animations with CSS view transitions](https://giacomocavalieri.me/writing/effortless-animations-with-css-view-transitions) *(giacomocavalieri.me)*
  > <strong>The default animation can be changed using the ::view-transition-group() CSS pseudo-element</strong>. With our basic setup every element in the page will belong to a single group, being animated as one.
- [20 CSS View Transitions — Copy Paste Code | CodeFronts](https://codefronts.com/motion/css-view-transitions) *(codefronts.com · 2026-08-24T09:00:00)*
  > <strong>This is the native replacement for FLIP libraries and layout animations from a motion framework</strong> — no measuring, no getBoundingClientRect, no wrapper components. Each row needs its own unique name, and there is a practical ceiling wor...
- [[blink-dev] Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16588.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface Summary Support for CSSPseudoElement - which is currently only defined for ::after, ::before, and ::marker - is now being extended to in...
- [Chrome 152 | Release notes | Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > Support for CSSPseudoElement, previously defined for ::after, ::before, and ::marker, extends to include several new pseudo-elements: ::backdrop: Helps close a dialog when the backdrop is clicked without interfering with clicks inside the dialog cont...
- [[blink-dev] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16668.html) *(mail-archive.com)*
  > ::scroll-marker: can be used to collect &gt;&gt; click statistics. view transitions: enables geometry-aware view &gt;&gt; transitions.It also allows you to intercept a view transition mid-flight to &gt;&gt; start a new one, utilizing the coordinates ...
- [Intent to Ship: CSSPseudoElement interface](https://groups.google.com/a/chromium.org/g/blink-dev/c/l20Dc3XMo0c/m/-1x2PE-rBQAJ) *(groups.google.com)*
  > ... Either email addresses are anonymous for this group or you need the view member email addresses permission to view the original message ... SummaryCSSPseudoElement interface is <strong>a way to represent a pseudo-element in JS</strong>. CSSPseudo...
- [Chrome 152 beta | Blog | Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > Support for CSSPseudoElement, previously defined for ::after, ::before, and ::marker, extends to include several new pseudo-elements: ::backdrop: Helps close a dialog when the backdrop is clicked without interfering with clicks inside the dialog cont...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16597.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6516055192240128`)*
  > [blink-dev] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker a...
- [[css-pseudo-4] should CSSPseudoElement have a pseudo() method? · Issue #3836 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3836) *(github.com)* *(Cites: `https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface`)*
  > [css-pseudo-4] should CSSPseudoElement have a pseudo() method? · Issue #3836 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab...
- [Allow user-select on ::marker pseudoelements · Issue #8892 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8892) *(github.com · 2023-05-31T21:21:53)* *(Cites: `https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface`)*
  > Allow user-select on ::marker pseudoelements · Issue #8892 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload...
- [[css-pseudo] highlight pseudos and non-applicable properties · Issue #7591 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7591) *(github.com · 2022-08-11T10:45:36)* *(Cites: `https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface`)*
  > https://drafts.csswg.org/css-pseudo-4/#highlight-styling <strong>The highlight pseudo-elements can only be styled by a limited set of properties that do not affect layout and can be applied performantly in a highly dynamic environment</stro...

## 📚 Platform Documentation & Specifications

- [[css-pseudo-4] should CSSPseudoElement have a pseudo() method? · Issue #3836 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3836) *(github.com)*
- [Allow user-select on ::marker pseudoelements · Issue #8892 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8892) *(github.com)*
- [[css-pseudo] highlight pseudos and non-applicable properties · Issue #7591 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7591) *(github.com)*
- [Pseudo-elements - CSS - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) *(developer.mozilla.org)*
- [[css-pseudo] Add ::backdrop and ::view-transitions to the CSSPseudoElement's allowed pseudo-elements list · Issue #13804 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13804) *(github.com)*
- [scroll-marker CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker) *(developer.mozilla.org)*
- [Pseudo-elements - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) *(developer.mozilla.org)*
- [backdrop CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::backdrop) *(developer.mozilla.org)*
- [View Transition API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) *(developer.mozilla.org)*
- [CSS View Transitions Module Level 1](https://www.w3.org/TR/css-view-transitions-1) *(w3.org)*
- [CSSPseudoElement](https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement) *(developer.mozilla.org)*
- [Using element-scoped view transitions](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using_element-scoped) *(developer.mozilla.org)*
- [CSSPseudoElement: pseudo() method](https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement/pseudo) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 34 result(s) found across 7 planned queries — **29 verified relevant**
  - `"chromestatus.com/feature/6516055192240128" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-pseudo-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSSPseudoElement" ("::backdrop" OR "::scroll-marker") (dialog OR click OR event) (tutorial OR guide)` — *Finds developer guides and tutorials demonstrating how to attach event listeners to ::backdrop and ::scroll-marker pseudo-elements.* (5 returned)
  - `"element.pseudo" ("::backdrop" OR "::scroll-marker" OR "::view-transition")` — *Locates concrete JavaScript code examples and DOM API snippets using the element.pseudo() method with modern pseudo-elements.* (8 returned)
  - `"CSSPseudoElement" ("::view-transition" OR "view transitions") (geometry OR "mid-flight" OR animation)` — *Searches for advanced implementations and code patterns for geometry-aware or mid-flight interrupted view transitions via CSSPseudoElement.* (8 returned)
  - `"CSSPseudoElement" ("::backdrop" OR "::scroll-marker" OR "::view-transition") ("Intent to Ship" OR "Intent to Prototype" OR "Chromium" OR "WebKit")` — *Discovers browser engine intents, implementation tracking, and standardisation discussions across Chromium and WebKit.* (8 returned)
  - `"CSSPseudoElement" "::backdrop" ("close dialog" OR "click outside") -site:w3.org` — *Surfaces community feedback, sentiment, and blog discussions around solving the long-standing 'close dialog on backdrop click' problem with this API.* (0 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6516055192240128)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6516055192240128)
- [Specification](https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface)
