# CSS text-decoration-inset

> **Report Week:** 2026-W36 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

CSS text-decoration-inset controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges. It supports auto, length, and percentage values, including one-value and two-value syntax for setting the start and end offsets. This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements.


sampler: https://static.januschka.com/i-468928416/?asddsaasd
MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset

CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

### Motivation

This change implements CSS text-decoration-inset (CSS Text Decoration Level 4), including percentage values. It gives authors direct control over decoration inset and reduces the need for wrapper/pseudo-element workarounds used to fine-tune underline/overline/line-through rendering.



sampler: https://static.januschka.com/i-468928416/?asddsaasd
MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset

CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

## Ecosystem Status

- **Momentum:** Moderate (70 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** CSS `text-decoration-inset` (part of CSS Text Decoration Module Level 4) standardizes fine-grained control over the start and end offsets of underlines, overlines, and line-through decorations using length and percentage values. With Chrome enabling it by default in milestone 154, the feature reaches broad engine availability alongside Firefox's existing implementation and WebKit's active preview support. The API successfully resolves long-standing typographic alignment issues without requiring pseudo-element or background-gradient workarounds.

### Recommendations
- Actionable Advice: Adopt `text-decoration-inset` immediately as a progressive enhancement for refined typography and interactive link underlines, as unsupported browsers will simply display default line lengths without breaking layouts or semantics. If exact visual parity across older browsers is critical, pair it with standard `@supports (text-decoration-inset: 0)` checks before falling back to `::after` pseudo-elements.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGks9FvXzzSEZ_-4U1M66JLM6MXbzuPbySTzlOPvXdEpGq5QHGRROSn5cpIHbIBNI69fOJjynW6H9lJBZxQj-mcLi_NgeYCmyXQL_E3tZAkgb1KsQVWzjoLwRMb-pJAbQJo6cBxWVxXHm13EyqgTsv7HbIyHx_8kFe-UtR2Hx9bbHYOAWd3466F) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset is Like Padding for Text Decorations | CSS-Tricks Skip to main content CSS-Tricks Since 2007 typography text-decoration-inset is Like Padding for Text Decorations Daniel Schwarz on Dec 22, 2025 The text-decoration-inset CSS prop...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHBzv95c9Krl1exiZ5OKzxSjUq1N6fVGtdix4twdKZgO-eTZSfMi-BGgStUYauSWIlU15cxqZj-vKE19dGuS1VfwNa45RrFL6OkHCQJMsCpDY7GukTYe7oHbUs9eL6eH9GwLxScYeHDm9cDZrS5ig9pDIFt9KhRiBU9qdwSmF_GcwfhF4OVV1Z5_scOnh0yvDKs) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties text-decoration-inset Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日...
- [medianic.co.uk](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF-L2Yt3VatCmp4QkeIVvPW0S3g8DKx4RXCtbhjEZ7Fa6o9pKgsK01FADMYl0wd8w2AIBWlFMgHIdc0HCdb-ySEq0DOLRUW2HNgCZKunoYKUQzHgWxR38yGgov4FgyzcOSN1k5zTzx73lImi5xKKk_lIRqPHM19A3-YkX8aj2iUsHuALSpKMElafQ43zBHTPMtTSz-DvYqpZAJT0A==) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset: The CSS Trick for Perfect Text Alignment Skip to content text-decoration-inset: The CSS Trick for Perfect Text Alignment By Medianic / 29th January 2026 The `text-decoration-inset` property in CSS has emerged as a game-changer ...
- [Re: [blink-dev] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., Helmut Januschka wrote: *Conta...
- [[blink-dev] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17255.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS text-decoration-inset Helmut Januschka Sun, 23 Aug 2026 07:20:14 -0700 *Contact emails* [email&#160;protected] *Specification*...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Re: [blink-dev] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., Helmut Januschka wro...
- [[blink-dev] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17255.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > [blink-dev] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS text-decoration-inset Helmut Januschka Sun, 23 Aug 2026 07:20:14 -0700 *Contact emails* [email&#160;protected] *Spec...
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)*
- [text-decoration-inset CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 31 result(s) found across 6 planned queries — **3 verified relevant**
  - `"chromestatus.com/feature/5178263526834176" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"CSS text-decoration-inset" API` — *Core feature API query* (1 returned)
  - `"CSS text-decoration-inset" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"static.januschka" OR "developer.mozilla" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS text-decoration-inset" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 5 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 8 result(s) found — **5 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 2 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 40 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5178263526834176)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5178263526834176)
- [Specification](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/468928416)
