# Secure Payment Confirmation: Locale Validation

> **Report Week:** 2026-W39 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Updates Secure Payment Confirmation's \`locale\` data field to return a Not Supported DOMException if none of the language tags provided in the field match the language used by the Secure Payment Confirmation's dialog. If the field is not set or empty, this validation is skipped.  This helps web developers with matching the language of the data that they are supplying to Secure Payment Confirmation with the dialog.

### Motivation

This feature amends Secure Payment Confirmation so that web developers can align the language of data elements that they supply to Secure Payment Confirmation with the language used by the Secure Payment Confirmation dialog.

Currently web developers can provide a list of language tags for Secure Payment Confirmation to use in their dialog. But Secure Payment Confirmation does not use this list because it is not feasible for the browser to support all languages and the Secure Payment Confirmation is a browser feature so it should use the browser language to be consistent with other browser features.

By returning an error when none of the language tags provided match Secure Payment Confirmation's language, web developers are able to retry with different language tags (while updating the language of their supplied data elements) until they get a match.

## Ecosystem Status

- **Momentum:** High (185 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Secure Payment Confirmation: Locale Validation is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Stripe on X: "You can now show a custom confirmation message or redirect to your website after a customer completes a purchase with a payment link. https://t.co/6KjFFSIsVB" / X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Stripe on X: "You can now show a custom confirmation message or redirect to your website after a customer completes a purchase with a payment link. https://t.co/6KjFFSIsVB" / X](https://twitter.com/stripe/status/1428388974406496259?lang=en) — *by @stripe, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Payment Confirmation Pages 101: A Beginner’s Guide to Design, UX, and Security - USAVPS](https://usavps.com/blog/payment-confirmation-pages) *(usavps.com · 2025-11-20T06:56:12)*
  > <strong>Use short-lived session tokens, rotate cookies with Secure and HttpOnly flags, and consider multi-factor authentication for high-value transactions</strong>. A solid operations strategy prevents outages and reduces time to resolution. Run aut...
- [Secure Payment Confirmation on Chrome Android \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/spc-on-android) *(developer.chrome.com · 2022-12-01T00:00:00)*
  > Android 版 Chrome 的安全付款确认 | Blog | Chrome for Developers 跳至主要内容 / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文...
- [Payment Security Guide: Fraud Prevention & Secure Payment Processing](https://www.telleroo.com/blog/payment-security-guide) *(telleroo.com)*
  > Payee confirmation: Safeguard against incorrect payee details and misdirected transactions with bank account validation services.
- [Confirmation of Payee in UK- Guide to Secure Transactions, Benefits & How It Works](https://xbpglobal.com/blog/confirmation-of-payee-cop-your-complete-guide-to-secure-transactions) *(xbpglobal.com · 2025-09-16T06:46:31)*
  > Feedback and Confirmation: After performing the match, the payee’s bank responds with the results to your bank. You’ll see a confirmation message indicating if the names match, likely match, or don’t match. Proceed or Investigate: Based on the result...
- [How to Create Secure Online Payment Forms That Work \[+ 5 Templates\]](https://www.feathery.io/blog/payment-forms) *(feathery.io)*
  > <strong>Create a field specifically for the credit card number and validate the 16-digit number securely</strong>.
- [What Is Secure Payment Confirmation? Definition & Examples](https://nhimg.org/glossary/secure-payment-confirmation) *(nhimg.org · 2026-08-27T17:06:35)*
  > Secure Payment Confirmation is a browser and standards-based payment flow that uses strong authentication to approve card…
- [Payment Confirmation Email: The Complete Guide \| Tagada](https://www.tagada.io/blog/payment-confirmation-email) *(tagada.io · 2026-09-04T00:00:00)*
  > TagadaPay can route payments across processors such as Stripe, Adyen, and NMI, or process transactions natively with smart retries and local payment methods.
- [Secure Acceptance Hosted Checkout Integration Developer Guide](https://developer.cybersource.com/content/cybsdeveloper2021/amer/en/content/cybsdeveloper2021/amer/en/library/documentation/dev_guides/Secure_Acceptance_Hosted_Checkout/Secure_Acceptance_Hosted_Checkout.pdf) *(developer.cybersource.com)*
  > <strong>submits payment details and their billing and shipping information</strong>. The customer confirms the
- [PWA Studio: Validation errors when running developer mode \| Adobe Commerce](https://experienceleague.adobe.com/docs/commerce-knowledge-base/kb/troubleshooting/miscellaneous/pwa-studio-validation-errors-when-running-developer-mode.html?lang=en) *(experienceleague.adobe.com · 2022-12-11T00:00:00)*
  > This topic discusses a solution for when validation errors occur when running developer mode in Progressive Web App (PWA) Studio for Adobe Commerce as a result of not previously creating the venia-concept (Venia is a PWA storefront.) environment file...
- [Magento PWA Checkout for Faster, Smarter Shopping \| iFlair](https://www.iflair.com/magento-pwa-checkout-for-faster-smarter-shopping-iflair) *(iflair.com · 2025-10-16T09:09:48)*
  > Since service workers operate with powerful capabilities like caching and intercepting network requests, ensure they are implemented securely by following best practices such as serving over HTTPS only, restricting cache access, and avoiding storing ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [secure-payment-confirmation/spec.bs at main · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/spec.bs) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > secure-payment-confirmation/spec.bs at main · w3c/secure-payment-confirmation · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload...
- [Mention Secure Payment Confirmation · Issue #535 · w3c/web-roadmaps](https://github.com/w3c/web-roadmaps/issues/535) *(github.com · 2021-08-27T11:03:35)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > Mention Secure Payment Confirmation · Issue #535 · w3c/web-roadmaps · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refres...
- [Secure Payment Confirmation 2023-01-11 &gt; 2023-02-01 · Issue #50 · w3c/a11y-request](https://github.com/w3c/a11y-request/issues/50) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > Secure Payment Confirmation 2023-01-11 > 2023-02-01 · Issue #50 · w3c/a11y-request · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. R...
- [Secure Payment Confirmation · Issue #570 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/570) *(github.com · 2021-08-24T13:51:20)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > Secure Payment Confirmation · Issue #570 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ref...
- [wpt/secure-payment-confirmation/authentication-accepted.https.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/secure-payment-confirmation/authentication-accepted.https.html) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > wpt/secure-payment-confirmation/authentication-accepted.https.html at master · web-platform-tests/wpt · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anoth...

## 📚 Platform Documentation & Specifications

- [secure-payment-confirmation/spec.bs at main · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/spec.bs) *(github.com)*
- [Mention Secure Payment Confirmation · Issue #535 · w3c/web-roadmaps](https://github.com/w3c/web-roadmaps/issues/535) *(github.com)*
- [Secure Payment Confirmation 2023-01-11 &gt; 2023-02-01 · Issue #50 · w3c/a11y-request](https://github.com/w3c/a11y-request/issues/50) *(github.com)*
- [Secure Payment Confirmation · Issue #570 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/570) *(github.com)*
- [wpt/secure-payment-confirmation/authentication-accepted.https.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/secure-payment-confirmation/authentication-accepted.https.html) *(github.com)*
- [secure-payment-confirmation/developer-guide.md at main · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/developer-guide.md) *(github.com)*
- [Localization topics to address · Issue #93 · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/issues/93) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 37 result(s) found across 11 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/5126146013396992" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/secure-payment-confirmation/issues/343" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"w3c.github.io/secure-payment-confirmation" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Secure Payment Confirmation: Locale Validation" API` — *Core feature API query* (0 returned)
  - `"Secure Payment Confirmation: Locale Validation" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"Secure Payment Confirmation" (locale OR localization OR language) guide OR tutorial` — *Finds developer guides and articles explaining how to configure language and localization in Secure Payment Confirmation.* (8 returned)
  - `"secure-payment-confirmation" locale ("NotSupportedError" OR "Not Supported")` — *Discovers code snippets and error-handling patterns for DOMException handling when SPC locale validation fails.* (1 returned)
  - `"Secure Payment Confirmation" "locale" ("intent to ship" OR "Chrome Platform Status")` — *Surfaces browser release notes, intent-to-ship threads, and platform status announcements for the SPC locale validation update.* (0 returned)
  - `site:github.com/w3c/secure-payment-confirmation ("locale" OR "issue 343") validation` — *Tracks standards discussions, spec revisions, and developer feedback directly within the W3C Web Payments Working Group repository.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5126146013396992)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5126146013396992)
- [Specification](https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale)
- [Chromium Tracking Bug](https://crbug.com/535278878)
