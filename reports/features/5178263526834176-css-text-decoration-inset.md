# CSS text-decoration-inset

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

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
- **Executive Take:** CSS text-decoration-inset (CSS Text Decoration Level 4) provides native control over the horizontal span of text decorations, supporting length, percentage, and auto offsets without requiring pseudo-element or background gradient workarounds. With default support landing in Chrome 154 alongside prior delivery in Firefox and active implementation in WebKit/Safari previews, the feature is rapidly converging toward cross-engine availability.

### Recommendations
- Actionable Advice: Adopt text-decoration-inset today as a progressive enhancement for fine-tuned typography and hover animations, relying on standard text-decoration rules as graceful fallbacks for unsupporting clients.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Packages & Polyfills

- [@csstools/postcss-text-decoration-shorthand](https://www.npmjs.com/package/@csstools/postcss-text-decoration-shorthand) `v5.0.5` — Use text-decoration in it's shorthand form in CSS

## 📰 Ecosystem Blogs & Articles

- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFh8wtfLhI9mdLsUe3YbgSSrO36cN1ZGej2GYGC-Q2eQHy67OHDvuPGAxweU6GYokyKmh0_cPU5us97m89DoPmZcR8ojaCFxfBnSk3jO-d77KZ5OMaCjaNUxeRln6Bt43ZSCpUivIJhMz2aH2fmMPI1qlmvxYew6keWEcaLnDXZ8ZriLa3waw==) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset is Like Padding for Text Decorations | CSS-Tricks Skip to main content CSS-Tricks Since 2007 typography text-decoration-inset is Like Padding for Text Decorations Daniel Schwarz on Dec 22, 2025 The text-decoration-inset CSS prop...
- [januschka.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG4bVkmJjEyfFBOXttlPLnWwVO0JXseyNxu5Otlw8biRRlW4ZTUVUDoIXcy0OJ1xGzo6aOtpKPTOAoQ9yJrJOZ_yja4J7kBSIK0j5q4ODOfOXIDGIjNho4yukRd7TrNba7YP9Ugso5TQXhsMRXIK39faA==) *(vertexaisearch.cloud.google.com)*
  > Implementing text-decoration-inset in Blink - Helmut Januschka Implementing text-decoration-inset in Blink ⚡ Chromium 🔧 C++ / Blink / CSS 👤 Helmut Januschka A CSS property can be easy to parse and difficult to paint. Fragmentation is where the inte...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGuEaFHJJBPi-t4UJ9if_XXqTMwOBXl1ZYf9SHEYRbFbTjcA4C5EjL4STlJWJI4fneYFhHtaQNMGZXQkwMV5Vzi2TsubVESXnXSrmEq4r_FfszIBrf29YNcS7niWpRRfX27aIPJ) *(vertexaisearch.cloud.google.com)*
  > [css-text-decor-4] The illustration (and possibly description) for `text-decoration-inset: auto` needs to be updated to reflect the latest clreq · Issue #13746 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Se...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGtZIEc4nnrGBMpuAs_y0CbDlJWF-WwzSq30Zdm1E6gPHcbP5i-o4UxWWfVN4ig0chd22NNH7f2oxDh5rx8bliA_-Wlk4RSqk40YKbgCKiwKHazm81g5Tnb4Oh0IfeFecv6DSlqnF5BojC1PX1mhOWwMAfL928AwIQwUy4oXlQa-cf4-vKExQpndbNUwqqpRQ==) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties text-decoration-inset Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日...
- [[blink-dev] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17255.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS text-decoration-inset Helmut Januschka Sun, 23 Aug 2026 07:20:14 -0700 *Contact emails* [email&#160;protected] *Specification*...
- [Re: [blink-dev] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)*
  > *Specification* https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset *Summary* CSS text-decoration-inset <strong>controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges...

## 📚 Platform Documentation & Specifications

- [text-decoration-inset CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 2 result(s) found (query: `""CSS text-decoration-inset" API"`) — **2 verified relevant**
- **Google Search Grounding (gemini-3.7-flash):** 7 result(s) found — **4 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found (query: `"CSS text-decoration-inset"`) — **6 verified relevant**
- **Hacker News Algolia:** 0 result(s) found (query: `"CSS text-decoration-inset"`) — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 4 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **1 verified relevant**
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
