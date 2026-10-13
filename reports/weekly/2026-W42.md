# 🌐 Chrome Web Platform Ecosystem Report — 2026-W42

> **Generated on:** 2026-10-12 | **Target Milestones:** Chrome 153, 154, 155, 156, 157
> **Search Engine:** Gemini (Google Grounded) + BRAVE | **Analysis Model:** Google Gemini (gemini-3.8-flash) | **AI synthesis:** 89 of 89 features
> **Momentum:** Momentum tiers rank this week's footprint against the other features: the change over four weeks needs an earlier number, measured the same way, for at least 10 features and half of them, and 0 of 89 have one.

## 📊 Executive Snapshot

| Metric | Count | Description |
| :--- | :--- | :--- |
| **Features Tracked** | `89` | APIs & platform features analyzed across milestones |
| **High Ecosystem Momentum** | `13` | Features in the highest momentum tier (see Methodology) |
| **Multi-Engine Consensus** | `23` | Broad alignment across Chromium, Gecko, and WebKit |
| **Contested / Concerns** | `5` | Features with open vendor or security/privacy objections |
| **New Mentions This Week** | `936` | Net new articles, discussions, or standards updates |

## ⚡ Week-over-Week Ecosystem Deltas

### 🔄 Status Transitions

- [Renewed HTML insertion&streaming methods](#5054329641893888-renewed-html-insertionstreaming-methods): Moved from *Enabled by default* to **Enabled by default** in Chrome 157
- [CSS corner shorthand properties ](#5152215540039680-css-corner-shorthand-properties-): Moved from *Enabled by default* to **Enabled by default** in Chrome 157
- [Immersive Audio Model and Formats (IAMF) decoding support](#5113656292540416-immersive-audio-model-and-formats-iamf-decoding-support): Moved from *In developer trial (Behind a flag)* to **Enabled by default** in Chrome 153
- [Single-axis scroll containers](#5067363861004288-single-axis-scroll-containers): Moved from *In developer trial (Behind a flag)* to **Enabled by default** in Chrome 156
- [CSS text-overflow: &lt;string&gt; value](#6294595288825856-css-text-overflow-string-value): Moved from *Enabled by default* to **Enabled by default** in Chrome 157
- [CORS enforcement for Background Fetch](#6210300985606144-cors-enforcement-for-background-fetch): Moved from *Enabled by default* to **Enabled by default** in Chrome 157
- [WebGPU: atomic-vec2u-min-max](#4882016087703552-webgpu-atomic-vec2u-min-max): Moved from *In developer trial (Behind a flag)* to **Enabled by default** in Chrome 157
- [WebTransport headers and responseHeaders](#5194104408506368-webtransport-headers-and-responseheaders): Moved from *In developer trial (Behind a flag)* to **Enabled by default** in Chrome 156
- [Capability Elements Icon-only mode](#5107682460696576-capability-elements-icon-only-mode): Moved from *Enabled by default* to **Enabled by default** in Chrome 157

### 📰 Net New Publications & Discussions

- [Support for WebHID](#5172464636133376-support-for-webhid): +16 article(s)
- [Algorithm Updates in WebCrypto](#5198951632470016-algorithm-updates-in-webcrypto): +22 article(s)
- [CSS random() function](#5324559251275776-css-random-function): +13 article(s)
- [JPEG XL decoding support (image/jxl) in blink](#5114042131808256-jpeg-xl-decoding-support-imagejxl-in-blink): +15 article(s)
- [Digital Credentials API (issuance support)](#5099333963874304-digital-credentials-api-issuance-support): +17 article(s)
- [Margin-trim](#5197863732772864-margin-trim): +16 article(s)
- [Renewed HTML insertion&streaming methods](#5054329641893888-renewed-html-insertionstreaming-methods): +23 article(s)
- [WebAudio: Configurable render quantum](#5078190552907776-webaudio-configurable-render-quantum): +16 article(s)
- [Deprecate and Remove: Shared Storage API](#5076349064708096-deprecate-and-remove-shared-storage-api): +20 article(s)
- [Additional Windowing Controls](#5201832664629248-additional-windowing-controls): +13 article(s)

### ✨ Newly Tracked Features

- [HTML-in-canvas](#5172548013916160-html-in-canvas) (Chrome 157, Enabled by default)
- [Local network access restrictions](#5152728072060928-local-network-access-restrictions) (Chrome 156, Stepped rollout)
- [Optional browser optimization for Service Workers](#5194817700364288-optional-browser-optimization-for-service-workers) (Chrome 154, Stepped rollout)
- [Enhanced Canvas TextMetrics](#5075532483657728-enhanced-canvas-textmetrics) (Chrome 157, Enabled by default)
- [Language Detector API on Android](#5087964794322944-language-detector-api-on-android) (Chrome 157, Enabled by default)
- [CSS position-visibility:anchor{s}-valid](#5136856479039488-css-position-visibilityanchors-valid) (Chrome 157, Enabled by default)
- [Connection Allowlists - Embedded Enforcement](#5657801797009408-connection-allowlists-embedded-enforcement) (Chrome 157, Origin trial)
- [Disconnect WebSockets on BFCache entry](#5068439115923456-disconnect-websockets-on-bfcache-entry) (Chrome 157, Stepped rollout)
- [Long Animation Frames style and layout duration](#5171478175809536-long-animation-frames-style-and-layout-duration) (Chrome 157, Enabled by default)
- [Ship anchor-visible and anchor-valid, and deprecate the plural versions](#5136123851571200-ship-anchor-visible-and-anchor-valid-and-deprecate-the-plural-versions) (Chrome 157, Enabled by default)

---

## 📋 Features Index

| Feature | Milestone | Category | Momentum | Consensus | Week Delta |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [HTML-in-canvas](#5172548013916160-html-in-canvas) | Chrome 157 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ✨ New |
| [Local network access restrictions](#5152728072060928-local-network-access-restrictions) | Chrome 156 | `Stepped rollout` | **High** | Partial Multi-Engine Interest | ✨ New |
| [Support for WebHID](#5172464636133376-support-for-webhid) | Chrome 154 | `In developer trial (Behind a flag)` | **High** | Contested / Concerns Raised | ⚡ +16 art / +0 msgs |
| [Algorithm Updates in WebCrypto](#5198951632470016-algorithm-updates-in-webcrypto) | Chrome 155 | `Enabled by default` | **High** | Chromium-Led | ⚡ +22 art / +0 msgs |
| [CSS random() function](#5324559251275776-css-random-function) | Chrome 156 | `Enabled by default` | **High** | Multi-Engine Consensus | ⚡ +13 art / +0 msgs |
| [JPEG XL decoding support (image/jxl) in blink](#5114042131808256-jpeg-xl-decoding-support-imagejxl-in-blink) | Chrome 155 | `Enabled by default` | **High** | Multi-Engine Consensus | ⚡ +15 art / +0 msgs |
| [Digital Credentials API (issuance support)](#5099333963874304-digital-credentials-api-issuance-support) | Chrome 155 | `Enabled by default` | **High** | Contested / Concerns Raised | ⚡ +17 art / +0 msgs |
| [Margin-trim](#5197863732772864-margin-trim) | Chrome 155 | `Enabled by default` | **High** | Multi-Engine Consensus | ⚡ +16 art / +0 msgs |
| [Renewed HTML insertion&streaming methods](#5054329641893888-renewed-html-insertionstreaming-methods) | Chrome 157 | `Enabled by default` | **High** | Partial Multi-Engine Interest | 🔄 Enabled by default |
| [WebAudio: Configurable render quantum](#5078190552907776-webaudio-configurable-render-quantum) | Chrome 153 | `Enabled by default` | **High** | Chromium-Led | ⚡ +16 art / +0 msgs |
| [Optional browser optimization for Service Workers](#5194817700364288-optional-browser-optimization-for-service-workers) | Chrome 154 | `Stepped rollout` | **High** | Partial Multi-Engine Interest | ✨ New |
| [Deprecate and Remove: Shared Storage API](#5076349064708096-deprecate-and-remove-shared-storage-api) | Chrome 153 | `Deprecated` | **High** | Chromium-Led | ⚡ +20 art / +0 msgs |
| [Additional Windowing Controls](#5201832664629248-additional-windowing-controls) | Chrome 155 | `Enabled by default` | **High** | Chromium-Led | ⚡ +13 art / +0 msgs |
| [WebRTC Diagnostic Logging API](#5091582546149376-webrtc-diagnostic-logging-api) | Chrome 156 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +14 art / +0 msgs |
| [Responsively-sized &lt;iframe&gt;](#5108373464547328-responsively-sized-iframe) | Chrome 154 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +14 art / +0 msgs |
| [scroll-axis-lock](#5908461532610560-scroll-axis-lock) | Chrome 153 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [CSS corner shorthand properties ](#5152215540039680-css-corner-shorthand-properties-) | Chrome 157 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | 🔄 Enabled by default |
| [Enhanced Canvas TextMetrics](#5075532483657728-enhanced-canvas-textmetrics) | Chrome 157 | `Enabled by default` | **Moderate** | Contested / Concerns Raised | ✨ New |
| [Deprecate and remove: Attribution Reporting API](#6320639375966208-deprecate-and-remove-attribution-reporting-api) | Chrome 153 | `Deprecated` | **Moderate** | Chromium-Led | ⚡ +13 art / +0 msgs |
| [Capability elements: &lt;camera&gt; and &lt;microphone&gt;](#5153829504024576-capability-elements-camera-and-microphone) | Chrome 153 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +13 art / +0 msgs |
| [Immersive Audio Model and Formats (IAMF) decoding support](#5113656292540416-immersive-audio-model-and-formats-iamf-decoding-support) | Chrome 153 | `Enabled by default` | **Moderate** | Chromium-Led | 🔄 Enabled by default |
| [Spell check custom dictionary API](#6185007701557248-spell-check-custom-dictionary-api) | Chrome 153 | `In developer trial (Behind a flag)` | **Moderate** | Chromium-Led | ⚡ +10 art / +0 msgs |
| [Language Detector API on Android](#5087964794322944-language-detector-api-on-android) | Chrome 157 | `Enabled by default` | **Moderate** | Contested / Concerns Raised | ✨ New |
| [CSS position-visibility:anchor{s}-valid](#5136856479039488-css-position-visibilityanchors-valid) | Chrome 157 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ✨ New |
| [Single-axis scroll containers](#5067363861004288-single-axis-scroll-containers) | Chrome 156 | `Enabled by default` | **Moderate** | Chromium-Led | 🔄 Enabled by default |
| [WebTransport Datagram writable streams and prioritization](#5183354944225280-webtransport-datagram-writable-streams-and-prioritization) | Chrome 155 | `In developer trial (Behind a flag)` | **Moderate** | Multi-Engine Consensus | ⚡ +13 art / +0 msgs |
| [CSS text-overflow: &lt;string&gt; value](#6294595288825856-css-text-overflow-string-value) | Chrome 157 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | 🔄 Enabled by default |
| [CSS4 text-decoration-skip-spaces](#4832783806627840-css4-text-decoration-skip-spaces) | Chrome 155 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [Pause media playback on not-visible iframes](#5082950457884672-pause-media-playback-on-not-visible-iframes) | Chrome 155 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +8 art / +0 msgs |
| [Compression dictionary transport Updates](#4895435813683200-compression-dictionary-transport-updates) | Chrome 156 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +10 art / +0 msgs |
| [Connection Allowlists - Embedded Enforcement](#5657801797009408-connection-allowlists-embedded-enforcement) | Chrome 157 | `Origin trial` | **Moderate** | Partial Multi-Engine Interest | ✨ New |
| [Deprecate and Remove Protected Audience](#6552486106234880-deprecate-and-remove-protected-audience) | Chrome 153 | `Deprecated` | **Moderate** | Chromium-Led | ⚡ +14 art / +0 msgs |
| [Deprecate and Remove: Related Website Sets (RWS)](#5194473869017088-deprecate-and-remove-related-website-sets-rws) | Chrome 153 | `Deprecated` | **Moderate** | Chromium-Led | ⚡ +8 art / +0 msgs |
| [Remove FencedFrame element and window.fence APIs](#6366274495053824-remove-fencedframe-element-and-windowfence-apis) | Chrome 156 | `Deprecated` | **Moderate** | Chromium-Led | ⚡ +7 art / +0 msgs |
| [CSS Symbols()](#5146996093616128-css-symbols) | Chrome 155 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +6 art / +0 msgs |
| [Deprecate and Remove: document.requestStorageAccessFor](#5162221567082496-deprecate-and-remove-documentrequeststorageaccessfor) | Chrome 153 | `Deprecated` | **Moderate** | Chromium-Led | ⚡ +4 art / +0 msgs |
| [Disconnect WebSockets on BFCache entry](#5068439115923456-disconnect-websockets-on-bfcache-entry) | Chrome 157 | `Stepped rollout` | **Moderate** | Multi-Engine Consensus | ✨ New |
| [Joint Iteration](#6249068542164992-joint-iteration) | Chrome 153 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +8 art / +0 msgs |
| [Use scroll-snap-type: pair to snap to a single element](#5124378896498688-use-scroll-snap-type-pair-to-snap-to-a-single-element) | Chrome 156 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +6 art / +0 msgs |
| [Long Animation Frames style and layout duration](#5171478175809536-long-animation-frames-style-and-layout-duration) | Chrome 157 | `Enabled by default` | **Moderate** | Chromium-Led | ✨ New |
| [WebTransport draining](#6427766428925952-webtransport-draining) | Chrome 153 | `In developer trial (Behind a flag)` | **Moderate** | Multi-Engine Consensus | ⚡ +9 art / +0 msgs |
| [IndexedDB: SQLite backend](#5161589557821440-indexeddb-sqlite-backend) | Chrome 156 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +9 art / +0 msgs |
| [Ask-before-HTTP warning on by default](#5143933628841984-ask-before-http-warning-on-by-default) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +14 art / +0 msgs |
| [Import Text (Text Modules)](#5191512456560640-import-text-text-modules) | Chrome 155 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +13 art / +0 msgs |
| [Iterator Join](#5095183554314240-iterator-join) | Chrome 153 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +10 art / +0 msgs |
| [Support targetAddressSpace option for WebSockets](#4779920606756864-support-targetaddressspace-option-for-websockets) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +8 art / +0 msgs |
| [XML parsing in Rust for non-XSLT scenarios](#5309598397497344-xml-parsing-in-rust-for-non-xslt-scenarios) | Chrome 153 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +9 art / +0 msgs |
| [PredefinedColorSpace srgb-linear and display-p3-linear](#5122501071994880-predefinedcolorspace-srgb-linear-and-display-p3-linear) | Chrome 155 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +9 art / +1 msgs |
| [Private Verification Tokens](#6210457816924160-private-verification-tokens) | Chrome 154 | `Origin trial` | **Emerging** | Chromium-Led | ⚡ +12 art / +0 msgs |
| [JS Self-Profiling Markers](#5201297767792640-js-self-profiling-markers) | Chrome 153 | `Origin trial` | **Emerging** | Chromium-Led | ⚡ +6 art / +0 msgs |
| [WebTransport send groups and stream prioritization](#5235261159112704-webtransport-send-groups-and-stream-prioritization) | Chrome 153 | `In developer trial (Behind a flag)` | **Emerging** | Partial Multi-Engine Interest | ⚡ +11 art / +0 msgs |
| [CSS pseudo-class for navigation source element](#6327898878377984-css-pseudo-class-for-navigation-source-element) | Chrome 156 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +6 art / +0 msgs |
| [WebGPU: WGSL Fragment Depth](#5663304168112128-webgpu-wgsl-fragment-depth) | Chrome 156 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +8 art / +0 msgs |
| [CORS enforcement for Background Fetch](#6210300985606144-cors-enforcement-for-background-fetch) | Chrome 157 | `Enabled by default` | **Emerging** | Chromium-Led | 🔄 Enabled by default |
| [Ship anchor-visible and anchor-valid, and deprecate the plural versions](#5136123851571200-ship-anchor-visible-and-anchor-valid-and-deprecate-the-plural-versions) | Chrome 157 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ✨ New |
| [WebGPU: atomic-vec2u-min-max](#4882016087703552-webgpu-atomic-vec2u-min-max) | Chrome 157 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | 🔄 Enabled by default |
| [CSS scroll-marker-group modes](#5109685301673984-css-scroll-marker-group-modes) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +4 art / +1 msgs |
| [WebGPU: \`buffer\_view\` feature](#5094091886034944-webgpu-buffer_view-feature) | Chrome 153 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [CSS text-decoration-inset](#5178263526834176-css-text-decoration-inset) | Chrome 156 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +8 art / +1 msgs |
| [FontFace width attribute and font-width descriptor](#5145402365050880-fontface-width-attribute-and-font-width-descriptor) | Chrome 154 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +8 art / +0 msgs |
| [Avoid caching module failures](#5214647044145152-avoid-caching-module-failures) | Chrome 156 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +7 art / +0 msgs |
| [CSS flow-start and flow-end alignment keywords](#5069051687731200-css-flow-start-and-flow-end-alignment-keywords) | Chrome 157 | `In developer trial (Behind a flag)` | **Emerging** | Partial Multi-Engine Interest | ✨ New |
| [WebTransport reliability attributes](#5094058497277952-webtransport-reliability-attributes) | Chrome 155 | `In developer trial (Behind a flag)` | **Emerging** | Multi-Engine Consensus | ⚡ +8 art / +0 msgs |
| [Decisions API](#5155080092385280-decisions-api) | Chrome 157 | `In developer trial (Behind a flag)` | **Emerging** | Chromium-Led | ✨ New |
| [Fetch API: Forward reason from AbortController to fetch Response](#5158507786665984-fetch-api-forward-reason-from-abortcontroller-to-fetch-response) | Chrome 154 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +7 art / +0 msgs |
| [js-profiling in dedicated workers](#5159559872249856-js-profiling-in-dedicated-workers) | Chrome 154 | `In developer trial (Behind a flag)` | **Emerging** | Chromium-Led | ⚡ +6 art / +0 msgs |
| [Overscroll Areas](#5261280285949952-overscroll-areas) | Chrome 157 | `Origin trial` | **Emerging** | Chromium-Led | ✨ New |
| [AccentColor & AccentColorText follows accent-color value](#6207138742534144-accentcolor-accentcolortext-follows-accent-color-value) | Chrome 157 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ✨ New |
| [Add options bag to WebSocket constructor](#5080055102439424-add-options-bag-to-websocket-constructor) | Chrome 154 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +4 art / +0 msgs |
| [Expose ProgressEvent in service workers](#5069584943153152-expose-progressevent-in-service-workers) | Chrome 157 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ✨ New |
| [Iterator Includes](#5205192866922496-iterator-includes) | Chrome 154 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +6 art / +0 msgs |
| [Optional descriptors for registered custom properties](#5168674259468288-optional-descriptors-for-registered-custom-properties) | Chrome 156 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +4 art / +0 msgs |
| [WebTransport headers and responseHeaders](#5194104408506368-webtransport-headers-and-responseheaders) | Chrome 156 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | 🔄 Enabled by default |
| [WebTransport receive stream](#5109912169480192-webtransport-receive-stream) | Chrome 155 | `In developer trial (Behind a flag)` | **Emerging** | Multi-Engine Consensus | ⚡ +6 art / +0 msgs |
| [Expose CSSStyleValue hierarchy to Worker contexts](#5114591051907072-expose-cssstylevalue-hierarchy-to-worker-contexts) | Chrome 154 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +7 art / +0 msgs |
| [Secure Payment Confirmation: Locale Validation](#5126146013396992-secure-payment-confirmation-locale-validation) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [Window Shape API](#5075144470036480-window-shape-api) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +3 art / +0 msgs |
| [Host and screenshot restrictions for chrome.debugger API](#5072259281715200-host-and-screenshot-restrictions-for-chromedebugger-api) | Chrome 155 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [Interoperable dispatch timing for transitionrun and media query events](#6312504658624512-interoperable-dispatch-timing-for-transitionrun-and-media-query-events) | Chrome 153 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](#4886345347629056-object-fit-and-object-position-apply-to-svg-documents-in-object-and-embed) | Chrome 157 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ✨ New |
| [Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](#5138797158334464-web-bluetooth-make-bluetoothremotegattserver-an-eventtarget) | Chrome 157 | `Enabled by default` | **Emerging** | Contested / Concerns Raised | ✨ New |
| [Local Network Access restrictions for Background Fetch](#6225598451154944-local-network-access-restrictions-for-background-fetch) | Chrome 154 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +2 art / +0 msgs |
| [WebTransport Datagram readable stream type](#5148774971342848-webtransport-datagram-readable-stream-type) | Chrome 155 | `In developer trial (Behind a flag)` | **Emerging** | Partial Multi-Engine Interest | ⚡ +2 art / +0 msgs |
| [SpeechRecognitionResult Timestamps (WebSpeech API)](#5811907077472256-speechrecognitionresult-timestamps-webspeech-api) | Chrome 153 | `In developer trial (Behind a flag)` | **Emerging** | Chromium-Led | ⚡ +3 art / +0 msgs |
| [Light dismiss improvements for popovers and dialogs](#6209615938322432-light-dismiss-improvements-for-popovers-and-dialogs) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [Support Long Animation Frames API in Web Workers](#5387465121726464-support-long-animation-frames-api-in-web-workers) | Chrome 153 | `In developer trial (Behind a flag)` | **Emerging** | Chromium-Led | ⚡ +3 art / +0 msgs |
| [Add javascriptURLs option to SanitizerConfig and Sanitizer](#5169798320357376-add-javascripturls-option-to-sanitizerconfig-and-sanitizer) | Chrome 157 | `Enabled by default` | **Emerging** | Chromium-Led | ✨ New |
| [Remove non-standard navigations targeted at \_current](#5121089536262144-remove-non-standard-navigations-targeted-at-_current) | Chrome 153 | `Deprecated` | **Emerging** | Multi-Engine Consensus | ⚡ +4 art / +0 msgs |
| [Capability Elements Icon-only mode](#5107682460696576-capability-elements-icon-only-mode) | Chrome 157 | `Enabled by default` | **Emerging** | Chromium-Led | 🔄 Enabled by default |

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

- **Momentum:** **High** (footprint 1350 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""html-in-canvas" "github.com/whatwg/html/pull/11588""`, `""HTML-in-canvas" OR "html-in-canvas" whatwg"`, `""html-in-canvas" webkit mozilla"`, `""HTML-in-canvas" chrome status"`
- **Analysis:** HTML-in-canvas bridges high-performance 2D, WebGL, and WebGPU canvas contexts with native browser capabilities like accessibility, styled multiline text, and built-in form interactivity, reaching enabled-by-default status in Chromium 157. While Chromium has rapidly pushed the feature through origin trials and WHATWG pull requests, full cross-engine consensus is still developing as API shape ergonomics and security boundaries are finalized.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building rich creative tooling, games, or data visualizers should evaluate the API behind flags or origin trials to test live DOM text and UI within WebGL and WebGPU scenes. However, because Firefox and Safari have not yet shipped stable implementations, production applications should gate this feature behind progressive enhancement and avoid making it a hard requirement for core UI.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @smfr: "We will mark this proposal as support in a week pending objections. There are some ongoing discussions around parts of the API shape that we'd like to..."
- Standards Activity (Mozilla): Latest discussion from @nical: "Another concern was brought up recently in a discussion with web-standards folks at mozilla:  HTML-in-canvas is violating the principle that JS should..."
- Community package available: \[three-html-render\](https://www.npmjs.com/package/three-html-render) (v0.1.2) for progressive enhancement.
- Verified community discussion on Hacker News: "HTML-in-Canvas" (222 points, 116 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **24 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [HTML-in-Canvas](https://news.ycombinator.com/item?id=44772177) — *Hacker News (222 pts, 116 comments)*
- 💬 [HTML-in-Canvas Demos](https://news.ycombinator.com/item?id=48201222) — *Hacker News (67 pts, 28 comments)*
- 💬 [The HTML-in-Canvas API \[video\]](https://news.ycombinator.com/item?id=48251645) — *Hacker News (5 pts, 0 comments)*
- 💬 [Google Introduces HTML-in-Canvas API: Accessible UI Meets WebGL / WebGPU](https://news.ycombinator.com/item?id=48247368) — *Hacker News (4 pts, 1 comments)*
- 💬 [vgpu and HTML-in-Canvas](https://news.ycombinator.com/item?id=49477838) — *Hacker News (4 pts, 0 comments)*
- 💬 [Show HN: Lemmings in HTML in Canvas](https://news.ycombinator.com/item?id=49057415) — *Hacker News (2 pts, 3 comments)*
- 💬 [Shader-driven web transitions with HTML-in-canvas](https://news.ycombinator.com/item?id=47675703) — *Hacker News (2 pts, 1 comments)*
- 💬 [CanvasUI: HTML-in-Canvas Component Library](https://news.ycombinator.com/item?id=49019078) — *Hacker News (2 pts, 0 comments)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [\[HTML\] html-in-canvas](https://github.com/WebKit/standards-positions/issues/630) [open] `topic: accessibility`, `topic: html`, `venue: WHATWG HTML Workstream`, `venue: WICG`, `from: Google`
  > *Latest discussion from @smfr: "We will mark this proposal as support in a week pending objections. There are some ongoing discussions around parts of the API shape that we'd like to..."*
- **Mozilla:** [HTML-in-Canvas](https://github.com/mozilla/standards-positions/issues/1076) [open] `topic: API`, `team: Graphics`
  > *Latest discussion from @nical: "Another concern was brought up recently in a discussion with web-standards folks at mozilla:  HTML-in-canvas is violating the principle that JS should..."*
- **W3C TAG:** [Incubation: \[HTML\] html-in-canvas](https://github.com/w3ctag/design-reviews/issues/1204) [open] `Progress: in progress`, `Venue: WHATWG`, `Review type: CG early review`, `Venue: WICG`, `Missing: Multi-stakeholder support`
  > *Latest discussion from @progers: "&gt; We are very supportive of the goals of this proposal, which is well written. It's good to see privacy considerations addressed. But the proposal req..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2080177: \[wpt-sync\] Sync PR 63449 - \[html-in-canvas\] Remove legacy getElementTransform API](https://bugzilla.mozilla.org/show_bug.cgi?id=2080177) `[NEW]`
- **Mozilla (Gecko):** [Bug #2080206: \[wpt-sync\] Sync PR 63443 - \[html-in-canvas\] Remove blink-specific terms in WPTs](https://bugzilla.mozilla.org/show_bug.cgi?id=2080206) `[NEW]`
- **Mozilla (Gecko):** [Bug #2080211: \[wpt-sync\] Sync PR 63423 - \[html-in-canvas\] Switch to canvas getter for element width/height](https://bugzilla.mozilla.org/show_bug.cgi?id=2080211) `[NEW]`
- **Mozilla (Gecko):** [Bug #2080570: \[wpt-sync\] Sync PR 63517 - \[html-in-canvas\] Keep MailboxTextureBacking single-threaded](https://bugzilla.mozilla.org/show_bug.cgi?id=2080570) `[NEW]`
- **Mozilla (Gecko):** [Bug #2080574: \[wpt-sync\] Sync PR 63519 - \[html-in-canvas\] Sync CanvasPaintEvent&ElementGeometryUpdateEvent IDL](https://bugzilla.mozilla.org/show_bug.cgi?id=2080574) `[NEW]`
- **WebKit (Safari):** [Bug #316240: \[HTML-in-Canvas\] Implement HTML-in-Canvas](https://bugs.webkit.org/show_bug.cgi?id=316240) `[NEW]`
- **WebKit (Safari):** [Bug #316244: \[HTML-in-Canvas\] Blockify style "display" and force style "position" for canvas descendants](https://bugs.webkit.org/show_bug.cgi?id=316244) `[NEW]`
- **WebKit (Safari):** [Bug #316246: \[HTML-in-Canvas\] Implement ElementImage and HTMLCanvasElement.captureElementImage()](https://bugs.webkit.org/show_bug.cgi?id=316246) `[NEW]`

#### 📦 Polyfills & NPM Ecosystem

- [@remotion/canvas-capture](https://www.npmjs.com/package/@remotion/canvas-capture) `v4.0.502` — Capture HTML-in-canvas content as a video
- [three-html-render](https://www.npmjs.com/package/three-html-render) `v0.1.2` *(Verified Polyfill)* — HTML-in-Canvas polyfill and Three.js integration for rendering live HTML as WebGL/WebGPU textures
- [hic-pageflip](https://www.npmjs.com/package/hic-pageflip) `v1.0.4` — A Pageflip/Flipbook Custom Element powered by HTML-in-Canvas
- [html-in-canvas-polyfill](https://www.npmjs.com/package/html-in-canvas-polyfill) `v1.0.1` *(Verified Polyfill)* — HTML in Canvas Polyfill
- [@canvus/core](https://www.npmjs.com/package/@canvus/core) `v0.1.6` — High-performance HTML-in-Canvas Interactive Workspace SDK

#### 📰 Ecosystem Blogs & Articles

- [HTML-in-Canvas Demos](https://github.com/GoogleChromeLabs/css-web-ui-demos/blob/main/html-in-canvas/awesome-html-in-canvas.md) *(github.com · 2026-05-19T23:49:03Z)*
  > HTML-in-Canvas-in-HTML. Yo dawg.
- [The HTML-in-Canvas API \[video\]](https://www.youtube.com/watch?v=TUtKGTeFWjQ) *(youtube.com · 2026-05-23T21:19:41Z)*
- [Google Introduces HTML-in-Canvas API: Accessible UI Meets WebGL / WebGPU](https://www.webgpu.com/news/google-html-in-canvas-webgl-webgpu) *(webgpu.com · 2026-05-23T13:11:37Z)*
  > &gt; Google&gt; Accessible UIContradiction in terms.  How many years Google needs to put an &quot;ok&quot; or &quot;cancel&quot; button on a modal dialog box instead of wasting every time 5 seconds of my life ?
- [vgpu and HTML-in-Canvas](https://html-in-canvas.dev/demos/vgpu-shader) *(html-in-canvas.dev · 2026-08-28T12:56:50Z)*
- [Show HN: Lemmings in HTML in Canvas](https://github.com/VorticonCmdr/lemmings) *(github.com · 2026-07-26T12:23:47Z)*
  > For fun I decided I wanted to reimplement Lemmings using HTML-in-cavas and a DOM-based Entity-Component-System. I made heavy use of Claude Code (using only Sonnet 5 High) and I used everything already published on this t...
- [Shader-driven web transitions with HTML-in-canvas](https://github.com/MaxLeiter/compiz-web) *(github.com · 2026-04-07T14:12:30Z)*
  > Each page navigation runs a WebGL shader that reads both the old and new page as live textures via the new texElementImage2D() API, then composites them through the selected compiz inspired effect.You can test it here (m...

#### 🔗 Inbound Citations & Reverse Links

- [HTML-in-canvas · Issue #41 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/41) *(github.com · 2026-10-05T08:17:17)* *(Cites: `https://chromestatus.com/feature/5172548013916160`)*
  > HTML-in-canvas · Issue #41 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Rel...
- [Intent to Experiment: HTML-in-canvas](https://groups.google.com/a/chromium.org/g/blink-dev/c/t_nGEmJ_v4s) *(groups.google.com)* *(Cites: `https://github.com/WICG/html-in-canvas`)*
  > Intent to Experiment: HTML-in-canvas Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: HTML-in-canva...
- [Enable the canvas-draw-element Chrome Flag — Setup & Browser Support \| HTML-in-Canvas](https://html-in-canvas.dev/docs/browser-support) *(html-in-canvas.dev · 2026-09-08T00:00:00)* *(Cites: `https://github.com/WICG/html-in-canvas`)*
  > Enable the canvas-draw-element Chrome Flag — Setup & Browser Support \| HTML-in-Canvas This site needs the HTML-in-Canvas flag — Chrome Canary or Brave Stable (Chromium 147+). chrome://flags/#canvas-draw-element Full guid...
- [Ready for Developer Testing: HTML in Canvas: drawElement](https://groups.google.com/a/chromium.org/g/blink-dev/c/LYJyOdLbOfY) *(groups.google.com · 2025-05-23T00:00:00)* *(Cites: `https://github.com/WICG/html-in-canvas`)*
  > Ready for Developer Testing: HTML in Canvas: drawElement Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Ready for Devel...
- [Rendering HTML elements to &lt;canvas&gt; - Stack Overflow](https://stackoverflow.com/questions/12652769/rendering-html-elements-to-canvas) *(stackoverflow.com)* *(Cites: `https://github.com/WICG/html-in-canvas`)*
  > https://developer.chrome.com/blog/html-in-canvas-origin-trial · https://&lt;strong&gt;github.com/WICG/html-in-canvas&lt;/strong&gt;/ Share · Share a link to this answer · Copy linkCC BY-SA 4.0 · Short permalink to this answer · Impr...

#### 📚 Platform Documentation & References

- [HTML-in-canvas · Issue #41 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/41) *(github.com)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-08 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0001.html) *(lists.w3.org)*
- [IRC log of apa on 2026-04-01](https://www.w3.org/2026/04/01-apa-irc) *(w3.org)*
- [HTML-in-Canvas · Issue #1076 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1076) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `canvas` on [wpt.fyi](https://wpt.fyi/results?q=feature:canvas) (via webstatus.dev) — stable: Chrome 98.4% · Edge 98.4% · Firefox 95.9% · Safari 99.2%; experimental: Chrome 98.4% · Edge 98.4% · Firefox 95.9% · Safari 99.2%

#### 🌐 Web-features Group Context

*group-level data: web-features [`canvas`](https://webstatus.dev/features/canvas), shared with 2 other ChromeStatus features*

- **Chrome usage:** 0.48% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/200))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (67 found across 12 planned queries, 29 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 11 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (8 found, 8 verified) · `Dev.to Community Blogs` (0 found, 1 verified) · `Hacker News Algolia` (8 found, 8 verified) · `Standards Positions` (5 found, 3 verified) · `Engine Bug Trackers` (10 found, 8 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 5 verified) · `web-features mapping` *(group "canvas", shared with 2 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "canvas": Chrome 98.4% passing (stable))* · `Sources cited by the AI synthesis` (11 found, 9 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 12

---

<a id="5152728072060928-local-network-access-restrictions"></a>
### [Local network access restrictions](https://chromestatus.com/feature/5152728072060928)

- **Milestone:** Chrome 156 (Stepped rollout)
- **ChromeStatus:** [chromestatus.com/feature/5152728072060928](https://chromestatus.com/feature/5152728072060928) · [chromestatuslite.com/feature/5152728072060928](https://chromestatuslite.com/feature/5152728072060928)
- **Specification:** [https://wicg.github.io/local-network-access](https://wicg.github.io/local-network-access)
- **Chromium Bug:** [https://crbug.com/394009026](https://crbug.com/394009026)
- **Browser Signals:** Chrome: `Stepped rollout` · Firefox: `Shipped/Shipping` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/local-network-access) (Chrome: `142`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`local-network-access`](https://webstatus.dev/features/local-network-access), shared with 7 other ChromeStatus features*

#### 📝 Overview

Chrome 142 restricted the ability to make requests to the user's local network, gated behind a permission prompt. A local network request is any request from a public website to a local IP address or loopback, or from a local website (for example, intranet) to loopback.   Gating the ability for websites to perform these requests behind a permission mitigates the risk of cross-site request forgery attacks against local network devices such as routers, and reduces the ability of sites to use these requests to fingerprint the user's local network.  This permission is restricted to secure contexts. If granted, the permissions additionally relax mixed content blocking for local network requests (since many local devices are not able to obtain publicly trusted TLS certificates for various reasons).  This work supersedes a prior effort called \[Private Network Access\](https://chromestatus.com/feature/5737414355058688), which used preflight requests to have local devices opt in. For more information on this feature, see \[Adapting your website for new Local Network Access restrictions in Chrome\](https://docs.google.com/document/d/1QQkqehw8umtAgz5z0um7THx-aoU251p705FbIQjDuGs/edit?usp=sharing).  Chrome 145 introduced more granular permissions for websites requesting access to a user's local network. The previous single \`local-network-access permission\` is being split into two distinct permissions:  \* \`local-network\`: Grants access to IP addresses in the local network space (for example, intranets, internal devices). \* \`loopback-network\`: Grants access to loopback IP addresses (for example, \`localhost\`, \`127.0.0.1\`).  The old \`local-network\` permission will remain as an alias, ensuring existing configurations and permissions policies continue to function as expected.   This change provides both users and Admins with more precise control over how websites interact with internal network resources. Current enterprise policies managing local network access will not be affected by this change.  Chrome 146 introduces two new enterprise policies for managing local network access restrictions:  \[LocalNetworkAccessIpAddressSpaceOverrides\](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides) and  \[LocalNetworkAccessPermissionsPolicyDefaultEnabled\](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled). These policies can be set using \[custom configurations\](https://support.google.com/chrome/a/answer/14749672).  Chrome 147 expands Local Network Access restrictions to include WebSocket and WebTransport connections.  In Chrome 156, the \[LocalNetworkAccessRestrictionsTemporaryOptOut\](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut) policy will be removed.

> **Motivation:** Currently public websites can probe a user's local network, perform CSRF attacks against vulnerable local devices, and generally abuse the user's browser as a "confused deputy" that has access inside the user's local network or software on their local machine. Gating the ability for sites to make local network requests behind a permission prompt he...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 705 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Local Network Access (LNA) restrictions gate public-to-private and public-to-loopback network requests behind explicit browser permission prompts, replacing the older preflight-based Private Network Access (PNA) model while offering mixed-content relief for local devices. Chromium is leading full enforcement through a phased rollout spanning Chrome 142 to Chrome 156, having refined the model in Chrome 145 into distinct 'local-network' and 'loopback-network' permissions. Cross-engine consensus on the security rationale is strong, though multi-browser parity remains pending complete enforcement in WebKit and Gecko.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit all client-side calls to intranet or loopback endpoints, ensure your origin runs in a secure context (HTTPS), and query the granular 'loopback-network' and 'local-network' permissions with fallbacks to the legacy 'local-network-access' alias. For managed enterprise workflows relying on local daemon connectivity, configure administrative policy allowances before automated restrictions block unprompted traffic.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **42 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1969916: Local network access restrictions for webrtc](https://bugzilla.mozilla.org/show_bug.cgi?id=1969916) `[NEW]`

#### 📦 Polyfills & NPM Ecosystem

- [qz-lna](https://www.npmjs.com/package/qz-lna) `v0.1.3` — Helpers for Local Network Access restrictions

#### 📰 Ecosystem Blogs & Articles

- [New permission prompt for Local Network Access \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/local-network-access) *(developer.chrome.com)*
  > The Web Platform's \*\*Local Network Access (LNA)\*\* restrictions address a longstanding security flaw: public websites silently using the browser as a proxy to probe, fingerprint, or mount Cross-Site Request Forgery (CSRF)...
- [openreplay.com](https://blog.openreplay.com/chrome-local-network-access-lna-permission) *(blog.openreplay.com)*
  > The Web Platform's \*\*Local Network Access (LNA)\*\* restrictions address a longstanding security flaw: public websites silently using the browser as a proxy to probe, fingerprint, or mount Cross-Site Request Forgery (CSRF)...
- [risky.biz](https://news.risky.biz/risky-bulletin-chrome-gets-a-new-prompt-to-prevent-sneaky-local-network-attacks) *(news.risky.biz)*
  > The Web Platform's \*\*Local Network Access (LNA)\*\* restrictions address a longstanding security flaw: public websites silently using the browser as a proxy to probe, fingerprint, or mount Cross-Site Request Forgery (CSRF)...
- [myipaddresscheck.com](https://myipaddresscheck.com/news/chrome-145-local-network-loopback-permissions) *(myipaddresscheck.com)*
  > \* \*\*Chrome 142\*\*: Shipped LNA restrictions by default, gating requests from public websites to local/loopback addresses (or local sites to loopback) behind an explicit browser permission prompt \* \*\*Chrome 145\*\*: Split th...
- [chromestatus.com](https://chromestatus.com/feature/5068298146414592) *(chromestatus.com)*
  > \* \*\*Chrome 145\*\*: Split the monolithic \`local-network-access\` permission into two granular permissions: \`local-network\` (LAN/private IP ranges like RFC 1918) and \`loopback-network\` (device loopback like \`127.0.0.1\` and \`...
- [chrome.com](https://developer.chrome.com/blog/chrome-147-beta) *(developer.chrome.com)*
  > \* \*\*Chrome 147\*\*: Extended restrictions beyond standard HTTP fetches to include WebSockets and WebTransport connections \* IT administrators have heavily utilized enterprise policies (\`LocalNetworkAccessAllowedForUrls\` an...

#### 🔗 Inbound Citations & Reverse Links

- [Articles Does Chrome version 142 affect Webauth access?](https://central.smarsh.com/s/article/Does-Chrome-version-142-affect-Webauth-access) *(central.smarsh.com)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > https://&lt;strong&gt;chromestatus.com/feature/5152728072060928&lt;/strong&gt; · Additional Information · If you are unsure what Chrome browser you&#x27;re using, you can verify by following the steps below: Method 1: Using the menu...
- [\[blink-dev\] Intent to Extend Experiment: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg15683.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Chromestatus Tue, 27 Jan 2026 13...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY/m/my-groups) *(groups.google.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Intent to Ship: Local network access restrictions Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Local ...
- [Re: \[blink-dev\] Re: Intent to Ship: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg14743.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Local network access restrictions Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Local network access restrictions Chris Thompson Thu, 02 Oct 2025 15:36:28 -...
- [Intent to Ship: Local network access restrictions for WebTransport](https://groups.google.com/a/chromium.org/g/blink-dev/c/OuQArRDHoBg) *(groups.google.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Intent to Ship: Local network access restrictions for WebTransport Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Inten...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Request/targetAddressSpace) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access) *(developer.mozilla.org)*
- [Local network access - Security - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Local_network_access) *(developer.mozilla.org)*
- [Permissions API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API) *(developer.mozilla.org)*
- [Clarify what "local-network" and "loopback-network" permissions enable (and when to prompt the user) · Issue #89 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/89) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Local network access restrictions Demo](https://local-network-access-testing.glitch.me)

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (69 found across 13 planned queries, 54 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 16 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (2 found, 1 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (5 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 1 verified) · `web-features mapping` *(group "local-network-access", shared with 7 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "local-network-access": no stable pass rate for Chrome yet)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5172464636133376-support-for-webhid"></a>
### [Support for WebHID](https://chromestatus.com/feature/5172464636133376)

- **Milestone:** Chrome 154 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5172464636133376](https://chromestatus.com/feature/5172464636133376) · [chromestatuslite.com/feature/5172464636133376](https://chromestatuslite.com/feature/5172464636133376)
- **Specification:** [https://wicg.github.io/webhid/index.html](https://wicg.github.io/webhid/index.html)
- **Chromium Bug:** [http://crbug.com/40628009](http://crbug.com/40628009)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `Negative` · Safari: `Negative`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/webhid) (Chrome: `89`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`webhid`](https://webstatus.dev/features/webhid), shared with 4 other ChromeStatus features*

#### 📝 Overview

WebHID allows web applications to interact with a wider range of devices. Standard examples of Human Interface Devices (HIDs)  include mice, keyboards, touchscreens, and gamepads. Those are accessible with high-level input events. However, specialized HIDs and HID features (for example, custom keyboards, game controllers, and call control headsets) require extended access.   WebHID allows web applications to request access, send and receive HID reports, and retrieve information about the report descriptor. This feature was previously launched on desktop platforms (Windows, macOS, Linux, and ChromeOS). Support on Android is planned for Chrome 157. To read more, see \[Connect to uncommon HID devices\](https://developer.chrome.com/docs/extensions/how-to/web-platform/webhid).  This feature can be controlled by the following enterprise policies:  \* \[DefaultWebHidGuardSetting\](https://chromeenterprise.google/policies/#DefaultWebHidGuardSetting) \* \[WebHidAllowAllDevicesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowAllDevicesForUrls) \* \[WebHidAllowDevicesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowDevicesForUrls) \* \[WebHidAllowDevicesWithHidUsagesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowDevicesWithHidUsagesForUrls) \* \[WebHidAskForUrls\](https://chromeenterprise.google/policies/#WebHidAskForUrls) \* \[WebHidBlockedForUrls\](https://chromeenterprise.google/policies/#WebHidBlockedForUrls)

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 535 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebHID" WebKit standards position"`, `""WebHID" android chromium issue"`
- **Analysis:** WebHID provides low-level bidirectional communication with specialized human interface devices—such as custom keyboard configurators, flight controllers, and telephony headsets—but remains strictly confined to Chromium browsers. Having launched on desktop platforms in Chrome 89, its current expansion into developer trials on Android represents an effort to achieve mobile hardware parity. However, broader web interoperability is non-existent due to resolute and enduring architectural opposition from non-Chromium browser vendors.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat WebHID strictly as an optional progressive enhancement or limit its deployment to targeted Chromium-first internal tools and enterprise hardware management portals. Implement robust feature detection via \`navigator.hid\` and offer fallback paths or native desktop helper applications for visitors on Firefox, Safari, and non-supported mobile environments.
- Standards Activity (Mozilla): Latest discussion from @scheib: "I'd like to address dmitriid@'s and beaufortfrancois@ comments with a personal opinion.  I work on Chrome adding these capabilities.  We do strive to ..."
- Standards Activity (W3C TAG): Latest discussion from @cynthia: "We've looked at this during the Tokyo F2F.  Blunt question: will the device selector dialog come up every time the user tries to access the same devic..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Show HN: Browser based tool for programming ch57x macro-pads" (3 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **16 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Show HN: Browser based tool for programming ch57x macro-pads](https://news.ycombinator.com/item?id=48662242) — *Hacker News (3 pts, 0 comments)*
- 🐦 [mr.niko.la (@diynikola) on X](https://twitter.com/diynikola/status/1148644168148955136) — *Twitter / X by @diynikola (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **Mozilla:** [WebHID (Human Interface Device) API](https://github.com/mozilla/standards-positions/issues/459) [closed] `venue: W3C CG`, `position: negative`
  > *Latest discussion from @scheib: "I'd like to address dmitriid@'s and beaufortfrancois@ comments with a personal opinion.  I work on Chrome adding these capabilities.  We do strive to ..."*
- **W3C TAG:** [WebHID API (Human Interface Device)](https://github.com/w3ctag/design-reviews/issues/370) [closed] `Progress: review complete`, `Topic: accessibility`, `Topic: privacy`, `Provenance: Fugu`, `Topic: Input`
  > *Latest discussion from @cynthia: "We've looked at this during the Tokyo F2F.  Blunt question: will the device selector dialog come up every time the user tries to access the same devic..."*

#### 📦 Polyfills & NPM Ecosystem

- [@types/w3c-web-hid](https://www.npmjs.com/package/@types/w3c-web-hid) `v1.0.7` — TypeScript definitions for w3c-web-hid

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/docs/capabilities/web-apis/hid-examples) *(developer.chrome.com)*
  > The \*\*WebHID (Human Interface Device) API\*\* allows web applications to communicate directly with specialized hardware—such as custom macro keyboards, flight controllers, gamepads, stream decks, and call-control headsets—...
- [Connect to uncommon HID devices \| Capabilities \| Chrome for Developers](https://developer.chrome.com/docs/capabilities/hid) *(developer.chrome.com)*
  > Connettiti a dispositivi HID insoliti \| Capabilities \| Chrome for Developers Passa ai contenuti principali / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiến...
- [gadgets360.com](https://www.gadgets360.com/apps/news/google-chrome-89-update-desktop-android-linux-windows-macos-redesigned-discover-feed-webhid-2382994) *(gadgets360.com)*
  > While WebHID has been available on desktop platforms (Windows, macOS, Linux, ChromeOS) since Chrome 89
- [chromeenterprise.google](https://chromeenterprise.google/intl/en_uk/resources/release-notes) *(chromeenterprise.google)*
  > While WebHID has been available on desktop platforms (Windows, macOS, Linux, ChromeOS) since Chrome 89, recent announcements on \*\*Chrome Platform Status\*\* and \*\*Chrome Enterprise Release Notes\*\* confirm that \*\*Android su...
- [jetstream.blog](https://jetstream.blog/en/android-chrome-webhid-app-teardown) *(jetstream.blog)*
  > Recent Chromium commits and Android teardowns reveal that native C++ report bridging and Android Site Settings permissions for HID devices are being introduced Mobile Parity & The "Desktop-Class Web" on Android \* \*\*Hardw...
- [googleusercontent.com](https://doc-48mg-1o5g-issuetracker.googleusercontent.com/issues/480251417) *(doc-48mg-1o5g-issuetracker.googleusercontent.com)*
  > Recent Chromium commits and Android teardowns reveal that native C++ report bridging and Android Site Settings permissions for HID devices are being introduced \* \*\*Teardowns & Permissions:\*\* Android teardowns highlight t...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T00:00:00)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Intent to Prototype: WebHID on Android Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: WebHID on An...
- [\[blink-dev\] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17213.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > \[blink-dev\] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: WebHID on Android Matt Reynolds Tue, 18 Aug 2026 12:47:09 -0700 Sure, let's upgrade this t...
- [Intent to Experiment: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/LoyzK8xTRME) *(groups.google.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > Intent to Experiment: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experime...
- [Add hid to features.md · w3c/webappsec – Slacker News](https://slacker.ro/2021/07/20/add-hid-to-featuresmd-w3cwebappsec-permissions-policy-at-1065d2d) *(slacker.ro)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > \| \`hid\` \| \[Explainer\](https://&lt;strong&gt;github.com/WICG/webhid/blob/master/EXPLAINER.md&lt;/strong&gt;) \| In \[Origin Trial\](https://developers.chrome.com/origintrials/#/view\_trial/1074108511127863297) in Chrome 85-87 \|
- [Add "WebHID" · Issue #5062 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/5062) *(github.com · 2019-08-27T17:29:35)* *(Cites: `https://wicg.github.io/webhid/index.html`)*
  > Add "WebHID" · Issue #5062 · Fyrd/caniuse · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/WICG/webhid) *(github.com)*
- [WebHID API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/HID) *(developer.mozilla.org)*
- [Add "WebHID" · Issue #5062 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/5062) *(github.com)*
- [WebHID API (Human Interface Device) · Issue #370 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/370) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webhid` on [wpt.fyi](https://wpt.fyi/results?q=feature:webhid) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 16.7% · Safari 16.7%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 16.7% · Safari 16.7%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webhid`](https://webstatus.dev/features/webhid), shared with 4 other ChromeStatus features*

- **Chrome usage:** 0.000014% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/77))
- **Mozilla:** negative ([standards position](https://github.com/mozilla/standards-positions/issues/459))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (65 found across 12 planned queries, 39 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 14 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (3 found, 1 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (6 found, 1 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 1 verified) · `web-features mapping` *(group "webhid", shared with 4 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webhid": Chrome 66.7% passing (stable))* · `Sources cited by the AI synthesis` (6 found, 3 verified)
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

- **Momentum:** **High** (footprint 410 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""webcrypto-modern-algos""`, `""Modern Algorithms in WebCrypto""`, `"site:github.com/WebKit/standards-positions "Modern Algorithms in WebCrypto""`
- **Analysis:** The Modern Algorithms in WebCrypto specification is transitioning into real-world availability, led by Chromium shipping post-quantum primitives (ML-KEM, ML-DSA, X-Wing) and ChaCha20-Poly1305 enabled by default in Chrome 155. Cross-runtime interest is high across Node.js, Deno, and Cloudflare Workers, but cross-browser consensus remains split, with non-Chromium engines offering neutral stances rather than uniform commitments.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web engineering teams should adopt these post-quantum primitives using strict feature detection (such as the proposed subtle.supports() method) as a progressive enhancement. For cross-browser applications, maintain WebAssembly or pure JavaScript fallbacks until Firefox and Safari deploy native algorithm support.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."
- Standards Activity (Mozilla): Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **22 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Modern Algorithms in WebCrypto](https://github.com/WebKit/standards-positions/issues/641) [closed] `position: neutral`, `venue: WICG`
  > *Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."*
- **Mozilla:** [Request for Mozilla Position on Modern Algorithms in WebCrypto](https://github.com/mozilla/standards-positions/issues/1282) [closed] `venue: W3C CG`, `position: neutral`, `concerns: compatibility`, `concerns: venue`, `concerns: interoperability`, `concerns: performance`, `concerns: usability`, `concerns: API design`
  > *Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."*

#### 📰 Ecosystem Blogs & Articles

- [trade-assistance.com](https://trade-assistance.com/blog/post-quantum-web-crypto-api-chrome-151) *(trade-assistance.com)*
  > The \*\*"Algorithm Updates in WebCrypto"\*\* initiative (incubated under the W3C/WICG draft specification \[Modern Algorithms in the Web Cryptography API\](https://wicg.github.io/webcrypto-modern-algos/)) Key primitives added ...
- [cloudflare.com](https://blog.cloudflare.com/workers-ml-kem-ml-dsa-support) *(blog.cloudflare.com)*
  > The \*\*"Algorithm Updates in WebCrypto"\*\* initiative (incubated under the W3C/WICG draft specification \[Modern Algorithms in the Web Cryptography API\](https://wicg.github.io/webcrypto-modern-algos/)) brings standardized p...
- [Node.js v24.7.0 Released – Post-Quantum Cryptography, Modern WebCrypto, and More - DEV Community](https://dev.to/zaheetdev/nodejs-v2470-released-post-quantum-cryptography-modern-webcrypto-and-more-1df9) *(dev.to)*
  > The \*\*"Algorithm Updates in WebCrypto"\*\* initiative (incubated under the W3C/WICG draft specification \[Modern Algorithms in the Web Cryptography API\](https://wicg.github.io/webcrypto-modern-algos/)) brings standardized p...
- [chromestatus.com](https://chromestatus.com/release-notes/155) *(chromestatus.com)*
  > Official Browser Roadmaps & Release Notes (Chrome for Developers / Chromium) \* \*\*Chrome Platform Status & Beta Release Notes (Chrome 151 – 155)\*\*: \* Chromium introduced a developer trial in Chrome 150, opened an \*\*Origin...
- [adyog.com](https://pulse.adyog.com/insights/workers-post-quantum-web-crypto-opt-in) *(pulse.adyog.com)*
  > \* \*Ecosystem Impact\*: Emphasizes shifting the burden of maintaining post-quantum code from end-application bundles to the underlying runtime (workerd/BoringSSL) Developer Tutorials & Technical Breakdowns \* \*\*Developer De...
- [daily.dev](https://daily.dev/posts/support-for-modern-cryptographic-algorithms-in-workers-zjlyer7w3) *(daily.dev)*
  > It highlights how popular client and edge libraries (such as \`panva/jose\` and \`panva/hpke\`) can now automatically delegate to native runtime primitives instead of shipping multi-kilobyte polyfills

#### 🔗 Inbound Citations & Reverse Links

- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com · 2026-07-29T21:58:10)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ano...
- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype:...
- [New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1370) *(github.com · 2026-08-24T16:45:23)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com · 2025-08-06T12:55:07)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings...
- [script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo](https://github.com/servo/servo/pull/41615) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sign...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/oven-sh/bun/issues/29218) *(github.com)*
- [github.com](https://github.com/libp2p/js-libp2p/discussions/3430) *(github.com)*
- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com)*
- [New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1370) *(github.com)*
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `web-cryptography` on [wpt.fyi](https://wpt.fyi/results?q=feature:web-cryptography) (via webstatus.dev) — stable: Chrome 68.9% · Edge 68.9% · Firefox 72.6% · Safari 72.6%; experimental: Chrome 70.8% · Edge 70.8% · Firefox 82.6% · Safari 15.8%

#### 🌐 Web-features Group Context

*group-level data: web-features [`web-cryptography`](https://webstatus.dev/features/web-cryptography), shared with 4 other ChromeStatus features*

- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/67)) · concerns: `venue`

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (66 found across 11 planned queries, 25 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 9 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "web-cryptography", shared with 4 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "web-cryptography": Chrome 68.9% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 6 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 6

---

<a id="5324559251275776-css-random-function"></a>
### [CSS random() function](https://chromestatus.com/feature/5324559251275776)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5324559251275776](https://chromestatus.com/feature/5324559251275776) · [chromestatuslite.com/feature/5324559251275776](https://chromestatuslite.com/feature/5324559251275776)
- **Specification:** [https://www.w3.org/TR/css-values-5/#random](https://www.w3.org/TR/css-values-5/#random)
- **Chromium Bug:** [https://issues.chromium.org/issues/413385732](https://issues.chromium.org/issues/413385732)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/random-function) (Chrome: `—`, Firefox: `—`, Safari: `26.2`) · *group-level data: web-features [`random-function`](https://webstatus.dev/features/random-function)*

#### 📝 Overview

The random() function brings generative randomness to CSS, allowing web authors to generate a random numeric value within a specified range.  For example, web authors can use random() to scatter elements randomly within their container: .dot {   /\* Position each dot randomly \*/   position: absolute;   top: random(0%, 100%);   left: random(0%, 100%); }  This feature also includes caching controls. By default, each random() function resolves to a new, distinct value. Web authors can override this default by passing a &lt;random-key&gt; value as the function's first argument to control how random values are shared across properties and elements.

> **Motivation:** The CSS random() function provides a native way to generate random values directly in CSS without relying on JavaScript, reducing code complexity while making it easier for developers to create varied and dynamic designs.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 395 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"CSS random function Chrome 156 or status"`, `"CSS random function WebKit Rolling the Dice"`, `"CSS random function drafts csswg css values 5"`
- **Analysis:** The CSS random() function from CSS Values and Units Module Level 5 is rapidly maturing into a core styling primitive, introducing declarative generative values and caching keys without requiring JavaScript or Sass preprocessors. Safari established early implementation leadership in Safari 26, Chromium has enabled support by default starting in Chrome 156, and Mozilla maintains an officially positive stance with active engine development. Developer reception is enthusiastically receptive to native visual randomization, balanced by careful consideration of caching behavior and layout stability.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt the function strictly as a progressive enhancement today, gating rules behind CSS feature queries such as @supports (width: random(0px, 100px)). For non-essential visual flair like scattered decorative elements and randomized animation delays, developers can safely experiment, while relying on PostCSS plugins or JavaScript fallbacks where uniform cross-browser parity remains critical.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Yeah the thing the WG settled on was a lot saner than the initial proposal :)..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "WebKit on X: "Learn about the new CSS random() function, now available to experiment with in Safari Technology Preview. There are lots of amazing ways to use random values in CSS. Learn more in "Rolling the Dice with CSS random()": https://t.co/JdFtXP3qTm" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [WebKit on X: "Learn about the new CSS random() function, now available to experiment with in Safari Technology Preview. There are lots of amazing ways to use random values in CSS. Learn more in "Rolling the Dice with CSS random()": https://t.co/JdFtXP3qTm" / X](https://x.com/webkit/status/1958608369134280951) — *Twitter / X by @webkit (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **Mozilla:** [CSS Values 5: random()](https://github.com/mozilla/standards-positions/issues/809) [closed] `position: positive`, `topic: CSS`, `team: Layout`
  > *Latest discussion from @emilio: "Yeah the thing the WG settled on was a lot saner than the initial proposal :)..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1836588: Implement CSS random() function](https://bugzilla.mozilla.org/show_bug.cgi?id=1836588) `[ASSIGNED]`
- **WebKit (Safari):** [Bug #300580: CSS random() not functioning as expected](https://bugs.webkit.org/show_bug.cgi?id=300580) `[NEW]`

#### 📦 Polyfills & NPM Ecosystem

- [@csstools/postcss-random-function](https://www.npmjs.com/package/@csstools/postcss-random-function) `v4.0.5` — Use the random function in CSS
- [@kingoftac/postcss-plugin-random](https://www.npmjs.com/package/@kingoftac/postcss-plugin-random) `v0.1.3` — A PostCSS plugin for the upcoming CSS random() function.

#### 📰 Ecosystem Blogs & Articles

- [medium.com](https://medium.com/@arnoldgunter/why-i-love-to-use-the-new-css-random-function-2a7a0cb56500) *(medium.com)*
  > Web authors can generate numbers, lengths, angles, or percentages between bounds without relying on JavaScript or compile-time preprocessor loops (like Sass) The official announcement explored the fundamentals: using \`ra...
- [master.dev](https://blog.master.dev/very-early-playing-with-random-in-css) *(blog.master.dev)*
  > Web authors can generate numbers, lengths, angles, or percentages between bounds without relying on JavaScript or compile-time preprocessor loops (like Sass) Official Implementation & Reference \* \*\*WebKit Announcement – ...
- [daily.dev](https://daily.dev/posts/let-s-use-the-emergent-css-random-function-in-all-the-browsers-yi8ggjuka) *(daily.dev)*
  > Official Implementation & Reference \* \*\*WebKit Announcement – \*"Rolling the Dice with CSS random()"\*\*\* WebKit was the first engine to debut preview support for the feature \* \*\*Lee Meyer’s tutorial\*\* tackles the transitio...
- [Let’s Use the Emergent CSS random() Function in all the Browsers \| CSS-Tricks](https://css-tricks.com/css-random-function-polyfill) *(css-tricks.com)*
  > Deep Dives & Tutorials \* \*\*CSS-Tricks – \*Almanac: \`random()\`\* & \*“Let's Use the Emergent CSS random() Function in all the Browsers”\* (Lee Meyer)\*\* \* \*\*Lee Meyer’s tutorial\*\* tackles the transitional phase before full cro...
- [csswg.org](https://drafts.csswg.org/css-values-5) *(drafts.csswg.org)*
  > Deep Dives & Tutorials \* \*\*CSS-Tricks – \*Almanac: \`random()\`\* & \*“Let's Use the Emergent CSS random() Function in all the Browsers”\* (Lee Meyer)\*\* \* The \*\*CSS Almanac entry\*\* covers syntax mechanics, stepping arguments (...
- [socialmediaagencylebanon.com](https://www.socialmediaagencylebanon.com/en/insights/unlocking-dynamic-styles-the-emergent-css-r) *(socialmediaagencylebanon.com)*
  > Meyer walks through patterns storing \`random()\` expressions within custom properties (e.g., \`--random-\*\`) and explores progressive enhancement polyfill strategies

#### 🔗 Inbound Citations & Reverse Links

- [Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30754) *(github.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > css.types.random (https://&lt;strong&gt;chromestatus.com/feature/5324559251275776&lt;/strong&gt;)
- [CSS random() · Issue #1354 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1354) *(github.com · 2026-09-03T21:08:06)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > CSS random() · Issue #1354 · web-platform-tests/interop · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload t...
- [CSS random() function · Issue #715 · mdn/mdn](https://github.com/mdn/mdn/issues/715) *(github.com · 2025-08-24T12:16:41)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > CSS random() function · Issue #715 · mdn/mdn · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh y...
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17357.html) *(mail-archive.com)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > Re: \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS random() function Vladimir Levin Wed, 02 Sep 2026 13:03:37 -0700 LGTM3 On Wednesday, Septemb...
- [\[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17310.html) *(mail-archive.com)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS random() function 'Munira Tursunova' via blink-dev Wed, 26 Aug 2026 12:48:09 -0700 \*Contact emails\* ...

#### 📚 Platform Documentation & References

- [random() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/random) *(developer.mozilla.org)*
- [Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30754) *(github.com)*
- [CSS random() · Issue #1354 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1354) *(github.com)*
- [CSS random() function · Issue #715 · mdn/mdn](https://github.com/mdn/mdn/issues/715) *(github.com)*
- [\[css-values-5\] Caching CSS random() values in custom functions · Issue #13661 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/13661) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `random-function` on [wpt.fyi](https://wpt.fyi/results?q=feature:random-function) (via webstatus.dev) — stable: Chrome 12.5% · Edge 12.5% · Firefox 12.5% · Safari 37.5%; experimental: Chrome 25% · Edge 25% · Firefox 25% · Safari 100%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (60 found across 13 planned queries, 27 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 10 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (5 found, 1 verified) · `Dev.to Community Blogs` (2 found, 1 verified) · `Hacker News Algolia` (7 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (4 found, 2 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 2 verified) · `web-features mapping` *(group "random-function", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "random-function": Chrome 12.5% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 7 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 5

---

<a id="5114042131808256-jpeg-xl-decoding-support-imagejxl-in-blink"></a>
### [JPEG XL decoding support (image/jxl) in blink](https://chromestatus.com/feature/5114042131808256)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5114042131808256](https://chromestatus.com/feature/5114042131808256) · [chromestatuslite.com/feature/5114042131808256](https://chromestatuslite.com/feature/5114042131808256)
- **Specification:** [https://www.iso.org/standard/85066.html](https://www.iso.org/standard/85066.html)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/jpegxl) (Chrome: `155`, Firefox: `—`, Safari: `17`) · *group-level data: web-features [`jpegxl`](https://webstatus.dev/features/jpegxl), shared with 2 other ChromeStatus features*

#### 📝 Overview

Adds support for decoding JPEG XL (image/jxl) images in Blink using jxl-rs, a memory-safe pure Rust decoder (https://github.com/libjxl/jxl-rs). JPEG XL is a modern image format standardized as ISO/IEC 18181 that offers progressive decoding for improved perceived loading performance, support for wide color gamut, HDR, and high bit depth, and support for animation.

> **Motivation:** (see Summary)

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 390 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"Firefox JPEG XL status jxl-rs"`, `""JPEG XL" Chrome jxl-rs"`, `""JPEG XL" Chrome Rust decoder"`
- **Analysis:** Google has reversed its controversial 2022 deprecation by enabling JPEG XL decoding by default in Chrome 155, powered by Google Research's memory-safe Rust decoder, jxl-rs. Coupled with Safari's support since version 17 and Mozilla Firefox enabling it by default in Firefox 158 using the same Rust engine, JPEG XL has officially achieved cross-browser consensus. The move eliminates historical security hesitations around complex C++ decoders while bringing advanced progressive decoding, lossless JPEG transcoding, and HDR fidelity to the mainstream web.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams can immediately adopt JPEG XL in production using progressive enhancement via HTML picture elements with source type image/jxl and AVIF or JPEG fallbacks, or by leveraging content negotiation against the Accept: image/jxl request header.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Addy Osmani on X: "Sneak Preview: JPEG XL decoding working in Chrome - 65% smaller than a JPEG at comparable quality. JXL aims to offer better image quality at low sizes, progressive decoding, lossless JPEG recompression and more: https://t.co/sErChStUHZ" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **15 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Addy Osmani on X: "Sneak Preview: JPEG XL decoding working in Chrome - 65% smaller than a JPEG at comparable quality. JXL aims to offer better image quality at low sizes, progressive decoding, lossless JPEG recompression and more: https://t.co/sErChStUHZ" / X](https://twitter.com/addyosmani/status/1379841205098311681?lang=en) — *Twitter / X by @addyosmani (0 likes/RTs, 0 replies)*
- 🐦 [Jyrki Alakuijala 🇺🇦 (@jyzg) on X](https://twitter.com/jyzg/status/1399628849856532482) — *Twitter / X by @jyzg (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [januschka.com](https://www.januschka.com/chromium-jxl-resurrection.html) *(januschka.com)*
  > After removing experimental JPEG XL support in 2022 citing insufficient ecosystem interest, Google reversed course and officially shipped native \*\*JPEG XL (\`image/jxl\`) decoding by default in Blink (Chrome 155)\*\* The pri...
- [Shipping JPEG XL in Chrome \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/jpeg-xl-in-chrome) *(developer.chrome.com)*
  > After removing experimental JPEG XL support in 2022 citing insufficient ecosystem interest, Google reversed course and officially shipped native \*\*JPEG XL (\`image/jxl\`) decoding by default in Blink (Chrome 155)\*\* With \`j...
- [gattyworks.com](https://gattyworks.com/news/chrome-155-jpeg-xl-rust-decoder) *(gattyworks.com)*
  > After removing experimental JPEG XL support in 2022 citing insufficient ecosystem interest, Google reversed course and officially shipped native \*\*JPEG XL (\`image/jxl\`) decoding by default in Blink (Chrome 155)\*\* With \`j...
- [daily.dev](https://daily.dev/posts/jpeg-xl-is-finally-getting-real-cross-browser-support-y58yn4twq) *(daily.dev)*
  > The primary catalyst for this reversal—and for broader cross-browser alignment across Safari, Firefox, and Chromium—was the re-implementation of the decoder in \*\*pure Rust via \`jxl-rs\`\*\* Previously, the official C++ refe...
- [daily.dev](https://daily.dev/posts/SQxIdSuCk) *(daily.dev)*
  > \* \*\*Performance via SIMD:\*\* Memory safety did not compromise speed; the Chrome team built a dedicated SIMD abstraction layer (\`jxl\_simd\`) to ensure that decoding speeds remain competitive with native C++
- [techaiwire.com](https://techaiwire.com/articles/chrome-155-jpeg-xl-enabled-by-default-jxl-rs) *(techaiwire.com)*
  > \* \*\*Performance via SIMD:\*\* Memory safety did not compromise speed; the Chrome team built a dedicated SIMD abstraction layer (\`jxl\_simd\`) to ensure that decoding speeds remain competitive with native C++ \* Reviews benchm...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > Intent to Ship: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to ...

#### 📚 Platform Documentation & References

- [mozilla.org](https://hacks.mozilla.org/2026/08/intent-to-ship-jpeg-xl) *(hacks.mozilla.org)*
- [JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1086) *(github.com)*
- [1539075 - (JPEG-XL) Implement support for JPEG XL (image/jxl)](https://bugzilla.mozilla.org/show_bug.cgi?id=1539075) *(bugzilla.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `jpegxl` on [wpt.fyi](https://wpt.fyi/results?q=feature:jpegxl) (via webstatus.dev) — stable: Chrome 96.9% · Edge 4.6% · Firefox 5.1% · Safari 56.9%; experimental: Chrome 98.5% · Edge 4.6% · Firefox 98.5% · Safari 56.9%

#### 🌐 Web-features Group Context

*group-level data: web-features [`jpegxl`](https://webstatus.dev/features/jpegxl), shared with 2 other ChromeStatus features*

- **Chrome usage:** 0.018% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/418))
- **Mozilla:** neutral ([standards position](https://github.com/mozilla/standards-positions/issues/522))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (67 found across 12 planned queries, 30 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 10 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (7 found, 2 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "jpegxl", shared with 2 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "jpegxl": Chrome 96.9% passing (stable))* · `Sources cited by the AI synthesis` (6 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **High** (footprint 380 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"site github com WebKit standards positions Digital Credentials API"`, `"Digital Credentials API issuance navigator credentials create"`, `"site github com mozilla standards positions digital credentials"`, `"w3c fedid digital credentials API issuance OpenID4VCI"`
- **Analysis:** The Digital Credentials API issuance capability extends the Credential Management API via \`navigator.credentials.create()\` to let issuing authorities securely provision credentials into mobile wallets without relying on fragile custom URI schemes or deep links. While Chromium is leading the rollout with default support backed by Android Credential Manager and cross-device CTAP flows, cross-browser consensus remains fractured. WebKit supports the overarching digital credential specification with cautionary reservations, while Mozilla formally opposes the API over systemic privacy and user agency concerns.

**Key Recommendations & Takeaways:**
- Actionable Advice: Issuing platforms should treat the API strictly as a progressive enhancement behind protocol and feature checks such as \`DigitalCredential.userAgentAllowsProtocol()\`. Teams should keep standard fallback mechanisms active—notably QR-based provisioning and custom deep links—to ensure seamless issuance across Safari, Firefox, and desktop platforms lacking cross-device support.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Update on Venue: https://github.com/w3c/strategy/issues/450  We also made strides on the OpenID / request format...."
- Standards Activity (Mozilla): Latest discussion from @RByers: "Hey Mozilla folks, is there anything you can share here about your position on the use of custom schemes like openid4vp://? Today Firefox allows infor..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **17 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Digital Credentials API](https://github.com/WebKit/standards-positions/issues/332) [closed] `position: support`, `concerns: interoperability`, `concerns: privacy`, `concerns: security`, `venue: WICG`, `concerns: venue`, `from: Google`, `from: Apple`, `concerns: annoyance`
  > *Latest discussion from @marcoscaceres: "Update on Venue: https://github.com/w3c/strategy/issues/450  We also made strides on the OpenID / request format...."*
- **Mozilla:** [Digital Credentials](https://github.com/mozilla/standards-positions/issues/1003) [closed] `position: negative`
  > *Latest discussion from @RByers: "Hey Mozilla folks, is there anything you can share here about your position on the use of custom schemes like openid4vp://? Today Firefox allows infor..."*

#### 📰 Ecosystem Blogs & Articles

- [Digital Credentials API for credential issuance \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-143-issuance-ot) *(developer.chrome.com)*
  > create()\` Historically, issuing institutions (such as motor vehicle departments, banks, or universities) had to rely on custom URI schemes or proprietary deep links to push credentials into mobile wallets
- [credenco.com](https://www.credenco.com/glossary/digital-credentials-api) *(credenco.com)*
  > create()\` Historically, issuing institutions (such as motor vehicle departments, banks, or universities) had to rely on custom URI schemes or proprietary deep links to push credentials into mobile wallets
- [chrome.com](https://developer.chrome.com/blog/digital-credentials-api-143-issuance-ot?hl=fr) *(developer.chrome.com)*
  > create()\` with a structured \`digital\` request payload containing an issuance offer (typically implementing \*\*OpenID4VCI\*\* or ISO/IEC 18013 standards) create({ digital: { requests: \[...\] } })\`
- [youtube.com](https://www.youtube.com/watch?v=pgoaZjYMGJY) *(youtube.com)*
  > \* \*\*On Desktop:\*\* The browser initiates a cross-device flow over the \*\*CTAP/FIDO hybrid protocol\*\*, using a QR code and Bluetooth Low Energy (BLE) proximity checks to route the credential offer securely to the user's mob...
- [chrome.com](https://developer.chrome.com/blog/digital-credentials-cross-device-ot) *(developer.chrome.com)*
  > \* \*\*On Desktop:\*\* The browser initiates a cross-device flow over the \*\*CTAP/FIDO hybrid protocol\*\*, using a QR code and Bluetooth Low Energy (BLE) proximity checks to route the credential offer securely to the user's mob...
- [Online Identity Verification with the Digital Credentials API \| WebKit](https://webkit.org/blog/17431/online-identity-verification-with-the-digital-credentials-api) *(webkit.org)*
  > \* \*\*On Desktop:\*\* The browser initiates a cross-device flow over the \*\*CTAP/FIDO hybrid protocol\*\*, using a QR code and Bluetooth Low Energy (BLE) proximity checks to route the credential offer securely to the user's mob...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Gy-NvwoSODo/m/UYrJvdQ1BwAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Intent to Experiment: Digital Credentials API (issuance support) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent ...
- [\[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14755.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 13 Oct 202...
- [\[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg16897.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Digital Credentials API (issuance support) Chromestatus M...
- [Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14837.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Mike Taylor Sat, 18 ...
- [\[blink-dev\] Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17347.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Chromestatus Wed, 02 Sep 2026 09:44:50 -...

#### 📚 Platform Documentation & References

- [w3.org](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1119) *(tag-github-bot.w3.org)*
- [GitHub - w3c-fedid/digital-credentials: Digital Credentials API · GitHub](https://github.com/w3c-fedid/digital-credentials) *(github.com)*
- [Digital Credentials](https://www.w3.org/TR/digital-credentials) *(w3.org)*
- [w3.org](https://www.w3.org/TR/2025/WD-digital-credentials-20251006) *(w3.org)*
- [digital-credentials/index.html at main · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/blob/main/index.html) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (61 found across 12 planned queries, 25 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 15 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (7 found, 6 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 10

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

- **Momentum:** **High** (footprint 379 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"css margin trim developer reactions"`, `"margin trim css chrome support"`, `"margin trim css wpt webkit firefox"`
- **Analysis:** The margin-trim property provides a declarative mechanism to strip unwanted outer margins from child elements inside block and multi-column containers, resolving a decades-old layout pain point historically patched with negative margins or targeted :last-child resets. Having been confined to Safari since version 16.4, the feature reaches a major milestone with Chromium enabling it by default in Chrome 155. Complete cross-browser baseline status is still pending Gecko implementation, but engine alignment is firmly established in specification and intent.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can begin progressively enhancing layouts with margin-trim using CSS @supports queries for block containers while maintaining fallback margin resets for Firefox users. Developers should also ensure they do not attempt using margin-trim on flex or grid containers, relying instead on standard gap and alignment properties.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Sounds good. Closing without a dashboard entry, as it seems like a minor feature...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Easier Layout with Margin-Trim" (8 points, 1 comments).

#### ⚡ What Happened This Week

- 📰 **16 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Easier Layout with Margin-Trim](https://news.ycombinator.com/item?id=43858089) — *Hacker News (8 pts, 1 comments)*
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
- [margin-trim \| CSS-Tricks](https://css-tricks.com/almanac/properties/m/margin-trim) *(css-tricks.com)*
  > margin-trim \| CSS-Tricks Skip to main content CSS-Tricks Since 2007 CSS Almanac &rarr; Properties &rarr; M &rarr; margin-trim margin-trim Geoff Graham on May 8, 2025 The margin-trim property in CSS removes the additional...
- [chriscoyier.net](https://chriscoyier.net/2023/06/12/margin-trim-as-a-best-practice) *(chriscoyier.net)*
  > The \`margin-trim\` property addresses a decades-old pain point in CSS layout: unwanted excess spacing at container edges caused by child elements retaining their margins Traditionally, developers avoided extra spacing usi...
- [smashingmagazine.com](https://www.smashingmagazine.com/2023/11/few-ways-css-easier-write-2023) *(smashingmagazine.com)*
  > Traditionally, developers avoided extra spacing using negative container margins or targeted resets like \`:last-child { margin-bottom: 0; }\` or \`:not(:last-child)\` Smashing Magazine: \*"A Few Ways CSS Is Easier To Write"\*...
- [margin-trim - CSS: Cascading Style Sheets](https://udn.realityripple.com/docs/Web/CSS/margin-trim) *(udn.realityripple.com)*
  > margin-trim - CSS: Cascading Style Sheets Skip to main content margin-trim On this Page Jump to section Syntax Formal definition Formal syntax Examples Specifications Browser compatibility See also Related topics The mar...
- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > Per the modern CSS Box Model Module Level 4 specification, the property targets \*\*block containers\*\* and \*\*multi-column containers\*\* (support for flex and grid containers was removed from earlier drafts in favor of exist...

#### 🔗 Inbound Citations & Reverse Links

- [CSS Box Model Module Level 4](https://www.w3.org/TR/css-box-4) *(w3.org · 2024-08-04T00:00:00)* *(Cites: `https://drafts.csswg.org/css-box-4/#margin-trim`)*
  > https://www.w3.org/TR/css-box-4/ Editor&#x27;s Draft: https://&lt;strong&gt;drafts.csswg.org/css-box-4&lt;/strong&gt;/ Previous Versions: https://www.w3.org/TR/2020/WD-css-box-4-20200421/ History: https://www.w3.org/standards/histor...
- [\[css-box-4\] margin-trim or trim-margin · Issue #5750 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/5750) *(github.com)* *(Cites: `https://drafts.csswg.org/css-box-4/#margin-trim`)*
  > \[css-box-4\] margin-trim or trim-margin · Issue #5750 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or ...

#### 📚 Platform Documentation & References

- [CSS Box Model Module Level 4](https://www.w3.org/TR/css-box-4) *(w3.org)*
- [\[css-box-4\] margin-trim or trim-margin · Issue #5750 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/5750) *(github.com)*
- [margin-trim CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-trim) *(developer.mozilla.org)*
- [margin-trim CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-trim) *(developer.mozilla.org)*
- [margin-trim CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/web/css/margin-trim) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `margin-trim` on [wpt.fyi](https://wpt.fyi/results?q=feature:margin-trim) (via webstatus.dev) — stable: Chrome 47.2% · Edge 47.2% · Firefox 2.8% · Safari 91.5%; experimental: Chrome 47.2% · Edge 47.2% · Firefox 2.8% · Safari 41.5%

#### 🌐 Web-features Group Context

*group-level data: web-features [`margin-trim`](https://webstatus.dev/features/margin-trim)*

- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/994))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 11 planned queries, 28 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 10 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (6 found, 3 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 1 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (10 found, 10 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "margin-trim", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "margin-trim": Chrome 47.2% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 6 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 4

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

Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document.  - Positional methods (before/after/append/prepend/replaceWith) that take HTML as argument, effectively replacing insertAdjacentHTML. - Streaming methods (stream{Append}HTML{Unsafe}) which return a WritableStream - Passing {runScripts} as part of SetHTMLUnsafeOptions, mimicking createContextualFragment behavior. - Supporting createParserOptions in trusted types, allowing trusted types to override scripting mode and sanitizer.

> **Motivation:** Updating HTML dynamically from script has multiple disjointed API, each with its own subtle differences. Developers can partially update an element using insertAdjacentHTML, use sanitizer with setHTML, execute scripts with createContextualFragment, stream with detached documents.   This can be confusing and frustrating to web developers, as well as...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 370 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""streamHTML" "appendHTML" site:github.com/whatwg/html"`, `""dynamic-markup-revamped-explainer" OR "Renewed HTML insertion" OR "streamAppendHTML""`, `""HTML streaming & revamped DOM parsing" standard positions"`, `""declarative partial updates" "dynamic markup revamped""`
- **Analysis:** The renewed HTML insertion and streaming methods proposal—developed under the WICG Declarative Partial Updates initiative and WHATWG HTML discussions—unifies fragmented legacy DOM APIs into an ergonomic, modern suite of positional and streaming insertion methods like appendHTML and streamAppendHTML. While Chromium has committed to shipping the feature, multi-engine interoperability is still maturing as the specification progresses through standardisation bodies. Ecosystem perception is enthusiastic, particularly for how native WritableStream integration and consistent sanitizer controls simplify dynamic HTML updates without heavy framework runtimes.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams should experiment with the API behind flags or via official polyfills from GoogleChromeLabs to test native HTML streaming pipelines. However, production architectures should rely on runtime feature detection and fallback to setHTMLUnsafe or insertAdjacentHTML until broad multi-engine support lands across Safari and Firefox.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @o-t-w: "This feature is due to ship in \[Chrome 154\](https://developer.chrome.com/blog/chrome-154-beta?hl=en#renewed\_html\_insertion\_and\_streaming\_methods). Moz..."
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **23 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [HTML streaming & revamped DOM parsing](https://github.com/WebKit/standards-positions/issues/629) [open] `topic: html`, `venue: WHATWG HTML Workstream`, `from: Google`
  > *Latest discussion from @o-t-w: "This feature is due to ship in \[Chrome 154\](https://developer.chrome.com/blog/chrome-154-beta?hl=en#renewed\_html\_insertion\_and\_streaming\_methods). Moz..."*
- **Mozilla:** [HTML streaming & revamped DOM parsing](https://github.com/mozilla/standards-positions/issues/1370) [closed] `venue: WHATWG`, `position: positive`, `topic: API`
  > *Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."*

#### 📰 Ecosystem Blogs & Articles

- [daily.dev](https://daily.dev/posts/declarative-partial-updates-5buxplifg) *(daily.dev)*
  > The \*\*“Renewed HTML insertion & streaming methods”\*\* proposal (developed as a core JavaScript pillar of the broader \*\*Declarative Partial Updates\*\* initiative) modernizes how developers insert markup into live web pages ...
- [Declarative partial updates \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/declarative-partial-updates) *(developer.chrome.com)*
  > Atualizações parciais declarativas \| Web Platform \| Chrome for Developers Ir para o conteúdo principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Vi...
- [freecodecamp.org](https://www.freecodecamp.org/news/how-declarative-partial-updates-work-in-html) *(freecodecamp.org)*
  > \*\*Positional HTML Methods (Replacing \`insertAdjacentHTML\`)\*\*: Instead of obscure position strings (\`'beforebegin'\`, \`'afterbegin'\`, \`'beforeend'\`, \`'afterend'\`), elements gain intuitive DOM-aligned methods \*\*Positional H...
- [css-tricks.com](https://css-tricks.com/comparing-methods-for-appending-and-inserting-with-javascript) *(css-tricks.com)*
  > \*\*Positional HTML Methods (Replacing \`insertAdjacentHTML\`)\*\*: Instead of obscure position strings (\`'beforebegin'\`, \`'afterbegin'\`, \`'beforeend'\`, \`'afterend'\`), elements gain intuitive DOM-aligned methods
- [substack.com](https://modernwebweekly.substack.com/p/out-of-order-streaming-html-is-coming) *(modernwebweekly.substack.com)*
  > \*\*Positional HTML Methods (Replacing \`insertAdjacentHTML\`)\*\*: Instead of obscure position strings (\`'beforebegin'\`, \`'afterbegin'\`, \`'beforeend'\`, \`'afterend'\`), elements gain intuitive DOM-aligned methods: \* \`appendHTML...
- [Streaming HTML - Ollie Williams](https://olliewilliams.xyz/blog/streaming-html) *(olliewilliams.xyz)*
  > \*\*Native Streaming Methods Returning a \`WritableStream\`\*\*: Pairs each positional method with a streaming counterpart: \* \`streamHTML()\`, \`streamAppendHTML()\`, \`streamPrependHTML()\`, \`streamBeforeHTML()\`, \`streamAfterHTML(...

#### 🔗 Inbound Citations & Reverse Links

- [Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30463) *(github.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance...
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com · 2026-06-17T18:03:04)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with...
- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, ...
- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700...

#### 📚 Platform Documentation & References

- [Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30463) *(github.com)*
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com)*
- [Coherent story for HTML-setting methods · Issue #11669 · whatwg/html](https://github.com/whatwg/html/issues/11669) *(github.com)*
- [GitHub - GoogleChromeLabs/html-setters-polyfill · GitHub](https://github.com/GoogleChromeLabs/html-setters-polyfill) *(github.com)*
- [Patching and HTML Streaming methods · Issue #1471 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1471) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `domparser` on [wpt.fyi](https://wpt.fyi/results?q=feature:domparser) (via webstatus.dev) — stable: Chrome 90% · Edge 85% · Firefox 95% · Safari 80%; experimental: Chrome 90% · Edge 90% · Firefox 95% · Safari 90%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 11 planned queries, 21 verified) · `Google Search Grounding (gemini-3.8-flash)` (16 found, 13 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "domparser", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "domparser": Chrome 90% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 6

---

<a id="5078190552907776-webaudio-configurable-render-quantum"></a>
### [WebAudio: Configurable render quantum](https://chromestatus.com/feature/5078190552907776)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5078190552907776](https://chromestatus.com/feature/5078190552907776) · [chromestatuslite.com/feature/5078190552907776](https://chromestatuslite.com/feature/5078190552907776)
- **Specification:** [https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize)
- **Chromium Bug:** [https://crbug.com/40637820](https://crbug.com/40637820)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/web-audio) (Chrome: `35`, Firefox: `25`, Safari: `14.1`) · *group-level data: web-features [`web-audio`](https://webstatus.dev/features/web-audio), shared with 54 other ChromeStatus features*

#### 📝 Overview

Adds an optional renderSizeHint to AudioContext and OfflineAudioContext. This allows developers to customize the WebAudio render quantum size by passing a specific integer, use the default of 128 frames by omitting the hint or passing "default", or request that the User-Agent select an optimal size by specifying "hardware".

> **Motivation:** It is difficult and complex to write a web app when the audio processing block size does not match with the WebAudio render quantum size (128 sample-frames). Removing this restriction and making it customizable on AudioContext would enable easier development and more efficient audio processing.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 360 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Configurable render quantum" webkit standards-positions mozilla standards-positions"`, `""WebAudio" "renderSizeHint" OR "renderQuantumSize" OR "Configurable render quantum""`
- **Analysis:** The configurable render quantum feature in Web Audio officially shipped enabled by default in Chrome 153 following earlier origin trials, resolving a long-standing architectural constraint of the fixed 128-frame processing block. While the specification in the W3C Web Audio API 1.1 working draft was co-developed with key engine contributors, Chromium is currently the sole shipping engine. Developers view the addition as a major architectural leap for low-latency web DAWs, synthesizers, and WebRTC engines, but cross-browser parity remains incomplete.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audio teams should adopt renderSizeHint via progressive enhancement by passing their target block size or 'hardware' during context initialization, while querying context.renderQuantumSize (defaulting to 128) to adjust their DSP processing loop dynamically. Production pipelines must maintain existing 128-frame ring buffer fallbacks until Safari and Firefox implement the interface.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **16 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [WebAudio Configurable Render Quantum](https://github.com/WebKit/standards-positions/issues/662) [open] 
- **Mozilla:** [WebAudio Configurable Render Quantum](https://github.com/mozilla/standards-positions/issues/1407) [open] `venue: W3C`, `topic: API`

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/release-notes/153) *(developer.chrome.com)*
  > The \*\*"WebAudio: Configurable render quantum"\*\* feature introduces an optional \`renderSizeHint\` option to the \`AudioContext\` and \`OfflineAudioContext\` constructors \* \*\*Stable Shipping in Chrome 153\*\*: The feature officia...
- [chrome.com](https://developer.chrome.com/blog/chrome-145-beta) *(developer.chrome.com)*
  > \* \*\*Chrome for Developers (developer.chrome.com) & Microsoft Edge Release Notes\*\*: \* \*\*Origin Trial\*\*: Chromium began testing configurable render quantums behind an origin trial starting in \*\*Chrome 145\*\* / Edge 146
- [Microsoft Edge 146 web platform release notes (Mar. 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/146) *(learn.microsoft.com)*
  > \* \*\*Chrome for Developers (developer.chrome.com) & Microsoft Edge Release Notes\*\*: \* \*\*Origin Trial\*\*: Chromium began testing configurable render quantums behind an origin trial starting in \*\*Chrome 145\*\* / Edge 146
- [plasticsynth.com](https://plasticsynth.com/news/web-audio-render-size-hint) *(plasticsynth.com)*
  > \* \*\*Stable Shipping in Chrome 153\*\*: The feature officially shipped enabled by default in \*\*Chrome 153\*\* \* \*\*PlasticSynth Developer Blog\*\*: \* Covered the practical benefits for browser-based modular synths and DSP plugin...
- [chrome.com](https://developer.chrome.com/blog/chrome-153-beta) *(developer.chrome.com)*
  > The release notes emphasize that developers building real-time communication tools, web synths, and web DAWs can eliminate internal buffer adapters and lower round-trip audio latency
- [webkit.org](https://results.webkit.org/commit?repository_id=webkit&id=318926%40main) *(results.webkit.org)*
  > \* Cross-browser test suites were submitted to \*\*Web Platform Tests (WPT)\*\* (\`audiocontext-rendersizehint\`), ensuring consistent behavior across implementations

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Extend Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/MlLqosTB0cQ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5078190552907776`)*
  > Intent to Extend Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Inten...
- [Intent to Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/j7Wf7bA_qOY) *(groups.google.com · 2026-01-21T00:00:00)* *(Cites: `https://chromestatus.com/feature/5078190552907776`)*
  > Intent to Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ex...

#### 📚 Platform Documentation & References

- [WebAudio Configurable Render Quantum · Issue #662 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/662) *(github.com)*
- [Web Audio API 1.1](https://www.w3.org/TR/webaudio-1.1) *(w3.org)*
- [github.com](https://github.com/mozilla/standards-positions/issues/1407) *(github.com)*
- [TPAC 2025: Audio WG update](https://www.w3.org/2025/11/TPAC/demo-audio-wg-update.html) *(w3.org)*
- [Allow user-selectable render quantum size · Issue #13 · WebAudio/web-audio-api-v2](https://github.com/WebAudio/web-audio-api-v2/issues/13) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `web-audio` on [wpt.fyi](https://wpt.fyi/results?q=feature:web-audio) (via webstatus.dev) — stable: Chrome 93.6% · Edge 94% · Firefox 72.1% · Safari 84.9%; experimental: Chrome 96% · Edge 94% · Firefox 72.1% · Safari 90.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`web-audio`](https://webstatus.dev/features/web-audio), shared with 54 other ChromeStatus features*

- **Chrome usage:** 0.057% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/150))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (59 found across 11 planned queries, 23 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 10 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "web-audio", shared with 54 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "web-audio": Chrome 93.6% passing (stable))* · `Sources cited by the AI synthesis` (8 found, 8 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5194817700364288-optional-browser-optimization-for-service-workers"></a>
### [Optional browser optimization for Service Workers](https://chromestatus.com/feature/5194817700364288)

- **Milestone:** Chrome 154 (Stepped rollout)
- **ChromeStatus:** [chromestatus.com/feature/5194817700364288](https://chromestatus.com/feature/5194817700364288) · [chromestatuslite.com/feature/5194817700364288](https://chromestatuslite.com/feature/5194817700364288)
- **Specification:** [https://github.com/w3c/ServiceWorker/pull/1756](https://github.com/w3c/ServiceWorker/pull/1756)
- **Chromium Bug:** [https://crbug.com/40278676](https://crbug.com/40278676)
- **Browser Signals:** Chrome: `Stepped rollout` · Firefox: `Positive` · Safari: `No signal`

#### 📝 Overview

Chrome 154 includes an optional browser optimization mode that changes existing service worker behavior. In ServiceWorkerAutoPreload mode, the browser issues the network request in parallel with the service worker bootstrap.   If the \`fetch\` handler returns the response with \`respondWith()\`, the browser consumes the network request result inside the \`fetch\` handler. If the \`fetch\` handler result is fallback, it passes the network response directly to the browser.   Admins can control this feature using an enterprise policy called \[ServiceWorkerAutoPreloadEnabled\](https://chromeenterprise.google/policies/#ServiceWorkerAutoPreloadEnabled).

> **Motivation:** The ServiceWorker’s fetch handling capability allows developers to intercept and control the resource fetch requests via “fetch” event handler. This enables web apps to be reliable even while offline and delivers faster loading experiences by using its own CacheStorage. However, the cost of starting up a ServiceWorker can be non-negligible. Service...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 330 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Optional browser optimization for Service Workers""`, `""ServiceWorkerAutoPreload" site:github.com"`, `""ServiceWorkerAutoPreload" Chrome"`
- **Analysis:** ServiceWorkerAutoPreload is an engine-level optimization introduced to eliminate startup latency by dispatching network navigation requests concurrently with Service Worker boot. Having formally integrated into the W3C Service Worker specification, Chromium-based browsers like Chrome and Edge are rolling it out broadly with enterprise policy fallback controls. Developer reception is cautiously welcoming because it delivers automated navigation preload without boilerplate code, though edge cases around extra network traffic and test runners have surfaced.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams do not need to rewrite fetch handlers since compliant implementations transparently adopt the preloaded network response, but sites requiring strict cache-only responses should adopt the Service Worker Static Routing API to prevent unintended background network requests. QA teams should verify test harnesses and authentication redirects against parallel worker startup to confirm lack of session interference.
- Standards Activity (WebKit): Latest discussion from @sisidovski: "&gt; How does this avoid potential problems with the main document and service worker having different policies in place? E.g., you might end up preloadi..."
- Standards Activity (Mozilla): Latest discussion from @asutherland: "This is somewhat moot since https://github.com/w3c/ServiceWorker/pull/1756 merged into the spec in late July with feedback from webkit in addition to ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **26 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [ServiceWorkerAutoPreload](https://github.com/WebKit/standards-positions/issues/359) [open] `topic: service workers`
  > *Latest discussion from @sisidovski: "&gt; How does this avoid potential problems with the main document and service worker having different policies in place? E.g., you might end up preloadi..."*
- **Mozilla:** [ServiceWorkerAutoPreload](https://github.com/mozilla/standards-positions/issues/1036) [closed] `position: positive`, `team: DOM`
  > *Latest discussion from @asutherland: "This is somewhat moot since https://github.com/w3c/ServiceWorker/pull/1756 merged into the spec in late July with feedback from webkit in addition to ..."*

#### 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/serviceworkerautopreloadenabled) *(learn.microsoft.com)*
  > \* \*\*The Mechanism:\*\* With \`ServiceWorkerAutoPreload\`, the browser automatically dispatches the network navigation request in parallel with booting the worker process
- [ServiceWorkerAutoPreloadEnabled: Allow ServiceWorker to dispatch navigation requests without waiting for its startup \| Chrome Enterprise](https://chromeenterprise.google/policies/service-worker-auto-preload-enabled) *(chromeenterprise.google)*
  > \* \*\*Enterprise Control:\*\* Enterprise administrators have an opt-out policy named \`ServiceWorkerAutoPreloadEnabled\` (introduced to help administrators test compatibility before full retirement in later milestones such as ...
- [google.com](https://support.google.com/chrome/a/answer/10314655?hl=en-t) *(support.google.com)*
  > Chrome Platform Status & Release Documentation \* \*\*Source:\*\* \*Chrome Platform Status ("Optional browser optimization for Service Workers")\* and \*Chrome Enterprise Release Notes\*
- [n1fo.fr](https://www.n1fo.fr/telechargements/navigateurs-internet/google-chrome) *(n1fo.fr)*
  > \* \*\*Overview:\*\* Documents the transition of \`ServiceWorkerAutoPreload\` from developer trials to stepped general rollout
- [winaero.com](https://winaero.com/chrome-154-brings-new-ai-features-stronger-network-protections-and-108-security-fixes) *(winaero.com)*
  > \* Tech blogs (such as \*Winaero\* and various Chromium tracking publications) and enterprise release channels have highlighted this feature as a milestone toward resolving the longstanding "service worker startup tax" on s...
- [Intent to Ship: ServiceWorkerAutoPreload](https://groups.google.com/a/chromium.org/g/blink-dev/c/7UYEFRdEg-g/m/tktPeve2AgAJ) *(groups.google.com)*
  > Intent to Ship: ServiceWorkerAutoPreload Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: ServiceWorkerAu...

#### 🔗 Inbound Citations & Reverse Links

- [Optional browser optimization for Service Workers (ServiceWorkerAutoPreload) · Issue #32 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/32) *(github.com · 2026-09-14T08:09:53)* *(Cites: `https://chromestatus.com/feature/5194817700364288`)*
  > Optional browser optimization for Service Workers (ServiceWorkerAutoPreload) · Issue #32 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up App...
- [Intent to Ship: ServiceWorkerAutoPreload](https://groups.google.com/a/chromium.org/g/blink-dev/c/7UYEFRdEg-g/m/tktPeve2AgAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5194817700364288`)*
  > Intent to Ship: ServiceWorkerAutoPreload Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: ServiceWorkerAu...
- [Intent to Experiment: ServiceWorkerAutoPreload](https://groups.google.com/a/chromium.org/g/blink-dev/c/AkA4s1_R8H4) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5194817700364288`)*
  > Intent to Experiment: ServiceWorkerAutoPreload Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Ser...
- [Microsoft Edge Browser Policy Documentation ServiceWorkerAutoPreloadEnabled \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-browser-policies/serviceworkerautopreloadenabled) *(learn.microsoft.com)* *(Cites: `https://github.com/WICG/service-worker-auto-preload`)*
  > Microsoft Edge Browser Policy Documentation ServiceWorkerAutoPreloadEnabled \| Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take ...
- [Service Worker Auto Preload feature in incubation from Chris Wilson on 2025-05-20 (public-new-work@w3.org from May 2025)](https://lists.w3.org/Archives/Public/public-new-work/2025May/0008.html) *(lists.w3.org)* *(Cites: `https://github.com/WICG/service-worker-auto-preload`)*
  > Per https://github.com/WICG/proposals/issues/155 has been adopted into WICG: https://&lt;strong&gt;github.com/WICG/service-worker-auto-preload&lt;/strong&gt;/.

#### 📚 Platform Documentation & References

- [github.com](https://github.com/w3c/ServiceWorker/issues/1787) *(github.com)*
- [w3.org](https://www.w3.org/2024/Talks/TPAC/breakouts/sw-for-performance.pdf) *(w3.org)*
- [ServiceWorkerAutoPreload · Issue #359 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/359) *(github.com)*
- [Optional browser optimization for Service Workers (ServiceWorkerAutoPreload) · Issue #32 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/32) *(github.com)*
- [Service Worker Auto Preload feature in incubation from Chris Wilson on 2025-05-20 (public-new-work@w3.org from May 2025)](https://lists.w3.org/Archives/Public/public-new-work/2025May/0008.html) *(lists.w3.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 12 planned queries, 24 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 8 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (6 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 3

---

<a id="5076349064708096-deprecate-and-remove-shared-storage-api"></a>
### [Deprecate and Remove: Shared Storage API](https://chromestatus.com/feature/5076349064708096)

- **Milestone:** Chrome 153 (Deprecated)
- **ChromeStatus:** [chromestatus.com/feature/5076349064708096](https://chromestatus.com/feature/5076349064708096) · [chromestatuslite.com/feature/5076349064708096](https://chromestatuslite.com/feature/5076349064708096)
- **Specification:** [https://wicg.github.io/shared-storage](https://wicg.github.io/shared-storage)
- **Chromium Bug:** [https://issues.chromium.org/issues/462465887](https://issues.chromium.org/issues/462465887)
- **Browser Signals:** Chrome: `Deprecated` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The Shared Storage API is a privacy-preserving web API to enable storage that is not partitioned by first-party site.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Shared Storage API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).  \[0\]: https://privacysandbox.com/news/privacy-sandbox-next-steps/

> **Motivation:** Chrome has announced that the current approach to third-party cookies will be maintained. Given this, we expect adoption to decrease over time (currently at ~11% of page loads) as the main use cases for Shared Storage will remain possible in Chrome using third-party cookies. Further, other browser engines have not signaled interest in launching the...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 320 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Shared Storage" privacy sandbox deprecation chrome status"`, `""Shared Storage API" deprecate remove chrome"`, `""webkit" "shared storage" standards-positions"`
- **Analysis:** Following Google's decision to preserve user-choice third-party cookies rather than deprecating them outright, Chrome has slated the Shared Storage API for formal deprecation and removal starting in Chrome 153. The API operated exclusively within Chromium as part of the Privacy Sandbox suite, never establishing cross-browser interoperability or gaining traction beyond ad-tech pilots. With low standalone utility and fading ecosystem adoption, Chrome is dismantling the storage worklet infrastructure and aligning its storage architecture back toward standard models.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should audit their client-side bundles and third-party scripts to purge references to the \`sharedStorage\` interface and associated worklets before full engine removal triggers runtime exceptions. For authenticated cross-origin embedded contexts, teams should rely on standardized storage partitioning rules and the Storage Access API rather than non-standard Privacy Sandbox worklets.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **20 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/release-notes/153) *(developer.chrome.com)*
  > Following Google’s reversal of its plan to phase out third-party cookies by default, Chrome formally initiated plans to \*\*deprecate and remove the Shared Storage API\*\* (alongside associated APIs such as Private Aggregati...
- [Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com hidekazu-konishi.com https://hidekazu-k...
- [google.com](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com)*
  > Following Google’s reversal of its plan to phase out third-party cookies by default, Chrome formally initiated plans to \*\*deprecate and remove the Shared Storage API\*\* (alongside associated APIs such as Private Aggregati...
- [secureprivacy.ai](https://secureprivacy.ai/blog/google-killed-privacy-sandbox-what-changes-for-cookie-consent-in-2026) *(secureprivacy.ai)*
  > Chrome and Blink developers confirmed that maintaining these custom storage worklets without third-party cookie phaseout offered low utility relative to their complexity and ecosystem adoption The decision to remove the ...
- [arxiv.org](https://arxiv.org/pdf/2606.26390) *(arxiv.org)*
  > Chrome for Developers & Chrome Platform Status \* \*\*Intent and Tracking Status:\*\* Filed under Chromium Issue \`#462465887\` and tracked on Chrome Platform Status as \*Deprecate and Remove: Shared Storage API\*
- [chromestatus.com](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > \* The release notes reiterate that the API is scheduled for complete removal in alignment with the broader retirement of Privacy Sandbox ad-targeting primitives

#### 🔗 Inbound Citations & Reverse Links

- [Intent To Deprecate and Remove: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > Intent To Deprecate and Remove: Shared Storage API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent To Deprecate a...
- [\[Google Privacy Sandbox\] Chrome 152 removed Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30659) *(github.com)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > \[Google Privacy Sandbox\] Chrome 152 stubbed out Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign...

#### 📚 Platform Documentation & References

- [Shared Storage API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Shared_Storage_API) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/SharedStorage) *(developer.mozilla.org)*
- [Privacy sandbox - Privacy on the web - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Privacy_sandbox) *(developer.mozilla.org)*
- [\[Google Privacy Sandbox\] Chrome 152 removed Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30659) *(github.com)*
- [SharedStorageWorklet - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/SharedStorageWorklet) *(developer.mozilla.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 11 planned queries, 22 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 12 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (7 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **High** (footprint 300 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** Additional Windowing Controls expands the Window Management API with programmatic window state methods and CSS media features tailored primarily for enterprise Virtual Desktop Infrastructure (VDI) and desktop Progressive Web Apps. The API is shipping enabled-by-default in Chromium-based browsers such as Chrome and Microsoft Edge, but it remains a single-engine capability with zero cross-browser interoperability. While welcomed by specialized remote-desktop vendors, non-Chromium browser engines remain unaligned due to long-standing user experience and privacy reservations.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat this API strictly as an optional progressive enhancement for installed desktop PWAs and enterprise VDI web applications targeting Chromium environments. Applications must guard calls with feature detection for window methods, check the window-management permission, and avoid coupling core UI functionality to display-state media queries.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @sonkkeli: "Hey, I'm jumping in here as I'm continuing on Ivan's work.  There were some updates made on the proposed APIs and the current proposals are at least a..."
- Standards Activity (Mozilla): Latest discussion from @michaelwasserman: "Client application window controls may indeed be limited by the OS, Window Manager, protocols, utilities, and modalities. The API surface offers coher..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Additional Windowing Controls](https://github.com/WebKit/standards-positions/issues/96) [open] `concerns: privacy`, `topic: app-like capabilities`, `concerns: integration`, `venue: none / personal repository`, `from: Google`, `concerns: annoyance`
  > *Latest discussion from @sonkkeli: "Hey, I'm jumping in here as I'm continuing on Ivan's work.  There were some updates made on the proposed APIs and the current proposals are at least a..."*
- **Mozilla:** [Additional Windowing Controls](https://github.com/mozilla/standards-positions/issues/712) [open] 
  > *Latest discussion from @michaelwasserman: "Client application window controls may indeed be limited by the OS, Window Manager, protocols, utilities, and modalities. The API surface offers coher..."*
- **W3C TAG:** [WG New Spec: Additional Windowing Controls](https://github.com/w3ctag/design-reviews/issues/1246) [open] `Review type: horizontal review`
  > *Latest discussion from @patrykchodur: "Reopening the issue..."*

#### 📰 Ecosystem Blogs & Articles

- [googlesource.com](https://chromium.googlesource.com/experimental/chromium/src/+/refs/heads/main/chrome/browser/flag_descriptions.h) *(chromium.googlesource.com)*
  > The \*\*Additional Windowing Controls (AWC)\*\* feature extends the \*\*Window Management API\*\* to give installed Progressive Web Apps (PWAs) and enterprise web applications native-like control over OS window states
- [chromium.org](https://issues.chromium.org/issues/543983519) *(issues.chromium.org)*
  > These methods typically require transient user activation to avoid unprompted window manipulations moveTo()\`), emphasizing the need for strict permission gating and transient activation guarantees
- [Chrome 155 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > Official Browser Announcements (\`developer.chrome.com\` & Microsoft Edge) \* \*\*Chrome Platform Status & Chrome 155 Beta Announcements:\*\* The feature graduated through dev trials and origin trials before shipping enabled-by...
- [microsoft.com](https://learn.microsoft.com/ga-ie/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > \* \*\*Microsoft Edge 155 Web Platform Release Notes:\*\* Edge officially included support for the Additional Windowing Controls, adopting both the JS methods under the \`window-management\` permission and the accompanying CSS ...
- [ecosyste.ms](https://issues.ecosyste.ms/hosts/GitHub/repositories/w3c%2Fcsswg-drafts/issues) *(issues.ecosyste.ms)*
  > \* \*\*CSS Working Group (CSSWG Media Queries Level 5 – Issue #14428):\*\* Discussion within the CSSWG focused on separating the introspection aspect from the JavaScript API By standardizing \`display-state\` and \`resizable\` di...
- [web.dev](https://web.dev/articles/window-controls-overlay) *(web.dev)*
  > By standardizing \`display-state\` and \`resizable\` directly in Media Queries Level 5, authors avoid polling window dimensions via JavaScript, allowing apps paired with the \*\*Window Controls Overlay (WCO)\*\* API to toggle ma...

#### 🔗 Inbound Citations & Reverse Links

- [Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4257) *(github.com · 2026-08-20T17:00:48)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab ...
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with a...
- [\[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17394.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md`)*
  > \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Additional Windowing Controls Chromestatus Tue, 08 Sep 2026 23:04:36 -0700 Contact emails \[email...
- [\[blink-dev\] Re: Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17441.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md`)*
  > \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Vladimir Levin Mon, 14 Sep 2026 08:57:02 -0700 LGTM1 On We...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17442.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md`)*
  > Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Chris Harrelson Mon, 14 Sep 2026 09:14:30 -0700 LGTM2 On T...

#### 📚 Platform Documentation & References

- [Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1364) *(github.com)*
- [Additional Windowing Controls · Issue #96 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/96) *(github.com)*
- [w3.org](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1246) *(tag-github-bot.w3.org)*
- [w3.org](https://lists.w3.org/Archives/Public/public-css-archive/2026Sep/0052.html) *(lists.w3.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Window/setResizable) *(developer.mozilla.org)*

#### 🧪 Interactive Demos & Samples

- [Additional Windowing Controls Demo](https://awc-demo-4a08a808.web.app)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `window-management` on [wpt.fyi](https://wpt.fyi/results?q=feature:window-management) (via webstatus.dev) — stable: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%

#### 🌐 Web-features Group Context

*group-level data: web-features [`window-management`](https://webstatus.dev/features/window-management), shared with 6 other ChromeStatus features*

- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/332))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (60 found across 12 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 14 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "window-management", shared with 6 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "window-management": Chrome 100% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 12

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

- **Momentum:** **Moderate** (footprint 280 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebRTC Diagnostic Logging API" webkit standards-positions"`, `""WebRTC Diagnostic Logging API" OR "WebRTC Diagnostic Logging" mozilla standards position"`
- **Analysis:** The WebRTC Diagnostic Logging API introduces programmatic controls for capturing internal WebRTC diagnostic logs and reporting them for browser bug triage or local debugging. While Chromium is shipping the feature enabled by default in Chrome 156 under enterprise policy management, it remains a vendor-isolated initiative without cross-browser consensus. Other major engines have not implemented the API, leaving it largely as a Chromium-centric enterprise tool.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat this API strictly as an optional progressive enhancement for managed enterprise environments running Chromium-based browsers. For production diagnostics across the broader web, teams should continue relying on standardized RTCPeerConnection stats collection and custom client-side telemetry.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "I think those are pretty weak use cases for adding a web API.  &gt; \* An organization has a custom WebRTC deployment and they want to analyze logs at sca..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **14 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [WebRTC Diagnostic Logging](https://github.com/WebKit/standards-positions/issues/699) [open] 
- **Mozilla:** [WebRTC Diagnostic Logging](https://github.com/mozilla/standards-positions/issues/1436) [open] `venue: W3C CG`, `concerns: privacy`, `concerns: API design`, `topic: API`
  > *Latest discussion from @zcorpan: "I think those are pretty weak use cases for adding a web API.  &gt; \* An organization has a custom WebRTC deployment and they want to analyze logs at sca..."*

#### 📰 Ecosystem Blogs & Articles

- [WebRTC Diagnostic Logging API](https://wicg.github.io/webrtc-diagnostic-logging) *(wicg.github.io)*
  > The \*\*WebRTC Diagnostic Logging API\*\* is a Web Platform incubator specification (under WICG) that introduces programmatic controls to trigger internal WebRTC diagnostic data collection on the browser \* \*\*Core Functionali...
- [webrtcweekly.com](https://webrtcweekly.com/p/webrtc-weekly-issue-646) *(webrtcweekly.com)*
  > \* \*\*The Problem It Solves:\*\* Historically, diagnosing complex real-time media or connection failures required end users or QA testers to manually open \`chrome://webrtc-internals\`, start recording dumps, and export JSON/e...
- [Debugging WebRTC in the browsers \| WebRTC for Developers](https://www.webrtc-developers.com/debugging-webrtc-in-the-browsers) *(webrtc-developers.com)*
  > \* \*\*The Problem It Solves:\*\* Historically, diagnosing complex real-time media or connection failures required end users or QA testers to manually open \`chrome://webrtc-internals\`, start recording dumps, and export JSON/e...
- [chrome.com](https://developer.chrome.com/release-notes/150) *(developer.chrome.com)*
  > Instead, logs are handled out-of-band by the browser runtime, stored in user-controlled storage, or uploaded to the browser vendor \* \*\*Enterprise Control:\*\* Administrators can restrict or permit log collection on a per-o...
- [google.com](https://support.google.com/chrome/a/answer/10314655?hl=en-eu) *(support.google.com)*
  > \* \*\*Enterprise Control:\*\* Administrators can restrict or permit log collection on a per-origin basis using the enterprise policy \`WebRtcDiagnosticLogCollectionAllowedForOrigins\` google\`) \* \*\*Enterprise Policy Announcemen...
- [chromestatus.com](https://chromestatus.com/feature/5091582546149376?gate=6245176267898880) *(chromestatus.com)*
  > Chromium Platform Status & Release Announcements (\`developer.chrome.com\`) \* \*\*Chrome Platform Status & Origin Trials:\*\* Google detailed the API’s roadmap and origin trials (tested from Chrome 150 onward, targeting genera...

#### 🔗 Inbound Citations & Reverse Links

- [WebRTC Diagnostic Logging API · Issue #1343 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1343) *(github.com · 2026-08-14T17:31:56)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > WebRTC Diagnostic Logging API · Issue #1343 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anot...
- [Chrome 156 adds WebRTC diagnostic logging by Elchi3 · Pull Request #30812 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30812) *(github.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > Chrome 156 adds WebRTC diagnostic logging by Elchi3 · Pull Request #30812 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You si...
- [Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17638.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API 'Ashley Newson' via blink-dev Thu, 01 Oct 2026 08:14:25 -0...
- [Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30757) *(github.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > api.RTCPeerConnection.cancelDiagnosticLogging\_static (https://&lt;strong&gt;chromestatus.com/feature/5091582546149376&lt;/strong&gt;)
- [\[blink-dev\] Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16832.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webrtc-diagnostic-logging/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: WebRTC Diagnostic Logging API Chromestatus Tue, 23 Jun 2026 08:58:45 -0700 Contact e...

#### 📚 Platform Documentation & References

- [WebRTC Diagnostic Logging API · Issue #1343 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1343) *(github.com)*
- [Chrome 156 adds WebRTC diagnostic logging by Elchi3 · Pull Request #30812 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30812) *(github.com)*
- [Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30757) *(github.com)*
- [WebRTC Diagnostic Logging · Issue #1436 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1436) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webrtc` on [wpt.fyi](https://wpt.fyi/results?q=feature:webrtc) (via webstatus.dev) — stable: Chrome 73% · Edge 73.4% · Firefox 76.1% · Safari 71.8%; experimental: Chrome 73.4% · Edge 73.8% · Firefox 84.9% · Safari 74.6%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 12 planned queries, 16 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 10 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webrtc", shared with 66 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webrtc": Chrome 73% passing (stable))* · `Sources cited by the AI synthesis` (2 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

---

<a id="5108373464547328-responsively-sized-iframe"></a>
### [Responsively-sized &lt;iframe&gt;](https://chromestatus.com/feature/5108373464547328)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5108373464547328](https://chromestatus.com/feature/5108373464547328) · [chromestatuslite.com/feature/5108373464547328](https://chromestatuslite.com/feature/5108373464547328)
- **Specification:** [https://drafts.csswg.org/css-sizing-4/#responsive-iframes](https://drafts.csswg.org/css-sizing-4/#responsive-iframes)
- **Chromium Bug:** [https://issues.chromium.org/issues/418397278](https://issues.chromium.org/issues/418397278)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Allow sites to opt into iframes having responsive sizing (sizing the &lt;iframe&gt; element in the parent document to the iframe document's layout overflow sizing, so that scrolling in the child document is avoided).

> **Motivation:** This is a natural feature to have for iframes, when the site wants to render the iframe content so that it looks seamless with the parent frame and avoids scrollbars.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 275 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""responsively-sized iframes" OR "frame-sizing" csswg"`, `""frame-sizing" iframe css box sizing level 4"`, `""responsively-sized iframes" webkit mozilla standards positions"`, `""responsively-sized iframes" "chrome""`
- **Analysis:** Responsively-sized iframes, standardized under CSS Box Sizing Module Level 4 via the 'frame-sizing' property and a paired meta tag opt-in, have shipped enabled by default in Chromium browsers as of version 154. The feature solves long-standing iframe layout clipping issues by natively negotiating intrinsic dimensions without script-heavy postMessage bridges. However, the capability remains limited to Chromium while standards review and multi-engine alignment proceed across other browser vendors.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt the feature progressively by guarding 'frame-sizing' rules behind CSS feature queries (@supports) while preserving established postMessage or ResizeObserver fallback workflows for non-Chromium browsers. Teams embedding dynamic content should ensure embedded documents implement the responsive-embedded-sizing meta tag and trigger window.requestResize() when internal layouts change.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "For context, a lot of the discussions here:   \* https://github.com/w3c/csswg-drafts/issues/1771  \* https://github.com/w3c/csswg-drafts/issues/13584  \*..."
- Standards Activity (W3C TAG): Latest discussion from @dandclark: "Thanks for sending this to the TAG! We had a few points of feedback.  One is that the opt-in from the iframe isn't scoped in any way. The explainer \[p..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **14 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/status/2102804599325528424) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Responsively-sized iframes](https://github.com/WebKit/standards-positions/issues/653) [open] `venue: W3C CSS WG`, `topic: frames`, `from: Google`
- **Mozilla:** [Responsively-sized iframes](https://github.com/mozilla/standards-positions/issues/1394) [open] 
  > *Latest discussion from @emilio: "For context, a lot of the discussions here:   \* https://github.com/w3c/csswg-drafts/issues/1771  \* https://github.com/w3c/csswg-drafts/issues/13584  \*..."*
- **W3C TAG:** [Other Spec Review: Responsively-sized iframes](https://github.com/w3ctag/design-reviews/issues/1223) [open] `Progress: pending external feedback`, `Review type: later review`, `Topic: CSS`, `Venue: CSS WG`
  > *Latest discussion from @dandclark: "Thanks for sending this to the TAG! We had a few points of feedback.  One is that the opt-in from the iframe isn't scoped in any way. The explainer \[p..."*

#### 📰 Ecosystem Blogs & Articles

- [netlify.app](https://alexanderburgos.netlify.app/blog/responsive-iframes-no-javascript) *(alexanderburgos.netlify.app)*
  > For years, developers have struggled with sizing an \`&lt;iframe&gt;\` to match its contents without causing unsightly nested scrollbars or clipping postMessage()\`, \`ResizeObserver\`, and specialized client libraries (like \`ifram...
- [mintec.co](https://mintec.co/blog/chrome-154-frame-sizing-carousel-tabs) *(mintec.co)*
  > postMessage()\`, \`ResizeObserver\`, and specialized client libraries (like \`iframe-resizer\`) \*\*Child Document Opt-In (HTML)\*\*: The embedded page includes a dedicated meta tag in its \`&lt;head&gt;\` permitting the parent to read i...
- [Responsive iframes in Chrome 154 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/responsive-iframes) *(developer.chrome.com)*
  > \*\*Child Document Opt-In (HTML)\*\*: The embedded page includes a dedicated meta tag in its \`&lt;head&gt;\` permitting the parent to read its layout size \*\*Parent Document Styling (CSS)\*\*: The host page applies the new \`frame-sizi...
- [netlify.app](https://alexanderburgos.netlify.app/blog/chrome-154-responsive-iframes) *(alexanderburgos.netlify.app)*
  > requestResize()\` to tell the browser engine to recalculate the parent iframe box Alexander Burgos’ Engineering Blog \* \*\*"Responsive Iframes Without JavaScript Resize Hacks"\*\*: \* Analyzes the feature from a \*\*design syste...
- [chrome.com](https://developer.chrome.com/new) *(developer.chrome.com)*
  > Chrome for Developers (\`developer.chrome.com\`) \* \*\*"Responsive iframes in Chrome 154"\*\* \*(by Sebastian Benz and Bramus van Damme)\*
- [New in Chrome 154 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-154) *(developer.chrome.com)*
  > \* \*\*"New in Chrome 154"\*\* \*(by Rachel Andrew)\* \* \*\*"New in Chrome 154"\*\* \*(by Rachel Andrew)\*: \* Official release roundup highlighting responsively-sized iframes alongside CSS scroll-marker-group modes and text decoratio...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Prototype: Responsive iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/QirdSBIvM1k/m/rZdHOE59AQAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > Intent to Prototype: Responsive iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Responsive ...
- [Responsively-sized &lt;iframe&gt; · Issue #4036 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4036) *(github.com · 2026-05-14T09:39:56)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > Responsively-sized &lt;iframe&gt; · Issue #4036 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13784.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes Chris Harrelson Fri, 23 May 2025 09:37:23 -0700 I filed a spec...
- [\[blink-dev\] Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13731.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > \[blink-dev\] Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Responsive iframes Chromestatus Mon, 19 May 2025 15:43:14 -0700 Contact emails \[email&#160;protec...
- [\[blink-dev\] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13733.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > \[blink-dev\] Re: Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: Responsive iframes Jake Archibald Tue, 20 May 2025 00:05:50 -0700 I think the "one shot" ...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe) *(developer.mozilla.org)*
- [Responsively-sized &lt;iframe&gt; · Issue #4036 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4036) *(github.com)*
- [Responsively-sized · Issue #1708 · davidjbradshaw/iframe-resizer](https://github.com/davidjbradshaw/iframe-resizer/issues/1708) *(github.com)*
- [Responsive iframes · Issue #1443 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/1443) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (59 found across 12 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 13 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (7 found, 1 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (9 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

---

<a id="5908461532610560-scroll-axis-lock"></a>
### [scroll-axis-lock](https://chromestatus.com/feature/5908461532610560)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5908461532610560](https://chromestatus.com/feature/5908461532610560) · [chromestatuslite.com/feature/5908461532610560](https://chromestatuslite.com/feature/5908461532610560)
- **Specification:** [https://github.com/w3c/csswg-drafts/pull/14152](https://github.com/w3c/csswg-drafts/pull/14152)
- **Chromium Bug:** [https://crbug.com/479472367](https://crbug.com/479472367)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/scroll-axis-lock) (Chrome: `153`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`scroll-axis-lock`](https://webstatus.dev/features/scroll-axis-lock)*

#### 📝 Overview

scroll-axis-lock is a CSS property that authors can use to instruct browsers not to constrain a user's scrolling gesture to one axis.  Web browsers often "lock" a user's scrolling gesture to a single axis when that gesture starts with significantly more movement in one axis than in the perpendicular axis. In many cases, this behavior improves the user's experience by avoiding accidental scrolls along the perpendicular axis when the user's intent was to scroll only one axis. However, in cases where an author wishes their element to always be diagonally scrollable, this locking behavior forces the user to start their gesture at an angle that doesn't trigger the locking, often not in alignment with the author's intended user experience.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 275 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""scroll-axis-lock" CSS"`, `""scroll-axis-lock" csswg"`
- **Analysis:** Introduced in the CSS Overflow Module Level 5 specification and enabled by default starting in Chrome 153, the \`scroll-axis-lock\` property gives authors control over browser-level heuristic rail-locking to enable fluid diagonal panning. The feature has achieved cross-engine momentum, supported by a satisfied W3C TAG review, receptive tracking in Mozilla standards discussions, and active implementation underway in WebKit.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should comfortably adopt \`scroll-axis-lock: none\` today as a progressive enhancement for 2D scrollable interfaces. Non-supporting browsers will simply ignore the property and preserve their existing single-axis gesture-locking heuristics without breaking functionality.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fred-wang: "&gt; Seems reasonable, but I wonder if making it inherited would make more sense.  For future reference, the explainer mentions this: https://github.com/..."
- Standards Activity (Mozilla): Latest discussion from @theres-waldo: "&gt; Same as \[#1448\](https://github.com/mozilla/standards-positions/issues/1448) I think this seems reasonable but I'd like \[@hiikezoe\](https://github.co..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS scroll-axis-lock](https://github.com/WebKit/standards-positions/issues/698) [open] `topic: css`, `venue: W3C CSS WG`, `from: Google`, `topic: scrolling`
  > *Latest discussion from @fred-wang: "&gt; Seems reasonable, but I wonder if making it inherited would make more sense.  For future reference, the explainer mentions this: https://github.com/..."*
- **Mozilla:** [CSS scroll-axis-lock](https://github.com/mozilla/standards-positions/issues/1435) [open] `venue: W3C`, `topic: CSS`
  > *Latest discussion from @theres-waldo: "&gt; Same as \[#1448\](https://github.com/mozilla/standards-positions/issues/1448) I think this seems reasonable but I'd like \[@hiikezoe\](https://github.co..."*
- **W3C TAG:** [Other Spec Review: CSS scroll-axis-lock](https://github.com/w3ctag/design-reviews/issues/1248) [closed] `Resolution: satisfied`, `Review type: later review`
  > *Latest discussion from @lukewarlow: "Hi @DavMila, the TAG discussed this and are positive about this feature.  We'll resolve this as satisifed...."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2060690: New wpt failures in /pointerevents/touch-scroll-axis-lock-with-scroll-chain.html?touch](https://bugzilla.mozilla.org/show_bug.cgi?id=2060690) `[NEW]`
- **Mozilla (Gecko):** [Bug #2070981: New wpt failures in /css/css-overflow/ \[scroll-axis-lock-inheritance.html, scroll-axis-lock-interpolation.html\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2070981) `[NEW]`
- **Mozilla (Gecko):** [Bug #2071681: New wpt failures in /css/css-overflow/scroll-axis-lock-none-touch.html](https://bugzilla.mozilla.org/show_bug.cgi?id=2071681) `[NEW]`
- **Mozilla (Gecko):** [Bug #2074492: New wpt failures in /css/css-overflow/scroll-axis-lock-dynamic-change.html](https://bugzilla.mozilla.org/show_bug.cgi?id=2074492) `[NEW]`
- **Mozilla (Gecko):** [Bug #2075043: \[wpt-sync\] Sync PR 62911 - Add a test for scroll-axis-lock: none on an iframe.contentDocument.scrollingElement.](https://bugzilla.mozilla.org/show_bug.cgi?id=2075043) `[NEW]`
- **WebKit (Safari):** [Bug #324326: Implement CSS scroll-axis-lock property](https://bugs.webkit.org/show_bug.cgi?id=324326) `[NEW]`
- **WebKit (Safari):** [Bug #325260: Add internal tests for scroll-axis-lock](https://bugs.webkit.org/show_bug.cgi?id=325260) `[NEW]`
- **WebKit (Safari):** [Bug #325265: Implement scroll-axis-lock: none on macos](https://bugs.webkit.org/show_bug.cgi?id=325265) `[NEW]`
- **WebKit (Safari):** [Bug #325266: Implement scroll-axis-lock: none on iOS](https://bugs.webkit.org/show_bug.cgi?id=325266) `[NEW]`
- **WebKit (Safari):** [Bug #325470: Set scroll-axis-lock status to 'preview'](https://bugs.webkit.org/show_bug.cgi?id=325470) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [Unlock Immediate Diagonal Scrolling with CSS scroll-axis-lock: none \| daily.dev](https://daily.dev/posts/unlock-immediate-diagonal-scrolling-with-css-scroll-axis-lock-none-yjtrmj2rr) *(daily.dev)*
  > Unlock Immediate Diagonal Scrolling with CSS... Bram.us Read post Unlock Immediate Diagonal Scrolling with CSS scroll-axis-lock: none This title could be clearer and more informative. Try out Clickbait Shield for free (5...
- [324326 &ndash; Implement CSS scroll-axis-lock property](https://bugs.webkit.org/show_bug.cgi?id=324326) *(bugs.webkit.org)*
  > 324326 &ndash; Implement CSS scroll-axis-lock property WebKit Bugzilla Bug 324326: Implement CSS scroll-axis-lock property --&gt; New Browse Search+ Log In &times; Sign in with GitHub or Remember my login Create Account &mi...
- [caniuse.com](https://caniuse.com/wf-scroll-axis-lock) *(caniuse.com)*
  > By default, web browsers apply heuristic axis-locking to user touch and trackpad gestures viewport-2d { overflow: auto; scroll-axis-lock: none; } Browsers lacking support will simply fall back to their legacy rail-lockin...
- [Unlock Immediate Diagonal Scrolling with CSS scroll-axis-lock: none – Bram.us](https://www.bram.us/2026/08/09/unlock-diagonal-scrolling-with-css-scroll-axis-lock-none) *(bram.us)*
  > Unlock Immediate Diagonal Scrolling with CSS scroll-axis-lock: none &#8211; Bram.us Skip to content Bram.us A rather geeky/technical weblog, est. 2001, by Bramus Unlock Immediate Diagonal Scrolling with CSS scroll-axis-l...
- [Scroll Axis Lock · August 10, 2026](https://nerdy.dev/css-scroll-axis-lock) *(nerdy.dev)*
  > Scroll Axis Lock · August 10, 2026 2 min read Scroll Axis Lock css August 10, 2026 3,703 0 1 2 3 , 4 5 6 7 0 0 1 2 3 views Table of contents Use cases I did log a bug Comments 8 I first noticed web scroll areas had scrol...
- [Scroll Axis Lock · August 10, 2026 \| daily.dev](https://daily.dev/posts/scroll-axis-lock-august-10-2026-cwfnxgqxn) *(daily.dev)*
  > Scroll Axis Lock · August 10, 2026 \| daily.dev Adam Argyle Read post Scroll Axis Lock · August 10, 2026 Chrome 153 introduces a CSS property to disable scroll axis locking, enabling natural diagonal scrolling in web scro...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype and Ship: scroll-axis-lock](http://www.mail-archive.com/blink-dev@chromium.org/msg17080.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-axis-lock`)*
  > \*Contact emails\* \[email protected\] \*Explainer\* https://&lt;strong&gt;github.com/explainers-by-googlers/scroll-axis-lock&lt;/strong&gt;

#### 📚 Platform Documentation & References

- [Implement CSS scroll-axis-lock property by fred-wang · Pull Request #74484 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/74484) *(github.com)*
- [Set scroll-axis-lock status to 'preview' by fred-wang · Pull Request #75110 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/75110) *(github.com)*
- [scroll-axis-lock · Issue #1265 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1265) *(github.com)*
- [scroll-axis-lock · Issue #4213 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4213) *(github.com)*
- [CSS scroll-axis-lock · Issue #1435 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1435) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 12 planned queries, 21 verified) · `Google Search Grounding (gemini-3.8-flash)` (20 found, 7 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (10 found, 10 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (4 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 10

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

- **Momentum:** **Moderate** (footprint 270 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The CSS corner shorthand properties consolidate border-radius and corner-shape into ergonomic per-corner and directional declarations, including physical and logical edge sub-shorthands. Resolved by the CSS Working Group in the CSS Borders and Box Decorations Module Level 4 specification, the feature eliminates redundant declarations for complex silhouettes like squircles and bevels. While Chromium has moved to ship the shorthands by default, the feature group currently remains in limited baseline availability pending broader stable rollouts in rival engines.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt the corner shorthands using progressive enhancement by providing conventional border-radius fallbacks or guarding modern syntax behind @supports (corner-top-left: 20px squircle) rules. Teams should experiment with the ergonomic syntax in modern Chromium builds while holding off on exclusive production reliance until Firefox and Safari deliver stable releases.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @smfr: "We think that \`corner-shape\` will be useful to allow for bevel, and superellipse (aka squircle), but we believe that more complex corner shapes are be..."
- Standards Activity (Mozilla): Latest discussion from @dholbert: "&gt; @dholbert fwiw, I'm not so sure about it. \`corner-shape: angle\` messing with \`border-radius\` feels wrong somehow (even if it's the simplest way to s..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **19 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Corner-shape](https://github.com/WebKit/standards-positions/issues/229) [closed] `position: support`, `topic: css`, `venue: W3C CSS WG`
  > *Latest discussion from @smfr: "We think that \`corner-shape\` will be useful to allow for bevel, and superellipse (aka squircle), but we believe that more complex corner shapes are be..."*
- **Mozilla:** [CSS corner-shape](https://github.com/mozilla/standards-positions/issues/823) [closed] `venue: W3C`, `position: positive`, `topic: CSS`
  > *Latest discussion from @dholbert: "&gt; @dholbert fwiw, I'm not so sure about it. \`corner-shape: angle\` messing with \`border-radius\` feels wrong somehow (even if it's the simplest way to s..."*

#### 📰 Ecosystem Blogs & Articles

- [Squircles in CSS: corner-shape, superellipse() and Browser Support (2026) - Squircle.js](https://squircle.js.org/blog/squircles-in-css) *(squircle.js.org)*
  > In the CSS Borders and Box Decorations Module Level 4 specification, customizing box corners historically required declaring two distinct properties: \*\*\`border-radius\`\*\* (which sets the size and curvature bounds) and \*\*\`...
- [webkit.org](https://bugs.webkit.org/show_bug.cgi?id=325010) *(bugs.webkit.org)*
  > Chromium implemented this support via \*\*CL 7747994\*\*, and WebKit tracks matching implementation in Bug 325010 \* \*\*WebKit Bugzilla (Bug 325010):\*\* Documents engine alignment across WebKit/Blink, tracking the adoption of \`...
- [amitmerchant.com](https://www.amitmerchant.com/the-modern-way-to-draw-squircles-using-corner-shape-in-css) *(amitmerchant.com)*
  > The documentation illustrates how borders, background clip regions, shadows (\`box-shadow\`), outlines, and \`backdrop-filter\` natively trace the synthesized corner geometry They emphasized that the shorthand syntax (\`corne...
- [web.dev](https://web.dev/blog/web-platform-08-2025) *(web.dev)*
  > dev ("New to the Web Platform"):\*\* Highlighted the arrival of native corner shaping into Chromium and early browser engines, focusing on eliminating heavy SVG mask and \`clip-path\` hacks for curved and squircle elements
- [smashingmagazine.com](https://www.smashingmagazine.com/2026/03/beyond-border-radius-css-corner-shape-property-ui) *(smashingmagazine.com)*
  > dev ("New to the Web Platform"):\*\* Highlighted the arrival of native corner shaping into Chromium and early browser engines, focusing on eliminating heavy SVG mask and \`clip-path\` hacks for curved and squircle elements
- [chrome.com](https://developer.chrome.com/blog/implementing-corner-shape) *(developer.chrome.com)*
  > \* \*\*Chromium Blink Implementation Blog ("The Corner Cases of Implementing CSS Corner-Shape"):\*\* A technical deep-dive into the mathematical and rendering mechanics of \`superellipse()\` in Blink, covering how symmetrical c...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17570.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties 'Dan Clark' via blink-dev Mon, 28 Sep 2026 16:...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17574.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Mike Taylor Mon, 28 Sep 2026 19:23:42 -0700 LG...
- [\[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17509.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 21 Sep 2026 11:46:37 -0700 This look...
- [\[blink-dev\] Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17493.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > \[blink-dev\] Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS corner shorthand properties Helmut Januschka Fri, 18 Sep 2026 06:34:29 -0700 \*Contact emai...

#### 📚 Platform Documentation & References

- [w3.org](https://www.w3.org/TR/css-borders-4) *(w3.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-top-left-shape) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-top-shape) *(developer.mozilla.org)*
- [\[css-borders\] Add shorthand for \`border-shape\` / \`corner-shape\` / \`border-radius\` · Issue #11679 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11679) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `corner-shape` on [wpt.fyi](https://wpt.fyi/results?q=feature:corner-shape) (via webstatus.dev) — stable: Chrome 81.8% · Edge 84.1% · Firefox 11.3% · Safari 8%; experimental: Chrome 88.6% · Edge 89.8% · Firefox 59.1% · Safari 68.2%

#### 🌐 Web-features Group Context

*group-level data: web-features [`corner-shape`](https://webstatus.dev/features/corner-shape)*

- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/229))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/823))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 12 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 16 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (1 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "corner-shape", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "corner-shape": Chrome 81.8% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 6

---

<a id="5075532483657728-enhanced-canvas-textmetrics"></a>
### [Enhanced Canvas TextMetrics](https://chromestatus.com/feature/5075532483657728)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5075532483657728](https://chromestatus.com/feature/5075532483657728) · [chromestatuslite.com/feature/5075532483657728](https://chromestatuslite.com/feature/5075532483657728)
- **Specification:** [https://github.com/whatwg/html/pull/11000](https://github.com/whatwg/html/pull/11000)
- **Chromium Bug:** [https://issues.chromium.org/issues/341213359](https://issues.chromium.org/issues/341213359)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `Negative`

#### 📝 Overview

Expand the TextMetrics Canvas API to support selection rectangles, bounding box queries, and glyph cluster-based operations.  This new functionality should enable complex text editing applications with accurate selection, caret positioning, and hit testing.  Additionally, cluster-based rendering facilitates sophisticated text effects such as independent character animations and styling.

> **Motivation:** The existing TextMetrics API provides measurements for atomic text, but offers no facilities to break down that information to a more granular level.  Sophisticated text applications (editors in particular) require such granular information in order to support accurate selection, caret positioning and hit testing at a grapheme level.  Currently the...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 260 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Canvas Text Metrics for Editing" TAG review"`, `""Enhanced Canvas TextMetrics" OR "TextMetrics additions" site:github.com/whatwg/html"`, `""Canvas TextMetrics additions" site:github.com/WebKit/standards-positions"`
- **Analysis:** Enhanced Canvas TextMetrics expands the 2D Canvas API by providing sub-string selection rectangles, caret index mapping, and glyph cluster bounding boxes to replace expensive binary-search measurement workarounds. While Chromium and Igalia have pushed the implementation forward to ship out-of-the-box in Chromium, universal cross-engine consensus remains pending in WHATWG specifications. Ecosystem debates continue regarding its long-term scope alongside complementary HTML-in-Canvas proposals.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams building custom canvas layout engines should benchmark and prototype against the cluster and selection APIs using strict feature detection, while maintaining fallback measurement heuristics until Safari and Firefox implement interoperable support.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @shallawa: "&gt; This API should only be used for use cases where HTML-in-Canvas would not be appropriate--and it would be good to clarify here what those use cases ..."
- Standards Activity (Mozilla): Latest discussion from @schenney-chromium: "Yes. The need for per-grapheme rendering control is still there, along with ways to facilitate editing. While HTML-in-Canvas covers the use cases for ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **22 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [\[HTML Canvas\] TextMetrics Additions for Editing and Graphic Design](https://github.com/WebKit/standards-positions/issues/436) [open] `topic: web apis`, `from: Google`, `from: Igalia`
  > *Latest discussion from @shallawa: "&gt; This API should only be used for use cases where HTML-in-Canvas would not be appropriate--and it would be good to clarify here what those use cases ..."*
- **Mozilla:** [\[HTML Canvas\] TextMetrics Additions](https://github.com/mozilla/standards-positions/issues/1144) [open] `venue: WHATWG`, `topic: API`
  > *Latest discussion from @schenney-chromium: "Yes. The need for per-grapheme rendering control is still there, along with ways to facilitate editing. While HTML-in-Canvas covers the use cases for ..."*

#### 📰 Ecosystem Blogs & Articles

- [Canvas Text Editing](https://blogs.igalia.com/schenney/canvas-text-editing) *(blogs.igalia.com)*
  > Historically, \`measureText()\` treated an entire string as an atomic unit—providing global bounding boxes and advance widths, but giving developers virtually no insight into sub-ranges, glyph boundaries, or character-to-p...
- [chrome.com](https://developer.chrome.com/release-notes/144) *(developer.chrome.com)*
  > \* \*\*Chrome for Developers & Chrome Platform Status\*\*: Chrome documented the feature under the \*\*Enhanced Canvas TextMetrics\*\* entry and initiated Origin Trials starting in \*\*Chrome 144\*\* (tracked under Chromium bug \`#341...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/151) *(learn.microsoft.com)*
  > \* \*\*Microsoft Edge Platform Release Notes\*\*: Edge included the Origin Trial for Enhanced Canvas TextMetrics throughout its release notes (Edge 147 through Edge 151), highlighting its role in enabling complex text-editing...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/147) *(learn.microsoft.com)*
  > \* \*\*Microsoft Edge Platform Release Notes\*\*: Edge included the Origin Trial for Enhanced Canvas TextMetrics throughout its release notes (Edge 147 through Edge 151), highlighting its role in enabling complex text-editing...
- [biggo.com](https://finance.biggo.com/news/202508030712_Chrome_HTML-in-Canvas_Security_Concerns) *(finance.biggo.com)*
  > Enhanced Metrics)\*\*: Discussions on blogs and developer channels often compare this feature with parallel proposals like \*\*HTML-in-Canvas\*\* (\`drawElement()\`, \`setHitTestRegions()\`) Developers note that while HTML-in-Canv...
- [\[blink-dev\] Intent to Prototype: Enhanced Canvas TextMetrics](https://www.mail-archive.com/blink-dev@chromium.org/msg13889.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Enhanced Canvas TextMetrics Florin Malita Wed, 11 Jun 2025 06:14:30 -0700 \*Contact email...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Enhanced Canvas TextMetrics](https://www.mail-archive.com/blink-dev@chromium.org/msg13889.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > \[blink-dev\] Intent to Prototype: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Enhanced Canvas TextMetrics Florin Malita Wed, 11 Jun 2025 06:14:30 -0700 \*Contact email...
- [\[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg17422.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Enhanced Canvas TextMetrics Rick Byers Wed, 09 Sep 2026 10:53:24 -0700 Igalia and Google h...
- [\[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg15075.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > \[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Enhanced Canvas TextMetrics Florin Malita Tue, 04 Nov 2025 12:11:02 -0800 \*Contact ema...
- [\[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg16550.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Enhanced Canvas TextMetrics Florin Malita Mon, 18 May 2026 13:12:08 -070...
- [\[blink-dev\] Ready for Developer Testing: Enhanced Canvas TextMetrics](http://www.mail-archive.com/blink-dev@chromium.org/msg15048.html) *(mail-archive.com)* *(Cites: `https://github.com/fserb/canvas2D/blob/master/spec/enhanced-textmetrics.md`)*
  > \[blink-dev\] Ready for Developer Testing: Enhanced Canvas TextMetrics Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Enhanced Canvas TextMetrics Chromestatus Thu, 30 Oct 2025 13:33:06 -0700...

#### 📚 Platform Documentation & References

- [design-reviews#1095: Canvas Text Metrics for Editing, Art and Design](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1095) *(tag-github-bot.w3.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-09-14 (public-html@w3.org from September 2026)](https://lists.w3.org/Archives/Public/public-html/2026Sep/0002.html) *(lists.w3.org)*
- [Micro JS shaping engine · Issue #176 · pmndrs/glyph](https://github.com/pmndrs/glyph/issues/176) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 15 planned queries, 19 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 6 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (1 found, 0 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 3 · Standards Comments Read: 7

---

<a id="6320639375966208-deprecate-and-remove-attribution-reporting-api"></a>
### [Deprecate and remove: Attribution Reporting API](https://chromestatus.com/feature/6320639375966208)

- **Milestone:** Chrome 153 (Deprecated)
- **ChromeStatus:** [chromestatus.com/feature/6320639375966208](https://chromestatus.com/feature/6320639375966208) · [chromestatuslite.com/feature/6320639375966208](https://chromestatuslite.com/feature/6320639375966208)
- **Specification:** [https://wicg.github.io/attribution-reporting-api](https://wicg.github.io/attribution-reporting-api)
- **Browser Signals:** Chrome: `Deprecated` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The Attribution Reporting API is a privacy-preserving web API designed to measure ad conversions without third-party cookies or user tracking across sites.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Attribution Reporting API (along with other Privacy Sandbox APIs).  \[0\]: https://privacysandbox.com/news/privacy-sandbox-next-steps/

> **Motivation:** Chrome has announced that the current approach to third-party cookies will be maintained. Given this, we expect adoption to decrease over time as cross-site measurement will remain possible in Chrome using third-party cookies.  Further, other browser engines have not signaled interest in launching the API. Removing this (and other Privacy Sandbox A...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 250 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"Privacy Sandbox deprecate Attribution Reporting API"`, `"Chrome deprecate remove Attribution Reporting API"`, `"chromestatus Deprecate and remove Attribution Reporting API"`
- **Analysis:** The Attribution Reporting API is officially deprecated and slated for phased removal through Chrome 153 following Google's reversal on eliminating third-party cookies in Chrome. The API never achieved multi-engine adoption, and its deprecation has now been formally documented on Chrome Platform Status and MDN Web Docs. As Chromium retires the mechanism, cross-browser focus is shifting toward collaborative, standards-based measurement proposals within the W3C.

**Key Recommendations & Takeaways:**
- Actionable Advice: Engineering teams should immediately halt new implementations of the Attribution Reporting API and audit codebases to sunset existing headers and registration scripts ahead of milestone 153. Measurement strategies should instead rely on durable first-party conversion tracking and server-side pipelines while tracking emerging W3C standards.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [google.com](https://privacysandbox.google.com/private-advertising/attribution-reporting/chrome-shipping) *(privacysandbox.google.com)*
  > The \*\*Attribution Reporting API\*\* was introduced as part of Google’s Privacy Sandbox to provide privacy-preserving ad measurement (such as click-through and view-through conversions) without relying on cross-site trackin...
- [ethyca.com](https://www.ethyca.com/guides/third-party-cookie-deprecation-here-s-what-privacy-teams-need-to-know) *(ethyca.com)*
  > Following Google's decision to maintain third-party cookies in Chrome (transitioning instead to a user-choice model), the browser team announced plans to \*\*deprecate and remove the Attribution Reporting API\*\* (alongside ...
- [secureprivacy.ai](https://secureprivacy.ai/blog/google-killed-privacy-sandbox-what-changes-for-cookie-consent-in-2026) *(secureprivacy.ai)*
  > Following Google's decision to maintain third-party cookies in Chrome (transitioning instead to a user-choice model), the browser team announced plans to \*\*deprecate and remove the Attribution Reporting API\*\* (alongside ...
- [google.com](https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies) *(privacysandbox.google.com)*
  > \* \*\*Low Industry Adoption:\*\* With third-party cookies remaining active in Chrome, adoption remained low among ad-tech vendors \* \*\*Shift to Interoperable Standards:\*\* Chrome signaled that it will focus cross-browser colla...
- [Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > Chrome Platform Status: \*"Deprecate and remove: Attribution Reporting API"\* \* \*\*Status Entry:\*\* Listed as a \*Feature Removal\* targeting deprecation starting in Chrome 144 and phased removal toward Chrome 153
- [chrome.com](https://developer.chrome.com/blog/chrome-144-beta) *(developer.chrome.com)*
  > Chrome Platform Status: \*"Deprecate and remove: Attribution Reporting API"\* \* \*\*Status Entry:\*\* Listed as a \*Feature Removal\* targeting deprecation starting in Chrome 144 and phased removal toward Chrome 153 attributionS...

#### 🔗 Inbound Citations & Reverse Links

- [Deprecate and remove: Attribution Reporting API · Issue #1325 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1325) *(github.com · 2026-08-14T17:31:48)* *(Cites: `https://chromestatus.com/feature/6320639375966208`)*
  > Deprecate and remove: Attribution Reporting API · Issue #1325 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You s...
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4K2RRt6VYCQ/m/xt3TXi3WBQAJ) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/6320639375966208`)*
  > \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; \[b...

#### 📚 Platform Documentation & References

- [Attribution Reporting API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Attribution_Reporting_API) *(developer.mozilla.org)*
- [Deprecate and remove: Attribution Reporting API · Issue #1325 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1325) *(github.com)*
- [\[rule\] attr/browsingtopics-attributionsrc · Issue #433 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/433) *(github.com)*
- [Generating attribution reports - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports) *(developer.mozilla.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (70 found across 11 planned queries, 16 verified) · `Google Search Grounding (gemini-3.8-flash)` (20 found, 11 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (6 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5153829504024576-capability-elements-camera-and-microphone"></a>
### [Capability elements: &lt;camera&gt; and &lt;microphone&gt;](https://chromestatus.com/feature/5153829504024576)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5153829504024576](https://chromestatus.com/feature/5153829504024576) · [chromestatuslite.com/feature/5153829504024576](https://chromestatuslite.com/feature/5153829504024576)
- **Specification:** [https://w3c.github.io/mediacapture-extensions/#the-camera-html-element](https://w3c.github.io/mediacapture-extensions/#the-camera-html-element)
- **Chromium Bug:** [https://b.corp.google.com/issues/531672795](https://b.corp.google.com/issues/531672795)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/permissions) (Chrome: `44`, Firefox: `46`, Safari: `16`) · *group-level data: web-features [`permissions`](https://webstatus.dev/features/permissions), shared with 5 other ChromeStatus features*

#### 📝 Overview

The &lt;camera&gt; and &lt;microphone&gt; capability elements are declarative, user-activated HTML controls that share the same underlying mechanism as the &lt;usermedia&gt; MVP element, with one key distinction: they are designed to request a single capability. The &lt;camera&gt; element specifically requests video capture, while the &lt;microphone&gt; element specifically requests audio capture. Like the &lt;usermedia&gt; MVP, they embed a browser-controlled, strictly styled UI into the page, ensuring a strong, intentional user signal (a click) before a permission prompt is triggered or a stream is started.  The &lt;camera&gt; and &lt;microphone&gt; elements provide a dedicated, semantic HTML control for these single-capability use cases. They maintain the identical security model, strict styling constraints, and built-in permission recovery path as the &lt;usermedia&gt; MVP, but offer a more tailored and ergonomic API for developers who do not need mixed media access.

> **Motivation:** In M151, we shipped the &lt;usermedia&gt; element (MVP) to solve the problem of out-of-context, JavaScript-triggered permission prompts. By requiring a direct, in-page user click on a browser-controlled element, we ensure a strong signal of user intent before requesting media access.  Based on feedback and the WICG specification, we are expanding this MV...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 245 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""webkit" "page-embedded permission control" OR "capability elements""`, `""camera" "microphone" capability elements PEPC page-embedded permission control"`, `""mozilla" standards position "page-embedded permission control" OR "capability elements""`, `""camera" HTML element "microphone" HTML element WICG mediacapture-extensions"`
- **Analysis:** The &lt;camera&gt; and &lt;microphone&gt; capability elements represent Chromium's evolution of the Page-Embedded Permission Control (PEPC) initiative, refining generic permission elements into semantic, single-stream media controls. Enabled by default starting in Chrome 153 following earlier rollouts of &lt;usermedia&gt; and &lt;geolocation&gt;, these elements provide native in-page permission recovery and anti-clickjacking protections. However, the broader web ecosystem remains fragmented, as Gecko and WebKit have not yet shipped native implementations.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat &lt;camera&gt; and &lt;microphone&gt; strictly as an optional progressive enhancement for Chromium-based visitors while retaining conventional navigator.mediaDevices.getUserMedia() JavaScript workflows as the primary cross-browser baseline. Teams experimenting with capability elements must ensure their layouts accommodate strict user-agent styling and contrast mandates without breaking fallback UI.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Chrome 153 ships camera and microphone HTML elements" (3 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Chrome 153 ships camera and microphone HTML elements](https://news.ycombinator.com/item?id=49618853) — *Hacker News (3 pts, 0 comments)*
- 🐦 [Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X](https://x.com/ChromiumDev/status/2093424350036660456) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [Chrome 153 ships camera and microphone HTML elements](https://webiterate.dev/capability-elements-camera-126) *(webiterate.dev · 2026-09-08T23:55:35Z)*
- [ycombinator.com](https://news.ycombinator.com/item?id=48754700) *(news.ycombinator.com)*
  > Recent developer announcements, platform release notes, and community discussions highlight the rollout and developer reception of the \*\*\`&lt;camera&gt;\` and \`&lt;microphone&gt;\` Capability Elements\*\* The browser paints and controls...
- [New in Chrome 153 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-153) *(developer.chrome.com)*
  > Following \`&lt;geolocation&gt;\` in Chrome 144 and \`&lt;usermedia&gt;\` in Chrome 151, Chrome 153 introduced dedicated \`&lt;camera&gt;\` and \`&lt;microphone&gt;\` elements for single-medium capture
- [JavaScript Camera API: Access the camera and microphone using getUserMedia - Desarrollolibre](https://www.desarrollolibre.net/blog/javascript/accessing-a-devices-camera-and-microphone-with-javascript) *(desarrollolibre.net)*
  > getUserMedia()\` directly from JavaScript, developers declare \`&lt;camera&gt;\` or \`&lt;microphone&gt;\` in HTML Google highlights that while \`&lt;usermedia&gt;\` handles mixed video/audio streams, many real-world use cases (e.g., voice-only ...
- [chromestatus.com](https://chromestatus.com/feature/4926233538330624) *(chromestatus.com)*
  > The browser paints and controls the UI inside the element and enforces strict styling constraints (contrast thresholds, bounds, and anti-clickjacking protections) \* \*\*Intent & Permission Recovery\*\*: A stream or permissio...
- [Chrome 153 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/153) *(developer.chrome.com)*
  > Official Announcements (developer.chrome.com & Chrome Platform Status) \* \*\*Chrome Platform Status & Chrome 153 Release Notes\*\*: Details the formal release of \`&lt;camera&gt;\` and \`&lt;microphone&gt;\` in \*\*Chrome 153\*\*

#### 📚 Platform Documentation & References

- [&lt;camera&gt; and &lt;microphone&gt; · Issue #4199 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4199) *(github.com)*
- [Media capture elements &lt;camera&gt; and &lt;microphone&gt; · Issue #1032 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1032) *(github.com)*
- [Capability Element - &lt;camera&gt; and &lt;microphone&gt; · Issue #1461 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1461) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `permissions` on [wpt.fyi](https://wpt.fyi/results?q=feature:permissions) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 33.3%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 33.3%

#### 🌐 Web-features Group Context

*group-level data: web-features [`permissions`](https://webstatus.dev/features/permissions), shared with 5 other ChromeStatus features*

- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/19))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (64 found across 12 planned queries, 17 verified) · `Google Search Grounding (gemini-3.8-flash)` (16 found, 9 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (3 found, 1 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 1 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "permissions", shared with 5 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "permissions": Chrome 66.7% passing (stable))* · `Sources cited by the AI synthesis` (9 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5113656292540416-immersive-audio-model-and-formats-iamf-decoding-support"></a>
### [Immersive Audio Model and Formats (IAMF) decoding support](https://chromestatus.com/feature/5113656292540416)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5113656292540416](https://chromestatus.com/feature/5113656292540416) · [chromestatuslite.com/feature/5113656292540416](https://chromestatuslite.com/feature/5113656292540416)
- **Specification:** [https://aomediacodec.github.io/iamf/latest-approved.html](https://aomediacodec.github.io/iamf/latest-approved.html)
- **Chromium Bug:** [https://crbug.com/535279329](https://crbug.com/535279329)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Adds support for decoding and playing back the Immersive Audio Model and Formats (IAMF) container within HTML media elements via Media Source Extensions (MSE). IAMF is an open, royalty-free spatial audio format that supports channel-based, scene-based, and object-based audio presentations. Supporting this standard allows web developers to deliver consistent, immersive 3D audio experiences across different devices without relying on proprietary formats or managing complex discrete audio channel routing in JavaScript.

> **Motivation:** Currently, delivering high-quality, immersive 3D audio on the web relies heavily on proprietary formats (like Dolby Atmos) or complex custom JavaScript audio rendering. IAMF provides a standardized, royalty-free container that allows web developers to deliver rich, consistent spatial audio experiences across devices for use cases like gaming, AR/VR...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 245 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"IAMF mozilla standards positions"`, `""Immersive Audio Model and Formats" chrome"`, `""IAMF" decoding audio chromium"`, `"IAMF webkit standards-positions"`
- **Analysis:** Native Immersive Audio Model and Formats (IAMF) decoding support has launched enabled by default in Chrome 153 via Media Source Extensions (MSE), introducing an open, royalty-free spatial audio container developed under the Alliance for Open Media (AOMedia). Web developers view native browser decoding as an essential step toward replacing proprietary ecosystems like Dolby Atmos and heavy Web Audio JavaScript pipelines. However, the feature is currently confined to Chromium, with other engine implementations pending formal alignment.

**Key Recommendations & Takeaways:**
- Actionable Advice: Deploy IAMF through progressive enhancement by probing container and codec support via \`MediaSource.isTypeSupported()\`, ensuring robust fallbacks to standard multichannel or stereo Opus streams. For experiences requiring universal spatial audio today, consider testing WebAssembly fallbacks using the official \`iamf\_tools\` decoder alongside native Chrome playback.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *In developer trial (Behind a flag)* to *Enabled by default*
- 📰 **9 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [IAMF Audio Decoding Support](https://github.com/WebKit/standards-positions/issues/700) [open] 
- **Mozilla:** [IAMF Audio Decoding support](https://github.com/mozilla/standards-positions/issues/1437) [open] `topic: API`

#### 📰 Ecosystem Blogs & Articles

- [soundingfuture.com](https://soundingfuture.com/articles/iamf-open-3d-audio-format-horizon) *(soundingfuture.com)*
  > \*\*Immersive Audio Model and Formats (IAMF)\*\* is an open, royalty-free spatial audio standard governed by the \*\*Alliance for Open Media (AOMedia)\*\* (co-developed by Google, Samsung, and industry partners) The Web Platform...
- [aomedia.org](http://aomedia.org/specifications/iamf) *(aomedia.org)*
  > \* \*\*Adaptive "Author Once, Render Anywhere":\*\* Uses embedded metadata and rendering algorithms (such as BEAR/EAR) to tailor playback on the fly for headphones (binaural 3D), basic stereo speakers, soundbars, or multi-cha...
- [chrome.com](https://developer.chrome.com/release-notes/153) *(developer.chrome.com)*
  > Official Chromium & Chrome for Developers Announcements \* \*\*Chrome 153 Release Notes and Beta Blog\*\* (\*developer.chrome.com\* / \*Chrome for Developers\*): Chrome announced native IAMF decoding support shipping starting in ...
- [chrome.com](https://developer.chrome.com/blog/chrome-153-beta) *(developer.chrome.com)*
  > Official Chromium & Chrome for Developers Announcements \* \*\*Chrome 153 Release Notes and Beta Blog\*\* (\*developer.chrome.com\* / \*Chrome for Developers\*): Chrome announced native IAMF decoding support shipping starting in ...
- [chromestatus.com](https://chromestatus.com/feature/5113656292540416?gate=6532453910052864) *(chromestatus.com)*
  > The release highlights MSE playback integration, and developers can inspect streams through the DevTools Media panel and \`chrome://media-internals\`
- [chromestatus.com](https://chromestatus.com/reports/external_reviews/gecko) *(chromestatus.com)*
  > Cross-Browser Standardization Reviews \* \*\*Mozilla Standards Positions (\`mozilla/standards-positions#1437\`)\*\*: Chromium engineers filed for an official position from Firefox regarding IAMF decoding within media pipelines

#### 🔗 Inbound Citations & Reverse Links

- [Launch iamf\_tools Decoding Support in M153 \[535279329\] - Chromium](https://issues.chromium.org/issues/535279329) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5113656292540416`)*
  > Chromium Sign in
- [Immersive Audio Model and Formats (IAMF) decoding support · Issue #1337 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1337) *(github.com · 2026-08-14T17:31:53)* *(Cites: `https://chromestatus.com/feature/5113656292540416`)*
  > Immersive Audio Model and Formats (IAMF) decoding support · Issue #1337 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance sett...
- [New IAMF Support feature · Issue #4179 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4179) *(github.com · 2026-07-14T17:22:16)* *(Cites: `https://chromestatus.com/feature/5113656292540416`)*
  > New IAMF Support feature · Issue #4179 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wi...
- [\[blink-dev\] Intent to Implement and ship: Immersive Audio Model and Formats (IAMF) decoding support](http://www.mail-archive.com/blink-dev@chromium.org/msg17129.html) *(mail-archive.com)* *(Cites: `https://github.com/SyedAbuTalib/iamf-explainer/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Implement and ship: Immersive Audio Model and Formats (IAMF) decoding support Skip to site navigation (Press enter) \[blink-dev\] Intent to Implement and ship: Immersive Audio Model and Formats (IAMF)...
- [\[blink-dev\] Re: Intent to Implement and ship: Immersive Audio Model and Formats (IAMF) decoding support](http://www.mail-archive.com/blink-dev@chromium.org/msg17134.html) *(mail-archive.com)* *(Cites: `https://github.com/SyedAbuTalib/iamf-explainer/blob/main/explainer.md`)*
  > \[blink-dev\] Re: Intent to Implement and ship: Immersive Audio Model and Formats (IAMF) decoding support Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Implement and ship: Immersive Audio Model and Format...

#### 📚 Platform Documentation & References

- [Immersive Audio Model and Formats (IAMF) decoding support · Issue #1337 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1337) *(github.com)*
- [New IAMF Support feature · Issue #4179 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4179) *(github.com)*
- [iamf/index.bs at main · AOMediaCodec/iamf](https://github.com/AOMediaCodec/iamf/blob/main/index.bs) *(github.com)*
- [feat(guides/js): add spatial audio streaming guide with IAMF and MSE support (fixes #1337) by Nithin0620 · Pull Request #1382 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/pull/1382) *(github.com)*
- [GitHub - AOMediaCodec/iamf: Immersive Audio Model and Formats · GitHub](https://github.com/AOMediaCodec/iamf) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Immersive Audio Model and Formats (IAMF) decoding support Demo](https://crsrc.org/c/media/test/data/iamf_alternating_sine_waves_stereo.mp4)
- [Immersive Audio Model and Formats (IAMF) decoding support Demo](https://crsrc.org/c/media/test/data/iamf_alternating_sine_waves_714.mp4)
- [Immersive Audio Model and Formats (IAMF) decoding support Demo](https://aomediacodec.github.io/iamf-tools/web_demo)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 12 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 7 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (8 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="6185007701557248-spell-check-custom-dictionary-api"></a>
### [Spell check custom dictionary API](https://chromestatus.com/feature/6185007701557248)

- **Milestone:** Chrome 153 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/6185007701557248](https://chromestatus.com/feature/6185007701557248) · [chromestatuslite.com/feature/6185007701557248](https://chromestatuslite.com/feature/6185007701557248)
- **Specification:** [https://github.com/whatwg/html/pull/12590](https://github.com/whatwg/html/pull/12590)
- **Chromium Bug:** [https://issues.chromium.org/issues/428005649](https://issues.chromium.org/issues/428005649)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `Neutral` · Safari: `No signal`

#### 📝 Overview

Adds document.spellCheckCustomDictionary, which lets a page add words to and remove words from a per-document dictionary that the browser's spell checker consults alongside its built-in dictionaries. Matching words are no longer flagged as misspelled in that document, so sites with domain-specific vocabulary, such as product names, technical terms or proper nouns, can suppress false positives without asking users to edit their browser dictionary. The words last only for the document's lifetime and cannot be read back.

> **Motivation:** Spell checkers routinely flag words that are correct within a particular site but unknown to general dictionaries. Examples include:  - A Pokémon wiki containing names like Pikachu or Charmander. - A financial analysis dashboard referencing company‑specific product names or tickers. - A medical or scientific tool using specialized terminology.  Fal...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 245 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""document.spellCheckCustomDictionary""`, `""spellCheckCustomDictionary" OR "Spell check custom dictionary API""`, `""SpellCheckCustomDictionary" site:github.com/WebKit/standards-positions"`
- **Analysis:** Spearheaded by Igalia with Bloomberg Tech support, the Spell Check Custom Dictionary API introduces an in-memory, document-scoped interface (\`document.spellCheckCustomDictionary\`) designed to suppress false-positive spellcheck squiggles for domain-specific vocabulary. The proposal is currently being standardized via a WHATWG HTML specification pull request and is available for developer trials behind an experimental flag in Chromium. Cross-engine consensus remains in early stages: Mozilla has officially adopted a neutral stance, WebKit is still reviewing the proposal, and the feature is not yet indexed in Baseline.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should treat this capability strictly as a progressive enhancement by feature-detecting \`document.spellCheckCustomDictionary\` before invoking \`addWords()\`. Teams managing domain-heavy web applications can experiment with the feature behind Chromium runtime flags and provide upstream feedback to the WHATWG workstream while awaiting broader engine consensus.
- Standards Activity (WebKit): Latest discussion from @ziransun: "&gt; Speaking in my personal capacity: &gt;  &gt; The \[explainer\](https://github.com/Igalia/explainers/blob/main/spell-check-dictionary/README.md) says entries..."
- Standards Activity (Mozilla): Latest discussion from @ziransun: "&gt; \[@saschanaz\](https://github.com/saschanaz) I understood \`removeWords()\` as removing from the existing set (so it's only doing something if you have ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **10 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [SpellCheckCustomDictionary](https://github.com/WebKit/standards-positions/issues/646) [open] `venue: WHATWG HTML Workstream`, `from: Igalia`
  > *Latest discussion from @ziransun: "&gt; Speaking in my personal capacity: &gt;  &gt; The \[explainer\](https://github.com/Igalia/explainers/blob/main/spell-check-dictionary/README.md) says entries..."*
- **Mozilla:** [SpellCheckCustomDictionary](https://github.com/mozilla/standards-positions/issues/1384) [closed] `venue: WHATWG`, `position: neutral`, `topic: API`
  > *Latest discussion from @ziransun: "&gt; \[@saschanaz\](https://github.com/saschanaz) I understood \`removeWords()\` as removing from the existing set (so it's only doing something if you have ..."*

#### 📰 Ecosystem Blogs & Articles

- [Enhanced Spell Checking on the Web](https://bkardell.com/blog/EnhancedSpellchecking.html) *(bkardell.com)*
  > spellCheckCustomDictionary\`, a per-document, programmatic dictionary designed to work alongside existing browser and operating system dictionaries \* \*\*The Solution:\*\* The API exposes two straightforward methods
- [chromestatus.com](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > \* \*\*Document-scoped lifetime:\*\* Words are kept strictly in memory for the duration of the current document lifecycle and do not persist across navigations or bleed into user profiles spellCheckCustomDictionary\`
- [appspot.com](https://chromiumdash.appspot.com/commit/e2a2b4d1ee05577e396f5a20d0210d855035a17e) *(chromiumdash.appspot.com)*
  > Release entries and Chromium Dash commits highlight implementation specifics, such as input sanitization where \`addWords()\` silently skips invalid inputs (such as empty strings, unpaired Unicode surrogates, or strings wi...
- [appspot.com](https://chromiumdash.appspot.com/commit/8f31ca40badf6a67781f355d4697b395ab4511d2) *(chromiumdash.appspot.com)*
  > Release entries and Chromium Dash commits highlight implementation specifics, such as input sanitization where \`addWords()\` silently skips invalid inputs (such as empty strings, unpaired Unicode surrogates, or strings wi...
- [daily.dev](https://daily.dev/posts/ideals-mtgiunvyg) *(daily.dev)*
  > \* \*\*Key Takeaways:\*\* Kardell pointed out that while spell checking has been in web browsers for decades, the platform historically gave developers virtually no programmatic control over it Standards Trajectory: \*"Ideals"...
- [bkardell.com](https://bkardell.com/blog/Ideals.html) *(bkardell.com)*
  > \* \*\*Key Takeaways:\*\* Kardell pointed out that while spell checking has been in web browsers for decades, the platform historically gave developers virtually no programmatic control over it Standards Trajectory: \*"Ideals"...

#### 🔗 Inbound Citations & Reverse Links

- [Spell check custom dictionary (spellcheck-custom-dictionary) · Issue #4464 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4464) *(github.com · 2026-10-02T14:21:12)* *(Cites: `https://chromestatus.com/feature/6185007701557248`)*
  > Spell check custom dictionary (spellcheck-custom-dictionary) · Issue #4464 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings ...
- [Intent to Prototype: Document Local Dictionary API](https://groups.google.com/a/chromium.org/g/blink-dev/c/LB5SvNilyhA) *(groups.google.com · 2025-07-22T00:00:00)* *(Cites: `https://chromestatus.com/feature/6185007701557248`)*
  > Intent to Prototype: Document Local Dictionary API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: ...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](https://www.mail-archive.com/blink-dev@chromium.org/msg14251.html) *(mail-archive.com · 2025-07-22T00:00:00)* *(Cites: `https://chromestatus.com/feature/6185007701557248`)*
  > False &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Tracking bug https://issues.chromium.org/issues/428005649 &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Estimated milestones &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; No milestones specified &gt;&gt;&...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg16929.html) *(mail-archive.com)* *(Cites: `https://github.com/Igalia/explainers/tree/main/spell-check-dictionary`)*
  > Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API Ziran Sun Tue, 07 Jul 2026 03:00:58 -0700 Thanks...
- [\[blink-dev\] Ready for Developer Testing: Spell Check Custom Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg17107.html) *(mail-archive.com)* *(Cites: `https://github.com/Igalia/explainers/tree/main/spell-check-dictionary`)*
  > Explainer https://github.com/I... Summary We are proposing a Spell Check Custom Dictionary API: &lt;strong&gt;a per‑document based, transient dictionary that supplements the browser&#x27;s built-in spell-checking dictionaries&lt;...

#### 📚 Platform Documentation & References

- [explainers/spell-check-dictionary/README.md at main · Igalia/explainers](https://github.com/Igalia/explainers/blob/main/spell-check-dictionary/README.md) *(github.com)*
- [SpellCheckCustomDictionary · Issue #646 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/646) *(github.com)*
- [Spell check custom dictionary (spellcheck-custom-dictionary) · Issue #4464 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4464) *(github.com)*
- [SpellCheckCustomDictionary · Issue #1384 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1384) *(github.com)*
- [SpellCheckCustomDictionary: Add security & Privacy questionnaire answ… by ziransun · Pull Request #110 · Igalia/explainers](https://github.com/Igalia/explainers/pull/110) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Spell check custom dictionary API Demo](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/web_tests/wpt_internal/spell-check-custom-dictionary/add-remove-words-manual.html)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (46 found across 12 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 11 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (6 found, 6 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 10

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

- **Momentum:** **Moderate** (footprint 230 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"Language Detector API Chrome Android translation api"`, `"LanguageDetector API Mozilla standards position WebKit"`
- **Analysis:** The expansion of the Language Detector API to Chrome on Android broadens Chromium's built-in on-device AI capabilities to mobile web apps, enabling privacy-preserving, zero-cost language identification. However, the feature currently sits in Limited Availability on Baseline without cross-vendor consensus. While developers appreciate the efficiency over cloud round-trips, the absence of multi-engine support prevents it from becoming a dependable web standard.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat the API strictly as a progressive enhancement behind explicit runtime feature checks (\`'LanguageDetector' in self\`). Teams must continue providing server-side endpoints or client-side WebAssembly fallbacks to handle Safari, Firefox, and unconfigured environments.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tomayac: "&gt; We have an open Pull Request to implement the proposed API into Mastodon, but we are waiting to have at least 2 browser engines support the proposal..."
- Standards Activity (Mozilla): Latest discussion from @sandstrom: "&gt; We are negative on this proposal. While we plan to describe the reasons further in \[our proposal\](https://github.com/mozilla/explainers/blob/main/tr..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **14 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Web Translation API](https://github.com/WebKit/standards-positions/issues/339) [open] `venue: WICG`, `from: Google`
  > *Latest discussion from @tomayac: "&gt; We have an open Pull Request to implement the proposed API into Mastodon, but we are waiting to have at least 2 browser engines support the proposal..."*
- **Mozilla:** [Web Translation API](https://github.com/mozilla/standards-positions/issues/1015) [closed] `position: negative`
  > *Latest discussion from @sandstrom: "&gt; We are negative on this proposal. While we plan to describe the reasons further in \[our proposal\](https://github.com/mozilla/explainers/blob/main/tr..."*

#### 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5087964794322944) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [Language detection with built-in AI \| AI in Chrome \| Chrome for Developers](https://developer.chrome.com/docs/ai/language-detection) *(developer.chrome.com)*
  > Previously restricted to desktop operating systems (Windows, macOS, Linux) Previously restricted to desktop operating systems (Windows, macOS, Linux), exposing the API on Android allows mobile web applications to identif...
- [talent500.com](https://talent500.com/blog/chrome-ai-api-on-device-summarization-translation) *(talent500.com)*
  > Previously restricted to desktop operating systems (Windows, macOS, Linux) \* Bitter highlighted that early versions were desktop-only and required strict hardware flags, so bringing these lightweight primitives to Androi...
- [raymondcamden.com](https://www.raymondcamden.com/2025/08/13/adding-programming-language-detection-with-built-in-chrome-ai) *(raymondcamden.com)*
  > He highlights that using task-specific APIs (\`LanguageDetector\`) is much faster and simpler than prompting an LLM like Gemini Nano directly to "guess the language \* \*\*Raymond Camden:\*\* \*Adding Programming Language Detect...
- [caniuse.com](https://caniuse.com/wf-languagedetector) *(caniuse.com)*
  > \*\*Cross-Browser & Progressive Enhancement:\*\* Because Safari and Firefox do not currently support the Chromium built-in AI specification natively, community tutorials emphasize \*\*progressive enhancement\*\*
- [Intent to Ship: Language Detector API](https://groups.google.com/a/chromium.org/g/blink-dev/c/sWcHBe9wpbo/m/H8Xp7NXTCQAJ) *(groups.google.com)*
  > Intent to Ship: Language Detector API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Language Detector ...

#### 🔗 Inbound Citations & Reverse Links

- [Language Detector API · Issue #3717 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3717) *(github.com · 2026-01-23T16:21:35)* *(Cites: `https://webmachinelearning.github.io/translation-api`)*
  > Language Detector API · Issue #3717 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or windo...
- [Intent to Ship: Language Detector API](https://groups.google.com/a/chromium.org/g/blink-dev/c/sWcHBe9wpbo/m/H8Xp7NXTCQAJ) *(groups.google.com)* *(Cites: `https://webmachinelearning.github.io/translation-api`)*
  > Intent to Ship: Language Detector API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Language Detector ...

#### 📚 Platform Documentation & References

- [LanguageDetector - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector) *(developer.mozilla.org)*
- [Language Detector API · Issue #3717 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3717) *(github.com)*
- [Translator and Language Detector APIs - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Translator_and_Language_Detector_APIs) *(developer.mozilla.org)*
- [Using the Translator and Language Detector APIs - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using) *(developer.mozilla.org)*
- [LanguageDetector: detect() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector/detect) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `languagedetector` on [wpt.fyi](https://wpt.fyi/results?q=feature:languagedetector) (via webstatus.dev) — stable: Chrome 25% · Edge 75% · Firefox 25% · Safari 25%; experimental: Chrome 25% · Edge 75% · Firefox 25% · Safari 25%

#### 🌐 Web-features Group Context

*group-level data: web-features [`languagedetector`](https://webstatus.dev/features/languagedetector), shared with 1 other ChromeStatus feature*

- **Chrome usage:** 0.0021% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/425))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (52 found across 12 planned queries, 14 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 6 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (16 found, 1 verified) · `Hacker News Algolia` (5 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "languagedetector", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "languagedetector": Chrome 25% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 10

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
- **Analysis:** The position-visibility property's anchor-valid keyword (previously specified as the plural anchors-valid) resolves a key architectural ambiguity in the CSS Anchor Positioning specification by scoping validity checks exclusively to the default anchor box rather than multiple disparate anchor references. Following consensus within the CSS Working Group to adopt the singular syntax while retaining plural aliases for backwards compatibility, the feature has achieved solid cross-engine convergence. Safari shipped support in version 27, and Chromium is enabling it by default in Chrome 157, solidifying declarative visibility controls for tooltips and floating popovers.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building anchor-positioned UI components should standardize on the singular position-visibility: anchor-valid syntax today while ensuring their components designate an explicit default anchor. Treat the property as a progressive enhancement to clean up detached popovers and tooltips without relying on custom JavaScript intersection observers.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Suggest positive...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **19 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **Mozilla:** [\`position-visibility: anchor-valid\`](https://github.com/mozilla/standards-positions/issues/1457) [open] `topic: CSS`
  > *Latest discussion from @emilio: "Suggest positive...."*

#### 📰 Ecosystem Blogs & Articles

- [position-visibility \| CSS-Tricks](https://css-tricks.com/almanac/properties/p/position-visibility) *(css-tricks.com)*
  > The \`position-visibility\` CSS property controls conditional hiding for anchor-positioned elements (such as tooltips, popovers, and floating menus) In practice, this caused significant spec ambiguity over what constituted...
- [feedsanywhere.com](https://feedsanywhere.com/feed/11240) *(feedsanywhere.com)*
  > \* \*\*The Problem with \`anchors-valid\`\*\*: Under earlier CSS Anchor Positioning drafts, the plural value \`anchors-valid\` required the browser to hide an element if \*any\* required anchor reference failed to resolve In practi...
- [chromestatus.com](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > Because only a single default anchor is inspected, the keyword was renamed from plural \`anchors-valid\` to singular \`anchor-valid\` (alongside \`anchors-visible\` → \`anchor-visible\`) The plural keywords remain supported as l...
- [caniuse.com](https://caniuse.com/?search=anchor-valid) *(caniuse.com)*
  > The plural keywords remain supported as legacy aliases for backwards compatibility
- [webkit.org](https://webkit.org/blog/18325/webkit-features-for-safari-27-0) *(webkit.org)*
  > WebKit Blog & Safari Release Announcements (\*WebKit Features for Safari 27.0\*) \* \*\*Context\*\*: WebKit documented the spec evolution and behavior change when shipping anchor positioning improvements The \`anchors-valid\` val...
- [webkit.org](https://webkit.org/blog/17962/release-notes-for-safari-technology-preview-244) *(webkit.org)*
  > The \`anchors-valid\` value is now \`anchor-valid\`, while \`anchors-visible\` is now \`anchor-visible\`."\* \* WebKit also confirmed that Safari supports the new singular syntax while aliasing the older plural values to avoid bre...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17586.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mike Taylor Tue, 29 Sep 2026 15:13:57 ...

#### 📚 Platform Documentation & References

- [\`position-visibility: anchor-valid\` · Issue #1457 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1457) *(github.com)*
- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/de/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [Document position-visibility: anchors-valid · Issue #43120 · mdn/content](https://github.com/mdn/content/issues/43120) *(github.com)*
- [\[css-anchor-position\] Details on "anchors-valid" · Issue #10201 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10201) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 96.8% · Edge 96% · Firefox 84.3% · Safari 93.8%; experimental: Chrome 96.8% · Edge 97% · Firefox 85.1% · Safari 94%

#### 🌐 Web-features Group Context

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- **Chrome usage:** 0.067% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 11 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 11 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(group "anchor-positioning", shared with 8 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "anchor-positioning": Chrome 96.8% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 1

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

- **Momentum:** **Moderate** (footprint 225 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Single-axis scroll containers extend the CSS overflow property to pair scrollable values with clip (such as \`overflow: auto clip\`), preventing the browser from coercing the clipped axis into a two-dimensional scroller. Shipped by Chromium and endorsed by a closed W3C TAG design review, the specification directly addresses a decade-old CSS Working Group bottleneck that broke directional sticky positioning and DOM scroll APIs. While cross-browser interoperability awaits official Gecko and WebKit implementations, consensus around the technical direction is solid.

**Key Recommendations & Takeaways:**
- Actionable Advice: Developers should begin testing two-dimensional layouts using \`overflow: auto clip\` or \`overflow: scroll clip\`, but should guard the rule with \`@supports (overflow: auto clip)\` as a progressive enhancement until Gecko and WebKit deliver production support.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @freedebreuil: "&gt; How does this play with touch-action?  Thanks, good point. I think the right model is that scroll containers are now per-axis. For \`touch-action\`, t..."
- Standards Activity (W3C TAG): Latest discussion from @lukewarlow: "Hi @freedebreuil the TAG has discussed this and we're satisfied with this change.  Thanks for flying TAG..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *In developer trial (Behind a flag)* to *Enabled by default*
- 📰 **8 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/680) [open] `topic: css`, `from: Google`, `topic: scrolling`
- **Mozilla:** [Single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1418) [open] `venue: W3C`, `topic: CSS`
  > *Latest discussion from @freedebreuil: "&gt; How does this play with touch-action?  Thanks, good point. I think the right model is that scroll containers are now per-axis. For \`touch-action\`, t..."*
- **W3C TAG:** [Other Spec Review: Single-Axis Scroll Containers](https://github.com/w3ctag/design-reviews/issues/1222) [closed] `Resolution: satisfied`, `Review type: later review`, `Missing: Multi-stakeholder support`
  > *Latest discussion from @lukewarlow: "Hi @freedebreuil the TAG has discussed this and we're satisfied with this change.  Thanks for flying TAG..."*

#### 📰 Ecosystem Blogs & Articles

- [Ready for developer testing: Single-axis scroll containers \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/single-axis-scroll-containers-ready-for-testing) *(developer.chrome.com)*
  > Ready for developer testing: Single-axis scroll containers \| Blog \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil T...
- [localenhance.com](https://labs.localenhance.com/labs/two-axes) *(labs.localenhance.com)*
  > This turned the element into a two-dimensional scroller on both axes \*LocalEnhance Labs\*: \*"TWO AXES: The Sticky Element That Could Not Pick a Scroller"\* \* \*\*Source:\*\* \*LocalEnhance Labs Drop 055\*
- [Single-axis scroll containers – River Writes - A MediaWiki Blog](https://blog.river.me/single-axis-scroll) *(blog.river.me)*
  > Single-axis scroll containers – River Writes - A MediaWiki Blog This page looks best with JavaScript enabled Single-axis scroll containers 📅 Oct 2, 2026 &middot; ☕ 4 min read 🏷️ #css W3C has finally closed Issue #865 ,...
- [kneepotato.com](https://kneepotato.com/articles/single-axis-scroll-sticky-label-observation-record) *(kneepotato.com)*
  > \*Knee Potato\*: \*"Single-Axis Scrolling: A Sticky-Label Observation Record"\* \* \*\*Source:\*\* \*Developer testing & implementation guide\* \*Knee Potato\*: \*"Single-Axis Scrolling: A Sticky-Label Observation Record"\* \* \*\*Source:...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Chris Harrelson Wed, 19 Aug 2026 07:31:33 -0700 LG...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Single-axis scroll containers Chromestatus Tue, 11 Aug 2026 11:26:13 -0700 Contact emails \[email...

#### 🔗 Inbound Citations & Reverse Links

- [Other Spec Review: Single-Axis Scroll Containers · Issue #1222 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1222) *(github.com · 2026-04-24T21:00:17)* *(Cites: `https://chromestatus.com/feature/5067363861004288`)*
  > Other Spec Review: Single-Axis Scroll Containers · Issue #1222 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Chris Harrelson Wed, 19 Aug 2026 07:31:33 -0700 LG...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > \[blink-dev\] Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Single-axis scroll containers Chromestatus Tue, 11 Aug 2026 11:26:13 -0700 Contact emails \[email...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Alex Russell Mon, 17 Aug 2026 11:59:23 -0700 Hey Free, Dan...

#### 📚 Platform Documentation & References

- [w3.org](https://www.w3.org/2026/07/22-css-minutes.html) *(w3.org)*
- [Other Spec Review: Single-Axis Scroll Containers · Issue #1222 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1222) *(github.com)*
- [Single-axis scroll containers · Issue #1436 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1436) *(github.com)*
- [Overflowing content - Learn web development \| MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Overflow) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `overflow` on [wpt.fyi](https://wpt.fyi/results?q=feature:overflow) (via webstatus.dev) — stable: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%; experimental: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%

#### 🌐 Web-features Group Context

*group-level data: web-features [`overflow`](https://webstatus.dev/features/overflow), shared with 1 other ChromeStatus feature*

- **Chrome usage:** 0.081% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/190))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 12 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 5 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "overflow", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "overflow": Chrome 100% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 6

---

<a id="5183354944225280-webtransport-datagram-writable-streams-and-prioritization"></a>
### [WebTransport Datagram writable streams and prioritization](https://chromestatus.com/feature/5183354944225280)

- **Milestone:** Chrome 155 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5183354944225280](https://chromestatus.com/feature/5183354944225280) · [chromestatuslite.com/feature/5183354944225280](https://chromestatuslite.com/feature/5183354944225280)
- **Specification:** [https://www.w3.org/TR/webtransport/#datagram-writable](https://www.w3.org/TR/webtransport/#datagram-writable)
- **Chromium Bug:** [https://issues.chromium.org/issues/547572475](https://issues.chromium.org/issues/547572475)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `Shipped/Shipping` · Safari: `In development`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

#### 📝 Overview

Adds the modern WebTransport Datagram sending API.  WebTransportDatagramDuplexStream.createWritable() creates independent WebTransportDatagramsWritable streams. Each writable has mutable sendGroup and sendOrder attributes for expressing relative priority among queued WebTransport data in the same send group. Chromium currently applies this ordering among Datagram writables.  The implementation also reports the negotiated maximum outgoing Datagram payload size and discards oversized writes as required by the WebTransport specification.

> **Motivation:** The original WebTransport Datagram API exposes only a single writable stream, preventing applications from independently scheduling different classes of latency-sensitive messages.  The newer API allows applications such as games, remote-interaction systems, and real-time media applications to create multiple Datagram writables and prioritize urgen...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 220 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebTransport" datagram prioritization W3C github"`, `""WebTransport" "createWritable" datagram "sendGroup" "sendOrder""`, `""WebTransportDatagramDuplexStream" "createWritable""`
- **Analysis:** The WebTransport Datagram writable streams and prioritization update modernizes client-server QUIC networking by replacing the legacy singleton writable stream with \`createWritable()\`, bringing fine-grained scheduling via \`sendGroup\` and \`sendOrder\` to datagrams. Reaching maturity within the W3C Candidate Recommendation track and tracked under Interop 2026, the specification resolves longstanding architectural bottlenecks for high-frequency gaming and Media over QUIC (MoQ) stacks. Ecosystem alignment is exceptionally strong, with Safari and Firefox already supporting the API while Chromium advances it behind flags.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt feature detection by prioritizing \`transport.datagrams.createWritable()\` while retaining a defensive fallback to the deprecated \`transport.datagrams.writable\` for older Chromium clients. Developers building streaming media or low-latency multiplayer architectures can immediately test prioritized datagram queues in Firefox, Safari, and flagged Chromium builds.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5183354944225280) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > The \*\*"WebTransport Datagram writable streams and prioritization"\*\* update modernizes the WebTransport Datagram API to solve architectural bottlenecks inherent in its original design writable\`), preventing applications f...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com)*
  > createWritable()\` method allows applications to spawn multiple independent \`WebTransportDatagramsWritable\` instances \* \*\*Fine-Grained Prioritization (\`sendOrder\` & \`sendGroup\`):\*\* Each datagram writable stream includes m...
- [web.dev](https://web.dev/blog/web-platform-09-2026?hl=en) *(web.dev)*
  > dev’s release roundups highlight multi-browser progress on WebTransport features createWritable()\`, \`createSendGroup()\`, and session draining
- [\[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17327.html) *(mail-archive.com)*
  > Blink component Blink&gt;Network&gt;WebTransport Web Feature ID webtransport Motivation &lt;strong&gt;The original WebTransport Datagram API exposes only a single writable stream&lt;/strong&gt;, preventing applications from independ...
- [WebTransport](https://w3c.github.io/webtransport) *(w3c.github.io · 2021-10-01T12:35:03)*
  > The WebTransportSendOptions is a base dictionary of parameters that affect how createUnidirectionalStream, createBidirectionalStream, and the createWritable methods behave.
- [WebTransportDatagramDuplexStream interface - WebIDLpedia](https://dontcallmedom.github.io/webidlpedia/names/WebTransportDatagramDuplexStream.html) *(dontcallmedom.github.io)*
  > \[Exposed=(Window,Worker), SecureContext\] interface WebTransportDatagramDuplexStream { WebTransportDatagramsWritable createWritable( optional WebTransportSendOptions options = {}); readonly attribute ReadableStream readab...

#### 📚 Platform Documentation & References

- [WebTransportDatagramDuplexStream: createWritable() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) *(developer.mozilla.org)*
- [WebTransportDatagramsWritable - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [WebTransport: createSendGroup() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/createSendGroup) *(developer.mozilla.org)*
- [WebTransportDatagramDuplexStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramDuplexStream) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 48.6% · Edge 48.6% · Firefox 67.6% · Safari 44.8%; experimental: Chrome 92.4% · Edge 87.6% · Firefox 63.8% · Safari 80%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

- **Chrome usage:** 0.000088% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 12 planned queries, 17 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 7 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 16 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 48.6% passing (stable))* · `Sources cited by the AI synthesis` (8 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (footprint 215 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"webkit text overflow string value"`, `"css text overflow string value chromium intent to ship"`
- **Analysis:** The CSS text-overflow string value specified in CSS Overflow Module Level 4 allows authors to designate custom truncation tokens (such as localized strings or empty strings) natively in CSS. Gecko has supported string clipping since Firefox 9, WebKit has officially supported the spec and merged its implementation, and Chromium's rollout completes universal engine convergence. This resolves a decade-long interoperability gap, eliminating reliance on fragile JavaScript text measurement or positioned pseudo-element hacks.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web developers can safely begin using the feature today via progressive enhancement by declaring a fallback 'text-overflow: ellipsis' directly before the custom string declaration, or by querying it with '@supports (text-overflow: "...")'. JavaScript-based truncation scripts for single-line text containers should be audited and phased out in favor of native styling.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @jja08111: "https://github.com/WebKit/WebKit/pull/72631 has been merged, so close this issue...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **16 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS text-overflow: &lt;string&gt; value](https://github.com/WebKit/standards-positions/issues/710) [closed] `position: support`
  > *Latest discussion from @jja08111: "https://github.com/WebKit/WebKit/pull/72631 has been merged, so close this issue...."*

#### 📰 Ecosystem Blogs & Articles

- [realityripple.com](https://udn.realityripple.com/docs/Web/CSS/text-overflow) *(udn.realityripple.com)*
  > The \*\*\`text-overflow: &lt;string&gt;\`\*\* value—specified as part of the \[CSS Overflow Module Level 4\](https://drafts.csswg.org/css-overflow-4/#text-overflow)—allows authors to provide an arbitrary string (e.g., \`text-overflow: ...
- [zenn.dev](https://zenn.dev/cybozu_frontend/articles/web_standards_trends_202609) *(zenn.dev)*
  > \*\*Chrome Platform Status & Blink Intent to Ship\*\* \* \*\*Announcement\*\*: The Chromium team posted the feature entry and \*\*Intent to Ship\*\* for \*CSS \`text-overflow: &lt;string&gt;\` value\* \* \*\*Developer Blogs & Standards Trackers (...
- [webkit.org](https://webkit.org/standards-positions) *(webkit.org)*
  > \*\*WebKit Implementation\*\* \* \*\*Status & Commits\*\*: WebKit officially supported the specification in its Standards Positions and merged the implementation pull request (\*\`\[css-overflow-4\] Support text-overflow: &lt;string&gt;\`\*)
- [webkit.org](https://results.webkit.org/commit/next?repository_id=webkit&ref=6da13b652a6ee8c9b536a3ef38bf3050a5d76416) *(results.webkit.org)*
  > \* Tim Nguyen and Frédéric Wang Nélar synchronized upstream WPTs covering bidirectional line clamping, \`&lt;input&gt;\` integration, and custom string overflow, bringing Safari/WebKit to feature parity
- [webkit.org](https://results.webkit.org/commit/next?repository_id=webkit&ref=651c2a2cdcac1fb8bde41eb878db83fbf0525f31) *(results.webkit.org)*
  > \* Tim Nguyen and Frédéric Wang Nélar synchronized upstream WPTs covering bidirectional line clamping, \`&lt;input&gt;\` integration, and custom string overflow, bringing Safari/WebKit to feature parity
- [chromium.org](https://issues.chromium.org/555895001) *(issues.chromium.org)*
  > \* Tim Nguyen and Frédéric Wang Nélar synchronized upstream WPTs covering bidirectional line clamping, \`&lt;input&gt;\` integration, and custom string overflow, bringing Safari/WebKit to feature parity

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17500.html) *(mail-archive.com)* *(Cites: `https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow#string`)*
  > \[blink-dev\] Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS text-overflow: value Chromestatus Sun, 20 Sep 2026 22:03:42 -0700 Contact emails \[email&#160;prot...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17547.html) *(mail-archive.com)* *(Cites: `https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow#string`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Rick Byers Thu, 24 Sep 2026 07:16:32 -0700 LGTM3 On Tue, Sep...
- [csswg-drafts/css-overflow-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-overflow-4/#text-overflow`)*
  > csswg-drafts/css-overflow-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or windo...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/text-overflow/index.md?plain=1) *(github.com)*
- [github.com](https://github.com/w3c/csswg-drafts/issues/12617) *(github.com)*
- [csswg-drafts/css-overflow-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-4/Overview.bs) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `custom-ellipses` on [wpt.fyi](https://wpt.fyi/results?q=feature:custom-ellipses) (via webstatus.dev) — stable: Chrome 0% · Edge 0% · Firefox 34.8% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 34.8% · Safari 0%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (45 found across 12 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 13 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (4 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "custom-ellipses", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "custom-ellipses": Chrome 0% passing (stable))* · `Sources cited by the AI synthesis` (2 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

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

- **Momentum:** **Moderate** (footprint 215 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Defined in the CSS Text Decoration Module Level 4 specification to replace older monolithic skip shorthand properties, text-decoration-skip-spaces gives authors granular control over whitespace underlines and strike-throughs. Chrome has enabled the feature by default starting in Chrome 155, addressing longstanding developer requests for cleaner inline links and navigation elements. However, widespread cross-engine consensus is still developing, leaving the property currently limited to Chromium-based browsers.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams can safely apply text-decoration-skip-spaces today as a progressive enhancement, because unsupported browsers will gracefully ignore the rule and render standard text decorations without layout breakage. For design systems requiring pixel-identical underline boundaries across Safari and Firefox, teams should continue relying on existing typographic wrappers until cross-browser adoption widens.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [googleusercontent.com](https://doc-48mg-1o5g-issuetracker.googleusercontent.com/issues/40862777) *(doc-48mg-1o5g-issuetracker.googleusercontent.com)*
  > \* \*\*Syntax & Values:\*\* Values include \`none\`, \`\[ start \|\| end \]\`, or \`all\` (with the specification's default behavior tending toward \`start end\` to skip boundary whitespace)
- [tgland.ru](https://tgland.ru/article/chrome-155-vyshel-s-247-ispravleniyami-bezopasnosti-jpeg-xl-i-postkvantovoi-kriptografiei) *(tgland.ru)*
  > \* \*\*Core Benefit:\*\* Eliminates the classic typographic artifact where underlined links, navigation tabs, or strikethroughs visually spill over into trailing or leading space characters, removing the need for nested inlin...
- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > Chrome for Developers & Chrome Platform Status \* \*\*Announcement:\*\* \*Chrome 155 Beta / Release Notes (developer.chrome.com)\* dev highlighted \`text-decoration-skip-spaces\` as a major quality-of-life upgrade for modern digi...
- [CSS property: text-decoration-skip-spaces \| Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-css_properties_text-decoration-skip-spaces) *(caniuse.com)*
  > CSS property: text-decoration-skip-spaces \| Can I use... Support tables for HTML5, CSS3, etc Can I use Search ? Settings CSS property: text-decoration-skip-spaces Global usage 0.02% + 0% = 0.02% IE ❌ 6 - 10 : Not support...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > Chrome for Developers & Chrome Platform Status \* \*\*Announcement:\*\* \*Chrome 155 Beta / Release Notes (developer.chrome.com)\* \* \*\*Chrome Platform Status Entry:\*\* \*CSS4 text-decoration-skip-spaces\* \* \*\*Key Takeaway:\*\* Chrom...
- [web.dev](https://web.dev/blog/web-platform-09-2026?hl=en) *(web.dev)*
  > dev Monthly Roundups)\* dev highlighted \`text-decoration-skip-spaces\` as a major quality-of-life upgrade for modern digital typography and inline link styling

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Text_decoration) *(developer.mozilla.org)*
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/css-text-decor-4) *(w3.org)*
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com)*
- [CSS4 text-decoration-skip-spaces · Issue #1164 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1164) *(github.com)*
- [\`text-decoration-skip-spaces\` · Issue #4344 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4344) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-001.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-002.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-003.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-004.html)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 76% · Edge 76.6% · Firefox 83.5% · Safari 65.5%; experimental: Chrome 90.1% · Edge 90.1% · Firefox 84.2% · Safari 80.7%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (61 found across 11 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 10 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (4 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "text-decoration", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "text-decoration": Chrome 76% passing (stable))*
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

- **Momentum:** **Moderate** (footprint 215 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"media playback while not visible WebKit standards positions"`, `"wicg iframe media pausing"`
- **Analysis:** The 'media-playback-while-not-visible' Permissions Policy directive addresses a long-standing pain point by allowing host pages to automatically pause audible media inside hidden or zero-dimension iframes without tearing down the entire frame. Spearheaded by Microsoft and incubated within the WICG, the specification is scheduled for default enablement in Chromium while gaining traction across the web standards ecosystem. Engine consensus is progressing favorably, with active standards discussions validating the need for declarative visibility-based media gating.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt the directive today as a progressive enhancement by specifying allow="media-playback-while-not-visible 'none'" on embedded iframes or serving the corresponding HTTP Permissions-Policy header. Because unsupported browsers safely ignore unrecognized permission policy tokens, this adds zero risk to existing iframe integrations while immediately benefiting supporting engines.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @padenot: "This is \`positive\`. As mentioned in a call to Gabriel, Gecko currently has complex logic to achieve this, for power efficiency reasons, and it would b..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** ["media-playback-while-not-visible" Permission Policy](https://github.com/WebKit/standards-positions/issues/409) [open] `topic: media`, `from: Microsoft`, `topic: permissions`, `venue: Edge Explainers`
- **Mozilla:** ["media-playback-while-not-visible" Permission Policy](https://github.com/mozilla/standards-positions/issues/1082) [closed] `venue: W3C`, `venue: WHATWG`, `position: positive`
  > *Latest discussion from @padenot: "This is \`positive\`. As mentioned in a call to Gabriel, Gecko currently has complex logic to achieve this, for power efficiency reasons, and it would b..."*

#### 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/137) *(learn.microsoft.com)*
  > \* \*\*The Solution:\*\* By setting the Permissions Policy directive (via HTTP headers or the \`allow\` attribute on the \`&lt;iframe&gt;\`), embedders can instruct the browser to automatically suspend/pause audible media (\`&lt;audio&gt;\`, \`...
- [chromestatus.com](https://chromestatus.com/feature/5082950457884672?gate=5168819537707008) *(chromestatus.com)*
  > The Chrome platform entry highlights the permission policy and its triggers: \`display: none\`, \`visibility: hidden\`, or zero layout dimensions (\`width: 0\` / \`height: 0\`)
- [Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13481.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes 'Gabriel...
- [\[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg10759.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes 'Gabriel Brito' via blink-...
- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)*
  > Intent to Prototype: Pause media playback on not-rendered iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent...
- [\[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17400.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Yoav Weiss (@Shopify) Wed, 09 ...

#### 🔗 Inbound Citations & Reverse Links

- [media-playback-while-not-visible Permission Policy · Issue #1387 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1387) *(github.com · 2026-08-28T21:15:16)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > media-playback-while-not-visible Permission Policy · Issue #1387 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings Yo...
- [Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13481.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes 'Gabriel...
- [\[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg10759.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes 'Gabriel Brito' via blink-...
- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > Intent to Prototype: Pause media playback on not-rendered iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent...
- [\[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17400.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Pause media playback on not-visible iframes Yoav Weiss (@Shopify) Wed, 09 ...

#### 📚 Platform Documentation & References

- ["media-playback-while-not-visible" Permission Policy · Issue #4292 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4292) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/410) *(github.com)*
- ["media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/409) *(github.com)*
- [media-playback-while-not-visible Permission Policy · Issue #1387 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1387) *(github.com)*
- [Pausing iframe media when not visible · Issue #1468 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1468) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Pause media playback on not-visible iframes Demo](https://gabrielsanbrito.github.io/media-playback-while-not-visible)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (47 found across 12 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 5 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (3 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

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

- **Momentum:** **Moderate** (footprint 210 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""compression dictionary transport" Igalia WebKit Firefox"`, `""compression-dictionary" "Sec-Fetch-Dest" "connect-src""`, `""compression-dictionary" "request destination" html pull 11620"`, `""compression dictionary transport" "rel=compression-dictionary" destination"`
- **Analysis:** Compression Dictionary Transport (CDT) is transitioning from initial Chromium deployment toward robust cross-engine standardization as WHATWG HTML and Fetch specifications codify dedicated dictionary fetching semantics. This update aligns Chromium with recent implementation efforts in Firefox and WebKit driven by Mozilla and Igalia, standardizing the dedicated 'compression-dictionary' request destination, Content Security Policy enforcement under connect-src, and CORS/referrer handling on link elements. Cross-engine consensus is unusually collaborative, clearing the path toward full multi-vendor interoperability for massive asset-transfer savings.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt dictionary compression today as a progressive enhancement, ensuring that dictionary URLs are covered by CSP connect-src or default-src directives and configured with proper CORS headers for cross-origin assets. Continue serving standard Brotli or Zstandard encodings as fallbacks until Gecko and WebKit ship full default availability.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **10 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/refs/tags/134.0.6976.1/docs/experiments/compression-dictionary-transport.md) *(chromium.googlesource.com)*
  > \* \*\*Dedicated Request Destination:\*\* Fetches initiated by \`&lt;link rel="compression-dictionary"&gt;\` or \`Link: &lt;...&gt;; rel="compression-dictionary"\` now explicitly use \`"compression-dictionary"\` as their fetch request destinat...
- [webkit.org](https://results.webkit.org/commit?repository_id=webkit&id=319327%40main) *(results.webkit.org)*
  > \*\*Context & Motivation:\*\* While base dictionary transport shipped in Chromium 130, Mozilla and Igalia have been implementing CDT in Gecko (Firefox) and WebKit (Safari) destination === "compression-dictionary"\`) and unifo...
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > Developer Tooling & Ecosystem Monitoring (Polypane, Standards Bodies) \* \*\*Polypane Experimental Features:\*\* Polypane tracks this update as \*\*"CDT New Destination"\*\*, highlighting the standardization of \`crossorigin\` and ...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17600.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 3...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17528.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 23 Sep 20...
- [RFC 9842: Compression Dictionary Transport \| RFC Editor](https://www.rfc-editor.org/info/rfc9842) *(rfc-editor.org · 2025-09-30T00:00:00)*
  > By utilizing this technique, clients and servers can reduce the size of transmitted data, leading to improved performance and reduced bandwidth consumption. This document extends existing HTTP compression methods and pro...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17600.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11620`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 3...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Sec-Fetch-Dest) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Fetch_metadata) *(developer.mozilla.org)*
- [mozilla.org](https://firefox-source-docs.mozilla.org/networking/cache2/doc.html) *(firefox-source-docs.mozilla.org)*
- [rel="compression-dictionary" - HTML - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) *(developer.mozilla.org)*
- [compression-dictionary-transport/examples.md at main · WICG/compression-dictionary-transport](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `compression-dictionary-transport` on [wpt.fyi](https://wpt.fyi/results?q=feature:compression-dictionary-transport) (webstatus.dev has no pass rates for it)

#### 🌐 Web-features Group Context

*group-level data: web-features [`compression-dictionary-transport`](https://webstatus.dev/features/compression-dictionary-transport), shared with 3 other ChromeStatus features*

- **Chrome usage:** 0.11% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/315))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 11 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 6 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (1 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "compression-dictionary-transport", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "compression-dictionary-transport": no stable pass rate for Chrome yet)* · `Sources cited by the AI synthesis` (7 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (footprint 200 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"site:github.com/WICG/connection-allowlists "embedded enforcement""`, `""Connection Allowlists" "Embedded Enforcement" WICG"`, `""Connection Allowlists" standards position webkit mozilla"`
- **Analysis:** Connection Allowlists - Embedded Enforcement extends the core Connection Allowlists feature across iframe boundaries and nested workers, using a model inspired by CSP Embedded Enforcement to prevent child contexts from bypassing host network policies. Spearheaded by Microsoft Edge and Google engineers within the WICG, the capability is entering a Chromium Origin Trial targeted for Chrome 157. While the core networking primitive is shipping in Chromium-based browsers, nested enforcement remains experimental and is not yet part of Baseline interoperability.

**Key Recommendations & Takeaways:**
- Actionable Advice: Engineering teams managing sensitive host applications or embedded widget ecosystems should pilot the feature via the Origin Trial and Canary flags to stress-test local schemes and iframe policy matching. Because cross-engine adoption is still pending, teams must maintain standard CSP fallback policies rather than relying exclusively on embedded allowlists in production.
- In active Origin Trial in Chrome 157. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @mikewest: "A brief update on timing: we're now planning an initial Origin Trial starting in Chrome 147 (https://groups.google.com/a/chromium.org/g/blink-dev/c/lR..."
- Standards Activity (Mozilla): Latest discussion from @evilpie: "Suggested position: positive  #1431..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **17 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Connection Allowlists](https://github.com/WebKit/standards-positions/issues/583) [open] 
  > *Latest discussion from @mikewest: "A brief update on timing: we're now planning an initial Origin Trial starting in Chrome 147 (https://groups.google.com/a/chromium.org/g/blink-dev/c/lR..."*
- **Mozilla:** [Connection Allowlists](https://github.com/mozilla/standards-positions/issues/1322) [closed] `position: positive`, `topic: HTTP`, `team: Networking`, `team: Security`
  > *Latest discussion from @evilpie: "Suggested position: positive  #1431..."*

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5657801797009408) *(img544-dot-cr-status.appspot.com)*
  > \*\*Embedded Enforcement\*\* extends this boundary across iframe and nested context boundaries \* \*\*Origin Trial & ChromeStatus Listings (\*chromestatus.com/feature/5175745573945344\*):\*\* \* While core Connection Allowlists ente...
- [googlesource.com](https://chromium.googlesource.com/chromium/src.git/+/refs/heads/main/third_party/blink/renderer/platform/runtime_enabled_features.json5) *(chromium.googlesource.com)*
  > \*\*Embedded Enforcement\*\* extends this boundary across iframe and nested context boundaries: \* Modeled on \*\*CSP Embedded Enforcement (CSPEE)\*\*, it introduces the \`connectionallowlist\` content attribute and \`connectionAllo...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \* \*\*Origin Trial & ChromeStatus Listings (\*chromestatus.com/feature/5175745573945344\*):\*\* \* While core Connection Allowlists entered origin trials and rollout starting in earlier milestones (e.g., Chrome 148–152), the de...
- [webkit.org](https://webkit.org/standards-positions) *(webkit.org)*
  > \* \*\*Browser Standards Positions (WebKit / Mozilla):\*\* \* WebKit opened standards review requests tracking the base Connection Allowlists specification and its iframe embedded enforcement primitives
- [chromestatus.com](https://chromestatus.com/reports/external_reviews/webkit) *(chromestatus.com)*
  > \* \*\*Browser Standards Positions (WebKit / Mozilla):\*\* \* WebKit opened standards review requests tracking the base Connection Allowlists specification and its iframe embedded enforcement primitives
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17559.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement 'Giovanni Del Valle'...

#### 🔗 Inbound Citations & Reverse Links

- [Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists](https://github.com/WICG/connection-allowlists/pull/41) *(github.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance set...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17559.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement 'Giovanni Del Valle'...

#### 📚 Platform Documentation & References

- [mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=2056838) *(bugzilla.mozilla.org)*
- [github.com](https://github.com/wicg/connection-allowlists/issues/36) *(github.com)*
- [github.com](https://github.com/WICG/connection-allowlists) *(github.com)*
- [Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists](https://github.com/WICG/connection-allowlists/pull/41) *(github.com)*
- [Connection Allowlists · Issue #1424 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/1424) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (48 found across 12 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 8 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (1 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (7 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 6

---

<a id="6552486106234880-deprecate-and-remove-protected-audience"></a>
### [Deprecate and Remove Protected Audience](https://chromestatus.com/feature/6552486106234880)

- **Milestone:** Chrome 153 (Deprecated)
- **ChromeStatus:** [chromestatus.com/feature/6552486106234880](https://chromestatus.com/feature/6552486106234880) · [chromestatuslite.com/feature/6552486106234880](https://chromestatuslite.com/feature/6552486106234880)
- **Specification:** [https://wicg.github.io/turtledove](https://wicg.github.io/turtledove)
- **Browser Signals:** Chrome: `Deprecated` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The Protected Audience API provides a method of interest-group advertising without third-party cookies or user tracking across sites.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Protected Audience API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).

> **Motivation:** Chrome has announced that the current approach to third-party cookies will be maintained. Since that announcement there has been virtually no interest in the Protected Audience API. Use of the joinAdInterestGroup() API has decreased by almost 100x and use of the runAdAuction() API has decreased by more than 10x. Of the auctions occurring today, vir...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 200 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Protected Audience" deprecate remove Chrome 153 OR "Protected Audience API""`, `""Deprecate and Remove" "Protected Audience" chrome blink-dev"`, `""Protected Audience" "joinAdInterestGroup" "runAdAuction" decreased blink-dev"`
- **Analysis:** Following Chrome's decision to maintain third-party cookies through user choice controls rather than universal blocking, Google scheduled the Protected Audience API for deprecation and removal by Chrome 153. Usage telemetry reported in the blink-dev intent showed that real-world utilization collapsed, with joinAdInterestGroup invocations declining nearly a hundredfold and virtually no auctions resulting in winning bids. With Mozilla and Apple having consistently opposed the proposal, the removal officially ends Chrome's browser-mediated ad auction experiment.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit first-party scripts and third-party advertising tags immediately to rip out invocations of navigator.joinAdInterestGroup() and navigator.runAdAuction() before execution fails entirely. Development teams should decommission dependent worklets and related Fenced Frame wrappers in favor of durable server-side and standard cross-browser web primitives.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **14 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > Google announced that Chrome would maintain its existing approach to third-party cookies (offering users an opt-in/opt-out choice framework rather than enforcing complete deprecation across the browser) Consequently, the...
- [leapbuzz.com](https://leapbuzz.com/blog/privacy-sandbox-wind-down-cookieless) *(leapbuzz.com)*
  > Google announced that Chrome would maintain its existing approach to third-party cookies (offering users an opt-in/opt-out choice framework rather than enforcing complete deprecation across the browser) \*\*Frustration Ove...
- [secureprivacy.ai](https://secureprivacy.ai/blog/google-killed-privacy-sandbox-what-changes-for-cookie-consent-in-2026) *(secureprivacy.ai)*
  > Consequently, the browser vendor initiated the \*\*deprecation and removal of several Privacy Sandbox ad-targeting and measurement APIs\*\*, most notably the \*\*Protected Audience API\*\* (formerly FLEDGE), alongside the Topics...
- [chromestatus.com](https://chromestatus.com/feature/6366274495053824) *(chromestatus.com)*
  > The deprecation process began in \*\*Chrome 144\*\*, with staged stubbing and removals advancing through \*\*Chrome 152 and 153\*\*, ultimately leading to the phaseout of associated downstream components like Fenced Frames (\`&lt;fe...
- [chromium.org](https://issues.chromium.org/460501344) *(issues.chromium.org)*
  > Blink-dev & Chromium Issue Tracker \* \*\*Intent to Deprecate and Remove\*\*: Filed on the \`blink-dev\` mailing list and tracked via Chromium Issue Tracker (Issue #460501344), engineers laid out the phased sun-setting schedule
- [google.com](https://support.google.com/chrome/a/answer/10314655?hl=en-eu) *(support.google.com)*
  > \* \*\*Decommissioning Infrastructure\*\*: The deprecation also prompted the shutdown and archiving of related server-side infrastructure, including the open-source Bidding and Auction Services and k-anonymity server dependen...

#### 🔗 Inbound Citations & Reverse Links

- [Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1141) *(github.com · 2026-07-29T21:48:26)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in...
- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > Intent to Deprecate and Remove: Protected Audience Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate a...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Privacy_sandbox) *(developer.mozilla.org)*
- [Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1141) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (64 found across 11 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 10 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (9 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5194473869017088-deprecate-and-remove-related-website-sets-rws"></a>
### [Deprecate and Remove: Related Website Sets (RWS)](https://chromestatus.com/feature/5194473869017088)

- **Milestone:** Chrome 153 (Deprecated)
- **ChromeStatus:** [chromestatus.com/feature/5194473869017088](https://chromestatus.com/feature/5194473869017088) · [chromestatuslite.com/feature/5194473869017088](https://chromestatuslite.com/feature/5194473869017088)
- **Specification:** [https://wicg.github.io/first-party-sets](https://wicg.github.io/first-party-sets)
- **Browser Signals:** Chrome: `Deprecated` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Related Website Sets (RWS), formerly known as First Party Sets, provides a framework for developers to declare relationships among sites, to enable limited cross-site cookie access for specific, user-facing purposes. This is facilitated through the use of the Storage Access API (SAA) and requestStorageAccessFor (rSAFor). RWS was designed for use in a browser without third-party cookies. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove Related Website Sets (RWS).    Once RWS is deprecated; existing usage of SAA across contexts within a set will fall back to the API’s behavior outside of RWS as specified here. The difference in SAA behavior outside of RWS is well illustrated in our developer blogpost here.   The companion rSAFor API will also be deprecated via a separate intent.     We also intend to deprecate RWS-related Chrome Enterprise policies, as well as the chrome.privacy.relatedWebsiteSetsEnabled extension API; and will follow the relevant processes.

> **Motivation:** Chrome has announced that the current approach to third-party cookies will be maintained. RWS usage is indicated by the number of registered sets (currently at 71 sets), and the usage of the requestStorageAccessFor API (currently at about 0.95% of pageloads), and after this announcement we intend to archive the registration repository, and expect a...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 200 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Opposed**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Related Website Sets" "requestStorageAccessFor" deprecation"`, `""Related Website Sets" deprecate remove Chrome"`, `""First-Party Sets" WebKit Mozilla position"`
- **Analysis:** Related Website Sets (formerly First-Party Sets) and its companion API document.requestStorageAccessFor are scheduled for full deprecation and removal in Chromium by Chrome 153, following Google's decision to maintain third-party cookies under a user-choice model. The mechanism suffered from negligible developer adoption—peaking at just 71 registered sets—and faced persistent criticism from privacy researchers as an unwarranted hole in cross-site boundary protections. With no competing browser ever implementing the mechanism, Chromium's withdrawal permanently eliminates a contentious, single-engine relaxation of same-origin storage boundaries.

**Key Recommendations & Takeaways:**
- Actionable Advice: Engineering teams must immediately audit and remove invocations of document.requestStorageAccessFor(), transitioning cross-site iframe flows to the standard, interoperable Storage Access API (document.requestStorageAccess) or Partitioned Cookies (CHIPS). Enterprise administrators should update device configurations to eliminate legacy RelatedWebsiteSetsEnabled enterprise policy dependencies before the milestone removal.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5162221567082496) *(chromestatus.com)*
  > requestStorageAccessFor()\` (\`rSAFor\`)\*\* relatedWebsiteSetsEnabled\`) are phased out
- [leapbuzz.com](https://leapbuzz.com/blog/privacy-sandbox-wind-down-cookieless) *(leapbuzz.com)*
  > Following Google’s pivot to maintain support for third-party cookies (offering a user-choice model rather than complete default deprecation), Google scheduled RWS and associated APIs for full deprecation and removal Deve...
- [hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > \* \*\*Deprecation & Removal Target:\*\* Deprecation warnings rolled out starting around Chrome 144, with removals progressing toward Chrome 152–153 requestStorageAccessFor"\*\*: \* \*\*Motivation:\*\* The Blink intent explicitly no...
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com)*
  > \* \*\*Impact on SAA:\*\* The Storage Access API itself remains supported across all major browsers, but invocations within former set domains will now fall back to standard SAA behavior (requiring user interaction and permis...
- [chromeenterprise.google](https://chromeenterprise.google/intl/en_au/policies/related-website-sets-enabled) *(chromeenterprise.google)*
  > relatedWebsiteSetsEnabled\`) are phased out \* Clarifies enterprise impact: Chrome Enterprise policy \`RelatedWebsiteSetsEnabled\` is marked deprecated, and administrators are advised to shift intranet workflows to standard ...
- [chrome.com](https://developer.chrome.com/release-notes/153) *(developer.chrome.com)*
  > Chrome Release Notes & Developer Guides (\`developer.chrome.com\`) \* \*\*Chrome Beta and Stable Release Notes (Chrome 152 / 153)\*\*: \* Outlines RWS removal alongside several other retired Privacy Sandbox APIs (including Topic...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Intent to Deprecate and Remove: Related Website Sets (RWS) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Dep...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15146.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Rick Byers Fri, 07 Nov 2...

#### 📚 Platform Documentation & References

- [Document: requestStorageAccessFor() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccessFor) *(developer.mozilla.org)*
- [GitHub - privacycg/requestStorageAccessFor: A proposed extension to the Storage Access API and discussion of how it may be integrated with First-Party Sets. · GitHub](https://github.com/privacycg/requestStorageAccessFor) *(github.com)*
- [GitHub - GoogleChrome/related-website-sets: Note: This repository will be archived and will no longer accept new submissions. · GitHub](https://github.com/GoogleChrome/related-website-sets) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 11 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 9 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (9 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (footprint 200 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"fencedframe "Remove" "window.fence" chromestatus blink-dev"`, `""Remove FencedFrame element and window.fence APIs""`, `"fenced frame deprecate remove privacy sandbox"`
- **Analysis:** The \`&lt;fencedframe&gt;\` element and \`window.fence\` APIs are being formally decommissioned and removed from Chromium starting in Chrome 156 via non-throwing stubs, followed by complete removal in Chrome 157. This follows the deprecation and withdrawal of dependent Privacy Sandbox technologies—specifically Protected Audience auctions and Shared Storage \`selectURL\`—which rendered fenced frame navigation obsolete. The removal cleans up redundant browser internals after the feature failed to achieve cross-engine consensus, having never been adopted by other major engines.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams and ad-tech integrations should immediately remove dependencies on \`&lt;fencedframe&gt;\`, \`FencedFrameConfig\`, and \`window.fence\`, refactoring any remaining workflows back to standard partitioned iframes. Audits should ensure runtime scripts do not rely on fenced frame prototypes, as unrecognized elements will degrade to \`HTMLUnknownElement\` following the removal trial.
- Marked for deprecation in Chrome 156. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Fenced frames overview \| Privacy Sandbox - Google](https://privacysandbox.google.com/private-advertising/fenced-frame) *(privacysandbox.google.com)*
  > fence APIs"\*\* on \`blink-dev\` and Chrome Platform Status marks the phaseout of the Fenced Frames specification \* \*\*Core Reason\*\*: Fenced frames were specifically designed to prevent cross-site data leakage when rendering ...
- [chromestatus.com](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > Official Chromium & Chrome Developers Announcements \* \*\*Chrome Platform Status & Chrome 156 Release Notes\*\*: \* Formally logged under tracking bug \*\*#538634423\*\* \* Listed in the \*Deprecations and Removals\* section of the ...
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com)*
  > Intent to Ship: Remove FencedFrame element and window.fence APIs ... Scheduled for phaseout. Explainer: Fenced Storage Read API. Continue to support. See Content-Security-Policy: frame-ancestors directive.
- [hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > Developer Blogs, Timelines, and Community Tracking \* \*\*Privacy Sandbox Timeline & History Trackers (e.g., Hidekazu Konishi)\*\*: \* Detailed ecosystem chronicles tracking the lifecycle of Privacy Sandbox features note that ...
- [zenn.dev](https://zenn.dev/cybozu_frontend/articles/web_standards_trends_202608) *(zenn.dev)*
  > fence APIs\* alongside broader frame architecture discussions (such as persistent widgets and standard \`&lt;iframe&gt;\` credential protections)
- [researchgate.net](https://www.researchgate.net/publication/408340951_The_Rise_and_Fall_of_Google's_Privacy_Sandbox) *(researchgate.net)*
  > \* \*\*Academic & Industry Retrospectives (e.g., \*The Rise and Fall of Google's Privacy Sandbox\*)\*\*: \* In-depth analyses examine how the reliance of \`&lt;fencedframe&gt;\` on opaque URNs and specific auction APIs made it fragile a...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17144.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > \[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs Chromestatus Tue, 11 Aug 202...
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17167.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Shivani Sharma Thu, ...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17248.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Mike Taylor ...

#### 📚 Platform Documentation & References

- [&lt;fencedframe&gt; HTML fenced frame element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fencedframe) *(developer.mozilla.org)*
- [Fenced Frame API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fenced_frame_API) *(developer.mozilla.org)*
- [Remove FencedFrame element and window.fence APIs · Issue #30 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/30) *(github.com)*
- [\[rule\] element/fencedframe · Issue #110 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/110) *(github.com)*
- [\[rule\] element/fencedframe · Issue #431 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/431) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (45 found across 12 planned queries, 16 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 8 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (4 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (footprint 190 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"CSS symbols function webkit position bugzilla"`, `"CSS symbols function counter styles WebKit Chrome"`
- **Analysis:** The CSS symbols() function closes a decade-long cross-engine interoperability gap by enabling authors to construct inline, anonymous counter styles directly inside properties like list-style-type and counter() without declaring global @counter-style rules. Long an exclusive feature in Mozilla Gecko since 2015, the API has reached cross-vendor convergence with Chromium shipping it by default in Chrome 155 and WebKit landing support enabled by default. Developer reception is enthusiastically positive as it removes unnecessary global-scope rule pollution for one-off and component-level markers.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can begin adopting symbols() immediately using progressive enhancement by declaring traditional list markers first or guarding declarations with @supports (list-style: symbols('')). Production environments targeting broader or slower-updating client footprints should retain fallback counter configurations until current updates propagate fully across mobile and desktop installs.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [\[css-counter-styles-3\] CSS symbols() function](https://github.com/WebKit/standards-positions/issues/714) [closed] `position: support`, `topic: css`, `venue: W3C CSS WG`
  > *Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1071436: Support image symbols in symbols()](https://bugzilla.mozilla.org/show_bug.cgi?id=1071436) `[NEW]`
- **WebKit (Safari):** [Bug #299922: \[css-counter-styles\] Support CSS \`symbols()\` function](https://bugs.webkit.org/show_bug.cgi?id=299922) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [symbols() \| CSS-Tricks](https://css-tricks.com/almanac/functions/s/symbols) *(css-tricks.com)*
  > \* \*\*Usage:\*\* It can be used anywhere a counter style is accepted, including \`list-style-type\`, the \`list-style\` shorthand, and inside \`counter()\` / \`counters()\` functions CSS-Tricks \* \*\*Articles & Entries:\*\* \*The CSS Alm...
- [netlify.app](https://alexanderburgos.netlify.app/blog/css-random-symbols-generative-ui) *(alexanderburgos.netlify.app)*
  > \* \*\*Primary Advantage:\*\* It eliminates global-scope clutter and boilerplate for one-off, localized list markers (e.g., cycling decorative bullets or emojis) Developer Blogs & Web Platform Ecosystem \* \*\*Blog Post:\*\* \*CSS ...
- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > Chrome for Developers & Chrome Platform Status \* \*\*Announcement / Entry:\*\* \*CSS Symbols() (Chromium Platform Status & Chrome 155 Beta release)\* Chromium engineers (with contributions from Microsoft) prioritized shipping ...
- [css-tricks.com](https://css-tricks.com/styling-counters-in-css) *(css-tricks.com)*
  > While \`@counter-style\` provides expansive configuration (e.g., \`prefix\`, \`suffix\`, fallback styles, range, and identifier tokens), \`symbols()\` acts as an anonymous, single-use, lightweight alternative CSS-Tricks \* \*\*Arti...
- [CSS symbols() Function](https://www.quackit.com/css/functions/css_symbols_function.cfm) *(quackit.com)*
  > Use the symbols() function to define a counter style from within a property value. The CSS symbols() function &lt;strong&gt;can be used with the list-style-type property and the list-style shorthand property to define a counte...
- [\[blink-dev\] Re: Intent to Ship: CSS Symbols()](http://www.mail-archive.com/blink-dev@chromium.org/msg17341.html) *(mail-archive.com)*
  > Please list open issues (e.g. links ... of &gt; the API in a non-backward-compatible way). &gt; None. &lt;strong&gt;symbols() is stable in CSS Counter Styles Level 3 (CR) with no &gt; open issues affecting its syntax or behavi...

#### 🔗 Inbound Citations & Reverse Links

- [New feature: symbols() · Issue #4203 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4203) *(github.com · 2026-07-23T18:55:08)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > New feature: symbols() · Issue #4203 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wind...
- [\[css-counter-styles-3\] CSS symbols() function · Issue #714 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/714) *(github.com · 2026-08-24T19:00:16)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > \[css-counter-styles-3\] CSS symbols() function · Issue #714 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with...

#### 📚 Platform Documentation & References

- [symbols() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/symbols) *(developer.mozilla.org)*
- [github.com](https://github.com/web-platform-dx/developer-signals/issues/942) *(github.com)*
- [New feature: symbols() · Issue #4203 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4203) *(github.com)*
- [\[css-counter-styles-3\] CSS symbols() function · Issue #714 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/714) *(github.com)*
- [symbols() CSS function · Issue #1432 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1432) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [CSS Symbols() Demo](https://developer.mozilla.org/en-US/docs/Web/CSS/symbols)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (72 found across 12 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 6 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (3 found, 2 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (3 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

---

<a id="5162221567082496-deprecate-and-remove-documentrequeststorageaccessfor"></a>
### [Deprecate and Remove: document.requestStorageAccessFor](https://chromestatus.com/feature/5162221567082496)

- **Milestone:** Chrome 153 (Deprecated)
- **ChromeStatus:** [chromestatus.com/feature/5162221567082496](https://chromestatus.com/feature/5162221567082496) · [chromestatuslite.com/feature/5162221567082496](https://chromestatuslite.com/feature/5162221567082496)
- **Specification:** [https://privacycg.github.io/requestStorageAccessFor](https://privacycg.github.io/requestStorageAccessFor)
- **Browser Signals:** Chrome: `Deprecated` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The requestStorageAccessFor (rSAFor) API is an extension to the Storage Access API that allows a top-level site to request access to unpartitioned ("first-party") cookies on behalf of embedded sites. Browsers will have discretion to grant or deny access, with mechanisms like Related Website Sets (RWS) membership as a potential signal. This allows for use of the Storage Access API by top-level sites. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove rSAFor, as it is only usable in Chrome to request storage access between RWS sites. Related Website Sets will also be deprecated via a separate intent.

> **Motivation:** Chrome has announced that the current approach to third-party cookies will be maintained. rSAFor currently has usage on about 0.95% of page loads, but any website relying on successful invocation of rSAFor (i.e. the API returns a promise that resolves) must also have registered a set on the RWS GitHub repository. Any invocations of rSAFor outside o...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 190 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"privacycg requestStorageAccessFor issues webkit mozilla"`, `"Chrome requestStorageAccessFor deprecate remove Related Website Sets"`, `"requestStorageAccessFor deprecation Chrome Status blink dev"`
- **Analysis:** Introduced as a Chromium-specific extension to the Storage Access API, document.requestStorageAccessFor permitted top-level contexts to request unpartitioned cookie access on behalf of embedded sites within a registered Related Website Set (RWS). Following Chrome's policy reversal on universal third-party cookie deprecation, the browser slated both RWS and requestStorageAccessFor for formal deprecation and ultimate removal in Chrome 153. Because other browser engines never implemented the interface, the API is headed for complete retirement as a proprietary dead end.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should immediately audit their applications to eliminate invocations of document.requestStorageAccessFor, ensuring embedded resources fall back to the standardized, iframe-driven document.requestStorageAccess API. Site owners currently registered in the Related Website Sets repository should plan to dismantle related configurations prior to Chrome 153 to avoid runtime promise rejections and broken authentication flows.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5194473869017088) *(chromestatus.com)*
  > In Chromium, access was strictly gated by membership in a \*\*Related Website Set (RWS)\*\* (formerly First-Party Sets) Following Google Chrome’s strategic reversal—deciding to maintain user-choice rather than universally de...
- [Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > Following Google Chrome’s strategic reversal—deciding to maintain user-choice rather than universally deprecating third-party cookies—Google announced plans to deprecate and remove several related Privacy Sandbox mechani...
- [chrome.com](https://developer.chrome.com/release-notes/153) *(developer.chrome.com)*
  > The deprecation roadmap initiated around \*\*Chrome 144\*\*, with IDL bindings and Blink implementation phaseouts scheduled through \*\*Chrome 152–153\*\* requestStorageAccessFor") & Chrome Release Notes\*
- [googleusercontent.com](https://doc-4ieg-4ra0-issuetracker.googleusercontent.com/issues/551998737) *(doc-4ieg-4ra0-issuetracker.googleusercontent.com)*
  > The deprecation roadmap initiated around \*\*Chrome 144\*\*, with IDL bindings and Blink implementation phaseouts scheduled through \*\*Chrome 152–153\*\*
- [google.com](https://support.google.com/chrome/a/answer/10314655?hl=en-eu) *(support.google.com)*
  > The deprecation roadmap initiated around \*\*Chrome 144\*\*, with IDL bindings and Blink implementation phaseouts scheduled through \*\*Chrome 152–153\*\* \* \*\*Timeline:\*\* Chrome marked the API deprecated starting in Chrome 144, ...
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent ...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5162221567082496`)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent ...
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ/m/Bobim4thBQAJ) *(groups.google.com)* *(Cites: `https://privacycg.github.io/requestStorageAccessFor`)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent ...

#### 📚 Platform Documentation & References

- [Document: requestStorageAccessFor() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccessFor) *(developer.mozilla.org)*
- [Using the Storage Access API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API/Using) *(developer.mozilla.org)*
- [Why is storage access for not working? (getting \`requestStorageAccessFor: Permission denied.\`) · Issue #168 · GoogleChrome/related-website-sets](https://github.com/GoogleChrome/related-website-sets/issues/168) *(github.com)*
- [Consider requestStorageAccessFor Method · Issue #107 · privacycg/storage-access · GitHub](https://github.com/privacycg/storage-access/issues/107) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (46 found across 11 planned queries, 14 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 6 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (4 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5068439115923456-disconnect-websockets-on-bfcache-entry"></a>
### [Disconnect WebSockets on BFCache entry](https://chromestatus.com/feature/5068439115923456)

- **Milestone:** Chrome 157 (Stepped rollout)
- **ChromeStatus:** [chromestatus.com/feature/5068439115923456](https://chromestatus.com/feature/5068439115923456) · [chromestatuslite.com/feature/5068439115923456](https://chromestatuslite.com/feature/5068439115923456)
- **Specification:** [https://github.com/whatwg/html/pull/12349](https://github.com/whatwg/html/pull/12349)
- **Chromium Bug:** [https://g-issues.chromium.org/issues/467838624](https://g-issues.chromium.org/issues/467838624)
- **Browser Signals:** Chrome: `Stepped rollout` · Firefox: `Positive` · Safari: `Shipped/Shipping`

#### 📝 Overview

Chrome is changing its behavior to allow pages with active WebSocket connections to enter the Back/Forward Cache. To achieve this, active WebSockets are now disconnected when a page is cached. Previously, active WebSocket connections prevented pages from entering BFCache.  To revert to the previous behavior (preventing pages with active WebSockets from entering BFCache), we've provided a \[BackForwardCacheForWebSocketsAllowed\](https://chromeenterprise.google/policies/#BackForwardCacheForWebSocketsAllowed) policy. Admins can set this policy to \_Disabled\_ , which will prevent breakage in legacy apps that lack WebSocket reconnection logic.   For more information on BFCache, see \[Test back/forward cache\](https://developer.chrome.com/docs/devtools/application/back-forward-cache).

> **Motivation:** Currently, any active WebSocket connection forces the browser to discard the page when the user navigates away, preventing it from being stored in the Back/Forward Cache (BFCache).  We are changing this behavior to allow these pages to be cached by closing any active WebSocket connections upon entry. This approach mirrors the behavior for WebTransp...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 190 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"BackForwardCacheForWebSocketsAllowed"`, `"site github com whatwg html pull websocket bfcache"`, `"WebSocket BFCache integration Disconnect on entry"`, `"chrome disconnect websockets bfcache entry"`
- **Analysis:** Chromium's stepped rollout to proactively disconnect active WebSockets upon back/forward cache (bfcache) entry aligns its behavior with WebKit and the evolving WHATWG HTML specification. This removes one of the most persistent and frustrating blockers preventing instant back/forward navigation in modern web applications. The architectural change treats WebSockets consistently with WebTransport, firing standard error and close events upon cache restoration.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should audit their client-side WebSocket handlers to verify that automatic reconnection logic cleanly triggers on standard close and error events or during the \`pageshow\` lifecycle when \`event.persisted\` is true. Enterprise developers supporting legacy dashboards without reconnect routines should prepare for deprecation of the temporary enterprise opt-out policy and modernize client socket lifecycles.
- Standards Activity (Mozilla): Latest discussion from @jesup: "I'm in favor; this is in line with what we've defined for WebTransport (@jan-ivar fyi)..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [WebSocket BFCache integration (Disconnect on entry)](https://github.com/WebKit/standards-positions/issues/648) [open] 
- **Mozilla:** [WebSocket BFCache integration (Disconnect on entry)](https://github.com/mozilla/standards-positions/issues/1390) [open] `venue: WHATWG`, `topic: API`
  > *Latest discussion from @jesup: "I'm in favor; this is in line with what we've defined for WebTransport (@jan-ivar fyi)..."*

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/blog/chrome-149-beta) *(developer.chrome.com)*
  > Starting with \*\*Chrome 149\*\* (and Microsoft Edge 152+), Chromium aligned with WebKit (Safari) by changing this behavior: \* \*\*Automatic Disconnection:\*\* When a user navigates away, active WebSockets are closed proactively...
- [microsoft.com](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/backforwardcacheforwebsocketsallowed) *(learn.microsoft.com)*
  > \* \*\*Temporary Enterprise Opt-Out:\*\* For enterprise environments and legacy applications lacking robust reconnection handling, administrators were provided the policy \[\`BackForwardCacheForWebSocketsAllowed\`\](https://chrom...
- [chromeenterprise.google](https://chromeenterprise.google/intl/en_CA/resources/release-notes) *(chromeenterprise.google)*
  > \* \*\*Temporary Enterprise Opt-Out:\*\* For enterprise environments and legacy applications lacking robust reconnection handling, administrators were provided the policy \[\`BackForwardCacheForWebSocketsAllowed\`\](https://chrom...
- [chromium.org](https://issues.chromium.org/issues/531545512) *(issues.chromium.org)*
  > Setting this to \*Disabled\* forces the legacy behavior (blocking bfcache entry when a WebSocket is open) until its scheduled removal in future versions The documentation notes that this is a transitional escape hatch (mar...
- [web.dev](https://web.dev/articles/bfcache) *(web.dev)*
  > \* \*\*Key Details:\*\* Details user-agent differences, noting that WebKit and Chrome no longer flag active WebSockets as an eviction trigger dev (\*Back/forward cache: Best Practices\*) \* \*\*Coverage:\*\* The foundational web per...
- [Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/52nlr8z3Png) *(groups.google.com · 2026-04-17T00:00:00)*
  > Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing...

#### 🔗 Inbound Citations & Reverse Links

- [Disconnect WebSockets on BFCache entry · Issue #40 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/40) *(github.com · 2026-10-05T08:17:16)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Disconnect WebSockets on BFCache entry · Issue #40 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with an...
- [Disconnect WebSockets on BFCache entry · Issue #1262 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1262) *(github.com · 2026-08-12T17:37:25)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Disconnect WebSockets on BFCache entry · Issue #1262 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in ...
- [Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/52nlr8z3Png) *(groups.google.com · 2026-04-17T00:00:00)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing...
- [\[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16328.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12349`)*
  > \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Chromestatus Fri, 17 Apr 2026 03:1...
- [Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16331.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12349`)*
  > Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry 'Gilberto Cocchi' via blin...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/whatwg/html/issues/12085) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) *(developer.mozilla.org)*
- [github.com](https://github.com/jumpserver/jumpserver/issues/17616) *(github.com)*
- [Disconnect WebSockets on BFCache entry · Issue #40 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/40) *(github.com)*
- [Disconnect WebSockets on BFCache entry · Issue #1262 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1262) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (51 found across 11 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 8 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (7 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 4

---

<a id="6249068542164992-joint-iteration"></a>
### [Joint Iteration](https://chromestatus.com/feature/6249068542164992)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6249068542164992](https://chromestatus.com/feature/6249068542164992) · [chromestatuslite.com/feature/6249068542164992](https://chromestatuslite.com/feature/6249068542164992)
- **Specification:** [https://github.com/tc39/proposal-joint-iteration](https://github.com/tc39/proposal-joint-iteration)
- **Chromium Bug:** [https://issues.chromium.org/issues/465357675](https://issues.chromium.org/issues/465357675)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `In development`

#### 📝 Overview

A TC39 proposal to synchronise the advancement of multiple iterators, often called zip.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 190 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"tc39 proposal joint iteration stage"`, `"iterator zip iterator zipkeyed javascript"`
- **Analysis:** Joint Iteration introduces native \`Iterator.zip\` and \`Iterator.zipKeyed\` methods to the JavaScript standard library, formalizing multi-iterable synchronization with configurable modes (\`shortest\`, \`longest\`, and \`strict\`). Now at TC39 Stage 4, the feature is enabled by default in Chrome 153 and implemented in Firefox, closing a longstanding utility gap in the language's native iteration primitives.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams targeting general web audiences should continue using polyfills such as core-js or lightweight iterator helpers until Safari/WebKit ships support and Baseline indexing is confirmed, though internal tooling and Chromium-focused runtimes can immediately adopt native zipping.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/status/2098134897923658034) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1911379: \[Meta\] Joint Iteration proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=1911379) `[NEW]`
- **WebKit (Safari):** [Bug #303246: \[JSC\] Implement \`Iterator.zip\` and \`Iterator.zipKeyed\`](https://bugs.webkit.org/show_bug.cgi?id=303246) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [Joint Iteration](https://tc39.es/proposal-joint-iteration) *(tc39.es)*
  > Joint Iteration Toggle shortcuts help ? Toggle "can call user code" annotations u Jump to search box / Toggle pinning of the current clause p Jump to the n th pin 1-9 Jump to the 10 th pin 0 Jump to the most recent link ...
- [New in Chrome 153 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-153) *(developer.chrome.com)*
  > join()\`, highlighting how these built-in iterator primitives complement the recently standardized Iterator Helpers (\`map\`, \`filter\`, \`take\`, \`drop\`, \`toArray\`)
- [webkit.org](https://bugs.webkit.org/show_bug.cgi?id=303246) *(bugs.webkit.org)*
  > zipKeyed()\` in Safari Technology Preview (Release 250), passing test262 compliance suites
- [webkit.org](https://webkit.org/blog/18191/release-notes-for-safari-technology-preview-250) *(webkit.org)*
  > zipKeyed()\` in Safari Technology Preview (Release 250), passing test262 compliance suites
- [betaacid.co](https://betaacid.co/blog/simplifying-array-combinations-with-arrayzip-and-arrayzipkeyed) *(betaacid.co)*
  > \* \*\*Eliminating Common Polyfill/Utility Overhead:\*\* Developer commentary (across blogs such as \*Beta Acid\* and TC39 community forums) widely welcomed the addition zipWith\`) or \`iter-tools\` to handle simple parallel itera...
- [joint-iteration.js in frontend/node\_modules/core-js-pure/proposals – medora](https://develop.finki.ukim.mk/projects/medora/browser/frontend/node_modules/core-js-pure/proposals/joint-iteration.js?order=size&rev=9af201e94b5a79beb92a30858fc54de4bc3b9449) *(develop.finki.ukim.mk)*
  > joint-iteration.js in frontend/node\_modules/core-js-pure/proposals – medora Search: Login Preferences Help/Guide About Trac Wiki Timeline Roadmap Browse Source View Tickets Search Context Navigation &larr; Previous Revis...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Joint Iteration](http://www.mail-archive.com/blink-dev@chromium.org/msg17116.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-joint-iteration`)*
  > \[blink-dev\] Intent to Ship: Joint Iteration Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Joint Iteration Chromestatus Wed, 05 Aug 2026 05:51:36 -0700 Contact emails \[email&#160;protected\] , \[email&#1...

#### 📚 Platform Documentation & References

- [Iterator.zip() - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/zip) *(developer.mozilla.org)*
- [Iterator.zipKeyed() - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/zipKeyed) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/zip) *(developer.mozilla.org)*
- [github.com](https://github.com/Jxck/tc39-llm-wiki/blob/main/wiki/families/iterator.md) *(github.com)*
- [proposal-joint-iteration/README.md at main · tc39/proposal-joint-iteration](https://github.com/tc39/proposal-joint-iteration/blob/main/README.md) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (51 found across 10 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 11 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (3 found, 1 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (5 found, 2 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (4 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (footprint 190 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""css-scroll-snap" "pair" site:github.com/w3c/csswg-drafts"`, `""scroll-snap-type" "pair""`, `""scroll-snap-type" "pair" site:github.com/WebKit/standards-positions OR site:github.com/mozilla/standards-positions"`, `""css-scroll-snap-1" "pair" chrome"`
- **Analysis:** The introduction of the pair keyword to scroll-snap-type refines the CSS Scroll Snap Module Level 1 specification by requiring 2D scroll containers to lock onto the same single element across both axes rather than resolving them independently. Chrome is shipping the feature enabled by default in Chrome 156, backed by broad consensus from the W3C CSS Working Group. The addition resolves a long-standing developer pain point for multi-axis interfaces such as 2D panning maps, whiteboards, and canvas viewers without requiring custom JavaScript scroll math.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt the feature progressively today by layering scroll-snap-type: pair on top of a scroll-snap-type: both fallback or gating it with @supports (scroll-snap-type: pair mandatory) until Gecko and WebKit finish shipping support.
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

- [appspot.com](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5124378896498688) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > The introduction of the \*\*\`pair\`\*\* keyword (\`scroll-snap-type: pair \[mandatory \| proximity\]\`) resolves \*\*CSSWG Issue #9519\*\* MDN documentation contrasts \`both\` (orthogonal independent snaps) with \`pair\` (joint 2D snap co...
- [appauxin.com](https://appauxin.com/chrome-156-release-date-features) *(appauxin.com)*
  > When \`pair\` is specified, the scroll container is required to lock onto the \*\*same single element across both axes simultaneously\*\*, providing an ergonomic CSS-native solution for 2D snapping without requiring complex Ja...
- [web.dev](https://web.dev/blog/web-platform-09-2026?hl=en) *(web.dev)*
  > dev featured \`scroll-snap-type: pair\` in its browser release previews (arriving with Chrome 156), bundling it among major CSS layout and animation enhancements such as single-axis scrolling (\`overflow: scroll clip\`), \`ra...
- [appspot.com](https://chromiumdash.appspot.com/commit/a216248c97fbbd39bffa5780515af8d50f6d53cb) *(chromiumdash.appspot.com)*
  > \* \*\*Chrome Platform Status (\*Use scroll-snap-type: pair to snap to a single element\*):\*\* Authored and driven by the Chromium layout/scroll team (\`Blink&gt;Scroll\`), the ChromeStatus entry documents the motivation and transi...
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > Developer Tools & Blogs (Polypane, AppAuxin, Community Posts) \* \*\*Polypane Experimental Web Features Guide:\*\* Polypane highlighted the feature under its experimental Chromium flags and dev previews, identifying it as a c...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Chromestatus Tue...

#### 🔗 Inbound Citations & Reverse Links

- [scroll-snap-pair · Issue #4461 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4461) *(github.com · 2026-10-01T21:55:02)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > scroll-snap-pair · Issue #4461 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Re...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Chromestatus Tue...
- [\[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17244.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Chrome...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17536.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element 'Dan Cla...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/w3c/csswg-drafts/issues/9519) *(github.com)*
- [scroll-snap-type CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-snap-type) *(developer.mozilla.org)*
- [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element · Issue #716 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/716) *(github.com)*
- [scroll-snap-pair · Issue #4461 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4461) *(github.com)*
- [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element · Issue #1448 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1448) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `scroll-snap` on [wpt.fyi](https://wpt.fyi/results?q=feature:scroll-snap) (via webstatus.dev) — stable: Chrome 85.3% · Edge 83.6% · Firefox 80.8% · Safari 70.1%; experimental: Chrome 97.2% · Edge 95.5% · Firefox 84.2% · Safari 77.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`scroll-snap`](https://webstatus.dev/features/scroll-snap), shared with 4 other ChromeStatus features*

- **Chrome usage:** 0.21% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/59))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (48 found across 12 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 8 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "scroll-snap", shared with 4 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "scroll-snap": Chrome 85.3% passing (stable))* · `Sources cited by the AI synthesis` (3 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 3

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

- **Momentum:** **Moderate** (footprint 185 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""github.com/w3c/long-animation-frames/pull/30""`, `""styleDuration" "forcedStyleDuration" "long-animation-frames""`, `""Long Animation Frames style and layout duration""`
- **Analysis:** The Long Animation Frames (LoAF) style and layout duration enhancements introduce discrete \`styleDuration\` and \`forcedStyleDuration\` metrics, resolving a long-standing telemetry blind spot that previously lumped style recalculation and layout into a single opaque duration. Championed by Chromium and targeted for broad release in Chrome 157, the feature provides much-needed granularity for field performance diagnosis. However, broader multi-engine consensus remains limited because Gecko and WebKit have not yet shipped the baseline Long Animation Frames API.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web performance and observability teams should progressively enhance their RUM collectors to record \`styleDuration\` and \`forcedStyleDuration\` when present, while retaining fallback calculations based on \`styleAndLayoutStart\` for older Chromium clients. Because non-Chromium browsers do not support LoAF, these metrics should supplement rather than replace synthetic lab profiling tools like DevTools traces.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tunetheweb: "Answering for @noamr who’s on annual leave at the moment.  This started off as part of the long tasks spec—hence the links in the original request in ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **17 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Performance timeline - Long Animation Frames](https://github.com/WebKit/standards-positions/issues/283) [open] 
  > *Latest discussion from @tunetheweb: "Answering for @noamr who’s on annual leave at the moment.  This started off as part of the long tasks spec—hence the links in the original request in ..."*

#### 📰 Ecosystem Blogs & Articles

- [Long Animation Frames API \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/long-animation-frames) *(developer.chrome.com)*
  > Previously, LoAF only exposed a combined timestamp (\`styleAndLayoutStart\`), which meant developers and Real User Monitoring (RUM) tools had to bundle style recalculations and layout calculations into a single opaque dura...
- [SpeedCurve \| The Definitive Guide to Long Animation Frames (LoAF)](https://www.speedcurve.com/blog/guide-long-animation-frames-loaf) *(speedcurve.com)*
  > Previously, LoAF only exposed a combined timestamp (\`styleAndLayoutStart\`), which meant developers and Real User Monitoring (RUM) tools had to bundle style recalculations and layout calculations into a single opaque dura...
- [googlesource.com](https://chromium.googlesource.com/chromium/src.git/+/refs/heads/main/third_party/blink/renderer/platform/runtime_enabled_features.json5) *(chromium.googlesource.com)*
  > This update introduces granular duration properties across two interfaces \* \*\*\`PerformanceLongAnimationFrameTiming\`\*\*: Adds distinct \`styleDuration\` and \`layoutDuration\` properties, allowing developers to isolate time sp...
- [appspot.com](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5171478175809536) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > Chrome Platform Status & W3C Working Group Specification \* \*\*Source:\*\* \[Chrome Platform Status\](https://chromestatus.com/) / \[W3C \`long-animation-frames\` Repository\](https://github.com/w3c/long-animation-frames)
- [What are Long Animation Frames (LoAF)? - Request Metrics 🦥](https://requestmetrics.com/web-performance/long-animation-frame-loaf) *(requestmetrics.com)*
  > \* (Request Metrics) \* \*\*Distinguishing Bottlenecks:\*\* Complex CSS selectors, large DOM trees, or shadow DOM styling cause expensive \*\*recalc style\*\* spikes (\`styleDuration\`), whereas deeply nested flexbox/grid changes or...
- [nucliweb.net](https://webperf-snippets.nucliweb.net/Interaction/Long-Animation-Frames) *(webperf-snippets.nucliweb.net)*
  > Ecosystem leaders highlight that knowing an interaction stalled during "rendering" wasn't actionable enough \* \*\*Distinguishing Bottlenecks:\*\* Complex CSS selectors, large DOM trees, or shadow DOM styling cause expensive ...

#### 🔗 Inbound Citations & Reverse Links

- [Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/39) *(github.com · 2026-10-05T08:17:16)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed i...
- [\[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17594.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Yoav Weiss (@Shopify) Wed, 30 ...
- [\[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg16017.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Long Animation Frames style/layout duration Yoav Weiss (@Shopify) Fri,...

#### 📚 Platform Documentation & References

- [Long Animation Frames style and layout duration · Issue #1615 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1615) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing) *(developer.mozilla.org)*
- [Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/39) *(github.com)*
- [Long Animation Frames style and Layout duration · Issue #4453 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4453) *(github.com)*
- [Add bounds to LoAF style and layout durations by yoavweiss · Pull Request #63399 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63399) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (46 found across 11 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 8 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (3 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (5 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

---

<a id="6427766428925952-webtransport-draining"></a>
### [WebTransport draining](https://chromestatus.com/feature/6427766428925952)

- **Milestone:** Chrome 153 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/6427766428925952](https://chromestatus.com/feature/6427766428925952) · [chromestatuslite.com/feature/6427766428925952](https://chromestatuslite.com/feature/6427766428925952)
- **Specification:** [https://w3c.github.io/webtransport/#dom-webtransport-draining](https://w3c.github.io/webtransport/#dom-webtransport-draining)
- **Chromium Bug:** [https://issues.chromium.org/issues/564353368](https://issues.chromium.org/issues/564353368)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `Positive` · Safari: `In development`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

#### 📝 Overview

WebTransport.draining is a promise that resolves when the server indicates that the WebTransport session will be gracefully retired. Applications can use this signal to establish a replacement session while existing streams and the current session remain usable.

> **Motivation:** A WebTransport server may need to retire a session for maintenance, load balancing, deployment, or connection-lifetime management. Without a draining signal, an application learns about this only when the session closes, which can cause an avoidable interruption while a replacement connection is established. The draining promise gives the applicati...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 185 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebTransport.draining" OR "draining" webtransport w3c"`, `""WebTransport" "draining" Chrome status"`, `""DRAIN_WEBTRANSPORT_SESSION" webtransport"`
- **Analysis:** WebTransport.draining addresses a critical operational gap in HTTP/3 connections by providing an advance promise signal when a server gracefully retires a session, allowing clients to pre-warm replacement sessions without interrupting in-flight streams. While core WebTransport has achieved baseline cross-browser status, the draining attribute is an emerging refinement currently in developer trials behind the WebTransportDraining flag in Chromium and supported by updated W3C specifications. All major engine vendors share consensus on its utility for production networking, though full multi-engine deployment is still converging.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt WebTransport.draining progressively via property checks ('draining' in transport) to spawn seamless replacement sessions when supported. Production deployments must continue relying on standard connection close and error listeners as primary fallbacks until cross-browser availability stabilizes.
- Standards Activity (Mozilla): Latest discussion from @ddragana: "I was looking into this I was going to mark it \`worth prototyping\`. I do have some comments.  I would like see the new WebSocketStream and WebTranspor..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **9 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **Mozilla:** [WebTransport](https://github.com/mozilla/standards-positions/issues/167) [closed] `venue: W3C`, `venue: IETF`, `venue: W3C CG`, `position: positive`
  > *Latest discussion from @ddragana: "I was looking into this I was going to mark it \`worth prototyping\`. I do have some comments.  I would like see the new WebSocketStream and WebTranspor..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2007162: neqo support for Draining for WebTransport](https://bugzilla.mozilla.org/show_bug.cgi?id=2007162) `[NEW]`
- **Mozilla (Gecko):** [Bug #2060688: New wpt failures in /webtransport/ \[draining.https.any.sharedworker.html, draining.https.any.worker.html, draining.https.any.serviceworker.html, and 1 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2060688) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > - Pre-emptively opening a replacement \`WebTransport\` session in parallel - Allowing existing bidirectional and unidirectional streams to finish processing without interruption
- [appspot.com](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/6427766428925952?gate=6624315004026880) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > Chrome for Developers & Chrome Platform Status \* \*\*Sources:\*\* \*Chrome Platform Status ("WebTransport draining")\* & \*Chrome Release Notes\* draining\` into Blink/Chromium
- [googleusercontent.com](https://doc-3io0-4ra0-issuetracker.googleusercontent.com/issues/567785962) *(doc-3io0-4ra0-issuetracker.googleusercontent.com)*
  > \* Chromium issue tracking and Chrome DevTools teams also announced accompanying Chrome DevTools Protocol (CDP) support to display the "draining" state directly inside the \*\*DevTools Network panel\*\*, allowing developers t...
- [rust-dd.com](https://rust-dd.com/post/tako-v2-one-router-from-http-1-1-to-webtransport) *(rust-dd.com)*
  > js WebTransport Ecosystem\* js components) now hook into HTTP/3 \`GOAWAY\` / draining capsules
- [New to the web platform in September \| Blog \| web.dev](https://web.dev/blog/web-platform-09-2026) *(web.dev)*
  > Support for application-level protocol negotiation with the protocols option in the WebTransport() constructor and the WebTransport.protocol property. With support in Chrome, Safari, and now Firefox 155, WebTransport.pro...
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3-14) *(datatracker.ietf.org · 2025-10-20T00:00:00)*
  > After sending or receiving either a WT\_DRAIN\_SESSION capsule or a HTTP/3 GOAWAY frame, an endpoint MAY continue using the session and MAY open new WebTransport streams. The signal is intended for the application using We...

#### 📚 Platform Documentation & References

- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/2023/WD-webtransport-20230405) *(w3.org)*
- [WebTransport API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [github.com](https://github.com/benoitc/erlang-webtransport) *(github.com)*
- [WebTransport: draining property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/draining) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 48.6% · Edge 48.6% · Firefox 67.6% · Safari 44.8%; experimental: Chrome 92.4% · Edge 87.6% · Firefox 63.8% · Safari 80%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

- **Chrome usage:** 0.000088% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (66 found across 12 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 8 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (3 found, 2 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 16 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 48.6% passing (stable))* · `Sources cited by the AI synthesis` (8 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

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

- **Momentum:** **Moderate** (footprint 181 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"Chrome IndexedDB SQLite rewrite LevelDB"`, `"Chromium IndexedDB SQLite backend"`
- **Analysis:** Chromium's replacement of its legacy LevelDB and flat-file backend with SQLite is an internal architectural overhaul that preserves the public IndexedDB Web API without requiring specification changes. The change brings Chromium's underlying storage model into alignment with Gecko (Firefox) and WebKit (Safari), both of which have long used SQLite to back IndexedDB. Developer sentiment is strongly favorable because the transition directly targets chronic data corruption, reliability, and maintenance issues historically associated with LevelDB.

**Key Recommendations & Takeaways:**
- Actionable Advice: No code changes or polyfills are needed since the JavaScript API remains completely backward-compatible. However, engineering teams with storage-heavy or offline-first architectures should track client-side storage telemetry and error rates to monitor the multi-phase rollout as new stores transition to SQLite ahead of existing database migrations.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Chrome IndexedDB: SQLite back end" (4 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **9 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Chrome IndexedDB: SQLite back end](https://news.ycombinator.com/item?id=48118595) — *Hacker News (4 pts, 0 comments)*

#### 📰 Ecosystem Blogs & Articles

- [Chrome 145 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/145) *(developer.chrome.com)*
  > Chromium is executing a major architectural overhaul of its \*\*IndexedDB\*\* implementation, replacing the legacy backend—a hybrid of \*\*LevelDB\*\* and flat files—with a robust, \*\*SQLite\*\*-based engine \* \*\*Phased Rollout:\*\* \*...
- [chrome.com](https://developer.chrome.com/blog/chrome-150-beta) *(developer.chrome.com)*
  > \* \*\*Step 2 (Chrome 150 Beta / Chrome 156):\*\* Applied to \*\*new data stores\*\* \* \*\*Chrome 150 Beta & Chrome 156 Updates:\*\* Detailed the Step 2 expansion to new persistent stores on disk, reassuring developers that web APIs ...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > \* \*\*Step 2 (Chrome 150 Beta / Chrome 156):\*\* Applied to \*\*new data stores\*\* If a user visits a site for the first time or clears site data, the newly created IndexedDB instances use SQLite
- [chromium.org](https://issues.chromium.org/issues/419264073) *(issues.chromium.org)*
  > \* \*\*Step 3 (Future):\*\* Migrating existing persisted LevelDB databases to SQLite stores seamlessly However, teams building storage-heavy offline web apps should monitor error rates across Chrome releases as existing datab...
- [chromium.org](https://issues.chromium.org/issues/40274247) *(issues.chromium.org)*
  > \* Handling compression (LevelDB used Snappy compression by default; SQLite needed custom handling for compressed values and cursor fast paths)
- [chromium.org](https://issues.chromium.org/436880910) *(issues.chromium.org)*
  > \* Handling compression (LevelDB used Snappy compression by default; SQLite needed custom handling for compressed values and cursor fast paths)

#### 🔗 Inbound Citations & Reverse Links

- [Web-Facing Change PSA: IndexedDB: SQLite backend](https://groups.google.com/a/chromium.org/g/blink-dev/c/jS0khnC5IWA) *(groups.google.com · 2026-04-24T00:00:00)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > Web-Facing Change PSA: IndexedDB: SQLite backend Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: ...
- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com · 2026-09-28T08:15:45)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or ...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/google/dfindexeddb) *(github.com)*
- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com)*
- [Termius import: read Chromium's SQLite IndexedDB backend · Issue #449 · VoltiusApp/voltius](https://github.com/VoltiusApp/voltius/issues/449) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [IndexedDB: SQLite backend Demo](https://evanstade.github.io/web-storage-demos/idb-txn-scopes)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `indexeddb` on [wpt.fyi](https://wpt.fyi/results?q=feature:indexeddb) (via webstatus.dev) — stable: Chrome 99.9% · Edge 99.9% · Firefox 99.4% · Safari 96.3%; experimental: Chrome 100% · Edge 100% · Firefox 99.4% · Safari 99%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (66 found across 11 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (20 found, 9 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 1 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "indexeddb", shared with 16 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "indexeddb": Chrome 99.9% passing (stable))* · `Sources cited by the AI synthesis` (6 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5143933628841984-ask-before-http-warning-on-by-default"></a>
### [Ask-before-HTTP warning on by default](https://chromestatus.com/feature/5143933628841984)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5143933628841984](https://chromestatus.com/feature/5143933628841984) · [chromestatuslite.com/feature/5143933628841984](https://chromestatuslite.com/feature/5143933628841984)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Chrome now prompts users by default when they access an insecure (HTTP) connection. IT admins can control this default behavior via \[HttpsOnlyMode\](https://chromeenterprise.google/policies/#HttpsOnlyMode) policy.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 180 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Adapting your website for Chrome" "Ask-before-HTTP warning""`, `""Chrome" "Ask-before-HTTP" OR "HTTPS-First" "warning" "Chrome 154""`, `""HTTPS-First Mode" Firefox Safari WebKit default warning"`
- **Analysis:** Chrome 154 transitions the browser's HTTPS-First architecture into a default security barrier by prompting users before continuing to unencrypted HTTP connections across public sites. Rather than an engine-level standards API, this change represents a browser policy shift that attempts an automatic HTTPS upgrade and displays an interstitial confirmation if the site cannot support TLS. The broader ecosystem views this as the culminating step in the decade-long migration toward universal web encryption, while other browser engines continue to evaluate how aggressively to penalize fallback connections.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit your entire domain portfolio and redirect infrastructure using Chrome DevTools Network inspection to ensure TLS is active at every intermediate redirect step, not just the final destination. For managed enterprise fleets with remaining plaintext systems, implement the HttpsOnlyMode enterprise policy to whitelist internal assets that cannot yet be upgraded.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **14 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [HTTPS by default](https://blog.google/security/https-by-defau) *(blog.google)*
  > HTTPS by default Chrome Security HTTPS by default Oct 28, 2025 \| x.com Facebook LinkedIn Mail Copy link Chris Thompson Chrome Security Team Mustafa Emre Acer Chrome Security Team Serena Chen Chrome Security Team Joe DeBl...
- [Chrome 154 HTTP Warning: Why You’re Seeing It and What to Do](https://www.horusvalley.com/en/chrome-154-now-warns-before-opening-insecure-http-sites-why-youre-seeing-it-and-what-to-do) *(horusvalley.com)*
  > Chrome 154 HTTP Warning: Why You’re Seeing It and What to Do Skip to content Stories, science, history, psychology and useful tools — explored with curiosity. AR ⌕ Open search ◐ Toggle dark mode ☰ Open menu Search for: ⌕...
- [Chrome HTTPS Warning: Is Your Business Site Ready? \| Web60](https://web60.ie/blog/chrome-https-warning-business-website) *(web60.ie)*
  > Skip to main content Login Buy Now Build My Website Free Infrastructure The Chrome HTTPS Warning Your New Customers See and You Never Will Graeme Conkie · 11 October 2026 · 16 min read Chrome 154 reached the stable chann...
- [Chromium Docs - Adapting your website for Chrome’s “Ask-before-HTTP” warning](https://chromium.googlesource.com/chromium/src/+/main/docs/security/ask-before-http/ask-before-http-adoption-guide.md) *(chromium.googlesource.com)*
  > Chromium Docs - Adapting your website for Chrome’s “Ask-before-HTTP” warning Chromium Docs &#9681; Theme Adapting your website for Chrome’s “Ask-before-HTTP” warning Chrome will start asking for users’ permission before ...
- [searchenginejournal.com](https://www.searchenginejournal.com/chrome-to-warn-users-before-loading-http-sites-starting-next-year/559583) *(searchenginejournal.com)*
  > Private Scope:\*\* By default, Chrome enforces this in a \*\*"balanced mode"\*\* targeted strictly at \*\*public websites\*\* Private IP addresses (e.g., local routers, RFC 1918 addresses) and single-label intranet hostnames are e...
- [chromium.org](https://issues.chromium.org/issues/349860796) *(issues.chromium.org)*
  > Private Scope:\*\* By default, Chrome enforces this in a \*\*"balanced mode"\*\* targeted strictly at \*\*public websites\*\*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (40 found across 10 planned queries, 4 verified) · `Google Search Grounding (gemini-3.8-flash)` (21 found, 14 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (8 found, 6 verified)
- **Content Inspected:** Spec: ○ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 180 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""proposal-import-text" webkit mozilla"`, `""proposal-import-text" stage"`, `""type: \"text\"" import tc39"`, `"import text "type: text" chrome firefox safari"`
- **Analysis:** The Import Text specification (\`import … with { type: 'text' }\`) has advanced to Stage 3 at TC39 and is actively rolling out across major engines, shipping enabled by default in Chrome 155 and Firefox 153. The API streamlines module loading by exposing raw file content directly as string default exports, addressing long-standing ergonomic gaps in asset loading. With engine alignment across WHATWG and TC39 alongside rapid adoption across JavaScript runtimes and bundlers, the feature enjoys strong multi-stakeholder consensus.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams deploying native ES modules directly to browsers should wait for Safari to ship stable support before relying on text imports in production unbundled code, or provide a \`fetch()\` fallback. However, projects using modern runtimes like Deno and Bun, or build toolchains like esbuild and Rsbuild, can adopt the syntax immediately with full backward compilation.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Import Text: Loading Text Files as Modules in JavaScript \| Vilva Athiban P B](https://www.vilvaathiban.com/blog/import-text-modules-javascript) *(vilvaathiban.com)*
  > Import Text: Loading Text Files as Modules in JavaScript \| Vilva Athiban P B VA Vilva Athiban P B Lead AI Engineer · Speaker · Educator Writing · Article Import Text: Loading Text Files as Modules in JavaScript Vilva Ath...
- [Chrome 155 lets you import text files as JS strings · Azeem Hassni](https://azeemhassni.com/blog/wire-chrome-155-text-module-imports) *(azeemhassni.com)*
  > Chrome 155 lets you import text files as JS strings · Azeem Hassni Skip to content About Resume Portfolio Shopify Plus Blog The Wire Contact Get in touch Chrome 155 lets you import text files as JS strings The with { typ...
- [olliewilliams.xyz](https://olliewilliams.xyz/blog/text-imports) *(olliewilliams.xyz)*
  > setHTML()\`) \* \*\*Fetch API comparison:\*\* Compares \`import ... with { type: "text" }\` with \`fetch()\`, illustrating how module-level imports hoist and link dependencies ahead of execution rather than forcing sequential, asy...
- [deno.com](https://docs.deno.com/examples/importing_text) *(docs.deno.com)*
  > html\` files before full browser rollout
- [bun.com](https://bun.com/docs/runtime/file-types) *(bun.com)*
  > html\` files before full browser rollout
- [gitclear.com](https://www.gitclear.com/open_repos/angular/angular/pull_requests/10689201) *(gitclear.com)*
  > html\` files before full browser rollout 28+):\*\* Added native support for \`with { type: 'text' }\` imports following the Stage 3 advancement, compiling text files directly to inlined string exports

#### 🔗 Inbound Citations & Reverse Links

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-23 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0003.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11933`)*
  > y keithamus) https://github.co... - #11965 Move the allow declarative shadow roots flag to the parser (1 by foolip) https://github.com/whatwg/html/pull/11965 - #11933 &lt;strong&gt;Add text imports&lt;/strong&gt; (3 by annevk, eemel...

#### 📚 Platform Documentation & References

- [Import attributes - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with) *(developer.mozilla.org)*
- [import - JavaScript - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/source) *(developer.mozilla.org)*
- [github.com](https://github.com/microsoft/TypeScript/issues/64011) *(github.com)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-23 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0003.html) *(lists.w3.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 14 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 12 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(group "text-modules", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "text-modules" has no test results)* · `Sources cited by the AI synthesis` (5 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 3 · Standards Comments Read: 0

---

<a id="5095183554314240-iterator-join"></a>
### [Iterator Join](https://chromestatus.com/feature/5095183554314240)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5095183554314240](https://chromestatus.com/feature/5095183554314240) · [chromestatuslite.com/feature/5095183554314240](https://chromestatuslite.com/feature/5095183554314240)
- **Specification:** [https://tc39.es/proposal-iterator-join](https://tc39.es/proposal-iterator-join)
- **Chromium Bug:** [https://issues.chromium.org/issues/465715798](https://issues.chromium.org/issues/465715798)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `In development`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/iterator-join) (Chrome: `153`, Firefox: `154`, Safari: `—`) · *group-level data: web-features [`iterator-join`](https://webstatus.dev/features/iterator-join)*

#### 📝 Overview

A TC39 proposal to add to JavaScript a means to concatenate the contents of an iterator into a string. The \`join()\` method of Iterator instances is similar to \`Array.prototype.join()\`: it returns a string that is the concatenation of all elements produced by the iterator, separated by commas or a specified separator string.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 180 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Iterator.prototype.join" webkit"`, `""tc39" "iterator join" stage"`, `""proposal-iterator-join" tc39"`
- **Analysis:** The Iterator Join proposal advanced to Stage 4 at the September 2026 TC39 plenary meeting, finalizing Iterator.prototype.join() as a formal ECMAScript standard. The method mirrors Array.prototype.join() by converting an iterator directly into a delimited string without allocating intermediate arrays or writing verbose reductions. With stable implementations in Chrome 153 and Firefox 154, and preview availability in WebKit, unanimous engine consensus has been achieved.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams targeting modern production apps can safely use Iterator.prototype.join() with core-js polyfills or compiler transforms, while native usage can be adopted in Chromium and Firefox environments. Where un-polyfilled multi-browser support is required, developers should continue using a fallback or temporary array conversion until Safari ships the feature in a stable release.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **10 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2003341: \[meta\] Iterator join proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=2003341) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [@robpalmer.bsky.social on Bluesky](https://bsky.app/profile/robpalmer.bsky.social/post/3mwmyyerqh22l) *(bsky.app)*
  > @robpalmer.bsky.social on Bluesky Post Rob Palmer robpalmer.bsky.social did:plc:w227epg3attqnssfdkx6ex6a ECMAScript excitement 😉 Congrats to @bakkot.com on advancing Iterator Join to Stage 4 at @tc39.es today 🎉 Iterato...
- [Chrome 153 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/153) *(developer.chrome.com)*
  > Chrome 153 \| Release notes \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربي...
- [chrome.com](https://developer.chrome.com/blog/chrome-153-beta) *(developer.chrome.com)*
  > Chrome for Developers & Chrome Platform Status \* \*\*Status Tracking & Release Notes:\*\* Tracked under Chrome Platform Status (\`tc39-iterator-join\`), the method graduated to implementation and was included in the \*\*Chrome 1...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/153) *(learn.microsoft.com)*
  > join()\` across Chromium-based Edge, referencing MDN documentation and pointing out parity with existing array joining operations without intermediate arrays \*(Reference: Microsoft Edge Web Platform Release Notes — Edge 1...
- [firefox.com](https://www.firefox.com/en-US/firefox/154.0a1/releasenotes) *(firefox.com)*
  > \* \*\*Firefox Nightly / Bugzilla (Bug 2047995):\*\* Mozilla resolved the shipping issue for SpiderMonkey, rolling the method out into Firefox builds
- [nodesource.com](https://nodesource.com/blog/nodesource-weekly-sept-29-2026-ecmascript-ai-agents-nodeconf-eu) *(nodesource.com)*
  > Developer Blogs & Ecosystem Announcements (NodeSource Weekly, DEV Community) \* \*\*NodeSource Weekly & TC39 Milestone Coverage:\*\* Detailed the advancement of Iterator Join alongside Iterator Chunking to \*\*Stage 4\*\* at TC39...

#### 🔗 Inbound Citations & Reverse Links

- [Iterator Join · Issue #4304 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4304) *(github.com · 2026-09-03T10:46:12)* *(Cites: `https://chromestatus.com/feature/5095183554314240`)*
  > Iterator Join · Issue #4304 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reloa...
- [2047995 - Ship Iterator Join proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=2047995) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/tc39/proposal-iterator-join`)*
  > 2047995 - Ship Iterator Join proposal Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advanced Search New Bug Reports Documentation P...
- [\[blink-dev\] Intent to Ship: Iterator Join](http://www.mail-archive.com/blink-dev@chromium.org/msg17147.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-iterator-join`)*
  > \[blink-dev\] Intent to Ship: Iterator Join Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Iterator Join Chromestatus Tue, 11 Aug 2026 23:39:56 -0700 Contact emails \[email&#160;protected\] Explainer https...
- [Stage 4! by bakkot · Pull Request #8 · tc39/proposal-iterator-join](https://github.com/tc39/proposal-iterator-join/pull/8) *(github.com)* *(Cites: `https://tc39.es/proposal-iterator-join`)*
  > Stage 4! by bakkot · Pull Request #8 · tc39/proposal-iterator-join · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or windo...

#### 📚 Platform Documentation & References

- [Iterator.prototype.join() - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/join) *(developer.mozilla.org)*
- [Iterator Join · Issue #4304 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4304) *(github.com)*
- [2047995 - Ship Iterator Join proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=2047995) *(bugzilla.mozilla.org)*
- [Stage 4! by bakkot · Pull Request #8 · tc39/proposal-iterator-join](https://github.com/tc39/proposal-iterator-join/pull/8) *(github.com)*
- [feat(engine): implement Iterator.prototype.join proposal by xcb3d · Pull Request #5503 · boa-dev/boa](https://github.com/boa-dev/boa/pull/5503) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 12 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 8 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (1 found, 1 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (6 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (8 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="4779920606756864-support-targetaddressspace-option-for-websockets"></a>
### [Support targetAddressSpace option for WebSockets](https://chromestatus.com/feature/4779920606756864)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/4779920606756864](https://chromestatus.com/feature/4779920606756864) · [chromestatuslite.com/feature/4779920606756864](https://chromestatuslite.com/feature/4779920606756864)
- **Specification:** [https://github.com/WICG/local-network-access/pull/125](https://github.com/WICG/local-network-access/pull/125)
- **Chromium Bug:** [https://crbug.com/517413738](https://crbug.com/517413738)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/local-network-access) (Chrome: `142`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`local-network-access`](https://webstatus.dev/features/local-network-access), shared with 7 other ChromeStatus features*

#### 📝 Overview

Add support for passing a targetAddressSpace option in the WebSocket constructor. This allows developers to specify that a WebSocket connection to a public hostname should be treated as going to a "local" or "loopback" destination, matching the existing support on the Fetch API. The main use case is to offer an escape hatch to bypass mixed content restrictions for connecting to local servers that cannot yet support HTTPS (as Local Network Access permissions require a secure context).  Example: A public site that connects to a local server can use a hostname to avoid needing manual configuration of the exact private IP address in use:  \`const ws = new WebSocket("ws://local-server.example", { targetAddressSpace: "local"}\`  This will flag the WebSocket connection as going to a local address, bypassing mixed content blocking when run in a secure context. The user must grant the site the local network permission for the WebSocket connection to succeed, and the hostname must resolve to a local IP address (otherwise it will be blocked).  This builds on https://chromestatus.com/feature/5080055102439424 which adds an options bag to the WebSocket constructor.

> **Motivation:** To avoid mixed content blocking for local network WebSockets requests, web developers have relied on having their users manually configure their local network IP addresses, which is awkward at best. Adding support for the targetAddressSpace option in WebSockets aligns it with the Fetch API. This has also been requested by developers (e.g., https://...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 180 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Shipping enabled by default in Chromium 154, this feature leverages the new WebSocket constructor options dictionary to introduce the targetAddressSpace option, mirroring existing behavior in the Fetch API. It provides a dedicated escape hatch allowing secure HTTPS contexts to establish unencrypted WebSocket connections (ws://) to public hostnames that resolve locally without being blocked by mixed content restrictions. However, cross-engine interoperability remains strictly limited, as the broader Local Network Access specification is currently implemented only within Chromium.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web applications communicating with local agents should adopt targetAddressSpace via progressive enhancement, checking for browser support and retaining backward-compatible fallback invocation for engines that still expect positional subprotocol strings. Applications must also ensure public hostnames strictly resolve to private or loopback IP ranges and account for user prompt denials under secure context requirements.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Google Issue Tracker](https://issuetracker.google.com/issues/517413738) *(issuetracker.google.com)*
  > Google Issue Tracker Sign in
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > Chrome for Developers: Chrome 154 Beta & Release Notes \* \*\*Source:\*\* \*developer.chrome.com\* (Chrome 154 release notes & beta announcements) Chrome for Developers: Chrome 154 Beta & Release Notes \* \*\*Source:\*\* \*developer....
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Chrome for Developers: Chrome 154 Beta & Release Notes \* \*\*Source:\*\* \*developer.chrome.com\* (Chrome 154 release notes & beta announcements)
- [chrome.com](https://developer.chrome.com/release-notes/154?hl=fr) *(developer.chrome.com)*
  > \* It directly complements the addition of the \*\*WebSocket options bag\*\* (\`WebSocketInit\`), which also formalized passing \`{ protocols: ... }\` as an object parameter
- [Support \`targetAddressSpace\` option in WebSockets \[517413738\] - Chromium](https://issues.chromium.org/issues/517413738) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, ...

#### 🔗 Inbound Citations & Reverse Links

- [Support \`targetAddressSpace\` option in WebSockets \[517413738\] - Chromium](https://issues.chromium.org/issues/517413738) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/4779920606756864`)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/pull/125`)*
  > \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, ...

#### 📚 Platform Documentation & References

- [Use case for WebSocket communications · Issue #16 · WICG/local-network-access · GitHub](https://github.com/WICG/local-network-access/issues/16?timeline_page=1) *(github.com)*
- [github.com](https://github.com/WICG/local-network-access/issues) *(github.com)*
- [local-network-access: WebSocket constructor rejects targetAddressSpace and test flag misses IPv6 localhost · Issue #1651 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1651) *(github.com)*
- [fix(local-network-access): update WebSocket LNA guidance and IPv6 localhost flag (#1651) by rowan-m · Pull Request #1727 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/pull/1727) *(github.com)*
- [Use case for WebSocket communications · Issue #16 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/16) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (51 found across 12 planned queries, 14 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 6 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "local-network-access", shared with 7 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "local-network-access": no stable pass rate for Chrome yet)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5309598397497344-xml-parsing-in-rust-for-non-xslt-scenarios"></a>
### [XML parsing in Rust for non-XSLT scenarios](https://chromestatus.com/feature/5309598397497344)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5309598397497344](https://chromestatus.com/feature/5309598397497344) · [chromestatuslite.com/feature/5309598397497344](https://chromestatuslite.com/feature/5309598397497344)
- **Specification:** [https://www.w3.org/TR/xml](https://www.w3.org/TR/xml)
- **Chromium Bug:** [https://crbug.com/466303347](https://crbug.com/466303347)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

To improve browser security and protect users against memory-related vulnerabilities, Chrome 153 updates its XML parsing engine to a memory-safe \[Rust\](https://rust-lang.org/) implementation for several common scenarios. This foundational update eliminates potential memory corruption bugs while maintaining full compatibility with existing web standards.  Chrome has already begun to deprecate and remove \[XSLT\](https://www.w3.org/TR/xslt-30/). While this process continues, the new, safer parser will handle the following scenarios where no XSLT is required:  1. DOMParser Web API. 2. Accessing responseXML of XMLHttpRequest. 3. SVG standalone images (that is, accessing a \`image.svg\` document directly as a top level navigation). 4. SVG external images (including a main document embedding an SVG as an external image resource).

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 180 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"Chromium XML parsing in Rust non XSLT scenarios"`, `"Ship Rust XML parser for non XSLT situations Chrome"`
- **Analysis:** This feature represents a major internal engine security hardening rather than a new surface-level web API, replacing Chromium's legacy C library (\`libxml2\`) with a memory-safe Rust parser for non-XSLT workflows including SVG rendering, DOMParser, and XMLHttpRequest in Chrome 153. Ecosystem consensus strongly favors the transition because it adheres strictly to W3C XML and WHATWG specifications and Web Platform Tests while neutralizing critical memory corruption vulnerabilities. Developer sentiment is generally enthusiastic about the browser's expanding Rust footprint, accompanied by watchful monitoring for minor edge-case behavioral parity.

**Key Recommendations & Takeaways:**
- Actionable Advice: No immediate code updates or polyfills are needed for standard XML or SVG workflows since the swap is designed to be drop-in and transparent. Teams handling intricate SVG assets or DOMParser routines should audit their test suites against Chrome 153 for minor parsing discrepancies and prioritize removing any remaining client-side XSLT dependencies ahead of its pending browser deprecation.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **9 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X](https://x.com/ChromiumDev/status/2093424350036660456) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [Chrome Rewrites XML Processing in Rust \| Why Replace the Parser?｜Haru - AIと働くひとのメモ帳。](https://note.com/haru_tech_note/n/n88a13e6a3e7c?hl=en) *(note.com)*
  > Chromium is migrating its XML parsing stack away from the legacy C library (\`libxml2\`) to a memory-safe \*\*Rust-based parser\*\* \* \*\*Chrome Platform Status & Chromium Tracker (Issue #466303347)\*\*: \* The tracking issue \*"Shi...
- [chrome.com](https://developer.chrome.com/docs/web-platform/deprecating-xslt) *(developer.chrome.com)*
  > Chromium is migrating its XML parsing stack away from the legacy C library (\`libxml2\`) to a memory-safe \*\*Rust-based parser\*\* Because the browser’s legacy XSLT engine was deeply entwined with \`libxml2\`, the Chromium team...
- [chromestatus.com](https://chromestatus.com/feature/5309598397497344/activity) *(chromestatus.com)*
  > Because the browser’s legacy XSLT engine was deeply entwined with \`libxml2\`, the Chromium team separated XML parsing into \*\*non-XSLT scenarios\*\* This allowed them to deploy the memory-safe Rust engine early without waiti...
- [Chrome 153 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/153) *(developer.chrome.com)*
  > Official Platform Announcements \* \*\*Chrome for Developers Release Notes (Chrome 151 & 153)\*\* Official Platform Announcements \* \*\*Chrome for Developers Release Notes (Chrome 151 & 153)\*\*: \* Feature entries titled \*"XML pa...
- [Chrome 151 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/151) *(developer.chrome.com)*
  > Official Platform Announcements \* \*\*Chrome for Developers Release Notes (Chrome 151 & 153)\*\* Official Platform Announcements \* \*\*Chrome for Developers Release Notes (Chrome 151 & 153)\*\*: \* Feature entries titled \*"XML pa...
- [Chrome 153 launches today: Google’s accelerated 2-week release cadence begins](https://chromeunboxed.com/chrome-153-launches-today-googles-accelerated-2-week-release-cadence-begins) *(chromeunboxed.com)*
  > They emphasize that the rewrite eliminates entire classes of memory corruption and buffer-overflow vulnerabilities in untrusted input parsers while maintaining strict compatibility with Web Platform Tests (WPT) and W3C/W...

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 11 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 12 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (5 found, 1 verified) · `Dev.to Community Blogs` (2 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (6 found, 4 verified)
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

- **Momentum:** **Emerging** (footprint 175 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""PredefinedColorSpace" "display-p3-linear" whatwg html"`, `""srgb-linear" "display-p3-linear" "PredefinedColorSpace""`, `""PredefinedColorSpace" "srgb-linear" mozilla standards positions"`
- **Analysis:** The addition of \`srgb-linear\` and \`display-p3-linear\` to the canvas \`PredefinedColorSpace\` enumeration aligns the WHATWG HTML canvas backing-store pipeline with CSS Color Module Level 4 and WebGPU specifications. The enhancement resolves longstanding ergonomics friction for graphics and game developers by supporting physically linear color calculations directly in canvas without manual gamma conversions. Broad multi-engine consensus is rapidly solidifying, with Chromium enabling it by default in Chrome 155 and Apple already shipping support in Safari release channels.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building 2D Canvas, WebGL, or WebGPU pipelines should adopt the linear color space identifiers using progressive enhancement, checking context creation parameters before initializing buffers. Fallback branches should continue supplying standard gamma-encoded spaces (\`srgb\` or \`display-p3\`) alongside manual shader transformations until Firefox completes its implementation.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **9 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **Mozilla:** [srgb-linear and display-p3-linear PredefinedColorSpace](https://github.com/mozilla/standards-positions/issues/1453) [open] `venue: WHATWG`, `topic: API`

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1996208: Implement srgb-linear and display-p3-linear PredefinedColorSpace](https://bugzilla.mozilla.org/show_bug.cgi?id=1996208) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img168-dot-cr-status.appspot.com/feature/5122501071994880) *(img168-dot-cr-status.appspot.com)*
  > The addition of \*\*\`srgb-linear\`\*\* and \*\*\`display-p3-linear\`\*\* to the Canvas \*\*\`PredefinedColorSpace\`\*\* enumeration updates the Web Platform canvas color pipeline Adding their linear-light equivalents aligns the Canvas AP...
- [google.com](https://issuetracker.google.com/issues/454152417/blocking) *(issuetracker.google.com)*
  > Chromium & Chrome Platform Status (Chrome 155) \* \*\*Announcement\*\*: Documented on \*\*Chrome Platform Status\*\* and the \*\*Chrome 155 Beta / Release Notes\*\* under the title \*"PredefinedColorSpace srgb-linear and display-p3-li...
- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > Chromium & Chrome Platform Status (Chrome 155) \* \*\*Announcement\*\*: Documented on \*\*Chrome Platform Status\*\* and the \*\*Chrome 155 Beta / Release Notes\*\* under the title \*"PredefinedColorSpace srgb-linear and display-p3-li...
- [chromestatus.com](https://chromestatus.com/release-notes/155) *(chromestatus.com)*
  > Chromium & Chrome Platform Status (Chrome 155) \* \*\*Announcement\*\*: Documented on \*\*Chrome Platform Status\*\* and the \*\*Chrome 155 Beta / Release Notes\*\* under the title \*"PredefinedColorSpace srgb-linear and display-p3-li...
- [microsoft.com](https://learn.microsoft.com/ga-ie/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > \* \*\*Microsoft Edge 155 Release Notes\*\*: Echoed the Chromium milestone, highlighting native canvas engine support for both linear color spaces across Chromium-based browsers
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17494.html) *(mail-archive.com)*
  > &gt; On 9/9/26 6:42 a.m., Yoav Weiss ...spaces-and-colour-correction &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Summary\* &gt;&gt;&gt;&gt; &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by...

#### 📚 Platform Documentation & References

- [srgb-linear and display-p3-linear PredefinedColorSpace · Issue #1453 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1453) *(github.com)*
- [github.com](https://github.com/mdn/content/issues/42050) *(github.com)*
- [github.com](https://github.com/whatwg/html/issues/11526) *(github.com)*
- [Add srgb-linear, display-p3-linear, and rec2020-linear color spaces by ccameron-chromium · Pull Request #42 · WICG/canvas-color-space](https://github.com/WICG/canvas-color-space/pull/42) *(github.com)*
- [Issue · playcanvas/engine](https://github.com/playcanvas/engine/issues/9704) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `canvas-2d-color-management` on [wpt.fyi](https://wpt.fyi/results?q=feature:canvas-2d-color-management) (via webstatus.dev) — stable: Chrome 37% · Edge 37% · Firefox 14.8% · Safari 85.2%; experimental: Chrome 59.3% · Edge 74.1% · Firefox 14.8% · Safari 85.2%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (48 found across 11 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 8 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (6 found, 1 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (1 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "canvas-2d-color-management", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "canvas-2d-color-management": Chrome 37% passing (stable))* · `Sources cited by the AI synthesis` (8 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="6210457816924160-private-verification-tokens"></a>
### [Private Verification Tokens](https://chromestatus.com/feature/6210457816924160)

- **Milestone:** Chrome 154 (Origin trial)
- **ChromeStatus:** [chromestatus.com/feature/6210457816924160](https://chromestatus.com/feature/6210457816924160) · [chromestatuslite.com/feature/6210457816924160](https://chromestatuslite.com/feature/6210457816924160)
- **Chromium Bug:** [https://crbug.com/500396188](https://crbug.com/500396188)
- **Browser Signals:** Chrome: `Origin trial` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Automated traffic is increasing across the web, and many websites have responded with more user friction in the form of CAPTCHAs and other challenges to combat unwanted traffic. This degrades the web user experience for all users, with a particularly outsized impact to users in private browsing modes.  Private Verification Tokens (PVT) is a low entropy mechanism that allows websites to transfer the trust that their users have established in regular browsing into private browsing mode to reduce their experienced user friction. PVTs are issued during a regular browsing session and redeemed in private browsing mode.

> **Motivation:** Due to the significant increase in automation over the past 1-2 years, driven largely by AI, websites have responded by adding more challenges to determine if clients are likely to be human.  In particular, this has had an outsized impact on users in private browsing mode, who tend to have similar client characteristics as automated clients, such a...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 173 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Private Verification Tokens" incognito"`, `""Private Verification Tokens" chrome"`, `""Private Verification Tokens" W3C OR explainer OR privacy pass"`
- **Analysis:** Private Verification Tokens (PVT) is currently an experimental Google-led initiative in an Origin Trial starting in Chrome 154. The API leverages cryptographic Privacy Pass primitives to pass a low-entropy, one-way human trust signal from regular browsing into private browsing sessions to mitigate aggressive bot challenges and CAPTCHAs. However, it remains a single-engine proposal without formal consensus or implementation commitments from other major browser vendors.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams should take a wait-and-see stance rather than refactoring production authentication or bot defenses, as the API requires centralized origin registration and remains Chromium-specific. High-volume anti-fraud teams impacted by private-window bot friction can evaluate the Chrome Origin Trial, but must ensure standard challenge fallbacks remain intact.
- In active Origin Trial in Chrome 154. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Explainer for the Private Verification Tokens" (2 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Explainer for the Private Verification Tokens](https://news.ycombinator.com/item?id=47760044) — *Hacker News (2 pts, 0 comments)*

#### 📰 Ecosystem Blogs & Articles

- [Google Chrome 154 beta takes aim at annoying CAPTCHAs and clunky popups](https://piunikaweb.com/2026/09/03/google-chrome-154-beta-captcha-popup-fixes) *(piunikaweb.com)*
  > Google Chrome 154 beta takes aim at annoying CAPTCHAs and clunky popups About Us Meet Our Team Work With Us Contact --&gt; About Us Meet Our Team Work With Us Contact Google Chrome Microsoft Edge Mozilla Firefox Brave Artif...
- [Private Verification Tokens: propuesta de Chrome y BotBrowser](https://botbrowser.io/es/blog/private-verification-tokens) *(botbrowser.io)*
  > Private Verification Tokens: propuesta de Chrome y BotBrowser ← Volver al Blog Huella digital Actualizado el 30 de septiembre de 2026 Private Verification Tokens: propuesta de Chrome y BotBrowser Conoce la propuesta Priv...
- [Chrome Private Verification Tokens: Incognito Trial](https://www.relevantaudience.com/analytics/chrome-private-verification-tokens-incognito-origin-trial) *(relevantaudience.com)*
  > Chrome Private Verification Tokens: Incognito Trial 02 038 5055 info@relevantaudience.com @relevantaudience Chrome tests Private Verification Tokens: a one-bit signal telling sites an Incognito visitor is human analytics...
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > Chrome 154 \| Release notes \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربي...
- [Quarterly Updates](https://www.chromium.org/Home/chromium-security/quarterly-updates) *(chromium.org)*
  > \* \*\*The Chromium Projects — \*Quarterly Updates (Chrome Security)\*\*\*: \* Highlighted PVT as a core component of the browser's anti-abuse strategy alongside broader cross-industry collaborations (such as work with Mozilla a...
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > dev\*\*: Does not yet have a standalone guide or tutorial; official Google developer guidance is currently consolidated within \*Chrome for Developers\* (\`developer.chrome.com\`) release channels during the Origin Trial perio...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17478.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/private-verification-tokens`)*
  > Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens Daniel Bratell Wed, 16 Sep 2026 08:48:21 -0700 We ...
- [\[blink-dev\] Intent to Prototype: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg16306.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/private-verification-tokens`)*
  > \[blink-dev\] Intent to Prototype: Private Verification Tokens Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Private Verification Tokens Chromestatus Thu, 09 Apr 2026 13:02:30 -0700 Contact emails ...
- [\[blink-dev\] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17179.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/private-verification-tokens`)*
  > \[blink-dev\] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Private Verification Tokens Chromestatus Fri, 14 Aug 2026 13:41:33 -0700 Contact email...

#### 📚 Platform Documentation & References

- [w3.org](https://lists.w3.org/Archives/Public/public-antifraud/2026Apr/0001.html) *(lists.w3.org)*
- [github.com](https://github.com/GoogleChrome/private-tokens) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 11 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 12 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 1 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (3 found, 3 verified)
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5201297767792640-js-self-profiling-markers"></a>
### [JS Self-Profiling Markers](https://chromestatus.com/feature/5201297767792640)

- **Milestone:** Chrome 153 (Origin trial)
- **ChromeStatus:** [chromestatus.com/feature/5201297767792640](https://chromestatus.com/feature/5201297767792640) · [chromestatuslite.com/feature/5201297767792640](https://chromestatuslite.com/feature/5201297767792640)
- **Specification:** [https://github.com/WICG/js-self-profiling/pull/89](https://github.com/WICG/js-self-profiling/pull/89)
- **Chromium Bug:** [https://issues.chromium.org/issues/40800459](https://issues.chromium.org/issues/40800459)
- **Browser Signals:** Chrome: `Origin trial` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The JavaScript Self-Profiling API lets a web application sample its own call stacks to measure performance on real user devices. This feature adds an optional marker field to each captured sample that identifies the type of browser activity running when the sample was taken: script, gc, style, layout, paint, or other. A trace normally shows gaps between stacks that cannot be interpreted, markers let developers attribute that time to browser work happening outside their JavaScript, for example distinguishing script execution from style recalculation, layout, or a garbage collection pause, making slow traces easier to analyze and optimize.

> **Motivation:** The JavaScript Self-Profiling API lets web apps sample their own call stacks on real user devices, but it profiles only the page's JavaScript, leaving unexplained gaps where time went to style, layout, paint, or garbage collection. Some of that work, like GC, interrupts stack execution and is invisible to stack sampling. A per-sample marker identif...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 170 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** The JS Self-Profiling Markers proposal extends the existing JavaScript Self-Profiling API by annotating sampled traces with browser activity tags like garbage collection, layout, paint, and style calculation. Currently running in an origin trial in Chromium, the extension addresses a major visibility blind spot where non-script main-thread work created unexplained gaps in real-user traces. However, because the underlying base profiling API remains Chromium-only, the feature struggles with broader standards momentum and lacks cross-engine consensus.

**Key Recommendations & Takeaways:**
- Actionable Advice: Do not depend on markers or the Self-Profiling API for core application logic or universal telemetry; treat it strictly as an opt-in, progressive enhancement for Chromium-specific field profiling. Teams operating high-value web applications can evaluate the origin trial behind cross-origin isolation headers to diagnose GC and layout bottlenecks while retaining fallback RUM instrumentation.
- In active Origin Trial in Chrome 153. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @monica-ch: "Thanks @kmiller68   1. UA-enforced sample limits: The \[spec\](https://wicg.github.io/js-self-profiling/#states) makes sampling best-effort and explicit..."
- Standards Activity (W3C TAG): Latest discussion from @monica-ch: "@marcoscaceres Just filed a WebKit position https://github.com/WebKit/standards-positions/issues/717..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [JS Self-Profiling API (including the Markers extension)](https://github.com/WebKit/standards-positions/issues/717) [open] 
  > *Latest discussion from @monica-ch: "Thanks @kmiller68   1. UA-enforced sample limits: The \[spec\](https://wicg.github.io/js-self-profiling/#states) makes sampling best-effort and explicit..."*
- **W3C TAG:** [Other Spec Review: JS Self-Profiling Markers (ProfilerSample.marker)](https://github.com/w3ctag/design-reviews/issues/1251) [open] `Review type: later review`
  > *Latest discussion from @monica-ch: "@marcoscaceres Just filed a WebKit position https://github.com/WebKit/standards-positions/issues/717..."*
- **W3C TAG:** [State extension for JS Self-Profiling API.](https://github.com/w3ctag/design-reviews/issues/682) [closed] `Review type: CG early review`, `Venue: WICG`, `Progress: stalled`, `Topic: performance`, `Missing: Multi-stakeholder support`
  > *Latest discussion from @torgo: "Hi @cnpsc yes it's describing the problem from the developer perspective rather than from the end-user perspective. It may seem like make-work but we'..."*

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5201297767792640/activity) *(chromestatus.com)*
  > WICG Specification & W3C TAG Review \* \*\*Resources:\*\* \*WICG/js-self-profiling Repository\* & \*W3C TAG Review #1251\* \* \*\*Key Insights:\*\* The WICG specification discussion centers on how markers are exposed without opening n...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17130.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Chris Harrelson Wed, 05 Aug 2026 14:02:43 -0700 LGTM O...
- [\[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17114.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Chromestatus Tue, 04 Aug 2026 15:31:06 -0700 Contact emails \[e...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17121.html) *(mail-archive.com)*
  > On Tue, Aug 4, 2026 at 3:30 PM ...hub.com/WICG/js-self-profiling/pull/89 &gt; &gt; \*Summary\* &gt; &lt;strong&gt;The JavaScript Self-Profiling API lets a web application sample its own &gt; call stacks to measure performance on...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17123.html) *(mail-archive.com)*
  > \*Origin Trial documentation link\* https://github.com/WICG/js-self-profiling/blob/main/markers.md \*Risks\* \*Interoperability and Compatibility\* /No information provided/ /Gecko/: No signal /WebKit/: No signal /Web develope...
- [New in Edge for developers – Create better components and make your site agent-ready - Microsoft Edge Blog](https://blogs.windows.com/msedgedev/2026/09/21/new-in-edge-for-developers-create-better-components-and-make-your-site-agent-ready) *(blogs.windows.com · 2026-09-22T08:58:27)*
  > The JS Self-Profiling API is a great way to measure your app’s performance in production, on real user devices. But it only samples your page’s JavaScript, which often leaves unexplained gaps in a trace, moments where th...

#### 🔗 Inbound Citations & Reverse Links

- [JS Self-Profiling Markers · Issue #1812 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1812) *(github.com · 2026-10-09T22:25:27)* *(Cites: `https://chromestatus.com/feature/5201297767792640`)*
  > JS Self-Profiling Markers · Issue #1812 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ...
- [JS Self-Profiling Markers · Issue #23 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/23) *(github.com · 2026-08-25T18:38:39)* *(Cites: `https://chromestatus.com/feature/5201297767792640`)*
  > JS Self-Profiling Markers · Issue #23 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or ...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17130.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Chris Harrelson Wed, 05 Aug 2026 14:02:43 -0700 LGTM O...
- [\[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17114.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Chromestatus Tue, 04 Aug 2026 15:31:06 -0700 Contact emails \[e...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17121.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/pull/89`)*
  > On Tue, Aug 4, 2026 at 3:30 PM ...hub.com/WICG/js-self-profiling/pull/89 &gt; &gt; \*Summary\* &gt; &lt;strong&gt;The JavaScript Self-Profiling API lets a web application sample its own &gt; call stacks to measure performance on...

#### 📚 Platform Documentation & References

- [JS Self-Profiling API (including the Markers extension) · Issue #717 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/717) *(github.com)*
- [w3.org](https://lists.w3.org/Archives/Public/public-webapps-github/2026Jul/0567.html) *(lists.w3.org)*
- [JS Self-Profiling Markers · Issue #1812 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1812) *(github.com)*
- [JS Self-Profiling Markers · Issue #23 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/23) *(github.com)*
- [GitHub - monica-ch/js-profiling-markers-demo: Live demo of the JS Self-Profiling API markers extension (Origin Trial) — works in Edge and Chrome](https://github.com/monica-ch/js-profiling-markers-demo) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [JS Self-Profiling Markers Demo](https://github.com/victorhuangwq/js-profiler-markers-demo)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (48 found across 12 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (7 found, 3 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (15 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 13

---

<a id="5235261159112704-webtransport-send-groups-and-stream-prioritization"></a>
### [WebTransport send groups and stream prioritization](https://chromestatus.com/feature/5235261159112704)

- **Milestone:** Chrome 153 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5235261159112704](https://chromestatus.com/feature/5235261159112704) · [chromestatuslite.com/feature/5235261159112704](https://chromestatuslite.com/feature/5235261159112704)
- **Specification:** [https://www.w3.org/TR/webtransport/#webtransportsendstream](https://www.w3.org/TR/webtransport/#webtransportsendstream)
- **Chromium Bug:** [https://crbug.com/568825278](https://crbug.com/568825278)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `Under consideration` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

#### 📝 Overview

WebTransport already lets sites send data through WritableStreams. This feature will let applications group outgoing streams, prioritize data within each group, and view sending statistics for streams and groups, while preserving the ability to transfer streams.

> **Motivation:** Applications commonly send multiple independent streams over one WebTransport session. Existing outgoing streams already support writing, but the plain WritableStream representation does not expose stream grouping, runtime prioritization, or per-stream delivery statistics. This feature adds WebTransportSendGroup to organize related streams, WebTran...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 170 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"WebTransport createSendGroup sendOrder getStats"`, `"WebTransport send groups and stream prioritization chromestatus"`, `"WebTransport send groups stream prioritization mozilla standards positions webkit"`
- **Analysis:** WebTransport send groups and stream prioritization transitions WebTransport from basic multiplexed data piping to fine-grained egress traffic scheduling via WebTransportSendGroup, sendOrder, and per-stream getStats(). Positioned as an experimental developer trial in Chromium, the API is formal W3C specification work aimed at resolving head-of-line starvation and bandwidth allocation challenges. All major browser engines share positive standards consensus, driven heavily by demands from real-time gaming and Media over QUIC (MoQ) architectures.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams working on real-time protocols should evaluate and benchmark send groups behind Chrome developer flags using feature detection on WebTransport.prototype.createSendGroup. Production deployments should continue maintaining application-level queuing fallbacks until cross-browser implementations and Interop parity stabilize.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **11 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > The Web Platform feature \*\*"WebTransport send groups and stream prioritization"\*\* introduces native, granular scheduling for outgoing multiplexed data in WebTransport connections While WebTransport already supports sendi...
- [singhajit.com](https://singhajit.com/how-webtransport-works) *(singhajit.com)*
  > \* \*\*Solving the Multiplexing Scheduling Gap:\*\* Networking blogs (e.g., coverage on \*Codercops\*, \*Ajit Singh\*, and protocol discussions on GitHub) highlight that while WebTransport eliminates TCP head-of-line blocking by ...
- [codercops.com](https://blog.codercops.com/blog/webtransport-explained-websocket-alternative-2026) *(blog.codercops.com)*
  > \* \*\*Solving the Multiplexing Scheduling Gap:\*\* Networking blogs (e.g., coverage on \*Codercops\*, \*Ajit Singh\*, and protocol discussions on GitHub) highlight that while WebTransport eliminates TCP head-of-line blocking by ...
- [programming-helper.com](https://www.programming-helper.com/tech/webtransport-2026-web-api-multiplexed-transport-revolution) *(programming-helper.com)*
  > \* \*\*Solving the Multiplexing Scheduling Gap:\*\* Networking blogs (e.g., coverage on \*Codercops\*, \*Ajit Singh\*, and protocol discussions on GitHub) highlight that while WebTransport eliminates TCP head-of-line blocking by ...
- [googleusercontent.com](https://doc-48mg-1o5g-issuetracker.googleusercontent.com/issues/487117768) *(doc-48mg-1o5g-issuetracker.googleusercontent.com)*
  > Native send groups push this scheduling directly down to the browser's transport and networking layer \* \*\*Standardization and Interoperability:\*\* Tracking across browser vendors (via web-platform-tests and Interop initia...
- [WebTransport](https://w3c.github.io/webtransport) *(w3c.github.io · 2021-10-01T12:35:03)*
  > Each WebTransportSendGroup also establishes a separate numberspace for evaluating sendOrder numbers. ... A WebTransportSendGroup is always created by the create procedure. ... Aggregates stats from all WebTransportSendSt...

#### 📚 Platform Documentation & References

- [WebTransport: createSendGroup() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/createSendGroup) *(developer.mozilla.org)*
- [WebTransportSendStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendStream) *(developer.mozilla.org)*
- [WebTransportDatagramsWritable - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable) *(developer.mozilla.org)*
- [WebTransportSendStream: sendGroup property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendStream/sendGroup) *(developer.mozilla.org)*
- [WebTransportSendGroup - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendGroup) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 48.6% · Edge 48.6% · Firefox 67.6% · Safari 44.8%; experimental: Chrome 92.4% · Edge 87.6% · Firefox 63.8% · Safari 80%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

- **Chrome usage:** 0.000088% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 12 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 7 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 16 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 48.6% passing (stable))* · `Sources cited by the AI synthesis` (10 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 3 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 160 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"webkit standards position "navigation-source""`, `""navigation-source" css pseudo class"`, `"mozilla standards position "navigation-source""`, `""navigation-source" w3c csswg drafts"`
- **Analysis:** The \`:navigation-source\` pseudo-class, defined in the W3C CSS Navigation Level 1 specification, enables authors to declaratively target the element that initiated an outgoing navigation without requiring JavaScript. Chromium leads implementation with shipping scheduled for Chrome 156 to unlock seamless declarative View Transitions. However, the feature is not yet indexed in Baseline, and true cross-engine interoperability remains in its infancy.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should treat \`:navigation-source\` strictly as an experimental progressive enhancement or prototype feature in Chromium canary builds. Production applications targeting cross-browser cross-document view transitions should continue utilizing JavaScript-based event listeners to assign dynamic transition names until cross-vendor support materializes.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @noamr: "&gt; \[@noamr\](https://github.com/noamr) I guess the main use case is view-transitions, right? Doesn't seem particularly complicated I suppose  Right, but..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS :navigation-source pseudo-class](https://github.com/WebKit/standards-positions/issues/715) [open] `topic: css`, `venue: W3C CSS WG`, `from: Google`
- **Mozilla:** [CSS \`:navigation-source\` pseudo-class](https://github.com/mozilla/standards-positions/issues/1447) [open] `topic: CSS`
  > *Latest discussion from @noamr: "&gt; \[@noamr\](https://github.com/noamr) I guess the main use case is view-transitions, right? Doesn't seem particularly complicated I suppose  Right, but..."*

#### 📰 Ecosystem Blogs & Articles

- [bsky.app](https://bsky.app/profile/bram.us/post/3mrv6z3ncls25) *(bsky.app)*
  > The \*\*CSS pseudo-class for navigation source element\*\* is officially specified as \*\*\`:navigation-source\`\*\* (initially prototyped and proposed under working titles such as \`:nav-source\` and \`:trigger-link\`) He outlined ho...
- [bram.us](https://www.bram.us/2026/07/30/styling-the-navigation-declarative-route-and-navigation-matching-in-css) *(bram.us)*
  > \* \*\*Specification & Context:\*\* Developed as part of the W3C \*\*CSS Navigation Matching\*\* specification (\`css-navigation-1\`) by editors and Chromium engineers including Bramus Van Damme, Noam Rosenthal, and David Baron Bra...
- [chromestatus.com](https://chromestatus.com/feature/6327898878377984?gate=6247925882683392) *(chromestatus.com)*
  > \* \*\*Primary Motivation:\*\* Declarative \*\*View Transitions\*\*
- [CSS Navigation Matching, Early Days \| CSS-Tricks](https://css-tricks.com/css-navigation-matching-early-days) *(css-tricks.com)*
  > With \`:navigation-source\`, authors can assign transition names and states entirely in CSS He outlined how \`:nav-source\` (now \`:navigation-source\`), \`@location\` (or \`@route\`), and \`@navigation\` create a comprehensive decl...
- [daily.dev](https://daily.dev/posts/css-navigation-matching-early-days-wqzz57pet) *(daily.dev)*
  > \* \*\*Summary:\*\* CSS-Tricks broke down the implications of the draft specification and Bramus's walkthrough
- [chromestatus.com](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > \* \*\*Rollout:\*\* Enabled by default in \*\*Chrome 156\*\* Chrome's release notes highlight that the feature removes the need for authors to juggle script-driven states while a multi-page app navigates between documents

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Chromestatus Thu, 03 Sep 2026 02...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17395.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Philip Jägenstedt Wed, 0...
- [Other Spec Review: CSS navigation-based styling · Issue #1253 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1253) *(github.com · 2026-08-04T13:36:50)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > Other Spec Review: CSS navigation-based styling · Issue #1253 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with a...
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1447) *(github.com · 2026-08-25T08:30:57)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anoth...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/w3c/csswg-drafts/issues/14303) *(github.com)*
- [\[css-navigation-1\] Add pseudo-class selector to target the element that initiated the outgoing navigation · Issue #11801 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11801) *(github.com)*
- [Other Spec Review: CSS navigation-based styling · Issue #1253 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1253) *(github.com)*
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1447) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 12 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 8 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (4 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (7 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 2

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

- **Momentum:** **Emerging** (footprint 160 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** The \`fragment\_depth\` WGSL extension introduces \`less\` and \`greater\` qualifiers to \`@builtin(frag\_depth)\`, restoring hardware early-Z optimizations when fragment shaders adjust depth predictably. Merged into the W3C WGSL specification and enabled by default in Chrome 156, the capability closely mirrors native hardware semantics across Metal, HLSL, and Vulkan. However, cross-browser availability is currently nascent as implementation in Gecko and WebKit trails Chromium's Dawn release.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt the feature progressively by guarding shaders behind \`navigator.gpu.wgslLanguageFeatures.has('fragment\_depth')\` and including the \`requires fragment\_depth;\` directive inside the WGSL module. Maintain a fallback shader pipeline using plain \`@builtin(frag\_depth)\` to ensure compatibility on non-supporting browsers.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [What's New in WebGPU (Chrome 155-156) \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-webgpu-155-156) *(developer.chrome.com)*
  > Yang Baru di WebGPU (Chrome 155-156) \| Blog \| Chrome for Developers Langsung ke konten utama / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe...
- [fragment\_depth - WGSL language feature availability (1%) - webgpu.report](https://webgpu.report/features/wgsl:fragment_depth) *(webgpu.report)*
  > fragment\_depth - WGSL language feature availability (1%) - webgpu.report webgpu .report fragment\_depth WGSL language feature Specification: WGSL § fragment\_depth Availability now 1% last 30 days, n = 161 Year over year —...
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > \*Chrome for Developers\* (\`developer.chrome.com\`) \* \*\*"What's New in WebGPU" (Chrome 155–156) / Chrome Beta Announcements\*\*: \* Chrome’s developer blog features this enhancement under the \`fragment\_depth\` extension
- [chrome.com](https://developer.chrome.com/blog/new-in-webgpu-155-156?hl=it) *(developer.chrome.com)*
  > \* \*\*Chrome Platform Status Entry\*\*: \* Documents the intent to implement and ship the WGSL \`fragment\_depth\` extension, tracking implementation across Chromium and the Dawn WebGPU implementation
- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails \[email&#16...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails \[email&#16...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 T...

#### 📚 Platform Documentation & References

- [WGSL Proposal for fragment depth (less, greater, any) · Issue #5342 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5342) *(github.com)*
- [w3.org](https://www.w3.org/TR/WGSL) *(w3.org)*
- [feat(graphics): adopt WGSL fragment\_depth once every WebGPU browser ships it · Issue #9703 · playcanvas/engine](https://github.com/playcanvas/engine/issues/9703) *(github.com)*
- [GPU Web 2026‐03‐10 WGSL](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2026%E2%80%9003%E2%80%9010-WGSL) *(github.com)*
- [GPU Web 2026‐01‐06 WGSL](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2026%E2%80%9001%E2%80%9006-WGSL) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)

#### 🌐 Web-features Group Context

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- **Chrome usage:** 0.085% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (46 found across 12 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (7 found, 6 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "webgpu", shared with 44 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webgpu": no stable pass rate for Chrome yet)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="6210300985606144-cors-enforcement-for-background-fetch"></a>
### [CORS enforcement for Background Fetch](https://chromestatus.com/feature/6210300985606144)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6210300985606144](https://chromestatus.com/feature/6210300985606144) · [chromestatuslite.com/feature/6210300985606144](https://chromestatuslite.com/feature/6210300985606144)
- **Specification:** [https://wicg.github.io/background-fetch](https://wicg.github.io/background-fetch)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/background-fetch) (Chrome: `74`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`background-fetch`](https://webstatus.dev/features/background-fetch), shared with 1 other ChromeStatus feature*

#### 📝 Overview

Starting in Chrome 157, the Background Fetch API now enforces Cross-Origin Resource Sharing (CORS).  This update aligns Chromium's implementation with the intent of the \[Background Fetch spec\](https://wicg.github.io/background-fetch/). This ensures that Background Fetch requests are subject to the same security policies, such as Local Network Access checks.   This update prevents sites from bypassing CORS (and other security policy checks) by using Background Fetch instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).

> **Motivation:** This fixes a security issue where Background Fetch unintentionally bypasses security policies such as CORS (and CORP/COEP/DIP).  (crbug.com/515243254 is our meta bug tracking all of the different web platform security issues with Background Fetch.)

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 150 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"WebKit standards positions background fetch"`, `"mozilla standards positions background fetch"`, `""Background Fetch" CORS enforcement Chrome"`, `""CORS enforcement for Background Fetch""`
- **Analysis:** The Background Fetch API remains an isolated Chromium feature with virtually no adoption momentum across other browser engines, having even faced past Chromium-internal deprecation proposals due to low overall usage. Chrome's enforcement of Cross-Origin Resource Sharing (CORS) and Local Network Access checks closes longstanding security loopholes where background requests bypassed standard fetch boundary checks. While this update brings Chromium closer to the original WICG specification intent, it reinforces security boundaries on an API that lacks cross-engine consensus.

**Key Recommendations & Takeaways:**
- Actionable Advice: Continue treating the Background Fetch API strictly as a progressive enhancement for Chromium-based browsers, always providing a standard Fetch or Streams fallback. Audit all endpoints targeted by background fetches immediately to ensure cross-origin CDN assets serve valid CORS response headers and comply with Local Network Access restrictions.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **12 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/blog/background-fetch) *(developer.chrome.com)*
  > The Background Fetch API is designed to allow service workers to manage long-running background uploads and downloads (such as podcasts, movies, or game assets) even after the user closes the browser Under \*\*"CORS enforc...
- [chrome.com](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > Under \*\*"CORS enforcement for Background Fetch"\*\* (tracked under Chromium bug \[crbug.com/515243254\]), Chromium routes Background Fetch requests through standard network request machinery: \* \*\*CORS Compliance:\*\* Backgroun...
- [chromestatus.com](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > \* \*\*Local Network Access (LNA) Protection:\*\* Requests to local or loopback servers are now blocked unless the origin has received explicit LNA user permission \* \*\*Elimination of Security Bypasses:\*\* Malicious sites can n...
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > \* \*\*Chrome Beta & Stable Release Notes:\*\* Official release articles formally announce the enforcement alongside companion security updates (such as requiring Local Network Access permissions for background fetches target...
- [chromeenterprise.google](https://chromeenterprise.google/intl/en_CA/resources/release-notes) *(chromeenterprise.google)*
  > Chrome Enterprise Release Notes & Microsoft Edge \* \*\*Chrome Enterprise Roadmaps:\*\* Enterprise documentation highlights the enforcement rollout timeline (targeting broad general enforcement up through Chrome 157) and flag...
- [tplant.com.au](https://gpedit.tplant.com.au/en-us/policy/chrome/RestrictBackgroundFetchFromServiceWorkerEnabled) *(gpedit.tplant.com.au)*
  > Chrome Enterprise Release Notes & Microsoft Edge \* \*\*Chrome Enterprise Roadmaps:\*\* Enterprise documentation highlights the enforcement rollout timeline (targeting broad general enforcement up through Chrome 157) and flag...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17645.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chromestatus Fri, 02 Oct 2026 09:53:21 -0700 Conta...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17674.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Alex Russell Wed, 07 Oct 2026 08:31:37 -07...

#### 📚 Platform Documentation & References

- [BackgroundFetchManager: fetch() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchManager/fetch) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/ja/docs/Web/API/BackgroundFetchRegistration/failureReason) *(developer.mozilla.org)*
- [Address various Background Fetch CORS issues by chromium-wpt-export-bot · Pull Request #63356 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63356) *(github.com)*
- [Enforce CORS in Background Fetch by chromium-wpt-export-bot · Pull Request #63357 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63357) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `background-fetch` on [wpt.fyi](https://wpt.fyi/results?q=feature:background-fetch) (via webstatus.dev) — stable: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%; experimental: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%

#### 🌐 Web-features Group Context

*group-level data: web-features [`background-fetch`](https://webstatus.dev/features/background-fetch), shared with 1 other ChromeStatus feature*

- **Mozilla:** no position recorded ([standards position](https://github.com/mozilla/standards-positions/issues/30))
- **WebKit:** no position recorded ([standards position](https://github.com/WebKit/standards-positions/issues/149)) · concerns: `privacy`, `maintenance`

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (68 found across 12 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 9 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "background-fetch", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "background-fetch": Chrome 37.5% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 150 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The CSS Working Group resolved to rename the position-visibility values anchors-valid and anchors-visible to their singular counterparts, anchor-valid and anchor-visible, clarifying that visibility checks evaluate only the default anchor element. Chromium is rolling out the singular variants enabled by default while retaining the plural versions as backwards-compatible aliases. Engine alignment is solid across the web standards ecosystem to safeguard baseline interoperability for CSS Anchor Positioning.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt the singular anchor-visible and anchor-valid keywords in new styles while leveraging alias fallbacks or progressive enhancement until all target browsers update their parsers. Ensure automated linters recognize the singular syntax and flag the deprecated plural forms in existing codebases.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **15 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [feedsanywhere.com](https://feedsanywhere.com/feed/11240) *(feedsanywhere.com)*
  > #### Why the Change Happened Originally, \`anchors-valid\` was conceived to strongly hide an element if any associated anchor could not be resolved However, defining what constituted "required anchors" when multiple \`ancho...
- [caniuse.com](https://caniuse.com/wf-anchor-positioning-position-visibility-plurals) *(caniuse.com)*
  > The CSSWG clarified the specification so that these visibility conditions only check the \*\*default anchor element\*\* (defined via \`position-anchor\`) Because the behavior strictly inspects a single anchor at a time, the ke...
- [github.io](https://triple-underscore.github.io/css-anchor-position-ja.html) *(triple-underscore.github.io)*
  > The CSSWG clarified the specification so that these visibility conditions only check the \*\*default anchor element\*\* (defined via \`position-anchor\`)
- [webkit.org](https://webkit.org/blog/18325/webkit-features-for-safari-27-0) *(webkit.org)*
  > WebKit Blog & Safari Release Announcements (\*WebKit Features for Safari 27.0\*) \* \*\*What it covers:\*\* WebKit announced updates aligning Safari with the latest revisions of the CSS Anchor Positioning specification \* \*\*Key ...
- [github.io](https://web-platform-dx.github.io/web-features-explorer/release-notes/december-2025) *(web-platform-dx.github.io)*
  > Web Features Explorer & \*Can I Use\* Ecosystem Tracking \* \*\*What it covers:\*\* The web-platform-dx project and CanIUse created dedicated entries distinguishing the standardized \`position-visibility\` keywords from the legac...
- [caniuse.com](https://caniuse.com/?search=anchor-visible) *(caniuse.com)*
  > \* \*\*Status:\*\* The plural values are flagged as \*\*Discouraged / Deprecated\*\* \* \*\*Status:\*\* The plural values are flagged as \*\*Discouraged / Deprecated\*\*, signaling to linters (like Stylelint) and toolchains that developer...

#### 📚 Platform Documentation & References

- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [github.com](https://github.com/web-platform-dx/web-features/issues/3558) *(github.com)*
- [\`position-visibility: anchor-valid\` · Issue #1457 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1457) *(github.com)*
- [Rename position-visibility:anchors-visible to anchor-visible by chromium-wpt-export-bot · Pull Request #63021 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63021) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 96.8% · Edge 96% · Firefox 84.3% · Safari 93.8%; experimental: Chrome 96.8% · Edge 97% · Firefox 85.1% · Safari 94%

#### 🌐 Web-features Group Context

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- **Chrome usage:** 0.067% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (51 found across 11 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 8 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (0 found, 0 verified) · `web-features mapping` *(group "anchor-positioning", shared with 8 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "anchor-positioning": Chrome 96.8% passing (stable))*
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

- **Momentum:** **Emerging** (footprint 150 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""atomic_vec2u_min_max" wgsl"`, `""atomic-vec2u-min-max" webgpu"`, `""atomic-64-min-max" gpuweb"`
- **Analysis:** The atomic-vec2u-min-max extension introduces scoped 64-bit atomic minimum and maximum operations to WGSL storage buffers via atomic&lt;vec2u&gt;, sidestepping the hardware limits of full 64-bit integer arithmetic. The feature has achieved cross-vendor consensus within the W3C GPU for the Web Community Group, shipping enabled by default in Chromium while implementation tracks through Firefox and Safari backends. Advanced graphics developers regard this as an essential bridge for high-performance rendering techniques like visibility buffers and software rasterization.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt this feature progressively by querying adapter.features.has('atomic-vec2u-min-max') and enabling the atomic\_vec2u\_min\_max WGSL extension. Maintain existing fallback paths—such as packed 32-bit atomic keys or multi-pass resolves—for devices and engines where 64-bit atomics are not yet exposed.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *In developer trial (Behind a flag)* to *Enabled by default*
- 📰 **11 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Vladimir Levin Wed, 23 Sep 2026 08:21:02 -0700 LGTM1 On Mond...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Daniel Bratell Wed, 23 Sep 2026 08:35:46 -0700 LGTM3...
- [\[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17518.html) *(mail-archive.com)*
  > Explainer https://github.com/gpuweb/gpuweb/issues/5071 Specification https://www.w3.org/TR/webgpu/#dom-gpufeaturename-atomic-vec2u-min-max Summary &lt;strong&gt;Allows the use of 64-bit atomic minimum and maximum operations on...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17534.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Monday, September ...org/TR/webgpu/#dom-gpufeaturename-atomic-vec2u-min-max &gt;&gt; &gt;&gt; \*Summary\* &gt;&gt; &lt;strong&gt;Allows the use of 64-bit atomic minimum and maximum operations on &gt;&gt; ...
- [WebGPU: atomic-vec2u-min-max \[564573901\] - Issue Tracker](https://issuetracker.google.com/issues/564573901/resources) *(issuetracker.google.com)*
  > Sign in
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=Intent+to+Ship) *(groups.google.com)*
  > Intent to Ship: WebGPU: atomic-vec2u-min-max · Does this intent deprecate or change behavior of existing &gt; APIs, such that it has potentially high risk for Android &gt; WebView-based applications? &gt; &gt; /No inform...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Vladimir Levin Wed, 23 Sep 2026 08:21:02 -0700 LGTM1 On Mond...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Daniel Bratell Wed, 23 Sep 2026 08:35:46 -0700 LGTM3...

#### 📚 Platform Documentation & References

- [w3.org](https://www.w3.org/TR/WGSL) *(w3.org)*
- [gpuweb/proposals/atomic-64-min-max.md at main · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/blob/main/proposals/atomic-64-min-max.md) *(github.com)*
- [github.com](https://github.com/gfx-rs/wgpu/issues/10435) *(github.com)*
- [2074500 - (webgpu-atomic-vec2u-min-max) WebGPU: support \`atomic-vec2u-min-max\` feature](https://bugzilla.mozilla.org/show_bug.cgi?id=2074500) *(bugzilla.mozilla.org)*
- [Landscape watch 2026-10-05 · Issue #13 · davtamay/Godot\_WebGPU](https://github.com/davtamay/Godot_WebGPU/issues/13) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)

#### 🌐 Web-features Group Context

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- **Chrome usage:** 0.085% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (60 found across 12 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 4 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webgpu", shared with 44 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webgpu": no stable pass rate for Chrome yet)* · `Sources cited by the AI synthesis` (3 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5109685301673984-css-scroll-marker-group-modes"></a>
### [CSS scroll-marker-group modes](https://chromestatus.com/feature/5109685301673984)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5109685301673984](https://chromestatus.com/feature/5109685301673984) · [chromestatuslite.com/feature/5109685301673984](https://chromestatuslite.com/feature/5109685301673984)
- **Specification:** [https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes](https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes)
- **Chromium Bug:** [https://issues.chromium.org/issues/425931511](https://issues.chromium.org/issues/425931511)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The scroll-marker-group property is enhaced to support modes: 1) 'links' - The generated ::scroll-marker-group operates in "links" mode, functioning like a navigation list. This is the default mode if omitted. 2) 'tabs' - The generated ::scroll-marker-group operates in "tabs" mode, functioning like a tablist.  Each mode changes focus order and accessibility behavior of ::scroll-marker-group and ::scroll-markers, following WAI-ARIA patterns.  More details: # The links mode (default) This mode is designed to mimic standard Navigation Landmarks combined with fragment anchors.  ## Semantic roles The ::scroll-marker-group takes on the navigation role, and the ::scroll-marker elements take on the link role. This perfectly maps to the &lt;nav&gt; + &lt;a&gt; structural pattern.  ## Keyboard navigation All ::scroll-marker elements are sequential tab stops, natively acting like a list of standard anchor links.  ## Unaffected targets The originating elements do not get forced into any role, leaving the document's natural semantic structure intact.  ## Activation focus management When a link marker is activated, it sets the sequential focus navigation starting point to the target element (the originating element), and focus is lost from the marker. This mimics the native behavior of clicking a standard internal &lt;a href="#target"&gt; link.  # The tabs mode This mode is designed to natively replicate the Tabs Pattern and serves as the interactive foundation for the Tabbed Carousel Pattern.  ## Semantic roles The ::scroll-marker-group is implicitly assigned the tablist role, ::scroll-marker elements act as tab roles, and their originating elements get the tabpanel role. This mirrors the required WAI-ARIA Tabs structure.  ## Keyboard navigation (roving tabindex) It follows the complex keyboard interactions outlined in standard practices. Only the active ::scroll-marker acts as a tab stop. Users use arrow keys to navigate the focusgroup (switching between markers), preventing the "tab trap" of having to tab through 20 carousel dots.  ## Focus scope management The marker acts as a focus navigation scope owner. Pressing Tab from the active marker moves focus directly into the active tabpanel content, matching the specification for tabbed interfaces.  ## Tree pruning Content from inactive tabs is explicitly hidden from the accessibility tree. This mimics the expected behavior of aria-hidden="true" or inert on inactive tab panels, saving developers from manually scripting state changes.  ## Activation focus When a marker is activated, focus is retained on the marker, which is exactly how standard tabs operate.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 145 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** CSS \`scroll-marker-group\` modes (\`links\` and \`tabs\`), specified under CSS Overflow Module Level 5, shipped enabled by default in Chromium starting with Chrome 154 to provide native, declarative accessibility and focus models for CSS-driven carousels and tabbed interfaces. While Chromium has pushed ahead with implementation, the feature remains absent from Baseline and lacks cross-engine adoption. Multi-engine consensus is still developing, as other browser vendors continue evaluating core accessibility and focus interactions in standards discussions.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should refrain from replacing established JavaScript-backed tablist and carousel components in production until cross-engine support matures. For progressive enhancements or non-critical interfaces, experiment in Chromium while providing robust fallbacks for unsupported engines.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Some issues that seem pretty fundamental: - https://github.com/w3c/csswg-drafts/issues/12240 - https://github.com/w3c/csswg-drafts/issues/12269..."
- Standards Activity (Mozilla): Latest discussion from @jcsteh: "I have some significant accessibility concerns regarding CSS inert specifically. See https://github.com/w3ctag/design-reviews/issues/1055#issuecomment..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **4 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/status/2102804599325528424) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Overflow Navigation Controls](https://github.com/WebKit/standards-positions/issues/447) [open] `topic: css`, `concerns: internationalization`, `venue: W3C CSS WG`, `from: Google`, `concerns: accessibility`
  > *Latest discussion from @fantasai: "Some issues that seem pretty fundamental: - https://github.com/w3c/csswg-drafts/issues/12240 - https://github.com/w3c/csswg-drafts/issues/12269..."*
- **Mozilla:** [CSS Overflow Navigation Controls](https://github.com/mozilla/standards-positions/issues/1161) [open] `venue: W3C`, `topic: CSS`, `team: Layout`, `team: Accessibility`
  > *Latest discussion from @jcsteh: "I have some significant accessibility concerns regarding CSS inert specifically. See https://github.com/w3ctag/design-reviews/issues/1055#issuecomment..."*

#### 📰 Ecosystem Blogs & Articles

- [mintec.co](https://mintec.co/blog/chrome-154-frame-sizing-carousel-tabs) *(mintec.co)*
  > The \*\*CSS \`scroll-marker-group\` modes\*\* (\`links\` and \`tabs\`), formalized under the \*\*CSS Overflow Module Level 5\*\* specification, shipped in \*\*Chromium (Chrome 154 and Microsoft Edge 154)\*\* Microsoft Edge 154 Web Platfor...
- [chrome.com](https://developer.chrome.com/blog/accessible-carousel) *(developer.chrome.com)*
  > \* \*\*Details:\*\* The Chromium team introduced this feature to solve long-standing friction in CSS-only carousels and tabs Historical Context & Ecosystem Feedback (Sara Soueidan & Chrome UI Posts) \* \*\*Background:\*\* Early ex...
- [netlify.app](https://alexanderburgos.netlify.app/blog/css-scroll-markers-tabs) *(alexanderburgos.netlify.app)*
  > Rather than forcing a one-size-fits-all approach, developers can select between two semantic paradigms \*"CSS Scroll Markers: Building Accessible Tabs in Chrome"\* — Alexander Burgos \* \*\*Focus:\*\* Deep-dive tutorial compari...
- [RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)*
  > RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes 'Daniel Clark' via blink-dev Mon, 20 Jul 2026 09:49:59 -07...
- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Chromestatus Wed, 15 Jul 2026 12:40:07 -0700 Contact emails \[email...
- [New in Chrome 154 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > &lt;strong&gt;/\* Links mode (default) \*/ scroll-marker-group: after links; /\* Tabs mode \*/ scroll-marker-group: before tabs;&lt;/strong&gt; By default, an element&#x27;s text decoration (such as an underline, overline, or line-throu...

#### 🔗 Inbound Citations & Reverse Links

- [RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes 'Daniel Clark' via blink-dev Mon, 20 Jul 2026 09:49:59 -07...
- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or windo...

#### 📚 Platform Documentation & References

- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)*
- [\[css-overflow-5\] Discrete versus navigation scroll marker mode · Issue #12122 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12122) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [CSS scroll-marker-group modes Demo](https://codepen.io/Daniil-Sakhapov/pen/ogzQQYZ)
- [CSS scroll-marker-group modes Demo](https://codepen.io/Daniil-Sakhapov/pen/ZYpmmJE)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 12 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 3 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (6 found, 1 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 7

---

<a id="5094091886034944-webgpu-buffer_view-feature"></a>
### [WebGPU: \`buffer\_view\` feature](https://chromestatus.com/feature/5094091886034944)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5094091886034944](https://chromestatus.com/feature/5094091886034944) · [chromestatuslite.com/feature/5094091886034944](https://chromestatuslite.com/feature/5094091886034944)
- **Specification:** [https://github.com/gpuweb/gpuweb/pull/6291](https://github.com/gpuweb/gpuweb/pull/6291)
- **Chromium Bug:** [https://crbug.com/tint/506523198](https://crbug.com/tint/506523198)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `Closed Without a Position`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/webgpu) (Chrome: `144`, Firefox: `—`, Safari: `26`) · *group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

#### 📝 Overview

WGSL language feature for reinterpreting data in variables.  The feature allows developers to divide a single uniform, storage, or workgroup variable into multiple logical variables. It also allows the type of the data in the variable to be interpreted as multiple types within the program.

> **Motivation:** This features adds a new opaque type for use with storage and uniform buffers and workgroup variables. It allows the data in those variables to be reinterpreted as other types. This is useful for both type-punning data and logically sub-dividing a variable into multiple parts.  For ease-of-use and safety, the opaque type can only be operated on by ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 145 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"webgpu buffer_view site:github.com/gpuweb"`, `"gpuweb buffer_view"`, `"wgsl buffer_view"`
- **Analysis:** The \`buffer\_view\` language feature in WGSL enables type-punning and logical sub-allocation within uniform, storage, and workgroup buffers via dedicated built-in functions like \`bufferView\` and \`bufferArrayView\`. Standardized within the W3C GPU for the Web Working Group and shipping by default in Chromium 153, it significantly streamlines memory pooling and GPU-driven rendering pipelines without compromising memory safety. However, broader cross-engine availability remains limited while other browser engines continue implementing post-v1 WGSL language features \[webgpu.report\].

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building advanced WebGPU applications should feature-detect the capability dynamically via \`navigator.gpu?.wgslLanguageFeatures?.has('buffer\_view')\`. Because cross-browser support is currently limited, production workloads should maintain fallback shader pipelines using manual indexing or separate typed bindings until baseline engine coverage expands.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @mwyrzykowski: "Duplicate of https://github.com/WebKit/standards-positions/issues/107 per earlier discussion..."
- Standards Activity (Mozilla): Latest discussion from @jimblandy: "Kelsey has left Mozilla, unfortunately...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [WebGPU: Render to slice of 3D texture](https://github.com/WebKit/standards-positions/issues/294) [closed] `duplicate`, `topic: graphics`
  > *Latest discussion from @mwyrzykowski: "Duplicate of https://github.com/WebKit/standards-positions/issues/107 per earlier discussion..."*
- **Mozilla:** [Clarification on standards positions for WebGPU features pre- or post-CR](https://github.com/mozilla/standards-positions/issues/1205) [open] 
  > *Latest discussion from @jimblandy: "Kelsey has left Mozilla, unfortunately...."*

#### 📰 Ecosystem Blogs & Articles

- [What's New in WebGPU (Chrome 153-154) \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-webgpu-153-154) *(developer.chrome.com)*
  > What&#39;s New in WebGPU (Chrome 153-154) \| Blog \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkç...
- [buffer\_view - WGSL language feature availability (60%) - webgpu.report](https://webgpu.report/features/wgsl:buffer_view) *(webgpu.report)*
  > buffer\_view - WGSL language feature availability (60%) - webgpu.report webgpu .report buffer\_view WGSL language feature Specification: WGSL § buffer\_view Availability now 60% last 30 days, n = 161 Year over year — unlock...
- [aketdoy.es](https://aketdoy.es/chrome-153-webgpu-buffer-view) *(aketdoy.es)*
  > js, and custom WebGPU engine authors) have highlighted \`buffer\_view\` as a major quality-of-life upgrade for sub-allocators, custom memory pools, and modern bindless pipelines
- [\[blink-dev\] Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg16978.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebGPU: \`buffer\_view\` feature Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: \`buffer\_view\` feature Chromestatus Wed, 15 Jul 2026 11:23:32 -0700 Contact emails \[email...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg17024.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Vladimir Levin Wed, 22 Jul 2026 06:55:00 -0700 LGTM1 On We...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg17026.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Chris Harrelson Wed, 22 Jul 2026 08:06:15 -0700 LG...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg16978.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/buffer-view.md`)*
  > \[blink-dev\] Intent to Ship: WebGPU: \`buffer\_view\` feature Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: \`buffer\_view\` feature Chromestatus Wed, 15 Jul 2026 11:23:32 -0700 Contact emails \[email...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg17024.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/buffer-view.md`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Vladimir Levin Wed, 22 Jul 2026 06:55:00 -0700 LGTM1 On We...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg17026.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/buffer-view.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Chris Harrelson Wed, 22 Jul 2026 08:06:15 -0700 LG...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg17035.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/6291`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Alex Russell Wed, 22 Jul 2026 08:33:30 -0700 Sorry...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/gpuweb/gpuweb/issues/5338) *(github.com)*
- [feat(graphics): adopt WGSL buffer\_view once every WebGPU browser ships it · Issue #9389 · playcanvas/engine](https://github.com/playcanvas/engine/issues/9389) *(github.com)*
- [buffer\_view : best practice? · gpuweb/gpuweb · Discussion #6343 · GitHub](https://github.com/gpuweb/gpuweb/discussions/6343) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)

#### 🌐 Web-features Group Context

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- **Chrome usage:** 0.085% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (38 found across 13 planned queries, 5 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 4 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webgpu", shared with 44 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webgpu": no stable pass rate for Chrome yet)* · `Sources cited by the AI synthesis` (6 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 9

---

<a id="5178263526834176-css-text-decoration-inset"></a>
### [CSS text-decoration-inset](https://chromestatus.com/feature/5178263526834176)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5178263526834176](https://chromestatus.com/feature/5178263526834176) · [chromestatuslite.com/feature/5178263526834176](https://chromestatuslite.com/feature/5178263526834176)
- **Specification:** [https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset)
- **Chromium Bug:** [https://issues.chromium.org/issues/468928416](https://issues.chromium.org/issues/468928416)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/text-decoration) (Chrome: `1`, Firefox: `1`, Safari: `1`) · *group-level data: web-features [`text-decoration`](https://webstatus.dev/features/text-decoration), shared with 3 other ChromeStatus features*

#### 📝 Overview

CSS text-decoration-inset controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges. It supports auto, length, and percentage values, including one-value and two-value syntax for setting the start and end offsets. This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements.   sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

> **Motivation:** This change implements CSS text-decoration-inset (CSS Text Decoration Level 4), including percentage values. It gives authors direct control over decoration inset and reduces the need for wrapper/pseudo-element workarounds used to fine-tune underline/overline/line-through rendering.    sampler: https://static.januschka.com/i-468928416/?asddsaasd MD...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 140 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** CSS text-decoration-inset is advancing across modern browser engines to provide native inline edge control for underlines, overlines, and strike-throughs as defined in CSS Text Decoration Module Level 4. It is widely praised by web typographers as the inline counterpart to text-underline-offset, eliminating longstanding layout workarounds like pseudo-elements and gradient backgrounds. With Chromium shipping the property enabled by default in Chrome 156 and active tracking across WebKit and Gecko, cross-engine interoperability is solidifying rapidly.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt text-decoration-inset today via progressive enhancement or @supports feature queries to polish decorative typography. Because unsupported browsers gracefully fall back to default text decoration boundaries, developers can safely retire fragile background-image and pseudo-element workarounds in modern user experiences.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **8 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/status/2102804599325528424) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1780887: \[meta\] \[css-text-decor\] implement text-decoration-inset to modify the length of underline etc](https://bugzilla.mozilla.org/show_bug.cgi?id=1780887) `[NEW]`
- **Mozilla (Gecko):** [Bug #1981310: \[Inactive CSS\] Add text-decoration-inset in inactive CSS](https://bugzilla.mozilla.org/show_bug.cgi?id=1981310) `[NEW]`
- **Mozilla (Gecko):** [Bug #2072125: New wpt failures in /css/ \[css-transitions/properties-value-003.html, css-transitions/properties-value-inherit-003.html, css-animations/text-decoration-inset-auto.html\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2072125) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [medianic.co.uk](https://www.medianic.co.uk/2026/01/29/text-decoration-inset-the-css-trick-for-perfect-text-alignment) *(medianic.co.uk)*
  > \* \*\*Core Benefit\*\*: Eliminates long-standing workarounds like \`background-image: linear-gradient(...)\`, pseudo-elements (\`::after\`), or extra wrapper spans just to pad, lengthen, or animate underlines \* \*\*Medianic / Web ...
- [chromium.org](https://issues.chromium.org/issues/498974811) *(issues.chromium.org)*
  > \* \*\*Chrome Platform Status & Chromium Implementation (CL 7748204)\*\* \* \*\*Summary\*\*: Chromium implemented \`text-decoration-inset\` (tracking issues #468928416 and #498974811) \* \*\*Key Points\*\*: The commit and ChromeStatus mo...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > \* \*\*Chrome Platform Status & Chromium Implementation (CL 7748204)\*\* \* \*\*Summary\*\*: Chromium implemented \`text-decoration-inset\` (tracking issues #468928416 and #498974811), culminating in support across Chromium releases
- [text-decoration-inset is Like Padding for Text Decorations \| CSS-Tricks](https://css-tricks.com/text-decoration-inset-is-like-padding-for-text-decorations) *(css-tricks.com)*
  > \* \*\*CSS-Tricks — \*"text-decoration-inset is Like Padding for Text Decorations"\*\*\* \* \*\*Summary\*\*: CSS-Tricks frames \`text-decoration-inset\` as the missing inline companion to \`text-underline-offset\` The author demonstrate...
- [text-decoration-inset is Like Padding for Text Decorations](https://247webdevs.blogspot.com/2025/12/text-decoration-inset-is-like-padding.html) *(247webdevs.blogspot.com · 2025-12-22T15:22:48)*
  > &lt;strong&gt;text-decoration-inset: &lt;left-inset&gt; &lt;right-inset&gt;;&lt;/strong&gt; Yes, this means that we can set different inset values for the left and right sides. These values must be &lt;length&gt;s, but we can use re...
- [text-decoration-inset is Like Padding for Text Decorations \| 67nj](https://www.67nj.org/text-decoration-inset-is-like-padding-for-text-decorations) *(67nj.org · 2025-12-22T13:39:52)*
  > &lt;strong&gt;text-decoration-inset: &lt;left-inset&gt; &lt;right-inset&gt;;&lt;/strong&gt; Yes, this means that we can set different inset values for the left and right sides. These values must be &lt;length&gt;s, but we can use re...

#### 🔗 Inbound Citations & Reverse Links

- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com · 2026-10-02T00:49:44)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > text-decoration-inset · Issue #4462 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or windo...
- [CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com · 2026-08-17T19:47:28)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ...

#### 📚 Platform Documentation & References

- [text-decoration-inset CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration) *(developer.mozilla.org)*
- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com)*
- [CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com)*
- [Propriété CSS text-decoration-inset - MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 76% · Edge 76.6% · Firefox 83.5% · Safari 65.5%; experimental: Chrome 90.1% · Edge 90.1% · Firefox 84.2% · Safari 80.7%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (66 found across 12 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 6 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (6 found, 1 verified) · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (3 found, 3 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "text-decoration", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "text-decoration": Chrome 76% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5145402365050880-fontface-width-attribute-and-font-width-descriptor"></a>
### [FontFace width attribute and font-width descriptor](https://chromestatus.com/feature/5145402365050880)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5145402365050880](https://chromestatus.com/feature/5145402365050880) · [chromestatuslite.com/feature/5145402365050880](https://chromestatuslite.com/feature/5145402365050880)
- **Specification:** [https://drafts.csswg.org/css-fonts-4/#font-width-prop](https://drafts.csswg.org/css-fonts-4/#font-width-prop)
- **Chromium Bug:** [https://issues.chromium.org/issues/543938492](https://issues.chromium.org/issues/543938492)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/font-width) (Chrome: `—`, Firefox: `—`, Safari: `18.4`) · *group-level data: web-features [`font-width`](https://webstatus.dev/features/font-width)*

#### 📝 Overview

Exposes the width attribute on FontFace and the @font-face font-width descriptor as aliases for stretch and font-stretch. Aligns Chromium with the updated CSS Font Loading and CSS Fonts 4 specifications. Developers can now inspect or initialize font face widths using FontFace.width and CSS font-width interchangeably with stretch and font-stretch.

> **Motivation:** CSS Font Loading and CSS Fonts 4 define width as the primary FontFace descriptor attribute and @font-face descriptor, while retaining stretch as a legacy alias. Chromium previously ignored the width constructor member and font-width descriptor, causing Web Platform Tests to fail. Exposing width aligns Chromium with the updated specification.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 140 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""font-width" descriptor Safari Firefox Chrome "stretch""`, `""FontFace width" "font-width descriptor" blink-dev"`
- **Analysis:** The FontFace width attribute and @font-face font-width descriptor align browser engines with CSS Fonts Module Level 4 and CSS Font Loading, establishing 'width' as the canonical descriptor while preserving 'stretch' as a backward-compatible legacy alias. With Safari 18.4, Firefox 155, and Chrome 154 shipping enabled-by-default support, the feature has completed cross-engine consensus and unified modern interoperability. The ecosystem views this update as an ergonomic cleanup that standardizes font descriptor terminology alongside font-weight and font-style.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams may begin adopting font-width and FontFace.width for modern code clarity, but should maintain font-stretch fallbacks declared earlier in @font-face blocks to ensure compatibility with older browser releases. In programmatic font loading workflows, checking or setting both width and stretch properties ensures complete resilience across legacy environments.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [web.dev](https://web.dev/blog/web-platform-09-2026?hl=en) *(web.dev)*
  > width\` attribute and \`@font-face\` \`font-width\` descriptor\*\* update aligns modern browsers with the CSS Fonts Module Level 4 and CSS Font Loading specifications In CSS Fonts 4, the CSS Working Group renamed the canonical ...
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > width\`) or declare them in CSS (\`@font-face { font-width: ... }\`) interchangeably with \`stretch\` and \`font-stretch\` \*Chrome for Developers\* — Chrome 154 Beta & Stable Release Notes \* \*\*Coverage:\*\* Announced in the Chrome...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17211.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Mike Tay...
- [\[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)*
  > Adoption expectation Feature is ... font face width descriptors within 12 months of reaching Web Platform baseline. Adoption plan Web Platform Tests (WPT) have been added to ensure cross-browser interoperability. MDN doc...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17222.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; Adoption expectation ... font face width &gt;&gt; descriptors within 12 months of reaching Web Platform baseline. &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; Adoption plan &gt;&gt; &gt;&gt; We...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17196.html) *(mail-archive.com)*
  > &gt; &gt; \*Adoption expectation\* &gt; Feature ... font face width &gt; descriptors within 12 months of reaching Web Platform baseline. &gt; &gt; \*Adoption plan\* &gt; Web Platform Tests (WPT) have been added to ensure cro...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17211.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Mike Tay...

#### 📚 Platform Documentation & References

- [font-width CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-width) *(developer.mozilla.org)*
- [font-width CSS at-rule descriptor - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-width) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/CSSFontFaceDescriptors) *(developer.mozilla.org)*
- [wpt/css/css-fonts/parsing/font-face-width.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/css-fonts/parsing/font-face-width.html) *(github.com)*
- [\[css-font-loading\] Which value wins if both \`stretch\` and \`width\` are provided? · Issue #14451 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14451) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `font-width` on [wpt.fyi](https://wpt.fyi/results?q=feature:font-width) (via webstatus.dev) — stable: Chrome 33.3% · Edge 33.3% · Firefox 100% · Safari 100%; experimental: Chrome 33.3% · Edge 33.3% · Firefox 100% · Safari 100%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (51 found across 11 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 5 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "font-width", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "font-width": Chrome 33.3% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 130 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""whatwg/html" "6768" module"`, `""Intent to Ship" "Avoid caching module failures""`, `""Avoid caching module failures""`, `""whatwg/html/pull/10327""`
- **Analysis:** This specification update to the WHATWG HTML standard alters the document module map so transient network errors, HTTP failure codes, and MIME mismatches are no longer permanently cached for the lifetime of a browsing session. With Blink shipping the change enabled by default in Chrome 156, the web platform achieves full multi-engine consensus alongside prior implementations in WebKit and Gecko. Developers widely applaud the fix, which resolves years of production headaches around sticky failures in code-split single-page applications.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt bounded retry wrappers with backoff (e.g., executing dynamic import loader functions inside a try/catch loop) for user-critical lazy-loaded routes and components. However, retry logic should be capped and paired with clear fallback UI, ensuring deployment version skew and HTTP 404s still trigger user-prompted hard reloads rather than endless network requests.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [trade-assistance.com](https://trade-assistance.com/blog/chrome-stops-caching-failed-module-imports-retry-dynamic-import) *(trade-assistance.com)*
  > Historically, the HTML specification and browser implementations mandated that failed module loads (network drops, HTTP 4xx/5xx responses, MIME type mismatches) were recorded in the document’s internal \*\*module map\*\* Bec...
- [chromestatus.com](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > Official Browser Announcements & Specifications \* \*\*Chrome Platform Status & Chrome Release Notes (Chrome 155 Beta / Chrome 156):\*\* Google Chromium shipped the feature under the flag/entry \*"Avoid caching module failures...
- [JavaScript 動態 import() 失敗怎麼重試？Chrome 155 Beta 的模組載入邊界 - ZeroOne](https://laplusda.com/posts/javascript-dynamic-import-failed-retry) *(laplusda.com)*
  > now())\`), which risked breaking module singletons, bypassing HTTP cache rules, and bloating memory Ecosystem posts acknowledge that as this feature lands natively, developers can migrate toward standard \`try/catch\` retry...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17434.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 12:16:49 -0700 On T...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 08:43:49 -0700 \*Contact ema...
- [Chrome 155 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com · 2026-09-16T00:00:00)*
  > &lt;strong&gt;Currently web developers cannot retry failed module loads&lt;/strong&gt;, as these failures are being cached (and retries just result in immediate failures). This change to the module loading behavior enables failed mo...

#### 🔗 Inbound Citations & Reverse Links

- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com · 2026-09-14T08:09:53)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17434.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 12:16:49 -0700 On T...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 08:43:49 -0700 \*Contact ema...
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/whatwg/html/pull/10327`)*
  > 2055211 - Don't cache HTTP errors in the module map Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advanced Search New Bug Reports D...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-03 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0000.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/10327`)*
  > (2 by josepharhar, tabatkins) ... - #12444 Add \`&lt;meta name=&quot;responsive-embedded-sizing&quot;&gt;\` (1 by zcorpan) https://github.com/whatwg/html/pull/12444 \[agenda+\] - #10327 Don&#x27;t cache HTTP errors in the mo...

#### 📚 Platform Documentation & References

- [Failed dynamic import should not always be cached · Issue #6768 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/6768) *(github.com)*
- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com)*
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-03 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0000.html) *(lists.w3.org)*
- [Avoid caching module failures · Issue #4335 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4335) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (54 found across 12 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 4 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (8 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5069051687731200-css-flow-start-and-flow-end-alignment-keywords"></a>
### [CSS flow-start and flow-end alignment keywords](https://chromestatus.com/feature/5069051687731200)

- **Milestone:** Chrome 157 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5069051687731200](https://chromestatus.com/feature/5069051687731200) · [chromestatuslite.com/feature/5069051687731200](https://chromestatuslite.com/feature/5069051687731200)
- **Specification:** [https://github.com/w3c/csswg-drafts/pull/14539](https://github.com/w3c/csswg-drafts/pull/14539)
- **Chromium Bug:** [https://issues.chromium.org/issues/555299635](https://issues.chromium.org/issues/555299635)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `Positive` · Safari: `N/A`

#### 📝 Overview

It was resolved in the CSSWG that we should introduce the flow-start/end keywords as value aliases for the existing flex-start/end keywords. These are needed for alignment in the case of placement reversals.  flow-start in CSS Grid-Lanes would indicate the starting edge of the container at which placement begins, which is useful in the case where placement is reversed (\`fill-reverse\`, \`track-reverse\`, discussed in this CSSWG issue: \[css-grid-3\]\[masonry\] item-flow row vs. column in masonry layouts · Issue #12803 · w3c/csswg-drafts).  Because these are acting as value aliases, we expect flex-start/end to follow the logical directions in Grid Lanes, as well, which will expand the definition of these keywords from only applying special behavior in flexbox to applying to any layout mode whose logical start/end is different from its physical start/end.  For serialization, if either flex-start/end  or flow-start/end  is used, the returned serialized value should be flow-start/end.

> **Motivation:** In grid-lanes, there is currently no alignment keyword to allow us to align based on the start of content placement when reversal is present; instead, we can only currently use the logical container start/end.  We wanted a keyword that behaves the way flex-start/end does in flexbox containers.  Introducing flow-start/end allows us to align based on...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 130 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** The CSS flow-start and flow-end keywords are formal value aliases for flex-start and flex-end, designed to align items relative to content placement flow rather than container logical edges when layout directions reverse in Flexbox and CSS Grid Lanes. Resolved by the CSS Working Group and backed by canonical serialization to the flow-\* variants, the feature is progressing into developer trials in Chromium behind runtime flags while receiving strong multi-engine endorsement.

**Key Recommendations & Takeaways:**
- Actionable Advice: Developers should experiment with the keywords in Chromium Canary under experimental web platform features or the CSSFlowStartAndEnd flag, but continue authoring with standard start, end, or flex-start values with feature detection for production layouts until Safari and Firefox implement the aliases.
- Standards Activity (Mozilla): Latest discussion from @celestepan: "@dholbert thank you for the response!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/WebKit/standards-positions/issues/723) [open] `topic: css`, `venue: W3C CSS WG`
- **Mozilla:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/mozilla/standards-positions/issues/1455) [closed] `position: positive`
  > *Latest discussion from @celestepan: "@dholbert thank you for the response!..."*

#### 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5069051687731200) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [github.io](https://niek.github.io/chrome-features) *(niek.github.io)*
  > \* \*\*Serialization:\*\* If either \`flex-start\`/\`flex-end\` or \`flow-start\`/\`flow-end\` is specified in CSS, the serialized computed value will canonically normalize to \`flow-start\` and \`flow-end\` \* \*\*Chromium Gerrit / Source:...
- [semanticdiff.com](https://app.semanticdiff.com/gh/web-platform-tests/wpt/commit/66c8558479cb6d5583366a30bd7c170fba21ea7f) *(app.semanticdiff.com)*
  > \* \*\*Chromium Gerrit / Source:\*\* Chromium engineers and contributors (including Microsoft’s Celeste Pan) introduced patches implementing parsing for the keywords behind the runtime flags \`CSSFlowStartAndEnd\` and \`CSSFlowS...
- [\[blink-dev\] Intent to Prototype: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17380.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blin...

#### 🔗 Inbound Citations & Reverse Links

- [Create a new feature ID for \`flow-start\` and \`flow-end\` keywords in alignment · Issue #4282 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4282) *(github.com · 2026-08-27T23:18:04)* *(Cites: `https://chromestatus.com/feature/5069051687731200`)*
  > Create a new feature ID for \`flow-start\` and \`flow-end\` keywords in alignment · Issue #4282 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up App...

#### 📚 Platform Documentation & References

- [CSS Align: \`flow-start\` and \`flow-end\` as aliases for \`flex-start\` and \`flex-end\` · Issue #1455 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1455) *(github.com)*
- [w3.org](https://lists.w3.org/Archives/Public/public-css-archive/2026Aug/0191.html) *(lists.w3.org)*
- [mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=2070631) *(bugzilla.mozilla.org)*
- [Create a new feature ID for \`flow-start\` and \`flow-end\` keywords in alignment · Issue #4282 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4282) *(github.com)*
- [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement · Issue #723 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/723) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (51 found across 11 planned queries, 5 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 6 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 2

---

<a id="5094058497277952-webtransport-reliability-attributes"></a>
### [WebTransport reliability attributes](https://chromestatus.com/feature/5094058497277952)

- **Milestone:** Chrome 155 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5094058497277952](https://chromestatus.com/feature/5094058497277952) · [chromestatuslite.com/feature/5094058497277952](https://chromestatuslite.com/feature/5094058497277952)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransport-reliability](https://www.w3.org/TR/webtransport/#dom-webtransport-reliability)
- **Chromium Bug:** [https://issues.chromium.org/issues/545636884](https://issues.chromium.org/issues/545636884)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

#### 📝 Overview

Adds the WebTransport.reliability instance attribute and static WebTransport.supportsReliableOnly attribute. These APIs indicate whether the user agent supports WebTransport over exclusively reliable connections and whether an established session supports unreliable transport such as datagrams.  In Chromium, reliability initially returns "pending" and changes to "supports-unreliable" after an HTTP/3 WebTransport connection is established.  Since Chromium does not currently support HTTP/2 fallback,  WebTransport.supportsReliableOnly returns false; any successfully established session uses HTTP/3 and supports unreliable datagrams.

> **Motivation:** WebTransport may operate over connections with different reliability capabilities. Applications such as games, interactive media, and real-time collaboration tools need to know whether unreliable datagrams are available before selecting their transport strategy.  WebTransport.supportsReliableOnly  reports whether the user agent supports WebTranspor...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 130 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The WebTransport reliability attributes introduce the static 'WebTransport.supportsReliableOnly' property and the instance-level 'reliability' attribute, allowing applications to introspect whether an environment supports exclusively reliable transports (such as HTTP/2 fallbacks) and whether an active session allows unreliable datagrams. Currently rolling out in developer trials behind a flag in Chrome and tracked across MDN and Gecko bug trackers for preview implementation, the API fills a crucial architectural gap in transport capability negotiation. Multi-engine consensus is strong given that both Mozilla and WebKit maintain positive standards positions on WebTransport, though complete reliable-only transport implementations remain in nascent stages across browsers.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building latency-sensitive applications should feature-detect 'WebTransport.supportsReliableOnly' and check 'transport.reliability' after awaiting 'transport.ready' to branch their messaging logic. For production deployments today, keep primary fallbacks to WebSockets or WebRTC active until both HTTP/2 fallback mechanisms and cross-browser reliability attribute support reach stable parity.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [ietf.org](https://datatracker.ietf.org/meeting/119/materials/slides-119-webtrans-ietf-119-webtrans-wg-slides-04) *(datatracker.ietf.org)*
  > supportsReliableOnly\` (static attribute):\*\* A boolean indicating whether the user agent supports WebTransport sessions operating strictly over reliable-only transports (e.g., HTTP/2 fallback) However, draft specification...
- [googleusercontent.com](https://doc-48mg-1o5g-issuetracker.googleusercontent.com/issues/545636884) *(doc-48mg-1o5g-issuetracker.googleusercontent.com)*
  > supportsReliableOnly\` returns \`false\` because Chromium does not yet support HTTP/2 fallback \* \*\*Browser Compatibility Tracking (Gecko / Mozilla)\*\*: MDN documentation entries (and associated GitHub tracking issues for Fir...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com)*
  > supportsReliableOnly\` returns \`false\` because Chromium does not yet support HTTP/2 fallback reliability\` transitions from \`"pending"\` to \`"supports-unreliable"\` once an HTTP/3 session is established
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > Chrome Platform Status & Release Announcements \* \*\*Chrome Platform Status Entry (\*WebTransport reliability attributes\*)\*\*: Notes the feature's progression (developer trials in Chrome 155, targeting stable release in Chro...
- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17710.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Alex Russell Mon, 12 Oct 2026 11:57:46 -0700 L...
- [\[blink-dev\] Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17682.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport reliability attributes Chromestatus Wed, 07 Oct 2026 10:23:32 -0700 Contact e...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17710.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Alex Russell Mon, 12 Oct 2026 11:57:46 -0700 L...
- [\[blink-dev\] Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17682.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > \[blink-dev\] Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport reliability attributes Chromestatus Wed, 07 Oct 2026 10:23:32 -0700 Contact e...
- [\[pull\] master from web-platform-tests:master by pull\[bot\] · Pull Request #1656 · Ballalhossaintalukder/wpt](https://github.com/Ballalhossaintalukder/wpt/pull/1656) *(github.com)* *(Cites: `https://chromestatus.com/feature/5094058497277952`)*
  > Update the IDL harness, Web-exposed interface, and Android WebView expectations. chrome status entry - https://&lt;strong&gt;chromestatus.com/feature/5094058497277952&lt;/strong&gt; Bug: 545636884 Change-Id: I73f603e6d43506efe2a5e1d...
- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17711.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#transport-modes`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes 'Dan Clark' via blink-dev Mon, 12 Oct 2026 13:...
- [\[blink-dev\] Intent to Prototype: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17340.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#transport-modes`)*
  > \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Chromestatus Tue, 01 Sep 2026 10:05:04 -0700...

#### 📚 Platform Documentation & References

- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [WebTransport: reliability property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/reliability) *(developer.mozilla.org)*
- [\[pull\] master from web-platform-tests:master by pull\[bot\] · Pull Request #1656 · Ballalhossaintalukder/wpt](https://github.com/Ballalhossaintalukder/wpt/pull/1656) *(github.com)*
- [WebTransport](https://www.w3.org/TR/2026/CR-webtransport-20260730) *(w3.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 48.6% · Edge 48.6% · Firefox 67.6% · Safari 44.8%; experimental: Chrome 92.4% · Edge 87.6% · Firefox 63.8% · Safari 80%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

- **Chrome usage:** 0.000088% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (49 found across 12 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 6 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 16 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 48.6% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 125 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The Decisions API (window.DecisionModel) is an experimental addition to Chrome's built-in AI suite, currently in developer trial behind a flag in Chrome 157 to enable fast, non-autoregressive on-device semantic classification and routing. It parallels the emergence of cloud decision primitives across the broader AI ecosystem, offering deterministic logit scoring without token-by-token generative overhead. However, it remains an early Chromium design sketch with no formal cross-browser consensus or multi-engine adoption to date.

**Key Recommendations & Takeaways:**
- Actionable Advice: Engineering teams should treat the API strictly as an exploratory prototype behind flags or through local polyfills, designing client-side decision logic with strict progressive enhancement while relying on server-side or heuristic fallbacks for production workflows.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **10 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [web-ai.studio](https://web-ai.studio/docs/decisions) *(web-ai.studio)*
  > By evaluating unstructured input text against a fixed, developer-defined question schema in a single forward pass, it provides logit scores, probabilities, and calibrated confidence levels in tens of milliseconds \* Reuse...
- [Chrome Decisions API: What DecisionModel Means for Site Search](https://szymaniakdigital.co.uk/chrome-decisions-api) *(szymaniakdigital.co.uk)*
  > Chrome Decisions API: What DecisionModel Means for Site Search Skip to content The Category Leaderboard The Category Leaderboard MENU MENU Who Are We What We Do Enterprise SEO Consulting Leading UK-based SEO Consulting M...
- [Chrome Decisions API: the prompts, limits, engines and code reviews behind DecisionModel](https://dejan.ai/blog/chrome-decisions-api-decisionmodel) *(dejan.ai)*
  > Chrome Decisions API: the prompts, limits, engines and code reviews behind DecisionModel Sign in mail search menu &larr; back New here? Sign in to annotate the text and leave comments. &times; Chrome Decisions API: the p...
- [googleusercontent.com](https://doc-3io0-4ra0-issuetracker.googleusercontent.com/issues/568193538) *(doc-3io0-4ra0-issuetracker.googleusercontent.com)*
  > DecisionModel\` (and Blink Mojo interface \`AIDecisionModel\`)
- [ai-sdk.dev](https://ai-sdk.dev/docs/ai-sdk-core/decisions) *(ai-sdk.dev)*
  > \* \*\*Alignment with Cloud Ecosystems:\*\* The web platform's introduction of \`DecisionModel\` mirrors a broader pattern in late 2026, including TypeSafe's \*Jev\*, Cloudflare's \*Clef\*, Vercel AI SDK's \`decisionModel\` adapters,...
- [reddit.com](https://www.reddit.com/r/AI_Agents/comments/1x048af/113_decision_models_in_3_weeks_mostly_qwen_and) *(reddit.com)*
  > The web-native API brings those exact abstractions directly into the browser runtime at zero network latency and zero per-token hosting cost

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Decisions API](http://www.mail-archive.com/blink-dev@chromium.org/msg17639.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5155080092385280`)*
  > \[blink-dev\] Intent to Prototype: Decisions API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Decisions API Mike Wasserman Thu, 01 Oct 2026 13:04:07 -0700 Contact emails \[email&#160;protected\] , \[...
- [Re: \[blink-dev\] Intent to Prototype: Decisions API](http://www.mail-archive.com/blink-dev@chromium.org/msg17641.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/decisions-api`)*
  > Re: \[blink-dev\] Intent to Prototype: Decisions API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: Decisions API Rick Byers Thu, 01 Oct 2026 22:22:34 -0700 This is very exciting, thanks for sha...

#### 📚 Platform Documentation & References

- [GitHub - michaelwasserman/decision-api: An explainer exploring fast, type-safe, on-device ML decisions, classification, scoring, and ranking · GitHub](https://github.com/michaelwasserman/decision-api) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Decisions API Demo](https://web-ai.studio/playgrounds/decisions)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (54 found across 11 planned queries, 6 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 6 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (6 found, 0 verified) · `Engine Bug Trackers` (5 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5158507786665984-fetch-api-forward-reason-from-abortcontroller-to-fetch-response"></a>
### [Fetch API: Forward reason from AbortController to fetch Response](https://chromestatus.com/feature/5158507786665984)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5158507786665984](https://chromestatus.com/feature/5158507786665984) · [chromestatuslite.com/feature/5158507786665984](https://chromestatuslite.com/feature/5158507786665984)
- **Specification:** [https://fetch.spec.whatwg.org](https://fetch.spec.whatwg.org)
- **Chromium Bug:** [https://issues.chromium.org/issues/502133195](https://issues.chromium.org/issues/502133195)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Closed Without a Position`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/abortable-fetch) (Chrome: `66`, Firefox: `57`, Safari: `12.1`) · *group-level data: web-features [`abortable-fetch`](https://webstatus.dev/features/abortable-fetch), shared with 1 other ChromeStatus feature*

#### 📝 Overview

Surfaces the abort reason, if one is provided, to the methods of the Response object and its ReadableStream, rather than just the fetch promise. This fills a gap in our compliance with the standard, surfacing the developer-supplied abort reason everywhere it is intended to.

> **Motivation:** An AbortController can be passed into fetch to allow a request to be aborted. This is already supported; see https://chromestatus.com/feature/5631483679080448.  When calling abort, you can optionally pass in an "abort reason", and the original fetch promise, if it hasn't already resolved, should be rejected with that reason. This is currently worki...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 125 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""abort reason" "fetch" "Response" readable stream reject reason"`, `""Fetch API: Forward reason from AbortController to fetch Response""`
- **Analysis:** This specification-alignment update ensures that custom abort reasons passed to AbortController propagate directly to Response body consumers—such as Response.blob(), Response.json(), and the Response.body ReadableStream—even after initial headers resolve. Historically, engines like Chromium discarded user-supplied abort reasons during body reads, replacing them with generic AbortErrors. Shipped by default in Chromium and Microsoft Edge, the change completes standard WHATWG Fetch compliance across the stream pipeline.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can confidently rely on custom abort reasons propagating directly from AbortController into stream error handlers on modern runtimes. However, defensive catch blocks should continue providing a fallback check against signal.reason if supporting older browser versions where body readers still reject with generic AbortErrors.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Fetch API: Forward abort reason to Response](https://github.com/WebKit/standards-positions/issues/711) [closed] `invalid`
  > *Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."*

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > The Web Platform feature \*\*"Fetch API: Forward reason from AbortController to fetch Response"\*\* addresses a gap in Chromium’s implementation of the WHATWG Fetch and DOM standards Implementing this brings Chromium into fu...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > Chrome Platform Status & Tracking Bug \* \*\*Status Entry:\*\* \*“Fetch API: Forward reason from AbortController to fetch Response”\* (Tracking Bug: \`#502133195\`)
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Chrome for Developers (\`developer.chrome.com\`) \* \*\*Article/Release:\*\* \*Chrome 154 Beta Announcement & Chrome 154 Release Notes\*
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com)*
  > This aligns Chrome with the Fetch standard by exposing the developer-supplied abort reason consistently."\* \* \*\*Microsoft Edge Platform Notes:\*\* Microsoft Edge 154 included the feature simultaneously as part of the shared...
- [stackoverflow.com](https://stackoverflow.com/questions/73049849/abortcontroller-abortreason-but-the-reason-gets-lost-before-it-arrives-to-the) *(stackoverflow.com)*
  > abort(reason)\` had its reason lost if the fetch resolved headers before the abort triggered text()\` or stream catch blocks failed to preserve custom reasons
- [\[blink-dev\] Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17127.html) *(mail-archive.com)*
  > Specification https://fetch.sp... https://chromestatus.com/feature/5631483679080448 &lt;strong&gt;When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t res...

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `abortable-fetch` on [wpt.fyi](https://wpt.fyi/results?q=feature:abortable-fetch) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 66.7%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 66.7%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (60 found across 11 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 5 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "abortable-fetch", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "abortable-fetch": Chrome 66.7% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 3

---

<a id="5159559872249856-js-profiling-in-dedicated-workers"></a>
### [js-profiling in dedicated workers](https://chromestatus.com/feature/5159559872249856)

- **Milestone:** Chrome 154 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5159559872249856](https://chromestatus.com/feature/5159559872249856) · [chromestatuslite.com/feature/5159559872249856](https://chromestatuslite.com/feature/5159559872249856)
- **Specification:** [https://wicg.github.io/js-self-profiling/#the-profiler-interface](https://wicg.github.io/js-self-profiling/#the-profiler-interface)
- **Chromium Bug:** [https://issues.chromium.org/issues/482085416](https://issues.chromium.org/issues/482085416)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/profiler) (Chrome: `94`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`profiler`](https://webstatus.dev/features/profiler), shared with 2 other ChromeStatus features*

#### 📝 Overview

Allows js-profiling in dedicated workers  This feature enables the JavaScript Self‑Profiling (js-profiling) API in Dedicated Workers, while remaining gated by Document Policy. It allows developers to obtain low‑overhead CPU attribution for JavaScript execution in workers, with Document Policy support for workers tracked separately.

> **Motivation:** Modern web applications increasingly offload performance‑critical work to Dedicated Workers to keep the main thread responsive. While the JavaScript Self‑Profiling API provides low‑overhead CPU attribution for JavaScript execution, it is currently unavailable in workers due to its reliance on Document Policy, leaving developers without visibility i...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 125 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"webkit standards positions js self profiling"`, `"js self profiling dedicated workers mozilla webkit"`, `"js profiling in dedicated workers blink dev"`, `"mozilla standards positions js self profiling 477"`
- **Analysis:** The JS Self-Profiling API in Dedicated Workers brings sampled, low-overhead JavaScript CPU profiling to background execution, addressing a long-standing blind spot for applications that offload intensive logic off the main thread. Led by Microsoft Edge engineers and moving through Blink developer trials in Chrome 154, the feature establishes worker-level Document Policy gating to safely expose runtime metrics. However, multi-engine consensus remains nonexistent, cementing the capability as a Chromium-exclusive telemetry tool.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should evaluate worker profiling behind flags in Chromium Canary/Dev channels to benchmark background tasks, gating execution behind runtime checks for the global Profiler constructor. Maintain this capability strictly as a progressive telemetry enhancement, ensuring production worker architectures remain resilient on browsers without profiling support.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > The \*\*"js-profiling in dedicated workers"\*\* feature extends the \*\*JavaScript Self-Profiling API\*\* (\`new Profiler()\`) to Dedicated Web Workers With this feature: \* \*\*Off-Thread CPU Attribution:\*\* Developers can sample cal...
- [chromestatuslite.com](https://chromestatuslite.com/?version=147) *(chromestatuslite.com)*
  > The release notes confirm that \`js-profiling\` is now active in Dedicated Workers while remaining strictly gated by Document Policy, with worker-level policy support tracked alongside the core Document Policy infrastructu...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Con...
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)*
  > Explainer https://github.com/M... Summary Allows js-profiling in dedicated workers &lt;strong&gt;This feature enables the JavaScript Self‑Profiling (js-profiling) API in Dedicated Workers, while remaining gated by Document Pol...

#### 🔗 Inbound Citations & Reverse Links

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com · 2026-09-14T08:09:52)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Con...
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb...

#### 📚 Platform Documentation & References

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com)*
- [Interoperability & Standards Readiness Tracking Issue · Issue #1 · mmocny/js-self-profiling](https://github.com/mmocny/js-self-profiling/issues/1) *(github.com)*
- [v147: MDN-shape upgrade for js-profiling in dedicated workers (weekly hardening remainder) by PaulKinlan · Pull Request #11 · PaulKinlan/gendn](https://github.com/PaulKinlan/gendn/pull/11) *(github.com)*
- [GitHub - WICG/js-self-profiling: Proposal for a programmable JS profiling API for collecting JS profiles from real end-user environments · GitHub](https://github.com/WICG/js-self-profiling) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [js-profiling in dedicated workers Demo](https://docs.google.com/document/d/1prxxuck3NDqOjuhMkT8vykV9Fl3IQyUzdESQdxz_7pg/edit?tab=t.0)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `profiler` on [wpt.fyi](https://wpt.fyi/results?q=feature:profiler) (via webstatus.dev) — stable: Chrome 64% · Edge 64% · Firefox 0% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%

#### 🌐 Web-features Group Context

*group-level data: web-features [`profiler`](https://webstatus.dev/features/profiler), shared with 2 other ChromeStatus features*

- **Chrome usage:** 0.00024% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/278))
- **Mozilla:** no position recorded ([standards position](https://github.com/mozilla/standards-positions/issues/477)) · concerns: `security`

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (47 found across 12 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 2 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (15 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "profiler", shared with 2 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "profiler": Chrome 64% passing (stable))* · `Sources cited by the AI synthesis` (6 found, 1 verified)
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

- **Momentum:** **Emerging** (footprint 125 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""open-ui.org/components/overscroll-actions""`, `""Overscroll Areas" "Blink" OR "csswg" OR "Intent to Experiment""`, `""Intent to Experiment: Overscroll Areas""`, `""12750" "csswg-drafts""`
- **Analysis:** Overscroll Areas—incubated within Open UI and under review in the W3C CSS Working Group—introduces declarative primitives that let elements anchor to overscroll regions to reveal UI like sidebars or pull-to-refresh actions without script. Chromium has entered an Origin Trial starting in Chrome 157, but the feature is in early incubation and lacks formal cross-engine backing. Broader multi-engine consensus remains pending while the working group navigates compositor interactions and accessibility implications.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat Overscroll Areas purely as an experimental prototype for local evaluation or isolated origin trial testing rather than production deployment. Production applications requiring swipe-to-reveal interactions should continue relying on accessible JavaScript or progressive scroll-driven fallbacks paired with keyboard-accessible disclosure patterns.
- In active Origin Trial in Chrome 157. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **10 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5261280285949952?gate=5606867782991872) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [@intenttoship.dev on Bluesky](https://bsky.app/profile/intenttoship.dev/post/3mwr2xqi6el2x) *(bsky.app)*
  > @intenttoship.dev on Bluesky Post IntentToShip intenttoship.dev did:plc:cs3zn3kikj5kwzljlvyr55sg Blink: Intent to Experiment: Overscroll Areas https://groups.google.com/a/chromium.org/d/msgid/blink-dev/6abd6131.a448aa95....
- [youtube.com](https://www.youtube.com/watch?v=9r0PBbJFLoM) *(youtube.com)*
  > \* The team presented details in the Chromium developer session \*\*"Swiping into Overscroll Areas"\*\* at BlinkOn 21, walking through compositor gesture handling and interactions with the CSS Box Model
- [Re: \[blink-dev\] Intent to Experiment: Overscroll Areas](http://www.mail-archive.com/blink-dev@chromium.org/msg17624.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Overscroll Areas Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Overscroll Areas Chris Harrelson Wed, 30 Sep 2026 13:09:38 -0700 LGTM On Wed, Sep 30, 202...
- [\[blink-dev\] Ready for Developer Testing: Overscroll Gestures](http://www.mail-archive.com/blink-dev@chromium.org/msg16333.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Overscroll Gestures Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Overscroll Gestures Chromestatus Fri, 17 Apr 2026 11:44:16 -0700 Contact emails ...
- [\[blink-dev\] Intent to Experiment: Overscroll Areas](http://www.mail-archive.com/blink-dev@chromium.org/msg17620.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Overscroll Areas Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Overscroll Areas Chromestatus Wed, 30 Sep 2026 12:21:40 -0700 Contact emails \[email&#160;protecte...

#### 🔗 Inbound Citations & Reverse Links

- [Overscroll Gestures · Issue #1053 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1053) *(github.com · 2026-07-29T18:36:22)* *(Cites: `https://chromestatus.com/feature/5261280285949952`)*
  > Overscroll Gestures · Issue #1053 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [Re: \[blink-dev\] Intent to Experiment: Overscroll Areas](http://www.mail-archive.com/blink-dev@chromium.org/msg17624.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5261280285949952`)*
  > Re: \[blink-dev\] Intent to Experiment: Overscroll Areas Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Overscroll Areas Chris Harrelson Wed, 30 Sep 2026 13:09:38 -0700 LGTM On Wed, Sep 30, 202...
- [\[blink-dev\] Ready for Developer Testing: Overscroll Gestures](http://www.mail-archive.com/blink-dev@chromium.org/msg16333.html) *(mail-archive.com)* *(Cites: `https://open-ui.org/components/overscroll-actions.explainer`)*
  > \[blink-dev\] Ready for Developer Testing: Overscroll Gestures Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Overscroll Gestures Chromestatus Fri, 17 Apr 2026 11:44:16 -0700 Contact emails ...
- [\[blink-dev\] Intent to Experiment: Overscroll Areas](http://www.mail-archive.com/blink-dev@chromium.org/msg17620.html) *(mail-archive.com)* *(Cites: `https://open-ui.org/components/overscroll-actions.explainer`)*
  > \[blink-dev\] Intent to Experiment: Overscroll Areas Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Overscroll Areas Chromestatus Wed, 30 Sep 2026 12:21:40 -0700 Contact emails \[email&#160;protecte...

#### 📚 Platform Documentation & References

- [\[scroll-animations?\] Proposal: Add overscroll gestures with ability to reveal elements · Issue #12750 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12750) *(github.com)*
- [w3.org](https://www.w3.org/2026/05/14-aria-minutes.html) *(w3.org)*
- [Overscroll Gestures · Issue #1053 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1053) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Overscroll Areas Demo](https://flackr.github.io/web-demos/html/overscrollcontainer)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (48 found across 12 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 5 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (3 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (3 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="6207138742534144-accentcolor-accentcolortext-follows-accent-color-value"></a>
### [AccentColor & AccentColorText follows accent-color value](https://chromestatus.com/feature/6207138742534144)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6207138742534144](https://chromestatus.com/feature/6207138742534144) · [chromestatuslite.com/feature/6207138742534144](https://chromestatuslite.com/feature/6207138742534144)
- **Specification:** [https://www.w3.org/TR/css-color-4/#css-system-colors](https://www.w3.org/TR/css-color-4/#css-system-colors)
- **Chromium Bug:** [https://issues.chromium.org/issues/536420071](https://issues.chromium.org/issues/536420071)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `Shipped/Shipping`

#### 📝 Overview

\`AccentColor\` and \`AccentColorText\` reflect the element's effective \`accent-color\` value instead of only platform-provided system accent colors.  This allows CSS to reference the same colors used by \`accent-color\` styling, making it easier to keep custom styling consistent with form controls and other accented UI. It aligns Chromium's behavior with the CSS Color Module Level 4 specification.

> **Motivation:** Currently, \`AccentColor\` and \`AccentColorText\` keywords have been implemented in a limited capacity for Chromium. They reflect the OS' chosen system accent color when \`accent-color\` is set to \`auto\` and return a default value otherwise.   The CSSWG resolved that the keywords should reflect the value of \`accent-color\`, allowing developers to use the...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 120 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"AccentColor takes its value from accent-color mozilla standards-positions"`, `"AccentColor AccentColorText accent-color css-color-4 webkit mozilla"`, `"AccentColor AccentColorText follows accent-color value chromestatus"`
- **Analysis:** This update aligns browsers with the CSS Color Module Level 4 specification by allowing the \`AccentColor\` and \`AccentColorText\` system color keywords to dynamically reflect an element's cascading \`accent-color\` value rather than purely host OS system settings. The feature removes an awkward disconnect between custom styled components and native form controls, earning solid consensus across browser vendors and standards bodies. It elevates the utility of system color keywords from niche OS-querying fallbacks into actionable styling tokens for bespoke UI.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt this pattern as a progressive enhancement, maintaining CSS custom properties as fallbacks for older browser versions while applying \`AccentColor\` and \`AccentColorText\` to bind custom controls seamlessly to native inputs.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "I think this is fine, propose positive. Specially with the recent resolutions from last week I don't see many concerns here...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **Mozilla:** [\[CSS Color Module Level 4\] AccentColor takes its value from accent-color](https://github.com/mozilla/standards-positions/issues/1438) [closed] `venue: W3C`, `position: positive`, `topic: CSS`
  > *Latest discussion from @emilio: "I think this is fine, propose positive. Specially with the recent resolutions from last week I don't see many concerns here...."*

#### 📰 Ecosystem Blogs & Articles

- [Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-css_types_color_system-color_accentcolor_accentcolortext) *(caniuse.com)*
  > Can I use... Support tables for HTML5, CSS3, etc Can I use Search ? Settings Home Index of features Latest features Lazy loading via attribute for video & audio CSS Grid Lanes CSS if() function View Transitions (cross-do...
- [chromium.org](https://issues.chromium.org/issues/40229450) *(issues.chromium.org)*
  > Developers frequently commented in Chromium bug trackers that \*"referencing \`accent-color\` is far more valuable than OS querying."\*

#### 📚 Platform Documentation & References

- [AccentColor and AccentColorText system colors · Issue #1161 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1161) *(github.com)*
- [\[CSS Color Module Level 4\] AccentColor takes its value from accent-color · Issue #1438 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1438) *(github.com)*
- [\[css-color\] Mitigating fingerprinting for AccentColor/AccentColorText · Issue #10372 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10372) *(github.com)*
- [\`AccentColor\` & \`AccentColorText\` follows \`accent-color\` value · Issue #1763 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1763) *(github.com)*
- [\[css-color-4\] \[css-ui\] \`accent-color: AccentColor\` when parent's \`accent-color\` is \`auto\`? · Issue #14329 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14329) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [AccentColor & AccentColorText follows accent-color value Demo](https://kyerebo.github.io/demos/system-accent-color/index.html)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (54 found across 11 planned queries, 4 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 5 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (4 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 1

---

<a id="5080055102439424-add-options-bag-to-websocket-constructor"></a>
### [Add options bag to WebSocket constructor](https://chromestatus.com/feature/5080055102439424)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5080055102439424](https://chromestatus.com/feature/5080055102439424) · [chromestatuslite.com/feature/5080055102439424](https://chromestatuslite.com/feature/5080055102439424)
- **Specification:** [https://github.com/whatwg/websockets/pull/76](https://github.com/whatwg/websockets/pull/76)
- **Chromium Bug:** [https://crbug.com/542670554](https://crbug.com/542670554)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `Support`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/websockets) (Chrome: `5`, Firefox: `11`, Safari: `5`) · *group-level data: web-features [`websockets`](https://webstatus.dev/features/websockets), shared with 5 other ChromeStatus features*

#### 📝 Overview

Add support for passing an option bag (WebSocketInit dictionary) as the second argument to the WebSocket constructor. The option bag will initially support a "protocols" option, allowing developers to specify subprotocols (mirroring the existing protocols argument), and also serves as an extension point for future options.  Before, this would be written \`const socket = new WebSocket("wss://example.com:8080", "soap")\`. After, this could also be written \`const socket = new WebSocket("wss://example.com:8080", { protocols: "soap" })\`.  See https://github.com/whatwg/websockets/issues/42 and spec PR https://github.com/whatwg/websockets/pull/76 for this change.

> **Motivation:** There is a demand for extensibility of options on the WebSocket constructor, to mirror the "option bag" approach that the Fetch API has. https://github.com/whatwg/websockets/issues/42 is requested by a number of implementors and users, and Chromium wants this as a means to add a \`targetAddressSpace\` option matching the one added to Fetch for Local ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 120 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Add options bag to WebSocket constructor" chromium"`, `""WebSocket" "WebSocketInit" options bag constructor whatwg"`, `""Supporting options bag in WebSocket constructor" webkit standards-positions"`, `""Supporting options bag in WebSocket constructor" mozilla standards-positions"`
- **Analysis:** The introduction of an options bag (\`WebSocketInit\`) to the \`WebSocket\` constructor modernizes the long-standing API to align with patterns established by the Fetch API, serving as a crucial extension point for features like Local Network Access (\`targetAddressSpace\`). Shipped enabled by default in Chromium 154 following WHATWG specification updates, the change commands clear architectural consensus across browser vendors. Developer reception is enthusiastically receptive to the improved ergonomics, though full production adoption awaits implementations in non-Chromium stable engines.

**Key Recommendations & Takeaways:**
- Actionable Advice: Do not refactor existing production \`WebSocket\` calls unconditionally to the options dictionary, as Safari, Firefox, and older Chromium runtimes will treat the object as an invalid subprotocol and fail. Continue using the legacy string or array protocol argument for general usage, and gate the options bag behind feature detection or defensive wrappers only when targeting Chromium-specific options like \`targetAddressSpace\`.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [closed] `position: support`, `topic: networking`, `venue: WHATWG HTML Workstream`, `from: Google`
  > *Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."*
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open] `venue: WHATWG`, `topic: API`

#### 📰 Ecosystem Blogs & Articles

- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > Chrome 154 Release Notes - Chrome Platform Status Chrome 154 Release Notes Preview Scheduled Stable Release September 22, 2026 Network / Connectivity Add options bag to WebSocket constructor # Link copied! Add support fo...
- [codercops.com](https://blog.codercops.com/blog/chrome-154-websocket-options-iterator-includes-https-prompts-2026) *(blog.codercops.com)*
  > Developer Blogs & Ecosystem Coverage - \*\*Codercops — \*Chrome 154 for Developers: What Changed and What to Test\*\*\* Developer Blogs & Ecosystem Coverage - \*\*Codercops — \*Chrome 154 for Developers: What Changed and What to ...
- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)*
  > Chromium Sign in
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to ...
- [\[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor Chromestatus Wed, 05 Aug 2026 10:5...

#### 🔗 Inbound Citations & Reverse Links

- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Chromium Sign in
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to ...

#### 📚 Platform Documentation & References

- [Supporting options bag in WebSocket constructor · Issue #1444 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1444) *(github.com)*
- [local-network-access: WebSocket constructor rejects targetAddressSpace and test flag misses IPv6 localhost · Issue #1651 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1651) *(github.com)*
- [fix(local-network-access): update WebSocket LNA guidance and IPv6 localhost flag (#1651) by rowan-m · Pull Request #1727 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/pull/1727) *(github.com)*
- [Add targetAddressSpace integration in WebSockets by christhompson · Pull Request #125 · WICG/local-network-access](https://github.com/WICG/local-network-access/pull/125) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `websockets` on [wpt.fyi](https://wpt.fyi/results?q=feature:websockets) (via webstatus.dev) — stable: Chrome 94.6% · Edge 94.6% · Firefox 96.6% · Safari 95.5%; experimental: Chrome 95.7% · Edge 95.7% · Firefox 96.6% · Safari 95.5%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (51 found across 12 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 2 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(group "websockets", shared with 5 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "websockets": Chrome 94.6% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 1

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

- **Momentum:** **Emerging** (footprint 120 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Expose ProgressEvent in service workers""`, `""ProgressEvent" "ServiceWorkerGlobalScope""`
- **Analysis:** The exposure of ProgressEvent in service workers resolves a long-standing omission in Blink, bringing Chromium into alignment with the WHATWG XMLHttpRequest specification where the interface is exposed to all worker global scopes. Enabled by default in Chrome 157, the update allows developers to construct and dispatch standard progress events with lengthComputable, loaded, and total attributes directly inside service workers. This change establishes complete multi-engine consensus, as Gecko and WebKit had already implemented the interface across worker contexts.

**Key Recommendations & Takeaways:**
- Actionable Advice: Developers can safely leverage the standard ProgressEvent constructor within service workers across modern engines, while guarding with a simple typeof ProgressEvent !== 'undefined' check or falling back to CustomEvent for older Chromium builds. Teams should note that this change only provides the event constructor and data interface; it does not expose XMLHttpRequest or provide automated progress events for the Fetch API.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **11 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/release-notes/157) *(cr-status.appspot.com)*
  > Chrome Platform Status & Release Tracker (Chrome 157) \* \*\*Title / Feature:\*\* \*Expose ProgressEvent in service workers\* (Chrome 157)
- [google.com](https://issuetracker.google.com/issues/565605607) *(issuetracker.google.com)*
  > Chromium Blink Intent to Ship & Issue Tracker \* \*\*Sources:\*\* Blink \*Intent to Ship: Expose ProgressEvent in service workers\* (and Chromium Documentation Tracker Issue \`#565605607\`: \*Document ProgressEvent availability in...
- [bsky.app](https://bsky.app/profile/intenttoship.dev) *(bsky.app)*
  > Chromium Blink Intent to Ship & Issue Tracker \* \*\*Sources:\*\* Blink \*Intent to Ship: Expose ProgressEvent in service workers\* (and Chromium Documentation Tracker Issue \`#565605607\`: \*Document ProgressEvent availability in...
- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17670.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Chris Harrelson Wed, 07 Oct 20...
- [\[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17546.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers Chromestatus Thu, 24 Sep 2026 05:51:...
- [\[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17635.html) *(mail-archive.com)*
  > Please list open issues (eg links ... of the API in a non-backward-compatible way). None anticipated for this change. &lt;strong&gt;The XMLHttpRequest Standard already exposes ProgressEvent to Window and Worker&lt;/strong&gt;. This ...

#### 🔗 Inbound Citations & Reverse Links

- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com · 2026-09-24T13:38:21)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in...
- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17670.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Chris Harrelson Wed, 07 Oct 20...
- [\[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17546.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > \[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers Chromestatus Thu, 24 Sep 2026 05:51:...

#### 📚 Platform Documentation & References

- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com)*
- [\[332663431\] ProgressEvent should expose to Service Worker · Issue #485 · OSSCA-chromium/contributions](https://github.com/OSSCA-chromium/contributions/issues/485) *(github.com)*
- [Expose ProgressEvent to ServiceWorker · Issue #305 · whatwg/xhr](https://github.com/whatwg/xhr/issues/305) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `xhr` on [wpt.fyi](https://wpt.fyi/results?q=feature:xhr) (via webstatus.dev) — stable: Chrome 95.6% · Edge 95.4% · Firefox 97% · Safari 96.5%; experimental: Chrome 95.6% · Edge 95.1% · Firefox 97% · Safari 97.9%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 11 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 3 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "xhr", shared with 6 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "xhr": Chrome 95.6% passing (stable))* · `Sources cited by the AI synthesis` (1 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5205192866922496-iterator-includes"></a>
### [Iterator Includes](https://chromestatus.com/feature/5205192866922496)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5205192866922496](https://chromestatus.com/feature/5205192866922496) · [chromestatuslite.com/feature/5205192866922496](https://chromestatuslite.com/feature/5205192866922496)
- **Specification:** [https://tc39.es/proposal-iterator-includes](https://tc39.es/proposal-iterator-includes)
- **Chromium Bug:** [https://issues.chromium.org/issues/504886973](https://issues.chromium.org/issues/504886973)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `In development`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/iterator-includes) (Chrome: `154`, Firefox: `154`, Safari: `—`) · *group-level data: web-features [`iterator-includes`](https://webstatus.dev/features/iterator-includes)*

#### 📝 Overview

A TC39 proposal to allow the developer to ask whether an iterator yields a given value. Analogue to \`Array.prototype.includes\`.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 120 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"core js iterator includes"`, `"proposal iterator includes"`, `"tc39 proposal iterator includes"`, `"tc39 iterator includes stage"`
- **Analysis:** Iterator.prototype.includes has advanced to Stage 3 within TC39 and shipped enabled by default in Chrome 154, providing an ergonomic, memory-efficient way to check for values without allocating intermediate arrays or exhausting infinite sequences. Engine consensus is solid across all major vendors, with implementation progressing swiftly across Gecko and JavaScriptCore. The feature effectively closes a long-standing parity gap between Array convenience methods and native Iterator helpers.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can begin leveraging Iterator.prototype.includes today by pairing it with core-js polyfills or defensive method-existence checks in data-processing pipelines. Unpolyfilled production deployments should continue using Iterator.prototype.some or traditional generator loops until Safari ships unflagged support.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2025773: \[meta\] Iterator includes proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=2025773) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [arrays - JavaScript check whether iterator includes value - Stack Overflow](https://stackoverflow.com/questions/64093419/javascript-check-whether-iterator-includes-value) *(stackoverflow.com)*
  > It allows developers to check whether an iterator produces a target value without having to convert the iterator into an intermediate array first includes(...)\` (which wastes memory and crashes on infinite sequences) or ...
- [chrome.com](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > Chrome for Developers (\`developer.chrome.com\` & Chrome Status) \* \*\*Release Announcements\*\*: Featured in the \*\*Chrome 154\*\* release notes and beta updates under the JavaScript section
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Chrome for Developers (\`developer.chrome.com\` & Chrome Status) \* \*\*Release Announcements\*\*: Featured in the \*\*Chrome 154\*\* release notes and beta updates under the JavaScript section
- [webkit.org](https://results.webkit.org/commit?repository_id=webkit&id=310769%40main) *(results.webkit.org)*
  > Engine Support & Polyfills \* \*\*WebKit / Safari\*\*: Implemented under an experimental runtime flag (\`--useIteratorIncludes\`)
- [Iterator includes - core-js](https://core-js.io/v4/docs/features/proposals/iterator-includes) *(core-js.io)*
  > Iterator includes - core-js v4 v3 (default) v3 v4 (alpha) Usage Supported engines and compatibility data TypeScript type definitions Features ECMAScript ECMAScript: Object ECMAScript: Function ECMAScript: Error ECMAScrip...
- [Iterator Includes](https://chromestatus.com/feature/5205192866922496?gate=6089497379995648) *(chromestatus.com · 2026-08-10T00:00:00)*
  > Chrome Platform Status

#### 🔗 Inbound Citations & Reverse Links

- [Iterator Includes · Issue #4302 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4302) *(github.com · 2026-09-03T10:35:01)* *(Cites: `https://chromestatus.com/feature/5205192866922496`)*
  > Iterator Includes · Issue #4302 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. R...

#### 📚 Platform Documentation & References

- [Iterator.prototype.includes() - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) *(developer.mozilla.org)*
- [Iterator - JavaScript - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) *(developer.mozilla.org)*
- [Iterator Includes · Issue #4302 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4302) *(github.com)*
- [Iterator : méthode includes() - JavaScript - MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) *(developer.mozilla.org)*
- [2034104 - Ship Iterator Includes proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=2034104) *(bugzilla.mozilla.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (69 found across 12 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 7 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (6 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (3 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5168674259468288-optional-descriptors-for-registered-custom-properties"></a>
### [Optional descriptors for registered custom properties](https://chromestatus.com/feature/5168674259468288)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5168674259468288](https://chromestatus.com/feature/5168674259468288) · [chromestatuslite.com/feature/5168674259468288](https://chromestatuslite.com/feature/5168674259468288)
- **Specification:** [https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule](https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule)
- **Chromium Bug:** [https://issues.chromium.org/issues/491802759](https://issues.chromium.org/issues/491802759)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `Support`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/registered-custom-properties) (Chrome: `85`, Firefox: `128`, Safari: `16.4`) · *group-level data: web-features [`registered-custom-properties`](https://webstatus.dev/features/registered-custom-properties), shared with 4 other ChromeStatus features*

#### 📝 Overview

Allows authors to omit any descriptor in an @property rule and the corresponding optional members of CSS.registerProperty(). Omitted values  default to universal syntax, inheritance, and the guaranteed-invalid  initial value; invalid descriptors use normal CSS fallback behavior.

> **Motivation:** Registered custom properties currently require authors to repeat syntax and  inherits descriptors, and typed registrations cannot omit initial-value. The  CSSWG resolved that registrations should behave like unregistered custom  properties except for the descriptors authors explicitly provide. This removes  boilerplate and lets typed properties use...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 120 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"CSS registerProperty optional descriptors browser support"`, `""@property" optional descriptors csswg-drafts"`, `""Optional descriptors for registered custom properties" chrome"`
- **Analysis:** The CSS Working Group specification update making descriptors optional in \`@property\` and \`CSS.registerProperty()\` resolves long-standing ergonomic pain by aligning registered custom property defaults with standard unregistered properties. Chromium has enabled optional descriptors by default in Chrome 156, removing mandatory boilerplate and allowing typed properties to leverage per-use \`var()\` fallbacks. While broad standards consensus in the CSSWG backs this change, general web availability remains fragmented as other browser engines update their parsers.

**Key Recommendations & Takeaways:**
- Actionable Advice: Do not omit descriptors directly in production CSS yet, as engines without the updated parser will treat incomplete \`@property\` declarations as invalid and discard them entirely. Instead, continue providing explicit \`syntax\`, \`inherits\`, and \`initial-value\` descriptors or utilize PostCSS build plugins to polyfill the simplified syntax until cross-engine support stabilizes.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @hober: "Closing as we've identified our position...."
- Standards Activity (Mozilla): Latest discussion from @dbaron: "Also see #93, where we added the original position...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Properties and Values API Level 1](https://github.com/WebKit/standards-positions/issues/22) [closed] `position: support`, `topic: css`, `venue: W3C CSS WG`, `topic: houdini`, `from: Google`
  > *Latest discussion from @hober: "Closing as we've identified our position...."*
- **Mozilla:** [CSS Properties & Values API: @property](https://github.com/mozilla/standards-positions/issues/331) [closed] `venue: W3C`, `position: positive`
  > *Latest discussion from @dbaron: "Also see #93, where we added the original position...."*

#### 📦 Polyfills & NPM Ecosystem

- [@csstools/postcss-property-rule-optional-descriptors](https://www.npmjs.com/package/@csstools/postcss-property-rule-optional-descriptors) `v1.0.0` — Omit optional descriptors in at-property rules

#### 📰 Ecosystem Blogs & Articles

- [@property \| CSS-Tricks](https://css-tricks.com/almanac/rules/p/property) *(css-tricks.com)*
  > dev have frequently promoted \`@property\` primarily for its ability to toggle \`inherits: false\` and prevent unintended token leakage into child components Commentators noted that forcing developers to specify \`syntax: "\*"...
- [chromestatus.com](https://chromestatus.com/feature/5128966769475584) *(chromestatus.com)*
  > \* \*\*Typed Scoping & Fallbacks:\*\* Modern CSS articles (such as explorations by Stephanie Eckles on type definitions and Lea Verou on property declarations) have highlighted the friction around \`initial-value\` overriding s...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > &lt;strong&gt;Allows authors to omit any descriptor in an @property rule and the corresponding optional members of CSS&lt;/strong&gt;.registerProperty().

#### 🔗 Inbound Citations & Reverse Links

- [\[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts](https://github.com/w3c/css-houdini-drafts/issues/994) *(github.com · 2020-07-23T22:24:41)* *(Cites: `https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule`)*
  > \[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You si...

#### 📚 Platform Documentation & References

- [CSS Properties and Values API Level 1](https://www.w3.org/TR/css-properties-values-api-1) *(w3.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Properties_and_Values_API) *(developer.mozilla.org)*
- [\[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts](https://github.com/w3c/css-houdini-drafts/issues/994) *(github.com)*
- [\[css-properties-values-api\] \`@property\` descriptors should be optional whenever possible · Issue #13211 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13211) *(github.com)*
- [\[css-properties-values-api\] Make \`initial-value\` descriptor optional · Issue #1109 · w3c/css-houdini-drafts · GitHub](https://github.com/w3c/css-houdini-drafts/issues/1109) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `registered-custom-properties` on [wpt.fyi](https://wpt.fyi/results?q=feature:registered-custom-properties) (via webstatus.dev) — stable: Chrome 66.4% · Edge 66.4% · Firefox 86.7% · Safari 92%; experimental: Chrome 91.2% · Edge 90.3% · Firefox 87.6% · Safari 92.9%

#### 🌐 Web-features Group Context

*group-level data: web-features [`registered-custom-properties`](https://webstatus.dev/features/registered-custom-properties), shared with 4 other ChromeStatus features*

- **Chrome usage:** 0.19% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/146))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 11 planned queries, 5 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 4 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 1 verified) · `web-features mapping` *(group "registered-custom-properties", shared with 4 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "registered-custom-properties": Chrome 66.4% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 7

---

<a id="5194104408506368-webtransport-headers-and-responseheaders"></a>
### [WebTransport headers and responseHeaders](https://chromestatus.com/feature/5194104408506368)

- **Milestone:** Chrome 156 (Enabled by default) · first listed in Chrome 153
- **ChromeStatus:** [chromestatus.com/feature/5194104408506368](https://chromestatus.com/feature/5194104408506368) · [chromestatuslite.com/feature/5194104408506368](https://chromestatuslite.com/feature/5194104408506368)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers)
- **Chromium Bug:** [https://issues.chromium.org/issues/551850821](https://issues.chromium.org/issues/551850821)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `In development`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

#### 📝 Overview

Adds support for passing custom HTTP request headers via WebTransportOptions and inspecting server response headers through the WebTransport instance. This allows web applications to supply metadata, authentication tokens, and custom parameters during the initial CONNECT handshake and access server-provided headers once the connection is established.

> **Motivation:** The WebTransport constructor requires support for custom HTTP request headers to address several technical limitations in authentication, routing, and capability negotiation.  Without custom headers, developers must pass authentication tokens in URL query strings, which exposes credentials in server logs and telemetry, or authenticate over an initi...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 120 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** The addition of custom HTTP headers and the responseHeaders attribute to WebTransport closes a long-standing architectural gap, enabling native authentication, capability negotiation, and reverse-proxy routing during the initial HTTP/3 CONNECT handshake. Formalized in the W3C WebTransport Candidate Recommendation, the feature eliminates insecure URL-token workarounds and unnecessary stream-level initialization round-trips. With Chromium shipping default support and strong multi-engine participation in its design, the API establishes a robust foundation for modern real-time web applications.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams deploying WebTransport should adopt the headers dictionary using progressive enhancement, falling back to legacy stream negotiation or ticket-based query parameters only when feature detection fails. Backend architectures should be updated to validate authentication tokens directly on incoming HTTP/3 CONNECT requests to prune connection setup latency.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *In developer trial (Behind a flag)* to *Enabled by default*
- 📰 **8 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > \*\*Chrome for Developers & Chrome Platform Status\*\* \* \*\*Chrome 155 Beta Release Notes & ChromeStatus:\*\* Google documented this feature on the \*Chrome Platform Status\* portal and featured it in the \*Chrome 155 Beta\* releas...
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/3217580af2918bf0b2ba128e77d9b1c898c9a161) *(chromium.googlesource.com)*
  > \* \*\*Key Points Highlighted:\*\* \* Enabled behind the \`WebTransportHeaders\` runtime flag for developer trials (Milestones 153/154) and slated for general availability in Chrome 155 headers\` through to the underlying HTTP/3 ...
- [github.io](https://dontcallmedom.github.io/webidlpedia/names/WebTransport.html) *(dontcallmedom.github.io)*
  > responseHeaders\`
- [google.com](https://issuetracker.google.com/issues/551879993) *(issuetracker.google.com)*
  > headers\` through to the underlying HTTP/3 CONNECT stream and exposing the response headers to the client-side JavaScript binding
- [\[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17342.html) *(mail-archive.com)*
  > &lt;strong&gt;Request headers are supplied at constructor initialization and response headers become accessible asynchronously upon connection establishment via wt&lt;/strong&gt;.ready, fitting naturally into existing WebTransport a...
- [Re: \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17475.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; There&#x27;s an existing issue for WebTransport as a whole here: &gt;&gt;&gt; https://github.com/mozilla/standards-positions/issues/167 &gt;&gt;&gt; &gt;&gt;&gt; Because it is part ...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [Do we want to allow web developers to add headers of the CONNECT request? · Issue #263 · w3c/webtransport](https://github.com/w3c/webtransport/issues/263) *(github.com)*
- [Remove \[SameObject\] from responseHeaders · Issue #783 · w3c/webtransport](https://github.com/w3c/webtransport/issues/783) *(github.com)*
- [Exposing headers of the CONNECT response · Issue #264 · w3c/webtransport](https://github.com/w3c/webtransport/issues/264) *(github.com)*
- [webtransport/explainer.md at main · w3c/webtransport](https://github.com/w3c/webtransport/blob/main/explainer.md) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 48.6% · Edge 48.6% · Firefox 67.6% · Safari 44.8%; experimental: Chrome 92.4% · Edge 87.6% · Firefox 63.8% · Safari 80%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

- **Chrome usage:** 0.000088% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 11 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 6 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 16 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 48.6% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5109912169480192-webtransport-receive-stream"></a>
### [WebTransport receive stream](https://chromestatus.com/feature/5109912169480192)

- **Milestone:** Chrome 155 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5109912169480192](https://chromestatus.com/feature/5109912169480192) · [chromestatuslite.com/feature/5109912169480192](https://chromestatuslite.com/feature/5109912169480192)
- **Specification:** [https://w3c.github.io/webtransport/#webtransportreceivestream](https://w3c.github.io/webtransport/#webtransportreceivestream)
- **Chromium Bug:** [https://issues.chromium.org/issues/568317222](https://issues.chromium.org/issues/568317222)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

#### 📝 Overview

Adds the standardized WebTransportReceiveStream interface, a ReadableStream subclass used for incoming unidirectional streams and the readable side of bidirectional streams. Its getStats() method returns per-stream byte counters: bytesReceived reports bytes received from the network, while bytesRead reports bytes delivered to the application.

> **Motivation:** Incoming WebTransport streams have historically been exposed as generic ReadableStream objects in Chromium. The WebTransport specification defines a dedicated WebTransportReceiveStream subclass with stream-specific statistics.  Applications that receive large or latency-sensitive streams need to distinguish bytes received by the browser from bytes ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 120 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebTransportReceiveStream" site:chromestatus.com"`, `""WebTransportReceiveStream" getStats"`, `""WebTransportReceiveStream" site:bugs.webkit.org"`
- **Analysis:** The WebTransportReceiveStream interface formalizes incoming WebTransport streams as a dedicated ReadableStream subclass, replacing generic stream wrappers and introducing per-stream telemetry through getStats(). By exposing bytesReceived alongside bytesRead, it enables real-time web applications to distinguish network arrival from JavaScript consumption and pinpoint backpressure bottlenecks. The feature aligns runtime stream types with the W3C specification across engines, with Chromium currently validating the change behind a developer flag in Chrome 155.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should treat stream.getStats() as a progressive enhancement by feature-detecting the method before querying per-stream counters to monitor queue health. Additionally, audits should ensure existing reader pipelines do not rely on fragile type assumptions that could break when incoming streams transition from base ReadableStream objects to the WebTransportReceiveStream subclass.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2021710: Add WebTransportSendStream/ReceiveStream/SendGroup getStats() support](https://bugzilla.mozilla.org/show_bug.cgi?id=2021710) `[ASSIGNED]`
- **Mozilla (Gecko):** [Bug #2058634: \[wpt-sync\] Sync PR 61577 - Test https://w3c.github.io/webtransport/#webtransportreceivestream-pull-bytes](https://bugzilla.mozilla.org/show_bug.cgi?id=2058634) `[NEW]`
- **Mozilla (Gecko):** [Bug #2078342: A pending read() on a WebTransportReceiveStream rejects with a TypeError instead of a WebTransportError after the peer sends RESET\_STREAM](https://bugzilla.mozilla.org/show_bug.cgi?id=2078342) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img536-dot-cr-status.appspot.com/feature/5109912169480192) *(img536-dot-cr-status.appspot.com)*
  > \*\*\`WebTransportReceiveStream\`\*\* is a standardized subclass of \`ReadableStream\` designed specifically for incoming unidirectional WebTransport streams and the readable side of incoming bidirectional streams Historically i...
- [chromestatus.com](https://chromestatus.com/feature/5109912169480192/activity) *(chromestatus.com)*
  > Exposing \`getStats()\` per stream snapshot provides this telemetry without introducing synchronous overhead
- [How to use WebTransport \| Capabilities \| Chrome for Developers](https://developer.chrome.com/docs/capabilities/web-apis/webtransport) *(developer.chrome.com)*
  > incomingUnidirectionalStreams\`, which yields instances of \`WebTransportReceiveStream\` \* \*\*Streaming Mechanics:\*\* Highlights how WebTransport avoids head-of-line blocking across independent streams and relies on the stand...
- [Platform - Web documentation \| Deno Docs](https://docs.deno.com/api/web/platform) *(docs.deno.com)*
  > #getStats(): Promise&lt;WebTransportReceiveStreamStats&gt; MDN Reference · The constructor object for WebTransportReceiveStream. Instances are obtained from a WebTransport session rather than constructed directly. #proto...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com · 2026-10-06T13:24:25)*
  > Adds the standardized ... returns per-stream byte counters: &lt;strong&gt;bytesReceived reports bytes received from the network, while bytesRead reports bytes delivered to the application&lt;/strong&gt;....
- [320390 &ndash; Implement WebTransportReceiveStream pull bytes algorithm](https://bugs.webkit.org/show_bug.cgi?id=320390) *(bugs.webkit.org)*
  > 320390 &ndash; Implement WebTransportReceiveStream pull bytes algorithm WebKit Bugzilla Bug 320390: Implement WebTransportReceiveStream pull bytes algorithm --&gt; New Browse Search+ Log In &times; Sign in with GitHub or Re...

#### 📚 Platform Documentation & References

- [WebTransportReceiveStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream) *(developer.mozilla.org)*
- [w3.org](https://www.w3.org/TR/webtransport) *(w3.org)*
- [mozilla.org](https://developer.mozilla.org/de/docs/Web/API/WebTransportReceiveStream/getStats) *(developer.mozilla.org)*
- [WebTransportReceiveStream: getStats() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream/getStats) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/2023/WD-webtransport-20230405) *(w3.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 48.6% · Edge 48.6% · Firefox 67.6% · Safari 44.8%; experimental: Chrome 92.4% · Edge 87.6% · Firefox 63.8% · Safari 80%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

- **Chrome usage:** 0.000088% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 13 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 6 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (7 found, 3 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 16 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 48.6% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 0

---

<a id="5114591051907072-expose-cssstylevalue-hierarchy-to-worker-contexts"></a>
### [Expose CSSStyleValue hierarchy to Worker contexts](https://chromestatus.com/feature/5114591051907072)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5114591051907072](https://chromestatus.com/feature/5114591051907072) · [chromestatuslite.com/feature/5114591051907072](https://chromestatuslite.com/feature/5114591051907072)
- **Specification:** [https://www.w3.org/TR/css-typed-om-1/#stylevalue-subclasses](https://www.w3.org/TR/css-typed-om-1/#stylevalue-subclasses)
- **Chromium Bug:** [https://issues.chromium.org/issues/534781956](https://issues.chromium.org/issues/534781956)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/css-typed-om) (Chrome: `66`, Firefox: `—`, Safari: `16.4`) · *group-level data: web-features [`css-typed-om`](https://webstatus.dev/features/css-typed-om), shared with 1 other ChromeStatus feature*

#### 📝 Overview

The CSS Typed OM spec exposes the CSSStyleValue hierarchy to worker global scopes (\[Exposed=(Window, Worker, PaintWorklet, LayoutWorklet)\]), but Blink only exposed CSSStyleValue, CSSKeywordValue, CSSNumericValue, CSSUnitValue and CSSUnparsedValue to Window and the worklets. As a result these constructors were undefined in Workers, unlike in Firefox and Safari.

> **Motivation:** Aligns Chrome with the spec's \[Exposed\] set and removes a cross‑thread inconsistency (these constructors are currently undefined in workers); enables off‑main‑thread CSS value manipulation

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 110 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"Expose CSSStyleValue hierarchy to Worker contexts"`
- **Analysis:** With Chrome 154, Blink aligns with the CSS Typed OM Level 1 specification by exposing the core CSSStyleValue class hierarchy to dedicated Worker global scopes. This eliminates a longstanding cross-engine gap where Firefox and Safari already exposed these constructors off-main-thread while Chromium restricted them to Window and Worklets. The change establishes cross-browser parity for off-main-thread CSS value construction and mathematical operations without requiring string concatenation.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams performing heavy layout computations or animations in web workers can now safely construct and pass typed CSS values across all major modern engines without thread-specific fallbacks. However, developers should feature-detect constructor availability via typeof CSSNumericValue !== 'undefined' if supporting legacy browser versions, and remember to perform raw CSS string parsing on the main thread rather than off-thread.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Chrome for Developers & Release Notes \* \*\*Chrome 154 Beta & Stable Release Notes\*\* (\*developer.chrome.com\*): \* Google highlighted this feature in both the Chrome 154 Beta announcement and the stable release notes
- [gigazine.net](https://gigazine.net/gsc_news/en/20260925-google-chrome-154) *(gigazine.net)*
  > Developer Blogs & Ecosystem Coverage \* \*\*Ecosystem Digests & International Tech Portals\*\*: \* Tech blogs and developer news aggregators (such as \*GIGAZINE\* and platform release roundups) reported on this as part of the Ch...
- [\[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17113.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker context...
- [Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17119.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker...
- [CSS Typed OM Level 1（日本語訳）](https://triple-underscore.github.io/css-typed-om-ja.html) *(triple-underscore.github.io · 2025-08-15T00:00:00)*
  > enum \`CSSNumericBaseType@I { &quot;\`length@m&quot;, &quot;\`angle@m&quot;, &quot;\`time@m&quot;, &quot;\`frequency@m&quot;, &quot;\`resolution@m&quot;, &quot;\`flex@m&quot;, &quot;\`percent@m&quot;, }; dictionary \`CSSNumericTy...
- [CSSNumericValue interface - WebIDLpedia](https://dontcallmedom.github.io/webidlpedia/names/CSSNumericValue.html) *(dontcallmedom.github.io)*
  > CSS Typed OM Level 1 defines CSSNumericValue · \[Exposed=(Window, Worker, PaintWorklet, LayoutWorklet)\] interface CSSNumericValue : CSSStyleValue { CSSNumericValue add(CSSNumberish... values); CSSNumericValue sub(CSSNumbe...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parse_static) *(developer.mozilla.org)*
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410) *(w3.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `css-typed-om` on [wpt.fyi](https://wpt.fyi/results?q=feature:css-typed-om) (via webstatus.dev) — stable: Chrome 89.5% · Edge 89.5% · Firefox 12.4% · Safari 82.9%; experimental: Chrome 90.5% · Edge 90.5% · Firefox 83.8% · Safari 83.8%

#### 🌐 Web-features Group Context

*group-level data: web-features [`css-typed-om`](https://webstatus.dev/features/css-typed-om), shared with 1 other ChromeStatus feature*

- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/1091))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (49 found across 10 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 4 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "css-typed-om", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "css-typed-om": Chrome 89.5% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 0 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5126146013396992-secure-payment-confirmation-locale-validation"></a>
### [Secure Payment Confirmation: Locale Validation](https://chromestatus.com/feature/5126146013396992)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5126146013396992](https://chromestatus.com/feature/5126146013396992) · [chromestatuslite.com/feature/5126146013396992](https://chromestatuslite.com/feature/5126146013396992)
- **Specification:** [https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale](https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale)
- **Chromium Bug:** [https://crbug.com/535278878](https://crbug.com/535278878)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/secure-payment-confirmation) (Chrome: `139`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`secure-payment-confirmation`](https://webstatus.dev/features/secure-payment-confirmation), shared with 1 other ChromeStatus feature*

#### 📝 Overview

Updates Secure Payment Confirmation's \`locale\` data field to return a Not Supported DOMException if none of the language tags provided in the field match the language used by the Secure Payment Confirmation's dialog. If the field is not set or empty, this validation is skipped.  This helps web developers with matching the language of the data that they are supplying to Secure Payment Confirmation with the dialog.

> **Motivation:** This feature amends Secure Payment Confirmation so that web developers can align the language of data elements that they supply to Secure Payment Confirmation with the language used by the Secure Payment Confirmation dialog.  Currently web developers can provide a list of language tags for Secure Payment Confirmation to use in their dialog. But Sec...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 105 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Secure Payment Confirmation's locale validation resolves a key internationalization friction point by throwing a NotSupportedError DOMException when relying-party language tags do not match the browser dialog's UI language, enabling merchants to dynamically align localization strings. However, while shipping in Chromium 154, the broader Secure Payment Confirmation specification remains essentially a single-engine reality with minimal traction in non-Blink browsers. Industry perception welcomes the ergonomic fix for multilingual checkouts, but overall ecosystem consensus remains constrained by lack of cross-vendor adoption.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web payment architects should treat this feature as a progressive enhancement, querying canMakePayment() inside try/catch blocks to negotiate localized strings when supported. Teams must maintain established 3DS and traditional WebAuthn redirect fallbacks for Safari, Firefox, and unmatching locale scenarios.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @gsnedders: "Am I right in understanding that the primary goal here is to replace 3-D Secure with something that's browser mediated?..."
- Standards Activity (Mozilla): Latest discussion from @stephenmcgruer: "Hi folks. I know that Mozilla's position on SPC is outstanding, however we wanted to let you know of a notable additional feature to SPC that we are c..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Secure Payment Confirmation (SPC)](https://github.com/WebKit/standards-positions/issues/30) [open] `topic: payments`, `concerns: integration`, `venue: W3C Web Payments WG`, `from: Google`
  > *Latest discussion from @gsnedders: "Am I right in understanding that the primary goal here is to replace 3-D Secure with something that's browser mediated?..."*
- **Mozilla:** [Secure Payment Confirmation](https://github.com/mozilla/standards-positions/issues/570) [open] 
  > *Latest discussion from @stephenmcgruer: "Hi folks. I know that Mozilla's position on SPC is outstanding, however we wanted to let you know of a notable additional feature to SPC that we are c..."*

#### 📰 Ecosystem Blogs & Articles

- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > \* \*\*The Solution:\*\* If the developer supplies a list of language tags in the \`locale\` field and \*\*none\*\* of them match the language used by the browser's SPC dialog, the browser throws a \`NotSupportedError\` \`DOMException...
- [googlesource.com](https://chromium.googlesource.com/experimental/chromium/src/+/refs/heads/main/chrome/browser/flag_descriptions.h) *(chromium.googlesource.com)*
  > \* \*\*The Solution:\*\* If the developer supplies a list of language tags in the \`locale\` field and \*\*none\*\* of them match the language used by the browser's SPC dialog, the browser throws a \`NotSupportedError\` \`DOMException...
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Official Vendor Announcements (Chrome for Developers) \* \*\*Chrome 154 Release Notes & Beta Blog\*\* (\*developer.chrome.com\*): \* Documented as a shipping Web Platform feature in Chrome 154
- [\[blink-dev\] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Secure Payment Confirmation: Locale Validation Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Secure Payment Confirmation: Locale Validation Chromestatus Wed, 12 A...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > &lt;strong&gt;Updates Secure Payment Confirmation&#x27;s locale data field to return a Not Supported DOMException if none of the language tags provided in the field match the language used by the Secure Payment Confirmation&#x...

#### 📚 Platform Documentation & References

- [w3.org](https://www.w3.org/TR/2023/CRD-secure-payment-confirmation-20231018) *(w3.org)*

#### 🧪 Interactive Demos & Samples

- [Secure Payment Confirmation: Locale Validation Demo](https://rsolomakhin.github.io/pr/spc-locales)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `secure-payment-confirmation` on [wpt.fyi](https://wpt.fyi/results?q=feature:secure-payment-confirmation) (via webstatus.dev) — stable: Chrome 80% · Edge 10% · Firefox 0% · Safari 0%; experimental: Chrome 80% · Edge 10% · Firefox 0% · Safari 0%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (40 found across 11 planned queries, 4 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 4 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "secure-payment-confirmation", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "secure-payment-confirmation": Chrome 80% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 9

---

<a id="5075144470036480-window-shape-api"></a>
### [Window Shape API](https://chromestatus.com/feature/5075144470036480)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5075144470036480](https://chromestatus.com/feature/5075144470036480) · [chromestatuslite.com/feature/5075144470036480](https://chromestatuslite.com/feature/5075144470036480)
- **Specification:** [https://explainers-by-googlers.github.io/chromeos-iwa-apis](https://explainers-by-googlers.github.io/chromeos-iwa-apis)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Window Shape API enables allowlisted \[Isolated Web Apps\](https://chromeos.dev/en/web/isolated-web-apps) on ChromeOS to have a customized window shape. By enabling non-rectangular and non-contiguous window layouts, developers can implement unique user experiences (such as widgets, floating panels, and overlays) that match the look-and-feel of native applications. The \`window.setShape\` API requires the window to be in \_unframed\_ display mode and requires the window-management permission to be granted.  Administrators can manage this feature with existing policies for window management:   - \[DefaultWindowManagementSetting\](https://chromeenterprise.google/policies/#DefaultWindowManagementSetting) configures the default state for the window management for all apps. The policies below can override this default.   - \[WindowManagementAllowedForUrls\](https://chromeenterprise.google/policies/#WindowManagementAllowedForUrls) allows IWAs with specified origins to enter unframed mode and set custom window shapes without any user interaction.   - \[WindowManagementBlockedForUrls\](https://chromeenterprise.google/policies/#WindowManagementBlockedForUrls) blocks the permission for specified origins, forcing Chrome to remove any custom window shapes and fallback to other available display modes.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 105 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Window Shape API" blink-dev"`, `""Window Shape API" chromeos "window.setShape""`
- **Analysis:** The Window Shape API (window.setShape) shipped in Chrome 154 as an operating-system-specific extension designed strictly for allowlisted Isolated Web Apps (IWAs) on ChromeOS. Developed primarily to restore capabilities lost with the deprecation of Chrome Apps—especially for enterprise Virtual Desktop Infrastructure (VDI) vendors—it allows unframed windows to adopt non-rectangular or disjointed window geometries. Because the capability explicitly targets ChromeOS platform integration rather than the open web, it operates entirely outside cross-browser standards tracks.

**Key Recommendations & Takeaways:**
- Actionable Advice: General web developers should ignore this API, as it will not be brought to standard web pages or non-ChromeOS environments. Teams targeting enterprise-managed ChromeOS IWAs should verify the window-management permission and test fallback rectangular framing before invoking window.setShape().
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16945.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Window shape API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Window shape API Chromestatus Wed, 08 Jul 2026 09:58:24 -0700 Contact emails \[email&#160;protected\] , \[email&...
- [Re: \[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16974.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Window shape API Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Window shape API Chris Harrelson Wed, 15 Jul 2026 09:17:30 -0700 LGTM1 This is a very specifi...
- [\[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16965.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Window shape API Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Window shape API 'Edman Anjos' via blink-dev Mon, 13 Jul 2026 13:05:11 -0700 Hi Alex, thanks a lot fo...
- [Re: \[blink-dev\] Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg17100.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Window shape API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Window shape API Chris Harrelson Thu, 30 Jul 2026 16:51:20 -0700 LGTM3 On Thu, Jul 30, 2026, 11:31 AM...
- [Re: \[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16994.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Window shape API Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Window shape API Mike Taylor Thu, 16 Jul 2026 12:46:11 -0700 LGTM2 - we already discussed the...
- [\[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16964.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Window shape API Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Window shape API Alex Russell Mon, 13 Jul 2026 11:44:47 -0700 Hey folks, I'm \*very\* excited to see th...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16945.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > \[blink-dev\] Intent to Ship: Window shape API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Window shape API Chromestatus Wed, 08 Jul 2026 09:58:24 -0700 Contact emails \[email&#160;protected\] , \[email&...
- [Re: \[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16974.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Window shape API Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Window shape API Chris Harrelson Wed, 15 Jul 2026 09:17:30 -0700 LGTM1 This is a very specifi...
- [\[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16965.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > \[blink-dev\] Re: Intent to Ship: Window shape API Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Window shape API 'Edman Anjos' via blink-dev Mon, 13 Jul 2026 13:05:11 -0700 Hi Alex, thanks a lot fo...
- [Re: \[blink-dev\] Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg17100.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > Re: \[blink-dev\] Intent to Ship: Window shape API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Window shape API Chris Harrelson Thu, 30 Jul 2026 16:51:20 -0700 LGTM3 On Thu, Jul 30, 2026, 11:31 AM...
- [Re: \[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16994.html) *(mail-archive.com)* *(Cites: `https://explainers-by-googlers.github.io/chromeos-iwa-apis`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Window shape API Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Window shape API Mike Taylor Thu, 16 Jul 2026 12:46:11 -0700 LGTM2 - we already discussed the...

#### 🧪 Interactive Demos & Samples

- [Window Shape API Demo](https://github.com/paulinagacek/Set-Shape-demo)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 12 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 0 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (1 found, 0 verified) · `Engine Bug Trackers` (5 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (1 found, 0 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 100 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""browser.debugger" firefox MDN"`, `"chrome debugger Host access is restricted by policy Screenshot capture is restricted by policy"`, `"Stricter enterprise policy enforcement for chrome debugger Chrome 155"`, `""chrome.debugger" safari web extensions"`
- **Analysis:** Introduced in Chrome 155, this security hardening enforces enterprise policy checks upfront during chrome.debugger.attach() rather than letting individual Chrome DevTools Protocol commands fail unpredictably at runtime. It adopts an all-or-nothing model where managed devices with blocked host lists or screenshot/Data Loss Prevention restrictions immediately reject debugger attachment with clear policy errors. Because this mechanism targets proprietary Chromium enterprise management policies and the Chrome DevTools Protocol, it does not involve cross-browser standards tracks.

**Key Recommendations & Takeaways:**
- Actionable Advice: Extension developers must add robust error handling around chrome.debugger.attach() to intercept policy-specific rejection strings gracefully. Where deep DevTools Protocol access is not strictly required, teams should migrate to standard APIs like chrome.scripting and chrome.declarativeNetRequest, which operate within standard web origin security boundaries.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Stricter enterprise policy enforcement for chrome.debugger in Chrome 155 \| Chrome for Developers](https://developer.chrome.com/blog/debugger-enterprise-policy-restrictions) *(developer.chrome.com)*
  > Stricter enterprise policy enforcement for chrome.debugger in Chrome 155 \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – B...
- [extensionlaunch.com](https://extensionlaunch.com/blog/chrome-155-extension-developers) *(extensionlaunch.com)*
  > debugger\` API\*\* \* \*\*ExtensionLaunch:\*\* \*"Chrome 155 for Extension Developers: Debugger Policy Errors, 'Rate it' Prompts and What to Test"\*
- [Chrome 155 で chrome.debugger のエンタープライズ ポリシーの適用を強化 \| Chrome for Developers](https://developer.chrome.com/blog/debugger-enterprise-policy-restrictions?hl=ja) *(developer.chrome.com)*
  > Chrome 155 で chrome.debugger のエンタープライズ ポリシーの適用を強化 \| Chrome for Developers メイン コンテンツにスキップ / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Рус...
- [Chrome Extension Development Company \| EXTPOWER](https://extpower.dev/blog/chrome-155-debugger-enterprise-extension-policy) *(extpower.dev)*
  > Chrome Extension Development Company \| EXTPOWER
- [Chrome 155 的 chrome.debugger 被政策擋住？先查兩種錯誤 - ZeroOne](https://laplusda.com/posts/chrome-155-debugger-enterprise-policy) *(laplusda.com)*
  > Chrome 155 的 chrome.debugger 被政策擋住？先查兩種錯誤 - ZeroOne and some other elements idk why --&gt; ZeroOne 首頁 主題指南 彙整 關於 GitHub --&gt; 首頁 主題指南 彙整 關於 GitHub Zero 🍪 要來片餅乾嗎 🍪 分類 AI 151 DevOps 33 伺服器 80 前端 95 工具推薦 23 後端 15 心得分享 1 網站追蹤 3...
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/en_IN/resources/release-notes) *(chromeenterprise.google)*
  > For screenshots, &lt;strong&gt;the enterprise policy DisableScreenshots enterprise policy disables screenshot capture or Data Loss Prevention (DLP) rules apply, returning the error Screenshot capture is restricted by policy&lt;/s...

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 10 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 5 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (4 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (4 found, 2 verified)
- **Content Inspected:** Spec: ○ · Explainers: 0 · Standards Comments Read: 0

---

<a id="6312504658624512-interoperable-dispatch-timing-for-transitionrun-and-media-query-events"></a>
### [Interoperable dispatch timing for transitionrun and media query events](https://chromestatus.com/feature/6312504658624512)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6312504658624512](https://chromestatus.com/feature/6312504658624512) · [chromestatuslite.com/feature/6312504658624512](https://chromestatuslite.com/feature/6312504658624512)
- **Specification:** [https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model)
- **Chromium Bug:** [https://crbug.com/397737222](https://crbug.com/397737222)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Aligns Blink's dispatch timing for animation "transitionrun" event and media query "change" event with the spec, making the timing interoperable with Gecko and WebKit. More precisely, as per HTML window event loop specification, "transitionrun" events will be fired at Step 3.11 even for animations created earlier in the same iteration (instead of delaying them for a later iteration), and the media query "change" event will be fired at Step 3.10 before firing any pending animation events (instead of intermixing them with animation events at Step 3.11).

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 100 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""397737222" chromium"`, `""EventTimingMatchingHTML" chrome"`, `""transitionrun" "media query" event timing chrome 153"`
- **Analysis:** Shipped by default in Chrome 153 and Microsoft Edge 153 via the \`EventTimingMatchingHTML\` implementation, this update aligns Chromium with the WHATWG HTML window event loop specification. By firing media query change events at Step 3.10 before animation events, and firing CSS \`transitionrun\` events at Step 3.11 within the same iteration, Chromium resolves a longstanding divergence from other engines. This change brings full three-engine interoperability alongside Gecko and WebKit, establishing unified event dispatch sequencing across the modern web platform.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can rely on consistent media query and transition event sequencing across all current browsers without needing polyfills or browser-sniffing branches. Developers managing complex animation state machines should audit and clean up legacy defensive workarounds, such as artificial \`setTimeout\` or chained \`requestAnimationFrame\` delays previously required to synchronize responsive style updates in Blink.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X](https://x.com/ChromiumDev/status/2093424350036660456) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [Chrome 153 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/153) *(developer.chrome.com)*
  > \*\*"Interoperable dispatch timing for transitionrun and media query events"\*\* is a web platform conformance update shipped in Chromium/Blink (introduced in \*\*Chrome 153\*\* and \*\*Microsoft Edge 153\*\*) The change aligns Chro...
- [Microsoft Edge 153 web platform release notes (Sep. 10, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/153) *(learn.microsoft.com)*
  > \*\*"Interoperable dispatch timing for transitionrun and media query events"\*\* is a web platform conformance update shipped in Chromium/Blink (introduced in \*\*Chrome 153\*\* and \*\*Microsoft Edge 153\*\*) With this update, all ...
- [github.io](https://niek.github.io/chrome-features) *(niek.github.io)*
  > \* It directly tracks via Chromium Bug \*\*#397737222\*\* and runtime feature flag \*\*\`EventTimingMatchingHTML\`\*\* Platform Status & Tooling Coverage \* \*\*Chrome Platform Status (\*chromestatus.com\*)\*\*: \* Cataloged under entry \`6...
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > \* It directly tracks via Chromium Bug \*\*#397737222\*\* and runtime feature flag \*\*\`EventTimingMatchingHTML\`\*\*
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > app\*) — \*Experimental Chromium Web Platform Features\*\*\* app\*) — \*Experimental Chromium Web Platform Features\*\*\*: \* Included in Polypane’s tracking of rendering engine changes, noting the cleanup in event loop sequencing ...
- [scroll events (and some other events) get fired along with animation related events \[397737222\] - Chromium](https://issues.chromium.org/issues/397737222) *(issues.chromium.org)*
  > Chromium Sign in

#### 🔗 Inbound Citations & Reverse Links

- [scroll events (and some other events) get fired along with animation related events \[397737222\] - Chromium](https://issues.chromium.org/issues/397737222) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/6312504658624512`)*
  > Chromium Sign in

#### 📚 Platform Documentation & References

- [\[css-transitions-1\] Clarify timing of transitionrun and transitionstart · Issue #11665 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11665) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 11 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 5 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (1 found, 1 verified) · `Dev.to Community Blogs` (3 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (0 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (6 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="4886345347629056-object-fit-and-object-position-apply-to-svg-documents-in-object-and-embed"></a>
### [object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](https://chromestatus.com/feature/4886345347629056)

- **Milestone:** Chrome 157 (Enabled by default)
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
- **Analysis:** Chrome 157 enables support by default for CSS \`object-fit\` and \`object-position\` on SVG documents embedded within \`&lt;object&gt;\` and \`&lt;embed&gt;\` elements, treating them as standard replaced elements. This Chromium catch-up effort, driven by Igalia engineers under the \`SVGEmbeddedAsReplacedElement\` flag, resolves a longstanding browser engine bug dating back to 2017. The update aligns Chromium with the WHATWG embedded content rendering specification and brings it into parity with Firefox, while Safari remains the notable outlier.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can take advantage of these sizing properties in Chromium and Gecko environments, but should not rely on them as an unassisted cross-browser layout mechanism while WebKit remains unsupported. For robust cross-browser sizing today, continue using \`&lt;img&gt;\` for purely decorative SVGs, or manage aspect ratio and viewBox preservation directly inside the SVG markup when interactive \`&lt;object&gt;\` embeds are necessary.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **10 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [google.com](https://issuetracker.google.com/issues/564190097) *(issuetracker.google.com)*
  > \* \*\*Current status:\*\* Updates have been initiated across MDN documentation trackers to clarify that \`&lt;embed&gt;\` and \`&lt;object&gt;\` \*do\* honor \`object-fit\` and \`object-position\` when rendering SVG documents starting in Chrome 1...
- [object-fit and object-position do not apply to svg in object tag \[41302806\] - Chromium](https://issues.chromium.org/issues/41302806) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17499.html) *(mail-archive.com)*
  > Previously Chrome ignored both ... Web Feature ID object-fit Motivation Authors use object-fit and object-position &lt;strong&gt;to control how replaced content is scaled and placed inside its box&lt;/strong&gt;....
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17601.html) *(mail-archive.com)*
  > &gt;&gt;&gt; https://drafts.csswg.org/css-images-3/#the-object-fit &gt;&gt;&gt; https://drafts.csswg.org/css-images-3/#the-object-position Currently, &gt;&gt;&gt; Chrome applies them to images and videos but ignores them...
- [\[blink-dev\] Re: Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17511.html) *(mail-archive.com)*
  > &gt; https://drafts.csswg.org/css-images-3/#the-object-fit &gt; https://drafts.csswg.org/css-images-3/#the-object-position Currently, &gt; &lt;strong&gt;Chrome applies them to images and videos but ignores them for SVG documen...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17646.html) *(mail-archive.com)*
  > On Fri, Oct 2, 2026 at 9:34 AM ... out-of-process frames. I am implementing the fix and &gt; will upload the CLs shortly. &gt; &gt; &lt;strong&gt;This feature only covers SVG documents in &lt;object&gt; and &lt;embed&gt;&lt;/stro...

#### 🔗 Inbound Citations & Reverse Links

- [object-fit and object-position do not apply to svg in object tag \[41302806\] - Chromium](https://issues.chromium.org/issues/41302806) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/4886345347629056`)*
  > Chromium Sign in

#### 📚 Platform Documentation & References

- [object-fit CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/object-fit) *(developer.mozilla.org)*
- [Apply object-fit and object-position to SVG in object/embed tags · Issue #726 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/726) *(github.com)*
- [object-fit and object-position are ignored for SVG embedded via &lt;object&gt; and &lt;embed&gt; by Ahmad-S792 · Pull Request #75745 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/75745) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `object-fit` on [wpt.fyi](https://wpt.fyi/results?q=feature:object-fit) (via webstatus.dev) — stable: Chrome 49.2% · Edge 49.2% · Firefox 97.6% · Safari 45.2%; experimental: Chrome 98.4% · Edge 96.8% · Firefox 97.6% · Safari 46%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 11 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (5 found, 2 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (0 found, 0 verified) · `web-features mapping` *(group "object-fit", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "object-fit": Chrome 49.2% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 100 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** Chromium's update to make BluetoothRemoteGATTServer inherit from EventTarget equips GATT connection instances with standard event listener capabilities, establishing the foundation for connection-level events such as dynamic ATT MTU notifications. While this change cleanly addresses architectural and throughput bottlenecks in hardware-oriented web applications, the underlying Web Bluetooth platform remains strictly confined to Chromium-based browsers. Major competing browser engines remain firmly opposed to Web Bluetooth, keeping the feature entirely outside cross-browser interoperability baselines.

**Key Recommendations & Takeaways:**
- Actionable Advice: Deploy this feature strictly within controlled, Chromium-first environments such as enterprise dashboards, kiosk applications, and desktop PWAs, ensuring that all connection-level event listeners are guarded by feature detection on the BluetoothRemoteGATTServer prototype.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "It is there now. The JSON is updated every 48 hours. You can tell from the commit log on this repository...."
- Standards Activity (Mozilla): Latest discussion from @qdot: "I do not believe those that would be responsible for management and implementation of WebBluetooth are ready to discuss the viability and company posi..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Web Bluetooth](https://github.com/WebKit/standards-positions/issues/570) [closed] `position: oppose`, `concerns: privacy`, `concerns: security`, `topic: device apis`, `topic: app-like capabilities`, `from: Google`, `concerns: device independence`
  > *Latest discussion from @annevk: "It is there now. The JSON is updated every 48 hours. You can tell from the commit log on this repository...."*
- **Mozilla:** [Web Bluetooth](https://github.com/mozilla/standards-positions/issues/95) [closed] `venue: W3C CG`, `position: negative`
  > *Latest discussion from @qdot: "I do not believe those that would be responsible for management and implementation of WebBluetooth are ready to discuss the viability and company posi..."*

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5138797158334464?gate=6155787868176384) *(chromestatus.com)*
  > In the Web Bluetooth API, the \`BluetoothRemoteGATTServer\` interface represents the active GATT connection to a remote peripheral Making \*\*\`BluetoothRemoteGATTServer\` an \`EventTarget\`\*\* equips it with \`addEventListener()\`...
- [github.io](https://webbluetoothcg.github.io/web-bluetooth) *(webbluetoothcg.github.io)*
  > \* \*\*IDL Change:\*\* Updates the IDL definition from \`interface BluetoothRemoteGATTServer\` to \`interface BluetoothRemoteGATTServer : EventTarget\`
- [\[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17579.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helm...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17633.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTar...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17603.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTar...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > &lt;strong&gt;BluetoothRemoteGATTServer inherits from EventTarget, exposing the standard addEventListener(), removeEventListener(), and dispatchEvent() methods&lt;/strong&gt;.

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17579.html) *(mail-archive.com)* *(Cites: `https://github.com/WebBluetoothCG/web-bluetooth/pull/672`)*
  > \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helm...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17633.html) *(mail-archive.com)* *(Cites: `https://pr-preview.s3.amazonaws.com/hjanuschka/web-bluetooth/pull/672.html#bluetoothremotegattserver`)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTar...

#### 📚 Platform Documentation & References

- [Add BluetoothRemoteGATTServer.maxWriteWithoutResponseSize by hjanuschka · Pull Request #672 · whatwg/bluetooth](https://github.com/whatwg/bluetooth/pull/672) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `web-bluetooth` on [wpt.fyi](https://wpt.fyi/results?q=feature:web-bluetooth) (via webstatus.dev) — stable: Chrome 0.6% · Edge 3.2% · Firefox 0.6% · Safari 0.6%; experimental: Chrome 92.9% · Edge 4.5% · Firefox 0.6% · Safari 0.6%

#### 🌐 Web-features Group Context

*group-level data: web-features [`web-bluetooth`](https://webstatus.dev/features/web-bluetooth), shared with 12 other ChromeStatus features*

- **Chrome usage:** 0.000003% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/105))
- **Mozilla:** negative ([standards position](https://github.com/mozilla/standards-positions/issues/95))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (52 found across 12 planned queries, 5 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 2 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "web-bluetooth", shared with 12 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "web-bluetooth": Chrome 0.6% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 8

---

<a id="6225598451154944-local-network-access-restrictions-for-background-fetch"></a>
### [Local Network Access restrictions for Background Fetch](https://chromestatus.com/feature/6225598451154944)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6225598451154944](https://chromestatus.com/feature/6225598451154944) · [chromestatuslite.com/feature/6225598451154944](https://chromestatuslite.com/feature/6225598451154944)
- **Specification:** [https://wicg.github.io/background-fetch](https://wicg.github.io/background-fetch)
- **Chromium Bug:** [https://crbug.com/455486148](https://crbug.com/455486148)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/local-network-access) (Chrome: `142`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`local-network-access`](https://webstatus.dev/features/local-network-access), shared with 7 other ChromeStatus features*

#### 📝 Overview

Background Fetch requests now require that the service worker's origin has the necessary Local Network Access (LNA) permission to send requests to local or loopback servers.  This aligns Chromium's implementation with the intent of the Background Fetch spec, which states that such requests go through the Fetch spec and have the same security policies applied to them including, in this case, LNA checks. This prevents sites from bypassing LNA checks by using \[Background Fetch spec\](https://wicg.github.io/background-fetch/) instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).  For enterprises, you can use existing LNA enterprise policies in the same way you previously would have for regular Fetch API requests from service workers: - \[LocalNetworkAccessRestrictionsTemporaryOptOut\](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut) - \[LocalNetworkAccessAllowedForUrls\](https://chromeenterprise.google/policies/#LocalNetworkAccessAllowedForUrls) - \[LoopbackNetworkAllowedForUrls\](https://chromeenterprise.google/policies/#LoopbackNetworkAllowedForUrls) - \[LocalNetworkAccessPermissionsPolicyDefaultEnabled\](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled) - \[LocalNetworkAccessIpAddressSpaceOverrides\](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides)).

> **Motivation:** This fixes a security issue where Background Fetch unintentionally bypasses security policies such as Local Network Access checks.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 90 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Neutral**
- **Analysis:** Shipping in Chrome 154, this update closes a security loophole by subjecting Background Fetch requests to standard Local Network Access (LNA) permissions and CORS checks. Background Fetch itself remains primarily a Chromium feature after earlier Blink deprecation proposals were dropped in favor of tightening its security pipeline to match regular Fetch semantics. Cross-engine availability remains limited, meaning the operational impact is focused largely on enterprise web applications and local network tools running in Chromium-based browsers.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit existing service workers to confirm that any Background Fetch tasks targeting local or loopback IPs hold explicit local network permissions or configure corresponding enterprise policy overrides. Maintain standard Fetch fallbacks wrapped in feature detection, as Background Fetch is not universally supported across major browser engines.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @christhompson: "We aren't sure about venue yet but it has been on my mind some. Some parts will just be merged into the various relevant specifications, but there def..."
- Standards Activity (Mozilla): Latest discussion from @dveditz: "We're presumably "positive" on this since we've implemented most of it and enabled it on Nightly. What are the formal steps needed at this point?..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Request for Position: Local Network Access](https://github.com/WebKit/standards-positions/issues/520) [open] `topic: networking`, `venue: WICG`, `topic: meaningful user consent`, `concerns: venue`, `from: Google`
  > *Latest discussion from @christhompson: "We aren't sure about venue yet but it has been on my mind some. Some parts will just be merged into the various relevant specifications, but there def..."*
- **Mozilla:** [Local Network Access](https://github.com/mozilla/standards-positions/issues/1260) [open] `venue: W3C CG`, `team: Networking`
  > *Latest discussion from @dveditz: "We're presumably "positive" on this since we've implemented most of it and enabled it on Nightly. What are the formal steps needed at this point?..."*

#### 📰 Ecosystem Blogs & Articles

- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > x.x\`) without user consent or proper permissions Chrome and Chromium-based browsers now require the service worker’s origin to hold explicit Local Network Access permissions before it can trigger Background Fetch operati...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com)*
  > Cross-Browser & Standards Tracking \* \*\*Microsoft Edge Developer Documentation:\*\* \* \*\*Entry:\*\* \*Microsoft Edge Web Platform Release Notes\* \* \*\*Highlights:\*\* Synchronized with the Chromium engine rollout, Edge lists the LN...
- [\[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html) *(mail-archive.com)*
  > &lt;strong&gt;We considered completely removing the ability for Background Fetch to make local network requests&lt;/strong&gt;, which would be more disruptive. Treating Background Fetch requests the same as fetch() calls from a serv...
- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17209.html) *(mail-archive.com)*
  > &lt;strong&gt;We considered completely removing the ability for Background Fetch to make local network requests&lt;/strong&gt;, which would be more disruptive. Treating Background Fetch requests the same as fetch() calls from a serv...
- [\[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)*
  > We considered &gt; &lt;strong&gt;completely removing the ability for Background Fetch to make local network &gt; requests&lt;/strong&gt;, which would be more disruptive. Treating Background Fetch &gt; requests the same as fetch() ca...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > This &lt;strong&gt;prevents sites from bypassing LNA checks by using Background Fetch spec instead of regular Fetch&lt;/strong&gt;. For enterprises, you can use existing LNA enterprise policies in the same way you previously would h...

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 11 planned queries, 5 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 2 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (1 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "local-network-access", shared with 7 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "local-network-access": no stable pass rate for Chrome yet)*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 8

---

<a id="5148774971342848-webtransport-datagram-readable-stream-type"></a>
### [WebTransport Datagram readable stream type](https://chromestatus.com/feature/5148774971342848)

- **Milestone:** Chrome 155 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5148774971342848](https://chromestatus.com/feature/5148774971342848) · [chromestatuslite.com/feature/5148774971342848](https://chromestatuslite.com/feature/5148774971342848)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransportoptions-datagramsreadabletype](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-datagramsreadabletype)
- **Chromium Bug:** [https://issues.chromium.org/issues/547572475](https://issues.chromium.org/issues/547572475)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `No signal` · Safari: `In development`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

#### 📝 Overview

Adds the  WebTransportOptions.datagramsReadableType  constructor option. By default, incoming WebTransport Datagrams are exposed through a default  ReadableStream . Applications that require BYOB reading can request a readable byte stream by setting  datagramsReadableType: "bytes" .

> **Motivation:** WebTransport Datagrams are discrete messages rather than an undifferentiated byte sequence. A readable byte stream can lose empty Datagrams and can lose message boundaries when BYOB reads use a minimum byte count spanning multiple Datagrams.  Making a default  ReadableStream  the default preserves Datagram boundaries and empty Datagrams. Applicatio...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 90 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The WebTransport Datagram readable stream type configuration addresses an edge-case architectural flaw by setting a default chunk-based ReadableStream to preserve discrete datagram boundaries and zero-length payloads, while allowing high-throughput applications to opt into byte-stream BYOB reading via datagramsReadableType: 'bytes'. Standardized within the W3C WebTransport specification, the feature is currently in developer trials behind flags in Chromium as it catches up to the refined specification. Cross-engine alignment is strong in principle as part of the broader WebTransport standard, with WebKit tracking implementation and Mozilla maintaining positive standards alignment.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams operating real-time UDP-style communication should test datagramsReadableType in Chromium canary builds behind experimental flags if zero-copy BYOB readers are critical for memory optimization. For production deployments today, continue using standard datagram reading patterns without assuming BYOB stream support until the option reaches cross-browser stable baselines.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com)*
  > \* \*\*Status:\*\* Integrated into Chromium (appearing across Chrome 155 release notes and experimental tracking dashboards like Polypane)
- [googleusercontent.com](https://doc-1qa0-4ra0-issuetracker.googleusercontent.com/issues/546106919/resources) *(doc-1qa0-4ra0-issuetracker.googleusercontent.com)*
  > Web Platform Tests & Runtime Implementations \* \*\*Web Platform Tests (WPT):\*\* Test suites (e.g., commit \`wpt/#61428\`) were updated to validate browser compliance when passing \`datagramsReadableType\` through the \`WebTransp...
- [googleusercontent.com](https://doc-2gh0-0gig-issuetracker.googleusercontent.com/issues/546237332) *(doc-2gh0-0gig-issuetracker.googleusercontent.com)*
  > Web Platform Tests & Runtime Implementations \* \*\*Web Platform Tests (WPT):\*\* Test suites (e.g., commit \`wpt/#61428\`) were updated to validate browser compliance when passing \`datagramsReadableType\` through the \`WebTransp...
- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)*
  > Explainer https://github.com/w... ReadableStream . Applications that require BYOB reading can request a readable byte stream by setting &lt;strong&gt;datagramsReadableType: &quot;bytes&quot;&lt;/strong&gt; ....
- [webtransport-bun \| Ecosystem Directory \| market.dev](https://explore.market.dev/ecosystems/typescript/projects/webtransport-bun) *(explore.market.dev)*
  > requireUnreliable: accepted; satisfied ... with allowPooling: true. datagramsReadableType: &lt;strong&gt;&quot;bytes&quot; uses ReadableByteStream with BYOB; &quot;default&quot; uses normal ReadableStream&lt;/strong&gt;....
- [WebTransport](https://triple-underscore.github.io/webtransport-ja.html) *(triple-underscore.github.io · 2026-04-01T00:00:00)*
  > ◎ Note: Using 64 kibibytes buffers ... the buffer. ◎ If datagramsReadableType is &quot;bytes&quot;, &lt;strong&gt;set up with byte reading support incomingDatagrams with pullAlgorithm set to pullDatagramsAlgorithm, and highWat...

#### 📚 Platform Documentation & References

- [w3.org](https://www.w3.org/wiki/WebTransport/Meetings2023) *(w3.org)*
- [\`pullDatagrams\` errors \`datagrams.readable\` on a zero-length datagram when \`datagramsReadableType\` is \`"bytes"\` · Issue #795 · w3c/webtransport](https://github.com/w3c/webtransport/issues/795) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 48.6% · Edge 48.6% · Firefox 67.6% · Safari 44.8%; experimental: Chrome 92.4% · Edge 87.6% · Firefox 63.8% · Safari 80%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

- **Chrome usage:** 0.000088% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (44 found across 12 planned queries, 6 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 4 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 16 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 48.6% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5811907077472256-speechrecognitionresult-timestamps-webspeech-api"></a>
### [SpeechRecognitionResult Timestamps (WebSpeech API)](https://chromestatus.com/feature/5811907077472256)

- **Milestone:** Chrome 153 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5811907077472256](https://chromestatus.com/feature/5811907077472256) · [chromestatuslite.com/feature/5811907077472256](https://chromestatuslite.com/feature/5811907077472256)
- **Specification:** [https://github.com/WebAudio/web-speech-api/pull/192](https://github.com/WebAudio/web-speech-api/pull/192)
- **Chromium Bug:** [https://crbug.com/528037568](https://crbug.com/528037568)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/speech-recognition) (Chrome: `139`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`speech-recognition`](https://webstatus.dev/features/speech-recognition), shared with 8 other ChromeStatus features*

#### 📝 Overview

The Web Speech API currently does not expose the acoustic timing bounds of recognized speech segments, making it difficult to associate transcribed text with media timelines or generate synchronized subtitle cues. We propose adding speechStartTime and speechEndTime (double, in seconds relative to stream start) attributes on the SpeechRecognitionResult interface.

> **Motivation:** The Web Speech API currently does not expose the acoustic start and end timestamps of recognized speech utterances on SpeechRecognitionResult. While SpeechRecognitionEvent.timeStamp conveys when the DOM event occurred, it provides no information about the acoustic boundaries or duration of the speech segment within the source audio stream.  Exposin...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 75 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""speechStartTime" "speechEndTime" "Web Speech API""`, `""SpeechRecognitionResult" "speechStartTime""`, `""WebAudio/web-speech-api" "speechStartTime""`, `""SpeechRecognitionResult Timestamps" blink dev"`
- **Analysis:** The SpeechRecognitionResult Timestamps proposal introduces 'speechStartTime' and 'speechEndTime' attributes to the Web Speech API to provide acoustic timing bounds for transcribed speech segments. Currently incubating in Chromium behind the WebSpeechTimestamps runtime flag in Chrome 153 developer trials, the proposal recently matured by transitioning from millisecond DOMHighResTimeStamp values to second-denominated doubles aligning cleanly with HTMLMediaElement and VTTCue timelines. While the feature addresses long-standing limitations for media synchronization, wider browser consensus remains unestablished beyond Chromium's active prototyping.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building captioning or interactive transcript tools should treat these properties as progressive enhancements, testing them via Chromium flags while guarding usages with property checks on SpeechRecognitionResult. Production applications must maintain fallback heuristics—such as using event dispatch timestamps or dedicated third-party transcription services—until cross-engine standardization and implementation solidify.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5811907077472256/activity) *(chromestatus.com)*
  > The \*\*Web Speech API\*\* has historically operated as a "black box" regarding acoustic timing timeStamp\` captures the DOM event dispatch time, it provides no information about the acoustic boundaries of the underlying spee...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Chromestatus W...
- [\[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Reilly...
- [Chromium Dash](https://chromiumdash.appspot.com/commit/922e7056487d58cd75326fb3d4bf44ba65de3dfb) *(chromiumdash.appspot.com)*
  > Chromium Dash

#### 🔗 Inbound Citations & Reverse Links

- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com · 2026-08-22T03:37:06)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You ...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md`)*
  > \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Chromestatus W...
- [\[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md`)*
  > \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Reilly...

#### 📚 Platform Documentation & References

- [Add SpeechRecognitionResult Timestamps · Issue #191 · WebAudio/web-speech-api · GitHub](https://github.com/WebAudio/web-speech-api/issues/191) *(github.com)*
- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [SpeechRecognitionResult Timestamps (WebSpeech API) Demo](https://alan33d.github.io/web-speech-demos/live_meeting_recording_demo.html)
- [SpeechRecognitionResult Timestamps (WebSpeech API) Demo](https://alan33d.github.io/web-speech-demos/webrtc_caption_sync_test.html)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `speech-recognition` on [wpt.fyi](https://wpt.fyi/results?q=feature:speech-recognition) (via webstatus.dev) — stable: Chrome 57.1% · Edge 57.1% · Firefox 0% · Safari 14.3%; experimental: Chrome 57.1% · Edge 57.1% · Firefox 57.1% · Safari 14.3%

#### 🌐 Web-features Group Context

*group-level data: web-features [`speech-recognition`](https://webstatus.dev/features/speech-recognition), shared with 8 other ChromeStatus features*

- **Chrome usage:** 0.00019% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/63))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/170))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (38 found across 12 planned queries, 3 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 2 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "speech-recognition", shared with 8 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "speech-recognition": Chrome 57.1% passing (stable))* · `Sources cited by the AI synthesis` (3 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="6209615938322432-light-dismiss-improvements-for-popovers-and-dialogs"></a>
### [Light dismiss improvements for popovers and dialogs](https://chromestatus.com/feature/6209615938322432)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6209615938322432](https://chromestatus.com/feature/6209615938322432) · [chromestatuslite.com/feature/6209615938322432](https://chromestatuslite.com/feature/6209615938322432)
- **Specification:** [https://github.com/whatwg/html/pull/11536](https://github.com/whatwg/html/pull/11536)
- **Chromium Bug:** [https://issues.chromium.org/issues/408010435](https://issues.chromium.org/issues/408010435)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/popover) (Chrome: `116`, Firefox: `125`, Safari: `17`) · *group-level data: web-features [`popover`](https://webstatus.dev/features/popover), shared with 2 other ChromeStatus features*

#### 📝 Overview

Improves and simplifies the light dismiss behavior for popovers and dialogs to fix a few bugs. "Light dismiss" is the behavior where clicking outside of a popover or dialog closes it. The fixed bugs include making scrolling gestures on touch screens no longer trigger light dismiss and making right clicks no longer trigger light dismiss.  The underlying mechanism of this change is that the browser will use click events to trigger light dismiss instead of a combination of pointerdown and pointerup events.

> **Motivation:** We need to fix these bugs with light dismiss: https://issues.chromium.org/issues/408010435 https://issues.chromium.org/issues/425579196

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 70 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""pointerevents" "light dismiss" 542"`, `""whatwg/html" 11536 "light dismiss""`, `""Light dismiss improvements for popovers and dialogs" blink-dev"`
- **Analysis:** Light dismiss behavior for dialog and popover elements is transitioning from tracking pointer event sequences (pointerdown and pointerup) to evaluating standard click events. Formally shipped enabled by default in Chrome 154 and defined in an active WHATWG HTML pull request, this refactoring eliminates persistent edge cases where touchscreen scrolling gestures and right-clicks unintentionally dismissed open overlays. Cross-engine standardization is progressing through WHATWG and W3C working groups to cement this more predictable behavior across the web platform.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should audit existing popover and dialog interactions to begin removing artificial delays or pointer listeners previously added to prevent accidental dismissal during right-clicks and mobile scrolling. Continue testing touch-scrolling and context menu behaviors across Safari and Firefox until their implementations align with the click-based dismissal specification.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > \*Chrome for Developers\* (\`developer.chrome.com\`) \* \*\*Chrome Release Notes & Beta Post:\*\* The Chrome team formally introduced this under the DOM platform changes \* \*\*Key takeaway:\*\* They highlighted that switching light d...
- [\[blink-dev\] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs](http://www.mail-archive.com/blink-dev@chromium.org/msg17139.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs Joey Arh...
- [Chromium](https://issues.chromium.org/issues/425579196) *(issues.chromium.org)*
  > Chromium Sign in

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[pointerevents\] Add context for popover light dismiss to click event (#542) from Mustaq Ahmed via GitHub on 2025-07-16 (public-pointer-events@w3.org from July to September 2025)](https://lists.w3.org/Archives/Public/public-pointer-events/2025JulSep/0005.html) *(lists.w3.org)* *(Cites: `https://github.com/w3c/pointerevents/issues/542`)*
  > -- GitHub Notification of comment by mustaqahmed Please view or discuss this issue at https://&lt;strong&gt;github.com/w3c/pointerevents/issues/542&lt;/strong&gt;#issuecomment-3078866418 using your GitHub account -- Sent via github-...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-17 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0002.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11536`)*
  > (4 by emilio, josepharhar) ... Expand disabled form control event handling spec text (1 by josepharhar) https://github.com/whatwg/html/pull/12219 \[agenda+\] - #11536 Change light dismiss to use click events (1 by josephar...

#### 📚 Platform Documentation & References

- [Popovers are broken when shown in a \`contextmenu\` event listener · Issue #10905 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/10905) *(github.com)*
- [w3.org](https://lists.w3.org/Archives/Public/public-html/2025Sep/0001.html) *(lists.w3.org)*
- [Re: \[pointerevents\] Add context for popover light dismiss to click event (#542) from Mustaq Ahmed via GitHub on 2025-07-16 (public-pointer-events@w3.org from July to September 2025)](https://lists.w3.org/Archives/Public/public-pointer-events/2025JulSep/0005.html) *(lists.w3.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-17 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0002.html) *(lists.w3.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `popover` on [wpt.fyi](https://wpt.fyi/results?q=feature:popover) (via webstatus.dev) — stable: Chrome 95.5% · Edge 92.7% · Firefox 86.9% · Safari 62.7%; experimental: Chrome 95.5% · Edge 92.7% · Firefox 85.5% · Safari 70.9%

#### 🌐 Web-features Group Context

*group-level data: web-features [`popover`](https://webstatus.dev/features/popover), shared with 2 other ChromeStatus features*

- **Chrome usage:** 0.07% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/374))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/698))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (52 found across 12 planned queries, 3 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 3 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "popover", shared with 2 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "popover": Chrome 95.5% passing (stable))* · `Sources cited by the AI synthesis` (3 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5387465121726464-support-long-animation-frames-api-in-web-workers"></a>
### [Support Long Animation Frames API in Web Workers](https://chromestatus.com/feature/5387465121726464)

- **Milestone:** Chrome 153 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5387465121726464](https://chromestatus.com/feature/5387465121726464) · [chromestatuslite.com/feature/5387465121726464](https://chromestatuslite.com/feature/5387465121726464)
- **Chromium Bug:** [https://issues.chromium.org/issues/534893134](https://issues.chromium.org/issues/534893134)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/long-animation-frames) (Chrome: `123`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`long-animation-frames`](https://webstatus.dev/features/long-animation-frames), shared with 3 other ChromeStatus features*

#### 📝 Overview

This feature extends the existing Long Animation Frames (LoAF) API to Web Workers. Today LoAF reports only on the main thread and is anchored to rendering frames, so it cannot observe work that blocks a worker's event loop. With this change, a long task that blocks a worker's event loop is reported as a long-animation-frame entry that is observable from inside the worker via PerformanceObserver, with the usual per-script attribution.  The prototype starts with dedicated workers, reporting a single long task that blocks the worker's event loop. The broader goal is to surface congested moments, intervals where an event loop remains busy and runnable work is delayed. This includes detecting a flood of many small tasks that keeps the event loop busy and reporting it as a long-animation-frame entry, as well as supporting the main thread. This is planned as follow-up work.

> **Motivation:** Web apps increasingly offload work to Web Workers, but a worker that blocks its own event loop is invisible to today's performance APIs. Workers usually have no rendering lifecycle, so there are no animation frames for LoAF to anchor to, and the main-thread LoAF and Long Tasks APIs cannot observe work running in a worker. As a result, a long task i...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 70 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""mozilla/standards-positions" 929"`, `"Support Long Animation Frames API in Web Workers issue 38"`, `"Support Long Animation Frames API in Web Workers"`, `"blink dev Intent to Prototype Support Long Animation Frames API in Web Workers"`, `""WebKit/standards-positions" 283"`
- **Analysis:** The proposal to support the Long Animation Frames (LoAF) API in Web Workers extends main-thread performance diagnostics into dedicated workers, capturing event loop bottlenecks that delay message processing and OffscreenCanvas rendering. Developed cooperatively by Microsoft and Google within the W3C Web Performance Working Group, the capability is currently in developer trial behind a flag in Chrome 153. While widely praised by performance specialists for addressing worker telemetry blind spots, the extension remains experimental and strictly Chromium-led.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should treat LoAF in Web Workers as strictly experimental and avoid relying on it in production environments today. Instead, monitor upstream W3C specification developments, experiment with dedicated worker diagnostics behind Chromium flags, and always guard performance observer registrations with runtime feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [googleusercontent.com](https://doc-48mg-1o5g-issuetracker.googleusercontent.com/issues/534893134) *(doc-48mg-1o5g-issuetracker.googleusercontent.com)*
  > Chrome Platform Status & Chromium Bug Tracker \* \*\*Sources:\*\* \*Chrome Platform Status (Feature #5387465121726464)\* and \*Chromium Issue #534893134\*
- [\[blink-dev\] Intent to Prototype: Support Long Animation Frames API in Web Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17008.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md Specification No information provided Summary &lt;strong&gt;This feature extends the existing Long Animation Frames (LoAF) ...
- [Web-Perf Wednesday 007 – Chrome Makes Busy Workers Measurable – CSS Wizardry](https://csswizardry.com/2026/09/web-perf-wednesday-007-chrome-makes-busy-workers-measurable) *(csswizardry.com · 2026-09-02T11:00:00)*
  > Among its performance changes, ... Frames (LoAF) currently &lt;strong&gt;helps explain congested moments on the main thread by combining long-running script with the rendering work that follows it&lt;/strong&gt;....
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com · 2026-09-08T00:00:00)*
  > &lt;strong&gt;This feature extends the existing Long Animation Frames (LoAF) API to Web Workers&lt;/strong&gt;. Today LoAF reports only on the main thread and is anchored to rendering frames, so it cannot observe work that blocks a ...
- [Long Animation Frames in Workers: Solving Modern Web Jank \| Alexander Burgos](https://alexanderburgos.netlify.app/blog/long-animation-frames-dedicated-workers) *(alexanderburgos.netlify.app)*
  > Long Animation Frames in Workers: Solving Modern Web Jank \| Alexander Burgos View Skip to content Alexander Aguirre UX Engineer Blog Books Let's Talk Post not found The post you're looking for doesn't exist or has been r...
- [Chrome Platform Status](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5171478175809536) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > Chrome Platform Status

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Support Long Animation Frames API in Web Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17008.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md`)*
  > Explainer https://github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md Specification No information provided Summary &lt;strong&gt;This feature extends the existing Long Animation Frames (LoAF) ...

#### 📚 Platform Documentation & References

- [Support Long Animation Frames API in Web Workers · Issue #38 · w3c/long-animation-frames · GitHub](https://github.com/w3c/long-animation-frames/issues/38) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `long-animation-frames` on [wpt.fyi](https://wpt.fyi/results?q=feature:long-animation-frames) (via webstatus.dev) — stable: Chrome 65.9% · Edge 65.9% · Firefox 0% · Safari 0%; experimental: Chrome 88.6% · Edge 88.6% · Firefox 0% · Safari 0%

#### 🌐 Web-features Group Context

*group-level data: web-features [`long-animation-frames`](https://webstatus.dev/features/long-animation-frames), shared with 3 other ChromeStatus features*

- **Chrome usage:** 0.37% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/236))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/929))
- **WebKit:** no position recorded ([standards position](https://github.com/WebKit/standards-positions/issues/283))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (41 found across 11 planned queries, 3 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 2 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "long-animation-frames", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "long-animation-frames": Chrome 65.9% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 2 verified)
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5169798320357376-add-javascripturls-option-to-sanitizerconfig-and-sanitizer"></a>
### [Add javascriptURLs option to SanitizerConfig and Sanitizer](https://chromestatus.com/feature/5169798320357376)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5169798320357376](https://chromestatus.com/feature/5169798320357376) · [chromestatuslite.com/feature/5169798320357376](https://chromestatuslite.com/feature/5169798320357376)
- **Specification:** [https://github.com/whatwg/html/pull/12898](https://github.com/whatwg/html/pull/12898)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

https://github.com/whatwg/html/pull/12898  Sanitizer API also sanitizes javascript:-URLs, when they are used for navigation. This was originally done as a side effect of any "safe" method that uses Sanitizer, and omittted for any "unsafe" method. The HTML standard recently regularized this and made this a developer-selectable option, instead of a side-effect of a particular method.  Behaviour when the option is not used remains the same.

> **Motivation:** Previously, Sanitizer API already supported sanitizing javascript:-URLs, but only for "safe" methods. This was awkward if users wanted to use the "unsafe" methods for some reason, but still wanted javascript:-URLs removed.  Further discussion on: https://github.com/whatwg/html/issues/12686 https://github.com/whatwg/html/pull/12898

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 60 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"SanitizerConfig "javascriptURLs""`, `""javascriptURLs" SanitizerConfig OR "Sanitizer" whatwg html"`, `"Sanitizer API "javascriptURLs""`
- **Analysis:** The WHATWG HTML Living Standard recently incorporated the \`javascriptURLs\` dictionary member and modifier into \`SanitizerConfig\` and \`Sanitizer\` via pull request #12898, regularizing navigation script-URL sanitization into an explicit developer option across both safe and unsafe parsing methods. Chromium has enabled this behavior by default starting in Chrome 157, while Gecko and alternative engines are actively updating their implementations. Overall engine consensus is unified on the specification change, bringing welcome predictability to native DOM sanitization workflows.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams exploring native HTML sanitization should feature-detect the property and test against Chrome 157 or nightly browser flags, but they should avoid relying solely on native Sanitizer configs in cross-browser production until Baseline availability broadens. Maintain existing library-level sanitizers (such as DOMPurify) as fallbacks while incorporating this setting into progressive enhancement strategies.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img544-dot-cr-status.appspot.com/release-notes/157) *(img544-dot-cr-status.appspot.com)*
  > \* \*\*Coverage:\*\* Appears in the automated Chrome 157 release notes and Blink intent trackers
- [openhub.net](https://openhub.net/p/firefox/commits?page=19&time_span=30+days) *(openhub.net)*
  > Browser Engine Implementations & Bug Trackers \* \*\*Gecko (Firefox):\*\* \* Tracked under \*\*Bugzilla Bug 2068934\*\* (\*"Support javascriptURLs in the configuration of sanitizer"\*), aligning Gecko's implementation with the updat...
- [sourceforge.net](https://sourceforge.net/projects/servo.mirror/files/v0.7.0) *(sourceforge.net)*
  > 7.0\*\* via \*\*PR #47867\*\* (\*"Implement javascriptURLs for Sanitizer and SanitizerConfig"\* by \`@skyz1\`)
- [zenn.dev](https://zenn.dev/cybozu_frontend/articles/web_standards_trends_202609) *(zenn.dev)*
  > Developer Blogs & Standards Roundups \* \*\*Zenn (Web Standards Monthly Review):\*\* \* Featured in the \*\*"Web 標準動向 2026年9月版"\*\* (Web Standards Trends, September 2026) roundup The post highlights the progression of the Sanitize...
- [Sanitizer.webidl - mozsearch](https://searchfox.org/firefox-main/source/dom/webidl/Sanitizer.webidl) *(searchfox.org)*
  > boolean javascriptURLs; }; \[Exposed=Window, Pref=&quot;dom.security.sanitizer.enabled&quot;\] interface Sanitizer { \[Throws, UseCounter\] constructor(optional (SanitizerConfig or SanitizerPresets) configuration = &quot;def...

#### 📚 Platform Documentation & References

- [whatwg.org](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html) *(html.spec.whatwg.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (30 found across 11 planned queries, 1 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 5 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (5 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5121089536262144-remove-non-standard-navigations-targeted-at-_current"></a>
### [Remove non-standard navigations targeted at \_current](https://chromestatus.com/feature/5121089536262144)

- **Milestone:** Chrome 153 (Deprecated)
- **ChromeStatus:** [chromestatus.com/feature/5121089536262144](https://chromestatus.com/feature/5121089536262144) · [chromestatuslite.com/feature/5121089536262144](https://chromestatuslite.com/feature/5121089536262144)
- **Specification:** [https://html.spec.whatwg.org/#the-rules-for-choosing-a-navigable](https://html.spec.whatwg.org/#the-rules-for-choosing-a-navigable)
- **Chromium Bug:** [https://crbug.com/539212797](https://crbug.com/539212797)
- **Browser Signals:** Chrome: `Deprecated` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`

#### 📝 Overview

Blink currently supports navigations targeted at "\_current", this feature should be removed as it is non-standard.  Usage of this feature is minimal (less than ~0.00009%), see https://chromestatus.com/metrics/feature/timeline/popularity/2835.

> **Motivation:** This feature is not used at all and is non-standard. It's confusing to ahve it supported in a single browser engine, so this feature removes it.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 50 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Neutral**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Remove non-standard navigations targeted at _current" OR "navigations targeted at _current""`, `"chromestatus "_current" "the rules for choosing a navigable""`
- **Analysis:** Chromium is removing its legacy, non-standard support for navigations targeted at '\_current' to align strictly with the WHATWG HTML specification for choosing a navigable. The behavior historically acted identically to '\_self', but telemetry showed negligible web usage below 0.00009%, warranting removal without requiring a deprecation trial. Because neither Gecko nor WebKit ever implemented this keyword, removing it eliminates a long-standing engine-specific quirk and achieves full cross-browser interoperability.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit legacy templates, link generators, and form targets to verify that no code paths pass '\_current' as a target context. Replace any stray instances with the standardized keyword '\_self' or omit the target attribute altogether to rely on default navigation rules.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [toast.com](https://ui.toast.com/posts/ko_chrome_report_202505) *(ui.toast.com)*
  > In the HTML specification, the \`target\` attribute on elements like \`&lt;a&gt;\`, \`&lt;area&gt;\`, and \`&lt;form&gt;\` accepts specific reserved keywords (\`\_self\`, \`\_blank\`, \`\_parent\`, and \`\_top\`) Historically, the Blink/Chromium engine suppo...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/153) *(learn.microsoft.com)*
  > Historically, the Blink/Chromium engine supported a non-standard keyword: \`target="\_current"\`, which functioned identically to \`target="\_self"\` (opening the link in the current browsing context) Microsoft Edge Web Platfo...
- [chrome.com](https://developer.chrome.com/release-notes/153) *(developer.chrome.com)*
  > Chrome for Developers: Release Notes \* \*\*Source:\*\* \[developer.chrome.com\](https://developer.chrome.com/) This feature is removed in Chrome 153 because it is non-standard, with minimal usage across the web."\*
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > This feature is removed in Chrome 153 because it is non-standard, with minimal usage across the web."\* \* \*\*Key Takeaway:\*\* Chrome eliminated the parsing exception for \`\_current\` without introducing a deprecation trial, r...
- [piunikaweb.com](https://piunikaweb.com/2026/08/21/chrome-153-beta-desktop-ios-android) *(piunikaweb.com)*
  > Because \`\_current\` was non-standard and used by less than 1 in 1,000,000 page loads, developer portals covered it only as part of general version changelog roundups rather than full-length deprecation guides

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 11 planned queries, 1 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 5 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (1 found, 1 verified)
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

- **Momentum:** **Emerging** (footprint 20 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""standards-positions" "Page Embedded Permission Control" OR "Capability Elements" site:github.com/WebKit"`, `""mediacapture-extensions" "media-capture-html-elements""`, `""Capability Elements" "camera" "microphone" chromestatus"`, `""Page-Embedded Permission Control" "displaymode" OR "icon-only""`, `""standards-positions" "Page Embedded Permission Control" OR "Capability Elements" site:github.com/mozilla"`
- **Analysis:** Capability Elements Icon-only mode extends Chromium's declarative permission controls (&lt;camera&gt;, &lt;microphone&gt;, and &lt;geolocation&gt;) by introducing a display mode attribute that suppresses mandatory text labels in favor of compact icons. Designed to meet space constraints in web layouts like video conferencing trays and map controls, it attempts to bridge practical UI needs with strict browser-mediated clickjacking defenses. However, the broader Capability Elements and Page-Embedded Permission Control (PEPC) architecture remains a Chromium-driven initiative with no multi-engine consensus.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat Capability Elements and their icon-only display mode purely as an optional progressive enhancement for Chromium users, never as a sole interaction pattern. Production web applications must retain standard JavaScript permission checks and fallback user activation flows using traditional Media Capture and Geolocation APIs to support Safari and Firefox.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **2 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://chromestatus.com/feature/5107682460696576/activity) *(chromestatus.com)*
  > Chrome Platform Status

#### 📚 Platform Documentation & References

- [github.com](https://github.com/w3ctag/design-reviews/issues/1218) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `permissions` on [wpt.fyi](https://wpt.fyi/results?q=feature:permissions) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 33.3%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 33.3%

#### 🌐 Web-features Group Context

*group-level data: web-features [`permissions`](https://webstatus.dev/features/permissions), shared with 5 other ChromeStatus features*

- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/19))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (31 found across 12 planned queries, 0 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 2 verified) · `Twitter / X API v2` *(HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN))* · `Tweets found by web search` (1 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "permissions", shared with 5 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "permissions": Chrome 66.7% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

