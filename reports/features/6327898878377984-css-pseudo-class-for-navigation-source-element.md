# CSS pseudo-class for navigation source element

> **Report Week:** 2026-W44 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Selects the element that initiated the navigation, whether it's a link/button/form. The element stays selected throughout the navigation.

### Motivation

The main motivation for this comes from view transitions. This gives author a way to visually indicate a relationship between the navigation source (form/button) and the process of the navigation, e.g. expanding a thumbnail using an animation.

## Ecosystem Status

- **Momentum:** Emerging (footprint 161 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** The \`:navigation-source\` pseudo-class (formerly drafted as \`:nav-source\` in CSS Navigation Matching Level 1) selects the interactive element—such as a link, button, or form—that triggered a navigation and keeps it matched throughout the transition lifecycle. Primarily motivated by cross-document View Transitions, it enables purely declarative styling and transition-scoping without brittle JavaScript click-interception. While Chromium has moved rapidly toward shipping it enabled by default, it remains an emerging standard without multi-engine interoperability.

### Recommendations
- Actionable Advice: Web teams should treat \`:navigation-source\` as a progressive enhancement, gating rules behind \`@supports selector(:navigation-source)\` to enrich view transitions and loading feedback in supporting browsers. Avoid relying on it as a single source of truth for critical navigation states until Safari and Firefox implement the selector.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @noamr: "&gt; \[@noamr\](https://github.com/noamr) I guess the main use case is view-transitions, right? Doesn't seem particularly complicated I suppose  Right, but..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "What’s new in Chrome 156. CSS gains the random() function, the :navigation-source pseudo-class for the element that star" (1 points, 0 comments).

## Standards Positions

- **WebKit:** [CSS :navigation-source pseudo-class](https://github.com/WebKit/standards-positions/issues/715) [open]
- **Mozilla:** [CSS \`:navigation-source\` pseudo-class](https://github.com/mozilla/standards-positions/issues/1447) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [What’s new in Chrome 156. CSS gains the random() function, the :navigation-source pseudo-class for the element that star](https://twitter.com/webstandardsdev/status/2112846568810246470) — *by @webstandardsdev, 1 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [googleusercontent.com](https://doc-3b8g-3g80-issuetracker.googleusercontent.com/issues/552040976) *(doc-3b8g-3g80-issuetracker.googleusercontent.com)*
  > The \*\*CSS pseudo-class for navigation source element\*\* has been standardized and implemented as \*\*\`:navigation-source\`\*\* (under the \*\*CSS Navigation Matching Level 1\*\* specification) \*\*Spec Rename Resolution:\*\* In GitHub issue discussions led by fant...
- [CSS Navigation Matching, Early Days \| CSS-Tricks](https://css-tricks.com/css-navigation-matching-early-days) *(css-tricks.com)*
  > \*\*Selector Syntax:\*\* \`:navigation-source\` (earlier draft name: \`:nav-source\`) David Baron, Noam Rosenthal, and Bramus Van Damme)
- [netlify.app](https://alexanderburgos.netlify.app/blog/chrome-navigation-source-pseudo-class) *(alexanderburgos.netlify.app)*
  > \*\*Persistence:\*\* Unlike \`:active\` (which disappears immediately when the click/touch interaction ends), \`:navigation-source\` remains matched \*\*throughout the entire duration of the navigation\*\* until the next page loads or navigation completes \*\*Scop...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com)*
  > The feature officially shipped enabled-by-default in Chromium browsers The release notes highlight its tight integration with the \*\*Cross-Document View Transitions API\*\*, explaining that authors no longer have to manually assign transient transition ...
- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Chromestatus Thu, 03 Sep 2026 02:53:34 -0700 Contact emails \[e...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17393.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Rick Byers Tue, 08 Sep 2026 14:35:35 -0700 Oh very coo...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17395.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Philip Jägenstedt Wed, 09 Sep 2026 00:05:38 -0700 LGTM...
- [CSS :navigation-sourceで遷移元のリンクやフォームを選ぶ](https://techinnovateit.com/css-navigation-source-pseudo-class) *(techinnovateit.com · 2026-10-20T20:23:28)*
  > &lt;strong&gt;一覧から遷移を始めたリンクだけをCSSで選び、そのサムネイルと詳細側の画像を同じView Transition名で結びます&lt;/strong&gt;。 ... 押されたリンクをCSSで見分けることはできます。JavaScriptでクリッ...
- [Chrome Platform Status](https://chromestatus.com/feature/5076557983121408) *(chromestatus.com)*
  > We cannot provide a description for this page right now

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

- [github.com](https://github.com/w3c/csswg-drafts/issues/14303) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/715) *(github.com)*
- [\[css-navigation-1\] Add pseudo-class selector to target the element that initiated the outgoing navigation · Issue #11801 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11801) *(github.com)*
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1447) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 62 result(s) found across 12 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/6327898878377984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"drafts.csswg.org/css-navigation-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"CSS pseudo-class for navigation source element" API` — *Core feature API query* (2 returned)
  - `"CSS pseudo-class for navigation source element" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"pseudo-class" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS pseudo-class for navigation source element" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS pseudo-class for navigation source element" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `":navigation-source" OR "navigation source pseudo-class" "view transitions" CSS` — *Finds CSS syntax examples and code snippets demonstrating how to style the element that initiated navigation during a view transition.* (7 returned)
  - `"navigation-source" OR "navigation source element" (tutorial OR guide OR "how to") "view transition"` — *Discovers community blog posts, explainers, and practical tutorials detailing use cases like expanding thumbnail animations.* (8 returned)
  - `site:chromestatus.com OR site:github.com/WebKit/standards-positions OR site:github.com/mozilla/standards-positions "navigation-source" OR "css-navigation"` — *Tracks browser vendor positions, implementation status in Chromium, and consensus among WebKit and Mozilla.* (8 returned)
  - `site:github.com/w3c/csswg-drafts ("navigation-source" OR "navigation source pseudo-class")` — *Surfaces CSS Working Group spec issue discussions, naming bikeshedding, and edge-case resolutions around navigating element states.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 1 result(s) found — **1 verified relevant**

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
