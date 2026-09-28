# FontFace width attribute and font-width descriptor

> **Report Week:** 2026-W40 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch. Aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications. Developers can now inspect or initialize font face widths using FontFace.width and CSS font-width interchangeably with stretch and font-stretch.

### Motivation

CSS Font Loading and CSS Fonts 4 define width as the primary FontFace descriptor attribute and @font-face descriptor, while retaining stretch as a legacy alias. Chromium previously ignored the width constructor member and font-width descriptor, causing Web Platform Tests to fail. Exposing width aligns Chromium with the updated specification.

## Ecosystem Status

- **Momentum:** High (410 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Shipping in Chrome 154, the FontFace width attribute and @font-face font-width descriptor align Chromium with CSS Fonts 4 and CSS Font Loading by establishing width/font-width as primary syntax while preserving stretch/font-stretch as aliases. With Firefox landing full descriptor aliasing and Safari already supporting the property, full cross-engine interoperability is largely achieved. The transition resolves long-standing Web Platform Test failures without breaking established typography code.

### Recommendations
- Actionable Advice: Maintain font-stretch and FontFace.stretch in production codebases or include both declarations sequentially for backwards compatibility with legacy browsers. Avoid completely refactoring existing font stacks to font-width until baseline platform telemetry shows comprehensive deployment across older client versions.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Twitter" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Twitter](https://twitter.com/fontfaceninja) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Oleg Andreev on X: "Variable-width digits in San Francisco font... Are there fixed-width digits too? Is it PITA to specify them in UI? https://t.co/JNxg8SBfKV" / X](https://twitter.com/oleganza/status/736565648906670080) — *by @oleganza, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [fuopy on Twitter: "Arduboy roguelike progress: Put in a variable-width font! Also, optimized with a touch of assembly. Zoom! #gamedev… "](https://twitter.com/fuopy/status/748428273336492036?lang=en) — *by @fuopy, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Sketch Tricks on Twitter: "Plugin Idea: shows all fonts/font weights used in a document, so when you work with Typekit/Google Fonts, you know which weights to include."](https://twitter.com/sketchtricks/status/601007709111111680?lang=en) — *by @sketchtricks, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Bryan Helmkamp on Twitter: "What's the best fixed-width programming font these days?"](https://twitter.com/brynary/status/576928469055078400?lang=en) — *by @brynary, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [John Resig on Twitter: ""Fixed width fonts shouldn't have ligatures. That's wrong.""](https://twitter.com/jeresig/status/873845324) — *by @jeresig, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Chris Harrelson Wed, 19 Aug 2026 07:33...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17203.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Michael Reeves Mon, 17 Aug 2026 17:44:44 -0700...
- [CSS Fonts Module Level 4](https://w3c.github.io/csswg-drafts/css-fonts-4) *(w3c.github.io)*
  > CSS Fonts Module Level 4 CSS Fonts Module Level 4 Editor’s Draft , 13 September 2026 More details about this document This version: https://drafts.csswg.org/css-fonts-4/ Latest published version: https://www.w3.org/TR/css-fonts-4/ Previous Versions: ...
- [\[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)*
  > Adoption expectation Feature is ... font face width descriptors within 12 months of reaching Web Platform baseline. Adoption plan Web Platform Tests (WPT) have been added to ensure cross-browser interoperability. MDN documentation will be updated to ...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17196.html) *(mail-archive.com)*
  > &gt; &gt; *Adoption expectation* &gt; Feature ... font face width &gt; descriptors within 12 months of reaching Web Platform baseline. &gt; &gt; *Adoption plan* &gt; Web Platform Tests (WPT) have been added to ensure cross-browser &gt; interoperabili...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17222.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; Adoption expectation ... font face width &gt;&gt; descriptors within 12 months of reaching Web Platform baseline. &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; Adoption plan &gt;&gt; &gt;&gt; Web Platform Tests (WPT) have be...
- [How To Use @font-face in CSS](https://elementor.com/blog/font-face-in-css) *(elementor.com · 2026-06-30T00:00:00)*
  > Variable fonts are a single font file that contains a wide range of stylistic variations. This means you can adjust font-weight, width, slant, and more—all on the fly!
- [CSS @font-face: The Complete Guide to Loading Custom Fonts Right — W3Tweaks](https://www.w3tweaks.com/css/css-font-face-explained) *(w3tweaks.com · 2026-06-03T19:50:00)*
  > <strong>The font-weight descriptor in your @font-face is set to a single value (400) instead of a range (100 900).</strong> With a single value, the browser only maps that one weight to the font file and uses font synthesis (fake bold, fake light) fo...
- [A Complete Guide to @font-face \| Zell Liew](https://zellwk.com/blog/font-face) *(zellwk.com · 2014-03-31T00:00:00)*
  > How to add custom fonts to your website with @font-face, from generating webfont files to organizing font-weight and font-style declarations.
- [CSS Custom Fonts](https://www.w3schools.com/css/css3_fonts.asp) *(w3schools.com)*
  > You must add another @font-face rule containing descriptors for bold text:
- [CSS @font-face Rule](https://www.w3schools.com/cssref/css3_pr_font-face_rule.php) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java and XML.
- [@font-face: The Complete Guide to Custom Web Fonts](https://fontfyi.com/blog/font-face-complete-guide) *(fontfyi.com · 2026-02-24T00:00:00)*
  > The @font-face rule is a CSS at-rule that maps a font name (that you define) to one or more font files. The browser uses this mapping to download and render custom typefaces. Here is the full syntax with all available descriptors:
- [css - How to use font-weight with font-face fonts? - Stack Overflow](https://stackoverflow.com/questions/10045859/how-to-use-font-weight-with-font-face-fonts) *(stackoverflow.com)*
  > Copy@font-face { font-family: &#x27;DroidSerif&#x27;; src: url(&#x27;DroidSerif-Regular-webfont.ttf&#x27;) format(&#x27;truetype&#x27;); font-weight: normal; font-style: normal; } @font-face { font-family: &#x27;DroidSerif&#x27;; src: url(&#x27;Droid...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17205.html) *(mail-archive.com)*
  > &gt; &gt;&gt; False &gt; &gt;&gt; &gt; &gt;&gt; Tracking bug ... in Chrome. &gt; &gt;&gt; &gt; &gt;&gt; Adoption expectation &gt; &gt;&gt; <strong>Feature is considered a best practice for configuring font face width &gt; descriptors within 12 months...
- [CSS font-stretch property](https://www.w3schools.com/cssref/css3_pr_font-stretch.php) *(w3schools.com)*
  > The font-stretch property <strong>allows you to make text narrower (condensed) or wider (expanded).</strong>
- [font-stretch \| Codrops](https://tympanus.net/codrops/css_reference/font-stretch) *(tympanus.net · 2016-12-11T00:00:00)*
  > Width mappings for a font family with condensed, normal and expanded width faces · If a font family does not have any condensed or expanded faces, the value of the font-stretch property will not have any effect, as the resulting font face chosen will...
- [CSS - font-stretch Property](https://www.tutorialspoint.com/css/css_font-stretch.htm) *(tutorialspoint.com)*
  > CSS font-stretch property <strong>makes text characters wider or narrower than the font&#x27;s default character width</strong>. The following examples explain the font-stretch property with different values.
- [font-stretch - Typography - Tailwind CSS](https://tailwindcss.com/docs/font-stretch) *(tailwindcss.com)*
  > <strong>Use the font-stretch-[&lt;value&gt;] syntax to set the font width based on a completely custom value</strong>: &lt;p class=&quot;font-stretch-[66.66%] ...&quot;&gt; Lorem ipsum dolor sit amet...&lt;/p&gt; For CSS variables, you can also use t...
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com · 2026-09-02T00:00:00)*
  > <strong>Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch</strong>. This aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications.
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-23T06:03:02)*
  > <strong>Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch</strong>. This aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications.
- [Intent to Ship: @font-face descriptor advance-override](https://groups.google.com/a/chromium.org/g/blink-dev/c/_BO41rwrrtI/m/TjPsQnC2AwAJ) *(groups.google.com)*
  > <strong>It can be used to match text width between two fonts, and hence reduce layout shift caused by web font loading</strong>. ... This feature is very similar to ascent-override, descent-override and line-gap-override that we shipped earlier (http...
- [Chrome and @font-face: It's here! - Paul Irish](https://www.paulirish.com/2009/chrome-and-font-face-a-summary) *(paulirish.com)*
  > Once you enable it, all @font-face stuff works just as you’d expect, including the bulletproof @font-face syntax [demo] and the Nice Web Type demos. Wait, so why is this wonderful feature disabled by default? Security review. Ian Fette, the program m...
- [font-stretch is not working for variable fonts \[40067872\]](https://issues.chromium.org/issues/40067872) *(issues.chromium.org)*
  > Sign in
- [\[DirectWrite\] Incorrect font-stretch for fonts with a "narrow ...](https://issues.chromium.org/issues/41081786) *(issues.chromium.org)*
  > Sign in
- [CSS font style matching fails to distinguish font-stretch ...](https://issues.chromium.org/issues/40428263) *(issues.chromium.org)*
  > Sign in
- [Implement font-optical-sizing for variable fonts \[40544256\]](https://bugs.chromium.org/p/chromium/issues/detail?id=773697) *(bugs.chromium.org)*
  > About Monorail User Guide Release Notes Feedback on Monorail Terms Privacy
- [Chrome ignores \`font-synthesis-weight:none\` and synthesizes bold for local ttc fonts, unlike Firefox \[420547341\] - Chromium](https://issues.chromium.org/issues/420547341) *(issues.chromium.org · 2025-05-27T00:00:00)*
  > &lt;!DOCTYPE html&gt; &lt;html lang=&quot;en&quot;&gt; &lt;head&gt; &lt;style&gt; body { font-family: sans-serif; font-size: 24px; padding: 20px; } .text-container { margin-bottom: 20px; border: 1px solid #ccc; padding: 10px; } .simsun { font-family:...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Chris Harrelson Wed, 19 Aug ...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17203.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Michael Reeves Mon, 17 Aug 2026 17:4...
- [csswg-drafts/css-fonts-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-fonts-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > csswg-drafts/css-fonts-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh yo...
- [CSS Fonts Module Level 4](https://w3c.github.io/csswg-drafts/css-fonts-4) *(w3c.github.io)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > CSS Fonts Module Level 4 CSS Fonts Module Level 4 Editor’s Draft , 13 September 2026 More details about this document This version: https://drafts.csswg.org/css-fonts-4/ Latest published version: https://www.w3.org/TR/css-fonts-4/ Previous ...
- [CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4) *(w3.org · 2026-09-13T11:34:25)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > https://www.w3.org/TR/css-fonts-4/ Editor&#x27;s Draft: https://<strong>drafts.csswg.org/css-fonts-4</strong>/ Previous Versions: https://www.w3.org/TR/2024/WD-css-fonts-4-20240201/ https://www.w3.org/TR/2026/WD-css-fonts-4-20260907/ Histor...
- [\[css-fonts-4\] Avoid font synthesis outside of variable range · Issue #7999 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7999) *(github.com · 2022-11-03T10:32:42)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > [css-fonts-4] Avoid font synthesis outside of variable range · Issue #7999 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab o...
- [\[css-fonts-4\] Which type of font family names are system font names? · Issue #9292 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9292) *(github.com)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > [css-fonts-4] Which type of font family names are system font names? · Issue #9292 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anoth...
- [\[css-fonts-4\] \[varfont\] Problem setting up a "4-style family" with variable fonts · Issue #1289 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1289) *(github.com · 2017-04-24T20:10:52)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > [css-fonts-4] [varfont] Problem setting up a "4-style family" with variable fonts · Issue #1289 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed ...
- [\[css-fonts\] font property descriptors for variable fonts · Issue #2485 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/2485) *(github.com · 2018-03-29T17:15:50)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > Re: https://<strong>drafts.csswg.org/css-fonts-4</strong>/#font-prop-desc According to my reading of the current spec text, in particular: If these descriptors are omitted, initial values are assumed. Where a singl...
- [\[css-fonts-4\] Clarify expectations about synthetic-bold vs glyph advances · Issue #14523 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14523) *(github.com · 2026-09-24T09:50:28)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > [css-fonts-4] Clarify expectations about synthetic-bold vs glyph advances#14523 · Copy link · jfkthame · opened · on Sep 24, 2026 · Issue body actions · A recently-added WPT test asserts that: &lt;title&gt;Synthetic bold must not change a r...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-fonts-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-fonts-4/Overview.bs) *(github.com)*
- [CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4) *(w3.org)*
- [\[css-fonts-4\] Avoid font synthesis outside of variable range · Issue #7999 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7999) *(github.com)*
- [\[css-fonts-4\] Which type of font family names are system font names? · Issue #9292 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9292) *(github.com)*
- [\[css-fonts-4\] \[varfont\] Problem setting up a "4-style family" with variable fonts · Issue #1289 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1289) *(github.com)*
- [\[css-fonts\] font property descriptors for variable fonts · Issue #2485 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/2485) *(github.com)*
- [\[css-fonts-4\] Clarify expectations about synthetic-bold vs glyph advances · Issue #14523 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14523) *(github.com)*
- [font-width - CSS - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-width) *(developer.mozilla.org)*
- [\[css-font-loading\] Which value wins if both \`stretch\` and \`width\` are provided? · Issue #14451 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14451) *(github.com)*
- [font-stretch CSS at-rule descriptor - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-stretch) *(developer.mozilla.org)*
- [font-stretch CSS at-rule descriptor - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-stretch) *(developer.mozilla.org)*
- [font-stretch CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch) *(developer.mozilla.org)*
- [font CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font) *(developer.mozilla.org)*
- [font-width](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/font-width) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 66 result(s) found across 12 planned queries — **40 verified relevant**
  - `"chromestatus.com/feature/5145402365050880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"drafts.csswg.org/css-fonts-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"FontFace width attribute and font-width descriptor" API` — *Core feature API query* (3 returned)
  - `"FontFace width attribute and font-width descriptor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"fontface.width" OR "font-width" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"FontFace width attribute and font-width descriptor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"FontFace width attribute and font-width descriptor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"FontFace" ("width" OR "stretch") "new FontFace" CSS Font Loading` — *Finds JavaScript code examples, MDN documentation, and WebIDL usage demonstrating the initialization and inspection of the width descriptor on FontFace.* (7 returned)
  - `"@font-face" "font-width" ("font-stretch" OR "stretch") CSS` — *Surfaces developer guides, tutorials, and CSS articles explaining the transition from font-stretch to the font-width descriptor in @font-face rules.* (8 returned)
  - `"font-width" ("FontFace" OR "@font-face") Chrome "Chromium" release OR intent` — *Identifies browser vendor announcements, release notes, and intent-to-ship threads regarding the alignment of Chromium with CSS Fonts 4 width descriptors.* (7 returned)
  - `"font-width" "font-stretch" (site:github.com/w3c/csswg-drafts OR site:bugs.chromium.org OR site:issues.chromium.org)` — *Retrieves specification debates, bug reports, and Web Platform Test (WPT) discussions tracking the alias support for font-width and stretch.* (6 returned)
  - `"font-width" CSS Fonts 4 variable fonts syntax example` — *Locates practical tutorials illustrating how the font-width descriptor controls stretch/width percentages in variable font implementations.* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 560 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5145402365050880)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5145402365050880)
- [Specification](https://drafts.csswg.org/css-fonts-4/#font-width-prop)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/543938492)
