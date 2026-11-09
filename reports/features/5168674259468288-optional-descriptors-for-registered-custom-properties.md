# Optional descriptors for registered custom properties

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 | **Category:** Enabled by default

## Overview

Allows authors to omit any descriptor in an @property rule and the corresponding optional members of CSS.registerProperty(). Omitted values  default to universal syntax, inheritance, and the guaranteed-invalid  initial value; invalid descriptors use normal CSS fallback behavior.

### Motivation

Registered custom properties currently require authors to repeat syntax and  inherits descriptors, and typed registrations cannot omit initial-value. The  CSSWG resolved that registrations should behave like unregistered custom  properties except for the descriptors authors explicitly provide. This removes  boilerplate and lets typed properties use per-use var() fallbacks by defaulting  initial-value to the guaranteed-invalid value.

## Ecosystem Status

- **Momentum:** Moderate (+100 points since 2026-10-12; footprint 220 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The updated CSS Properties and Values API specification makes every descriptor in the \`@property\` rule and \`CSS.registerProperty()\` optional, defaulting omitted values to match standard custom property behavior—universal syntax (\`\*\`), inheritance enabled (\`true\`), and a guaranteed-invalid initial value. Normatively resolved by the W3C CSS Working Group and led in implementation by Chromium, this change also establishes standard CSS fault-tolerant error recovery instead of discarding an entire rule on a single invalid descriptor. Beyond cutting repetitive boilerplate, it critically enables typed custom properties to work with per-use \`var()\` fallback values.

### Recommendations
- Actionable Advice: Teams should avoid omitting \`@property\` descriptors in raw production CSS for now, because any browser lacking this update will mark the entire rule invalid and fail to register the property. Instead, adopt build-time tooling such as PostCSS plugins to automate descriptor expansion, or test the streamlined syntax behind browser flags in modern Chromium builds.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @hober: "Closing as we've identified our position...."
- Standards Activity (Mozilla): Latest discussion from @dbaron: "Also see #93, where we added the original position...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Properties and Values API Level 1](https://github.com/WebKit/standards-positions/issues/22) [closed]
- **Mozilla:** [CSS Properties & Values API: @property](https://github.com/mozilla/standards-positions/issues/331) [closed]

## Web-features Group

*group-level data: web-features [`registered-custom-properties`](https://webstatus.dev/features/registered-custom-properties), shared with 4 other ChromeStatus features*

- Share of tests passing in the web-features group `registered-custom-properties` on [wpt.fyi](https://wpt.fyi/results?q=feature:registered-custom-properties) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 86.8% · Safari 91.2%; experimental: Chrome 91.2% · Edge 91.2% · Firefox 87.7% · Safari 93%
- **Chrome usage:** 0.2% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/146))

## Packages & Polyfills

- [@csstools/postcss-property-rule-optional-descriptors](https://www.npmjs.com/package/@csstools/postcss-property-rule-optional-descriptors) `v1.0.0` — Omit optional descriptors in at-property rules

## 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://learn.microsoft.com/th-th/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com)*
  > Historically, the CSS Properties and Values API (\`@property\` and \`CSS.registerProperty()\`) required extensive boilerplate \`syntax\`: Defaults to \`\*\` (universal token stream / untyped)
- [tutorialspoint.com](https://www.tutorialspoint.com/css/css_property-initial-value.htm) *(tutorialspoint.com)*
  > Developers were mandated to explicitly provide \`syntax\` and \`inherits\`, and typed properties required \`initial-value\` Omitting a required descriptor or specifying an invalid one caused the entire \`@property\` rule to be declared invalid and ignored by...
- [chromestatus.com](https://chromestatus.com/release-notes/159) *(chromestatus.com)*
  > \*\*Resilient parsing:\*\* Invalid descriptors follow standard CSS fallback/error-recovery rules rather than discarding the entire \`@property\` rule \*\*API parity:\*\* The JavaScript counterpart, \`CSS.registerProperty()\`, makes these corresponding dictionary...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Chrome Platform Status & Chrome 159 Release Notes:\*\* Chromium officially tracked this capability under bug \`#491802759\`
- [cssdb.org](https://preset-env.cssdb.org/features) *(preset-env.cssdb.org)*
  > \*\*PostCSS Preset Env & \`@csstools/postcss-property-rule-optional-descriptors\`:\*\* The CSS tooling ecosystem swiftly adopted the specification
- [netlify.app](https://chore-update--yarnpkg.netlify.app/ja/package/@csstools/postcss-property-rule-optional-descriptors) *(chore-update--yarnpkg.netlify.app)*
  > \*\*PostCSS Preset Env & \`@csstools/postcss-property-rule-optional-descriptors\`:\*\* The CSS tooling ecosystem swiftly adopted the specification The CSSTools team added a dedicated PostCSS plugin allowing authors to write streamlined \`@property\` blocks (...
- [cssdb.org](https://cssdb.org) *(cssdb.org)*
  > The CSSTools team added a dedicated PostCSS plugin allowing authors to write streamlined \`@property\` blocks (e.g., specifying only \`initial-value\` or only \`syntax\`) while polyfilling the required boilerplate for older browser engines
- [@property \| CSS-Tricks](https://css-tricks.com/almanac/rules/p/property) *(css-tricks.com)*
  > \*\*Community Blogs & CSS-Tricks:\*\* Tutorials on CSS \`@property\` frequently lamented the "three-descriptor ceremony" needed just to type a variable for CSS transitions and animations
- [Issue 491802759 - Optional registered custom property descriptors](https://static.januschka.com/i-491802759) *(static.januschka.com)*
  > Issue 491802759 - Optional registered custom property descriptors Optional registered custom property descriptors Chromium #491802759 CL 8284219 ChromeStatus Target: M156 Overview Register only what differs from an ordinary custom property The update...
- [Google Issue Tracker](https://issuetracker.google.com/issues/491802759) *(issuetracker.google.com)*
  > Google Issue Tracker Sign in
- [Chrome Platform Status](https://chromestatus.com/feature/5168674259468288/activity) *(chromestatus.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts · GitHub](https://github.com/w3c/css-houdini-drafts/issues/994) *(github.com · 2020-07-23T22:24:41)* *(Cites: `https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule`)*
  > \[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [\[css-houdini-drafts\] Pull Request: \[css-properties-values-api\]\[editorial\] CSS.registerProperty() requires inherits argument from Guillaume via GitHub on 2026-01-22 (public-houdini-archive@w3.org from January 2026)](https://lists.w3.org/Archives/Public/public-houdini-archive/2026Jan/0000.html) *(lists.w3.org)* *(Cites: `https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule`)*
  > cdoublev has just submitted a new pull request for https://github.com/w3c/css-houdini-drafts: == \[css-properties-values-api\]\[editorial\] CSS.registerProperty() requires inherits argument == The \[register a custom property algorithm\](https://...

## 📚 Platform Documentation & Specifications

- [inherits CSS at-rule descriptor - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@property/inherits) *(developer.mozilla.org)*
- [github.com](https://github.com/w3c/csswg-drafts/issues/13211) *(github.com)*
- [\[css-properties-values-api\] A compact syntax for registering global constants/custom properties · Issue #9206 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/9206) *(github.com)*
- [\[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts · GitHub](https://github.com/w3c/css-houdini-drafts/issues/994) *(github.com)*
- [\[css-houdini-drafts\] Pull Request: \[css-properties-values-api\]\[editorial\] CSS.registerProperty() requires inherits argument from Guillaume via GitHub on 2026-01-22 (public-houdini-archive@w3.org from January 2026)](https://lists.w3.org/Archives/Public/public-houdini-archive/2026Jan/0000.html) *(lists.w3.org)*
- [Weekly hardening: build 11 missing feature demos, fill current-channel critiques, goal-setting fixes by PaulKinlan · Pull Request #21 · PaulKinlan/chrome-platform-showcase · GitHub](https://github.com/PaulKinlan/chrome-platform-showcase/pull/21) *(github.com)*
- [Allow registered custom properties to have a guaranteed-invalid initial value? · Issue #11676 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/11676) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 11 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/5168674259468288" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.css-houdini.org/css-properties-values-api-1" -site:drafts.css-houdini.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Optional descriptors for registered custom properties" API` — *Core feature API query* (1 returned)
  - `"Optional descriptors for registered custom properties" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"css.registerproperty" OR "guaranteed-invalid" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Optional descriptors for registered custom properties" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Optional descriptors for registered custom properties" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (4 returned)
  - `css "@property" optional syntax OR inherits OR "initial-value" -site:w3.org` — *Discovers modern developer guides and articles explaining how omitting @property descriptors reduces boilerplate and changes default inheritance and syntax behaviors.* (8 returned)
  - `"CSS.registerProperty" optional syntax inherits initialValue code example` — *Finds code samples demonstrating JavaScript programmatic registration of CSS custom properties with omitted or optional members.* (8 returned)
  - `"optional descriptors for registered custom properties" OR ("@property" optional descriptors "intent to")` — *Tracks browser vendor release notes, engine status pages, and Intent to Ship announcements for optional descriptors.* (1 returned)
  - `site:github.com/w3c/csswg-drafts "@property" optional "initial-value" "guaranteed-invalid"` — *Surfaces CSS Working Group specifications debate, author feedback, and issue triage regarding guaranteed-invalid defaults and descriptor omissions.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **web-features mapping:** *group "registered-custom-properties", shared with 4 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "registered-custom-properties": Chrome 66.7% passing (stable)*
- **Sources cited by the AI synthesis:** 5 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 7 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5168674259468288)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5168674259468288)
- [Specification](https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/491802759)
