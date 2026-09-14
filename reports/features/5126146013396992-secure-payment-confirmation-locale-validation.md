# Secure Payment Confirmation: Locale Validation

> **Report Week:** 2026-W38 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Updates Secure Payment Confirmation's \`locale\` data field to return a Not Supported DOMException if none of the language tags provided in the field match the language used by the Secure Payment Confirmation's dialog. If the field is not set or empty, this validation is skipped.  This helps web developers with matching the language of the data that they are supplying to Secure Payment Confirmation with the dialog.

### Motivation

This feature amends Secure Payment Confirmation so that web developers can align the language of data elements that they supply to Secure Payment Confirmation with the language used by the Secure Payment Confirmation dialog.

Currently web developers can provide a list of language tags for Secure Payment Confirmation to use in their dialog. But Secure Payment Confirmation does not use this list because it is not feasible for the browser to support all languages and the Secure Payment Confirmation is a browser feature so it should use the browser language to be consistent with other browser features.

By returning an error when none of the language tags provided match Secure Payment Confirmation's language, web developers are able to retry with different language tags (while updating the language of their supplied data elements) until they get a match.

## Ecosystem Status

- **Momentum:** High (350 points)
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

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEj60o-UhOIvRzZvDQW8eJMcCesY39NdpzjSCH0F-xP_1sFwSZGp4ewrT1m8ZfjR1c4Yx5jDl8FLvZOVguSs4G9NZXzLUuv9aVpZyj3cMdArW0ThwrvCqOubX1ze2mdfLexw4ySLQFizg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Secure Payment Confirmation: Locale Validation"  **Secure Payment Confirmation (SPC)** allows Relying Parties (RPs, such as card issuers or payment providers) and merchants to streamline strong customer authentication via WebAuthn dur
- [caniuse.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQETv63enB1Sob9EdT4jXz_Thq3pMutvbF450hfipmoOA7u1YejTyLOculDYY3T_TT6OeHgr-pkO4ieF4KMremAlkhQwdiNVsE8kqaurBBNyaJQ3GiOZg6vMH43FM4jERvPtrMoNUvX9zg==) *(vertexaisearch.cloud.google.com)*
  > Secure payment confirmation | Can I use... Support tables for HTML5, CSS3, etc Can I use Search ? Settings Secure payment confirmation Global usage 71.02% + 0% = 71.02% Edge ❌ 12 - 138 : Not supported ✅ 139 - 151 : Supported ✅ 152 : Supported Firefox...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH0nC0bg2Dbqp5qw1eZEjCu-N11KHNxLe7O-qkdHibMzp1W9hVSV9qi1xh5pxlzlvbni1nJil9D6Oz5a_8ueysNSE6gHDCJNELYWnZSXSTJ7pXNi1c57mu0X4y_ZKosc2WlINZqFXwjobVmKEjS0v1Wq8mQCiX5wNBM2cfVuVkddW-r) *(vertexaisearch.cloud.google.com)*
  > Confirmation de paiement sécurisé | Payments | Chrome for Developers Passer au contenu principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فا...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGAnRYeYJuW_LbGFCjjlSogi5BK3bBkYPCs5CmZDGKTsA_tUunRHbjIOwSkX2Vr_N_zjpv8m--zUcdx2B0evKme0I1TKvEVvhqbkWVmyw3WfbHE1n8ScnWw3As0NYEXk_WnjstHEeQhZdIqa0KeaJBfGMml2cyYfrdgVq-gEs3SYxNRkglwQUc=) *(vertexaisearch.cloud.google.com)*
  > SecurePaymentConfirmationRequest - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs SecurePaymentConfirmationRequest Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) SecurePaymen...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFmgdgGSk6oZtfeJsWg71m38RMVgachM1nbZzBhEvmPhbydIi2W7P5eam_sewPfDmpYGavRREpVMxsIDpOPkXvDC1mZnWqMlrvxaK8Mg3-u9rtd-KpNo1MqbjP-hQIeph_8u5GxSqczqA1KWfB2FnNCHyp7) *(vertexaisearch.cloud.google.com)*
  > [spec] SPC Locale Field to Return Error on Language Mismatch · Issue #343 · w3c/secure-payment-confirmation · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [googlesource.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGCKSlbiiOaCA7w3rvDx6L7HLuOGFE9LslGFRk7wBCCfKalAQ8l1swKSq-wAwEgrL-EGTg86Fret0SchhmzL4j1EVJLmHuo_G5Si9Wb-0G14xvAilemyYCKUTMF4SL0wmQnm0i5hFnI_R-jM4UaOryrelMaYZT9b4WGYQ7fUFKOTN0b9CuA5HVvB7a1Cwl77lN3JgggCEDgw1b6i7fi6QQz4kON-5f0) *(vertexaisearch.cloud.google.com)*
  > chrome/browser/flag_descriptions.h - experimental/chromium/src - Git at Google Sign in &#9681; Theme chromium / experimental / chromium / src / refs/heads/main / . / chrome / browser / flag_descriptions.h blob: 62bb0d71824a6027a3e6bd49b42427b599a9695...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHmpMJ-BSu2JjvFv9WtWRvFxFtMdQ6BvHUugmyO6-vvzoBViQQnj_ONzmichld-mu9yzNB_CODS-u2rP2ZKR5DBlKWhTmwcA8ZfOzLpiMDO8JbAf8il5v_M8sy_e_M9chEavPsYbyMw) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – ...
- [ravelin.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG4whZsOzBvyW901v9x2KTBY6F2lO2tLIlm-W3FJO6KoTJvIpH_we_kO64hfKh1cRnHWDPVqbbI24V7eIYhHfLAUFpoao-Fxpub4sLHZnosUAntEeOWvwG9y2yGhxXBQiWD5mtt_sukqri5WMgcj_14Jc-T86bJm7dR3ZK4bRQ0V8Nv4tsIjg==) *(vertexaisearch.cloud.google.com)*
  > 3DS Requestor Initiated SPC - 3D Secure Integration - Ravelin Documentation PSPs > Guides > 3D Secure > 3DS Requestor Initiated SPC 3D Secure Integration 3DS Requestor Initiated SPC On this page: In the 3DS Requestor initiated SPC flow, the Client&rs...
- [januschka.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEtx5m7M4eMd5VI9Ye80iXF4Pc-fL9cn02nUs9LS2I-DNBgtZlbRaZXhQO8KD5liQbR3STyz3C19nqDIIBJ9n2GFaYu4xaqXt5iucIkhMIUgNL_2lUzga-lnpzVtzWA-h3zjWXwscIJENC7s0CwlxZ8hppx) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Secure Payment Confirmation: Locale Validation"  **Secure Payment Confirmation (SPC)** allows Relying Parties (RPs, such as card issuers or payment providers) and merchants to streamline strong customer authentication via WebAuthn dur
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFUUBnSDizJ-1UfClE58Nz0ASBprTsQjh9oCPgg6LCrV_KHzaq0cVBJTFjvuRZVsQV5On_XcDjdt_zYkZvU6DUuw_XuUl2LjZmTLyGnpt7_LKl5MSGGZ1uQD7_Qsbr93uAk5mwWKskx) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Secure Payment Confirmation: Locale Validation"  **Secure Payment Confirmation (SPC)** allows Relying Parties (RPs, such as card issuers or payment providers) and merchants to streamline strong customer authentication via WebAuthn dur
- [mozaic.fm](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFxGwgpwo0NRFKBvwyCbbnnuHBX1MXDcOI7zOGBcNN0uDgWJHwWnioEetZ7Cn522y-ZWY8ca3NS3a3b6rjwUnMiPI9-DMoydoRx08A3l_iAU_5NeLt7GZHgJjQhrXDxHiNWxRkfxlzTgKGsBza1WMSOFA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Secure Payment Confirmation: Locale Validation"  **Secure Payment Confirmation (SPC)** allows Relying Parties (RPs, such as card issuers or payment providers) and merchants to streamline strong customer authentication via WebAuthn dur
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGPK5Em9epVx-kfhou34VIT5AbofQwB-oFxcAmDcZ2Fy8YEyNDXtGYjE-Cm2ig7zZx-oSxmpdydquqbXAf5KAl3i3JCc_tmLT-WnxzuksRsn1H7wUE7yhIFZFbRj1D277IO2Q==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Secure Payment Confirmation: Locale Validation"  **Secure Payment Confirmation (SPC)** allows Relying Parties (RPs, such as card issuers or payment providers) and merchants to streamline strong customer authentication via WebAuthn dur
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGWLJWAH9iwt_V4lR04skmXkR-FprgE3SX3kNeU22Az3R9mKWtxGn-D9bSVJGL6dNWUh1cRx62tefgFBMY2Bg1YO8rX7Ti46rQR6y9kmfESDoFzn25lKkB3R5MNcAtl3ig_D-5tOGa_ZsXB1_8xYCgzErutOyOHs9Kx9w==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Secure Payment Confirmation: Locale Validation"  **Secure Payment Confirmation (SPC)** allows Relying Parties (RPs, such as card issuers or payment providers) and merchants to streamline strong customer authentication via WebAuthn dur
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGxg-Fb3t9BcwyrqZZ7Qv7FN15sQyljEi6hEXA7pj3fIhAKXuTf3_mdoAEjh4_LBOUEYCZsBWPLOhxQQaR1Bu6U-exKJINH5tMsoOmIzld1CiZfsN-F9ueO885eugGPaogxNqRy5dS2wIb7AFFE7i8Bv8JKRSd30EX8bmijDBPUa7nirTd1rpzJq7OMRGexx7AociOswjN8ug==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Secure Payment Confirmation: Locale Validation"  **Secure Payment Confirmation (SPC)** allows Relying Parties (RPs, such as card issuers or payment providers) and merchants to streamline strong customer authentication via WebAuthn dur
- [\[blink-dev\] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)*
  > Availability expectation The locale validation for Secure Payment Confirmation will only be available in Chromium browsers for the foreseeable future. Estimated milestones Shipping on desktop 154 Shipping on Android 154 Link to entry on the Chrome Pl...
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Updates the Secure Payment Confirmation locale data field to return a NotSupportedError DOMException <strong>if none of the language tags provided in the field match the language used by the Secure Payment Confirmation dialog</strong>.
- [How to Use User’s Preferred Language on Stripe Checkout Page](https://wpsimplepay.com/how-to-use-users-preferred-language-on-stripe-checkout-page) *(wpsimplepay.com · 2022-10-11T13:02:54)*
  > Stripe lets you choose from over 30 languages. You can even let Stripe detect the locale of the customer’s browser and display a translated version of your checkout page automatically. Stripe also uses the locale to format numbers and currencies. For...
- [Hosted Checkout - Integration Guides](https://cybersource.portaldom.do/pages/cybersource/secure-acceptance/sections/hosted-checkout.html) *(cybersource.portaldom.do)*
  > <strong>It consists of securely managed payment forms or as a single‑page payment form for capturing payment card data, processing transactions</strong>, enabling you to simplify your Payment Card Industry Data Security Standard (PCI DSS) compliance ...
- [Locale Codes](https://developer.paypal.com/api/nvp-soap/locale-codes) *(developer.paypal.com)*
  > <strong>You can use any PayPal-supported language and locale to localize PayPal checkout pages</strong>. Pass a locale code to PayPal to customize the locale of the buyer&#x27;s checkout experience. Merchants who use a PayPal payment button (PayPal P...
- [Intent to Ship: Secure Payment Confirmation](https://groups.google.com/a/chromium.org/g/blink-dev/c/U5K69fbA6SU) *(groups.google.com)*
  > Yep! MacOS + Windows only initially; see the &#x27;Supported on all platforms?&#x27; section for justification.
- [Intent to Ship: Secure Payment Confirmation: UX Refresh](https://groups.google.com/a/chromium.org/g/blink-dev/c/ni0Kvtmd20s) *(groups.google.com)*
  > The main issue is that WebAuthn virtual authenticators are not supported on Chrome Android (as far as I know, cc @Nina Satragno ), whilst this feature is shipping first for SPC in Chrome Android (with Desktop to follow in a few milestones). So they&#...
- [Intent to Prototype + Ship: Secure Payment Confirmation API V3](https://groups.google.com/a/chromium.org/g/blink-dev/c/sxZ4iCrdcb0) *(groups.google.com)*
  > Intent to Ship v2: https://groups.google.com/u/1/a/chromium.org/g/blink-dev/c/U5K69fbA6SU
- [Intent to Ship: Secure Payment Confirmation: Browser Bound Keys](https://groups.google.com/a/chromium.org/g/blink-dev/c/0sYsrtrSF1Y/m/yVT6GQYsBAAJ) *(groups.google.com)*
  > Does this intent deprecate or change behavior of existing APIs, such that it has potentially high risk for Android WebView-based applications? Web developers should be able to inspect the new signature output which is defined in WebIDL, thus no chang...
- [Intent to Experiment: Secure Payment Confirmation V2](https://groups.google.com/a/chromium.org/g/blink-dev/c/6Dd00NJ-td8) *(groups.google.com)*
  > ac and Windows to first prove the user benefit, and then extend the feature to all platforms, except WebView where PaymentRequest is not supported. ... https://chromestatus.com/feature/5702310124584960 This intent message was generated by Chrome Plat...
- [Intent to Experiment: Secure payment confirmation](https://groups.google.com/a/chromium.org/g/blink-dev/c/1P5bcoBw-II) *(groups.google.com)*
  > We intend to experiment with Stripe ...equest/secure-payment-confirmation.https.html?label=master&amp;label=experimental&amp;aligned ... <strong>This intent message was generated by Chrome Platform Status</strong>....
- [\[blink-dev\] Re: Intent to Ship: Secure Payment Confirmation: Browser Bound Keys](https://www.mail-archive.com/blink-dev@chromium.org/msg13990.html) *(mail-archive.com)*
  > Link to entry on the Chrome Platform Status https://chromestatus.com/ feature/5106102997614592?gate=5080941065928704 Links to previous Intent discussions Intent to Prototype: https://groups.google.com/a/chromium.org/d/msgid/blink- dev/68093084.170a02...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5126146013396992`)*
  > Availability expectation The locale validation for Secure Payment Confirmation will only be available in Chromium browsers for the foreseeable future. Estimated milestones Shipping on desktop 154 Shipping on Android 154 Link to entry on the...
- [secure-payment-confirmation/spec.bs at main · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/spec.bs) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > TR: https://www.w3.org/TR/secure-payment-confirmation/ ED: https://<strong>w3c.github.io/secure-payment-confirmation</strong>/ Prepare for TR: true · Inline Github Issues: true · Group: web-payments · Status: w3c/ED · Deadline: 2023-08-01 ·...
- [Secure Payment Confirmation 2023-01-11 &gt; 2023-02-01 · Issue #50 · w3c/a11y-request](https://github.com/w3c/a11y-request/issues/50) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > name of spec to be reviewed: Secure Payment Confirmation (SPC) URL of spec: https://<strong>w3c.github.io/secure-payment-confirmation</strong>/ What and when is your next expected transition? Candidate Recommendati...
- [Mention Secure Payment Confirmation · Issue #535 · w3c/web-roadmaps](https://github.com/w3c/web-roadmaps/issues/535) *(github.com · 2021-08-27T11:03:35)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > Mention Secure Payment Confirmation#535 · Copy link · Labels · mobile-roadmap · xfq · opened · on Aug 27, 2021 · Issue body actions · Spec: https://<strong>w3c.github.io/secure-payment-confirmation</strong>/ Explainer: https://github.com/w3...
- [Secure Payment Confirmation · Issue #570 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/570) *(github.com · 2021-08-24T13:51:20)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > Request for Mozilla Position on an Emerging Web Specification Specification Title: Secure Payment Confirmation Specification or proposal URL: https://<strong>w3c.github.io/secure-payment-confirmation</strong>/ (see...
- [wpt/secure-payment-confirmation/authentication-accepted.https.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/secure-payment-confirmation/authentication-accepted.https.html) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > // https://github.com/w3c/secure-payment-confirmation/pull/198 ·   if (&#x27;rp&#x27; in clientDataJSON.payment) {     assert_equals(clientDataJSON.payment.rp, clientDataJSON.payment.rpId);   }  ·   // TODO: Verify cred.response.signature, ...

## 📚 Platform Documentation & Specifications

- [secure-payment-confirmation/spec.bs at main · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/spec.bs) *(github.com)*
- [Secure Payment Confirmation 2023-01-11 &gt; 2023-02-01 · Issue #50 · w3c/a11y-request](https://github.com/w3c/a11y-request/issues/50) *(github.com)*
- [Mention Secure Payment Confirmation · Issue #535 · w3c/web-roadmaps](https://github.com/w3c/web-roadmaps/issues/535) *(github.com)*
- [Secure Payment Confirmation · Issue #570 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/570) *(github.com)*
- [wpt/secure-payment-confirmation/authentication-accepted.https.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/secure-payment-confirmation/authentication-accepted.https.html) *(github.com)*
- [Secure Payment Confirmation](https://www.w3.org/TR/secure-payment-confirmation) *(w3.org)*
- [Using Secure Payment Confirmation](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation) *(developer.mozilla.org)*
- [SecurePaymentConfirmationRequest](https://developer.mozilla.org/en-US/docs/Web/API/SecurePaymentConfirmationRequest) *(developer.mozilla.org)*
- [PaymentRequest: securePaymentConfirmationAvailability() static method](https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/securePaymentConfirmationAvailability_static) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 46 result(s) found across 11 planned queries — **18 verified relevant**
  - `"chromestatus.com/feature/5126146013396992" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c/secure-payment-confirmation/issues/343" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"w3c.github.io/secure-payment-confirmation" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"Secure Payment Confirmation: Locale Validation" API` — *Core feature API query* (0 returned)
  - `"Secure Payment Confirmation: Locale Validation" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"Secure Payment Confirmation" locale "NotSupportedError" OR DOMException` — *Finds code samples, error handling patterns, and WebIDL usage where locale validation throws a NotSupportedError in SPC implementations.* (2 returned)
  - `"Secure Payment Confirmation" (locale OR language) guide OR tutorial` — *Discovers web developer guides, technical blog posts, and integration tutorials explaining how to localize Secure Payment Confirmation prompts.* (8 returned)
  - `"Secure Payment Confirmation" "locale" "Intent to Ship" OR "Chrome Platform Status"` — *Tracks browser adoption, feature release timelines, and official engine implementation announcements across Chromium and WebKit.* (8 returned)
  - `site:github.com/w3c/secure-payment-confirmation "locale" validation OR 343` — *Finds technical discussions, specification debates, and working group feedback regarding the SPC locale matching and validation behavior.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **14 verified relevant**
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
