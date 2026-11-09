# Digital Credentials API (issuance support)

> **Report Week:** 2026-W46 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

This Web Platform feature enables issuing websites (e.g., a university, government agency, or bank) to securely initiate the provisioning (issuance) process of digital credentials directly into a user's mobile wallet application. On Android, this capability leverages the Android IdentityCredential CredMan system (Credential Manager). On Desktop, it leverages cross-device approaches using the CTAP protocol similar to Digital Credentials presentation.

### Motivation

Without this, websites and wallets can only communicate in ways that are more opaque to the browser and OS.

## Ecosystem Status

- **Momentum:** Emerging (+60 points since 2026-10-12; footprint 440 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Digital Credentials API issuance capability expands browser mediation beyond credential presentation to issuance via navigator.credentials.create(), shipping enabled by default in Chrome 155 on Android and desktop cross-device configurations. By leveraging native credential management systems like Android Credential Manager, the feature standardizes push provisioning for government IDs, mobile driver's licenses, and academic attestations. However, complete web ecosystem adoption remains gated by divergent engine consensus and ongoing concerns regarding digital identity tracking on the web.

### Recommendations
- Actionable Advice: Implement digital credential issuance strictly as a progressive enhancement by feature-detecting the digital property in navigator.credentials.create() while maintaining fallback redirect flows and QR-code-based issuance. Align payloads with open standards such as OpenID for Verifiable Credential Issuance (OpenID4VCI) to minimize refactoring as cross-browser semantics stabilize.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Update on Venue: https://github.com/w3c/strategy/issues/450  We also made strides on the OpenID / request format...."
- Standards Activity (Mozilla): Latest discussion from @RByers: "Hey Mozilla folks, is there anything you can share here about your position on the use of custom schemes like openid4vp://? Today Firefox allows infor..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers в X: „Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh“ / X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Digital Credentials API](https://github.com/WebKit/standards-positions/issues/332) [closed]
- **Mozilla:** [Digital Credentials](https://github.com/mozilla/standards-positions/issues/1003) [closed]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers в X: „Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh“ / X](https://x.com/ChromiumDev/status/2105325011116646507?lang=bg) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Digital Credentials API issuance ships in Chrome 155  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-issuance) *(developer.chrome.com)*
  > The \*\*Digital Credentials API (issuance support)\*\* expands the W3C Digital Credentials specification The \*\*Digital Credentials API (issuance support)\*\* expands the W3C Digital Credentials specification—originally focused on credential presentation/ve...
- [daily.dev](https://daily.dev/posts/digital-credentials-api-secure-and-private-identity-on-the-web-lt5j5nrqr) *(daily.dev)*
  > The \*\*Digital Credentials API (issuance support)\*\* expands the W3C Digital Credentials specification—originally focused on credential presentation/verification via \`navigator.credentials.get()\`
- [credenco.com](https://www.credenco.com/glossary/digital-credentials-api) *(credenco.com)*
  > The \*\*Digital Credentials API (issuance support)\*\* expands the W3C Digital Credentials specification—originally focused on credential presentation/verification via \`navigator.credentials.get()\` The \*\*Digital Credentials API (issuance support)\*\* expan...
- [Digital Credentials API for credential issuance  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-143-issuance-ot) *(developer.chrome.com)*
  > \*\*Problem Solved:\*\* Previously, "push provisioning" (adding a credential like a mobile driver's license, university ID, or bank card to a digital wallet from a website) relied on fragmented custom deep links, proprietary URI schemes, or external redi...
- [Digital Credentials API (issuance support)](https://cr-status.appspot.com/feature/5099333963874304?gate=5199087129460736) *(cr-status.appspot.com)*
  > \*\*On Android:\*\* Uses the Android Credential Manager (\`IdentityCredential\`) to prompt the user with a standardized native wallet-selection dialog
- [googleblog.com](https://android-developers.googleblog.com/2025/04/announcing-android-support-of-digital-credentials.html) *(android-developers.googleblog.com)*
  > \*\*On Android:\*\* Uses the Android Credential Manager (\`IdentityCredential\`) to prompt the user with a standardized native wallet-selection dialog \*\*Underlying Standards:\*\* Leverages open exchange protocols, prominently \*\*OpenID4VCI\*\* (OpenID for Verif...
- [digitalcredentials.dev](https://digitalcredentials.dev/docs/concepts/layering) *(digitalcredentials.dev)*
  > \*\*On Desktop:\*\* Uses cross-device transport via the \*\*FIDO CTAP 2.2\*\* protocol
- [Digital Credentials API (2026): Chrome, Safari & Firefox](https://www.corbado.com/blog/digital-credentials-api) *(corbado.com)*
  > \*\*On Desktop:\*\* Uses cross-device transport via the \*\*FIDO CTAP 2.2\*\* protocol (pairing desktop Chrome with a mobile device using QR handoff and Bluetooth Low Energy proximity checks) \*\*Articles:\*\* \*"Digital Credentials API: the W3C browser API for w...
- [android.com](https://developer.android.com/identity/digital-credentials) *(developer.android.com)*
  > \*\*Article:\*\* \*"Announcing Android support of digital credentials"\* & \*"About digital credentials \| Identity"\*
- [Digital Credentials API: Secure and private identity on the web  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-shipped) *(developer.chrome.com)*
  > \*\*Regulatory Catalyst (eIDAS 2.0):\*\* Identity industry analysts highlight that regulatory mandates in the European Union (eIDAS 2.0 / EUDI Wallet) are driving rapid adoption
- [Online Identity Verification with the Digital Credentials API \| WebKit](https://webkit.org/blog/17431/online-identity-verification-with-the-digital-credentials-api) *(webkit.org)*
  > While Chromium has pushed aggressively ahead on both presentation and issuance (via Android Credential Manager and desktop CTAP), Apple's WebKit launched presentation support in Safari for mDocs/Apple Wallet but has historically treated issuance as a...
- [chromestatus.com](https://chromestatus.com/feature/5166035265650688?gate=4935882011836416) *(chromestatus.com)*
  > Mozilla has expressed caution around real-world identity surveillance risks while participating in the standard's evolution
- [js.org](https://credo.js.org/guides/protocols/dc-api) *(credo.js.org)*
  > \*\*Protocol Agnostic:\*\* The browser acts strictly as a secure transport layer
- [\[blink-dev\] Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17347.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Chromestatus Wed, 02 Sep 2026 09:44:50 -0700 Contact emails \[email&#16...
- [Intent to Extend Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/bskHkIrjjms) *(groups.google.com)*
  > Intent to Extend Experiment: Digital Credentials API (issuance support) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: D...
- [Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14883.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Mike Taylor Sat, 18 Oct 2025 09:56:56 -0700 Could ...
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16925.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Mohamed Amir Yosef Mon, 06 Jul 2026 ...
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16188.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Vladimir Levin Wed, 25 Mar 2026 08:2...
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16941.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Alex Russell Wed, 08 Jul 2026 08:17:...
- [Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17408.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Mike Taylor Wed, 09 Sep 2026 08:07:51 -0700 LGTM1 On 9...
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17278.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Alex Russell Mon, 24 Aug 2026 12:03:...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16897.html) *(mail-archive.com)*
  > Explainer https://&lt;strong&gt;github.com/w3c-fedid/digital-credentials/blob/main/explainer.md&lt;/strong&gt; Specification https://w3c-fedid.github.io/digital-credentials Summary This Web Platform feature enables issuing websites (eg, a university, government ...
- [Digital Credentials API (issuance support) - Chrome Platform Status](https://chromestatus.com/feature/5099333963874304?gate=5147243652972544) *(chromestatus.com · 2026-09-09T00:00:00)*
  > We cannot provide a description for this page right now
- [Digital Credentials API (issuance support) - Chrome Platform Status](https://img536-dot-cr-status.appspot.com/feature/5099333963874304) *(img536-dot-cr-status.appspot.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [Digital Credentials API (issuance support) - Chrome Platform Status](https://cr-status.appspot.com/feature/5099333963874304) *(cr-status.appspot.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [What is the Digital Credentials API? The Developer's Guide (2026)](https://docs.walt.id/concepts/data-exchange-protocols/dc-api) *(docs.walt.id · 2026-08-24T00:00:00)*
  > Formally, the W3C Digital Credentials API is a JavaScript API that enables user agents (browsers) to mediate presentation and issuance of digital credentials (such as mobile IDs, mDLs, or verifiable credentials). It: Builds on Credential Management L...
- [Chrome 155 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2105325011116646507) *(x.com · 2026-09-30T15:48:01)*
  > Add support for multiple post-quantum ... ... This &lt;strong&gt;lets issuing websites (for example, a university, government agency, or bank) to securely initiate the provisioning (issuance) process of digital credentials&lt;/strong&gt; ......
- [Initiate provisioning  \|  Digital Credentials Provisioning API  \|  Google for Developers](https://developers.google.com/wallet/identity/provisioning/overview/initiate-provisioning-issuer-initiated) *(developers.google.com)*
  > On the web, you use the Digital Credentials API to initiate the flow. Use navigator.credentials.create() with the openid4vci1.0 protocol. issueButton.addEventListener(&#x27;click&#x27;, async () =&gt; { const protocol = &#x27;openid4vci1.0&#x27;; con...
- [Methods \| Vidos](https://vidos.id/docs/explanations/standards/w3c/digital-credentials/api-methods) *(vidos.id)*
  > Section titled “Presentation request (navigator.credentials.get)” · A presentation request uses CredentialRequestOptions.digital with one or more DigitalCredentialGetRequest items: ... Issuance uses CredentialCreationOptions.digital with one or more ...
- [\[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17389.html) *(mail-archive.com)*
  > &gt; &gt; \*Initial public proposal\* &gt; https://w3c-fedid.github.io/digital-credentials/ &gt; &gt; \*TAG review\* &gt; https://github.com/w3ctag/design-reviews/issues/1119 &gt; &gt; \*TAG review status\* &gt; Issues addressed &gt; &gt; \*Origin Trial Nam...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17272.html) *(mail-archive.com)*
  > Gecko: Negative (https://githu... is shipped, but timeline for adding issuance support yet. Web developers: No signals Other signals: Activation The primary activation concern is enabling existing deployments using technology like OpenID4VCI to be ab...
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17390.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Blink component\* &gt;&gt;&gt;&gt; Blink&gt;Identity&gt;DigitalCredentials &gt;&gt;&gt;&gt; &lt;https://issues.chromium.org/issues?q=customfield1222907:&quot;Blink&gt;Identity&gt;DigitalCredentials&quot;&gt; &gt;&gt;...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17347.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Chromestatus Wed, 02 Sep 2026 09:44:50 -0700 Contact emails ...
- [Intent to Extend Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/bskHkIrjjms) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Intent to Extend Experiment: Digital Credentials API (issuance support) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Exp...
- [Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14883.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Mike Taylor Sat, 18 Oct 2025 09:56:56 -0...
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16925.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Mohamed Amir Yosef Mon, 06...
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16188.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Vladimir Levin Wed, 25 Mar...
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16941.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Alex Russell Wed, 08 Jul 2...
- [Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17408.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Mike Taylor Wed, 09 Sep 2026 08:07:51 -0700 ...
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17278.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Alex Russell Mon, 24 Aug 2...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16897.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Explainer https://&lt;strong&gt;github.com/w3c-fedid/digital-credentials/blob/main/explainer.md&lt;/strong&gt; Specification https://w3c-fedid.github.io/digital-credentials Summary This Web Platform feature enables issuing websites (eg, a university, g...

## 📚 Platform Documentation & Specifications

- [Digital Credentials](https://www.w3.org/TR/digital-credentials) *(w3.org)*
- [github.com](https://github.com/WICG/digital-credentials/blob/main/explainer.md) *(github.com)*
- [github.com](https://github.com/w3c-fedid/digital-credentials) *(github.com)*
- [github.com](https://github.com/WICG/proposals/issues/301) *(github.com)*
- [Digital Credentials](https://www.w3.org/TR/2025/WD-digital-credentials-20251009) *(w3.org)*
- [Web Payment Security IG – 12 November 2025](https://www.w3.org/2025/11/12-wpsig-minutes.html) *(w3.org)*
- [Support receiving OpenID4VCI credential offers via navigator.credentials.create() on Android · Issue #2116 · openwallet-foundation/multipaz · GitHub](https://github.com/openwallet-foundation/multipaz/issues/2116) *(github.com)*
- [Support credential offers from the Digital Credentials API on Android. by kthrtty · Pull Request #2144 · openwallet-foundation/multipaz · GitHub](https://github.com/openwallet-foundation/multipaz/pull/2144) *(github.com)*
- [Issuance API surface: expose navigator.credentials.create() for openid4vci-v1 · Issue #20 · sirosfoundation/dc-api · GitHub](https://github.com/sirosfoundation/dc-api/issues/20) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 62 result(s) found across 12 planned queries — **31 verified relevant**
  - `"chromestatus.com/feature/5099333963874304" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"github.com/w3c-fedid/digital-credentials/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"w3c-fedid.github.io/digital-credentials" -site:w3c-fedid.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Digital Credentials API (issuance support)" API` — *Core feature API query* (5 returned)
  - `"Digital Credentials API (issuance support)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"cross-device" OR "(issuance" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Digital Credentials API (issuance support)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Digital Credentials API (issuance support)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (2 returned)
  - `"Digital Credentials API" (issuance OR provision) wallet guide OR tutorial` — *Finds developer guides and articles explaining how web applications initiate credential issuance to mobile wallets.* (8 returned)
  - `navigator.credentials.create "digital" issuance OR issue example` — *Discovers JavaScript code snippets and API call patterns demonstrating credential creation and issuance requests.* (8 returned)
  - `"Digital Credentials API" issuance ("Intent to Prototype" OR "Intent to Ship" OR "Origin Trial")` — *Tracks browser vendor implementation status, milestone announcements, and rollout timelines across Chromium and other engines.* (8 returned)
  - `"Digital Credentials" issuance (CredMan OR CTAP) site:github.com/w3c-fedid/digital-credentials/issues` — *Surfaces community feedback, technical debates, and ecosystem concerns surrounding wallet issuance architectures on GitHub.* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 18 result(s) found — **17 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 1 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 8 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 10 engineer comment(s) read
- **Web Page Excerpts Ingested:** 12 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5099333963874304)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5099333963874304)
- [Specification](https://w3c-fedid.github.io/digital-credentials)
- [Chromium Tracking Bug](https://crbug.com/378330032)
