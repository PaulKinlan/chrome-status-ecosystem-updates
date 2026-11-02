# FontFace width attribute and font-width descriptor

> **Report Week:** 2026-W45 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch. Aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications. Developers can now inspect or initialize font face widths using FontFace.width and CSS font-width interchangeably with stretch and font-stretch.

### Motivation

CSS Font Loading and CSS Fonts 4 define width as the primary FontFace descriptor attribute and @font-face descriptor, while retaining stretch as a legacy alias. Chromium previously ignored the width constructor member and font-width descriptor, causing Web Platform Tests to fail. Exposing width aligns Chromium with the updated specification.

## Ecosystem Status

- **Momentum:** High (+130 points since 2026-10-12; footprint 270 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The addition of the FontFace width attribute and the @font-face font-width descriptor aligns Chromium with the CSS Fonts 4 and CSS Font Loading specifications, formalizing width as the primary descriptor name while preserving stretch as a legacy alias. Following implementations in Safari and Firefox, Chrome's rollout achieves Baseline Newly Available status across all major browser engines and eliminates longstanding Web Platform Tests failures. The update represents an ergonomic, zero-friction spec modernization that fully maintains backwards compatibility with existing stylesheets.

### Recommendations
- Actionable Advice: Teams can comfortably transition to font-width in @font-face rules and FontFace constructors to adopt canonical modern standards. However, if your application targets legacy browser baselines released prior to 2024, continue to include font-stretch declarations or rely on CSS post-processors to supply both aliases.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`font-width`](https://webstatus.dev/features/font-width)*

- Share of tests passing in the web-features group `font-width` on [wpt.fyi](https://wpt.fyi/results?q=feature:font-width) (via webstatus.dev) — stable: Chrome 33.3% · Edge 33.3% · Firefox 100% · Safari 100%; experimental: Chrome 33.3% · Edge 33.3% · Firefox 100% · Safari 100%

## 📰 Ecosystem Blogs & Articles

- [web.dev](https://web.dev/blog/web-platform-09-2026) *(web.dev)*
  > \*\*Canonical Rename:\*\* \`font-width\` replaces \`font-stretch\` as the primary standard descriptor name for selecting normal, condensed, or expanded font faces, while \`font-stretch\` is retained as a legacy alias dev Blog)
- [Chrome 154  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > fontWidth\`, and CSS \`@font-face { font-width: ... }\` interchangeably with their legacy \`stretch\` counterparts \*\*Article Title:\*\* \*FontFace width attribute and font-width descriptor\* (Chrome Platform Status & Chrome 154 Release Notes)
- [google.com](https://groups.google.com/a/chromium.org/d/msgid/blink-dev/6a7d4c09.dc132f77.2e13a8.0e2f.GAE%40google.com) *(groups.google.com)*
  > Exposing \`width\` and \`font-width\` as aliases for \`stretch\` and \`font-stretch\` fixes WPT compliance without introducing breaking changes The release noted that this is a low-risk, spec-alignment change that brings Blink into full alignment with Gecko ...
- [web.dev](https://web.dev/blog/web-platform-09-2026?hl=pt_br) *(web.dev)*
  > width\` reached \*\*Baseline Newly Available\*\* status across all major browser engines (Chrome 154+, Firefox 155+, Safari 18.4+)
- [realityripple.com](https://udn.realityripple.com/docs/Web/CSS/@font-face/font-stretch) *(udn.realityripple.com)*
  > \*\*Improved Naming Consistency:\*\* Developers have welcomed the rename from \`stretch\` to \`width\` as it creates a clearer parallel with the OpenType variable font axis tag (\`wdth\`) and existing CSS font properties (\`font-weight\`, \`font-style\`, \`font-wid...
- [web.dev](https://web.dev/articles/variable-fonts) *(web.dev)*
  > \*\*Improved Naming Consistency:\*\* Developers have welcomed the rename from \`stretch\` to \`width\` as it creates a clearer parallel with the OpenType variable font axis tag (\`wdth\`) and existing CSS font properties (\`font-weight\`, \`font-style\`, \`font-wid...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Chris Harrelson Wed, 19 Aug 2026 07:33...
- [Microsoft Edge 154 web platform release notes (Sep. 24, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com · 2026-09-10T00:00:00)*
  > The width attribute in the FontFace API and the font-width property in @font-face descriptors are now &lt;strong&gt;aliases for the stretch attribute and font-stretch property&lt;/strong&gt;.
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17211.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; Adoption expectation &gt;&gt; Feature ... font face width descriptors within 12 months of reaching Web Platform baseline. &gt;&gt; &gt;&gt; Adoption plan &gt;&gt; Web Platform Tests (WPT) have been added to ensure cross-browser inte...
- [\[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)*
  > Adoption expectation Feature is ... font face width descriptors within 12 months of reaching Web Platform baseline. Adoption plan Web Platform Tests (WPT) have been added to ensure cross-browser interoperability. MDN documentation will be updated to ...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17196.html) *(mail-archive.com)*
  > &gt; &gt; \*Adoption expectation\* &gt; Feature ... font face width &gt; descriptors within 12 months of reaching Web Platform baseline. &gt; &gt; \*Adoption plan\* &gt; Web Platform Tests (WPT) have been added to ensure cross-browser &gt; interoperabili...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com · 2026-09-22T00:00:00)*
  > &lt;strong&gt;Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch&lt;/strong&gt;. Aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications.
- [Chrome 154 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com · 2026-09-02T00:00:00)*
  > &lt;strong&gt;Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch&lt;/strong&gt;. This aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications.
- [font-widthとは？font-stretchとの違いとChrome 154](https://techinnovateit.com/fontface-width-font-width-chrome-154) *(techinnovateit.com · 2026-10-21T00:00:00)*
  > CSSのfont-widthは、フォントの横幅を指定するCSSの新しい名前です。従来のfont-stretchは、同じ役割を持つ別名として残ります。Chrome 154は2026年9月22日にStable版になりました。この版で@font-faceのfont-width descriptorとFontFace.widthが加わりました。
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17222.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; False &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; Tracking ... in Chrome. &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; Adoption expectation &gt;&gt; &gt;&gt; &lt;strong&gt;Feature is considered a best practice for configuring font face width &gt;&gt; desc...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17203.html) *(mail-archive.com)*
  > &gt;&gt; False &gt;&gt; &gt;&gt; Tracking bug &gt;&gt; ... launch in &gt;&gt; Chrome. &gt;&gt; &gt;&gt; Adoption expectation &gt;&gt; &lt;strong&gt;Feature is considered a best practice for configuring font face width &gt;&gt; descriptors within 12 months ...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17205.html) *(mail-archive.com)*
  > &lt;strong&gt;Fixes failing Web Platform Tests and aligns Chromium with the &gt; updated CSS Font Loading and CSS Fonts 4 specifications&lt;/strong&gt;. &gt; &gt;&gt; &gt; &gt;&gt; Gecko: Shipped/Shipping ( &gt; https://wpt.fyi/results/css/css-font-loading/font-...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Chris Harrelson Wed, 19 Aug ...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/CSSFontFaceDescriptors) *(developer.mozilla.org)*
- [font-width CSS at-rule descriptor - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-width) *(developer.mozilla.org)*
- [font-width CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-width) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/font-width) *(developer.mozilla.org)*
- [edge-developer/microsoft-edge/web-platform/release-notes/154.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/154.md) *(github.com)*
- [@font-face CSS at-rule - CSS \| MDN - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face) *(developer.mozilla.org)*
- [\[css-font-loading-3\] Add support for the new \`width\` terminology and alias the old \`stretch\` #14196 by dcrescalante · Pull Request #14197 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/pull/14197) *(github.com)*
- [\[css-fonts-4\] font-stretch is unfortunately named · Issue #551 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/551) *(github.com)*
- [\[css-font-loading\] Which value wins if both \`stretch\` and \`width\` are provided? · Issue #14451 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/14451) *(github.com)*
- [1911075 - Rename font-stretch to font-width, and make the old property name an alias](https://bugzilla.mozilla.org/show_bug.cgi?id=1911075) *(bugzilla.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 68 result(s) found across 11 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/5145402365050880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-fonts-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"FontFace width attribute and font-width descriptor" API` — *Core feature API query* (8 returned)
  - `"FontFace width attribute and font-width descriptor" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"fontface.width" OR "font-width" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"FontFace width attribute and font-width descriptor" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"FontFace width attribute and font-width descriptor" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"font-width" "@font-face" OR "FontFace" "font-stretch" (tutorial OR guide OR blog)` — *Developer articles and tutorials explaining the usage of the modern font-width descriptor and FontFace.width alias alongside font-stretch.* (8 returned)
  - `"new FontFace" ("width:" OR "width :") -site:spec.whatwg.org -site:w3.org` — *Practical JavaScript code examples showing how developers instantiate the FontFace API using the width descriptor.* (8 returned)
  - `"font-width descriptor" OR "FontFace width" ("intent to ship" OR "intent to prototype" OR "Chromium" OR "release notes")` — *Engine release notes, Intent to Ship announcements, and browser compatibility updates tracking font-width adoption.* (8 returned)
  - `"font-width" ("font-stretch" OR "stretch") (site:github.com/w3c/csswg-drafts OR site:issues.chromium.org)` — *CSS Working Group deliberations and Chromium issue tracking debates about standardizing width over the legacy stretch descriptor.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "font-width", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "font-width": Chrome 33.3% passing (stable)*
- **Sources cited by the AI synthesis:** 8 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5145402365050880)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5145402365050880)
- [Specification](https://drafts.csswg.org/css-fonts-4/#font-width-prop)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/543938492)
