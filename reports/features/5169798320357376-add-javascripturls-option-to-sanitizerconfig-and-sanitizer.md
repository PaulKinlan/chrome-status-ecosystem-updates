# Add javascriptURLs option to SanitizerConfig and Sanitizer

> **Report Week:** 2026-W43 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

https://github.com/whatwg/html/pull/12898  Sanitizer API also sanitizes javascript:-URLs, when they are used for navigation. This was originally done as a side effect of any "safe" method that uses Sanitizer, and omittted for any "unsafe" method. The HTML standard recently regularized this and made this a developer-selectable option, instead of a side-effect of a particular method.  Behaviour when the option is not used remains the same.

### Motivation

Previously, Sanitizer API already supported sanitizing javascript:-URLs, but only for "safe" methods. This was awkward if users wanted to use the "unsafe" methods for some reason, but still wanted javascript:-URLs removed.  Further discussion on: https://github.com/whatwg/html/issues/12686 https://github.com/whatwg/html/pull/12898

## Ecosystem Status

- **Momentum:** Emerging (footprint 175 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The addition of the javascriptURLs option to the Sanitizer API regularizes how navigation-based JavaScript URLs are handled, transitioning them from an implicit side effect of safe methods into an explicit, developer-selectable configuration. Enabled by default in Chrome 157, it brings more granular security control to both safe and unsafe sanitization workflows. Browser vendor consensus shows general support for the broader Sanitizer API framework, though broader cross-browser alignment is still evolving.

### Recommendations
- Actionable Advice: Teams utilizing the Sanitizer API should audit their usage of safe versus unsafe methods, leveraging the new javascriptURLs configuration explicitly where fine-grained control over navigation links is required. Because it is a cutting-edge feature, ensure fallback strategies or feature detection are in place for non-Chromium browsers.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Having discussed this more with colleagues and given the lack of opposing feedback in this issue I suggest we label this as "position: support" one we..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Sanitizer API](https://github.com/WebKit/standards-positions/issues/86) [closed]

## 📰 Ecosystem Blogs & Articles

- [github.io](https://triple-underscore.github.io/HTML-dynamic-markup-insertion-ja.html) *(triple-underscore.github.io)*
  > removeUnsafe()\` sets \`javascriptURLs: false\`, causing unsafe methods to strip them as well)
- [chromestatus.com](https://chromestatus.com/feature/5169798320357376/activity) *(chromestatus.com)*
  > If the option is omitted, legacy/default behavior remains backward-compatible
- [appspot.com](https://cr-status.appspot.com) *(cr-status.appspot.com)*
  > \*\*Coverage:\*\* ChromeStatus listed the feature under \*Enabled by default\* in Chrome 157
- [sourceforge.net](https://sourceforge.net/projects/servo.mirror/files/v0.7.0) *(sourceforge.net)*
  > 7.0 Release):\*\* The Servo browser project implemented support via PR #47867 (\`script: Implement javascriptURLs for Sanitizer and SanitizerConfig\`), showcasing cross-engine adoption across independent engines beyond Blink and Gecko
- [newreleases.io](https://newreleases.io/project/github/servo/servo/release/v0.7.0) *(newreleases.io)*
  > 7.0 Release):\*\* The Servo browser project implemented support via PR #47867 (\`script: Implement javascriptURLs for Sanitizer and SanitizerConfig\`), showcasing cross-engine adoption across independent engines beyond Blink and Gecko
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17747.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Mike Taylor Thu, 15 Oct 2026 0...
- [\[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17726.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Chromestatus Wed, 14 Oct 2026 09:12:00...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17764.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer 'Daniel Vogelheim' via blink-d...
- [Sanitizer.webidl - mozsearch](https://searchfox.org/firefox-main/source/dom/webidl/Sanitizer.webidl) *(searchfox.org)*
  > boolean javascriptURLs; }; \[Exposed=Window, Pref=&quot;dom.security.sanitizer.enabled&quot;\] interface Sanitizer { \[Throws, UseCounter\] constructor(optional (SanitizerConfig or SanitizerPresets) configuration = &quot;default&quot;); // Query configur...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17747.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Mike Taylor Thu, 15 ...
- [\[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17726.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Chromestatus Wed, 14 Oct 202...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17764.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12898`)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer 'Daniel Vogelheim' v...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-09-07 (public-html@w3.org from September 2026)](https://lists.w3.org/Archives/Public/public-html/2026Sep/0000.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/12898`)*
  > (1 by mozfreddyb) https://gith... - 12904 (by zcorpan) https://github.com/whatwg/html/pull/12904 - 12899 (by Ms2ger) https://github.com/whatwg/html/pull/12899 - 12898 (by noamr) https://&lt;strong&gt;github.com/whatwg/html/pull/12898&lt;/strong&gt; 16 ...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/158) *(developer.mozilla.org)*
- [whatwg.org](https://html.spec.whatwg.org/dev/dynamic-markup-insertion.html) *(html.spec.whatwg.org)*
- [whatwg.org](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html) *(html.spec.whatwg.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-09-07 (public-html@w3.org from September 2026)](https://lists.w3.org/Archives/Public/public-html/2026Sep/0000.html) *(lists.w3.org)*
- [Document Sanitizer javascriptURLs and setJavascriptURLs() by pepelsbey · Pull Request #46111 · mdn/content](https://github.com/mdn/content/pull/46111) *(github.com)*
- [Fx158: Sanitizer javascriptURLs option and setJavascriptURLs() by pepelsbey · Pull Request #46110 · mdn/content](https://github.com/mdn/content/pull/46110) *(github.com)*
- [2068934 - Sanitizer API: javascript URL handling should be part of the config](https://bugzilla.mozilla.org/show_bug.cgi?id=2068934) *(bugzilla.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 11 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5169798320357376" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/whatwg/html/pull/12898" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" API` — *Core feature API query* (3 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (3 returned)
  - `"github.com" OR ":-urls" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (7 returned)
  - `"Add javascriptURLs option to SanitizerConfig and Sanitizer" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"SanitizerConfig" "javascriptURLs" OR "Sanitizer" "javascriptURLs"` — *Finds code samples and WebIDL usage of the javascriptURLs option in Sanitizer and SanitizerConfig constructors.* (7 returned)
  - `"Sanitizer API" "javascriptURLs" OR "javascript:" URLs tutorial OR guide` — *Discovers developer tutorials and security guides explaining how to configure javascript URL sanitization with the HTML Sanitizer API.* (5 returned)
  - `"whatwg/html" ("12898" OR "12686") "javascriptURLs"` — *Locates standards body discussions, GitHub issues, and consensus debates on regularizing javascript URL sanitization.* (6 returned)
  - `"Sanitizer" "javascriptURLs" ("Intent to Ship" OR "Intent to Prototype" OR "Chromium" OR "WebKit")` — *Tracks browser vendor implementation status, intent announcements, and release notes across browser engines.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **8 verified relevant**
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

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5169798320357376)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5169798320357376)
- [Specification](https://github.com/whatwg/html/pull/12898)
