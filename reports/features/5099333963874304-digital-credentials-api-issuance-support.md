# Digital Credentials API (issuance support)

> **Report Week:** 2026-W44 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

This Web Platform feature enables issuing websites (e.g., a university, government agency, or bank) to securely initiate the provisioning (issuance) process of digital credentials directly into a user's mobile wallet application. On Android, this capability leverages the Android IdentityCredential CredMan system (Credential Manager). On Desktop, it leverages cross-device approaches using the CTAP protocol similar to Digital Credentials presentation.

### Motivation

Without this, websites and wallets can only communicate in ways that are more opaque to the browser and OS.

## Ecosystem Status

- **Momentum:** High (footprint 403 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Digital Credentials API issuance capability expands browser-mediated credential provisioning, allowing issuers to push digital credentials directly into native mobile wallets via protocols like OpenID4VCI without relying on brittle custom URI schemes or QR workarounds. Enabled by default in Chrome 155 through Android's Credential Manager and cross-device CTAP flows, it marks a key milestone for digital identity on the web, particularly within the EUDI Wallet and banking sectors. However, true cross-engine interoperability remains distant due to divergent engine positions and fragmented wallet bindings.

### Recommendations
- Actionable Advice: Treat the Digital Credentials API issuance flow as a progressive enhancement on supported Android and Chromium environments while retaining established fallback mechanisms, such as OpenID4VCI authorization code redirects or Universal Links. Abstract your issuance payload layer so you can adapt quickly to evolving W3C Federated Identity Working Group specs and multi-wallet format requirements.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Update on Venue: https://github.com/w3c/strategy/issues/450  We also made strides on the OpenID / request format...."
- Standards Activity (Mozilla): Latest discussion from @RByers: "Hey Mozilla folks, is there anything you can share here about your position on the use of custom schemes like openid4vp://? Today Firefox allows infor..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Webサイトからデジタル身分証をウォレットアプリへ直接追加できる "Digital Credentials API" の発行機能（issuance）が、Chrome 155よりデフォルトで利用可能になりました。 https://t.co/v" (5 points, 0 comments).

## Standards Positions

- **WebKit:** [Digital Credentials API](https://github.com/WebKit/standards-positions/issues/332) [closed]
- **Mozilla:** [Digital Credentials](https://github.com/mozilla/standards-positions/issues/1003) [closed]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Webサイトからデジタル身分証をウォレットアプリへ直接追加できる "Digital Credentials API" の発行機能（issuance）が、Chrome 155よりデフォルトで利用可能になりました。 https://t.co/v](https://twitter.com/agektmr/status/2114654605275697615) — *by @agektmr, 5 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Digital Credentials API for credential issuance \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-143-issuance-ot) *(developer.chrome.com)*
  > The \*\*Digital Credentials API (Issuance Support)\*\* expands the browser’s Credential Management API to allow issuing entities (such as universities, banks, and government agencies) to provision verifiable credentials directly into a user’s native wall...
- [Digital Credentials API issuance ships in Chrome 155 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-issuance?hl=en) *(developer.chrome.com)*
  > The \*\*Digital Credentials API (Issuance Support)\*\* expands the browser’s Credential Management API to allow issuing entities (such as universities, banks, and government agencies) to provision verifiable credentials directly into a user’s native wall...
- [digitalcredentials.dev](https://digitalcredentials.dev/docs/concepts/layering) *(digitalcredentials.dev)*
  > create()\`, the browser communicates with the underlying operating system (such as Android’s Credential Manager) on mobile or hands off the operation to a mobile device from desktop via CTAP/BLE \*\*Summary:\*\* Digital credentials developer guidelines, m...
- [About digital credentials \| Identity \| Android Developers](https://developer.android.com/identity/digital-credentials) *(developer.android.com)*
  > \*\*Summary:\*\* The Android engineering team detailed the OS side of the equation via the \*\*Credential Manager\*\* (\`IdentityCredential\`) system \*\*Protocols & UI:\*\* Android natively handles \*\*OpenID4VCI\*\* (OpenID for Verifiable Credential Issuance) alongs...
- [googleblog.com](https://android-developers.googleblog.com/2025/04/announcing-android-support-of-digital-credentials.html) *(android-developers.googleblog.com)*
  > \*\*Summary:\*\* The Android engineering team detailed the OS side of the equation via the \*\*Credential Manager\*\* (\`IdentityCredential\`) system \*\*Protocols & UI:\*\* Android natively handles \*\*OpenID4VCI\*\* (OpenID for Verifiable Credential Issuance) alongs...
- [digitalcredentials.dev](https://digitalcredentials.dev/docs/intro) *(digitalcredentials.dev)*
  > \*\*Summary:\*\* Digital credentials developer guidelines, maintained by the W3C Web Identity & Credentials Adoption Community Group, document both presentation and issuance flows
- [What is the Digital Credentials API? The Developer's Guide (2026)](https://docs.walt.id/concepts/data-exchange-protocols/dc-api) *(docs.walt.id)*
  > \*\*The Problem Solved:\*\* Identity vendors highlight that prior to this API, web issuance lived in an awkward gap: relying parties and wallets used QR-code scans, custom URL handlers, or proprietary SDKs \*\*The Developer Benefit:\*\* Bringing OpenID4VCI u...
- [mattr.global](https://mattr.global/resources/articles/moving-beyond-wallet-selection-how-the-digital-credentials-api-can-streamline-digital-credential-workflows) *(mattr.global)*
  > \*\*The Problem Solved:\*\* Identity vendors highlight that prior to this API, web issuance lived in an awkward gap: relying parties and wallets used QR-code scans, custom URL handlers, or proprietary SDKs This often resulted in the “NASCAR problem,” whe...
- [Digital Credentials API (2026): Chrome, Safari & Firefox](https://www.corbado.com/blog/digital-credentials-api) *(corbado.com)*
  > \*\*Multi-Engine Alignment:\*\* Ecosystem analysts note that while Chrome has pushed full native support for both issuance and presentation (supporting OpenID4VCI, OpenID4VP, and ISO 18013-7), Safari initially prioritized native mdoc presentation flows w...
- [chromestatus.com](https://chromestatus.com/feature/5166035265650688?gate=4935882011836416) *(chromestatus.com)*
  > \*\*Multi-Engine Alignment:\*\* Ecosystem analysts note that while Chrome has pushed full native support for both issuance and presentation (supporting OpenID4VCI, OpenID4VP, and ISO 18013-7), Safari initially prioritized native mdoc presentation flows w...
- [chrome.com](https://developer.chrome.com/blog/digital-credentials-api-shipped) *(developer.chrome.com)*
  > Technical case studies (highlighted in Chrome’s release documentation) feature European financial entities like Germany's \*\*Sparkasse\*\*, using the API to issue cryptographically verified age and identity credentials directly into Google Wallet for co...
- [Digital Credentials API issuance ships in Chrome 155 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-issuance) *(developer.chrome.com)*
  > Technical case studies (highlighted in Chrome’s release documentation) feature European financial entities like Germany's \*\*Sparkasse\*\*, using the API to issue cryptographically verified age and identity credentials directly into Google Wallet for co...
- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Gy-NvwoSODo/m/UYrJvdQ1BwAJ) *(groups.google.com)*
  > Intent to Experiment: Digital Credentials API (issuance support) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Digital Credent...
- [Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14883.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Mike Taylor Sat, 18 Oct 2025 09:56:56 -0700 Could ...
- [\[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14755.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 13 Oct 2025 10:08:35 -0700 Contact email...
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16188.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Vladimir Levin Wed, 25 Mar 2026 08:2...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16897.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 29 Jun 2026 03:18:14 -0700...
- [Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17416.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Rick Byers Wed, 09 Sep 2026 08:28:33 -0700 On Wed, Sep...
- [\[blink-dev\] Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17347.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Chromestatus Wed, 02 Sep 2026 09:44:50 -0700 Contact emails \[email&#16...
- [\[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17389.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Rick Byers Tue, 08 Sep 2026 12:12:05 -0700 FWIW I am recused f...
- [Digital Credentials API (issuance support) - Chrome Platform Status](https://chromestatus.com/feature/5099333963874304?gate=5147243652972544) *(chromestatus.com · 2026-09-09T00:00:00)*
  > We cannot provide a description for this page right now
- [Digital Credentials API (issuance support)](https://cr-status.appspot.com/feature/5099333963874304?gate=5199087129460736) *(cr-status.appspot.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [Digital Credentials API (issuance support) - Chrome Platform Status](https://img536-dot-cr-status.appspot.com/feature/5099333963874304) *(img536-dot-cr-status.appspot.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [Digital Credentials API](https://docs.walt.id/community-stack/mobile-wallet/digital-credentials-api) *(docs.walt.id · 2026-09-29T00:00:00)*
  > Platform Digital Credentials support — Android Credential Manager for get/create; iOS Identity Document Services for ISO 18013-7 presentation. Check wallet.digitalCredentialCapabilities() at runtime. Registration can fail independently of wallet load...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com · 2026-10-06T00:00:00)*
  > This Web Platform feature enables issuing websites (e.g., a university, government agency, or bank) to securely initiate the provisioning (issuance) process of digital credentials directly into a user&#x27;s mobile wallet application. On Android, thi...
- [Digital Credentials API for credential issuance \| daily.dev](https://daily.dev/posts/digital-credentials-api-for-credential-issuance-tpov6wf4y) *(daily.dev · 2025-11-28T15:55:48)*
  > Chrome 143 introduces an origin trial for the Digital Credentials API issuance feature, &lt;strong&gt;enabling websites to provision digital credentials directly to users&#x27; preferred wallet apps&lt;/strong&gt;.
- [Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17408.html) *(mail-archive.com)*
  > Sparkasse will issue their customers an 18+ age credential from their website based on verified information with the bank to Google Wallet, that can be used online to prove their adulthood with websites and apps online \*Chromium Trial Name\* WebIdenti...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Gy-NvwoSODo/m/UYrJvdQ1BwAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Intent to Experiment: Digital Credentials API (issuance support) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Digit...
- [Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14883.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Mike Taylor Sat, 18 Oct 2025 09:56:56 -0...
- [\[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14755.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 13 Oct 2025 10:08:35 -0700 Con...
- [design-reviews#1119: Digital Credentials API](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1119&gsessionid=kG1WGFITI13cWFJ7j_vXRvEdPXzaeeydGBeGx3I3n6cakZ00RNVH4w) *(tag-github-bot.w3.org)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Marcos: Official explainer is at https://&lt;strong&gt;github.com/w3c-fedid/digital-credentials/blob/main/explainer.md&lt;/strong&gt;
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16188.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Vladimir Levin Wed, 25 Mar...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16897.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 29 Jun 2026 03:1...
- [Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17416.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Rick Byers Wed, 09 Sep 2026 08:28:33 -0700 O...
- [\[blink-dev\] Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17347.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Chromestatus Wed, 02 Sep 2026 09:44:50 -0700 Contact emails ...
- [\[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17389.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Rick Byers Tue, 08 Sep 2026 12:12:05 -0700 FWIW I am...
- [digital-credentials/index.html at main · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/blob/main/index.html) *(github.com)* *(Cites: `https://w3c-fedid.github.io/digital-credentials`)*
  > shortName: &quot;digital-credentials&quot;,       specStatus: &quot;ED&quot;,       edDraftURI: &quot;https://&lt;strong&gt;w3c-fedid.github.io/digital-credentials&lt;/strong&gt;/&quot;,       group: &quot;fedid&quot;,       github: &quot;https://githu...

## 📚 Platform Documentation & Specifications

- [Digital Credentials](https://www.w3.org/TR/digital-credentials) *(w3.org)*
- [github.com](https://github.com/mozilla/standards-positions/issues/1003) *(github.com)*
- [github.com](https://github.com/WICG/digital-credentials/blob/main/explainer.md) *(github.com)*
- [design-reviews#1119: Digital Credentials API](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1119&gsessionid=kG1WGFITI13cWFJ7j_vXRvEdPXzaeeydGBeGx3I3n6cakZ00RNVH4w) *(tag-github-bot.w3.org)*
- [digital-credentials/index.html at main · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/blob/main/index.html) *(github.com)*
- [GitHub - w3c-fedid/digital-credentials: Digital Credentials API · GitHub](https://github.com/w3c-fedid/digital-credentials) *(github.com)*
- [Add OpenID for Verifiable Credential Issuance (OpenID4VCI) to registry · Issue #212 · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/issues/212) *(github.com)*
- [Requirements and Objectives · Issue #52 · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/issues/52) *(github.com)*
- [clientData (26H2 edition) · Issue #574 · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/issues/574) *(github.com)*
- [Support for issuance · Issue #167 · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/issues/167) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 62 result(s) found across 12 planned queries — **29 verified relevant**
  - `"chromestatus.com/feature/5099333963874304" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/w3c-fedid/digital-credentials/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"w3c-fedid.github.io/digital-credentials" -site:w3c-fedid.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Digital Credentials API (issuance support)" API` — *Core feature API query* (3 returned)
  - `"Digital Credentials API (issuance support)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"cross-device" OR "(issuance" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Digital Credentials API (issuance support)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Digital Credentials API (issuance support)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (2 returned)
  - `"Digital Credentials API" ("issuance" OR "provisioning") "navigator.credentials"` — *Finds code samples and WebIDL usage patterns demonstrating digital credential issuance using the Credential Management API.* (8 returned)
  - `"Digital Credentials" ("issuance" OR "provisioning") wallet (guide OR tutorial OR "how to")` — *Surfaces practical tutorials and developer guides for issuing digital credentials from websites into mobile wallets.* (8 returned)
  - `"Digital Credentials" "issuance" ("intent to prototype" OR "intent to ship" OR "origin trial" OR "Chrome")` — *Tracks browser vendor status, platform roadmaps, and adoption milestones for credential issuance support.* (8 returned)
  - `"Digital Credentials" ("issuance" OR "provisioning") (site:github.com/w3c-fedid OR site:news.ycombinator.com)` — *Discovers community discussions, standards debates, and developer feedback around wallet provisioning flows.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **15 verified relevant**
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
