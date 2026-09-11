# CSS text-decoration-inset

> **Report Week:** 2026-W37 | **Milestone:** Chrome 154 | **Category:** Enabled by default

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

- **Momentum:** High (330 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** CSS text-decoration-inset is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "What kind of witchcraft is CSS nowadays? text-decoration ..." (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [What kind of witchcraft is CSS nowadays? text-decoration ...](https://twitter.com/javve/status/1772732077441417412) — *by @javve, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Kevin Mandeville on Twitter: "Hey #emailgeeks to remove Windows 10 Mail link underlining set a { text-decoration: none; } in &lt;style&gt; block - removes or strips if inline"](https://twitter.com/kevinmandeville/status/770361809924653056) — *by @kevinmandeville, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [CSS-Tricks - Multiline truncated text with “show more” button](https://twitter.com/css/status/1169368804666880001) — *by @css, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [@csstools/postcss-text-decoration-shorthand](https://www.npmjs.com/package/@csstools/postcss-text-decoration-shorthand) `v5.0.5` — Use text-decoration in it's shorthand form in CSS

## 📰 Ecosystem Blogs & Articles

- [Re: [blink-dev] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., Helmut Januschka wrote: *Conta...
- [[blink-dev] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17255.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS text-decoration-inset Helmut Januschka Sun, 23 Aug 2026 07:20:14 -0700 *Contact emails* [email&#160;protected] *Specification*...
- [Mastering CSS Inset Text: A Comprehensive Guide — tutorialpedia.org](https://www.tutorialpedia.org/blog/css-inset-text) *(tutorialpedia.org)*
  > CSS inset text is achieved by <strong>using the text-shadow property in CSS</strong>. The text-shadow property allows you to add one or more shadows to text. To create an inset text effect, we use two shadows: one with a light color to simulate the h...
- [CSS Text Decoration : A Step By Step Guide | Career Karma](https://careerkarma.com/blog/css-text-decoration) *(careerkarma.com · 2023-12-01T10:42:21)*
  > The CSS text-decoration property, and its associated properties, allow you to define the decoration used by a block of text on a web page. This tutorial discussed, with reference to examples, how to use the text-decoration property and its associated...
- [CSS Text Decoration](https://www.w3schools.com/css/css_text_decoration.asp) *(w3schools.com)*
  > <strong>The CSS text-decoration property is used to control the appearance of decorative lines on text</strong>.
- [CSS text-decoration property](https://www.w3schools.com/cssref/pr_text_text-decoration.php) *(w3schools.com)*
  > The text-decoration property specifies the decoration added to text, and is a shorthand property for:
- [CSS Tutorial For Beginners 29 - Text Decoration - YouTube](https://www.youtube.com/watch?v=dm54To0EOpw) *(youtube.com · 2015-06-23T18:16:53)*
  > Hey everyone.. Today, in this CSS tutorial, we&#x27;re gonna take a look at the text-decoration CSS property. Text decoration is most commonly used on links (to u...
- [CSS Text Decoration (With Examples)](https://www.programiz.com/css/text-decoration) *(programiz.com)*
  > The commonly used values for text-decoration are <strong>underline, overline, line-through, inherit, and none</strong>. For example, ... &lt;!DOCTYPE html&gt; &lt;html lang=&quot;en&quot;&gt; &lt;head&gt; &lt;meta charset=&quot;UTF-8&quot; /&gt; &lt;...
- [CSS Text Decoration Quick and Simple Tutorial - DEV Community](https://dev.to/adriantwarog/css-text-decoration-quick-and-simple-tutorial-5e9j) *(dev.to · 2020-04-14T08:54:20)*
  > There are a few different ways to use text decorations so in this video we will go through their default behaviour, as well as different designs and uses we can apply them to, such as striking out text, changing the style of their underline and provi...
- [CSS Text Decoration](https://w3schools.w3schoolsapp.com/css/css_text_decoration.html) *(w3schools.w3schoolsapp.com)*
  > CSS Reference CSS Selectors CSS Functions CSS Reference Aural CSS Web Safe Fonts CSS Animatable CSS Units CSS PX-EM Converter CSS Colors CSS Color Values CSS Default Values CSS Browser Support ... <strong>The text-decoration property is used to set o...
- [Is JS needed for static sites? : r/webdev](https://www.reddit.com/r/webdev/comments/1ksbfl4/is_js_needed_for_static_sites) *(reddit.com · 2025-05-21T22:44:28)*
  > <strong>No you don&#x27;t need JS for a static site, not even for menus, sorting or filtering</strong>. You will find pure css solutions for all the things you listed. There are actually frameworks for static site generations, that only use javascrip...
- [HTML, CSS, and Javascript for Web Developers | Coursera](https://www.coursera.org/learn/html-css-javascript-for-web-developers) *(coursera.org)*
  > <strong>We will start from the ground up by learning how to implement modern web pages with HTML and CSS</strong>. We will then advance to learning how to code our pages such that its components rearrange and resize themselves automatically based on ...
- [Avoid notches in your PWA with just CSS - DEV Community](https://dev.to/marionauta/avoid-notches-in-your-pwa-with-just-css-al7) *(dev.to · 2019-10-27T13:37:30)*
  > For browsers that do support them, we want the bottom padding to be equal to safe-area-inset-bottom, and fall back to 0 if the variable isn&#x27;t set. Similarly, there are also variables for the top, left and right screen edges. ... Thanks for the q...
- [Display your PWA / website fullscreen - DEV Community](https://dev.to/oncode/display-your-pwa-website-fullscreen-4776) *(dev.to · 2021-02-11T00:49:15)*
  > Since we can display content underneath the status bar now, we&#x27;ll have to make sure that the white text will always be readable (e.g. with a decorative shadow or ensuring dark background colors) and that there will be no interactive elements und...
- [text-decoration | CSS-Tricks](https://css-tricks.com/almanac/properties/t/text-decoration) *(css-tricks.com · 2021-08-02T16:54:53)*
  > That situation looks to be changing slowly. Safari 8 (in the Yosemite developer preview) now has partial support for it: the double and wavy options render (the latter is ugly, though), and the text-decoration-color property is supported as well.
- [A Checklist of Issues for Progressive Web Apps and How to Fix them | Philip Heltweg](https://heltweg.org/posts/checklist-issues-progressive-web-apps-how-to-fix) *(heltweg.org · 2024-10-15T00:00:00)*
  > This will show a context menu or auto-translate the highlighted text in an overlay. ... <strong>Create a CSS class that prevents selecting text and apply it to any element that you do not want users to select text in</strong>.
- [20 Agentic AI Terms Every Developer Should Know (Explained Simply)](https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii) *(dev.to · Sylwia Laskowska · Sep 3)*
  > Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Re: [blink-dev] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., Helmut Januschka wro...
- [[blink-dev] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17255.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > [blink-dev] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS text-decoration-inset Helmut Januschka Sun, 23 Aug 2026 07:20:14 -0700 *Contact emails* [email&#160;protected] *Spec...
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...
- [[css-text-decor] [css-pseudo] default ‘text-decoration-color’ of ‘spelling-error’ and ‘grammar-error’ · Issue #7522 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7522) *(github.com · 2022-07-21T10:15:16)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > [css-text-decor] [css-pseudo] default ‘text-decoration-color’ of ‘spelling-error’ and ‘grammar-error’ · Issue #7522 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance ...
- [[css-text-decor] text-decoration-width claims to be a sub-property of text-decoration, but text-decoration disagrees. · Issue #3993 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3993) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > [css-text-decor] text-decoration-width claims to be a sub-property of text-decoration, but text-decoration disagrees. · Issue #3993 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sig...
- [[css-lists][css-pseudo] Allow text decoration properties on ::marker · Issue #12822 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12822) *(github.com · 2025-09-18T00:15:38)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > [css-lists][css-pseudo] Allow text decoration properties on ::marker · Issue #12822 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anot...
- [[css-text-decor] text-decoration level 4 clarification on text-underline-offset positive/negative lengths · Issue #4021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4021) *(github.com · 2019-06-07T21:25:25)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > [css-text-decor] text-decoration level 4 clarification on text-underline-offset positive/negative lengths · Issue #4021 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appeara...
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3) *(w3.org)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > https://<strong>drafts.csswg.org/css-text-decor-4</strong>/#valdef-text-decoration-style-wavyReferenced in: 2.2. Text Decoration Style: the text-decoration-style property · https://www.w3.org/TR/css-values-4/#mult-commaReferenced in: 4. Tex...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)*
- [[css-text-decor] [css-pseudo] default ‘text-decoration-color’ of ‘spelling-error’ and ‘grammar-error’ · Issue #7522 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7522) *(github.com)*
- [[css-text-decor] text-decoration-width claims to be a sub-property of text-decoration, but text-decoration disagrees. · Issue #3993 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3993) *(github.com)*
- [[css-lists][css-pseudo] Allow text decoration properties on ::marker · Issue #12822 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12822) *(github.com)*
- [[css-text-decor] text-decoration level 4 clarification on text-underline-offset positive/negative lengths · Issue #4021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4021) *(github.com)*
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3) *(w3.org)*
- [CSS - Web APIs - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/CSS) *(developer.mozilla.org)*
- [CSS: supports() static method - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/CSS/supports_static) *(developer.mozilla.org)*
- [Web development tutorials - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/MDN/Tutorials) *(developer.mozilla.org)*
- [JavaScript: Adding interactivity - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) *(developer.mozilla.org)*
- [Your first website - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website) *(developer.mozilla.org)*
- [What is JavaScript? - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript) *(developer.mozilla.org)*
- [iphone-pwa-game-guide.md · GitHub](https://gist.github.com/fozzedout/5e77925381991a9570151550992baf14) *(gist.github.com)*
- [text-decoration-inset CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [CSS text decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Text_decoration) *(developer.mozilla.org)*
- [text-decoration-skip CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-skip) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 39 result(s) found across 7 planned queries — **29 verified relevant**
  - `"chromestatus.com/feature/5178263526834176" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"CSS text-decoration-inset" API` — *Core feature API query* (1 returned)
  - `"CSS text-decoration-inset" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"static.januschka" OR "developer.mozilla" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS text-decoration-inset" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS text-decoration-inset" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 3 result(s) found — **4 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 2 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **1 verified relevant**
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
