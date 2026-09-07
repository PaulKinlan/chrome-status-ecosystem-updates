# Relative Alpha Colors (CSS Color 5 alpha() function)

> **Report Week:** 2026-W37 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Relative alpha colors refer to an origin color, and only change the alpha channel. The meaning of alpha channels is defined in CSS Color 4 § 4.2 Representing Transparency in Colors: the <alpha-value> syntax.

### Motivation

Relative alpha colors provide a direct CSS way to derive a translucent version of an existing color without rewriting its color channels. Authors currently need to duplicate component values or create separate precomputed tokens when they want “the same color, different opacity.” The CSS Color 5 alpha() function preserves the original color components and only changes alpha, which reduces authoring overhead and makes color tokens easier to reuse and maintain.

## Ecosystem Status

- **Momentum:** High (310 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Relative Alpha Colors (CSS Color 5 alpha() function) is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @yisibl: "@nt1m Thanks!..."
- Standards Activity (W3C TAG): Latest discussion from @mnot: "Discussed in London F2F; is done...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Relative Alpha Colors](https://github.com/WebKit/standards-positions/issues/657) [open]
- **Mozilla:** [Fixing link to Platform Status](https://github.com/mozilla/standards-positions/pull/5) [closed]
- **W3C TAG:** [Web Audio review/feedback](https://github.com/w3ctag/design-reviews/issues/5) [closed]

## Packages & Polyfills

- [@csstools/postcss-alpha-function](https://www.npmjs.com/package/@csstools/postcss-alpha-function) `v2.0.12` — Use the alpha() function in CSS
- [postcss-color-hex-alpha](https://www.npmjs.com/package/postcss-color-hex-alpha) `v11.0.1` — Use 4 & 8 character hex color notation in CSS
- [@asamuzakjp/css-color](https://www.npmjs.com/package/@asamuzakjp/css-color) `v7.0.0` — CSS color - Resolve and convert CSS colors.

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGXe9RjS5m0WmcrXRTQNtNI9K0nYfLoT1saH0gmm-RWbDwPL09bRXcs6oMgKEfD9DfL77GgjMyjFPR19tZbrICx3D2mMRiA1WVbvt2y2F9QKuybCsP-AhQ=) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Relative Alpha Colors (`alpha()` function)  In the **CSS Color Module Level 5** specification, **Relative Alpha Colors** introduces a dedicated `alpha()` function designed to adjust the opacity/transparency of an origin color without ha
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGFHnix5SBtRmZDGZoPtxj5MPIvfyJv_8Xv_Qg6wQZaRxTa3gyEcN6p9CtktyouYibCt8Uz-XzH2oCBHcfiVDMASU3ceuUiDZdAhd-xURxmNtEX4QXDzfGaXifzfGH_KjzJWIiQ-Oxgk_p2H0D9NRUhJTO_XI7KAqKkYtS2ssTktBgmvdYdE6gy) *(vertexaisearch.cloud.google.com)*
  > alpha() CSS function - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Values <color> alpha() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français alpha() CSS function Limi...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE6pMDy7MycW5-hRM7WFS82zpqScpiVwSssg2qnayMrC1YSrvRqao_RsSECUe0ISL2BtQdqgdtw4hahC6sAXmzwtmykblBVRyYxJQzhA3fLB5_lBJXELQ-2d8zWB2DX7WsSUXEiS4E=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEU5JK3m8WD2KtUhEJu0nWvXL7bgGXTzG9f89Zdvl_T78_YDgoCL3rfduaiTvHjimTInmiThzo4o6aA5C53u6uZN7bEIUEsAGdtXqrQMsafBzZsaBPMKSiBRgDshkVRuteE) *(vertexaisearch.cloud.google.com)*
  > Color Alpha Anywhere | CSS-Tricks Skip to main content CSS-Tricks Since 2007 alpha color hsl Color Alpha Anywhere Chris Coyier on Nov 15, 2021 In my &#8220;Different Degrees of Custom Property Usage&#8221; article, I noted a situation about colors an...
- [jim-nielsen.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEw4asA3ubsq2xwYhvmsa60_gADWoznPmWPM6-DeXGzLdUnZeqjs4ePzxFq5so5H_C6Jn8PJA_0KOSP4u9x3KKfOZwucR4eBuX-EGdQzYgWjYo0fWtdED9vGNtSYMUDEtx82XUQ8unPsqDJIw==) *(vertexaisearch.cloud.google.com)*
  > Dynamic Color Manipulation with CSS Relative Colors - Jim Nielsen’s Blog content where applicable --> Dynamic Color Manipulation with CSS Relative Colors 2021-11-18 #css I was reading Dave’s post “Alpha Painlet” when I first learned about CSS relativ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHwfPRp4XkJvQt-dL6q6nVsTCwsvTgMMY8xClU3r6-PpB00S5JTidee81HWY9RO_KXZG9KMVzohvy0FniFmmSO0Tef9GnGoDn7pUWN1IgcQ8gxHr4h_ZovybpYyTEeXFS2eSs1KuqePkoaN9J5CZhicMip8hPXszJj1y_IWrns9jXVDUgZ4_kxckQ==) *(vertexaisearch.cloud.google.com)*
  > Using relative colors - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Guides Colors Using relative colors Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 Using relative co...
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFnLWZmnlWUd3pcrms6Whn2-v8zOMChUXMW0hZ-3lVUBXrjVUebZLkoyjIS4NeZuQRAnum7URnREWnF-2E86w3wPuwHjmMFyRM2ubd9afBps5nf66yxFtEPyn99ndxi8mKVpsN54EswNfWFOtao0jTNtnDElblq4IGwjIlWsVmnpd3yP_3Y_q0PkSNRht4bKN7YJxw2Ou2Y-KI=) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Relative Alpha Colors (`alpha()` function)  In the **CSS Color Module Level 5** specification, **Relative Alpha Colors** introduces a dedicated `alpha()` function designed to adjust the opacity/transparency of an origin color without ha
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHl-fjAj9Z94NHw_Tk-vnhTzTW4cUfTXmh6ULD0Qg29fv7t9SziizViHSiF732VlvWRgtvlqTxwsh5yO5tCgX6sHE8N9K7XZ_pw8PD-_HocS6NUzsqtIyZYlGXZ-ULcZkXZ3aCYcO22F9RgDI8sMRVB7IcPpDwSQA==) *(vertexaisearch.cloud.google.com)*
  > Intent to Prototype: Relative Alpha Colors (CSS Color 5 alpha() function) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Relativ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFER97mzLM4GbEsic9qEwC8YxPuS93R6sqvlUCudZ3PxxN3L1oxqVv-6zQX5oIrt4wba8HTJtvQIO46MJz9H9SnJMTgmxNI_sWv5krfprLVEjCQ_DN3YA70nrkuFcX_N5GBMBa9vg==) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Relative Alpha Colors (`alpha()` function)  In the **CSS Color Module Level 5** specification, **Relative Alpha Colors** introduces a dedicated `alpha()` function designed to adjust the opacity/transparency of an origin color without ha
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFC0G2vDmMonsgKVjbrhyQspOJ1EdK1NgL022T3NZFvWUqNtEzQRqzlzTMtD36cuhTxKdnUwGzXGOz5vabMfxBQsNarnBXq15MYDA0E5a4YdO_ym8f0GbtkXZ75G_PGv-Rhd2gENzbCo2j1QsaEggDZ) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Relative Alpha Colors (`alpha()` function)  In the **CSS Color Module Level 5** specification, **Relative Alpha Colors** introduces a dedicated `alpha()` function designed to adjust the opacity/transparency of an origin color without ha
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFon6ky_hrHuqixluiLm2dGa3GsAP7Oed3rTPAQ_pHIJ_NFCxnaVxd_LSlT8k53ZhEkP8k4fJN-lvAdbwSU2imd0Epe39iNGfVQH2FwyBgp4Y-7bXO1fX7_gOJ9chD_qYY=) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Relative Alpha Colors (`alpha()` function)  In the **CSS Color Module Level 5** specification, **Relative Alpha Colors** introduces a dedicated `alpha()` function designed to adjust the opacity/transparency of an origin color without ha
- [Intent to Prototype: Relative Alpha Colors (CSS Color 5 alpha() function)](https://groups.google.com/a/chromium.org/g/blink-dev/c/E6mcKG39EN8) *(groups.google.com · 2026-03-14T00:00:00)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5070160203481088</strong>?gate=5172416059932672
- [CSS Color Module Level 5 reference guide - LogRocket Blog](https://blog.logrocket.com/exploring-css-color-module-level-5) *(blog.logrocket.com · 2024-06-04T21:09:42)*
  > There’s also an optional fourth argument, the alpha parameter, that may be added to the mix to specify the color’s opacity. In this CSS syntax example for HWB, we specify a hue of 0 with 20% whiteness, 40% blackness, and .3 opacity:
- [Exploring the new CSS color functions: CSS Color Module Level 5 - Web Design News](https://webdesignernews.net/exploring-the-new-css-color-functions-css-color-module-level-5-1435.html) *(webdesignernews.net)*
  > There’s also an optional fourth argument, the alpha parameter, that may be added to the mix to specify the color’s opacity. In this CSS syntax example for HWB, we specify a hue of 0 with 20% whiteness, 40% blackness, and .3 opacity: hwb(0 20% 40%) //...
- [Relative Alpha Colors (CSS Color 5 alpha() function)](https://chromestatus.com/feature/5070160203481088) *(chromestatus.com · 2026-03-14T00:00:00)*
  > We cannot provide a description for this page right now
- [Unlocking the Future of Web Colors: A Guide to CSS Color Module Level 5 - Somethings Blog](https://www.somethingsblog.com/2024/10/21/unlocking-the-future-of-web-colors-a-guide-to-css-color-module-level-5) *(somethingsblog.com · 2025-03-03T02:21:33)*
  > Discover the advanced color functions and improvements in CSS Color Module Level 5, including LCH, HWB, LAB, color-mix, color-contrast, color, and accent-color, all supported by major browsers.
- [A Guide To Modern CSS Colors With RGB, HSL, HWB, LAB And LCH — Smashing Magazine](https://www.smashingmagazine.com/2021/11/guide-modern-css-colors) *(smashingmagazine.com · 2021-11-17T16:00:00)*
  > The Level 5 Color Specification is currently in Working Draft, meaning no browsers yet support the color-contrast() and color-mix() functions and their syntax is subject to change.
- [[blink-dev] Intent to Ship: Relative Alpha Colors (CSS Color 5 alpha() function)](http://www.mail-archive.com/blink-dev@chromium.org/msg16605.html) *(mail-archive.com)*
  > Blink component Blink&gt;CSS Web Feature ID Missing feature Motivation Relative alpha colors provide a direct CSS way to derive a translucent version of an existing color without rewriting its color channels. Authors currently need to duplicate compo...
- [Relative Alpha · May 27, 2026](https://nerdy.dev/relative-alpha) *(nerdy.dev)*
  > Would use: CSS relative alpha . button { <strong>border-color : alpha(from hotpink / calc (alpha * .25) ); }</strong>
- [[blink-dev] Re: Intent to Ship: Relative Alpha Colors (CSS Color 5 alpha() function)](http://www.mail-archive.com/blink-dev@chromium.org/msg16619.html) *(mail-archive.com)*
  > https://github.com/mozilla/sta... https://drafts.csswg.org/css-color-5/#relative-alpha &gt; &gt; *Summary* &gt; Relative alpha colors <strong>refer to an origin color, and only change the alpha &gt; channel</strong>....
- [Re: [blink-dev] Re: Intent to Ship: Relative Alpha Colors (CSS Color 5 alpha() function)](http://www.mail-archive.com/blink-dev@chromium.org/msg16661.html) *(mail-archive.com)*
  > This &gt;&gt; note on the Mozilla standards ... &gt;&gt; https://drafts.csswg.org/css-color-5/#relative-alpha &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>Relative alpha colors refer to an origin color, and only change the alpha &gt;&gt; channel</str...
- [[blink-dev] Intent to Prototype: Relative Alpha Colors (CSS Color 5 alpha() function)](http://www.mail-archive.com/blink-dev@chromium.org/msg16090.html) *(mail-archive.com)*
  > Specification https://drafts.csswg.org/css-color-5/#relative-alpha Summary <strong>Relative alpha colors refer to an origin color, and only change the alpha channel</strong>. The meaning of alpha channels is defined in CSS Color 4 § 4.2 Representing ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Relative Alpha Colors (CSS Color 5 alpha() function)](https://groups.google.com/a/chromium.org/g/blink-dev/c/E6mcKG39EN8) *(groups.google.com · 2026-03-14T00:00:00)* *(Cites: `https://chromestatus.com/feature/5070160203481088`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5070160203481088</strong>?gate=5172416059932672
- [[css-color-5][css-color-4] Unclear how to use `progress` in interpolation. · Issue #14021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14021) *(github.com · 2026-06-06T16:37:56)* *(Cites: `https://drafts.csswg.org/css-color-5/#relative-alpha`)*
  > See: https://<strong>drafts.csswg.org/css-color-5</strong>/#color-mix-result Interpolate a and b’s colors as described in CSS Color 4 § 13. Color Interpolation, with a progress percentage equal to (b’s percentage) / combined percentage), if...
- [[csswg-drafts] [css-color-5] color-contrast() grammar should specify that the second list of colors requires at least two colors (#6055) from weinig via GitHub on 2021-02-28 (public-css-archive@w3.org from February 2021)](https://www.w3.org/mid/issues.opened-818280840-1614538759-sysbot+gh@w3.org) *(w3.org)* *(Cites: `https://drafts.csswg.org/css-color-5/#relative-alpha`)*
  > The text states: &gt; This function takes, firstly, a single color (typically a background, but not necessarily), and then second, a list **of two or more** colors; where as the grammar indicates one or more is fine: &gt; color-contrast() =...
- [[css-color-5] Grammar for parsing relative colors? · Issue #7721 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7721) *(github.com · 2023-07-04T00:00:00)* *(Cites: `https://drafts.csswg.org/css-color-5/#relative-alpha`)*
  > Is it just me, or is the grammar for parsing relative colors missing? https://<strong>drafts.csswg.org/css-color-5</strong>/#relative-colors Channel keywords are defined for each color function, and example usage i...

## 📚 Platform Documentation & Specifications

- [[css-color-5][css-color-4] Unclear how to use `progress` in interpolation. · Issue #14021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14021) *(github.com)*
- [[csswg-drafts] [css-color-5] color-contrast() grammar should specify that the second list of colors requires at least two colors (#6055) from weinig via GitHub on 2021-02-28 (public-css-archive@w3.org from February 2021)](https://www.w3.org/mid/issues.opened-818280840-1614538759-sysbot+gh@w3.org) *(w3.org)*
- [[css-color-5] Grammar for parsing relative colors? · Issue #7721 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7721) *(github.com)*
- [CSS colors - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors) *(developer.mozilla.org)*
- [CSS colors - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors) *(developer.mozilla.org)*
- [Relative Alpha Colors · Issue #1396 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1396) *(github.com)*
- [alpha() CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/alpha) *(developer.mozilla.org)*
- [Alpha (alpha channel)](https://developer.mozilla.org/en-US/docs/Glossary/Alpha) *(developer.mozilla.org)*
- [Using relative colors](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Using_relative_colors) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 23 result(s) found across 6 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/5070160203481088" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-color-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS Color 5" OR "CSS Color Module Level 5" "alpha()" tutorial OR guide` — *Find practical developer guides and blog posts explaining how the CSS Color 5 alpha() function works for relative alpha manipulation.* (8 returned)
  - `"alpha(" "relative alpha" OR "origin color" "CSS Color 5" example` — *Locate direct CSS code snippets and syntax demonstrations showing origin color transparency adjustments using relative alpha functions.* (4 returned)
  - `"CSS Color 5" "alpha()" OR "relative alpha" ("Intent to" OR chromestatus OR webkit OR "Firefox" OR "drafts.csswg.org")` — *Track browser vendor implementation progress, standard tracking issues, and intent-to-ship/prototype announcements across Chromium, WebKit, and Gecko.* (6 returned)
  - `CSS Color 5 "alpha()" ("relative color syntax" OR "design tokens" OR "design systems")` — *Discover community discussions, design system architectures, and developer sentiment comparing the dedicated alpha() function to standard relative color syntax.* (0 returned)
- **Google Search Grounding (gemini-3.7-flash):** 11 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **3 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 4 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5070160203481088)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5070160203481088)
- [Specification](https://drafts.csswg.org/css-color-5/#relative-alpha)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/492246715)
