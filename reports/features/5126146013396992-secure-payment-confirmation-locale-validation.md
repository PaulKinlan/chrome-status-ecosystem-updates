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

- **Momentum:** High (300 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Secure Payment Confirmation (SPC) Locale Validation updates the `locale` field to reject with a Not Supported DOMException when none of the developer-supplied language tags match the browser dialog's locale. This change is led by Chromium to allow payment providers to detect mismatches and retry with localized transaction strings. However, because broad SPC adoption remains largely Chromium-specific without Gecko or WebKit implementation, the ecosystem footprint is currently limited to Chrome environments.

### Recommendations
- Actionable Advice: If utilizing SPC in production or pilot flows, pass an array of supported BCP 47 language tags and catch the `NotSupportedError` DOMException to retry with a fallback language or fallback authentication mechanism. If your application does not need strict dialog language parity, omit the `locale` parameter to bypass validation safely.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @gsnedders: "Am I right in understanding that the primary goal here is to replace 3-D Secure with something that's browser mediated?..."
- Standards Activity (Mozilla): Latest discussion from @stephenmcgruer: "Hi folks. I know that Mozilla's position on SPC is outstanding, however we wanted to let you know of a notable additional feature to SPC that we are c..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Secure Payment Confirmation (SPC)](https://github.com/WebKit/standards-positions/issues/30) [open]
- **Mozilla:** [Secure Payment Confirmation](https://github.com/mozilla/standards-positions/issues/570) [open]

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEvJMgA4dNJIhH5MxO1rzYjLNn75deyB7ny3jRfnezLvER8xcl0CcHe4VwTDd4GSDH6yEDCKI5TBx7aUgLfXVl3sFqgOa3Wzb5CeYcWF4P3sGIrckYD8lSsAw-9n3z2Lavz7TRfcIGojICk_ylMm8_jXkeX) *(vertexaisearch.cloud.google.com)*
  > [spec] SPC Locale Field to Return Error on Language Mismatch · Issue #343 · w3c/secure-payment-confirmation · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFbVQXH6oabi1NVGV_BPrCx56inat-w6GiupGeIYRaqISOElGMrAr44wVoBE9D_smQtP2PdtUMT3UyvQljEoQ7RAdLfVrA790bBSxaaJCugFKDOqsgrSbi3RLxXXLGl0jDjLRPM8rxCVj77BRrAxCf7Qmcc_9EbZEtBLQJoNWkJSjC1ipei) *(vertexaisearch.cloud.google.com)*
  > Registrar una confirmación de pago seguro | Payments | Chrome for Developers Ir al contenido principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العرب...
- [googlesource.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF_6vVla90h7_HlCvD4qgWAfbkT-li-SdsyXjHTd03ECgJzzEsa5eNYsiss8RwwvwWO7HwCizwERaggDO4dWiUO7qQMBp5PXGchPNgpiCT_vJ8kBSlDU8Yh7_tpwZ3Wt4yVtFpjq62ByOnSit6TWyjsYHn6Hu_PVxH_eUtE9_ECAelY5uA6NNG_zAsLXLVN7ua5YRcg1YHWW3tGZXbgsF0nx_Ih3LGm) *(vertexaisearch.cloud.google.com)*
  > chrome/browser/flag_descriptions.h - experimental/chromium/src - Git at Google Sign in chromium / experimental / chromium / src / refs/heads/main / . / chrome / browser / flag_descriptions.h blob: fb7a0e5b44eeee9a8c3953f46fe6cd80b819dad7 [ file ] [ e...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHluBCS89UNUOt_xk1rYjh8hmn55bVq6GWWbeRteW1CA1W1NoXQykOvrYgOQ8_8KbAb6plXBo1JtBuaamSh8jp6BcM-IexDbKSSQGJJv6Ep9eA9-6wssX43v9FBug-ALlny5HAAskNY57zhUrMP1JCutgErxG1-HaUz) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation (SPC): Locale Validation** updates the handling of the `locale` parameter in the Secure Payment Confirmation API (an extension of the Payment Request API and WebAuthn).   * **The Problem:** Pr
- [fidoalliance.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFC-RC5zSwfwbp79r_DVArI8GogXnjCFro9IceG_D-PHg4wGUiiWvHtXcnWDLukwr016Wi_-l89YRL4z_Uuve1hU5qvqk5goIeKJc31zWLpW8cR8j_kK9y2OADcsLBuGK32XPezr3Kj7FQeS2c-UMC-U12B8Bd7nA==) *(vertexaisearch.cloud.google.com)*
  > White Paper: Secure Payment Confirmation | FIDO Alliance FIDO Alliance Passkey Central Authenticate Conference English &#31616;&#20307;&#20013;&#25991; &#26085;&#26412;&#35486; &#54620;&#44397;&#50612; Passkeys Device Onboarding Specifications Certif...
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFeQGwh_1E95e-EmMSA4uk_KIkxIx4CUUi4ACwbvSwCO-b3NhrdD_JgTbxUOO4KmTX2a3hYEeIYDi7cPkOuCr-91N2GL88-_af7UF_DlPvJE9X4YdWfgWz7y3C5a41sjXChqUGtcmhdc83wqkQFgyt12fn3mRqfTg==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [bsky.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEcPpM4hB4a9bMwV-NVkGgSZhgf5_AlAIiBs5uMB616kQgPRiLrjB-H6zhPVnBA0hCskl_SW2tXYKw9MM-YSLFDrvLDGzNBZhazFguf4sxGdqlvOForrsnHxrF-5T5HeQ==) *(vertexaisearch.cloud.google.com)*
  > @intenttoship.dev on Bluesky JavaScript Required This is a heavily interactive web application, and JavaScript is required. Simple HTML interfaces are possible, but that is not what this is. Learn more about Bluesky at bsky.social and atproto.com . P...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGove2X1k0nvm4ZZPFnxnEvzhe4kD1inrqT-TiNZc90kFX0u-UB-Ou27ISJsPJXzO5LG-bEXElB-Zus4oaUL9Qz8HdgaQ5azCA6mtv-owJe12Ciqx8K07M4hw7LYA9XT44-j8rnGdwVQFLxdyDSvhw5q_u2w5i0HZ8gznPXTw==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGwF4sD03GMI35a-5_8dLAUNQwy-tyz6mCrzRxazhIPrm8aStg0LqQ9s00aMKyHnnZYW32BqJPPh6FORwKnj26Hkc8VFT6y0LakaM5DyNQ6lETRuGpJs2iMiDG9RmG2hMRsoyRByq1E) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation (SPC): Locale Validation** updates the handling of the `locale` parameter in the Secure Payment Confirmation API (an extension of the Payment Request API and WebAuthn).   * **The Problem:** Pr
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEZApYk9o6Ze-A2lkFsPl60YPh7sHnTdTIaetbaTQyFGs0ZSOQ-yxFkPuQe86_9N0gQL2KPl4GlxFQwmwvz4GEQyF1oDpbpKltdqdx0tpNbgOSf1TvwCQxexIj4sCuugI7Gpqc7iD9xfVBw2bzKtxSKXpOgs5ZKDFtxX_qr) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation (SPC): Locale Validation** updates the handling of the `locale` parameter in the Secure Payment Confirmation API (an extension of the Payment Request API and WebAuthn).   * **The Problem:** Pr
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHt_Q82E0PWktNh_OL6r_dzdfroTbEJD6QfU4mgdlHJDfuencUIDuGYzUzO1Jv1quzOHKTG-wyDV5u3CnKywoRZRokoRgi3053v2YyfSCBDzHoPybIGV_aNg-Rojwy75V8eBPdWVb7kLJDlIhP3nx5bhXiWqlpvaCwLP53nz_FrrYb4ri9GW7PFGA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation (SPC): Locale Validation** updates the handling of the `locale` parameter in the Secure Payment Confirmation API (an extension of the Payment Request API and WebAuthn).   * **The Problem:** Pr
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFTrdBx5pZSAq_O4-fmoBo3Fpfolq46vBQvdnKkPJqE4y17aPydFqj6RwFMohnctJuCutyfUfzE-7owop7HNrEhX3qD8W_aXViUlacVTEpt54g4pkKbOlhGYBLMQA9AocmIDloiV8kr2Dkhmtfi4R8NIaL0xSo4AKoCuABs_I-Y8IAGFe8MYEJxFdcCln7DLNGBr3qPxGbgoUrDthA=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation (SPC): Locale Validation** updates the handling of the `locale` parameter in the Secure Payment Confirmation API (an extension of the Payment Request API and WebAuthn).   * **The Problem:** Pr
- [juspay.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE0XOJSEUN6eCTuozLe06BFoKXF2FC1aLY9YEBW1HiE_T0QgSVFCf4CuP7NUrVsfUHt5lTKg17jPJmAfHSB7RldpsXb5gAzkdwSmNIB2ideRTtfdb6IkwPqZ0GOJZBCzcPdrxTOuuGl8NexF6oRNL5tqyj_T_fAQ45kb9ZJydLme-aT) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation (SPC): Locale Validation** updates the handling of the `locale` parameter in the Secure Payment Confirmation API (an extension of the Payment Request API and WebAuthn).   * **The Problem:** Pr
- [[blink-dev] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)*
  > Availability expectation The locale validation for Secure Payment Confirmation will only be available in Chromium browsers for the foreseeable future. Estimated milestones Shipping on desktop 154 Shipping on Android 154 Link to entry on the Chrome Pl...
- [Seeing this error: Error creating payment request DOMException: Failed to construct 'PaymentRequest'](https://community.developer.cybersource.com/t5/Integration-and-Testing/Seeing-this-error-Error-creating-payment-request-DOMException/td-p/67317) *(community.developer.cybersource.com · 2019-04-17T21:14:06)*
  > Error creating payment request DOMException: Failed to construct &#x27;PaymentRequest&#x27;: Must be in a top-level browsing context or an iframe needs to specify &#x27;allowpaymentrequest&#x27; explicitly at https://sandbox-assets.secure.checkout.vi...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5126146013396992`)*
  > Availability expectation The locale validation for Secure Payment Confirmation will only be available in Chromium browsers for the foreseeable future. Estimated milestones Shipping on desktop 154 Shipping on Android 154 Link to entry on the...
- [secure-payment-confirmation/spec.bs at main · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/spec.bs) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > TR: https://www.w3.org/TR/secure-payment-confirmation/ ED: https://<strong>w3c.github.io/secure-payment-confirmation</strong>/ Prepare for TR: true · Inline Github Issues: true · Group: web-payments · Status: w3c/ED · Deadline: 2023-08-01 ·...
- [Mention Secure Payment Confirmation · Issue #535 · w3c/web-roadmaps](https://github.com/w3c/web-roadmaps/issues/535) *(github.com · 2021-08-27T11:03:35)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > Mention Secure Payment Confirmation#535 · Copy link · Labels · mobile-roadmap · xfq · opened · on Aug 27, 2021 · Issue body actions · Spec: https://<strong>w3c.github.io/secure-payment-confirmation</strong>/ Explainer: https://github.com/w3...
- [Secure Payment Confirmation 2023-01-11 > 2023-02-01 · Issue #50 · w3c/a11y-request](https://github.com/w3c/a11y-request/issues/50) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > name of spec to be reviewed: Secure Payment Confirmation (SPC) URL of spec: https://<strong>w3c.github.io/secure-payment-confirmation</strong>/ What and when is your next expected transition? Candidate Recommendati...
- [wpt/secure-payment-confirmation/authentication-accepted.https.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/secure-payment-confirmation/authentication-accepted.https.html) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > // https://github.com/w3c/secure-payment-confirmation/pull/198 ·   if (&#x27;rp&#x27; in clientDataJSON.payment) {     assert_equals(clientDataJSON.payment.rp, clientDataJSON.payment.rpId);   }  ·   // TODO: Verify cred.response.signature, ...
- [Secure Payment Confirmation · Issue #570 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/570) *(github.com · 2021-08-24T13:51:20)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > Request for Mozilla Position on an Emerging Web Specification Specification Title: Secure Payment Confirmation Specification or proposal URL: https://<strong>w3c.github.io/secure-payment-confirmation</strong>/ (see...
- [wpt/secure-payment-confirmation/authentication-auth-another-way.https.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/secure-payment-confirmation/authentication-auth-another-way.https.html) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > &lt;title&gt;Test for the &#x27;secure-payment-confirmation&#x27; payment method authentication - user wants to auth another way case&lt;/title&gt; &lt;link rel=&quot;help&quot; href=&quot;https://<strong>w3c.github.io/secure-payment-confir...
- [wpt/secure-payment-confirmation/authentication-accepted-bbk-created.https.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/secure-payment-confirmation/authentication-accepted-bbk-created.https.html) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > &lt;title&gt;Test for the &#x27;secure-payment-confirmation&#x27; payment method authentication - accepted case with browser bound keys&lt;/title&gt; &lt;link rel=&quot;help&quot; href=&quot;https://<strong>w3c.github.io/secure-payment-conf...
- [wpt/secure-payment-confirmation/authentication-in-iframe.sub.https.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/secure-payment-confirmation/authentication-in-iframe.sub.https.html) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > &lt;title&gt;Test for the &#x27;secure-payment-confirmation&#x27; payment method authentication - cross origin&lt;/title&gt; &lt;link rel=&quot;help&quot; href=&quot;https://<strong>w3c.github.io/secure-payment-confirmation</strong>#sctn-au...

## 📚 Platform Documentation & Specifications

- [secure-payment-confirmation/spec.bs at main · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/spec.bs) *(github.com)*
- [Mention Secure Payment Confirmation · Issue #535 · w3c/web-roadmaps](https://github.com/w3c/web-roadmaps/issues/535) *(github.com)*
- [Secure Payment Confirmation 2023-01-11 > 2023-02-01 · Issue #50 · w3c/a11y-request](https://github.com/w3c/a11y-request/issues/50) *(github.com)*
- [wpt/secure-payment-confirmation/authentication-accepted.https.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/secure-payment-confirmation/authentication-accepted.https.html) *(github.com)*
- [Secure Payment Confirmation · Issue #570 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/570) *(github.com)*
- [wpt/secure-payment-confirmation/authentication-auth-another-way.https.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/secure-payment-confirmation/authentication-auth-another-way.https.html) *(github.com)*
- [wpt/secure-payment-confirmation/authentication-accepted-bbk-created.https.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/secure-payment-confirmation/authentication-accepted-bbk-created.https.html) *(github.com)*
- [wpt/secure-payment-confirmation/authentication-in-iframe.sub.https.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/secure-payment-confirmation/authentication-in-iframe.sub.https.html) *(github.com)*
- [Secure Payment Confirmation](https://www.w3.org/TR/2026/CRD-secure-payment-confirmation-20260528) *(w3.org)*
- [Payment Request API](https://www.w3.org/TR/payment-request) *(w3.org)*
- [Secure Payment Confirmation](https://www.w3.org/TR/secure-payment-confirmation) *(w3.org)*
- [Localization topics to address · Issue #93 · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/issues/93) *(github.com)*
- [Using Secure Payment Confirmation](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation) *(developer.mozilla.org)*
- [SecurePaymentConfirmationRequest](https://developer.mozilla.org/en-US/docs/Web/API/SecurePaymentConfirmationRequest) *(developer.mozilla.org)*
- [PaymentRequest: securePaymentConfirmationAvailability() static method](https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/securePaymentConfirmationAvailability_static) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 22 result(s) found across 7 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5126146013396992" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c/secure-payment-confirmation/issues/343" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"w3c.github.io/secure-payment-confirmation" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"SecurePaymentConfirmationRequest" "locale" ("NotSupportedError" OR "DOMException")` — *Finds code snippets, test suites (WPT), and API implementations handling the Secure Payment Confirmation locale parameter and its DOMException error handling.* (8 returned)
  - `"Secure Payment Confirmation" ("locale" OR "localization") ("web.dev" OR tutorial OR guide OR "PaymentRequest")` — *Discovers developer guides, web.dev articles, and tutorials on configuring localization and multi-language support in Secure Payment Confirmation.* (5 returned)
  - `"Secure Payment Confirmation" "locale" ("Intent to Ship" OR "Chrome Status" OR "Chromium" OR "blink-dev")` — *Searches for browser vendor announcements, Blink intent-to-ship threads, and rollout status for SPC locale validation.* (1 returned)
  - `site:github.com/w3c/secure-payment-confirmation ("locale" OR "language tags" OR "NotSupportedError")` — *Targets W3C Web Payments Working Group issue threads, spec changes, and developer feedback regarding locale negotiation in SPC.* (2 returned)
- **Google Search Grounding (gemini-3.7-flash):** 13 result(s) found — **13 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found — **15 verified relevant**
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
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5126146013396992)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5126146013396992)
- [Specification](https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale)
- [Chromium Tracking Bug](https://crbug.com/535278878)
