# CSS4 text-decoration-skip-spaces

> **Report Week:** 2026-W38 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over whitespace characters. This allows authors to prevent decorations from being drawn under spaces, which is often more visually appealing.

### Motivation

Currently there is no web standard way to control whether text decorations (underlines, overlines, line-throughs) appear over whitespace characters. Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The `text-decoration-skip-spaces` property fills this gap, allowing precise control over decoration rendering around whitespace. This is useful for navigation menus, links, and any text where the decoration should visually attach only to non-space characters.

## Ecosystem Status

- **Momentum:** High (455 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** CSS4 text-decoration-skip-spaces is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [CSS4 text-decoration-skip-spaces](https://chromestatus.com/feature/4832783806627840) *(chromestatus.com · 2026-04-10T00:00:00)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html) *(mail-archive.com)*
  > Thanks, Dan On Tuesday, August ...aces-property &gt; &gt; &gt; *Summary* &gt; The text-decoration-skip-spaces CSS property <strong>controls whether text &gt; decoration lines (underlines, overlines, line-throughs, etc.)</strong> skip over &gt; whites...
- [\[blink-dev\] Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17140.html) *(mail-archive.com)*
  > Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The `text-decoration-skip-spaces` property fills this gap, <strong>allowing precise control over decoration rend...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17373.html) *(mail-archive.com)*
  > I also think this situation is ... (Also note: the default does *not* &gt;&gt;&gt; skip spaces in the middle of text.) &gt;&gt;&gt; &gt;&gt;&gt; I did notice that there don&#x27;t seem to be any tests for the default (i.e. &gt;&gt;&gt; a test that do...
- [Text-Decoration: Complete Guide - Progressive Robot](https://www.progressiverobot.com/2026/05/12/css-text-decoration) *(progressiverobot.com · 2026-05-12T22:37:38)*
  > <strong>With &lt;^&gt;text-decoration-skip&lt;^&gt; we can avoid having the decoration step over parts of the element its applied to</strong>. The possible values are &lt;^&gt;objects&lt;^&gt;, &lt;^&gt;spaces&lt;^&gt;, &lt;^&gt;ink&lt;^&gt;, &lt;^&g...
- [text-decoration-skip CSS Syntax \| modern-css.com](https://modern-css.com/reference/properties/text-decoration-skip) *(modern-css.com)*
  > /* Usage Example */ div { text-decoration: underline; /* Tells the underline to skip over any empty spaces between words */ text-decoration-skip: spaces; } /* Syntax */ text-decoration-skip: none; text-decoration-skip: objects; text-decoration-skip: ...
- [CSS Text Decoration](https://www.w3schools.com/CSS/css_text_decoration.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [CSS Text Decoration - W3Schools](https://w3schools.dev/css/css_text_decoration.asp) *(w3schools.dev)*
  > W3Schools offers a wide range of services and products for beginners and professionals, helping millions of people everyday to learn and master new skills · Enjoy our free tutorials like millions of other internet users since 1999
- [CSS text-decoration property](https://www.w3schools.com/cssref/pr_text_text-decoration.php) *(w3schools.com)*
  > <strong>Set different text decorations for , , and elements</strong>.
- [CSS Text Decoration : A Step By Step Guide \| Career Karma](https://careerkarma.com/blog/css-text-decoration) *(careerkarma.com · 2023-12-01T10:42:21)*
  > The CSS text-decoration property allows developers to add underlines, overlines, and strike-through lines to text. On Career Karma, learn how to use the text-decoration property.
- [text-decoration-skip \| CSS-Tricks](https://css-tricks.com/almanac/properties/t/text-decoration-skip) *(css-tricks.com · 2021-08-02T17:00:34)*
  > The text-decoration-skip property <strong>specifies where a text underline, overline, or strike-through should break</strong>. This improves legibility of decorated text and corrects punctuation grammar for some languages.
- [css - Can i exclude spaces from text decoration? - Stack Overflow](https://stackoverflow.com/questions/72692992/can-i-exclude-spaces-from-text-decoration) *(stackoverflow.com)*
  > I suggest doing this with JavaScript, by <strong>splitting the text you are interested in at the space character into separate span elements</strong>. You can then apply your line-through decoration to the span elements, which will not include the sp...
- [CSS text-decoration-skip](https://www.quackit.com/css/css3/properties/css_text-decoration-skip.cfm) *(quackit.com)*
  > <strong>Skip all spacing, i.e. all characters with the Unicode White_Space property and all word separator characters, plus any adjacent letter-spacing or word-spacing</strong>. ... Skip over where glyphs are drawn: interrupt the decoration line to l...
- [CSS text-decoration-skip Property \| W3Docs](https://www.w3docs.com/learn-css/text-decoration-skip.html) *(w3docs.com)*
  > <strong>It specifies whether to interrupt the decoration lines above or below the text</strong>.It specifies whether and how a text-decoration line is drawn through the text itself.It specifies what parts of the content-box of an element the decorati...
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17185.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces · Perry Mon, 17 Aug 2026 08:45:32 -0700 · Thanks Dan. My plan is to ship with &#x27;none&#x27; as the default, because I think such compatibility...
- [text-decoration-skip - CSS: Cascading Style Sheets \| MDN](https://mdn2.netlify.app/en-us/docs/web/css/text-decoration-skip) *(mdn2.netlify.app)*
  > <strong>The same as spaces, except that only trailing spaces are skipped</strong>. ... The start and end of the text decoration is inset slightly (e.g., by half of the line thickness) from the content edge of the decorating box.
- [text-decoration-skip \| CSS-Tricks - CSS-Tricks](https://yousic.news/belajar-https-css-tricks.com/almanac/properties/t/text-decoration-skip) *(yousic.news · 2022-08-24T12:22:55)*
  > none: decoration line crosses everything, including inline objects that would normally be skipped. spaces: <strong>decoration line skips spaces, word-separator characters, and any spaces set with letter-spacing or word-spacing</strong>.
- [How To Underline Text In CSS? (CSS text-decoration property)](https://elementor.com/blog/how-to-underline-text-in-css) *(elementor.com · 2026-06-30T00:00:00)*
  > Descenders are the parts of letters ... continuously, even if it intersects with descenders. <strong>The `text-decoration-skip-ink` property provides options to adjust this behavior</strong>....
- [5 Ways to Insert Spaces in HTML: Guide + Example Code](https://www.wikihow.com/Insert-Spaces-in-HTML) *(wikihow.com · 2009-05-01T00:00:00)*
  > But don&#x27;t tear out your hair just yet—we&#x27;ll show you the easiest ways to control spacing between words and lines of text, as well as how to add extra space to the beginning of each paragraph so they are properly indented on the page. This w...
- [text-decoration-skip · WebPlatform Docs](https://webplatform.github.io/docs/css/properties/text-decoration-skip) *(webplatform.github.io)*
  > CSS Object Model Property · ... none · text-decoration-skip: object · text-decoration-skip: spaces · none · <strong>Will not skip anything; the text decoration will be drawn for all text content</strong> ·...
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17227.html) *(mail-archive.com)*
  > &gt; &gt; 在2026年8月13日星期四 UTC+8 00:19:19&lt;[email protected]&gt; 写道： &gt; &gt; We talked about this during the API Owners call today and something that &gt; came up was this Issue 6 in the spec: &gt; https://drafts.csswg.org/css-text-decor-4/#issue-4...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17377.html) *(mail-archive.com)*
  > 在2026年8月13日星期四 UTC+8 00:19:19&lt;[email protected]&gt; 写道： We talked about this during the API Owners call today and something that came up was this Issue 6 in the spec: https://drafts.csswg.org/css-text-decor-4/#issue-4229bfce Is your plan to ship w...
- [Nicer CSS underlines with text-decoration-skip-ink: auto; (previously text-decoration-skip: ink;) – Bram.us](https://www.bram.us/2017/06/16/nicer-css-underlines-with-text-decoration-skip-ink) *(bram.us)*
  > When applying text-decoration: underline; on an element, the line drawn will cross descenders. Using text-decoration-skip one can control the behavior of the underline The text-decoration-skip CSS property specifies what parts of the element’s conten...
- [Intent to Prototype: Insert CJK Inter-script Spacing: the CSS \`text-autospace\` property](https://groups.google.com/a/chromium.org/g/blink-dev/c/my9MyWxa2ns) *(groups.google.com)*
  > Safari 18.4 has released `text-autospace`[1], and the Chinese community has responded enthusiastically. What&#x27;s the status in Chrome now? We&#x27;re really looking forward to shipping in Chrome. [1]: https://webkit.org/blog/16574/webkit-features-...
- [Safari Technology Preview 252 adds @supports named-feature(), unprefixed user-select and two accessible-name fixes](https://dev.to/leobaniak/safari-technology-preview-252-adds-supports-named-feature-unprefixed-user-select-and-two-50d5) *(dev.to · Leo · Sep 12)*
  > WebKit's 11 September preview adds a named-feature() function to @supports, exposes CSSConditionRule.supports and CSSMediaRule.matches on the CSSOM, ships the unprefixed user-select property, allows percentage values in text-decoration-inset, and cle...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com · 2026-08-21T10:28:22)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > [css-text-decor-4] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or win...
- [\[css-text-decor\] \[css-pseudo\] default ‘text-decoration-color’ of ‘spelling-error’ and ‘grammar-error’ · Issue #7522 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7522) *(github.com · 2022-07-21T10:15:16)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > [css-text-decor] [css-pseudo] default ‘text-decoration-color’ of ‘spelling-error’ and ‘grammar-error’ · Issue #7522 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance ...
- [\[css-text-decor\] text-decoration-width claims to be a sub-property of text-decoration, but text-decoration disagrees. · Issue #3993 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3993) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > [css-text-decor] text-decoration-width claims to be a sub-property of text-decoration, but text-decoration disagrees. · Issue #3993 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sig...
- [\[css-lists\]\[css-pseudo\] Allow text decoration properties on ::marker · Issue #12822 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12822) *(github.com · 2025-09-18T00:15:38)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > [css-lists][css-pseudo] Allow text decoration properties on ::marker · Issue #12822 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anot...
- [\[css-text-decor\] text-decoration level 4 clarification on text-underline-offset positive/negative lengths · Issue #4021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4021) *(github.com · 2019-06-07T21:25:25)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > [css-text-decor] text-decoration level 4 clarification on text-underline-offset positive/negative lengths · Issue #4021 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appeara...
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3) *(w3.org)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > https://<strong>drafts.csswg.org/css-text-decor-4</strong>/#valdef-text-decoration-style-wavyReferenced in: 2.2. Text Decoration Style: the text-decoration-style property · https://www.w3.org/TR/css-values-4/#mult-commaReferenced in: 4. Tex...
- [\[css-text-decor\] Minimum width for unskipped lines? · Issue #1288 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1288) *(github.com · 2017-04-24T17:51:28)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > [css-text-decor] Minimum width for unskipped lines? · Issue #1288 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window....

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)*
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com)*
- [\[css-text-decor\] \[css-pseudo\] default ‘text-decoration-color’ of ‘spelling-error’ and ‘grammar-error’ · Issue #7522 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7522) *(github.com)*
- [\[css-text-decor\] text-decoration-width claims to be a sub-property of text-decoration, but text-decoration disagrees. · Issue #3993 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3993) *(github.com)*
- [\[css-lists\]\[css-pseudo\] Allow text decoration properties on ::marker · Issue #12822 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12822) *(github.com)*
- [\[css-text-decor\] text-decoration level 4 clarification on text-underline-offset positive/negative lengths · Issue #4021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4021) *(github.com)*
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3) *(w3.org)*
- [\[css-text-decor\] Minimum width for unskipped lines? · Issue #1288 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1288) *(github.com)*
- [text-decoration-skip CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-skip) *(developer.mozilla.org)*
- [text-decoration-skip CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip) *(developer.mozilla.org)*
- [text-decoration CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) *(developer.mozilla.org)*
- [text-decoration-skip - CSS : Feuilles de style en cascade \| MDN](https://developer.mozilla.org/fr/docs/Web/CSS/text-decoration-skip) *(developer.mozilla.org)*
- [text-decoration-skip-ink CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink) *(developer.mozilla.org)*
- [text-decoration CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration) *(developer.mozilla.org)*
- [\[css-text-decor-4\] Variants of text-decoration-skip-spaces:end behavior, and initial value · Issue #4653 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4653) *(github.com)*
- [\[css-text-decor-4\] Don't skip visible word-separators when skipping only leading/trailing spaces · Issue #5249 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/5249) *(github.com)*
- [\[css-text-decor\] selective toggling in the text-decoration-skip property. · Issue #843 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/843) *(github.com)*
- [\[css-ruby-1\] Define inline-axis coverage of underline on ruby · Issue #5996 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/5996) *(github.com)*
- [CSS text decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Text_decoration) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 11 planned queries — **42 verified relevant**
  - `"chromestatus.com/feature/4832783806627840" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.csswg.org/css-text-decor-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS4 text-decoration-skip-spaces" API` — *Core feature API query* (4 returned)
  - `"CSS4 text-decoration-skip-spaces" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"text-decoration-skip-spaces" OR "line-throughs" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS4 text-decoration-skip-spaces" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (6 returned)
  - `"CSS4 text-decoration-skip-spaces" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"text-decoration-skip-spaces" tutorial OR guide OR "CSS Tricks"` — *Discover developer tutorials, guides, and articles demonstrating practical styling techniques to skip decoration under whitespace.* (6 returned)
  - `"text-decoration-skip-spaces" (none OR all OR auto) example CSS` — *Locate CSS syntax usage, valid property values, and real-world stylesheet examples of text-decoration-skip-spaces.* (8 returned)
  - `"text-decoration-skip-spaces" (Chrome OR Safari OR Firefox OR WebKit OR "Intent to")` — *Track browser engine implementation progress, platform status updates, and vendor intent-to-prototype or ship announcements.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "text-decoration-skip-spaces"` — *Examine CSS Working Group issue threads and standards debates regarding property naming, semantics, and typography edge cases.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 3 result(s) found — **1 verified relevant**
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
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4832783806627840)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4832783806627840)
- [Specification](https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40862777)
