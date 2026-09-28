# Algorithm Updates in WebCrypto

> **Report Week:** 2026-W40 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API. This will enable developers to have access browser-provided implementations of common quantum-resistant cryptographic algorithms standardized by NIST.  \* ML-KEM - 768, 1024 \* ML-DSA - 44, 65, 87 \* ChaCha20-Poly1305 \* X-Wing

### Motivation

Web Crypto exposes various low-level primitives, however none of the public/private key cryptography is currently quantum-resistant 

Adding quantum-resistant cryptography as a primitive to the existing WebCrypto APIs allows Javascript cryptography libraries to automatically use browser-provided cryptography (which may be more securely implemented and/or backed by a FIPS-validated underlying library), rather than compiling OpenSSL to WebAssembly or reimplementing algorithms in pure Javascript (or simply not being PQC).

Many Javascript cryptography libraries fall back to WebCrypto when it is available—these libraries will now be able to use BoringSSL-provided implementations instead of pure Javascript implementations.

## Ecosystem Status

- **Momentum:** High (290 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Shipping enabled by default in Chrome 155, the addition of NIST-standardized post-quantum algorithms (ML-KEM, ML-DSA, X-Wing) and ChaCha20-Poly1305 modernizes the Web Cryptography API directly against the WICG specification. Both WebKit and Mozilla have formally logged neutral positions, agreeing on the necessity of browser-level post-quantum cryptography while harboring lingering reservations about the ergonomics and architecture of the legacy WebCrypto API surface. Despite the cautious standards stance from non-Chromium engines, the move significantly reduces reliance on heavy, side-channel-vulnerable WebAssembly and JavaScript cryptography polyfills.

### Recommendations
- Actionable Advice: Treat modern WebCrypto algorithms as a progressive enhancement by detecting algorithm support at runtime via \`crypto.subtle\` inspection or \`supports()\` before generating or importing keys. Maintain audited WebAssembly or pure JavaScript fallbacks for Safari and Firefox users until multi-engine consensus and implementation catch up.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."
- Standards Activity (Mozilla): Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."
- Community package available: \[webcrypto-shim\](https://www.npmjs.com/package/webcrypto-shim) (v0.1.7) for progressive enhancement.

## Standards Positions

- **WebKit:** [Modern Algorithms in WebCrypto](https://github.com/WebKit/standards-positions/issues/641) [closed]
- **Mozilla:** [Request for Mozilla Position on Modern Algorithms in WebCrypto](https://github.com/mozilla/standards-positions/issues/1282) [closed]

## Packages & Polyfills

- [webcrypto-shim](https://www.npmjs.com/package/webcrypto-shim) `v0.1.7` — Web Cryptography API shim for legacy browsers
- [@peculiar/webcrypto](https://www.npmjs.com/package/@peculiar/webcrypto) `v1.7.1` — A WebCrypto Polyfill for NodeJS

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Algorithm Updates in WebCrypt...
- [\[blink-dev\] Intent to Prototype: Algorithm Updates in WebCrypto](https://www.mail-archive.com/blink-dev@chromium.org/msg14813.html) *(mail-archive.com)*
  > Explainer None Specification https://wicg.github.io/webcrypto-modern-algos Summary <strong>Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API</strong>. This will enab...
- [Algorithm Updates in WebCrypto - Chrome Platform Status](https://chromestatus.com/feature/5198951632470016) *(chromestatus.com · 2025-10-10T00:00:00)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Ready for Developer Testing: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16678.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary <strong>Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API</stro...
- [\[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17349.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary <strong>Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API</stro...
- [\[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16785.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary <strong>Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API</stro...
- [Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17392.html) *(mail-archive.com)*
  > &gt; &gt; Best, &gt; Daniel &gt; &gt; &gt; On Thursday, September 3rd, 2026 at 17:32, Hubert Chao &lt;[email protected]&gt; &gt; wrote: &gt; &gt; [email protected] (WebCrypto spec editor) &gt; &gt; On Thursday, September 3, 2026 at 6:12:38 AM UTC-4 [...
- [A Practical Guide to the Web Cryptography API](https://davidmyers.dev/blog/a-practical-guide-to-the-web-cryptography-api) *(davidmyers.dev · 2020-09-08T00:00:00)*
  > There are a few supported algorithms, but the recommended symmetric algorithm is AES-GCM for its authenticated mode.
- [Guide to Web Crypto API for encryption/decryption \| by Tony \| Medium](https://medium.com/@tony.infisical/guide-to-web-crypto-api-for-encryption-decryption-1a2c698ebc25) *(medium.com · 2023-05-15T13:02:13)*
  > <strong>The next part encodes the plaintext you want to encrypt into a Uint8Array and prepares a secretKey from the key you passed in to be used for encryption</strong>. Finally, the encryption is performed using the aes-256-gcm algorithm to produce ...
- [Migrating from Node.js crypto to Web Crypto API: A guided experience · Logto blog](https://blog.logto.io/migrate-to-web-crypto) *(blog.logto.io · 2023-09-11T00:00:00)*
  > Node.js developers are typically familiar with the crypto module. It offers a comprehensive set of cryptographic primitives. This module not only provides mechanisms for the same cryptographic operations defined in the Web Crypto API but often includ...
- [\[blink-dev\] Re: Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17351.html) *(mail-archive.com)*
  > On Wed, Sep 2, 2026 at 1:35 PM ... in the Web Cryptography API. This will &gt; <strong>enable developers to have access browser-provided implementations of common &gt; quantum-resistant cryptographic algorithms standardized by NIST</strong>....
- [Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17360.html) *(mail-archive.com)*
  > Yes <strong>https://wpt.fyi/results/WebCryptoAPI</strong> *DevTrial instructions* https://docs.google.com/document/d/1iFYtR2gab5wDh9DM00BSO8sqPtG6ATWPczmBoD2yLng/edit?usp=sharing *Flag name on about://flags* webcrypto-pqc *Finch feature name* WebCryp...
- [Chrome clears Intent to Ship post-quantum WebCrypto algorithms · freenode](https://freenode.net/article/chrome-clears-intent-to-ship-post-quantum-webcrypto-algorithms) *(freenode.net · 2026-09-09T15:38:21)*
  > <strong>Chromium plans to ship several new cryptographic algorithms in the Web Cryptography API</strong>, giving web developers browser-backed access to NIST-standardized post-quantum primitives and a widely used symmetric AEAD.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com · 2026-07-29T21:58:10)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. ...
- [New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1370) *(github.com · 2026-08-24T16:45:23)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload...
- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Algorithm Updates i...
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window...
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com · 2025-08-06T12:55:07)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ...
- [script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo](https://github.com/servo/servo/pull/41615) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [Implement Hybrid KEMs in WebCrypto · Issue #47856 · servo/servo](https://github.com/servo/servo/issues/47856) *(github.com · 2026-09-07T05:54:13)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Implement Hybrid KEMs in WebCrypto · Issue #47856 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh yo...
- [script: Implement KanagrooTwelve algorithm in WebCrypto API by kkoyung · Pull Request #45699 · servo/servo](https://github.com/servo/servo/pull/45699) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Implement KanagrooTwelve algorithm in our WebCrypto API. This includes a WebIDL dictionary KanagrooTwelveParams and the &quot;digest&quot; operation of KanagrooTwelve. Spec: https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/#ka...
- [script: Implement TurboSHAKE algorithm in WebCrypto by kkoyung · Pull Request #43551 · servo/servo](https://github.com/servo/servo/pull/43551) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Implement TurboSHAKE algorithm in our WebCrypto API. This includes a WebIDL dictionary TurboSHAKE and the &quot;digest&quot; operation of TurboSHAKE. Specification: https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/#turboshake ...
- [script: Implement export key operation of ML-KEM by kkoyung · Pull Request #41604 · servo/servo](https://github.com/servo/servo/pull/41604) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Continue on adding ML-KEM support to WebCrypto API. Specification: https://wicg.github.io/webcrypto-modern-algos/#ml-kem <strong>This patch implements export key operation of ML-KEM, with ml-kem crate</strong>. Tes...
- [\[blink-dev\] Intent to Prototype: Algorithm Updates in WebCrypto](https://www.mail-archive.com/blink-dev@chromium.org/msg14813.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Explainer None Specification https://wicg.github.io/webcrypto-modern-algos Summary <strong>Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API</strong>. This...

## 📚 Platform Documentation & Specifications

- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com)*
- [New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1370) *(github.com)*
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com)*
- [script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo](https://github.com/servo/servo/pull/41615) *(github.com)*
- [Implement Hybrid KEMs in WebCrypto · Issue #47856 · servo/servo](https://github.com/servo/servo/issues/47856) *(github.com)*
- [script: Implement KanagrooTwelve algorithm in WebCrypto API by kkoyung · Pull Request #45699 · servo/servo](https://github.com/servo/servo/pull/45699) *(github.com)*
- [script: Implement TurboSHAKE algorithm in WebCrypto by kkoyung · Pull Request #43551 · servo/servo](https://github.com/servo/servo/pull/43551) *(github.com)*
- [script: Implement export key operation of ML-KEM by kkoyung · Pull Request #41604 · servo/servo](https://github.com/servo/servo/pull/41604) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 45 result(s) found across 7 planned queries — **22 verified relevant**
  - `"chromestatus.com/feature/5198951632470016" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"wicg.github.io/webcrypto-modern-algos" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Algorithm Updates in WebCrypto" API` — *Core feature API query* (7 returned)
  - `"Algorithm Updates in WebCrypto" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"post-quantum" OR "browser-provided" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Algorithm Updates in WebCrypto" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Algorithm Updates in WebCrypto" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **2 verified relevant**
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
