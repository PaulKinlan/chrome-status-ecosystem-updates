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

- **Momentum:** Moderate (50 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Secure Payment Confirmation (SPC) Locale Validation enables web applications to ensure that transaction payload text aligns with the language rendered in the browser's native SPC authentication UI. Scheduled to ship in Chromium 154, the feature causes the browser to reject the request with a NotSupportedError DOMException if none of the caller's supplied language tags match the browser's UI locale, enabling developers to retry with matching localized assets. However, broad web ecosystem support remains limited because SPC itself is primarily implemented in Chromium, with Mozilla and WebKit maintaining open, non-committal standards positions.

### Recommendations
- Actionable Advice: Teams implementing SPC should wrap authentication calls in robust error handling to catch 'NotSupportedError' DOMExceptions when supplying explicit `locale` arrays. Maintain a standard 3-D Secure or fallback WebAuthn verification path for non-Chromium browsers and for scenarios where locale negotiation fails.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @gsnedders: "Am I right in understanding that the primary goal here is to replace 3-D Secure with something that's browser mediated?..."
- Standards Activity (Mozilla): Latest discussion from @stephenmcgruer: "Hi folks. I know that Mozilla's position on SPC is outstanding, however we wanted to let you know of a notable additional feature to SPC that we are c..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Secure Payment Confirmation (SPC)](https://github.com/WebKit/standards-positions/issues/30) [open]
- **Mozilla:** [Secure Payment Confirmation](https://github.com/mozilla/standards-positions/issues/570) [open]

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFduA3xRn75I648ci5z8HgNSHo9hmnTg6PrFjXsSQo4qjBXxUo6Ur7jGVNtUOSzIMXMPMONS5IC0sj3wmkqFWqDdKdN8EU_Od0FN3ifwyZSYCxtPBr5c97L7w-FoYuWcvyW2vQod11FXhRyqtEJFATT6wfaZPdsw_Y=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation: Locale Validation** updates the Secure Payment Confirmation (SPC) API (part of the Web Payments and WebAuthn ecosystem). When initiating an authentication ceremony, developers can pass a `loc
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGNxXAVivvrIUJE0ZNwDXvm5MC-mo7aBvJ3nb5k0fXrKvjkOrrDxqP3mRg0gVMn1yGGpNYHEN4XMRl6jLQnHZBDeSkF39EQkkUYNgpF32sW-oH46WBhGcPvmfylm_ne4tQRsB4CuK80) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation: Locale Validation** updates the Secure Payment Confirmation (SPC) API (part of the Web Payments and WebAuthn ecosystem). When initiating an authentication ceremony, developers can pass a `loc
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHGE_SE14Gb1hNI1I58jW7xIe8vh0WOtCZHcXDNomgJj0ku8NN0qDXg0T6cAGMsbXg_VZmHlcJNo2A2jORxhAgT-WVjJXJ_GGMVTA72w56ksuiINYd33eyGYfgHvfYUuDl9UGRfISIK5PtXFQdb8HzW4tEZPagvRafyXyV8_jrLjMd-ua6rCip-GLPmLeKuoFZMgBh-8DNf) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation: Locale Validation** updates the Secure Payment Confirmation (SPC) API (part of the Web Payments and WebAuthn ecosystem). When initiating an authentication ceremony, developers can pass a `loc
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEolQMjfJTm3kTnFpc6gIOeiqfZ4ZZ1nUtzW4EbXiCLHwuQAbhgNqYAAawTqar18up2dLHkFmCfes5jFWE_HWJpZWStHIlHXNxSVQFwFyql5RdRgAqcUD7R27sRPpqbbAGDihqUb2PreSucutmuNqhGsExqz_1VgkqT) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation: Locale Validation** updates the Secure Payment Confirmation (SPC) API (part of the Web Payments and WebAuthn ecosystem). When initiating an authentication ceremony, developers can pass a `loc
- [[blink-dev] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)*
  > Explainer https://github.com/w... `locale` data field to return a Javascript TypeError if none of the language tags provided in the field match the language used by the Secure Payment Confirmation&#x27;s dialog. If the field is not set or empty, this...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 1 result(s) found (query: `""Secure Payment Confirmation: Locale Validation" API"`) — **1 verified relevant**
- **Google Search Grounding (gemini-3.7-flash):** 10 result(s) found — **4 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found (query: `"Secure Payment Confirmation: Locale Validation"`) — **5 verified relevant**
- **Hacker News Algolia:** 0 result(s) found (query: `"Secure Payment Confirmation: Locale Validation"`) — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 20 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 9 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5126146013396992)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5126146013396992)
- [Specification](https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale)
- [Chromium Tracking Bug](https://crbug.com/535278878)
