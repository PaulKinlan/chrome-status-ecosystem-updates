# Digital Credentials API (issuance support)

> **Report Week:** 2026-W42 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

This Web Platform feature enables issuing websites (e.g., a university, government agency, or bank) to securely initiate the provisioning (issuance) process of digital credentials directly into a user's mobile wallet application. On Android, this capability leverages the Android IdentityCredential CredMan system (Credential Manager). On Desktop, it leverages cross-device approaches using the CTAP protocol similar to Digital Credentials presentation.

### Motivation

Without this, websites and wallets can only communicate in ways that are more opaque to the browser and OS.

## Ecosystem Status

- **Momentum:** High (footprint 380 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Digital Credentials API issuance capability extends the Credential Management API via \`navigator.credentials.create()\` to let issuing authorities securely provision credentials into mobile wallets without relying on fragile custom URI schemes or deep links. While Chromium is leading the rollout with default support backed by Android Credential Manager and cross-device CTAP flows, cross-browser consensus remains fractured. WebKit supports the overarching digital credential specification with cautionary reservations, while Mozilla formally opposes the API over systemic privacy and user agency concerns.

### Recommendations
- Actionable Advice: Issuing platforms should treat the API strictly as a progressive enhancement behind protocol and feature checks such as \`DigitalCredential.userAgentAllowsProtocol()\`. Teams should keep standard fallback mechanisms active—notably QR-based provisioning and custom deep links—to ensure seamless issuance across Safari, Firefox, and desktop platforms lacking cross-device support.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Update on Venue: https://github.com/w3c/strategy/issues/450  We also made strides on the OpenID / request format...."
- Standards Activity (Mozilla): Latest discussion from @RByers: "Hey Mozilla folks, is there anything you can share here about your position on the use of custom schemes like openid4vp://? Today Firefox allows infor..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Digital Credentials API](https://github.com/WebKit/standards-positions/issues/332) [closed]
- **Mozilla:** [Digital Credentials](https://github.com/mozilla/standards-positions/issues/1003) [closed]

## 📰 Ecosystem Blogs & Articles

- [Digital Credentials API for credential issuance \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-143-issuance-ot) *(developer.chrome.com)*
  > create()\` Historically, issuing institutions (such as motor vehicle departments, banks, or universities) had to rely on custom URI schemes or proprietary deep links to push credentials into mobile wallets
- [credenco.com](https://www.credenco.com/glossary/digital-credentials-api) *(credenco.com)*
  > create()\` Historically, issuing institutions (such as motor vehicle departments, banks, or universities) had to rely on custom URI schemes or proprietary deep links to push credentials into mobile wallets
- [chrome.com](https://developer.chrome.com/blog/digital-credentials-api-143-issuance-ot?hl=fr) *(developer.chrome.com)*
  > create()\` with a structured \`digital\` request payload containing an issuance offer (typically implementing \*\*OpenID4VCI\*\* or ISO/IEC 18013 standards) create({ digital: { requests: \[...\] } })\`
- [youtube.com](https://www.youtube.com/watch?v=pgoaZjYMGJY) *(youtube.com)*
  > \* \*\*On Desktop:\*\* The browser initiates a cross-device flow over the \*\*CTAP/FIDO hybrid protocol\*\*, using a QR code and Bluetooth Low Energy (BLE) proximity checks to route the credential offer securely to the user's mobile device
- [chrome.com](https://developer.chrome.com/blog/digital-credentials-cross-device-ot) *(developer.chrome.com)*
  > \* \*\*On Desktop:\*\* The browser initiates a cross-device flow over the \*\*CTAP/FIDO hybrid protocol\*\*, using a QR code and Bluetooth Low Energy (BLE) proximity checks to route the credential offer securely to the user's mobile device \* \*\*Consistent Desk...
- [Online Identity Verification with the Digital Credentials API \| WebKit](https://webkit.org/blog/17431/online-identity-verification-with-the-digital-credentials-api) *(webkit.org)*
  > \* \*\*On Desktop:\*\* The browser initiates a cross-device flow over the \*\*CTAP/FIDO hybrid protocol\*\*, using a QR code and Bluetooth Low Energy (BLE) proximity checks to route the credential offer securely to the user's mobile device
- [chrome.com](https://developer.chrome.com/blog/chrome-143-beta) *(developer.chrome.com)*
  > \* Explains cross-device desktop issuance, showing how users browsing on a laptop can seamlessly trigger issuance directly to their phone's wallet via CTAP-based pairing
- [appspot.com](https://cr-status.appspot.com/feature/6492906882990080) *(cr-status.appspot.com)*
  > Chrome Platform Status & Release Notes (Chrome 143 through 155+) \* \*\*Sources:\*\* \*developer.chrome.com\* and \*chromestatus.com\* \* Outlines ongoing work in the \*\*W3C Federated Identity Working Group (FedID WG)\*\* to transition from generic, opaque URI ex...
- [chrome.com](https://developer.chrome.com/release-notes/143) *(developer.chrome.com)*
  > Chrome Platform Status & Release Notes (Chrome 143 through 155+) \* \*\*Sources:\*\* \*developer.chrome.com\* and \*chromestatus.com\* Chrome Platform Status & Release Notes (Chrome 143 through 155+) \* \*\*Sources:\*\* \*developer.chrome.com\* and \*chromestatus.com...
- [What is the Digital Credentials API? The Developer's Guide (2026)](https://docs.walt.id/concepts/data-exchange-protocols/dc-api) *(docs.walt.id)*
  > Identity Ecosystem Developer Guides (walt.id & Credenco) \* \*\*Sources:\*\* \*walt.id Developer Documentation\* & \*Credenco Technical Deep-Dives\* Identity Ecosystem Developer Guides (walt.id & Credenco) \* \*\*Sources:\*\* \*walt.id Developer Documentation\* & \*C...
- [Digital Credentials API: Secure and private identity on the web \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-shipped) *(developer.chrome.com)*
  > \* TAG review conversations emphasized the importance of standardizing the issuance lifecycle alongside presentation to prepare for digital wallet mandates, such as the \*\*EU Digital Identity Wallet (eIDAS 2.0)\*\* and US Mobile Driver's License (mDL) de...
- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Gy-NvwoSODo/m/UYrJvdQ1BwAJ) *(groups.google.com)*
  > Intent to Experiment: Digital Credentials API (issuance support) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Digital Credent...
- [\[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14755.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 13 Oct 2025 10:08:35 -0700 Contact email...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16897.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 29 Jun 2026 03:18:14 -0700...
- [Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14837.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Mike Taylor Sat, 18 Oct 2025 00:24:03 -0700 On 10/...
- [\[blink-dev\] Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17347.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Chromestatus Wed, 02 Sep 2026 09:44:50 -0700 Contact emails \[email&#16...
- [Digital Credentials API (issuance support)](https://cr-status.appspot.com/feature/5099333963874304?gate=5199087129460736) *(cr-status.appspot.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [Digital Credentials API (issuance support) - Chrome Platform Status](https://cr-status.appspot.com/feature/5099333963874304) *(cr-status.appspot.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com · 2026-10-06T13:24:25)*
  > This Web Platform feature enables issuing websites (e.g., a university, government agency, or bank) to securely initiate the provisioning (issuance) process of digital credentials directly into a user&#x27;s mobile wallet application. On Android, thi...
- [Digital Credentials API (DC API) - Overview \| EUDI Wallet and European Business Wallet Developer Docs and APIs \| iGrant.io](https://docs.igrant.io/docs/openID4vc-dcapi-overview) *(docs.igrant.io · 2026-07-27T13:02:03)*
  > Why adopt it despite the rough edges: The DC API brings real benefits: &lt;strong&gt;in-browser, phishing-resistant presentation with no redirect, browser and OS mediation, and selective disclosure&lt;/strong&gt;.
- [Intent to Extend Experiment: Digital Credential API](https://groups.google.com/a/chromium.org/g/blink-dev/c/GBjkRkSKI9c/m/S0Bje3PRCAAJ) *(groups.google.com)*
  > Mozilla feedback from Martin (also on the TAG) suggests we need to invest more in the threat model for the larger space and clarify specific privacy mitigations before shipping or requesting TAG review.
- [Methods \| Vidos](https://vidos.id/docs/explanations/standards/w3c/digital-credentials/api-methods) *(vidos.id)*
  > Section titled “Presentation request (navigator.credentials.get)” · A presentation request uses CredentialRequestOptions.digital with one or more DigitalCredentialGetRequest items: ... Issuance uses CredentialCreationOptions.digital with one or more ...
- [Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17408.html) *(mail-archive.com)*
  > Sparkasse will issue their customers an 18+ age credential from their website based on verified information with the bank to Google Wallet, that can be used online to prove their adulthood with websites and apps online \*Chromium Trial Name\* WebIdenti...
- [\[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17389.html) *(mail-archive.com)*
  > &gt; &gt; \*Initial public proposal\* &gt; https://w3c-fedid.github.io/digital-credentials/ &gt; &gt; \*TAG review\* &gt; https://github.com/w3ctag/design-reviews/issues/1119 &gt; &gt; \*TAG review status\* &gt; Issues addressed &gt; &gt; \*Origin Trial Nam...
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17307.html) *(mail-archive.com)*
  > One of the initial use cases of &gt;&gt;&gt; digital credentials issuance via the origin trial will be the &lt;strong&gt;Sparkasse age &gt;&gt;&gt; credential in Google Wallet&lt;/strong&gt;. Sparkasse is a network of regional German &gt;&gt;&gt; savings banks w...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17272.html) *(mail-archive.com)*
  > Gecko: Negative (https://githu... is shipped, but timeline for adding issuance support yet. Web developers: No signals Other signals: Activation The primary activation concern is enabling existing deployments using technology like OpenID4VCI to be ab...
- [Digital Credentials API (2026): Chrome, Safari & Firefox](https://www.corbado.com/blog/digital-credentials-api) *(corbado.com)*
  > Digital Credentials API (2026): Chrome, Safari & Firefox Free The +45-page Authentication Analytics Whitepaper — measuring real login journeys Download Back to Overview Copy Page Copy Page Copied 🇬🇧 En English Digital Credentials API (2026): Chrome...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Gy-NvwoSODo/m/UYrJvdQ1BwAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Intent to Experiment: Digital Credentials API (issuance support) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Digit...
- [\[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14755.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 13 Oct 2025 10:08:35 -0700 Con...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16897.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 29 Jun 2026 03:1...
- [Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14837.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Mike Taylor Sat, 18 Oct 2025 00:24:03 -0...
- [\[blink-dev\] Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17347.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Chromestatus Wed, 02 Sep 2026 09:44:50 -0700 Contact emails ...
- [digital-credentials/index.html at main · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/blob/main/index.html) *(github.com)* *(Cites: `https://w3c-fedid.github.io/digital-credentials`)*
  > shortName: &quot;digital-credentials&quot;,       specStatus: &quot;ED&quot;,       edDraftURI: &quot;https://&lt;strong&gt;w3c-fedid.github.io/digital-credentials&lt;/strong&gt;/&quot;,       group: &quot;fedid&quot;,       github: &quot;https://githu...

## 📚 Platform Documentation & Specifications

- [w3.org](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1119) *(tag-github-bot.w3.org)*
- [GitHub - w3c-fedid/digital-credentials: Digital Credentials API · GitHub](https://github.com/w3c-fedid/digital-credentials) *(github.com)*
- [Digital Credentials](https://www.w3.org/TR/digital-credentials) *(w3.org)*
- [w3.org](https://www.w3.org/TR/2025/WD-digital-credentials-20251006) *(w3.org)*
- [digital-credentials/index.html at main · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/blob/main/index.html) *(github.com)*
- [digital-credentials/explainer.md at main · w3c-fedid/digital-credentials](https://github.com/WICG/digital-credentials/blob/main/explainer.md) *(github.com)*
- [W3C Digital Credentials API publication: the next step to privacy-preserving identities on the web \| 2025 \| Blog \| W3C](https://www.w3.org/blog/2025/w3c-digital-credentials-api-publication-the-next-step-to-privacy-preserving-identities-on-the-web) *(w3.org)*
- [Digital Credentials & Payments Tim Cappalli & Ian Jacobs TPAC 2024](https://www.w3.org/2024/Talks/TPAC/digital-credentials-payments-20240923.pdf) *(w3.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 61 result(s) found across 12 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/5099333963874304" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/w3c-fedid/digital-credentials/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"w3c-fedid.github.io/digital-credentials" -site:w3c-fedid.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Digital Credentials API (issuance support)" API` — *Core feature API query* (2 returned)
  - `"Digital Credentials API (issuance support)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"cross-device" OR "(issuance" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Digital Credentials API (issuance support)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Digital Credentials API (issuance support)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (2 returned)
  - `"Digital Credentials API" (issuance OR provisioning) ("developer guide" OR tutorial OR "getting started")` — *Finds developer-focused tutorials and guides for issuing credentials via the Digital Credentials API* (7 returned)
  - `"Digital Credentials API" (issue OR issuance) ("navigator.credentials.create" OR "navigator.identity")` — *Discovers real-world JavaScript code snippets and WebIDL dictionary usage for credential issuance* (8 returned)
  - `"Digital Credentials" issuance ("Intent to Prototype" OR "Intent to Ship" OR "Origin Trial")` — *Tracks browser vendor status, feature flags, and official shipment timelines in Chromium and WebKit* (8 returned)
  - `"Digital Credentials API" (wallet OR issuance) ("W3C FedID" OR "OpenID4VCI") (discussion OR feedback OR privacy)` — *Surfaces community debates, standards group discussions, and architectural feedback regarding wallet provisioning* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **15 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 7 result(s) found — **6 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 10 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5099333963874304)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5099333963874304)
- [Specification](https://w3c-fedid.github.io/digital-credentials)
- [Chromium Tracking Bug](https://crbug.com/378330032)
