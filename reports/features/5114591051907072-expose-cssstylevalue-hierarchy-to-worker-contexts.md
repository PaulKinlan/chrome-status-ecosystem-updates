# Expose CSSStyleValue hierarchy to Worker contexts

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The CSS Typed OM spec exposes the CSSStyleValue hierarchy to worker global scopes ([Exposed=(Window, Worker, PaintWorklet, LayoutWorklet)]), but Blink only exposed CSSStyleValue, CSSKeywordValue, CSSNumericValue, CSSUnitValue and CSSUnparsedValue to Window and the worklets. As a result these constructors were undefined in Workers, unlike in Firefox and Safari.

### Motivation

Aligns Chrome with the spec's [Exposed] set and removes a cross‑thread inconsistency (these constructors are currently undefined in workers); enables off‑main‑thread CSS value manipulation

## Ecosystem Status

- **Momentum:** High (100 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chrome 154 resolves a long-standing omission in Blink by exposing the CSS Typed OM `CSSStyleValue` class hierarchy (including `CSSNumericValue`, `CSSKeywordValue`, and `CSSUnitValue`) inside Dedicated and Shared Worker global scopes. This change brings Blink into full alignment with the W3C CSS Typed OM Level 1 specification and closes an interoperability gap with Firefox and Safari, which already supported these constructors off the main thread.

### Recommendations
- Actionable Advice: Teams performing off-main-thread CSS calculations or canvas/worker styling should verify worker contexts and can safely adopt Typed OM constructors across all modern browsers. Maintain simple runtime feature detection (e.g., `typeof CSSNumericValue !== 'undefined'`) to gracefully support older Chromium releases.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGARYOAQGX6kLZYUeoEqUC5-_Vj_ApUZ8e-5gIUuVxgV0_QyWW_MS_e8Sik6SRyWTgc66vUEziUAPdQfR5aEJvBHP2O5YJSksdGXGQoPGa_eqmU69yKWNxXOc2yPwxWJzlowCMGspo=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGrRWFeGnsLn-6lOCJfMiwzh-x60vbloiyZG_zfi-9UAZPCeWLKlnPe3d2BD_PyFUvAUk_IcsXCoJYYUs8O7stljDb6IkAGOolxwqhjNgOxFAig_4fh4fdirug=) *(vertexaisearch.cloud.google.com)*
  > ### Summary  The web platform update **"Expose CSSStyleValue hierarchy to Worker contexts"** aligns Chromium's Blink engine with the **W3C CSS Typed OM Level 1 specification**.   * **The Problem:** The CSS Typed OM specification mandates exposing the
- [bsky.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF31JA0Bj7FG74V-_tT1Lr0ej0DwJLKDdANWtIUgAY687dvm2NnsF7GZ4VHI0L0s7dEC_w6uJPATpZDLje2EqFtyP4Jx8r7k98V2eqPn8ydJj6BlM7GQbqfIX549Eh0) *(vertexaisearch.cloud.google.com)*
  > @intenttoship.dev on Bluesky JavaScript Required This is a heavily interactive web application, and JavaScript is required. Simple HTML interfaces are possible, but that is not what this is. Learn more about Bluesky at bsky.social and atproto.com . P...
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFVgJ25p2okjS8aMmlBL7NeB_TR1lZGZdrww0CvgbWgDNp4EEOpqTKIGdsg0gV4dZBA96rRhovZnAh8g09XHf0KXzNCmLbFEjs1bBFZwzqbJf0CPg==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFzu8Q0W9fPbHSm8-VgIAyxI1Soa0WugOdtuxeIL2Th6dykfSeBkVzD7w1esILTFlER71BwPkf2q-t0EclERiETifZVXSjhtJqmYTpFWdfSIBottxUOPADWa-duaTCpj7GIr1lp4-Z7iyqAGMDCD5kXlXhDFxsyrx3O1BG9lwJPNLgZ4w==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [[blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17113.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Javier Fernandez Tue, 04 Aug...
- [Re: [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17118.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Daniel Bratell Wed, ...

## 📚 Platform Documentation & Specifications

- [CSSStyleValue: toString() method](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/toString) *(developer.mozilla.org)*
- [CSSStyleValue](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue) *(developer.mozilla.org)*
- [CSSStyleValue: parse() static method](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parse_static) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 2 result(s) found (query: `""Expose CSSStyleValue hierarchy to Worker contexts" API"`) — **2 verified relevant**
- **Google Search Grounding (gemini-3.7-flash):** 5 result(s) found — **5 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found (query: `"Expose CSSStyleValue hierarchy to Worker contexts"`) — **7 verified relevant**
- **Hacker News Algolia:** 0 result(s) found (query: `"Expose CSSStyleValue hierarchy to Worker contexts"`) — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5114591051907072)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5114591051907072)
- [Specification](https://www.w3.org/TR/css-typed-om-1/#stylevalue-subclasses)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/534781956)
