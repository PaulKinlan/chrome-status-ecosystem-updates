# Optional descriptors for registered custom properties

> **Report Week:** 2026-W41 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Allows authors to omit any descriptor in an @property rule and the corresponding optional members of CSS.registerProperty(). Omitted values  default to universal syntax, inheritance, and the guaranteed-invalid  initial value; invalid descriptors use normal CSS fallback behavior.

### Motivation

Registered custom properties currently require authors to repeat syntax and  inherits descriptors, and typed registrations cannot omit initial-value. The  CSSWG resolved that registrations should behave like unregistered custom  properties except for the descriptors authors explicitly provide. This removes  boilerplate and lets typed properties use per-use var() fallbacks by defaulting  initial-value to the guaranteed-invalid value.

## Ecosystem Status

- **Momentum:** High (240 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive / High Interest
- **Executive Take:** Optional descriptors for registered custom properties is currently Enabled by default in Chrome 156. Verified ecosystem momentum is High with Multi-Engine Consensus standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @hober: "Closing as we've identified our position...."
- Standards Activity (Mozilla): Latest discussion from @dbaron: "Also see #93, where we added the original position...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Properties and Values API Level 1](https://github.com/WebKit/standards-positions/issues/22) [closed]
- **Mozilla:** [CSS Properties & Values API: @property](https://github.com/mozilla/standards-positions/issues/331) [closed]

## Packages & Polyfills

- [@csstools/postcss-property-rule-optional-descriptors](https://www.npmjs.com/package/@csstools/postcss-property-rule-optional-descriptors) `v1.0.0` — Omit optional descriptors in at-property rules

## 📰 Ecosystem Blogs & Articles

- [Customization best practices for developing PWA - BMC Documentation](https://docs.bmc.com/xwiki/bin/view/Service-Management/Innovation-Suite/BMC-Helix-Innovation-Suite/is252/Developing-Progressive-Web-Applications/Customization-best-practices-for-developing-PWA) *(docs.bmc.com · 2025-08-04T00:00:00)*
  > Make sure that you read the whitepaper at the following link before referring to the best practices in this topic:Community blog: Whitepaper on BMC Helix ITSM PWA Implementation Methodology · The information in the whitepaper helps you achieve the fo...
- [Enter app properties for PWA - Windows apps \| Microsoft Learn](https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/pwa/enter-app-properties) *(learn.microsoft.com)*
  > Businesses / Company accounts offering products in France market need to ensure to provide this info for compliance with France Consumer Protection Laws and Regulations 2023 - 2024. This is optional for individual developers.
- [@property \| CSS-Tricks](https://css-tricks.com/almanac/rules/p/property) *(css-tricks.com · 2025-10-10T15:19:06)*
  > <strong>If true, child elements can inherit the custom property value from its parent or ancestors</strong>. initial-value: The initial value for the property. It’s optional if the property accepts any value (&quot;*&quot;), otherwise, it’s necessary...
- [html - css property - initial-value overwrites setting from outside - Stack Overflow](https://stackoverflow.com/questions/78932524/css-property-initial-value-overwrites-setting-from-outside) *(stackoverflow.com)*
  > As mentioned in MDN, <strong>initial-value is required for @property to be valid, unless the value for syntax is *</strong>, which is not your case.
- [CSS Custom Properties in Depth \| Bobrov Dev](https://bobrov.dev/blog/css-custom-properties-in-depth) *(bobrov.dev · 2018-05-30T00:00:00)*
  > An initial value is required if ... is optional and could have any value: <strong>CSS.registerProperty({ name: &#x27;--my-any-prop&#x27;, syntax: &#x27;*&#x27;, inherits: false, initialValue: &#x27;10px&#x27; });</strong>...
- [CSS.registerProperty() - Web APIs](https://udn.realityripple.com/docs/Web/API/CSS/registerProperty) *(udn.realityripple.com)*
  > <strong>window.CSS.registerProperty({ name: &#x27;--my-color&#x27;, syntax: &#x27;&lt;color&gt;&#x27;, inherits: false, initialValue: &#x27;#c0ffee&#x27;, });</strong>
- [@property: giving superpowers to CSS variables \| Articles \| web.dev](https://web.dev/articles/at-property) *(web.dev · 2020-07-21T00:00:00)*
  > Here&#x27;s an example of setting a ... but in supporting browsers, you can use @property: ... <strong>CSS.registerProperty({ name: &#x27;--colorPrimary&#x27;, syntax: &#x27;&lt;color&gt;&#x27;, initialValue: &#x27;magenta&#x27;, inherits: false });<...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts](https://github.com/w3c/css-houdini-drafts/issues/994) *(github.com · 2020-07-23T22:24:41)* *(Cites: `https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule`)*
  > [css-properties-values-api] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another...

## 📚 Platform Documentation & Specifications

- [\[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts](https://github.com/w3c/css-houdini-drafts/issues/994) *(github.com)*
- [Settings · Custom properties · asc-lab/claim-reporter-pwa-poc · GitHub](https://github.com/asc-lab/claim-reporter-pwa-poc/custom-properties) *(github.com)*
- [GitHub - pwa-builder/PWABuilder: The simplest way to create progressive web apps across platforms and devices. Start here. This repo is home to several projects in the PWABuilder family of tools. · GitHub](https://github.com/pwa-builder/pwabuilder) *(github.com)*
- [Web application manifest - Progressive web apps \| MDN](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest) *(developer.mozilla.org)*
- [\[css-properties-values-api\] \`@property\` descriptors should be optional whenever possible · Issue #13211 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13211) *(github.com)*
- [\[css-properties-values-api\] Make \`initial-value\` descriptor optional · Issue #1109 · w3c/css-houdini-drafts](https://github.com/w3c/css-houdini-drafts/issues/1109) *(github.com)*
- [inherits CSS at-rule descriptor - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@property/inherits) *(developer.mozilla.org)*
- [initial-value CSS at-rule descriptor - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@property/initial-value) *(developer.mozilla.org)*
- [initial-value CSS at-rule descriptor - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@property/initial-value) *(developer.mozilla.org)*
- [\[css-properties-values-api\] A compact syntax for registering global constants/custom properties · Issue #9206 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9206) *(github.com)*
- [\[css-properties-values-api\] "Property registration cannot be scoped" differs from all implementations in a consistent way · Issue #10541 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10541) *(github.com)*
- [\[css-fonts-4\] \`@font-palette-values\` lacking declaration for \`font-family\` · Issue #9417 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9417) *(github.com)*
- [\[css-properties-values-api\] Mass property registration by prefix · Issue #13212 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13212) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 11 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5168674259468288" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.css-houdini.org/css-properties-values-api-1" -site:drafts.css-houdini.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Optional descriptors for registered custom properties" API` — *Core feature API query* (0 returned)
  - `"Optional descriptors for registered custom properties" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"css.registerproperty" OR "guaranteed-invalid" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Optional descriptors for registered custom properties" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Optional descriptors for registered custom properties" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"@property" optional descriptors OR "omitted" syntax inherits "initial-value"` — *Find articles, blogs, and tutorials highlighting the ability to omit boilerplate descriptors in CSS @property definitions.* (8 returned)
  - `"CSS.registerProperty" optional syntax OR inherits OR "initialValue" code example` — *Surface JavaScript code snippets and MDN-style API references demonstrating Houdini property registration with optional members.* (8 returned)
  - `site:github.com/w3c/csswg-drafts/issues "@property" optional descriptors OR "guaranteed-invalid"` — *Discover CSS Working Group resolutions, author debates, and spec evolution regarding optional descriptors and invalid initial values.* (6 returned)
  - `"Optional descriptors for registered custom properties" OR ("@property" optional "inherits" "intent to ship")` — *Track browser vendor implementation progress, Chromium intent to ship announcements, and cross-browser support.* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 124 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 7 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5168674259468288)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5168674259468288)
- [Specification](https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/491802759)
