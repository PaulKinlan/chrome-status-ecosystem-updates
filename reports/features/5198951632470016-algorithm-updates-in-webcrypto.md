# Algorithm Updates in WebCrypto

> **Report Week:** 2026-W46 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API. This will enable developers to have access browser-provided implementations of common quantum-resistant cryptographic algorithms standardized by NIST.  \* ML-KEM - 768, 1024 \* ML-DSA - 44, 65, 87 \* ChaCha20-Poly1305 \* X-Wing

### Motivation

Web Crypto exposes various low-level primitives, however none of the public/private key cryptography is currently quantum-resistant   Adding quantum-resistant cryptography as a primitive to the existing WebCrypto APIs allows Javascript cryptography libraries to automatically use browser-provided cryptography (which may be more securely implemented and/or backed by a FIPS-validated underlying library), rather than compiling OpenSSL to WebAssembly or reimplementing algorithms in pure Javascript (or simply not being PQC).  Many Javascript cryptography libraries fall back to WebCrypto when it is available—these libraries will now be able to use BoringSSL-provided implementations instead of pure Javascript implementations.

## Ecosystem Status

- **Momentum:** Quiet (-40 points since 2026-10-12; footprint 370 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chrome 155 officially ships modern cryptographic primitives into WebCrypto, introducing post-quantum cryptography (ML-KEM, ML-DSA, and X-Wing) alongside ChaCha20-Poly1305 and native Key Encapsulation Mechanism (KEM) operations. While server runtimes like Node.js and Cloudflare Workers have eagerly added support to unify JS cryptographic surfaces, other major browser engines remain noncommittal. As a result, this feature delivers critical hardware-backed performance gains in Chromium and edge runtimes, but cross-browser parity across the web platform remains fragmented.

### Recommendations
- Actionable Advice: Adopt these primitives via progressive enhancement by runtime-checking \`SubtleCrypto.supports()\` or wrapping calls inside \`try/catch\` feature detections. Teams building end-to-end encrypted or post-quantum secure messaging must continue bundling WASM-compiled fallback libraries for Firefox, Safari, and older browser baselines.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."
- Standards Activity (Mozilla): Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Modern Algorithms in WebCrypto](https://github.com/WebKit/standards-positions/issues/641) [closed]
- **Mozilla:** [Request for Mozilla Position on Modern Algorithms in WebCrypto](https://github.com/mozilla/standards-positions/issues/1282) [closed]

## Web-features Group

*group-level data: web-features [`web-cryptography`](https://webstatus.dev/features/web-cryptography), shared with 4 other ChromeStatus features*

- Share of tests passing in the web-features group `web-cryptography` on [wpt.fyi](https://wpt.fyi/results?q=feature:web-cryptography) (via webstatus.dev) — stable: Chrome 55.7% · Edge 55.7% · Firefox 61% · Safari 52.1%; experimental: Chrome 56.3% · Edge 55.7% · Firefox 64% · Safari 52.1%
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/67)) · concerns: `venue`

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Post-Quantum Cryptography Reaches the Browser: ML-KEM and ML-DSA in Chrome 151's Web Crypto API \| Trade Assistance LLC](https://trade-assistance.com/blog/post-quantum-web-crypto-api-chrome-151) *(trade-assistance.com)*
  > \*\*ML-KEM (768, 1024):\*\* Module-Lattice-based Key Encapsulation Mechanism (NIST FIPS 203) for quantum-resistant shared secret exchange \*\*ML-DSA (44, 65, 87):\*\* Module-Lattice-based Digital Signature Algorithm (NIST FIPS 204) for quantum-resistant sign...
- [cloudflare.com](https://blog.cloudflare.com/workers-ml-kem-ml-dsa-support) *(blog.cloudflare.com)*
  > Because ML-KEM and X-Wing are Key Encapsulation Mechanisms rather than traditional public-key encryption schemes, this update also introduces native KEM methods to \`crypto.subtle\` Cloudflare announced support for the WICG Modern Algorithms specificat...
- [nodejs.org](https://beta.docs.nodejs.org/webcrypto) *(beta.docs.nodejs.org)*
  > Explicit new key formats such as \`'raw-public'\`, \`'raw-secret'\`, and \`'raw-seed'\` \*\*Node.js:\*\* Node.js incorporated the WICG \*Modern Algorithms in the Web Cryptography API\* proposal into its \`crypto.webcrypto\` implementation, aligning server-side Jav...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/security/client-side-encryption) *(developer.chrome.com)*
  > Explicit new key formats such as \`'raw-public'\`, \`'raw-secret'\`, and \`'raw-seed'\` Google Chrome's developer documentation highlights how developers can leverage native browser-level cryptography (backed by BoringSSL) rather than bundling multi-megaby...
- [entranttechnologies.com](https://entranttechnologies.com/tech-news/chrome-155-jpeg-xl-post-quantum-webcrypto-and-what-to-test) *(entranttechnologies.com)*
  > \*\*Milestones:\*\* Chromium introduced experimental developer trials in Chrome 150, launched an Origin Trial spanning Chrome 151–154, and officially shipped the feature to stable in \*\*Chrome 155\*\* Developer commentary and industry reviews (such as techn...
- [adyog.com](https://pulse.adyog.com/insights/workers-post-quantum-web-crypto-opt-in) *(pulse.adyog.com)*
  > Cloudflare emphasized shifting the burden of crypto maintenance: developers and downstream libraries building end-to-end encryption or zero-trust services no longer need to ship bloated pure-JS or WASM polyfills; they can rely on fast, runtime-mainta...
- [\[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16785.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto Chromestatus Wed, 17 Jun 2026 06:38:17 -0700 Contact emails \[email&#160;protected\]...
- [\[blink-dev\] Intent to Prototype: Algorithm Updates in WebCrypto](https://www.mail-archive.com/blink-dev@chromium.org/msg14813.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Algorithm Updates in WebCrypto Chromestatus Fri, 17 Oct 2025 21:11:04 -0700 Contact emails \[email&#160;protected\] E...
- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Algorithm Updates in WebCrypt...
- [\[blink-dev\] Ready for Developer Testing: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16678.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Algorithm Updates in WebCrypto Chromestatus Wed, 03 Jun 2026 10:10:48 -0700 Contact emails \[email&#...
- [Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17360.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto Javier Fernandez Thu, 03 Sep 2026 03:12:27 -0700 Hi, Just some question about the stat...
- [\[blink-dev\] Re: Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17351.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Algorithm Updates in WebCrypto Hubert Chao Wed, 02 Sep 2026 10:51:52 -0700 Some additional information: X-Wing (MLKEM...
- [\[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17349.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary &lt;strong&gt;Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API&lt;/stro...
- [Re: \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16786.html) *(mail-archive.com)*
  > \*Explainer\* /No information provided/ \*Specification\* https://wicg.github.io/webcrypto-modern-algos \*Summary\* &lt;strong&gt;Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography A...
- [Chrome clears Intent to Ship post-quantum WebCrypto algorithms · freenode](https://freenode.net/article/chrome-clears-intent-to-ship-post-quantum-webcrypto-algorithms) *(freenode.net · 2026-09-09T15:38:21)*
  > Libraries that already prefer WebCrypto when present could then call into BoringSSL-backed implementations instead of shipping pure JavaScript or compiling OpenSSL to WebAssembly, or skipping post-quantum support entirely. The algorithms are defined ...
- [Chrome 155 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2105325011116646507) *(x.com · 2026-09-30T15:48:01)*
  > Add support for multiple post-quantum cryptographic algorithms standardized by NIST to the Web Cryptography API: ... Additional information can be found in the draft spec: https://wicg.github.io/webcrypto-modern-algos/
- [Node.js v24.7.0 Released – Post-Quantum Cryptography, Modern WebCrypto, and More - DEV Community](https://dev.to/zaheetdev/nodejs-v2470-released-post-quantum-cryptography-modern-webcrypto-and-more-1df9) *(dev.to · 2025-08-29T16:26:17)*
  > ChaCha20-Poly1305 (modern, fast AEAD cipher) SHA-3 &amp; SHAKE digests · ML-KEM &amp; ML-DSA (post-quantum cryptography for WebCrypto) subtle.getPublicKey() – Extract a public key from a CryptoKey · SubtleCrypto.supports() – Feature detection for alg...
- [Web Crypto API - Node.js](https://www.mintlify.com/nodejs/node/api/webcrypto) *(mintlify.com · 2026-03-04T11:11:01)*
  > const { publicKey, privateKey } = await subtle.generateKey({ name: &#x27;ML-KEM-768&#x27;, }, true, \[&#x27;encapsulateBits&#x27;, &#x27;decapsulateBits&#x27;\]); const { sharedSecret, ciphertext } = await subtle.encapsulateBits( { name: &#x27;ML-KEM-7...
- [Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17413.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt; &gt;&gt; All of the other algorithms being added are already in &gt;&gt; https://wicg.github.io/webcrypto-modern-algos/. Links: &gt;&gt; &gt;&gt; ChaCha20-Poly1305: &gt;&gt; https://wicg.github.io/webcrypto-modern-algos/#chacha2...
- [Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17412.html) *(mail-archive.com)*
  > &gt;&gt; &gt; &gt; All of the other algorithms being added are already in &gt; https://wicg.github.io/webcrypto-modern-algos/. Links: &gt; &gt; ChaCha20-Poly1305: &gt; https://wicg.github.io/webcrypto-modern-algos/#chacha20-poly1305 &gt; ML-DSA: http...
- [Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17411.html) *(mail-archive.com)*
  > &gt;&gt; &gt; &gt; All of the other algorithms being added are already in &gt; https://wicg.github.io/webcrypto-modern-algos/. Links: &gt; &gt; ChaCha20-Poly1305: &gt; https://wicg.github.io/webcrypto-modern-algos/#chacha20-poly1305 &gt; ML-DSA: http...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16785.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto Chromestatus Wed, 17 Jun 2026 06:38:17 -0700 Contact emails \[email&#160;...
- [\[blink-dev\] Intent to Prototype: Algorithm Updates in WebCrypto](https://www.mail-archive.com/blink-dev@chromium.org/msg14813.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > \[blink-dev\] Intent to Prototype: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Algorithm Updates in WebCrypto Chromestatus Fri, 17 Oct 2025 21:11:04 -0700 Contact emails \[email&#160;pr...
- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Algorithm Updates i...
- [\[blink-dev\] Ready for Developer Testing: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16678.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > \[blink-dev\] Ready for Developer Testing: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Algorithm Updates in WebCrypto Chromestatus Wed, 03 Jun 2026 10:10:48 -0700 Contact email...
- [Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17360.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto Javier Fernandez Thu, 03 Sep 2026 03:12:27 -0700 Hi, Just some question abou...
- [\[blink-dev\] Re: Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17351.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > \[blink-dev\] Re: Intent to Ship: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Algorithm Updates in WebCrypto Hubert Chao Wed, 02 Sep 2026 10:51:52 -0700 Some additional information: X-W...
- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com · 2026-07-29T21:58:10)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh yo...
- [GitHub - WICG/webcrypto-modern-algos: Proposal for the addition of various modern algorithms to the Web Cryptography API, as well as feature detection for algorithm support · GitHub](https://github.com/WICG/webcrypto-modern-algos) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Proposal for the addition of various modern algorithms to the Web Cryptography API, as well as feature detection for algorithm support - WICG/webcrypto-modern-algos
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1282) *(github.com · 2025-08-06T12:55:07)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Specification title Modern Algorithms in WebCrypto Specification or proposal URL (if available) https://&lt;strong&gt;wicg.github.io/webcrypto-modern-algos&lt;/strong&gt;/ Explainer URL (if available) No response Proposal auth...
- [Proposal: Implement "Modern Algorithms in the Web Cryptography API" (WICG specification) · Issue #1738 · awslabs/llrt · GitHub](https://github.com/awslabs/llrt/issues/1738) *(github.com · 2026-08-24T07:05:33)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > &lt;strong&gt;The WICG is incubating a specification that adds post-quantum secure and modern cryptographic algorithms to the Web Cryptography API&lt;/strong&gt;, much like X25519 was incubated before being merged into Web Cryptography: https://wicg.gi...
- [implement a subset of "Modern Algorithms in the Web Cryptography API" by panva · Pull Request #6403 · cloudflare/workerd · GitHub](https://github.com/cloudflare/workerd/pull/6403) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Refs: #3642 From https://&lt;strong&gt;wicg.github.io/webcrypto-modern-algos&lt;/strong&gt;/ this implements: crypto.subtle.getPublicKey() SubtleCrypto.supports() ML-KEM (768, 1024) ML-DSA (44, 65, 87) SHA3 (256, 384, 512) Ch...
- [LibWeb: A whole bunch of WebCrypto fixes by shannonbooth · Pull Request #12788 · LadybirdBrowser/ladybird · GitHub](https://github.com/LadybirdBrowser/ladybird/pull/12788) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > The usage intersection and normalized value of a usages list contain each recognized usage at most once, but we only sorted them, so duplicate usages passed to generateKey(), importKey() and friends showed up repeatedly in CryptoKey.usages....
- [script: Update spec text of WebCrypto API by kkoyung · Pull Request #41180 · servo/servo · GitHub](https://github.com/servo/servo/pull/41180) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Update a few spec texts of WebCrypto API with respect to recent changes in the Web Cryptography and Modern Algorithms in WICG that refines some expressions. No behavioral changes. ... Testing: No behavioral changes. Existing tests suffice. ...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1370) *(github.com)*
- [github.com](https://github.com/paulmillr/noble-post-quantum/issues/43) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/641) *(github.com)*
- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com)*
- [GitHub - WICG/webcrypto-modern-algos: Proposal for the addition of various modern algorithms to the Web Cryptography API, as well as feature detection for algorithm support · GitHub](https://github.com/WICG/webcrypto-modern-algos) *(github.com)*
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1282) *(github.com)*
- [Proposal: Implement "Modern Algorithms in the Web Cryptography API" (WICG specification) · Issue #1738 · awslabs/llrt · GitHub](https://github.com/awslabs/llrt/issues/1738) *(github.com)*
- [implement a subset of "Modern Algorithms in the Web Cryptography API" by panva · Pull Request #6403 · cloudflare/workerd · GitHub](https://github.com/cloudflare/workerd/pull/6403) *(github.com)*
- [LibWeb: A whole bunch of WebCrypto fixes by shannonbooth · Pull Request #12788 · LadybirdBrowser/ladybird · GitHub](https://github.com/LadybirdBrowser/ladybird/pull/12788) *(github.com)*
- [script: Update spec text of WebCrypto API by kkoyung · Pull Request #41180 · servo/servo · GitHub](https://github.com/servo/servo/pull/41180) *(github.com)*
- [GitHub - paulmillr/noble-post-quantum: Auditable & minimal JS implementation of public-key post-quantum cryptography · GitHub](https://github.com/paulmillr/noble-post-quantum) *(github.com)*
- [webcrypto-modern-algos/README.md at main · WICG/webcrypto-modern-algos · GitHub](https://github.com/WICG/webcrypto-modern-algos/blob/main/README.md) *(github.com)*
- [Modern Algorithms in WebCrypto · Issue #220 · WICG/proposals · GitHub](https://github.com/WICG/proposals/issues/220) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 61 result(s) found across 11 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/5198951632470016" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"wicg.github.io/webcrypto-modern-algos" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Algorithm Updates in WebCrypto" API` — *Core feature API query* (8 returned)
  - `"Algorithm Updates in WebCrypto" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"post-quantum" OR "browser-provided" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Algorithm Updates in WebCrypto" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Algorithm Updates in WebCrypto" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Web Cryptography API" ("ML-KEM" OR "ML-DSA" OR "ChaCha20-Poly1305") (guide OR tutorial OR post-quantum)` — *Find developer blog posts and tutorials explaining quantum-resistant cryptography and new ciphers in WebCrypto.* (8 returned)
  - `"crypto.subtle.generateKey" ("ML-KEM" OR "ML-DSA" OR "X-Wing" OR "ChaCha20-Poly1305")` — *Locate code snippets, WebIDL definitions, and direct JavaScript usage examples of the updated subtle crypto algorithms.* (8 returned)
  - `"webcrypto-modern-algos" OR ("Web Crypto" "ML-KEM" "Intent to Ship")` — *Identify browser engine implementation status, standards tracking, and vendor Intent to Ship announcements.* (5 returned)
  - `"WebCrypto" ("post-quantum" OR "PQC") ("ML-KEM" OR "ML-DSA") (site:news.ycombinator.com OR site:github.com OR site:reddit.com)` — *Discover developer sentiment, issues, and discussions on major tech forums regarding modern PQC algorithm support in browsers.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "web-cryptography", shared with 4 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "web-cryptography": Chrome 55.7% passing (stable)*
- **Sources cited by the AI synthesis:** 9 result(s) found — **8 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 11 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5198951632470016)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5198951632470016)
- [Specification](https://wicg.github.io/webcrypto-modern-algos)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/450627017)
