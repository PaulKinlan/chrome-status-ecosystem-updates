# FontFace width attribute and font-width descriptor

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch. Aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications. Developers can now inspect or initialize font face widths using FontFace.width and CSS font-width interchangeably with stretch and font-stretch.

### Motivation

CSS Font Loading and CSS Fonts 4 define width as the primary FontFace descriptor attribute and @font-face descriptor, while retaining stretch as a legacy alias. Chromium previously ignored the width constructor member and font-width descriptor, causing Web Platform Tests to fail. Exposing width aligns Chromium with the updated specification.

## Ecosystem Status

- **Momentum:** High (170 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** The addition of the FontFace `width` attribute and the `@font-face` `font-width` descriptor brings Chromium into compliance with CSS Fonts 4 and CSS Font Loading specifications. These properties serve as modern, standardized aliases for the legacy `stretch` and `font-stretch` syntax without breaking existing font descriptors. With Gecko already supporting the aliasing WPT tests and WebKit aligned with the specification direction, cross-engine interoperability is solidifying.

### Recommendations
- Actionable Advice: Development teams can begin using `FontFace.width` and `font-width` for modern code clarity, but should maintain fallback to or continue using `font-stretch` / `FontFace.stretch` in cross-browser production code until Baseline status is fully achieved.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Packages & Polyfills

- [roboto-fontface](https://www.npmjs.com/package/roboto-fontface) `v0.10.0` — A simple package providing the Roboto fontface.
- [postcss-discard-unused](https://www.npmjs.com/package/postcss-discard-unused) `v9.0.0` — Discard unused counter styles, keyframes and fonts.

## 📰 Ecosystem Blogs & Articles

- [Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)*
  > Please list open issues (e.g. links to known github &gt;&gt;&gt; issues in the project for the feature specification) whose resolution may &gt;&gt;&gt; introduce web compat/interop risk (e.g., changing to naming or structure of &gt;&gt;&gt; the API i...
- [[blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17203.html) *(mail-archive.com)*
  > Please list open issues (e.g. links to known github issues &gt;&gt; in the project for the feature specification) whose resolution may introduce &gt;&gt; web compat/interop risk (e.g., changing to naming or structure of the API in &gt;&gt; a non-back...
- [[blink-dev] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)*
  > Please list open issues (eg links ... API in a non-backward-compatible way). None Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5145402365050880</strong>?gate=5525688097570816 This intent message was generated b...
- [CSS Fonts Module Level 4](https://w3c.github.io/csswg-drafts/css-fonts-4) *(w3c.github.io)*
  > CSS Fonts Module Level 4 CSS Fonts Module Level 4 Editor’s Draft , 28 August 2026 More details about this document This version: https://drafts.csswg.org/css-fonts-4/ Latest published version: https://www.w3.org/TR/css-fonts-4/ Previous Versions: htt...
- [font-stretch CSS at-rule descriptor - CSS | MDN](https://developer.cdn.mozilla.net/en-US/docs/Web/CSS/@font-face/font-stretch) *(developer.cdn.mozilla.net · 2020-07-22T00:00:00)*
  > Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0 · font-width = auto | &lt;&#x27;font-width&#x27;&gt;{1,2} &lt;font-width&gt; = normal | &lt;percentage [0,∞]&gt; | ultra-condensed | extra-condensed | condensed | semi-condensed | sem...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > Please list open issues (e.g. links to known github &gt;&gt;&gt; issues in the project for the feature specification) whose resolution may &gt;&gt;&gt; introduce web compat/interop risk (e.g., changing to naming or structure of &gt;&gt;&gt;...
- [[blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17203.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > Please list open issues (e.g. links to known github issues &gt;&gt; in the project for the feature specification) whose resolution may introduce &gt;&gt; web compat/interop risk (e.g., changing to naming or structure of the API in &gt;&gt; ...
- [[blink-dev] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > Please list open issues (eg links ... API in a non-backward-compatible way). None Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5145402365050880</strong>?gate=5525688097570816 This intent message was g...
- [csswg-drafts/css-fonts-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-fonts-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > csswg-drafts/css-fonts-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh yo...
- [CSS Fonts Module Level 4](https://w3c.github.io/csswg-drafts/css-fonts-4) *(w3c.github.io)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > CSS Fonts Module Level 4 CSS Fonts Module Level 4 Editor’s Draft , 28 August 2026 More details about this document This version: https://drafts.csswg.org/css-fonts-4/ Latest published version: https://www.w3.org/TR/css-fonts-4/ Previous Ver...
- [CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4) *(w3.org · 2026-08-10T22:22:55)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > https://www.w3.org/TR/css-fonts-4/ Editor&#x27;s Draft: https://<strong>drafts.csswg.org/css-fonts-4</strong>/ Previous Versions: https://www.w3.org/TR/2024/WD-css-fonts-4-20240201/ https://www.w3.org/TR/2026/WD-css-fonts-4-20260422/ Histor...
- [[css-fonts-4] [varfont] Problem setting up a "4-style family" with variable fonts · Issue #1289 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1289) *(github.com · 2017-04-24T20:10:52)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > [css-fonts-4] [varfont] Problem setting up a "4-style family" with variable fonts · Issue #1289 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed ...
- [[css-fonts-4] Avoid font synthesis outside of variable range · Issue #7999 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7999) *(github.com · 2022-11-03T10:32:42)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > [css-fonts-4] Avoid font synthesis outside of variable range · Issue #7999 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab o...
- [[css-fonts-4] Which type of font family names are system font names? · Issue #9292 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9292) *(github.com)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > Are they generic family names? There are two types of font family names: [...] [...] https://<strong>drafts.csswg.org/css-fonts-4</strong>/#font-family-prop Or a separate type? About # in the prelude of @font-f...
- [csswg-drafts/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-fonts-5/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > Abstract: <strong>This specification defines modifications to the existing &lt;a href=&quot;https://drafts.csswg.org/css-fonts-4/&quot;&gt;CSS Fonts 4&lt;/a&gt; specification along with additional features</strong>. Repository: w3c/csswg-dr...
- [[css-fonts] font property descriptors for variable fonts · Issue #2485 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/2485) *(github.com · 2018-03-29T17:15:50)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > Re: https://<strong>drafts.csswg.org/css-fonts-4</strong>/#font-prop-desc According to my reading of the current spec text, in particular: If these descriptors are omitted, initial values are assumed. Where a single value is specified, it h...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-fonts-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-fonts-4/Overview.bs) *(github.com)*
- [CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4) *(w3.org)*
- [[css-fonts-4] [varfont] Problem setting up a "4-style family" with variable fonts · Issue #1289 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1289) *(github.com)*
- [[css-fonts-4] Avoid font synthesis outside of variable range · Issue #7999 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7999) *(github.com)*
- [[css-fonts-4] Which type of font family names are system font names? · Issue #9292 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9292) *(github.com)*
- [csswg-drafts/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-fonts-5/Overview.bs) *(github.com)*
- [[css-fonts] font property descriptors for variable fonts · Issue #2485 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/2485) *(github.com)*
- [font-stretch CSS at-rule descriptor - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-stretch) *(developer.mozilla.org)*
- [font-stretch CSS at-rule descriptor - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-stretch) *(developer.mozilla.org)*
- [font-width CSS at-rule descriptor - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-width) *(developer.mozilla.org)*
- [font-width CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-width) *(developer.mozilla.org)*
- [font-width](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/font-width) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 16 result(s) found across 6 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/5145402365050880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"drafts.csswg.org/css-fonts-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"@font-face" "font-width" ("font-stretch" OR "CSS Fonts 4") (guide OR tutorial OR blog)` — *Finds developer guides and articles explaining the transition from font-stretch to font-width in CSS @font-face rules.* (4 returned)
  - `"new FontFace" ("width:" OR "font-width") javascript (example OR snippet OR github)` — *Locates practical JavaScript code examples and WebIDL usage where FontFace is initialized or inspected using the width descriptor.* (2 returned)
  - `("FontFace.width" OR "font-width descriptor") ("Chrome" OR "Chromium" OR "Firefox" OR "WebKit") ("Intent to Ship" OR "Release Notes")` — *Tracks browser implementation status, release notes, and Intent to Ship announcements across major browser engines.* (0 returned)
  - `site:github.com/w3c/csswg-drafts ("font-width" OR "FontFace.width") ("font-stretch" OR "stretch")` — *Surfaces CSSWG standard discussions, debates, and resolutions surrounding renaming stretch to width as the primary descriptor.* (0 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found — **5 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **2 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 4 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5145402365050880)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5145402365050880)
- [Specification](https://drafts.csswg.org/css-fonts-4/#font-width-prop)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/543938492)
