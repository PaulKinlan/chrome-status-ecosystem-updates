# More specific protocol filtering in Digital Credential API

> **Report Week:** 2026-W39 | **Milestone:** Chrome 151 | **Category:** In developer trial (Behind a flag)

## Overview

Chrome 151 began deprecating support for unspecified presentation and issuance protocols in the \*\*Digital Credentials API\*\*; final removal is scheduled for Chrome 160.  The Digital Credentials API was originally designed to be an opaque pipeline for arbitrary exchange protocols. In November 2025, the \[FedID WG resolved\](https://github.com/w3c-fedid/digital-credentials/issues/396) to change this so that the spec normatively referenced only a specific set of exchange protocols.  The removal of support for arbitrary, opaque pipelines ensures that only verified protocols are used, enabling a more robust privacy and security threat model for identity verification. This change aligns Chromium with updated industry specifications that normatively reference only a specific set of exchange protocols.

### Motivation

When arbitrary protocols were supported in the spec it made security and privacy analyses less precise since there was more ambiguity about how the API could be used in practice. In order to get more broad browser industry alignment on the privacy and security properties of the API, the specification was changed to normatively reference specific exchange protocols (which themselves have privacy and security threat models associated with them).

Chromium is updating to reflect this specification change because of the reduction in potential for confusion and compatibility issues by matching other browser engines, and because (contrary to original expectations) this extra flexibility was not actually being used by anyone in production.

## Ecosystem Status

- **Momentum:** High (270 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Digital Credentials API is transitioning from an open, opaque pipe for arbitrary exchange protocols to a restricted model supporting only normatively referenced, vetted protocols (such as OpenID4VP and ISO 18013-7 Annex C). Chrome 151 initiated this deprecation behind a flag with full removal planned by Chrome 160, aligning Chromium with resolutions adopted by the W3C Federated Identity Working Group. The move significantly narrows the privacy and security attack surface, bringing browser vendors closer to an interoperable security architecture.

### Recommendations
- Actionable Advice: Audit existing Digital Credentials API implementations to verify that only standardized protocol names (e.g., standard OpenID4VP requests) are passed into navigator.credentials requests. Continue gating all digital credential ceremonies behind progressive enhancement checks, as cross-engine interoperability and platform wallet support are still evolving.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Digital Credentials API (2026): Chrome, Safari & Firefox](https://www.corbado.com/blog/digital-credentials-api) *(corbado.com · 2026-08-14T06:00:46)*
  > Digital Credentials API (2026): Chrome, Safari & Firefox Free The +45-page Authentication Analytics Whitepaper — measuring real login journeys Download Back to Overview Copy Page Copy Page Copied 🇬🇧 En English Digital Credentials API (2026): Chrome...
- [What is the Digital Credentials API? The Developer's Guide (2026)](https://docs.walt.id/concepts/data-exchange-protocols/dc-api) *(docs.walt.id)*
  > What is the Digital Credentials API? The Developer&#x27;s Guide (2026) DOCS Latest release # W3C Digital Credentials API (DC-API): A Developer&#39;s Guide to Browser-Based Digital Credentials In the evolving landscape of digital identity, one of the ...
- [Online Identity Verification with the Digital Credentials API \| WebKit](https://webkit.org/blog/17431/online-identity-verification-with-the-digital-credentials-api) *(webkit.org · 2025-10-28T15:28:09)*
  > Online Identity Verification with the Digital Credentials API | WebKit WebKit Online Identity Verification with the Digital Credentials API Oct 3, 2025 by Marcos Cáceres, Erik Melone, and Andreas Thoma The rise of e-commerce in the past decade change...
- [How to build a Digital Credential Verifier (Developer’s Guide)](https://www.corbado.com/blog/how-to-build-verifiable-credential-verifier) *(corbado.com · 2025-07-31T09:34:31)*
  > This tutorial fills that gap, showing you how to <strong>build a verifier using the browser&#x27;s native Digital Credential API, OpenID4VP for the presentation protocol, and ISO mDoc (e.g., mobile driver&#x27;s license) as the credential format</str...
- [Verifiable Credential API Design: Production Engineering Guide - DEV Community](https://dev.to/seo_optimization_591fad6c/designing-a-verifiable-credential-api-2f3g) *(dev.to · 2026-08-12T12:43:33)*
  > Ensuring wallets can process credentials from different issuers and follow evolving schema standards is key to future-proof, user-centric digital identity. Verifier APIs are responsible for checking the authenticity, integrity, and status of a presen...
- [How to build a Digital Credential Issuer (Developer’s Guide)](https://www.corbado.com/blog/how-to-build-verifiable-credential-issuer) *(corbado.com · 2025-07-31T14:32:18)*
  > This guide provides a comprehensive, step-by-step tutorial for building a Digital Credential Issuer. We will focus on the OpenID for Verifiable Credential Issuance (OpenID4VCI) protocol, a modern standard that defines how users can obtain credentials...
- [Digital Credentials API (DC API) - Overview \| EUDI Wallet and European Business Wallet Developer Docs and APIs \| iGrant.io](https://docs.igrant.io/docs/openID4vc-dcapi-overview) *(docs.igrant.io · 2026-07-27T13:02:03)*
  > It is stable enough to build against but is explicitly described as under active development, and breaking changes should be expected. The request shape has already changed once (from a providers array to the current requests array), and at the W3C T...
- [Intent to Extend Experiment: Digital Credential API](https://groups.google.com/a/chromium.org/g/blink-dev/c/GBjkRkSKI9c/m/S0Bje3PRCAAJ) *(groups.google.com)*
  > <strong>The primary activation concern is enabling existing deployments using technology like OpenID4VP to be able to also support this API</strong>. As such we have left the request protocol unspecified at this layer, to be specified along with exis...
- [One Commerce Protocol, Two Interfaces: PWA for Humans and MCP for Agents - DEV Community](https://dev.to/seasonkoh/one-commerce-protocol-two-interfaces-pwa-for-humans-and-mcp-for-agents-4fme) *(dev.to · 2026-08-24T01:21:22)*
  > If the human interface and the agent interface use different order states, permission rules or definitions of completion, the system develops two versions of commercial reality. A person may see a pending request while an agent reports a completed ac...
- [Accelerate PWA Kit Development with the PWA Kit MCP Server (Developer Preview) \| Composable Storefront \| Account Manager \| Salesforce Developers](https://developer.salesforce.com/docs/commerce/account-manager/guide/mcp-server-intro.html) *(developer.salesforce.com)*
  > <strong>It provides an initial suite of MCP tools intended to standardize and optimize the developer workflow for PWA Kit storefront development, such as creating and customizing the storefront app</strong>. To learn more about MCP servers, see What ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Protocol filtering in Digital Credential API · Issue #1311 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1311) *(github.com · 2026-08-14T17:30:47)* *(Cites: `https://chromestatus.com/feature/6492906882990080`)*
  > Protocol filtering in Digital Credential API · Issue #1311 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [digital-credentials/index.html at main · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/blob/main/index.html) *(github.com)* *(Cites: `https://w3c-fedid.github.io/digital-credentials/#protocols`)*
  > digital-credentials/index.html at main · w3c-fedid/digital-credentials · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ref...
- [Digital Credentials](https://www.w3.org/TR/digital-credentials) *(w3.org · 2026-08-21T00:00:00)* *(Cites: `https://w3c-fedid.github.io/digital-credentials/#protocols`)*
  > https://<strong>w3c-fedid.github.io/digital-credentials</strong>/ History: https://www.w3.org/standards/history/digital-credentials/ Commit history · Editors: Marcos Caceres (Apple Inc.) Tim Cappalli (Okta) Mohamed Amir Yosef (Google Inc.) ...
- [Digital Credentials API (2026): Chrome, Safari & Firefox](https://www.corbado.com/blog/digital-credentials-api) *(corbado.com · 2026-08-14T06:00:46)* *(Cites: `https://w3c-fedid.github.io/digital-credentials/#protocols`)*
  > Digital Credentials API (2026): Chrome, Safari & Firefox Free The +45-page Authentication Analytics Whitepaper — measuring real login journeys Download Back to Overview Copy Page Copy Page Copied 🇬🇧 En English Digital Credentials API (202...
- [eudi-doc-architecture-and-reference-framework/docs/discussion-topics/f-digital-credential-api.md at main · eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/blob/main/docs/discussion-topics/f-digital-credential-api.md) *(github.com)* *(Cites: `https://w3c-fedid.github.io/digital-credentials/#protocols`)*
  > eudi-doc-architecture-and-reference-framework/docs/discussion-topics/f-digital-credential-api.md at main · eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework · GitHub Skip to content Navigation Menu Sign in Appearance ...

## 📚 Platform Documentation & Specifications

- [Protocol filtering in Digital Credential API · Issue #1311 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1311) *(github.com)*
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
- [GitHub - 2500080283/FED · GitHub](https://github.com/2500080283/FED) *(github.com)*
- [css-in-js · GitHub Topics · GitHub](https://github.com/topics/css-in-js) *(github.com)*
- [W3C Digital Credentials API publication: the next step to privacy-preserving identities on the web \| 2025 \| Blog \| W3C](https://www.w3.org/blog/2025/w3c-digital-credentials-api-publication-the-next-step-to-privacy-preserving-identities-on-the-web) *(w3.org)*
- [Web Payments WG – 11 November 2025](https://www.w3.org/2025/11/11-wpwg-minutes.html) *(w3.org)*
- [FederatedCredential: protocol property](https://developer.mozilla.org/en-US/docs/Web/API/FederatedCredential/protocol) *(developer.mozilla.org)*
- [Credential Management API](https://developer.mozilla.org/en-US/docs/Web/API/Credential_Management_API) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 34 result(s) found across 8 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/6492906882990080" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c-fedid/digital-credentials/issues/396" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"w3c-fedid.github.io/digital-credentials" -site:w3c-fedid.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"More specific protocol filtering in Digital Credential API" API` — *Core feature API query* (0 returned)
  - `"More specific protocol filtering in Digital Credential API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"github.com" OR "c-fedid" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"More specific protocol filtering in Digital Credential API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"More specific protocol filtering in Digital Credential API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **2 verified relevant**
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
