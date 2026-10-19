# CSS corner shorthand properties 

> **Report Week:** 2026-W43 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Implements the CSS corner shorthand and per-corner sub-shorthands (corner-top-left, corner-top-right, corner-bottom-left, corner-bottom-right) as well as physical (corner-top, corner-bottom) and logical (corner-block-start, corner-block-end, etc.) edge  shorthands. These allow setting both border-radius and corner-shape for individual corners in a single declaration. Additionally, corners is retained as a compat alias for the corner shorthand.   sampler: https://static.januschka.com/i-425897047/  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7747994

### Motivation

Currently, setting both the radius and shape of a corner requires two separate declarations (border-radius and corner-shape). The CSSWG resolved ( https://github.com/w3c/csswg-drafts/issues/11623#issuecomment-2982179370  ) to add a corner shorthand that combines both properties, making it more ergonomic for authors to   style individual corners. For example:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           \`\`\`css                                                                                                                                                                                                                                                            /\* Before: two declarations needed \*/                                                                                                                                                                                                                           border-top-left-radius: 20px;                                                                                                                                                                                                                                   corner-shape-top-left: squircle;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 /\* After: single corner shorthand \*/                                                                                                                                                                                                                            corner-top-left: 20px squircle;                                                                                                                                                                                                                               \`\`\`

## Ecosystem Status

- **Momentum:** Moderate (footprint 320 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The CSS corner shorthand feature streamlines modern UI layout design by combining border-radius and corner-shape values into a single property declaration per corner, edge, or logical block. Landing natively in Chromium-based browsers, it addresses a long-standing developer pain point by eliminating the need for separate properties or external hacks like clip-path and SVGs. While Chrome implements the spec directly, overall cross-browser web platform tests and adoption remain in early experimental states.

### Recommendations
- Actionable Advice: Teams can experiment with the feature inside current browser builds, but should treat it as a progressive enhancement. Fallback styling or traditional border-radius properties must remain in place for users on engines where the shorthand is not yet supported.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @smfr: "We think that \`corner-shape\` will be useful to allow for bevel, and superellipse (aka squircle), but we believe that more complex corner shapes are be..."
- Standards Activity (Mozilla): Latest discussion from @dholbert: "&gt; @dholbert fwiw, I'm not so sure about it. \`corner-shape: angle\` messing with \`border-radius\` feels wrong somehow (even if it's the simplest way to s..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Corner-shape](https://github.com/WebKit/standards-positions/issues/229) [closed]
- **Mozilla:** [CSS corner-shape](https://github.com/mozilla/standards-positions/issues/823) [closed]

## Web-features Group

*group-level data: web-features [`corner-shape`](https://webstatus.dev/features/corner-shape)*

- Share of tests passing in the web-features group `corner-shape` on [wpt.fyi](https://wpt.fyi/results?q=feature:corner-shape) (via webstatus.dev) — stable: Chrome 81.8% · Edge 84.1% · Firefox 10.2% · Safari 8%; experimental: Chrome 88.6% · Edge 89.8% · Firefox 59.1% · Safari 68.2%
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/229))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/823))

## 📰 Ecosystem Blogs & Articles

- [youtube.com](https://www.youtube.com/watch?v=kmfBt1gBAXQ) *(youtube.com)*
  > Historically, configuring advanced shapes alongside radii required separate declarations (\`border-radius\` and \`corner-shape\`), or heavy reliance on external hacks like \`clip-path\`, pseudo-elements, or SVGs
- [dev.to](https://dev.to/devsmitra/css-corner-shape-next-level-corners-for-your-ui-26db) *(dev.to)*
  > Historically, configuring advanced shapes alongside radii required separate declarations (\`border-radius\` and \`corner-shape\`), or heavy reliance on external hacks like \`clip-path\`, pseudo-elements, or SVGs \*\*Unified Declarations:\*\* Allowing developer...
- [chrome.com](https://developer.chrome.com/blog/implementing-corner-shape) *(developer.chrome.com)*
  > Discussions around Blink’s implementation emphasize the complexity of painting borders correctly with non-circular geometries (like superellipses) They also highlight the advanced \`superellipse()\` mathematical function (accepting values from \`-Infini...
- [artofstyleframe.com](https://artofstyleframe.com/blog/css-corner-shorthand-chrome-155-squircle-corners) *(artofstyleframe.com)*
  > Technical rollouts point out that while base properties like \`corner-shape\` started landing behind flags Because features roll out incrementally across browser versions and often sit behind experimental flags (such as \`--enable-experimental-web-platf...
- [medium.com](https://pixicstudio.medium.com/css-corner-shape-the-ui-property-most-developers-havent-tried-yet-606b3ee4e3fc) *(pixicstudio.medium.com)*
  > Articles focusing on \`corner-shape\` and its accompanying shorthands emphasize that it addresses a long-standing pain point in UI design
- [youtube.com](https://www.youtube.com/watch?v=FPB2KVe_jP0) *(youtube.com)*
  > They also highlight the advanced \`superellipse()\` mathematical function (accepting values from \`-Infinity\` to \`Infinity\`) for hyper-customized curves Tutorials note that elements like pricing cards, custom buttons, tooltip speech bubbles, and decorat...
- [youtube.com](https://www.youtube.com/watch?v=AhBL2MYlQj0) *(youtube.com)*
  > Tutorials note that elements like pricing cards, custom buttons, tooltip speech bubbles, and decorative sale tags can now be natively styled entirely in clean CSS without resorting to layout-breaking hacks
- [corner-shape \| CSS-Tricks](https://css-tricks.com/almanac/properties/c/corner-shape) *(css-tricks.com)*
  > Documentation updates on MDN and structural breakdowns on CSS-Tricks formalize the definitions for \`&lt;corner-shape-value&gt;\` types and the syntax rules for combining radii and shape keywords in a single shorthand declaration
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17569.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 28 Sep 2026 16:48:56 -0700 Thanks for the update. LGTM1. O...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17574.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Mike Taylor Mon, 28 Sep 2026 19:23:42 -0700 LGTM3 On 9/28/26 4:48 p.m., 'Dan...
- [\[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17509.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 21 Sep 2026 11:46:37 -0700 This looks like a good feature; can you...
- [\[blink-dev\] Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17493.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS corner shorthand properties Helmut Januschka Fri, 18 Sep 2026 06:34:29 -0700 \*Contact emails\* \[email&#160;protected\] \*Ex...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17538.html) *(mail-archive.com)*
  > The corner shorthands &gt;&gt;&gt; are &lt;strong&gt;an ergonomic extension that combines the existing corner-shape and &gt;&gt;&gt; border-radius properties&lt;/strong&gt;. &gt;&gt;&gt; &gt;&gt;&gt; \*WebKit\*: Shipped/Shipping ( &gt;&gt;&gt; https://github.com/W...
- [How to create fancy corners using CSS corner-shape - LogRocket Blog](https://blog.logrocket.com/create-fancy-corners-css) *(blog.logrocket.com · 2026-03-27T14:49:42)*
  > Let’s start with the syntax, which is the same as border-radius (one shorthand property and four longhand properties): ... The only difference is that with corner-shape, we don’t have axes to deal with. So with that out of the way, let’s move on to t...
- [Squircles in CSS: corner-shape, superellipse() and Browser Support (2026) - Squircle.js](https://squircle.js.org/blog/squircles-in-css) *(squircle.js.org · 2026-06-12T00:00:00)*
  > &lt;strong&gt;corner-shape is a new CSS property that controls the geometry of a corner, while border-radius continues to control its size&lt;/strong&gt;. Where border-radius alone always draws a circular or elliptical arc, corner-shape lets you tell the browser...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17531.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties · Rick Byers Wed, 23 Sep 2026 08:12:55 -0700 · Looks, like it is implemented on all blink platforms and the WebKit position is &#x27;support&#...
- [Drawing CSS Shapes using corner-shape – Master.dev Blog](https://frontendmasters.com/blog/drawing-css-shapes-using-corner-shape) *(frontendmasters.com · 2025-06-18T00:00:00)*
  > Temani’s note at the top of the page indicates it’s very new, only shipping in Chrome Canary right now, but will be in Chrome 129 Stable.
- [Re: \[blink-dev\] Intent to Ship: CSS Corner shaping (corner-shape, superellipse, squircle)](https://www.mail-archive.com/blink-dev@chromium.org/msg13910.html) *(mail-archive.com)*
  > Here is a list of spec issues related to corner-shape: &gt;&gt; &gt;&gt; &gt;&gt; https://github.com/w3c/csswg-drafts/issues/11623 &gt;&gt; &lt;https://github.com/w3c/csswg-drafts/issues/11623:&gt; &gt;&gt; &gt;&gt; A shorthand, compatible with curre...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17637.html) *(mail-archive.com)*
  > Quick correction to this I2S: jsnkuhn caught that the corner shorthands in Chromium still used the earlier per-corner, slash-separated grammar, rather than the current CSS Borders 4 grammar (corner: &lt;&#x27;border-radius&#x27;&gt; \|\| &lt;&#x27;corn...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1367) *(github.com · 2026-08-23T14:10:52)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window....
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17569.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 28 Sep 2026 16:48:56 -0700 Thanks for the update...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17574.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Mike Taylor Mon, 28 Sep 2026 19:23:42 -0700 LGTM3 On 9/28/26 4:48 ...
- [\[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17509.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 21 Sep 2026 11:46:37 -0700 This looks like a good featur...
- [\[blink-dev\] Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17493.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > \[blink-dev\] Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS corner shorthand properties Helmut Januschka Fri, 18 Sep 2026 06:34:29 -0700 \*Contact emails\* \[email&#160;prot...
- [csswg-drafts/css-borders-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-borders-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-borders-4/#corner-shaping`)*
  > csswg-drafts/css-borders-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh ...
- [\[css-borders-4\] border-shape property · Issue #1365 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1365) *(github.com · 2026-03-02T12:25:22)* *(Cites: `https://drafts.csswg.org/css-borders-4/#corner-shaping`)*
  > Specification title css-border-4 Specification or proposal URL (if available) https://&lt;strong&gt;drafts.csswg.org/css-borders-4&lt;/strong&gt;/#border-shape Explainer URL (if available) https://github.com/noamr/explainers/b...
- [\[css-borders-4\] border-shape property · Issue #625 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/625) *(github.com · 2026-03-02T12:27:04)* *(Cites: `https://drafts.csswg.org/css-borders-4/#corner-shaping`)*
  > WebKittens No response Title of the proposal \[css-borders-4\] border-shape property URL to the spec https://&lt;strong&gt;drafts.csswg.org/css-borders-4&lt;/strong&gt;/#border-shape URL to the spec&#x27;s repository No response Issue Tracker URL No resp...
- [CSS \` border-shape\` · Issue #1371 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1371) *(github.com · 2026-09-04T21:47:23)* *(Cites: `https://drafts.csswg.org/css-borders-4/#corner-shaping`)*
  > https://&lt;strong&gt;drafts.csswg.org/css-borders-4&lt;/strong&gt;/#border-shape

## 📚 Platform Documentation & Specifications

- [corner-shape CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/corner-shape-value) *(developer.mozilla.org)*
- [CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1367) *(github.com)*
- [csswg-drafts/css-borders-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-borders-4/Overview.bs) *(github.com)*
- [\[css-borders-4\] border-shape property · Issue #1365 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1365) *(github.com)*
- [\[css-borders-4\] border-shape property · Issue #625 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/625) *(github.com)*
- [CSS \` border-shape\` · Issue #1371 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1371) *(github.com)*
- [\[css-borders-4\] Fix corner-shape \|\| border-radius order to match resolution in #11623 by kbabbitt · Pull Request #14607 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/pull/14607) *(github.com)*
- [\[css-borders\] Align the corner and corner-\* shorthands with the current spec grammar by hjanuschka · Pull Request #75690 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/75690) *(github.com)*
- [Import updated corner shorthand WPTs for css-borders-4 by hjanuschka · Pull Request #76789 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/76789) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 12 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/5152215540039680" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"static.januschka.com/i-425897047" -site:static.januschka.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"drafts.csswg.org/css-borders-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"CSS corner shorthand properties " API` — *Core feature API query* (5 returned)
  - `"CSS corner shorthand properties " (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"css                                                                                                                                                                                                                                                            /* before: two declarations needed */                                                                                                                                                                                                                           border-top-left-radius: 20px;                                                                                                                                                                                                                                   corner-shape-top-left: squircle;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 /* after: single corner shorthand */                                                                                                                                                                                                                            corner-top-left: 20px squircle;" OR "static.januschka" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (0 returned)
  - `"CSS corner shorthand properties " (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS corner shorthand properties " (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `CSS corner shorthand properties tutorial guide` — *Finds developer blog posts and practical guides explaining how to use the new CSS corner shorthands.* (8 returned)
  - `CSS corner-top-left border-radius corner-shape code example` — *Discovers real-world CSS code examples showing combined radius and shape declarations.* (8 returned)
  - `CSSWG corner shorthand issue 11623 sentiment` — *Tracks community discussions and developer reactions regarding the CSS working group decision on corner properties.* (8 returned)
  - `Blink chrome status CSS corner shorthand properties adoption` — *Searches for release announcements, change logs, and browser implementation status for CSS corner shorthands.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **1 verified relevant**
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
