# Compression dictionary transport Updates

> **Report Week:** 2026-W45 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

When fetching rel=compression-dictionary links:  - Use "compression-dictionary" as request destination. - Properly set request's mode, credentials, referrer and referrerpolicy. - Take into account crossorigin and referrer attributes form &lt;link rel="compression-dictionary"&gt;.

### Motivation

Compression Dictionary Transport was shipped in Chromium 130. Recently Mozilla and Igalia worked on some implementation in Firefox and WebKit, quite a bunch of tests have been added and the spec has been updated. This intent to ship is to catch up with the latest changes.

## Ecosystem Status

- **Momentum:** Quiet (-90 points since 2026-10-12; footprint 120 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Compression Dictionary Transport originally launched in Chromium 130 to allow HTTP responses to be compressed against pre-negotiated shared dictionaries using Shared Brotli and Shared Zstandard. The Chrome and Edge 156 updates bring the implementation into strict alignment with revised WHATWG HTML and Fetch specifications, formalizing 'compression-dictionary' as a dedicated request destination while properly honoring element attributes like crossorigin, credentials, and referrer policies. Cross-engine alignment is strong, driven by ongoing implementation work and test suites collaboratively developed by Mozilla and Igalia across Firefox and WebKit.

### Recommendations
- Actionable Advice: Adopt dictionary transport progressively by feature-detecting element support via document.createElement('link').relList.supports('compression-dictionary') and configuring server-side Use-As-Dictionary response headers. When loading dictionaries hosted on external CDNs or origins, ensure that crossorigin and appropriate referrer policy attributes are now explicitly set on rel='compression-dictionary' link elements to avoid fetch failures under the updated specification.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`compression-dictionary-transport`](https://webstatus.dev/features/compression-dictionary-transport), shared with 3 other ChromeStatus features*

- Results of the web-features group `compression-dictionary-transport` on [wpt.fyi](https://wpt.fyi/results?q=feature:compression-dictionary-transport) (webstatus.dev has no pass rates for it)
- **Chrome usage:** 0.093% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/315))

## 📰 Ecosystem Blogs & Articles

- [trade-assistance.com](https://trade-assistance.com/blog/compression-dictionary-transport-delta-updates-chrome-156) *(trade-assistance.com)*
  > \*\*Compression Dictionary Transport\*\* allows browsers to compress HTTP responses against a previously fetched shared dictionary (such as a previous version of an app bundle or common template code) using Shared Brotli (\`dcb\`) or Shared Zstandard (\`dcz...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com)*
  > The latest updates (aligned in \*\*Chromium / Edge 156\*\* and Web Platform Tests) bring browsers into strict compliance with the Fetch and HTML specifications \*\*Respecting Link Attributes:\*\* The browser now respects \`crossorigin\`, \`referrerpolicy\`, and ...
- [wpt.fyi](https://wpt.fyi/results/fetch/compression-dictionary/fetch-destination.tentative.https.html) *(wpt.fyi)*
  > destination\` explicitly to \`"compression-dictionary"\` instead of an empty or generic destination The article notes that making the request destination \`"compression-dictionary"\` allows Service Workers and reverse proxies to reliably identify, priorit...
- [appspot.com](https://cr-status.appspot.com/feature/4895435813683200?gate=6090572807929856) *(cr-status.appspot.com)*
  > Announced as a "Chromium catches up" milestone
- [\[blink-dev\] Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17496.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Fri, 18 Sep 2026 10:16:10 -0700 \*Contact emails\* \[emai...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17502.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates 'Dan Clark' via blink-dev Mon, 21 Sep 2026 11:17:41 -0700 \*&gt; Speci...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17662.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Philip Jägenstedt Wed, 07 Oct 2026 08:09:32 -0700 LGTM2 On...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17602.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Patrick Meenan Wed, 30 Sep 2026 08:22:38 -0700 FWIW, the a...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17528.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 23 Sep 2026 08:09:27 -0700 Can you tick...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com · 2026-10-20T00:00:00)*
  > Use &quot;compression-dictionary&quot; as request destination. Properly set request&#x27;s mode, credentials, referrer and referrerpolicy. &lt;strong&gt;Take into account crossorigin and referrer attributes form &lt;link rel=&quot;compression-dictionary&qu...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17634.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Thu, 01 Oct 2026 05:09:17 -0700 Le 30/...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17496.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4895435813683200`)*
  > \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Fri, 18 Sep 2026 10:16:10 -0700 \*Contact ema...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17502.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11620`)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates 'Dan Clark' via blink-dev Mon, 21 Sep 2026 11:17:41 -070...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17662.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11620`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Philip Jägenstedt Wed, 07 Oct 2026 08:09:32 -070...

## 📚 Platform Documentation & Specifications

- [Update documentation for compression dictionary transport · Issue #875 · mdn/mdn · GitHub](https://github.com/mdn/mdn/issues/875) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 40 result(s) found across 11 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/4895435813683200" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/whatwg/html/pull/11620" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Compression dictionary transport Updates" API` — *Core feature API query* (2 returned)
  - `"Compression dictionary transport Updates" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"compression-dictionary" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Compression dictionary transport Updates" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Compression dictionary transport Updates" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (4 returned)
  - `"Compression Dictionary Transport" tutorial OR guide OR "web performance"` — *Finds technical tutorials, implementation guides, and performance optimization articles explaining compression dictionary transport.* (8 returned)
  - `"<link rel=\"compression-dictionary\"" (crossorigin OR referrerpolicy)` — *Identifies exact HTML syntax examples and snippets demonstrating link rel compression-dictionary with fetch attributes.* (8 returned)
  - `"compression dictionary transport" ("Firefox" OR "WebKit" OR "Igalia" OR "Chromium") ("Intent to Ship" OR implementation)` — *Tracks multi-engine browser engine adoption, shipping status, and standards convergence across Chromium, Gecko, and WebKit.* (8 returned)
  - `"rel=compression-dictionary" OR "compression-dictionary" ("whatwg/html/pull/11620" OR "fetch destination") (discussion OR issue)` — *Discovers specification discussions, developer questions, and standards feedback surrounding request destinations and fetch behavior for compression dictionaries.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 3 tweet(s)*
- **Tweets found by web search:** 1 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
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
