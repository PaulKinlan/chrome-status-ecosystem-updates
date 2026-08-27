# CORS enforcement for Background Fetch

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Starting in Chrome 154, the Background Fetch API will enforce Cross-Origin Resource Sharing (CORS). 
This update aligns Chromium's implementation with the intent of the [Background Fetch spec](https://wicg.github.io/background-fetch/). This ensures that Background Fetch requests are subject to the same security policies, such as Local Network Access checks. 
This update prevents sites from bypassing CORS (and other security policy checks) by using Background Fetch instead of regular [Fetch](https://fetch.spec.whatwg.org/).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as CORS (and CORP/COEP/DIP).

(crbug.com/515243254 is our meta bug tracking all of the different web platform security issues with Background Fetch.)

## Ecosystem Status

- **Momentum:** Emerging (30 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** CORS enforcement for Background Fetch is currently Enabled by default in Chrome 154. Ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with appropriate feature detection.
- Firefox and Safari have not yet finalized positions. Use defensive feature detection (guarding with `if ("..." in window)`).
- Community polyfill / package is available on npm for cross-browser progressive enhancement.

## Packages & Polyfills

- [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) `v3.6.20` — A window.fetch polyfill.

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6210300985606144)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6210300985606144)
- [Specification](https://wicg.github.io/background-fetch)
