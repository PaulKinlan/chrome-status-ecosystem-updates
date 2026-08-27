# Local Network Access restrictions for Background Fetch

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Background Fetch requests will soon require that the service worker's origin has the necessary Local Network Access (LNA) permission in order to send requests to local or loopback servers.

This aligns Chromium's implementation with the intent of the Background Fetch spec, which states that such requests go through the Fetch spec and have the same security policies applied to them, in this case LNA checks. This prevents sites from bypassing LNA checks by using [Background Fetch spec](https://wicg.github.io/background-fetch/) instead of regular [Fetch](https://fetch.spec.whatwg.org/).

For enterprises, you can use existing LNA enterprise policies in the same way you previously would have for regular Fetch API requests from service workers:
- [LocalNetworkAccessRestrictionsTemporaryOptOut](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut)
- [LocalNetworkAccessAllowedForUrls](https://chromeenterprise.google/policies/#LocalNetworkAccessAllowedForUrls)
- [LoopbackNetworkAllowedForUrls](https://chromeenterprise.google/policies/#LoopbackNetworkAllowedForUrls)
- [LocalNetworkAccessPermissionsPolicyDefaultEnabled](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled)
- [LocalNetworkAccessIpAddressSpaceOverrides](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides)).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as Local Network Access checks.

## Ecosystem Status

- **Momentum:** Moderate (70 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Local Network Access restrictions for Background Fetch is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: [react-native-fetch-api](https://www.npmjs.com/package/react-native-fetch-api) (v3.0.0) for progressive enhancement.

## Packages & Polyfills

- [is-network-error](https://www.npmjs.com/package/is-network-error) `v1.3.2` — Check if a value is a Fetch network error
- [react-native-fetch-api](https://www.npmjs.com/package/react-native-fetch-api) `v3.0.0` — A fetch API polyfill for React Native with text streaming support.

## Articles & Documentation

- [[blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html)
- [[blink-dev] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html)
- [Re: [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17209.html)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6225598451154944)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6225598451154944)
- [Specification](https://wicg.github.io/background-fetch)
- [Chromium Tracking Bug](https://crbug.com/455486148)
