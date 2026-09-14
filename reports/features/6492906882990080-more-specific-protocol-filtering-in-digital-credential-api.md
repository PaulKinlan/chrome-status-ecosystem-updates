# More specific protocol filtering in Digital Credential API

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** In developer trial (Behind a flag)

## Overview

Chrome 151 began deprecating support for unspecified presentation and issuance protocols in the \*\*Digital Credentials API\*\*; final removal is scheduled for Chrome 160.  The Digital Credentials API was originally designed to be an opaque pipeline for arbitrary exchange protocols. In November 2025, the \[FedID WG resolved\](https://github.com/w3c-fedid/digital-credentials/issues/396) to change this so that the spec normatively referenced only a specific set of exchange protocols.  The removal of support for arbitrary, opaque pipelines ensures that only verified protocols are used, enabling a more robust privacy and security threat model for identity verification. This change aligns Chromium with updated industry specifications that normatively reference only a specific set of exchange protocols.

### Motivation

When arbitrary protocols were supported in the spec it made security and privacy analyses less precise since there was more ambiguity about how the API could be used in practice. In order to get more broad browser industry alignment on the privacy and security properties of the API, the specification was changed to normatively reference specific exchange protocols (which themselves have privacy and security threat models associated with them).

Chromium is updating to reflect this specification change because of the reduction in potential for confusion and compatibility issues by matching other browser engines, and because (contrary to original expectations) this extra flexibility was not actually being used by anyone in production.

## Ecosystem Status

- **Momentum:** High (190 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** More specific protocol filtering in Digital Credential API is currently In developer trial (Behind a flag) in Chrome 151. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Re: Intent to Ship: Deprecate and Remove Digital Credential API support for unspecified exchange protocols](http://www.mail-archive.com/blink-dev@chromium.org/msg16767.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Deprecate and Remove Digital Credential API support for unspecified exchange protocols Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Deprecate and Remove Digital Credential API support for unspe...
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > Experimental Chromium Web Platform Features | Polypane This website works best with JavaScript enabled. Skip to content Skip to footer Polypane Brand kit Copy icon as SVG Copy logo as SVG Brand guidelines Homepage Search Changelog Polypane 30.1 Lates...
- [Digital Credentials API (2026): Chrome, Safari & Firefox](https://www.corbado.com/blog/digital-credentials-api) *(corbado.com · 2026-08-14T06:00:46)*
  > Digital Credentials API (2026): Chrome, Safari & Firefox Free The +45-page Authentication Analytics Whitepaper — measuring real login journeys Download Back to Overview Copy Page Copy Page Copied 🇬🇧 En English Digital Credentials API (2026): Chrome...
- [What is the Digital Credentials API? The Developer's Guide (2026)](https://docs.walt.id/concepts/data-exchange-protocols/dc-api) *(docs.walt.id)*
  > What is the Digital Credentials API? The Developer&#x27;s Guide (2026) DOCS Latest release # W3C Digital Credentials API (DC-API): A Developer&#39;s Guide to Browser-Based Digital Credentials In the evolving landscape of digital identity, one of the ...
- [Online Identity Verification with the Digital Credentials API \| WebKit](https://webkit.org/blog/17431/online-identity-verification-with-the-digital-credentials-api) *(webkit.org · 2025-10-28T15:28:09)*
  > For more information about building and signing the request, see Requesting a mobile document on the web. Below is a reference to the Digital Credentials API that can be used as a starting point for making your own calls: const requestData = { protoc...
- [How to build a Digital Credential Verifier (Developer’s Guide)](https://www.corbado.com/blog/how-to-build-verifiable-credential-verifier) *(corbado.com · 2025-07-31T09:34:31)*
  > This tutorial fills that gap, showing you how to <strong>build a verifier using the browser&#x27;s native Digital Credential API, OpenID4VP for the presentation protocol, and ISO mDoc (e.g., mobile driver&#x27;s license) as the credential format</str...
- [Verifiable Credential API Design: Production Engineering Guide - DEV Community](https://dev.to/seo_optimization_591fad6c/designing-a-verifiable-credential-api-2f3g) *(dev.to · 2026-08-12T12:43:33)*
  > Ensuring wallets can process credentials from different issuers and follow evolving schema standards is key to future-proof, user-centric digital identity. Verifier APIs are responsible for checking the authenticity, integrity, and status of a presen...
- [Online Acceptance of Digital Credentials \| Verify with Google Wallet \| Google for Developers](https://developers.google.com/wallet/identity/verify/accepting-ids-from-wallet-online) *(developers.google.com · 2026-06-29T00:00:00)*
  > The following sections cover the technical integration details for Relying Parties integrating directly with the Digital Credentials API (including request formatting, request encryption, triggering the API, validating responses, and implementing Zer...
- [Digital Credentials API (DC API) - Overview \| EUDI Wallet and European Business Wallet Developer Docs and APIs \| iGrant.io](https://docs.igrant.io/docs/openID4vc-dcapi-overview) *(docs.igrant.io · 2026-07-27T13:02:03)*
  > It is stable enough to build against but is explicitly described as under active development, and breaking changes should be expected. The request shape has already changed once (from a providers array to the current requests array), and at the W3C T...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: Deprecate and Remove Digital Credential API support for unspecified exchange protocols](http://www.mail-archive.com/blink-dev@chromium.org/msg16767.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6492906882990080`)*
  > [blink-dev] Re: Intent to Ship: Deprecate and Remove Digital Credential API support for unspecified exchange protocols Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Deprecate and Remove Digital Credential API support...
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/issues/396`)*
  > Experimental Chromium Web Platform Features | Polypane This website works best with JavaScript enabled. Skip to content Skip to footer Polypane Brand kit Copy icon as SVG Copy logo as SVG Brand guidelines Homepage Search Changelog Polypane ...
- [digital-credentials/index.html at main · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/blob/main/index.html) *(github.com)* *(Cites: `https://w3c-fedid.github.io/digital-credentials/#protocols`)*
  > digital-credentials/index.html at main · w3c-fedid/digital-credentials · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ref...
- [Digital Credentials](https://www.w3.org/TR/digital-credentials) *(w3.org · 2026-08-21T00:00:00)* *(Cites: `https://w3c-fedid.github.io/digital-credentials/#protocols`)*
  > https://<strong>w3c-fedid.github.io/digital-credentials</strong>/ History: https://www.w3.org/standards/history/digital-credentials/ Commit history · Editors: Marcos Caceres (Apple Inc.) Tim Cappalli (Okta) Mohamed Amir Yosef (Google Inc.) ...
- [Digital Credentials API (2026): Chrome, Safari & Firefox](https://www.corbado.com/blog/digital-credentials-api) *(corbado.com · 2026-08-14T06:00:46)* *(Cites: `https://w3c-fedid.github.io/digital-credentials/#protocols`)*
  > Digital Credentials API (2026): Chrome, Safari & Firefox Free The +45-page Authentication Analytics Whitepaper — measuring real login journeys Download Back to Overview Copy Page Copy Page Copied 🇬🇧 En English Digital Credentials API (202...
- [eudi-doc-architecture-and-reference-framework/docs/discussion-topics/f-digital-credential-api.md at main · eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/blob/main/docs/discussion-topics/f-digital-credential-api.md) *(github.com)* *(Cites: `https://w3c-fedid.github.io/digital-credentials/#protocols`)*
  > eudi-doc-architecture-and-reference-framework/docs/discussion-topics/f-digital-credential-api.md at main · eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework · GitHub Skip to content Navigation Menu Sign in Appearance ...

## 📚 Platform Documentation & Specifications

- [digital-credentials/index.html at main · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/blob/main/index.html) *(github.com)*
- [Digital Credentials](https://www.w3.org/TR/digital-credentials) *(w3.org)*
- [eudi-doc-architecture-and-reference-framework/docs/discussion-topics/f-digital-credential-api.md at main · eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/blob/main/docs/discussion-topics/f-digital-credential-api.md) *(github.com)*
- [digital-credentials/explainer.md at main · w3c-fedid/digital-credentials](https://github.com/WICG/digital-credentials/blob/main/explainer.md) *(github.com)*
- [Topic F: Digital Credentials API (former known as browser API) · eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework · Discussion #361](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/discussions/361) *(github.com)*
- [GitHub - w3c-fedid/FedCM: A privacy preserving identity exchange Web API · GitHub](https://github.com/w3c-fedid/FedCM) *(github.com)*
- [html-css-javascript · GitHub Topics · GitHub](https://github.com/topics/html-css-javascript) *(github.com)*
- [GitHub - fesk/fed: Very lightweight plain javascript inline rich text/HTML editor · GitHub](https://github.com/fesk/fed) *(github.com)*
- [html-css-javascript-project · GitHub Topics · GitHub](https://github.com/topics/html-css-javascript-project) *(github.com)*
- [html-css-js · GitHub Topics · GitHub](https://github.com/topics/html-css-js) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 33 result(s) found across 8 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/6492906882990080" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c-fedid/digital-credentials/issues/396" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"w3c-fedid.github.io/digital-credentials" -site:w3c-fedid.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"More specific protocol filtering in Digital Credential API" API` — *Core feature API query* (0 returned)
  - `"More specific protocol filtering in Digital Credential API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"github.com" OR "c-fedid" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"More specific protocol filtering in Digital Credential API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"More specific protocol filtering in Digital Credential API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 28 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6492906882990080)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6492906882990080)
- [Specification](https://w3c-fedid.github.io/digital-credentials/#protocols)
- [Chromium Tracking Bug](https://crbug.com/465006289)
