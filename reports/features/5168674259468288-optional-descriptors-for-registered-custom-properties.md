# Optional descriptors for registered custom properties

> **Report Week:** 2026-W42 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Allows authors to omit any descriptor in an @property rule and the corresponding optional members of CSS.registerProperty(). Omitted values  default to universal syntax, inheritance, and the guaranteed-invalid  initial value; invalid descriptors use normal CSS fallback behavior.

### Motivation

Registered custom properties currently require authors to repeat syntax and  inherits descriptors, and typed registrations cannot omit initial-value. The  CSSWG resolved that registrations should behave like unregistered custom  properties except for the descriptors authors explicitly provide. This removes  boilerplate and lets typed properties use per-use var() fallbacks by defaulting  initial-value to the guaranteed-invalid value.

## Ecosystem Status

- **Momentum:** Emerging (footprint 120 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The CSS Working Group specification update making descriptors optional in \`@property\` and \`CSS.registerProperty()\` resolves long-standing ergonomic pain by aligning registered custom property defaults with standard unregistered properties. Chromium has enabled optional descriptors by default in Chrome 156, removing mandatory boilerplate and allowing typed properties to leverage per-use \`var()\` fallbacks. While broad standards consensus in the CSSWG backs this change, general web availability remains fragmented as other browser engines update their parsers.

### Recommendations
- Actionable Advice: Do not omit descriptors directly in production CSS yet, as engines without the updated parser will treat incomplete \`@property\` declarations as invalid and discard them entirely. Instead, continue providing explicit \`syntax\`, \`inherits\`, and \`initial-value\` descriptors or utilize PostCSS build plugins to polyfill the simplified syntax until cross-engine support stabilizes.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @hober: "Closing as we've identified our position...."
- Standards Activity (Mozilla): Latest discussion from @dbaron: "Also see #93, where we added the original position...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Properties and Values API Level 1](https://github.com/WebKit/standards-positions/issues/22) [closed]
- **Mozilla:** [CSS Properties & Values API: @property](https://github.com/mozilla/standards-positions/issues/331) [closed]

## Web-features Group

*group-level data: web-features [`registered-custom-properties`](https://webstatus.dev/features/registered-custom-properties), shared with 4 other ChromeStatus features*

- Share of tests passing in the web-features group `registered-custom-properties` on [wpt.fyi](https://wpt.fyi/results?q=feature:registered-custom-properties) (via webstatus.dev) — stable: Chrome 66.4% · Edge 66.4% · Firefox 86.7% · Safari 92%; experimental: Chrome 91.2% · Edge 90.3% · Firefox 87.6% · Safari 92.9%
- **Chrome usage:** 0.19% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/146))

## Packages & Polyfills

- [@csstools/postcss-property-rule-optional-descriptors](https://www.npmjs.com/package/@csstools/postcss-property-rule-optional-descriptors) `v1.0.0` — Omit optional descriptors in at-property rules

## 📰 Ecosystem Blogs & Articles

- [@property \| CSS-Tricks](https://css-tricks.com/almanac/rules/p/property) *(css-tricks.com)*
  > dev have frequently promoted \`@property\` primarily for its ability to toggle \`inherits: false\` and prevent unintended token leakage into child components Commentators noted that forcing developers to specify \`syntax: "\*"\` was unnecessary syntax overh...
- [chromestatus.com](https://chromestatus.com/feature/5128966769475584) *(chromestatus.com)*
  > \* \*\*Typed Scoping & Fallbacks:\*\* Modern CSS articles (such as explorations by Stephanie Eckles on type definitions and Lea Verou on property declarations) have highlighted the friction around \`initial-value\` overriding standard \`var()\` fallbacks
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > &lt;strong&gt;Allows authors to omit any descriptor in an @property rule and the corresponding optional members of CSS&lt;/strong&gt;.registerProperty().

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts](https://github.com/w3c/css-houdini-drafts/issues/994) *(github.com · 2020-07-23T22:24:41)* *(Cites: `https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule`)*
  > \[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another...

## 📚 Platform Documentation & Specifications

- [CSS Properties and Values API Level 1](https://www.w3.org/TR/css-properties-values-api-1) *(w3.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Properties_and_Values_API) *(developer.mozilla.org)*
- [\[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts](https://github.com/w3c/css-houdini-drafts/issues/994) *(github.com)*
- [\[css-properties-values-api\] \`@property\` descriptors should be optional whenever possible · Issue #13211 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13211) *(github.com)*
- [\[css-properties-values-api\] Make \`initial-value\` descriptor optional · Issue #1109 · w3c/css-houdini-drafts · GitHub](https://github.com/w3c/css-houdini-drafts/issues/1109) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 11 planned queries — **5 verified relevant**
  - `"chromestatus.com/feature/5168674259468288" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.css-houdini.org/css-properties-values-api-1" -site:drafts.css-houdini.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Optional descriptors for registered custom properties" API` — *Core feature API query* (0 returned)
  - `"Optional descriptors for registered custom properties" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"css.registerproperty" OR "guaranteed-invalid" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Optional descriptors for registered custom properties" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Optional descriptors for registered custom properties" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"@property" ("optional descriptors" OR "optional initial-value" OR "guaranteed-invalid") CSS` — *Searches for developer guides, tutorials, and articles explaining the reduction of required descriptors in @property.* (8 returned)
  - `"CSS.registerProperty" ("optional" OR "omitted") syntax inherits initialValue` — *Finds code samples and documentation demonstrating JavaScript CSS.registerProperty invocations with omitted descriptor dictionary keys.* (8 returned)
  - `"@property" ("optional descriptors" OR "omit") site:chromestatus.com OR site:webkit.org OR site:developer.chrome.com` — *Tracks platform announcements, Intent to Ship notices, and browser release notes for optional custom property descriptors.* (8 returned)
  - `site:github.com/w3c/csswg-drafts/issues "@property" ("optional" OR "omit") "initial-value"` — *Surfaces CSS Working Group issues, debates, and author feedback surrounding defaulting rules and guaranteed-invalid fallback behaviors.* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **web-features mapping:** *group "registered-custom-properties", shared with 4 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "registered-custom-properties": Chrome 66.4% passing (stable)*
- **Sources cited by the AI synthesis:** 5 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 7 engineer comment(s) read
- **Web Page Excerpts Ingested:** 11 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5168674259468288)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5168674259468288)
- [Specification](https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/491802759)
