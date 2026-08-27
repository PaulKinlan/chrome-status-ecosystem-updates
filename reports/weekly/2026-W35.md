# 🌐 Chrome Web Platform Ecosystem Report — 2026-W35

> **Generated on:** 2026-08-27 | **Target Milestones:** Chrome 154
> **Search Engine:** Gemini (Google Search Grounding) | **Analysis Model:** Google Gemini 2.5 Flash

## 📊 Executive Snapshot

| Metric | Count | Description |
| :--- | :--- | :--- |
| **Features Tracked** | `24` | APIs & platform features analyzed across milestones |
| **High Ecosystem Momentum** | `5` | Features with active community discussions & publications |
| **Multi-Engine Consensus** | `0` | Broad alignment across Chromium, Gecko, and WebKit |
| **Contested / Concerns** | `3` | Features with open vendor or security/privacy objections |
| **New Mentions This Week** | `4` | Net new articles, discussions, or standards updates |

## 📋 Features Index

| Feature | Milestone | Category | Momentum | Consensus | Developer Pulse |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [Web app HTML install element](#5152834368700416-web-app-html-install-element) | Chrome 154 | `Enabled by default` | **High** | Contested / Concerns Raised | Mixed / Skeptical |
| [Web Install API](#5183481574850560-web-install-api) | Chrome 154 | `Enabled by default` | **High** | Contested / Concerns Raised | Mixed / Skeptical |
| [Additional Windowing Controls](#5201832664629248-additional-windowing-controls) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | Neutral |
| [Algorithm Updates in WebCrypto](#5198951632470016-algorithm-updates-in-webcrypto) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | Positive / High Interest |
| [Fetch API: Forward reason from AbortController to fetch Response](#5158507786665984-fetch-api-forward-reason-from-abortcontroller-to-fetch-response) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | Positive / High Interest |
| [CORS enforcement for Background Fetch](#6210300985606144-cors-enforcement-for-background-fetch) | Chrome 154 | `Enabled by default` | **Moderate** | Chromium-Led | Cautiously Optimistic |
| [Local Network Access restrictions for Background Fetch](#6225598451154944-local-network-access-restrictions-for-background-fetch) | Chrome 154 | `Enabled by default` | **Moderate** | Chromium-Led | Cautiously Optimistic |
| [Add options bag to WebSocket constructor](#5080055102439424-add-options-bag-to-websocket-constructor) | Chrome 154 | `Enabled by default` | **Moderate** | Chromium-Led | Cautiously Optimistic |
| [Media element pseudo-classes](#5068277495758848-media-element-pseudo-classes) | Chrome 154 | `Enabled by default` | **Moderate** | Chromium-Led | Cautiously Optimistic |
| [CSS4 text-decoration-skip-spaces](#4832783806627840-css4-text-decoration-skip-spaces) | Chrome 154 | `Enabled by default` | **Moderate** | Chromium-Led | Cautiously Optimistic |
| [Window Shape API](#5075144470036480-window-shape-api) | Chrome 154 | `Enabled by default` | **Moderate** | Chromium-Led | Cautiously Optimistic |
| [CSS Symbols()](#5146996093616128-css-symbols) | Chrome 154 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | Cautiously Optimistic |
| [Secure Payment Confirmation: Locale Validation](#5126146013396992-secure-payment-confirmation-locale-validation) | Chrome 154 | `Enabled by default` | **Moderate** | Chromium-Led | Cautiously Optimistic |
| [FontFace width attribute and font-width descriptor](#5145402365050880-fontface-width-attribute-and-font-width-descriptor) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | Neutral |
| [Renewed HTML insertion&streaming methods](#5054329641893888-renewed-html-insertionstreaming-methods) | Chrome 154 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | Neutral |
| [Support targetAddressSpace option for WebSockets](#4779920606756864-support-targetaddressspace-option-for-websockets) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | Neutral |
| [WebGPU: WGSL Fragment Depth](#5663304168112128-webgpu-wgsl-fragment-depth) | Chrome 154 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | Neutral |
| [CSS text-decoration-inset](#5178263526834176-css-text-decoration-inset) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | Neutral |
| [Expose CSSStyleValue hierarchy to Worker contexts](#5114591051907072-expose-cssstylevalue-hierarchy-to-worker-contexts) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | Neutral |
| [Responsively-sized <iframe>](#5108373464547328-responsively-sized-iframe) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | Neutral |
| [Support for specialized WebHID devices on Android](#5172464636133376-support-for-specialized-webhid-devices-on-android) | Chrome 154 | `In developer trial (Behind a flag)` | **Emerging** | Contested / Concerns Raised | Mixed / Skeptical |
| [Iterator Includes](#5205192866922496-iterator-includes) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | Neutral |
| [Private Verification Tokens](#6210457816924160-private-verification-tokens) | Chrome 154 | `Origin trial` | **Quiet** | Chromium-Led | Neutral |
| [WebTransport headers and responseHeaders](#5194104408506368-webtransport-headers-and-responseheaders) | Chrome 154 | `Enabled by default` | **Quiet** | Chromium-Led | Neutral |

---

## 🔍 Feature Ecosystem Deep Dives

<a id="5152834368700416-web-app-html-install-element"></a>
### [Web app HTML install element](https://chromestatus.com/feature/5152834368700416)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5152834368700416](https://chromestatus.com/feature/5152834368700416) · [chromestatuslite.com/feature/5152834368700416](https://chromestatuslite.com/feature/5152834368700416)
- **Chromium Bug:** [https://issues.chromium.org/issues/454827186](https://issues.chromium.org/issues/454827186)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `Oppose`

#### 📝 Overview

Triggers a request for the browser to install a web app, given a manifest URL and optional manifest ID. The <install> element enables cross-origin web app installation without JavaScript and provides a better developer experience than handling beforeinstallprompt events. Enterprises can control this in two ways - (1) Enterprise policy, WebAppInstallByUserEnabled, can disable user web app installs broadly, including installs initiated via navigator.install() and <install>. Or (2) Permissions Policy, web-app-installation, can allow or disallow use of this feature on origins the enterprise controls (for example, internal sites/iframes).

> **Motivation:** The web is currently unable to install web apps. The capability must be baked into the platform to allow for websites to distribute content without relying on proprietary protocols or invoking platform specific stores. 

A web install element democratizes application distribution and allows developers to broaden the reach of their content.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 136)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** Web app HTML install element is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Contested / Concerns Raised standards alignment and mixed / skeptical developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser vendors have raised architectural, security, or privacy considerations in standards position trackers.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Install web apps with the new HTML install element" (32 points, 14 comments).

#### 💬 Community Discussions & Developer Reactions

- [Install web apps with the new HTML install element](https://news.ycombinator.com/item?id=48360474) — *Hacker News (32 pts, 14 comments)*
- [Install web apps with the new HTML install element](https://news.ycombinator.com/item?id=48125969) — *Hacker News (3 pts, 0 comments)*

#### 📚 Articles, Tutorials & Guides

- [Web app HTML install element Documentation](https://docs.google.com/document/d/1rGvLhD4SR8Y9M1wVmqgyesPNkbZGU7HOqlttjEFJ5Vo/edit?tab=t.tmx19oox759l#heading=h.j3tt49hqiuck) *(docs.google.com)*
- [El nuevo HTML install: instala PWAs sin JavaScript](https://azirgo.com/blog/html-install-element-pwa/) *(azirgo.com)*
- [[blink-dev] Intent to Experiment: Web app HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg16195.html) *(mail-archive.com)*
- [[blink-dev] Re: Intent to Experiment: Web app HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg16233.html) *(mail-archive.com)*

#### 🧪 Interactive Demos & Samples

- [Web app HTML install element Demo](https://microsoftedge.github.io/Demos/pwa-install-element)
- [Web app HTML install element Demo](https://kbhlee2121.github.io/pwa/web-install-manifest-url/only-elements.html)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=app-html-install-element) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (4 verified) · `hackernews` (2 verified) · `standards` (0 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5183481574850560-web-install-api"></a>
### [Web Install API](https://chromestatus.com/feature/5183481574850560)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5183481574850560](https://chromestatus.com/feature/5183481574850560) · [chromestatuslite.com/feature/5183481574850560](https://chromestatuslite.com/feature/5183481574850560)
- **Specification:** [https://github.com/w3c/manifest/pull/1175](https://github.com/w3c/manifest/pull/1175)
- **Chromium Bug:** [https://issues.chromium.org/issues/333795265](https://issues.chromium.org/issues/333795265)
- **Browser Signals:** Chrome: `In development` · Firefox: `No signal` · Safari: `Oppose`

#### 📝 Overview

Triggers a request for the browser to install a web app, given a manifest URL and optional manifest ID. The navigator.install() method enables cross-origin web app installation and provides a better developer experience than handling beforeinstallprompt events. Enterprises can control this in two ways - (1) Enterprise policy, WebAppInstallByUserEnabled, can disable user web app installs broadly, including installs initiated via navigator.install() and <install>. Or (2) Permissions Policy, web-app-installation, can allow or disallow use of this feature on origins the enterprise controls (for example, internal sites/iframes).

> **Motivation:** The web is currently unable to install web apps. The capability must be baked into the platform to allow for websites to distribute content without relying on proprietary protocols or invoking platform specific stores. 

Web Install democratizes application distribution and allows developers to broaden the reach of their content.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 110)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** Web Install API is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Contested / Concerns Raised standards alignment and mixed / skeptical developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser vendors have raised architectural, security, or privacy considerations in standards position trackers.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "The Web Install API is ready for testing" (3 points, 0 comments).

#### 💬 Community Discussions & Developer Reactions

- [The Web Install API is ready for testing](https://news.ycombinator.com/item?id=46040517) — *Hacker News (3 pts, 0 comments)*

#### 📚 Articles, Tutorials & Guides

- [Web Install API Documentation](https://docs.google.com/document/d/12nSXJLm8mW0gWZ_yjlXfrV8r9gwJliVt4WVa-209-KA/edit?tab=t.0) *(docs.google.com)*
- [Enable the Web Install API](https://progressier.com/pwa-capabilities/web-install-api) *(progressier.com)*
- [The Web Install API is ready for testing - Microsoft Edge Blog](https://blogs.windows.com/msedgedev/2025/11/24/the-web-install-api-is-ready-for-testing/) *(blogs.windows.com)*
- [web install API - navigator.install | Demos](https://microsoftedge.github.io/Demos/pwa-web-install-api/) *(microsoftedge.github.io)*
- [r/PWA on Reddit: Web Install API - A glimmer of hope](https://www.reddit.com/r/PWA/comments/1oub6ml/web_install_api_a_glimmer_of_hope/) *(reddit.com)*
- [MSEdgeExplainers/WebInstall/explainer.md at main · MicrosoftEdge/MSEdgeExplainers](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/WebInstall/explainer.md) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Web Install API Demo](https://microsoftedge.github.io/Demos/pwa-install-api)
- [Web Install API Demo](https://kbhlee2121.github.io/pwa/web-install-manifest-url/index.html)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=install-api) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (9 verified) · `hackernews` (1 verified) · `standards` (0 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5201832664629248-additional-windowing-controls"></a>
### [Additional Windowing Controls](https://chromestatus.com/feature/5201832664629248)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5201832664629248](https://chromestatus.com/feature/5201832664629248) · [chromestatuslite.com/feature/5201832664629248](https://chromestatuslite.com/feature/5201832664629248)
- **Specification:** [https://www.w3.org/TR/window-management/#api-window-minimize-method](https://www.w3.org/TR/window-management/#api-window-minimize-method)
- **Chromium Bug:** [https://issues.chromium.org/issues/40192345](https://issues.chromium.org/issues/40192345)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Enable web applications to maximize, minimize, and restore their windows, control whether the window can be resized, and introspect the corresponding window state.

The Window Management permission is required for new JS API controls (window.maximize()/minimize()/restore()/setResizable(bool)). The new CSS media features display-state and resizable are not gated behind a permission as they can follow the non-AWC API toggled states as well.

This feature is an enhancement of the Window Management API:
https://chromestatus.com/feature/5252960583942144

> **Motivation:** Virtual Desktop Infrastructure (VDI) web clients have limited abilities to integrate remote application windows with the local desktop environment, which creates suboptimal experiences for their users. Currently, they can only present full disjoint remote desktop environments (e.g. in a local fullscreen window), or present individual remote applica...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 105)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Analysis:** Additional Windowing Controls is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and neutral developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Additional Windowing Controls](https://github.com/WebKit/standards-positions/issues/96) [open] `concerns: privacy`, `topic: app-like capabilities`, `concerns: integration`, `venue: none / personal repository`, `from: Google`, `concerns: annoyance`
- **Mozilla:** [Additional Windowing Controls](https://github.com/mozilla/standards-positions/issues/712) [open] 
- **Mozilla:** [New 'onmove' event handler for the Window object](https://github.com/mozilla/standards-positions/issues/938) [closed] `position: defer`
- **W3C TAG:** [WG New Spec: Additional Windowing Controls](https://github.com/w3ctag/design-reviews/issues/1246) [open] `Review type: horizontal review`

#### 📚 Articles, Tutorials & Guides

- [Additional Windowing Controls · Issue #96 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/96) *(github.com)*
- [[Proposal] Additional Windowing Controls](https://discourse.wicg.io/t/proposal-additional-windowing-controls/6044/) *(discourse.wicg.io)*
- [Additional Windowing Controls](https://chromestatus.com/feature/5201832664629248) *(chromestatus.com)*

#### 🧪 Interactive Demos & Samples

- [Additional Windowing Controls Demo](https://awc-demo-4a08a808.web.app)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=additional-windowing-controls) (1 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (3 verified) · `hackernews` (0 verified) · `standards` (4 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5198951632470016-algorithm-updates-in-webcrypto"></a>
### [Algorithm Updates in WebCrypto](https://chromestatus.com/feature/5198951632470016)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5198951632470016](https://chromestatus.com/feature/5198951632470016) · [chromestatuslite.com/feature/5198951632470016](https://chromestatuslite.com/feature/5198951632470016)
- **Specification:** [https://wicg.github.io/webcrypto-modern-algos](https://wicg.github.io/webcrypto-modern-algos)
- **Chromium Bug:** [https://issues.chromium.org/issues/450627017](https://issues.chromium.org/issues/450627017)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Neutral` · Safari: `Neutral`

#### 📝 Overview

Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API. This will enable developers to have access browser-provided implementations of common quantum-resistant cryptographic algorithms standardized by NIST.

* ML-KEM - 768, 1024
* ML-DSA - 44, 65, 87
* ChaCha20-Poly1305
* X-Wing

> **Motivation:** Web Crypto exposes various low-level primitives, however none of the public/private key cryptography is currently quantum-resistant 

Adding quantum-resistant cryptography as a primitive to the existing WebCrypto APIs allows Javascript cryptography libraries to automatically use browser-provided cryptography (which may be more securely implemented ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 100)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Algorithm Updates in WebCrypto is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: [webcrypto-shim](https://www.npmjs.com/package/webcrypto-shim) (v0.1.7) for progressive enhancement.

#### 📦 Polyfills & NPM Ecosystem

- [webcrypto-shim](https://www.npmjs.com/package/webcrypto-shim) `v0.1.7` *(Verified Polyfill)* — Web Cryptography API shim for legacy browsers
- [webcrypto-core](https://www.npmjs.com/package/webcrypto-core) `v1.9.2` — Common layer to be used by crypto libraries based on WebCrypto API for input validation.
- [@peculiar/webcrypto](https://www.npmjs.com/package/@peculiar/webcrypto) `v1.7.1` *(Verified Polyfill)* — A WebCrypto Polyfill for NodeJS
- [iron-webcrypto](https://www.npmjs.com/package/iron-webcrypto) `v2.0.0` — a cryptographic utility for sealing-unsealing a JSON object using symmetric key encryption with message integrity verification

#### 📚 Articles, Tutorials & Guides

- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com)*
- [[blink-dev] Ready for Developer Testing: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16678.html) *(mail-archive.com)*
- [[blink-dev] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16785.html) *(mail-archive.com)*
- [Algorithm Updates in WebCrypto](https://chromestatus.com/feature/5198951632470016) *(chromestatus.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=algorithm-updates-in-webcrypto) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (4 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (4 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5158507786665984-fetch-api-forward-reason-from-abortcontroller-to-fetch-response"></a>
### [Fetch API: Forward reason from AbortController to fetch Response](https://chromestatus.com/feature/5158507786665984)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5158507786665984](https://chromestatus.com/feature/5158507786665984) · [chromestatuslite.com/feature/5158507786665984](https://chromestatuslite.com/feature/5158507786665984)
- **Specification:** [https://fetch.spec.whatwg.org](https://fetch.spec.whatwg.org)
- **Chromium Bug:** [https://issues.chromium.org/issues/502133195](https://issues.chromium.org/issues/502133195)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `Closed Without a Position`

#### 📝 Overview

Surfaces the abort reason, if one is provided, to the methods of the Response object and its ReadableStream, rather than just the fetch promise. This fills a gap in our compliance with the standard, surfacing the developer-supplied abort reason everywhere it is intended to.

> **Motivation:** An AbortController can be passed into fetch to allow a request to be aborted. This is already supported; see https://chromestatus.com/feature/5631483679080448.

When calling abort, you can optionally pass in an "abort reason", and the original fetch promise, if it hasn't already resolved, should be rejected with that reason. This is currently worki...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 80)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Fetch API: Forward reason from AbortController to fetch Response is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: [abortcontroller-polyfill](https://www.npmjs.com/package/abortcontroller-polyfill) (v1.7.8) for progressive enhancement.

#### 📦 Polyfills & NPM Ecosystem

- [abortcontroller-polyfill](https://www.npmjs.com/package/abortcontroller-polyfill) `v1.7.8` *(Verified Polyfill)* — Polyfill/ponyfill for the AbortController DOM API + optional patching of fetch (stub that calls catch, doesn't actually abort request).
- [@remix-run/web-fetch](https://www.npmjs.com/package/@remix-run/web-fetch) `v4.4.2` — Web API compatible fetch implementation
- [node-fetch-native](https://www.npmjs.com/package/node-fetch-native) `v1.6.7` — better fetch for Node.js. Works on any JavaScript runtime!
- [node-fetch](https://www.npmjs.com/package/node-fetch) `v3.3.2` — A light-weight module that brings Fetch API to node.js

#### 📚 Articles, Tutorials & Guides

- [[blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17191.html) *(mail-archive.com)*
- [Re: [blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17242.html) *(mail-archive.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=fetch-api%3A-forward-reason-from-abortcontroller-to-fetch-response) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (2 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (4 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="6210300985606144-cors-enforcement-for-background-fetch"></a>
### [CORS enforcement for Background Fetch](https://chromestatus.com/feature/6210300985606144)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6210300985606144](https://chromestatus.com/feature/6210300985606144) · [chromestatuslite.com/feature/6210300985606144](https://chromestatuslite.com/feature/6210300985606144)
- **Specification:** [https://wicg.github.io/background-fetch](https://wicg.github.io/background-fetch)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Starting in Chrome 154, the Background Fetch API will enforce Cross-Origin Resource Sharing (CORS). 
This update aligns Chromium's implementation with the intent of the [Background Fetch spec](https://wicg.github.io/background-fetch/). This ensures that Background Fetch requests are subject to the same security policies, such as Local Network Access checks. 
This update prevents sites from bypassing CORS (and other security policy checks) by using Background Fetch instead of regular [Fetch](https://fetch.spec.whatwg.org/).

> **Motivation:** This fixes a security issue where Background Fetch unintentionally bypasses security policies such as CORS (and CORP/COEP/DIP).

(crbug.com/515243254 is our meta bug tracking all of the different web platform security issues with Background Fetch.)

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (Activity Score: 70)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** CORS enforcement for Background Fetch is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) (v3.6.20) for progressive enhancement.

#### 📦 Polyfills & NPM Ecosystem

- [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) `v3.6.20` *(Verified Polyfill)* — A window.fetch polyfill.
- [cors](https://www.npmjs.com/package/cors) `v2.8.6` — Node.js CORS middleware
- [react-native-background-fetch](https://www.npmjs.com/package/react-native-background-fetch) `v4.4.2` — iOS & Android BackgroundFetch API implementation for React Native
- [@ardatan/sync-fetch](https://www.npmjs.com/package/@ardatan/sync-fetch) `v0.0.1` — Synchronous version of the Fetch API
- [expo-background-fetch](https://www.npmjs.com/package/expo-background-fetch) `v57.0.14` — Expo universal module for BackgroundFetch API

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=cors-enforcement-for-background-fetch) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (0 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (5 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="6225598451154944-local-network-access-restrictions-for-background-fetch"></a>
### [Local Network Access restrictions for Background Fetch](https://chromestatus.com/feature/6225598451154944)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6225598451154944](https://chromestatus.com/feature/6225598451154944) · [chromestatuslite.com/feature/6225598451154944](https://chromestatuslite.com/feature/6225598451154944)
- **Specification:** [https://wicg.github.io/background-fetch](https://wicg.github.io/background-fetch)
- **Chromium Bug:** [https://crbug.com/455486148](https://crbug.com/455486148)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `No signal`

#### 📝 Overview

Background Fetch requests will soon require that the service worker's origin has the necessary Local Network Access (LNA) permission in order to send requests to local or loopback servers.

This aligns Chromium's implementation with the intent of the Background Fetch spec, which states that such requests go through the Fetch spec and have the same security policies applied to them, in this case LNA checks. This prevents sites from bypassing LNA checks by using [Background Fetch spec](https://wicg.github.io/background-fetch/) instead of regular [Fetch](https://fetch.spec.whatwg.org/).

For enterprises, you can use existing LNA enterprise policies in the same way you previously would have for regular Fetch API requests from service workers:
- [LocalNetworkAccessRestrictionsTemporaryOptOut](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut)
- [LocalNetworkAccessAllowedForUrls](https://chromeenterprise.google/policies/#LocalNetworkAccessAllowedForUrls)
- [LoopbackNetworkAllowedForUrls](https://chromeenterprise.google/policies/#LoopbackNetworkAllowedForUrls)
- [LocalNetworkAccessPermissionsPolicyDefaultEnabled](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled)
- [LocalNetworkAccessIpAddressSpaceOverrides](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides)).

> **Motivation:** This fixes a security issue where Background Fetch unintentionally bypasses security policies such as Local Network Access checks.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (Activity Score: 70)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Local Network Access restrictions for Background Fetch is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: [react-native-fetch-api](https://www.npmjs.com/package/react-native-fetch-api) (v3.0.0) for progressive enhancement.

#### 📦 Polyfills & NPM Ecosystem

- [is-network-error](https://www.npmjs.com/package/is-network-error) `v1.3.2` — Check if a value is a Fetch network error
- [react-native-fetch-api](https://www.npmjs.com/package/react-native-fetch-api) `v3.0.0` *(Verified Polyfill)* — A fetch API polyfill for React Native with text streaming support.

#### 📚 Articles, Tutorials & Guides

- [[blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)*
- [[blink-dev] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html) *(mail-archive.com)*
- [Re: [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17209.html) *(mail-archive.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=local-network-access-restrictions-for-background-fetch) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (3 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (2 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5080055102439424-add-options-bag-to-websocket-constructor"></a>
### [Add options bag to WebSocket constructor](https://chromestatus.com/feature/5080055102439424)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5080055102439424](https://chromestatus.com/feature/5080055102439424) · [chromestatuslite.com/feature/5080055102439424](https://chromestatuslite.com/feature/5080055102439424)
- **Specification:** [https://github.com/whatwg/websockets/pull/76](https://github.com/whatwg/websockets/pull/76)
- **Chromium Bug:** [https://crbug.com/542670554](https://crbug.com/542670554)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Add support for passing an option bag (WebSocketInit dictionary) as the second argument to the WebSocket constructor. The option bag will initially support a "protocols" option, allowing developers to specify subprotocols (mirroring the existing protocols argument), and also serves as an extension point for future options.

Before, this would be written `const socket = new WebSocket("wss://example.com:8080", "soap")`. After, this could also be written `const socket = new WebSocket("wss://example.com:8080", { protocols: "soap" })`.

See https://github.com/whatwg/websockets/issues/42 and spec PR https://github.com/whatwg/websockets/pull/76 for this change.

> **Motivation:** There is a demand for extensibility of options on the WebSocket constructor, to mirror the "option bag" approach that the Fetch API has. https://github.com/whatwg/websockets/issues/42 is requested by a number of implementors and users, and Chromium wants this as a means to add a `targetAddressSpace` option matching the one added to Fetch for Local ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (Activity Score: 60)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Add options bag to WebSocket constructor is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 📦 Polyfills & NPM Ecosystem

- [isomorphic-ws](https://www.npmjs.com/package/isomorphic-ws) `v5.0.0` — Isomorphic implementation of WebSocket
- [@httptoolkit/websocket-stream](https://www.npmjs.com/package/@httptoolkit/websocket-stream) `v6.0.1` — Use websockets with the node streams API. Works in browser and node, with all current WS versions
- [ws](https://www.npmjs.com/package/ws) `v8.21.3` — Simple to use, blazing fast and thoroughly tested websocket client and server for Node.js
- [jest-websocket-mock](https://www.npmjs.com/package/jest-websocket-mock) `v2.5.0` — Mock websockets and assert complex websocket interactions with Jest

#### 📚 Articles, Tutorials & Guides

- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com)*
- [[blink-dev] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=add-options-bag-to-websocket-constructor) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (2 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (4 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 0

---

<a id="5068277495758848-media-element-pseudo-classes"></a>
### [Media element pseudo-classes](https://chromestatus.com/feature/5068277495758848)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5068277495758848](https://chromestatus.com/feature/5068277495758848) · [chromestatuslite.com/feature/5068277495758848](https://chromestatuslite.com/feature/5068277495758848)
- **Specification:** [https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes](https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes)
- **Chromium Bug:** [https://crbug.com/40246121](https://crbug.com/40246121)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`

#### 📝 Overview

The :playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked CSS pseudo-classes match <audio> and <video> elements based on their state.

This is one of the focus areas in https://wpt.fyi/interop-2026.

> **Motivation:** Allows styling of media elements or custom media controls based on the state of the media element. For example, a large play button overlaying a video could be hidden while playing.

There is no expectation that custom media controls can be implemented entirely with CSS, as there is still a lot of state not exposed to CSS.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (Activity Score: 60)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Media element pseudo-classes is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📚 Articles, Tutorials & Guides

- [[blink-dev] Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16504.html) *(mail-archive.com)*
- [Media element pseudo-classes · Issue #1003 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1003) *(github.com)*
- [Re: [blink-dev] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16508.html) *(mail-archive.com)*
- [[blink-dev] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16505.html) *(mail-archive.com)*
- [[blink-dev] Intent to Prototype: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg15214.html) *(mail-archive.com)*
- [Media element pseudo-classes · Issue #166 · web-platform-dx/developer-signals](https://github.com/web-platform-dx/developer-signals/issues/166) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=media-element-pseudo-classes) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (6 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="4832783806627840-css4-text-decoration-skip-spaces"></a>
### [CSS4 text-decoration-skip-spaces](https://chromestatus.com/feature/4832783806627840)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/4832783806627840](https://chromestatus.com/feature/4832783806627840) · [chromestatuslite.com/feature/4832783806627840](https://chromestatuslite.com/feature/4832783806627840)
- **Specification:** [https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property](https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property)
- **Chromium Bug:** [https://issues.chromium.org/issues/40862777](https://issues.chromium.org/issues/40862777)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over whitespace characters. This allows authors to prevent decorations from being drawn under spaces, which is often more visually appealing.

> **Motivation:** Currently there is no web standard way to control whether text decorations (underlines, overlines, line-throughs) appear over whitespace characters. Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The `text-decoration-skip-spaces` property fills this gap, allo...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (Activity Score: 55)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** CSS4 text-decoration-skip-spaces is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📚 Articles, Tutorials & Guides

- [[blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html) *(mail-archive.com)*
- [[blink-dev] Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17140.html) *(mail-archive.com)*
- [CSS4 text-decoration-skip-spaces](https://chromestatus.com/feature/4832783806627840) *(chromestatus.com)*
- [Re: [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17311.html) *(mail-archive.com)*

#### 🧪 Interactive Demos & Samples

- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-001.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-002.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-003.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-004.html)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=css4-text-decoration-skip-spaces) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (4 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5075144470036480-window-shape-api"></a>
### [Window Shape API](https://chromestatus.com/feature/5075144470036480)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5075144470036480](https://chromestatus.com/feature/5075144470036480) · [chromestatuslite.com/feature/5075144470036480](https://chromestatuslite.com/feature/5075144470036480)
- **Specification:** [https://explainers-by-googlers.github.io/chromeos-iwa-apis](https://explainers-by-googlers.github.io/chromeos-iwa-apis)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Window Shape API enables allowlisted [Isolated Web Apps](https://chromeos.dev/en/web/isolated-web-apps) on ChromeOS to have a customized window shape. By enabling non-rectangular and non-contiguous window layouts, developers can implement unique user experiences (such as widgets, floating panels, and overlays) that match the look-and-feel of native applications. The `window.setShape` API requires the window to be in _unframed_ display mode and requires the window-management permission to be granted.

Administrators can manage this feature with existing policies for window management:  
- [DefaultWindowManagementSetting](https://chromeenterprise.google/policies/#DefaultWindowManagementSetting) configures the default state for the window management for all apps. The policies below can override this default.  
- [WindowManagementAllowedForUrls](https://chromeenterprise.google/policies/#WindowManagementAllowedForUrls) allows IWAs with specified origins to enter unframed mode and set custom window shapes without any user interaction.  
- [WindowManagementBlockedForUrls](https://chromeenterprise.google/policies/#WindowManagementBlockedForUrls) blocks the permission for specified origins, forcing Chrome to remove any custom window shapes and fallback to other available display modes.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (Activity Score: 55)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Window Shape API is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📚 Articles, Tutorials & Guides

- [Window Shape API Documentation](https://docs.google.com/document/d/1zPr1QgS-bXsJE7nrO44zx9RBopR4gHuvHxfcqxsX5Ag/edit?tab=t.0#heading=h.pcgro84kqnh3) *(docs.google.com)*
- [Window Shape API behaves oddly under Chrome Win ...](https://issues.chromium.org/issues/40343068) *(issues.chromium.org)*
- [[blink-dev] Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16945.html) *(mail-archive.com)*
- [Remove Window Shape API · Issue #6654 · libsdl-org/SDL](https://github.com/libsdl-org/SDL/issues/6654) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Window Shape API Demo](https://github.com/paulinagacek/Set-Shape-demo)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=window-shape-api) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (4 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5146996093616128-css-symbols"></a>
### [CSS Symbols()](https://chromestatus.com/feature/5146996093616128)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5146996093616128](https://chromestatus.com/feature/5146996093616128) · [chromestatuslite.com/feature/5146996093616128](https://chromestatuslite.com/feature/5146996093616128)
- **Specification:** [https://drafts.csswg.org/css-counter-styles-3/#symbols-function](https://drafts.csswg.org/css-counter-styles-3/#symbols-function)
- **Chromium Bug:** [https://issues.chromium.org/issues/40747844](https://issues.chromium.org/issues/40747844)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `Positive`

#### 📝 Overview

The CSS symbols() function lets authors define a counter style inline instead of first declaring a named @counter-style at-rule.
It builds an anonymous counter style from a list of string symbols plus an optional counting system (cyclic, numeric, alphabetic, symbolic, or fixed), and is accepted as the counter style in list-style-type, the list-style shorthand, and counter() / counters().

> **Motivation:** Defining a custom list marker in CSS today requires authoring a named  @counter-style  rule and referencing it by name, which is needlessly verbose for one-off, anonymous markers. The symbols() function lets authors define the same counter style inline, without inventing or managing a global name. It works wherever a counter style is accepted, spec...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (Activity Score: 50)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** CSS Symbols() is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Partial Multi-Engine Interest standards alignment and cautiously optimistic developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 🏛️ Browser Standards Positions

- **WebKit:** [[css-counter-styles-3] CSS symbols() function](https://github.com/WebKit/standards-positions/issues/714) [open] 

#### 📚 Articles, Tutorials & Guides

- [symbols() | CSS-Tricks](https://css-tricks.com/almanac/functions/s/symbols/) *(css-tricks.com)*
- [CSS symbols() Function](https://www.quackit.com/css/functions/css_symbols_function.cfm) *(quackit.com)*

#### 🧪 Interactive Demos & Samples

- [CSS Symbols() Demo](https://developer.mozilla.org/en-US/docs/Web/CSS/symbols)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=symbols()) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (2 verified) · `hackernews` (0 verified) · `standards` (1 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5126146013396992-secure-payment-confirmation-locale-validation"></a>
### [Secure Payment Confirmation: Locale Validation](https://chromestatus.com/feature/5126146013396992)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5126146013396992](https://chromestatus.com/feature/5126146013396992) · [chromestatuslite.com/feature/5126146013396992](https://chromestatuslite.com/feature/5126146013396992)
- **Specification:** [https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale](https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale)
- **Chromium Bug:** [https://crbug.com/535278878](https://crbug.com/535278878)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Updates Secure Payment Confirmation's `locale` data field to return a Not Supported DOMException if none of the language tags provided in the field match the language used by the Secure Payment Confirmation's dialog. If the field is not set or empty, this validation is skipped.

This helps web developers with matching the language of the data that they are supplying to Secure Payment Confirmation with the dialog.

> **Motivation:** This feature amends Secure Payment Confirmation so that web developers can align the language of data elements that they supply to Secure Payment Confirmation with the language used by the Secure Payment Confirmation dialog.

Currently web developers can provide a list of language tags for Secure Payment Confirmation to use in their dialog. But Sec...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (Activity Score: 40)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Secure Payment Confirmation: Locale Validation is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📦 Polyfills & NPM Ecosystem

- [os-locale](https://www.npmjs.com/package/os-locale) `v8.0.0` — Get the system locale
- [@generaltranslation/format](https://www.npmjs.com/package/@generaltranslation/format) `v0.1.8` — Locale and formatting utilities for General Translation
- [@lingo.dev/_locales](https://www.npmjs.com/package/@lingo.dev/_locales) `v0.3.4` — Lingo.dev locales

#### 📚 Articles, Tutorials & Guides

- [[blink-dev] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=secure-payment-confirmation%3A-locale-validation) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (1 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (3 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5145402365050880-fontface-width-attribute-and-font-width-descriptor"></a>
### [FontFace width attribute and font-width descriptor](https://chromestatus.com/feature/5145402365050880)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5145402365050880](https://chromestatus.com/feature/5145402365050880) · [chromestatuslite.com/feature/5145402365050880](https://chromestatuslite.com/feature/5145402365050880)
- **Specification:** [https://drafts.csswg.org/css-fonts-4/#font-width-prop](https://drafts.csswg.org/css-fonts-4/#font-width-prop)
- **Chromium Bug:** [https://issues.chromium.org/issues/543938492](https://issues.chromium.org/issues/543938492)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `No signal`

#### 📝 Overview

Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch. Aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications. Developers can now inspect or initialize font face widths using FontFace.width and CSS font-width interchangeably with stretch and font-stretch.

> **Motivation:** CSS Font Loading and CSS Fonts 4 define width as the primary FontFace descriptor attribute and @font-face descriptor, while retaining stretch as a legacy alias. Chromium previously ignored the width constructor member and font-width descriptor, causing Web Platform Tests to fail. Exposing width aligns Chromium with the updated specification.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (Activity Score: 30)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Analysis:** FontFace width attribute and font-width descriptor is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📚 Articles, Tutorials & Guides

- [[blink-dev] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)*
- [[blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17196.html) *(mail-archive.com)*
- [Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=fontface-width-attribute-and-font-width-descriptor) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (3 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5054329641893888-renewed-html-insertionstreaming-methods"></a>
### [Renewed HTML insertion&streaming methods](https://chromestatus.com/feature/5054329641893888)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5054329641893888](https://chromestatus.com/feature/5054329641893888) · [chromestatuslite.com/feature/5054329641893888](https://chromestatuslite.com/feature/5054329641893888)
- **Specification:** [https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md#resulting-api](https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md#resulting-api)
- **Chromium Bug:** [https://issues.chromium.org/issues/491743369](https://issues.chromium.org/issues/491743369)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Positive` · Safari: `No signal`

#### 📝 Overview

Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document.

- Positional methods (before/after/append/prepend/replaceWith) that take HTML as argument, effectively replacing insertAdjacentHTML.
- Streaming methods (stream{Append}HTML{Unsafe}) which return a WritableStream
- Passing {runScripts} as part of SetHTMLUnsafeOptions, mimicking createContextualFragment behavior.
- Supporting createParserOptions in trusted types, allowing trusted types to override scripting mode and sanitizer.

> **Motivation:** Updating HTML dynamically from script has multiple disjointed API, each with its own subtle differences.
Developers can partially update an element using insertAdjacentHTML, use sanitizer with setHTML, execute scripts with createContextualFragment, stream with detached documents. 

This can be confusing and frustrating to web developers, as well as...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (Activity Score: 30)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Neutral**
- **Analysis:** Renewed HTML insertion&streaming methods is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Emerging with Partial Multi-Engine Interest standards alignment and neutral developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📚 Articles, Tutorials & Guides

- [[blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)*
- [RE: [blink-dev] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17049.html) *(mail-archive.com)*
- [[blink-dev] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17004.html) *(mail-archive.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=renewed-html-insertion%26streaming-methods) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (3 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="4779920606756864-support-targetaddressspace-option-for-websockets"></a>
### [Support targetAddressSpace option for WebSockets](https://chromestatus.com/feature/4779920606756864)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/4779920606756864](https://chromestatus.com/feature/4779920606756864) · [chromestatuslite.com/feature/4779920606756864](https://chromestatuslite.com/feature/4779920606756864)
- **Specification:** [https://github.com/WICG/local-network-access/pull/125](https://github.com/WICG/local-network-access/pull/125)
- **Chromium Bug:** [https://crbug.com/517413738](https://crbug.com/517413738)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Add support for passing a targetAddressSpace option in the WebSocket constructor. This allows developers to specify that a WebSocket connection to a public hostname should be treated as going to a "local" or "loopback" destination, matching the existing support on the Fetch API. The main use case is to offer an escape hatch to bypass mixed content restrictions for connecting to local servers that cannot yet support HTTPS (as Local Network Access permissions require a secure context).

Example: A public site that connects to a local server can use a hostname to avoid needing manual configuration of the exact private IP address in use:

`const ws = new WebSocket("ws://local-server.example", { targetAddressSpace: "local"}`

This will flag the WebSocket connection as going to a local address, bypassing mixed content blocking when run in a secure context. The user must grant the site the local network permission for the WebSocket connection to succeed, and the hostname must resolve to a local IP address (otherwise it will be blocked).

This builds on https://chromestatus.com/feature/5080055102439424 which adds an options bag to the WebSocket constructor.

> **Motivation:** To avoid mixed content blocking for local network WebSockets requests, web developers have relied on having their users manually configure their local network IP addresses, which is awkward at best. Adding support for the targetAddressSpace option in WebSockets aligns it with the Fetch API. This has also been requested by developers (e.g., https://...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (Activity Score: 30)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Analysis:** Support targetAddressSpace option for WebSockets is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📦 Polyfills & NPM Ecosystem

- [rpc-websockets](https://www.npmjs.com/package/rpc-websockets) `v10.0.1` — JSON-RPC 2.0 implementation over WebSockets for Node.js
- [@httptoolkit/websocket-stream](https://www.npmjs.com/package/@httptoolkit/websocket-stream) `v6.0.1` — Use websockets with the node streams API. Works in browser and node, with all current WS versions

#### 📚 Articles, Tutorials & Guides

- [[blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=support-targetaddressspace-option-for-websockets) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (1 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (2 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5663304168112128-webgpu-wgsl-fragment-depth"></a>
### [WebGPU: WGSL Fragment Depth](https://chromestatus.com/feature/5663304168112128)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5663304168112128](https://chromestatus.com/feature/5663304168112128) · [chromestatuslite.com/feature/5663304168112128](https://chromestatuslite.com/feature/5663304168112128)
- **Specification:** [https://github.com/gpuweb/gpuweb/pull/6299](https://github.com/gpuweb/gpuweb/pull/6299)
- **Chromium Bug:** [https://crbug.com/457993779](https://crbug.com/457993779)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `Positive`

#### 📝 Overview

Adds the ability to provide a `less` or `greater` modifier to the `@builtin(frag_depth)` in WGSL.

The current `@builtin(frag_depth)` can potentially introduce a performance penalty due to disabling the early-Z optimizations on a draw call. The new modifiers allow the explicit setting of the buffer mode and allow the early-Z optimizations to be applied.

> **Motivation:** In the current WGSL specification, the mere act of writing to @builtin(frag_depth) often incurs a significant performance penalty because driver heuristics cannot guarantee that the fragment shader output will adhere to the depth written by the rasterizer's interpolated depth. Consequently, writing to frag_depth typically forces the GPU to disable ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (Activity Score: 30)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Neutral**
- **Analysis:** WebGPU: WGSL Fragment Depth is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Emerging with Partial Multi-Engine Interest standards alignment and neutral developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📚 Articles, Tutorials & Guides

- [[blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)*
- [[blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17276.html) *(mail-archive.com)*
- [Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webgpu%3A-wgsl-fragment-depth) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (3 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5178263526834176-css-text-decoration-inset"></a>
### [CSS text-decoration-inset](https://chromestatus.com/feature/5178263526834176)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5178263526834176](https://chromestatus.com/feature/5178263526834176) · [chromestatuslite.com/feature/5178263526834176](https://chromestatuslite.com/feature/5178263526834176)
- **Specification:** [https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset)
- **Chromium Bug:** [https://issues.chromium.org/issues/468928416](https://issues.chromium.org/issues/468928416)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`

#### 📝 Overview

CSS text-decoration-inset controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges. It supports auto, length, and percentage values, including one-value and two-value syntax for setting the start and end offsets. This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements.


sampler: https://static.januschka.com/i-468928416/?asddsaasd
MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset

CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

> **Motivation:** This change implements CSS text-decoration-inset (CSS Text Decoration Level 4), including percentage values. It gives authors direct control over decoration inset and reduces the need for wrapper/pseudo-element workarounds used to fine-tune underline/overline/line-through rendering.



sampler: https://static.januschka.com/i-468928416/?asddsaasd
MD...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (Activity Score: 20)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Analysis:** CSS text-decoration-inset is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📚 Articles, Tutorials & Guides

- [[blink-dev] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17255.html) *(mail-archive.com)*
- [Re: [blink-dev] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=text-decoration-inset) (40 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (2 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5114591051907072-expose-cssstylevalue-hierarchy-to-worker-contexts"></a>
### [Expose CSSStyleValue hierarchy to Worker contexts](https://chromestatus.com/feature/5114591051907072)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5114591051907072](https://chromestatus.com/feature/5114591051907072) · [chromestatuslite.com/feature/5114591051907072](https://chromestatuslite.com/feature/5114591051907072)
- **Specification:** [https://www.w3.org/TR/css-typed-om-1/#stylevalue-subclasses](https://www.w3.org/TR/css-typed-om-1/#stylevalue-subclasses)
- **Chromium Bug:** [https://issues.chromium.org/issues/534781956](https://issues.chromium.org/issues/534781956)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`

#### 📝 Overview

The CSS Typed OM spec exposes the CSSStyleValue hierarchy to worker global scopes ([Exposed=(Window, Worker, PaintWorklet, LayoutWorklet)]), but Blink only exposed CSSStyleValue, CSSKeywordValue, CSSNumericValue, CSSUnitValue and CSSUnparsedValue to Window and the worklets. As a result these constructors were undefined in Workers, unlike in Firefox and Safari.

> **Motivation:** Aligns Chrome with the spec's [Exposed] set and removes a cross‑thread inconsistency (these constructors are currently undefined in workers); enables off‑main‑thread CSS value manipulation

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (Activity Score: 20)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Analysis:** Expose CSSStyleValue hierarchy to Worker contexts is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📚 Articles, Tutorials & Guides

- [[blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17113.html) *(mail-archive.com)*
- [Re: [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17118.html) *(mail-archive.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=expose-cssstylevalue-hierarchy-to-worker-contexts) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (2 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5108373464547328-responsively-sized-iframe"></a>
### [Responsively-sized <iframe>](https://chromestatus.com/feature/5108373464547328)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5108373464547328](https://chromestatus.com/feature/5108373464547328) · [chromestatuslite.com/feature/5108373464547328](https://chromestatuslite.com/feature/5108373464547328)
- **Specification:** [https://drafts.csswg.org/css-sizing-4/#responsive-iframes](https://drafts.csswg.org/css-sizing-4/#responsive-iframes)
- **Chromium Bug:** [https://issues.chromium.org/issues/418397278](https://issues.chromium.org/issues/418397278)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Allow sites to opt into iframes having responsive sizing (sizing the <iframe> element in the parent document to the iframe document's layout overflow sizing, so that scrolling in the child document is avoided).

> **Motivation:** This is a natural feature to have for iframes, when the site wants to
render the iframe content so that it looks seamless with the parent frame and avoids scrollbars.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (Activity Score: 20)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Analysis:** Responsively-sized <iframe> is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📚 Articles, Tutorials & Guides

- [Responsively-sized <iframe>](https://chromestatus.com/feature/5108373464547328) *(chromestatus.com)*
- [Responsively-sized <iframe> · Issue #4036 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4036) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=responsively-sized-%3Ciframe%3E) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (2 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5172464636133376-support-for-specialized-webhid-devices-on-android"></a>
### [Support for specialized WebHID devices on Android](https://chromestatus.com/feature/5172464636133376)

- **Milestone:** Chrome 154 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5172464636133376](https://chromestatus.com/feature/5172464636133376) · [chromestatuslite.com/feature/5172464636133376](https://chromestatuslite.com/feature/5172464636133376)
- **Specification:** [https://wicg.github.io/webhid/index.html](https://wicg.github.io/webhid/index.html)
- **Chromium Bug:** [http://crbug.com/40628009](http://crbug.com/40628009)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Negative` · Safari: `Negative`

#### 📝 Overview

WebHID now allows web applications to interact with a wider range of devices. Standard Human Interface Device (HID) examples include mice, keyboards, touchscreens, and gamepads. Those are accessible with high-level input events. However, specialized HID devices and features (for example, custom keyboards, game controllers, and call control headsets) require extended access. 

WebHID allows web applications to request access, send and receive HID reports, and retrieve information about the report descriptor. This feature was previously launched on desktop platforms (Windows, macOS, Linux, and ChromeOS). Support on Android is planned for Chrome 157. To read more, see [Connect to uncommon HID devices](https://developer.chrome.com/docs/extensions/how-to/web-platform/webhid).

This feature can be controlled by the following enterprise policies: 
* [DefaultWebHidGuardSetting](https://chromeenterprise.google/policies/#DefaultWebHidGuardSetting)
* [WebHidAllowAllDevicesForUrls](https://chromeenterprise.google/policies/#WebHidAllowAllDevicesForUrls)
* [WebHidAllowDevicesForUrls](https://chromeenterprise.google/policies/#WebHidAllowDevicesForUrls)
* [WebHidAllowDevicesWithHidUsagesForUrls](https://chromeenterprise.google/policies/#WebHidAllowDevicesWithHidUsagesForUrls)
* [WebHidAskForUrls](https://chromeenterprise.google/policies/#WebHidAskForUrls)
* [WebHidBlockedForUrls](https://chromeenterprise.google/policies/#WebHidBlockedForUrls)

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (Activity Score: 20)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** Support for specialized WebHID devices on Android is currently In developer trial (Behind a flag) in Chrome 154. Verified ecosystem momentum is Emerging with Contested / Concerns Raised standards alignment and mixed / skeptical developer pulse.

**Key Recommendations & Takeaways:**
- Non-Chromium browser vendors have raised architectural, security, or privacy considerations in standards position trackers.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📚 Articles, Tutorials & Guides

- [Support for specialized WebHID devices on Android Documentation](https://web.dev/hid/) *(web.dev)*
- [Support for specialized WebHID devices on Android Documentation](https://web.dev/hid-examples/) *(web.dev)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=support-for-specialized-webhid-devices-on-android) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (2 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5205192866922496-iterator-includes"></a>
### [Iterator Includes](https://chromestatus.com/feature/5205192866922496)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5205192866922496](https://chromestatus.com/feature/5205192866922496) · [chromestatuslite.com/feature/5205192866922496](https://chromestatuslite.com/feature/5205192866922496)
- **Specification:** [https://tc39.es/proposal-iterator-includes](https://tc39.es/proposal-iterator-includes)
- **Chromium Bug:** [https://issues.chromium.org/issues/504886973](https://issues.chromium.org/issues/504886973)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `In development`

#### 📝 Overview

A TC39 proposal to allow the developer to ask whether an iterator yields a given value. Analogue to `Array.prototype.includes`.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (Activity Score: 10)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Analysis:** Iterator Includes is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📚 Articles, Tutorials & Guides

- [arrays - JavaScript check whether iterator includes value - Stack Overflow](https://stackoverflow.com/questions/64093419/javascript-check-whether-iterator-includes-value) *(stackoverflow.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=iterator-includes) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (1 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="6210457816924160-private-verification-tokens"></a>
### [Private Verification Tokens](https://chromestatus.com/feature/6210457816924160)

- **Milestone:** Chrome 154 (Origin trial)
- **ChromeStatus:** [chromestatus.com/feature/6210457816924160](https://chromestatus.com/feature/6210457816924160) · [chromestatuslite.com/feature/6210457816924160](https://chromestatuslite.com/feature/6210457816924160)
- **Chromium Bug:** [https://crbug.com/500396188](https://crbug.com/500396188)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Automated traffic is increasing across the web, and many websites have responded with more user friction in the form of CAPTCHAs and other challenges to combat unwanted traffic. This degrades the web user experience for all users, with a particularly outsized impact to users in private browsing modes.

Private Verification Tokens (PVT) is a low entropy mechanism that allows websites to transfer the trust that their users have established in regular browsing into private browsing mode to reduce their experienced user friction. PVTs are issued during a regular browsing session and redeemed in private browsing mode.

> **Motivation:** Due to the significant increase in automation over the past 1-2 years, driven largely by AI, websites have responded by adding more challenges to determine if clients are likely to be human.  In particular, this has had an outsized impact on users in private browsing mode, who tend to have similar client characteristics as automated clients, such a...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Quiet** (Activity Score: 3)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Analysis:** Private Verification Tokens is currently Origin trial in Chrome 154. Verified ecosystem momentum is Quiet with Chromium-Led standards alignment and neutral developer pulse.

**Key Recommendations & Takeaways:**
- In active Origin Trial in Chrome 154. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Explainer for the Private Verification Tokens" (2 points, 0 comments).

#### 💬 Community Discussions & Developer Reactions

- [Explainer for the Private Verification Tokens](https://news.ycombinator.com/item?id=47760044) — *Hacker News (2 pts, 0 comments)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=private-verification-tokens) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (0 verified) · `hackernews` (1 verified) · `standards` (0 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5194104408506368-webtransport-headers-and-responseheaders"></a>
### [WebTransport headers and responseHeaders](https://chromestatus.com/feature/5194104408506368)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5194104408506368](https://chromestatus.com/feature/5194104408506368) · [chromestatuslite.com/feature/5194104408506368](https://chromestatuslite.com/feature/5194104408506368)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers)
- **Chromium Bug:** [https://issues.chromium.org/issues/551850821](https://issues.chromium.org/issues/551850821)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `In development`

#### 📝 Overview

Adds support for passing custom HTTP request headers via WebTransportOptions and inspecting server response headers through the WebTransport instance. This allows web applications to supply metadata, authentication tokens, and custom parameters during the initial CONNECT handshake and access server-provided headers once the connection is established.

> **Motivation:** The WebTransport constructor requires support for custom HTTP request headers to address several technical limitations in authentication, routing, and capability negotiation.

Without custom headers, developers must pass authentication tokens in URL query strings, which exposes credentials in server logs and telemetry, or authenticate over an initi...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Quiet** (Activity Score: 0)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Analysis:** WebTransport headers and responseHeaders is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Quiet with Chromium-Led standards alignment and neutral developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webtransport-headers-and-responseheaders) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `web` (0 verified) · `hackernews` (0 verified) · `standards` (0 found) · `npm` (0 verified) · `wpt` (0 found)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

