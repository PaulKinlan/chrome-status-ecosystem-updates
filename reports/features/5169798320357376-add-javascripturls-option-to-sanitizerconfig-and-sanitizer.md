# Add javascriptURLs option to SanitizerConfig and Sanitizer

> **Report Week:** 2026-W42 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

https://github.com/whatwg/html/pull/12898  Sanitizer API also sanitizes javascript:-URLs, when they are used for navigation. This was originally done as a side effect of any "safe" method that uses Sanitizer, and omittted for any "unsafe" method. The HTML standard recently regularized this and made this a developer-selectable option, instead of a side-effect of a particular method.  Behaviour when the option is not used remains the same.

### Motivation

Previously, Sanitizer API already supported sanitizing javascript:-URLs, but only for "safe" methods. This was awkward if users wanted to use the "unsafe" methods for some reason, but still wanted javascript:-URLs removed.  Further discussion on: https://github.com/whatwg/html/issues/12686 https://github.com/whatwg/html/pull/12898

## Ecosystem Status

- **Momentum:** Emerging (footprint 60 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** The WHATWG HTML Living Standard recently incorporated the \`javascriptURLs\` dictionary member and modifier into \`SanitizerConfig\` and \`Sanitizer\` via pull request #12898, regularizing navigation script-URL sanitization into an explicit developer option across both safe and unsafe parsing methods. Chromium has enabled this behavior by default starting in Chrome 157, while Gecko and alternative engines are actively updating their implementations. Overall engine consensus is unified on the specification change, bringing welcome predictability to native DOM sanitization workflows.

### Recommendations
- Actionable Advice: Teams exploring native HTML sanitization should feature-detect the property and test against Chrome 157 or nightly browser flags, but they should avoid relying solely on native Sanitizer configs in cross-browser production until Baseline availability broadens. Maintain existing library-level sanitizers (such as DOMPurify) as fallbacks while incorporating this setting into progressive enhancement strategies.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img544-dot-cr-status.appspot.com/release-notes/157) *(img544-dot-cr-status.appspot.com)*
  > \* \*\*Coverage:\*\* Appears in the automated Chrome 157 release notes and Blink intent trackers
- [openhub.net](https://openhub.net/p/firefox/commits?page=19&time_span=30+days) *(openhub.net)*
  > Browser Engine Implementations & Bug Trackers \* \*\*Gecko (Firefox):\*\* \* Tracked under \*\*Bugzilla Bug 2068934\*\* (\*"Support javascriptURLs in the configuration of sanitizer"\*), aligning Gecko's implementation with the updated WHATWG parsing and sanitiza...
- [sourceforge.net](https://sourceforge.net/projects/servo.mirror/files/v0.7.0) *(sourceforge.net)*
  > 7.0\*\* via \*\*PR #47867\*\* (\*"Implement javascriptURLs for Sanitizer and SanitizerConfig"\* by \`@skyz1\`)
- [zenn.dev](https://zenn.dev/cybozu_frontend/articles/web_standards_trends_202609) *(zenn.dev)*
  > Developer Blogs & Standards Roundups \* \*\*Zenn (Web Standards Monthly Review):\*\* \* Featured in the \*\*"Web 標準動向 2026年9月版"\*\* (Web Standards Trends, September 2026) roundup The post highlights the progression of the Sanitizer API, cross-referencing Gecko...
- [Sanitizer.webidl - mozsearch](https://searchfox.org/firefox-main/source/dom/webidl/Sanitizer.webidl) *(searchfox.org)*
  > boolean javascriptURLs; }; \[Exposed=Window, Pref=&quot;dom.security.sanitizer.enabled&quot;\] interface Sanitizer { \[Throws, UseCounter\] constructor(optional (SanitizerConfig or SanitizerPresets) configuration = &quot;default&quot;); // Query configur...

## 📚 Platform Documentation & Specifications

- [whatwg.org](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html) *(html.spec.whatwg.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 30 result(s) found across 11 planned queries — **1 verified relevant**
  - `"chromestatus.com/feature/5169798320357376" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/whatwg/html/pull/12898" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" API` — *Core feature API query* (0 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (3 returned)
  - `"github.com" OR ":-urls" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"SanitizerConfig" "javascriptURLs"` — *Finds WebIDL definitions and JavaScript implementation snippets demonstrating the javascriptURLs property in SanitizerConfig.* (1 returned)
  - `"Sanitizer API" "javascriptURLs" OR "javascript: URLs" guide OR tutorial` — *Surfaces developer guides, security tutorials, and explainer articles covering XSS sanitization and URL filtering via the Sanitizer API.* (3 returned)
  - `site:github.com/whatwg/html ("12898" OR "12686" OR "javascriptURLs")` — *Retrieves WHATWG specification discussions, issue feedback, and pull request review comments regarding the javascriptURLs option.* (0 returned)
  - `"Sanitizer" "javascriptURLs" ("intent to ship" OR "intent to prototype" OR "chromestatus")` — *Tracks browser vendor adoption announcements, feature signals, and engine implementation status in Chromium and other engines.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 5 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5169798320357376)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5169798320357376)
- [Specification](https://github.com/whatwg/html/pull/12898)
