# Relative Alpha Colors (CSS Color 5 alpha() function)

> **Report Week:** 2026-W39 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Relative alpha colors refer to an origin color, and only change the alpha channel. The meaning of alpha channels is defined in CSS Color 4 § 4.2 Representing Transparency in Colors: the &lt;alpha-value&gt; syntax.

### Motivation

Relative alpha colors provide a direct CSS way to derive a translucent version of an existing color without rewriting its color channels. Authors currently need to duplicate component values or create separate precomputed tokens when they want “the same color, different opacity.” The CSS Color 5 alpha() function preserves the original color components and only changes alpha, which reduces authoring overhead and makes color tokens easier to reuse and maintain.

## Ecosystem Status

- **Momentum:** High (195 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** Relative Alpha Colors (CSS Color 5 alpha() function) is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @yisibl: "@nt1m Thanks!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Relative Alpha Colors](https://github.com/WebKit/standards-positions/issues/657) [closed]

## Packages & Polyfills

- [@csstools/postcss-alpha-function](https://www.npmjs.com/package/@csstools/postcss-alpha-function) `v2.0.13` — Use the alpha() function in CSS

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
- [CSS Relative Colors](https://ishadeed.com/article/css-relative-colors) *(ishadeed.com · 2025-03-09T00:00:00)*
  > In CSS, we can now generate a color that is relative to another color. How does it work? Let’s find out. Let’s explore how the syntax works. To use relative colors, we need to specify the following: ... /* ****** */ /* Relative Color Syntax */ color-...
- [CSS relative color syntax \| Blog \| Chrome for Developers](https://developer.chrome.com/en/blog/css-relative-color-syntax) *(developer.chrome.com)*
  > The preceding diagram shows the originating color green being converted to the new color&#x27;s color space, turned into individual numbers represented as r, g, b, and alpha variables, which are then directly used as a new rgb() color&#x27;s values. ...
- [A pragmatic guide to modern CSS colours - part one - Piccalilli](https://piccalil.li/blog/a-pragmatic-guide-to-modern-css-colours-part-one) *(piccalil.li)*
  > Using relative colours, it’s incredibly simple now: ... <strong>:root { --color-primary: #2563eb; } .semi-transparent-primary-background { background-color: hsl(from var(--color-primary) h s l / 0.75); }</strong>
- [CSS Color Functions \| CSS-Tricks](https://css-tricks.com/css-color-functions) *(css-tricks.com · 2025-06-26T13:42:10)*
  > .<strong>element { color: oklch(from rgb(255 210 01 / 0.5) calc(50% + var(--a)) calc(20% + var(--b)) h / a); } The relative color syntax is, however, different than the color() function in that you have to include the color space name and then fully ...
- [CSS Colors: Understanding RGB, HEX, HSL, and Alpha Values - DEV Community](https://dev.to/wolfflucas/css-colors-understanding-rgb-hex-hsl-and-alpha-values-1gch) *(dev.to · 2023-07-12T11:41:00)*
  > And with Color Level 5 there will be even more ways to generate colours thanks to the color-mix() function and the relative colour syntax, which lets the CSS author modify any colour (including from custom properties) in a variety of colour spaces; b...
- [CSS RGBA Color Function: Complete Guide to RGB with Alpha Transparency - CodeLucky](https://codelucky.com/css-rgba-color-function) *(codelucky.com · 2025-08-27T11:39:09)*
  > .image-container { position: relative; } .image-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.4); display: flex; align-items: center; justify-content: center; color: white; opacity: 0; transitio...
- [Chrome 150 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-150-beta) *(developer.chrome.com · 2026-06-03T00:00:00)*
  > Relative alpha colors <strong>provide a direct CSS way to derive a translucent version of an existing color without rewriting its color channels</strong>. Developers currently need to duplicate component values or create separate precomputed tokens w...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Relative Alpha Colors (CSS Color 5 alpha() function) · Issue #1301 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1301) *(github.com · 2026-08-14T17:29:33)* *(Cites: `https://chromestatus.com/feature/5070160203481088`)*
  > Relative Alpha Colors (CSS Color 5 alpha() function) · Issue #1301 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with a...
- [Intent to Prototype: Relative Alpha Colors (CSS Color 5 alpha() function)](https://groups.google.com/a/chromium.org/g/blink-dev/c/E6mcKG39EN8) *(groups.google.com · 2026-03-14T00:00:00)* *(Cites: `https://chromestatus.com/feature/5070160203481088`)*
  > Intent to Prototype: Relative Alpha Colors (CSS Color 5 alpha() function) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototyp...
- [\[css-color-5\]\[css-color-4\] Unclear how to use \`progress\` in interpolation. · Issue #14021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14021) *(github.com · 2026-06-06T16:37:56)* *(Cites: `https://drafts.csswg.org/css-color-5/#relative-alpha`)*
  > [css-color-5][css-color-4] Unclear how to use `progress` in interpolation. · Issue #14021 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in wit...
- [\[csswg-drafts\] \[css-color-5\] color-contrast() grammar should specify that the second list of colors requires at least two colors (#6055) from weinig via GitHub on 2021-02-28 (public-css-archive@w3.org from February 2021)](https://www.w3.org/mid/issues.opened-818280840-1614538759-sysbot+gh@w3.org) *(w3.org)* *(Cites: `https://drafts.csswg.org/css-color-5/#relative-alpha`)*
  > The text states: &gt; This function takes, firstly, a single color (typically a background, but not necessarily), and then second, a list **of two or more** colors; where as the grammar indicates one or more is fine: &gt; color-contrast() =...

## 📚 Platform Documentation & Specifications

- [Relative Alpha Colors (CSS Color 5 alpha() function) · Issue #1301 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1301) *(github.com)*
- [\[css-color-5\]\[css-color-4\] Unclear how to use \`progress\` in interpolation. · Issue #14021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14021) *(github.com)*
- [\[csswg-drafts\] \[css-color-5\] color-contrast() grammar should specify that the second list of colors requires at least two colors (#6055) from weinig via GitHub on 2021-02-28 (public-css-archive@w3.org from February 2021)](https://www.w3.org/mid/issues.opened-818280840-1614538759-sysbot+gh@w3.org) *(w3.org)*
- [developer.chrome.com/site/en/blog/css-relative-color-syntax/index.md at main · GoogleChrome/developer.chrome.com](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/blog/css-relative-color-syntax/index.md) *(github.com)*
- [alpha() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/alpha) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 7 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/5070160203481088" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"drafts.csswg.org/css-color-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Relative Alpha Colors (CSS Color 5 alpha() function)" API` — *Core feature API query* (6 returned)
  - `"Relative Alpha Colors (CSS Color 5 alpha() function)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"alpha-value" OR "(css" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Relative Alpha Colors (CSS Color 5 alpha() function)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (3 returned)
  - `"Relative Alpha Colors (CSS Color 5 alpha() function)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 569 item(s) inspected

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
