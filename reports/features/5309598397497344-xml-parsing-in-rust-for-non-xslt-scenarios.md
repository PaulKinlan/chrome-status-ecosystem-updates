# XML parsing in Rust for non-XSLT scenarios

> **Report Week:** 2026-W37 | **Milestone:** Chrome 153 | **Category:** Enabled by default

## Overview

To improve browser security and protect users against memory-related vulnerabilities, Chrome 153 updates its XML parsing engine to a memory-safe [Rust](https://rust-lang.org/) implementation for several common scenarios. This foundational update eliminates potential memory corruption bugs while maintaining full compatibility with existing web standards.

Chrome has already begun to deprecate and remove [XSLT](https://www.w3.org/TR/xslt-30/). While this process continues, the new, safer parser will handle the following scenarios where no XSLT is required:

1. DOMParser Web API.
2. Accessing responseXML of XMLHttpRequest.
3. SVG standalone images (that is, accessing a `image.svg` document directly as a top level navigation).
4. SVG external images (including a main document embedding an SVG as an external image resource).

## Ecosystem Status

- **Momentum:** High (110 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chrome 153 transitions Chromium's XML parsing engine from legacy C-based libxml2 to a memory-safe Rust implementation for non-XSLT workflows, including DOMParser, XMLHttpRequest responseXML, and standalone or embedded SVG rendering. As an internal engine security modernization, it introduces no new developer-facing APIs while targeting the elimination of memory corruption vulnerabilities. Cross-browser consensus remains neutral and unblocking because standard XML specifications and DOM behaviors are fully preserved.

### Recommendations
- Actionable Advice: No code modifications or polyfills are required since this update is designed as a transparent, drop-in replacement conforming to W3C XML standards. Teams processing large SVG assets or extensive XML strings via DOMParser should perform regression smoke tests in Chromium 153+ and accelerate migration plans away from deprecated XSLT workflows.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [saucelabs.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFsHHcKeWGFGVcIKEVLp2oOncOCQo6sNmMbJrpInUfaAivy3vU1r-VFauUYshFLv5jFDm27RUveQIebhetqK9DaBLvTlM2WUXvaoOYx5ebDF-QyxqfT3PEZadECBhuYkXqBNkJZTmbJW1ED_vzDKv6ffTgfVw==) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Summary  To mitigate memory safety vulnerabilities in web browsers, Chromium-based browsers (including Google Chrome and Microsoft Edge) are transitioning XML parsing from legacy C-based libraries (such as `libxml2`) to a memory-safe *
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFo4GduOMz97leM155l4yGQOslcIsBp9UWrmrLnQ57wO6Z-TslMSgGnzSdIEAf2L9hDAh0AG_qStV1GNV5gORypKxfe6yVa4Rx6iD4Gwxv3Cch4ieCgr84LzGsgtO7fFIxsQY0GwdA=) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Summary  To mitigate memory safety vulnerabilities in web browsers, Chromium-based browsers (including Google Chrome and Microsoft Edge) are transitioning XML parsing from legacy C-based libraries (such as `libxml2`) to a memory-safe *
- [Ship Rust XML parser for non XSLT situations [466303347] - Chromium](https://issues.chromium.org/issues/466303347) *(issues.chromium.org)*
  > The Rust XML parsing is reaching a high degree of feature parity and stability. Consider starting to ship in scenarios where we know we won&#x27;t use XSLT. One option might be to instantiate it in situations where we expect to render SVG, and Docume...
- [Intent to Experiment: Ship Rust XML Parser to 1% stable for non XSLT scenarios](https://groups.google.com/a/chromium.org/g/blink-dev/c/D7BE4QPw0S4) *(groups.google.com · 2026-02-09T00:00:00)*
  > Make Rust parsing memory safe in Chrome, <strong>replace unsafe C library usage of libxml2 with Rust based XML parsing based on the Rust XML crate</strong>. Eliminate class of XML parsing memory corruption security issues. Several web specs affected,...
- [Chrome 153 beta | Blog | Chrome for Developers](https://developer.chrome.com/blog/chrome-153-beta) *(developer.chrome.com · 2026-08-20T00:00:00)*
  > To improve browser security and protect users against memory-related vulnerabilities, <strong>Chrome 153 is changing its XML parsing engine to a memory-safe Rust implementation for several common scenarios</strong>.
- [[blink-dev] Intent to Ship: XML Parsing in Rust for non XSLT scenarios](http://www.mail-archive.com/blink-dev@chromium.org/msg16709.html) *(mail-archive.com)*
  > We are in the process of deprecating XSLT, see https://chromestatus.com/feature/4709671889534976. While this process continues, we can already migrate to safe Rust XML parsing in scenarios where no XSLT processing is required: 1. DOMParser Web API 2....
- [[Merge M148] [Regression] Rust XML Parser fails to parse large SVG files [500948624] - Chromium](https://issues.chromium.org/issues/500948624/dependencies) *(issues.chromium.org)*
  > This field contains Gerrit urls of code changes that ‘fix’ a security bug (i.e., excluding logging/cleanup commits) and is used when a singular fix cannot be uniquely identified from the existing “Code Changes” field. The change can be in the chromiu...
- [r/rust on Reddit: 🥳 Chrome adopts Rust and replaces libxml2 written in C since version 147](https://www.reddit.com/r/rust/comments/1sfrvno/chrome_adopts_rust_and_replaces_libxml2_written) *(reddit.com · 2026-04-08T12:48:35)*
  > <strong>The Rust&#x27;s part replaces old C-written parser libxml2.</strong> This new module would be used in some cases for parsing XML (when no XSLT templates involved) and replaces years old dependency libxml2 · Here is the Chromium&#x27;s task tr...
- [Chrome 147 | Release notes | Chrome for Developers](https://developer.chrome.com/release-notes/147) *(developer.chrome.com)*
  > You can preload style modules with ... bug #466888680 | ChromeStatus.com entry | Spec · <strong>Implements the Rust XML parser for scenarios where no XSLT processing is required</strong>....
- [Chrome XSLT removal: migrate before Chrome 158](https://ecorpit.com/chrome-xslt-removal-november-2026-migration-guide) *(ecorpit.com · 2026-08-03T00:00:00)*
  > <strong>Chrome also plans to replace libxml2, its XML parser, with a memory-safe parser written in Rust</strong>, and states that change is intended to be transparent to developers. The reasoning is a security argument, not a usage argument, though u...
- [Re: [blink-dev] Intent to Ship: XML Parsing in Rust for non XSLT scenarios](http://www.mail-archive.com/blink-dev@chromium.org/msg16722.html) *(mail-archive.com)*
  > *Activation* No change in behavior ... run through the Rust memory-safe parser. When XSLT deprecation concludes, we can <strong>deactivate libxml2 XML parsing and move to Rust XML parsing completely</strong>....

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 37 result(s) found across 6 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5309598397497344" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"www.w3.org/TR/xml" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Chromium" OR "Chrome" "Rust" "XML parser" OR "XML parsing" ("DOMParser" OR "SVG")` — *Finds official Chromium announcements, engineering blog posts, and release notes regarding switching the XML parsing engine to Rust.* (8 returned)
  - `"DOMParser" "parseFromString" ("application/xml" OR "image/svg+xml") OR "responseXML"` — *Surfaces real-world JavaScript code examples using DOMParser and XMLHttpRequest for XML/SVG documents handled by the new parser.* (8 returned)
  - `site:news.ycombinator.com OR site:reddit.com/r/rust OR site:reddit.com/r/programming "Chromium" "XML" "Rust"` — *Captures developer sentiment, discussion, and security analysis regarding Chrome's adoption of Rust for XML parsing and memory safety.* (8 returned)
  - `"Chromium" "Rust" "memory safety" ("libxml2" OR "XSLT deprecation")` — *Retrieves technical write-ups and security deep dives on Chromium's memory-safety transition from legacy C/C++ XML parsers to Rust.* (7 returned)
- **Google Search Grounding (gemini-3.7-flash):** 10 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 467 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5309598397497344)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5309598397497344)
- [Specification](https://www.w3.org/TR/xml)
- [Chromium Tracking Bug](https://crbug.com/466303347)
