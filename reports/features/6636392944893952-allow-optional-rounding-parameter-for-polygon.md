# Allow optional rounding parameter for `polygon()`

> **Report Week:** 2026-W35 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

Allows an optional corner-rounding parameter in the polygon() CSS shape function. Developers can specify a length value to round polygon corners without manually computing bezier curves.

Interactive demo: https://codepen.io/yisi/pen/NPRLEQN
CSSWG issue: https://github.com/w3c/csswg-drafts/issues/9843

### Motivation

Rounded polygons are a common design pattern on the web. Without this feature, developers who want rounded corners on a polygon shape must manually compute bezier control points or use workarounds such as SVG clip paths. The polygon() round parameter makes this directly expressible in CSS, reducing complexity and improving maintainability.

## Ecosystem Status

- **Momentum:** Emerging (30 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Allow optional rounding parameter for `polygon()` is currently Enabled by default in Chrome 150. Verified ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @smfr: "Seems OK but there's certainly some implementation complexity...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Shapes: vertex rounding for polygon()](https://github.com/WebKit/standards-positions/issues/474) [open]
- **Mozilla:** [CSS Shapes: vertex rounding for polygon()](https://github.com/mozilla/standards-positions/issues/1197) [open]

## Packages & Polyfills

- [@turf/mask](https://www.npmjs.com/package/@turf/mask) `v7.4.0` — Takes polygons or multipolygons and an optional mask, and returns an exterior ring polygon with holes.

## 📚 Platform Documentation & Specifications

- [<polygon>](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/polygon) *(developer.mozilla.org)*
- [polygon() CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/basic-shape/polygon) *(developer.mozilla.org)*
- [optional_permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** *Inactive (BRAVE_SEARCH_API_KEY not configured)*
- **Dev.to Community Blogs:** 8 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6636392944893952)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6636392944893952)
- [Specification](https://drafts.csswg.org/css-shapes-1/#funcdef-basic-shape-polygon)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/329302249)
