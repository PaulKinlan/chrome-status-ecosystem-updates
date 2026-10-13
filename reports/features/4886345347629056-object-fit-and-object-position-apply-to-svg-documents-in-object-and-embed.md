# object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;

> **Report Week:** 2026-W42 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

SVG documents loaded through &lt;object&gt; or &lt;embed&gt; are sized and positioned inside the element's content box according to the CSS object-fit and object-position properties, the same way &lt;img&gt; content is.  Previously Chrome ignored both properties for embedded SVG documents and always stretched the document viewport to the whole content box.

### Motivation

Authors use object-fit and object-position to control how replaced content is scaled and placed inside its box.  https://drafts.csswg.org/css-images-3/#the-object-fit https://drafts.csswg.org/css-images-3/#the-object-position  Currently, Chrome applies them to images and videos but ignores them for SVG documents loaded through &lt;object&gt; or &lt;embed&gt;, which are always stretched to fill the element.  The fix has been implemented behind the SVGEmbeddedAsReplacedElement flag since M141. This entry ships it by default.

## Ecosystem Status

- **Momentum:** Emerging (footprint 100 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chrome 157 enables support by default for CSS \`object-fit\` and \`object-position\` on SVG documents embedded within \`&lt;object&gt;\` and \`&lt;embed&gt;\` elements, treating them as standard replaced elements. This Chromium catch-up effort, driven by Igalia engineers under the \`SVGEmbeddedAsReplacedElement\` flag, resolves a longstanding browser engine bug dating back to 2017. The update aligns Chromium with the WHATWG embedded content rendering specification and brings it into parity with Firefox, while Safari remains the notable outlier.

### Recommendations
- Actionable Advice: Teams can take advantage of these sizing properties in Chromium and Gecko environments, but should not rely on them as an unassisted cross-browser layout mechanism while WebKit remains unsupported. For robust cross-browser sizing today, continue using \`&lt;img&gt;\` for purely decorative SVGs, or manage aspect ratio and viewBox preservation directly inside the SVG markup when interactive \`&lt;object&gt;\` embeds are necessary.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`object-fit`](https://webstatus.dev/features/object-fit)*

- Share of tests passing in the web-features group `object-fit` on [wpt.fyi](https://wpt.fyi/results?q=feature:object-fit) (via webstatus.dev) — stable: Chrome 49.2% · Edge 49.2% · Firefox 97.6% · Safari 45.2%; experimental: Chrome 98.4% · Edge 96.8% · Firefox 97.6% · Safari 46%

## 📰 Ecosystem Blogs & Articles

- [google.com](https://issuetracker.google.com/issues/564190097) *(issuetracker.google.com)*
  > \* \*\*Current status:\*\* Updates have been initiated across MDN documentation trackers to clarify that \`&lt;embed&gt;\` and \`&lt;object&gt;\` \*do\* honor \`object-fit\` and \`object-position\` when rendering SVG documents starting in Chrome 157, bringing the documentation...
- [object-fit and object-position do not apply to svg in object tag \[41302806\] - Chromium](https://issues.chromium.org/issues/41302806) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17499.html) *(mail-archive.com)*
  > Previously Chrome ignored both ... Web Feature ID object-fit Motivation Authors use object-fit and object-position &lt;strong&gt;to control how replaced content is scaled and placed inside its box&lt;/strong&gt;....
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17601.html) *(mail-archive.com)*
  > &gt;&gt;&gt; https://drafts.csswg.org/css-images-3/#the-object-fit &gt;&gt;&gt; https://drafts.csswg.org/css-images-3/#the-object-position Currently, &gt;&gt;&gt; Chrome applies them to images and videos but ignores them for SVG documents &gt;&gt;&gt...
- [\[blink-dev\] Re: Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17511.html) *(mail-archive.com)*
  > &gt; https://drafts.csswg.org/css-images-3/#the-object-fit &gt; https://drafts.csswg.org/css-images-3/#the-object-position Currently, &gt; &lt;strong&gt;Chrome applies them to images and videos but ignores them for SVG documents &gt; loaded through &lt;obj...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17646.html) *(mail-archive.com)*
  > On Fri, Oct 2, 2026 at 9:34 AM ... out-of-process frames. I am implementing the fix and &gt; will upload the CLs shortly. &gt; &gt; &lt;strong&gt;This feature only covers SVG documents in &lt;object&gt; and &lt;embed&gt;&lt;/strong&gt;. It will &gt; not apply to...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17644.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; https://drafts.csswg.org/css-images-3/#the-object-fit &gt;&gt;&gt;&gt; https://drafts.csswg.org/css-images-3/#the-object-position Currently, &gt;&gt;&gt;&gt; Chrome applies them to images and videos but ignores them for SVG &gt;&gt;&...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [object-fit and object-position do not apply to svg in object tag \[41302806\] - Chromium](https://issues.chromium.org/issues/41302806) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/4886345347629056`)*
  > Chromium Sign in

## 📚 Platform Documentation & Specifications

- [object-fit CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/object-fit) *(developer.mozilla.org)*
- [Apply object-fit and object-position to SVG in object/embed tags · Issue #726 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/726) *(github.com)*
- [object-fit and object-position are ignored for SVG embedded via &lt;object&gt; and &lt;embed&gt; by Ahmad-S792 · Pull Request #75745 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/75745) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 11 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/4886345347629056" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"html.spec.whatwg.org/multipage/rendering.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" API` — *Core feature API query* (3 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"drafts.csswg" OR "object-fit" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"object-fit" "object-position" svg "<object>" OR "<embed>"` — *Finds articles, developer guides, and tutorials detailing how object-fit and object-position apply to embedded SVG files.* (8 returned)
  - `"object-fit: cover" OR "object-fit: contain" "<object data=" ".svg"` — *Discovers real-world CSS and HTML markup examples styling embedded SVGs using object-fit.* (8 returned)
  - `"SVGEmbeddedAsReplacedElement" OR ("object-fit" "<object>" svg chrome "141")` — *Tracks browser release notes, feature flag announcements, and platform implementation milestones around Chromium M141.* (3 returned)
  - `site:issues.chromium.org OR site:bugs.webkit.org "object-fit" "<object>" svg` — *Surfaces browser bug tracker discussions, web compatibility reports, and developer feedback on SVG rendering behavior in replaced elements.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 5 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "object-fit", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "object-fit": Chrome 49.2% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4886345347629056)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4886345347629056)
- [Specification](https://html.spec.whatwg.org/multipage/rendering.html#embedded-content-rendering-rules)
- [Chromium Tracking Bug](https://issues.chromium.org/41302806)
