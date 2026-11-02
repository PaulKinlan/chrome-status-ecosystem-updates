# Add javascriptURLs option to SanitizerConfig and Sanitizer

> **Report Week:** 2026-W45 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

https://github.com/whatwg/html/pull/12898  Sanitizer API also sanitizes javascript:-URLs, when they are used for navigation. This was originally done as a side effect of any "safe" method that uses Sanitizer, and omittted for any "unsafe" method. The HTML standard recently regularized this and made this a developer-selectable option, instead of a side-effect of a particular method.  Behaviour when the option is not used remains the same.

### Motivation

Previously, Sanitizer API already supported sanitizing javascript:-URLs, but only for "safe" methods. This was awkward if users wanted to use the "unsafe" methods for some reason, but still wanted javascript:-URLs removed.  Further discussion on: https://github.com/whatwg/html/issues/12686 https://github.com/whatwg/html/pull/12898

## Ecosystem Status

- **Momentum:** High (+125 points since 2026-10-12; footprint 185 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The \`javascriptURLs\` option in \`SanitizerConfig\` and the accompanying \`setJavascriptURLs()\` method decouple \`javascript:\` URL sanitization from specific DOM insertion methods, making URL stripping an explicit, configurable setting rather than an implicit side-effect of 'safe' APIs. Formally merged into the WHATWG HTML standard and shipping enabled by default in Chrome 157, this change resolves a notable ergonomics problem for applications needing permissive parsing without forfeiting protection against script-based navigation. Engine consensus across Chromium, WebKit, and Gecko is firmly established, marking another solid step toward a mature, native Sanitizer API.

### Recommendations
- Actionable Advice: Teams utilizing native parse-time sanitization should declare \`javascriptURLs: false\` explicitly inside \`SanitizerConfig\` objects to protect against navigation-based XSS when custom or permissive configurations are used. Because broad multi-engine stable distribution is still maturing across all browsers, ensure usage is guarded by feature detection (\`'setJavascriptURLs' in Sanitizer.prototype\`) with battle-tested libraries like DOMPurify retained as a fallback.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Having discussed this more with colleagues and given the lack of opposing feedback in this issue I suggest we label this as "position: support" one we..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Sanitizer API](https://github.com/WebKit/standards-positions/issues/86) [closed]

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://lighthouse-ci-staging-dot-cr-status.appspot.com/feature/5169798320357376) *(lighthouse-ci-staging-dot-cr-status.appspot.com)*
  > \*\*Rollout:\*\* Chromium tracked the landing of this feature slated for Chrome 157 across Desktop, Android, and WebView platforms This was awkward if users wanted to use the 'unsafe' methods for some reason, but still wanted \`javascript:\`-URLs removed”\*
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > Microsoft Edge highlighted the feature under its \*\*Web APIs\*\* section alongside other modern HTML insertion and streaming updates The release clarifies support for Chromium-based browser implementations deploying the revised WHATWG Sanitizer specific...
- [zenn.dev](https://zenn.dev/cybozu_frontend/articles/web_standards_trends_202609) *(zenn.dev)*
  > \*\*Zenn (Web Standards Monthly Digest):\*\* In developer community summaries covering WHATWG and W3C progress, front-end engineers flagged PR #12898 as part of the broader stabilization of the modern Sanitizer API and its interactions with parse-time sa...
- [debian.org](https://sources.debian.org/src/firefox/158.0.1-1/testing/web-platform/tests/sanitizer-api/sanitizer-javascript-url.html) *(sources.debian.org)*
  > unsafe methods with explicit \`{ javascriptURLs: false }\` and \`{ javascriptURLs: true }\` configurations
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17764.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer 'Daniel Vogelheim' via blink-d...
- [\[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17726.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Chromestatus Wed, 14 Oct 2026 09:12:00...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17747.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Mike Taylor Thu, 15 Oct 2026 0...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com · 2026-10-30T05:29:22)*
  > Chrome 157 Release Notes - Chrome Platform Status Chrome 157 Release Notes Preview Scheduled Stable Release November 3, 2026 Miscellaneous Add javascriptURLs option to SanitizerConfig and Sanitizer # Link copied! https://github.com/whatwg/html/pull/1...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17768.html) *(mail-archive.com)*
  > WebKit has not implemented the underlying feature (Sanitizer API, position here &lt;https://github.com/WebKit/standards-positions/issues/86&gt;), so they&#x27;re unlikely to have strong opinions about this particular sub-feature. The spec change has ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17764.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer 'Daniel Vogelheim' v...
- [\[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17726.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Chromestatus Wed, 14 Oct 202...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17747.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12898`)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Mike Taylor Thu, 15 ...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com · 2026-10-30T05:29:22)* *(Cites: `https://github.com/whatwg/html/pull/12898`)*
  > Chrome 157 Release Notes - Chrome Platform Status Chrome 157 Release Notes Preview Scheduled Stable Release November 3, 2026 Miscellaneous Add javascriptURLs option to SanitizerConfig and Sanitizer # Link copied! https://github.com/whatwg/h...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/whatwg/html/issues/12686) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/158) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/issues/45898) *(github.com)*
- [github.com](https://github.com/web-platform-tests/wpt/blob/master/sanitizer-api/sanitizer-javascript-url.html) *(github.com)*
- [Document Sanitizer javascriptURLs and setJavascriptURLs() by pepelsbey · Pull Request #46111 · mdn/content · GitHub](https://github.com/mdn/content/pull/46111) *(github.com)*
- [\[pull\] main from whatwg:main by pull\[bot\] · Pull Request #231 · MarcelRaschke/html · GitHub](https://github.com/MarcelRaschke/html/pull/231) *(github.com)*
- [Fx158: Sanitizer javascriptURLs option and setJavascriptURLs() by pepelsbey · Pull Request #46110 · mdn/content · GitHub](https://github.com/mdn/content/pull/46110) *(github.com)*
- [2071032 - \[wpt-sync\] Sync PR 62564 - Sanitizer: fix the javascript: URL tests and cover the default configuration](https://bugzilla.mozilla.org/show_bug.cgi?id=2071032) *(bugzilla.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 11 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5169798320357376" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/whatwg/html/pull/12898" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" API` — *Core feature API query* (7 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"github.com" OR ":-urls" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Sanitizer API" "javascriptURLs" ("XSS" OR "sanitize")` — *Discovers articles and developer guides detailing how to configure javascript: URL sanitization using the Sanitizer API.* (8 returned)
  - `"javascriptURLs" ("SanitizerConfig" OR "new Sanitizer") code example` — *Locates code snippets, WebIDL specifications, and practical JavaScript implementations using the javascriptURLs option.* (8 returned)
  - `site:github.com/whatwg/html ("12898" OR "12686") OR ("SanitizerConfig" "javascriptURLs")` — *Finds original specification PRs, standards discussions, and issue tracker feedback regarding making javascript: URL handling an explicit configuration option.* (1 returned)
  - `"javascriptURLs" ("Sanitizer" OR "SanitizerConfig") ("intent to" OR "Chromium" OR "WebKit" OR "Mozilla")` — *Tracks browser vendor implementation status, Intent to Ship threads, and cross-browser adoption signals for the feature.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 5 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5169798320357376)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5169798320357376)
- [Specification](https://github.com/whatwg/html/pull/12898)
