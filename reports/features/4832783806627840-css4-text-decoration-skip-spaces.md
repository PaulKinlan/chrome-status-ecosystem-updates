# CSS4 text-decoration-skip-spaces

> **Report Week:** 2026-W41 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over whitespace characters. This allows authors to prevent decorations from being drawn under spaces, which is often more visually appealing.

### Motivation

Currently there is no web standard way to control whether text decorations (underlines, overlines, line-throughs) appear over whitespace characters. Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The `text-decoration-skip-spaces` property fills this gap, allowing precise control over decoration rendering around whitespace. This is useful for navigation menus, links, and any text where the decoration should visually attach only to non-space characters.

## Ecosystem Status

- **Momentum:** High (425 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** CSS4 text-decoration-skip-spaces is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html) *(mail-archive.com)*
  > We talked about this during the API Owners call today and something that came up was this Issue 6 in the spec: https://drafts.csswg.org/css-text-decor-4/#issue-4229bfce Is your plan to ship with &#x27;none&#x27; as the default, or try &#x27;end&#x27;...
- [\[blink-dev\] Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17140.html) *(mail-archive.com)*
  > Specification https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property Summary The text-decoration-skip-spaces CSS property <strong>controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over w...
- [CSS4 text-decoration-skip-spaces](https://chromestatus.com/feature/4832783806627840) *(chromestatus.com · 2026-04-10T00:00:00)*
  > We cannot provide a description for this page right now
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17373.html) *(mail-archive.com)*
  > I also think this situation is ... (Also note: the default does *not* &gt;&gt;&gt; skip spaces in the middle of text.) &gt;&gt;&gt; &gt;&gt;&gt; I did notice that there don&#x27;t seem to be any tests for the default (i.e. &gt;&gt;&gt; a test that do...
- [Text-Decoration: Complete Guide - Progressive Robot](https://www.progressiverobot.com/2026/05/12/css-text-decoration) *(progressiverobot.com · 2026-05-12T22:37:38)*
  > <strong>With &lt;^&gt;text-decoration-skip&lt;^&gt; we can avoid having the decoration step over parts of the element its applied to</strong>. The possible values are &lt;^&gt;objects&lt;^&gt;, &lt;^&gt;spaces&lt;^&gt;, &lt;^&gt;ink&lt;^&gt;, &lt;^&g...
- [CSS Text Decoration](https://www.w3schools.com/css/css_text_decoration.asp) *(w3schools.com)*
  > <strong>The CSS text-decoration property is used to control the appearance of decorative lines on text</strong>.
- [CSS Text Decoration - W3Schools](https://w3schools.dev/css/css_text_decoration.asp) *(w3schools.dev)*
  > Log in Sign Up ★ +1 My W3Schools Get Certified Spaces For Teachers Plus Get Certified Spaces For Teachers Plus
- [CSS text-decoration property](https://www.w3schools.com/cssref/pr_text_text-decoration.php) *(w3schools.com)*
  > <strong>Set different text decorations for , , and elements</strong>.
- [CSS Text Decoration : A Step By Step Guide \| Career Karma](https://careerkarma.com/blog/css-text-decoration) *(careerkarma.com · 2023-12-01T10:42:21)*
  > The CSS text-decoration property allows developers to add underlines, overlines, and strike-through lines to text. On Career Karma, learn how to use the text-decoration property.
- [CSS Text Properties: Align, Decoration, Transform, White-space, Overflow, Spacing](https://tutorial.techaltum.com/textproperties.html) *(tutorial.techaltum.com · 2025-12-18T00:00:00)*
  > Master CSS text properties: text-align, text-decoration, text-transform, white-space, text-overflow, word-spacing, and letter-spacing with examples and tutorials.
- [CSS Text Indentation and Spacing - W3Schools](https://w3schools.dev/css/css_text_spacing.asp) *(w3schools.dev)*
  > Text Color Text Alignment Text Decoration Text Transformation Text Spacing Text Shadow CSS Fonts
- [text-decoration-skip \| CSS-Tricks](https://css-tricks.com/almanac/properties/t/text-decoration-skip) *(css-tricks.com · 2021-08-02T17:00:34)*
  > none: decoration line crosses everything, including inline objects that would normally be skipped. spaces: <strong>decoration line skips spaces, word-separator characters, and any spaces set with letter-spacing or word-spacing</strong>.
- [css - Can i exclude spaces from text decoration? - Stack Overflow](https://stackoverflow.com/questions/72692992/can-i-exclude-spaces-from-text-decoration) *(stackoverflow.com)*
  > I suggest doing this with JavaScript, by <strong>splitting the text you are interested in at the space character into separate span elements</strong>. You can then apply your line-through decoration to the span elements, which will not include the sp...
- [CSS text-decoration-skip Property \| W3Docs](https://www.w3docs.com/learn-css/text-decoration-skip.html) *(w3docs.com)*
  > <strong>It specifies whether to interrupt the decoration lines above or below the text</strong>.It specifies whether and how a text-decoration line is drawn through the text itself.It specifies what parts of the content-box of an element the decorati...
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17185.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces · Perry Mon, 17 Aug 2026 08:45:32 -0700 · Thanks Dan. My plan is to ship with &#x27;none&#x27; as the default, because I think such compatibility...
- [text-decoration-skip - CSS: Cascading Style Sheets \| MDN](https://mdn2.netlify.app/en-us/docs/web/css/text-decoration-skip) *(mdn2.netlify.app)*
  > ... The entire margin box of the element is skipped if it is an atomic inline such as an image or inline-block. ... <strong>All spacing is skipped: all Unicode white space characters and all word separators, plus any adjacent letter-spacing or word-s...
- [Text-decoration-skip - CSS - W3cubDocs](https://docs.w3cub.com/css/text-decoration-skip) *(docs.w3cub.com)*
  > <strong>The same as spaces, except that only trailing spaces are skipped</strong>. ... The start and end of the text decoration is inset slightly (e.g., by half of the line thickness) from the content edge of the decorating box. Thus, adjacent elemen...
- [CSS - text-decoration-skip](https://www.quirksmode.org/css/text/textdecorationskip.html) *(quirksmode.org)*
  > -webkit-text-decoration-skip: spaces The quick brown fox jumped over the lazy dog.
- [text-decoration-skip · WebPlatform Docs](https://webplatform.github.io/docs/css/properties/text-decoration-skip) *(webplatform.github.io)*
  > Will skip over the box’s margin, border, and padding areas. Note: It is not known yet if this is a needed value ... The text decoration will be inset slightly, so that two side by side elements do not appear to have a single continuous decoration.
- [text-decoration-skip CSS Syntax \| modern-css.com](https://modern-css.com/reference/properties/text-decoration-skip) *(modern-css.com)*
  > Learn how to use text-decoration-skip: <strong>A broader property that defines which parts of an element&#x27;s content should be skipped by its text decorations</strong>. For example, you can tell an underline to skip spaces or the edges of the box.
- [CSS text-decoration-skip](https://www.quackit.com/css/css3/properties/css_text-decoration-skip.cfm) *(quackit.com)*
  > ... Skip over where glyphs are ... slightly from the content edge of the decorating box so that, for example, <strong>two underlined elements side-by-side do not appear to have a single underline</strong>....
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com)*
  > The text-decoration-skip-spaces CSS property <strong>controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over whitespace characters</strong>.
- [text decoration needs to skip spaces at start/end of lines \[40862777\] - Chromium](https://issues.chromium.org/issues/40862777) *(issues.chromium.org)*
  > I&#x27;m finding that when text-underline-offset is set, a part of the underline is visible in the spaces where it should not be. ... text-decoration-skip-spaces: default to start end Change the initial value from `none` to `start end` per CSS Text D...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/4832783806627840`)*
  > Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window...
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...
- [\[css-text-decor-4\] Which font-size does a percentage text-decoration-thickness resolve against when the decoration propagates? · Issue #14544 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14544) *(github.com · 2026-09-30T05:48:27)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > [css-text-decor-4] Which font-size does a percentage text-decoration-thickness resolve against when the decoration propagates? · Issue #14544 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / S...
- [\[css-text-decor\] \[css-pseudo\] default ‘text-decoration-color’ of ‘spelling-error’ and ‘grammar-error’ · Issue #7522 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7522) *(github.com · 2022-07-21T10:15:16)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > [css-text-decor] [css-pseudo] default ‘text-decoration-color’ of ‘spelling-error’ and ‘grammar-error’ · Issue #7522 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance ...
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com · 2026-08-21T10:28:22)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > [css-text-decor-4] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or win...
- [\[css-text-decor\] text-decoration-width claims to be a sub-property of text-decoration, but text-decoration disagrees. · Issue #3993 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3993) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > [css-text-decor] text-decoration-width claims to be a sub-property of text-decoration, but text-decoration disagrees. · Issue #3993 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sig...
- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com · 2026-10-02T00:49:44)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > text-decoration-inset · Issue #4462 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...
- [\[css-lists\]\[css-pseudo\] Allow text decoration properties on ::marker · Issue #12822 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12822) *(github.com · 2025-09-18T00:15:38)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > [css-lists][css-pseudo] Allow text decoration properties on ::marker · Issue #12822 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anot...
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3) *(w3.org)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > https://<strong>drafts.csswg.org/css-text-decor-4</strong>/#valdef-text-decoration-style-wavyReferenced in: 2.2. Text Decoration Style: the text-decoration-style property · https://www.w3.org/TR/css-values-4/#mult-commaReferenced in: 4. Tex...

## 📚 Platform Documentation & Specifications

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)*
- [\[css-text-decor-4\] Which font-size does a percentage text-decoration-thickness resolve against when the decoration propagates? · Issue #14544 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14544) *(github.com)*
- [\[css-text-decor\] \[css-pseudo\] default ‘text-decoration-color’ of ‘spelling-error’ and ‘grammar-error’ · Issue #7522 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7522) *(github.com)*
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com)*
- [\[css-text-decor\] text-decoration-width claims to be a sub-property of text-decoration, but text-decoration disagrees. · Issue #3993 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3993) *(github.com)*
- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com)*
- [\[css-lists\]\[css-pseudo\] Allow text decoration properties on ::marker · Issue #12822 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12822) *(github.com)*
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3) *(w3.org)*
- [CSS4 text-decoration-skip-spaces · Issue #1164 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1164) *(github.com)*
- [text-decoration-skip CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-skip) *(developer.mozilla.org)*
- [text-decoration-skip CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip) *(developer.mozilla.org)*
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/css-text-decor-4) *(w3.org)*
- [CSS text decoration - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Text_decoration) *(developer.mozilla.org)*
- [\[css-text-decor-4\] Variants of text-decoration-skip-spaces:end behavior, and initial value · Issue #4653 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4653) *(github.com)*
- [\[css-text-decor-4\] Don't skip visible word-separators when skipping only leading/trailing spaces · Issue #5249 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/5249) *(github.com)*
- [\[css-text-decor\] selective toggling in the text-decoration-skip property. · Issue #843 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/843) *(github.com)*
- [\[css-ruby-1\] Define inline-axis coverage of underline on ruby · Issue #5996 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/5996) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 63 result(s) found across 12 planned queries — **41 verified relevant**
  - `"chromestatus.com/feature/4832783806627840" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS4 text-decoration-skip-spaces" API` — *Core feature API query* (5 returned)
  - `"CSS4 text-decoration-skip-spaces" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"text-decoration-skip-spaces" OR "line-throughs" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS4 text-decoration-skip-spaces" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (6 returned)
  - `"CSS4 text-decoration-skip-spaces" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"text-decoration-skip-spaces" OR "text-decoration-skip: spaces" CSS tutorial guide` — *Find developer blog posts and tutorials explaining how to use text-decoration-skip-spaces to style link underlines across whitespace.* (8 returned)
  - `"text-decoration-skip-spaces" ("none" OR "all" OR "start" OR "end") CSS example` — *Locate specific CSS syntax rules, supported property values, and code snippets demonstrating text decoration whitespace skipping.* (8 returned)
  - `"text-decoration-skip-spaces" (site:chromestatus.com OR site:bugs.chromium.org OR site:bugzilla.mozilla.org OR site:webkit.org)` — *Track browser vendor implementation status, intent-to-ship threads, and bug tracker progress across Blink, Gecko, and WebKit engines.* (8 returned)
  - `"text-decoration-skip-spaces" site:github.com/w3c/csswg-drafts` — *Discover CSS Working Group specification discussions, resolutions, and debates around naming and behavior of whitespace decoration skipping.* (4 returned)
  - `"text-decoration-skip-spaces" OR "text-decoration-skip" underline space link CSS` — *Find discussions and practical workarounds from designers dealing with visual gaps under link spaces and whitespace underline removal.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4832783806627840)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4832783806627840)
- [Specification](https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40862777)
