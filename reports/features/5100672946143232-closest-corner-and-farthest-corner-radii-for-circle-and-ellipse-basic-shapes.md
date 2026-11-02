# closest-corner and farthest-corner radii for circle() and ellipse() basic shapes

> **Report Week:** 2026-W45 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

The circle() and ellipse() CSS basic-shape functions accept the closest-corner and farthest-corner radius keywords, in addition to the existing closest-side and farthest-side. These keywords resolve to the Euclidean distance from the shape center to the nearest or farthest corner of the reference box, matching the long-standing behavior of radial-gradient(). They work in clip-path, shape-outside, and offset-path, so the same shape syntax accepted by gradients now works for shapes.   CL: https://chromium-review.googlesource.com/c/chromium/src/+/7767079

### Motivation

The &lt;radial-extent&gt; keywords closest-corner and farthest-corner are defined for radial gradients and have been interoperably supported there for years. The circle() and ellipse() basic-shape syntax in CSS Shapes Module Level 1 shares the &lt;shape-radius&gt; production with gradients, but Blink (and Gecko) only accepted closest-side / farthest-side for the basic shapes. That means authors who want a circle that exactly inscribes the reference box's farthest corner have to hand-compute sqrt(w\*w + h\*h)/2 or fall back to a radial-gradient() mask, even though the keyword exists in the same value space.  This change fills in the missing keywords so basic shapes have the full &lt;radial-extent&gt; set:  closest-corner: the distance from the center to the closest corner of the reference box.  farthest-corner: the distance from the center to the farthest corner of the reference box.  For ellipse(), which accepts two independent &lt;shape-radius&gt; values in current implementations, each axis resolves independently to the corner Euclidean distance.    A spec ambiguity exists about whether ellipse() should accept one &lt;radial-extent&gt; covering both axes (per the spec text) or two independent ones (current implementation reality). This was discussed in https://github.com/w3c/csswg-drafts/issues/13814 and the conclusion from the thread was that the existing two-value interpretation is fine to keep.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 190 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Adding the closest-corner and farthest-corner keywords to circle() and ellipse() basic shapes resolves a long-standing ergonomic disparity between CSS radial gradients and shape-based properties like clip-path, shape-outside, and offset-path. With WebKit having implemented the keywords early, Gecko implementing them in Firefox Nightly, and Chromium shipping them enabled by default in Chrome 158, full cross-engine alignment has been achieved. The feature eliminates the need for manual trigonometric workarounds or gradient mask fallbacks when inscribing element corners.

### Recommendations
- Actionable Advice: Teams should adopt these keywords to simplify responsive clip paths and motion paths, but they must wrap them in an @supports (clip-path: circle(closest-corner)) rule or use CSS.supports() checks to gracefully degrade to length-based dimensions for older browser installations. Ensure that any linting rules or CSS preprocessors are updated to recognize radial-extent keywords within basic-shape functions.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @nt1m: "This was implemented 2 years ago: https://commits.webkit.org/281808@main  WebKit wrote the original tests for those :)..."
- Standards Activity (Mozilla): Latest discussion from @BorisChiou: "Given that https://github.com/w3c/csswg-drafts/issues/14010 has been resolved, so suggest positive...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Shapes: \`closest-corner\` and \`farthest-corner\` radii for \`circle()\` and \`ellipse()\`](https://github.com/WebKit/standards-positions/issues/719) [closed]
- **Mozilla:** [CSS Shapes: \`closest-corner\` and \`farthest-corner\` radii for \`circle()\` and \`ellipse()\`](https://github.com/mozilla/standards-positions/issues/1450) [open]

## Web-features Group

*group-level data: web-features [`shapes`](https://webstatus.dev/features/shapes), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `shapes` on [wpt.fyi](https://wpt.fyi/results?q=feature:shapes) (via webstatus.dev) — stable: Chrome 73.3% · Edge 73.3% · Firefox 86.7% · Safari 100%; experimental: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17449.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse()...
- [\[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17254.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic s...
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > The circle() and ellipse() CSS basic-shape functions &lt;strong&gt;accept the closest-corner and farthest-corner radius keywords, in addition to the existing closest-side and farthest-side&lt;/strong&gt;. These keywords resolve to the Euclidean distance from the...
- [Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17488.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse()...
- [Chrome Release 158](https://chromestatuslite.com/?version=158) *(chromestatuslite.com)*
  > &lt;strong&gt;The circle() and ellipse() CSS basic-shape functions accept the closest-corner and farthest-corner radius keywords, in addition to the existing closest-side and farthest-side&lt;/strong&gt;. These keywords resolve to the Euclidean distance from the...
- [clip-path-circle-closest-corner.html - mozsearch](https://searchfox.org/mozilla-central/source/testing/web-platform/tests/css/css-masking/clip-path/clip-path-circle-closest-corner.html) *(searchfox.org)*
  > &lt;meta name=&quot;assert&quot; content=&quot;The clip-path property takes the basic shape · &#x27;circle&#x27; for clipping, with the &#x27;closest-corner&#x27; size.
- [Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17457.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse()...
- [\[dev-platform\] Intent to prototype and ship: closest-corner and farthest-corner for circle() and ellipse() basic shapes](http://www.mail-archive.com/dev-platform@mozilla.org/msg01887.html) *(mail-archive.com)*
  > \*Summary\*: ellipse() and circie() from \[css-shapes\] &lt;https://drafts.csswg.org/css-shapes/#supported-basic-shapes&gt; accept &lt;radial-size&gt;, which has been extend to include closest-corner and farthest-corner:

## 📚 Platform Documentation & Specifications

- [circle() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/basic-shape/circle) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/basic-shape/ellipse) *(developer.mozilla.org)*
- [CSS Shapes: \`closest-corner\` and \`farthest-corner\` radii for \`circle()\` and \`ellipse()\` · Issue #1450 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1450) *(github.com)*
- [closest-corner and farthest-corner radii for circle() and ellipse() · Issue #1366 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1366) *(github.com)*
- [circle() CSS function - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape/circle) *(developer.mozilla.org)*
- [&lt;basic-shape&gt; CSS type - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/basic-shape) *(developer.mozilla.org)*
- [\[css-shapes-1\] ellipse() grammar gratuitously inconsistent with radial-gradient() · Issue #824 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/824) *(github.com)*
- [\[css-shapes\]\[css-images\] Browsers require either 0 or 2 \`&lt;radial-extent&gt;\` for \`ellipse()\` · Issue #14010 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/14010) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 11 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/5100672946143232" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-shapes-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"closest-corner and farthest-corner radii for circle() and ellipse() basic shapes" API` — *Core feature API query* (3 returned)
  - `"closest-corner and farthest-corner radii for circle() and ellipse() basic shapes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"review.googlesource" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"closest-corner and farthest-corner radii for circle() and ellipse() basic shapes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (4 returned)
  - `"closest-corner and farthest-corner radii for circle() and ellipse() basic shapes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"circle(closest-corner" OR "circle(farthest-corner" "clip-path" CSS` — *Find developer blog posts and tutorials demonstrating the usage of corner radial extents in circle() clip paths.* (2 returned)
  - `"clip-path: circle(" ("closest-corner" OR "farthest-corner")` — *Search for CSS code snippets and real-world syntax implementations using corner radii keywords in clip-path definitions.* (6 returned)
  - `site:github.com/w3c/csswg-drafts "closest-corner" ("circle(" OR "ellipse(")` — *Locate W3C CSS Working Group discussions and issues detailing spec changes and syntax decisions for basic shape functions.* (8 returned)
  - `("closest-corner" OR "farthest-corner") ("circle()" OR "ellipse()") (Chromium OR Blink OR "Intent to Ship")` — *Track browser engine release notes, Intent to Ship announcements, and implementation commits across Chromium and Blink.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 5 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "shapes", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "shapes": Chrome 73.3% passing (stable)*
- **Sources cited by the AI synthesis:** 3 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5100672946143232)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5100672946143232)
- [Specification](https://drafts.csswg.org/css-shapes-1/#basic-shape-functions)
- [Chromium Tracking Bug](https://crbug.com/361617757)
