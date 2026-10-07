# CSS pseudo-class for navigation source element

> **Report Week:** 2026-W41 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Selects the element that initiated the navigation, whether it's a link/button/form. The element stays selected throughout the navigation.

### Motivation

The main motivation for this comes from view transitions. This gives author a way to visually indicate a relationship between the navigation source (form/button) and the process of the navigation, e.g. expanding a thumbnail using an animation.

## Ecosystem Status

- **Momentum:** High (230 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The \`:navigation-source\` pseudo-class (part of CSS Navigation Level 1) is shipping enabled by default in Chrome 156, offering a declarative selector to target the originating link, button, or form throughout an active navigation. It is heavily driven by cross-document View Transitions use cases, enabling seamless visual continuity such as thumbnail expansions during page loads. While welcomed as an ergonomic replacement for brittle JavaScript state tracking, it remains a single-engine implementation without Baseline indexing.

### Recommendations
- Actionable Advice: Treat \`:navigation-source\` strictly as a progressive enhancement to enhance transition styling and loading indicators on Chromium browsers. Ensure critical UI feedback and accessibility fallbacks remain functional across non-Chromium browsers via \`@supports selector(:navigation-source)\` queries.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @noamr: "&gt; \[@noamr\](https://github.com/noamr) I guess the main use case is view-transitions, right? Doesn't seem particularly complicated I suppose  Right, but..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS :navigation-source pseudo-class](https://github.com/WebKit/standards-positions/issues/715) [open]
- **Mozilla:** [CSS \`:navigation-source\` pseudo-class](https://github.com/mozilla/standards-positions/issues/1447) [open]

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS pseudo-class for navigation source element Chromestatus Thu, 03 Sep 2026 02:53:34 -0700 Contact emails [e...
- [Re: \[blink-dev\] Intent to Ship: Navigation API: expose destination in navigation.transition](http://www.mail-archive.com/blink-dev@chromium.org/msg15470.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Navigation API: expose destination in navigation.transition Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Navigation API: expose destination in navigation.transition Chris Harrelson Wed, 17 Dec ...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17395.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS pseudo-class for navigation source element Philip Jägenstedt Wed, 09 Sep 2026 00:05:38 -0700 LGTM...
- [\[blink-dev\] Intent to Ship: Navigation API: expose destination in navigation.transition](http://www.mail-archive.com/blink-dev@chromium.org/msg15430.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Navigation API: expose destination in navigation.transition Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Navigation API: expose destination in navigation.transition Chromestatus Mon, 15 Dec 2025 04:06:...
- [\[blink-dev\] Intent to Prototype: Navigation API: expose destination in navigation.transition](https://www.mail-archive.com/blink-dev@chromium.org/msg14710.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Navigation API: expose destination in navigation.transition Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Navigation API: expose destination in navigation.transition Chromestatus Thu, 25 Sep 2...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17393.html) *(mail-archive.com)*
  > On Thu, Sep 3, 2026 at 5:46 AM ...ts.csswg.org/css-navigation-1/#navigation-source-pseudo-class &gt; &gt; *Summary* &gt; <strong>Selects the element that initiated the navigation, whether it&#x27;s a &gt; link/button/form</strong>....
- [CSS Pseudo-Classes Tutorial](https://rembertdesigns.hashnode.dev/css-pseudo-classes-tutorial) *(rembertdesigns.hashnode.dev · 2022-07-18T23:52:39)*
  > :focus- Selects an element that has gained focus via a pointing device. This could be for links, for example: Or for form inputs or textareas, like: :target- This pseudo-class is used with IDs, it matches when the hashtag in the current URL matches t...
- [Mastering CSS and HTML Pseudo - Classes: A Comprehensive Guide — tutorialpedia.org](https://www.tutorialpedia.org/blog/css-html-pseudo-class) *(tutorialpedia.org)*
  > Fundamental Concepts of CSS and HTML Pseudo - Classes ... <strong>A pseudo - class is a keyword added to a selector that specifies a special state of the selected element(s).</strong> It is denoted by a colon (:) followed by the pseudo - class name.
- [CSS Pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp) *(w3schools.com)*
  > <strong>A CSS pseudo-class is a keyword that can be added to a selector, to define a style for a special state of an element</strong>.
- [Comprehensive Guide to CSS Pseudo-Classes and Their Usage - Hongkiat](https://www.hongkiat.com/blog/definite-guide-css-pseudoclasses) *(hongkiat.com · 2024-08-15T10:00:48)*
  > <strong>Pseudo-classes and pseudo-elements can be used in CSS selectors but do not exist in the HTML source code</strong>. Instead, they are “inserted” by the user agent under certain conditions for use in style sheets.
- [A guide to CSS pseudo-elements - LogRocket Blog](https://blog.logrocket.com/css-pseudo-elements-guide) *(blog.logrocket.com · 2024-06-04T21:04:25)*
  > See the Pen Breadcrumb navigation with CSS ::after by Rahul (@_rahul) on CodePen. Automatically targeting the first letter of a given text block can help create rich typographical enhancements like drop caps. Doing so may sound tricky, but the ::firs...
- [CSS Pseudo Classes Explained for Beginners \| Udacity](https://www.udacity.com/blog/css-pseudo-classes-explained-for-beginners) *(udacity.com · 2021-09-09T18:42:58)*
  > Consider if the user is not using their mouse for navigation due to a limitation on hardware or personal disabilities. The hover option may not have any effect on this user. If they are instead using the tab button to move along the page elements, th...
- [Guide to Advanced CSS Selectors - Part Two \| Modern CSS Solutions](https://moderncss.dev/guide-to-advanced-css-selectors-part-two) *(moderncss.dev · 2020-12-30T00:00:00)*
  > <strong>Pseudo classes are keywords that are applied when they match the selected state or context of an element</strong>. These vastly increase the capabilities of CSS and enable functionality that in the past was often erroneously relegated to Java...
- [CSS Navigation Matching, Early Days \| CSS-Tricks](https://css-tricks.com/css-navigation-matching-early-days) *(css-tricks.com · 2026-08-19T15:00:18)*
  > And what about that :nav-source pseudo (which may be renamed to :navigation-source)? Again, gotta wrap my head around it all. But if I am understanding right, that’s to match the specific element that triggers the transition. It’s the source of the n...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [CSS Navigation · Issue #4301 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4301) *(github.com · 2026-09-03T09:32:09)* *(Cites: `https://chromestatus.com/feature/6327898878377984`)*
  > CSS Navigation · Issue #4301 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your s...
- [Updates for Chrome Canary, 18 Sept. 2026 by Elchi3 · Pull Request #30576 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30576) *(github.com)* *(Cites: `https://chromestatus.com/feature/6327898878377984`)*
  > Updates for Chrome Canary, 18 Sept. 2026 by Elchi3 · Pull Request #30576 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ...
- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > [blink-dev] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS pseudo-class for navigation source element Chromestatus Thu, 03 Sep 2026 02:53:34 -0700 Contact...
- [Re: \[blink-dev\] Intent to Ship: Navigation API: expose destination in navigation.transition](http://www.mail-archive.com/blink-dev@chromium.org/msg15470.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > Re: [blink-dev] Intent to Ship: Navigation API: expose destination in navigation.transition Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Navigation API: expose destination in navigation.transition Chris Harrelson We...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17395.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > Re: [blink-dev] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS pseudo-class for navigation source element Philip Jägenstedt Wed, 09 Sep 2026 00:05:38 ...
- [\[blink-dev\] Intent to Ship: Navigation API: expose destination in navigation.transition](http://www.mail-archive.com/blink-dev@chromium.org/msg15430.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > [blink-dev] Intent to Ship: Navigation API: expose destination in navigation.transition Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Navigation API: expose destination in navigation.transition Chromestatus Mon, 15 Dec 2...
- [\[blink-dev\] Intent to Prototype: Navigation API: expose destination in navigation.transition](https://www.mail-archive.com/blink-dev@chromium.org/msg14710.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > [blink-dev] Intent to Prototype: Navigation API: expose destination in navigation.transition Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Navigation API: expose destination in navigation.transition Chromestatus Thu...
- [\[css-navigation-1\] Add pseudo-class selector to target the element that initiated the outgoing navigation · Issue #11801 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11801) *(github.com · 2025-02-28T12:59:38)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > UPDATE: This selector only matches while a navigation is active. The animation-on-back-navigation part is to be handled by the https://<strong>drafts.csswg.org/css-navigation-1</strong>/ spec.
- [\[css-navigation-1\] Secure way to expose current document URL to CSS · Issue #14266 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14266) *(github.com · 2026-08-04T13:54:09)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > Note that allowing matches based on navigation URL is not the same as exposing it, as the author has to &quot;guess&quot; URL patterns and match them during navigations (which CSS cannot initiate). See https://<strong>drafts.csswg.org/css-n...
- [Other Spec Review: CSS navigation-based styling · Issue #1253 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1253) *(github.com · 2026-08-04T13:36:50)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > https://<strong>drafts.csswg.org/css-navigation-1</strong> · https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md ·
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1447) *(github.com · 2026-08-25T08:30:57)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > Specification title CSS :navigation-source pseudo-class Specification or proposal URL (if available) https://<strong>drafts.csswg.org/css-navigation-1</strong>/#navigation-source-pseudo-class Explainer URL (if available) https://github.com/...

## 📚 Platform Documentation & Specifications

- [CSS Navigation · Issue #4301 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4301) *(github.com)*
- [Updates for Chrome Canary, 18 Sept. 2026 by Elchi3 · Pull Request #30576 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30576) *(github.com)*
- [\[css-navigation-1\] Add pseudo-class selector to target the element that initiated the outgoing navigation · Issue #11801 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11801) *(github.com)*
- [\[css-navigation-1\] Secure way to expose current document URL to CSS · Issue #14266 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14266) *(github.com)*
- [Other Spec Review: CSS navigation-based styling · Issue #1253 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1253) *(github.com)*
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1447) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 42 result(s) found across 12 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/6327898878377984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"drafts.csswg.org/css-navigation-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"CSS pseudo-class for navigation source element" API` — *Core feature API query* (2 returned)
  - `"CSS pseudo-class for navigation source element" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"pseudo-class" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS pseudo-class for navigation source element" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS pseudo-class for navigation source element" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `":navigation-source" CSS "view transitions"` — *Finds technical code snippets and CSS rule implementations combining the :navigation-source pseudo-class with View Transitions.* (0 returned)
  - `"navigation-source" OR "navigation source element" CSS "view transition" (guide OR tutorial OR blog)` — *Surfaces community-written tutorials and practical design guides detailing how to animate the navigation trigger element during page navigations.* (1 returned)
  - `":navigation-source" ("Chrome Platform Status" OR "intent to prototype" OR "standards-positions")` — *Tracks browser vendor adoption, implementation milestones, and formal engine standards positions from Apple, Mozilla, and Google.* (0 returned)
  - `site:github.com ("w3c/csswg-drafts" OR "WICG") ":navigation-source" OR "navigation source"` — *Retrieves spec debates, issue tracker threads, and design feedback from web standards bodies regarding the pseudo-class naming and behavior.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 3 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 26 item(s) inspected

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
