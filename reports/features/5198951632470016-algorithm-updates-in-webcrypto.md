# Algorithm Updates in WebCrypto

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** Origin trial

## Overview

Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API. This will enable developers to have access browser-provided implementations of common quantum-resistant cryptographic algorithms standardized by NIST.  \* ML-KEM - 768, 1024 \* ML-DSA - 44, 65, 87 \* ChaCha20-Poly1305 \* X-Wing

### Motivation

Web Crypto exposes various low-level primitives, however none of the public/private key cryptography is currently quantum-resistant 

Adding quantum-resistant cryptography as a primitive to the existing WebCrypto APIs allows Javascript cryptography libraries to automatically use browser-provided cryptography (which may be more securely implemented and/or backed by a FIPS-validated underlying library), rather than compiling OpenSSL to WebAssembly or reimplementing algorithms in pure Javascript (or simply not being PQC).

Many Javascript cryptography libraries fall back to WebCrypto when it is available—these libraries will now be able to use BoringSSL-provided implementations instead of pure Javascript implementations.

## Ecosystem Status

- **Momentum:** High (327 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Algorithm Updates in WebCrypto is currently Origin trial in Chrome 151. Verified ecosystem momentum is High with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- In active Origin Trial in Chrome 151. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."
- Standards Activity (Mozilla): Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "\[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto  Web Cryptography APIで 耐量子計算機暗号（PQC）および一般的な共通鍵AEADアルゴリズムを追加しま" (14 points, 0 comments).

## Standards Positions

- **WebKit:** [Modern Algorithms in WebCrypto](https://github.com/WebKit/standards-positions/issues/641) [closed]
- **Mozilla:** [Request for Mozilla Position on Modern Algorithms in WebCrypto](https://github.com/mozilla/standards-positions/issues/1282) [closed]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [\[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto  Web Cryptography APIで 耐量子計算機暗号（PQC）および一般的な共通鍵AEADアルゴリズムを追加しま](https://twitter.com/flano_yuki/status/2097537049679323298) — *by @flano_yuki, 14 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Algorithm Updates in WebCrypt...
- [Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17360.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Algorithm Updates in WebCrypto Javier Fernandez Thu, 03 Sep 2026 03:12:27 -0700 Hi, Just some question about the stat...
- [\[blink-dev\] Ready for Developer Testing: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16678.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary <strong>Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API</stro...
- [\[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17349.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary <strong>Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API</stro...
- [\[blink-dev\] Re: Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17351.html) *(mail-archive.com)*
  > On Wed, Sep 2, 2026 at 1:35 PM Chromestatus &lt;[email protected]&gt; wrote: &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; *No information provided* &gt; &gt; *Specification* &gt; https://wicg.github.io/webcrypto-modern-algo...
- [\[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16785.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary <strong>Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API</stro...
- [Algorithm Updates in WebCrypto](https://chromestatus.com/feature/5198951632470016) *(chromestatus.com · 2025-10-10T00:00:00)*
  > We cannot provide a description for this page right now
- [A Practical Guide to the Web Cryptography API](https://davidmyers.dev/blog/a-practical-guide-to-the-web-cryptography-api) *(davidmyers.dev · 2020-09-08T00:00:00)*
  > For the purposes of this article, we are going to use a symmetric algorithm. The public-key (asymmetric) strategy has a hard limit on how much data it can encrypt based on key size: (keyBits / 8) - padding. Symmetric encryption uses the same key to e...
- [Guide to Web Crypto API for encryption/decryption \| by Tony \| Medium](https://medium.com/@tony.infisical/guide-to-web-crypto-api-for-encryption-decryption-1a2c698ebc25) *(medium.com · 2023-05-15T13:02:13)*
  > Algorithms and configuration: There are many encryption algorithms to consider from like aes-256-gcm or aes-256-cbc , each with their own requirements.
- [Web Crypto API Client-Side Encryption (2026 Guide) \| DevToolKit.cloud](https://devtoolkit.cloud/blog/web-crypto-api-client-side-encryption) *(devtoolkit.cloud · 2026-02-24T00:00:00)*
  > AES-GCM is the go-to algorithm for client-side encryption. It provides both encryption and integrity checks.
- [A Practical Guide to the Web Cryptography API - DEV Community](https://dev.to/voracious/a-practical-guide-to-the-web-cryptography-api-4o8n) *(dev.to · 2022-06-12T01:31:46)*
  > There are a few supported algorithms, but the recommended symmetric algorithm is AES-GCM for its authenticated mode.
- [Migrating from Node.js crypto to Web Crypto API: A guided experience · Logto blog](https://blog.logto.io/migrate-to-web-crypto) *(blog.logto.io · 2023-09-11T00:00:00)*
  > Node.js developers are typically familiar with the crypto module. It offers a comprehensive set of cryptographic primitives. This module not only provides mechanisms for the same cryptographic operations defined in the Web Crypto API but often includ...
- [Trying, Stumbling, Trying Again: Using WebCrypto API to generate a KeyPair](https://blog.roumanoff.com/2015/09/using-webcrypto-api-to-generate-keypair.html?m=1) *(blog.roumanoff.com)*
  > So we have to <strong>figure out which algorithm to use, then use it with the appropriate parameters, then find a way to expose the public key and the private key</strong>. Ideally save the private key to a file and copy the public key. The WebCrypto...
- [r/firefox on Reddit: What's happening in a post-Quantum Firefox world?](https://www.reddit.com/r/firefox/comments/8fa08e/whats_happening_in_a_postquantum_firefox_world) *(reddit.com · 2018-04-27T08:07:45)*
  > For example, Firefox 58 added a javascript bytecode cache that improved reloading facebook by 12%, it is a great improvement but it&#x27;s just 0.2 seconds faster, most people probably didn&#x27;t notice it. ... There was a lot more to Quantum circa ...
- [Post-Quantum Cryptography Support in Web Browsers \| Encryption Consulting](https://www.encryptionconsulting.com/pqc-support-in-web-browsers) *(encryptionconsulting.com · 2026-03-31T11:50:16)*
  > Learn how to enable Post-Quantum Cryptography support in modern web browsers like Chrome, Microsoft Edge and Mozilla Firefox with a step-by-step guide and methods to verify it.
- [Re: \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16786.html) *(mail-archive.com)*
  > *Explainer* /No information provided/ *Specification* https://wicg.github.io/webcrypto-modern-algos *Summary* <strong>Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography A...
- [What's wrong with in-browser cryptography? • Tony Arcieri](https://tonyarcieri.com/whats-wrong-with-webcrypto) *(tonyarcieri.com)*
  > Instead, the section on algorithms lists a bunch of examples of common algorithms and how they can be mapped onto WebCrypto’s APIs. <strong>Browsers already ship portable versions of a large number of cryptographic algorithms as part of their TLS sta...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Algorithm Updates i...
- [Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17360.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Re: [blink-dev] Intent to Ship: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Algorithm Updates in WebCrypto Javier Fernandez Thu, 03 Sep 2026 03:12:27 -0700 Hi, Just some question abou...
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com · 2025-08-06T12:55:07)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ...
- [script: Implement encrypt and decrypt operations of AES-OCB by kkoyung · Pull Request #41829 · servo/servo](https://github.com/servo/servo/pull/41829) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement encrypt and decrypt operations of AES-OCB by kkoyung · Pull Request #41829 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ...
- [script: Implement KanagrooTwelve algorithm in WebCrypto API by kkoyung · Pull Request #45699 · servo/servo](https://github.com/servo/servo/pull/45699) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement KanagrooTwelve algorithm in WebCrypto API by kkoyung · Pull Request #45699 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ...
- [script: Implement WebCrypto encapsulation and decapsulation with ML-KEM by kkoyung · Pull Request #41617 · servo/servo](https://github.com/servo/servo/pull/41617) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement WebCrypto encapsulation and decapsulation with ML-KEM by kkoyung · Pull Request #41617 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sig...
- [script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo](https://github.com/servo/servo/pull/41615) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [script: Implement export key operation of ML-KEM by kkoyung · Pull Request #41604 · servo/servo](https://github.com/servo/servo/pull/41604) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement export key operation of ML-KEM by kkoyung · Pull Request #41604 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab...
- [script: Implement generate key operation of AES-OCB by kkoyung · Pull Request #41822 · servo/servo](https://github.com/servo/servo/pull/41822) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Start adding AES-OCB support to WebCrypto API. This patch implements the generate key operation of AES-OCB, with the aes crate. Specification: https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/#aes-ocb...
- [script: Implement TurboSHAKE algorithm in WebCrypto by kkoyung · Pull Request #43551 · servo/servo](https://github.com/servo/servo/pull/43551) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Implement TurboSHAKE algorithm in our WebCrypto API. This includes a WebIDL dictionary `TurboSHAKE` and the &quot;digest&quot; operation. Specification: https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/#turboshake Testing: Pas...

## 📚 Platform Documentation & Specifications

- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com)*
- [script: Implement encrypt and decrypt operations of AES-OCB by kkoyung · Pull Request #41829 · servo/servo](https://github.com/servo/servo/pull/41829) *(github.com)*
- [script: Implement KanagrooTwelve algorithm in WebCrypto API by kkoyung · Pull Request #45699 · servo/servo](https://github.com/servo/servo/pull/45699) *(github.com)*
- [script: Implement WebCrypto encapsulation and decapsulation with ML-KEM by kkoyung · Pull Request #41617 · servo/servo](https://github.com/servo/servo/pull/41617) *(github.com)*
- [script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo](https://github.com/servo/servo/pull/41615) *(github.com)*
- [script: Implement export key operation of ML-KEM by kkoyung · Pull Request #41604 · servo/servo](https://github.com/servo/servo/pull/41604) *(github.com)*
- [script: Implement generate key operation of AES-OCB by kkoyung · Pull Request #41822 · servo/servo](https://github.com/servo/servo/pull/41822) *(github.com)*
- [script: Implement TurboSHAKE algorithm in WebCrypto by kkoyung · Pull Request #43551 · servo/servo](https://github.com/servo/servo/pull/43551) *(github.com)*
- [Security Guidelines for Cryptographic Algorithms in the W3C Web Cryptography API](https://www.w3.org/2012/webcrypto/draft-irtf-cfrg-webcrypto-algorithms-01.html) *(w3.org)*
- [webcrypto-secure-curves/explainer.md at main · WICG/webcrypto-secure-curves](https://github.com/WICG/webcrypto-secure-curves/blob/main/explainer.md) *(github.com)*
- [CryptoKey: algorithm property](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey/algorithm) *(developer.mozilla.org)*
- [Algorithm](https://developer.mozilla.org/en-US/docs/Glossary/Algorithm) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 7 planned queries — **27 verified relevant**
  - `"chromestatus.com/feature/5198951632470016" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/webcrypto-modern-algos" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Algorithm Updates in WebCrypto" API` — *Core feature API query* (7 returned)
  - `"Algorithm Updates in WebCrypto" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"post-quantum" OR "browser-provided" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Algorithm Updates in WebCrypto" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Algorithm Updates in WebCrypto" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 186 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5198951632470016)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5198951632470016)
- [Specification](https://wicg.github.io/webcrypto-modern-algos)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/450627017)
