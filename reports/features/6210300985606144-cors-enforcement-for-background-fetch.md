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

- **Momentum:** Moderate (70 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** CORS enforcement for Background Fetch is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) (v3.6.20) for progressive enhancement.

## Packages & Polyfills

- [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) `v3.6.20` — A window.fetch polyfill.
- [cors](https://www.npmjs.com/package/cors) `v2.8.6` — Node.js CORS middleware
- [react-native-background-fetch](https://www.npmjs.com/package/react-native-background-fetch) `v4.4.2` — iOS & Android BackgroundFetch API implementation for React Native
- [@ardatan/sync-fetch](https://www.npmjs.com/package/@ardatan/sync-fetch) `v0.0.1` — Synchronous version of the Fetch API
- [expo-background-fetch](https://www.npmjs.com/package/expo-background-fetch) `v57.0.14` — Expo universal module for BackgroundFetch API

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6210300985606144)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6210300985606144)
- [Specification](https://wicg.github.io/background-fetch)
