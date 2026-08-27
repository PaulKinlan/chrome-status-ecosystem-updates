# Algorithm Updates in WebCrypto

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

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

- **Momentum:** Moderate (40 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The 'Algorithm Updates in WebCrypto' proposal modernizes the Web Cryptography API by introducing standardized post-quantum cryptography (ML-KEM, ML-DSA, X-Wing) and modern symmetric AEAD ciphers (ChaCha20-Poly1305). Chrome enables these algorithms by default in Chrome 154 via underlying BoringSSL support, replacing the need for heavy WebAssembly or pure JavaScript cryptographic polyfills. While officially supported in Chromium, broader multi-engine consensus remains formally neutral across Gecko and WebKit.

### Recommendations
- Actionable Advice: Web cryptography and security libraries should adopt progressive enhancement by detecting native algorithm support in `crypto.subtle` before falling back to WASM or pure JS implementations. Do not assume universal availability across non-Chromium browsers yet, and ensure key encapsulation methods are guarded with feature checks.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."
- Standards Activity (Mozilla): Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Modern Algorithms in WebCrypto](https://github.com/WebKit/standards-positions/issues/641) [closed]
- **Mozilla:** [Request for Mozilla Position on Modern Algorithms in WebCrypto](https://github.com/mozilla/standards-positions/issues/1282) [closed]

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Algorithm Updates in WebCrypt...
- [[blink-dev] Ready for Developer Testing: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16678.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Algorithm Updates in WebCrypto Chromestatus Wed, 03 Jun 2026 10:10:48 -0700 Contact emails [email&#...
- [[blink-dev] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16785.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Algorithm Updates in WebCrypto Chromestatus Wed, 17 Jun 2026 06:38:17 -0700 Contact emails [email&#160;protected]...
- [Algorithm Updates in WebCrypto](https://chromestatus.com/feature/5198951632470016) *(chromestatus.com · 2025-10-10T00:00:00)*
  > Chrome Platform Status

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 4 result(s) found (query: `""Algorithm Updates in WebCrypto" API"`) — **4 verified relevant**
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found (query: `"Algorithm Updates in WebCrypto"`) — **4 verified relevant**
- **Hacker News Algolia:** 0 result(s) found (query: `"Algorithm Updates in WebCrypto"`) — **0 verified relevant**
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
