# CSS `text-fit` property

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

Scales the font size of text nodes to perfectly fit the width of its containing box.

This property allows developers to ensure headlines or dynamic content fill the available horizontal space without manual font-size calculations or complex JavaScript workarounds. It provides a robust, CSS-native solution for responsive typography that maintains visual alignment across different screen sizes and varying text lengths.

### Motivation

In text layout, web authors want to align the lines with both ends of the container, but web authors want to achieve this by adjusting the font size instead of justification. Without this feature, the only option is to manually adjust the font size through trial and error or using JavaScript.

Web authors want to fit the text into a container of a specific size without it overflowing. For example, if the container width is narrow and a long word inevitably overflows the container, web authors want to reduce the font size to make it fit within the container. Web authors want to avoid text overflowing the container due to unexpectedly long words used in text translations or when end-users provide arbitrary text.

## Ecosystem Status

- **Momentum:** High (170 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** CSS `text-fit` property is currently Enabled by default in Chrome 150. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "cc @jfkthame too :)..."
- Standards Activity (W3C TAG): Latest discussion from @matatk: "Hi @tkent-google, thanks for your review request, and sorry for the long response time. We acknowledge the aesthetic use case for this feature. We hav..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [[css-text] `text-fit` property](https://github.com/WebKit/standards-positions/issues/637) [open]
- **Mozilla:** [[css-text] `text-fit` property](https://github.com/mozilla/standards-positions/issues/1377) [open]
- **W3C TAG:** [Other Spec Review: [css-text] `text-fit` property](https://github.com/w3ctag/design-reviews/issues/1208) [open]

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: CSS fit-width text](https://groups.google.com/a/chromium.org/g/blink-dev/c/I3aG24t4bwI/m/xLBLyAJKDwAJ) *(groups.google.com)*
  > Intent to Prototype: CSS fit-width text Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: CSS fit-width text 705 views Skip to firs...
- [Intent to Ship: CSS `text-fit` property](https://groups.google.com/a/chromium.org/g/blink-dev/c/55BYmN6RZtE) *(groups.google.com · 2026-05-07T16:40:06)*
  > Intent to Ship: CSS `text-fit` property Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: CSS `text-fit` property 450 views Skip to firs...
- [[blink-dev] Intent to Ship: CSS `text-fit` property](http://www.mail-archive.com/blink-dev@chromium.org/msg16473.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: CSS `text-fit` property Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS `text-fit` property TAMURA, Kent Wed, 06 May 2026 22:27:01 -0700 *Contact emails* [email&#160;protected] , [email&#160;protected...
- [Intent to Prototype: CSS fit-width text](https://groups.google.com/a/chromium.org/g/blink-dev/c/I3aG24t4bwI) *(groups.google.com)*
  > Intent to Prototype: CSS fit-width text Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: CSS fit-width text 705 views Skip to firs...
- [The CSS text-fit Property: Auto-Size Text to Fit (2026)](https://attowp.com/frontend-development/css-text-fit-property) *(attowp.com · 2026-07-14T05:27:03)*
  > The CSS text-fit Property: Auto-Size Text to Fit (2026) Skip to content CMS Platforms Community & Interviews Freelancing & Business Monetization Trends & News Security & Performance CSS Frameworks The CSS text-fit Property: Auto-Size Text to Fit Any ...
- [Setting Line Length in CSS (and Fitting Text to a Container) | CSS-Tricks](https://css-tricks.com/setting-line-length-in-css-and-fitting-text-to-a-container) *(css-tricks.com · 2025-07-14T12:38:26)*
  > Setting Line Length in CSS (and Fitting Text to a Container) | CSS-Tricks Skip to main content CSS-Tricks Since 2007 typography Setting Line Length in CSS (and Fitting Text to a Container) Daniel Schwarz on Jul 14, 2025 First, what is line length? Li...
- [Fit-to-Width Text: A New Technique](https://kizu.dev/fit-to-width) *(kizu.dev · 2024-07-19T00:00:00)*
  > Fit-to-Width Text: A New Technique Fit-to-Width Text: A New Technique Registered custom properties are now available in all modern browsers. Using some pre-existing techniques based on them and complex container query length units, I solved a years-l...
- [【CSS】JSもclamp()も不要に。文字サイズをコンテナ幅にフィットさせるtext-fitプロパティの使い方](https://blanche-toile.com/web/css-text-fit-property) *(blanche-toile.com · 2026-07-06T12:10:15)*
  > .banner-wrap { font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; padding: 20px; } /* 1つにまとまったバナー本体 */ .banner-card { background: linear-gradient(135deg, #1e293b, #0f172a); col...
- [【CSS】text-fitプロパティでテキストをコンテナ幅にフィットさせる！！ #HTML - Qiita](https://qiita.com/degudegu2510/items/25bbc55b846c3a402661) *(qiita.com · 2026-06-13T12:14:06)*
  > このプロパティを使えば、<strong>テキストのフォントサイズを自動的にスケーリングし、包含ボックスの幅に完全にフィットさせることが CSS だけで実現できるようになります</strong>。 · ...
- [Re: [blink-dev] Re: Intent to Ship: CSS `text-fit` property](http://www.mail-archive.com/blink-dev@chromium.org/msg16512.html) *(mail-archive.com)*
  > /Gecko/: No signal (https://github.com/mozilla/standards-positions/issues/1377) /WebKit/: No signal (https://github.com/WebKit/standards-positions/issues/637) /Web developers/: Strongly positive (https://github.com/w3c/csswg-drafts/issues/2528) The C...
- [[blink-dev] Re: Intent to Ship: CSS `text-fit` property](http://www.mail-archive.com/blink-dev@chromium.org/msg16486.html) *(mail-archive.com)*
  > &gt; &gt; *Gecko*: No signal ( &gt; https://github.com/mozilla/standards-positions/issues/1377) &gt; &gt; *WebKit*: No signal ( &gt; https://github.com/WebKit/standards-positions/issues/637) &gt; &gt; *Web developers*: Strongly positive ( &gt; https:...
- [Safari Technology Preview 251 lands @supports at-rule(), random() with caching, corner-shape and object-view-box](https://dev.to/leobaniak/safari-technology-preview-251-lands-supports-at-rule-random-with-caching-corner-shape-and-1hib) *(dev.to · Leo · Sep 7)*
  > WebKit's 26 August preview adds an at-rule test to @supports, property-scoped caching on random(), the random-item(), ident() and inherit() functions, the corner-shape and object-view-box properties, comma-separated @container conditions, white-space...
- [st-core.fscss: a chart and dashboard UI kit built entirely in CSS mixins](https://dev.to/fscss/st-corefscss-a-chart-and-dashboard-ui-kit-built-entirely-in-css-mixins-2mb3) *(dev.to · FSCSS tutorial · Sep 5)*
  > Most chart libraries hand you a JavaScript API and a bundle size to worry about. st-core.fscss takes...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: CSS fit-width text](https://groups.google.com/a/chromium.org/g/blink-dev/c/I3aG24t4bwI/m/xLBLyAJKDwAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5104141688635392`)*
  > Intent to Prototype: CSS fit-width text Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: CSS fit-width text 705 views Sk...
- [Intent to Ship: CSS `text-fit` property](https://groups.google.com/a/chromium.org/g/blink-dev/c/55BYmN6RZtE) *(groups.google.com · 2026-05-07T16:40:06)* *(Cites: `https://chromestatus.com/feature/5104141688635392`)*
  > Intent to Ship: CSS `text-fit` property Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: CSS `text-fit` property 450 views Sk...
- [CSS `text-fit` property · Issue #3986 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3986) *(github.com · 2026-04-27T05:16:53)* *(Cites: `https://chromestatus.com/feature/5104141688635392`)*
  > CSS `text-fit` property · Issue #3986 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...
- [[blink-dev] Intent to Ship: CSS `text-fit` property](http://www.mail-archive.com/blink-dev@chromium.org/msg16473.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/css-fit-text/blob/main/README.md`)*
  > [blink-dev] Intent to Ship: CSS `text-fit` property Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS `text-fit` property TAMURA, Kent Wed, 06 May 2026 22:27:01 -0700 *Contact emails* [email&#160;protected] , [email&#160...
- [Intent to Prototype: CSS fit-width text](https://groups.google.com/a/chromium.org/g/blink-dev/c/I3aG24t4bwI) *(groups.google.com)* *(Cites: `https://github.com/explainers-by-googlers/css-fit-text/blob/main/README.md`)*
  > Intent to Prototype: CSS fit-width text Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: CSS fit-width text 705 views Sk...

## 📚 Platform Documentation & Specifications

- [CSS `text-fit` property · Issue #3986 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3986) *(github.com)*
- [[css-text] `text-fit` property · Issue #1377 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1377) *(github.com)*
- [[css-fonts-5] Text Fitting: Shrinking and Growing · Issue #12887 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12887) *(github.com)*
- [object-fit CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/object-fit) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 14 result(s) found across 7 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5104141688635392" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/explainers-by-googlers/css-fit-text/blob/main/README.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"drafts.csswg.org/css-text-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"text-fit" CSS ("css-text-5" OR "responsive typography" OR "font-size") -illustrator -photoshop` — *Finds modern developer guides, CSS spec overviews, and typography articles discussing the native text-fit property.* (1 returned)
  - `"text-fit:" OR "text-fit" property CSS (syntax OR example OR "contain" OR draft)` — *Uncovers technical syntax definitions, CSS code snippets, and draft specification usage patterns.* (8 returned)
  - `("text-fit" OR "css-fit-text") ("Intent to Prototype" OR "Intent to Ship" OR "standards-positions" OR "WebKit" OR "Gecko")` — *Identifies browser vendor positions, implementation status, and standards tracking across Chromium, WebKit, and Gecko.* (6 returned)
  - `"text-fit" CSS ("FitText" OR "container queries" OR "overflow") (site:github.com/w3c/csswg-drafts OR site:news.ycombinator.com OR site:reddit.com/r/webdev)` — *Surfaces developer sentiment, CSSWG issue discussions, and debates comparing native text-fit to legacy JavaScript solutions like FitText.* (1 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 5 result(s) found — **2 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 3 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5104141688635392)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5104141688635392)
- [Specification](https://drafts.csswg.org/css-text-5/#text-fit-property)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/417306102)
