# CSS text-decoration-inset

> **Report Week:** 2026-W38 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

CSS text-decoration-inset controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges. It supports auto, length, and percentage values, including one-value and two-value syntax for setting the start and end offsets. This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements.   sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

### Motivation

This change implements CSS text-decoration-inset (CSS Text Decoration Level 4), including percentage values. It gives authors direct control over decoration inset and reduces the need for wrapper/pseudo-element workarounds used to fine-tune underline/overline/line-through rendering.



sampler: https://static.januschka.com/i-468928416/?asddsaasd
MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset

CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

## Ecosystem Status

- **Momentum:** High (170 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** CSS text-decoration-inset is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGnZVdXVk67jycRspc4uNSCLXwMaOpvh3eNMTJMNwdSyDNtGfjFugvaPIZaWBNnM7lM9agImW3ZGA9d3cS_Al8Fmy7RSSpEaqgo_PWu7ccoq5xiicFKL0mGdLWgYZlwPBGDk6_LJd2tSx1gmQyPp1r2zaOSH8E4Xg==) *(vertexaisearch.cloud.google.com)*
  > Intent to Prototype: CSS text-decoration-inset Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: CSS text-decoration-inset 152 view...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGqpZfp8DYbofnDHtt5YR8XTDFYjLjb4GSyKlcZazzcWWVhwaitaHv_2buMp0eSV19_R9o00hwkJYSv_bffwPmYZ-jZrQJmYAJmcc043JJXu3qVI_SJQEHOViyyABuf7sPrUUFE4hCp-4UfYZH99AqsR4VJwa0Lel0s1MBWIdIkPhX2VxutgdFfcM28xyXCmCk=) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties text-decoration-inset Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFNdH9n5s3qDgLFq30WJCEVmtBEMCqOagsnvFEneBAXYmcY1Cy-LlXrc7XgyNcOvHyesIbrFinj9_FqwV5uQFGMhT_D30zZQ8Crd6seGg17i6G_thRDUnOHOYtP0O3MmwdFdpxPMzHzq0Qf2n1Gl7A6n336YcSyw8huTkpucc2X8iJZ-RqK1eM=) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset is Like Padding for Text Decorations | CSS-Tricks Skip to main content CSS-Tricks Since 2007 typography text-decoration-inset is Like Padding for Text Decorations Daniel Schwarz on Dec 22, 2025 The text-decoration-inset CSS prop...
- [uxlift.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFuTlc9tepfSgYX-SEYNBV6Yj67y8tXg6Hp1KQpvIOuu2cugTDPxeNKq9VL3VyR7hVOkaizZFApMpQ8evSAcwsEUO-wmYB2ZvqSjzG95O_W0ecnqCo2sjfuM2RIM6Bo57LqViQoDGxD_-uAlw5mEFlHTrXmAg3UOcS8eXbyHIGq3I7ucQNbil9IHJiGPvKiEBqZJ0zp8VZr7fgGAQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `text-decoration-inset`  Defined in the **CSS Text Decoration Module Level 4**, `text-decoration-inset` allows authors to adjust the start and end bounds of inline text decorations (`underline`, `overline`, and `line-through`).   * **S
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG_fe9jk82ZAZsoW5nMtJUpJZdip17JOiVABuXofQO7l9bzymTHzj90rsH9IJuJ5o3RUj2K4PQx-38uwmIG7dxIjIdkf7YH2PizaN4WfqpSrcabinvku9OjqlL1BH-hDRY=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `text-decoration-inset`  Defined in the **CSS Text Decoration Module Level 4**, `text-decoration-inset` allows authors to adjust the start and end bounds of inline text decorations (`underline`, `overline`, and `line-through`).   * **S
- [januschka.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHsSjgxSyxCLQsqknPXNIgmhm5PABqX44Eii-j6ETO4SzaIJDHk2foorbm4gNtJyPkYhAB6Ab81obeFc616l0CTfbhCMKS60BicPxgx-S5z2w_ueMlRcNkV0mmUbnF0FEyP02VkzFQZsB_uQizzfk9MPHg=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `text-decoration-inset`  Defined in the **CSS Text Decoration Module Level 4**, `text-decoration-inset` allows authors to adjust the start and end bounds of inline text decorations (`underline`, `overline`, and `line-through`).   * **S
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHDhs8BCX2Y8YG5knlAenJVGQ8bMDS8ONNyU1rStV_f-5bxzJu4mk4KkUogqGe15SsOZOba_vtzmKqrYv43TQqC5aO2pi8jz7vJHqPIKMI4UaFYTUFwNf7INn7tPiy4dqPH) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `text-decoration-inset`  Defined in the **CSS Text Decoration Module Level 4**, `text-decoration-inset` allows authors to adjust the start and end bounds of inline text decorations (`underline`, `overline`, and `line-through`).   * **S
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)*
  > /No information provided/ *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/5178263526834176</strong>?gate=6555321377095680 *Links to previous Intent discussions* Intent to Prototype: https://groups.google.com/a/c...
- [Safari Technology Preview 252 adds @supports named-feature(), unprefixed user-select and two accessible-name fixes - DEV Community](https://dev.to/leobaniak/safari-technology-preview-252-adds-supports-named-feature-unprefixed-user-select-and-two-50d5) *(dev.to · 2026-09-12T16:08:09)*
  > WebKit&#x27;s 11 September preview adds a named-feature() function to @supports, exposes CSSConditionRule.supports and CSSMediaRule.matches on the CSSOM, ships the unprefixed user-select property, allows percentage values in text-decoration-inset, an...
- [Display your PWA / website fullscreen - DEV Community](https://dev.to/oncode/display-your-pwa-website-fullscreen-4776) *(dev.to · 2021-02-11T00:49:15)*
  > Since we can display content underneath the status bar now, we&#x27;ll have to make sure that the white text will always be readable (e.g. with a decorative shadow or ensuring dark background colors) and that there will be no interactive elements und...
- [20 Agentic AI Terms Every Developer Should Know (Explained Simply)](https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii) *(dev.to · Sylwia Laskowska · Sep 3)*
  > Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...
- [10 CSS Layouts Every Developer Should Know (Grid & Flexbox Explained the Simple Way)](https://dev.to/codewithdivine/10-css-layouts-every-developer-should-know-grid-flexbox-explained-the-simple-way-4ogh) *(dev.to · Emmanuel Elikwu · Sep 13)*
  > You've seen these layouts a hundred times, blogs, dashboards, Pinterest boards, magazine sites. But...
- [The Search Highlight That Deletes Your Selection](https://dev.to/parsajiravand/the-search-highlight-that-deletes-your-selection-3acb) *(dev.to · Parsa Jiravand · Sep 13)*
  > A search-highlight feature that rebuilds its DOM on every keystroke can wipe out a user's own text selection with no warning. The CSS Custom Highlight API fixes it by styling text ranges without ever touching a DOM node.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > /No information provided/ *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/5178263526834176</strong>?gate=6555321377095680 *Links to previous Intent discussions* Intent to Prototype: https://groups.goog...

## 📚 Platform Documentation & Specifications

- [Propriété CSS text-decoration-inset - MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [text-decoration-inset CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [CSS text decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Text_decoration) *(developer.mozilla.org)*
- [text-decoration-skip CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-skip) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 7 planned queries — **4 verified relevant**
  - `"chromestatus.com/feature/5178263526834176" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS text-decoration-inset" API` — *Core feature API query* (1 returned)
  - `"CSS text-decoration-inset" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"static.januschka" OR "developer.mozilla" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS text-decoration-inset" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS text-decoration-inset" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 5 result(s) found — **5 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **2 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 365 item(s) inspected

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
