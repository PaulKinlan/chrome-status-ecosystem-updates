# Web haptics JavaScript API

> **Report Week:** 2026-W46 | **Milestone:** Chrome 156 | **Category:** In developer trial (Behind a flag)

## Overview

Provides a JavaScript API for triggering semantic haptic feedback, such as hints, ticks, alignment confirmations, and boundary signals. User agents translate these semantic effects into platform-appropriate haptic feedback based on the available hardware and operating system.

### Motivation

Web developers currently have limited options for providing tactile feedback. The existing \`navigator.vibrate()\` API is primarily designed around mobile devices and requires developers to specify low-level vibration patterns. This does not map well to platforms that expose higher-level semantic haptic effects or different types of haptic hardware.  A semantic API allows developers to express the intent of the feedback rather than its physical vibration pattern, giving user agents flexibility to select an appropriate effect for the underlying platform and hardware.

## Ecosystem Status

- **Momentum:** Emerging (+40 points since 2026-10-19; footprint 130 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Web Haptics API is an emerging WICG incubation led by Microsoft Edge engineers designed to replace low-level vibration patterns with semantic, intent-driven tactile feedback like ticks, hints, and boundary signals. Currently available as an experimental developer trial in Chromium 156 (behind a feature flag on Windows 11), it encompasses both an imperative JavaScript method (\`navigator.playHaptics()\`) and an experimental declarative CSS proposal. However, consensus remains nascent, with Safari and Firefox registering no official signals and standards bodies actively debating declarative triggering models.

### Recommendations
- Actionable Advice: Development teams should treat this API strictly as experimental and avoid production dependencies until multi-engine consensus forms. For teams building progressive web apps targeting Windows hardware with haptic pens or touchpads, test using feature detection (\`'playHaptics' in navigator\`) solely as an optional progressive enhancement with a graceful no-op fallback.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [How the WICG Web Haptics API brings native tactile feedback to the web \| Tech Vogue](https://techvogue.blog/blog/how-wicg-web-haptics-api-brings) *(techvogue.blog)*
  > How the WICG Web Haptics API brings native tactile feedback to the web \| Tech Vogue Sunday 1 November 2026, 05:03 PM How the WICG Web Haptics API brings native tactile feedback to the web The late-2026 WICG Web Haptics API replaces navigator.vibrate(...
- [creativealive.com](https://creativealive.com/haptics-web-whats-possible-whats-fake-2026) *(creativealive.com)*
  > The main developer skepticism centers around \*\*cross-browser support\*\*, particularly whether Apple's WebKit/Safari will support the standard or continue its historically conservative stance on web-driven haptics due to battery and UX considerations
- [\[blink-dev\] Intent to Prototype: Web Haptics API](http://www.mail-archive.com/blink-dev@chromium.org/msg16948.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Web Haptics API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Web Haptics API 'Alexander Kyereboah' via blink-dev Wed, 08 Jul 2026 11:41:59 -0700 \*Contact emails\* \[email&#160;protected\] , \[ema...
- [Web Haptics API \| MSEdgeExplainers](https://microsoftedge.github.io/MSEdgeExplainers/Haptics/explainer.html) *(microsoftedge.github.io)*
  > Web Haptics API \| MSEdgeExplainers MSEdgeExplainers Web Haptics API Authors: Nesh Gandhe , Kevin Babbitt , Limin Zhu Status of this Document This document is a starting point for engaging the community and standards bodies in developing collaborative...
- [Feel the Web — Haptics API](https://liminzhu.github.io/BlinkOn21HapticsTalk) *(liminzhu.github.io)*
  > Should nested @haptic anchor standardization? ... These are open questions in the explainer — happy to dive into any of these or wherever the conversation goes. Activation model: split or uniform? Direct interaction fires freely; script-initiated req...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Web Haptics API](http://www.mail-archive.com/blink-dev@chromium.org/msg16948.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5167864517623808`)*
  > \[blink-dev\] Intent to Prototype: Web Haptics API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Web Haptics API 'Alexander Kyereboah' via blink-dev Wed, 08 Jul 2026 11:41:59 -0700 \*Contact emails\* \[email&#160;protect...
- [Web Haptics API \| MSEdgeExplainers](https://microsoftedge.github.io/MSEdgeExplainers/Haptics/explainer.html) *(microsoftedge.github.io)* *(Cites: `https://github.com/WICG/web-haptics`)*
  > Web Haptics API \| MSEdgeExplainers MSEdgeExplainers Web Haptics API Authors: Nesh Gandhe , Kevin Babbitt , Limin Zhu Status of this Document This document is a starting point for engaging the community and standards bodies in developing col...
- [New incubation: Web Haptics API from Limin Zhu (Edge) on 2026-04-28 (public-new-work@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-new-work/2026Apr/0009.html) *(lists.w3.org)* *(Cites: `https://github.com/WICG/web-haptics`)*
  > Hi everyone, Per disucssion in Web Haptics API � Issue #262 � WICG/proposals&lt;https://github.com/WICG/proposals/issues/262&gt;, we adopted WICG/web-haptics: Web Haptics API&lt;https://&lt;strong&gt;github.com/WICG/web-haptics&lt;/strong&gt;&gt; incub...
- [Re: New incubation: Web Haptics API from Marcos Caceres on 2026-04-28 (public-new-work@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-new-work/2026Apr/0010.html) *(lists.w3.org)* *(Cites: `https://github.com/WICG/web-haptics`)*
  > Issue #262 · WICG/proposals &lt;https://github.com/WICG/proposals/issues/262&gt;, we adopted WICG/web-haptics: Web Haptics API &lt;https://&lt;strong&gt;github.com/WICG/web-haptics&lt;/strong&gt;&gt; incubation into WICG.
- [Cascading Style Sheets (CSS) Working Group Teleconference – 29 October 2026](https://www.w3.org/2026/10/29-css-minutes.html) *(w3.org)* *(Cites: `https://github.com/WICG/web-haptics`)*
  > \[shows code example from explainer\] … assign haptic to specific event trigger … can also have anonymous syntax which simplifies trigger … advantage is that there&#x27;s specific cause and effect and lower latency … because UA already knows ...

## 📚 Platform Documentation & Specifications

- [New incubation: Web Haptics API from Limin Zhu (Edge) on 2026-04-28 (public-new-work@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-new-work/2026Apr/0009.html) *(lists.w3.org)*
- [Re: New incubation: Web Haptics API from Marcos Caceres on 2026-04-28 (public-new-work@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-new-work/2026Apr/0010.html) *(lists.w3.org)*
- [Cascading Style Sheets (CSS) Working Group Teleconference – 29 October 2026](https://www.w3.org/2026/10/29-css-minutes.html) *(w3.org)*
- [GitHub - kyerebo/web-haptics: Web Haptics API · GitHub](https://github.com/kyerebo/web-haptics) *(github.com)*
- [MSEdgeExplainers/Haptics/explainer.md at main · MicrosoftEdge/MSEdgeExplainers · GitHub](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/Haptics/explainer.md) *(github.com)*
- [Proposal: Declarative Web Haptics · Issue #13728 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/13728) *(github.com)*
- [Web Haptics API · Issue #262 · WICG/proposals · GitHub](https://github.com/WICG/proposals/issues/262) *(github.com)*
- [web-haptics/HOWTO.md at main · WICG/web-haptics · GitHub](https://github.com/WICG/web-haptics/blob/main/HOWTO.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 11 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5167864517623808" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/web-haptics" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"Web haptics JavaScript API" API` — *Core feature API query* (1 returned)
  - `"Web haptics JavaScript API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"navigator.vibrate()" OR "vibrate()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Web haptics JavaScript API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Web haptics JavaScript API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"web haptics" API (tutorial OR guide OR "semantic haptics")` — *Discovers developer guides, overviews, and tutorials introducing semantic web haptic feedback.* (8 returned)
  - `"navigator.haptics" OR "web-haptics" ("tick" OR "hint" OR "boundary") example` — *Finds real-world code samples, WebIDL definitions, and API method usage for semantic haptic signals.* (8 returned)
  - `"web haptics" (site:chromestatus.com OR site:github.com/mozilla/standards-positions OR site:github.com/WebKit/standards-positions)` — *Tracks browser vendor positions, implementation status, and standards roadmap across engines.* (8 returned)
  - `"WICG/web-haptics" OR ("web haptics" "navigator.vibrate") (sentiment OR feedback OR discussion)` — *Surfaces community opinions, developer discussions, and feedback comparing semantic haptics to navigator.vibrate.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 15 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 3 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5167864517623808)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5167864517623808)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/531787872)
