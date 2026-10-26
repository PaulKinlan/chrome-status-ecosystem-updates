# object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;

> **Report Week:** 2026-W44 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

SVG documents loaded through &lt;object&gt; or &lt;embed&gt; are sized and positioned inside the element's content box according to the CSS object-fit and object-position properties, the same way &lt;img&gt; content is.  Previously Chrome ignored both properties for embedded SVG documents and always stretched the document viewport to the whole content box.

### Motivation

Authors use object-fit and object-position to control how replaced content is scaled and placed inside its box.  https://drafts.csswg.org/css-images-3/#the-object-fit https://drafts.csswg.org/css-images-3/#the-object-position  Currently, Chrome applies them to images and videos but ignores them for SVG documents loaded through &lt;object&gt; or &lt;embed&gt;, which are always stretched to fill the element.  The fix has been implemented behind the SVGEmbeddedAsReplacedElement flag since M141. This entry ships it by default.

## Ecosystem Status

- **Momentum:** Emerging (footprint 100 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chrome 158 enables default support for applying CSS object-fit and object-position to SVG documents hosted in &lt;object&gt; and &lt;embed&gt; tags, resolving a decade-old inconsistency tracked in Chromium issue 41302806. The update aligns Blink with the HTML specification and CSS Images Module Level 3 by treating embedded SVGs as true replaced elements. This eliminates a prominent cross-browser discrepancy with Firefox, although full interoperability awaits an implementation from WebKit.

### Recommendations
- Actionable Advice: Developers can begin applying object-fit and object-position directly to SVG &lt;object&gt; and &lt;embed&gt; containers for Chromium and Firefox users, as default values preserve backward compatibility. However, continue testing in Safari and retain fallback viewBox sizing or aspect-ratio wrappers until WebKit resolves its corresponding implementation bug.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`object-fit`](https://webstatus.dev/features/object-fit)*

- Share of tests passing in the web-features group `object-fit` on [wpt.fyi](https://wpt.fyi/results?q=feature:object-fit) (via webstatus.dev) — stable: Chrome 49.2% · Edge 49.2% · Firefox 97.6% · Safari 46.1%; experimental: Chrome 97.7% · Edge 97.7% · Firefox 96.9% · Safari 46.9%

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/4886345347629056/activity) *(img968-dot-cr-status.appspot.com)*
  > Chrome resolved this long-standing issue (tracked under Chromium Issue #41302806) behind the \`SVGEmbeddedAsReplacedElement\` flag, shipping it enabled by default \*\*Backward Compatibility / Interoperability:\*\* Because default CSS values are \`object-fit...
- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Intent to Ship & Release Inclusion:\*\* Published on the Chrome Platform Status dashboard and included in the Chrome Release Notes (rolling out default support around Chrome 157/158)
- [\[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17499.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in and Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in and Chromestatus Sun, 20 Sep 2026 19:5...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17515.html) *(mail-archive.com)*
  > \*Web Feature ID\* object-fit ...-images-3/#the-object-position Currently, Chrome applies them to images and videos but &lt;strong&gt;ignores them for SVG documents loaded through &lt;object&gt; or &lt;embed&gt;&lt;/strong&gt;, which are always stretched to fill t...
- [\[blink-dev\] Re: Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17511.html) *(mail-archive.com)*
  > &gt; https://drafts.csswg.org/css-images-3/#the-object-fit &gt; https://drafts.csswg.org/css-images-3/#the-object-position Currently, &gt; &lt;strong&gt;Chrome applies them to images and videos but ignores them for SVG documents &gt; loaded through &lt;obj...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17646.html) *(mail-archive.com)*
  > On Fri, Oct 2, 2026 at 9:34 AM ... out-of-process frames. I am implementing the fix and &gt; will upload the CLs shortly. &gt; &gt; &lt;strong&gt;This feature only covers SVG documents in &lt;object&gt; and &lt;embed&gt;&lt;/strong&gt;. It will &gt; not apply to...
- [object-fit and object-position do not apply to svg in object tag \[41302806\] - Chromium](https://issues.chromium.org/issues/41302806) *(issues.chromium.org)*
  > As a result, &lt;strong&gt;CSS properties like object-fit and object-position were being ignored&lt;/strong&gt;. This CL modifies LayoutEmbeddedContent::ReplacedContentRectFrom() to detect SVG documents and apply the replaced element logic of their base class, m...

## 📚 Platform Documentation & Specifications

- [wpt/css/css-images/object-fit-contain-svg-001e.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/css-images/object-fit-contain-svg-001e.html) *(github.com)*
- [Apply object-fit and object-position to SVG in object/embed tags · Issue #726 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/726) *(github.com)*
- [object-fit and object-position are ignored for SVG embedded via &lt;object&gt; and &lt;embed&gt; by Ahmad-S792 · Pull Request #75745 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/75745) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 11 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/4886345347629056" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"html.spec.whatwg.org/multipage/rendering.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" API` — *Core feature API query* (3 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"drafts.csswg" OR "object-fit" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (7 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `css "object-fit" svg "object" OR "embed" tutorial example` — *Search for developer tutorials and styling guides covering how to size embedded SVG documents using CSS object-fit.* (8 returned)
  - `object[type="image/svg+xml"] "object-fit" "object-position" css` — *Find CSS code snippets demonstrating object-fit and object-position selectors applied directly to SVG object or embed tags.* (8 returned)
  - `"SVGEmbeddedAsReplacedElement" OR ("object-fit" svg "embed" chrome status)` — *Locate platform release notes, Intent to Ship announcements, and browser tracking bugs for SVG replaced element behavior.* (8 returned)
  - `svg "object-fit" not working "object" OR "embed" site:stackoverflow.com OR site:bugs.chromium.org` — *Discover developer discussions, past workarounds, and bug reports about Chrome previously ignoring object-fit on embedded SVGs.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "object-fit", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "object-fit": Chrome 49.2% passing (stable)*
- **Sources cited by the AI synthesis:** 3 result(s) found — **1 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4886345347629056)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4886345347629056)
- [Specification](https://html.spec.whatwg.org/multipage/rendering.html#embedded-content-rendering-rules)
- [Chromium Tracking Bug](https://issues.chromium.org/41302806)
