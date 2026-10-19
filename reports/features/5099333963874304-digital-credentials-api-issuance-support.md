# Digital Credentials API (issuance support)

> **Report Week:** 2026-W43 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

This Web Platform feature enables issuing websites (e.g., a university, government agency, or bank) to securely initiate the provisioning (issuance) process of digital credentials directly into a user's mobile wallet application. On Android, this capability leverages the Android IdentityCredential CredMan system (Credential Manager). On Desktop, it leverages cross-device approaches using the CTAP protocol similar to Digital Credentials presentation.

### Motivation

Without this, websites and wallets can only communicate in ways that are more opaque to the browser and OS.

## Ecosystem Status

- **Momentum:** High (footprint 380 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Digital Credentials API (issuance support) extends browser-mediated identity handling to allow issuing bodies like universities and banks to provision credentials directly into user mobile wallets. Currently rolling out in Chrome (targeting Milestone 155), it relies heavily on native mobile infrastructure like Android's Credential Manager and OpenID4VCI protocols, though it lacks cross-browser interoperability and Baseline status.

### Recommendations
- Actionable Advice: Web development teams should treat this feature as strictly experimental, using it only behind flags or via feature detection while maintaining fallback flows (such as traditional deep links or QR codes) for users on Firefox, Safari, and older browser versions.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Update on Venue: https://github.com/w3c/strategy/issues/450  We also made strides on the OpenID / request format...."
- Standards Activity (Mozilla): Latest discussion from @RByers: "Hey Mozilla folks, is there anything you can share here about your position on the use of custom schemes like openid4vp://? Today Firefox allows infor..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Digital Credentials API](https://github.com/WebKit/standards-positions/issues/332) [closed]
- **Mozilla:** [Digital Credentials](https://github.com/mozilla/standards-positions/issues/1003) [closed]

## 📰 Ecosystem Blogs & Articles

- [Digital Credentials API for credential issuance \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-143-issuance-ot) *(developer.chrome.com)*
  > The \*\*Digital Credentials API (issuance support)\*\* is an evolving web platform capability that streamlines how issuing entities (such as universities, banks, or government bodies) provision digital credentials directly into a user's mobile wallet app...
- [android.com](https://developer.android.com/identity/digital-credentials/credential-issuer/issue-credentials) *(developer.android.com)*
  > On mobile environments like Android, this leverages the \*\*Android IdentityCredential/Credential Manager\*\* system create()\` with protocols like OpenID4VCI, issuers can cleanly invoke device-level system sheets so users can choose a preferred wallet ap...
- [googleblog.com](https://android-developers.googleblog.com/2025/04/announcing-android-support-of-digital-credentials.html) *(android-developers.googleblog.com)*
  > \*\*Focus:\*\* Ecosystem-wide alignment on mobile operating system level support for open identity standards (OpenID4VP for presentation and OpenID4VCI for issuance) \*\*Key Takeaway:\*\* Explains how Android’s Jetpack Credential Manager bridges native appli...
- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Gy-NvwoSODo/m/UYrJvdQ1BwAJ) *(groups.google.com)*
  > Intent to Experiment: Digital Credentials API (issuance support) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Digital Credent...
- [Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14883.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Mike Taylor Sat, 18 Oct 2025 09:56:56 -0700 Could ...
- [\[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14755.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 13 Oct 2025 10:08:35 -0700 Contact email...
- [Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17416.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Rick Byers Wed, 09 Sep 2026 08:28:33 -0700 On Wed, Sep...
- [\[blink-dev\] Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17347.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Chromestatus Wed, 02 Sep 2026 09:44:50 -0700 Contact emails \[email&#16...
- [Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14837.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Mike Taylor Sat, 18 Oct 2025 00:24:03 -0700 On 10/...
- [Digital Credentials](https://simoneonofri.github.io/digital-credentials) *(simoneonofri.github.io)*
  > https://&lt;strong&gt;w3c-fedid.github.io/digital-credentials&lt;/strong&gt;/ Latest published version: https://www.w3.org/TR/digital-credentials/ Latest editor&#x27;s draft: https://&lt;strong&gt;w3c-fedid.github.io/digital-credentials&lt;/strong&gt;/ History: https://www....
- [Digital Credentials API (issuance support) - Chrome Platform Status](https://chromestatus.com/feature/5099333963874304?gate=6251005352214528) *(chromestatus.com · 2026-09-01T00:00:00)*
  > We cannot provide a description for this page right now
- [Digital Credentials API (issuance support)](https://cr-status.appspot.com/feature/5099333963874304?gate=5199087129460736) *(cr-status.appspot.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [What is the Digital Credentials API? The Developer's Guide (2026)](https://docs.walt.id/concepts/data-exchange-protocols/dc-api) *(docs.walt.id · 2026-08-24T00:00:00)*
  > Formally, the W3C Digital Credentials API is a JavaScript API that enables user agents (browsers) to mediate presentation and issuance of digital credentials (such as mobile IDs, mDLs, or verifiable credentials). It: Builds on Credential Management L...
- [About digital credentials \| Identity \| Android Developers](https://developer.android.com/identity/digital-credentials) *(developer.android.com · 2026-09-16T00:00:00)*
  > Issuance: &lt;strong&gt;Digital credentials are issued using the OpenID4VCI standard&lt;/strong&gt;.
- [Step 3: Integrate as a Relying Party \| Verify with Google Wallet \| Google for Developers](https://developers.google.com/wallet/identity/verify/accepting-ids-from-wallet-online) *(developers.google.com · 2026-10-05T00:00:00)*
  > This guide explains how Direct Relying Parties (RPs)—individual merchants, businesses, and app developers—integrate the Digital Credentials API to request and validate digital identity credentials across Android apps and the web.
- [Digital Credentials API](https://docs.walt.id/community-stack/mobile-wallet/digital-credentials-api) *(docs.walt.id · 2026-09-29T00:00:00)*
  > Platform Digital Credentials support — Android Credential Manager for get/create; iOS Identity Document Services for ISO 18013-7 presentation. Check wallet.digitalCredentialCapabilities() at runtime. Registration can fail independently of wallet load...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com · 2026-10-06T00:00:00)*
  > This Web Platform feature enables issuing websites (e.g., a university, government agency, or bank) to securely initiate the provisioning (issuance) process of digital credentials directly into a user&#x27;s mobile wallet application. On Android, thi...
- [Digital Credentials API (DC API) - Overview \| EUDI Wallet and European Business Wallet Developer Docs and APIs \| iGrant.io](https://docs.igrant.io/docs/openID4vc-dcapi-overview) *(docs.igrant.io · 2026-07-27T13:02:03)*
  > Why adopt it despite the rough edges: The DC API brings real benefits: &lt;strong&gt;in-browser, phishing-resistant presentation with no redirect, browser and OS mediation, and selective disclosure&lt;/strong&gt;.
- [Digital ID is going mainstream in 2026](https://www.authsignal.com/blog/articles/digital-id-is-going-mainstream-in-2026) *(authsignal.com · 2026-05-18T03:04:58)*
  > &lt;strong&gt;In late April 2026, Google added Aadhaar Verifiable Credentials to Google Wallet for India&lt;/strong&gt;. Around the same time, Chrome 141 and iOS 26 both shipped the W3C Digital Credentials API, and the EU confirmed its end-of-year deadline for e...
- [Intent to Extend Experiment: Digital Credential API](https://groups.google.com/a/chromium.org/g/blink-dev/c/GBjkRkSKI9c) *(groups.google.com)*
  > Mozilla feedback from Martin (also on the TAG) suggests we need to invest more in the threat model for the larger space and clarify specific privacy mitigations before shipping or requesting TAG review.
- [Digital Credentials API \| Vidos](https://vidos.id/docs/explanations/standards/w3c/digital-credentials) *(vidos.id)*
  > Issuance: an issuer site requests credential issuance via navigator.credentials.create(). In both cases, the site provides one or more protocol-specific requests. Each request contains: ... See Methods for the WebIDL structures. Section titled “The c...
- [Technical Implementation Guide - One ID Technical Implementation Guide - Confluence](https://standards.atlassian.net/wiki/spaces/OneID/pages/2947416082/Technical+Implementation+Guide) *(standards.atlassian.net · 2026-09-30T00:00:00)*
  > This section defines the technical reference and guide for remote online presentation of the digital credentials from holder wallet to verifier. Two presentation profiles are specified, and both share a common architectural element which is \[W3C Digi...
- [How to integrate Digital Credentials into your App](https://www.digital-credentials.io/developer) *(digital-credentials.io)*
  > // Pseudocode for Issuing a W3C VC (JWT) function issueCredential(subjectData, issuerPrivateKey) { const claims = { &quot;@context&quot;: \[&quot;https://www.w3.org/2018/credentials/v1&quot;\], type: \[&quot;VerifiableCredential&quot;, &quot;YourCustomC...
- [Android \| Digital Credentials Developer](https://digitalcredentials.dev/docs/references/platforms/android) *(digitalcredentials.dev)*
  > Android does not restrict which document types a credential manager, issuer, or verifier can use with the Digital Credentials API (web or native) or the credential manager APIs (for wallets).
- [Credenceid](https://credenceid.com/resources/developer-documentation/wallet-issuance/sdk-integration) *(credenceid.com)*
  > &lt;strong&gt;Verify the device is running Android API 29+ and Chrome 128+&lt;/strong&gt;. Confirm Google Play Services is up to date. Ensure at least one credential has been provisioned with VALID status — the SDK only registers VALID credentials with Credentia...
- [Digital Credentials API for credential issuance \| daily.dev](https://daily.dev/posts/digital-credentials-api-for-credential-issuance-tpov6wf4y) *(daily.dev · 2025-11-28T15:55:48)*
  > &lt;strong&gt;Chrome 143 introduces an origin trial for the Digital Credentials API issuance feature&lt;/strong&gt;, enabling websites to provision digital credentials directly to users&#x27; preferred wallet apps.
- [\[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17389.html) *(mail-archive.com)*
  > Rick On &lt;strong&gt;Wed, Sep 2, 2026 at 12:41&lt;/strong&gt; ... https://w3c-fedid.github.io/digital-credentials &gt; &gt; \*Summary\* &gt; This Web Platform feature enables issuing websites (e.g., a university, &gt; government agency, or bank) to securely initi...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17272.html) *(mail-archive.com)*
  > Reason this experiment is being extended Partners made great progress and they are shipping a use case that is using the API, and this should be enough signal to ship the DC API Issuance support in Chrome. However, there is one pending issue https://...
- [Topic F - Digital Credentials API - European Digital Identity](https://eudi.dev/latest/discussion-topics/f-digital-credential-api) *(eudi.dev · 2025-11-06T00:00:00)*
  > Table for support on Issuance (expected rapid changes, as draft evolves) Yes, some EUDI discussions profile the Digital Credentials API alongside OpenID4VP and ISO 18013-7 remote flows, treating it as a secure transport/mediation layer (with strong v...
- [What is the DC API? Mechanisms, Browser Support, and Future Trends｜VESS Labs](https://note.com/vesslabs/n/nce6ee40f7b27?hl=en) *(note.com · 2026-05-08T04:38:46)*
  > The web standard that supports these experiences is the Digital Credentials API (DC API). With Chrome 141 and Safari 26 reaching stable release in September 2025, the mechanism for browsers to interact directly with digital wallets has entered the im...
- [Digital Credentials API: Balancing Usability and Privacy \| Gataca](https://gataca.io/resources/blog/digital-credential-api) *(gataca.io · 2025-03-31T10:33:47)*
  > Additionally, beyond privacy another long-term structural concern looms: &lt;strong&gt;the risk of vendor lock-in&lt;/strong&gt;. Since browsers are controlled by Big Tech companies and will inevitably drive usability improvements, this approach is likely to bec...
- [Digital Credentials \| FIDO Alliance](https://fidoalliance.org/fido-alliance-digital-credentials) *(fidoalliance.org · 2025-12-05T01:15:56)*
  > Seth Dobbs, President &amp; CEO, the World Wide Web Consortium (W3C) said, “It will take the cooperation of many to address the challenges and opportunities of Digital Identities on the Web. The W3C Verifiable Credentials and Digital Credentials API ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Gy-NvwoSODo/m/UYrJvdQ1BwAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Intent to Experiment: Digital Credentials API (issuance support) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Digit...
- [Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14883.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Mike Taylor Sat, 18 Oct 2025 09:56:56 -0...
- [\[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14755.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 13 Oct 2025 10:08:35 -0700 Con...
- [Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17416.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Rick Byers Wed, 09 Sep 2026 08:28:33 -0700 O...
- [\[blink-dev\] Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17347.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Chromestatus Wed, 02 Sep 2026 09:44:50 -0700 Contact emails ...
- [Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14837.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Mike Taylor Sat, 18 Oct 2025 00:24:03 -0...
- [eudi-doc-architecture-and-reference-framework/docs/discussion-topics/f-digital-credential-api.md at main · eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/blob/main/docs/discussion-topics/f-digital-credential-api.md) *(github.com)* *(Cites: `https://w3c-fedid.github.io/digital-credentials`)*
  > Digital Credentials, Draft Community Group Report, 20 February 2025, available at https://&lt;strong&gt;w3c-fedid.github.io/digital-credentials&lt;/strong&gt;/
- [Digital Credentials](https://simoneonofri.github.io/digital-credentials) *(simoneonofri.github.io)* *(Cites: `https://w3c-fedid.github.io/digital-credentials`)*
  > https://&lt;strong&gt;w3c-fedid.github.io/digital-credentials&lt;/strong&gt;/ Latest published version: https://www.w3.org/TR/digital-credentials/ Latest editor&#x27;s draft: https://&lt;strong&gt;w3c-fedid.github.io/digital-credentials&lt;/strong&gt;/ History: ht...

## 📚 Platform Documentation & Specifications

- [eudi-doc-architecture-and-reference-framework/docs/discussion-topics/f-digital-credential-api.md at main · eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/blob/main/docs/discussion-topics/f-digital-credential-api.md) *(github.com)*
- [W3C Digital Credentials API publication: the next step to privacy-preserving identities on the web \| 2025 \| Blog \| W3C](https://www.w3.org/blog/2025/w3c-digital-credentials-api-publication-the-next-step-to-privacy-preserving-identities-on-the-web) *(w3.org)*
- [Topic F: Digital Credentials API (former known as browser API) · eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework · Discussion #361](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/discussions/361) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 55 result(s) found across 12 planned queries — **33 verified relevant**
  - `"chromestatus.com/feature/5099333963874304" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/w3c-fedid/digital-credentials/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"w3c-fedid.github.io/digital-credentials" -site:w3c-fedid.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Digital Credentials API (issuance support)" API` — *Core feature API query* (2 returned)
  - `"Digital Credentials API (issuance support)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"cross-device" OR "(issuance" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Digital Credentials API (issuance support)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (7 returned)
  - `"Digital Credentials API (issuance support)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (2 returned)
  - `"Digital Credentials API" issuance tutorial OR guide` — *Finds practical developer guides and tutorials on how to implement digital credential issuance.* (8 returned)
  - `"Digital Credentials API" Credential Manager Android issuance code example` — *Searches for real-world JavaScript code and WebIDL usage involving Android CredMan and issuance.* (8 returned)
  - `"Digital Credentials API" issuance "W3C" OR Android CredMan announcement` — *Discovers official announcements, ecosystem updates, and spec discussions regarding credential issuance.* (8 returned)
  - `"Digital Credentials API" browser support issuance sentiment OR discussion` — *Gauges developer and community sentiment, feedback, and discussions about the issuance feature.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 6 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 10 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5099333963874304)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5099333963874304)
- [Specification](https://w3c-fedid.github.io/digital-credentials)
- [Chromium Tracking Bug](https://crbug.com/378330032)
