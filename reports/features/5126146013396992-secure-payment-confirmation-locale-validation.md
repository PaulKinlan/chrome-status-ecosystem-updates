# Secure Payment Confirmation: Locale Validation

> **Report Week:** 2026-W43 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Updates Secure Payment Confirmation's \`locale\` data field to return a Not Supported DOMException if none of the language tags provided in the field match the language used by the Secure Payment Confirmation's dialog. If the field is not set or empty, this validation is skipped.  This helps web developers with matching the language of the data that they are supplying to Secure Payment Confirmation with the dialog.

### Motivation

This feature amends Secure Payment Confirmation so that web developers can align the language of data elements that they supply to Secure Payment Confirmation with the language used by the Secure Payment Confirmation dialog.  Currently web developers can provide a list of language tags for Secure Payment Confirmation to use in their dialog. But Secure Payment Confirmation does not use this list because it is not feasible for the browser to support all languages and the Secure Payment Confirmation is a browser feature so it should use the browser language to be consistent with other browser features.  By returning an error when none of the language tags provided match Secure Payment Confirmation's language, web developers are able to retry with different language tags (while updating the language of their supplied data elements) until they get a match.

## Ecosystem Status

- **Momentum:** Emerging (footprint 155 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Secure Payment Confirmation (SPC) Locale Validation refines transaction confirmation by throwing a NotSupportedError DOMException if a relying party's requested language tags do not match the browser dialog's UI language. While this addresses significant internationalization and user-experience issues for payment flows in Chromium, SPC as a whole remains trapped in limited availability with zero implementation progress in other engines. As a result, the feature enhances developer control within Chromium but does not alter the broader single-vendor dynamic.

### Recommendations
- Actionable Advice: Use SPC locale validation strictly as a progressive enhancement on supported Chromium browsers while catching NotSupportedError exceptions to negotiate alternate language tags or fall back to standard WebAuthn and 3-D Secure flows. Do not rely on SPC as a universal payment authentication mechanism across all user agents.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @gsnedders: "Am I right in understanding that the primary goal here is to replace 3-D Secure with something that's browser mediated?..."
- Standards Activity (Mozilla): Latest discussion from @stephenmcgruer: "Hi folks. I know that Mozilla's position on SPC is outstanding, however we wanted to let you know of a notable additional feature to SPC that we are c..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Secure Payment Confirmation (SPC)](https://github.com/WebKit/standards-positions/issues/30) [open]
- **Mozilla:** [Secure Payment Confirmation](https://github.com/mozilla/standards-positions/issues/570) [open]

## Web-features Group

*group-level data: web-features [`secure-payment-confirmation`](https://webstatus.dev/features/secure-payment-confirmation), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `secure-payment-confirmation` on [wpt.fyi](https://wpt.fyi/results?q=feature:secure-payment-confirmation) (via webstatus.dev) — stable: Chrome 80% · Edge 10% · Firefox 0% · Safari 0%; experimental: Chrome 80% · Edge 10% · Firefox 0% · Safari 0%

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5126146013396992) *(img544-dot-cr-status.appspot.com)*
  > \*\*Secure Payment Confirmation (SPC): Locale Validation\*\* updates how browsers handle the optional \`locale\` parameter in the \`SecurePaymentConfirmationRequest\` dictionary However, browsers typically present the native payment confirmation dialog in th...
- [chromestatus.com](https://chromestatus.com/feature/5126146013396992?gate=4803300429004800) *(chromestatus.com)*
  > \*\*The Solution:\*\* If an RP supplies a list of BCP 47 language tags in the \`locale\` field, the browser validates whether any of the tags match the language used by the SPC confirmation dialog \*\*Title:\*\* \*Secure Payment Confirmation: Locale Validation\*
- [chrome.com](https://developer.chrome.com/docs/payments/authenticate-secure-payment-confirmation) *(developer.chrome.com)*
  > If a \`NotSupportedError\` is caught, they can fall back to alternative languages or switch to standard WebAuthn/3D-Secure fallback flows \*\*Guides:\*\* \*Authenticate with Secure Payment Confirmation\* & \*Register a Secure Payment Confirmation\*
- [googleusercontent.com](https://doc-3p60-3vv0-issuetracker.googleusercontent.com/issues/552458479) *(doc-3p60-3vv0-issuetracker.googleusercontent.com)*
  > \*\*Source:\*\* \[Chrome Platform Status\](https://chromestatus.com/feature/5126146013396992)
- [chrome.com](https://developer.chrome.com/docs/payments/register-secure-payment-confirmation) *(developer.chrome.com)*
  > \*\*Guides:\*\* \*Authenticate with Secure Payment Confirmation\* & \*Register a Secure Payment Confirmation\* The guides outline the typical pattern for feature detection and pre-flight validation via \`canMakePayment()\`—the primary hook where developers int...
- [fidoalliance.org](https://fidoalliance.org/white-paper-secure-payment-confirmation) *(fidoalliance.org)*
  > \*\*Specialized Payment & WebAuthn Communities:\*\* Discussions in the FIDO Alliance and W3C Web Payments groups have welcomed the change, viewing it as a practical compromise between browser security/privacy constraints (where user agents refuse to let ...
- [\[blink-dev\] Intent to Ship: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17746.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Secure Payment Confirmation: Locale Validation Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Secure Payment Confirmation: Locale Validation Chromestatus Thu, 15 Oct 2026 07:18:09 -0700 Contact emails \[e...
- [\[blink-dev\] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)*
  > Explainer https://github.com/w... Payment Confirmation&#x27;s \`locale\` data field &lt;strong&gt;to return a Javascript TypeError if none of the language tags provided in the field match the language used by the Secure Payment Confirmation&#x27;s dialog&lt;/st...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17746.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5126146013396992`)*
  > \[blink-dev\] Intent to Ship: Secure Payment Confirmation: Locale Validation Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Secure Payment Confirmation: Locale Validation Chromestatus Thu, 15 Oct 2026 07:18:09 -0700 Contact...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/SecurePaymentConfirmationRequest) *(developer.mozilla.org)*
- [Secure Payment Confirmation](https://www.w3.org/TR/secure-payment-confirmation) *(w3.org)*
- [Localization topics to address · Issue #93 · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/issues/93) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 46 result(s) found across 11 planned queries — **4 verified relevant**
  - `"chromestatus.com/feature/5126146013396992" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c/secure-payment-confirmation/issues/343" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"w3c.github.io/secure-payment-confirmation" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" API` — *Core feature API query* (2 returned)
  - `"Secure Payment Confirmation: Locale Validation" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"SecurePaymentConfirmationRequest" locale "NotSupportedError"` — *Find JavaScript code samples, web platform tests, and WebIDL definitions handling locale validation errors in Secure Payment Confirmation.* (1 returned)
  - `"secure-payment-confirmation" locale ("NotSupportedError" OR "DOMException") guide OR tutorial` — *Identify practical developer tutorials detailing how to handle locale mismatch exceptions and retry data translation in SPC dialogs.* (0 returned)
  - `site:github.com/w3c/secure-payment-confirmation "locale" (dialog OR error OR validation)` — *Locate specification debates, commit histories, and WG discussion threads on standardizing SPC locale verification.* (8 returned)
  - `"Secure Payment Confirmation" locale ("Intent to Ship" OR "Chrome Platform Status" OR "Chromium")` — *Track browser vendor implementation announcements, platform status entries, and cross-browser rollout plans for SPC locale validation.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "secure-payment-confirmation", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "secure-payment-confirmation": Chrome 80% passing (stable)*

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
