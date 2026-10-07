# SVG textPath side attribute

> **Report Week:** 2026-W40 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Allows authors to choose which side of a path SVG text follows using the side attribute on the textPath element. Setting side="right" effectively reverses the path direction for text layout, making it easy to place text inside or outside a circular path without duplicating or manually reversing the path data.

### Motivation

Authors placing text along a path have no way to flip which side of the path the text appears on. The side attribute lets authors write side="right" to place text on the opposite side of the path, without duplicating or reversing the path data. This helps label both the inside and outside of a shape, such as a circular path, with different text on each side.

## Ecosystem Status

- **Momentum:** High (305 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** The SVG &lt;textPath&gt; \`side\` attribute from the SVG 2 specification is finally securing broad cross-engine implementation, with Chromium enabling it by default in Chrome 156. It solves an enduring vector typography limitation by allowing authors to position text along either side of a path (e.g., inside vs. outside circular badges) without manually cloning and reversing path geometry. With Mozilla already shipping support in Gecko and WebKit actively implementing the attribute, cross-engine interoperability is close to completion.

### Recommendations
- Actionable Advice: Adopt the \`side\` attribute progressively, using feature detection like \`'side' in SVGTextPathElement.prototype\` to safely toggle between single paths and legacy reversed paths. If full backward compatibility across older Safari or legacy browsers is required, retain duplicate opposite-direction path definitions until WebKit's stable release reaches general availability.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Amelia Bellamy-Royds on Twitter: "Just discovering #SVG Text? "SVG Text Layout" is now available from @OReillyMedia. Read the outline & explore demos: https://t.co/Ppgf3kmUGf"" (0 points, 0 comments).

## Standards Positions

- **W3C TAG:** [FYI: SVG textPath side attribute](https://github.com/w3ctag/design-reviews/issues/1279) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Amelia Bellamy-Royds on Twitter: "Just discovering #SVG Text? "SVG Text Layout" is now available from @OReillyMedia. Read the outline & explore demos: https://t.co/Ppgf3kmUGf"](https://twitter.com/ameliasbrain/status/659591903839543297) — *by @ameliasbrain, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [leaflet-textpath](https://www.npmjs.com/package/leaflet-textpath) `v1.3.0` — Shows a text (or a pattern) along a Polyline
- [react-leaflet-textpath](https://www.npmjs.com/package/react-leaflet-textpath) `v2.1.1` — React wrapper of leaflet-textpath

## 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEzBBrO6FXa0L3_aG08No_ETZebKHVPNiQ80mjiiHV8C_EKJ8GfL3kViXRlt1dyn_DljJvS2VqPsXnutY22_wrJuxw9XVWDmbrFrprqeihCMr_J_DPHJ4x0LpA2Tm6K9bk8aFe44_Omg3OD4xlfBO3qLo0kex1jHx-XlvliZX99) *(vertexaisearch.cloud.google.com)*
  > side - SVG | MDN Skip to main content Skip to search Toggle sidebar Web SVG Reference Attributes side Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) 日本語 side Limited availability This feature is not Baselin...
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH2cEdHU4ScmlDoBPnuLtnD6jxyLGFWTvvXfp_vLU7ym82jbkrPliMfQSIgDqG7k_xOsANxrmOymQsIIibG1pyyz5UPardX49cbS93iSHEILcmMoEzDBRWuwITpUOPSIzPI9fBnf47Kfll0inirWriN18bVk28P73Ds2KdNp7dxNUj3jyo=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEqc1DfE4UWl4C8CKeU7ebG1dLME2qRbrcjJUDI9PnK5XizJUgUGp9vRJE_3WSdpZwCPCCJrL5N3_94DEGBnQxkVVHuAbD7LZc4jZi_OuGwsQLhWBW0QTIKkJHsO2MIODGNsZj30aMzpLC9JC6yUC1CK1ABZFVMnH0V0tbonUk=) *(vertexaisearch.cloud.google.com)*
  > SVGTextPathElement: side property - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs SVGTextPathElement side Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) SVGTextPathElement: ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE5l8dbDmJVLmdNe5_I6G5YCKcncTJRgT0Vb37ijmiizMy2eivHHjk34nOtyLcQPllsf1RERNlHtRay3REM0SJ5iLKJqcLbZILPDpnZkUZZ71QZaHQFPBis_TSZDEu5jRRCI4z3-fHte2M2KI38xwhv-6m38yfF8ZZXK3rP1tmksxx48lUBQN3iej46016dQOjQEpYxCZJwsdYkniQ=) *(vertexaisearch.cloud.google.com)*
  > content/files/en-us/web/svg/reference/attribute/side/index.md at main · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFEzadWSmr8Kt7U-psLBUwhJ8qex747vMaLRaWiEPYpHjnkBf7NXV2B2mjSGPCiL8o-E-Qlt8Coji-4ykDv07PlXm4oUt2OB4iMqqWA6vlh0Yzx3WrmLiW8UvTsKxRiPV4GJUOuGee3ZFpxpl8gsjqakrqICyjI-62V) *(vertexaisearch.cloud.google.com)*
  > SVGTextPathElement - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs SVGTextPathElement Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) 日本語 SVGTextPathElement Baseline Widely a...
- [\[blink-dev\] Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17486.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: SVG textPath side attribute Skip to site navigation (Press enter) [blink-dev] Intent to Ship: SVG textPath side attribute Chromestatus Wed, 16 Sep 2026 18:44:48 -0700 Contact emails [email&#160;protected] Specification htt...
- [\[blink-dev\] Re: Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17506.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: SVG textPath side attribute Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: SVG textPath side attribute Alex Russell Mon, 21 Sep 2026 11:42:26 -0700 LGTM1 with a nit that this is a case where we p...
- [SVG TextPath](https://www.w3schools.com/graphics/svg_textpath.asp) *(w3schools.com)*
  > <strong>The &lt;textPath&gt; element is used to render a text along the shape of a path</strong>. ... &lt;svg height=&quot;200&quot; width=&quot;350&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt; &lt;path id=&quot;lineAC&quot; d=&quot;M 30 18...
- [SVG Basics Tutorials - textPath, Text Fill and Stroking](https://www.svgbasics.com/text2.html) *(svgbasics.com)*
  > &lt;?xml version=&quot;1.0&quot; standalone=&quot;no&quot;?&gt; &lt;!DOCTYPE svg PUBLIC &quot;-//W3C//DTD SVG 1.1//EN&quot; &quot;http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd&quot;&gt; &lt;svg viewBox = &quot;0 0 500 300&quot; version = &quot;1.1...
- [SVG textpath element](https://jenkov.com/tutorials/svg/textpath-element.html) *(jenkov.com)*
  > This id attribute value is referenced from the xlink:href attribute of the &lt;textpath&gt; element. If the length of the path is shorter than the length of the text, then only the part of the text that is within the extend of the path is drawn. You ...
- [How to Add Text to SVG Images - SVG Tutorial](https://svg-tutorial.com/svg/text) *(svg-tutorial.com · 2023-12-01T08:00:00)*
  > We can use paths to render text along an invisible path. We <strong>define a path in the definitions section and use it in a textPath element to make the text go around the circle</strong>.
- [SVG Elements and Attributes Reference — Using SVG with CSS3 and HTML5](https://oreillymedia.github.io/Using_SVG/guide/markup.html) *(oreillymedia.github.io)*
  > In SVG 1, only valid on &lt;g&gt;, &lt;a&gt;, shape elements, and &lt;text&gt;. Ignored on inline text-formatting elements (&lt;tspan&gt;, &lt;textPath&gt;, and &lt;a&gt; within text).
- [SVG Text and tspan](https://www.w3schools.com/graphics/svg_text.asp) *(w3schools.com)*
  > The &lt;text&gt; element has seven basic attributes to position and rotate the text: ... &lt;svg height=&quot;30&quot; width=&quot;200&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt; &lt;text x=&quot;5&quot; y=&quot;15&quot; fill=&quot;red&quo...
- [A Deep Dive Into SVG Path Commands - Nan.fyi](https://www.nan.fyi/svg-paths) *(nan.fyi)*
  > This guide is an interactive deep dive into the d attribute, otherwise known as the path data. It&#x27;s the post I wish I had when I first learned about SVG paths!
- [Best Web Development posts — April 2026 \| daily.dev](https://daily.dev/tags/webdev/best-of/2026/04) *(daily.dev)*
  > Highlights include the contrast-color() CSS function reaching Baseline (returns black or white for maximum contrast against a given color), scroll-driven animation range properties becoming Baseline, the ariaNotify() method for screen reader announce...
- [progressive web apps - PWA, SVG, and the &lt;object&gt; element - Stack Overflow](https://stackoverflow.com/questions/75737910/pwa-svg-and-the-object-element) *(stackoverflow.com · 2023-03-14T00:00:00)*
  > Stack Data Licensing Get access to top-class technical expertise with trusted &amp; attributed content. Stack Ads Connect your brand to the world’s most trusted technologist communities. Releases Keep up-to-date on features we add to Stack Overflow a...
- [SVG Assets in PWAs - DockYard](https://dockyard.com/blog/2017/08/01/svg-assets-in-pwas) *(dockyard.com · 2017-08-01T08:00:00)*
  > <strong>One optimized SVG file was pulled down from the server and individual SVGs would be linkable with IDs inside that one SVG file</strong>. This was before PWA’s cached your assets per page.
- [d3.js - How to set \`side: right\` of \`textPath\` in Chrome? - Stack Overflow](https://stackoverflow.com/questions/57949804/how-to-set-side-right-of-textpath-in-chrome) *(stackoverflow.com · 2019-09-16T00:00:00)*
  > &lt;svg viewBox=&quot;0 0 400 400&quot; &gt; &lt;!--MDN--&gt; &lt;text&gt; &lt;textPath href=&quot;#circle1&quot; side=&quot;left&quot;&gt;Side left&lt;/textPath&gt; &lt;/text&gt; &lt;text&gt; &lt;textPath href=&quot;#circle2&quot; side=&quot;right&q...
- [\[blink-dev\] Re: Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17507.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; *TAG review status* &gt;&gt; Not applicable &gt;&gt; &gt;&gt; *Goals for experimentation* &gt;&gt; None &gt;&gt; &gt;&gt; *Risks* &gt;&gt; &gt;&gt; &gt;&gt; *Interoperability and Compatibility* &gt;&gt; Firefox already shipped this ...
- [Re: \[blink-dev\] Re: Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17524.html) *(mail-archive.com)*
  > &gt; &gt;&gt;&gt; &gt; &gt;&gt;&gt; TAG review status Not applicable &gt; &gt;&gt;&gt; &gt; &gt;&gt;&gt; Goals for experimentation None &gt; &gt;&gt;&gt; &gt; &gt;&gt;&gt; Risks &gt; &gt;&gt;&gt; &gt; &gt;&gt;&gt; Interoperability and Compatibility F...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [FYI: SVG textPath side attribute · Issue #1279 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1279) *(github.com · 2026-09-22T08:54:28)* *(Cites: `https://chromestatus.com/feature/5422782593761280`)*
  > FYI: SVG textPath side attribute · Issue #1279 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ref...
- [\[blink-dev\] Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17486.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5422782593761280`)*
  > [blink-dev] Intent to Ship: SVG textPath side attribute Skip to site navigation (Press enter) [blink-dev] Intent to Ship: SVG textPath side attribute Chromestatus Wed, 16 Sep 2026 18:44:48 -0700 Contact emails [email&#160;protected] Specifi...

## 📚 Platform Documentation & Specifications

- [FYI: SVG textPath side attribute · Issue #1279 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1279) *(github.com)*
- [\[SVG2\] Implement the side attribute for SVG &lt;textPath&gt; element by Ahmad-S792 · Pull Request #66616 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/66616) *(github.com)*
- [&lt;textPath&gt; - SVG - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/textPath) *(developer.mozilla.org)*
- [&lt;textPath&gt; - SVG \| MDN](https://developer.mozilla.org/en/docs/Web/SVG/Element/textPath) *(developer.mozilla.org)*
- [side - SVG \| MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/side) *(developer.mozilla.org)*
- [side - SVG \| MDN - Mozilla](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/side) *(developer.mozilla.org)*
- [SVGTextPathElement: side property](https://developer.mozilla.org/en-US/docs/Web/API/SVGTextPathElement/side) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 10 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/5422782593761280" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"w3c.github.io/svgwg/svg2-draft/text.html" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"SVG textPath side attribute" API` — *Core feature API query* (3 returned)
  - `"SVG textPath side attribute" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"SVG textPath side attribute" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"SVG textPath side attribute" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `svg "textPath" ("side=right" OR "side=\"right\"") (tutorial OR guide OR "flip text")` — *Find practical developer guides and tutorials demonstrating how to position or flip text along an SVG path without manual path reversal.* (8 returned)
  - `"<textPath" "side=" ("left" OR "right") (site:codepen.io OR site:github.com)` — *Search for live code examples and SVG markup patterns utilizing the side attribute on textPath elements in repositories and sandbox demos.* (8 returned)
  - `"textPath" "side" ("Intent to Ship" OR "Chrome Platform Status" OR "WebKit" OR "Bugzilla")` — *Identify engine tracking bugs, standards discussions, and browser shipping notices across Chromium, Gecko, and WebKit.* (4 returned)
  - `svg ("text on a path" OR "textPath") ("flip" OR "upside down" OR "inside out") "side" attribute` — *Uncover developer discussions, Stack Overflow questions, and community sentiment regarding solving upside-down or reversed path text using the side attribute.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 5 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 5 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **2 verified relevant**
- **Web Platform Tests (wpt.fyi):** 5994 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5422782593761280)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5422782593761280)
- [Specification](https://w3c.github.io/svgwg/svg2-draft/text.html#TextPathElementSideAttribute)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40362379)
