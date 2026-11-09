# object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;

> **Report Week:** 2026-W46 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

SVG documents loaded through &lt;object&gt; or &lt;embed&gt; are sized and positioned inside the element's content box according to the CSS object-fit and object-position properties, the same way &lt;img&gt; content is.  Previously Chrome ignored both properties for embedded SVG documents and always stretched the document viewport to the whole content box.

### Motivation

Authors use object-fit and object-position to control how replaced content is scaled and placed inside its box.  https://drafts.csswg.org/css-images-3/#the-object-fit https://drafts.csswg.org/css-images-3/#the-object-position  Currently, Chrome applies them to images and videos but ignores them for SVG documents loaded through &lt;object&gt; or &lt;embed&gt;, which are always stretched to fill the element.  The fix has been implemented behind the SVGEmbeddedAsReplacedElement flag since M141. This entry ships it by default.

## Ecosystem Status

- **Momentum:** Moderate (+80 points since 2026-10-12; footprint 180 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chromium's support for applying object-fit and object-position to SVG documents loaded via &lt;object&gt; and &lt;embed&gt; tags resolves a decade-old inconsistency and aligns Chromium with the WHATWG and CSS Images specifications. While Firefox has supported this embedded-replaced element sizing behavior for years, Safari has historically stretched embedded SVGs across the container bounds. The move represents a major step forward for cross-engine interoperability, though WebKit implementation remains the final hurdle.

### Recommendations
- Actionable Advice: Teams utilizing &lt;object&gt; or &lt;embed&gt; to display interactive or animated SVGs should progressively enhance layouts with object-fit, but continue defining SVG viewBox and preserveAspectRatio attributes to avoid distortion in Safari. Where cross-browser visual fidelity is strictly required without wrapper workarounds, loading SVGs through &lt;img&gt; or inline SVG markup remains the safer production choice for now.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`object-fit`](https://webstatus.dev/features/object-fit)*

- Share of tests passing in the web-features group `object-fit` on [wpt.fyi](https://wpt.fyi/results?q=feature:object-fit) (via webstatus.dev) — stable: Chrome 46.4% · Edge 46.4% · Firefox 97.1% · Safari 43.5%; experimental: Chrome 97.8% · Edge 93.5% · Firefox 97.1% · Safari 97.1%

## 📰 Ecosystem Blogs & Articles

- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > Historically, Chromium-based browsers failed to honor these properties for embedded SVG documents: regardless of CSS rules, the embedded SVG viewport was forcefully stretched across the entire content box \*\*Sources\*\*: \*ChromePlatformStatus.com\*, \*dev...
- [appspot.com](https://img968-dot-cr-status.appspot.com) *(img968-dot-cr-status.appspot.com)*
  > After long-standing tracking (stemming back to Chromium Issue 41302806, which dated back to Chrome 30), Chrome implemented the behavior behind the \`SVGEmbeddedAsReplacedElement\` flag and shipped it enabled by default in \*\*Chrome 158\*\* (alongside \*\*Ed...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/158) *(learn.microsoft.com)*
  > After long-standing tracking (stemming back to Chromium Issue 41302806, which dated back to Chrome 30), Chrome implemented the behavior behind the \`SVGEmbeddedAsReplacedElement\` flag and shipped it enabled by default in \*\*Chrome 158\*\* (alongside \*\*Ed...
- [webdevbriefing.com](https://webdevbriefing.com/chrome-158-beta-css-highlights-media-states-web-install) *(webdevbriefing.com)*
  > The release notes specifically announce that SVG documents loaded via \`&lt;object&gt;\` or \`&lt;embed&gt;\` now scale and align inside the content box according to \`object-fit\` (e.g., \`contain\`, \`cover\`, \`scale-down\`) and \`object-position\` \*\*Sources\*\*: \*Frontend d...
- [google.com](https://issuetracker.google.com/issues/564190097) *(issuetracker.google.com)*
  > \*\*Sources\*\*: \*MDN GitHub repository & documentation updates\* MDN documentation updates for \`object-fit\` and \`object-position\` were merged to clarify browser behavior changes
- [\[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17499.html) *(mail-archive.com)*
  > Initial public proposal No information ... that do not set these properties render as before. &lt;strong&gt;Rendering changes where authors intentionally set object-fit / object-position on an &lt;object&gt;/&lt;embed&gt; hosting an SVG document&lt;/strong&gt;.....
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17601.html) *(mail-archive.com)*
  > &gt; &gt; Best, &gt; Felipe &gt; &gt; On Tuesday, ... &gt;&gt;&gt; &gt;&gt;&gt; \*Summary\* &gt;&gt;&gt; &lt;strong&gt;SVG documents loaded through &lt;object&gt; or &lt;embed&gt; are sized and &gt;&gt;&gt; positioned inside the element&#x27;s content box ac...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17515.html) *(mail-archive.com)*
  > \*Web Feature ID\* object-fit ...-images-3/#the-object-position Currently, Chrome applies them to images and videos but &lt;strong&gt;ignores them for SVG documents loaded through &lt;object&gt; or &lt;embed&gt;&lt;/strong&gt;, which are always stretched to fill t...
- [\[blink-dev\] Re: Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17511.html) *(mail-archive.com)*
  > &gt; https://drafts.csswg.org/css-images-3/#the-object-fit &gt; https://drafts.csswg.org/css-images-3/#the-object-position Currently, &gt; &lt;strong&gt;Chrome applies them to images and videos but ignores them for SVG documents &gt; loaded through &lt;obj...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17663.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; The remaining gap is out-of-process frames. I am implementing the fix and &gt;&gt; will upload the CLs shortly. &gt;&gt; &gt;&gt; &lt;strong&gt;This feature only covers SVG documents in &lt;object&gt; and &lt;embed&gt;&lt;/strong&gt;. It will &...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17644.html) *(mail-archive.com)*
  > This Intent was initially about ... frames. I am implementing the fix and will upload the CLs shortly. &lt;strong&gt;This feature only covers SVG documents in &lt;object&gt; and &lt;embed&gt;&lt;/strong&gt;. It will not apply to responsively-sized iframes, at le...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17646.html) *(mail-archive.com)*
  > On Fri, Oct 2, 2026 at 9:34 AM ... out-of-process frames. I am implementing the fix and &gt; will upload the CLs shortly. &gt; &gt; &lt;strong&gt;This feature only covers SVG documents in &lt;object&gt; and &lt;embed&gt;&lt;/strong&gt;. It will &gt; not apply to...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17575.html) *(mail-archive.com)*
  > Known limitation: SVG documents &gt; hosted in an out-of-process frame are not covered and keep the old &gt; behaviour. &gt; &gt; \*Gecko\*: Shipped/Shipping (https://wpt.fyi/results/css/css-images) See &gt; the related WPT tests in the css-images fold...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17517.html) *(mail-archive.com)*
  > &gt; &gt; \*Will this feature be supported on all six Blink platforms (Windows, Mac, &gt; Linux, ChromeOS, Android, and Android WebView)?\* &gt; Yes &gt; &gt; \*Is this feature fully tested by web-platform-tests &gt; &lt;https://chromium.googlesource.co...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17577.html) *(mail-archive.com)*
  > &gt;&gt; https://drafts.csswg.org/css-images-3/#the-object-fit &gt;&gt; https://drafts.csswg.org/css-images-3/#the-object-position Currently, &gt;&gt; Chrome applies them to images and videos but ignores them for SVG documents &gt;&gt; loaded through...
- [317804 &ndash; object-fit: scale-down ignored on &lt;embed&gt; and &lt;object&gt; embedding an SVG document (object-position too)](https://bugs.webkit.org/show_bug.cgi?id=317804) *(bugs.webkit.org)*
  > 317804 &ndash; object-fit: scale-down ignored on &lt;embed&gt; and &lt;object&gt; embedding an SVG document (object-position too) WebKit Bugzilla Bug 317804: object-fit: scale-down ignored on &lt;embed&gt; and &lt;object&gt; embedding an SVG document (object-position too) -...

## 📚 Platform Documentation & Specifications

- [Reporting/Interoperability.md at main · Supporters-Of-Chromium-Based-Browsers/Reporting · GitHub](https://github.com/Supporters-Of-Chromium-Based-Browsers/Reporting/blob/main/Interoperability.md) *(github.com)*
- [Apply object-fit and object-position to SVG in object/embed tags · Issue #726 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/726) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 63 result(s) found across 11 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/4886345347629056" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"html.spec.whatwg.org/multipage/rendering.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" API` — *Core feature API query* (8 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"drafts.csswg" OR "object-fit" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"object-fit and object-position apply to SVG documents in <object> and <embed>" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"object-fit" "SVG" ("<object>" OR "<embed>") tutorial OR guide` — *Practical guides and articles demonstrating how CSS object-fit and object-position control SVG layout in object and embed tags.* (8 returned)
  - `css "object-fit: contain" OR "object-fit: cover" "object[type='image/svg+xml']"` — *Real-world CSS selector and property code snippets applying object-fit rules directly to embedded SVG object elements.* (8 returned)
  - `"SVGEmbeddedAsReplacedElement" OR ("object-fit" "object" "embed" Chrome (141 OR 142))` — *Browser release notes, feature tracking, and implementation status for shipping object-fit support on embedded SVG documents.* (8 returned)
  - `site:issues.chromium.org OR site:github.com/w3c/csswg-drafts "object-fit" ("<object>" OR "<embed>") SVG` — *Specification issues, Chromium bug tracker discussions, and developer feedback on embedded SVG replaced element sizing.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "object-fit", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "object-fit": Chrome 46.4% passing (stable)*
- **Sources cited by the AI synthesis:** 5 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 11 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4886345347629056)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4886345347629056)
- [Specification](https://html.spec.whatwg.org/multipage/rendering.html#embedded-content-rendering-rules)
- [Chromium Tracking Bug](https://issues.chromium.org/41302806)
