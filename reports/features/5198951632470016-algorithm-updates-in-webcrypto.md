# Algorithm Updates in WebCrypto

> **Report Week:** 2026-W36 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API. This will enable developers to have access browser-provided implementations of common quantum-resistant cryptographic algorithms standardized by NIST.

* ML-KEM - 768, 1024
* ML-DSA - 44, 65, 87
* ChaCha20-Poly1305
* X-Wing

### Motivation

Web Crypto exposes various low-level primitives, however none of the public/private key cryptography is currently quantum-resistant 

Adding quantum-resistant cryptography as a primitive to the existing WebCrypto APIs allows Javascript cryptography libraries to automatically use browser-provided cryptography (which may be more securely implemented and/or backed by a FIPS-validated underlying library), rather than compiling OpenSSL to WebAssembly or reimplementing algorithms in pure Javascript (or simply not being PQC).

Many Javascript cryptography libraries fall back to WebCrypto when it is available—these libraries will now be able to use BoringSSL-provided implementations instead of pure Javascript implementations.

## Ecosystem Status

- **Momentum:** High (320 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Algorithm Updates in WebCrypto is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."
- Standards Activity (Mozilla): Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Modern Algorithms in WebCrypto](https://github.com/WebKit/standards-positions/issues/641) [closed]
- **Mozilla:** [Request for Mozilla Position on Modern Algorithms in WebCrypto](https://github.com/mozilla/standards-positions/issues/1282) [closed]

## 📰 Ecosystem Blogs & Articles

- [Re: [blink-dev] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16786.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Experiment: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: Algorithm Updates in WebCrypto Mike Taylor Wed, 17 Jun 2026 06:48:25 -0700 On 6/17/26 9:38 a.m., Chromest...
- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Algorithm Updates in WebCrypt...
- [[blink-dev] Intent to Prototype: Algorithm Updates in WebCrypto](https://www.mail-archive.com/blink-dev@chromium.org/msg14813.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Algorithm Updates in WebCrypto Chromestatus Fri, 17 Oct 2025 21:11:04 -0700 Contact emails [email&#160;protected] E...
- [Web Crypto API | Node.js v26.8.1 Documentation](https://nodejs.org/api/webcrypto.html) *(nodejs.org)*
  > subtle.generateKey(), subtle.exportKey(), subtle.importKey(), and subtle.getPublicKey() support &#x27;ECDH&#x27;, &#x27;ECDSA&#x27;, &#x27;Ed25519&#x27;, &#x27;Ed448&#x27;5, &#x27;ML-DSA-44&#x27;4, &#x27;ML-DSA-65&#x27;4, &#x27;ML-DSA-87&#x27;4, &#x2...
- [Web Crypto API - Node.js](https://www.mintlify.com/nodejs/node/api/webcrypto) *(mintlify.com · 2026-03-04T11:11:01)*
  > const { publicKey, privateKey } = await subtle.generateKey({ name: &#x27;ML-KEM-768&#x27;, }, true, [&#x27;encapsulateBits&#x27;, &#x27;decapsulateBits&#x27;]); const { sharedSecret, ciphertext } = await subtle.encapsulateBits( { name: &#x27;ML-KEM-7...
- [Node.js v24.7.0 Released – Post-Quantum Cryptography, Modern WebCrypto, and More - DEV Community](https://dev.to/zaheetdev/nodejs-v2470-released-post-quantum-cryptography-modern-webcrypto-and-more-1df9) *(dev.to · 2025-08-29T16:26:17)*
  > ChaCha20-Poly1305 (modern, fast AEAD cipher) SHA-3 &amp; SHAKE digests · ML-KEM &amp; ML-DSA (post-quantum cryptography for WebCrypto) subtle.getPublicKey() – Extract a public key from a CryptoKey · SubtleCrypto.supports() – Feature detection for alg...
- [Subtle (WebCrypto)](https://margelo.github.io/react-native-quick-crypto/docs/api/subtle) *(margelo.github.io)*
  > const keyPair = await subtle.generateKey( { name: &#x27;ECDSA&#x27;, namedCurve: &#x27;P-256&#x27; }, true, [&#x27;sign&#x27;, &#x27;verify&#x27;], ); const publicOnly = await subtle.getPublicKey(keyPair.privateKey, [&#x27;verify&#x27;]); Static meth...
- [Web Crypto API - Node.js - W3cubDocs](https://docs.w3cub.com/node/webcrypto.html) *(docs.w3cub.com)*
  > const { subtle } = globalThis.crypto; async function generateEd25519Key() { return subtle.generateKey({ name: &#x27;Ed25519&#x27;, }, true, [&#x27;sign&#x27;, &#x27;verify&#x27;]); } async function generateX25519Key() { return subtle.generateKey({ na...
- [Post-Quantum Cryptography (PQC) Guide | Evertrust](https://evertrust.io/guide/pqc) *(evertrust.io · 2026-08-10T00:00:00)*
  > <strong>Stand up a PQC test environment with a PQC-capable CA</strong>. Generate ML-KEM and ML-DSA key pairs. Issue test certificates and validate them across your technology stack. Identify libraries and applications that need updates to support PQC...
- [NIST Post-Quantum Cryptography Standards 2026 | FIPS 203, 204](https://entangledfuture.com/guides/nist-pqc-standards) *(entangledfuture.com · 2026-04-08T00:00:00)*
  > IETF has standardized hybrid TLS 1.3 key exchange using ML-KEM. OpenSSL 3.4+, BoringSSL, and most major TLS libraries already support this. Start with externally facing HTTPS services and VPN gateways. Step 4: Migrate certificate infrastructure. Issu...
- [.NET Post-Quantum Cryptography Guide](https://docs.365architect.com/pqc/dotnet-pqc-guide) *(docs.365architect.com)*
  > // In an ASP.NET Core controller -- sign an API response token [HttpGet(&quot;/api/signed-payload&quot;)] public IActionResult GetSignedPayload() { var payload = new { data = &quot;sensitive&quot;, timestamp = DateTime.UtcNow }; byte[] payloadBytes =...
- [ML-KEM, ML-DSA, SLH-DSA: The NIST Post-Quantum Alg...](https://evertrust.io/guide/pqc-algorithms) *(evertrust.io)*
  > ML-KEM (FIPS 203), ML-DSA (FIPS 204), SLH-DSA (FIPS 205): parameter sets, key and signature sizes, OpenSSL 3.5 syntax, and when to pick which.
- [How to Configure Post-Quantum Cryptography in Your Web Server | by Be Tech! with Santander | Be Tech! with Santander | Medium](https://medium.com/be-tech-with-santander/how-to-configure-post-quantum-cryptography-in-your-web-server-fcf79e05e526) *(medium.com · 2025-01-21T08:37:28)*
  > SSLCiphersuite TLS_AES_256_GCM_SHA384:TLS_AES_128_GCM_SHA256:TLS_CHACHA20_POLY1305_SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-CCM:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256...
- [Post-Quantum Cryptography Support in Web Browsers | Encryption Consulting](https://www.encryptionconsulting.com/pqc-support-in-web-browsers) *(encryptionconsulting.com · 2026-03-31T11:50:16)*
  > Learn how to enable Post-Quantum Cryptography support in modern web browsers like Chrome, Microsoft Edge and Mozilla Firefox with a step-by-step guide and methods to verify it.
- [Tutorial - Create Post-Quantum Cryptography Chimera CA Chain | Keyfactor Docs](https://docs.keyfactor.com/ejbca/latest/tutorial-create-pqc-hybrid-ca-chain) *(docs.keyfactor.com)*
  > Last, to create a ML-DSA key: <strong>name the key signKeyMLDSA001, select ML-DSA-65 for the key size, and then click Generate new key pair</strong>. Click Back to Crypto Token overview. Next, to create a crypto token for the Sub CA, click Create new...
- [ML-KEM in WebCrypto API - dchest.com Blog](https://dchest.com/2025/08/09/mlkem-webcrypto) *(dchest.com · 2025-08-09T00:00:00)*
  > I decided to go with the third option, but there was no such library available, so I wrote one! <strong>mlkem-wasm implements ML-KEM-768 in WebAssembly with an API from the Modern Algorithms in the Web Cryptography API draft spec</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16786.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Re: [blink-dev] Intent to Experiment: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: Algorithm Updates in WebCrypto Mike Taylor Wed, 17 Jun 2026 06:48:25 -0700 On 6/17/26 9:38 a.m....
- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Algorithm Updates i...
- [[blink-dev] Intent to Prototype: Algorithm Updates in WebCrypto](https://www.mail-archive.com/blink-dev@chromium.org/msg14813.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > [blink-dev] Intent to Prototype: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Algorithm Updates in WebCrypto Chromestatus Fri, 17 Oct 2025 21:11:04 -0700 Contact emails [email&#160;pr...
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com · 2025-08-06T12:55:07)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ...
- [script: Implement encrypt and decrypt operations of AES-OCB by kkoyung · Pull Request #41829 · servo/servo](https://github.com/servo/servo/pull/41829) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement encrypt and decrypt operations of AES-OCB by kkoyung · Pull Request #41829 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ...
- [script: Implement WebCrypto encapsulation and decapsulation with ML-KEM by kkoyung · Pull Request #41617 · servo/servo](https://github.com/servo/servo/pull/41617) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement WebCrypto encapsulation and decapsulation with ML-KEM by kkoyung · Pull Request #41617 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sig...
- [script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo](https://github.com/servo/servo/pull/41615) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [script: Implement TurboSHAKE algorithm in WebCrypto by kkoyung · Pull Request #43551 · servo/servo](https://github.com/servo/servo/pull/43551) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement TurboSHAKE algorithm in WebCrypto by kkoyung · Pull Request #43551 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ...
- [script: Implement export key operation of ML-KEM by kkoyung · Pull Request #41604 · servo/servo](https://github.com/servo/servo/pull/41604) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Continue on adding ML-KEM support to WebCrypto API. Specification: https://wicg.github.io/webcrypto-modern-algos/#ml-kem <strong>This patch implements export key operation of ML-KEM, with ml-kem crate</strong>. Tes...
- [script: Implement generate key operation of AES-OCB by kkoyung · Pull Request #41822 · servo/servo](https://github.com/servo/servo/pull/41822) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Start adding AES-OCB support to WebCrypto API. This patch implements the generate key operation of AES-OCB, with the aes crate. Specification: https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/#aes-ocb...
- [script: Implement generate key operation of ML-DSA by kkoyung · Pull Request #41659 · servo/servo](https://github.com/servo/servo/pull/41659) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Continue on adding ML-DSA support to WebCrypto API. This patch implements the generate key operation of ML-DSA, with ml-dsa crate. Specification: https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/#ml-d...

## 📚 Platform Documentation & Specifications

- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com)*
- [script: Implement encrypt and decrypt operations of AES-OCB by kkoyung · Pull Request #41829 · servo/servo](https://github.com/servo/servo/pull/41829) *(github.com)*
- [script: Implement WebCrypto encapsulation and decapsulation with ML-KEM by kkoyung · Pull Request #41617 · servo/servo](https://github.com/servo/servo/pull/41617) *(github.com)*
- [script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo](https://github.com/servo/servo/pull/41615) *(github.com)*
- [script: Implement TurboSHAKE algorithm in WebCrypto by kkoyung · Pull Request #43551 · servo/servo](https://github.com/servo/servo/pull/43551) *(github.com)*
- [script: Implement export key operation of ML-KEM by kkoyung · Pull Request #41604 · servo/servo](https://github.com/servo/servo/pull/41604) *(github.com)*
- [script: Implement generate key operation of AES-OCB by kkoyung · Pull Request #41822 · servo/servo](https://github.com/servo/servo/pull/41822) *(github.com)*
- [script: Implement generate key operation of ML-DSA by kkoyung · Pull Request #41659 · servo/servo](https://github.com/servo/servo/pull/41659) *(github.com)*
- [node/doc/api/webcrypto.md at main · nodejs/node](https://github.com/nodejs/node/blob/main/doc/api/webcrypto.md) *(github.com)*
- [SubtleCrypto: deriveKey() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveKey) *(developer.mozilla.org)*
- [Build software better, together](https://github.com/topics/cryptography?o=desc&s=updated) *(github.com)*
- [xchacha20-poly1305 · GitHub Topics · GitHub](https://github.com/topics/xchacha20-poly1305?l=rust) *(github.com)*
- [GitHub - jeremie-H/crypto-wasm: chacha20-poly1305 encryption in an webAssembly app written in Rust 🦀](https://github.com/jeremie-H/crypto-wasm) *(github.com)*
- [GitHub - dchest/mldsa-wasm: ML-DSA-65 postquantum signatures in WebAssembly](https://github.com/dchest/mldsa-wasm) *(github.com)*
- [CryptoKey: algorithm property](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey/algorithm) *(developer.mozilla.org)*
- [Algorithm](https://developer.mozilla.org/en-US/docs/Glossary/Algorithm) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 33 result(s) found across 6 planned queries — **30 verified relevant**
  - `"chromestatus.com/feature/5198951632470016" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"wicg.github.io/webcrypto-modern-algos" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `("crypto.subtle.generateKey" OR "crypto.subtle.deriveKey") ("ML-KEM" OR "ML-DSA" OR "ChaCha20-Poly1305" OR "X-Wing")` — *Finds concrete JavaScript code examples and API usage patterns for the newly introduced cryptographic algorithms in crypto.subtle.* (8 returned)
  - `"Web Cryptography API" ("post-quantum" OR "PQC") ("ML-KEM" OR "ML-DSA" OR "ChaCha20-Poly1305") (tutorial OR guide OR "how to")` — *Surfaces developer guides, practical tutorials, and walkthroughs on implementing post-quantum cryptography using native WebCrypto.* (8 returned)
  - `"webcrypto-modern-algos" OR ("Web Crypto" ("ML-KEM" OR "ML-DSA" OR "X-Wing") ("Intent to Prototype" OR "Intent to Ship"))` — *Identifies browser vendor implementation signals, Chromium intents, and standards development under the WICG modern algorithms proposal.* (0 returned)
  - `"WebCrypto" ("ML-KEM" OR "ML-DSA" OR "ChaCha20-Poly1305") (Wasm OR BoringSSL OR "WebAssembly" OR fallback) discussion` — *Discovers developer discussions and sentiment comparing native browser-backed PQC implementations to pure JS or WebAssembly crypto libraries.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 8 result(s) found — **16 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 1 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

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
