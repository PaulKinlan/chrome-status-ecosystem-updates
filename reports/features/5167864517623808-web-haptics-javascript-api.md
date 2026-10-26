# Web haptics JavaScript API

> **Report Week:** 2026-W44 | **Milestone:** Chrome 156 | **Category:** In developer trial (Behind a flag)

## Overview

Provides a JavaScript API for triggering semantic haptic feedback, such as hints, ticks, alignment confirmations, and boundary signals. User agents translate these semantic effects into platform-appropriate haptic feedback based on the available hardware and operating system.

### Motivation

Web developers currently have limited options for providing tactile feedback. The existing \`navigator.vibrate()\` API is primarily designed around mobile devices and requires developers to specify low-level vibration patterns. This does not map well to platforms that expose higher-level semantic haptic effects or different types of haptic hardware.  A semantic API allows developers to express the intent of the feedback rather than its physical vibration pattern, giving user agents flexibility to select an appropriate effect for the underlying platform and hardware.

## Ecosystem Status

- **Momentum:** Emerging (footprint 130 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Web Haptics JavaScript API is an emerging WICG incubation championed by Microsoft and Chromium engineers that replaces low-level vibration patterns with high-level semantic feedback triggers like ticks, hints, alignments, and boundary signals. Currently in Developer Trial behind a flag in Chrome 156, the proposal shifts tactile feedback to an intent-driven model that maps naturally to native OS haptic engines while preventing device fingerprinting. However, formal consensus across other major engines remains unestablished, leaving it in an experimental, single-engine prototyping phase.

### Recommendations
- Actionable Advice: Development teams should treat tactile cues strictly as progressive enhancement, experimenting with the API behind Chromium flags in local or staging builds while avoiding production dependency until cross-engine positions solidify. Never rely on haptics as the sole confirmation of an action, and ensure all user interactions remain fully accessible through visual and auditory affordances.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Web Haptic Feedback: Why It Refuses to Be More Tactile](https://swmansion.com/blog/haptic-feedback-on-the-web-why-the-web-deliberately-refuses-to-be-as-tactile-as-native-apps) *(swmansion.com)*
  > Rather than having developers script hard-coded millisecond buzzing arrays (e.g., \`\[100, 50, 100\]\`), the new proposal allows developers to express \*tactile intent\* via predefined semantic effects—such as \`"hint"\`, \`"tick"\`, \`"align"\`, and \`"edge"\` Th...
- [A HapticsDevice API for the Web](https://raw.githubusercontent.com/MicrosoftEdge/MSEdgeExplainers/main/HapticsDevice/explainer.md) *(raw.githubusercontent.com)*
  > # A HapticsDevice API for the Web Consider all sections required unless otherwise noted. Authors: \[Scott Low\](https://github.com/scottlow), \[Steve Becker\](https://github.com/SteveBeckerMSFT), \[Mario Bianucci\](https://github.com/mabian-ms), \[Ben Mathw...
- [\[blink-dev\] Intent to Prototype: Web Haptics API](http://www.mail-archive.com/blink-dev@chromium.org/msg16948.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Web Haptics API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Web Haptics API 'Alexander Kyereboah' via blink-dev Wed, 08 Jul 2026 11:41:59 -0700 \*Contact emails\* \[email&#160;protected\] , \[ema...
- [How to Make Your Website Vibrate with Web Haptics – Tutorial Emka](https://tutorial.emka.web.id/2026/03/how-to-make-your-website-vibrate-with-web-haptics.html) *(tutorial.emka.web.id · 2026-03-04T00:00:00)*
  > How to Make Your Website Vibrate with Web Haptics &#8211; Tutorial Emka Skip to content Tutorial Emka How to Make Your Website Vibrate with Web Haptics by Felix Ibo-Bukhara \| Posted on March 4, 2026 Ever felt your phone give a tiny &#8220;thump&#8221...
- [Web Haptics API \| MSEdgeExplainers](https://microsoftedge.github.io/MSEdgeExplainers/Haptics/explainer.html) *(microsoftedge.github.io)*
  > Given that, we prioritized syntax–semantics match — does the syntax honestly convey what the code does? A. Nested @haptic (primary) — an at-rule nested inside a style rule; fires when the parent selector starts matching. See Declarative API. B. Stand...
- [Feel the Web — Haptics API](https://liminzhu.github.io/BlinkOn21HapticsTalk) *(liminzhu.github.io)*
  > Read the explainer &amp; leave feedback! ... Trigger phase control — exit / both in addition to enter-only (e.g. haptic on sidebar open and close) ... Illustrative — user agents may choose different mappings. ... Extending navigator.vibrate() — bolti...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [A HapticsDevice API for the Web](https://raw.githubusercontent.com/MicrosoftEdge/MSEdgeExplainers/main/HapticsDevice/explainer.md) *(raw.githubusercontent.com)* *(Cites: `https://github.com/WICG/web-haptics`)*
  > # A HapticsDevice API for the Web Consider all sections required unless otherwise noted. Authors: \[Scott Low\](https://github.com/scottlow), \[Steve Becker\](https://github.com/SteveBeckerMSFT), \[Mario Bianucci\](https://github.com/mabian-ms), ...
- [New incubation: Web Haptics API from Limin Zhu (Edge) on 2026-04-28 (public-new-work@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-new-work/2026Apr/0009.html) *(lists.w3.org)* *(Cites: `https://github.com/WICG/web-haptics`)*
  > Hi everyone, Per disucssion in Web Haptics API � Issue #262 � WICG/proposals&lt;https://github.com/WICG/proposals/issues/262&gt;, we adopted WICG/web-haptics: Web Haptics API&lt;https://&lt;strong&gt;github.com/WICG/web-haptics&lt;/strong&gt;&gt; incub...
- [Re: New incubation: Web Haptics API from Marcos Caceres on 2026-04-28 (public-new-work@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-new-work/2026Apr/0010.html) *(lists.w3.org)* *(Cites: `https://github.com/WICG/web-haptics`)*
  > Issue #262 · WICG/proposals &lt;https://github.com/WICG/proposals/issues/262&gt;, we adopted WICG/web-haptics: Web Haptics API &lt;https://&lt;strong&gt;github.com/WICG/web-haptics&lt;/strong&gt;&gt; incubation into WICG.
- [\[blink-dev\] Intent to Prototype: Web Haptics API](http://www.mail-archive.com/blink-dev@chromium.org/msg16948.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/web-haptics`)*
  > \[blink-dev\] Intent to Prototype: Web Haptics API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Web Haptics API 'Alexander Kyereboah' via blink-dev Wed, 08 Jul 2026 11:41:59 -0700 \*Contact emails\* \[email&#160;protect...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/WICG/web-haptics/blob/main/w3c-security-and-privacy.md) *(github.com)*
- [github.com](https://github.com/web-platform-tests/interop/issues/837) *(github.com)*
- [New incubation: Web Haptics API from Limin Zhu (Edge) on 2026-04-28 (public-new-work@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-new-work/2026Apr/0009.html) *(lists.w3.org)*
- [Re: New incubation: Web Haptics API from Marcos Caceres on 2026-04-28 (public-new-work@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-new-work/2026Apr/0010.html) *(lists.w3.org)*
- [Web Haptics API · Issue #262 · WICG/proposals](https://github.com/WICG/proposals/issues/262) *(github.com)*
- [MSEdgeExplainers/Haptics/explainer.md at main · MicrosoftEdge/MSEdgeExplainers](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/Haptics/explainer.md) *(github.com)*
- [GitHub - kyerebo/web-haptics: Web Haptics API · GitHub](https://github.com/kyerebo/web-haptics) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 50 result(s) found across 11 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/5167864517623808" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/web-haptics" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"Web haptics JavaScript API" API` — *Core feature API query* (1 returned)
  - `"Web haptics JavaScript API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"navigator.vibrate()" OR "vibrate()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Web haptics JavaScript API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Web haptics JavaScript API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"web haptics" OR "WICG/web-haptics" tutorial OR "semantic haptic feedback" guide` — *Find developer tutorials and introductory explainers covering semantic haptic feedback on the web.* (8 returned)
  - `"navigator.haptics" OR ("web haptics" AND ("alignment" OR "tick" OR "boundary")) example OR WebIDL` — *Target JavaScript code snippets, method calls, and WebIDL definitions showing how semantic haptics are invoked.* (3 returned)
  - `"web haptics" ("intent to prototype" OR "intent to ship" OR chromestatus OR "standards-positions")` — *Search for browser engine adoption signals, standards tracking, and implementation status across Blink and WebKit.* (1 returned)
  - `("web haptics" OR "WICG/web-haptics") "navigator.vibrate" (site:news.ycombinator.com OR site:reddit.com)` — *Discover developer sentiment, critiques, and community discussions comparing semantic web haptics to the legacy Vibration API.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **3 verified relevant**
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
- **Sources cited by the AI synthesis:** 2 result(s) found — **1 verified relevant**

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5167864517623808)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5167864517623808)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/531787872)
