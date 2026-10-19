# 🌐 Chrome Web Platform Ecosystem Report — 2026-W43

> **Generated on:** 2026-10-19 | **Target Milestones:** Chrome 153, 154, 155, 156, 157
> **Search Engine:** Gemini (Google Grounded) + BRAVE | **Analysis Model:** Google Gemini (gemini-3.8-flash) | **AI synthesis:** 84 of 84 features
> **Momentum:** Momentum tiers rank this week's footprint against the other features: the change over four weeks needs an earlier number, measured the same way, for at least 10 features and half of them, and 0 of 84 have one.
> ⏱️ **Partial run:** The crawl reached its 40-minute deadline (43.6 minutes in) and stopped starting features: 84 of 88 were investigated, and the other 4 are not in this report. They come first in the next crawl.

## 📊 Executive Snapshot

| Metric | Count | Description |
| :--- | :--- | :--- |
| **Features Tracked** | `84` | APIs & platform features analyzed across milestones |
| **High Ecosystem Momentum** | `13` | Features in the highest momentum tier (see Methodology) |
| **Multi-Engine Consensus** | `22` | Broad alignment across Chromium, Gecko, and WebKit |
| **Contested / Concerns** | `4` | Features with open vendor or security/privacy objections |
| **New Mentions This Week** | `645` | Net new articles, discussions, or standards updates |

## ⚡ Week-over-Week Ecosystem Deltas

### 🔄 Status Transitions

- [CSS text-decoration-inset](#5178263526834176-css-text-decoration-inset): Moved from *Enabled by default* to **Enabled by default** in Chrome 157

### 🚀 Momentum Shifts

- [Deprecate and remove: Attribution Reporting API](#6320639375966208-deprecate-and-remove-attribution-reporting-api): Shifted from *Moderate* to **High** momentum
- [CSS scroll-marker-group modes](#5109685301673984-css-scroll-marker-group-modes): Shifted from *Emerging* to **High** momentum
- [Language Detector API on Android](#5087964794322944-language-detector-api-on-android): Shifted from *Moderate* to **High** momentum
- [Deprecate and Remove Protected Audience](#6552486106234880-deprecate-and-remove-protected-audience): Shifted from *Moderate* to **High** momentum
- [CSS position-visibility:anchor{s}-valid](#5136856479039488-css-position-visibilityanchors-valid): Shifted from *Moderate* to **High** momentum
- [Long Animation Frames style and layout duration](#5171478175809536-long-animation-frames-style-and-layout-duration): Shifted from *Moderate* to **High** momentum
- [Avoid caching module failures](#5214647044145152-avoid-caching-module-failures): Shifted from *Emerging* to **Moderate** momentum
- [Optional browser optimization for Service Workers](#5194817700364288-optional-browser-optimization-for-service-workers): Shifted from *High* to **Moderate** momentum
- [CSS random() function](#5324559251275776-css-random-function): Shifted from *High* to **Moderate** momentum
- [Algorithm Updates in WebCrypto](#5198951632470016-algorithm-updates-in-webcrypto): Shifted from *High* to **Moderate** momentum
- [WebAudio: Configurable render quantum](#5078190552907776-webaudio-configurable-render-quantum): Shifted from *High* to **Moderate** momentum
- [js-profiling in dedicated workers](#5159559872249856-js-profiling-in-dedicated-workers): Shifted from *Emerging* to **Moderate** momentum
- [Ship anchor-visible and anchor-valid, and deprecate the plural versions](#5136123851571200-ship-anchor-visible-and-anchor-valid-and-deprecate-the-plural-versions): Shifted from *Emerging* to **Moderate** momentum
- [Expose CSSStyleValue hierarchy to Worker contexts](#5114591051907072-expose-cssstylevalue-hierarchy-to-worker-contexts): Shifted from *Emerging* to **Moderate** momentum
- [PredefinedColorSpace srgb-linear and display-p3-linear](#5122501071994880-predefinedcolorspace-srgb-linear-and-display-p3-linear): Shifted from *Emerging* to **Moderate** momentum
- [Deprecate and Remove: Shared Storage API](#5076349064708096-deprecate-and-remove-shared-storage-api): Shifted from *High* to **Moderate** momentum
- [Additional Windowing Controls](#5201832664629248-additional-windowing-controls): Shifted from *High* to **Moderate** momentum
- [Iterator Includes](#5205192866922496-iterator-includes): Shifted from *Emerging* to **Moderate** momentum
- [Iterator Join](#5095183554314240-iterator-join): Shifted from *Emerging* to **Moderate** momentum
- [JS Self-Profiling Markers](#5201297767792640-js-self-profiling-markers): Shifted from *Emerging* to **Moderate** momentum
- [XML parsing in Rust for non-XSLT scenarios](#5309598397497344-xml-parsing-in-rust-for-non-xslt-scenarios): Shifted from *Emerging* to **Moderate** momentum
- [CSS Symbols()](#5146996093616128-css-symbols): Shifted from *Moderate* to **Emerging** momentum
- [WebRTC Diagnostic Logging API](#5091582546149376-webrtc-diagnostic-logging-api): Shifted from *Moderate* to **Emerging** momentum
- [Disconnect WebSockets on BFCache entry](#5068439115923456-disconnect-websockets-on-bfcache-entry): Shifted from *Moderate* to **Emerging** momentum
- [CSS4 text-decoration-skip-spaces](#4832783806627840-css4-text-decoration-skip-spaces): Shifted from *Moderate* to **Emerging** momentum
- [IndexedDB: SQLite backend](#5161589557821440-indexeddb-sqlite-backend): Shifted from *Moderate* to **Emerging** momentum
- [Deprecate and Remove: Related Website Sets (RWS)](#5194473869017088-deprecate-and-remove-related-website-sets-rws): Shifted from *Moderate* to **Emerging** momentum
- [Compression dictionary transport Updates](#4895435813683200-compression-dictionary-transport-updates): Shifted from *Moderate* to **Emerging** momentum

### 📰 Net New Publications & Discussions

- [HTML-in-canvas](#5172548013916160-html-in-canvas): +13 article(s), 9 discussion(s)
- [Local network access restrictions](#5152728072060928-local-network-access-restrictions): +20 article(s)
- [Support for WebHID](#5172464636133376-support-for-webhid): +9 article(s)
- [Deprecate and remove: Attribution Reporting API](#6320639375966208-deprecate-and-remove-attribution-reporting-api): +16 article(s)
- [CSS scroll-marker-group modes](#5109685301673984-css-scroll-marker-group-modes): +12 article(s)
- [Language Detector API on Android](#5087964794322944-language-detector-api-on-android): +21 article(s), 1 discussion(s)
- [Digital Credentials API (issuance support)](#5099333963874304-digital-credentials-api-issuance-support): +12 article(s)
- [Deprecate and Remove Protected Audience](#6552486106234880-deprecate-and-remove-protected-audience): +13 article(s)
- [JPEG XL decoding support (image/jxl) in blink](#5114042131808256-jpeg-xl-decoding-support-imagejxl-in-blink): +14 article(s), 2 discussion(s)
- [CSS position-visibility:anchor{s}-valid](#5136856479039488-css-position-visibilityanchors-valid): +17 article(s)

### ✨ Newly Tracked Features

- [Popup Capability Delegation](#5091965583622144-popup-capability-delegation) (Chrome 157, In developer trial (Behind a flag))
- [Web haptics JavaScript API](#5167864517623808-web-haptics-javascript-api) (Chrome 156, In developer trial (Behind a flag))

---

## 📋 Features Index

| Feature | Milestone | Category | Momentum | Consensus | Week Delta |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [HTML-in-canvas](#5172548013916160-html-in-canvas) | Chrome 157 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +13 art / +9 msgs |
| [Local network access restrictions](#5152728072060928-local-network-access-restrictions) | Chrome 156 | `Stepped rollout` | **High** | Partial Multi-Engine Interest | ⚡ +20 art / +0 msgs |
| [Support for WebHID](#5172464636133376-support-for-webhid) | Chrome 154 | `In developer trial (Behind a flag)` | **High** | Contested / Concerns Raised | ⚡ +9 art / +0 msgs |
| [Deprecate and remove: Attribution Reporting API](#6320639375966208-deprecate-and-remove-attribution-reporting-api) | Chrome 153 | `Deprecated` | **High** | Chromium-Led | ⚡ +16 art / +0 msgs |
| [CSS scroll-marker-group modes](#5109685301673984-css-scroll-marker-group-modes) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | ⚡ +12 art / +0 msgs |
| [Language Detector API on Android](#5087964794322944-language-detector-api-on-android) | Chrome 157 | `Enabled by default` | **High** | Contested / Concerns Raised | ⚡ +21 art / +1 msgs |
| [Digital Credentials API (issuance support)](#5099333963874304-digital-credentials-api-issuance-support) | Chrome 155 | `Enabled by default` | **High** | Contested / Concerns Raised | ⚡ +12 art / +0 msgs |
| [Deprecate and Remove Protected Audience](#6552486106234880-deprecate-and-remove-protected-audience) | Chrome 153 | `Deprecated` | **High** | Chromium-Led | ⚡ +13 art / +0 msgs |
| [JPEG XL decoding support (image/jxl) in blink](#5114042131808256-jpeg-xl-decoding-support-imagejxl-in-blink) | Chrome 155 | `Enabled by default` | **High** | Multi-Engine Consensus | ⚡ +14 art / +2 msgs |
| [CSS position-visibility:anchor{s}-valid](#5136856479039488-css-position-visibilityanchors-valid) | Chrome 157 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +17 art / +0 msgs |
| [Long Animation Frames style and layout duration](#5171478175809536-long-animation-frames-style-and-layout-duration) | Chrome 157 | `Enabled by default` | **High** | Chromium-Led | ⚡ +16 art / +0 msgs |
| [Renewed HTML insertion&streaming methods](#5054329641893888-renewed-html-insertionstreaming-methods) | Chrome 157 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +8 art / +0 msgs |
| [Margin-trim](#5197863732772864-margin-trim) | Chrome 155 | `Enabled by default` | **High** | Multi-Engine Consensus | ⚡ +8 art / +2 msgs |
| [Avoid caching module failures](#5214647044145152-avoid-caching-module-failures) | Chrome 156 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +18 art / +0 msgs |
| [Optional browser optimization for Service Workers](#5194817700364288-optional-browser-optimization-for-service-workers) | Chrome 154 | `Stepped rollout` | **Moderate** | Partial Multi-Engine Interest | ⚡ +8 art / +0 msgs |
| [Single-axis scroll containers](#5067363861004288-single-axis-scroll-containers) | Chrome 156 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +13 art / +1 msgs |
| [CSS random() function](#5324559251275776-css-random-function) | Chrome 156 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +6 art / +0 msgs |
| [Immersive Audio Model and Formats (IAMF) decoding support](#5113656292540416-immersive-audio-model-and-formats-iamf-decoding-support) | Chrome 153 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +4 art / +0 msgs |
| [Algorithm Updates in WebCrypto](#5198951632470016-algorithm-updates-in-webcrypto) | Chrome 155 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +9 art / +0 msgs |
| [Connection Allowlists - Embedded Enforcement](#5657801797009408-connection-allowlists-embedded-enforcement) | Chrome 157 | `Origin trial` | **Moderate** | Partial Multi-Engine Interest | ⚡ +19 art / +0 msgs |
| [CSS corner shorthand properties ](#5152215540039680-css-corner-shorthand-properties-) | Chrome 157 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +12 art / +0 msgs |
| [WebAudio: Configurable render quantum](#5078190552907776-webaudio-configurable-render-quantum) | Chrome 153 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [js-profiling in dedicated workers](#5159559872249856-js-profiling-in-dedicated-workers) | Chrome 154 | `In developer trial (Behind a flag)` | **Moderate** | Chromium-Led | ⚡ +16 art / +0 msgs |
| [Use scroll-snap-type: pair to snap to a single element](#5124378896498688-use-scroll-snap-type-pair-to-snap-to-a-single-element) | Chrome 156 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +10 art / +0 msgs |
| [Deprecate and Remove: document.requestStorageAccessFor](#5162221567082496-deprecate-and-remove-documentrequeststorageaccessfor) | Chrome 153 | `Deprecated` | **Moderate** | Chromium-Led | ⚡ +7 art / +0 msgs |
| [Pause media playback on not-visible iframes](#5082950457884672-pause-media-playback-on-not-visible-iframes) | Chrome 155 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +7 art / +0 msgs |
| [scroll-axis-lock](#5908461532610560-scroll-axis-lock) | Chrome 153 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +3 art / +0 msgs |
| [Ship anchor-visible and anchor-valid, and deprecate the plural versions](#5136123851571200-ship-anchor-visible-and-anchor-valid-and-deprecate-the-plural-versions) | Chrome 157 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +12 art / +0 msgs |
| [Expose CSSStyleValue hierarchy to Worker contexts](#5114591051907072-expose-cssstylevalue-hierarchy-to-worker-contexts) | Chrome 154 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +16 art / +0 msgs |
| [Remove FencedFrame element and window.fence APIs](#6366274495053824-remove-fencedframe-element-and-windowfence-apis) | Chrome 156 | `Deprecated` | **Moderate** | Chromium-Led | ⚡ +9 art / +0 msgs |
| [Responsively-sized &lt;iframe&gt;](#5108373464547328-responsively-sized-iframe) | Chrome 154 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +4 art / +0 msgs |
| [PredefinedColorSpace srgb-linear and display-p3-linear](#5122501071994880-predefinedcolorspace-srgb-linear-and-display-p3-linear) | Chrome 155 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +10 art / +0 msgs |
| [Capability elements: &lt;camera&gt; and &lt;microphone&gt;](#5153829504024576-capability-elements-camera-and-microphone) | Chrome 153 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +10 art / +0 msgs |
| [Deprecate and Remove: Shared Storage API](#5076349064708096-deprecate-and-remove-shared-storage-api) | Chrome 153 | `Deprecated` | **Moderate** | Chromium-Led | ⚡ +8 art / +0 msgs |
| [Joint Iteration](#6249068542164992-joint-iteration) | Chrome 153 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +7 art / +0 msgs |
| [WebTransport Datagram writable streams and prioritization](#5183354944225280-webtransport-datagram-writable-streams-and-prioritization) | Chrome 155 | `In developer trial (Behind a flag)` | **Moderate** | Multi-Engine Consensus | ⚡ +5 art / +0 msgs |
| [CSS text-overflow: &lt;string&gt; value](#6294595288825856-css-text-overflow-string-value) | Chrome 157 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +2 art / +0 msgs |
| [Additional Windowing Controls](#5201832664629248-additional-windowing-controls) | Chrome 155 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +2 art / +0 msgs |
| [Iterator Includes](#5205192866922496-iterator-includes) | Chrome 154 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +12 art / +0 msgs |
| [Iterator Join](#5095183554314240-iterator-join) | Chrome 153 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +8 art / +0 msgs |
| [JS Self-Profiling Markers](#5201297767792640-js-self-profiling-markers) | Chrome 153 | `Origin trial` | **Moderate** | Chromium-Led | ⚡ +1 art / +0 msgs |
| [XML parsing in Rust for non-XSLT scenarios](#5309598397497344-xml-parsing-in-rust-for-non-xslt-scenarios) | Chrome 153 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +4 art / +0 msgs |
| [CSS Symbols()](#5146996093616128-css-symbols) | Chrome 155 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +5 art / +0 msgs |
| [WebRTC Diagnostic Logging API](#5091582546149376-webrtc-diagnostic-logging-api) | Chrome 156 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [WebGPU: \`buffer\_view\` feature](#5094091886034944-webgpu-buffer_view-feature) | Chrome 153 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [CORS enforcement for Background Fetch](#6210300985606144-cors-enforcement-for-background-fetch) | Chrome 157 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +8 art / +0 msgs |
| [Disconnect WebSockets on BFCache entry](#5068439115923456-disconnect-websockets-on-bfcache-entry) | Chrome 157 | `Stepped rollout` | **Emerging** | Multi-Engine Consensus | ⚡ +5 art / +0 msgs |
| [CSS4 text-decoration-skip-spaces](#4832783806627840-css4-text-decoration-skip-spaces) | Chrome 155 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +4 art / +0 msgs |
| [WebGPU: WGSL Fragment Depth](#5663304168112128-webgpu-wgsl-fragment-depth) | Chrome 156 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +5 art / +0 msgs |
| [Add javascriptURLs option to SanitizerConfig and Sanitizer](#5169798320357376-add-javascripturls-option-to-sanitizerconfig-and-sanitizer) | Chrome 157 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +13 art / +0 msgs |
| [Fetch API: Forward reason from AbortController to fetch Response](#5158507786665984-fetch-api-forward-reason-from-abortcontroller-to-fetch-response) | Chrome 154 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +6 art / +0 msgs |
| [IndexedDB: SQLite backend](#5161589557821440-indexeddb-sqlite-backend) | Chrome 156 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +5 art / +0 msgs |
| [CSS text-decoration-inset](#5178263526834176-css-text-decoration-inset) | Chrome 157 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | 🔄 Enabled by default |
| [Deprecate and Remove: Related Website Sets (RWS)](#5194473869017088-deprecate-and-remove-related-website-sets-rws) | Chrome 153 | `Deprecated` | **Emerging** | Chromium-Led | ⚡ +4 art / +0 msgs |
| [FontFace width attribute and font-width descriptor](#5145402365050880-fontface-width-attribute-and-font-width-descriptor) | Chrome 154 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +5 art / +0 msgs |
| [Decisions API](#5155080092385280-decisions-api) | Chrome 157 | `In developer trial (Behind a flag)` | **Emerging** | Chromium-Led | ⚡ +10 art / +0 msgs |
| [Secure Payment Confirmation: Locale Validation](#5126146013396992-secure-payment-confirmation-locale-validation) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +7 art / +0 msgs |
| [Window Shape API](#5075144470036480-window-shape-api) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [Support targetAddressSpace option for WebSockets](#4779920606756864-support-targetaddressspace-option-for-websockets) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +4 art / +0 msgs |
| [WebTransport reliability attributes](#5094058497277952-webtransport-reliability-attributes) | Chrome 155 | `In developer trial (Behind a flag)` | **Emerging** | Multi-Engine Consensus | ⚡ +6 art / +0 msgs |
| [Add options bag to WebSocket constructor](#5080055102439424-add-options-bag-to-websocket-constructor) | Chrome 154 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +2 art / +0 msgs |
| [Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](#5138797158334464-web-bluetooth-make-bluetoothremotegattserver-an-eventtarget) | Chrome 157 | `Enabled by default` | **Emerging** | Contested / Concerns Raised | ⚡ +4 art / +0 msgs |
| [WebGPU: atomic-vec2u-min-max](#4882016087703552-webgpu-atomic-vec2u-min-max) | Chrome 157 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +2 art / +0 msgs |
| [Compression dictionary transport Updates](#4895435813683200-compression-dictionary-transport-updates) | Chrome 156 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +4 art / +0 msgs |
| [CSS flow-start and flow-end alignment keywords](#5069051687731200-css-flow-start-and-flow-end-alignment-keywords) | Chrome 157 | `In developer trial (Behind a flag)` | **Emerging** | Partial Multi-Engine Interest | ⚡ +4 art / +0 msgs |
| [Import Text (Text Modules)](#5191512456560640-import-text-text-modules) | Chrome 155 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +6 art / +0 msgs |
| [Local Network Access restrictions for Background Fetch](#6225598451154944-local-network-access-restrictions-for-background-fetch) | Chrome 154 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +6 art / +0 msgs |
| [WebTransport headers and responseHeaders](#5194104408506368-webtransport-headers-and-responseheaders) | Chrome 156 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +5 art / +0 msgs |
| [WebTransport receive stream](#5109912169480192-webtransport-receive-stream) | Chrome 155 | `In developer trial (Behind a flag)` | **Emerging** | Multi-Engine Consensus | ⚡ +5 art / +0 msgs |
| [Capability Elements Icon-only mode](#5107682460696576-capability-elements-icon-only-mode) | Chrome 157 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +11 art / +0 msgs |
| [Overscroll Areas](#5261280285949952-overscroll-areas) | Chrome 157 | `Origin trial` | **Emerging** | Chromium-Led | ⚡ +3 art / +0 msgs |
| [Ask-before-HTTP warning on by default](#5143933628841984-ask-before-http-warning-on-by-default) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [Expose ProgressEvent in service workers](#5069584943153152-expose-progressevent-in-service-workers) | Chrome 157 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +3 art / +0 msgs |
| [Host and screenshot restrictions for chrome.debugger API](#5072259281715200-host-and-screenshot-restrictions-for-chromedebugger-api) | Chrome 155 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +3 art / +0 msgs |
| [WebTransport Datagram readable stream type](#5148774971342848-webtransport-datagram-readable-stream-type) | Chrome 155 | `In developer trial (Behind a flag)` | **Emerging** | Multi-Engine Consensus | ⚡ +3 art / +0 msgs |
| [Popup Capability Delegation](#5091965583622144-popup-capability-delegation) | Chrome 157 | `In developer trial (Behind a flag)` | **Emerging** | Chromium-Led | ✨ New |
| [CSS pseudo-class for navigation source element](#6327898878377984-css-pseudo-class-for-navigation-source-element) | Chrome 156 | `Enabled by default` | **Emerging** | Chromium-Led | — |
| [Light dismiss improvements for popovers and dialogs](#6209615938322432-light-dismiss-improvements-for-popovers-and-dialogs) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +6 art / +0 msgs |
| [object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](#4886345347629056-object-fit-and-object-position-apply-to-svg-documents-in-object-and-embed) | Chrome 157 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +1 art / +0 msgs |
| [Web haptics JavaScript API](#5167864517623808-web-haptics-javascript-api) | Chrome 156 | `In developer trial (Behind a flag)` | **Emerging** | Chromium-Led | ✨ New |
| [Private Verification Tokens](#6210457816924160-private-verification-tokens) | Chrome 154 | `Origin trial` | **Emerging** | Chromium-Led | ⚡ +2 art / +0 msgs |
| [Remove non-standard navigations targeted at \_current](#5121089536262144-remove-non-standard-navigations-targeted-at-_current) | Chrome 153 | `Deprecated` | **Emerging** | Multi-Engine Consensus | ⚡ +6 art / +0 msgs |
| [SpeechRecognitionResult Timestamps (WebSpeech API)](#5811907077472256-speechrecognitionresult-timestamps-webspeech-api) | Chrome 153 | `In developer trial (Behind a flag)` | **Emerging** | Chromium-Led | — |
| [Interoperable dispatch timing for transitionrun and media query events](#6312504658624512-interoperable-dispatch-timing-for-transitionrun-and-media-query-events) | Chrome 153 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +1 art / +0 msgs |

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

- **Momentum:** **High** (footprint 1457 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The HTML-in-canvas feature (shipping in Chrome 157) bridges a long-standing gap by allowing native HTML/CSS rendering, accessibility, and interactivity inside high-performance WebGL/WebGPU canvases. While it solves major pain points for rich graphics applications and UI frameworks, it is still navigating early-stage multi-stakeholder design reviews across browser engines.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building heavy WebGL or WebGPU applications should experiment with the feature behind flags and study existing polyfills, but must rely on progressive enhancement for cross-browser production compatibility.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @smfr: "We will mark this proposal as support in a week pending objections. There are some ongoing discussions around parts of the API shape that we'd like to..."
- Standards Activity (Mozilla): Latest discussion from @nical: "Another concern was brought up recently in a discussion with web-standards folks at mozilla:  HTML-in-canvas is violating the principle that JS should..."
- Community package available: \[html-in-canvas-polyfill\](https://www.npmjs.com/package/html-in-canvas-polyfill) (v1.0.1) for progressive enhancement.
- Verified community discussion on Hacker News: "HTML-in-Canvas" (222 points, 116 comments).

#### ⚡ What Happened This Week

- 💬 **9 new community discussions** found
- 📰 **13 new articles/tutorials** published

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
- **W3C TAG:** [\[HTML\] Canvas place element](https://github.com/w3ctag/design-reviews/issues/997) [closed] `Venue: WHATWG`, `Venue: WICG`, `Resolution: overtaken`, `Focus: API design (pending)`, `Focus: Web architecture (pending)`, `Focus: Security (pending)`, `Focus: Privacy (pending)`, `Focus: Accessibility (pending)`, `Focus: Internationalization (pending)`
  > *Latest discussion from @progers: "We've made significant updates since this was originally filed, so I've created a new TAG issue at https://github.com/w3ctag/design-reviews/issues/120..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2080574: \[wpt-sync\] Sync PR 63519 - \[html-in-canvas\] Sync CanvasPaintEvent&ElementGeometryUpdateEvent IDL](https://bugzilla.mozilla.org/show_bug.cgi?id=2080574) `[NEW]`
- **WebKit (Safari):** [Bug #316240: \[HTML-in-Canvas\] Implement HTML-in-Canvas](https://bugs.webkit.org/show_bug.cgi?id=316240) `[NEW]`
- **WebKit (Safari):** [Bug #316244: \[HTML-in-Canvas\] Blockify style "display" and force style "position" for canvas descendants](https://bugs.webkit.org/show_bug.cgi?id=316244) `[NEW]`
- **WebKit (Safari):** [Bug #316246: \[HTML-in-Canvas\] Implement ElementImage and HTMLCanvasElement.captureElementImage()](https://bugs.webkit.org/show_bug.cgi?id=316246) `[NEW]`

#### 📦 Polyfills & NPM Ecosystem

- [@remotion/canvas-capture](https://www.npmjs.com/package/@remotion/canvas-capture) `v4.0.502` — Capture HTML-in-canvas content as a video
- [html-in-canvas-polyfill](https://www.npmjs.com/package/html-in-canvas-polyfill) `v1.0.1` *(Verified Polyfill)* — HTML in Canvas Polyfill
- [three-html-render](https://www.npmjs.com/package/three-html-render) `v0.1.2` *(Verified Polyfill)* — HTML-in-Canvas polyfill and Three.js integration for rendering live HTML as WebGL/WebGPU textures
- [hic-pageflip](https://www.npmjs.com/package/hic-pageflip) `v1.0.4` — A Pageflip/Flipbook Custom Element powered by HTML-in-Canvas
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

- [HTML-in-canvas \[500967896\] - Chromium](https://issues.chromium.org/issues/500967896) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5172548013916160`)*
  > Chromium Sign in
- [Re: \[blink-dev\] Re: Intent to Ship: HTML-in-canvas](http://www.mail-archive.com/blink-dev@chromium.org/msg17608.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5172548013916160`)*
  > Re: \[blink-dev\] Re: Intent to Ship: HTML-in-canvas Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: HTML-in-canvas Yoav Weiss (@Shopify) Wed, 30 Sep 2026 08:30:39 -0700 LGTM2 On Wed, Sep 30, 2026...
- [\[blink-dev\] Re: Intent to Ship: HTML-in-canvas](http://www.mail-archive.com/blink-dev@chromium.org/msg17605.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5172548013916160`)*
  > \[blink-dev\] Re: Intent to Ship: HTML-in-canvas Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: HTML-in-canvas Alex Russell Wed, 30 Sep 2026 08:28:48 -0700 I regret that I have but one LGTM to give. ...
- [Intent to Experiment: HTML-in-canvas](https://groups.google.com/a/chromium.org/g/blink-dev/c/t_nGEmJ_v4s) *(groups.google.com)* *(Cites: `https://github.com/WICG/html-in-canvas`)*
  > Intent to Experiment: HTML-in-canvas Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: HTML-in-canva...
- [Enable the canvas-draw-element Chrome Flag — Setup & Browser Support \| HTML-in-Canvas](https://html-in-canvas.dev/docs/browser-support) *(html-in-canvas.dev · 2026-09-08T00:00:00)* *(Cites: `https://github.com/WICG/html-in-canvas`)*
  > Enable the canvas-draw-element Chrome Flag — Setup & Browser Support \| HTML-in-Canvas In production: Graview renders app views with HTML-in-Canvas — see it at graview.dev and graview.cloud . Why it matters &rarr; This si...

#### 📚 Platform Documentation & References

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-08 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0001.html) *(lists.w3.org)*
- [HTML-in-Canvas · Issue #1076 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1076) *(github.com)*
- [html-in-canvas/README.md at main · WICG/html-in-canvas](https://github.com/WICG/html-in-canvas/blob/main/README.md) *(github.com)*
- [html-in-canvas/Examples at main · WICG/html-in-canvas](https://github.com/WICG/html-in-canvas/tree/main/Examples) *(github.com)*
- [html-in-canvas/Examples/text-input.html at main · WICG/html-in-canvas](https://github.com/WICG/html-in-canvas/blob/main/Examples/text-input.html) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `canvas` on [wpt.fyi](https://wpt.fyi/results?q=feature:canvas) (via webstatus.dev) — stable: Chrome 98.4% · Edge 98.4% · Firefox 95.9% · Safari 99.2%; experimental: Chrome 98.4% · Edge 98.4% · Firefox 95.9% · Safari 99.2%

#### 🌐 Web-features Group Context

*group-level data: web-features [`canvas`](https://webstatus.dev/features/canvas), shared with 2 other ChromeStatus features*

- **Chrome usage:** 0.47% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/200))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (68 found across 13 planned queries, 40 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 11 verified) · `Twitter / X API v2` *(found 9 tweet(s))* · `Tweets found by web search` (8 found, 8 verified) · `Dev.to Community Blogs` (0 found, 3 verified) · `Hacker News Algolia` (8 found, 8 verified) · `Standards Positions` (5 found, 4 verified) · `Engine Bug Trackers` (6 found, 4 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 5 verified) · `web-features mapping` *(group "canvas", shared with 2 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "canvas": Chrome 98.4% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 16

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

- **Momentum:** **High** (footprint 625 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Chrome has moved forward with Local Network Access restrictions, shifting away from the complex Private Network Access preflight model to an explicit browser permission prompt split into local-network and loopback-network controls. While this hardens security against cross-site request forgery and local network fingerprinting, it introduces severe friction for web apps that interface with local hardware, developer tooling, and intranet servers. The feature currently sits in limited availability, heavily driven by Chromium with other engine stances still materializing.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams dealing with intranet apps or local hardware integration should audit their requests, prepare for secure context requirements, and test against Chrome's granular permission flags to handle scenarios where users deny or are prompted for local and loopback access.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **20 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1969916: Local network access restrictions for webrtc](https://bugzilla.mozilla.org/show_bug.cgi?id=1969916) `[NEW]`

#### 📦 Polyfills & NPM Ecosystem

- [qz-lna](https://www.npmjs.com/package/qz-lna) `v0.1.3` — Helpers for Local Network Access restrictions

#### 📰 Ecosystem Blogs & Articles

- [New permission prompt for Local Network Access \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/local-network-access) *(developer.chrome.com)*
  > The transition from the legacy \*\*Private Network Access (PNA)\*\* specification to the \*\*Local Network Access (LNA)\*\* permission model marks a major shift in how Chromium browsers protect private IP addresses and loopback ...
- [chrome.com](https://developer.chrome.com/blog/private-network-access-preflight) *(developer.chrome.com)*
  > \*\*Why the pivot happened:\*\* PNA originally relied on CORS preflights requiring target devices (routers, printers, IoT hardware) to respond with headers like \`Access-Control-Allow-Private-Network: true\`
- [Chrome's Local Network Access (LNA) Permission Explained](https://blog.openreplay.com/chrome-local-network-access-lna-permission) *(blog.openreplay.com)*
  > This proved largely impractical for unpatchable embedded devices \*\*The LNA model:\*\* Starting with Chrome 142, Chromium switched to gating public-to-local requests behind an explicit browser permission prompt within secur...
- [microsoft.com](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/localnetworkaccessipaddressspaceoverrides) *(learn.microsoft.com)*
  > \*\*Evolution:\*\* Chrome 145 split the permission into \`local-network\` (intranets/RFC 1918) and \`loopback-network\` (\`127.0.0.1\`/\`localhost\`), Chrome 146 added enterprise CIDR overrides, and Chrome 147 expanded enforcement a...
- [chrome.com](https://developer.chrome.com/release-notes/142) *(developer.chrome.com)*
  > \*\*"New permission prompt for Local Network Access" & Release Notes (M142+)
- [chrome.com](https://developer.chrome.com/blog/pna-on-hold) *(developer.chrome.com)*
  > Google officially announced the pause of PNA preflights in favor of the user-permission prompt model

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Extend Experiment: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg15683.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Chromestatus Tue, 27 Jan 2026 13...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY/m/hk8YuZDWHgAJ) *(groups.google.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Intent to Ship: Local network access restrictions Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Local ...
- [\[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTransport](http://www.mail-archive.com/blink-dev@chromium.org/msg15285.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTransport Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTranspor...
- [\[blink-dev\] Re: Intent to Ship: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg14542.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Re: Intent to Ship: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Local network access restrictions Vladimir Levin Wed, 03 Sep 2025 08:29:23 -0700 Hey...
- [\[blink-dev\] Re: Intent to Extend Experiment: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg15689.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Local network access restrictions Chris Thompson Wed, 28 J...

#### 📚 Platform Documentation & References

- [Local network access - Security - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Local_network_access) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Request/targetAddressSpace) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/loopback-network) *(developer.mozilla.org)*
- [Clarify what "local-network" and "loopback-network" permissions enable (and when to prompt the user) · Issue #89 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/89) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Local network access restrictions Demo](https://local-network-access-testing.glitch.me)

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (68 found across 13 planned queries, 45 verified) · `Google Search Grounding (gemini-3.8-flash)` (24 found, 19 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (5 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 1 verified) · `web-features mapping` *(group "local-network-access", shared with 7 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "local-network-access": no stable pass rate for Chrome yet)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5172464636133376-support-for-webhid"></a>
### [Support for WebHID](https://chromestatus.com/feature/5172464636133376)

- **Milestone:** Chrome 154 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5172464636133376](https://chromestatus.com/feature/5172464636133376) · [chromestatuslite.com/feature/5172464636133376](https://chromestatuslite.com/feature/5172464636133376)
- **Specification:** [https://wicg.github.io/webhid/index.html](https://wicg.github.io/webhid/index.html)
- **Chromium Bug:** [http://crbug.com/40628009](http://crbug.com/40628009)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `Negative` · Safari: `Negative`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/webhid) (Chrome: `89`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`webhid`](https://webstatus.dev/features/webhid), shared with 5 other ChromeStatus features*

#### 📝 Overview

WebHID allows web applications to interact with a wider range of devices. Standard examples of Human Interface Devices (HIDs)  include mice, keyboards, touchscreens, and gamepads. Those are accessible with high-level input events. However, specialized HIDs and HID features (for example, custom keyboards, game controllers, and call control headsets) require extended access.   WebHID allows web applications to request access, send and receive HID reports, and retrieve information about the report descriptor. This feature was previously launched on desktop platforms (Windows, macOS, Linux, and ChromeOS). Support on Android is planned for Chrome 157. To read more, see \[Connect to uncommon HID devices\](https://developer.chrome.com/docs/extensions/how-to/web-platform/webhid).  This feature can be controlled by the following enterprise policies:  \* \[DefaultWebHidGuardSetting\](https://chromeenterprise.google/policies/#DefaultWebHidGuardSetting) \* \[WebHidAllowAllDevicesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowAllDevicesForUrls) \* \[WebHidAllowDevicesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowDevicesForUrls) \* \[WebHidAllowDevicesWithHidUsagesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowDevicesWithHidUsagesForUrls) \* \[WebHidAskForUrls\](https://chromeenterprise.google/policies/#WebHidAskForUrls) \* \[WebHidBlockedForUrls\](https://chromeenterprise.google/policies/#WebHidBlockedForUrls)

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (footprint 615 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** The WebHID API allows web applications to communicate directly with specialized Human Interface Devices, expanding from its initial desktop launch to support extension service workers, dedicated workers, and upcoming Android integration. Despite its utility for hardware-interactive web applications and companion tools, it remains a Chromium-specific feature with limited cross-browser consensus. Mozilla holds a negative standards position due to security and fingerprinting considerations.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat WebHID strictly as a progressive enhancement for Chromium-based browsers or extension environments where users connect specialized hardware. Always implement feature-detection and graceful fallbacks or desktop application wrappers for Firefox and Safari users.
- Standards Activity (Mozilla): Latest discussion from @scheib: "I'd like to address dmitriid@'s and beaufortfrancois@ comments with a personal opinion.  I work on Chrome adding these capabilities.  We do strive to ..."
- Standards Activity (W3C TAG): Latest discussion from @cynthia: "We've looked at this during the Tokyo F2F.  Blunt question: will the device selector dialog come up every time the user tries to access the same devic..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Show HN: Browser based tool for programming ch57x macro-pads" (3 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **9 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Show HN: Browser based tool for programming ch57x macro-pads](https://news.ycombinator.com/item?id=48662242) — *Hacker News (3 pts, 0 comments)*
- 🐦 [mr.niko.la (@diynikola) on X](https://twitter.com/diynikola/status/1148644168148955136) — *Twitter / X by @diynikola (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **Mozilla:** [WebHID (Human Interface Device) API](https://github.com/mozilla/standards-positions/issues/459) [closed] `venue: W3C CG`, `position: negative`
  > *Latest discussion from @scheib: "I'd like to address dmitriid@'s and beaufortfrancois@ comments with a personal opinion.  I work on Chrome adding these capabilities.  We do strive to ..."*
- **W3C TAG:** [WebHID API (Human Interface Device)](https://github.com/w3ctag/design-reviews/issues/370) [closed] `Progress: review complete`, `Topic: accessibility`, `Topic: privacy`, `Provenance: Fugu`, `Topic: Input`
  > *Latest discussion from @cynthia: "We've looked at this during the Tokyo F2F.  Blunt question: will the device selector dialog come up every time the user tries to access the same devic..."*

#### 📦 Polyfills & NPM Ecosystem

- [@ledgerhq/hw-transport-webhid](https://www.npmjs.com/package/@ledgerhq/hw-transport-webhid) `v6.36.0` — Ledger Hardware Wallet WebHID implementation of the communication layer
- [@types/w3c-web-hid](https://www.npmjs.com/package/@types/w3c-web-hid) `v1.0.7` — TypeScript definitions for w3c-web-hid
- [@elgato-stream-deck/webhid](https://www.npmjs.com/package/@elgato-stream-deck/webhid) `v7.8.0` — An npm module for interfacing with the Elgato Stream Deck in the browser
- [shuttle-webhid](https://www.npmjs.com/package/shuttle-webhid) `v0.1.3` — An npm module for interfacing with the Contour Shuttle devices in Node.js

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/docs/capabilities/web-apis/hid-examples) *(developer.chrome.com)*
  > Here is a summary and overview of the key developer articles, tutorials, announcements, and ecosystem reactions regarding the \*\*WebHID API\*\* The \*\*WebHID API\*\* enables web applications and browser extensions to discover,...
- [WebHID in Chrome Extensions: Connect to Hardware ...](https://extensionbooster.net/blog/chrome-extension-webhid-hardware-devices-guide) *(extensionbooster.net)*
  > The \*\*WebHID API\*\* enables web applications and browser extensions to discover, request access to, and bi-directionally communicate with Human Interface Devices (HIDs) directly in JavaScript without relying on specialize...
- [chromestatus.com](https://chromestatus.com/feature/6305751386554368) *(chromestatus.com)*
  > After launching for desktop operating systems (Windows, macOS, Linux, and ChromeOS) in Chrome 89, WebHID capabilities have progressively expanded into extension service workers (Chrome 117) This documentation covers how ...
- [Use WebHID \| Chrome Extensions \| Chrome for Developers](https://developer.chrome.com/docs/extensions/how-to/web-platform/webhid) *(developer.chrome.com)*
  > After launching for desktop operating systems (Windows, macOS, Linux, and ChromeOS) in Chrome 89, WebHID capabilities have progressively expanded into extension service workers (Chrome 117) This documentation covers how ...
- [web.dev](https://web.dev/blog/web-platform-11-2024) *(web.dev)*
  > After launching for desktop operating systems (Windows, macOS, Linux, and ChromeOS) in Chrome 89, WebHID capabilities have progressively expanded into extension service workers (Chrome 117) and dedicated worker contexts ...
- [jetstream.blog](https://jetstream.blog/en/android-chrome-webhid-app-teardown) *(jetstream.blog)*
  > After launching for desktop operating systems (Windows, macOS, Linux, and ChromeOS) in Chrome 89, WebHID capabilities have progressively expanded into extension service workers (Chrome 117) and dedicated worker contexts ...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T00:00:00)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Intent to Prototype: WebHID on Android Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: WebHID on An...
- [Intent to Implement: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/OaDCpCaEe_4/m/eRqOcJ_eCgAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Intent to Implement: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Implement...
- [\[blink-dev\] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17213.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > \[blink-dev\] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: WebHID on Android Matt Reynolds Tue, 18 Aug 2026 12:47:09 -0700 Sure, let's upgrade this t...
- [Intent to Experiment: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/LoyzK8xTRME) *(groups.google.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > Intent to Experiment: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experime...
- [Add hid to features.md · w3c/webappsec – Slacker News](https://slacker.ro/2021/07/20/add-hid-to-featuresmd-w3cwebappsec-permissions-policy-at-1065d2d) *(slacker.ro)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > \| \`hid\` \| \[Explainer\](https://&lt;strong&gt;github.com/WICG/webhid/blob/master/EXPLAINER.md&lt;/strong&gt;) \| In \[Origin Trial\](https://developers.chrome.com/origintrials/#/view\_trial/1074108511127863297) in Chrome 85-87 \|

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/HID) *(developer.mozilla.org)*
- [whatwg.org](https://hid.spec.whatwg.org) *(hid.spec.whatwg.org)*
- [Add "WebHID" · Issue #5062 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/5062) *(github.com)*
- [WebHID API (Human Interface Device) · Issue #370 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/370) *(github.com)*
- [GitHub - robatwilliams/awesome-webhid: Curated list of resources relating to the WebHID (Human Interface Device) API · GitHub](https://github.com/robatwilliams/awesome-webhid) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webhid` on [wpt.fyi](https://wpt.fyi/results?q=feature:webhid) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 16.7% · Safari 16.7%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 16.7% · Safari 16.7%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webhid`](https://webstatus.dev/features/webhid), shared with 5 other ChromeStatus features*

- **Chrome usage:** 0.000015% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/77))
- **Mozilla:** negative ([standards position](https://github.com/mozilla/standards-positions/issues/459))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (65 found across 12 planned queries, 43 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 12 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 1 verified) · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (6 found, 1 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 4 verified) · `web-features mapping` *(group "webhid", shared with 5 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webhid": Chrome 66.7% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 10

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

- **Momentum:** **High** (footprint 460 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Attribution Reporting API" deprecate remove chrome 153 privacy sandbox"`
- **Analysis:** Following Google's decision to maintain third-party cookies rather than phase them out, the Attribution Reporting API is being deprecated and removed in Chrome 153. Due to low industry adoption and a lack of cross-browser support from Safari/WebKit and Firefox/Gecko, Google is scaling back these Privacy Sandbox components to refocus on alternative interoperable standards.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development and ad tech teams should phase out dependencies on the Attribution Reporting API and rely on standard cookie-based tracking or fallback mechanisms for cross-site measurement on Chrome.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **16 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Google Privacy Sandbox Update 2026: Why Google Shut It Down](https://segwise.ai/blog/google-privacy-sandbox-shutdown-reason) *(segwise.ai)*
  > Following Chrome's policy shift to maintain its current approach to third-party cookies rather than deprecating them outright, Google announced the scaling back and retirement of the broader Privacy Sandbox initiative Ad...
- [adweek.com](https://www.adweek.com/media/googles-privacy-sandbox-is-officially-dead) *(adweek.com)*
  > Following Chrome's policy shift to maintain its current approach to third-party cookies rather than deprecating them outright, Google announced the scaling back and retirement of the broader Privacy Sandbox initiative Be...
- [Update on Plans for Privacy Sandbox Technologies - Google](https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies) *(privacysandbox.google.com)*
  > privacysandbox.com / Google Announcements In announcements detailing the evolution of the Privacy Sandbox, Google outlined that while tools like CHIPS and FedCM (which target partitioned storage and identity flows with b...
- [Re: \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](http://www.mail-archive.com/blink-dev@chromium.org/msg15157.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API Mike Taylor Sun, 09 Nov 2025 16:46...
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](http://www.mail-archive.com/blink-dev@chromium.org/msg15138.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API Skip to site navigation (Press enter) \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API Nan Lin Fri, 07 Nov 2025 10:35:53 -0800 In...
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4K2RRt6VYCQ/m/xt3TXi3WBQAJ) *(groups.google.com · 2025-11-07T00:00:00)*
  > \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; \[b...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](http://www.mail-archive.com/blink-dev@chromium.org/msg15157.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6320639375966208`)*
  > Re: \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API Mike Taylor Sun, 09 Nov 2025 16:46...
- [Deprecate and remove: Attribution Reporting API · Issue #1325 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1325) *(github.com · 2026-08-14T17:31:48)* *(Cites: `https://chromestatus.com/feature/6320639375966208`)*
  > Deprecate and remove: Attribution Reporting API · Issue #1325 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You s...
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](http://www.mail-archive.com/blink-dev@chromium.org/msg15138.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6320639375966208`)*
  > \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API Skip to site navigation (Press enter) \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API Nan Lin Fri, 07 Nov 2025 10:35:53 -0800 In...
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4K2RRt6VYCQ/m/xt3TXi3WBQAJ) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/6320639375966208`)*
  > \[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; \[b...
- [attribution-reporting-api/index.bs at main · WICG/attribution-reporting-api](https://github.com/WICG/attribution-reporting-api/blob/main/index.bs) *(github.com)* *(Cites: `https://wicg.github.io/attribution-reporting-api`)*
  > attribution-reporting-api/index.bs at main · WICG/attribution-reporting-api · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab...

#### 📚 Platform Documentation & References

- [Attribution Reporting API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Attribution_Reporting_API) *(developer.mozilla.org)*
- [Deprecate and remove: Attribution Reporting API · Issue #1325 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1325) *(github.com)*
- [attribution-reporting-api/index.bs at main · WICG/attribution-reporting-api](https://github.com/WICG/attribution-reporting-api/blob/main/index.bs) *(github.com)*
- [Attribution Reporting API · Issue #180 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/180) *(github.com)*
- [attribution-reporting-api/meetings/2024-02-05-minutes.md at main · WICG/attribution-reporting-api](https://github.com/WICG/attribution-reporting-api/blob/main/meetings/2024-02-05-minutes.md) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (67 found across 11 planned queries, 42 verified) · `Google Search Grounding (gemini-3.8-flash)` (5 found, 4 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (1 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **High** (footprint 425 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The CSS scroll-marker-group modes feature introduces native 'links' and 'tabs' behaviors to scroll markers, dramatically improving semantic alignment and keyboard navigation for declarative carousels and tabs. While Chromium has advanced implementation to enabled-by-default status, the feature lacks cross-browser baseline status and faces substantial accessibility scrutiny from other vendors.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should treat this feature as an experimental progressive enhancement, testing behavior carefully under feature flags while ensuring robust JavaScript fallbacks for non-Chromium browsers.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Some issues that seem pretty fundamental: - https://github.com/w3c/csswg-drafts/issues/12240 - https://github.com/w3c/csswg-drafts/issues/12269..."
- Standards Activity (Mozilla): Latest discussion from @jcsteh: "I have some significant accessibility concerns regarding CSS inert specifically. See https://github.com/w3ctag/design-reviews/issues/1055#issuecomment..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Overflow Navigation Controls](https://github.com/WebKit/standards-positions/issues/447) [open] `topic: css`, `concerns: internationalization`, `venue: W3C CSS WG`, `from: Google`, `concerns: accessibility`
  > *Latest discussion from @fantasai: "Some issues that seem pretty fundamental: - https://github.com/w3c/csswg-drafts/issues/12240 - https://github.com/w3c/csswg-drafts/issues/12269..."*
- **Mozilla:** [CSS Overflow Navigation Controls](https://github.com/mozilla/standards-positions/issues/1161) [open] `venue: W3C`, `topic: CSS`, `team: Layout`, `team: Accessibility`
  > *Latest discussion from @jcsteh: "I have some significant accessibility concerns regarding CSS inert specifically. See https://github.com/w3ctag/design-reviews/issues/1055#issuecomment..."*

#### 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://img680-dot-cr-status.appspot.com/feature/5109685301673984) *(img680-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [sarasoueidan.com](https://www.sarasoueidan.com/newsletter/issue-2025-08-18) *(sarasoueidan.com)*
  > Articles and developer guides (such as those exploring CSS-only carousels and scrollspy utilities by developers like Sara Soueidan Earlier iterations of CSS scroll markers faced heavy scrutiny from accessibility experts ...
- [dandenney.com](https://www.dandenney.com/blips/css-only-scrollspy-with-scroll-marker-group) *(dandenney.com)*
  > Articles and developer guides (such as those exploring CSS-only carousels and scrollspy utilities by developers like Sara Soueidan and Dan Denney Articles and developer guides (such as those exploring CSS-only carousels ...
- [medium.com](https://pixicstudio.medium.com/css-scroll-markers-building-carousels-without-javascript-509e6a3d4005) *(pixicstudio.medium.com)*
  > Articles and developer guides (such as those exploring CSS-only carousels and scrollspy utilities by developers like Sara Soueidan and Dan Denney) celebrate \`scroll-marker-group\` as a monumental step toward building comp...
- [caniuse.com](https://caniuse.com/css-scroll-markers) *(caniuse.com)*
  > Articles and developer guides (such as those exploring CSS-only carousels and scrollspy utilities by developers like Sara Soueidan and Dan Denney) celebrate \`scroll-marker-group\` as a monumental step toward building comp...
- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Chromestatus Wed, 15 Jul 2026 12:40:07 -0700 Contact emails \[email...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109685301673984`)*
  > \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Chromestatus Wed, 15 Jul 2026 12:40:07 -0700 Contact emails \[email...
- [RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109685301673984`)*
  > RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes 'Daniel Clark' via blink-dev Mon, 20 Jul 2026 09:49:59 -07...
- [Re: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg17056.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > Re: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Daniil Sakhapov Fri, 24 Jul 2026 03:48:51 -0700 1) Current...
- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or windo...
- [Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss](https://github.com/parcel-bundler/lightningcss/issues/1184) *(github.com · 2026-03-16T06:55:52)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another...

#### 📚 Platform Documentation & References

- [scroll-marker-group CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-marker-group) *(developer.mozilla.org)*
- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)*
- [Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss](https://github.com/parcel-bundler/lightningcss/issues/1184) *(github.com)*
- [CSS Overflow Navigation Controls · Issue #1161 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1161) *(github.com)*
- [\`scroll-marker-group\` CSS property flagged as 'Unknown property' · Issue #120 · microsoft/vscode-custom-data](https://github.com/microsoft/vscode-custom-data/issues/120) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [CSS scroll-marker-group modes Demo](https://codepen.io/Daniil-Sakhapov/pen/ogzQQYZ)
- [CSS scroll-marker-group modes Demo](https://codepen.io/Daniil-Sakhapov/pen/ZYpmmJE)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (59 found across 12 planned queries, 33 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 7

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

- **Momentum:** **High** (footprint 410 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The Language Detector API rolling out in Chrome 157 for Android brings local, privacy-preserving, and offline-capable text language identification to mobile web apps via built-in AI models. However, the ecosystem remains heavily fragmented as the feature lacks cross-browser consensus, sitting at Limited Availability with a negative position from Mozilla and an open, cautious posture from WebKit.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should treat this API strictly as a progressive enhancement. Because it is presently exclusive to Chromium-enabled environments and lacks cross-browser backing, fallback logic or lightweight JavaScript language-detection libraries remain necessary for universal support.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tomayac: "&gt; We have an open Pull Request to implement the proposed API into Mastodon, but we are waiting to have at least 2 browser engines support the proposal..."
- Standards Activity (Mozilla): Latest discussion from @sandstrom: "&gt; We are negative on this proposal. While we plan to describe the reasons further in \[our proposal\](https://github.com/mozilla/explainers/blob/main/tr..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome 157 Hits Beta With Language Detector on Android https://t.co/PH7rfD7JCx" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **21 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome 157 Hits Beta With Language Detector on Android https://t.co/PH7rfD7JCx](https://twitter.com/GeekChrome/status/2111079744636682606) — *Twitter / X by @GeekChrome (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Web Translation API](https://github.com/WebKit/standards-positions/issues/339) [open] `venue: WICG`, `from: Google`
  > *Latest discussion from @tomayac: "&gt; We have an open Pull Request to implement the proposed API into Mastodon, but we are waiting to have at least 2 browser engines support the proposal..."*
- **Mozilla:** [Web Translation API](https://github.com/mozilla/standards-positions/issues/1015) [closed] `position: negative`
  > *Latest discussion from @sandstrom: "&gt; We are negative on this proposal. While we plan to describe the reasons further in \[our proposal\](https://github.com/mozilla/explainers/blob/main/tr..."*

#### 📰 Ecosystem Blogs & Articles

- [Language detection with built-in AI \| AI in Chrome \| Chrome for Developers](https://developer.chrome.com/docs/ai/language-detection) *(developer.chrome.com)*
  > The \*\*Language Detector API\*\* is a built-in Web AI feature that allows web applications to detect the natural language of input text directly on the client side
- [appspot.com](https://cr-status.appspot.com/feature/5087964794322944) *(cr-status.appspot.com)*
  > By exposing this API on \*\*Chrome for Android (Clank)\*\*, mobile browsers can leverage fast, privacy-preserving, and offline-capable on-device machine learning models (such as lightweight Chromium or Google AI Edge task mo...
- [chromegeek.com](https://www.chromegeek.com/chrome-157-beta-language-detector-android) *(chromegeek.com)*
  > \*\*Context:\*\* Official roadmap tracking and release notes highlight that Chrome 157 brings the \`LanguageDetector\` JavaScript API over to Android While desktop versions of Chrome previously pioneered these built-in web AI ...
- [Language detection guide for Android \| Google AI Edge \| Google for Developers](https://developers.google.com/edge/mediapipe/solutions/text/language_detector/android) *(developers.google.com)*
  > \*\*Context:\*\* Technical guides outline how on-device language detection operates conceptually and code-wise (both on the web and natively on Android via Google's helper libraries) \*\*Significance:\*\* Emphasizes performance ...
- [Language detection guide for Web \| Google AI Edge \| Google for Developers](https://developers.google.com/edge/mediapipe/solutions/text/language_detector/web_js) *(developers.google.com)*
  > \*\*Context:\*\* Technical guides outline how on-device language detection operates conceptually and code-wise (both on the web and natively on Android via Google's helper libraries)
- [Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17246.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Da...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17246.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Da...
- [\[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17245.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android 'Jaewon Le...
- [\[blink-dev\] Web-Facing Change PSA: Language Detector API on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17765.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android 'Jaewon Lee' via blink-dev Fri, 16 Oct 2026 12...
- [\[blink-dev\] Re: Intent to Extend Experiment: Translator API](https://www.mail-archive.com/blink-dev@chromium.org/msg13425.html) *(mail-archive.com)* *(Cites: `https://github.com/webmachinelearning/translation-api`)*
  > &gt;&gt; &gt;&gt; For the 137-138 extension request, we plan a couple more, namely restricting &gt;&gt; from cross-origin iframes (but with a permission policy to delegate back), &gt;&gt; and removing worker support &gt;...
- [Intent to Ship: Translator API](https://groups.google.com/a/chromium.org/g/blink-dev/c/eCE8jIW2auo/m/mbz4xL7CAgAJ) *(groups.google.com · 2025-06-02T00:00:00)* *(Cites: `https://github.com/webmachinelearning/translation-api`)*
  > https://&lt;strong&gt;github.com/webmachinelearning/translation-api&lt;/strong&gt;/blob/main/README.md

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector) *(developer.mozilla.org)*
- [github.com](https://github.com/elevenlabs/captions.events/blob/main/CHROME_LANGUAGE_DETECTOR.md) *(github.com)*
- [Language Detector API · Issue #3717 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3717) *(github.com)*
- [Translator and Language Detector APIs - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Translator_and_Language_Detector_APIs) *(developer.mozilla.org)*
- [translator-api · GitHub Topics · GitHub](https://github.com/topics/translator-api) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `languagedetector` on [wpt.fyi](https://wpt.fyi/results?q=feature:languagedetector) (via webstatus.dev) — stable: Chrome 25% · Edge 75% · Firefox 25% · Safari 25%; experimental: Chrome 25% · Edge 75% · Firefox 25% · Safari 25%

#### 🌐 Web-features Group Context

*group-level data: web-features [`languagedetector`](https://webstatus.dev/features/languagedetector), shared with 1 other ChromeStatus feature*

- **Chrome usage:** 0.0021% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/425))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (66 found across 12 planned queries, 33 verified) · `Google Search Grounding (gemini-3.8-flash)` (7 found, 7 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (15 found, 1 verified) · `Hacker News Algolia` (5 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "languagedetector", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "languagedetector": Chrome 25% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 10

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
- **Analysis:** The Digital Credentials API (issuance support) extends browser-mediated identity handling to allow issuing bodies like universities and banks to provision credentials directly into user mobile wallets. Currently rolling out in Chrome (targeting Milestone 155), it relies heavily on native mobile infrastructure like Android's Credential Manager and OpenID4VCI protocols, though it lacks cross-browser interoperability and Baseline status.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams should treat this feature as strictly experimental, using it only behind flags or via feature detection while maintaining fallback flows (such as traditional deep links or QR codes) for users on Firefox, Safari, and older browser versions.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Update on Venue: https://github.com/w3c/strategy/issues/450  We also made strides on the OpenID / request format...."
- Standards Activity (Mozilla): Latest discussion from @RByers: "Hey Mozilla folks, is there anything you can share here about your position on the use of custom schemes like openid4vp://? Today Firefox allows infor..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Digital Credentials API](https://github.com/WebKit/standards-positions/issues/332) [closed] `position: support`, `concerns: interoperability`, `concerns: privacy`, `concerns: security`, `venue: WICG`, `concerns: venue`, `from: Google`, `from: Apple`, `concerns: annoyance`
  > *Latest discussion from @marcoscaceres: "Update on Venue: https://github.com/w3c/strategy/issues/450  We also made strides on the OpenID / request format...."*
- **Mozilla:** [Digital Credentials](https://github.com/mozilla/standards-positions/issues/1003) [closed] `position: negative`
  > *Latest discussion from @RByers: "Hey Mozilla folks, is there anything you can share here about your position on the use of custom schemes like openid4vp://? Today Firefox allows infor..."*

#### 📰 Ecosystem Blogs & Articles

- [Digital Credentials API for credential issuance \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/digital-credentials-api-143-issuance-ot) *(developer.chrome.com)*
  > The \*\*Digital Credentials API (issuance support)\*\* is an evolving web platform capability that streamlines how issuing entities (such as universities, banks, or government bodies) provision digital credentials directly i...
- [android.com](https://developer.android.com/identity/digital-credentials/credential-issuer/issue-credentials) *(developer.android.com)*
  > On mobile environments like Android, this leverages the \*\*Android IdentityCredential/Credential Manager\*\* system create()\` with protocols like OpenID4VCI, issuers can cleanly invoke device-level system sheets so users ca...
- [googleblog.com](https://android-developers.googleblog.com/2025/04/announcing-android-support-of-digital-credentials.html) *(android-developers.googleblog.com)*
  > \*\*Focus:\*\* Ecosystem-wide alignment on mobile operating system level support for open identity standards (OpenID4VP for presentation and OpenID4VCI for issuance) \*\*Key Takeaway:\*\* Explains how Android’s Jetpack Credentia...
- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Gy-NvwoSODo/m/UYrJvdQ1BwAJ) *(groups.google.com)*
  > Intent to Experiment: Digital Credentials API (issuance support) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent ...
- [Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14883.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Mike Taylor Sat, 18 ...
- [\[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14755.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 13 Oct 202...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Gy-NvwoSODo/m/UYrJvdQ1BwAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Intent to Experiment: Digital Credentials API (issuance support) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent ...
- [Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14883.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Mike Taylor Sat, 18 ...
- [\[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14755.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Digital Credentials API (issuance support) Chromestatus Mon, 13 Oct 202...
- [Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17416.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Digital Credentials API (issuance support) Rick Byers Wed, 09 Sep 2...
- [\[blink-dev\] Intent to Ship: Digital Credentials API (issuance support)](http://www.mail-archive.com/blink-dev@chromium.org/msg17347.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Digital Credentials API (issuance support) Chromestatus Wed, 02 Sep 2026 09:44:50 -...

#### 📚 Platform Documentation & References

- [eudi-doc-architecture-and-reference-framework/docs/discussion-topics/f-digital-credential-api.md at main · eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/blob/main/docs/discussion-topics/f-digital-credential-api.md) *(github.com)*
- [W3C Digital Credentials API publication: the next step to privacy-preserving identities on the web \| 2025 \| Blog \| W3C](https://www.w3.org/blog/2025/w3c-digital-credentials-api-publication-the-next-step-to-privacy-preserving-identities-on-the-web) *(w3.org)*
- [Topic F: Digital Credentials API (former known as browser API) · eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework · Discussion #361](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/discussions/361) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 12 planned queries, 33 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 3 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 10

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

- **Momentum:** **High** (footprint 370 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** The Protected Audience API (formerly FLEDGE) is slated for deprecation and removal in Chrome 153 following Google's decision to maintain third-party cookies. With ecosystem interest having collapsed and usage metrics dropping significantly, the feature is being phased out alongside other targeted Privacy Sandbox advertising components.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams should audit their applications to remove obsolete calls to \`joinAdInterestGroup()\` and \`run-ad-auction\`, and clean up any lingering \`Permissions-Policy\` HTTP headers or iframe attributes.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/6552486106234880) *(img544-dot-cr-status.appspot.com)*
  > The \*\*"Deprecate and Remove Protected Audience"\*\* entry on Chrome Platform Status marks the formal phaseout and removal of the Protected Audience API (formerly known as FLEDGE) \*\*Title:\*\* \*Deprecate and Remove Protected ...
- [google.com](https://privacysandbox.google.com/private-advertising/protected-audience-api/opt-out) *(privacysandbox.google.com)*
  > The \*\*"Deprecate and Remove Protected Audience"\*\* entry on Chrome Platform Status marks the formal phaseout and removal of the Protected Audience API (formerly known as FLEDGE) \*\*Permissions-Policy Cleanup:\*\* HTTP header...
- [secureprivacy.ai](https://secureprivacy.ai/blog/google-killed-privacy-sandbox-what-changes-for-cookie-consent-in-2026) *(secureprivacy.ai)*
  > However, following Google's decision to maintain the current approach to third-party cookies in Chrome rather than deprecating them completely, developer adoption of the API collapsed
- [Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > As a result, Chrome, MDN, and web documentation officially classified Protected Audience—along with associated APIs like Topics, Attribution Reporting, Private Aggregation, and Shared Storage—for deprecation and complete...
- [searchengineland.com](https://searchengineland.com/google-officially-shuts-down-privacy-sandbox-463561) *(searchengineland.com)*
  > As a result, Chrome, MDN, and web documentation officially classified Protected Audience—along with associated APIs like Topics, Attribution Reporting, Private Aggregation, and Shared Storage—for deprecation and complete...
- [Google Privacy Sandbox Update 2026: Why Google Shut It Down](https://segwise.ai/blog/google-privacy-sandbox-shutdown-reason) *(segwise.ai)*
  > \*\*Articles:\*\* \*Google Officially Shuts Down Privacy Sandbox Advertising APIs\* & \*Google Privacy Sandbox Update\*

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Deprecate and Remove: Protected Audience](http://www.mail-archive.com/blink-dev@chromium.org/msg17613.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > Re: \[blink-dev\] Intent to Deprecate and Remove: Protected Audience Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Deprecate and Remove: Protected Audience Yoav Weiss (@Shopify) Wed, 30 Sep 2026 08:51:09 ...
- [\[blink-dev\] Intent to Deprecate and Remove: Protected Audience](http://www.mail-archive.com/blink-dev@chromium.org/msg15140.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > \[blink-dev\] Intent to Deprecate and Remove: Protected Audience Skip to site navigation (Press enter) \[blink-dev\] Intent to Deprecate and Remove: Protected Audience Paul Jensen Fri, 07 Nov 2025 11:04:43 -0800 Intent to De...
- [Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1141) *(github.com · 2026-07-29T21:48:26)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in...
- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > Intent to Deprecate and Remove: Protected Audience Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate a...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Privacy_sandbox) *(developer.mozilla.org)*
- [Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1141) *(github.com)*
- [auction · GitHub Topics · GitHub](https://github.com/topics/auction?l=javascript) *(github.com)*
- [navigator · GitHub Topics · GitHub](https://github.com/topics/navigator?l=javascript) *(github.com)*
- [GitHub - GoogleChromeLabs/fledge-demo-remote · GitHub](https://github.com/GoogleChromeLabs/fledge-demo-remote) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (64 found across 11 planned queries, 31 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **High** (footprint 360 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** JPEG XL (\`image/jxl\`) decoding support has officially achieved cross-browser availability, marked by Chrome 155 enabling the format by default in Blink using \`jxl-rs\`, a memory-safe pure Rust decoder developed by Google Research. Following Safari's baseline adoption in version 17 and Firefox enabling default support in version 158, all major browser engines now support native JXL decoding. The browser consensus has shifted from past C++ attack surface concerns to enthusiastic alignment around a shared, memory-safe Rust architecture.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams should implement JPEG XL today using progressive enhancement via standard HTML \`&lt;picture&gt;\` elements or HTTP \`Accept\` header negotiation with AVIF/WebP fallbacks. Image-heavy platforms and asset pipelines should also evaluate bit-for-bit lossless JPEG XL transcoding, which can immediately trim up to 20% of image storage and transfer bytes without altering source pixels.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "@chrylis @mattbramanti @fahdpar23 JPEG-XL beats PNG on nearly every technical front: lossless files typically 20-50% sma" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **2 new community discussions** found
- 📰 **14 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [@chrylis @mattbramanti @fahdpar23 JPEG-XL beats PNG on nearly every technical front: lossless files typically 20-50% sma](https://twitter.com/grok/status/2110731126218039352) — *Twitter / X by @grok (0 likes/RTs, 0 replies)*
- 🐦 [Chrome 155 will ship decoding support for JPEG XL (.jxl).  It's a next-gen format built for devs &amp; photographers: 30](https://twitter.com/sandeepranjan_/status/2109742562831675539) — *Twitter / X by @sandeepranjan\_ (0 likes/RTs, 0 replies)*
- 🐦 [Addy Osmani on X: "Sneak Preview: JPEG XL decoding working in Chrome - 65% smaller than a JPEG at comparable quality. JXL aims to offer better image quality at low sizes, progressive decoding, lossless JPEG recompression and more: https://t.co/sErChStUHZ" / X](https://twitter.com/addyosmani/status/1379841205098311681?lang=en) — *Twitter / X by @addyosmani (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [biggo.com](https://finance.biggo.com/news/7ec0cac0-10ec-457a-a8ed-e8598414dc9f) *(finance.biggo.com)*
  > Recent developer articles, tutorials, official announcements, and community reactions highlight the re-introduction of \*\*JPEG XL (\`image/jxl\`) decoding support in Blink/Chromium\*\* Chrome officially enabled JPEG XL by def...
- [dev.to](https://dev.to/leobaniak/chrome-155-decodes-jpeg-xl-and-the-decoder-is-written-in-rust-jg) *(dev.to)*
  > Recent developer articles, tutorials, official announcements, and community reactions highlight the re-introduction of \*\*JPEG XL (\`image/jxl\`) decoding support in Blink/Chromium\*\* Chrome officially enabled JPEG XL by def...
- [Shipping JPEG XL in Chrome \| Hacker News](https://news.ycombinator.com/item?id=49991227) *(news.ycombinator.com)*
  > The comeback was enabled by the development of \*\*\`jxl-rs\`\*\*, a memory-safe, SIMD-accelerated pure Rust decoder developed by the JPEG XL / Google Research team Discussions on \*\*Hacker News\*\*, \*\*Reddit (\`r/rust\`, \`r/webdev...
- [r/rust on Reddit: Shipping JPEG XL in Chrome (via jxl-rs, a decoder written in Rust)](https://www.reddit.com/r/rust/comments/1x03ajn/shipping_jpeg_xl_in_chrome_via_jxlrs_a_decoder) *(reddit.com)*
  > \*\*Article:\*\* \*"Shipping JPEG XL in Chrome (via jxl-rs, a decoder written in Rust)"\* by Luca Versari, Moritz Firsching, and Philip Jägenstedt Security researchers and web developers praised Google Research and Chromium fo...
- [Integrating JPEG XL in Chromium with jxl-rs - Helmut Januschka](https://www.januschka.com/chromium-jxl-resurrection.html) *(januschka.com)*
  > \*\*Helmut Januschka's Engineering Blog:\*\* \*"Integrating JPEG XL in Chromium with jxl-rs"\* \*\*Technical Journey:\*\* Details the pivot from Phase 1 (an abandoned C++ \`libjxl\` integration due to memory safety concerns) to Phas...
- [adyog.com](https://pulse.adyog.com/insights/chrome-155-jpeg-xl-rust-decoder) *(pulse.adyog.com)*
  > \*\*DEV Community & WebPulse Analysis:\*\* \*"Chrome 155 decodes JPEG XL, and the decoder is written in Rust"\* \*\*Architectural Impact:\*\* Explores the security precedent set by Chromium adopting Rust for high-risk network pars...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > Intent to Ship: JPEG XL decoding support (image/jxl) in blink Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to ...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/libjxl/jxl-rs) *(github.com)*
- [JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1086) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `jpegxl` on [wpt.fyi](https://wpt.fyi/results?q=feature:jpegxl) (via webstatus.dev) — stable: Chrome 96.9% · Edge 4.6% · Firefox 93.8% · Safari 56.9%; experimental: Chrome 98.5% · Edge 4.6% · Firefox 98.5% · Safari 58.5%

#### 🌐 Web-features Group Context

*group-level data: web-features [`jpegxl`](https://webstatus.dev/features/jpegxl), shared with 2 other ChromeStatus features*

- **Chrome usage:** 0.016% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/418))
- **Mozilla:** neutral ([standards position](https://github.com/mozilla/standards-positions/issues/522))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 11 planned queries, 29 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 10 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Tweets found by web search` (7 found, 1 verified) · `Dev.to Community Blogs` (0 found, 2 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "jpegxl", shared with 2 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "jpegxl": Chrome 96.9% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **High** (footprint 355 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The \`position-visibility: anchor-valid\` property value (formerly \`anchors-valid\`) has been stabilized and implemented to automatically hide anchor-positioned elements like tooltips or dropdowns if their default anchor reference cannot be resolved. Following recent spec clarifications resolving ambiguities around multi-anchor definitions, the feature has been successfully shipped in modern browser milestones, driving improved alignment across the CSS Anchor Positioning ecosystem.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams can start utilizing \`anchor-valid\` with standard feature queries or fallbacks, ensuring they migrate away from any legacy pluralized syntax (\`anchors-valid\`) which has been deprecated.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Suggest positive...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **17 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **Mozilla:** [\`position-visibility: anchor-valid\`](https://github.com/mozilla/standards-positions/issues/1457) [open] `topic: CSS`
  > *Latest discussion from @emilio: "Suggest positive...."*

#### 📰 Ecosystem Blogs & Articles

- [position-visibility \| CSS-Tricks](https://css-tricks.com/almanac/properties/p/position-visibility) *(css-tricks.com)*
  > The \`position-visibility\` property is an essential component of the CSS Anchor Positioning module The \`position-visibility\` property is an essential component of the CSS Anchor Positioning module, designed to automatical...
- [Anchor positioning \| web.dev](https://web.dev/learn/css/anchor-positioning) *(web.dev)*
  > The \`position-visibility\` property is an essential component of the CSS Anchor Positioning module, designed to automatically hide a positioned element (like a tooltip or dropdown) under specific layout breakdown conditio...
- [chromestatus.com](https://chromestatus.com/feature/5136123851571200) *(chromestatus.com)*
  > Following CSS Working Group resolutions, the feature has been officially \*\*renamed to the singular \`anchor-valid\`\*\* Recent entries on Chrome Platform Status map out the renaming from \`anchors-valid\` to \`anchor-valid\` (al...
- [oddbird.net](https://www.oddbird.net/2025/01/29/anchor-position-validity) *(oddbird.net)*
  > Articles tracking CSS Anchor Positioning have continuously highlighted developer frustration when anchors fail silently (e.g., when dynamic content removes an anchor or scope rules fail, leaving floating elements strande...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17557.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Chris Harrelson Fri, 25 Sep 2026 09:36...
- [\[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17542.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mason Freed Wed, 23 Sep 2026 15:56:11 -0700 \*C...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17557.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Chris Harrelson Fri, 25 Sep 2026 09:36...
- [\[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17542.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136856479039488`)*
  > \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Mason Freed Wed, 23 Sep 2026 15:56:11 -0700 \*C...
- [csswg-drafts/css-anchor-position-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-anchor-position-1/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-visibility`)*
  > csswg-drafts/css-anchor-position-1/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab o...
- [CSS Anchor Positioning Module Level 1](https://www.w3.org/TR/css-anchor-position-1) *(w3.org · 2026-03-27T00:00:00)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-visibility`)*
  > https://www.w3.org/TR/css-anchor-position-1/ Editor&#x27;s Draft: https://&lt;strong&gt;drafts.csswg.org/css-anchor-position-1&lt;/strong&gt;/ History: https://www.w3.org/standards/history/css-anchor-position-1/ Feedback: CSSWG Issu...
- [1838746 - (css-anchor-position-1) \[META\] \[css-anchor-position-1\] Implement CSS Anchor Positioning](https://bugzilla.mozilla.org/show_bug.cgi?id=1838746) *(bugzilla.mozilla.org)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-visibility`)*
  > 1838746 - (css-anchor-position-1) \[META\] \[css-anchor-position-1\] Implement CSS Anchor Positioning Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Pas...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/mdn/browser-compat-data/actions/runs/29490028018) *(github.com)*
- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [csswg-drafts/css-anchor-position-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-anchor-position-1/Overview.bs) *(github.com)*
- [CSS Anchor Positioning Module Level 1](https://www.w3.org/TR/css-anchor-position-1) *(w3.org)*
- [1838746 - (css-anchor-position-1) \[META\] \[css-anchor-position-1\] Implement CSS Anchor Positioning](https://bugzilla.mozilla.org/show_bug.cgi?id=1838746) *(bugzilla.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 96.7% · Edge 96.1% · Firefox 84.3% · Safari 93.3%; experimental: Chrome 96.9% · Edge 97% · Firefox 86.6% · Safari 93.7%

#### 🌐 Web-features Group Context

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- **Chrome usage:** 0.073% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (54 found across 11 planned queries, 31 verified) · `Google Search Grounding (gemini-3.8-flash)` (7 found, 6 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(group "anchor-positioning", shared with 8 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "anchor-positioning": Chrome 96.7% passing (stable))*
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

- **Momentum:** **High** (footprint 355 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Analysis:** The Long Animation Frames (LoAF) API has been expanded to include granular sub-metrics like \`styleDuration\` and \`forcedStyleDuration\` (along with layout durations), offering unprecedented visibility into CSS performance bottlenecks. While fully enabled in Chromium-based browsers, it lacks baseline interoperability as other engines have yet to ship matching implementations.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can leverage these granular metrics in Chromium/Edge environments today for advanced Real User Monitoring (RUM) and performance debugging. Because it functions as an additive diagnostic API, it can be progressively adopted wherever supported without breaking fallback experiences.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tunetheweb: "Answering for @noamr who’s on annual leave at the moment.  This started off as part of the long tasks spec—hence the links in the original request in ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **16 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Performance timeline - Long Animation Frames](https://github.com/WebKit/standards-positions/issues/283) [open] 
  > *Latest discussion from @tunetheweb: "Answering for @noamr who’s on annual leave at the moment.  This started off as part of the long tasks spec—hence the links in the original request in ..."*

#### 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://learn.microsoft.com/ga-ie/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > The \*\*Long Animation Frames (LoAF) API\*\* has been expanded to include granular sub-metrics—specifically \*\*\`styleDuration\`\*\*, \*\*\`forcedStyleDuration\`\*\*, \*\*\`layoutDuration\`\*\*, and \*\*\`forcedLayoutDuration\`\*\* Browser platfor...
- [Long Animation Frames API \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/long-animation-frames) *(developer.chrome.com)*
  > Previously, the API provided a high-level \`styleAndLayoutStart\` timestamp and an aggregated total duration for rendering-related tasks
- [mironsoft.de](https://www.mironsoft.de/en/blog/performance-long-animation-frames-api-loaf-diagnostics) *(mironsoft.de)*
  > Previously, the API provided a high-level \`styleAndLayoutStart\` timestamp and an aggregated total duration for rendering-related tasks
- [appspot.com](https://cr-status.appspot.com/release-notes/157) *(cr-status.appspot.com)*
  > Browser platform updates (such as Chrome and Microsoft Edge platform releases) highlight this feature as a critical upgrade for web performance tooling
- [debugbear.com](https://www.debugbear.com/blog/long-animation-frames) *(debugbear.com)*
  > Ecosystem reactions from performance monitoring blogs (like DebugBear and RUM providers) emphasize that diagnosing INP bottlenecks requires understanding what happens \*outside\* of raw JavaScript execution
- [chrome.com](https://developer.chrome.com/blog/loaf-has-shipped) *(developer.chrome.com)*
  > Ecosystem reactions from performance monitoring blogs (like DebugBear and RUM providers) emphasize that diagnosing INP bottlenecks requires understanding what happens \*outside\* of raw JavaScript execution

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17740.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Philip Jägenst...
- [\[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17610.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Alex Russell Wed, 30 S...
- [\[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17594.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5171478175809536`)*
  > \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Yoav Weiss (@Shopify) Wed, 30 ...
- [\[blink-dev\] Intent to Prototype: Long Animation Frames style duration](https://www.mail-archive.com/blink-dev@chromium.org/msg15596.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Yoav Weiss (@Shopify) Mon, 19 Jan 2026 02:...

#### 📚 Platform Documentation & References

- [Long Animation Frames style and Layout duration · Issue #4453 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4453) *(github.com)*
- [w3.org](https://www.w3.org/TR/long-animation-frames) *(w3.org)*
- [Long Animation Frames style and layout duration · Issue #1615 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1615) *(github.com)*
- [Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/39) *(github.com)*
- [Long Animation Frames API · Issue #1372 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1372) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (52 found across 11 planned queries, 26 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 8 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (6 found, 2 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (3 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

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

- **Momentum:** **High** (footprint 350 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** The 'Renewed HTML insertion & streaming methods' feature unifies and modernizes dynamic markup injection and parsing into a coherent set of positional, streaming, and safe/unsafe variants. It is enabled by default in Chrome, addressing historical developer fragmentation issues related to disjointed APIs like insertAdjacentHTML.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams can begin experimenting with the new positional and streaming insertion methods behind modern browser flags or in Chrome, using feature detection or progressive enhancement strategies for broader cross-browser compatibility.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @o-t-w: "This feature is due to ship in \[Chrome 154\](https://developer.chrome.com/blog/chrome-154-beta?hl=en#renewed\_html\_insertion\_and\_streaming\_methods). Moz..."
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [HTML streaming & revamped DOM parsing](https://github.com/WebKit/standards-positions/issues/629) [open] `topic: html`, `venue: WHATWG HTML Workstream`, `from: Google`
  > *Latest discussion from @o-t-w: "This feature is due to ship in \[Chrome 154\](https://developer.chrome.com/blog/chrome-154-beta?hl=en#renewed\_html\_insertion\_and\_streaming\_methods). Moz..."*
- **Mozilla:** [HTML streaming & revamped DOM parsing](https://github.com/mozilla/standards-positions/issues/1370) [closed] `venue: WHATWG`, `position: positive`, `topic: API`
  > *Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."*

#### 📰 Ecosystem Blogs & Articles

- [daily.dev](https://daily.dev/posts/declarative-partial-updates-5buxplifg) *(daily.dev)*
  > The \*\*"Renewed HTML insertion & streaming methods"\*\* (often discussed under the broader browser initiatives for \*Declarative Partial Updates\* and \*Dynamic markup - revamped\*) The \*\*"Renewed HTML insertion & streaming met...
- [chrome.com](https://developer.chrome.com/docs/web-platform/declarative-partial-updates) *(developer.chrome.com)*
  > \*\*Streaming Methods:\*\* Introduction of streaming variants such as \`streamHTML\` and \`streamAppendHTML\` (along with unsafe counterparts like \`stream{Append}HTML{Unsafe}\`) which return a standard \`WritableStream\`, allowing ...
- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, ...
- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700...
- [RE: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17049.html) *(mail-archive.com)*
  > RE: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) RE: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods 'Daniel Clark' via blink-dev...
- [\[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17004.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods 'Dan Clark' via blink-dev Mon, 20 Ju...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, ...
- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700...
- [Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30463) *(github.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance...
- [New HTML setters by tunetheweb · Pull Request #46127 · mdn/content](https://github.com/mdn/content/pull/46127) *(github.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > New HTML setters by tunetheweb · Pull Request #46127 · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or windo...
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com · 2026-06-17T18:03:04)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with...

#### 📚 Platform Documentation & References

- [Patching and HTML Streaming methods · Issue #1471 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1471) *(github.com)*
- [Move TrustedParserOptions to TrustedHTMLParserOptions by tunetheweb · Pull Request #30463 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30463) *(github.com)*
- [New HTML setters by tunetheweb · Pull Request #46127 · mdn/content](https://github.com/mdn/content/pull/46127) *(github.com)*
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com)*
- [GitHub - WICG/declarative-partial-updates · GitHub](https://github.com/WICG/declarative-partial-updates) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `domparser` on [wpt.fyi](https://wpt.fyi/results?q=feature:domparser) (via webstatus.dev) — stable: Chrome 90.5% · Edge 85.7% · Firefox 95.2% · Safari 81%; experimental: Chrome 90.5% · Edge 90.5% · Firefox 95.2% · Safari 90.5%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (63 found across 11 planned queries, 30 verified) · `Google Search Grounding (gemini-3.8-flash)` (4 found, 3 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 2 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "domparser", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "domparser": Chrome 90.5% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 6

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

- **Momentum:** **High** (footprint 341 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The margin-trim CSS property enables containers to cleanly discard adjoining child margins, eliminating classic container-edge spacing bugs and fragile structural selectors. Long pioneered exclusively by Safari since version 16.4, the specification underwent refinements to focus on block and multi-column containers, with Chromium shipping default enablement in Chrome 155. Cross-browser Baseline availability remains limited, but engine consensus is firmly positive across all major vendors.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt margin-trim strictly as a progressive enhancement using @supports (margin-trim: block) rules while keeping flex/grid gap or structural pseudo-class resets as fallbacks. Development teams should experiment with it in design system card and typographic containers now to prepare for multi-engine Baseline adoption.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Sounds good. Closing without a dashboard entry, as it seems like a minor feature...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Easier Layout with Margin-Trim" (8 points, 1 comments).

#### ⚡ What Happened This Week

- 💬 **2 new community discussions** found
- 📰 **8 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Easier Layout with Margin-Trim](https://news.ycombinator.com/item?id=43858089) — *Hacker News (8 pts, 1 comments)*
- 🐦 [@sanyampunia margin-trim quietly retiring a whole generation of :first-child { margin-top: 0 } hacks](https://twitter.com/adityareddydev/status/2110468686096277747) — *Twitter / X by @adityareddydev (2 likes/RTs, 0 replies)*
- 🐦 [css tip 🚫  𝚖𝚊𝚛𝚐𝚒𝚗-𝚝𝚛𝚒𝚖: 𝚋𝚕𝚘𝚌𝚔 stops a card's first and last child from adding their margins to its paddi](https://twitter.com/sanyampunia/status/2110389461603455048) — *Twitter / X by @sanyampunia (179 likes/RTs, 2 replies)*
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
- [Removing Margins at a Container's Edges with CSS margin-trim](https://azukiazusa.dev/en/blog/css-margin-trim) *(azukiazusa.dev)*
  > Removing Margins at a Container's Edges with CSS margin-trim azukiazusa.dev blog about talks recap ja en azukiazusa.dev Search ⌘ K ja en Back to blog This article was translated from Japanese by AI and may contain inaccu...
- [margin-trim \| CSS-Tricks](https://css-tricks.com/almanac/properties/m/margin-trim) *(css-tricks.com)*
  > \*\*Focus:\*\* Syntax reference and interactive demos \*\*Key Takeaway:\*\* Covers the logical property values—\`block-start\`, \`block-end\`, \`inline-start\`, \`inline-end\`, and shorthands \`block\` and \`inline\`
- [rachelandrew.co.uk](https://rachelandrew.co.uk/archives/2026/09/15/remove-start-and-end-margins-with-the-margin-trim-property) *(rachelandrew.co.uk)*
  > \*\*Focus:\*\* Multicolumn (\`multicol\`) containers \*\*Key Takeaway:\*\* Rachel Andrew explores a niche but notorious CSS issue: in multi-column layouts, when a paragraph breaks to the top of a new column, its top margin does no...
- [smashingmagazine.com](https://www.smashingmagazine.com/2023/11/few-ways-css-easier-write-2023) *(smashingmagazine.com)*
  > \*\*Focus:\*\* Architecture, component systems, and comparison with \`gap\` Geoff Graham (Smashing Magazine) notes that while Flexbox and Grid solved this between items using \`gap\`, regular block flow layouts still needed an e...
- [New CSS Property margin-trim - Web Dev Simplified Blog](https://blog.webdevsimplified.com/2023-12/margin-trim) *(blog.webdevsimplified.com)*
  > \*\*Focus:\*\* Architecture, component systems, and comparison with \`gap\` \*\*Key Takeaway:\*\* Both outlets discuss the architectural friction of using \`:last-child\` selectors in modern component systems

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: Margin-trim](http://www.mail-archive.com/blink-dev@chromium.org/msg17210.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5197863732772864`)*
  > Re: \[blink-dev\] Intent to Ship: Margin-trim Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Margin-trim Mike Taylor Tue, 18 Aug 2026 08:33:38 -0700 LGTM1 On 8/18/26 4:15 a.m., Morten Stenshorne wrot...
- [\[blink-dev\] Intent to Ship: Margin-trim](http://www.mail-archive.com/blink-dev@chromium.org/msg17204.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5197863732772864`)*
  > \[blink-dev\] Intent to Ship: Margin-trim Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Margin-trim Morten Stenshorne Tue, 18 Aug 2026 01:16:14 -0700 \*Contact emails\* \[email&#160;protected\] \*Specificati...

#### 📚 Platform Documentation & References

- [margin-trim CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-trim) *(developer.mozilla.org)*
- [margin-trim CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-trim) *(developer.mozilla.org)*
- [margin-trim · Issue #201 · web-platform-dx/developer-signals](https://github.com/web-platform-dx/developer-signals/issues/201) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `margin-trim` on [wpt.fyi](https://wpt.fyi/results?q=feature:margin-trim) (via webstatus.dev) — stable: Chrome 47.2% · Edge 47.2% · Firefox 2.8% · Safari 91.5%; experimental: Chrome 47.2% · Edge 47.2% · Firefox 2.8% · Safari 41.5%

#### 🌐 Web-features Group Context

*group-level data: web-features [`margin-trim`](https://webstatus.dev/features/margin-trim)*

- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/994))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (63 found across 11 planned queries, 24 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 8 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Tweets found by web search` (6 found, 3 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (1 found, 1 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (10 found, 10 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "margin-trim", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "margin-trim": Chrome 47.2% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 4

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

- **Momentum:** **Moderate** (footprint 340 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** The 'Avoid caching module failures' update resolves a longstanding flaw in the HTML specification where transient network or HTTP fetch failures were permanently cached in the document's module map. With the merge of the specification update in the WHATWG HTML standard, all major browser engines have moved to align, eliminating sticky fetch errors and allowing dynamic imports to be retried. The platform consensus shifts module loading priorities from strict failure determinism toward real-world network resilience.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should audit their critical dynamic import and code-splitting boundaries to implement bounded retry wrappers with exponential backoff for failed imports instead of relying immediately on full page reloads. However, developers must still retain fallback reload logic for production deployment churn, as missing hashed chunks from new deployments or JavaScript evaluation failures will still fail across retries.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **18 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [trade-assistance.com](https://trade-assistance.com/blog/chrome-stops-caching-failed-module-imports-retry-dynamic-import) *(trade-assistance.com)*
  > Historically, the HTML specification required browsers to maintain a per-document \*\*module map\*\* where all fetched modules were recorded Under the previous specification behavior, if a dynamic import (\`import()\`) or modu...
- [javascript - Failed to fetch dynamically imported module - Stack Overflow](https://stackoverflow.com/questions/72376333/failed-to-fetch-dynamically-imported-module) *(stackoverflow.com)*
  > Historically, the HTML specification required browsers to maintain a per-document \*\*module map\*\* where all fetched modules were recorded Libraries like \`@fatso83/retry-dynamic-import\` and custom cache-busting query strin...
- [iloveblogs.blog](https://www.iloveblogs.blog/post/failed-to-fetch-dynamically-imported-module) *(iloveblogs.blog)*
  > The specification change (\*\*WHATWG HTML PR #10327: "Don't cache HTTP errors in the module map"\*\*) shifted the platform’s tradeoff from strict determinism toward availability Originating from discussions going back to WHA...
- [appspot.com](https://img120-dot-cr-status.appspot.com) *(img120-dot-cr-status.appspot.com)*
  > Chrome introduced this feature in \*\*Chrome 155 Beta\*\* and shipped it enabled by default in \*\*Chrome 156\*\*
- [appspot.com](https://cr-status.appspot.com) *(cr-status.appspot.com)*
  > Chrome introduced this feature in \*\*Chrome 155 Beta\*\* and shipped it enabled by default in \*\*Chrome 156\*\*
- [stackoverflow.com](https://stackoverflow.com/questions/79991193/react-lazy-permanently-caches-a-failed-dynamic-import-how-can-i-retry-a-route) *(stackoverflow.com)*
  > lazy\`) and Vite setups Articles and community guides (such as analyses on Sentry, Vite issue #11804, and community posts) highlight that native retryability allows route-level error boundaries to offer "Retry" buttons th...

#### 🔗 Inbound Citations & Reverse Links

- [Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30754) *(github.com)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with a...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17429.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Mike Taylor Thu, 10 Sep 2026 07:33:43 -0700 LGTM - thanks!...
- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com · 2026-09-14T08:09:53)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17434.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 12:16:49 -0700 On T...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 08:43:49 -0700 \*Contact ema...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/vitejs/vite/issues/11804?timeline_page=1) *(github.com)*
- [github.com](https://github.com/mdn/browser-compat-data/issues/30304) *(github.com)*
- [github.com](https://github.com/whatwg/html/issues/6768) *(github.com)*
- [w3.org](https://www.w3.org/groups/cg/webdx/activity) *(w3.org)*
- [github.com](https://github.com/denoland/deno/issues/36057) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (60 found across 12 planned queries, 23 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 14 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (footprint 340 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** ServiceWorkerAutoPreload has successfully merged into the W3C Service Worker specification and is rolling out across Chromium-based engines as a browser-level optimization to eradicate worker cold-start latency. By dispatching navigation requests concurrently during service worker bootstrap and reusing the in-flight response inside fetch handlers, the feature transparently solves a long-standing PWA performance bottleneck. Cross-vendor alignment is firmly established following Mozilla's formal endorsement and collaborative refinement during the specification process.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams do not need to modify standard pass-through fetch handlers to reap the latency improvements, as browser engines apply the parallel fetch automatically. However, developers should audit complex service worker pipelines that clone navigation requests and consider pairing their implementation with the Service Worker Static Routing API for fine-grained routing control.
- Standards Activity (WebKit): Latest discussion from @sisidovski: "&gt; How does this avoid potential problems with the main document and service worker having different policies in place? E.g., you might end up preloadi..."
- Standards Activity (Mozilla): Latest discussion from @asutherland: "This is somewhat moot since https://github.com/w3c/ServiceWorker/pull/1756 merged into the spec in late July with feedback from webkit in addition to ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [ServiceWorkerAutoPreload](https://github.com/WebKit/standards-positions/issues/359) [open] `topic: service workers`
  > *Latest discussion from @sisidovski: "&gt; How does this avoid potential problems with the main document and service worker having different policies in place? E.g., you might end up preloadi..."*
- **Mozilla:** [ServiceWorkerAutoPreload](https://github.com/mozilla/standards-positions/issues/1036) [closed] `position: positive`, `team: DOM`
  > *Latest discussion from @asutherland: "This is somewhat moot since https://github.com/w3c/ServiceWorker/pull/1756 merged into the spec in late July with feedback from webkit in addition to ..."*

#### 📰 Ecosystem Blogs & Articles

- [Service workers \| web.dev](https://web.dev/learn/pwa/service-workers) *(web.dev)*
  > \*\*"Optional browser optimization for Service Workers"\*\* (tracked as \*\*\`ServiceWorkerAutoPreload\`\*\*) addresses a long-standing performance challenge with Progressive Web Apps (PWAs): \*\*Service Worker cold-start latency\*\* ...
- [Microsoft Edge Browser Policy Documentation ServiceWorkerAutoPreloadEnabled \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/serviceworkerautopreloadenabled) *(learn.microsoft.com)*
  > Historically, when a user navigates to a service worker–controlled page and the worker is inactive, the browser must wait to boot up the worker process before the \`fetch\` handler can intercept the request \*\*Parallel Exec...
- [ServiceWorkerAutoPreloadEnabled: Allow ServiceWorker to dispatch navigation requests without waiting for its startup \| Chrome Enterprise](https://chromeenterprise.google/policies/service-worker-auto-preload-enabled) *(chromeenterprise.google)*
  > If the fetch handler falls back or does not intercept the navigation, the preloaded response is passed directly through to the browser navigation pipeline Because many sites simply fallback to network or proxy unmodified...
- [github.io](https://mozilla.github.io/standards-positions/?ref=zacharyschneider.ca) *(mozilla.github.io)*
  > Mozilla evaluated \`ServiceWorkerAutoPreload\` and assigned it a \*\*positive\*\* rating, viewing browser-level speculative fetching as a welcome enhancement for real-world web app responsiveness
- [Intent to Experiment: ServiceWorkerAutoPreload](https://groups.google.com/a/chromium.org/g/blink-dev/c/AkA4s1_R8H4) *(groups.google.com)*
  > Intent to Experiment: ServiceWorkerAutoPreload Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Ser...
- [Re: \[EXTERNAL\] \[blink-dev\] Intent to Ship: ServiceWorkerAutoPreload](https://www.mail-archive.com/blink-dev@chromium.org/msg14290.html) *(mail-archive.com)*
  > Re: \[EXTERNAL\] \[blink-dev\] Intent to Ship: ServiceWorkerAutoPreload Skip to site navigation (Press enter) Re: \[EXTERNAL\] \[blink-dev\] Intent to Ship: ServiceWorkerAutoPreload Yoshisato Yanagisawa Sun, 27 Jul 2025 22:06:39...

#### 🔗 Inbound Citations & Reverse Links

- [Optional browser optimization for Service Workers (ServiceWorkerAutoPreload) · Issue #32 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/32) *(github.com · 2026-09-14T08:09:53)* *(Cites: `https://chromestatus.com/feature/5194817700364288`)*
  > Optional browser optimization for Service Workers (ServiceWorkerAutoPreload) · Issue #32 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up App...
- [Intent to Experiment: ServiceWorkerAutoPreload](https://groups.google.com/a/chromium.org/g/blink-dev/c/AkA4s1_R8H4) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5194817700364288`)*
  > Intent to Experiment: ServiceWorkerAutoPreload Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Ser...
- [Re: \[EXTERNAL\] \[blink-dev\] Intent to Ship: ServiceWorkerAutoPreload](https://www.mail-archive.com/blink-dev@chromium.org/msg14290.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194817700364288`)*
  > Re: \[EXTERNAL\] \[blink-dev\] Intent to Ship: ServiceWorkerAutoPreload Skip to site navigation (Press enter) Re: \[EXTERNAL\] \[blink-dev\] Intent to Ship: ServiceWorkerAutoPreload Yoshisato Yanagisawa Sun, 27 Jul 2025 22:06:39...
- [Microsoft Edge Browser Policy Documentation ServiceWorkerAutoPreloadEnabled \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-browser-policies/serviceworkerautopreloadenabled) *(learn.microsoft.com)* *(Cites: `https://github.com/WICG/service-worker-auto-preload`)*
  > Microsoft Edge Browser Policy Documentation ServiceWorkerAutoPreloadEnabled \| Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take ...
- [Re: \[EXTERNAL\] \[blink-dev\] Intent to Ship: ServiceWorkerAutoPreload](https://www.mail-archive.com/blink-dev@chromium.org/msg14288.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/service-worker-auto-preload`)*
  > Re: \[EXTERNAL\] \[blink-dev\] Intent to Ship: ServiceWorkerAutoPreload Skip to site navigation (Press enter) Re: \[EXTERNAL\] \[blink-dev\] Intent to Ship: ServiceWorkerAutoPreload Shunya Shishido Sun, 27 Jul 2025 21:05:17 -070...

#### 📚 Platform Documentation & References

- [w3.org](https://www.w3.org/2024/Talks/TPAC/breakouts/sw-for-performance.pdf) *(w3.org)*
- [github.com](https://github.com/vaadin/flow/issues/22954) *(github.com)*
- [ServiceWorkerAutoPreload · Issue #359 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/359) *(github.com)*
- [Optional browser optimization for Service Workers (ServiceWorkerAutoPreload) · Issue #32 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/32) *(github.com)*
- [Service Worker Auto Preload feature in incubation from Chris Wilson on 2025-05-20 (public-new-work@w3.org from May 2025)](https://lists.w3.org/Archives/Public/public-new-work/2025May/0008.html) *(lists.w3.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (63 found across 12 planned queries, 28 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 7 verified) · `Twitter / X API v2` *(found 6 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 3

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

- **Momentum:** **Moderate** (footprint 338 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"single axis scroll containers webkit mozilla standards positions"`, `"single axis scroll containers css overflow clip scroll"`
- **Analysis:** Single-axis scroll containers resolve a decade-old CSS limitation by permitting scrollable overflow values to pair with \`clip\`, ending the automatic coercion of containers into two-dimensional scrollers. Chromium leads implementation by enabling the capability by default in Chrome 156 following extensive testing channels, resolving foundational pain points for simultaneous horizontal scrolling and vertical sticky positioning. While the W3C CSS Working Group formally resolved the specification change under Issue #865 and the W3C TAG closed review as satisfied, multi-engine interoperability is still pending stable rollouts across Gecko and WebKit.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt single-axis scrolling through progressive enhancement today by gating paired declarations such as \`overflow: auto clip\` behind \`@supports (overflow: auto clip)\` blocks while maintaining legacy fallbacks. Additionally, audit existing interfaces that rely on programmatic DOM scrolling or snap points to verify that locking an axis with \`clip\` does not break intended script-driven viewport adjustments.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @freedebreuil: "&gt; How does this play with touch-action?  Thanks, good point. I think the right model is that scroll containers are now per-axis. For \`touch-action\`, t..."
- Standards Activity (W3C TAG): Latest discussion from @lukewarlow: "Hi @freedebreuil the TAG has discussed this and we're satisfied with this change.  Thanks for flying TAG..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Some CSS features are notoriously hard to detect when they update underlying behaviors. But now you can with \`@ supports" (139 points, 3 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **13 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Some CSS features are notoriously hard to detect when they update underlying behaviors. But now you can with \`@ supports](https://twitter.com/ChromiumDev/status/2109711660315296175) — *Twitter / X by @ChromiumDev (139 likes/RTs, 3 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/680) [open] `topic: css`, `from: Google`, `topic: scrolling`
- **Mozilla:** [Single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1418) [open] `venue: W3C`, `topic: CSS`
  > *Latest discussion from @freedebreuil: "&gt; How does this play with touch-action?  Thanks, good point. I think the right model is that scroll containers are now per-axis. For \`touch-action\`, t..."*
- **W3C TAG:** [Other Spec Review: Single-Axis Scroll Containers](https://github.com/w3ctag/design-reviews/issues/1222) [closed] `Resolution: satisfied`, `Review type: later review`, `Missing: Multi-stakeholder support`
  > *Latest discussion from @lukewarlow: "Hi @freedebreuil the TAG has discussed this and we're satisfied with this change.  Thanks for flying TAG..."*

#### 📰 Ecosystem Blogs & Articles

- [Ready for developer testing: Single-axis scroll containers \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/single-axis-scroll-containers-ready-for-testing) *(developer.chrome.com)*
  > Ready for developer testing: Single-axis scroll containers \| Blog \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil T...
- [framer.com](https://www.framer.com/help/articles/overflow-clip) *(framer.com)*
  > Because both \`scroll\` and \`hidden\` create scroll containers, the element inevitably became a two-dimensional scroller
- [CSS position: sticky now sticks to the nearest scroller on a per axis basis! – Bram.us](https://www.bram.us/2026/03/30/css-sticky-per-axis) *(bram.us)*
  > This quirk broke one of web development's most common UI patterns: \*\*data tables and carousels with sticky headers and sticky columns\*\* A sticky table header inside an \`overflow-x: auto\` wrapper could not stick to the vi...
- [Single-axis scroll containers – River Writes - A MediaWiki Blog](https://blog.river.me/single-axis-scroll) *(blog.river.me)*
  > Single-axis scroll containers – River Writes - A MediaWiki Blog This page looks best with JavaScript enabled Single-axis scroll containers 📅 Oct 2, 2026 &middot; ☕ 4 min read 🏷️ #css W3C has finally closed Issue #865 ,...
- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5086608215900160) *(img544-dot-cr-status.appspot.com)*
  > Complementing the core overflow change, modern Chromium features also extend CSS Scroll Snap so single-axis scrollers process snap alignment only along the active scrolling axis, delegating the non-scrolling axis to ance...
- [localenhance.com](https://labs.localenhance.com/labs/two-axes) *(labs.localenhance.com)*
  > LocalEnhance published interactive performance comparisons between native \`overflow: scroll clip\` and standard JavaScript workarounds Their benchmarks demonstrated how developers previously relied on scroll event listene...

#### 🔗 Inbound Citations & Reverse Links

- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)* *(Cites: `https://chromestatus.com/feature/5067363861004288`)*
  > Experimental Chromium Web Platform Features \| Polypane This website works best with JavaScript enabled. Skip to content Skip to footer Polypane Brand kit Copy icon as SVG Copy logo as SVG Brand guidelines Homepage Search...
- [\[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg16097.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5067363861004288`)*
  > \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS sticky positioning in single-axis scroll containers Chro...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > \[blink-dev\] Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Single-axis scroll containers Chromestatus Tue, 11 Aug 2026 11:26:13 -0700 Contact emails \[email...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Chris Harrelson Wed, 19 Aug 2026 07:31:33 -0700 LG...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers Alex Russell Mon, 17 Aug 2026 11:59:23 -0700 Hey Free, Dan...

#### 📚 Platform Documentation & References

- [overflow CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow) *(developer.mozilla.org)*
- [Other Spec Review: Single-Axis Scroll Containers · Issue #1222 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1222) *(github.com)*
- [Single-axis scroll containers · Issue #1436 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1436) *(github.com)*
- [Other Spec Review: Scroll snap for single-axis scroll container · Issue #1266 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1266) *(github.com)*
- [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers #14018 by lcdavid94 · Pull Request #14354 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/pull/14354) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `overflow` on [wpt.fyi](https://wpt.fyi/results?q=feature:overflow) (via webstatus.dev) — stable: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%; experimental: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%

#### 🌐 Web-features Group Context

*group-level data: web-features [`overflow`](https://webstatus.dev/features/overflow), shared with 1 other ChromeStatus feature*

- **Chrome usage:** 0.11% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/190))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (59 found across 12 planned queries, 17 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 11 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "overflow", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "overflow": Chrome 100% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 6

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

- **Momentum:** **Moderate** (footprint 335 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""CSS random" css values 5 w3c"`, `""CSS random()" function safari technology preview"`, `""CSS random()" function webkit rolling"`
- **Analysis:** The CSS random() function brings generative numeric randomness natively into stylesheets, eliminating long-standing reliance on JavaScript hacks and precalculated variables for organic UI variation. Spearheaded by WebKit and enabled by default in Chrome 156, the feature has achieved unanimous vendor alignment across the CSS Working Group. While Safari and Chromium lead browser availability, ecosystem-wide Baseline interoperability awaits Gecko's pending implementation release.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt CSS random() today strictly as a progressive enhancement guarded by @supports rules for decorative micro-interactions, procedural animations, and visual variance. Avoid relying on it for layout-critical or state-dependent mechanics, and maintain deterministic fallbacks or build-time PostCSS transforms until full cross-browser support solidifies.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Yeah the thing the WG settled on was a lot saner than the initial proposal :)..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "WebKit on X: "Learn about the new CSS random() function, now available to experiment with in Safari Technology Preview. There are lots of amazing ways to use random values in CSS. Learn more in "Rolling the Dice with CSS random()": https://t.co/JdFtXP3qTm" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

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

#### 📰 Ecosystem Blogs & Articles

- [medium.com](https://medium.com/@arnoldgunter/why-i-love-to-use-the-new-css-random-function-2a7a0cb56500) *(medium.com)*
  > \*\*Syntax & Usage:\*\* Typically written as \`random(min, max, step?)\` Bringing native randomness bridges a massive gap for frontend design—unlocking organic animations, fluid particle fields, and unique micro-interactions n...
- [css-tricks.com](https://css-tricks.com/the-importance-of-native-randomness-in-css) *(css-tricks.com)*
  > \*\*Core Motivation:\*\* CSS has historically been declarative and deterministic Bringing native randomness bridges a massive gap for frontend design—unlocking organic animations, fluid particle fields, and unique micro-inte...
- [daily.dev](https://daily.dev/posts/let-s-use-the-emergent-css-random-function-in-all-the-browsers-yi8ggjuka) *(daily.dev)*
  > \*\*Ecosystem Impact:\*\* Shows that browser rollout has begun, with Safari supporting the feature (starting with version 26.2 / technical previews)
- [master.dev](https://blog.master.dev/more-css-random-learning-through-experiments) *(blog.master.dev)*
  > \*\*Content:\*\* Exploratory walk-throughs breaking down syntax rules (like the strict requirement for matching units) and showcasing experimental visual implementations \*\*Key Experiments:\*\* Developers have used it to build ...
- [Experimenting with the new pure CSS random() function \| Polypane](https://polypane.app/blog/experimenting-with-the-new-pure-css-random-function) *(polypane.app)*
  > \*\*Key Experiments:\*\* Developers have used it to build complex, purely CSS-driven components like \*rotating star fields, bokeh backgrounds, falling flower petals, and interactive polaroid stacks\* \*\*Content:\*\* Articles suc...
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17343.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS random() function Rick Byers Wed, 02 Sep 2026 08:12:47 -0700 LGTM1 On Wed, Aug 26, 2026 at 3...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17343.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > Re: \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS random() function Rick Byers Wed, 02 Sep 2026 08:12:47 -0700 LGTM1 On Wed, Aug 26, 2026 at 3...
- [Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30754) *(github.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > css.types.random (https://&lt;strong&gt;chromestatus.com/feature/5324559251275776&lt;/strong&gt;)
- [\[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17310.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS random() function 'Munira Tursunova' via blink-dev Wed, 26 Aug 2026 12:48:09 -0700 \*Contact emails\* ...
- [CSS random() · Issue #1354 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1354) *(github.com · 2026-09-03T21:08:06)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > CSS random() · Issue #1354 · web-platform-tests/interop · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload t...
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17344.html) *(mail-archive.com)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > Re: \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS random() function Yoav Weiss (@Shopify) Wed, 02 Sep 2026 08:13:20 -0700 LGTM2 On Wed, Sep 2,...

#### 📚 Platform Documentation & References

- [random() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/random) *(developer.mozilla.org)*
- [Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30754) *(github.com)*
- [CSS random() · Issue #1354 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1354) *(github.com)*
- [CSS random() function · Issue #715 · mdn/mdn](https://github.com/mdn/mdn/issues/715) *(github.com)*
- [\[css-values-5\] Should random() and random-item() share indexing? · Issue #2663 · mozilla/wg-decisions](https://github.com/mozilla/wg-decisions/issues/2663) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `random-function` on [wpt.fyi](https://wpt.fyi/results?q=feature:random-function) (via webstatus.dev) — stable: Chrome 12.5% · Edge 12.5% · Firefox 12.5% · Safari 37.5%; experimental: Chrome 25% · Edge 25% · Firefox 25% · Safari 100%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 13 planned queries, 26 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 1 verified) · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (7 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (4 found, 2 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 1 verified) · `web-features mapping` *(group "random-function", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "random-function": Chrome 12.5% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 5

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

- **Momentum:** **Moderate** (footprint 335 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** IAMF (Immersive Audio Model and Formats) decoding support has landed natively in Chromium (Chrome 153) via Media Source Extensions, offering an open and royalty-free alternative to proprietary 3D audio formats like Dolby Atmos. While Google and hardware partners like Samsung are pushing adoption—commercializing it under names like Eclipsa Audio—cross-browser consensus is still in its infancy. Mozilla and WebKit engineers have recently opened standards-position evaluation threads, but neither Gecko nor Safari has committed to an implementation timeline yet.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat IAMF as a progressive enhancement feature for Chromium-based browsers, and implement fallback audio tracks or traditional multi-channel containers for Safari and Firefox users until multi-engine support solidifies.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [IAMF Audio Decoding Support](https://github.com/WebKit/standards-positions/issues/700) [open] 
- **Mozilla:** [IAMF Audio Decoding support](https://github.com/mozilla/standards-positions/issues/1437) [open] `topic: API`

#### 📰 Ecosystem Blogs & Articles

- [mintec.co](https://mintec.co/blog/audio-inmersivo-iamf-chrome-2026) *(mintec.co)*
  > Recent updates across browser vendor development channels and engineering blogs highlight the introduction of native decoding support for the \*\*Immersive Audio Model and Formats (IAMF)\*\* standard Rolled out natively in C...
- [What is IAMF? \| Alliance for Open Media](http://aomedia.org/specifications/iamf) *(aomedia.org)*
  > Developed by the Alliance for Open Media (AOMedia)—with strong backing from industry leaders like Google and Samsung (where it is commercialized under names like \*Eclipsa Audio\*)—IAMF enables channel-based, scene-based (...
- [googlesource.com](https://android.googlesource.com/platform/external/iamf_tools) *(android.googlesource.com)*
  > Tooling, reference decoders, and developer implementation guides stereo rendering modes directly in-browser
- [Launch iamf\_tools Decoding Support in M153 \[535279329\] - Chromium](https://issues.chromium.org/issues/535279329) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Implement and ship: Immersive Audio Model and Formats (IAMF) decoding support](http://www.mail-archive.com/blink-dev@chromium.org/msg17129.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Implement and ship: Immersive Audio Model and Formats (IAMF) decoding support Skip to site navigation (Press enter) \[blink-dev\] Intent to Implement and ship: Immersive Audio Model and Formats (IAMF)...
- [\[blink-dev\] Re: Intent to Implement and ship: Immersive Audio Model and Formats (IAMF) decoding support](http://www.mail-archive.com/blink-dev@chromium.org/msg17134.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Implement and ship: Immersive Audio Model and Formats (IAMF) decoding support Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Implement and ship: Immersive Audio Model and Format...

#### 🔗 Inbound Citations & Reverse Links

- [Launch iamf\_tools Decoding Support in M153 \[535279329\] - Chromium](https://issues.chromium.org/issues/535279329) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5113656292540416`)*
  > Chromium Sign in
- [New IAMF Support feature · Issue #4179 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4179) *(github.com · 2026-07-14T17:22:16)* *(Cites: `https://chromestatus.com/feature/5113656292540416`)*
  > New IAMF Support feature · Issue #4179 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wi...
- [\[blink-dev\] Intent to Implement and ship: Immersive Audio Model and Formats (IAMF) decoding support](http://www.mail-archive.com/blink-dev@chromium.org/msg17129.html) *(mail-archive.com)* *(Cites: `https://github.com/SyedAbuTalib/iamf-explainer/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Implement and ship: Immersive Audio Model and Formats (IAMF) decoding support Skip to site navigation (Press enter) \[blink-dev\] Intent to Implement and ship: Immersive Audio Model and Formats (IAMF)...
- [\[blink-dev\] Re: Intent to Implement and ship: Immersive Audio Model and Formats (IAMF) decoding support](http://www.mail-archive.com/blink-dev@chromium.org/msg17134.html) *(mail-archive.com)* *(Cites: `https://github.com/SyedAbuTalib/iamf-explainer/blob/main/explainer.md`)*
  > \[blink-dev\] Re: Intent to Implement and ship: Immersive Audio Model and Formats (IAMF) decoding support Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Implement and ship: Immersive Audio Model and Format...
- [Re: \[blink-dev\] Re: Intent to Implement and ship: Immersive Audio Model and Formats (IAMF) decoding support](http://www.mail-archive.com/blink-dev@chromium.org/msg17198.html) *(mail-archive.com)* *(Cites: `https://github.com/SyedAbuTalib/iamf-explainer/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Implement and ship: Immersive Audio Model and Formats (IAMF) decoding support Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Implement and ship: Immersive Audio Model an...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/mozilla/standards-positions/issues/1437) *(github.com)*
- [New IAMF Support feature · Issue #4179 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4179) *(github.com)*
- [iamf/index.bs at main · AOMediaCodec/iamf](https://github.com/AOMediaCodec/iamf/blob/main/index.bs) *(github.com)*
- [Immersive Audio Model and Formats (IAMF) decoding support · Issue #1337 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1337) *(github.com)*
- [feat(guides/js): add spatial audio streaming guide with IAMF and MSE support (fixes #1337) by Nithin0620 · Pull Request #1382 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/pull/1382) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Immersive Audio Model and Formats (IAMF) decoding support Demo](https://crsrc.org/c/media/test/data/iamf_alternating_sine_waves_stereo.mp4)
- [Immersive Audio Model and Formats (IAMF) decoding support Demo](https://crsrc.org/c/media/test/data/iamf_alternating_sine_waves_714.mp4)
- [Immersive Audio Model and Formats (IAMF) decoding support Demo](https://aomediacodec.github.io/iamf-tools/web_demo)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 12 planned queries, 26 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 4 verified) · `Twitter / X API v2` *(found 9 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (footprint 330 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Algorithm Updates in WebCrypto" OR "Modern Algorithms in WebCrypto" wicg"`, `""Modern Algorithms in WebCrypto" site:github.com/WebKit/standards-positions"`
- **Analysis:** Chromium's addition of NIST post-quantum primitives (ML-KEM, ML-DSA, X-Wing) and ChaCha20-Poly1305 in Chrome 155 brings native, side-channel-resistant cryptographic operations directly to the browser via the Web Cryptography API. While security engineers and cryptographic library maintainers welcome the ability to replace heavy WebAssembly or JavaScript implementations with BoringSSL-backed routines, formal consensus across browser engines remains divided. Because modern algorithms are not strictly mandatory to implement across all engines, the update currently acts as a forward-looking Chromium enhancement rather than an interoperable baseline.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt a progressive enhancement strategy by querying algorithm availability before invoking SubtleCrypto methods, ensuring your build gracefully falls back to audited WebAssembly or pure JavaScript cryptographic libraries in Safari and Firefox. Applications requiring quantum resistance today should use hybrid schemes like X-Wing while monitoring cross-browser support tables.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."
- Standards Activity (Mozilla): Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **9 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Modern Algorithms in WebCrypto](https://github.com/WebKit/standards-positions/issues/641) [closed] `position: neutral`, `venue: WICG`
  > *Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."*
- **Mozilla:** [Request for Mozilla Position on Modern Algorithms in WebCrypto](https://github.com/mozilla/standards-positions/issues/1282) [closed] `venue: W3C CG`, `position: neutral`, `concerns: compatibility`, `concerns: venue`, `concerns: interoperability`, `concerns: performance`, `concerns: usability`, `concerns: API design`
  > *Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."*

#### 📰 Ecosystem Blogs & Articles

- [Post-Quantum Cryptography Reaches the Browser: ML-KEM and ML-DSA in Chrome 151's Web Crypto API \| Trade Assistance LLC](https://trade-assistance.com/blog/post-quantum-web-crypto-api-chrome-151) *(trade-assistance.com)*
  > \*\*ML-KEM (Module-Lattice-Based Key Encapsulation Mechanism, FIPS 203):\*\* Available in parameter sets 768 and 1024 (and 512 in experimental stages) \*\*ML-DSA (Module-Lattice-Based Digital Signature Algorithm, FIPS 204):\*\* ...
- [chrome.com](https://developer.chrome.com/release-notes/151) *(developer.chrome.com)*
  > \*\*Chrome 151 Beta & Release Notes (\*developer.chrome.com\*):\*\* Google formally announced the \*\*"Algorithm Updates in WebCrypto"\*\* Origin Trial spanning Chrome 151 to Chrome 154 This allowed web developers to test native M...
- [chrome.com](https://developer.chrome.com/blog/chrome-151-beta) *(developer.chrome.com)*
  > \*\*Chrome 151 Beta & Release Notes (\*developer.chrome.com\*):\*\* Google formally announced the \*\*"Algorithm Updates in WebCrypto"\*\* Origin Trial spanning Chrome 151 to Chrome 154 This allowed web developers to test native M...
- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > \*\*Chrome 155 Beta & Intent to Ship (\*Chrome Platform Status\*):\*\* Following the Origin Trial, Chrome progressed the feature to "shipping" status
- [Chrome clears Intent to Ship post-quantum WebCrypto algorithms · freenode](https://freenode.net/article/chrome-clears-intent-to-ship-post-quantum-webcrypto-algorithms) *(freenode.net)*
  > Chrome's implementation relies on Google’s underlying BoringSSL cryptographic engine to guarantee constant-time execution and memory safety \*\*WebKit Standards Positions & Discussions (\*GitHub WebKit/standards-positions #...
- [Support for modern cryptographic algorithms in Workers \| Cloudflare Blog](https://blog.cloudflare.com/workers-ml-kem-ml-dsa-support) *(blog.cloudflare.com)*
  > \*\*"Support for modern cryptographic algorithms in Workers" (\*Cloudflare Blog\*):\*\* Cloudflare highlighted the importance of runtime interoperability by implementing ML-KEM and ML-DSA within \`workerd\`'s Web Crypto layer, a...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16786.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Re: \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Algorithm Updates in WebCrypto Mike Taylor Wed, 17 Jun 2026 06:48:25 -0700 ...
- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com · 2026-07-29T21:58:10)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ano...
- [New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1370) *(github.com · 2026-08-24T16:45:23)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype:...
- [Proposal: Implement "Modern Algorithms in the Web Cryptography API" (WICG specification) · Issue #1738 · awslabs/llrt](https://github.com/awslabs/llrt/issues/1738) *(github.com · 2026-08-24T07:05:33)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Proposal: Implement "Modern Algorithms in the Web Cryptography API" (WICG specification) · Issue #1738 · awslabs/llrt · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearan...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/WebKit/standards-positions/issues/641) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/157) *(developer.mozilla.org)*
- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com)*
- [New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1370) *(github.com)*
- [Proposal: Implement "Modern Algorithms in the Web Cryptography API" (WICG specification) · Issue #1738 · awslabs/llrt](https://github.com/awslabs/llrt/issues/1738) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `web-cryptography` on [wpt.fyi](https://wpt.fyi/results?q=feature:web-cryptography) (via webstatus.dev) — stable: Chrome 54.8% · Edge 54.8% · Firefox 60.8% · Safari 52.4%; experimental: Chrome 56% · Edge 56% · Firefox 62.6% · Safari 52.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`web-cryptography`](https://webstatus.dev/features/web-cryptography), shared with 4 other ChromeStatus features*

- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/67)) · concerns: `venue`

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 11 planned queries, 24 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 9 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (2 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "web-cryptography", shared with 4 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "web-cryptography": Chrome 54.8% passing (stable))* · `Sources cited by the AI synthesis` (6 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 6

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

- **Momentum:** **Moderate** (footprint 330 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Connection Allowlists - Embedded Enforcement extends the emerging native browser 'egress firewall' to nested contexts, ensuring iframes and workers cannot circumvent parent network restrictions or act as data exfiltration vectors. Incubated within the WICG by Google and Microsoft Edge engineers, the core specification aims to replace the ergonomic pitfalls of CSP connect-src, with the embedded enforcement mechanism advancing into Chrome Origin Trials. While cross-browser engine consensus is generally favorable towards cleaner exfiltration primitives, production cross-engine availability remains in development.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams managing sensitive data or untrusted embedded widgets should evaluate the explainer and experiment with the connectionAllowlist iframe primitives in Chrome Origin Trials or under developer flags. However, production architectures must continue enforcing CSP connect-src alongside iframe sandbox policies as standard defense-in-depth until multi-engine implementation lands.
- In active Origin Trial in Chrome 157. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @mikewest: "A brief update on timing: we're now planning an initial Origin Trial starting in Chrome 147 (https://groups.google.com/a/chromium.org/g/blink-dev/c/lR..."
- Standards Activity (Mozilla): Latest discussion from @evilpie: "Suggested position: positive  #1431..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **19 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Connection Allowlists](https://github.com/WebKit/standards-positions/issues/583) [open] 
  > *Latest discussion from @mikewest: "A brief update on timing: we're now planning an initial Origin Trial starting in Chrome 147 (https://groups.google.com/a/chromium.org/g/blink-dev/c/lR..."*
- **Mozilla:** [Connection Allowlists](https://github.com/mozilla/standards-positions/issues/1322) [closed] `position: positive`, `topic: HTTP`, `team: Networking`, `team: Security`
  > *Latest discussion from @evilpie: "Suggested position: positive  #1431..."*

#### 📰 Ecosystem Blogs & Articles

- [report-uri.com](https://blog.report-uri.com/connection-allowlist-an-egress-firewall-for-the-browser) *(blog.report-uri.com)*
  > \*\*Connection Allowlists\*\* is a web platform security mechanism designed to act as a native “egress firewall” in the browser \*\*Key Takeaway:\*\* Examines how Connection Allowlist fixes critical design gaps in Content Securi...
- [Connection allowlists: Secure your web application's network access \| daily.dev](https://daily.dev/posts/connection-allowlists-secure-your-web-application-s-network-access-3kjg4t73n) *(daily.dev)*
  > from a document or worker This prevents third-party widgets, compromised ad frames, or sandboxed execution environments from bypassing parent network controls
- [Connection Allowlist: a network firewall, built into the browser](https://scotthelme.co.uk/connection-allowlist-a-network-firewall-built-into-the-browser) *(scotthelme.co.uk)*
  > from a document or worker \*\*Report URI Blog (Scott Helme):\*\* \[\*“Connection Allowlist: an egress firewall for the browser”\*\](https://report-uri.com/blog/connection-allowlist-browser-egress-firewall/)
- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5657801797009408) *(img544-dot-cr-status.appspot.com)*
  > from a document or worker, \*\*Embedded Enforcement\*\* extends this boundary to nested contexts (\`&lt;iframe&gt;\`s, nested documents, and workers) The browser enforces these restrictions on child frames: the embedded content must...
- [Connection allowlists: Secure your web application's network access \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/connection-allowlist-announcement) *(developer.chrome.com)*
  > This prevents third-party widgets, compromised ad frames, or sandboxed execution environments from bypassing parent network controls \*\*Chrome for Developers Blog:\*\* \[\*“Connection allowlists: Secure your web application's...
- [timjohns.com](https://timjohns.com/blog/connection-allowlists) *(timjohns.com)*
  > This prevents third-party widgets, compromised ad frames, or sandboxed execution environments from bypassing parent network controls \*\*Tim Johns’ Dev Blog:\*\* \[\*“Blog: Connection Allowlists”\*\](https://timjohns.dev/)

#### 🔗 Inbound Citations & Reverse Links

- [Connection Allowlists – Embedded Enforcement · Issue #44 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/44) *(github.com · 2026-10-12T08:23:19)* *(Cites: `https://chromestatus.com/feature/5657801797009408`)*
  > Connection Allowlists – Embedded Enforcement · Issue #44 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in w...
- [Re: \[blink-dev\] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16912.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > &gt; LGTM2 &gt; &gt; On Fri, Jun 26, 2026 ... Connection Allowlists is &lt;strong&gt;a feature designed to provide explicit control &gt;&gt; over external endpoints by restricting connections initiated via the Fetch &gt;&gt; A...
- [Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists](https://github.com/WICG/connection-allowlists/pull/41) *(github.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance set...
- [Incubation: Connection Allowlists · Issue #1173 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1173) *(github.com · 2025-11-25T11:45:59)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > Incubation: Connection Allowlists · Issue #1173 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or ...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17505.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement Alex Russell Mon, 21...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/wicg/connection-allowlists/issues/36) *(github.com)*
- [Connection Allowlists · Issue #1424 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1424) *(github.com)*
- [github.com](https://github.com/WICG/connection-allowlists) *(github.com)*
- [Connection Allowlists – Embedded Enforcement · Issue #44 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/44) *(github.com)*
- [Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists](https://github.com/WICG/connection-allowlists/pull/41) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (51 found across 13 planned queries, 23 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 12 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 6

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

- **Momentum:** **Moderate** (footprint 320 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The CSS corner shorthand feature streamlines modern UI layout design by combining border-radius and corner-shape values into a single property declaration per corner, edge, or logical block. Landing natively in Chromium-based browsers, it addresses a long-standing developer pain point by eliminating the need for separate properties or external hacks like clip-path and SVGs. While Chrome implements the spec directly, overall cross-browser web platform tests and adoption remain in early experimental states.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can experiment with the feature inside current browser builds, but should treat it as a progressive enhancement. Fallback styling or traditional border-radius properties must remain in place for users on engines where the shorthand is not yet supported.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @smfr: "We think that \`corner-shape\` will be useful to allow for bevel, and superellipse (aka squircle), but we believe that more complex corner shapes are be..."
- Standards Activity (Mozilla): Latest discussion from @dholbert: "&gt; @dholbert fwiw, I'm not so sure about it. \`corner-shape: angle\` messing with \`border-radius\` feels wrong somehow (even if it's the simplest way to s..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Corner-shape](https://github.com/WebKit/standards-positions/issues/229) [closed] `position: support`, `topic: css`, `venue: W3C CSS WG`
  > *Latest discussion from @smfr: "We think that \`corner-shape\` will be useful to allow for bevel, and superellipse (aka squircle), but we believe that more complex corner shapes are be..."*
- **Mozilla:** [CSS corner-shape](https://github.com/mozilla/standards-positions/issues/823) [closed] `venue: W3C`, `position: positive`, `topic: CSS`
  > *Latest discussion from @dholbert: "&gt; @dholbert fwiw, I'm not so sure about it. \`corner-shape: angle\` messing with \`border-radius\` feels wrong somehow (even if it's the simplest way to s..."*

#### 📰 Ecosystem Blogs & Articles

- [youtube.com](https://www.youtube.com/watch?v=kmfBt1gBAXQ) *(youtube.com)*
  > Historically, configuring advanced shapes alongside radii required separate declarations (\`border-radius\` and \`corner-shape\`), or heavy reliance on external hacks like \`clip-path\`, pseudo-elements, or SVGs
- [dev.to](https://dev.to/devsmitra/css-corner-shape-next-level-corners-for-your-ui-26db) *(dev.to)*
  > Historically, configuring advanced shapes alongside radii required separate declarations (\`border-radius\` and \`corner-shape\`), or heavy reliance on external hacks like \`clip-path\`, pseudo-elements, or SVGs \*\*Unified Decl...
- [chrome.com](https://developer.chrome.com/blog/implementing-corner-shape) *(developer.chrome.com)*
  > Discussions around Blink’s implementation emphasize the complexity of painting borders correctly with non-circular geometries (like superellipses) They also highlight the advanced \`superellipse()\` mathematical function (...
- [artofstyleframe.com](https://artofstyleframe.com/blog/css-corner-shorthand-chrome-155-squircle-corners) *(artofstyleframe.com)*
  > Technical rollouts point out that while base properties like \`corner-shape\` started landing behind flags Because features roll out incrementally across browser versions and often sit behind experimental flags (such as \`-...
- [medium.com](https://pixicstudio.medium.com/css-corner-shape-the-ui-property-most-developers-havent-tried-yet-606b3ee4e3fc) *(pixicstudio.medium.com)*
  > Articles focusing on \`corner-shape\` and its accompanying shorthands emphasize that it addresses a long-standing pain point in UI design
- [youtube.com](https://www.youtube.com/watch?v=FPB2KVe_jP0) *(youtube.com)*
  > They also highlight the advanced \`superellipse()\` mathematical function (accepting values from \`-Infinity\` to \`Infinity\`) for hyper-customized curves Tutorials note that elements like pricing cards, custom buttons, toolt...

#### 🔗 Inbound Citations & Reverse Links

- [CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1367) *(github.com · 2026-08-23T14:10:52)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with an...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17569.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 28 Sep 2026 16:48:56 -0700 T...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17574.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Mike Taylor Mon, 28 Sep 2026 19:23:42 -0700 LG...
- [\[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17509.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 21 Sep 2026 11:46:37 -0700 This look...
- [\[blink-dev\] Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17493.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > \[blink-dev\] Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS corner shorthand properties Helmut Januschka Fri, 18 Sep 2026 06:34:29 -0700 \*Contact emai...

#### 📚 Platform Documentation & References

- [corner-shape CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/corner-shape-value) *(developer.mozilla.org)*
- [CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1367) *(github.com)*
- [csswg-drafts/css-borders-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-borders-4/Overview.bs) *(github.com)*
- [\[css-borders-4\] border-shape property · Issue #1365 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1365) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `corner-shape` on [wpt.fyi](https://wpt.fyi/results?q=feature:corner-shape) (via webstatus.dev) — stable: Chrome 81.8% · Edge 84.1% · Firefox 10.2% · Safari 8%; experimental: Chrome 88.6% · Edge 89.8% · Firefox 59.1% · Safari 68.2%

#### 🌐 Web-features Group Context

*group-level data: web-features [`corner-shape`](https://webstatus.dev/features/corner-shape)*

- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/229))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/823))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 12 planned queries, 21 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 10 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (2 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "corner-shape", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "corner-shape": Chrome 81.8% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 6

---

<a id="5078190552907776-webaudio-configurable-render-quantum"></a>
### [WebAudio: Configurable render quantum](https://chromestatus.com/feature/5078190552907776)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5078190552907776](https://chromestatus.com/feature/5078190552907776) · [chromestatuslite.com/feature/5078190552907776](https://chromestatuslite.com/feature/5078190552907776)
- **Specification:** [https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize)
- **Chromium Bug:** [https://crbug.com/40637820](https://crbug.com/40637820)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Baseline Widely Available](https://webstatus.dev/features/web-audio) (Chrome: `35`, Firefox: `25`, Safari: `14.1`) · *group-level data: web-features [`web-audio`](https://webstatus.dev/features/web-audio), shared with 53 other ChromeStatus features*

#### 📝 Overview

Adds an optional renderSizeHint to AudioContext and OfflineAudioContext. This allows developers to customize the WebAudio render quantum size by passing a specific integer, use the default of 128 frames by omitting the hint or passing "default", or request that the User-Agent select an optimal size by specifying "hardware".

> **Motivation:** It is difficult and complex to write a web app when the audio processing block size does not match with the WebAudio render quantum size (128 sample-frames). Removing this restriction and making it customizable on AudioContext would enable easier development and more efficient audio processing.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 320 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"WebAudio Configurable Render Quantum WebKit standards positions"`, `"WebAudio configurable render quantum renderSizeHint"`
- **Analysis:** Configurable render quantum in WebAudio introduces the \`renderSizeHint\` option to AudioContext and OfflineAudioContext, allowing engines to diverge from the historically rigid 128-sample-frame processing block. Standardized as part of the Web Audio API 1.1 specification and enabled by default in Chromium, it addresses a longstanding architectural bottleneck for browser-based digital audio workstations (DAWs), DSP libraries, and low-latency communication tools. While developer interest is high and specification roots stem directly from working group consensus, formal multi-engine implementation remains uneven across Safari and Firefox.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt \`renderSizeHint\` as a progressive enhancement when instantiating \`AudioContext\`, always inspecting \`context.renderQuantumSize\` to verify the negotiated block size while gracefully falling back to handling 128-sample chunks in other browsers. Teams targeting low-latency synthesis should thoroughly profile CPU overhead and audio glitch rates across lower-end devices before enforcing small buffer sizes like 64 frames.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [WebAudio Configurable Render Quantum](https://github.com/WebKit/standards-positions/issues/662) [open] 
- **Mozilla:** [WebAudio Configurable Render Quantum](https://github.com/mozilla/standards-positions/issues/1407) [open] `venue: W3C`, `topic: API`

#### 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/n4PifuLlrwc) *(groups.google.com)*
  > Historically, the Web Audio API enforced a strict, non-negotiable render quantum size of \*\*128 sample-frames\*\* per processing block This feature introduces an optional \`renderSizeHint\` property to both \`AudioContext\` and...
- [stackoverflow.com](https://agents.stackoverflow.com/questions/ca2d347e-70cd-4f6d-8b7c-ec5029538bdc?tag=web-audio-api&sort=hot&page=1) *(agents.stackoverflow.com)*
  > Historically, the Web Audio API enforced a strict, non-negotiable render quantum size of \*\*128 sample-frames\*\* per processing block
- [Intent to Extend Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/MlLqosTB0cQ) *(groups.google.com)*
  > Intent to Extend Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Inten...
- [Intent to Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/j7Wf7bA_qOY) *(groups.google.com · 2026-01-21T00:00:00)*
  > Intent to Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ex...
- [\[blink-dev\] Intent to Extend Experiment: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17016.html) *(mail-archive.com)*
  > Debuggability It may be worth exposing the render quantum size value in the DevTools WebAudio pane, similar to sample rate. Will this feature be supported on all six Blink platforms (Windows, Mac, Linux, ChromeOS, Androi...
- [Re: \[blink-dev\] Re: Intent to Ship: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17081.html) *(mail-archive.com)*
  > /Gecko/: No signal (https://github.com/mozilla/standards-positions/issues/1407 &lt;https://github.com/mozilla/standards-positions/issues/1407&gt;) A Firefox developer wrote the specification change (https://github.com/We...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Extend Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/MlLqosTB0cQ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5078190552907776`)*
  > Intent to Extend Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Inten...
- [Intent to Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/j7Wf7bA_qOY) *(groups.google.com · 2026-01-21T00:00:00)* *(Cites: `https://chromestatus.com/feature/5078190552907776`)*
  > Intent to Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ex...

#### 📚 Platform Documentation & References

- [Web Audio API 1.1](https://www.w3.org/TR/webaudio-1.1) *(w3.org)*
- [WebAudio Configurable Render Quantum · Issue #662 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/662) *(github.com)*
- [github.com](https://github.com/WebAudio/web-audio-api/issues/2659) *(github.com)*
- [TPAC 2025: Audio WG update](https://www.w3.org/2025/11/TPAC/demo-audio-wg-update.html) *(w3.org)*
- [Allow user-selectable render quantum size · Issue #2450 · WebAudio/web-audio-api](https://github.com/WebAudio/web-audio-api/issues/2450) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `web-audio` on [wpt.fyi](https://wpt.fyi/results?q=feature:web-audio) (via webstatus.dev) — stable: Chrome 93.6% · Edge 93.2% · Firefox 72.1% · Safari 84.9%; experimental: Chrome 93.6% · Edge 94% · Firefox 72.1% · Safari 90.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`web-audio`](https://webstatus.dev/features/web-audio), shared with 53 other ChromeStatus features*

- **Chrome usage:** 0.054% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/150))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (52 found across 12 planned queries, 25 verified) · `Google Search Grounding (gemini-3.8-flash)` (5 found, 5 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "web-audio", shared with 53 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "web-audio": Chrome 93.6% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (footprint 315 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The 'js-profiling in dedicated workers' feature extends the JavaScript Self-Profiling API to background worker threads, addressing a critical visibility gap for offloaded performance-critical tasks. While currently progressing in Chromium (behind a developer trial flag), it remains constrained by cross-browser interoperability challenges due to its complex dependency on Document Policy semantics in workers.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should experiment with the feature locally behind Chrome flags to evaluate worker performance overhead, but rely on traditional fallback mechanisms or synthetic monitoring for production until cross-browser standardization and engine alignment mature.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **16 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5159559872249856) *(img544-dot-cr-status.appspot.com)*
  > The \*\*JavaScript Self-Profiling API (\`js-profiling\`) in Dedicated Workers\*\* extends sampling-based CPU profiling directly into background dedicated worker threads Modern web applications offload heavy tasks—such as data ...
- [chromestatus.com](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > The \*\*JavaScript Self-Profiling API (\`js-profiling\`) in Dedicated Workers\*\* extends sampling-based CPU profiling directly into background dedicated worker threads \*\*Source:\*\* \*Chrome Platform Status & Chrome Release Note...
- [perfplanet.com](https://calendar.perfplanet.com/2021/js-self-profiling-api-in-practice) *(calendar.perfplanet.com)*
  > The JS Self-Profiling API requires explicit opt-in using the \`Document-Policy: js-profiling\` HTTP header \*\*Source:\*\* \*Datadog Docs, Sentry SDK Updates, Web Performance Calendar\*
- [google.com](https://issuetracker.google.com/issues/450845903) *(issuetracker.google.com)*
  > Previously, workers could not use self-profiling because Document Policy behavior inside workers was undefined
- [datadoghq.com](https://docs.datadoghq.com/real_user_monitoring/correlate_with_other_telemetry/profiling) *(docs.datadoghq.com)*
  > \*\*Source:\*\* \*Datadog Docs, Sentry SDK Updates, Web Performance Calendar\* \*\*Key Takeaway:\*\* Front-end Real User Monitoring (RUM) platforms have embraced this feature
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Con...
- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com · 2026-09-14T08:09:52)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Thu, 10 Sep 2026 13...
- [\[blink-dev\] Intent to Prototype: Document Policy in Dedicated Workers](https://www.mail-archive.com/blink-dev@chromium.org/msg15658.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > Explainer https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md Specification https://github.com/whatwg/html/pull/12026 Summary &lt;strong&gt;Enables document-policy in Dedicated...

#### 📚 Platform Documentation & References

- [JS Self-Profiling API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/JS_Self-Profiling_API) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Profiler) *(developer.mozilla.org)*
- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com)*
- [JS Self-Profiling API (including the Markers extension) · Issue #717 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/717) *(github.com)*
- [Profiler (aka JavaScript self-profiling API) · Issue #1429 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1429) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [js-profiling in dedicated workers Demo](https://docs.google.com/document/d/1prxxuck3NDqOjuhMkT8vykV9Fl3IQyUzdESQdxz_7pg/edit?tab=t.0)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `profiler` on [wpt.fyi](https://wpt.fyi/results?q=feature:profiler) (via webstatus.dev) — stable: Chrome 64% · Edge 64% · Firefox 0% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%

#### 🌐 Web-features Group Context

*group-level data: web-features [`profiler`](https://webstatus.dev/features/profiler), shared with 2 other ChromeStatus features*

- **Chrome usage:** 0.0004% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/278))
- **Mozilla:** no position recorded ([standards position](https://github.com/mozilla/standards-positions/issues/477)) · concerns: `security`

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 12 planned queries, 24 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (15 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "profiler", shared with 2 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "profiler": Chrome 64% passing (stable))*
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

- **Momentum:** **Moderate** (footprint 300 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"scroll snap type pair chrome webkit mozilla"`, `"scroll snap type pair csswg 9519"`
- **Analysis:** The \`scroll-snap-type: pair\` keyword resolves a longstanding CSS Scroll Snap limitation where \`both\` evaluates horizontal and vertical axes independently, potentially snapping to two disparate targets. By treating multi-axis snap targets as unified 2D coordinates, \`pair\` guarantees the scroller locks onto the same element across both dimensions. Chromium is shipping the feature enabled by default in Chrome 156 with upstreamed Web Platform Tests, while broad multi-engine consensus is forming.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt \`scroll-snap-type: pair\` as a progressive enhancement by cascading it after \`scroll-snap-type: both\` or wrapping it in a \`@supports (scroll-snap-type: pair)\` query. Maintain standard two-axis snapping fallbacks for non-Chromium browsers until cross-vendor implementations land.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."
- Standards Activity (Mozilla): Latest discussion from @theres-waldo: "&gt; I think this seems reasonable but I'd like \[@hiikezoe\](https://github.com/hiikezoe) / \[@theres-waldo\](https://github.com/theres-waldo) to take a loo..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **10 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/WebKit/standards-positions/issues/716) [closed] `position: support`, `topic: css`, `venue: W3C CSS WG`, `from: Google`
  > *Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."*
- **Mozilla:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/mozilla/standards-positions/issues/1448) [open] `venue: W3C`, `topic: CSS`
  > *Latest discussion from @theres-waldo: "&gt; I think this seems reasonable but I'd like \[@hiikezoe\](https://github.com/hiikezoe) / \[@theres-waldo\](https://github.com/theres-waldo) to take a loo..."*

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > \*\*Chrome Platform Status & Chrome 156 Release:\*\* Chromium tracked the feature under \*"Use scroll-snap-type: pair to snap to a single element"\*
- [appspot.com](https://chromiumdash.appspot.com/commit/a216248c97fbbd39bffa5780515af8d50f6d53cb) *(chromiumdash.appspot.com)*
  > Chromium enabled this by default in Chrome 156, and tests were upstreamed directly to Web Platform Tests (WPT)
- [appspot.com](https://cr-status.appspot.com) *(cr-status.appspot.com)*
  > Chromium enabled this by default in Chrome 156, and tests were upstreamed directly to Web Platform Tests (WPT)
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com)*
  > \*\*Microsoft Edge 156 Web Platform Notes:\*\* Edge’s developer release documentation for version 156 listed \`scroll-snap-type: pair\` alongside other modern scrolling additions (such as single-axis scroll container enhanceme...
- [developer-signals.dev](https://developer-signals.dev/interop/proposals/1438) *(developer-signals.dev)*
  > \*\*Interop 2027 Proposals & Developer Signals:\*\* Submitted as a focus candidate for Interop 2027 under the WebDX Community Group Developer Signals repo, indicating developer priority for getting uniform multi-engine suppo...
- [testmuai.com](https://www.testmuai.com/learning-hub/css-scroll-snap-browser-support) *(testmuai.com)*
  > Developer blogs highlighting CSS-only patterns welcomed \`pair\` as a native replacement \*\*Adoption Caveat:\*\* Because \`pair\` is an extension to CSS Scroll Snap Level 1, progressive enhancement via \`@supports (scroll-snap-t...

#### 🔗 Inbound Citations & Reverse Links

- [scroll-snap-pair · Issue #4461 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4461) *(github.com · 2026-10-01T21:55:02)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > scroll-snap-pair · Issue #4461 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Re...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17535.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Rick Bye...
- [Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30754) *(github.com)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with a...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element Chromestatus Tue...
- [\[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17244.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element Chrome...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/w3c/csswg-drafts/issues/9519) *(github.com)*
- [scroll-snap-type CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-snap-type) *(developer.mozilla.org)*
- [github.com](https://github.com/WebKit/standards-positions/issues/716) *(github.com)*
- [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element · Issue #1448 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1448) *(github.com)*
- [Scroll snap to a single element with scroll-snap-type: pair · Issue #1438 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1438) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `scroll-snap` on [wpt.fyi](https://wpt.fyi/results?q=feature:scroll-snap) (via webstatus.dev) — stable: Chrome 85.3% · Edge 83.6% · Firefox 84.2% · Safari 70.6%; experimental: Chrome 97.2% · Edge 95.5% · Firefox 84.2% · Safari 77.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`scroll-snap`](https://webstatus.dev/features/scroll-snap), shared with 4 other ChromeStatus features*

- **Chrome usage:** 0.2% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/59))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (61 found across 12 planned queries, 14 verified) · `Google Search Grounding (gemini-3.8-flash)` (16 found, 15 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "scroll-snap", shared with 4 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "scroll-snap": Chrome 85.3% passing (stable))* · `Sources cited by the AI synthesis` (8 found, 7 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 3

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

- **Momentum:** **Moderate** (footprint 280 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Analysis:** The \`document.requestStorageAccessFor()\` (rSAFor) API is being deprecated and removed in Chrome (targeting milestones such as Chrome 153), following Chrome's shift in its third-party cookie strategy. Because the API was largely tied to Chrome's Related Website Sets (RWS) ecosystem and lacked multi-browser standardization interest, its removal trims proprietary tech debt. Developers relying on it must audit their codebases and transition away from top-level storage access requests.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams should audit their codebases immediately for any dependencies on Related Website Sets (RWS) and \`requestStorageAccessFor()\`, and transition away from relying on top-level storage access requests before full removal.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5194473869017088) *(chromestatus.com)*
  > Because rSAFor was tightly coupled with Chrome’s ecosystem (specifically for cross-site access within RWS) and saw no broad multi-browser standardization or interest from Gecko (Firefox) or WebKit (Safari), Google and th...
- [chrome.com](https://developer.chrome.com/blog/chrome-144-beta) *(developer.chrome.com)*
  > The deprecation process began rolling out in earlier milestones (such as Chrome 144)
- [dbio.link](https://portal.dbio.link/blogs/camada-dev/en/blog/chrome-153-para-devs-o-que-quebra-com-rws-e-requeststorageaccessfor.html) *(portal.dbio.link)*
  > Developers have been advised to audit codebases for RWS dependencies and transition away from relying on top-level storage access requests
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent ...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15256.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Mike Taylor ...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg17072.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor 'Johann Hofm...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5162221567082496`)*
  > Intent to Deprecate and Remove: document.requestStorageAccessFor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent ...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor](http://www.mail-archive.com/blink-dev@chromium.org/msg15256.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5162221567082496`)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: document.requestStorageAccessFor Mike Taylor ...

#### 📚 Platform Documentation & References

- [Document: requestStorageAccessFor() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccessFor) *(developer.mozilla.org)*
- [GitHub - privacycg/requestStorageAccessFor: A proposed extension to the Storage Access API and discussion of how it may be integrated with First-Party Sets. · GitHub](https://github.com/privacycg/requestStorageAccessFor) *(github.com)*
- [content/files/en-us/web/api/document/requeststorageaccess/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/document/requeststorageaccess/index.md?plain=1) *(github.com)*
- [content/files/en-us/web/api/document/requeststorageaccess/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/document/requeststorageaccess/index.md) *(github.com)*
- [content/files/en-us/web/api/document/hasstorageaccess/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/document/hasstorageaccess/index.md) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (49 found across 11 planned queries, 25 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 5 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
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
- **Analysis:** The "Pause media playback on not-visible iframes" feature introduces the \`media-playback-while-not-visible\` Permission Policy, allowing embedders to halt audible media in hidden iframes without completely destroying the frame context. It addresses long-standing UX and performance issues associated with background audio in collapsed widgets or tabs. Browser vendor consensus is shaping up positively, with Mozilla Gecko expressing support due to parallel power-efficiency goals.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams embedding third-party content via iframes should review their Permission Policy configurations and begin testing how the \`media-playback-while-not-visible\` directive impacts hidden state behaviors. Because it is opt-in for embedders, it can be progressively adopted to clean up user experience and improve resource management.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @padenot: "This is \`positive\`. As mentioned in a call to Gabriel, Gecko currently has complex logic to achieve this, for power efficiency reasons, and it would b..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** ["media-playback-while-not-visible" Permission Policy](https://github.com/WebKit/standards-positions/issues/409) [open] `topic: media`, `from: Microsoft`, `topic: permissions`, `venue: Edge Explainers`
- **Mozilla:** ["media-playback-while-not-visible" Permission Policy](https://github.com/mozilla/standards-positions/issues/1082) [closed] `venue: W3C`, `venue: WHATWG`, `position: positive`
  > *Latest discussion from @padenot: "This is \`positive\`. As mentioned in a call to Gabriel, Gecko currently has complex logic to achieve this, for power efficiency reasons, and it would b..."*

#### 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/137) *(learn.microsoft.com)*
  > This Web Platform API allows embedding pages to automatically pause audible media playback (\`&lt;audio&gt;\`, \`&lt;video&gt;\`, and \`AudioContext\`) inside an embedded \`&lt;iframe&gt;\` whenever that iframe is hidden Its CSS \`visibility\` prop...
- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > \*\*Chrome Release Notes (Chrome 155 Beta):\*\* Google highlighted the \`media-playback-while-not-visible\` policy as a major Web API addition
- [agustinbarrientos.com](https://agustinbarrientos.com/writing/brief/the-brief-26-41) *(agustinbarrientos.com)*
  > The announcement details how embedding pages can restrict playback via HTML attributes (\`&lt;iframe allow="media-playback-while-not-visible 'none'"&gt;&lt;/iframe&gt;\`) or via HTTP response headers (\`Permissions-Policy: media-playba...
- [entranttechnologies.com](https://entranttechnologies.com/tech-news/chrome-155-jpeg-xl-post-quantum-webcrypto-and-what-to-test) *(entranttechnologies.com)*
  > \*\*Entrant Technologies & \*The Brief\* Tech Newsletter:\*\* Analyzed the real-world utility for web publishers, third-party video widgets, chat widgets, and ad networks They highlighted that because this policy is opt-in for...
- [windowslatest.com](https://www.windowslatest.com/2025/06/04/microsoft-could-help-reduce-unexpected-audio-or-video-playback-in-chrome) *(windowslatest.com)*
  > \*\*Winaero / Tech Coverage:\*\* Discussed the UX impact, pointing out that unexpected audio from hidden pop-ups or collapsed menus is one of the top user annoyances By letting the browser engine manage playback based on ren...
- [winaero.com](https://winaero.com/google-rolls-out-chrome-155-with-https-first-enabled-by-default) *(winaero.com)*
  > \*\*Winaero / Tech Coverage:\*\* Discussed the UX impact, pointing out that unexpected audio from hidden pop-ups or collapsed menus is one of the top user annoyances

#### 🔗 Inbound Citations & Reverse Links

- [media-playback-while-not-visible Permission Policy · Issue #1387 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1387) *(github.com · 2026-08-28T21:15:16)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > media-playback-while-not-visible Permission Policy · Issue #1387 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings Yo...
- ["media-playback-while-not-visible" Permission Policy · Issue #4292 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4292) *(github.com · 2026-09-01T17:43:52)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > "media-playback-while-not-visible" Permission Policy · Issue #4292 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sign...
- [\[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13464.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Pause media playback on not-rendered iframes Domenic Denicola...
- [\[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg10759.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Pause media playback on not-rendered iframes 'Gabriel Brito' via blink-...
- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > https://&lt;strong&gt;github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe\_media\_pausing.md&lt;/strong&gt;

#### 📚 Platform Documentation & References

- [iframe-media-pausing/explainer.md at main · WICG/iframe-media-pausing](https://github.com/WICG/iframe-media-pausing/blob/main/explainer.md) *(github.com)*
- ["media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/409) *(github.com)*
- [media-playback-while-not-visible Permission Policy · Issue #1387 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1387) *(github.com)*
- ["media-playback-while-not-visible" Permission Policy · Issue #4292 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4292) *(github.com)*
- [Pausing iframe media when not visible · Issue #1468 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1468) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Pause media playback on not-visible iframes Demo](https://gabrielsanbrito.github.io/media-playback-while-not-visible)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (47 found across 12 planned queries, 16 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 9 verified) · `Twitter / X API v2` *(found 5 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

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

- **Momentum:** **Moderate** (footprint 265 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""scroll-axis-lock" chrome"`, `""scroll-axis-lock" css"`
- **Analysis:** The CSS scroll-axis-lock property introduced in CSS Overflow 5 has shipped enabled by default in Chrome 153, offering developers a native declarative mechanism to disable directional axis-locking for two-dimensional scroll containers. Consensus across standard bodies is strong, highlighted by a satisfied W3C TAG review and positive reception in both Mozilla and WebKit standards discussions. The ecosystem views it as a significant ergonomic win that eliminates the need for heavy JavaScript touch-interception workarounds in maps, design canvases, and multi-directional carousels.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams building interactive maps, infinite canvases, or 2D photo viewers should apply scroll-axis-lock: none today as a pure progressive enhancement. Because CSS properties fail gracefully, non-supporting engines will simply continue using their default single-axis rail locking without causing layout regressions or breaking user navigation.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fred-wang: "&gt; Seems reasonable, but I wonder if making it inherited would make more sense.  For future reference, the explainer mentions this: https://github.com/..."
- Standards Activity (Mozilla): Latest discussion from @theres-waldo: "&gt; Same as \[#1448\](https://github.com/mozilla/standards-positions/issues/1448) I think this seems reasonable but I'd like \[@hiikezoe\](https://github.co..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

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

- [Unlock Immediate Diagonal Scrolling with CSS scroll-axis-lock: none – Bram.us](https://www.bram.us/2026/08/09/unlock-diagonal-scrolling-with-css-scroll-axis-lock-none) *(bram.us)*
  > Unlock Immediate Diagonal Scrolling with CSS scroll-axis-lock: none &#8211; Bram.us Skip to content Bram.us A rather geeky/technical weblog, est. 2001, by Bramus Unlock Immediate Diagonal Scrolling with CSS scroll-axis-l...
- [Unlock Immediate Diagonal Scrolling with CSS scroll-axis-lock: none \| daily.dev](https://daily.dev/posts/unlock-immediate-diagonal-scrolling-with-css-scroll-axis-lock-none-yjtrmj2rr) *(daily.dev)*
  > Unlock Immediate Diagonal Scrolling with CSS... Bram.us Read post Unlock Immediate Diagonal Scrolling with CSS scroll-axis-lock: none This title could be clearer and more informative. Sign up to try Clickbait Shield for ...
- [Scroll Axis Lock · August 10, 2026 \| daily.dev](https://daily.dev/posts/scroll-axis-lock-august-10-2026-cwfnxgqxn) *(daily.dev)*
  > Scroll Axis Lock · August 10, 2026 \| daily.dev Adam Argyle Read post Scroll Axis Lock · August 10, 2026 Chrome 153 introduces a CSS property to disable scroll axis locking, enabling natural diagonal scrolling in web scro...
- [Scroll Axis Lock · August 10, 2026](https://nerdy.dev/css-scroll-axis-lock) *(nerdy.dev)*
  > Scroll Axis Lock · August 10, 2026 2 min read Scroll Axis Lock css August 10, 2026 3,904 0 1 2 3 , 6 7 8 9 0 1 2 3 4 views Table of contents Use cases I did log a bug Comments 8 I first noticed web scroll areas had scrol...
- [\[blink-dev\] Intent to Prototype and Ship: scroll-axis-lock](http://www.mail-archive.com/blink-dev@chromium.org/msg17080.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype and Ship: scroll-axis-lock Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype and Ship: scroll-axis-lock David A Wed, 29 Jul 2026 06:10:58 -0700 \*Contact emails\* \[email&...
- [Re: \[blink-dev\] Re: Intent to Prototype and Ship: scroll-axis-lock](http://www.mail-archive.com/blink-dev@chromium.org/msg17105.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Prototype and Ship: scroll-axis-lock Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype and Ship: scroll-axis-lock 'Dan Clark' via blink-dev Mon, 03 Aug 2026 09:27...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype and Ship: scroll-axis-lock](http://www.mail-archive.com/blink-dev@chromium.org/msg17080.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5908461532610560`)*
  > \[blink-dev\] Intent to Prototype and Ship: scroll-axis-lock Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype and Ship: scroll-axis-lock David A Wed, 29 Jul 2026 06:10:58 -0700 \*Contact emails\* \[email&...
- [Re: \[blink-dev\] Re: Intent to Prototype and Ship: scroll-axis-lock](http://www.mail-archive.com/blink-dev@chromium.org/msg17105.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/pull/14152`)*
  > Re: \[blink-dev\] Re: Intent to Prototype and Ship: scroll-axis-lock Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype and Ship: scroll-axis-lock 'Dan Clark' via blink-dev Mon, 03 Aug 2026 09:27...

#### 📚 Platform Documentation & References

- [scroll-axis-lock · Issue #1265 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1265) *(github.com)*
- [Implement CSS scroll-axis-lock property by fred-wang · Pull Request #74484 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/74484) *(github.com)*
- [Set scroll-axis-lock status to 'preview' by fred-wang · Pull Request #75110 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/75110) *(github.com)*
- [scroll-axis-lock · Issue #4213 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4213) *(github.com)*
- [Parse CSS scroll-axis-lock property by fred-wang · Pull Request #74891 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/74891) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (45 found across 12 planned queries, 22 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 4 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (10 found, 10 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (4 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 10

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
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Chrome 157 ships the rename of CSS anchor positioning properties from \`anchors-valid\` and \`anchors-visible\` to their singular forms, \`anchor-valid\` and \`anchor-visible\`, aligning with CSSWG resolutions. While backward-compatible aliases are temporarily maintained, developers need to transition to the singular syntax to stay aligned with the evolving spec and maintain future-proof codebases.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should update their stylesheets to use the new singular properties (\`anchor-valid\` and \`anchor-visible\`) while leveraging the temporary plural aliases for older environments.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [position-visibility \| CSS-Tricks](https://css-tricks.com/almanac/properties/p/position-visibility) *(css-tricks.com)*
  > Discussions tracked under CSSWG GitHub issues (such as Issue #10201) highlighted the nuance of defining conditional visibility states like \`anchor-valid\` (which dictates how an element behaves if its corresponding anchor...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17578.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid 'Mason Freed' via blink-dev Tue, 29 Se...
- [Re: \[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17543.html) *(mail-archive.com)*
  > On Wed, Sep 23, 2026, 2:12 PM Mason ... \`anchors-visible\` --&gt; \`anchor-visible\` \[2\]. To accomplish this, we&#x27;ll &lt;strong&gt;rename the properties to the singular variants, and add aliases from the plural versions to th...
- [\[blink-dev\] Intent to Ship: Ship anchor-visible and anchor-valid, and deprecate the plural versions](http://www.mail-archive.com/blink-dev@chromium.org/msg17540.html) *(mail-archive.com)*
  > \*Specification\* https://drafts... \`anchors-visible\` --&gt; \`anchor-visible\` \[2\]. To accomplish this, we&#x27;ll &lt;strong&gt;rename the properties to the singular variants, and add aliases from the plural versions to the sing...
- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17557.html) *(mail-archive.com)*
  > My thought is that, because Firefox doesn&#x27;t ship anchor-valid yet, it seems helpful to just file the positions request to encourage interop on this subfeature. Especially since this feature came a bit later than the...
- [Introducing the CSS anchor positioning API \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/anchor-positioning-api) *(developer.chrome.com)*
  > You have control over these options with this feature. &lt;strong&gt;You use position-visibility: anchors-visible when you want the positioned element to stay in view until the anchor is out of view&lt;/strong&gt;:

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid](http://www.mail-archive.com/blink-dev@chromium.org/msg17578.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5136123851571200`)*
  > Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS position-visibility:anchor{s}-valid 'Mason Freed' via blink-dev Tue, 29 Se...
- [Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30757) *(github.com)* *(Cites: `https://chromestatus.com/feature/5136123851571200`)*
  > Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signe...
- [csswg-drafts/css-anchor-position-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-anchor-position-1/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-anchor-position-1/#position-visibility`)*
  > csswg-drafts/css-anchor-position-1/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab o...

#### 📚 Platform Documentation & References

- [CSS Anchor Positioning Module Level 1](https://www.w3.org/TR/css-anchor-position-1) *(w3.org)*
- [\[css-anchor-position\] Details on "anchors-valid" · Issue #10201 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/10201) *(github.com)*
- [Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30757) *(github.com)*
- [csswg-drafts/css-anchor-position-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-anchor-position-1/Overview.bs) *(github.com)*
- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 96.7% · Edge 96.1% · Firefox 84.3% · Safari 93.3%; experimental: Chrome 96.9% · Edge 97% · Firefox 86.6% · Safari 93.7%

#### 🌐 Web-features Group Context

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- **Chrome usage:** 0.073% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (65 found across 11 planned queries, 26 verified) · `Google Search Grounding (gemini-3.8-flash)` (4 found, 3 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (0 found, 0 verified) · `web-features mapping` *(group "anchor-positioning", shared with 8 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "anchor-positioning": Chrome 96.7% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (footprint 250 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** With Chromium exposing the CSSStyleValue hierarchy to Worker global scopes in Chrome 154 release notes, Blink resolves a longstanding omission where Typed OM constructors were exposed to Window and Worklets but missing in standard Web Workers. This change aligns Chromium with the W3C CSS Typed OM specification and enables off-main-thread CSS object creation and numeric arithmetic. Cross-engine consensus is unified, resolving a cross-thread inconsistency that previously hindered background style computation.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams performing style calculations off the main thread can now instantiate and compute Typed OM objects like CSSNumericValue or CSSUnitValue directly within Web Workers, using basic constructor feature detection for older Chromium builds. However, codebases should avoid assuming worker-side string parsing is available and keep raw CSS string tokenization on the main thread.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **16 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [CSS Typed OM Explained](https://drafts.css-houdini.org/css-typed-om/README) *(drafts.css-houdini.org)*
  > CSS Typed OM Explained CSS Typed OM Explained CSS Typed OM is an extensible API for the CSSOM that reduces the burden of manipulating a CSS property's value via string manipulation. It does so by exposing CSS values as t...
- [css-tricks.com](https://css-tricks.com/the-typed-object-model) *(css-tricks.com)*
  > \*\*Key Capability:\*\* Enables developers to perform off-main-thread CSS value creation and manipulation (e.g., unit math, transform processing, and color calculations inside a background thread) \*\*Sources:\*\* \*CSS-Tricks ("...
- [\[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17113.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker context...
- [Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17119.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker...
- [Web/API/CSS Typed OM API/Guide - Get docs](https://getdocs.org/Web/API/CSS_Typed_OM_API/Guide) *(getdocs.org)*
  > When we invoke get(), a custom property of type CSSUnparsedValue is returned. Note the space before the 1.2rem. To get a unit and value, we need a CSSUnitValue, which we can retrieve using the CSSStyleValue.parse() metho...
- [CSS Typed OM API: Guide - DOM Documentation - TypeError](https://www.typeerror.org/docs/dom/css_typed_om_api/guide) *(typeerror.org)*
  > The CSSStyleValue interface of the CSS Typed Object Model API is the base class of all CSS values accessible through the Typed OM API, including CSSImageValue, CSSKeywordValue, CSSNumericValue, CSSPositionValue, CSSTrans...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17113.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5114591051907072`)*
  > \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker context...
- [Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17119.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5114591051907072`)*
  > Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker...
- [1278697 - (css-typed-om) \[META\] Implement CSS Houdini Typed OM Level 1 specification](https://bugzilla.mozilla.org/show_bug.cgi?id=1278697) *(bugzilla.mozilla.org)* *(Cites: `https://www.w3.org/TR/css-typed-om-1/#stylevalue-subclasses`)*
  > 1278697 - (css-typed-om) \[META\] Implement CSS Houdini Typed OM Level 1 specification Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse ...
- [Add missing pages for \`CSSColorValue\` and related types · Issue #677 · mdn/mdn](https://github.com/mdn/mdn/issues/677) *(github.com · 2025-05-14T01:40:11)* *(Cites: `https://www.w3.org/TR/css-typed-om-1/#stylevalue-subclasses`)*
  > Add missing pages for \`CSSColorValue\` and related types · Issue #677 · mdn/mdn · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ...

#### 📚 Platform Documentation & References

- [Using the CSS Typed Object Model - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API/Guide) *(developer.mozilla.org)*
- [CSSStyleValue - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parseAll_static) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/api/cssstylevalue/parse_static/index.md?plain=1) *(github.com)*
- [1278697 - (css-typed-om) \[META\] Implement CSS Houdini Typed OM Level 1 specification](https://bugzilla.mozilla.org/show_bug.cgi?id=1278697) *(bugzilla.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `css-typed-om` on [wpt.fyi](https://wpt.fyi/results?q=feature:css-typed-om) (via webstatus.dev) — stable: Chrome 89.7% · Edge 89.7% · Firefox 12.1% · Safari 82.2%; experimental: Chrome 90.7% · Edge 90.7% · Firefox 83.2% · Safari 82.2%

#### 🌐 Web-features Group Context

*group-level data: web-features [`css-typed-om`](https://webstatus.dev/features/css-typed-om), shared with 1 other ChromeStatus feature*

- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/1091))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 10 planned queries, 20 verified) · `Google Search Grounding (gemini-3.8-flash)` (7 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "css-typed-om", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "css-typed-om": Chrome 89.7% passing (stable))*
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

- **Momentum:** **Moderate** (footprint 250 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Analysis:** Following Chrome's strategic pivot regarding third-party cookies and Privacy Sandbox ad auction mechanics, the \`&lt;fencedframe&gt;\` element and \`window.fence\` APIs are being stubbed in Chrome 156 and systematically removed in Chrome 157. Because Fenced Frames relied on \`FencedFrameConfig\` handles from deprecated ad auction and selection APIs, the element can no longer be navigated and serves no functional purpose. Ecosystem consensus favors this cleanup, as removing single-engine experimental surface reduces platform complexity and technical debt.

**Key Recommendations & Takeaways:**
- Actionable Advice: Engineering teams should audit their codebases to strip out any remaining \`&lt;fencedframe&gt;\` tags or \`window.fence\` calls before Chrome 157 turns stubs into unknown HTML elements. Embedded ad contexts should be refactored to rely on standard \`iframe\` containers with modern cross-origin isolation policies.
- Marked for deprecation in Chrome 156. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **9 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromium.org](https://issues.chromium.org/issues/538634423) *(issues.chromium.org)*
  > \*\*Phase 3 (Chrome 157 Stable):\*\* Gradual rollout to 100% stable, completing full removal from the Chromium engine \*\*Chrome Platform Status Entry & Issue #538634423:\*\* Detailed the technical roadmap and code health motiva...
- [Fenced frames overview \| Privacy Sandbox - Google](https://privacysandbox.google.com/private-advertising/fenced-frame) *(privacysandbox.google.com)*
  > \*\*Privacy Sandbox Feature Status & Developer Guides:\*\* The official \*Fenced frames overview\* documentation was updated to designate the feature as \*\*"Scheduled for phaseout"\*\* The guide notes that developers who previous...
- [google.com](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com)*
  > \*\*Privacy Sandbox Feature Status & Developer Guides:\*\* The official \*Fenced frames overview\* documentation was updated to designate the feature as \*\*"Scheduled for phaseout"\*\*
- [hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > \*\*Web Platform & Standards Trackers (e.g., \*Zenn Web Standards Trends\*, \*Hidekazu Konishi’s Privacy Sandbox Timeline\*):\*\* Industry observers tracking Chromium’s deprecations highlighted the removal as part of the broader...
- [zenn.dev](https://zenn.dev/cybozu_frontend/articles/web_standards_trends_202608) *(zenn.dev)*
  > \*\*Web Platform & Standards Trackers (e.g., \*Zenn Web Standards Trends\*, \*Hidekazu Konishi’s Privacy Sandbox Timeline\*):\*\* Industry observers tracking Chromium’s deprecations highlighted the removal as part of the broader...
- [google.com](https://groups.google.com/a/chromium.org/g/blink-dev/c/Ko9UXQYPgUE/m/URRsB-qvAAAJ) *(groups.google.com)*
  > They noted that the removal of fenced frames cleans up significant architectural complexity (such as Chromium’s multi-page architecture and internal beacon reporting IPCs) Editorial coverage and developer commentary have...

#### 🔗 Inbound Citations & Reverse Links

- [Fenced frames element removal dev tools issue \[539672121\] - Chromium](https://issues.chromium.org/issues/539672121) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/6366274495053824`)*
  > Chromium Sign in
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17167.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Shivani Sharma Thu, ...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17248.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Mike Taylor ...

#### 📚 Platform Documentation & References

- [Fenced Frame API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fenced_frame_API) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFencedFrameElement/allow) *(developer.mozilla.org)*
- [FencedFrameConfig - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/FencedFrameConfig) *(developer.mozilla.org)*
- [Remove FencedFrame element and window.fence APIs · Issue #30 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/30) *(github.com)*
- [\[rule\] element/fencedframe · Issue #110 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/110) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (48 found across 12 planned queries, 18 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 10 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (footprint 245 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Responsively-sized iframes" mozilla standards positions OR webkit standards"`, `""Responsively-sized iframes" OR "responsive iframes" "frame-sizing" csswg"`, `""Responsively-sized" iframe "css-sizing-4" OR "frame-sizing""`, `""Responsively-sized iframes" TAG review OR blink-dev"`
- **Analysis:** Standardized under CSS Box Sizing Module Level 4, responsively-sized iframes introduce the 'frame-sizing' CSS property combined with a child-side '&lt;meta name="responsive-embedded-sizing"&gt;' double opt-in to eliminate nested scrollbars without custom script messaging. Google Chrome shipped default support in Chrome 154, but the feature is not yet indexed in Baseline due to lack of cross-engine interoperability. Apple WebKit and Mozilla Gecko standards positions remain open, and TAG reviews are actively evaluating origin-scoping ergonomics.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt the feature as an opportunistic progressive enhancement while continuing to supply postMessage-based fallbacks for Safari and Firefox users. Child-frame providers can safely add the responsive-embedded-sizing meta tag today to prepare for future cross-browser expansion.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @bfgeek: "@jakearchibald - I posted a reply here: https://bsky.app/profile/bfgeek.bsky.social/post/3mxz67owyd22v as that seemed to be where more discussion was ..."
- Standards Activity (W3C TAG): Latest discussion from @dandclark: "Thanks for sending this to the TAG! We had a few points of feedback.  One is that the opt-in from the iframe isn't scoped in any way. The explainer \[p..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/status/2102804599325528424) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Responsively-sized iframes](https://github.com/WebKit/standards-positions/issues/653) [open] `venue: W3C CSS WG`, `topic: frames`, `from: Google`
- **Mozilla:** [Responsively-sized iframes](https://github.com/mozilla/standards-positions/issues/1394) [open] 
  > *Latest discussion from @bfgeek: "@jakearchibald - I posted a reply here: https://bsky.app/profile/bfgeek.bsky.social/post/3mxz67owyd22v as that seemed to be where more discussion was ..."*
- **W3C TAG:** [Other Spec Review: Responsively-sized iframes](https://github.com/w3ctag/design-reviews/issues/1223) [open] `Progress: pending external feedback`, `Review type: later review`, `Topic: CSS`, `Venue: CSS WG`
  > *Latest discussion from @dandclark: "Thanks for sending this to the TAG! We had a few points of feedback.  One is that the opt-in from the iframe isn't scoped in any way. The explainer \[p..."*

#### 📰 Ecosystem Blogs & Articles

- [Responsive iframes in Chrome 154 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/responsive-iframes) *(developer.chrome.com)*
  > The \*\*Responsively-sized \`&lt;iframe&gt;\`\*\* web platform feature (specified under the \*\*CSS Box Sizing Module Level 4\*\*) allows an \`&lt;iframe&gt;\` to size itself intrinsically according to the layout overflow of the document it emb...
- [New in Chrome 154: iframes that automatically resize themselves to their content – Bram.us](https://www.bram.us/2026/09/23/responsive-iframes) *(bram.us)*
  > \*\*Parent Document (Embedder):\*\* Applies the CSS \`frame-sizing\` property to the \`&lt;iframe&gt;\` element \*\*Child Document (Embedded):\*\* Explicitly grants permission via a \`&lt;meta&gt;\` tag in the \`&lt;head&gt;\` to communicate its layout d...
- [chrome.com](https://developer.chrome.com/blog/new-in-chrome-154) *(developer.chrome.com)*
  > \*\*Article:\*\* \*"Responsive iframes in Chrome 154"\* & \*"New in Chrome 154"\*
- [html.to](https://news.html.to/chrome-154-frame-sizing-responsive-iframes) *(news.html.to)*
  > \*\*Coverage:\*\* \*"Chrome 154 ships responsively-sized iframes with a two-side opt-in"\*
- [Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13791.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes 'Yifan Luo' via blink-dev Tue, 27 May 2025 03:12:28 -0700 Coll...
- [Intent to Prototype: Responsive iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/QirdSBIvM1k/m/rZdHOE59AQAJ) *(groups.google.com)*
  > Intent to Prototype: Responsive iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Responsive ...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13791.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes 'Yifan Luo' via blink-dev Tue, 27 May 2025 03:12:28 -0700 Coll...
- [Intent to Prototype: Responsive iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/QirdSBIvM1k/m/rZdHOE59AQAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > Intent to Prototype: Responsive iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Responsive ...
- [\[blink-dev\] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13733.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > \[blink-dev\] Re: Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: Responsive iframes Jake Archibald Tue, 20 May 2025 00:05:50 -0700 I think the "one shot" ...
- [Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13784.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes Chris Harrelson Fri, 23 May 2025 09:37:23 -0700 I filed a spec...
- [\[blink-dev\] Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13731.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > \[blink-dev\] Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Responsive iframes Chromestatus Mon, 19 May 2025 15:43:14 -0700 Contact emails \[email&#160;protec...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/WebKit/standards-positions/issues/653) *(github.com)*
- [Responsively-sized &lt;iframe&gt; · Issue #4036 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4036) *(github.com)*
- [Responsively-sized · Issue #1708 · davidjbradshaw/iframe-resizer](https://github.com/davidjbradshaw/iframe-resizer/issues/1708) *(github.com)*
- [Responsive iframes · Issue #1443 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1443) *(github.com)*
- [\[css-sizing\] How should auto-sizing of iframes work? · Issue #12229 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12229) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (54 found across 12 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (7 found, 5 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (8 found, 1 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (9 found, 6 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 7

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

- **Momentum:** **Moderate** (footprint 235 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** Chrome 155 enables 'srgb-linear' and 'display-p3-linear' as valid PredefinedColorSpace options for HTML canvas contexts, aligning 2D and 3D web graphics directly with CSS Color Level 4 specifications. This addition allows WebGL, WebGPU, and 2D canvas pipelines to operate directly in linear-light luminance spaces without manual gamma encoding and decoding. Browser vendor alignment is advancing through WHATWG spec updates, with Chrome leading shipping while Mozilla tracks implementation.

**Key Recommendations & Takeaways:**
- Actionable Advice: Canvas and WebGL/WebGPU application developers should adopt these color spaces using feature detection or fallback logic to standard 'srgb' or 'display-p3' contexts for older browser engines. Graphics library authors should update PredefinedColorSpace type aliases and verify shaders under linear intensity configurations in Chrome 155+.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **10 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "Chrome 155 beta is here, read the full blog below 👇 https://t.co/1bOV3c3Pxh" / X](https://x.com/ChromiumDev/status/2105325011116646507) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **Mozilla:** [srgb-linear and display-p3-linear PredefinedColorSpace](https://github.com/mozilla/standards-positions/issues/1453) [open] `venue: WHATWG`, `topic: API`

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1996208: Implement srgb-linear and display-p3-linear PredefinedColorSpace](https://bugzilla.mozilla.org/show_bug.cgi?id=1996208) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [pixijs.download](https://pixijs.download/dev/docs/environment.PredefinedColorSpace.html) *(pixijs.download)*
  > Traditionally, \`PredefinedColorSpace\` restricted web canvases (\`HTMLCanvasElement\`, \`OffscreenCanvas\`, WebGL/WebGPU contexts) primarily to gamma-encoded spaces like \`"srgb"\` and wide-gamut spaces like \`"display-p3"\` js) ...
- [github.io](https://facelessuser.github.io/coloraide/colors/display_p3_linear) *(facelessuser.github.io)*
  > Modern CSS supports a wide variety of rectangular and polar color spaces (including \`srgb-linear\` and \`display-p3-linear\`) via strings like \`color(srgb-linear ...)\` and \`color(display-p3-linear ...)\`
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17407.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Mike Tay...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Chromestatus Fri...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17396.html) *(mail-archive.com)*
  > &gt; LGTM2 &gt; &gt; On Mon, Sep 7, 2026 ...l#colour-spaces-and-colour-correction &gt;&gt;&gt; &gt;&gt;&gt; \*Summary\* &gt;&gt;&gt; &lt;strong&gt;Add srgb-linear and display-p3-linear color spaces (as defined by CSS) &gt;&gt;&g...
- [Color space - Glossary \| MDN](https://translate.google.com/translate?u=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FGlossary%2FColor_space&hl=pt&sl=en&tl=pt&client=srp) *(translate.google.com)*
  > The sRGB color space (standard red, green, and blue) was created for the web, but we are no longer limited to this color space. CSS Color Module Level 4 specifies several predefined color spaces, and CSS Color Module Lev...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17407.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5122501071994880`)*
  > Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Mike Tay...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5122501071994880`)*
  > \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear Chromestatus Fri...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/mdn/content/issues/42050) *(github.com)*
- [Color space - Glossary - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Glossary/Color_space) *(developer.mozilla.org)*
- [srgb-linear and display-p3-linear PredefinedColorSpace · Issue #1453 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1453) *(github.com)*
- [\[css-color-4\] Expose Linear-light sRGB as CSS syntax? · Issue #6087 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/6087) *(github.com)*
- [Add srgb-linear, display-p3-linear, and rec2020-linear color spaces by ccameron-chromium · Pull Request #42 · WICG/canvas-color-space](https://github.com/WICG/canvas-color-space/pull/42) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `canvas-2d-color-management` on [wpt.fyi](https://wpt.fyi/results?q=feature:canvas-2d-color-management) (via webstatus.dev) — stable: Chrome 37% · Edge 37% · Firefox 14.8% · Safari 81.5%; experimental: Chrome 59.3% · Edge 74.1% · Firefox 14.8% · Safari 81.5%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (52 found across 11 planned queries, 19 verified) · `Google Search Grounding (gemini-3.8-flash)` (4 found, 4 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 1 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (1 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "canvas-2d-color-management", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "canvas-2d-color-management": Chrome 37% passing (stable))*
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

- **Momentum:** **Moderate** (footprint 225 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The &lt;camera&gt; and &lt;microphone&gt; capability elements have officially shipped in Chrome 153 as part of the broader Page-Embedded Permission Control (PEPC) initiative. These declarative HTML controls shift hardware permission workflows away from opaque JavaScript-triggered getUserMedia() calls toward trusted, browser-owned interaction surfaces. Early developer feedback highlights significant improvements in recovering from blocked states and streamlining permission UX, though cross-browser adoption remains limited.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should treat these capability elements as a progressive enhancement layer, utilizing feature detection or fallback markup for unsupported browsers while testing integration flows on Chromium channels.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Chrome 153 ships camera and microphone HTML elements" (3 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **10 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Chrome 153 ships camera and microphone HTML elements](https://news.ycombinator.com/item?id=49618853) — *Hacker News (3 pts, 0 comments)*

#### 📰 Ecosystem Blogs & Articles

- [Chrome 153 ships camera and microphone HTML elements](https://webiterate.dev/capability-elements-camera-126) *(webiterate.dev · 2026-09-08T23:55:35Z)*
- [Introducing the &lt;usermedia&gt; HTML element \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/usermedia-html-element) *(developer.chrome.com)*
  > dev/Reddit highlight a major evolution in how web apps handle hardware permissions getUserMedia()\`) that often suffer from blocked permission prompts or difficult recovery loops, these elements provide a declarative, use...
- [daily.dev](https://daily.dev/posts/cihxu649r) *(daily.dev)*
  > dev/Reddit highlight a major evolution in how web apps handle hardware permissions \*\*Focus:\*\* Ecosystem reactions, developer sentiment, and cross-vendor standards debate
- [whatpwacando.today](https://whatpwacando.today/media-capability-elements) *(whatpwacando.today)*
  > Following the groundwork laid by the Page-Embedded Permission Control (PEPC) initiative and the rollout of elements like \`&lt;geolocation&gt;\`, the web platform has introduced functional capability controls for media streams: ...
- [Chrome wants the browser, not your app, to own camera permission prompts](https://blog.invidelabs.com/chrome-usermedia-html-element) *(blog.invidelabs.com)*
  > getUserMedia()\`) that often suffer from blocked permission prompts or difficult recovery loops, these elements provide a declarative, user-activated HTML approach The browser directly manages the prompt UI and permission...
- [reddit.com](https://www.reddit.com/r/webdev/comments/1ulb2nj/introducing_the_usermedia_html_element_chrome_for) *(reddit.com)*
  > \*\*Focus:\*\* Ecosystem reactions, developer sentiment, and cross-vendor standards debate \*\*Key Takeaways:\*\* While developers generally praise the ergonomic API design and the massive UX improvement for handling accidental ...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: Capability elements: &lt;camera&gt; and &lt;microphone&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17132.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5153829504024576`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Capability elements: and Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Capability elements: and 'Thomas Nguyen' via blink-dev Fri, 07 Aug 2026 04:23:06 -070...
- [\[blink-dev\] Intent to Ship: Capability elements: &lt;camera&gt; and &lt;microphone&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17048.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5153829504024576`)*
  > \[blink-dev\] Intent to Ship: Capability elements: and Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Capability elements: and Chromestatus Wed, 22 Jul 2026 14:47:30 -0700 Contact emails \[email&#160;prot...
- [\[blink-dev\] Re: Intent to Ship: Capability elements: &lt;camera&gt; and &lt;microphone&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17084.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5153829504024576`)*
  > \[blink-dev\] Re: Intent to Ship: Capability elements: and Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Capability elements: and Yoav Weiss (@Shopify) Wed, 29 Jul 2026 07:22:07 -0700 On Wednesday, ...
- [\[blink-dev\] Re: Intent to Extend Experiment: Capability Elements &lt;usermedia&gt; MVP](http://www.mail-archive.com/blink-dev@chromium.org/msg17027.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/mediacapture-extensions/blob/main/media-capture-elements-explainer.md`)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Capability Elements MVP Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Capability Elements MVP Alex Russell Wed, 22 Jul 2026 08:21:31 -0700...
- [\[blink-dev\] Intent to Extend Experiment: Capability Elements &lt;usermedia&gt; MVP](http://www.mail-archive.com/blink-dev@chromium.org/msg17006.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/mediacapture-extensions/blob/main/media-capture-elements-explainer.md`)*
  > \[blink-dev\] Intent to Extend Experiment: Capability Elements MVP Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Capability Elements MVP Chromestatus Mon, 20 Jul 2026 13:09:41 -0700 Contact...

#### 📚 Platform Documentation & References

- [&lt;usermedia&gt; element · Issue #3972 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3972) *(github.com)*
- [Background Blur: Unprocessed video should be mandatory to support · Issue #121 · w3c/mediacapture-extensions](https://github.com/w3c/mediacapture-extensions/issues/121) *(github.com)*
- [&lt;camera&gt; and &lt;microphone&gt; · Issue #4199 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4199) *(github.com)*
- [Capability Element - &lt;camera&gt; and &lt;microphone&gt; · Issue #1461 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1461) *(github.com)*
- [feat(site): evaluate &lt;usermedia&gt; launch flow for camera-enabled works · Issue #127 · kubohiroya/turbowarp-kamishibai-samples](https://github.com/kubohiroya/turbowarp-kamishibai-samples/issues/127) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `permissions` on [wpt.fyi](https://wpt.fyi/results?q=feature:permissions) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 33.3%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 33.3%

#### 🌐 Web-features Group Context

*group-level data: web-features [`permissions`](https://webstatus.dev/features/permissions), shared with 5 other ChromeStatus features*

- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/19))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 12 planned queries, 18 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 6 verified) · `Twitter / X API v2` *(found 9 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 1 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "permissions", shared with 5 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "permissions": Chrome 66.7% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (footprint 220 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** Following Google's strategic decision to maintain third-party cookies rather than phase them out, the Shared Storage API is being deprecated and removed starting in Chrome 153. Because alternative browser engines never signaled implementation interest and primary use cases remain viable via traditional cookies, Google is winding down support and cleaning up associated developer tools.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should audit applications for any remnants of sharedStorage worklets or API calls, remove production dependencies immediately, and pivot back to standard cookie-based or first-party patterns for cross-site workflows on Chrome.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [winaero.com](https://winaero.com/google-turns-off-key-privacy-sandbox-technologies) *(winaero.com)*
  > Following Google’s strategic shift to maintain the current approach to third-party cookies rather than phase them out entirely, the \*\*Shared Storage API\*\*—along with select other Privacy Sandbox initiatives—has been targ...
- [google.com](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc/m/WFTFnhyJBAAJ) *(groups.google.com)*
  > Consequently, Chromium status trackers, developer mailing lists, and documentation sites (such as MDN) have flagged the feature as deprecated and pending total removal \*\*Core Focus:\*\* This official engineering notice det...
- [Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > \*\*Core Focus:\*\* Broader announcements tracking Google’s pivot regarding advertising-relevance and measurement APIs \*\*Key Takeaway:\*\* Ecosystem roundups and technical analyses highlight that features tied closely to the i...
- [Intent To Deprecate and Remove: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc) *(groups.google.com · 2025-11-07T00:00:00)*
  > Intent To Deprecate and Remove: Shared Storage API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent To Deprecate a...
- [Re: \[blink-dev\] Intent to Ship: Support Cross-Origin Shared Storage Worklets](https://www.mail-archive.com/blink-dev@chromium.org/msg10067.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Support Cross-Origin Shared Storage Worklets Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Support Cross-Origin Shared Storage Worklets Mike Taylor Thu, 25 Apr 2024...
- [PSA: Shared Storage API deprecation and removal](https://groups.google.com/a/chromium.org/g/shared-storage-api-announcements/c/QvXkrgoqi80) *(groups.google.com · 2025-12-04T00:00:00)*
  > Following the announcement that Chrome will maintain its current approach to third-party cookies, &lt;strong&gt;the Shared Storage API will be deprecated in Chrome 144&lt;/strong&gt;, along with certain other APIs as outlined on the...

#### 🔗 Inbound Citations & Reverse Links

- [Intent To Deprecate and Remove: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > Intent To Deprecate and Remove: Shared Storage API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent To Deprecate a...
- [\[Google Privacy Sandbox\] Chrome 152 removed Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30659) *(github.com)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > \[Google Privacy Sandbox\] Chrome 152 stubbed out Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign...
- [Shared Storage · Issue #10 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/10) *(github.com · 2022-06-29T01:30:41)* *(Cites: `https://wicg.github.io/shared-storage`)*
  > Shared Storage · Issue #10 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload t...
- [Re: \[blink-dev\] Intent to Ship: Support Cross-Origin Shared Storage Worklets](https://www.mail-archive.com/blink-dev@chromium.org/msg10067.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/shared-storage`)*
  > Re: \[blink-dev\] Intent to Ship: Support Cross-Origin Shared Storage Worklets Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Support Cross-Origin Shared Storage Worklets Mike Taylor Thu, 25 Apr 2024...

#### 📚 Platform Documentation & References

- [Shared Storage API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Shared_Storage_API) *(developer.mozilla.org)*
- [\[Google Privacy Sandbox\] Chrome 152 removed Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30659) *(github.com)*
- [Shared Storage · Issue #10 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/10) *(github.com)*
- [Privacy sandbox - Privacy on the web - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Privacy_sandbox) *(developer.mozilla.org)*
- [GitHub - WICG/shared-storage: Explainer for proposed web platform Shared Storage API · GitHub](https://github.com/WICG/shared-storage) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (49 found across 11 planned queries, 19 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 4 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (footprint 220 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** Joint Iteration brings native zip and zipKeyed functionality to JavaScript iterators via TC39, reducing dependency on external utility libraries. Chromium-based browsers are moving forward with implementation while other engines track the proposal via active bugs.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can experiment with the feature using polyfills or bleeding-edge flags, but should rely on standard transpilation or polyfill libraries like core-js for safe cross-browser production deployment until Baseline support matures.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1911379: \[Meta\] Joint Iteration proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=1911379) `[NEW]`
- **WebKit (Safari):** [Bug #303246: \[JSC\] Implement \`Iterator.zip\` and \`Iterator.zipKeyed\`](https://bugs.webkit.org/show_bug.cgi?id=303246) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [techtwitter.com](https://www.techtwitter.com/articles/new-in-chrome-153-2098134897923658034) *(techtwitter.com)*
  > zipKeyed()\`\*\*—developers can handle multiple data streams, collections, or asynchronous sequences cleanly without relying on external third-party utility libraries \*\*Browser Status:\*\* Chromium-based browsers (such as Chr...
- [Joint iteration - core-js](https://core-js.io/docs/features/proposals/joint-iteration) *(core-js.io)*
  > Joint iteration - core-js v3 v3 (default) v3 v4 (alpha) Usage Supported engines and compatibility data Features ECMAScript ECMAScript: Object ECMAScript: Function ECMAScript: Error ECMAScript: Array ECMAScript: Iterator ...
- [Joint Iteration](https://tc39.es/proposal-joint-iteration) *(tc39.es)*
  > Joint Iteration Toggle shortcuts help ? Toggle "can call user code" annotations u Jump to search box / Toggle pinning of the current clause p Jump to the n th pin 1-9 Jump to the 10 th pin 0 Jump to the most recent link ...
- [webkit.org](https://bugs.webkit.org/show_bug.cgi?id=303246) *(bugs.webkit.org)*
  > zipKeyed\` to pass rigorous \`test262\` test suites
- [joint-iteration.js in frontend/node\_modules/core-js-pure/proposals – medora](https://develop.finki.ukim.mk/projects/medora/browser/frontend/node_modules/core-js-pure/proposals/joint-iteration.js?order=size&rev=9af201e94b5a79beb92a30858fc54de4bc3b9449) *(develop.finki.ukim.mk)*
  > joint-iteration.js in frontend/node\_modules/core-js-pure/proposals – medora Search: Login Preferences Help/Guide About Trac Wiki Timeline Roadmap Browse Source View Tickets Search Context Navigation &larr; Previous Revis...
- [betaacid.co](https://betaacid.co/blog/simplifying-array-combinations-with-arrayzip-and-arrayzipkeyed) *(betaacid.co)*
  > zipKeyed\` methods to mirror these exact semantics for arrays directly, circumventing the need to manually wrap objects into iterators first

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: Joint Iteration](http://www.mail-archive.com/blink-dev@chromium.org/msg17117.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6249068542164992`)*
  > Re: \[blink-dev\] Intent to Ship: Joint Iteration Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Joint Iteration Daniel Bratell Wed, 05 Aug 2026 07:39:27 -0700 LGTM1 Stage 4 TC39 proposal already imp...
- [\[blink-dev\] Intent to Ship: Joint Iteration](http://www.mail-archive.com/blink-dev@chromium.org/msg17116.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6249068542164992`)*
  > \[blink-dev\] Intent to Ship: Joint Iteration Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Joint Iteration Chromestatus Wed, 05 Aug 2026 05:51:36 -0700 Contact emails \[email&#160;protected\] , \[email&#1...
- [Re: \[blink-dev\] Intent to Ship: Joint Iteration](http://www.mail-archive.com/blink-dev@chromium.org/msg17122.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-joint-iteration`)*
  > Re: \[blink-dev\] Intent to Ship: Joint Iteration Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Joint Iteration Chris Harrelson Wed, 05 Aug 2026 08:09:49 -0700 LGTM3 On Wed, Aug 5, 2026 at 8:08 AM V...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/zip) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/zipKeyed) *(developer.mozilla.org)*
- [GitHub - tc39/proposal-array-zip: a TC39 proposal to synchronize the iteration of multiple arrays · GitHub](https://github.com/tc39/proposal-array-zip) *(github.com)*
- [proposal-joint-iteration/README.md at main · tc39/proposal-joint-iteration](https://github.com/tc39/proposal-joint-iteration/blob/main/README.md) *(github.com)*
- [1975381 - Add initial implementation of Joint Iteration proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=1975381) *(bugzilla.mozilla.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 10 planned queries, 16 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 9 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (5 found, 2 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5183354944225280-webtransport-datagram-writable-streams-and-prioritization"></a>
### [WebTransport Datagram writable streams and prioritization](https://chromestatus.com/feature/5183354944225280)

- **Milestone:** Chrome 155 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5183354944225280](https://chromestatus.com/feature/5183354944225280) · [chromestatuslite.com/feature/5183354944225280](https://chromestatuslite.com/feature/5183354944225280)
- **Specification:** [https://www.w3.org/TR/webtransport/#datagram-writable](https://www.w3.org/TR/webtransport/#datagram-writable)
- **Chromium Bug:** [https://issues.chromium.org/issues/547572475](https://issues.chromium.org/issues/547572475)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

#### 📝 Overview

Adds the modern WebTransport Datagram sending API.  WebTransportDatagramDuplexStream.createWritable() creates independent WebTransportDatagramsWritable streams. Each writable has mutable sendGroup and sendOrder attributes for expressing relative priority among queued WebTransport data in the same send group. Chromium currently applies this ordering among Datagram writables.  The implementation also reports the negotiated maximum outgoing Datagram payload size and discards oversized writes as required by the WebTransport specification.

> **Motivation:** The original WebTransport Datagram API exposes only a single writable stream, preventing applications from independently scheduling different classes of latency-sensitive messages.  The newer API allows applications such as games, remote-interaction systems, and real-time media applications to create multiple Datagram writables and prioritize urgen...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (footprint 220 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** The WebTransport Datagram writable streams and prioritization API upgrades the legacy singleton datagram writable model to a multi-stream architecture created via createWritable(), enabling granular scheduling through sendGroup and sendOrder attributes. This modernization is essential for low-latency networking applications such as gaming, remote interaction, and Media over QUIC (MoQ) by aligning datagram prioritization with WebTransport streams. The feature enjoys strong multi-engine consensus, resolving key interoperability targets in Interop 2026 as Chromium advances developer trials in Chrome 155.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building real-time media or high-frequency state sync applications should test multi-stream datagram scheduling behind browser flags in Chromium while leveraging feature detection for createWritable(). Implementations should progressively enhance from the legacy singleton writable stream to WebTransportSendGroup and sendOrder parameters where supported.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [ietf.org](https://datatracker.ietf.org/meeting/123/materials/slides-123-webtrans-webtransport-slides-ietf-123-03) *(datatracker.ietf.org)*
  > The \*\*WebTransport Datagram writable streams and prioritization\*\* feature introduces major enhancements to the WebTransport API by replacing the legacy, singular \`writable\` stream with a more flexible, multi-stream model...
- [appspot.com](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5183354944225280) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > The \*\*WebTransport Datagram writable streams and prioritization\*\* feature introduces major enhancements to the WebTransport API by replacing the legacy, singular \`writable\` stream with a more flexible, multi-stream model...
- [appspot.com](https://cr-status.appspot.com/feature/5183354944225280) *(cr-status.appspot.com)*
  > createWritable()\`\*\*: This method creates independent \`WebTransportDatagramsWritable\` streams \*\*Granular Prioritization (\`sendGroup\` and \`sendOrder\`)\*\*: Each writable stream features mutable \`sendGroup\` and \`sendOrder\` at...
- [\[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17327.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization ...
- [WebTransport](https://w3c.github.io/webtransport) *(w3c.github.io · 2021-10-01T12:35:03)*
  > The WebTransportSendOptions is a base dictionary of parameters that affect how createUnidirectionalStream, createBidirectionalStream, and the createWritable methods behave.
- [Minutes IETF122: webtrans](https://datatracker.ietf.org/doc/minutes-122-webtrans) *(datatracker.ietf.org · 2025-03-26T00:00:00)*
  > Updates - redirection as network error - protocol constructor - datagrams.createWritable() replaces datagrams.writable - priorities with sendOrder, sendGroup - shared fairness between send groups, with sendOrder differen...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17327.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5183354944225280`)*
  > \[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport Datagram writable streams and prioritization ...

#### 📚 Platform Documentation & References

- [WebTransportDatagramsWritable - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable) *(developer.mozilla.org)*
- [WebTransportSendGroup - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendGroup) *(developer.mozilla.org)*
- [github.com](https://github.com/w3c/webtransport/issues/610) *(github.com)*
- [WebTransportDatagramDuplexStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramDuplexStream) *(developer.mozilla.org)*
- [WebTransportDatagramDuplexStream: createWritable() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 45% · Edge 45% · Firefox 61.5% · Safari 42.6%; experimental: Chrome 89.9% · Edge 86% · Firefox 67.5% · Safari 74.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- **Chrome usage:** 0.00013% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 12 planned queries, 18 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 17 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 45% passing (stable))*
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
- **Analysis:** The CSS text-overflow &lt;string&gt; value allows developers to natively specify custom truncation tokens (such as "(more)" or custom symbols) instead of relying on JavaScript truncation or overlapping pseudo-elements. Following its landing in Chrome and parallel progress in WebKit pull requests, cross-browser interoperability is rapidly materializing for this long-awaited CSS Overflow Level 4 feature. Developers view it as a welcome simplification that eliminates brittle hack layers for text clipping.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can safely adopt text-overflow with custom strings as a progressive enhancement, falling back to standard ellipses or JS truncation for older browser versions. It is an ideal time to test layouts involving custom indicators in modern browser builds.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @jja08111: "https://github.com/WebKit/WebKit/pull/72631 has been merged, so close this issue...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS text-overflow: &lt;string&gt; value](https://github.com/WebKit/standards-positions/issues/710) [closed] `position: support`
  > *Latest discussion from @jja08111: "https://github.com/WebKit/WebKit/pull/72631 has been merged, so close this issue...."*

#### 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17547.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Rick Byers Thu, 24 Sep 2026 07:16:32 -0700 LGTM3 On Tue, Sep...
- [\[blink-dev\] Intent to Prototype: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17287.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-overflow: value Chromestatus Tue, 25 Aug 2026 05:36:48 -0700 Contact emails \[email...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17513.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Alex Russell Mon, 21 Sep 2026 11:51:54 -0700 LGTM2 On Monday, Septem...
- [\[blink-dev\] Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17500.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS text-overflow: value Chromestatus Sun, 20 Sep 2026 22:03:42 -0700 Contact emails \[email&#160;prot...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17519.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Minseong Kim Tue, 22 Sep 2026 07:55:45 -0700 The expected be...
- [CSS text-overflow property](https://www.w3schools.com/cssref/css3_pr_text-overflow.php) *(w3schools.com)*
  > &lt;strong&gt;The text-overflow property specifies how overflowed content that is not displayed should be signaled to the user&lt;/strong&gt;. It can be clipped, display an ellipsis (...), or display a custom string.

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17547.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Rick Byers Thu, 24 Sep 2026 07:16:32 -0700 LGTM3 On Tue, Sep...
- [\[blink-dev\] Intent to Prototype: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17287.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Intent to Prototype: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-overflow: value Chromestatus Tue, 25 Aug 2026 05:36:48 -0700 Contact emails \[email...
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17513.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Alex Russell Mon, 21 Sep 2026 11:51:54 -0700 LGTM2 On Monday, Septem...
- [\[blink-dev\] Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17500.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS text-overflow: value Chromestatus Sun, 20 Sep 2026 22:03:42 -0700 Contact emails \[email&#160;prot...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17519.html) *(mail-archive.com)* *(Cites: `https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow#string`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS text-overflow: value Minseong Kim Tue, 22 Sep 2026 07:55:45 -0700 The expected be...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/w3c/csswg-drafts/issues/11683) *(github.com)*
- [csswg-drafts/css-overflow-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-4/Overview.bs) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `custom-ellipses` on [wpt.fyi](https://wpt.fyi/results?q=feature:custom-ellipses) (via webstatus.dev) — stable: Chrome 0% · Edge 0% · Firefox 34.8% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 34.8% · Safari 0%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (45 found across 12 planned queries, 19 verified) · `Google Search Grounding (gemini-3.8-flash)` (3 found, 1 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "custom-ellipses", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "custom-ellipses": Chrome 0% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

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

- **Momentum:** **Moderate** (footprint 210 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Additional Windowing Controls extend the Window Management API to let web apps programmatically maximize, minimize, restore, and restrict resizing via setResizable() alongside related CSS media features. While shipping in Chrome 155 with strong backing for Virtual Desktop Infrastructure (VDI) use cases, it remains restricted to Chromium, facing open horizontal reviews and cautious security scrutiny from other vendors.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams building advanced PWA or VDI workspace clients should test the feature using Chrome flags and implement robust fallbacks. Use feature detection and progressive enhancement patterns for standard browsers that do not support advanced window manipulation.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @sonkkeli: "Hey, I'm jumping in here as I'm continuing on Ivan's work.  There were some updates made on the proposed APIs and the current proposals are at least a..."
- Standards Activity (Mozilla): Latest discussion from @michaelwasserman: "Client application window controls may indeed be limited by the OS, Window Manager, protocols, utilities, and modalities. The API surface offers coher..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Additional Windowing Controls](https://github.com/WebKit/standards-positions/issues/96) [open] `concerns: privacy`, `topic: app-like capabilities`, `concerns: integration`, `venue: none / personal repository`, `from: Google`, `concerns: annoyance`
  > *Latest discussion from @sonkkeli: "Hey, I'm jumping in here as I'm continuing on Ivan's work.  There were some updates made on the proposed APIs and the current proposals are at least a..."*
- **Mozilla:** [Additional Windowing Controls](https://github.com/mozilla/standards-positions/issues/712) [open] 
  > *Latest discussion from @michaelwasserman: "Client application window controls may indeed be limited by the OS, Window Manager, protocols, utilities, and modalities. The API surface offers coher..."*
- **W3C TAG:** [WG New Spec: Additional Windowing Controls](https://github.com/w3ctag/design-reviews/issues/1246) [open] `Review type: horizontal review`
  > *Latest discussion from @patrykchodur: "Reopening the issue..."*

#### 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17442.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Chris Harrelson Mon, 14 Sep 2026 09:14:30 -0700 LGTM2 On T...
- [\[blink-dev\] Re: Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17441.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Additional Windowing Controls Vladimir Levin Mon, 14 Sep 2026 08:57:02 -0700 LGTM1 On We...
- [\[blink-dev\] Ready for Developer Testing: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16555.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Additional Windowing Controls Chromestatus Tue, 19 May 2026 00:52:56 -...
- [\[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17394.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Additional Windowing Controls Chromestatus Tue, 08 Sep 2026 23:04:36 -0700 Contact emails \[email...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17444.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls Mike Taylor Mon, 14 Sep 2026 09:42:49 -0700 LGTM3 On 9/14/...
- [\[Proposal\] Additional Windowing Controls](https://discourse.wicg.io/t/proposal-additional-windowing-controls/6044) *(discourse.wicg.io)*
  > This proposal seeks to enable local web applications to convey a user’s intended window control interactions with remote (or custom) window controls. Summary of the API proposals, which are generally gated by Window Mana...

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

- [GitHub - explainers-by-googlers/additional-windowing-controls: Repository hosting the feature explainer · GitHub](https://github.com/explainers-by-googlers/additional-windowing-controls) *(github.com)*
- [Additional Windowing Controls · Issue #96 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/96) *(github.com)*
- [Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1364) *(github.com)*
- [Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4257) *(github.com)*
- [additional-windowing-controls/awc-explainer.md at main · explainers-by-googlers/additional-windowing-controls](https://github.com/ivansandrk/additional-windowing-controls/blob/main/awc-explainer.md) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Additional Windowing Controls Demo](https://awc-demo-4a08a808.web.app)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `window-management` on [wpt.fyi](https://wpt.fyi/results?q=feature:window-management) (via webstatus.dev) — stable: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%

#### 🌐 Web-features Group Context

*group-level data: web-features [`window-management`](https://webstatus.dev/features/window-management), shared with 6 other ChromeStatus features*

- **Chrome usage:** 0.00029% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/332))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 12 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (4 found, 2 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(group "window-management", shared with 6 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "window-management": Chrome 100% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 12

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

- **Momentum:** **Moderate** (footprint 210 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""proposal-iterator-includes" stage"`, `""tc39" "proposal-iterator-includes""`, `""proposal-iterator-sequencing" OR "proposal-iterator-includes" tc39"`, `""Iterator.prototype.includes" site:github.com/tc39"`
- **Analysis:** Iterator Includes (Iterator.prototype.includes) provides a direct analogue to Array.prototype.includes, allowing developers to query iterator streams using SameValueZero semantics without buffering them into intermediate arrays. Having achieved consensus at TC39 and advanced to Stage 4, the API is shipping by default in Chromium 154 and Firefox 154 while WebKit's implementation progresses through JavaScriptCore.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams deploying to general web audiences should continue using polyfills or progressive fallbacks (such as consuming the iterator or using predicate helper methods) until Safari ships unflagged support to achieve broad baseline interoperability. In controlled or Chromium-dominated runtimes, developers can immediately leverage the API to avoid eager array allocations.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2025773: \[meta\] Iterator includes proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=2025773) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [firefox.com](https://www.firefox.com/en-US/firefox/154.0/releasenotes) *(firefox.com)*
  > join()\`, allowing developers to query iterator streams directly without having to convert them into arrays first some(x =&gt; Object.is(x, val))\`
- [chrome.com](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > includes()\` in \*\*Chrome 154\*\* (desktop and Android)
- [codercops.com](https://blog.codercops.com/blog/chrome-154-websocket-options-iterator-includes-https-prompts-2026) *(blog.codercops.com)*
  > \*\*Chrome for Developers:\*\* Highlighted the feature among modern JavaScript ergonomics additions, pointing out that developers no longer need polyfills or temporary generator wrapper functions to check for item presence
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com)*
  > includes()\` alongside the Chromium 154 engine rollout, referencing MDN for migration patterns and standard iterator protocol compliance
- [core-js.io](https://core-js.io/changelog) *(core-js.io)*
  > windows()\`) includes\` and added into the stable namespace following TC39 plenary milestones
- [apache.org](https://lists.apache.org/thread/dwcw1n0gthxqzkr278khxbc406wh1vb2) *(lists.apache.org)*
  > \*\*Alternative Engines & Devlogs (GraalJS, Kiesel):\*\* Modern runtimes and alternative JavaScript engines (e.g., GraalJS and Kiesel) implemented the proposal in their standard releases, demonstrating rapid cross-engine con...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: Iterator Includes](http://www.mail-archive.com/blink-dev@chromium.org/msg17260.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5205192866922496`)*
  > Re: \[blink-dev\] Intent to Ship: Iterator Includes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Iterator Includes Mike Taylor Mon, 24 Aug 2026 07:00:20 -0700 LGTM1 On 8/24/26 9:40 a.m., Chromestat...
- [Iterator Includes · Issue #4302 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4302) *(github.com · 2026-09-03T10:35:01)* *(Cites: `https://chromestatus.com/feature/5205192866922496`)*
  > Iterator Includes · Issue #4302 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. R...
- [Re: \[blink-dev\] Intent to Ship: Iterator Includes](http://www.mail-archive.com/blink-dev@chromium.org/msg17275.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-iterator-includes`)*
  > Re: \[blink-dev\] Intent to Ship: Iterator Includes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Iterator Includes 'Dan Clark' via blink-dev Mon, 24 Aug 2026 11:53:07 -0700 LGTM3 On Monday, August ...
- [\[blink-dev\] Intent to Ship: Iterator Includes](http://www.mail-archive.com/blink-dev@chromium.org/msg17264.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-iterator-includes`)*
  > \[blink-dev\] Intent to Ship: Iterator Includes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Iterator Includes Chromestatus Mon, 24 Aug 2026 09:07:18 -0700 Contact emails \[email&#160;protected\] , \[emai...

#### 📚 Platform Documentation & References

- [Iterator.prototype.includes() - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/154) *(developer.mozilla.org)*
- [Iterator Includes · Issue #4302 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4302) *(github.com)*
- [Iterator : méthode includes() - JavaScript - MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) *(developer.mozilla.org)*
- [2034104 - Ship Iterator Includes proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=2034104) *(bugzilla.mozilla.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (66 found across 12 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 10 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (6 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (6 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (4 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (footprint 210 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** Iterator Join (\`Iterator.prototype.join()\`) is an ECMAScript TC39 proposal that enables native string concatenation directly from iterator instances without allocating intermediate arrays. The feature has shipped enabled by default in Chromium 153 and Gecko in Firefox 154, positioning the API just shy of full cross-browser interoperability. While developer consensus is strongly favorable towards completing the iterator helper ergonomics, the API currently remains at limited availability pending Safari support.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can begin adopting \`Iterator.prototype.join()\` in production today if using an iterator polyfill (such as \`es-iterator-helpers\`), or by falling back to \`.toArray().join()\` when feature detection (\`'join' in Iterator.prototype\`) evaluates to false. Production applications without polyfill coverage should hold off on relying on native engine execution until WebKit ships support across stable Safari releases.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- Community package available: \[es-iterator-helpers\](https://www.npmjs.com/package/es-iterator-helpers) (v1.4.0) for progressive enhancement.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2003341: \[meta\] Iterator join proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=2003341) `[NEW]`

#### 📦 Polyfills & NPM Ecosystem

- [es-iterator-helpers](https://www.npmjs.com/package/es-iterator-helpers) `v1.4.0` *(Verified Polyfill)* — An ESnext spec-compliant iterator helpers shim/polyfill/replacement that works as far down as ES3.

#### 📰 Ecosystem Blogs & Articles

- [discourse.group](https://es.discourse.group/t/iterator-prototype-join/2453) *(es.discourse.group)*
  > reduce()\` accumulator chain join()\` resolves this natively, matching features found in other languages like Python, Java, and Kotlin
- [developer-signals.dev](https://developer-signals.dev/features/iterator-join) *(developer-signals.dev)*
  > \*\*Key Details:\*\* Tracked actively across major browser engines, browser support has progressed rapidly (with landing milestones across Chromium/Edge and Gecko/Firefox engines)
- [Re: \[blink-dev\] Re: Intent to Ship: Iterator Join](http://www.mail-archive.com/blink-dev@chromium.org/msg17156.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Iterator Join Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Iterator Join Alex Russell Wed, 12 Aug 2026 08:39:54 -0700 LGTM3 On Wednesday, August 12, 2026 a...
- [\[dev-platform\] Intent to prototype and ship: Iterator Join](http://www.mail-archive.com/dev-platform@mozilla.org/msg01819.html) *(mail-archive.com)*
  > \[dev-platform\] Intent to prototype and ship: Iterator Join Skip to site navigation (Press enter) \[dev-platform\] Intent to prototype and ship: Iterator Join 'Daniel Minor' via \[email&#160;protected\] Tue, 16 Jun 2026 09:30...
- [\[blink-dev\] Intent to Ship: Iterator Join](http://www.mail-archive.com/blink-dev@chromium.org/msg17147.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Iterator Join Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Iterator Join Chromestatus Tue, 11 Aug 2026 23:39:56 -0700 Contact emails \[email&#160;protected\] Explainer https...
- [\[blink-dev\] Re: Intent to Ship: Iterator Join](http://www.mail-archive.com/blink-dev@chromium.org/msg17153.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Iterator Join Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Iterator Join Vladimir Levin Wed, 12 Aug 2026 08:30:53 -0700 LGTM1 On Wednesday, August 12, 2026 at 2:39...

#### 🔗 Inbound Citations & Reverse Links

- [web-features consumers report for 2026-09-01 · Issue #4287 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4287) *(github.com · 2026-09-01T08:55:15)* *(Cites: `https://chromestatus.com/feature/5095183554314240`)*
  > web-features consumers report for 2026-09-01 · Issue #4287 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in wi...
- [web-features consumers report for 2026-10-01 · Issue #4457 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4457) *(github.com · 2026-10-01T10:28:04)* *(Cites: `https://chromestatus.com/feature/5095183554314240`)*
  > web-features consumers report for 2026-10-01 · Issue #4457 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in wi...
- [Iterator Join · Issue #4304 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4304) *(github.com · 2026-09-03T10:46:12)* *(Cites: `https://chromestatus.com/feature/5095183554314240`)*
  > Iterator Join · Issue #4304 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reloa...
- [Re: \[blink-dev\] Re: Intent to Ship: Iterator Join](http://www.mail-archive.com/blink-dev@chromium.org/msg17156.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5095183554314240`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Iterator Join Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Iterator Join Alex Russell Wed, 12 Aug 2026 08:39:54 -0700 LGTM3 On Wednesday, August 12, 2026 a...
- [2047995 - Ship Iterator Join proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=2047995) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/tc39/proposal-iterator-join`)*
  > 2047995 - Ship Iterator Join proposal Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advanced Search New Bug Reports Documentation P...

#### 📚 Platform Documentation & References

- [Iterator.prototype.join() - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/join) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/javascript/reference/global_objects/iterator/index.md?plain=1) *(github.com)*
- [web-features consumers report for 2026-09-01 · Issue #4287 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4287) *(github.com)*
- [web-features consumers report for 2026-10-01 · Issue #4457 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4457) *(github.com)*
- [Iterator Join · Issue #4304 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4304) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (67 found across 13 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 4 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (6 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 1 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (footprint 210 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""JS Self-Profiling" "standards-positions" mozilla OR webkit"`, `""JS Self-Profiling Markers" OR "ProfilerSample.marker""`
- **Analysis:** The JS Self-Profiling Markers extension enhances the JavaScript Self-Profiling API by adding an execution marker (such as gc, style, layout, or paint) to samples, demystifying unexplained gaps in real-user monitoring traces. Currently in a Chromium origin trial starting in Chrome 153, the feature is championed by large-scale web applications and APM tools like Excel Online and Datadog. However, broader web platform adoption is throttled because the underlying JS Self-Profiling API remains implemented only in Chromium engines.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams managing performance-critical web applications should test the origin trial or adopt the API strictly via feature detection and progressive enhancement under cross-origin isolated environments. Do not treat the markers as a universal telemetry standard or build exclusive monitoring pipelines around them until cross-browser consensus emerges.
- In active Origin Trial in Chrome 153. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @monica-ch: "Thanks @kmiller68   1. UA-enforced sample limits: The \[spec\](https://wicg.github.io/js-self-profiling/#states) makes sampling best-effort and explicit..."
- Standards Activity (W3C TAG): Latest discussion from @monica-ch: "@marcoscaceres Just filed a WebKit position https://github.com/WebKit/standards-positions/issues/717..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **1 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [JS Self-Profiling API (including the Markers extension)](https://github.com/WebKit/standards-positions/issues/717) [open] 
  > *Latest discussion from @monica-ch: "Thanks @kmiller68   1. UA-enforced sample limits: The \[spec\](https://wicg.github.io/js-self-profiling/#states) makes sampling best-effort and explicit..."*
- **W3C TAG:** [Other Spec Review: JS Self-Profiling Markers (ProfilerSample.marker)](https://github.com/w3ctag/design-reviews/issues/1251) [open] `Review type: later review`
  > *Latest discussion from @monica-ch: "@marcoscaceres Just filed a WebKit position https://github.com/WebKit/standards-positions/issues/717..."*
- **W3C TAG:** [State extension for JS Self-Profiling API.](https://github.com/w3ctag/design-reviews/issues/682) [closed] `Review type: CG early review`, `Venue: WICG`, `Progress: stalled`, `Topic: performance`, `Missing: Multi-stakeholder support`
  > *Latest discussion from @torgo: "Hi @cnpsc yes it's describing the problem from the developer perspective rather than from the end-user perspective. It may seem like make-work but we'..."*

#### 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17130.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Chris Harrelson Wed, 05 Aug 2026 14:02:43 -0700 LGTM O...
- [\[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17114.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Chromestatus Tue, 04 Aug 2026 15:31:06 -0700 Contact emails \[e...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17121.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Chris Harrelson Wed, 05 Aug 2026 08:08:52 -0700 Please...
- [JS Self-Profiling API](https://wicg.github.io/js-self-profiling) *(wicg.github.io · 2026-02-18T00:00:00)*
  > &lt;strong&gt;This specification describes an API that allows web applications to control a sampling profiler for measuring client JavaScript execution times&lt;/strong&gt;. Complex web applications currently have limited visibility...
- [JS Self-Profiling API In Practice - NicJ.net](https://nicj.net/js-self-profiling-api-in-practice) *(nicj.net · 2021-12-31T19:16:36)*
  > The JS Self-Profiling API is a new API, currently only available in Chrome versions 94+ (on Desktop and Android). &lt;strong&gt;It provides a sampling profiler that you can enable, from JavaScript, for any of your visitors&lt;/st...
- [The JavaScript Self-Profiling API \| AddyOsmani.com](https://addyosmani.com/blog/js-self-profiling) *(addyosmani.com · 2020-11-01T00:00:00)*
  > // Begin a new profiling session // Provide a sampleInterval (period which the session obtains samples) const profiler = await performance.profile({ sampleInterval: 10 }); // Do some expensive work performSomeTask(); // ...

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
  > Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers Chris Harrelson Wed, 05 Aug 2026 08:08:52 -0700 Please...

#### 📚 Platform Documentation & References

- [JS Self-Profiling API (including the Markers extension) · Issue #717 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/717) *(github.com)*
- [JS Self-Profiling Markers · Issue #1812 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1812) *(github.com)*
- [JS Self-Profiling Markers · Issue #23 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/23) *(github.com)*
- [GitHub - monica-ch/js-profiling-markers-demo: Live demo of the JS Self-Profiling API markers extension (Origin Trial) — works in Edge and Chrome](https://github.com/monica-ch/js-profiling-markers-demo) *(github.com)*
- [Profiler - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Profiler) *(developer.mozilla.org)*

#### 🧪 Interactive Demos & Samples

- [JS Self-Profiling Markers Demo](https://github.com/victorhuangwq/js-profiler-markers-demo)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (52 found across 12 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (3 found, 1 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (15 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (6 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 13

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

- **Momentum:** **Moderate** (footprint 210 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"Chrome removing XSLT developer.chrome.com"`, `"Chrome XML parsing Rust libxml2"`, `"Chromium Rust XML parser DOMParser"`
- **Analysis:** Chromium's transition to a memory-safe Rust XML parser for non-XSLT scenarios (shipping enabled by default in Chrome 153) is a major architectural milestone designed to eliminate longstanding memory-corruption vulnerabilities tied to legacy C libraries like libxml2. The replacement covers DOMParser, XMLHttpRequest responseXML, and standalone/external SVG rendering while maintaining conformance with W3C XML specifications. Because this is an under-the-hood engine hardening effort rather than a new web API, cross-browser consensus on the underlying web standards remains unchanged, even as all major engines coordinate to retire legacy XSLT.

**Key Recommendations & Takeaways:**
- Actionable Advice: No code changes are required for standard-compliant XML and SVG assets, as existing APIs like DOMParser and XMLHttpRequest remain functionally identical. Teams parsing XML on the client should avoid relying on specific XML error string formats or external entity loading, and audit any legacy pipelines to confirm they do not depend on companion features slated for sunsetting, such as XSLT.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome Rewrites XML Processing in Rust \| Why Replace the Parser?｜Haru - AIと働くひとのメモ帳。](https://note.com/haru_tech_note/n/n88a13e6a3e7c?hl=en) *(note.com)*
  > Chrome Rewrites XML Processing in Rust \| Why Replace the Parser?｜Haru - AIと働くひとのメモ帳。 メインコンテンツへスキップ Chrome Rewrites XML Processing in Rust \| Why Replace the Parser? Haru - AIと働くひとのメモ帳。 2026年9月10日 09:38 "We have updated th...
- [Chrome 158 Drops XSLT on 17 November: Fix RSS and Sitemaps - DEV Community](https://dev.to/akaranjkar08/chrome-158-drops-xslt-on-17-november-fix-rss-and-sitemaps-4moc) *(dev.to)*
  > xml-stylesheet type="text/xsl"?&gt;\`), clearing the way to eventually retire \`libxml2\` entirely xml-stylesheet type="text/css"?&gt;\`) and core XML parsing are staying intact
- [Removing XSLT for a more secure browser \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/deprecating-xslt) *(developer.chrome.com)*
  > xml-stylesheet type="text/xsl"?&gt;\`), clearing the way to eventually retire \`libxml2\` entirely xml-stylesheet type="text/css"?&gt;\`) and core XML parsing are staying intact
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > \*\*Source:\*\* \[developer.chrome.com\](https://developer.chrome.com) & Chrome Platform Status (Tracking Issue \`#466303347\`)
- [r/rust on Reddit: 🥳 Chrome adopts Rust and replaces libxml2 written in C since version 147](https://www.reddit.com/r/rust/comments/1sfrvno/chrome_adopts_rust_and_replaces_libxml2_written) *(reddit.com)*
  > \*\*Source:\*\* \[developer.chrome.com\](https://developer.chrome.com) & Chrome Platform Status (Tracking Issue \`#466303347\`) \*\*Source:\*\* \*Reddit (\`r/rust\`), Issue Trackers\*
- [daily.dev](https://daily.dev/posts/chromium-s-plan-to-deprecate-and-remove-xslt-dhq8zbv55) *(daily.dev)*
  > Details how modern client-side JavaScript, WebAssembly alternatives (e.g., SaxonJS), and JSON workflows make XSLT obsolete, justifying its removal to facilitate pure memory-safe Rust parsing across all XML operations

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 11 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 10 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 2 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (9 found, 4 verified)
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

- **Momentum:** **Emerging** (footprint 200 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** The CSS symbols() function eliminates the boilerplate of global @counter-style rules by enabling inline, anonymous counter styles directly in properties like list-style-type. With Chrome shipping support and Gecko having long supported it, the feature is closing a major multi-year interoperability gap. Browser consensus is coalescing positively as engine positioning discussions progress.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can adopt symbols() today using progressive enhancement, falling back to standard list styles or named @counter-style rules for older browsers that lack support. It is safe to leverage for modern UI treatments where graceful degradation is applied.
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

- [symbols() \| CSS-Tricks](https://css-tricks.com/almanac/functions/s/symbols) *(css-tricks.com)*
  > The CSS \`symbols()\` function enables developers to define custom counter styles inline directly within properties like \`list-style-type\`, the \`list-style\` shorthand, or counter-related functions like \`counter()\` and \`cou...
- [CSS symbols() Function](https://www.quackit.com/css/functions/css_symbols_function.cfm) *(quackit.com)*
  > It is ideal for one-off list items or unique UI treatments (such as alternating emojis or custom symbols) without the verbosity of setting up a named global \`@counter-style\` rule The article emphasizes that while \`@count...
- [\[blink-dev\] Re: Intent to Ship: CSS Symbols()](http://www.mail-archive.com/blink-dev@chromium.org/msg17348.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: CSS Symbols() Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS Symbols() 'Ananya Anand' via blink-dev Wed, 02 Sep 2026 10:15:33 -0700 Thanks for the reviews! I've ...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS Symbols()](http://www.mail-archive.com/blink-dev@chromium.org/msg17356.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS Symbols() Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS Symbols() Yoav Weiss (@Shopify) Wed, 02 Sep 2026 11:54:43 -0700 LGTM3 On Wed, Sep 2, 2026 at...
- [\[blink-dev\] Intent to Ship: CSS Symbols()](http://www.mail-archive.com/blink-dev@chromium.org/msg17319.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS Symbols() Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS Symbols() Chromestatus Thu, 27 Aug 2026 14:53:33 -0700 Contact emails \[email&#160;protected\] , \[email&#160;p...
- [An in-depth guide to customising lists with CSS - Piccalilli](https://piccalil.li/blog/an-in-depth-guide-to-customising-lists-with-css) *(piccalil.li)*
  > However it is also possible to define a sequence of symbols for your bullets. There are a couple of ways to do this. The first is with the symbols() function, which you can &lt;strong&gt;use as a value of the list-style proper...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: CSS Symbols()](http://www.mail-archive.com/blink-dev@chromium.org/msg17348.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > \[blink-dev\] Re: Intent to Ship: CSS Symbols() Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS Symbols() 'Ananya Anand' via blink-dev Wed, 02 Sep 2026 10:15:33 -0700 Thanks for the reviews! I've ...
- [New feature: symbols() · Issue #4203 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4203) *(github.com · 2026-07-23T18:55:08)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > New feature: symbols() · Issue #4203 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wind...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS Symbols()](http://www.mail-archive.com/blink-dev@chromium.org/msg17356.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS Symbols() Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS Symbols() Yoav Weiss (@Shopify) Wed, 02 Sep 2026 11:54:43 -0700 LGTM3 On Wed, Sep 2, 2026 at...
- [\[blink-dev\] Intent to Ship: CSS Symbols()](http://www.mail-archive.com/blink-dev@chromium.org/msg17319.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > \[blink-dev\] Intent to Ship: CSS Symbols() Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS Symbols() Chromestatus Thu, 27 Aug 2026 14:53:33 -0700 Contact emails \[email&#160;protected\] , \[email&#160;p...
- [\[css-counter-styles-3\] CSS symbols() function · Issue #714 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/714) *(github.com · 2026-08-24T19:00:16)* *(Cites: `https://drafts.csswg.org/css-counter-styles-3/#symbols-function`)*
  > \[css-counter-styles-3\] CSS symbols() function · Issue #714 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with...

#### 📚 Platform Documentation & References

- [symbols() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/symbols) *(developer.mozilla.org)*
- [New feature: symbols() · Issue #4203 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4203) *(github.com)*
- [\[css-counter-styles-3\] CSS symbols() function · Issue #714 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/714) *(github.com)*
- [symbols CSS at-rule descriptor - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/symbols) *(developer.mozilla.org)*
- [CSS Counter Styles Level 3](https://www.w3.org/TR/css-counter-styles-3) *(w3.org)*

#### 🧪 Interactive Demos & Samples

- [CSS Symbols() Demo](https://developer.mozilla.org/en-US/docs/Web/CSS/symbols)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (64 found across 12 planned queries, 17 verified) · `Google Search Grounding (gemini-3.8-flash)` (3 found, 3 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (3 found, 2 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

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

- **Momentum:** **Emerging** (footprint 200 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebRTC Diagnostic Logging" webkit standards positions"`, `""WebRTC Diagnostic Logging API" chrome"`, `""WebRTC Diagnostic Logging" mozilla standards positions"`
- **Analysis:** The WebRTC Diagnostic Logging API addresses persistent operational hurdles by giving web applications programmatic access to trigger and collect internal WebRTC diagnostics for production debugging and user-agent issue reporting. While Chromium has advanced the API through origin trials to stable enablement under enterprise administrative policies, cross-browser consensus is absent. It currently remains a Chromium-specific utility targeted largely at enterprise fleet environments rather than an interoperable web standard.

**Key Recommendations & Takeaways:**
- Actionable Advice: Enterprise applications running in managed desktop Chrome environments can adopt the API progressively while configuring the WebRtcDiagnosticLogCollectionAllowedForOrigins policy. Consumer-facing and multi-browser web applications must continue relying on standard getStats() metric polling for cross-platform observability.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "I think those are pretty weak use cases for adding a web API.  &gt; \* An organization has a custom WebRTC deployment and they want to analyze logs at sca..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [WebRTC Diagnostic Logging](https://github.com/WebKit/standards-positions/issues/699) [open] 
- **Mozilla:** [WebRTC Diagnostic Logging](https://github.com/mozilla/standards-positions/issues/1436) [open] `venue: W3C CG`, `concerns: privacy`, `concerns: API design`, `topic: API`
  > *Latest discussion from @zcorpan: "I think those are pretty weak use cases for adding a web API.  &gt; \* An organization has a custom WebRTC deployment and they want to analyze logs at sca..."*

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/origintrials) *(developer.chrome.com)*
  > The \*\*WebRTC Diagnostic Logging API\*\* is an incubated Web Platform feature developed under the WICG (Web Incubator Community Group) \*\*Source:\*\* \[WICG / WebRTC Diagnostic Logging Specification\](https://wicg.github.io/webr...
- [WebRTC Diagnostic Logging API](https://wicg.github.io/webrtc-diagnostic-logging) *(wicg.github.io)*
  > It provides a standardized programmatic mechanism for web applications to trigger, manage, and discard user-agent diagnostic logs for WebRTC connections The Diagnostic Logging API solves this by allowing developers to in...
- [appspot.com](https://cr-status.appspot.com/feature/5091582546149376) *(cr-status.appspot.com)*
  > The Diagnostic Logging API solves this by allowing developers to initiate log collection directly from the page while protecting user privacy \*\*Source:\*\* \[Chrome Platform Status\](https://chromestatus.com/) & \[Chrome Orig...
- [google.com](https://groups.google.com/a/chromium.org/g/blink-dev/c/L2kX7raIUCE) *(groups.google.com)*
  > Developers can attach this ID to user bug reports or crash reports, allowing browser vendors or enterprise support teams to locate and correlate the out-of-band uploaded logs \*\*Enterprise Control:\*\* In browser implementa...
- [samsung.com](https://developer.samsung.com/browser/policy/web-rtc-diagnostic-log-collection-allowed-for-origins.html) *(developer.samsung.com)*
  > \*\*Enterprise Control:\*\* In browser implementations like Chromium, logging is guarded by user consent and gated via the enterprise policy \*\*\`WebRtcDiagnosticLogCollectionAllowedForOrigins\`\*\*, ensuring only administrative ...
- [\[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17731.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API Chromestatus Wed, 14 Oct 2026 16:35:06 -...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17731.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > \[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: WebRTC Diagnostic Logging API Chromestatus Wed, 14 Oct 2026 16:35:06 -...
- [WebRTC Diagnostic Logging API · Issue #1343 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1343) *(github.com · 2026-08-14T17:31:56)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > WebRTC Diagnostic Logging API · Issue #1343 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anot...
- [WebRTC diagnostic logging · Issue #4531 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4531) *(github.com · 2026-10-15T10:57:10)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > WebRTC diagnostic logging · Issue #4531 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or w...
- [\[blink-dev\] Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16832.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webrtc-diagnostic-logging/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: WebRTC Diagnostic Logging API Chromestatus Tue, 23 Jun 2026 08:58:45 -0700 Contact e...
- [Re: \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16877.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webrtc-diagnostic-logging/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API Chris Harrelson Thu, 25 Jun 2026 13:13...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/WebKit/standards-positions/issues/699) *(github.com)*
- [WebRTC Diagnostic Logging API · Issue #1343 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1343) *(github.com)*
- [WebRTC diagnostic logging · Issue #4531 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4531) *(github.com)*
- [WebRTC Diagnostic Logging · Issue #1436 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1436) *(github.com)*
- [Incubation: WebRTC Diagnostic Logging · Issue #1250 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1250) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webrtc` on [wpt.fyi](https://wpt.fyi/results?q=feature:webrtc) (via webstatus.dev) — stable: Chrome 73% · Edge 73.5% · Firefox 82.5% · Safari 71.9%; experimental: Chrome 73.9% · Edge 74.3% · Firefox 85% · Safari 74.3%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (60 found across 12 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webrtc", shared with 66 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webrtc": Chrome 73% passing (stable))* · `Sources cited by the AI synthesis` (8 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

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

- **Momentum:** **Emerging** (footprint 195 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The \`buffer\_view\` WGSL language extension introduces safe type-punning and memory partitioning for storage, uniform, and workgroup variables via built-in functions like \`bufferView\` and \`bufferArrayView\`. Having officially landed in the WGSL specification and enabled by default in Chrome 153, the feature resolves long-standing memory layout headaches for GPU programmers. However, cross-browser availability remains limited while Mozilla Gecko and Apple WebKit implementations are pending.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should guard use of the feature by querying \`navigator.gpu.wgslLanguageFeatures.has('buffer\_view')\` before compiling shaders, while retaining existing structured or bitcast buffer layouts as fallbacks for Safari and Firefox. Compute and rendering pipeline architects can prototype single-buffer partitioning and bindless layouts in Chromium today, preparing for production adoption once wider engine availability lands.
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
  > WebGPU&apos;daki yenilikler (Chrome 153-154) \| Blog \| Chrome for Developers Ana içeriğe atla / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe...
- [webgpu.report](https://webgpu.report/features/wgsl:buffer_view) *(webgpu.report)*
  > Traditionally, accessing raw or mixed-type buffer chunks required declaring clumsy arrays of primitive types (like \`array&lt;u32&gt;\` or \`array&lt;uvec4&gt;\`) and manually decoding/bitcasting data offsets \*\*Partition a single variab...
- [chromestatus.com](https://chromestatus.com/feature/5094091886034944/activity) *(chromestatus.com)*
  > Because \`buffer\_view\` is a strictly additive shader-side capability that poses minimal browser-sandbox or host risks, implementation rollout has moved swiftly across Chromium-based browsers, with ongoing discussions trac...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg17064.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Alex Russell Mon, 27 Jul 2026 11:38:15 -0700 Hey A...
- [\[blink-dev\] Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg16978.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebGPU: \`buffer\_view\` feature Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: \`buffer\_view\` feature Chromestatus Wed, 15 Jul 2026 11:23:32 -0700 Contact emails \[email...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg17024.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Vladimir Levin Wed, 22 Jul 2026 06:55:00 -0700 LGTM1 On We...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg17064.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5094091886034944`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Alex Russell Mon, 27 Jul 2026 11:38:15 -0700 Hey A...
- [\[blink-dev\] Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg16978.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/buffer-view.md`)*
  > \[blink-dev\] Intent to Ship: WebGPU: \`buffer\_view\` feature Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: \`buffer\_view\` feature Chromestatus Wed, 15 Jul 2026 11:23:32 -0700 Contact emails \[email...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg17024.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/buffer-view.md`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Vladimir Levin Wed, 22 Jul 2026 06:55:00 -0700 LGTM1 On We...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg17035.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/buffer-view.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature Alex Russell Wed, 22 Jul 2026 08:33:30 -0700 Sorry...

#### 📚 Platform Documentation & References

- [\[buffer-view\] Viewing the content of a storage buffer as different types. · Issue #5338 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5338) *(github.com)*
- [feat(graphics): adopt WGSL buffer\_view once every WebGPU browser ships it · Issue #9389 · playcanvas/engine](https://github.com/playcanvas/engine/issues/9389) *(github.com)*
- [WebGPU Shading Language](https://www.w3.org/TR/WGSL) *(w3.org)*
- [GPU Web 2026‐03‐10 WGSL](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2026%E2%80%9003%E2%80%9010-WGSL) *(github.com)*
- [GPU Web 2026‐01‐06 WGSL](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2026%E2%80%9001%E2%80%9006-WGSL) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)

#### 🌐 Web-features Group Context

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- **Chrome usage:** 0.096% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (49 found across 13 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webgpu", shared with 44 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webgpu": no stable pass rate for Chrome yet)*
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 9

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

- **Momentum:** **Emerging** (footprint 190 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Chrome 157 introduces mandatory CORS enforcement for the Background Fetch API, aligning Chromium's implementation with the official WICG specification. This change closes a critical security loophole that previously permitted asynchronous background downloads to bypass standard security policies like CORS and Local Network Access checks. Overall, it transitions Background Fetch onto standard request machinery to prevent cross-origin data leaks.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams relying on Background Fetch for cross-origin resources must ensure proper CORS headers are configured on their servers. Existing implementations should be tested to confirm that assets load correctly under the new enforcement rules.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img536-dot-cr-status.appspot.com/feature/6210300985606144) *(img536-dot-cr-status.appspot.com)*
  > Starting in \*\*Chrome 157\*\*, the Background Fetch API enforces \*\*Cross-Origin Resource Sharing (CORS)\*\* This update aligns Chromium's implementation with the intent of the official Background Fetch specification
- [sentinelone.com](https://www.sentinelone.com/vulnerability-database/cve-2026-1504) *(sentinelone.com)*
  > \*\*Key Takeaway:\*\* Previous gaps in the Background Fetch implementation occasionally led to information disclosure risks or cross-origin data leaks because same-origin policy constraints weren't consistently applied to as...
- [\[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17645.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chromestatus Fri, 02 Oct 2026 09:53:21 -0700 Conta...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17683.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Mike Taylor Wed, 07 Oct 2026 10:58:58 -070...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17672.html) *(mail-archive.com)*
  > This update aligns Chromium&#x27;s ... Local &gt; Network Access checks. &lt;strong&gt;This update prevents sites from bypassing CORS (and &gt; other security policy checks) by using Background Fetch instead of regular &gt; \[F...
- [BackgroundFetchManager.fetch() - Web APIs \| MDN](https://mdn2.netlify.app/en-us/docs/web/api/backgroundfetchmanager/fetch) *(mdn2.netlify.app · 2021-11-18T00:00:00)*
  > &lt;strong&gt;A Promise that resolves with a BackgroundFetchRegistration object&lt;/strong&gt;. ... Raised if no request is provided, if the mode of a request is &#x27;no-cors&#x27;, if no service worker is present, a request alread...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17645.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Chromestatus Fri, 02 Oct 2026 09:53:21 -0700 Conta...
- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17683.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Mike Taylor Wed, 07 Oct 2026 10:58:58 -070...

#### 📚 Platform Documentation & References

- [mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=2079467) *(bugzilla.mozilla.org)*
- [GitHub - WICG/background-fetch: API proposal for background downloading/uploading · GitHub](https://github.com/WICG/background-fetch) *(github.com)*
- [background-fetch/README.md at main · WICG/background-fetch](https://github.com/WICG/background-fetch/blob/main/README.md) *(github.com)*
- [Icon fetch does not use CORS · Issue #117 · WICG/background-fetch](https://github.com/WICG/background-fetch/issues/117) *(github.com)*
- [Restrict requests to http(s): scheme · Issue #44 · WICG/background-fetch](https://github.com/WICG/background-fetch/issues/44) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `background-fetch` on [wpt.fyi](https://wpt.fyi/results?q=feature:background-fetch) (via webstatus.dev) — stable: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%; experimental: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%

#### 🌐 Web-features Group Context

*group-level data: web-features [`background-fetch`](https://webstatus.dev/features/background-fetch), shared with 1 other ChromeStatus feature*

- **Mozilla:** no position recorded ([standards position](https://github.com/mozilla/standards-positions/issues/30))
- **WebKit:** no position recorded ([standards position](https://github.com/WebKit/standards-positions/issues/149)) · concerns: `privacy`, `maintenance`

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (63 found across 11 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (4 found, 3 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "background-fetch", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "background-fetch": Chrome 37.5% passing (stable))*
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

- **Momentum:** **Emerging** (footprint 190 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""BackForwardCacheForWebSocketsAllowed""`, `""Disconnect WebSockets on BFCache entry""`, `""whatwg/html" "WebSocket" bfcache disconnect"`
- **Analysis:** Disconnecting WebSockets on Back/Forward Cache (BFCache) entry removes a longstanding blocker that previously forced browsers to discard pages with active socket connections upon navigation. By proactively severing the connection and dispatching standard error and close events upon cache restoration, browsers enable instant back/forward transitions while relying on standard client reconnection logic. Cross-engine consensus in the WHATWG HTML standard reflects strong alignment, mirroring existing patterns established for WebTransport.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit application WebSocket lifecycles to guarantee robust reconnection handlers on \`close\` and \`error\` events, or explicitly manage reconnects using the \`pageshow\` event with \`event.persisted\`. Enterprise developers supporting legacy intranets lacking auto-reconnect routines should test against current releases and leverage the temporary enterprise policy opt-out if immediate refactoring is not feasible.
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
  > Historically, active WebSocket connections were a primary blocker for the \*\*Back/Forward Cache (bfcache)\*\* across Chromium-based browsers notRestoredReasons\` previously returned \`"websocket"\` as an eviction reason, but n...
- [New in Chrome 149 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-149) *(developer.chrome.com)*
  > Because the browser could not keep live TCP socket connections alive while suspending a page in memory, it routinely evicted any page with an active socket, forcing a full network reload upon back/forward navigation With...
- [neuraldemy.com](https://neuraldemy.com/handling-bfcache-with-active-websocket-connections-in-react) *(neuraldemy.com)*
  > Because the browser could not keep live TCP socket connections alive while suspending a page in memory, it routinely evicted any page with an active socket, forcing a full network reload upon back/forward navigation \*\*Th...
- [Microsoft Edge Browser Policy Documentation BackForwardCacheForWebSocketsAllowed \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/backforwardcacheforwebsocketsallowed) *(learn.microsoft.com)*
  > \*\*Proactive Disconnection:\*\* Chrome forcibly disconnects the active WebSocket when the page enters the bfcache \*\*Enterprise Escape Hatch:\*\* For legacy enterprise intranets and applications that lack auto-reconnect routin...
- [appspot.com](https://cr-status.appspot.com/release-notes/157) *(cr-status.appspot.com)*
  > \*\*Enterprise Escape Hatch:\*\* For legacy enterprise intranets and applications that lack auto-reconnect routines, Google and Microsoft added the policy \*\*\`BackForwardCacheForWebSocketsAllowed\`\*\* Setting this policy to \`Di...
- [Chrome 149 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/149) *(developer.chrome.com)*
  > Official announcement highlighting that active WebSocket connections will no longer prevent bfcache eligibility

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16331.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry 'Gilberto Cocchi' via blin...
- [Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/52nlr8z3Png) *(groups.google.com · 2026-04-17T00:00:00)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing...
- [\[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16328.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12349`)*
  > \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Chromestatus Fri, 17 Apr 2026 03:1...

#### 📚 Platform Documentation & References

- [Proposal: Unblock bfcache for active WebSockets by disconnecting on entry · Issue #12085 · whatwg/html](https://github.com/whatwg/html/issues/12085) *(github.com)*
- [Monitoring bfcache blocking reasons - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) *(developer.mozilla.org)*
- [Disconnect WebSockets on BFCache entry · Issue #40 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/40) *(github.com)*
- [Disconnect WebSockets on BFCache entry · Issue #1262 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1262) *(github.com)*
- [Updating the WebSockets guide · mdn · Discussion #817](https://github.com/orgs/mdn/discussions/817) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 12 planned queries, 14 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (4 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 4

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

- **Momentum:** **Emerging** (footprint 185 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The \`text-decoration-skip-spaces\` property from CSS Text Decoration Module Level 4 allows authors to control whether text decorations skip over whitespace characters. Chromium is leading implementation with a planned rollout in Chrome 155, offering web authors a long-sought standard for clean typographic underlines on inline elements. Cross-browser alignment is currently in progress as engine teams evaluate spec details regarding default values and edge-case whitespace handling.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams can begin adopting \`text-decoration-skip-spaces\` immediately as a progressive enhancement for cleaner typography in supporting browsers. Use feature queries via \`@supports\` or let non-supporting browsers fall back gracefully to default text decoration rendering without breaking layout semantics.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [github.io](https://web-platform-dx.github.io/web-features-explorer/features/text-decoration-skip-spaces) *(web-platform-dx.github.io)*
  > It controls whether text decoration lines—such as underlines, overlines, and line-throughs—are drawn across whitespace characters (like leading, trailing, or repeating spaces) Developers tracking the \*\*Web Features Explo...
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html) *(mail-archive.com)*
  > We talked about this during the API Owners call today and something that came up was this Issue 6 in the spec: https://drafts.csswg.org/css-text-decor-4/#issue-4229bfce Is your plan to ship with &#x27;none&#x27; as the d...
- [\[blink-dev\] Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17140.html) *(mail-archive.com)*
  > Specification https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property Summary The text-decoration-skip-spaces CSS property &lt;strong&gt;controls whether text decoration lines (underlines, overlines, li...
- [\[blink-dev\] Ready for Developer Testing: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg16534.html) *(mail-archive.com)*
  > Specification https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property Summary The text-decoration-skip-spaces CSS property &lt;strong&gt;controls whether text decoration lines (underlines, overlines, li...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17373.html) *(mail-archive.com)*
  > I also think this situation is uncommon &gt;&gt;&gt; in existing sites; developers have to go out of their way to cause extra &gt;&gt;&gt; spaces to appear next to a run of text. (Also note: the default does \*not\* &gt;&g...
- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17185.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces · Perry Mon, 17 Aug 2026 08:45:32 -0700 · Thanks Dan. My plan is to ship with &#x27;none&#x27; as the default, beca...

#### 🔗 Inbound Citations & Reverse Links

- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #1446 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1446) *(github.com · 2026-08-21T09:30:51)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > \[css-text-decor-4\] text-decoration-skip-spaces · Issue #1446 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in w...
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com · 2026-08-21T10:28:22)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > \[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in wit...

#### 📚 Platform Documentation & References

- [w3.org](https://www.w3.org/TR/css-text-decor-4) *(w3.org)*
- [\`text-decoration-skip-spaces\` · Issue #4344 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4344) *(github.com)*
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #1446 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1446) *(github.com)*
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com)*
- [CSS4 text-decoration-skip-spaces · Issue #1164 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1164) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-001.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-002.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-003.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-004.html)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 76% · Edge 76.6% · Firefox 84.2% · Safari 65.5%; experimental: Chrome 90.1% · Edge 90.1% · Firefox 84.2% · Safari 80.7%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 12 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 3 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "text-decoration", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "text-decoration": Chrome 76% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 180 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""gpuweb/gpuweb" "frag_depth" "less" "greater""`, `""WebGPU" "fragment_depth" OR "frag_depth" "less" "greater""`, `"gpuweb issue conservative depth frag_depth less greater"`
- **Analysis:** The WGSL Fragment Depth extension enhances WebGPU by allowing shaders to specify \`less\` or \`greater\` modifiers on \`@builtin(frag\_depth)\`, preventing the GPU from disabling crucial early-Z optimizations during custom depth writes. Formally integrated into the specification by the W3C GPU for the Web Working Group, the feature achieves functional parity with native conservative depth semantics (such as DirectX's SV\_Depth semantics and WebGL extensions). Chromium has targeted enabled-by-default support starting in Chrome 156, though early release notes and bug tracking revealed temporary platform-specific driver hurdles on Windows.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web graphics engineers should adopt this feature progressively by testing \`navigator.gpu?.wgslLanguageFeatures?.has('fragment\_depth')\` before emitting shaders with the \`requires fragment\_depth;\` directive. When the language feature is unsupported or temporarily disabled, graphics pipelines should safely fall back to standard, unqualified \`@builtin(frag\_depth)\` output.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [What's New in WebGPU (Chrome 155-156) \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-webgpu-155-156) *(developer.chrome.com)*
  > What&#39;s New in WebGPU (Chrome 155-156) \| Blog \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkç...
- [fragment\_depth - WGSL language feature availability (1%) - webgpu.report](https://webgpu.report/features/wgsl:fragment_depth) *(webgpu.report)*
  > fragment\_depth - WGSL language feature availability (2%) - webgpu.report webgpu .report fragment\_depth WGSL language feature Specification: WGSL § fragment\_depth Availability now 2% last 30 days, n = 186 Year over year —...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17296.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'Ashley Gullen' via blink-dev Wed, 26 Aug 2026 01:02:4...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 T...
- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails \[email&#16...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 O...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17296.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'Ashley Gullen' via blink-dev Wed, 26 Aug 2026 01:02:4...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 T...
- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails \[email&#16...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 O...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/6299`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /...

#### 📚 Platform Documentation & References

- [feat(graphics): adopt WGSL fragment\_depth once every WebGPU browser ships it · Issue #9703 · playcanvas/engine](https://github.com/playcanvas/engine/issues/9703) *(github.com)*
- [w3.org](https://www.w3.org/TR/WGSL) *(w3.org)*
- [\[Time sensitive\] Rename WGSL feature "fragment\_depth" · Issue #11050 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/11050) *(github.com)*
- [WGSL Proposal for fragment depth (less, greater, any) · Issue #5342 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5342) *(github.com)*
- [\[WGSL fragment depth\] (less, greater, any) syntax change · Issue #5350 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5350) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)

#### 🌐 Web-features Group Context

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- **Chrome usage:** 0.096% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (43 found across 12 planned queries, 16 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 5 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "webgpu", shared with 44 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webgpu": no stable pass rate for Chrome yet)* · `Sources cited by the AI synthesis` (5 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 175 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** The addition of the javascriptURLs option to the Sanitizer API regularizes how navigation-based JavaScript URLs are handled, transitioning them from an implicit side effect of safe methods into an explicit, developer-selectable configuration. Enabled by default in Chrome 157, it brings more granular security control to both safe and unsafe sanitization workflows. Browser vendor consensus shows general support for the broader Sanitizer API framework, though broader cross-browser alignment is still evolving.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams utilizing the Sanitizer API should audit their usage of safe versus unsafe methods, leveraging the new javascriptURLs configuration explicitly where fine-grained control over navigation links is required. Because it is a cutting-edge feature, ensure fallback strategies or feature detection are in place for non-Chromium browsers.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Having discussed this more with colleagues and given the lack of opposing feedback in this issue I suggest we label this as "position: support" one we..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Sanitizer API](https://github.com/WebKit/standards-positions/issues/86) [closed] `position: support`, `topic: html`, `topic: dom`, `venue: WICG`, `from: Google`, `from: Mozilla`, `from: other`
  > *Latest discussion from @annevk: "Having discussed this more with colleagues and given the lack of opposing feedback in this issue I suggest we label this as "position: support" one we..."*

#### 📰 Ecosystem Blogs & Articles

- [github.io](https://triple-underscore.github.io/HTML-dynamic-markup-insertion-ja.html) *(triple-underscore.github.io)*
  > removeUnsafe()\` sets \`javascriptURLs: false\`, causing unsafe methods to strip them as well)
- [chromestatus.com](https://chromestatus.com/feature/5169798320357376/activity) *(chromestatus.com)*
  > If the option is omitted, legacy/default behavior remains backward-compatible
- [appspot.com](https://cr-status.appspot.com) *(cr-status.appspot.com)*
  > \*\*Coverage:\*\* ChromeStatus listed the feature under \*Enabled by default\* in Chrome 157
- [sourceforge.net](https://sourceforge.net/projects/servo.mirror/files/v0.7.0) *(sourceforge.net)*
  > 7.0 Release):\*\* The Servo browser project implemented support via PR #47867 (\`script: Implement javascriptURLs for Sanitizer and SanitizerConfig\`), showcasing cross-engine adoption across independent engines beyond Blink...
- [newreleases.io](https://newreleases.io/project/github/servo/servo/release/v0.7.0) *(newreleases.io)*
  > 7.0 Release):\*\* The Servo browser project implemented support via PR #47867 (\`script: Implement javascriptURLs for Sanitizer and SanitizerConfig\`), showcasing cross-engine adoption across independent engines beyond Blink...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17747.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer ...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17747.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer ...
- [\[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17726.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Chromest...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17764.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12898`)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer ...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-09-07 (public-html@w3.org from September 2026)](https://lists.w3.org/Archives/Public/public-html/2026Sep/0000.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/12898`)*
  > (1 by mozfreddyb) https://gith... - 12904 (by zcorpan) https://github.com/whatwg/html/pull/12904 - 12899 (by Ms2ger) https://github.com/whatwg/html/pull/12899 - 12898 (by noamr) https://&lt;strong&gt;github.com/whatwg/html/pul...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/158) *(developer.mozilla.org)*
- [whatwg.org](https://html.spec.whatwg.org/dev/dynamic-markup-insertion.html) *(html.spec.whatwg.org)*
- [whatwg.org](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html) *(html.spec.whatwg.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-09-07 (public-html@w3.org from September 2026)](https://lists.w3.org/Archives/Public/public-html/2026Sep/0000.html) *(lists.w3.org)*
- [Document Sanitizer javascriptURLs and setJavascriptURLs() by pepelsbey · Pull Request #46111 · mdn/content](https://github.com/mdn/content/pull/46111) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (41 found across 11 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 5

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

- **Momentum:** **Emerging** (footprint 175 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Fetch API: Forward reason from AbortController to fetch Response""`
- **Analysis:** This specification update aligns Chromium with the WHATWG Fetch standard by propagating user-supplied abort reasons from an AbortController down into Response methods (such as .blob(), .json(), and .text()) and Response.body streams. Enabled by default starting in Chrome and Microsoft Edge 154, it resolves an interoperability gap where aborted streaming reads fell back to generic AbortError DOMExceptions rather than the specified cancellation payload. Engine consensus is fully united around the WHATWG specification, closing an inconsistency where Firefox was previously the only compliant implementation.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams can immediately adopt expressive abort reasons in AbortController.abort() for richer debugging and flow control, but stream-reading catch blocks should continue providing fallback checks for generic AbortError DOMExceptions until Safari deployment catch-up is confirmed. No build polyfill is required, as the change operates purely as a non-breaking standards compliance fix.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Fetch API: Forward abort reason to Response](https://github.com/WebKit/standards-positions/issues/711) [closed] `invalid`
  > *Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."*

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5158507786665984) *(img544-dot-cr-status.appspot.com)*
  > The \*\*"Fetch API: Forward reason from AbortController to fetch Response"\*\* feature bridges a long-standing compliance gap in the Fetch specification This enhancement moves browsers closer to full compliance with the WHAT...
- [appspot.com](https://cr-status.appspot.com/feature/5158507786665984?gate=5331828910194688) *(cr-status.appspot.com)*
  > Previously, when an \`AbortController\` aborted a network request, the abort reason (e.g., a custom error message, timeout indicator, or specific exception) was correctly passed to the top-level \`fetch()\` promise However, ...
- [AbortController.abort(reason), but the reason gets lost before it arrives to the fetch catch clause](https://stackoverflow.com/questions/73049849/abortcontroller-abortreason-but-the-reason-gets-lost-before-it-arrives-to-the) *(stackoverflow.com)*
  > text()\`) or readable streams failed to propagate the exact user-defined abort reason abort(reason)\` (such as explicit timeout markers, user-initiated action tokens, or UI component unmount codes)
- [reddit.com](https://www.reddit.com/r/webdev/comments/wf4nz1/weird_behaviour_aborting_a_fetch_request_during) *(reddit.com)*
  > text()\`) or readable streams failed to propagate the exact user-defined abort reason
- [\[blink-dev\] Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17127.html) *(mail-archive.com)*
  > Specification https://fetch.sp... https://chromestatus.com/feature/5631483679080448 &lt;strong&gt;When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t res...
- [\[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17184.html) *(mail-archive.com)*
  > &gt; &gt; Thanks, &gt; Dan &gt; &gt; On Wednesday, ...romestatus.com/feature/5631483679080448 &lt;strong&gt;When calling abort, &gt;&gt; you can optionally pass in an &quot;abort reason&quot;, and the original fetch &gt;&gt; p...

#### 📚 Platform Documentation & References

- [AbortController - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) *(developer.mozilla.org)*
- [AbortController abort reason Parameter · Issue #1462 · node-fetch/node-fetch](https://github.com/node-fetch/node-fetch/issues/1462) *(github.com)*
- [1378342 - Aborting fetch (and possibly streams), part 2](https://bugzilla.mozilla.org/show_bug.cgi?id=1378342) *(bugzilla.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `abortable-fetch` on [wpt.fyi](https://wpt.fyi/results?q=feature:abortable-fetch) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 66.7%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 66.7%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 11 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 4 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (3 found, 2 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "abortable-fetch", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "abortable-fetch": Chrome 66.7% passing (stable))* · `Sources cited by the AI synthesis` (2 found, 0 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 3

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

- **Momentum:** **Emerging** (footprint 171 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Chromium is transitioning its IndexedDB storage engine from an unmaintained LevelDB and flat-file hybrid to SQLite, rolling out by default for new persistent data stores in Chrome 156 after initial in-memory testing. Because this is an under-the-hood engine architectural overhaul rather than a new web API, the public specification remains unchanged while addressing longstanding data corruption and reliability bugs reported by heavy client-side applications. Developer perception is broadly favorable toward the improved stability, and the transition brings Chromium's underlying architecture into alignment with other major browser engines.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams do not need to change public API usage, but offline-first and local-first application developers should test new database instances in Chrome 156 to verify strict transaction boundaries and timing assumptions. Teams should also monitor error telemetry for unexpected transaction-abort edge cases ahead of Chromium's eventual automated data migration from legacy LevelDB stores.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Chrome IndexedDB: SQLite back end" (4 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Chrome IndexedDB: SQLite back end](https://news.ycombinator.com/item?id=48118595) — *Hacker News (4 pts, 0 comments)*

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/docs/chromium/indexeddb-storage-improvements) *(developer.chrome.com)*
  > Chromium’s internal implementation of \*\*IndexedDB is being rewritten on top of SQLite\*\*, replacing the aging hybrid architecture of LevelDB and flat files
- [Chrome 156 Moves IndexedDB to SQLite: What Changes for Your Offline-First App \| Trade Assistance LLC](https://trade-assistance.com/blog/indexeddb-sqlite-backend-chrome-156) *(trade-assistance.com)*
  > Technical Web Development Blogs The consensus among architecture blogs is that apps with robust, disciplined transaction boundaries will transition seamlessly, but edge-case race conditions should be audited
- [Web-Facing Change PSA: IndexedDB: SQLite backend](https://groups.google.com/a/chromium.org/g/blink-dev/c/jS0khnC5IWA) *(groups.google.com · 2026-04-24T00:00:00)*
  > Web-Facing Change PSA: IndexedDB: SQLite backend Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: ...
- [\[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16359.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend 'Evan Stade' via blink-dev Fri, 24 Apr 2026 12:03:06 -0700 C...
- [Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16371.html) *(mail-archive.com)*
  > Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) Re: \[EXTERNAL\] Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend 'Evan Stade' via blink...
- [Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16362.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend Daniel Herr Sat, 25 Apr 2026 00:10:41 -0700 So we ki...

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

- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com)*
- [Premium IndexedDB: is it a viable web fallback if SQLite does not work out? · Issue #2139 · wcpos/monorepo](https://github.com/wcpos/monorepo/issues/2139) *(github.com)*
- [Termius import: read Chromium's SQLite IndexedDB backend · Issue #449 · VoltiusApp/voltius](https://github.com/VoltiusApp/voltius/issues/449) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [IndexedDB: SQLite backend Demo](https://evanstade.github.io/web-storage-demos/idb-txn-scopes)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `indexeddb` on [wpt.fyi](https://wpt.fyi/results?q=feature:indexeddb) (via webstatus.dev) — stable: Chrome 99.9% · Edge 99.9% · Firefox 99.4% · Safari 96.3%; experimental: Chrome 100% · Edge 100% · Firefox 99.4% · Safari 99%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (66 found across 11 planned queries, 14 verified) · `Google Search Grounding (gemini-3.8-flash)` (5 found, 2 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 1 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "indexeddb", shared with 16 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "indexeddb": Chrome 99.9% passing (stable))*
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

- **Momentum:** **Emerging** (footprint 160 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** The CSS \`text-decoration-inset\` property has landed in Chromium (Chrome 157) as part of CSS Text Decoration Level 4, enabling native control over underline, overline, and line-through offsets. It eliminates historical developer friction regarding text decoration padding workarounds, though cross-browser availability is still rolling out as Gecko tracks implementation.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams can safely use \`text-decoration-inset\` as a progressive enhancement today, ensuring that critical text styling remains robust in fallback browsers that do not yet support custom line offsets.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *Enabled by default* to *Enabled by default*
- 📰 **5 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/status/2102804599325528424) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1780887: \[meta\] \[css-text-decor\] implement text-decoration-inset to modify the length of underline etc](https://bugzilla.mozilla.org/show_bug.cgi?id=1780887) `[NEW]`
- **Mozilla (Gecko):** [Bug #1981310: \[Inactive CSS\] Add text-decoration-inset in inactive CSS](https://bugzilla.mozilla.org/show_bug.cgi?id=1981310) `[NEW]`
- **Mozilla (Gecko):** [Bug #2072125: New wpt failures in /css/ \[css-transitions/properties-value-003.html, css-transitions/properties-value-inherit-003.html, css-animations/text-decoration-inset-auto.html\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2072125) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [text-decoration-inset is Like Padding for Text Decorations \| CSS-Tricks](https://css-tricks.com/text-decoration-inset-is-like-padding-for-text-decorations) *(css-tricks.com)*
  > Instead of being rigidly bound to the edges of the content/text box, lines can now be shortened, lengthened, or shifted natively \*\*CSS-Tricks ("\*text-decoration-inset is Like Padding for Text Decorations\*")\*\*
- [chrome.com](https://developer.chrome.com/docs/css-ui) *(developer.chrome.com)*
  > \*\*Chrome for Developers / Release Announcements (\`Chrome 154\`)\*\* \*\*Focus:\*\* Highlighted the implementation and shipping schedule of \`text-decoration-inset\` in Chromium/Chrome
- [\[blink-dev\] Intent to Prototype: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg16309.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Helmut Januschka Fri, 10 Apr 2026 04:36:16 -0700 \*Contact emails...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., ...
- [\[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17255.html) *(mail-archive.com)*
  > This &lt;strong&gt;lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements&lt;/strong&gt;. sampler: https://static.januschka.com/i-46892...
- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements. sampler: https://static.januschka.com/i-468928416/?asddsaasd M...

#### 🔗 Inbound Citations & Reverse Links

- [CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com · 2026-08-17T19:47:28)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ...
- [Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30757) *(github.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signe...
- [\[blink-dev\] Intent to Prototype: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg16309.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-decoration-inset Helmut Januschka Fri, 10 Apr 2026 04:36:16 -0700 \*Contact emails...
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., ...
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or win...

#### 📚 Platform Documentation & References

- [text-decoration-inset CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com)*
- [CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com)*
- [Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30757) *(github.com)*
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 76% · Edge 76.6% · Firefox 84.2% · Safari 65.5%; experimental: Chrome 90.1% · Edge 90.1% · Firefox 84.2% · Safari 80.7%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (66 found across 11 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 4 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 1 verified) · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (3 found, 3 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "text-decoration", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "text-decoration": Chrome 76% passing (stable))*
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

- **Momentum:** **Emerging** (footprint 160 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Related Website Sets" deprecation blink-dev"`
- **Analysis:** Related Website Sets (RWS) is being deprecated and removed in Chrome following Google's strategic shift to maintain the current third-party cookie approach instead of full deprecation. With low overall registration and adoption numbers alongside a lack of multi-engine interest, Google has initiated the sunsetting of RWS and its companion requestStorageAccessFor API.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should audit applications for reliance on RWS and the requestStorageAccessFor API, preparing to transition back to standard Storage Access API fallback behaviors or alternative multi-domain architecture. Set owners should proactively unwind integrations as deprecation rollouts advance.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [What are Related Website Sets? Unpacking Google’s Privacy Sandbox Initiative](https://www.adfixus.com/post/wth-are-related-website-sets-unpacking-googles-privacy-sandbox-initiative) *(adfixus.com)*
  > \*\*Related Website Sets (RWS)\*\*—formerly known as \*First-Party Sets\*—was introduced as part of Google’s Privacy Sandbox initiative It provided a framework allowing organizations to declare relationships across multiple do...
- [Chrome is Entrenching Third-Party Cookies For Some Sites In A Way That Will Predictably, Inevitably Mislead Users \| Brave](https://brave.com/blog/related-website-sets) *(brave.com)*
  > From its inception, RWS faced intense scrutiny from privacy advocates and competing browser vendors (such as Brave and independent security researchers) Critics frequently argued that RWS risked recreating privacy loopho...
- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)*
  > Intent to Deprecate and Remove: Related Website Sets (RWS) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Dep...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15155.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Mike Taylor Sun, 09 Nov ...
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15144.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) 'Johann Hofmann' via blink-dev F...
- [https://github.com/WICG/first-party-sets \| Ecosyste.ms: Awesome](https://awesome.ecosyste.ms/projects/github.com/WICG/first-party-sets) *(awesome.ecosyste.ms)*
  > URL: https://github.com/WICG/first-party-sets · Owner: WICG · Created: 2018-08-01T23:25:34.000Z (over 6 years ago) Default Branch: main · Last Pushed: 2024-06-23T21:07:00.000Z (8 months ago) Last Synced: 2024-08-01T15:05...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Intent to Deprecate and Remove: Related Website Sets (RWS) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Dep...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15155.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Mike Taylor Sun, 09 Nov ...
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15144.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) 'Johann Hofmann' via blink-dev F...
- [https://github.com/WICG/first-party-sets \| Ecosyste.ms: Awesome](https://awesome.ecosyste.ms/projects/github.com/WICG/first-party-sets) *(awesome.ecosyste.ms)* *(Cites: `https://wicg.github.io/first-party-sets`)*
  > URL: https://github.com/WICG/first-party-sets · Owner: WICG · Created: 2018-08-01T23:25:34.000Z (over 6 years ago) Default Branch: main · Last Pushed: 2024-06-23T21:07:00.000Z (8 months ago) Last Synced: 2024-08-01T15:05...

#### 📚 Platform Documentation & References

- [related-website-sets/RWS-Submission\_Guidelines.md at main · GoogleChrome/related-website-sets](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md) *(github.com)*
- [GitHub - GoogleChrome/related-website-sets: Note: This repository will be archived and will no longer accept new submissions. · GitHub](https://github.com/GoogleChrome/related-website-sets) *(github.com)*
- [GitHub - WICG/first-party-sets · GitHub](https://github.com/WICG/first-party-sets) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (60 found across 11 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (3 found, 2 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (2 found, 1 verified)
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

- **Momentum:** **Emerging** (footprint 160 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** The introduction of the FontFace width attribute and the @font-face font-width descriptor brings Chromium into compliance with CSS Fonts Module Level 4 and CSS Font Loading. By adopting 'width' as the primary descriptor and standardizing 'stretch' as a backward-compatible alias, browsers achieve unified, intuitive font geometry ergonomics across both CSS and JavaScript interfaces. With Chromium catching up in Chrome 154 alongside existing support in Firefox and WebKit, the feature establishes complete cross-engine parity.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can comfortably begin transitioning new codebases and CSSOM scripts to use the modern 'font-width' and FontFace.width syntax. However, until Chrome 154 reaches widespread production baseline coverage, authors targeting older evergreen browser versions should retain or dual-specify 'font-stretch' as a fallback.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [google.com](https://groups.google.com/a/chromium.org/d/msgid/blink-dev/6a7d4c09.dc132f77.2e13a8.0e2f.GAE%40google.com) *(groups.google.com)*
  > Driven by updates in the \*\*CSS Font Loading\*\* and \*\*CSS Fonts Module Level 4\*\* specifications, this change establishes \`width\` and \`font-width\` as primary identifiers while preserving \`stretch\` and \`font-stretch\` as lega...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Chris Ha...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17203.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Michael Reeves M...
- [\[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor Chromestatus Wed, 12 Aug...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17196.html) *(mail-archive.com)*
  > &gt; &gt; \*Adoption expectation\* &gt; Feature ... font face width &gt; descriptors within 12 months of reaching Web Platform baseline. &gt; &gt; \*Adoption plan\* &gt; Web Platform Tests (WPT) have been added to ensure cro...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17222.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; Adoption expectation ... font face width &gt;&gt; descriptors within 12 months of reaching Web Platform baseline. &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; Adoption plan &gt;&gt; &gt;&gt; We...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Chris Ha...
- [\[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17203.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Michael Reeves M...
- [\[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > \[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor Chromestatus Wed, 12 Aug...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/CSSFontFaceDescriptors) *(developer.mozilla.org)*
- [Font-width CSS property and @font-face descriptor docs are missing · Issue #42409 · mdn/content](https://github.com/mdn/content/issues/42409) *(github.com)*
- [font-width CSS at-rule descriptor - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-width) *(developer.mozilla.org)*
- [wpt/css/css-fonts/parsing/font-face-width.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/css/css-fonts/parsing/font-face-width.html) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `font-width` on [wpt.fyi](https://wpt.fyi/results?q=feature:font-width) (via webstatus.dev) — stable: Chrome 33.3% · Edge 33.3% · Firefox 100% · Safari 100%; experimental: Chrome 33.3% · Edge 33.3% · Firefox 100% · Safari 100%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (66 found across 11 planned queries, 14 verified) · `Google Search Grounding (gemini-3.8-flash)` (4 found, 3 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "font-width", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "font-width": Chrome 33.3% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 155 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"Chrome Decisions API DecisionModel"`, `"window.DecisionModel Built-in AI Chrome"`
- **Analysis:** The Decisions API (window.DecisionModel) is an experimental on-device AI primitive recently introduced behind a flag in Chrome 157 to provide fast, non-autoregressive logit scoring for structured classification and routing. Developers are receptive to its promise as a zero-marginal-cost 'Semantic If' that bypasses the latency and resource overhead of generative LLMs. However, cross-browser consensus is currently non-existent, as neither WebKit nor Gecko has adopted a formal position or begun implementation.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should evaluate the API strictly in Canary or Dev builds under the developer flag for prototyping real-time routing and validation. Avoid relying on it in production environments without building resilient progressive enhancement fallbacks to server-side decision layers or deterministic heuristics.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **10 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [web-ai.studio](https://web-ai.studio/docs/decisions) *(web-ai.studio)*
  > DecisionModel\`) is an experimental Built-in AI capability introduced to the Chromium platform Designed as an on-device, non-autoregressive "System 1" primitive, it evaluates unstructured natural language input against st...
- [Chrome Decisions API: the prompts, limits, engines and code reviews behind DecisionModel](https://dejan.ai/blog/chrome-decisions-api-decisionmodel) *(dejan.ai)*
  > Chrome Decisions API: the prompts, limits, engines and code reviews behind DecisionModel Sign in mail search menu &larr; back New here? Sign in to annotate the text and leave comments. &times; Chrome Decisions API: the p...
- [Chrome Platform Status](https://chromestatus.com/feature/5155080092385280/activity) *(chromestatus.com)*
  > Chrome Platform Status
- [mintec.co](https://mintec.co/blog) *(mintec.co)*
  > \*\*MDN, CSS-Tricks, and Smashing Magazine:\*\* Because the API surfaced in Chromium codebases in October 2026 \*\*Developer Blogs & Engineering Communities:\*\* Most early reporting, architectural reviews, and hands-on benchmar...
- [\[blink-dev\] Intent to Prototype: Decisions API](http://www.mail-archive.com/blink-dev@chromium.org/msg17639.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Decisions API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Decisions API Mike Wasserman Thu, 01 Oct 2026 13:04:07 -0700 Contact emails \[email&#160;protected\] , \[...
- [Re: \[blink-dev\] Intent to Prototype: Decisions API](http://www.mail-archive.com/blink-dev@chromium.org/msg17641.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Prototype: Decisions API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: Decisions API Rick Byers Thu, 01 Oct 2026 22:22:34 -0700 This is very exciting, thanks for sha...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Decisions API](http://www.mail-archive.com/blink-dev@chromium.org/msg17639.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5155080092385280`)*
  > \[blink-dev\] Intent to Prototype: Decisions API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Decisions API Mike Wasserman Thu, 01 Oct 2026 13:04:07 -0700 Contact emails \[email&#160;protected\] , \[...
- [Re: \[blink-dev\] Intent to Prototype: Decisions API](http://www.mail-archive.com/blink-dev@chromium.org/msg17641.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5155080092385280`)*
  > Re: \[blink-dev\] Intent to Prototype: Decisions API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: Decisions API Rick Byers Thu, 01 Oct 2026 22:22:34 -0700 This is very exciting, thanks for sha...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/GoogleChromeLabs/web-ai-demos/activity) *(github.com)*
- [github.com](https://github.com/GoogleChromeLabs/web-ai-demos) *(github.com)*
- [GitHub - explainers-by-googlers/decision-api: An explainer exploring fast, type-safe, on-device ML decisions, classification, scoring, and ranking · GitHub](https://github.com/explainers-by-googlers/decision-api) *(github.com)*
- [Align question types and result semantics with implementation by michaelwasserman · Pull Request #3 · explainers-by-googlers/decisions-api](https://github.com/explainers-by-googlers/decisions-api/pull/3) *(github.com)*
- [feat(decisions): track Decisions API readiness · Issue #285 · obetomuniz/web-ai-sdk](https://github.com/obetomuniz/web-ai-sdk/issues/285) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Decisions API Demo](https://web-ai.studio/playgrounds/decisions)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (49 found across 11 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 6 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (6 found, 0 verified) · `Engine Bug Trackers` (5 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (4 found, 3 verified)
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5126146013396992-secure-payment-confirmation-locale-validation"></a>
### [Secure Payment Confirmation: Locale Validation](https://chromestatus.com/feature/5126146013396992)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5126146013396992](https://chromestatus.com/feature/5126146013396992) · [chromestatuslite.com/feature/5126146013396992](https://chromestatuslite.com/feature/5126146013396992)
- **Specification:** [https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale](https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale)
- **Chromium Bug:** [https://crbug.com/535278878](https://crbug.com/535278878)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `N/A` · Safari: `N/A`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/secure-payment-confirmation) (Chrome: `139`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`secure-payment-confirmation`](https://webstatus.dev/features/secure-payment-confirmation), shared with 1 other ChromeStatus feature*

#### 📝 Overview

Updates Secure Payment Confirmation's \`locale\` data field to return a Not Supported DOMException if none of the language tags provided in the field match the language used by the Secure Payment Confirmation's dialog. If the field is not set or empty, this validation is skipped.  This helps web developers with matching the language of the data that they are supplying to Secure Payment Confirmation with the dialog.

> **Motivation:** This feature amends Secure Payment Confirmation so that web developers can align the language of data elements that they supply to Secure Payment Confirmation with the language used by the Secure Payment Confirmation dialog.  Currently web developers can provide a list of language tags for Secure Payment Confirmation to use in their dialog. But Sec...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 155 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** Secure Payment Confirmation (SPC) Locale Validation refines transaction confirmation by throwing a NotSupportedError DOMException if a relying party's requested language tags do not match the browser dialog's UI language. While this addresses significant internationalization and user-experience issues for payment flows in Chromium, SPC as a whole remains trapped in limited availability with zero implementation progress in other engines. As a result, the feature enhances developer control within Chromium but does not alter the broader single-vendor dynamic.

**Key Recommendations & Takeaways:**
- Actionable Advice: Use SPC locale validation strictly as a progressive enhancement on supported Chromium browsers while catching NotSupportedError exceptions to negotiate alternate language tags or fall back to standard WebAuthn and 3-D Secure flows. Do not rely on SPC as a universal payment authentication mechanism across all user agents.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @gsnedders: "Am I right in understanding that the primary goal here is to replace 3-D Secure with something that's browser mediated?..."
- Standards Activity (Mozilla): Latest discussion from @stephenmcgruer: "Hi folks. I know that Mozilla's position on SPC is outstanding, however we wanted to let you know of a notable additional feature to SPC that we are c..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Secure Payment Confirmation (SPC)](https://github.com/WebKit/standards-positions/issues/30) [open] `topic: payments`, `concerns: integration`, `venue: W3C Web Payments WG`, `from: Google`
  > *Latest discussion from @gsnedders: "Am I right in understanding that the primary goal here is to replace 3-D Secure with something that's browser mediated?..."*
- **Mozilla:** [Secure Payment Confirmation](https://github.com/mozilla/standards-positions/issues/570) [open] 
  > *Latest discussion from @stephenmcgruer: "Hi folks. I know that Mozilla's position on SPC is outstanding, however we wanted to let you know of a notable additional feature to SPC that we are c..."*

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5126146013396992) *(img544-dot-cr-status.appspot.com)*
  > \*\*Secure Payment Confirmation (SPC): Locale Validation\*\* updates how browsers handle the optional \`locale\` parameter in the \`SecurePaymentConfirmationRequest\` dictionary However, browsers typically present the native pay...
- [chromestatus.com](https://chromestatus.com/feature/5126146013396992?gate=4803300429004800) *(chromestatus.com)*
  > \*\*The Solution:\*\* If an RP supplies a list of BCP 47 language tags in the \`locale\` field, the browser validates whether any of the tags match the language used by the SPC confirmation dialog \*\*Title:\*\* \*Secure Payment Co...
- [chrome.com](https://developer.chrome.com/docs/payments/authenticate-secure-payment-confirmation) *(developer.chrome.com)*
  > If a \`NotSupportedError\` is caught, they can fall back to alternative languages or switch to standard WebAuthn/3D-Secure fallback flows \*\*Guides:\*\* \*Authenticate with Secure Payment Confirmation\* & \*Register a Secure Pay...
- [googleusercontent.com](https://doc-3p60-3vv0-issuetracker.googleusercontent.com/issues/552458479) *(doc-3p60-3vv0-issuetracker.googleusercontent.com)*
  > \*\*Source:\*\* \[Chrome Platform Status\](https://chromestatus.com/feature/5126146013396992)
- [chrome.com](https://developer.chrome.com/docs/payments/register-secure-payment-confirmation) *(developer.chrome.com)*
  > \*\*Guides:\*\* \*Authenticate with Secure Payment Confirmation\* & \*Register a Secure Payment Confirmation\* The guides outline the typical pattern for feature detection and pre-flight validation via \`canMakePayment()\`—the pri...
- [fidoalliance.org](https://fidoalliance.org/white-paper-secure-payment-confirmation) *(fidoalliance.org)*
  > \*\*Specialized Payment & WebAuthn Communities:\*\* Discussions in the FIDO Alliance and W3C Web Payments groups have welcomed the change, viewing it as a practical compromise between browser security/privacy constraints (wh...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17746.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5126146013396992`)*
  > \[blink-dev\] Intent to Ship: Secure Payment Confirmation: Locale Validation Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Secure Payment Confirmation: Locale Validation Chromestatus Thu, 15 Oct 2026 07...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/SecurePaymentConfirmationRequest) *(developer.mozilla.org)*
- [Secure Payment Confirmation](https://www.w3.org/TR/secure-payment-confirmation) *(w3.org)*
- [Localization topics to address · Issue #93 · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/issues/93) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Secure Payment Confirmation: Locale Validation Demo](https://rsolomakhin.github.io/pr/spc-locales)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `secure-payment-confirmation` on [wpt.fyi](https://wpt.fyi/results?q=feature:secure-payment-confirmation) (via webstatus.dev) — stable: Chrome 80% · Edge 10% · Firefox 0% · Safari 0%; experimental: Chrome 80% · Edge 10% · Firefox 0% · Safari 0%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (46 found across 11 planned queries, 4 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 8 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "secure-payment-confirmation", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "secure-payment-confirmation": Chrome 80% passing (stable))*
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

- **Momentum:** **Emerging** (footprint 155 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Window Shape API" "setShape""`, `""Window shape API" "blink-dev""`
- **Analysis:** The Window Shape API introduces \`window.setShape()\` to allow non-rectangular, multi-rect window geometry for desktop widgets and custom overlays. It is strictly a proprietary ChromeOS platform extension restricted to allowlisted Isolated Web Apps (IWAs) running in unframed display mode with enterprise management controls. As a non-standardized capability explicitly scoped out of the broader open web, it holds zero multi-engine consensus.

**Key Recommendations & Takeaways:**
- Actionable Advice: Mainstream web and standard PWA developers should ignore this API, as it is non-standard and inaccessible to general web origins. Teams building enterprise-targeted or partner-allowlisted Isolated Web Apps on ChromeOS should gate calls behind runtime feature detection and pair custom shapes with graceful rectangular fallbacks for unsupported environments.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > setShape(rectangles)\`, developers can define custom window geometry built from arrays of bounding boxes (\`DOMRect\`), enabling floating panels, desktop widgets, toolbars, and overlay layouts that blend into ChromeOS \*\*Ent...
- [google.com](https://support.google.com/chrome/a/answer/10314655?hl=eN&ref_topic=7679105) *(support.google.com)*
  > \*\*Key Insights\*\*: Highlighted as part of Chrome's enterprise and platform enhancements \*\*Summary\*\*: Administrative guides detailing how enterprise IT departments manage window shape behaviors across managed Chromebook fl...
- [chromeenterprise.google](https://chromeenterprise.google/resources/release-notes) *(chromeenterprise.google)*
  > \*\*Summary\*\*: Administrative guides detailing how enterprise IT departments manage window shape behaviors across managed Chromebook fleets
- [\[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16965.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Window shape API Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Window shape API 'Edman Anjos' via blink-dev Mon, 13 Jul 2026 13:05:11 -0700 Hi Alex, thanks a lot fo...
- [\[blink-dev\] Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16945.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Window shape API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Window shape API Chromestatus Wed, 08 Jul 2026 09:58:24 -0700 Contact emails \[email&#160;protected\] , \[email&...
- [Re: \[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16974.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Window shape API Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Window shape API Chris Harrelson Wed, 15 Jul 2026 09:17:30 -0700 LGTM1 This is a very specifi...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16965.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5075144470036480`)*
  > \[blink-dev\] Re: Intent to Ship: Window shape API Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Window shape API 'Edman Anjos' via blink-dev Mon, 13 Jul 2026 13:05:11 -0700 Hi Alex, thanks a lot fo...
- [\[blink-dev\] Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16945.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5075144470036480`)*
  > \[blink-dev\] Intent to Ship: Window shape API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Window shape API Chromestatus Wed, 08 Jul 2026 09:58:24 -0700 Contact emails \[email&#160;protected\] , \[email&...
- [Re: \[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16974.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Window shape API Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Window shape API Chris Harrelson Wed, 15 Jul 2026 09:17:30 -0700 LGTM1 This is a very specifi...
- [Re: \[blink-dev\] Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg17269.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > Re: \[blink-dev\] Intent to Ship: Window shape API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Window shape API 'Edman Anjos' via blink-dev Mon, 24 Aug 2026 10:55:42 -0700 Thank you for the approv...
- [\[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16964.html) *(mail-archive.com)* *(Cites: `https://explainers-by-googlers.github.io/chromeos-iwa-apis`)*
  > \[blink-dev\] Re: Intent to Ship: Window shape API Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Window shape API Alex Russell Mon, 13 Jul 2026 11:44:47 -0700 Hey folks, I'm \*very\* excited to see th...

#### 🧪 Interactive Demos & Samples

- [Window Shape API Demo](https://github.com/paulinagacek/Set-Shape-demo)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (45 found across 12 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 3 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (1 found, 0 verified) · `Engine Bug Trackers` (5 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (1 found, 1 verified)
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

- **Momentum:** **Emerging** (footprint 150 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""targetAddressSpace" "WebKit/standards-positions""`, `""targetAddressSpace" site:github.com/WebKit/standards-positions"`, `""targetAddressSpace" "WebSocket""`, `""targetAddressSpace" site:github.com/mozilla/standards-positions"`, `""targetAddressSpace" "mozilla/standards-positions""`, `""targetAddressSpace" site:github.com/WICG/local-network-access"`
- **Analysis:** Shipping enabled by default in Chromium 154, this feature introduces the \`targetAddressSpace\` parameter to the newly added WebSocket constructor options dictionary, matching existing Fetch API capabilities under the Local Network Access (LNA) specification. It provides an escape hatch that bypasses mixed-content blocking when a secure HTTPS application connects to local hardware or daemons over a public hostname, provided users grant LNA permission and DNS resolves to a local or loopback address. However, ecosystem adoption is currently fragmented because only Chromium-based browsers support this constructor extension.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams targeting local hardware should adopt \`targetAddressSpace: 'local'\` as a progressive enhancement for Chromium users while retaining fallback connection flows—such as \`.local\` mDNS domains or explicit loopback IP literals—for Firefox and Safari. Web apps must also implement robust UI handling for cases where the user denies the Local Network Access permission prompt or DNS resolution fails to map to a local IP.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > \*\*Why it matters:\*\* Under the \*\*Local Network Access (LNA)\*\* specification (formerly Private Network Access / PNA), requests to local devices must originate from a secure context (HTTPS) \*\*Chrome 154 Beta & Stable Releas...
- [Microsoft Edge 154 web platform release notes (Sep. 24, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com)*
  > \*\*Edge 154 Web Platform Updates:\*\* Microsoft highlighted the simultaneous arrival of the WebSocket options dictionary and the \`targetAddressSpace\` option across Chromium-based browsers
- [google.com](https://issuetracker.google.com/issues/545695277) *(issuetracker.google.com)*
  > Follow-up documentation tickets were opened to update the \`WebSocket()\` constructor reference to account for the new dictionary signature and address-space hints
- [googleusercontent.com](https://doc-2gh0-0gig-issuetracker.googleusercontent.com/issues/545695277) *(doc-2gh0-0gig-issuetracker.googleusercontent.com)*
  > Follow-up documentation tickets were opened to update the \`WebSocket()\` constructor reference to account for the new dictionary signature and address-space hints
- [codercops.com](https://blog.codercops.com/blog/chrome-154-websocket-options-iterator-includes-https-prompts-2026) *(blog.codercops.com)*
  > \*\*CoderCops ("Chrome 154 for Developers: What Changed and What to Test"):\*\* Outlined practical migration advice, explaining how developers using WebSockets to talk to local background utilities or IoT hardware can stop r...
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > \*\*Polypane ("Experimental Chromium Web Platform Features"):\*\* Highlighted the feature tracking under \`LocalNetworkAccessWebSocketsTargetAddressSpace\`, walking through how developer testing environments can evaluate LNA p...

#### 🔗 Inbound Citations & Reverse Links

- [Support \`targetAddressSpace\` option in WebSockets \[517413738\] - Chromium](https://issues.chromium.org/issues/517413738) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/4779920606756864`)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4779920606756864`)*
  > \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, ...

#### 📚 Platform Documentation & References

- [Use case for WebSocket communications · Issue #16 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/16) *(github.com)*
- [local-network-access: WebSocket constructor rejects targetAddressSpace and test flag misses IPv6 localhost · Issue #1651 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1651) *(github.com)*
- [Supporting options bag in WebSocket constructor · Issue #708 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/708) *(github.com)*
- [Supporting options bag in WebSocket constructor · Issue #1444 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1444) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (49 found across 12 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (16 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "local-network-access", shared with 7 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "local-network-access": no stable pass rate for Chrome yet)* · `Sources cited by the AI synthesis` (6 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5094058497277952-webtransport-reliability-attributes"></a>
### [WebTransport reliability attributes](https://chromestatus.com/feature/5094058497277952)

- **Milestone:** Chrome 155 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5094058497277952](https://chromestatus.com/feature/5094058497277952) · [chromestatuslite.com/feature/5094058497277952](https://chromestatuslite.com/feature/5094058497277952)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransport-reliability](https://www.w3.org/TR/webtransport/#dom-webtransport-reliability)
- **Chromium Bug:** [https://issues.chromium.org/issues/545636884](https://issues.chromium.org/issues/545636884)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

#### 📝 Overview

Adds the WebTransport.reliability instance attribute and static WebTransport.supportsReliableOnly attribute. These APIs indicate whether the user agent supports WebTransport over exclusively reliable connections and whether an established session supports unreliable transport such as datagrams.  In Chromium, reliability initially returns "pending" and changes to "supports-unreliable" after an HTTP/3 WebTransport connection is established.  Since Chromium does not currently support HTTP/2 fallback,  WebTransport.supportsReliableOnly returns false; any successfully established session uses HTTP/3 and supports unreliable datagrams.

> **Motivation:** WebTransport may operate over connections with different reliability capabilities. Applications such as games, interactive media, and real-time collaboration tools need to know whether unreliable datagrams are available before selecting their transport strategy.  WebTransport.supportsReliableOnly  reports whether the user agent supports WebTranspor...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 150 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"site:github.com/w3c/webtransport "reliability" OR "supportsReliableOnly""`, `""WebTransport" "reliability" "supportsReliableOnly""`, `""WebTransport.supportsReliableOnly" OR "WebTransport.reliability""`
- **Analysis:** The WebTransport reliability attributes (\`WebTransport.reliability\` and static \`WebTransport.supportsReliableOnly\`) resolve a critical capability-detection gap by allowing applications to query whether a connection supports unreliable datagrams over HTTP/3 or is restricted to reliable-only fallback transports. Standardized in the W3C WebTransport specification and documented on MDN, the feature is currently in developer trial behind a flag in Chromium while foundational engine consensus from Mozilla and WebKit remains supportive.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should adopt progressive enhancement by querying \`WebTransport.supportsReliableOnly\` prior to connection and inspecting \`transport.reliability\` after \`transport.ready\` settles before dispatching datagrams. Teams should test the feature behind flags in Chromium while maintaining WebSocket or WebRTC fallbacks for restrictive network environments.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [ietf.org](https://datatracker.ietf.org/meeting/119/materials/slides-119-webtrans-ietf-119-webtrans-wg-slides-04) *(datatracker.ietf.org)*
  > supportsReliableOnly\` (static property)\*\*: A boolean flag indicating whether the user agent supports WebTransport sessions running exclusively over reliable transports (such as TCP-based HTTP/2) Notes that \`supportsRelia...
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > supportsReliableOnly\` returns \`false\` because Chromium only negotiates WebTransport over HTTP/3 reliability\` begins as \`"pending"\` and resolves to \`"supports-unreliable"\` once the HTTP/3 handshake completes
- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Entries:\*\* \*WebTransport reliability attributes\* (Chrome Status & Chrome 158 Milestone Notes)
- [googleusercontent.com](https://doc-025g-06e0-issuetracker.googleusercontent.com/issues/545636884) *(doc-025g-06e0-issuetracker.googleusercontent.com)*
  > \*\*Articles:\*\* \*Experimental Chromium Web Platform Features\* (Polypane) & \*WebKit / Interop Tracking Bugs\* reliability\` simplifies debugging connection fallbacks in corporate and restrictive network environments where UDP...
- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17710.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Alex Russell Mon, 12 Oct 2026 11:57:46 -0700 L...
- [\[blink-dev\] Intent to Prototype: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17340.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport reliability attributes Chromestatus Tue, 01 Sep 2026 10:05:04 -0700...

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

- [WebTransport: supportsReliableOnly static property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/supportsReliableOnly_static) *(developer.mozilla.org)*
- [WebTransport: reliability property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/reliability) *(developer.mozilla.org)*
- [webtransport/index.bs at main · w3c/webtransport](https://github.com/w3c/webtransport/blob/main/index.bs) *(github.com)*
- [2007783 - Add support for WebTransport supportsReliableOnly](https://bugzilla.mozilla.org/show_bug.cgi?id=2007783) *(bugzilla.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 45% · Edge 45% · Firefox 61.5% · Safari 42.6%; experimental: Chrome 89.9% · Edge 86% · Firefox 67.5% · Safari 74.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- **Chrome usage:** 0.00013% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 12 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 17 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 45% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 140 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** The addition of an options bag (\`WebSocketInit\`) to the WebSocket constructor modernizes the API to mirror Fetch-style configuration patterns and enables future capabilities like Local Network Access control. Having recently shipped in Chrome 154, the feature standardizes an extension point while maintaining backward compatibility with the legacy protocols parameter. Ecosystem reception is favorable given its utility for upcoming network security specifications.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams can begin utilizing the object syntax ({ protocols: '...' }) in modern application code where Chrome 154+ is targeted, but should continue supporting legacy string or array arguments for cross-browser safety until the option bag lands more broadly across other engines.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [closed] `position: support`, `topic: networking`, `venue: WHATWG HTML Workstream`, `from: Google`
  > *Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."*
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open] `venue: WHATWG`, `topic: API`

#### 📰 Ecosystem Blogs & Articles

- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor Chromestatus Wed, 05 Aug 2026 10:5...
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to ...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > The option bag will initially support a &quot;protocols&quot; option, &lt;strong&gt;allowing developers to specify subprotocols (mirroring the existing protocols argument), and also serves as an extension point for future opti...
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > &lt;strong&gt;Adds support for passing an options dictionary (WebSocketInit) as the second argument to the WebSocket constructor&lt;/strong&gt;. The options dictionary supports a protocols option, letting you specify subprotocols (m...

#### 🔗 Inbound Citations & Reverse Links

- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > \[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor Chromestatus Wed, 05 Aug 2026 10:5...
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to ...

#### 📚 Platform Documentation & References

- [Supporting options bag in WebSocket constructor · Issue #1444 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1444) *(github.com)*
- [Use case for WebSocket communications · Issue #16 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/16) *(github.com)*
- [local-network-access: WebSocket constructor rejects targetAddressSpace and test flag misses IPv6 localhost · Issue #1651 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1651) *(github.com)*
- [Add targetAddressSpace integration in WebSockets by christhompson · Pull Request #125 · WICG/local-network-access](https://github.com/WICG/local-network-access/pull/125) *(github.com)*
- [fix(local-network-access): update WebSocket LNA guidance and IPv6 localhost flag (#1651) by rowan-m · Pull Request #1727 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/pull/1727) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `websockets` on [wpt.fyi](https://wpt.fyi/results?q=feature:websockets) (via webstatus.dev) — stable: Chrome 94.6% · Edge 94.6% · Firefox 96.6% · Safari 95.5%; experimental: Chrome 95.7% · Edge 95.7% · Firefox 96.6% · Safari 95.5%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (54 found across 12 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (2 found, 1 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(group "websockets", shared with 5 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "websockets": Chrome 94.6% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 1

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
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""BluetoothRemoteGATTServer" EventTarget "maxwritewithoutresponsesizechanged""`, `""Web Bluetooth" "BluetoothRemoteGATTServer" EventTarget"`
- **Analysis:** Chromium is shipping an update to make BluetoothRemoteGATTServer inherit from EventTarget, establishing standard event-dispatch capabilities for connection-level GATT events such as maximum write-without-response size changes. While welcomed by IoT and web hardware developers seeking parity with native BLE stacks, the enhancement lands within an API that remains strictly Chromium-only. Cross-browser consensus remains fractured, as non-Chromium engines maintain firm opposition to exposing raw Bluetooth capabilities on the web.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building web-to-hardware applications should feature-detect EventTarget methods on the GATT server instance before attaching connection listeners, providing graceful fallbacks or fixed write chunking for unsupported runtimes. Because Web Bluetooth cannot achieve cross-browser interoperability, teams targeting Safari or Firefox must continue relying on native companion apps or progressive enhancement gates.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "It is there now. The JSON is updated every 48 hours. You can tell from the commit log on this repository...."
- Standards Activity (Mozilla): Latest discussion from @qdot: "I do not believe those that would be responsible for management and implementation of WebBluetooth are ready to discuss the viability and company posi..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Web Bluetooth](https://github.com/WebKit/standards-positions/issues/570) [closed] `position: oppose`, `concerns: privacy`, `concerns: security`, `topic: device apis`, `topic: app-like capabilities`, `from: Google`, `concerns: device independence`
  > *Latest discussion from @annevk: "It is there now. The JSON is updated every 48 hours. You can tell from the commit log on this repository...."*
- **Mozilla:** [Web Bluetooth](https://github.com/mozilla/standards-positions/issues/95) [closed] `venue: W3C CG`, `position: negative`
  > *Latest discussion from @qdot: "I do not believe those that would be responsible for management and implementation of WebBluetooth are ready to discuss the viability and company posi..."*

#### 📦 Polyfills & NPM Ecosystem

- [@types/web-bluetooth](https://www.npmjs.com/package/@types/web-bluetooth) `v0.0.21` — TypeScript definitions for web-bluetooth

#### 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://chromestatus.com/feature/5138797158334464?gate=6155787868176384) *(chromestatus.com)*
  > Chrome Platform Status
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17633.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTar...
- [\[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17579.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helm...
- [\[blink-dev\] Intent to Prototype: Web Bluetooth: BluetoothRemoteGATTServer.maxWriteWithoutResponseSize](http://www.mail-archive.com/blink-dev@chromium.org/msg17314.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Web Bluetooth: BluetoothRemoteGATTServer.maxWriteWithoutResponseSize Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Web Bluetooth: BluetoothRemoteGATTServer.maxWri...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17603.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTar...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > &lt;strong&gt;BluetoothRemoteGATTServer inherits from EventTarget, exposing the standard addEventListener(), removeEventListener(), and dispatchEvent() methods&lt;/strong&gt;.

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17633.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5138797158334464`)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTar...
- [\[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17579.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5138797158334464`)*
  > \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helm...
- [\[web-bluetooth\] Pull Request: Add BluetoothRemoteGATTCharacteristic.getMTU() from Helmut Januschka via GitHub on 2026-06-18 (public-web-bluetooth-log@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-web-bluetooth-log/2026Jun/0012.html) *(lists.w3.org)* *(Cites: `https://github.com/WebBluetoothCG/web-bluetooth/pull/672`)*
  > Feedback very welcome -- this is my first PR here, so tell me if I got the spec conventions wrong anywhere. Thanks! See https://&lt;strong&gt;github.com/WebBluetoothCG/web-bluetooth/pull/672&lt;/strong&gt; -- Sent via github-notify-...
- [Re: \[web-bluetooth\] Add BluetoothRemoteGATTCharacteristic.getMTU() (#672) from Reilly Grant via GitHub on 2026-06-22 (public-web-bluetooth-log@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-web-bluetooth-log/2026Jun/0015.html) *(lists.w3.org)* *(Cites: `https://github.com/WebBluetoothCG/web-bluetooth/pull/672`)*
  > -- GitHub Notification of comment by reillyeon Please view or discuss this issue at https://&lt;strong&gt;github.com/WebBluetoothCG/web-bluetooth/pull/672&lt;/strong&gt;#issuecomment-4774154268 using your GitHub account -- Sent via ...
- [Re: \[web-bluetooth\] Add BluetoothRemoteGATTCharacteristic.maxWriteWithoutResponseSize (#672) from Helmut Januschka via GitHub on 2026-06-23 (public-web-bluetooth-log@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-web-bluetooth-log/2026Jun/0017.html) *(lists.w3.org)* *(Cites: `https://github.com/WebBluetoothCG/web-bluetooth/pull/672`)*
  > -- GitHub Notification of comment by hjanuschka Please view or discuss this issue at https://&lt;strong&gt;github.com/WebBluetoothCG/web-bluetooth/pull/672&lt;/strong&gt;#issuecomment-4774448561 using your GitHub account -- Sent via...

#### 📚 Platform Documentation & References

- [\[web-bluetooth\] Pull Request: Add BluetoothRemoteGATTCharacteristic.getMTU() from Helmut Januschka via GitHub on 2026-06-18 (public-web-bluetooth-log@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-web-bluetooth-log/2026Jun/0012.html) *(lists.w3.org)*
- [Re: \[web-bluetooth\] Add BluetoothRemoteGATTCharacteristic.getMTU() (#672) from Reilly Grant via GitHub on 2026-06-22 (public-web-bluetooth-log@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-web-bluetooth-log/2026Jun/0015.html) *(lists.w3.org)*
- [Re: \[web-bluetooth\] Add BluetoothRemoteGATTCharacteristic.maxWriteWithoutResponseSize (#672) from Helmut Januschka via GitHub on 2026-06-23 (public-web-bluetooth-log@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-web-bluetooth-log/2026Jun/0017.html) *(lists.w3.org)*
- [Add BluetoothRemoteGATTServer.maxWriteWithoutResponseSize by hjanuschka · Pull Request #672 · whatwg/bluetooth](https://github.com/whatwg/bluetooth/pull/672) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `web-bluetooth` on [wpt.fyi](https://wpt.fyi/results?q=feature:web-bluetooth) (via webstatus.dev) — stable: Chrome 0.6% · Edge 3.2% · Firefox 0.6% · Safari 0.6%; experimental: Chrome 100% · Edge 4.5% · Firefox 0.6% · Safari 0.6%

#### 🌐 Web-features Group Context

*group-level data: web-features [`web-bluetooth`](https://webstatus.dev/features/web-bluetooth), shared with 12 other ChromeStatus features*

- **Chrome usage:** 0.000003% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/105))
- **Mozilla:** negative ([standards position](https://github.com/mozilla/standards-positions/issues/95))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (54 found across 12 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (3 found, 1 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 1 verified) · `web-features mapping` *(group "web-bluetooth", shared with 12 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "web-bluetooth": Chrome 0.6% passing (stable))* · `Sources cited by the AI synthesis` (2 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 8

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

- **Momentum:** **Emerging** (footprint 140 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"gpuweb atomic vec2u min max"`, `"WebGPU atomic vec2u min max"`, `"WGSL atomicStoreMin atomicStoreMax"`
- **Analysis:** The 'atomic-vec2u-min-max' feature introduces 64-bit atomic minimum and maximum capabilities to WebGPU by using composite 8-byte 'atomic&lt;vec2u&gt;' storage variables through WGSL's 'atomicStoreMin' and 'atomicStoreMax' built-ins. Officially enabled by default in Chromium 157 following an approved Blink Intent to Ship, the API bypasses the absence of full 64-bit integer types to map directly to hardware-level 64-bit atomic operations across underlying backends like Metal, Vulkan, and Direct3D 12. The specification has landed in W3C GPU for the Web standards with broad multi-engine working group backing.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat this capability strictly as an optional hardware-dependent feature: verify support with adapter.features.has('atomic-vec2u-min-max') and request it explicitly during device initialization before adding 'enable atomic\_vec2u\_min\_max;' in WGSL. Maintain fallback rendering paths—such as packed 32-bit reduced precision keys or two-pass visibility evaluations—for platforms and adapters where 64-bit atomics remain unsupported.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [webgpu.report](https://webgpu.report/features/atomic-vec2u-min-max) *(webgpu.report)*
  > The \*\*\`atomic-vec2u-min-max\`\*\* feature introduces support for 64-bit atomic minimum and maximum operations on \`atomic&lt;vec2u&gt;\` variables within WGSL (WebGPU Shading Language) storage buffers \*\*New Built-ins\*\*: The feature...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17534.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Alex Russell Wed, 23 Sep 2026 08:27:12 -0700 LGTM2 On Wednes...
- [\[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17518.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Chromestatus Mon, 21 Sep 2026 14:43:50 -0700 Contact emails \[email&#...
- [WGSL: Add atomic min max for u64, to support Nanite \[453689550\] - Chromium](https://issues.chromium.org/issues/453689550) *(issues.chromium.org)*
  > Chromium Sign in
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Daniel Bratell Wed, 23 Sep 2026 08:35:46 -0700 LGTM3...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Vladimir Levin Wed, 23 Sep 2026 08:21:02 -0700 LGTM1 On Mond...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17534.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4882016087703552`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Alex Russell Wed, 23 Sep 2026 08:27:12 -0700 LGTM2 On Wednes...
- [\[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17518.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Chromestatus Mon, 21 Sep 2026 14:43:50 -0700 Contact emails \[email&#...
- [WGSL: Add atomic min max for u64, to support Nanite \[453689550\] - Chromium](https://issues.chromium.org/issues/453689550) *(issues.chromium.org)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > Chromium Sign in
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Daniel Bratell Wed, 23 Sep 2026 08:35:46 -0700 LGTM3...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Vladimir Levin Wed, 23 Sep 2026 08:21:02 -0700 LGTM1 On Mond...

#### 📚 Platform Documentation & References

- [gpuweb/proposals/atomic-64-min-max.md at main · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/blob/main/proposals/atomic-64-min-max.md) *(github.com)*
- [w3.org](https://www.w3.org/TR/WGSL) *(w3.org)*
- [2074500 - (webgpu-atomic-vec2u-min-max) WebGPU: support \`atomic-vec2u-min-max\` feature](https://bugzilla.mozilla.org/show_bug.cgi?id=2074500) *(bugzilla.mozilla.org)*
- [Add atomic\_vec2u\_min\_max by MendyBerger · Pull Request #604 · webgpu-native/webgpu-headers](https://github.com/webgpu-native/webgpu-headers/pull/604) *(github.com)*
- [Implement \`atomic-vec2u-min-max\` feature · Issue #10435 · gfx-rs/wgpu](https://github.com/gfx-rs/wgpu/issues/10435) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)

#### 🌐 Web-features Group Context

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- **Chrome usage:** 0.096% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 12 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (5 found, 3 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webgpu", shared with 44 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webgpu": no stable pass rate for Chrome yet)* · `Sources cited by the AI synthesis` (5 found, 4 verified)
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

- **Momentum:** **Emerging** (footprint 130 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""compression dictionary transport" webkit firefox status"`, `""compression dictionary" "rel=compression-dictionary" destination"`, `"whatwg html pull 11620 compression dictionary"`
- **Analysis:** Compression Dictionary Transport originally landed in Chromium 130, and these updates synchronize the engine with finalized WHATWG HTML and Fetch specifications by explicitly setting the request destination to 'compression-dictionary' and respecting CORS and referrer policy attributes. While production adoption is spearheaded by large platforms and edge networks reporting massive bandwidth reductions of 60% to 90%, baseline interoperability across the broader web remains limited. Cross-engine consensus is strengthening rapidly as collaborative implementation work by Mozilla and Igalia reaches Firefox and WebKit.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt compression dictionaries via progressive enhancement by adding link tags with explicit crossorigin and referrerpolicy attributes, ensuring that servers negotiate shared dictionaries for supporting clients while maintaining standard Brotli or Zstandard fallbacks for others.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [perfplanet.com](https://calendar.perfplanet.com/2025/from-theory-to-tiny-implementing-compression-dictionaries) *(calendar.perfplanet.com)*
  > Townsend’s follow-up covers real-world implementation challenges, highlighting how fine-grained request controls (destination, credentials) prevent security side-channel leaks and unexpected cache partitioning issues \*\*C...
- [cloudflare.com](https://blog.cloudflare.com/shared-dictionaries) *(blog.cloudflare.com)*
  > \*\*Summary\*\*: Discusses the security posture of the specification, particularly the strict CORS and cache partitioning rules Cloudflare highlights why having an explicit destination (\`"compression-dictionary"\`) and proper...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17528.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 23 Sep 20...
- [\[blink-dev\] Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17496.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Fri, 18 Sep 2026 10:16:1...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17662.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Philip Jägenstedt Wed, 07 Oc...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17502.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates 'Dan Clark' via blink-dev Mon, 21 Se...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17528.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4895435813683200`)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 23 Sep 20...
- [\[blink-dev\] Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17496.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4895435813683200`)*
  > \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Fri, 18 Sep 2026 10:16:1...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17662.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11620`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Philip Jägenstedt Wed, 07 Oc...

#### 📚 Platform Documentation & References

- [rel="compression-dictionary" - HTML - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/html/reference/attributes/rel/compression-dictionary/index.md?plain=1) *(github.com)*
- [Update documentation for compression dictionary transport · Issue #875 · mdn/mdn · GitHub](https://github.com/mdn/mdn/issues/875) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `compression-dictionary-transport` on [wpt.fyi](https://wpt.fyi/results?q=feature:compression-dictionary-transport) (webstatus.dev has no pass rates for it)

#### 🌐 Web-features Group Context

*group-level data: web-features [`compression-dictionary-transport`](https://webstatus.dev/features/compression-dictionary-transport), shared with 3 other ChromeStatus features*

- **Chrome usage:** 0.096% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/315))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (47 found across 11 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 4 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "compression-dictionary-transport", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "compression-dictionary-transport": no stable pass rate for Chrome yet)* · `Sources cited by the AI synthesis` (5 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""flow-start" "flow-end" mozilla standards-positions"`, `""flow-start" "flow-end" alignment keywords csswg"`, `""flow-start" "flow-end" "blink-dev""`, `""flow-start" "flow-end" webkit standards-positions"`
- **Analysis:** The CSS \`flow-start\` and \`flow-end\` keywords generalize alignment behavior across modern layouts—most notably CSS Grid-Lanes/Masonry and Flexbox—to properly accommodate content placement reversals where directional flow diverges from logical container edges. Originating from CSS Working Group resolutions to alias and eventually supersede the serialization of \`flex-start\` and \`flex-end\`, the feature is advancing rapidly from experimental flags toward production shipping in Chromium. Cross-engine sentiment is aligned, though full multi-browser availability remains pending.

**Key Recommendations & Takeaways:**
- Actionable Advice: Hold off on deploying \`flow-start\` and \`flow-end\` in production styles until cross-browser baseline support matures, sticking to existing container-relative alignment or \`flex-start\`/\`flex-end\` fallbacks. Web developers experimenting with early CSS Grid-Lanes or masonry prototypes should test the keywords behind browser flags to validate layout behavior during placement reversals.
- Standards Activity (Mozilla): Latest discussion from @celestepan: "@dholbert thank you for the response!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/WebKit/standards-positions/issues/723) [open] `topic: css`, `venue: W3C CSS WG`
- **Mozilla:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/mozilla/standards-positions/issues/1455) [closed] `position: positive`
  > *Latest discussion from @celestepan: "@dholbert thank you for the response!..."*

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5069051687731200) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > \*\*The Problem:\*\* In layout modes with potential placement reversals (such as CSS Grid-Lanes / masonry layouts utilizing \`fill-reverse\` or \`track-reverse\`), standard logical container keywords (\`start\`/\`end\`) do not alway...
- [semanticdiff.com](https://app.semanticdiff.com/gh/web-platform-tests/wpt/commit/66c8558479cb6d5583366a30bd7c170fba21ea7f) *(app.semanticdiff.com)*
  > Browser vendors have begun parsing and landing support for these keywords under the hood, updating alignment and layout logic so that \`flow-start\`/\`flow-end\` properly handle directional reversals across formatting contex...
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17749.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blink-...
- [\[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17728.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blink-dev Wed,...
- [\[blink-dev\] Intent to Prototype: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17380.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blin...
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17743.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Philip Jägenstedt Thu, 1...

#### 🔗 Inbound Citations & Reverse Links

- [Create a new feature ID for \`flow-start\` and \`flow-end\` keywords in alignment · Issue #4282 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4282) *(github.com · 2026-08-27T23:18:04)* *(Cites: `https://chromestatus.com/feature/5069051687731200`)*
  > Create a new feature ID for \`flow-start\` and \`flow-end\` keywords in alignment · Issue #4282 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up App...
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17749.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/pull/14539`)*
  > Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blink-...
- [\[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17728.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/pull/14539`)*
  > \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blink-dev Wed,...

#### 📚 Platform Documentation & References

- [w3.org](https://lists.w3.org/Archives/Public/public-css-archive/2026Aug/0191.html) *(lists.w3.org)*
- [CSS Align: \`flow-start\` and \`flow-end\` as aliases for \`flex-start\` and \`flex-end\` · Issue #1455 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1455) *(github.com)*
- [Create a new feature ID for \`flow-start\` and \`flow-end\` keywords in alignment · Issue #4282 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4282) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (47 found across 11 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (4 found, 4 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (3 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 2

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

- **Momentum:** **Emerging** (footprint 130 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** The Import Text (Text Modules) specification is a Stage 3 TC39 proposal that extends JavaScript's import attributes to load raw textual assets as strings via \`import … with { type: "text" }\`. The feature has achieved cross-engine momentum, having shipped by default in Firefox 153 and Chrome 155, while remaining in development for WebKit and Safari. Native runtimes like Bun and Deno, alongside bundlers such as esbuild, have also embraced the syntax, moving the web closer to full baseline text-import capability.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should continue using build-step transforms or bundler loaders (such as in Vite or esbuild) for cross-browser production code while Safari support settles. For runtime-only codebases or edge platforms targeting Chromium, Firefox, Deno, or Bun, developers can safely author native text imports or pair them with dynamic \`import()\` feature detection.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [azeemhassni.com](https://azeemhassni.com/blog/wire-chrome-155-text-module-imports) *(azeemhassni.com)*
  > The \*\*Import Text\*\* feature is a TC39 proposal (currently at \*\*Stage 3\*\*, championed by Eemeli Aro) that extends JavaScript’s import attributes mechanism Following the precedent set by JSON modules (\`with { type: "json" ...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17403.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Daniel Bratell Wed, 09 Sep 2026 07:34:24 -0700 LGTM1 (Stage 3 TC...
- [\[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17364.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Import Text (Text Modules) Nikolaos Papaspyrou Thu, 03 Sep 2026 12:54:19 -0700 \*Contact emails\* \[em...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17420.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Vladimir Levin Wed, 09 Sep 2026 09:19:55 -0700 LGTM3 On Wednesda...
- [\[dev-platform\] Intent to protoype: Importing text modules](http://www.mail-archive.com/dev-platform@mozilla.org/msg01760.html) *(mail-archive.com)*
  > \[dev-platform\] Intent to protoype: Importing text modules Skip to site navigation (Press enter) \[dev-platform\] Intent to protoype: Importing text modules 'Eemeli Aro' via \[email&#160;protected\] Wed, 15 Apr 2026 07:41:48 ...
- [\[dev-platform\] Intent to Ship: Importing text modules](http://www.mail-archive.com/dev-platform@mozilla.org/msg01801.html) *(mail-archive.com)*
  > \[dev-platform\] Intent to Ship: Importing text modules Skip to site navigation (Press enter) \[dev-platform\] Intent to Ship: Importing text modules 'Eemeli Aro' via \[email&#160;protected\] Thu, 21 May 2026 05:16:53 -0700 As...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17403.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Daniel Bratell Wed, 09 Sep 2026 07:34:24 -0700 LGTM1 (Stage 3 TC...
- [\[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17364.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5191512456560640`)*
  > \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Import Text (Text Modules) Nikolaos Papaspyrou Thu, 03 Sep 2026 12:54:19 -0700 \*Contact emails\* \[em...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17420.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-import-text`)*
  > Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules) Vladimir Levin Wed, 09 Sep 2026 09:19:55 -0700 LGTM3 On Wednesda...
- [\[dev-platform\] Intent to protoype: Importing text modules](http://www.mail-archive.com/dev-platform@mozilla.org/msg01760.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11933`)*
  > \[dev-platform\] Intent to protoype: Importing text modules Skip to site navigation (Press enter) \[dev-platform\] Intent to protoype: Importing text modules 'Eemeli Aro' via \[email&#160;protected\] Wed, 15 Apr 2026 07:41:48 ...
- [\[dev-platform\] Intent to Ship: Importing text modules](http://www.mail-archive.com/dev-platform@mozilla.org/msg01801.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11933`)*
  > \[dev-platform\] Intent to Ship: Importing text modules Skip to site navigation (Press enter) \[dev-platform\] Intent to Ship: Importing text modules 'Eemeli Aro' via \[email&#160;protected\] Thu, 21 May 2026 05:16:53 -0700 As...

#### 📚 Platform Documentation & References

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-30 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0004.html) *(lists.w3.org)*
- [Import attributes - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with) *(developer.mozilla.org)*
- [Import with type text, bytes, and URL · Issue #9444 · whatwg/html](https://github.com/whatwg/html/issues/9444) *(github.com)*
- [Text import attributes · Issue #1556 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1556) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (67 found across 14 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (3 found, 1 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(group "text-modules", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "text-modules" has no test results)*
- **Content Inspected:** Spec: ✔ · Explainers: 3 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 130 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** Shipped enabled by default in Chromium 154, this feature closes a long-standing security bypass by ensuring that Background Fetch requests undergo the same Local Network Access (LNA) and CORS enforcement as standard fetch calls. Because Chromium historically routed Background Fetch through internal browser download pipelines, origins could inadvertently query local and loopback addresses without user permission. The update aligns Chromium's implementation with the Background Fetch specification, ensuring uniform security enforcement across foreground and background contexts.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit service worker background fetches targeting private IP ranges, localhost, or intranet endpoints to verify that the requesting origin requests and obtains explicit LNA permissions in secure contexts. For internal enterprise applications that cannot immediately refactor local communication flows, configure administrative policies like LocalNetworkAccessAllowedForUrls or LoopbackNetworkAllowedForUrls to prevent breakage.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @christhompson: "We aren't sure about venue yet but it has been on my mind some. Some parts will just be merged into the various relevant specifications, but there def..."
- Standards Activity (Mozilla): Latest discussion from @dveditz: "We're presumably "positive" on this since we've implemented most of it and enabled it on Nightly. What are the formal steps needed at this point?..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Request for Position: Local Network Access](https://github.com/WebKit/standards-positions/issues/520) [open] `topic: networking`, `venue: WICG`, `topic: meaningful user consent`, `concerns: venue`, `from: Google`
  > *Latest discussion from @christhompson: "We aren't sure about venue yet but it has been on my mind some. Some parts will just be merged into the various relevant specifications, but there def..."*
- **Mozilla:** [Local Network Access](https://github.com/mozilla/standards-positions/issues/1260) [open] `venue: W3C CG`, `team: Networking`
  > *Latest discussion from @dveditz: "We're presumably "positive" on this since we've implemented most of it and enabled it on Nightly. What are the formal steps needed at this point?..."*

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/feature/6210300985606144) *(cr-status.appspot.com)*
  > The \*\*Local Network Access (LNA) restrictions for Background Fetch\*\* feature closes a long-standing security bypass in Chromium-based browsers \*\*The Problem:\*\* Previously, Chromium handled Background Fetch requests via s...
- [chromeenterprise.google](https://chromeenterprise.google/resources/release-notes) *(chromeenterprise.google)*
  > The release documentation highlights that routing Background Fetch requests through standard fetch controls ensures that both CORS and LNA policies are enforced identically across foreground and background contexts
- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17224.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch ...
- [\[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch Chromestatus Fri...
- [\[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Alex Rus...
- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17209.html) *(mail-archive.com)*
  > &lt;strong&gt;We considered completely removing the ability for Background Fetch to make local network requests&lt;/strong&gt;, which would be more disruptive. Treating Background Fetch requests the same as fetch() calls from a serv...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17224.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch ...
- [\[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > \[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch Chromestatus Fri...
- [\[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch Alex Rus...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/security/local-network-access.md) *(github.com)*
- [Local Network Access checks do not run on GTK and WPE by igower · Pull Request #76721 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/76721) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (41 found across 11 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 3 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (7 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "local-network-access", shared with 7 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "local-network-access": no stable pass rate for Chrome yet)*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 8

---

<a id="5194104408506368-webtransport-headers-and-responseheaders"></a>
### [WebTransport headers and responseHeaders](https://chromestatus.com/feature/5194104408506368)

- **Milestone:** Chrome 156 (Enabled by default) · first listed in Chrome 153
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
- **Analysis:** The WebTransport headers and responseHeaders feature adds native support for supplying custom HTTP request headers via WebTransportOptions and inspecting server response headers. This eliminates suboptimal workarounds like passing credentials in query strings or adding initial handshake streams, earning positive reception for streamlining API gateway authentication and proxy routing.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams building real-time data applications can begin integrating custom headers for cleaner authentication flows, while ensuring fallback mechanisms or progressive enhancement are considered for browsers lacking immediate support.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [google.com](https://issuetracker.google.com/issues/551879993) *(issuetracker.google.com)*
  > \*\*Milestones & Implementation:\*\* Led by Chromium engineers (such as Adam Rice), the entry outlines the roadmap for Chromium browsers
- [chromestatus.com](https://chromestatus.com/feature/6521719678042112) *(chromestatus.com)*
  > Protocol negotiation headers (such as \`wt-protocol\` / application protocol negotiation) were harmonized to integrate smoothly alongside custom application headers
- [\[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17342.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Chromestatus Wed, 02 Sep 2026 07:28:08 -0700...
- [Re: \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17475.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; There&#x27;s an existing issue for WebTransport as a whole here: &gt;&gt;&gt; https://github.com/mozilla/standards-positions/issues/167 &gt;&gt;&gt; &gt;&gt;&gt; Because it is part ...
- [WebTransport](https://w3c.github.io/webtransport) *(w3c.github.io · 2021-10-01T12:35:03)*
  > Set request’s method to &quot;CONNECT&quot;, and set the method’s associated :protocol pseudo-header to &quot;webtransport&quot;. &lt;strong&gt;Let headers be a new Headers object filled with options\[&quot;headers&quot;\]&lt;/stro...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=Intent+to+Ship) *(groups.google.com)*
  > Intent to Ship: Resource Timing: Add spec-compliant Service Worker Router timing fields · archive this Intent? &gt;&gt; &gt;&gt; Best, &gt;&gt; &gt;&gt; Alex &gt;&gt; &gt;&gt; On Monday, June 15, 2026 at 11:37:54 AM UTC-...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders](http://www.mail-archive.com/blink-dev@chromium.org/msg17342.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194104408506368`)*
  > \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport headers and responseHeaders Chromestatus Wed, 02 Sep 2026 07:28:08 -0700...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [Do we want to allow web developers to add headers of the CONNECT request? · Issue #263 · w3c/webtransport](https://github.com/w3c/webtransport/issues/263) *(github.com)*
- [Remove \[SameObject\] from responseHeaders · Issue #783 · w3c/webtransport](https://github.com/w3c/webtransport/issues/783) *(github.com)*
- [Exposing headers of the CONNECT response · Issue #264 · w3c/webtransport](https://github.com/w3c/webtransport/issues/264) *(github.com)*
- [Remove \[SameObject\] from responseHeaders attribute by jan-ivar · Pull Request #799 · w3c/webtransport](https://github.com/w3c/webtransport/pull/799) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 45% · Edge 45% · Firefox 61.5% · Safari 42.6%; experimental: Chrome 89.9% · Edge 86% · Firefox 67.5% · Safari 74.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- **Chrome usage:** 0.00013% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (61 found across 11 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 4 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 17 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 45% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5109912169480192-webtransport-receive-stream"></a>
### [WebTransport receive stream](https://chromestatus.com/feature/5109912169480192)

- **Milestone:** Chrome 155 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5109912169480192](https://chromestatus.com/feature/5109912169480192) · [chromestatuslite.com/feature/5109912169480192](https://chromestatuslite.com/feature/5109912169480192)
- **Specification:** [https://w3c.github.io/webtransport/#webtransportreceivestream](https://w3c.github.io/webtransport/#webtransportreceivestream)
- **Chromium Bug:** [https://issues.chromium.org/issues/568317222](https://issues.chromium.org/issues/568317222)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

#### 📝 Overview

Adds the standardized WebTransportReceiveStream interface, a ReadableStream subclass used for incoming unidirectional streams and the readable side of bidirectional streams. Its getStats() method returns per-stream byte counters: bytesReceived reports bytes received from the network, while bytesRead reports bytes delivered to the application.

> **Motivation:** Incoming WebTransport streams have historically been exposed as generic ReadableStream objects in Chromium. The WebTransport specification defines a dedicated WebTransportReceiveStream subclass with stream-specific statistics.  Applications that receive large or latency-sensitive streams need to distinguish bytes received by the browser from bytes ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 120 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** The \`WebTransportReceiveStream\` interface brings Chromium into alignment with the W3C WebTransport specification by subclassing \`ReadableStream\` for incoming streams and exposing a dedicated \`getStats()\` method. Firefox and Safari already expose \`WebTransportReceiveStream\`, making Chromium's Developer Trial in version 155 a major milestone toward cross-browser alignment. By surfacing \`bytesReceived\` alongside \`bytesRead\`, the API gives web developers essential visibility into network transmission versus application backpressure.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web developers should audit WebTransport stream intake code to ensure checks rely on \`instanceof ReadableStream\` rather than strict constructor comparisons (\`=== ReadableStream\`). Stream telemetry via \`getStats()\` can be safely feature-detected and used as a progressive enhancement for monitoring consumer throughput.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2058634: \[wpt-sync\] Sync PR 61577 - Test https://w3c.github.io/webtransport/#webtransportreceivestream-pull-bytes](https://bugzilla.mozilla.org/show_bug.cgi?id=2058634) `[NEW]`
- **Mozilla (Gecko):** [Bug #2078342: A pending read() on a WebTransportReceiveStream rejects with a TypeError instead of a WebTransportError after the peer sends RESET\_STREAM](https://bugzilla.mozilla.org/show_bug.cgi?id=2078342) `[NEW]`
- **Mozilla (Gecko):** [Bug #2082841: \[wpt-sync\] Sync PR 63745 - WebTransport: wpt test for WebTransportReceiveStream](https://bugzilla.mozilla.org/show_bug.cgi?id=2082841) `[NEW]`
- **Mozilla (Gecko):** [Bug #2082932: New wpt failures in /webtransport/ \[receive-stream-stats.https.any.worker.html, receive-stream-stats.https.any.serviceworker.html, receive-stream-stats.https.any.html, and 1 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2082932) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://2020-01-23-dot-cr-status.appspot.com/feature/5109912169480192) *(2020-01-23-dot-cr-status.appspot.com)*
  > The Web Platform has introduced the standardized \*\*\`WebTransportReceiveStream\`\*\* interface This specialized \`ReadableStream\` subclass handles incoming unidirectional streams as well as the readable side of bidirectional ...
- [Exploring the WebTransport API: A New Era of Web Communication](https://jsdev.space/webtransport-api) *(jsdev.space · 2025-01-16T00:00:00)*
  > To extract data from a unidirectional stream opened on the server, use the WebTransport.incomingUnidirectionalStreams property, which returns ReadableStream objects of WebTransportReceiveStream.
- [Platform - Web documentation \| Deno Docs](https://docs.deno.com/api/web/platform) *(docs.deno.com)*
  > #getStats(): Promise&lt;WebTransportReceiveStreamStats&gt; MDN Reference · The constructor object for WebTransportReceiveStream. Instances are obtained from a WebTransport session rather than constructed directly. #proto...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes) *(chromestatus.com)*
  > &lt;strong&gt;Adds the standardized WebTransportReceiveStream interface, a ReadableStream subclass used for incoming unidirectional streams and the readable side of bidirectional streams&lt;/strong&gt;.

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/webtransport) *(w3.org)*
- [WebTransport API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [WebTransportBidirectionalStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportBidirectionalStream) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 45% · Edge 45% · Firefox 61.5% · Safari 42.6%; experimental: Chrome 89.9% · Edge 86% · Firefox 67.5% · Safari 74.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- **Chrome usage:** 0.00013% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (59 found across 13 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (3 found, 2 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (8 found, 4 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 17 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 45% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 110 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Capability Elements" "icon-only" chrome status"`
- **Analysis:** The Capability Elements Icon-only mode extends the Page-Embedded Permission Control (PEPC) initiative by introducing a \`displaymode\` attribute to render capability elements like \`&lt;camera&gt;\`, \`&lt;microphone&gt;\`, and \`&lt;geolocation&gt;\` as compact icon buttons without mandatory text. Shipped by default in Chrome 157, it solves significant design friction for space-constrained layouts such as spatial map overlays and video floating trays while preserving native browser security guarantees. Cross-browser feedback remains sparse, with other engine vendors yet to register formal signals.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams targeting Chromium-based browsers can leverage the icon-only mode today as a progressive enhancement for space-constrained layouts, while ensuring robust fallback mechanisms for other engines that do not yet support capability elements or this display variant.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **11 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Introducing the &lt;usermedia&gt; HTML element \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/usermedia-html-element) *(developer.chrome.com)*
  > Introducing the &lt;usermedia&gt; HTML element \| Blog \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe...
- [Chrome Platform Status](https://chromestatus.com/feature/5153829504024576) *(chromestatus.com)*
  > Chrome Platform Status
- [chrome.com](https://developer.chrome.com/blog/rethinking-web-permissions) *(developer.chrome.com)*
  > \*\*Evolution of the Capability Elements Suite:\*\* Ecosystem coverage highlights this feature as a logical progression following the introduction of the \`&lt;geolocation&gt;\` element
- [whatpwacando.today](https://whatpwacando.today/media-capability-elements) *(whatpwacando.today)*
  > \*\*Evolution of the Capability Elements Suite:\*\* Ecosystem coverage highlights this feature as a logical progression following the introduction of the \`&lt;geolocation&gt;\` element and media elements (\`&lt;camera&gt;\`, \`&lt;microphone&gt;\`...
- [\[blink-dev\] Re: Intent to Extend Experiment: Capability Elements &lt;usermedia&gt; MVP](http://www.mail-archive.com/blink-dev@chromium.org/msg17027.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Capability Elements MVP Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Capability Elements MVP Alex Russell Wed, 22 Jul 2026 08:21:31 -0700...
- [\[blink-dev\] Intent to Extend Experiment: Capability Elements &lt;usermedia&gt; MVP](http://www.mail-archive.com/blink-dev@chromium.org/msg17006.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Extend Experiment: Capability Elements MVP Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Capability Elements MVP Chromestatus Mon, 20 Jul 2026 13:09:41 -0700 Contact...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Extend Experiment: Capability Elements &lt;usermedia&gt; MVP](http://www.mail-archive.com/blink-dev@chromium.org/msg17027.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/mediacapture-extensions/blob/main/media-capture-elements-explainer.md`)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Capability Elements MVP Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Capability Elements MVP Alex Russell Wed, 22 Jul 2026 08:21:31 -0700...
- [\[blink-dev\] Intent to Extend Experiment: Capability Elements &lt;usermedia&gt; MVP](http://www.mail-archive.com/blink-dev@chromium.org/msg17006.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/mediacapture-extensions/blob/main/media-capture-elements-explainer.md`)*
  > \[blink-dev\] Intent to Extend Experiment: Capability Elements MVP Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Capability Elements MVP Chromestatus Mon, 20 Jul 2026 13:09:41 -0700 Contact...
- [\[blink-dev\] Intent to Ship: Capability elements: &lt;camera&gt; and &lt;microphone&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17048.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/mediacapture-extensions/blob/main/media-capture-elements-explainer.md`)*
  > \[blink-dev\] Intent to Ship: Capability elements: and Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Capability elements: and Chromestatus Wed, 22 Jul 2026 14:47:30 -0700 Contact emails \[email&#160;prot...
- [Re: \[blink-dev\] Re: Intent to Ship: Capability elements: &lt;camera&gt; and &lt;microphone&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17181.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/mediacapture-extensions/blob/main/media-capture-elements-explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Capability elements: and Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Capability elements: and 'Thomas Nguyen' via blink-dev Sun, 16 Aug 2026 01:55:32 -070...
- [\[webkit-changes\] \[WebKit/WebKit\] 2c252b: Implement https://w3c.github.io/mediacapture-exten...](https://www.mail-archive.com/webkit-changes@lists.webkit.org/msg212408.html) *(mail-archive.com)* *(Cites: `https://w3c.github.io/mediacapture-extensions/#media-capture-html-elements`)*
  > \[webkit-changes\] \[WebKit/WebKit\] 2c252b: Implement https://w3c.github.io/mediacapture-exten... Skip to site navigation (Press enter) \[webkit-changes\] \[WebKit/WebKit\] 2c252b: Implement https://w3c.github.io/mediacapture-e...

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `permissions` on [wpt.fyi](https://wpt.fyi/results?q=feature:permissions) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 33.3%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 33.3%

#### 🌐 Web-features Group Context

*group-level data: web-features [`permissions`](https://webstatus.dev/features/permissions), shared with 5 other ChromeStatus features*

- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/19))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 12 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (5 found, 4 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "permissions", shared with 5 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "permissions": Chrome 66.7% passing (stable))*
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

- **Momentum:** **Emerging** (footprint 105 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Overscroll Areas (originating under Declarative Overscroll Actions in Open UI) introduces declarative primitives allowing elements to anchor beyond scroller boundaries to support swipeable drawers, sidebars, and pull-to-refresh interactions without custom JavaScript touch listeners. The proposal is currently moving through early specification at the CSS Working Group and is entering an experimental Origin Trial in Chromium. Other major browser vendors have not yet committed to implementations or published official signals, leaving the feature in early exploratory stages.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should treat Overscroll Areas as experimental and avoid using it in production without full fallback patterns. Developers interested in native gesture design should evaluate the Origin Trial in Chromium, provide UX feedback to the Open UI and ARIA issue trackers, and ensure drawer and action menus remain fully operable via standard activatable buttons and keyboard controls.
- In active Origin Trial in Chrome 157. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Experiment: Overscroll Areas](http://www.mail-archive.com/blink-dev@chromium.org/msg17624.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Overscroll Areas Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Overscroll Areas Chris Harrelson Wed, 30 Sep 2026 13:09:38 -0700 LGTM On Wed, Sep 30, 202...
- [\[blink-dev\] Intent to Experiment: Overscroll Areas](http://www.mail-archive.com/blink-dev@chromium.org/msg17620.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Overscroll Areas Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Overscroll Areas Chromestatus Wed, 30 Sep 2026 12:21:40 -0700 Contact emails \[email&#160;protecte...
- [\[blink-dev\] Intent to Prototype: Overscroll Gestures](https://www.mail-archive.com/blink-dev@chromium.org/msg14574.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Overscroll Gestures Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Overscroll Gestures Chromestatus Mon, 08 Sep 2025 07:53:42 -0700 Contact emails \[email&#160;prot...
- [\[blink-dev\] Ready for Developer Testing: Overscroll Gestures](http://www.mail-archive.com/blink-dev@chromium.org/msg16333.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Overscroll Gestures Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Overscroll Gestures Chromestatus Fri, 17 Apr 2026 11:44:16 -0700 Contact emails ...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Experiment: Overscroll Areas](http://www.mail-archive.com/blink-dev@chromium.org/msg17624.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5261280285949952`)*
  > Re: \[blink-dev\] Intent to Experiment: Overscroll Areas Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Overscroll Areas Chris Harrelson Wed, 30 Sep 2026 13:09:38 -0700 LGTM On Wed, Sep 30, 202...
- [\[blink-dev\] Intent to Experiment: Overscroll Areas](http://www.mail-archive.com/blink-dev@chromium.org/msg17620.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5261280285949952`)*
  > \[blink-dev\] Intent to Experiment: Overscroll Areas Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Overscroll Areas Chromestatus Wed, 30 Sep 2026 12:21:40 -0700 Contact emails \[email&#160;protecte...
- [\[blink-dev\] Intent to Prototype: Overscroll Gestures](https://www.mail-archive.com/blink-dev@chromium.org/msg14574.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5261280285949952`)*
  > \[blink-dev\] Intent to Prototype: Overscroll Gestures Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Overscroll Gestures Chromestatus Mon, 08 Sep 2025 07:53:42 -0700 Contact emails \[email&#160;prot...
- [Overscroll Gestures · Issue #1053 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1053) *(github.com · 2026-07-29T18:36:22)* *(Cites: `https://chromestatus.com/feature/5261280285949952`)*
  > Overscroll Gestures · Issue #1053 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [\[blink-dev\] Ready for Developer Testing: Overscroll Gestures](http://www.mail-archive.com/blink-dev@chromium.org/msg16333.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5261280285949952`)*
  > \[blink-dev\] Ready for Developer Testing: Overscroll Gestures Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Overscroll Gestures Chromestatus Fri, 17 Apr 2026 11:44:16 -0700 Contact emails ...

#### 📚 Platform Documentation & References

- [w3.org](https://www.w3.org/events/meetings/a275b20d-cdd5-4771-83a6-df48b8885a54) *(w3.org)*
- [Overscroll Gestures · Issue #1053 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1053) *(github.com)*
- [\[css-overscroll-2\] Overscroll area style adjustments · Issue #14603 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14603) *(github.com)*
- [\[css-overscroll-2\] What does the overscroll-area-parent-box inherit from? · Issue #14602 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14602) *(github.com)*
- [Should it be possible to open overscroll areas "modally", and if so, how? · Issue #1384 · openui/open-ui](https://github.com/openui/open-ui/issues/1384) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Overscroll Areas Demo](https://flackr.github.io/web-demos/html/overscrollcontainer)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (59 found across 12 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 1 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (3 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5143933628841984-ask-before-http-warning-on-by-default"></a>
### [Ask-before-HTTP warning on by default](https://chromestatus.com/feature/5143933628841984)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5143933628841984](https://chromestatus.com/feature/5143933628841984) · [chromestatuslite.com/feature/5143933628841984](https://chromestatuslite.com/feature/5143933628841984)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Chrome now prompts users by default when they access an insecure (HTTP) connection. IT admins can control this default behavior via \[HttpsOnlyMode\](https://chromeenterprise.google/policies/#HttpsOnlyMode) policy.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (footprint 100 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"Firefox HTTPS-Only Mode default WebKit HTTPS-First"`, `"Chrome Ask before HTTP warning on by default"`, `"Chrome HTTPS First mode default warning HTTP"`
- **Analysis:** Chrome 154 establishes the 'Ask-before-HTTP' warning by default for all public web navigations, transitioning Google's 'Always Use Secure Connections' initiative from an opt-in feature into the browser's baseline behavior. Rather than silently falling back to unencrypted HTTP when automatic HTTPS upgrades fail, Chrome presents an explicit, bypassable interstitial warning before permitting access to insecure endpoints. While cross-engine consensus firmly supports an encrypted-by-default web, Chrome has taken the most aggressive user-facing stance by introducing direct user friction to unencrypted public navigations.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit all public domains, subdomain redirections, campaign shortlinks, and registrar forwarders to ensure every step in the redirect chain negotiates a valid TLS connection. Enterprise teams managing internal appliances or non-HTTPS infrastructure should verify private network exclusions or deploy Chrome's enterprise HttpsOnlyMode policy to prevent workflow interruptions.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [HTTPS by default](https://blog.google/security/https-by-defau) *(blog.google)*
  > HTTPS by default Chrome Security HTTPS by default Oct 28, 2025 \| x.com Facebook LinkedIn Mail Copy link Chris Thompson Chrome Security Team Mustafa Emre Acer Chrome Security Team Serena Chen Chrome Security Team Joe DeBl...
- [searchenginejournal.com](https://www.searchenginejournal.com/chrome-to-warn-users-before-loading-http-sites-starting-next-year/559583) *(searchenginejournal.com)*
  > Rather than silently falling back to unencrypted HTTP or relying solely on subtle URL-bar indicators after a connection is already made, Chrome now proactively prompts users with a warning before navigating to public web...
- [Chromium Docs - Adapting your website for Chrome’s “Ask-before-HTTP” warning](https://chromium.googlesource.com/chromium/src/+/main/docs/security/ask-before-http/ask-before-http-adoption-guide.md) *(chromium.googlesource.com)*
  > developer.chrome.com / Chromium Documentation It provides testing steps, FAQs on local development, automated testing workarounds (e.g., Selenium/ChromeDriver), and details on enterprise allowlisting
- [chromium.org](https://blog.chromium.org/2023/08/towards-https-by-default.html) *(blog.chromium.org)*
  > Google highlighted that while over 90–95% of web traffic is encrypted, a stubborn fraction of HTTP connections remains vulnerable to active network attackers who hijack navigations to distribute malware or execute social...
- [Chrome 154 or 155: When HTTPS-First Warnings Become Default and How to Manage Them](https://windowsforum.com/news/chrome-154-or-155-when-https-first-warnings-become-default-and-how-to-manage-them.447078) *(windowsforum.com)*
  > Industry Developer Blogs & News Community discussions stress that while the warning functions as a "speed bump" rather than a hard block (users can click "Continue to site" or disable the setting), it heavily penalizes l...
- [setsailmedia.com](https://setsailmedia.com/website-security/chrome-https-by-default-2025) *(setsailmedia.com)*
  > Industry Developer Blogs & News Community discussions stress that while the warning functions as a "speed bump" rather than a hard block (users can click "Continue to site" or disable the setting), it heavily penalizes l...

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 10 planned queries, 4 verified) · `Google Search Grounding (gemini-3.8-flash)` (7 found, 6 verified) · `Twitter / X API v2` *(found 9 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (8 found, 5 verified)
- **Content Inspected:** Spec: ○ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 100 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** The exposure of ProgressEvent in service workers resolves a long-standing environment gap, allowing developers to construct progress events with attributes like lengthComputable, loaded, and total inside service worker scopes. This update achieves parity with Window, DedicatedWorker, and SharedWorker contexts as outlined by the XMLHttpRequest Standard. Ecosystem-wide, the feature has gained formal shipping consensus in Blink (landing in Chrome 157) with positive reception for improving API symmetry.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams can safely rely on ProgressEvent constructors inside service workers for modern chromium-based environments, but should implement capability detection or fallbacks if targeting older browser versions that lack worker-scope support. Ensure that shared utility libraries expecting ProgressEvent do not erroneously assume automatic stream progress tracking over service worker fetch events.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17670.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Chris Harrelson Wed, 07 Oct 20...
- [\[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17669.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Alex Russell Wed, 07 Oct 2026 08:22:47...
- [\[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17635.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers Chromestatus Thu, 01 Oct 2026 06:11:26 -0700 C...
- [\[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17546.html) *(mail-archive.com)*
  > Specification https://xhr.spec.whatwg.org/#interface-progressevent Summary ProgressEvent is available in service workers, &lt;strong&gt;allowing developers to construct progress events with lengthComputable, loaded, and total ...
- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17671.html) *(mail-archive.com)*
  > The expanded WPT is included in the CL: &gt;&gt;&gt; https://chromium-review.googlesource.com/c/chromium/src/+/8425503 &gt;&gt;&gt; &gt;&gt;&gt; \*Flag name on about://flags\* &gt;&gt;&gt; \*No information provided\* &gt;&gt...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17670.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Chris Harrelson Wed, 07 Oct 20...
- [\[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17669.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Alex Russell Wed, 07 Oct 2026 08:22:47...
- [\[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17635.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > \[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers Chromestatus Thu, 01 Oct 2026 06:11:26 -0700 C...

#### 📚 Platform Documentation & References

- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com)*
- [ProgressEvent - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent) *(developer.mozilla.org)*
- [\[Blink\] Expose ProgressEvent in service workers by chromium-wpt-export-bot · Pull Request #63586 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63586) *(github.com)*
- [Release merge\_pr\_63586 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/releases/tag/merge_pr_63586) *(github.com)*
- [XMLHttpRequestEventTarget: progress event - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/progress_event) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `xhr` on [wpt.fyi](https://wpt.fyi/results?q=feature:xhr) (via webstatus.dev) — stable: Chrome 95.4% · Edge 94.7% · Firefox 97% · Safari 96.3%; experimental: Chrome 95.6% · Edge 95.2% · Firefox 97% · Safari 98.2%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 11 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (3 found, 2 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (1 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "xhr", shared with 6 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "xhr": Chrome 95.4% passing (stable))*
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

- **Momentum:** **Emerging** (footprint 100 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** Introduced in Chrome 155, this feature enforces an upfront, all-or-nothing security validation on chrome.debugger.attach() whenever enterprise policies configure runtime blocked hosts or screenshot and data loss prevention restrictions. Because the Chrome DevTools Protocol operates below the browser's origin sandbox, Google chose total attach rejection over unpredictable runtime CDP failures, closing a long-standing enterprise data-exfiltration loophole. As a Chromium-specific extension enterprise policy mechanism, it operates outside W3C web standards and has no direct multi-engine standardization track.

**Key Recommendations & Takeaways:**
- Actionable Advice: Extension developers must update their chrome.debugger.attach() logic to handle promise rejections and display actionable messaging for host and screenshot policy errors. Where feasible, teams building automation or content-modification tools should migrate to origin-scoped WebExtension APIs like chrome.scripting and chrome.declarativeNetRequest, which respect granular enterprise permissions rather than failing completely.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Stricter enterprise policy enforcement for chrome.debugger in Chrome 155 \| Chrome for Developers](https://developer.chrome.com/blog/debugger-enterprise-policy-restrictions) *(developer.chrome.com)*
  > Stricter enterprise policy enforcement for chrome.debugger in Chrome 155 \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – B...
- [extpower.dev](https://extpower.dev/blog/chrome-155-extension-automation-stopped-working) *(extpower.dev)*
  > \*\*Publisher:\*\* Developer blogs (EXTPOWER, C# Corner) \*\*Overview:\*\* Community articles focused on troubleshooting enterprise browser automation tools, QA test suites, AI web agents, and robotic process automation (RPA) ex...
- [c-sharpcorner.com](https://www.c-sharpcorner.com/article/chrome-155-chrome-debugger-changes-what-extension-developers-need-to-know) *(c-sharpcorner.com)*
  > \*\*Publisher:\*\* Developer blogs (EXTPOWER, C# Corner)
- [chrome.debugger \| API \| Chrome for Developers](https://developer.chrome.google.cn/docs/extensions/reference/api/debugger) *(developer.chrome.google.cn)*
  > On enterprise devices, some policies can restrict extensions from attaching the debugger using an all-or-nothing model at attach time (chrome.debugger.attach()): Host restrictions: &lt;strong&gt;If enterprise policy ExtensionS...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com · 2026-10-06T00:00:00)*
  > For hosts, &lt;strong&gt;the ExtensionSettings enterprise policy can be configured to block hosts for an extension&lt;/strong&gt;, returning the error Host access is restricted by policy.
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/en_us/resources/release-notes/?brand=GCEW) *(chromeenterprise.google · 2026-08-12T00:00:00)*
  > For hosts, &lt;strong&gt;the ExtensionSettings enterprise policy can be configured to block hosts for an extension&lt;/strong&gt;, returning the error Host access is restricted by policy.

#### 📚 Platform Documentation & References

- [GitHub - DaveTseng2019/kimi-webbridge-lockdown: Lock Kimi WebBridge (or any debugger-based AI browser-control extension) out of your bank, broker and mailbox — guided, reversible ExtensionSettings policy (Edge+Chrome, Windows/macOS)](https://github.com/DaveTseng2019/kimi-webbridge-lockdown) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (52 found across 10 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (5 found, 3 verified) · `Twitter / X API v2` *(found 6 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (9 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ○ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 100 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The WebTransport \`datagramsReadableType\` constructor option standardizes how incoming datagrams are handled, defaulting to a standard ReadableStream to preserve message boundaries and zero-length datagrams. Developers requiring explicit Bring Your Own Buffer (BYOB) allocation control can request a byte stream by setting \`datagramsReadableType: "bytes"\`. This change resolves historical issues where standard byte stream readers inadvertently merged datagram boundaries or dropped empty messages.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams building low-latency WebTransport applications should evaluate \`datagramsReadableType: "bytes"\` under developer flags if BYOB memory efficiency is critical. For general message handling, rely on default non-byte streams to ensure discrete datagram boundaries and empty payloads are properly preserved.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5148774971342848/activity) *(chromestatus.com)*
  > Originally in Chromium, incoming datagrams were exposed as a byte stream (\`ReadableByteStreamController\`), allowing "Bring Your Own Buffer" (BYOB) readers by default readable\` is standardized as a default (non-byte) \`Rea...
- [chromium.org](https://issues.chromium.org/issues/546106919/resources) *(issues.chromium.org)*
  > html\`) to validate boundary preservation on default streams and enforce \`TypeError\` when BYOB is requested on a non-byte stream
- [googleusercontent.com](https://doc-2gh0-0gig-issuetracker.googleusercontent.com/issues/571879167) *(doc-2gh0-0gig-issuetracker.googleusercontent.com)*
  > \*\*MDN Tracking:\*\* GitHub documentation tracking issues for the WebTransport Datagram API document the transition from legacy draft properties (such as WebKit's earlier \`datagramsReadableMode\`) to the standardized \`datagr...
- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type Chromestatus Mon, 14 Sep 2026 ...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes) *(chromestatus.com)*
  > By default, incoming WebTransport Datagrams are exposed through a default ReadableStream . &lt;strong&gt;Applications that require BYOB reading can request a readable byte stream by setting datagramsReadableType: &quot;bytes&q...
- [WebTransport（日本語訳）](https://triple-underscore.github.io/webtransport-ja.html) *(triple-underscore.github.io · 2026-04-01T00:00:00)*
  > ◎ Note: Using 64 kibibytes buffers ... the buffer. ◎ If datagramsReadableType is &quot;bytes&quot;, &lt;strong&gt;set up with byte reading support incomingDatagrams with pullAlgorithm set to pullDatagramsAlgorithm, and highWat...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5148774971342848`)*
  > \[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type Chromestatus Mon, 14 Sep 2026 ...

#### 📚 Platform Documentation & References

- [\`pullDatagrams\` errors \`datagrams.readable\` on a zero-length datagram when \`datagramsReadableType\` is \`"bytes"\` · Issue #795 · w3c/webtransport](https://github.com/w3c/webtransport/issues/795) *(github.com)*
- [GitHub - vmeansdev/webtransport-bun: Production-focused WebTransport for Bun, powered by a Rust napi-rs addon (wtransport). In-process server and client, datagrams + uni/bidi streams, Chromium interop, bounded queues/backpressure defaults, and runnable examples (local, Docker, and Compose) for real-time systems beyond WebSockets. · GitHub](https://github.com/vmeansdev/webtransport-bun) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 45% · Edge 45% · Firefox 61.5% · Safari 42.6%; experimental: Chrome 89.9% · Edge 86% · Firefox 67.5% · Safari 74.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- **Chrome usage:** 0.00013% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (45 found across 12 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 3 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 17 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 45% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 95 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Popup Capability Delegation is currently undergoing developer trials behind a flag in Chrome, aiming to solve a notable capability gap for Service Worker push notifications. By allowing background workers to delegate transient user activation to same-origin client windows, apps can open auxiliary windows via window.open() that share in-memory state, rather than forcing a cold-start via Clients.openWindow().

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should treat this feature as strictly experimental and test it behind flags in Chrome development builds. Since cross-browser adoption and baseline status are pending, rely on traditional fallback routing (such as Clients.openWindow) for production web apps.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://img544-dot-cr-status.appspot.com/feature/5091965583622144) *(img544-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5091965583622144/activity) *(img544-dot-cr-status.appspot.com)*
  > openWindow(url)\` opener\`
- [chromestatuslite.com](https://chromestatuslite.com) *(chromestatuslite.com)*
  > This opens a standalone, top-level browsing context (such as a new browser tab) with no reference to existing tabs opener\`
- [github.io](https://wicg.github.io/capability-delegation/spec.html) *(wicg.github.io)*
  > \*\*Transient Consumption:\*\* The delegated token must be consumed within a narrow time window (transient user activation lifetime) open()\` is called by the client window, the capability is consumed to prevent repeated or d...
- [\[blink-dev\] Re: Intent to Prototype: Capability delegation for pop-ups](http://www.mail-archive.com/blink-dev@chromium.org/msg17131.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Prototype: Capability delegation for pop-ups Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: Capability delegation for pop-ups 'Dan Murphy' via blink-dev Thu, 06 Aug 2...
- [\[blink-dev\] Ready for Developer Testing: Popup Capability Delegation](http://www.mail-archive.com/blink-dev@chromium.org/msg17714.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Popup Capability Delegation Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Popup Capability Delegation Chromestatus Mon, 12 Oct 2026 20:30:04 -0700...

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

- [\[Notifications\] SW popup capability delegation by chromium-wpt-export-bot · Pull Request #63442 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/63442) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Popup Capability Delegation Demo](https://googlechrome.github.io/samples/service-worker/capability-delegation-popup/index.html)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (44 found across 11 planned queries, 4 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 4 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (1 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 90 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The \`:navigation-source\` CSS pseudo-class has landed in Chrome and Edge (version 156), providing a declarative way to target the element that initiated an outgoing navigation or form submission. It is primarily motivated by View Transitions, allowing developers to smoothly connect elements like thumbnails or submit buttons across page navigations without writing imperative JavaScript. Standards discussions in the W3C CSSWG are underway, though broader multi-engine implementation and Baseline indexing have yet to materialize.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat this feature as a progressive enhancement. Because it is currently exclusive to Chromium-based browsers, rely on feature queries or conditional fallbacks while monitoring cross-browser adoption before using it in production-critical paths.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @noamr: "&gt; \[@noamr\](https://github.com/noamr) I guess the main use case is view-transitions, right? Doesn't seem particularly complicated I suppose  Right, but..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS :navigation-source pseudo-class](https://github.com/WebKit/standards-positions/issues/715) [open] `topic: css`, `venue: W3C CSS WG`, `from: Google`
- **Mozilla:** [CSS \`:navigation-source\` pseudo-class](https://github.com/mozilla/standards-positions/issues/1447) [open] `topic: CSS`
  > *Latest discussion from @noamr: "&gt; \[@noamr\](https://github.com/noamr) I guess the main use case is view-transitions, right? Doesn't seem particularly complicated I suppose  Right, but..."*

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Chromestatus Thu, 03 Sep 2026 02...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17393.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Rick Byers Tue, 08 Sep 2...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17395.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Philip Jägenstedt Wed, 0...

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

- [\[css-navigation-1\] Add pseudo-class selector to target the element that initiated the outgoing navigation · Issue #11801 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11801) *(github.com)*
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1447) *(github.com)*
- [\[css-view-transitions-2\] Syntax for navigation-matching · Issue #8925 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8925) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (49 found across 12 planned queries, 6 verified) · `Google Search Grounding (gemini-3.8-flash)` (3 found, 0 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 2

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

- **Momentum:** **Emerging** (footprint 90 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"WHATWG HTML pull 11536 light dismiss"`, `"Light dismiss improvements for popovers and dialogs"`, `""light dismiss" "click" "pointerdown" popover dialog chromium"`
- **Analysis:** Native popovers and light-dismissible dialogs are broadly supported across modern engines, but initial implementations suffered from touch-scroll gestures and right-clicks unintentionally closing open overlays. Chrome 154 updates the light-dismiss trigger to use standard DOM \`click\` events rather than a \`pointerdown\`/\`pointerup\` sequence, resolving long-standing Chromium tracking bugs and aligning with WHATWG HTML specification updates (PR #11536). Engine consensus is solid as all major vendors favor moving light-dismiss handling to standard click event lifecycles.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams can rely on native \`popover="auto"\` and \`&lt;dialog closedby="any"&gt;\` without needing manual JavaScript touch guards or scroll-lock hacks. Teams should audit UI test suites to ensure automated modal tests trigger real click sequences rather than isolated pointer events.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome 154 light dismiss fix for popovers and dialogs](https://aamirmukaram.com/notes/html-popover-light-dismiss-chrome-154) *(aamirmukaram.com)*
  > Chrome 154 light dismiss fix for popovers and dialogs Skip to content Aamir Mukaram Book a call HTML · Chrome 154 · 14 Oct 2026 Chrome 154 stops scrolls from closing native popovers Chrome 154 triggers light dismiss on c...
- [codercops.com](https://blog.codercops.com/blog/chrome-154-websocket-options-iterator-includes-https-prompts-2026) *(blog.codercops.com)*
  > \*\*Accidental drag-dismissals:\*\* Dragging across element boundaries (e.g., mouse press inside the popover and release outside) could accidentally trigger dismissal Because a standard \`click\` requires press and release act...
- [chromestatus.com](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > \*\*Coverage:\*\* Google documented this under the DOM category as a key quality-of-life update shipping across Desktop, Android, and WebView in Chrome 154
- [github.io](https://niek.github.io/chrome-features) *(niek.github.io)*
  > \*\*Details:\*\* The entry explains that switching the underlying mechanism to \`click\` addresses long-standing Chromium tracking bugs (such as Issue #408010435)
- [Dialog light dismiss - Chrome Platform Status](https://chromestatus.com/feature/5097714453577728) *(chromestatus.com)*
  > The move toward \`click\`-based dismissal aligns native browser behavior with the standard JavaScript click event lifecycle that web developers have used for custom modals for years
- [\[blink-dev\] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs](http://www.mail-archive.com/blink-dev@chromium.org/msg17139.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs Joey Arh...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs](http://www.mail-archive.com/blink-dev@chromium.org/msg17139.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6209615938322432`)*
  > \[blink-dev\] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs Joey Arh...
- [Re: \[pointerevents\] Add context for popover light dismiss to click event (#542) from Mustaq Ahmed via GitHub on 2025-07-16 (public-pointer-events@w3.org from July to September 2025)](https://lists.w3.org/Archives/Public/public-pointer-events/2025JulSep/0005.html) *(lists.w3.org)* *(Cites: `https://github.com/w3c/pointerevents/issues/542`)*
  > -- GitHub Notification of comment by mustaqahmed Please view or discuss this issue at https://&lt;strong&gt;github.com/w3c/pointerevents/issues/542&lt;/strong&gt;#issuecomment-3078866418 using your GitHub account -- Sent via github-...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-17 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0002.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11536`)*
  > (4 by emilio, josepharhar) ... Expand disabled form control event handling spec text (1 by josepharhar) https://github.com/whatwg/html/pull/12219 \[agenda+\] - #11536 Change light dismiss to use click events (1 by josephar...

#### 📚 Platform Documentation & References

- [Re: \[pointerevents\] Add context for popover light dismiss to click event (#542) from Mustaq Ahmed via GitHub on 2025-07-16 (public-pointer-events@w3.org from July to September 2025)](https://lists.w3.org/Archives/Public/public-pointer-events/2025JulSep/0005.html) *(lists.w3.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-17 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0002.html) *(lists.w3.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `popover` on [wpt.fyi](https://wpt.fyi/results?q=feature:popover) (via webstatus.dev) — stable: Chrome 95.5% · Edge 92.8% · Firefox 84.7% · Safari 62.2%; experimental: Chrome 95.5% · Edge 92.8% · Firefox 85.6% · Safari 71.2%

#### 🌐 Web-features Group Context

*group-level data: web-features [`popover`](https://webstatus.dev/features/popover), shared with 2 other ChromeStatus features*

- **Chrome usage:** 0.076% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/374))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/698))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 12 planned queries, 5 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 5 verified) · `Twitter / X API v2` *(found 5 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "popover", shared with 2 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "popover": Chrome 95.5% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 90 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** Chrome 157 ships native support for applying CSS \`object-fit\` and \`object-position\` properties to SVG documents loaded via \`&lt;object&gt;\` and \`&lt;embed&gt;\` elements, aligning them with behavior already standard for \`&lt;img&gt;\` and \`&lt;video&gt;\`. Previously, Chromium engines forcibly stretched embedded SVGs to completely fill the content box, ignoring sizing directives. This update resolves long-standing layout discrepancies and brings alignment closer to standard replaced element rendering rules.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams can leverage this feature to consistently style embedded SVGs across modern browsers, though fallback wrapper containers or SVG-internal viewBox adjustments should still be considered for older legacy browser environments.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **1 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [object-fit and object-position do not apply to svg in object tag \[41302806\] - Chromium](https://issues.chromium.org/issues/41302806) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17499.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in and Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in and Chro...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17515.html) *(mail-archive.com)*
  > \*Web Feature ID\* object-fit ...-images-3/#the-object-position Currently, Chrome applies them to images and videos but &lt;strong&gt;ignores them for SVG documents loaded through &lt;object&gt; or &lt;embed&gt;&lt;/strong&gt;, which ...
- [\[blink-dev\] Re: Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17511.html) *(mail-archive.com)*
  > &gt; https://drafts.csswg.org/css-images-3/#the-object-fit &gt; https://drafts.csswg.org/css-images-3/#the-object-position Currently, &gt; &lt;strong&gt;Chrome applies them to images and videos but ignores them for SVG documen...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17646.html) *(mail-archive.com)*
  > On Fri, Oct 2, 2026 at 9:34 AM ... out-of-process frames. I am implementing the fix and &gt; will upload the CLs shortly. &gt; &gt; &lt;strong&gt;This feature only covers SVG documents in &lt;object&gt; and &lt;embed&gt;&lt;/stro...
- [Re: \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17601.html) *(mail-archive.com)*
  > &gt;&gt;&gt; https://drafts.csswg.org/css-images-3/#the-object-fit &gt;&gt;&gt; https://drafts.csswg.org/css-images-3/#the-object-position Currently, &gt;&gt;&gt; Chrome applies them to images and videos but ignores them...

#### 🔗 Inbound Citations & Reverse Links

- [object-fit and object-position do not apply to svg in object tag \[41302806\] - Chromium](https://issues.chromium.org/issues/41302806) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/4886345347629056`)*
  > Chromium Sign in

#### 📚 Platform Documentation & References

- [Apply object-fit and object-position to SVG in object/embed tags · Issue #726 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/726) *(github.com)*
- [624647 - \[css3-images\] Implement object-fit and object-position CSS properties](https://bugzilla.mozilla.org/show_bug.cgi?id=624647) *(bugzilla.mozilla.org)*
- [object-fit and object-position are ignored for SVG embedded via &lt;object&gt; and &lt;embed&gt; by Ahmad-S792 · Pull Request #75745 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/75745) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `object-fit` on [wpt.fyi](https://wpt.fyi/results?q=feature:object-fit) (via webstatus.dev) — stable: Chrome 49.2% · Edge 48.4% · Firefox 97.6% · Safari 45.2%; experimental: Chrome 98.4% · Edge 98.4% · Firefox 97.6% · Safari 46%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 11 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (5 found, 0 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (0 found, 0 verified) · `web-features mapping` *(group "object-fit", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "object-fit": Chrome 49.2% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 90 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The Web Haptics JavaScript API moves beyond the legacy, low-level navigator.vibrate() pattern by introducing a semantic approach to tactile feedback. Currently in developer trial behind a flag in Chrome 156, it allows developers to state UX intent rather than raw vibration parameters, though it is not yet indexed in Baseline.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should treat this feature as an experimental progressive enhancement. Test it behind flags in Chrome 156, but rely on safe feature detection and robust fallbacks for platforms where the API is unavailable.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://img544-dot-cr-status.appspot.com/feature/5167864517623808) *(img544-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [Web Haptic Feedback: Why It Refuses to Be More Tactile](https://swmansion.com/blog/haptic-feedback-on-the-web-why-the-web-deliberately-refuses-to-be-as-tactile-as-native-apps) *(swmansion.com)*
  > vibrate(\[200, 100, 200\])\`), the API focuses on design intent \*\*Discussion:\*\* This analysis explores the vast disconnect between native mobile UX and the web
- [Web Haptics: The NPM Package Everyone’s Adding for Haptic Feedback \| by Basanta Sapkota \| Medium](https://medium.com/@springmusk/web-haptics-the-npm-package-everyones-adding-for-haptic-feedback-4c774f10caaa) *(medium.com)*
  > The API requires \*\*user activation\*\* (transient interaction) and respects active document visibility, system-level "Do Not Disturb" settings, and a dedicated \`"haptics"\` Permissions Policy \*\*Sources:\*\* \*Medium ("The NPM ...
- [\[blink-dev\] Intent to Prototype: Web Haptics API](http://www.mail-archive.com/blink-dev@chromium.org/msg16948.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Web Haptics API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Web Haptics API 'Alexander Kyereboah' via blink-dev Wed, 08 Jul 2026 11:41:59 -0700 \*Contact emails\*...
- [Web Haptics API \| MSEdgeExplainers](https://microsoftedge.github.io/MSEdgeExplainers/Haptics/explainer.html) *(microsoftedge.github.io)*
  > .sidebar { transition: transform 300ms; transition-haptic-effect: align; } Syntax–semantics match — Does the syntax read like what it does? Haptics are transient events, not ongoing state. A syntax that reads as state (e...
- [Feel the Web — Haptics API](https://liminzhu.github.io/BlinkOn21HapticsTalk) *(liminzhu.github.io)*
  > Four semantic effects — hint · edge · tick · align — with optional intensity (0.0–1.0). Both paths target the most recent input device — if not haptics-capable, no-op (no rerouting). ... Nested at-rule fires when parent ...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Web Haptics API](http://www.mail-archive.com/blink-dev@chromium.org/msg16948.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5167864517623808`)*
  > \[blink-dev\] Intent to Prototype: Web Haptics API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Web Haptics API 'Alexander Kyereboah' via blink-dev Wed, 08 Jul 2026 11:41:59 -0700 \*Contact emails\*...

#### 📚 Platform Documentation & References

- [GitHub - kyerebo/web-haptics: Web Haptics API · GitHub](https://github.com/kyerebo/web-haptics) *(github.com)*
- [Web Haptics API · Issue #262 · WICG/proposals](https://github.com/WICG/proposals/issues/262) *(github.com)*
- [\[Haptics\] Feedback for Web Haptics API · Issue #1241 · MicrosoftEdge/MSEdgeExplainers](https://github.com/MicrosoftEdge/MSEdgeExplainers/issues/1241) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (48 found across 11 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 3 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (15 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 83 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"Private Verification Tokens chrome status"`, `"Private Verification Tokens blink dev"`
- **Analysis:** Private Verification Tokens (PVT) are currently in an origin trial phase on Chromium, serving as an extension of the Private State Tokens ecosystem to help users carry trust established in normal browsing sessions into private browsing (Incognito) modes. The API aims to curb excessive CAPTCHA and anti-bot friction for legitimate users without relying on persistent cross-site identifiers. However, developer and standards discussions highlight open questions regarding debugging capabilities, privacy safeguards, and API ergonomics.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams should monitor the ongoing origin trial and evaluate integration via Chrome's testing mechanisms if anti-bot friction in private browsing heavily impacts their user base. No production implementation should rely on PVT yet, as cross-browser support is absent.
- In active Origin Trial in Chrome 154. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Explainer for the Private Verification Tokens" (2 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Explainer for the Private Verification Tokens](https://news.ycombinator.com/item?id=47760044) — *Hacker News (2 pts, 0 comments)*

#### 📰 Ecosystem Blogs & Articles

- [piunikaweb.com](https://piunikaweb.com/2026/09/03/google-chrome-154-beta-captcha-popup-fixes) *(piunikaweb.com)*
  > \*\*Private Verification Tokens (PVT)\*\* are a privacy-preserving Web Platform proposal designed to solve a growing UX issue: \*\*excessive CAPTCHA and anti-bot friction in private browsing (Incognito) modes\*\* Because private...
- [chrome.com](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > \*\*The Solution:\*\* PVTs allow a website to issue a token during a user’s regular browsing session (where trust has already been established through normal usage or completed challenges) and redeem that token if the user l...
- [fastly.com](https://learn.fastly.com/security-private-access-tokens-and-the-future-of-anti-fraud) *(learn.fastly.com)*
  > \*\*Complementary Security:\*\* Tech articles note that PVTs act as an extension of the broader \*\*Private State Tokens\*\* (formerly Trust Tokens) and \*\*Private Access Tokens\*\* ecosystem used by platforms like Cloudflare and F...
- [Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17182.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens Mike Taylor Mon, 17 Aug 2026 08:15:27 -0700 Can yo...
- [\[blink-dev\] Intent to Prototype: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg16306.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Private Verification Tokens Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Private Verification Tokens Chromestatus Thu, 09 Apr 2026 13:02:30 -0700 Contact emails ...
- [Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17478.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens Daniel Bratell Wed, 16 Sep 2026 08:48:21 -0700 We ...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17182.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210457816924160`)*
  > Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens Mike Taylor Mon, 17 Aug 2026 08:15:27 -0700 Can yo...
- [\[blink-dev\] Intent to Prototype: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg16306.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210457816924160`)*
  > \[blink-dev\] Intent to Prototype: Private Verification Tokens Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Private Verification Tokens Chromestatus Thu, 09 Apr 2026 13:02:30 -0700 Contact emails ...
- [Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17478.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/private-verification-tokens`)*
  > Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens Daniel Bratell Wed, 16 Sep 2026 08:48:21 -0700 We ...
- [\[blink-dev\] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17179.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/private-verification-tokens`)*
  > \[blink-dev\] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Private Verification Tokens Chromestatus Fri, 14 Aug 2026 13:41:33 -0700 Contact email...

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (60 found across 11 planned queries, 5 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 3 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (8 found, 1 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (4 found, 1 verified)
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 80 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** Blink is deprecating and removing support for non-standard \`\_current\` frame target keywords in Chrome 153. Because this behavior was never part of the HTML specification and sees extremely minimal usage (under ~0.00009%), its removal reduces engine complexity and technical debt without destabilizing the web ecosystem.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams do not need to take action unless they explicitly rely on legacy, non-standard \`target="\_current"\` attributes, in which case they should update them to standard values like \`\_self\` or remove the attribute entirely.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5121089536262144?gate=5111691778719744) *(chromestatus.com)*
  > Because this naming convention is entirely non-standard and not defined by core web specifications, browser maintainers moved to remove it
- [chrome.com](https://developer.chrome.com/docs/web-platform/chrome-deprecation) *(developer.chrome.com)*
  > \*\*Standardization and Code Clean-up:\*\* The primary motivation behind removing \`\_current\` is adherence to standard web specifications and reducing technical debt within the browser's codebase Maintaining custom, non-stand...
- [\[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17172.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword Dominic Farolino...
- [Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17176.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword Dominic ...
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com · 2026-09-08T00:00:00)*
  > Usage of this feature is minimal (less than ~0.00009%), see https://chromestatus.com/metrics/feature/timeline/popularity/2835.

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17172.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5121089536262144`)*
  > \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword Dominic Farolino...
- [Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17176.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5121089536262144`)*
  > Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword Dominic ...

#### 📚 Platform Documentation & References

- [7.4 Navigation and session history](https://html.spec.whatwg.org/multipage/browsing-the-web.html) *(html.spec.whatwg.org)*
- [HTML Standard](https://html.spec.whatwg.org/multipage/document-sequences.html) *(html.spec.whatwg.org)*
- [HTML Standard, Edition for Web Developers](https://html.spec.whatwg.org/dev/browsing-the-web.html) *(html.spec.whatwg.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (68 found across 11 planned queries, 6 verified) · `Google Search Grounding (gemini-3.8-flash)` (3 found, 2 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 55 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The proposal introduces speechStartTime and speechEndTime attributes to the SpeechRecognitionResult interface, addressing a longstanding limitation where developers could only inspect DOM event dispatch times rather than acoustic audio boundaries. Championed by Chromium engineers through a Blink Intent to Prototype and currently in developer trials behind a flag for Chrome 153, the feature is also undergoing a W3C TAG design review. However, multi-engine consensus is nascent, as formal commitments from other major browser vendors have not yet emerged.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should evaluate the feature behind developer flags in Chromium builds to test automated subtitling and audio-sync workflows, but avoid relying on it for production architectures. For near-term cross-browser deployments, use feature detection for 'speechStartTime' on SpeechRecognitionResult and retain fallback timing approximations or server-assisted alignment.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Reilly...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Chromestatus W...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Reilly...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Chromestatus W...

#### 📚 Platform Documentation & References

- [Add SpeechRecognitionResult Timestamps · Issue #191 · WebAudio/web-speech-api · GitHub](https://github.com/WebAudio/web-speech-api/issues/191) *(github.com)*
- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [SpeechRecognitionResult Timestamps (WebSpeech API) Demo](https://alan33d.github.io/web-speech-demos/live_meeting_recording_demo.html)
- [SpeechRecognitionResult Timestamps (WebSpeech API) Demo](https://alan33d.github.io/web-speech-demos/webrtc_caption_sync_test.html)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `speech-recognition` on [wpt.fyi](https://wpt.fyi/results?q=feature:speech-recognition) (via webstatus.dev) — stable: Chrome 57.1% · Edge 57.1% · Firefox 14.3% · Safari 14.3%; experimental: Chrome 57.1% · Edge 57.1% · Firefox 57.1% · Safari 14.3%

#### 🌐 Web-features Group Context

*group-level data: web-features [`speech-recognition`](https://webstatus.dev/features/speech-recognition), shared with 8 other ChromeStatus features*

- **Chrome usage:** 0.00017% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/63))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/170))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (45 found across 12 planned queries, 3 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 2 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (2 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "speech-recognition", shared with 8 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "speech-recognition": Chrome 57.1% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (footprint 50 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Analysis:** This change aligns Blink's window event loop dispatch timing for \`transitionrun\` and media query \`change\` events directly with the HTML specification. Shipped in Chrome 153, it ensures that \`transitionrun\` events and media query updates fire consistently at Steps 3.11 and 3.10 respectively, resolving historical timing discrepancies with Gecko and WebKit.

**Key Recommendations & Takeaways:**
- Actionable Advice: No code changes are typically required unless your application relies on buggy intermixed event orderings; web teams can rely on deterministic, cross-engine timing behavior moving forward.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **1 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X](https://x.com/ChromiumDev/status/2093424350036660456) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events](http://www.mail-archive.com/blink-dev@chromium.org/msg17091.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transit...
- [Chrome 153 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2093424350036660456) *(x.com · 2026-08-28T19:43:15)*
  > &lt;strong&gt;Aligns Blink&#x27;s dispatch timing for animation transitionrun events and media query change events with the HTML specification, making the timing interoperable with Gecko and WebKit&lt;/strong&gt;.

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events](http://www.mail-archive.com/blink-dev@chromium.org/msg17091.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6312504658624512`)*
  > \[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transit...

#### 📚 Platform Documentation & References

- [Element: transitionrun event - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionrun_event) *(developer.mozilla.org)*
- [MediaQueryList: change event - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/change_event) *(developer.mozilla.org)*
- [content/files/en-us/web/api/element/transitionrun\_event/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/element/transitionrun_event/index.md?plain=1) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (65 found across 11 planned queries, 5 verified) · `Google Search Grounding (gemini-3.8-flash)` (2 found, 2 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (1 found, 1 verified) · `Dev.to Community Blogs` (3 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (0 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

