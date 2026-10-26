# SVG textPath side attribute

> **Report Week:** 2026-W44 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Allows authors to choose which side of a path SVG text follows using the side attribute on the textPath element. Setting side="right" effectively reverses the path direction for text layout, making it easy to place text inside or outside a circular path without duplicating or manually reversing the path data.

### Motivation

Authors placing text along a path have no way to flip which side of the path the text appears on. The side attribute lets authors write side="right" to place text on the opposite side of the path, without duplicating or reversing the path data. This helps label both the inside and outside of a shape, such as a circular path, with different text on each side.

## Ecosystem Status

- **Momentum:** Moderate (footprint 295 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The SVG 2 \`side\` attribute on \`&lt;textPath&gt;\` enables developers to flip text placement to the opposite side of a path using \`side="right"\`, eliminating the need to duplicate or manually reverse geometry for inside-versus-outside path typography. After languishing with partial implementation for years, the feature has achieved complete tripartite engine consensus, transitioning from Firefox's pioneering implementation to Chromium's default enablement in Chrome 158 and WebKit's rollout in Safari Technology Preview. The W3C Technical Architecture Group (TAG) review concluded as satisfied, confirming that the ergonomic and internationalization aspects are sound.

### Recommendations
- Actionable Advice: Teams can begin adopting \`side="right"\` today, but should feature-detect support via \`'side' in SVGTextPathElement.prototype\` or maintain a secondary reversed path fallback if supporting legacy mobile and older desktop browsers is required. For greenfield projects and modern target baselines, relying on the attribute drastically simplifies SVG authoring and file sizes.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (W3C TAG): Latest discussion from @jyasskin: "Thanks for sending this. I'm always twitchy on internationalization grounds when I see "right" or "left", but I think it's correct in this case. We ha..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **W3C TAG:** [FYI: SVG textPath side attribute](https://github.com/w3ctag/design-reviews/issues/1279) [closed]

## 📰 Ecosystem Blogs & Articles

- [bsky.app](https://bsky.app/profile/intenttoship.dev/post/3mvojrp24e22j) *(bsky.app)*
  > \*\*Intent to Ship & TAG Review:\*\* The Chromium team posted an \*Intent to Ship\* and submitted an awareness review to the W3C TAG (Issue #1279: \*FYI: SVG textPath side attribute\*)
- [igalia.com](https://planet.igalia.com) *(planet.igalia.com)*
  > \*\*WebKit (Safari):\*\* Implementation tracked in WebKit Bug #66616 (\*\[SVG2\] Implement the side attribute for SVG \`&lt;textPath&gt;\` element\*) alongside the modern Layer-Based SVG Engine (LBSE) rollout
- [\[blink-dev\] Re: Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17520.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Blink component Blink&gt;SVG ... the path the text appears on. The side attribute &gt;&gt;&gt; &lt;strong&gt;lets authors write side=&quot;right&quot; to place text on the opposite side &gt;&gt;&gt; of the path, without duplicatin...
- [\[blink-dev\] Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17486.html) *(mail-archive.com)*
  > Blink component Blink&gt;SVG Web Feature ID svg-textPath-side Motivation Authors placing text along a path have no way to flip which side of the path the text appears on. The side attribute &lt;strong&gt;lets authors write side=&quot;right&quot; to place t...
- [SVG textPath side attribute - Chrome Platform Status](https://polymer10-dot-cr-status.appspot.com/feature/5422782593761280) *(polymer10-dot-cr-status.appspot.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [SVG TextPath: How to Bend Text Along the Shape of a Path](https://hyring.com/learn/svg/textpath) *(hyring.com · 2026-06-22T18:30:00)*
  > &lt;strong&gt;side is &#x27;left&#x27; (default) or &#x27;right&#x27; of the path direction&lt;/strong&gt; ... &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;body&gt; &lt;svg viewBox=&#x27;0 0 260 140&#x27;&gt; &lt;path id=&#x27;wave&#x27; d=&#x27;M 10 100 C 70 20, 190 ...
- [SVG circled text on textPath (center align) - javascript](https://stackoverflow.com/questions/15495978/svg-circled-text-on-textpath-center-align) *(stackoverflow.com)*
  > Side note: With SVG 2 (implementation in progress) you can define whether the text is rendered inward or outward with the new side attribute on the textPath element. ... and set the startOffset of your textPath to 50%. note that your svg file is not ...
- [d3.js - How to set \`side: right\` of \`textPath\` in Chrome? - Stack Overflow](https://stackoverflow.com/questions/57949804/how-to-set-side-right-of-textpath-in-chrome) *(stackoverflow.com · 2019-09-16T00:00:00)*
  > The second part is the alternative solution where you are reversing the path as Kaiido suggested. svg{border:1px solid; width:90vh;} text { font: 25px Arial, Helvelica, sans-serif; } &lt;svg viewBox=&quot;0 0 400 400&quot; &gt; &lt;!--MDN--&gt; &lt;t...
- [SVG Text On Path—Part 2 - Vanseo Design](https://vanseodesign.com/web-design/svg-text-on-pathpart-2) *(vanseodesign.com · 2015-12-22T13:30:04)*
  > The second additional attribute is the side attribute. &lt;strong&gt;It will take a value of either left or right and it effectively reverses the path&lt;/strong&gt;, which you can see in the following screenshot I grabbed from the spec.
- [Re: \[blink-dev\] Re: Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17524.html) *(mail-archive.com)*
  > This implements an existing SVG2 &gt; &gt;&gt;&gt; attribute with a WG resolution and shipping Firefox precedent; TAG &gt; &gt;&gt;&gt; review will be evaluated during Intent to Ship. &gt; &gt;&gt;&gt; &gt; &gt;&gt;&gt; TAG review status Not applicab...
- [\[blink-dev\] Re: Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17506.html) *(mail-archive.com)*
  > This implements an existing SVG2 attribute with a WG &gt; resolution and shipping Firefox precedent; TAG review will be evaluated &gt; during Intent to Ship. &gt; &gt; \*TAG review status\* &gt; Not applicable &gt; &gt; \*Goals for experimentation\* &gt;...
- [Chrome Platform Status](https://img968-dot-cr-status.appspot.com/feature/5422782593761280) *(img968-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [SVG textPath on inner circle - Prince forum](https://www.princexml.com/forum/topic/5171/svg-textpath-on-inner-circle) *(princexml.com)*
  > SVG textPath on inner circle - Prince forum Buy Prince Samples Documentation Forum Download Log in / Register Forum › How do I...? SVG textPath on inner circle twantzen 25 Aug 2025 Hi, I tried to make a SVG path with textPath , where the text sits in...
- [Chrome Platform Status](https://polymer10-dot-cr-status.appspot.com/feature/5422782593761280/activity) *(polymer10-dot-cr-status.appspot.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[svgwg\] Remove "side" attribute from "textPath" (#1068) from Karl Dubost via GitHub on 2026-03-03 (public-svg-issues@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-svg-issues/2026Mar/0007.html) *(lists.w3.org)* *(Cites: `https://w3c.github.io/svgwg/svg2-draft/text.html#TextPathElementSideAttribute`)*
  > karlcow has just created a new issue for https://github.com/w3c/svgwg: == Remove &quot;side&quot; attribute from &quot;textPath&quot; == It was decided to add it on February 2015 to SVG2 https://www.w3.org/2015/02/12-svg-minutes.html#item05...
- [\`side\` and \`path\` attributes on textPath are missing on the IDL · Issue #1086 · w3c/svgwg](https://github.com/w3c/svgwg/issues/1086) *(github.com · 2026-04-07T03:16:55)* *(Cites: `https://w3c.github.io/svgwg/svg2-draft/text.html#TextPathElementSideAttribute`)*
  > \`side\` and \`path\` attributes on textPath are missing on the IDL · Issue #1086 · w3c/svgwg · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wi...
- [\[svgwg\] Issue: Remove "side" attribute from "textPath" (#1068) marked as Agenda+ from Karl Dubost via GitHub on 2026-03-03 (public-svg-issues@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-svg-issues/2026Mar/0008.html) *(lists.w3.org)* *(Cites: `https://w3c.github.io/svgwg/svg2-draft/text.html#TextPathElementSideAttribute`)*
  > karlcow has just labeled an issue for https://github.com/w3c/svgwg as &quot;Agenda+&quot;: == Remove &quot;side&quot; attribute from &quot;textPath&quot; == It was decided to add it on February 2015 to SVG2 https://www.w3.org/2015/02/12-svg...

## 📚 Platform Documentation & Specifications

- [FYI: SVG textPath side attribute · Issue #1279 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1279) *(github.com)*
- [side - SVG - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/side) *(developer.mozilla.org)*
- [SVGTextPathElement: side property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/SVGTextPathElement/side) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/de/play?uuid=c6ebfb7730bcb92ab869c90b67985c8fbb14ef2c&state=tVRtb9s2EP4rNyYf7MKx5C1BEdsysGVeUzTL0sXrNoBAQ4tniQtNaiRl2Qj83wuSVpykaVBg6wdb5PHuuZfnIe9I6ZaSDMnYrgpYCWx%2B0uuMkhRSGKThRwmsl1LZjJLSuWqYJE3T9Jsf%2BtoUyfdpmiZ2VVAyoQpg%2FN3RETgNpeAIrkSomCt7IBwIC7WtmZQbaAyrKuQgFDAYc1zYCaDEJSoHR0d7nN1Ra%2FJQfgEgeEbJr5srbyDRtBBSZpQorbA1WWf0LWaUGOStLQQO0t5pCu9Pw%2Bc07R2fhM0ghZPw%2F34QPoO0dxw3r1M4PvH%2FlEAyoSqU43DtJhE1rH01UBpcZJQctMWBFTyUIIrSUTKZlcKC94aFllI3FlgYUX%2BctBix2WQHP%2FbD9d957ZxWsXWni0Likcf2mGEH14LjOIluPqAyGL2l9uyMk8rghCrSI7m1ZBh471E113zTo8qzf%2Bczl%2BhLHcJxmlbrkbc0grtyCKx2egTJK3iHWNlALrMV5g4Mc0LDq4SqLVUHUj9BOmmB9ArNQupmCDY3WspgrBjnQhVDSPsnBpfBNteGoxnCoFqD1VJwmEuW345CAtIj%2F%2Fj6c62sA6mL6U46GXCd137Z%2F7dGs7lGibnTpkPJQZhBd0TVola5E1r5wI6fcTcWu8fpC6XQzDxHGdwc3j13sj2887FbStXN6El47G2mK8g%2BN5%2BHmcRGYgP30nmh%2FNYnthDjdnp4qelHMvGRVCUJnKOs0MD9IJwGg4wDU9zXG4jNa2P8SEPoo5mdxRMvts5udM5s4gJAYowZxTsCIBbQaavv%2B5P%2BnFn8wCRkWQbXH97MdoftmGbTv2ZXP87OP16%2F%2FXk6%2B%2Ftq%2BvH3t2%2FOZ902AwR8yOD%2BTo3iwRZQWgwJW8%2F%2FmPhi%2BsssQj2XXeLiWyb%2F4%2FLd5W9%2FXn45f61ulW7U0xKec8S1v6bIYcVkjfuIHWe66NycPSB8CId3%2Fru96QbPLeTM5eU9x94%2FoFdGV2jcxr%2FtSjuwdVVp4%2BLL7vxLNze6sWhaoCD7IMKLndCEEk4wCdYxhxAkxjhVT4U2CkG7h87HhfxNiSrs2rfRQi5FfoucqmjqM86nK1TuQliHCv21CC6U9KDThWzymYS%2FgWKTBM5Kpgr0dy3o5mWNfL08v8D9o4TxmvwfGUNfe%2FHExQMy64ozz34g814sT4ncC6qD3YeiouQanROq2DP81QrrxwcuasyvSI%2B4EpdIhkT6AZDtJw%3D%3D&srcPrefix=%2Fen-US%2Fdocs%2FWeb%2FAPI%2FSVGTextPathElement%2Fside%2F) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/svg/reference/attribute/side/index.md?plain=1) *(github.com)*
- [\`&lt;textPath side="…"&gt;\` SVG attribute · Issue #4478 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4478) *(github.com)*
- [\[svgwg\] Remove "side" attribute from "textPath" (#1068) from Karl Dubost via GitHub on 2026-03-03 (public-svg-issues@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-svg-issues/2026Mar/0007.html) *(lists.w3.org)*
- [\`side\` and \`path\` attributes on textPath are missing on the IDL · Issue #1086 · w3c/svgwg](https://github.com/w3c/svgwg/issues/1086) *(github.com)*
- [\[svgwg\] Issue: Remove "side" attribute from "textPath" (#1068) marked as Agenda+ from Karl Dubost via GitHub on 2026-03-03 (public-svg-issues@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-svg-issues/2026Mar/0008.html) *(lists.w3.org)*
- [1446650 - Support SVG 2 side attribute for textPath](https://bugzilla.mozilla.org/show_bug.cgi?id=1446650) *(bugzilla.mozilla.org)*
- [\[SVG2\] Implement the side attribute for SVG &lt;textPath&gt; element by Ahmad-S792 · Pull Request #66616 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/66616) *(github.com)*
- [side - SVG \| MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/side) *(developer.mozilla.org)*
- [SVGTextPathElement - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/SVGTextPathElement) *(developer.mozilla.org)*
- [WebKit export of https://bugs.webkit.org/show\_bug.cgi?id=311609 by Ahmad-S792 · Pull Request #63430 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63430) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 54 result(s) found across 10 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/5422782593761280" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"w3c.github.io/svgwg/svg2-draft/text.html" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"SVG textPath side attribute" API` — *Core feature API query* (6 returned)
  - `"SVG textPath side attribute" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"SVG textPath side attribute" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"SVG textPath side attribute" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"svg" "textpath" "side" attribute (tutorial OR guide) (circle OR path)` — *Finds developer tutorials and blog posts demonstrating how to use the side attribute on textPath for circular or curved typography.* (8 returned)
  - `"<textPath" ("side=\"right\"" OR "side=\"left\"") path` — *Locates real-world SVG snippets and implementation code using side='right' or side='left'.* (8 returned)
  - `"textPath" "side" attribute ("Chrome" OR "WebKit" OR "Firefox") ("intent to ship" OR "support")` — *Tracks browser engine implementation statuses, release notes, and official shipping announcements across major vendors.* (6 returned)
  - `svg textpath reverse flip side ("side=\"right\"" OR "side attribute")` — *Discovers community discussions, Stack Overflow answers, and developer feedback addressing text flipping along SVG paths.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 5 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 7 result(s) found — **6 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5422782593761280)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5422782593761280)
- [Specification](https://w3c.github.io/svgwg/svg2-draft/text.html#TextPathElementSideAttribute)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40362379)
