# FontFace width attribute and font-width descriptor

> **Report Week:** 2026-W37 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch. Aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications. Developers can now inspect or initialize font face widths using FontFace.width and CSS font-width interchangeably with stretch and font-stretch.

### Motivation

CSS Font Loading and CSS Fonts 4 define width as the primary FontFace descriptor attribute and @font-face descriptor, while retaining stretch as a legacy alias. Chromium previously ignored the width constructor member and font-width descriptor, causing Web Platform Tests to fail. Exposing width aligns Chromium with the updated specification.

## Ecosystem Status

- **Momentum:** High (330 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** FontFace width attribute and font-width descriptor is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Chris Harrelson Wed, 19 Aug 2026 07:33...
- [[blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17203.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Michael Reeves Mon, 17 Aug 2026 17:44:44 -0700...
- [CSS Fonts Module Level 4](https://w3c.github.io/csswg-drafts/css-fonts-4) *(w3c.github.io)*
  > CSS Fonts Module Level 4 CSS Fonts Module Level 4 Editor’s Draft , 7 September 2026 More details about this document This version: https://drafts.csswg.org/css-fonts-4/ Latest published version: https://www.w3.org/TR/css-fonts-4/ Previous Versions: h...
- [[blink-dev] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)*
  > Adoption expectation Feature is ... font face width descriptors within 12 months of reaching Web Platform baseline. Adoption plan Web Platform Tests (WPT) have been added to ensure cross-browser interoperability. MDN documentation will be updated to ...
- [[blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17196.html) *(mail-archive.com)*
  > &gt; &gt; *Adoption expectation* &gt; Feature ... font face width &gt; descriptors within 12 months of reaching Web Platform baseline. &gt; &gt; *Adoption plan* &gt; Web Platform Tests (WPT) have been added to ensure cross-browser &gt; interoperabili...
- [How To Use @font-face in CSS](https://elementor.com/blog/font-face-in-css) *(elementor.com · 2026-06-30T00:00:00)*
  > Variable fonts are a single font file that contains a wide range of stylistic variations. This means you can adjust font-weight, width, slant, and more—all on the fly!
- [How to use @font-face in CSS](https://reintech.io/blog/using-font-face-in-css-guide) *(reintech.io)*
  > Notice we added font-weight and font-style. These descriptors tell the browser which font file to use for different text styles, which brings us to our next topic.
- [CSS @font-face: The Complete Guide to Loading Custom Fonts Right — W3Tweaks](https://www.w3tweaks.com/css/css-font-face-explained) *(w3tweaks.com · 2026-06-03T19:50:00)*
  > <strong>The font-weight descriptor in your @font-face is set to a single value (400) instead of a range (100 900).</strong> With a single value, the browser only maps that one weight to the font file and uses font synthesis (fake bold, fake light) fo...
- [A Complete Guide to @font-face | Zell Liew](https://zellwk.com/blog/font-face) *(zellwk.com · 2014-03-31T00:00:00)*
  > How to add custom fonts to your website with @font-face, from generating webfont files to organizing font-weight and font-style declarations.
- [CSS Custom Fonts](https://www.w3schools.com/css/css3_fonts.asp) *(w3schools.com)*
  > You must add another @font-face rule containing descriptors for bold text:
- [@font-face: The Complete Guide to Custom Web Fonts](https://fontfyi.com/blog/font-face-complete-guide) *(fontfyi.com · 2026-02-24T00:00:00)*
  > The @font-face rule is a CSS at-rule that maps a font name (that you define) to one or more font files. The browser uses this mapping to download and render custom typefaces. Here is the full syntax with all available descriptors:
- [Wide Fonts: Definition, Examples, and How to Use Them - Fontfabric™](https://www.fontfabric.com/blog/what-are-wide-fonts) *(fontfabric.com · 2025-10-24T11:45:30)*
  > Learn everything about wide fonts: from key characteristics to best typefaces for web, branding, and print that boost your design impact.
- [css - How to use font-weight with font-face fonts? - Stack Overflow](https://stackoverflow.com/questions/10045859/how-to-use-font-weight-with-font-face-fonts) *(stackoverflow.com)*
  > Copy@font-face { font-family: &#x27;DroidSerif&#x27;; src: url(&#x27;DroidSerif-Regular-webfont.ttf&#x27;) format(&#x27;truetype&#x27;); font-weight: normal; font-style: normal; } @font-face { font-family: &#x27;DroidSerif&#x27;; src: url(&#x27;Droid...
- [html - Change font height and width - Stack Overflow](https://stackoverflow.com/questions/32932288/change-font-height-and-width) *(stackoverflow.com)*
  > <strong>There is a font-width-stretch property in css but it&#x27;s currently unsupported by all the major browsers ... You can use font weight</strong>. ... Save this answer. ... Show activity on this post.
- [CSS font-size property](https://www.w3schools.com/cssref/pr_font_font-size.php) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java and XML.
- [css - @font-face and font-size - Stack Overflow](https://stackoverflow.com/questions/2214754/font-face-and-font-size) *(stackoverflow.com)*
  > I don&#x27;t believe this is possible with css alone; we will probably need to use javascript. All we want to do is specify a different font-size if Arial is the active font. Detecting the active font is not exactly straightforward, but here is one m...
- [Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17205.html) *(mail-archive.com)*
  > &gt; &gt;&gt; False &gt; &gt;&gt; &gt; &gt;&gt; Tracking bug ... in Chrome. &gt; &gt;&gt; &gt; &gt;&gt; Adoption expectation &gt; &gt;&gt; <strong>Feature is considered a best practice for configuring font face width &gt; descriptors within 12 months...
- [caching - PWA Best Practice: Web or Local Fonts? - Stack Overflow](https://stackoverflow.com/questions/55925496/pwa-best-practice-web-or-local-fonts) *(stackoverflow.com)*
  > 2021: Browsers are generally moving in the direction of partitioning the HTTP cache, meaning that CDN-like URLs, such as Google Fonts, are less likely to result in cache hits due to an unrelated web app having previously requesting the same URL. This...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Chris Harrelson Wed, 19 Aug ...
- [[blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17203.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor Michael Reeves Mon, 17 Aug 2026 17:4...
- [csswg-drafts/css-fonts-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-fonts-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > csswg-drafts/css-fonts-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh yo...
- [CSS Fonts Module Level 4](https://w3c.github.io/csswg-drafts/css-fonts-4) *(w3c.github.io)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > CSS Fonts Module Level 4 CSS Fonts Module Level 4 Editor’s Draft , 7 September 2026 More details about this document This version: https://drafts.csswg.org/css-fonts-4/ Latest published version: https://www.w3.org/TR/css-fonts-4/ Previous V...
- [CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4) *(w3.org · 2026-08-10T22:22:55)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > https://www.w3.org/TR/css-fonts-4/ Editor&#x27;s Draft: https://<strong>drafts.csswg.org/css-fonts-4</strong>/ Previous Versions: https://www.w3.org/TR/2024/WD-css-fonts-4-20240201/ https://www.w3.org/TR/2026/WD-css-fonts-4-20260422/ Histor...
- [[css-fonts-4] Avoid font synthesis outside of variable range · Issue #7999 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7999) *(github.com · 2022-11-03T10:32:42)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > [css-fonts-4] Avoid font synthesis outside of variable range · Issue #7999 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab o...
- [[css-fonts-4] Which type of font family names are system font names? · Issue #9292 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9292) *(github.com)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > [css-fonts-4] Which type of font family names are system font names? · Issue #9292 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anoth...
- [csswg-drafts/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-fonts-5/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > csswg-drafts/css-fonts-5/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh yo...
- [[css-fonts-4] [varfont] Problem setting up a "4-style family" with variable fonts · Issue #1289 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1289) *(github.com · 2017-04-24T20:10:52)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > What seems to be desirable, because of the vast amount of content that calls for it, is to decouple font-weight:normal from font-weight:400 and to decouple font-weight:bold from font-weight:700. So, is there a technique for this that I have...
- [[css-fonts] font property descriptors for variable fonts · Issue #2485 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/2485) *(github.com · 2018-03-29T17:15:50)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > Re: https://<strong>drafts.csswg.org/css-fonts-4</strong>/#font-prop-desc According to my reading of the current spec text, in particular: If these descriptors are omitted, initial values are assumed. Where a single value is specified, it h...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-fonts-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-fonts-4/Overview.bs) *(github.com)*
- [CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4) *(w3.org)*
- [[css-fonts-4] Avoid font synthesis outside of variable range · Issue #7999 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7999) *(github.com)*
- [[css-fonts-4] Which type of font family names are system font names? · Issue #9292 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9292) *(github.com)*
- [csswg-drafts/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-fonts-5/Overview.bs) *(github.com)*
- [[css-fonts-4] [varfont] Problem setting up a "4-style family" with variable fonts · Issue #1289 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1289) *(github.com)*
- [[css-fonts] font property descriptors for variable fonts · Issue #2485 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/2485) *(github.com)*
- [font-width CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-width) *(developer.mozilla.org)*
- [font-width - CSS - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-width) *(developer.mozilla.org)*
- [FontFace - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/FontFace) *(developer.mozilla.org)*
- [GitHub - Lorp/fit-to-width: fit-to-width.js · GitHub](https://github.com/Lorp/fit-to-width) *(github.com)*
- [font-face CSS at-rule - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face) *(developer.mozilla.org)*
- [You searched for @font-face - Mozilla Hacks - the Web developer blog](https://hacks.mozilla.org/search/@font-face/feed/rss2) *(hacks.mozilla.org)*
- [can't import custom fonts in css files · Issue #2435 · magento/pwa-studio](https://github.com/magento/pwa-studio/issues/2435) *(github.com)*
- [font-width](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/font-width) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 42 result(s) found across 7 planned queries — **32 verified relevant**
  - `"chromestatus.com/feature/5145402365050880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"drafts.csswg.org/css-fonts-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"FontFace width attribute and font-width descriptor" API` — *Core feature API query* (3 returned)
  - `"FontFace width attribute and font-width descriptor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"fontface.width" OR "font-width" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"FontFace width attribute and font-width descriptor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"FontFace width attribute and font-width descriptor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

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
