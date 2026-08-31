# Secure Payment Confirmation: Locale Validation

> **Report Week:** 2026-W36 | **Milestone:** Chrome 154 | **Category:** Enabled by default

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
- **Executive Take:** Secure Payment Confirmation (SPC) Locale Validation updates the `SecurePaymentConfirmationRequest` dictionary to reject with a `NotSupportedError` DOMException if none of the provided BCP 47 language tags match the browser's dialog UI language. This enables payment authenticators to negotiate and align merchant-supplied transaction data strings with browser-rendered prompt languages. While shipping enabled by default in Chrome 154, SPC and its extensions remain largely Chromium-driven without cross-engine standardization.

### Recommendations
- Actionable Advice: Use SPC strictly as a progressive enhancement with appropriate capability checks and fallbacks to standard 3DS challenge flows. If specifying the `locale` field in `SecurePaymentConfirmationRequest`, handle `NotSupportedError` exceptions during `PaymentRequest.show()` to either retry with secondary localized strings or gracefully degrade.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @gsnedders: "Am I right in understanding that the primary goal here is to replace 3-D Secure with something that's browser mediated?..."
- Standards Activity (Mozilla): Latest discussion from @stephenmcgruer: "Hi folks. I know that Mozilla's position on SPC is outstanding, however we wanted to let you know of a notable additional feature to SPC that we are c..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Secure Payment Confirmation (SPC)](https://github.com/WebKit/standards-positions/issues/30) [open]
- **Mozilla:** [Secure Payment Confirmation](https://github.com/mozilla/standards-positions/issues/570) [open]

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEac5K1zwVJAjWXeCJW8_KZ-IG6lLBUQjFMJsWhUJ7s5BfVRs5b2xRGjvHuoBxl3Cd2rx1PjWi6sbnFoWzCBdiGDqHOEcIN3AvNQdfNs12edAVGId9EvptKk31qS_3sqzNnu0960vWMvQ==) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Summary  **Secure Payment Confirmation (SPC): Locale Validation** updates the handling of the `locale` field within the `SecurePaymentConfirmationRequest` dictionary.   * **Behavior**: When a web application passes a list of BCP 47 lan
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG1jlz7NMBN7pvSQPD4b9YeAwg2nSRtfB42mGFZ0Tqdfy9Tyzl8AJzXWENi4VlJQl0blaNnED5rEGp8GC99ilr0m9jw_T4coOmua5tdpw9MK4GoFkruzmPnatMT9MP6AbPtKQmh9fv3bKSRoIdrJ6bgs3czWo6cdxwF) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Summary  **Secure Payment Confirmation (SPC): Locale Validation** updates the handling of the `locale` field within the `SecurePaymentConfirmationRequest` dictionary.   * **Behavior**: When a web application passes a list of BCP 47 lan
- [mozaic.fm](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFE8AxiF3UXA4Cxi9ZiNdsbGGma-A0YE3KjOWHWyXy_BNxnwfQmhCa2X-Ei014vrZcPatj6m3uZyg21RG4epYNgmyxfRIpn1Say3XVfo02NktJkTzUI3gsYBlrdV1bbprYz_gnkZ2wOD0YE5s6_j64CZA==) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Summary  **Secure Payment Confirmation (SPC): Locale Validation** updates the handling of the `locale` field within the `SecurePaymentConfirmationRequest` dictionary.   * **Behavior**: When a web application passes a list of BCP 47 lan
- [[blink-dev] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)*
  > Availability expectation The locale validation for Secure Payment Confirmation will only be available in Chromium browsers for the foreseeable future. Estimated milestones Shipping on desktop 154 Shipping on Android 154 Link to entry on the Chrome Pl...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5126146013396992`)*
  > Availability expectation The locale validation for Secure Payment Confirmation will only be available in Chromium browsers for the foreseeable future. Estimated milestones Shipping on desktop 154 Shipping on Android 154 Link to entry on the...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 25 result(s) found across 7 planned queries — **1 verified relevant**
  - `"chromestatus.com/feature/5126146013396992" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c/secure-payment-confirmation/issues/343" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"w3c.github.io/secure-payment-confirmation" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Secure Payment Confirmation" "locale" ("NotSupportedError" OR "DOMException") javascript` — *Finds code snippets and API error-handling patterns for Secure Payment Confirmation locale validation failures and fallback handling.* (8 returned)
  - `"Secure Payment Confirmation" ("locale" OR "localization") (tutorial OR guide OR web.dev)` — *Discovers developer guides, articles, and best practices for configuring language tags and data alignment in SPC dialogs.* (8 returned)
  - `"Secure Payment Confirmation" "locale" ("Intent to Ship" OR "Intent to Prototype" OR "Chromium")` — *Identifies browser engine shipping announcements, implementation tracking, and rollout status across Chromium and other browser vendors.* (1 returned)
  - `site:github.com/w3c/secure-payment-confirmation "locale" validation OR 343` — *Targets standards deliberations, issue discussions, and developer feedback on locale validation within the W3C Web Payments Working Group repository.* (0 returned)
- **Google Search Grounding (gemini-3.7-flash):** 8 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 8 result(s) found — **4 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 20 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 9 engineer comment(s) read
- **Web Page Excerpts Ingested:** 5 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5126146013396992)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5126146013396992)
- [Specification](https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale)
- [Chromium Tracking Bug](https://crbug.com/535278878)
