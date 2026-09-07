# More specific protocol filtering in Digital Credential API

> **Report Week:** 2026-W37 | **Milestone:** Chrome 151 | **Category:** In developer trial (Behind a flag)

## Overview

Chrome 151 began deprecating support for unspecified presentation and issuance protocols in the **Digital Credentials API**; final removal is scheduled for Chrome 160.

The Digital Credentials API was originally designed to be an opaque pipeline for arbitrary exchange protocols. In November 2025, the [FedID WG resolved](https://github.com/w3c-fedid/digital-credentials/issues/396) to change this so that the spec normatively referenced only a specific set of exchange protocols.

The removal of support for arbitrary, opaque pipelines ensures that only verified protocols are used, enabling a more robust privacy and security threat model for identity verification. This change aligns Chromium with updated industry specifications that normatively reference only a specific set of exchange protocols.

### Motivation

When arbitrary protocols were supported in the spec it made security and privacy analyses less precise since there was more ambiguity about how the API could be used in practice. In order to get more broad browser industry alignment on the privacy and security properties of the API, the specification was changed to normatively reference specific exchange protocols (which themselves have privacy and security threat models associated with them).

Chromium is updating to reflect this specification change because of the reduction in potential for confusion and compatibility issues by matching other browser engines, and because (contrary to original expectations) this extra flexibility was not actually being used by anyone in production.

## Ecosystem Status

- **Momentum:** High (100 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** More specific protocol filtering in Digital Credential API is currently In developer trial (Behind a flag) in Chrome 151. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "@0xyuura What you are really designing with GenVM is an agreement protocol for a specific type of judgment. That feels m" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [@0xyuura What you are really designing with GenVM is an agreement protocol for a specific type of judgment. That feels m](https://twitter.com/JoZz321/status/2096916934272926146) — *by @JoZz321, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [XRP is the XRP Ledger itself, remember this. The XRP ledger is built for finance.  On the XRP Ledger, XRP is far more th](https://twitter.com/charusanxrp83/status/2096911902152495504) — *by @charusanxrp83, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE02k6aBiLstI1TzLHd4Wggx7uwKsV0j2ywxY8ust9DfyoOQt0wEWG5P5ETSbOZs6Kck09naoE83_nc2tGAYzBEekYTRz_mqzTSWKQ3Mo89deB1A1yxh-tT6AsTWr2qgInmQFDXVCj8b_BVL891MIwn) *(vertexaisearch.cloud.google.com)*
  > Paths towards resolution on the registry [TPAC] · Issue #396 · w3c-fedid/digital-credentials · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. R...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF6WB8-NJQa8dI4yU1PwVtDsC5Aq5ZmHbOcUrZ70AdWsdMX6LKEvXO0oa6Cj_ZayVWk4zvhhc2QSBcGUULijvqqofwrgkV9zv5OfQaJVClFr1XDdUqWwG_Eiw6GIlBxl01wi-5I1EDfJAdb8MwipsjQ) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature & Architectural Shift  The **Digital Credentials API** (extending the Credential Management API via `navigator.credentials.get()` and `navigator.credentials.create()`) was initially designed as an opaque, protocol-agnostic
- [webkit.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGhvrD43JFVBrPGY5MKtFXntaAyz6C_G2XzWw9TRG3KewVe-lnr3VvEl7YSENtCHWtKR0thyNSNOZPZQVYgShJf-adl_rYD4B-JbKaEYwNhbYLgnvplK69XnCWrFF0KPzXCqa6cmhq5H0xheVFmvPQXyo4=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature & Architectural Shift  The **Digital Credentials API** (extending the Credential Management API via `navigator.credentials.get()` and `navigator.credentials.create()`) was initially designed as an opaque, protocol-agnostic
- [apple.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFbMGvUgGSAhNaZ3CXagQ6tenGh5x4eECwEKA076hXpAWnS0WlNPQe6vwsWam1iEXRgzw2N8TI9ER_16YyfL1Zn4-K8T2LLH_1As__ObIR7QEszQ8C7K6Qukot2VMGKW-6OXY0tspYASjMQNyMRkLbvct5KCTUs3rZomydlm9jdDzaaAsNvOzlpNHAm) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature & Architectural Shift  The **Digital Credentials API** (extending the Credential Management API via `navigator.credentials.get()` and `navigator.credentials.create()`) was initially designed as an opaque, protocol-agnostic
- [[blink-dev] Re: Intent to Ship: Deprecate and Remove Digital Credential API support for unspecified exchange protocols](http://www.mail-archive.com/blink-dev@chromium.org/msg16789.html) *(mail-archive.com)*
  > In November the FedID WG &gt;&gt;&gt;&gt; resolved to change this ( &gt;&gt;&gt;&gt; https://github.com/w3c-fedid/digital-credentials/issues/396) so that &gt;&gt;&gt;&gt; the spec normatively referenced only a specific set of exchange protocols. &gt;...
- [[blink-dev] Intent to Ship: Deprecate and Remove Digital Credential API support for unspecified exchange protocols](http://www.mail-archive.com/blink-dev@chromium.org/msg16738.html) *(mail-archive.com)*
  > In November the FedID WG resolved to change this (https://github.com/w3c-fedid/digital-credentials/issues/396) so that the spec normatively referenced only a specific set of exchange protocols. This feature tracks changing Chromium&#x27;s implementat...
- [Re: [blink-dev] Re: Intent to Ship: Deprecate and Remove Digital Credential API support for unspecified exchange protocols](http://www.mail-archive.com/blink-dev@chromium.org/msg16793.html) *(mail-archive.com)*
  > In November the FedID WG resolved to change this (https://github.com/w3c-fedid/digital-credentials/issues/396 &lt;https://github.com/w3c-fedid/digital-credentials/issues/396&gt;) so that the spec normatively referenced only a specific set of exchange...
- [Experimental Chromium Web Platform Features | Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > Starting in Chrome 151, <strong>Chrome will begin deprecating support for unspecified presentation and issuance protocols in the **Digital Credentials API**, with final removal scheduled for Chrome 160. The Digital Credentials API was originally desi...
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/cs_CZ/resources/release-notes) *(chromeenterprise.google · 2026-08-26T00:00:00)*
  > <strong>Chrome 151 began deprecating support for unspecified presentation and issuance protocols in the Digital Credentials API</strong>; final removal is scheduled for Chrome 160. The Digital Credentials API was originally designed to be an opaque p...

## 📚 Platform Documentation & Specifications

- [What protocols should a user agent implement? · Issue #439 · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/issues/439) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 13 result(s) found across 7 planned queries — **6 verified relevant**
  - `"chromestatus.com/feature/6492906882990080" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c-fedid/digital-credentials/issues/396" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"w3c-fedid.github.io/digital-credentials" -site:w3c-fedid.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Digital Credentials API" ("protocol filtering" OR "exchange protocols") (guide OR tutorial OR deprecation)` — *Searches for developer guides, tutorials, and migration articles addressing the deprecation of opaque protocols in favor of explicit protocol filtering.* (3 returned)
  - `"navigator.identity.get" "digital" "protocol" ("openid4vp" OR "org.iso.18013" OR "preview")` — *Finds real-world JavaScript code snippets and implementation examples specifying standard credential exchange protocols in navigator.identity.get calls.* (3 returned)
  - `"Digital Credentials API" ("Chrome 151" OR "Chrome 160" OR "FedID WG") ("protocols" OR "exchange protocol")` — *Discovers browser release notes, standards roadmap announcements, and ecosystem adoption tracking the shift away from arbitrary protocol pipelines.* (3 returned)
  - `site:github.com/w3c-fedid/digital-credentials ("396" OR "opaque pipeline" OR "exchange protocols")` — *Targets W3C FedID Working Group issue threads and community deliberations discussing the security/privacy rationale behind normatively referencing specific exchange protocols.* (1 returned)
- **Google Search Grounding (gemini-3.7-flash):** 11 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 28 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6492906882990080)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6492906882990080)
- [Specification](https://w3c-fedid.github.io/digital-credentials/#protocols)
- [Chromium Tracking Bug](https://crbug.com/465006289)
