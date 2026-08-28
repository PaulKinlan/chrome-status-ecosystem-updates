# CSS text-decoration-inset

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

CSS text-decoration-inset controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges. It supports auto, length, and percentage values, including one-value and two-value syntax for setting the start and end offsets. This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements.


sampler: https://static.januschka.com/i-468928416/?asddsaasd
MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset

CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

### Motivation

This change implements CSS text-decoration-inset (CSS Text Decoration Level 4), including percentage values. It gives authors direct control over decoration inset and reduces the need for wrapper/pseudo-element workarounds used to fine-tune underline/overline/line-through rendering.



sampler: https://static.januschka.com/i-468928416/?asddsaasd
MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset

CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

## Ecosystem Status

- **Momentum:** High (380 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** CSS `text-decoration-inset` (CSS Text Decoration Module Level 4) provides fine-grained control over the start and end offsets of underlines, overlines, and line-through decorations. With Chromium enabling it by default in Chrome 154, Firefox supporting it since version 146, and WebKit trialing it in Safari Technology Preview 250, the property is rapidly heading toward cross-engine Baseline status.

### Recommendations
- Actionable Advice: Adopt `text-decoration-inset` immediately as a progressive enhancement to fine-tune typography, link underlines, and strike-throughs. For advanced UI effects like reveal animations or text-decoration masking, wrap rules in `@supports (text-decoration-inset: 0)` while providing basic `text-decoration` fallbacks.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFhXH0SbDX3i8H5Uw83YUgRvgY_fH0Q62nzyXWN3ZnMKnYVzfFEcQ1glfpeBbAaIOcOOMTB0Nuigl8qh98f8HmEad-UPUjs8T_BK2JB0al5GsByu1GX3D-whjcmwE5yiM_ODEbjN6jDgrdZTxtqVUhazaz5b-KfyQDy9t6XSRSTNngkBVk_M4ug) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset is Like Padding for Text Decorations | CSS-Tricks Skip to main content CSS-Tricks Since 2007 typography text-decoration-inset is Like Padding for Text Decorations Daniel Schwarz on Dec 22, 2025 The text-decoration-inset CSS prop...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHXd6D3oi3iVAH0k9EpEJ1E0_1c2PpfH8TgUKdPVXw2YTUAb4nClgs0qiHbqJ73LaQ-_7cmLWnKLN4NxKCvsaP61sf1mm1g2uZqlL5PPnS-WCUPTbgF_2ElVFjHnHw=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of CSS `text-decoration-inset`  Part of the **CSS Text Decoration Module Level 4** specification (previously drafted in part as `text-decoration-trim`), **`text-decoration-inset`** gives web developers fine-grained control over where text
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHwxJv4H9jdI-qF_iGBZQjVZBFV_xwR4qjsGxZQGigHgV1JolHXFaazPQ_7IGUMCRDWrG2RWhx18PMQD10Xx1FD_i6MVpX_EseKm7e9OdA4OMBNalJwoK63o9Y_fvuFChkIPRlCvq56) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [januschka.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEdeBbyTgy9LvzZiooNSk-wuiJ1cYaLBdfhAZ7ulv9Tr2uHi0_UvbVTocA7tx5podILHcaXsX4H-WPzCmjqzE9r8KLXi_TDrXlNILACYFgpcbEopQIswbSygYrWwEp9ZLJRSPIKXUzKWmAYq_Xn_2qS4kW7) *(vertexaisearch.cloud.google.com)*
  > Implementing text-decoration-inset in Blink - Helmut Januschka Implementing text-decoration-inset in Blink ⚡ Chromium 🔧 C++ / Blink / CSS 👤 Helmut Januschka A CSS property can be easy to parse and difficult to paint. Fragmentation is where the inte...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEGAe_VwdMaRhEKP3MhtaJbSItfiJ5HWDAMdZbdKrgMxtfqwzWiequP6bvDC27rOfRdRv7Va1SmddQVkmICNW6RozRGgHJ66_tnr7SggCdA54bZJLFxN6_rClv9Js9V_OceJA==) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFjsqUsPUBYS3Uv4PMWTBM1W8sZ7GgMmCvC47oe7GOY5p8A65nAzpdLw07QuKZc-lOTj-lLBV95xflBqVzVepjvVCggRhF63EbOr8UpjtMHguVvVAgoSZknWZS8RFMyRdp0P6OWgXdAwE2VFSmbPSDVmL7N-Lrf4_oDIN_rwDAWRAKD3T0juPw8lDGffDTjdP6M) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties text-decoration-inset Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日...
- [medianic.co.uk](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGC0aMJztfKnLb_2_gkzjS-StNJYyFQZj0-BJ0pB6letCjN7hpEomoJzJY5ndhrEtZ1OAkkNOfKkJPZetHFtT8lV7FHzr7X2frrIFLj_A19VjPZqyJPvdXipGC-yz8z8MH-y8kkCphI_cqG4ifci9Jqa49PIfxr6KH6t7Yvk40PGH6609rCwcftyUWLZAv0aqw-FJ9veIvGzv1P-w==) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset: The CSS Trick for Perfect Text Alignment Skip to content text-decoration-inset: The CSS Trick for Perfect Text Alignment By Medianic / 29th January 2026 The `text-decoration-inset` property in CSS has emerged as a game-changer ...
- [Re: [blink-dev] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., Helmut Januschka wrote: *Conta...
- [[blink-dev] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17255.html) *(mail-archive.com)*
  > *Contact emails* [email protected] *Specification* https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset
- [Mastering CSS Inset Text: A Comprehensive Guide — tutorialpedia.org](https://www.tutorialpedia.org/blog/css-inset-text) *(tutorialpedia.org)*
  > CSS inset text is achieved by <strong>using the text-shadow property in CSS</strong>. The text-shadow property allows you to add one or more shadows to text. To create an inset text effect, we use two shadows: one with a light color to simulate the h...
- [CSS Text Decoration](https://www.w3schools.com/css/css_text_decoration.asp) *(w3schools.com)*
  > <strong>The CSS text-decoration property is used to control the appearance of decorative lines on text</strong>.
- [CSS Text Decoration : A Step By Step Guide | Career Karma](https://careerkarma.com/blog/css-text-decoration) *(careerkarma.com · 2023-12-01T10:42:21)*
  > The CSS text-decoration property, and its associated properties, allow you to define the decoration used by a block of text on a web page. This tutorial discussed, with reference to examples, how to use the text-decoration property and its associated...
- [CSS text-decoration property](https://www.w3schools.com/cssref/pr_text_text-decoration.php) *(w3schools.com)*
  > The text-decoration property specifies the decoration added to text, and is a shorthand property for:
- [CSS Tutorial For Beginners 29 - Text Decoration - YouTube](https://www.youtube.com/watch?v=dm54To0EOpw) *(youtube.com · 2015-06-23T18:16:53)*
  > Hey everyone.. Today, in this CSS tutorial, we&#x27;re gonna take a look at the text-decoration CSS property. Text decoration is most commonly used on links (to u...
- [CSS Text Decoration (With Examples)](https://www.programiz.com/css/text-decoration) *(programiz.com)*
  > The commonly used values for text-decoration are <strong>underline, overline, line-through, inherit, and none</strong>. For example, ... &lt;!DOCTYPE html&gt; &lt;html lang=&quot;en&quot;&gt; &lt;head&gt; &lt;meta charset=&quot;UTF-8&quot; /&gt; &lt;...
- [CSS Text Decoration](https://w3schools.w3schoolsapp.com/css/css_text_decoration.html) *(w3schools.w3schoolsapp.com)*
  > CSS Reference CSS Selectors CSS Functions CSS Reference Aural CSS Web Safe Fonts CSS Animatable CSS Units CSS PX-EM Converter CSS Colors CSS Color Values CSS Default Values CSS Browser Support ... <strong>The text-decoration property is used to set o...
- [Cool inset Text Effect with CSS3 Text-Shadow – HTML5, CSS3, JQuery Tips & Tricks](https://dhirajkumarsingh.wordpress.com/2013/01/20/cool-inset-text-effect-with-css3-text-shadow) *(dhirajkumarsingh.wordpress.com · 2013-09-08T17:04:46)*
  > The problem is that the browser default CSS is to make text black. So, now we simply use color to make the text transparent. .insetText { font-family: Lucida Grande; background-color: #666666; -webkit-background-clip: text; -moz-background-clip: text...
- [Display your PWA / website fullscreen - DEV Community](https://dev.to/oncode/display-your-pwa-website-fullscreen-4776) *(dev.to · 2021-02-11T00:49:15)*
  > Since we can display content underneath the status bar now, we&#x27;ll have to make sure that the white text will always be readable (e.g. with a decorative shadow or ensuring dark background colors) and that there will be no interactive elements und...
- [Avoid notches in your PWA with just CSS - DEV Community](https://dev.to/marionauta/avoid-notches-in-your-pwa-with-just-css-al7) *(dev.to · 2019-10-27T13:37:30)*
  > For browsers that do support them, we want the bottom padding to be equal to safe-area-inset-bottom, and fall back to 0 if the variable isn&#x27;t set. Similarly, there are also variables for the top, left and right screen edges. ... Thanks for the q...
- [text-decoration | CSS-Tricks](https://css-tricks.com/almanac/properties/t/text-decoration) *(css-tricks.com · 2021-08-02T16:54:53)*
  > That situation looks to be changing slowly. Safari 8 (in the Yosemite developer preview) now has partial support for it: the double and wavy options render (the latter is ugly, though), and the text-decoration-color property is supported as well.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Re: [blink-dev] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., Helmut Januschka wro...
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > Shortname: css-text-decor · Level: 4 · Status: ED · Work Status: Exploring · Group: csswg · ED: https://<strong>drafts.csswg.org/css-text-decor-4</strong>/ TR: https://www.w3.org/TR/css-text-decor-4/ Previous Version: https://www.w3.org/TR/...
- [[css-text-decor] [css-pseudo] default ‘text-decoration-color’ of ‘spelling-error’ and ‘grammar-error’ · Issue #7522 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7522) *(github.com · 2022-07-21T10:15:16)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > https://<strong>drafts.csswg.org/css-text-decor-4</strong>/#text-decoration-line-property Since spelling-error and grammar-error decorations are entirely UA-defined, the UA may disregard the other sub-properties of text-decoration, as well ...
- [[css-text-decor] text-decoration-width claims to be a sub-property of text-decoration, but text-decoration disagrees. · Issue #3993 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3993) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > https://<strong>drafts.csswg.org/css-text-decor-4</strong>/#text-decoration-width-property says (emphasis mine): This property, which is also a sub-property of the text-decoration shorthand, sets the stroke thickness of underlines, overline...
- [[css-lists][css-pseudo] Allow text decoration properties on ::marker · Issue #12822 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12822) *(github.com · 2025-09-18T00:15:38)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > I think https://drafts.csswg.org/css-lists-3/#marker-properties should allow all properties from https://<strong>drafts.csswg.org/css-text-decor-4</strong>/. Non-inherited properties Currently, these properties have no effect on ::marker. I...
- [[css-text-decor] text-decoration level 4 clarification on text-underline-offset positive/negative lengths · Issue #4021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4021) *(github.com · 2019-06-07T21:25:25)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > [css-text-decor] text-decoration ...csswg.org/css-text-decor-4/#underline-offset, it says that &quot;<strong>Positive lengths represent inward distances; negative lengths outward</strong>&quot;....
- [[css-text-decor] Minimum width for unskipped lines? · Issue #1288 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1288) *(github.com · 2017-04-24T17:51:28)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > 1.4. Text Decoration Line Continuity: the text-decoration-skip property https://<strong>drafts.csswg.org/css-text-decor-4</strong>/#text-decoration-skip-property In the Arabic layout task force, we&#x27;re beginning to see evidence that too...
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3) *(w3.org)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > https://<strong>drafts.csswg.org/css-text-decor-4</strong>/#valdef-text-decoration-style-wavyReferenced in: 2.2. Text Decoration Style: the text-decoration-style property · https://www.w3.org/TR/css-values-4/#mult-commaReferenced in: 4. Tex...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)*
- [[css-text-decor] [css-pseudo] default ‘text-decoration-color’ of ‘spelling-error’ and ‘grammar-error’ · Issue #7522 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7522) *(github.com)*
- [[css-text-decor] text-decoration-width claims to be a sub-property of text-decoration, but text-decoration disagrees. · Issue #3993 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3993) *(github.com)*
- [[css-lists][css-pseudo] Allow text decoration properties on ::marker · Issue #12822 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12822) *(github.com)*
- [[css-text-decor] text-decoration level 4 clarification on text-underline-offset positive/negative lengths · Issue #4021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4021) *(github.com)*
- [[css-text-decor] Minimum width for unskipped lines? · Issue #1288 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1288) *(github.com)*
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3) *(w3.org)*
- [static - JavaScript - MDN Web Docs - Mozilla](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes/static) *(developer.mozilla.org)*
- [CSS - Web APIs - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/CSS) *(developer.mozilla.org)*
- [MDN Web Docs](https://developer.mozilla.org/en-US) *(developer.mozilla.org)*
- [CSS: supports() static method - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/CSS/supports_static) *(developer.mozilla.org)*
- [静的初期化ブロック - JavaScript - MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) *(developer.mozilla.org)*
- [Web development tutorials - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/MDN/Tutorials) *(developer.mozilla.org)*
- [JavaScript: Adding interactivity - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) *(developer.mozilla.org)*
- [Your first website - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website) *(developer.mozilla.org)*
- [text-decoration-inset CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [CSS text decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Text_decoration) *(developer.mozilla.org)*
- [text-decoration-skip CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-skip) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 32 result(s) found across 6 planned queries — **28 verified relevant**
  - `"chromestatus.com/feature/5178263526834176" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"CSS text-decoration-inset" API` — *Core feature API query* (1 returned)
  - `"CSS text-decoration-inset" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"static.januschka" OR "developer.mozilla" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS text-decoration-inset" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 7 result(s) found — **7 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found — **20 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 2 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 40 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5178263526834176)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5178263526834176)
- [Specification](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/468928416)
