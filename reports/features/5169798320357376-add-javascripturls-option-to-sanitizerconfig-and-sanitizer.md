# Add javascriptURLs option to SanitizerConfig and Sanitizer

> **Report Week:** 2026-W44 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

https://github.com/whatwg/html/pull/12898  Sanitizer API also sanitizes javascript:-URLs, when they are used for navigation. This was originally done as a side effect of any "safe" method that uses Sanitizer, and omittted for any "unsafe" method. The HTML standard recently regularized this and made this a developer-selectable option, instead of a side-effect of a particular method.  Behaviour when the option is not used remains the same.

### Motivation

Previously, Sanitizer API already supported sanitizing javascript:-URLs, but only for "safe" methods. This was awkward if users wanted to use the "unsafe" methods for some reason, but still wanted javascript:-URLs removed.  Further discussion on: https://github.com/whatwg/html/issues/12686 https://github.com/whatwg/html/pull/12898

## Ecosystem Status

- **Momentum:** Emerging (footprint 155 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The addition of the 'javascriptURLs' option to SanitizerConfig and Sanitizer standardizes how javascript:-URLs are stripped across both safe and unsafe HTML parsing sinks. Previously treated as an implicit side effect of safe methods like setHTML(), this behavior is now an explicit, configurable boolean toggle consistent with existing toggles like comments and dataAttributes. Shipping by default in Chrome 157, the change reflects strong consensus across standards participants to eliminate 'configuration outside the configuration'.

### Recommendations
- Actionable Advice: Teams utilizing or evaluating the native Sanitizer API should update their sanitizer configurations to explicitly declare javascriptURLs: false when configuring custom allowlists, especially when invoking setHTMLUnsafe(). In production environments requiring broad cross-browser compatibility across legacy browser versions, continue relying on proven libraries like DOMPurify as a polyfill or fallback while engine implementations mature.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Having discussed this more with colleagues and given the lack of opposing feedback in this issue I suggest we label this as "position: support" one we..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Sanitizer API](https://github.com/WebKit/standards-positions/issues/86) [closed]

## 📰 Ecosystem Blogs & Articles

- [github.io](https://dontcallmedom.github.io/webdex/s.html) *(dontcallmedom.github.io)*
  > setJavascriptURLs(allow)\` modifier method \*\*Key Takeaway:\*\* Standardized \`javascriptURLs\` alongside similar boolean toggles like \`comments\` and \`dataAttributes\`
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5169798320357376) *(img968-dot-cr-status.appspot.com)*
  > \*\*Source:\*\* \*Chrome Platform Status / Chrome 157 Milestone Notes\* \*\*Details:\*\* Chrome listed the feature as shipping enabled by default starting in \*\*Chrome 157\*\* (October 2026)
- [zenn.dev](https://zenn.dev/cybozu_frontend/articles/web_standards_trends_202609) *(zenn.dev)*
  > \*\*Technical Engineering Blogs (Zenn / Cybozu Web Standards Tracker):\*\* Highlighted in monthly standards catch-up blogs (such as Cybozu's \*Web Standards Trends\*) as a notable API consistency improvement for developers managing inner HTML parsing pipel...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17764.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer 'Daniel Vogelheim' via blink-d...
- [\[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17726.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Chromestatus Wed, 14 Oct 2026 09:12:00...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17747.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Mike Taylor Thu, 15 Oct 2026 0...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17778.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Alex Russell Mon, 19 Oct 2026 ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17764.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer 'Daniel Vogelheim' v...
- [\[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17726.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Chromestatus Wed, 14 Oct 202...
- [2068934 - Sanitizer API: javascript URL handling should be part of the config](https://bugzilla.mozilla.org/show_bug.cgi?id=2068934) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/whatwg/html/pull/12898`)*
  > 2068934 - Sanitizer API: javascript URL handling should be part of the config Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advanced Search New Bug Rep...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/whatwg/html/issues/12686) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/158) *(developer.mozilla.org)*
- [whatwg.org](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html) *(html.spec.whatwg.org)*
- [mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=2071032) *(bugzilla.mozilla.org)*
- [2068934 - Sanitizer API: javascript URL handling should be part of the config](https://bugzilla.mozilla.org/show_bug.cgi?id=2068934) *(bugzilla.mozilla.org)*
- [Document Sanitizer javascriptURLs and setJavascriptURLs() by pepelsbey · Pull Request #46111 · mdn/content](https://github.com/mdn/content/pull/46111) *(github.com)*
- [Fx158: Sanitizer javascriptURLs option and setJavascriptURLs() by pepelsbey · Pull Request #46110 · mdn/content](https://github.com/mdn/content/pull/46110) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 45 result(s) found across 11 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/5169798320357376" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/whatwg/html/pull/12898" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" API` — *Core feature API query* (3 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (3 returned)
  - `"github.com" OR ":-urls" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (6 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"SanitizerConfig" "javascriptURLs" OR "new Sanitizer"` — *Finds code snippets, API signatures, and WebIDL implementation examples configuring the javascriptURLs option in Sanitizer.* (8 returned)
  - `"Sanitizer API" "javascriptURLs" (guide OR tutorial OR XSS)` — *Discovers developer tutorials, security explainers, and practical guides detailing how javascript: URL stripping works in modern HTML sanitization.* (8 returned)
  - `site:github.com/whatwg/html ("javascriptURLs" OR "12898" OR "12686")` — *Retrieves WHATWG specification issue discussions and pull request debates defining the javascriptURLs config option.* (1 returned)
  - `"javascriptURLs" ("Sanitizer" OR "SanitizerConfig") ("Intent to" OR "Chrome" OR "Firefox" OR "WebKit")` — *Tracks browser engine adoption, implementation status, and intent-to-ship or intent-to-prototype announcements across major browsers.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5169798320357376)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5169798320357376)
- [Specification](https://github.com/whatwg/html/pull/12898)
