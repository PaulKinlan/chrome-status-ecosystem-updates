# object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;

> **Report Week:** 2026-W43 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

SVG documents loaded through &lt;object&gt; or &lt;embed&gt; are sized and positioned inside the element's content box according to the CSS object-fit and object-position properties, the same way &lt;img&gt; content is.  Previously Chrome ignored both properties for embedded SVG documents and always stretched the document viewport to the whole content box.

### Motivation

Authors use object-fit and object-position to control how replaced content is scaled and placed inside its box.  https://drafts.csswg.org/css-images-3/#the-object-fit https://drafts.csswg.org/css-images-3/#the-object-position  Currently, Chrome applies them to images and videos but ignores them for SVG documents loaded through &lt;object&gt; or &lt;embed&gt;, which are always stretched to fill the element.  The fix has been implemented behind the SVGEmbeddedAsReplacedElement flag since M141. This entry ships it by default.

## Ecosystem Status

- **Momentum:** Emerging (footprint 90 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Chrome 157 ships native support for applying CSS \`object-fit\` and \`object-position\` properties to SVG documents loaded via \`&lt;object&gt;\` and \`&lt;embed&gt;\` elements, aligning them with behavior already standard for \`&lt;img&gt;\` and \`&lt;video&gt;\`. Previously, Chromium engines forcibly stretched embedded SVGs to completely fill the content box, ignoring sizing directives. This update resolves long-standing layout discrepancies and brings alignment closer to standard replaced element rendering rules.

### Recommendations
- Actionable Advice: Web development teams can leverage this feature to consistently style embedded SVGs across modern browsers, though fallback wrapper containers or SVG-internal viewBox adjustments should still be considered for older legacy browser environments.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`object-fit`](https://webstatus.dev/features/object-fit)*

- Share of tests passing in the web-features group `object-fit` on [wpt.fyi](https://wpt.fyi/results?q=feature:object-fit) (via webstatus.dev) — stable: Chrome 49.2% · Edge 48.4% · Firefox 97.6% · Safari 45.2%; experimental: Chrome 98.4% · Edge 98.4% · Firefox 97.6% · Safari 46%

## 📰 Ecosystem Blogs & Articles

- [object-fit and object-position do not apply to svg in object tag \[41302806\] - Chromium](https://issues.chromium.org/issues/41302806) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17499.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in and Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in and Chromestatus Sun, 20 Sep 2026 19:5...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17515.html) *(mail-archive.com)*
  > \*Web Feature ID\* object-fit ...-images-3/#the-object-position Currently, Chrome applies them to images and videos but &lt;strong&gt;ignores them for SVG documents loaded through &lt;object&gt; or &lt;embed&gt;&lt;/strong&gt;, which are always stretched to fill t...
- [\[blink-dev\] Re: Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17511.html) *(mail-archive.com)*
  > &gt; https://drafts.csswg.org/css-images-3/#the-object-fit &gt; https://drafts.csswg.org/css-images-3/#the-object-position Currently, &gt; &lt;strong&gt;Chrome applies them to images and videos but ignores them for SVG documents &gt; loaded through &lt;obj...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17646.html) *(mail-archive.com)*
  > On Fri, Oct 2, 2026 at 9:34 AM ... out-of-process frames. I am implementing the fix and &gt; will upload the CLs shortly. &gt; &gt; &lt;strong&gt;This feature only covers SVG documents in &lt;object&gt; and &lt;embed&gt;&lt;/strong&gt;. It will &gt; not apply to...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17601.html) *(mail-archive.com)*
  > &gt;&gt;&gt; https://drafts.csswg.org/css-images-3/#the-object-fit &gt;&gt;&gt; https://drafts.csswg.org/css-images-3/#the-object-position Currently, &gt;&gt;&gt; Chrome applies them to images and videos but ignores them for SVG documents &gt;&gt;&gt...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [object-fit and object-position do not apply to svg in object tag \[41302806\] - Chromium](https://issues.chromium.org/issues/41302806) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/4886345347629056`)*
  > Chromium Sign in

## 📚 Platform Documentation & Specifications

- [Apply object-fit and object-position to SVG in object/embed tags · Issue #726 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/726) *(github.com)*
- [624647 - \[css3-images\] Implement object-fit and object-position CSS properties](https://bugzilla.mozilla.org/show_bug.cgi?id=624647) *(bugzilla.mozilla.org)*
- [object-fit and object-position are ignored for SVG embedded via &lt;object&gt; and &lt;embed&gt; by Ahmad-S792 · Pull Request #75745 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/75745) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 50 result(s) found across 11 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/4886345347629056" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"html.spec.whatwg.org/multipage/rendering.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" API` — *Core feature API query* (3 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"drafts.csswg" OR "object-fit" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (6 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `object-fit object-position SVG object embed chrome release` — *Finds release notes, announcements, and ecosystem adoption news about object-fit and object-position supporting SVG in object and embed elements.* (8 returned)
  - `css object-fit object-position embedded svg tutorial example` — *Searches for developer guides, tutorials, and blog posts explaining how to use object-fit and object-position with SVG documents.* (8 returned)
  - `html object embed svg object-fit object-position code snippet` — *Discovers real-world HTML and CSS code snippets demonstrating WebIDL or CSS usage for embedded SVGs.* (8 returned)
  - `chromium bug object-fit object-position svg embed object` — *Locates developer discussions, issue trackers, and community feedback regarding the implementation of object-fit for embedded SVGs.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 5 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
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
