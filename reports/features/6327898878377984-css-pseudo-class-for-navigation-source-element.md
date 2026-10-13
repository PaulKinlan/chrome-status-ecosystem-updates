# CSS pseudo-class for navigation source element

> **Report Week:** 2026-W42 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Selects the element that initiated the navigation, whether it's a link/button/form. The element stays selected throughout the navigation.

### Motivation

The main motivation for this comes from view transitions. This gives author a way to visually indicate a relationship between the navigation source (form/button) and the process of the navigation, e.g. expanding a thumbnail using an animation.

## Ecosystem Status

- **Momentum:** Emerging (footprint 160 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The \`:navigation-source\` pseudo-class, defined in the W3C CSS Navigation Level 1 specification, enables authors to declaratively target the element that initiated an outgoing navigation without requiring JavaScript. Chromium leads implementation with shipping scheduled for Chrome 156 to unlock seamless declarative View Transitions. However, the feature is not yet indexed in Baseline, and true cross-engine interoperability remains in its infancy.

### Recommendations
- Actionable Advice: Teams should treat \`:navigation-source\` strictly as an experimental progressive enhancement or prototype feature in Chromium canary builds. Production applications targeting cross-browser cross-document view transitions should continue utilizing JavaScript-based event listeners to assign dynamic transition names until cross-vendor support materializes.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @noamr: "&gt; \[@noamr\](https://github.com/noamr) I guess the main use case is view-transitions, right? Doesn't seem particularly complicated I suppose  Right, but..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS :navigation-source pseudo-class](https://github.com/WebKit/standards-positions/issues/715) [open]
- **Mozilla:** [CSS \`:navigation-source\` pseudo-class](https://github.com/mozilla/standards-positions/issues/1447) [open]

## 📰 Ecosystem Blogs & Articles

- [bsky.app](https://bsky.app/profile/bram.us/post/3mrv6z3ncls25) *(bsky.app)*
  > The \*\*CSS pseudo-class for navigation source element\*\* is officially specified as \*\*\`:navigation-source\`\*\* (initially prototyped and proposed under working titles such as \`:nav-source\` and \`:trigger-link\`) He outlined how \`:nav-source\` (now \`:navigat...
- [bram.us](https://www.bram.us/2026/07/30/styling-the-navigation-declarative-route-and-navigation-matching-in-css) *(bram.us)*
  > \* \*\*Specification & Context:\*\* Developed as part of the W3C \*\*CSS Navigation Matching\*\* specification (\`css-navigation-1\`) by editors and Chromium engineers including Bramus Van Damme, Noam Rosenthal, and David Baron Bramus Van Damme’s Explainer (\*Br...
- [chromestatus.com](https://chromestatus.com/feature/6327898878377984?gate=6247925882683392) *(chromestatus.com)*
  > \* \*\*Primary Motivation:\*\* Declarative \*\*View Transitions\*\*
- [CSS Navigation Matching, Early Days \| CSS-Tricks](https://css-tricks.com/css-navigation-matching-early-days) *(css-tricks.com)*
  > With \`:navigation-source\`, authors can assign transition names and states entirely in CSS He outlined how \`:nav-source\` (now \`:navigation-source\`), \`@location\` (or \`@route\`), and \`@navigation\` create a comprehensive declarative suite for page routing...
- [daily.dev](https://daily.dev/posts/css-navigation-matching-early-days-wqzz57pet) *(daily.dev)*
  > \* \*\*Summary:\*\* CSS-Tricks broke down the implications of the draft specification and Bramus's walkthrough
- [chromestatus.com](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > \* \*\*Rollout:\*\* Enabled by default in \*\*Chrome 156\*\* Chrome's release notes highlight that the feature removes the need for authors to juggle script-driven states while a multi-page app navigates between documents
- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Chromestatus Thu, 03 Sep 2026 02:53:34 -0700 Contact emails \[e...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17395.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Philip Jägenstedt Wed, 09 Sep 2026 00:05:38 -0700 LGTM...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17393.html) *(mail-archive.com)*
  > On Thu, Sep 3, 2026 at 5:46 AM ...ts.csswg.org/css-navigation-1/#navigation-source-pseudo-class &gt; &gt; \*Summary\* &gt; &lt;strong&gt;Selects the element that initiated the navigation, whether it&#x27;s a &gt; link/button/form&lt;/strong&gt;....

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Chromestatus Thu, 03 Sep 2026 02:53:34 -0700 Contact...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17395.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Philip Jägenstedt Wed, 09 Sep 2026 00:05:38 ...
- [Other Spec Review: CSS navigation-based styling · Issue #1253 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1253) *(github.com · 2026-08-04T13:36:50)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > Other Spec Review: CSS navigation-based styling · Issue #1253 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window...
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1447) *(github.com · 2026-08-25T08:30:57)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Re...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/w3c/csswg-drafts/issues/14303) *(github.com)*
- [\[css-navigation-1\] Add pseudo-class selector to target the element that initiated the outgoing navigation · Issue #11801 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11801) *(github.com)*
- [Other Spec Review: CSS navigation-based styling · Issue #1253 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1253) *(github.com)*
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1447) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 12 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/6327898878377984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"drafts.csswg.org/css-navigation-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"CSS pseudo-class for navigation source element" API` — *Core feature API query* (2 returned)
  - `"CSS pseudo-class for navigation source element" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"pseudo-class" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS pseudo-class for navigation source element" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS pseudo-class for navigation source element" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `":navigation-source" OR "navigation source element" "view transition" (tutorial OR guide OR explainer)` — *Locates developer guides and blog posts explaining practical patterns like thumbnail expansion during cross-document view transitions.* (8 returned)
  - `":navigation-source" "view-transition" css example` — *Finds CSS syntax examples and spec draft implementations demonstrating how the navigation source pseudo-class interacts with view transitions.* (1 returned)
  - `"navigation source" ("css-navigation" OR "csswg") ("intent to prototype" OR "chromestatus" OR "WICG")` — *Tracks browser vendor implementation signals, standards progress within CSSWG, and Chromium platform status.* (8 returned)
  - `site:github.com ("csswg-drafts" OR "WICG") "navigation source" OR ":navigation-source"` — *Discovers specification issue discussions, syntax naming debates, and developer feedback across W3C and WICG repositories.* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 4 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 7 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6327898878377984)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6327898878377984)
- [Specification](https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/530210946)
