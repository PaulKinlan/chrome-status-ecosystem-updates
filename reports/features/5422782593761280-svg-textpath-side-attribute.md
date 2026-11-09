# SVG textPath side attribute

> **Report Week:** 2026-W46 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Allows authors to choose which side of a path SVG text follows using the side attribute on the textPath element. Setting side="right" effectively reverses the path direction for text layout, making it easy to place text inside or outside a circular path without duplicating or manually reversing the path data.

### Motivation

Authors placing text along a path have no way to flip which side of the path the text appears on. The side attribute lets authors write side="right" to place text on the opposite side of the path, without duplicating or reversing the path data. This helps label both the inside and outside of a shape, such as a circular path, with different text on each side.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 225 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The SVG textPath side attribute completes a long-awaited SVG 2 capability that eliminates the need to manually duplicate and invert path geometries for circular text, stamps, and radial gauges. While Firefox has supported the visual rendering behavior since Firefox 61, recent implementations in WebKit (Safari Technology Preview) and Chromium bring true cross-engine interoperability to modern browsers. The W3C TAG closed its design review as satisfied, validating the left/right geometric alignment model for vector typography.

### Recommendations
- Actionable Advice: Developers can immediately adopt side="right" for modern browser targeting, but should retain progressive fallbacks—such as secondary inverted paths—for applications requiring legacy Chromium and Safari support. Verifying textPath DOM reflection (via SVGTextPathElement.side) in JavaScript serves as a clean feature detection hook.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (W3C TAG): Latest discussion from @jyasskin: "Thanks for sending this. I'm always twitchy on internationalization grounds when I see "right" or "left", but I think it's correct in this case. We ha..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **W3C TAG:** [FYI: SVG textPath side attribute](https://github.com/w3ctag/design-reviews/issues/1279) [closed]

## 📰 Ecosystem Blogs & Articles

- [d3.js - How to set \`side: right\` of \`textPath\` in Chrome? - Stack Overflow](https://stackoverflow.com/questions/57949804/how-to-set-side-right-of-textpath-in-chrome) *(stackoverflow.com)*
  > Historically, placing text around common graphics like badges, coins, radial meters, or circular stamps required hacky workarounds If you wanted text along the top of a circle and along the bottom facing right-side up, you were forced to duplicate th...
- [web.dev](https://web.dev/blog/web-platform-04-2026) *(web.dev)*
  > Positioned alongside the inline \`&lt;textPath path="..."&gt;\` attribute (which lets authors define path data directly on the element rather than through an external \`href\`) to modernize SVG text rendering pipelines Firefox has historically supported the vi...
- [webdevbriefing.com](https://www.webdevbriefing.com/new-features-in-safari-tp-255) *(webdevbriefing.com)*
  > \*\*Coverage\*\*: WebKit Pull Request (\`#66616\`) and developer briefing coverage for \*\*Safari Technology Preview (TP 255)\*\* Apple’s WebKit team closed the long-standing implementation gap for \`\[SVG2\] Implement the side attribute for SVG &lt;textPath&gt; elemen...
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5422782593761280) *(img968-dot-cr-status.appspot.com)*
  > \*\*Coverage\*\*: WebKit Pull Request (\`#66616\`) and developer briefing coverage for \*\*Safari Technology Preview (TP 255)\*\* Apple’s WebKit team closed the long-standing implementation gap for \`\[SVG2\] Implement the side attribute for SVG &lt;textPath&gt; elemen...
- [\[blink-dev\] Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17486.html) *(mail-archive.com)*
  > Blink component Blink&gt;SVG Web Feature ID svg-textPath-side Motivation Authors placing text along a path have no way to flip which side of the path the text appears on. The side attribute &lt;strong&gt;lets authors write side=&quot;right&quot; to place t...
- [\[blink-dev\] Re: Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17508.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; \*Blink component\* &gt;&gt; Blink&gt;SVG ... the &gt;&gt; path the text appears on. The side attribute &lt;strong&gt;lets authors write &gt;&gt; side=&quot;right&quot; to place text on the opposite side of the path, without &gt;&gt; duplic...
- [\[blink-dev\] Intent to Prototype: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17216.html) *(mail-archive.com)*
  > Specification https://w3c.github.io/svgwg/svg2-draft/text.html#TextPathElementSideAttribute Summary The side attribute on the SVG &lt;textPath&gt; element &lt;strong&gt;places text on the opposite side of the path, equivalent to reversing the path directio...
- [Re: \[blink-dev\] Re: Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17590.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt;&gt; &gt;&gt; &gt;&gt;&gt; Blink component Blink&gt;SVG ... side of the path the text appears on. &lt;strong&gt;The side attribute &gt;&gt; &gt;&gt;&gt; lets authors write side=&quot;right&quot; to place text on the opposite side &gt;&gt; ...
- [\[blink-dev\] Re: Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17520.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Blink component Blink&gt;SVG ... the path the text appears on. The side attribute &gt;&gt;&gt; &lt;strong&gt;lets authors write side=&quot;right&quot; to place text on the opposite side &gt;&gt;&gt; of the path, without duplicatin...
- [\[blink-dev\] Re: Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17507.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; \*Will this feature be supported on all six Blink platforms (Windows, Mac, &gt;&gt; Linux, ChromeOS, Android, and Android WebView)?\* &gt;&gt; Yes &gt;&gt; &gt;&gt; \*Is this feature fully tested by web-platform-tests &gt;&gt; &lt;http...
- [\[blink-dev\] Re: Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17506.html) *(mail-archive.com)*
  > &gt; &gt; \*Will this feature be supported on all six Blink platforms (Windows, Mac, &gt; Linux, ChromeOS, Android, and Android WebView)?\* &gt; Yes &gt; &gt; \*Is this feature fully tested by web-platform-tests &gt; &lt;https://chromium.googlesource.co...
- [Re: \[blink-dev\] Re: Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17524.html) *(mail-archive.com)*
  > &gt; &gt;&gt;&gt; &gt; &gt;&gt;&gt; Will this feature be supported on all six Blink platforms &gt; &gt;&gt;&gt; (Windows, Mac, Linux, ChromeOS, Android, and Android WebView)?Yes &gt; &gt;&gt;&gt; &gt; &gt;&gt;&gt; Is this feature fully tested by web-...
- [svg - Invert textPath letter from up to down along a path without redraw? - Stack Overflow](https://stackoverflow.com/questions/61244175/invert-textpath-letter-from-up-to-down-along-a-path-without-redraw) *(stackoverflow.com)*
  > You could use &lt;textPath side=&quot;...&quot;&gt; for that. However, it&#x27;s only supported by Firefox right now. &lt;svg viewBox=&quot;0 0 100 55&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt; &lt;path id=&quot;curve&quot; fill=&quot;non...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\`&lt;textPath side="…"&gt;\` SVG attribute · Issue #4478 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4478) *(github.com · 2026-10-07T12:27:05)* *(Cites: `https://chromestatus.com/feature/5422782593761280`)*
  > \`&lt;textPath side="…"&gt;\` SVG attribute · Issue #4478 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your ...
- [\`side\` and \`path\` attributes on textPath are missing on the IDL · Issue #1086 · w3c/svgwg · GitHub](https://github.com/w3c/svgwg/issues/1086) *(github.com · 2026-04-07T03:16:55)* *(Cites: `https://w3c.github.io/svgwg/svg2-draft/text.html#TextPathElementSideAttribute`)*
  > \`side\` and \`path\` attributes on textPath are missing on the IDL · Issue #1086 · w3c/svgwg · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refr...
- [\[svgwg\] Issue: \`side\` and \`path\` attributes on textPath are missing on the IDL (#1086) marked as Agenda+ from Karl Dubost via GitHub on 2026-04-07 (public-svg-issues@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-svg-issues/2026Apr/0019.html) *(lists.w3.org)* *(Cites: `https://w3c.github.io/svgwg/svg2-draft/text.html#TextPathElementSideAttribute`)*
  > @viralipurbey added some better testcase coverage on WPT. https://&lt;strong&gt;w3c.github.io/svgwg/svg2-draft/text.html&lt;/strong&gt;#InterfaceSVGTextPathElement The IDL has \`\`\` \[SameObject\] readonly attribute SVGAnimatedLength startOffset; \[SameObje...

## 📚 Platform Documentation & Specifications

- [FYI: SVG textPath side attribute · Issue #1279 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1279) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/side) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/SVGTextPathElement/side) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/issues/44162) *(github.com)*
- [\`&lt;textPath side="…"&gt;\` SVG attribute · Issue #4478 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4478) *(github.com)*
- [\`side\` and \`path\` attributes on textPath are missing on the IDL · Issue #1086 · w3c/svgwg · GitHub](https://github.com/w3c/svgwg/issues/1086) *(github.com)*
- [\[svgwg\] Issue: \`side\` and \`path\` attributes on textPath are missing on the IDL (#1086) marked as Agenda+ from Karl Dubost via GitHub on 2026-04-07 (public-svg-issues@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-svg-issues/2026Apr/0019.html) *(lists.w3.org)*
- [\[SVG2\] Implement the side attribute for SVG &lt;textPath&gt; element by Ahmad-S792 · Pull Request #66616 · WebKit/WebKit · GitHub](https://github.com/WebKit/WebKit/pull/66616) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 10 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/5422782593761280" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"w3c.github.io/svgwg/svg2-draft/text.html" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"SVG textPath side attribute" API` — *Core feature API query* (8 returned)
  - `"SVG textPath side attribute" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"SVG textPath side attribute" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"SVG textPath side attribute" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"textPath" "side=" (SVG OR "SVG2") (tutorial OR guide OR "circular text")` — *Finds developer tutorials, blog posts, and practical guides on placing text along paths using the SVG textPath side attribute.* (8 returned)
  - `"<textPath" ("side=\"right\"" OR "side=\"left\"") (site:codepen.io OR site:github.com)` — *Discovers real-world code snippets, templates, and SVG markup examples demonstrating the side attribute syntax on CodePen and GitHub.* (0 returned)
  - `"textPath" "side" attribute ("intent to ship" OR "Chrome Platform Status" OR "caniuse")` — *Tracks browser engine adoption, implementation status, and release announcements across Chrome, WebKit, and Gecko.* (8 returned)
  - `"textPath" flip OR reverse text (site:stackoverflow.com OR site:bugs.chromium.org OR site:github.com/w3c) "side"` — *Surfaces community questions, developer pain points, and spec discussions around flipping text on a path without reversing path geometry.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 5 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 5 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5422782593761280)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5422782593761280)
- [Specification](https://w3c.github.io/svgwg/svg2-draft/text.html#TextPathElementSideAttribute)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40362379)
