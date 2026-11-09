# CSS corner shorthand properties 

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 | **Category:** Enabled by default

## Overview

Implements the CSS corner shorthand and per-corner sub-shorthands (corner-top-left, corner-top-right, corner-bottom-left, corner-bottom-right) as well as physical (corner-top, corner-bottom) and logical (corner-block-start, corner-block-end, etc.) edge  shorthands. These allow setting both border-radius and corner-shape for individual corners in a single declaration. Additionally, corners is retained as a compat alias for the corner shorthand.   sampler: https://static.januschka.com/i-425897047/  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7747994

### Motivation

Currently, setting both the radius and shape of a corner requires two separate declarations (border-radius and corner-shape). The CSSWG resolved ( https://github.com/w3c/csswg-drafts/issues/11623#issuecomment-2982179370  ) to add a corner shorthand that combines both properties, making it more ergonomic for authors to   style individual corners. For example:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           \`\`\`css                                                                                                                                                                                                                                                            /\* Before: two declarations needed \*/                                                                                                                                                                                                                           border-top-left-radius: 20px;                                                                                                                                                                                                                                   corner-shape-top-left: squircle;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 /\* After: single corner shorthand \*/                                                                                                                                                                                                                            corner-top-left: 20px squircle;                                                                                                                                                                                                                               \`\`\`

## Ecosystem Status

- **Momentum:** Emerging (+30 points since 2026-10-12; footprint 300 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** CSS corner shorthand properties consolidate border sizing and corner shaping into ergonomic single declarations, allowing authors to define complex geometries like squircles and bevels without clunky multi-property pairing or SVG hacks. The feature is actively shipping across Chromium browsers including Chrome and Microsoft Edge, but it remains at Limited Availability across the wider multi-engine landscape. While the CSS Working Group resolved the shorthand syntax and peer engines maintain supportive positions, cross-browser interoperability is still maturing.

### Recommendations
- Actionable Advice: Adopt corner shorthands strictly as a progressive enhancement by layering them on top of standard border-radius fallbacks or guarding rules with CSS @supports queries. Teams building critical brand-specific shapes must continue relying on SVG clipping or CSS masks until cross-engine Baseline parity is achieved.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @smfr: "We think that \`corner-shape\` will be useful to allow for bevel, and superellipse (aka squircle), but we believe that more complex corner shapes are be..."
- Standards Activity (Mozilla): Latest discussion from @dholbert: "&gt; @dholbert fwiw, I'm not so sure about it. \`corner-shape: angle\` messing with \`border-radius\` feels wrong somehow (even if it's the simplest way to s..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Corner-shape](https://github.com/WebKit/standards-positions/issues/229) [closed]
- **Mozilla:** [CSS corner-shape](https://github.com/mozilla/standards-positions/issues/823) [closed]

## Web-features Group

*group-level data: web-features [`corner-shape`](https://webstatus.dev/features/corner-shape)*

- Share of tests passing in the web-features group `corner-shape` on [wpt.fyi](https://wpt.fyi/results?q=feature:corner-shape) (via webstatus.dev) — stable: Chrome 76.7% · Edge 77.7% · Firefox 9.4% · Safari 8.4%; experimental: Chrome 87.6% · Edge 76.2% · Firefox 55% · Safari 72.3%
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/229))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/823))

## 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > \*\*Universal shorthand:\*\* \`corner: &lt;'border-radius'&gt; \|\| &lt;'corner-shape'&gt;;\` (e.g., \`corner: 20px squircle;\`) \*\*Per-corner shorthands:\*\* \`corner-top-left\`, \`corner-top-right\`, \`corner-bottom-left\`, \`corner-bottom-right\`
- [chromestatus.com](https://chromestatus.com/release-notes/159) *(chromestatus.com)*
  > \*\*Per-corner shorthands:\*\* \`corner-top-left\`, \`corner-top-right\`, \`corner-bottom-left\`, \`corner-bottom-right\` \*\*Physical and logical edge shorthands:\*\* \`corner-top\`, \`corner-bottom\`, \`corner-block-start\`, \`corner-block-end\`, \`corner-inline-start\`, et...
- [artofstyleframe.com](https://artofstyleframe.com/blog/css-corner-shorthand-chrome-155-squircle-corners) *(artofstyleframe.com)*
  > Following initial experimental testing in Chrome 155 beta, Chromium officially targeted enabling the corner shorthand suite by default in \*\*Chrome 157\*\* Articles tracking early parser behavior analyzed runtime support using \`@supports (corner: 20px s...
- [appspot.com](https://img136-dot-cr-status.appspot.com) *(img136-dot-cr-status.appspot.com)*
  > Following initial experimental testing in Chrome 155 beta, Chromium officially targeted enabling the corner shorthand suite by default in \*\*Chrome 157\*\*
- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > Following initial experimental testing in Chrome 155 beta, Chromium officially targeted enabling the corner shorthand suite by default in \*\*Chrome 157\*\*
- [trade-assistance.com](https://trade-assistance.com/blog/css-corner-shape-squircle-bevel-chrome-157-corner-shorthand) *(trade-assistance.com)*
  > MDN highlights that, unlike \`clip-path\`, corner shaping alters the actual border-box path of the element; backgrounds, border styles, shadows (\`box-shadow\`), and outlines naturally follow the computed corner geometry It explains how developers can mi...
- [master.dev](https://blog.master.dev/background-patterns-with-css-corner-radius) *(blog.master.dev)*
  > It explains how developers can mix and match styles across corners (e.g., notched coupons, ticket cutouts, and iOS-like app icons) Articles tracking early parser behavior analyzed runtime support using \`@supports (corner: 20px squircle)\` and \`CSS.sup...
- [youtube.com](https://www.youtube.com/watch?v=FPB2KVe_jP0) *(youtube.com)*
  > Developer commentary across frontend blogs emphasizes that the shorthand removes one of the most frustrating aspects of modern CSS layout: using SVG masks or brittle \`clip-path: polygon(...)\` hacks Developers welcome the \`corner\` shorthands as a clea...
- [medium.com](https://devsmitra.medium.com/css-corner-shape-next-level-corners-for-your-ui-f053445508cd) *(devsmitra.medium.com)*
  > Authors urged teams working in production to treat \`corner\` as a progressive enhancement, maintaining baseline \`border-radius\` fallbacks while browser engines complete cross-vendor adoption
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17569.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 28 Sep 2026 16:48:56 -0700 Thanks for the update. LGTM1. O...
- [\[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17509.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 21 Sep 2026 11:46:37 -0700 This looks like a good feature; can you...
- [\[blink-dev\] Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17493.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS corner shorthand properties Helmut Januschka Fri, 18 Sep 2026 06:34:29 -0700 \*Contact emails\* \[email&#160;protected\] \*Ex...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17570.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties 'Dan Clark' via blink-dev Mon, 28 Sep 2026 16:48:58 -0700 LGTM2 On Monday, S...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17574.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Mike Taylor Mon, 28 Sep 2026 19:23:42 -0700 LGTM3 On 9/28/26 4:48 p.m., 'Dan...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17545.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Helmut Januschka Thu, 24 Sep 2026 03:12:34 -0700 ok was faster than i though...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17538.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Helmut Januschka Wed, 23 Sep 2026 09:11:05 -0700 Updated the entry and chang...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com · 2026-11-02T20:19:23)*
  > sampler: https://&lt;strong&gt;static.januschka.com/i-425897047&lt;/strong&gt;/
- [Chrome Release 157](https://chromestatuslite.com/?version=157) *(chromestatuslite.com)*
  > These &lt;strong&gt;allow setting both border-radius and corner-shape for individual corners in a single declaration&lt;/strong&gt;. Additionally, corners is retained as a compat alias for the corner shorthand. sampler: https://static.januschka.com/i-425897047/ ...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17637.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; Best, &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; Alex &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; On Friday, September 18, 2026 at 6:33:46 AM UTC-7 \[email protected\] &gt;&gt;&gt;&gt;&gt;&...
- [Chrome 155 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta?hl=en) *(developer.chrome.com)*
  > It builds an anonymous counter style from a list of string symbols plus an optional counting system (cyclic, numeric, alphabetic, symbolic, or fixed), and is accepted as the counter style in list-style-type, the list-style shorthand, counter(), and c...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17636.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; \*WebKit\*: Shipped/Shipping ( &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; https://github.com/WebKit/standards-positions/issues/229) WebKit &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; supports the underlying ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1367) *(github.com · 2026-08-23T14:10:52)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh y...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17569.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 28 Sep 2026 16:48:56 -0700 Thanks for the update...
- [\[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17509.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 21 Sep 2026 11:46:37 -0700 This looks like a good featur...
- [\[blink-dev\] Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17493.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > \[blink-dev\] Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS corner shorthand properties Helmut Januschka Fri, 18 Sep 2026 06:34:29 -0700 \*Contact emails\* \[email&#160;prot...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17570.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties 'Dan Clark' via blink-dev Mon, 28 Sep 2026 16:48:58 -0700 LGTM2 On...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17574.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Mike Taylor Mon, 28 Sep 2026 19:23:42 -0700 LGTM3 On 9/28/26 4:48 ...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17545.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Helmut Januschka Thu, 24 Sep 2026 03:12:34 -0700 ok was faster tha...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17538.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Helmut Januschka Wed, 23 Sep 2026 09:11:05 -0700 Updated the entry...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com · 2026-11-02T20:19:23)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > sampler: https://&lt;strong&gt;static.januschka.com/i-425897047&lt;/strong&gt;/
- [Chrome Release 157](https://chromestatuslite.com/?version=157) *(chromestatuslite.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > These &lt;strong&gt;allow setting both border-radius and corner-shape for individual corners in a single declaration&lt;/strong&gt;. Additionally, corners is retained as a compat alias for the corner shorthand. sampler: https://static.januschka.com/i-4...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17637.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; Best, &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; Alex &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; On Friday, September 18, 2026 at 6:33:46 AM UTC-7 \[email protected\] &gt;&gt;&gt...
- [\[css-borders-4\] Fix corner-shape \|\| border-radius order to match resolution in #11623 by kbabbitt · Pull Request #14607 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/pull/14607) *(github.com)* *(Cites: `https://drafts.csswg.org/css-borders-4/#corner-shaping`)*
  > \[css-borders-4\] Fix corner-shape \|\| border-radius order to match reso… … ... @noamr could you ptal? The order doesn&#x27;t matter for parsing but I believe it does for serialization, so this brings the spec in line with the resolution. ... ...

## 📚 Platform Documentation & Specifications

- [CSS Borders and Box Decorations Module Level 4](https://www.w3.org/TR/css-borders-4) *(w3.org)*
- [CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1367) *(github.com)*
- [\[css-borders-4\] Fix corner-shape \|\| border-radius order to match resolution in #11623 by kbabbitt · Pull Request #14607 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/pull/14607) *(github.com)*
- [\[css-borders-4\] corner-shape initial value ("round") is strange in some cases (e.g. bevel) · Issue #11623 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/11623) *(github.com)*
- [\[css-borders\] Add shorthand for \`border-shape\` / \`corner-shape\` / \`border-radius\` · Issue #11679 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/11679) *(github.com)*
- [\[css-borders-4\] \`corner\` shorthand slashes conflict with optional forward slashs in border-\*-radius long hands · Issue #13889 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/13889) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 55 result(s) found across 12 planned queries — **18 verified relevant**
  - `"chromestatus.com/feature/5152215540039680" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"static.januschka.com/i-425897047" -site:static.januschka.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"drafts.csswg.org/css-borders-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS corner shorthand properties " API` — *Core feature API query* (8 returned)
  - `"CSS corner shorthand properties " (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"css                                                                                                                                                                                                                                                            /* before: two declarations needed */                                                                                                                                                                                                                           border-top-left-radius: 20px;                                                                                                                                                                                                                                   corner-shape-top-left: squircle;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 /* after: single corner shorthand */                                                                                                                                                                                                                            corner-top-left: 20px squircle;" OR "static.januschka" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (0 returned)
  - `"CSS corner shorthand properties " (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS corner shorthand properties " (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"corner shorthand" OR "corner-top-left" "corner-shape" css tutorial OR guide` — *Finds developer guides and overview articles explaining the new CSS corner shorthands and their usage.* (5 returned)
  - `"corner-top-left:" OR "corner:" squircle css -github` — *Identifies CSS code snippets and usage examples combining corner-shape and border-radius using the shorthand syntax.* (8 returned)
  - `"corner shorthand" "corner-shape" site:chromestatus.com OR "Intent to Prototype" OR "Intent to Ship"` — *Tracks browser vendor release notes, implementation status, and intent declarations in Chromium and other engines.* (1 returned)
  - `site:github.com/w3c/csswg-drafts "corner-shape" "corner" shorthand OR "issue 11623"` — *Surfaces standards deliberations, design trade-offs, and community feedback inside CSS Working Group issues.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 17 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "corner-shape", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "corner-shape": Chrome 76.7% passing (stable)*

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
