# Expose CSSStyleValue hierarchy to Worker contexts

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

The CSS Typed OM spec exposes the CSSStyleValue hierarchy to worker global scopes ([Exposed=(Window, Worker, PaintWorklet, LayoutWorklet)]), but Blink only exposed CSSStyleValue, CSSKeywordValue, CSSNumericValue, CSSUnitValue and CSSUnparsedValue to Window and the worklets. As a result these constructors were undefined in Workers, unlike in Firefox and Safari.

### Motivation

Aligns Chrome with the spec's [Exposed] set and removes a cross‑thread inconsistency (these constructors are currently undefined in workers); enables off‑main‑thread CSS value manipulation

## Ecosystem Status

- **Momentum:** Emerging (20 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Expose CSSStyleValue hierarchy to Worker contexts is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Articles & Documentation

- [[blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17113.html)
- [Re: [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17118.html)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5114591051907072)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5114591051907072)
- [Specification](https://www.w3.org/TR/css-typed-om-1/#stylevalue-subclasses)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/534781956)
