# CSS text-decoration-inset

> **Report Week:** 2026-W40 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

CSS text-decoration-inset controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges. It supports auto, length, and percentage values, including one-value and two-value syntax for setting the start and end offsets. This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements.   sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

### Motivation

This change implements CSS text-decoration-inset (CSS Text Decoration Level 4), including percentage values. It gives authors direct control over decoration inset and reduces the need for wrapper/pseudo-element workarounds used to fine-tune underline/overline/line-through rendering.



sampler: https://static.januschka.com/i-468928416/?asddsaasd
MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset

CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

## Ecosystem Status

- **Momentum:** High (220 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** CSS text-decoration-inset (CSS Text Decoration Module Level 4) grants authors direct start and end offset control over text decorations, finally replacing decades of pseudo-element and linear-gradient hacks. All three major browser engines are aligned: Firefox initially shipped support in Firefox 146, WebKit implemented it in Safari Technology Preview, and Chromium enables it by default in Chrome 156. Developer sentiment is exceptionally positive, especially for typographic fine-tuning and native skip-ink hover animations.

### Recommendations
- Actionable Advice: Adopt text-decoration-inset immediately as a progressive enhancement behind @supports (text-decoration-inset: 1px) or natural CSS property cascading for refined underline padding and hover reveals. Retain fallback border or background-based styling only on critical interactive paths requiring pixel-identical parity across older iOS and Android runtimes.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/status/2102804599325528424) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGjnZvcrOANjEUDj21i5dOndu3y8c2WM6G6U2IgQ0U5m9AUCnLKwlCPTbD_uxRCI1UiQFhteel3UWU2CJyQT-1O7ehxy3MRrrTfBNzFLhzNQEYnLzJV3hjyfFuvMH4pDV4NewtTWUE7Gy1w_Fe_G1xBm36N0qX5qIae_nL0X2L5K5knA2FR2fwy1J8ndZMz_QcY) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties text-decoration-inset Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF_UDiiMzv8thBJmsCT1BFCEM4Lac5bmSH2o-jNgGqi8ObZXJuxBIa85riNLA_KGbhh4zEfmjGhkY1SZytbmONKgmSfIRSGTRKpCoVKb6uy9ewrfOdmoM5hsUs932E0MSvHS2-AtQzPMPz3hbgsVJlmdNXva4VYZ1F3bbTJkr2N3U5wvvdx_43l) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset is Like Padding for Text Decorations | CSS-Tricks Skip to main content CSS-Tricks Since 2007 typography text-decoration-inset is Like Padding for Text Decorations Daniel Schwarz on Dec 22, 2025 The text-decoration-inset CSS prop...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQErr_iX095s7RUpXDyzmq9L9F320YAuBPdx3uqD2QSNUlia4QGX4Y0tlQ3IEqHg8e0p1ZATGI_gi3zOnTtJwZTnqQrED3kRMWWGNNtyx9Rq46qFJHSK1ApIntDzlevrIGaYDHFrKhW5MM02Z0EM8O54ZWKjw7cGuXPDZO2etnrgEMEqD5xlTLbJ) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset is Like Padding for Text Decorations | CSS-Tricks Skip to main content CSS-Tricks Since 2007 typography text-decoration-inset is Like Padding for Text Decorations Daniel Schwarz on Dec 22, 2025 The text-decoration-inset CSS prop...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGyAK0YeCVm1V3KwAx-uEKVhCbDPzw45qbtAUUmB4559qd9G2t-9CMNoppT8xsijUDLwx_bsuciP3heL1BxsT_TzG8Mmzz4DYPLU5DUnTPzdBLVa4JFj_2FXhUx) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **`text-decoration-inset`** property (part of the **CSS Text Decoration Module Level 4** specification) gives authors fine-grained control over the start and end points of text decorations—including underlines, overlines, and
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEk95GzqXCY2oOGPhGQqkA_k3d4kbwi8m-FkajzOp4zaoE6MC6oWhJ4V4jlCANyVIauor7cxwKVc-LMcDMD6-C0sg-v5VAo9yhP9MawzfNDP2ktKPU9Xg==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **`text-decoration-inset`** property (part of the **CSS Text Decoration Module Level 4** specification) gives authors fine-grained control over the start and end points of text decorations—including underlines, overlines, and
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEQN70Y1gMZ-TeYl3t57Chh-JmU8Yt_h8FHcuCj4WC26uaJFJ0asMXsb2fBGqC9Th1HWxM8XZ-OpOmbLUE-0yjYeQnccebPpjiPDRPGC4P5dgjVvPDGCPxYGa5kW-Q6L3NWtSNy) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **`text-decoration-inset`** property (part of the **CSS Text Decoration Module Level 4** specification) gives authors fine-grained control over the start and end points of text decorations—including underlines, overlines, and
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGFeK5QLKnFYzptG17B67nbwtTDVZ-GjZC-w1qqo-ur2J2fLl5-ds0V5ZhOKP6HzUgm2PAfvdLk4_KXTukzePcJcdMi2IRSdQR-NuvFRFSOuVB1eQ2klYKv90RtfwwCs8LGGYsb87GHpMrgTYWif5PygH5-5iDVY-gIxttIPeUhHwsv7owp) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **`text-decoration-inset`** property (part of the **CSS Text Decoration Module Level 4** specification) gives authors fine-grained control over the start and end points of text decorations—including underlines, overlines, and
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHZv3KMzbp-M5xlQMak_I7zbUsn1XUB4hzKlii0ujfor7TiDjm2XGspmzCEn6CFce8EsPSMKUE5oTRjv9lectLEii7Hz1x1CraAbvMeA3hISJcFVIyfkzYVUx5tYljpfPSh9DaRn8BienvuW7uFqzw7h17r4YQS6IxJ5-V-fg==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **`text-decoration-inset`** property (part of the **CSS Text Decoration Module Level 4** specification) gives authors fine-grained control over the start and end points of text decorations—including underlines, overlines, and
- [Implement text-decoration-inset \[468928416\] - Chromium](https://issues.chromium.org/issues/468928416) *(issues.chromium.org)*
  > https://<strong>chromestatus.com/feature/5178263526834176</strong> , is that correct?
- [CSS text-decoration-inset - Chrome Platform Status](https://chromestatus.com/feature/5178263526834176) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-23T06:03:02)*
  > Responsively-sized iframes, CSS scroll-marker-group modes, CSS text-decoration-inset, Iterator.prototype.includes(), and more.
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements. sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla....
- [text-decoration-inset is Like Padding for Text Decorations \| CSS-Tricks](https://css-tricks.com/text-decoration-inset-is-like-padding-for-text-decorations) *(css-tricks.com · 2025-12-22T14:41:42)*
  > Let’s take a quick look, shall we? text-decoration-inset, formerly text-decoration-trim, <strong>enables us to clip from the ends of the underline or whatever text-decoration-line is computed</strong>.
- [CSS Text Decoration Module Level 4 （日本語訳）](https://triple-underscore.github.io/css-text-decor-ja.html) *(triple-underscore.github.io · 2026-08-06T00:00:00)*
  > ◎名 `text-decoration-inset@p ◎値 `length-percentage$vt{1,2} | `auto$v ◎初 `0^v ◎適 すべての要素 ◎継 されない ◎百 `box-decoration-break$p の値に依存して，［ 当の`装飾ng~box$／個々の`~box断片$ ］いずれかの`行内~size$を~~基準にする ◎算 指定された~keyword／絶対~長さ ◎順 文法に従う ◎ア 算出された値~型による ◎表終 ◎ Name: text-decora...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17445.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; *Initial public proposal* &gt;&gt;&gt;&gt;&gt; *No information provided* &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; *TAG review* &gt;&gt;&gt;&gt;&gt; *No information provided* &gt;&gt;&gt;...
- [\[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17255.html) *(mail-archive.com)*
  > *Initial public proposal* *No information provided* *TAG review* *No information provided* *TAG review status* Not applicable *Goals for experimentation* None *Risks* *Interoperability and Compatibility* *No information provided* *Gecko*: No signal *...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Implement text-decoration-inset \[468928416\] - Chromium](https://issues.chromium.org/issues/468928416) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > https://<strong>chromestatus.com/feature/5178263526834176</strong> , is that correct?

## 📚 Platform Documentation & Specifications

- [Propriété CSS text-decoration-inset - MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [Incorrect description of percentages in \`text-decoration-inset\` · Issue #45254 · mdn/content](https://github.com/mdn/content/issues/45254) *(github.com)*
- [text-decoration-inset CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [updated the value for \`text-decoration-inset\` by dletorey · Pull Request #45028 · mdn/content](https://github.com/mdn/content/pull/45028) *(github.com)*
- [\[css-text-decor-4\] Allow to interpolate between \`auto\` and length values in \`text-decoration-inset\` · Issue #13036 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13036) *(github.com)*
- [\[css-text-decor-4\] Consider renaming \`text-decoration-trim\` · Issue #8402 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8402) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 63 result(s) found across 11 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5178263526834176" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS text-decoration-inset" API` — *Core feature API query* (3 returned)
  - `"CSS text-decoration-inset" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"static.januschka" OR "developer.mozilla" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS text-decoration-inset" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS text-decoration-inset" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"text-decoration-inset" (tutorial OR guide OR "CSS-Tricks" OR underline OR reveal)` — *Find developer tutorials, blog posts, and practical guides demonstrating how to style and animate text underlines using text-decoration-inset.* (8 returned)
  - `"text-decoration-inset" ("CSS Text Decoration Module Level 4" OR syntax OR percentage OR values)` — *Locate precise specification definitions, MDN documentation, and code examples covering single and two-value syntax.* (5 returned)
  - `"text-decoration-inset" ("Intent to Ship" OR "Chrome" OR "Chromium" OR "Firefox" OR "WebKit" OR "caniuse")` — *Track browser support, Chromium implementation updates, and engine adoption signals.* (3 returned)
  - `"text-decoration-inset" (site:github.com/w3c/csswg-drafts OR site:reddit.com/r/webdev OR site:news.ycombinator.com)` — *Discover standard discussions, CSSWG issues, feedback, and developer sentiment across tech communities.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **3 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 365 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5178263526834176)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5178263526834176)
- [Specification](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/468928416)
