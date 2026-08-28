# Renewed HTML insertion&streaming methods

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document.

- Positional methods (before/after/append/prepend/replaceWith) that take HTML as argument, effectively replacing insertAdjacentHTML.
- Streaming methods (stream{Append}HTML{Unsafe}) which return a WritableStream
- Passing {runScripts} as part of SetHTMLUnsafeOptions, mimicking createContextualFragment behavior.
- Supporting createParserOptions in trusted types, allowing trusted types to override scripting mode and sanitizer.

### Motivation

Updating HTML dynamically from script has multiple disjointed API, each with its own subtle differences.
Developers can partially update an element using insertAdjacentHTML, use sanitizer with setHTML, execute scripts with createContextualFragment, stream with detached documents. 

This can be confusing and frustrating to web developers, as well as create bugs or security issues if the differences are not well understood.

This change replaces those with a coherent set of methods and arguments, that use the same settings (sanitizer/runScripts) with different variants (where to insert the HTML, stream/one-shot, safe/unsafe) as well as the same support in trusted types.

## Ecosystem Status

- **Momentum:** High (100 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** Renewed HTML insertion&streaming methods is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [HTML streaming & revamped DOM parsing](https://github.com/WebKit/standards-positions/issues/629) [open]
- **Mozilla:** [HTML streaming & revamped DOM parsing](https://github.com/mozilla/standards-positions/issues/1370) [closed]

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700 Contact emails [email&#160;pr...
- [[blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, 24 Mar 2026 04:52:00 -0700 Con...
- [html-setters-polyfill - npm](https://www.npmjs.com/package/html-setters-polyfill) *(npmjs.com)*
  > Polyfill for new HTML setters (appendHTML, streamHTML..etc. and unsafe variants). Latest version: 0.1.1, last published: 9 days ago. Start using html-setters-polyfill in your project by running `npm i html-setters-polyfill`. There are no other projec...
- [Declarative partial updates | Blog | Chrome for Developers](https://developer.chrome.com/blog/declarative-partial-updates?hl=en) *(developer.chrome.com)*
  > Declarative partial updates | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภ...
- [How Declarative Partial Updates Work in HTML](https://www.freecodecamp.org/news/how-declarative-partial-updates-work-in-html) *(freecodecamp.org · 2026-05-29T20:20:47)*
  > How Declarative Partial Updates Work in HTML May 29, 2026 / #HTML5 How Declarative Partial Updates Work in HTML Sumit Saha HTML has always supported streaming. The server doesn't need to build an entire page in memory before sending it to the browser...
- [Chrome Declarative Partial Updates: Native HTML Streaming in 148 | byteiota](https://byteiota.com/chrome-declarative-partial-updates-native-html-streaming-in-148) *(byteiota.com · 2026-06-04T05:07:53)*
  > streamHTML(readableStream) — streaming replacement, integrates directly with the Fetch and Streams APIs · streamAppendHTML(readableStream) — streaming append · The safe variants are the default path. Strip dangerous elements automatically; opt into u...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700 Contact emails [ema...
- [[blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, 24 Mar 2026 04:52:00...

## 📚 Platform Documentation & Specifications

- [Coherent story for HTML-setting methods · Issue #11669 · whatwg/html](https://github.com/whatwg/html/issues/11669) *(github.com)*
- [declarative-partial-updates/patching-explainer.md at main · WICG/declarative-partial-updates](https://github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md) *(github.com)*
- [Improve API of `insertAdjacent*()` methods · Issue #10122 · whatwg/html](https://github.com/whatwg/html/issues/10122) *(github.com)*
- [8.4 Dynamic markup insertion](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html) *(html.spec.whatwg.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 18 result(s) found across 7 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5054329641893888" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"streamAppendHTML" OR "streamAppendHTMLUnsafe" OR "streamHTML" JavaScript` — *Finds specific JavaScript code examples, spec drafts, and usage of the new streaming HTML insertion methods that return a WritableStream.* (8 returned)
  - `("dynamic-markup-revamped" OR "declarative-partial-updates") (site:github.com/WICG OR site:chromestatus.com OR site:caniuse.com)` — *Tracks standardization progress, browser vendor signals (Chrome/WebKit/Firefox), and official WICG explainer updates.* (0 returned)
  - `"insertAdjacentHTML" alternative OR replacement ("appendHTML" OR "prependHTML" OR "beforeHTML" OR "afterHTML")` — *Surfaces developer tutorials and blog posts discussing the modern replacement for insertAdjacentHTML and unified HTML insertion methods.* (6 returned)
  - `SetHTMLUnsafeOptions "runScripts" OR "createParserOptions" "trustedTypes"` — *Identifies deep-dive technical discussions, test cases, and WebIDL definitions around executing scripts and Trusted Types integration in HTML setting methods.* (2 returned)
  - `HTML streaming DOM insertion ("setHTMLUnsafe" OR "streamAppendHTML") (site:reddit.com/r/javascript OR site:news.ycombinator.com OR site:dev.to)` — *Discovers developer sentiment, use cases in modern SSR/streaming architectures (like HTMX/Turbo/React streaming), and community feedback.* (1 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found — **6 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5054329641893888)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5054329641893888)
- [Specification](https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md#resulting-api)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/491743369)
