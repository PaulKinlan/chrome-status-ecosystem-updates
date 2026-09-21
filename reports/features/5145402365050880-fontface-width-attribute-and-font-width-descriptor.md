# FontFace width attribute and font-width descriptor

> **Report Week:** 2026-W39 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch. Aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications. Developers can now inspect or initialize font face widths using FontFace.width and CSS font-width interchangeably with stretch and font-stretch.

### Motivation

CSS Font Loading and CSS Fonts 4 define width as the primary FontFace descriptor attribute and @font-face descriptor, while retaining stretch as a legacy alias. Chromium previously ignored the width constructor member and font-width descriptor, causing Web Platform Tests to fail. Exposing width aligns Chromium with the updated specification.

## Ecosystem Status

- **Momentum:** High (550 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** FontFace width attribute and font-width descriptor is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Packages & Polyfills

- [roboto-fontface](https://www.npmjs.com/package/roboto-fontface) `v0.10.0` — A simple package providing the Roboto fontface.
- [postcss-discard-unused](https://www.npmjs.com/package/postcss-discard-unused) `v9.0.3` — Discard unused counter styles, keyframes and fonts.

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Chris Harrelson Wed, 19 Aug 2026 07:33...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17203.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Michael Reeves Mon, 17 Aug 2026 17:44:44 -0700...
- [\[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) [blink-dev] Intent to Ship: FontFace width attribute and font-width descriptor Chromestatus Wed, 12 Aug 2026 21:46:10 -0700 Contact e...
- [CSS Fonts Module Level 4](https://w3c.github.io/csswg-drafts/css-fonts-4) *(w3c.github.io)*
  > CSS Fonts Module Level 4 CSS Fonts Module Level 4 Editor’s Draft , 13 September 2026 More details about this document This version: https://drafts.csswg.org/css-fonts-4/ Latest published version: https://www.w3.org/TR/css-fonts-4/ Previous Versions: ...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17196.html) *(mail-archive.com)*
  > &gt; &gt; *Adoption expectation* &gt; Feature ... font face width &gt; descriptors within 12 months of reaching Web Platform baseline. &gt; &gt; *Adoption plan* &gt; Web Platform Tests (WPT) have been added to ensure cross-browser &gt; interoperabili...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17205.html) *(mail-archive.com)*
  > &gt; &gt;&gt; &gt; &gt;&gt; Adoption expectation ... font face width &gt; descriptors within 12 months of reaching Web Platform baseline. &gt; &gt;&gt; &gt; &gt;&gt; Adoption plan &gt; &gt;&gt; Web Platform Tests (WPT) have been added to ensure cross...
- [How To Use @font-face in CSS](https://elementor.com/blog/font-face-in-css) *(elementor.com · 2026-06-30T00:00:00)*
  > Variable fonts are a single font file that contains a wide range of stylistic variations. This means you can adjust font-weight, width, slant, and more—all on the fly!
- [How to use @font-face in CSS](https://reintech.io/blog/using-font-face-in-css-guide) *(reintech.io)*
  > Notice we added font-weight and font-style. These descriptors tell the browser which font file to use for different text styles, which brings us to our next topic.
- [CSS @font-face: The Complete Guide to Loading Custom Fonts Right — W3Tweaks](https://www.w3tweaks.com/css/css-font-face-explained) *(w3tweaks.com · 2026-06-03T19:50:00)*
  > <strong>The font-weight descriptor in your @font-face is set to a single value (400) instead of a range (100 900).</strong> With a single value, the browser only maps that one weight to the font file and uses font synthesis (fake bold, fake light) fo...
- [A Complete Guide to @font-face \| Zell Liew](https://zellwk.com/blog/font-face) *(zellwk.com · 2014-03-31T00:00:00)*
  > How to add custom fonts to your website with @font-face, from generating webfont files to organizing font-weight and font-style declarations.
- [CSS @font-face Rule](https://www.w3schools.com/cssref/css3_pr_font-face_rule.php) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java and XML.
- [CSS Custom Fonts](https://www.w3schools.com/css/css3_fonts.asp) *(w3schools.com)*
  > You must add another @font-face rule containing descriptors for bold text:
- [Wide Fonts: Definition, Examples, and How to Use Them - Fontfabric™](https://www.fontfabric.com/blog/what-are-wide-fonts) *(fontfabric.com · 2025-10-24T11:45:30)*
  > Learn everything about wide fonts: from key characteristics to best typefaces for web, branding, and print that boost your design impact.
- [@font-face: The Complete Guide to Custom Web Fonts](https://fontfyi.com/blog/font-face-complete-guide) *(fontfyi.com · 2026-02-24T00:00:00)*
  > The @font-face rule is a CSS at-rule that maps a font name (that you define) to one or more font files. The browser uses this mapping to download and render custom typefaces. Here is the full syntax with all available descriptors:
- [html - Change font height and width - Stack Overflow](https://stackoverflow.com/questions/32932288/change-font-height-and-width) *(stackoverflow.com)*
  > <strong>There is a font-width-stretch property in css but it&#x27;s currently unsupported by all the major browsers ... You can use font weight</strong>. ... Save this answer. ... Show activity on this post.
- [css - @font-face and font-size - Stack Overflow](https://stackoverflow.com/questions/2214754/font-face-and-font-size) *(stackoverflow.com)*
  > I don&#x27;t believe this is possible with css alone; we will probably need to use javascript. All we want to do is specify a different font-size if Arial is the active font. Detecting the active font is not exactly straightforward, but here is one m...
- [textbox - Calculate text width with JavaScript - Stack Overflow](https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript) *(stackoverflow.com)*
  > I&#x27;ve wrapped a couple of other methods around Domi&#x27;s answer so that I can - Get a (potentially) truncated string with ellipsis (...) at the end if it won&#x27;t fit in a given space (as much of the string as possible will be used) - Pass in...
- [CSS Font Stretch (With Examples)](https://www.programiz.com/css/font-stretch) *(programiz.com)*
  > <strong>CSS font-stretch property is used to widen or narrow the text on a webpage</strong>. For example, body { font-family: Arial, sans-serif; } p.normal { font-stretch: normal; } p.condensed { font-stretch: condensed; } ... Here, font-stretch: con...
- [CSS Font-Stretch Adjust Text Width Easily - Tillitsdone](https://tillitsdone.com/blogs/css-property-font-stretch) *(tillitsdone.com)*
  > <strong>Discover the CSS font-stretch property to adjust text width</strong>. Use keywords like normal, condensed, or expanded, and percentages from 50% to 200%.
- [CSS - font-stretch Property](https://www.tutorialspoint.com/css/css_font-stretch.htm) *(tutorialspoint.com)*
  > Python TechnologiesDatabasesComputer ... Tutorials View All Categories ... <strong>CSS font-stretch property makes text characters wider or narrower than the font&#x27;s default character width</strong>....
- [CSS font-stretch property](https://www.w3schools.com/cssref/css3_pr_font-stretch.php) *(w3schools.com)*
  > <strong>The font-stretch property allows you to make text narrower (condensed) or wider (expanded).</strong>
- [CSS font-stretch property \| Tutorial Reference](https://tutorialreference.com/css/tutorial/css-font-stretch) *(tutorialreference.com)*
  > <strong>The font-stretch property in CSS allows us to select a normal, expanded, or condensed face from the font&#x27;s family</strong>. This property sets the text wider or narrower compare to the default width of the font. It will not work on any f...
- [CSS @font-face - font-stretch](https://www.tutorialspoint.com/css/css_font-face-font-stretch.htm) *(tutorialspoint.com)*
  > /* single values */ font-stretch = &quot;normal&quot;; font-stretch = &quot;semi-condensed&quot;; font-stretch = &quot;condensed&quot;; font-stretch = &quot;extra-condensed&quot;; font-stretch = &quot;ultra-condensed&quot;; font-stretch = &quot;semi-...
- [Set the font stretch of an element with CSS](https://www.tutorialspoint.com/article/set-the-font-stretch-of-an-element-with-css) *(tutorialspoint.com · 2020-01-30T00:00:00)*
  > If no variant exists, the browser uses the closest available width · Values like wider and narrower are relative to the parent element · <strong>The font-stretch property allows you to control font width when appropriate variants are available</stron...
- [CSS font-stretch property - W3Schools](https://www.w3schools.com.cach3.com/cssref/css3_pr_font-stretch.asp.html) *(w3schools.com.cach3.com)*
  > font-stretch: <strong>ultra-condensed|extra-condensed|condensed|semi-condensed|normal|semi-expanded|expanded|extra-expanded|ultra-expanded|initial|inherit;</strong> ... Tabs Dropdowns Accordions Side Navigation Top Navigation Modal Boxes Progress Bar...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17211.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; Rollout plan &gt;&gt; Will ship ...g/issues/543938492 &gt;&gt; &gt;&gt; Measurement &gt;&gt; None &gt;&gt; &gt;&gt; Availability expectation &gt;&gt; <strong>Feature is available on Web Platform Baseline within 12 months of launch i...
- [Intent to Ship: @font-face descriptor advance-override](https://groups.google.com/a/chromium.org/g/blink-dev/c/_BO41rwrrtI/m/TjPsQnC2AwAJ) *(groups.google.com)*
  > <strong>It can be used to match text width between two fonts, and hence reduce layout shift caused by web font loading</strong>. ... This feature is very similar to ascent-override, descent-override and line-gap-override that we shipped earlier (http...
- [Accurate width of element when using font-face in Chromium](https://stackoverflow.com/questions/4701892/accurate-width-of-element-when-using-font-face-in-chromium) *(stackoverflow.com · 2011-06-26T00:00:00)*
  > In chrome 8 on my machine your bug is not reproducible - both read as <strong>width=143.</strong>

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Chris Harrelson Wed, 19 Aug ...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17203.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Michael Reeves Mon, 17 Aug 2026 17:4...
- [\[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > [blink-dev] Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) [blink-dev] Intent to Ship: FontFace width attribute and font-width descriptor Chromestatus Wed, 12 Aug 2026 21:46:10 -0700...
- [csswg-drafts/css-fonts-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-fonts-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > csswg-drafts/css-fonts-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh yo...
- [CSS Fonts Module Level 4](https://w3c.github.io/csswg-drafts/css-fonts-4) *(w3c.github.io)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > CSS Fonts Module Level 4 CSS Fonts Module Level 4 Editor’s Draft , 13 September 2026 More details about this document This version: https://drafts.csswg.org/css-fonts-4/ Latest published version: https://www.w3.org/TR/css-fonts-4/ Previous ...
- [CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4) *(w3.org · 2026-09-13T11:34:25)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > https://www.w3.org/TR/css-fonts-4/ Editor&#x27;s Draft: https://<strong>drafts.csswg.org/css-fonts-4</strong>/ Previous Versions: https://www.w3.org/TR/2024/WD-css-fonts-4-20240201/ https://www.w3.org/TR/2026/WD-css-fonts-4-20260907/ Histor...
- [\[css-fonts\] Problems with "font-affecting properties" · Issue #14396 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14396) *(github.com · 2026-08-27T11:36:50)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > [css-fonts] Problems with "font-affecting properties" · Issue #14396 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wind...
- [\[css-fonts-4\] Avoid font synthesis outside of variable range · Issue #7999 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7999) *(github.com · 2022-11-03T10:32:42)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > [css-fonts-4] Avoid font synthesis outside of variable range · Issue #7999 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab o...
- [\[css-fonts-4\] Which type of font family names are system font names? · Issue #9292 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9292) *(github.com)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > Are they generic family names? There are two types of font family names: [...] [...] https://<strong>drafts.csswg.org/css-fonts-4</strong>/#font-family-prop Or a separate type? About # in the prelude of @font-f...
- [\[css-fonts-4\] \[varfont\] Problem setting up a "4-style family" with variable fonts · Issue #1289 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1289) *(github.com · 2017-04-24T20:10:52)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > What seems to be desirable, because of the vast amount of content that calls for it, is to decouple font-weight:normal from font-weight:400 and to decouple font-weight:bold from font-weight:700. So, is there a technique for this that I have...
- [\[css-fonts\] font property descriptors for variable fonts · Issue #2485 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/2485) *(github.com · 2018-03-29T17:15:50)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > Re: https://<strong>drafts.csswg.org/css-fonts-4</strong>/#font-prop-desc According to my reading of the current spec text, in particular: If these descriptors are omitted, initial values are assumed. Where a single value is specified, it h...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-fonts-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-fonts-4/Overview.bs) *(github.com)*
- [CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4) *(w3.org)*
- [\[css-fonts\] Problems with "font-affecting properties" · Issue #14396 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14396) *(github.com)*
- [\[css-fonts-4\] Avoid font synthesis outside of variable range · Issue #7999 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7999) *(github.com)*
- [\[css-fonts-4\] Which type of font family names are system font names? · Issue #9292 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9292) *(github.com)*
- [\[css-fonts-4\] \[varfont\] Problem setting up a "4-style family" with variable fonts · Issue #1289 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1289) *(github.com)*
- [\[css-fonts\] font property descriptors for variable fonts · Issue #2485 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/2485) *(github.com)*
- [font-width CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-width) *(developer.mozilla.org)*
- [font-width - CSS - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-width) *(developer.mozilla.org)*
- [FontFace - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/FontFace) *(developer.mozilla.org)*
- [GitHub - Lorp/fit-to-width: fit-to-width.js · GitHub](https://github.com/Lorp/fit-to-width) *(github.com)*
- [You searched for @font-face - Mozilla Hacks - the Web developer blog](https://hacks.mozilla.org/search/@font-face/feed/rss2) *(hacks.mozilla.org)*
- [can't import custom fonts in css files · Issue #2435 · magento/pwa-studio](https://github.com/magento/pwa-studio/issues/2435) *(github.com)*
- [CSSFontFaceDescriptors - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSSFontFaceDescriptors) *(developer.mozilla.org)*
- [font-stretch CSS at-rule descriptor - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-stretch) *(developer.mozilla.org)*
- [CSS Fonts Module Level 5](https://www.w3.org/TR/css-fonts-5) *(w3.org)*
- [FA5: Webfont @Font-Face conflict problem · Issue #11876 · FortAwesome/Font-Awesome](https://github.com/FortAwesome/Font-Awesome/issues/11876) *(github.com)*
- [@font-face font-weight, font-style, and font-stretch descriptors are parsed away and never applied · Issue #1246 · jwmcglynn/donner](https://github.com/jwmcglynn/donner/issues/1246) *(github.com)*
- [@font-face fonts showing unexpected font-weight & margins/paddings · Issue #1006 · h5bp/html5-boilerplate](https://github.com/h5bp/html5-boilerplate/issues/1006) *(github.com)*
- [Cannot use 'new FontFace()' object on cra · Issue #10473 · facebook/create-react-app](https://github.com/facebook/create-react-app/issues/10473) *(github.com)*
- [Wrong local font file being referenced by @font-face generated from theme.json · Issue #42190 · WordPress/gutenberg](https://github.com/WordPress/gutenberg/issues/42190) *(github.com)*
- [\[Bug\]: Custom Font using @font-face not working on Android · Issue #295 · lynx-family/lynx](https://github.com/lynx-family/lynx/issues/295) *(github.com)*
- [Multiple @font-face rules · Issue #2435 · wkhtmltopdf/wkhtmltopdf](https://github.com/wkhtmltopdf/wkhtmltopdf/issues/2435) *(github.com)*
- [Font-face problem · Issue #13343 · ariya/phantomjs](https://github.com/ariya/phantomjs/issues/13343) *(github.com)*
- [font-width](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/font-width) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 64 result(s) found across 11 planned queries — **52 verified relevant**
  - `"chromestatus.com/feature/5145402365050880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"drafts.csswg.org/css-fonts-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"FontFace width attribute and font-width descriptor" API` — *Core feature API query* (3 returned)
  - `"FontFace width attribute and font-width descriptor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"fontface.width" OR "font-width" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"FontFace width attribute and font-width descriptor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"FontFace width attribute and font-width descriptor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"FontFace" "font-width" OR "width" descriptor javascript css example` — *Find code snippets and WebIDL usage demonstrating initialization and inspection of the FontFace width attribute and @font-face font-width descriptor.* (8 returned)
  - `"font-width" "font-stretch" "CSS Fonts 4" OR "CSS Font Loading" blog OR tutorial` — *Discover developer tutorials and articles explaining the transition from font-stretch to font-width in modern CSS font specifications.* (8 returned)
  - `"FontFace" ("font-width" OR "width") ("Intent to Ship" OR "Chrome Platform Status" OR "Chromium")` — *Track browser vendor announcements, release updates, and Intent to Ship documentation for Chromium alignment.* (6 returned)
  - `"font-width" ("FontFace" OR "@font-face") issue OR bug site:github.com OR site:bugs.chromium.org` — *Surface Web Platform Tests, browser bug reports, and developer discussions regarding CSS font width descriptor interop and aliasing.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **2 verified relevant**
- **Web Platform Tests (wpt.fyi):** 559 item(s) inspected

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
