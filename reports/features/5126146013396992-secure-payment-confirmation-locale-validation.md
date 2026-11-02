# Secure Payment Confirmation: Locale Validation

> **Report Week:** 2026-W45 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Updates Secure Payment Confirmation's \`locale\` data field to return a Not Supported DOMException if none of the language tags provided in the field match the language used by the Secure Payment Confirmation's dialog. If the field is not set or empty, this validation is skipped.  This helps web developers with matching the language of the data that they are supplying to Secure Payment Confirmation with the dialog.

### Motivation

This feature amends Secure Payment Confirmation so that web developers can align the language of data elements that they supply to Secure Payment Confirmation with the language used by the Secure Payment Confirmation dialog.  Currently web developers can provide a list of language tags for Secure Payment Confirmation to use in their dialog. But Secure Payment Confirmation does not use this list because it is not feasible for the browser to support all languages and the Secure Payment Confirmation is a browser feature so it should use the browser language to be consistent with other browser features.  By returning an error when none of the language tags provided match Secure Payment Confirmation's language, web developers are able to retry with different language tags (while updating the language of their supplied data elements) until they get a match.

## Ecosystem Status

- **Momentum:** High (+160 points since 2026-10-12; footprint 265 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Secure Payment Confirmation (SPC) Locale Validation refines the W3C Web Payments specification by raising a NotSupportedError DOMException when none of the relying party's specified language tags match the browser dialog's active locale. Shipped enabled by default in Chrome 154, it prevents jarring language mismatches between merchant-supplied data and system confirmation prompts without exposing fingerprintable OS locale details. Despite its utility, broader ecosystem impact is constrained because full SPC implementation remains an almost exclusively Chromium-driven feature with no production support in Safari or Firefox.

### Recommendations
- Actionable Advice: Use progressive enhancement by wrapping PaymentRequest.canMakePayment() or show() in try-catch blocks to intercept NotSupportedError and either adjust data element languages or fall back cleanly to standard 3-D Secure web challenges. If exact language coordination between merchant strings and the dialog is non-essential, omit or pass an empty locale array to maintain backwards compatibility.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @gsnedders: "Am I right in understanding that the primary goal here is to replace 3-D Secure with something that's browser mediated?..."
- Standards Activity (Mozilla): Latest discussion from @danielenriqueriverarivera6-max: "Excelente trabajo de los colaboradores Me atrevería a decir que el compromizo  con sus carreras lo an llevado a un límite demasiado amplio ... bendici..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Secure Payment Confirmation (SPC)](https://github.com/WebKit/standards-positions/issues/30) [open]
- **Mozilla:** [Secure Payment Confirmation](https://github.com/mozilla/standards-positions/issues/570) [open]

## Web-features Group

*group-level data: web-features [`secure-payment-confirmation`](https://webstatus.dev/features/secure-payment-confirmation), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `secure-payment-confirmation` on [wpt.fyi](https://wpt.fyi/results?q=feature:secure-payment-confirmation) (via webstatus.dev) — stable: Chrome 80% · Edge 10% · Firefox 0% · Safari 0%; experimental: Chrome 80% · Edge 10% · Firefox 0% · Safari 0%

## 📰 Ecosystem Blogs & Articles

- [Chrome 154  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > \*\*"Secure Payment Confirmation: Locale Validation"\*\* is an update to the W3C Secure Payment Confirmation (SPC) specification and its implementation in Chromium (shipped in \*\*Chrome 154\*\* Chrome officially announced the feature's progression through C...
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/master/chrome/browser/flag_descriptions.h) *(chromium.googlesource.com)*
  > \*\*Rejection Behavior\*\*: If \*\*none\*\* of the provided language tags match the dialog's active language, the browser rejects the call (such as \`canMakePayment()\` or \`show()\`) with a \`NotSupportedError\` \`DOMException\`
- [chromestatus.com](https://chromestatus.com/feature/5126146013396992?gate=4803300429004800) *(chromestatus.com)*
  > Because browsers intentionally restrict sites from inspecting arbitrary OS/dialog UI details to prevent user fingerprinting, this validation approach allows developers to ensure language compatibility before displaying the prompt and fall back cleanl...
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Chrome officially announced the feature's progression through Chrome 154 Beta and its general release
- [gigazine.net](https://gigazine.net/gsc_news/en/20260925-google-chrome-154) *(gigazine.net)*
  > Coverage across developer publications featured SPC locale validation alongside other platform updates, such as iframe auto-resizing, Background Fetch CORS enforcement, and popover light-dismiss tweaks
- [biggo.com](https://finance.biggo.com/news/c5f02f74-e6b8-4a67-bd4e-b2c4a7c36f09) *(finance.biggo.com)*
  > Coverage across developer publications featured SPC locale validation alongside other platform updates, such as iframe auto-resizing, Background Fetch CORS enforcement, and popover light-dismiss tweaks
- [gpayments.com](https://www.gpayments.com/blog/article/third-party-cookies-3ds-method) *(gpayments.com)*
  > \*\*Key takeaway\*\*: Payment integration analysts noted that while SPC adoption is primarily driven by card networks and PSD2/EMV 3-D Secure compliance, finer-grained UI controls like locale validation reduce cart abandonment risks in multi-language and...
- [yubico.com](https://developers.yubico.com/CTAP) *(developers.yubico.com)*
  > \*\*Key takeaway\*\*: Payment integration analysts noted that while SPC adoption is primarily driven by card networks and PSD2/EMV 3-D Secure compliance, finer-grained UI controls like locale validation reduce cart abandonment risks in multi-language and...
- [\[blink-dev\] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)*
  > Availability expectation The locale validation for Secure Payment Confirmation will only be available in Chromium browsers for the foreseeable future. Estimated milestones Shipping on desktop 154 Shipping on Android 154 Link to entry on the Chrome Pl...
- [Re: \[blink-dev\] Re: Intent to Ship: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17872.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; https://&lt;strong&gt;github.com/w3c/secure-payment-confirmation/issues/343&lt;/strong&gt;#issuecomment-5457268443 &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; Best, &gt;&gt;&gt;&gt;...
- [\[blink-dev\] Re: Intent to Ship: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17870.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; https://&lt;strong&gt;github.com/w3c/secure-payment-confirmation/issues/343&lt;/strong&gt;#issuecomment-5457268443 &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; Best, &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt...
- [\[blink-dev\] Re: Intent to Ship: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17821.html) *(mail-archive.com)*
  > &gt;&gt;&gt; \*No information provided\* &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; \*Debuggability\* &gt;&gt;&gt; Web developers should be able to create Secure Payment Confirmation &gt;&gt;&gt; requests with or without matching locales, thus no changes are...
- [\[blink-dev\] Intent to Ship: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17746.html) *(mail-archive.com)*
  > Web developers: Positive ... existing APIs, such that it has potentially high risk for Android WebView-based applications? No information provided Debuggability Web developers should be able to create Secure Payment Confirmation requests with or with...
- [\[blink-dev\] Re: Intent to Ship: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17794.html) *(mail-archive.com)*
  > &gt; \*No information provided\* &gt; &gt; &gt; \*Debuggability\* &gt; Web developers should be able to create Secure Payment Confirmation &gt; requests with or without matching locales, thus no changes are needed in &gt; devtools. &gt; &gt; \*Will this f...
- [Re: \[blink-dev\] Re: Intent to Ship: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17868.html) *(mail-archive.com)*
  > \*Availability expectation\* &lt;strong&gt;The locale validation for Secure Payment Confirmation will only be available in Chromium browsers for the foreseeable future&lt;/strong&gt;. \*Estimated milestones\* Shipping on desktop 154 Shipping on Android 154 \*Anticipa...
- [\[blink-dev\] Re: Intent to Ship: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17800.html) *(mail-archive.com)*
  > &gt; &gt; &gt; https://github.com/w3c/secure-payment-confirmation/issues/343#issuecomment-5457268443 &gt; &gt; Best, &gt; &gt; Alex &gt; &gt; On Thursday, October 15, 2026 at 7:08:36 AM UTC-7 Chromestatus wrote: &gt; &gt;&gt; \*Contact emails\* &gt;&gt...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5126146013396992`)*
  > Availability expectation The locale validation for Secure Payment Confirmation will only be available in Chromium browsers for the foreseeable future. Estimated milestones Shipping on desktop 154 Shipping on Android 154 Link to entry on the...
- [Re: \[blink-dev\] Re: Intent to Ship: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17872.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/secure-payment-confirmation/issues/343`)*
  > &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; https://&lt;strong&gt;github.com/w3c/secure-payment-confirmation/issues/343&lt;/strong&gt;#issuecomment-5457268443 &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; Best, &gt;&g...
- [\[blink-dev\] Re: Intent to Ship: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17870.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/secure-payment-confirmation/issues/343`)*
  > &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; https://&lt;strong&gt;github.com/w3c/secure-payment-confirmation/issues/343&lt;/strong&gt;#issuecomment-5457268443 &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; Best, &gt;&gt;&gt;&gt;&gt; &gt;&...

## 📚 Platform Documentation & Specifications

- [w3.org](https://www.w3.org/groups/wg/payments/activity) *(w3.org)*
- [Secure Payment Confirmation](https://www.w3.org/TR/secure-payment-confirmation) *(w3.org)*
- [Secure Payment Confirmation](https://www.w3.org/TR/2023/WD-secure-payment-confirmation-20230308) *(w3.org)*
- [SecurePaymentConfirmationRequest - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/SecurePaymentConfirmationRequest) *(developer.mozilla.org)*
- [Localization topics to address · Issue #93 · w3c/secure-payment-confirmation · GitHub](https://github.com/w3c/secure-payment-confirmation/issues/93) *(github.com)*
- [Update the Specification for Locale Validation · Issue #2181 · w3c/i18n-activity · GitHub](https://github.com/w3c/i18n-activity/issues/2181) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 43 result(s) found across 11 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/5126146013396992" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c/secure-payment-confirmation/issues/343" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"w3c.github.io/secure-payment-confirmation" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" API` — *Core feature API query* (5 returned)
  - `"Secure Payment Confirmation: Locale Validation" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"SecurePaymentConfirmationRequest" "locale" ("NotSupportedError" OR "DOMException")` — *Locates WebIDL definitions, spec tests, and JavaScript implementation examples showing how to pass locale arrays and handle NotSupportedError exceptions.* (8 returned)
  - `"Secure Payment Confirmation" ("locale" OR "localization") ("PaymentRequest" OR "WebAuthn") guide` — *Discovers developer guides, tutorials, and practical articles on configuring and localizing Secure Payment Confirmation dialogs.* (5 returned)
  - `"Secure Payment Confirmation" "locale" ("Intent to Ship" OR "Chrome Platform Status" OR "Chromium")` — *Finds browser vendor announcements, Blink Intent to Ship threads, and Chromium platform status updates tracking support for SPC locale validation.* (6 returned)
  - `site:github.com/w3c/secure-payment-confirmation ("locale" OR "issue 343")` — *Retrieves working group discussions, issue threads, and consensus feedback within the W3C Web Payments Working Group regarding locale negotiation in SPC.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "secure-payment-confirmation", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "secure-payment-confirmation": Chrome 80% passing (stable)*
- **Sources cited by the AI synthesis:** 4 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 10 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5126146013396992)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5126146013396992)
- [Specification](https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale)
- [Chromium Tracking Bug](https://crbug.com/535278878)
