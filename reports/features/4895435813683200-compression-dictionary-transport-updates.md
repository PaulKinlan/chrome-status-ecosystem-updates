# Compression dictionary transport Updates

> **Report Week:** 2026-W41 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

When fetching rel=compression-dictionary links:  - Use "compression-dictionary" as request destination. - Properly set request's mode, credentials, referrer and referrerpolicy. - Take into account crossorigin and referrer attributes form &lt;link rel="compression-dictionary"&gt;.

### Motivation

Compression Dictionary Transport was shipped in Chromium 130. Recently Mozilla and Igalia worked on some implementation in Firefox and WebKit, quite a bunch of tests have been added and the spec has been updated. This intent to ship is to catch up with the latest changes.

## Ecosystem Status

- **Momentum:** High (211 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Originally shipped in Chromium 130, Compression Dictionary Transport receives a standards alignment update in Chrome 156 to track WHATWG HTML PR #11620. This refinement standardizes fetch behavior when loading \`&lt;link rel="compression-dictionary"&gt;\`, ensuring requests use the dedicated 'compression-dictionary' request destination while correctly propagating \`crossorigin\`, credentials, and referrer policies. The update solidifies cross-engine interoperability as Firefox and WebKit progress their own implementations alongside shared Web Platform Tests.

### Recommendations
- Actionable Advice: Web teams serving shared Brotli or Zstandard dictionaries should safely include \`&lt;link rel="compression-dictionary"&gt;\` alongside appropriate \`crossorigin\` and \`referrerpolicy\` attributes today. The feature is inherently progressive enhancement: browsers lacking support or trailing on spec updates will simply treat unrecognized \`rel\` attributes as harmless no-ops without degrading navigation performance.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "A one‑line change can force a returning user to download a fresh 270 KB bundle because gzip/Brotli compress each respons" (1 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [A one‑line change can force a returning user to download a fresh 270 KB bundle because gzip/Brotli compress each respons](https://twitter.com/zyvop1/status/2104529797041008727) — *by @zyvop1, 1 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Twitter](https://twitter.com/CompressionSol1) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Compression Guru (@CompressionGuru) / ...](https://twitter.com/compressionguru?lang=en) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [PRO Compression (@PROCompression) / ...](https://twitter.com/PROCompression) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Arun Thangaraj (@Transport\_DM) / X](https://twitter.com/transport_dm) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [RCEA (@RCEAssoc) on X](https://twitter.com/RCEAssoc) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [compressionbox4 - 圧縮箱](https://twitter.com/compressionbox4) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [BFI (@BFI) on X](https://twitter.com/BFI/status/1128619328734138375) — *by @BFI, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17496.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Fri, 18 Sep 2026 10:16:10 -0700 *Contact emails* [emai...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17502.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates 'Dan Clark' via blink-dev Mon, 21 Sep 2026 11:17:41 -0700 *> Speci...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17600.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 30 Sep 2026 08:12:32 -0700 Look...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17528.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 23 Sep 2026 08:09:27 -0700 Can you tick...
- [Compression Dictionary Transport: The Future of Web Performance -](https://systron.net/blog/compression-dictionary-transport-the-future-of-web-performance) *(systron.net · 2025-12-18T08:14:53)*
  > Compression Dictionary Transport: The Future of Web Performance - Skip to content Menu Compression Dictionary Transport: The Future of Web Performance In the ever-evolving landscape of web performance, every byte counts. As websites grow more complex...
- [Improving Google Search with Compression Dictionaries \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/search-compression-dictionaries) *(developer.chrome.com · 2025-05-14T00:00:00)*
  > Improving Google Search with Compression Dictionaries | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית ال...
- [The Ultimate Guide to Shared Compression Dictionaries \| DebugBear](https://www.debugbear.com/blog/shared-compression-dictionaries) *(debugbear.com · 2025-10-19T21:18:48)*
  > The Ultimate Guide to Shared Compression Dictionaries | DebugBear Skip to main content Fix Your Website Performance Deliver a great user experience with in-depth page speed insights and monitoring. Start Free Trial Go To App The Ultimate Guide to Sha...
- [RFC 9842 - Compression Dictionary Transport](https://datatracker.ietf.org/doc/rfc9842) *(datatracker.ietf.org)*
  > RFC 9842 - Compression Dictionary Transport Skip to main content Javascript disabled? Like other modern websites, the IETF Datatracker relies on Javascript. Please enable Javascript for full functionality. Compression Dictionary Transport RFC 9842 St...
- [Supercharge compression efficiency with shared dictionaries \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/shared-dictionary-compression) *(developer.chrome.com · 2024-03-06T00:00:00)*
  > If you&#x27;re interested in giving ... own to get a feel for how it works, you can <strong>enable the Compression dictionary transport experimental feature on the chrome://flags page</strong>....
- [Compression Dictionaries: Ship Only the Diff When Your Bundle Changes - DEV Community](https://dev.to/grimicorn/compression-dictionaries-ship-only-the-diff-when-your-bundle-changes-2dmf) *(dev.to · 2026-09-28T10:12:46)*
  > <strong>Start with your largest versioned JavaScript bundle, precompress one delta per release, and measure transfer size in DevTools on a repeat visit</strong>. The MDN guide to compression dictionary transport and the Chrome team&#x27;s write-up co...
- [RFC 9842: Compression Dictionary Transport \| RFC Editor](https://www.rfc-editor.org/info/rfc9842) *(rfc-editor.org · 2025-09-30T00:00:00)*
  > By utilizing this technique, clients and servers can reduce the size of transmitted data, leading to improved performance and reduced bandwidth consumption. This document extends existing HTTP compression methods and provides guidelines for the deliv...
- [Using Compression Dictionaries - The Publishing Project](https://publishing-project.rivendellweb.net/using-compression-dictionaries) *(publishing-project.rivendellweb.net)*
  > We will look at how compression dictionaries work in the context of web application static assets, such as HTML, CSS, JavaScript, and WASM files using a compression dictionary for jQuery both on Netlify and the Apache HTTP server.
- [My internship: Brotli compression using a reduced dictionary \| Cloudflare Blog](https://blog.cloudflare.com/brotli-compression-using-a-reduced-dictionary) *(blog.cloudflare.com · 2026-07-15T13:23:35)*
  > <strong>With the improved dictionary approach, we are now able to compress HTML, JavaScript and CSS files as well</strong>, or sometimes even better than using a higher compression level would allow us, all while using only 1% to 3% more CPU.
- [r/programming on Reddit: Dictionary Compression is finally here, and it's ridiculously good](https://www.reddit.com/r/programming/comments/1rcfofi/dictionary_compression_is_finally_here_and_its) *(reddit.com · 2026-02-23T12:05:14)*
  > The article appears to eventually get into it, but it&#x27;s not about dictionary compression itself but getting dictionary-based compression working in HTTP on the web, mostly transparently. The main use cases are delta-compressing a new version of ...
- [Dictionary Coding - The Hitchhiker's Guide to Compression](https://go-compression.github.io/algorithms/dictionary) *(go-compression.github.io)*
  > While dictionary coders may sound imperfect and niche, they’re quite the opposite. <strong>Web compression algorithms like Brotli use a dictionary with the most common words, HTML tags, JavaScript tokens, and CSS properties to encode web assets</stro...
- [stability of javascript design-patterns for dictionary-based compression](https://esdiscuss.org/topic/stability-of-javascript-design-patterns-for-dictionary-based-compression) *(esdiscuss.org)*
  > there&#x27;s a discussion to web-standardize zstandard-compression, which digressed somewhat on javascript language-stability [1]. they want to improve performance over existing zlib using context-specific js/html/css/etc dictionaries.
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17596.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates · Daniel Bratell Wed, 30 Sep 2026 07:48:59 -0700 · Looking at the shipping entry in chromestatus, it seems to lack the · necessary re...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17496.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4895435813683200`)*
  > [blink-dev] Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Fri, 18 Sep 2026 10:16:10 -0700 *Contact ema...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17502.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4895435813683200`)*
  > [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates 'Dan Clark' via blink-dev Mon, 21 Sep 2026 11:17:41 -070...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17600.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11620`)*
  > Re: [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 30 Sep 2026 08:12:32 ...

## 📚 Platform Documentation & Specifications

- [Compression Dictionary Transport - Glossary - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Compression_dictionary_transport) *(developer.mozilla.org)*
- [rel="compression-dictionary" HTML attribute value - HTML \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) *(developer.mozilla.org)*
- [compression-dictionary-transport/examples.md at main · WICG/compression-dictionary-transport](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) *(github.com)*
- [Compression Dictionary Transport](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 34 result(s) found across 7 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/4895435813683200" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/whatwg/html/pull/11620" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Compression dictionary transport Updates" API` — *Core feature API query* (2 returned)
  - `"Compression dictionary transport Updates" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"compression-dictionary" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Compression dictionary transport Updates" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Compression dictionary transport Updates" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 119 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4895435813683200)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4895435813683200)
- [Specification](https://github.com/whatwg/html/pull/11620)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40255884)
