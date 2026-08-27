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

- **Momentum:** High (100 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Algorithm Updates in WebCrypto is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: [webcrypto-shim](https://www.npmjs.com/package/webcrypto-shim) (v0.1.7) for progressive enhancement.

## Packages & Polyfills

- [webcrypto-shim](https://www.npmjs.com/package/webcrypto-shim) `v0.1.7` — Web Cryptography API shim for legacy browsers
- [webcrypto-core](https://www.npmjs.com/package/webcrypto-core) `v1.9.2` — Common layer to be used by crypto libraries based on WebCrypto API for input validation.
- [@peculiar/webcrypto](https://www.npmjs.com/package/@peculiar/webcrypto) `v1.7.1` — A WebCrypto Polyfill for NodeJS
- [iron-webcrypto](https://www.npmjs.com/package/iron-webcrypto) `v2.0.0` — a cryptographic utility for sealing-unsealing a JSON object using symmetric key encryption with message integrity verification

## Articles & Documentation

- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ)
- [[blink-dev] Ready for Developer Testing: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16678.html)
- [[blink-dev] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16785.html)
- [Algorithm Updates in WebCrypto](https://chromestatus.com/feature/5198951632470016)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5198951632470016)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5198951632470016)
- [Specification](https://wicg.github.io/webcrypto-modern-algos)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/450627017)
