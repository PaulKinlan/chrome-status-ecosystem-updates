# CSS pseudo-class for navigation source element

> **Report Week:** 2026-W43 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Selects the element that initiated the navigation, whether it's a link/button/form. The element stays selected throughout the navigation.

### Motivation

The main motivation for this comes from view transitions. This gives author a way to visually indicate a relationship between the navigation source (form/button) and the process of the navigation, e.g. expanding a thumbnail using an animation.

## Ecosystem Status

- **Momentum:** Emerging (footprint 90 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The \`:navigation-source\` CSS pseudo-class has landed in Chrome and Edge (version 156), providing a declarative way to target the element that initiated an outgoing navigation or form submission. It is primarily motivated by View Transitions, allowing developers to smoothly connect elements like thumbnails or submit buttons across page navigations without writing imperative JavaScript. Standards discussions in the W3C CSSWG are underway, though broader multi-engine implementation and Baseline indexing have yet to materialize.

### Recommendations
- Actionable Advice: Treat this feature as a progressive enhancement. Because it is currently exclusive to Chromium-based browsers, rely on feature queries or conditional fallbacks while monitoring cross-browser adoption before using it in production-critical paths.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @noamr: "&gt; \[@noamr\](https://github.com/noamr) I guess the main use case is view-transitions, right? Doesn't seem particularly complicated I suppose  Right, but..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS :navigation-source pseudo-class](https://github.com/WebKit/standards-positions/issues/715) [open]
- **Mozilla:** [CSS \`:navigation-source\` pseudo-class](https://github.com/mozilla/standards-positions/issues/1447) [open]

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Chromestatus Thu, 03 Sep 2026 02:53:34 -0700 Contact emails \[e...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17393.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Rick Byers Tue, 08 Sep 2026 14:35:35 -0700 Oh very coo...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17395.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Philip Jägenstedt Wed, 09 Sep 2026 00:05:38 -0700 LGTM...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6327898878377984`)*
  > \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Chromestatus Thu, 03 Sep 2026 02:53:34 -0700 Contact...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17393.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6327898878377984`)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Rick Byers Tue, 08 Sep 2026 14:35:35 -0700 O...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17395.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Philip Jägenstedt Wed, 09 Sep 2026 00:05:38 ...
- [\[css-navigation-1\] Add pseudo-class selector to target the element that initiated the outgoing navigation · Issue #11801 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11801) *(github.com · 2025-02-28T12:59:38)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > \[css-navigation-1\] Add pseudo-class selector to target the element that initiated the outgoing navigation · Issue #11801 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appear...
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1447) *(github.com · 2026-08-25T08:30:57)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Re...

## 📚 Platform Documentation & Specifications

- [\[css-navigation-1\] Add pseudo-class selector to target the element that initiated the outgoing navigation · Issue #11801 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11801) *(github.com)*
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1447) *(github.com)*
- [\[css-view-transitions-2\] Syntax for navigation-matching · Issue #8925 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8925) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 49 result(s) found across 12 planned queries — **6 verified relevant**
  - `"chromestatus.com/feature/6327898878377984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"drafts.csswg.org/css-navigation-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"CSS pseudo-class for navigation source element" API` — *Core feature API query* (2 returned)
  - `"CSS pseudo-class for navigation source element" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"pseudo-class" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS pseudo-class for navigation source element" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS pseudo-class for navigation source element" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `":navigation-source" CSS "view-transition"` — *Finds code examples and technical documentation demonstrating the exact :navigation-source pseudo-class syntax combined with view transitions.* (0 returned)
  - `"navigation source" pseudo-class CSS "view transition" (tutorial OR guide OR example)` — *Discovers community developer guides, blog write-ups, and practical walk-throughs for styling navigation trigger elements.* (0 returned)
  - `"navigation-source" site:chromestatus.com OR "Intent to Prototype" OR "Intent to Ship"` — *Tracks browser vendor implementation status, milestones, and intent-to-implement signals for the CSS navigation source feature.* (0 returned)
  - `site:github.com/w3c/csswg-drafts OR site:github.com/WICG "navigation-source" OR "navigation source pseudo-class"` — *Surfaces specification debates, standards design discussions, and developer feedback in CSSWG and WICG issue trackers.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 3 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6327898878377984)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6327898878377984)
- [Specification](https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/530210946)
