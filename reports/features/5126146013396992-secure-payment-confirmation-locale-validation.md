# Secure Payment Confirmation: Locale Validation

> **Report Week:** 2026-W37 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Updates Secure Payment Confirmation's `locale` data field to return a Not Supported DOMException if none of the language tags provided in the field match the language used by the Secure Payment Confirmation's dialog. If the field is not set or empty, this validation is skipped.

This helps web developers with matching the language of the data that they are supplying to Secure Payment Confirmation with the dialog.

### Motivation

This feature amends Secure Payment Confirmation so that web developers can align the language of data elements that they supply to Secure Payment Confirmation with the language used by the Secure Payment Confirmation dialog.

Currently web developers can provide a list of language tags for Secure Payment Confirmation to use in their dialog. But Secure Payment Confirmation does not use this list because it is not feasible for the browser to support all languages and the Secure Payment Confirmation is a browser feature so it should use the browser language to be consistent with other browser features.

By returning an error when none of the language tags provided match Secure Payment Confirmation's language, web developers are able to retry with different language tags (while updating the language of their supplied data elements) until they get a match.

## Ecosystem Status

- **Momentum:** High (240 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Secure Payment Confirmation (SPC) Locale Validation improves internationalization by throwing a NotSupportedError DOMException when caller-provided language tags do not match the browser's SPC dialog locale. Driven primarily by Chromium via W3C Web Payments WG, it allows relying parties to renegotiate or align localized merchant text before showing payment prompts. Cross-engine consensus remains limited because Gecko and WebKit have not implemented SPC and maintain open, uncommitted standards positions.

### Recommendations
- Actionable Advice: Web payment teams using SPC should wrap `new PaymentRequest()` invocations in a `try...catch` block to handle `NotSupportedError` and retry with alternative or omitted `locale` arrays. Ensure fallback payment flows remain available for non-Chromium browsers where SPC is not supported.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @gsnedders: "Am I right in understanding that the primary goal here is to replace 3-D Secure with something that's browser mediated?..."
- Standards Activity (Mozilla): Latest discussion from @stephenmcgruer: "Hi folks. I know that Mozilla's position on SPC is outstanding, however we wanted to let you know of a notable additional feature to SPC that we are c..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Secure Payment Confirmation (SPC)](https://github.com/WebKit/standards-positions/issues/30) [open]
- **Mozilla:** [Secure Payment Confirmation](https://github.com/mozilla/standards-positions/issues/570) [open]

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Secure Payment Confirmation: Locale Validation Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Secure Payment Confirmation: Locale Validation Chromestatus Wed, 12 Aug 2026 12:39:17 -0700 Contact...
- [Payment Confirmation Pages 101: A Beginner’s Guide to Design, UX, and Security - USAVPS](https://usavps.com/blog/payment-confirmation-pages) *(usavps.com · 2025-11-20T06:56:12)*
  > <strong>Use short-lived session tokens, rotate cookies with Secure and HttpOnly flags, and consider multi-factor authentication for high-value transactions</strong>. A solid operations strategy prevents outages and reduces time to resolution. Run aut...
- [Secure Payment Confirmation on Chrome Android | Blog | Chrome for Developers](https://developer.chrome.com/blog/spc-on-android) *(developer.chrome.com · 2022-12-01T00:00:00)*
  > Note: The FIDO standard mandates the device not to transmit any biometric data outside of itself, so that the user verification only happens locally · As long as the relying party is the same (for example, the same issuing bank), the user should be a...
- [Payment Security Guide: Fraud Prevention & Secure Payment Processing](https://www.telleroo.com/blog/payment-security-guide) *(telleroo.com)*
  > Payee confirmation: Safeguard against incorrect payee details and misdirected transactions with bank account validation services.
- [Confirmation of Payee in UK- Guide to Secure Transactions, Benefits & How It Works](https://xbpglobal.com/blog/confirmation-of-payee-cop-your-complete-guide-to-secure-transactions) *(xbpglobal.com · 2025-09-16T06:46:31)*
  > Feedback and Confirmation: After performing the match, the payee’s bank responds with the results to your bank. You’ll see a confirmation message indicating if the names match, likely match, or don’t match. Proceed or Investigate: Based on the result...
- [Payment Confirmation Email: The Complete Guide | Tagada](https://www.tagada.io/blog/payment-confirmation-email) *(tagada.io · 2026-09-04T00:00:00)*
  > TagadaPay can route payments across processors such as Stripe, Adyen, and NMI, or process transactions natively with smart retries and local payment methods.
- [Factoring in the safety switch with Confirmation of Payee | ACI Worldwide](https://www.aciworldwide.com/blog/factoring-in-the-safety-switch-with-confirmation-of-payee) *(aciworldwide.com · 2024-10-01T14:55:46)*
  > CoP-enabled financial institutions validate the account information around the transaction to ensure its genuine nature. If the financial institution’s account opening processes are sound, the fraudster will not have been able to open an account in t...
- [Tutorial | Google Pay API | Google for Developers](https://developers.google.com/pay/api/web/guides/tutorial) *(developers.google.com)*
  > <strong>Make sure that you also apply your existing risk checks and controls for payment transactions to Google Pay transactions</strong>. Google Pay validation and fraud checks aren&#x27;t intended to replace your risk management processes.
- [Secure Acceptance Hosted Checkout Integration Developer Guide](https://developer.cybersource.com/content/cybsdeveloper2021/amer/en/content/cybsdeveloper2021/amer/en/library/documentation/dev_guides/Secure_Acceptance_Hosted_Checkout/Secure_Acceptance_Hosted_Checkout.pdf) *(developer.cybersource.com)*
  > <strong>submits payment details and their billing and shipping information</strong>. The customer confirms the
- [PWA Studio: Validation errors when running developer mode | Adobe Commerce](https://experienceleague.adobe.com/docs/commerce-knowledge-base/kb/troubleshooting/miscellaneous/pwa-studio-validation-errors-when-running-developer-mode.html?lang=en) *(experienceleague.adobe.com · 2022-12-11T00:00:00)*
  > This topic discusses a solution for when validation errors occur when running developer mode in Progressive Web App (PWA) Studio for Adobe Commerce as a result of not previously creating the venia-concept (Venia is a PWA storefront.) environment file...
- [Magento PWA Checkout for Faster, Smarter Shopping | iFlair](https://www.iflair.com/magento-pwa-checkout-for-faster-smarter-shopping-iflair) *(iflair.com · 2025-10-16T09:09:48)*
  > Since service workers operate with powerful capabilities like caching and intercepting network requests, ensure they are implemented securely by following best practices such as serving over HTTPS only, restricting cache access, and avoiding storing ...
- [Magento PWA Checkout: Key Components & Technical Implementation](https://magenest.com/en/magento-pwa-checkout) *(magenest.com · 2023-09-05T03:12:48)*
  > <strong>Magento PWA checkout should leverage modern web capabilities to offer autofill options for common form fields such as name, email, phone number, and address</strong>. Address validation features can help customers validate and correct their s...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/secure-payment-confirmation/issues/343`)*
  > [blink-dev] Intent to Prototype: Secure Payment Confirmation: Locale Validation Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Secure Payment Confirmation: Locale Validation Chromestatus Wed, 12 Aug 2026 12:39:17 -07...
- [secure-payment-confirmation/spec.bs at main · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/spec.bs) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > secure-payment-confirmation/spec.bs at main · w3c/secure-payment-confirmation · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload...
- [Mention Secure Payment Confirmation · Issue #535 · w3c/web-roadmaps](https://github.com/w3c/web-roadmaps/issues/535) *(github.com · 2021-08-27T11:03:35)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > Mention Secure Payment Confirmation · Issue #535 · w3c/web-roadmaps · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refres...
- [Secure Payment Confirmation 2023-01-11 > 2023-02-01 · Issue #50 · w3c/a11y-request](https://github.com/w3c/a11y-request/issues/50) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > Secure Payment Confirmation 2023-01-11 > 2023-02-01 · Issue #50 · w3c/a11y-request · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. R...
- [wpt/secure-payment-confirmation/authentication-accepted.https.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/secure-payment-confirmation/authentication-accepted.https.html) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > wpt/secure-payment-confirmation/authentication-accepted.https.html at master · web-platform-tests/wpt · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anoth...
- [Secure Payment Confirmation · Issue #570 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/570) *(github.com · 2021-08-24T13:51:20)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > Secure Payment Confirmation · Issue #570 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ref...
- [wpt/secure-payment-confirmation/authentication-auth-another-way.https.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/secure-payment-confirmation/authentication-auth-another-way.https.html) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > wpt/secure-payment-confirmation/authentication-auth-another-way.https.html at master · web-platform-tests/wpt · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in wi...
- [wpt/secure-payment-confirmation/authentication-accepted-bbk-created.https.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/secure-payment-confirmation/authentication-accepted-bbk-created.https.html) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > wpt/secure-payment-confirmation/authentication-accepted-bbk-created.https.html at master · web-platform-tests/wpt · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed i...
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
- [secure-payment-confirmation/developer-guide.md at main · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/developer-guide.md) *(github.com)*
- [Using Secure Payment Confirmation](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation) *(developer.mozilla.org)*
- [SecurePaymentConfirmationRequest](https://developer.mozilla.org/en-US/docs/Web/API/SecurePaymentConfirmationRequest) *(developer.mozilla.org)*
- [PaymentRequest: securePaymentConfirmationAvailability() static method](https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/securePaymentConfirmationAvailability_static) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 29 result(s) found across 7 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/5126146013396992" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/secure-payment-confirmation/issues/343" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"w3c.github.io/secure-payment-confirmation" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" API` — *Core feature API query* (0 returned)
  - `"Secure Payment Confirmation: Locale Validation" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (4 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5126146013396992)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5126146013396992)
- [Specification](https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale)
- [Chromium Tracking Bug](https://crbug.com/535278878)
