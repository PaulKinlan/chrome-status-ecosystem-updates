# CSS corner shorthand properties 

> **Report Week:** 2026-W44 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Implements the CSS corner shorthand and per-corner sub-shorthands (corner-top-left, corner-top-right, corner-bottom-left, corner-bottom-right) as well as physical (corner-top, corner-bottom) and logical (corner-block-start, corner-block-end, etc.) edge  shorthands. These allow setting both border-radius and corner-shape for individual corners in a single declaration. Additionally, corners is retained as a compat alias for the corner shorthand.   sampler: https://static.januschka.com/i-425897047/  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7747994

### Motivation

Currently, setting both the radius and shape of a corner requires two separate declarations (border-radius and corner-shape). The CSSWG resolved ( https://github.com/w3c/csswg-drafts/issues/11623#issuecomment-2982179370  ) to add a corner shorthand that combines both properties, making it more ergonomic for authors to   style individual corners. For example:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           \`\`\`css                                                                                                                                                                                                                                                            /\* Before: two declarations needed \*/                                                                                                                                                                                                                           border-top-left-radius: 20px;                                                                                                                                                                                                                                   corner-shape-top-left: squircle;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 /\* After: single corner shorthand \*/                                                                                                                                                                                                                            corner-top-left: 20px squircle;                                                                                                                                                                                                                               \`\`\`

## Ecosystem Status

- **Momentum:** Emerging (footprint 180 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The CSS corner shorthand properties, enabled by default in Chrome 157, consolidate border radius and corner-shape values into unified declarations across physical, directional, and logical edge variants. This directly resolves the verbosity of having to declare independent radius and shape properties following the initial arrival of corner-shaping in Chromium 139. While the CSS Borders and Box Decorations Level 4 specification enjoys broad conceptual backing, the shorthand remains tied to the broader cross-engine rollout of corner-shaping.

### Recommendations
- Actionable Advice: Teams should adopt CSS corner shorthands purely as a progressive enhancement, always declaring standard border-radius properties first or testing with @supports rules. Critical production components requiring identical squircle curvature across all browsers should continue relying on fallback clip-paths until Safari and Firefox promote corner-shape features to stable releases.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @smfr: "We think that \`corner-shape\` will be useful to allow for bevel, and superellipse (aka squircle), but we believe that more complex corner shapes are be..."
- Standards Activity (Mozilla): Latest discussion from @dholbert: "&gt; @dholbert fwiw, I'm not so sure about it. \`corner-shape: angle\` messing with \`border-radius\` feels wrong somehow (even if it's the simplest way to s..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Corner-shape](https://github.com/WebKit/standards-positions/issues/229) [closed]
- **Mozilla:** [CSS corner-shape](https://github.com/mozilla/standards-positions/issues/823) [closed]

## Web-features Group

*group-level data: web-features [`corner-shape`](https://webstatus.dev/features/corner-shape)*

- Share of tests passing in the web-features group `corner-shape` on [wpt.fyi](https://wpt.fyi/results?q=feature:corner-shape) (via webstatus.dev) — stable: Chrome 81.8% · Edge 84.1% · Firefox 10.2% · Safari 8%; experimental: Chrome 88.6% · Edge 90.9% · Firefox 59.1% · Safari 68.2%
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/229))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/823))

## 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > \*Example:\* \`corner: 20px squircle;\` card { corner: 20px squircle; }\` and detailing both the per-corner and edge-based logical property equivalents
- [web.dev](https://web.dev/blog/web-platform-09-2026?hl=en) *(web.dev)*
  > \*\*Implementation & Rollout:\*\* Promoted to the Blink engine under the \`--enable-blink-features=CSSCornersShorthand\` flag and scheduled across the Chrome 156 / Chrome 157 beta cycles
- [appspot.com](https://f896c59-dot-app-py3-dot-cr-status.appspot.com) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > \*\*Implementation & Rollout:\*\* Promoted to the Blink engine under the \`--enable-blink-features=CSSCornersShorthand\` flag and scheduled across the Chrome 156 / Chrome 157 beta cycles
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > Chrome's release notes emphasize the developer ergonomics of condensing verbose corner declarations into intuitive one-liners
- [googleusercontent.com](https://doc-4ieg-4ra0-issuetracker.googleusercontent.com/issues/550924692) *(doc-4ieg-4ra0-issuetracker.googleusercontent.com)*
  > MDN documentation covers \`corner-shape\`, \`&lt;corner-shape-value&gt;\`, and individual corner shape properties (\`corner-top-left-shape\`, \`corner-top-shape\`), with ongoing documentation updates integrating the new unified \`corner\` shorthands
- [master.dev](https://blog.master.dev/background-patterns-with-css-corner-radius) *(blog.master.dev)*
  > These tutorials explain how the mathematical curves work (from negative values producing concave scoops to positive values yielding iOS-style squircles) and illustrate how the shorthand simplifies styling cards, badges, and decorative patterns withou...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17570.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties 'Dan Clark' via blink-dev Mon, 28 Sep 2026 16:48:58 -0700 LGTM2 On Monday, S...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17531.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Rick Byers Wed, 23 Sep 2026 08:12:55 -0700 Looks, like it is implemented on ...
- [\[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17509.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 21 Sep 2026 11:46:37 -0700 This looks like a good feature; can you...
- [\[blink-dev\] Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17493.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS corner shorthand properties Helmut Januschka Fri, 18 Sep 2026 06:34:29 -0700 \*Contact emails\* \[email&#160;protected\] \*Ex...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17538.html) *(mail-archive.com)*
  > The corner shorthands &gt;&gt;&gt; are &lt;strong&gt;an ergonomic extension that combines the existing corner-shape and &gt;&gt;&gt; border-radius properties&lt;/strong&gt;. &gt;&gt;&gt; &gt;&gt;&gt; \*WebKit\*: Shipped/Shipping ( &gt;&gt;&gt; https://github.com/W...
- [Chrome Platform Status](https://chromestatus.com/feature/5357329815699456) *(chromestatus.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1367) *(github.com · 2026-08-23T14:10:52)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window....
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17570.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties 'Dan Clark' via blink-dev Mon, 28 Sep 2026 16:48:58 -0700 LGTM2 On...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17531.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Rick Byers Wed, 23 Sep 2026 08:12:55 -0700 Looks, like it is imple...
- [\[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17509.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 21 Sep 2026 11:46:37 -0700 This looks like a good featur...
- [\[blink-dev\] Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17493.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > \[blink-dev\] Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS corner shorthand properties Helmut Januschka Fri, 18 Sep 2026 06:34:29 -0700 \*Contact emails\* \[email&#160;prot...

## 📚 Platform Documentation & Specifications

- [CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1367) *(github.com)*
- [\[css-borders-4\] corner-shape initial value ("round") is strange in some cases (e.g. bevel) · Issue #11623 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11623) *(github.com)*
- [\[css-borders-4\] Fix corner-shape \|\| border-radius order to match resolution in #11623 by kbabbitt · Pull Request #14607 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/pull/14607) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 58 result(s) found across 12 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5152215540039680" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"static.januschka.com/i-425897047" -site:static.januschka.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"drafts.csswg.org/css-borders-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"CSS corner shorthand properties " API` — *Core feature API query* (5 returned)
  - `"CSS corner shorthand properties " (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"css                                                                                                                                                                                                                                                            /* before: two declarations needed */                                                                                                                                                                                                                           border-top-left-radius: 20px;                                                                                                                                                                                                                                   corner-shape-top-left: squircle;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 /* after: single corner shorthand */                                                                                                                                                                                                                            corner-top-left: 20px squircle;" OR "static.januschka" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (0 returned)
  - `"CSS corner shorthand properties " (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS corner shorthand properties " (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"corner-top-left" OR "corner-shape" "border-radius" CSS shorthand tutorial OR guide` — *Discovers introductory articles, tutorials, and practical developer guides explaining the new corner shorthand.* (0 returned)
  - `css "corner-shape" ("corner-top-left" OR "corner-block-start" OR "corner:") squircle syntax` — *Surfaces precise CSS syntax snippets, code usage examples, and logical corner property declarations.* (8 returned)
  - `"corner shorthand" OR "corner-shape" site:chromestatus.com OR site:webkit.org OR site:caniuse.com` — *Tracks platform adoption, browser implementation status, and release milestones across Chromium, WebKit, and Gecko.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "corner" ("corner-shape" OR "11623")` — *Finds CSS Working Group debates, spec resolutions, and web author sentiment regarding the corner shorthand design.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 17 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "corner-shape", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "corner-shape": Chrome 81.8% passing (stable)*
- **Sources cited by the AI synthesis:** 8 result(s) found — **1 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 14 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5152215540039680)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5152215540039680)
- [Specification](https://drafts.csswg.org/css-borders-4/#corner-shaping)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/425897047)
