# Relative Alpha Colors (CSS Color 5 alpha() function)

> **Report Week:** 2026-W41 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Relative alpha colors refer to an origin color, and only change the alpha channel. The meaning of alpha channels is defined in CSS Color 4 § 4.2 Representing Transparency in Colors: the &lt;alpha-value&gt; syntax.

### Motivation

Relative alpha colors provide a direct CSS way to derive a translucent version of an existing color without rewriting its color channels. Authors currently need to duplicate component values or create separate precomputed tokens when they want “the same color, different opacity.” The CSS Color 5 alpha() function preserves the original color components and only changes alpha, which reduces authoring overhead and makes color tokens easier to reuse and maintain.

## Ecosystem Status

- **Momentum:** High (395 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** Relative Alpha Colors (CSS Color 5 alpha() function) is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @yisibl: "@nt1m Thanks!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "@sitnik\_en@mastodon.social (@sitnikcode) on X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Relative Alpha Colors](https://github.com/WebKit/standards-positions/issues/657) [closed]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [@sitnik\_en@mastodon.social (@sitnikcode) on X](https://twitter.com/sitnikcode/status/1470754445411729415) — *by @sitnikcode, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [X on X / X](https://twitter.com/sindresorhus/status/991610996589346817) — *by @sindresorhus, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Base Colors (@base\_colors) / X](https://twitter.com/base_colors) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Chris Lilley @svgeesus@mastodon.social on X: "Today I added a gamut volume comparison to CSS Color 4. Display P3 is 50% larger than sRGB! So using sRGB you miss out on 33% of displayable colors (the most saturated ones!)" / X](https://twitter.com/svgeesus/status/1220029106248716288) — *by @svgeesus, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [@csstools/postcss-alpha-function](https://www.npmjs.com/package/@csstools/postcss-alpha-function) `v2.0.16` — Use the alpha() function in CSS

## 📰 Ecosystem Blogs & Articles

- [Relative Alpha Colors (CSS Color 5 alpha() function)](https://chromestatus.com/feature/5070160203481088) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Intent to Prototype: Relative Alpha Colors (CSS Color 5 alpha() function)](https://groups.google.com/a/chromium.org/g/blink-dev/c/E6mcKG39EN8) *(groups.google.com · 2026-03-14T00:00:00)*
  > Motivation Relative alpha colors <strong>provide a direct CSS way to derive a translucent version of an existing color without rewriting its color channels</strong>. Authors currently need to duplicate component values or create separate precomputed ...
- [\[blink-dev\] Intent to Ship: Relative Alpha Colors (CSS Color 5 alpha() function)](http://www.mail-archive.com/blink-dev@chromium.org/msg16605.html) *(mail-archive.com)*
  > Blink component Blink&gt;CSS Web Feature ... Relative alpha colors <strong>provide a direct CSS way to derive a translucent version of an existing color without rewriting its color channels</strong>. Authors currently need to duplicate component valu...
- [\[blink-dev\] Re: Intent to Ship: Relative Alpha Colors (CSS Color 5 alpha() function)](http://www.mail-archive.com/blink-dev@chromium.org/msg16619.html) *(mail-archive.com)*
  > &gt; &gt; *Blink component* &gt; Blink&gt;CSS ... &gt; Missing feature &gt; &gt; *Motivation* &gt; Relative alpha colors <strong>provide a direct CSS way to derive a translucent &gt; version of an existing color without rewriting its color channels</...
- [Re: \[blink-dev\] Re: Intent to Ship: Relative Alpha Colors (CSS Color 5 alpha() function)](http://www.mail-archive.com/blink-dev@chromium.org/msg16636.html) *(mail-archive.com)*
  > *Blink component* Blink&gt;CSS &lt;https://issues.chromium.org/issues?q=customfield1222907:&quot;Blink&gt;CSS&quot;&gt; *Web Feature ID* Missing feature *Motivation* Relative alpha colors <strong>provide a direct CSS way to derive a translucent versi...
- [CSS Relative Colors](https://ishadeed.com/article/css-relative-colors) *(ishadeed.com · 2025-03-08T00:00:00)*
  > In CSS, we can now generate a color that is relative to another color. How does it work? Let’s find out. Let’s explore how the syntax works. To use relative colors, we need to specify the following: ... /* ****** */ /* Relative Color Syntax */ color-...
- [CSS relative color syntax \| Blog \| Chrome for Developers](https://developer.chrome.com/en/blog/css-relative-color-syntax) *(developer.chrome.com)*
  > The preceding diagram shows the originating color green being converted to the new color&#x27;s color space, turned into individual numbers represented as r, g, b, and alpha variables, which are then directly used as a new rgb() color&#x27;s values. ...
- [A pragmatic guide to modern CSS colours - part one - Piccalilli](https://piccalil.li/blog/a-pragmatic-guide-to-modern-css-colours-part-one) *(piccalil.li · 2025-10-07T00:00:00)*
  > One of my favourite use cases with relative colours is that we can modify the alpha value as well. ... One of the best parts of relative colours is it doesn’t matter how your colour is defined. In the above example, I’m using an rgb() function, but m...
- [CSS Color Functions \| CSS-Tricks](https://css-tricks.com/css-color-functions) *(css-tricks.com · 2025-06-26T13:42:10)*
  > .<strong>element { color: oklch(from rgb(255 210 01 / 0.5) calc(50% + var(--a)) calc(20% + var(--b)) h / a); } The relative color syntax is, however, different than the color() function in that you have to include the color space name and then fully ...
- [CSS Colors: Understanding RGB, HEX, HSL, and Alpha Values - DEV Community](https://dev.to/wolfflucas/css-colors-understanding-rgb-hex-hsl-and-alpha-values-1gch) *(dev.to · 2023-07-12T11:41:00)*
  > And with Color Level 5 there will be even more ways to generate colours thanks to the color-mix() function and the relative colour syntax, which lets the CSS author modify any colour (including from custom properties) in a variety of colour spaces; b...
- [How to Use CSS Hex Code Colors with Alpha Values](https://www.squash.io/how-to-use-css-hex-code-colors-with-alpha-values) *(squash.io · 2023-07-17T00:00:00)*
  > In this example, the div element has a background color of #FF000080, where 80 represents the alpha value in hex code format. This makes the div element partially transparent, allowing the content behind it to show through. Related Article: CSS Posit...
- [CSS Color Module Level 5 reference guide - LogRocket Blog](https://blog.logrocket.com/exploring-css-color-module-level-5) *(blog.logrocket.com · 2024-06-04T21:09:42)*
  > There’s also an optional fourth argument, the alpha parameter, that may be added to the mix to specify the color’s opacity. In this CSS syntax example for HWB, we specify a hue of 0 with 20% whiteness, 40% blackness, and .3 opacity:
- [Web/CSS/alpha-value - Get docs](https://getdocs.org/Web/CSS/alpha-value) *(getdocs.org)*
  > <strong>The value of an &lt;alpha-value&gt; is given as either a &lt;number&gt; or a &lt;percentage&gt;</strong>. If given as a number, the useful range is 0 (fully transparent) to 1.0 (fully opaque), with decimal values in between; that is, 0.5 indi...
- [CSS &lt;alpha-value&gt; Data Type - CSS Portal](https://www.cssportal.com/css-data-types/alpha-value.php) *(cssportal.com)*
  > Consider buying us a coffee to keep things going strong! The &lt;alpha-value&gt; CSS data type <strong>represents the opacity level of a color or visual element</strong>, defining how transparent or opaque it appears when rendered.
- [Alpha-value - CSS - W3cubDocs](https://docs.w3cub.com/css/alpha-value) *(docs.w3cub.com)*
  > The &lt;alpha-value&gt; CSS data type <strong>represents a value that can be either a &lt;number&gt; or a &lt;percentage&gt;, specifying the alpha channel or transparency of a color</strong>.
- [&lt;alpha-value&gt; - CSS: Cascading Style Sheets \| MDN](https://mdn2.netlify.app/en-us/docs/web/css/alpha-value) *(mdn2.netlify.app)*
  > If given as a number, the useful range is 0 (fully transparent) to 1.0 (fully opaque), with decimal values in between; that is, 0.5 indicates that half of the foreground color is used and half of the background color is used. Values outside the range...
- [CSS Alpha Value](https://www.tutorialspoint.com/css/css_dt_alpha-value.htm) *(tutorialspoint.com)*
  > CSS &lt;alpha-value&gt; data type <strong>determines the transparency or alpha channel of a color</strong>.
- [Chrome 150 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-150-beta) *(developer.chrome.com · 2026-06-03T00:00:00)*
  > Relative alpha colors <strong>provide a direct CSS way to derive a translucent version of an existing color without rewriting its color channels</strong>. Developers currently need to duplicate component values or create separate precomputed tokens w...
- [Add wide gamut P3 and alpha transparency to your color picker in HTML \| WebKit](https://webkit.org/blog/16900/p3-and-alpha-color-pickers) *(webkit.org · 2025-05-13T16:17:53)*
  > We wanted to bring the color picker into the era of wide-gamut color and alpha transparency. So in 2024, we collaborated with the WHATWG to add a more powerful color picker to the HTML web standard. Now &lt;input type=&quot;color&quot;&gt; has two ne...
- [CSS relative color syntax \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/css-relative-color-syntax) *(developer.chrome.com · 2023-10-11T00:00:00)*
  > That from keyword, when seen as the first parameter in functional notation, turns the color definition into a relative color! After the from keyword, CSS expects a color, a color that will inspire the next color.
- [Relative Color Syntax — Basic Use Cases – Master.dev Blog](https://frontendmasters.com/blog/relative-color-syntax-basic-use-cases) *(frontendmasters.com)*
  > With the relative color syntax, breaking down colors isn’t necessary. <strong>You apply alpha (and other transformations) on demand, leaving the original single color as the only variable (token) you need</strong>.
- [How To Use CSS Hex Code Colors with Alpha Values \| DigitalOcean](https://www.digitalocean.com/community/tutorials/css-hex-code-colors-alpha-values) *(digitalocean.com)*
  > Learn how to use CSS hex code colors with alpha values using 4-digit and 8-digit hex formats. Includes code examples, browser support and tables.
- [\[blink-dev\] Re: Intent to Ship: Relative Alpha Colors (CSS Color 5 alpha() function)](http://www.mail-archive.com/blink-dev@chromium.org/msg16622.html) *(mail-archive.com)*
  > &gt;&gt; *No information provided* &gt;&gt; &gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt; https://chromestatus.com/feature/5070160203481088?gate=6508530389614592 &gt;&gt; &gt;&gt; *Links to previous Intent discussions* &gt;&gt; Inte...
- [Re: \[blink-dev\] Re: Intent to Ship: Relative Alpha Colors (CSS Color 5 alpha() function)](http://www.mail-archive.com/blink-dev@chromium.org/msg16625.html) *(mail-archive.com)*
  > &gt;&gt;&gt; *No information provided* &gt;&gt;&gt; &gt;&gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt;&gt; https://chromestatus.com/feature/5070160203481088?gate=6508530389614592 &gt;&gt;&gt; &gt;&gt;&gt; *Links to previous Intent di...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Chrome 151 CSS alpha() function by chrisdavidmills · Pull Request #29997 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/29997) *(github.com)* *(Cites: `https://chromestatus.com/feature/5070160203481088`)*
  > Chrome 151 CSS alpha() function by chrisdavidmills · Pull Request #29997 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ...
- [\[css-color-5\] how to handle/avoid clamping in relative color syntax · Issue #14463 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14463) *(github.com · 2026-09-09T14:53:23)* *(Cites: `https://drafts.csswg.org/css-color-5/#relative-alpha`)*
  > [css-color-5] how to handle/avoid clamping in relative color syntax · Issue #14463 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anoth...
- [\[css-color-5\] Drop \`Required conversion:\` wording? · Issue #14204 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14204) *(github.com · 2026-07-20T09:17:21)* *(Cites: `https://drafts.csswg.org/css-color-5/#relative-alpha`)*
  > [css-color-5] Drop `Required conversion:` wording? · Issue #14204 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window....
- [\[css-color-5\]\[css-color-4\] Unclear how to use \`progress\` in interpolation. · Issue #14021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14021) *(github.com · 2026-06-06T16:37:56)* *(Cites: `https://drafts.csswg.org/css-color-5/#relative-alpha`)*
  > [css-color-5][css-color-4] Unclear how to use `progress` in interpolation. · Issue #14021 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in wit...
- [\[css-color-5\] Serialization of the alpha() function is not specified · Issue #13992 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13992) *(github.com · 2026-05-31T18:38:27)* *(Cites: `https://drafts.csswg.org/css-color-5/#relative-alpha`)*
  > [css-color-5] Serialization of the alpha() function is not specified · Issue #13992 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anot...

## 📚 Platform Documentation & Specifications

- [Chrome 151 CSS alpha() function by chrisdavidmills · Pull Request #29997 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/29997) *(github.com)*
- [\[css-color-5\] how to handle/avoid clamping in relative color syntax · Issue #14463 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14463) *(github.com)*
- [\[css-color-5\] Drop \`Required conversion:\` wording? · Issue #14204 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14204) *(github.com)*
- [\[css-color-5\]\[css-color-4\] Unclear how to use \`progress\` in interpolation. · Issue #14021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14021) *(github.com)*
- [\[css-color-5\] Serialization of the alpha() function is not specified · Issue #13992 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13992) *(github.com)*
- [Relative Alpha Colors (CSS Color 5 alpha() function) · Issue #1301 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1301) *(github.com)*
- [developer.chrome.com/site/en/blog/css-relative-color-syntax/index.md at main · GoogleChrome/developer.chrome.com](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/blog/css-relative-color-syntax/index.md) *(github.com)*
- [&lt;alpha-value&gt; CSS type - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/alpha-value) *(developer.mozilla.org)*
- [&lt;alpha-value&gt; CSS type - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/alpha-value) *(developer.mozilla.org)*
- [alpha() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/alpha) *(developer.mozilla.org)*
- [Use \`alpha()\` CSS Function to simplify Relative Color Syntax · Issue #236 · czerkies/romanczerkies.31](https://github.com/czerkies/romanczerkies.31/issues/236) *(github.com)*
- [\[css-color-5\] Clarification on resolved value of the alpha() function · Issue #13994 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13994) *(github.com)*
- [css.types.color.alpha: Chrome version\_added should be 152, not 151 · Issue #30731 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/issues/30731) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 49 result(s) found across 11 planned queries — **37 verified relevant**
  - `"chromestatus.com/feature/5070160203481088" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-color-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Relative Alpha Colors (CSS Color 5 alpha() function)" API` — *Core feature API query* (6 returned)
  - `"Relative Alpha Colors (CSS Color 5 alpha() function)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"alpha-value" OR "(css" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Relative Alpha Colors (CSS Color 5 alpha() function)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (2 returned)
  - `"Relative Alpha Colors (CSS Color 5 alpha() function)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"CSS Color 5" "alpha()" OR "relative alpha" (guide OR tutorial OR blog)` — *Searches for developer blog posts, guides, and practical tutorials detailing the CSS Color 5 alpha function and relative alpha color usage.* (8 returned)
  - `css "alpha(" "relative alpha" syntax (example OR code)` — *Finds specific code snippets, spec syntax definitions, and implementation examples of the proposed CSS alpha() function.* (0 returned)
  - `"relative alpha" OR "alpha()" site:github.com/w3c/csswg-drafts` — *Uncovers technical debates, rationale, and design specifications within the W3C CSS Working Group repository.* (2 returned)
  - `"CSS Color 5" "alpha()" ("intent to prototype" OR "intent to ship" OR "Chrome Platform Status" OR CanIUse)` — *Tracks browser engine implementation status, vendor signals, and release schedules across Blink, Gecko, and WebKit.* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 572 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 3 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5070160203481088)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5070160203481088)
- [Specification](https://drafts.csswg.org/css-color-5/#relative-alpha)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/492246715)
