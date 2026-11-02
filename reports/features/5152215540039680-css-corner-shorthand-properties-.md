# CSS corner shorthand properties 

> **Report Week:** 2026-W45 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Implements the CSS corner shorthand and per-corner sub-shorthands (corner-top-left, corner-top-right, corner-bottom-left, corner-bottom-right) as well as physical (corner-top, corner-bottom) and logical (corner-block-start, corner-block-end, etc.) edge  shorthands. These allow setting both border-radius and corner-shape for individual corners in a single declaration. Additionally, corners is retained as a compat alias for the corner shorthand.   sampler: https://static.januschka.com/i-425897047/  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7747994

### Motivation

Currently, setting both the radius and shape of a corner requires two separate declarations (border-radius and corner-shape). The CSSWG resolved ( https://github.com/w3c/csswg-drafts/issues/11623#issuecomment-2982179370  ) to add a corner shorthand that combines both properties, making it more ergonomic for authors to   style individual corners. For example:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           \`\`\`css                                                                                                                                                                                                                                                            /\* Before: two declarations needed \*/                                                                                                                                                                                                                           border-top-left-radius: 20px;                                                                                                                                                                                                                                   corner-shape-top-left: squircle;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 /\* After: single corner shorthand \*/                                                                                                                                                                                                                            corner-top-left: 20px squircle;                                                                                                                                                                                                                               \`\`\`

## Ecosystem Status

- **Momentum:** Quiet (-40 points since 2026-10-12; footprint 230 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The CSS corner shorthand properties, standardized in CSS Borders and Box Decorations Module Level 4, streamline element styling by combining border radius and corner shape declarations into unified physical and logical shorthands like corner-top-left: 20px squircle. Chromium is enabling the feature by default starting in Chrome 157, backed by formal W3C CSS Working Group resolutions. Cross-browser consensus is broadly aligned, though the broader corner-shape feature family is currently in limited baseline availability while non-Chromium engines progress through implementation.

### Recommendations
- Actionable Advice: Adopt the corner shorthand progressively today by providing a traditional border-radius fallback followed by feature-flagged declarations guarded with @supports (corner: 10px squircle) or @supports (corner-shape: squircle). Avoid relying on corner shorthands as the sole geometric styling mechanism in mission-critical production UI until cross-engine availability stabilizes.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @smfr: "We think that \`corner-shape\` will be useful to allow for bevel, and superellipse (aka squircle), but we believe that more complex corner shapes are be..."
- Standards Activity (Mozilla): Latest discussion from @dholbert: "&gt; @dholbert fwiw, I'm not so sure about it. \`corner-shape: angle\` messing with \`border-radius\` feels wrong somehow (even if it's the simplest way to s..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Corner-shape](https://github.com/WebKit/standards-positions/issues/229) [closed]
- **Mozilla:** [CSS corner-shape](https://github.com/mozilla/standards-positions/issues/823) [closed]

## Web-features Group

*group-level data: web-features [`corner-shape`](https://webstatus.dev/features/corner-shape)*

- Share of tests passing in the web-features group `corner-shape` on [wpt.fyi](https://wpt.fyi/results?q=feature:corner-shape) (via webstatus.dev) — stable: Chrome 78.1% · Edge 80.3% · Firefox 9.4% · Safari 7.8%; experimental: Chrome 84.5% · Edge 86.5% · Firefox 55.4% · Safari 71%
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/229))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/823))

## 📰 Ecosystem Blogs & Articles

- [Squircles in CSS: corner-shape, superellipse() and Browser Support (2026) - Squircle.js](https://squircle.js.org/blog/squircles-in-css) *(squircle.js.org)*
  > The \*\*CSS corner shorthand properties\*\* (specified in the W3C \*\*CSS Borders and Box Decorations Module Level 4\*\*) address a major ergonomics issue introduced when corner shaping (\`corner-shape: squircle \| bevel \| scoop \| notch \| round \| superellipse(...
- [css.properties](https://css.properties/corner-top-left-shape) *(css.properties)*
  > The \*\*CSS corner shorthand properties\*\* (specified in the W3C \*\*CSS Borders and Box Decorations Module Level 4\*\*) address a major ergonomics issue introduced when corner shaping (\`corner-shape: squircle \| bevel \| scoop \| notch \| round \| superellipse(...
- [searchfox.org](https://searchfox.org/firefox-main/source/testing/web-platform/tests/css/css-borders/corner-shape/corner-shorthand-rendering-ref.html) *(searchfox.org)*
  > \*\*Signals:\*\* Firefox signaled positive support in Web Platform Tests (WPT), and WebKit has been tracking implementation
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > Edge documentation highlighted the \`corner\` property as a headline CSS addition card { corner: 20px squircle; }\` replaces paired declarations across cards, buttons, and modal dialogs
- [How to create fancy corners using CSS corner-shape - LogRocket Blog](https://blog.logrocket.com/create-fancy-corners-css) *(blog.logrocket.com)*
  > \*\*The "Squircle" and UI Detailing Craze:\*\* Both publications released tutorials exploring native squircle and bevel rendering \*\*Ergonomic Simplification:\*\* Authors emphasized that without the \`corner\` shorthands, component authors had to write verbos...
- [master.dev](https://blog.master.dev/background-patterns-with-css-corner-radius) *(blog.master.dev)*
  > They noted that mobile-inspired design languages (such as iOS-style squircle icons and cards) previously required heavy SVG clip paths or canvas workarounds dev):\*\* Explores generative background tiles and decorative UI (such as vintage ticket stubs ...
- [youtube.com](https://m.youtube.com/watch?v=SEhV2fxsTbc&pp=0gcJCTAMAYcqIYzv) *(m.youtube.com)*
  > \*\*Fallbacks with \`@supports\`:\*\* Multiple developer articles point out the necessity of progressive enhancement, recommending \`@supports (corner: 20px squircle)\` to provide basic \`border-radius\` fallbacks for older browser versions
- [\[blink-dev\] Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17493.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS corner shorthand properties Helmut Januschka Fri, 18 Sep 2026 06:34:29 -0700 \*Contact emails\* \[email&#160;protected\] \*Ex...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17637.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Helmut Januschka Thu, 01 Oct 2026 07:54:36 -0700 Quick correction to this I2...
- [\[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17509.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 21 Sep 2026 11:46:37 -0700 This looks like a good feature; can you...
- [CSS Borders and Box Decorations Module Level 4](https://w3c.github.io/csswg-drafts/css-borders) *(w3c.github.io)*
  > CSS Borders and Box Decorations Module Level 4 CSS Borders and Box Decorations Module Level 4 W3C Working Draft , 15 October 2026 More details about this document This version: https://www.w3.org/TR/2026/WD-css-borders-4-20261015/ Latest published ve...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17570.html) *(mail-archive.com)*
  > &gt; &gt; On Thursday, September 24, 2026 at 3:12:33 AM UTC-7 \[email protected\] &gt; wrote: &gt; &gt;&gt; ok was faster than i thought, the webkit PR &gt;&gt; https://github.com/WebKit/WebKit/pull/65464 landed (behind flag) &gt;&gt; &gt;&gt; Am Mi., ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1367) *(github.com · 2026-08-23T14:10:52)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh y...
- [\[blink-dev\] Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17493.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > \[blink-dev\] Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS corner shorthand properties Helmut Januschka Fri, 18 Sep 2026 06:34:29 -0700 \*Contact emails\* \[email&#160;prot...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17637.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Helmut Januschka Thu, 01 Oct 2026 07:54:36 -0700 Quick correction ...
- [\[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17509.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 21 Sep 2026 11:46:37 -0700 This looks like a good featur...
- [csswg-drafts/css-borders-4/Overview.bs at main · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/blob/main/css-borders-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-borders-4/#corner-shaping`)*
  > csswg-drafts/css-borders-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You si...
- [CSS Borders and Box Decorations Module Level 4](https://w3c.github.io/csswg-drafts/css-borders) *(w3c.github.io)* *(Cites: `https://drafts.csswg.org/css-borders-4/#corner-shaping`)*
  > CSS Borders and Box Decorations Module Level 4 CSS Borders and Box Decorations Module Level 4 W3C Working Draft , 15 October 2026 More details about this document This version: https://www.w3.org/TR/2026/WD-css-borders-4-20261015/ Latest pu...

## 📚 Platform Documentation & Specifications

- [CSS Borders and Box Decorations Module Level 4](https://www.w3.org/TR/css-borders-4) *(w3.org)*
- [\[css-borders-4\] corner-shape initial value ("round") is strange in some cases (e.g. bevel) · Issue #11623 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/11623) *(github.com)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/corner-top-shape/index.md?plain=1) *(github.com)*
- [CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1367) *(github.com)*
- [csswg-drafts/css-borders-4/Overview.bs at main · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/blob/main/css-borders-4/Overview.bs) *(github.com)*
- [\[css-borders-4\] Fix corner-shape \|\| border-radius order to match resolution in #11623 by kbabbitt · Pull Request #14607 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/pull/14607) *(github.com)*
- [\[css-borders\] Add shorthand for \`border-shape\` / \`corner-shape\` / \`border-radius\` · Issue #11679 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/11679) *(github.com)*
- [\[css-borders-4\] \`corner\` shorthand slashes conflict with optional forward slashs in border-\*-radius long hands · Issue #13889 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/13889) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 55 result(s) found across 12 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5152215540039680" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"static.januschka.com/i-425897047" -site:static.januschka.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"drafts.csswg.org/css-borders-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS corner shorthand properties " API` — *Core feature API query* (5 returned)
  - `"CSS corner shorthand properties " (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"css                                                                                                                                                                                                                                                            /* before: two declarations needed */                                                                                                                                                                                                                           border-top-left-radius: 20px;                                                                                                                                                                                                                                   corner-shape-top-left: squircle;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 /* after: single corner shorthand */                                                                                                                                                                                                                            corner-top-left: 20px squircle;" OR "static.januschka" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (0 returned)
  - `"CSS corner shorthand properties " (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS corner shorthand properties " (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"corner-shape" AND ("corner-top-left" OR "corner" shorthand) css blog OR guide` — *Finds developer blogs, guides, and articles demonstrating how to use the new CSS corner shorthands.* (8 returned)
  - `css ("corner-top-left:" OR "corner:") ("squircle" OR "round")` — *Surfaces real-world CSS code examples using the corner shorthand syntax alongside shape keywords like squircle.* (8 returned)
  - `"corner shorthand" OR "corner-shape" ("Chrome Platform Status" OR "caniuse" OR site:chromestatus.com)` — *Tracks browser adoption, implementation timelines, and platform readiness across major engines.* (1 returned)
  - `site:github.com/w3c/csswg-drafts "corner" shorthand OR "corner-shape" OR 11623` — *Discovers CSSWG working group deliberations, author feedback, and specification issues resolving the corner shorthand syntax.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "corner-shape", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "corner-shape": Chrome 78.1% passing (stable)*
- **Sources cited by the AI synthesis:** 5 result(s) found — **0 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 13 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5152215540039680)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5152215540039680)
- [Specification](https://drafts.csswg.org/css-borders-4/#corner-shaping)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/425897047)
