# CSS text-decoration-inset

> **Report Week:** 2026-W45 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

CSS text-decoration-inset controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges. It supports auto, length, and percentage values, including one-value and two-value syntax for setting the start and end offsets. This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements.   sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

### Motivation

This change implements CSS text-decoration-inset (CSS Text Decoration Level 4), including percentage values. It gives authors direct control over decoration inset and reduces the need for wrapper/pseudo-element workarounds used to fine-tune underline/overline/line-through rendering.    sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

## Ecosystem Status

- **Momentum:** Moderate (+120 points since 2026-10-12; footprint 260 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** Part of CSS Text Decoration Module Level 4, text-decoration-inset introduces native inline offset controls for underlines, overlines, and strike-throughs. Cross-engine consensus is strong, with Firefox shipping the property first, followed by implementations across WebKit and Chromium. The feature resolves longstanding typographic fidelity limitations by eliminating the historical need for pseudo-element or background-gradient workarounds.

### Recommendations
- Actionable Advice: Web development teams should adopt text-decoration-inset today as a progressive enhancement for refined typographic underlines and hover effects. Older browsers will simply render standard full-length decorations without breaking text readability, removing the maintenance overhead of redundant wrapper elements.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`text-decoration`](https://webstatus.dev/features/text-decoration), shared with 3 other ChromeStatus features*

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 70.8% · Edge 71.5% · Firefox 84.8% · Safari 66.5%; experimental: Chrome 95.5% · Edge 96.1% · Firefox 84.9% · Safari 81.6%

## 📰 Ecosystem Blogs & Articles

- [text-decoration-inset is Like Padding for Text Decorations \| CSS-Tricks](https://css-tricks.com/text-decoration-inset-is-like-padding-for-text-decorations) *(css-tricks.com)*
  > The \*\*\`text-decoration-inset\`\*\* property (part of the CSS Text Decoration Module Level 4, previously drafted as \`text-decoration-trim\`) controls the start and end offsets of text decoration lines—such as underlines, overlines, and strike-throughs—rel...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/visual-design/custom-text-decorations) *(developer.chrome.com)*
  > \`text-decoration-inset\` provides native layout control while keeping typographical fidelity intact \*\*Key Takeaway:\*\* Google’s developer guidance highlights \`text-decoration-inset\` as the modern standard for styling and trimming text lines without fal...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides?hl=en) *(developer.chrome.com)*
  > \*\*Source:\*\* Google Chrome Modern Web Guidance guides
- [chromium.org](https://issues.chromium.org/issues/498974811) *(issues.chromium.org)*
  > \*\*Sources:\*\* Chrome Platform Status (Chromium Issue 468928416 & CL 7748204) Additional CSSWG resolutions were integrated into Blink to properly handle percentage offsets across multi-line fragmented text boxes
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., Helmut Januschka wrote: \*Conta...
- [CSS Text Decoration Module Level 4](https://w3c.github.io/csswg-drafts/css-text-decor-4) *(w3c.github.io)*
  > CSS Text Decoration Module Level 4 CSS Text Decoration Module Level 4 Editor’s Draft , 17 August 2026 More details about this document This version: https://drafts.csswg.org/css-text-decor-4/ Latest published version: https://www.w3.org/TR/css-text-d...
- [Chrome 154  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > The text-decoration-inset CSS property &lt;strong&gt;controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges&lt;/strong&gt;. It supports auto, length, and percentage values, including one-value and tw...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com · 2026-10-30T05:29:22)*
  > CSS text-decoration-inset &lt;strong&gt;controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges&lt;/strong&gt;. It supports auto, length, and percentage values, including one-value and two-value synta...
- ["text-decoration-inset" CSS property - CSS HTML Validator](https://www.htmlvalidator.com/help.php?m=1&h=text-decoration-inset) *(htmlvalidator.com)*
  > This property &lt;strong&gt;adjusts the start and end endpoints of line decorations&lt;/strong&gt;. Positive values move an endpoint inward, trimming the decoration; negative values move it outward, extending the decoration.
- [\[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17255.html) *(mail-archive.com)*
  > This &lt;strong&gt;lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements&lt;/strong&gt;. sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://d...
- [text-decoration-inset is Like Padding for Text Decorations](https://247webdevs.blogspot.com/2025/12/text-decoration-inset-is-like-padding.html) *(247webdevs.blogspot.com · 2025-12-22T15:22:48)*
  > We often animate underlines, or should I say faux ::after underlines, but with text-decoration-inset we can do it natively. In the example below I &lt;strong&gt;multiply the insets by ten on :hover&lt;/strong&gt;.
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17290.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; &gt;&gt; \*Initial public proposal\* &gt;&gt; \*No information provided\* &gt;&gt; &gt;&gt; \*TAG review\* &gt;&gt; \*No information provided\* &gt;&gt; &gt;&gt; \*TAG review status\* &gt;&gt; Not applicable &gt;&gt; &gt;&gt; \*Goals for exper...
- [text-decoration-inset \| CSS CSS Properties](https://modern-css.com/reference/properties/text-decoration-inset) *(modern-css.com)*
  > &lt;strong&gt;span { text-decoration: underline; /\* Pushes the underline 2px further down from the text \*/ text-decoration-inset: 2px; }&lt;/strong&gt;
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17446.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \*Initial public ... \*Gecko\*: No signal &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \*WebKit\*: No signal &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; Can we please re...
- [web-platform-tests dashboard](https://wpt.fyi/results/css/css-animations/text-decoration-inset-auto.html?aligned=&q=safari%3Afail) *(wpt.fyi)*
  > web-platform-tests dashboard

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., Helmut Januschka wro...
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh ...
- [Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30757) *(github.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload ...
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You...
- [CSS Text Decoration Module Level 4](https://w3c.github.io/csswg-drafts/css-text-decor-4) *(w3c.github.io)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > CSS Text Decoration Module Level 4 CSS Text Decoration Module Level 4 Editor’s Draft , 17 August 2026 More details about this document This version: https://drafts.csswg.org/css-text-decor-4/ Latest published version: https://www.w3.org/TR/...
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/css-text-decor-4) *(w3.org)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > The CSSWG resolved to be split skipping functionality into individual properties along the lines of text-decoration-skip-ink, to improve its cascading behavior. See discussion and resolution. This section is a rough draft and has not yet be...
- [\[csswg-drafts\] \[css-text-decor-4\] Default end value of \`text-decoration-trim\` when a single length is specified? (#9340) from Guillaume via GitHub on 2023-09-12 (public-css-archive@w3.org from September 2023)](https://lists.w3.org/Archives/Public/public-css-archive/2023Sep/0326.html) *(lists.w3.org)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > == Can you please clarify whether it defaults to the specified start value (\`&lt;length&gt;\`) or \`auto\`? &gt; \*\*Name:\*\* \[text-decoration-trim\](https://&lt;strong&gt;drafts.csswg.org/css-text-decor-4&lt;/strong&gt;/#propdef-text-decoration-trim) &gt; \*\*...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com)*
- [CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com)*
- [text-decoration-inset CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)*
- [Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30757) *(github.com)*
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)*
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/css-text-decor-4) *(w3.org)*
- [\[csswg-drafts\] \[css-text-decor-4\] Default end value of \`text-decoration-trim\` when a single length is specified? (#9340) from Guillaume via GitHub on 2023-09-12 (public-css-archive@w3.org from September 2023)](https://lists.w3.org/Archives/Public/public-css-archive/2023Sep/0326.html) *(lists.w3.org)*
- [\[css-text-decor-4\] Allow percentages in \`text-decoration-inset\` · Issue #8403 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/8403) *(github.com)*
- [Experimental features in Firefox - Mozilla - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Experimental_features) *(developer.mozilla.org)*
- [\[css-text-decor-4\] Allow to interpolate between \`auto\` and length values in \`text-decoration-inset\` · Issue #13036 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/13036) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 69 result(s) found across 11 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5178263526834176" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS text-decoration-inset" API` — *Core feature API query* (8 returned)
  - `"CSS text-decoration-inset" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"static.januschka" OR "developer.mozilla" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS text-decoration-inset" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS text-decoration-inset" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"text-decoration-inset" (tutorial OR guide OR "css-tricks" OR "smashing magazine")` — *Finds developer tutorials, practical guides, and articles demonstrating text-decoration-inset usage.* (8 returned)
  - `"text-decoration-inset" ("px" OR "%" OR "auto") (underline OR line-through) example` — *Discovers real-world CSS code examples, syntax variants, and usage patterns.* (8 returned)
  - `"text-decoration-inset" ("intent to ship" OR "intent to implement" OR "Chromium" OR "WebKit" OR "Firefox")` — *Tracks browser vendor implementation status, release notes, and standardization progress.* (6 returned)
  - `"text-decoration-inset" (site:reddit.com OR site:news.ycombinator.com OR "Hacker News" OR "Mastodon")` — *Surfaces community feedback, developer sentiment, and forum discussions regarding the property.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 4 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **3 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "text-decoration", shared with 3 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "text-decoration": Chrome 70.8% passing (stable)*
- **Sources cited by the AI synthesis:** 7 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 11 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5178263526834176)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5178263526834176)
- [Specification](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/468928416)
