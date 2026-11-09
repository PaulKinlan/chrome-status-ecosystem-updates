# Regular Expression Buffer Boundaries

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 | **Category:** Enabled by default

## Overview

A TC39 proposal introducing \`\\A\`, \`\\z\` and \`\\Z\` character escapes to Unicode-mode regular expressions as synonyms for \`(?-m:^)\`, \`(?-m:$)\` and \`(?=(?:\\r\\n\|\\n\|\\r\|\\u2028\|\\u2029)?(?-m:$))\`, respectively.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 210 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The Regular Expression Buffer Boundaries proposal brings JavaScript into parity with engines like PCRE, Python, and Ruby by introducing the \`\\A\`, \`\\z\`, and \`\\Z\` assertions to Unicode-mode regular expressions. It provides a standardized, ergonomic way to assert the absolute start and end of an entire input buffer regardless of whether the multiline (\`m\`) flag is active. Engine alignment is solidifying quickly, with Chromium scheduling enablement for Chrome 159, Firefox shipping support in SpiderMonkey, and WebKit introducing implementation in Safari Technology Preview.

### Recommendations
- Actionable Advice: Web development teams should avoid shipping raw \`\\A\`, \`\\z\`, or \`\\Z\` patterns directly to untranspiled production code until multi-engine Baseline availability matures, as unsupported engines will throw syntax errors in Unicode mode. Teams targeting modern runtimes can experiment via flags and preview builds, while production multiline validation should rely on established build-step regex transforms or fallback grouping constructs.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://chromestatus.com/feature/5187917373898752?gate=6115713719861248) *(chromestatus.com)*
  > Chrome Platform Status
- [itnext.io](https://itnext.io/engine-inside-engine-how-javascript-really-executes-regular-expressions-23fcd6f6aa6b) *(itnext.io)*
  > \`\\A\`, \`\\z\`, and \`\\Z\` bring JavaScript into parity with engines like PCRE, Python, Ruby, and Java \*\*Coverage:\*\* This in-depth architectural breakdown explores how Irregexp (V8), YARR (WebKit), and SpiderMonkey handle regex AST compilation
- [webkit.org](https://webkit.org/blog/18194/release-notes-for-safari-technology-preview-251) *(webkit.org)*
  > \*\*Release:\*\* Safari Technology Preview 251 Release Notes \*\*Details:\*\* WebKit officially announced early support for the RegExp Buffer Boundaries proposal in JavaScriptCore
- [caniuse.com](https://caniuse.com/mdn-javascript_regular_expressions_buffer_boundary_assertion) *(caniuse.com)*
  > This milestone represented one of the first major engine implementations landing in preview builds
- [nodejs.org](https://nodejs.org/en/blog/announcements/notable-v8-changes-from-node-js-26-to-27-alpha) *(nodejs.org)*
  > \*\*Source:\*\* Chrome Status (\*Feature: Regular Expression Buffer Boundaries\*) and Node.js/V8 tracker logs
- [maysanlabs.com](https://maysanlabs.com/blog/node-js-27-0-0-alpha-0-0-0-what-the-alpha-actually-changes) *(maysanlabs.com)*
  > \*\*Source:\*\* Chrome Status (\*Feature: Regular Expression Buffer Boundaries\*) and Node.js/V8 tracker logs \*\*Details:\*\* Implemented in V8’s Irregexp engine behind the flag \`--js-regexp-buffer-boundaries\` and scheduled for shipment to Chromium desktop an...
- [\[blink-dev\] Intent to Ship: Regular Expression Buffer Boundaries](http://www.mail-archive.com/blink-dev@chromium.org/msg17969.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Regular Expression Buffer Boundaries Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Regular Expression Buffer Boundaries Chromestatus Mon, 09 Nov 2026 10:31:06 -0800 Contact emails \[email&#160;protected\]...
- [\[dev-platform\] Intent to prototype and ship: Regular Expression Buffer Boundaries](http://www.mail-archive.com/dev-platform@mozilla.org/msg01913.html) *(mail-archive.com)*
  > \[dev-platform\] Intent to prototype and ship: Regular Expression Buffer Boundaries Skip to site navigation (Press enter) \[dev-platform\] Intent to prototype and ship: Regular Expression Buffer Boundaries 'Daniel Minor' via \[email&#160;protected\] Wed, 2...
- [proposal-regexp-buffer-boundaries: An HTML repository from Ecma TC39 - Ecma TC39](https://43.135.153.188/tc39/proposal-regexp-buffer-boundaries) *(43.135.153.188)*
  > &lt;strong&gt;This proposal seeks to introduce \\A and \\z character escapes to Unicode-mode regular expressions as synonyms for ^ and $ that are not affected by the m (multiline) flag&lt;/strong&gt;.
- [Correctly Using Regular Expressions for Secure Input Validation - Rationale \| OpenSSF Best Practices Working Group](https://best.openssf.org/Correctly-Using-Regular-Expressions-Rationale.html) *(best.openssf.org)*
  > The proposal “Regular Expression Buffer Boundaries for ECMAScript” seeks to “&lt;strong&gt;introduce \\A and \\z character escapes to Unicode-mode regular expressions as synonyms for ^ and $ that are not affected by the m (multiline) flag&lt;/strong&gt;.”
- [rbuckton/proposal-regexp-buffer-boundaries: Regular Expression Buffer Boundaries for ECMAScript](https://gitee.com/mirrors_rbuckton/proposal-regexp-buffer-boundaries) *(gitee.com)*
  > rbuckton/proposal-regexp-buffer-boundaries: Regular Expression Buffer Boundaries for ECMAScript

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Regular Expression Buffer Boundaries](http://www.mail-archive.com/blink-dev@chromium.org/msg17969.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5187917373898752`)*
  > \[blink-dev\] Intent to Ship: Regular Expression Buffer Boundaries Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Regular Expression Buffer Boundaries Chromestatus Mon, 09 Nov 2026 10:31:06 -0800 Contact emails \[email&#160;...
- [\[dev-platform\] Intent to prototype and ship: Regular Expression Buffer Boundaries](http://www.mail-archive.com/dev-platform@mozilla.org/msg01913.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-regexp-buffer-boundaries`)*
  > \[dev-platform\] Intent to prototype and ship: Regular Expression Buffer Boundaries Skip to site navigation (Press enter) \[dev-platform\] Intent to prototype and ship: Regular Expression Buffer Boundaries 'Daniel Minor' via \[email&#160;protect...
- [Support buffer boundaries by JLHwung · Pull Request #166 · jviereck/regjsparser · GitHub](https://github.com/jviereck/regjsparser/pull/166) *(github.com)* *(Cites: `https://tc39.es/proposal-regexp-buffer-boundaries`)*
  > Support buffer boundaries by JLHwung · Pull Request #166 · jviereck/regjsparser · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your s...

## 📚 Platform Documentation & Specifications

- [Buffer boundary assertion: \\A, \\z, \\Z - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) *(developer.mozilla.org)*
- [Regular expression syntax cheat sheet - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet) *(developer.mozilla.org)*
- [mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=2059792) *(bugzilla.mozilla.org)*
- [mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=2047706) *(bugzilla.mozilla.org)*
- [Support buffer boundaries by JLHwung · Pull Request #166 · jviereck/regjsparser · GitHub](https://github.com/jviereck/regjsparser/pull/166) *(github.com)*
- [proposal-regexp-buffer-boundaries/README.md at main · tc39/proposal-regexp-buffer-boundaries · GitHub](https://github.com/tc39/proposal-regexp-buffer-boundaries/blob/main/README.md) *(github.com)*
- [Meta: Stage 3 Checklist · Issue #16 · tc39/proposal-regexp-buffer-boundaries · GitHub](https://github.com/tc39/proposal-regexp-buffer-boundaries/issues/16) *(github.com)*
- [\`\\Z\` line terminator matching · Issue #20 · tc39/proposal-regexp-buffer-boundaries · GitHub](https://github.com/tc39/proposal-regexp-buffer-boundaries/issues/20) *(github.com)*
- [notes/meetings/2021-12/dec-15.md at 53a59ad71704e669d488a6b67baf940bfe2fe134 · tc39/notes · GitHub](https://github.com/tc39/notes/blob/HEAD/meetings/2021-12/dec-15.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 55 result(s) found across 12 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5187917373898752" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/tc39/proposal-regexp-buffer-boundaries" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"tc39.es/proposal-regexp-buffer-boundaries" -site:tc39.es` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Regular Expression Buffer Boundaries" API` — *Core feature API query* (8 returned)
  - `"Regular Expression Buffer Boundaries" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"(?-m:^)" OR "(?-m:$)" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Regular Expression Buffer Boundaries" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Regular Expression Buffer Boundaries" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"regexp buffer boundaries" OR "proposal-regexp-buffer-boundaries" javascript (guide OR tutorial OR explain)` — *Discovers articles and developer guides explaining the proposal and how \\A, \\z, and \\Z behave compared to ^ and $ in JavaScript.* (4 returned)
  - `javascript ("\A" AND "\z") regex ("buffer boundaries" OR "Unicode-mode")` — *Finds code samples demonstrating the syntax and equivalence of buffer boundary assertions in modern ECMAScript regular expressions.* (8 returned)
  - `("proposal-regexp-buffer-boundaries" OR "regular expression buffer boundaries") (V8 OR SpiderMonkey OR WebKit OR Babel OR "Stage")` — *Tracks implementation progress in browser engines, tooling support, and TC39 stage progression.* (8 returned)
  - `"regexp buffer boundaries" OR "proposal-regexp-buffer-boundaries" (site:news.ycombinator.com OR site:reddit.com OR site:github.com/tc39/notes)` — *Surfaces community feedback, developer sentiment, and TC39 meeting deliberation notes regarding regular expression buffer anchors.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 3 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5187917373898752)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5187917373898752)
- [Specification](https://tc39.es/proposal-regexp-buffer-boundaries)
- [Chromium Tracking Bug](https://g-issues.chromium.org/issues/517575874)
