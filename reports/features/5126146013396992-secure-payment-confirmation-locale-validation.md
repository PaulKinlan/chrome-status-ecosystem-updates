# Secure Payment Confirmation: Locale Validation

> **Report Week:** 2026-W42 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Updates Secure Payment Confirmation's \`locale\` data field to return a Not Supported DOMException if none of the language tags provided in the field match the language used by the Secure Payment Confirmation's dialog. If the field is not set or empty, this validation is skipped.  This helps web developers with matching the language of the data that they are supplying to Secure Payment Confirmation with the dialog.

### Motivation

This feature amends Secure Payment Confirmation so that web developers can align the language of data elements that they supply to Secure Payment Confirmation with the language used by the Secure Payment Confirmation dialog.  Currently web developers can provide a list of language tags for Secure Payment Confirmation to use in their dialog. But Secure Payment Confirmation does not use this list because it is not feasible for the browser to support all languages and the Secure Payment Confirmation is a browser feature so it should use the browser language to be consistent with other browser features.  By returning an error when none of the language tags provided match Secure Payment Confirmation's language, web developers are able to retry with different language tags (while updating the language of their supplied data elements) until they get a match.

## Ecosystem Status

- **Momentum:** Emerging (footprint 105 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Secure Payment Confirmation's locale validation resolves a key internationalization friction point by throwing a NotSupportedError DOMException when relying-party language tags do not match the browser dialog's UI language, enabling merchants to dynamically align localization strings. However, while shipping in Chromium 154, the broader Secure Payment Confirmation specification remains essentially a single-engine reality with minimal traction in non-Blink browsers. Industry perception welcomes the ergonomic fix for multilingual checkouts, but overall ecosystem consensus remains constrained by lack of cross-vendor adoption.

### Recommendations
- Actionable Advice: Web payment architects should treat this feature as a progressive enhancement, querying canMakePayment() inside try/catch blocks to negotiate localized strings when supported. Teams must maintain established 3DS and traditional WebAuthn redirect fallbacks for Safari, Firefox, and unmatching locale scenarios.
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

- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > \* \*\*The Solution:\*\* If the developer supplies a list of language tags in the \`locale\` field and \*\*none\*\* of them match the language used by the browser's SPC dialog, the browser throws a \`NotSupportedError\` \`DOMException\` If the \`locale\` field is emp...
- [googlesource.com](https://chromium.googlesource.com/experimental/chromium/src/+/refs/heads/main/chrome/browser/flag_descriptions.h) *(chromium.googlesource.com)*
  > \* \*\*The Solution:\*\* If the developer supplies a list of language tags in the \`locale\` field and \*\*none\*\* of them match the language used by the browser's SPC dialog, the browser throws a \`NotSupportedError\` \`DOMException\`
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Official Vendor Announcements (Chrome for Developers) \* \*\*Chrome 154 Release Notes & Beta Blog\*\* (\*developer.chrome.com\*): \* Documented as a shipping Web Platform feature in Chrome 154
- [\[blink-dev\] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Secure Payment Confirmation: Locale Validation Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Secure Payment Confirmation: Locale Validation Chromestatus Wed, 12 Aug 2026 12:39:17 -0700 Contact...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > &lt;strong&gt;Updates Secure Payment Confirmation&#x27;s locale data field to return a Not Supported DOMException if none of the language tags provided in the field match the language used by the Secure Payment Confirmation&#x27;s dialog&lt;/strong&gt;.

## 📚 Platform Documentation & Specifications

- [w3.org](https://www.w3.org/TR/2023/CRD-secure-payment-confirmation-20231018) *(w3.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 40 result(s) found across 11 planned queries — **4 verified relevant**
  - `"chromestatus.com/feature/5126146013396992" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/secure-payment-confirmation/issues/343" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"w3c.github.io/secure-payment-confirmation" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Secure Payment Confirmation: Locale Validation" API` — *Core feature API query* (0 returned)
  - `"Secure Payment Confirmation: Locale Validation" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Secure Payment Confirmation: Locale Validation" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"secure-payment-confirmation" locale "NotSupportedError" OR "DOMException"` — *Finds JavaScript implementation snippets and error handling patterns for Secure Payment Confirmation locale validation.* (5 returned)
  - `"Secure Payment Confirmation" (locale OR localization) guide OR tutorial site:web.dev OR site:developer.chrome.com` — *Surfaces developer guides and Chrome documentation detailing how to handle localized SPC authentication prompts.* (8 returned)
  - `"Secure Payment Confirmation" "locale" ("Intent to Ship" OR "Chrome Status" OR "Firefox")` — *Tracks browser vendor release notes, intent-to-ship threads, and platform support signals for SPC locale validation.* (2 returned)
  - `site:github.com/w3c/secure-payment-confirmation "locale" ("dialog" OR "validation")` — *Discovers W3C working group discussions, merchant feedback, and specification debates concerning SPC locale matching behavior.* (4 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "secure-payment-confirmation", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "secure-payment-confirmation": Chrome 80% passing (stable)*

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
