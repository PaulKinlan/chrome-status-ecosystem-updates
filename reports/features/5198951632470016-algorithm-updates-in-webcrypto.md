# Algorithm Updates in WebCrypto

> **Report Week:** 2026-W44 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API. This will enable developers to have access browser-provided implementations of common quantum-resistant cryptographic algorithms standardized by NIST.  \* ML-KEM - 768, 1024 \* ML-DSA - 44, 65, 87 \* ChaCha20-Poly1305 \* X-Wing

### Motivation

Web Crypto exposes various low-level primitives, however none of the public/private key cryptography is currently quantum-resistant   Adding quantum-resistant cryptography as a primitive to the existing WebCrypto APIs allows Javascript cryptography libraries to automatically use browser-provided cryptography (which may be more securely implemented and/or backed by a FIPS-validated underlying library), rather than compiling OpenSSL to WebAssembly or reimplementing algorithms in pure Javascript (or simply not being PQC).  Many Javascript cryptography libraries fall back to WebCrypto when it is available—these libraries will now be able to use BoringSSL-provided implementations instead of pure Javascript implementations.

## Ecosystem Status

- **Momentum:** Moderate (footprint 370 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chromium is leading the rollout of modern WebCrypto additions by enabling NIST-standardized post-quantum primitives (ML-KEM, ML-DSA, X-Wing) and ChaCha20-Poly1305 by default in Chrome 155, introducing native Key Encapsulation Mechanism (KEM) methods to SubtleCrypto. While security engineers and edge runtimes welcome native hardware/FIPS-backed cryptographic implementations over bulky WebAssembly or pure JavaScript bundles, engine consensus remains non-committal with both Mozilla and WebKit holding officially neutral positions. Consequently, cross-browser interoperability remains fragmented, leaving developers reliant on Chromium-specific deployments and existing polyfills for cross-platform applications.

### Recommendations
- Actionable Advice: Teams implementing post-quantum encryption or ChaCha20 should treat these APIs as progressive enhancements, testing for native support via algorithm checks or feature detection before executing. Production applications must retain robust WebAssembly or JavaScript fallbacks until Safari and Firefox deliver native implementation milestones.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."
- Standards Activity (Mozilla): Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Modern Algorithms in WebCrypto](https://github.com/WebKit/standards-positions/issues/641) [closed]
- **Mozilla:** [Request for Mozilla Position on Modern Algorithms in WebCrypto](https://github.com/mozilla/standards-positions/issues/1282) [closed]

## Web-features Group

*group-level data: web-features [`web-cryptography`](https://webstatus.dev/features/web-cryptography), shared with 4 other ChromeStatus features*

- Share of tests passing in the web-features group `web-cryptography` on [wpt.fyi](https://wpt.fyi/results?q=feature:web-cryptography) (via webstatus.dev) — stable: Chrome 55.4% · Edge 55.4% · Firefox 60.8% · Safari 52.4%; experimental: Chrome 56% · Edge 56% · Firefox 62.6% · Safari 52.4%
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/67)) · concerns: `venue`

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/release-notes/151) *(developer.chrome.com)*
  > subtle\`) \*\*ML-KEM (FIPS 203)\*\*: Parameter sets \`768\` and \`1024\` (Module-Lattice-Based Key-Encapsulation Mechanism)
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Google introduced these algorithm updates initially as an origin trial in \*\*Chrome 151\*\* before moving to beta and stable releases across \*\*Chrome 154 / 155\*\*
- [appauxin.com](https://appauxin.com/chrome-155-jpeg-xl-features) *(appauxin.com)*
  > Google introduced these algorithm updates initially as an origin trial in \*\*Chrome 151\*\* before moving to beta and stable releases across \*\*Chrome 154 / 155\*\* \*\*Symmetric Crypto Parity\*\*: The long-requested inclusion of \`ChaCha20-Poly1305\` resolves a...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > Microsoft documented the arrival of ML-KEM, ML-DSA, X-Wing, and ChaCha20-Poly1305 in Chromium Edge under its Web Cryptography API updates, linking directly to updated MDN references
- [ietf.org](https://datatracker.ietf.org/meeting/122/materials/slides-122-jose-modern-algorithms-in-the-web-cryptography-api-00) *(datatracker.ietf.org)*
  > Co-edited by Daniel Huigens (Proton AG) and Filip Skokan (Okta / author of \`jose\` and \`hpke-js\`), hosted under the Web Platform Incubator Community Group (WICG) Community members and library maintainers have coordinated with this WICG proposal
- [Post-Quantum Cryptography Reaches the Browser: ML-KEM and ML-DSA in Chrome 151's Web Crypto API \| Trade Assistance LLC](https://trade-assistance.com/blog/post-quantum-web-crypto-api-chrome-151) *(trade-assistance.com)*
  > Articles discussing the rollout walk through code examples showing how ML-KEM and X-Wing interact with client-side code Authors emphasize the practical significance for application-layer security: while browsers already use ML-KEM / X-Wing under the ...
- [note.com](https://note.com/haru_tech_note/n/n0122bdeffd98) *(note.com)*
  > Authors emphasize the practical significance for application-layer security: while browsers already use ML-KEM / X-Wing under the hood for HTTPS/TLS handshakes, this change enables \*\*application-level\*\* confidentiality and digital signatures Standard...
- [cloudflare.com](https://blog.cloudflare.com/workers-ml-kem-ml-dsa-support) *(blog.cloudflare.com)*
  > Community members and library maintainers have coordinated with this WICG proposal For example, Cloudflare documented their work tracking modern WebCrypto algorithms in their runtime (\`workerd\`), aligning serverless environments with browser SubtleCr...
- [chromestatus.com](https://chromestatus.com/feature/5198951632470016?gate=6209605889818624) *(chromestatus.com)*
  > Standards tracking issues across \`mozilla/standards-positions\` and \`WebKit/standards-positions\` reflect \*\*neutral\*\* positions on incubating modern algorithms in WICG, with consensus that expanding to NIST-approved post-quantum primitives is desirable...
- [Re: \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16786.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto Mike Taylor Wed, 17 Jun 2026 06:48:25 -0700 On 6/17/26 9:38 a.m., Chromest...
- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Algorithm Updates in WebCrypt...
- [\[blink-dev\] Re: Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17351.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Algorithm Updates in WebCrypto Hubert Chao Wed, 02 Sep 2026 10:51:52 -0700 Some additional information: X-Wing (MLKEM...
- [Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17363.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto 'Daniel Huigens' via blink-dev Thu, 03 Sep 2026 11:48:58 -0700 Hi all, WebKit have res...
- [Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17360.html) *(mail-archive.com)*
  > ... \*Contact emails\* \[email protected\] \*Explainer\* /No information provided/ \*Specification\* https://wicg.github.io/webcrypto-modern-algos \*Summary\* &lt;strong&gt;Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorit...
- [\[blink-dev\] Ready for Developer Testing: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16678.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary &lt;strong&gt;Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API&lt;/stro...
- [\[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17349.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary &lt;strong&gt;Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API&lt;/stro...
- [\[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16785.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary &lt;strong&gt;Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API&lt;/stro...
- [Chrome clears Intent to Ship post-quantum WebCrypto algorithms · freenode](https://freenode.net/article/chrome-clears-intent-to-ship-post-quantum-webcrypto-algorithms) *(freenode.net · 2026-09-09T15:38:21)*
  > Libraries that already prefer WebCrypto when present could then call into BoringSSL-backed implementations instead of shipping pure JavaScript or compiling OpenSSL to WebAssembly, or skipping post-quantum support entirely. The algorithms are defined ...
- [Node.js v24.7.0 Released – Post-Quantum Cryptography, Modern WebCrypto, and More - DEV Community](https://dev.to/zaheetdev/nodejs-v2470-released-post-quantum-cryptography-modern-webcrypto-and-more-1df9) *(dev.to · 2025-08-29T16:26:17)*
  > ChaCha20-Poly1305 (modern, fast AEAD cipher) SHA-3 &amp; SHAKE digests · ML-KEM &amp; ML-DSA (post-quantum cryptography for WebCrypto) subtle.getPublicKey() – Extract a public key from a CryptoKey · SubtleCrypto.supports() – Feature detection for alg...
- [Web Crypto API - Node.js](https://www.mintlify.com/nodejs/node/api/webcrypto) *(mintlify.com · 2026-03-04T11:11:01)*
  > const { publicKey, privateKey } = await subtle.generateKey({ name: &#x27;ML-KEM-768&#x27;, }, true, \[&#x27;encapsulateBits&#x27;, &#x27;decapsulateBits&#x27;\]); const { sharedSecret, ciphertext } = await subtle.encapsulateBits( { name: &#x27;ML-KEM-7...
- [Web Crypto adds ML-KEM and ML-DSA support · Changelog](https://developers.cloudflare.com/changelog/post/2026-09-28-webcrypto-modern-algorithms) *(developers.cloudflare.com · 2026-10-01T01:11:30)*
  > const keyPair = await crypto.subtle.generateKey(&quot;ML-KEM-768&quot;, false, \[ &quot;encapsulateBits&quot;, &quot;decapsulateBits&quot;, \]); if (!(&quot;publicKey&quot; in keyPair)) { throw new Error(&quot;Expected an ML-KEM key pair&quot;); } cons...
- [\[blink-dev\] Intent to Prototype: Algorithm Updates in WebCrypto](https://www.mail-archive.com/blink-dev@chromium.org/msg14813.html) *(mail-archive.com)*
  > Explainer None Specification https://wicg.github.io/webcrypto-modern-algos Summary &lt;strong&gt;Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API&lt;/strong&gt;. This will enab...
- [Re: \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16788.html) *(mail-archive.com)*
  > \*Contact emails\* \[email protected\] ...github.io/webcrypto-modern-algos \*Summary\* &lt;strong&gt;Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API&lt;/strong&gt;. This will enable...
- [Sign and verify with ML-DSA-65 with WebCrypto — ECDSA.com](https://ecdsa.com/howto/sign-verify-ml-dsa-webcrypto) *(ecdsa.com)*
  > Sign and verify with ML-DSA-65 with WebCrypto — ECDSA.com Skip to content ecdsa .com ML-DSA-65 sign/verify · WebCrypto How to sign and verify with ML-DSA-65 in WebCrypto To sign and verify with ML-DSA-65 in WebCrypto, call crypto.subtle.generateKey({...
- [Chrome 155 for SaaS Frontends: What to Adopt \| CodeFlamme](https://www.codeflamme.com/insights/chrome-155-for-saas-frontends-jpeg-xl-post-quantum-webcrypto-retryable-modules) *(codeflamme.com)*
  > Chrome 155 for SaaS Frontends: What to Adopt \| CodeFlamme Book a Discovery Call Start a Project Book a Discovery Call Start a Project WEB Web Dev 5 min read Chrome 155 for SaaS Frontends: JPEG XL, Post-Quantum WebCrypto, and Retryable Module Loads Ch...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16786.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Re: \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto Mike Taylor Wed, 17 Jun 2026 06:48:25 -0700 On 6/17/26 9:38 a.m....
- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com · 2026-07-29T21:58:10)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. ...
- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Algorithm Updates i...
- [Proposal: Implement "Modern Algorithms in the Web Cryptography API" (WICG specification) · Issue #1738 · awslabs/llrt](https://github.com/awslabs/llrt/issues/1738) *(github.com · 2026-08-24T07:05:33)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Proposal: Implement "Modern Algorithms in the Web Cryptography API" (WICG specification) · Issue #1738 · awslabs/llrt · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sign...
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com · 2025-08-06T12:55:07)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ...
- [implement a subset of "Modern Algorithms in the Web Cryptography API" by panva · Pull Request #6403 · cloudflare/workerd](https://github.com/cloudflare/workerd/pull/6403) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Refs: #3642 From https://&lt;strong&gt;wicg.github.io/webcrypto-modern-algos&lt;/strong&gt;/ this implements: crypto.subtle.getPublicKey() SubtleCrypto.supports() ML-KEM (768, 1024) ML-DSA (44, 65, 87) SHA3 (256, 384, 512) Ch...
- [script: Implement KanagrooTwelve algorithm in WebCrypto API by kkoyung · Pull Request #45699 · servo/servo](https://github.com/servo/servo/pull/45699) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Implement KanagrooTwelve algorithm in our WebCrypto API. This includes a WebIDL dictionary KanagrooTwelveParams and the &quot;digest&quot; operation of KanagrooTwelve. Spec: https://&lt;strong&gt;wicg.github.io/webcrypto-modern-algos&lt;/strong&gt;/#ka...
- [\[blink-dev\] Re: Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17351.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > \[blink-dev\] Re: Intent to Ship: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Algorithm Updates in WebCrypto Hubert Chao Wed, 02 Sep 2026 10:51:52 -0700 Some additional information: X-W...
- [Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17363.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto 'Daniel Huigens' via blink-dev Thu, 03 Sep 2026 11:48:58 -0700 Hi all, WebKi...
- [crypto: add TurboSHAKE and KangarooTwelve Web Cryptography algorithms · nodejs/node@ccd756d](https://github.com/nodejs/node/commit/ccd756d61e) *(github.com · 2026-06-23T00:06:33)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > crypto: add TurboSHAKE and KangarooTwelve Web Cryptography algorithmsPR-URL: #62183 Backport-PR-URL: #63563 Refs: https://&lt;strong&gt;wicg.github.io/webcrypto-modern-algos&lt;/strong&gt;/#kangarootwelve Refs: https://&lt;strong&gt;wicg.github.io/webcrypto-...

## 📚 Platform Documentation & Specifications

- [New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1370) *(github.com)*
- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com)*
- [Proposal: Implement "Modern Algorithms in the Web Cryptography API" (WICG specification) · Issue #1738 · awslabs/llrt](https://github.com/awslabs/llrt/issues/1738) *(github.com)*
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com)*
- [implement a subset of "Modern Algorithms in the Web Cryptography API" by panva · Pull Request #6403 · cloudflare/workerd](https://github.com/cloudflare/workerd/pull/6403) *(github.com)*
- [script: Implement KanagrooTwelve algorithm in WebCrypto API by kkoyung · Pull Request #45699 · servo/servo](https://github.com/servo/servo/pull/45699) *(github.com)*
- [crypto: add TurboSHAKE and KangarooTwelve Web Cryptography algorithms · nodejs/node@ccd756d](https://github.com/nodejs/node/commit/ccd756d61e) *(github.com)*
- [Web Cryptography: support Hybrid KEMs · Issue #36769 · denoland/deno](https://github.com/denoland/deno/issues/36769) *(github.com)*
- [GitHub - WICG/webcrypto-modern-algos: Proposal for the addition of various modern algorithms to the Web Cryptography API, as well as feature detection for algorithm support · GitHub](https://github.com/WICG/webcrypto-modern-algos) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 69 result(s) found across 11 planned queries — **23 verified relevant**
  - `"chromestatus.com/feature/5198951632470016" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"wicg.github.io/webcrypto-modern-algos" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Algorithm Updates in WebCrypto" API` — *Core feature API query* (8 returned)
  - `"Algorithm Updates in WebCrypto" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"post-quantum" OR "browser-provided" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Algorithm Updates in WebCrypto" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Algorithm Updates in WebCrypto" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `crypto.subtle.generateKey ("ML-KEM" OR "ChaCha20-Poly1305" OR "ML-DSA")` — *Finds code samples, documentation, and WebIDL usage patterns for newly added WebCrypto modern algorithms.* (8 returned)
  - `"Web Cryptography API" ("post-quantum" OR "PQC") ("ML-KEM" OR "ML-DSA") guide OR tutorial` — *Surfaces practical developer guides, explainers, and technical tutorials for using quantum-resistant algorithms in WebCrypto.* (8 returned)
  - `"webcrypto-modern-algos" OR ("WebCrypto" ("ML-KEM" OR "X-Wing") ("Intent to Ship" OR "Intent to Prototype"))` — *Tracks browser vendor implementation status, standards progression, and engine support announcements.* (8 returned)
  - `site:news.ycombinator.com OR site:reddit.com/r/javascript "WebCrypto" ("post-quantum" OR "ML-KEM" OR "ChaCha20-Poly1305")` — *Discovers developer sentiment, concerns, and community debates on adding modern post-quantum primitives to browser APIs.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "web-cryptography", shared with 4 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "web-cryptography": Chrome 55.4% passing (stable)*
- **Sources cited by the AI synthesis:** 6 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 12 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5198951632470016)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5198951632470016)
- [Specification](https://wicg.github.io/webcrypto-modern-algos)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/450627017)
