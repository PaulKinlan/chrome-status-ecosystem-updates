# CSS corner shorthand properties 

> **Report Week:** 2026-W42 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Implements the CSS corner shorthand and per-corner sub-shorthands (corner-top-left, corner-top-right, corner-bottom-left, corner-bottom-right) as well as physical (corner-top, corner-bottom) and logical (corner-block-start, corner-block-end, etc.) edge  shorthands. These allow setting both border-radius and corner-shape for individual corners in a single declaration. Additionally, corners is retained as a compat alias for the corner shorthand.   sampler: https://static.januschka.com/i-425897047/  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7747994

### Motivation

Currently, setting both the radius and shape of a corner requires two separate declarations (border-radius and corner-shape). The CSSWG resolved ( https://github.com/w3c/csswg-drafts/issues/11623#issuecomment-2982179370  ) to add a corner shorthand that combines both properties, making it more ergonomic for authors to   style individual corners. For example:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           \`\`\`css                                                                                                                                                                                                                                                            /\* Before: two declarations needed \*/                                                                                                                                                                                                                           border-top-left-radius: 20px;                                                                                                                                                                                                                                   corner-shape-top-left: squircle;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 /\* After: single corner shorthand \*/                                                                                                                                                                                                                            corner-top-left: 20px squircle;                                                                                                                                                                                                                               \`\`\`

## Ecosystem Status

- **Momentum:** Moderate (footprint 270 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The CSS corner shorthand properties consolidate border-radius and corner-shape into ergonomic per-corner and directional declarations, including physical and logical edge sub-shorthands. Resolved by the CSS Working Group in the CSS Borders and Box Decorations Module Level 4 specification, the feature eliminates redundant declarations for complex silhouettes like squircles and bevels. While Chromium has moved to ship the shorthands by default, the feature group currently remains in limited baseline availability pending broader stable rollouts in rival engines.

### Recommendations
- Actionable Advice: Adopt the corner shorthands using progressive enhancement by providing conventional border-radius fallbacks or guarding modern syntax behind @supports (corner-top-left: 20px squircle) rules. Teams should experiment with the ergonomic syntax in modern Chromium builds while holding off on exclusive production reliance until Firefox and Safari deliver stable releases.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @smfr: "We think that \`corner-shape\` will be useful to allow for bevel, and superellipse (aka squircle), but we believe that more complex corner shapes are be..."
- Standards Activity (Mozilla): Latest discussion from @dholbert: "&gt; @dholbert fwiw, I'm not so sure about it. \`corner-shape: angle\` messing with \`border-radius\` feels wrong somehow (even if it's the simplest way to s..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Corner-shape](https://github.com/WebKit/standards-positions/issues/229) [closed]
- **Mozilla:** [CSS corner-shape](https://github.com/mozilla/standards-positions/issues/823) [closed]

## Web-features Group

*group-level data: web-features [`corner-shape`](https://webstatus.dev/features/corner-shape)*

- Share of tests passing in the web-features group `corner-shape` on [wpt.fyi](https://wpt.fyi/results?q=feature:corner-shape) (via webstatus.dev) — stable: Chrome 81.8% · Edge 84.1% · Firefox 11.3% · Safari 8%; experimental: Chrome 88.6% · Edge 89.8% · Firefox 59.1% · Safari 68.2%
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/229))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/823))

## 📰 Ecosystem Blogs & Articles

- [Squircles in CSS: corner-shape, superellipse() and Browser Support (2026) - Squircle.js](https://squircle.js.org/blog/squircles-in-css) *(squircle.js.org)*
  > In the CSS Borders and Box Decorations Module Level 4 specification, customizing box corners historically required declaring two distinct properties: \*\*\`border-radius\`\*\* (which sets the size and curvature bounds) and \*\*\`corner-shape\`\*\* (which dictate...
- [webkit.org](https://bugs.webkit.org/show_bug.cgi?id=325010) *(bugs.webkit.org)*
  > Chromium implemented this support via \*\*CL 7747994\*\*, and WebKit tracks matching implementation in Bug 325010 \* \*\*WebKit Bugzilla (Bug 325010):\*\* Documents engine alignment across WebKit/Blink, tracking the adoption of \`corner\` and \`corner-\*\` sub-sho...
- [amitmerchant.com](https://www.amitmerchant.com/the-modern-way-to-draw-squircles-using-corner-shape-in-css) *(amitmerchant.com)*
  > The documentation illustrates how borders, background clip regions, shadows (\`box-shadow\`), outlines, and \`backdrop-filter\` natively trace the synthesized corner geometry They emphasized that the shorthand syntax (\`corner: &lt;radius&gt; &lt;shape&gt;\`) makes re...
- [web.dev](https://web.dev/blog/web-platform-08-2025) *(web.dev)*
  > dev ("New to the Web Platform"):\*\* Highlighted the arrival of native corner shaping into Chromium and early browser engines, focusing on eliminating heavy SVG mask and \`clip-path\` hacks for curved and squircle elements
- [smashingmagazine.com](https://www.smashingmagazine.com/2026/03/beyond-border-radius-css-corner-shape-property-ui) *(smashingmagazine.com)*
  > dev ("New to the Web Platform"):\*\* Highlighted the arrival of native corner shaping into Chromium and early browser engines, focusing on eliminating heavy SVG mask and \`clip-path\` hacks for curved and squircle elements
- [chrome.com](https://developer.chrome.com/blog/implementing-corner-shape) *(developer.chrome.com)*
  > \* \*\*Chromium Blink Implementation Blog ("The Corner Cases of Implementing CSS Corner-Shape"):\*\* A technical deep-dive into the mathematical and rendering mechanics of \`superellipse()\` in Blink, covering how symmetrical convex (\`squircle\`, \`bevel\`) an...
- [css-tricks.com](https://css-tricks.com/almanac/properties/c/corner-shape) *(css-tricks.com)*
  > CSS-Tricks, Developer Blogs & Tutorials \* \*\*CSS-Tricks & Frontend Masters:\*\* Detailed tutorials covering the practical UI possibilities unlocked by \`corner-shape\` alongside \`border-radius\`, including ticket cut-outs, decorative badges, sci-fi HUD fra...
- [master.dev](https://blog.master.dev/background-patterns-with-css-corner-radius) *(blog.master.dev)*
  > CSS-Tricks, Developer Blogs & Tutorials \* \*\*CSS-Tricks & Frontend Masters:\*\* Detailed tutorials covering the practical UI possibilities unlocked by \`corner-shape\` alongside \`border-radius\`, including ticket cut-outs, decorative badges, sci-fi HUD fra...
- [webdevsimplified.com](https://blog.webdevsimplified.com/2026-05/corner-shape) *(blog.webdevsimplified.com)*
  > Authors noted that having shorthand support significantly reduces CSS bloat when mixing corner types
- [dev.to](https://dev.to/cassidoo/making-interesting-borders-with-css-corner-shape-3gpf) *(dev.to)*
  > \* \*\*Cassidy Williams (cassidoo.co / DEV Community):\*\* Demonstrated interactive navigation and button designs using beveled and rounded corner combinations, highlighting how native CSS properties replace decades-old CSS pseudo-element triangles and SV...
- [medium.com](https://pixicstudio.medium.com/css-corner-shape-the-ui-property-most-developers-havent-tried-yet-606b3ee4e3fc) *(pixicstudio.medium.com)*
  > \* \*\*Amit Merchant & Usman Writes:\*\* Explored the shift toward progressive enhancement with \`@supports (corner-shape: ...)\` \* \*\*Fallback Strategy:\*\* Tutorials universally advise continuing to pair the new shorthands with standard \`border-radius\` decla...
- [medium.com](https://devsmitra.medium.com/css-corner-shape-next-level-corners-for-your-ui-f053445508cd) *(devsmitra.medium.com)*
  > \* \*\*Fallback Strategy:\*\* Tutorials universally advise continuing to pair the new shorthands with standard \`border-radius\` declarations or wrapping advanced shapes in \`@supports\` checks until baseline cross-engine stability (Chromium, Gecko, WebKit) i...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17570.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties 'Dan Clark' via blink-dev Mon, 28 Sep 2026 16:48:58 -0700 LGTM2 On Monday, S...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17574.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Mike Taylor Mon, 28 Sep 2026 19:23:42 -0700 LGTM3 On 9/28/26 4:48 p.m., 'Dan...
- [\[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17509.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 21 Sep 2026 11:46:37 -0700 This looks like a good feature; can you...
- [\[blink-dev\] Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17493.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS corner shorthand properties Helmut Januschka Fri, 18 Sep 2026 06:34:29 -0700 \*Contact emails\* \[email&#160;protected\] \*Ex...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17637.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt; \*WebKit\*: Shipped/Shipping ( &gt;&gt;&gt;&gt;&gt;&gt;&gt; https://github.com/WebKit/standards-positions/issues/229) WebKit &gt;&gt;&gt;&gt;&gt;&gt;&gt; supports the underlying CSS corner-shapi...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17531.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties · Rick Byers Wed, 23 Sep 2026 08:12:55 -0700 · Looks, like it is implemented on all blink platforms and the WebKit position is &#x27;support&#...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17570.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties 'Dan Clark' via blink-dev Mon, 28 Sep 2026 16:48:58 -0700 LGTM2 On...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17574.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Mike Taylor Mon, 28 Sep 2026 19:23:42 -0700 LGTM3 On 9/28/26 4:48 ...
- [\[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17509.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 21 Sep 2026 11:46:37 -0700 This looks like a good featur...
- [\[blink-dev\] Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17493.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > \[blink-dev\] Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS corner shorthand properties Helmut Januschka Fri, 18 Sep 2026 06:34:29 -0700 \*Contact emails\* \[email&#160;prot...

## 📚 Platform Documentation & Specifications

- [w3.org](https://www.w3.org/TR/css-borders-4) *(w3.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-top-left-shape) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-top-shape) *(developer.mozilla.org)*
- [\[css-borders\] Add shorthand for \`border-shape\` / \`corner-shape\` / \`border-radius\` · Issue #11679 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11679) *(github.com)*
- [\[css-borders-4\] \`corner\` shorthand slashes conflict with optional forward slashs in border-\*-radius long hands · Issue #13889 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13889) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 58 result(s) found across 12 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5152215540039680" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"static.januschka.com/i-425897047" -site:static.januschka.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"drafts.csswg.org/css-borders-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"CSS corner shorthand properties " API` — *Core feature API query* (3 returned)
  - `"CSS corner shorthand properties " (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"css                                                                                                                                                                                                                                                            /* before: two declarations needed */                                                                                                                                                                                                                           border-top-left-radius: 20px;                                                                                                                                                                                                                                   corner-shape-top-left: squircle;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 /* after: single corner shorthand */                                                                                                                                                                                                                            corner-top-left: 20px squircle;" OR "static.januschka" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (0 returned)
  - `"CSS corner shorthand properties " (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS corner shorthand properties " (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"corner-shape" ("corner-top-left" OR "corner-block-start") css guide OR tutorial` — *Finds developer guides and blog articles explaining how to use the new CSS corner shorthands alongside corner-shape properties.* (2 returned)
  - `"corner-top-left:" OR "corner:" "squircle" css syntax OR snippet` — *Discovers real-world CSS code examples demonstrating the combined radius and shape shorthand declaration.* (8 returned)
  - `site:github.com/w3c/csswg-drafts/issues "corner-shape" "corner" shorthand` — *Locates CSS Working Group discussions, deliberations, and developer feedback on corner shaping ergonomics.* (8 returned)
  - `"CSS corner shorthand" OR "corner-shape" ("Intent to Prototype" OR "Intent to Ship")` — *Tracks browser vendor implementation status, Chromium intents, and platform readiness for corner shorthands.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 17 result(s) found — **16 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "corner-shape", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "corner-shape": Chrome 81.8% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5152215540039680)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5152215540039680)
- [Specification](https://drafts.csswg.org/css-borders-4/#corner-shaping)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/425897047)
