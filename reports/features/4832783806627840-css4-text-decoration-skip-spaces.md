# CSS4 text-decoration-skip-spaces

> **Report Week:** 2026-W40 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over whitespace characters. This allows authors to prevent decorations from being drawn under spaces, which is often more visually appealing.

### Motivation

Currently there is no web standard way to control whether text decorations (underlines, overlines, line-throughs) appear over whitespace characters. Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The `text-decoration-skip-spaces` property fills this gap, allowing precise control over decoration rendering around whitespace. This is useful for navigation menus, links, and any text where the decoration should visually attach only to non-space characters.

## Ecosystem Status

- **Momentum:** High (385 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** CSS4 text-decoration-skip-spaces is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGnQjqEEc9LUTJdc9EF0SsA0-p--Vs4i-8-w9US7wYNx6jAqeu7eNFyZNgakrO0Zzf0UQhfFgjPlQkfsJU-aszcIBX6uePDn8o9SvofwZuE7_dTZRrAY-L8HH-Z3WM=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **`text-decoration-skip-spaces`** CSS property—part of the **CSS Text Decoration Module Level 4**—controls whether text decoration lines (such as underlines, overlines, and line-throughs) skip over whitespace characters.   Hi
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG7wPdz6A3pUBAwH2sUpzY-wx_ShoPtJZyS8a8bzKtTt24bfHii5rf0NqkGCPI3keuXVH5zsH25Ge-tcArRkwyRJnhXQrZO8sxKuvkx0X9TZC3W1Z0x82nqlj8_cUXBBVWV15Z8Z9bVC6yjROUzkTFDVBnU1M1j1N8eAp3o5G7yE79cBBD9s3_jiL1B1rpO9D7Amt3a) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **`text-decoration-skip-spaces`** CSS property—part of the **CSS Text Decoration Module Level 4**—controls whether text decoration lines (such as underlines, overlines, and line-throughs) skip over whitespace characters.   Hi
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGAEcE3PCzHiNMYWfvDUIJkyRmvsUXIx3oXRIXTbyP3meDBDHM7nXh1bCZJoHJYu2gHqVS9IMPkoea7YCEIpxMiiGq7Nh9isMApiI885BQsbdiMZiZ0LhIVBfdoWBXfT7S-cHv2) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **`text-decoration-skip-spaces`** CSS property—part of the **CSS Text Decoration Module Level 4**—controls whether text decoration lines (such as underlines, overlines, and line-throughs) skip over whitespace characters.   Hi
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEfXk8pM6m-peJi4T0XKaFWQ4AeG2e0JLG58jVF228rCU1n1Q6QbfNFj5TbAdQeJPsFnLeb71_JavNT3Ohsz22ePsNTEwAFwBL-cdAR2Eeyr4yLPOgxVdb-P8ee9aiWe4U07YabzmoyRhASGQ==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **`text-decoration-skip-spaces`** CSS property—part of the **CSS Text Decoration Module Level 4**—controls whether text decoration lines (such as underlines, overlines, and line-throughs) skip over whitespace characters.   Hi
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF82GAOqd7dPkrgG7aHPkbah22AOQwNI2ZM0GpiieK9UeBzM36aOnyGS87RRaPDzph4XWbCl30Ws-Nxejd_izac4AzgFF61ykE5YOHnNtgIWzFEu071wxKlGvBar2HdaXJdP88VK8eBgbdcjoMbMOuobRyCCEsM) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **`text-decoration-skip-spaces`** CSS property—part of the **CSS Text Decoration Module Level 4**—controls whether text decoration lines (such as underlines, overlines, and line-throughs) skip over whitespace characters.   Hi
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGPBy0vt7R5YOZLyjvY-lZLEDDdj-NHJanZxW7BrZ01XN8MUBXBmNxYPzsHmx0ZnOPRmnQ5tLw8ZZzolcVLiS1uj5_rS8Hq28sjfkjEFW929ErFnRM2yjkX5BgiGAKNYZAY9YObftBZCaVrL5ShSe3M6CAzzsZ20amZHjPrqFwW7ZctrUv09FCpDGrxLcPyR8p4CqM=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **`text-decoration-skip-spaces`** CSS property—part of the **CSS Text Decoration Module Level 4**—controls whether text decoration lines (such as underlines, overlines, and line-throughs) skip over whitespace characters.   Hi
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFECs-cBDCfv-DmXGpWvoKddWfAnLHUBgsFHhcJsm7cCN-o7TWlfyHEoKWtAT5TbGeZFPfd7PQn93xgFYgrlmFHZT-NWoEUi_-NxqUboMbPPxoeFUcXcFoFHAPyYA03DRA8EpMydf166RV39eUtbzyzkOPj1xjROZI=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **`text-decoration-skip-spaces`** CSS property—part of the **CSS Text Decoration Module Level 4**—controls whether text decoration lines (such as underlines, overlines, and line-throughs) skip over whitespace characters.   Hi
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG3CH1Q-j7HWgFy17sy_ajc4oAwQ4jDa_U3PXPhY-S9gQwrj8nLmmJldcs9pOXtGpQMm1hteACYHfvYcdkX0vUM4EqC-THsBtBmH2jLVnjZq3jcqaq4GMg5rRn-rEqXYzQAzHI6WEYCs2yBjnqlbA==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **`text-decoration-skip-spaces`** CSS property—part of the **CSS Text Decoration Module Level 4**—controls whether text decoration lines (such as underlines, overlines, and line-throughs) skip over whitespace characters.   Hi
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEtgqLviV12LbpQBS-R9zo2JEVcm8ML0dn7U3NDj3kUOGxSP9_u9cg2u0KCksdJWyASu7yudMHesaCMOZt_Pv_wJlT7U_Fs8Z0XZHOeTd5fMOBqUFARsAe-UWMD_OBbKF9lxzfUOmEiXUZpHtOhCqimgxrlYUZ2seK9aGagYQ==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **`text-decoration-skip-spaces`** CSS property—part of the **CSS Text Decoration Module Level 4**—controls whether text decoration lines (such as underlines, overlines, and line-throughs) skip over whitespace characters.   Hi
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHlN24nBeB1Hdt2IpJOXRDUlehi8RVhhMADCbNuPTBOL2iDPewHmtiXr7s8gHrvCNbOcAWf4_qBB_k4AuRaygFFN7c3fyWFYKKXofPLIn1AFylar9zI0YArN3-_40zLlCnhfRdeAu6LxgdgzB98zQhnUX6amxa1nYyN-B4b) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **`text-decoration-skip-spaces`** CSS property—part of the **CSS Text Decoration Module Level 4**—controls whether text decoration lines (such as underlines, overlines, and line-throughs) skip over whitespace characters.   Hi
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html) *(mail-archive.com)*
  > We talked about this during the API Owners call today and something that came up was this Issue 6 in the spec: https://drafts.csswg.org/css-text-decor-4/#issue-4229bfce Is your plan to ship with &#x27;none&#x27; as the default, or try &#x27;end&#x27;...
- [\[blink-dev\] Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17140.html) *(mail-archive.com)*
  > Specification https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property Summary The text-decoration-skip-spaces CSS property <strong>controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over w...
- [CSS4 text-decoration-skip-spaces](https://chromestatus.com/feature/4832783806627840) *(chromestatus.com · 2026-04-10T00:00:00)*
  > We cannot provide a description for this page right now
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17377.html) *(mail-archive.com)*
  > Current tests are here &lt;https://wpt.fyi/results/css/css-text-decor?label=master&amp;label=experimental&amp;aligned&amp;q=text-decoration-skip-spaces-001.html or text-decoration-skip-spaces-002.html or text-decoration-skip-spaces-003.html or text-d...
- [Text-Decoration: Complete Guide - Progressive Robot](https://www.progressiverobot.com/2026/05/12/css-text-decoration) *(progressiverobot.com · 2026-05-12T22:37:38)*
  > <strong>With &lt;^&gt;text-decoration-skip&lt;^&gt; we can avoid having the decoration step over parts of the element its applied to</strong>. The possible values are &lt;^&gt;objects&lt;^&gt;, &lt;^&gt;spaces&lt;^&gt;, &lt;^&gt;ink&lt;^&gt;, &lt;^&g...
- [CSS Text Decoration - W3Schools](https://w3schools.dev/css/css_text_decoration.asp) *(w3schools.dev)*
  > W3Schools offers a wide range of services and products for beginners and professionals, helping millions of people everyday to learn and master new skills · Enjoy our free tutorials like millions of other internet users since 1999
- [CSS Text Decoration](https://www.w3schools.com/css/css_text_decoration.asp) *(w3schools.com)*
  > <strong>The CSS text-decoration property is used to control the appearance of decorative lines on text</strong>.
- [CSS text-decoration property](https://www.w3schools.com/cssref/pr_text_text-decoration.php) *(w3schools.com)*
  > <strong>Set different text decorations for , , and elements</strong>.
- [CSS Text Decoration : A Step By Step Guide \| Career Karma](https://careerkarma.com/blog/css-text-decoration) *(careerkarma.com · 2023-12-01T10:42:21)*
  > The CSS text-decoration property allows developers to add underlines, overlines, and strike-through lines to text. On Career Karma, learn how to use the text-decoration property.
- [CSS Text Indentation and Spacing - W3Schools](https://w3schools.dev/css/css_text_spacing.asp) *(w3schools.dev)*
  > Text Color Text Alignment Text Decoration Text Transformation Text Spacing Text Shadow CSS Fonts
- [text-decoration-skip \| CSS-Tricks](https://css-tricks.com/almanac/properties/t/text-decoration-skip) *(css-tricks.com · 2021-08-02T17:00:34)*
  > none: decoration line crosses everything, including inline objects that would normally be skipped. spaces: <strong>decoration line skips spaces, word-separator characters, and any spaces set with letter-spacing or word-spacing</strong>.
- [css - Can i exclude spaces from text decoration? - Stack Overflow](https://stackoverflow.com/questions/72692992/can-i-exclude-spaces-from-text-decoration) *(stackoverflow.com)*
  > I suggest doing this with JavaScript, by <strong>splitting the text you are interested in at the space character into separate span elements</strong>. You can then apply your line-through decoration to the span elements, which will not include the sp...
- [text decoration needs to skip spaces at start/end of lines \[40862777\] - Chromium](https://issues.chromium.org/issues/40862777) *(issues.chromium.org)*
  > <strong>https://drafts.csswg.org/css-text-decor-3/#line-decoration</strong> (for the default behavior when no particular property tries to adjust the skipping), spaces at the start and end of the line are supposed to be skipped by text decorations su...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17373.html) *(mail-archive.com)*
  > Current tests are here &gt;&gt;&gt; &lt;https://wpt.fyi/results/css/css-text-decor?label=master&amp;label=experimental&amp;aligned&amp;q=text-decoration-skip-spaces-001.html or text-decoration-skip-spaces-002.html or text-decoration-skip-spaces-003.h...
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17185.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces · Perry Mon, 17 Aug 2026 08:45:32 -0700 · Thanks Dan. My plan is to ship with &#x27;none&#x27; as the default, because I think such compatibility...
- [\[blink-dev\] Intent to Prototype: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg16310.html) *(mail-archive.com)*
  > False Tracking bug https://issues.chromium.org/issues/40862777 Estimated milestones No milestones specified Link to entry on the Chrome Platform Status https://chromestatus.com/feature/4832783806627840?gate=4671156134215680 This intent message was ge...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/4832783806627840`)*
  > <strong>CSS text-decoration-skip-spaces</strong>, https://chromestatus.com/feature/4832783806627840 · css.properties.text-decoration-skip-spaces · css.properties.text-decoration-skip-spaces.all · css.properties.text-decoration-skip-spaces.e...
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com · 2026-08-21T10:28:22)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > Specification: https://drafts.csswg.org/css-text-decor-4<strong>/#text-decoration-skip-spaces-property</strong> Feature: text-decoration-skip-spaces (CSS Text Decoration Level 4) Summary text-decoration-skip-spaces (CSS Text Decoration Leve...
- [\[css-text-decor\] text-decoration-width claims to be a sub-property of text-decoration, but text-decoration disagrees. · Issue #3993 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3993) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > https://<strong>drafts.csswg.org/css-text-decor-4</strong>/#text-decoration-width-property says (emphasis mine): This property, which is also a sub-property of the text-decoration shorthand, sets the stroke thickness of underlines, overline...
- [\[css-text-decor\] text-decoration level 4 clarification on text-underline-offset positive/negative lengths · Issue #4021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4021) *(github.com · 2019-06-07T21:25:25)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > Closed Accepted by CSSWG ...csswg.org/css-text-decor-4/#underline-offset, it says that &quot;<strong>Positive lengths represent inward distances; negative lengths outward</strong>&quot;....
- [\[css-lists\]\[css-pseudo\] Allow text decoration properties on ::marker · Issue #12822 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12822) *(github.com · 2025-09-18T00:15:38)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > [css-lists][css-pseudo] Allow text decoration properties on ::marker#12822 · Copy link · Labels · css-lists-3Current WorkCurrent Workcss-pseudo-4Current WorkCurrent Work · Loirooriol · opened · on Sep 18, 2025 · Issue body actions · I think...
- [\[css-text-decor\] Minimum width for unskipped lines? · Issue #1288 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1288) *(github.com · 2017-04-24T17:51:28)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > 1.4. Text Decoration Line Continuity: the text-decoration-skip property https://<strong>drafts.csswg.org/css-text-decor-4</strong>/#text-decoration-skip-property In the Arabic layout task force, we&#x27;re beginning to ...
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3) *(w3.org)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > https://<strong>drafts.csswg.org/css-text-decor-4</strong>/#valdef-text-decoration-style-wavyReferenced in: 2.2. Text Decoration Style: the text-decoration-style property · https://www.w3.org/TR/css-values-4/#mult-commaReferenced in: 4. Tex...

## 📚 Platform Documentation & Specifications

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com)*
- [\[css-text-decor\] text-decoration-width claims to be a sub-property of text-decoration, but text-decoration disagrees. · Issue #3993 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3993) *(github.com)*
- [\[css-text-decor\] text-decoration level 4 clarification on text-underline-offset positive/negative lengths · Issue #4021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4021) *(github.com)*
- [\[css-lists\]\[css-pseudo\] Allow text decoration properties on ::marker · Issue #12822 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12822) *(github.com)*
- [\[css-text-decor\] Minimum width for unskipped lines? · Issue #1288 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1288) *(github.com)*
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3) *(w3.org)*
- [text-decoration-skip CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-skip) *(developer.mozilla.org)*
- [\[css-text-decor-4\] Variants of text-decoration-skip-spaces:end behavior, and initial value · Issue #4653 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4653) *(github.com)*
- [\[css-text-decor-4\] Don't skip visible word-separators when skipping only leading/trailing spaces · Issue #5249 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/5249) *(github.com)*
- [\[css-text-decor\] selective toggling in the text-decoration-skip property. · Issue #843 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/843) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 11 planned queries — **27 verified relevant**
  - `"chromestatus.com/feature/4832783806627840" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS4 text-decoration-skip-spaces" API` — *Core feature API query* (4 returned)
  - `"CSS4 text-decoration-skip-spaces" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"text-decoration-skip-spaces" OR "line-throughs" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS4 text-decoration-skip-spaces" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (6 returned)
  - `"CSS4 text-decoration-skip-spaces" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"text-decoration-skip-spaces" CSS (guide OR tutorial OR "how to")` — *Finds developer guides, blog write-ups, and practical styling tutorials covering the text-decoration-skip-spaces CSS property.* (0 returned)
  - `"text-decoration-skip-spaces" (none OR all OR auto) CSS example` — *Discovers CSS syntax breakdowns, property value specifications, and code snippets demonstrating underline whitespace skipping.* (8 returned)
  - `"text-decoration-skip-spaces" ("intent to prototype" OR "intent to ship" OR chromestatus OR caniuse)` — *Tracks browser vendor implementation status, engine support milestones across Chromium, WebKit, and Gecko, and standards adoption.* (5 returned)
  - `site:github.com/w3c/csswg-drafts "text-decoration-skip-spaces"` — *Surfaces specification evolution discussions, edge cases, and design feedback within the W3C CSS Working Group repository.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 365 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4832783806627840)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4832783806627840)
- [Specification](https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40862777)
