# Web haptics JavaScript API

> **Report Week:** 2026-W43 | **Milestone:** Chrome 156 | **Category:** In developer trial (Behind a flag)

## Overview

Provides a JavaScript API for triggering semantic haptic feedback, such as hints, ticks, alignment confirmations, and boundary signals. User agents translate these semantic effects into platform-appropriate haptic feedback based on the available hardware and operating system.

### Motivation

Web developers currently have limited options for providing tactile feedback. The existing \`navigator.vibrate()\` API is primarily designed around mobile devices and requires developers to specify low-level vibration patterns. This does not map well to platforms that expose higher-level semantic haptic effects or different types of haptic hardware.  A semantic API allows developers to express the intent of the feedback rather than its physical vibration pattern, giving user agents flexibility to select an appropriate effect for the underlying platform and hardware.

## Ecosystem Status

- **Momentum:** Emerging (footprint 90 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Web Haptics JavaScript API moves beyond the legacy, low-level navigator.vibrate() pattern by introducing a semantic approach to tactile feedback. Currently in developer trial behind a flag in Chrome 156, it allows developers to state UX intent rather than raw vibration parameters, though it is not yet indexed in Baseline.

### Recommendations
- Actionable Advice: Development teams should treat this feature as an experimental progressive enhancement. Test it behind flags in Chrome 156, but rely on safe feature detection and robust fallbacks for platforms where the API is unavailable.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://img544-dot-cr-status.appspot.com/feature/5167864517623808) *(img544-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [Web Haptic Feedback: Why It Refuses to Be More Tactile](https://swmansion.com/blog/haptic-feedback-on-the-web-why-the-web-deliberately-refuses-to-be-as-tactile-as-native-apps) *(swmansion.com)*
  > vibrate(\[200, 100, 200\])\`), the API focuses on design intent \*\*Discussion:\*\* This analysis explores the vast disconnect between native mobile UX and the web
- [Web Haptics: The NPM Package Everyone’s Adding for Haptic Feedback \| by Basanta Sapkota \| Medium](https://medium.com/@springmusk/web-haptics-the-npm-package-everyones-adding-for-haptic-feedback-4c774f10caaa) *(medium.com)*
  > The API requires \*\*user activation\*\* (transient interaction) and respects active document visibility, system-level "Do Not Disturb" settings, and a dedicated \`"haptics"\` Permissions Policy \*\*Sources:\*\* \*Medium ("The NPM Package Everyone’s Adding for ...
- [\[blink-dev\] Intent to Prototype: Web Haptics API](http://www.mail-archive.com/blink-dev@chromium.org/msg16948.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Web Haptics API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Web Haptics API 'Alexander Kyereboah' via blink-dev Wed, 08 Jul 2026 11:41:59 -0700 \*Contact emails\* \[email&#160;protected\] , \[ema...
- [Web Haptics API \| MSEdgeExplainers](https://microsoftedge.github.io/MSEdgeExplainers/Haptics/explainer.html) *(microsoftedge.github.io)*
  > .sidebar { transition: transform 300ms; transition-haptic-effect: align; } Syntax–semantics match — Does the syntax read like what it does? Haptics are transient events, not ongoing state. A syntax that reads as state (e.g.
- [Feel the Web — Haptics API](https://liminzhu.github.io/BlinkOn21HapticsTalk) *(liminzhu.github.io)*
  > Four semantic effects — hint · edge · tick · align — with optional intensity (0.0–1.0). Both paths target the most recent input device — if not haptics-capable, no-op (no rerouting). ... Nested at-rule fires when parent selector starts matching. No J...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Web Haptics API](http://www.mail-archive.com/blink-dev@chromium.org/msg16948.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5167864517623808`)*
  > \[blink-dev\] Intent to Prototype: Web Haptics API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Web Haptics API 'Alexander Kyereboah' via blink-dev Wed, 08 Jul 2026 11:41:59 -0700 \*Contact emails\* \[email&#160;protect...

## 📚 Platform Documentation & Specifications

- [GitHub - kyerebo/web-haptics: Web Haptics API · GitHub](https://github.com/kyerebo/web-haptics) *(github.com)*
- [Web Haptics API · Issue #262 · WICG/proposals](https://github.com/WICG/proposals/issues/262) *(github.com)*
- [\[Haptics\] Feedback for Web Haptics API · Issue #1241 · MicrosoftEdge/MSEdgeExplainers](https://github.com/MicrosoftEdge/MSEdgeExplainers/issues/1241) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 48 result(s) found across 11 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5167864517623808" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/web-haptics" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"Web haptics JavaScript API" API` — *Core feature API query* (0 returned)
  - `"Web haptics JavaScript API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"navigator.vibrate()" OR "vibrate()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Web haptics JavaScript API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Web haptics JavaScript API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"web haptics" OR "semantic haptics" (tutorial OR guide OR "how to") javascript` — *Finds early developer tutorials, explanatory blog posts, and practical guides on using the Web Haptics API.* (8 returned)
  - `"web-haptics" OR "navigator.haptics" (WebIDL OR "code example" OR interface) -site:github.com/WICG/web-haptics` — *Surfaces JavaScript syntax examples, proposed WebIDL interface definitions, and method invocations for triggering semantic haptic feedback.* (8 returned)
  - `"web haptics" OR "web-haptics" ("intent to prototype" OR "standards-positions" OR chromestatus)` — *Tracks browser vendor positions (Mozilla, WebKit, Chromium) and browser release lifecycle status for the API.* (2 returned)
  - `"web haptics" ("navigator.vibrate" OR tactile) (site:news.ycombinator.com OR site:reddit.com)` — *Discovers community sentiment, feedback, and architectural discussions comparing semantic haptics against navigator.vibrate on developer forums.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 15 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5167864517623808)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5167864517623808)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/531787872)
