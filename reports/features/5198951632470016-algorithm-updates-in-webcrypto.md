# Algorithm Updates in WebCrypto

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** In developer trial (Behind a flag)

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

- **Momentum:** High (380 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The 'Algorithm Updates in WebCrypto' initiative integrates modern NIST-standardized Post-Quantum Cryptography (ML-KEM, ML-DSA, and X-Wing) along with ChaCha20-Poly1305 directly into the Web Cryptography API. Spearheaded by Chromium and ecosystem contributors from Proton and Okta, this effort replaces heavy pure-JavaScript and WebAssembly crypto fallbacks with secure, hardware-accelerated, browser-provided primitives. Although Chromium has advanced toward shipping in Chrome 154, broader cross-engine adoption remains cautious and fragmented.

### Recommendations
- Actionable Advice: Do not assume ubiquitous browser support; treat these modern post-quantum algorithms as progressive enhancements guarded by dynamic feature detection. Library authors should prioritize WebCrypto's native BoringSSL/platform implementations when present while retaining WebAssembly or pure JavaScript fallbacks for non-supporting browsers.
- Standards Activity (WebKit): Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."
- Standards Activity (Mozilla): Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Modern Algorithms in WebCrypto](https://github.com/WebKit/standards-positions/issues/641) [closed]
- **Mozilla:** [Request for Mozilla Position on Modern Algorithms in WebCrypto](https://github.com/mozilla/standards-positions/issues/1282) [closed]

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Algorithm Updates in WebCrypt...
- [[blink-dev] Re: Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17351.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Algorithm Updates in WebCrypto Hubert Chao Wed, 02 Sep 2026 10:51:52 -0700 Some additional information: X-Wing (MLKEM...
- [Re: [blink-dev] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17360.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Algorithm Updates in WebCrypto Javier Fernandez Thu, 03 Sep 2026 03:12:27 -0700 Hi, Just some question about the stat...
- [[blink-dev] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17349.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Algorithm Updates in WebCrypto Chromestatus Wed, 02 Sep 2026 10:35:18 -0700 Contact emails [email&#160;protected] Explainer N...
- [Web Crypto API | Node.js v26.8.1 Documentation](https://nodejs.org/api/webcrypto.html) *(nodejs.org)*
  > subtle.generateKey(), subtle.exportKey(), and subtle.importKey() support &#x27;AES-CBC&#x27;, &#x27;AES-CTR&#x27;, &#x27;AES-GCM&#x27;, &#x27;AES-KW&#x27;, &#x27;AES-OCB&#x27;, &#x27;ChaCha20-Poly1305&#x27;4, &#x27;HMAC&#x27;, &#x27;KMAC128&#x27;4, a...
- [Web Crypto API - Node.js](https://www.mintlify.com/nodejs/node/api/webcrypto) *(mintlify.com · 2026-03-04T11:11:01)*
  > if (SubtleCrypto.supports?.(&#x27;importKey&#x27;, &#x27;Argon2id&#x27;)) { const passwordKey = await crypto.subtle.importKey( &#x27;raw-secret&#x27;, new TextEncoder().encode(&#x27;password&#x27;), &#x27;Argon2id&#x27;, false, [&#x27;deriveKey&#x27;...
- [Web Crypto API - Node.js - W3cubDocs](https://docs.w3cub.com/node/webcrypto.html) *(docs.w3cub.com)*
  > <strong>Calling this method is equivalent to calling subtle.</strong>deriveBits() to generate raw keying material, then passing the result into the subtle.importKey() method using the deriveKeyAlgorithm, extractable, and keyUsages parameters as input...
- [Web Crypto API | Node.js 26.7.0 Documentation](https://beta.docs.nodejs.org/webcrypto.html) *(beta.docs.nodejs.org)*
  > The following list describes the formats supported by subtle.importKey() and subtle.exportKey(). &#x27;AES-CBC&#x27;, &#x27;AES-CTR&#x27;, &#x27;AES-GCM&#x27;, &#x27;AES-KW&#x27;, and &#x27;HMAC&#x27; can be imported and exported using &#x27;jwk&#x27...
- [Node.js v24.7.0 Released – Post-Quantum Cryptography, Modern WebCrypto, and More - DEV Community](https://dev.to/zaheetdev/nodejs-v2470-released-post-quantum-cryptography-modern-webcrypto-and-more-1df9) *(dev.to · 2025-08-29T16:26:17)*
  > ChaCha20-Poly1305 (modern, fast AEAD cipher) SHA-3 &amp; SHAKE digests · ML-KEM &amp; ML-DSA (post-quantum cryptography for WebCrypto) subtle.getPublicKey() – Extract a public key from a CryptoKey · SubtleCrypto.supports() – Feature detection for alg...
- [SubtleCrypto.generateKey method | Node.js crypto module | Bun](https://bun.com/reference/node/crypto/webcrypto/SubtleCrypto/generateKey) *(bun.com · 2025-10-29T21:32:59)*
  > &#x27;ML-KEM-1024&#x27; &#x27;RSA-OAEP&#x27; &#x27;RSA-PSS&#x27; &#x27;RSASSA-PKCS1-v1_5&#x27; &#x27;X25519&#x27; &#x27;X448&#x27; The CryptoKey (secret key) generating algorithms supported include: &#x27;AES-CBC&#x27; &#x27;AES-CTR&#x27; &#x27;AES-G...
- [How to create post-quantum signatures using AWS KMS and ML-DSA | Amazon Web Services](https://aws.amazon.com/blogs/security/how-to-create-post-quantum-signatures-using-aws-kms-and-ml-dsa) *(aws.amazon.com · 2025-06-13T23:41:04)*
  > As the capabilities of <strong>quantum</strong> computing evolve, AWS is committed to helping our customers stay ahead of emerging threats to public-key <strong>cryptography</strong>. Today, we’re announcing the integration of FIPS 204: Module-Lattic...
- [Post-Quantum Now: From AES & RSA to ML-KEM Hybrids - Netlas Blog](https://netlas.io/blog/post_quantum_cryptography) *(netlas.io · 2025-10-03T00:00:00)*
  > <strong>This script combines the classical ECDH secret and the post-quantum KEM secret, then derives a 32-byte session key via HKDF with a versioned, transcript-bound info string</strong> — this binds the key to the handshake and thwarts downgrade/co...
- [.NET Post-Quantum Cryptography Guide](https://docs.365architect.com/pqc/dotnet-pqc-guide) *(docs.365architect.com)*
  > Warning: SLH-DSA signing is significantly slower than ML-DSA (milliseconds vs microseconds). Use it for root-of-trust operations where conservative security assumptions matter more than throughput. For the transition period, combine classical and pos...
- [NIST PQC Algorithms Explained: ML-KEM, ML-DSA](https://qubit.vision/nist-post-quantum-algorithms-explained-ml-kem-ml-dsa-slh-dsa) *(qubit.vision · 2026-06-04T19:05:47)*
  > A practical plain-English guide to ML-KEM, ML-DSA, and SLH-DSA, with adoption notes and a repeatable review cycle for security teams.
- [ML-KEM (FIPS 203) Guide 2026: Python + OpenSSL | Vucense](https://vucense.com/privacy-sovereignty/post-quantum-cryptography/ml-kem-fips-203-implementation-guide-2026) *(vucense.com · 2026-07-21T00:00:00)*
  > This guide gives you working ML-KEM implementations in Python, shows you how to use OpenSSL 3.2+‘s native ML-KEM support, and builds a hybrid classical+post-quantum key exchange — the production-recommended approach in 2026. ML-KEM Quick Facts: Stand...
- [Post-Quantum Cryptography in .NET 10: A Practical Guide | Duende](https://duendesoftware.com/blog/20260514-post-quantum-cryptography-in-dotnet-10) *(duendesoftware.com · 2026-06-19T13:15:01)*
  > === Post-Quantum Cryptography in .NET 10 === Platform support: ML-KEM: True ML-DSA: True SLH-DSA: True Composite ML-DSA:True ── ML-KEM (FIPS 203): Key Encapsulation ── Alice&#x27;s public key: 1184 bytes Bob&#x27;s shared secret: AE8446438B3840C51910...
- [AWS KMS Post-Quantum: ML-KEM & ML-DSA in Production 2026](https://www.factualminds.com/blog/aws-kms-post-quantum-cryptography-ml-kem-ml-dsa) *(factualminds.com · 2026-07-19T00:00:00)*
  > For non-AWS clients (your application connecting to AWS endpoints), use s2n-tls or a TLS library that supports the IETF hybrid construct (OpenSSL 3.5+, BoringSSL with the appropriate flags, Go’s crypto/tls in Go 1.24+). Browser support for ML-KEM hyb...
- [[blink-dev] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16785.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary <strong>Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API</stro...
- [Re: [blink-dev] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16787.html) *(mail-archive.com)*
  > &gt; On 6/17/26 9:38 a.m., Chromestatus ...cg.github.io/webcrypto-modern-algos &gt; &gt; *Summary* &gt; <strong>Add post-quantum cryptography and a common symmetric AEAD to the set of &gt; cryptographic algorithms available in the Web Cryptography AP...
- [[blink-dev] Intent to Prototype: Algorithm Updates in WebCrypto](https://www.mail-archive.com/blink-dev@chromium.org/msg14813.html) *(mail-archive.com)*
  > Explainer None Specification https://wicg.github.io/webcrypto-modern-algos Summary <strong>Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API</strong>. This will enab...
- [[blink-dev] Ready for Developer Testing: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16678.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary <strong>Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API</stro...
- [GnuPG – post-quantum crypto landing in mainline | Hacker News](https://news.ycombinator.com/item?id=47907018) *(news.ycombinator.com · 2026-05-08T03:16:06)*
  > Funny to read 1-liner changelog versus the plethora of articles just few years ago along the line of &quot;Quantum computer, it might just change our entire lives and make privacy impossible!&quot; · The simple addition (of a not so simple algorithm)...
- [A cryptography engineer's perspective on quantum computing timelines | Hacker News](https://news.ycombinator.com/item?id=47662234) *(news.ycombinator.com · 2026-04-09T14:47:11)*
  > ML-KEM is intended to replace the traditional and the elliptic-curve variant of the Diffie-Hellman algorithm for creating a shared secret value · When FIPS 203, i.e. ML-KEM is not used, adversaries may record data transferred over the Internet and th...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Algorithm Updates i...
- [[blink-dev] Re: Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17351.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > [blink-dev] Re: Intent to Ship: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Algorithm Updates in WebCrypto Hubert Chao Wed, 02 Sep 2026 10:51:52 -0700 Some additional information: X-W...
- [Re: [blink-dev] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17360.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Re: [blink-dev] Intent to Ship: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Algorithm Updates in WebCrypto Javier Fernandez Thu, 03 Sep 2026 03:12:27 -0700 Hi, Just some question abou...
- [[blink-dev] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17349.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > [blink-dev] Intent to Ship: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Algorithm Updates in WebCrypto Chromestatus Wed, 02 Sep 2026 10:35:18 -0700 Contact emails [email&#160;protected] E...
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com · 2025-08-06T12:55:07)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ...
- [script: Implement encrypt and decrypt operations of AES-OCB by kkoyung · Pull Request #41829 · servo/servo](https://github.com/servo/servo/pull/41829) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement encrypt and decrypt operations of AES-OCB by kkoyung · Pull Request #41829 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ...
- [script: Implement KanagrooTwelve algorithm in WebCrypto API by kkoyung · Pull Request #45699 · servo/servo](https://github.com/servo/servo/pull/45699) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement KanagrooTwelve algorithm in WebCrypto API by kkoyung · Pull Request #45699 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ...
- [script: Implement WebCrypto encapsulation and decapsulation with ML-KEM by kkoyung · Pull Request #41617 · servo/servo](https://github.com/servo/servo/pull/41617) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement WebCrypto encapsulation and decapsulation with ML-KEM by kkoyung · Pull Request #41617 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sig...
- [script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo](https://github.com/servo/servo/pull/41615) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Continue on adding ML-KEM support to WebCrypto API. Specification: https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/#ml-kem This patch implements generate key operation of ML-KEM, with `ml-kem` crate. Testing: Pass some WPT te...
- [script: Implement export key operation of ML-KEM by kkoyung · Pull Request #41604 · servo/servo](https://github.com/servo/servo/pull/41604) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Continue on adding ML-KEM support to WebCrypto API. Specification: https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/#ml-kem This patch implements export key operation of ML-KEM, with `ml-kem` crate. Testing: Pass some WPT test...
- [script: Implement generate key operation of AES-OCB by kkoyung · Pull Request #41822 · servo/servo](https://github.com/servo/servo/pull/41822) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Start adding AES-OCB support to WebCrypto API. This patch implements the generate key operation of AES-OCB, with the aes crate. Specification: https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/#aes-ocb...

## 📚 Platform Documentation & Specifications

- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com)*
- [script: Implement encrypt and decrypt operations of AES-OCB by kkoyung · Pull Request #41829 · servo/servo](https://github.com/servo/servo/pull/41829) *(github.com)*
- [script: Implement KanagrooTwelve algorithm in WebCrypto API by kkoyung · Pull Request #45699 · servo/servo](https://github.com/servo/servo/pull/45699) *(github.com)*
- [script: Implement WebCrypto encapsulation and decapsulation with ML-KEM by kkoyung · Pull Request #41617 · servo/servo](https://github.com/servo/servo/pull/41617) *(github.com)*
- [script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo](https://github.com/servo/servo/pull/41615) *(github.com)*
- [script: Implement export key operation of ML-KEM by kkoyung · Pull Request #41604 · servo/servo](https://github.com/servo/servo/pull/41604) *(github.com)*
- [script: Implement generate key operation of AES-OCB by kkoyung · Pull Request #41822 · servo/servo](https://github.com/servo/servo/pull/41822) *(github.com)*
- [node/doc/api/webcrypto.md at main · nodejs/node](https://github.com/nodejs/node/blob/main/doc/api/webcrypto.md) *(github.com)*
- [GitHub - WICG/webcrypto-modern-algos: Proposal for the addition of various modern algorithms to the Web Cryptography API, as well as feature detection for algorithm support · GitHub](https://github.com/WICG/webcrypto-modern-algos) *(github.com)*
- [pqc · GitHub Topics](https://github.com/topics/pqc) *(github.com)*
- [post-quantum · GitHub Topics · GitHub](https://github.com/topics/post-quantum?l=html&o=asc&s=stars) *(github.com)*
- [GitHub - paulmillr/noble-post-quantum: Auditable & minimal JS implementation of public-key post-quantum cryptography · GitHub](https://github.com/paulmillr/noble-post-quantum) *(github.com)*
- [GitHub - veorq/awesome-post-quantum: A curated list of resources about post-quantum cryptography. · GitHub](https://github.com/veorq/awesome-post-quantum) *(github.com)*
- [CryptoKey: algorithm property](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey/algorithm) *(developer.mozilla.org)*
- [Algorithm](https://developer.mozilla.org/en-US/docs/Glossary/Algorithm) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 39 result(s) found across 6 planned queries — **36 verified relevant**
  - `"chromestatus.com/feature/5198951632470016" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"wicg.github.io/webcrypto-modern-algos" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"crypto.subtle" ("ML-KEM" OR "ML-DSA" OR "ChaCha20-Poly1305") ("generateKey" OR "importKey" OR "deriveKey")` — *Finds practical JavaScript code examples and WebIDL usage of newly added post-quantum algorithms and ChaCha20-Poly1305 in SubtleCrypto.* (8 returned)
  - `"Web Cryptography API" ("post-quantum" OR "ML-KEM" OR "ML-DSA") (tutorial OR guide OR example)` — *Discovers developer tutorials, guides, and explainers detailing how to implement quantum-resistant cryptography using WebCrypto.* (8 returned)
  - `"webcrypto-modern-algos" OR ("Web Crypto" ("ML-KEM" OR "ChaCha20-Poly1305") ("Intent to" OR WICG OR Chromium))` — *Tracks browser vendor implementation status, Intent to Ship/Prototype threads, and official WICG standard milestones.* (8 returned)
  - `("WebCrypto" OR "crypto.subtle") ("post-quantum" OR "ML-KEM" OR "X-Wing") (site:news.ycombinator.com OR site:reddit.com OR site:github.com)` — *Surfaces community feedback, developer sentiment, and security discussions regarding browser-native post-quantum cryptography support.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
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
