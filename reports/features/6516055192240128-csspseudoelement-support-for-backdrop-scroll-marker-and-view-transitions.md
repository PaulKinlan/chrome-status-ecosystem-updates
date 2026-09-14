# CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions

> **Report Week:** 2026-W38 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Support for CSSPseudoElement - which is currently only defined for ::after, ::before, and ::marker - is now being extended to include several new pseudo-elements:  ::backdrop: useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog's content. This eliminates the need for complex intersection logic to determine where the click occurred.  ::scroll-marker: can be used to collect click statistics.  view transitions: enables geometry-aware view transitions.It also allows you to intercept a view transition mid-flight to start a new one, utilizing the coordinates of the currently animating element to avoid sudden visual jumps.

### Motivation

Support for CSSPseudoElement - which is currently only defined for ::after, ::before, and ::marker - is now being extended to include several new pseudo-elements:

::backdrop: useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog's content. This eliminates the need for complex intersection logic to determine where the click occurred.

::scroll-marker: can be used to collect click statistics.

view transitions: enables geometry-aware view transitions.It also allows you to intercept a view transition mid-flight to start a new one, utilizing the coordinates of the currently animating element to avoid sudden visual jumps.

## Ecosystem Status

- **Momentum:** High (300 points)
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

- [\[blink-dev\] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16597.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-...
- [Re: \[blink-dev\] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16843.html) *(mail-archive.com)*
  > On Thursday, June 4, 2026 at 11:01:29 PM UTC+3 Daniil Sakhapov wrote: &gt; ::scroll-marker click detection has been requested by our partners trying &gt; out CSS Carousels &gt; ::backdrop can be used to avoid intersection checks on dialog dismiss (by...
- [\[blink-dev\] Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16588.html) *(mail-archive.com)*
  > Explainer No information provided ... to include several new pseudo-elements: ::backdrop: <strong>useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog&#x27;s content</strong>....
- [CSS ::backdrop Pseudo-element](https://www.w3schools.com/cssref/sel_backdrop.php) *(w3schools.com)*
  > accent-color align-content align-items align-self all animation animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-timing-function aspect-ratio backdrop-f...
- [Day 22: the ::backdrop pseudo-element \| daily.dev](https://daily.dev/posts/day-22-the-backdrop-pseudo-element-kmhbpxmzx) *(daily.dev · 2026-06-22T14:45:20)*
  > A quick guide to the CSS ::backdrop pseudo-element, which <strong>lets you style the backdrop behind modal dialogs and fullscreen elements</strong>. Covers basic usage with...
- [CSS Pseudo-elements Reference](https://www.w3schools.com/CSSREF/css_ref_pseudo_elements.php) *(w3schools.com)*
  > accent-color align-content align-items align-self all animation animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-timing-function aspect-ratio backdrop-f...
- [CSS ::marker Pseudo-element](https://www.w3schools.com/cssref/sel_marker.php) *(w3schools.com)*
  > W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many, many more.
- [A guide to CSS pseudo-elements - LogRocket Blog](https://blog.logrocket.com/css-pseudo-elements-guide) *(blog.logrocket.com · 2024-06-04T21:04:25)*
  > <strong>The ::backdrop CSS pseudo-element represents a viewport-sized box rendered immediately beneath any element being presented in full-screen mode</strong>.
- [View Transitions API: Complete Guide to Page Transitions \| Effect.Labs Blog](https://effect-labs.com/en/pages/blog/page-transitions-api.html) *(effect-labs.com · 2026-02-10T00:00:00)*
  > Complete tutorial on the View Transitions API for smooth and native page transitions.
- [View Transitions API and CSS Scroll-Driven Animations: The Browser Wins of 2026 \| Frontend Horizon](https://www.frontendhorizon.com/blog/view-transitions-api-and-css-scroll-driven-animations-the-browser-wins-of-2026) *(frontendhorizon.com · 2026-07-06T00:00:00)*
  > Two browser features that landed cross-platform in 2025-2026 and changed what we ship for motion on FH client sites — without adding any JavaScript framework.
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > Support for CSSPseudoElement, previously defined for ::after, ::before, and ::marker, extends to include several new pseudo-elements: ::backdrop: Helps close a dialog when the backdrop is clicked without interfering with clicks inside the dialog cont...
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > Support for CSSPseudoElement, ... <strong>::backdrop: Helps close a dialog when the backdrop is clicked without interfering with clicks inside the dialog content, eliminating the need for complex intersection logic</strong>...
- [Microsoft Edge 152 web platform release notes (Aug. 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > <strong>The CSSPseudoElement interface now supports the ::backdrop, ::scroll-marker, and ::view-transitions pseudo-elements, in addition to the ::after, ::before, and ::marker pseudo-elements</strong>.
- [Chrome 152 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/152) *(chromestatus.com)*
  > Tracking bug #327449602 ↗ (opens ... new pseudo-elements: ::backdrop: <strong>useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog&#x27;s content</strong>....
- [CSS Wrapped 2024 - Chrome Demos](https://chrome.dev/css-wrapped-2024) *(chrome.dev)*
  > Custom Scrollbars demo. Use the color inputs to change the colors. ... In 2023, Chrome was the first browser to ship same-document view transitions, an exciting addition to the web platform that allows you to have rich and seamless transitions betwee...
- [PWA \| Backdrop CMS](https://backdropcms.org/project/pwa) *(backdropcms.org · 2026-01-06T00:00:00)*
  > See the pwa.api.php file for a code example. The example assumes the images exist within your theme folder. Linking to uploaded media would require different code. By default, the manifest has the following properties: ... Reliable — Loads instantly ...
- [View Transition API](https://progressier.com/pwa-capabilities/view-transition-api) *(progressier.com · 2026-05-13T00:00:00)*
  > Learn how View Transitions let you create smooth, automatic animations between page states for a more polished, app-like web experience.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16597.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6516055192240128`)*
  > [blink-dev] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker a...
- [\[css-pseudo-4\] should CSSPseudoElement have a pseudo() method? · Issue #3836 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3836) *(github.com)* *(Cites: `https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface`)*
  > [css-pseudo-4] should CSSPseudoElement have a pseudo() method? · Issue #3836 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab...
- [Allow user-select on ::marker pseudoelements · Issue #8892 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8892) *(github.com · 2023-05-31T21:21:53)* *(Cites: `https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface`)*
  > Allow user-select on ::marker pseudoelements · Issue #8892 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload...
- [\[css-pseudo\] highlight pseudos and non-applicable properties · Issue #7591 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7591) *(github.com · 2022-08-11T10:45:36)* *(Cites: `https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface`)*
  > https://drafts.csswg.org/css-pseudo-4/#highlight-styling <strong>The highlight pseudo-elements can only be styled by a limited set of properties that do not affect layout and can be applied performantly in a highly dynamic environment</stro...

## 📚 Platform Documentation & Specifications

- [\[css-pseudo-4\] should CSSPseudoElement have a pseudo() method? · Issue #3836 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3836) *(github.com)*
- [Allow user-select on ::marker pseudoelements · Issue #8892 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8892) *(github.com)*
- [\[css-pseudo\] highlight pseudos and non-applicable properties · Issue #7591 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7591) *(github.com)*
- [A beginner-friendly guide to view transitions in CSS \| MDN Blog](https://developer.mozilla.org/en-US/blog/view-transitions-beginner-guide) *(developer.mozilla.org)*
- [CSS view transitions - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/View_transitions) *(developer.mozilla.org)*
- [scroll-marker CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker) *(developer.mozilla.org)*
- [edge-developer/microsoft-edge/web-platform/release-notes/152.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/152.md) *(github.com)*
- [CSSPseudoElement](https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement) *(developer.mozilla.org)*
- [Using element-scoped view transitions](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using_element-scoped) *(developer.mozilla.org)*
- [CSSPseudoElement: pseudo() method](https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement/pseudo) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 43 result(s) found across 7 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/6516055192240128" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-pseudo-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions" API` — *Core feature API query* (3 returned)
  - `"CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"transitions.it" OR ":scroll-marker" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 348 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6516055192240128)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6516055192240128)
- [Specification](https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface)
