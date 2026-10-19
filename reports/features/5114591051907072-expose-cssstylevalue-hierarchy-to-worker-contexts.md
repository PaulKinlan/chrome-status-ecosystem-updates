# Expose CSSStyleValue hierarchy to Worker contexts

> **Report Week:** 2026-W43 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The CSS Typed OM spec exposes the CSSStyleValue hierarchy to worker global scopes (\[Exposed=(Window, Worker, PaintWorklet, LayoutWorklet)\]), but Blink only exposed CSSStyleValue, CSSKeywordValue, CSSNumericValue, CSSUnitValue and CSSUnparsedValue to Window and the worklets. As a result these constructors were undefined in Workers, unlike in Firefox and Safari.

### Motivation

Aligns Chrome with the spec's \[Exposed\] set and removes a cross‑thread inconsistency (these constructors are currently undefined in workers); enables off‑main‑thread CSS value manipulation

## Ecosystem Status

- **Momentum:** Moderate (footprint 250 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** With Chromium exposing the CSSStyleValue hierarchy to Worker global scopes in Chrome 154 release notes, Blink resolves a longstanding omission where Typed OM constructors were exposed to Window and Worklets but missing in standard Web Workers. This change aligns Chromium with the W3C CSS Typed OM specification and enables off-main-thread CSS object creation and numeric arithmetic. Cross-engine consensus is unified, resolving a cross-thread inconsistency that previously hindered background style computation.

### Recommendations
- Actionable Advice: Teams performing style calculations off the main thread can now instantiate and compute Typed OM objects like CSSNumericValue or CSSUnitValue directly within Web Workers, using basic constructor feature detection for older Chromium builds. However, codebases should avoid assuming worker-side string parsing is available and keep raw CSS string tokenization on the main thread.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`css-typed-om`](https://webstatus.dev/features/css-typed-om), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `css-typed-om` on [wpt.fyi](https://wpt.fyi/results?q=feature:css-typed-om) (via webstatus.dev) — stable: Chrome 89.7% · Edge 89.7% · Firefox 12.1% · Safari 82.2%; experimental: Chrome 90.7% · Edge 90.7% · Firefox 83.2% · Safari 82.2%
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/1091))

## 📰 Ecosystem Blogs & Articles

- [CSS Typed OM Explained](https://drafts.css-houdini.org/css-typed-om/README) *(drafts.css-houdini.org)*
  > CSS Typed OM Explained CSS Typed OM Explained CSS Typed OM is an extensible API for the CSSOM that reduces the burden of manipulating a CSS property's value via string manipulation. It does so by exposing CSS values as typed JavaScript objects rather...
- [css-tricks.com](https://css-tricks.com/the-typed-object-model) *(css-tricks.com)*
  > \*\*Key Capability:\*\* Enables developers to perform off-main-thread CSS value creation and manipulation (e.g., unit math, transform processing, and color calculations inside a background thread) \*\*Sources:\*\* \*CSS-Tricks ("The Typed Object Model") & Com...
- [\[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17113.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Javier Fernandez Tue, 04 Aug...
- [Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17119.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Alex Russell Wed, 05...
- [Web/API/CSS Typed OM API/Guide - Get docs](https://getdocs.org/Web/API/CSS_Typed_OM_API/Guide) *(getdocs.org)*
  > When we invoke get(), a custom property of type CSSUnparsedValue is returned. Note the space before the 1.2rem. To get a unit and value, we need a CSSUnitValue, which we can retrieve using the CSSStyleValue.parse() method on the CSSUnparsedValue.
- [CSS Typed OM API: Guide - DOM Documentation - TypeError](https://www.typeerror.org/docs/dom/css_typed_om_api/guide) *(typeerror.org)*
  > The CSSStyleValue interface of the CSS Typed Object Model API is the base class of all CSS values accessible through the Typed OM API, including CSSImageValue, CSSKeywordValue, CSSNumericValue, CSSPositionValue, CSSTransformValue, and CSSUnparsedValu...
- [Working with the new CSS Typed Object Model \| CSS and UI \| Chrome for Developers](https://developer.chrome.com/docs/css-ui/cssom) *(developer.chrome.com · 2018-03-26T00:00:00)*
  > const css = CSSStyleValue.parse( &#x27;transform&#x27;, &#x27;translate3d(10px,10px,0) scale(0.5)&#x27;); // → css instanceof CSSTransformValue === true // → css.toString() === &#x27;translate3d(10px, 10px, 0) scale(0.5)&#x27; ... CSSNumericValue.par...
- [SharedWorker Global name - WebIDLpedia](https://dontcallmedom.github.io/webidlpedia/globals/SharedWorker.html) *(dontcallmedom.github.io)*
  > CSSNumericValue · CSSOKLCH · CSSOKLab · CSSPerspective · CSSRGB · CSSRotate · CSSScale · CSSSkew · CSSSkewX · CSSSkewY · CSSStyleValue · CSSTransformComponent · CSSTransformValue · CSSTranslate · CSSUnitValue · CSSUnparsedValue · CSSVariableReference...
- [Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17115.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts TAMURA, Kent Tue, 04...
- [Intent to Ship: CSS Typed OM](https://groups.google.com/a/chromium.org/g/blink-dev/c/6ai8np0DSOA) *(groups.google.com)*
  > Currently, any property that we can&#x27;t cater for with existing subclasses of CSSStyleValue are represented as just CSSStyleValues. The idea is that &lt;strong&gt;you can still use these values in style property maps, but you can&#x27;t manipulate them ...
- [Intent to ship: CSS Properties and Values API Level 1](https://groups.google.com/a/chromium.org/g/blink-dev/c/QjcyhPZ_sNI/m/SuB-GuNPDAAJ) *(groups.google.com)*
  > CSS Properties and Values API Level 1 defines a registerProperty() function, which allows authors to specify type, initial value, and inheritability for custom CSS properties. The two most important implications of this, is that custom properties can...
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com · 2026-09-02T00:00:00)*
  > The CSS Typed OM specification exposes the CSSStyleValue hierarchy to worker global scopes (\[Exposed=(Window, Worker, PaintWorklet, LayoutWorklet)\]), but Blink previously only exposed CSSStyleValue, CSSKeywordValue, CSSNumericValue, CSSUnitValue, and...
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > Tracking bug #468928416 \| ChromeStatus.com entry \| Spec · The CSS Typed OM specification exposes the CSSStyleValue hierarchy to worker global scopes (\[Exposed=(Window, Worker, PaintWorklet, LayoutWorklet)\]). Previously, Blink only exposed CSSStyleVal...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17113.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5114591051907072`)*
  > \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Javier Fernandez T...
- [Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17119.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5114591051907072`)*
  > Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Alex Russe...
- [1278697 - (css-typed-om) \[META\] Implement CSS Houdini Typed OM Level 1 specification](https://bugzilla.mozilla.org/show_bug.cgi?id=1278697) *(bugzilla.mozilla.org)* *(Cites: `https://www.w3.org/TR/css-typed-om-1/#stylevalue-subclasses`)*
  > 1278697 - (css-typed-om) \[META\] Implement CSS Houdini Typed OM Level 1 specification Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advanced Search New ...
- [Add missing pages for \`CSSColorValue\` and related types · Issue #677 · mdn/mdn](https://github.com/mdn/mdn/issues/677) *(github.com · 2025-05-14T01:40:11)* *(Cites: `https://www.w3.org/TR/css-typed-om-1/#stylevalue-subclasses`)*
  > Add missing pages for \`CSSColorValue\` and related types · Issue #677 · mdn/mdn · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reloa...

## 📚 Platform Documentation & Specifications

- [Using the CSS Typed Object Model - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API/Guide) *(developer.mozilla.org)*
- [CSSStyleValue - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parseAll_static) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/api/cssstylevalue/parse_static/index.md?plain=1) *(github.com)*
- [1278697 - (css-typed-om) \[META\] Implement CSS Houdini Typed OM Level 1 specification](https://bugzilla.mozilla.org/show_bug.cgi?id=1278697) *(bugzilla.mozilla.org)*
- [Add missing pages for \`CSSColorValue\` and related types · Issue #677 · mdn/mdn](https://github.com/mdn/mdn/issues/677) *(github.com)*
- [CSSUnparsedValue - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue) *(developer.mozilla.org)*
- [CSSTransformValue - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/CSSTransformValue) *(developer.mozilla.org)*
- [CSSNumericValue - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue) *(developer.mozilla.org)*
- [CSS Typed Object Model API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API) *(developer.mozilla.org)*
- [content/files/en-us/web/api/cssstylevalue/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/cssstylevalue/index.md?plain=1) *(github.com)*
- [Reporting/Interoperability.md at main · Supporters-Of-Chromium-Based-Browsers/Reporting](https://github.com/Supporters-Of-Chromium-Based-Browsers/Reporting/blob/main/Interoperability.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 10 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5114591051907072" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"www.w3.org/TR/css-typed-om-1" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Expose CSSStyleValue hierarchy to Worker contexts" API` — *Core feature API query* (2 returned)
  - `"Expose CSSStyleValue hierarchy to Worker contexts" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Expose CSSStyleValue hierarchy to Worker contexts" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Expose CSSStyleValue hierarchy to Worker contexts" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"CSS Typed OM" worker "CSSStyleValue" guide OR tutorial` — *Finds developer tutorials and guides explaining how to manipulate CSS Typed OM values inside Web Workers.* (4 returned)
  - `"CSSNumericValue" OR "CSSStyleValue" "WorkerGlobalScope" OR "DedicatedWorker"` — *Searches for code snippets and WebIDL definitions using CSSStyleValue subclasses in worker threads.* (8 returned)
  - `"CSSStyleValue" worker "intent to ship" OR chromestatus OR "web-platform-tests"` — *Tracks browser implementation status, Chrome intent-to-ship threads, and test suite coverage for CSS Typed OM in workers.* (6 returned)
  - `"CSSStyleValue" undefined worker OR "CSSKeywordValue" site:github.com OR site:bugs.chromium.org` — *Looks for community discussions, bug reports, and issue threads about missing CSS Typed OM constructors in Blink workers.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 7 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "css-typed-om", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "css-typed-om": Chrome 89.7% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5114591051907072)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5114591051907072)
- [Specification](https://www.w3.org/TR/css-typed-om-1/#stylevalue-subclasses)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/534781956)
