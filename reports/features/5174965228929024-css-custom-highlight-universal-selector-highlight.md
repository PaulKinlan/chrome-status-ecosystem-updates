# CSS Custom Highlight Universal Selector ::highlight(\*)

> **Report Week:** 2026-W44 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Introduces a universal selector for custom highlights, ::highlight(\*), which matches the highlight pseudo-elements of all custom highlights regardless of their name.   The \* argument contributes zero specificity, so its declarations act as a base style that rules naming a specific highlight override through the cascade.

### Motivation

Styling shared properties across custom highlights requires repeating the same declarations for every registered name. The CSSWG resolved to allow ::highlight(\*).

## Ecosystem Status

- **Momentum:** Emerging (footprint 146 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** The \`::highlight(\*)\` universal selector represents an ergonomic upgrade to the CSS Custom Highlight API, standardized by the CSS Working Group within CSS Pseudo-Elements Module Level 4 and shipping enabled by default starting in Chrome 158. It allows authors to apply zero-specificity baseline declarations across every registered custom highlight without duplicating rules across individual names. While Chromium is the first engine to ship support, the feature stems from broad standards consensus and enjoys favorable alignment across browser vendors.

### Recommendations
- Actionable Advice: Teams should adopt progressive enhancement by isolating \`::highlight(\*)\` rules within \`@supports selector(::highlight(\*))\` checks to prevent older parsers from invalidating entire style blocks. Until Gecko and WebKit deliver matching implementations, continue supplying explicit named highlight rules as the reliable multi-browser styling baseline.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @jnjaeschke: "Agreeing with @emilio, I think this is reasonable...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "I just shipped CSS Custom Highlight Universal Selector! Coming in Chrome 158.  With ::highlight(\*), you can write a shar" (7 points, 2 comments).

## Standards Positions

- **WebKit:** [CSS Custom Highlight Universal Selector ::highlight(\*)](https://github.com/WebKit/standards-positions/issues/728) [open]
- **Mozilla:** [CSS Custom Highlight Universal Selector ::highlight(\*)](https://github.com/mozilla/standards-positions/issues/1460) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [I just shipped CSS Custom Highlight Universal Selector! Coming in Chrome 158.  With ::highlight(\*), you can write a shar](https://twitter.com/0xdevssh/status/2112468707553550554) — *by @0xdevssh, 7 likes/RTs, 2 replies*

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/feature/5174965228929024) *(cr-status.appspot.com)*
  > \*\*What it does:\*\* It allows developers to target all custom highlight pseudo-elements across a document using the \`\*\` wildcard argument, matching highlights regardless of their registered name \*\*Cascade & Specificity:\*\* The \`\*\` argument contributes \*...
- [appspot.com](https://img120-dot-cr-status.appspot.com/feature/5174965228929024?gate=6101897755885568) *(img120-dot-cr-status.appspot.com)*
  > Tracked under Chromium Feature Entry \*\*#5174965228929024\*\* (Blink component: \`Blink&gt;CSS\`), implemented by the Chromium team and scheduled for milestone release \*\*Mozilla (Firefox):\*\* Standard position issue opened at \[\`mozilla/standards-positions#146...
- [Custom Highlight Universal Selector ::highlight(\*) \| daily.dev](https://daily.dev/posts/custom-highlight-universal-selector-highlight--f416uv98z) *(daily.dev)*
  > dev\*) have highlighted \`::highlight(\*)\` as a welcome quality-of-life improvement, particularly for heavy-highlighting applications such as in-browser code editors (Monaco/CodeMirror), dynamic search overlays, and spellcheck tools
- [\[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17171.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*) Chromestatus Thu, 13 Aug 2026 17:35:...
- [\[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17786.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) 'Dan Clark' via blink-dev Mon, 19 Oct ...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17797.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Mike Taylor Mon, 19 Oct 2026 1...
- [\[blink-dev\] Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17719.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Chromestatus Wed, 14 Oct 2026 07:43:05 -0700 C...
- [\[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17730.html) *(mail-archive.com)*
  > On Wednesday, October 14, 2026 ... a universal selector for custom highlights, ::highlight(\*), &gt; which &lt;strong&gt;matches the highlight pseudo-elements of all custom highlights &gt; regardless of their name&lt;/strong&gt;....

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17171.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > \[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*) Chromestatus Thu, 13 Aug 2...
- [\[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17786.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) 'Dan Clark' via blink-dev Mo...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17797.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Mike Taylor Mon, 19 ...
- [\[blink-dev\] Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17719.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > \[blink-dev\] Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Chromestatus Wed, 14 Oct 2026 07:43:...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/web-platform-dx/web-features/issues/4242) *(github.com)*
- [CSS Custom Highlight Universal Selector ::highlight(\*) · Issue #728 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/728) *(github.com)*
- [\[css-highlight-1\]\[css-pseudo-4\] Add ::highlight(\*) by DevSDK · Pull Request #14301 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/pull/14301) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 67 result(s) found across 11 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5174965228929024" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"drafts.csswg.org/css-pseudo-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS Custom Highlight Universal Selector ::highlight(*)" API` — *Core feature API query* (4 returned)
  - `"CSS Custom Highlight Universal Selector ::highlight(*)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"pseudo-elements" OR "highlight(" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS Custom Highlight Universal Selector ::highlight(*)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS Custom Highlight Universal Selector ::highlight(*)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"css custom highlight" "::highlight(*)" (tutorial OR guide OR example)` — *Finds developer guides and practical tutorials introducing the universal highlight pseudo-element selector.* (8 returned)
  - `"::highlight(*)" CSS.highlights OR "new Highlight" background-color` — *Surfaces practical CSS and JavaScript code snippets registering custom highlights and applying universal base styles.* (5 returned)
  - `"::highlight(*)" ("intent to ship" OR "intent to prototype" OR Chrome OR WebKit OR Firefox)` — *Tracks browser engine implementation status, intent-to-ship threads, and release announcements.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "::highlight(*)"` — *Retrieves CSSWG standards discussions, issues, and spec resolutions concerning universal custom highlight styling.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 7 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 4 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 3 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5174965228929024)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5174965228929024)
- [Specification](https://drafts.csswg.org/css-pseudo-4/#selectordef-highlight-highlight-name-selector)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/408003366)
