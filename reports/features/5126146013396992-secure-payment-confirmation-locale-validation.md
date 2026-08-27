# Secure Payment Confirmation: Locale Validation

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Updates Secure Payment Confirmation's `locale` data field to return a Not Supported DOMException if none of the language tags provided in the field match the language used by the Secure Payment Confirmation's dialog. If the field is not set or empty, this validation is skipped.

This helps web developers with matching the language of the data that they are supplying to Secure Payment Confirmation with the dialog.

### Motivation

This feature amends Secure Payment Confirmation so that web developers can align the language of data elements that they supply to Secure Payment Confirmation with the language used by the Secure Payment Confirmation dialog.

Currently web developers can provide a list of language tags for Secure Payment Confirmation to use in their dialog. But Secure Payment Confirmation does not use this list because it is not feasible for the browser to support all languages and the Secure Payment Confirmation is a browser feature so it should use the browser language to be consistent with other browser features.

By returning an error when none of the language tags provided match Secure Payment Confirmation's language, web developers are able to retry with different language tags (while updating the language of their supplied data elements) until they get a match.

## Ecosystem Status

- **Momentum:** Moderate (40 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Secure Payment Confirmation: Locale Validation is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Packages & Polyfills

- [os-locale](https://www.npmjs.com/package/os-locale) `v8.0.0` — Get the system locale
- [@generaltranslation/format](https://www.npmjs.com/package/@generaltranslation/format) `v0.1.8` — Locale and formatting utilities for General Translation
- [@lingo.dev/_locales](https://www.npmjs.com/package/@lingo.dev/_locales) `v0.3.4` — Lingo.dev locales

## Articles & Documentation

- [[blink-dev] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5126146013396992)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5126146013396992)
- [Specification](https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale)
- [Chromium Tracking Bug](https://crbug.com/535278878)
