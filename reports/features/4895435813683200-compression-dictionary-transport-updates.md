# Compression dictionary transport Updates

> **Report Week:** 2026-W44 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

When fetching rel=compression-dictionary links:  - Use "compression-dictionary" as request destination. - Properly set request's mode, credentials, referrer and referrerpolicy. - Take into account crossorigin and referrer attributes form &lt;link rel="compression-dictionary"&gt;.

### Motivation

Compression Dictionary Transport was shipped in Chromium 130. Recently Mozilla and Igalia worked on some implementation in Firefox and WebKit, quite a bunch of tests have been added and the spec has been updated. This intent to ship is to catch up with the latest changes.

## Ecosystem Status

- **Momentum:** Emerging (footprint 180 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Compression Dictionary Transport originally landed in Chromium 130, and these subsequent updates align Chromium with refined WHATWG HTML and Fetch specifications hammered out during ongoing implementation work by Mozilla and Igalia. The updates establish a dedicated 'compression-dictionary' fetch destination while properly honoring element-level crossorigin and referrerpolicy attributes. Cross-engine consensus is strong, turning shared dictionary transport from a Chromium-first prototype into a robust, interoperable web standard.

### Recommendations
- Actionable Advice: Teams should adopt compression dictionary transport as a progressive enhancement, as non-supporting clients gracefully fall back to standard Brotli or gzip compression. When specifying dictionaries via link elements or HTTP headers, ensure proper CORS headers and Content Security Policy directives (specifically connect-src) are in place to align with the standardized destination model.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`compression-dictionary-transport`](https://webstatus.dev/features/compression-dictionary-transport), shared with 3 other ChromeStatus features*

- Results of the web-features group `compression-dictionary-transport` on [wpt.fyi](https://wpt.fyi/results?q=feature:compression-dictionary-transport) (webstatus.dev has no pass rates for it)
- **Chrome usage:** 0.098% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/315))

## 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://cr-status.appspot.com/feature/4895435813683200?gate=6090572807929856) *(cr-status.appspot.com)*
  > Chrome Platform Status
- [cloudflare.com](https://blog.cloudflare.com/shared-dictionaries) *(blog.cloudflare.com)*
  > After Chromium introduced initial support in Chrome 130, cross-engine development led by Mozilla and Igalia (for Firefox and WebKit) identified edge-case differences in how dictionary resources were loaded \*\*Cloudflare Blog (\*Shared Dictionaries: Com...
- [perfplanet.com](https://calendar.perfplanet.com/2024/getting-real-small-with-compression-dictionaries) *(calendar.perfplanet.com)*
  > \*\*Dedicated Request Destination (\`"compression-dictionary"\`):\*\* When \`&lt;link rel="compression-dictionary"&gt;\` (or HTTP \`Link: &lt;...&gt;; rel="compression-dictionary"\`) triggers a dictionary fetch, the request destination is explicitly marked as \`"compressio...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17528.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 23 Sep 2026 08:09:27 -0700 Can you tick...
- [\[blink-dev\] Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17496.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Fri, 18 Sep 2026 10:16:10 -0700 \*Contact emails\* \[emai...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17661.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Alex Russell Wed, 07 Oct 2026 08:08:36 -0700 LGTM1 conting...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17502.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates 'Dan Clark' via blink-dev Mon, 21 Sep 2026 11:17:41 -0700 \*&gt; Speci...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17666.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates 'Dan Clark' via blink-dev Wed, 07 Oct 2026 08:18:27 -0700 ...
- [Compression Dictionaries: Ship Only the Diff When Your Bundle Changes - DEV Community](https://dev.to/grimicorn/compression-dictionaries-ship-only-the-diff-when-your-bundle-changes-2dmf) *(dev.to · 2026-09-28T10:12:46)*
  > &lt;strong&gt;Start with your largest versioned JavaScript bundle, precompress one delta per release, and measure transfer size in DevTools on a repeat visit&lt;/strong&gt;. The MDN guide to compression dictionary transport and the Chrome team&#x27;s write-up co...
- [shared dictionaries Archives -](https://systron.net/blog/tag/shared-dictionaries) *(systron.net)*
  > Compression Dictionary Transport (hereinafter abbreviated as CDT) &lt;strong&gt;allows servers to share custom compression dictionaries with clients&lt;/strong&gt;, enabling dramatic reductions in response sizes—often by 50% or more—without sacrificing quality.
- [Using Compression Dictionaries - The Publishing Project](https://publishing-project.rivendellweb.net/using-compression-dictionaries) *(publishing-project.rivendellweb.net)*
  > We will look at how compression dictionaries work in the context of web application static assets, such as HTML, CSS, JavaScript, and WASM files using a compression dictionary for jQuery both on Netlify and the Apache HTTP server.
- [r/programming on Reddit: Dictionary Compression is finally here, and it's ridiculously good](https://www.reddit.com/r/programming/comments/1rcfofi/dictionary_compression_is_finally_here_and_its) *(reddit.com · 2026-02-23T12:05:14)*
  > The article appears to eventually get into it, but it&#x27;s not about dictionary compression itself but getting dictionary-based compression working in HTTP on the web, mostly transparently. The main use cases are delta-compressing a new version of ...
- [Microsoft Edge 156 web platform release notes (Oct. 22, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com · 2026-10-21T22:28:01)*
  > Properly sets the values for the request mode, credentials, referrer, and referrerpolicy. &lt;strong&gt;Takes into account the crossorigin and referrer attributes that are set on the &lt;link rel=&quot;compression-dictionary&quot;&gt; element&lt;/strong&gt;.
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com · 2026-10-20T08:23:54)*
  > Use &quot;compression-dictionary&quot; as request destination. Properly set request&#x27;s mode, credentials, referrer and referrerpolicy. &lt;strong&gt;Take into account crossorigin and referrer attributes form &lt;link rel=&quot;compression-dictionary&qu...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17634.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Thu, 01 Oct 2026 05:09:17 -0700 Le 30/...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17528.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4895435813683200`)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 23 Sep 2026 08:09:27 -0700 Ca...
- [\[blink-dev\] Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17496.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4895435813683200`)*
  > \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Fri, 18 Sep 2026 10:16:10 -0700 \*Contact ema...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17661.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11620`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Alex Russell Wed, 07 Oct 2026 08:08:36 -0700 LGT...

## 📚 Platform Documentation & Specifications

- [Compression Dictionary Transport - HTTP - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport) *(developer.mozilla.org)*
- [Update documentation for compression dictionary transport · Issue #875 · mdn/mdn](https://github.com/mdn/mdn/issues/875) *(github.com)*
- [Compression Dictionary Transport - Glossary - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Compression_dictionary_transport) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 11 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/4895435813683200" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/whatwg/html/pull/11620" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Compression dictionary transport Updates" API` — *Core feature API query* (4 returned)
  - `"Compression dictionary transport Updates" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"compression-dictionary" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Compression dictionary transport Updates" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Compression dictionary transport Updates" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"compression dictionary transport" ("rel=compression-dictionary" OR "compression-dictionary") tutorial OR guide` — *Finds developer tutorials, performance optimization articles, and guides explaining how to configure compression dictionary transport.* (8 returned)
  - `"<link rel=\"compression-dictionary\"" (crossorigin OR referrerpolicy)` — *Discovers real-world HTML markup snippets showing rel=compression-dictionary link tags paired with fetch attributes.* (8 returned)
  - `"Compression Dictionary Transport" (Firefox OR WebKit OR Chromium OR Igalia) ("Intent to Ship" OR status)` — *Tracks multi-engine browser implementation announcements, Igalia collaboration updates, and Intent to Ship discussions.* (8 returned)
  - `"compression-dictionary" destination (site:github.com/whatwg OR site:github.com/w3c OR site:news.ycombinator.com)` — *Uncovers specification discussions, issue tracker debates, and developer reactions to the request destination and fetch specification changes.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "compression-dictionary-transport", shared with 3 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "compression-dictionary-transport": no stable pass rate for Chrome yet*

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
