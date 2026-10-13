# Algorithm Updates in WebCrypto

> **Report Week:** 2026-W42 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API. This will enable developers to have access browser-provided implementations of common quantum-resistant cryptographic algorithms standardized by NIST.  \* ML-KEM - 768, 1024 \* ML-DSA - 44, 65, 87 \* ChaCha20-Poly1305 \* X-Wing

### Motivation

Web Crypto exposes various low-level primitives, however none of the public/private key cryptography is currently quantum-resistant   Adding quantum-resistant cryptography as a primitive to the existing WebCrypto APIs allows Javascript cryptography libraries to automatically use browser-provided cryptography (which may be more securely implemented and/or backed by a FIPS-validated underlying library), rather than compiling OpenSSL to WebAssembly or reimplementing algorithms in pure Javascript (or simply not being PQC).  Many Javascript cryptography libraries fall back to WebCrypto when it is available—these libraries will now be able to use BoringSSL-provided implementations instead of pure Javascript implementations.

## Ecosystem Status

- **Momentum:** High (footprint 410 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Modern Algorithms in WebCrypto specification is transitioning into real-world availability, led by Chromium shipping post-quantum primitives (ML-KEM, ML-DSA, X-Wing) and ChaCha20-Poly1305 enabled by default in Chrome 155. Cross-runtime interest is high across Node.js, Deno, and Cloudflare Workers, but cross-browser consensus remains split, with non-Chromium engines offering neutral stances rather than uniform commitments.

### Recommendations
- Actionable Advice: Web engineering teams should adopt these post-quantum primitives using strict feature detection (such as the proposed subtle.supports() method) as a progressive enhancement. For cross-browser applications, maintain WebAssembly or pure JavaScript fallbacks until Firefox and Safari deploy native algorithm support.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."
- Standards Activity (Mozilla): Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Modern Algorithms in WebCrypto](https://github.com/WebKit/standards-positions/issues/641) [closed]
- **Mozilla:** [Request for Mozilla Position on Modern Algorithms in WebCrypto](https://github.com/mozilla/standards-positions/issues/1282) [closed]

## Web-features Group

*group-level data: web-features [`web-cryptography`](https://webstatus.dev/features/web-cryptography), shared with 4 other ChromeStatus features*

- Share of tests passing in the web-features group `web-cryptography` on [wpt.fyi](https://wpt.fyi/results?q=feature:web-cryptography) (via webstatus.dev) — stable: Chrome 68.9% · Edge 68.9% · Firefox 72.6% · Safari 72.6%; experimental: Chrome 70.8% · Edge 70.8% · Firefox 82.6% · Safari 15.8%
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/67)) · concerns: `venue`

## 📰 Ecosystem Blogs & Articles

- [trade-assistance.com](https://trade-assistance.com/blog/post-quantum-web-crypto-api-chrome-151) *(trade-assistance.com)*
  > The \*\*"Algorithm Updates in WebCrypto"\*\* initiative (incubated under the W3C/WICG draft specification \[Modern Algorithms in the Web Cryptography API\](https://wicg.github.io/webcrypto-modern-algos/)) Key primitives added include: \* \*\*ML-KEM (FIPS 203)...
- [cloudflare.com](https://blog.cloudflare.com/workers-ml-kem-ml-dsa-support) *(blog.cloudflare.com)*
  > The \*\*"Algorithm Updates in WebCrypto"\*\* initiative (incubated under the W3C/WICG draft specification \[Modern Algorithms in the Web Cryptography API\](https://wicg.github.io/webcrypto-modern-algos/)) brings standardized post-quantum cryptography (PQC)...
- [Node.js v24.7.0 Released – Post-Quantum Cryptography, Modern WebCrypto, and More - DEV Community](https://dev.to/zaheetdev/nodejs-v2470-released-post-quantum-cryptography-modern-webcrypto-and-more-1df9) *(dev.to)*
  > The \*\*"Algorithm Updates in WebCrypto"\*\* initiative (incubated under the W3C/WICG draft specification \[Modern Algorithms in the Web Cryptography API\](https://wicg.github.io/webcrypto-modern-algos/)) brings standardized post-quantum cryptography (PQC)...
- [chromestatus.com](https://chromestatus.com/release-notes/155) *(chromestatus.com)*
  > Official Browser Roadmaps & Release Notes (Chrome for Developers / Chromium) \* \*\*Chrome Platform Status & Beta Release Notes (Chrome 151 – 155)\*\*: \* Chromium introduced a developer trial in Chrome 150, opened an \*\*Origin Trial\*\* across versions 151 t...
- [adyog.com](https://pulse.adyog.com/insights/workers-post-quantum-web-crypto-opt-in) *(pulse.adyog.com)*
  > \* \*Ecosystem Impact\*: Emphasizes shifting the burden of maintaining post-quantum code from end-application bundles to the underlying runtime (workerd/BoringSSL) Developer Tutorials & Technical Breakdowns \* \*\*Developer Deep Dives (e.g., Trade Assistan...
- [daily.dev](https://daily.dev/posts/support-for-modern-cryptographic-algorithms-in-workers-zjlyer7w3) *(daily.dev)*
  > It highlights how popular client and edge libraries (such as \`panva/jose\` and \`panva/hpke\`) can now automatically delegate to native runtime primitives instead of shipping multi-kilobyte polyfills
- [nodejs.org](https://beta.docs.nodejs.org/webcrypto) *(beta.docs.nodejs.org)*
  > js documented active implementation support for the WICG draft across versions 24+ and 26
- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Algorithm Updates in WebCrypt...
- [Chrome for Developers \| daily.dev](https://daily.dev/posts/chrome-for-developers-l1rzewnk2) *(daily.dev · 2026-10-12T15:49:54)*
  > These additions follow the draft spec at wicg.github.io/webcrypto-modern-algos, &lt;strong&gt;giving web applications access to modern post-quantum key encapsulation and signature algorithms directly in the browser&lt;/strong&gt;.
- [\[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17349.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary &lt;strong&gt;Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API&lt;/stro...
- [\[blink-dev\] Ready for Developer Testing: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16678.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary &lt;strong&gt;Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API&lt;/stro...
- [\[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16785.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary &lt;strong&gt;Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API&lt;/stro...
- [\[blink-dev\] Re: Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17351.html) *(mail-archive.com)*
  > &gt; &gt; \*Initial public proposal\* &gt; \*No information provided\* &gt; &gt; \*TAG review\* &gt; \*No information provided\* &gt; &gt; \*TAG review status\* &gt; Not applicable &gt; &gt; \*Origin Trial Name\* &gt; Additional WebCrypto Algorithms &gt; &gt; \*G...
- [Chrome clears Intent to Ship post-quantum WebCrypto algorithms · freenode](https://freenode.net/article/chrome-clears-intent-to-ship-post-quantum-webcrypto-algorithms) *(freenode.net · 2026-09-09T15:38:21)*
  > Libraries that already prefer WebCrypto when present could then call into BoringSSL-backed implementations instead of shipping pure JavaScript or compiling OpenSSL to WebAssembly, or skipping post-quantum support entirely. The algorithms are defined ...
- [Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17360.html) *(mail-archive.com)*
  > \*Initial public proposal\* /No information provided/ \*TAG review\* /No information provided/ \*TAG review status\* Not applicable \*Origin Trial Name\* Additional WebCrypto Algorithms \*Goals for experimentation\* Get a few sites to test out the new algorith...
- [\[blink-dev\] Intent to Prototype: Algorithm Updates in WebCrypto](https://www.mail-archive.com/blink-dev@chromium.org/msg14813.html) *(mail-archive.com)*
  > Explainer None Specification https://wicg.github.io/webcrypto-modern-algos Summary &lt;strong&gt;Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API&lt;/strong&gt;. This will enab...
- [Re: \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16788.html) *(mail-archive.com)*
  > \*Contact emails\* \[email protected\] ...github.io/webcrypto-modern-algos \*Summary\* &lt;strong&gt;Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API&lt;/strong&gt;. This will enable...
- [ML-KEM in WebCrypto API - dchest.com Blog](https://dchest.com/2025/08/09/mlkem-webcrypto) *(dchest.com · 2025-08-09T00:00:00)*
  > Implementing it now is important for many use cases, because attackers can record data encrypted with classical algorithms today and decrypt it later when quantum computers that can break those algorithms become available (if this ever happens). Impl...
- [WebCrypto PQ algorithms and Digital Credentials issuance · freenode](https://www.freenode.com/digest/416) *(freenode.com)*
  > WebCrypto PQ algorithms and Digital Credentials issuance · freenode free node ← digests WebCrypto PQ algorithms and Digital Credentials issuance Web Platform 2026-09-10 Chromium advanced two Intent to Ship filings on blink-dev, covering post-quantum ...
- [Chrome Platform Status](https://cr-status.appspot.com/feature/5198951632470016) *(cr-status.appspot.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com · 2026-07-29T21:58:10)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. ...
- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Algorithm Updates i...
- [New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1370) *(github.com · 2026-08-24T16:45:23)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload...
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com · 2025-08-06T12:55:07)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ...
- [script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo](https://github.com/servo/servo/pull/41615) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [script: Implement export key operation of ML-KEM by kkoyung · Pull Request #41604 · servo/servo](https://github.com/servo/servo/pull/41604) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement export key operation of ML-KEM by kkoyung · Pull Request #41604 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab...
- [script: Implement KanagrooTwelve algorithm in WebCrypto API by kkoyung · Pull Request #45699 · servo/servo](https://github.com/servo/servo/pull/45699) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement KanagrooTwelve algorithm in WebCrypto API by kkoyung · Pull Request #45699 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ...
- [script: Implement TurboSHAKE algorithm in WebCrypto by kkoyung · Pull Request #43551 · servo/servo](https://github.com/servo/servo/pull/43551) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Implement TurboSHAKE algorithm in our WebCrypto API. This includes a WebIDL dictionary \`TurboSHAKE\` and the &quot;digest&quot; operation. Specification: https://&lt;strong&gt;wicg.github.io/webcrypto-modern-algos&lt;/strong&gt;/#turboshake Testing: Pas...
- [Chrome for Developers \| daily.dev](https://daily.dev/posts/chrome-for-developers-l1rzewnk2) *(daily.dev · 2026-10-12T15:49:54)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > These additions follow the draft spec at wicg.github.io/webcrypto-modern-algos, &lt;strong&gt;giving web applications access to modern post-quantum key encapsulation and signature algorithms directly in the browser&lt;/strong&gt;.
- [Implement Hybrid KEMs in WebCrypto · Issue #47856 · servo/servo](https://github.com/servo/servo/issues/47856) *(github.com · 2026-09-07T05:54:13)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Spec: https://wicg.github.io/webcrypto-modern-algos/#hybrid-kems &lt;strong&gt;Hybrid KEMs have been merged into Modern Algorithms in WebCrypto API specification&lt;/strong&gt;. Related WPT tests also arrived in servo reposito...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/oven-sh/bun/issues/29218) *(github.com)*
- [github.com](https://github.com/libp2p/js-libp2p/discussions/3430) *(github.com)*
- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com)*
- [New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1370) *(github.com)*
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com)*
- [script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo](https://github.com/servo/servo/pull/41615) *(github.com)*
- [script: Implement export key operation of ML-KEM by kkoyung · Pull Request #41604 · servo/servo](https://github.com/servo/servo/pull/41604) *(github.com)*
- [script: Implement KanagrooTwelve algorithm in WebCrypto API by kkoyung · Pull Request #45699 · servo/servo](https://github.com/servo/servo/pull/45699) *(github.com)*
- [script: Implement TurboSHAKE algorithm in WebCrypto by kkoyung · Pull Request #43551 · servo/servo](https://github.com/servo/servo/pull/43551) *(github.com)*
- [Implement Hybrid KEMs in WebCrypto · Issue #47856 · servo/servo](https://github.com/servo/servo/issues/47856) *(github.com)*
- [GitHub - WICG/webcrypto-modern-algos: Proposal for the addition of various modern algorithms to the Web Cryptography API, as well as feature detection for algorithm support · GitHub](https://github.com/WICG/webcrypto-modern-algos) *(github.com)*
- [GitHub - Dustin4444/webcrypto-modern-algos: Proposal for the addition of various modern algorithms to the Web Cryptography API, as well as feature detection for algorithm support · GitHub](https://github.com/Dustin4444/webcrypto-modern-algos) *(github.com)*
- [Add ML-KEM and ML-DSA WebCrypto support by thibmeu · Pull Request #6872 · cloudflare/workerd](https://github.com/cloudflare/workerd/pull/6872) *(github.com)*
- [typings: add missing URLBinding methods by whsung0330 · Pull Request #59468 · nodejs/node](https://github.com/nodejs/node/pull/59468) *(github.com)*
- [Release 2025-08-27, Version 24.7.0 (Current), @targos · nodejs/node](https://github.com/nodejs/node/releases/tag/v24.7.0) *(github.com)*
- [Modern Algorithms in WebCrypto · Issue #220 · WICG/proposals · GitHub](https://github.com/WICG/proposals/issues/220) *(github.com)*
- [HPKE · Issue #2 · WICG/webcrypto-modern-algos · GitHub](https://github.com/WICG/webcrypto-modern-algos/issues/2) *(github.com)*
- [1981476 - \[meta\] Modern Algorithms in WebCrypto support](https://bugzilla.mozilla.org/show_bug.cgi?id=1981476) *(bugzilla.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 66 result(s) found across 11 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/5198951632470016" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"wicg.github.io/webcrypto-modern-algos" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Algorithm Updates in WebCrypto" API` — *Core feature API query* (6 returned)
  - `"Algorithm Updates in WebCrypto" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"post-quantum" OR "browser-provided" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Algorithm Updates in WebCrypto" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Algorithm Updates in WebCrypto" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `("crypto.subtle" OR "WebCrypto") ("ML-KEM" OR "ML-DSA" OR "ChaCha20-Poly1305") (generateKey OR importKey)` — *Finds code snippets and usage examples demonstrating key generation or importation using modern PQC algorithms and ChaCha20-Poly1305 in WebCrypto.* (8 returned)
  - `"Web Cryptography API" ("post-quantum" OR "PQC") ("ML-KEM" OR "ML-DSA") guide OR tutorial` — *Discovers developer blog posts and guides explaining the migration to and practical implementation of post-quantum cryptography in WebCrypto.* (8 returned)
  - `"webcrypto-modern-algos" OR ("WebCrypto" ("ML-KEM" OR "X-Wing") ("intent to ship" OR "intent to prototype"))` — *Tracks browser vendor adoption announcements, blink-dev intent threads, and spec progress under WICG.* (8 returned)
  - `("Web Cryptography API" OR "WebCrypto") ("ML-KEM" OR "ML-DSA" OR "ChaCha20-Poly1305") (site:github.com OR site:news.ycombinator.com OR site:reddit.com)` — *Surfaces community reactions, developer sentiment, and security discussions regarding the addition of NIST PQC standards to browsers.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "web-cryptography", shared with 4 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "web-cryptography": Chrome 68.9% passing (stable)*
- **Sources cited by the AI synthesis:** 7 result(s) found — **6 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 14 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5198951632470016)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5198951632470016)
- [Specification](https://wicg.github.io/webcrypto-modern-algos)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/450627017)
