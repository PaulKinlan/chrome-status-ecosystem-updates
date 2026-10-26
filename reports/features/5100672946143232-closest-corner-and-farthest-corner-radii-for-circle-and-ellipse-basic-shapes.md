# closest-corner and farthest-corner radii for circle() and ellipse() basic shapes

> **Report Week:** 2026-W44 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

The circle() and ellipse() CSS basic-shape functions accept the closest-corner and farthest-corner radius keywords, in addition to the existing closest-side and farthest-side. These keywords resolve to the Euclidean distance from the shape center to the nearest or farthest corner of the reference box, matching the long-standing behavior of radial-gradient(). They work in clip-path, shape-outside, and offset-path, so the same shape syntax accepted by gradients now works for shapes.   CL: https://chromium-review.googlesource.com/c/chromium/src/+/7767079

### Motivation

The &lt;radial-extent&gt; keywords closest-corner and farthest-corner are defined for radial gradients and have been interoperably supported there for years. The circle() and ellipse() basic-shape syntax in CSS Shapes Module Level 1 shares the &lt;shape-radius&gt; production with gradients, but Blink (and Gecko) only accepted closest-side / farthest-side for the basic shapes. That means authors who want a circle that exactly inscribes the reference box's farthest corner have to hand-compute sqrt(w\*w + h\*h)/2 or fall back to a radial-gradient() mask, even though the keyword exists in the same value space.  This change fills in the missing keywords so basic shapes have the full &lt;radial-extent&gt; set:  closest-corner: the distance from the center to the closest corner of the reference box.  farthest-corner: the distance from the center to the farthest corner of the reference box.  For ellipse(), which accepts two independent &lt;shape-radius&gt; values in current implementations, each axis resolves independently to the corner Euclidean distance.    A spec ambiguity exists about whether ellipse() should accept one &lt;radial-extent&gt; covering both axes (per the spec text) or two independent ones (current implementation reality). This was discussed in https://github.com/w3c/csswg-drafts/issues/13814 and the conclusion from the thread was that the existing two-value interpretation is fine to keep.

## Ecosystem Status

- **Momentum:** Emerging (footprint 160 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** This enhancement harmonizes the CSS basic-shape functions circle() and ellipse() with radial-gradient() by introducing the closest-corner and farthest-corner radius keywords. Shipping enabled by default in Chrome 158, it eliminates a long-standing ergonomic gap across clip-path, shape-outside, and offset-path. With WebKit having already implemented the feature and Gecko engineers expressing positive support following recent CSS Working Group resolutions, the ecosystem is rapidly achieving full cross-engine alignment.

### Recommendations
- Actionable Advice: Developers can safely experiment with these keywords in progressive visual enhancements such as reveal transitions and path-based motion, guarding usage with @supports (clip-path: circle(farthest-corner)). Production-critical layouts should retain fallback percentage dimensions or mask-based approaches until updated engine versions reach broad Baseline availability.
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

- [\[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17254.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic s...
- [Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17457.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse()...
- [Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17488.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse()...
- [\[dev-platform\] Intent to prototype and ship: closest-corner and farthest-corner for circle() and ellipse() basic shapes](http://www.mail-archive.com/dev-platform@mozilla.org/msg01887.html) *(mail-archive.com)*
  > However, circle() is clear so we intend to ship it (i.e. this preference is only for ellipse()). \*DevTools Bug\*: N/A \*Extensions Bug\*: N/A \*Use Counter\*: css\_clip\_path, css\_offset\_path, and css\_shape\_outside may use circle() and ellipse() \*Standards-...
- [Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17456.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse()...
- [WebKit Results Database: 281657@main](https://results.webkit.org/commit?repository_id=webkit&id=281657%40main) *(results.webkit.org)*
  > WebKit Results Database: 281657@main WebKit Results Database ☰ ◀ Previous 281657@main Next ▶

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/w3c/csswg-drafts/issues/13814) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/719) *(github.com)*
- [github.com](https://github.com/web-platform-tests/wpt/blob/master/css/css-masking/clip-path/clip-path-ellipse-closest-farthest-corner.html) *(github.com)*
- [closest-corner and farthest-corner radii for circle() and ellipse() · Issue #1366 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1366) *(github.com)*
- [\[css-shapes-1\] ellipse() grammar gratuitously inconsistent with radial-gradient() · Issue #824 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/824) *(github.com)*
- [\[css-shapes\]\[css-images\] Browsers require either 0 or 2 \`&lt;radial-extent&gt;\` for \`ellipse()\` · Issue #14010 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14010) *(github.com)*
- [CSS Shapes: \`closest-corner\` and \`farthest-corner\` radii for \`circle()\` and \`ellipse()\` · Issue #1450 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1450) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 43 result(s) found across 11 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5100672946143232" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.csswg.org/css-shapes-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"closest-corner and farthest-corner radii for circle() and ellipse() basic shapes" API` — *Core feature API query* (2 returned)
  - `"closest-corner and farthest-corner radii for circle() and ellipse() basic shapes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"review.googlesource" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"closest-corner and farthest-corner radii for circle() and ellipse() basic shapes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (2 returned)
  - `"closest-corner and farthest-corner radii for circle() and ellipse() basic shapes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"closest-corner" OR "farthest-corner" "circle(" OR "ellipse(" "clip-path" CSS` — *Finds developer guides, blog posts, and practical tutorials demonstrating how to use corner-based radius keywords in CSS basic shapes.* (8 returned)
  - `"circle(closest-corner" OR "circle(farthest-corner" OR "ellipse(farthest-corner" (clip-path OR shape-outside OR offset-path)` — *Discovers real-world CSS code examples and snippets demonstrating the exact function syntax for circle() and ellipse() with corner extents.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "13814" OR ("closest-corner" "ellipse(" issue)` — *Searches for W3C CSS Working Group discussions, resolution threads, and spec clarifications regarding radial extents on ellipse shapes.* (2 returned)
  - `"closest-corner" "farthest-corner" ("basic shapes" OR "CSS Shapes") (Chromium OR Blink OR "Chrome 13" OR "Chrome 14")` — *Identifies browser release announcements, developer changelogs, and platform support signals for these keywords in Blink and Chromium.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "shapes", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "shapes": Chrome 73.3% passing (stable)*
- **Sources cited by the AI synthesis:** 3 result(s) found — **3 verified relevant**

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
