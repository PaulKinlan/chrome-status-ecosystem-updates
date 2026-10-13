# Expose CSSStyleValue hierarchy to Worker contexts

> **Report Week:** 2026-W42 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The CSS Typed OM spec exposes the CSSStyleValue hierarchy to worker global scopes (\[Exposed=(Window, Worker, PaintWorklet, LayoutWorklet)\]), but Blink only exposed CSSStyleValue, CSSKeywordValue, CSSNumericValue, CSSUnitValue and CSSUnparsedValue to Window and the worklets. As a result these constructors were undefined in Workers, unlike in Firefox and Safari.

### Motivation

Aligns Chrome with the spec's \[Exposed\] set and removes a cross‑thread inconsistency (these constructors are currently undefined in workers); enables off‑main‑thread CSS value manipulation

## Ecosystem Status

- **Momentum:** Emerging (footprint 110 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** With Chrome 154, Blink aligns with the CSS Typed OM Level 1 specification by exposing the core CSSStyleValue class hierarchy to dedicated Worker global scopes. This eliminates a longstanding cross-engine gap where Firefox and Safari already exposed these constructors off-main-thread while Chromium restricted them to Window and Worklets. The change establishes cross-browser parity for off-main-thread CSS value construction and mathematical operations without requiring string concatenation.

### Recommendations
- Actionable Advice: Teams performing heavy layout computations or animations in web workers can now safely construct and pass typed CSS values across all major modern engines without thread-specific fallbacks. However, developers should feature-detect constructor availability via typeof CSSNumericValue !== 'undefined' if supporting legacy browser versions, and remember to perform raw CSS string parsing on the main thread rather than off-thread.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`css-typed-om`](https://webstatus.dev/features/css-typed-om), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `css-typed-om` on [wpt.fyi](https://wpt.fyi/results?q=feature:css-typed-om) (via webstatus.dev) — stable: Chrome 89.5% · Edge 89.5% · Firefox 12.4% · Safari 82.9%; experimental: Chrome 90.5% · Edge 90.5% · Firefox 83.8% · Safari 83.8%
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/1091))

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Chrome for Developers & Release Notes \* \*\*Chrome 154 Beta & Stable Release Notes\*\* (\*developer.chrome.com\*): \* Google highlighted this feature in both the Chrome 154 Beta announcement and the stable release notes
- [gigazine.net](https://gigazine.net/gsc_news/en/20260925-google-chrome-154) *(gigazine.net)*
  > Developer Blogs & Ecosystem Coverage \* \*\*Ecosystem Digests & International Tech Portals\*\*: \* Tech blogs and developer news aggregators (such as \*GIGAZINE\* and platform release roundups) reported on this as part of the Chrome 154 web platform feature ...
- [\[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17113.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Javier Fernandez Tue, 04 Aug...
- [Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17119.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Alex Russell Wed, 05...
- [CSS Typed OM Level 1（日本語訳）](https://triple-underscore.github.io/css-typed-om-ja.html) *(triple-underscore.github.io · 2025-08-15T00:00:00)*
  > enum \`CSSNumericBaseType@I { &quot;\`length@m&quot;, &quot;\`angle@m&quot;, &quot;\`time@m&quot;, &quot;\`frequency@m&quot;, &quot;\`resolution@m&quot;, &quot;\`flex@m&quot;, &quot;\`percent@m&quot;, }; dictionary \`CSSNumericType@I { long \`length@m; long \`a...
- [CSSNumericValue interface - WebIDLpedia](https://dontcallmedom.github.io/webidlpedia/names/CSSNumericValue.html) *(dontcallmedom.github.io)*
  > CSS Typed OM Level 1 defines CSSNumericValue · \[Exposed=(Window, Worker, PaintWorklet, LayoutWorklet)\] interface CSSNumericValue : CSSStyleValue { CSSNumericValue add(CSSNumberish... values); CSSNumericValue sub(CSSNumberish... values); CSSNumericVal...
- [CSSStyleValue interface - WebIDLpedia](https://dontcallmedom.github.io/webidlpedia/names/CSSStyleValue.html) *(dontcallmedom.github.io)*
  > \[Exposed=(Window, Worker, PaintWorklet, LayoutWorklet)\] interface CSSStyleValue { stringifier; \[Exposed=Window\] static CSSStyleValue parse(USVString property, USVString cssText); \[Exposed=Window\] static sequence&lt;CSSStyleValue&gt; parseAll(USVStrin...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > The CSS Typed OM spec exposes the CSSStyleValue hierarchy to worker global scopes (\[Exposed=(Window, Worker, PaintWorklet, LayoutWorklet)\]), but Blink only exposed CSSStyleValue, CSSKeywordValue, CSSNumericValue, CSSUnitValue and CSSUnparsedValue to ...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parse_static) *(developer.mozilla.org)*
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410) *(w3.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 49 result(s) found across 10 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/5114591051907072" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"www.w3.org/TR/css-typed-om-1" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Expose CSSStyleValue hierarchy to Worker contexts" API` — *Core feature API query* (2 returned)
  - `"Expose CSSStyleValue hierarchy to Worker contexts" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Expose CSSStyleValue hierarchy to Worker contexts" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Expose CSSStyleValue hierarchy to Worker contexts" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"CSS Typed OM" ("Web Worker" OR "DedicatedWorker") "CSSNumericValue" OR "CSSStyleValue"` — *Guides and tutorials demonstrating how to manipulate CSS Typed OM values inside Web Worker threads* (6 returned)
  - `("CSSNumericValue.parse" OR "new CSSUnitValue") ("self.onmessage" OR "importScripts" OR "WorkerGlobalScope")` — *Practical JavaScript code examples instantiating or parsing CSS Typed OM objects in worker scripts* (8 returned)
  - `"CSSStyleValue" "Worker" (site:chromestatus.com OR site:groups.google.com/a/chromium.org/g/blink-dev)` — *Chrome Platform Status entries and Blink Intent to Ship discussions regarding exposing CSSStyleValue hierarchy to Workers* (8 returned)
  - `"CSSStyleValue" ("Exposed" OR "WorkerGlobalScope") site:github.com/w3c/css-houdini-drafts/issues` — *W3C specification issue tracker discussions on exposing CSS Typed OM interfaces to worker global scopes* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "css-typed-om", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "css-typed-om": Chrome 89.5% passing (stable)*
- **Sources cited by the AI synthesis:** 4 result(s) found — **0 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 12 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5114591051907072)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5114591051907072)
- [Specification](https://www.w3.org/TR/css-typed-om-1/#stylevalue-subclasses)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/534781956)
