# Compression dictionary transport Updates

> **Report Week:** 2026-W43 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

When fetching rel=compression-dictionary links:  - Use "compression-dictionary" as request destination. - Properly set request's mode, credentials, referrer and referrerpolicy. - Take into account crossorigin and referrer attributes form &lt;link rel="compression-dictionary"&gt;.

### Motivation

Compression Dictionary Transport was shipped in Chromium 130. Recently Mozilla and Igalia worked on some implementation in Firefox and WebKit, quite a bunch of tests have been added and the spec has been updated. This intent to ship is to catch up with the latest changes.

## Ecosystem Status

- **Momentum:** Emerging (footprint 130 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Compression Dictionary Transport originally landed in Chromium 130, and these updates synchronize the engine with finalized WHATWG HTML and Fetch specifications by explicitly setting the request destination to 'compression-dictionary' and respecting CORS and referrer policy attributes. While production adoption is spearheaded by large platforms and edge networks reporting massive bandwidth reductions of 60% to 90%, baseline interoperability across the broader web remains limited. Cross-engine consensus is strengthening rapidly as collaborative implementation work by Mozilla and Igalia reaches Firefox and WebKit.

### Recommendations
- Actionable Advice: Teams should adopt compression dictionaries via progressive enhancement by adding link tags with explicit crossorigin and referrerpolicy attributes, ensuring that servers negotiate shared dictionaries for supporting clients while maintaining standard Brotli or Zstandard fallbacks for others.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`compression-dictionary-transport`](https://webstatus.dev/features/compression-dictionary-transport), shared with 3 other ChromeStatus features*

- Results of the web-features group `compression-dictionary-transport` on [wpt.fyi](https://wpt.fyi/results?q=feature:compression-dictionary-transport) (webstatus.dev has no pass rates for it)
- **Chrome usage:** 0.096% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/315))

## 📰 Ecosystem Blogs & Articles

- [perfplanet.com](https://calendar.perfplanet.com/2025/from-theory-to-tiny-implementing-compression-dictionaries) *(calendar.perfplanet.com)*
  > Townsend’s follow-up covers real-world implementation challenges, highlighting how fine-grained request controls (destination, credentials) prevent security side-channel leaks and unexpected cache partitioning issues \*\*Cross-Engine Interoperability\*\*...
- [cloudflare.com](https://blog.cloudflare.com/shared-dictionaries) *(blog.cloudflare.com)*
  > \*\*Summary\*\*: Discusses the security posture of the specification, particularly the strict CORS and cache partitioning rules Cloudflare highlights why having an explicit destination (\`"compression-dictionary"\`) and proper origin handling is vital so t...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17528.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 23 Sep 2026 08:09:27 -0700 Can you tick...
- [\[blink-dev\] Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17496.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Fri, 18 Sep 2026 10:16:10 -0700 \*Contact emails\* \[emai...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17662.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Philip Jägenstedt Wed, 07 Oct 2026 08:09:32 -0700 LGTM2 On...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17502.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates 'Dan Clark' via blink-dev Mon, 21 Sep 2026 11:17:41 -0700 \*&gt; Speci...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17600.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 30 Sep 2026 08:12:32 -0700 Look...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17596.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Daniel Bratell Wed, 30 Sep 2026 07:48:59 -0700 Looking at ...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > Use &quot;compression-dictionary&quot; as request destination. Properly set request&#x27;s mode, credentials, referrer and referrerpolicy. &lt;strong&gt;Take into account crossorigin and referrer attributes form &lt;link rel=&quot;compression-dictionary&qu...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17634.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Thu, 01 Oct 2026 05:09:17 -0700 Le 30/...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17528.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4895435813683200`)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 23 Sep 2026 08:09:27 -0700 Ca...
- [\[blink-dev\] Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17496.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4895435813683200`)*
  > \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Fri, 18 Sep 2026 10:16:10 -0700 \*Contact ema...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17662.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11620`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Philip Jägenstedt Wed, 07 Oct 2026 08:09:32 -070...

## 📚 Platform Documentation & Specifications

- [rel="compression-dictionary" - HTML - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/html/reference/attributes/rel/compression-dictionary/index.md?plain=1) *(github.com)*
- [Update documentation for compression dictionary transport · Issue #875 · mdn/mdn · GitHub](https://github.com/mdn/mdn/issues/875) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 47 result(s) found across 11 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/4895435813683200" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/whatwg/html/pull/11620" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Compression dictionary transport Updates" API` — *Core feature API query* (3 returned)
  - `"Compression dictionary transport Updates" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"compression-dictionary" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Compression dictionary transport Updates" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Compression dictionary transport Updates" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"compression dictionary transport" (tutorial OR guide OR "web performance")` — *Find developer guides, practical tutorials, and web performance articles explaining how to use compression dictionaries.* (8 returned)
  - `"<link rel=\"compression-dictionary\"" (crossorigin OR referrerpolicy)` — *Search for exact HTML code snippets and attribute configurations using the rel=compression-dictionary link element.* (8 returned)
  - `"compression dictionary transport" (Chromium OR Firefox OR WebKit OR Igalia) ("intent to ship" OR status)` — *Track cross-browser adoption status, platform engine support, and browser engine shipping announcements across Chrome, Firefox, and Safari/WebKit.* (8 returned)
  - `"rel=compression-dictionary" OR "compression-dictionary" destination site:github.com/whatwg/html` — *Discover specification debates, standards review discussions, and fetch destination clarifications within WHATWG standards repos.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "compression-dictionary-transport", shared with 3 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "compression-dictionary-transport": no stable pass rate for Chrome yet*
- **Sources cited by the AI synthesis:** 5 result(s) found — **2 verified relevant**

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
