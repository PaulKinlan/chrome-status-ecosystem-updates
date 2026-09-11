# Allow optional rounding parameter for `polygon()`

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

Allows an optional corner-rounding parameter in the polygon() CSS shape function. Developers can specify a length value to round polygon corners without manually computing bezier curves.

Interactive demo: https://codepen.io/yisi/pen/NPRLEQN
CSSWG issue: https://github.com/w3c/csswg-drafts/issues/9843

### Motivation

Rounded polygons are a common design pattern on the web. Without this feature, developers who want rounded corners on a polygon shape must manually compute bezier control points or use workarounds such as SVG clip paths. The polygon() round parameter makes this directly expressible in CSS, reducing complexity and improving maintainability.

## Ecosystem Status

- **Momentum:** High (80 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Allow optional rounding parameter for `polygon()` is currently Enabled by default in Chrome 150. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @smfr: "Seems OK but there's certainly some implementation complexity...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Shapes: vertex rounding for polygon()](https://github.com/WebKit/standards-positions/issues/474) [open]
- **Mozilla:** [CSS Shapes: vertex rounding for polygon()](https://github.com/mozilla/standards-positions/issues/1197) [open]

## Packages & Polyfills

- [@turf/mask](https://www.npmjs.com/package/@turf/mask) `v7.4.0` — Takes polygons or multipolygons and an optional mask, and returns an exterior ring polygon with holes.

## 📰 Ecosystem Blogs & Articles

- [Re: [blink-dev] Intent to Ship: Allow optional rounding parameter for `polygon()`](http://www.mail-archive.com/blink-dev@chromium.org/msg16610.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Allow optional rounding parameter for `polygon()` Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Allow optional rounding parameter for `polygon()` Mike Taylor Wed, 27 May 2026 06:21:12 -0700 On 5...
- [[blink-dev] Intent to Ship: Allow optional rounding parameter for `polygon()`](http://www.mail-archive.com/blink-dev@chromium.org/msg16604.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Allow optional rounding parameter for `polygon()` Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Allow optional rounding parameter for `polygon()` Chromestatus Tue, 26 May 2026 20:33:32 -0700 Contact ema...
- [Allow optional rounding parameter for `polygon()`](https://chromestatus.com/feature/6636392944893952) *(chromestatus.com · 2026-04-01T00:00:00)*
  > Chrome Platform Status
- [CSS polygon() round playground](https://codepen.io/yisi/pen/NPRLEQN) *(codepen.io)*
  > <strong>You can apply CSS to your Pen from any stylesheet on the web</strong>. Just put a URL to it here and we&#x27;ll apply it, in the order you have them, before the CSS in the Pen itself. You can also link to another Pen here (use the .css URL Ex...
- [Re: [blink-dev] Intent to Ship: Allow optional rounding parameter for `polygon()`](http://www.mail-archive.com/blink-dev@chromium.org/msg16626.html) *(mail-archive.com)*
  > On 5/27/26 9:21 a.m., Mike Taylor ... corner-rounding parameter in the polygon() CSS shape function. <strong>Developers can specify a length value to round polygon corners without manually computing bezier curves</strong>....
- [Chrome 150 beta | Blog | Chrome for Developers](https://developer.chrome.com/blog/chrome-150-beta) *(developer.chrome.com · 2026-06-03T00:00:00)*
  > <strong>Lets you specify an optional corner-rounding parameter in the polygon() CSS shape function</strong>.
- [Chrome 150 | Release notes | Chrome for Developers](https://developer.chrome.google.cn/release-notes/150) *(developer.chrome.google.cn)*
  > <strong>Adds an optional corner-rounding parameter in the polygon() CSS shape function</strong>.

## 📚 Platform Documentation & Specifications

- [[css-shapes] Allow optional rounding parameter for `polygon()` · Issue #9843 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9843) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 34 result(s) found across 7 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/6636392944893952" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.csswg.org/css-shapes-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Allow optional rounding parameter for `polygon()`" API` — *Core feature API query* (4 returned)
  - `"Allow optional rounding parameter for `polygon()`" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"polygon()" OR "codepen.io" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Allow optional rounding parameter for `polygon()`" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Allow optional rounding parameter for `polygon()`" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (4 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 3 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
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
