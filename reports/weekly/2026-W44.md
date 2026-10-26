# 🌐 Chrome Web Platform Ecosystem Report — 2026-W44

> **Generated on:** 2026-10-26 | **Target Milestones:** Chrome 154, 155, 156, 157, 158
> **Search Engine:** Gemini (Google Grounded) + BRAVE | **Analysis Model:** Google Gemini (gemini-3.8-flash) | **AI synthesis:** 66 of 66 features
> **Momentum:** Momentum tiers rank this week's footprint against the other features: the change over four weeks needs an earlier number, measured the same way, for at least 10 features and half of them, and 0 of 66 have one.
> ⏱️ **Partial run:** The crawl reached its 40-minute deadline (42 minutes in) and stopped starting features: 66 of 84 were investigated, and the other 18 are not in this report. They come first in the next crawl.

## 📊 Executive Snapshot

| Metric | Count | Description |
| :--- | :--- | :--- |
| **Features Tracked** | `66` | APIs & platform features analyzed across milestones |
| **High Ecosystem Momentum** | `10` | Features in the highest momentum tier (see Methodology) |
| **Multi-Engine Consensus** | `22` | Broad alignment across Chromium, Gecko, and WebKit |
| **Contested / Concerns** | `5` | Features with open vendor or security/privacy objections |
| **New Mentions This Week** | `573` | Net new articles, discussions, or standards updates |

## ⚡ Week-over-Week Ecosystem Deltas

### 🔄 Status Transitions

- [Deprecate and remove XSLT](#4709671889534976-deprecate-and-remove-xslt): Moved from *Origin trial* to **Stepped rollout** in Chrome 158
- [HTML install element](#5152834368700416-html-install-element): Moved from *Enabled by default* to **Enabled by default** in Chrome 158
- [Web Install API](#5183481574850560-web-install-api): Moved from *Enabled by default* to **Enabled by default** in Chrome 158
- [Media element pseudo-classes](#5068277495758848-media-element-pseudo-classes): Moved from *Enabled by default* to **Enabled by default** in Chrome 158
- [SVG textPath side attribute](#5422782593761280-svg-textpath-side-attribute): Moved from *Enabled by default* to **Enabled by default** in Chrome 158
- [Prerendering cross-origin iframes](#5112398709129216-prerendering-cross-origin-iframes): Moved from *Enabled by default* to **Enabled by default** in Chrome 158
- [CSS flow-start and flow-end alignment keywords](#5069051687731200-css-flow-start-and-flow-end-alignment-keywords): Moved from *In developer trial (Behind a flag)* to **Enabled by default** in Chrome 158
- [WebTransport draining](#6427766428925952-webtransport-draining): Moved from *In developer trial (Behind a flag)* to **Enabled by default** in Chrome 158
- [WebTransport receive stream](#5109912169480192-webtransport-receive-stream): Moved from *In developer trial (Behind a flag)* to **Enabled by default** in Chrome 158
- [closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](#5100672946143232-closest-corner-and-farthest-corner-radii-for-circle-and-ellipse-basic-shapes): Moved from *Enabled by default* to **Enabled by default** in Chrome 158
- [WebTransport reliability attributes](#5094058497277952-webtransport-reliability-attributes): Moved from *In developer trial (Behind a flag)* to **Enabled by default** in Chrome 158
- [object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](#4886345347629056-object-fit-and-object-position-apply-to-svg-documents-in-object-and-embed): Moved from *Enabled by default* to **Enabled by default** in Chrome 158

### 🚀 Momentum Shifts

- [CSS random() function](#5324559251275776-css-random-function): Shifted from *Moderate* to **High** momentum
- [JPEG XL decoding support (image/jxl) in blink](#5114042131808256-jpeg-xl-decoding-support-imagejxl-in-blink): Shifted from *High* to **Moderate** momentum
- [CSS4 text-decoration-skip-spaces](#4832783806627840-css4-text-decoration-skip-spaces): Shifted from *Emerging* to **Moderate** momentum
- [CSS Symbols()](#5146996093616128-css-symbols): Shifted from *Emerging* to **Moderate** momentum
- [CSS text-decoration-inset](#5178263526834176-css-text-decoration-inset): Shifted from *Emerging* to **Moderate** momentum
- [WebGPU: atomic-vec2u-min-max](#4882016087703552-webgpu-atomic-vec2u-min-max): Shifted from *Emerging* to **Moderate** momentum
- [CSS flow-start and flow-end alignment keywords](#5069051687731200-css-flow-start-and-flow-end-alignment-keywords): Shifted from *Emerging* to **Moderate** momentum
- [CSS position-visibility:anchor{s}-valid](#5136856479039488-css-position-visibilityanchors-valid): Shifted from *High* to **Moderate** momentum
- [Long Animation Frames style and layout duration](#5171478175809536-long-animation-frames-style-and-layout-duration): Shifted from *High* to **Moderate** momentum
- [WebRTC Diagnostic Logging API](#5091582546149376-webrtc-diagnostic-logging-api): Shifted from *Emerging* to **Moderate** momentum
- [WebTransport draining](#6427766428925952-webtransport-draining): Shifted from *Moderate* to **Emerging** momentum
- [Remove FencedFrame element and window.fence APIs](#6366274495053824-remove-fencedframe-element-and-windowfence-apis): Shifted from *Moderate* to **Emerging** momentum
- [CSS corner shorthand properties ](#5152215540039680-css-corner-shorthand-properties-): Shifted from *Moderate* to **Emerging** momentum
- [Connection Allowlists - Embedded Enforcement](#5657801797009408-connection-allowlists-embedded-enforcement): Shifted from *Moderate* to **Emerging** momentum
- [Avoid caching module failures](#5214647044145152-avoid-caching-module-failures): Shifted from *Moderate* to **Emerging** momentum

### 📰 Net New Publications & Discussions

- [HTML-in-canvas](#5172548013916160-html-in-canvas): +11 article(s), 10 discussion(s)
- [Deprecate and remove XSLT](#4709671889534976-deprecate-and-remove-xslt): +16 article(s), 1 discussion(s)
- [Local network access restrictions](#5152728072060928-local-network-access-restrictions): +16 article(s)
- [HTML install element](#5152834368700416-html-install-element): +20 article(s)
- [CSS random() function](#5324559251275776-css-random-function): +4 article(s), 3 discussion(s)
- [Margin-trim](#5197863732772864-margin-trim): +10 article(s), 1 discussion(s)
- [Web Install API](#5183481574850560-web-install-api): +10 article(s)
- [Digital Credentials API (issuance support)](#5099333963874304-digital-credentials-api-issuance-support): +9 article(s), 1 discussion(s)
- [Renewed HTML insertion&streaming methods](#5054329641893888-renewed-html-insertionstreaming-methods): +13 article(s), 1 discussion(s)
- [Language Detector API on Android](#5087964794322944-language-detector-api-on-android): +13 article(s)

### ✨ Newly Tracked Features

- [Permissions Policy: focus-without-user-activation](#5179186249465856-permissions-policy-focus-without-user-activation) (Chrome 158, Enabled by default)
- [OfflineAudioContext incremental rendering](#5109900936085504-offlineaudiocontext-incremental-rendering) (Chrome 158, Enabled by default)
- [WebTransport keying material export](#4860330806214656-webtransport-keying-material-export) (Chrome 158, Enabled by default)
- [WebTransport congestion control](#5180947573112832-webtransport-congestion-control) (Chrome 158, Enabled by default)
- [Scroll snap for single-axis scroll containers](#5086608215900160-scroll-snap-for-single-axis-scroll-containers) (Chrome 158, Enabled by default)
- [WebTransport anticipated concurrent incoming streams](#5089961022980096-webtransport-anticipated-concurrent-incoming-streams) (Chrome 158, Enabled by default)
- [CSS Custom Highlight Universal Selector ::highlight(\*)](#5174965228929024-css-custom-highlight-universal-selector-highlight) (Chrome 158, Enabled by default)
- [Source Specific Multicast for Direct Sockets API](#6208452397498368-source-specific-multicast-for-direct-sockets-api) (Chrome 158, Enabled by default)
- [MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](#5188639100370944-mediasession-return-promiseundefined-from-setmicrophoneactive-and-setcameraactive) (Chrome 158, Enabled by default)

---

## 📋 Features Index

| Feature | Milestone | Category | Momentum | Consensus | Week Delta |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [HTML-in-canvas](#5172548013916160-html-in-canvas) | Chrome 157 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +11 art / +10 msgs |
| [Deprecate and remove XSLT](#4709671889534976-deprecate-and-remove-xslt) | Chrome 158 | `Stepped rollout` | **High** | Multi-Engine Consensus | 🔄 Stepped rollout |
| [Local network access restrictions](#5152728072060928-local-network-access-restrictions) | Chrome 156 | `Stepped rollout` | **High** | Partial Multi-Engine Interest | ⚡ +16 art / +0 msgs |
| [HTML install element](#5152834368700416-html-install-element) | Chrome 158 | `Enabled by default` | **High** | Contested / Concerns Raised | 🔄 Enabled by default |
| [CSS random() function](#5324559251275776-css-random-function) | Chrome 156 | `Enabled by default` | **High** | Multi-Engine Consensus | ⚡ +4 art / +3 msgs |
| [Margin-trim](#5197863732772864-margin-trim) | Chrome 155 | `Enabled by default` | **High** | Multi-Engine Consensus | ⚡ +10 art / +1 msgs |
| [Web Install API](#5183481574850560-web-install-api) | Chrome 158 | `Enabled by default` | **High** | Contested / Concerns Raised | 🔄 Enabled by default |
| [Digital Credentials API (issuance support)](#5099333963874304-digital-credentials-api-issuance-support) | Chrome 155 | `Enabled by default` | **High** | Contested / Concerns Raised | ⚡ +9 art / +1 msgs |
| [Renewed HTML insertion&streaming methods](#5054329641893888-renewed-html-insertionstreaming-methods) | Chrome 157 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +13 art / +1 msgs |
| [Language Detector API on Android](#5087964794322944-language-detector-api-on-android) | Chrome 157 | `Enabled by default` | **High** | Contested / Concerns Raised | ⚡ +13 art / +0 msgs |
| [Algorithm Updates in WebCrypto](#5198951632470016-algorithm-updates-in-webcrypto) | Chrome 155 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +7 art / +0 msgs |
| [Media element pseudo-classes](#5068277495758848-media-element-pseudo-classes) | Chrome 158 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | 🔄 Enabled by default |
| [Permissions Policy: focus-without-user-activation](#5179186249465856-permissions-policy-focus-without-user-activation) | Chrome 158 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ✨ New |
| [Additional Windowing Controls](#5201832664629248-additional-windowing-controls) | Chrome 155 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +8 art / +0 msgs |
| [JPEG XL decoding support (image/jxl) in blink](#5114042131808256-jpeg-xl-decoding-support-imagejxl-in-blink) | Chrome 155 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +10 art / +1 msgs |
| [SVG textPath side attribute](#5422782593761280-svg-textpath-side-attribute) | Chrome 158 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | 🔄 Enabled by default |
| [Prerendering cross-origin iframes](#5112398709129216-prerendering-cross-origin-iframes) | Chrome 158 | `Enabled by default` | **Moderate** | Chromium-Led | 🔄 Enabled by default |
| [Single-axis scroll containers](#5067363861004288-single-axis-scroll-containers) | Chrome 156 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +4 art / +0 msgs |
| [CSS4 text-decoration-skip-spaces](#4832783806627840-css4-text-decoration-skip-spaces) | Chrome 155 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +4 art / +0 msgs |
| [Pause media playback on not-visible iframes](#5082950457884672-pause-media-playback-on-not-visible-iframes) | Chrome 155 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +6 art / +0 msgs |
| [CSS text-overflow: &lt;string&gt; value](#6294595288825856-css-text-overflow-string-value) | Chrome 157 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +4 art / +0 msgs |
| [PredefinedColorSpace srgb-linear and display-p3-linear](#5122501071994880-predefinedcolorspace-srgb-linear-and-display-p3-linear) | Chrome 155 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +11 art / +0 msgs |
| [CSS Symbols()](#5146996093616128-css-symbols) | Chrome 155 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +5 art / +0 msgs |
| [Ship anchor-visible and anchor-valid, and deprecate the plural versions](#5136123851571200-ship-anchor-visible-and-anchor-valid-and-deprecate-the-plural-versions) | Chrome 157 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +12 art / +0 msgs |
| [CSS text-decoration-inset](#5178263526834176-css-text-decoration-inset) | Chrome 157 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +8 art / +0 msgs |
| [WebGPU: atomic-vec2u-min-max](#4882016087703552-webgpu-atomic-vec2u-min-max) | Chrome 157 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +10 art / +1 msgs |
| [CSS flow-start and flow-end alignment keywords](#5069051687731200-css-flow-start-and-flow-end-alignment-keywords) | Chrome 158 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | 🔄 Enabled by default |
| [OfflineAudioContext incremental rendering](#5109900936085504-offlineaudiocontext-incremental-rendering) | Chrome 158 | `Enabled by default` | **Moderate** | Chromium-Led | ✨ New |
| [CSS position-visibility:anchor{s}-valid](#5136856479039488-css-position-visibilityanchors-valid) | Chrome 157 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +9 art / +0 msgs |
| [Long Animation Frames style and layout duration](#5171478175809536-long-animation-frames-style-and-layout-duration) | Chrome 157 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +8 art / +0 msgs |
| [WebRTC Diagnostic Logging API](#5091582546149376-webrtc-diagnostic-logging-api) | Chrome 156 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +3 art / +0 msgs |
| [WebTransport keying material export](#4860330806214656-webtransport-keying-material-export) | Chrome 158 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ✨ New |
| [Use scroll-snap-type: pair to snap to a single element](#5124378896498688-use-scroll-snap-type-pair-to-snap-to-a-single-element) | Chrome 156 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +3 art / +2 msgs |
| [Disconnect WebSockets on BFCache entry](#5068439115923456-disconnect-websockets-on-bfcache-entry) | Chrome 157 | `Stepped rollout` | **Emerging** | Multi-Engine Consensus | ⚡ +5 art / +0 msgs |
| [WebGPU: WGSL Fragment Depth](#5663304168112128-webgpu-wgsl-fragment-depth) | Chrome 156 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +3 art / +0 msgs |
| [WebTransport congestion control](#5180947573112832-webtransport-congestion-control) | Chrome 158 | `Enabled by default` | **Emerging** | Chromium-Led | ✨ New |
| [WebTransport draining](#6427766428925952-webtransport-draining) | Chrome 158 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | 🔄 Enabled by default |
| [IndexedDB: SQLite backend](#5161589557821440-indexeddb-sqlite-backend) | Chrome 156 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +6 art / +0 msgs |
| [WebTransport receive stream](#5109912169480192-webtransport-receive-stream) | Chrome 158 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | 🔄 Enabled by default |
| [Remove FencedFrame element and window.fence APIs](#6366274495053824-remove-fencedframe-element-and-windowfence-apis) | Chrome 156 | `Deprecated` | **Emerging** | Chromium-Led | ⚡ +2 art / +0 msgs |
| [Compression dictionary transport Updates](#4895435813683200-compression-dictionary-transport-updates) | Chrome 156 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [CSS corner shorthand properties ](#5152215540039680-css-corner-shorthand-properties-) | Chrome 157 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +5 art / +0 msgs |
| [Connection Allowlists - Embedded Enforcement](#5657801797009408-connection-allowlists-embedded-enforcement) | Chrome 157 | `Origin trial` | **Emerging** | Partial Multi-Engine Interest | ⚡ +6 art / +0 msgs |
| [CSS pseudo-class for navigation source element](#6327898878377984-css-pseudo-class-for-navigation-source-element) | Chrome 156 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +4 art / +1 msgs |
| [closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](#5100672946143232-closest-corner-and-farthest-corner-radii-for-circle-and-ellipse-basic-shapes) | Chrome 158 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | 🔄 Enabled by default |
| [CORS enforcement for Background Fetch](#6210300985606144-cors-enforcement-for-background-fetch) | Chrome 157 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +6 art / +0 msgs |
| [Add javascriptURLs option to SanitizerConfig and Sanitizer](#5169798320357376-add-javascripturls-option-to-sanitizerconfig-and-sanitizer) | Chrome 157 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +5 art / +0 msgs |
| [Expose ProgressEvent in service workers](#5069584943153152-expose-progressevent-in-service-workers) | Chrome 157 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +5 art / +0 msgs |
| [Scroll snap for single-axis scroll containers](#5086608215900160-scroll-snap-for-single-axis-scroll-containers) | Chrome 158 | `Enabled by default` | **Emerging** | Chromium-Led | ✨ New |
| [WebTransport anticipated concurrent incoming streams](#5089961022980096-webtransport-anticipated-concurrent-incoming-streams) | Chrome 158 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ✨ New |
| [CSS Custom Highlight Universal Selector ::highlight(\*)](#5174965228929024-css-custom-highlight-universal-selector-highlight) | Chrome 158 | `Enabled by default` | **Emerging** | Chromium-Led | ✨ New |
| [Decisions API](#5155080092385280-decisions-api) | Chrome 157 | `In developer trial (Behind a flag)` | **Emerging** | Chromium-Led | ⚡ +3 art / +0 msgs |
| [Popup Capability Delegation](#5091965583622144-popup-capability-delegation) | Chrome 157 | `In developer trial (Behind a flag)` | **Emerging** | Chromium-Led | ⚡ +6 art / +0 msgs |
| [Source Specific Multicast for Direct Sockets API](#6208452397498368-source-specific-multicast-for-direct-sockets-api) | Chrome 158 | `Enabled by default` | **Emerging** | Chromium-Led | ✨ New |
| [Import Text (Text Modules)](#5191512456560640-import-text-text-modules) | Chrome 155 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +5 art / +0 msgs |
| [Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](#5138797158334464-web-bluetooth-make-bluetoothremotegattserver-an-eventtarget) | Chrome 157 | `Enabled by default` | **Emerging** | Contested / Concerns Raised | ⚡ +6 art / +0 msgs |
| [WebTransport Datagram readable stream type](#5148774971342848-webtransport-datagram-readable-stream-type) | Chrome 155 | `In developer trial (Behind a flag)` | **Emerging** | Multi-Engine Consensus | ⚡ +6 art / +0 msgs |
| [WebTransport reliability attributes](#5094058497277952-webtransport-reliability-attributes) | Chrome 158 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | 🔄 Enabled by default |
| [Overscroll Areas](#5261280285949952-overscroll-areas) | Chrome 157 | `Origin trial` | **Emerging** | Chromium-Led | ⚡ +6 art / +0 msgs |
| [Web haptics JavaScript API](#5167864517623808-web-haptics-javascript-api) | Chrome 156 | `In developer trial (Behind a flag)` | **Emerging** | Chromium-Led | ⚡ +6 art / +0 msgs |
| [WebTransport headers and responseHeaders](#5194104408506368-webtransport-headers-and-responseheaders) | Chrome 156 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +1 art / +0 msgs |
| [Host and screenshot restrictions for chrome.debugger API](#5072259281715200-host-and-screenshot-restrictions-for-chromedebugger-api) | Chrome 155 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +2 art / +0 msgs |
| [Avoid caching module failures](#5214647044145152-avoid-caching-module-failures) | Chrome 156 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +1 art / +0 msgs |
| [object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](#4886345347629056-object-fit-and-object-position-apply-to-svg-documents-in-object-and-embed) | Chrome 158 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | 🔄 Enabled by default |
| [Capability Elements Icon-only mode](#5107682460696576-capability-elements-icon-only-mode) | Chrome 157 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +7 art / +0 msgs |
| [MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](#5188639100370944-mediasession-return-promiseundefined-from-setmicrophoneactive-and-setcameraactive) | Chrome 158 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ✨ New |

---

## 🔍 Feature Ecosystem Deep Dives

<a id="5172548013916160-html-in-canvas"></a>
### [HTML-in-canvas](https://chromestatus.com/feature/5172548013916160)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5172548013916160](https://chromestatus.com/feature/5172548013916160) · [chromestatuslite.com/feature/5172548013916160](https://chromestatuslite.com/feature/5172548013916160)
- **Specification:** [https://github.com/whatwg/html/pull/11588](https://github.com/whatwg/html/pull/11588)
- **Chromium Bug:** [https://crbug.com/500967896](https://crbug.com/500967896)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `Positive`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/canvas) (Chrome: `1`, Firefox: `1.5`, Safari: `2`) · *group-level data: web-features [`canvas`](https://webstatus.dev/features/canvas), shared with 2 other ChromeStatus features*

#### 📝 Overview

HTML-in-canvas enables customizing the rendering of html using canvas with new primitives to manage canvas layout, drawing capabilities, rendering events for DOM-to-canvas synchronization, and geometry update capabilities for canvas-to-DOM synchronization.

> **Motivation:** High-performance web applications rely on &lt;canvas&gt; for control over rendering that goes beyond standard HTML/CSS. However, by using &lt;canvas&gt;, they lose all the rich, built-in features of the web platform, including: \* Advanced formatting, such as styled multi-line text. \* Interactivity, such as copy&paste, forms, and text selection. \* Accessibility...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 1732 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""HTML-in-canvas" API OR WHATWG 11588"`, `""HTML-in-canvas" web standards position mozilla webkit"`
- **Analysis:** HTML-in-canvas introduces native primitives for rendering DOM subtrees directly into 2D, WebGL, and WebGPU contexts, bridging long-standing accessibility and interactive text limitations in canvas-driven applications. Chromium is aggressively advancing and shipping the feature, but broader standardization remains an active work-in-progress across the WHATWG and WICG. Developer interest is strong among graphics and 3D web creators, yet multi-engine interoperability is still incomplete.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building rich canvas or WebGPU applications should evaluate HTML-in-canvas behind flags or via targeted prototypes, particularly for UI-heavy 3D experiences. However, production architectures must avoid hard dependencies on the API and should maintain traditional DOM overlays or polyfill fallbacks until cross-browser consensus solidifies.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @smfr: "We will mark this proposal as support in a week pending objections. There are some ongoing discussions around parts of the API shape that we'd like to..."
- Standards Activity (Mozilla): Latest discussion from @nical: "Another concern was brought up recently in a discussion with web-standards folks at mozilla:  HTML-in-canvas is violating the principle that JS should..."
- Community package available: \[three-html-render\](https://www.npmjs.com/package/three-html-render) (v0.1.2) for progressive enhancement.
- Verified community discussion on Hacker News: "HTML-in-Canvas" (222 points, 116 comments).

#### ⚡ What Happened This Week

- 💬 **10 new community discussions** found
- 📰 **11 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [HTML-in-Canvas](https://news.ycombinator.com/item?id=44772177) — *Hacker News (222 pts, 116 comments)*
- 💬 [The HTML-in-Canvas API origin trial](https://news.ycombinator.com/item?id=50200164) — *Hacker News (123 pts, 63 comments)*
- 💬 [HTML-in-Canvas Demos](https://news.ycombinator.com/item?id=48201222) — *Hacker News (67 pts, 28 comments)*
- 💬 [The HTML-in-Canvas API \[video\]](https://news.ycombinator.com/item?id=48251645) — *Hacker News (5 pts, 0 comments)*
- 💬 [Google Introduces HTML-in-Canvas API: Accessible UI Meets WebGL / WebGPU](https://news.ycombinator.com/item?id=48247368) — *Hacker News (4 pts, 1 comments)*
- 💬 [vgpu and HTML-in-Canvas](https://news.ycombinator.com/item?id=49477838) — *Hacker News (4 pts, 0 comments)*
- 💬 [Show HN: Lemmings in HTML in Canvas](https://news.ycombinator.com/item?id=49057415) — *Hacker News (2 pts, 3 comments)*
- 💬 [Shader-driven web transitions with HTML-in-canvas](https://news.ycombinator.com/item?id=47675703) — *Hacker News (2 pts, 1 comments)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [\[HTML\] html-in-canvas](https://github.com/WebKit/standards-positions/issues/630) [open] `topic: accessibility`, `topic: html`, `venue: WHATWG HTML Workstream`, `venue: WICG`, `from: Google`
  > *Latest discussion from @smfr: "We will mark this proposal as support in a week pending objections. There are some ongoing discussions around parts of the API shape that we'd like to..."*
- **Mozilla:** [HTML-in-Canvas](https://github.com/mozilla/standards-positions/issues/1076) [open] `topic: API`, `team: Graphics`
  > *Latest discussion from @nical: "Another concern was brought up recently in a discussion with web-standards folks at mozilla:  HTML-in-canvas is violating the principle that JS should..."*
- **W3C TAG:** [Incubation: \[HTML\] html-in-canvas](https://github.com/w3ctag/design-reviews/issues/1204) [open] `Progress: in progress`, `Venue: WHATWG`, `Review type: CG early review`, `Venue: WICG`, `Missing: Multi-stakeholder support`
  > *Latest discussion from @progers: "&gt; We are very supportive of the goals of this proposal, which is well written. It's good to see privacy considerations addressed. But the proposal req..."*
- **W3C TAG:** [\[HTML\] Canvas place element](https://github.com/w3ctag/design-reviews/issues/997) [closed] `Venue: WHATWG`, `Venue: WICG`, `Resolution: overtaken`, `Focus: API design (pending)`, `Focus: Web architecture (pending)`, `Focus: Security (pending)`, `Focus: Privacy (pending)`, `Focus: Accessibility (pending)`, `Focus: Internationalization (pending)`
  > *Latest discussion from @progers: "We've made significant updates since this was originally filed, so I've created a new TAG issue at https://github.com/w3ctag/design-reviews/issues/120..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2080574: \[wpt-sync\] Sync PR 63519 - \[html-in-canvas\] Sync CanvasPaintEvent&ElementGeometryUpdateEvent IDL](https://bugzilla.mozilla.org/show_bug.cgi?id=2080574) `[NEW]`
- **Mozilla (Gecko):** [Bug #2085267: \[wpt-sync\] Sync PR 63973 - \[html-in-canvas\] Fully update property nodes on drawable changes](https://bugzilla.mozilla.org/show_bug.cgi?id=2085267) `[NEW]`
- **Mozilla (Gecko):** [Bug #2085500: \[wpt-sync\] Sync PR 64009 - \[html-in-canvas\] Fix nested drawable under filter](https://bugzilla.mozilla.org/show_bug.cgi?id=2085500) `[NEW]`
- **Mozilla (Gecko):** [Bug #2085501: \[wpt-sync\] Sync PR 64010 - \[html-in-canvas\] Fix nested canvas drawable in filter](https://bugzilla.mozilla.org/show_bug.cgi?id=2085501) `[NEW]`
- **WebKit (Safari):** [Bug #316240: \[HTML-in-Canvas\] Implement HTML-in-Canvas](https://bugs.webkit.org/show_bug.cgi?id=316240) `[NEW]`
- **WebKit (Safari):** [Bug #316244: \[HTML-in-Canvas\] Blockify style "display" and force style "position" for canvas descendants](https://bugs.webkit.org/show_bug.cgi?id=316244) `[NEW]`
- **WebKit (Safari):** [Bug #316246: \[HTML-in-Canvas\] Implement ElementImage and HTMLCanvasElement.captureElementImage()](https://bugs.webkit.org/show_bug.cgi?id=316246) `[NEW]`

#### 📦 Polyfills & NPM Ecosystem

- [@remotion/canvas-capture](https://www.npmjs.com/package/@remotion/canvas-capture) `v4.0.502` — Capture HTML-in-canvas content as a video
- [three-html-render](https://www.npmjs.com/package/three-html-render) `v0.1.2` *(Verified Polyfill)* — HTML-in-Canvas polyfill and Three.js integration for rendering live HTML as WebGL/WebGPU textures
- [hic-pageflip](https://www.npmjs.com/package/hic-pageflip) `v1.0.4` — A Pageflip/Flipbook Custom Element powered by HTML-in-Canvas
- [html-in-canvas-polyfill](https://www.npmjs.com/package/html-in-canvas-polyfill) `v1.0.1` *(Verified Polyfill)* — HTML in Canvas Polyfill

#### 📰 Ecosystem Blogs & Articles

- [The HTML-in-Canvas API origin trial](https://developer.chrome.com/blog/html-in-canvas-origin-trial) *(developer.chrome.com · 2026-10-22T19:54:04Z)*
  > Back in the WebVR days the sentiment was we can never do this because security.In my experience with standards bodies&#x2F;Chrome, anything outside of the owning company&#x27;s product goals is &quot;no, because security...
- [HTML-in-Canvas Demos](https://github.com/GoogleChromeLabs/css-web-ui-demos/blob/main/html-in-canvas/awesome-html-in-canvas.md) *(github.com · 2026-05-19T23:49:03Z)*
  > HTML-in-Canvas-in-HTML. Yo dawg.
- [The HTML-in-Canvas API \[video\]](https://www.youtube.com/watch?v=TUtKGTeFWjQ) *(youtube.com · 2026-05-23T21:19:41Z)*
- [Google Introduces HTML-in-Canvas API: Accessible UI Meets WebGL / WebGPU](https://www.webgpu.com/news/google-html-in-canvas-webgl-webgpu) *(webgpu.com · 2026-05-23T13:11:37Z)*
  > &gt; Google&gt; Accessible UIContradiction in terms.  How many years Google needs to put an &quot;ok&quot; or &quot;cancel&quot; button on a modal dialog box instead of wasting every time 5 seconds of my life ?
- [vgpu and HTML-in-Canvas](https://html-in-canvas.dev/demos/vgpu-shader) *(html-in-canvas.dev · 2026-08-28T12:56:50Z)*
- [Show HN: Lemmings in HTML in Canvas](https://github.com/VorticonCmdr/lemmings) *(github.com · 2026-07-26T12:23:47Z)*
  > For fun I decided I wanted to reimplement Lemmings using HTML-in-cavas and a DOM-based Entity-Component-System. I made heavy use of Claude Code (using only Sonnet 5 High) and I used everything already published on this t...

#### 🔗 Inbound Citations & Reverse Links

- [HTML-in-canvas \[500967896\] - Chromium](https://issues.chromium.org/issues/500967896) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5172548013916160`)*
  > Chromium Sign in
- [Intent to Experiment: HTML-in-canvas](https://groups.google.com/a/chromium.org/g/blink-dev/c/t_nGEmJ_v4s) *(groups.google.com)* *(Cites: `https://github.com/WICG/html-in-canvas`)*
  > Intent to Experiment: HTML-in-canvas Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: HTML-in-canva...
- [Enable the canvas-draw-element Chrome Flag — Setup & Browser Support \| HTML-in-Canvas](https://html-in-canvas.dev/docs/browser-support) *(html-in-canvas.dev · 2026-10-15T00:00:00)* *(Cites: `https://github.com/WICG/html-in-canvas`)*
  > Enable the canvas-draw-element Chrome Flag — Setup & Browser Support \| HTML-in-Canvas In production: Graview renders app views with HTML-in-Canvas — see it at graview.dev and graview.cloud . Why it matters &rarr; This si...
- [Ready for Developer Testing: HTML in Canvas: drawElement](https://groups.google.com/a/chromium.org/g/blink-dev/c/LYJyOdLbOfY) *(groups.google.com · 2025-05-23T00:00:00)* *(Cites: `https://github.com/WICG/html-in-canvas`)*
  > Ready for Developer Testing: HTML in Canvas: drawElement Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Ready for Devel...
- [HTML-in-Canvas：讓 Canvas 完美渲染 HTML 的 Web 新標準](https://codelove.tw/@tony/post/agDVLq) *(codelove.tw · 2026-04-14T00:00:00)* *(Cites: `https://github.com/WICG/html-in-canvas`)*
  > 專案來源：WICG（Web Platform Incubator Community Group） GitHub：&lt;strong&gt;github.com/WICG/html-in-canvas&lt;/strong&gt;

#### 📚 Platform Documentation & References

- [github.com](https://github.com/WICG/html-in-canvas/blob/main/Examples/complex-text.html) *(github.com)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-08 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0001.html) *(lists.w3.org)*
- [HTML-in-Canvas · Issue #1076 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1076) *(github.com)*
- [Chrome 157 HTML-in-Canvas API by ewewraw · Pull Request #30938 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30938) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `canvas` on [wpt.fyi](https://wpt.fyi/results?q=feature:canvas) (via webstatus.dev) — stable: Chrome 98.4% · Edge 98.4% · Firefox 95.9% · Safari 99.2%; experimental: Chrome 98.4% · Edge 98.4% · Firefox 95.9% · Safari 99.2%

#### 🌐 Web-features Group Context

*group-level data: web-features [`canvas`](https://webstatus.dev/features/canvas), shared with 2 other ChromeStatus features*

- **Chrome usage:** 0.47% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/200))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (72 found across 12 planned queries, 35 verified) · `Google Search Grounding (gemini-3.8-flash)` (16 found, 13 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (8 found, 8 verified) · `Dev.to Community Blogs` (2 found, 2 verified) · `Hacker News Algolia` (8 found, 8 verified) · `Standards Positions` (5 found, 4 verified) · `Engine Bug Trackers` (9 found, 7 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 4 verified) · `web-features mapping` *(group "canvas", shared with 2 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "canvas": Chrome 98.4% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 16

---

<a id="4709671889534976-deprecate-and-remove-xslt"></a>
### [Deprecate and remove XSLT](https://chromestatus.com/feature/4709671889534976)

- **Milestone:** Chrome 158 (Stepped rollout)
- **ChromeStatus:** [chromestatus.com/feature/4709671889534976](https://chromestatus.com/feature/4709671889534976) · [chromestatuslite.com/feature/4709671889534976](https://chromestatuslite.com/feature/4709671889534976)
- **Chromium Bug:** [https://crbug.com/435623334](https://crbug.com/435623334)
- **Browser Signals:** Chrome: `Stepped rollout` · Firefox: `Positive` · Safari: `Positive`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/xslt) (Chrome: `1`, Firefox: `1`, Safari: `3.1`) · *group-level data: web-features [`xslt`](https://webstatus.dev/features/xslt), shared with 1 other ChromeStatus feature*

#### 📝 Overview

\[XSLT v1.0\](https://www.w3.org/TR/xslt-10/), which all browsers adhere to, was standardized in 1999. In the meantime, XSLT has evolved to v2.0 and v3.0, adding features, and growing apart from the old version frozen into browsers. This lack of advancement, coupled with the rise of JavaScript libraries and frameworks that offer more flexible and powerful DOM manipulation, has led to a significant decline in the use of client-side XSLT. Its role within the web browser has been largely superseded by JavaScript-based technologies, such as JSON and React.  Chromium uses the \*\*libxslt\*\* library to process these transformations, and \[libxslt was unmaintained\](https://discourse.gnome.org/t/stepping-down-as-libxslt-maintainer/27615) for ~6 months of 2025. Libxslt is a complex, aging C codebase of the type notoriously susceptible to memory safety vulnerabilities like buffer overflows, which can lead to arbitrary code execution. Because client-side XSLT is now a niche, rarely-used feature, these libraries receive far less maintenance and security scrutiny than core JavaScript engines, yet they represent a direct, potent attack surface for processing untrusted web content. Indeed, XSLT is the source of several recent high-profile security exploits that continue to put browser users at risk.   For these reasons, Chromium (along with both other browser engines, Gecko and WebKit) plans to deprecate and remove XSLT from the web platform. The modern web is powered by three major browser engines: \[Blink\](https://www.chromium.org/blink/) (Chromium), \[Gecko\](https://firefox-source-docs.mozilla.org/overview/gecko.html) (Firefox), and \[WebKit\](https://webkit.org/) (Safari). They interpret code to render pages.   For more details, see this \[Chrome for Developers article\](https://developer.chrome.com/docs/web-platform/deprecating-xslt).  From Chrome 158, XSLT will stop functioning on Stable releases.

> **Motivation:** Security risks for all users outweigh the very small usage of this feature on the open web.  Usage of XSLTProcessor (https://chromestatus.com/metrics/feature/timeline/popularity/79) is fairly volatile, registering somewhere between 0.01% and 0.1% of page loads, averaging around 0.05% over time. These numbers are above the typical 0.001% deprecation...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 813 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""deprecate and remove XSLT" Chrome WebKit Gecko"`, `""Intent to Deprecate and Remove" "XSLT" blink dev"`, `""Removing XSLT for a more secure browser" developer chrome"`, `""Investigate deprecation and removal of XSLT" mozilla"`
- **Analysis:** Chromium, Gecko, and WebKit have aligned to deprecate and remove client-side XSLT v1.0 and the XSLTProcessor API from the web platform, targeting full removal in Chrome stable releases. The move is primarily driven by security imperatives: purging legacy, memory-unsafe C libraries like libxslt to eliminate critical CVE attack surfaces while modernizing XML pipelines. Although telemetry shows low global page load metrics, the deprecation breaks historic XML-based publishing workflows and legacy enterprise intranets.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams must immediately audit codebases for \`XSLTProcessor\` invocations and \`&lt;?xml-stylesheet?&gt;\` processing instructions, transitioning workloads to server-side or build-time transformations. For applications requiring client-side execution, integrate WebAssembly-compiled libxslt polyfills or modern libraries like Saxon-JS, while utilizing enterprise policies like \`XSLTEnabled\` or origin trials if additional migration runway is needed.
- Standards Activity (WebKit): Latest discussion from @annevk: "WebKit is cautiously supportive. We'd probably wait for one implementation to fully remove support, though if there's a known list of origins that par..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Intent to Deprecate and Remove XSLT" (87 points, 149 comments).

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Origin trial* to *Stepped rollout*
- 💬 **1 new community discussions** found
- 📰 **16 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Intent to Deprecate and Remove XSLT](https://news.ycombinator.com/item?id=45779261) — *Hacker News (87 pts, 149 comments)*
- 💬 [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=45734849) — *Hacker News (3 pts, 1 comments)*
- 💬 [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=6102357) — *Hacker News (2 pts, 0 comments)*
- 🐦 [え〜！？  Deprecate and remove XSLT - Chrome Platform Status https://t.co/evROwN0A5N](https://twitter.com/fuktommy/status/2114228246833459374) — *Twitter / X by @fuktommy (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Should we remove XSLT from the web platform?](https://github.com/whatwg/html/issues/11523) [open] `removal/deprecation`, `stage: 3`
  > *Latest discussion from @annevk: "WebKit is cautiously supportive. We'd probably wait for one implementation to fully remove support, though if there's a known list of origins that par..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1990759: Investigate deprecation and removal of XSLT (deprecate and remove XSLT)](https://bugzilla.mozilla.org/show_bug.cgi?id=1990759) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA/m/yNs4EsD5AQAJ) *(groups.google.com · 2025-11-01T04:31:52Z)*
  > Good riddance. The web needs to shed all the old baggages like this to move forward. Looking forward to MCP becoming part of the browser.
- [Intent to Deprecate and Remove: XSLT](https://groups.google.com/a/chromium.org/forum) *(groups.google.com · 2013-07-25T13:40:31Z)*
- [Removing XSLT for a more secure browser \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/deprecating-xslt) *(developer.chrome.com)*
  > Major browser vendors—\*\*Chromium (Blink)\*\*, \*\*Mozilla (Gecko)\*\*, and \*\*Apple (WebKit)\*\*—reached a consensus to deprecate and permanently remove client-side \*\*XSLT (Extensible Stylesheet Language Transformations)\*\* from t...
- [Chrome is removing XSLT on November 17, 2026: what breaks and what to do \| XSLT Playground](https://xsltplayground.com/blog/posts/chrome-removing-xslt-what-to-do) *(xsltplayground.com)*
  > xml-stylesheet?&gt;\` processing instruction below 0.001%) Meanwhile, browsers relied on complex, legacy C libraries like \*\*\`libxslt\`\*\*, which presented severe, recurring memory-safety risks (such as buffer overflows and use...
- [chrome.com](https://developer.chrome.com/release-notes/147) *(developer.chrome.com)*
  > \*\*Rust XML parser transition\*\*: Google highlighted that eliminating \`libxslt\` accompanies their effort to replace C-based \`libxml2\` with an in-house, memory-safe \*\*Rust XML parser\*\*, substantially shrinking the browser's...
- [chrome.com](https://developer.chrome.com/blog/chrome-147-beta) *(developer.chrome.com)*
  > \*\*Rust XML parser transition\*\*: Google highlighted that eliminating \`libxslt\` accompanies their effort to replace C-based \`libxml2\` with an in-house, memory-safe \*\*Rust XML parser\*\*, substantially shrinking the browser's...

#### 🔗 Inbound Citations & Reverse Links

- [Deprecate and remove XSLT \[435623334\] - Chromium](https://issues.chromium.org/issues/435623334) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > Chromium Sign in
- [Chromium base browsers removing support for XSLT view \| InterSystems DC](https://community.intersystems.com/post/chromium-base-browsers-removing-support-xslt-view) *(community.intersystems.com · 2026-09-28T00:00:00)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > Chromium base browsers removing support for XSLT view \| InterSystems DC Skip to main content Learning Documentation Community Open Exchange Ideas Portal Global Masters Certification Partner Directory Startup Hub Ask DC A...

#### 📚 Platform Documentation & References

- [1990759 - Investigate deprecation and removal of XSLT (deprecate and remove XSLT)](https://bugzilla.mozilla.org/show_bug.cgi?id=1990759) *(bugzilla.mozilla.org)*
- [GovInfo support for deprecated browser XSLT functionality · Issue #208 · usgpo/bulk-data · GitHub](https://github.com/usgpo/bulk-data/issues/208) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `xslt` on [wpt.fyi](https://wpt.fyi/results?q=feature:xslt) (via webstatus.dev) — stable: Chrome 53.3% · Edge 80% · Firefox 86.7% · Safari 93.3%; experimental: Chrome 53.3% · Edge 86.7% · Firefox 86.7% · Safari 100%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (59 found across 10 planned queries, 21 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 12 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (1 found, 1 verified) · `Hacker News Algolia` (3 found, 3 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (5 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "xslt", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "xslt": Chrome 53.3% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 7 verified)
- **Content Inspected:** Spec: ○ · Explainers: 0 · Standards Comments Read: 5

---

<a id="5152728072060928-local-network-access-restrictions"></a>
### [Local network access restrictions](https://chromestatus.com/feature/5152728072060928)

- **Milestone:** Chrome 156 (Stepped rollout)
- **ChromeStatus:** [chromestatus.com/feature/5152728072060928](https://chromestatus.com/feature/5152728072060928) · [chromestatuslite.com/feature/5152728072060928](https://chromestatuslite.com/feature/5152728072060928)
- **Specification:** [https://wicg.github.io/local-network-access](https://wicg.github.io/local-network-access)
- **Chromium Bug:** [https://crbug.com/394009026](https://crbug.com/394009026)
- **Browser Signals:** Chrome: `Stepped rollout` · Firefox: `Shipped/Shipping` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/local-network-access) (Chrome: `145`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`local-network-access`](https://webstatus.dev/features/local-network-access), shared with 7 other ChromeStatus features*

#### 📝 Overview

Chrome 142 restricted the ability to make requests to the user's local network, gated behind a permission prompt. A local network request is any request from a public website to a local IP address or loopback, or from a local website (for example, intranet) to loopback.   Gating the ability for websites to perform these requests behind a permission mitigates the risk of cross-site request forgery attacks against local network devices such as routers, and reduces the ability of sites to use these requests to fingerprint the user's local network.  This permission is restricted to secure contexts. If granted, the permissions additionally relax mixed content blocking for local network requests (since many local devices are not able to obtain publicly trusted TLS certificates for various reasons).  This work supersedes a prior effort called \[Private Network Access\](https://chromestatus.com/feature/5737414355058688), which used preflight requests to have local devices opt in. For more information on this feature, see \[Adapting your website for new Local Network Access restrictions in Chrome\](https://docs.google.com/document/d/1QQkqehw8umtAgz5z0um7THx-aoU251p705FbIQjDuGs/edit?usp=sharing).  Chrome 145 introduced more granular permissions for websites requesting access to a user's local network. The previous single \`local-network-access permission\` is being split into two distinct permissions:  \* \`local-network\`: Grants access to IP addresses in the local network space (for example, intranets, internal devices). \* \`loopback-network\`: Grants access to loopback IP addresses (for example, \`localhost\`, \`127.0.0.1\`).  The old \`local-network\` permission will remain as an alias, ensuring existing configurations and permissions policies continue to function as expected.   This change provides both users and Admins with more precise control over how websites interact with internal network resources. Current enterprise policies managing local network access will not be affected by this change.  Chrome 146 introduces two new enterprise policies for managing local network access restrictions:  \[LocalNetworkAccessIpAddressSpaceOverrides\](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides) and  \[LocalNetworkAccessPermissionsPolicyDefaultEnabled\](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled). These policies can be set using \[custom configurations\](https://support.google.com/chrome/a/answer/14749672).  Chrome 147 expands Local Network Access restrictions to include WebSocket and WebTransport connections.  In Chrome 156, the \[LocalNetworkAccessRestrictionsTemporaryOptOut\](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut) policy will be removed.

> **Motivation:** Currently public websites can probe a user's local network, perform CSRF attacks against vulnerable local devices, and generally abuse the user's browser as a "confused deputy" that has access inside the user's local network or software on their local machine. Gating the ability for sites to make local network requests behind a permission prompt he...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 665 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"local network access webkit standards position"`, `"local network access chrome permission prompt"`, `"site developer chrome com blog local network access"`, `"local network access mozilla standards position"`
- **Analysis:** Local Network Access (LNA) restrictions supersede the earlier Private Network Access (PNA) preflight proposal by shifting from target-device CORS opt-ins to browser-enforced permission prompts in secure contexts. Rolling out progressively across Chromium releases, the mechanism mitigates intranet CSRF and local port scanning while relaxing mixed-content blocking for approved local endpoints. Both Chromium and Mozilla are driving implementation, though its friction on local companion daemons has necessitated ongoing refinement.

**Key Recommendations & Takeaways:**
- Actionable Advice: Ensure all applications initiating requests to private subnets or localhost are served strictly over HTTPS, and test compatibility against permission gates using browser flags. If maintaining desktop companion daemons or enterprise web apps, adopt the granular 'local-network' and 'loopback-network' Permissions Policy directives and deploy enterprise policy allowlists to prevent workflow disruptions.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **16 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1969916: Local network access restrictions for webrtc](https://bugzilla.mozilla.org/show_bug.cgi?id=1969916) `[NEW]`

#### 📦 Polyfills & NPM Ecosystem

- [qz-lna](https://www.npmjs.com/package/qz-lna) `v0.1.3` — Helpers for Local Network Access restrictions

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5152728072060928/activity) *(chromestatus.com)*
  > Google transitioned its network boundary security model from \*\*Private Network Access (PNA)\*\*—which originally required target devices to respond to CORS preflight requests—to \*\*Local Network Access (LNA) restrictions\*\* ...
- [New permission prompt for Local Network Access \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/local-network-access) *(developer.chrome.com)*
  > Google transitioned its network boundary security model from \*\*Private Network Access (PNA)\*\*—which originally required target devices to respond to CORS preflight requests—to \*\*Local Network Access (LNA) restrictions\*\* ...
- [okta.com](https://support.okta.com/help/s/article/configure-chrome-to-suppress-the-local-network-access-prompt-for-okta-fastpass?language=en_US) *(support.okta.com)*
  > Under this model, initiated requests from public web origins to local network destinations (e.g., private IP blocks or loopback interfaces) are blocked unless explicitly granted by the user via a permission prompt or man...
- [Chrome's Local Network Access (LNA) Permission Explained](https://blog.openreplay.com/chrome-local-network-access-lna-permission) *(blog.openreplay.com)*
  > Because many local network devices (routers, printers, IoT hardware) cannot easily obtain public TLS certificates or be updated via firmware to support CORS headers, Chrome relaxes mixed-content blocking for local networ...
- [chrome.com](https://developer.chrome.com/blog/private-network-access-update-2024-03) *(developer.chrome.com)*
  > \*\*The Pivot from PNA Preflights:\*\* Chrome officially paused the previous PNA preflight model because requiring billions of deployed legacy devices to adopt custom HTTP headers proved practically impossible
- [uillinois.edu](https://help.uillinois.edu/TDClient/37/uic/KB/Article/2993/How-do-I-edit-Google-Chrome-Local-Network-Access-Permissions) *(help.uillinois.edu)*
  > \*\*Permission UX & Mixed Content Waiver:\*\* When a secure origin requests a local resource, the browser shows a prompt (\*"Look for and connect to any device on your local network"\* or split variations) \*\*The "Localhost Dae...

#### 🔗 Inbound Citations & Reverse Links

- [google chrome 138.0.7204.50 \| PortableApps.com](https://portableapps.com/node/79058) *(portableapps.com · 2025-06-25T00:00:00)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > https://chromestatus.com/feature/5152728072060928 · &lt;strong&gt;Chrome 141 restricts the ability to make requests to the user&#x27;s local network, gated behind a permission prompt&lt;/strong&gt;.
- [Does Chrome version 142 affect Webauth access?](https://central.smarsh.com/s/article/Does-Chrome-version-142-affect-Webauth-access) *(central.smarsh.com)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > https://&lt;strong&gt;chromestatus.com/feature/5152728072060928&lt;/strong&gt; · Additional Information · If you are unsure what Chrome browser you&#x27;re using, you can verify by following the steps below: Method 1: Using the menu...
- [\[blink-dev\] Intent to Extend Experiment: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg15683.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Chromestatus Tue, 27 Jan 2026 13...
- [\[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTransport](http://www.mail-archive.com/blink-dev@chromium.org/msg15285.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTransport Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTranspor...
- [\[blink-dev\] Re: Intent to Ship: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg14542.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Re: Intent to Ship: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Local network access restrictions Vladimir Levin Wed, 03 Sep 2025 08:29:23 -0700 Hey...

#### 📚 Platform Documentation & References

- [Clarify what "local-network" and "loopback-network" permissions enable (and when to prompt the user) · Issue #89 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/89) *(github.com)*
- [Local Network Access · Issue #163 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/163) *(github.com)*
- [Local Network Access · Issue #1260 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1260) *(github.com)*
- [Request for Position: Local Network Access · Issue #520 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/520) *(github.com)*
- [Local network access - Security - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Local_network_access) *(developer.mozilla.org)*

#### 🧪 Interactive Demos & Samples

- [Local network access restrictions Demo](https://local-network-access-testing.glitch.me)

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (61 found across 13 planned queries, 49 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 13 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (5 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 1 verified) · `web-features mapping` *(group "local-network-access", shared with 7 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "local-network-access": no stable pass rate for Chrome yet)* · `Sources cited by the AI synthesis` (12 found, 9 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5152834368700416-html-install-element"></a>
### [HTML install element](https://chromestatus.com/feature/5152834368700416)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5152834368700416](https://chromestatus.com/feature/5152834368700416) · [chromestatuslite.com/feature/5152834368700416](https://chromestatuslite.com/feature/5152834368700416)
- **Specification:** [https://wicg.github.io/install-element](https://wicg.github.io/install-element)
- **Chromium Bug:** [https://issues.chromium.org/issues/454827186](https://issues.chromium.org/issues/454827186)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `Oppose`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/install) (Chrome: `—`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`install`](https://webstatus.dev/features/install)*

#### 📝 Overview

Chrome can now trigger a request for the browser to install a web app, given a manifest URL and optional manifest ID. The &lt;install&gt; element enables cross-origin web app installation without JavaScript and provides a better developer experience than handling \`beforeinstallprompt\` events. The element is launching in parallel with \`navigator.install()\`, the imperative entry point to the same installation capability.   Admins can control this in two ways: 1. Enterprise policy, \[WebAppInstallByUserEnabled\](https://chromeenterprise.google/policies/#WebAppInstallByUserEnabled), can disable user web app installs broadly, including installs initiated via \`navigator.install()\` and &lt;install&gt;.   2. \[Permissions policy\](https://www.w3.org/TR/permissions-policy/), web-app-installation, can allow or disallow use of this feature on origins that the enterprise controls (for example, internal sites/iframes).

> **Motivation:** The web currently lacks the ability for a site to offer installation of a web app identified by a cross-origin manifest. Limited support exists for eligible same-origin web apps via ambient installation affordances and the beforeinstallprompt event. However, the existent browser-provided entry points are difficult for developers to use and users to...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 436 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""HTML install element" chrome pwa"`, `""install element" OR "web install api" site:github.com/WebKit/standards-positions"`, `""install element" WICG "navigator.install""`, `""install element" OR "web install api" site:github.com/mozilla/standards-positions"`
- **Analysis:** The HTML \`&lt;install&gt;\` element and companion \`navigator.install()\` API represent a Chromium and Microsoft-driven push to overhaul web app distribution through declarative, manifest-based installation primitives that bypass fragile legacy events like \`beforeinstallprompt\`. While the manifest-first design resolved initial security critiques during W3C TAG architectural reviews, the capability is launching primarily in Chromium-based browsers without multi-engine consensus. With WebKit explicitly opposing the feature and Gecko remaining uncommitted, it deepens the divide between Chromium and competing browser engines on progressive web apps.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt the \`&lt;install&gt;\` element solely as a progressive enhancement by providing nested fallback markup (such as conventional install instructions or manual bookmarking cues) for non-supporting browsers. Maintain existing same-origin install detection and platform-specific guidance, and do not assume cross-origin manifests will fetch reliably across networks protected by aggressive bot-mitigation systems.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Closed via https://github.com/WebKit/standards-positions/issues/619..."
- Standards Activity (Mozilla): Latest discussion from @saschanaz: ""install capability" is not very specific topic, should we close this in favor of #1371, #1387, and #1388?..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Install web apps with the new HTML install element" (32 points, 14 comments).

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **20 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Install web apps with the new HTML install element](https://news.ycombinator.com/item?id=48360474) — *Hacker News (32 pts, 14 comments)*
- 💬 [Install web apps with the new HTML install element](https://news.ycombinator.com/item?id=48125969) — *Hacker News (3 pts, 0 comments)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Web Install API](https://github.com/WebKit/standards-positions/issues/463) [closed] `position: oppose`, `topic: app-like capabilities`, `from: Microsoft`
  > *Latest discussion from @marcoscaceres: "Closed via https://github.com/WebKit/standards-positions/issues/619..."*
- **Mozilla:** [Web Install capability](https://github.com/mozilla/standards-positions/issues/1179) [open] `venue: Proposal`, `topic: API`, `team: DOM`
  > *Latest discussion from @saschanaz: ""install capability" is not very specific topic, should we close this in favor of #1371, #1387, and #1388?..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2082857: \[wpt-sync\] Sync PR 63748 - \[&lt;install&gt; Element\] Move oninstallresult to GlobalEventHandlers](https://bugzilla.mozilla.org/show_bug.cgi?id=2082857) `[NEW]`
- **Mozilla (Gecko):** [Bug #2084329: \[wpt-sync\] Sync PR 63906 - \[&lt;install&gt; Element\] Align InstallResultEventInit default with spec](https://bugzilla.mozilla.org/show_bug.cgi?id=2084329) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [Install web apps with the new HTML install element](https://developer.chrome.com/blog/install-element-ot) *(developer.chrome.com · 2026-06-01T18:06:28Z)*
  > Not answered in TFA: What does it mean to &quot;install&quot; a web app in Chrome?
- [appspot.com](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5183481574850560?gate=5120761429229568) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > install()\`, which provides a promise-based JavaScript entry point
- [r/PWA on Reddit: Web Install API - A glimmer of hope](https://www.reddit.com/r/PWA/comments/1oub6ml/web_install_api_a_glimmer_of_hope) *(reddit.com)*
  > This enables decentralized web app catalogs, directories, and multi-app suites \*\*Decentralizing App Stores:\*\* Developer blogs and PWA platforms praise the ability to build true "Web App Stores
- [chromeenterprise.google](https://chromeenterprise.google/policies/web-app-install-by-user-enabled) *(chromeenterprise.google)*
  > install()\`)
- [The Future of Web Apps: Why the New HTML Install Element Changes Everything \| NameOcean](https://nameocean.net/article/the-future-of-web-apps-why-the-new-html-install-element-changes-everything) *(nameocean.net)*
  > Users routinely missed that an app was installable \*\*Developer Sentiment:\*\* Widely welcomed by PWA developers
- [chromium.org](https://issues.chromium.org/333795265) *(issues.chromium.org)*
  > Documents the feature trajectory through Origin Trials and standard tracks (targeting general availability across Chromium releases) Outlines developer feedback iterations on attribute terminology (\`manifest\` and \`id\`), ...

#### 🔗 Inbound Citations & Reverse Links

- [web-features consumers report for 2026-09-01 · Issue #4287 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4287) *(github.com · 2026-09-01T08:55:15)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > install-element used by https://&lt;strong&gt;chromestatus.com/feature/5152834368700416&lt;/strong&gt; · Downstream: use install (source, dist) None used by https://chromestatus.com/feature/6552486106234880 · Downstream: use protect...
- [RE: \[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17686.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > RE: \[blink-dev\] Intent to Ship: Web Install API Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: Web Install API 'Lia Hiscock' via blink-dev Wed, 07 Oct 2026 17:14:57 -0700 Thanks Rick and Philip! Re...
- [Web app HTML install element · Issue #1083 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1083) *(github.com · 2026-07-29T21:39:54)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > Web app HTML install element · Issue #1083 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anoth...
- [\[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17504.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: HTML install element 'Lia Hiscock' via blink-dev Mon, 21 Sep 2026 11:38:00 -0700 Contact emails \[email&#1...
- [\[&lt;install&gt; Element\] Align InstallResultEventInit default with spec by chromium-wpt-export-bot · Pull Request #63906 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63906) *(github.com)* *(Cites: `https://aka.ms/installelement`)*
  > \[&lt;install&gt; Element\] Align InstallResultEventInit default with spec by chromium-wpt-export-bot · Pull Request #63906 · web-platform-tests/wpt · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / S...

#### 📚 Platform Documentation & References

- [GitHub - WICG/install-element: An \`&lt;install&gt;\` element might be nice. · GitHub](https://github.com/WICG/install-element) *(github.com)*
- [github.com](https://github.com/w3ctag/design-reviews/issues/1051) *(github.com)*
- [Web Install API · Issue #1373 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1373) *(github.com)*
- [w3.org](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1245) *(tag-github-bot.w3.org)*
- [w3.org](https://lists.w3.org/Archives/Public/public-webapps-github/2026Sep/0132.html) *(lists.w3.org)*

#### 🧪 Interactive Demos & Samples

- [HTML install element Demo](https://microsoftedge.github.io/Demos/pwa-install-element)
- [HTML install element Demo](https://kbhlee2121.github.io/pwa/web-install-manifest-url/only-elements.html)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 12 planned queries, 21 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 12 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (8 found, 2 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (7 found, 2 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "install", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "install" has no test results)* · `Sources cited by the AI synthesis` (8 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

---

<a id="5324559251275776-css-random-function"></a>
### [CSS random() function](https://chromestatus.com/feature/5324559251275776)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5324559251275776](https://chromestatus.com/feature/5324559251275776) · [chromestatuslite.com/feature/5324559251275776](https://chromestatuslite.com/feature/5324559251275776)
- **Specification:** [https://www.w3.org/TR/css-values-5/#random](https://www.w3.org/TR/css-values-5/#random)
- **Chromium Bug:** [https://issues.chromium.org/issues/413385732](https://issues.chromium.org/issues/413385732)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/random-function) (Chrome: `156`, Firefox: `—`, Safari: `26.2`) · *group-level data: web-features [`random-function`](https://webstatus.dev/features/random-function)*

#### 📝 Overview

The random() function brings generative randomness to CSS, allowing web authors to generate a random numeric value within a specified range.  For example, web authors can use random() to scatter elements randomly within their container: .dot {   /\* Position each dot randomly \*/   position: absolute;   top: random(0%, 100%);   left: random(0%, 100%); }  This feature also includes caching controls. By default, each random() function resolves to a new, distinct value. Web authors can override this default by passing a &lt;random-key&gt; value as the function's first argument to control how random values are shared across properties and elements.

> **Motivation:** The CSS random() function provides a native way to generate random values directly in CSS without relying on JavaScript, reducing code complexity while making it easier for developers to create varied and dynamic designs.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 432 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"CSS random function WebKit Chrome Firefox"`, `"CSS random function css values 5 browser support"`
- **Analysis:** The CSS random() function, specified in CSS Values and Units Module Level 5, brings native generative randomness directly into declarative stylesheets without requiring JavaScript or preprocessor loops. Safari was the first to implement and ship the function, with Chrome enabling it by default in version 156 and Mozilla actively tracking implementation. Ecosystem consensus across major browser engines is solidly aligned, though cross-browser interoperability remains limited until Firefox ships support.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt CSS random() as a progressive enhancement by guarding declarations behind feature queries such as @supports (transform: rotate(random(-5deg, 5deg))) while supplying static fallback values. For broad cross-engine production builds, consider build-step polyfills or continue relying on lightweight CSS custom property injection until Firefox achieves parity.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Yeah the thing the WG settled on was a lot saner than the initial proposal :)..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "🎲 In design, we obsess over consistency, grids, and alignment. So where does randomness actually fit? Through a bunch o" (9 points, 2 comments).

#### ⚡ What Happened This Week

- 💬 **3 new community discussions** found
- 📰 **4 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [🎲 In design, we obsess over consistency, grids, and alignment. So where does randomness actually fit? Through a bunch o](https://twitter.com/smashingmag/status/2112573665476755631) — *Twitter / X by @smashingmag (9 likes/RTs, 2 replies)*
- 🐦 [Embracing Playful Imperfection With The CSS \`random()\` Function https://t.co/DL6KfKRoL0](https://twitter.com/Un1v3rs0Z3r0/status/2112533916619849960) — *Twitter / X by @Un1v3rs0Z3r0 (0 likes/RTs, 0 replies)*
- 🐦 [Embracing Playful Imperfection With The CSS \`random()\` Function https://t.co/raV9pu6NqT #uxdesign #webdev #GraphicDesign](https://twitter.com/MediaRings/status/2112532952802382167) — *Twitter / X by @MediaRings (0 likes/RTs, 0 replies)*
- 🐦 [WebKit on X: "Learn about the new CSS random() function, now available to experiment with in Safari Technology Preview. There are lots of amazing ways to use random values in CSS. Learn more in "Rolling the Dice with CSS random()": https://t.co/JdFtXP3qTm" / X](https://x.com/webkit/status/1958608369134280951) — *Twitter / X by @webkit (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **Mozilla:** [CSS Values 5: random()](https://github.com/mozilla/standards-positions/issues/809) [closed] `position: positive`, `topic: CSS`, `team: Layout`
  > *Latest discussion from @emilio: "Yeah the thing the WG settled on was a lot saner than the initial proposal :)..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1836588: Implement CSS random() function](https://bugzilla.mozilla.org/show_bug.cgi?id=1836588) `[ASSIGNED]`
- **WebKit (Safari):** [Bug #300580: CSS random() not functioning as expected](https://bugs.webkit.org/show_bug.cgi?id=300580) `[NEW]`

#### 📦 Polyfills & NPM Ecosystem

- [@csstools/postcss-random-function](https://www.npmjs.com/package/@csstools/postcss-random-function) `v4.0.5` — Use the random function in CSS

#### 📰 Ecosystem Blogs & Articles

- [css3clickchart.com](https://css3clickchart.com/news/css-random-function-safari-chrome-156) *(css3clickchart.com)*
  > Defined in the \*\*CSS Values and Units Module Level 5\*\* specification Slight jitters and offsets in card galleries or polaroid spreads
- [Embracing Playful Imperfection With The CSS random() Function — Smashing Magazine](https://www.smashingmagazine.com/2026/10/embracing-playful-imperfection-css-random-function) *(smashingmagazine.com)*
  > Defined in the \*\*CSS Values and Units Module Level 5\*\* specification, the native \`random()\` function brings generative randomness directly to declarative stylesheets without requiring JavaScript or static preprocessor (S...
- [Embracing Playful Imperfection With The CSS random() Function — Smashing Magazine \| daily.dev](https://daily.dev/posts/embracing-playful-imperfection-with-the-css-random-function-smashing-magazine-cwvipesbh) *(daily.dev)*
  > \*\*Syntax & Units:\*\* Basic usage follows \`random(min, max, step?)\` or \`random(&lt;random-caching-key&gt;?, min, max)\` An optional \`step\` allows snapping to fixed increments
- [medium.com](https://medium.com/@arnoldgunter/why-i-love-to-use-the-new-css-random-function-2a7a0cb56500) *(medium.com)*
  > \*\*Syntax & Units:\*\* Basic usage follows \`random(min, max, step?)\` or \`random(&lt;random-caching-key&gt;?, min, max)\` Both limits must share compatible unit types (lengths, angles, percentages, times, etc.)
- [Let’s Use the Emergent CSS random() Function in all the Browsers \| CSS-Tricks](https://css-tricks.com/css-random-function-polyfill) *(css-tricks.com)*
  > \*\*Focus:\*\* Practical UI applications and fallback/polyfill strategies \*\*Highlights:\*\* The author uses real-world examples, such as celebratory confetti bursts and organic layout scatter, contrasting the old method (hundr...
- [master.dev](https://blog.master.dev/very-early-playing-with-random-in-css) *(blog.master.dev)*
  > \*\*Highlights:\*\* The author uses real-world examples, such as celebratory confetti bursts and organic layout scatter, contrasting the old method (hundreds of lines of generated \`:nth-child\` CSS from preprocessors) with mo...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17343.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > Re: \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS random() function Rick Byers Wed, 02 Sep 2026 08:12:47 -0700 LGTM1 On Wed, Aug 26, 2026 at 3...
- [\[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17310.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS random() function 'Munira Tursunova' via blink-dev Wed, 26 Aug 2026 12:48:09 -0700 \*Contact emails\* ...
- [Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30754) *(github.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > css.types.random (https://&lt;strong&gt;chromestatus.com/feature/5324559251275776&lt;/strong&gt;)
- [CSS random() · Issue #1354 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1354) *(github.com · 2026-09-03T21:08:06)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > CSS random() · Issue #1354 · web-platform-tests/interop · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload t...
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17344.html) *(mail-archive.com)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > Re: \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS random() function Yoav Weiss (@Shopify) Wed, 02 Sep 2026 08:13:20 -0700 LGTM2 On Wed, Sep 2,...

#### 📚 Platform Documentation & References

- [random() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/random) *(developer.mozilla.org)*
- [Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30754) *(github.com)*
- [CSS random() · Issue #1354 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1354) *(github.com)*
- [CSS random() function · Issue #715 · mdn/mdn](https://github.com/mdn/mdn/issues/715) *(github.com)*
- [docs(css): update random() to new random-key syntax by BHUVANSH855 · Pull Request #45729 · mdn/content](https://github.com/mdn/content/pull/45729) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `random-function` on [wpt.fyi](https://wpt.fyi/results?q=feature:random-function) (via webstatus.dev) — stable: Chrome 25% · Edge 25% · Firefox 12.5% · Safari 37.5%; experimental: Chrome 25% · Edge 25% · Firefox 25% · Safari 100%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (69 found across 14 planned queries, 34 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 9 verified) · `Twitter / X API v2` *(found 3 tweet(s))* · `Tweets found by web search` (7 found, 1 verified) · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (7 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (4 found, 2 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 1 verified) · `web-features mapping` *(group "random-function", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "random-function": Chrome 25% passing (stable))* · `Sources cited by the AI synthesis` (6 found, 6 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 5

---

<a id="5197863732772864-margin-trim"></a>
### [Margin-trim](https://chromestatus.com/feature/5197863732772864)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5197863732772864](https://chromestatus.com/feature/5197863732772864) · [chromestatuslite.com/feature/5197863732772864](https://chromestatuslite.com/feature/5197863732772864)
- **Specification:** [https://drafts.csswg.org/css-box-4/#margin-trim](https://drafts.csswg.org/css-box-4/#margin-trim)
- **Chromium Bug:** [https://issues.chromium.org/issues/40886857](https://issues.chromium.org/issues/40886857)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/margin-trim) (Chrome: `—`, Firefox: `—`, Safari: `16.4`) · *group-level data: web-features [`margin-trim`](https://webstatus.dev/features/margin-trim)*

#### 📝 Overview

The \`margin-trim\` CSS property may be used to omit margins before or after the first or last child of a container. This is supported on regular block containers and multicol containers.  This is somewhat similar to the effect caused by the margin quirk that is applied to P, H1, H2... elements inside BODY and table cell elements (in quirks mode), but more powerful, generic, and expressive.  Note: A previous version of the spec also applied this for flex and grid containers, but this has been removed.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 429 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"margin trim css chrome status"`, `"margin-trim css support developer discussions"`
- **Analysis:** The CSS \`margin-trim\` property allows containers to strip the outermost margins of boundary children, natively solving one of CSS's oldest layout annoyances without brittle \`:first-child\` or \`:last-child\` selectors. First introduced by WebKit in Safari 16.4, the feature has achieved critical cross-engine consensus following CSS Working Group refinements that focused its scope on regular block and multi-column containers, with Chromium shipping support enabled by default in Chrome 155. Cross-browser interoperability is advancing rapidly, though full Baseline availability remains gated on Gecko completing its implementation.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can begin adopting \`margin-trim\` as a progressive enhancement to streamline container styles, but should retain fallback margin resets or \`gap\` spacing until Chromium 155 achieves widespread update adoption and Firefox delivers support. Developers should also exercise caution when using CSS \`@supports\` queries for multi-column layouts, as older WebKit builds parse the property successfully while lacking multicol-specific margin trimming.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Sounds good. Closing without a dashboard entry, as it seems like a minor feature...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Easier Layout with Margin-Trim" (8 points, 1 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **10 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Easier Layout with Margin-Trim](https://news.ycombinator.com/item?id=43858089) — *Hacker News (8 pts, 1 comments)*
- 🐦 [ウェブ制作者は要チェック！余分なマージンを取り除くmargin-trimプロパティなど、Chrome 155で追加されたCSSの新機能 (コリス) https://t.co/8YyfifXtlI](https://twitter.com/dotHTML5/status/2112480223023301065) — *Twitter / X by @dotHTML5 (0 likes/RTs, 0 replies)*
- 🐦 [Wes Bos on X: "CSS is getting margin-trim! Remove margins ...](https://twitter.com/wesbos/status/1668994174136328200) — *Twitter / X by @wesbos (0 likes/RTs, 0 replies)*
- 🐦 [全部入りHTML太郎 on X: "margin-trimはまだしばらく使えなさ ...](https://x.com/_yuheiy/status/1873357980441436466) — *Twitter / X by @\_yuheiy (0 likes/RTs, 0 replies)*
- 🐦 [TAK on X: "margin-trimがSafari以外でもサポートされたら相殺は多少許容されると思う" / X](https://x.com/tak_dcxi/status/1911386708597154237) — *Twitter / X by @tak\_dcxi (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **Mozilla:** [CSS margin-trim property](https://github.com/mozilla/standards-positions/issues/994) [closed] `position: positive`
  > *Latest discussion from @zcorpan: "Sounds good. Closing without a dashboard entry, as it seems like a minor feature...."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1506241: Implement the margin-trim property from CSS Box Level 4](https://bugzilla.mozilla.org/show_bug.cgi?id=1506241) `[NEW]`
- **Mozilla (Gecko):** [Bug #1827010: New wpt failures in /css/css-box/margin-trim/computed-margin-values/ \[flexbox-column-multi-line-block-end.html, flexbox-column-multi-line-block.html, flexbox-row-block-end.html, and 2 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=1827010) `[NEW]`
- **Mozilla (Gecko):** [Bug #1827013: New wpt failures in /css/css-box/margin-trim/computed-margin-values/ \[flexbox-column-inline-start.html, flexbox-column-multi-line-inline-start.html, flexbox-row-inline-start.html, and 1 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=1827013) `[NEW]`
- **Mozilla (Gecko):** [Bug #1828539: New wpt failures in /css/css-box/margin-trim/computed-margin-values/grid-inline-start.html](https://bugzilla.mozilla.org/show_bug.cgi?id=1828539) `[NEW]`
- **Mozilla (Gecko):** [Bug #1910504: New wpt failures in /css/css-box/margin-trim/ \[block-container-block-end-last-child-with-border.html, block-container-block-end-nested-last-child-with-border.html, block-container-block-end-self-collapsing-children-nested-at-bottom.html, and 13 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=1910504) `[NEW]`
- **WebKit (Safari):** [Bug #252062: \[margin-trim\] Implement margin-trim for legacy inline layout](https://bugs.webkit.org/show_bug.cgi?id=252062) `[NEW]`
- **WebKit (Safari):** [Bug #252324: \[margin-trim\] Support paginated content](https://bugs.webkit.org/show_bug.cgi?id=252324) `[NEW]`
- **WebKit (Safari):** [Bug #252325: \[margin-trim\] Support multi-column layout](https://bugs.webkit.org/show_bug.cgi?id=252325) `[NEW]`
- **WebKit (Safari):** [Bug #252638: \[margin-trim\] fast/inline/legacy-margin-trim/block-container-float-inline-word-break-all not rendering correctly on MiniBrowser](https://bugs.webkit.org/show_bug.cgi?id=252638) `[NEW]`
- **WebKit (Safari):** [Bug #253052: \[margin-trim\]\[LegacyLineLayout\] Margins are trimmed too early with intruding floats in certain conditions](https://bugs.webkit.org/show_bug.cgi?id=253052) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [Easier Layout with Margin-Trim](https://webkit.org/blog/16854/margin-trim) *(webkit.org · 2025-05-01T14:23:50Z)*
  > This is awesome — but sucks that support isn&#x27;t widespread yet.
- [youtube.com](https://www.youtube.com/watch?v=UE01cIWJBko) *(youtube.com)*
  > Recent developer articles, announcements, and platform updates surrounding the \*\*\`margin-trim\`\*\* CSS property showcase its transition from an experimental Safari-only property into a standardized, cross-engine web featur...
- [css-tricks.com](https://css-tricks.com/tag/css) *(css-tricks.com)*
  > Recent developer articles, announcements, and platform updates surrounding the \*\*\`margin-trim\`\*\* CSS property showcase its transition from an experimental Safari-only property into a standardized, cross-engine web featur...
- [chriscoyier.net](https://chriscoyier.net/2023/06/12/margin-trim-as-a-best-practice) *(chriscoyier.net)*
  > This eliminates the need for legacy hacks like \`:first-child\`, \`:last-child\`, \`:not(:last-child)\`, or the "lobotomized owl" selector (\`\* + \*\`) \*\*Chris Coyier’s Blog ("margin-trim as a best practice?")\*\*
- [chromestatus.com](https://chromestatus.com/feature/5197863732772864?gate=6474161734156288) *(chromestatus.com)*
  > Earlier drafts attempted to apply \`margin-trim\` to Flexbox and Grid layouts However, the CSS Working Group (CSSWG) scoped the property specifically to \*\*regular block containers and multicol containers\*\*
- [webkit.org](https://webkit.org/blog/18194/release-notes-for-safari-technology-preview-251) *(webkit.org)*
  > However, the CSS Working Group (CSSWG) scoped the property specifically to \*\*regular block containers and multicol containers\*\* Both Chromium and WebKit aligned with this updated spec

#### 🔗 Inbound Citations & Reverse Links

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5197863732772864`)*
  > Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with a...
- [Re: \[blink-dev\] Intent to Ship: Margin-trim](http://www.mail-archive.com/blink-dev@chromium.org/msg17210.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5197863732772864`)*
  > Re: \[blink-dev\] Intent to Ship: Margin-trim Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Margin-trim Mike Taylor Tue, 18 Aug 2026 08:33:38 -0700 LGTM1 On 8/18/26 4:15 a.m., Morten Stenshorne wrot...
- [\[blink-dev\] Intent to Ship: Margin-trim](http://www.mail-archive.com/blink-dev@chromium.org/msg17204.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5197863732772864`)*
  > \[blink-dev\] Intent to Ship: Margin-trim Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Margin-trim Morten Stenshorne Tue, 18 Aug 2026 01:16:14 -0700 \*Contact emails\* \[email&#160;protected\] \*Specificati...
- [csswg-drafts/css-box-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-box-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-box-4/#margin-trim`)*
  > csswg-drafts/css-box-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Re...
- [CSS Box Model Module Level 4](https://www.w3.org/TR/css-box-4) *(w3.org · 2024-08-04T00:00:00)* *(Cites: `https://drafts.csswg.org/css-box-4/#margin-trim`)*
  > https://www.w3.org/TR/css-box-4/ Editor&#x27;s Draft: https://&lt;strong&gt;drafts.csswg.org/css-box-4&lt;/strong&gt;/ Previous Versions: https://www.w3.org/TR/2020/WD-css-box-4-20200421/ History: https://www.w3.org/standards/histor...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/w3c/csswg-drafts/issues/13731) *(github.com)*
- [margin-trim CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-trim) *(developer.mozilla.org)*
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [csswg-drafts/css-box-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-box-4/Overview.bs) *(github.com)*
- [CSS Box Model Module Level 4](https://www.w3.org/TR/css-box-4) *(w3.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `margin-trim` on [wpt.fyi](https://wpt.fyi/results?q=feature:margin-trim) (via webstatus.dev) — stable: Chrome 47.2% · Edge 47.2% · Firefox 2.8% · Safari 91.5%; experimental: Chrome 47.2% · Edge 47.2% · Firefox 2.8% · Safari 41.5%

#### 🌐 Web-features Group Context

*group-level data: web-features [`margin-trim`](https://webstatus.dev/features/margin-trim)*

- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/994))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 11 planned queries, 24 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 16 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (6 found, 3 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 1 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (10 found, 10 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "margin-trim", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "margin-trim": Chrome 47.2% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 6 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 4

---

<a id="5183481574850560-web-install-api"></a>
### [Web Install API](https://chromestatus.com/feature/5183481574850560)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5183481574850560](https://chromestatus.com/feature/5183481574850560) · [chromestatuslite.com/feature/5183481574850560](https://chromestatuslite.com/feature/5183481574850560)
- **Specification:** [https://wicg.github.io/install-element](https://wicg.github.io/install-element)
- **Chromium Bug:** [https://issues.chromium.org/issues/333795265](https://issues.chromium.org/issues/333795265)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `Oppose`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/navigator-install) (Chrome: `—`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`navigator-install`](https://webstatus.dev/features/navigator-install)*

#### 📝 Overview

Starting in Chrome 158, the new Web Install API allows websites to prompt users to install a web app, given a manifest URL and optional manifest ID.  The \`navigator.install()\` method enables cross-origin web app installation and provides a better developer experience than handling \`beforeinstallprompt\` events. This API is launching in parallel with the \`&lt;install&gt;\` element, a declarative entry point to the same installation capability.   Admins can control this in two ways: 1. Enterprise policy, \[WebAppInstallByUserEnabled\](https://chromeenterprise.google/policies/#WebAppInstallByUserEnabled), would disable user web app installs broadly, including installs initiated via \`navigator.install()\` and \`&lt;install&gt;\`. Or  2. \[Permissions policy\](https://www.w3.org/TR/permissions-policy/), web-app-installation, can allow or disallow use of this feature on origins that the enterprise controls (for example, internal sites/iframes).

> **Motivation:** The web currently lacks the ability for a site to offer installation of a web app identified by a cross-origin manifest. Limited support exists for eligible same-origin web apps via ambient installation affordances and the beforeinstallprompt event. However, the existent browser-provided entry points are difficult for developers to use and users to...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 425 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** The Web Install API (\`navigator.install()\`) enables programmatic and cross-origin progressive web app installation starting in Chrome 158, aiming to replace the legacy \`beforeinstallprompt\` event. While heavily championed by Microsoft Edge and Google to modernize PWA discovery, the API faces significant architectural pushback from standards bodies and non-Chromium vendors. Consequently, it remains a Chromium-exclusive capability rather than an interoperable web standard.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should adopt \`navigator.install()\` strictly as a progressive enhancement on supported Chromium browsers while preserving legacy \`beforeinstallprompt\` logic or static installation instructions for Safari and Firefox. Always perform feature detection before calling \`navigator.install()\` to avoid runtime errors on unsupported platforms.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Closed via https://github.com/WebKit/standards-positions/issues/619..."
- Standards Activity (Mozilla): Latest discussion from @saschanaz: ""install capability" is not very specific topic, should we close this in favor of #1371, #1387, and #1388?..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "The Web Install API is ready for testing" (3 points, 0 comments).

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **10 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [The Web Install API is ready for testing](https://news.ycombinator.com/item?id=46040517) — *Hacker News (3 pts, 0 comments)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Web Install API](https://github.com/WebKit/standards-positions/issues/463) [closed] `position: oppose`, `topic: app-like capabilities`, `from: Microsoft`
  > *Latest discussion from @marcoscaceres: "Closed via https://github.com/WebKit/standards-positions/issues/619..."*
- **Mozilla:** [Web Install capability](https://github.com/mozilla/standards-positions/issues/1179) [open] `venue: Proposal`, `topic: API`, `team: DOM`
  > *Latest discussion from @saschanaz: ""install capability" is not very specific topic, should we close this in favor of #1371, #1387, and #1388?..."*
- **W3C TAG:** [Question: Review manifest-first Web Install API](https://github.com/w3ctag/design-reviews/issues/1245) [closed] `Resolution: decline`, `Review type: question`
  > *Latest discussion from @adactio: "@marcoscaceres wrote: &gt; Right, but this is fundamentally about architecture: does this capability belong in web pages at all is the core question.  Do..."*
- **W3C TAG:** [(brand new ✨) Web Install API](https://github.com/w3ctag/design-reviews/issues/1051) [closed] `Progress: in progress`, `Resolution: unsatisfied`, `Venue: Web Apps WG`, `Focus: API design (pending)`, `Focus: Web architecture (pending)`, `Focus: Security (pending)`, `Focus: Privacy (pending)`, `Agenda+`
  > *Latest discussion from @marcoscaceres: "Hi Diego,   Following our discussion \[in the TAG breakout on 24 April \](https://github.com/w3ctag/meetings/blob/gh-pages/2025/telcons/04-21-minutes.md..."*
- **W3C TAG:** [Web Install API - Cross-Origin](https://github.com/w3ctag/design-reviews/issues/946) [closed] `Resolution: unsatisfied`, `Review type: CG early review`, `Missing: venue`, `Mode: breakout`, `Focus: API design (pending)`, `Focus: Web architecture (pending)`, `Focus: Security (pending)`
  > *Latest discussion from @hober: "&gt; @diekus wrote: &gt;  &gt; &gt; For cross-origin installs, the installing origin needs to have the to-be-installed origin's manifest id beforehand. &gt;  &gt; Why? ..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2008448: Implement Web Install API](https://bugzilla.mozilla.org/show_bug.cgi?id=2008448) `[NEW]`

#### 📦 Polyfills & NPM Ecosystem

- [@types/web-install-api](https://www.npmjs.com/package/@types/web-install-api) `v2025.1.0` — TypeScript definitions for web-install-api

#### 📰 Ecosystem Blogs & Articles

- [The Web Install API is ready for testing](https://blogs.windows.com/msedgedev/2025/11/24/the-web-install-api-is-ready-for-testing) *(blogs.windows.com · 2025-11-24T23:11:26Z)*
- [Install web apps with the new HTML install element \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/install-element-ot) *(developer.chrome.com)*
  > install()\`) and its complementary declarative partner, the \*\*\`&lt;install&gt;\` element\*\*, introduce a streamlined, secure way for websites to prompt users to install web applications This eliminates the need for the clunky \`be...
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5183481574850560) *(img968-dot-cr-status.appspot.com)*
  > This eliminates the need for the clunky \`beforeinstallprompt\` pattern and enables cross-origin installs (powering web-based app directories and multi-app suites) while giving administrators clear enterprise and permissio...
- [Enable the Web Install API](https://progressier.com/pwa-capabilities/web-install-api) *(progressier.com)*
  > The new Web Install API &lt;strong&gt;streamlines web app installation by eliminating the need to handle the beforeinstallprompt event&lt;/strong&gt;, allowing PWAs to be installed remotely from any website, promoting a more decentr...
- [openpwa.net](https://openpwa.net/news/pwa-install-component-v0-7-0-released) *(openpwa.net)*
  > \*\*OpenPWA & \`pwa-install\` Component:\*\* Ecosystem utility libraries have added support for the Web Install API, allowing unified web components to seamlessly switch between the new imperative API, the declarative \`&lt;instal...
- [Enable the Web Install API (Experimental) in Chrome & Edge – PWAStore \| PWAStore](https://www.pwastore.io/web-install-api) *(pwastore.io)*
  > \*\*PWAStore.io:\*\* Aggregator platforms highlighted how this API makes web-based app stores viable on desktop and mobile browsers by allowing users to click "Install" directly inside an app repository listing \*\*Adoption Sk...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Experiment: Web Install API](https://groups.google.com/a/chromium.org/g/blink-dev/c/KCpVX8F6yh8) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5183481574850560`)*
  > Intent to Experiment: Web Install API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Web Install ...
- [Intent to Prototype: Web Install API](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyIcrJX33ik) *(groups.google.com · 2024-04-12T00:00:00)* *(Cites: `https://chromestatus.com/feature/5183481574850560`)*
  > Intent to Prototype: Web Install API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Web Install AP...
- [Ready for Developer Testing: Web Install API](https://groups.google.com/a/chromium.org/g/blink-dev/c/ame_t7wN2cU) *(groups.google.com · 2025-07-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/5183481574850560`)*
  > Ready for Developer Testing: Web Install API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Ready for Developer Testing...
- [Installing web apps as a new platform feature – 12 March 2024](https://www.w3.org/2024/03/12-installing-web-apps-breakout-2024-minutes.html) *(w3.org)* *(Cites: `https://aka.ms/webinstall`)*
  > Succeeded: s\|Diego: aka.ms/WebInstall\|Diego: for next steps, find info at https://&lt;strong&gt;aka.ms/webinstall&lt;/strong&gt;\|
- [\[blink-dev\] Ready for Developer Testing: Web Install API](https://www.mail-archive.com/blink-dev@chromium.org/msg14110.html) *(mail-archive.com)* *(Cites: `https://aka.ms/webinstall`)*
  > \[blink-dev\] Ready for Developer Testing: Web Install API Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Web Install API 'Lia Hiscock' via blink-dev Mon, 07 Jul 2025 07:12:49 -0700 Contact ...

#### 📚 Platform Documentation & References

- [MSEdgeExplainers/WebInstall/explainer.md at main · MicrosoftEdge/MSEdgeExplainers](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/WebInstall/explainer.md) *(github.com)*
- [github.com](https://github.com/w3ctag/design-reviews/issues/1051) *(github.com)*
- [github.com](https://github.com/WICG/install-element) *(github.com)*
- [Installing web apps as a new platform feature – 12 March 2024](https://www.w3.org/2024/03/12-installing-web-apps-breakout-2024-minutes.html) *(w3.org)*
- [WEB INSTALL API Diego González, Amanda Baker with guests](https://www.w3.org/2024/Talks/TPAC/breakouts/web-install-api.pdf) *(w3.org)*

#### 🧪 Interactive Demos & Samples

- [Web Install API Demo](https://microsoftedge.github.io/Demos/pwa-install-api)
- [Web Install API Demo](https://kbhlee2121.github.io/pwa/web-install-manifest-url/index.html)

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `navigator-install` on [wpt.fyi](https://wpt.fyi/results?q=feature:navigator-install) (webstatus.dev has no pass rates for it)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 12 planned queries, 26 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 10 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (8 found, 1 verified) · `Standards Positions` (5 found, 5 verified) · `Engine Bug Trackers` (9 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 1 verified) · `web-features mapping` *(group "navigator-install", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "navigator-install": no stable pass rate for Chrome yet)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 20

---

<a id="5099333963874304-digital-credentials-api-issuance-support"></a>
### [Digital Credentials API (issuance support)](https://chromestatus.com/feature/5099333963874304)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5099333963874304](https://chromestatus.com/feature/5099333963874304) · [chromestatuslite.com/feature/5099333963874304](https://chromestatuslite.com/feature/5099333963874304)
- **Specification:** [https://w3c-fedid.github.io/digital-credentials](https://w3c-fedid.github.io/digital-credentials)
- **Chromium Bug:** [https://crbug.com/378330032](https://crbug.com/378330032)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Negative` · Safari: `Support`

#### 📝 Overview

This Web Platform feature enables issuing websites (e.g., a university, government agency, or bank) to securely initiate the provisioning (issuance) process of digital credentials directly into a user's mobile wallet application. On Android, this capability leverages the Android IdentityCredential CredMan system (Credential Manager). On Desktop, it leverages cross-device approaches using the CTAP protocol similar to Digital Credentials presentation.

> **Motivation:** Without this, websites and wallets can only communicate in ways that are more opaque to the browser and OS.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 403 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The Digital Credentials API issuance capability expands browser-mediated credential provisioning, allowing issuers to push digital credentials directly into native mobile wallets via protocols like OpenID4VCI without relying on brittle custom URI schemes or QR workarounds. Enabled by default in Chrome 155 through Android's Credential Manager and cross-device CTAP flows, it marks a key milestone for digital identity on the web, particularly within the EUDI Wallet and banking sectors. However, true cross-engine interoperability remains distant due to divergent engine positions and fragmented wallet bindings.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat the Digital Credentials API issuance flow as a progressive enhancement on supported Android and Chromium environments while retaining established fallback mechanisms, such as OpenID4VCI authorization code redirects or Universal Links. Abstract your issuance payload layer so you can adapt quickly to evolving W3C Federated Identity Working Group specs and multi-wallet format requirements.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Update on Venue: https://github.com/w3c/strategy/issues/450  We also made strides on the OpenID / request format...."
- Standards Activity (Mozilla): Latest discussion from @RByers: "Hey Mozilla folks, is there anything you can share here about your position on the use of custom schemes like openid4vp://? Today Firefox allows infor..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Webサイトからデジタル身分証をウォレットアプリへ直接追加できる "Digital Credentials API" の発行機能（issuance）が、Chrome 155よりデフォルトで利用可能になりました。 https://t.co/v" (5 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **9 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Webサイトからデジタル身分証をウォレットアプリへ直接追加できる "Digital Credentials API" の発行機能（issuance）が、Chrome 155よりデフォルトで利用可能になりました。 https://t.co/v](https://twitter.com/agektmr/status/2114654605275697615) — *Twitter / X by @agektmr (5 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Digital Credentials API](https://github.com/WebKit/standards-positions/issues/332) [closed] `position: support`, `concerns: interoperability`, `concerns: privacy`, `concerns: security`, `venue: WICG`, `concerns: venue`, `from: Google`, `from: Apple`, `concerns: annoyance`
  > *Latest discussion from @marcoscaceres: "Update on Venue: https://github.com/w3c/strategy/issues/450  We also made strides on the OpenID / request format...."*
- **Mozilla:** [Digital Credentials](https://github.com/mozilla/standards-positions/issues/1003) [closed] `position: negative`
  > *Latest discussion from @RByers: "Hey Mozilla folks, is there anything you can share here about your position on the use of custom schemes like openid4vp://? Today Firefox allows infor..."*

#### 📰 Ecosystem Blogs & Articles

- [Digital Credentials API for credential issuance \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-143-issuance-ot) *(developer.chrome.com)*
  > The \*\*Digital Credentials API (Issuance Support)\*\* expands the browser’s Credential Management API to allow issuing entities (such as universities, banks, and government agencies) to provision verifiable credentials dire...
- [Digital Credentials API issuance ships in Chrome 155 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-issuance?hl=en) *(developer.chrome.com)*
  > The \*\*Digital Credentials API (Issuance Support)\*\* expands the browser’s Credential Management API to allow issuing entities (such as universities, banks, and government agencies) to provision verifiable credentials dire...
- [digitalcredentials.dev](https://digitalcredentials.dev/docs/concepts/layering) *(digitalcredentials.dev)*
  > create()\`, the browser communicates with the underlying operating system (such as Android’s Credential Manager) on mobile or hands off the operation to a mobile device from desktop via CTAP/BLE \*\*Summary:\*\* Digital crede...
- [About digital credentials \| Identity \| Android Developers](https://developer.android.com/identity/digital-credentials) *(developer.android.com)*
  > \*\*Summary:\*\* The Android engineering team detailed the OS side of the equation via the \*\*Credential Manager\*\* (\`IdentityCredential\`) system \*\*Protocols & UI:\*\* Android natively handles \*\*OpenID4VCI\*\* (OpenID for Verifiab...
- [googleblog.com](https://android-developers.googleblog.com/2025/04/announcing-android-support-of-digital-credentials.html) *(android-developers.googleblog.com)*
  > \*\*Summary:\*\* The Android engineering team detailed the OS side of the equation via the \*\*Credential Manager\*\* (\`IdentityCredential\`) system \*\*Protocols & UI:\*\* Android natively handles \*\*OpenID4VCI\*\* (OpenID for Verifiab...
- [digitalcredentials.dev](https://digitalcredentials.dev/docs/intro) *(digitalcredentials.dev)*
  > \*\*Summary:\*\* Digital credentials developer guidelines, maintained by the W3C Web Identity & Credentials Adoption Community Group, document both presentation and issuance flows

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Gy-NvwoSODo/m/UYrJvdQ1BwAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Intent to Experiment: Digital Credentials API (issuance support) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent ...
- [Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14883.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Mike Taylor Sat, 18 ...
- [\[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14755.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 13 Oct 202...
- [design-reviews#1119: Digital Credentials API](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1119&gsessionid=kG1WGFITI13cWFJ7j_vXRvEdPXzaeeydGBeGx3I3n6cakZ00RNVH4w) *(tag-github-bot.w3.org)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Marcos: Official explainer is at https://&lt;strong&gt;github.com/w3c-fedid/digital-credentials/blob/main/explainer.md&lt;/strong&gt;
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16188.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Vladim...

#### 📚 Platform Documentation & References

- [Digital Credentials](https://www.w3.org/TR/digital-credentials) *(w3.org)*
- [github.com](https://github.com/mozilla/standards-positions/issues/1003) *(github.com)*
- [github.com](https://github.com/WICG/digital-credentials/blob/main/explainer.md) *(github.com)*
- [design-reviews#1119: Digital Credentials API](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1119&gsessionid=kG1WGFITI13cWFJ7j_vXRvEdPXzaeeydGBeGx3I3n6cakZ00RNVH4w) *(tag-github-bot.w3.org)*
- [digital-credentials/index.html at main · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/blob/main/index.html) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 12 planned queries, 29 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 15 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 10

---

<a id="5054329641893888-renewed-html-insertionstreaming-methods"></a>
### [Renewed HTML insertion&streaming methods](https://chromestatus.com/feature/5054329641893888)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5054329641893888](https://chromestatus.com/feature/5054329641893888) · [chromestatuslite.com/feature/5054329641893888](https://chromestatuslite.com/feature/5054329641893888)
- **Specification:** [https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md#resulting-api](https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md#resulting-api)
- **Chromium Bug:** [https://issues.chromium.org/issues/491743369](https://issues.chromium.org/issues/491743369)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `No signal`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/domparser) (Chrome: `31`, Firefox: `12`, Safari: `9.1`) · *group-level data: web-features [`domparser`](https://webstatus.dev/features/domparser)*

#### 📝 Overview

Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document.  - Positional methods (before/after/append/prepend/replaceWith) that take HTML as argument, effectively replacing insertAdjacentHTML. - Streaming methods (stream{Append}HTML{Unsafe}) which return a WritableStream, receiving text as input and parsing HMHL. - Passing {runScripts} as part of SetHTMLUnsafeOptions, mimicking createContextualFragment behavior. - Supporting createParserOptions in trusted types, allowing trusted types to override scripting mode and sanitizer.

> **Motivation:** Updating HTML dynamically from script has multiple disjointed API, each with its own subtle differences. Developers can partially update an element using insertAdjacentHTML, use sanitizer with setHTML, execute scripts with createContextualFragment, stream with detached documents.   This can be confusing and frustrating to web developers, as well as...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 400 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""HTML streaming & revamped DOM parsing" WebKit OR Mozilla"`, `""dynamic-markup-revamped-explainer""`, `""Renewed HTML insertion" OR "streamAppendHTML""`
- **Analysis:** The renewed HTML insertion and streaming methods unify years of disjointed DOM mutation APIs into a coherent, symmetric matrix of positional (such as appendHTML and beforeHTML) and streaming methods (such as streamHTML and streamAppendHTML) across Element and ChildNode interfaces. Developed as part of the Declarative Partial Updates initiative in the WHATWG HTML standard, the feature is scheduled to ship enabled by default in Chromium 157. Consensus is strong, with Mozilla officially endorsing the proposal and WebKit actively tracking it in standards discussions.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should test the APIs locally using Chromium flags and explore progressive enhancement patterns for server-driven partial updates. Production architectures should continue using established DOM parsing or userland polyfills as fallbacks until Safari and Firefox implement the new method suite.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @o-t-w: "This feature is due to ship in \[Chrome 154\](https://developer.chrome.com/blog/chrome-154-beta?hl=en#renewed\_html\_insertion\_and\_streaming\_methods). Moz..."
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **13 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [HTML streaming & revamped DOM parsing](https://github.com/WebKit/standards-positions/issues/629) [open] `topic: html`, `venue: WHATWG HTML Workstream`, `from: Google`
  > *Latest discussion from @o-t-w: "This feature is due to ship in \[Chrome 154\](https://developer.chrome.com/blog/chrome-154-beta?hl=en#renewed\_html\_insertion\_and\_streaming\_methods). Moz..."*
- **Mozilla:** [HTML streaming & revamped DOM parsing](https://github.com/mozilla/standards-positions/issues/1370) [closed] `venue: WHATWG`, `position: positive`, `topic: API`
  > *Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."*

#### 📰 Ecosystem Blogs & Articles

- [sakupi01.com](https://studio.sakupi01.com/whatwg/declarative-partial-updates/renewed-html-insertion-and-streaming-methods) *(studio.sakupi01.com)*
  > Historically, developers have juggled mismatched APIs (\`innerHTML\`, \`insertAdjacentHTML\`, \`createContextualFragment\`, \`setHTML\`, and \`setHTMLUnsafe\`), each with differing behaviors regarding script execution, sanitizatio...
- [chrome.com](https://developer.chrome.com/blog/declarative-partial-updates?hl=zh-cn) *(developer.chrome.com)*
  > Historically, developers have juggled mismatched APIs (\`innerHTML\`, \`insertAdjacentHTML\`, \`createContextualFragment\`, \`setHTML\`, and \`setHTMLUnsafe\`), each with differing behaviors regarding script execution, sanitizatio...
- [uxify.com](https://uxify.com/blog/google-io-2026-recap) *(uxify.com)*
  > Furthermore, none natively supported streaming incoming network chunks directly into the DOM without reading the entire response first Developers note that combined with native streaming, lightweight server-driven archit...
- [infoq.com](https://www.infoq.com/news/2026/09/native-deferred-html-streaming) *(infoq.com)*
  > The renewed specification introduces a coherent, symmetric matrix of methods across \`Element\` and \`ChildNode\` These methods return a \`WritableStream\` that incrementally parses text chunks into DOM nodes
- [chrome.com](https://developer.chrome.com/docs/web-platform/declarative-partial-updates) *(developer.chrome.com)*
  > \*\*Positional static methods:\*\* \`appendHTML()\`, \`prependHTML()\`, \`beforeHTML()\`, \`afterHTML()\`, and \`replaceWithHTML()\` (plus existing \`setHTML()\`), giving developers intuitive, positional insertion without the awkward st...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > \`\*Unsafe\` pairs:\*\* Safe variants sanitize markup using the Sanitizer API, while \`\*Unsafe\` variants accept options such as \`{ runScripts: true }\`, bringing parity with \`createContextualFragment()\` \*\*Source:\*\* \[Chrome Plat...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, ...
- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700...
- [New HTML setters by tunetheweb · Pull Request #46127 · mdn/content](https://github.com/mdn/content/pull/46127) *(github.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > New HTML setters by tunetheweb · Pull Request #46127 · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or windo...
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com · 2026-06-17T18:03:04)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/web-platform-tests/interop/issues/1471) *(github.com)*
- [github.com](https://github.com/mozilla/standards-positions/issues/1370) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/629) *(github.com)*
- [New HTML setters by tunetheweb · Pull Request #46127 · mdn/content](https://github.com/mdn/content/pull/46127) *(github.com)*
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `domparser` on [wpt.fyi](https://wpt.fyi/results?q=feature:domparser) (via webstatus.dev) — stable: Chrome 90.5% · Edge 90.5% · Firefox 95.2% · Safari 81%; experimental: Chrome 90.5% · Edge 90.5% · Firefox 95.2% · Safari 90.5%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 12 planned queries, 23 verified) · `Google Search Grounding (gemini-3.8-flash)` (19 found, 13 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 1 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "domparser", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "domparser": Chrome 90.5% passing (stable))* · `Sources cited by the AI synthesis` (10 found, 7 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 6

---

<a id="5087964794322944-language-detector-api-on-android"></a>
### [Language Detector API on Android](https://chromestatus.com/feature/5087964794322944)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5087964794322944](https://chromestatus.com/feature/5087964794322944) · [chromestatuslite.com/feature/5087964794322944](https://chromestatuslite.com/feature/5087964794322944)
- **Specification:** [https://webmachinelearning.github.io/translation-api](https://webmachinelearning.github.io/translation-api)
- **Chromium Bug:** [https://crbug.com/549896512](https://crbug.com/549896512)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Negative` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/languagedetector) (Chrome: `138`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`languagedetector`](https://webstatus.dev/features/languagedetector), shared with 1 other ChromeStatus feature*

#### 📝 Overview

Exposes the LanguageDetector JavaScript Web API on Chrome for Android (Clank). This allows web applications to detect text languages locally on mobile devices using fast, privacy-preserving, and offline-capable on-device machine learning models and not rely on cloud endpoints.

> **Motivation:** Exposing the Language Detector API on Chrome for Android allows web applications to perform fast, privacy-preserving, and offline-capable language identification directly within mobile browsers.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 390 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Language Detector API" webkit position"`, `""LanguageDetector" web api mozilla standards position"`, `""Language Detector API" Android Chrome"`, `""webmachinelearning/translation-api" language detector"`
- **Analysis:** The Language Detector API on Android extends Chromium's built-in AI capabilities from desktop to mobile, enabling client-side language identification via lightweight, offline, and privacy-preserving on-device models. While developers welcome the reduction in cloud API overhead and latency, the API currently remains confined to Chromium-based browsers. With no cross-engine consensus reached yet, its trajectory mirrors the broader Built-in AI initiative that faces non-Chromium hesitation.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt the Language Detector API strictly as an optional progressive enhancement by feature-detecting the interface and verifying availability before session creation. Always supply a reliable fallback—such as lightweight client-side libraries or server-side detection—to support Firefox and Safari users gracefully.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tomayac: "&gt; We have an open Pull Request to implement the proposed API into Mastodon, but we are waiting to have at least 2 browser engines support the proposal..."
- Standards Activity (Mozilla): Latest discussion from @sandstrom: "&gt; We are negative on this proposal. While we plan to describe the reasons further in \[our proposal\](https://github.com/mozilla/explainers/blob/main/tr..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Web Translation API](https://github.com/WebKit/standards-positions/issues/339) [open] `venue: WICG`, `from: Google`
  > *Latest discussion from @tomayac: "&gt; We have an open Pull Request to implement the proposed API into Mastodon, but we are waiting to have at least 2 browser engines support the proposal..."*
- **Mozilla:** [Web Translation API](https://github.com/mozilla/standards-positions/issues/1015) [closed] `position: negative`
  > *Latest discussion from @sandstrom: "&gt; We are negative on this proposal. While we plan to describe the reasons further in \[our proposal\](https://github.com/mozilla/explainers/blob/main/tr..."*

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img896-dot-cr-status.appspot.com/feature/5087964794322944?gate=6097459746045952) *(img896-dot-cr-status.appspot.com)*
  > The \*\*Language Detector API on Android\*\* extends the web platform's built-in AI capabilities from desktop browsers to \*\*Chrome for Android (Clank)\*\* By bringing the \`LanguageDetector\` interface to Android, web applicatio...
- [appspot.com](https://polymer10-dot-cr-status.appspot.com/feature/5087964794322944/activity) *(polymer10-dot-cr-status.appspot.com)*
  > The \*\*Language Detector API on Android\*\* extends the web platform's built-in AI capabilities from desktop browsers to \*\*Chrome for Android (Clank)\*\* \*\*Details\*\*: Chromium tracking notes show that this launch replicates t...
- [talent500.com](https://talent500.com/blog/chrome-ai-api-on-device-summarization-translation) *(talent500.com)*
  > Historically, Chrome's built-in AI APIs (such as the Prompt, Summarizer, and Translation APIs) required desktop-class hardware (high VRAM/RAM) or were explicitly restricted from mobile environments \*\*Closing the Mobile A...
- [chrome.com](https://developer.chrome.com/docs/ai/language-detection) *(developer.chrome.com)*
  > Historically, Chrome's built-in AI APIs (such as the Prompt, Summarizer, and Translation APIs) required desktop-class hardware (high VRAM/RAM) or were explicitly restricted from mobile environments The documentation expl...
- [iodigital.com](https://techhub.iodigital.com/articles/building-a-translation-demo-with-chromes-built-in-ai-apis) *(techhub.iodigital.com)*
  > This eliminates the need for external cloud API calls, ensures zero data leakage over the network, provides offline capability, and significantly cuts server costs \*\*iO tech\_hub (Dave Bitter)\*\*: In tutorials building mul...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Announcement\*\*: The feature was formally scheduled and introduced as \*\*Enabled by Default\*\* on Chrome for Android

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17246.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Da...
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > https://&lt;strong&gt;chromestatus.com/feature/5087964794322944&lt;/strong&gt; will need a run on Android.
- [\[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17245.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android 'Jaewon Le...
- [\[blink-dev\] Web-Facing Change PSA: Language Detector API on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17765.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android 'Jaewon Lee' via blink-dev Fri, 16 Oct 2026 12...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/elevenlabs/captions.events/blob/main/CHROME_LANGUAGE_DETECTOR.md) *(github.com)*
- [LanguageDetector - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Translator_and_Language_Detector_APIs) *(developer.mozilla.org)*
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)*
- [LanguageDetector: detect() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector/detect) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `languagedetector` on [wpt.fyi](https://wpt.fyi/results?q=feature:languagedetector) (via webstatus.dev) — stable: Chrome 25% · Edge 75% · Firefox 25% · Safari 25%; experimental: Chrome 25% · Edge 75% · Firefox 25% · Safari 25%

#### 🌐 Web-features Group Context

*group-level data: web-features [`languagedetector`](https://webstatus.dev/features/languagedetector), shared with 1 other ChromeStatus feature*

- **Chrome usage:** 0.0022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/425))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (73 found across 12 planned queries, 20 verified) · `Google Search Grounding (gemini-3.8-flash)` (16 found, 16 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (16 found, 6 verified) · `Hacker News Algolia` (5 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "languagedetector", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "languagedetector": Chrome 25% passing (stable))* · `Sources cited by the AI synthesis` (6 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 10

---

<a id="5198951632470016-algorithm-updates-in-webcrypto"></a>
### [Algorithm Updates in WebCrypto](https://chromestatus.com/feature/5198951632470016)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5198951632470016](https://chromestatus.com/feature/5198951632470016) · [chromestatuslite.com/feature/5198951632470016](https://chromestatuslite.com/feature/5198951632470016)
- **Specification:** [https://wicg.github.io/webcrypto-modern-algos](https://wicg.github.io/webcrypto-modern-algos)
- **Chromium Bug:** [https://issues.chromium.org/issues/450627017](https://issues.chromium.org/issues/450627017)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Neutral` · Safari: `Neutral`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/web-cryptography) (Chrome: `37`, Firefox: `34`, Safari: `11`) · *group-level data: web-features [`web-cryptography`](https://webstatus.dev/features/web-cryptography), shared with 4 other ChromeStatus features*

#### 📝 Overview

Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API. This will enable developers to have access browser-provided implementations of common quantum-resistant cryptographic algorithms standardized by NIST.  \* ML-KEM - 768, 1024 \* ML-DSA - 44, 65, 87 \* ChaCha20-Poly1305 \* X-Wing

> **Motivation:** Web Crypto exposes various low-level primitives, however none of the public/private key cryptography is currently quantum-resistant   Adding quantum-resistant cryptography as a primitive to the existing WebCrypto APIs allows Javascript cryptography libraries to automatically use browser-provided cryptography (which may be more securely implemented ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 370 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Modern Algorithms in WebCrypto" site:github.com/WebKit/standards-positions"`, `""Modern Algorithms in WebCrypto" wicg"`, `""webcrypto-modern-algos" ML-KEM ChaCha20-Poly1305"`
- **Analysis:** Chromium is leading the rollout of modern WebCrypto additions by enabling NIST-standardized post-quantum primitives (ML-KEM, ML-DSA, X-Wing) and ChaCha20-Poly1305 by default in Chrome 155, introducing native Key Encapsulation Mechanism (KEM) methods to SubtleCrypto. While security engineers and edge runtimes welcome native hardware/FIPS-backed cryptographic implementations over bulky WebAssembly or pure JavaScript bundles, engine consensus remains non-committal with both Mozilla and WebKit holding officially neutral positions. Consequently, cross-browser interoperability remains fragmented, leaving developers reliant on Chromium-specific deployments and existing polyfills for cross-platform applications.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams implementing post-quantum encryption or ChaCha20 should treat these APIs as progressive enhancements, testing for native support via algorithm checks or feature detection before executing. Production applications must retain robust WebAssembly or JavaScript fallbacks until Safari and Firefox deliver native implementation milestones.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."
- Standards Activity (Mozilla): Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Modern Algorithms in WebCrypto](https://github.com/WebKit/standards-positions/issues/641) [closed] `position: neutral`, `venue: WICG`
  > *Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."*
- **Mozilla:** [Request for Mozilla Position on Modern Algorithms in WebCrypto](https://github.com/mozilla/standards-positions/issues/1282) [closed] `venue: W3C CG`, `position: neutral`, `concerns: compatibility`, `concerns: venue`, `concerns: interoperability`, `concerns: performance`, `concerns: usability`, `concerns: API design`
  > *Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."*

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/release-notes/151) *(developer.chrome.com)*
  > subtle\`) \*\*ML-KEM (FIPS 203)\*\*: Parameter sets \`768\` and \`1024\` (Module-Lattice-Based Key-Encapsulation Mechanism)
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Google introduced these algorithm updates initially as an origin trial in \*\*Chrome 151\*\* before moving to beta and stable releases across \*\*Chrome 154 / 155\*\*
- [appauxin.com](https://appauxin.com/chrome-155-jpeg-xl-features) *(appauxin.com)*
  > Google introduced these algorithm updates initially as an origin trial in \*\*Chrome 151\*\* before moving to beta and stable releases across \*\*Chrome 154 / 155\*\* \*\*Symmetric Crypto Parity\*\*: The long-requested inclusion of ...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > Microsoft documented the arrival of ML-KEM, ML-DSA, X-Wing, and ChaCha20-Poly1305 in Chromium Edge under its Web Cryptography API updates, linking directly to updated MDN references
- [ietf.org](https://datatracker.ietf.org/meeting/122/materials/slides-122-jose-modern-algorithms-in-the-web-cryptography-api-00) *(datatracker.ietf.org)*
  > Co-edited by Daniel Huigens (Proton AG) and Filip Skokan (Okta / author of \`jose\` and \`hpke-js\`), hosted under the Web Platform Incubator Community Group (WICG) Community members and library maintainers have coordinated ...
- [Post-Quantum Cryptography Reaches the Browser: ML-KEM and ML-DSA in Chrome 151's Web Crypto API \| Trade Assistance LLC](https://trade-assistance.com/blog/post-quantum-web-crypto-api-chrome-151) *(trade-assistance.com)*
  > Articles discussing the rollout walk through code examples showing how ML-KEM and X-Wing interact with client-side code Authors emphasize the practical significance for application-layer security: while browsers already ...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16786.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Re: \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto Mike Taylor Wed, 17 Jun 2026 06:48:25 -0700 ...
- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com · 2026-07-29T21:58:10)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ano...
- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype:...
- [Proposal: Implement "Modern Algorithms in the Web Cryptography API" (WICG specification) · Issue #1738 · awslabs/llrt](https://github.com/awslabs/llrt/issues/1738) *(github.com · 2026-08-24T07:05:33)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Proposal: Implement "Modern Algorithms in the Web Cryptography API" (WICG specification) · Issue #1738 · awslabs/llrt · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearan...
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com · 2025-08-06T12:55:07)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings...

#### 📚 Platform Documentation & References

- [New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1370) *(github.com)*
- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com)*
- [Proposal: Implement "Modern Algorithms in the Web Cryptography API" (WICG specification) · Issue #1738 · awslabs/llrt](https://github.com/awslabs/llrt/issues/1738) *(github.com)*
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com)*
- [implement a subset of "Modern Algorithms in the Web Cryptography API" by panva · Pull Request #6403 · cloudflare/workerd](https://github.com/cloudflare/workerd/pull/6403) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `web-cryptography` on [wpt.fyi](https://wpt.fyi/results?q=feature:web-cryptography) (via webstatus.dev) — stable: Chrome 55.4% · Edge 55.4% · Firefox 60.8% · Safari 52.4%; experimental: Chrome 56% · Edge 56% · Firefox 62.6% · Safari 52.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`web-cryptography`](https://webstatus.dev/features/web-cryptography), shared with 4 other ChromeStatus features*

- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/67)) · concerns: `venue`

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (69 found across 11 planned queries, 23 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 10 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "web-cryptography", shared with 4 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "web-cryptography": Chrome 55.4% passing (stable))* · `Sources cited by the AI synthesis` (6 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 6

---

<a id="5068277495758848-media-element-pseudo-classes"></a>
### [Media element pseudo-classes](https://chromestatus.com/feature/5068277495758848)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5068277495758848](https://chromestatus.com/feature/5068277495758848) · [chromestatuslite.com/feature/5068277495758848](https://chromestatuslite.com/feature/5068277495758848)
- **Specification:** [https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes](https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes)
- **Chromium Bug:** [https://crbug.com/40246121](https://crbug.com/40246121)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/media-pseudos) (Chrome: `—`, Firefox: `150`, Safari: `15.4`) · *group-level data: web-features [`media-pseudos`](https://webstatus.dev/features/media-pseudos)*

#### 📝 Overview

The :playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked CSS pseudo-classes match &lt;audio&gt; and &lt;video&gt; elements based on their state.  This is one of the focus areas in https://wpt.fyi/interop-2026.

> **Motivation:** Allows styling of media elements or custom media controls based on the state of the media element. For example, a large play button overlaying a video could be hidden while playing.  There is no expectation that custom media controls can be implemented entirely with CSS, as there is still a lot of state not exposed to CSS.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 365 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"css media pseudo classes interop 2026"`, `"media element pseudo classes css playing paused"`, `"media element pseudo classes web platform feature"`
- **Analysis:** The Media element pseudo-classes (:playing, :paused, :seeking, :buffering, :stalled, :muted, :volume-locked) allow CSS selectors to style &lt;audio&gt; and &lt;video&gt; elements directly based on their internal playback engine state. Designated as a key focus area in Interop 2026, the feature achieves complete cross-browser availability with Chromium's rollout in Chrome 158, joining existing implementations in Safari and Firefox. Developer reception is enthusiastic, as the standard eliminates heavy JavaScript event-listener boilerplate previously required for media player UI states.

**Key Recommendations & Takeaways:**
- Actionable Advice: Engineering teams building custom media players should start adopting media pseudo-classes to simplify player state styling and prune custom JS event-listener layers. When targeting older client environments, teams should implement these selectors via progressive enhancement while keeping lightweight JS class-toggling fallbacks where necessary.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @alastor0325: "This looks good to us, and \[this\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1707584) is our implementation bug. We also filed a separate \[issue\](ht..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **19 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **Mozilla:** [Media element pseudo-classes](https://github.com/mozilla/standards-positions/issues/1319) [open] `topic: CSS`, `team: Media`
  > *Latest discussion from @alastor0325: "This looks good to us, and \[this\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1707584) is our implementation bug. We also filed a separate \[issue\](ht..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2013367: \[meta\] Pseudo-classes for media element states](https://bugzilla.mozilla.org/show_bug.cgi?id=2013367) `[NEW]`
- **WebKit (Safari):** [Bug #311276: REGRESSION(310172@main): \[GStreamer\] imported/w3c/web-platform-tests/css/selectors/media/media-playback-state.html is flaky](https://bugs.webkit.org/show_bug.cgi?id=311276) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [css-tricks.com](https://css-tricks.com/css-states-and-javascript-events) *(css-tricks.com)*
  > Historically, reflecting media state in UI (such as custom player controls or overlays) required wiring multiple JavaScript event listeners (\`play\`, \`pause\`, \`waiting\`, \`seeking\`, \`volumechange\`) and manually syncing CSS...
- [modern-css.com](https://modern-css.com/video-player-states-without-javascript-events) *(modern-css.com)*
  > Historically, reflecting media state in UI (such as custom player controls or overlays) required wiring multiple JavaScript event listeners (\`play\`, \`pause\`, \`waiting\`, \`seeking\`, \`volumechange\`) and manually syncing CSS...
- [mintec.co](https://mintec.co/blog/css-media-pseudo-classes-player-2026) *(mintec.co)*
  > These pseudo-classes eliminate that boilerplate by exposing the browser’s internal playback engine states directly to the CSS selector engine As part of \*\*Interop 2026\*\*, browser vendors have coordinated test suites and ...
- [web.dev](https://web.dev/blog/baseline-digest-aug-2026) *(web.dev)*
  > dev / Chrome for Developers) Baseline monthly digests highlighted milestones such as \`:paused\` reaching cross-browser availability
- [chrome.com](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com)*
  > dev / Chrome for Developers) \*\*Key Points\*\*: Chrome Platform Status entries and Chrome Beta notes detailed the shipping roadmap for the seven pseudo-classes
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5068277495758848?gate=5472147766116352) *(img968-dot-cr-status.appspot.com)*
  > \*\*Key Points\*\*: Chrome Platform Status entries and Chrome Beta notes detailed the shipping roadmap for the seven pseudo-classes \*\*Cross-Engine Focus\*\*: With Safari and Firefox having landed initial implementations and Ch...

#### 🔗 Inbound Citations & Reverse Links

- [css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/issues/30523) *(github.com · 2026-09-14T23:44:14)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearan...
- [media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1307) *(github.com · 2026-08-14T17:30:45)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or windo...
- [\[blink-dev\] Intent to Prototype: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg15214.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > \[blink-dev\] Intent to Prototype: Media element pseudo-classes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Media element pseudo-classes Chromestatus Mon, 17 Nov 2025 01:58:48 -0800 Contact email...
- [Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16506.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes Chris Harrelson Mon, 11 May 2026 12:52:19 -0700 LGTM...
- [\[blink-dev\] Re: Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16505.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Media element pseudo-classes Philip Jägenstedt Mon, 11 May 2026 12:37:02 -0700 Please als...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:muted) *(developer.mozilla.org)*
- [:stalled CSS pseudo-class - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:stalled) *(developer.mozilla.org)*
- [playing CSS pseudo-class - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:playing) *(developer.mozilla.org)*
- [:buffering CSS pseudo-class - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:buffering) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:volume-locked) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `media-pseudos` on [wpt.fyi](https://wpt.fyi/results?q=feature:media-pseudos) (via webstatus.dev) — stable: Chrome 0% · Edge 0% · Firefox 87.5% · Safari 100%; experimental: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%

#### 🌐 Web-features Group Context

*group-level data: web-features [`media-pseudos`](https://webstatus.dev/features/media-pseudos)*

- **Chrome usage:** 0% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/436))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 11 planned queries, 25 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 11 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (2 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (4 found, 2 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "media-pseudos", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "media-pseudos": Chrome 0% passing (stable))* · `Sources cited by the AI synthesis` (8 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 2

---

<a id="5179186249465856-permissions-policy-focus-without-user-activation"></a>
### [Permissions Policy: focus-without-user-activation](https://chromestatus.com/feature/5179186249465856)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5179186249465856](https://chromestatus.com/feature/5179186249465856) · [chromestatuslite.com/feature/5179186249465856](https://chromestatuslite.com/feature/5179186249465856)
- **Specification:** [https://html.spec.whatwg.org/#focus-without-user-activation-feature](https://html.spec.whatwg.org/#focus-without-user-activation-feature)
- **Chromium Bug:** [https://crbug.com/40095111](https://crbug.com/40095111)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `Support`

#### 📝 Overview

Gives embedders control over programmatic focus from embedded content via the \`focus-without-user-activation\` permissions policy. When the policy is denied for the initiating frame, programmatic focus changes (from \`element.focus()\`, \`autofocus\`, \`window.focus()\`, and the focusing steps for dialogs and popovers) are blocked unless that frame has transient user activation or focus is already within its subtree. This does not prevent dialogs or popovers from opening. User-initiated focus such as clicking or tabbing is never affected. Chromium's existing restriction on autofocus in cross-origin iframes is unchanged: the policy can further restrict autofocus, but allowing it does not enable autofocus in a cross-origin frame.  The policy can be set via a \`Permissions-Policy\` HTTP response header or the iframe \`allow\` attribute. Focus delegation is supported: a parent frame that has focus can programmatically pass focus to a child iframe, even if the child has the policy denied, and once a frame has focus it can move focus within its own subtree.

> **Motivation:** Embedded third-party content such as ads, widgets, and iframes can programmatically steal input focus from the top-level page without any user interaction, silently redirecting keystrokes and creating security and accessibility problems. This was originally reported by engineers working on advertising security for large publishers.  Today developer...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 355 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"focus-without-user-activation permissions policy site:github.com"`, `"focus without user activation permissions policy"`
- **Analysis:** The \`focus-without-user-activation\` permissions policy delivers declarative embedder control to stop nested iframes, ad units, and third-party widgets from silently hijacking user focus and keystrokes. Refined via WHATWG HTML specifications and endorsed following a satisfied W3C TAG design review, the feature has reached general availability in Chromium with active co-development from Microsoft. Broad ecosystem consensus backs the feature, particularly after clarifying focus delegation and intra-subtree focus management once a frame legitimately acquires focus.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams embedding untrusted or third-party content should progressively adopt \`focus-without-user-activation 'none'\` or \`'self'\` via HTTP response headers and iframe \`allow\` attributes today. Widget authors should ensure their components rely on explicit transient user activation or parent focus delegation rather than executing unprompted programmatic focus calls.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @aprotyas: "Given our supportive position, there's now a bug tracking the WebKit implementation for \`focus-without-user-activation\`: https://bugs.webkit.org/show\_..."
- Standards Activity (Mozilla): Latest discussion from @ffiori: "cc @smaug---- @zcorpan..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **30 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [\`focus-without-user-activation\` feature policy](https://github.com/WebKit/standards-positions/issues/406) [closed] `position: support`, `topic: web apis`, `venue: WHATWG HTML Workstream`, `from: Microsoft`
  > *Latest discussion from @aprotyas: "Given our supportive position, there's now a bug tracking the WebKit implementation for \`focus-without-user-activation\`: https://bugs.webkit.org/show\_..."*
- **Mozilla:** [\`focus-without-user-activation\` feature policy](https://github.com/mozilla/standards-positions/issues/1080) [open] `venue: WHATWG`, `team: Security`
  > *Latest discussion from @ffiori: "cc @smaug---- @zcorpan..."*
- **W3C TAG:** ['focus-without-user-activation' permissions policy](https://github.com/w3ctag/design-reviews/issues/1066) [closed] `Venue: WHATWG`, `Resolution: satisfied`, `Venue: WebAppSec WG`, `Topic: Feature Policy`, `Focus: Accessibility (complete)`
  > *Latest discussion from @matatk: "Hi @ffiori. Thanks for your updates to the explainer; they're helpful, and we continue to be happy with the direction the work has taken, so will clos..."*

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/release-notes/149) *(developer.chrome.com)*
  > \*\*Status Tracking:\*\* Initially introduced behind the \`BlockingFocusWithoutUserActivation\` flag and run through Chrome Origin Trials starting in \*\*Chrome 149\*\*, targeted for full shipping in \*\*Chrome 158\*\*
- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Status Tracking:\*\* Initially introduced behind the \`BlockingFocusWithoutUserActivation\` flag and run through Chrome Origin Trials starting in \*\*Chrome 149\*\*, targeted for full shipping in \*\*Chrome 158\*\*
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/34f4ce76618b0b38da98f21bd9c33884f981a4ce) *(chromium.googlesource.com)*
  > \*\*Edge 151 – 153 Updates:\*\* Microsoft Edge detailed the feature in their web platform developer notes, reflecting active contributions by Microsoft engineers to the Chromium implementation and the WHATWG standard
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > \*\*Edge 151 – 153 Updates:\*\* Microsoft Edge detailed the feature in their web platform developer notes, reflecting active contributions by Microsoft engineers to the Chromium implementation and the WHATWG standard
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/151) *(learn.microsoft.com)*
  > \*\*Edge 151 – 153 Updates:\*\* Microsoft Edge detailed the feature in their web platform developer notes, reflecting active contributions by Microsoft engineers to the Chromium implementation and the WHATWG standard
- [appspot.com](https://cr-status.appspot.com/feature/5179186249465856?gate=6506907767537664) *(cr-status.appspot.com)*
  > \*\*Enterprise Adoption:\*\* Discussions on Chromium review threads and tracker issues noted early real-world adoption by large-scale host apps like \*\*Microsoft Teams\*\* to isolate embedded apps and tabs from stealing focus a...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Experiment: Permissions Policy: focus-without-user-activation](https://groups.google.com/a/chromium.org/g/blink-dev/c/GLmp1IrJ4Ig) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5179186249465856`)*
  > Intent to Experiment: Permissions Policy: focus-without-user-activation Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; ...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17811.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Mike Taylor Wed, 2...
- [\[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17736.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation 'Fernando Fiori' via blink...
- [Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17701.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation 'Ferna...
- [\[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg16291.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Chromestatus W...

#### 📚 Platform Documentation & References

- [webappsec-permissions-policy/policies/focus-without-user-activation.md at main · w3c/webappsec-permissions-policy](https://github.com/w3c/webappsec-permissions-policy/blob/main/policies/focus-without-user-activation.md) *(github.com)*
- [Permissions Policy: focus-without-user-activation · Issue #1324 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1324) *(github.com)*
- [Add focus-without-user-activation permissions policy · Issue #4487 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4487) *(github.com)*
- [github.com](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/153.md) *(github.com)*
- [github.com](https://github.com/whatwg/html/issues/11839) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (63 found across 12 planned queries, 20 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 14 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (6 found, 6 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 7

---

<a id="5201832664629248-additional-windowing-controls"></a>
### [Additional Windowing Controls](https://chromestatus.com/feature/5201832664629248)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5201832664629248](https://chromestatus.com/feature/5201832664629248) · [chromestatuslite.com/feature/5201832664629248](https://chromestatuslite.com/feature/5201832664629248)
- **Specification:** [https://www.w3.org/TR/window-management/#api-window-minimize-method](https://www.w3.org/TR/window-management/#api-window-minimize-method)
- **Chromium Bug:** [https://issues.chromium.org/issues/40192345](https://issues.chromium.org/issues/40192345)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/window-management) (Chrome: `111`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`window-management`](https://webstatus.dev/features/window-management), shared with 6 other ChromeStatus features*

#### 📝 Overview

Enables web applications with the window-management permission to maximize(), minimize(), and restore() their windows, and to prevent resizing through setResizable(). Additionally, new CSS media features display-state and resizable enable scripts and content to adapt to the respective window states and resizability. These features improve the usability of VDI remote application windows in Web clients, especially when it comes to titlebar window controls. The new functionality enhances existing Window Management API features: https://chromestatus.com/feature/5252960583942144

> **Motivation:** Virtual Desktop Infrastructure (VDI) web clients have limited abilities to integrate remote application windows with the local desktop environment, which creates suboptimal experiences for their users. Currently, they can only present full disjoint remote desktop environments (e.g. in a local fullscreen window), or present individual remote applica...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 300 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Additional Windowing Controls" site:github.com/mozilla/standards-positions"`, `""Additional Windowing Controls" chrome window management"`
- **Analysis:** Additional Windowing Controls (AWC) expands the Window Management API in Chromium browsers, granting web applications imperative methods to maximize, minimize, restore, and lock window resizability alongside declarative CSS media features like display-state and resizable. The API is explicitly driven by enterprise Virtual Desktop Infrastructure (VDI) clients like Citrix and VMware that need seamless remote desktop window control. However, it remains a Chromium-exclusive capability with zero implementation interest from competing browser engines, reinforcing a fragmented desktop web platform.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building enterprise desktop PWAs or VDI portals should adopt these controls purely as a progressive enhancement, gating calls behind transient user activation and feature detection of the window-management permission. General consumer-facing web projects should avoid these APIs entirely and rely on standard responsive layouts rather than attempting to manipulate window states directly.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @sonkkeli: "Hey, I'm jumping in here as I'm continuing on Ivan's work.  There were some updates made on the proposed APIs and the current proposals are at least a..."
- Standards Activity (Mozilla): Latest discussion from @michaelwasserman: "Client application window controls may indeed be limited by the OS, Window Manager, protocols, utilities, and modalities. The API surface offers coher..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Additional Windowing Controls](https://github.com/WebKit/standards-positions/issues/96) [open] `concerns: privacy`, `topic: app-like capabilities`, `concerns: integration`, `venue: none / personal repository`, `from: Google`, `concerns: annoyance`
  > *Latest discussion from @sonkkeli: "Hey, I'm jumping in here as I'm continuing on Ivan's work.  There were some updates made on the proposed APIs and the current proposals are at least a..."*
- **Mozilla:** [Additional Windowing Controls](https://github.com/mozilla/standards-positions/issues/712) [open] 
  > *Latest discussion from @michaelwasserman: "Client application window controls may indeed be limited by the OS, Window Manager, protocols, utilities, and modalities. The API surface offers coher..."*
- **W3C TAG:** [WG New Spec: Additional Windowing Controls](https://github.com/w3ctag/design-reviews/issues/1246) [open] `Review type: horizontal review`
  > *Latest discussion from @patrykchodur: "Reopening the issue..."*

#### 📰 Ecosystem Blogs & Articles

- [chromium.org](https://issues.chromium.org/issues/543983519) *(issues.chromium.org)*
  > These require the \`window-management\` permission and transient user activation (such as a click on a title-bar button) Security guardrails: Guarding the methods behind explicit permissions, requiring user activation to p...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > \*\*Declarative CSS Media Features:\*\* \`@media (display-state: ...)\` (evaluating values like \`normal\`, \`minimized\`, \`maximized\`, or \`fullscreen\`) and \`@media (resizable: ...)\` \*\*Declarative CSS Media Features:\*\* \`@media (di...
- [Chrome 155 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > \*\*Chrome 155 Beta Release Notes (developer.chrome.com):\*\* Google announced shipping Additional Windowing Controls as part of its core Web APIs The writeup highlights the combination of the \`window-management\` permission ...
- [github.io](https://mefody.github.io/fugu-detector) *(mefody.github.io)*
  > \*\*Feature Explainer (GitHub / WICG):\*\* Authored by Chromium engineers (notably Ivan Šandrk), the explainer breaks down the core architecture
- [openpwa.net](https://openpwa.net/reference/capabilities/window-management) *(openpwa.net)*
  > Security guardrails: Guarding the methods behind explicit permissions, requiring user activation to prevent web abuse (e.g., spam-minimizing or trapping users), and limiting functionality to installed PWAs \*\*OpenPWA: \*Wi...
- [progressivewebapps.com](https://progressivewebapps.com/capabilities/window-controls-overlay) *(progressivewebapps.com)*
  > \*\*OpenPWA: \*Window Controls Overlay: Custom PWA Title Bars\*:\*\* Discusses how Additional Windowing Controls serves as the missing puzzle piece for the Window Controls Overlay (WCO) API While WCO allows developers to place...

#### 🔗 Inbound Citations & Reverse Links

- [Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1364) *(github.com · 2026-08-20T17:03:51)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anot...
- [Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4257) *(github.com · 2026-08-20T17:00:48)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab ...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17442.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Chris Harrelson Mon, 14 Sep 2026 09:14:30 -0700 LGTM2 On T...
- [\[blink-dev\] Re: Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17441.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Vladimir Levin Mon, 14 Sep 2026 08:57:02 -0700 LGTM1 On We...
- [\[blink-dev\] Ready for Developer Testing: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16555.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > \[blink-dev\] Ready for Developer Testing: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Additional Windowing Controls Chromestatus Tue, 19 May 2026 00:52:56 -...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/w3ctag/design-reviews/issues/1246) *(github.com)*
- [GitHub - explainers-by-googlers/additional-windowing-controls: Repository hosting the feature explainer · GitHub](https://github.com/explainers-by-googlers/additional-windowing-controls) *(github.com)*
- [Additional Windowing Controls · Issue #96 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/96) *(github.com)*
- [github.com](https://github.com/mozilla/standards-positions/issues/938) *(github.com)*
- [Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1364) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Additional Windowing Controls Demo](https://awc-demo-4a08a808.web.app)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `window-management` on [wpt.fyi](https://wpt.fyi/results?q=feature:window-management) (via webstatus.dev) — stable: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%

#### 🌐 Web-features Group Context

*group-level data: web-features [`window-management`](https://webstatus.dev/features/window-management), shared with 6 other ChromeStatus features*

- **Chrome usage:** 0.00027% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/332))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (69 found across 13 planned queries, 14 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 11 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(group "window-management", shared with 6 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "window-management": Chrome 100% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 12

---

<a id="5114042131808256-jpeg-xl-decoding-support-imagejxl-in-blink"></a>
### [JPEG XL decoding support (image/jxl) in blink](https://chromestatus.com/feature/5114042131808256)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5114042131808256](https://chromestatus.com/feature/5114042131808256) · [chromestatuslite.com/feature/5114042131808256](https://chromestatuslite.com/feature/5114042131808256)
- **Specification:** [https://www.iso.org/standard/85066.html](https://www.iso.org/standard/85066.html)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/jpegxl) (Chrome: `155`, Firefox: `158`, Safari: `17`) · *group-level data: web-features [`jpegxl`](https://webstatus.dev/features/jpegxl), shared with 2 other ChromeStatus features*

#### 📝 Overview

Adds support for decoding JPEG XL (image/jxl) images in Blink using jxl-rs, a memory-safe pure Rust decoder (https://github.com/libjxl/jxl-rs). JPEG XL is a modern image format standardized as ISO/IEC 18181 that offers progressive decoding for improved perceived loading performance, support for wide color gamut, HDR, and high bit depth, and support for animation.

> **Motivation:** (see Summary)

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 300 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** Following its controversial removal in 2022, JPEG XL (image/jxl) has made a major return to Chromium, enabled by default in Chrome 155 using the memory-safe pure-Rust decoder jxl-rs. With Safari supporting the format since version 17 and Mozilla scheduling default support for Firefox 158 using the same Rust engine, the web platform has achieved broad multi-engine consensus. The format provides significant web performance benefits, including progressive rendering, HDR and wide-gamut support, and lossless transcoding of legacy JPEG assets.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt JPEG XL today via progressive enhancement, wrapping image/jxl sources inside standard HTML picture elements alongside AVIF and WebP fallbacks. Avoid serving standalone JXL files as primary assets until Chrome 155 and Firefox 158 achieve widespread user-base saturation and image crawling bots update their support.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "@Vikas\_Kr @i2cjak Got it. WebP's been a reliable upgrade over JPEG/PNG for ages with broad support. JPEG XL builds on th" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **10 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [@Vikas\_Kr @i2cjak Got it. WebP's been a reliable upgrade over JPEG/PNG for ages with broad support. JPEG XL builds on th](https://twitter.com/grok/status/2112812880693174467) — *Twitter / X by @grok (0 likes/RTs, 0 replies)*
- 🐦 [Addy Osmani on X: "Sneak Preview: JPEG XL decoding working in Chrome - 65% smaller than a JPEG at comparable quality. JXL aims to offer better image quality at low sizes, progressive decoding, lossless JPEG recompression and more: https://t.co/sErChStUHZ" / X](https://twitter.com/addyosmani/status/1379841205098311681?lang=en) — *Twitter / X by @addyosmani (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [phoronix.com](https://www.phoronix.com/news/JPEG-XL-Possible-Chrome-Back) *(phoronix.com)*
  > After controversially removing experimental JPEG XL support in late 2022 (Chromium 110) After controversially removing experimental JPEG XL support in late 2022 (Chromium 110), Google reversed course following persistent...
- [trade-assistance.com](https://trade-assistance.com/blog/jpeg-xl-returns-chrome-155-image-performance) *(trade-assistance.com)*
  > After controversially removing experimental JPEG XL support in late 2022 (Chromium 110) \*\*Vindication for the Web Community:\*\* When Google originally dropped JXL citing lack of interest, major industry players—including ...
- [januschka.com](https://www.januschka.com/chromium-jxl-resurrection.html) *(januschka.com)*
  > After controversially removing experimental JPEG XL support in late 2022 (Chromium 110), Google reversed course following persistent developer demand, Safari's adoption, and the PDF Association's standardization \*\*Articl...
- [windowsforum.com](https://windowsforum.com/news/chrome-155-enables-jpeg-xl-by-default-firefox-157-claim-is-wrong-158-expected.447532) *(windowsforum.com)*
  > The Blink team integrated \*\*JPEG XL (\`image/jxl\`) decoding into Chrome 155\*\*, enabled by default \*\*Fallback Handling:\*\* Because Firefox was scheduling default support slightly later (Firefox 158) and older Chromium insta...
- [Shipping JPEG XL in Chrome \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/jpeg-xl-in-chrome) *(developer.chrome.com)*
  > The Blink team integrated \*\*JPEG XL (\`image/jxl\`) decoding into Chrome 155\*\*, enabled by default Crucially, rather than re-introducing the C++ reference decoder (\`libjxl\`), Blink implemented decoding via \*\*\`jxl-rs\`\*\*, a ...
- [mochify.app](https://mochify.app/guides/jpeg-xl-chrome-support) *(mochify.app)*
  > Crucially, rather than re-introducing the C++ reference decoder (\`libjxl\`), Blink implemented decoding via \*\*\`jxl-rs\`\*\*, a pure-Rust, memory-safe decoder developed under the libjxl project \*\*Articles:\*\* \*"Viewing JPEG XL...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > Intent to Ship: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to ...

#### 📚 Platform Documentation & References

- [JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1086) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `jpegxl` on [wpt.fyi](https://wpt.fyi/results?q=feature:jpegxl) (via webstatus.dev) — stable: Chrome 96.9% · Edge 4.6% · Firefox 98.5% · Safari 56.9%; experimental: Chrome 98.5% · Edge 4.6% · Firefox 95.4% · Safari 56.9%

#### 🌐 Web-features Group Context

*group-level data: web-features [`jpegxl`](https://webstatus.dev/features/jpegxl), shared with 2 other ChromeStatus features*

- **Chrome usage:** 0.017% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/418))
- **Mozilla:** neutral ([standards position](https://github.com/mozilla/standards-positions/issues/522))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (59 found across 11 planned queries, 19 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 13 verified) · `Twitter / X API v2` *(found 3 tweet(s))* · `Tweets found by web search` (7 found, 1 verified) · `Dev.to Community Blogs` (0 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "jpegxl", shared with 2 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "jpegxl": Chrome 96.9% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5422782593761280-svg-textpath-side-attribute"></a>
### [SVG textPath side attribute](https://chromestatus.com/feature/5422782593761280)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5422782593761280](https://chromestatus.com/feature/5422782593761280) · [chromestatuslite.com/feature/5422782593761280](https://chromestatuslite.com/feature/5422782593761280)
- **Specification:** [https://w3c.github.io/svgwg/svg2-draft/text.html#TextPathElementSideAttribute](https://w3c.github.io/svgwg/svg2-draft/text.html#TextPathElementSideAttribute)
- **Chromium Bug:** [https://issues.chromium.org/issues/40362379](https://issues.chromium.org/issues/40362379)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `In development`

#### 📝 Overview

Allows authors to choose which side of a path SVG text follows using the side attribute on the textPath element. Setting side="right" effectively reverses the path direction for text layout, making it easy to place text inside or outside a circular path without duplicating or manually reversing the path data.

> **Motivation:** Authors placing text along a path have no way to flip which side of the path the text appears on. The side attribute lets authors write side="right" to place text on the opposite side of the path, without duplicating or reversing the path data. This helps label both the inside and outside of a shape, such as a circular path, with different text on ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 295 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Intent to Ship" "side attribute" textPath"`, `""SVG textPath" "side" attribute"`, `""FYI: SVG textPath side attribute" w3ctag"`, `""textPath" side="right" chrome OR webkit OR gecko OR firefox"`
- **Analysis:** The SVG 2 \`side\` attribute on \`&lt;textPath&gt;\` enables developers to flip text placement to the opposite side of a path using \`side="right"\`, eliminating the need to duplicate or manually reverse geometry for inside-versus-outside path typography. After languishing with partial implementation for years, the feature has achieved complete tripartite engine consensus, transitioning from Firefox's pioneering implementation to Chromium's default enablement in Chrome 158 and WebKit's rollout in Safari Technology Preview. The W3C Technical Architecture Group (TAG) review concluded as satisfied, confirming that the ergonomic and internationalization aspects are sound.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can begin adopting \`side="right"\` today, but should feature-detect support via \`'side' in SVGTextPathElement.prototype\` or maintain a secondary reversed path fallback if supporting legacy mobile and older desktop browsers is required. For greenfield projects and modern target baselines, relying on the attribute drastically simplifies SVG authoring and file sizes.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (W3C TAG): Latest discussion from @jyasskin: "Thanks for sending this. I'm always twitchy on internationalization grounds when I see "right" or "left", but I think it's correct in this case. We ha..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **15 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **W3C TAG:** [FYI: SVG textPath side attribute](https://github.com/w3ctag/design-reviews/issues/1279) [closed] `Resolution: satisfied`
  > *Latest discussion from @jyasskin: "Thanks for sending this. I'm always twitchy on internationalization grounds when I see "right" or "left", but I think it's correct in this case. We ha..."*

#### 📰 Ecosystem Blogs & Articles

- [bsky.app](https://bsky.app/profile/intenttoship.dev/post/3mvojrp24e22j) *(bsky.app)*
  > \*\*Intent to Ship & TAG Review:\*\* The Chromium team posted an \*Intent to Ship\* and submitted an awareness review to the W3C TAG (Issue #1279: \*FYI: SVG textPath side attribute\*)
- [igalia.com](https://planet.igalia.com) *(planet.igalia.com)*
  > \*\*WebKit (Safari):\*\* Implementation tracked in WebKit Bug #66616 (\*\[SVG2\] Implement the side attribute for SVG \`&lt;textPath&gt;\` element\*) alongside the modern Layer-Based SVG Engine (LBSE) rollout
- [\[blink-dev\] Re: Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17520.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Blink component Blink&gt;SVG ... the path the text appears on. The side attribute &gt;&gt;&gt; &lt;strong&gt;lets authors write side=&quot;right&quot; to place text on the opposite side &gt;&gt;&gt; o...
- [\[blink-dev\] Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17486.html) *(mail-archive.com)*
  > Blink component Blink&gt;SVG Web Feature ID svg-textPath-side Motivation Authors placing text along a path have no way to flip which side of the path the text appears on. The side attribute &lt;strong&gt;lets authors write sid...
- [SVG textPath side attribute - Chrome Platform Status](https://polymer10-dot-cr-status.appspot.com/feature/5422782593761280) *(polymer10-dot-cr-status.appspot.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [SVG TextPath: How to Bend Text Along the Shape of a Path](https://hyring.com/learn/svg/textpath) *(hyring.com · 2026-06-22T18:30:00)*
  > &lt;strong&gt;side is &#x27;left&#x27; (default) or &#x27;right&#x27; of the path direction&lt;/strong&gt; ... &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;body&gt; &lt;svg viewBox=&#x27;0 0 260 140&#x27;&gt; &lt;path id=&#x27;wave&#x27; ...

#### 🔗 Inbound Citations & Reverse Links

- [\[svgwg\] Remove "side" attribute from "textPath" (#1068) from Karl Dubost via GitHub on 2026-03-03 (public-svg-issues@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-svg-issues/2026Mar/0007.html) *(lists.w3.org)* *(Cites: `https://w3c.github.io/svgwg/svg2-draft/text.html#TextPathElementSideAttribute`)*
  > karlcow has just created a new issue for https://github.com/w3c/svgwg: == Remove &quot;side&quot; attribute from &quot;textPath&quot; == It was decided to add it on February 2015 to SVG2 https://www.w3.org/2015/02/12-svg...
- [\`side\` and \`path\` attributes on textPath are missing on the IDL · Issue #1086 · w3c/svgwg](https://github.com/w3c/svgwg/issues/1086) *(github.com · 2026-04-07T03:16:55)* *(Cites: `https://w3c.github.io/svgwg/svg2-draft/text.html#TextPathElementSideAttribute`)*
  > \`side\` and \`path\` attributes on textPath are missing on the IDL · Issue #1086 · w3c/svgwg · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in wi...
- [\[svgwg\] Issue: Remove "side" attribute from "textPath" (#1068) marked as Agenda+ from Karl Dubost via GitHub on 2026-03-03 (public-svg-issues@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-svg-issues/2026Mar/0008.html) *(lists.w3.org)* *(Cites: `https://w3c.github.io/svgwg/svg2-draft/text.html#TextPathElementSideAttribute`)*
  > karlcow has just labeled an issue for https://github.com/w3c/svgwg as &quot;Agenda+&quot;: == Remove &quot;side&quot; attribute from &quot;textPath&quot; == It was decided to add it on February 2015 to SVG2 https://www.w...

#### 📚 Platform Documentation & References

- [FYI: SVG textPath side attribute · Issue #1279 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1279) *(github.com)*
- [side - SVG - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/side) *(developer.mozilla.org)*
- [SVGTextPathElement: side property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/SVGTextPathElement/side) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/de/play?uuid=c6ebfb7730bcb92ab869c90b67985c8fbb14ef2c&state=tVRtb9s2EP4rNyYf7MKx5C1BEdsysGVeUzTL0sXrNoBAQ4tniQtNaiRl2Qj83wuSVpykaVBg6wdb5PHuuZfnIe9I6ZaSDMnYrgpYCWx%2B0uuMkhRSGKThRwmsl1LZjJLSuWqYJE3T9Jsf%2BtoUyfdpmiZ2VVAyoQpg%2FN3RETgNpeAIrkSomCt7IBwIC7WtmZQbaAyrKuQgFDAYc1zYCaDEJSoHR0d7nN1Ra%2FJQfgEgeEbJr5srbyDRtBBSZpQorbA1WWf0LWaUGOStLQQO0t5pCu9Pw%2Bc07R2fhM0ghZPw%2F34QPoO0dxw3r1M4PvH%2FlEAyoSqU43DtJhE1rH01UBpcZJQctMWBFTyUIIrSUTKZlcKC94aFllI3FlgYUX%2BctBix2WQHP%2FbD9d957ZxWsXWni0Likcf2mGEH14LjOIluPqAyGL2l9uyMk8rghCrSI7m1ZBh471E113zTo8qzf%2Bczl%2BhLHcJxmlbrkbc0grtyCKx2egTJK3iHWNlALrMV5g4Mc0LDq4SqLVUHUj9BOmmB9ArNQupmCDY3WspgrBjnQhVDSPsnBpfBNteGoxnCoFqD1VJwmEuW345CAtIj%2F%2Fj6c62sA6mL6U46GXCd137Z%2F7dGs7lGibnTpkPJQZhBd0TVola5E1r5wI6fcTcWu8fpC6XQzDxHGdwc3j13sj2887FbStXN6El47G2mK8g%2BN5%2BHmcRGYgP30nmh%2FNYnthDjdnp4qelHMvGRVCUJnKOs0MD9IJwGg4wDU9zXG4jNa2P8SEPoo5mdxRMvts5udM5s4gJAYowZxTsCIBbQaavv%2B5P%2BnFn8wCRkWQbXH97MdoftmGbTv2ZXP87OP16%2F%2FXk6%2B%2Ftq%2BvH3t2%2FOZ902AwR8yOD%2BTo3iwRZQWgwJW8%2F%2FmPhi%2BsssQj2XXeLiWyb%2F4%2FLd5W9%2FXn45f61ulW7U0xKec8S1v6bIYcVkjfuIHWe66NycPSB8CId3%2Fru96QbPLeTM5eU9x94%2FoFdGV2jcxr%2FtSjuwdVVp4%2BLL7vxLNze6sWhaoCD7IMKLndCEEk4wCdYxhxAkxjhVT4U2CkG7h87HhfxNiSrs2rfRQi5FfoucqmjqM86nK1TuQliHCv21CC6U9KDThWzymYS%2FgWKTBM5Kpgr0dy3o5mWNfL08v8D9o4TxmvwfGUNfe%2FHExQMy64ozz34g814sT4ncC6qD3YeiouQanROq2DP81QrrxwcuasyvSI%2B4EpdIhkT6AZDtJw%3D%3D&srcPrefix=%2Fen-US%2Fdocs%2FWeb%2FAPI%2FSVGTextPathElement%2Fside%2F) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/svg/reference/attribute/side/index.md?plain=1) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (54 found across 10 planned queries, 21 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (5 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (7 found, 6 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 1

---

<a id="5112398709129216-prerendering-cross-origin-iframes"></a>
### [Prerendering cross-origin iframes](https://chromestatus.com/feature/5112398709129216)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5112398709129216](https://chromestatus.com/feature/5112398709129216) · [chromestatuslite.com/feature/5112398709129216](https://chromestatuslite.com/feature/5112398709129216)
- **Specification:** [https://wicg.github.io/nav-speculation/prerendering.html](https://wicg.github.io/nav-speculation/prerendering.html)
- **Chromium Bug:** [https://issues.chromium.org/issues/440387014](https://issues.chromium.org/issues/440387014)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/speculation-rules) (Chrome: `109`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`speculation-rules`](https://webstatus.dev/features/speculation-rules), shared with 15 other ChromeStatus features*

#### 📝 Overview

Prerenders cross-origin iframes with an opt-in response header.    Browsers will now prerender all cross-origin frames if the top-level frame's HTTP response includes the Supports-Loading-Mode: prerender-cross-origin-frames.

> **Motivation:** By default, navigational prerendering delays the loading of all cross-origin iframes until the referring page activates the prerendered page.  However, there are some cases where cross-origin iframes are particularly important to an application, such that delaying them negates many of the benefits of prerendering.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 285 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"site github com mozilla standards positions Prerendering cross origin iframes"`, `"Prerendering cross origin iframes Supports Loading Mode prerender cross origin frames"`, `"site github com WebKit standards positions Prerendering cross origin iframes"`, `"Supports Loading Mode prerender cross origin frames chromestatus"`
- **Analysis:** Prerendering cross-origin iframes via the HTTP header 'Supports-Loading-Mode: prerender-cross-origin-frames' addresses a long-standing performance bottleneck where critical embedded third-party widgets were deferred until activation during speculative prerendering. While Chromium has pushed the feature forward to general availability, broader ecosystem support remains limited, with the WICG specification still lacking multi-stakeholder engine commitment. Developers value the ability to achieve truly instantaneous transitions on iframe-heavy pages, but the feature is currently confined to the Chromium ecosystem.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams maintaining critical, above-the-fold cross-origin iframe content can safely adopt 'Supports-Loading-Mode: prerender-cross-origin-frames' as a low-risk progressive enhancement on top of the Speculation Rules API. Because browsers without support or devices under resource constraints will cleanly fall back to deferring iframes until navigation activation, there is zero risk of breaking standard browsing behavior.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (W3C TAG): Latest discussion from @yoichio: "Still in discussion, but we lean to allow the nesting with some restriction. Roughly: - Allow if the nested iframe's origin is same to parent frame - ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **10 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Prerendering cross-origin iframes](https://github.com/WebKit/standards-positions/issues/636) [open] 
- **Mozilla:** [Prerendering cross-origin iframes](https://github.com/mozilla/standards-positions/issues/1376) [open] 
- **W3C TAG:** [Incubation: Prerendering cross-origin iframes](https://github.com/w3ctag/design-reviews/issues/1207) [closed] `Resolution: satisfied`, `Review type: CG early review`, `Venue: WICG`, `Topic: privacy`, `Missing: Multi-stakeholder support`
  > *Latest discussion from @yoichio: "Still in discussion, but we lean to allow the nesting with some restriction. Roughly: - Allow if the nested iframe's origin is same to parent frame - ..."*

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/docs/web-platform/prerender-pages) *(developer.chrome.com)*
  > By default, navigational prerendering in modern browsers (via the \*\*Speculation Rules API\*\*) halts the execution and loading of cross-origin \`&lt;iframe&gt;\`s until the user actually activates (navigates to) the prerendered pa...
- [chromestatus.com](https://chromestatus.com/feature/5112398709129216?gate=5147046579404800) *(chromestatus.com)*
  > When this HTTP response header is served by the top-level document, the browser is authorized to prerender all embedded cross-origin iframes in advance \*\*Source:\*\* \[Chrome Platform Status\](https://chromestatus.com/featur...
- [chrome.com](https://developer.chrome.com/release-notes/147) *(developer.chrome.com)*
  > Chromium added developer controls (via \`chrome://flags#prerender2-cross-origin-iframes\`) and scheduled an Origin Trial phase starting around Chrome 147 before broader rollout Follow-up updates and release notes showcase ...
- [microsoft.com](https://learn.microsoft.com/ga-ie/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > \*\*Chromium & Edge:\*\* Shipped in tandem across Chromium-based browsers (including Microsoft Edge release notes) to give web applications with decoupled micro-frontend or embedded-frame architectures the ability to achieve...
- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM) *(groups.google.com)*
  > Intent to Prototype: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototy...
- [Intent to Experiment: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyGHPL8Z6IY) *(groups.google.com)*
  > Intent to Experiment: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experi...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Intent to Prototype: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototy...
- [Intent to Experiment: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyGHPL8Z6IY) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Intent to Experiment: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experi...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17819.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Alex Russell Wed, 21 Oct 2026 08:25:12 -0700 Do we...
- [\[blink-dev\] Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17737.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > \[blink-dev\] Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Prerendering cross-origin iframes Chromestatus Wed, 14 Oct 2026 23:30:31 -0700 Contact email...
- [\[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg16919.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Chromestatus Wed, 01 Jul 2026 22...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/WICG/nav-speculation/issues/434) *(github.com)*
- [w3.org](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1207) *(tag-github-bot.w3.org)*
- [Prerendering cross-origin iframes · Issue #636 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/636) *(github.com)*
- [Prerendering cross-origin iframes · Issue #1376 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1376) *(github.com)*
- [Incubation: Prerendering cross-origin iframes · Issue #1207 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1207) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `speculation-rules` on [wpt.fyi](https://wpt.fyi/results?q=feature:speculation-rules) (via webstatus.dev) — stable: Chrome 71.9% · Edge 93.2% · Firefox 0% · Safari 13.3%; experimental: Chrome 75.3% · Edge 94.3% · Firefox 26.4% · Safari 26.6%

#### 🌐 Web-features Group Context

*group-level data: web-features [`speculation-rules`](https://webstatus.dev/features/speculation-rules), shared with 15 other ChromeStatus features*

- **Chrome usage:** 0.12% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/317))
- **Mozilla:** neutral ([standards position](https://github.com/mozilla/standards-positions/issues/620)) · concerns: `complexity`

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (59 found across 12 planned queries, 17 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "speculation-rules", shared with 15 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "speculation-rules": Chrome 71.9% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

---

<a id="5067363861004288-single-axis-scroll-containers"></a>
### [Single-axis scroll containers](https://chromestatus.com/feature/5067363861004288)

- **Milestone:** Chrome 156 (Enabled by default) · first listed in Chrome 154
- **ChromeStatus:** [chromestatus.com/feature/5067363861004288](https://chromestatus.com/feature/5067363861004288) · [chromestatuslite.com/feature/5067363861004288](https://chromestatuslite.com/feature/5067363861004288)
- **Specification:** [https://github.com/w3c/csswg-drafts/pull/13903](https://github.com/w3c/csswg-drafts/pull/13903)
- **Chromium Bug:** [https://issues.chromium.org/440038212](https://issues.chromium.org/440038212)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/overflow) (Chrome: `113`, Firefox: `66`, Safari: `17`) · *group-level data: web-features [`overflow`](https://webstatus.dev/features/overflow), shared with 1 other ChromeStatus feature*

#### 📝 Overview

Extends the \`overflow\` property to support scrollable values together with \`clip\` (for example, \`overflow: scroll clip\`). This allows \`position: sticky\` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using \`overflow: clip\` stays in place.

> **Motivation:** The CSS \`overflow\` property currently allows behavior to be specified per axis, but it does not provide a way to make a scroll container responsible for only a single axis. The affects features that depend on scroll containers, namely \`position: sticky\` and DOM scroll APIs.  For example, authors may want to use \`position: sticky\` to create a table ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 285 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""single-axis scroll containers" chrome 156 OR "overflow: scroll clip""`, `""Single-axis scroll containers" CSS"`, `""single-axis scroll containers" webkit mozilla standards positions"`, `""single-axis scroll" "overflow" clip site:github.com/w3c/csswg-drafts"`
- **Analysis:** Single-axis scroll containers allow authors to pair scrollable values with clip (such as \`overflow: auto clip\`), preventing CSS engines from coercing the non-scrolling axis into a scroller and resolving a long-standing constraint for \`position: sticky\` and DOM scroll APIs. The feature shipped enabled by default in Chromium and Microsoft Edge 156 following CSS Working Group consensus and a satisfied W3C TAG review. However, cross-browser availability remains uneven as Gecko and WebKit implementations have not yet shipped.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should avoid using \`@supports (overflow: scroll clip)\` to gate styles, as older browsers parse the syntax validly before coercing the axis into an implicit scrollport. Until the new \`@supports named-feature(single-axis-scroll-container)\` or Safari and Firefox catch up, gate enhancements using a lightweight JavaScript runtime probe (verifying that \`scrollTop\` cannot be set on the clipped axis) while preserving standard fallback scrolling wrappers.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @freedebreuil: "&gt; How does this play with touch-action?  Thanks, good point. I think the right model is that scroll containers are now per-axis. For \`touch-action\`, t..."
- Standards Activity (W3C TAG): Latest discussion from @lukewarlow: "Hi @freedebreuil the TAG has discussed this and we're satisfied with this change.  Thanks for flying TAG..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/680) [open] `topic: css`, `from: Google`, `topic: scrolling`
- **Mozilla:** [Single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1418) [open] `venue: W3C`, `topic: CSS`
  > *Latest discussion from @freedebreuil: "&gt; How does this play with touch-action?  Thanks, good point. I think the right model is that scroll containers are now per-axis. For \`touch-action\`, t..."*
- **W3C TAG:** [Other Spec Review: Single-Axis Scroll Containers](https://github.com/w3ctag/design-reviews/issues/1222) [closed] `Resolution: satisfied`, `Review type: later review`, `Missing: Multi-stakeholder support`
  > *Latest discussion from @lukewarlow: "Hi @freedebreuil the TAG has discussed this and we're satisfied with this change.  Thanks for flying TAG..."*

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/blog/single-axis-scroll-containers-ready-for-testing) *(developer.chrome.com)*
  > Historically in CSS, true single-axis scroll containers did not exist If you specified a scrollable value (\`auto\`, \`scroll\`, or \`hidden\`) on one axis and left the other as \`visible\` or \`clip\`, CSS layout engines automati...
- [river.me](https://blog.river.me/single-axis-scroll) *(blog.river.me)*
  > \*\*Breaking \`position: sticky\` across axes:\*\* A descendant element could not stick to an outer scroll container (like the page/viewport) vertically while sticking horizontally inside a local table wrapper \*\*Article:\*\* \*"S...
- [CSS position: sticky now sticks to the nearest scroller on a per axis basis! – Bram.us](https://www.bram.us/2026/03/30/css-sticky-per-axis) *(bram.us)*
  > This unlocks per-axis \`position: sticky\` evaluation, where an element's vertical stickiness can skip the local container and resolve against an ancestor scroller \*\*Article:\*\* \*"CSS position: sticky now sticks to the near...
- [modern-css.com](https://modern-css.com/sticky-rows-and-columns-without-javascript) *(modern-css.com)*
  > This unlocks per-axis \`position: sticky\` evaluation, where an element's vertical stickiness can skip the local container and resolve against an ancestor scroller \*\*Articles:\*\* \*"TWO AXES: the sticky element that could no...
- [localenhance.com](https://labs.localenhance.com/labs/two-axes) *(labs.localenhance.com)*
  > \*\*Articles:\*\* \*"TWO AXES: the sticky element that could not pick a scroller"\* and \*"Two-Axis Sticky: Sticky Row and Column in the Same Table"\* Benchmarks the performance improvement over JavaScript workarounds
- [reddit.com](https://www.reddit.com/r/Frontend/comments/1tukmmq/css_position_sticky_now_sticks_to_the_nearest) *(reddit.com)*
  > The reaction across frontend communities (Reddit, GitHub, Mastodon/Twitter) has been overwhelmingly positive toward eliminating these workarounds

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg16097.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5067363861004288`)*
  > \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Chro...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Chris Harrelson Wed, 19 Aug 2026 07:31:33 -0700 LG...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > \[blink-dev\] Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Single-axis scroll containers Chromestatus Tue, 11 Aug 2026 11:26:13 -0700 Contact emails \[email...
- [design-reviews#1222: Other Spec Review: Single-Axis Scroll Containers](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1222) *(tag-github-bot.w3.org)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > https://&lt;strong&gt;github.com/explainers-by-googlers/single-axis-scroll-containers&lt;/strong&gt; ·
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Alex Russell Mon, 17 Aug 2026 11:59:23 -0700 Hey Free, Dan...

#### 📚 Platform Documentation & References

- [Other Spec Review: Single-Axis Scroll Containers · Issue #1222 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1222) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow) *(developer.mozilla.org)*
- [design-reviews#1222: Other Spec Review: Single-Axis Scroll Containers](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1222) *(tag-github-bot.w3.org)*
- [Single-axis scroll containers · Issue #1436 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1436) *(github.com)*
- [GitHub - ics-creative/261112\_single\_axis\_scroll\_containers · GitHub](https://github.com/ics-creative/261112_single_axis_scroll_containers) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `overflow` on [wpt.fyi](https://wpt.fyi/results?q=feature:overflow) (via webstatus.dev) — stable: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%; experimental: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%

#### 🌐 Web-features Group Context

*group-level data: web-features [`overflow`](https://webstatus.dev/features/overflow), shared with 1 other ChromeStatus feature*

- **Chrome usage:** 0.1% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/190))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (61 found across 12 planned queries, 17 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 9 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "overflow", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "overflow": Chrome 100% passing (stable))* · `Sources cited by the AI synthesis` (8 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 6

---

<a id="4832783806627840-css4-text-decoration-skip-spaces"></a>
### [CSS4 text-decoration-skip-spaces](https://chromestatus.com/feature/4832783806627840)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/4832783806627840](https://chromestatus.com/feature/4832783806627840) · [chromestatuslite.com/feature/4832783806627840](https://chromestatuslite.com/feature/4832783806627840)
- **Specification:** [https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property](https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property)
- **Chromium Bug:** [https://issues.chromium.org/issues/40862777](https://issues.chromium.org/issues/40862777)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/text-decoration) (Chrome: `1`, Firefox: `1`, Safari: `1`) · *group-level data: web-features [`text-decoration`](https://webstatus.dev/features/text-decoration), shared with 3 other ChromeStatus features*

#### 📝 Overview

The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over whitespace characters. This allows authors to prevent decorations from being drawn under spaces, which is often more visually appealing.

> **Motivation:** Currently there is no web standard way to control whether text decorations (underlines, overlines, line-throughs) appear over whitespace characters. Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The \`text-decoration-skip-spaces\` property fills this gap, allo...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 275 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Defined in CSS Text Decoration Module Level 4, text-decoration-skip-spaces decomposes the legacy text-decoration-skip property into a dedicated longhand controlling whether text decorations draw across whitespace. Chromium is the first engine moving forward with shipping support enabled by default in Chrome 155, aiming to solve visual clipping and underline overflow in inline navigation links. Broad cross-browser interoperability remains unfulfilled pending implementation and formal adoption from Apple WebKit and Mozilla Gecko.

**Key Recommendations & Takeaways:**
- Actionable Advice: Use text-decoration-skip-spaces as an opt-in progressive enhancement for aesthetic refinement on inline links, buttons, and navigation menus. Ensure underlying designs remain visually acceptable in Firefox and Safari until multi-engine consensus and implementation catch up.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [github.io](https://web-platform-dx.github.io/web-features-explorer/features/text-decoration-skip-spaces) *(web-platform-dx.github.io)*
  > It gives authors granular control over whether text decorations (such as underlines, overlines, and line-throughs) are drawn across whitespace characters Can I Use and the \*Web Features Explorer\* catalog the property as ...
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/9e279b56dd55d666be521630d76d7b8057863ba4) *(chromium.googlesource.com)*
  > \*\*Syntax:\*\* \`none \| all \| \[ start \|\| end \]\`
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > \*\*Source:\*\* \*Chrome Platform Status / Chrome 154–155 Beta Blog\* The Chrome release notes highlighted this alongside typography improvements like \`text-decoration-inset\`
- [caniuse.com](https://caniuse.com/mdn-css_properties_text-decoration-skip-spaces) *(caniuse.com)*
  > \*\*Source:\*\* \*MDN CSS Text Decoration Reference & CanIUse Browser Tables\* Can I Use and the \*Web Features Explorer\* catalog the property as experimental and track its cross-browser baseline status
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html) *(mail-archive.com)*
  > We talked about this during the API Owners call today and something that came up was this Issue 6 in the spec: https://drafts.csswg.org/css-text-decor-4/#issue-4229bfce Is your plan to ship with &#x27;none&#x27; as the d...
- [\[blink-dev\] Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17140.html) *(mail-archive.com)*
  > Specification https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property Summary The text-decoration-skip-spaces CSS property &lt;strong&gt;controls whether text decoration lines (underlines, overlines, li...

#### 🔗 Inbound Citations & Reverse Links

- [\`text-decoration-skip-spaces\` · Issue #4344 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4344) *(github.com · 2026-09-11T11:12:12)* *(Cites: `https://chromestatus.com/feature/4832783806627840`)*
  > \`text-decoration-skip-spaces\` · Issue #4344 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab ...
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #1446 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1446) *(github.com · 2026-08-21T09:30:51)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > \[css-text-decor-4\] text-decoration-skip-spaces · Issue #1446 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in w...

#### 📚 Platform Documentation & References

- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com)*
- [w3.org](https://www.w3.org/TR/css-text-decor-4) *(w3.org)*
- [\[css-text-decor\] selective toggling in the text-decoration-skip property. · Issue #843 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/843) *(github.com)*
- [\[css-text-decor-4\] Variants of text-decoration-skip-spaces:end behavior, and initial value · Issue #4653 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4653) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Text_decoration) *(developer.mozilla.org)*

#### 🧪 Interactive Demos & Samples

- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-001.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-002.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-003.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-004.html)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 69.6% · Edge 70.2% · Firefox 84.2% · Safari 65.5%; experimental: Chrome 95.3% · Edge 95.9% · Firefox 84.2% · Safari 80.7%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (59 found across 11 planned queries, 20 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 9 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "text-decoration", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "text-decoration": Chrome 69.6% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5082950457884672-pause-media-playback-on-not-visible-iframes"></a>
### [Pause media playback on not-visible iframes](https://chromestatus.com/feature/5082950457884672)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5082950457884672](https://chromestatus.com/feature/5082950457884672) · [chromestatuslite.com/feature/5082950457884672](https://chromestatuslite.com/feature/5082950457884672)
- **Specification:** [https://wicg.github.io/iframe-media-pausing](https://wicg.github.io/iframe-media-pausing)
- **Chromium Bug:** [https://issues.chromium.org/issues/351354996](https://issues.chromium.org/issues/351354996)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `No signal`

#### 📝 Overview

Adds a "media-playback-while-not-visible" permission policy to allow embedders to pause audible media playback of embedded iframes which are currently hidden - i.e. "display" property set to "none"; "visibility" property set to "hidden"; or zero-area (width or height equal to 0). While hidden, attempts made by the embedded iframe to render audible media will be blocked. When the frame is shown again the prohibitions should be lifted. This should allow developers to build more user-friendly experiences and to also improve the performance by letting the browser handle the playback of content that is not visible to users.

> **Motivation:** Web applications that host embedded media content via iframes may wish to respond to application input by temporarily hiding the media content. These applications may not want to unload the entire iframe when it's not rendered since it could generate user-perceptible performance and experience issues when showing the media content again. At the sam...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 275 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** Incubated within the WICG by Microsoft and enabled by default in Chromium 155, the 'media-playback-while-not-visible' permission policy enables embedders to automatically pause audible playback in hidden iframes without unmounting their DOM tree. It directly solves long-standing issues surrounding phantom background audio, user disruption, and resource drain in toggled UI components like tabs, carousels, and modal dialogs. Browser vendor alignment is strong, with Mozilla officially endorsing the feature and WebKit favorably evaluating the specification.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams managing embedded video, audio, or third-party ad iframes can progressively enhance embed tags with the allow attribute or deploy the Permissions-Policy HTTP header to automatically halt hidden playback in Chromium browsers. For comprehensive cross-browser coverage until Safari and Firefox implement the policy, maintain existing fallback mechanisms such as Intersection Observer checks or iframe messaging.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @padenot: "This is \`positive\`. As mentioned in a call to Gabriel, Gecko currently has complex logic to achieve this, for power efficiency reasons, and it would b..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** ["media-playback-while-not-visible" Permission Policy](https://github.com/WebKit/standards-positions/issues/409) [open] `topic: media`, `from: Microsoft`, `topic: permissions`, `venue: Edge Explainers`
- **Mozilla:** ["media-playback-while-not-visible" Permission Policy](https://github.com/mozilla/standards-positions/issues/1082) [closed] `venue: W3C`, `venue: WHATWG`, `position: positive`
  > *Latest discussion from @padenot: "This is \`positive\`. As mentioned in a call to Gabriel, Gecko currently has complex logic to achieve this, for power efficiency reasons, and it would b..."*

#### 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://developer.microsoft.com/microsoft-edge/origin-trials/trials/4d251c7a-1324-4943-a9ba-7ad5526f16fd) *(developer.microsoft.com)*
  > \*\*How It Works:\*\* When an embedded iframe is hidden—such as via \`display: none\`, \`visibility: hidden\` (or \`collapse\`), or zero-dimensional sizing (\`width: 0\` or \`height: 0\`)—the browser automatically blocks or pauses aud...
- [windowslatest.com](https://www.windowslatest.com/2025/06/04/microsoft-could-help-reduce-unexpected-audio-or-video-playback-in-chrome) *(windowslatest.com)*
  > \*\*Problem Solved:\*\* Previously, developers hiding an iframe (e.g., collapsing an e-commerce preview or an overlaid modal) had to either completely tear down and recreate the iframe DOM—causing significant re-buffering an...
- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > \*\*Source:\*\* \*developer.chrome.com\* / \*Chrome Platform Status\* \*\*Details:\*\* Chrome documented the feature under the title \*"Pause media playback on not-visible iframes"\*
- [chromestatus.com](https://chromestatus.com/release-notes/155) *(chromestatus.com)*
  > \*\*Details:\*\* Chrome documented the feature under the title \*"Pause media playback on not-visible iframes"\* Following developer and origin trials (Milestones 137–145), the policy officially graduated to enabled-by-default...
- [appspot.com](https://f896c59-dot-app-py3-dot-cr-status.appspot.com) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > Following developer and origin trials (Milestones 137–145), the policy officially graduated to enabled-by-default status in Chromium 155
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > Edge 155 shipped this behavior in lockstep with Chromium

#### 🔗 Inbound Citations & Reverse Links

- ["media-playback-while-not-visible" Permission Policy · Issue #4292 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4292) *(github.com · 2026-09-01T17:43:52)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > "media-playback-while-not-visible" Permission Policy · Issue #4292 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sign...
- [Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13479.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes 'Gabriel...
- [\[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg10759.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes 'Gabriel Brito' via blink-...
- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > Intent to Prototype: Pause media playback on not-rendered iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent...
- [\[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17400.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Yoav Weiss (@Shopify) Wed, 09 ...

#### 📚 Platform Documentation & References

- ["media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/409) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/410) *(github.com)*
- [media-playback-while-not-visible Permission Policy · Issue #1387 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1387) *(github.com)*
- [w3.org](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1084) *(tag-github-bot.w3.org)*
- ["media-playback-while-not-visible" Permission Policy · Issue #4292 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4292) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Pause media playback on not-visible iframes Demo](https://gabrielsanbrito.github.io/media-playback-while-not-visible)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (40 found across 12 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 12 verified) · `Twitter / X API v2` *(found 5 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

---

<a id="6294595288825856-css-text-overflow-string-value"></a>
### [CSS text-overflow: &lt;string&gt; value](https://chromestatus.com/feature/6294595288825856)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6294595288825856](https://chromestatus.com/feature/6294595288825856) · [chromestatuslite.com/feature/6294595288825856](https://chromestatuslite.com/feature/6294595288825856)
- **Specification:** [https://drafts.csswg.org/css-overflow-4/#text-overflow](https://drafts.csswg.org/css-overflow-4/#text-overflow)
- **Chromium Bug:** [https://issues.chromium.org/issues/41492459](https://issues.chromium.org/issues/41492459)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/custom-ellipses) (Chrome: `—`, Firefox: `9`, Safari: `—`) · *group-level data: web-features [`custom-ellipses`](https://webstatus.dev/features/custom-ellipses), shared with 1 other ChromeStatus feature*

#### 📝 Overview

Adds a &lt;string&gt; value to the text-overflow property.  This allows web authors to specify a custom string (e.g., "(more)") to indicate that text has been clipped. This provides more design flexibility and can be used to create more user-friendly and context-aware overflow indicators.

> **Motivation:** Chromium's text-overflow implementation only supports the clip and ellipsis keywords, so authors who want a different truncation indicator must truncate the text themselves in JavaScript or overlay a positioned pseudo-element on the end of the line. Supporting the specified &lt;string&gt; value lets the browser truncate the text and render the author's c...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 265 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** The CSS \`text-overflow: &lt;string&gt;\` property value is reaching cross-browser convergence under CSS Overflow Module Level 4 after more than a decade of single-engine availability in Firefox. With Chromium targeting default enablement in Chrome 157 and WebKit merging support, developer sentiment is enthusiastic about eliminating fragile JavaScript truncation loops and positioned pseudo-element workarounds. Recent CSS Working Group clarifications have solidified how custom ellipsis strings render in inline and block directions, clearing the path toward broad Baseline availability.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt this feature today using progressive enhancement with \`@supports (text-overflow: "...")\` while maintaining \`text-overflow: ellipsis\` as a safe fallback for older browser builds. Ensure custom strings are tested against localization constraints and edge cases like bidirectional text before relying on them in critical UI containers.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @jja08111: "https://github.com/WebKit/WebKit/pull/72631 has been merged, so close this issue...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS text-overflow: &lt;string&gt; value](https://github.com/WebKit/standards-positions/issues/710) [closed] `position: support`
  > *Latest discussion from @jja08111: "https://github.com/WebKit/WebKit/pull/72631 has been merged, so close this issue...."*

#### 📰 Ecosystem Blogs & Articles

- [stackoverflow.com](https://stackoverflow.com/questions/8401846/custom-text-overflow-css) *(stackoverflow.com)*
  > Historically, Firefox was the only browser engine supporting custom strings for many years
- [chromestatus.com](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > However, with broader standardization efforts under the \*\*CSS Overflow Module Level 4\*\* and its official arrival in Chromium (shipping in \*\*Chrome 157\*\*), cross-engine baseline support is finally aligning \*\*Title / Featu...
- [html - text-overflow change content of ellipsis - Stack Overflow](https://stackoverflow.com/questions/41549021/text-overflow-change-content-of-ellipsis) *(stackoverflow.com)*
  > \[read more\]", or brackets) had to write JavaScript substring calculation loops or float/position pseudo-elements over the text
- [chromium.org](https://issues.chromium.org/40336192) *(issues.chromium.org)*
  > The feature lays the groundwork for richer integration with \`line-clamp\`, enabling multi-line truncation with custom indicators in modern component libraries without fragile DOM overlays
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17547.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Rick Byers Thu, 24 Sep 2026 07:16:32 -0700 LGTM3 On Tue, Sep...
- [\[blink-dev\] Intent to Prototype: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17287.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-overflow: value Chromestatus Tue, 25 Aug 2026 05:36:48 -0700 Contact emails \[email...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17547.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Rick Byers Thu, 24 Sep 2026 07:16:32 -0700 LGTM3 On Tue, Sep...
- [\[blink-dev\] Intent to Prototype: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17287.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Intent to Prototype: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-overflow: value Chromestatus Tue, 25 Aug 2026 05:36:48 -0700 Contact emails \[email...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17513.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Alex Russell Mon, 21 Sep 2026 11:51:54 -0700 LGTM2 On Monday, Septem...
- [\[blink-dev\] Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17500.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS text-overflow: value Chromestatus Sun, 20 Sep 2026 22:03:42 -0700 Contact emails \[email&#160;prot...
- [csswg-drafts/css-overflow-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-overflow-4/#text-overflow`)*
  > csswg-drafts/css-overflow-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or windo...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/text-overflow/index.md?plain=1) *(github.com)*
- [\[css-overflow-4\] Clarification of text-overflow: &lt;string&gt; value; Rendering pipeline · Issue #11683 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11683) *(github.com)*
- [csswg-drafts/css-overflow-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-4/Overview.bs) *(github.com)*
- [text-overflow CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `custom-ellipses` on [wpt.fyi](https://wpt.fyi/results?q=feature:custom-ellipses) (via webstatus.dev) — stable: Chrome 0% · Edge 0% · Firefox 34.8% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 34.8% · Safari 0%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 13 planned queries, 21 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (7 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "custom-ellipses", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "custom-ellipses": Chrome 0% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

---

<a id="5122501071994880-predefinedcolorspace-srgb-linear-and-display-p3-linear"></a>
### [PredefinedColorSpace srgb-linear and display-p3-linear](https://chromestatus.com/feature/5122501071994880)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5122501071994880](https://chromestatus.com/feature/5122501071994880) · [chromestatuslite.com/feature/5122501071994880](https://chromestatuslite.com/feature/5122501071994880)
- **Specification:** [https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction](https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction)
- **Chromium Bug:** [https://issuetracker.google.com/issues/454152417](https://issuetracker.google.com/issues/454152417)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `Positive`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/canvas-2d-color-management) (Chrome: `92`, Firefox: `—`, Safari: `15.2`) · *group-level data: web-features [`canvas-2d-color-management`](https://webstatus.dev/features/canvas-2d-color-management), shared with 3 other ChromeStatus features*

#### 📝 Overview

Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases.

> **Motivation:** Linear color spaces (where pixel values correspond linearly to luminance) are extremely commonly used in applications with connections to physical light rendering (e.g, games) or spatial processing (e.g, decimation, anti-aliasing, and interpolation).

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 265 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""srgb-linear" "display-p3-linear" canvas html spec whatwg"`, `""PredefinedColorSpace" "srgb-linear" mozilla standards positions"`, `""srgb-linear" "display-p3-linear" PredefinedColorSpace"`, `""PredefinedColorSpace" "srgb-linear" webkit standards positions"`
- **Analysis:** Expanding PredefinedColorSpace to include srgb-linear and display-p3-linear formally aligns canvas backing stores with CSS Color Module Level 4, unlocking accurate linear-light pipelines for physically based rendering and spatial image processing. Chromium has enabled the spaces by default in Chrome and Edge 155, matching WebKit's earlier implementation in Safari. With the WHATWG HTML specification updated, the ecosystem has reached consensus, with Firefox tracking implementation as the final major engine.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building canvas, WebGL, or WebGPU graphics engines should progressively adopt srgb-linear and display-p3-linear using try-catch checks or context creation fallbacks to standard srgb or display-p3 for unsupported clients like Firefox. Adopting linear backing stores will immediately improve fidelity and shader performance for users on modern Chromium and WebKit browsers.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **11 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **Mozilla:** [srgb-linear and display-p3-linear PredefinedColorSpace](https://github.com/mozilla/standards-positions/issues/1453) [open] `venue: WHATWG`, `topic: API`

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1996208: Implement srgb-linear and display-p3-linear PredefinedColorSpace](https://bugzilla.mozilla.org/show_bug.cgi?id=1996208) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [januschka.com](https://static.januschka.com/changelog/chromium/i2s/M155.html) *(static.januschka.com)*
  > configure({ colorSpace })\`)
- [stackoverflow.com](https://stackoverflow.com/questions/79981978/why-does-safari-not-support-linear-color-spaces-in-webgpu) *(stackoverflow.com)*
  > configure({ colorSpace })\`) Historically, \`PredefinedColorSpace\` only accepted \`"srgb"\` and \`"display-p3"\` (both of which use non-linear gamma transfer curves)
- [appspot.com](https://img480-dot-cr-status.appspot.com/feature/5122501071994880) *(img480-dot-cr-status.appspot.com)*
  > These values match the CSS Color Module Level 4 specifications and allow canvases to use a linear-light transfer function without gamma encoding
- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5122501071994880) *(img544-dot-cr-status.appspot.com)*
  > \*\*Feature Entry:\*\* \*PredefinedColorSpace srgb-linear and display-p3-linear\* (spearheaded by Christopher Cameron in Blink&gt;Canvas)
- [chrome.com](https://developer.chrome.com/docs/web-platform/webgpu) *(developer.chrome.com)*
  > \*\*Chrome for Developers Blog (\*What's New in WebGPU\*):\*\* Detailed that WebGPU canvases configured with floating-point formats (such as \`rgba16float\`) can now target linear spaces directly without manual, intermediate un-...
- [apple.com](https://developer.apple.com/documentation/safari-release-notes/safari-27-release-notes) *(developer.apple.com)*
  > \*\*Safari Release Notes & WebKit Feature Guide:\*\* Documented support for \`srgb-linear\` and \`display-p3-linear\` across Canvas 2D and WebGPU, highlighting support for linear-light color workflows directly in the browser's c...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17407.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5122501071994880`)*
  > Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Mike Tay...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5122501071994880`)*
  > \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Chromestatus Fri...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/mdn/content/issues/42050) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Glossary/Color_space) *(developer.mozilla.org)*
- [github.com](https://github.com/whatwg/html/issues/11526) *(github.com)*
- [WebGPU HDR output displays values above 1.0 brighter than rendered, and the canvas is always sRGB · Issue #9704 · playcanvas/engine](https://github.com/playcanvas/engine/issues/9704) *(github.com)*
- [srgb-linear and display-p3-linear PredefinedColorSpace · Issue #1453 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1453) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `canvas-2d-color-management` on [wpt.fyi](https://wpt.fyi/results?q=feature:canvas-2d-color-management) (via webstatus.dev) — stable: Chrome 37% · Edge 37% · Firefox 14.8% · Safari 81.5%; experimental: Chrome 59.3% · Edge 74.1% · Firefox 14.8% · Safari 85.2%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (45 found across 11 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 15 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 1 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (1 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "canvas-2d-color-management", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "canvas-2d-color-management": Chrome 37% passing (stable))* · `Sources cited by the AI synthesis` (8 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5146996093616128-css-symbols"></a>
### [CSS Symbols()](https://chromestatus.com/feature/5146996093616128)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5146996093616128](https://chromestatus.com/feature/5146996093616128) · [chromestatuslite.com/feature/5146996093616128](https://chromestatuslite.com/feature/5146996093616128)
- **Specification:** [https://drafts.csswg.org/css-counter-styles-3/#symbols-function](https://drafts.csswg.org/css-counter-styles-3/#symbols-function)
- **Chromium Bug:** [https://issues.chromium.org/issues/40747844](https://issues.chromium.org/issues/40747844)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Support`

#### 📝 Overview

The CSS symbols() function lets authors define a counter style inline instead of first declaring a named @counter-style at-rule. It builds an anonymous counter style from a list of string symbols plus an optional counting system (cyclic, numeric, alphabetic, symbolic, or fixed), and is accepted as the counter style in list-style-type, the list-style shorthand, and counter() / counters().

> **Motivation:** Defining a custom list marker in CSS today requires authoring a named  @counter-style  rule and referencing it by name, which is needlessly verbose for one-off, anonymous markers. The symbols() function lets authors define the same counter style inline, without inventing or managing a global name. It works wherever a counter style is accepted, spec...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 260 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""symbols()" css "webkit" standards-positions"`, `""symbols()" CSS counter styles chrome intent to ship"`, `"css "symbols()" site:developer.mozilla.org"`
- **Analysis:** The CSS symbols() function bridges a long-standing ergonomics gap in CSS Counter Styles Module Level 3 by enabling anonymous, inline custom marker styles without the boilerplate of named @counter-style rules. After Firefox introduced support in 2015, Chromium enabled string symbols by default in Chrome 155, leaving WebKit as the sole remaining holdout. Cross-engine consensus is formally positive, with WebKit signaling explicit support as it tracks implementation, bringing the feature within sight of universal baseline interoperability.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can adopt symbols() today via progressive enhancement by declaring a fallback list-style-type or checking support using @supports (list-style-type: symbols("")). Until Safari ships stable support and the feature enters Baseline, critical list presentations requiring strict cross-browser uniformity should retain traditional @counter-style or standard marker fallbacks.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [\[css-counter-styles-3\] CSS symbols() function](https://github.com/WebKit/standards-positions/issues/714) [closed] `position: support`, `topic: css`, `venue: W3C CSS WG`
  > *Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1071436: Support image symbols in symbols()](https://bugzilla.mozilla.org/show_bug.cgi?id=1071436) `[NEW]`
- **WebKit (Safari):** [Bug #299922: \[css-counter-styles\] Support CSS \`symbols()\` function](https://bugs.webkit.org/show_bug.cgi?id=299922) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [netlify.app](https://alexanderburgos.netlify.app/blog/css-symbols-native-list-tokens) *(alexanderburgos.netlify.app)*
  > \*\*Syntax:\*\* \`symbols(\[ &lt;counter-system&gt; \]? \[ &lt;string&gt; \| &lt;image&gt; \]+)\` \*\*Core Advantage:\*\* Eliminates the friction of inventing and managing global rule names for one-off markers and emojis, keeping custom list styling sco...
- [codepen.io](https://codepen.io/nargesm/pen/BajPWKB) *(codepen.io)*
  > The documentation provides syntax breakdowns and practical examples showcasing cyclic lists (such as alternating bullets or repeating shapes) and fixed indicators
- [symbols() \| CSS-Tricks](https://css-tricks.com/almanac/functions/s/symbols) *(css-tricks.com)*
  > \*\*Link / Focus:\*\* CSS-Tricks Almanac and Comprehensive Counter Guides \*\*Key Insights:\*\* CSS-Tricks framed \`symbols()\` as the "missing shorthand" developers have needed since custom counters were standardized
- [css-tricks.com](https://css-tricks.com/styling-counters-in-css) *(css-tricks.com)*
  > \*\*Link / Focus:\*\* CSS-Tricks Almanac and Comprehensive Counter Guides \*\*Key Insights:\*\* CSS-Tricks framed \`symbols()\` as the "missing shorthand" developers have needed since custom counters were standardized
- [An in-depth guide to customising lists with CSS - Piccalilli](https://piccalil.li/blog/an-in-depth-guide-to-customising-lists-with-css) *(piccalil.li)*
  > \*\*Link / Focus:\*\* Practical Guide & Comparative Analysis Use \*\*\`symbols()\`\*\* when needing a sequenced or cycling set of symbols (e.g., Roman/alphabetic cycles or step progressions) that applies only to a single context w...
- [\[blink-dev\] Re: Intent to Ship: CSS Symbols()](http://www.mail-archive.com/blink-dev@chromium.org/msg17348.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: CSS Symbols() Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS Symbols() 'Ananya Anand' via blink-dev Wed, 02 Sep 2026 10:15:33 -0700 Thanks for the reviews! I've ...

#### 🔗 Inbound Citations & Reverse Links

- [web-features consumers report for 2026-09-01 · Issue #4287 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4287) *(github.com · 2026-09-01T08:55:15)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > https://github.com/web-platform-dx/web-features/issues/4203 used by https://&lt;strong&gt;chromestatus.com/feature/5146996093616128&lt;/strong&gt; · New feature: symbols() #4203 · none used by https://chromestatus.com/feature/511372...
- [web-features consumers report for 2026-10-01 · Issue #4457 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4457) *(github.com · 2026-10-01T10:28:04)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > New feature: symbols() #4203 used by https://&lt;strong&gt;chromestatus.com/feature/5146996093616128&lt;/strong&gt;
- [\[blink-dev\] Re: Intent to Ship: CSS Symbols()](http://www.mail-archive.com/blink-dev@chromium.org/msg17348.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > \[blink-dev\] Re: Intent to Ship: CSS Symbols() Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS Symbols() 'Ananya Anand' via blink-dev Wed, 02 Sep 2026 10:15:33 -0700 Thanks for the reviews! I've ...
- [New feature: symbols() · Issue #4203 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4203) *(github.com · 2026-07-23T18:55:08)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > New feature: symbols() · Issue #4203 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wind...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS Symbols()](http://www.mail-archive.com/blink-dev@chromium.org/msg17356.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS Symbols() Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS Symbols() Yoav Weiss (@Shopify) Wed, 02 Sep 2026 11:54:43 -0700 LGTM3 On Wed, Sep 2, 2026 at...

#### 📚 Platform Documentation & References

- [symbols() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/symbols) *(developer.mozilla.org)*
- [mozilla.org](https://hacks.mozilla.org/2015/02/introducing-counter-styles) *(hacks.mozilla.org)*
- [github.com](https://github.com/web-platform-tests/interop/issues/1432) *(github.com)*
- [web-features consumers report for 2026-09-01 · Issue #4287 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4287) *(github.com)*
- [web-features consumers report for 2026-10-01 · Issue #4457 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4457) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [CSS Symbols() Demo](https://developer.mozilla.org/en-US/docs/Web/CSS/symbols)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 12 planned queries, 16 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (3 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (3 found, 2 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (4 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

---

<a id="5136123851571200-ship-anchor-visible-and-anchor-valid-and-deprecate-the-plural-versions"></a>
### [Ship anchor-visible and anchor-valid, and deprecate the plural versions](https://chromestatus.com/feature/5136123851571200)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5136123851571200](https://chromestatus.com/feature/5136123851571200) · [chromestatuslite.com/feature/5136123851571200](https://chromestatuslite.com/feature/5136123851571200)
- **Specification:** [https://drafts.csswg.org/css-anchor-position-1/#position-visibility](https://drafts.csswg.org/css-anchor-position-1/#position-visibility)
- **Chromium Bug:** [https://issues.chromium.org/issues/526682332](https://issues.chromium.org/issues/526682332)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/anchor-positioning) (Chrome: `—`, Firefox: `—`, Safari: `27`) · *group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

#### 📝 Overview

The CSSWG resolved to rename \`anchors-valid\` --&gt; \`anchor-valid\` \[1\] and \`anchors-visible\` --&gt; \`anchor-visible\` \[2\]. To accomplish this, we'll rename the properties to the singular variants, and add aliases from the plural versions to the singular versions. At a later date, we will remove the plural variants. This chromestatus is only about shipping the new versions, and deprecating the old ones (but not removing them).  \[1\] https://github.com/w3c/csswg-drafts/issues/10201#issuecomment-4180411971 \[2\] https://github.com/w3c/csswg-drafts/issues/10201#issuecomment-4390233490

> **Motivation:** CSSWG resolved to rename, and to maintain baseline status for anchor positioning, Chrome needs to ship the new names.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 260 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""anchor-visible" "anchors-visible" chrome css anchor positioning"`, `""anchor-valid" "anchor-visible" "position-visibility" csswg"`, `""position-visibility" "anchors-valid" "anchor-valid""`
- **Analysis:** The CSS Working Group resolved to rename the \`position-visibility\` values from their plural forms (\`anchors-valid\`, \`anchors-visible\`) to singular variants (\`anchor-valid\`, \`anchor-visible\`) to clarify that evaluation applies specifically to an element's default anchor box. Chrome 157 enables the singular keywords by default and marks the plural keywords as deprecated aliases ahead of planned future removal. This step harmonizes Chromium with recent WebKit implementations and clears the path for CSS Anchor Positioning to reach unified cross-engine Baseline status.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams utilizing anchor positioning should update stylesheets to the singular syntax \`position-visibility: anchor-visible\` (and \`anchor-valid\`), using \`@supports\` or cascaded plural fallback rules if backward compatibility with older browser releases is strictly necessary. Avoid authoring new features with the plural forms, as standards registries have categorized them as discouraged and slated for eventual removal.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [webkit.org](https://webkit.org/blog/18325/webkit-features-for-safari-27-0) *(webkit.org)*
  > \*\*The Reason for the Change:\*\* Originally, \`position-visibility: anchors-valid\` was intended to hide an element if \*any\* required anchor references could not be resolved However, defining what counted as an active "requi...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > The CSSWG clarified the spec to state that the rule only evaluates the element's \*\*default anchor box\*\* \*\*Key Insights:\*\* Chromium had previously reverted an earlier implementation of \`anchors-valid\` due to specification...
- [caniuse.com](https://caniuse.com/wf-anchor-positioning-position-visibility-plurals) *(caniuse.com)*
  > Because the condition evaluates a single anchor at a time rather than a collection of anchors, the keywords were renamed to the singular form
- [caniuse.com](https://caniuse.com/?search=position-visibility) *(caniuse.com)*
  > To preserve backwards compatibility and prevent breaking existing sites, browsers maintain \`anchors-valid\` and \`anchors-visible\` as legacy aliases, marking the plural versions as deprecated ahead of eventual removal \*\*Ke...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > \*\*Sources:\*\* Chrome Platform Status & Microsoft Edge Release Notes \*\*Coverage:\*\* Chromium tracked the update under the entry \*"Ship anchor-visible and anchor-valid, and deprecate the plural versions"\* (targeted for Chrom...
- [github.io](https://web-platform-dx.github.io/web-features-explorer/features/anchor-positioning-position-visibility-plurals) *(web-platform-dx.github.io)*
  > \*\*Sources:\*\* Can I Use & Web Features Explorer

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17578.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136123851571200`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid 'Mason Freed' via blink-dev Tue, 29 Se...
- [\[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17542.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136123851571200`)*
  > \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mason Freed Wed, 23 Sep 2026 15:56:11 -0700 \*C...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/mdn/browser-compat-data/issues/29950) *(github.com)*
- [\[css-anchor-position\] Details on "anchors-valid" · Issue #10201 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10201) *(github.com)*
- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) *(developer.mozilla.org)*
- [Baseline status for Anchor positioning · Issue #3558 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3558) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 96.9% · Edge 96.7% · Firefox 84.3% · Safari 93.3%; experimental: Chrome 96.9% · Edge 97% · Firefox 86.6% · Safari 93.9%

#### 🌐 Web-features Group Context

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- **Chrome usage:** 0.072% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (70 found across 11 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 12 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (0 found, 0 verified) · `web-features mapping` *(group "anchor-positioning", shared with 8 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "anchor-positioning": Chrome 96.9% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 7 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5178263526834176-css-text-decoration-inset"></a>
### [CSS text-decoration-inset](https://chromestatus.com/feature/5178263526834176)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5178263526834176](https://chromestatus.com/feature/5178263526834176) · [chromestatuslite.com/feature/5178263526834176](https://chromestatuslite.com/feature/5178263526834176)
- **Specification:** [https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset)
- **Chromium Bug:** [https://issues.chromium.org/issues/468928416](https://issues.chromium.org/issues/468928416)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/text-decoration) (Chrome: `1`, Firefox: `1`, Safari: `1`) · *group-level data: web-features [`text-decoration`](https://webstatus.dev/features/text-decoration), shared with 3 other ChromeStatus features*

#### 📝 Overview

CSS text-decoration-inset controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges. It supports auto, length, and percentage values, including one-value and two-value syntax for setting the start and end offsets. This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements.   sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

> **Motivation:** This change implements CSS text-decoration-inset (CSS Text Decoration Level 4), including percentage values. It gives authors direct control over decoration inset and reduces the need for wrapper/pseudo-element workarounds used to fine-tune underline/overline/line-through rendering.    sampler: https://static.januschka.com/i-468928416/?asddsaasd MD...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 250 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** The text-decoration-inset property (CSS Text Decoration Module Level 4) provides native control over the start and end offsets of underlines, overlines, and line-throughs using length, percentage, or auto values. It effectively eliminates longstanding workarounds like background gradients and pseudo-elements historically used to fine-tune decoration bounds and underline reveal animations. With Firefox having shipped support, Chromium enabling it by default, and WebKit landing support through Safari Technology Preview, the API is converging toward broad cross-engine baseline interoperability.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can begin adopting text-decoration-inset today as a progressive enhancement for interactive link animations and typographic adjustments. Ensure standard text-decoration or fallback underlines remain functional for older browser engines that do not yet recognize the property.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1780887: \[meta\] \[css-text-decor\] implement text-decoration-inset to modify the length of underline etc](https://bugzilla.mozilla.org/show_bug.cgi?id=1780887) `[NEW]`
- **Mozilla (Gecko):** [Bug #1981310: \[Inactive CSS\] Add text-decoration-inset in inactive CSS](https://bugzilla.mozilla.org/show_bug.cgi?id=1981310) `[NEW]`
- **Mozilla (Gecko):** [Bug #2072125: New wpt failures in /css/ \[css-transitions/properties-value-003.html, css-transitions/properties-value-inherit-003.html, css-animations/text-decoration-inset-auto.html\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2072125) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [text-decoration-inset is Like Padding for Text Decorations \| CSS-Tricks](https://css-tricks.com/text-decoration-inset-is-like-padding-for-text-decorations) *(css-tricks.com)*
  > Recent developer articles, documentation, and browser releases highlight key details regarding the \*\*\`text-decoration-inset\`\*\* property defined in \*\*CSS Text Decoration Module Level 4\*\* \`text-decoration-inset\` (previousl...
- [chromium.org](https://issues.chromium.org/issues/498974811) *(issues.chromium.org)*
  > \*\*Syntax:\*\* Supports \`auto\`, \`&lt;length&gt;\`, and \`&lt;percentage&gt;\` values \*\*Percentage Support:\*\* Supported according to recent CSSWG resolutions, resolving relative to text segments
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > \*\*Syntax:\*\* Supports \`auto\`, \`&lt;length&gt;\`, and \`&lt;percentage&gt;\` values \*\*Offsets:\*\* Accepts either a single value (applied to both ends) or two values (setting start and end insets independently)
- [chromestatus.com](https://chromestatus.com/feature/5178263526834176?gate=6555321377095680) *(chromestatus.com)*
  > Covered by Rachel Andrew on \*Chrome for Developers\*, Chromium officially shipped \`text-decoration-inset\` in Chrome 154 (via Chromium CL \[7748204\](https://chromium-review.googlesource.com/c/chromium/src/+/7748204) / Issue...
- [chrome.com](https://developer.chrome.com/new) *(developer.chrome.com)*
  > Covered by Rachel Andrew on \*Chrome for Developers\*, Chromium officially shipped \`text-decoration-inset\` in Chrome 154 (via Chromium CL \[7748204\](https://chromium-review.googlesource.com/c/chromium/src/+/7748204) / Issue...
- [\[blink-dev\] Intent to Prototype: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg16309.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Helmut Januschka Fri, 10 Apr 2026 04:36:16 -0700 \*Contact emails...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg16309.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Helmut Januschka Fri, 10 Apr 2026 04:36:16 -0700 \*Contact emails...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., ...

#### 📚 Platform Documentation & References

- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com)*
- [text-decoration-inset CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com)*
- [Propriété CSS text-decoration-inset - MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [\[css-text-decor-4\] Allow percentages in \`text-decoration-inset\` · Issue #8403 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8403) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 69.6% · Edge 70.2% · Firefox 84.2% · Safari 65.5%; experimental: Chrome 95.3% · Edge 95.9% · Firefox 84.2% · Safari 80.7%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (71 found across 11 planned queries, 21 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (3 found, 3 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(group "text-decoration", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "text-decoration": Chrome 69.6% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="4882016087703552-webgpu-atomic-vec2u-min-max"></a>
### [WebGPU: atomic-vec2u-min-max](https://chromestatus.com/feature/4882016087703552)

- **Milestone:** Chrome 157 (Enabled by default) · first listed in Chrome 155
- **ChromeStatus:** [chromestatus.com/feature/4882016087703552](https://chromestatus.com/feature/4882016087703552) · [chromestatuslite.com/feature/4882016087703552](https://chromestatuslite.com/feature/4882016087703552)
- **Specification:** [https://www.w3.org/TR/webgpu/#dom-gpufeaturename-atomic-vec2u-min-max](https://www.w3.org/TR/webgpu/#dom-gpufeaturename-atomic-vec2u-min-max)
- **Chromium Bug:** [https://crbug.com/453689550](https://crbug.com/453689550)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `Positive`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/webgpu) (Chrome: `144`, Firefox: `—`, Safari: `26`) · *group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

#### 📝 Overview

Allows the use of 64-bit atomic minimum and maximum operations on \`atomic&lt;vec2u&gt;\` in WGSL.  This provides WebGPU shader authors with a way to implement certain algorithms that use 64-bit atomics without requiring full support for 64-bit integers.

> **Motivation:** This provides WebGPU shader authors with a way to implement certain algorithms that use 64-bit atomics without requiring full support for 64-bit integers. Not every device that supports 64-bit atomics can support every atomic operation on these types, so this feature is scoped to the min and max operations to deliver broadest reach.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 231 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"webgpu atomic vec2u min max"`, `"atomic vec2u min max gpuweb"`
- **Analysis:** The optional WebGPU feature \`atomic-vec2u-min-max\` exposes 64-bit atomic minimum and maximum operations in WGSL by utilizing \`atomic&lt;vec2u&gt;\` as an 8-byte composite surrogate, bypassing the need for full 64-bit integer (\`u64\`) type support. Standardized in the W3C GPU for the Web specifications and shipping enabled by default in Chromium's Dawn/Tint pipeline, it directly addresses critical compute-rendering bottlenecks. Consensus among engine vendors is firm, as the API's targeted design was engineered specifically around underlying hardware constraints across platforms.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat this capability strictly as progressive enhancement: query \`adapter.features.has('atomic-vec2u-min-max')\` before requesting the device and gating shader modules that use \`enable atomic\_vec2u\_min\_max;\`. Maintain traditional multipass or 32-bit depth-reduction fallbacks for devices lacking 64-bit atomic support.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "GPUにはベクトルのアトミック操作があるのかと思ったら ( atomic&lt;vec2u&gt; )、これはu64らしい。 WGSLには64ビット整数型がなくてこうなってるらしい。 アトミック操作のmin / maxはC++26でも入った" (2 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **10 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [GPUにはベクトルのアトミック操作があるのかと思ったら ( atomic&lt;vec2u&gt; )、これはu64らしい。 WGSLには64ビット整数型がなくてこうなってるらしい。 アトミック操作のmin / maxはC++26でも入った](https://twitter.com/cpp_akira/status/2113526311432126833) — *Twitter / X by @cpp\_akira (2 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [khronos.org](https://www.khronos.org/developers/linkto/wgsl) *(khronos.org)*
  > In modern GPU-driven software rasterization (such as Unreal Engine's Nanite), shaders pack depth (e.g., 32-bit depth) into the upper bits and a material/cluster/primitive ID into the lower bits \*\*Khronos Group Presentati...
- [appspot.com](https://polymer10-dot-cr-status.appspot.com/feature/4882016087703552/activity) *(polymer10-dot-cr-status.appspot.com)*
  > \*\*ChromeStatus Entry (\`WebGPU: atomic-vec2u-min-max\`):\*\* Tracks the implementation across Dawn/Tint and Chromium
- [WebGPU: atomic-vec2u-min-max \[564573901\] - Issue Tracker](https://issuetracker.google.com/issues/564573901/resources) *(issuetracker.google.com)*
  > \*\*Google Issue Tracker & MDN Documentation (Issue #564573901):\*\* Chromium engineers initiated the documentation push for MDN and Chrome for Developers, identifying the feature as part of the WebGPU API update wave
- [googleusercontent.com](https://doc-26bg-1o5g-issuetracker.googleusercontent.com/issues/564573901) *(doc-26bg-1o5g-issuetracker.googleusercontent.com)*
  > \*\*Google Issue Tracker & MDN Documentation (Issue #564573901):\*\* Chromium engineers initiated the documentation push for MDN and Chrome for Developers, identifying the feature as part of the WebGPU API update wave \*\*Chro...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > \*\*Edge 157 Web Platform Release Notes:\*\* Microsoft Edge officially included \`WebGPU: atomic-vec2u-min-max\` in its platform updates under Web APIs, highlighting continued feature parity with Chromium's WebGPU implementati...
- [jendrikillner.com](https://www.jendrikillner.com/article_database) *(jendrikillner.com)*
  > \*\*Graphics Community Reactions:\*\* Graphics engineers (such as Corentin Wallez and contributors to the \*Graphics Programming Weekly\* digests) noted that \`atomic-vec2u-min-max\`, alongside features like \`bufferView\`, bindle...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4882016087703552`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Vladimir Levin Wed, 23 Sep 2026 08:21:02 -0700 LGTM1 On Mond...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4882016087703552`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Daniel Bratell Wed, 23 Sep 2026 08:35:46 -0700 LGTM3...
- [\[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17518.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Chromestatus Mon, 21 Sep 2026 14:43:50 -0700 Contact emails \[email&#...
- [WGSL: Add atomic min max for u64, to support Nanite \[453689550\] - Chromium](https://issues.chromium.org/issues/453689550) *(issues.chromium.org)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > Chromium Sign in

#### 📚 Platform Documentation & References

- [w3.org](https://www.w3.org/TR/WGSL) *(w3.org)*
- [github.com](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2025%E2%80%9012%E2%80%9009-WGSL) *(github.com)*
- [2074500 - (webgpu-atomic-vec2u-min-max) WebGPU: support \`atomic-vec2u-min-max\` feature](https://bugzilla.mozilla.org/show_bug.cgi?id=2074500) *(bugzilla.mozilla.org)*
- [gpuweb/proposals/atomic-64-min-max.md at main · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/blob/main/proposals/atomic-64-min-max.md) *(github.com)*
- [WGSL: expose 64-bit atomic min/max through atomic\_vec2u\_min\_max (atomicStoreMin/atomicStoreMax on atomic&lt;vec2&lt;u32&gt;&gt;) · Issue #13916 · shader-slang/slang](https://github.com/shader-slang/slang/issues/13916) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)

#### 🌐 Web-features Group Context

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- **Chrome usage:** 0.093% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 12 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 9 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webgpu", shared with 44 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webgpu": no stable pass rate for Chrome yet)* · `Sources cited by the AI synthesis` (2 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5069051687731200-css-flow-start-and-flow-end-alignment-keywords"></a>
### [CSS flow-start and flow-end alignment keywords](https://chromestatus.com/feature/5069051687731200)

- **Milestone:** Chrome 158 (Enabled by default) · first listed in Chrome 157
- **ChromeStatus:** [chromestatus.com/feature/5069051687731200](https://chromestatus.com/feature/5069051687731200) · [chromestatuslite.com/feature/5069051687731200](https://chromestatuslite.com/feature/5069051687731200)
- **Specification:** [https://github.com/w3c/csswg-drafts/pull/14539](https://github.com/w3c/csswg-drafts/pull/14539)
- **Chromium Bug:** [https://issues.chromium.org/issues/555299635](https://issues.chromium.org/issues/555299635)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `N/A`

#### 📝 Overview

Introduce the flow-start/end keywords as value aliases for the existing flex-start/end keywords as resolved in the CSSWG. These are needed for alignment in the case of placement reversals.  flow-start in CSS Grid-Lanes would indicate the starting edge of the container at which placement begins, which is useful in the case where placement is reversed (\`fill-reverse\`, \`track-reverse\`, discussed in this CSSWG issue: \[css-grid-3\]\[masonry\] item-flow row vs. column in masonry layouts · Issue #12803 · w3c/csswg-drafts).  Because these are acting as value aliases, we expect flex-start/end to follow the logical directions in Grid Lanes, as well, which will expand the definition of these keywords from only applying special behavior in flexbox to applying to any layout mode whose logical start/end is different from its physical start/end.  For serialization, if either flex-start/end  or flow-start/end  is used, the returned serialized value should be flow-start/end.

> **Motivation:** In grid-lanes, there is currently no alignment keyword to allow us to align based on the start of content placement when reversal is present; instead, we can only currently use the logical container start/end.  We wanted a keyword that behaves the way flex-start/end does in flexbox containers.  Introducing flow-start/end allows us to align based on...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 230 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The CSS flow-start and flow-end alignment keywords standardize placement-relative alignment across modern layout modes such as Flexbox and emerging CSS Grid-Lanes masonry layouts, aliasing and canonically superseding flex-start and flex-end. Chrome is enabling the feature by default, backed by formal CSS Working Group resolutions to decouple placement-flow alignment from flexbox-specific naming. While browser consensus is firmly positive, the keywords are not yet universally available across all stable browser engines.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams should treat flow-start and flow-end as progressive enhancements or wait for cross-engine baseline support before using them in production. In the meantime, continue using flex-start and flex-end for flexbox layouts, or gate flow-start and flow-end behind CSS @supports rules when experimenting with CSS Grid-Lanes.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @celestepan: "@dholbert thank you for the response!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *In developer trial (Behind a flag)* to *Enabled by default*
- 📰 **11 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/WebKit/standards-positions/issues/723) [open] `topic: css`, `venue: W3C CSS WG`
- **Mozilla:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/mozilla/standards-positions/issues/1455) [closed] `position: positive`
  > *Latest discussion from @celestepan: "@dholbert thank you for the response!..."*

#### 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://cr-status.appspot.com/feature/5069051687731200?gate=5575518593351680) *(cr-status.appspot.com)*
  > Chrome Platform Status
- [stackoverflow.com](https://stackoverflow.com/questions/50919447/flexbox-flex-start-flex-end-self-start-self-end-and-start-end-whats-the-dif) *(stackoverflow.com)*
  > \*\*Why they are needed:\*\* In layout modes where item placement can be reversed (such as Flexbox with \`row-reverse\` / \`column-reverse\`, or CSS Grid-Lanes / Masonry layouts with \`fill-reverse\` and \`track-reverse\`), \`start\` ...
- [csswg.org](https://drafts.csswg.org/css-flexbox-2) *(drafts.csswg.org)*
  > \*\*Canonical Serialization:\*\* In CSS Flexible Box Layout Module Level 2 and CSS Align Level 3, \`flow-start\` and \`flow-end\` have been made the canonical alignment keywords \*\*CSS Flexible Box Layout Module Level 2 (CRD):\*\* ...
- [wpt.fyi](https://wpt.fyi/results/css/css-align/flow-start-and-end-serialization.html?run_id=5194407249969152&run_id=4902746892533760&diff=) *(wpt.fyi)*
  > When either \`flex-start\`/\`flex-end\` or \`flow-start\`/\`flow-end\` is declared, computed style serialization returns \`flow-start\` or \`flow-end\` html\`) have been deployed across major browser test harnesses to verify both par...
- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Chrome 158 Release Notes:\*\* Documents the official rollout of the feature in Chromium (tracked under Chromium Bug \`#555299635\`) It highlights the aliasing behavior and notes the serialization requirement where \`flex-st...
- [github.io](https://mozilla.github.io/standards-positions) *(mozilla.github.io)*
  > \*\*Mozilla Standards Positions:\*\* Issue \`#1455\` records Mozilla’s position on \*CSS Align: flow-start and flow-end as alignment keywords to indicate the start and end of content placement\* as officially \*\*positive\*\*

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17781.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069051687731200`)*
  > Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Dan Clark' via blink-de...
- [\[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17728.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/pull/14539`)*
  > \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blink-dev Wed,...

#### 📚 Platform Documentation & References

- [w3.org](https://lists.w3.org/Archives/Public/public-css-archive/2026Aug/0191.html) *(lists.w3.org)*
- [github.com](https://github.com/WebKit/standards-positions/issues/723) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-content) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-items) *(developer.mozilla.org)*
- [github.com](https://github.com/w3c/csswg-drafts/issues/12971) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (39 found across 12 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 12 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 2

---

<a id="5109900936085504-offlineaudiocontext-incremental-rendering"></a>
### [OfflineAudioContext incremental rendering](https://chromestatus.com/feature/5109900936085504)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5109900936085504](https://chromestatus.com/feature/5109900936085504) · [chromestatuslite.com/feature/5109900936085504](https://chromestatuslite.com/feature/5109900936085504)
- **Specification:** [https://webaudio.github.io/web-audio-api/#dom-offlineaudiocontext-startrendering](https://webaudio.github.io/web-audio-api/#dom-offlineaudiocontext-startrendering)
- **Chromium Bug:** [https://issues.chromium.org/issues/530596178](https://issues.chromium.org/issues/530596178)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

This feature adds an incremental rendering mechanism to OfflineAudioContext so that the audio graph data can be incrementally processed rather than allocating the whole audio buffer up front. By incrementally delivering the data using data chunks, there is no need to have high memory requirements for the user's machine when processing high amounts of data.

> **Motivation:** The OfflineAudioContext API works well for rendering small audio graphs, but it does not scale for larger projects because it allocates the full graph's AudioBuffer up front. For example, rendering a 2-hour video composition project in clipchamp.com in an OfflineAudioContext would require an extremely large AudioBuffer allocation.   The implication...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 230 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"OfflineAudioContext incremental rendering"`, `"OfflineAudioContext incremental rendering site github com WebAudio web audio api"`
- **Analysis:** OfflineAudioContext incremental rendering tackles a fundamental architectural bottleneck in Web Audio by streaming offline audio graphs in configurable chunks rather than requiring massive upfront buffer allocations. Co-developed by Microsoft and Google and incorporated into the Web Audio API 1.1 working draft, the capability has shipped enabled by default in Chromium. However, overall web interoperability remains incomplete because official reviews from other major engine maintainers are still pending.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams exporting large audio compositions should progressively enhance their export workflows by feature-detecting incremental chunk rendering options on startRendering. Production applications must preserve their existing single-buffer fallback or manual worker-splitting logic to support Safari and Firefox until broader engine parity is achieved.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **16 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [OfflineAudioContext Incremental Rendering](https://github.com/WebKit/standards-positions/issues/724) [open] 
- **Mozilla:** [OfflineAudioContext Incremental Rendering](https://github.com/mozilla/standards-positions/issues/1456) [open] 
- **W3C TAG:** [Other Spec Review: OfflineAudioContext Incremental Rendering](https://github.com/w3ctag/design-reviews/issues/1282) [open] `Progress: untriaged`, `Review type: later review`

#### 📰 Ecosystem Blogs & Articles

- [google.com](https://issuetracker.google.com/issues/571867211) *(issuetracker.google.com)*
  > \*\*Source:\*\* \*Chrome Platform Status (Feature ID: 5109900936085504) & Chromium Tracker\* Documentation requests have been filed to draft official Chrome and MDN guides as it approaches stable release
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5109900936085504/activity) *(img968-dot-cr-status.appspot.com)*
  > \*\*Authors & Mentors:\*\* Gabriel Brito (Microsoft) and Hongchan Choi (Google)
- [appspot.com](https://cr-status.appspot.com/feature/5109900936085504?gate=6213628544024576) *(cr-status.appspot.com)*
  > \*\*Overview:\*\* Tracks the feature’s progress through the Blink implementation pipeline and security audits \*\*Mozilla Standards Positions:\*\* Issue filed under \`mozilla/standards-positions #1456\` requesting Firefox feedback
- [\[blink-dev\] Intent to Ship: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17760.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: OfflineAudioContext incremental rendering Chromestatus Thu, 15 Oct 2026 16:46:46 -07...
- [Re: \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17788.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering Mike Taylor Mon, 19 Oct 20...
- [\[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17791.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering 'Dan Clark' via blink-dev Mon, 19 ...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17760.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109900936085504`)*
  > \[blink-dev\] Intent to Ship: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: OfflineAudioContext incremental rendering Chromestatus Thu, 15 Oct 2026 16:46:46 -07...
- [Re: \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17788.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109900936085504`)*
  > Re: \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering Mike Taylor Mon, 19 Oct 20...
- [\[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17791.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109900936085504`)*
  > \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering 'Dan Clark' via blink-dev Mon, 19 ...
- [\[blink-dev\] Intent to Prototype: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17318.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/OfflineAudioContext/explainer.md`)*
  > \[blink-dev\] Intent to Prototype: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: OfflineAudioContext incremental rendering Chromestatus Thu, 27 Aug 2026 14...

#### 📚 Platform Documentation & References

- [Web Audio API 1.1](https://www.w3.org/TR/webaudio-1.1) *(w3.org)*
- [OfflineAudioContext Incremental Rendering · Issue #724 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/724) *(github.com)*
- [OfflineAudioContext Incremental Rendering · Issue #4473 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4473) *(github.com)*
- [OfflineAudioContext Incremental Rendering by gabrielsanbrito · Pull Request #2675 · WebAudio/web-audio-api](https://github.com/WebAudio/web-audio-api/pull/2675) *(github.com)*
- [Add OfflineAudioContext incremental rendering feature by Rutujakirad · Pull Request #4475 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/pull/4475) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [OfflineAudioContext incremental rendering Demo](https://gabrielsanbrito.github.io/demo_pages/oac-incremental-rendering)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (51 found across 12 planned queries, 14 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (5 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5136856479039488-css-position-visibilityanchors-valid"></a>
### [CSS position-visibility:anchor{s}-valid](https://chromestatus.com/feature/5136856479039488)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5136856479039488](https://chromestatus.com/feature/5136856479039488) · [chromestatuslite.com/feature/5136856479039488](https://chromestatuslite.com/feature/5136856479039488)
- **Specification:** [https://drafts.csswg.org/css-anchor-position-1/#position-visibility](https://drafts.csswg.org/css-anchor-position-1/#position-visibility)
- **Chromium Bug:** [https://crbug.com/333421963](https://crbug.com/333421963)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/anchor-positioning) (Chrome: `—`, Firefox: `—`, Safari: `27`) · *group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

#### 📝 Overview

The \`anchors-valid\` value was implemented as part of https://crbug.com/329703412 but subsequently reverted, due to spec questions about the exact definition of the value. Since that time, the value has been renamed to \`anchor-valid\` (see https://chromestatus.com/feature/5136123851571200) and also better defined to be clear that only the default anchor matters, resolving a lot of ambiguity, and making this value shippable.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 225 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""position-visibility" "anchors-valid" chrome"`, `""position-visibility" "anchor-valid""`, `"csswg "position-visibility" "anchor-valid""`
- **Analysis:** The \`position-visibility: anchor-valid\` property (formerly pluralized as \`anchors-valid\`) resolves long-standing specification ambiguities by restricting validity checks strictly to an element's default anchor. Browser vendor alignment is strongly unified across Chromium, Gecko, and WebKit as the CSS Anchor Positioning Module Level 1 approaches complete cross-engine Baseline availability. With Chrome scheduling support enabled by default in Chrome 157 and counterpart engines adopting the standardized singular keyword, the feature stabilizes a crucial building block for tethered UI components.

**Key Recommendations & Takeaways:**
- Actionable Advice: Author styles using the standardized singular \`position-visibility: anchor-valid\` keyword rather than the deprecated \`anchors-valid\` alias. Implement it as a progressive enhancement behind CSS \`@supports (position-visibility: anchor-valid)\` rules or alongside existing fallback cleanup scripts until stable engine releases achieve universal baseline availability across your user base.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Suggest positive...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **9 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **Mozilla:** [\`position-visibility: anchor-valid\`](https://github.com/mozilla/standards-positions/issues/1457) [open] `topic: CSS`
  > *Latest discussion from @emilio: "Suggest positive...."*

#### 📰 Ecosystem Blogs & Articles

- [github.io](https://web-platform-dx.github.io/web-features-explorer/features/anchor-positioning-position-visibility-plurals) *(web-platform-dx.github.io)*
  > The CSS property \*\*\`position-visibility: anchor-valid\`\*\* (formerly \`anchors-valid\`) is part of the \*\*CSS Anchor Positioning Module Level 1\*\* \*\*Baseline and Feature Tracking:\*\* Web Features Explorer tracks \`anchors-valid\`...
- [chromestatus.com](https://chromestatus.com/feature/5136123851571200) *(chromestatus.com)*
  > Along with this clarification, the spec updated the keyword from plural (\`anchors-valid\`) to singular (\`anchor-valid\`), keeping the plural version as a backward-compatible alias \*\*Feature Update & Intent to Ship:\*\* Chrom...
- [testmuai.com](https://www.testmuai.com/learning-hub/css-anchor-positioning-browser-support) *(testmuai.com)*
  > Hiding elements when their anchor isn't present in the DOM prevents orphaned tooltips or floating UI bugs \*\*Practical Use Cases:\*\* Developers welcome \`anchor-valid\` because it reduces the need for JavaScript observers (e...
- [css-tricks.com](https://css-tricks.com/almanac/properties/p/position-visibility) *(css-tricks.com)*
  > \*\*Feature Deep-Dives:\*\* CSS-Tricks articles on \`position-visibility\` and \*Anchor Positioning Quirks\* cover the evolution of the property Community writers noted early discrepancies between specification drafts and browse...
- [Anchor Positioning Quirks \| CSS-Tricks](https://css-tricks.com/anchor-positioning-quirks) *(css-tricks.com)*
  > \*\*Feature Deep-Dives:\*\* CSS-Tricks articles on \`position-visibility\` and \*Anchor Positioning Quirks\* cover the evolution of the property Community writers noted early discrepancies between specification drafts and browse...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17557.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Chris Harrelson Fri, 25 Sep 2026 09:36...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17557.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Chris Harrelson Fri, 25 Sep 2026 09:36...
- [\[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17542.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mason Freed Wed, 23 Sep 2026 15:56:11 -0700 \*C...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/position-visibility/index.md?plain=1) *(github.com)*
- [Using CSS anchor positioning - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using) *(developer.mozilla.org)*
- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [position-visibility CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position-visibility) *(developer.mozilla.org)*
- [\`position-visibility: anchor-valid\` · Issue #1457 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1457) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 96.9% · Edge 96.7% · Firefox 84.3% · Safari 93.3%; experimental: Chrome 96.9% · Edge 97% · Firefox 86.6% · Safari 93.9%

#### 🌐 Web-features Group Context

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- **Chrome usage:** 0.072% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (47 found across 11 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(group "anchor-positioning", shared with 8 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "anchor-positioning": Chrome 96.9% passing (stable))* · `Sources cited by the AI synthesis` (8 found, 7 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 1

---

<a id="5171478175809536-long-animation-frames-style-and-layout-duration"></a>
### [Long Animation Frames style and layout duration](https://chromestatus.com/feature/5171478175809536)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5171478175809536](https://chromestatus.com/feature/5171478175809536) · [chromestatuslite.com/feature/5171478175809536](https://chromestatuslite.com/feature/5171478175809536)
- **Specification:** [https://github.com/w3c/long-animation-frames/pull/30](https://github.com/w3c/long-animation-frames/pull/30)
- **Chromium Bug:** [https://issues.chromium.org/issues/476826067](https://issues.chromium.org/issues/476826067)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Add \`styleDuration\` and \`forcedStyleDuration\` information to the Long Animation Frame API, enabling developers to distinguish style and layout times.

> **Motivation:** Currently performance-conscious developers have no way to distinguish their style time from their layout time, making CSS performance issues less actionable than they can be.  This feature enables developers to make that distinction.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 225 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"w3c long animation frames pull 30 styleDuration"`, `"Long Animation Frames separate style and layout durations"`, `"Long Animation Frames styleDuration forcedStyleDuration"`, `"webkit standards position long animation frames"`
- **Analysis:** The Long Animation Frames style and layout duration enhancement disaggregates aggregate rendering metrics into discrete styleDuration, layoutDuration, forcedStyleDuration, and forcedLayoutDuration timings across animation frame and script timing interfaces. Shipping enabled by default in Chromium-based browsers following its standardization in the W3C Web Performance Working Group, it addresses longstanding gaps in pinpointing CSS recalculation costs versus DOM layout thrashing. However, it remains an engine-specific diagnostic enhancement as Gecko and WebKit have yet to adopt the foundational Long Animation Frames API.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should adopt these properties using progressive feature-checking inside existing PerformanceObserver entries to feed enriched RUM diagnostics for Chromium users. Use the isolated style and layout metrics to prioritize selector simplification over layout thrashing refactors, but maintain fallbacks for the composite durations across other environments.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tunetheweb: "Answering for @noamr who’s on annual leave at the moment.  This started off as part of the long tasks spec—hence the links in the original request in ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Performance timeline - Long Animation Frames](https://github.com/WebKit/standards-positions/issues/283) [open] 
  > *Latest discussion from @tunetheweb: "Answering for @noamr who’s on annual leave at the moment.  This started off as part of the long tasks spec—hence the links in the original request in ..."*

#### 📰 Ecosystem Blogs & Articles

- [Microsoft Edge Origin Trials](https://developer.microsoft.com/microsoft-edge/origin-trials/trials/349e23d8-799a-4ac2-b45a-ffb91e09b4ce) *(developer.microsoft.com)*
  > Microsoft Edge Origin Trials Skip to main content Sign-in to GitHub Long Animation Frames - separate style and layout durations Add \`styleDuration\`, \`forcedStyleDuration\`, \`layoutDuration\` and \`forcedLayoutDuration\` info...
- [chrome.com](https://developer.chrome.com/docs/web-platform/long-animation-frames) *(developer.chrome.com)*
  > Previously, LoAF bundled style recalculation and layout calculations together (e.g., exposing only \`styleAndLayoutStart\` for the render cycle and aggregate \`forcedStyleAndLayoutDuration\` for script executions)
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > The update introduces fine-grained duration properties across two interfaces \`styleDuration\`: Time spent on style recalculation during the rendering phase
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > \*\*Chrome Release Notes & Beta Updates\*\*: Chrome documented the feature under release notes and intent entries for Long Animation Frames The entries highlight that splitting these durations allows developers to differenti...
- [google.com](https://issuetracker.google.com/514439436) *(issuetracker.google.com)*
  > The review notes that these attributes do not expose fundamentally new attack vectors or timing leaks beyond what was already observable via \`styleAndLayoutStart\` and \`forcedStyleAndLayoutDuration\`; rather, they represen...
- [nucliweb.net](https://webperf-snippets.nucliweb.net/Interaction/Long-Animation-Frames) *(webperf-snippets.nucliweb.net)*
  > High \`forcedLayoutDuration\` points to alternating DOM writes and dimension reads inside loops or animation loops

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17740.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Philip Jägenst...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17667.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Rick Byers Wed...
- [\[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17610.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Alex Russell Wed, 30 S...
- [\[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17594.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Yoav Weiss (@Shopify) Wed, 30 ...
- [\[blink-dev\] Intent to Prototype: Long Animation Frames style duration](https://www.mail-archive.com/blink-dev@chromium.org/msg15596.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Yoav Weiss (@Shopify) Mon, 19 Jan 2026 02:...

#### 📚 Platform Documentation & References

- [style\_layout\_duration\_security\_privacy\_questionnaire.md · GitHub](https://gist.github.com/yoavweiss/18e5c13239c43e34dadeda0fd2846834) *(gist.github.com)*
- [w3.org](https://www.w3.org/groups/wg/webperf/activity) *(w3.org)*
- [Long Animation Frames style and Layout duration · Issue #4453 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4453) *(github.com)*
- [Long Animation Frames style and layout duration · Issue #1615 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1615) *(github.com)*
- [Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/39) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 11 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 8 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (3 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (3 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (9 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

---

<a id="5091582546149376-webrtc-diagnostic-logging-api"></a>
### [WebRTC Diagnostic Logging API](https://chromestatus.com/feature/5091582546149376)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5091582546149376](https://chromestatus.com/feature/5091582546149376) · [chromestatuslite.com/feature/5091582546149376](https://chromestatuslite.com/feature/5091582546149376)
- **Specification:** [https://w3c.github.io/webrtc-extensions/#diagnostic-logging](https://w3c.github.io/webrtc-extensions/#diagnostic-logging)
- **Chromium Bug:** [https://crbug.com/481412281](https://crbug.com/481412281)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/webrtc) (Chrome: `56`, Firefox: `22`, Safari: `11`) · *group-level data: web-features [`webrtc`](https://webstatus.dev/features/webrtc), shared with 66 other ChromeStatus features*

#### 📝 Overview

The Real-time Communication for the Web (\[WebRTC\](https://webrtc.org/)) Diagnostic Logging API allows authorized web applications to trigger the collection of WebRTC diagnostic data so that it can be used for local debugging. It also allows an application to share the WebRTC diagnostic data with the user agent vendor, subject to user authorization, with the purpose of providing information that can help fix bugs in or improve the user agent.  Admins can enable diagnostic logs with the enterprise policy \[WebRtcDiagnosticLogCollectionAllowedForOrigins\](https://chromeenterprise.google/policies/#WebRtcDiagnosticLogCollectionAllowedForOrigins).

> **Motivation:** WebRTC applications often encounter complex connectivity or media quality issues that are difficult to reproduce in local environments. To debug these issues in production, sometimes it is helpful for developers to have access to internal state and performance metrics. This also applies to issues in the user agent.  The WebRTC Web Diagnostic Loggin...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 220 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebRTC Diagnostic Logging API" chrome"`, `""WebRTC Diagnostic Logging" mozilla standards positions"`, `""WebRtcDiagnosticLogCollectionAllowedForOrigins""`
- **Analysis:** The WebRTC Diagnostic Logging API is driven primarily by Chromium to facilitate the capture of user-agent internal telemetry and streamline debugging for complex real-time communication issues in production. While Chrome has enabled the feature on desktop platforms in Chrome 156, it is tightly guarded behind the WebRtcDiagnosticLogCollectionAllowedForOrigins enterprise policy and out-of-band reporting flows. Cross-browser consensus remains nonexistent, as both Mozilla and WebKit have held off implementation, with Mozilla explicitly challenging the necessity and privacy implications of exposing browser-level diagnostic channels to the web.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams managing WebRTC rollouts across managed enterprise environments can configure the WebRtcDiagnosticLogCollectionAllowedForOrigins administrative policy to troubleshoot fleet issues in Chromium-based browsers. However, consumer-facing WebRTC apps must continue relying on standard RTCPeerConnection statistics and progressive feature detection, as this API is neither standardized nor portable across Safari and Firefox.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "I think those are pretty weak use cases for adding a web API.  &gt; \* An organization has a custom WebRTC deployment and they want to analyze logs at sca..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [WebRTC Diagnostic Logging](https://github.com/WebKit/standards-positions/issues/699) [open] 
- **Mozilla:** [WebRTC Diagnostic Logging](https://github.com/mozilla/standards-positions/issues/1436) [open] `venue: W3C CG`, `concerns: privacy`, `concerns: API design`, `topic: API`
  > *Latest discussion from @zcorpan: "I think those are pretty weak use cases for adding a web API.  &gt; \* An organization has a custom WebRTC deployment and they want to analyze logs at sca..."*

#### 📰 Ecosystem Blogs & Articles

- [WebRTC Diagnostic Logging API](https://wicg.github.io/webrtc-diagnostic-logging) *(wicg.github.io)*
  > The \*\*WebRTC Diagnostic Logging API\*\* (incubated via WICG and the W3C WebRTC Extensions Working Group) provides a standardized, programmatic way for web applications to start, stop, and discard internal diagnostic log co...
- [chrome.com](https://developer.chrome.com/release-notes/150) *(developer.chrome.com)*
  > \*\*Out-of-Band & Bug Triage\*\*: The API provides the application with a session identifier/UUID that can be referenced in bug reports The actual diagnostic logs are saved to user-controlled storage or uploaded out-of-band ...
- [samsung.com](https://developer.samsung.com/browser/policy/web-rtc-diagnostic-log-collection-allowed-for-origins.html) *(developer.samsung.com)*
  > \*\*Enterprise Policy Gating\*\*: To prevent untrusted origin abuse, diagnostic log collection is gated through the enterprise policy \*\*\`WebRtcDiagnosticLogCollectionAllowedForOrigins\`\*\* Because Edge shares the Chromium foun...
- [google.com](https://support.google.com/chrome/a/answer/10314655?hl=en-IN) *(support.google.com)*
  > \*\*Enterprise Policy Gating\*\*: To prevent untrusted origin abuse, diagnostic log collection is gated through the enterprise policy \*\*\`WebRtcDiagnosticLogCollectionAllowedForOrigins\`\*\* Documents configuration patterns acro...
- [chromestatus.com](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > Chrome's release documentation introduced the WebRTC Diagnostic Logging API as a mechanism to troubleshoot complex WebRTC issues
- [google.com](https://groups.google.com/a/chromium.org/g/blink-dev/c/L2kX7raIUCE) *(groups.google.com)*
  > The release notes highlight that the API provides a mechanism similar to crash dumps: the web app gets an identifier, while the diagnostic payload is safely offloaded for local debugging or transmitted to browser enginee...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17731.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > \[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API Chromestatus Wed, 14 Oct 2026 16:35:06 -...
- [WebRTC Diagnostic Logging API · Issue #1343 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1343) *(github.com · 2026-08-14T17:31:56)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > WebRTC Diagnostic Logging API · Issue #1343 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anot...
- [WebRTC diagnostic logging · Issue #4531 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4531) *(github.com · 2026-10-15T10:57:10)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > WebRTC diagnostic logging · Issue #4531 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or w...
- [\[blink-dev\] Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16832.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webrtc-diagnostic-logging/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: WebRTC Diagnostic Logging API Chromestatus Tue, 23 Jun 2026 08:58:45 -0700 Contact e...
- [\[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16865.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webrtc-diagnostic-logging/blob/main/explainer.md`)*
  > \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API 'Guido Urdaneta' via blink-dev Wed, 24 Jun 202...

#### 📚 Platform Documentation & References

- [WebRTC Diagnostic Logging API · Issue #1343 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1343) *(github.com)*
- [WebRTC diagnostic logging · Issue #4531 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4531) *(github.com)*
- [WebRTC Diagnostic Logging API · Issue #272 · WICG/proposals](https://github.com/WICG/proposals/issues/272) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webrtc` on [wpt.fyi](https://wpt.fyi/results?q=feature:webrtc) (via webstatus.dev) — stable: Chrome 73.9% · Edge 73.9% · Firefox 82.6% · Safari 72.3%; experimental: Chrome 73.9% · Edge 73.5% · Firefox 85% · Safari 75.1%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (61 found across 12 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (7 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webrtc", shared with 66 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webrtc": Chrome 73.9% passing (stable))* · `Sources cited by the AI synthesis` (6 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

---

<a id="4860330806214656-webtransport-keying-material-export"></a>
### [WebTransport keying material export](https://chromestatus.com/feature/4860330806214656)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/4860330806214656](https://chromestatus.com/feature/4860330806214656) · [chromestatuslite.com/feature/4860330806214656](https://chromestatuslite.com/feature/4860330806214656)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransport-exportkeyingmaterial](https://www.w3.org/TR/webtransport/#dom-webtransport-exportkeyingmaterial)
- **Chromium Bug:** [https://issues.chromium.org/issues/556304550](https://issues.chromium.org/issues/556304550)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `In development`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

#### 📝 Overview

Adds WebTransport.exportKeyingMaterial(), which allows an application to derive cryptographic keying material bound to an established WebTransport session.  The method accepts application provided binary label and context values and a requested output length and returns a Promise&lt;Uint8Array&gt;. Chromium supports label and context values up to 255 bytes and output lengths from 1 through 4096 bytes.  For WebTransport over HTTP/3, Chromium includes the WebTransport CONNECT stream ID in the TLS exporter context. This ensures that separate WebTransport sessions derive different keying material even when they share the same underlying HTTP/3 connection.

> **Motivation:** Applications sometimes need cryptographic keying material bound to an authenticated transport session, for example to bind an application protocol, authentication exchange, or application-level encryption context to a WebTransport session without performing an additional key exchange.  TLS exporters derive application-specific secret material witho...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 220 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"WebTransport export keying material chrome"`, `"WebTransport exportKeyingMaterial"`
- **Analysis:** WebTransport.exportKeyingMaterial() standardizes access to session-bound TLS exporter secrets, allowing applications to derive cryptographic keys directly from an authenticated WebTransport session without redundant handshakes. Shipped enabled by default in Chrome 158 and advanced as part of Interop 2026 initiatives, the API enjoys solid architectural consensus between the W3C WebTransport working group and the IETF. While WebTransport overall maintains a niche traffic profile on the open web, protocol engineers and real-time developers view this capability as a vital missing link for application-layer encryption and mutual session binding.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web engineering teams building custom transport security or sub-protocol handshakes should feature-detect 'exportKeyingMaterial' on the WebTransport prototype and gate zero-RTT key derivation behind it. For cross-browser reliability today, maintain an application-layer key exchange fallback while verifying that backend HTTP/3 termination proxies correctly hash the stream ID into the exporter context.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **18 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2057363: \[wpt-sync\] Sync PR 61507 - \[WebTransport\] Add tests for WebTransport.exportKeyingMaterial](https://bugzilla.mozilla.org/show_bug.cgi?id=2057363) `[NEW]`
- **Mozilla (Gecko):** [Bug #2080606: New wpt failures in /webtransport/ \[export-keying-material.https.any.html, export-keying-material.https.any.serviceworker.html, export-keying-material.https.any.sharedworker.html, and 1 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2080606) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://polymer10-dot-cr-status.appspot.com/feature/4860330806214656) *(polymer10-dot-cr-status.appspot.com)*
  > It allows web applications to derive application-specific, session-bound cryptographic keys directly from the TLS session underlying an established WebTransport connection without exposing the TLS master secret or sessio...
- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Connection Multiplexing Isolation\*\*: For WebTransport over HTTP/3—where multiple WebTransport sessions may be multiplexed over a single HTTP/3 and QUIC connection—Chromium mixes the WebTransport \`CONNECT\` stream ID int...
- [chromium.org](https://issues.chromium.org/556304550) *(issues.chromium.org)*
  > \*\*Sources\*\*: \[Chrome Platform Status\](https://chromestatus.com/feature/4860330806214656) and \[Chromium Issue Tracker (Interop 2026)\](https://issues.chromium.org/issues/556304550) \*\*Implementation Background\*\*: Implemente...
- [chromestatus.com](https://chromestatus.com/feature/4860330806214656/activity) *(chromestatus.com)*
  > \*\*Security & DevTools Behavior\*\*: Notes on Chrome Platform Status confirm that exported keys are intentionally kept out of standard DevTools log inspectors to prevent accidental disclosure of secret material
- [ietf.org](https://datatracker.ietf.org/meeting/123/materials/slides-123-webtrans-webtransport-slides-ietf-123-03) *(datatracker.ietf.org)*
  > \*\*Sources\*\*: \[W3C WebTransport GitHub Issue #411 / #682\](https://github.com/w3c/webtransport) and \[IETF WebTrans WG Proceedings\](https://datatracker.ietf.org/) \*\*Ecosystem Demand\*\*: Protocol developers and WebRTC/gaming ...
- [\[blink-dev\] Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17838.html) *(mail-archive.com)*
  > Security This API exposes secret-derived material to script and therefore requires careful domain separation and lifecycle handling. It does not expose TLS traffic keys or allow callers to decrypt WebTransport traffic. C...

#### 📚 Platform Documentation & References

- [WebTransport: exportKeyingMaterial() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/exportKeyingMaterial) *(developer.mozilla.org)*
- [github.com](https://github.com/w3c/webtransport/issues/682) *(github.com)*
- [github.com](https://github.com/w3c/webtransport/issues/411) *(github.com)*
- [Release merge\_pr\_63465 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/releases/tag/merge_pr_63465) *(github.com)*
- [FF155 WebTransport.exportKeyingMaterial() by hamishwillee · Pull Request #45411 · mdn/content](https://github.com/mdn/content/pull/45411) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 42.3% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 70.1% · Safari 73%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (65 found across 12 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (3 found, 2 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 17 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 42.3% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5124378896498688-use-scroll-snap-type-pair-to-snap-to-a-single-element"></a>
### [Use scroll-snap-type: pair to snap to a single element](https://chromestatus.com/feature/5124378896498688)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5124378896498688](https://chromestatus.com/feature/5124378896498688) · [chromestatuslite.com/feature/5124378896498688](https://chromestatuslite.com/feature/5124378896498688)
- **Specification:** [https://drafts.csswg.org/css-scroll-snap-1](https://drafts.csswg.org/css-scroll-snap-1)
- **Chromium Bug:** [https://crbug.com/542706103](https://crbug.com/542706103)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `Support`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/scroll-snap) (Chrome: `69`, Firefox: `68`, Safari: `11`) · *group-level data: web-features [`scroll-snap`](https://webstatus.dev/features/scroll-snap), shared with 4 other ChromeStatus features*

#### 📝 Overview

https://github.com/w3c/csswg-drafts/issues/9519  Add a "pair" keyword to scroll-snap-type. If used, when the container scroll snaps to an element on one axis, it should snap to the same element on the other axis. In the existing spec, the "both" keyword allows the scroll container to select snap targets in X and Y axes independently and snap to different targets.

> **Motivation:** See explainer

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 213 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** Introduced via the CSS Working Group and enabled by default in Chrome 156, 'scroll-snap-type: pair' solves a longstanding 2D scrolling flaw by locking snap points on both axes to a single target element rather than evaluating axes independently. Developer reception is enthusiastic because it eliminates clumsy diagonal misalignments in 2D panning surfaces like maps, game boards, and image matrices without requiring complex JavaScript scroll interception. Cross-engine consensus is robust, with WebKit formally supporting the addition and Mozilla engineers expressing positive alignment during ongoing review.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt 'scroll-snap-type: pair' as a progressive enhancement today by declaring 'both' as a fallback or wrapping rules in a CSS '@supports (scroll-snap-type: pair)' query. For mission-critical 2D canvas navigation where unified element lock-in is mandatory across all platforms, maintain polyfilling or JS-assisted scroll positioning until WebKit and Firefox ship implementations.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."
- Standards Activity (Mozilla): Latest discussion from @theres-waldo: "&gt; I think this seems reasonable but I'd like \[@hiikezoe\](https://github.com/hiikezoe) / \[@theres-waldo\](https://github.com/theres-waldo) to take a loo..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "What’s new in Chrome 156. CSS gains the random() function, the :navigation-source pseudo-class for the element that star" (1 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **2 new community discussions** found
- 📰 **3 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [What’s new in Chrome 156. CSS gains the random() function, the :navigation-source pseudo-class for the element that star](https://twitter.com/webstandardsdev/status/2112846568810246470) — *Twitter / X by @webstandardsdev (1 likes/RTs, 0 replies)*
- 🐦 [Новинки Chrome 156. В CSS появились функция random(), псевдокласс :navigation-source для элемента, запустившего навигаци](https://twitter.com/webstandards_ru/status/2112846514766713029) — *Twitter / X by @webstandards\_ru (2 likes/RTs, 1 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/WebKit/standards-positions/issues/716) [closed] `position: support`, `topic: css`, `venue: W3C CSS WG`, `from: Google`
  > *Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."*
- **Mozilla:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/mozilla/standards-positions/issues/1448) [open] `venue: W3C`, `topic: CSS`
  > *Latest discussion from @theres-waldo: "&gt; I think this seems reasonable but I'd like \[@hiikezoe\](https://github.com/hiikezoe) / \[@theres-waldo\](https://github.com/theres-waldo) to take a loo..."*

#### 📰 Ecosystem Blogs & Articles

- [web.dev](https://web.dev/blog/web-platform-09-2026?hl=en) *(web.dev)*
  > Featured in Google’s \*New to the web platform\* beta wrap-ups alongside companion features like single-axis scroll containers (\`overflow: scroll clip\`) and native CSS \`random()\`
- [chromegeek.com](https://www.chromegeek.com/chrome-156-stable-whats-new) *(chromegeek.com)*
  > Featured in Google’s \*New to the web platform\* beta wrap-ups alongside companion features like single-axis scroll containers (\`overflow: scroll clip\`) and native CSS \`random()\`
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > Chromium officially implemented and launched \`scroll-snap-type: pair\` in \*\*Chrome 156\*\* Chrome's release notes detail the transition away from independent axis selection, noting that front-end teams building 2D panning c...
- [appauxin.com](https://appauxin.com/chrome-156-release-date-features) *(appauxin.com)*
  > Chrome's release notes detail the transition away from independent axis selection, noting that front-end teams building 2D panning canvases no longer have to rely on JavaScript scroll-interception scripts to achieve 2D l...
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > Polypane highlighted the feature under its Chromium feature tracking, explaining how \`pair\` eliminates edge cases when dealing with non-uniform grid layouts where items do not conform to tidy, rigid columns and rows
- [gigazine.net](https://gigazine.net/gsc_news/en/20261021-google-chrome-156) *(gigazine.net)*
  > Independent developer outlets summarizing browser updates frequently highlight \`scroll-snap-type: pair\` as a top CSS quality-of-life improvement Commentators note that combining \`scroll-snap-type: pair\` with the new sing...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17535.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Rick Bye...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Chromestatus Tue...
- [\[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17244.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Chrome...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/w3c/csswg-drafts/issues/9519) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/716) *(github.com)*
- [Scroll snap to a single element with scroll-snap-type: pair · Issue #1438 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1438) *(github.com)*
- [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element · Issue #1448 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1448) *(github.com)*
- [Other Spec Review: Add keyword "pair" to scroll-snap-type for snapping to the same element in X and Y axes · Issue #1271 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1271) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `scroll-snap` on [wpt.fyi](https://wpt.fyi/results?q=feature:scroll-snap) (via webstatus.dev) — stable: Chrome 91% · Edge 89.3% · Firefox 84.2% · Safari 70.6%; experimental: Chrome 97.2% · Edge 95.5% · Firefox 84.2% · Safari 76.8%

#### 🌐 Web-features Group Context

*group-level data: web-features [`scroll-snap`](https://webstatus.dev/features/scroll-snap), shared with 4 other ChromeStatus features*

- **Chrome usage:** 0.2% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/59))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (43 found across 12 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 11 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "scroll-snap", shared with 4 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "scroll-snap": Chrome 91% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 3

---

<a id="5068439115923456-disconnect-websockets-on-bfcache-entry"></a>
### [Disconnect WebSockets on BFCache entry](https://chromestatus.com/feature/5068439115923456)

- **Milestone:** Chrome 157 (Stepped rollout)
- **ChromeStatus:** [chromestatus.com/feature/5068439115923456](https://chromestatus.com/feature/5068439115923456) · [chromestatuslite.com/feature/5068439115923456](https://chromestatuslite.com/feature/5068439115923456)
- **Specification:** [https://github.com/whatwg/html/pull/12349](https://github.com/whatwg/html/pull/12349)
- **Chromium Bug:** [https://g-issues.chromium.org/issues/467838624](https://g-issues.chromium.org/issues/467838624)
- **Browser Signals:** Chrome: `Stepped rollout` · Firefox: `Positive` · Safari: `Shipped/Shipping`

#### 📝 Overview

Chrome is changing its behavior to allow pages with active WebSocket connections to enter the Back/Forward Cache. To achieve this, active WebSockets are now disconnected when a page is cached. Previously, active WebSocket connections prevented pages from entering BFCache.  To revert to the previous behavior (preventing pages with active WebSockets from entering BFCache), we previously provided a \[BackForwardCacheForWebSocketsAllowed\](https://chromeenterprise.google/policies/#BackForwardCacheForWebSocketsAllowed) policy. Admins can set this policy to \_Disabled\_ , which will prevent breakage in legacy apps that lack WebSocket reconnection logic. This policy will be deprecated in Chrome 157.   For more information on BFCache, see \[Test back/forward cache\](https://developer.chrome.com/docs/devtools/application/back-forward-cache).

> **Motivation:** Currently, any active WebSocket connection forces the browser to discard the page when the user navigates away, preventing it from being stored in the Back/Forward Cache (BFCache).  We are changing this behavior to allow these pages to be cached by closing any active WebSocket connections upon entry. This approach mirrors the behavior for WebTransp...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 210 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"WebSocket back forward cache disconnect error close 1006"`, `""WebSocket BFCache integration" disconnect on entry mozilla webkit"`, `"chrome BackForwardCacheForWebSocketsAllowed deprecated"`
- **Analysis:** Chromium is updating its Back/Forward Cache (BFCache) implementation to allow pages with active WebSocket connections into the cache by cleanly severing active sockets upon entry. This change unifies Chromium with Safari's existing handling and mirrors the semantics established for WebTransport, while deprecating the temporary enterprise fallback policy (\`BackForwardCacheForWebSocketsAllowed\`). Browser vendors across WHATWG, Gecko, and WebKit broadly converge on treating BFCache suspension like standard network loss.

**Key Recommendations & Takeaways:**
- Actionable Advice: Ensure your WebSocket clients handle abnormal closures (code 1006) with exponential backoff and reconnection logic, and use the \`pageshow\` event with \`event.persisted\` to re-sync server state upon BFCache restoration. Verify your application's caching status using the BFCache test utility in browser DevTools Application panels.
- Standards Activity (Mozilla): Latest discussion from @jesup: "I'm in favor; this is in line with what we've defined for WebTransport (@jan-ivar fyi)..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [WebSocket BFCache integration (Disconnect on entry)](https://github.com/WebKit/standards-positions/issues/648) [open] 
- **Mozilla:** [WebSocket BFCache integration (Disconnect on entry)](https://github.com/mozilla/standards-positions/issues/1390) [open] `venue: WHATWG`, `topic: API`
  > *Latest discussion from @jesup: "I'm in favor; this is in line with what we've defined for WebTransport (@jan-ivar fyi)..."*

#### 📰 Ecosystem Blogs & Articles

- [WebSockets and bfcache: Chrome 150 Still Said 'websocket'](https://jangwook.net/en/blog/en/websocket-bfcache-eligibility-remeasure) *(jangwook.net)*
  > Historically, pages holding active WebSocket connections (such as chat widgets, live sports scores, or financial tickers) were disqualified from entering the browser's \*\*Back/Forward Cache (BFCache)\*\* Navigating away for...
- [Microsoft Edge Browser Policy Documentation BackForwardCacheForWebSocketsAllowed \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/backforwardcacheforwebsocketsallowed) *(learn.microsoft.com)*
  > Microsoft Edge Browser Policy Documentation BackForwardCacheForWebSocketsAllowed \| Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to ...
- [appspot.com](https://polymer10-samples-dot-cr-status.appspot.com/feature/5068439115923456) *(polymer10-samples-dot-cr-status.appspot.com)*
  > \*\*Enterprise Rollback Policy:\*\* For legacy internal apps lacking reconnection routines, Google and Microsoft provided the enterprise policy \[\`BackForwardCacheForWebSocketsAllowed\`\](https://chromeenterprise.google/policie...
- [whoooop.co.uk](https://whoooop.co.uk/blog/bfcache-not-working) *(whoooop.co.uk)*
  > \*\*Real-World Impact:\*\* Developer analysis posts examine the transition away from WebSockets being an "Actionable" blocker in Chrome DevTools (\`Application &gt; Back/forward cache &gt; Test back/forward cache\`) \*\*Audit in DevTo...
- [google.com](https://issuetracker.google.com/issues/472063700/resources) *(issuetracker.google.com)*
  > close()\` to make pages eligible for BFCache
- [chromeenterprise.google](https://chromeenterprise.google/policies/allow-back-forward-cache-for-cache-control-no-store-page-enabled) *(chromeenterprise.google)*
  > \*\*Core Takeaways:\*\* Both Chrome Enterprise and Microsoft Edge policy guides document \`BackForwardCacheForWebSocketsAllowed\`

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16331.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry 'Gilberto Cocchi' via blin...
- [Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/52nlr8z3Png) *(groups.google.com · 2026-04-17T00:00:00)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing...
- [\[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16328.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12349`)*
  > \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Chromestatus Fri, 17 Apr 2026 03:1...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) *(developer.mozilla.org)*
- [github.com](https://github.com/whatwg/html/issues/12085) *(github.com)*
- [Disconnect WebSockets on BFCache entry · Issue #1262 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1262) *(github.com)*
- [Disconnect WebSockets on BFCache entry · Issue #40 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/40) *(github.com)*
- [Updating the WebSockets guide · mdn · Discussion #817](https://github.com/orgs/mdn/discussions/817) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (54 found across 11 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (3 found, 0 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 4

---

<a id="5663304168112128-webgpu-wgsl-fragment-depth"></a>
### [WebGPU: WGSL Fragment Depth](https://chromestatus.com/feature/5663304168112128)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5663304168112128](https://chromestatus.com/feature/5663304168112128) · [chromestatuslite.com/feature/5663304168112128](https://chromestatuslite.com/feature/5663304168112128)
- **Specification:** [https://github.com/gpuweb/gpuweb/pull/6299](https://github.com/gpuweb/gpuweb/pull/6299)
- **Chromium Bug:** [https://crbug.com/457993779](https://crbug.com/457993779)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `Positive`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/webgpu) (Chrome: `144`, Firefox: `—`, Safari: `26`) · *group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

#### 📝 Overview

Adds the ability to provide a \`less\` or \`greater\` modifier to the \`@builtin(frag\_depth)\` in WGSL.  The current \`@builtin(frag\_depth)\` can potentially introduce a performance penalty due to disabling the early-Z optimizations on a draw call. The new modifiers allow the explicit setting of the buffer mode and allow the early-Z optimizations to be applied.

> **Motivation:** In the current WGSL specification, the mere act of writing to @builtin(frag\_depth) often incurs a significant performance penalty because driver heuristics cannot guarantee that the fragment shader output will adhere to the depth written by the rasterizer's interpolated depth. Consequently, writing to frag\_depth typically forces the GPU to disable ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 210 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The WGSL Fragment Depth extension integrates \`less\` and \`greater\` depth-mode modifiers into \`@builtin(frag\_depth)\`, preventing fragment shaders from forfeiting critical hardware early-Z optimizations during depth output. Standardized and merged upstream by the W3C GPU for the Web Working Group, the feature enabled by default in Chromium and Microsoft Edge 156. It provides a standardized WebGPU abstraction for conservative depth semantics found natively in Direct3D HLSL, Metal, and Vulkan.

**Key Recommendations & Takeaways:**
- Actionable Advice: WebGPU developers should treat the feature as a progressive performance enhancement by querying \`navigator.gpu.wgslLanguageFeatures.has('fragment\_depth')\` and including \`requires fragment\_depth;\` in shader modules. Teams should continue providing fallback shader variants using standard \`@builtin(frag\_depth)\` to preserve compatibility across engines where the language extension is not yet exposed.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [fragment\_depth - WGSL language feature availability (1%) - webgpu.report](https://webgpu.report/features/wgsl:fragment_depth) *(webgpu.report)*
  > fragment\_depth - WGSL language feature availability (1%) - webgpu.report webgpu .report fragment\_depth WGSL language feature Specification: WGSL § fragment\_depth Availability now 1% last 30 days, n = 224 Year over year —...
- [What's New in WebGPU (Chrome 155-156) \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-webgpu-155-156) *(developer.chrome.com)*
  > What&#39;s New in WebGPU (Chrome 155-156) \| Blog \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkç...
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Chrome’s developer post highlights the addition of the \`fragment\_depth\` WGSL extension
- [microsoft.com](https://learn.microsoft.com/th-th/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com)*
  > \*\*Microsoft Edge Platform Release Notes:\*\* Edge 156 similarly announced support for the \`less\` and \`greater\` depth modifiers, aligning Chromium-based browser capabilities
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17296.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'Ashley Gullen' via blink-dev Wed, 26 Aug 2026 01:02:4...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 T...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17296.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'Ashley Gullen' via blink-dev Wed, 26 Aug 2026 01:02:4...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 T...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 O...
- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails \[email&#16...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/6299`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /...

#### 📚 Platform Documentation & References

- [WGSL Proposal for fragment depth (less, greater, any) · Issue #5342 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5342) *(github.com)*
- [w3.org](https://www.w3.org/TR/WGSL) *(w3.org)*
- [feat(graphics): adopt WGSL fragment\_depth once every WebGPU browser ships it · Issue #9703 · playcanvas/engine](https://github.com/playcanvas/engine/issues/9703) *(github.com)*
- [\[WGSL fragment depth\] (less, greater, any) Metal behavior · Issue #5351 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5351) *(github.com)*
- [\[WGSL fragment depth\] (less, greater, any) portability · Issue #5349 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5349) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)

#### 🌐 Web-features Group Context

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- **Chrome usage:** 0.093% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (46 found across 12 planned queries, 18 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "webgpu", shared with 44 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webgpu": no stable pass rate for Chrome yet)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5180947573112832-webtransport-congestion-control"></a>
### [WebTransport congestion control](https://chromestatus.com/feature/5180947573112832)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5180947573112832](https://chromestatus.com/feature/5180947573112832) · [chromestatuslite.com/feature/5180947573112832](https://chromestatuslite.com/feature/5180947573112832)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransportoptions-congestioncontrol](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-congestioncontrol)
- **Chromium Bug:** [https://issues.chromium.org/issues/501268547](https://issues.chromium.org/issues/501268547)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Neutral` · Safari: `Neutral`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

#### 📝 Overview

Adds the congestionControl constructor option and read-only attribute to WebTransport. Applications can request "default", "throughput", or "low-latency" behavior, allowing the user agent to select suitable congestion-control behavior for each session.

> **Motivation:** WebTransport applications have different performance requirements. Interactive applications prioritize low latency, while bulk transfers prioritize throughput. This hint lets applications express that preference without selecting or controlling a specific congestion-control algorithm.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 210 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"site github com mozilla standards-positions WebTransport congestion control"`, `"site github com WebKit standards-positions WebTransport congestion control"`, `"WebTransport congestionControl option attribute"`, `"WebTransport congestion control Chrome"`
- **Analysis:** WebTransport congestion control introduces a standardized constructor option and read-only attribute allowing applications to hint whether sessions should prioritize 'low-latency' or 'throughput' over browser defaults. Chromium has led implementation and shipping with comprehensive unit and Web Platform Test coverage, while formal position requests remain open in Gecko and WebKit. Developer and networking working groups welcome the advisory hint design because it avoids rigid algorithm locking while letting real-time media and gaming workloads avoid latency-inducing bufferbloat.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams deploying WebTransport for interactive or bulk transfers can safely specify 'low-latency' or 'throughput' today as progressive enhancements without risk of runtime breakage. Inspect the session's 'congestionControl' instance attribute after initialization to verify whether the client honored the preference or fell back to system defaults.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @larseggert: "CC @jesup @omansfeld @mxinden..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **17 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [WebTransport congestion control option and attribute](https://github.com/WebKit/standards-positions/issues/734) [open] 
- **Mozilla:** [WebTransport congestion control option and attribute](https://github.com/mozilla/standards-positions/issues/1472) [open] 
  > *Latest discussion from @larseggert: "CC @jesup @omansfeld @mxinden..."*

#### 📰 Ecosystem Blogs & Articles

- [minutes-115-webtrans-202211101300-00](https://datatracker.ietf.org/meeting/115/materials/minutes-115-webtrans-202211101300-00) *(datatracker.ietf.org)*
  > congestionControl\` lets the application inspect whether the user agent honored the requested preference or fell back to default behavior \*\*Coverage\*\*: IETF WebTransport Working Group proceedings (e.g., IETF 115) and W3C ...
- [google.com](https://issuetracker.google.com/501268547) *(issuetracker.google.com)*
  > congestionControl\` lets the application inspect whether the user agent honored the requested preference or fell back to default behavior \*\*Coverage\*\*: Chromium issue tracker entries (e.g., Issue 501268547) and Blink comm...
- [appspot.com](https://polymer10-dot-cr-status.appspot.com/feature/5180947573112832) *(polymer10-dot-cr-status.appspot.com)*
  > \*\*Coverage\*\*: Chrome Platform Status feature tracking and release notes for Chrome's Blink shipping milestone
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17748.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Mike Taylor Thu, 15 Oct 2026 10:13:09 -0700 On 10/14/2...
- [\[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17735.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport congestion control Chromestatus Wed, 14 Oct 2026 22:53:52 -0700 Contact emails \[e...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17790.html) *(mail-archive.com)*
  > The shared WPT passes in all three engines, but &gt;&gt;&gt;&gt;&gt; it &gt;&gt;&gt;&gt;&gt; intentionally permits fallback to &quot;default&quot; and therefore tests API &gt;&gt;&gt;&gt;&gt; interoperability rather than...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17748.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Mike Taylor Thu, 15 Oct 2026 10:13:09 -0700 On 10/14/2...
- [\[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17735.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport congestion control Chromestatus Wed, 14 Oct 2026 22:53:52 -0700 Contact emails \[e...
- [WebTransport congestion control option and attribute · Issue #734 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/734) *(github.com · 2026-10-21T17:43:58)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > WebTransport congestion control option and attribute · Issue #734 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed ...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/WebTransport) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/congestionControl) *(developer.mozilla.org)*
- [WebTransport/Meetings - W3C Wiki](https://www.w3.org/wiki/WebTransport/Meetings) *(w3.org)*
- [Pluggable Congestion Control · Issue #365 · w3c/webtransport](https://github.com/w3c/webtransport/issues/365) *(github.com)*
- [WebTransport congestion control option and attribute · Issue #734 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/734) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 42.3% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 70.1% · Safari 73%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (72 found across 12 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 2 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 17 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 42.3% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

---

<a id="6427766428925952-webtransport-draining"></a>
### [WebTransport draining](https://chromestatus.com/feature/6427766428925952)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6427766428925952](https://chromestatus.com/feature/6427766428925952) · [chromestatuslite.com/feature/6427766428925952](https://chromestatuslite.com/feature/6427766428925952)
- **Specification:** [https://w3c.github.io/webtransport/#dom-webtransport-draining](https://w3c.github.io/webtransport/#dom-webtransport-draining)
- **Chromium Bug:** [https://issues.chromium.org/issues/564353368](https://issues.chromium.org/issues/564353368)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

#### 📝 Overview

WebTransport.draining is a promise that resolves when the server indicates that the WebTransport session will be gracefully retired. Applications can use this signal to establish a replacement session while existing streams and the current session remain usable.

> **Motivation:** A WebTransport server may need to retire a session for maintenance, load balancing, deployment, or connection-lifetime management. Without a draining signal, an application learns about this only when the session closes, which can cause an avoidable interruption while a replacement connection is established. The draining promise gives the applicati...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 210 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""webtransport" "draining" chromestatus OR "chrome 158" OR "chrome""`, `""WebTransport" "draining" W3C"`, `""draining" "WebTransport" mozilla webkit"`
- **Analysis:** WebTransport draining resolves a critical operational gap in real-time web applications by exposing a promise that signals server-side graceful session retirement before termination. Engine consensus is fully unified across the board, with implementations shipping across Chromium (Chrome 158), Mozilla Firefox (Firefox 155), and Apple Safari (Safari 26.4). Developers building persistent, low-latency connections regard it as a major quality-of-life feature that enables zero-downtime rolling deploys and seamless connection migration.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams running WebTransport in production should immediately implement progressive enhancement by checking for \`'draining' in transport\` and awaiting the promise to warm up standby connections while existing streams conclude. Because missing support merely falls back to closing the session on termination, adopting this signal carries no architectural downsides for legacy clients.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *In developer trial (Behind a flag)* to *Enabled by default*
- 📰 **12 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2007162: neqo support for Draining for WebTransport](https://bugzilla.mozilla.org/show_bug.cgi?id=2007162) `[NEW]`
- **Mozilla (Gecko):** [Bug #2060688: New wpt failures in /webtransport/ \[draining.https.any.sharedworker.html, draining.https.any.worker.html, draining.https.any.serviceworker.html, and 1 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2060688) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img680-dot-cr-status.appspot.com/feature/6427766428925952) *(img680-dot-cr-status.appspot.com)*
  > draining\` is a read-only attribute that returns a \`Promise\` which resolves when the server indicates that the WebTransport session will be gracefully retired In cloud architectures, real-time servers regularly retire con...
- [appspot.com](https://cr-status.appspot.com/feature/6427766428925952) *(cr-status.appspot.com)*
  > \*\*Interoperability & Compatibility:\*\* Chrome Status notes that the compatibility risk is minimal because \`draining\` is a purely additive promise property It does not modify existing stream semantics or close the session ...
- [How to use WebTransport \| Capabilities \| Chrome for Developers](https://developer.chrome.com/docs/capabilities/web-apis/webtransport) *(developer.chrome.com)*
  > \*\*Ecosystem Reaction:\*\* Developers running stateful real-time infrastructures (such as game netcodes, WebRTC-adjacent media relays, and high-frequency messaging) have strongly welcomed this signal
- [callsphere.ai](https://callsphere.ai/blog/agentic-ai-webrtc-real-time-voice-interfaces-development) *(callsphere.ai)*
  > \*\*Ecosystem Reaction:\*\* Developers running stateful real-time infrastructures (such as game netcodes, WebRTC-adjacent media relays, and high-frequency messaging) have strongly welcomed this signal It removes the need for...
- [Re: \[blink-dev\] Intent to Ship: WebTransport draining](http://www.mail-archive.com/blink-dev@chromium.org/msg17761.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport draining Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport draining Mike Taylor Thu, 15 Oct 2026 17:47:21 -0700 LGTM1 On 10/15/26 5:49 p.m., C...
- [\[blink-dev\] Intent to Ship: WebTransport draining](http://www.mail-archive.com/blink-dev@chromium.org/msg17754.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport draining Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport draining Chromestatus Thu, 15 Oct 2026 14:50:06 -0700 Contact emails \[email&#160;protected\]...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: WebTransport draining](http://www.mail-archive.com/blink-dev@chromium.org/msg17761.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6427766428925952`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport draining Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport draining Mike Taylor Thu, 15 Oct 2026 17:47:21 -0700 LGTM1 On 10/15/26 5:49 p.m., C...
- [\[blink-dev\] Intent to Ship: WebTransport draining](http://www.mail-archive.com/blink-dev@chromium.org/msg17754.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6427766428925952`)*
  > \[blink-dev\] Intent to Ship: WebTransport draining Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport draining Chromestatus Thu, 15 Oct 2026 14:50:06 -0700 Contact emails \[email&#160;protected\]...

#### 📚 Platform Documentation & References

- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [WebTransport API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/155) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/webtransport) *(w3.org)*
- [github.com](https://github.com/ietf-wg-webtrans/draft-ietf-webtrans-http3/issues/167) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 42.3% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 70.1% · Safari 73%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (61 found across 13 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 9 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (1 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (3 found, 2 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 17 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 42.3% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5161589557821440-indexeddb-sqlite-backend"></a>
### [IndexedDB: SQLite backend](https://chromestatus.com/feature/5161589557821440)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5161589557821440](https://chromestatus.com/feature/5161589557821440) · [chromestatuslite.com/feature/5161589557821440](https://chromestatuslite.com/feature/5161589557821440)
- **Specification:** [https://www.w3.org/TR/IndexedDB](https://www.w3.org/TR/IndexedDB)
- **Chromium Bug:** [https://issues.chromium.org/issues/498644996](https://issues.chromium.org/issues/498644996)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/indexeddb) (Chrome: `58`, Firefox: `51`, Safari: `15`) · *group-level data: web-features [`indexeddb`](https://webstatus.dev/features/indexeddb), shared with 16 other ChromeStatus features*

#### 📝 Overview

Chromium's IndexedDB implementation is rewritten on top of SQLite, to replace the previous implementation that uses a hybrid of LevelDB and flat files. There is no change to the Web API.  This is expected to improve reliability and, to a lesser extent, performance.  For now this is applied to \*new data stores\*. This is step 2 of a multi-phase rollout. See https://chromestatus.com/feature/5126896685809664 which tracks step 1, the rollout for in-memory i.e. incognito contexts. Step 3 will consist of migrating existing data from LevelDB stores to SQLite stores.  In this step, the first time a user visits a site, or after clearing site data, new IDB data will be stored in a backend that makes use of SQLite, but existing data stored in LevelDB is unimpacted.  See Documentation link below for a list of differences to be aware of.

> **Motivation:** Chromium's IndexedDB implementation suffers from poor reliability and maintainability because it is highly dependent on a database engine (LevelDB) that is not maintained or supported, or as featureful as a full RDBMS. Many sophisticated web apps report high rates of missing or corrupt data, and bugs in the aging backend are hard to find and fix. S...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 201 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** Chromium is overhauling its internal IndexedDB storage architecture, transitioning from a legacy, unmaintained LevelDB and flat-file hybrid engine to SQLite to address persistent corruption and write-reliability bugs. Shipped by default for new persistent data stores in Chrome 156 as part of a phased rollout, the change involves no public Web API modifications and brings Chromium into architectural alignment with Safari and Firefox.

**Key Recommendations & Takeaways:**
- Actionable Advice: No code changes or polyfills are required since the JavaScript API is intact, but offline-first teams should enforce strict transaction boundaries and audit asynchronous write completions rather than relying on legacy Chromium scheduling quirks. Teams should also tag client-side storage error telemetry by browser version to catch any unexpected regressions before existing databases are migrated in Phase 3.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Chrome IndexedDB: SQLite back end" (4 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Chrome IndexedDB: SQLite back end](https://news.ycombinator.com/item?id=48118595) — *Hacker News (4 pts, 0 comments)*

#### 📰 Ecosystem Blogs & Articles

- [Chrome 156 Moves IndexedDB to SQLite: What Changes for Your Offline-First App \| Trade Assistance LLC](https://trade-assistance.com/blog/indexeddb-sqlite-backend-chrome-156) *(trade-assistance.com)*
  > \*\*Phase 1:\*\* In-memory / Incognito contexts (shipped in Chrome 144–145) \*\*Sources:\*\* Developer analysis pieces (e.g., \*Trade Assistance\*, \*DigitBin: "Chrome 156 Moves IndexedDB to SQLite: What Changes for Your Offline-Fi...
- [appspot.com](https://img680-dot-cr-status.appspot.com/feature/5126896685809664) *(img680-dot-cr-status.appspot.com)*
  > \*\*Phase 1:\*\* In-memory / Incognito contexts (shipped in Chrome 144–145) \*\*Sources:\*\* \*Chrome Platform Status\* & \*Blink-dev Announcement\* (Evan Stade & Abhishek Shanthkumar, Microsoft/Chromium)
- [windowsforum.com](https://windowsforum.com/news/chrome-156-uses-sqlite-for-new-indexeddb-stores-windows-update-and-testing-guide.449458) *(windowsforum.com)*
  > \*\*Phase 2 (Current – Chrome 156):\*\* New persistent data stores created on first-time visits or after clearing site storage While SQLite may offer slight throughput improvements in certain patterns, the primary goal is cr...
- [Chrome 156 Moves IndexedDB to SQLite: What Changes](https://www.digitbin.com/chrome-156-indexeddb-sqlite) *(digitbin.com)*
  > \*\*Phase 3:\*\* Automated migration of existing LevelDB disk stores to SQLite (deferred to mitigate data-loss risks during the transition) \*\*Sources:\*\* Developer analysis pieces (e.g., \*Trade Assistance\*, \*DigitBin: "Chrome...
- [ycombinator.com](https://news.ycombinator.com/item?id=45067339) *(news.ycombinator.com)*
  > With Chromium’s engine rewrite, Chromium joins \*\*Firefox (Gecko)\*\* and \*\*Safari (WebKit)\*\*, both of which already run IndexedDB on top of SQLite under the hood
- [Web-Facing Change PSA: IndexedDB: SQLite backend](https://groups.google.com/a/chromium.org/g/blink-dev/c/jS0khnC5IWA) *(groups.google.com · 2026-04-24T00:00:00)*
  > Web-Facing Change PSA: IndexedDB: SQLite backend Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: ...

#### 🔗 Inbound Citations & Reverse Links

- [Web-Facing Change PSA: IndexedDB: SQLite backend](https://groups.google.com/a/chromium.org/g/blink-dev/c/jS0khnC5IWA) *(groups.google.com · 2026-04-24T00:00:00)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > Web-Facing Change PSA: IndexedDB: SQLite backend Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: ...
- [\[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16359.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend 'Evan Stade' via blink-dev Fri, 24 Apr 2026 12:03:06 -0700 C...
- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com · 2026-09-28T08:15:45)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or ...
- [Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16371.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend 'Evan Stade' via blink...
- [Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16362.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Daniel Herr Sat, 25 Apr 2026 00:10:41 -0700 So we ki...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/MicrosoftEdge/WebView2Feedback/discussions/5754) *(github.com)*
- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com)*
- [Termius import: read Chromium's SQLite IndexedDB backend · Issue #449 · VoltiusApp/voltius](https://github.com/VoltiusApp/voltius/issues/449) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [IndexedDB: SQLite backend Demo](https://evanstade.github.io/web-storage-demos/idb-txn-scopes)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `indexeddb` on [wpt.fyi](https://wpt.fyi/results?q=feature:indexeddb) (via webstatus.dev) — stable: Chrome 99.5% · Edge 99.5% · Firefox 98.9% · Safari 95.8%; experimental: Chrome 99.5% · Edge 99.5% · Firefox 98.9% · Safari 99.5%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (71 found across 12 planned queries, 14 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 1 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "indexeddb", shared with 16 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "indexeddb": Chrome 99.5% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5109912169480192-webtransport-receive-stream"></a>
### [WebTransport receive stream](https://chromestatus.com/feature/5109912169480192)

- **Milestone:** Chrome 158 (Enabled by default) · first listed in Chrome 155
- **ChromeStatus:** [chromestatus.com/feature/5109912169480192](https://chromestatus.com/feature/5109912169480192) · [chromestatuslite.com/feature/5109912169480192](https://chromestatuslite.com/feature/5109912169480192)
- **Specification:** [https://w3c.github.io/webtransport/#webtransportreceivestream](https://w3c.github.io/webtransport/#webtransportreceivestream)
- **Chromium Bug:** [https://issues.chromium.org/issues/568317222](https://issues.chromium.org/issues/568317222)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Under consideration` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

#### 📝 Overview

Adds the standardized WebTransportReceiveStream interface, a ReadableStream subclass used for incoming unidirectional streams and the readable side of bidirectional streams. Its getStats() method returns per-stream byte counters: bytesReceived reports bytes received from the network, while bytesRead reports bytes delivered to the application.

> **Motivation:** Incoming WebTransport streams have historically been exposed as generic ReadableStream objects in Chromium. The WebTransport specification defines a dedicated WebTransportReceiveStream subclass with stream-specific statistics.  Applications that receive large or latency-sensitive streams need to distinguish bytes received by the browser from bytes ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 200 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"WebTransportReceiveStream"`, `"WebTransport receive stream getStats chrome"`
- **Analysis:** The WebTransportReceiveStream interface formalizes incoming WebTransport streams as a dedicated ReadableStream subclass equipped with a getStats() method to monitor network reception against application consumption. Shipped by default in Chromium as an engine catch-up effort led by Microsoft contributors, it replaces generic ReadableStream instances with the standardized type defined in the W3C WebTransport specification. This upgrade solidifies cross-engine consensus, providing essential stream-level telemetry for diagnosing consumer lag and managing backpressure.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams deploying WebTransport should adopt feature detection for stream.getStats() using progressive enhancement to monitor unread buffer volume without risking compatibility on older browser releases. Because the interface subclasses ReadableStream, existing BYOB and default reader loops continue to operate unchanged while gaining access to granular performance diagnostics.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *In developer trial (Behind a flag)* to *Enabled by default*
- 📰 **9 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2058634: \[wpt-sync\] Sync PR 61577 - Test https://w3c.github.io/webtransport/#webtransportreceivestream-pull-bytes](https://bugzilla.mozilla.org/show_bug.cgi?id=2058634) `[NEW]`
- **Mozilla (Gecko):** [Bug #2078342: A pending read() on a WebTransportReceiveStream rejects with a TypeError instead of a WebTransportError after the peer sends RESET\_STREAM](https://bugzilla.mozilla.org/show_bug.cgi?id=2078342) `[NEW]`
- **Mozilla (Gecko):** [Bug #2082841: \[wpt-sync\] Sync PR 63745 - WebTransport: wpt test for WebTransportReceiveStream](https://bugzilla.mozilla.org/show_bug.cgi?id=2082841) `[NEW]`
- **Mozilla (Gecko):** [Bug #2082932: New wpt failures in /webtransport/ \[receive-stream-stats.https.any.worker.html, receive-stream-stats.https.any.serviceworker.html, receive-stream-stats.https.any.html, and 1 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2082932) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://2020-01-23-dot-cr-status.appspot.com/feature/5109912169480192) *(2020-01-23-dot-cr-status.appspot.com)*
  > The \*\*\`WebTransportReceiveStream\`\*\* interface is a standardized web platform feature that subclasses \`ReadableStream\` readable\`)
- [wpt.fyi](https://wpt.fyi/results/webtransport/receive-stream-pull.https.any.serviceworker.html?run_id=5103588010622976&run_id=5146139644133376&diff=) *(wpt.fyi)*
  > \*\*Interop & Microsoft Contribution:\*\* Led by Microsoft contributors (\`vbryhider@microsoft.com\`) as part of broader WebTransport and Interop initiatives, bringing Chromium up to speed with Safari/WebKit and Firefox
- [appspot.com](https://2020-01-23-dot-cr-status.appspot.com/feature/5109912169480192/activity) *(2020-01-23-dot-cr-status.appspot.com)*
  > \*\*Potential Breaking Change:\*\* The Chromium announcement noted that while the stream remains fully readable and backwards-compatible with \`instanceof ReadableStream\`, its concrete JavaScript prototype changes constructor...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Complementary WebTransport Capabilities:\*\* The introduction of receive-stream statistics arrived alongside related WebTransport primitives—such as \`anticipatedConcurrentStreams\`, session \`draining\`, send groups/stream ...
- [\[blink-dev\] Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17842.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport receive stream Chromestatus Wed, 21 Oct 2026 18:31:31 -0700 Contact emails \[email&#16...
- [Platform - Web documentation \| Deno Docs](https://docs.deno.com/api/web/platform) *(docs.deno.com)*
  > #getStats(): Promise&lt;WebTransportReceiveStreamStats&gt; MDN Reference · The constructor object for WebTransportReceiveStream. Instances are obtained from a WebTransport session rather than constructed directly. #proto...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17842.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109912169480192`)*
  > \[blink-dev\] Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport receive stream Chromestatus Wed, 21 Oct 2026 18:31:31 -0700 Contact emails \[email&#16...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/incomingUnidirectionalStreams) *(developer.mozilla.org)*
- [WebTransportReceiveStream: getStats() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream/getStats) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/webtransport) *(w3.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransportreceivestream/getstats/index.md?plain=1) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 42.3% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 70.1% · Safari 73%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 13 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 10 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (9 found, 4 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 17 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 42.3% passing (stable))* · `Sources cited by the AI synthesis` (3 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 0

---

<a id="6366274495053824-remove-fencedframe-element-and-windowfence-apis"></a>
### [Remove FencedFrame element and window.fence APIs](https://chromestatus.com/feature/6366274495053824)

- **Milestone:** Chrome 156 (Deprecated)
- **ChromeStatus:** [chromestatus.com/feature/6366274495053824](https://chromestatus.com/feature/6366274495053824) · [chromestatuslite.com/feature/6366274495053824](https://chromestatuslite.com/feature/6366274495053824)
- **Specification:** [https://wicg.github.io/fenced-frame](https://wicg.github.io/fenced-frame)
- **Chromium Bug:** [https://issues.chromium.org/538634423](https://issues.chromium.org/538634423)
- **Browser Signals:** Chrome: `Deprecated` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Fenced frames are nested frames that embed content onto a page without the ability to share data between the fenced frame and its embedder.   window.fence APIs include Fenced frames Ads reporting (FFAR) JS APIs that were created for privacy-safe ads reporting from FFs created using Protected Audience and SelectURL and getNestedConfigs() to support PA component ads.   This intent is for removing both of these. Fenced frames element removal will be two step as detailed below.  With the removal (or stub API replacement) of PA and selectURL, FFs can no longer be navigated and thus it is safe to remove them. Fenced frames are only able to be navigated using the urn:uuid in a FencedFrameConfig\[1\], which can only be created using the return values from runAdAuction and selectURL. These APIs are being deprecated and removed in M152 as per the following Intent threads: Protected Audience\[2\], Shared Storage\[3\].   Plan: Given that the fenced frames element can no longer be navigated, we propose removing the element from the code in the following phases:  1. M156: Keep the fenced frame element and its associated IDL dependencies as stubs. This is to ensure no JS call throws, e.g.calling fenced-frame-element.config.setSharedStorageContext().   2. M156: In the same milestone we will also stub the window.fence APIs completely. Since there is no FF document navigation, these APIs cannot be invoked anymore, so it will be a no-op.  3. M157 Canary/Beta: Begin a controlled rollout of the stub FF HTML element removal via a field trial. Note that removing the element will resolve it to HTMLUnknownElement.   At this point we are requesting approvals for all of the above steps.  4. M157 Stable: Assuming there are no regressions or breakage after reaching 1% stable, we will request additional approval for full removal of the FF element.   \[1\]https://source.chromium.org/chromium/chromium/src/+/main:third\_party/blink/renderer/core/html/fenced\_frame/fenced\_frame\_config.idl \[2\]https://groups.google.com/a/chromium.org/g/blink-dev/c/k\_nubsMb97g/m/awPD4IGLBAAJ \[3\]https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc/m/WFTFnhyJBAAJ

> **Motivation:** As described in the summary section, since fenced frames are no longer able to be navigated to a document, once PA and selectURL are removed, we should also remove FFs API for code health and to remove unused APIs from the web platform.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 190 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""fencedframe" deprecation blink-dev "window.fence""`, `""Remove FencedFrame element and window.fence APIs" blink-dev"`
- **Analysis:** Chromium is formally deprecating and removing the &lt;fencedframe&gt; element and window.fence APIs across Chrome 156 and Chrome 157, following the earlier retirement of its sole navigation sources in Protected Audience and Shared Storage selectURL. The primitive never gained cross-engine traction or Baseline status, leaving it as an unnavigable, Chromium-only artifact. With zero successful navigations remaining on the web, its removal strips out substantial bespoke browsing-context infrastructure in favor of engine code health.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit frontend templates and ad delivery pipelines to replace any remaining &lt;fencedframe&gt; tags with standard &lt;iframe&gt; elements, avoiding reliance on window.HTMLFencedFrameElement feature detection during the phased stub rollout. Web teams must also verify that explicit CSS dimensions are set on affected embedding containers to prevent visual layout shifts when unstyled tags collapse to zero dimensions in Chrome 157.
- Marked for deprecation in Chrome 156. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [cevdet.ch](https://deadhead.cevdet.ch/rules/element/fencedframe) *(deadhead.cevdet.ch)*
  > Chromium logs deprecation warnings in DevTools fence APIs\](https://chromestatus.com/)
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17145.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Shivani Sharma Tue, ...
- [\[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17144.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs Chromestatus Tue, 11 Aug 202...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17248.html) *(mail-archive.com)*
  > These APIs are being deprecated and removed in M152 as per the following Intent threads: Protected Audience\[2\], Shared Storage\[3\]. Plan: Given that the fenced frames element can no longer be navigated, we propose removin...
- [Fenced frames overview \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/relevance/fenced-frame) *(developers.google.com · 2026-08-14T00:00:00)*
  > Once you have obtained the config, you can assign it to a fenced frame&#x27;s config attribute to navigate the frame to the resource represented by the config. Earlier versions of Chrome don&#x27;t support the resolveToC...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com · 2026-10-20T08:23:54)*
  > &lt;strong&gt;These APIs are being deprecated and removed in M152&lt;/strong&gt; as per the following Intent threads: Protected Audience\[2\], Shared Storage\[3\]. Plan: Given that the fenced frames element can no longer be navigated, w...

#### 📚 Platform Documentation & References

- [Remove FencedFrame element and window.fence APIs · Issue #30 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/30) *(github.com)*
- [\[rule\] element/fencedframe · Issue #110 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/110) *(github.com)*
- [\[rule\] element/fencedframe · Issue #431 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/431) *(github.com)*
- [Fenced Frame API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fenced_frame_API) *(developer.mozilla.org)*
- [Window: fence property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/fence) *(developer.mozilla.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 12 planned queries, 18 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 1 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (2 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="4895435813683200-compression-dictionary-transport-updates"></a>
### [Compression dictionary transport Updates](https://chromestatus.com/feature/4895435813683200)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/4895435813683200](https://chromestatus.com/feature/4895435813683200) · [chromestatuslite.com/feature/4895435813683200](https://chromestatuslite.com/feature/4895435813683200)
- **Specification:** [https://github.com/whatwg/html/pull/11620](https://github.com/whatwg/html/pull/11620)
- **Chromium Bug:** [https://issues.chromium.org/issues/40255884](https://issues.chromium.org/issues/40255884)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/compression-dictionary-transport) (Chrome: `130`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`compression-dictionary-transport`](https://webstatus.dev/features/compression-dictionary-transport), shared with 3 other ChromeStatus features*

#### 📝 Overview

When fetching rel=compression-dictionary links:  - Use "compression-dictionary" as request destination. - Properly set request's mode, credentials, referrer and referrerpolicy. - Take into account crossorigin and referrer attributes form &lt;link rel="compression-dictionary"&gt;.

> **Motivation:** Compression Dictionary Transport was shipped in Chromium 130. Recently Mozilla and Igalia worked on some implementation in Firefox and WebKit, quite a bunch of tests have been added and the spec has been updated. This intent to ship is to catch up with the latest changes.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 180 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Analysis:** Compression Dictionary Transport originally landed in Chromium 130, and these subsequent updates align Chromium with refined WHATWG HTML and Fetch specifications hammered out during ongoing implementation work by Mozilla and Igalia. The updates establish a dedicated 'compression-dictionary' fetch destination while properly honoring element-level crossorigin and referrerpolicy attributes. Cross-engine consensus is strong, turning shared dictionary transport from a Chromium-first prototype into a robust, interoperable web standard.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt compression dictionary transport as a progressive enhancement, as non-supporting clients gracefully fall back to standard Brotli or gzip compression. When specifying dictionaries via link elements or HTTP headers, ensure proper CORS headers and Content Security Policy directives (specifically connect-src) are in place to align with the standardized destination model.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://cr-status.appspot.com/feature/4895435813683200?gate=6090572807929856) *(cr-status.appspot.com)*
  > Chrome Platform Status
- [cloudflare.com](https://blog.cloudflare.com/shared-dictionaries) *(blog.cloudflare.com)*
  > After Chromium introduced initial support in Chrome 130, cross-engine development led by Mozilla and Igalia (for Firefox and WebKit) identified edge-case differences in how dictionary resources were loaded \*\*Cloudflare B...
- [perfplanet.com](https://calendar.perfplanet.com/2024/getting-real-small-with-compression-dictionaries) *(calendar.perfplanet.com)*
  > \*\*Dedicated Request Destination (\`"compression-dictionary"\`):\*\* When \`&lt;link rel="compression-dictionary"&gt;\` (or HTTP \`Link: &lt;...&gt;; rel="compression-dictionary"\`) triggers a dictionary fetch, the request destination is exp...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17528.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 23 Sep 20...
- [\[blink-dev\] Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17496.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Fri, 18 Sep 2026 10:16:1...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17661.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Alex Russell Wed, 07 Oct 202...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17528.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4895435813683200`)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 23 Sep 20...
- [\[blink-dev\] Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17496.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4895435813683200`)*
  > \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Fri, 18 Sep 2026 10:16:1...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17661.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11620`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Alex Russell Wed, 07 Oct 202...

#### 📚 Platform Documentation & References

- [Compression Dictionary Transport - HTTP - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport) *(developer.mozilla.org)*
- [Update documentation for compression dictionary transport · Issue #875 · mdn/mdn](https://github.com/mdn/mdn/issues/875) *(github.com)*
- [Compression Dictionary Transport - Glossary - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Compression_dictionary_transport) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `compression-dictionary-transport` on [wpt.fyi](https://wpt.fyi/results?q=feature:compression-dictionary-transport) (webstatus.dev has no pass rates for it)

#### 🌐 Web-features Group Context

*group-level data: web-features [`compression-dictionary-transport`](https://webstatus.dev/features/compression-dictionary-transport), shared with 3 other ChromeStatus features*

- **Chrome usage:** 0.098% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/315))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (52 found across 11 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 5 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (1 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "compression-dictionary-transport", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "compression-dictionary-transport": no stable pass rate for Chrome yet)*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5152215540039680-css-corner-shorthand-properties-"></a>
### [CSS corner shorthand properties ](https://chromestatus.com/feature/5152215540039680)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5152215540039680](https://chromestatus.com/feature/5152215540039680) · [chromestatuslite.com/feature/5152215540039680](https://chromestatuslite.com/feature/5152215540039680)
- **Specification:** [https://drafts.csswg.org/css-borders-4/#corner-shaping](https://drafts.csswg.org/css-borders-4/#corner-shaping)
- **Chromium Bug:** [https://issues.chromium.org/issues/425897047](https://issues.chromium.org/issues/425897047)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `In development`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/corner-shape) (Chrome: `139`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`corner-shape`](https://webstatus.dev/features/corner-shape)*

#### 📝 Overview

Implements the CSS corner shorthand and per-corner sub-shorthands (corner-top-left, corner-top-right, corner-bottom-left, corner-bottom-right) as well as physical (corner-top, corner-bottom) and logical (corner-block-start, corner-block-end, etc.) edge  shorthands. These allow setting both border-radius and corner-shape for individual corners in a single declaration. Additionally, corners is retained as a compat alias for the corner shorthand.   sampler: https://static.januschka.com/i-425897047/  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7747994

> **Motivation:** Currently, setting both the radius and shape of a corner requires two separate declarations (border-radius and corner-shape). The CSSWG resolved ( https://github.com/w3c/csswg-drafts/issues/11623#issuecomment-2982179370  ) to add a corner shorthand that combines both properties, making it more ergonomic for authors to   style individual corners. Fo...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 180 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"w3c csswg drafts issue 11623 corner shorthand"`, `"css corner shorthand border radius corner shape"`, `"css corner shape squircle chrome webkit firefox"`
- **Analysis:** The CSS corner shorthand properties, enabled by default in Chrome 157, consolidate border radius and corner-shape values into unified declarations across physical, directional, and logical edge variants. This directly resolves the verbosity of having to declare independent radius and shape properties following the initial arrival of corner-shaping in Chromium 139. While the CSS Borders and Box Decorations Level 4 specification enjoys broad conceptual backing, the shorthand remains tied to the broader cross-engine rollout of corner-shaping.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt CSS corner shorthands purely as a progressive enhancement, always declaring standard border-radius properties first or testing with @supports rules. Critical production components requiring identical squircle curvature across all browsers should continue relying on fallback clip-paths until Safari and Firefox promote corner-shape features to stable releases.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @smfr: "We think that \`corner-shape\` will be useful to allow for bevel, and superellipse (aka squircle), but we believe that more complex corner shapes are be..."
- Standards Activity (Mozilla): Latest discussion from @dholbert: "&gt; @dholbert fwiw, I'm not so sure about it. \`corner-shape: angle\` messing with \`border-radius\` feels wrong somehow (even if it's the simplest way to s..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Corner-shape](https://github.com/WebKit/standards-positions/issues/229) [closed] `position: support`, `topic: css`, `venue: W3C CSS WG`
  > *Latest discussion from @smfr: "We think that \`corner-shape\` will be useful to allow for bevel, and superellipse (aka squircle), but we believe that more complex corner shapes are be..."*
- **Mozilla:** [CSS corner-shape](https://github.com/mozilla/standards-positions/issues/823) [closed] `venue: W3C`, `position: positive`, `topic: CSS`
  > *Latest discussion from @dholbert: "&gt; @dholbert fwiw, I'm not so sure about it. \`corner-shape: angle\` messing with \`border-radius\` feels wrong somehow (even if it's the simplest way to s..."*

#### 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > \*Example:\* \`corner: 20px squircle;\` card { corner: 20px squircle; }\` and detailing both the per-corner and edge-based logical property equivalents
- [web.dev](https://web.dev/blog/web-platform-09-2026?hl=en) *(web.dev)*
  > \*\*Implementation & Rollout:\*\* Promoted to the Blink engine under the \`--enable-blink-features=CSSCornersShorthand\` flag and scheduled across the Chrome 156 / Chrome 157 beta cycles
- [appspot.com](https://f896c59-dot-app-py3-dot-cr-status.appspot.com) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > \*\*Implementation & Rollout:\*\* Promoted to the Blink engine under the \`--enable-blink-features=CSSCornersShorthand\` flag and scheduled across the Chrome 156 / Chrome 157 beta cycles
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > Chrome's release notes emphasize the developer ergonomics of condensing verbose corner declarations into intuitive one-liners
- [googleusercontent.com](https://doc-4ieg-4ra0-issuetracker.googleusercontent.com/issues/550924692) *(doc-4ieg-4ra0-issuetracker.googleusercontent.com)*
  > MDN documentation covers \`corner-shape\`, \`&lt;corner-shape-value&gt;\`, and individual corner shape properties (\`corner-top-left-shape\`, \`corner-top-shape\`), with ongoing documentation updates integrating the new unified \`corne...
- [master.dev](https://blog.master.dev/background-patterns-with-css-corner-radius) *(blog.master.dev)*
  > These tutorials explain how the mathematical curves work (from negative values producing concave scoops to positive values yielding iOS-style squircles) and illustrate how the shorthand simplifies styling cards, badges, ...

#### 🔗 Inbound Citations & Reverse Links

- [CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1367) *(github.com · 2026-08-23T14:10:52)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with an...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17570.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties 'Dan Clark' via blink-dev Mon, 28 Sep 2026 16:...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17531.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Rick Byers Wed, 23 Sep 2026 08:12:55 -0700 Loo...
- [\[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17509.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 21 Sep 2026 11:46:37 -0700 This look...
- [\[blink-dev\] Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17493.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > \[blink-dev\] Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS corner shorthand properties Helmut Januschka Fri, 18 Sep 2026 06:34:29 -0700 \*Contact emai...

#### 📚 Platform Documentation & References

- [CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1367) *(github.com)*
- [\[css-borders-4\] corner-shape initial value ("round") is strange in some cases (e.g. bevel) · Issue #11623 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11623) *(github.com)*
- [\[css-borders-4\] Fix corner-shape \|\| border-radius order to match resolution in #11623 by kbabbitt · Pull Request #14607 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/pull/14607) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `corner-shape` on [wpt.fyi](https://wpt.fyi/results?q=feature:corner-shape) (via webstatus.dev) — stable: Chrome 81.8% · Edge 84.1% · Firefox 10.2% · Safari 8%; experimental: Chrome 88.6% · Edge 90.9% · Firefox 59.1% · Safari 68.2%

#### 🌐 Web-features Group Context

*group-level data: web-features [`corner-shape`](https://webstatus.dev/features/corner-shape)*

- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/229))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/823))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 12 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "corner-shape", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "corner-shape": Chrome 81.8% passing (stable))* · `Sources cited by the AI synthesis` (8 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 6

---

<a id="5657801797009408-connection-allowlists-embedded-enforcement"></a>
### [Connection Allowlists - Embedded Enforcement](https://chromestatus.com/feature/5657801797009408)

- **Milestone:** Chrome 157 (Origin trial)
- **ChromeStatus:** [chromestatus.com/feature/5657801797009408](https://chromestatus.com/feature/5657801797009408) · [chromestatuslite.com/feature/5657801797009408](https://chromestatuslite.com/feature/5657801797009408)
- **Specification:** [https://wicg.github.io/connection-allowlists/#issue-d96e905e](https://wicg.github.io/connection-allowlists/#issue-d96e905e)
- **Browser Signals:** Chrome: `Origin trial` · Firefox: `Positive` · Safari: `No signal`

#### 📝 Overview

Connection Allowlists (https://chromestatus.com/feature/5175745573945344) is a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or worker. This aspect of the feature extends Connection Allowlists to support embedded enforcement on iFrames and nested documents/workers. This allows the parent document to enforce restrictions on embedded content where they can choose to opt in or not load.  More details on the proposal can be found here: https://github.com/WICG/connection-allowlists

> **Motivation:** This change allows a path for embedded content with local sources such as srcdoc or data: URLS to have Connection Allowlist support. It also allows a parent document to set/enforce restrictions on nested content such as iframes or workers to ensure that they are at least as strict as the policies they in place. This helps ensure that embedded conte...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 170 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Connection Allowlists - Embedded Enforcement extends the browser-level network restriction primitive to nested contexts, allowing parent documents to declare network boundaries on iframes via the connectionallowlist attribute. Developed collaboratively by Microsoft and Google in the WICG and entering Chromium Origin Trials around milestone 157, it requires framed contexts to opt in with an equivalent or stricter policy to avoid being blocked. This fills a critical security gap in client-side data exfiltration defenses where untrusted code or generative AI execution previously could escape parent policies via subframes.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams building containment architectures should register for the Chromium Origin Trial to test parent-child handshakes and evaluate third-party frame compliance using report-only telemetry. Production applications must continue relying on Content Security Policy and iframe sandbox attributes as primary enforcement until cross-engine support matures.
- In active Origin Trial in Chrome 157. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @mikewest: "A brief update on timing: we're now planning an initial Origin Trial starting in Chrome 147 (https://groups.google.com/a/chromium.org/g/blink-dev/c/lR..."
- Standards Activity (Mozilla): Latest discussion from @evilpie: "Suggested position: positive  #1431..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Connection Allowlists](https://github.com/WebKit/standards-positions/issues/583) [open] 
  > *Latest discussion from @mikewest: "A brief update on timing: we're now planning an initial Origin Trial starting in Chrome 147 (https://groups.google.com/a/chromium.org/g/blink-dev/c/lR..."*
- **Mozilla:** [Connection Allowlists](https://github.com/mozilla/standards-positions/issues/1322) [closed] `position: positive`, `topic: HTTP`, `team: Networking`, `team: Security`
  > *Latest discussion from @evilpie: "Suggested position: positive  #1431..."*

#### 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://developer.microsoft.com/microsoft-edge/origin-trials/trials/b737b7cc-55f4-458c-ad11-5347f927c3e9) *(developer.microsoft.com)*
  > \*\*The Handshake:\*\* The parent specifies the network boundaries it requires for the embedded document \*\*Opt-in or Block:\*\* The embedded child context must explicitly opt in and return a \`Connection-Allowlist\` response hea...
- [Connection Allowlists: Chrome Rollout and Boundaries \| BotBrowser](https://botbrowser.io/en/blog/connection-allowlist-rollout-and-context-boundaries) *(botbrowser.io)*
  > \*\*Opt-in or Block:\*\* The embedded child context must explicitly opt in and return a \`Connection-Allowlist\` response header that is at least as restrictive as the parent’s requirement Examines policy boundaries between to...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > If the framed document doesn't deliver a matching header, its response is blocked."\*
- [centralcsp.com](https://centralcsp.com/en/docs/web-security/reporting-api/reports/connection-allowlist) *(centralcsp.com)*
  > Analyzes observability and reporting mechanics Highlights that embedded enforcement failures generate violation reports through the Reporting API (\`Connection-Allowlist-Report-Only\`), allowing security teams to audit thi...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17505.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement Alex Russell Mon, 21...
- [\[blink-dev\] Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17485.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Connection Allowlists Embedded Enforcement 'Giovanni Del Valle' via bli...

#### 🔗 Inbound Citations & Reverse Links

- [Connection Allowlists – Embedded Enforcement · Issue #44 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/44) *(github.com · 2026-10-12T08:23:19)* *(Cites: `https://chromestatus.com/feature/5657801797009408`)*
  > Connection Allowlists – Embedded Enforcement · Issue #44 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in w...
- [Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists](https://github.com/WICG/connection-allowlists/pull/41) *(github.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance set...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17505.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement Alex Russell Mon, 21...
- [\[blink-dev\] Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17485.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > \[blink-dev\] Intent to Experiment: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Connection Allowlists Embedded Enforcement 'Giovanni Del Valle' via bli...
- [\[blink-dev\] Intent to Prototype: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg16801.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > \[blink-dev\] Intent to Prototype: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Connection Allowlists Embedded Enforcement 'Brandon Maslen' via blink-dev...

#### 📚 Platform Documentation & References

- [Connection Allowlists · Issue #1424 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1424) *(github.com)*
- [github.com](https://github.com/WICG/connection-allowlists/issues/37) *(github.com)*
- [Connection Allowlists – Embedded Enforcement · Issue #44 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/44) *(github.com)*
- [Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists](https://github.com/WICG/connection-allowlists/pull/41) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (42 found across 12 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 6 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 6

---

<a id="6327898878377984-css-pseudo-class-for-navigation-source-element"></a>
### [CSS pseudo-class for navigation source element](https://chromestatus.com/feature/6327898878377984)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6327898878377984](https://chromestatus.com/feature/6327898878377984) · [chromestatuslite.com/feature/6327898878377984](https://chromestatuslite.com/feature/6327898878377984)
- **Specification:** [https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class](https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class)
- **Chromium Bug:** [https://issues.chromium.org/issues/530210946](https://issues.chromium.org/issues/530210946)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Selects the element that initiated the navigation, whether it's a link/button/form. The element stays selected throughout the navigation.

> **Motivation:** The main motivation for this comes from view transitions. This gives author a way to visually indicate a relationship between the navigation source (form/button) and the process of the navigation, e.g. expanding a thumbnail using an animation.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 161 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"site github com w3c csswg drafts navigation source"`, `"css navigation source pseudo class"`, `""CSS :navigation-source pseudo-class" mozilla standards positions"`
- **Analysis:** The \`:navigation-source\` pseudo-class (formerly drafted as \`:nav-source\` in CSS Navigation Matching Level 1) selects the interactive element—such as a link, button, or form—that triggered a navigation and keeps it matched throughout the transition lifecycle. Primarily motivated by cross-document View Transitions, it enables purely declarative styling and transition-scoping without brittle JavaScript click-interception. While Chromium has moved rapidly toward shipping it enabled by default, it remains an emerging standard without multi-engine interoperability.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams should treat \`:navigation-source\` as a progressive enhancement, gating rules behind \`@supports selector(:navigation-source)\` to enrich view transitions and loading feedback in supporting browsers. Avoid relying on it as a single source of truth for critical navigation states until Safari and Firefox implement the selector.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @noamr: "&gt; \[@noamr\](https://github.com/noamr) I guess the main use case is view-transitions, right? Doesn't seem particularly complicated I suppose  Right, but..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "What’s new in Chrome 156. CSS gains the random() function, the :navigation-source pseudo-class for the element that star" (1 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **4 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [What’s new in Chrome 156. CSS gains the random() function, the :navigation-source pseudo-class for the element that star](https://twitter.com/webstandardsdev/status/2112846568810246470) — *Twitter / X by @webstandardsdev (1 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS :navigation-source pseudo-class](https://github.com/WebKit/standards-positions/issues/715) [open] `topic: css`, `venue: W3C CSS WG`, `from: Google`
- **Mozilla:** [CSS \`:navigation-source\` pseudo-class](https://github.com/mozilla/standards-positions/issues/1447) [open] `topic: CSS`
  > *Latest discussion from @noamr: "&gt; \[@noamr\](https://github.com/noamr) I guess the main use case is view-transitions, right? Doesn't seem particularly complicated I suppose  Right, but..."*

#### 📰 Ecosystem Blogs & Articles

- [googleusercontent.com](https://doc-3b8g-3g80-issuetracker.googleusercontent.com/issues/552040976) *(doc-3b8g-3g80-issuetracker.googleusercontent.com)*
  > The \*\*CSS pseudo-class for navigation source element\*\* has been standardized and implemented as \*\*\`:navigation-source\`\*\* (under the \*\*CSS Navigation Matching Level 1\*\* specification) \*\*Spec Rename Resolution:\*\* In GitHub...
- [CSS Navigation Matching, Early Days \| CSS-Tricks](https://css-tricks.com/css-navigation-matching-early-days) *(css-tricks.com)*
  > \*\*Selector Syntax:\*\* \`:navigation-source\` (earlier draft name: \`:nav-source\`) David Baron, Noam Rosenthal, and Bramus Van Damme)
- [netlify.app](https://alexanderburgos.netlify.app/blog/chrome-navigation-source-pseudo-class) *(alexanderburgos.netlify.app)*
  > \*\*Persistence:\*\* Unlike \`:active\` (which disappears immediately when the click/touch interaction ends), \`:navigation-source\` remains matched \*\*throughout the entire duration of the navigation\*\* until the next page loads ...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com)*
  > The feature officially shipped enabled-by-default in Chromium browsers The release notes highlight its tight integration with the \*\*Cross-Document View Transitions API\*\*, explaining that authors no longer have to manuall...
- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Chromestatus Thu, 03 Sep 2026 02...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17393.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Rick Byers Tue, 08 Sep 2...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6327898878377984`)*
  > \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Chromestatus Thu, 03 Sep 2026 02...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17393.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6327898878377984`)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Rick Byers Tue, 08 Sep 2...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17395.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Philip Jägenstedt Wed, 0...
- [\[css-navigation-1\] Add pseudo-class selector to target the element that initiated the outgoing navigation · Issue #11801 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11801) *(github.com · 2025-02-28T12:59:38)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > \[css-navigation-1\] Add pseudo-class selector to target the element that initiated the outgoing navigation · Issue #11801 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Si...
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1447) *(github.com · 2026-08-25T08:30:57)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anoth...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/w3c/csswg-drafts/issues/14303) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/715) *(github.com)*
- [\[css-navigation-1\] Add pseudo-class selector to target the element that initiated the outgoing navigation · Issue #11801 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11801) *(github.com)*
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1447) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 12 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 6 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (1 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 2

---

<a id="5100672946143232-closest-corner-and-farthest-corner-radii-for-circle-and-ellipse-basic-shapes"></a>
### [closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](https://chromestatus.com/feature/5100672946143232)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5100672946143232](https://chromestatus.com/feature/5100672946143232) · [chromestatuslite.com/feature/5100672946143232](https://chromestatuslite.com/feature/5100672946143232)
- **Specification:** [https://drafts.csswg.org/css-shapes-1/#basic-shape-functions](https://drafts.csswg.org/css-shapes-1/#basic-shape-functions)
- **Chromium Bug:** [https://crbug.com/361617757](https://crbug.com/361617757)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Under consideration` · Safari: `Support`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/shapes) (Chrome: `37`, Firefox: `54`, Safari: `10.1`) · *group-level data: web-features [`shapes`](https://webstatus.dev/features/shapes), shared with 1 other ChromeStatus feature*

#### 📝 Overview

The circle() and ellipse() CSS basic-shape functions accept the closest-corner and farthest-corner radius keywords, in addition to the existing closest-side and farthest-side. These keywords resolve to the Euclidean distance from the shape center to the nearest or farthest corner of the reference box, matching the long-standing behavior of radial-gradient(). They work in clip-path, shape-outside, and offset-path, so the same shape syntax accepted by gradients now works for shapes.   CL: https://chromium-review.googlesource.com/c/chromium/src/+/7767079

> **Motivation:** The &lt;radial-extent&gt; keywords closest-corner and farthest-corner are defined for radial gradients and have been interoperably supported there for years. The circle() and ellipse() basic-shape syntax in CSS Shapes Module Level 1 shares the &lt;shape-radius&gt; production with gradients, but Blink (and Gecko) only accepted closest-side / farthest-side for t...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 160 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"closest-corner farthest-corner circle ellipse basic shape csswg"`
- **Analysis:** This enhancement harmonizes the CSS basic-shape functions circle() and ellipse() with radial-gradient() by introducing the closest-corner and farthest-corner radius keywords. Shipping enabled by default in Chrome 158, it eliminates a long-standing ergonomic gap across clip-path, shape-outside, and offset-path. With WebKit having already implemented the feature and Gecko engineers expressing positive support following recent CSS Working Group resolutions, the ecosystem is rapidly achieving full cross-engine alignment.

**Key Recommendations & Takeaways:**
- Actionable Advice: Developers can safely experiment with these keywords in progressive visual enhancements such as reveal transitions and path-based motion, guarding usage with @supports (clip-path: circle(farthest-corner)). Production-critical layouts should retain fallback percentage dimensions or mask-based approaches until updated engine versions reach broad Baseline availability.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @nt1m: "This was implemented 2 years ago: https://commits.webkit.org/281808@main  WebKit wrote the original tests for those :)..."
- Standards Activity (Mozilla): Latest discussion from @BorisChiou: "Given that https://github.com/w3c/csswg-drafts/issues/14010 has been resolved, so suggest positive...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **4 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Shapes: \`closest-corner\` and \`farthest-corner\` radii for \`circle()\` and \`ellipse()\`](https://github.com/WebKit/standards-positions/issues/719) [closed] `position: support`
  > *Latest discussion from @nt1m: "This was implemented 2 years ago: https://commits.webkit.org/281808@main  WebKit wrote the original tests for those :)..."*
- **Mozilla:** [CSS Shapes: \`closest-corner\` and \`farthest-corner\` radii for \`circle()\` and \`ellipse()\`](https://github.com/mozilla/standards-positions/issues/1450) [open] `venue: W3C`, `topic: CSS`
  > *Latest discussion from @BorisChiou: "Given that https://github.com/w3c/csswg-drafts/issues/14010 has been resolved, so suggest positive...."*

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17254.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for ...
- [Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17457.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner ra...
- [Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17488.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner ra...
- [\[dev-platform\] Intent to prototype and ship: closest-corner and farthest-corner for circle() and ellipse() basic shapes](http://www.mail-archive.com/dev-platform@mozilla.org/msg01887.html) *(mail-archive.com)*
  > However, circle() is clear so we intend to ship it (i.e. this preference is only for ellipse()). \*DevTools Bug\*: N/A \*Extensions Bug\*: N/A \*Use Counter\*: css\_clip\_path, css\_offset\_path, and css\_shape\_outside may use circ...
- [Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17456.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner ra...
- [WebKit Results Database: 281657@main](https://results.webkit.org/commit?repository_id=webkit&id=281657%40main) *(results.webkit.org)*
  > WebKit Results Database: 281657@main WebKit Results Database ☰ ◀ Previous 281657@main Next ▶

#### 📚 Platform Documentation & References

- [github.com](https://github.com/w3c/csswg-drafts/issues/13814) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/719) *(github.com)*
- [github.com](https://github.com/web-platform-tests/wpt/blob/master/css/css-masking/clip-path/clip-path-ellipse-closest-farthest-corner.html) *(github.com)*
- [closest-corner and farthest-corner radii for circle() and ellipse() · Issue #1366 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1366) *(github.com)*
- [\[css-shapes-1\] ellipse() grammar gratuitously inconsistent with radial-gradient() · Issue #824 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/824) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `shapes` on [wpt.fyi](https://wpt.fyi/results?q=feature:shapes) (via webstatus.dev) — stable: Chrome 73.3% · Edge 73.3% · Firefox 86.7% · Safari 100%; experimental: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (43 found across 11 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 3 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (0 found, 0 verified) · `web-features mapping` *(group "shapes", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "shapes": Chrome 73.3% passing (stable))* · `Sources cited by the AI synthesis` (3 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 5

---

<a id="6210300985606144-cors-enforcement-for-background-fetch"></a>
### [CORS enforcement for Background Fetch](https://chromestatus.com/feature/6210300985606144)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6210300985606144](https://chromestatus.com/feature/6210300985606144) · [chromestatuslite.com/feature/6210300985606144](https://chromestatuslite.com/feature/6210300985606144)
- **Specification:** [https://wicg.github.io/background-fetch](https://wicg.github.io/background-fetch)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/background-fetch) (Chrome: `74`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`background-fetch`](https://webstatus.dev/features/background-fetch), shared with 1 other ChromeStatus feature*

#### 📝 Overview

Starting in Chrome 157, the Background Fetch API now enforces Cross-Origin Resource Sharing (CORS).  This update aligns Chromium's implementation with the intent of the \[Background Fetch spec\](https://wicg.github.io/background-fetch/). This ensures that Background Fetch requests are subject to the same security policies as regular Fetch requests, such as Local Network Access checks.   This update prevents sites from bypassing CORS (and other security policy checks) by using Background Fetch instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).

> **Motivation:** This fixes a security issue where Background Fetch unintentionally bypasses security policies such as CORS (and CORP/COEP/DIP).  (crbug.com/515243254 is our meta bug tracking all of the different web platform security issues with Background Fetch.)

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 160 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""wicg/background-fetch" CORS"`, `""CORS enforcement for Background Fetch""`, `""Background Fetch" CORS Chrome "157" OR "154" OR "crbug""`, `"site:github.com/WebKit/standards-positions "Background Fetch" 149"`
- **Analysis:** Background Fetch remains a Chromium-exclusive capability with limited ecosystem availability, having previously avoided deprecation in Chromium despite low web-wide adoption. The rollout of strict Cross-Origin Resource Sharing (CORS) enforcement in Chrome aligns Chromium with the WICG Background Fetch specification, closing security loopholes where background requests bypassed CORS, Local Network Access (LNA), and CORP/COEP policies. Non-Chromium engines continue to show no intention of implementing the broader specification, keeping the API confined to Chrome and Edge.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams utilizing Background Fetch must immediately verify that all cross-origin endpoints return valid Access-Control-Allow-Origin headers and satisfy Local Network Access permissions to avoid 'fetch-error' failures. Background Fetch should strictly be treated as a progressive enhancement behind feature detection, with standard Fetch fallbacks for Safari and Firefox users.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/resources/release-notes) *(chromeenterprise.google)*
  > The release notes warn developers that Background Fetch requests are now subject to the exact same origin checks and preflight rules as regular \`fetch()\` calls
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > The release notes warn developers that Background Fetch requests are now subject to the exact same origin checks and preflight rules as regular \`fetch()\` calls
- [chrome.com](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > It specifically highlights that service worker origins attempting to download resources from private or local IP ranges must also pass Local Network Access permissions \*\*Handle Local Network Access (LNA)\*\*: If fetching a...
- [sentinelone.com](https://www.sentinelone.com/vulnerability-database/cve-2026-1504) *(sentinelone.com)*
  > Security researchers (such as David Bors at Snyk) and security advisories reported vulnerabilities where Background Fetch bypassed cross-origin data boundaries and accepted malformed headers (e.g., improper casing handli...
- [chromium.org](https://issues.chromium.org/issues/524406292) *(issues.chromium.org)*
  > Security researchers (such as David Bors at Snyk) and security advisories reported vulnerabilities where Background Fetch bypassed cross-origin data boundaries and accepted malformed headers (e.g., improper casing handli...
- [codercops.com](https://blog.codercops.com/blog/chrome-154-websocket-options-iterator-includes-https-prompts-2026) *(blog.codercops.com)*
  > Developer analysis blogs (such as \*Codercops: Chrome for Developers — What Changed and What to Test\*) identified the Background Fetch CORS update as one of the few potentially breaking changes for production apps Legacy ...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17645.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chromestatus Fri, 02 Oct 2026 09:53:21 -0700 Conta...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17683.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Mike Taylor Wed, 07 Oct 2026 10:58:58 -070...

#### 📚 Platform Documentation & References

- [BackgroundFetchManager: fetch() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchManager/fetch) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchRegistration/failureReason) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/ja/docs/Web/API/BackgroundFetchRegistration/failureReason) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `background-fetch` on [wpt.fyi](https://wpt.fyi/results?q=feature:background-fetch) (via webstatus.dev) — stable: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%; experimental: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%

#### 🌐 Web-features Group Context

*group-level data: web-features [`background-fetch`](https://webstatus.dev/features/background-fetch), shared with 1 other ChromeStatus feature*

- **Mozilla:** no position recorded ([standards position](https://github.com/mozilla/standards-positions/issues/30))
- **WebKit:** no position recorded ([standards position](https://github.com/WebKit/standards-positions/issues/149)) · concerns: `privacy`, `maintenance`

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 12 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 10 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "background-fetch", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "background-fetch": Chrome 37.5% passing (stable))* · `Sources cited by the AI synthesis` (6 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5169798320357376-add-javascripturls-option-to-sanitizerconfig-and-sanitizer"></a>
### [Add javascriptURLs option to SanitizerConfig and Sanitizer](https://chromestatus.com/feature/5169798320357376)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5169798320357376](https://chromestatus.com/feature/5169798320357376) · [chromestatuslite.com/feature/5169798320357376](https://chromestatuslite.com/feature/5169798320357376)
- **Specification:** [https://github.com/whatwg/html/pull/12898](https://github.com/whatwg/html/pull/12898)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Support`

#### 📝 Overview

https://github.com/whatwg/html/pull/12898  Sanitizer API also sanitizes javascript:-URLs, when they are used for navigation. This was originally done as a side effect of any "safe" method that uses Sanitizer, and omittted for any "unsafe" method. The HTML standard recently regularized this and made this a developer-selectable option, instead of a side-effect of a particular method.  Behaviour when the option is not used remains the same.

> **Motivation:** Previously, Sanitizer API already supported sanitizing javascript:-URLs, but only for "safe" methods. This was awkward if users wanted to use the "unsafe" methods for some reason, but still wanted javascript:-URLs removed.  Further discussion on: https://github.com/whatwg/html/issues/12686 https://github.com/whatwg/html/pull/12898

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 155 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"site:github.com/whatwg/html "javascriptURLs""`, `""SanitizerConfig" "javascriptURLs""`, `""javascriptURLs" "Sanitizer" chrome whatwg"`
- **Analysis:** The addition of the 'javascriptURLs' option to SanitizerConfig and Sanitizer standardizes how javascript:-URLs are stripped across both safe and unsafe HTML parsing sinks. Previously treated as an implicit side effect of safe methods like setHTML(), this behavior is now an explicit, configurable boolean toggle consistent with existing toggles like comments and dataAttributes. Shipping by default in Chrome 157, the change reflects strong consensus across standards participants to eliminate 'configuration outside the configuration'.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams utilizing or evaluating the native Sanitizer API should update their sanitizer configurations to explicitly declare javascriptURLs: false when configuring custom allowlists, especially when invoking setHTMLUnsafe(). In production environments requiring broad cross-browser compatibility across legacy browser versions, continue relying on proven libraries like DOMPurify as a polyfill or fallback while engine implementations mature.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Having discussed this more with colleagues and given the lack of opposing feedback in this issue I suggest we label this as "position: support" one we..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Sanitizer API](https://github.com/WebKit/standards-positions/issues/86) [closed] `position: support`, `topic: html`, `topic: dom`, `venue: WICG`, `from: Google`, `from: Mozilla`, `from: other`
  > *Latest discussion from @annevk: "Having discussed this more with colleagues and given the lack of opposing feedback in this issue I suggest we label this as "position: support" one we..."*

#### 📰 Ecosystem Blogs & Articles

- [github.io](https://dontcallmedom.github.io/webdex/s.html) *(dontcallmedom.github.io)*
  > setJavascriptURLs(allow)\` modifier method \*\*Key Takeaway:\*\* Standardized \`javascriptURLs\` alongside similar boolean toggles like \`comments\` and \`dataAttributes\`
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5169798320357376) *(img968-dot-cr-status.appspot.com)*
  > \*\*Source:\*\* \*Chrome Platform Status / Chrome 157 Milestone Notes\* \*\*Details:\*\* Chrome listed the feature as shipping enabled by default starting in \*\*Chrome 157\*\* (October 2026)
- [zenn.dev](https://zenn.dev/cybozu_frontend/articles/web_standards_trends_202609) *(zenn.dev)*
  > \*\*Technical Engineering Blogs (Zenn / Cybozu Web Standards Tracker):\*\* Highlighted in monthly standards catch-up blogs (such as Cybozu's \*Web Standards Trends\*) as a notable API consistency improvement for developers man...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17764.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer ...
- [\[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17726.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Chromest...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17747.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer ...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17764.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer ...
- [\[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17726.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Chromest...
- [2068934 - Sanitizer API: javascript URL handling should be part of the config](https://bugzilla.mozilla.org/show_bug.cgi?id=2068934) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/whatwg/html/pull/12898`)*
  > 2068934 - Sanitizer API: javascript URL handling should be part of the config Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advance...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/whatwg/html/issues/12686) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/158) *(developer.mozilla.org)*
- [whatwg.org](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html) *(html.spec.whatwg.org)*
- [mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=2071032) *(bugzilla.mozilla.org)*
- [2068934 - Sanitizer API: javascript URL handling should be part of the config](https://bugzilla.mozilla.org/show_bug.cgi?id=2068934) *(bugzilla.mozilla.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (45 found across 11 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (5 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 5

---

<a id="5069584943153152-expose-progressevent-in-service-workers"></a>
### [Expose ProgressEvent in service workers](https://chromestatus.com/feature/5069584943153152)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5069584943153152](https://chromestatus.com/feature/5069584943153152) · [chromestatuslite.com/feature/5069584943153152](https://chromestatuslite.com/feature/5069584943153152)
- **Specification:** [https://xhr.spec.whatwg.org/#interface-progressevent](https://xhr.spec.whatwg.org/#interface-progressevent)
- **Chromium Bug:** [https://issues.chromium.org/issues/332663431](https://issues.chromium.org/issues/332663431)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/xhr) (Chrome: `1`, Firefox: `1`, Safari: `3`) · *group-level data: web-features [`xhr`](https://webstatus.dev/features/xhr), shared with 6 other ChromeStatus features*

#### 📝 Overview

ProgressEvent is available in service workers, allowing developers to construct progress events with lengthComputable, loaded, and total attributes. This aligns service workers with other worker contexts and the XMLHttpRequest Standard.

> **Motivation:** Blink exposes ProgressEvent in Window, DedicatedWorker, and SharedWorker contexts, but not in service workers. Exposing it in service workers closes this gap with the XMLHttpRequest Standard and allows code that constructs progress events to be reused across worker contexts. The change reuses the existing implementation without exposing XMLHttpRequ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 150 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""ProgressEventInServiceWorker" chrome OR chromium"`, `""ProgressEvent" "service worker" OR "ServiceWorkerGlobalScope""`, `""Expose ProgressEvent in service workers""`
- **Analysis:** Exposing the ProgressEvent interface in service workers resolves a long-standing specification mismatch in Blink, aligning Chromium with the WHATWG XMLHttpRequest Standard that exposes the constructor across all worker contexts. Enabled by default starting in Chrome and Edge 157 under the ProgressEventInServiceWorker feature, the change allows native instantiation of progress events with lengthComputable, loaded, and total attributes without modifying fetch internals or reintroducing XMLHttpRequest. The broader web engine consensus is unified and uncontroversial, harmonizing Chromium with WebKit's existing universal worker exposure.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams sharing data-handling and event-dispatching modules across threads can now replace custom mock event classes with standard ProgressEvent constructors \[df6be934406d2f58\]. Before relying on it unconditionally, verify that existing codebase polyfills or global feature checks in service worker scopes do not collide with the newly exposed native global.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5069584943153152?gate=6152298232414208) *(img968-dot-cr-status.appspot.com)*
  > The platform update \*\*"Expose ProgressEvent in service workers"\*\* brings the standard \`ProgressEvent\` interface into the \`ServiceWorkerGlobalScope\` Under the \*\*WHATWG XMLHttpRequest Standard\*\*, \`ProgressEvent\` is defined...
- [appspot.com](https://cr-status.appspot.com/feature/5069584943153152/activity) *(cr-status.appspot.com)*
  > This change closes the interoperability gap, allowing developers to instantiate \`new ProgressEvent(type, { lengthComputable, loaded, total })\` directly inside service workers without introducing \`XMLHttpRequest\` or alter...
- [googlesource.com](https://chromium.googlesource.com/chromium/src.git/+/HEAD/third_party/blink/renderer/platform/runtime_enabled_features.json5) *(chromium.googlesource.com)*
  > \*\*Release Target\*\*: Shipped enabled-by-default in \*\*Chrome 157\*\* (tracked under Chromium Bug \[332663431\](https://issues.chromium.org/issues/332663431) and runtime feature flag \`ProgressEventInServiceWorker\`)
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > \*\*Release Target\*\*: Shipped enabled-by-default in \*\*Chrome 157\*\* (tracked under Chromium Bug \[332663431\](https://issues.chromium.org/issues/332663431) and runtime feature flag \`ProgressEventInServiceWorker\`)
- [techinnovateit.com](https://techinnovateit.com/service-worker-progressevent) *(techinnovateit.com)*
  > Lacking \`ProgressEvent\` forced developers to build custom mock events or branch logic specifically when running inside a service worker Technical posts and developer guides (e.g., \*Tech InnovateIT\*) focus on practical pa...
- [googleusercontent.com](https://doc-2gh0-0gig-issuetracker.googleusercontent.com/issues/565605607) *(doc-2gh0-0gig-issuetracker.googleusercontent.com)*
  > Documentation updates (such as tracking issue \`Document ProgressEvent availability in service workers \[565605607\]\`) remove this caveat as Blink aligns with WebKit (Safari), which already exposed the interface to the univ...

#### 🔗 Inbound Citations & Reverse Links

- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com · 2026-09-24T13:38:21)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in...
- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17670.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Chris Harrelson Wed, 07 Oct 20...
- [\[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17669.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Alex Russell Wed, 07 Oct 2026 08:22:47...

#### 📚 Platform Documentation & References

- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com)*
- [\[Blink\] Expose ProgressEvent in service workers by chromium-wpt-export-bot · Pull Request #63586 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63586) *(github.com)*
- [Release merge\_pr\_63586 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/releases/tag/merge_pr_63586) *(github.com)*
- [Expose ProgressEvent to ServiceWorker · Issue #305 · whatwg/xhr](https://github.com/whatwg/xhr/issues/305) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `xhr` on [wpt.fyi](https://wpt.fyi/results?q=feature:xhr) (via webstatus.dev) — stable: Chrome 95.4% · Edge 95.4% · Firefox 97% · Safari 95.9%; experimental: Chrome 95.7% · Edge 95.7% · Firefox 97% · Safari 96.8%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (70 found across 11 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (1 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "xhr", shared with 6 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "xhr": Chrome 95.4% passing (stable))* · `Sources cited by the AI synthesis` (2 found, 0 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5086608215900160-scroll-snap-for-single-axis-scroll-containers"></a>
### [Scroll snap for single-axis scroll containers](https://chromestatus.com/feature/5086608215900160)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5086608215900160](https://chromestatus.com/feature/5086608215900160) · [chromestatuslite.com/feature/5086608215900160](https://chromestatuslite.com/feature/5086608215900160)
- **Specification:** [https://drafts.csswg.org/css-scroll-snap-1](https://drafts.csswg.org/css-scroll-snap-1)
- **Chromium Bug:** [http://crbug.com/473576119](http://crbug.com/473576119)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/scroll-snap) (Chrome: `69`, Firefox: `68`, Safari: `11`) · *group-level data: web-features [`scroll-snap`](https://webstatus.dev/features/scroll-snap), shared with 4 other ChromeStatus features*

#### 📝 Overview

This feature lets a single-axis scroll container (for example, one with overflow: auto clip) handle scroll snap area propagation and alignment separately for each axis.  Single-axis scroll containers are now supported (https://chromestatus.com/feature/5067363861004288). Without this feature, such a container captures a snap area on both axes, even the axis it can't scroll. The snap area then can't align on that axis.  With this feature, if a snap area sets alignment on both axes, the single-axis container handles only the axis it scrolls. The other axis goes up to the nearest ancestor scroll container that scrolls in that direction.

> **Motivation:** This is part of the single-axis scroll container feature (https://github.com/explainers-by-googlers/single-axis-scroll-containers) to align the scroll snap behavior with the sticky header in a single-axis scroll container.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 150 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"css scroll snap 1 support scroll snap for single axis scroll containers mozilla webkit"`, `"support scroll snap for single axis scroll containers"`
- **Analysis:** This specification refinement addresses a persistent quirk in CSS Scroll Snap where single-axis scroll containers (such as those using overflow combinations like auto and clip) previously trapped snap alignment on their non-scrollable axis. By allowing unhandled snap axes to bubble to the nearest ancestor scroller, it significantly improves composability for complex grid and sticky-header layouts. With Chrome shipping default support and other engine vendors leaning favorable during standards review, cross-engine alignment is advancing steadily.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should treat this behavior as a transparent progressive enhancement, testing nested single-axis layouts in Chrome while verifying that fallback browsers still scroll gracefully without snapping failures. Explicitly setting axis-targeted snap alignment values where appropriate can also help prevent unintended multi-axis captures in non-supporting engines.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @hiikezoe: "Looks basically reasonable to me.    That's said, it seems that the spec change hasn't yet clarified mixed up writing mode cases. From a sentence of t..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **10 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/712) [open] `topic: css`, `venue: W3C CSS WG`
- **Mozilla:** [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1445) [open] `topic: CSS`
  > *Latest discussion from @hiikezoe: "Looks basically reasonable to me.    That's said, it seems that the spec change hasn't yet clarified mixed up writing mode cases. From a sentence of t..."*

#### 📰 Ecosystem Blogs & Articles

- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*The Problem:\*\* When an inner element specifies snap alignment for both directions (e.g., \`scroll-snap-align: start start\`), an ancestor scroll container would capture snap areas on \*\*both\*\* axes—even the axis it could ...
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > \*\*The Problem:\*\* When an inner element specifies snap alignment for both directions (e.g., \`scroll-snap-align: start start\`), an ancestor scroll container would capture snap areas on \*\*both\*\* axes—even the axis it could ...
- [Chrome Platform Status](https://polymer10-dot-cr-status.appspot.com/feature/5086608215900160/activity) *(polymer10-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [webkit.org](https://webkit.org/standards-positions) *(webkit.org)*
  > WebKit engineers tracked the single-axis scroll container changes alongside the per-axis scroll snap proposal with generally positive reception, noting that decoupling horizontal and vertical scroll trees reflects actual...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug...
- [Ready for developer testing: Single-axis scroll containers \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/single-axis-scroll-containers-ready-for-testing) *(developer.chrome.com)*
  > Ready for developer testing: Single-axis scroll containers \| Blog \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil T...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5086608215900160`)*
  > \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug...

#### 📚 Platform Documentation & References

- [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers · Issue #1445 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1445) *(github.com)*
- [w3.org](https://lists.w3.org/Archives/Public/public-css-archive/2026Aug/0705.html) *(lists.w3.org)*
- [github.com](https://github.com/WebKit/standards-positions/issues/680) *(github.com)*
- [github.com](https://github.com/web-platform-tests/interop/issues/1438) *(github.com)*
- [Other Spec Review: Scroll snap for single-axis scroll container · Issue #1266 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1266) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `scroll-snap` on [wpt.fyi](https://wpt.fyi/results?q=feature:scroll-snap) (via webstatus.dev) — stable: Chrome 91% · Edge 89.3% · Firefox 84.2% · Safari 70.6%; experimental: Chrome 97.2% · Edge 95.5% · Firefox 84.2% · Safari 76.8%

#### 🌐 Web-features Group Context

*group-level data: web-features [`scroll-snap`](https://webstatus.dev/features/scroll-snap), shared with 4 other ChromeStatus features*

- **Chrome usage:** 0.2% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/59))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (46 found across 12 planned queries, 5 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 8 verified) · `Twitter / X API v2` *(found 3 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "scroll-snap", shared with 4 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "scroll-snap": Chrome 91% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 2

---

<a id="5089961022980096-webtransport-anticipated-concurrent-incoming-streams"></a>
### [WebTransport anticipated concurrent incoming streams](https://chromestatus.com/feature/5089961022980096)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5089961022980096](https://chromestatus.com/feature/5089961022980096) · [chromestatuslite.com/feature/5089961022980096](https://chromestatuslite.com/feature/5089961022980096)
- **Specification:** [https://w3c.github.io/webtransport/#web-transport-configuration](https://w3c.github.io/webtransport/#web-transport-configuration)
- **Chromium Bug:** [https://issues.chromium.org/issues/565837025](https://issues.chromium.org/issues/565837025)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

#### 📝 Overview

Allows WebTransport applications to indicate how many incoming streams they expect to have open at once. Constructor hints configure the initial QUIC stream allowance, reducing the risk that a server that needs high stream concurrency is blocked by the initial stream limit.

> **Motivation:** Some WebTransport applications expect a server to open many streams at once. If the initial QUIC stream allowance is too low, the server must wait for more stream credit before opening additional streams, adding avoidable latency or limiting the number of open streams. Constructor hints let the application state its expected stream count when creat...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 150 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** The 'anticipated concurrent incoming streams' feature extends the W3C WebTransport configuration to let applications pre-allocate initial QUIC stream credit, eliminating latency bottlenecks when servers open large batches of concurrent streams immediately. Currently enabled by default in Chromium and integrated into the W3C specification, it addresses a critical flow-control limitation without breaking backward compatibility. Broad engine alignment is strong, with Mozilla actively addressing implementation details in Gecko and the underlying Neqo transport library.

**Key Recommendations & Takeaways:**
- Actionable Advice: Developers building high-throughput or low-latency server-push architectures should start passing 'anticipatedConcurrentIncomingUnidirectionalStreams' and 'anticipatedConcurrentIncomingBidirectionalStreams' in their WebTransport constructor options today. Because unrecognized dictionary members are safely ignored by non-supporting runtimes, this serves as a zero-risk progressive enhancement that automatically reduces latency on supporting engines.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2076568: New wpt failures in /webtransport/ \[anticipated-concurrent-incoming-streams.https.any.worker.html, anticipated-concurrent-incoming-streams.https.any.serviceworker.html, anticipated-concurrent-incoming-streams.https.any.sharedworker.html, and 1 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2076568) `[NEW]`
- **Mozilla (Gecko):** [Bug #2080556: Apply WebTransport anticipatedConcurrentIncoming\*Streams when the CONNECT is sent, not when the session becomes ready](https://bugzilla.mozilla.org/show_bug.cgi?id=2080556) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [googleusercontent.com](https://doc-26bg-1o5g-issuetracker.googleusercontent.com/issues/571966717) *(doc-26bg-1o5g-issuetracker.googleusercontent.com)*
  > \*\*WebTransport anticipated concurrent incoming streams\*\* introduces constructor options and read-write attributes (\`anticipatedConcurrentIncomingUnidirectionalStreams\` and \`anticipatedConcurrentIncomingBidirectionalStrea...
- [appspot.com](https://polymer10-dot-cr-status.appspot.com/feature/5089961022980096) *(polymer10-dot-cr-status.appspot.com)*
  > However, if a server needs to immediately open a large number of server-initiated streams (e.g., for multi-track video streaming, real-time gaming state, or high-frequency data feeds), the initial QUIC stream allowance m...
- [How to use WebTransport \| Capabilities \| Chrome for Developers](https://developer.chrome.com/docs/capabilities/web-apis/webtransport) *(developer.chrome.com)*
  > However, if a server needs to immediately open a large number of server-initiated streams (e.g., for multi-track video streaming, real-time gaming state, or high-frequency data feeds), the initial QUIC stream allowance m...
- [googleusercontent.com](https://doc-3io0-4ra0-issuetracker.googleusercontent.com/issues/571966717/resources) *(doc-3io0-4ra0-issuetracker.googleusercontent.com)*
  > MDN documents the newly added \`anticipatedConcurrentIncomingUnidirectionalStreams\` and \`anticipatedConcurrentIncomingBidirectionalStreams\` members
- [caniuse.com](https://caniuse.com/mdn-api_webtransport_anticipatedconcurrentincomingunidirectionalstreams) *(caniuse.com)*
  > \*\*CanIUse Compatibility Matrix:\*\* Tracks deployment across engines Support is driven primarily by Chromium-based browsers, with Safari (WebKit) adding support in recent builds and Firefox tracking implementation under Bu...
- [codercops.com](https://blog.codercops.com/blog/webtransport-explained-websocket-alternative-2026) *(blog.codercops.com)*
  > Developer blogs and real-time networking platforms (e.g., PubNub, web real-time tech blogs) highlight this update as a crucial optimization for server-heavy streaming models

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: WebTransport anticipated concurrent incoming streams](http://www.mail-archive.com/blink-dev@chromium.org/msg17806.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5089961022980096`)*
  > \[blink-dev\] Intent to Ship: WebTransport anticipated concurrent incoming streams Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport anticipated concurrent incoming streams Chromestatus Tue, 20...
- [\[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams](http://www.mail-archive.com/blink-dev@chromium.org/msg17825.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5089961022980096`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams Yoav Weiss (...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams](http://www.mail-archive.com/blink-dev@chromium.org/msg17828.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5089961022980096`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams Alex...

#### 📚 Platform Documentation & References

- [WebTransport](https://www.w3.org/TR/webtransport) *(w3.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [webtransport/index.bs at main · w3c/webtransport](https://github.com/w3c/webtransport/blob/main/index.bs) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 42.3% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 70.1% · Safari 73%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (36 found across 12 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 10 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (3 found, 2 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 17 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 42.3% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 0

---

<a id="5174965228929024-css-custom-highlight-universal-selector-highlight"></a>
### [CSS Custom Highlight Universal Selector ::highlight(\*)](https://chromestatus.com/feature/5174965228929024)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5174965228929024](https://chromestatus.com/feature/5174965228929024) · [chromestatuslite.com/feature/5174965228929024](https://chromestatuslite.com/feature/5174965228929024)
- **Specification:** [https://drafts.csswg.org/css-pseudo-4/#selectordef-highlight-highlight-name-selector](https://drafts.csswg.org/css-pseudo-4/#selectordef-highlight-highlight-name-selector)
- **Chromium Bug:** [https://issues.chromium.org/issues/408003366](https://issues.chromium.org/issues/408003366)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Under consideration` · Safari: `No signal`

#### 📝 Overview

Introduces a universal selector for custom highlights, ::highlight(\*), which matches the highlight pseudo-elements of all custom highlights regardless of their name.   The \* argument contributes zero specificity, so its declarations act as a base style that rules naming a specific highlight override through the cascade.

> **Motivation:** Styling shared properties across custom highlights requires repeating the same declarations for every registered name. The CSSWG resolved to allow ::highlight(\*).

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 146 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebKit/standards-positions" "highlight(*)""`, `""CSS Custom Highlight Universal Selector" OR "::highlight(*)""`, `""mozilla/standards-positions" "highlight(*)""`
- **Analysis:** The \`::highlight(\*)\` universal selector represents an ergonomic upgrade to the CSS Custom Highlight API, standardized by the CSS Working Group within CSS Pseudo-Elements Module Level 4 and shipping enabled by default starting in Chrome 158. It allows authors to apply zero-specificity baseline declarations across every registered custom highlight without duplicating rules across individual names. While Chromium is the first engine to ship support, the feature stems from broad standards consensus and enjoys favorable alignment across browser vendors.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt progressive enhancement by isolating \`::highlight(\*)\` rules within \`@supports selector(::highlight(\*))\` checks to prevent older parsers from invalidating entire style blocks. Until Gecko and WebKit deliver matching implementations, continue supplying explicit named highlight rules as the reliable multi-browser styling baseline.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @jnjaeschke: "Agreeing with @emilio, I think this is reasonable...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "I just shipped CSS Custom Highlight Universal Selector! Coming in Chrome 158.  With ::highlight(\*), you can write a shar" (7 points, 2 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **11 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [I just shipped CSS Custom Highlight Universal Selector! Coming in Chrome 158.  With ::highlight(\*), you can write a shar](https://twitter.com/0xdevssh/status/2112468707553550554) — *Twitter / X by @0xdevssh (7 likes/RTs, 2 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Custom Highlight Universal Selector ::highlight(\*)](https://github.com/WebKit/standards-positions/issues/728) [open] 
- **Mozilla:** [CSS Custom Highlight Universal Selector ::highlight(\*)](https://github.com/mozilla/standards-positions/issues/1460) [open] `topic: CSS`
  > *Latest discussion from @jnjaeschke: "Agreeing with @emilio, I think this is reasonable...."*

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/feature/5174965228929024) *(cr-status.appspot.com)*
  > \*\*What it does:\*\* It allows developers to target all custom highlight pseudo-elements across a document using the \`\*\` wildcard argument, matching highlights regardless of their registered name \*\*Cascade & Specificity:\*\* ...
- [appspot.com](https://img120-dot-cr-status.appspot.com/feature/5174965228929024?gate=6101897755885568) *(img120-dot-cr-status.appspot.com)*
  > Tracked under Chromium Feature Entry \*\*#5174965228929024\*\* (Blink component: \`Blink&gt;CSS\`), implemented by the Chromium team and scheduled for milestone release \*\*Mozilla (Firefox):\*\* Standard position issue opened at \[\`m...
- [Custom Highlight Universal Selector ::highlight(\*) \| daily.dev](https://daily.dev/posts/custom-highlight-universal-selector-highlight--f416uv98z) *(daily.dev)*
  > dev\*) have highlighted \`::highlight(\*)\` as a welcome quality-of-life improvement, particularly for heavy-highlighting applications such as in-browser code editors (Monaco/CodeMirror), dynamic search overlays, and spellch...
- [\[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17171.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*) Chrome...
- [\[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17786.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) 'Dan Cla...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17797.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) ...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17171.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > \[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*) Chrome...
- [\[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17786.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) 'Dan Cla...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17797.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) ...
- [\[blink-dev\] Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17719.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > \[blink-dev\] Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Chromestatus Wed...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/web-platform-dx/web-features/issues/4242) *(github.com)*
- [CSS Custom Highlight Universal Selector ::highlight(\*) · Issue #728 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/728) *(github.com)*
- [\[css-highlight-1\]\[css-pseudo-4\] Add ::highlight(\*) by DevSDK · Pull Request #14301 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/pull/14301) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (67 found across 11 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (7 found, 5 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (4 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 3

---

<a id="5155080092385280-decisions-api"></a>
### [Decisions API](https://chromestatus.com/feature/5155080092385280)

- **Milestone:** Chrome 157 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5155080092385280](https://chromestatus.com/feature/5155080092385280) · [chromestatuslite.com/feature/5155080092385280](https://chromestatuslite.com/feature/5155080092385280)
- **Chromium Bug:** [https://issues.chromium.org/issues/568193538](https://issues.chromium.org/issues/568193538)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Provides high-speed, deterministic semantic decision-making directly on the user's device as a built-in AI capability.  Unlike open-ended generative language models (such as the Prompt API) that decode text token-by-token over hundreds or thousands of milliseconds, the Decisions API (window.DecisionModel) evaluates natural language input text against a structured set of questions and candidate options in a single forward pass using logit scoring. This delivers micro-latency evaluations (tens or low hundreds of milliseconds on typical consumer laptop CPUs and GPUs) while outputting calibrated confidence values.  This brings non-autoregressive "System 1" decision models (e.g. Jev, Laya, Kev, Open-Jev) natively into the web platform, providing developers with a pragmatic, zero-marginal-cost "Semantic If" primitive for real-time client-side routing, interactive input guardrails, and adaptive user interfaces.

> **Motivation:** Web applications and agentic workflows increasingly need to make fast, structured decisions over unstructured input and page state: Which search filters match this natural-language query? Which UI action or tool fulfills the user's goal? Would this draft trigger a moderation review or miss key details before submission? What does this page section ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 145 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The Decisions API (window.DecisionModel) is an experimental addition to Chrome's built-in AI suite, currently in developer trial behind a desktop flag as of Chrome 157. It introduces a non-autoregressive 'Semantic If' primitive that evaluates input text against structured questions in a single forward pass, bypassing the latency and cost of generative LLMs. However, the proposal remains an isolated Chromium experiment with zero engine consensus or formal standardization across other browser vendors.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should treat window.DecisionModel strictly as an exploratory prototype behind flags, avoiding production dependencies until multi-engine consensus emerges. Developers needing immediate deterministic local classification should use userland polyfills or WebAssembly/WebGPU-backed libraries like MediaPipe DecisionMaker or LiteRT.js under progressive enhancement.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: \[decision-pony\](https://www.npmjs.com/package/decision-pony) (v0.1.2) for progressive enhancement.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 📦 Polyfills & NPM Ecosystem

- [decision-pony](https://www.npmjs.com/package/decision-pony) `v0.1.2` *(Verified Polyfill)* — OpenAI Decisions API and TypeSafe API (Jev) polyfill with conversational LLM protocols

#### 📰 Ecosystem Blogs & Articles

- [web-ai.studio](https://web-ai.studio/docs/decisions) *(web-ai.studio)*
  > DecisionModel\`) is an experimental addition to the browser's suite of Built-in AI APIs It standardizes three primary question primitives evaluated locally on-device
- [netlify.app](https://connectstateresults--yarnpkg.netlify.app/pt-BR/package/built-in-ai-task-apis-polyfills) *(connectstateresults--yarnpkg.netlify.app)*
  > DecisionModel\`) is an experimental addition to the browser's suite of Built-in AI APIs Because native browser support is restricted to desktop Canary/Dev builds behind flags, open-source polyfills have emerged
- [Chrome Decisions API: the prompts, limits, engines and code reviews behind DecisionModel](https://dejan.ai/blog/chrome-decisions-api-decisionmodel) *(dejan.ai)*
  > Chrome Decisions API: the prompts, limits, engines and code reviews behind DecisionModel Sign in mail search menu &larr; back New here? Sign in to annotate the text and leave comments. &times; Chrome Decisions API: the p...
- [Chrome Decisions API tested: three engines, from 38% to 85% right \| RESONEO](https://think.resoneo.com/chrome-decisions-api) *(think.resoneo.com)*
  > Chrome Decisions API tested: three engines, from 38% to 85% right \| RESONEO Tests · Updated October 8, 2026 Chrome is preparing an API that turns what your visitors type into filters: 38% to 85% right depending on the en...
- [Listen: Chrome Decisions API: the prompts, limits, engines and code reviews behind DecisionModel](https://dejan.ai/blog/chrome-decisions-api-decisionmodel/listen) *(dejan.ai)*
  > Listen: Chrome Decisions API: the prompts, limits, engines and code reviews behind DecisionModel Sign in mail search menu Listen: Chrome Decisions API: the prompts, limits, engines and code reviews behind DecisionModel C...
- [Chrome's Decisions API: On-Device Classification & Gemma 4 - Metrics Rule](https://www.metricsrule.com/news/chrome-decisions-api-gemma-4-analysis) *(metricsrule.com)*
  > Chrome&#039;s Decisions API: On-Device Classification & Gemma 4 - Metrics Rule Skip to content Metrics Rule Metrics Rule Book a call Book a call Main Menu Chrome&#8217;s Decisions API: On-Device Classification &#038; Gem...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Decisions API](http://www.mail-archive.com/blink-dev@chromium.org/msg17639.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5155080092385280`)*
  > \[blink-dev\] Intent to Prototype: Decisions API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Decisions API Mike Wasserman Thu, 01 Oct 2026 13:04:07 -0700 Contact emails \[email&#160;protected\] , \[...
- [Re: \[blink-dev\] Intent to Prototype: Decisions API](http://www.mail-archive.com/blink-dev@chromium.org/msg17649.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5155080092385280`)*
  > Re: \[blink-dev\] Intent to Prototype: Decisions API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: Decisions API Rick Byers Fri, 02 Oct 2026 15:32:24 -0700 Makes sense, thanks Etienne! Rick On ...
- [Re: \[blink-dev\] Intent to Prototype: Decisions API](http://www.mail-archive.com/blink-dev@chromium.org/msg17641.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/decisions-api`)*
  > Re: \[blink-dev\] Intent to Prototype: Decisions API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: Decisions API Rick Byers Thu, 01 Oct 2026 22:22:34 -0700 This is very exciting, thanks for sha...

#### 🧪 Interactive Demos & Samples

- [Decisions API Demo](https://web-ai.studio/playgrounds/decisions)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (61 found across 12 planned queries, 4 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 7 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (6 found, 0 verified) · `Engine Bug Trackers` (5 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 1 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5091965583622144-popup-capability-delegation"></a>
### [Popup Capability Delegation](https://chromestatus.com/feature/5091965583622144)

- **Milestone:** Chrome 157 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5091965583622144](https://chromestatus.com/feature/5091965583622144) · [chromestatuslite.com/feature/5091965583622144](https://chromestatuslite.com/feature/5091965583622144)
- **Chromium Bug:** [https://issues.chromium.org/issues/542314185](https://issues.chromium.org/issues/542314185)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Allows Service Workers to delegate their transient popup capability (acquired from a user interaction like a notification click) to same-origin client windows. This enables client windows to open child (pop-up) windows, such as email previews or chat windows, without being blocked by the popup blocker. This allows developers to take advantage of frame state-sharing performance (e.g. sharing in-memory state via \`window.opener\`), instead of requiring a new top-level browsing context (which is what \`Clients.openWindow\` does).

> **Motivation:** Modern web applications rely on Service Worker Notifications to handle background messaging and push notifications. However, this has introduced a capabilities gap compared to the legacy, document-bound Notifications API. In the legacy API, clicking a notification dispatched an \`onclick\` event directly in the \`Window\` context, which automatically g...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 145 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""capability-delegation" site:github.com/mozilla/standards-positions"`, `""capability-delegation" "popup" site:github.com/WICG"`, `""Popup Capability Delegation""`, `""CapabilityDelegationPopup""`, `""capability delegation" site:github.com/WebKit/standards-positions"`, `""capability-delegation/issues/42""`
- **Analysis:** Popup Capability Delegation has entered developer trial behind the experimental CapabilityDelegationPopup flag in Chrome 157, incubated under the WICG Capability Delegation repository. It solves a long-standing architectural gap where Service Worker notification clicks cannot transfer transient user activation to existing client tabs, preventing them from opening state-sharing popups via window.open(). While addressing an acute performance and ergonomics pain point for progressive web apps, the proposal remains in early Chromium prototyping without formal cross-vendor adoption.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web engineering teams should test popup delegation under experimental flags in Chrome 157 to validate whether auxiliary window flows improve perceived latency in notification journeys. However, production code must employ progressive enhancement by wrapping window.open() attempts in try/catch blocks and gracefully falling back to Clients.openWindow() or focusing existing windows when delegation is unsupported.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://img168-dot-cr-status.appspot.com/feature/5091965583622144) *(img168-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [Chrome Platform Status](https://img544-dot-cr-status.appspot.com/feature/5091965583622144/activity) *(img544-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [Chrome Platform Status](https://img544-dot-cr-status.appspot.com/feature/5091965583622144) *(img544-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Status:\*\* Entered \*\*Developer Trial\*\* behind runtime flags (\`CapabilityDelegationPopup\` / \`--enable-experimental-web-platform-features\`) starting in Chrome 157
- [github.io](https://niek.github.io/chrome-features) *(niek.github.io)*
  > \*\*Details:\*\* This proposal builds on the established W3C/WICG \*Capability Delegation\* infrastructure (which originally allowed \`postMessage()\` capability transfers from parent frames to embedded cross-origin iframes for ...
- [googleusercontent.com](https://doc-3qv0-09ag-issuetracker.googleusercontent.com/issues/542314185) *(doc-3qv0-09ag-issuetracker.googleusercontent.com)*
  > \*\*Details:\*\* This proposal builds on the established W3C/WICG \*Capability Delegation\* infrastructure (which originally allowed \`postMessage()\` capability transfers from parent frames to embedded cross-origin iframes for ...

#### 🔗 Inbound Citations & Reverse Links

- [\[Notifications\] SW popup capability delegation by chromium-wpt-export-bot · Pull Request #63442 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63442) *(github.com)* *(Cites: `https://chromestatus.com/feature/5091965583622144`)*
  > \[Notifications\] SW popup capability delegation by chromium-wpt-export-bot · Pull Request #63442 · web-platform-tests/wpt · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appea...
- [\[blink-dev\] Re: Intent to Prototype: Capability delegation for pop-ups](http://www.mail-archive.com/blink-dev@chromium.org/msg17131.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091965583622144`)*
  > \[blink-dev\] Re: Intent to Prototype: Capability delegation for pop-ups Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: Capability delegation for pop-ups 'Dan Murphy' via blink-dev Thu, 06 Aug 2...
- [\[blink-dev\] Ready for Developer Testing: Popup Capability Delegation](http://www.mail-archive.com/blink-dev@chromium.org/msg17714.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091965583622144`)*
  > \[blink-dev\] Ready for Developer Testing: Popup Capability Delegation Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Popup Capability Delegation Chromestatus Mon, 12 Oct 2026 20:30:04 -0700...
- [\[blink-dev\] Intent to Prototype: Capability delegation for pop-ups](http://www.mail-archive.com/blink-dev@chromium.org/msg17106.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091965583622144`)*
  > \[blink-dev\] Intent to Prototype: Capability delegation for pop-ups Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Capability delegation for pop-ups Chromestatus Mon, 03 Aug 2026 15:47:20 -0700 Con...

#### 📚 Platform Documentation & References

- [samples/service-worker/capability-delegation-popup/README.md at gh-pages · GoogleChrome/samples · GitHub](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/capability-delegation-popup/README.md) *(github.com)*
- [w3.org](https://www.w3.org/groups/cg/webdx/activity) *(w3.org)*
- [\[Notifications\] SW popup capability delegation by chromium-wpt-export-bot · Pull Request #63442 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63442) *(github.com)*
- [Explainer: Capability delegation for popup windows by dmurph · Pull Request #41 · WICG/capability-delegation · GitHub](https://github.com/WICG/capability-delegation/pull/41) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Popup Capability Delegation Demo](https://googlechrome.github.io/samples/service-worker/capability-delegation-popup/index.html)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (44 found across 11 planned queries, 4 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 8 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (1 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (7 found, 4 verified)
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

---

<a id="6208452397498368-source-specific-multicast-for-direct-sockets-api"></a>
### [Source Specific Multicast for Direct Sockets API](https://chromestatus.com/feature/6208452397498368)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6208452397498368](https://chromestatus.com/feature/6208452397498368) · [chromestatuslite.com/feature/6208452397498368](https://chromestatuslite.com/feature/6208452397498368)
- **Specification:** [https://wicg.github.io/direct-sockets/#dom-multicastgroupoptions-sourceaddress](https://wicg.github.io/direct-sockets/#dom-multicastgroupoptions-sourceaddress)
- **Chromium Bug:** [https://issues.chromium.org/issues/461262401](https://issues.chromium.org/issues/461262401)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Adds Source-Specific Multicast (SSM) support to the Direct Sockets API, allowing Isolated Web Apps to optionally specify a source address when joining multicast groups to receive UDP packets only from that source. Without a source address, joinGroup() uses Any-Source Multicast (ASM), which receives packets from any source sending to the group. SSM is essential to using multicast outside of private networks, simplifying packet routing, and filtering traffic at the network level by source address, which mitigates spoofing and denial-of-service attacks.

> **Motivation:** RFC 8815 deprecates ASM for inter-domain use due to security vulnerabilities and operational complexity.  Without SSM support, developers building multicast applications in Isolated Web Apps face several problems:  Limited deployment scenarios: Applications are restricted to controlled private networks where all sources are trusted, preventing use ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 145 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** Shipping enabled by default in Chrome 158 for desktop Isolated Web Apps (IWAs), Source-Specific Multicast (SSM) brings RFC 4607 and RFC 8815 compliance to the Direct Sockets API by allowing source-filtered UDP multicast group joins via an optional source address. The capability is targeted at high-throughput live streaming, decentralized content delivery, and enterprise IoT scenarios without requiring application-layer packet filtering. However, because the Direct Sockets parent architecture remains exclusively confined to Chromium-managed isolated environments, cross-browser consensus is non-existent.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams building niche enterprise apps, kiosk hardware, or IWA-based streaming clients should feature-detect SSM support by checking whether joined multicast groups return structured membership objects rather than strings. For general web or cross-browser applications, avoid relying on Direct Sockets SSM and continue using server-relayed WebTransport or WebRTC architectures.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/feature/6208452397498368?gate=5109346174369792) *(cr-status.appspot.com)*
  > \*\*Source-Specific Multicast (SSM) for Direct Sockets API\*\* extends the networking capabilities of \*\*Isolated Web Apps (IWAs)\*\* This addresses \*\*RFC 8815\*\* (which deprecated ASM for inter-domain use due to operational com...
- [google.com](https://issuetracker.google.com/issues/573660067/resources) *(issuetracker.google.com)*
  > \*\*Source-Specific Multicast (SSM) for Direct Sockets API\*\* extends the networking capabilities of \*\*Isolated Web Apps (IWAs)\*\* With SSM, developers can provide an optional \`sourceAddress\` parameter
- [appspot.com](https://cr-status.appspot.com/feature/6208452397498368?gate=6235246081212416) *(cr-status.appspot.com)*
  > \*\*Entry:\*\* \*Source Specific Multicast for Direct Sockets API\* \*\*Coverage:\*\* Chromium's platform status outlines the timeline, feature dependencies, and motivation
- [google.com](https://issuetracker.google.com/issues/573660067) *(issuetracker.google.com)*
  > Inspecting \`joinedGroups\`, which returns \`MulticastMembership\` objects (\`{ groupAddress, sourceAddress }\`) for SSM groups while retaining strings for ASM groups \*\*Developer Feedback:\*\* Contributions and discussions (nota...
- [Multicast in the Browser Direct Sockets Enable Isolated Web Apps on TreeDN](https://datatracker.ietf.org/meeting/124/materials/slides-124-mboned-multicast-in-the-browser-direct-sockets-enable-isolated-web-apps-on-treedn-00) *(datatracker.ietf.org)*
  > \*\*Sources:\*\* IETF presentations (\*Multicast in the Browser\*, \*Media over QUIC\*) and open web architecture proposals Demonstrations at IETF forums showcased how SSM in IWAs facilitates decentralized live video feeds and A...
- [Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](https://groups.google.com/a/chromium.org/g/blink-dev/c/vMmLZVd7rQI) *(groups.google.com · 2026-02-21T00:00:00)*
  > Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#x...

#### 🔗 Inbound Citations & Reverse Links

- [Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](https://groups.google.com/a/chromium.org/g/blink-dev/c/vMmLZVd7rQI) *(groups.google.com · 2026-02-21T00:00:00)* *(Cites: `https://chromestatus.com/feature/6208452397498368`)*
  > Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#x...
- [\[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg15911.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Ch...
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17818.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Mike Taylor Wed, 21 ...
- [\[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17733.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Chromestatus Wed, 14 Oct 202...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/WICG/direct-sockets/issues/80) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Source Specific Multicast for Direct Sockets API Demo](https://blockcast.network/live)
- [Source Specific Multicast for Direct Sockets API Demo](https://chromewebstore.google.com/detail/multicast-gateway-beacon/djikmiecejmojgcglkfmihhkfgekjlaj)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (48 found across 12 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 6 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5191512456560640-import-text-text-modules"></a>
### [Import Text (Text Modules)](https://chromestatus.com/feature/5191512456560640)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5191512456560640](https://chromestatus.com/feature/5191512456560640) · [chromestatuslite.com/feature/5191512456560640](https://chromestatuslite.com/feature/5191512456560640)
- **Specification:** [https://tc39.es/proposal-import-text](https://tc39.es/proposal-import-text)
- **Chromium Bug:** [https://issues.chromium.org/issues/494350643](https://issues.chromium.org/issues/494350643)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `In development`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/text-modules) (Chrome: `155`, Firefox: `153`, Safari: `—`) · *group-level data: web-features [`text-modules`](https://webstatus.dev/features/text-modules)*

#### 📝 Overview

A TC39 proposal to add module \`import … with { type: "text" }\` statements to JavaScript. The import attribute loads text data as a string value.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 140 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"import text modules tc39 stage"`, `"tc39 proposal import text browser support status"`, `"import with type text safari webkit mozilla firefox"`
- **Analysis:** The TC39 'Import Text' proposal has advanced to Stage 3 and shipped enabled by default in both Firefox 153 and Chrome 155, bringing native string module imports into the ECMAScript module system. By leveraging the import attributes syntax (\`with { type: 'text' }\`), browsers treat the requested resource as UTF-8 text and expose it as a synthetic module with a single default export. While WHATWG HTML and Fetch integrations are established, the feature currently sits at limited baseline availability while Safari completes implementation.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams deploying unbundled native ESM should avoid static text module imports in public production code until Safari ships support, as an unsupported static import halts evaluation of the entire module graph. Instead, continue relying on bundler loaders for build-time compilation, or use dynamic import with a fallback to fetch() when progressive enhancement is required.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [syedtasavour.com](https://syedtasavour.com/journal/javascript-text-modules-import-with-type-text) *(syedtasavour.com)*
  > \*\*Text Modules\*\* is a TC39 standard proposal (advanced through Stage 3) that integrates with the ECMAScript \*\*Import Attributes\*\* syntax to allow plain text resources to be loaded directly as string values \*\*Default Expo...
- [medium.com](https://medium.com/@divyanshu.1810/node-js-just-added-native-text-file-imports-8f6120676665) *(medium.com)*
  > \*\*Mandatory Attribute:\*\* The \`with { type: "text" }\` clause is strictly required to prevent arbitrary JavaScript execution and MIME ambiguity js
- [google.com](https://groups.google.com/a/mozilla.org/g/dev-platform/c/ODyKcu3PNdc) *(groups.google.com)*
  > \*\*Discussion:\*\* Championed in TC39 and WHATWG by Mozilla engineers (including Eemeli Aro), the feature was standardized across the WHATWG HTML and Fetch specs and enabled in Firefox (Firefox 153) \*\*Significance:\*\* Highli...
- [olliewilliams.xyz](https://olliewilliams.xyz/blog/no-build) *(olliewilliams.xyz)*
  > \*\*Ecosystem Perspective:\*\* Discusses how web standards have steadily absorbed responsibilities originally pioneered by Webpack loaders (such as \`raw-loader\` or \`asset/source\`) Alongside JSON and CSS modules, native text ...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17403.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Daniel Bratell Wed, 09 Sep 2026 07:34:24 -0700 LGTM1 (Stage 3 TC...
- [\[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17364.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Import Text (Text Modules) Nikolaos Papaspyrou Thu, 03 Sep 2026 12:54:19 -0700 \*Contact emails\* \[em...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17403.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Daniel Bratell Wed, 09 Sep 2026 07:34:24 -0700 LGTM1 (Stage 3 TC...
- [\[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17364.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Import Text (Text Modules) Nikolaos Papaspyrou Thu, 03 Sep 2026 12:54:19 -0700 \*Contact emails\* \[em...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17420.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-import-text`)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Vladimir Levin Wed, 09 Sep 2026 09:19:55 -0700 LGTM3 On Wednesda...
- [\[dev-platform\] Intent to protoype: Importing text modules](http://www.mail-archive.com/dev-platform@mozilla.org/msg01760.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11933`)*
  > \[dev-platform\] Intent to protoype: Importing text modules Skip to site navigation (Press enter) \[dev-platform\] Intent to protoype: Importing text modules 'Eemeli Aro' via \[email&#160;protected\] Wed, 15 Apr 2026 07:41:48 ...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-30 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0004.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11933`)*
  > (1 by mikewest) https://github... workers\] - #12151 Add controls attribute to img (1 by annevk) https://github.com/whatwg/html/pull/12151 \[addition/proposal\] \[topic: img\] - #11933 &lt;strong&gt;Add text imports&lt;/strong&gt; (3 by ...

#### 📚 Platform Documentation & References

- [Import attributes - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/source) *(developer.mozilla.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-30 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0004.html) *(lists.w3.org)*
- [Implementation tracking · Issue #12 · tc39/proposal-import-text · GitHub](https://github.com/tc39/proposal-import-text/issues/12) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (66 found across 14 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(group "text-modules", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "text-modules" has no test results)* · `Sources cited by the AI synthesis` (2 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 3 · Standards Comments Read: 0

---

<a id="5138797158334464-web-bluetooth-make-bluetoothremotegattserver-an-eventtarget"></a>
### [Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](https://chromestatus.com/feature/5138797158334464)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5138797158334464](https://chromestatus.com/feature/5138797158334464) · [chromestatuslite.com/feature/5138797158334464](https://chromestatuslite.com/feature/5138797158334464)
- **Specification:** [https://pr-preview.s3.amazonaws.com/hjanuschka/web-bluetooth/pull/672.html#bluetoothremotegattserver](https://pr-preview.s3.amazonaws.com/hjanuschka/web-bluetooth/pull/672.html#bluetoothremotegattserver)
- **Chromium Bug:** [https://issues.chromium.org/issues/40265040](https://issues.chromium.org/issues/40265040)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Negative` · Safari: `Oppose`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/web-bluetooth) (Chrome: `70`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`web-bluetooth`](https://webstatus.dev/features/web-bluetooth), shared with 12 other ChromeStatus features*

#### 📝 Overview

BluetoothRemoteGATTServer inherits from EventTarget, exposing the standard addEventListener(), removeEventListener(), and dispatchEvent() methods. This enables connection-level events to be dispatched directly on the GATT server.

> **Motivation:** BluetoothRemoteGATTServer represents an active GATT connection and needs to host connection-level events. Making it an EventTarget gives web applications the standard event-listener API needed by events such as the separately proposed maxwritewithoutresponsesizechanged event.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 140 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Shipping enabled by default in Chromium and Microsoft Edge 157, this update updates the Web IDL specification so that BluetoothRemoteGATTServer inherits directly from EventTarget. This architectural refactoring provides standard connection-level event dispatching capabilities on active GATT connections, laying the necessary groundwork for incoming features such as the maxwritewithoutresponsesizechanged event. However, because Web Bluetooth remains exclusive to Chromium-based engines, the broader web platform reach of this change is strictly localized.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams maintaining Web Bluetooth applications in Chromium can leverage standard addEventListener calls on the GATT server for connection-level telemetry, but must guard implementations with progressive feature detection (such as checking whether addEventListener is a function on the GATT instance). Applications should also retain default 20-byte packet fallbacks until companion MTU change APIs roll out broadly across target Chromium releases.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "It is there now. The JSON is updated every 48 hours. You can tell from the commit log on this repository...."
- Standards Activity (Mozilla): Latest discussion from @qdot: "I do not believe those that would be responsible for management and implementation of WebBluetooth are ready to discuss the viability and company posi..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Web Bluetooth](https://github.com/WebKit/standards-positions/issues/570) [closed] `position: oppose`, `concerns: privacy`, `concerns: security`, `topic: device apis`, `topic: app-like capabilities`, `from: Google`, `concerns: device independence`
  > *Latest discussion from @annevk: "It is there now. The JSON is updated every 48 hours. You can tell from the commit log on this repository...."*
- **Mozilla:** [Web Bluetooth](https://github.com/mozilla/standards-positions/issues/95) [closed] `venue: W3C CG`, `position: negative`
  > *Latest discussion from @qdot: "I do not believe those that would be responsible for management and implementation of WebBluetooth are ready to discuss the viability and company posi..."*

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5138797158334464?gate=6155787868176384) *(chromestatus.com)*
  > Recent developer resources, announcements, and tracking entries outline the Web Platform feature \*\*"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget"\*\* \*\*What it does:\*\* Updates the Web IDL specification so t...
- [google.com](https://issuetracker.google.com/issues/572027347) *(issuetracker.google.com)*
  > \*\*Source:\*\* \*Google Issue Tracker / MDN Documentation Request (Issue #572027347)\* \*\*Details:\*\* Documentation teams tracked updating the MDN reference documentation for \`BluetoothRemoteGATTServer\` to reflect its new inher...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17833.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTar...
- [\[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17579.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helm...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17633.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTar...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17603.html) *(mail-archive.com)*
  > &gt; &gt; \*Blink component\* &gt; Blink&gt;Bluetooth ... host connection-level events. &lt;strong&gt;Making it an EventTarget gives web &gt; applications the standard event-listener API needed by events such as the &gt; separat...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17833.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5138797158334464`)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTar...
- [\[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17579.html) *(mail-archive.com)* *(Cites: `https://github.com/WebBluetoothCG/web-bluetooth/pull/672`)*
  > \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helm...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17633.html) *(mail-archive.com)* *(Cites: `https://pr-preview.s3.amazonaws.com/hjanuschka/web-bluetooth/pull/672.html#bluetoothremotegattserver`)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTar...

#### 📚 Platform Documentation & References

- [w3.org](https://lists.w3.org/Archives/Public/public-web-bluetooth-log/2026Aug/0009.html) *(lists.w3.org)*
- [Add BluetoothRemoteGATTServer.maxWriteWithoutResponseSize by hjanuschka · Pull Request #672 · whatwg/bluetooth](https://github.com/whatwg/bluetooth/pull/672) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `web-bluetooth` on [wpt.fyi](https://wpt.fyi/results?q=feature:web-bluetooth) (via webstatus.dev) — stable: Chrome 0.6% · Edge 3.2% · Firefox 0.6% · Safari 0.6%; experimental: Chrome 100% · Edge 4.5% · Firefox 0.6% · Safari 0.6%

#### 🌐 Web-features Group Context

*group-level data: web-features [`web-bluetooth`](https://webstatus.dev/features/web-bluetooth), shared with 12 other ChromeStatus features*

- **Chrome usage:** 0.00001% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/105))
- **Mozilla:** negative ([standards position](https://github.com/mozilla/standards-positions/issues/95))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 12 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 3 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "web-bluetooth", shared with 12 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "web-bluetooth": Chrome 0.6% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 8

---

<a id="5148774971342848-webtransport-datagram-readable-stream-type"></a>
### [WebTransport Datagram readable stream type](https://chromestatus.com/feature/5148774971342848)

- **Milestone:** Chrome 155 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5148774971342848](https://chromestatus.com/feature/5148774971342848) · [chromestatuslite.com/feature/5148774971342848](https://chromestatuslite.com/feature/5148774971342848)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransportoptions-datagramsreadabletype](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-datagramsreadabletype)
- **Chromium Bug:** [https://issues.chromium.org/issues/547572475](https://issues.chromium.org/issues/547572475)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `Positive` · Safari: `In development`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

#### 📝 Overview

Adds the  WebTransportOptions.datagramsReadableType  constructor option. By default, incoming WebTransport Datagrams are exposed through a default  ReadableStream . Applications that require BYOB reading can request a readable byte stream by setting  datagramsReadableType: "bytes" .

> **Motivation:** WebTransport Datagrams are discrete messages rather than an undifferentiated byte sequence. A readable byte stream can lose empty Datagrams and can lose message boundaries when BYOB reads use a minimum byte count spanning multiple Datagrams.  Making a default  ReadableStream  the default preserves Datagram boundaries and empty Datagrams. Applicatio...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 140 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"webtransport datagram readable stream type"`, `"WebTransport datagramsReadableType"`
- **Analysis:** The WebTransport Datagram readable stream type feature introduces the datagramsReadableType constructor option, allowing developers to switch between default chunked ReadableStreams that preserve datagram boundaries and readable byte streams optimized for BYOB buffer reuse. Currently in developer trial behind a flag in Chromium, this enhancement addresses edge cases where byte streams coalesced discrete datagrams or dropped zero-length payloads. While the core WebTransport API has baseline cross-browser support, this refinement standardizes datagram streaming semantics across the W3C WebTransport Working Group.

**Key Recommendations & Takeaways:**
- Actionable Advice: Applications should continue utilizing standard chunk-based datagram consumption for cross-browser production code to ensure message integrity and broad compatibility. Teams with intensive zero-copy throughput requirements can prototype datagramsReadableType set to 'bytes' with 64 KiB BYOB read buffers in Chromium developer trials using feature detection and fallback wrappers.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [openpwa.net](https://openpwa.net/reference/capabilities/webtransport) *(openpwa.net)*
  > readable\` \*\*Byte stream mode (\`datagramsReadableType: "bytes"\`)\*\*: Converts the stream into a readable byte stream
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > By default, incoming WebTransport Datagrams are exposed through a default ReadableStream . &lt;strong&gt;Applications that require BYOB reading can request a readable byte stream by setting datagramsReadableType: &quot;bytes&q...
- [googleusercontent.com](https://doc-2gh0-0gig-issuetracker.googleusercontent.com/issues/571879167) *(doc-2gh0-0gig-issuetracker.googleusercontent.com)*
  > \*\*MDN Content Tracking\*\*: Active documentation tracking issues (\*"Document WebTransport Datagram API updates: writable streams, priority, datagramsReadableType"\*) reflect changes to the \`WebTransport()\` constructor and \`...
- [googleusercontent.com](https://doc-1jrg-48u0-issuetracker.googleusercontent.com/issues/571879167/resources) *(doc-1jrg-48u0-issuetracker.googleusercontent.com)*
  > \*\*MDN Content Tracking\*\*: Active documentation tracking issues (\*"Document WebTransport Datagram API updates: writable streams, priority, datagramsReadableType"\*) reflect changes to the \`WebTransport()\` constructor and \`...
- [chromestatus.com](https://chromestatus.com/feature/5148774971342848/activity) *(chromestatus.com)*
  > Attempting to acquire a BYOB reader on a standard connection without this flag explicitly set will throw a \`TypeError\` \*\*WebKit / Safari\*\*: Safari earlier supported an experimental \`datagramsReadableMode\`
- [shiguredo.app](https://moqt-devtools.shiguredo.app/webtransport-devtools) *(moqt-devtools.shiguredo.app)*
  > Real-time networking frameworks—such as implementations for \*\*MOQT (Media over QUIC Transport)\*\* (e.g., \`moqt-js\`) and diagnostic tools like \*\*WebTransport DevTools\*\*—have surfaced options to toggle \`datagramsReadableTyp...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17839.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5148774971342848`)*
  > \[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type Chromestatus Wed, 21 Oct 2026 13:52:50 -...

#### 📚 Platform Documentation & References

- [w3.org](https://www.w3.org/wiki/WebTransport/Meetings2023) *(w3.org)*
- [webtransport/index.bs at main · w3c/webtransport](https://github.com/w3c/webtransport/blob/main/index.bs) *(github.com)*
- [github.com](https://github.com/shiguredo/moqt-js) *(github.com)*
- [\`pullDatagrams\` errors \`datagrams.readable\` on a zero-length datagram when \`datagramsReadableType\` is \`"bytes"\` · Issue #795 · w3c/webtransport](https://github.com/w3c/webtransport/issues/795) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 42.3% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 70.1% · Safari 73%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (47 found across 12 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 9 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 17 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 42.3% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5094058497277952-webtransport-reliability-attributes"></a>
### [WebTransport reliability attributes](https://chromestatus.com/feature/5094058497277952)

- **Milestone:** Chrome 158 (Enabled by default) · first listed in Chrome 155
- **ChromeStatus:** [chromestatus.com/feature/5094058497277952](https://chromestatus.com/feature/5094058497277952) · [chromestatuslite.com/feature/5094058497277952](https://chromestatuslite.com/feature/5094058497277952)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransport-reliability](https://www.w3.org/TR/webtransport/#dom-webtransport-reliability)
- **Chromium Bug:** [https://issues.chromium.org/issues/545636884](https://issues.chromium.org/issues/545636884)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

#### 📝 Overview

Adds the WebTransport.reliability instance attribute and static WebTransport.supportsReliableOnly attribute. These APIs indicate whether the user agent supports WebTransport over exclusively reliable connections and whether an established session supports unreliable transport such as datagrams.  In Chromium, reliability initially returns "pending" and changes to "supports-unreliable" after an HTTP/3 WebTransport connection is established.  Since Chromium does not currently support HTTP/2 fallback,  WebTransport.supportsReliableOnly returns false; any successfully established session uses HTTP/3 and supports unreliable datagrams.

> **Motivation:** WebTransport may operate over connections with different reliability capabilities. Applications such as games, interactive media, and real-time collaboration tools need to know whether unreliable datagrams are available before selecting their transport strategy.  WebTransport.supportsReliableOnly  reports whether the user agent supports WebTranspor...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 140 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** The WebTransport reliability attributes introduce standardized capability detection via the static WebTransport.supportsReliableOnly property and the session-level WebTransport.reliability property. Enabled by default in Chrome 158, this feature allows applications to cleanly determine whether an endpoint supports unreliable datagrams (HTTP/3 over QUIC) or is limited to reliable streams (such as HTTP/2 fallback). While core WebTransport has reached broad Baseline availability, this incremental introspection API formalizes handling for corporate networks and restricted environments where UDP might be blocked.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams deploying WebTransport for gaming, audio/video streaming, or low-latency sync should check for 'reliability' on established sessions via progressive enhancement. After awaiting the transport ready promise, inspect transport.reliability: if it reports 'supports-unreliable', proceed with datagram pipelines, but ensure you maintain an active stream-based fallback whenever 'reliable-only' is encountered.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *In developer trial (Behind a flag)* to *Enabled by default*
- 📰 **2 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [WebTransport and WHIP-over-WebTransport - Fora Soft](https://www.forasoft.com/learn/video-streaming/articles-streaming/webtransport-whip) *(forasoft.com)*
  > \`"supports-unreliable"\`: The connection operates over HTTP/3 (QUIC) and supports both unreliable datagrams and reliable streams Low-latency applications (such as game netcode, live media ingest, and Media over QUIC / MoQ...
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > supportsReliableOnly\` returns \`false\` because Chromium does not yet support HTTP/2 fallback reliability\` transitions from \`"pending"\` to \`"supports-unreliable"\`
- [chromestatus.com](https://chromestatus.com/feature/5089961022980096) *(chromestatus.com)*
  > Developer tool digests and Chromium platform changelogs track the release of these reliability attributes alongside other emerging WebTransport enhancements, such as \`datagramsReadableType: "bytes"\` (BYOB reader support)...
- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17710.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Alex Russell Mon, 12 Oct 2026 11:57:46 -0700 L...
- [\[blink-dev\] Intent to Prototype: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17340.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Chromestatus Tue, 01 Sep 2026 10:05:04 -0700...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17713.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Mike Taylor Mon, 12 Oct 2026 16:45:55 ...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17710.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Alex Russell Mon, 12 Oct 2026 11:57:46 -0700 L...
- [\[blink-dev\] Intent to Prototype: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17340.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Chromestatus Tue, 01 Sep 2026 10:05:04 -0700...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17713.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Mike Taylor Mon, 12 Oct 2026 16:45:55 ...
- [\[blink-dev\] Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17682.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > \[blink-dev\] Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport reliability attributes Chromestatus Wed, 07 Oct 2026 10:23:32 -0700 Contact e...
- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17711.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#transport-modes`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes 'Dan Clark' via blink-dev Mon, 12 Oct 2026 13:...

#### 📚 Platform Documentation & References

- [WebTransport: reliability property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/reliability) *(developer.mozilla.org)*
- [WebTransport: supportsReliableOnly static property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/supportsReliableOnly_static) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransport/index.md?plain=1) *(github.com)*
- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [2007783 - Add support for WebTransport supportsReliableOnly](https://bugzilla.mozilla.org/show_bug.cgi?id=2007783) *(bugzilla.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 42.3% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 70.1% · Safari 73%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 12 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 17 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 42.3% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5261280285949952-overscroll-areas"></a>
### [Overscroll Areas](https://chromestatus.com/feature/5261280285949952)

- **Milestone:** Chrome 157 (Origin trial)
- **ChromeStatus:** [chromestatus.com/feature/5261280285949952](https://chromestatus.com/feature/5261280285949952) · [chromestatuslite.com/feature/5261280285949952](https://chromestatuslite.com/feature/5261280285949952)
- **Specification:** [https://github.com/w3c/csswg-drafts/pull/14532](https://github.com/w3c/csswg-drafts/pull/14532)
- **Chromium Bug:** [https://issues.chromium.org/443719046](https://issues.chromium.org/443719046)
- **Browser Signals:** Chrome: `Origin trial` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

This feature adds a set of primitives to allow elements to anchor to overscroll areas of other elements. It further allows these elements to be revealed with swipe gestures, similar to scrollers.

> **Motivation:** The web provides a rich set of animation properties and tie-ins to scrolling. What appears to be missing from the set is gesture interaction that allows content to be moved around in response to user swiping on the screen. For example, things like sidebar menu or pull to refresh are awkward to express today without script. Notably, it is possibly t...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 135 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"site:github.com/w3c/csswg-drafts "overscroll" reveal elements"`, `""overscroll areas" chrome w3c"`, `""Overscroll Areas" css"`
- **Analysis:** Overscroll Areas introduces declarative primitives enabling elements to anchor to scroll boundaries and reveal themselves via swipe gestures, addressing common mobile UI patterns like side drawers and pull-to-refresh without heavy script. The proposal originated in Open UI and CSSWG discussions and entered an Origin Trial in Chromium starting in Chrome 157. However, the underlying specification is still undergoing substantial design evolution, and formal cross-browser consensus has not yet been established.

**Key Recommendations & Takeaways:**
- Actionable Advice: Do not depend on Overscroll Areas in production, as syntax, HTML-versus-CSS opt-in mechanics, and accessibility semantics remain subject to breaking changes. Web teams building gestures should test the feature strictly in Chromium Origin Trials or behind experimental flags, while maintaining progressive enhancement with explicit button invokers and standard keyboard navigation for production applications.
- In active Origin Trial in Chrome 157. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://img120-dot-cr-status.appspot.com/feature/5261280285949952?gate=5148610274656256) *(img120-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [Re: \[blink-dev\] Intent to Experiment: Overscroll Areas](http://www.mail-archive.com/blink-dev@chromium.org/msg17624.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Overscroll Areas Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Overscroll Areas Chris Harrelson Wed, 30 Sep 2026 13:09:38 -0700 LGTM On Wed, Sep 30, 202...
- [\[blink-dev\] Intent to Prototype: Overscroll Gestures](https://www.mail-archive.com/blink-dev@chromium.org/msg14574.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Overscroll Gestures Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Overscroll Gestures Chromestatus Mon, 08 Sep 2025 07:53:42 -0700 Contact emails \[email&#160;prot...
- [\[blink-dev\] Ready for Developer Testing: Overscroll Gestures](http://www.mail-archive.com/blink-dev@chromium.org/msg16333.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Overscroll Gestures Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Overscroll Gestures Chromestatus Fri, 17 Apr 2026 11:44:16 -0700 Contact emails ...
- [\[blink-dev\] Intent to Experiment: Overscroll Areas](http://www.mail-archive.com/blink-dev@chromium.org/msg17620.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Overscroll Areas Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Overscroll Areas Chromestatus Wed, 30 Sep 2026 12:21:40 -0700 Contact emails \[email&#160;protecte...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Experiment: Overscroll Areas](http://www.mail-archive.com/blink-dev@chromium.org/msg17624.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5261280285949952`)*
  > Re: \[blink-dev\] Intent to Experiment: Overscroll Areas Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Overscroll Areas Chris Harrelson Wed, 30 Sep 2026 13:09:38 -0700 LGTM On Wed, Sep 30, 202...
- [\[blink-dev\] Intent to Prototype: Overscroll Gestures](https://www.mail-archive.com/blink-dev@chromium.org/msg14574.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5261280285949952`)*
  > \[blink-dev\] Intent to Prototype: Overscroll Gestures Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Overscroll Gestures Chromestatus Mon, 08 Sep 2025 07:53:42 -0700 Contact emails \[email&#160;prot...
- [Overscroll Gestures · Issue #1053 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1053) *(github.com · 2026-07-29T18:36:22)* *(Cites: `https://chromestatus.com/feature/5261280285949952`)*
  > Overscroll Gestures · Issue #1053 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [\[blink-dev\] Ready for Developer Testing: Overscroll Gestures](http://www.mail-archive.com/blink-dev@chromium.org/msg16333.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5261280285949952`)*
  > \[blink-dev\] Ready for Developer Testing: Overscroll Gestures Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Overscroll Gestures Chromestatus Fri, 17 Apr 2026 11:44:16 -0700 Contact emails ...
- [\[blink-dev\] Intent to Experiment: Overscroll Areas](http://www.mail-archive.com/blink-dev@chromium.org/msg17620.html) *(mail-archive.com)* *(Cites: `https://open-ui.org/components/overscroll-actions.explainer`)*
  > \[blink-dev\] Intent to Experiment: Overscroll Areas Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Overscroll Areas Chromestatus Wed, 30 Sep 2026 12:21:40 -0700 Contact emails \[email&#160;protecte...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/w3c/aria/issues/2785) *(github.com)*
- [github.com](https://github.com/WICG/overscroll-scrollend-events) *(github.com)*
- [\[scroll-animations?\] Proposal: Add overscroll gestures with ability to reveal elements · Issue #12750 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12750) *(github.com)*
- [github.com](https://github.com/openui/open-ui/issues/1457) *(github.com)*
- [\[css-overscroll-2\] Should OverscrollEvent be more specific to avoid conflicting with WICG proposal · Issue #14614 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/14614) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Overscroll Areas Demo](https://flackr.github.io/web-demos/html/overscrollcontainer)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (59 found across 12 planned queries, 6 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (3 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (7 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5167864517623808-web-haptics-javascript-api"></a>
### [Web haptics JavaScript API](https://chromestatus.com/feature/5167864517623808)

- **Milestone:** Chrome 156 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5167864517623808](https://chromestatus.com/feature/5167864517623808) · [chromestatuslite.com/feature/5167864517623808](https://chromestatuslite.com/feature/5167864517623808)
- **Chromium Bug:** [https://issues.chromium.org/issues/531787872](https://issues.chromium.org/issues/531787872)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Provides a JavaScript API for triggering semantic haptic feedback, such as hints, ticks, alignment confirmations, and boundary signals. User agents translate these semantic effects into platform-appropriate haptic feedback based on the available hardware and operating system.

> **Motivation:** Web developers currently have limited options for providing tactile feedback. The existing \`navigator.vibrate()\` API is primarily designed around mobile devices and requires developers to specify low-level vibration patterns. This does not map well to platforms that expose higher-level semantic haptic effects or different types of haptic hardware. ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 130 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Web Haptics" standards position webkit mozilla"`, `""Web Haptics API" WICG"`
- **Analysis:** The Web Haptics JavaScript API is an emerging WICG incubation championed by Microsoft and Chromium engineers that replaces low-level vibration patterns with high-level semantic feedback triggers like ticks, hints, alignments, and boundary signals. Currently in Developer Trial behind a flag in Chrome 156, the proposal shifts tactile feedback to an intent-driven model that maps naturally to native OS haptic engines while preventing device fingerprinting. However, formal consensus across other major engines remains unestablished, leaving it in an experimental, single-engine prototyping phase.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should treat tactile cues strictly as progressive enhancement, experimenting with the API behind Chromium flags in local or staging builds while avoiding production dependency until cross-engine positions solidify. Never rely on haptics as the sole confirmation of an action, and ensure all user interactions remain fully accessible through visual and auditory affordances.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Web Haptic Feedback: Why It Refuses to Be More Tactile](https://swmansion.com/blog/haptic-feedback-on-the-web-why-the-web-deliberately-refuses-to-be-as-tactile-as-native-apps) *(swmansion.com)*
  > Rather than having developers script hard-coded millisecond buzzing arrays (e.g., \`\[100, 50, 100\]\`), the new proposal allows developers to express \*tactile intent\* via predefined semantic effects—such as \`"hint"\`, \`"tick...
- [A HapticsDevice API for the Web](https://raw.githubusercontent.com/MicrosoftEdge/MSEdgeExplainers/main/HapticsDevice/explainer.md) *(raw.githubusercontent.com)*
  > # A HapticsDevice API for the Web Consider all sections required unless otherwise noted. Authors: \[Scott Low\](https://github.com/scottlow), \[Steve Becker\](https://github.com/SteveBeckerMSFT), \[Mario Bianucci\](https://git...
- [\[blink-dev\] Intent to Prototype: Web Haptics API](http://www.mail-archive.com/blink-dev@chromium.org/msg16948.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Web Haptics API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Web Haptics API 'Alexander Kyereboah' via blink-dev Wed, 08 Jul 2026 11:41:59 -0700 \*Contact emails\*...
- [How to Make Your Website Vibrate with Web Haptics – Tutorial Emka](https://tutorial.emka.web.id/2026/03/how-to-make-your-website-vibrate-with-web-haptics.html) *(tutorial.emka.web.id · 2026-03-04T00:00:00)*
  > How to Make Your Website Vibrate with Web Haptics &#8211; Tutorial Emka Skip to content Tutorial Emka How to Make Your Website Vibrate with Web Haptics by Felix Ibo-Bukhara \| Posted on March 4, 2026 Ever felt your phone ...
- [Web Haptics API \| MSEdgeExplainers](https://microsoftedge.github.io/MSEdgeExplainers/Haptics/explainer.html) *(microsoftedge.github.io)*
  > Given that, we prioritized syntax–semantics match — does the syntax honestly convey what the code does? A. Nested @haptic (primary) — an at-rule nested inside a style rule; fires when the parent selector starts matching....
- [Feel the Web — Haptics API](https://liminzhu.github.io/BlinkOn21HapticsTalk) *(liminzhu.github.io)*
  > Read the explainer &amp; leave feedback! ... Trigger phase control — exit / both in addition to enter-only (e.g. haptic on sidebar open and close) ... Illustrative — user agents may choose different mappings. ... Extendi...

#### 🔗 Inbound Citations & Reverse Links

- [A HapticsDevice API for the Web](https://raw.githubusercontent.com/MicrosoftEdge/MSEdgeExplainers/main/HapticsDevice/explainer.md) *(raw.githubusercontent.com)* *(Cites: `https://github.com/WICG/web-haptics`)*
  > # A HapticsDevice API for the Web Consider all sections required unless otherwise noted. Authors: \[Scott Low\](https://github.com/scottlow), \[Steve Becker\](https://github.com/SteveBeckerMSFT), \[Mario Bianucci\](https://git...
- [New incubation: Web Haptics API from Limin Zhu (Edge) on 2026-04-28 (public-new-work@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-new-work/2026Apr/0009.html) *(lists.w3.org)* *(Cites: `https://github.com/WICG/web-haptics`)*
  > Hi everyone, Per disucssion in Web Haptics API � Issue #262 � WICG/proposals&lt;https://github.com/WICG/proposals/issues/262&gt;, we adopted WICG/web-haptics: Web Haptics API&lt;https://&lt;strong&gt;github.com/WICG/web-haptic...
- [Re: New incubation: Web Haptics API from Marcos Caceres on 2026-04-28 (public-new-work@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-new-work/2026Apr/0010.html) *(lists.w3.org)* *(Cites: `https://github.com/WICG/web-haptics`)*
  > Issue #262 · WICG/proposals &lt;https://github.com/WICG/proposals/issues/262&gt;, we adopted WICG/web-haptics: Web Haptics API &lt;https://&lt;strong&gt;github.com/WICG/web-haptics&lt;/strong&gt;&gt; incubation into WICG.
- [\[blink-dev\] Intent to Prototype: Web Haptics API](http://www.mail-archive.com/blink-dev@chromium.org/msg16948.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/web-haptics`)*
  > \[blink-dev\] Intent to Prototype: Web Haptics API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Web Haptics API 'Alexander Kyereboah' via blink-dev Wed, 08 Jul 2026 11:41:59 -0700 \*Contact emails\*...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/WICG/web-haptics/blob/main/w3c-security-and-privacy.md) *(github.com)*
- [github.com](https://github.com/web-platform-tests/interop/issues/837) *(github.com)*
- [New incubation: Web Haptics API from Limin Zhu (Edge) on 2026-04-28 (public-new-work@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-new-work/2026Apr/0009.html) *(lists.w3.org)*
- [Re: New incubation: Web Haptics API from Marcos Caceres on 2026-04-28 (public-new-work@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-new-work/2026Apr/0010.html) *(lists.w3.org)*
- [Web Haptics API · Issue #262 · WICG/proposals](https://github.com/WICG/proposals/issues/262) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 11 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 3 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (15 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (2 found, 1 verified)
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5194104408506368-webtransport-headers-and-responseheaders"></a>
### [WebTransport headers and responseHeaders](https://chromestatus.com/feature/5194104408506368)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5194104408506368](https://chromestatus.com/feature/5194104408506368) · [chromestatuslite.com/feature/5194104408506368](https://chromestatuslite.com/feature/5194104408506368)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers)
- **Chromium Bug:** [https://issues.chromium.org/issues/551850821](https://issues.chromium.org/issues/551850821)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `In development`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

#### 📝 Overview

Adds support for passing custom HTTP request headers via WebTransportOptions and inspecting server response headers through the WebTransport instance. This allows web applications to supply metadata, authentication tokens, and custom parameters during the initial CONNECT handshake and access server-provided headers once the connection is established.

> **Motivation:** The WebTransport constructor requires support for custom HTTP request headers to address several technical limitations in authentication, routing, and capability negotiation.  Without custom headers, developers must pass authentication tokens in URL query strings, which exposes credentials in server logs and telemetry, or authenticate over an initi...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 130 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebTransport" "headers" "responseHeaders""`, `""WebTransport" custom headers responseHeaders blink-dev"`
- **Analysis:** The addition of custom request headers via WebTransportOptions and the readable responseHeaders property resolves a foundational architectural gap in the WebTransport specification. Shipping enabled by default in Chromium and Edge 156, the feature enables authentication, reverse-proxy routing, and capability negotiation during the initial HTTP CONNECT handshake. Supported by strong multi-engine consensus and tracked within Interop 2026 initiatives, it marks a significant step forward for production-grade real-time web networking.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams designing WebTransport architectures should modernize their connection flow to pass auth tokens and protocol metadata in the handshake options rather than query parameters. However, until WebKit and Gecko ship widespread stable support, production applications should feature-detect header support or maintain backward-compatible initial data stream authentication for fallback clients.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **1 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [webkit.org](https://results.webkit.org/commit?repository_id=webkit&id=319182%40main) *(results.webkit.org)*
  > \*\*Sources:\*\* \*W3C WebTransport Living Standard\*, \*WebKit Repository Commits\* The spec enforces that \`responseHeaders\` is exposed to JavaScript as an immutable \`Headers\` object upon transitioning to the \`"connected"\` stat...
- [googleusercontent.com](https://doc-1jrg-48u0-issuetracker.googleusercontent.com/issues/551850821) *(doc-1jrg-48u0-issuetracker.googleusercontent.com)*
  > The W3C specification finalized \`#dom-webtransportoptions-headers\` and the \`#dom-webtransport-responseheaders\` attribute
- [google.com](https://issuetracker.google.com/issues/551879993) *(issuetracker.google.com)*
  > dev (Interop 2026: Continuing to improve the web)\* responseHeaders\` alongside application protocol negotiation (\`protocols\`)
- [\[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17342.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Chromestatus Wed, 02 Sep 2026 07:28:08 -0700...
- [Re: \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17475.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; There&#x27;s an existing issue for WebTransport as a whole here: &gt;&gt;&gt; https://github.com/mozilla/standards-positions/issues/167 &gt;&gt;&gt; &gt;&gt;&gt; Because it is part ...
- [Re: \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17473.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; &gt;&gt; There&#x27;s an existing issue for WebTransport as a whole here: &gt;&gt; https://github.com/mozilla/standards-positions/issues/167 &gt;&gt; &gt;&gt; Because it is part of interop 2026 &gt;&gt;...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17342.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194104408506368`)*
  > \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Chromestatus Wed, 02 Sep 2026 07:28:08 -0700...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [Do we want to allow web developers to add headers of the CONNECT request? · Issue #263 · w3c/webtransport](https://github.com/w3c/webtransport/issues/263) *(github.com)*
- [Exposing headers of the CONNECT response · Issue #264 · w3c/webtransport](https://github.com/w3c/webtransport/issues/264) *(github.com)*
- [webtransport/explainer.md at main · w3c/webtransport](https://github.com/w3c/webtransport/blob/main/explainer.md) *(github.com)*
- [Constructor: validate options.headers (steps 30-32) next to the protocols validation · Issue #805 · w3c/webtransport](https://github.com/w3c/webtransport/issues/805) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 42.3% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 70.1% · Safari 73%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (60 found across 11 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 4 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 17 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 42.3% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5072259281715200-host-and-screenshot-restrictions-for-chromedebugger-api"></a>
### [Host and screenshot restrictions for chrome.debugger API](https://chromestatus.com/feature/5072259281715200)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5072259281715200](https://chromestatus.com/feature/5072259281715200) · [chromestatuslite.com/feature/5072259281715200](https://chromestatuslite.com/feature/5072259281715200)
- **Chromium Bug:** [https://g-issues.chromium.org/issues/533240995](https://g-issues.chromium.org/issues/533240995)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The \[\`chrome.debugger\` extension API\](https://developer.chrome.com/docs/extensions/reference/api/debugger) lets you send \[Chrome DevTools Prototcol\](https://chromedevtools.github.io/devtools-protocol/) commands to a specified \`target\`, for example, a tab, an iframe, or a service worker. When connecting (attaching) to a target, the API can now enforce permissions on managed browsers by validating enterprise host and screenshot policies.    On enterprise devices, some policies can restrict extensions from attaching the debugger using an all-or-nothing model at attach time (browser.debugger.attach()):  - For hosts, the \[ExtensionSettings\](https://chromeenterprise.google/policies/#ExtensionSettings) enterprise policy can be configured to block hosts for an extension, returning the error \`Host access is restricted by policy\`. - For screenshots, the enterprise policy \[DisableScreenshots\](https://chromeenterprise.google/policies/#DisableScreenshots) enterprise policy disables screenshot capture or Data Loss Prevention (DLP) rules apply, returning the error \`Screenshot capture is restricted by policy\`.  Developers can handle attach rejections gracefully or use higher-level APIs like \[\`chrome.scripting\`\](https://developer.chrome.com/docs/extensions/reference/api/scripting) and \[\`chrome.declarativeNetRequest\`\](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest) that support granular origin permissions in restricted enterprise environments.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 120 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"chrome debugger API host and screenshot restrictions chrome 155"`
- **Analysis:** Introduced in Chrome 155, this feature enforces enterprise host and screenshot policies at attach time for the extension-specific \`chrome.debugger\` API, adopting an all-or-nothing model that rejects \`chrome.debugger.attach()\` on managed browsers when host restrictions or screenshot/DLP bans are detected. Because Chrome DevTools Protocol commands operate beneath typical web origin sandboxes, Chromium engineers chose total attach rejection rather than granular per-target origin filtering. As a Chromium enterprise management mechanism for a proprietary extension API, it sits entirely outside the W3C standards track, with no implementation or active signals from Mozilla Gecko or Apple WebKit.

**Key Recommendations & Takeaways:**
- Actionable Advice: Extension developers must immediately wrap all \`chrome.debugger.attach()\` calls in defensive \`try...catch\` blocks to detect the specific error strings \`Host access is restricted by policy\` and \`Screenshot capture is restricted by policy\`. Wherever possible, teams should migrate automation workflows away from raw CDP debugger commands to granular Manifest V3 APIs such as \`chrome.scripting\` and \`chrome.declarativeNetRequest\`, which adhere properly to enterprise origin controls without triggering complete attach failures.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Penerapan kebijakan Enterprise yang lebih ketat untuk chrome.debugger di Chrome 155 \| Chrome for Developers](https://developer.chrome.com/blog/debugger-enterprise-policy-restrictions) *(developer.chrome.com)*
  > Penerapan kebijakan Enterprise yang lebih ketat untuk chrome.debugger di Chrome 155 \| Chrome for Developers Langsung ke konten utama / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polsk...
- [c-sharpcorner.com](https://www.c-sharpcorner.com/article/chrome-155-chrome-debugger-changes-what-extension-developers-need-to-know) *(c-sharpcorner.com)*
  > Skip to content C# Corner Search articles videos blogs forums interview questions articles Login Contribute Article Blog Video Ebook Interview Question Loading Upcoming Events View all 23 NOV AI Agents Conference 2026 - ...
- [extpower.dev](https://extpower.dev/blog/chrome-155-extension-automation-stopped-working) *(extpower.dev)*
  > New Enterprise Policy Safeguards"\* (EXTPOWER) debugger\` to capture screenshots and drive interactions
- [extensionlaunch.com](https://extensionlaunch.com/blog/chrome-155-extension-developers) *(extensionlaunch.com)*
  > \*"Chrome 155 for Extension Developers: Debugger Policy Errors, 'Rate it' Prompts and What to Test"\* (ExtensionLaunch)
- [Stricter enterprise policy enforcement for chrome.debugger in Chrome 155 \| Chrome for Developers](https://developer.chrome.com/blog/debugger-enterprise-policy-restrictions?hl=en) *(developer.chrome.com · 2026-09-07T21:16:38)*
  > // Promise-based (Manifest V3) try { await chrome.debugger.attach({ tabId }, &quot;1.3&quot;); } catch (error) { if (error.message.includes(&quot;Host access is restricted by policy&quot;)) { console.warn(&quot;Debugger ...
- [chrome.debugger \| API \| Chrome for Developers](https://developer.chrome.google.cn/docs/extensions/reference/api/debugger) *(developer.chrome.google.cn)*
  > Host restrictions: &lt;strong&gt;If enterprise policy ExtensionSettings configures blocked hosts (runtime\_blocked\_hosts) for an extension&lt;/strong&gt;, chrome.debugger.attach() is blocked on all targets with the error &quot;Host a...

#### 📚 Platform Documentation & References

- [bug(browser-relay): Chromium 155 rejects every chrome.debugger.attach ("Host access is restricted by policy"); relay only reports a generic timeout · Issue #16748 · can1357/oh-my-pi](https://github.com/can1357/oh-my-pi/issues/16748) *(github.com)*
- [Chrome/Edge 155: non-empty runtime\_blocked\_hosts now blocks chrome.debugger on every site · Issue #3 · drpwchen/kimi-webbridge-lockdown](https://github.com/drpwchen/kimi-webbridge-lockdown/issues/3) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 10 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 4 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (10 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (3 found, 3 verified)
- **Content Inspected:** Spec: ○ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5214647044145152-avoid-caching-module-failures"></a>
### [Avoid caching module failures](https://chromestatus.com/feature/5214647044145152)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5214647044145152](https://chromestatus.com/feature/5214647044145152) · [chromestatuslite.com/feature/5214647044145152](https://chromestatuslite.com/feature/5214647044145152)
- **Specification:** [https://github.com/whatwg/html/pull/10327](https://github.com/whatwg/html/pull/10327)
- **Chromium Bug:** [https://issues.chromium.org/issues/534781954](https://issues.chromium.org/issues/534781954)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`

#### 📝 Overview

Currently web developers cannot retry failed module loads, as these failures are being cached (and retries just result in immediate failures). This change to the module loading behavior enables failed module loads to be manually retried (e.g. by calling \`import()\` again), solving real developer (and user) pain when it comes to using modules over unstable networks.

> **Motivation:** This change enables developers to retry failed module loads (e.g. due to network failures).

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 100 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** The WHATWG HTML specification update to avoid caching module fetch failures resolves a notorious limitation in JavaScript module loading by allowing failed fetches—such as transient network drops, 5xx server errors, or MIME mismatches—to be retried via subsequent dynamic import calls without requiring a full page refresh. The change has achieved robust cross-engine consensus, shipping enabled by default in Chromium and landing across Firefox and WebKit implementations. This architectural update formally shifts the module map's design philosophy from strict failure determinism to high application availability.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should start introducing retry logic (such as exponential backoff inside route loaders and React/Vue error boundaries) around dynamic imports today, while temporarily retaining fallback cache-busting queries or reload prompts for users on older browser engine versions until broad ecosystem coverage is established.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **1 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [trade-assistance.com](https://trade-assistance.com/blog/chrome-stops-caching-failed-module-imports-retry-dynamic-import) *(trade-assistance.com)*
  > Historically, the HTML specification mandated that browsers store module fetch results in a per-page \*\*module map\*\* to ensure every module was evaluated only once However, this behavior extended to \*\*failed module fetche...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17447.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures 'Dan Clark' via blink-dev Mon, 14 Sep 2026 14:00:15 -0700 ...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17434.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 12:16:49 -0700 On T...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 08:43:49 -0700 \*Contact ema...

#### 🔗 Inbound Citations & Reverse Links

- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com · 2026-09-14T08:09:53)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17447.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures 'Dan Clark' via blink-dev Mon, 14 Sep 2026 14:00:15 -0700 ...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17434.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 12:16:49 -0700 On T...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 08:43:49 -0700 \*Contact ema...
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/whatwg/html/pull/10327`)*
  > 2055211 - Don't cache HTTP errors in the module map Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advanced Search New Bug Reports D...

#### 📚 Platform Documentation & References

- [Avoid caching module failures · Issue #4335 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4335) *(github.com)*
- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com)*
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-03 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0000.html) *(lists.w3.org)*
- [Retry failed dynamic import · Issue #80 · tc39/proposal-dynamic-import](https://github.com/tc39/proposal-dynamic-import/issues/80) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (54 found across 12 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (5 found, 2 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="4886345347629056-object-fit-and-object-position-apply-to-svg-documents-in-object-and-embed"></a>
### [object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](https://chromestatus.com/feature/4886345347629056)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/4886345347629056](https://chromestatus.com/feature/4886345347629056) · [chromestatuslite.com/feature/4886345347629056](https://chromestatuslite.com/feature/4886345347629056)
- **Specification:** [https://html.spec.whatwg.org/multipage/rendering.html#embedded-content-rendering-rules](https://html.spec.whatwg.org/multipage/rendering.html#embedded-content-rendering-rules)
- **Chromium Bug:** [https://issues.chromium.org/41302806](https://issues.chromium.org/41302806)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `No signal`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/object-fit) (Chrome: `32`, Firefox: `36`, Safari: `10`) · *group-level data: web-features [`object-fit`](https://webstatus.dev/features/object-fit)*

#### 📝 Overview

SVG documents loaded through &lt;object&gt; or &lt;embed&gt; are sized and positioned inside the element's content box according to the CSS object-fit and object-position properties, the same way &lt;img&gt; content is.  Previously Chrome ignored both properties for embedded SVG documents and always stretched the document viewport to the whole content box.

> **Motivation:** Authors use object-fit and object-position to control how replaced content is scaled and placed inside its box.  https://drafts.csswg.org/css-images-3/#the-object-fit https://drafts.csswg.org/css-images-3/#the-object-position  Currently, Chrome applies them to images and videos but ignores them for SVG documents loaded through &lt;object&gt; or &lt;embed&gt;, ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 100 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""object-fit" "object-position" "SVG" "<object>" "<embed>" blink-dev"`, `"Chromium "41302806" object-fit object-position SVG embed"`, `""SVGEmbeddedAsReplacedElement""`
- **Analysis:** Chrome 158 enables default support for applying CSS object-fit and object-position to SVG documents hosted in &lt;object&gt; and &lt;embed&gt; tags, resolving a decade-old inconsistency tracked in Chromium issue 41302806. The update aligns Blink with the HTML specification and CSS Images Module Level 3 by treating embedded SVGs as true replaced elements. This eliminates a prominent cross-browser discrepancy with Firefox, although full interoperability awaits an implementation from WebKit.

**Key Recommendations & Takeaways:**
- Actionable Advice: Developers can begin applying object-fit and object-position directly to SVG &lt;object&gt; and &lt;embed&gt; containers for Chromium and Firefox users, as default values preserve backward compatibility. However, continue testing in Safari and retain fallback viewBox sizing or aspect-ratio wrappers until WebKit resolves its corresponding implementation bug.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **3 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/4886345347629056/activity) *(img968-dot-cr-status.appspot.com)*
  > Chrome resolved this long-standing issue (tracked under Chromium Issue #41302806) behind the \`SVGEmbeddedAsReplacedElement\` flag, shipping it enabled by default \*\*Backward Compatibility / Interoperability:\*\* Because defa...
- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Intent to Ship & Release Inclusion:\*\* Published on the Chrome Platform Status dashboard and included in the Chrome Release Notes (rolling out default support around Chrome 157/158)
- [\[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17499.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in and Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in and Chro...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17515.html) *(mail-archive.com)*
  > \*Web Feature ID\* object-fit ...-images-3/#the-object-position Currently, Chrome applies them to images and videos but &lt;strong&gt;ignores them for SVG documents loaded through &lt;object&gt; or &lt;embed&gt;&lt;/strong&gt;, which ...
- [\[blink-dev\] Re: Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17511.html) *(mail-archive.com)*
  > &gt; https://drafts.csswg.org/css-images-3/#the-object-fit &gt; https://drafts.csswg.org/css-images-3/#the-object-position Currently, &gt; &lt;strong&gt;Chrome applies them to images and videos but ignores them for SVG documen...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17646.html) *(mail-archive.com)*
  > On Fri, Oct 2, 2026 at 9:34 AM ... out-of-process frames. I am implementing the fix and &gt; will upload the CLs shortly. &gt; &gt; &lt;strong&gt;This feature only covers SVG documents in &lt;object&gt; and &lt;embed&gt;&lt;/stro...

#### 📚 Platform Documentation & References

- [wpt/css/css-images/object-fit-contain-svg-001e.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/css-images/object-fit-contain-svg-001e.html) *(github.com)*
- [Apply object-fit and object-position to SVG in object/embed tags · Issue #726 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/726) *(github.com)*
- [object-fit and object-position are ignored for SVG embedded via &lt;object&gt; and &lt;embed&gt; by Ahmad-S792 · Pull Request #75745 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/75745) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `object-fit` on [wpt.fyi](https://wpt.fyi/results?q=feature:object-fit) (via webstatus.dev) — stable: Chrome 49.2% · Edge 49.2% · Firefox 97.6% · Safari 46.1%; experimental: Chrome 97.7% · Edge 97.7% · Firefox 96.9% · Safari 46.9%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 11 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 2 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (0 found, 0 verified) · `web-features mapping` *(group "object-fit", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "object-fit": Chrome 49.2% passing (stable))* · `Sources cited by the AI synthesis` (3 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5107682460696576-capability-elements-icon-only-mode"></a>
### [Capability Elements Icon-only mode](https://chromestatus.com/feature/5107682460696576)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5107682460696576](https://chromestatus.com/feature/5107682460696576) · [chromestatuslite.com/feature/5107682460696576](https://chromestatuslite.com/feature/5107682460696576)
- **Specification:** [https://w3c.github.io/mediacapture-extensions/#media-capture-html-elements](https://w3c.github.io/mediacapture-extensions/#media-capture-html-elements)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/permissions) (Chrome: `44`, Firefox: `46`, Safari: `16`) · *group-level data: web-features [`permissions`](https://webstatus.dev/features/permissions), shared with 5 other ChromeStatus features*

#### 📝 Overview

Introduces a new attribute to render Capability Elements(&lt;camera&gt;, &lt;microphone&gt; and &lt;geolocation&gt;) as compact icon buttons without text using a \`displaymode\` attribute. This gives developers flexible UI density for spatial layouts such as map controls and video floating trays while preserving native security guarantees and full screen reader accessibility.  This is an extension to the recently released Capability Elements https://chromestatus.com/feature/5153829504024576

> **Motivation:** Capability elements currently default to a horizontal button layout containing an icon and mandatory localized text that cannot be removed or customized. However, modern web layouts such as interactive maps and video conferencing floating trays rely heavily on compact, icon-only UI patterns. Providing a declarative display mode allows developers to...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 80 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"mozilla standards positions page-embedded permission control PEPC camera element"`, `""Capability Elements" "displaymode" camera microphone"`, `""Capability Elements" PEPC "icon-only""`, `"site:github.com/WebKit/standards-positions "PEPC" OR "Page-Embedded Permission" OR "Capability Element" OR "mediacapture""`
- **Analysis:** Capability Elements Icon-only mode introduces the declarative \`displaymode="icon-only"\` attribute to render native \`&lt;camera&gt;\`, \`&lt;microphone&gt;\`, and \`&lt;geolocation&gt;\` elements as compact, text-free controls suitable for tight layouts like map toolbars and video conferencing bars. While Chromium has enabled the mode by default starting in Chrome 157 to address persistent styling density complaints, the API remains exclusive to Blink. Cross-browser consensus remains fractured as competing engine vendors resist browser-restricted in-page controls.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat \`&lt;camera&gt;\`, \`&lt;microphone&gt;\`, and \`&lt;geolocation&gt;\` icon-only buttons as a progressive enhancement exclusively for Chromium browsers, pairing them with markup fallbacks that trigger traditional JavaScript permission and media capture APIs for Safari and Firefox users.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://polymer10-dot-cr-status.appspot.com/feature/5107682460696576/activity) *(polymer10-dot-cr-status.appspot.com)*
  > \*\*What it is:\*\* An extension to the \*\*Capability Elements\*\* suite (\`&lt;camera&gt;\`, \`&lt;microphone&gt;\`, and \`&lt;geolocation&gt;\`, which evolved from the earlier Page-Embedded Permission Control / PEPC \`&lt;permission&gt;\` tag) \*\*The Problem...
- [appspot.com](https://img680-dot-cr-status.appspot.com/feature/5107682460696576) *(img680-dot-cr-status.appspot.com)*
  > \*\*The Problem:\*\* Previously, Capability Elements rendered strictly as horizontal rectangular buttons containing both a browser-supplied icon and mandatory localized text (e.g., \*"Use camera"\* or \*"Share location"\*) that ...
- [chromegeek.com](https://www.chromegeek.com/chrome-157-beta-language-detector-android) *(chromegeek.com)*
  > \*\*Chrome 157 Beta Announcement:\*\* Details the introduction of \`displaymode="icon-only"\` alongside other major platform additions (such as the on-device Language Detector API on Android and HTML-in-canvas primitives)
- [permission.site](http://permission.site/media_capture_element.html) *(permission.site)*
  > Updated to demonstrate live \`&lt;camera displaymode="icon-only"&gt;\` and \`&lt;microphone displaymode="icon-only"&gt;\` implementations alongside fallback content
- [Chrome Release 157](https://chromestatuslite.com/?version=157) *(chromestatuslite.com)*
  > &lt;strong&gt;Introduces a new attribute to render Capability Elements(&lt;camera&gt;, &lt;microphone&gt; and &lt;geolocation&gt;) as compact icon buttons without text using a \`displaymode\` attribute&lt;/strong&gt;. This gives devel...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/mozilla/standards-positions/issues/1392) *(github.com)*
- [github.com](https://github.com/chromium/permission.site/blob/master/media_capture_element.html) *(github.com)*
- [Add icon-only mode demo and link subpages from index.html by strider29 · Pull Request #163 · chromium/permission.site](https://github.com/chromium/permission.site/pull/163) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `permissions` on [wpt.fyi](https://wpt.fyi/results?q=feature:permissions) (via webstatus.dev) — stable: Chrome 61.1% · Edge 66.7% · Firefox 66.7% · Safari 33.3%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 33.3%

#### 🌐 Web-features Group Context

*group-level data: web-features [`permissions`](https://webstatus.dev/features/permissions), shared with 5 other ChromeStatus features*

- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/19))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (51 found across 12 planned queries, 2 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (1 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "permissions", shared with 5 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "permissions": Chrome 61.1% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5188639100370944-mediasession-return-promiseundefined-from-setmicrophoneactive-and-setcameraactive"></a>
### [MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](https://chromestatus.com/feature/5188639100370944)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5188639100370944](https://chromestatus.com/feature/5188639100370944) · [chromestatuslite.com/feature/5188639100370944](https://chromestatuslite.com/feature/5188639100370944)
- **Specification:** [https://w3c.github.io/mediasession/#dom-mediasession-setmicrophoneactive](https://w3c.github.io/mediasession/#dom-mediasession-setmicrophoneactive)
- **Chromium Bug:** [https://crbug.com/576328036](https://crbug.com/576328036)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/media-session) (Chrome: `73`, Firefox: `82`, Safari: `15`) · *group-level data: web-features [`media-session`](https://webstatus.dev/features/media-session), shared with 11 other ChromeStatus features*

#### 📝 Overview

Updates navigator.mediaSession.setMicrophoneActive() and navigator.mediaSession.setCameraActive() to return a Promise&lt;undefined&gt; instead of undefined, matching the W3C Media Session specification. In a fully active document, the returned promise resolves with undefined; if the associated document is not fully active, it returns a promise rejected with an InvalidStateError DOMException.

> **Motivation:** When MediaSession.setMicrophoneActive() and MediaSession.setCameraActive() were originally specified and shipped in Chrome 93, their WebIDL return type was void (undefined). The W3C Media Session specification was subsequently updated (https://github.com/w3c/mediasession/pull/312) so that both methods return Promise&lt;undefined&gt; to support user agent...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 65 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** This change updates navigator.mediaSession.setMicrophoneActive() and setCameraActive() to return a Promise&lt;undefined&gt; rather than undefined, bringing Chromium into strict alignment with the W3C Media Session specification. The promise-based signature facilitates asynchronous capture-pause policies and user authorization prompts while resolving failing Web Platform Tests. With WebKit already shipping the async return type and Gecko tracking it for implementation, engine consensus on this WebIDL refinement is virtually unanimous.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams maintaining WebRTC and video calling web applications should wrap setMicrophoneActive() and setCameraActive() in async/await or append error handlers to handle potential InvalidStateError rejections from inactive documents. Because the returned promise resolves to undefined in active frames, existing code without await will continue functioning without regressions.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @jan-ivar: "We're interested in implementing this in \[bug 1874041\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1874041). We've also proposed it for Interop 2027 ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **Mozilla:** [Add video conferencing actions to the Media Session API spec](https://github.com/mozilla/standards-positions/issues/504) [open] 
  > *Latest discussion from @jan-ivar: "We're interested in implementing this in \[bug 1874041\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1874041). We've also proposed it for Interop 2027 ..."*

#### 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://cr-status.appspot.com/feature/5188639100370944) *(cr-status.appspot.com)*
  > Chrome Platform Status
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Coverage:\*\* Detailed in the \*\*Chrome Platform Status\*\* entry and release notes for \*\*Chrome 158\*\* (tracking bug \[#576328036\](https://issues.chromium.org/issues/576328036))
- [appspot.com](https://cr-status.appspot.com/feature/5188639100370944/activity) *(cr-status.appspot.com)*
  > \*\*Context & Motivation:\*\* When Chrome originally launched video-conferencing controls in Chrome 93, the return type was set to \`undefined\` The Chromium team updated the methods to align with the official W3C Media Sessio...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/w3c/mediasession/issues/317) *(github.com)*
- [Media Session](https://www.w3.org/TR/mediasession) *(w3.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `media-session` on [wpt.fyi](https://wpt.fyi/results?q=feature:media-session) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 44.4% · Safari 44.4%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 44.4% · Safari 44.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`media-session`](https://webstatus.dev/features/media-session), shared with 11 other ChromeStatus features*

- **Chrome usage:** 0.026% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/48))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/28))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (25 found across 11 planned queries, 2 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 4 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (0 found, 0 verified) · `web-features mapping` *(group "media-session", shared with 11 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "media-session": Chrome 66.7% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 2

---

