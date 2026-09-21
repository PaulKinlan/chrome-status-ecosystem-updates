# Algorithm Updates in WebCrypto

> **Report Week:** 2026-W39 | **Milestone:** Chrome 151 | **Category:** Origin trial

## Overview

Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API. This will enable developers to have access browser-provided implementations of common quantum-resistant cryptographic algorithms standardized by NIST.  \* ML-KEM - 768, 1024 \* ML-DSA - 44, 65, 87 \* ChaCha20-Poly1305 \* X-Wing

### Motivation

Web Crypto exposes various low-level primitives, however none of the public/private key cryptography is currently quantum-resistant 

Adding quantum-resistant cryptography as a primitive to the existing WebCrypto APIs allows Javascript cryptography libraries to automatically use browser-provided cryptography (which may be more securely implemented and/or backed by a FIPS-validated underlying library), rather than compiling OpenSSL to WebAssembly or reimplementing algorithms in pure Javascript (or simply not being PQC).

Many Javascript cryptography libraries fall back to WebCrypto when it is available—these libraries will now be able to use BoringSSL-provided implementations instead of pure Javascript implementations.

## Ecosystem Status

- **Momentum:** High (460 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The 'Algorithm Updates in WebCrypto' proposal modernizes the Web Cryptography API by introducing NIST-standardized post-quantum cryptography (ML-KEM, ML-DSA, and X-Wing) alongside ChaCha20-Poly1305. Currently advancing through Chromium origin trials targeting stable release in Chrome 155, the feature is supported by an active WICG draft authored by industry security leads. However, cross-browser consensus remains neutral, with both Mozilla and WebKit waiting on broader venue consensus and API ergonomics before committing to native implementation.

### Recommendations
- Actionable Advice: Web teams building security-sensitive apps should register for the Chromium Origin Trial to benchmark ML-KEM/ML-DSA workflows. In production, implement modern PQC algorithms using defensive feature detection and progressive enhancement, maintaining robust WebAssembly or pure-JS fallback libraries until Safari and Firefox establish implementation roadmaps.
- In active Origin Trial in Chrome 151. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."
- Standards Activity (Mozilla): Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Post-Quantum Cryptography Implementation Made Simple - Eduonix Blog" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Modern Algorithms in WebCrypto](https://github.com/WebKit/standards-positions/issues/641) [closed]
- **Mozilla:** [Request for Mozilla Position on Modern Algorithms in WebCrypto](https://github.com/mozilla/standards-positions/issues/1282) [closed]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Post-Quantum Cryptography Implementation Made Simple - Eduonix Blog](https://blog.eduonix.com/2026/08/post-quantum-cryptography-implementation-the-complete-practical-guide-to-quantum-safe-security) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [dev.to](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEnYjruvQeeGZxZDSHEzEVlinSWlG0ggWMF_Y2yycJTPa9ENrQkXHV9nOiQtE57Ed1YHlRaUVIcaz8wVQiVcKg3sX7QGLPK91JEB7aGMWH7Z2RFnGjCrA5kaILJmn55WT-pfhJHd-dPzrIB8cRnwPSmeoJ_Tn_UZ_AGqwk9vvNPq4KDSVX5WKzEviLqma-unQt2raYacmqt_dC9EMs=) *(vertexaisearch.cloud.google.com)*
  > Node.js v24.7.0 Released – Post-Quantum Cryptography, Modern WebCrypto, and More - DEV Community Skip to content Powered by Algolia Log in Create account DEV Community Add reaction Like Unicorn Exploding Head Raised Hands Fire Jump to Comments Save B...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFCgvJ3x1sYhA-xX-1GRAESS2RUEUyt30HnxZW-efLzFaZib5pwqkHj2I64YLvttUujfpaktLY0W7qpJW8AuCqacP1Fgtb8Ude8NEhoBXBq_ZagFI9mMpcyBIUxaKzI78c=) *(vertexaisearch.cloud.google.com)*
  > Proposal: Implement "Modern Algorithms in the Web Cryptography API" (WICG specification) · Issue #29218 · oven-sh/bun · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with...
- [freenode.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEEts60nU6zVv6uuI73kryqO0bHIZeRI41qVXLMTVMaZ63IsjYCdbRNhjir_KkMDZ1B9fQZO1l6M1Dxs3A1JrCetVtBf3AtE5KLIpOBaG7Y-OFEJ-lpdae9tLuXSF2zERNV64ZuHRYjvqDhyrsG889N-rAlW3ES4sCiG5QL1TKZULrQsfdspV62NQju-WFnOOA=) *(vertexaisearch.cloud.google.com)*
  > Chrome clears Intent to Ship post-quantum WebCrypto algorithms · freenode free node Web Platform By ampersand September 9, 2026 Chrome clears Intent to Ship post-quantum WebCrypto algorithms ML-KEM, ML-DSA, ChaCha20-Poly1305, and the X-Wing hybrid KE...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF2rS7-Tnnz5bFMjavYuujfgebaJsu7b52q7sRpPseH5wQWIj903Mp0PmwswON8o_vQFhfL82DEGvhVxLTkmBY9WNZH283p3fNSHOMfdIm08NsJKbkUW9vHXD8AtPtV92k0JABWKbTAwQaZ6YRosiGp_Tzp4vxHtU-ehx57zcQFvyYk-RU=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Overview  The **"Algorithm Updates in WebCrypto"** effort brings native post-quantum cryptography (PQC) and modern symmetric encryption algorithms to the standard Web Cryptography API (`crypto.subtle`).   Historically, public-key primitiv
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGojLok8h4RK3atFvq8CjBjXfWSPK6xbFGPpB1a85JgJlV3wWU9yuwo9Kxl8tC8GXScy7Uc84fFiohLQ7ym4jeBz626lu9rTWowHU8QMXjeTZaZsPNJUGKk-QA9URPrOT5_mGo=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Overview  The **"Algorithm Updates in WebCrypto"** effort brings native post-quantum cryptography (PQC) and modern symmetric encryption algorithms to the standard Web Cryptography API (`crypto.subtle`).   Historically, public-key primitiv
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHTO84jnovruZRUdTxGQOx4CKfd4Sck3tX3QMnfTde7W6pbT2cx3-dK-Lkf29Mq2B77II1QXtgaoKE7x4-lRR-3NVAmV-h-VUAmglPapg46iUtNBbYVVwZnlaN-vVX36aCv4hNCkbGaSFpBbcaq) *(vertexaisearch.cloud.google.com)*
  > ### Feature Overview  The **"Algorithm Updates in WebCrypto"** effort brings native post-quantum cryptography (PQC) and modern symmetric encryption algorithms to the standard Web Cryptography API (`crypto.subtle`).   Historically, public-key primitiv
- [nodejs.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGqZHOuM9wTGFCV44WfJXmXl_sI9vSG9yf8zLDG_LWquXIOi0PeH5QrYehj3pC2E_nzWb0aZTWxjxvyH0J_iC7wsfjC9TtogBw_nfW2zyJuHtSpRdrqTeXhUrNqH8s1Ag==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Overview  The **"Algorithm Updates in WebCrypto"** effort brings native post-quantum cryptography (PQC) and modern symmetric encryption algorithms to the standard Web Cryptography API (`crypto.subtle`).   Historically, public-key primitiv
- [encryptionconsulting.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGu6Q72SV5RHLUoVgPSQB3BDzwKQZllwSAZTfF2ODBlw7Z7NmXof1L8DjEywgqScbvMSB3fZXcfjFYwFOvP8OOrP6w1cq1guhYM1udVt2UveH8OoC3nP5jT2Ed8x7HiwvOrmi9jta4qmRQrMqEY45yZXe6aaR5g) *(vertexaisearch.cloud.google.com)*
  > ### Feature Overview  The **"Algorithm Updates in WebCrypto"** effort brings native post-quantum cryptography (PQC) and modern symmetric encryption algorithms to the standard Web Cryptography API (`crypto.subtle`).   Historically, public-key primitiv
- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5198951632470016</strong>?gate=5112952025907200
- [Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17360.html) *(mail-archive.com)*
  > /No information provided/ *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/5198951632470016</strong>?gate=6595848137998336 *Links to previous Intent discussions* Intent to Prototype: https://groups.google.com/a/c...
- [\[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17349.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary <strong>Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API</stro...
- [\[blink-dev\] Ready for Developer Testing: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16678.html) *(mail-archive.com)*
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
- [Migrating from Node.js crypto to Web Crypto API: A guided experience · Logto blog](https://blog.logto.io/migrate-to-web-crypto) *(blog.logto.io · 2023-09-11T00:00:00)*
  > Node.js developers are typically familiar with the crypto module. It offers a comprehensive set of cryptographic primitives. This module not only provides mechanisms for the same cryptographic operations defined in the Web Crypto API but often includ...
- [A Practical Guide to the Web Cryptography API - DEV Community](https://dev.to/voracious/a-practical-guide-to-the-web-cryptography-api-4o8n) *(dev.to · 2022-06-12T01:31:46)*
  > There are a few supported algorithms, but the recommended symmetric algorithm is AES-GCM for its authenticated mode.
- [Trying, Stumbling, Trying Again: Using WebCrypto API to generate a KeyPair](https://blog.roumanoff.com/2015/09/using-webcrypto-api-to-generate-keypair.html?m=1) *(blog.roumanoff.com)*
  > So we have to <strong>figure out which algorithm to use, then use it with the appropriate parameters, then find a way to expose the public key and the private key</strong>. Ideally save the private key to a file and copy the public key. The WebCrypto...
- [Using WebCrypto Safely: A Practical Guide for Developers \| Furkan Baytekin](https://furkanbaytekin.dev/blogs/using-webcrypto-safely-a-practical-guide-for-developers) *(furkanbaytekin.dev · 2025-12-14T00:00:00)*
  > Here’s a practical guide to using WebCrypto the right way.
- [r/firefox on Reddit: What's happening in a post-Quantum Firefox world?](https://www.reddit.com/r/firefox/comments/8fa08e/whats_happening_in_a_postquantum_firefox_world) *(reddit.com · 2018-04-27T08:07:45)*
  > For example, Firefox 58 added a javascript bytecode cache that improved reloading facebook by 12%, it is a great improvement but it&#x27;s just 0.2 seconds faster, most people probably didn&#x27;t notice it. ... There was a lot more to Quantum circa ...
- [ML-KEM in WebCrypto API - dchest.com Blog](https://dchest.com/2025/08/09/mlkem-webcrypto) *(dchest.com · 2025-08-09T00:00:00)*
  > Implementing quantum-secure signatures, ... are verified today, when there’s no quantum computer capable of forging them. <strong>As of August 2025, the WebCrypto API does not yet support ML-KEM</strong>....
- [Web Crypto API - Node.js](https://www.mintlify.com/nodejs/node/api/webcrypto) *(mintlify.com · 2026-03-04T11:11:01)*
  > const { publicKey, privateKey } = await subtle.generateKey({ name: &#x27;ML-KEM-768&#x27;, }, true, [&#x27;encapsulateBits&#x27;, &#x27;decapsulateBits&#x27;]); const { sharedSecret, ciphertext } = await subtle.encapsulateBits( { name: &#x27;ML-KEM-7...
- [Web Crypto API \| Node.js v26.9.0 Documentation](https://nodejs.org/api/webcrypto.html) *(nodejs.org)*
  > subtle.generateKey(), subtle.exportKey(), and subtle.importKey() support &#x27;AES-CBC&#x27;, &#x27;AES-CTR&#x27;, &#x27;AES-GCM&#x27;, &#x27;AES-KW&#x27;, &#x27;AES-OCB&#x27;, &#x27;ChaCha20-Poly1305&#x27;4, &#x27;HMAC&#x27;, &#x27;KMAC128&#x27;4, a...
- [Web Crypto API \| Node.js 26.7.0 Documentation](https://beta.docs.nodejs.org/webcrypto.html) *(beta.docs.nodejs.org)*
  > subtle.generateKey(), subtle.exportKey(), and subtle.importKey() support &#x27;AES-CBC&#x27;, &#x27;AES-CTR&#x27;, &#x27;AES-GCM&#x27;, &#x27;AES-KW&#x27;, &#x27;AES-OCB&#x27;, &#x27;ChaCha20-Poly1305&#x27;4, &#x27;HMAC&#x27;, &#x27;KMAC128&#x27;4, a...
- [SubtleCrypto.generateKey method \| Node.js crypto module \| Bun](https://bun.com/reference/node/crypto/webcrypto/SubtleCrypto/generateKey) *(bun.com · 2025-10-29T21:32:59)*
  > &#x27;ML-KEM-768&#x27; &#x27;ML-KEM-1024&#x27; &#x27;RSA-OAEP&#x27; &#x27;RSA-PSS&#x27; &#x27;RSASSA-PKCS1-v1_5&#x27; &#x27;X25519&#x27; &#x27;X448&#x27; The CryptoKey (secret key) generating algorithms supported include: &#x27;AES-CBC&#x27; &#x27;AE...
- [Your WebCrypto key exchange is one string away from post-quantum - DEV Community](https://dev.to/vesvaultjz/your-webcrypto-key-exchange-is-one-string-away-from-post-quantum-41hd) *(dev.to · 2026-07-13T20:53:24)*
  > The ciphertext gets bigger for ML-KEM (1088 bytes for ML-KEM-768) and the keys change, but the calling convention, the message flow, and the key lifecycle are already right. You can ship the DHKEM version today, run it in production while the PQ ecos...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com · 2026-07-29T21:58:10)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > https://<strong>chromestatus.com/feature/5198951632470016</strong> · Reactions are currently unavailable · Sign up for free to join this conversation on GitHub. Already have an account? Sign in to comment · rowan-m · new-featuresecurity · N...
- [New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1370) *(github.com · 2026-08-24T16:45:23)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > https://<strong>chromestatus.com/feature/5198951632470016</strong> · No idea. Reactions are currently unavailable · Sign up for free to join this conversation on GitHub. Already have an account? Sign in to comment · rowan-m · new-featuresec...
- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5198951632470016</strong>?gate=5112952025907200
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Modern Crypto algos, https://<strong>chromestatus.com/feature/5198951632470016</strong>
- [Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17360.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > /No information provided/ *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/5198951632470016</strong>?gate=6595848137998336 *Links to previous Intent discussions* Intent to Prototype: https://groups.goog...
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com · 2025-08-06T12:55:07)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Specification title Modern Algorithms in WebCrypto Specification or proposal URL (if available) https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/ Explainer URL (if available) No response Proposal auth...
- [script: Implement encrypt and decrypt operations of AES-OCB by kkoyung · Pull Request #41829 · servo/servo](https://github.com/servo/servo/pull/41829) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/#aes-ocb-operations-encrypt · https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/#aes-ocb-operations-decrypt · https://<strong>wicg.github.io/webcrypto-modern-algos<...
- [script: Implement WebCrypto encapsulation and decapsulation with ML-KEM by kkoyung · Pull Request #41617 · servo/servo](https://github.com/servo/servo/pull/41617) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Specification of `SubtleCrypto.encapsulateBits`: https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/#SubtleCrypto-method-encapsulateBits Specification of `SubtleCrypto.decapsulateBits`: https://<strong>wicg.github.io/webcrypto-m...
- [script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo](https://github.com/servo/servo/pull/41615) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Continue on adding ML-KEM support to WebCrypto API. Specification: https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/#ml-kem This patch implements generate key operation of ML-KEM, with `ml-kem` crate. Testing: Pass some WPT te...
- [script: Implement KanagrooTwelve algorithm in WebCrypto API by kkoyung · Pull Request #45699 · servo/servo](https://github.com/servo/servo/pull/45699) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Implement KanagrooTwelve algorithm in our WebCrypto API. This includes a WebIDL dictionary KanagrooTwelveParams and the &quot;digest&quot; operation of KanagrooTwelve. Spec: https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/#ka...
- [Implement Hybrid KEMs in WebCrypto · Issue #47856 · servo/servo](https://github.com/servo/servo/issues/47856) *(github.com · 2026-09-07T05:54:13)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Spec: https://wicg.github.io/webcrypto-modern-algos/#hybrid-kems <strong>Hybrid KEMs have been merged into Modern Algorithms in WebCrypto API specification</strong>. Related WPT tests also arrived in servo repository. These algorithms basic...
- [script: Implement export key operation of ML-KEM by kkoyung · Pull Request #41604 · servo/servo](https://github.com/servo/servo/pull/41604) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Continue on adding ML-KEM support to WebCrypto API. Specification: https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/#ml-kem This patch implements export key operation of ML-KEM, with `ml-kem` crate. Testing: Pass some WPT test...
- [script: Implement generate key operation of ML-DSA by kkoyung · Pull Request #41659 · servo/servo](https://github.com/servo/servo/pull/41659) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Continue on adding ML-DSA support to WebCrypto API. This patch implements the generate key operation of ML-DSA, with ml-dsa crate. Specification: https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/#ml-d...

## 📚 Platform Documentation & Specifications

- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com)*
- [New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1370) *(github.com)*
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com)*
- [script: Implement encrypt and decrypt operations of AES-OCB by kkoyung · Pull Request #41829 · servo/servo](https://github.com/servo/servo/pull/41829) *(github.com)*
- [script: Implement WebCrypto encapsulation and decapsulation with ML-KEM by kkoyung · Pull Request #41617 · servo/servo](https://github.com/servo/servo/pull/41617) *(github.com)*
- [script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo](https://github.com/servo/servo/pull/41615) *(github.com)*
- [script: Implement KanagrooTwelve algorithm in WebCrypto API by kkoyung · Pull Request #45699 · servo/servo](https://github.com/servo/servo/pull/45699) *(github.com)*
- [Implement Hybrid KEMs in WebCrypto · Issue #47856 · servo/servo](https://github.com/servo/servo/issues/47856) *(github.com)*
- [script: Implement export key operation of ML-KEM by kkoyung · Pull Request #41604 · servo/servo](https://github.com/servo/servo/pull/41604) *(github.com)*
- [script: Implement generate key operation of ML-DSA by kkoyung · Pull Request #41659 · servo/servo](https://github.com/servo/servo/pull/41659) *(github.com)*
- [Security Guidelines for Cryptographic Algorithms in the W3C Web Cryptography API](https://www.w3.org/2012/webcrypto/draft-irtf-cfrg-webcrypto-algorithms-01.html) *(w3.org)*
- [Cryptography usage in Web Standards](https://www.w3.org/TR/security-guidelines-cryptography) *(w3.org)*
- [GitHub - vesvault/subtlepq: Post-quantum polyfill for the Web Cryptography API: ML-KEM (FIPS 203) and ML-DSA (FIPS 204) per the WICG Modern Algorithms draft — native-first with a wasm engine, plus a DHKEM-over-ECDH (RFC 9180) migration extension.](https://github.com/vesvault/subtlepq) *(github.com)*
- [Web Incubator CG · GitHub](https://github.com/wicg) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 67 result(s) found across 11 planned queries — **35 verified relevant**
  - `"chromestatus.com/feature/5198951632470016" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"wicg.github.io/webcrypto-modern-algos" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Algorithm Updates in WebCrypto" API` — *Core feature API query* (8 returned)
  - `"Algorithm Updates in WebCrypto" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"post-quantum" OR "browser-provided" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Algorithm Updates in WebCrypto" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Algorithm Updates in WebCrypto" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"Web Cryptography API" OR WebCrypto ("ML-KEM" OR "post-quantum") guide OR tutorial OR blog` — *Finds developer guides and blog posts explaining how to use post-quantum cryptographic primitives within the browser's WebCrypto API.* (8 returned)
  - `("crypto.subtle" OR WebCrypto) ("ML-KEM-768" OR "ML-DSA" OR "ChaCha20-Poly1305") ("generateKey" OR "importKey")` — *Surfaces real-world JavaScript code snippets and WebIDL method invocations using the newly proposed algorithm identifiers.* (8 returned)
  - `site:chromestatus.com OR site:github.com/WICG "webcrypto-modern-algos" OR "Algorithm Updates in WebCrypto"` — *Tracks browser vendor intent to prototype/ship, specification drafts, and standard consensus across WICG and Chromium.* (8 returned)
  - `("WebCrypto" OR "crypto.subtle") ("ML-KEM" OR "X-Wing" OR "post-quantum") site:news.ycombinator.com OR site:reddit.com/r/cryptography` — *Identifies community sentiment, security critiques, and developer reactions regarding PQC and modern algorithm additions in WebCrypto.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **2 verified relevant**
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
