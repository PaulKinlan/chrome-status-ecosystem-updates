# 🌐 Chrome Web Platform Ecosystem Report — 2026-W46

> **Generated on:** 2026-11-09 | **Target Milestones:** Chrome 155, 156, 157, 158, 159
> **Search Engine:** Gemini (Google Grounded) + BRAVE | **Analysis Model:** Google Gemini (gemini-3.8-flash) | **AI synthesis:** 66 of 66 features
> **Momentum:** Momentum is the change in footprint since about four weeks ago, in tiers relative to the other features (43 of 66 features have an earlier number to compare with).
> ⏱️ **Partial run:** The crawl reached its 40-minute deadline (42 minutes in) and stopped starting features: 66 of 79 were investigated, and the other 13 are not in this report. They come first in the next crawl.

## 📊 Executive Snapshot

| Metric | Count | Description |
| :--- | :--- | :--- |
| **Features Tracked** | `66` | APIs & platform features analyzed across milestones |
| **High Ecosystem Momentum** | `6` | Features in the highest momentum tier (see Methodology) |
| **Multi-Engine Consensus** | `28` | Broad alignment across Chromium, Gecko, and WebKit |
| **Contested / Concerns** | `6` | Features with open vendor or security/privacy objections |
| **New Mentions This Week** | `622` | Net new articles, discussions, or standards updates |

## ⚡ Week-over-Week Ecosystem Deltas

### 🔄 Status Transitions

- [Add javascriptURLs option to SanitizerConfig and Sanitizer](#5169798320357376-add-javascripturls-option-to-sanitizerconfig-and-sanitizer): Moved from *Enabled by default* to **Enabled by default** in Chrome 159
- [WebTransport send groups and send-stream prioritization](#5235261159112704-webtransport-send-groups-and-send-stream-prioritization): Moved from *In developer trial (Behind a flag)* to **Enabled by default** in Chrome 159
- [WebTransport Datagram readable stream type](#5148774971342848-webtransport-datagram-readable-stream-type): Moved from *In developer trial (Behind a flag)* to **Enabled by default** in Chrome 159
- [Optional descriptors for registered custom properties](#5168674259468288-optional-descriptors-for-registered-custom-properties): Moved from *Enabled by default* to **Enabled by default** in Chrome 159
- [AccentColor & AccentColorText follows accent-color value](#6207138742534144-accentcolor-accentcolortext-follows-accent-color-value): Moved from *Enabled by default* to **Enabled by default** in Chrome 159
- [SpeechRecognitionResult Timestamps (WebSpeech API)](#5811907077472256-speechrecognitionresult-timestamps-webspeech-api): Moved from *In developer trial (Behind a flag)* to **Enabled by default** in Chrome 159
- [WebTransport receive stream](#5109912169480192-webtransport-receive-stream): Moved from *Enabled by default* to **Enabled by default** in Chrome 159
- [CSS corner shorthand properties ](#5152215540039680-css-corner-shorthand-properties-): Moved from *Enabled by default* to **Enabled by default** in Chrome 159
- [WebTransport Datagram writable streams and prioritization](#5183354944225280-webtransport-datagram-writable-streams-and-prioritization): Moved from *In developer trial (Behind a flag)* to **Enabled by default** in Chrome 159
- [Enhanced Canvas TextMetrics](#5075532483657728-enhanced-canvas-textmetrics): Moved from *Enabled by default* to **Enabled by default** in Chrome 159
- [WebTransport congestion control](#5180947573112832-webtransport-congestion-control): Moved from *Enabled by default* to **Enabled by default** in Chrome 159
- [WebTransport keying material export](#4860330806214656-webtransport-keying-material-export): Moved from *Enabled by default* to **Enabled by default** in Chrome 159
- [Prerendering cross-origin iframes](#5112398709129216-prerendering-cross-origin-iframes): Moved from *Enabled by default* to **Enabled by default** in Chrome 159
- [Scroll snap for single-axis scroll containers](#5086608215900160-scroll-snap-for-single-axis-scroll-containers): Moved from *Enabled by default* to **Enabled by default** in Chrome 159
- [MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](#5188639100370944-mediasession-return-promiseundefined-from-setmicrophoneactive-and-setcameraactive): Moved from *Enabled by default* to **Enabled by default** in Chrome 159

### 🚀 Momentum Shifts

- [CSS text-decoration-inset](#5178263526834176-css-text-decoration-inset): Shifted from *Moderate* to **High** momentum
- [Support for WebHID](#5172464636133376-support-for-webhid): Shifted from *Quiet* to **High** momentum
- [CSS position-visibility:anchor{s}-valid](#5136856479039488-css-position-visibilityanchors-valid): Shifted from *Quiet* to **Moderate** momentum
- [CSS text-overflow: &lt;string&gt; value](#6294595288825856-css-text-overflow-string-value): Shifted from *Quiet* to **Moderate** momentum
- [WebTransport receive stream](#5109912169480192-webtransport-receive-stream): Shifted from *Moderate* to **Emerging** momentum
- [WebTransport reliability attributes](#5094058497277952-webtransport-reliability-attributes): Shifted from *Moderate* to **Emerging** momentum
- [CSS corner shorthand properties ](#5152215540039680-css-corner-shorthand-properties-): Shifted from *Quiet* to **Emerging** momentum
- [Renewed HTML insertion&streaming methods](#5054329641893888-renewed-html-insertionstreaming-methods): Shifted from *Moderate* to **Emerging** momentum
- [CORS enforcement for Background Fetch](#6210300985606144-cors-enforcement-for-background-fetch): Shifted from *Emerging* to **Quiet** momentum

### 📰 Net New Publications & Discussions

- [HTML-in-canvas](#5172548013916160-html-in-canvas): +13 article(s), 11 discussion(s)
- [CSS text-decoration-inset](#5178263526834176-css-text-decoration-inset): +12 article(s)
- [CSS flow-start and flow-end alignment keywords](#5069051687731200-css-flow-start-and-flow-end-alignment-keywords): +11 article(s)
- [Add javascriptURLs option to SanitizerConfig and Sanitizer](#5169798320357376-add-javascripturls-option-to-sanitizerconfig-and-sanitizer): +11 article(s)
- [Support for WebHID](#5172464636133376-support-for-webhid): +20 article(s), 1 discussion(s)
- [Language Detector API on Android](#5087964794322944-language-detector-api-on-android): +5 article(s)
- [CSS4 text-decoration-skip-spaces](#4832783806627840-css4-text-decoration-skip-spaces): +17 article(s)
- [CSS position-visibility:anchor{s}-valid](#5136856479039488-css-position-visibilityanchors-valid): +9 article(s)
- [Pause media playback on not-visible iframes](#5082950457884672-pause-media-playback-on-not-visible-iframes): +5 article(s)
- [Long Animation Frames style and layout duration](#5171478175809536-long-animation-frames-style-and-layout-duration): +9 article(s)

### ✨ Newly Tracked Features

- [CSSImportRule.styleSheet ](#5123480866783232-cssimportrulestylesheet-) (Chrome 159, Enabled by default)
- [Background layer count independence ](#5144333908049920-background-layer-count-independence-) (Chrome 159, Enabled by default)
- [Regular Expression Buffer Boundaries](#5187917373898752-regular-expression-buffer-boundaries) (Chrome 159, Enabled by default)
- [Shared MessagePort for AudioWorklet](#5079784523694080-shared-messageport-for-audioworklet) (Chrome 159, Enabled by default)
- [Server Side Gemini Powered Scam Checks for Desktop](#5094379441225728-server-side-gemini-powered-scam-checks-for-desktop) (Chrome 155, Enabled by default)
- [WebTransport connection statistics](#5120203192139776-webtransport-connection-statistics) (Chrome 159, Enabled by default)
- [WebTransportError API alignment and serialization](#5158277221580800-webtransporterror-api-alignment-and-serialization) (Chrome 159, Enabled by default)
- [Deprecate and stop firing events during subframe removal](#5754395122860032-deprecate-and-stop-firing-events-during-subframe-removal) (Chrome 156, Origin trial)

---

## 📋 Features Index

| Feature | Milestone | Category | Momentum | Consensus | Week Delta |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [HTML-in-canvas](#5172548013916160-html-in-canvas) | Chrome 157 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +13 art / +11 msgs |
| [CSS text-decoration-inset](#5178263526834176-css-text-decoration-inset) | Chrome 157 | `Enabled by default` | **High** | Multi-Engine Consensus | ⚡ +12 art / +0 msgs |
| [CSS flow-start and flow-end alignment keywords](#5069051687731200-css-flow-start-and-flow-end-alignment-keywords) | Chrome 158 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +11 art / +0 msgs |
| [Add javascriptURLs option to SanitizerConfig and Sanitizer](#5169798320357376-add-javascripturls-option-to-sanitizerconfig-and-sanitizer) | Chrome 159 | `Enabled by default` | **High** | Partial Multi-Engine Interest | 🔄 Enabled by default |
| [Support for WebHID](#5172464636133376-support-for-webhid) | Chrome 158 | `Enabled by default` | **High** | Contested / Concerns Raised | ⚡ +20 art / +1 msgs |
| [Language Detector API on Android](#5087964794322944-language-detector-api-on-android) | Chrome 157 | `Enabled by default` | **High** | Contested / Concerns Raised | ⚡ +5 art / +0 msgs |
| [CSS4 text-decoration-skip-spaces](#4832783806627840-css4-text-decoration-skip-spaces) | Chrome 155 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +17 art / +0 msgs |
| [CSS position-visibility:anchor{s}-valid](#5136856479039488-css-position-visibilityanchors-valid) | Chrome 157 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +9 art / +0 msgs |
| [Pause media playback on not-visible iframes](#5082950457884672-pause-media-playback-on-not-visible-iframes) | Chrome 155 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +5 art / +0 msgs |
| [Long Animation Frames style and layout duration](#5171478175809536-long-animation-frames-style-and-layout-duration) | Chrome 157 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +9 art / +0 msgs |
| [WebTransport send groups and send-stream prioritization](#5235261159112704-webtransport-send-groups-and-send-stream-prioritization) | Chrome 159 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | 🔄 Enabled by default |
| [WebTransport headers and responseHeaders](#5194104408506368-webtransport-headers-and-responseheaders) | Chrome 156 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +13 art / +0 msgs |
| [WebTransport Datagram readable stream type](#5148774971342848-webtransport-datagram-readable-stream-type) | Chrome 159 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | 🔄 Enabled by default |
| [Optional descriptors for registered custom properties](#5168674259468288-optional-descriptors-for-registered-custom-properties) | Chrome 159 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | 🔄 Enabled by default |
| [Margin-trim](#5197863732772864-margin-trim) | Chrome 155 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +6 art / +1 msgs |
| [CSS Symbols()](#5146996093616128-css-symbols) | Chrome 155 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +5 art / +0 msgs |
| [AccentColor & AccentColorText follows accent-color value](#6207138742534144-accentcolor-accentcolortext-follows-accent-color-value) | Chrome 159 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | 🔄 Enabled by default |
| [Import Text (Text Modules)](#5191512456560640-import-text-text-modules) | Chrome 155 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +6 art / +0 msgs |
| [object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](#4886345347629056-object-fit-and-object-position-apply-to-svg-documents-in-object-and-embed) | Chrome 158 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +7 art / +0 msgs |
| [CSS text-overflow: &lt;string&gt; value](#6294595288825856-css-text-overflow-string-value) | Chrome 157 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +6 art / +0 msgs |
| [Use scroll-snap-type: pair to snap to a single element](#5124378896498688-use-scroll-snap-type-pair-to-snap-to-a-single-element) | Chrome 156 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +6 art / +0 msgs |
| [SpeechRecognitionResult Timestamps (WebSpeech API)](#5811907077472256-speechrecognitionresult-timestamps-webspeech-api) | Chrome 159 | `Enabled by default` | **Moderate** | Chromium-Led | 🔄 Enabled by default |
| [Digital Credentials API (issuance support)](#5099333963874304-digital-credentials-api-issuance-support) | Chrome 155 | `Enabled by default` | **Emerging** | Contested / Concerns Raised | ⚡ +12 art / +0 msgs |
| [WebTransport receive stream](#5109912169480192-webtransport-receive-stream) | Chrome 159 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | 🔄 Enabled by default |
| [WebRTC Diagnostic Logging API](#5091582546149376-webrtc-diagnostic-logging-api) | Chrome 156 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +7 art / +0 msgs |
| [Single-axis scroll containers](#5067363861004288-single-axis-scroll-containers) | Chrome 156 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +6 art / +0 msgs |
| [WebGPU: WGSL Fragment Depth](#5663304168112128-webgpu-wgsl-fragment-depth) | Chrome 156 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +3 art / +0 msgs |
| [WebTransport draining](#6427766428925952-webtransport-draining) | Chrome 158 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +7 art / +0 msgs |
| [WebTransport reliability attributes](#5094058497277952-webtransport-reliability-attributes) | Chrome 158 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +5 art / +0 msgs |
| [Web haptics JavaScript API](#5167864517623808-web-haptics-javascript-api) | Chrome 156 | `In developer trial (Behind a flag)` | **Emerging** | Chromium-Led | ⚡ +4 art / +0 msgs |
| [CSS corner shorthand properties ](#5152215540039680-css-corner-shorthand-properties-) | Chrome 159 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | 🔄 Enabled by default |
| [WebTransport Datagram writable streams and prioritization](#5183354944225280-webtransport-datagram-writable-streams-and-prioritization) | Chrome 159 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | 🔄 Enabled by default |
| [Enhanced Canvas TextMetrics](#5075532483657728-enhanced-canvas-textmetrics) | Chrome 159 | `Enabled by default` | **Emerging** | Contested / Concerns Raised | 🔄 Enabled by default |
| [Host and screenshot restrictions for chrome.debugger API](#5072259281715200-host-and-screenshot-restrictions-for-chromedebugger-api) | Chrome 155 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +5 art / +3 msgs |
| [Renewed HTML insertion&streaming methods](#5054329641893888-renewed-html-insertionstreaming-methods) | Chrome 157 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +10 art / +0 msgs |
| [Deprecate and remove XSLT](#4709671889534976-deprecate-and-remove-xslt) | Chrome 158 | `Stepped rollout` | **Emerging** | Multi-Engine Consensus | ⚡ +9 art / +0 msgs |
| [Web Install API](#5183481574850560-web-install-api) | Chrome 158 | `Enabled by default` | **Emerging** | Contested / Concerns Raised | ⚡ +13 art / +2 msgs |
| [HTML install element](#5152834368700416-html-install-element) | Chrome 158 | `Enabled by default` | **Emerging** | Contested / Concerns Raised | ⚡ +12 art / +1 msgs |
| [Permissions Policy: focus-without-user-activation](#5179186249465856-permissions-policy-focus-without-user-activation) | Chrome 158 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +7 art / +0 msgs |
| [Media element pseudo-classes](#5068277495758848-media-element-pseudo-classes) | Chrome 158 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +5 art / +0 msgs |
| [WebTransport congestion control](#5180947573112832-webtransport-congestion-control) | Chrome 159 | `Enabled by default` | **Emerging** | Chromium-Led | 🔄 Enabled by default |
| [CSSImportRule.styleSheet ](#5123480866783232-cssimportrulestylesheet-) | Chrome 159 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ✨ New |
| [OfflineAudioContext incremental rendering](#5109900936085504-offlineaudiocontext-incremental-rendering) | Chrome 158 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +10 art / +0 msgs |
| [WebTransport keying material export](#4860330806214656-webtransport-keying-material-export) | Chrome 159 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | 🔄 Enabled by default |
| [Prerendering cross-origin iframes](#5112398709129216-prerendering-cross-origin-iframes) | Chrome 159 | `Enabled by default` | **Emerging** | Chromium-Led | 🔄 Enabled by default |
| [CSS Custom Highlight Universal Selector ::highlight(\*)](#5174965228929024-css-custom-highlight-universal-selector-highlight) | Chrome 158 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +4 art / +0 msgs |
| [SVG textPath side attribute](#5422782593761280-svg-textpath-side-attribute) | Chrome 158 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +8 art / +0 msgs |
| [Background layer count independence ](#5144333908049920-background-layer-count-independence-) | Chrome 159 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ✨ New |
| [Regular Expression Buffer Boundaries](#5187917373898752-regular-expression-buffer-boundaries) | Chrome 159 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ✨ New |
| [Shared MessagePort for AudioWorklet](#5079784523694080-shared-messageport-for-audioworklet) | Chrome 159 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ✨ New |
| [Scroll snap for single-axis scroll containers](#5086608215900160-scroll-snap-for-single-axis-scroll-containers) | Chrome 159 | `Enabled by default` | **Emerging** | Chromium-Led | 🔄 Enabled by default |
| [Server Side Gemini Powered Scam Checks for Desktop](#5094379441225728-server-side-gemini-powered-scam-checks-for-desktop) | Chrome 155 | `Enabled by default` | **Emerging** | Chromium-Led | ✨ New |
| [WebTransport connection statistics](#5120203192139776-webtransport-connection-statistics) | Chrome 159 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ✨ New |
| [WebTransport anticipated concurrent incoming streams](#5089961022980096-webtransport-anticipated-concurrent-incoming-streams) | Chrome 158 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +5 art / +0 msgs |
| [Source Specific Multicast for Direct Sockets API](#6208452397498368-source-specific-multicast-for-direct-sockets-api) | Chrome 158 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +3 art / +0 msgs |
| [WebTransportError API alignment and serialization](#5158277221580800-webtransporterror-api-alignment-and-serialization) | Chrome 159 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ✨ New |
| [MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](#5188639100370944-mediasession-return-promiseundefined-from-setmicrophoneactive-and-setcameraactive) | Chrome 159 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | 🔄 Enabled by default |
| [Deprecate and stop firing events during subframe removal](#5754395122860032-deprecate-and-stop-firing-events-during-subframe-removal) | Chrome 156 | `Origin trial` | **Emerging** | Chromium-Led | ✨ New |
| [Additional Windowing Controls](#5201832664629248-additional-windowing-controls) | Chrome 155 | `Enabled by default` | **Quiet** | Chromium-Led | ⚡ +6 art / +0 msgs |
| [IndexedDB: SQLite backend](#5161589557821440-indexeddb-sqlite-backend) | Chrome 156 | `Enabled by default` | **Quiet** | Multi-Engine Consensus | ⚡ +2 art / +0 msgs |
| [Expose ProgressEvent in service workers](#5069584943153152-expose-progressevent-in-service-workers) | Chrome 157 | `Enabled by default` | **Quiet** | Multi-Engine Consensus | ⚡ +1 art / +0 msgs |
| [PredefinedColorSpace srgb-linear and display-p3-linear](#5122501071994880-predefinedcolorspace-srgb-linear-and-display-p3-linear) | Chrome 155 | `Enabled by default` | **Quiet** | Partial Multi-Engine Interest | ⚡ +3 art / +0 msgs |
| [CORS enforcement for Background Fetch](#6210300985606144-cors-enforcement-for-background-fetch) | Chrome 157 | `Enabled by default` | **Quiet** | Chromium-Led | ⚡ +2 art / +0 msgs |
| [Algorithm Updates in WebCrypto](#5198951632470016-algorithm-updates-in-webcrypto) | Chrome 155 | `Enabled by default` | **Quiet** | Chromium-Led | ⚡ +10 art / +0 msgs |
| [JPEG XL decoding support (image/jxl) in blink](#5114042131808256-jpeg-xl-decoding-support-imagejxl-in-blink) | Chrome 155 | `Enabled by default` | **Quiet** | Multi-Engine Consensus | ⚡ +7 art / +0 msgs |
| [Local network access restrictions](#5152728072060928-local-network-access-restrictions) | Chrome 156 | `Stepped rollout` | **Quiet** | Partial Multi-Engine Interest | ⚡ +13 art / +0 msgs |

---

## 🔍 Feature Ecosystem Deep Dives

<a id="5172548013916160-html-in-canvas"></a>
### [HTML-in-canvas](https://chromestatus.com/feature/5172548013916160)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5172548013916160](https://chromestatus.com/feature/5172548013916160) · [chromestatuslite.com/feature/5172548013916160](https://chromestatuslite.com/feature/5172548013916160)
- **Specification:** [https://github.com/whatwg/html/pull/11588](https://github.com/whatwg/html/pull/11588)
- **Chromium Bug:** [https://crbug.com/500967896](https://crbug.com/500967896)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `Positive`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/canvas-html) (Chrome: `—`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`canvas-html`](https://webstatus.dev/features/canvas-html)*

#### 📝 Overview

HTML-in-canvas enables customizing the rendering of html using canvas with new primitives to manage canvas layout, drawing capabilities, rendering events for DOM-to-canvas synchronization, and geometry update capabilities for canvas-to-DOM synchronization.

> **Motivation:** High-performance web applications rely on &lt;canvas&gt; for control over rendering that goes beyond standard HTML/CSS. However, by using &lt;canvas&gt;, they lose all the rich, built-in features of the web platform, including: \* Advanced formatting, such as styled multi-line text. \* Interactivity, such as copy&paste, forms, and text selection. \* Accessibility...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (+530 points since 2026-10-12; footprint 1880 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"html in canvas wicg api"`, `"html in canvas web standards developer"`
- **Analysis:** The HTML-in-canvas specification addresses a long-standing web platform limitation by allowing live, interactive, and accessible DOM elements to be rendered directly into 2D, WebGL, and WebGPU contexts, officially shipping enabled by default in Chrome 157. It replaces fragile DOM-to-image workarounds like html2canvas, generating immense enthusiasm across the graphics and creative coding ecosystems. However, baseline interoperability remains limited because the specification is still undergoing incubation within the WICG and WHATWG review processes.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building rich 3D interfaces, creative canvas tools, or chart visualizations should experiment with the API and test integrations in Chrome, but treat it strictly as a progressive enhancement with polyfills or fallback UI. Production apps should not rely on HTML-in-canvas as a single source of truth until Safari and Firefox conclude standards evaluations and deliver production implementations.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @smfr: "We will mark this proposal as support in a week pending objections. There are some ongoing discussions around parts of the API shape that we'd like to..."
- Standards Activity (Mozilla): Latest discussion from @nical: "Another concern was brought up recently in a discussion with web-standards folks at mozilla:  HTML-in-canvas is violating the principle that JS should..."
- Community package available: \[@underglass/html-in-canvas-polyfill\](https://www.npmjs.com/package/@underglass/html-in-canvas-polyfill) (v0.5.0) for progressive enhancement.
- Verified community discussion on Hacker News: "HTML-in-Canvas" (222 points, 116 comments).

#### ⚡ What Happened This Week

- 💬 **11 new community discussions** found
- 📰 **13 new articles/tutorials** published

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

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2086571: \[wpt-sync\] Sync PR 64256 - Add WEB\_FEATURES.yml for HTML-in-Canvas draw-element-image tests](https://bugzilla.mozilla.org/show_bug.cgi?id=2086571) `[NEW]`
- **Mozilla (Gecko):** [Bug #2086977: \[wpt-sync\] Sync PR 64141 - \[html-in-canvas\] Add test that content is not culled](https://bugzilla.mozilla.org/show_bug.cgi?id=2086977) `[NEW]`
- **Mozilla (Gecko):** [Bug #2086991: \[wpt-sync\] Sync PR 64146 - \[html-in-canvas\] Disallow canvas-external SVG filters](https://bugzilla.mozilla.org/show_bug.cgi?id=2086991) `[NEW]`
- **Mozilla (Gecko):** [Bug #2087329: \[wpt-sync\] Sync PR 64201 - \[html-in-canvas\] Fix filter dirty bit clearing](https://bugzilla.mozilla.org/show_bug.cgi?id=2087329) `[NEW]`
- **Mozilla (Gecko):** [Bug #2087524: \[wpt-sync\] Sync PR 64236 - \[html-in-canvas\] Strip tainted filters when painting box contents](https://bugzilla.mozilla.org/show_bug.cgi?id=2087524) `[NEW]`
- **WebKit (Safari):** [Bug #316240: \[HTML-in-Canvas\] Implement HTML-in-Canvas](https://bugs.webkit.org/show_bug.cgi?id=316240) `[NEW]`
- **WebKit (Safari):** [Bug #316244: \[HTML-in-Canvas\] Blockify style "display" and force style "position" for canvas descendants](https://bugs.webkit.org/show_bug.cgi?id=316244) `[NEW]`
- **WebKit (Safari):** [Bug #316246: \[HTML-in-Canvas\] Implement ElementImage and HTMLCanvasElement.captureElementImage()](https://bugs.webkit.org/show_bug.cgi?id=316246) `[NEW]`

#### 📦 Polyfills & NPM Ecosystem

- [@remotion/canvas-capture](https://www.npmjs.com/package/@remotion/canvas-capture) `v4.0.502` — Capture HTML-in-canvas content as a video
- [@underglass/html-in-canvas-polyfill](https://www.npmjs.com/package/@underglass/html-in-canvas-polyfill) `v0.5.0` *(Verified Polyfill)* — Polyfill for the WICG HTML-in-Canvas proposal (drawElementImage, paint events, ElementImage).
- [@types/dom-html-in-canvas](https://www.npmjs.com/package/@types/dom-html-in-canvas) `v0.0.0` — TypeScript definitions for dom-html-in-canvas
- [@giuseppe-scotto-lavina/html-in-canvas-polyfill](https://www.npmjs.com/package/@giuseppe-scotto-lavina/html-in-canvas-polyfill) `v1.0.0-rc.7` *(Verified Polyfill)* — Polyfill for the proposed HTML-in-Canvas API (content="drawable", drawElementImage, the paint event) over a live DOM, for desktop Chrome, Firefox 155+ and Safari 27+, Chrome for Android 130+ and Safari on iPadOS 26+ (iOS 26+ admitted, not yet qualified on
- [three-html-render](https://www.npmjs.com/package/three-html-render) `v0.1.2` *(Verified Polyfill)* — HTML-in-Canvas polyfill and Three.js integration for rendering live HTML as WebGL/WebGPU textures

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

- [Re: \[blink-dev\] Intent to Extend Experiment: HTML-in-canvas](http://www.mail-archive.com/blink-dev@chromium.org/msg16743.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5172548013916160`)*
  > Re: \[blink-dev\] Intent to Extend Experiment: HTML-in-canvas Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: HTML-in-canvas Mike Taylor Thu, 11 Jun 2026 08:49:10 -0700 LGTM On 6/10/26 12...
- [Intent to Experiment: HTML-in-canvas](https://groups.google.com/a/chromium.org/g/blink-dev/c/t_nGEmJ_v4s) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5172548013916160`)*
  > Intent to Experiment: HTML-in-canvas Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: HTML-in-canva...
- [HTML-in-canvas \[500967896\] - Chromium](https://issues.chromium.org/issues/500967896) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5172548013916160`)*
  > Chromium Sign in
- [\[blink-dev\] Re: Intent to Ship: HTML-in-canvas](http://www.mail-archive.com/blink-dev@chromium.org/msg17605.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5172548013916160`)*
  > \[blink-dev\] Re: Intent to Ship: HTML-in-canvas Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: HTML-in-canvas Alex Russell Wed, 30 Sep 2026 08:28:48 -0700 I regret that I have but one LGTM to give. ...
- [\[blink-dev\] Ready for Developer Testing: HTML in Canvas: drawElement](https://www.mail-archive.com/blink-dev@chromium.org/msg13786.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5172548013916160`)*
  > False Estimated milestones DevTrial on desktop 138 DevTrial on Android 138 Link to entry on the Chrome Platform Status https://&lt;strong&gt;chromestatus.com/feature/5172548013916160&lt;/strong&gt; Links to previous Intent discussio...

#### 📚 Platform Documentation & References

- [Chrome 157 HTML-in-Canvas API by ewewraw · Pull Request #30938 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30938) *(github.com)*
- [HTML-in-canvas · Issue #41 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/41) *(github.com)*
- [design-reviews#1204: Incubation: \[HTML\] html-in-canvas](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1204) *(tag-github-bot.w3.org)*
- [Design system: research spike on HTML-in-Canvas for the fleet · Issue #1721 · ferraroroberto/fleet-config · GitHub](https://github.com/ferraroroberto/fleet-config/issues/1721) *(github.com)*
- [HTML-in-Canvas · Issue #1076 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1076) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `canvas-html` on [wpt.fyi](https://wpt.fyi/results?q=feature:canvas-html) (webstatus.dev has no pass rates for it)

#### 🌐 Web-features Group Context

*group-level data: web-features [`canvas-html`](https://webstatus.dev/features/canvas-html)*

- **Chrome usage:** 0% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/445))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (63 found across 12 planned queries, 45 verified) · `Google Search Grounding (gemini-3.8-flash)` (20 found, 18 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (8 found, 8 verified) · `Dev.to Community Blogs` (1 found, 1 verified) · `Hacker News Algolia` (8 found, 8 verified) · `Standards Positions` (5 found, 3 verified) · `Engine Bug Trackers` (10 found, 8 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 5 verified) · `web-features mapping` *(group "canvas-html", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "canvas-html": no stable pass rate for Chrome yet)* · `Sources cited by the AI synthesis` (6 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 12

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

- **Momentum:** **High** (+210 points since 2026-10-12; footprint 350 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""text-decoration-inset" site:bugs.webkit.org OR site:bugzilla.mozilla.org OR site:github.com/w3c/csswg-drafts"`, `""text-decoration-inset" CSS"`, `""text-decoration-inset" webkit position OR firefox position"`
- **Analysis:** CSS text-decoration-inset (part of CSS Text Decoration Module Level 4) provides native inline control to shorten, extend, or shift text decorations such as underlines and strike-throughs using lengths and percentages. The feature resolves a long-standing web typography pain point, replacing legacy workarounds like gradient backgrounds or pseudo-elements. With active implementation across Blink, Gecko, and WebKit, the property enjoys high cross-engine momentum and widespread standard alignment.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt text-decoration-inset immediately as a progressive enhancement, wrapping custom underline insets or hover transitions inside '@supports (text-decoration-inset: 1px)'. Unsupporting browsers will simply render standard full-width decorations without breaking layout or legibility.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 154 is rolling out now ⬇️ https://t.co/rteT1QOjaQ" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "Chrome 154 is rolling out now ⬇️ https://t.co/rteT1QOjaQ" / X](https://x.com/ChromiumDev/status/2102804599325528424) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*
- 🐦 [lunamoth on X: "Chrome 154 \| Release notes](https://x.com/lunamoth/status/2103097878411710954) — *Twitter / X by @lunamoth (0 likes/RTs, 0 replies)*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1780887: \[meta\] \[css-text-decor\] implement text-decoration-inset to modify the length of underline etc](https://bugzilla.mozilla.org/show_bug.cgi?id=1780887) `[NEW]`
- **Mozilla (Gecko):** [Bug #1981310: \[Inactive CSS\] Add text-decoration-inset in inactive CSS](https://bugzilla.mozilla.org/show_bug.cgi?id=1981310) `[NEW]`
- **Mozilla (Gecko):** [Bug #2072125: New wpt failures in /css/ \[css-transitions/properties-value-003.html, css-transitions/properties-value-inherit-003.html, css-animations/text-decoration-inset-auto.html\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2072125) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [text-decoration-inset is Like Padding for Text Decorations \| CSS-Tricks](https://css-tricks.com/text-decoration-inset-is-like-padding-for-text-decorations) *(css-tricks.com)*
  > The \*\*\`CSS text-decoration-inset\`\*\* property (part of CSS Text Decoration Module Level 4) gives developers direct control over the start and end offsets of text decorations (underlines, overlines, and line-throughs) \*\*Wh...
- [chromestatus.com](https://chromestatus.com/feature/5178263526834176?gate=6555321377095680) *(chromestatus.com)*
  > The \*\*\`CSS text-decoration-inset\`\*\* property (part of CSS Text Decoration Module Level 4) gives developers direct control over the start and end offsets of text decorations (underlines, overlines, and line-throughs) \*\*Co...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/visual-design/custom-text-decorations?hl=fa) *(developer.chrome.com)*
  > \*\*Behavior\*\*: Positive values inset (pull inward / shorten) the line, while negative values extend (outset) it past the text run edges Percentages are calculated relative to the inline size of the decorated text box
- [Custom text decorations  \|  Modern Web Guidance  \|  Chrome for Developers](https://developer.chrome.com/docs/modern-web-guidance/guides/visual-design/custom-text-decorations) *(developer.chrome.com)*
  > \*\*What it covers\*\*: Chrome's developer guides demonstrate how to integrate \`text-decoration-inset\` into modern design systems \*\*Key Takeaway\*\*: The guide focuses on pairing \`text-decoration-inset\` with \`text-decoration-s...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides) *(developer.chrome.com)*
  > \*\*What it covers\*\*: Chrome's developer guides demonstrate how to integrate \`text-decoration-inset\` into modern design systems
- [zhangxinxu.com](https://www.zhangxinxu.com/wordpress/2026/01/css-text-decoration-inset) *(zhangxinxu.com)*
  > An early hands-on review highlighting initial browser testing It showcases visual comparisons and GIF demonstrations demonstrating how partial underlines and asymmetrically shifted decoration lines behave across Latin an...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17255.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > \[blink-dev\] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS text-decoration-inset Helmut Januschka Sun, 23 Aug 2026 07:20:14 -0700 \*Contact emails\* \[email&#...
- [\[blink-dev\] Intent to Prototype: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg16309.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Helmut Januschka Fri, 10 Apr 2026 04:36:16 -0700 \*Contact emails...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., ...
- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com · 2026-10-02T00:49:44)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > text-decoration-inset · Issue #4462 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com)*
- [text-decoration-inset CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com)*
- [\[css-text-decor-4\] Allow percentages in \`text-decoration-inset\` · Issue #8403 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/8403) *(github.com)*
- [Add CSS Text Decoration 4 properties: text-emphasis-\* and text-decoration-skip/inset · Issue #2265 · jhaygood86/PeachPDF · GitHub](https://github.com/jhaygood86/PeachPDF/issues/2265) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 89.4% · Edge 89.9% · Firefox 81.4% · Safari 66.8%; experimental: Chrome 95% · Edge 95.5% · Firefox 81.4% · Safari 84.4%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (71 found across 11 planned queries, 27 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 2 verified) · `Dev.to Community Blogs` (4 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (3 found, 3 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(group "text-decoration", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "text-decoration": Chrome 89.4% passing (stable))* · `Sources cited by the AI synthesis` (9 found, 7 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **High** (+200 points since 2026-10-12; footprint 330 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** The CSS flow-start and flow-end keywords introduce generic, placement-aware alignment values into CSS Box Alignment Module Level 3, serving as canonical aliases for flex-start and flex-end. They solve long-standing semantic friction and layout reversal challenges in modern specifications like CSS Grid Lanes (masonry), where item placement directions can invert relative to container logical edges. With Chrome shipping default support and Mozilla officially backing the design, engine alignment is rapidly solidifying around the CSS Working Group resolution.

**Key Recommendations & Takeaways:**
- Actionable Advice: Continue relying on established keywords like flex-start or logical start/end for production flexbox and standard grid code while cross-browser rollout completes. However, start testing flow-start and flow-end experimentally when prototyping CSS Grid Lanes and reversed masonry layouts in Chromium.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @celestepan: "@dholbert thank you for the response!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **11 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/WebKit/standards-positions/issues/723) [open] `topic: css`, `venue: W3C CSS WG`
- **Mozilla:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/mozilla/standards-positions/issues/1455) [closed] `position: positive`
  > *Latest discussion from @celestepan: "@dholbert thank you for the response!..."*

#### 📰 Ecosystem Blogs & Articles

- [Making features generic in CSS \| Rachel Andrew](https://rachelandrew.co.uk/archives/2026/11/02/making-features-generic-in-css) *(rachelandrew.co.uk)*
  > The CSS Working Group resolved to introduce \*\*\`flow-start\`\*\* and \*\*\`flow-end\`\*\* into \*\*CSS Box Alignment Module Level 3\*\* as value aliases for \`flex-start\` and \`flex-end\` \*\*The Problem:\*\* The existing \`flex-start\` and \`f...
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Reversals & Grid Lanes (Masonry):\*\* The need became pressing with work on CSS Grid Level 3 / Masonry layouts (CSS Grid Lanes), where placement can be reversed via keywords like \`fill-reverse\` and \`track-reverse\` In the...
- [csswg.org](https://drafts.csswg.org/css-flexbox-2) *(drafts.csswg.org)*
  > \*\*Canonical Serialization:\*\* To ensure consistency across the platform, \`flow-start\` and \`flow-end\` become the canonical keywords
- [csslayout.news](https://csslayout.news/a/3mzhziouk3323-issue-347) *(csslayout.news)*
  > \*\*Overview:\*\* In a widely circulated blog post and via her \*CSS Layout News\* newsletter, Rachel Andrew (CSSWG member and Chrome Developer Content Lead) broke down the addition of \`flow-start\` and \`flow-end\` Developers an...
- [sifa.id](https://sifa.id/p/rachelandrew.co.uk) *(sifa.id)*
  > \*\*Overview:\*\* In a widely circulated blog post and via her \*CSS Layout News\* newsletter, Rachel Andrew (CSSWG member and Chrome Developer Content Lead) broke down the addition of \`flow-start\` and \`flow-end\`
- [\[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17728.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blink-dev Wed,...

#### 🔗 Inbound Citations & Reverse Links

- [Add flow-start/flow-end values to CSS alignment properties by Elchi3 · Pull Request #31019 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/31019) *(github.com)* *(Cites: `https://chromestatus.com/feature/5069051687731200`)*
  > Add flow-start/flow-end values to CSS alignment properties by Elchi3 · Pull Request #31019 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signe...
- [\[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17728.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/pull/14539`)*
  > \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blink-dev Wed,...
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17830.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/pull/14539`)*
  > Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Chris Harrelson Wed, 21 ...

#### 📚 Platform Documentation & References

- [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement · Issue #723 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/723) *(github.com)*
- [\[css-grid-3\]\[masonry\] For \`align-items\`/\`justify-items\`, should \`fill-reverse\` affect the definition of \`start\` and \`end\`? · Issue #14052 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/14052) *(github.com)*
- [github.com](https://github.com/w3c/csswg-drafts/issues/12971) *(github.com)*
- [CSS Align: \`flow-start\` and \`flow-end\` as aliases for \`flex-start\` and \`flex-end\` · Issue #1455 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1455) *(github.com)*
- [align-items CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-items) *(developer.mozilla.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 11 planned queries, 25 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 12 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 2

---

<a id="5169798320357376-add-javascripturls-option-to-sanitizerconfig-and-sanitizer"></a>
### [Add javascriptURLs option to SanitizerConfig and Sanitizer](https://chromestatus.com/feature/5169798320357376)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5169798320357376](https://chromestatus.com/feature/5169798320357376) · [chromestatuslite.com/feature/5169798320357376](https://chromestatuslite.com/feature/5169798320357376)
- **Specification:** [https://github.com/whatwg/html/pull/12898](https://github.com/whatwg/html/pull/12898)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Closed Without a Position`

#### 📝 Overview

https://github.com/whatwg/html/pull/12898  Sanitizer API also sanitizes javascript:-URLs, when they are used for navigation. This was originally done as a side effect of any "safe" method that uses Sanitizer, and omittted for any "unsafe" method. The HTML standard recently regularized this and made this a developer-selectable option, instead of a side-effect of a particular method.  Behaviour when the option is not used remains the same.

> **Motivation:** Previously, Sanitizer API already supported sanitizing javascript:-URLs, but only for "safe" methods. This was awkward if users wanted to use the "unsafe" methods for some reason, but still wanted javascript:-URLs removed.  Further discussion on: https://github.com/whatwg/html/issues/12686 https://github.com/whatwg/html/pull/12898

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (+195 points since 2026-10-12; footprint 255 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** The addition of the \`javascriptURLs\` option to \`SanitizerConfig\` and the \`Sanitizer\` interface regularizes the handling of navigation-related \`javascript:\` URLs, transforming what was previously an implicit side effect of 'safe' insertion methods into an explicit, configurable setting that defaults to disallowing them. The update reached swift tri-engine consensus in the WHATWG HTML repository to remove the awkward behavioral divergence between safe and unsafe HTML methods. With implementations rolling out across modern Chromium and Firefox releases and WebKit treating it as a natural extension of the broader Sanitizer API, the feature firmly solidifies native DOM sanitization semantics.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams utilizing native Sanitizer APIs should explicitly declare \`{ javascriptURLs: false }\` when configuring custom sanitizers or unsafe insertion paths to guarantee defense-in-depth against script-based navigation injection. For production environments requiring broad legacy browser support, developers should continue pairing native Sanitizer calls with feature detection or mature userland libraries like DOMPurify.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Yeah this is fine. I'm going to duplicate this into our existing Sanitizer API issue as I don't think this needs its own dashboard entry, but I apprec..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **11 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Add javascriptURLs option to SanitizerConfig](https://github.com/WebKit/standards-positions/issues/738) [closed] `duplicate`
  > *Latest discussion from @annevk: "Yeah this is fine. I'm going to duplicate this into our existing Sanitizer API issue as I don't think this needs its own dashboard entry, but I apprec..."*

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/release-notes/159) *(chromestatus.com)*
  > In the HTML Sanitizer API specification (WHATWG HTML PR #12898 \*\*Coverage\*\*: Tracked under Chrome Platform Status (\*"Add javascriptURLs option to SanitizerConfig and Sanitizer"\*) and rolled out in Chromium 157 / 159 cycl...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > In the HTML Sanitizer API specification (WHATWG HTML PR #12898), the handling of \`javascript:\` URLs—such as \`&lt;a href="javascript:..."&gt;\`—was previously tied to the choice of insertion method "Safe" methods (like \`Element....
- [web.dev](https://web.dev/blog/web-platform-10-2026?hl=en) *(web.dev)*
  > \*\*\`Sanitizer.prototype.setJavascriptURLs(boolean)\`\*\*: An imperative method on instances to toggle this behavior dynamically \*\*Coverage\*\*: Rachel Andrew and the Chrome/web.dev team featured the update under the monthly we...
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5169798320357376?gate=6096251476115456) *(img968-dot-cr-status.appspot.com)*
  > \*\*Coverage\*\*: Tracked under Chrome Platform Status (\*"Add javascriptURLs option to SanitizerConfig and Sanitizer"\*) and rolled out in Chromium 157 / 159 cycles \*\*Key Takeaway\*\*: The Chromium team emphasized that making U...
- [\[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17726.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Chromest...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17747.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer ...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17726.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Chromest...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17747.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer ...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17764.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer ...
- [2068934 - Sanitizer API: javascript URL handling should be part of the config](https://bugzilla.mozilla.org/show_bug.cgi?id=2068934) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/whatwg/html/pull/12898`)*
  > 2068934 - Sanitizer API: javascript URL handling should be part of the config Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advance...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/mdn/mdn/issues/862) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/158) *(developer.mozilla.org)*
- [github.com](https://github.com/whatwg/html/issues/12686) *(github.com)*
- [github.com](https://github.com/web-platform-tests/wpt/blob/master/sanitizer-api/sanitizer-javascript-url.html) *(github.com)*
- [github.com](https://github.com/mdn/content/issues/45898) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (49 found across 11 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 9 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 1

---

<a id="5172464636133376-support-for-webhid"></a>
### [Support for WebHID](https://chromestatus.com/feature/5172464636133376)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5172464636133376](https://chromestatus.com/feature/5172464636133376) · [chromestatuslite.com/feature/5172464636133376](https://chromestatuslite.com/feature/5172464636133376)
- **Specification:** [https://hid.spec.whatwg.org](https://hid.spec.whatwg.org)
- **Chromium Bug:** [http://crbug.com/40628009](http://crbug.com/40628009)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Negative` · Safari: `Oppose`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/webhid) (Chrome: `89`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`webhid`](https://webstatus.dev/features/webhid), shared with 5 other ChromeStatus features*

#### 📝 Overview

The \[WebHID API\](https://developer.chrome.com/docs/extensions/how-to/web-platform/webhid) enables web applications to interact with Human Interface Devices (HIDs) over USB and Bluetooth beyond standard system input mappings (such as mice, keyboards, touchscreens, and standard gamepads). Web applications can request user permission to connect to HID devices, send and receive input, output, and feature reports, and inspect report descriptors. WebHID shipped on \[desktop platforms\](https://developer.chrome.com/docs/capabilities/web-apis/hid-examples) (Windows, macOS, Linux, and ChromeOS) in Chrome 89.   Chrome 158 brings the existing WebHID API to Chrome on Android (relying on new OS support in Android 17 / API level 37 and later) with no changes to the web-exposed API surface.  Popular uses today include customizing mechanical keyboards, keypads, and gaming mice, calibrating gamepads, and integrating hardware headset call controls in call centers.   WebView is not supported, as it does not have a device chooser UI or permissions UX controls.  This feature can be controlled using the following enterprise policies:  \* \[DefaultWebHidGuardSetting\](https://chromeenterprise.google/policies/#DefaultWebHidGuardSetting) \* \[WebHidAllowAllDevicesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowAllDevicesForUrls) \* \[WebHidAllowDevicesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowDevicesForUrls) \* \[WebHidAllowDevicesWithHidUsagesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowDevicesWithHidUsagesForUrls) \* \[WebHidAskForUrls\](https://chromeenterprise.google/policies/#WebHidAskForUrls) \* \[WebHidBlockedForUrls\](https://chromeenterprise.google/policies/#WebHidBlockedForUrls)  For more details, see \[Set ChromeOS devices policies\](https://support.google.com/chrome/a/answer/1375678) in the Chrome Enterprise and Education Help Center.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (+180 points since 2026-10-12; footprint 715 points)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** WebHID enables direct web communication with human interface devices such as mechanical keyboards, specialized game controllers, and telephony headsets, originally shipping on desktop in Chrome 89 and expanding to Android 17 in Chrome 158. While Chromium continues broadening low-level peripheral access across platforms, the API remains classified as Limited Availability on Baseline. Cross-engine adoption is nonexistent due to fundamental architectural and security disagreements regarding raw hardware access on the open web.

**Key Recommendations & Takeaways:**
- Actionable Advice: Use WebHID exclusively as a progressive enhancement or for dedicated internal/companion web tools where a Chromium browser can be mandated. Ensure all code is safely guarded behind feature detection checking \`'hid' in navigator\` and provide clear fallback messaging or native application guidance for users on Firefox, Safari, or embedded WebViews.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Dropping venue concern, as it's moved to the WHATWG. We can figure out the details there going forward...."
- Standards Activity (Mozilla): Latest discussion from @scheib: "I'd like to address dmitriid@'s and beaufortfrancois@ comments with a personal opinion.  I work on Chrome adding these capabilities.  We do strive to ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Vincent Scheib on Twitter: "Got #WebHID usecases? Add them to https://t.co/kj36FFsAPP or https://t.co/IONacmyRVp. Help move HID from flag, to origin trial, then shipping!… https://t.co/Tm0SizrBAQ"" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **20 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Vincent Scheib on Twitter: "Got #WebHID usecases? Add them to https://t.co/kj36FFsAPP or https://t.co/IONacmyRVp. Help move HID from flag, to origin trial, then shipping!… https://t.co/Tm0SizrBAQ"](https://twitter.com/vincent_scheib/status/1164332382427594752?lang=en) — *Twitter / X by @vincent\_scheib (0 likes/RTs, 0 replies)*
- 🐦 [mr.niko.la on X: "Can we get #webhid out already ? @mozilla @chrome #webusb #gamepad #gamepadapi #python #javascript #wasm #webassembly #browser #webbluetooth #edgeapplication #edgecomputing" / X](https://twitter.com/diynikola/status/1148644168148955136) — *Twitter / X by @diynikola (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [WebHID](https://github.com/WebKit/standards-positions/issues/510) [closed] `position: oppose`, `concerns: security`, `topic: device apis`, `topic: app-like capabilities`, `concerns: use cases`, `from: Google`
  > *Latest discussion from @marcoscaceres: "Dropping venue concern, as it's moved to the WHATWG. We can figure out the details there going forward...."*
- **Mozilla:** [WebHID (Human Interface Device) API](https://github.com/mozilla/standards-positions/issues/459) [closed] `venue: W3C CG`, `position: negative`
  > *Latest discussion from @scheib: "I'd like to address dmitriid@'s and beaufortfrancois@ comments with a personal opinion.  I work on Chrome adding these capabilities.  We do strive to ..."*
- **W3C TAG:** [WebHID API (Human Interface Device)](https://github.com/w3ctag/design-reviews/issues/370) [closed] `Progress: review complete`, `Topic: accessibility`, `Topic: privacy`, `Provenance: Fugu`, `Topic: Input`
  > *Latest discussion from @cynthia: "We've looked at this during the Tokyo F2F.  Blunt question: will the device selector dialog come up every time the user tries to access the same devic..."*

#### 📦 Polyfills & NPM Ecosystem

- [@types/w3c-web-hid](https://www.npmjs.com/package/@types/w3c-web-hid) `v1.0.7` — TypeScript definitions for w3c-web-hid
- [@elgato-stream-deck/webhid](https://www.npmjs.com/package/@elgato-stream-deck/webhid) `v7.8.0` — An npm module for interfacing with the Elgato Stream Deck in the browser
- [shuttle-webhid](https://www.npmjs.com/package/shuttle-webhid) `v0.1.3` — An npm module for interfacing with the Contour Shuttle devices in Node.js

#### 📰 Ecosystem Blogs & Articles

- [Connect to uncommon HID devices  \|  Capabilities  \|  Chrome for Developers](https://developer.chrome.com/docs/capabilities/hid) *(developer.chrome.com)*
  > The \*\*WebHID API\*\* (\`navigator.hid\`) enables web applications to interact directly with Human Interface Devices (HIDs) over USB and Bluetooth, bypassing standard operating system input abstractions Rather than being rest...
- [chrome.com](https://developer.chrome.com/docs/capabilities/web-apis/hid-examples) *(developer.chrome.com)*
  > Originally launched for desktop platforms (Windows, macOS, Linux, and ChromeOS) in \*\*Chrome 89\*\* \*\*\[Human interface devices on the web: a few quick examples\](https://developer.chrome.com/docs/capabilities/web-apis/hid-ex...
- [chrome.com](https://developer.chrome.com/release-notes/131?hl=en) *(developer.chrome.com)*
  > Originally launched for desktop platforms (Windows, macOS, Linux, and ChromeOS) in \*\*Chrome 89\*\*, the API has continued to mature with additions like support in \*\*Dedicated Workers\*\* (Chrome 131) to offload heavy I/O off...
- [web.dev](https://web.dev/blog/web-platform-11-2024) *(web.dev)*
  > Originally launched for desktop platforms (Windows, macOS, Linux, and ChromeOS) in \*\*Chrome 89\*\*, the API has continued to mature with additions like support in \*\*Dedicated Workers\*\* (Chrome 131) to offload heavy I/O off...
- [chrome.com](https://developer.chrome.com/blog/talking-to-the-stadia-controller-with-webhid) *(developer.chrome.com)*
  > \*\*\[Talking to the Stadia controller with WebHID\](https://developer.chrome.com/blog/stadia-controller-webhid) (Thomas Steiner)\*\* While the standard Gamepad API maps buttons 0–16, the Stadia controller has 19 physical butt...
- [mechanicalkeyboard.net](https://mechanicalkeyboard.net/how-to-use-via-keyboard) *(mechanicalkeyboard.net)*
  > \*\*Web-Based Keyboard Configurators (VIA, QMK, and Hakkei/Configur.io guides)\*\* \*\*Discussion:\*\* The custom mechanical keyboard hobby has become the largest ecosystem champion of WebHID

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17170.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > True Tracking bug http://crbug... on Android 157 DevTrial on Android 154 Link to entry on the Chrome Platform Status https://&lt;strong&gt;chromestatus.com/feature/5172464636133376&lt;/strong&gt;?gate=5836123360722944 Links to previ...
- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T00:00:00)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Intent to Prototype: WebHID on Android Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: WebHID on An...
- [Intent to Implement: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/OaDCpCaEe_4/m/eRqOcJ_eCgAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Intent to Implement: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Implement...
- [Intent to Ship: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/rL1csFYD1Ms/m/d7y9_OftAQAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Intent to Ship: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: WebHID (...
- [Re: \[blink-dev\] Intent to Ship: Support for WebHID](http://www.mail-archive.com/blink-dev@chromium.org/msg17903.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Re: \[blink-dev\] Intent to Ship: Support for WebHID Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Support for WebHID Mike Taylor Fri, 30 Oct 2026 06:37:16 -0700 If you're just extending WebHID to A...

#### 📚 Platform Documentation & References

- [WebHID API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/HIDDevice) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/HIDInputReportEvent) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/HIDConnectionEvent) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/HID/getDevices) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webhid` on [wpt.fyi](https://wpt.fyi/results?q=feature:webhid) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 16.7% · Safari 16.7%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 16.7% · Safari 16.7%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webhid`](https://webstatus.dev/features/webhid), shared with 5 other ChromeStatus features*

- **Chrome usage:** 0.000014% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/77))
- **Mozilla:** negative ([standards position](https://github.com/mozilla/standards-positions/issues/459))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (71 found across 12 planned queries, 49 verified) · `Google Search Grounding (gemini-3.8-flash)` (19 found, 18 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 2 verified) · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (6 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 3 verified) · `web-features mapping` *(group "webhid", shared with 5 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webhid": Chrome 66.7% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 12

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

- **Momentum:** **High** (+180 points since 2026-10-12; footprint 410 points)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"Mozilla standards position Web Translation API"`, `"Language Detector API Chrome Android translation API W3C WebML"`, `"WebKit standards position Web Translation API"`
- **Analysis:** Chrome for Android is shipping the Language Detector API enabled by default in Chrome 157, bringing mobile devices to parity with desktop by running compact on-device models for offline, low-latency language identification without cloud fees or heavy client bundles. However, the broader Web Translation and Language Detector specifications remain incubated in the W3C Web Machine Learning Community Group without multi-engine consensus. While Chromium and Edge support the group's interfaces, Mozilla has registered an official negative position and Safari/WebKit has withheld formal endorsement, keeping baseline cross-browser interoperability strictly limited.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt the Language Detector API strictly as a progressive enhancement by feature-detecting the interface and verifying readiness via the static availability check before instantiation. Production applications must retain existing fallback mechanisms—such as lightweight client-side heuristic packages or server-side endpoints—for users running Firefox, Safari, or mobile devices lacking model support.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tomayac: "&gt; We have an open Pull Request to implement the proposed API into Mastodon, but we are waiting to have at least 2 browser engines support the proposal..."
- Standards Activity (Mozilla): Latest discussion from @sandstrom: "&gt; We are negative on this proposal. While we plan to describe the reasons further in \[our proposal\](https://github.com/mozilla/explainers/blob/main/tr..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Web Translation API](https://github.com/WebKit/standards-positions/issues/339) [open] `venue: WICG`, `from: Google`
  > *Latest discussion from @tomayac: "&gt; We have an open Pull Request to implement the proposed API into Mastodon, but we are waiting to have at least 2 browser engines support the proposal..."*
- **Mozilla:** [Web Translation API](https://github.com/mozilla/standards-positions/issues/1015) [closed] `position: negative`
  > *Latest discussion from @sandstrom: "&gt; We are negative on this proposal. While we plan to describe the reasons further in \[our proposal\](https://github.com/mozilla/explainers/blob/main/tr..."*

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/feature/5087964794322944) *(cr-status.appspot.com)*
  > The \*\*Language Detector API\*\* brings local, client-side language detection directly into Chrome for Android (often referred to internally as "Clank") Part of the broader W3C Web Machine Learning incubation and Chrome’s B...
- [chromestatus.com](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > The \*\*Language Detector API\*\* brings local, client-side language detection directly into Chrome for Android (often referred to internally as "Clank") \*\*Chrome Platform Status & Chrome Release Notes (Chrome 157)\*\*
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/built-in-ai/language-detection) *(developer.chrome.com)*
  > Rather than sending user-typed or scraped strings to cloud endpoints or forcing web apps to bundle multi-megabyte language identification libraries, web applications can now evaluate text locally on mobile devices \*\*Cost...
- [chromegeek.com](https://www.chromegeek.com/chrome-157-beta-language-detector-android) *(chromegeek.com)*
  > The rollout in Chrome 157 brings Chrome for Android to parity with desktop platforms \*\*Key Takeaway:\*\* Chrome marks this as a major milestone for bringing mobile browser AI beyond desktop-only hardware constraints
- [chrome.com](https://developer.chrome.com/docs/ai/get-started) *(developer.chrome.com)*
  > \*\*Key Takeaway:\*\* Chrome marks this as a major milestone for bringing mobile browser AI beyond desktop-only hardware constraints Unlike the large Gemini Nano text generation models that demand substantial desktop VRAM, t...
- [Language detection with built-in AI  \|  AI in Chrome  \|  Chrome for Developers](https://developer.chrome.com/docs/ai/language-detection) *(developer.chrome.com)*
  > Unlike the large Gemini Nano text generation models that demand substantial desktop VRAM, the language detection model is compact enough to run smoothly across mobile hardware \*\*developer.chrome.com: \*"Language detection...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17245.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android 'Jaewon Le...
- [\[blink-dev\] Web-Facing Change PSA: Language Detector API on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17765.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android 'Jaewon Lee' via blink-dev Fri, 16 Oct 2026 12...
- [Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17246.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Da...
- [Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17267.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android 'J...
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > https://&lt;strong&gt;chromestatus.com/feature/5087964794322944&lt;/strong&gt; will need a run on Android.

#### 📚 Platform Documentation & References

- [Translator and Language Detector APIs - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Translator_and_Language_Detector_APIs) *(developer.mozilla.org)*
- [LanguageDetector - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector) *(developer.mozilla.org)*
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)*
- [translation-api/index.bs at main · webmachinelearning/translation-api · GitHub](https://github.com/webmachinelearning/translation-api/blob/main/index.bs) *(github.com)*
- [GitHub - michaelwasserman/translation-api: 🌏 A proposal for translator and language detector APIs · GitHub](https://github.com/michaelwasserman/translation-api) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `languagedetector` on [wpt.fyi](https://wpt.fyi/results?q=feature:languagedetector) (via webstatus.dev) — stable: Chrome 25% · Edge 75% · Firefox 25% · Safari 25%; experimental: Chrome 25% · Edge 75% · Firefox 25% · Safari 25%

#### 🌐 Web-features Group Context

*group-level data: web-features [`languagedetector`](https://webstatus.dev/features/languagedetector), shared with 1 other ChromeStatus feature*

- **Chrome usage:** 0.0017% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/425))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (72 found across 12 planned queries, 33 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 9 verified) · `Twitter / X API v2` *(found 3 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (16 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "languagedetector", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "languagedetector": Chrome 25% passing (stable))* · `Sources cited by the AI synthesis` (6 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 10

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

- **Momentum:** **Moderate** (+170 points since 2026-10-12; footprint 385 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""text-decoration-skip-spaces" chrome OR chromium"`, `""text-decoration-skip-spaces" site:drafts.csswg.org"`, `""text-decoration-skip-spaces" site:github.com/w3c/csswg-drafts"`, `"site:github.com/WebKit/standards-positions "text-decoration-skip-spaces""`, `""text-decoration-skip-spaces" css"`
- **Analysis:** Defined in CSS Text Decoration Module Level 4, \`text-decoration-skip-spaces\` provides granular author control over whether text decorations span whitespace characters, replacing brittle border hacks and pseudo-elements. Chromium led implementation with an enabled-by-default rollout in Chrome 155, but real-world web compatibility regressions regarding preserved single-space underlines prompted fresh CSS Working Group scrutiny. Consequently, cross-engine consensus on default values remains in flux, leaving broad multi-engine baseline support pending.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should treat explicit property values like \`text-decoration-skip-spaces: all\` or \`none\` strictly as progressive enhancements guarded by \`@supports\` rules. Authors should avoid relying on UA default space-skipping behaviors for critical UI elements, particularly fill-in blanks or whitespace-based layout affordances, until cross-browser behavior stabilizes.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **17 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Custom text decorations  \|  Modern Web Guidance  \|  Chrome for Developers](https://developer.chrome.com/docs/modern-web-guidance/guides/visual-design/custom-text-decorations) *(developer.chrome.com)*
  > Historically, authors struggled to suppress underlines under leading, trailing, or inter-word spaces without hacky pseudo-elements or background border tricks \`start \|\| end\`: Skips decorations on leading and/or trailing ...
- [css.properties](https://css.properties/text-decoration-skip-spaces) *(css.properties)*
  > \`start \|\| end\`: Skips decorations on leading and/or trailing whitespace of the element box (the initial/default behavior is \`start end\`) \`all\`: Skips all whitespace, including word spaces between words (creating visual b...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/visual-design/custom-text-decorations?hl=es-419) *(developer.chrome.com)*
  > \`all\`: Skips all whitespace, including word spaces between words (creating visual breaks between words) \`none\`: Prevents skipping; the decoration line is drawn continuously across all whitespace characters
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > \*\*Focus:\*\* Implementation and intent to ship in Chromium \*\*Details:\*\* Listed under Chrome Platform Status and recent beta releases, Chromium implemented \`text-decoration-skip-spaces\` to provide authors with fine-grained ...
- [github.io](https://web-platform-dx.github.io/web-features-explorer/features/text-decoration-skip-spaces) *(web-platform-dx.github.io)*
  > \*\*Focus:\*\* Interoperability tracking and standard adoption
- [css - Can i exclude spaces from text decoration? - Stack Overflow](https://stackoverflow.com/questions/72692992/can-i-exclude-spaces-from-text-decoration) *(stackoverflow.com)*
  > Early developer feedback on GitHub and forums has welcomed this property for eliminating fragile workarounds (like wrapping each word in individual \`&lt;span&gt;\` tags or adjusting margins manually)

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg16310.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4832783806627840`)*
  > \[blink-dev\] Intent to Prototype: CSS4 text-decoration-skip-spaces Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS4 text-decoration-skip-spaces Chromestatus Fri, 10 Apr 2026 06:04:22 -0700 Conta...
- [\[blink-dev\] Ready for Developer Testing: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg16534.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4832783806627840`)*
  > \[blink-dev\] Ready for Developer Testing: CSS4 text-decoration-skip-spaces Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: CSS4 text-decoration-skip-spaces Chromestatus Fri, 15 May 2026 06:0...
- [\`text-decoration-skip-spaces\` · Issue #4344 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4344) *(github.com · 2026-09-11T11:12:12)* *(Cites: `https://chromestatus.com/feature/4832783806627840`)*
  > \`text-decoration-skip-spaces\` · Issue #4344 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17378.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4832783806627840`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces Mike Taylor Fri, 04 Sep 2026 13:13:20 -0700 ...
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > Shortname: css-text-decor · Level: 4 · Status: ED · Work Status: Exploring · Group: csswg · ED: https://&lt;strong&gt;drafts.csswg.org/css-text-decor-4&lt;/strong&gt;/ TR: https://www.w3.org/TR/css-text-decor-4/ Previous Version: ht...

#### 📚 Platform Documentation & References

- [w3.org](https://lists.w3.org/Archives/Public/www-style/2017Feb/0049.html) *(lists.w3.org)*
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/css-text-decor-4) *(w3.org)*
- [CSS4 text-decoration-skip-spaces · Issue #1164 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1164) *(github.com)*
- [text-decoration-skip CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-skip) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/text-decoration-skip/index.md?plain=1) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-001.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-002.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-003.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-004.html)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 89.4% · Edge 89.9% · Firefox 81.4% · Safari 66.8%; experimental: Chrome 95% · Edge 95.5% · Firefox 81.4% · Safari 84.4%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 11 planned queries, 28 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 12 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "text-decoration", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "text-decoration": Chrome 89.4% passing (stable))* · `Sources cited by the AI synthesis` (6 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5136856479039488-css-position-visibilityanchors-valid"></a>
### [CSS position-visibility:anchor{s}-valid](https://chromestatus.com/feature/5136856479039488)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5136856479039488](https://chromestatus.com/feature/5136856479039488) · [chromestatuslite.com/feature/5136856479039488](https://chromestatuslite.com/feature/5136856479039488)
- **Specification:** [https://drafts.csswg.org/css-anchor-position-1/#position-visibility](https://drafts.csswg.org/css-anchor-position-1/#position-visibility)
- **Chromium Bug:** [https://crbug.com/333421963](https://crbug.com/333421963)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/anchor-positioning) (Chrome: `—`, Firefox: `—`, Safari: `27`) · *group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

#### 📝 Overview

The \`anchors-valid\` value was implemented as part of https://crbug.com/329703412 but subsequently reverted, due to spec questions about the exact definition of the value. Since that time, the value has been renamed to \`anchor-valid\` (see https://chromestatus.com/feature/5136123851571200) and also better defined to be clear that only the default anchor matters, resolving a lot of ambiguity, and making this value shippable.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (+120 points since 2026-10-12; footprint 345 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** The CSS \`position-visibility: anchor-valid\` property (formerly \`anchors-valid\`) enables anchor-positioned elements such as menus and tooltips to be strongly hidden whenever their default anchor cannot be resolved, eliminating orphaned floating UI without manual JavaScript. Following CSS Working Group resolutions that clarified the specification to focus solely on the default anchor and standardized the singular syntax, the feature is set to ship enabled by default in Chromium 157. Engine consensus is aligned across the ecosystem, with Gecko and WebKit backing the clarified specification and supporting legacy plural aliases to safeguard web compatibility.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams building anchor-positioned interfaces should adopt \`position-visibility: anchor-valid\` progressively, optionally declaring the legacy \`anchors-valid\` alias alongside modern syntax inside CSS \`@supports\` blocks. As full cross-browser baseline support for anchor positioning continues to mature, teams should maintain fallback positioning strategies for non-supporting legacy browsers.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Suggest positive...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **9 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **Mozilla:** [\`position-visibility: anchor-valid\`](https://github.com/mozilla/standards-positions/issues/1457) [closed] `venue: W3C`, `position: positive`, `topic: CSS`, `team: Layout`
  > *Latest discussion from @emilio: "Suggest positive...."*

#### 📰 Ecosystem Blogs & Articles

- [position-visibility \| CSS-Tricks](https://css-tricks.com/almanac/properties/p/position-visibility) *(css-tricks.com)*
  > The CSS property \*\*\`position-visibility\`\*\* allows developers to conditionally hide anchor-positioned elements (such as tooltips, popovers, and menus) without requiring JavaScript or custom IntersectionObservers If the de...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > If the default anchor element does not exist or cannot be resolved, the element is strongly hidden \*\*Microsoft Edge Platform Release Notes (Edge 157):\*\* Highlights \`position-visibility: anchor-valid\` and \`anchor-visible\`...
- [caniuse.com](https://caniuse.com/?search=position-visibility) *(caniuse.com)*
  > \*\*Renaming:\*\* The CSSWG updated the keywords to singular form—\`anchor-valid\` and \`anchor-visible\`—because they evaluate one default anchor at a time
- [appspot.com](https://cr-status.appspot.com/feature/5136123851571200) *(cr-status.appspot.com)*
  > \*\*Renaming:\*\* The CSSWG updated the keywords to singular form—\`anchor-valid\` and \`anchor-visible\`—because they evaluate one default anchor at a time The plural forms (\`anchors-valid\`, \`anchors-visible\`) remain legacy ali...
- [github.io](https://web-platform-dx.github.io/web-features-explorer/features/anchor-positioning-position-visibility-plurals) *(web-platform-dx.github.io)*
  > The plural forms (\`anchors-valid\`, \`anchors-visible\`) remain legacy aliases \*\*MDN BCD Issue #29950 & Web Features Explorer:\*\* Outlines how browser engines and documentation handle the transition from the legacy plural \`a...
- [\[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17542.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mason Freed Wed, 23 Sep 2026 15:56:11 -0700 \*C...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17542.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mason Freed Wed, 23 Sep 2026 15:56:11 -0700 \*C...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17560.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Chris Harrelson Fri, 25 Sep 2026 14:53...
- [\`anchor-visible\` and \`anchor-valid\` are missing \[526682332\] - Chromium](https://issues.chromium.org/issues/526682332) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > Chromium Sign in
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17581.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid 'Dan Clark' via blink-dev Tue, 29 Sep ...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17586.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mike Taylor Tue, 29 Sep 2026 15:13:57 ...

#### 📚 Platform Documentation & References

- [\[css-anchor-position\] Details on "anchors-valid" · Issue #10201 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/10201) *(github.com)*
- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/position-visibility/index.md?plain=1) *(github.com)*
- [github.com](https://github.com/mdn/browser-compat-data/issues/29950) *(github.com)*
- [\`position-visibility: anchor-valid\` · Issue #1457 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1457) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 95.6% · Edge 95.4% · Firefox 83.2% · Safari 93.1%; experimental: Chrome 96.9% · Edge 94.8% · Firefox 85.9% · Safari 93.7%

#### 🌐 Web-features Group Context

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- **Chrome usage:** 0.073% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (60 found across 11 planned queries, 27 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 10 verified) · `Twitter / X API v2` *(found 3 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(group "anchor-positioning", shared with 8 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "anchor-positioning": Chrome 95.6% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 1

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

- **Momentum:** **Moderate** (+120 points since 2026-10-12; footprint 335 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The 'Pause media playback on not-visible iframes' feature establishes the 'media-playback-while-not-visible' permissions policy, allowing web applications to pause audio and video inside embedded frames hidden via CSS display, visibility, or zero-dimension styling without tearing down the iframe element. Originating from Microsoft engineers within the WICG, the policy has shipped enabled by default in Chromium-based browsers, notably Chrome and Edge 155. Cross-engine alignment is advancing smoothly with positive feedback from Mozilla, while broader multi-engine standardization remains pending final WebKit consensus.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams managing embedded third-party media or ad widgets should adopt the policy progressively today by specifying 'media-playback-while-not-visible' in iframe allow attributes or HTTP Permissions-Policy headers. Because browsers that lack support simply ignore unrecognized permission directives, developers can safely roll it out to enhance performance and user experience in modern Chromium browsers without breaking legacy fallback behavior.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @padenot: "This is \`positive\`. As mentioned in a call to Gabriel, Gecko currently has complex logic to achieve this, for power efficiency reasons, and it would b..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** ["media-playback-while-not-visible" Permission Policy](https://github.com/WebKit/standards-positions/issues/409) [open] `topic: media`, `from: Microsoft`, `topic: permissions`, `venue: Edge Explainers`
- **Mozilla:** ["media-playback-while-not-visible" Permission Policy](https://github.com/mozilla/standards-positions/issues/1082) [closed] `venue: W3C`, `venue: WHATWG`, `position: positive`
  > *Latest discussion from @padenot: "This is \`positive\`. As mentioned in a call to Gabriel, Gecko currently has complex logic to achieve this, for power efficiency reasons, and it would b..."*

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5082950457884672?gate=5165819033288704) *(chromestatus.com)*
  > The \*\*"Pause media playback on not-visible iframes"\*\* feature introduces the \*\*\`media-playback-while-not-visible\`\*\* Permissions Policy Hiding the container with \`display: none;\`, \`visibility: hidden;\`, or setting zero di...
- [windowslatest.com](https://www.windowslatest.com/2025/06/04/microsoft-could-help-reduce-unexpected-audio-or-video-playback-in-chrome) *(windowslatest.com)*
  > \*\*The Problem:\*\* Developers often embed third-party media (like YouTube, Vimeo, or interactive widgets) inside iframes Hiding the container with \`display: none;\`, \`visibility: hidden;\`, or setting zero dimensions (\`width...
- [google.com](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8) *(groups.google.com)*
  > Previously, the only reliable way to stop audio across origins was to dismantle or unload the iframe entirely, which incurs performance penalties and breaks iframe state when restored \*\*Source:\*\* Chrome Platform Status (...
- [Microsoft Edge 155 web platform release notes (Oct. 8, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > \`display: none\` Zero-area rendering (either width or height equals \`0\`)
- [\[blink-dev\] Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13456.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Pause media playback on not-rendered iframes Chromestatus Mon, 21 Apr...
- [\[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg10759.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes 'Gabriel Brito' via blink-...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13456.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > \[blink-dev\] Intent to Experiment: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Pause media playback on not-rendered iframes Chromestatus Mon, 21 Apr...
- [\[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg10759.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes 'Gabriel Brito' via blink-...
- [\[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17375.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > \[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes Chromestatus Fri, 04 Sep 2026 09:49:31...
- [\[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17400.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Yoav Weiss (@Shopify) Wed, 09 ...
- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > Intent to Prototype: Pause media playback on not-rendered iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent...

#### 📚 Platform Documentation & References

- ["media-playback-while-not-visible" Permission Policy · Issue #4292 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4292) *(github.com)*
- [media-playback-while-not-visible Permission Policy · Issue #1387 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1387) *(github.com)*
- [w3.org](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1084) *(tag-github-bot.w3.org)*
- ["media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/409) *(github.com)*
- [Pausing iframe media when not visible · Issue #1468 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/1468) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Pause media playback on not-visible iframes Demo](https://gabrielsanbrito.github.io/media-playback-while-not-visible)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (67 found across 12 planned queries, 25 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 8 verified) · `Twitter / X API v2` *(found 6 tweet(s))* · `Tweets found by web search` (5 found, 1 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

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

- **Momentum:** **Moderate** (+120 points since 2026-10-12; footprint 305 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Analysis:** The Long Animation Frames (LoAF) API enhancement splits previously aggregated rendering metrics by introducing \`styleDuration\` and \`layoutDuration\` on frame entries, alongside \`forcedStyleDuration\` and \`forcedLayoutDuration\` on script entries. Enabled by default in Chromium-based browsers starting with Chrome and Microsoft Edge 157, the addition directly targets INP bottlenecks by disambiguating CSS selector overhead from DOM layout recalculations. However, cross-browser consensus remains lopsided, as the parent LoAF specification has yet to gain implementation traction in Gecko or WebKit.

**Key Recommendations & Takeaways:**
- Actionable Advice: Performance and telemetry teams should adopt these attributes via progressive enhancement by checking for the existence of \`styleDuration\` or \`forcedStyleDuration\` on incoming LoAF entries. RUM collectors should record both the aggregate fallback values and the new granular durations to optimize INP investigations across Chromium users immediately.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tunetheweb: "Answering for @noamr who’s on annual leave at the moment.  This started off as part of the long tasks spec—hence the links in the original request in ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **9 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Performance timeline - Long Animation Frames](https://github.com/WebKit/standards-positions/issues/283) [open] 
  > *Latest discussion from @tunetheweb: "Answering for @noamr who’s on annual leave at the moment.  This started off as part of the long tasks spec—hence the links in the original request in ..."*

#### 📰 Ecosystem Blogs & Articles

- [Long Animation Frames Splits Style From Layout in Chrome 157: Finding Layout Thrashing in the Field \| Trade Assistance LLC](https://trade-assistance.com/blog/long-animation-frames-style-layout-duration-chrome-157) *(trade-assistance.com)*
  > The \*\*Long Animation Frame (LoAF) API\*\* helps developers diagnose main-thread jank and slow interactions (such as poor \*\*Interaction to Next Paint / INP\*\*) directly in real-user monitoring (RUM) Previously, LoAF bundled ...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/performance/identify-inp-causes) *(developer.chrome.com)*
  > The \*\*Long Animation Frame (LoAF) API\*\* helps developers diagnose main-thread jank and slow interactions (such as poor \*\*Interaction to Next Paint / INP\*\*) directly in real-user monitoring (RUM) This separation allows de...
- [github.io](https://w3c.github.io/long-animation-frames) *(w3c.github.io)*
  > The update introduces \*\*\`styleDuration\`\*\* and \*\*\`forcedStyleDuration\`\*\* (along with corresponding \`layoutDuration\` and \`forcedLayoutDuration\` counterparts) \*\*Publication\*\*: W3C Long Animation Frames Specification & Priva...
- [microsoft.com](https://developer.microsoft.com/microsoft-edge/origin-trials/trials/349e23d8-799a-4ac2-b45a-ffb91e09b4ce) *(developer.microsoft.com)*
  > The update introduces \*\*\`styleDuration\`\*\* and \*\*\`forcedStyleDuration\`\*\* (along with corresponding \`layoutDuration\` and \`forcedLayoutDuration\` counterparts) \*\*Core Message\*\*: Enables developers to distinguish style and la...
- [chromestatus.com](https://chromestatus.com/feature/5171478175809536?gate=5452953152520192) *(chromestatus.com)*
  > \*\*Announcements\*\*: Listed under \*Chrome Platform Status\* and official release notes (piloted around Chrome 148 and shipping through Chrome 157) led by Blink Performance API engineers (e.g., Yoav Weiss) \*\*Core Message\*\*: ...
- [chrome.com](https://developer.chrome.com/release-notes/148) *(developer.chrome.com)*
  > \*\*Announcements\*\*: Listed under \*Chrome Platform Status\* and official release notes (piloted around Chrome 148 and shipping through Chrome 157) led by Blink Performance API engineers (e.g., Yoav Weiss)

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Long Animation Frames style duration](https://www.mail-archive.com/blink-dev@chromium.org/msg15596.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > \*Initial public proposal\* https://github.com/w3c/long-animation-frames/pull/30 \*Requires code in //chrome?\* False \*Tracking bug\* https://issues.chromium.org/issues/476826067 \*Estimated milestones\* No milestones specified...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17740.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Philip Jägenst...
- [Intent to Ship: Long Animation Frames style and layout duration](https://groups.google.com/a/chromium.org/g/blink-dev/c/jWDYVP9tbgU/m/ia0jxTpZCgAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > Intent to Ship: Long Animation Frames style and layout duration Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent t...
- [Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/39) *(github.com · 2026-10-05T08:17:16)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab o...
- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17762.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Mike Taylor Th...

#### 📚 Platform Documentation & References

- [github.com](https://gist.github.com/yoavweiss/18e5c13239c43e34dadeda0fd2846834) *(gist.github.com)*
- [Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/39) *(github.com)*
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)*
- [Long Animation Frames style and Layout duration · Issue #4453 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4453) *(github.com)*
- [Long Animation Frames style and layout duration · Issue #1615 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1615) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (52 found across 11 planned queries, 20 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 10 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (3 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

---

<a id="5235261159112704-webtransport-send-groups-and-send-stream-prioritization"></a>
### [WebTransport send groups and send-stream prioritization](https://chromestatus.com/feature/5235261159112704)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5235261159112704](https://chromestatus.com/feature/5235261159112704) · [chromestatuslite.com/feature/5235261159112704](https://chromestatuslite.com/feature/5235261159112704)
- **Specification:** [https://www.w3.org/TR/webtransport/#webtransportsendstream](https://www.w3.org/TR/webtransport/#webtransportsendstream)
- **Chromium Bug:** [https://crbug.com/568825278](https://crbug.com/568825278)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

#### 📝 Overview

WebTransport already lets sites send data through WritableStreams. This feature lets applications assign outgoing streams to send groups and use sendOrder to prioritize streams within each group. It also provides sending statistics for streams and groups while preserving WritableStream transfer behavior.

> **Motivation:** Real-time applications often send multiple independent flows over one WebTransport session. When those flows compete for bandwidth, applications need to keep one flow from dominating while deciding which streams within each flow should go first. They also need visibility into sending progress so they can understand how those flows are performing.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (+120 points since 2026-10-12; footprint 290 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebTransport send groups and send-stream prioritization""`, `""WebTransportSendGroup" "sendOrder""`, `"site:github.com/w3c/webtransport send groups OR sendOrder"`, `""createSendGroup" webtransport chrome OR mozilla OR webkit"`
- **Analysis:** WebTransport send groups and send-stream prioritization address a critical multiplexing bottleneck by providing fair-share bandwidth allocation across groups alongside strict numeric sendOrder scheduling within groups. Standardized through the W3C WebTransport Working Group, this API is essential for advanced architectures such as Media over QUIC (MoQ) and high-frequency multiplayer gaming. With Chromium enabling the feature by default in Chrome 159 and Firefox adding support, the platform is moving toward deterministic transport scheduling.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams implementing low-latency media or game state synchronization should adopt createSendGroup() and sendOrder via progressive enhancement by checking for the method on the WebTransport prototype. Applications must retain fallback scheduling at the application layer or graceful degradation to standard unprioritized streams where full send-group support has not yet shipped.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *In developer trial (Behind a flag)* to *Enabled by default*
- 📰 **20 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [WebTransport: A new way to communicate over HTTP/3 \| by Queens Kisivuli \| Medium](https://medium.com/@queenskisivuli/webtransport-a-new-way-to-communicate-over-http-3-a730a8c84790) *(medium.com)*
  > \*\*WebTransport send groups and send-stream prioritization\*\* enhances the WebTransport API by giving web applications fine-grained control over how outgoing data is multiplexed and scheduled across an HTTP/3 (QUIC) connec...
- [appspot.com](https://cr-status.appspot.com/feature/5183354944225280) *(cr-status.appspot.com)*
  > The order is mutable and can be changed dynamically at runtime \*\*Motivation & Impact\*\*: Chrome’s dev team noted that while \`WritableStream\` previously allowed data transmission, implementations determined stream scheduli...
- [chromestatus.com](https://chromestatus.com/release-notes/159) *(chromestatus.com)*
  > \*\*Chromium Feature Entry & Release Notes\*\*: Chrome introduced \*\*WebTransport send groups and send-stream prioritization\*\* as part of a broader suite of WebTransport updates (alongside \*Datagram writable streams and prior...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Chromium Feature Entry & Release Notes\*\*: Chrome introduced \*\*WebTransport send groups and send-stream prioritization\*\* as part of a broader suite of WebTransport updates (alongside \*Datagram writable streams and prior...
- [How to use WebTransport  \|  Capabilities  \|  Chrome for Developers](https://developer.chrome.com/docs/capabilities/web-apis/webtransport) *(developer.chrome.com)*
  > Applications such as multiplayer web games, remote desktop/interaction systems, and live media pipelines needed a standard browser-level way to prioritize critical control packets or audio streams ahead of lower-priority...
- [openpwa.net](https://openpwa.net/reference/capabilities/webtransport) *(openpwa.net)*
  > Without browser-level send-stream prioritization, applications risked head-of-line blocking or were forced to terminate streams prematurely to prioritize urgent data Unlike WebSockets (which suffer from TCP head-of-line ...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17913.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5235261159112704`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritizatio...
- [\[blink-dev\] Intent to Ship: WebTransport send groups and send-stream prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17894.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5235261159112704`)*
  > \[blink-dev\] Intent to Ship: WebTransport send groups and send-stream prioritization Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport send groups and send-stream prioritization Chromestatus W...
- [WebTransport stream/send group getStats(): mark partial implementations by hamishwillee · Pull Request #31011 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/31011) *(github.com)* *(Cites: `https://chromestatus.com/feature/5235261159112704`)*
  > WebTransport stream/send group getStats(): mark partial implementations by hamishwillee · Pull Request #31011 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17940.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5235261159112704`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritization Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport send groups and send-stream prioritizatio...

#### 📚 Platform Documentation & References

- [WebTransportSendGroup - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendGroup) *(developer.mozilla.org)*
- [WebTransport: createSendGroup() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/createSendGroup) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendStream/sendOrder) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendStream) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 12 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (18 found, 17 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 51.1% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 3 · Standards Comments Read: 0

---

<a id="5194104408506368-webtransport-headers-and-responseheaders"></a>
### [WebTransport headers and responseHeaders](https://chromestatus.com/feature/5194104408506368)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5194104408506368](https://chromestatus.com/feature/5194104408506368) · [chromestatuslite.com/feature/5194104408506368](https://chromestatuslite.com/feature/5194104408506368)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers)
- **Chromium Bug:** [https://issues.chromium.org/issues/551850821](https://issues.chromium.org/issues/551850821)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `In development`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

#### 📝 Overview

Adds support for passing custom HTTP request headers via WebTransportOptions and inspecting server response headers through the WebTransport instance. This allows web applications to supply metadata, authentication tokens, and custom parameters during the initial CONNECT handshake and access server-provided headers once the connection is established.

> **Motivation:** The WebTransport constructor requires support for custom HTTP request headers to address several technical limitations in authentication, routing, and capability negotiation.  Without custom headers, developers must pass authentication tokens in URL query strings, which exposes credentials in server logs and telemetry, or authenticate over an initi...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (+120 points since 2026-10-12; footprint 240 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** Custom handshake headers and the companion responseHeaders property represent a major architectural maturity milestone for the WebTransport standard, formally specified by the W3C WebTransport Working Group to fix long-standing auth and routing gaps. With Chromium-based browsers shipping default support across Chrome and Microsoft Edge 156 and Mozilla landing implementation in Firefox 160, the feature resolves critical security concerns around token leakage in URLs and intermediaries. Developer perception is strongly favorable as it eliminates bespoke stream-level authentication handshakes and aligns WebTransport with standard reverse proxy architectures.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should adopt WebTransport handshake headers via progressive enhancement, checking for the presence of the responseHeaders attribute on instantiated transports or inspecting option capability before discarding token fallbacks. Until WebKit ships support in stable Safari releases, servers should accept both header-based authentication and legacy query-string or stream-based handshakes for broad client compatibility.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [ietf.org](https://datatracker.ietf.org/meeting/125/materials/slides-125-webtrans-ietf125-slides-00) *(datatracker.ietf.org)*
  > Developers can pass request headers via \`WebTransportOptions.headers\` Once the connection is established and \`transport.ready\` fulfills, server-returned headers become available via \`transport.responseHeaders\` as an immu...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > \*\*Source:\*\* \*Chrome Platform Status & Chrome 155/156 Beta / Release Notes\* \*\*Details:\*\* Chrome documented the feature shipping across Chromium
- [microsoft.com](https://learn.microsoft.com/th-th/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com)*
  > \*\*Source:\*\* \*Microsoft Edge 156 Web Platform Release Notes\* \*\*Details:\*\* Microsoft highlighted \`WebTransport headers and responseHeaders\` in its developer release notes under the core Web APIs section, emphasizing that d...
- [docs.rs](https://docs.rs/web-wt-sys/latest/web_wt_sys/struct.WebTransport.html?search=std%3A%3Avec) *(docs.rs)*
  > \*\*Details:\*\* Standardized under \`#dom-webtransportoptions-headers\` and \`\[SameObject\] readonly attribute Headers? responseHeaders\`
- [\[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17342.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Chromestatus Wed, 02 Sep 2026 07:28:08 -0700...
- [Microsoft Edge 156 web platform release notes (Oct. 22, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com · 2026-10-22T00:00:00)*
  > When calling the WebTransport() ... &lt;strong&gt;The responseHeaders property on the WebTransport object instance allows you to inspect the HTTP response headers that are sent by the server after the initial CONNECT handshake...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17342.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194104408506368`)*
  > \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Chromestatus Wed, 02 Sep 2026 07:28:08 -0700...
- [FF160 WebTransport() constructor headers option by hamishwillee · Pull Request #31031 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/31031) *(github.com)* *(Cites: `https://chromestatus.com/feature/5194104408506368`)*
  > FF160 WebTransport() constructor headers option by hamishwillee · Pull Request #31031 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in ...

#### 📚 Platform Documentation & References

- [WebTransport API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/160) *(developer.mozilla.org)*
- [\[HTTP\] Add support for WebTransport ResponseHeaders · Issue #46279 · mdn/content · GitHub](https://github.com/mdn/content/issues/46279) *(github.com)*
- [WebTransport/Meetings2023 - W3C Wiki](https://www.w3.org/wiki/WebTransport/Meetings2023) *(w3.org)*
- [Do we want to allow web developers to add headers of the CONNECT request? · Issue #263 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/263) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (66 found across 11 planned queries, 20 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 9 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 1 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 51.1% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5148774971342848-webtransport-datagram-readable-stream-type"></a>
### [WebTransport Datagram readable stream type](https://chromestatus.com/feature/5148774971342848)

- **Milestone:** Chrome 159 (Enabled by default) · first listed in Chrome 155
- **ChromeStatus:** [chromestatus.com/feature/5148774971342848](https://chromestatus.com/feature/5148774971342848) · [chromestatuslite.com/feature/5148774971342848](https://chromestatuslite.com/feature/5148774971342848)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransportoptions-datagramsreadabletype](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-datagramsreadabletype)
- **Chromium Bug:** [https://issues.chromium.org/issues/547572475](https://issues.chromium.org/issues/547572475)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `In development`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

#### 📝 Overview

Adds the  WebTransportOptions.datagramsReadableType  constructor option. By default, incoming WebTransport Datagrams are exposed through a default  ReadableStream . Applications that require BYOB reading can request a readable byte stream by setting  datagramsReadableType: "bytes" .

> **Motivation:** WebTransport Datagrams are discrete messages rather than an undifferentiated byte sequence. A readable byte stream can lose empty Datagrams and can lose message boundaries when BYOB reads use a minimum byte count spanning multiple Datagrams.  Making a default  ReadableStream  the default preserves Datagram boundaries and empty Datagrams. Applicatio...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (+110 points since 2026-10-12; footprint 200 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"WebTransport datagrams readable stream type"`, `"WebTransportOptions datagramsReadableType"`, `"WebTransport datagramsReadableType chromium mozilla webkit"`
- **Analysis:** The WebTransport Datagram readable stream type (\`WebTransportOptions.datagramsReadableType\`) standardizes control over whether incoming datagrams are exposed via a message-preserving default stream or an opt-in byte stream supporting zero-copy Bring Your Own Buffer (BYOB) readers. Scheduled to ship enabled by default in Chrome 159, the addition addresses longstanding developer friction around message boundary delineation and empty datagram loss. Engine consensus is exceptionally strong across the board, with active implementation and alignment across Chromium, Gecko, and WebKit.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building real-time applications should rely on the default message-preserving datagram stream for standard payloads, and conditionally supply \`{ datagramsReadableType: 'bytes' }\` only when explicit BYOB allocation control is necessary. Ensure graceful fallback handling or feature detection when attaching BYOB readers, as support for the byte-stream mode rolls out across stable browser releases.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *In developer trial (Behind a flag)* to *Enabled by default*
- 📰 **13 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [openpwa.net](https://openpwa.net/reference/capabilities/webtransport) *(openpwa.net)*
  > \*\*Constructor Option\*\*: \`new WebTransport(url, { datagramsReadableType: "bytes" \| "default" })\` \*\*Default Behavior (\`"default"\`)\*\*: Exposes incoming datagrams through a standard (non-byte) \`ReadableStream\` yielding discr...
- [chromestatus.com](https://chromestatus.com/feature/5148774971342848/activity) *(chromestatus.com)*
  > \*\*Byte-stream Mode (\`"bytes"\`)\*\*: Exposes incoming datagrams as a byte stream (\`ReadableByteStreamController\`), allowing consumers to attach a \*\*Bring Your Own Buffer (BYOB)\*\* reader (\`stream.getReader({ mode: "byob" })\`...
- [How to use WebTransport  \|  Capabilities  \|  Chrome for Developers](https://developer.chrome.com/docs/capabilities/web-apis/webtransport) *(developer.chrome.com)*
  > Applications that prioritize memory efficiency (such as low-overhead gaming networks, WebAudio pipelines, or high-throughput media engines) can explicitly opt into \`datagramsReadableType: "bytes"\` to eliminate memory all...
- [appspot.com](https://lighthouse-ci-staging-dot-cr-status.appspot.com/feature/5148774971342848) *(lighthouse-ci-staging-dot-cr-status.appspot.com)*
  > It resolves the conflict between developers who need \*\*datagram message integrity/framing\*\* and those who require \*\*zero-copy BYOB memory performance\*\* in high-frequency network loops
- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type Chromestatus Mon, 14 Sep 2026 ...
- [\[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17839.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type Chromestatus Wed, 21 Oct 2026 13:52:50 -...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5148774971342848`)*
  > \[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type Chromestatus Mon, 14 Sep 2026 ...
- [\[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17839.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5148774971342848`)*
  > \[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type Chromestatus Wed, 21 Oct 2026 13:52:50 -...
- [\[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17861.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5148774971342848`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type Alex Russell Tue, 27 Oct 2026 12...
- [\[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17882.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5148774971342848`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type 'Monica Chintala' via blink-dev ...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [github.com](https://github.com/vmeansdev/webtransport-bun) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [\`pullDatagrams\` errors \`datagrams.readable\` on a zero-length datagram when \`datagramsReadableType\` is \`"bytes"\` · Issue #795 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/795) *(github.com)*
- [FF160 WebTransport BYOB datagram readers and datagramsReadableType option by hamishwillee · Pull Request #31030 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/31030) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (48 found across 12 planned queries, 14 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 51.1% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5168674259468288-optional-descriptors-for-registered-custom-properties"></a>
### [Optional descriptors for registered custom properties](https://chromestatus.com/feature/5168674259468288)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5168674259468288](https://chromestatus.com/feature/5168674259468288) · [chromestatuslite.com/feature/5168674259468288](https://chromestatuslite.com/feature/5168674259468288)
- **Specification:** [https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule](https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule)
- **Chromium Bug:** [https://issues.chromium.org/issues/491802759](https://issues.chromium.org/issues/491802759)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `Support`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/registered-custom-properties) (Chrome: `85`, Firefox: `128`, Safari: `16.4`) · *group-level data: web-features [`registered-custom-properties`](https://webstatus.dev/features/registered-custom-properties), shared with 4 other ChromeStatus features*

#### 📝 Overview

Allows authors to omit any descriptor in an @property rule and the corresponding optional members of CSS.registerProperty(). Omitted values  default to universal syntax, inheritance, and the guaranteed-invalid  initial value; invalid descriptors use normal CSS fallback behavior.

> **Motivation:** Registered custom properties currently require authors to repeat syntax and  inherits descriptors, and typed registrations cannot omit initial-value. The  CSSWG resolved that registrations should behave like unregistered custom  properties except for the descriptors authors explicitly provide. This removes  boilerplate and lets typed properties use...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (+100 points since 2026-10-12; footprint 220 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"css property optional descriptors chrome status"`, `"csswg property descriptors optional site github com w3c csswg-drafts"`, `"optional descriptors for registered custom properties"`
- **Analysis:** The updated CSS Properties and Values API specification makes every descriptor in the \`@property\` rule and \`CSS.registerProperty()\` optional, defaulting omitted values to match standard custom property behavior—universal syntax (\`\*\`), inheritance enabled (\`true\`), and a guaranteed-invalid initial value. Normatively resolved by the W3C CSS Working Group and led in implementation by Chromium, this change also establishes standard CSS fault-tolerant error recovery instead of discarding an entire rule on a single invalid descriptor. Beyond cutting repetitive boilerplate, it critically enables typed custom properties to work with per-use \`var()\` fallback values.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should avoid omitting \`@property\` descriptors in raw production CSS for now, because any browser lacking this update will mark the entire rule invalid and fail to register the property. Instead, adopt build-time tooling such as PostCSS plugins to automate descriptor expansion, or test the streamlined syntax behind browser flags in modern Chromium builds.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @hober: "Closing as we've identified our position...."
- Standards Activity (Mozilla): Latest discussion from @dbaron: "Also see #93, where we added the original position...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **12 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Properties and Values API Level 1](https://github.com/WebKit/standards-positions/issues/22) [closed] `position: support`, `topic: css`, `venue: W3C CSS WG`, `topic: houdini`, `from: Google`
  > *Latest discussion from @hober: "Closing as we've identified our position...."*
- **Mozilla:** [CSS Properties & Values API: @property](https://github.com/mozilla/standards-positions/issues/331) [closed] `venue: W3C`, `position: positive`
  > *Latest discussion from @dbaron: "Also see #93, where we added the original position...."*

#### 📦 Polyfills & NPM Ecosystem

- [@csstools/postcss-property-rule-optional-descriptors](https://www.npmjs.com/package/@csstools/postcss-property-rule-optional-descriptors) `v1.0.0` — Omit optional descriptors in at-property rules

#### 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://learn.microsoft.com/th-th/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com)*
  > Historically, the CSS Properties and Values API (\`@property\` and \`CSS.registerProperty()\`) required extensive boilerplate \`syntax\`: Defaults to \`\*\` (universal token stream / untyped)
- [tutorialspoint.com](https://www.tutorialspoint.com/css/css_property-initial-value.htm) *(tutorialspoint.com)*
  > Developers were mandated to explicitly provide \`syntax\` and \`inherits\`, and typed properties required \`initial-value\` Omitting a required descriptor or specifying an invalid one caused the entire \`@property\` rule to be d...
- [chromestatus.com](https://chromestatus.com/release-notes/159) *(chromestatus.com)*
  > \*\*Resilient parsing:\*\* Invalid descriptors follow standard CSS fallback/error-recovery rules rather than discarding the entire \`@property\` rule \*\*API parity:\*\* The JavaScript counterpart, \`CSS.registerProperty()\`, makes ...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Chrome Platform Status & Chrome 159 Release Notes:\*\* Chromium officially tracked this capability under bug \`#491802759\`
- [cssdb.org](https://preset-env.cssdb.org/features) *(preset-env.cssdb.org)*
  > \*\*PostCSS Preset Env & \`@csstools/postcss-property-rule-optional-descriptors\`:\*\* The CSS tooling ecosystem swiftly adopted the specification
- [netlify.app](https://chore-update--yarnpkg.netlify.app/ja/package/@csstools/postcss-property-rule-optional-descriptors) *(chore-update--yarnpkg.netlify.app)*
  > \*\*PostCSS Preset Env & \`@csstools/postcss-property-rule-optional-descriptors\`:\*\* The CSS tooling ecosystem swiftly adopted the specification The CSSTools team added a dedicated PostCSS plugin allowing authors to write st...

#### 🔗 Inbound Citations & Reverse Links

- [\[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts · GitHub](https://github.com/w3c/css-houdini-drafts/issues/994) *(github.com · 2020-07-23T22:24:41)* *(Cites: `https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule`)*
  > \[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another...
- [\[css-houdini-drafts\] Pull Request: \[css-properties-values-api\]\[editorial\] CSS.registerProperty() requires inherits argument from Guillaume via GitHub on 2026-01-22 (public-houdini-archive@w3.org from January 2026)](https://lists.w3.org/Archives/Public/public-houdini-archive/2026Jan/0000.html) *(lists.w3.org)* *(Cites: `https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule`)*
  > cdoublev has just submitted a new pull request for https://github.com/w3c/css-houdini-drafts: == \[css-properties-values-api\]\[editorial\] CSS.registerProperty() requires inherits argument == The \[register a custom property...

#### 📚 Platform Documentation & References

- [inherits CSS at-rule descriptor - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@property/inherits) *(developer.mozilla.org)*
- [github.com](https://github.com/w3c/csswg-drafts/issues/13211) *(github.com)*
- [\[css-properties-values-api\] A compact syntax for registering global constants/custom properties · Issue #9206 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/9206) *(github.com)*
- [\[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts · GitHub](https://github.com/w3c/css-houdini-drafts/issues/994) *(github.com)*
- [\[css-houdini-drafts\] Pull Request: \[css-properties-values-api\]\[editorial\] CSS.registerProperty() requires inherits argument from Guillaume via GitHub on 2026-01-22 (public-houdini-archive@w3.org from January 2026)](https://lists.w3.org/Archives/Public/public-houdini-archive/2026Jan/0000.html) *(lists.w3.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `registered-custom-properties` on [wpt.fyi](https://wpt.fyi/results?q=feature:registered-custom-properties) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 86.8% · Safari 91.2%; experimental: Chrome 91.2% · Edge 91.2% · Firefox 87.7% · Safari 93%

#### 🌐 Web-features Group Context

*group-level data: web-features [`registered-custom-properties`](https://webstatus.dev/features/registered-custom-properties), shared with 4 other ChromeStatus features*

- **Chrome usage:** 0.2% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/146))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (52 found across 11 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 11 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 1 verified) · `web-features mapping` *(group "registered-custom-properties", shared with 4 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "registered-custom-properties": Chrome 66.7% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 7

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

- **Momentum:** **Moderate** (+90 points since 2026-10-12; footprint 469 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The \`margin-trim\` CSS property solves a longstanding layout challenge by allowing containers to trim extraneous child margins at container boundaries without requiring descendant pseudo-class overrides. Following early adoption in Safari 16.4, Chromium has enabled default support in Chrome 155, bringing the feature significantly closer to ubiquitous baseline availability. The CSS Working Group also recently streamlined the specification by focusing \`margin-trim\` specifically on block and multi-column containers while scoping it out of flex and grid containers.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can start adopting \`margin-trim\` progressively today inside \`@supports (margin-trim: block)\` rules to eliminate child margin overflow in card and article containers. However, developers must continue relying on existing fallback selectors for legacy browsers and avoid applying the property to flex or grid containers in anticipation of the revised CSS Box Model Level 4 specification.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Sounds good. Closing without a dashboard entry, as it seems like a minor feature...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Easier Layout with Margin-Trim" (8 points, 1 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **6 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Easier Layout with Margin-Trim](https://news.ycombinator.com/item?id=43858089) — *Hacker News (8 pts, 1 comments)*
- 🐦 [カードの最後の段落だけ、下の余白を消したい。 「最後の子だけ別ルール」を足すの、ちょっと面倒。  CSSのmargin-trimなら、親側で端に接する子の余白を消せる。Chrome 155でも対応。 使える環境はまだ限られるけど、こういう例](https://twitter.com/yabi_labs/status/2118912072452813005) — *Twitter / X by @yabi\_labs (0 likes/RTs, 0 replies)*
- 🐦 [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*
- 🐦 [Wes Bos on X: "CSS is getting margin-trim! Remove margins ...](https://twitter.com/wesbos/status/1668994174136328200) — *Twitter / X by @wesbos (0 likes/RTs, 0 replies)*
- 🐦 [TAK on X: "margin-trimがSafari以外でもサポートされたら相殺は多少許容されると思う" / X](https://x.com/tak_dcxi/status/1911386708597154237) — *Twitter / X by @tak\_dcxi (0 likes/RTs, 0 replies)*
- 🐦 [全部入りHTML太郎 on X: "margin-trimはまだしばらく使えなさ ...](https://x.com/_yuheiy/status/1873357980441436466) — *Twitter / X by @\_yuheiy (0 likes/RTs, 0 replies)*

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
- [smashingmagazine.com](https://www.smashingmagazine.com/2023/11/few-ways-css-easier-write-2023) *(smashingmagazine.com)*
  > Historically, developers managed inner spacing through workarounds—such as \`:last-child\`, \`:not(:last-of-type)\`, or the "lobotomized owl" selector (\`\* + \*\`) \*\*Focus:\*\* Modern CSS layout workflows and simplifying technica...
- [youtube.com](https://www.youtube.com/watch?v=UE01cIWJBko) *(youtube.com)*
  > Historically, developers managed inner spacing through workarounds—such as \`:last-child\`, \`:not(:last-of-type)\`, or the "lobotomized owl" selector (\`\* + \*\`) The discussion centers on retiring the "lobotomized owl" select...
- [chriscoyier.net](https://chriscoyier.net/2023/06/12/margin-trim-as-a-best-practice) *(chriscoyier.net)*
  > Historically, developers managed inner spacing through workarounds—such as \`:last-child\`, \`:not(:last-of-type)\`, or the "lobotomized owl" selector (\`\* + \*\`) \*\*Focus:\*\* Component design systems and CSS architecture
- [margin-trim \| CSS-Tricks](https://css-tricks.com/almanac/properties/m/margin-trim) *(css-tricks.com)*
  > With \`margin-trim\`, the container itself handles this cleanly via logical values such as \`block-start\`, \`block-end\`, \`block\`, \`inline\`, or \`none\` The CSS-Tricks Almanac entry highlights the benefits of its logical proper...
- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > \*\*Context:\*\* Google announced official support for \`margin-trim\` on block containers and multi-column containers

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Margin-trim](http://www.mail-archive.com/blink-dev@chromium.org/msg17204.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5197863732772864`)*
  > \[blink-dev\] Intent to Ship: Margin-trim Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Margin-trim Morten Stenshorne Tue, 18 Aug 2026 01:16:14 -0700 \*Contact emails\* \[email&#160;protected\] \*Specificati...
- [Re: \[blink-dev\] Intent to Ship: Margin-trim](http://www.mail-archive.com/blink-dev@chromium.org/msg17215.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5197863732772864`)*
  > Re: \[blink-dev\] Intent to Ship: Margin-trim Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Margin-trim TAMURA, Kent Tue, 18 Aug 2026 15:40:34 -0700 LGTM2 On Wed, Aug 19, 2026 at 12:33 AM Mike Taylo...
- [\[blink-dev\] Intent to Prototype: Margin-trim](http://www.mail-archive.com/blink-dev@chromium.org/msg15804.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5197863732772864`)*
  > \[blink-dev\] Intent to Prototype: Margin-trim Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Margin-trim Morten Stenshorne Wed, 11 Feb 2026 01:46:53 -0800 \*Contact emails\* \[email&#160;protected\] \*S...
- [Re: \[blink-dev\] Intent to Ship: Margin-trim](http://www.mail-archive.com/blink-dev@chromium.org/msg17217.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5197863732772864`)*
  > Re: \[blink-dev\] Intent to Ship: Margin-trim Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Margin-trim Daniel Bratell Wed, 19 Aug 2026 03:17:04 -0700 LGTM3 /Daniel On 2026-08-19 00:40, TAMURA, Kent...
- [CSS Box Model Module Level 4](https://w3c.github.io/csswg-drafts/css-box-4) *(w3c.github.io)* *(Cites: `https://drafts.csswg.org/css-box-4/#margin-trim`)*
  > CSS Box Model Module Level 4 CSS Box Model Module Level 4 Editor’s Draft , 6 August 2026 More details about this document This version: https://drafts.csswg.org/css-box-4/ Latest published version: https://www.w3.org/TR/...

#### 📚 Platform Documentation & References

- [margin-trim CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-trim) *(developer.mozilla.org)*
- [csswg-drafts/css-box-4/Overview.bs at main · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/blob/main/css-box-4/Overview.bs) *(github.com)*
- [CSS Box Model Module Level 4](https://www.w3.org/TR/css-box-4) *(w3.org)*
- [1506241 - (margin-trim) Implement the margin-trim property from CSS Box Level 4](https://bugzilla.mozilla.org/show_bug.cgi?id=1506241) *(bugzilla.mozilla.org)*
- [margin-trim · Issue #429 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/429) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `margin-trim` on [wpt.fyi](https://wpt.fyi/results?q=feature:margin-trim) (via webstatus.dev) — stable: Chrome 96.2% · Edge 96.2% · Firefox 3.8% · Safari 75.5%; experimental: Chrome 96.2% · Edge 96.2% · Firefox 84.9% · Safari 84.9%

#### 🌐 Web-features Group Context

*group-level data: web-features [`margin-trim`](https://webstatus.dev/features/margin-trim)*

- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/994))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 11 planned queries, 36 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 9 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Tweets found by web search` (7 found, 4 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 1 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (10 found, 10 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "margin-trim", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "margin-trim": Chrome 96.2% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 4

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

- **Momentum:** **Moderate** (+90 points since 2026-10-12; footprint 280 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"CSS symbols function blink intent to ship"`, `"CSS symbols function webkit support bug 299922"`
- **Analysis:** The CSS symbols() function from CSS Counter Styles Level 3 enables authors to declare inline, anonymous counter styles directly inside properties like list-style-type without defining global @counter-style rules. With Blink enabling it by default in Chrome 155, the feature is finally closing a decade-old cross-engine interoperability gap alongside Mozilla Gecko's longstanding implementation. Consensus across browser engines is complete, with WebKit formally backing the specification and actively working on implementation patches.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can start using symbols() today via progressive enhancement, wrapping usage inside @supports (list-style: symbols('\*')) or supplying fallback bullet declarations for legacy clients. For bullet styles where consistent rendering across Safari is non-negotiable in production, continue defining standard @counter-style rules until WebKit ships stable support.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [\[css-counter-styles-3\] CSS symbols() function](https://github.com/WebKit/standards-positions/issues/714) [closed] `position: support`, `topic: css`, `venue: W3C CSS WG`
  > *Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1071436: Support image symbols in symbols()](https://bugzilla.mozilla.org/show_bug.cgi?id=1071436) `[NEW]`
- **WebKit (Safari):** [Bug #299922: \[css-counter-styles\] Support CSS \`symbols()\` function](https://bugs.webkit.org/show_bug.cgi?id=299922) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [symbols() - CSS: Cascading Style Sheets \| MDN](https://mdn2.netlify.app/en-us/docs/web/css/symbols) *(mdn2.netlify.app)*
  > The CSS \*\*\`symbols()\`\*\* functional notation (defined in \[CSS Counter Styles Level 3\](https://drafts.csswg.org/css-counter-styles-3/#symbols-function)) allows developers to construct inline, anonymous counter styles direc...
- [google.com](https://groups.google.com/a/chromium.org/d/msgid/blink-dev/DM4PR21MB4640B9E11FD5D8865D9B813F92CA2%40DM4PR21MB4640.namprd21.prod.outlook.com) *(groups.google.com)*
  > The CSS \*\*\`symbols()\`\*\* functional notation (defined in \[CSS Counter Styles Level 3\](https://drafts.csswg.org/css-counter-styles-3/#symbols-function)) allows developers to construct inline, anonymous counter styles direc...
- [symbols() \| CSS-Tricks](https://css-tricks.com/almanac/functions/s/symbols) *(css-tricks.com)*
  > \*\*\`symbolic\`\*\* \*(default)\*: Cycles through symbols, repeating each symbol count per iteration (e.g., \`\*\`, \`\*\*\`, \`\*\*\*\`) \*\*\`numeric\`\*\*: Treats the symbol list as the glyphs for a place-value numbering system (requires at l...
- [An in-depth guide to customising lists with CSS - Piccalilli](https://piccalil.li/blog/an-in-depth-guide-to-customising-lists-with-css) *(piccalil.li)*
  > \*\*Source:\*\* \*Piccalilli\* (by Richard Rutter) \*\*Coverage:\*\* Explores modern methods for formatting list bullets and ordered sequences, contrasting \`::marker { content: ... }\`, \`@counter-style\`, and \`symbols()\`
- [webkit.org](https://bugs.webkit.org/show_bug.cgi?id=299922) *(bugs.webkit.org)*
  > The article demonstrates using \`symbols(cyclic "\*", "†", "‡", "§")\` for traditional footnote styling, emphasizing how inline definitions prevent polluting global stylesheet namespaces Active patches landed on WebKit Bugz...
- [\[blink-dev\] Re: Intent to Ship: CSS Symbols()](http://www.mail-archive.com/blink-dev@chromium.org/msg17348.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: CSS Symbols() Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS Symbols() 'Ananya Anand' via blink-dev Wed, 02 Sep 2026 10:15:33 -0700 Thanks for the reviews! I've ...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: CSS Symbols()](http://www.mail-archive.com/blink-dev@chromium.org/msg17348.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > \[blink-dev\] Re: Intent to Ship: CSS Symbols() Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS Symbols() 'Ananya Anand' via blink-dev Wed, 02 Sep 2026 10:15:33 -0700 Thanks for the reviews! I've ...
- [web-features consumers report for 2026-11-01 · Issue #4601 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4601) *(github.com · 2026-11-01T10:49:29)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > New feature: symbols() #4203 used by https://&lt;strong&gt;chromestatus.com/feature/5146996093616128&lt;/strong&gt;
- [web-features consumers report for 2026-10-01 · Issue #4457 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4457) *(github.com · 2026-10-01T10:28:04)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > New feature: symbols() #4203 used by https://&lt;strong&gt;chromestatus.com/feature/5146996093616128&lt;/strong&gt;
- [\[css-counter-styles-3\] CSS symbols() function · Issue #714 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/714) *(github.com · 2026-08-24T19:00:16)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > \[css-counter-styles-3\] CSS symbols() function · Issue #714 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or wind...
- [web-features consumers report for 2026-09-01 · Issue #4287 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4287) *(github.com · 2026-09-01T08:55:15)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > https://github.com/web-platform-dx/web-features/issues/4203 used by https://&lt;strong&gt;chromestatus.com/feature/5146996093616128&lt;/strong&gt; · New feature: symbols() #4203 · none used by https://chromestatus.com/feature/511372...

#### 📚 Platform Documentation & References

- [symbols() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/symbols) *(developer.mozilla.org)*
- [github.com](https://github.com/web-platform-dx/developer-signals/issues/942) *(github.com)*
- [github.com](https://github.com/web-platform-tests/interop/issues/1432) *(github.com)*
- [web-features consumers report for 2026-11-01 · Issue #4601 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4601) *(github.com)*
- [web-features consumers report for 2026-10-01 · Issue #4457 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4457) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [CSS Symbols() Demo](https://developer.mozilla.org/en-US/docs/Web/CSS/symbols)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (70 found across 12 planned queries, 21 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (2 found, 1 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (3 found, 2 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (5 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

---

<a id="6207138742534144-accentcolor-accentcolortext-follows-accent-color-value"></a>
### [AccentColor & AccentColorText follows accent-color value](https://chromestatus.com/feature/6207138742534144)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6207138742534144](https://chromestatus.com/feature/6207138742534144) · [chromestatuslite.com/feature/6207138742534144](https://chromestatuslite.com/feature/6207138742534144)
- **Specification:** [https://www.w3.org/TR/css-color-4/#css-system-colors](https://www.w3.org/TR/css-color-4/#css-system-colors)
- **Chromium Bug:** [https://issues.chromium.org/issues/536420071](https://issues.chromium.org/issues/536420071)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `Shipped/Shipping`

#### 📝 Overview

\`AccentColor\` and \`AccentColorText\` reflect the element's effective \`accent-color\` value instead of only platform-provided system accent colors.  This allows CSS to reference the same colors used by \`accent-color\` styling, making it easier to keep custom styling consistent with form controls and other accented UI. It aligns Chromium's behavior with the CSS Color Module Level 4 specification.

> **Motivation:** Currently, \`AccentColor\` and \`AccentColorText\` keywords have been implemented in a limited capacity for Chromium. They reflect the OS' chosen system accent color when \`accent-color\` is set to \`auto\` and return a default value otherwise.   The CSSWG resolved that the keywords should reflect the value of \`accent-color\`, allowing developers to use the...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (+90 points since 2026-10-12; footprint 210 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** The alignment of the \`AccentColor\` and \`AccentColorText\` system color keywords with the effective \`accent-color\` property fulfills a long-standing CSS Color Module Level 4 specification update, shipping enabled by default in Chrome 159. This resolves historical fingerprinting mitigations that either locked these keywords to static platform fallbacks or restricted them exclusively to installed web apps. With strong multi-engine backing across Chromium, Gecko, and WebKit, the feature establishes a standardized, dynamic link between form accent tokens and surrounding component styling.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can begin adopting \`AccentColor\` and \`AccentColorText\` to automatically coordinate custom controls, focus indicators, and adjacent text with the active \`accent-color\`. Because older browsers fall back to static system defaults or predefined fallbacks, author styles should pair these keywords with appropriate CSS custom property fallbacks or progressive enhancement checks where exact cross-browser color parity is required.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "I think this is fine, propose positive. Specially with the recent resolutions from last week I don't see many concerns here...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **12 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **Mozilla:** [\[CSS Color Module Level 4\] AccentColor takes its value from accent-color](https://github.com/mozilla/standards-positions/issues/1438) [closed] `venue: W3C`, `position: positive`, `topic: CSS`
  > *Latest discussion from @emilio: "I think this is fine, propose positive. Specially with the recent resolutions from last week I don't see many concerns here...."*

#### 📰 Ecosystem Blogs & Articles

- [Accent Color \| blog.damato.design](https://blog.damato.design/posts/accent-color) *(blog.damato.design)*
  > Historically, browsers treated \`AccentColor\` and \`AccentColorText\` purely as system-level tokens (often locked down or restricted to installed PWAs to mitigate device fingerprinting) WebKit and Gecko generally welcomed a...
- [chromestatus.com](https://chromestatus.com/feature/5068127364186112) *(chromestatus.com)*
  > Historically, browsers treated \`AccentColor\` and \`AccentColorText\` purely as system-level tokens (often locked down or restricted to installed PWAs to mitigate device fingerprinting) \*\*Privacy & Fingerprinting Analyses (...
- [googleusercontent.com](https://doc-26bg-1o5g-issuetracker.googleusercontent.com/issues/570417347) *(doc-26bg-1o5g-issuetracker.googleusercontent.com)*
  > \*\*Chrome Platform Status:\*\* Under the entry \*“AccentColor & AccentColorText follows accent-color value”\* (Chromium Issue 536420071 / Feature 6207138742534144, targeting Chrome 157), the Chrome team noted this change alig...
- [webkit.org](https://bugs.webkit.org/show_bug.cgi?id=319586) *(bugs.webkit.org)*
  > \*\*Cross-Browser Standards Positions:\*\* WebKit has tracked this via Bugzilla (#319586) and PR #69706, while Mozilla discussed support under Mozilla Standards Positions (#1438)
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/visual-design/color) *(developer.chrome.com)*
  > With this alignment, developers can style custom UI (e.g., custom switches, range thumbs, or badge labels) to inherit the primary UI tint without losing accessibility safeguards
- [\[blink-dev\] Intent to Implement and Ship: AccentColor/Text follows accent-color](http://www.mail-archive.com/blink-dev@chromium.org/msg17852.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Implement and Ship: AccentColor/Text follows accent-color Skip to site navigation (Press enter) \[blink-dev\] Intent to Implement and Ship: AccentColor/Text follows accent-color 'Alexander Kyereboah' ...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Implement and Ship: AccentColor/Text follows accent-color](http://www.mail-archive.com/blink-dev@chromium.org/msg17852.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6207138742534144`)*
  > \[blink-dev\] Intent to Implement and Ship: AccentColor/Text follows accent-color Skip to site navigation (Press enter) \[blink-dev\] Intent to Implement and Ship: AccentColor/Text follows accent-color 'Alexander Kyereboah' ...
- [Re: \[blink-dev\] Re: Intent to Implement and Ship: AccentColor/Text follows accent-color](http://www.mail-archive.com/blink-dev@chromium.org/msg17880.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6207138742534144`)*
  > Re: \[blink-dev\] Re: Intent to Implement and Ship: AccentColor/Text follows accent-color Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Implement and Ship: AccentColor/Text follows accent-color Mike T...
- [\[blink-dev\] Re: Intent to Implement and Ship: AccentColor/Text follows accent-color](http://www.mail-archive.com/blink-dev@chromium.org/msg17864.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6207138742534144`)*
  > \[blink-dev\] Re: Intent to Implement and Ship: AccentColor/Text follows accent-color Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Implement and Ship: AccentColor/Text follows accent-color Alex Russell T...
- [Break out \`AccentColor\` and \`AccentColorText\` from \`system-color\` CSS feature by ddbeck · Pull Request #4503 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/pull/4503) *(github.com)* *(Cites: `https://chromestatus.com/feature/6207138742534144`)*
  > Break out \`AccentColor\` and \`AccentColorText\` from \`system-color\` CSS feature by ddbeck · Pull Request #4503 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appear...
- [\`AccentColor\` should reflect \`accent-color\` · Issue #1361 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/1361) *(github.com · 2026-09-04T11:29:22)* *(Cites: `https://chromestatus.com/feature/6207138742534144`)*
  > \`AccentColor\` should reflect \`accent-color\` · Issue #1361 · web-platform-tests/interop · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or windo...

#### 📚 Platform Documentation & References

- [\`AccentColor\` & \`AccentColorText\` follows \`accent-color\` value · Issue #1763 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1763) *(github.com)*
- [github.com](https://github.com/web-platform-dx/web-features/issues/4285) *(github.com)*
- [github.com](https://github.com/mozilla/standards-positions/issues/1438) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/613) *(github.com)*
- [Break out \`AccentColor\` and \`AccentColorText\` from \`system-color\` CSS feature by ddbeck · Pull Request #4503 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/pull/4503) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [AccentColor & AccentColorText follows accent-color value Demo](https://kyerebo.github.io/demos/system-accent-color/index.html)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 11 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 9 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 1

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

- **Momentum:** **Moderate** (+80 points since 2026-10-12; footprint 260 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The TC39 Import Text proposal has rapidly matured at Stage 3, standardizing declarative text asset loading via \`import ... with { type: 'text' }\`. With Firefox shipping support in version 153 and Chromium enabling it by default in Chrome 155, the feature is close to full cross-browser interoperability. Developer sentiment is strongly favorable as native text modules eliminate historical reliance on bundler-specific plugins like raw-loader.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should prepare their build pipelines and bundlers to support standard \`with { type: 'text' }\` syntax, but maintain fallback transforms or dynamic \`fetch().then(r =&gt; r.text())\` paths until Safari ships full support. Avoid relying on proprietary query parameters in shared library code to ensure forward compatibility with standard ECMAScript modules.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [syedtasavour.com](https://syedtasavour.com/journal/javascript-text-modules-import-with-type-text) *(syedtasavour.com)*
  > The \*\*Import Text\*\* proposal (at TC39 Stage 3 and integrated into the WHATWG HTML specification) standardizes the ability to load external text files directly into JavaScript as plain UTF-8 strings using Import Attribute...
- [caniuse.com](https://caniuse.com/mdn-javascript_statements_import_import_attributes_type_text) *(caniuse.com)*
  > \*\*Focus:\*\* Standard language syntax and compatibility tables
- [medium.com](https://medium.com/@divyanshu.1810/node-js-just-added-native-text-file-imports-8f6120676665) *(medium.com)*
  > It also covers how attributes are passed to dynamic imports (\`import(specifier, { with: { type: "text" } })\`) \*\*Focus:\*\* Node.js implementation (\`v26.5.0+\` behind \`--experimental-import-text\`) and backend/AI use cases
- [trade-assistance.com](https://trade-assistance.com/blog/text-modules-import-type-text-chrome-155) *(trade-assistance.com)*
  > \*\*Focus:\*\* Tooling consolidation and phasing out bundler lock-in Tooling like Vite (\`import file from './file.txt?raw'\`) and Webpack (\`raw-loader\`) popularized importing plain strings, but these relied on proprietary bun...
- [januschka.com](https://static.januschka.com/changelog/chromium/i2s/M155.html) *(static.januschka.com)*
  > \*\*Focus:\*\* Engine implementation and official release status \*\*Details:\*\* Chromium turned on the TC39 Import Text proposal by default starting in Chrome/Edge 155, catching up with Firefox (shipped in Firefox 153) and ali...
- [netlify.app](https://alexanderburgos.netlify.app/blog/chrome-155-text-import-attributes) *(alexanderburgos.netlify.app)*
  > \*\*Web Graphics and Design Systems:\*\* Developers working with WebGL, WebGPU, and SVG design systems have praised text modules for eliminating workarounds when bundling \`.vert\`/\`.frag\` shader files, SVG icons, and HTML par...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17364.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Import Text (Text Modules) Nikolaos Papaspyrou Thu, 03 Sep 2026 12:54:19 -0700 \*Contact emails\* \[em...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17403.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Daniel Bratell Wed, 09 Sep 2026 07:34:24 -0700 LGTM1 (Stage 3 TC...
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > import text modules, https://&lt;strong&gt;chromestatus.com/feature/5191512456560640&lt;/strong&gt;
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17420.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Vladimir Levin Wed, 09 Sep 2026 09:19:55 -0700 LGTM3 On Wednesda...
- [\[dev-platform\] Intent to protoype: Importing text modules](http://www.mail-archive.com/dev-platform@mozilla.org/msg01760.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-import-text`)*
  > \[dev-platform\] Intent to protoype: Importing text modules Skip to site navigation (Press enter) \[dev-platform\] Intent to protoype: Importing text modules 'Eemeli Aro' via \[email&#160;protected\] Wed, 15 Apr 2026 07:41:48 ...

#### 📚 Platform Documentation & References

- [import - JavaScript - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) *(developer.mozilla.org)*
- [Import attributes - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with) *(developer.mozilla.org)*
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-30 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0004.html) *(lists.w3.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-23 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0003.html) *(lists.w3.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (70 found across 14 planned queries, 20 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 1 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(group "text-modules", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "text-modules" has no test results)*
- **Content Inspected:** Spec: ✔ · Explainers: 3 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (+80 points since 2026-10-12; footprint 180 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"object-fit SVG embed object firefox webkit"`, `"object fit object position svg object embed chromium firefox safari"`
- **Analysis:** Chromium's support for applying object-fit and object-position to SVG documents loaded via &lt;object&gt; and &lt;embed&gt; tags resolves a decade-old inconsistency and aligns Chromium with the WHATWG and CSS Images specifications. While Firefox has supported this embedded-replaced element sizing behavior for years, Safari has historically stretched embedded SVGs across the container bounds. The move represents a major step forward for cross-engine interoperability, though WebKit implementation remains the final hurdle.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams utilizing &lt;object&gt; or &lt;embed&gt; to display interactive or animated SVGs should progressively enhance layouts with object-fit, but continue defining SVG viewBox and preserveAspectRatio attributes to avoid distortion in Safari. Where cross-browser visual fidelity is strictly required without wrapper workarounds, loading SVGs through &lt;img&gt; or inline SVG markup remains the safer production choice for now.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > Historically, Chromium-based browsers failed to honor these properties for embedded SVG documents: regardless of CSS rules, the embedded SVG viewport was forcefully stretched across the entire content box \*\*Sources\*\*: \*C...
- [appspot.com](https://img968-dot-cr-status.appspot.com) *(img968-dot-cr-status.appspot.com)*
  > After long-standing tracking (stemming back to Chromium Issue 41302806, which dated back to Chrome 30), Chrome implemented the behavior behind the \`SVGEmbeddedAsReplacedElement\` flag and shipped it enabled by default in ...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/158) *(learn.microsoft.com)*
  > After long-standing tracking (stemming back to Chromium Issue 41302806, which dated back to Chrome 30), Chrome implemented the behavior behind the \`SVGEmbeddedAsReplacedElement\` flag and shipped it enabled by default in ...
- [webdevbriefing.com](https://webdevbriefing.com/chrome-158-beta-css-highlights-media-states-web-install) *(webdevbriefing.com)*
  > The release notes specifically announce that SVG documents loaded via \`&lt;object&gt;\` or \`&lt;embed&gt;\` now scale and align inside the content box according to \`object-fit\` (e.g., \`contain\`, \`cover\`, \`scale-down\`) and \`object-posi...
- [google.com](https://issuetracker.google.com/issues/564190097) *(issuetracker.google.com)*
  > \*\*Sources\*\*: \*MDN GitHub repository & documentation updates\* MDN documentation updates for \`object-fit\` and \`object-position\` were merged to clarify browser behavior changes
- [\[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17499.html) *(mail-archive.com)*
  > Initial public proposal No information ... that do not set these properties render as before. &lt;strong&gt;Rendering changes where authors intentionally set object-fit / object-position on an &lt;object&gt;/&lt;embed&gt; host...

#### 📚 Platform Documentation & References

- [Reporting/Interoperability.md at main · Supporters-Of-Chromium-Based-Browsers/Reporting · GitHub](https://github.com/Supporters-Of-Chromium-Based-Browsers/Reporting/blob/main/Interoperability.md) *(github.com)*
- [Apply object-fit and object-position to SVG in object/embed tags · Issue #726 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/726) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `object-fit` on [wpt.fyi](https://wpt.fyi/results?q=feature:object-fit) (via webstatus.dev) — stable: Chrome 46.4% · Edge 46.4% · Firefox 97.1% · Safari 43.5%; experimental: Chrome 97.8% · Edge 93.5% · Firefox 97.1% · Safari 97.1%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (63 found across 11 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 6 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (0 found, 0 verified) · `web-features mapping` *(group "object-fit", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "object-fit": Chrome 46.4% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (+70 points since 2026-10-12; footprint 285 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"text overflow string chrome 157"`, `"css text overflow string value"`, `"text overflow custom string webkit pull 72631"`
- **Analysis:** The CSS \`text-overflow: &lt;string&gt;\` value allows web authors to define custom inline truncation markers (such as '(more)' or custom ellipsis symbols) without relying on fragile JavaScript truncation algorithms or pseudo-element overlays. Having been an isolated feature in Firefox since version 9 in 2011, its release enabled by default in Chrome 157 and its recent landing in WebKit trunk heralds broad multi-engine consensus. Developer reception is strongly favorable as it finally standardizes a long-sought styling capability across all major browser engines.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can safely incorporate \`text-overflow: &lt;string&gt;\` immediately as a progressive enhancement by declaring a fallback \`text-overflow: ellipsis;\` immediately preceding the custom string declaration, or by querying it with \`@supports (text-overflow: '')\`. Older engines and stable Safari builds will simply render standard ellipses while modern Chromium and Firefox installations display the tailored indicator.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @jja08111: "https://github.com/WebKit/WebKit/pull/72631 has been merged, so close this issue...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS text-overflow: &lt;string&gt; value](https://github.com/WebKit/standards-positions/issues/710) [closed] `position: support`
  > *Latest discussion from @jja08111: "https://github.com/WebKit/WebKit/pull/72631 has been merged, so close this issue...."*

#### 📰 Ecosystem Blogs & Articles

- [azeemhassni.com](https://azeemhassni.com/blog/wire-chrome-157-text-overflow-custom-string) *(azeemhassni.com)*
  > \*\*Chrome / Chromium:\*\* Chrome formally introduced support for \`text-overflow: &lt;string&gt;\` in \*\*Chrome 157\*\* \*\*Firefox:\*\* Supported custom string truncation since \*\*Firefox 9 (2011)\*\*
- [note.com](https://note.com/2gnote/n/n3ad4fba41929?hl=en) *(note.com)*
  > \*\*WebKit / Safari:\*\* WebKit resolved and landed support in trunk (Bugzilla #72631) \*\*UI & Dashboard Use Cases:\*\* Demonstrates practical applications in data-dense tables, product cards, and compact navigation items where...
- [web.dev](https://web.dev/blog/web-platform-10-2026?hl=en) *(web.dev)*
  > \*\*Release Notes:\*\* Listed as one of the highlighted CSS additions in Chrome 157 alongside \`text-decoration-inset\` and CSS corner shorthands
- [web-standards.dev](https://web-standards.dev/news/2026/11/chrome-157) *(web-standards.dev)*
  > \*\*Release Notes:\*\* Listed as one of the highlighted CSS additions in Chrome 157 alongside \`text-decoration-inset\` and CSS corner shorthands
- [css-tricks.com](https://css-tricks.com/byte-202) *(css-tricks.com)*
  > \*\*Roundup Mention:\*\* Featured the arrival of \`text-overflow: &lt;string&gt;\` in Chrome 157, noting that while Safari stable adoption is the last hurdle for baseline status, developers can now safely use it as an enhancement
- [webdevbriefing.com](https://webdevbriefing.com/html-in-canvas-css-corners) *(webdevbriefing.com)*
  > \*\*Roundup Mention:\*\* Featured the arrival of \`text-overflow: &lt;string&gt;\` in Chrome 157, noting that while Safari stable adoption is the last hurdle for baseline status, developers can now safely use it as an enhancement \*\*...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17287.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Intent to Prototype: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-overflow: value Chromestatus Tue, 25 Aug 2026 05:36:48 -0700 Contact emails \[email...
- [\[blink-dev\] Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17500.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS text-overflow: value Chromestatus Sun, 20 Sep 2026 22:03:42 -0700 Contact emails \[email&#160;prot...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17512.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value 'Dan Clark' via blink-dev Mon, 21 Sep 2026 11:51:41 -0700 LGTM1 On S...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17514.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Ian Kilpatrick Mon, 21 Sep 2026 11:54:12 -0700 What is the i...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17513.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Alex Russell Mon, 21 Sep 2026 11:51:54 -0700 LGTM2 On Monday, Septem...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/text-overflow/index.md?plain=1) *(github.com)*
- [Evaluate using CSS \`text-overflow: &lt;string&gt;\` value · Issue #8680 · db-ux-design-system/core-web · GitHub](https://github.com/db-ux-design-system/core-web/issues/8680) *(github.com)*
- [text-overflow CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow) *(developer.mozilla.org)*
- [\[css-overflow-4\] Clarification of text-overflow: &lt;string&gt; value; Rendering pipeline · Issue #11683 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/11683) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `custom-ellipses` on [wpt.fyi](https://wpt.fyi/results?q=feature:custom-ellipses) (via webstatus.dev) — stable: Chrome 0% · Edge 0% · Firefox 34.8% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 34.8% · Safari 0%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 12 planned queries, 19 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (4 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "custom-ellipses", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "custom-ellipses": Chrome 0% passing (stable))* · `Sources cited by the AI synthesis` (3 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

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

- **Momentum:** **Moderate** (+70 points since 2026-10-12; footprint 260 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""scroll-snap-type: pair" site:github.com/w3c/csswg-drafts"`, `""scroll-snap-type" "pair" csswg issue 9519"`, `""scroll-snap-type" pair webkit standards position mozilla"`
- **Analysis:** The \`scroll-snap-type: pair\` keyword resolves a longstanding limitation in CSS Scroll Snap Level 1 by requiring 2D scroll containers to snap to the same element along both axes rather than independently mismatching targets. Shipping enabled by default in Chrome 156 and proposed for Interop 2027, the addition enjoys strong cross-engine interest and standard track backing. The feature bridges a significant ergonomic gap for complex 2D viewports like maps, interactive galleries, and canvas-style layouts.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building 2D panning or map interfaces should adopt \`scroll-snap-type: pair\` via progressive enhancement, providing fallback to standard scroll snap or querying support with \`@supports (scroll-snap-type: pair)\`. Production apps needing strict single-element 2D snapping across all engines should keep lightweight script fallbacks in place until Safari and Firefox implement the keyword.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."
- Standards Activity (Mozilla): Latest discussion from @theres-waldo: "&gt; I think this seems reasonable but I'd like \[@hiikezoe\](https://github.com/hiikezoe) / \[@theres-waldo\](https://github.com/theres-waldo) to take a loo..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/WebKit/standards-positions/issues/716) [closed] `position: support`, `topic: css`, `venue: W3C CSS WG`, `from: Google`
  > *Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."*
- **Mozilla:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/mozilla/standards-positions/issues/1448) [open] `venue: W3C`, `topic: CSS`
  > *Latest discussion from @theres-waldo: "&gt; I think this seems reasonable but I'd like \[@hiikezoe\](https://github.com/hiikezoe) / \[@theres-waldo\](https://github.com/theres-waldo) to take a loo..."*

#### 📰 Ecosystem Blogs & Articles

- [chromium.org](https://issues.chromium.org/issues/540413041) *(issues.chromium.org)*
  > To solve this, the CSS Working Group (CSSWG Issue #9519) resolved to introduce the \*\*\`pair\`\*\* keyword to \`scroll-snap-type\` The core discussion addressed developer complaints that 2D scroll snapping was frequently unusab...
- [web.dev](https://web.dev/blog/web-platform-09-2026) *(web.dev)*
  > Chromium officially shipped \`scroll-snap-type: pair\` in \*\*Chrome 156\*\* It was featured alongside a wave of modern scroll and layout improvements, such as single-axis scroll containers (\`overflow: scroll clip\`), the CSS \`...
- [appspot.com](https://cr-status.appspot.com/feature/5124378896498688) *(cr-status.appspot.com)*
  > Chromium officially shipped \`scroll-snap-type: pair\` in \*\*Chrome 156\*\*
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com)*
  > It was featured alongside a wave of modern scroll and layout improvements, such as single-axis scroll containers (\`overflow: scroll clip\`), the CSS \`random()\` function, and the \`:navigation-source\` pseudo-class Microsoft...
- [caniuse.com](https://caniuse.com/mdn-css_properties_scroll-snap-type_pair) *(caniuse.com)*
  > Ecosystem consensus has generally recognized the omission of paired snapping in CSS Scroll Snap 1 as an ergonomic oversight, though Safari and Firefox have not yet finalized implementations
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > Developer newsletters and web tooling teams highlighted \`scroll-snap-type: pair\` as a major quality-of-life win

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17244.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Chrome...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Chromestatus Tue...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17536.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element 'Dan Cla...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17535.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Rick Bye...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17539.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Chris Ha...

#### 📚 Platform Documentation & References

- [scroll-snap-pair · Issue #4461 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4461) *(github.com)*
- [scroll-snap-type CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-snap-type) *(developer.mozilla.org)*
- [Other Spec Review: Add keyword "pair" to scroll-snap-type for snapping to the same element in X and Y axes · Issue #1271 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1271) *(github.com)*
- [github.com](https://github.com/mozilla/standards-positions/issues/1448) *(github.com)*
- [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element · Issue #716 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/716) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `scroll-snap` on [wpt.fyi](https://wpt.fyi/results?q=feature:scroll-snap) (via webstatus.dev) — stable: Chrome 89.9% · Edge 88.3% · Firefox 83.2% · Safari 70.4%; experimental: Chrome 97.2% · Edge 95% · Firefox 83.2% · Safari 75.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`scroll-snap`](https://webstatus.dev/features/scroll-snap), shared with 4 other ChromeStatus features*

- **Chrome usage:** 0.22% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/59))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (51 found across 12 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 14 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "scroll-snap", shared with 4 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "scroll-snap": Chrome 89.9% passing (stable))* · `Sources cited by the AI synthesis` (6 found, 6 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 3

---

<a id="5811907077472256-speechrecognitionresult-timestamps-webspeech-api"></a>
### [SpeechRecognitionResult Timestamps (WebSpeech API)](https://chromestatus.com/feature/5811907077472256)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5811907077472256](https://chromestatus.com/feature/5811907077472256) · [chromestatuslite.com/feature/5811907077472256](https://chromestatuslite.com/feature/5811907077472256)
- **Specification:** [https://github.com/WebAudio/web-speech-api/pull/192](https://github.com/WebAudio/web-speech-api/pull/192)
- **Chromium Bug:** [https://crbug.com/528037568](https://crbug.com/528037568)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/speech-recognition) (Chrome: `139`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`speech-recognition`](https://webstatus.dev/features/speech-recognition), shared with 8 other ChromeStatus features*

#### 📝 Overview

The Web Speech API currently does not expose the acoustic timing bounds of recognized speech segments, making it difficult to associate transcribed text with media timelines or generate synchronized subtitle cues. We propose adding speechStartTime and speechEndTime (double, in seconds relative to stream start) attributes on the SpeechRecognitionResult interface.

> **Motivation:** The Web Speech API currently does not expose the acoustic start and end timestamps of recognized speech utterances on SpeechRecognitionResult. While SpeechRecognitionEvent.timeStamp conveys when the DOM event occurred, it provides no information about the acoustic boundaries or duration of the speech segment within the source audio stream.  Exposin...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (+70 points since 2026-10-12; footprint 145 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The SpeechRecognitionResult Timestamps feature adds \`speechStartTime\` and \`speechEndTime\` properties to the Web Speech API, giving web applications precise acoustic bounds for transcribed speech segments. This resolves a major gap for automated WebVTT subtitling, interactive click-to-seek video navigation, and live conference synchronization. Chromium is shipping the feature enabled by default for desktop platforms using on-device speech recognition, while cross-engine standardization continues in the W3C Web Speech Community Group.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams building captioning, video editing, or audio transcript tools should adopt \`speechStartTime\` and \`speechEndTime\` using progressive enhancement. Ensure applications inspect property support and non-zero values before driving timeline navigation, maintaining fallback UI behaviors when running on backends or browsers without acoustic timestamp support.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *In developer trial (Behind a flag)* to *Enabled by default*
- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5811907077472256/activity) *(chromestatus.com)*
  > \*\*Summary:\*\* The Chromium team published an intent to implement and reached the \*\*"Prepare to ship"\*\* stage under the \`Blink&gt;Speech\` component (tracked via bug \[crbug.com/528037568\](https://crbug.com/528037568))
- [Web Speech API](https://webaudio.github.io/web-speech-api) *(webaudio.github.io)*
  > \*\*Source:\*\* \[W3C Web Speech API GitHub Repository — Issue #191\](https://github.com/WebAudio/web-speech-api/issues/191) & \[Specification Draft (Section 4.1.8)\](https://webaudio.github.io/web-speech-api/#speechreco-result)...
- [\[blink-dev\] Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg17954.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API) Alan Ding Fri, 06 Nov 20...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps](http://www.mail-archive.com/blink-dev@chromium.org/msg16987.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps 'Alan Ding' via blink-dev Thu, 16 Jul 2026 09:...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Chromestatus W...
- [\[blink-dev\] Re: Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg17976.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API) 'Dan Clark' via ...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg17954.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > \[blink-dev\] Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API) Alan Ding Fri, 06 Nov 20...
- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com · 2026-08-22T03:37:06)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with anoth...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps](http://www.mail-archive.com/blink-dev@chromium.org/msg16987.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md`)*
  > \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps 'Alan Ding' via blink-dev Thu, 16 Jul 2026 09:...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md`)*
  > \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Chromestatus W...
- [\[blink-dev\] Re: Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg17976.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md`)*
  > \[blink-dev\] Re: Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API) 'Dan Clark' via ...

#### 📚 Platform Documentation & References

- [Add SpeechRecognitionResult Timestamps · Issue #191 · WebAudio/web-speech-api · GitHub](https://github.com/WebAudio/web-speech-api/issues/191) *(github.com)*
- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com)*
- [\[v153\] Uber demo concept · Issue #14 · PaulKinlan/chrome-platform-showcase · GitHub](https://github.com/PaulKinlan/chrome-platform-showcase/issues/14) *(github.com)*
- [Add Speaker Diarization (Speaker Turn Attribution) to SpeechRecognition · Issue #226 · WebAudio/web-speech-api · GitHub](https://github.com/WebAudio/web-speech-api/issues/226) *(github.com)*
- [GitHub - alan33d/web-speech-demos: Web Speech API Demos · GitHub](https://github.com/alan33d/web-speech-demos) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [SpeechRecognitionResult Timestamps (WebSpeech API) Demo](https://alan33d.github.io/web-speech-demos/live_meeting_recording_demo.html)
- [SpeechRecognitionResult Timestamps (WebSpeech API) Demo](https://alan33d.github.io/web-speech-demos/webrtc_caption_sync_test.html)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `speech-recognition` on [wpt.fyi](https://wpt.fyi/results?q=feature:speech-recognition) (via webstatus.dev) — stable: Chrome 57.1% · Edge 57.1% · Firefox 14.3% · Safari 14.3%; experimental: Chrome 57.1% · Edge 57.1% · Firefox 57.1% · Safari 28.6%

#### 🌐 Web-features Group Context

*group-level data: web-features [`speech-recognition`](https://webstatus.dev/features/speech-recognition), shared with 8 other ChromeStatus features*

- **Chrome usage:** 0.00021% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/63))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/170))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (48 found across 12 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 3 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (1 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "speech-recognition", shared with 8 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "speech-recognition": Chrome 57.1% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (+60 points since 2026-10-12; footprint 440 points)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"WebKit standards position "Digital Credentials""`, `"Mozilla standards position "Digital Credentials""`, `""Digital Credentials API" issuance "Chrome""`, `""Digital Credentials API" issuance "navigator.credentials.create" OR "store""`
- **Analysis:** The Digital Credentials API issuance capability expands browser mediation beyond credential presentation to issuance via navigator.credentials.create(), shipping enabled by default in Chrome 155 on Android and desktop cross-device configurations. By leveraging native credential management systems like Android Credential Manager, the feature standardizes push provisioning for government IDs, mobile driver's licenses, and academic attestations. However, complete web ecosystem adoption remains gated by divergent engine consensus and ongoing concerns regarding digital identity tracking on the web.

**Key Recommendations & Takeaways:**
- Actionable Advice: Implement digital credential issuance strictly as a progressive enhancement by feature-detecting the digital property in navigator.credentials.create() while maintaining fallback redirect flows and QR-code-based issuance. Align payloads with open standards such as OpenID for Verifiable Credential Issuance (OpenID4VCI) to minimize refactoring as cross-browser semantics stabilize.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Update on Venue: https://github.com/w3c/strategy/issues/450  We also made strides on the OpenID / request format...."
- Standards Activity (Mozilla): Latest discussion from @RByers: "Hey Mozilla folks, is there anything you can share here about your position on the use of custom schemes like openid4vp://? Today Firefox allows infor..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers в X: „Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh“ / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers в X: „Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh“ / X](https://x.com/ChromiumDev/status/2105325011116646507?lang=bg) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Digital Credentials API](https://github.com/WebKit/standards-positions/issues/332) [closed] `position: support`, `concerns: interoperability`, `concerns: privacy`, `concerns: security`, `venue: WICG`, `concerns: venue`, `from: Google`, `from: Apple`, `concerns: annoyance`
  > *Latest discussion from @marcoscaceres: "Update on Venue: https://github.com/w3c/strategy/issues/450  We also made strides on the OpenID / request format...."*
- **Mozilla:** [Digital Credentials](https://github.com/mozilla/standards-positions/issues/1003) [closed] `position: negative`
  > *Latest discussion from @RByers: "Hey Mozilla folks, is there anything you can share here about your position on the use of custom schemes like openid4vp://? Today Firefox allows infor..."*

#### 📰 Ecosystem Blogs & Articles

- [Digital Credentials API issuance ships in Chrome 155  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-issuance) *(developer.chrome.com)*
  > The \*\*Digital Credentials API (issuance support)\*\* expands the W3C Digital Credentials specification The \*\*Digital Credentials API (issuance support)\*\* expands the W3C Digital Credentials specification—originally focused...
- [daily.dev](https://daily.dev/posts/digital-credentials-api-secure-and-private-identity-on-the-web-lt5j5nrqr) *(daily.dev)*
  > The \*\*Digital Credentials API (issuance support)\*\* expands the W3C Digital Credentials specification—originally focused on credential presentation/verification via \`navigator.credentials.get()\`
- [credenco.com](https://www.credenco.com/glossary/digital-credentials-api) *(credenco.com)*
  > The \*\*Digital Credentials API (issuance support)\*\* expands the W3C Digital Credentials specification—originally focused on credential presentation/verification via \`navigator.credentials.get()\` The \*\*Digital Credentials ...
- [Digital Credentials API for credential issuance  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-143-issuance-ot) *(developer.chrome.com)*
  > \*\*Problem Solved:\*\* Previously, "push provisioning" (adding a credential like a mobile driver's license, university ID, or bank card to a digital wallet from a website) relied on fragmented custom deep links, proprietary...
- [Digital Credentials API (issuance support)](https://cr-status.appspot.com/feature/5099333963874304?gate=5199087129460736) *(cr-status.appspot.com)*
  > \*\*On Android:\*\* Uses the Android Credential Manager (\`IdentityCredential\`) to prompt the user with a standardized native wallet-selection dialog
- [googleblog.com](https://android-developers.googleblog.com/2025/04/announcing-android-support-of-digital-credentials.html) *(android-developers.googleblog.com)*
  > \*\*On Android:\*\* Uses the Android Credential Manager (\`IdentityCredential\`) to prompt the user with a standardized native wallet-selection dialog \*\*Underlying Standards:\*\* Leverages open exchange protocols, prominently \*\*...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17347.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Chromestatus Wed, 02 Sep 2026 09:44:50 -...
- [Intent to Extend Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/bskHkIrjjms) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Intent to Extend Experiment: Digital Credentials API (issuance support) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; ...
- [Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14883.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Mike Taylor Sat, 18 ...
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16925.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Mohame...
- [\[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16188.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Digital Credentials API (issuance support) Vladim...

#### 📚 Platform Documentation & References

- [Digital Credentials](https://www.w3.org/TR/digital-credentials) *(w3.org)*
- [github.com](https://github.com/WICG/digital-credentials/blob/main/explainer.md) *(github.com)*
- [github.com](https://github.com/w3c-fedid/digital-credentials) *(github.com)*
- [github.com](https://github.com/WICG/proposals/issues/301) *(github.com)*
- [Digital Credentials](https://www.w3.org/TR/2025/WD-digital-credentials-20251009) *(w3.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 12 planned queries, 31 verified) · `Google Search Grounding (gemini-3.8-flash)` (18 found, 17 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (1 found, 1 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (8 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 10

---

<a id="5109912169480192-webtransport-receive-stream"></a>
### [WebTransport receive stream](https://chromestatus.com/feature/5109912169480192)

- **Milestone:** Chrome 159 (Enabled by default) · first listed in Chrome 155
- **ChromeStatus:** [chromestatus.com/feature/5109912169480192](https://chromestatus.com/feature/5109912169480192) · [chromestatuslite.com/feature/5109912169480192](https://chromestatuslite.com/feature/5109912169480192)
- **Specification:** [https://w3c.github.io/webtransport/#webtransportreceivestream](https://w3c.github.io/webtransport/#webtransportreceivestream)
- **Chromium Bug:** [https://issues.chromium.org/issues/568317222](https://issues.chromium.org/issues/568317222)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Under consideration` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

#### 📝 Overview

Adds the standardized WebTransportReceiveStream interface, a ReadableStream subclass used for incoming unidirectional streams and the readable side of bidirectional streams. Its getStats() method returns per-stream byte counters: bytesReceived reports bytes received from the network, while bytesRead reports bytes delivered to the application.

> **Motivation:** Incoming WebTransport streams have historically been exposed as generic ReadableStream objects in Chromium. The WebTransport specification defines a dedicated WebTransportReceiveStream subclass with stream-specific statistics.  Applications that receive large or latency-sensitive streams need to distinguish bytes received by the browser from bytes ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (+60 points since 2026-10-12; footprint 180 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Intent to Ship" "WebTransport receive stream""`, `""WebTransportReceiveStream" "getStats""`
- **Analysis:** The WebTransportReceiveStream interface standardizes incoming WebTransport unidirectional and bidirectional streams into a specialized ReadableStream subclass equipped with a stream-level getStats() method. This closes a key observability gap by exposing per-stream network counters (bytesReceived) alongside application-consumed counters (bytesRead) to identify reader bottlenecks and buffer bloat. With Chromium aligning with Safari and the W3C specification, and Firefox actively resolving test compliance, cross-engine interoperability for multiplexed transport diagnostics is rapidly stabilizing.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams utilizing WebTransport should adopt getStats() via progressive enhancement by feature-detecting the method on incoming stream readers to monitor client-side backpressure. Applications can safely offload these streams to Web Workers while continuing to support base ReadableStream fallback behavior on older engine runtimes.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **3 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2058634: \[wpt-sync\] Sync PR 61577 - Test https://w3c.github.io/webtransport/#webtransportreceivestream-pull-bytes](https://bugzilla.mozilla.org/show_bug.cgi?id=2058634) `[NEW]`
- **Mozilla (Gecko):** [Bug #2078342: A pending read() on a WebTransportReceiveStream rejects with a TypeError instead of a WebTransportError after the peer sends RESET\_STREAM](https://bugzilla.mozilla.org/show_bug.cgi?id=2078342) `[NEW]`
- **Mozilla (Gecko):** [Bug #2082932: New wpt failures in /webtransport/ \[receive-stream-stats.https.any.worker.html, receive-stream-stats.https.any.serviceworker.html, receive-stream-stats.https.any.html, and 1 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2082932) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img592-dot-cr-status.appspot.com/feature/5109912169480192) *(img592-dot-cr-status.appspot.com)*
  > The \*\*\`WebTransportReceiveStream\`\*\* interface is a specialized \`ReadableStream\` subclass defined in the W3C WebTransport specification Its key addition over a generic \`ReadableStream\` is the \*\*\`getStats()\`\*\* method
- [chromestatus.com](https://chromestatus.com/feature/5120203192139776) *(chromestatus.com)*
  > Discussions within developer tooling communities (such as the \*WebRTC-Inspector\* project and Chromium dev-tools trackers) highlight that while connection-level stats (\`WebTransport.getStats()\`) provide RTT and datagram p...
- [\[blink-dev\] Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17842.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport receive stream Chromestatus Wed, 21 Oct 2026 18:31:31 -0700 Contact emails \[email&#16...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17874.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Chris Harrelson Tue, 27 Oct 2026 22:20:40 -0700 LGTM2 ...
- [\[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17862.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Alex Russell Tue, 27 Oct 2026 12:04:03 -0700 LGTM1; love to se...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17896.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Mike Taylor Wed, 28 Oct 2026 19:46:04 -0700 LGTM3 On 1...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17842.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109912169480192`)*
  > \[blink-dev\] Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport receive stream Chromestatus Wed, 21 Oct 2026 18:31:31 -0700 Contact emails \[email&#16...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17874.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109912169480192`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Chris Harrelson Tue, 27 Oct 2026 22:20:40 -0700 LGTM2 ...
- [\[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17862.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109912169480192`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Alex Russell Tue, 27 Oct 2026 12:04:03 -0700 LGTM1; love to se...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17896.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109912169480192`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Mike Taylor Wed, 28 Oct 2026 19:46:04 -0700 LGTM3 On 1...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransportreceivestream/index.md?plain=1) *(github.com)*
- [WebTransportReceiveStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream) *(developer.mozilla.org)*
- [WebTransportReceiveStream: getStats() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream/getStats) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/2023/WD-webtransport-20230405) *(w3.org)*
- [WebTransportBidirectionalStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportBidirectionalStream) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (66 found across 14 planned queries, 14 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 5 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (8 found, 3 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 51.1% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (+50 points since 2026-10-12; footprint 330 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"WebRTC Diagnostic Logging API webkit standards position"`, `"WebRTC Diagnostic Logging API mozilla standards position"`, `"WebRtcDiagnosticLogCollectionAllowedForOrigins chrome blink dev"`
- **Analysis:** The WebRTC Diagnostic Logging API introduces web-exposed triggers to collect internal peer connection telemetry for local troubleshooting and browser vendor bug triage. Chromium is leading the rollout with general availability in Chrome 156, complemented by enterprise origin management policies. However, the ecosystem remains fractured because the feature lacks multi-engine consensus and is not yet on an interoperable standards track.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat this feature as an optional, progressive debugging enhancement targeted strictly at Chromium-based desktop and managed enterprise deployments. Production applications should continue relying primarily on standardized WebRTC statistics reporting (\`getStats()\`) for portable, cross-browser session analytics.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "I think those are pretty weak use cases for adding a web API.  &gt; \* An organization has a custom WebRTC deployment and they want to analyze logs at sca..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [WebRTC Diagnostic Logging](https://github.com/WebKit/standards-positions/issues/699) [open] 
- **Mozilla:** [WebRTC Diagnostic Logging](https://github.com/mozilla/standards-positions/issues/1436) [open] `venue: W3C CG`, `concerns: privacy`, `concerns: API design`, `topic: API`
  > *Latest discussion from @zcorpan: "I think those are pretty weak use cases for adding a web API.  &gt; \* An organization has a custom WebRTC deployment and they want to analyze logs at sca..."*

#### 📰 Ecosystem Blogs & Articles

- [WebRTC Diagnostic Logging API](https://wicg.github.io/webrtc-diagnostic-logging) *(wicg.github.io)*
  > The \*\*WebRTC Diagnostic Logging API\*\* is a W3C-standardized extension to \`RTCPeerConnection\` designed to troubleshoot complex, intermittent media and connectivity issues that are notoriously hard to reproduce in local de...
- [google.com](https://groups.google.com/a/chromium.org/g/blink-dev/c/L2kX7raIUCE) *(groups.google.com)*
  > \*\*Out-of-Band Log Ingestion\*\*: Diagnostic logs are stored locally under user control or securely uploaded out-of-band directly to the browser vendor (with user consent) to facilitate browser bug triaging Developers can a...
- [samsung.com](https://developer.samsung.com/browser/policy/web-rtc-diagnostic-log-collection-allowed-for-origins.html) *(developer.samsung.com)*
  > \*\*Enterprise Controls\*\*: Log generation is strictly governed in managed environments by the enterprise policy \*\*\`WebRtcDiagnosticLogCollectionAllowedForOrigins\`\*\* (introduced in Chrome 147+), ensuring logs can only be in...
- [chromeenterprise.google](https://chromeenterprise.google/policies/web-rtc-diagnostic-log-collection-allowed-for-origins) *(chromeenterprise.google)*
  > \*\*Enterprise Controls\*\*: Log generation is strictly governed in managed environments by the enterprise policy \*\*\`WebRtcDiagnosticLogCollectionAllowedForOrigins\`\*\* (introduced in Chrome 147+), ensuring logs can only be in...
- [chromeenterprise.google](https://chromeenterprise.google/policies) *(chromeenterprise.google)*
  > \*\*Source:\*\* \[Chrome Enterprise Policy List (\`WebRtcDiagnosticLogCollectionAllowedForOrigins\`)\](https://chromeenterprise.google/policies/#WebRtcDiagnosticLogCollectionAllowedForOrigins)
- [yosuke4061.com](https://yosuke4061.com/new_toppage/powerword/webrtc-diagnostic-logging) *(yosuke4061.com)*
  > RTC developers welcome the API as a way to programmatically initiate diagnostics in managed agent fleets without disrupting the end user Trackers on \`web-platform-dx/web-features\` and \`GoogleChrome/modern-web-guidance-sr...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16867.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API 'Guido Urdaneta' via blink-dev Thu, 25 Jun 202...
- [\[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17555.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API Chromestatus Fri, 25 Sep 2026 08:29:54 -0700 Contact emails \[email...
- [\[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16865.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API 'Guido Urdaneta' via blink-dev Wed, 24 Jun 202...
- [Re: \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16877.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > Re: \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API Chris Harrelson Thu, 25 Jun 2026 13:13...
- [Re: \[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17816.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > Re: \[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API Chris Harrelson Wed, 21 Oct 2026...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/web-platform-dx/web-features/issues/4531) *(github.com)*
- [WebRTC Diagnostic Logging API · Issue #1343 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1343) *(github.com)*
- [Chrome 156 adds WebRTC diagnostic logging by Elchi3 · Pull Request #30812 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30812) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/156.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/156.md) *(github.com)*
- [WebRTC Diagnostic Logging · Issue #1436 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1436) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webrtc` on [wpt.fyi](https://wpt.fyi/results?q=feature:webrtc) (via webstatus.dev) — stable: Chrome 72.8% · Edge 73.2% · Firefox 82.3% · Safari 72%; experimental: Chrome 73.2% · Edge 71.7% · Firefox 85.8% · Safari 74.4%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (63 found across 12 planned queries, 24 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webrtc", shared with 66 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webrtc": Chrome 72.8% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

---

<a id="5067363861004288-single-axis-scroll-containers"></a>
### [Single-axis scroll containers](https://chromestatus.com/feature/5067363861004288)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5067363861004288](https://chromestatus.com/feature/5067363861004288) · [chromestatuslite.com/feature/5067363861004288](https://chromestatuslite.com/feature/5067363861004288)
- **Specification:** [https://github.com/w3c/csswg-drafts/pull/13903](https://github.com/w3c/csswg-drafts/pull/13903)
- **Chromium Bug:** [https://issues.chromium.org/440038212](https://issues.chromium.org/440038212)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/overflow) (Chrome: `113`, Firefox: `66`, Safari: `17`) · *group-level data: web-features [`overflow`](https://webstatus.dev/features/overflow), shared with 1 other ChromeStatus feature*

#### 📝 Overview

Extends the \`overflow\` property to support scrollable values together with \`clip\` (for example, \`overflow: scroll clip\`). This allows \`position: sticky\` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using \`overflow: clip\` stays in place.

> **Motivation:** The CSS \`overflow\` property currently allows behavior to be specified per axis, but it does not provide a way to make a scroll container responsible for only a single axis. The affects features that depend on scroll containers, namely \`position: sticky\` and DOM scroll APIs.  For example, authors may want to use \`position: sticky\` to create a table ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (+50 points since 2026-10-12; footprint 275 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Single-axis scroll containers update CSS Overflow by permitting scrollable keywords (such as auto or scroll) to pair explicitly with clip, preventing the browser from coercing the clipped axis into a full two-dimensional scroller. This resolves the decade-old CSS issue where position: sticky elements inside horizontally scrolling containers were trapped by local overflow rather than sticking to the viewport or document scroll ancestors. While Chromium has shipped support enabled by default starting in Chrome 156 following TAG satisfaction, Mozilla Gecko and Apple WebKit standards positions remain active and open.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building responsive wide tables or horizontal carousels can adopt single-axis scroller syntax (e.g., overflow-x: auto; overflow-y: clip;) as a progressive enhancement, but must test fallback behaviors in non-supporting browsers where clip is still coerced into hidden, trapping vertical sticky positioning.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "In terms of layout, is it well defined what happens for a single-axis scroll container for things like baseline alignment? I guess we only adjust base..."
- Standards Activity (W3C TAG): Latest discussion from @lukewarlow: "Hi @freedebreuil the TAG has discussed this and we're satisfied with this change.  Thanks for flying TAG..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "New in Chrome 153" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "New in Chrome 153" / X](https://x.com/ChromiumDev/status/2098134897923658034) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/680) [open] `topic: css`, `from: Google`, `topic: scrolling`
- **Mozilla:** [Single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1418) [open] `venue: W3C`, `topic: CSS`
  > *Latest discussion from @emilio: "In terms of layout, is it well defined what happens for a single-axis scroll container for things like baseline alignment? I guess we only adjust base..."*
- **W3C TAG:** [Other Spec Review: Single-Axis Scroll Containers](https://github.com/w3ctag/design-reviews/issues/1222) [closed] `Resolution: satisfied`, `Review type: later review`, `Missing: Multi-stakeholder support`
  > *Latest discussion from @lukewarlow: "Hi @freedebreuil the TAG has discussed this and we're satisfied with this change.  Thanks for flying TAG..."*

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/blog/single-axis-scroll-containers-ready-for-testing) *(developer.chrome.com)*
  > \*\*Single-axis scroll containers\*\* update the CSS \`overflow\` specification by allowing scrollable keywords (\`auto\`, \`scroll\`, \`hidden\`) to be explicitly combined with \`clip\` (for example, \`overflow: auto clip\` or \`overflo...
- [river.me](https://blog.river.me/single-axis-scroll) *(blog.river.me)*
  > \*\*The \`position: sticky\` conflict:\*\* Because the element became a 2D scroller, any sticky child with \`position: sticky; top: 0\` would anchor to the local container rather than the viewport/document scroller This made the...
- [CSS position: sticky now sticks to the nearest scroller on a per axis basis! – Bram.us](https://www.bram.us/2026/03/30/css-sticky-per-axis) *(bram.us)*
  > This made the classic responsive data table—horizontal scrolling for wide columns while keeping headers sticky to the viewport—almost impossible with pure CSS \*\*"CSS position: sticky now sticks to the nearest scroller on...
- [chromestatus.com](https://chromestatus.com/feature/5086608215900160) *(chromestatus.com)*
  > \*\*Follow-up ("Scroll snap for single-axis scroll containers"):\*\* Chrome also introduced updates to the CSS Scroll Snap module so that snap areas on a single-axis container only snap along the active scroll axis; snap req...
- [css-tricks.com](https://css-tricks.com/dealing-with-overflow-and-position-sticky) *(css-tricks.com)*
  > \*\*Developer Sentiment:\*\* For data-dense websites, wikis, and dashboard builders, this solves a decade of complex JavaScript scroll-syncing workarounds
- [tildes.net](https://tildes.net/~comp/1waf/single_axis_scroll_has_been_adopted_into_the_css_spec_and_will_be_supported_in_chromium_soon) *(tildes.net)*
  > Discussions across W3C TAG review threads and developer forums noted that while full cross-browser interoperability will take time to mature in stable releases across all engines, this is one of the cleanest ergonomic wi...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg16097.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5067363861004288`)*
  > \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Chro...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5067363861004288`)*
  > \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Alex Russell Mon, 17 Aug 2026 11:59:23 -0700 Hey Free, Dan...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17200.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5067363861004288`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers 'Free Debreuil' via blink-dev Mon, 17 Aug 2026 13:...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > \[blink-dev\] Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Single-axis scroll containers Chromestatus Tue, 11 Aug 2026 11:26:13 -0700 Contact emails \[email...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17374.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers 'Bramus Van Damme' via blink-dev Fri, 04 Sep 2026 ...

#### 📚 Platform Documentation & References

- [Other Spec Review: Single-Axis Scroll Containers · Issue #1222 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1222) *(github.com)*
- [github.com](https://github.com/explainers-by-googlers/single-axis-scroll-snap) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow-x) *(developer.mozilla.org)*
- [design-reviews#1222: Other Spec Review: Single-Axis Scroll Containers](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1222) *(tag-github-bot.w3.org)*
- [edge-developer/microsoft-edge/web-platform/release-notes/156.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/156.md) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `overflow` on [wpt.fyi](https://wpt.fyi/results?q=feature:overflow) (via webstatus.dev) — stable: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%; experimental: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%

#### 🌐 Web-features Group Context

*group-level data: web-features [`overflow`](https://webstatus.dev/features/overflow), shared with 1 other ChromeStatus feature*

- **Chrome usage:** 0.078% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/190))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (46 found across 13 planned queries, 16 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 10 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 1 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "overflow", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "overflow": Chrome 100% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 7

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

- **Momentum:** **Emerging** (+50 points since 2026-10-12; footprint 210 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""gpuweb/gpuweb" "frag_depth" "less""`, `""frag_depth" "less" "greater" WGSL WebGPU"`, `""What's New in WebGPU" "frag_depth""`
- **Analysis:** The WGSL \`fragment\_depth\` extension introduces \`less\` and \`greater\` qualifiers to \`@builtin(frag\_depth)\`, allowing GPUs to preserve early-Z depth rejection optimizations when fragment shaders write custom depth. Formally integrated into the W3C WebGPU Shading Language specification, the extension resolves a major performance penalty for depth-altering rendering effects like decals and parallax occlusion mapping. Chromium has shipped the capability in its 155–156 release cycle, though broad cross-engine availability remains pending.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat this extension as a progressive performance enhancement by checking \`navigator.gpu.wgslLanguageFeatures.has('fragment\_depth')\` before emitting shaders with \`requires fragment\_depth;\`. Maintain a fallback path using unadorned \`@builtin(frag\_depth)\` to preserve compatibility across engines that have not yet implemented the feature.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [What's New in WebGPU (Chrome 155-156)  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/new-in-webgpu-155-156) *(developer.chrome.com)*
  > What&#39;s New in WebGPU (Chrome 155-156) \| Blog \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkç...
- [fragment\_depth - WGSL language feature availability (1%) - webgpu.report](https://webgpu.report/features/wgsl:fragment_depth) *(webgpu.report)*
  > When a fragment shader outputs a custom depth using \`@builtin(frag\_depth)\`, hardware heuristics generally disable early-Z for the entire draw call because the final depth value is indeterminate prior to shader execution ...
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > \*\*Announcement\*\*: Introduced and highlighted by François Beaufort in the Chrome developer series (appearing across Chrome 154 Beta and Chrome 155–156 feature roundups)
- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails \[email&#16...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17296.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'Ashley Gullen' via blink-dev Wed, 26 Aug 2026 01:02:4...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails \[email&#16...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17296.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'Ashley Gullen' via blink-dev Wed, 26 Aug 2026 01:02:4...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17276.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Alex Russell Mon, 24 Aug 2026 11:54:22 -0700 Are there really ...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 O...

#### 📚 Platform Documentation & References

- [WGSL Proposal for fragment depth (less, greater, any) · Issue #5342 · gpuweb/gpuweb · GitHub](https://github.com/gpuweb/gpuweb/issues/5342) *(github.com)*
- [WebGPU Shading Language](https://www.w3.org/TR/WGSL) *(w3.org)*
- [\[WGSL fragment depth\] (less, greater, any) syntax change · Issue #5350 · gpuweb/gpuweb · GitHub](https://github.com/gpuweb/gpuweb/issues/5350) *(github.com)*
- [github.com](https://github.com/gpuweb/gpuweb/issues/5342?timeline_page=1) *(github.com)*
- [feat(graphics): adopt WGSL fragment\_depth once every WebGPU browser ships it · Issue #9703 · playcanvas/engine · GitHub](https://github.com/playcanvas/engine/issues/9703) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)

#### 🌐 Web-features Group Context

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- **Chrome usage:** 0.092% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 12 planned queries, 19 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "webgpu", shared with 44 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webgpu": no stable pass rate for Chrome yet)* · `Sources cited by the AI synthesis` (5 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="6427766428925952-webtransport-draining"></a>
### [WebTransport draining](https://chromestatus.com/feature/6427766428925952)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6427766428925952](https://chromestatus.com/feature/6427766428925952) · [chromestatuslite.com/feature/6427766428925952](https://chromestatuslite.com/feature/6427766428925952)
- **Specification:** [https://w3c.github.io/webtransport/#dom-webtransport-draining](https://w3c.github.io/webtransport/#dom-webtransport-draining)
- **Chromium Bug:** [https://issues.chromium.org/issues/564353368](https://issues.chromium.org/issues/564353368)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

#### 📝 Overview

WebTransport.draining is a promise that resolves when the server indicates that the WebTransport session will be gracefully retired. Applications can use this signal to establish a replacement session while existing streams and the current session remain usable.

> **Motivation:** A WebTransport server may need to retire a session for maintenance, load balancing, deployment, or connection-lifetime management. Without a draining signal, an application learns about this only when the session closes, which can cause an avoidable interruption while a replacement connection is established. The draining promise gives the applicati...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (+45 points since 2026-10-12; footprint 230 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** WebTransport draining provides a promise-based notification mechanism that resolves when a server signals that an active WebTransport session is entering a graceful retirement phase. Standardized by W3C and IETF, the feature addresses critical connection lifecycle needs by enabling applications to establish replacement sessions in parallel without disrupting active streams. Shipping enabled by default in Chrome 158, engine consensus is strong, though non-Chromium engines are still completing protocol-level integration.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should use feature detection (\`'draining' in WebTransport.prototype\`) to wire up progressive connection migration logic that prepares a secondary session when the promise resolves. Infrastructure teams should configure HTTP/3 proxy and server setups to emit draining signals ahead of scheduled node maintenance.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2007162: neqo support for Draining for WebTransport](https://bugzilla.mozilla.org/show_bug.cgi?id=2007162) `[NEW]`
- **Mozilla (Gecko):** [Bug #2060688: New wpt failures in /webtransport/ \[draining.https.any.sharedworker.html, draining.https.any.worker.html, draining.https.any.serviceworker.html, and 1 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2060688) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/033691e2ca005b97e379e9b43c425be1bf7fda8c) *(chromium.googlesource.com)*
  > It resolves when the server signals that the active WebTransport session is entering a draining phase (typically via a \`DRAIN\_WEBTRANSPORT\_SESSION\` capsule or HTTP/3 \`GOAWAY\` frame) \*\*Source:\*\* \*Microsoft Edge Web Platfo...
- [appspot.com](https://cr-status.appspot.com/feature/6427766428925952) *(cr-status.appspot.com)*
  > WebTransport servers regularly need to cycle connections for tasks like load balancing, rolling restarts, deployments, or connection-lifetime policies Previously, a client only learned a session was ending when the conne...
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Source:\*\* \*Chrome Platform Status / Chrome for Developers\* \*\*Context:\*\* The Chromium team categorized this feature as part of a batch of enterprise and real-time reliability improvements, shipping alongside other WebTr...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Source:\*\* \*Chrome Platform Status / Chrome for Developers\* \*\*Overview:\*\* Chrome tracked the feature under \*WebTransport draining\* and officially shipped it enabled by default in Chrome 158
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/158) *(learn.microsoft.com)*
  > \*\*Source:\*\* \*Microsoft Edge Web Platform Release Notes / Chromium Gerrit\* \*\*Overview:\*\* Edge release documentation for version 158 documented \`WebTransport: Draining\` alongside Chromium commits implementing the feature
- [forasoft.com](https://www.forasoft.com/learn/video-streaming/articles-streaming/webtransport-whip) *(forasoft.com)*
  > \*\*Critical for Media over QUIC (MoQ) and Gaming:\*\* Real-time web systems (such as cloud gaming, live audio/video ingest, and low-latency interactive streaming) view draining as essential

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: WebTransport draining](http://www.mail-archive.com/blink-dev@chromium.org/msg17754.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6427766428925952`)*
  > \[blink-dev\] Intent to Ship: WebTransport draining Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport draining Chromestatus Thu, 15 Oct 2026 14:50:06 -0700 Contact emails \[email&#160;protected\]...
- [Re: \[blink-dev\] Intent to Ship: WebTransport draining](http://www.mail-archive.com/blink-dev@chromium.org/msg17761.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6427766428925952`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport draining Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport draining Mike Taylor Thu, 15 Oct 2026 17:47:21 -0700 LGTM1 On 10/15/26 5:49 p.m., C...
- [Re: \[blink-dev\] Intent to Ship: WebTransport draining](http://www.mail-archive.com/blink-dev@chromium.org/msg17812.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6427766428925952`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport draining Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport draining Daniel Bratell Wed, 21 Oct 2026 07:48:16 -0700 LGTM3 /Daniel On 2026-10-20...
- [Re: \[blink-dev\] Intent to Ship: WebTransport draining](http://www.mail-archive.com/blink-dev@chromium.org/msg17795.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6427766428925952`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport draining Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport draining Alex Russell Mon, 19 Oct 2026 16:36:47 -0700 LGTM2 On Thursday, October 15...

#### 📚 Platform Documentation & References

- [WebTransport](https://www.w3.org/TR/2023/WD-webtransport-20230405) *(w3.org)*
- [WebTransport API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [WebTransport: draining property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/draining) *(developer.mozilla.org)*
- [WebTransport.draining docs by hamishwillee · Pull Request #45306 · mdn/content · GitHub](https://github.com/mdn/content/pull/45306) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (68 found across 12 planned queries, 18 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 9 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (3 found, 2 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 51.1% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5094058497277952-webtransport-reliability-attributes"></a>
### [WebTransport reliability attributes](https://chromestatus.com/feature/5094058497277952)

- **Milestone:** Chrome 158 (Enabled by default) · first listed in Chrome 155
- **ChromeStatus:** [chromestatus.com/feature/5094058497277952](https://chromestatus.com/feature/5094058497277952) · [chromestatuslite.com/feature/5094058497277952](https://chromestatuslite.com/feature/5094058497277952)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransport-reliability](https://www.w3.org/TR/webtransport/#dom-webtransport-reliability)
- **Chromium Bug:** [https://issues.chromium.org/issues/545636884](https://issues.chromium.org/issues/545636884)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

#### 📝 Overview

Adds the WebTransport.reliability instance attribute and static WebTransport.supportsReliableOnly attribute. These APIs indicate whether the user agent supports WebTransport over exclusively reliable connections and whether an established session supports unreliable transport such as datagrams.  In Chromium, reliability initially returns "pending" and changes to "supports-unreliable" after an HTTP/3 WebTransport connection is established.  Since Chromium does not currently support HTTP/2 fallback,  WebTransport.supportsReliableOnly returns false; any successfully established session uses HTTP/3 and supports unreliable datagrams.

> **Motivation:** WebTransport may operate over connections with different reliability capabilities. Applications such as games, interactive media, and real-time collaboration tools need to know whether unreliable datagrams are available before selecting their transport strategy.  WebTransport.supportsReliableOnly  reports whether the user agent supports WebTranspor...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (+40 points since 2026-10-12; footprint 170 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The WebTransport reliability attributes introduce the static supportsReliableOnly property and session-level reliability attribute, allowing web applications to detect whether an engine or active session supports unreliable datagrams or exclusively reliable streams. Formalized in the W3C WebTransport Candidate Recommendation, these APIs address critical feature-detection requirements as HTTP/2 fallback mechanisms enter the networking landscape. Engine consensus is strong across vendors, establishing an essential diagnostic foundation for real-time media and low-latency interactive applications.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt progressive enhancement by checking for the reliability attribute on established WebTransport sessions after awaiting the ready promise to ensure datagram capability before sending unreliably. Production teams should design graceful stream fallbacks when reliability resolves to reliable-only or when browsers report true for supportsReliableOnly in fallback scenarios.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [januschka.com](https://static.januschka.com/changelog/chromium/i2s/M158.html) *(static.januschka.com)*
  > \*\*References:\*\* ChromeStatus Feature Entry: \*WebTransport reliability attributes\* & \*Chrome 158 Beta / Release Notes\*
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*References:\*\* ChromeStatus Feature Entry: \*WebTransport reliability attributes\* & \*Chrome 158 Beta / Release Notes\*
- [WebTransport Explained: vs WebRTC, WHIP and MoQ in 2026](https://www.forasoft.com/learn/video-streaming/articles-streaming/webtransport-whip) *(forasoft.com)*
  > \*\*References:\*\* W3C WebTransport Specification (Candidate Recommendation) \*\*Discussion:\*\* The attributes originated from W3C Working Group discussions regarding HTTP/2 fallback drafts
- [googleusercontent.com](https://doc-1jrg-48u0-issuetracker.googleusercontent.com/issues/545636884) *(doc-1jrg-48u0-issuetracker.googleusercontent.com)*
  > \*\*References:\*\* W3C WebTransport Specification (Candidate Recommendation) and Chromium Interop Tracking WebTransport standardization matured rapidly with WebTransport becoming a core part of the cross-vendor \*\*Interop\*\* ...
- [\[blink-dev\] Intent to Prototype: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17340.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Chromestatus Tue, 01 Sep 2026 10:05:04 -0700...
- [\[blink-dev\] Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17682.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport reliability attributes Chromestatus Wed, 07 Oct 2026 10:23:32 -0700 Contact e...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17340.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Chromestatus Tue, 01 Sep 2026 10:05:04 -0700...
- [\[blink-dev\] Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17682.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > \[blink-dev\] Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport reliability attributes Chromestatus Wed, 07 Oct 2026 10:23:32 -0700 Contact e...
- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17710.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Alex Russell Mon, 12 Oct 2026 11:57:46 -0700 L...
- [\[pull\] master from web-platform-tests:master by pull\[bot\] · Pull Request #1656 · Ballalhossaintalukder/wpt · GitHub](https://github.com/Ballalhossaintalukder/wpt/pull/1656) *(github.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > Update the IDL harness, Web-exposed interface, and Android WebView expectations. chrome status entry - https://&lt;strong&gt;chromestatus.com/feature/5094058497277952&lt;/strong&gt; Bug: 545636884 Change-Id: I73f603e6d43506efe2a5e1d...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17713.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Mike Taylor Mon, 12 Oct 2026 16:45:55 ...

#### 📚 Platform Documentation & References

- [WebTransport: supportsReliableOnly static property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/supportsReliableOnly_static) *(developer.mozilla.org)*
- [WebTransport: reliability property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/reliability) *(developer.mozilla.org)*
- [WebTransport http2 idea's suggestions · Issue #518 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/518) *(github.com)*
- [github.com](https://github.com/w3c/webtransport/issues/614) *(github.com)*
- [\[pull\] master from web-platform-tests:master by pull\[bot\] · Pull Request #1656 · Ballalhossaintalukder/wpt · GitHub](https://github.com/Ballalhossaintalukder/wpt/pull/1656) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 12 planned queries, 14 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 51.1% passing (stable))*
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

- **Momentum:** **Emerging** (+40 points since 2026-10-19; footprint 130 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Web Haptics API" site:github.com/WICG"`, `""Web Haptics API" blink-dev"`
- **Analysis:** The Web Haptics API is an emerging WICG incubation led by Microsoft Edge engineers designed to replace low-level vibration patterns with semantic, intent-driven tactile feedback like ticks, hints, and boundary signals. Currently available as an experimental developer trial in Chromium 156 (behind a feature flag on Windows 11), it encompasses both an imperative JavaScript method (\`navigator.playHaptics()\`) and an experimental declarative CSS proposal. However, consensus remains nascent, with Safari and Firefox registering no official signals and standards bodies actively debating declarative triggering models.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should treat this API strictly as experimental and avoid production dependencies until multi-engine consensus forms. For teams building progressive web apps targeting Windows hardware with haptic pens or touchpads, test using feature detection (\`'playHaptics' in navigator\`) solely as an optional progressive enhancement with a graceful no-op fallback.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [How the WICG Web Haptics API brings native tactile feedback to the web \| Tech Vogue](https://techvogue.blog/blog/how-wicg-web-haptics-api-brings) *(techvogue.blog)*
  > How the WICG Web Haptics API brings native tactile feedback to the web \| Tech Vogue Sunday 1 November 2026, 05:03 PM How the WICG Web Haptics API brings native tactile feedback to the web The late-2026 WICG Web Haptics A...
- [creativealive.com](https://creativealive.com/haptics-web-whats-possible-whats-fake-2026) *(creativealive.com)*
  > The main developer skepticism centers around \*\*cross-browser support\*\*, particularly whether Apple's WebKit/Safari will support the standard or continue its historically conservative stance on web-driven haptics due to b...
- [\[blink-dev\] Intent to Prototype: Web Haptics API](http://www.mail-archive.com/blink-dev@chromium.org/msg16948.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Web Haptics API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Web Haptics API 'Alexander Kyereboah' via blink-dev Wed, 08 Jul 2026 11:41:59 -0700 \*Contact emails\*...
- [Web Haptics API \| MSEdgeExplainers](https://microsoftedge.github.io/MSEdgeExplainers/Haptics/explainer.html) *(microsoftedge.github.io)*
  > Web Haptics API \| MSEdgeExplainers MSEdgeExplainers Web Haptics API Authors: Nesh Gandhe , Kevin Babbitt , Limin Zhu Status of this Document This document is a starting point for engaging the community and standards bodi...
- [Feel the Web — Haptics API](https://liminzhu.github.io/BlinkOn21HapticsTalk) *(liminzhu.github.io)*
  > Should nested @haptic anchor standardization? ... These are open questions in the explainer — happy to dive into any of these or wherever the conversation goes. Activation model: split or uniform? Direct interaction fire...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Web Haptics API](http://www.mail-archive.com/blink-dev@chromium.org/msg16948.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5167864517623808`)*
  > \[blink-dev\] Intent to Prototype: Web Haptics API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Web Haptics API 'Alexander Kyereboah' via blink-dev Wed, 08 Jul 2026 11:41:59 -0700 \*Contact emails\*...
- [Web Haptics API \| MSEdgeExplainers](https://microsoftedge.github.io/MSEdgeExplainers/Haptics/explainer.html) *(microsoftedge.github.io)* *(Cites: `https://github.com/WICG/web-haptics`)*
  > Web Haptics API \| MSEdgeExplainers MSEdgeExplainers Web Haptics API Authors: Nesh Gandhe , Kevin Babbitt , Limin Zhu Status of this Document This document is a starting point for engaging the community and standards bodi...
- [New incubation: Web Haptics API from Limin Zhu (Edge) on 2026-04-28 (public-new-work@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-new-work/2026Apr/0009.html) *(lists.w3.org)* *(Cites: `https://github.com/WICG/web-haptics`)*
  > Hi everyone, Per disucssion in Web Haptics API � Issue #262 � WICG/proposals&lt;https://github.com/WICG/proposals/issues/262&gt;, we adopted WICG/web-haptics: Web Haptics API&lt;https://&lt;strong&gt;github.com/WICG/web-haptic...
- [Re: New incubation: Web Haptics API from Marcos Caceres on 2026-04-28 (public-new-work@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-new-work/2026Apr/0010.html) *(lists.w3.org)* *(Cites: `https://github.com/WICG/web-haptics`)*
  > Issue #262 · WICG/proposals &lt;https://github.com/WICG/proposals/issues/262&gt;, we adopted WICG/web-haptics: Web Haptics API &lt;https://&lt;strong&gt;github.com/WICG/web-haptics&lt;/strong&gt;&gt; incubation into WICG.
- [Cascading Style Sheets (CSS) Working Group Teleconference – 29 October 2026](https://www.w3.org/2026/10/29-css-minutes.html) *(w3.org)* *(Cites: `https://github.com/WICG/web-haptics`)*
  > \[shows code example from explainer\] … assign haptic to specific event trigger … can also have anonymous syntax which simplifies trigger … advantage is that there&#x27;s specific cause and effect and lower latency … becau...

#### 📚 Platform Documentation & References

- [New incubation: Web Haptics API from Limin Zhu (Edge) on 2026-04-28 (public-new-work@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-new-work/2026Apr/0009.html) *(lists.w3.org)*
- [Re: New incubation: Web Haptics API from Marcos Caceres on 2026-04-28 (public-new-work@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-new-work/2026Apr/0010.html) *(lists.w3.org)*
- [Cascading Style Sheets (CSS) Working Group Teleconference – 29 October 2026](https://www.w3.org/2026/10/29-css-minutes.html) *(w3.org)*
- [GitHub - kyerebo/web-haptics: Web Haptics API · GitHub](https://github.com/kyerebo/web-haptics) *(github.com)*
- [MSEdgeExplainers/Haptics/explainer.md at main · MicrosoftEdge/MSEdgeExplainers · GitHub](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/Haptics/explainer.md) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (52 found across 11 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 2 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (15 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (3 found, 2 verified)
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5152215540039680-css-corner-shorthand-properties-"></a>
### [CSS corner shorthand properties ](https://chromestatus.com/feature/5152215540039680)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5152215540039680](https://chromestatus.com/feature/5152215540039680) · [chromestatuslite.com/feature/5152215540039680](https://chromestatuslite.com/feature/5152215540039680)
- **Specification:** [https://drafts.csswg.org/css-borders-4/#corner-shaping](https://drafts.csswg.org/css-borders-4/#corner-shaping)
- **Chromium Bug:** [https://issues.chromium.org/issues/425897047](https://issues.chromium.org/issues/425897047)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `In development`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/corner-shape) (Chrome: `139`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`corner-shape`](https://webstatus.dev/features/corner-shape)*

#### 📝 Overview

Implements the CSS corner shorthand and per-corner sub-shorthands (corner-top-left, corner-top-right, corner-bottom-left, corner-bottom-right) as well as physical (corner-top, corner-bottom) and logical (corner-block-start, corner-block-end, etc.) edge  shorthands. These allow setting both border-radius and corner-shape for individual corners in a single declaration. Additionally, corners is retained as a compat alias for the corner shorthand.   sampler: https://static.januschka.com/i-425897047/  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7747994

> **Motivation:** Currently, setting both the radius and shape of a corner requires two separate declarations (border-radius and corner-shape). The CSSWG resolved ( https://github.com/w3c/csswg-drafts/issues/11623#issuecomment-2982179370  ) to add a corner shorthand that combines both properties, making it more ergonomic for authors to   style individual corners. Fo...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (+30 points since 2026-10-12; footprint 300 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** CSS corner shorthand properties consolidate border sizing and corner shaping into ergonomic single declarations, allowing authors to define complex geometries like squircles and bevels without clunky multi-property pairing or SVG hacks. The feature is actively shipping across Chromium browsers including Chrome and Microsoft Edge, but it remains at Limited Availability across the wider multi-engine landscape. While the CSS Working Group resolved the shorthand syntax and peer engines maintain supportive positions, cross-browser interoperability is still maturing.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt corner shorthands strictly as a progressive enhancement by layering them on top of standard border-radius fallbacks or guarding rules with CSS @supports queries. Teams building critical brand-specific shapes must continue relying on SVG clipping or CSS masks until cross-engine Baseline parity is achieved.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @smfr: "We think that \`corner-shape\` will be useful to allow for bevel, and superellipse (aka squircle), but we believe that more complex corner shapes are be..."
- Standards Activity (Mozilla): Latest discussion from @dholbert: "&gt; @dholbert fwiw, I'm not so sure about it. \`corner-shape: angle\` messing with \`border-radius\` feels wrong somehow (even if it's the simplest way to s..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **8 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Corner-shape](https://github.com/WebKit/standards-positions/issues/229) [closed] `position: support`, `topic: css`, `venue: W3C CSS WG`
  > *Latest discussion from @smfr: "We think that \`corner-shape\` will be useful to allow for bevel, and superellipse (aka squircle), but we believe that more complex corner shapes are be..."*
- **Mozilla:** [CSS corner-shape](https://github.com/mozilla/standards-positions/issues/823) [closed] `venue: W3C`, `position: positive`, `topic: CSS`
  > *Latest discussion from @dholbert: "&gt; @dholbert fwiw, I'm not so sure about it. \`corner-shape: angle\` messing with \`border-radius\` feels wrong somehow (even if it's the simplest way to s..."*

#### 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > \*\*Universal shorthand:\*\* \`corner: &lt;'border-radius'&gt; \|\| &lt;'corner-shape'&gt;;\` (e.g., \`corner: 20px squircle;\`) \*\*Per-corner shorthands:\*\* \`corner-top-left\`, \`corner-top-right\`, \`corner-bottom-left\`, \`corner-bottom-right\`
- [chromestatus.com](https://chromestatus.com/release-notes/159) *(chromestatus.com)*
  > \*\*Per-corner shorthands:\*\* \`corner-top-left\`, \`corner-top-right\`, \`corner-bottom-left\`, \`corner-bottom-right\` \*\*Physical and logical edge shorthands:\*\* \`corner-top\`, \`corner-bottom\`, \`corner-block-start\`, \`corner-block-e...
- [artofstyleframe.com](https://artofstyleframe.com/blog/css-corner-shorthand-chrome-155-squircle-corners) *(artofstyleframe.com)*
  > Following initial experimental testing in Chrome 155 beta, Chromium officially targeted enabling the corner shorthand suite by default in \*\*Chrome 157\*\* Articles tracking early parser behavior analyzed runtime support us...
- [appspot.com](https://img136-dot-cr-status.appspot.com) *(img136-dot-cr-status.appspot.com)*
  > Following initial experimental testing in Chrome 155 beta, Chromium officially targeted enabling the corner shorthand suite by default in \*\*Chrome 157\*\*
- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > Following initial experimental testing in Chrome 155 beta, Chromium officially targeted enabling the corner shorthand suite by default in \*\*Chrome 157\*\*
- [trade-assistance.com](https://trade-assistance.com/blog/css-corner-shape-squircle-bevel-chrome-157-corner-shorthand) *(trade-assistance.com)*
  > MDN highlights that, unlike \`clip-path\`, corner shaping alters the actual border-box path of the element; backgrounds, border styles, shadows (\`box-shadow\`), and outlines naturally follow the computed corner geometry It ...

#### 🔗 Inbound Citations & Reverse Links

- [CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1367) *(github.com · 2026-08-23T14:10:52)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window....
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17569.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 28 Sep 2026 16:48:56 -0700 T...
- [\[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17509.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 21 Sep 2026 11:46:37 -0700 This look...
- [\[blink-dev\] Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17493.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > \[blink-dev\] Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS corner shorthand properties Helmut Januschka Fri, 18 Sep 2026 06:34:29 -0700 \*Contact emai...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17570.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties 'Dan Clark' via blink-dev Mon, 28 Sep 2026 16:...

#### 📚 Platform Documentation & References

- [CSS Borders and Box Decorations Module Level 4](https://www.w3.org/TR/css-borders-4) *(w3.org)*
- [CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1367) *(github.com)*
- [\[css-borders-4\] Fix corner-shape \|\| border-radius order to match resolution in #11623 by kbabbitt · Pull Request #14607 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/pull/14607) *(github.com)*
- [\[css-borders-4\] corner-shape initial value ("round") is strange in some cases (e.g. bevel) · Issue #11623 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/11623) *(github.com)*
- [\[css-borders\] Add shorthand for \`border-shape\` / \`corner-shape\` / \`border-radius\` · Issue #11679 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/11679) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `corner-shape` on [wpt.fyi](https://wpt.fyi/results?q=feature:corner-shape) (via webstatus.dev) — stable: Chrome 76.7% · Edge 77.7% · Firefox 9.4% · Safari 8.4%; experimental: Chrome 87.6% · Edge 76.2% · Firefox 55% · Safari 72.3%

#### 🌐 Web-features Group Context

*group-level data: web-features [`corner-shape`](https://webstatus.dev/features/corner-shape)*

- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/229))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/823))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 12 planned queries, 18 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 10 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "corner-shape", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "corner-shape": Chrome 76.7% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 6

---

<a id="5183354944225280-webtransport-datagram-writable-streams-and-prioritization"></a>
### [WebTransport Datagram writable streams and prioritization](https://chromestatus.com/feature/5183354944225280)

- **Milestone:** Chrome 159 (Enabled by default) · first listed in Chrome 155
- **ChromeStatus:** [chromestatus.com/feature/5183354944225280](https://chromestatus.com/feature/5183354944225280) · [chromestatuslite.com/feature/5183354944225280](https://chromestatuslite.com/feature/5183354944225280)
- **Specification:** [https://www.w3.org/TR/webtransport/#datagram-writable](https://www.w3.org/TR/webtransport/#datagram-writable)
- **Chromium Bug:** [https://issues.chromium.org/issues/547572475](https://issues.chromium.org/issues/547572475)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

#### 📝 Overview

Adds the modern WebTransport Datagram sending API.  WebTransportDatagramDuplexStream.createWritable() creates independent WebTransportDatagramsWritable streams. Each writable has mutable sendGroup and sendOrder attributes for expressing relative priority among queued WebTransport data in the same send group. Chromium currently applies this ordering among Datagram writables.  The implementation also reports the negotiated maximum outgoing Datagram payload size and discards oversized writes as required by the WebTransport specification.

> **Motivation:** The original WebTransport Datagram API exposes only a single writable stream, preventing applications from independently scheduling different classes of latency-sensitive messages.  The newer API allows applications such as games, remote-interaction systems, and real-time media applications to create multiple Datagram writables and prioritize urgen...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (+30 points since 2026-10-12; footprint 250 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebTransport" datagram writable streams prioritization chrome"`, `""WebTransportDatagramDuplexStream" "createWritable""`, `"WebTransport datagram prioritization "sendOrder" "sendGroup""`, `""WebTransportDatagramsWritable""`
- **Analysis:** The WebTransport Datagram writable streams and prioritization API replaces the legacy singleton datagram writer with \`createWritable()\`, introducing granular scheduling via \`sendGroup\` and \`sendOrder\` along with strict payload size enforcement. Standardized by the W3C WebTransport Working Group and targeted under Interop 2026, the upgrade transitions datagram transmission to align seamlessly with QUIC stream prioritization models. While broad baseline support for core WebTransport is already established across major browsers, this datagram dispatch overhaul addresses crucial multi-channel queuing bottlenecks for gaming and real-time media workloads.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt a feature-detection progressive enhancement pattern by checking for \`transport.datagrams.createWritable\` before instantiating dedicated writables, falling back to the legacy \`transport.datagrams.writable\` property where necessary. Teams operating latency-sensitive pipelines should verify their datagram sizes against \`maxDatagramSize\` to prevent silent packet discards under the stricter specification rules.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *In developer trial (Behind a flag)* to *Enabled by default*
- 📰 **3 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [ietf.org](https://datatracker.ietf.org/meeting/123/materials/slides-123-webtrans-webtransport-slides-ietf-123-03) *(datatracker.ietf.org)*
  > The Web Platform feature \*\*"WebTransport Datagram writable streams and prioritization"\*\* introduces a modern sending architecture for WebTransport datagrams, replacing the legacy singleton writer (\`transport.datagrams.wr...
- [appspot.com](https://cr-status.appspot.com/feature/5183354944225280) *(cr-status.appspot.com)*
  > \*\*Datagram Prioritization (\`sendGroup\` and \`sendOrder\`)\*\*: Each datagram writable stream exposes mutable \`sendGroup\` and \`sendOrder\` properties \*\*Specification Compliance & Payload Enforcement\*\*: User agents report the n...
- [\[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17327.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization ...
- [\[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17849.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization 'M...
- [\[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17863.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization Al...
- [\[blink-dev\] Intent to Ship: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17848.html) *(mail-archive.com)*
  > Blink component Blink&gt;Network&gt;WebTransport Web Feature ID webtransport Motivation &lt;strong&gt;The original WebTransport Datagram API exposes only a single writable stream&lt;/strong&gt;, preventing applications from independ...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17327.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5183354944225280`)*
  > \[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization ...
- [\[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17849.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5183354944225280`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization 'M...
- [\[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17863.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5183354944225280`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization Al...

#### 📚 Platform Documentation & References

- [WebTransportDatagramsWritable - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable) *(developer.mozilla.org)*
- [WebTransportDatagramDuplexStream: createWritable() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) *(developer.mozilla.org)*
- [WebTransportDatagramsWritable: sendOrder property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable/sendOrder) *(developer.mozilla.org)*
- [WebTransportDatagramsWritable: sendGroup property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable/sendGroup) *(developer.mozilla.org)*
- [WebTransportDatagramDuplexStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramDuplexStream) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 12 planned queries, 19 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 11 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 51.1% passing (stable))* · `Sources cited by the AI synthesis` (10 found, 6 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5075532483657728-enhanced-canvas-textmetrics"></a>
### [Enhanced Canvas TextMetrics](https://chromestatus.com/feature/5075532483657728)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5075532483657728](https://chromestatus.com/feature/5075532483657728) · [chromestatuslite.com/feature/5075532483657728](https://chromestatuslite.com/feature/5075532483657728)
- **Specification:** [https://github.com/whatwg/html/pull/11000](https://github.com/whatwg/html/pull/11000)
- **Chromium Bug:** [https://issues.chromium.org/issues/341213359](https://issues.chromium.org/issues/341213359)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `Negative`

#### 📝 Overview

Expand the TextMetrics Canvas API to support selection rectangles, bounding box queries, and glyph cluster-based operations.  This new functionality should enable complex text editing applications with accurate selection, caret positioning, and hit testing.  Additionally, cluster-based rendering facilitates sophisticated text effects such as independent character animations and styling.

> **Motivation:** The existing TextMetrics API provides measurements for atomic text, but offers no facilities to break down that information to a more granular level.  Sophisticated text applications (editors in particular) require such granular information in order to support accurate selection, caret positioning and hit testing at a grapheme level.  Currently the...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (+20 points since 2026-10-12; footprint 280 points)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Enhanced Canvas TextMetrics extends 2D canvas text measurements with granular APIs for selection rectangles, caret positioning, bounding queries, and glyph cluster handling. Driven primarily by Google and Igalia to replace inaccurate heuristics in text editors and frameworks like Flutter Web, the feature is shipping in Chromium while the WHATWG specification matures. Cross-browser alignment remains incomplete, as Mozilla and Apple continue evaluating the API's imperative surface against alternative paradigms like HTML-in-Canvas and its accessibility footprint.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat Enhanced Canvas TextMetrics as an optional progressive enhancement for high-performance canvas editors and text-shaping workflows on Chromium browsers. Production applications needing cross-engine consistency should maintain fallback measurement routines or DOM-based overlay inputs until Gecko and WebKit signal concrete implementation commitments.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @shallawa: "&gt; This API should only be used for use cases where HTML-in-Canvas would not be appropriate--and it would be good to clarify here what those use cases ..."
- Standards Activity (Mozilla): Latest discussion from @schenney-chromium: "Yes. The need for per-grapheme rendering control is still there, along with ways to facilitate editing. While HTML-in-Canvas covers the use cases for ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **10 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [\[HTML Canvas\] TextMetrics Additions for Editing and Graphic Design](https://github.com/WebKit/standards-positions/issues/436) [open] `topic: web apis`, `from: Google`, `from: Igalia`
  > *Latest discussion from @shallawa: "&gt; This API should only be used for use cases where HTML-in-Canvas would not be appropriate--and it would be good to clarify here what those use cases ..."*
- **Mozilla:** [\[HTML Canvas\] TextMetrics Additions](https://github.com/mozilla/standards-positions/issues/1144) [open] `venue: WHATWG`, `topic: API`
  > *Latest discussion from @schenney-chromium: "Yes. The need for per-grapheme rendering control is still there, along with ways to facilitate editing. While HTML-in-Canvas covers the use cases for ..."*

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5075532483657728?gate=5187337646243840) *(chromestatus.com)*
  > Historically, \`&lt;canvas&gt;\` 2D text was treated as an opaque, atomic block \*\*Enhanced Canvas TextMetrics\*\* (developed under WHATWG PR #11000 / Issue #10677 and Blink flag \`--enable-blink-features=ExtendedTextMetrics\`) expan...
- [Canvas Text Editing](https://blogs.igalia.com/schenney/canvas-text-editing) *(blogs.igalia.com)*
  > To implement text editing, caret positioning, or inline link hit testing, developers had to resort to expensive workarounds—such as binary-searching substring widths via repeated \`measureText()\` calls \*\*Enhanced Canvas T...
- [chromium.org](https://issues.chromium.org/578524618) *(issues.chromium.org)*
  > \*\*\`getTextClusters()\` / \`fillTextCluster()\` (and evolving \`ShapedText\` / \`GlyphRun\` APIs)\*\*: Breaks shaped text into clusters for independent styling, per-character transforms, and complex graphic design effects \*\*Evolut...
- [chrome.com](https://developer.chrome.com/blog/chrome-144-beta?hl=en) *(developer.chrome.com)*
  > \*\*Sources:\*\* \[Chrome Platform Status\](https://chromestatus.com/feature/5075532483657728), \*Chrome 144 Beta Blog\*, and \*Microsoft Edge Web Platform Release Notes\* (Edge 146–154) The release announcements highlight its rol...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com)*
  > \*\*Sources:\*\* \[Chrome Platform Status\](https://chromestatus.com/feature/5075532483657728), \*Chrome 144 Beta Blog\*, and \*Microsoft Edge Web Platform Release Notes\* (Edge 146–154)
- [\[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16550.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Florin Malita Mon, 18 May 2026 13:12:08 -070...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16550.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5075532483657728`)*
  > \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Florin Malita Mon, 18 May 2026 13:12:08 -070...
- [Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16554.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5075532483657728`)*
  > Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Mike Taylor Mon, 18 May 2026 14:55:2...
- [Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16563.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5075532483657728`)*
  > Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Florin Malita Tue, 19 May 2026 12:20...
- [Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17424.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Florin Malita Wed, 09 Sep 2026 14:33:20 -0700 On Wed, ...
- [\[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg15075.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > \[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics Florin Malita Tue, 04 Nov 2025 12:11:02 -0800 \*Contact ema...

#### 📚 Platform Documentation & References

- [Canvas Text Metrics for Editing, Art and Design · Issue #1095 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1095) *(github.com)*
- [github.com](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/146.md) *(github.com)*
- [design-reviews#1095: Canvas Text Metrics for Editing, Art and Design](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1095) *(tag-github-bot.w3.org)*
- [canvas: text metrics, spacing, and clusters by ericc-ch · Pull Request #118 · ericc-ch/tinybrowser · GitHub](https://github.com/ericc-ch/tinybrowser/pull/118) *(github.com)*
- [TPAC 2024 meeting · Issue #326 · whatwg/meta · GitHub](https://github.com/whatwg/meta/issues/326) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (59 found across 15 planned queries, 20 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 3 · Standards Comments Read: 7

---

<a id="5072259281715200-host-and-screenshot-restrictions-for-chromedebugger-api"></a>
### [Host and screenshot restrictions for chrome.debugger API](https://chromestatus.com/feature/5072259281715200)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5072259281715200](https://chromestatus.com/feature/5072259281715200) · [chromestatuslite.com/feature/5072259281715200](https://chromestatuslite.com/feature/5072259281715200)
- **Chromium Bug:** [https://g-issues.chromium.org/issues/533240995](https://g-issues.chromium.org/issues/533240995)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

### Update (November 4, 2026): Feature rollback  Based on customer feedback, the enforcement of an all-or-nothing enterprise policy for the \[\`chrome.debugger\` extension API\](https://developer.chrome.com/docs/extensions/reference/api/debugger) can cause issues in certain environments.   While we design a more flexible approach, we have decided to roll back this change. For details on how to apply the rollback, see our addendum to this \[Chrome Developer blog post\](https://developer.chrome.com/blog/debugger-enterprise-policy-restrictions#guidance\_for\_enterprise\_administrators).  ### Feature description (September 23, 2026)  The \[\`chrome.debugger\` extension API\](https://developer.chrome.com/docs/extensions/reference/api/debugger) lets you send \[Chrome DevTools Protocol\](https://chromedevtools.github.io/devtools-protocol/) commands to a specified \`target\`, for example, a tab, an iframe, or a service worker. When connecting (attaching) to a target, the API can now enforce permissions on managed browsers by validating enterprise host and screenshot policies.  On enterprise devices, some policies can restrict extensions from attaching the debugger using an all-or-nothing model at attach time (\`chrome.debugger.attach()\`):  - For hosts, the \[ExtensionSettings\](https://chromeenterprise.google/policies/#ExtensionSettings) enterprise policy can be configured to block hosts for an extension, returning the error \`Host access is restricted by policy\`. - For screenshots, the \[DisableScreenshots\](https://chromeenterprise.google/policies/#DisableScreenshots) enterprise policy disables screenshot capture or Data Loss Prevention (DLP) rules apply, returning the error \`Screenshot capture is restricted by policy\`.  Developers can handle attach rejections gracefully or use higher-level APIs like \[\`chrome.scripting\`\](https://developer.chrome.com/docs/extensions/reference/api/scripting) and \[\`chrome.declarativeNetRequest\`\](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest) that support granular origin permissions in restricted enterprise environments.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (+20 points since 2026-10-12; footprint 120 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** The host and screenshot restriction policy enforcement for the chrome.debugger API introduced in Chrome 155 faced immediate disruption across enterprise environments and automation platforms like UiPath. Due to significant negative customer feedback regarding its all-or-nothing enforcement model, Google quickly rolled back the change while designing a more flexible approach.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams relying on enterprise-managed extensions or debugging APIs should review the official Chrome Developer blog addendum for rollback guidance and prepare for a more granular policy enforcement model in future releases.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome 155のchrome.debuggerポリシー適用強化、ロールバックへ https://t.co/Hnxb4SWRhH" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **3 new community discussions** found
- 📰 **5 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome 155のchrome.debuggerポリシー適用強化、ロールバックへ https://t.co/Hnxb4SWRhH](https://twitter.com/codezine/status/2119618491376636259) — *Twitter / X by @codezine (0 likes/RTs, 0 replies)*
- 🐦 [Google rollt die strengen Unternehmensregeln für chrome.debugger zurück. Bei Chrome 155 bis zu älteren 158-Builds kommt ](https://twitter.com/mySebbe/status/2119474256807596075) — *Twitter / X by @mySebbe (0 likes/RTs, 0 replies)*
- 🐦 [Google、Chrome 155 の chrome.debugger API に対するポリシー制限を撤回 https://t.co/pLoKQRLdED](https://twitter.com/Helen_Tech/status/2118292915441270803) — *Twitter / X by @Helen\_Tech (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [Stricter enterprise policy enforcement for chrome.debugger in Chrome 155  \|  Chrome for Developers](https://developer.chrome.com/blog/debugger-enterprise-policy-restrictions) *(developer.chrome.com)*
  > Stricter enterprise policy enforcement for chrome.debugger in Chrome 155 \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – B...
- [Chrome Extension Development Company \| EXTPOWER](https://extpower.dev/blog/chrome-155-debugger-enterprise-extension-policy) *(extpower.dev)*
  > Chrome Extension Development Company \| EXTPOWER
- [uipath.com](https://forum.uipath.com/t/uipath-browser-automation-fails-after-chrome-155-or-edge-155-update-when-screenshot-or-extension-host-blocking-policies-are-enabled/5786761?tl=ko) *(forum.uipath.com)*
  > \*\*UiPath Knowledge Base & Incident Advisories:\*\* \*“UiPath browser automation fails after Chrome 155 or Edge 155”\* & \*“Group Policies that affect the UiPath Extension for Chrome”\* Automation and RPA vendors were heavily i...
- [uipath.com](https://docs.uipath.com/studio/standalone/latest/user-guide/chrome-group-policies) *(docs.uipath.com)*
  > \*\*UiPath Knowledge Base & Incident Advisories:\*\* \*“UiPath browser automation fails after Chrome 155 or Edge 155”\* & \*“Group Policies that affect the UiPath Extension for Chrome”\* UiPath reported widespread failures in br...
- [uipath.com](https://forum.uipath.com/t/uipath-browser-automation-fails-after-chrome-155-or-edge-155-update-when-screenshot-or-extension-host-blocking-policies-are-enabled/5786761?tl=fr) *(forum.uipath.com)*
  > UiPath reported widespread failures in browser automations relying on the Chromium API input method and \`Inject Js Script\` actions when organizations had \`DisableScreenshots\` set to \`true\` or configured \`runtime\_blocked\_...
- [chrome.debugger  \|  API  \|  Chrome for Developers](https://developer.chrome.google.cn/docs/extensions/reference/api/debugger) *(developer.chrome.google.cn)*
  > Host restrictions: If enterprise policy ExtensionSettings configures blocked hosts (runtime\_blocked\_hosts) for an extension, chrome.debugger.attach() is blocked on all targets with the error &quot;Host access is restrict...

#### 📚 Platform Documentation & References

- [Claude in Chrome: all debugger tools fail with "Host access is restricted by policy" in Comet 155 (Chrome 156 unaffected) · Issue #103981 · anthropics/claude-code · GitHub](https://github.com/anthropics/claude-code/issues/103981) *(github.com)*
- [bug(browser-relay): Chromium 155 rejects every chrome.debugger.attach ("Host access is restricted by policy"); relay only reports a generic timeout · Issue #16748 · can1357/oh-my-pi · GitHub](https://github.com/can1357/oh-my-pi/issues/16748) *(github.com)*
- [Chrome/Edge 155: non-empty runtime\_blocked\_hosts now blocks chrome.debugger on every site · Issue #3 · drpwchen/kimi-webbridge-lockdown · GitHub](https://github.com/drpwchen/kimi-webbridge-lockdown/issues/3) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 10 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 5 verified) · `Twitter / X API v2` *(found 9 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (9 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ○ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (+10 points since 2026-10-12; footprint 380 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** The renewed HTML insertion and streaming API unifies dynamic markup injection into a coherent matrix of positional and streaming methods, resolving long-standing ergonomic inconsistencies between legacy APIs like insertAdjacentHTML and createContextualFragment. Chromium is driving the feature toward general availability enabled by default in Chrome 157 following extensive trials, while WHATWG specification work progresses in tandem. Broad ecosystem reception is enthusiastic, supported by formal positive backing from Mozilla and an open, active review from WebKit.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should experiment with the new methods behind browser flags to evaluate streaming and sanitized insertion workflows for modern, low-overhead architectures. However, production deployments should continue relying on progressive enhancement or established fallbacks until cross-browser implementation expands beyond Chromium.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @o-t-w: "This feature is due to ship in \[Chrome 154\](https://developer.chrome.com/blog/chrome-154-beta?hl=en#renewed\_html\_insertion\_and\_streaming\_methods). Moz..."
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **10 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [HTML streaming & revamped DOM parsing](https://github.com/WebKit/standards-positions/issues/629) [open] `topic: html`, `venue: WHATWG HTML Workstream`, `from: Google`
  > *Latest discussion from @o-t-w: "This feature is due to ship in \[Chrome 154\](https://developer.chrome.com/blog/chrome-154-beta?hl=en#renewed\_html\_insertion\_and\_streaming\_methods). Moz..."*
- **Mozilla:** [HTML streaming & revamped DOM parsing](https://github.com/mozilla/standards-positions/issues/1370) [closed] `venue: WHATWG`, `position: positive`, `topic: API`
  > *Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."*

#### 📰 Ecosystem Blogs & Articles

- [daily.dev](https://daily.dev/posts/declarative-partial-updates-5buxplifg) *(daily.dev)*
  > The \*\*"Renewed HTML insertion & streaming methods"\*\* initiative (part of the broader \*Declarative Partial Updates\* web standards push) redesigns how developers insert dynamic HTML into existing DOM nodes \*\*Core Focus\*\*: ...
- [Declarative partial updates  \|  Web Platform  \|  Chrome for Developers](https://developer.chrome.com/docs/web-platform/declarative-partial-updates) *(developer.chrome.com)*
  > The \*\*"Renewed HTML insertion & streaming methods"\*\* initiative (part of the broader \*Declarative Partial Updates\* web standards push) redesigns how developers insert dynamic HTML into existing DOM nodes Historically, de...
- [How Declarative Partial Updates Work in HTML](https://www.freecodecamp.org/news/how-declarative-partial-updates-work-in-html) *(freecodecamp.org)*
  > Historically, developers had to navigate an inconsistent matrix of legacy APIs (\`innerHTML\`, \`outerHTML\`, \`insertAdjacentHTML\`, and \`Range.createContextualFragment\`) Unclear mental models and naming conventions
- [dev.to](https://dev.to/grimicorn/declarative-partial-updates-out-of-order-html-streaming-without-a-framework-1086) *(dev.to)*
  > Inconsistent script execution semantics (e.g., \`innerHTML\` neutralizes scripts, while \`createContextualFragment\` runs them) \*\*Explicit Script Execution\*\*: Unsafe variants accept \`{ runScripts: true }\` in \`SetHTMLUnsafeOp...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/performance/out-of-order-html-streaming) *(developer.chrome.com)*
  > The renewed specification standardizes a 24-method grid (6 positions × Static/Streaming × Safe/Unsafe) \`setHTML()\` / \`setHTMLUnsafe()\`
- [sakupi01.com](https://studio.sakupi01.com/whatwg/declarative-partial-updates/renewed-html-insertion-and-streaming-methods) *(studio.sakupi01.com)*
  > \*\*Positional HTML Methods\*\*: Replaces \`insertAdjacentHTML\` with descriptive names mirroring existing DOM node manipulation methods (\`append\`, \`prepend\`, \`before\`, \`after\`, \`replaceWith\`) \*\*Streaming Methods\*\*: Methods pr...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700...
- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, ...
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com · 2026-06-17T18:03:04)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or wind...
- [New HTML setters by tunetheweb · Pull Request #46127 · mdn/content · GitHub](https://github.com/mdn/content/pull/46127) *(github.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > New HTML setters by tunetheweb · Pull Request #46127 · mdn/content · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...
- [Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30463) *(github.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/whatwg/html/issues/2142?timeline_page=1) *(github.com)*
- [HTML Standard, Edition for Web Developers](https://html.spec.whatwg.org/dev/dynamic-markup-insertion.html) *(html.spec.whatwg.org)*
- [Coherent story for HTML-setting methods · Issue #11669 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/11669) *(github.com)*
- [Option to batch mutation observations on parse-end · Issue #13198 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/13198) *(github.com)*
- [GitHub - GoogleChromeLabs/html-setters-polyfill · GitHub](https://github.com/GoogleChromeLabs/html-setters-polyfill) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `domparser` on [wpt.fyi](https://wpt.fyi/results?q=feature:domparser) (via webstatus.dev) — stable: Chrome 90.5% · Edge 90.5% · Firefox 95.2% · Safari 81%; experimental: Chrome 90.5% · Edge 90.5% · Firefox 95.2% · Safari 90.5%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (63 found across 12 planned queries, 29 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 13 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "domparser", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "domparser": Chrome 90.5% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 6

---

<a id="4709671889534976-deprecate-and-remove-xslt"></a>
### [Deprecate and remove XSLT](https://chromestatus.com/feature/4709671889534976)

- **Milestone:** Chrome 158 (Stepped rollout)
- **ChromeStatus:** [chromestatus.com/feature/4709671889534976](https://chromestatus.com/feature/4709671889534976) · [chromestatuslite.com/feature/4709671889534976](https://chromestatuslite.com/feature/4709671889534976)
- **Chromium Bug:** [https://crbug.com/435623334](https://crbug.com/435623334)
- **Browser Signals:** Chrome: `Stepped rollout` · Firefox: `Positive` · Safari: `Positive`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/xslt) (Chrome: `1`, Firefox: `1`, Safari: `3.1`) · *group-level data: web-features [`xslt`](https://webstatus.dev/features/xslt), shared with 1 other ChromeStatus feature*

#### 📝 Overview

Extensible Stylesheet Language Transformations \[XSLT v1.0\](https://www.w3.org/TR/xslt-10/), which all browsers adhere to, was standardized in 1999. In the meantime, XSLT has evolved to v2.0 and v3.0, adding features, and growing apart from the old version frozen into browsers. This lack of advancement, coupled with the rise of JavaScript libraries and frameworks that offer more flexible and powerful DOM manipulation, has led to a significant decline in the use of client-side XSLT. Its role within the web browser has been largely superseded by JavaScript-based technologies, such as JSON and React.  Chromium uses the \*\*libxslt\*\* library to process these transformations, and \[libxslt was unmaintained\](https://discourse.gnome.org/t/stepping-down-as-libxslt-maintainer/27615) for ~6 months of 2025. Libxslt is a complex, aging C codebase of the type notoriously susceptible to memory safety vulnerabilities like buffer overflows, which can lead to arbitrary code execution. Because client-side XSLT is now a niche, rarely-used feature, these libraries receive far less maintenance and security scrutiny than core JavaScript engines, yet they represent a direct, potent attack surface for processing untrusted web content. Indeed, XSLT is the source of several recent high-profile security exploits that continue to put browser users at risk.   For these reasons, Chromium (along with both other browser engines, Gecko and WebKit) plans to deprecate and remove XSLT from the web platform. The modern web is powered by three major browser engines: \[Blink\](https://www.chromium.org/blink/) (Chromium), \[Gecko\](https://firefox-source-docs.mozilla.org/overview/gecko.html) (Firefox), and \[WebKit\](https://webkit.org/) (Safari). They interpret code to render pages.   For more details, see this \[Chrome for Developers article\](https://developer.chrome.com/docs/web-platform/deprecating-xslt).  From Chrome 158, XSLT will stop functioning on Stable releases.

> **Motivation:** Security risks for all users outweigh the very small usage of this feature on the open web.  Usage of XSLTProcessor (https://chromestatus.com/metrics/feature/timeline/popularity/79) is fairly volatile, registering somewhere between 0.01% and 0.1% of page loads, averaging around 0.05% over time. These numbers are above the typical 0.001% deprecation...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 803 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Major browser engines and the WHATWG are coordinating to deprecate and remove native client-side XSLT (XSLT 1.0 and associated processing instructions) due to persistent memory-safety vulnerabilities in aging C libraries like libxslt. With client-side usage hovering at roughly 0.02% to 0.05% of page loads, browsers are phasing out support in favor of modern JavaScript-based transformations and frameworks.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams should immediately audit codebases for \`XSLTProcessor\` and XML-stylesheet processing instructions, verify fallback logic, and migrate necessary transformations to server-side processes or modern JavaScript XML/JSON libraries.
- Standards Activity (WebKit): Latest discussion from @annevk: "WebKit is cautiously supportive. We'd probably wait for one implementation to fully remove support, though if there's a known list of origins that par..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Intent to Deprecate and Remove XSLT" (87 points, 149 comments).

#### ⚡ What Happened This Week

- 📰 **9 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Intent to Deprecate and Remove XSLT](https://news.ycombinator.com/item?id=45779261) — *Hacker News (87 pts, 149 comments)*
- 💬 [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=45734849) — *Hacker News (3 pts, 1 comments)*
- 💬 [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=6102357) — *Hacker News (2 pts, 0 comments)*
- 🐦 [Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X](https://x.com/ChromiumDev/status/2093424350036660456) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Should we remove XSLT from the web platform?](https://github.com/whatwg/html/issues/11523) [open] `removal/deprecation`, `stage: 3`
  > *Latest discussion from @annevk: "WebKit is cautiously supportive. We'd probably wait for one implementation to fully remove support, though if there's a known list of origins that par..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1990759: Investigate deprecation and removal of XSLT (deprecate and remove XSLT)](https://bugzilla.mozilla.org/show_bug.cgi?id=1990759) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA/m/yNs4EsD5AQAJ) *(groups.google.com · 2025-11-01T04:31:52Z)*
  > Good riddance. The web needs to shed all the old baggages like this to move forward. Looking forward to MCP becoming part of the browser.
- [dev.to](https://dev.to/alanwest/chrome-158-removes-xslt-on-nov-17-heres-what-breaks-and-how-to-fix-it-206c) *(dev.to)*
  > Major web browser engines—\*\*Blink (Chromium)\*\*, \*\*Gecko (Firefox)\*\*, and \*\*WebKit (Safari)\*\*—along with the WHATWG standards body have coordinated to \*\*deprecate and remove native client-side XSLT (Extensible Stylesheet ...
- [Removing XSLT for a more secure browser  \|  Web Platform  \|  Chrome for Developers](https://developer.chrome.com/docs/web-platform/deprecating-xslt) *(developer.chrome.com)*
  > Major web browser engines—\*\*Blink (Chromium)\*\*, \*\*Gecko (Firefox)\*\*, and \*\*WebKit (Safari)\*\*—along with the WHATWG standards body have coordinated to \*\*deprecate and remove native client-side XSLT (Extensible Stylesheet ...
- [The tangled web of XSLT browser support \[LWN.net\]](https://lwn.net/Articles/1034560) *(lwn.net)*
  > Native XSLT support has been frozen at the 1999 XSLT 1.0 specification The primary driver for its removal is \*\*security and memory safety\*\*: Chromium and WebKit rely on \`libxslt\` (an aging C codebase that saw maintainer ...
- [Chrome is removing XSLT on November 17, 2026: what breaks and what to do \| XSLT Playground](https://xsltplayground.com/blog/posts/chrome-removing-xslt-what-to-do) *(xsltplayground.com)*
  > Client-side usage has plummeted to roughly \*\*0.02% of page loads\*\* It outlines the removal of both the \`XSLTProcessor\` JavaScript API and the \`&lt;?xml-stylesheet type="text/xsl"?&gt;\` processing instruction
- [Chrome 147 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-147-beta?hl=en) *(developer.chrome.com)*
  > Concurrently, Chrome is replacing its C-based \`libxml2\` parser with a memory-safe parser written in Rust for standard XML operations \*\*Key Takeaway\*\*: Explains the security rationale, highlights the migration toward safe...

#### 🔗 Inbound Citations & Reverse Links

- [Deprecate and remove XSLT \[435623334\] - Chromium](https://issues.chromium.org/issues/435623334) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > Chromium Sign in
- [Chromium base browsers removing support for XSLT view \| InterSystems DC](https://community.intersystems.com/post/chromium-base-browsers-removing-support-xslt-view) *(community.intersystems.com · 2026-09-28T00:00:00)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > Chromium base browsers removing support for XSLT view \| InterSystems DC Skip to main content Learning Documentation Community Open Exchange Ideas Portal Global Masters Certification Partner Directory Startup Hub Ask DC A...
- [\[XSLT\] Setting about:flags for XSLT to Enabled does not override the special trial \[465491619\] - Issue Tracker](https://doc-4n4g-3ldg-issuetracker.googleusercontent.com/issues/465491619/resources) *(doc-4n4g-3ldg-issuetracker.googleusercontent.com)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > Google Issue Tracker Sign in
- [Google Chrome Deprecating XLST · Issue #624 · mtconnect/cppagent · GitHub](https://github.com/mtconnect/cppagent/issues/624) *(github.com · 2026-10-26T19:25:15)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > Google Chrome Deprecating XLST · Issue #624 · mtconnect/cppagent · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh y...

#### 📚 Platform Documentation & References

- [Google Chrome Deprecating XLST · Issue #624 · mtconnect/cppagent · GitHub](https://github.com/mtconnect/cppagent/issues/624) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `xslt` on [wpt.fyi](https://wpt.fyi/results?q=feature:xslt) (via webstatus.dev) — stable: Chrome 58.8% · Edge 76.5% · Firefox 88.2% · Safari 88.2%; experimental: Chrome 58.8% · Edge 58.8% · Firefox 88.2% · Safari 94.1%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (66 found across 11 planned queries, 30 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 1 verified) · `Dev.to Community Blogs` (2 found, 1 verified) · `Hacker News Algolia` (3 found, 3 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (6 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "xslt", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "xslt": Chrome 58.8% passing (stable))*
- **Content Inspected:** Spec: ○ · Explainers: 0 · Standards Comments Read: 5

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

Starting in Chrome 158, the new Web Install API allows websites to prompt users to install a web app, given a manifest URL and optional manifest ID. The \`navigator.install()\` method enables cross-origin web app installation and provides a better developer experience than handling \`beforeinstallprompt\` events. This API is launching in parallel with the \[HTML &lt;install&gt; element\](https://chromeenterprise.google/resources/release-notes/?ver=158&featId=5152834368700416), a declarative entry point to the same installation capability.   Admins can control this in either of two ways: 1. With the enterprise policy, \[WebAppInstallByUserEnabled\](https://chromeenterprise.google/policies/#WebAppInstallByUserEnabled), to disable user web app installs in general, including installs initiated via \`navigator.install()\` and \`&lt;install&gt;\`.   2. With permissions policy, \[web-app-installation\](https://www.w3.org/TR/permissions-policy/), to allow or disallow use of this feature on origins that the enterprise controls (for example, internal sites or iframes).

> **Motivation:** The web currently lacks the ability for a site to offer installation of a web app identified by a cross-origin manifest. Limited support exists for eligible same-origin web apps via ambient installation affordances and the beforeinstallprompt event. However, the existent browser-provided entry points are difficult for developers to use and users to...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 676 points)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""standards-positions/issues/619" site:github.com/WebKit"`, `""Web Install API" navigator.install"`, `""WebKit/standards-positions" 619"`, `""navigator.install" site:github.com/mozilla/standards-positions"`
- **Analysis:** Led by Microsoft and Google, the Web Install API (navigator.install()) and companion declarative &lt;install&gt; element aim to streamline Progressive Web App installation and enable cross-origin app directory distribution without proprietary app stores. While Chrome and Edge have pushed ahead with shipping the feature to replace the legacy beforeinstallprompt workflow, it faces steep architectural headwinds in standards bodies, leaving it strictly a Chromium-centric capability for the foreseeable future.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt navigator.install() strictly as a progressive enhancement guarded by feature detection ('install' in navigator) to optimize onboarding in Chromium desktop and Android environments. For production PWAs, maintain manual installation instructions and existing ambient fallbacks so Safari and Firefox users can continue installing via native browser chrome controls.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Closed via https://github.com/WebKit/standards-positions/issues/619..."
- Standards Activity (Mozilla): Latest discussion from @saschanaz: ""install capability" is not very specific topic, should we close this in favor of #1371, #1387, and #1388?..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "The Web Install API is ready for testing" (3 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **2 new community discussions** found
- 📰 **13 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [The Web Install API is ready for testing](https://news.ycombinator.com/item?id=46040517) — *Hacker News (3 pts, 0 comments)*
- 🐦 [Sitene tek etiketle “Uygulamayı yükle” butonu: Chrome 158’de &lt;install&gt; elemanı + navigator.install().  JavaScript ](https://twitter.com/Devorytech/status/2119540524528931271) — *Twitter / X by @Devorytech (0 likes/RTs, 0 replies)*
- 🐦 [@dannymoerkerke navigator.install()](https://twitter.com/Malix_Labs/status/2117354018414457329) — *Twitter / X by @Malix\_Labs (0 likes/RTs, 1 replies)*

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
- [Enable the Web Install API (Experimental) in Chrome & Edge – PWAStore \| PWAStore](https://pwastore.io/web-install-api) *(pwastore.io)*
  > Recent developer announcements, tutorials, and community discussions highlight the \*\*Web Install API\*\* (featuring \`navigator.install()\` and the companion declarative \`&lt;install&gt;\` element) \*\*Imperative (\`navigator.install(...
- [Install web apps with the new HTML install element  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/install-element-ot) *(developer.chrome.com)*
  > Recent developer announcements, tutorials, and community discussions highlight the \*\*Web Install API\*\* (featuring \`navigator.install()\` and the companion declarative \`&lt;install&gt;\` element) Led by Microsoft Edge and Google ...
- [infoq.com](https://www.infoq.com/news/2026/03/web-install-api-origin-trial) *(infoq.com)*
  > Led by Microsoft Edge and Google Chrome, this initiative aims to modernize and democratize Progressive Web App (PWA) distribution This approach was notoriously fragile, browser-dependent, tied strictly to the current ori...
- [Installation — What PWA Can Do Today](https://whatpwacando.today/installation) *(whatpwacando.today)*
  > \*\*The Problem:\*\* Traditionally, programmatic PWA installation in Chromium relied on the \`beforeinstallprompt\` event \*\*Cross-Origin & App Stores:\*\* It allows one site (e.g., a curated web app directory or search engine) t...
- [swrice.com](https://swrice.com/web-install-api) *(swrice.com)*
  > \*\*The Problem:\*\* Traditionally, programmatic PWA installation in Chromium relied on the \`beforeinstallprompt\` event This approach was notoriously fragile, browser-dependent, tied strictly to the current origin, and unint...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Prototype: Web Install API](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyIcrJX33ik) *(groups.google.com · 2024-04-12T00:00:00)* *(Cites: `https://chromestatus.com/feature/5183481574850560`)*
  > Intent to Prototype: Web Install API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Web Install AP...
- [\[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17504.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5183481574850560`)*
  > The &lt;install&gt; element enables cross-origin web app installation without JavaScript and provides a better developer experience than handling beforeinstallprompt events. The element is proposed to ship together with ...
- [\[blink-dev\] Intent to Prototype: Web Install API](https://www.mail-archive.com/blink-dev@chromium.org/msg09966.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5183481574850560`)*
  > \[blink-dev\] Intent to Prototype: Web Install API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Web Install API 'Diego Gonzalez' via blink-dev Fri, 12 Apr 2024 08:27:16 -0700 Contact emails \[email...
- [Web Install API (navigator.install) \| OpenPWA](https://openpwa.net/reference/installation/navigator-install) *(openpwa.net · 2026-10-22T00:00:00)* *(Cites: `https://chromestatus.com/feature/5183481574850560`)*
  > Web Install API (navigator.install) \| OpenPWA Skip to content OpenPWA Search Ctrl K Cancel Select theme Dark Light Auto Select language English 中文 API in Installation Web Install API (navigator.install) Published 2026-10...
- [\[blink-dev\] Intent to Extend Experiment: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg16259.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5183481574850560`)*
  > \[blink-dev\] Intent to Extend Experiment: Web Install API Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Web Install API 'Lia Hiscock' via blink-dev Fri, 03 Apr 2026 11:25:40 -0700 Contact ...

#### 📚 Platform Documentation & References

- [GitHub - WICG/install-element: An \`&lt;install&gt;\` element might be nice. · GitHub](https://github.com/WICG/install-element) *(github.com)*
- [WEB INSTALL API Diego González, Amanda Baker with guests](https://www.w3.org/2024/Talks/TPAC/breakouts/web-install-api.pdf) *(w3.org)*
- [MSEdgeExplainers/WebInstall/explainer.md at main · MicrosoftEdge/MSEdgeExplainers · GitHub](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/WebInstall/explainer.md) *(github.com)*
- [github.com](https://github.com/w3c/manifest/issues/1178) *(github.com)*
- [Installing web apps as a new platform feature – 12 March 2024](https://www.w3.org/2024/03/12-installing-web-apps-breakout-2024-minutes.html) *(w3.org)*

#### 🧪 Interactive Demos & Samples

- [Web Install API Demo](https://microsoftedge.github.io/Demos/pwa-install-api)
- [Web Install API Demo](https://kbhlee2121.github.io/pwa/web-install-manifest-url/index.html)

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `navigator-install` on [wpt.fyi](https://wpt.fyi/results?q=feature:navigator-install) (webstatus.dev has no pass rates for it)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (71 found across 12 planned queries, 48 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 14 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Dev.to Community Blogs` (8 found, 0 verified) · `Hacker News Algolia` (8 found, 1 verified) · `Standards Positions` (5 found, 5 verified) · `Engine Bug Trackers` (9 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 1 verified) · `web-features mapping` *(group "navigator-install", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "navigator-install": no stable pass rate for Chrome yet)* · `Sources cited by the AI synthesis` (15 found, 9 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 20

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

Chrome can now trigger a request for the browser to install a web app, given a manifest URL and optional manifest ID. The \`&lt;install&gt;\` element enables cross-origin web app installation without JavaScript and provides a better developer experience than handling \`beforeinstallprompt\` events. The element is launching in parallel with \[Web Install API\](https://chromeenterprise.google/resources/release-notes/?ver=158&featId=5183481574850560), specifically the \`navigator.install()\` method, the imperative entry point to the same installation capability.   Admins can control this feature in either of two ways: 1. With enterprise policy, \[WebAppInstallByUserEnabled\](https://chromeenterprise.google/policies/#WebAppInstallByUserEnabled), admins can disable user web app installs in general, including installs initiated via \`navigator.install()\` and &lt;install&gt;.   2. With permissions policy, \[web-app-installation\](https://www.w3.org/TR/permissions-policy/), admins can allow or disallow use of this feature on origins that the enterprise controls (for example, internal sites or iframes).

> **Motivation:** The web currently lacks the ability for a site to offer installation of a web app identified by a cross-origin manifest. Limited support exists for eligible same-origin web apps via ambient installation affordances and the beforeinstallprompt event. However, the existent browser-provided entry points are difficult for developers to use and users to...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 536 points)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""navigator.install" mozilla standards-positions"`, `""HTML install element" WICG"`, `""Web Install API" standards-positions WebKit"`
- **Analysis:** Shipping enabled by default in Chrome 158, the HTML &lt;install&gt; element and its companion Web Install API (navigator.install()) introduce declarative and imperative cross-origin web app installation directly from web content. Driven collaboratively by Google and Microsoft via the WICG, the specification replaces brittle beforeinstallprompt event patterns with standardized manifest-driven triggers. However, the capability remains confined to Chromium-based browsers due to firm pushback and a lack of consensus from rival engine vendors.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt the &lt;install&gt; element purely as a progressive enhancement, verifying element and API support before rendering custom inline installation UI in Chrome and Edge. Existing fallbacks—including manual 'Add to Home Screen' instructional prompts for Safari and ambient UI reliance for Firefox—must be maintained to ensure reach across non-Chromium platforms.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Closed via https://github.com/WebKit/standards-positions/issues/619..."
- Standards Activity (Mozilla): Latest discussion from @saschanaz: ""install capability" is not very specific topic, should we close this in favor of #1371, #1387, and #1388?..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Install web apps with the new HTML install element" (32 points, 14 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **12 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Install web apps with the new HTML install element](https://news.ycombinator.com/item?id=48360474) — *Hacker News (32 pts, 14 comments)*
- 💬 [Install web apps with the new HTML install element](https://news.ycombinator.com/item?id=48125969) — *Hacker News (3 pts, 0 comments)*
- 🐦 [Sitene tek etiketle “Uygulamayı yükle” butonu: Chrome 158’de &lt;install&gt; elemanı + navigator.install().  JavaScript ](https://twitter.com/Devorytech/status/2119540524528931271) — *Twitter / X by @Devorytech (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Web Install API](https://github.com/WebKit/standards-positions/issues/463) [closed] `position: oppose`, `topic: app-like capabilities`, `from: Microsoft`
  > *Latest discussion from @marcoscaceres: "Closed via https://github.com/WebKit/standards-positions/issues/619..."*
- **Mozilla:** [Web Install capability](https://github.com/mozilla/standards-positions/issues/1179) [open] `venue: Proposal`, `topic: API`, `team: DOM`
  > *Latest discussion from @saschanaz: ""install capability" is not very specific topic, should we close this in favor of #1371, #1387, and #1388?..."*

#### 📰 Ecosystem Blogs & Articles

- [Install web apps with the new HTML install element](https://developer.chrome.com/blog/install-element-ot) *(developer.chrome.com · 2026-06-01T18:06:28Z)*
  > Not answered in TFA: What does it mean to &quot;install&quot; a web app in Chrome?
- [swrice.com](https://swrice.com/web-install-api) *(swrice.com)*
  > The declarative \*\*HTML \`&lt;install&gt;\` element\*\* and its imperative counterpart, the \*\*Web Install API (\`navigator.install()\`)\*\*, represent a fundamental shift in Progressive Web App (PWA) acquisition Instead of relying on b...
- [Issue #741: A new HTML element for installing web apps — Frontend Focus \| daily.dev](https://daily.dev/posts/issue-741-a-new-html-element-for-installing-web-apps-frontend-focus-6gx3owroq) *(daily.dev)*
  > Below is an overview of recent announcements, tutorials, and ecosystem reactions across major developer platforms \*\*Frontend Focus (Issue #741) & Swrice Developer Guides\*\*
- [infoq.com](https://www.infoq.com/news/2026/03/web-install-api-origin-trial) *(infoq.com)*
  > Below is an overview of recent announcements, tutorials, and ecosystem reactions across major developer platforms \*\*Microsoft Edge Explainers & Windows Blog (Diego Gonzalez, Lia Hiscock, Mike West)\*\*
- [Patrick - Install web apps with the new HTML install element](https://patrickbrosset.com/articles/2026-05-13-install-web-apps-with-the-new-html-install-element) *(patrickbrosset.com)*
  > \*\*"Install web apps with the new HTML install element" (Chrome for Developers / Patrick Brosset)\*\*
- [master.dev](https://blog.master.dev/new-things-you-should-know-about-html-here-in-mid-2026) *(blog.master.dev)*
  > \*\*Fallback & Progressive Enhancement:\*\* Browsers that don't support the element treat it like an unknown inline container, allowing child fallback elements (such as conventional buttons or download links) to display norm...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17503.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > The navigator.install() method enables cross-origin web app installation and provides a better developer experience than handling beforeinstallprompt events. This API is proposed to ship together with the &lt;install&gt;...
- [Web app HTML install element · Issue #1083 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1083) *(github.com · 2026-07-29T21:39:54)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > Web app HTML install element · Issue #1083 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Re...
- [\[blink-dev\] Intent to Experiment: Web app HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg16195.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > \[blink-dev\] Intent to Experiment: Web app HTML install element Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Web app HTML install element 'Lia Hiscock' via blink-dev Wed, 25 Mar 2026 16:47:00 -0...
- [\[&lt;install&gt; Element\] Enable Declarative installation of Web Apps from Web Content \[454827186\] - Issue Tracker](https://issuetracker.google.com/issues/454827186) *(issuetracker.google.com)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > WICG proposal - https://aka.ms/InstallElement Chromestatus - https://chromestatus.com/feature/5152834368700416 &lt;strong&gt;Bug: 479161962,454827186 Change-Id: I8bd76ce59d422f8e3d67d91f1e12f0f2e69ee6ef&lt;/strong&gt; Reviewed-on: h...
- [Re: \[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17774.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152834368700416`)*
  > The navigator.install() method enables &gt; cross-origin web app installation and provides a better developer &gt; experience than handling beforeinstallprompt events. This API is proposed &gt; to ship together with the ...

#### 📚 Platform Documentation & References

- [GitHub - WICG/install-element: An \`&lt;install&gt;\` element might be nice. · GitHub](https://github.com/WICG/install-element) *(github.com)*
- [install-element/explainer-manifest-url.md at main · WICG/install-element · GitHub](https://github.com/WICG/install-element/blob/main/explainer-manifest-url.md) *(github.com)*
- [Web app HTML install element · Issue #1083 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1083) *(github.com)*
- [\[pull\] main from ChromeDevTools:main by pull\[bot\] · Pull Request #378 · Jahid11978/devtools-frontend · GitHub](https://github.com/Jahid11978/devtools-frontend/pull/378) *(github.com)*
- [Web app installation · Issue #1430 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/1430) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [HTML install element Demo](https://microsoftedge.github.io/Demos/pwa-install-element)
- [HTML install element Demo](https://kbhlee2121.github.io/pwa/web-install-manifest-url/only-elements.html)

#### 🌐 Web-features Group Context

*group-level data: web-features [`install`](https://webstatus.dev/features/install)*

- **Chrome usage:** 0.000083% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/424))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (59 found across 12 planned queries, 31 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 12 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (8 found, 2 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (5 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "install", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "install" has no test results)* · `Sources cited by the AI synthesis` (10 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

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

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 395 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"focus without user activation permissions policy"`, `"focus-without-user-activation webkit mozilla"`
- **Analysis:** The focus-without-user-activation permissions policy gives host documents fine-grained declarative control to stop embedded iframes, ads, and third-party widgets from programmatically stealing focus without transient user activation. Enabled by default across Chromium browsers and specified within the WHATWG HTML Standard, the feature eliminates longstanding security vulnerabilities and accessibility hurdles caused by rogue embeds hijacking user keystrokes. Engine consensus is solid, with a satisfied W3C TAG review and constructive implementation tracking across both WebKit and Gecko.

**Key Recommendations & Takeaways:**
- Actionable Advice: Deploy the policy immediately as a defense-in-depth progressive enhancement by serving the \`Permissions-Policy: focus-without-user-activation=()\` header or adding restricted \`allow\` attributes to untrusted iframe embeds. When embedding trusted interactive widgets that require programmatic focus on display, verify that your parent container properly initiates focus delegation so legitimate user workflows are not unintentionally blocked.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @aprotyas: "Given our supportive position, there's now a bug tracking the WebKit implementation for \`focus-without-user-activation\`: https://bugs.webkit.org/show\_..."
- Standards Activity (Mozilla): Latest discussion from @ffiori: "cc @smaug---- @zcorpan..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [\`focus-without-user-activation\` feature policy](https://github.com/WebKit/standards-positions/issues/406) [closed] `position: support`, `topic: web apis`, `venue: WHATWG HTML Workstream`, `from: Microsoft`
  > *Latest discussion from @aprotyas: "Given our supportive position, there's now a bug tracking the WebKit implementation for \`focus-without-user-activation\`: https://bugs.webkit.org/show\_..."*
- **Mozilla:** [\`focus-without-user-activation\` feature policy](https://github.com/mozilla/standards-positions/issues/1080) [open] `venue: WHATWG`, `team: Security`
  > *Latest discussion from @ffiori: "cc @smaug---- @zcorpan..."*
- **W3C TAG:** ['focus-without-user-activation' permissions policy](https://github.com/w3ctag/design-reviews/issues/1066) [closed] `Venue: WHATWG`, `Resolution: satisfied`, `Venue: WebAppSec WG`, `Topic: Feature Policy`, `Focus: Accessibility (complete)`
  > *Latest discussion from @matatk: "Hi @ffiori. Thanks for your updates to the explainer; they're helpful, and we continue to be happy with the direction the work has taken, so will clos..."*

#### 📰 Ecosystem Blogs & Articles

- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/34f4ce76618b0b38da98f21bd9c33884f981a4ce) *(chromium.googlesource.com)*
  > \*\*How It Works:\*\* Setting the policy (e.g., via \`Permissions-Policy: focus-without-user-activation=()\` or \`&lt;iframe allow="focus-without-user-activation 'none'"&gt;\`) blocks programmatic focus changes initiated by that frame...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/security/security) *(developer.chrome.com)*
  > \*\*How It Works:\*\* Setting the policy (e.g., via \`Permissions-Policy: focus-without-user-activation=()\` or \`&lt;iframe allow="focus-without-user-activation 'none'"&gt;\`) blocks programmatic focus changes initiated by that frame...
- [chrome.com](https://developer.chrome.com/release-notes/149?hl=en) *(developer.chrome.com)*
  > \*\*Chrome Platform Status & Chrome 149 / 158 Release Notes:\*\* Chromium introduced \`focus-without-user-activation\` as an Origin Trial starting in Chrome 149 and progressed it toward general availability in Chrome 158
- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Chrome Platform Status & Chrome 149 / 158 Release Notes:\*\* Chromium introduced \`focus-without-user-activation\` as an Origin Trial starting in Chrome 149 and progressed it toward general availability in Chrome 158
- [Microsoft Edge 158 web platform release notes (Nov. 19, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/158) *(learn.microsoft.com)*
  > \*\*Edge 152 & Edge 158 Web Platform Releases:\*\* Microsoft Edge's developer documentation details the rollout of \`focus-without-user-activation\` The Edge platform notes emphasize the enterprise and accessibility value: pre...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > \*\*Edge 152 & Edge 158 Web Platform Releases:\*\* Microsoft Edge's developer documentation details the rollout of \`focus-without-user-activation\`

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Experiment: Permissions Policy: focus-without-user-activation](https://groups.google.com/a/chromium.org/g/blink-dev/c/GLmp1IrJ4Ig) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5179186249465856`)*
  > Intent to Experiment: Permissions Policy: focus-without-user-activation Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; ...
- [Permissions Policy: focus-without-user-activation · Issue #1324 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1324) *(github.com · 2026-08-14T17:31:47)* *(Cites: `https://chromestatus.com/feature/5179186249465856`)*
  > Permissions Policy: focus-without-user-activation · Issue #1324 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with anot...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17811.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5179186249465856`)*
  > Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Mike Taylor Wed, 2...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17840.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5179186249465856`)*
  > Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation 'Fernando Fiori' v...
- [Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](https://www.mail-archive.com/blink-dev@chromium.org/msg16301.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5179186249465856`)*
  > Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Mike T...

#### 📚 Platform Documentation & References

- [webappsec-permissions-policy/policies/focus-without-user-activation.md at main · w3c/webappsec-permissions-policy · GitHub](https://github.com/w3c/webappsec-permissions-policy/blob/main/policies/focus-without-user-activation.md) *(github.com)*
- [design-reviews#1066: 'focus-without-user-activation' permissions policy](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1066) *(tag-github-bot.w3.org)*
- [Add focus-without-user-activation permissions policy · Issue #4487 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4487) *(github.com)*
- [Add \`focus-without-user-activation\` permissions policy · Issue #37532 · mdn/content · GitHub](https://github.com/mdn/content/issues/37532) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/406) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 12 planned queries, 28 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 12 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (4 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 7

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

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 335 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""media element pseudo-classes" OR ":playing" OR ":buffering" css site:github.com/mozilla/standards-positions"`, `""media-pseudos" css selectors chrome firefox safari"`, `"media element pseudo-classes interop 2026 site:wpt.fyi OR site:github.com/web-platform-tests"`
- **Analysis:** Media element pseudo-classes (\`:playing\`, \`:paused\`, \`:seeking\`, \`:buffering\`, \`:stalled\`, \`:muted\`, and \`:volume-locked\`) streamline media styling by eliminating boilerplate JavaScript event listeners for standard playback state reflection. Included as an Interop 2026 focus area, full cross-engine consensus is nearly achieved: Safari and Firefox provide solid production support, experimental Chromium implementations pass 100% of Web Platform Tests, and Chrome is slated to enable them by default in version 158.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams should begin adopting media pseudo-classes as a progressive enhancement today, especially when styling non-critical UI states or overlay indicators. However, until stable Chromium releases ship the feature globally, production-critical video playback skins still require lightweight JavaScript event listener fallbacks.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @alastor0325: "This looks good to us, and \[this\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1707584) is our implementation bug. We also filed a separate \[issue\](ht..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **Mozilla:** [Media element pseudo-classes](https://github.com/mozilla/standards-positions/issues/1319) [open] `topic: CSS`, `team: Media`
  > *Latest discussion from @alastor0325: "This looks good to us, and \[this\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1707584) is our implementation bug. We also filed a separate \[issue\](ht..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2013367: \[meta\] Pseudo-classes for media element states](https://bugzilla.mozilla.org/show_bug.cgi?id=2013367) `[NEW]`
- **WebKit (Safari):** [Bug #311276: REGRESSION(310172@main): \[GStreamer\] imported/w3c/web-platform-tests/css/selectors/media/media-playback-state.html is flaky](https://bugs.webkit.org/show_bug.cgi?id=311276) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [mintec.co](https://mintec.co/blog/css-media-pseudo-classes-player-2026) *(mintec.co)*
  > \*\*Media element pseudo-classes\*\* represent a significant milestone in CSS and HTML media integration \*\*The Problem It Solves:\*\* Historically, styling custom player skins or play/pause button overlays required wiring up n...
- [modern-css.com](https://modern-css.com/video-player-states-without-javascript-events) *(modern-css.com)*
  > Included as a focus area in \*\*Interop 2026\*\*, these selectors—\`:playing\`, \`:paused\`, \`:seeking\`, \`:buffering\`, \`:stalled\`, \`:muted\`, and \`:volume-locked\`—allow browsers to expose native playback and audio states directly...
- [Styling video Elements by State with \`:playing\` and \`:muted\`](https://azukiazusa.dev/en/blog/style-video-with-media-state-pseudo-classes) *(azukiazusa.dev)*
  > \*\*State Relationships:\*\* The specifications and MDN point out that states are not strictly mutually exclusive Notably, an element still matches \`:playing\` even when temporarily stopped due to \`:buffering\` or \`:stalled\`, ...
- [schalkneethling.com](https://schalkneethling.com/projects/css-media-pseudo-polyfill) *(schalkneethling.com)*
  > Because native support has rolled out gradually across browser engines, tooling authors have developed drop-in utilities such as Schalk Neethling’s \`css-media-pseudo-polyfill\` It intercepts stylesheets, rewrites media ps...
- [reddit.com](https://www.reddit.com/r/css/comments/1wjxmgh/baseline_had_playingpausedetc_pseudoclasses_as) *(reddit.com)*
  > Ecosystem sentiment across developer communities (Reddit, GitHub Web Platform DX) has been enthusiastic
- [\[blink-dev\] Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16504.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Media element pseudo-classes Chromestatus Mon, 11 May 2026 12:34:09 -0700 Contact emails \[email&#...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Media element pseudo-classes](http://www.mail-archive.com/blink-dev@chromium.org/msg16504.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > \[blink-dev\] Intent to Ship: Media element pseudo-classes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Media element pseudo-classes Chromestatus Mon, 11 May 2026 12:34:09 -0700 Contact emails \[email&#...
- [media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1307) *(github.com · 2026-08-14T17:30:45)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...
- [css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/issues/30523) *(github.com · 2026-09-14T23:44:14)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Search /...

#### 📚 Platform Documentation & References

- [playing CSS pseudo-class - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:playing) *(developer.mozilla.org)*
- [:buffering CSS pseudo-class - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:buffering) *(developer.mozilla.org)*
- [Pseudo-classes - CSS - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) *(developer.mozilla.org)*
- [Media element pseudo-classes · Issue #166 · web-platform-dx/developer-signals · GitHub](https://github.com/web-platform-dx/developer-signals/issues/166) *(github.com)*
- [media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1307) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `media-pseudos` on [wpt.fyi](https://wpt.fyi/results?q=feature:media-pseudos) (via webstatus.dev) — stable: Chrome 0% · Edge 0% · Firefox 87.5% · Safari 100%; experimental: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%

#### 🌐 Web-features Group Context

*group-level data: web-features [`media-pseudos`](https://webstatus.dev/features/media-pseudos)*

- **Chrome usage:** 0.00024% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/436))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (68 found across 11 planned queries, 28 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 9 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (2 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (4 found, 2 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "media-pseudos", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "media-pseudos": Chrome 0% passing (stable))* · `Sources cited by the AI synthesis` (2 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 2

---

<a id="5180947573112832-webtransport-congestion-control"></a>
### [WebTransport congestion control](https://chromestatus.com/feature/5180947573112832)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5180947573112832](https://chromestatus.com/feature/5180947573112832) · [chromestatuslite.com/feature/5180947573112832](https://chromestatuslite.com/feature/5180947573112832)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransportoptions-congestioncontrol](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-congestioncontrol)
- **Chromium Bug:** [https://issues.chromium.org/issues/501268547](https://issues.chromium.org/issues/501268547)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Neutral` · Safari: `Neutral`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

#### 📝 Overview

Adds the congestionControl constructor option and read-only attribute to WebTransport. Applications can request "default", "throughput", or "low-latency" behavior, allowing the user agent to select suitable congestion-control behavior for each session.

> **Motivation:** WebTransport applications have different performance requirements. Interactive applications prioritize low latency, while bulk transfers prioritize throughput. This hint lets applications express that preference without selecting or controlling a specific congestion-control algorithm.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 310 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"WebTransport congestion control option and attribute webkit standards positions"`, `"WebTransport congestion control option and attribute mozilla standards positions"`, `"WebTransport congestionControl chrome status intent to ship"`
- **Analysis:** The WebTransport congestion control API introduces declarative application-level hints ('default', 'throughput', and 'low-latency') to allow underlying QUIC transports to balance bandwidth against queueing delay. With Firefox and Safari having established early support, Chromium's shipping rollout in Chrome 159 completes baseline interoperability across all major browser engines. Standard consensus is unified around high-level intent hints that avoid brittle algorithm lock-in, granting engines the autonomy to tune QUIC implementations dynamically.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt the \`congestionControl\` constructor option today as progressive enhancement for latency-sensitive WebTransport connections. Because non-supporting engines or fallback environments simply treat unknown options gracefully or default to standard transport heuristics, there is zero risk of regression.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @larseggert: "CC @jesup @omansfeld @mxinden..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **13 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [WebTransport congestion control option and attribute](https://github.com/WebKit/standards-positions/issues/734) [open] 
- **Mozilla:** [WebTransport congestion control option and attribute](https://github.com/mozilla/standards-positions/issues/1472) [open] `venue: W3C`, `topic: API`, `team: Networking`
  > *Latest discussion from @larseggert: "CC @jesup @omansfeld @mxinden..."*

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5180947573112832/activity) *(chromestatus.com)*
  > This preserves browser autonomy and avoids interoperability lock-in \*\*Design Considerations:\*\* The Chromium intent notes minimal compatibility and security risks
- [WebTransport Explained: vs WebRTC, WHIP and MoQ in 2026](https://www.forasoft.com/learn/video-streaming/articles-streaming/webtransport-whip) *(forasoft.com)*
  > In the W3C Candidate Recommendation snapshot, \`congestionControl\` is formally specified under \`WebTransportOptions\` \*\*Media over QUIC (MoQ) & Real-Time Audio/Video:\*\* Developer ecosystems working on emerging protocols li...
- [chromium.org](https://issues.chromium.org/issues/435589295) *(issues.chromium.org)*
  > \*\*Media over QUIC (MoQ) & Real-Time Audio/Video:\*\* Developer ecosystems working on emerging protocols like Media over QUIC and WebCodecs pipelines highlight congestion control hinting as a critical missing piece
- [openpwa.net](https://openpwa.net/reference/capabilities/webtransport) *(openpwa.net)*
  > \*\*Developer Recommendation:\*\* Because \`congestionControl\` is an additive hint, developers can safely include it today; unsupported browsers will simply ignore the option or return \`"default"\` while establishing standard ...
- [\[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17735.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport congestion control Chromestatus Wed, 14 Oct 2026 22:53:52 -0700 Contact emails \[e...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17748.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Mike Taylor Thu, 15 Oct 2026 10:13:09 -0700 On 10/14/2...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17735.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport congestion control Chromestatus Wed, 14 Oct 2026 22:53:52 -0700 Contact emails \[e...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17748.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Mike Taylor Thu, 15 Oct 2026 10:13:09 -0700 On 10/14/2...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17785.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control 'Monica Chintala' via blink-dev Mon, 19 Oct 2026 13:01...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17784.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control 'Dan Clark' via blink-dev Mon, 19 Oct 2026 11:44:45 -0...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17750.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control 'Monica Chintala' via blink-dev Thu, 15 Oct 2026 11:41...

#### 📚 Platform Documentation & References

- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [WebTransport congestion control option and attribute · Issue #1472 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1472) *(github.com)*
- [WebTransport congestion control option and attribute · Issue #734 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/734) *(github.com)*
- [github.com](https://github.com/zoharbabin/webrtc-inspector/issues/95) *(github.com)*
- [WebTransport: congestionControl property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/congestionControl) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 12 planned queries, 24 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 9 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 2 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 51.1% passing (stable))* · `Sources cited by the AI synthesis` (2 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

---

<a id="5123480866783232-cssimportrulestylesheet-"></a>
### [CSSImportRule.styleSheet ](https://chromestatus.com/feature/5123480866783232)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5123480866783232](https://chromestatus.com/feature/5123480866783232) · [chromestatuslite.com/feature/5123480866783232](https://chromestatuslite.com/feature/5123480866783232)
- **Specification:** [https://drafts.csswg.org/cssom/#the-cssimportrule-interface](https://drafts.csswg.org/cssom/#the-cssimportrule-interface)
- **Chromium Bug:** [https://issues.chromium.org/issues/40266154](https://issues.chromium.org/issues/40266154)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/import) (Chrome: `1`, Firefox: `1`, Safari: `1`) · *group-level data: web-features [`import`](https://webstatus.dev/features/import), shared with 1 other ChromeStatus feature*

#### 📝 Overview

Returns null from CSSImportRule.styleSheet when an @import rule has no associated stylesheet, including when its supports() condition is false. This lets developers check whether a stylesheet is associated with the rule before accessing its properties.

> **Motivation:** CSS Cascade requires CSSImportRule.styleSheet to return null when an @import supports() condition does not match, and CSSOM declares the attribute nullable. This change aligns Chromium with those requirements.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 305 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"CSSImportRule styleSheet null supports chromestatus"`, `"WebKit standards positions CSSImportRule styleSheet null"`
- **Analysis:** Aligning CSSImportRule.styleSheet to return null when an @import rule has no associated stylesheet—notably when its supports() condition fails—resolves a long-standing mismatch between the CSS Cascade and CSSOM specifications. Gecko already aligns with this behavior, and Chromium has formalized full nullable support to prevent empty or dummy stylesheet generation. While broadly welcomed as a cleanup for CSSOM inspection tooling, engine consensus is tempered by ongoing spec refinement around object lifetimes.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit CSSOM inspection routines and adopt optional chaining or explicit null checks (e.g., \`rule.styleSheet?.cssRules\`) before querying imported stylesheets. Do not rely on \`CSSImportRule.styleSheet\` always resolving to an object when using conditional \`@import supports()\` queries.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I'm still concerned about this not being clearly defined, yes. For one, having CSS Cascade monkey patch how a CSSOM property should behave seems wrong..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **26 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Allow CSSImportRule.styleSheet to be null](https://github.com/WebKit/standards-positions/issues/325) [open] `topic: css`, `venue: W3C CSS WG`
  > *Latest discussion from @annevk: "I'm still concerned about this not being clearly defined, yes. For one, having CSS Cascade monkey patch how a CSSOM property should behave seems wrong..."*

#### 📰 Ecosystem Blogs & Articles

- [google.com](https://groups.google.com/a/chromium.org/g/blink-dev/c/ku3YsLTllY4) *(groups.google.com)*
  > In the CSS Object Model (CSSOM), \*\*\`CSSImportRule.styleSheet\`\*\* is defined as nullable (\`CSSStyleSheet?\` in WebIDL) Announced initially for Chrome 124 beta by Amos Lim (Samsung / Chromium contributor) under the Blink fea...
- [appspot.com](https://cr-status.appspot.com/feature/5123480866783232?gate=5165701670371328) *(cr-status.appspot.com)*
  > When an \`@import\` rule has no associated stylesheet—most commonly when its conditional feature query (e.g., \`@import "fallback.css" supports(...)\`) evaluates to \`false\`—the property returns \`null\` rather than creating or...
- [chrome.com](https://developer.chrome.com/blog/chrome-124-beta) *(developer.chrome.com)*
  > Announced initially for Chrome 124 beta by Amos Lim (Samsung / Chromium contributor) under the Blink feature flag \`CSSImportRuleStyleSheetNullable\`
- [googlesource.com](https://chromium.googlesource.com/chromium/src.git/+/87ce3a663a2bc9d0086236fdc939909102383e0e) *(chromium.googlesource.com)*
  > Announced initially for Chrome 124 beta by Amos Lim (Samsung / Chromium contributor) under the Blink feature flag \`CSSImportRuleStyleSheetNullable\` \*\*Impact:\*\* Resolved long-standing inconsistencies where Chromium engine...
- [\[blink-dev\] Intent to Prototype: CSSImportRule.styleSheet](https://www.mail-archive.com/blink-dev@chromium.org/msg09382.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSSImportRule.styleSheet Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSSImportRule.styleSheet Euisang Lim Thu, 22 Feb 2024 08:06:53 -0800 Contact emails \[email&...
- [Re: \[blink-dev\] Intent to Ship: CSSImportRule.styleSheet](http://www.mail-archive.com/blink-dev@chromium.org/msg17912.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSSImportRule.styleSheet Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSSImportRule.styleSheet Mike Taylor Mon, 02 Nov 2026 13:05:14 -0800 LGTM3 On 11/2/26 5:47 a....

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: CSSImportRule.styleSheet](https://www.mail-archive.com/blink-dev@chromium.org/msg09382.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5123480866783232`)*
  > \[blink-dev\] Intent to Prototype: CSSImportRule.styleSheet Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSSImportRule.styleSheet Euisang Lim Thu, 22 Feb 2024 08:06:53 -0800 Contact emails \[email&...
- [Release merge\_pr\_43441 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/releases/tag/merge_pr_43441) *(github.com)* *(Cites: `https://chromestatus.com/feature/5123480866783232`)*
  > I2S: https://groups.google.com/a/chromium.org/g/blink-dev/c/ku3YsLTllY4 ChromeStatus: https://&lt;strong&gt;chromestatus.com/feature/5123480866783232&lt;/strong&gt;
- [Re: \[blink-dev\] Intent to Ship: CSSImportRule.styleSheet](http://www.mail-archive.com/blink-dev@chromium.org/msg17912.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5123480866783232`)*
  > Re: \[blink-dev\] Intent to Ship: CSSImportRule.styleSheet Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSSImportRule.styleSheet Mike Taylor Mon, 02 Nov 2026 13:05:14 -0800 LGTM3 On 11/2/26 5:47 a....
- [CSSImportRule.styleSheet: handle nullable return values · Issue #3171 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/3171) *(github.com · 2026-10-29T23:03:41)* *(Cites: `https://chromestatus.com/feature/5123480866783232`)*
  > CSSImportRule.styleSheet: handle nullable return values · Issue #3171 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in wit...
- [Re: \[blink-dev\] Intent to Ship: CSSImportRule.styleSheet](http://www.mail-archive.com/blink-dev@chromium.org/msg17953.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5123480866783232`)*
  > Re: \[blink-dev\] Intent to Ship: CSSImportRule.styleSheet Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSSImportRule.styleSheet \[email&#160;protected\] Fri, 06 Nov 2026 09:56:52 -0800 Thanks for th...

#### 📚 Platform Documentation & References

- [Allow CSSImportRule.styleSheet to be null · Issue #325 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/325) *(github.com)*
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2015/WD-css-cascade-4-20150421) *(w3.org)*
- [\[cssom-1\] \[css-cascade\] CSSImportRule.sheet not being null conflicts with @import supports() · Issue #8608 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/8608) *(github.com)*
- [CSSImportRule - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/CSSImportRule) *(developer.mozilla.org)*
- [Release merge\_pr\_43441 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/releases/tag/merge_pr_43441) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `import` on [wpt.fyi](https://wpt.fyi/results?q=feature:import) (via webstatus.dev) — stable: Chrome 97% · Edge 97% · Firefox 100% · Safari 97%; experimental: Chrome 100% · Edge 97% · Firefox 100% · Safari 97%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (66 found across 11 planned queries, 25 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (0 found, 0 verified) · `web-features mapping` *(group "import", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "import": Chrome 97% passing (stable))* · `Sources cited by the AI synthesis` (3 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 3

---

<a id="5109900936085504-offlineaudiocontext-incremental-rendering"></a>
### [OfflineAudioContext incremental rendering](https://chromestatus.com/feature/5109900936085504)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5109900936085504](https://chromestatus.com/feature/5109900936085504) · [chromestatuslite.com/feature/5109900936085504](https://chromestatuslite.com/feature/5109900936085504)
- **Specification:** [https://webaudio.github.io/web-audio-api/#dom-offlineaudiocontext-startrendering](https://webaudio.github.io/web-audio-api/#dom-offlineaudiocontext-startrendering)
- **Chromium Bug:** [https://issues.chromium.org/issues/530596178](https://issues.chromium.org/issues/530596178)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/offline-audio-context-incremental-rendering) (Chrome: `—`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`offline-audio-context-incremental-rendering`](https://webstatus.dev/features/offline-audio-context-incremental-rendering)*

#### 📝 Overview

This feature adds an incremental rendering mechanism to OfflineAudioContext so that the audio graph data can be incrementally processed rather than allocating the whole audio buffer up front. By incrementally delivering the data using data chunks, there is no need to have high memory requirements for the user's machine when processing high amounts of data.

> **Motivation:** The OfflineAudioContext API works well for rendering small audio graphs, but it does not scale for larger projects because it allocates the full graph's AudioBuffer up front. For example, rendering a 2-hour video composition project in clipchamp.com in an OfflineAudioContext would require an extremely large AudioBuffer allocation.   The implication...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 290 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** OfflineAudioContext incremental rendering addresses a longstanding memory bottleneck in the Web Audio API by enabling chunked audio graph rendering rather than forcing massive upfront AudioBuffer allocations. Championed collaboratively by Microsoft and Google, the capability ships enabled by default in Chrome 158 and is codified in the W3C Web Audio API specifications. The ecosystem outlook is promising, with Mozilla formally committed to implementation and WebKit review actively underway.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams maintaining browser-based audio export or DAW applications should integrate chunked rendering progressively, verifying support while retaining monolithic startRendering fallbacks for non-Chromium browsers. Profiling memory consumption in Chromium 158 or Canary against older rendering flows is recommended to validate stability gains on resource-constrained devices.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @padenot: "Mozilla position: \*\*positive\*\*. We plan to implement this. Bug: https://bugzilla.mozilla.org/show\_bug.cgi?id=2089657..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **10 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [OfflineAudioContext Incremental Rendering](https://github.com/WebKit/standards-positions/issues/724) [open] 
- **Mozilla:** [OfflineAudioContext Incremental Rendering](https://github.com/mozilla/standards-positions/issues/1456) [open] 
  > *Latest discussion from @padenot: "Mozilla position: \*\*positive\*\*. We plan to implement this. Bug: https://bugzilla.mozilla.org/show\_bug.cgi?id=2089657..."*
- **W3C TAG:** [Other Spec Review: OfflineAudioContext Incremental Rendering](https://github.com/w3ctag/design-reviews/issues/1282) [open] `Progress: untriaged`, `Review type: later review`

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2089657: Support incremental rendering in OfflineAudioContext](https://bugzilla.mozilla.org/show_bug.cgi?id=2089657) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5109900936085504/activity) *(chromestatus.com)*
  > \*\*Context Termination:\*\* Introduced \`OfflineAudioContext.prototype.close()\` to cleanly terminate rendering and release underlying audio resources \*\*Mozilla Standards Positions (#1456):\*\* Mozilla contributors actively par...
- [google.com](https://issuetracker.google.com/issues/571867211) *(issuetracker.google.com)*
  > \*\*Sources:\*\* \*Chrome Platform Status (Feature #5109900936085504)\*, \*Chromium Issue #530596178\*, and \*Microsoft Edge Web Platform Release Notes\* \*\*Milestone:\*\* Implemented by Microsoft and Google Blink/WebAudio engineers ...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/158) *(learn.microsoft.com)*
  > \*\*Sources:\*\* \*Chrome Platform Status (Feature #5109900936085504)\*, \*Chromium Issue #530596178\*, and \*Microsoft Edge Web Platform Release Notes\*
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Highlights:\*\* Officially documented as ready for stable rollout in Chromium-based browsers, highlighting the capability to stream data out of Web Audio with minimal RAM overhead
- [chromestatus.com](https://chromestatus.com/reports/external_reviews/tag) *(chromestatus.com)*
  > \*\*W3C TAG Review (#1282):\*\* Reviewed as a vital ergonomic and performance improvement for complex offline media workloads
- [chromestatus.com](https://chromestatus.com/reports/external_reviews/gecko) *(chromestatus.com)*
  > \*\*Mozilla Standards Positions (#1456):\*\* Mozilla contributors actively participated in refining the spec changes in the W3C Audio Working Group and supported the additive chunk-based rendering semantics

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17318.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109900936085504`)*
  > \[blink-dev\] Intent to Prototype: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: OfflineAudioContext incremental rendering Chromestatus Thu, 27 Aug 2026 14...
- [\[blink-dev\] Intent to Ship: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17760.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109900936085504`)*
  > \[blink-dev\] Intent to Ship: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: OfflineAudioContext incremental rendering Chromestatus Thu, 15 Oct 2026 16:46:46 -07...
- [\[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17775.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109900936085504`)*
  > \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering Alex Russell Mon, 19 Oct 2026 11:1...
- [Other Spec Review: · Issue #1282 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1282) *(github.com · 2026-09-24T02:01:32)* *(Cites: `https://chromestatus.com/feature/5109900936085504`)*
  > Status/issue trackers for implementations: https://&lt;strong&gt;chromestatus.com/feature/5109900936085504&lt;/strong&gt;
- [Re: \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17788.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109900936085504`)*
  > Re: \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering Mike Taylor Mon, 19 Oct 20...

#### 📚 Platform Documentation & References

- [Web Audio API 1.1](https://www.w3.org/TR/webaudio-1.1) *(w3.org)*
- [w3.org](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1246) *(tag-github-bot.w3.org)*
- [github.com](https://github.com/WebKit/standards-positions/issues/724) *(github.com)*
- [github.com](https://github.com/WebAudio/web-audio-api/issues/21) *(github.com)*
- [Other Spec Review: · Issue #1282 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1282) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [OfflineAudioContext incremental rendering Demo](https://gabrielsanbrito.github.io/demo_pages/oac-incremental-rendering)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 12 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 11 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (1 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

---

<a id="4860330806214656-webtransport-keying-material-export"></a>
### [WebTransport keying material export](https://chromestatus.com/feature/4860330806214656)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/4860330806214656](https://chromestatus.com/feature/4860330806214656) · [chromestatuslite.com/feature/4860330806214656](https://chromestatuslite.com/feature/4860330806214656)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransport-exportkeyingmaterial](https://www.w3.org/TR/webtransport/#dom-webtransport-exportkeyingmaterial)
- **Chromium Bug:** [https://issues.chromium.org/issues/556304550](https://issues.chromium.org/issues/556304550)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `In development`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

#### 📝 Overview

Adds WebTransport.exportKeyingMaterial(), which allows an application to derive cryptographic keying material bound to an established WebTransport session.  The method accepts application provided binary label and context values and a requested output length and returns a Promise&lt;Uint8Array&gt;. Chromium supports label and context values up to 255 bytes and output lengths from 1 through 4096 bytes.  For WebTransport over HTTP/3, Chromium includes the WebTransport CONNECT stream ID in the TLS exporter context. This ensures that separate WebTransport sessions derive different keying material even when they share the same underlying HTTP/3 connection.

> **Motivation:** Applications sometimes need cryptographic keying material bound to an authenticated transport session, for example to bind an application protocol, authentication exchange, or application-level encryption context to a WebTransport session without performing an additional key exchange.  TLS exporters derive application-specific secret material witho...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 290 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"github mozilla standards positions WebTransport exportKeyingMaterial"`, `"WebTransport exportKeyingMaterial"`, `"github WebKit standards positions WebTransport exportKeyingMaterial"`, `"github w3c webtransport exportKeyingMaterial"`
- **Analysis:** WebTransport.exportKeyingMaterial() standardizes session-bound cryptographic key derivation directly from the underlying TLS/QUIC connection, eliminating redundant secondary key exchanges for games and real-time streaming protocols. The API is specified in the W3C WebTransport Candidate Recommendation and shipping in Chromium, with HTTP/3 stream ID isolation baked into the exporter context to ensure multiplexed session safety. Cross-engine consensus is strong at the specification level, though implementation velocity currently varies across browser engines.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt the API using progressive enhancement by verifying if \`typeof transport.exportKeyingMaterial === 'function'\` on connected WebTransport instances before invoking it. Applications needing cross-browser reach across Safari today must maintain a fallback application-level handshake until WebKit implementation catches up.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **12 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2057363: \[wpt-sync\] Sync PR 61507 - \[WebTransport\] Add tests for WebTransport.exportKeyingMaterial](https://bugzilla.mozilla.org/show_bug.cgi?id=2057363) `[NEW]`
- **Mozilla (Gecko):** [Bug #2080606: New wpt failures in /webtransport/ \[export-keying-material.https.any.html, export-keying-material.https.any.serviceworker.html, export-keying-material.https.any.sharedworker.html, and 1 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2080606) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/4860330806214656) *(img968-dot-cr-status.appspot.com)*
  > \*\*\`WebTransport.exportKeyingMaterial()\`\*\* allows web applications to derive session-bound cryptographic keying material directly from an established WebTransport connection without conducting a separate, redundant crypto...
- [januschka.com](https://static.januschka.com/changelog/chromium/i2s/M158.html) *(static.januschka.com)*
  > \`outputLength\` \*(unsigned long)\*: Number of output bytes requested (1 through 4096 bytes) \*\*Return Value:\*\* Returns a \`Promise&lt;Uint8Array&gt;\` resolved with the derived pseudorandom bytes
- [chromium.org](https://issues.chromium.org/556304550) *(issues.chromium.org)*
  > \*\*HTTP/3 Stream Isolation:\*\* When WebTransport operates over HTTP/3, Chromium and standard implementations inject the WebTransport \`CONNECT\` stream ID into the underlying TLS exporter context The implementation details d...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Feature Tracking:\*\* Listed under \*\*Chrome Platform Status: WebTransport keying material export\*\* and targeted across Chrome releases (landing in Chrome M158)
- [web.dev](https://web.dev/blog/web-platform-09-2026) *(web.dev)*
  > \*\*Spec Alignment:\*\* Firefox originally introduced early support for \`exportKeyingMaterial()\` in Firefox 155
- [ietf.org](https://datatracker.ietf.org/meeting/123/materials/slides-123-webtrans-webtransport-slides-ietf-123-03) *(datatracker.ietf.org)*
  > \*\*Candidate Recommendation Updates:\*\* Updates from the W3C WebTransport specification repository and IETF 123 WEBTRANS working group notes document the alignment between W3C WebIDL definitions and RFC 5705 / RFC 8446 TLS...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17869.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Mike Taylor Tue, 27 Oct 2026 16:37:53 ...

#### 📚 Platform Documentation & References

- [exportKeyingMaterial: IDL marks context required, but the prose treats it as optional (and WebIDL then forces outputLength optional too) · Issue #774 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/774) *(github.com)*
- [WebTransport: exportKeyingMaterial() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/exportKeyingMaterial) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/155) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/160) *(developer.mozilla.org)*
- [WebTransport.exportKeyingMaterial(): editorial review fixes by hamishwillee · Pull Request #46336 · mdn/content · GitHub](https://github.com/mdn/content/pull/46336) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 13 planned queries, 16 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 11 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (3 found, 2 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 51.1% passing (stable))* · `Sources cited by the AI synthesis` (10 found, 7 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5112398709129216-prerendering-cross-origin-iframes"></a>
### [Prerendering cross-origin iframes](https://chromestatus.com/feature/5112398709129216)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5112398709129216](https://chromestatus.com/feature/5112398709129216) · [chromestatuslite.com/feature/5112398709129216](https://chromestatuslite.com/feature/5112398709129216)
- **Specification:** [https://wicg.github.io/nav-speculation/prerendering.html](https://wicg.github.io/nav-speculation/prerendering.html)
- **Chromium Bug:** [https://issues.chromium.org/issues/440387014](https://issues.chromium.org/issues/440387014)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/speculation-rules) (Chrome: `109`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`speculation-rules`](https://webstatus.dev/features/speculation-rules), shared with 15 other ChromeStatus features*

#### 📝 Overview

Prerenders cross-origin iframes with an opt-in response header.    Browsers will now prerender all cross-origin frames if the top-level frame's HTTP response includes the Supports-Loading-Mode: prerender-cross-origin-frames.

> **Motivation:** By default, navigational prerendering delays the loading of all cross-origin iframes until the referring page activates the prerendered page.  However, there are some cases where cross-origin iframes are particularly important to an application, such that delaying them negates many of the benefits of prerendering.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 285 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The Prerendering Cross-Origin Iframes capability allows top-level pages to opt into speculative loading of cross-origin subframes during prerender via the 'Supports-Loading-Mode: prerender-cross-origin-frames' HTTP response header. It solves a noticeable performance gap in the Speculation Rules prerendering pipeline where delayed loading of essential embedded content—such as payment forms, maps, or interactive widgets—undermined the perceived instantaneous navigation. While Chromium-based browsers have driven its development and rollout, broader cross-engine consensus remains pending.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams already adopting the Speculation Rules API should treat this header as a safe, low-risk progressive enhancement: emit 'Supports-Loading-Mode: prerender-cross-origin-frames' on responses where essential third-party embeds must be interactive at activation. Unsupported browsers and devices experiencing battery or data constraints will gracefully ignore or defer the frame loads without regressions.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (W3C TAG): Latest discussion from @yoichio: "Still in discussion, but we lean to allow the nesting with some restriction. Roughly: - Allow if the nested iframe's origin is same to parent frame - ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **5 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Prerendering cross-origin iframes](https://github.com/WebKit/standards-positions/issues/636) [open] 
- **Mozilla:** [Prerendering cross-origin iframes](https://github.com/mozilla/standards-positions/issues/1376) [open] 
- **W3C TAG:** [Incubation: Prerendering cross-origin iframes](https://github.com/w3ctag/design-reviews/issues/1207) [closed] `Resolution: satisfied`, `Review type: CG early review`, `Venue: WICG`, `Topic: privacy`, `Missing: Multi-stakeholder support`
  > *Latest discussion from @yoichio: "Still in discussion, but we lean to allow the nesting with some restriction. Roughly: - Allow if the nested iframe's origin is same to parent frame - ..."*

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/release-notes/147) *(developer.chrome.com)*
  > \*\*Sources:\*\* \*Chrome Platform Status\*, \*Chrome 147 Release Notes\*, and \*Chromium Issue #440387014\* (authored by Yoichi Osato and Hiroki Nakagawa) The release notes emphasize that the header gives site owners fine-grained...
- [Supports-Loading-Mode - Expert Guide to HTTP headers](https://http.dev/supports-loading-mode) *(http.dev)*
  > MDN documents \`Supports-Loading-Mode\` as an HTTP response header that uses Structured Fields token lists to let servers opt into higher-risk or novel browsing environments (such as \`fenced-frame\` and \`credentialed-preren...
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/2f16ed2883fde6320c3e8c5631c26f82b8cecb28) *(chromium.googlesource.com)*
  > \*\*Nested Subframe Consensus:\*\* In the W3C TAG discussion and Chromium commit reviews (\`kPrerender2CrossOriginIframesNesting\`), an important design boundary was established: \*\*inheritance is not automatic down deep trees\*...
- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM/m/q_EQ5ceXHgAJ) *(groups.google.com)*
  > Intent to Prototype: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototy...
- [Intent to Experiment: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyGHPL8Z6IY) *(groups.google.com)*
  > Intent to Experiment: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experi...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17949.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Yoichi Osato Thu, 05 Nov 2026 19:40:17 -0800 FYI: ...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM/m/q_EQ5ceXHgAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Intent to Prototype: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototy...
- [Intent to Experiment: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyGHPL8Z6IY) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Intent to Experiment: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experi...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17949.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Yoichi Osato Thu, 05 Nov 2026 19:40:17 -0800 FYI: ...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17843.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Yoichi Osato Wed, 21 Oct 2026 18:53:10 -0700 &gt; Thi...
- [Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17867.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Mike Taylor Tue, 27 Oct 2026 16:35:53 -070...

#### 📚 Platform Documentation & References

- [w3.org](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1207) *(tag-github-bot.w3.org)*
- [github.com](https://github.com/WebKit/standards-positions/issues/636) *(github.com)*
- [github.com](https://github.com/mozilla/standards-positions/issues/1376) *(github.com)*
- [Prerendering cross-origin iframes · Issue #34 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/34) *(github.com)*
- [Incubation: Prerendering cross-origin iframes · Issue #1207 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1207) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `speculation-rules` on [wpt.fyi](https://wpt.fyi/results?q=feature:speculation-rules) (via webstatus.dev) — stable: Chrome 76.4% · Edge 93.3% · Firefox 0% · Safari 13.6%; experimental: Chrome 76.2% · Edge 93.9% · Firefox 32.2% · Safari 27.2%

#### 🌐 Web-features Group Context

*group-level data: web-features [`speculation-rules`](https://webstatus.dev/features/speculation-rules), shared with 15 other ChromeStatus features*

- **Chrome usage:** 0.13% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/317))
- **Mozilla:** neutral ([standards position](https://github.com/mozilla/standards-positions/issues/620)) · concerns: `complexity`

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (64 found across 12 planned queries, 19 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "speculation-rules", shared with 15 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "speculation-rules": Chrome 76.4% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

---

<a id="5174965228929024-css-custom-highlight-universal-selector-highlight"></a>
### [CSS Custom Highlight Universal Selector ::highlight(\*)](https://chromestatus.com/feature/5174965228929024)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5174965228929024](https://chromestatus.com/feature/5174965228929024) · [chromestatuslite.com/feature/5174965228929024](https://chromestatuslite.com/feature/5174965228929024)
- **Specification:** [https://drafts.csswg.org/css-pseudo-4/#selectordef-highlight-highlight-name-selector](https://drafts.csswg.org/css-pseudo-4/#selectordef-highlight-highlight-name-selector)
- **Chromium Bug:** [https://issues.chromium.org/issues/408003366](https://issues.chromium.org/issues/408003366)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `Support`

#### 📝 Overview

Introduces a universal selector for custom highlights, ::highlight(\*), which matches the highlight pseudo-elements of all custom highlights regardless of their name.   The \* argument contributes zero specificity, so its declarations act as a base style that rules naming a specific highlight override through the cascade.

> **Motivation:** Styling shared properties across custom highlights requires repeating the same declarations for every registered name. The CSSWG resolved to allow ::highlight(\*).

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 230 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"CSS Custom Highlight Universal Selector highlight *"`
- **Analysis:** The CSS Custom Highlight Universal Selector \`::highlight(\*)\` provides a zero-specificity catch-all selector to apply base styling across all registered custom highlights without repetitive declarations \[dee7cd61902698ca\]. Standardized under CSS Pseudo-Elements Module Level 4, the feature enjoys unanimous engine consensus and active rollouts across Chromium, WebKit, and Gecko \[dee7cd61902698ca\]. Developers and advocates perceive it as an essential ergonomic upgrade that completes the CSS Custom Highlight API \[dee7cd61902698ca\].

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams working with the CSS Custom Highlight API should adopt \`::highlight(\*)\` as their foundational baseline style, but isolate it in separate CSS rule blocks or gate it behind \`@supports selector(::highlight(\*))\` to prevent legacy engines from invalidating grouped selectors. Continue targeting specific highlight names for intentional overrides, relying on the wildcard's zero specificity to manage inheritance cleanly \[dee7cd61902698ca\].
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @nt1m: "This is implemented in WebKit: https://github.com/WebKit/WebKit/commit/5ed89fc0abf85e2613cd16c9c16ac66c6d64e17d..."
- Standards Activity (Mozilla): Latest discussion from @jnjaeschke: "Agreeing with @emilio, I think this is reasonable...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Custom Highlight Universal Selector ::highlight(\*)](https://github.com/WebKit/standards-positions/issues/728) [closed] `position: support`
  > *Latest discussion from @nt1m: "This is implemented in WebKit: https://github.com/WebKit/WebKit/commit/5ed89fc0abf85e2613cd16c9c16ac66c6d64e17d..."*
- **Mozilla:** [CSS Custom Highlight Universal Selector ::highlight(\*)](https://github.com/mozilla/standards-positions/issues/1460) [closed] `venue: W3C`, `position: positive`, `topic: CSS`
  > *Latest discussion from @jnjaeschke: "Agreeing with @emilio, I think this is reasonable...."*

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5174965228929024) *(img968-dot-cr-status.appspot.com)*
  > \*\*The Problem:\*\* Previously, when using the CSS Custom Highlight API (\`CSS.highlights\`), developers had to write repetitive CSS selectors for every custom highlight name registered in JavaScript (e.g., \`::highlight(searc...
- [chromium.org](https://issues.chromium.org/408003366) *(issues.chromium.org)*
  > \*\*The Solution:\*\* \`::highlight(\*)\` acts as a catch-all wildcard selector matching all custom highlight pseudo-elements regardless of identifier \*\*Cascade & Specificity:\*\* Similar to the element universal selector \`\*\`, th...
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/8555f62ca21d1042182db4843e3f322d8213771a) *(chromium.googlesource.com)*
  > \*\*ChromeStatus Feature Entry (5174965228929024):\*\* Led by Blink engineer Seokho Song and reviewed by Rune Lillesveen, Chromium added support for parsing the \`\*\` delimiter within \`::highlight()\`
- [bsky.app](https://bsky.app/profile/bram.us/post/3mycbq47ep22g) *(bsky.app)*
  > \*\*Chrome DevRel & Socials (e.g., Bramus Van Damme):\*\* Highlighted as a major quality-of-life win for styling workflows
- [Custom Highlight Universal Selector ::highlight(\*) \| daily.dev](https://daily.dev/posts/custom-highlight-universal-selector-highlight--f416uv98z) *(daily.dev)*
  > \*\*Developer Community Aggregators (e.g., daily.dev, modern CSS digests):\*\* Welcomed the change as the "missing piece" of the Custom Highlight API
- [\[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17171.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*) Chrome...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17171.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > \[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS Custom Highlight Universal Selector ::highlight(\*) Chrome...
- [\[css-highlight-1\]\[css-pseudo-4\] Add ::highlight(\*) by DevSDK · Pull Request #14301 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/pull/14301) *(github.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > \[css-highlight-1\]\[css-pseudo-4\] Add ::highlight(\*) by DevSDK · Pull Request #14301 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with anoth...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17797.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) ...
- [\[pull\] master from web-platform-tests:master by pull\[bot\] · Pull Request #1312 · MarcelRaschke/wpt · GitHub](https://github.com/MarcelRaschke/wpt/pull/1312) *(github.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > \[1\] w3c/csswg-drafts#9091 Spec PR: w3c/csswg-drafts#14301 Intent to Prototype: https://groups.google.com/a/chromium.org/g/blink-dev/c/hEy4cr4iowU/m/ZW5l\_bikAwAJ Feature Entry: https://&lt;strong&gt;chromestatus.com/feature/517...
- [\[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*)](http://www.mail-archive.com/blink-dev@chromium.org/msg17730.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5174965228929024`)*
  > \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS Custom Highlight Universal Selector ::highlight(\*) Alex Rus...

#### 📚 Platform Documentation & References

- [CSS Custom Highlight Universal Selector ::highlight(\*) · Issue #728 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/728) *(github.com)*
- [\[css-highlight-1\]\[css-pseudo-4\] Add ::highlight(\*) by DevSDK · Pull Request #14301 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/pull/14301) *(github.com)*
- [\[pull\] master from web-platform-tests:master by pull\[bot\] · Pull Request #1312 · MarcelRaschke/wpt · GitHub](https://github.com/MarcelRaschke/wpt/pull/1312) *(github.com)*
- [CSS Custom Highlight Universal Selector ::highlight(\*) · Issue #1460 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1460) *(github.com)*
- [csswg-drafts/css-pseudo-4/Overview.bs at main · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/blob/main/css-pseudo-4/Overview.bs) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 11 planned queries, 16 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 6 verified) · `Twitter / X API v2` *(found 7 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (1 found, 0 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 4

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

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 225 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"w3ctag design reviews SVG textPath side attribute"`, `"SVG textPath side attribute"`, `"textPath side attribute Chrome Safari Firefox"`
- **Analysis:** The SVG textPath side attribute completes a long-awaited SVG 2 capability that eliminates the need to manually duplicate and invert path geometries for circular text, stamps, and radial gauges. While Firefox has supported the visual rendering behavior since Firefox 61, recent implementations in WebKit (Safari Technology Preview) and Chromium bring true cross-engine interoperability to modern browsers. The W3C TAG closed its design review as satisfied, validating the left/right geometric alignment model for vector typography.

**Key Recommendations & Takeaways:**
- Actionable Advice: Developers can immediately adopt side="right" for modern browser targeting, but should retain progressive fallbacks—such as secondary inverted paths—for applications requiring legacy Chromium and Safari support. Verifying textPath DOM reflection (via SVGTextPathElement.side) in JavaScript serves as a clean feature detection hook.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (W3C TAG): Latest discussion from @jyasskin: "Thanks for sending this. I'm always twitchy on internationalization grounds when I see "right" or "left", but I think it's correct in this case. We ha..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **W3C TAG:** [FYI: SVG textPath side attribute](https://github.com/w3ctag/design-reviews/issues/1279) [closed] `Resolution: satisfied`
  > *Latest discussion from @jyasskin: "Thanks for sending this. I'm always twitchy on internationalization grounds when I see "right" or "left", but I think it's correct in this case. We ha..."*

#### 📰 Ecosystem Blogs & Articles

- [d3.js - How to set \`side: right\` of \`textPath\` in Chrome? - Stack Overflow](https://stackoverflow.com/questions/57949804/how-to-set-side-right-of-textpath-in-chrome) *(stackoverflow.com)*
  > Historically, placing text around common graphics like badges, coins, radial meters, or circular stamps required hacky workarounds If you wanted text along the top of a circle and along the bottom facing right-side up, y...
- [web.dev](https://web.dev/blog/web-platform-04-2026) *(web.dev)*
  > Positioned alongside the inline \`&lt;textPath path="..."&gt;\` attribute (which lets authors define path data directly on the element rather than through an external \`href\`) to modernize SVG text rendering pipelines Firefox has...
- [webdevbriefing.com](https://www.webdevbriefing.com/new-features-in-safari-tp-255) *(webdevbriefing.com)*
  > \*\*Coverage\*\*: WebKit Pull Request (\`#66616\`) and developer briefing coverage for \*\*Safari Technology Preview (TP 255)\*\* Apple’s WebKit team closed the long-standing implementation gap for \`\[SVG2\] Implement the side attri...
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5422782593761280) *(img968-dot-cr-status.appspot.com)*
  > \*\*Coverage\*\*: WebKit Pull Request (\`#66616\`) and developer briefing coverage for \*\*Safari Technology Preview (TP 255)\*\* Apple’s WebKit team closed the long-standing implementation gap for \`\[SVG2\] Implement the side attri...
- [\[blink-dev\] Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17486.html) *(mail-archive.com)*
  > Blink component Blink&gt;SVG Web Feature ID svg-textPath-side Motivation Authors placing text along a path have no way to flip which side of the path the text appears on. The side attribute &lt;strong&gt;lets authors write sid...
- [\[blink-dev\] Re: Intent to Ship: SVG textPath side attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17508.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; \*Blink component\* &gt;&gt; Blink&gt;SVG ... the &gt;&gt; path the text appears on. The side attribute &lt;strong&gt;lets authors write &gt;&gt; side=&quot;right&quot; to place text on the opposite side of the...

#### 🔗 Inbound Citations & Reverse Links

- [\`&lt;textPath side="…"&gt;\` SVG attribute · Issue #4478 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4478) *(github.com · 2026-10-07T12:27:05)* *(Cites: `https://chromestatus.com/feature/5422782593761280`)*
  > \`&lt;textPath side="…"&gt;\` SVG attribute · Issue #4478 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Rel...
- [\`side\` and \`path\` attributes on textPath are missing on the IDL · Issue #1086 · w3c/svgwg · GitHub](https://github.com/w3c/svgwg/issues/1086) *(github.com · 2026-04-07T03:16:55)* *(Cites: `https://w3c.github.io/svgwg/svg2-draft/text.html#TextPathElementSideAttribute`)*
  > \`side\` and \`path\` attributes on textPath are missing on the IDL · Issue #1086 · w3c/svgwg · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or wi...
- [\[svgwg\] Issue: \`side\` and \`path\` attributes on textPath are missing on the IDL (#1086) marked as Agenda+ from Karl Dubost via GitHub on 2026-04-07 (public-svg-issues@w3.org from April 2026)](https://lists.w3.org/Archives/Public/public-svg-issues/2026Apr/0019.html) *(lists.w3.org)* *(Cites: `https://w3c.github.io/svgwg/svg2-draft/text.html#TextPathElementSideAttribute`)*
  > @viralipurbey added some better testcase coverage on WPT. https://&lt;strong&gt;w3c.github.io/svgwg/svg2-draft/text.html&lt;/strong&gt;#InterfaceSVGTextPathElement The IDL has \`\`\` \[SameObject\] readonly attribute SVGAnimatedLength st...

#### 📚 Platform Documentation & References

- [FYI: SVG textPath side attribute · Issue #1279 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1279) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/side) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/SVGTextPathElement/side) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/issues/44162) *(github.com)*
- [\`&lt;textPath side="…"&gt;\` SVG attribute · Issue #4478 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4478) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (51 found across 10 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (5 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (5 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 1

---

<a id="5144333908049920-background-layer-count-independence-"></a>
### [Background layer count independence ](https://chromestatus.com/feature/5144333908049920)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5144333908049920](https://chromestatus.com/feature/5144333908049920) · [chromestatuslite.com/feature/5144333908049920](https://chromestatuslite.com/feature/5144333908049920)
- **Specification:** [https://drafts.csswg.org/css-values-4/#linked-properties](https://drafts.csswg.org/css-values-4/#linked-properties)
- **Chromium Bug:** [https://issues.chromium.org/issues/40855581](https://issues.chromium.org/issues/40855581)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/background) (Chrome: `1`, Firefox: `3.6`, Safari: `1.3`) · *group-level data: web-features [`background`](https://webstatus.dev/features/background)*

#### 📝 Overview

Makes the computed value of the background-\* longhands keep the number of comma-separated values the author specified, instead of repeating or truncating it to the background-image layer count. Repeating and truncating are used-value behavior: "The computed values of the coordinating list properties are not affected by such truncation or repetition." This feature implements the behavior defined in the https://drafts.csswg.org/css-values-4/ Appendix A.

> **Motivation:** The behavior defined in the "Appendix A: Coordinating List-Valued Properties" of the CSS Values And Units L4 specification has been discussed recently and agreed that it should stand. This makes Chrome the only browser diverging in the specified behavior.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 220 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""40855581" chromium background"`, `""Background layer count independence" css"`, `""Background layer count independence" blink-dev"`
- **Analysis:** Scheduled to be enabled by default in Chrome 159, 'Background layer count independence' aligns Chromium's CSS engine with Appendix A of the CSS Values and Units Module Level 4 specification. The update ensures that computed values for background longhand properties preserve the author-specified list of comma-separated values rather than prematurely truncating or repeating them to match the background-image layer count. By shifting list adjustment to the used-value phase, Chromium eliminates a longstanding interoperability divergence and establishes parity across all major rendering engines.

**Key Recommendations & Takeaways:**
- Actionable Advice: No polyfill or defensive code changes are necessary, as rendering behavior remains unchanged. However, teams that inspect background longhands via getComputedStyle() or CSSOM in JavaScript test suites should audit their assertions to ensure tests do not rely on Chromium's legacy truncated or duplicated string outputs.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **21 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/feature/5144333908049920?gate=4988223456673792) *(cr-status.appspot.com)*
  > \*\*"Background layer count independence"\*\* is a CSS specification alignment feature implementing the behavior defined in \*\*\[CSS Values and Units Module Level 4, Appendix A: Coordinating List-Valued Properties\](https://dra...
- [appspot.com](https://img592-dot-cr-status.appspot.com/feature/5144333908049920) *(img592-dot-cr-status.appspot.com)*
  > If an author specified fewer values (e.g., 2 sizes for 3 images), Blink internally repeated the list in the computed style; if the author specified more, Blink truncated it \*\*The Fix:\*\* Background layer count independenc...
- [chromestatus.com](https://chromestatus.com/release-notes/159) *(chromestatus.com)*
  > \*\*Status:\*\* Slated to be enabled by default (tracked via Chromium Issue \[#40855581\](https://issues.chromium.org/issues/40855581) \*\*Status:\*\* Slated to be enabled by default (tracked via Chromium Issue \[#40855581\](https:/...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Status:\*\* Slated to be enabled by default (tracked via Chromium Issue \[#40855581\](https://issues.chromium.org/issues/40855581) and Chrome Release channels including Chrome 159)
- [bsky.app](https://bsky.app/profile/intenttoship.dev/post/3muodp5njg22h) *(bsky.app)*
  > Tracked via the \*\*Blink-dev\*\* mailing list (\`Intent to Prototype / Prepare to Ship\`) and automated trackers (such as \`@intenttoship\`)
- [appspot.com](https://cr-status.appspot.com/feature/5144333908049920/activity) *(cr-status.appspot.com)*
  > Because this change aligns Chromium’s internal pipeline with the longstanding W3C specification without altering the CSS syntax itself, Chromium contributors noted that no major rewrite of public-facing web documentation...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17853.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5144333908049920`)*
  > \[blink-dev\] Intent to Ship: Background layer count independence Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Background layer count independence Chromestatus Mon, 26 Oct 2026 14:56:27 -0700 Contact e...
- [\[blink-dev\] Re: Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17865.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5144333908049920`)*
  > \[blink-dev\] Re: Intent to Ship: Background layer count independence Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Background layer count independence Alex Russell Tue, 27 Oct 2026 12:08:31 -0700 L...
- [\[blink-dev\] Intent to Prototype: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17365.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5144333908049920`)*
  > \[blink-dev\] Intent to Prototype: Background layer count independence Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Background layer count independence Chromestatus Fri, 04 Sep 2026 03:09:07 -0700...
- [Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17877.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5144333908049920`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Chris Harrelson Tue, 27 Oct 2026 22:23...
- [Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence](http://www.mail-archive.com/blink-dev@chromium.org/msg17892.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5144333908049920`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Background layer count independence Philip Jägenstedt Wed, 28 Oct 2026 10:...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/Supporters-Of-Chromium-Based-Browsers/Reporting/blob/main/Interoperability.md) *(github.com)*
- [Weekly hardening: close the 10-feature coverage gap, fix 3 broken demos, critique batch by PaulKinlan · Pull Request #25 · PaulKinlan/chrome-platform-showcase · GitHub](https://github.com/PaulKinlan/chrome-platform-showcase/pull/25) *(github.com)*
- [\[css-values\]\[css-backgrounds\]\[css-animations\]\[css-transitions\]\[fill-stroke\] How to handle linked list-valued properties? · Issue #7164 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/7164) *(github.com)*
- [\[CSSWG\] Minutes A Coruña F2F 2020-01-22 Part III: Backgrounds and Borders, CSS Align & CSS Tables, CSS Cascade, Summer F2F, SVG Paths \[css-backgrounds\] \[css-align\] \[css-tables\] \[css-cascade\] from Dael Jackson on 2020-02-13 (www-style@w3.org from February 2020)](https://lists.w3.org/Archives/Public/www-style/2020Feb/0009.html) *(lists.w3.org)*
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2024/WD-css-values-4-20240312) *(w3.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `background` on [wpt.fyi](https://wpt.fyi/results?q=feature:background) (via webstatus.dev) — stable: Chrome 98.8% · Edge 98.1% · Firefox 98.8% · Safari 91.4%; experimental: Chrome 99.4% · Edge 98.1% · Firefox 98.8% · Safari 91.4%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 11 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 7 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "background", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "background": Chrome 98.8% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5187917373898752-regular-expression-buffer-boundaries"></a>
### [Regular Expression Buffer Boundaries](https://chromestatus.com/feature/5187917373898752)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5187917373898752](https://chromestatus.com/feature/5187917373898752) · [chromestatuslite.com/feature/5187917373898752](https://chromestatuslite.com/feature/5187917373898752)
- **Specification:** [https://tc39.es/proposal-regexp-buffer-boundaries](https://tc39.es/proposal-regexp-buffer-boundaries)
- **Chromium Bug:** [https://g-issues.chromium.org/issues/517575874](https://g-issues.chromium.org/issues/517575874)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `No signal`

#### 📝 Overview

A TC39 proposal introducing \`\\A\`, \`\\z\` and \`\\Z\` character escapes to Unicode-mode regular expressions as synonyms for \`(?-m:^)\`, \`(?-m:$)\` and \`(?=(?:\\r\\n\|\\n\|\\r\|\\u2028\|\\u2029)?(?-m:$))\`, respectively.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 210 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** The Regular Expression Buffer Boundaries proposal brings JavaScript into parity with engines like PCRE, Python, and Ruby by introducing the \`\\A\`, \`\\z\`, and \`\\Z\` assertions to Unicode-mode regular expressions. It provides a standardized, ergonomic way to assert the absolute start and end of an entire input buffer regardless of whether the multiline (\`m\`) flag is active. Engine alignment is solidifying quickly, with Chromium scheduling enablement for Chrome 159, Firefox shipping support in SpiderMonkey, and WebKit introducing implementation in Safari Technology Preview.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams should avoid shipping raw \`\\A\`, \`\\z\`, or \`\\Z\` patterns directly to untranspiled production code until multi-engine Baseline availability matures, as unsupported engines will throw syntax errors in Unicode mode. Teams targeting modern runtimes can experiment via flags and preview builds, while production multiline validation should rely on established build-step regex transforms or fallback grouping constructs.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **19 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2047702: \[meta\] Regular Expression Buffer Boundaries](https://bugzilla.mozilla.org/show_bug.cgi?id=2047702) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://chromestatus.com/feature/5187917373898752?gate=6115713719861248) *(chromestatus.com)*
  > Chrome Platform Status
- [itnext.io](https://itnext.io/engine-inside-engine-how-javascript-really-executes-regular-expressions-23fcd6f6aa6b) *(itnext.io)*
  > \`\\A\`, \`\\z\`, and \`\\Z\` bring JavaScript into parity with engines like PCRE, Python, Ruby, and Java \*\*Coverage:\*\* This in-depth architectural breakdown explores how Irregexp (V8), YARR (WebKit), and SpiderMonkey handle rege...
- [webkit.org](https://webkit.org/blog/18194/release-notes-for-safari-technology-preview-251) *(webkit.org)*
  > \*\*Release:\*\* Safari Technology Preview 251 Release Notes \*\*Details:\*\* WebKit officially announced early support for the RegExp Buffer Boundaries proposal in JavaScriptCore
- [caniuse.com](https://caniuse.com/mdn-javascript_regular_expressions_buffer_boundary_assertion) *(caniuse.com)*
  > This milestone represented one of the first major engine implementations landing in preview builds
- [nodejs.org](https://nodejs.org/en/blog/announcements/notable-v8-changes-from-node-js-26-to-27-alpha) *(nodejs.org)*
  > \*\*Source:\*\* Chrome Status (\*Feature: Regular Expression Buffer Boundaries\*) and Node.js/V8 tracker logs
- [maysanlabs.com](https://maysanlabs.com/blog/node-js-27-0-0-alpha-0-0-0-what-the-alpha-actually-changes) *(maysanlabs.com)*
  > \*\*Source:\*\* Chrome Status (\*Feature: Regular Expression Buffer Boundaries\*) and Node.js/V8 tracker logs \*\*Details:\*\* Implemented in V8’s Irregexp engine behind the flag \`--js-regexp-buffer-boundaries\` and scheduled for s...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Regular Expression Buffer Boundaries](http://www.mail-archive.com/blink-dev@chromium.org/msg17969.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5187917373898752`)*
  > \[blink-dev\] Intent to Ship: Regular Expression Buffer Boundaries Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Regular Expression Buffer Boundaries Chromestatus Mon, 09 Nov 2026 10:31:06 -0800 Contact...
- [\[dev-platform\] Intent to prototype and ship: Regular Expression Buffer Boundaries](http://www.mail-archive.com/dev-platform@mozilla.org/msg01913.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-regexp-buffer-boundaries`)*
  > \[dev-platform\] Intent to prototype and ship: Regular Expression Buffer Boundaries Skip to site navigation (Press enter) \[dev-platform\] Intent to prototype and ship: Regular Expression Buffer Boundaries 'Daniel Minor' via...
- [Support buffer boundaries by JLHwung · Pull Request #166 · jviereck/regjsparser · GitHub](https://github.com/jviereck/regjsparser/pull/166) *(github.com)* *(Cites: `https://tc39.es/proposal-regexp-buffer-boundaries`)*
  > Support buffer boundaries by JLHwung · Pull Request #166 · jviereck/regjsparser · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...

#### 📚 Platform Documentation & References

- [Buffer boundary assertion: \\A, \\z, \\Z - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) *(developer.mozilla.org)*
- [Regular expression syntax cheat sheet - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet) *(developer.mozilla.org)*
- [mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=2059792) *(bugzilla.mozilla.org)*
- [mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=2047706) *(bugzilla.mozilla.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 12 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 11 verified) · `Twitter / X API v2` *(found 3 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (1 found, 1 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5079784523694080-shared-messageport-for-audioworklet"></a>
### [Shared MessagePort for AudioWorklet](https://chromestatus.com/feature/5079784523694080)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5079784523694080](https://chromestatus.com/feature/5079784523694080) · [chromestatuslite.com/feature/5079784523694080](https://chromestatuslite.com/feature/5079784523694080)
- **Specification:** [https://webaudio.github.io/web-audio-api/#dom-audioworklet-port](https://webaudio.github.io/web-audio-api/#dom-audioworklet-port)
- **Chromium Bug:** [https://issues.chromium.org/issues/446920095](https://issues.chromium.org/issues/446920095)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `No signal`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/audio-worklet) (Chrome: `66`, Firefox: `76`, Safari: `14.1`) · *group-level data: web-features [`audio-worklet`](https://webstatus.dev/features/audio-worklet), shared with 3 other ChromeStatus features*

#### 📝 Overview

Exposes a shared MessagePort on AudioWorklet and AudioWorkletGlobalScope. This lets web applications communicate directly between the main thread AudioWorklet and the AudioWorkletGlobalScope without creating a bootstrap AudioWorkletProcessor only for message passing.

> **Motivation:** The Web Audio specification defines a shared MessagePort on AudioWorklet and AudioWorkletGlobalScope. This lets web applications communicate directly between the main thread and the AudioWorkletGlobalScope without creating a bootstrap AudioWorkletProcessor or AudioWorkletNode only for message passing.  Without this capability, developers have to ke...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 205 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** Shared MessagePort for AudioWorklet closes a long-standing ergonomic gap in the Web Audio API by establishing direct bidirectional communication between the main thread and the worklet global execution context via audioContext.audioWorklet.port and AudioWorkletGlobalScope.port. Having originally landed in Firefox 138 and now enabled by default in Chrome 159, the feature eliminates the necessity of creating dummy bootstrap processors solely for passing initialization data, WebAssembly binaries, or SharedArrayBuffer instances. The ecosystem consensus is firmly positive as browser engines align with the formal Web Audio specification.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building Web Audio applications should begin adopting the port-based setup for cleaner startup choreography, but must feature-detect 'port' in audioContext.audioWorklet and maintain a fallback dummy-processor bootstrap for Safari until WebKit's implementation ships.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @MaheshBharadwaj: "CC: @hoch @jyavenard  @youennf..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **17 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Shared MessagePort for AudioWorklet](https://github.com/WebKit/standards-positions/issues/739) [open] 
  > *Latest discussion from @MaheshBharadwaj: "CC: @hoch @jyavenard  @youennf..."*

#### 📰 Ecosystem Blogs & Articles

- [google.com](https://groups.google.com/a/chromium.org/g/blink-dev/c/2aAm_se1VXI) *(groups.google.com)*
  > Developers who needed to pass startup configurations, WebAssembly modules, or \`SharedArrayBuffer\` references to the worklet scope had to build a temporary "bootstrap" or "dummy" processor strictly for initial message pas...
- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5079784523694080?gate=5773264841474048) *(img544-dot-cr-status.appspot.com)*
  > \*\*Source:\*\* \*Chrome Platform Status & Chrome 159 Release Notes\*
- [chromestatus.com](https://chromestatus.com/release-notes/159) *(chromestatus.com)*
  > \*\*Source:\*\* \*Chrome Platform Status & Chrome 159 Release Notes\* \*\*Summary:\*\* Chromium added and enabled by default the \*\*"Shared MessagePort for AudioWorklet"\*\* feature (tracked in Chromium Bug #446920095)
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Summary:\*\* Chromium added and enabled by default the \*\*"Shared MessagePort for AudioWorklet"\*\* feature (tracked in Chromium Bug #446920095)
- [lavoscore.org](https://mdn-20220731.lavoscore.org) *(mdn-20220731.lavoscore.org)*
  > \*\*Source:\*\* \*MDN Web APIs Reference\* \*\*Summary:\*\* MDN updated documentation for \`AudioWorkletGlobalScope\` and \`AudioWorklet\` to cover the \`port\` read-only properties
- [google.com](https://issuetracker.google.com/40210558) *(issuetracker.google.com)*
  > Toolchain maintainers and audio developers welcomed this standardization, as runtime environments can now detect \`audioWorklet.port\` and post Wasm modules or pointers directly into the scope on initialization, streamlini...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Shared AudioWorklet port](http://www.mail-archive.com/blink-dev@chromium.org/msg16227.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5079784523694080`)*
  > \[blink-dev\] Intent to Prototype: Shared AudioWorklet port Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Shared AudioWorklet port Chromestatus Tue, 31 Mar 2026 21:46:16 -0700 Contact emails \[email...
- [\[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet](http://www.mail-archive.com/blink-dev@chromium.org/msg17960.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5079784523694080`)*
  > \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Chromestatus Sun, 08 Nov 2026 14:14:07 -0800 Contact e...
- [Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet](http://www.mail-archive.com/blink-dev@chromium.org/msg17941.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5079784523694080`)*
  > Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet 'Mahesh Kannan' via blink-dev Wed, 04 Nov 2026...
- [Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet](http://www.mail-archive.com/blink-dev@chromium.org/msg17925.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5079784523694080`)*
  > Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Philip Jägenstedt Wed, 04 Nov 2026 08:22:59 -0...
- [Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet](http://www.mail-archive.com/blink-dev@chromium.org/msg17942.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-audio-api/issues/2456`)*
  > Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Chris Harrelson Wed, 04 Nov 2026 15:39:50 -080...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/138) *(developer.mozilla.org)*
- [AudioWorkletGlobalScope: port - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletGlobalScope/port) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/de/docs/Web/API/AudioWorkletGlobalScope/port) *(developer.mozilla.org)*
- [github.com](https://github.com/WebAudio/web-audio-api/issues/2658) *(github.com)*
- [AudioWorklet: port - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet/port) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `audio-worklet` on [wpt.fyi](https://wpt.fyi/results?q=feature:audio-worklet) (via webstatus.dev) — stable: Chrome 90.2% · Edge 90.2% · Firefox 73.2% · Safari 78%; experimental: Chrome 97.6% · Edge 95.1% · Firefox 73.2% · Safari 85.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`audio-worklet`](https://webstatus.dev/features/audio-worklet), shared with 3 other ChromeStatus features*

- **Chrome usage:** 0.0011% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/152))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (63 found across 13 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 10 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (1 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "audio-worklet", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "audio-worklet": Chrome 90.2% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 1

---

<a id="5086608215900160-scroll-snap-for-single-axis-scroll-containers"></a>
### [Scroll snap for single-axis scroll containers](https://chromestatus.com/feature/5086608215900160)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5086608215900160](https://chromestatus.com/feature/5086608215900160) · [chromestatuslite.com/feature/5086608215900160](https://chromestatuslite.com/feature/5086608215900160)
- **Specification:** [https://drafts.csswg.org/css-scroll-snap-1](https://drafts.csswg.org/css-scroll-snap-1)
- **Chromium Bug:** [http://crbug.com/473576119](http://crbug.com/473576119)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/scroll-snap) (Chrome: `69`, Firefox: `68`, Safari: `11`) · *group-level data: web-features [`scroll-snap`](https://webstatus.dev/features/scroll-snap), shared with 4 other ChromeStatus features*

#### 📝 Overview

This feature lets a single-axis scroll container (for example, one with overflow: auto clip) handle scroll snap area propagation and alignment separately for each axis.  Single-axis scroll containers are now supported (https://chromestatus.com/feature/5067363861004288). Without this feature, such a container captures a snap area on both axes, even the axis it can't scroll. The snap area then can't align on that axis.  With this feature, if a snap area sets alignment on both axes, the single-axis container handles only the axis it scrolls. The other axis goes up to the nearest ancestor scroll container that scrolls in that direction.

> **Motivation:** This is part of the single-axis scroll container feature (https://github.com/explainers-by-googlers/single-axis-scroll-containers) to align the scroll snap behavior with the sticky header in a single-axis scroll container.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 180 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Scroll snap for single-axis scroll containers addresses a long-standing limitation where single-axis scrollers (such as containers with overflow: auto clip) inadvertently swallowed snap points along their non-scrollable axis. By propagating orthogonal snap alignment upward to ancestor scroll containers, the specification aligns snapping behavior with sticky positioning. Chromium is shipping this by default in Chrome 159, while standards discussion at the CSS Working Group and cross-engine consensus remain generally supportive but still emerging in implementations.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should evaluate this feature as an enhancement and test single-axis scrollers against nested scroll snapping, but avoid relying on orthogonal snap propagation for mission-critical UX until Safari and Firefox land matching support. Maintain explicit, single-axis snap declarations (such as targeting only inline or block axes) where fallback behavior across non-supporting browsers is needed.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @hiikezoe: "Looks basically reasonable to me.    That's said, it seems that the spec change hasn't yet clarified mixed up writing mode cases. From a sentence of t..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **9 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/712) [open] `topic: css`, `venue: W3C CSS WG`
- **Mozilla:** [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1445) [open] `topic: CSS`
  > *Latest discussion from @hiikezoe: "Looks basically reasonable to me.    That's said, it seems that the spec change hasn't yet clarified mixed up writing mode cases. From a sentence of t..."*

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img664-dot-cr-status.appspot.com/release-notes/159) *(img664-dot-cr-status.appspot.com)*
  > \*\*Chrome Beta & Release Notes:\*\* Included in the release notes for \*\*Chrome 158 and 159\*\* The release documentation notes that single-axis scroll containers (\`overflow: auto clip\`) now separate snap area propagation per ...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug...
- [Chrome Release 158](https://chromestatuslite.com/?version=158) *(chromestatuslite.com)*
  > With this feature, &lt;strong&gt;if a snap area sets alignment on both axes, the single-axis container handles only the axis it scrolls&lt;/strong&gt;. The other axis goes up to the nearest ancestor scroll container that scrolls in ...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17200.html) *(mail-archive.com)*
  > &gt;&gt; \*No information provided\* &gt;&gt; &gt;&gt; \*Link to entry on the Chrome Platform Status\* &gt;&gt; https://chromestatus.com/feature/5067363861004288?gate=6477880110481408 &gt;&gt; &gt;&gt; \*Links to previous Int...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17220.html) *(mail-archive.com)*
  > &gt;&gt;&gt; \*No information provided\* &gt;&gt;&gt; &gt;&gt;&gt; \*Link to entry on the Chrome Platform Status\* &gt;&gt;&gt; https://chromestatus.com/feature/5067363861004288?gate=6477880110481408 &gt;&gt;&gt; &gt;&gt;&gt...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; \*No information provided\* &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Link to entry on the Chrome Platform Status\* &gt;&gt;&gt;&gt; https://chromestatus.com/feature/5067363861004288?gate=6477880110481408 &gt;&gt;...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5086608215900160`)*
  > \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/w3c/csswg-drafts/blob/main/css-conditional-5/Overview.bs) *(github.com)*
- [Other Spec Review: Scroll snap for single-axis scroll container · Issue #1266 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1266) *(github.com)*
- [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers · Issue #1445 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1445) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/680) *(github.com)*
- [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers #14018 by lcdavid94 · Pull Request #14354 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/pull/14354) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `scroll-snap` on [wpt.fyi](https://wpt.fyi/results?q=feature:scroll-snap) (via webstatus.dev) — stable: Chrome 89.9% · Edge 88.3% · Firefox 83.2% · Safari 70.4%; experimental: Chrome 97.2% · Edge 95% · Firefox 83.2% · Safari 75.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`scroll-snap`](https://webstatus.dev/features/scroll-snap), shared with 4 other ChromeStatus features*

- **Chrome usage:** 0.22% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/59))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 12 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 5 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "scroll-snap", shared with 4 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "scroll-snap": Chrome 89.9% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 2

---

<a id="5094379441225728-server-side-gemini-powered-scam-checks-for-desktop"></a>
### [Server Side Gemini Powered Scam Checks for Desktop](https://chromestatus.com/feature/5094379441225728)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5094379441225728](https://chromestatus.com/feature/5094379441225728) · [chromestatuslite.com/feature/5094379441225728](https://chromestatuslite.com/feature/5094379441225728)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

We are expanding server side Gemini powered scam checks from just Android to desktop as well. This replaces the desktop on device model powered checks previously used.These checks are only for users enrolled in Enhanced Safe Browsing. Enterprises can control enrollment for their organization through the existing SafeBrowsingProtectionLevel policy. Chrome minimizes the amount of data shared with the server by only analyzing page text when a site exhibits high-confidence scam indicators. And whenever page content is sent off the device, it is processed ephemerally – meaning it is never logged, retained or used to train models.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 180 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Server Side Gemini Powered Scam Checks for Desktop is a proprietary Chromium browser-level security defense shipping enabled by default for Enhanced Safe Browsing users in Chrome 155, transitioning desktop protections from local on-device models to server-side Gemini inference. Because it operates strictly as an internal browser heuristic against social engineering threats—such as ClickFix attacks, fake update alerts, and deceptive antivirus prompts—it is not tracked as a standardized Web Platform API. Engine consensus is effectively absent, as competing vendors like Apple and Mozilla maintain distinct anti-phishing pipelines centered around privacy-preserving localized lookups rather than sending page text off-device.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web developers do not need to implement polyfills or code against any new APIs, as this feature operates transparently within the browser client. Engineering teams maintaining developer portals and command-line copyable snippets (such as curl-to-bash install scripts) should ensure their UI patterns and copy flows do not mimic deceptive ClickFix prompts to prevent inadvertent heuristic flagging.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **16 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome adds ClickFix warnings and Gemini scam checks](https://www.bitdefender.com/en-us/blog/hotforsecurity/chrome-gemini-scam-detection-clickfix-warnings) *(bitdefender.com)*
  > Chrome adds ClickFix warnings and Gemini scam checks Company Blog Login For Home For Business For Partners Industry News 2 min read Chrome adds ClickFix alerts as Gemini scam checks expand Vlad CONSTANTINESCU October 22,...
- [Chrome Gemini Scam Blocker: ClickFix Defenses \[2026\]](https://shattered.io/chrome-gemini-scam-protection-enhanced-protection-clickfix-2026) *(shattered.io)*
  > Chrome Gemini Scam Blocker: ClickFix Defenses \[2026\] SHA TERED &#9776; Chrome Adds Gemini Scam Shield, 10x Safer Claim \[2026\] Priya Anand Updated Oct 25, 2026 &middot; 19 min read Google is putting more AI to work inside...
- [securityweek.com](https://www.securityweek.com/google-hardens-chrome-against-clickfix-attacks-insecure-http-connections) *(securityweek.com)*
  > \*\*Target Threats:\*\* Expanded beyond tech-support scams to combat fake antivirus prompts, deceptive browser-update pages, and ClickFix social engineering attacks \*\*Focus Areas:\*\* Enterprise readiness, developer impacts, a...
- [Our latest defenses against evolving web scams](https://blog.google/security/our-latest-defenses-against-evolving-web-scams) *(blog.google)*
  > Our latest defenses against evolving web scams Chrome Security Our latest defenses against evolving web scams Oct 20, 2026 \| x.com Facebook LinkedIn Mail Copy link Jasika Bawa Group Product Manager, Chrome Share x.com Fa...
- [Google Chrome Deploys Gemini‑Powered Scam Detection to Block ClickFix Attacks — Verisq™](https://www.verisq.ai/intelligence/google-chrome-adds-gemini-powered-scam-detection-warns-users-of-clickfix-attacks-71209) *(verisq.ai)*
  > Google Chrome Deploys Gemini‑Powered Scam Detection to Block ClickFix Attacks — Verisq™ Live High Attackers Searching for SAP Netweaver Webshells, (Mon, Nov 9th) High Attackers Crash Claude&#39;s &#39;Office Party&#39; F...
- [Google Chrome adds Gemini-powered scam detection, warns users of ClickFix attacks](https://www.bleepingcomputer.com/news/google/google-chrome-adds-gemini-powered-scam-detection-warns-users-of-clickfix-attacks) *(bleepingcomputer.com)*
  > \*\*ClickFix Protections:\*\* Developer publications emphasize the inclusion of clipboard scanning alongside server-side Gemini checks If a user copies a suspicious shell command (e.g., malicious PowerShell scripts pushed by...

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (61 found across 10 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 8 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (3 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ○ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5120203192139776-webtransport-connection-statistics"></a>
### [WebTransport connection statistics](https://chromestatus.com/feature/5120203192139776)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5120203192139776](https://chromestatus.com/feature/5120203192139776) · [chromestatuslite.com/feature/5120203192139776](https://chromestatuslite.com/feature/5120203192139776)
- **Specification:** [https://w3c.github.io/webtransport/#dictdef-webtransportconnectionstats](https://w3c.github.io/webtransport/#dictdef-webtransportconnectionstats)
- **Chromium Bug:** [https://issues.chromium.org/issues/573538454](https://issues.chromium.org/issues/573538454)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

#### 📝 Overview

WebTransport.getStats() provides asynchronous statistics for an existing connection: round-trip time measurements when available, an estimated sending rate when available, and counts of expired, lost, and dropped datagrams. Statistics remain accessible after the connection closes. Chromium does not currently expose connection byte or packet totals.

> **Motivation:** WebTransport applications need to distinguish connection latency, congestion, and datagram loss or expiration from application-side delays. A single asynchronous call exposes a snapshot of the existing connection's health to help developers adapt sending behavior and troubleshoot problems. It does not create a connection or change how application d...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 155 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebTransport connection statistics" chrome status"`, `""WebTransport.getStats" chrome firefox safari"`, `""WebTransport" "getStats""`, `"w3c webtransport getstats stats dictionary minRtt smoothedRtt"`
- **Analysis:** The WebTransport connection statistics API (WebTransport.getStats()) delivers essential transport-level observability, allowing web applications to asynchronously query round-trip times (RTT), datagram drop/loss rates, and estimated send rates over QUIC connections. Chromium's rollout by default alongside implementations in Firefox and Safari establishes strong cross-engine consensus across the major browser vendors. It directly unlocks client-side telemetry and adaptation for high-performance use cases such as Media over QUIC (MoQ), cloud gaming, and live audio/video streaming.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building real-time applications can safely begin integrating WebTransport.getStats() for diagnostic logging and dynamic sending rate adjustments. Because optional dictionary properties vary between browser releases and Chromium does not yet expose raw connection byte totals, developers should access individual fields defensively using optional chaining.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [webrtc-developers.com](https://www.webrtc-developers.com/talking-to-an-ai-agent-over-webtransport) *(webrtc-developers.com)*
  > \*\*Latency & RTT:\*\* Minimum RTT (\`minRtt\`), smoothed RTT (\`smoothedRtt\`), and RTT variation (\`rttVariation\`) \*\*Bandwidth & Rate Estimation:\*\* Estimated sending rate (\`estimatedSendRate\`)
- [web.dev](https://web.dev/blog/web-platform-10-2026) *(web.dev)*
  > \*\*"New to the Web Platform" Roundups:\*\* Highlights recent rollouts where browser engines aligned on WebTransport capabilities, noting Firefox’s addition of \`getStats()\` alongside \`supportsReliableOnly\`, matching Chromium...
- [reddit.com](https://www.reddit.com/r/webdev/comments/1ssu3bs/webtransport_is_now_baseline_as_of_march_2026) *(reddit.com)*
  > \*\*Real-Time Congestion Control:\*\* In community discussions (such as \*r/webdev\* and the IETF WebTransport Working Group), real-time app developers praise \`getStats()\` for finally allowing browser clients to implement adap...
- [programming-helper.com](https://www.programming-helper.com/tech/webtransport-2026-web-api-multiplexed-transport-revolution) *(programming-helper.com)*
  > \*\*Real-Time Congestion Control:\*\* In community discussions (such as \*r/webdev\* and the IETF WebTransport Working Group), real-time app developers praise \`getStats()\` for finally allowing browser clients to implement adap...
- [ietf.org](https://datatracker.ietf.org/meeting/123/materials/slides-123-webtrans-webtransport-slides-ietf-123-00.pdf) *(datatracker.ietf.org)*
  > \*\*Real-Time Congestion Control:\*\* In community discussions (such as \*r/webdev\* and the IETF WebTransport Working Group), real-time app developers praise \`getStats()\` for finally allowing browser clients to implement adap...
- [\[blink-dev\] Intent to Ship: WebTransport connection statistics](http://www.mail-archive.com/blink-dev@chromium.org/msg17966.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport connection statistics Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport connection statistics Chromestatus Sun, 08 Nov 2026 14:51:55 -0800 Contact ema...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: WebTransport connection statistics](http://www.mail-archive.com/blink-dev@chromium.org/msg17966.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5120203192139776`)*
  > \[blink-dev\] Intent to Ship: WebTransport connection statistics Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport connection statistics Chromestatus Sun, 08 Nov 2026 14:51:55 -0800 Contact ema...
- [RE: \[blink-dev\] Intent to Ship: WebTransport connection statistics](http://www.mail-archive.com/blink-dev@chromium.org/msg17946.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5120203192139776`)*
  > RE: \[blink-dev\] Intent to Ship: WebTransport connection statistics Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: WebTransport connection statistics 'Daniel Clark' via blink-dev Thu, 05 Nov 2026 11...

#### 📚 Platform Documentation & References

- [content/files/en-us/web/api/webtransport/getstats/index.md at main · mdn/content · GitHub](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransport/getstats/index.md?plain=1) *(github.com)*
- [github.com](https://github.com/MicrosoftEdge/Demos/blob/main/README.md) *(github.com)*
- [fix(net): PROBE reports the downlink; Safari's stub getStats() reads as absent by kixelated · Pull Request #8016 · moq-dev/moq · GitHub](https://github.com/moq-dev/moq/pull/8016) *(github.com)*
- [translated-content-de/files/de/web/api/webtransport/getstats/index.md at main · mdn/translated-content-de · GitHub](https://github.com/mdn/translated-content-de/blob/main/files/de/web/api/webtransport/getstats/index.md?plain=1) *(github.com)*
- [getStats members might disappear between calls · Issue #808 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/808) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [WebTransport connection statistics Demo](https://github.com/MicrosoftEdge/Demos/tree/main/webtransport-getstats)
- [WebTransport connection statistics Demo](https://microsoftedge.github.io/Demos/webtransport-getstats)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (63 found across 12 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 51.1% passing (stable))* · `Sources cited by the AI synthesis` (1 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5089961022980096-webtransport-anticipated-concurrent-incoming-streams"></a>
### [WebTransport anticipated concurrent incoming streams](https://chromestatus.com/feature/5089961022980096)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5089961022980096](https://chromestatus.com/feature/5089961022980096) · [chromestatuslite.com/feature/5089961022980096](https://chromestatuslite.com/feature/5089961022980096)
- **Specification:** [https://w3c.github.io/webtransport/#web-transport-configuration](https://w3c.github.io/webtransport/#web-transport-configuration)
- **Chromium Bug:** [https://issues.chromium.org/issues/565837025](https://issues.chromium.org/issues/565837025)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

#### 📝 Overview

Allows WebTransport applications to indicate how many incoming streams they expect to have open at once. Constructor hints configure the initial QUIC stream allowance, reducing the risk that a server that needs high stream concurrency is blocked by the initial stream limit.

> **Motivation:** Some WebTransport applications expect a server to open many streams at once. If the initial QUIC stream allowance is too low, the server must wait for more stream credit before opening additional streams, adding avoidable latency or limiting the number of open streams. Constructor hints let the application state its expected stream count when creat...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 150 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebTransport anticipated concurrent incoming streams""`, `""anticipatedConcurrentIncoming" webtransport"`, `""anticipatedConcurrentIncomingBidirectionalStreams""`
- **Analysis:** WebTransport anticipated concurrent incoming streams resolves a key initial handshake bottleneck for real-time applications by allowing clients to advertise higher initial QUIC stream allowances via constructor parameters. Standardized in the W3C WebTransport specification, the feature provides native ergonomics for server-push intensive protocols and is enabled by default in Chromium and Microsoft Edge 158. Cross-engine consensus is robust, establishing this hint as standard practice for preventing transport-level stalls on high-throughput connections.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams designing server-initiated stream architectures should adopt 'anticipatedConcurrentIncomingUnidirectionalStreams' and 'anticipatedConcurrentIncomingBidirectionalStreams' immediately as a zero-risk progressive enhancement, as non-supporting browsers silently ignore unknown dictionary options. Ensure configured values are set meaningfully above the specification-mandated floor of 100 streams to realize startup latency benefits.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2076568: New wpt failures in /webtransport/ \[anticipated-concurrent-incoming-streams.https.any.worker.html, anticipated-concurrent-incoming-streams.https.any.serviceworker.html, anticipated-concurrent-incoming-streams.https.any.sharedworker.html, and 1 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2076568) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [google.com](https://issuetracker.google.com/issues/551879993) *(issuetracker.google.com)*
  > \*\*WebTransport anticipated concurrent incoming streams\*\* introduces constructor options—specifically \`anticipatedConcurrentIncomingUnidirectionalStreams\` and \`anticipatedConcurrentIncomingBidirectionalStreams\`—allowing c...
- [appspot.com](https://chromiumdash.appspot.com/commit/481ba88527ad7688a19e05e9e9f08210e6730ef7) *(chromiumdash.appspot.com)*
  > Under QUIC, the receiver sets an initial stream concurrency allowance (by default at least 100 streams of each type) Values below 100 do not reduce concurrency below the specification's mandatory minimum
- [chromestatus.com](https://chromestatus.com/feature/5089961022980096/activity) *(chromestatus.com)*
  > When that happens, the server is forced to wait for the client to process streams and advertise additional stream credit via QUIC \`MAX\_STREAMS\` frames By passing hints in the \`WebTransport\` constructor, browsers can adve...
- [googleusercontent.com](https://doc-1jrg-48u0-issuetracker.googleusercontent.com/issues/565837025) *(doc-1jrg-48u0-issuetracker.googleusercontent.com)*
  > \*\*Chromium Commits\*\*: Chromium engineers implemented the runtime feature flag (\`WebTransportAnticipatedConcurrentIncomingStreams\`) along with logic to clamp constructor inputs to the specification-mandated floor of 100 s...
- [wpt.fyi](https://wpt.fyi/results/webtransport/anticipated-concurrent-incoming-streams.https.any.sharedworker.html?run_id=5089110539894784&run_id=5168953713491968&diff=) *(wpt.fyi)*
  > \*\*Web Platform Tests (WPT)\*\*: Test suites were added to \`wpt.fyi\` (e.g., \`webtransport/anticipated-concurrent-incoming-streams.https.any.js\`) to verify behavior across worker threads and main contexts across engines
- [wpt.fyi](https://wpt.fyi/results/webtransport/anticipated-concurrent-incoming-streams.https.any.serviceworker.html?run_id=5194407249969152&run_id=4902746892533760&diff=) *(wpt.fyi)*
  > \*\*Web Platform Tests (WPT)\*\*: Test suites were added to \`wpt.fyi\` (e.g., \`webtransport/anticipated-concurrent-incoming-streams.https.any.js\`) to verify behavior across worker threads and main contexts across engines

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: WebTransport anticipated concurrent incoming streams](http://www.mail-archive.com/blink-dev@chromium.org/msg17806.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5089961022980096`)*
  > \[blink-dev\] Intent to Ship: WebTransport anticipated concurrent incoming streams Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport anticipated concurrent incoming streams Chromestatus Tue, 20...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams](http://www.mail-archive.com/blink-dev@chromium.org/msg17827.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/issues/544`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams Dani...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams](http://www.mail-archive.com/blink-dev@chromium.org/msg17828.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/issues/544`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams Alex...
- [\[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams](http://www.mail-archive.com/blink-dev@chromium.org/msg17825.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/issues/544`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams Yoav Weiss (...

#### 📚 Platform Documentation & References

- [WebTransport](https://www.w3.org/TR/webtransport) *(w3.org)*
- [webtransport/index.bs at main · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/blob/main/index.bs) *(github.com)*
- [WebTransport: anticipatedConcurrentIncoming\*Streams properties and options by hamishwillee · Pull Request #46334 · mdn/content · GitHub](https://github.com/mdn/content/pull/46334) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (43 found across 12 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (2 found, 1 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 51.1% passing (stable))* · `Sources cited by the AI synthesis` (6 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 145 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Source-Specific Multicast (SSM) brings RFC 8815-compliant, hardware-filtered multicast networking to Chromium's Direct Sockets API in Chrome 158, specifically targeting Isolated Web Apps (IWAs). While the capability unlocks high-throughput streaming, IPTV, and IoT telemetry without the denial-of-service risks of Any-Source Multicast (ASM), it remains entirely isolated to Chromium's managed application ecosystem. Browser consensus outside Chromium is nonexistent, as competing engine vendors maintain firm opposition to exposing raw transport sockets to web technologies.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building enterprise or kiosk applications within Isolated Web Apps should adopt SSM via the optional sourceAddress parameter to improve network efficiency and mitigate packet spoofing. For general consumer web applications, developers should avoid relying on Direct Sockets and instead design around standard transport protocols such as WebTransport or WebRTC.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/docs/iwa/direct-sockets) *(developer.chrome.com)*
  > \*\*Source-Specific Multicast (SSM)\*\* enhances the \*\*Direct Sockets API\*\* for \*\*Isolated Web Apps (IWAs)\*\* \*\*Source:\*\* \*Chrome for Developers Documentation\*
- [\[blink-dev\] Intent to Prototype: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg15334.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Source Specific Multicast for Direct Sockets API Chromestatus Mon, ...
- [Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](https://groups.google.com/a/chromium.org/g/blink-dev/c/vMmLZVd7rQI) *(groups.google.com · 2026-02-21T00:00:00)*
  > Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#x...
- [\[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg15911.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Ch...
- [\[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17733.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Chromestatus Wed, 14 Oct 202...
- [\[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17744.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API 'Omar Ramadan' via blink-dev...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg15334.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6208452397498368`)*
  > \[blink-dev\] Intent to Prototype: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Source Specific Multicast for Direct Sockets API Chromestatus Mon, ...
- [Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](https://groups.google.com/a/chromium.org/g/blink-dev/c/vMmLZVd7rQI) *(groups.google.com · 2026-02-21T00:00:00)* *(Cites: `https://chromestatus.com/feature/6208452397498368`)*
  > Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#x...
- [\[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg15911.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6208452397498368`)*
  > \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Ch...
- [\[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17733.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Chromestatus Wed, 14 Oct 202...
- [\[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17744.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API 'Omar Ramadan' via blink-dev...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/WICG/direct-sockets/issues/80) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Source Specific Multicast for Direct Sockets API Demo](https://blockcast.network/live)
- [Source Specific Multicast for Direct Sockets API Demo](https://chromewebstore.google.com/detail/multicast-gateway-beacon/djikmiecejmojgcglkfmihhkfgekjlaj)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (40 found across 12 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (7 found, 2 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Tweets found by web search` (1 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5158277221580800-webtransporterror-api-alignment-and-serialization"></a>
### [WebTransportError API alignment and serialization](https://chromestatus.com/feature/5158277221580800)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5158277221580800](https://chromestatus.com/feature/5158277221580800) · [chromestatuslite.com/feature/5158277221580800](https://chromestatuslite.com/feature/5158277221580800)
- **Specification:** [https://www.w3.org/TR/webtransport/#web-transport-error-interface](https://www.w3.org/TR/webtransport/#web-transport-error-interface)
- **Chromium Bug:** [https://issues.chromium.org/issues/577073049](https://issues.chromium.org/issues/577073049)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

#### 📝 Overview

Updates Chromium WebTransportError to match the current WebTransport specification. Adds the standard (message, options) constructor while preserving the shipped dictionary constructor for compatibility; carries the full unsigned-long stream error code end to end; and makes WebTransportError structured-clonable while preserving its message, source, and nullable error code. Serialization is enabled by default behind a writer-side runtime kill switch, while decoding remains permanently enabled for persisted values.

> **Motivation:** Chromium's shipped WebTransportError implementation predates the current WebTransport specification.  It accepts a legacy dictionary-only constructor, narrows outgoing application stream error codes to 8 bits despite the API exposing an unsigned long, and does not support the structured serialization required by the specification.  The change align...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 145 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** Chromium's alignment of WebTransportError with the W3C specification resolves long-standing interoperability gaps by introducing the standard (message, options) constructor, propagating full 32-bit unsigned long stream error codes end-to-end, and adding native structured serialization support. This eliminates frequent DataCloneError exceptions when passing errors across Web Worker boundaries or persisting them in IndexedDB. Cross-browser engine consensus is firmly aligned behind the standard, completing a major interop milestone for low-latency networking on the web.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams can transition to the standardized new WebTransportError(message, options) constructor syntax and safely post error objects across Web Workers using structuredClone() or postMessage(). However, if supporting legacy Chromium builds, retain fallback property extraction or defensive worker messaging to prevent DataCloneError exceptions on unpatched clients.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/release-notes/159) *(chromestatus.com)*
  > \*\*"WebTransportError API alignment and serialization"\*\* is an interoperability update in Chromium (tracked under \*\*Issue 577073049\*\* and shipping in \*\*Chrome 159\*\*) \*\*Source:\*\* \*Chrome Platform Status\* / \*Chrome 159 Rele...
- [chromestatus.com](https://chromestatus.com/feature/5158277221580800?gate=6109543305183232) *(chromestatus.com)*
  > Chromium’s original WebTransport implementation predated the finalized W3C specification \*\*Constructor Standard Alignment:\*\* Introduces the standard \`new WebTransportError(message, options)\` constructor while preserving ...
- [appspot.com](https://img168-dot-cr-status.appspot.com/feature/5158277221580800) *(img168-dot-cr-status.appspot.com)*
  > Browser engines (Gecko/Firefox via Bug 2009530 and WebKit/Safari via Bug 305224) have aligned their implementations with the standard constructor and serialization behaviors
- [deno.com](https://docs.deno.com/api/web/platform) *(docs.deno.com)*
  > \*\*Key Takeaway:\*\* Developers using \`structuredClone(error)\` or storing errors in IndexedDB no longer encounter \`DataCloneError\` exceptions when handling \`WebTransportError\` instances
- [\[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization](http://www.mail-archive.com/blink-dev@chromium.org/msg17934.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization Daniel Bratell Wed...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization](http://www.mail-archive.com/blink-dev@chromium.org/msg17951.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization Daniel Bra...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization](http://www.mail-archive.com/blink-dev@chromium.org/msg17934.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5158277221580800`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization Daniel Bratell Wed...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization](http://www.mail-archive.com/blink-dev@chromium.org/msg17951.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5158277221580800`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransportError API alignment and serialization Daniel Bra...
- [WebTransportError API alignment and serialization · Issue #49 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/49) *(github.com · 2026-11-02T08:06:38)* *(Cites: `https://chromestatus.com/feature/5158277221580800`)*
  > WebTransportError API alignment and serialization · Issue #49 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab...
- [\[blink-dev\] Intent to Ship: WebTransportError API alignment and serialization](http://www.mail-archive.com/blink-dev@chromium.org/msg17922.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Ship: WebTransportError API alignment and serialization Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransportError API alignment and serialization Chromestatus Tue, 03 Nov 2...

#### 📚 Platform Documentation & References

- [WebTransport](https://www.w3.org/TR/2023/WD-webtransport-20230712) *(w3.org)*
- [The structured clone algorithm - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) *(developer.mozilla.org)*
- [WebTransportError API alignment and serialization · Issue #49 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/49) *(github.com)*
- [WebTransport/Meetings - W3C Wiki](https://www.w3.org/wiki/WebTransport/Meetings) *(w3.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 13 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 51.1% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5188639100370944-mediasession-return-promiseundefined-from-setmicrophoneactive-and-setcameraactive"></a>
### [MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](https://chromestatus.com/feature/5188639100370944)

- **Milestone:** Chrome 159 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5188639100370944](https://chromestatus.com/feature/5188639100370944) · [chromestatuslite.com/feature/5188639100370944](https://chromestatuslite.com/feature/5188639100370944)
- **Specification:** [https://w3c.github.io/mediasession/#dom-mediasession-setmicrophoneactive](https://w3c.github.io/mediasession/#dom-mediasession-setmicrophoneactive)
- **Chromium Bug:** [https://crbug.com/576328036](https://crbug.com/576328036)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/media-session) (Chrome: `73`, Firefox: `82`, Safari: `15`) · *group-level data: web-features [`media-session`](https://webstatus.dev/features/media-session), shared with 11 other ChromeStatus features*

#### 📝 Overview

Updates navigator.mediaSession.setMicrophoneActive() and navigator.mediaSession.setCameraActive() to return a Promise&lt;undefined&gt; instead of undefined, matching the W3C Media Session specification. In a fully active document, the returned promise resolves with undefined; if the associated document is not fully active, it returns a promise rejected with an InvalidStateError DOMException.

> **Motivation:** When MediaSession.setMicrophoneActive() and MediaSession.setCameraActive() were originally specified and shipped in Chrome 93, their WebIDL return type was void (undefined). The W3C Media Session specification was subsequently updated (https://github.com/w3c/mediasession/pull/312) so that both methods return Promise&lt;undefined&gt; to support user agent...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 130 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"site:github.com/mozilla/standards-positions "setMicrophoneActive" OR "mediasession""`, `""MediaSession" "setMicrophoneActive" "setCameraActive" promise"`
- **Analysis:** Chromium's update to make navigator.mediaSession.setMicrophoneActive() and setCameraActive() return Promise&lt;undefined&gt; resolves an implementation discrepancy dating back to Chrome 93, aligning Blink directly with the W3C Media Session specification. The change enables user agents to execute asynchronous capture-pause policies or user verification prompts before settling, and guarantees an InvalidStateError rejection when called on documents that are not fully active. This refinement closes failing Web Platform Tests harness tests and unifies promise-based media controls across modern web engines.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams can immediately modernize their call-control code by awaiting setMicrophoneActive() and setCameraActive(), since awaiting a previously undefined return value is backward-compatible in older browser engines. Teams should also implement try/catch error handling around these methods to anticipate and handle InvalidStateError exceptions thrown when calling methods on inactive or backgrounded documents.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @jan-ivar: "We're interested in implementing this in \[bug 1874041\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1874041). We've also proposed it for Interop 2027 ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **9 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **Mozilla:** [Add video conferencing actions to the Media Session API spec](https://github.com/mozilla/standards-positions/issues/504) [closed] `venue: W3C`, `position: positive`, `topic: API`, `team: Media`
  > *Latest discussion from @jan-ivar: "We're interested in implementing this in \[bug 1874041\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1874041). We've also proposed it for Interop 2027 ..."*

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5188639100370944/activity) *(chromestatus.com)*
  > The Web Platform update changes the return type of \`navigator.mediaSession.setMicrophoneActive()\` and \`navigator.mediaSession.setCameraActive()\` from \`undefined\` to \*\*\`Promise&lt;undefined&gt;\`\*\* \*\*Active Documents:\*\* In a ful...
- [chromium.org](https://issues.chromium.org/issues/576328036/resources) *(issues.chromium.org)*
  > This change resolves a discrepancy that existed since Chrome 93 (when the methods were initially implemented with a void/undefined return type) to align with \*\*W3C Media Session Specification PR #312\*\*
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Status Entry:\*\* \[MediaSession: Return Promise\\&lt;undefined\\&gt; from setMicrophoneActive() and setCameraActive()\](https://chromestatus.com/feature/576328036) (targeted for Chrome 159)
- [Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](http://www.mail-archive.com/blink-dev@chromium.org/msg17927.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraActive() Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMic...
- [\[blink-dev\] Intent to Ship: MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](http://www.mail-archive.com/blink-dev@chromium.org/msg17906.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraActive() Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneA...
- [Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](http://www.mail-archive.com/blink-dev@chromium.org/msg17958.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraActive() Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMic...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](http://www.mail-archive.com/blink-dev@chromium.org/msg17927.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5188639100370944`)*
  > Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraActive() Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMic...
- [\[blink-dev\] Intent to Ship: MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](http://www.mail-archive.com/blink-dev@chromium.org/msg17906.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5188639100370944`)*
  > \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraActive() Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneA...
- [Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](http://www.mail-archive.com/blink-dev@chromium.org/msg17958.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5188639100370944`)*
  > Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraActive() Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMic...
- [Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](http://www.mail-archive.com/blink-dev@chromium.org/msg17917.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5188639100370944`)*
  > Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraActive() Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMic...

#### 📚 Platform Documentation & References

- [Media Session](https://www.w3.org/TR/mediasession) *(w3.org)*
- [Media Session](https://www.w3.org/TR/2024/WD-mediasession-20240215) *(w3.org)*
- [Media Session](https://www.w3.org/TR/2025/WD-mediasession-20250821) *(w3.org)*

#### 🧪 Interactive Demos & Samples

- [MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive() Demo](https://developer.mozilla.org/en-US/docs/Web/API/MediaSession/setMicrophoneActive)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `media-session` on [wpt.fyi](https://wpt.fyi/results?q=feature:media-session) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 44.4% · Safari 44.4%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 44.4% · Safari 44.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`media-session`](https://webstatus.dev/features/media-session), shared with 11 other ChromeStatus features*

- **Chrome usage:** 0.031% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/48))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/28))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (30 found across 12 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (7 found, 4 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (0 found, 0 verified) · `web-features mapping` *(group "media-session", shared with 11 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "media-session": Chrome 66.7% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 2

---

<a id="5754395122860032-deprecate-and-stop-firing-events-during-subframe-removal"></a>
### [Deprecate and stop firing events during subframe removal](https://chromestatus.com/feature/5754395122860032)

- **Milestone:** Chrome 156 (Origin trial)
- **ChromeStatus:** [chromestatus.com/feature/5754395122860032](https://chromestatus.com/feature/5754395122860032) · [chromestatuslite.com/feature/5754395122860032](https://chromestatuslite.com/feature/5754395122860032)
- **Specification:** [https://html.spec.whatwg.org/multipage/document-sequences.html#destroy-a-child-navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#destroy-a-child-navigable)
- **Chromium Bug:** [https://issues.chromium.org/issues/552675453](https://issues.chromium.org/issues/552675453)
- **Browser Signals:** Chrome: `Origin trial` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Stop synchronously firing pagehide, visibilitychange, and unload events when a subframe that has script access to an ancestor frame's DOM is removed from the DOM. Per the HTML Standard, destroying a child navigable on DOM removal does not fire these events, and firing them synchronously enables ancestor DOM re-entrancy during node removal.

> **Motivation:** When an &lt;iframe&gt; (or frame-hosting &lt;object&gt;/&lt;embed&gt;) is removed from the DOM, Blink historically dispatched pagehide, visibilitychange, and unload synchronously during ContainerNode::RemoveChild / Node::RemovedFrom. The HTML Standard's 'destroy a child navigable' algorithm does not fire unload or pagehide events on DOM removal.  Firing these events...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 40 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Deprecate and stop firing events during subframe removal""`, `""OmitSubframeDetachmentEventsOnRemoval""`, `""whatwg/html/issues/10194""`
- **Analysis:** Chromium is deprecating and suppressing synchronous lifecycle events—specifically pagehide, visibilitychange, and unload—when subframes capable of scripting an ancestor are removed from the DOM, aligning Blink with the WHATWG HTML Standard's navigable destruction algorithm. Historically, all major browser engines dispatched these events synchronously during node detachment, creating severe DOM re-entrancy hazards, state corruption, and crashes. Under the OmitSubframeDetachmentEventsOnRemoval flag, Chromium is scoping the intervention to same-origin and script-accessible subframes to eliminate the crash vector while validating ecosystem compatibility.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit application architectures and embedded iframes to ensure critical persistence and analytics logic do not rely on subframe pagehide or unload handlers firing upon element removal. Teams should migrate to explicit teardown routines executed prior to removing child frames and test their applications against Chromium using the OmitSubframeDetachmentEventsOnRemoval runtime flag.
- In active Origin Trial in Chrome 156. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5754395122860032/activity) *(chromestatus.com)*
  > The Web Platform feature \*\*"Deprecate and stop firing events during subframe removal"\*\* addresses a legacy browser discrepancy between implementation behavior and the HTML Standard This enabled scripts inside the detachi...
- [chromium.org](https://issues.chromium.org/552675453) *(issues.chromium.org)*
  > This enabled scripts inside the detaching subframe to synchronously access and modify an ancestor frame's DOM while the removal operation was in progress (DOM re-entrancy) Chrome/Blink initiated deprecation and suppressi...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > \*\*Summary:\*\* Official entries on Chrome Platform Status and the Chrome 156 Release Notes detail the deprecation feature To eliminate synchronous DOM re-entrancy, Chromium introduced the \`OmitSubframeDetachmentEventsOnRem...
- [googleusercontent.com](https://doc-1160-1o5g-issuetracker.googleusercontent.com/issues/550626700) *(doc-1160-1o5g-issuetracker.googleusercontent.com)*
  > Synchronous event firing during node removal introduced severe architectural edge cases, state inconsistencies, and crashes when scripts running inside subframe event handlers mutated intermediate DOM states of parent wi...

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (64 found across 13 planned queries, 1 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 4 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (2 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 0

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

- **Momentum:** **Quiet** (0 points since 2026-10-12; footprint 300 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Additional Windowing Controls" chrome web platform"`
- **Analysis:** Additional Windowing Controls expand the Window Management API with programmatic window state methods (\`maximize()\`, \`minimize()\`, \`restore()\`, and \`setResizable()\`) and corresponding CSS media features (\`display-state\` and \`resizable\`). Shipped by default in Chromium-based browsers (Chrome and Edge 155), the API bridges severe usability gaps for enterprise Virtual Desktop Infrastructure (VDI) web clients and custom-titlebar desktop PWAs. However, the feature lacks broader multi-engine consensus, remaining entirely unsupported across Gecko and WebKit engines.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat this feature strictly as an optional progressive enhancement for installed desktop PWAs and VDI interfaces. Always guard method invocations behind permission checks for the \`window-management\` permission, transient user activation, and feature-detection fallback layouts for non-Chromium clients.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @sonkkeli: "Hey, I'm jumping in here as I'm continuing on Ivan's work.  There were some updates made on the proposed APIs and the current proposals are at least a..."
- Standards Activity (Mozilla): Latest discussion from @michaelwasserman: "Client application window controls may indeed be limited by the OS, Window Manager, protocols, utilities, and modalities. The API surface offers coher..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Additional Windowing Controls](https://github.com/WebKit/standards-positions/issues/96) [open] `concerns: privacy`, `topic: app-like capabilities`, `concerns: integration`, `venue: none / personal repository`, `from: Google`, `concerns: annoyance`
  > *Latest discussion from @sonkkeli: "Hey, I'm jumping in here as I'm continuing on Ivan's work.  There were some updates made on the proposed APIs and the current proposals are at least a..."*
- **Mozilla:** [Additional Windowing Controls](https://github.com/mozilla/standards-positions/issues/712) [open] 
  > *Latest discussion from @michaelwasserman: "Client application window controls may indeed be limited by the OS, Window Manager, protocols, utilities, and modalities. The API surface offers coher..."*
- **W3C TAG:** [WG New Spec: Additional Windowing Controls](https://github.com/w3ctag/design-reviews/issues/1246) [open] `Review type: horizontal review`
  > *Latest discussion from @patrykchodur: "Reopening the issue..."*

#### 📰 Ecosystem Blogs & Articles

- [openpwa.net](https://openpwa.net/reference/capabilities/window-management) *(openpwa.net)*
  > These methods return promises and require the \`window-management\` permission, transient user activation, and an isolated window context (such as an installed desktop PWA or standalone popup window) \*\*Permission & Activat...
- [netlify.app](https://alexanderburgos.netlify.app/blog/chrome-155-window-management-pwas) *(alexanderburgos.netlify.app)*
  > \`display-state\`: evaluates to \`normal\`, \`minimized\`, \`maximized\`, or \`fullscreen\` \`resizable\`: evaluates to \`true\` or \`false\`
- [Chrome 155 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > Announced the desktop release of Additional Windowing Controls The Chrome team highlighted that this fills a critical gap for VDI clients where remote application windows in web apps previously had inoperative, duplicate...
- [Microsoft Edge 155 web platform release notes (Oct. 8, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > Edge highlighted the API's arrival for desktop PWAs, noting how pairing it with the Window Controls Overlay (WCO) API allows PWAs to fully render and control their custom titlebars seamlessly alongside native OS controls
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/5af3d5cbf0b251c8b399dd7357ba569b7999a365) *(chromium.googlesource.com)*
  > \*\*WPT Integration:\*\* Web Platform Tests migrated to \`wpt/css/mediaqueries/display-state.tentative.html\`, \`resizable.tentative.html\`, and \`wpt/window-management/additional-windowing-controls.tentative.https.html\` across C...
- [wpt.fyi](https://wpt.fyi/results/window-management/additional-windowing-controls.tentative.https.html) *(wpt.fyi)*
  > \*\*WPT Integration:\*\* Web Platform Tests migrated to \`wpt/css/mediaqueries/display-state.tentative.html\`, \`resizable.tentative.html\`, and \`wpt/window-management/additional-windowing-controls.tentative.https.html\` across C...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Ready for Developer Testing: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16555.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > \[blink-dev\] Ready for Developer Testing: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Additional Windowing Controls Chromestatus Tue, 19 May 2026 00:52:56 -...
- [Add data for window-management-resizing by Elchi3 · Pull Request #30912 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30912) *(github.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Chromestatus: https://&lt;strong&gt;chromestatus.com/feature/5201832664629248&lt;/strong&gt;
- [Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1364) *(github.com · 2026-08-20T17:03:51)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. R...
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Window controls, https://&lt;strong&gt;chromestatus.com/feature/5201832664629248&lt;/strong&gt;
- [\[blink-dev\] Re: Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17441.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Vladimir Levin Mon, 14 Sep 2026 08:57:02 -0700 LGTM1 On We...

#### 📚 Platform Documentation & References

- [GitHub - explainers-by-googlers/additional-windowing-controls: Repository hosting the feature explainer · GitHub](https://github.com/explainers-by-googlers/additional-windowing-controls) *(github.com)*
- [\[mediaqueries-5\] Add 'display-state' and 'resizable' media feature · Issue #14428 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/14428) *(github.com)*
- [Additional Windowing Controls · Issue #96 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/96) *(github.com)*
- [Add data for window-management-resizing by Elchi3 · Pull Request #30912 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30912) *(github.com)*
- [Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1364) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Additional Windowing Controls Demo](https://awc-demo-4a08a808.web.app)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `window-management` on [wpt.fyi](https://wpt.fyi/results?q=feature:window-management) (via webstatus.dev) — stable: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%

#### 🌐 Web-features Group Context

*group-level data: web-features [`window-management`](https://webstatus.dev/features/window-management), shared with 6 other ChromeStatus features*

- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/332))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (69 found across 13 planned queries, 20 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 9 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 1 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "window-management", shared with 6 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "window-management": Chrome 100% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 12

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

- **Momentum:** **Quiet** (0 points since 2026-10-12; footprint 181 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** Chromium is transitioning its IndexedDB storage layer from an unmaintained LevelDB and flat-file hybrid to an ACID-compliant SQLite backend with write-ahead logging, rolling out by default to newly created stores in Chrome 156. The standardized IndexedDB JavaScript API remains unchanged, focusing architectural benefits on data resilience, crash recovery, and reduced database corruption rather than raw query speed. This shift brings Chromium into direct architectural alignment with Gecko and WebKit, which have long relied on SQLite for IndexedDB backing storage.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams do not need to rewrite their IndexedDB queries, but teams building data-intensive or offline-first apps should audit their QA suites across both clean profiles (SQLite) and populated legacy profiles (LevelDB) to verify transaction scheduling and data durability under abnormal termination. Testing in Firefox and Safari serves as a reliable baseline for confirming compatibility with SQLite-backed transaction behavior.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Chrome IndexedDB: SQLite back end" (4 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Chrome IndexedDB: SQLite back end](https://news.ycombinator.com/item?id=48118595) — *Hacker News (4 pts, 0 comments)*

#### 📰 Ecosystem Blogs & Articles

- [IndexedDB: SQLite backend (in-memory contexts)](https://chromestatus.com/feature/5126896685809664) *(chromestatus.com)*
  > Chromium has undertaken an architectural rewrite of its \*\*IndexedDB backing store, moving away from its legacy hybrid LevelDB and flat-file storage engine to SQLite\*\* \*\*Core Motivation:\*\* LevelDB has been difficult to ma...
- [Chrome 156 IndexedDB SQLite Migration: What You Need to Know \| Alexander Burgos](https://alexanderburgos.netlify.app/blog/chrome-156-indexeddb-sqlite-migration) *(alexanderburgos.netlify.app)*
  > \*\*The Web API Remains Unchanged:\*\* Developers will still interact with standard IndexedDB transactions, object stores, and cursors; it does \*\*not\*\* introduce a public SQL query API SQLite brings mature ACID compliance, a...
- [Web-Facing Change PSA: IndexedDB: SQLite backend](https://groups.google.com/a/chromium.org/g/blink-dev/c/jS0khnC5IWA) *(groups.google.com)*
  > \*\*Chrome Platform Status & Blink-dev PSA:\*\* Authored by Chromium and Microsoft engineers (Evan Stade, Abhishek Shanthkumar)
- [Chrome 156 Moves IndexedDB to SQLite: What Changes for Your Offline-First App \| Trade Assistance LLC](https://trade-assistance.com/blog/indexeddb-sqlite-backend-chrome-156) *(trade-assistance.com)*
  > It highlights that web apps will benefit from SQLite's transaction model while cautioning teams about subtle edge cases in transaction scheduling \*\*Perspective:\*\* Local-first architecture and PWA development
- [Chrome 156 Uses SQLite for New IndexedDB Stores: Windows Update and Testing Guide](https://windowsforum.com/news/chrome-156-uses-sqlite-for-new-indexeddb-stores-windows-update-and-testing-guide.449458) *(windowsforum.com)*
  > \*\*The "Split-Brain" Period:\*\* Explains that developers profiling storage performance must realize a newly created test environment exercises the SQLite path, whereas existing user profiles will remain on LevelDB until St...
- [Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16362.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Daniel Herr Sat, 25 Apr 2026 00:10:41 -0700 So we ki...

#### 🔗 Inbound Citations & Reverse Links

- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com · 2026-09-28T08:15:45)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to re...
- [Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16362.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Daniel Herr Sat, 25 Apr 2026 00:10:41 -0700 So we ki...
- [\[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16359.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend 'Evan Stade' via blink-dev Fri, 24 Apr 2026 12:03:06 -0700 C...
- [Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16371.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend 'Evan Stade' via blink...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/MicrosoftEdge/WebView2Feedback/discussions/5754) *(github.com)*
- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [IndexedDB: SQLite backend Demo](https://evanstade.github.io/web-storage-demos/idb-txn-scopes)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `indexeddb` on [wpt.fyi](https://wpt.fyi/results?q=feature:indexeddb) (via webstatus.dev) — stable: Chrome 99.5% · Edge 99.5% · Firefox 98.9% · Safari 95.8%; experimental: Chrome 99.5% · Edge 99.5% · Firefox 98.9% · Safari 99.5%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (67 found across 11 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (6 found, 1 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "indexeddb", shared with 16 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "indexeddb": Chrome 99.5% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Quiet** (0 points since 2026-10-12; footprint 120 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** Chrome 157 closes a long-standing specification compliance gap by exposing the ProgressEvent constructor within ServiceWorkerGlobalScope, matching its existing availability across Window, DedicatedWorker, and SharedWorker contexts. Because the WHATWG XMLHttpRequest standard specifies ProgressEvent with universal worker exposure, Blink's update is classified as an engine catch-up rather than a novel feature. Web engines and developer tooling teams view this alignment as an uncontroversial ergonomic fix that simplifies cross-worker code reuse.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can safely adopt native ProgressEvent construction in shared worker libraries, though production code running across diverse browser versions should guard instantiation with a simple global check (\`typeof ProgressEvent !== 'undefined'\`). Fall back to lightweight event or object literals when posting progress notifications to clients if targeting older Chromium releases.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **1 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > \*\*Milestone / Tracking:\*\* Chrome 157 (Chromium Tracking Bug #332663431) \*\*Source:\*\* \*Chrome for Developers / Chrome 157 Release Notes\*
- [googlesource.com](https://chromium.googlesource.com/chromium/src.git/+/HEAD/third_party/blink/renderer/platform/runtime_enabled_features.json5) *(chromium.googlesource.com)*
  > \*\*Details:\*\* The Blink team published the intent to ship under the feature flag \`ProgressEventInServiceWorker\`
- [googleusercontent.com](https://doc-26bg-1o5g-issuetracker.googleusercontent.com/issues/565605607) *(doc-26bg-1o5g-issuetracker.googleusercontent.com)*
  > \*\*Source:\*\* \*MDN Web Docs / GitHub MDN Content Issues\* \*\*Details:\*\* A documentation tracking request was logged (\`Document ProgressEvent availability in service workers\`) to update the browser compatibility data (BCD)
- [techinnovateit.com](https://techinnovateit.com/service-worker-progressevent) *(techinnovateit.com)*
  > \*\*Source:\*\* \*Tech InnovateIT / Developer Blogs\* \*\*Use Cases:\*\* Historically, developers tracking asset pre-caching or stream downloads in service workers had to devise custom event shapes or fake progress objects before ...
- [\[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17635.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers Chromestatus Thu, 01 Oct 2026 06:11:26 -0700 C...
- [\[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17669.html) *(mail-archive.com)*
  > Please list open issues (e.g. links ... the API in a non-backward-compatible way). &gt; None anticipated for this change. &lt;strong&gt;The XMLHttpRequest Standard already &gt; exposes ProgressEvent to Window and Worker&lt;/stron...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17635.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > \[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers Chromestatus Thu, 01 Oct 2026 06:11:26 -0700 C...
- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com · 2026-09-24T13:38:21)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/ProgressEvent) *(developer.mozilla.org)*
- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com)*
- [Release merge\_pr\_63586 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/releases/tag/merge_pr_63586) *(github.com)*
- [\[Blink\] Expose ProgressEvent in service workers by chromium-wpt-export-bot · Pull Request #63586 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/63586) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `xhr` on [wpt.fyi](https://wpt.fyi/results?q=feature:xhr) (via webstatus.dev) — stable: Chrome 95.7% · Edge 95% · Firefox 97% · Safari 95.9%; experimental: Chrome 95.7% · Edge 95.2% · Firefox 97% · Safari 97.7%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 11 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 5 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "xhr", shared with 6 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "xhr": Chrome 95.7% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Quiet** (-30 points since 2026-10-12; footprint 145 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** Expanding the PredefinedColorSpace enumeration to include srgb-linear and display-p3-linear bridges CSS color spaces with HTML Canvas, WebGL, and WebGPU pipelines. Enabled by default in Chromium 155, the feature simplifies physically based rendering, lighting calculations, and spatial image filtering by eliminating manual gamma conversion overhead. Broad multi-engine consensus exists across standards bodies, though full cross-browser interoperability remains limited while implementations catch up.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt srgb-linear and display-p3-linear progressively for WebGL, WebGPU, and 2D canvas contexts by feature-detecting supported color space parameters during context initialization. Maintain fallback shaders or manual gamma decoding for browsers where Gecko and older engine versions have not yet enabled these enumeration values.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **Mozilla:** [srgb-linear and display-p3-linear PredefinedColorSpace](https://github.com/mozilla/standards-positions/issues/1453) [open] `venue: WHATWG`, `topic: API`

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1996208: Implement srgb-linear and display-p3-linear PredefinedColorSpace](https://bugzilla.mozilla.org/show_bug.cgi?id=1996208) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [What's New in WebGPU (Chrome 155-156)  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/new-in-webgpu-155-156) *(developer.chrome.com)*
  > The Web Platform feature \*\*\`PredefinedColorSpace: srgb-linear and display-p3-linear\`\*\* expands the \`PredefinedColorSpace\` enumeration used by HTML Canvas APIs (\`CanvasRenderingContext2D\`, \`ImageData\`, WebGL \`drawingBuffe...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17391.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Rick Bye...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Chromestatus Fri...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17384.html) *(mail-archive.com)*
  > &gt; \*Contact emails\* &gt; \[email protected\] &gt; &gt; \*Specification\* &gt; &gt; https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction &gt; &gt; \*Summary\* &gt; Add srgb-linear and display...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17396.html) *(mail-archive.com)*
  > &gt; LGTM2 &gt; &gt; On Mon, Sep 7, 2026 ...l#colour-spaces-and-colour-correction &gt;&gt;&gt; &gt;&gt;&gt; \*Summary\* &gt;&gt;&gt; &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by CSS) &gt;&gt;&g...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17494.html) *(mail-archive.com)*
  > &gt; On 9/9/26 6:42 a.m., Yoav Weiss ...spaces-and-colour-correction &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Summary\* &gt;&gt;&gt;&gt; &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17391.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5122501071994880`)*
  > Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Rick Bye...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5122501071994880`)*
  > \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Chromestatus Fri...

#### 📚 Platform Documentation & References

- [srgb-linear and display-p3-linear PredefinedColorSpace · Issue #1453 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1453) *(github.com)*
- [github.com](https://github.com/whatwg/html/issues/11526) *(github.com)*
- [Add srgb-linear, display-p3-linear, and rec2020-linear color spaces by ccameron-chromium · Pull Request #42 · WICG/canvas-color-space · GitHub](https://github.com/WICG/canvas-color-space/pull/42) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `canvas-2d-color-management` on [wpt.fyi](https://wpt.fyi/results?q=feature:canvas-2d-color-management) (via webstatus.dev) — stable: Chrome 57.1% · Edge 71.4% · Firefox 14.3% · Safari 78.6%; experimental: Chrome 60.7% · Edge 75% · Firefox 14.3% · Safari 78.6%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 11 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 3 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 1 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (1 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "canvas-2d-color-management", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "canvas-2d-color-management": Chrome 57.1% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Quiet** (-30 points since 2026-10-12; footprint 120 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Background Fetch" CORS chromium OR blink"`, `""CORS enforcement for Background Fetch""`
- **Analysis:** Starting in Chrome and Edge 157, Chromium enforces Cross-Origin Resource Sharing (CORS) alongside related boundaries like Local Network Access on the Background Fetch API, closing an attack vector where downloads bypassed standard fetch security policies. While this aligns the implementation with the WICG specification, Background Fetch remains confined to Chromium with no uptake in Gecko or WebKit. The change solidifies Chromium's decision to maintain and secure the API rather than deprecating it after earlier removal discussions.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit all service worker background fetch endpoints immediately to verify that external CDNs return correct CORS headers, as non-compliant cross-origin requests will now abort in Chrome and Edge 157+. Continue treating Background Fetch strictly as a progressive enhancement gated by feature checks, pairing it with standard streaming fetch fallbacks for Safari and Firefox.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [sentinelone.com](https://www.sentinelone.com/vulnerability-database/cve-2026-1504) *(sentinelone.com)*
  > \*\*Security Risk\*\*: The meta-bug (tracked under \`crbug.com/515243254\`) and related CVE filings (such as CVE-2026-1504) highlighted information disclosure risks associated with the legacy implementation \*\*Attack Vector Blo...
- [gigazine.net](https://gigazine.net/gsc_news/en/20261104-google-chrome-157) *(gigazine.net)*
  > \*\*Attack Vector Blocked\*\*: Before this update, an attacker could abuse \`Background Fetch\` from a Service Worker to probe local network endpoints or exfiltrate cross-origin data from authenticated user sessions without tr...
- [\[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17645.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chromestatus Fri, 02 Oct 2026 09:53:21 -0700 Conta...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17672.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chris Harrelson Wed, 07 Oct 2026 08:25:59 ...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17683.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Mike Taylor Wed, 07 Oct 2026 10:58:58 -070...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17674.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Alex Russell Wed, 07 Oct 2026 08:31:37 -07...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17645.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chromestatus Fri, 02 Oct 2026 09:53:21 -0700 Conta...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17672.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chris Harrelson Wed, 07 Oct 2026 08:25:59 ...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17683.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Mike Taylor Wed, 07 Oct 2026 10:58:58 -070...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17674.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Alex Russell Wed, 07 Oct 2026 08:31:37 -07...

#### 📚 Platform Documentation & References

- [Enforce CORS in Background Fetch by chromium-wpt-export-bot · Pull Request #63357 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/63357) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/154.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/154.md) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `background-fetch` on [wpt.fyi](https://wpt.fyi/results?q=feature:background-fetch) (via webstatus.dev) — stable: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%; experimental: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%

#### 🌐 Web-features Group Context

*group-level data: web-features [`background-fetch`](https://webstatus.dev/features/background-fetch), shared with 1 other ChromeStatus feature*

- **Mozilla:** no position recorded ([standards position](https://github.com/mozilla/standards-positions/issues/30))
- **WebKit:** no position recorded ([standards position](https://github.com/WebKit/standards-positions/issues/149)) · concerns: `privacy`, `maintenance`

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (64 found across 11 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (4 found, 2 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "background-fetch", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "background-fetch": Chrome 37.5% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Quiet** (-40 points since 2026-10-12; footprint 370 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""ML-KEM" "WebCrypto" "Chrome" OR "WICG""`, `""Algorithm Updates in WebCrypto" OR "Modern Algorithms in WebCrypto" WICG"`, `"site:github.com/WebKit/standards-positions "Modern Algorithms in WebCrypto""`
- **Analysis:** Chrome 155 officially ships modern cryptographic primitives into WebCrypto, introducing post-quantum cryptography (ML-KEM, ML-DSA, and X-Wing) alongside ChaCha20-Poly1305 and native Key Encapsulation Mechanism (KEM) operations. While server runtimes like Node.js and Cloudflare Workers have eagerly added support to unify JS cryptographic surfaces, other major browser engines remain noncommittal. As a result, this feature delivers critical hardware-backed performance gains in Chromium and edge runtimes, but cross-browser parity across the web platform remains fragmented.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt these primitives via progressive enhancement by runtime-checking \`SubtleCrypto.supports()\` or wrapping calls inside \`try/catch\` feature detections. Teams building end-to-end encrypted or post-quantum secure messaging must continue bundling WASM-compiled fallback libraries for Firefox, Safari, and older browser baselines.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."
- Standards Activity (Mozilla): Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **10 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Modern Algorithms in WebCrypto](https://github.com/WebKit/standards-positions/issues/641) [closed] `position: neutral`, `venue: WICG`
  > *Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."*
- **Mozilla:** [Request for Mozilla Position on Modern Algorithms in WebCrypto](https://github.com/mozilla/standards-positions/issues/1282) [closed] `venue: W3C CG`, `position: neutral`, `concerns: compatibility`, `concerns: venue`, `concerns: interoperability`, `concerns: performance`, `concerns: usability`, `concerns: API design`
  > *Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."*

#### 📰 Ecosystem Blogs & Articles

- [Post-Quantum Cryptography Reaches the Browser: ML-KEM and ML-DSA in Chrome 151's Web Crypto API \| Trade Assistance LLC](https://trade-assistance.com/blog/post-quantum-web-crypto-api-chrome-151) *(trade-assistance.com)*
  > \*\*ML-KEM (768, 1024):\*\* Module-Lattice-based Key Encapsulation Mechanism (NIST FIPS 203) for quantum-resistant shared secret exchange \*\*ML-DSA (44, 65, 87):\*\* Module-Lattice-based Digital Signature Algorithm (NIST FIPS 2...
- [cloudflare.com](https://blog.cloudflare.com/workers-ml-kem-ml-dsa-support) *(blog.cloudflare.com)*
  > Because ML-KEM and X-Wing are Key Encapsulation Mechanisms rather than traditional public-key encryption schemes, this update also introduces native KEM methods to \`crypto.subtle\` Cloudflare announced support for the WIC...
- [nodejs.org](https://beta.docs.nodejs.org/webcrypto) *(beta.docs.nodejs.org)*
  > Explicit new key formats such as \`'raw-public'\`, \`'raw-secret'\`, and \`'raw-seed'\` \*\*Node.js:\*\* Node.js incorporated the WICG \*Modern Algorithms in the Web Cryptography API\* proposal into its \`crypto.webcrypto\` implementa...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/security/client-side-encryption) *(developer.chrome.com)*
  > Explicit new key formats such as \`'raw-public'\`, \`'raw-secret'\`, and \`'raw-seed'\` Google Chrome's developer documentation highlights how developers can leverage native browser-level cryptography (backed by BoringSSL) rat...
- [entranttechnologies.com](https://entranttechnologies.com/tech-news/chrome-155-jpeg-xl-post-quantum-webcrypto-and-what-to-test) *(entranttechnologies.com)*
  > \*\*Milestones:\*\* Chromium introduced experimental developer trials in Chrome 150, launched an Origin Trial spanning Chrome 151–154, and officially shipped the feature to stable in \*\*Chrome 155\*\* Developer commentary and i...
- [adyog.com](https://pulse.adyog.com/insights/workers-post-quantum-web-crypto-opt-in) *(pulse.adyog.com)*
  > Cloudflare emphasized shifting the burden of crypto maintenance: developers and downstream libraries building end-to-end encryption or zero-trust services no longer need to ship bloated pure-JS or WASM polyfills; they ca...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16785.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto Chromestatus Wed, 17 Jun 2026 06:38:17 -0700 Contact...
- [\[blink-dev\] Intent to Prototype: Algorithm Updates in WebCrypto](https://www.mail-archive.com/blink-dev@chromium.org/msg14813.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > \[blink-dev\] Intent to Prototype: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Algorithm Updates in WebCrypto Chromestatus Fri, 17 Oct 2025 21:11:04 -0700 Contact e...
- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype:...
- [\[blink-dev\] Ready for Developer Testing: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16678.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > \[blink-dev\] Ready for Developer Testing: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Algorithm Updates in WebCrypto Chromestatus Wed, 03 Jun 2026 10:10:48...
- [Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg17360.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Algorithm Updates in WebCrypto Javier Fernandez Thu, 03 Sep 2026 03:12:27 -0700 Hi, Jus...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1370) *(github.com)*
- [github.com](https://github.com/paulmillr/noble-post-quantum/issues/43) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/641) *(github.com)*
- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com)*
- [GitHub - WICG/webcrypto-modern-algos: Proposal for the addition of various modern algorithms to the Web Cryptography API, as well as feature detection for algorithm support · GitHub](https://github.com/WICG/webcrypto-modern-algos) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `web-cryptography` on [wpt.fyi](https://wpt.fyi/results?q=feature:web-cryptography) (via webstatus.dev) — stable: Chrome 55.7% · Edge 55.7% · Firefox 61% · Safari 52.1%; experimental: Chrome 56.3% · Edge 55.7% · Firefox 64% · Safari 52.1%

#### 🌐 Web-features Group Context

*group-level data: web-features [`web-cryptography`](https://webstatus.dev/features/web-cryptography), shared with 4 other ChromeStatus features*

- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/67)) · concerns: `venue`

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (61 found across 11 planned queries, 24 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 9 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 1 verified) · `Dev.to Community Blogs` (0 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "web-cryptography", shared with 4 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "web-cryptography": Chrome 55.7% passing (stable))* · `Sources cited by the AI synthesis` (9 found, 8 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 6

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

- **Momentum:** **Quiet** (-40 points since 2026-10-12; footprint 350 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"jpeg xl decoding support in blink jxl rs"`, `"jpeg xl chrome jxl rs blink"`
- **Analysis:** Following its contentious 2022 removal from Chromium, JPEG XL native decoding has officially returned to Blink enabled by default in Chrome 155, powered by the memory-safe pure-Rust decoder jxl-rs. With Safari having supported the format since version 17 and Firefox shipping jxl-rs in version 158, JPEG XL has achieved broad consensus across all major browser engines. The format brings high-efficiency compression, native HDR, progressive decoding, and lossless JPEG transcoding to the modern web platform.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt JPEG XL immediately via progressive enhancement using the HTML picture element with source type='image/jxl', falling back to AVIF, WebP, or standard JPEG. Organizations with massive legacy JPEG catalogs should also evaluate lossless transcoding pipelines to cut delivery and storage bandwidth by roughly 20% with zero generational loss.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Addy Osmani on X: "Sneak Preview: JPEG XL decoding working in Chrome - 65% smaller than a JPEG at comparable quality. JXL aims to offer better image quality at low sizes, progressive decoding, lossless JPEG recompression and more: https://t.co/sErChStUHZ" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Addy Osmani on X: "Sneak Preview: JPEG XL decoding working in Chrome - 65% smaller than a JPEG at comparable quality. JXL aims to offer better image quality at low sizes, progressive decoding, lossless JPEG recompression and more: https://t.co/sErChStUHZ" / X](https://twitter.com/addyosmani/status/1379841205098311681?lang=en) — *Twitter / X by @addyosmani (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [trade-assistance.com](https://trade-assistance.com/blog/jpeg-xl-returns-chrome-155-image-performance) *(trade-assistance.com)*
  > In a landmark reversal of its controversial 2022 removal from Chromium, Google officially enabled \*\*native JPEG XL (\`image/jxl\`) decoding by default in Blink\*\* \*\*Lossless Transcoding:\*\* Demonstrates how developers can tr...
- [mochify.app](https://mochify.app/guides/jpeg-xl-chrome-support) *(mochify.app)*
  > In a landmark reversal of its controversial 2022 removal from Chromium, Google officially enabled \*\*native JPEG XL (\`image/jxl\`) decoding by default in Blink\*\* The defining technical breakthrough enabling this return is ...
- [chrome.com](https://developer.chrome.com/blog/jpeg-xl-in-chrome) *(developer.chrome.com)*
  > The defining technical breakthrough enabling this return is \*\*\`jxl-rs\`\*\*, a memory-safe, pure-Rust implementation of the JPEG XL decoder By implementing the codec in Rust with SIMD hardware acceleration, Blink satisfies ...
- [invidelabs.com](https://blog.invidelabs.com/firefox-chrome-jpeg-xl-support) *(blog.invidelabs.com)*
  > Because image decoders handle untrusted network bytes directly in the renderer process, memory-safety concerns historically made browser vendors hesitant to ship large C++ codebases (like \`libjxl\`) Together with existing...
- [hackaday.com](https://hackaday.com/2026/10/28/jpeg-xl-is-back-on-the-menu) *(hackaday.com)*
  > By implementing the codec in Rust with SIMD hardware acceleration, Blink satisfies Google’s "Rule of Two" security posture without sacrificing performance Highlights Safari’s earlier adoption in WebKit (Safari 17) and no...
- [r/rust on Reddit: Shipping JPEG XL in Chrome (via jxl-rs, a decoder written in Rust)](https://www.reddit.com/r/rust/comments/1x03ajn/shipping_jpeg_xl_in_chrome_via_jxlrs_a_decoder) *(reddit.com)*
  > \*\*Source:\*\* \`developer.chrome.com\` \*\*Performance & SIMD:\*\* Demonstrates that the Rust decoder achieves parity with—or exceeds—the speed and memory efficiency of prior C++ implementations on mobile devices via architectur...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > Intent to Ship: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to ...
- [Re: \[blink-dev\] Re: Ready for Trial: JPEG XL decoding support (image/jxl) in blink](http://www.mail-archive.com/blink-dev@chromium.org/msg15845.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > Re: \[blink-dev\] Re: Ready for Trial: JPEG XL decoding support (image/jxl) in blink Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Ready for Trial: JPEG XL decoding support (image/jxl) in blink Philip Jägensted...
- [JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1086) *(github.com · 2026-07-29T21:39:58)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another ...
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > JPEG XL, https://&lt;strong&gt;chromestatus.com/feature/5114042131808256&lt;/strong&gt;
- [JPEG XL and WebGPU · Issue #6879 · gpuweb/gpuweb · GitHub](https://github.com/gpuweb/gpuweb/issues/6879) *(github.com · 2026-08-25T03:12:32)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > What, if anything, should happen with JPEG XL and WebGPU? Firefox, Safari, and Chrome have all announced they are shipping https://&lt;strong&gt;chromestatus.com/feature/5114042131808256&lt;/strong&gt;?gate=6594362739916800 I ...

#### 📚 Platform Documentation & References

- [JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1086) *(github.com)*
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [JPEG XL and WebGPU · Issue #6879 · gpuweb/gpuweb · GitHub](https://github.com/gpuweb/gpuweb/issues/6879) *(github.com)*
- [JPEG-XL is be enabled in Firefox 157 and Chrome 155 by tunetheweb · Pull Request #7565 · Fyrd/caniuse · GitHub](https://github.com/Fyrd/caniuse/pull/7565) *(github.com)*
- [GitHub - libjxl/jxl-rs · GitHub](https://github.com/libjxl/jxl-rs) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `jpegxl` on [wpt.fyi](https://wpt.fyi/results?q=feature:jpegxl) (via webstatus.dev) — stable: Chrome 96.9% · Edge 4.6% · Firefox 98.5% · Safari 55.4%; experimental: Chrome 98.5% · Edge 4.6% · Firefox 98.5% · Safari 56.9%

#### 🌐 Web-features Group Context

*group-level data: web-features [`jpegxl`](https://webstatus.dev/features/jpegxl), shared with 2 other ChromeStatus features*

- **Chrome usage:** 0.02% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/418))
- **Mozilla:** neutral ([standards position](https://github.com/mozilla/standards-positions/issues/522))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (67 found across 11 planned queries, 27 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 8 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (7 found, 1 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "jpegxl", shared with 2 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "jpegxl": Chrome 96.9% passing (stable))* · `Sources cited by the AI synthesis` (6 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Quiet** (-60 points since 2026-10-12; footprint 645 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** Local Network Access (LNA) restrictions replace the earlier, unworkable Private Network Access preflight model with explicit browser permission prompts, gating public web origins from silently querying LAN devices or loopback addresses. Chrome began rolling out the prompt in Chrome 142 and introduced granular \`local-network\` and \`loopback-network\` permissions in Chrome 145, accompanied by relaxed mixed-content rules for authorized local endpoints. Broad engine alignment is coalescing around this permission-based model to eliminate drive-by intranet CSRF and port-scanning vectors, although non-Chromium implementations are still maturing.

**Key Recommendations & Takeaways:**
- Actionable Advice: Ensure all initiating applications are served from secure HTTPS contexts, and audit any architecture relying on loopback agents or LAN devices to handle rejected permissions gracefully. In embedded contexts, declare explicit \`Permissions-Policy\` headers (\`local-network\` and \`loopback-network\`), and use Chromium flags such as \`--ip-address-space-overrides\` or administrative policies to test and stage rollouts.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1969916: Local network access restrictions for webrtc](https://bugzilla.mozilla.org/show_bug.cgi?id=1969916) `[NEW]`

#### 📦 Polyfills & NPM Ecosystem

- [qz-lna](https://www.npmjs.com/package/qz-lna) `v0.1.3` — Helpers for Local Network Access restrictions

#### 📰 Ecosystem Blogs & Articles

- [Local Network Access  \|  Modern Web Guidance  \|  Chrome for Developers](https://developer.chrome.com/docs/modern-web-guidance/guides/security/local-network-access) *(developer.chrome.com)*
  > The \*\*Local Network Access (LNA)\*\* specification (formerly developed under the \*Private Network Access\* / PNA umbrella) restricts public or less-private websites from sending arbitrary network requests to private IP rang...
- [New permission prompt for Local Network Access  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/local-network-access) *(developer.chrome.com)*
  > \*\*Preventing Network Fingerprinting:\*\* Disallows public sites from port-scanning or mapping a user’s local subnet \*\*Shift Away from PNA Preflights:\*\* Rather than requiring every legacy IoT device and printer to implement...
- [appspot.com](https://cr-status.appspot.com/feature/5152728072060928?gate=5150690177187840) *(cr-status.appspot.com)*
  > If the user grants permission, this property explicitly instructs the browser to relax mixed content restrictions, enabling HTTPS origins to communicate with unencrypted HTTP devices that cannot obtain public TLS certifi...
- [Why Chrome Restricts Local Network Access (& How to Adapt) \| Paul Serban](https://www.paulserban.eu/blog/post/why-chrome-restricts-local-network-access-how-to-adapt) *(paulserban.eu)*
  > \*\*Paul Serban — \*"Why Chrome Restricts Local Network Access (& How to Adapt)"\*\*\* \*\*Summary:\*\* A developer-focused walkthrough explaining what steps engineering teams must take if their front-ends communicate with hardwar...
- [retool.com](https://community.retool.com/t/chrome-access-control-allow-private-network/62988) *(community.retool.com)*
  > \*\*Summary:\*\* A developer-focused walkthrough explaining what steps engineering teams must take if their front-ends communicate with hardware (e.g., local print servers, point-of-sale terminals, or dev tools) \*\*Retool Com...
- [stackoverflow.com](https://stackoverflow.com/questions/79819723/how-to-adapt-to-local-network-access-introduced-in-chrome-142) *(stackoverflow.com)*
  > \*\*Key recommendations:\*\* Migrating initiating pages strictly to HTTPS, handling prompt rejections gracefully, updating iframe sandbox policies, and setting server headers to preserve functionality without breaking user t...

#### 🔗 Inbound Citations & Reverse Links

- [Ready for Developer Testing: Local network access restrictions for WebSockets](https://groups.google.com/a/chromium.org/g/blink-dev/c/4gx2y5jPGbU) *(groups.google.com · 2025-09-18T00:00:00)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > Ready for Developer Testing: Local network access restrictions for WebSockets Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#x...
- [Intent to Prototype: Local network access restrictions for WebTransport](https://groups.google.com/a/chromium.org/g/blink-dev/c/DAIKnQ12YNU/m/68e8ItW9AAAJ) *(groups.google.com · 2025-09-18T00:00:00)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > Intent to Prototype: Local network access restrictions for WebTransport Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; ...
- [Intent to Prototype: Local Network Access Restrictions for WebRTC](https://groups.google.com/a/chromium.org/g/blink-dev/c/CDy8LAs-DoA) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > Intent to Prototype: Local Network Access Restrictions for WebRTC Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent...
- [\[☂️\] Permission-gated Local Network Access \[394009026\] - Chromium](https://issues.chromium.org/issues/394009026) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > https://chromestatus.com/feature/5152728072060928 · &lt;strong&gt;Specific implementation work will be split up into child issues&lt;/strong&gt;. Mentioned issues (1) Links (7) Hide all · “ Proposal: http://shortn/\_hAgrHkcOwB ” · ct...
- [Local Network Access restrictions (Chrome 142–156, now including WebSocket/WebTransport + policy removal) · Issue #29 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/29) *(github.com · 2026-09-14T08:09:52)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > Local Network Access restrictions (Chrome 142–156, now including WebSocket/WebTransport + policy removal) · Issue #29 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Si...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Request/targetAddressSpace) *(developer.mozilla.org)*
- [Local network access - Security - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Local_network_access) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/loopback-network) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access) *(developer.mozilla.org)*

#### 🧪 Interactive Demos & Samples

- [Local network access restrictions Demo](https://local-network-access-testing.glitch.me)

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (73 found across 12 planned queries, 50 verified) · `Google Search Grounding (gemini-3.8-flash)` (18 found, 16 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (5 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 1 verified) · `web-features mapping` *(group "local-network-access", shared with 7 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "local-network-access": no stable pass rate for Chrome yet)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

