# Secure Payment Confirmation: Locale Validation

> **Report Week:** 2026-W41 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Updates Secure Payment Confirmation's \`locale\` data field to return a Not Supported DOMException if none of the language tags provided in the field match the language used by the Secure Payment Confirmation's dialog. If the field is not set or empty, this validation is skipped.  This helps web developers with matching the language of the data that they are supplying to Secure Payment Confirmation with the dialog.

### Motivation

This feature amends Secure Payment Confirmation so that web developers can align the language of data elements that they supply to Secure Payment Confirmation with the language used by the Secure Payment Confirmation dialog.

Currently web developers can provide a list of language tags for Secure Payment Confirmation to use in their dialog. But Secure Payment Confirmation does not use this list because it is not feasible for the browser to support all languages and the Secure Payment Confirmation is a browser feature so it should use the browser language to be consistent with other browser features.

By returning an error when none of the language tags provided match Secure Payment Confirmation's language, web developers are able to retry with different language tags (while updating the language of their supplied data elements) until they get a match.

## Ecosystem Status

- **Momentum:** High (225 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Secure Payment Confirmation: Locale Validation shipped enabled by default in Chrome 154, allowing merchants and payment authenticators to ensure transaction data matches the browser's native dialog language. The feature resolves a recurring internationalization challenge in EMV 3DS flows by throwing a NotSupportedError DOMException when no supplied language tag matches the browser UI locale. However, broad web platform impact remains constrained because the underlying Secure Payment Confirmation (SPC) specification lacks multi-engine implementation outside of Chromium.

### Recommendations
- Actionable Advice: If utilizing Secure Payment Confirmation, specify your supported language tags in the \`locale\` field and wrap the call in a try/catch block to intercept \`NotSupportedError\`. Use that failure signal to renegotiate or translate transaction strings into a fallback locale before retrying or gracefully falling back to standard 3DS web flows.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @gsnedders: "Am I right in understanding that the primary goal here is to replace 3-D Secure with something that's browser mediated?..."
- Standards Activity (Mozilla): Latest discussion from @stephenmcgruer: "Hi folks. I know that Mozilla's position on SPC is outstanding, however we wanted to let you know of a notable additional feature to SPC that we are c..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Secure Payment Confirmation (SPC)](https://github.com/WebKit/standards-positions/issues/30) [open]
- **Mozilla:** [Secure Payment Confirmation](https://github.com/mozilla/standards-positions/issues/570) [open]

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEpAm_XHSy8ZPsK6AN7VIENguIQy9H37hpWxlIFaZ-LIv19lCrwTiV2RPZj3rnoNz-y3_qPVjqt2UL1YXypBY1ttTCno2so1VFjmToU4ItzxASh_qnNIOgq_nuEDhK-3jqskYEh3O4d7g==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:** The SPC confirmation modal is
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFxrFByka1vT9f4wjBP9a6fPHULsicOnXlZyL3lpWmpq0_nljYzlg_9UxInfeI6Dw9cY1V2vH_dtAc-E87RvFnxuJYVENA2nr6OyLF7TUGJtxRl6FiwN2vBM_n47fRPx5VWXeT3WJA=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:** The SPC confirmation modal is
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE1Az-SA4EV4QPufQti-Br0SGgR-EiELPmXfrLW1n8_A_MV1ybIp9B6mo8qUqja7RfMZseWFMrrepNu5Rflls5eSJiiOVOakqck8037QiwF7kzjJqb6ARa3bNJ-xgeV-tjOaorX708=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:** The SPC confirmation modal is
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHah1kC6qe-SgpiQZbom5wD6NwVkcoy_4fbtxvLIu7vVjIjhtovgTlj35SOJnAsVu51v3Gmm8cBIVhVxVDc3MxXHHCQ4kismG_xIaoHaGs=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:** The SPC confirmation modal is
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGwKhuQgjLcEoi06y2ydi6h8fhNFlEc6mJ2AimlzjoRqw0rysquHBjJ5prQR_DbkhLyBbd9B1jLyPs8QlwYlVpLkMsrt6Bva2Oor9MI-uNvUJLnt54F9fiqm_KGtiMc7w==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:** The SPC confirmation modal is
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF1z5kZ6i8d4omrxmFl6_Urg5S7xvPvkhyKLliKk8xc5INizvwPo3wtIOpD1MeJFCZeOgsWflsRoBr8IVrhbUXONOmQrec3jbvHznqlL_xhYiRCUHKZhUiK5iAQGdleTPzMPp9e4loY1y3LeHD_6O-LcxLQf5cyJ_Ao) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:** The SPC confirmation modal is
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGSd3Hljkqs1rznynK2sF6Rr5kifcSNKcmeZN3u8oFZfFh2zjMiUpwmrpRvnJ0mfW-I5ebPCMOJb7qXzwFprG21I3o6rD1z3tdx7AL1h-vzmJuKkF44zz10wrCfvVwfPAtiyQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:** The SPC confirmation modal is
- [googlesource.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE4rNJh65d5STZCJds7CgodKut_KUZOx88l_fBWMpjdA_8sQN37b6BsMRwVhlx4VvTahRGOVoTVZIB8IVxxirsmIKhzl7xJwAAycq9mYkVOLqAS2B59WvIAFB2R-FjA3_Z-w71Z7KeeQSHKtBGfp8rLNcXaQuZD5h43Gc-C9iR17CR5NRKJQz70nkGufGZN5LEBxxu_RdjP3IqUDdCSqKOA4MEylZ4=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:** The SPC confirmation modal is
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH3ppehKWJBijtoY1_Xhiza0NxFSwSPq-vxL1fmiDV6o8PqLDrCGxXoXbJsxAQIrIPMWnzuXKidxkPUJpNFHpu1PfXJEUmlH5X16dFEP2Iv8M586iDT6AhRRVWK93MDMWm6jPp25Q==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:** The SPC confirmation modal is
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEclzoA7wuoy5SgPCpTrAZqN3RhKmsI_yBIDcbwrpjFCO96yUHukm4kI7R5tmd_xgCKCaerWs1qegD5AI-EBS2URltonz5HLh2j2MS43yjb-hbj5oQdqOEo6hSM0n5bapKHcs_g0RK6tGKOmzpi1fWqjLS9hbKA4Ipa) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:** The SPC confirmation modal is
- [fidoalliance.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHDDIo8bVkuFUsV-pP-l5g1LrcP4mnlmZRkq_ezuTE3uWg-LzcKjQ9VnRP_1svpDUTfRhWK2KWtR5h5AT3HIL9225v-9AJ3FruNMOBI93PmkerR86dGJFC2cZHQMibTataioSfS4S82-j7islDzWoIsTL8JylSITg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:** The SPC confirmation modal is
- [gigazine.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFfdSRVsHjLa1uO21nHfOFx5XYBXFt1GSqmFCJCqhEl1cnOq8cb3Ht7cM34Ata8YeO2RCS6YqQl-_XUnquM2_CytJAfvQTlw5MMVeAmFG_VkUIax--Q6beCycovapaVtPO1z3w20DaAO9I_a07hz3ZJVw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:** The SPC confirmation modal is
- [\[blink-dev\] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)*
  > By returning an error when none of the language tags provided match Secure Payment Confirmation&#x27;s language, <strong>web developers are able to retry with different language tags (while updating the language of their supplied data elements) until...
- [SecurePaymentConfirmationRequest - Web APIs - W3cubDocs](https://docs.w3cub.com/dom/securepaymentconfirmationrequest) *(docs.w3cub.com)*
  > An optional list of well-formed RFC 5646: Tags for Identifying Languages (also known as BCP 47) language tags, in descending order of priority, that identify the local preferences of the website. That is, this represents a language priority list RFC ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [secure-payment-confirmation/spec.bs at main · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/spec.bs) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > TR: https://www.w3.org/TR/secure-payment-confirmation/ ED: https://<strong>w3c.github.io/secure-payment-confirmation</strong>/ Prepare for TR: true · Inline Github Issues: true · Group: web-payments · Status: w3c/ED · Deadline: 2023-08-01 ·...

## 📚 Platform Documentation & Specifications

- [secure-payment-confirmation/spec.bs at main · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/spec.bs) *(github.com)*
- [Localization topics to address · Issue #93 · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/issues/93) *(github.com)*
- [SecurePaymentConfirmationRequest - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/SecurePaymentConfirmationRequest) *(developer.mozilla.org)*
- [Secure Payment Confirmation](https://www.w3.org/TR/2023/CR-secure-payment-confirmation-20230615) *(w3.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 38 result(s) found across 12 planned queries — **6 verified relevant**
  - `"chromestatus.com/feature/5126146013396992" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/secure-payment-confirmation/issues/343" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"w3c.github.io/secure-payment-confirmation" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Secure Payment Confirmation: Locale Validation" API` — *Core feature API query* (0 returned)
  - `"Secure Payment Confirmation: Locale Validation" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"secure-payment-confirmation" locale ("NotSupportedError" OR "Not Supported")` — *Finds technical documentation, code snippets, and error-handling patterns for Secure Payment Confirmation when locale validation fails.* (2 returned)
  - `"Secure Payment Confirmation" ("locale" OR "language") "PaymentRequest" guide OR tutorial` — *Discovers developer guides, implementation articles, and tutorials on configuring localization and language tags in SPC.* (0 returned)
  - `"Intent to Ship" "Secure Payment Confirmation" "locale"` — *Uncovers browser release announcements, blink-dev intent threads, and feature rollout status across Chromium-based browsers.* (0 returned)
  - `site:github.com/w3c/secure-payment-confirmation ("issue" OR "pull") "locale"` — *Surfaces standards debates, issue discussions, and spec rationale within the W3C Web Payments Working Group repository.* (3 returned)
  - `"SecurePaymentConfirmationRequest" "locale" match OR retry language` — *Locates real-world JavaScript code samples showing how developers retry authentication requests with fallback language tags.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 19 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 20 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 9 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5126146013396992)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5126146013396992)
- [Specification](https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale)
- [Chromium Tracking Bug](https://crbug.com/535278878)
