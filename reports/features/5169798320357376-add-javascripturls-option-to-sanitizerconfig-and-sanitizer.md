# Add javascriptURLs option to SanitizerConfig and Sanitizer

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 | **Category:** Enabled by default

## Overview

https://github.com/whatwg/html/pull/12898  Sanitizer API also sanitizes javascript:-URLs, when they are used for navigation. This was originally done as a side effect of any "safe" method that uses Sanitizer, and omittted for any "unsafe" method. The HTML standard recently regularized this and made this a developer-selectable option, instead of a side-effect of a particular method.  Behaviour when the option is not used remains the same.

### Motivation

Previously, Sanitizer API already supported sanitizing javascript:-URLs, but only for "safe" methods. This was awkward if users wanted to use the "unsafe" methods for some reason, but still wanted javascript:-URLs removed.  Further discussion on: https://github.com/whatwg/html/issues/12686 https://github.com/whatwg/html/pull/12898

## Ecosystem Status

- **Momentum:** High (+195 points since 2026-10-12; footprint 255 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The addition of the \`javascriptURLs\` option to \`SanitizerConfig\` and the \`Sanitizer\` interface regularizes the handling of navigation-related \`javascript:\` URLs, transforming what was previously an implicit side effect of 'safe' insertion methods into an explicit, configurable setting that defaults to disallowing them. The update reached swift tri-engine consensus in the WHATWG HTML repository to remove the awkward behavioral divergence between safe and unsafe HTML methods. With implementations rolling out across modern Chromium and Firefox releases and WebKit treating it as a natural extension of the broader Sanitizer API, the feature firmly solidifies native DOM sanitization semantics.

### Recommendations
- Actionable Advice: Teams utilizing native Sanitizer APIs should explicitly declare \`{ javascriptURLs: false }\` when configuring custom sanitizers or unsafe insertion paths to guarantee defense-in-depth against script-based navigation injection. For production environments requiring broad legacy browser support, developers should continue pairing native Sanitizer calls with feature detection or mature userland libraries like DOMPurify.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Yeah this is fine. I'm going to duplicate this into our existing Sanitizer API issue as I don't think this needs its own dashboard entry, but I apprec..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Add javascriptURLs option to SanitizerConfig](https://github.com/WebKit/standards-positions/issues/738) [closed]

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/release-notes/159) *(chromestatus.com)*
  > In the HTML Sanitizer API specification (WHATWG HTML PR #12898 \*\*Coverage\*\*: Tracked under Chrome Platform Status (\*"Add javascriptURLs option to SanitizerConfig and Sanitizer"\*) and rolled out in Chromium 157 / 159 cycles
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > In the HTML Sanitizer API specification (WHATWG HTML PR #12898), the handling of \`javascript:\` URLs—such as \`&lt;a href="javascript:..."&gt;\`—was previously tied to the choice of insertion method "Safe" methods (like \`Element.prototype.setHTML()\`) automati...
- [web.dev](https://web.dev/blog/web-platform-10-2026?hl=en) *(web.dev)*
  > \*\*\`Sanitizer.prototype.setJavascriptURLs(boolean)\`\*\*: An imperative method on instances to toggle this behavior dynamically \*\*Coverage\*\*: Rachel Andrew and the Chrome/web.dev team featured the update under the monthly web platform highlights
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5169798320357376?gate=6096251476115456) *(img968-dot-cr-status.appspot.com)*
  > \*\*Coverage\*\*: Tracked under Chrome Platform Status (\*"Add javascriptURLs option to SanitizerConfig and Sanitizer"\*) and rolled out in Chromium 157 / 159 cycles \*\*Key Takeaway\*\*: The Chromium team emphasized that making URL sanitization an explicit, f...
- [\[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17726.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Chromestatus Wed, 14 Oct 2026 09:12:00...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17747.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Mike Taylor Thu, 15 Oct 2026 0...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17764.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer 'Daniel Vogelheim' via blink-d...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17814.html) *(mail-archive.com)*
  > It&#x27;s the highest priority request about this API that we hear from teams at MSFT, and lack of this in the Worker and Service Worker context is a constant bundle bloater. Currently workers don&#x27;t support anything related to the HTML parser. e...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17939.html) *(mail-archive.com)*
  > Thanks all! The WebKit standards position request can be found here, https://github.com/WebKit/standards-positions/issues/738, and was swiftly answered &lt;https://github.com/WebKit/standards-positions/issues/738#issuecomment-6638188575&gt; . I&#x27;...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17778.html) *(mail-archive.com)*
  > Agree with Mike that we should not extrapolate and should, instead, file requests to get them on the record. Even strong opposition won&#x27;t block us shipping, so there&#x27;s no risk here of filing · As for the specific API, it&#x27;s good to see,...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17817.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer · Chris Harrelson Wed, 21 Oct 2026 08:20:23 -0700 · LGTM2 with the same condition. On Wed, Oct 21, 2026 at 8:15 AM Mike...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17813.html) *(mail-archive.com)*
  > Ok, so let&#x27;s update the bits in the Intent. As for Worker parsing, yes, we&#x27;re all aware. Still needs progress = ) · On Monday, October 19, 2026 at 11:28:39 AM UTC-7 Noam Rosenthal wrote: On Mon, Oct 19, 2026 at 7:21 PM Alex Russell &lt;\[ema...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17766.html) *(mail-archive.com)*
  > I see this shipped in Firefox: https://bugzilla.mozilla.org/show\_bug.cgi?id=2068934#c9 - can you update the chromestatus entry? Done. ... Can we request a signal please? Are you sure? WebKit has not implemented the underlying feature (Sanitizer API, ...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17866.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; Currently workers don&#x27;t support anything related to the HTML parser. &gt;&gt; e.g. It&#x27;s impossible to create HTML DOM nodes in a worker. e.g. &gt;&gt; \`DOMParser\` is only available in a \`Window\` context. &gt;&gt; This mean...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17726.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Chromestatus Wed, 14 Oct 202...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17747.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Mike Taylor Thu, 15 ...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17764.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer 'Daniel Vogelheim' v...
- [2068934 - Sanitizer API: javascript URL handling should be part of the config](https://bugzilla.mozilla.org/show_bug.cgi?id=2068934) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/whatwg/html/pull/12898`)*
  > 2068934 - Sanitizer API: javascript URL handling should be part of the config Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advanced Search New Bug Rep...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/mdn/mdn/issues/862) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/158) *(developer.mozilla.org)*
- [github.com](https://github.com/whatwg/html/issues/12686) *(github.com)*
- [github.com](https://github.com/web-platform-tests/wpt/blob/master/sanitizer-api/sanitizer-javascript-url.html) *(github.com)*
- [github.com](https://github.com/mdn/content/issues/45898) *(github.com)*
- [2068934 - Sanitizer API: javascript URL handling should be part of the config](https://bugzilla.mozilla.org/show_bug.cgi?id=2068934) *(bugzilla.mozilla.org)*
- [Add javascriptURLs option to SanitizerConfig · Issue #738 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/738) *(github.com)*
- [Document Sanitizer javascriptURLs and setJavascriptURLs() by pepelsbey · Pull Request #46111 · mdn/content · GitHub](https://github.com/mdn/content/pull/46111) *(github.com)*
- [Fx158: Sanitizer javascriptURLs option and setJavascriptURLs() by pepelsbey · Pull Request #46110 · mdn/content · GitHub](https://github.com/mdn/content/pull/46110) *(github.com)*
- [HTML Standard](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html) *(html.spec.whatwg.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 49 result(s) found across 11 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/5169798320357376" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/whatwg/html/pull/12898" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" API` — *Core feature API query* (8 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"github.com" OR ":-urls" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"SanitizerConfig" "javascriptURLs"` — *Finds code samples, WebIDL signatures, and Web Platform Tests showing how to configure the javascriptURLs option.* (8 returned)
  - `"Sanitizer API" "javascriptURLs" blog OR guide OR tutorial` — *Discovers developer blog posts and guides detailing Sanitizer API URL handling and the javascriptURLs configuration.* (8 returned)
  - `"javascriptURLs" "Sanitizer" ("Intent to Ship" OR "Chrome" OR "WebKit" OR "Firefox")` — *Surfaces browser vendor implementation status, intent-to-ship threads, and platform support signals.* (8 returned)
  - `"whatwg/html" ("12898" OR "12686") OR ("SanitizerConfig" "javascriptURLs")` — *Tracks specification discussions, standards rationale, and community feedback in WHATWG HTML issues and pull requests.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 5 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5169798320357376)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5169798320357376)
- [Specification](https://github.com/whatwg/html/pull/12898)
