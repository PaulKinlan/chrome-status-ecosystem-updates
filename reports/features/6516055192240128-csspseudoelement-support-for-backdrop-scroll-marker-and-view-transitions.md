# CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions

> **Report Week:** 2026-W41 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Support for CSSPseudoElement - which is currently only defined for ::after, ::before, and ::marker - is now being extended to include several new pseudo-elements:  ::backdrop: useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog's content. This eliminates the need for complex intersection logic to determine where the click occurred.  ::scroll-marker: can be used to collect click statistics.  view transitions: enables geometry-aware view transitions.It also allows you to intercept a view transition mid-flight to start a new one, utilizing the coordinates of the currently animating element to avoid sudden visual jumps.

### Motivation

Support for CSSPseudoElement - which is currently only defined for ::after, ::before, and ::marker - is now being extended to include several new pseudo-elements:

::backdrop: useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog's content. This eliminates the need for complex intersection logic to determine where the click occurred.

::scroll-marker: can be used to collect click statistics.

view transitions: enables geometry-aware view transitions.It also allows you to intercept a view transition mid-flight to start a new one, utilizing the coordinates of the currently animating element to avoid sudden visual jumps.

## Ecosystem Status

- **Momentum:** High (260 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @danielsakhapov: "Addition - in https://github.com/w3c/csswg-drafts/issues/13804 it was resolved that CSSPseudoElement now supports all standardized non-element-backed ..."
- Standards Activity (Mozilla): Latest discussion from @danielsakhapov: "Addition - in https://github.com/w3c/csswg-drafts/issues/13804 it was resolved that CSSPseudoElement now supports all standardized non-element-backed ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "scroll-marker を使うと CSS だけでカルーセルが作れる！" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [CSSPseudoElement interface](https://github.com/WebKit/standards-positions/issues/607) [open]
- **Mozilla:** [CSSPseudoElement interface](https://github.com/mozilla/standards-positions/issues/1345) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [scroll-marker を使うと CSS だけでカルーセルが作れる！](https://twitter.com/azukiazusa9/status/1903317104914469263) — *by @azukiazusa9, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [CSS Design Awards on Twitter](https://twitter.com/cssdesignawards/status/676881914825859072) — *by @cssdesignawards, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/status/2092690739130196410) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16597.html) *(mail-archive.com)*
  > Best, Alex On Tuesday, May 26, ... to include several &gt; new pseudo-elements: ::backdrop: <strong>useful for closing a dialog when the &gt; backdrop is clicked, without interfering with clicks inside the dialog&#x27;s &gt; content</strong>....
- [Re: \[blink-dev\] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16843.html) *(mail-archive.com)*
  > On Thursday, June 4, 2026 at 11:01:29 PM UTC+3 Daniil Sakhapov wrote: &gt; ::scroll-marker click detection has been requested by our partners trying &gt; out CSS Carousels &gt; ::backdrop can be used to avoid intersection checks on dialog dismiss (by...
- [\[blink-dev\] Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16588.html) *(mail-archive.com)*
  > Explainer No information provided ... to include several new pseudo-elements: ::backdrop: <strong>useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog&#x27;s content</strong>....
- [A guide to CSS pseudo-elements - LogRocket Blog](https://blog.logrocket.com/css-pseudo-elements-guide) *(blog.logrocket.com · 2024-06-04T21:04:25)*
  > <strong>The ::backdrop CSS pseudo-element represents a viewport-sized box rendered immediately beneath any element being presented in full-screen mode</strong>.
- [View Transitions API and CSS Scroll-Driven Animations: The Browser Wins of 2026 \| Frontend Horizon](https://www.frontendhorizon.com/blog/view-transitions-api-and-css-scroll-driven-animations-the-browser-wins-of-2026) *(frontendhorizon.com · 2026-07-06T00:00:00)*
  > <strong>CSS scroll-driven animations let you tie an animation to scroll position</strong>. No JavaScript IntersectionObserver, no scroll-event listeners, no main-thread blocking — the animation runs on the compositor.
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > Support for CSSPseudoElement, ... <strong>::backdrop: Helps close a dialog when the backdrop is clicked without interfering with clicks inside the dialog content, eliminating the need for complex intersection logic</strong>...
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > Support for CSSPseudoElement, previously defined for ::after, ::before, and ::marker, extends to include several new pseudo-elements: ::backdrop: Helps close a dialog when the backdrop is clicked without interfering with clicks inside the dialog cont...
- [Microsoft Edge 152 web platform release notes (Aug. 27, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com · 2026-08-27T00:00:00)*
  > <strong>The CSSPseudoElement interface now supports the ::backdrop, ::scroll-marker, and ::view-transitions pseudo-elements, in addition to the ::after, ::before, and ::marker pseudo-elements</strong>.
- [Chrome 152 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/152) *(chromestatus.com · 2026-08-25T00:00:00)*
  > Tracking bug #327449602 ↗ (opens ... new pseudo-elements: ::backdrop: <strong>useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog&#x27;s content</strong>....
- [Intent to Ship: ::scroll-marker and ::scroll-marker-group for Carousel, ::column pseudo element for Carousel and ::scroll-button() pseudo elements](https://groups.google.com/a/chromium.org/g/blink-dev/c/7EQ8-VzPZh0/m/NMyrGCjuAAAJ) *(groups.google.com)*
  > Can you do a triage pass over the open issues and summarize here what you see the web compat risk to be for potentially upcoming spec changes to resolve the issues? Given this is an unpolyfillable CSS feature I assume we don&#x27;t expect much adopti...
- [CSS Wrapped 2024 - Chrome Demos](https://chrome.dev/css-wrapped-2024) *(chrome.dev)*
  > This year we also welcomed Safari in shipping view transitions and are looking forward to seeing Firefox continue working on their same-document implementation. ... Scroll-driven animations are a common UX pattern on the web. A scroll-driven animatio...
- [PWA \| Backdrop CMS](https://backdropcms.org/project/pwa) *(backdropcms.org · 2026-01-06T00:00:00)*
  > See the pwa.api.php file for a code example. The example assumes the images exist within your theme folder. Linking to uploaded media would require different code. By default, the manifest has the following properties: ... Reliable — Loads instantly ...
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152?hl=en) *(developer.chrome.com · 2026-08-25T15:50:03)*
  > ::scroll-marker: Used to collect click statistics. ::view-transition: <strong>Paves the way to supporting geometry-aware view transitions and intercepting a view transition mid-flight to start a new transition</strong>.

## 📚 Platform Documentation & Specifications

- [scroll-marker CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker) *(developer.mozilla.org)*
- [Use CSS transitions to scroll to element · GitHub](https://gist.github.com/desandro/4206095) *(gist.github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/152.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/152.md) *(github.com)*
- [::backdrop CSS pseudo-element - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop) *(developer.mozilla.org)*
- [\[css-pseudo\] Add ::backdrop and ::view-transitions to the CSSPseudoElement's allowed pseudo-elements list · Issue #13804 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13804) *(github.com)*
- [backdrop CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::backdrop) *(developer.mozilla.org)*
- [How to handle addEventListener on \`CSSPseudoElement\`? · Issue #12163 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12163) *(github.com)*
- [\[css-pseudo\] Add \`::scroll-marker\` and \`::scroll-button\` to the \`CSSPseudoElement\`'s allowed pseudo-elements list · Issue #13346 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13346) *(github.com)*
- [CSSPseudoElement](https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement) *(developer.mozilla.org)*
- [CSSPseudoElement: pseudo() method](https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement/pseudo) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 71 result(s) found across 12 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/6516055192240128" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"drafts.csswg.org/css-pseudo-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions" API` — *Core feature API query* (3 returned)
  - `"CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"transitions.it" OR ":scroll-marker" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"CSSPseudoElement" "::backdrop" ("dialog" OR "addEventListener")` — *Finds specific code examples and API usage for attaching click listeners or interacting with the ::backdrop pseudo-element interface on modal dialogs.* (8 returned)
  - `"CSSPseudoElement" ("::view-transition" OR "view transition") ("geometry" OR "mid-flight" OR "getBoundingClientRect")` — *Searches for developer examples demonstrating how to inspect the geometry and animate view-transition pseudo-elements mid-flight to avoid visual jumps.* (8 returned)
  - `"CSSPseudoElement" ("::backdrop" OR "::scroll-marker" OR "::view-transition") (tutorial OR guide OR "how to")` — *Discovers developer guides, tutorials, and deep-dives explaining practical use cases for newly supported CSSPseudoElement types.* (1 returned)
  - `"::scroll-marker" ("CSSPseudoElement" OR "addEventListener") ("click" OR "analytics")` — *Locates tutorials and practical implementation patterns for handling click tracking and analytics directly on carousel or container scroll markers.* (8 returned)
  - `"CSSPseudoElement" ("::backdrop" OR "::scroll-marker") ("Intent to Ship" OR "Chrome Platform Status" OR site:github.com/w3c/csswg-drafts)` — *Tracks browser implementation progress, standard committee debates, and shipping announcements across browser engines.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 352 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6516055192240128)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6516055192240128)
- [Specification](https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface)
