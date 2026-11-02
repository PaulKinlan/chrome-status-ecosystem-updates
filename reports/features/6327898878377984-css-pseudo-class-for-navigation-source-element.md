# CSS pseudo-class for navigation source element

> **Report Week:** 2026-W45 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Selects the element that initiated the navigation, whether it's a link/button/form. The element stays selected throughout the navigation.

### Motivation

The main motivation for this comes from view transitions. This gives author a way to visually indicate a relationship between the navigation source (form/button) and the process of the navigation, e.g. expanding a thumbnail using an animation.

## Ecosystem Status

- **Momentum:** Quiet (-10 points since 2026-10-12; footprint 150 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The \`:navigation-source\` pseudo-class targets whichever interactive element initiated an outgoing navigation and keeps it matched for the entire duration of the request. Shipped by default in Chromium 156, its primary driver is enabling fully declarative View Transitions without cumbersome JavaScript listeners, alongside providing instant in-flight loading feedback. However, the feature is currently a single-engine reality that is not yet tracked in Baseline, as formal positions in Gecko and WebKit remain open.

### Recommendations
- Actionable Advice: Use \`:navigation-source\` strictly as a progressive enhancement by guarding rules with \`@supports selector(:navigation-source)\` for in-flight UI state cues or opportunistic view transition names. Production applications relying on deterministic cross-document view transitions across all major browsers must continue using JavaScript-based activation handlers until cross-engine support expands.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @noamr: "&gt; \[@noamr\](https://github.com/noamr) I guess the main use case is view-transitions, right? Doesn't seem particularly complicated I suppose  Right, but..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS :navigation-source pseudo-class](https://github.com/WebKit/standards-positions/issues/715) [open]
- **Mozilla:** [CSS \`:navigation-source\` pseudo-class](https://github.com/mozilla/standards-positions/issues/1447) [open]

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > It matches whichever element initiated an outgoing navigation—such as an \`&lt;a&gt;\` link, a \`&lt;form&gt;\`, or a submit \`&lt;button&gt;\`—and \*\*remains matched for the entire duration of the navigation process\*\* \*\*Milestone:\*\* The pseudo-class shipped enabled by defau...
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/6327898878377984?gate=6247925882683392) *(img968-dot-cr-status.appspot.com)*
  > \*\*Primary Motivation:\*\* Declarative \*\*View Transitions\*\*
- [bram.us](https://www.bram.us/2026/07/30/styling-the-navigation-declarative-route-and-navigation-matching-in-css) *(bram.us)*
  > Previously, to animate an element from an index page to a detail page (e.g., expanding a clicked thumbnail), developers had to use JavaScript (\`pageswap\` / \`pagereveal\` listeners) to identify the clicked element and attach a temporary \`view-transitio...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com)*
  > CSS-Tricks followed up via its \*Bytes\* news stream noting Chrome and Edge's implementation rollout \*\*Milestone:\*\* The pseudo-class shipped enabled by default starting in \*\*Chromium 156\*\* (Chrome and Edge)
- [note.com](https://note.com/2gnote/n/nc829e6e8bf8f) *(note.com)*
  > \*\*Solving the "Double-Click" UX Pitfall:\*\* Commentators in developer blogs have noted a pragmatic, non-animation use case: UX feedback On slower mobile connections, users often tap a link multiple times because there is no immediate indication the pa...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17393.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Rick Byers Tue, 08 Sep 2026 14:35:35 -0700 Oh very coo...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17395.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Philip Jägenstedt Wed, 09 Sep 2026 00:05:38 -0700 LGTM...
- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Chromestatus Thu, 03 Sep 2026 02:53:34 -0700 Contact emails \[e...
- [CSS :navigation-sourceで遷移元のリンクやフォームを選ぶ](https://techinnovateit.com/css-navigation-source-pseudo-class) *(techinnovateit.com · 2026-10-20T20:23:28)*
  > 仕様案は、現在のナビゲーション状態を参照します。対象要素がsource elementである間に一致します。Chromeの説明では、遷移が続くあいだ選択状態が保たれます。一瞬のクリック状態とは異なる点です。 · 実用例は、商品一覧から詳細ページへの画像アニメーションです。遷移元リンク内のサムネイルを指定します。詳細側の画像にも、同じ名前を設定します。 · まず、文書間のView Transitionを有効にします。一覧ページと詳細ページの両方へ設定します。

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17393.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6327898878377984`)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Rick Byers Tue, 08 Sep 2026 14:35:35 -0700 O...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17395.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Philip Jägenstedt Wed, 09 Sep 2026 00:05:38 ...
- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Chromestatus Thu, 03 Sep 2026 02:53:34 -0700 Contact...
- [Other Spec Review: CSS navigation-based styling · Issue #1253 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1253) *(github.com · 2026-08-04T13:36:50)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > https://&lt;strong&gt;drafts.csswg.org/css-navigation-1&lt;/strong&gt; · https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md ·
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1447) *(github.com · 2026-08-25T08:30:57)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your...

## 📚 Platform Documentation & Specifications

- [\[css-navigation-1\] Add pseudo-class selector to target the element that initiated the outgoing navigation · Issue #11801 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/11801) *(github.com)*
- [Other Spec Review: CSS navigation-based styling · Issue #1253 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1253) *(github.com)*
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1447) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 55 result(s) found across 12 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/6327898878377984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"drafts.csswg.org/css-navigation-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"CSS pseudo-class for navigation source element" API` — *Core feature API query* (2 returned)
  - `"CSS pseudo-class for navigation source element" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"pseudo-class" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS pseudo-class for navigation source element" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS pseudo-class for navigation source element" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `":navigation-source" OR "navigation source element" "view transitions" tutorial OR guide` — *Finds developer blog posts and guides demonstrating how to style navigation source elements during view transitions.* (8 returned)
  - `":navigation-source" css ("view-transition-name" OR "animation") example` — *Discovers real-world CSS code examples applying transition styles to links, forms, or buttons initiating navigation.* (0 returned)
  - `"navigation source pseudo-class" OR ":navigation-source" "intent to prototype" OR "Chrome Platform Status"` — *Tracks browser vendor implementation status, intent signals, and platform milestone announcements.* (8 returned)
  - `site:github.com/w3c/csswg-drafts/issues "navigation-source" OR "css-navigation" "navigation source"` — *Surfaces specification debates, name resolution issues, and CSS Working Group community feedback.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 3 result(s) found — **0 verified relevant**

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
