# Compression dictionary transport Updates

> **Report Week:** 2026-W42 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

When fetching rel=compression-dictionary links:  - Use "compression-dictionary" as request destination. - Properly set request's mode, credentials, referrer and referrerpolicy. - Take into account crossorigin and referrer attributes form &lt;link rel="compression-dictionary"&gt;.

### Motivation

Compression Dictionary Transport was shipped in Chromium 130. Recently Mozilla and Igalia worked on some implementation in Firefox and WebKit, quite a bunch of tests have been added and the spec has been updated. This intent to ship is to catch up with the latest changes.

## Ecosystem Status

- **Momentum:** Moderate (footprint 210 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Compression Dictionary Transport (CDT) is transitioning from initial Chromium deployment toward robust cross-engine standardization as WHATWG HTML and Fetch specifications codify dedicated dictionary fetching semantics. This update aligns Chromium with recent implementation efforts in Firefox and WebKit driven by Mozilla and Igalia, standardizing the dedicated 'compression-dictionary' request destination, Content Security Policy enforcement under connect-src, and CORS/referrer handling on link elements. Cross-engine consensus is unusually collaborative, clearing the path toward full multi-vendor interoperability for massive asset-transfer savings.

### Recommendations
- Actionable Advice: Adopt dictionary compression today as a progressive enhancement, ensuring that dictionary URLs are covered by CSP connect-src or default-src directives and configured with proper CORS headers for cross-origin assets. Continue serving standard Brotli or Zstandard encodings as fallbacks until Gecko and WebKit ship full default availability.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`compression-dictionary-transport`](https://webstatus.dev/features/compression-dictionary-transport), shared with 3 other ChromeStatus features*

- Results of the web-features group `compression-dictionary-transport` on [wpt.fyi](https://wpt.fyi/results?q=feature:compression-dictionary-transport) (webstatus.dev has no pass rates for it)
- **Chrome usage:** 0.11% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/315))

## 📰 Ecosystem Blogs & Articles

- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/refs/tags/134.0.6976.1/docs/experiments/compression-dictionary-transport.md) *(chromium.googlesource.com)*
  > \* \*\*Dedicated Request Destination:\*\* Fetches initiated by \`&lt;link rel="compression-dictionary"&gt;\` or \`Link: &lt;...&gt;; rel="compression-dictionary"\` now explicitly use \`"compression-dictionary"\` as their fetch request destination
- [webkit.org](https://results.webkit.org/commit?repository_id=webkit&id=319327%40main) *(results.webkit.org)*
  > \*\*Context & Motivation:\*\* While base dictionary transport shipped in Chromium 130, Mozilla and Igalia have been implementing CDT in Gecko (Firefox) and WebKit (Safari) destination === "compression-dictionary"\`) and uniform CORS enforcement when loadi...
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > Developer Tooling & Ecosystem Monitoring (Polypane, Standards Bodies) \* \*\*Polypane Experimental Features:\*\* Polypane tracks this update as \*\*"CDT New Destination"\*\*, highlighting the standardization of \`crossorigin\` and \`referrer\` attributes on link ...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17600.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 30 Sep 2026 08:12:32 -0700 Look...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17528.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 23 Sep 2026 08:09:27 -0700 Can you tick...
- [RFC 9842: Compression Dictionary Transport \| RFC Editor](https://www.rfc-editor.org/info/rfc9842) *(rfc-editor.org · 2025-09-30T00:00:00)*
  > By utilizing this technique, clients and servers can reduce the size of transmitted data, leading to improved performance and reduced bandwidth consumption. This document extends existing HTTP compression methods and provides guidelines for the deliv...
- [Using Compression Dictionaries - The Publishing Project](https://publishing-project.rivendellweb.net/using-compression-dictionaries) *(publishing-project.rivendellweb.net)*
  > We will look at how compression dictionaries work in the context of web application static assets, such as HTML, CSS, JavaScript, and WASM files using a compression dictionary for jQuery both on Netlify and the Apache HTTP server.
- [r/programming on Reddit: Dictionary Compression is finally here, and it's ridiculously good](https://www.reddit.com/r/programming/comments/1rcfofi/dictionary_compression_is_finally_here_and_its) *(reddit.com · 2026-02-23T12:05:14)*
  > The article appears to eventually get into it, but it&#x27;s not about dictionary compression itself but getting dictionary-based compression working in HTTP on the web, mostly transparently. The main use cases are delta-compressing a new version of ...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17596.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Daniel Bratell Wed, 30 Sep 2026 07:48:59 -0700 Looking at ...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17502.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates 'Dan Clark' via blink-dev Mon, 21 Sep 2026 11:17:41 -0700 \*&gt; Speci...
- [\[blink-dev\] Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17496.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Fri, 18 Sep 2026 10:16:10 -0700 \*Contact emails\* \[emai...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > Use &quot;compression-dictionary&quot; as request destination. Properly set request&#x27;s mode, credentials, referrer and referrerpolicy. &lt;strong&gt;Take into account crossorigin and referrer attributes form &lt;link rel=&quot;compression-dictionary&qu...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17634.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Thu, 01 Oct 2026 05:09:17 -0700 Le 30/...
- [Getting Real (small) With Compression Dictionaries - Web Performance Calendar](https://calendar.perfplanet.com/2024/getting-real-small-with-compression-dictionaries) *(calendar.perfplanet.com)*
  > Getting Real (small) With Compression Dictionaries - Web Performance Calendar Web Performance Calendar The speed geek&#039;s favorite time of year 2024 Edition Getting Real (small) With Compression Dictionaries 29th Dec 2024 by Patrick Meenan ABOUT T...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17600.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11620`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 30 Sep 2026 08:12:32 ...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Sec-Fetch-Dest) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Fetch_metadata) *(developer.mozilla.org)*
- [mozilla.org](https://firefox-source-docs.mozilla.org/networking/cache2/doc.html) *(firefox-source-docs.mozilla.org)*
- [rel="compression-dictionary" - HTML - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) *(developer.mozilla.org)*
- [compression-dictionary-transport/examples.md at main · WICG/compression-dictionary-transport](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) *(github.com)*
- [Update documentation for compression dictionary transport · Issue #875 · mdn/mdn](https://github.com/mdn/mdn/issues/875) *(github.com)*
- [Compression Dictionary Transport - HTTP \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 55 result(s) found across 11 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/4895435813683200" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/whatwg/html/pull/11620" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Compression dictionary transport Updates" API` — *Core feature API query* (1 returned)
  - `"Compression dictionary transport Updates" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"compression-dictionary" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Compression dictionary transport Updates" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Compression dictionary transport Updates" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"rel=compression-dictionary" (guide OR tutorial OR "web performance")` — *Find practical developer guides and tutorials explaining how to configure rel=compression-dictionary for web performance optimization.* (8 returned)
  - `"<link rel=\"compression-dictionary\"" (crossorigin OR referrerpolicy)` — *Discover real-world HTML markup examples implementing compression dictionary links with crossorigin and referrerpolicy attributes.* (8 returned)
  - `"Compression Dictionary Transport" ("Intent to Ship" OR Igalia OR WebKit OR Mozilla)` — *Track multi-engine implementation progress and standardization updates across Chromium, Firefox, and WebKit.* (8 returned)
  - `"compression dictionary transport" ("Brotli" OR "Zstandard") (site:news.ycombinator.com OR site:reddit.com OR site:github.com)` — *Uncover developer community discussions and feedback regarding compression dictionary transport deployment and real-world efficiency.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 1 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "compression-dictionary-transport", shared with 3 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "compression-dictionary-transport": no stable pass rate for Chrome yet*
- **Sources cited by the AI synthesis:** 7 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 12 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4895435813683200)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4895435813683200)
- [Specification](https://github.com/whatwg/html/pull/11620)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40255884)
