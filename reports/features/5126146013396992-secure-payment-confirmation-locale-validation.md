# Secure Payment Confirmation: Locale Validation

> **Report Week:** 2026-W40 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Updates Secure Payment Confirmation's \`locale\` data field to return a Not Supported DOMException if none of the language tags provided in the field match the language used by the Secure Payment Confirmation's dialog. If the field is not set or empty, this validation is skipped.  This helps web developers with matching the language of the data that they are supplying to Secure Payment Confirmation with the dialog.

### Motivation

This feature amends Secure Payment Confirmation so that web developers can align the language of data elements that they supply to Secure Payment Confirmation with the language used by the Secure Payment Confirmation dialog.

Currently web developers can provide a list of language tags for Secure Payment Confirmation to use in their dialog. But Secure Payment Confirmation does not use this list because it is not feasible for the browser to support all languages and the Secure Payment Confirmation is a browser feature so it should use the browser language to be consistent with other browser features.

By returning an error when none of the language tags provided match Secure Payment Confirmation's language, web developers are able to retry with different language tags (while updating the language of their supplied data elements) until they get a match.

## Ecosystem Status

- **Momentum:** High (235 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Secure Payment Confirmation: Locale Validation is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHdoq97ejlAri5L92dgl9yF6eyvh20m8Lcz-f5puZJip8tcQiYBcUESzOrvAZE7-DdaAto6MvcytFoJvcFYgjZKSq02TjavRnFpDUbHP6F2tQmZD4zG_5XEw8daeLnX8a6WPXyXBIO4Jrw2AZplJTMwHZ67UsC5cFl-ADI6MO44SRE1jdaIdJI=) *(vertexaisearch.cloud.google.com)*
  > SecurePaymentConfirmationRequest - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs SecurePaymentConfirmationRequest Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) SecurePaymen...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQErf0yD3aTIoZTxgb_l8mlz3QEHtv5MaYbkaI3jbhU4YUmEtmYSofks8qJcyxst59GciMFDX35YnUNoexBx83qTNRsgreWqN7rl4GvKjMw92QZDKfXjcXuM0Xi7GlwGPDRhQmXrpzo=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [nhimg.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGagXkSxjczMpg2X1thWO0HslHmF23Adiy4xYCAnlcti3V1HhN5mchExmV0trPNjTh-mn4djjjdH5cKOH-BslKXozWH2X7Tck0e-9I7hqjkn51eHjwgAs7UqCw5sT37JD1PqusWZUi4LBYEgEZR) *(vertexaisearch.cloud.google.com)*
  > What Is Secure Payment Confirmation? Definition & Examples Join our Newsletter &mdash; 33% off our NHI Course Search Search for: Search Button --> Home › Glossary › Cyber Security › Secure Payment Confirmation Cyber Security Secure Payment Confirmati...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEmYzd0qsSnenhKviXGR4ozZKyeaqPNIh_9Gy4ovOd-0xbrLiBjcASvqtEc2P9DVHIe4_p8rH7HIbuqZU2R_bwfSU4IMCR49McOqoxhTmgXAYCnMt-sFyurg_Ukwxwvx8vCI-jalHoc) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHu4t3BWRsn9eVoo8cvZdt3ll-LdjFReH00rElo6qIQdk48EbujBF0J1m_NIm4j3PFFmBgCVI3xLZoI2ooQuAJO5h3A145MhUBmyvkjGKOi0o4FUY54yJSqOX3hTyh5xsOXugKS9aNF3vlVaD2qwox66OjUmWxD4UD0wMJGW5sBwbNQGEfpTJ5yFIXRsygKHbJhgu1b0PMquXz0meE=) *(vertexaisearch.cloud.google.com)*
  > Using Secure Payment Confirmation - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Payment Request API Using Secure Payment Confirmation Theme OS default Light Dark English (US) Remember language Learn more Deutsch Eng...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGGP15ERgEj-6PMzgcuIlG1Jxyx3WoU6KM2qtCKI1hpvnFiQVFksuLCbxbHWCurtQj1mBqVqp9hb17Ns6n-QENOdbOpxLp0jGBK7iiV9PR4QxYy9aUk6bWnNz8eD1L79XiS0uqI) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 | Release notes | Chrome for Developers Chuyển ngay đến nội dung chính / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQED2UKt7E4fxga_ektVzNU3DXJ5rw_SY5U3hWyS6j7dFi7XvB3mH6SUFCZ5UFPZdJ3iyfsTizZ58VmKgsBu4PervHEmnxsv_6vtPjKSI9tBvZSQjDiaa4oKOSbr7IUWA6_PKq5mLJJ3MIfjNUwiRxc7nwDLSvQ7mI9o_OinVVk8m4IPlHqpdBQ-VA==) *(vertexaisearch.cloud.google.com)*
  > Authenticate with Secure Payment Confirmation | Payments | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربي...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGZMLyaz6zGfn1rDweUUNnlwYHxWg0CLVEPZ5hCyyYOGfWTJyo1XVx04hOaiJ5aQQknAof_EZlwl64cxcWI6WH5GYkt4TeSsVsttWJAWLiddJGOyV2s1_0irvJ6bRldlKEyh8M=) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 | Release notes | Chrome for Developers メイン コンテンツにスキップ / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGYU1zGagVxBp5OWV8NToiab9ToyT4L8mdLMkKmyXFbAvjUKB4y4dkePlHR12pH0x7gpE6w0nz-01WJyBIyn6hvIWqCKcB2b-LjoiabGWHpANhCtBG3VUGj5aW5-YQ_kqjaJwAAbyc=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation: Locale Validation** updates the `locale` data field in the `SecurePaymentConfirmationRequest` dictionary (used with the Payment Request API and WebAuthn).   * **The Problem:** The Secure Paym
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFhz1Mnpu-cY3uDUILpHdBAlHUDbjqH4FJ9DHLuJzE9uNwqHoGU1LmsZRESaEl55ifXTJJsg5NUmvdosG9pTOJHIxolSydyfDCtRr_XO8jmaNvEKKOGYFTn7rKm_7aYvWLuVaaj9H6vr-AcugQmwg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation: Locale Validation** updates the `locale` data field in the `SecurePaymentConfirmationRequest` dictionary (used with the Payment Request API and WebAuthn).   * **The Problem:** The Secure Paym
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH_xC53kkcUH0d6DW4B3e5Vubf9h47XbW3AdhKtyiASRk4XT2A-vlgPSjFbLtD2BmKuVVMFMmVgW0hYgMVhooqwAflDVX57_HHjpMoU91OxUDLAOmrUN-a6-8IwiAcBBEQSmw07Pec3zw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation: Locale Validation** updates the `locale` data field in the `SecurePaymentConfirmationRequest` dictionary (used with the Payment Request API and WebAuthn).   * **The Problem:** The Secure Paym
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHxhk9iJRW2ngSBuMIWIr0f4RqrSJztzgZKNCwN6Qiq_XFmAe2pQJUInXzVhT17pH3gDrTucRasARrGKlQ6FapzQS1bemcuqa8vZqWcHxaRiyXowECaLJx8CM_9ni9BXGGRVkB55jKQo0F88GR7cUA-r9c2_5vFOQbIbg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation: Locale Validation** updates the `locale` data field in the `SecurePaymentConfirmationRequest` dictionary (used with the Payment Request API and WebAuthn).   * **The Problem:** The Secure Paym
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG5DVfxu3YqtVb_3hnNV7kaukNJ9rWq1k9fvmuuysvT0mQRXzANakYGE4y-iOTnW8hZC6Ssfom8O9P5dbdXdrecIVtZeJegC6XcCXVLtHKpE0F3-fXpazuE49PiTYs6b6-PGvbdZtSu0ItpUQ0w6S2AZfrF4biGNnVGVL5l-3TsM0vEZjZOLck=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation: Locale Validation** updates the `locale` data field in the `SecurePaymentConfirmationRequest` dictionary (used with the Payment Request API and WebAuthn).   * **The Problem:** The Secure Paym
- [gigazine.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF7iyv1gLnrzix4emCTM06uBvI0tfA58cwPgMPVu-1HTQsDR6eCiRH56q84pEpxXfvDXxwmT29rFndK2cJnWiHWd5nmbWsL_R9L720vOrTIZP071DX9gQnJ43gkn8stS1qZUghOG0l9XVIUA79Xi2mbYdY=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation: Locale Validation** updates the `locale` data field in the `SecurePaymentConfirmationRequest` dictionary (used with the Payment Request API and WebAuthn).   * **The Problem:** The Secure Paym
- [releasebot.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGX1GDBtouCyOsAWQJO4MQ2l3ZwL-a8B5c9rjujH0WHrL7APbEOb5i7ZW7oYMTs0zXQ1qvpeNkJOWCkNNCZttdTDcUNVEi6v75KxQQU8VMNl40i6-G5666AN8QK-CwH1_2AeKOPD6p0) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation: Locale Validation** updates the `locale` data field in the `SecurePaymentConfirmationRequest` dictionary (used with the Payment Request API and WebAuthn).   * **The Problem:** The Secure Paym
- [fidoalliance.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHKRWS4PbLJ05Xfe5l6Oz9UzbaOBcbn1l0993gjV35hb38kUtPOc8oo9uJqhwwTvzRtYM78wkCWKfbsLXhKfOpfG_Mc9kDqVYB7yt0nUSAUVe6Ff5-uu_GFOtZdzlyG1FBr4jPDc55RVKYLMNtTQ2AwDFxwOvO2nA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation: Locale Validation** updates the `locale` data field in the `SecurePaymentConfirmationRequest` dictionary (used with the Payment Request API and WebAuthn).   * **The Problem:** The Secure Paym
- [\[blink-dev\] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)*
  > Estimated milestones Shipping on ... This intent message was generated by Chrome Platform Status. -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-dev&quot; group</strong>....
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154?hl=en) *(developer.chrome.com · 2026-09-23T05:58:01)*
  > <strong>Updates the Secure Payment Confirmation locale data field to return a NotSupportedError DOMException if none of the language tags provided in the field match the language used by the Secure Payment Confirmation dialog</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [secure-payment-confirmation/spec.bs at main · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/spec.bs) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > TR: https://www.w3.org/TR/secure-payment-confirmation/ ED: https://<strong>w3c.github.io/secure-payment-confirmation</strong>/ Prepare for TR: true · Inline Github Issues: true · Group: web-payments · Status: w3c/ED · Deadline: 2023-08-01 ·...
- [Mention Secure Payment Confirmation · Issue #535 · w3c/web-roadmaps](https://github.com/w3c/web-roadmaps/issues/535) *(github.com · 2021-08-27T11:03:35)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > Spec: https://<strong>w3c.github.io/secure-payment-confirmation</strong>/ Explainer: https://github.com/w3c/secure-payment-confirmation/blob/main/explainer.md Chrome Platform Status: https://www.chromestatus.com/feature/5702310124584960
- [Secure Payment Confirmation 2023-01-11 &gt; 2023-02-01 · Issue #50 · w3c/a11y-request](https://github.com/w3c/a11y-request/issues/50) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > name of spec to be reviewed: Secure Payment Confirmation (SPC) URL of spec: https://<strong>w3c.github.io/secure-payment-confirmation</strong>/ What and when is your next expected transition? Candidate Recommendati...
- [Secure Payment Confirmation · Issue #570 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/570) *(github.com · 2021-08-24T13:51:20)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > Specification or proposal URL: https://<strong>w3c.github.io/secure-payment-confirmation</strong>/ (see also explainer)

## 📚 Platform Documentation & Specifications

- [secure-payment-confirmation/spec.bs at main · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/spec.bs) *(github.com)*
- [Mention Secure Payment Confirmation · Issue #535 · w3c/web-roadmaps](https://github.com/w3c/web-roadmaps/issues/535) *(github.com)*
- [Secure Payment Confirmation 2023-01-11 &gt; 2023-02-01 · Issue #50 · w3c/a11y-request](https://github.com/w3c/a11y-request/issues/50) *(github.com)*
- [Secure Payment Confirmation · Issue #570 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/570) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 36 result(s) found across 12 planned queries — **6 verified relevant**
  - `"chromestatus.com/feature/5126146013396992" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/secure-payment-confirmation/issues/343" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"w3c.github.io/secure-payment-confirmation" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Secure Payment Confirmation: Locale Validation" API` — *Core feature API query* (0 returned)
  - `"Secure Payment Confirmation: Locale Validation" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"Secure Payment Confirmation" (locale OR "locale validation") (guide OR tutorial OR "web.dev")` — *Find practical merchant implementation guides and blog articles detailing how to handle SPC locale validation.* (0 returned)
  - `"SecurePaymentConfirmationRequest" "locale" ("NotSupportedError" OR "Not Supported")` — *Search for code snippets, WebIDL definitions, and error-handling routines dealing with the locale validation DOMException.* (8 returned)
  - `"Secure Payment Confirmation" "locale" ("Intent to Ship" OR "ChromeStatus" OR "Blink-dev")` — *Locate browser engine intent-to-ship threads, implementation statuses, and cross-browser alignment announcements.* (2 returned)
  - `site:github.com/w3c/secure-payment-confirmation ("issue 343" OR "locale validation" OR "dom-securepaymentconfirmationrequest-locale")` — *Discover standards committee discussions, issue tracking, and consensus debates around SPC locale field behavior.* (2 returned)
  - `"secure-payment-confirmation" "locale" ("language tags" OR "retry") PaymentRequest` — *Uncover developer tutorials and patterns demonstrating how to retry PaymentRequest with fallback language tags.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **16 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 20 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5126146013396992)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5126146013396992)
- [Specification](https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale)
- [Chromium Tracking Bug](https://crbug.com/535278878)
