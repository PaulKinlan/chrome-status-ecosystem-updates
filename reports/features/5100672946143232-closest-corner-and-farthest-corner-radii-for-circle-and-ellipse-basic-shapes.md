# closest-corner and farthest-corner radii for circle() and ellipse() basic shapes

> **Report Week:** 2026-W40 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

The circle() and ellipse() CSS basic-shape functions accept the closest-corner and farthest-corner radius keywords, in addition to the existing closest-side and farthest-side. These keywords resolve to the Euclidean distance from the shape center to the nearest or farthest corner of the reference box, matching the long-standing behavior of radial-gradient(). They work in clip-path, shape-outside, and offset-path, so the same shape syntax accepted by gradients now works for shapes.   CL: https://chromium-review.googlesource.com/c/chromium/src/+/7767079

### Motivation

The <radial-extent> keywords closest-corner and farthest-corner are defined for radial gradients and have been interoperably supported there for years. The circle() and ellipse() basic-shape syntax in CSS Shapes Module Level 1 shares the <shape-radius> production with gradients, but Blink (and Gecko) only accepted closest-side / farthest-side for the basic shapes. That means authors who want a circle that exactly inscribes the reference box's farthest corner have to hand-compute sqrt(w*w + h*h)/2 or fall back to a radial-gradient() mask, even though the keyword exists in the same value space.

This change fills in the missing keywords so basic shapes have the full <radial-extent> set:

closest-corner: the distance from the center to the closest corner of the reference box.

farthest-corner: the distance from the center to the farthest corner of the reference box.

For ellipse(), which accepts two independent <shape-radius> values in current implementations, each axis resolves independently to the corner Euclidean distance. 


A spec ambiguity exists about whether ellipse() should accept one <radial-extent> covering both axes (per the spec text) or two independent ones (current implementation reality). This was discussed in https://github.com/w3c/csswg-drafts/issues/13814 and the conclusion from the thread was that the existing two-value interpretation is fine to keep.

## Ecosystem Status

- **Momentum:** High (440 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** This feature closes a long-standing parity and ergonomics gap between CSS radial gradients and basic shapes, allowing clip-path, shape-outside, and offset-path to consume closest-corner and farthest-corner radius keywords in circle() and ellipse(). WebKit shipped support two years ago, and with Chrome 156 enabling it by default, cross-engine interoperability is largely achieved. While broad alignment is solid, active CSSWG discussions continue regarding exact spec grammar for dual-axis ellipse() extents.

### Recommendations
- Actionable Advice: Web developers should progressively enhance complex clipping and motion paths using @supports (clip-path: circle(farthest-corner)). If using ellipse(), test carefully across browsers or fall back to explicit lengths/percentages until CSSWG standardizes the two-value syntax resolution.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @nt1m: "This was implemented 2 years ago: https://commits.webkit.org/281808@main  WebKit wrote the original tests for those :)..."
- Standards Activity (Mozilla): Latest discussion from @BorisChiou: "Yes. We have implemented these keywords. However, for \`ellipse()\`, https://github.com/w3c/csswg-drafts/issues/14010 is the spec issue we have concerns..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Shapes: \`closest-corner\` and \`farthest-corner\` radii for \`circle()\` and \`ellipse()\`](https://github.com/WebKit/standards-positions/issues/719) [closed]
- **Mozilla:** [CSS Shapes: \`closest-corner\` and \`farthest-corner\` radii for \`circle()\` and \`ellipse()\`](https://github.com/mozilla/standards-positions/issues/1450) [open]

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEgI2oQhyA593spfy0QldRpMw0-cUnPzz50tidj4JgY25wM5__ltamHlq9WvH3JYhn-jzYlpMhM2w0hIiCtzcYgf0P3IJf48BpX4Ds6OclyXImqvsIHynNQvs_PDynOsVs2b0Sb6KNR) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEd3rgNrp0Rl_uMXbl3VBzeX8oWRb4bXiWMSdHiRkqiQ76pZ3sfcb7DDcZnNas-RCt9OLTWD1aibHanr0q0oveq2mAcAh9yskNpfqopF_lliLkF2-H9oH8w6ABcE-FyMKJDbUrm9LRrer7wnCHP1e1RspEVKiTvyVrhxxl98Qoo991Fkw==) *(vertexaisearch.cloud.google.com)*
  > <basic-shape> CSS type - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Values <basic-shape> Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Español Français 日本語 中文 (简体) <basi...
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGzNcinfVJ2fInshIDNEcKzWKCqeT7O4iV4HcANOT3rqKlVBQykIqa1VD3rnsHlQhjvD8007uXQMskPkavkQhPJh5ouZo7ecNMRzg7FnTTMC9lHUmygG3_NT5WOKDw8sJMSKQ9VQ8uId8HQNpxYzvQL) *(vertexaisearch.cloud.google.com)*
  > Chrome 156 Release Notes - Chrome Platform Status Chrome 156 Release Notes Preview Scheduled Stable Release October 20, 2026 (Currently on Dev channel, reaches Beta on September 30, 2026) Network / Connectivity Avoid caching module failures # Link co...
- [chromestatuslite.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGWVRQZv86PUVNkcL6skjo5FL4b9mzrNU4PL3dXdBXoLxs5-aP7FUUV8aSW9jkX2G2gGuzPiHceAGMV_RU-qX3zetsM4Q9SanbbOFqfbal4z_qHZQ==) *(vertexaisearch.cloud.google.com)*
  > Chrome Release 156 Chrome Release Summary Chrome version: 156 155 154 153 152 151 150 149 +149 148 147 146 145 144 143 142 141 140 139 138 137 136 135 134 133 132 131 130 129 128 127 126 125 124 123 122 121 120 119 118 117 116 115 114 113 112 111 110...
- [googlesource.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG2poFymoGk8H69rCU98mwAycMPz7sAXaKggjaQW5Sdi7Kb2G2_duWB8XWDguC47ywKK6N21ZT-YnOvo9M596-w7B9ZkSooyWH28ZkKVgpxFpQT1jRXjhAoBCyP6AaikQdgOlcKHuhwJlzmHrdL9YfpT8DnHiJYlVFFW432FSz0FRhje7HbSSTRGmdMsWZ2NL4mtUO5M-WI72jHGjHjjNbKYlqdcUU5tRiLG1ded_c=) *(vertexaisearch.cloud.google.com)*
  > third_party/blink/renderer/platform/runtime_enabled_features.json5 - chromium/src - Git at Google Sign in &#9681; Theme chromium / chromium / src / HEAD / . / third_party / blink / renderer / platform / runtime_enabled_features.json5 blob: cfb8289945...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF2TtLAwPbWs17HTuLe6rezZQBYOC93CSSxON3lTHDyhFvlWFR9Su5EM6RC6g5piRxveYftAAdA8A6ccJlxMGrFvKljAbaz8M5RrooM2T-OPEu2h8Jc6wvui213SAv0920P3_JJDEJGZBau-9POMiy-qYh8ynjtsW-vwxKIsMmeuq8k5ZtGj2wrN4g=) *(vertexaisearch.cloud.google.com)*
  > circle() CSS function - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Values <basic-shape> circle() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 한국어 中文 (简体) c...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFLO_lBaLLY059CMofDC6NZ5R1hS_VVrTlXv92W3-B-VRk16VGedR2PE6MlSZjTe6j9wUVbhHi0nYL5yl1T_A4tNDZSbEQ5fP8DePswMpjKzRBA39OqN4QjzNvu4GOxUCLedHc3OaZ0KDDwqnlnYskLKw5OXvoRSKZCPXRvEfZMHyuPPXucLeW5JnNq) *(vertexaisearch.cloud.google.com)*
  > ellipse() CSS function - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Values <basic-shape> ellipse() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 中文 (简体) ell...
- [\[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17254.html) *(mail-archive.com)*
  > This change fills in the missing keywords so basic shapes have the full &lt;radial-extent&gt; set: <strong>closest-corner: the distance from the center to the closest corner of the reference box.</strong> farthest-corner: the distance from the center...
- [Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17268.html) *(mail-archive.com)*
  > This change fills in the missing keywords so basic shapes have the full &lt;radial-extent&gt; set: <strong>closest-corner: the distance from the center to the closest corner of the reference box.</strong> farthest-corner: the distance from the center...
- [CSS Ellipse(): Mastering Circular Shapes for Modern Web Design \| CodingEasyPeasy](https://www.codingeasypeasy.com/blog/css-ellipse-mastering-circular-shapes-for-modern-web-design) *(codingeasypeasy.com · 2024-01-27T00:00:00)*
  > The basic syntax for the ellipse() function is as follows: ... <strong>rx: The x-axis radius of the ellipse</strong>. This determines how wide the ellipse is horizontally. It can be a length value (e.g., 50px, 25%, 5em) or closest-side or farthest-si...
- [Learn CSS radial-gradient by Building Background Patterns](https://www.freecodecamp.org/news/css-radial-gradient) *(freecodecamp.org · 2024-10-23T19:18:49)*
  > We will consider a horizontal radius equal to 50% and a vertical one equal to 50% and the center of our shape will be the center of the area. <strong>An ellipse is defined with two radii called the &quot;horizontal radius&quot; and the &quot;vertical...
- [CSS Rounded Corners: border-radius, Pill Shapes And Elliptical Corners Explained (2026-27) \| LearnToSAP](https://www.learntosap.com/CSS-rounded-corners.html) *(learntosap.com · 2026-06-25T00:00:00)*
  > Master CSS Rounded Corners with this complete 2026 guide. Learn the border-radius property, per-corner radii, the 8-value elliptical syntax, percentage radii for circles and pills, individual corner properties like border-top-left-radius, and combini...
- [CSS border-radius Guide: Rounded Corners, Ellipses & Asymmetric Shapes](https://www.studiolimb.com/guides/border-radius-css-guide.html) *(studiolimb.com · 2026-04-24T00:00:00)*
  > Each corner gets unique horizontal/vertical radii, creating irregular-looking but mathematically precise shapes perfect for decorative backgrounds. /* Approximation — true squircles require SVG or mask */ .squircle { width: 120px; height: 120px; bord...
- [Lesson 9 - Drawing ellipse and rectangle \| An infinite canvas tutorial](https://infinitecanvas.cc/guide/lesson-009) *(infinitecanvas.cc)*
  > In Lesson 2, we used SDFs to draw circles, and it is easy to extend this to ellipse and rectangle. 2D distance functions provide more SDF expressions for 2D graphics: ... In the Shader, use the shape variable to distinguish between these three shapes...
- [Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17488.html) *(mail-archive.com)*
  > The keywords are already part of the css-shapes-1 grammar &lt;https://drafts.csswg.org/css-shapes-1/#basic-shape-functions&gt; (|circle()| takes |&lt;radial-size&gt;|, defined in css-images, which includes |closest-corner| and |farthest-corner|), and...
- [CSS Radial-Gradient: Complete Guide to Circular and Elliptical Gradients - CodeLucky](https://codelucky.com/css-radial-gradient) *(codelucky.com · 2025-08-27T11:39:16)*
  > The gradient ends at the closest side of the container: ... .<strong>closest-corner { background: radial-gradient(circle closest-corner, #f1c40f, #8e44ad); }</strong> .farthest-corner { background: radial-gradient(circle farthest-corner, #3498db, #e6...
- [CSS Radial Gradient (With Examples)](https://www.programiz.com/css/radial-gradient) *(programiz.com)*
  > div { height: 250px; width: 400px; } div.ellipse { /* creates an elliptical radial gradient, default value */ background-image: radial-gradient(ellipse, blue, red); } div.circle { /* creates a circular radial gradient */ background-image: radial-grad...
- [\[dev-platform\] Intent to prototype and ship: closest-corner and farthest-corner for circle() and ellipse() basic shapes](http://www.mail-archive.com/dev-platform@mozilla.org/msg01887.html) *(mail-archive.com)*
  > *Summary*: ellipse() and circie() from [css-shapes] &lt;https://drafts.csswg.org/css-shapes/#supported-basic-shapes&gt; accept &lt;radial-size&gt;, which has been extend to include closest-corner and farthest-corner:
- [Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17457.html) *(mail-archive.com)*
  > The keywords are already part of the css-shapes-1 grammar &lt;https://drafts.csswg.org/css-shapes-1/#basic-shape-functions&gt; (|circle()| takes |&lt;radial-size&gt;|, defined in css-images, which includes |closest-corner| and |farthest-corner|), and...
- [\[webkit-changes\] \[WebKit/WebKit\] d3dd2b: Support closest-corner/farthest-corner in circle a...](https://www.mail-archive.com/webkit-changes@lists.webkit.org/msg217552.html) *(mail-archive.com)*
  > Add support for the `closest-corner` and `farthest-corner` radial-size keywords to the `circle()` and `ellipse()` basic shapes. This is specified in https://drafts.csswg.org/css-shapes/ and https://drafts.csswg.org/css-images-4/#radial-size. * Layout...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [CSS Shapes: \`closest-corner\` and \`farthest-corner\` radii for \`circle()\` and \`ellipse()\` · Issue #1450 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1450) *(github.com · 2026-09-02T18:28:30)* *(Cites: `https://chromestatus.com/feature/5100672946143232`)*
  > CSS Shapes: `closest-corner` and `farthest-corner` radii for `circle()` and `ellipse()` · Issue #1450 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance set...
- [1040714 - (css-shapes-1) \[META\] Implement CSS Shapes Module Level 1](https://bugzilla.mozilla.org/show_bug.cgi?id=1040714) *(bugzilla.mozilla.org)* *(Cites: `https://drafts.csswg.org/css-shapes-1/#basic-shape-functions`)*
  > URL: http://dev.w3.org/csswg/css-shapes/ → https://<strong>drafts.csswg.org/css-shapes-1</strong>/ Depends on: 1521508 · Depends on: 1786160 · Depends on: 1786161 · Severity: normal → S3 · Depends on: 1832691 · Depends on: 1836847 · Depends...
- [csswg-drafts/css-shapes-2/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-shapes-2/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-shapes-1/#basic-shape-functions`)*
  > &lt;a href=&quot;https://www.w3.org/TR/css-shapes/#basic-shape-functions&quot;&gt;level 1&lt;/a&gt; 	sections.  · &lt;h4 id=&#x27;shape-function&#x27;&gt; The &#x27;&#x27;shape()&#x27;&#x27; Function&lt;/h4&gt;  · 	Add the final · 	&lt;a hr...
- [polygon() round keyword · Issue #4429 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4429) *(github.com · 2026-09-27T22:42:25)* *(Cites: `https://drafts.csswg.org/css-shapes-1/#basic-shape-functions`)*
  > Specification https://<strong>drafts.csswg.org/css-shapes-1</strong>/#funcdef-basic-shape-polygon (the optional round argument) CSSWG resolution: w3c/csswg-drafts#9843 Description The round keyword i...

## 📚 Platform Documentation & Specifications

- [CSS Shapes: \`closest-corner\` and \`farthest-corner\` radii for \`circle()\` and \`ellipse()\` · Issue #1450 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1450) *(github.com)*
- [1040714 - (css-shapes-1) \[META\] Implement CSS Shapes Module Level 1](https://bugzilla.mozilla.org/show_bug.cgi?id=1040714) *(bugzilla.mozilla.org)*
- [csswg-drafts/css-shapes-2/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-shapes-2/Overview.bs) *(github.com)*
- [polygon() round keyword · Issue #4429 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4429) *(github.com)*
- [Basic shapes with shape-outside - CSS - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Shapes/Using_shape-outside) *(developer.mozilla.org)*
- [Basic shapes with shape-outside - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes/Basic_Shapes) *(developer.mozilla.org)*
- [reviews · GitHub Topics · GitHub](https://github.com/topics/reviews?l=css) *(github.com)*
- [javascript · GitHub Topics · GitHub](https://github.com/topics/javascript) *(github.com)*
- [GitHub - ETfrom2100/GoogleReviewWidget: A javascript widget that pulls up to 5 Google reviews via Google Place API · GitHub](https://github.com/ETfrom2100/GoogleReviewWidget) *(github.com)*
- [html-css-javascript · GitHub Topics · GitHub](https://github.com/topics/html-css-javascript) *(github.com)*
- [html-css-javascript-project · GitHub Topics · GitHub](https://github.com/topics/html-css-javascript-project) *(github.com)*
- [GitHub - tuchk4/awesome-css-in-js: Awesome CSS in JS articles / tutorials / videos / benchmarks / comparision · GitHub](https://github.com/tuchk4/awesome-css-in-js) *(github.com)*
- [google-reviews · GitHub Topics · GitHub](https://github.com/topics/google-reviews?l=javascript&o=asc&s=forks) *(github.com)*
- [review · GitHub Topics · GitHub](https://github.com/topics/review?l=css) *(github.com)*
- [\[css-shapes\]\[css-images\] Browsers require either 0 or 2 \`&lt;radial-extent&gt;\` for \`ellipse()\` · Issue #14010 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14010) *(github.com)*
- [\[css-shapes\]\[css-images-3\] \`&lt;radial-size&gt;\` syntax seems incorrect · Issue #10812 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10812) *(github.com)*
- [csswg-drafts/css-shapes-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-shapes-1/Overview.bs) *(github.com)*
- [\[css-shapes\]\[css-masking\] add rect() and/or square() as shapes for clip-path · Issue #6843 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/6843) *(github.com)*
- [\[css-borders-4\] Editorial: clarify "border-aligned corner clip-out path" (pre-clip path, curve intersection, keyword shapes · Issue #14158 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14158) *(github.com)*
- [\[css-shapes-1\] Unclear on "margin-box" dimensions when box model is over-constrained · Issue #3275 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3275) *(github.com)*
- [Experimental features in Firefox - Mozilla \| MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Experimental_features) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 42 result(s) found across 11 planned queries — **34 verified relevant**
  - `"chromestatus.com/feature/5100672946143232" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-shapes-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"closest-corner and farthest-corner radii for circle() and ellipse() basic shapes" API` — *Core feature API query* (2 returned)
  - `"closest-corner and farthest-corner radii for circle() and ellipse() basic shapes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"review.googlesource" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"closest-corner and farthest-corner radii for circle() and ellipse() basic shapes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (1 returned)
  - `"closest-corner and farthest-corner radii for circle() and ellipse() basic shapes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `css clip-path "circle(farthest-corner" OR "circle(closest-corner" OR "ellipse(farthest-corner"` — *Finds real-world CSS code snippets and syntax examples applying closest-corner or farthest-corner keywords inside circle() or ellipse() shape functions.* (0 returned)
  - `"closest-corner" "farthest-corner" CSS shapes circle ellipse guide OR tutorial` — *Discovers developer tutorials, CSS explainers, and blog articles highlighting the new radius keywords for basic shape functions.* (2 returned)
  - `site:github.com/w3c/csswg-drafts "closest-corner" ("circle()" OR "ellipse()")` — *Locates CSS Working Group issues, debates, and resolutions regarding radius syntax resolution and spec consistency for circle() and ellipse().* (6 returned)
  - `("closest-corner" OR "farthest-corner") ("circle()" OR "ellipse()") ("intent to ship" OR "intent to prototype" OR Chrome OR WebKit OR Firefox)` — *Searches for browser vendor announcements, release notes, and intent-to-ship threads tracking implementation across Blink, Gecko, and WebKit.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 7 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 382 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 3 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5100672946143232)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5100672946143232)
- [Specification](https://drafts.csswg.org/css-shapes-1/#basic-shape-functions)
- [Chromium Tracking Bug](https://crbug.com/361617757)
