# object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;

> **Report Week:** 2026-W45 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

SVG documents loaded through &lt;object&gt; or &lt;embed&gt; are sized and positioned inside the element's content box according to the CSS object-fit and object-position properties, the same way &lt;img&gt; content is.  Previously Chrome ignored both properties for embedded SVG documents and always stretched the document viewport to the whole content box.

### Motivation

Authors use object-fit and object-position to control how replaced content is scaled and placed inside its box.  https://drafts.csswg.org/css-images-3/#the-object-fit https://drafts.csswg.org/css-images-3/#the-object-position  Currently, Chrome applies them to images and videos but ignores them for SVG documents loaded through &lt;object&gt; or &lt;embed&gt;, which are always stretched to fill the element.  The fix has been implemented behind the SVGEmbeddedAsReplacedElement flag since M141. This entry ships it by default.

## Ecosystem Status

- **Momentum:** Moderate (+40 points since 2026-10-12; footprint 140 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** By treating SVG documents embedded via &lt;object&gt; and &lt;embed&gt; elements as replaced elements, Chromium closes a longstanding specification gap in CSS Images and HTML rendering rules. This update brings Blink into direct parity with Gecko (Firefox), leaving WebKit (Safari) as the sole major rendering engine still stretching embedded SVGs regardless of CSS fit rules. Developers and standards contributors view the change as a major win for responsive vector graphics, eliminating awkward wrapper hacks previously needed for interactive SVG assets.

### Recommendations
- Actionable Advice: Teams targeting Chromium and Firefox can safely use object-fit and object-position on SVG &lt;object&gt; and &lt;embed&gt; tags, but should verify rendering in Safari where SVGs will continue to stretch to fill the viewport box. For mission-critical cross-browser parity in WebKit, retain aspect-ratio container wrappers or consider inline SVGs until Safari resolves the discrepancy.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`object-fit`](https://webstatus.dev/features/object-fit)*

- Share of tests passing in the web-features group `object-fit` on [wpt.fyi](https://wpt.fyi/results?q=feature:object-fit) (via webstatus.dev) — stable: Chrome 47.8% · Edge 47.8% · Firefox 97% · Safari 44.8%; experimental: Chrome 96.3% · Edge 96.3% · Firefox 97% · Safari 45.5%

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/4886345347629056/activity) *(chromestatus.com)*
  > \*\*Default / Backwards Compatibility:\*\* Because the initial CSS defaults are \`object-fit: fill\` and \`object-position: 50% 50%\`, existing sites that do not set these properties will render without changes A noticeable difference occurs when authors exp...
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/4886345347629056/activity) *(img968-dot-cr-status.appspot.com)*
  > \*\*Implementation:\*\* Developed primarily by Igalia (e.g., Felipe Erias)
- [googlesource.com](https://chromium.googlesource.com/chromium/src.git/+/HEAD/third_party/blink/renderer/platform/runtime_enabled_features.json5) *(chromium.googlesource.com)*
  > It ran behind the experimental Chromium flag \`SVGEmbeddedAsReplacedElement\` since Chrome 141 and targeted shipping by default in Chrome 157/158
- [webkit.org](https://bugs.webkit.org/show_bug.cgi?id=317804) *(bugs.webkit.org)*
  > Titled \*“object-fit: scale-down ignored on \`&lt;embed&gt;\` and \`&lt;object&gt;\` embedding an SVG document (object-position too)”\* The discussion highlights that \*\*Firefox (Gecko)\*\* has long supported \`object-fit\` and \`object-position\` on SVG \`&lt;object&gt;\`/\`&lt;embed&gt;\`...
- [\[blink-dev\] Re: Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17511.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: object-fit and object-position apply to SVG documents in and Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: object-fit and object-position apply to SVG documents in and Alex Russell Mon, 21 Sep 2...
- [\[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17499.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in and Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in and Chromestatus Sun, 20 Sep 2026 19:5...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17575.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in and Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in and Felipe Erias Tue, 29 Sep 2...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17515.html) *(mail-archive.com)*
  > \*Specification\* https://html.spec.whatwg.org/multipage/rendering.html#embedded-content-rendering-rules · \*Summary\* &lt;strong&gt;SVG documents loaded through &lt;object&gt; or &lt;embed&gt; are sized and positioned inside the element&#x27;s content box acc...

## 📚 Platform Documentation & Specifications

- [object-fit CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/object-fit) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/embed) *(developer.mozilla.org)*
- [\[svg\] Use the replaced content rect for embedded SVG documents by chromium-wpt-export-bot · Pull Request #64519 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/64519) *(github.com)*
- [object-fit and object-position are ignored for SVG embedded via &lt;object&gt; and &lt;embed&gt; by Ahmad-S792 · Pull Request #75745 · WebKit/WebKit · GitHub](https://github.com/WebKit/WebKit/pull/75745) *(github.com)*
- [\[Image Redux\] Add support for 'object-fit', 'object-position' and 'object-view-box\` for SVG documents in &lt;embed&gt; and &lt;object&gt; by weinig · Pull Request #76911 · WebKit/WebKit · GitHub](https://github.com/WebKit/WebKit/pull/76911) *(github.com)*
- [Apply object-fit and object-position to SVG in object/embed tags · Issue #726 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/726) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 47 result(s) found across 11 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/4886345347629056" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"html.spec.whatwg.org/multipage/rendering.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" API` — *Core feature API query* (3 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"drafts.csswg" OR "object-fit" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (5 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"object-fit" svg ("<object>" OR "<embed>") tutorial OR guide` — *Searches for developer tutorials and blog guides explaining how to control SVG sizing and aspect ratio inside object and embed elements using CSS object-fit.* (5 returned)
  - `"object-fit" "object-position" "object[type=\"image/svg+xml\"]" OR "embed[type=\"image/svg+xml\"]"` — *Locates practical CSS and HTML code examples targeting embedded SVG documents using object-fit and object-position properties.* (8 returned)
  - `"SVGEmbeddedAsReplacedElement" OR ("object-fit" "object-position" svg "embed" Chrome 141)` — *Finds browser release notes, feature shipping announcements, and tracking issues detailing Chrome's enablement of object-fit for embedded SVGs.* (8 returned)
  - `"object-fit" (svg OR "embedded SVG") (object OR embed) site:issues.chromium.org OR site:bugs.chromium.org OR site:github.com/whatwg/html` — *Discovers community bug reports, developer discussions, and standards conversations regarding SVG stretching behavior in object and embed containers.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "object-fit", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "object-fit": Chrome 47.8% passing (stable)*
- **Sources cited by the AI synthesis:** 4 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4886345347629056)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4886345347629056)
- [Specification](https://html.spec.whatwg.org/multipage/rendering.html#embedded-content-rendering-rules)
- [Chromium Tracking Bug](https://issues.chromium.org/41302806)
