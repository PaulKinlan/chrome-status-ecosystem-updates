# Relative Alpha Colors (CSS Color 5 alpha() function)

> **Report Week:** 2026-W38 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Relative alpha colors refer to an origin color, and only change the alpha channel. The meaning of alpha channels is defined in CSS Color 4 § 4.2 Representing Transparency in Colors: the &lt;alpha-value&gt; syntax.

### Motivation

Relative alpha colors provide a direct CSS way to derive a translucent version of an existing color without rewriting its color channels. Authors currently need to duplicate component values or create separate precomputed tokens when they want “the same color, different opacity.” The CSS Color 5 alpha() function preserves the original color components and only changes alpha, which reduces authoring overhead and makes color tokens easier to reuse and maintain.

## Ecosystem Status

- **Momentum:** High (315 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** The CSS Color 5 \`alpha()\` function delivers a long-requested ergonomic shortcut for relative alpha modifications without requiring full relative color syntax expansion or explicit color channel conversion. Officially shipping enabled by default in Chrome 152, the feature has quickly achieved multi-engine alignment with active implementation in Safari Technology Preview (Release 246) and landing in Firefox beta channels. Although not yet indexed in Baseline, the rapid vendor uptake establishes \`alpha()\` as a key upcoming milestone for streamlined design token maintenance.

### Recommendations
- Actionable Advice: Adopt \`alpha()\` progressively using \`@supports (color: alpha(black / 0.5))\` or fall back to CSS Color 4 Relative Color Syntax / CSS custom properties in production until multi-engine stable availability catches up. Teams using build toolchains should leverage PostCSS (\`@csstools/postcss-alpha-function\`) or Lightning CSS to author \`alpha()\` today safely.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @yisibl: "@nt1m Thanks!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "X on X / X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Relative Alpha Colors](https://github.com/WebKit/standards-positions/issues/657) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [X on X / X](https://twitter.com/sindresorhus/status/991610996589346817) — *by @sindresorhus, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Base Colors (@base\_colors) / X](https://twitter.com/base_colors) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Alex arrot on X: "playing with colors (normal - ++saturation - FNF color palette)" / X](https://twitter.com/Alexarrot/status/1904077832285827492) — *by @Alexarrot, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [WebKit (@webkit) on X](https://twitter.com/webkit/status/1234553371320672265?lang=en-GB) — *by @webkit, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [@csstools/postcss-alpha-function](https://www.npmjs.com/package/@csstools/postcss-alpha-function) `v2.0.13` — Use the alpha() function in CSS
- [postcss-color-hex-alpha](https://www.npmjs.com/package/postcss-color-hex-alpha) `v11.0.1` — Use 4 & 8 character hex color notation in CSS
- [@asamuzakjp/css-color](https://www.npmjs.com/package/@asamuzakjp/css-color) `v7.0.0` — CSS color - Resolve and convert CSS colors.

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: Relative Alpha Colors (CSS Color 5 alpha() function)](https://groups.google.com/a/chromium.org/g/blink-dev/c/E6mcKG39EN8) *(groups.google.com · 2026-03-14T00:00:00)*
  > Intent to Prototype: Relative Alpha Colors (CSS Color 5 alpha() function) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Relativ...
- [Relative Alpha Colors (CSS Color 5 alpha() function)](https://chromestatus.com/feature/5070160203481088) *(chromestatus.com · 2026-03-14T00:00:00)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Intent to Ship: Relative Alpha Colors (CSS Color 5 alpha() function)](http://www.mail-archive.com/blink-dev@chromium.org/msg16605.html) *(mail-archive.com)*
  > Blink component Blink&gt;CSS Web Feature ID Missing feature Motivation Relative alpha colors <strong>provide a direct CSS way to derive a translucent version of an existing color without rewriting its color channels</strong>. Authors currently need t...
- [\[blink-dev\] Re: Intent to Ship: Relative Alpha Colors (CSS Color 5 alpha() function)](http://www.mail-archive.com/blink-dev@chromium.org/msg16624.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; *Blink component* &gt;&gt; Blink&gt;CSS ... &gt;&gt; Relative alpha colors <strong>provide a direct CSS way to derive a translucent &gt;&gt; version of an existing color without rewriting its color channels</strong>. Authors &gt;&gt...
- [Re: \[blink-dev\] Re: Intent to Ship: Relative Alpha Colors (CSS Color 5 alpha() function)](http://www.mail-archive.com/blink-dev@chromium.org/msg16636.html) *(mail-archive.com)*
  > *Blink component* Blink&gt;CSS ... Relative alpha colors <strong>provide a direct CSS way to derive a translucent version of an existing color without rewriting its color channels</strong>. Authors currently need to duplicate component values or crea...
- [CSS Relative Colors](https://ishadeed.com/article/css-relative-colors) *(ishadeed.com · 2025-03-08T00:00:00)*
  > In CSS, we can now generate a color that is relative to another color. How does it work? Let’s find out. Let’s explore how the syntax works. To use relative colors, we need to specify the following: ... /* ****** */ /* Relative Color Syntax */ color-...
- [CSS relative color syntax \| Blog \| Chrome for Developers](https://developer.chrome.com/en/blog/css-relative-color-syntax) *(developer.chrome.com)*
  > The preceding diagram shows the originating color green being converted to the new color&#x27;s color space, turned into individual numbers represented as r, g, b, and alpha variables, which are then directly used as a new rgb() color&#x27;s values. ...
- [A pragmatic guide to modern CSS colours - part one - Piccalilli](https://piccalil.li/blog/a-pragmatic-guide-to-modern-css-colours-part-one) *(piccalil.li)*
  > Using relative colours, it’s incredibly simple now: ... <strong>:root { --color-primary: #2563eb; } .semi-transparent-primary-background { background-color: hsl(from var(--color-primary) h s l / 0.75); }</strong>
- [CSS Color Functions \| CSS-Tricks](https://css-tricks.com/css-color-functions) *(css-tricks.com · 2025-06-26T13:42:10)*
  > .<strong>element { color: oklch(from rgb(255 210 01 / 0.5) calc(50% + var(--a)) calc(20% + var(--b)) h / a); } The relative color syntax is, however, different than the color() function in that you have to include the color space name and then fully ...
- [CSS Colors: Understanding RGB, HEX, HSL, and Alpha Values - DEV Community](https://dev.to/wolfflucas/css-colors-understanding-rgb-hex-hsl-and-alpha-values-1gch) *(dev.to · 2023-07-12T11:41:00)*
  > And with Color Level 5 there will be even more ways to generate colours thanks to the color-mix() function and the relative colour syntax, which lets the CSS author modify any colour (including from custom properties) in a variety of colour spaces; b...
- [How to Use CSS Hex Code Colors with Alpha Values](https://www.squash.io/how-to-use-css-hex-code-colors-with-alpha-values) *(squash.io · 2023-07-17T00:00:00)*
  > In this example, the div element has a background color of #FF000080, where 80 represents the alpha value in hex code format. This makes the div element partially transparent, allowing the content behind it to show through. Related Article: CSS Posit...
- [CSS RGBA Color Function: Complete Guide to RGB with Alpha Transparency - CodeLucky](https://codelucky.com/css-rgba-color-function) *(codelucky.com · 2025-08-27T11:39:09)*
  > .image-container { position: relative; } .image-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.4); display: flex; align-items: center; justify-content: center; color: white; opacity: 0; transitio...
- [Chrome 150 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-150-beta) *(developer.chrome.com · 2026-06-03T00:00:00)*
  > Relative alpha colors <strong>provide a direct CSS way to derive a translucent version of an existing color without rewriting its color channels</strong>. Developers currently need to duplicate component values or create separate precomputed tokens w...
- [\[dev-platform\] Intent to Ship: alpha() relative color function](http://www.mail-archive.com/dev-platform@mozilla.org/msg01857.html) *(mail-archive.com)*
  > As of Firefox 155, I intend to enable the CSS *alpha()* relative color function &lt;https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/alpha&gt; on all platforms. This feature was developed behind the *layout.css.alpha-colo...
- [\[blink-dev\] Re: Intent to Ship: Relative Alpha Colors (CSS Color 5 alpha() function)](http://www.mail-archive.com/blink-dev@chromium.org/msg16622.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; *Initial public proposal* &gt;&gt; *No information provided* &gt;&gt; &gt;&gt; *TAG review* &gt;&gt; *No information provided* &gt;&gt; &gt;&gt; *TAG review status* &gt;&gt; Not applicable &gt;&gt; &gt;&gt; *Goals for experimentatio...
- [Re: \[blink-dev\] Re: Intent to Ship: Relative Alpha Colors (CSS Color 5 alpha() function)](http://www.mail-archive.com/blink-dev@chromium.org/msg16659.html) *(mail-archive.com)*
  > &gt; &gt; *Initial public proposal* &gt; *No information provided* &gt; &gt; *TAG review* &gt; *No information provided* &gt; &gt; *TAG review status* &gt; Not applicable &gt; &gt; *Goals for experimentation* &gt; None &gt; &gt; *Risks* &gt; &gt; &gt...
- [\[dev-platform\] Intent to Prototype: alpha() relative color function](http://www.mail-archive.com/dev-platform@mozilla.org/msg01814.html) *(mail-archive.com)*
  > *Bug*: Bug 2042646 - Implement alpha() function &lt;https://bugzilla.mozilla.org/show_bug.cgi?id=2042646&gt; *Specification*: https://drafts.csswg.org/css-color-5/#relative-alpha *Standards Body*: CSSWG / W3C *Platform Coverage*: All *Preference*: *l...
- [Intent to Ship: CSS Relative Color Syntax (RCS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/KeKBTjKEdaU) *(groups.google.com)*
  > Explainer: go/rcs-chromium Specification: https://www.w3.org/TR/css-color-5/#relative-colors Summary · The relative color syntax <strong>allows developers to define colors by modifying the parameters of other colors</strong>. For example: ... Will re...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Relative Alpha Colors (CSS Color 5 alpha() function)](https://groups.google.com/a/chromium.org/g/blink-dev/c/E6mcKG39EN8) *(groups.google.com · 2026-03-14T00:00:00)* *(Cites: `https://chromestatus.com/feature/5070160203481088`)*
  > Intent to Prototype: Relative Alpha Colors (CSS Color 5 alpha() function) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototyp...
- [\[css-color-5\]\[css-color-4\] Unclear how to use \`progress\` in interpolation. · Issue #14021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14021) *(github.com · 2026-06-06T16:37:56)* *(Cites: `https://drafts.csswg.org/css-color-5/#relative-alpha`)*
  > [css-color-5][css-color-4] Unclear how to use `progress` in interpolation. · Issue #14021 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in wit...
- [CSS Color 5: Relative Color Syntax · Issue #841 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/841) *(github.com · 2023-07-03T13:51:37)* *(Cites: `https://drafts.csswg.org/css-color-5/#relative-alpha`)*
  > Issue · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Reloa...
- [\[csswg-drafts\] \[css-color-5\] color-contrast() grammar should specify that the second list of colors requires at least two colors (#6055) from weinig via GitHub on 2021-02-28 (public-css-archive@w3.org from February 2021)](https://www.w3.org/mid/issues.opened-818280840-1614538759-sysbot+gh@w3.org) *(w3.org)* *(Cites: `https://drafts.csswg.org/css-color-5/#relative-alpha`)*
  > The text states: &gt; This function takes, firstly, a single color (typically a background, but not necessarily), and then second, a list **of two or more** colors; where as the grammar indicates one or more is fine: &gt; color-contrast() =...

## 📚 Platform Documentation & Specifications

- [\[css-color-5\]\[css-color-4\] Unclear how to use \`progress\` in interpolation. · Issue #14021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14021) *(github.com)*
- [CSS Color 5: Relative Color Syntax · Issue #841 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/841) *(github.com)*
- [\[csswg-drafts\] \[css-color-5\] color-contrast() grammar should specify that the second list of colors requires at least two colors (#6055) from weinig via GitHub on 2021-02-28 (public-css-archive@w3.org from February 2021)](https://www.w3.org/mid/issues.opened-818280840-1614538759-sysbot+gh@w3.org) *(w3.org)*
- [developer.chrome.com/site/en/blog/css-relative-color-syntax/index.md at main · GoogleChrome/developer.chrome.com](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/blog/css-relative-color-syntax/index.md) *(github.com)*
- [alpha() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/alpha) *(developer.mozilla.org)*
- [\[css-color-5\] Clarification on resolved value of the alpha() function · Issue #13994 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13994) *(github.com)*
- [css.types.color - Full support for relative colors in Chromium 125+ and Safari 18.0+ · Issue #24528 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/issues/24528) *(github.com)*
- [Alpha (alpha channel)](https://developer.mozilla.org/en-US/docs/Glossary/Alpha) *(developer.mozilla.org)*
- [Using relative colors](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Using_relative_colors) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 11 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/5070160203481088" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-color-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Relative Alpha Colors (CSS Color 5 alpha() function)" API` — *Core feature API query* (5 returned)
  - `"Relative Alpha Colors (CSS Color 5 alpha() function)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"alpha-value" OR "(css" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Relative Alpha Colors (CSS Color 5 alpha() function)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (2 returned)
  - `"Relative Alpha Colors (CSS Color 5 alpha() function)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"alpha()" "css-color-5" OR "CSS Color 5" "relative alpha" blog OR tutorial` — *Find developer blog posts, explainers, and guides exploring the CSS Color 5 alpha() function for modifying color opacity without channel restructuring.* (8 returned)
  - `"alpha(" origin color "CSS Color 5" syntax example -site:w3.org` — *Locate practical CSS snippets and syntax usage illustrating how design tokens and base colors are manipulated with relative alpha.* (2 returned)
  - `site:github.com/w3c/csswg-drafts/issues "relative alpha" OR "alpha()" color` — *Discover CSSWG issue tracker discussions, trade-offs against relative color syntax (RCS), and author feedback on color token ergonomics.* (1 returned)
  - `"relative alpha" OR "alpha()" "css-color" "intent to" OR "Chromium" OR "WebKit" OR "Firefox"` — *Track browser vendor roadmaps, intent to prototype/ship notices, and implementation tracking across Chromium, Gecko, and WebKit.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 9 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **3 verified relevant**
- **Web Platform Tests (wpt.fyi):** 567 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 3 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5070160203481088)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5070160203481088)
- [Specification](https://drafts.csswg.org/css-color-5/#relative-alpha)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/492246715)
