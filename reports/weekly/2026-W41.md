# 🌐 Chrome Web Platform Ecosystem Report — 2026-W41

> **Generated on:** 2026-10-05 | **Target Milestones:** Chrome 152, 153, 154, 155, 156
> **Search Engine:** Gemini (Google Grounded) + BRAVE | **Analysis Model:** Google Gemini (gemini-3.8-flash)

## 📊 Executive Snapshot

| Metric | Count | Description |
| :--- | :--- | :--- |
| **Features Tracked** | `87` | APIs & platform features analyzed across milestones |
| **High Ecosystem Momentum** | `80` | Features with active community discussions & publications |
| **Multi-Engine Consensus** | `4` | Broad alignment across Chromium, Gecko, and WebKit |
| **Contested / Concerns** | `3` | Features with open vendor or security/privacy objections |
| **New Mentions This Week** | `1092` | Net new articles, discussions, or standards updates |

## ⚡ Week-over-Week Ecosystem Deltas

### 🚀 Momentum Shifts

- [Ask-before-HTTP warning on by default](#5143933628841984-ask-before-http-warning-on-by-default): Shifted from *Moderate* to **High** momentum
- [WebTransport headers and responseHeaders](#5194104408506368-webtransport-headers-and-responseheaders): Shifted from *Emerging* to **High** momentum
- [Private Verification Tokens](#6210457816924160-private-verification-tokens): Shifted from *Moderate* to **High** momentum
- [Expose CSSStyleValue hierarchy to Worker contexts](#5114591051907072-expose-cssstylevalue-hierarchy-to-worker-contexts): Shifted from *Moderate* to **High** momentum
- [js-profiling in dedicated workers](#5159559872249856-js-profiling-in-dedicated-workers): Shifted from *High* to **Moderate** momentum
- [Avoid caching module failures](#5214647044145152-avoid-caching-module-failures): Shifted from *High* to **Moderate** momentum
- [User Agent Image Replacement API](#5076374013476864-user-agent-image-replacement-api): Shifted from *High* to **Moderate** momentum
- [WebGPU: atomic-vec2u-min-max](#4882016087703552-webgpu-atomic-vec2u-min-max): Shifted from *High* to **Moderate** momentum
- [Suspicious site warnings](#5427561449521152-suspicious-site-warnings): Shifted from *High* to **Emerging** momentum

### 📰 Net New Publications & Discussions

- [Deprecate and remove XSLT](#4709671889534976-deprecate-and-remove-xslt): +17 article(s), 1 discussion(s)
- [Use scroll-snap-type: pair to snap to a single element](#5124378896498688-use-scroll-snap-type-pair-to-snap-to-a-single-element): +34 article(s)
- [Local Network Access restrictions for Background Fetch](#6225598451154944-local-network-access-restrictions-for-background-fetch): +38 article(s), 2 discussion(s)
- [CSS random() function](#5324559251275776-css-random-function): +18 article(s)
- [CPU Performance API](#5189864286978048-cpu-performance-api): +19 article(s), 5 discussion(s)
- [Digital Credentials API (issuance support)](#5099333963874304-digital-credentials-api-issuance-support): +14 article(s)
- [Support for WebHID (Human Interface Device)](#5172464636133376-support-for-webhid-human-interface-device): +21 article(s), 1 discussion(s)
- [Connection Allowlists](#5175745573945344-connection-allowlists): +12 article(s), 4 discussion(s)
- [Reference Target for Cross-root ARIA](#5188237101891584-reference-target-for-cross-root-aria): +3 article(s)
- [Unframed display mode for IWAs](#5551475195904000-unframed-display-mode-for-iwas): +18 article(s)

### ✨ Newly Tracked Features

- [WebTransportReceiveStream](#5109912169480192-webtransportreceivestream) (Chrome 155, In developer trial (Behind a flag))
- [WebTransport send groups and stream prioritization](#5235261159112704-webtransport-send-groups-and-stream-prioritization) (Chrome 153, In developer trial (Behind a flag))
- [WebTransport Datagram writable streams and prioritization](#5183354944225280-webtransport-datagram-writable-streams-and-prioritization) (Chrome 155, In developer trial (Behind a flag))
- [WebTransport reliability attributes](#5094058497277952-webtransport-reliability-attributes) (Chrome 155, In developer trial (Behind a flag))
- [WebTransport Datagram readable stream type](#5148774971342848-webtransport-datagram-readable-stream-type) (Chrome 155, In developer trial (Behind a flag))

---

## 📋 Features Index

| Feature | Milestone | Category | Momentum | Consensus | Week Delta |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [Deprecate and remove XSLT](#4709671889534976-deprecate-and-remove-xslt) | Chrome 152 | `Origin trial` | **High** | Multi-Engine Consensus | ⚡ +17 art / +1 msgs |
| [Use scroll-snap-type: pair to snap to a single element](#5124378896498688-use-scroll-snap-type-pair-to-snap-to-a-single-element) | Chrome 156 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +34 art / +0 msgs |
| [Local Network Access restrictions for Background Fetch](#6225598451154944-local-network-access-restrictions-for-background-fetch) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | ⚡ +38 art / +2 msgs |
| [CSS random() function](#5324559251275776-css-random-function) | Chrome 156 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +18 art / +0 msgs |
| [CPU Performance API](#5189864286978048-cpu-performance-api) | Chrome 152 | `Enabled by default` | **High** | Contested / Concerns Raised | ⚡ +19 art / +5 msgs |
| [Digital Credentials API (issuance support)](#5099333963874304-digital-credentials-api-issuance-support) | Chrome 155 | `Enabled by default` | **High** | Contested / Concerns Raised | ⚡ +14 art / +0 msgs |
| [Support for WebHID (Human Interface Device)](#5172464636133376-support-for-webhid-human-interface-device) | Chrome 154 | `In developer trial (Behind a flag)` | **High** | Contested / Concerns Raised | ⚡ +21 art / +1 msgs |
| [Connection Allowlists](#5175745573945344-connection-allowlists) | Chrome 152 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +12 art / +4 msgs |
| [Reference Target for Cross-root ARIA](#5188237101891584-reference-target-for-cross-root-aria) | Chrome 152 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +3 art / +0 msgs |
| [Unframed display mode for IWAs](#5551475195904000-unframed-display-mode-for-iwas) | Chrome 152 | `Enabled by default` | **High** | Chromium-Led | ⚡ +18 art / +0 msgs |
| [WebTransportReceiveStream](#5109912169480192-webtransportreceivestream) | Chrome 155 | `In developer trial (Behind a flag)` | **High** | Chromium-Led | ✨ New |
| [Deprecate and Remove: document.requestStorageAccessFor](#5162221567082496-deprecate-and-remove-documentrequeststorageaccessfor) | Chrome 153 | `Deprecated` | **High** | Chromium-Led | ⚡ +12 art / +0 msgs |
| [CSS4 text-decoration-skip-spaces](#4832783806627840-css4-text-decoration-skip-spaces) | Chrome 155 | `Enabled by default` | **High** | Chromium-Led | ⚡ +18 art / +0 msgs |
| [Deprecate and Remove: Related Website Sets (RWS)](#5194473869017088-deprecate-and-remove-related-website-sets-rws) | Chrome 153 | `Deprecated` | **High** | Chromium-Led | ⚡ +15 art / +0 msgs |
| [Algorithm Updates in WebCrypto](#5198951632470016-algorithm-updates-in-webcrypto) | Chrome 155 | `Enabled by default` | **High** | Chromium-Led | ⚡ +7 art / +1 msgs |
| [OpaqueRange](#6297362687066112-opaquerange) | Chrome 152 | `Enabled by default` | **High** | Multi-Engine Consensus | ⚡ +10 art / +0 msgs |
| [WebTransport send groups and stream prioritization](#5235261159112704-webtransport-send-groups-and-stream-prioritization) | Chrome 153 | `In developer trial (Behind a flag)` | **High** | Chromium-Led | ✨ New |
| [CSS scroll-marker-group modes](#5109685301673984-css-scroll-marker-group-modes) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | ⚡ +23 art / +1 msgs |
| [Expose the 'autocorrect' global html attribute](#6264645053710336-expose-the-autocorrect-global-html-attribute) | Chrome 152 | `Enabled by default` | **High** | Chromium-Led | ⚡ +21 art / +0 msgs |
| [Relative Alpha Colors (CSS Color 5 alpha() function)](#5070160203481088-relative-alpha-colors-css-color-5-alpha-function) | Chrome 152 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +18 art / +4 msgs |
| [Light dismiss improvements for popovers and dialogs](#6209615938322432-light-dismiss-improvements-for-popovers-and-dialogs) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [IndexedDB: SQLite backend](#5161589557821440-indexeddb-sqlite-backend) | Chrome 156 | `Enabled by default` | **High** | Chromium-Led | ⚡ +30 art / +0 msgs |
| [CSS text-decoration-inset](#5178263526834176-css-text-decoration-inset) | Chrome 156 | `Enabled by default` | **High** | Chromium-Led | ⚡ +18 art / +5 msgs |
| [Support targetAddressSpace option for WebSockets](#4779920606756864-support-targetaddressspace-option-for-websockets) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | ⚡ +13 art / +5 msgs |
| [Responsively-sized &lt;iframe&gt;](#5108373464547328-responsively-sized-iframe) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | ⚡ +5 art / +1 msgs |
| [JPEG XL decoding support (image/jxl) in blink](#5114042131808256-jpeg-xl-decoding-support-imagejxl-in-blink) | Chrome 155 | `Enabled by default` | **High** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [JS Self-Profiling Markers](#5201297767792640-js-self-profiling-markers) | Chrome 153 | `Origin trial` | **High** | Chromium-Led | ⚡ +18 art / +2 msgs |
| [Notification attribution for PWAs on macOS](#5863296436666368-notification-attribution-for-pwas-on-macos) | Chrome 152 | `Enabled by default` | **High** | Chromium-Led | ⚡ +31 art / +8 msgs |
| [Pause media playback on not-visible iframes](#5082950457884672-pause-media-playback-on-not-visible-iframes) | Chrome 155 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +3 art / +0 msgs |
| [CSS Symbols()](#5146996093616128-css-symbols) | Chrome 155 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +13 art / +0 msgs |
| [scroll-axis-lock](#5908461532610560-scroll-axis-lock) | Chrome 153 | `Enabled by default` | **High** | Chromium-Led | ⚡ +2 art / +1 msgs |
| [Add options bag to WebSocket constructor](#5080055102439424-add-options-bag-to-websocket-constructor) | Chrome 154 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +20 art / +0 msgs |
| [Fetch API: Forward reason from AbortController to fetch Response](#5158507786665984-fetch-api-forward-reason-from-abortcontroller-to-fetch-response) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | ⚡ +23 art / +0 msgs |
| [Remove FencedFrame element and window.fence APIs](#6366274495053824-remove-fencedframe-element-and-windowfence-apis) | Chrome 156 | `Deprecated` | **High** | Chromium-Led | ⚡ +19 art / +0 msgs |
| [Single-axis scroll containers](#5067363861004288-single-axis-scroll-containers) | Chrome 154 | `In developer trial (Behind a flag)` | **High** | Chromium-Led | ⚡ +3 art / +0 msgs |
| [Iterator Join](#5095183554314240-iterator-join) | Chrome 153 | `Enabled by default` | **High** | Chromium-Led | ⚡ +2 art / +2 msgs |
| [SpeechRecognitionResult Timestamps (WebSpeech API)](#5811907077472256-speechrecognitionresult-timestamps-webspeech-api) | Chrome 153 | `In developer trial (Behind a flag)` | **High** | Chromium-Led | ⚡ +6 art / +0 msgs |
| [audioPreferred capture in getDisplayMedia API](#5085785343787008-audiopreferred-capture-in-getdisplaymedia-api) | Chrome 152 | `Enabled by default` | **High** | Chromium-Led | ⚡ +2 art / +0 msgs |
| [Interoperable dispatch timing for transitionrun and media query events](#6312504658624512-interoperable-dispatch-timing-for-transitionrun-and-media-query-events) | Chrome 153 | `Enabled by default` | **High** | Chromium-Led | ⚡ +19 art / +1 msgs |
| [WebTransport Datagram writable streams and prioritization](#5183354944225280-webtransport-datagram-writable-streams-and-prioritization) | Chrome 155 | `In developer trial (Behind a flag)` | **High** | Chromium-Led | ✨ New |
| [WebGPU: \`buffer\_view\` feature](#5094091886034944-webgpu-buffer_view-feature) | Chrome 153 | `Enabled by default` | **High** | Chromium-Led | ⚡ +13 art / +0 msgs |
| [Joint Iteration](#6249068542164992-joint-iteration) | Chrome 153 | `Enabled by default` | **High** | Chromium-Led | ⚡ +8 art / +0 msgs |
| [WebTransport draining](#6427766428925952-webtransport-draining) | Chrome 153 | `In developer trial (Behind a flag)` | **High** | Partial Multi-Engine Interest | ⚡ +26 art / +0 msgs |
| [Window Shape API](#5075144470036480-window-shape-api) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | ⚡ +13 art / +0 msgs |
| [XML parsing in Rust for non-XSLT scenarios](#5309598397497344-xml-parsing-in-rust-for-non-xslt-scenarios) | Chrome 153 | `Enabled by default` | **High** | Chromium-Led | ⚡ +26 art / +1 msgs |
| [CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](#6516055192240128-csspseudoelement-support-for-backdrop-scroll-marker-and-view-transitions) | Chrome 152 | `Enabled by default` | **High** | Chromium-Led | ⚡ +6 art / +3 msgs |
| [Media element pseudo-classes](#5068277495758848-media-element-pseudo-classes) | Chrome 156 | `Enabled by default` | **High** | Chromium-Led | ⚡ +2 art / +0 msgs |
| [Spell check custom dictionary API](#6185007701557248-spell-check-custom-dictionary-api) | Chrome 153 | `In developer trial (Behind a flag)` | **High** | Chromium-Led | ⚡ +4 art / +0 msgs |
| [MediaCapabilities.decodingInfo.encryptionScheme](#4644898109259776-mediacapabilitiesdecodinginfoencryptionscheme) | Chrome 152 | `Enabled by default` | **High** | Chromium-Led | ⚡ +15 art / +0 msgs |
| [Deprecate and remove: Attribution Reporting API](#6320639375966208-deprecate-and-remove-attribution-reporting-api) | Chrome 153 | `Deprecated` | **High** | Chromium-Led | ⚡ +1 art / +0 msgs |
| [Iterator Includes](#5205192866922496-iterator-includes) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | ⚡ +1 art / +0 msgs |
| [Optional descriptors for registered custom properties](#5168674259468288-optional-descriptors-for-registered-custom-properties) | Chrome 156 | `Enabled by default` | **High** | Multi-Engine Consensus | ⚡ +17 art / +0 msgs |
| [CSS pseudo-class for navigation source element](#6327898878377984-css-pseudo-class-for-navigation-source-element) | Chrome 156 | `Enabled by default` | **High** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [PredefinedColorSpace srgb-linear and display-p3-linear](#5122501071994880-predefinedcolorspace-srgb-linear-and-display-p3-linear) | Chrome 155 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +14 art / +0 msgs |
| [Secure Payment Confirmation: Locale Validation](#5126146013396992-secure-payment-confirmation-locale-validation) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | ⚡ +4 art / +0 msgs |
| [Additional Windowing Controls](#5201832664629248-additional-windowing-controls) | Chrome 155 | `Enabled by default` | **High** | Chromium-Led | ⚡ +7 art / +0 msgs |
| [WebAudio: Configurable render quantum](#5078190552907776-webaudio-configurable-render-quantum) | Chrome 153 | `Enabled by default` | **High** | Chromium-Led | ⚡ +7 art / +2 msgs |
| [WebGPU: Subgroup Size Control](#5077657663438848-webgpu-subgroup-size-control) | Chrome 152 | `Enabled by default` | **High** | Multi-Engine Consensus | ⚡ +14 art / +0 msgs |
| [Compression dictionary transport Updates](#4895435813683200-compression-dictionary-transport-updates) | Chrome 156 | `Enabled by default` | **High** | Chromium-Led | ⚡ +5 art / +8 msgs |
| [Margin-trim](#5197863732772864-margin-trim) | Chrome 155 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +4 art / +7 msgs |
| [Deprecate and Remove: Shared Storage API](#5076349064708096-deprecate-and-remove-shared-storage-api) | Chrome 153 | `Deprecated` | **High** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [Host and screenshot restrictions for chrome.debugger API](#5072259281715200-host-and-screenshot-restrictions-for-chromedebugger-api) | Chrome 155 | `Enabled by default` | **High** | Chromium-Led | ⚡ +14 art / +1 msgs |
| [Ask-before-HTTP warning on by default](#5143933628841984-ask-before-http-warning-on-by-default) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | ⚡ +7 art / +0 msgs |
| [WebRTC Diagnostic Logging API](#5091582546149376-webrtc-diagnostic-logging-api) | Chrome 156 | `Enabled by default` | **High** | Chromium-Led | ⚡ +8 art / +0 msgs |
| [WebTransport headers and responseHeaders](#5194104408506368-webtransport-headers-and-responseheaders) | Chrome 153 | `In developer trial (Behind a flag)` | **High** | Chromium-Led | ⚡ +10 art / +0 msgs |
| [Immersive Audio Model and Formats (IAMF) decoding support](#5113656292540416-immersive-audio-model-and-formats-iamf-decoding-support) | Chrome 152 | `In developer trial (Behind a flag)` | **High** | Chromium-Led | ⚡ +3 art / +2 msgs |
| [Capability elements: &lt;camera&gt; and &lt;microphone&gt;](#5153829504024576-capability-elements-camera-and-microphone) | Chrome 153 | `Enabled by default` | **High** | Chromium-Led | ⚡ +6 art / +0 msgs |
| [WebTransport reliability attributes](#5094058497277952-webtransport-reliability-attributes) | Chrome 155 | `In developer trial (Behind a flag)` | **High** | Chromium-Led | ✨ New |
| [Deprecate and Remove Protected Audience](#6552486106234880-deprecate-and-remove-protected-audience) | Chrome 153 | `Deprecated` | **High** | Chromium-Led | ⚡ +3 art / +1 msgs |
| [Support Long Animation Frames API in Web Workers](#5387465121726464-support-long-animation-frames-api-in-web-workers) | Chrome 153 | `In developer trial (Behind a flag)` | **High** | Chromium-Led | ⚡ +1 art / +4 msgs |
| [Sub apps for IWAs](#6260680824061952-sub-apps-for-iwas) | Chrome 152 | `Enabled by default` | **High** | Chromium-Led | ⚡ +8 art / +0 msgs |
| [Private Verification Tokens](#6210457816924160-private-verification-tokens) | Chrome 154 | `Origin trial` | **High** | Chromium-Led | ⚡ +8 art / +1 msgs |
| [WebGPU: WGSL Fragment Depth](#5663304168112128-webgpu-wgsl-fragment-depth) | Chrome 156 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +2 art / +0 msgs |
| [window-drag](#5201338641285120-window-drag) | Chrome 152 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +4 art / +0 msgs |
| [Speculation Rules - moderate viewport heuristics controls](#6240467143491584-speculation-rules-moderate-viewport-heuristics-controls) | Chrome 152 | `Origin trial` | **High** | Chromium-Led | — |
| [Expose CSSStyleValue hierarchy to Worker contexts](#5114591051907072-expose-cssstylevalue-hierarchy-to-worker-contexts) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | ⚡ +7 art / +0 msgs |
| [FontFace width attribute and font-width descriptor](#5145402365050880-fontface-width-attribute-and-font-width-descriptor) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | ⚡ +1 art / +0 msgs |
| [Import Text (Text Modules)](#5191512456560640-import-text-text-modules) | Chrome 155 | `Enabled by default` | **High** | Chromium-Led | ⚡ +6 art / +0 msgs |
| [Deprecate and remove: Private Aggregation API](#4683382919397376-deprecate-and-remove-private-aggregation-api) | Chrome 152 | `Deprecated` | **High** | Chromium-Led | ⚡ +2 art / +0 msgs |
| [Gamepad button type attribute](#5075054393163776-gamepad-button-type-attribute) | Chrome 152 | `In developer trial (Behind a flag)` | **High** | Chromium-Led | — |
| [Remove non-standard navigations targeted at \_current](#5121089536262144-remove-non-standard-navigations-targeted-at-_current) | Chrome 153 | `Deprecated` | **Moderate** | Chromium-Led | ⚡ +0 art / +8 msgs |
| [WebTransport Datagram readable stream type](#5148774971342848-webtransport-datagram-readable-stream-type) | Chrome 155 | `In developer trial (Behind a flag)` | **Moderate** | Chromium-Led | ✨ New |
| [js-profiling in dedicated workers](#5159559872249856-js-profiling-in-dedicated-workers) | Chrome 154 | `In developer trial (Behind a flag)` | **Moderate** | Chromium-Led | — |
| [Avoid caching module failures](#5214647044145152-avoid-caching-module-failures) | Chrome 156 | `Enabled by default` | **Moderate** | Chromium-Led | — |
| [User Agent Image Replacement API](#5076374013476864-user-agent-image-replacement-api) | Chrome 152 | `Origin trial` | **Moderate** | Chromium-Led | — |
| [WebGPU: atomic-vec2u-min-max](#4882016087703552-webgpu-atomic-vec2u-min-max) | Chrome 155 | `In developer trial (Behind a flag)` | **Moderate** | Partial Multi-Engine Interest | — |
| [Suspicious site warnings](#5427561449521152-suspicious-site-warnings) | Chrome 152 | `Enabled by default` | **Emerging** | Chromium-Led | — |

---

## 🔍 Feature Ecosystem Deep Dives

<a id="4709671889534976-deprecate-and-remove-xslt"></a>
### [Deprecate and remove XSLT](https://chromestatus.com/feature/4709671889534976)

- **Milestone:** Chrome 152 (Origin trial)
- **ChromeStatus:** [chromestatus.com/feature/4709671889534976](https://chromestatus.com/feature/4709671889534976) · [chromestatuslite.com/feature/4709671889534976](https://chromestatuslite.com/feature/4709671889534976)
- **Chromium Bug:** [https://crbug.com/435623334](https://crbug.com/435623334)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Positive` · Safari: `Positive`

#### 📝 Overview

\[XSLT v1.0\](https://www.w3.org/TR/xslt-10/), which all browsers adhere to, was standardized in 1999. In the meantime, XSLT has evolved to v2.0 and v3.0, adding features, and growing apart from the old version frozen into browsers. This lack of advancement, coupled with the rise of JavaScript libraries and frameworks that offer more flexible and powerful DOM manipulation, has led to a significant decline in the use of client-side XSLT. Its role within the web browser has been largely superseded by JavaScript-based technologies, such as JSON and React.  Chromium uses the \*\*libxslt\*\* library to process these transformations, and \[libxslt was unmaintained\](https://discourse.gnome.org/t/stepping-down-as-libxslt-maintainer/27615) for ~6 months of 2025. Libxslt is a complex, aging C codebase of the type notoriously susceptible to memory safety vulnerabilities like buffer overflows, which can lead to arbitrary code execution. Because client-side XSLT is now a niche, rarely-used feature, these libraries receive far less maintenance and security scrutiny than core JavaScript engines, yet they represent a direct, potent attack surface for processing untrusted web content. Indeed, XSLT is the source of several recent high-profile security exploits that continue to put browser users at risk.   For these reasons, Chromium (along with both other browser engines, Gecko and WebKit) plans to deprecate and remove XSLT from the web platform. The modern web is powered by three major browser engines: \[Blink\](https://www.chromium.org/blink/) (Chromium), \[Gecko\](https://firefox-source-docs.mozilla.org/overview/gecko.html) (Firefox), and \[WebKit\](https://webkit.org/) (Safari). They interpret code to render pages.   For more details, see this \[Chrome for Developers article\](https://developer.chrome.com/docs/web-platform/deprecating-xslt).  From Chrome 158, XSLT will stop functioning on Stable releases.

> **Motivation:** Security risks for all users outweigh the very small usage of this feature on the open web.  Usage of XSLTProcessor (https://chromestatus.com/metrics/feature/timeline/popularity/79) is fairly volatile, registering somewhere between 0.01% and 0.1% of page loads, averaging around 0.05% over time. These numbers are above the typical 0.001% deprecation...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 863)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Should we remove XSLT from the web platform" github whatwg html"`, `""Intent to Deprecate and Remove" XSLT blink-dev"`, `""deprecating-xslt" site:developer.chrome.com"`
- **Analysis:** Browser engines are coordinating the removal of client-side XSLT v1.0, citing severe memory safety risks in legacy C libraries like libxslt and diminishing open-web usage. While browser vendors view the attack surface reduction as imperative, the deprecation breaks standard web compatibility thresholds (~0.05% page loads for XSLTProcessor), targeting full removal in Chrome Stable by version 158. Ecosystem consensus among vendors is strong, but the transition has triggered substantial debate regarding backwards compatibility for legacy XML and styled feeds.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit existing applications immediately for client-side \`XSLTProcessor\` calls or \`&lt;?xml-stylesheet type="text/xsl"?&gt;\` processing instructions. Migrate transformation pipelines either upstream to server-side build steps or to modern client-side JavaScript/Wasm runtimes like SaxonJS, and enroll critical enterprise origins in deprecation trials where extended runway is needed.
- In active Origin Trial in Chrome 152. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @annevk: "WebKit is cautiously supportive. We'd probably wait for one implementation to fully remove support, though if there's a known list of origins that par..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Intent to Deprecate and Remove XSLT" (87 points, 149 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **17 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Intent to Deprecate and Remove XSLT](https://news.ycombinator.com/item?id=45779261) — *Hacker News (87 pts, 149 comments)*
- 💬 [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=45734849) — *Hacker News (3 pts, 1 comments)*
- 💬 [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=6102357) — *Hacker News (2 pts, 0 comments)*
- 🐦 [Chrome 153 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2093424350036660456) — *Twitter / X (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Should we remove XSLT from the web platform?](https://github.com/whatwg/html/issues/11523) [open] `removal/deprecation`, `stage: 3`
  > *Latest discussion from @annevk: "WebKit is cautiously supportive. We'd probably wait for one implementation to fully remove support, though if there's a known list of origins that par..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1990759: Investigate deprecation and removal of XSLT (deprecate and remove XSLT)](https://bugzilla.mozilla.org/show_bug.cgi?id=1990759) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA/m/yNs4EsD5AQAJ) *(groups.google.com · 2025-11-01T04:31:52Z)*
  > Intent to Deprecate and Remove: Deprecate and remove XSLT Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Depr...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGGBZfr9A3hBAdSlPF0Zf83Cy4IB1VcmWUxA6fn1NqLTW2m1zA2uNls0FityQN83NNsM1uaq6_DR6HXQwBBEPKGV9ha1BZeFDSjGcPh_o8njgCiAvw-2k_1kc9g1DbakNZfOYiNRiYQEWiKnLUmfawAiwY-0yg=) *(vertexaisearch.cloud.google.com)*
  > Se quitó XSLT para tener un navegador más seguro | Web Platform | Chrome for Developers Ir al contenido principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasi...
- [web-standards.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEsyCwnTfC1O7Jc1YgCb16eYN9c_mAEAVwcVAdpVYaxzM_0DBiYBdtcliSzFfcwqa9_oPP9PVbGsBZL2gLPlH09pmFA1knkLyGw0JMVHb804DAYbVqA87TO-z1ZMsgC5bwIBBNSSTW42VvVmynQCw==) *(vertexaisearch.cloud.google.com)*
  > Deprecating XSLT in browsers — Web Standards Web Standards Daily web platform news 326 414 311 Deprecating XSLT in browsers 2025-10-28 Mason Freed announced Chromium’s plan to fully remove support for XSLT, the XML trans...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF7p4cI_vaAdVPkquoUyEawQV0nzjrUycz98Ul1wtXtV27w_yt9mggeqxHB_KTr09YeZE5D6cXX-daE23DiMosy8N2uiAmrH74QUrtZLd7zjF2EbbZR7NdPVGzpkdcCkcoX) *(vertexaisearch.cloud.google.com)*
  > Should we remove XSLT from the web platform? · Issue #11523 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab o...
- [pcjs.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF3KZqjZBeq41WDH318JNN0EdEvPlgrroLQz7xTsvhb-V3xRE12RRGYbifUMfBxXgfzDuk_WK7TIr9RA86lXpXK3vpglNqCzFZbDizPsWtPYCS4u83XaEeKWqMo) *(vertexaisearch.cloud.google.com)*
  > Goodbye XSLT | PCjs Machines PCjs Machines Home of the original IBM PC emulator for browsers. About Blog Explorer Repository Tools PCjs Blog Goodbye XSLT This is my brief take on the story of a web standard (XSLT) that w...
- [simonwillison.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHn-tfQZJ4TjAZfu2e5F3rv3dzhlF8Ww5jBvVFIEbTV38UQ7gASHMnzvuPaZyTlE9MC35k2lqijC4aMtyrkgE2ENT6hzZirI1kFd8hlJz-6w9fe81opigg_sgoWptSxeQLQK5MIKTfOKfI=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature & Announcement  Chromium, in coordination with WebKit (Safari) and Gecko (Firefox), announced plans to **deprecate and remove native client-side XSLT support**—specifically the `<?xml-styleshee...

#### 🔗 Inbound Citations & Reverse Links

- [Chromium base browsers removing support for XSLT view \| InterSystems DC](https://community.intersystems.com/post/chromium-base-browsers-removing-support-xslt-view) *(community.intersystems.com · 2026-09-28T08:13:04)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > https://<strong>chromestatus.com/feature/4709671889534976</strong> · Product version: IRIS 2024.1 · Discussion (4)0 · Log in or sign up to continue · Brian Porterfield · Sep 30 · I am seeing this as well. I&#x27;m not su...

#### 📚 Platform Documentation & References

- [1990759 - Investigate deprecation and removal of XSLT (deprecate and remove XSLT)](https://bugzilla.mozilla.org/show_bug.cgi?id=1990759) *(bugzilla.mozilla.org)*
- [xslt · Issue #1310 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1310) *(github.com)*
- [GitHub - mfreed7/xslt\_polyfill: A polyfill for XSLTProcessor · GitHub](https://github.com/mfreed7/xslt_polyfill) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=deprecate) (27 test path(s) matching `deprecate`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 11 planned queries, 29 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 11 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (3 found, 3 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (6 found, 1 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (27 items)
- **Content Inspected:** Spec: ○ · Explainers: 0 · Standards Comments Read: 5

---

<a id="5124378896498688-use-scroll-snap-type-pair-to-snap-to-a-single-element"></a>
### [Use scroll-snap-type: pair to snap to a single element](https://chromestatus.com/feature/5124378896498688)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5124378896498688](https://chromestatus.com/feature/5124378896498688) · [chromestatuslite.com/feature/5124378896498688](https://chromestatuslite.com/feature/5124378896498688)
- **Specification:** [https://drafts.csswg.org/css-scroll-snap-1](https://drafts.csswg.org/css-scroll-snap-1)
- **Chromium Bug:** [https://crbug.com/542706103](https://crbug.com/542706103)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `Support`

#### 📝 Overview

https://github.com/w3c/csswg-drafts/issues/9519  Add a "pair" keyword to scroll-snap-type. If used, when the container scroll snaps to an element on one axis, it should snap to the same element on the other axis. In the existing spec, the "both" keyword allows the scroll container to select snap targets in X and Y axes independently and snap to different targets.

> **Motivation:** See explainer

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 620)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""github.com/w3c/csswg-drafts/issues/9519""`, `""scroll-snap-type" "pair" css"`, `""scroll-snap-type: pair" chromestatus OR webkit OR mozilla"`
- **Analysis:** The \`scroll-snap-type: pair\` keyword solves a longstanding limitation where \`scroll-snap-type: both\` snaps axes independently, allowing 2D scroll containers to lock onto the same single element across both X and Y axes. The feature is shipping enabled by default in Chrome 156 with official support from WebKit, while Mozilla's position remains open but receptive. Cross-engine consensus is strong at the CSSWG specification level, though widespread baseline support awaits implementation in Gecko and WebKit.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt \`pair\` as a progressive enhancement today by declaring \`scroll-snap-type: both mandatory;\` followed by \`scroll-snap-type: pair mandatory;\` (or guarded via \`@supports (scroll-snap-type: pair)\`), ensuring graceful fallback to standard dual-axis snapping on older browser engines.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."
- Standards Activity (Mozilla): Latest discussion from @theres-waldo: "&gt; I think this seems reasonable but I'd like \[@hiikezoe\](https://github.com/hiikezoe) / \[@theres-waldo\](https://github.com/theres-waldo) to take a loo..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **34 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/WebKit/standards-positions/issues/716) [closed] `position: support`, `topic: css`, `venue: W3C CSS WG`, `from: Google`
  > *Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."*
- **Mozilla:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/mozilla/standards-positions/issues/1448) [open] `venue: W3C`, `topic: CSS`
  > *Latest discussion from @theres-waldo: "> I think this seems reasonable but I'd like [@hiikezoe](https://github.com/hiikezoe) / [@theres-waldo](https://github.com/theres-waldo) to take a loo..."*

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHJjkId2_XzwIqnNhWGJMuwb__8XdWq3oqBb9iIUvMr5zq1004_HBOZeTl6lXOtNcEAcixTkwOKTO1xiA2xfJVRasv7VNPPurBa0nOFriUUEZ3SJNSvjvBBfk7k6HnAaf_MVSRptdcN) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE8qkQ6w8ZEDMmFsY4OW5qnJ4kgLGiYrJYckf2Wk1v9rk1p19lxPqZfNdpRveIm8spkTsghx34V2lSrnoztKcy5ftbELM7xB1NJpcVUlwQyv1AioHM_fb5i-HDnvDBJUtvRHWzfdcZCVL3Iu5lw9tMHYCogEXNnnMEHFO_kQ0kw3brFtrM5zTiUh7p4xQ==) *(vertexaisearch.cloud.google.com)*
  > scroll-snap-type CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties scroll-snap-type Theme OS default Light Dark English (US) Remember language Learn more Deutsch Eng...
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHTXt7BvFf9YMzhwX0XkXLNdL5F9Axfaas_Os9kgrs8KntkHeLefC6l_OzM1hsMkaJ8uXeeaXYF-KF1SJARMPagJcYbPpsQ47B6GpXqR0H2jeGHb68DRvR8CO7mOU9wLN9JFMUwpQ==) *(vertexaisearch.cloud.google.com)*
  > New to the web platform in September | Blog | web.dev Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFjzTkyswgMSMEYDhYDzMss_NarA2kjwfUERHH80aQxiBlXQayoLBw-Cqmw-uDNddqngVtEltA4Dy3q6yYSgm0aKwYtjqwXRpHYPwt9t-T4ob_9mezoP3t0brgakBVa7ZI=) *(vertexaisearch.cloud.google.com)*
  > Chrome 156 Release Notes - Chrome Platform Status Chrome 156 Release Notes Preview Scheduled Stable Release October 20, 2026 (Currently on Beta channel) Network / Connectivity Avoid caching module failures # Link copied!...
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHo11nHQcbvNF5V04y46-_IjCv5Y0vz60kMgrrwo4vOfRapDHLVcWliFQT4Hdkh0O1gIZsu6qgaXKQsfMyfIXH5E-OZ5PyoMJ5AipipN4NOJxf0VPMo_vWdbE6L3-KjrSN7aewlLf5if8vcYk2tkjJR0K5fjWXEjihQVeAlTWuAEVk8ZL0sIg==) *(vertexaisearch.cloud.google.com)*
  > Chromium Dash
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHbfn4GRc5JHHT2g7s-CvPBWzwIzsTsUI-rN67HGZhamjDiZmghNuyyO-XtYvy1ay7IIedKAQKITIhr6LWX2zWPmT2oujnDLk7hwwWN7DBSLQE6_sQpEUEEsn931u2eD4MwEZgty4nLmF1xj7gZ3FKgFYnYIbxSLli1O88izNhURr1NZIU=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status

#### 🔗 Inbound Citations & Reverse Links

- [Other Spec Review: Add keyword "pair" to scroll-snap-type for snapping to the same element in X and Y axes · Issue #1271 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1271) *(github.com · 2026-08-25T15:03:43)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > Status/issue trackers for implementations: Chromium comments: https://<strong>chromestatus.com/feature/5124378896498688</strong>
- [scroll-snap-pair · Issue #4461 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4461) *(github.com · 2026-10-01T21:55:02)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > Chrome status: https://<strong>chromestatus.com/feature/5124378896498688</strong>?gate=6676576856047616
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17535.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > &gt; *No information provided* &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://<strong>chromestatus.com/feature/5124378896498688</strong>?gate=6676576856047616 &gt; &gt; *Links to previous Intent dis...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > Explainer https://github.com/explainers-by-googlers/scroll-snap-type-pair Specification https://drafts.csswg.org/css-scroll-snap-1 Summary https://github.com/w3c/csswg-drafts/issues/9519 <strong>Add a &quot;pair&quot; ke...
- [\[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17244.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > Explainer https://github.com/explainers-by-googlers/scroll-snap-type-pair Specification No information provided Summary https://github.com/w3c/csswg-drafts/issues/9519 <strong>Add a &quot;pair&quot; keyword to scroll-sna...

#### 📚 Platform Documentation & References

- [Other Spec Review: Add keyword "pair" to scroll-snap-type for snapping to the same element in X and Y axes · Issue #1271 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1271) *(github.com)*
- [scroll-snap-pair · Issue #4461 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4461) *(github.com)*
- [csswg-drafts/css-scroll-snap-1/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-scroll-snap-1/Overview.bs) *(github.com)*
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/css-scroll-snap-1) *(w3.org)*
- [\[css-scroll-snap\] Allow control over snap smoothness for art-direction · Issue #5464 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/5464) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=css-scroll-snap) (214 test path(s) matching `css-scroll-snap`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 12 planned queries, 45 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 13 verified) · `Twitter / X API v2` *(HTTP 400)* · `Dev.to Community Blogs` (0 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (214 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 3

---

<a id="6225598451154944-local-network-access-restrictions-for-background-fetch"></a>
### [Local Network Access restrictions for Background Fetch](https://chromestatus.com/feature/6225598451154944)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6225598451154944](https://chromestatus.com/feature/6225598451154944) · [chromestatuslite.com/feature/6225598451154944](https://chromestatuslite.com/feature/6225598451154944)
- **Specification:** [https://wicg.github.io/background-fetch](https://wicg.github.io/background-fetch)
- **Chromium Bug:** [https://crbug.com/455486148](https://crbug.com/455486148)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `No signal`

#### 📝 Overview

Background Fetch requests now require that the service worker's origin has the necessary Local Network Access (LNA) permission to send requests to local or loopback servers.  This aligns Chromium's implementation with the intent of the Background Fetch spec, which states that such requests go through the Fetch spec and have the same security policies applied to them including, in this case, LNA checks. This prevents sites from bypassing LNA checks by using \[Background Fetch spec\](https://wicg.github.io/background-fetch/) instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).  For enterprises, you can use existing LNA enterprise policies in the same way you previously would have for regular Fetch API requests from service workers: - \[LocalNetworkAccessRestrictionsTemporaryOptOut\](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut) - \[LocalNetworkAccessAllowedForUrls\](https://chromeenterprise.google/policies/#LocalNetworkAccessAllowedForUrls) - \[LoopbackNetworkAllowedForUrls\](https://chromeenterprise.google/policies/#LoopbackNetworkAllowedForUrls) - \[LocalNetworkAccessPermissionsPolicyDefaultEnabled\](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled) - \[LocalNetworkAccessIpAddressSpaceOverrides\](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides)).

> **Motivation:** This fixes a security issue where Background Fetch unintentionally bypasses security policies such as Local Network Access checks.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 610)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Local Network Access" Background Fetch site:chromestatus.com"`, `""Local Network Access" "Background Fetch" chromestatus"`, `""Background Fetch" "Local Network Access" WebKit Mozilla"`
- **Analysis:** Shipped enabled by default in Chrome 154, this restriction closes a security loophole by requiring service workers using Background Fetch to obtain Local Network Access (LNA) permissions before contacting local or loopback servers. The change aligns Chromium's implementation with the Fetch and Background Fetch specifications, following Chromium's decision to harden the API after an earlier deprecation attempt failed to reach consensus. Because Background Fetch itself has not been implemented outside Chromium, this policy tightening remains exclusive to the Blink ecosystem.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit service workers utilizing Background Fetch to ensure any legitimate requests to private or loopback IP ranges request proper LNA permissions beforehand. Enterprise environments managing internal network endpoints should configure policies such as \`LocalNetworkAccessAllowedForUrls\` or \`LoopbackNetworkAllowedForUrls\` to avoid service worker network breakages.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: \[react-native-fetch-api\](https://www.npmjs.com/package/react-native-fetch-api) (v3.0.0) for progressive enhancement.
- Verified community discussion on Twitter / X: "@ZunnuMetaX @vangrid\_io That local access angle is powerful. Vangrid turns something simple like being near the right pl" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **2 new community discussions** found
- 📰 **38 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [@ZunnuMetaX @vangrid\_io That local access angle is powerful. Vangrid turns something simple like being near the right pl](https://twitter.com/aquilaneratr/status/2107044495997247998) — *Twitter / X by @aquilaneratr (0 likes/RTs, 0 replies)*
- 🐦 [@BSCNews @VitalikButerin Vitalik’s experiment is a smart move balancing AI utility and privacy! Using local models first](https://twitter.com/AlphaFeedX/status/2107042270528549166) — *Twitter / X by @AlphaFeedX (0 likes/RTs, 0 replies)*
- 🐦 [Access Networks (@AccessNetworks) on X](https://twitter.com/accessnetworks?lang=en) — *Twitter / X (0 likes/RTs, 0 replies)*

#### 📦 Polyfills & NPM Ecosystem

- [is-network-error](https://www.npmjs.com/package/is-network-error) `v1.3.2` — Check if a value is a Fetch network error
- [react-native-fetch-api](https://www.npmjs.com/package/react-native-fetch-api) `v3.0.0` *(Verified Polyfill)* — A fetch API polyfill for React Native with text streaming support.

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFResdByOXe7KQLDE0npgiTopbVkUZ8pUvjSyjg-4vWVAYwyAMgRpSWmxm9ZtzQTeAYlqhebko_AOYsRH1afHacStOCXytlvcAlXfE15wI-SZ99OvAcRKFchlxY8xmL84kwi_gzTCM=) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة ف...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFEHVppHxP_nVHpVGsdWmOTWItJoMiSF0tYVnG-vRRNakDWXlfMxyQhVRK0dylJEt1Yrs30A5W3e2wNb6eS-PFED89_wxlgzTO-9Q4n_Ee9sHeZikb5nRXOLIyvmufnMoWPZWU=) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 | Release notes | Chrome for Developers Chuyển ngay đến nội dung chính / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עב...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHWihuV09kptJjtrj7XPwTXQeFXCSms0q2j3vnRfB3tUu6TXlZVDE_TKmQa774dybx0zaBILvYj_iKgy56FsPfNjVJ6iwYPNKiErrTBw_sWJfENdhzNyDMBMrt5tU0zZyDuZJVOtS36r5d_xr0=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Local Network Access (LNA) restrictions for Background Fetch"** feature plugs a security gap where web applications could potentially bypass Local Network Access restrictions by delegat...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEKPC7_9n9zaiXEr4KdcLzTSHcbrOlA82sUB2lHq9GUNvo3Yx3CnYFsE6f4Y0LHqQUbVEsayssIjhpFIqYjTNdos0mjKQv9BwHjzmlCwRQfgk2djfn38j8DKXAhfNyd-YEUViH6hWa-cDyK_ejlYNDMaxBYch8diVjxuMRBtRljvS6_05huaqPzwYBY0YbuGvVLBrDaRCvUG7GIbhhx4wAUIs14jg0DI6Rdei0VOA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Local Network Access (LNA) restrictions for Background Fetch"** feature plugs a security gap where web applications could potentially bypass Local Network Access restrictions by delegat...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFqWzEWBlYba_sK8hZbWtJ_GQp1yqmueryIfCiXRODLvCTX2KW42PWi3pUnDlWZ2JdyaEFwzVVKzGWnD4XHNywpEhnAEbMVZo9eXTxPOB_1kZVNM-dvEFikWEG6uDtSKTAlTmfBn4dq) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Local Network Access (LNA) restrictions for Background Fetch"** feature plugs a security gap where web applications could potentially bypass Local Network Access restrictions by delegat...
- [uillinois.edu](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEZNs19cddb8CHTa905UbljFoRNG7l0V6G_-hEzJR5olts2KXsBTPtiUC3g1Hy8vOYeyWK5AqczkPHVBoOcvRxeS7W8finQCtpkWmOZrmsnWGJaHkBXsKvqxkAsn4BIYBlU053I_uUC8AfelDPv85pl-MBpKSQ7prVwPkRmj-2Ia8g7O94cMatA60fCGdFLVcHx_yB6ERL5qlOceiXCliM9Z8ud-1zhPxzPpWLL9A==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Local Network Access (LNA) restrictions for Background Fetch"** feature plugs a security gap where web applications could potentially bypass Local Network Access restrictions by delegat...

#### 🔗 Inbound Citations & Reverse Links

- [periodic-background-sync/index.bs at main · WICG/periodic-background-sync](https://github.com/WICG/periodic-background-sync/blob/main/index.bs) *(github.com · 2019-09-30T00:00:00)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > spec: background-fetch; urlPrefix: https://<strong>wicg.github.io/background-fetch</strong>/   type:interface; text: BackgroundFetchManager ·   type:dfn; text:background fetch · &lt;/pre&gt;  · &lt;pre class=link-default...
- [Background Fetch · Issue #107 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/107) *(github.com · 2018-10-26T10:05:44)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Specification Title: Background Fetch · Specification or proposal URL: https://<strong>wicg.github.io/background-fetch</strong>/ Caniuse.com URL (optional): Bugzilla URL (optional): Mozillians who can provide input (opti...
- [content/files/en-us/web/api/background\_fetch\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/background_fetch_api/index.md?plain=1) *(github.com)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > slug: Web/API/Background_Fetch_API · page-type: web-api-overview · status:   - experimental · browser-compat:   - api.BackgroundFetchManager ·   - api.BackgroundFetchRegistration ·   - api.BackgroundFetchRecord · spec-ur...
- [Background Fetch API throws for extension protocol · Issue #12370 · mdn/content](https://github.com/mdn/content/issues/12370) *(github.com · 2022-01-23T16:00:21)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Neither the README.md https://github.com/WICG/background-fetch#readme, specification https://<strong>wicg.github.io/background-fetch</strong>/, nor MDN documentation explains that background fetch will throw for browser ...

#### 📚 Platform Documentation & References

- [periodic-background-sync/index.bs at main · WICG/periodic-background-sync](https://github.com/WICG/periodic-background-sync/blob/main/index.bs) *(github.com)*
- [Background Fetch · Issue #107 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/107) *(github.com)*
- [content/files/en-us/web/api/background\_fetch\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/background_fetch_api/index.md?plain=1) *(github.com)*
- [Background Fetch API throws for extension protocol · Issue #12370 · mdn/content](https://github.com/mdn/content/issues/12370) *(github.com)*
- [webcomponents/proposals/css-modules-v1-explainer.md at gh-pages · WICG/webcomponents](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/css-modules-v1-explainer.md) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=background-fetch) (17 test path(s) matching `background-fetch`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 11 planned queries, 46 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 11 verified) · `Twitter / X API v2` *(found 9 tweet(s))* · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 0 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 2 verified) · `Web Platform Tests (wpt.fyi)` (17 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5324559251275776-css-random-function"></a>
### [CSS random() function](https://chromestatus.com/feature/5324559251275776)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5324559251275776](https://chromestatus.com/feature/5324559251275776) · [chromestatuslite.com/feature/5324559251275776](https://chromestatuslite.com/feature/5324559251275776)
- **Specification:** [https://www.w3.org/TR/css-values-5/#random](https://www.w3.org/TR/css-values-5/#random)
- **Chromium Bug:** [https://issues.chromium.org/issues/413385732](https://issues.chromium.org/issues/413385732)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Positive` · Safari: `Shipped/Shipping`

#### 📝 Overview

The random() function brings generative randomness to CSS, allowing web authors to generate a random numeric value within a specified range.  For example, web authors can use random() to scatter elements randomly within their container: .dot {   /\* Position each dot randomly \*/   position: absolute;   top: random(0%, 100%);   left: random(0%, 100%); }  This feature also includes caching controls. By default, each random() function resolves to a new, distinct value. Web authors can override this default by passing a &lt;random-key&gt; value as the function's first argument to control how random values are shared across properties and elements.

> **Motivation:** The CSS random() function provides a native way to generate random values directly in CSS without relying on JavaScript, reducing code complexity while making it easier for developers to create varied and dynamic designs.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 575)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"Rolling the Dice with CSS random WebKit"`, `"CSS random function browser support WebKit Chrome Firefox"`
- **Analysis:** The CSS \`random()\` function introduces native, declarative randomness and unit-aware interval generation to the stylesheet layer without requiring JavaScript. Having initially debuted in WebKit/Safari, Chromium is enabling the feature by default in Chrome 156, while Mozilla maintains an active positive standards position. Although not yet in Baseline due to pending multi-engine ubiquity, broad cross-vendor consensus indicates it is on track to become a foundational capability for generative UI design.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt \`random()\` progressively using \`@supports (width: random(1px, 2px))\` for non-critical visual flair like decorative starfields, scattered rotations, and staggered transition delays. For mission-critical responsive layouts or older browsers, maintain deterministic CSS fallback values or lightweight build plugins rather than blocking rendering on full engine parity.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Yeah the thing the WG settled on was a lot saner than the initial proposal :)..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "WebKit on X: "Learn about the new CSS random() function, now available to experiment with in Safari Technology Preview. There are lots of amazing ways to use random values in CSS. Learn more in "Rolling the Dice with CSS random()": https://t.co/JdFtXP3qTm" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **18 new articles/tutorials** published

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

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEP5ZrcmMLvnK0Ifc7ccnPEJAmHKZSFM1tYHFhlCuyiJm7F1jYAJIcDVhUa9oXigAffZOEIaCjia3q4S4pfkDppAJcJ436nAKjJsN4mRvQknONxUyVyNOhTpQ==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The native **`random()` function** (defined in the [W3C CSS Values and Units Module Level 5](https://www.w3.org/TR/css-values-5/) alongside `random-item()`) introduces generative randomness to CSS ...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGLYiimOCCxuYTGIaJ-VVfL3dASEN-1BpgXGNvMoj5WTpvSgWHrt4JDA8akmsNPScL2Ug3qjL2D65UlLnWNeuVBxxdxlLd80dNZbxDSBR6L7vJpb8vWtlJhlh_Ntg0bt6DiKznmSzfugw==) *(vertexaisearch.cloud.google.com)*
  > random() | CSS-Tricks Skip to main content CSS-Tricks Since 2007 CSS Almanac &rarr; Functions &rarr; R &rarr; random() random() Sunkanmi Fafowora on Oct 31, 2024 Experimental: Check browser support before using this in p...
- [alvaromontoro.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH2pvUtXGvoPeA9gREUzIq8AFsUAxMXc4u0iKywxzD6hEHW0LaKrtUqlWft0jszc1iH7CkgsFyink221j4R_RoKV-OHBVshJub2vQC_4vgM5EOUsrPme5Q9bNR01-j9eDHUG4N9vYl_49W5PLngRdxYwIlledMz) *(vertexaisearch.cloud.google.com)*
  > Native Random Values in CSS Skip to main content Alvaro Montoro Human Being Change to light mode Change to dark mode Native Random Values in CSS The CSS Working Group has published the Values and Units Module Level 5, wh...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGfHyXhoVmBXvx8aKBRU2VHwvF85jfR9UNr80Q08wbDMI4W1-eXRkdQaNlNn2MFqNBXVcjKcg7m-51-jZyJwaOENgq1CELyeZ086Rw000CTAgin98738YivOfhMausze8ljINmplfmd) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGsivdKWR6pzn9kZ2jVr7wkJCxH8-Nh0Z0BRiiASl1IC6l7OERe9kBru4-nQOcE8FxKATXdg68c1vviz0IQ14sctb739YPY-8Y5JUw1crIbngPaCYj30cV2DVjtUafY_DuaqY0Eklmrt2FmjenXUqhGcNGOORfsPlScSEI=) *(vertexaisearch.cloud.google.com)*
  > CSS-Funktion random() - CSS | MDN Zum Hauptinhalt springen Zur Suche springen Seitenleiste umschalten Web CSS Reference Values random() Farbschema Systemeinstellung Hell Dunkel Deutsch Sprache merken Mehr erfahren Deutsc...
- [polypane.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHupX2Dc9y8cetFWl1-6m-oQJQCGpmHaITvMfMU_5DAXWeK1gKn8G_51jmGY647Wfk8qa5RzS1E7VbX7uPnWEN7Qw-YkOZvIX6Ldf221ZqxR45MKbccmnJAzzsm3nUD7ldYWQl579MDtq5fxIXAPxtV8joPciyXqOXQJxgz3DeFsbrat_4=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The native **`random()` function** (defined in the [W3C CSS Values and Units Module Level 5](https://www.w3.org/TR/css-values-5/) alongside `random-item()`) introduces generative randomness to CSS ...

#### 🔗 Inbound Citations & Reverse Links

- [Updates for Chrome Canary, 18 Sept. 2026 by Elchi3 · Pull Request #30576 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30576) *(github.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > CSS random(), https://<strong>chromestatus.com/feature/5324559251275776</strong> · None. Updates for Chrome Canary, 18 Sept. 2026 · 2734004 · github-actions Bot added data:css · Compatibility data for CSS features. https...
- [CSS random() function · Issue #715 · mdn/mdn](https://github.com/mdn/mdn/issues/715) *(github.com · 2025-08-24T12:16:41)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > Spec: https://drafts.csswg.org/css-values-5/#random (don&#x27;t use the published draft for documenting, it&#x27;s out of date) · https://<strong>webkit.org/blog/17285/rolling-the-dice-with-css-random</strong>/ https://c...
- [CSS random() · Issue #1354 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1354) *(github.com · 2026-09-03T21:08:06)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > Safari: already in stable 26.2 https://webkit.org/blog/17640/webkit-features-for-safari-26-2/#css-calc-functions https://<strong>webkit.org/blog/17285/rolling-the-dice-with-css-random</strong>/ already moving on to rando...
- [\[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17310.html) *(mail-archive.com)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > *Initial public proposal* *No information provided* *Search tags* random &lt;https://chromestatus.com/features#tags:random&gt; *TAG review* *No information provided* *TAG review status* Pending *Goals for experimentation...
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17350.html) *(mail-archive.com)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > LGTM2 On Wed, Sep 2, 2026 at 5:12 ... https://www.w3.org/TR/css-values-5/#random *Summary* <strong>The random() function brings generative randomness to CSS, allowing web authors to generate a random numeric value within...

#### 📚 Platform Documentation & References

- [Updates for Chrome Canary, 18 Sept. 2026 by Elchi3 · Pull Request #30576 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30576) *(github.com)*
- [CSS random() function · Issue #715 · mdn/mdn](https://github.com/mdn/mdn/issues/715) *(github.com)*
- [CSS random() · Issue #1354 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1354) *(github.com)*
- [random() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/random) *(developer.mozilla.org)*
- [randID---JavaScript-random-Key-generator/index.html at master · Frontend-io/randID---JavaScript-random-Key-generator](https://github.com/Frontend-io/randID---JavaScript-random-Key-generator/blob/master/index.html) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=css-values) (518 test path(s) matching `css-values`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (63 found across 13 planned queries, 40 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 14 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (7 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (4 found, 2 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (8 found, 2 verified) · `Web Platform Tests (wpt.fyi)` (518 items)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 5

---

<a id="5189864286978048-cpu-performance-api"></a>
### [CPU Performance API](https://chromestatus.com/feature/5189864286978048)

- **Milestone:** Chrome 152 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5189864286978048](https://chromestatus.com/feature/5189864286978048) · [chromestatuslite.com/feature/5189864286978048](https://chromestatuslite.com/feature/5189864286978048)
- **Specification:** [https://wicg.github.io/cpu-performance](https://wicg.github.io/cpu-performance)
- **Chromium Bug:** [https://issues.chromium.org/449760252](https://issues.chromium.org/449760252)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `Oppose`

#### 📝 Overview

Starting in Chrome 152, Chrome introduces the CPU Performance API, which allows web applications to determine the CPU performance of a user's device. This API targets web applications that will use this information to provide an improved user experience, possibly in combination with the Compute Pressure API, which provides information about the user device’s CPU pressure or utilization and allows applications to react to changes in CPU pressure.  Users can override the reported performance using Chrome browser \*\*Settings &gt; Performance &gt; Speed &gt; Override CPU performance tier\*\*. Administrators can also control this behavior using the \[CpuPerformanceTierOverride\](https://chromeenterprise.google/policies/#CpuPerformanceTierOverride) policy (which takes precedence over the user setting).  For more details, see \[CPU Performance API Explainer\](https://github.com/WICG/cpu-performance).

> **Motivation:** At present, some video conferencing applications support advanced functionality by relying on internal/private browser extensions or APIs to classify devices into performance categories. Our proposal allows these applications to support existing functionality without depending on such non-standard features.  Applications whose functionality depends...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 548)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** CPU Performance API is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Contested / Concerns Raised standards alignment and mixed / skeptical developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "@lukewarlow, the API would potentially go to the Web Performance WG after incubation, so I think that's fine. It would be premature for it to go to We..."
- Standards Activity (Mozilla): Latest discussion from @bvandersloot-mozilla: "The answers w.r.t. ads sounds like a reasonable motivation. I might not have personally mentioned ads at all as a special category, but I can see why ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Show HN: AWS EC2 Pricing API – live spot pricing across regions" (2 points, 2 comments).

#### ⚡ What Happened This Week

- 💬 **5 new community discussions** found
- 📰 **19 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Show HN: AWS EC2 Pricing API – live spot pricing across regions](https://news.ycombinator.com/item?id=43571983) — *Hacker News (2 pts, 2 comments)*
- 💬 [Ask HN: Do we still need native apps?](https://news.ycombinator.com/item?id=16833224) — *Hacker News (39 pts, 44 comments)*
- 💬 [Show HN: TrustGraph – Do More with AI with Less (Open Source AI Infrastructure)](https://news.ycombinator.com/item?id=41765150) — *Hacker News (22 pts, 5 comments)*
- 💬 [Show HN: Cloud Benchmarker: See how fast your cloud instances are for real!](https://news.ycombinator.com/item?id=37688544) — *Hacker News (3 pts, 1 comments)*
- 🐦 [PowerX Technology (@PowerXTechnolo1) on X](https://twitter.com/powerxtechnolo1?lang=en) — *Twitter / X (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [CPU Performance API](https://github.com/WebKit/standards-positions/issues/622) [closed] `position: oppose`, `concerns: duplication`, `concerns: compatibility`, `concerns: performance`, `concerns: privacy`, `venue: WICG`, `concerns: integration`, `concerns: use cases`, `concerns: portability`, `concerns: API design`, `concerns: power`, `from: Google`, `concerns: annoyance`, `concerns: device independence`
  > *Latest discussion from @marcoscaceres: "@lukewarlow, the API would potentially go to the Web Performance WG after incubation, so I think that's fine. It would be premature for it to go to We..."*
- **Mozilla:** [CPU Performance API](https://github.com/mozilla/standards-positions/issues/1364) [open] `concerns: interoperability`, `concerns: privacy`, `concerns: API design`, `topic: API`, `team: Privacy`
  > *Latest discussion from @bvandersloot-mozilla: "The answers w.r.t. ads sounds like a reasonable motivation. I might not have personally mentioned ads at all as a special category, but I can see why ..."*
- **W3C TAG:** [Incubation: CPU Performance API](https://github.com/w3ctag/design-reviews/issues/1198) [open] `Review type: CG early review`, `Venue: WICG`, `Topic: privacy`, `Topic: performance`
  > *Latest discussion from @marcoscaceres: "Sure (Gemini 3)... ran it a few times, gets the same result:  <details> # CPU Performance API - Critical Review  ### Test 1: Use-case coverage by exis..."*

#### 📰 Ecosystem Blogs & Articles

- [Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/cpuperformancetieroverride) *(learn.microsoft.com · 2026-07-14T00:00:00)*
  > Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advan...
- [\[blink-dev\] Intent to Extend Experiment: CPU Performance API](http://www.mail-archive.com/blink-dev@chromium.org/msg17465.html) *(mail-archive.com)*
  > [blink-dev] Intent to Extend Experiment: CPU Performance API Skip to site navigation (Press enter) [blink-dev] Intent to Extend Experiment: CPU Performance API Chromestatus Tue, 15 Sep 2026 14:34:58 -0700 Contact emails ...
- [CpuPerformanceTierOverride: Override for the CPU performance tier \| Chrome Enterprise](https://chromeenterprise.google/policies/cpu-performance-tier-override) *(chromeenterprise.google)*
  > CpuPerformanceTierOverride: Override for the CPU performance tier | Chrome Enterprise chrome enterprise Jump to Content chrome enterprise Get in touch Download Chrome Get advanced security protections with Chrome Enterpr...
- [Override for the CPU performance tier - ADMX Viewer](https://gpedit.tplant.com.au/en-us/policy/chrome/CpuPerformanceTierOverride) *(gpedit.tplant.com.au)*
  > Override for the CPU performance tier - ADMX Viewer ADMX Viewer All Computer User Google.Policies.Chrome &bull; Both Override for the CPU performance tier Download ADMX Setting this policy allows enterprises to override ...
- [The CPU Performance API: Adaptive Loading Without Running a Benchmark \| Trade Assistance LLC](https://trade-assistance.com/blog/cpu-performance-api-adaptive-loading-chrome-152) *(trade-assistance.com · 2026-07-27T00:00:00)*
  > Chrome is about to add one. The CPU Performance API introduces navigator.cpuPerformance, a read-only property that returns a small integer describing the device&#x27;s hardware class.
- [CPU Performance API](https://chromestatus.com/feature/5189864286978048?gate=5130174173675520) *(chromestatus.com · 2026-05-26T00:00:00)*
  > We cannot provide a description for this page right now

#### 🔗 Inbound Citations & Reverse Links

- [Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/cpuperformancetieroverride) *(learn.microsoft.com · 2026-07-14T00:00:00)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advan...
- [\[blink-dev\] Intent to Extend Experiment: CPU Performance API](http://www.mail-archive.com/blink-dev@chromium.org/msg17465.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > [blink-dev] Intent to Extend Experiment: CPU Performance API Skip to site navigation (Press enter) [blink-dev] Intent to Extend Experiment: CPU Performance API Chromestatus Tue, 15 Sep 2026 14:34:58 -0700 Contact emails ...
- [CpuPerformanceTierOverride: Override for the CPU performance tier \| Chrome Enterprise](https://chromeenterprise.google/policies/cpu-performance-tier-override) *(chromeenterprise.google)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > CpuPerformanceTierOverride: Override for the CPU performance tier | Chrome Enterprise chrome enterprise Jump to Content chrome enterprise Get in touch Download Chrome Get advanced security protections with Chrome Enterpr...
- [Override for the CPU performance tier - ADMX Viewer](https://gpedit.tplant.com.au/en-us/policy/chrome/CpuPerformanceTierOverride) *(gpedit.tplant.com.au)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > Override for the CPU performance tier - ADMX Viewer ADMX Viewer All Computer User Google.Policies.Chrome &bull; Both Override for the CPU performance tier Download ADMX Setting this policy allows enterprises to override ...
- [CPU Performance API · Issue #622 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/622) *(github.com · 2026-02-26T11:24:29)* *(Cites: `https://wicg.github.io/cpu-performance`)*
  > CPU Performance API · ... · No response · No response · [Proposal for] <strong>a simple web API which exposes some information about how powerful the user device is</strong>....

#### 📚 Platform Documentation & References

- [CPU Performance API · Issue #622 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/622) *(github.com)*
- [Add CPU Performance API · Issue #7536 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/7536) *(github.com)*
- [GitHub - explainers-by-googlers/cpu-performance: An API that exposes some information about how powerful the user device is.](https://github.com/explainers-by-googlers/cpu-performance) *(github.com)*
- [chrome · GitHub Topics](https://github.com/topics/chrome) *(github.com)*
- [GitHub - GoogleChrome/samples: A repo containing samples tied to new functionality in each release of Google Chrome. · GitHub](https://github.com/GoogleChrome/samples) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=cpu-performance) (1 test path(s) matching `cpu-performance`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (42 found across 8 planned queries, 26 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (7 found, 1 verified) · `Hacker News Algolia` (8 found, 4 verified) · `Standards Positions` (4 found, 3 verified) · `Engine Bug Trackers` (7 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (1 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 15

---

<a id="5099333963874304-digital-credentials-api-issuance-support"></a>
### [Digital Credentials API (issuance support)](https://chromestatus.com/feature/5099333963874304)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5099333963874304](https://chromestatus.com/feature/5099333963874304) · [chromestatuslite.com/feature/5099333963874304](https://chromestatuslite.com/feature/5099333963874304)
- **Specification:** [https://w3c-fedid.github.io/digital-credentials](https://w3c-fedid.github.io/digital-credentials)
- **Chromium Bug:** [https://crbug.com/378330032](https://crbug.com/378330032)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Negative` · Safari: `Support`

#### 📝 Overview

This Web Platform feature enables issuing websites (e.g., a university, government agency, or bank) to securely initiate the provisioning (issuance) process of digital credentials directly into a user's mobile wallet application. On Android, this capability leverages the Android IdentityCredential CredMan system (Credential Manager). On Desktop, it leverages cross-device approaches using the CTAP protocol similar to Digital Credentials presentation.

> **Motivation:** Without this, websites and wallets can only communicate in ways that are more opaque to the browser and OS.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 531)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"site developer chrome com Digital Credentials API issuance"`, `"Digital Credentials API navigator credentials store create issuance"`, `"Digital Credentials API issuance support"`, `"W3C FedID Digital Credentials API issuance"`
- **Analysis:** The Digital Credentials API issuance extension (via \`navigator.credentials.create()\`) moves push-provisioning of verifiable credentials out of fragile custom URL schemes and QR hacks into browser- and OS-mediated flows. While Google leads implementation targeting Android Credential Manager and cross-device CTAP pairing, the broader ecosystem remains fractured across protocol dialects like OpenID4VCI and ISO standards. Full interoperability remains elusive without widespread multi-engine consensus or inclusion in Baseline.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat browser-mediated credential issuance strictly as an optional progressive enhancement for compatible Android/Chrome environments. Maintain established fallback flows (such as cross-device QR codes, push notifications, and standard OpenID4VCI redirects) to support Safari, Firefox, and unassisted desktop clients.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @RByers: "Hey Mozilla folks, is there anything you can share here about your position on the use of custom schemes like openid4vp://? Today Firefox allows infor..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Show HN: ID Token++ issue Verifiable Credentials using OIDC infra" (4 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **14 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Show HN: ID Token++ issue Verifiable Credentials using OIDC infra](https://news.ycombinator.com/item?id=42784905) — *Hacker News (4 pts, 0 comments)*

#### 🏛️ Browser Standards Positions

- **Mozilla:** [Digital Credentials](https://github.com/mozilla/standards-positions/issues/1003) [closed] `position: negative`
  > *Latest discussion from @RByers: "Hey Mozilla folks, is there anything you can share here about your position on the use of custom schemes like openid4vp://? Today Firefox allows infor..."*

#### 📰 Ecosystem Blogs & Articles

- [Show HN: ID Token++ issue Verifiable Credentials using OIDC infra](https://test-api.mynext.id/idt/v2) *(test-api.mynext.id · 2025-01-21T20:35:34Z)*
  > IDT++ You need to enable JavaScript to run this app.
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQERzsGBbyXX_yZrQ0IRxwsrTio5Jyuhw9JBbbOuI4QNOgzEyw0NKEeRfydcKO9O5xw-7mINjW1AZ_ZLN77fcoyDLOJHwsv6-jV5eQ5MJtiGWndOq14es5dJfV6fbtlT0Mo=) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The **Digital Credentials API (DC API)**—developed within the W3C Federated Identity Working Group (FedID WG)—originally focused on credential presentation (`navigator.credentials.get()`). It has since expa...
- [vidos.id](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHY8oh8Q-lAxLxSw3_41HvI41yh3d9R0YnE27Pen6vP_uHGndxfzy4YzPFsZJtW6VRbYwZWVCtCk9nfiratau2amLeVvqC_jXmJfgkbIZ8dzp0H2552OSWhAHhNvth2EwNqogzOzwrKLK2jN3MGIJCN2-nsl3O8NiMm_KE=) *(vertexaisearch.cloud.google.com)*
  > Digital Credentials API | Vidos Skip to content Vidos Explanations References Tutorials Guides Search Ctrl K Cancel Home Support Vidos Dashboard Select theme Dark Light Auto Ask ChatGPT View Markdown Digital Credentials ...
- [corbado.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHhPSO3drI8XG9z_UBjO2FF20I21Saq61mDk4mTK7xo-5_ZuEYyvHA3lesCXVkSvjoRKQDTqYaCbRUC1MWOLombx8VxtNCJ9He9NWy9XSD9GEYHyBCQmF6FrVU25w2k-297YYNbi-ZGEehz) *(vertexaisearch.cloud.google.com)*
  > Digital Credentials API (2026): Chrome, Safari & Firefox Free The +45-page Authentication Analytics Whitepaper — measuring real login journeys Download Back to Overview Copy Page Copy Page Copied 🇬🇧 En English Digital ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHbk-mYIUnVy4wiZwFbf-uatPlIkSWawIdHUH7wumEFe0jCTBixYoD-D0ApDQDXzZXjKyIkFV05VDRZq5pVABAwLX83q9dvzQVlqD4raeA42HeFiUEq9OExStdql0XmxleuPW7JToSBhk3_eqNN7NmN2o-suaESqh30SnkliPTc) *(vertexaisearch.cloud.google.com)*
  > Digital Credentials API for credential issuance | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt...
- [android.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE7KSlyWl9kizwYbCZszXePGOG3BQrDA9XQNRWI024OBY_Mv3Mrx_MDJopLr1UWkoLo4R_ujEW9_nl6jRlbypGLm4qzauiJXfpBri-FDFHae98KqwbEA4uSj9UU7u3gtd5wdVMgPUNOZf7bJ1zY3wd4) *(vertexaisearch.cloud.google.com)*
  > ### Overview  The **Digital Credentials API (DC API)**—developed within the W3C Federated Identity Working Group (FedID WG)—originally focused on credential presentation (`navigator.credentials.get()`). It has since expa...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Experiment: Digital Credentials API (issuance support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/Gy-NvwoSODo/m/UYrJvdQ1BwAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5099333963874304`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5099333963874304</strong>?gate=5124632629870592
- [Re: \[blink-dev\] Intent to Extend Experiment: Digital Credential API](https://www.mail-archive.com/blink-dev@chromium.org/msg14205.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > &gt; &gt; On Tuesday, July 15, 2025 at 11:02:05 AM UTC-7 Jeffrey Yasskin wrote: &gt; &gt;&gt; On Tue, Jul 15, 2025 at 10:44 AM Chromestatus &lt; &gt;&gt; ad...@cr-status.appspotmail.com&gt; wrote: &gt;&gt; &gt;&gt;&gt; C...
- [Intent to Extend Experiment: Digital Credential API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Vj2tr_cAClk/m/H4JztjhoAgAJ) *(groups.google.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explainer.md</strong>
- [Intent to Ship: Digital Credentials API I (presentation support)](https://groups.google.com/a/chromium.org/g/blink-dev/c/cPLAQLj8nV0) *(groups.google.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > I think the explainer is missing example code for the problem (and/or screenshots if the custom-scheme practice involves user interaction?), but https://<strong>github.com/w3c-fedid/digital-credentials/blob/main/explaine...
- [\[blink-dev\] Re: Intent to Ship: Digital Credentials API I (presentation support)](https://www.mail-archive.com/blink-dev@chromium.org/msg14400.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c-fedid/digital-credentials/blob/main/explainer.md`)*
  > Thanks, Dan On Monday, August 11, 2025 at 2:32:19 PM UTC-7 rby...@chromium.org wrote: &gt; [API owner hat off since I work on this API] &gt; &gt; On Mon, Aug 11, 2025 at 2:26 PM Chromestatus &lt; &gt; ad...@cr-status.app...

#### 📚 Platform Documentation & References

- [digital-credentials/index.html at main · w3c-fedid/digital-credentials](https://github.com/w3c-fedid/digital-credentials/blob/main/index.html) *(github.com)*
- [Digital Credentials](https://www.w3.org/TR/digital-credentials) *(w3.org)*
- [eudi-doc-architecture-and-reference-framework/docs/discussion-topics/f-digital-credential-api.md at main · eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/blob/main/docs/discussion-topics/f-digital-credential-api.md) *(github.com)*
- [digital-credentials/explainer.md at main · w3c-fedid/digital-credentials](https://github.com/WICG/digital-credentials/blob/main/explainer.md) *(github.com)*
- [Issuance API surface: expose navigator.credentials.create() for openid4vci-v1 · Issue #20 · sirosfoundation/dc-api](https://github.com/sirosfoundation/dc-api/issues/20) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=digital-credentials) (28 test path(s) matching `digital-credentials`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 12 planned queries, 38 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 12 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (1 found, 1 verified) · `Standards Positions` (2 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (28 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

---

<a id="5172464636133376-support-for-webhid-human-interface-device"></a>
### [Support for WebHID (Human Interface Device)](https://chromestatus.com/feature/5172464636133376)

- **Milestone:** Chrome 154 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5172464636133376](https://chromestatus.com/feature/5172464636133376) · [chromestatuslite.com/feature/5172464636133376](https://chromestatuslite.com/feature/5172464636133376)
- **Specification:** [https://wicg.github.io/webhid/index.html](https://wicg.github.io/webhid/index.html)
- **Chromium Bug:** [http://crbug.com/40628009](http://crbug.com/40628009)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Negative` · Safari: `Negative`

#### 📝 Overview

WebHID now allows web applications to interact with a wider range of devices. Standard Human Interface Device (HID) examples include mice, keyboards, touchscreens, and gamepads. Those are accessible with high-level input events. However, specialized HID devices and features (for example, custom keyboards, game controllers, and call control headsets) require extended access.   WebHID allows web applications to request access, send and receive HID reports, and retrieve information about the report descriptor. This feature was previously launched on desktop platforms (Windows, macOS, Linux, and ChromeOS). Support on Android is planned for Chrome 157. To read more, see \[Connect to uncommon HID devices\](https://developer.chrome.com/docs/extensions/how-to/web-platform/webhid).  This feature can be controlled by the following enterprise policies:  \* \[DefaultWebHidGuardSetting\](https://chromeenterprise.google/policies/#DefaultWebHidGuardSetting) \* \[WebHidAllowAllDevicesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowAllDevicesForUrls) \* \[WebHidAllowDevicesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowDevicesForUrls) \* \[WebHidAllowDevicesWithHidUsagesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowDevicesWithHidUsagesForUrls) \* \[WebHidAskForUrls\](https://chromeenterprise.google/policies/#WebHidAskForUrls) \* \[WebHidBlockedForUrls\](https://chromeenterprise.google/policies/#WebHidBlockedForUrls)

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 525)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"site:github.com/mozilla/standards-positions WebHID"`, `""WebHID" android chrome "developer trial" OR "flag""`, `""WebHID" "WebKit" position"`
- **Analysis:** WebHID provides low-level, bidirectional communication between web applications and specialized human interface devices, having launched on desktop platforms in Chrome 89 and now expanding to Android in developer trials (Chrome 154) ahead of a planned rollout. The API remains a unilateral Chromium initiative that is firmly non-Baseline due to sustained opposition from other browser vendors. While it has unlocked rich hardware configuration utilities directly in the browser, its cross-engine future is entirely blocked.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat WebHID strictly as a progressive enhancement behind runtime feature detection (\`'hid' in navigator\`) and provide dedicated native client fallbacks or WebAssembly/companion alternatives for Safari and Firefox users. Teams targeting mobile and auxiliary peripherals should begin testing Android support via developer flags in Chrome 154 before wider deployment.
- Standards Activity (Mozilla): Latest discussion from @scheib: "I'd like to address dmitriid@'s and beaufortfrancois@ comments with a personal opinion.  I work on Chrome adding these capabilities.  We do strive to ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "mr.niko.la (@diynikola) on X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **21 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [mr.niko.la (@diynikola) on X](https://twitter.com/diynikola/status/1148644168148955136) — *Twitter / X by @diynikola (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **Mozilla:** [WebHID (Human Interface Device) API](https://github.com/mozilla/standards-positions/issues/459) [closed] `venue: W3C CG`, `position: negative`
  > *Latest discussion from @scheib: "I'd like to address dmitriid@'s and beaufortfrancois@ comments with a personal opinion.  I work on Chrome adding these capabilities.  We do strive to ..."*

#### 📦 Polyfills & NPM Ecosystem

- [@ledgerhq/hw-transport-webhid](https://www.npmjs.com/package/@ledgerhq/hw-transport-webhid) `v6.36.0` — Ledger Hardware Wallet WebHID implementation of the communication layer
- [@elgato-stream-deck/webhid](https://www.npmjs.com/package/@elgato-stream-deck/webhid) `v7.8.0` — An npm module for interfacing with the Elgato Stream Deck in the browser

#### 📰 Ecosystem Blogs & Articles

- [dialpad.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGBWhI9-5yw7JPSaqqrAYdgigaIcApM0wMjOMb8HL_OyH7GRKsrE6ntTXzAZeiiIJFP0JlkmTuiElziYSpzAJ3Uc4vEJet3xQD1D3l0L67gVKm0JFwsieRUxcjT6IrkzChXECZ4z9mr1VROdhoIpOSiLtmTJ2NTaqZCwQrJjDGoMlEq3JeqKK1VOg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, pre...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEwZQW1gxDwRToSaxguMAb2H7v5sIV6QPSqox1aQH3lCBiuji7Qbe6K2JYiveH6Is14o8-xNZ022oPXxqvid4hiJ89p3vA1ma-mucp9Exu4biFF7ELCMw57sdMAVZD-D-GlyZ8Sli0XWIvk5hUmK9Ai) *(vertexaisearch.cloud.google.com)*
  > HIDDevice - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs HIDDevice Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) 日本語 中文 (简体) HIDDevice Limite...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQExeHGqqXolNnQcoTvx2Z57K_W555GzU5iJuoapaP8fQaICo8xhqu-dNsRf_Kq0g35LV4uZ6BtLnk6UxLp_8NEWBB4Jam8AAxtjtVdRFrFyNe3rqBDL1ues6Ww6BfjisbeJOIwJGGTy3stC) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, pre...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE_5gULUb9rqr6KAFmnLk8HEWRyqcYhy7LV4Bs55E-27tlNeoxDlHNlXvzD1VnL1tJQFvIWGrTnmTnZATGh1_SejhsfTAF3G-ZtHEofoRniR5mqSpq4HJRrJJ0v19djU_b-RL22E7JE0BpVDHdF16CPcEiWp7HoNkaWsoUk1Q==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, pre...
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGZdTGuVSvXa6UVIofiUsPYAImE9sbLKztgqZKdwN2-dRXRQLWangYDpJh_XjS-zmo00x6DLOdbVlaEsa0aj2wZgW1RYekso2VY0zGNSgcbc7qAv2G3ZZiTUdb1j_EPGQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, pre...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEPIaESQIqPuOIw8xf7HAFZ95jQAGvmsFXl5C4qRF7zDhgoZpUzgq2Bbm6HxjfgJNO9kvzdlD4Q9EXupKAlDUhf-l2oNjYPgPlc5QyvSJPPU6MWcxOK-j3gIvFMWr6zGzulzkhGWY_mqSAa4OEvSOCP7SoLONxPm96hP2UyR7sIELd_COo=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of WebHID  The **WebHID (Human Interface Device) API** allows web applications to communicate directly with auxiliary and non-standard HID peripherals—such as custom mechanical keyboards, exotic gamepads, pre...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T00:00:00)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > https://<strong>chromestatus.com/feature/5172464636133376</strong>?gate=5836123360722944 · Links to previous Intent discussions · Intent to Prototype (WebHID on desktop): https://groups.google.com/a/chromium.org/g/blink-...
- [\[blink-dev\] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17213.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > &gt; &gt; On Thursday, August 13, 2026 ... &gt;&gt; &gt;&gt; https://web.dev/hid/ &gt;&gt; &gt;&gt; https://web.dev/hid-examples/ &gt;&gt; &gt;&gt; Summary &gt;&gt; &gt;&gt; <strong>Enables web applications to interact w...
- [\[blink-dev\] Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17170.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > Explainer https://github.com/WICG/webhid/blob/master/EXPLAINER.md Specification https://wicg.github.io/webhid/index.html Design docs https://web.dev/hid/ https://web.dev/hid-examples/ Summary <strong>Enables web applicat...
- [Intent to Experiment: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/LoyzK8xTRME) *(groups.google.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > Contact emails mattre...@chromium.org Explainer <strong>https://github.com/WICG/webhid/blob/master/EXPLAINER.md</strong> Design docs/spec Specification: https://wicg.github.io/webhid/index.html <strong>https://github.com...
- [Add hid to features.md · w3c/webappsec – Slacker News](https://slacker.ro/2021/07/20/add-hid-to-featuresmd-w3cwebappsec-permissions-policy-at-1065d2d) *(slacker.ro)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > | `hid` | [Explainer](https://<strong>github.com/WICG/webhid/blob/master/EXPLAINER.md</strong>) | In [Origin Trial](https://developers.chrome.com/origintrials/#/view_trial/1074108511127863297) in Chrome 85-87 |

#### 📚 Platform Documentation & References

- [Add "WebHID" · Issue #5062 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/5062) *(github.com)*
- [WebHID API (Human Interface Device) · Issue #370 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/370) *(github.com)*
- [GitHub - GoogleChrome/developer.chrome.com: The frontend, backend, and content source code for developer.chrome.com · GitHub](https://github.com/GoogleChrome/developer.chrome.com) *(github.com)*
- [WebHID API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API) *(developer.mozilla.org)*
- [HID: requestDevice() method - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/HID/requestDevice) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=display) (1210 test path(s) matching `display`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 12 planned queries, 31 verified) · `Google Search Grounding (gemini-3.8-flash)` (22 found, 16 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (7 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 2 verified) · `Web Platform Tests (wpt.fyi)` (1210 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

---

<a id="5175745573945344-connection-allowlists"></a>
### [Connection Allowlists](https://chromestatus.com/feature/5175745573945344)

- **Milestone:** Chrome 152 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5175745573945344](https://chromestatus.com/feature/5175745573945344) · [chromestatuslite.com/feature/5175745573945344](https://chromestatuslite.com/feature/5175745573945344)
- **Specification:** [https://wicg.github.io/connection-allowlists](https://wicg.github.io/connection-allowlists)
- **Chromium Bug:** [https://issues.chromium.org/issues/447954811](https://issues.chromium.org/issues/447954811)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Positive` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/connection-allowlists) (Chrome: `152`, Firefox: `—`, Safari: `—`)

#### 📝 Overview

Connection Allowlists is a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or worker.  The proposed implementation involves the distribution of an authorized endpoint list from the server through an HTTP response header. Prior to the establishment of any connection by the user agent on behalf of a page, the agent will evaluate the destination against this allowlist; connections to verified endpoints will be permitted, while those failing to match the entries in the list will be blocked.  More details on the proposal can be found here: https://github.com/WICG/connection-allowlists   Design doc: https://docs.google.com/document/d/1B3LERUObjVDAKBNLpdIxbk8LC96rWUn1q8vtP9pPIuA/edit?usp=sharing  Implementation Design: https://source.chromium.org/chromium/chromium/src/+/main:docs/connection\_allowlist\_design.md

> **Motivation:** Developers wish to have control over the resources loaded into their pages' contexts and the endpoints to which their pages can make requests. This control is necessary for several purposes, including limiting the ways in which users' data can flow through the user agent (mitigating exfiltration attacks) and ensuring control over a site’s architect...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 510)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Connection Allowlists" "mozilla" standards-positions"`, `""Connection-Allowlist" site:github.com/WICG/connection-allowlists"`, `""Connection Allowlists" WICG mikewest"`, `""Connection Allowlists" site:developer.chrome.com"`
- **Analysis:** Connection Allowlists (\`Connection-Allowlist\`) shipped enabled by default in Chrome 152, establishing a dedicated, HTTP header-driven egress firewall that leverages Structured Fields and URLPattern syntax to curtail data exfiltration. The specification decouples network endpoint enforcement from cumbersome CSP \`connect-src\` rules, offering a targeted defense-in-depth mechanism across Fetch, WebRTC, and workers. While Mozilla has formally backed the proposal and is actively implementing it in Gecko, cross-browser baseline status is still pending WebKit's evaluation.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can begin adopting \`Connection-Allowlist\` headers progressively for Chromium traffic, as unsupported browsers safely ignore the header. Before rolling out strict policies, thoroughly audit all egress channels—including Identity Providers, analytics, and WebRTC endpoints—and configure \`report-to\` directives to catch unexpected breakage.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @mikewest: "A brief update on timing: we're now planning an initial Origin Trial starting in Chrome 147 (https://groups.google.com/a/chromium.org/g/blink-dev/c/lR..."
- Standards Activity (Mozilla): Latest discussion from @evilpie: "Suggested position: positive  #1431..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Connection allowlists: Secure your web application's network access" (2 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **4 new community discussions** found
- 📰 **12 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Connection allowlists: Secure your web application's network access](https://news.ycombinator.com/item?id=49918027) — *Hacker News (2 pts, 0 comments)*
- 💬 [Show HN: Agent-fetch – Sandboxed HTTP client with SSRF protection for AI agents](https://news.ycombinator.com/item?id=46931359) — *Hacker News (1 pts, 0 comments)*
- 💬 [Show HN: CargoWall – eBPF Firewall for GitHub Actions](https://news.ycombinator.com/item?id=47588383) — *Hacker News (14 pts, 2 comments)*
- 💬 [Show HN: Buildcage – Egress filtering for Docker builds (SNI-based, no MitM)](https://news.ycombinator.com/item?id=47297739) — *Hacker News (2 pts, 0 comments)*
- 🐦 [先日ご紹介したConnection Allowlistsの正式なアナウンス記事が出ました。ぜひ。 https://t.co/BX5xZXTQOG https://t.co/OzT3kXO9bT](https://twitter.com/agektmr/status/2104822172200153227) — *Twitter / X by @agektmr (4 likes/RTs, 0 replies)*
- 🐦 [雑u Bot on X: "Chromeの新しいセキュリティ機能 Connection Allowlists について https://t.co/hENNUs8Evu" / X](https://x.com/matsuu_zatsu/status/1988945701506539734) — *Twitter / X by @matsuu_zatsu (0 likes/RTs, 0 replies)*
- 🐦 [Restream Helps on X: "👀 We are aware of and investigating issues resulting in an expired connection status on connected Mixer channels. More updates to come." / X](https://twitter.com/RestreamHelps/status/1151919696360484864) — *Twitter / X by @RestreamHelps (0 likes/RTs, 0 replies)*
- 🐦 [@G3\_Connection (@G3\_Connection) on X](https://twitter.com/g3_connection?lang=en) — *Twitter / X (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Connection Allowlists](https://github.com/WebKit/standards-positions/issues/583) [open] 
  > *Latest discussion from @mikewest: "A brief update on timing: we're now planning an initial Origin Trial starting in Chrome 147 (https://groups.google.com/a/chromium.org/g/blink-dev/c/lR..."*
- **Mozilla:** [Connection Allowlists](https://github.com/mozilla/standards-positions/issues/1322) [closed] `position: positive`, `topic: HTTP`, `team: Networking`, `team: Security`
  > *Latest discussion from @evilpie: "Suggested position: positive  #1431..."*
- **W3C TAG:** [Incubation: Connection Allowlists](https://github.com/w3ctag/design-reviews/issues/1173) [closed] `Resolution: satisfied`, `Review type: CG early review`, `Missing: Multi-stakeholder support`
  > *Latest discussion from @toreini: "Hi @mikewest,   The goal looks good, and the proposal is generally sensible, but we have several concerns:  * There is no position from other stakehol..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2062159: \[meta\] Connection Allowlists](https://bugzilla.mozilla.org/show_bug.cgi?id=2062159) `[NEW]`
- **Mozilla (Gecko):** [Bug #2072261: Connection Allowlists: Blocking WebRTC](https://bugzilla.mozilla.org/show_bug.cgi?id=2072261) `[NEW]`
- **Mozilla (Gecko):** [Bug #2073404: Connection Allowlists: Finish Policy-Container implementation](https://bugzilla.mozilla.org/show_bug.cgi?id=2073404) `[NEW]`
- **Mozilla (Gecko):** [Bug #2073432: Connection Allowlists: Add Telemetry](https://bugzilla.mozilla.org/show_bug.cgi?id=2073432) `[NEW]`
- **Mozilla (Gecko):** [Bug #2073466: Check that blocked requests because of Connection-Allowlists header are properly displayed in Netmonitor](https://bugzilla.mozilla.org/show_bug.cgi?id=2073466) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [Connection allowlists: Secure your web application's network access](https://developer.chrome.com/blog/connection-allowlist-announcement) *(developer.chrome.com · 2026-10-01T05:25:14Z)*
  > Connection allowlists: Secure your web application&#39;s network access | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Portugu...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGE_zMYOpwySFXosyLQjBvb5X5DAQGvOJeFQnq5akJZBJtqUoqSZOxXFjL3CIsVWe1dfhop7632XBSaPIhf3Ssm8y2IuAX4FzUq5gNSuqCGJjR-E4vXRBCj9bBOkJC6KVgwieE=) *(vertexaisearch.cloud.google.com)*
  > GitHub - WICG/connection-allowlists · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your sessi...
- [report-uri.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFjN1p5Ajefaev0Bev6eEo3MChQFCO6F5ofUdyQ2rrp-X3BNG56oTHqCH-MsTMWAp0zvitn9ulQ0SQ3fayxXNSRCSX--CpyWjkXaSxhTGEOY2zF3afM4rJQYGvx9edzRLhAYcPDYnwNiVW7) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary: Connection Allowlists  The **Connection Allowlists** specification (incubated in the WICG) introduces an explicit, browser-enforced egress firewall for web applications. Designed to prevent data ex...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGNrInWWKvxwVpO_AtgViB9EcJwEjp3ZXSzrMDVAD7EA6-P-Jvrwb3q1RlslDX19DeUMRvYUTUBuWwQcj_jcwwAjGKl3L2S-JDCzguEXunpX0zxp4cMBxS8FsL_FVSZoiN95xjFZzgtKcERZBHcct_9EUA=) *(vertexaisearch.cloud.google.com)*
  > FedCM：使用連線許可清單允許對身分識別提供者發出的網路要求 | Blog | Chrome for Developers 跳至主要內容 / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEUyW1onWLLcrc2B_BjhAJJRwwn-9iXuAl8vwHoiAQin1BV7-XQYz_gkIGeyrx66DY0k5SKS_b2hDDfPu984fF1H03MOL8hHP2t7SuKvK0NXb7DqSwEflmr1-U9ZUuyaikJWIfnER41PvjM9g9duMQM4J1UHnOLCFQwUA==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary: Connection Allowlists  The **Connection Allowlists** specification (incubated in the WICG) introduces an explicit, browser-enforced egress firewall for web applications. Designed to prevent data ex...
- [timjohns.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGDk3lopU6tK___SW7FKk7pXzaAHWY5TDorratHO5yNSiGGHZogJHf4jUYfuYDCTkbHvz92LUoa00u2hrTONkRahsVzmQr16Bt4VHq0taGukMVVbUXUITxZJqTc4ZEe5_IuBMQdgw==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary: Connection Allowlists  The **Connection Allowlists** specification (incubated in the WICG) introduces an explicit, browser-enforced egress firewall for web applications. Designed to prevent data ex...

#### 🔗 Inbound Citations & Reverse Links

- [Connection Allowlists · Issue #1297 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1297) *(github.com · 2026-08-14T17:27:07)* *(Cites: `https://chromestatus.com/feature/5175745573945344`)*
  > Chromestatus: https://<strong>chromestatus.com/feature/5175745573945344</strong> Web Feature ID: connection-allowlists Chrome Releases: Chrome 152
- [\[blink-dev\] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16875.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Explainer https://github.com/W... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs ...
- [Connection Allowlists: Consider splitting exfiltration mitigation out of CSP. \[447954811\] - Chromium](https://issues.chromium.org/issues/447954811) *(issues.chromium.org)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Explainer: https://github.com/WICG/connection-allowlists <strong>This CL enforces connection-allowlist header to be checked for navigations</strong>.
- [\[blink-dev\] Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15986.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Explainer https://github.com/W... Connection Allowlists is <strong>a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs ...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17559.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/connection-allowlists`)*
  > Best, Alex On Wednesday, September 16, 2026 at 4:50:48 PM UTC-7 Giovanni Del Valle wrote: Intent to Experiment: Connection Allowlists - Embedded Enforcement Contact emails [email protected]&lt;mailto:[email protected]&gt...

#### 📚 Platform Documentation & References

- [Connection Allowlists · Issue #1297 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1297) *(github.com)*
- [Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists](https://github.com/WICG/connection-allowlists/pull/41) *(github.com)*
- [GitHub - VergeA/connection-allowlists · GitHub](https://github.com/VergeA/connection-allowlists) *(github.com)*
- [html-css-javascript · GitHub Topics · GitHub](https://github.com/topics/html-css-javascript) *(github.com)*
- [Copilot allowlist reference - GitHub Docs](https://docs.github.com/en/copilot/reference/copilot-allowlist-reference) *(docs.github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=connection) (259 test path(s) matching `connection`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 12 planned queries, 33 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 9 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (5 found, 4 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (5 found, 5 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (259 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 11

---

<a id="5188237101891584-reference-target-for-cross-root-aria"></a>
### [Reference Target for Cross-root ARIA](https://chromestatus.com/feature/5188237101891584)

- **Milestone:** Chrome 152 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5188237101891584](https://chromestatus.com/feature/5188237101891584) · [chromestatuslite.com/feature/5188237101891584](https://chromestatuslite.com/feature/5188237101891584)
- **Specification:** [https://github.com/whatwg/html/pull/10995](https://github.com/whatwg/html/pull/10995)
- **Chromium Bug:** [https://issues.chromium.org/issues/346835896](https://issues.chromium.org/issues/346835896)
- **Browser Signals:** Chrome: `Origin trial` · Firefox: `Positive` · Safari: `No signal`

#### 📝 Overview

Reference Target enables ID attributes like &lt;label for&gt;, aria-labelledby, popovertarget, and commandfor to be forwarded to elements inside a component's shadow DOM, while maintaining the shadow's encapsulation of its internal state.   When a shadow host specifies an element in its shadow tree to act as its reference target, all ID references pointing to the shadow host are forwarded to the reference target element instead.  &lt;label for="my-checkbox"&gt;Checkbox value (click me to toggle checkbox)&lt;/label&gt; &lt;custom-checkbox id="my-checkbox"&gt;   &lt;template shadowrootmode="open" shadowrootreferencetarget="real-checkbox"&gt;     &lt;input id="real-checkbox" type="checkbox"&gt;   &lt;/template&gt; &lt;/custom-checkbox&gt;  The reference target can be set declaratively like in the above example, or in JavaScript with ShadowRoot's referenceTarget property.

> **Motivation:** The Shadow DOM presents a problem for accessibility: there is not a way to establish semantic relationships between elements on in different shadow trees (such as via \`aria-labelledby\`). This limits the ability to design web components in a way that works with accessibility tools such as screen readers. The ARIAMixin IDL attributes (https://w3c.git...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 485)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"Reference Target for Cross root ARIA web components chrome igalia"`, `"reference target cross root aria shadowrootreferencetarget"`
- **Analysis:** Reference Target for Cross-Root ARIA bridges a long-standing accessibility deficiency in Web Components by allowing outer ID references (such as \`&lt;label for&gt;\`, \`aria-labelledby\`, \`popovertarget\`, and \`commandfor\`) to transparently resolve into internal shadow DOM nodes without breaking shadow encapsulation. The feature has shipped enabled by default in Chrome 152 and advanced through WHATWG HTML specification PR #10995. Multi-engine alignment is strong, bolstered by Igalia's NLnet-backed development efforts implementing prototype support across WebKit and Gecko.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web component authors should start adopting \`shadowrootreferencetarget\` declaratively and \`shadowRoot.referenceTarget\` imperatively for encapsulating form inputs and accessible widgets. For production environments requiring cross-browser parity today, treat it as a progressive enhancement while maintaining existing accessible fallback strategies until WebKit and Gecko ship the feature unflagged.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "As per the README:  &gt; Note that positions on this repository do not reflect implementation status. We might like something we do not get around to imp..."
- Standards Activity (Mozilla): Latest discussion from @keithamus: "There are well demonstrated use cases for this, and I think phase 1 of the API seems well motivated to solve these. I have minor concerns about some m..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Reference Target for Cross-Root ARIA](https://github.com/WebKit/standards-positions/issues/356) [open] `topic: accessibility`, `topic: html`, `topic: web components`, `venue: WHATWG HTML Workstream`
  > *Latest discussion from @annevk: "As per the README:  > Note that positions on this repository do not reflect implementation status. We might like something we do not get around to imp..."*
- **Mozilla:** [Reference Target for Cross-Root ARIA](https://github.com/mozilla/standards-positions/issues/1035) [closed] `venue: W3C CG`, `position: positive`, `topic: API`
  > *Latest discussion from @keithamus: "There are well demonstrated use cases for this, and I think phase 1 of the API seems well motivated to solve these. I have minor concerns about some m..."*

#### 📰 Ecosystem Blogs & Articles

- [meyerweb.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHvjmKR4FFRZJdVrYj6ZWlJfm_ogzBybK7QnRlZFbAT3zUlESr1B0pfCIxbzs8sMezSXAr5k9EDcHu5iyBwDx1HX7hU8xGYDdce9W5WEYtr8B9HTdBSrGYUItzNHDzEySxl3yjVl_shBtF9UTpxW3fJL0ujisrILuJMuHsDm2bVX-BmzK-unyYlMBsXR24=) *(vertexaisearch.cloud.google.com)*
  > Targeting by Reference in the Shadow DOM &#8211; Eric’s Archived Thoughts meyerweb.com Targeting by Reference in the Shadow DOM Published 9 months, 2 weeks past I’ve long made it clear that I don’t particularly care for ...
- [igalia.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHN3R2g1qbxpDMyXkN_GCOsjzeMKoI8yAvur5C5rN1HDzf-wemxCR3T8-0kJmJrVAM9uQCyU6XzKEogbtMk9Vry56lxw-TEuNrMnQiYm3VEnhEED1WbUiZPhFBgjLb2gdXAee9Qv-qRAYFLB0KvQGyaNCEPvYeTOtlLeZlCRM6pHI1kAE3O6Q0zxgWVe6JC3-uzzg==) *(vertexaisearch.cloud.google.com)*
  > Reference Target: having your encapsulation and eating it too alice&#39;s blog Reference Target: having your encapsulation and eating it too 30 January 2026 shadowdom html accessibility aria Three years ago, I wrote a bl...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEUabFpubH35qlQNTDhaySddz5qUFoog_rbCZnFHZqW_tv6wLkg5ch6DdYbubBzd0WznyMOuseWty1_-qH1ljZHkScND3GniiXfWu06TGxymp2E4YEeF5Lt9ElXD5TwVhXFo9BfffR5) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [igalia.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGLdoN2E6pWWCBwwMb9wJ8Og1tnrlaBEEDnZWLTwPEikDInB3279wf2rdI9nsTtSpJHYP2P3zM8VzP-Z_6pgLWMvXa90tJ72saRQHWPdRClVkugd_I_DLibz6lnH6izS3u7YgIuvXi-wJQZXiB_pO6766rxmHEmY9qrE27o5t5lrnkj) *(vertexaisearch.cloud.google.com)*
  > Solving Cross-root ARIA Issues in Shadow DOM Rego’s Everyday Life A blog about my work at Igalia. Solving Cross-root ARIA Issues in Shadow DOM 10 February 2025 English Planet WebKit Accessibility This blog post is to ann...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG6qtwnUvzfHVNrG62fyVYCWWIqRm--1aIJlBJanQzR8L7DkoPKKci4nLSEg6RtgrcAlFnlWNJohTVXOHzPneqecmGFw75eZoG9VzxCf0gQ2rs0BVyQw9wPkASi5hUHtrZBfag57z7fs11GsjwhP0ZSdbFuXCQz2E0cga0RG_DQ_2PAQifQFzVwYn31Ss4lPBgp) *(vertexaisearch.cloud.google.com)*
  > webcomponents/proposals/reference-target-explainer.md at gh-pages · WICG/webcomponents · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ...
- [web-standards.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH4JAXQUcq6QtMspSVkBsLlmkB9foq-bicl_NOyU54FM3z5Lz_F37Oa2k9O931zxRYF9Y_CAaLe1e1TAborIMuqPVsieMuk1WiaTmdH60MzoNZeGXAoB7spYHnKbpRqCDZiU1xi_M_T51RG-dzNvttvyUGqBGtD-bk-pteqLqu4) *(vertexaisearch.cloud.google.com)*
  > Reference Target: having your encapsulation and eating it too — Web Standards Web Standards Daily web platform news 326 414 311 Reference Target: having your encapsulation and eating it too 2026-02-10 Alice Boxhall intro...

#### 🔗 Inbound Citations & Reverse Links

- [referencetarget · Issue #1336 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1336) *(github.com · 2026-08-14T17:31:53)* *(Cites: `https://chromestatus.com/feature/5188237101891584`)*
  > Chromestatus: https://chromestatus.com/feature/5188237101891584 Feature Name: <strong>Reference Target for Cross-root ARIA Web</strong> Feature ID: referencetarget Chrome Releases: Chrome 152
- [Intent to Experiment: Reference Target for Cross-root ARIA](https://groups.google.com/a/chromium.org/g/blink-dev/c/C3pELgMqzCY/m/Lpb6DkueAQAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5188237101891584`)*
  > https://<strong>chromestatus.com/feature/5188237101891584</strong>?gate=5171533504315392 · Links to previous Intent discussions · Intent to Prototype: https://groups.google.com/a/chromium.org/d/msgid/blink-dev/CH3PR00MB1...
- [RE: \[blink-dev\] Intent to Ship: Reference Target](http://www.mail-archive.com/blink-dev@chromium.org/msg16884.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md`)*
  > On Tue, Jun 23, 2026 at 4:22 PM &#x27;Daniel Clark&#x27; via blink-dev &lt;[email protected]&lt;mailto:[email protected]&gt;&gt; wrote: Contact emails [email protected]&lt;mailto:[email protected]&gt;, [email protected]&...
- [Intent to Experiment: Reference Target for Cross-root ARIA](https://groups.google.com/a/chromium.org/g/blink-dev/c/C3pELgMqzCY/m/Lpb6DkueAQAJ?pli=1) *(groups.google.com)* *(Cites: `https://github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md`)*
  > https://<strong>github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md</strong>#phase-2) would be needed?
- [Registration for Reference Target for Cross-Root ARIA \| studio.sakupi01.com](https://studio.sakupi01.com/whatwg/reference-target-for-cross-root-aria) *(studio.sakupi01.com)* *(Cites: `https://github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md`)*
  > Explainer: https://<strong>github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md</strong>

#### 📚 Platform Documentation & References

- [referencetarget · Issue #1336 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1336) *(github.com)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-07-06 (public-html@w3.org from July 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jul/0000.html) *(lists.w3.org)*
- [Re: \[whatwg/dom\] \[DRAFT\] Propagate events into the event's source's tree where appropriate. (PR #1377) from Dan Clark on 2026-05-19 (public-webapps-github@w3.org from May 2026)](https://lists.w3.org/Archives/Public/public-webapps-github/2026May/0309.html) *(lists.w3.org)*
- [Reference Target for Cross-Root ARIA · Issue #356 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/356) *(github.com)*
- [Reference Target for Cross-Root ARIA · Issue #1035 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1035) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Reference Target for Cross-root ARIA Demo](https://microsoftedge.github.io/Demos/reference-target)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=reference) (569 test path(s) matching `reference`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (48 found across 12 planned queries, 36 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 8 verified) · `Twitter / X API v2` *(found 6 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (569 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 7

---

<a id="5551475195904000-unframed-display-mode-for-iwas"></a>
### [Unframed display mode for IWAs](https://chromestatus.com/feature/5551475195904000)

- **Milestone:** Chrome 152 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5551475195904000](https://chromestatus.com/feature/5551475195904000) · [chromestatuslite.com/feature/5551475195904000](https://chromestatuslite.com/feature/5551475195904000)
- **Specification:** [https://wicg.github.io/manifest-incubations/index.html#dfn-unframed](https://wicg.github.io/manifest-incubations/index.html#dfn-unframed)
- **Chromium Bug:** [https://crbug.com/477512407](https://crbug.com/477512407)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `No signal` · Safari: `N/A`

#### 📝 Overview

Unframed display mode allows Isolated Web Apps \[IWAs\](https://chromeos.dev/en/web/isolated-web-apps) to occupy the entire browser window, which optimizes the workspace available. By removing standard window borders and title bars, developers can implement unique user experiences with branding and menu hierarchies that match the look-and-feel of device-installed applications.   Administrators can manage this feature with existing policies for window management:   - \[DefaultWindowManagementSetting\](https://chromeenterprise.google/policies/#DefaultWindowManagementSetting) configures the default state for the window management for all apps. The policies below can override this default.   - \[WindowManagementAllowedForUrls\](https://chromeenterprise.google/policies/#WindowManagementAllowedForUrls) allows  IWAs with specified origins to enter unframed mode without any user interaction.   - \[WindowManagementBlockedForUrls\](https://chromeenterprise.google/policies/#WindowManagementBlockedForUrls) blocks unframed mode for IWAs with specified origins, forcing Chrome to fallback to other available display modes.

> **Motivation:** Standard window decorations, including the title bar and system control buttons, impose fixed UI constraints that restrict available screen real estate and visual integration. Without unframed mode, developers are forced to design around standard operating system frames that often conflict with an application’s specific branding or functional layou...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 485)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""unframed display mode" IWA chrome"`, `"site:chromestatus.com "unframed""`, `""unframed" "isolated web apps" chrome"`, `""display": "unframed" WICG manifest-incubations"`
- **Analysis:** Unframed display mode enables Isolated Web Apps (IWAs) to remove standard operating system window frames and title bars completely, delivering a borderless application surface tailored for bespoke enterprise tooling and Virtual Desktop Infrastructure (VDI) clients. Enabled by default in Chrome 152 and governable via enterprise window management policies, the feature is incubated under the WICG manifest-incubations document. Because it is inherently tied to the signed, packaged Isolated Web App security architecture, availability is confined exclusively to Chromium-based environments (particularly ChromeOS).

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams developing managed corporate tools or VDI clients on ChromeOS should specify \`"unframed"\` inside \`display\_override\` while pairing it with CSS draggable regions and standard fallbacks like \`"window-controls-overlay"\` and \`"standalone"\`. General web developers targeting broad cross-browser desktop PWA support should avoid relying on unframed mode and continue using the standardized Window Controls Overlay API instead.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **18 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEa9zRlGyxlRubFDtE2tc7_HTLChUNNh-8vBgQWlEMDZ9O4K8l5QVBxDxQGXHFDQJ09v5LUPXmfz6a7MjKuMjzDttspRyseEVCrGbvWVKtqTFCKpsQ02Ak_Lp1rLV3chXBi5kVJlibn) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEVgf-J72fjgflQvlx-qGBVooXVu3YEdn4_kJFtC4UbzJMXs6ZBoZJw69CYJr2qeo2Cr1OSNmJR_apGFAXcvKVLPsKwLVXJK-SSWuoCwowlVLl2dbjgZzOy6GfKO_KrnnycgrEn) *(vertexaisearch.cloud.google.com)*
  > Chrome 152 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربي...
- [medium.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHSoHaL1uG44lEDCJ6hPW9WvUqUHqX7yyP9hWEKDhl2vAvuZaaUvpZt2Q2ckxswtXMffDIPNw9RY5w8GzBkKH-yQTEPdGtsCK-VP61UkVUJIakemIRA6678lHXankfk7p7mR2aYI9vtbNaG_A_vXvkVfoa-EBNusIvHmpp3D7yfjOcoRsejuUK487hYb43fKhEAigrQFCDbGimAcbgYvij9rIrXtNs=) *(vertexaisearch.cloud.google.com)*
  > Medium Desktop PWAs to Support “Borderless Mode” Starting with Chrome 115 | by Tanmay Patange | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in Progressive Web App Web App Development Goog...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHRNjnQlnIVA221agV8gnAodHhhKyTv---_2nC1YQW_-LR1SUrxQKkV8gHIsZj2_uvunx86ACooGQyZev1SHKFakCanpJ62jNnBiTQsnO6qqKUFn07Hhk8-PimPPqk-_n7GiacSQc-e) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة ف...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH1DoXXEeNP2aczL7Lm_fVSyLV2cIPfECIinmoUkWN7H7O-h5dr4N_oCPx8xm6PTPClL5aeX1JMHclTnNqfJqT3c4gw-Ngnlzrnc_RfHqtsXRetwamiRXCkxAPleNpCTtXZ-MgvMN2juQ4rNV07lB2gLrvVt8I-YR6r8A==) *(vertexaisearch.cloud.google.com)*
  > Launching Isolated Web Apps-specific APIs The Chromium Projects Blink (Rendering Engine) > Launching Features > Launching Isolated Web Apps-specific APIs Introduction Isolated Web Apps (IWAs) provide an environment with ...
- [rigid.design](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQENSUcsYjyD0knYDAYEU-XHHehYPSJ0xGQhIthK0EarXcw7TShdSCjJ3Xow1TIdPywzApp0bxPZQj7_mjcGr5NIINZG87-5N1sv3ImBg2vhm56zW0iftEkxitK6a-kubNVAN0SVzAxO_K7-452u7j9Sd2-ApoPo7eZFllVap8XoO6-7e3HhZ4ji5RVjRJlQfg==) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Unframed Display Mode for IWAs  **Unframed display mode** is an interface capability introduced specifically for **Isolated Web Apps (IWAs)** in Chromium/ChromeOS. Unlike standard Progressive Web Apps (PWAs...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Prototype: Borderless Mode for Installed Desktop Web Apps](https://groups.google.com/a/chromium.org/g/blink-dev/c/0WFHeazngK8/m/iovBizDWAAAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5551475195904000`)*
  > Link to entry on the Chrome Platform Statushttps://<strong>chromestatus.com/feature/5551475195904000</strong> · unread, Jul 25, 2022, 7:23:26 AM7/25/22 ·  ·  ·  · Reply to author · Sign in to reply to author · Forward...
- [Re: \[blink-dev\] Intent to Ship: Unframed display mode for Isolated Web Apps](http://www.mail-archive.com/blink-dev@chromium.org/msg16972.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/manifest-incubations/tree/gh-pages/unframed-explainer.md`)*
  > &gt; *Contact emails* &gt; [email protected], [email protected] &gt; &gt; *Explainer* &gt; &gt; https://<strong>github.com/WICG/manifest-incubations/tree/gh-pages/unframed-explainer.md</strong> &gt; &gt; *Specification* ...
- [\[blink-dev\] Intent to Ship: Unframed display mode for Isolated Web Apps](http://www.mail-archive.com/blink-dev@chromium.org/msg16969.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/manifest-incubations/tree/gh-pages/unframed-explainer.md`)*
  > Explainer https://github.com/W...ges/unframed-explainer.md Summary <strong>Unframed display mode allows [Isolated Web Apps](https://chromeos.dev/en/web/isolated-web-apps) to occupy the entire browser window, which optimi...
- [GitHub - WICG/manifest-incubations: Before install prompt API for installing web applications · GitHub](https://github.com/WICG/manifest-incubations) *(github.com)* *(Cites: `https://wicg.github.io/manifest-incubations/index.html#dfn-unframed`)*
  > Specification link: https://<strong>wicg.github.io/manifest-incubations/index.html</strong> · Scope Extensions for Web Apps ·
- [how to handle cancel button for pwa prompt · Issue #1 · WICG/manifest-incubations](https://github.com/WICG/manifest-incubations/issues/1) *(github.com)* *(Cites: `https://wicg.github.io/manifest-incubations/index.html#dfn-unframed`)*
  > https://<strong>wicg.github.io/manifest-incubations/index.html</strong>#installation-prompts label · Sep 16, 2021 · Sign up for free to join this conversation on GitHub. Already have an account? Sign in to comment · Labe...

#### 📚 Platform Documentation & References

- [GitHub - WICG/manifest-incubations: Before install prompt API for installing web applications · GitHub](https://github.com/WICG/manifest-incubations) *(github.com)*
- [how to handle cancel button for pwa prompt · Issue #1 · WICG/manifest-incubations](https://github.com/WICG/manifest-incubations/issues/1) *(github.com)*
- [Export "create a new top-level browsing context"? · Issue #8449 · whatwg/html](https://github.com/whatwg/html/issues/8449) *(github.com)*
- [web-app-launch/index.html at main · WICG/web-app-launch](https://github.com/WICG/web-app-launch/blob/main/index.html) *(github.com)*
- [Note Taking: New Note URL field · Issue #648 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/648) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Unframed display mode for IWAs Demo](https://github.com/edman/unframed-demo)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=display) (1210 test path(s) matching `display`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (47 found across 12 planned queries, 29 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 13 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (8 found, 2 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (1210 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5109912169480192-webtransportreceivestream"></a>
### [WebTransportReceiveStream](https://chromestatus.com/feature/5109912169480192)

- **Milestone:** Chrome 155 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5109912169480192](https://chromestatus.com/feature/5109912169480192) · [chromestatuslite.com/feature/5109912169480192](https://chromestatuslite.com/feature/5109912169480192)
- **Specification:** [https://w3c.github.io/webtransport/#webtransportreceivestream](https://w3c.github.io/webtransport/#webtransportreceivestream)
- **Chromium Bug:** [https://issues.chromium.org/issues/568317222](https://issues.chromium.org/issues/568317222)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`

#### 📝 Overview

Adds the standardized WebTransportReceiveStream interface, a ReadableStream subclass used for incoming unidirectional streams and the readable side of bidirectional streams. Its getStats() method returns per-stream byte counters: bytesReceived reports bytes received from the network, while bytesRead reports bytes delivered to the application.

> **Motivation:** Incoming WebTransport streams have historically been exposed as generic ReadableStream objects in Chromium. The WebTransport specification defines a dedicated WebTransportReceiveStream subclass with stream-specific statistics.  Applications that receive large or latency-sensitive streams need to distinguish bytes received by the browser from bytes ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 460)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"site bugs webkit org WebTransportReceiveStream"`, `"WebTransportReceiveStream chrome status"`, `"WebTransportReceiveStream getStats webtransport"`
- **Analysis:** WebTransportReceiveStream formalizes the incoming stream interface as a dedicated ReadableStream subclass with per-stream statistics via getStats(), replacing the generic ReadableStream objects previously returned in Chromium. The API addresses a critical observability gap by exposing bytesReceived and bytesRead, enabling real-time media and low-latency applications to diagnose backpressure and client-side buffering. Multi-engine consensus is strong, as this aligns Chromium with the W3C WebTransport specification alongside Firefox and WebKit.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should treat stream.getStats() as an optional progressive enhancement today, feature-detecting the method before querying byte metrics. To avoid breakage across runtimes, avoid strict instanceof checks or assumptions that incoming streams are generic ReadableStreams, and test backpressure handling under Chrome flags.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Unityでpure C#なQUIC(Webtransport)が速やかに動く ..." (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **2 new community discussions** found
- 📰 **53 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Unityでpure C#なQUIC(Webtransport)が速やかに動く ...](https://twitter.com/castanea/status/1306100111999561729) — *Twitter / X by @castanea (0 likes/RTs, 0 replies)*
- 🐦 [Twitter](https://twitter.com/hashtag/webtransport) — *Twitter / X (0 likes/RTs, 0 replies)*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2058634: \[wpt-sync\] Sync PR 61577 - Test https://w3c.github.io/webtransport/#webtransportreceivestream-pull-bytes](https://bugzilla.mozilla.org/show_bug.cgi?id=2058634) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHP3MTGiMQrjIT4KlpuTqgMnW5Q7u1PxbGYStq9MGPhpryAJ6uoHYhjfWgmCpNashm01wQebWMLCgmb-N0mL11h2Mnk3-9Uu7eVMSu-MXu40MgVprLBpoyH0g==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `WebTransportReceiveStream`  The `WebTransportReceiveStream` interface is a standardized web platform feature defined in the [W3C WebTransport specification](https://www.w3.org/TR/webtransport/). It is a s...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEQri37ndzKC7-TnHw0IL8Aad_jgQwHcTrsvUAvmA2u4IXQ6SMdWZLzLFlJI6K_-EgdtPVePLgmOHu3lmxsuepv27rnONW3aKtgGYTC4VuGQm6TdodKhDF-hdvz_AsngPJ9auRKyISue2Vg5BPa_QmidWdkSF1LSj-FyJ6VbCw_tQ==) *(vertexaisearch.cloud.google.com)*
  > WebTransportReceiveStream - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs WebTransportReceiveStream Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFUQVoOtCpUTnrYQA1Wmx8VgNlpqkqAaovZMzkkckhK2uTbxtivT49lVuoeIHGuUbK3sFFyATPxT4WMWJoouZ7cSHs5td1N6O7uAeVcgBi9JkTy9dDa6EY7WKydbcHnZ_-S7pEUcv3c-5Ov8KVy_OjY_9s_yrrtBwTtRfNTabLhVbpwAPIkWA==) *(vertexaisearch.cloud.google.com)*
  > WebTransportReceiveStream: getStats()-Methode - Web-APIs | MDN Zum Hauptinhalt springen Zur Suche springen Seitenleiste umschalten Web Web-APIs WebTransportReceiveStream getStats() Farbschema Systemeinstellung Hell Dunke...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH2tqQj2GnN3Ji-hczT7rhpFYkE-PIxV6cZRdZwVu_0LM5e_PgymRfQcdhCuvt8nm2rxHhXiUPbhPinfZ1w-m1Dvr_9InI1PbflJkgiwetfAamXAgXVewCvDttD3OPJafA7K6Dthwy4G9Hhe_qosZCS0CTGdEEvscZ2CA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `WebTransportReceiveStream`  The `WebTransportReceiveStream` interface is a standardized web platform feature defined in the [W3C WebTransport specification](https://www.w3.org/TR/webtransport/). It is a s...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGyNzivOoT-RcUQGR5XsXL02ENutpwKqK8Of4bUooFs_TM5zyOHvdmbRtme-U3vU6ziobcPe1VZE4WV94lQZWz9uKd6_HiV3AglK2srZ9zHaBVs6KfHDY7NuIguehaAI7p8Xxc=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `WebTransportReceiveStream`  The `WebTransportReceiveStream` interface is a standardized web platform feature defined in the [W3C WebTransport specification](https://www.w3.org/TR/webtransport/). It is a s...
- [webrtchacks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFC5gPAPkhY7MNP_EN6oE5GxL2gd08IWxfc6YaQz6SxUgPMXtHS4mlTq21mmpMoIRjVPrjSgLMhN55mL6Of2qpoDU_l8gYsiwNY7PihBCnsvC4m9trprL3FyQC5Dpe0UYJ66EZLMmxyLvCt7UXwcIW0p8yZlhPP) *(vertexaisearch.cloud.google.com)*
  > ### Summary of `WebTransportReceiveStream`  The `WebTransportReceiveStream` interface is a standardized web platform feature defined in the [W3C WebTransport specification](https://www.w3.org/TR/webtransport/). It is a s...

#### 📚 Platform Documentation & References

- [WebTransportReceiveStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream) *(developer.mozilla.org)*
- [WebTransportBidirectionalStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportBidirectionalStream) *(developer.mozilla.org)*
- [WebTransport: createBidirectionalStream() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/createBidirectionalStream) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/webtransport) *(w3.org)*
- [Streams API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webtransport) (119 test path(s) matching `webtransport`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (66 found across 14 planned queries, 40 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 2 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (2 found, 1 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (0 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (119 items)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 0

---

<a id="5162221567082496-deprecate-and-remove-documentrequeststorageaccessfor"></a>
### [Deprecate and Remove: document.requestStorageAccessFor](https://chromestatus.com/feature/5162221567082496)

- **Milestone:** Chrome 153 (Deprecated)
- **ChromeStatus:** [chromestatus.com/feature/5162221567082496](https://chromestatus.com/feature/5162221567082496) · [chromestatuslite.com/feature/5162221567082496](https://chromestatuslite.com/feature/5162221567082496)
- **Specification:** [https://privacycg.github.io/requestStorageAccessFor](https://privacycg.github.io/requestStorageAccessFor)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The requestStorageAccessFor (rSAFor) API is an extension to the Storage Access API that allows a top-level site to request access to unpartitioned ("first-party") cookies on behalf of embedded sites. Browsers will have discretion to grant or deny access, with mechanisms like Related Website Sets (RWS) membership as a potential signal. This allows for use of the Storage Access API by top-level sites. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove rSAFor, as it is only usable in Chrome to request storage access between RWS sites. Related Website Sets will also be deprecated via a separate intent.

> **Motivation:** Chrome has announced that the current approach to third-party cookies will be maintained. rSAFor currently has usage on about 0.95% of page loads, but any website relying on successful invocation of rSAFor (i.e. the API returns a promise that resolves) must also have registered a set on the RWS GitHub repository. Any invocations of rSAFor outside o...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 450)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"Chrome "requestStorageAccessFor" deprecation "Related Website Sets""`, `""requestStorageAccessFor" "deprecate" OR "deprecation" OR "Intent to Deprecate""`
- **Analysis:** document.requestStorageAccessFor (rSAFor) was introduced by Chrome as a proprietary extension to the Storage Access API, allowing top-level sites to request unpartitioned cookie access on behalf of embedded origins within Related Website Sets (RWS). Following Google's pivot to retain third-party cookies rather than execute an outright phaseout, Chrome is deprecating and removing rSAFor alongside RWS due to niche adoption and the absence of cross-engine momentum. Its removal eliminates an engine divergence and restores standard, cross-browser cookie access workflows around iframe-driven Storage Access API patterns.

**Key Recommendations & Takeaways:**
- Actionable Advice: Immediately audit codebases to eliminate any invocations of document.requestStorageAccessFor and decommission reliance on Related Website Sets. Migrate embedded cross-origin flows to the standard iframe-level document.requestStorageAccess() API or adopt partitioned cookies using CHIPS (Cookies Having Independent Partitioned State).
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE_5ka4a_8B_qZ8u5CIzWWLjLk1u6R2t0T3CgLdN3TE58jK9HRBvEqPUaCMzLVeCIM4rJUi2WSoZmTxUwR5QezUFOBqvSJYCdoi5-xFFxNFlQR2zy7pC-jS4fztmFjOC6e_MqMjOQxUqKugL3UxdijZH05yZ3OzwiBF7z2y9vgjhUBTv9hHlWc=) *(vertexaisearch.cloud.google.com)*
  > Document: requestStorageAccessFor() method - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Document requestStorageAccessFor() Theme OS default Light Dark English (US) Remember language Le...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQElBtDMIUVOYpcDeO2IAN2MLTRxJuu_pay-kx4vJgTA4E1ePhZ-xbtH9X3mgg2LlXExfnEpMZhEBCokf_ruZllkCiaUFznkCIwGP2p9BsZLsHb_J3o8ogB6Bg9bqLQWZjAikELMyeQ7) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **`document.requestStorageAccessFor` (rSAFor)** was introduced as a Chromium-specific extension to the standard Storage Access API (SAA). It allowed a top-level page to proactively request unpartitioned cook...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEV9zWJ0QSt3l9gM5cP_wDSS0KAamhk6lZwrOKXlz4bkW-DU6Z-FPqhuzhYLibbifpGWbFv0IE3Qr0nWxepHKGPY4h1gdgZZDXEtnw2Un2l-l9hj_jvzEU-9HJ2QcuJAuDOpyqickVzUgq44Xeh8HQ2cSo0noVPGw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **`document.requestStorageAccessFor` (rSAFor)** was introduced as a Chromium-specific extension to the standard Storage Access API (SAA). It allowed a top-level page to proactively request unpartitioned cook...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHr6Llre7WCew7vXKHszAYACw_-7XLz54IV5nqvAGVENGBZNri-hHXrVK4nrw8d_F6aZ65DvfiDU9EachjpoytPPaWjPeoI7ziKfEpHpPmuUnFiNuSuynSLBxSjTma9RlV0IBib58gucnslwIg6D5Gpks1BmW6aEMg1) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **`document.requestStorageAccessFor` (rSAFor)** was introduced as a Chromium-specific extension to the standard Storage Access API (SAA). It allowed a top-level page to proactively request unpartitioned cook...
- [xt.pt](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHsUeQp_rnOxhDp4r9Gbyz62cliTtli-Jd_U8z9HfgbjEANlzmWpYP698GtbEkqP_faoXUphQO_Hs3Es2_bAactW3h5pCasldJNCTuEc3ME3E0m6lNcBg84JDOMbVD_ICZlwa_Nm3s1jfu0ieTESLiepC50T5fljuHAvIeLFA5FAV7I7ZrJ7lR0Q-nKBAZJelS3D-8WS0i_qbtjq3bU) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **`document.requestStorageAccessFor` (rSAFor)** was introduced as a Chromium-specific extension to the standard Storage Access API (SAA). It allowed a top-level page to proactively request unpartitioned cook...
- [winaero.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGdekF5PrxwYiIjD6iES6ooq5TosoE9a6_PzVCuoWhDG6MBPjHzR35dNDFRv-xmf4vgFULOJXV7kTtbMk8AXqhby74pVpkEVtGo0i50cf42O4-K9f4VcchLUueb9VTg79Npi5MnEtFw_h-naDLZFTL2MoflVzSddihsy-to) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **`document.requestStorageAccessFor` (rSAFor)** was introduced as a Chromium-specific extension to the standard Storage Access API (SAA). It allowed a top-level page to proactively request unpartitioned cook...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5162221567082496`)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5162221567082496</strong>

#### 📚 Platform Documentation & References

- [Document: requestStorageAccess() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccess) *(developer.mozilla.org)*
- [content/files/en-us/web/api/document/requeststorageaccess/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/document/requeststorageaccess/index.md) *(github.com)*
- [content/files/en-us/web/api/document/hasstorageaccess/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/document/hasstorageaccess/index.md) *(github.com)*
- [Document: requestStorageAccessFor() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccessFor) *(developer.mozilla.org)*
- [Storage Access API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=deprecate) (27 test path(s) matching `deprecate`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 11 planned queries, 39 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 6 verified) · `Twitter / X API v2` *(HTTP 400)* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (27 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="4832783806627840-css4-text-decoration-skip-spaces"></a>
### [CSS4 text-decoration-skip-spaces](https://chromestatus.com/feature/4832783806627840)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/4832783806627840](https://chromestatus.com/feature/4832783806627840) · [chromestatuslite.com/feature/4832783806627840](https://chromestatuslite.com/feature/4832783806627840)
- **Specification:** [https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property](https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property)
- **Chromium Bug:** [https://issues.chromium.org/issues/40862777](https://issues.chromium.org/issues/40862777)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The text-decoration-skip-spaces CSS property controls whether text decoration lines (underlines, overlines, line-throughs, etc.) skip over whitespace characters. This allows authors to prevent decorations from being drawn under spaces, which is often more visually appealing.

> **Motivation:** Currently there is no web standard way to control whether text decorations (underlines, overlines, line-throughs) appear over whitespace characters. Authors commonly want to suppress the underline under leading/trailing spaces in inline elements, but CSS provides no mechanism for this. The \`text-decoration-skip-spaces\` property fills this gap, allo...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 425)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** CSS4 text-decoration-skip-spaces is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **18 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html) *(mail-archive.com)*
  > We talked about this during the API Owners call today and something that came up was this Issue 6 in the spec: https://drafts.csswg.org/css-text-decor-4/#issue-4229bfce Is your plan to ship with &#x27;none&#x27; as the d...
- [\[blink-dev\] Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17140.html) *(mail-archive.com)*
  > Specification https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property Summary The text-decoration-skip-spaces CSS property <strong>controls whether text decoration lines (underlines, overlines, li...
- [CSS4 text-decoration-skip-spaces](https://chromestatus.com/feature/4832783806627840) *(chromestatus.com · 2026-04-10T00:00:00)*
  > We cannot provide a description for this page right now
- [Re: \[blink-dev\] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17373.html) *(mail-archive.com)*
  > I also think this situation is ... (Also note: the default does *not* &gt;&gt;&gt; skip spaces in the middle of text.) &gt;&gt;&gt; &gt;&gt;&gt; I did notice that there don&#x27;t seem to be any tests for the default (i....
- [Text-Decoration: Complete Guide - Progressive Robot](https://www.progressiverobot.com/2026/05/12/css-text-decoration) *(progressiverobot.com · 2026-05-12T22:37:38)*
  > <strong>With &lt;^&gt;text-decoration-skip&lt;^&gt; we can avoid having the decoration step over parts of the element its applied to</strong>. The possible values are &lt;^&gt;objects&lt;^&gt;, &lt;^&gt;spaces&lt;^&gt;, ...
- [CSS Text Decoration](https://www.w3schools.com/css/css_text_decoration.asp) *(w3schools.com)*
  > <strong>The CSS text-decoration property is used to control the appearance of decorative lines on text</strong>.

#### 🔗 Inbound Citations & Reverse Links

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/4832783806627840`)*
  > Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with a...
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or win...
- [\[css-text-decor-4\] Which font-size does a percentage text-decoration-thickness resolve against when the decoration propagates? · Issue #14544 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14544) *(github.com · 2026-09-30T05:48:27)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > [css-text-decor-4] Which font-size does a percentage text-decoration-thickness resolve against when the decoration propagates? · Issue #14544 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance...
- [\[css-text-decor\] \[css-pseudo\] default ‘text-decoration-color’ of ‘spelling-error’ and ‘grammar-error’ · Issue #7522 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7522) *(github.com · 2022-07-21T10:15:16)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > [css-text-decor] [css-pseudo] default ‘text-decoration-color’ of ‘spelling-error’ and ‘grammar-error’ · Issue #7522 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in...
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com · 2026-08-21T10:28:22)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#text-decoration-skip-spaces-property`)*
  > [css-text-decor-4] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in wit...

#### 📚 Platform Documentation & References

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)*
- [\[css-text-decor-4\] Which font-size does a percentage text-decoration-thickness resolve against when the decoration propagates? · Issue #14544 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14544) *(github.com)*
- [\[css-text-decor\] \[css-pseudo\] default ‘text-decoration-color’ of ‘spelling-error’ and ‘grammar-error’ · Issue #7522 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7522) *(github.com)*
- [\[css-text-decor-4\] text-decoration-skip-spaces · Issue #713 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/713) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-001.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-002.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-003.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-004.html)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=css-text-decor) (365 test path(s) matching `css-text-decor`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (63 found across 12 planned queries, 41 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (365 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5194473869017088-deprecate-and-remove-related-website-sets-rws"></a>
### [Deprecate and Remove: Related Website Sets (RWS)](https://chromestatus.com/feature/5194473869017088)

- **Milestone:** Chrome 153 (Deprecated)
- **ChromeStatus:** [chromestatus.com/feature/5194473869017088](https://chromestatus.com/feature/5194473869017088) · [chromestatuslite.com/feature/5194473869017088](https://chromestatuslite.com/feature/5194473869017088)
- **Specification:** [https://wicg.github.io/first-party-sets](https://wicg.github.io/first-party-sets)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Related Website Sets (RWS), formerly known as First Party Sets, provides a framework for developers to declare relationships among sites, to enable limited cross-site cookie access for specific, user-facing purposes. This is facilitated through the use of the Storage Access API (SAA) and requestStorageAccessFor (rSAFor). RWS was designed for use in a browser without third-party cookies. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove Related Website Sets (RWS).    Once RWS is deprecated; existing usage of SAA across contexts within a set will fall back to the API’s behavior outside of RWS as specified here. The difference in SAA behavior outside of RWS is well illustrated in our developer blogpost here.   The companion rSAFor API will also be deprecated via a separate intent.     We also intend to deprecate RWS-related Chrome Enterprise policies, as well as the chrome.privacy.relatedWebsiteSetsEnabled extension API; and will follow the relevant processes.

> **Motivation:** Chrome has announced that the current approach to third-party cookies will be maintained. RWS usage is indicated by the number of registered sets (currently at 71 sets), and the usage of the requestStorageAccessFor API (currently at about 0.95% of pageloads), and after this announcement we intend to archive the registration repository, and expect a...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 410)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Deprecate and Remove: Related Website Sets (RWS) is currently Deprecated in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **15 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGu1IVYTOqP85KeS0LInREelDEnngais2srWyLS3-byEevOUHK_ZDQ-Qz7DlqqHLAi_CQRbOUVVoAShBrD8Ue1dGGTb5BpjpOKoyZYy7fd74VwBFw0mN_UC_B1alNZf7rXvVqOiy1igtU8L) *(vertexaisearch.cloud.google.com)*
  > GitHub - GoogleChrome/related-website-sets: Note: This repository will be archived and will no longer accept new submissions. · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up ...
- [brave.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH53fgpixnHKTq0e8THK95ifsicqBuOZr7os06P-mg2MrEfP5vFy5h8RMDfaBbxu65w3zOO3P5GMj6N6J3jKkM1-elOzweNtNP46_7MJD7bRt7rRRHIlNl24EYzDKY3yaebTQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  Following Google Chrome’s strategic shift to maintain the current user-choice model for third-party cookies rather than deprecating them outright by default, Google initiated the **"Deprec...
- [privacysandstorm.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG5ShF6mt2CgZqcX1GyR07ljR3fmQq6lbLXd-2P7JDPJ2SG_TxZfH3K7NuvmNJi3MmQAARIP0c3JTjhYvRdW4WW10Dwy4J5W_A__f_RZEWT1RCSo4xpJfiQ-ahTnLC3m9WdJQu6uGR3rk_Ef3ucqe3_jRXS8Lmy7PI=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  Following Google Chrome’s strategic shift to maintain the current user-choice model for third-party cookies rather than deprecating them outright by default, Google initiated the **"Deprec...
- [digiday.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGybeUouyL-ZO0xcKl9NZwIntYV6MXQV8MvXb0UDsHnkxdjUs2L6wqgqT_pdjCH1poEnG-lnjTyZRm1GRhTgEk23TN20PSu378Ql4ZUEmnwBit2MeXlTZzkpGoyr74RnCgjk6vmOlgDJtpTIYfbGRW3F_UYfCce5kGAA3o2lFqXegZ6hTwDGJSg) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  Following Google Chrome’s strategic shift to maintain the current user-choice model for third-party cookies rather than deprecating them outright by default, Google initiated the **"Deprec...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE0loxWqIlfx7g-2tP42FTO3Z4JcQy7X9uXFUbU1gfzJiugIMgayFAyDBTTYwxjKpWTk80v9-U0lGZ5kDr1hOnSVzppzfTvrtasxCs59dqGEiIU7yBp6UG31a4yl_7_g0C_TUDfXvzU8GvQwmcn81N-B49yfo1hl0QejzMT2NPk-wYEJ4fUIaHqHmoTaKw0HjRr) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Deprecation  Following Google Chrome’s strategic shift to maintain the current user-choice model for third-party cookies rather than deprecating them outright by default, Google initiated the **"Deprec...
- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15155.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong> On Fri, Nov 7, 2025 at 2:47 PM Johann Hofmann &lt;[emai...
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15144.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Apologies, I used the wrong Chromestatus link (the original feature status), this one is correct: https://<strong>chromestatus.com/feature/5194473869017088</strong>

#### 📚 Platform Documentation & References

- [related-website-sets/RWS-Submission\_Guidelines.md at main · GoogleChrome/related-website-sets](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md) *(github.com)*
- [GitHub - GoogleChrome/related-website-sets: Note: This repository will be archived and will no longer accept new submissions. · GitHub](https://github.com/GoogleChrome/related-website-sets) *(github.com)*
- [privacy - Mozilla \| MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy) *(developer.mozilla.org)*
- [GitHub - privacycg/requestStorageAccessFor: A proposed extension to the Storage Access API and discussion of how it may be integrated with First-Party Sets. · GitHub](https://github.com/privacycg/requestStorageAccessFor) *(github.com)*
- [Related Website Sets - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API/Related_website_sets) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=deprecate) (27 test path(s) matching `deprecate`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 11 planned queries, 35 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 5 verified) · `Twitter / X API v2` *(HTTP 400)* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (27 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5198951632470016-algorithm-updates-in-webcrypto"></a>
### [Algorithm Updates in WebCrypto](https://chromestatus.com/feature/5198951632470016)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5198951632470016](https://chromestatus.com/feature/5198951632470016) · [chromestatuslite.com/feature/5198951632470016](https://chromestatuslite.com/feature/5198951632470016)
- **Specification:** [https://wicg.github.io/webcrypto-modern-algos](https://wicg.github.io/webcrypto-modern-algos)
- **Chromium Bug:** [https://issues.chromium.org/issues/450627017](https://issues.chromium.org/issues/450627017)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Neutral` · Safari: `Neutral`

#### 📝 Overview

Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in the Web Cryptography API. This will enable developers to have access browser-provided implementations of common quantum-resistant cryptographic algorithms standardized by NIST.  \* ML-KEM - 768, 1024 \* ML-DSA - 44, 65, 87 \* ChaCha20-Poly1305 \* X-Wing

> **Motivation:** Web Crypto exposes various low-level primitives, however none of the public/private key cryptography is currently quantum-resistant   Adding quantum-resistant cryptography as a primitive to the existing WebCrypto APIs allows Javascript cryptography libraries to automatically use browser-provided cryptography (which may be more securely implemented ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 400)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Analysis:** Algorithm Updates in WebCrypto is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Chromium-Led standards alignment and neutral developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."
- Standards Activity (Mozilla): Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "$DXY US Dollar Algo (@dxyusd\_index) on X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **7 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [$DXY US Dollar Algo (@dxyusd\_index) on X](https://twitter.com/dxyusd_index) — *Twitter / X (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Modern Algorithms in WebCrypto](https://github.com/WebKit/standards-positions/issues/641) [closed] `position: neutral`, `venue: WICG`
  > *Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."*
- **Mozilla:** [Request for Mozilla Position on Modern Algorithms in WebCrypto](https://github.com/mozilla/standards-positions/issues/1282) [closed] `venue: W3C CG`, `position: neutral`, `concerns: compatibility`, `concerns: venue`, `concerns: interoperability`, `concerns: performance`, `concerns: usability`, `concerns: API design`
  > *Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."*

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGuu1REdx5RIvhw13KENuUpJz6ARQjD7V5PgGDkpR6wmYdTXOsvo13kEoqwUHH-ZSFFkz7ZkAN1sPn_IPfRQrJH5pAhf-ZkRpd28CSV1kRNPqjrc07Li74q8OlDMqSmFjCdeXWhiAU=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE8E2xng4ahB7we9Jmp0C6unpAwwhuiE64xVWr9KB0Dzk_CK0_jEpjVsFCvr9kfiOt41utEEalU324FVw4Cwb0SycNHwGvhoTymUq2kmxgdlZe6RN4LkzZy5rT-8aYr1UbYneQ=) *(vertexaisearch.cloud.google.com)*
  > Modern Algorithms in the Web Cryptography API Modern Algorithms in the Web Cryptography API Draft Community Group Report 14 September 2026 Latest published version: none Latest editor's draft: https://wicg.github.io/webc...
- [cryptojedi.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGngdGRQ78T2tSDLEdogxVtYx7qrux37UFwBwvHUQ8TtjJPew8l_14G5ZZxhOYkKwrYmxCNmrgMYGP_4QSj_M2PBIFsY74JrdRmvPP_9AqyzbHTXpb1-iGZXYRdt8Ihrxm7vJ58iQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Algorithm Updates in WebCrypto"** introduces modern post-quantum algorithms and modern symmetric encryption directly into the native Web Cryptography API (`crypto.subtle`). Governed under t...
- [cloudflare.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH4IP0GacbAW9TFaz5K_vxdoAbpf3onCKRsKLA24spwhshsUKPjb8JojHQeWWPxtqrxrlztBkQmRdVZ0Xg_QCpQHVqT7A-6Q1Yxb9Be_mt7CNApspO2vIx_FMq3ETMSnd_IWrSw_xa97HjifImbMA0=) *(vertexaisearch.cloud.google.com)*
  > Support for modern cryptographic algorithms in Workers | Cloudflare Blog Skip to content Research Cloudflare Workers Cryptography Post-Quantum Research October 1, 2026 Support for modern cryptographic algorithms in Worke...
- [cloudflare.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHedJqJAq69PF2Q0VbzWXxLB7h7ubXrOcKlNGiG_3d2nnyAcPVYdaQASvBDs6i_u56wO4lLwHW9i4G8ZbM5eySkMHHoTHf9awvYc6oc1wyrCjZkHsrKI6jPBsl28Ua5jpHQCbvKv9wpNae7x0RFHWSR-FsiwI8_zzVumqMsx-sYlNyCbcjcgtj5Pc0nDJ0=) *(vertexaisearch.cloud.google.com)*
  > Web Crypto adds ML-KEM and ML-DSA support · Changelog Skip to content Docs Search Ctrl K Log in Dashboard Changelog New updates and improvements at Cloudflare. View RSS feeds Subscribe to RSS Back to all posts October 1,...
- [salesforce.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFwcN7EEa87onxOh0eyKOB8YtlAhKjFNk25KtTYho0dWk_MAbLFR6uf53f2WL2ScxaJkYNfJbf67lycAUzY9D4AN0zeYzU0J6MvC2by3bsEJ8AVjEBQY_9cjxVGFljBbiq1Vb12tPxkk8-LnM2fvZrkUdo9FPccwEq8VxfTQXjirX694rWkTJqwDmn9267uCMG5chB4EAtJq9-5NbE=) *(vertexaisearch.cloud.google.com)*
  > IdeaExchange Loading × Sorry to interrupt CSS Error Refresh

#### 🔗 Inbound Citations & Reverse Links

- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com · 2026-07-29T21:58:10)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > https://<strong>chromestatus.com/feature/5198951632470016</strong> · Reactions are currently unavailable · Sign up for free to join this conversation on GitHub. Already have an account? Sign in to comment · rowan-m · new...
- [New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1370) *(github.com · 2026-08-24T16:45:23)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > https://<strong>chromestatus.com/feature/5198951632470016</strong> · No idea. Reactions are currently unavailable · Sign up for free to join this conversation on GitHub. Already have an account? Sign in to comment · rowa...
- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5198951632470016</strong>?gate=5112952025907200
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Modern Crypto algos, https://<strong>chromestatus.com/feature/5198951632470016</strong>
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com · 2025-08-06T12:55:07)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Specification title Modern Algorithms in WebCrypto Specification or proposal URL (if available) https://<strong>wicg.github.io/webcrypto-modern-algos</strong>/ Explainer URL (if available) No response Proposal author(s) ...

#### 📚 Platform Documentation & References

- [Algorithm Updates in WebCrypto · Issue #1170 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1170) *(github.com)*
- [New WebCrypto Algorithms · Issue #1370 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1370) *(github.com)*
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com)*
- [script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo](https://github.com/servo/servo/pull/41615) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=algorithm) (196 test path(s) matching `algorithm`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (44 found across 7 planned queries, 22 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 13 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (196 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 6

---

<a id="6297362687066112-opaquerange"></a>
### [OpaqueRange](https://chromestatus.com/feature/6297362687066112)

- **Milestone:** Chrome 152 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6297362687066112](https://chromestatus.com/feature/6297362687066112) · [chromestatuslite.com/feature/6297362687066112](https://chromestatuslite.com/feature/6297362687066112)
- **Specification:** [https://github.com/whatwg/dom/pull/1404](https://github.com/whatwg/dom/pull/1404)
- **Chromium Bug:** [https://issues.chromium.org/issues/421421332](https://issues.chromium.org/issues/421421332)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Positive` · Safari: `Support`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/opaquerange) (Chrome: `—`, Firefox: `—`, Safari: `—`)

#### 📝 Overview

\`OpaqueRange\` represents a live span of text within a form control’s value, such as a \`&lt;textarea&gt;\` or text-based \`&lt;input&gt;\`, so developers can work with value text using range-like APIs.  It enables operations such as \`getBoundingClientRect()\`, \`getClientRects()\`, and integration with the CSS Custom Highlight API for UI such as inline suggestions, highlights, and anchored popovers. It preserves encapsulation by exposing only value offsets while returning \`null\` for \`startContainer\` and \`endContainer\`, so DOM endpoints and internal structure are not exposed.

> **Motivation:** Currently, developers can’t get accurate text geometry or apply the CSS Custom Highlight API to text inside native \`&lt;textarea&gt;\` and text-based \`&lt;input&gt;\` controls.  As a result, they often avoid native form controls and build editable \`&lt;div&gt;\`-based workarounds to anchor UI, such as autocomplete popovers, or to highlight matches. These workarounds re...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 400)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""OpaqueRange" "Custom Highlight""`, `""OpaqueRange" API textarea input"`, `""OpaqueRange" whatwg dom 1404"`
- **Analysis:** OpaqueRange has shipped enabled by default in Chromium 152 (Chrome and Edge), addressing a long-standing web platform gap by enabling live text ranges, geometry measurement, and CSS Custom Highlight API styling within native form controls. The specification has achieved broad vendor consensus across the WHATWG, W3C TAG, Mozilla, and Apple, eliminating brittle mirror-\`&lt;div&gt;\` and custom \`contenteditable\` workarounds. While currently limited in production to Chromium, active implementation in Gecko and WebKit points toward imminent multi-engine baseline support.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt OpaqueRange using progressive enhancement by feature-testing \`'createValueRange' in HTMLInputElement.prototype\` or checking the global \`window.OpaqueRange\`. Teams building caret-anchored suggestions or inline highlights should deploy native form controls with OpaqueRange for Chromium users while retaining mirror-element fallbacks or polyfills for Safari and Firefox until their implementations reach stable.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @stephanieyzhang: "Yes, the explainer is up to date with the dom and html spec PRs:  explainer: https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/OpaqueRange/e..."
- Standards Activity (Mozilla): Latest discussion from @jnjaeschke: "I think the proposal looks reasonable, implementation in Gecko is on its way...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **10 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [OpaqueRange: AbstractRange subtype for encapsulated content (&lt;input&gt;, &lt;textarea&gt;)](https://github.com/WebKit/standards-positions/issues/541) [closed] `position: support`, `topic: html`, `topic: dom`, `venue: WHATWG HTML Workstream`, `venue: WHATWG DOM Workstream`, `topic: forms`, `from: Microsoft`
  > *Latest discussion from @stephanieyzhang: "Yes, the explainer is up to date with the dom and html spec PRs:  explainer: https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/OpaqueRange/e..."*
- **Mozilla:** [OpaqueRange: AbstractRange subtype for encapsulated content (&lt;input&gt;, &lt;textarea&gt;)](https://github.com/mozilla/standards-positions/issues/1289) [closed] `venue: WHATWG`, `position: positive`, `topic: HTML`, `team: DOM`
  > *Latest discussion from @jnjaeschke: "I think the proposal looks reasonable, implementation in Gecko is on its way...."*
- **W3C TAG:** [Other Spec Review: OpaqueRange](https://github.com/w3ctag/design-reviews/issues/1206) [closed] `Venue: WHATWG`, `Progress: review complete`, `Resolution: satisfied`, `Review type: later review`, `Topic: DOM`
  > *Latest discussion from @lukewarlow: "Hi @stephanieyzhang, the TAG discussed this and are positive about this feature.  The use cases are solid and we’re glad to see the API design has evo..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1990256: Implement OpaqueRange](https://bugzilla.mozilla.org/show_bug.cgi?id=1990256) `[ASSIGNED]`
- **Mozilla (Gecko):** [Bug #2038248: \[meta\] Implement the OpaqueRange feature](https://bugzilla.mozilla.org/show_bug.cgi?id=2038248) `[NEW]`
- **Mozilla (Gecko):** [Bug #2060227: Use OpaqueRange API to position InplaceEditor popup](https://bugzilla.mozilla.org/show_bug.cgi?id=2060227) `[NEW]`
- **Mozilla (Gecko):** [Bug #2076396: \[wpt-sync\] Sync PR 63041 - Move OpaqueRange tests out of tentative](https://bugzilla.mozilla.org/show_bug.cgi?id=2076396) `[NEW]`
- **WebKit (Safari):** [Bug #299375: Implement OpaqueRange](https://bugs.webkit.org/show_bug.cgi?id=299375) `[NEW]`

#### 📦 Polyfills & NPM Ecosystem

- [rich-input](https://www.npmjs.com/package/rich-input) `v1.4.0` — A rich input field with keyword-based autocomplete and in-input highlighting powered by <datalist>, OpaqueRange, and the Custom Highlight API

#### 📰 Ecosystem Blogs & Articles

- [youtube.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEAvt-2bJEzI4xa7irshIfQnyDcmBCHFdyJX_kiHvLcA0Bi2fCp_CvxuaVqTAnFWfKChwWuxb9-Qvy1Iv6QBLk2hh7OPVDpNy2Gn9HAIDO18p92dBpLbuiqUUp1oMX8MC1x) *(vertexaisearch.cloud.google.com)*
  > - YouTube About Press Copyright Contact us Creators Advertise Developers Terms Privacy Policy & Safety How YouTube works Test new features NFL Sunday Ticket &copy; 2026 Google LLC
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGeUaZRy6P4yDkccCoQd3znyuFAViXMOV4v_xkxDHt4znV2u3hZzIiLl-F81E4QiIF6hr5PT0kcE9QxESRu93SWRyXy3F7RStVFHIKpPdqZtV_daVuPnnLnfhklJctkdNpe0KFw4TYvwgRVgBNTjTSDXTlZEQ28urXKnVeRHJ9uURA_kSG6O_DAbc4=) *(vertexaisearch.cloud.google.com)*
  > MSEdgeExplainers/OpaqueRange/explainer.md at main · MicrosoftEdge/MSEdgeExplainers · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anot...
- [olliewilliams.xyz](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGGZwrbblb-XjRGYlCIg8RbugoVys4NHfzooaWRu3OnSd0jk_BhqzvAHjyny-zD3bPyKF2YQmpCofUxbUqmEZWcRLmrtZ0-w2S1yATQYO2ckD1ORFajfjm8W1X8RQI5LAhp) *(vertexaisearch.cloud.google.com)*
  > Highlighting a range of text inside an input or textarea Aug 19, 2026 Highlighting a range of text inside an input or textarea This article will cover using the OpaqueRange API together with the Custom Highlight API to s...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHLfYgrqY0PMwJtsgD7JccBxLbV315E6TQtM8B5VCpHZaFUkChQytSSmxgr3gvP_roT2zRZBbh2QE-ieN7MGUj6whYFlsaHPRuwT7izY3O46nSGplitxbLpdEktJgIlgZ98PA==) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [windows.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGuxu5K1Ng3Z9-0cC86AQwqEKYsAS-ad74aAwjJ09UecyQsqT8n3UqvERR992N5r_ehC5qOTDl3viW-qOvLFXcY78VzORqC8x5tHKjRCpQ1nJixGKOUe3bOp_qxFf-f8sOLIOV1mFfk8FrXB2maNP96OdDmEbZR463XNy-VDA2z2UFIDuxEOxPcp2RlzAh6vpIWFGmES1-r3-43lkkQlFsFAbo2ZdHXbpFN_mr5xi8DiquaikqjmxNn7Q==) *(vertexaisearch.cloud.google.com)*
  > New in Edge for developers – Create better components and make your site agent-ready - Microsoft Edge Blog Skip to main content Skip to main content Windows Blogs Windows Experience Devices Windows Developer Microsoft Ed...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFt9DYzyiIy4k4ra6Q9gDeGMn4q9t-LJw5pms_vqG6C3BaVDCoQqOr1tbc6bU2sJ7iwSDLKw8d2qyBHoutzBYoAa9U9x4Ai4VoxFrhkjafJNijrePkOt25_sf-xY1jytEEVtyqHnokNrk4L1W_A9zefZxoOetoKt8HTXdbh4EqA_FrwxPu2rF1_8KkfYR77Zalw0U4PoVfdMXf5U_gFBg==) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge Origin Trials Skip to main content Sign-in to GitHub OpaqueRange OpaqueRange lets developers create live ranges over text inside <input> and <textarea> elements that automatically update as the user edits....

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Ship: OpaqueRange](https://groups.google.com/a/chromium.org/g/blink-dev/c/otEJ9AacRg4) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/6297362687066112`)*
  > https://<strong>chromestatus.com/feature/6297362687066112</strong>?gate=6322608320282624 · Links to previous Intent discussions ·
- [Re: \[blink-dev\] Re: Intent to Ship: OpaqueRange](http://www.mail-archive.com/blink-dev@chromium.org/msg16545.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/OpaqueRange/explainer.md`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Best, &gt;&gt;&gt; &gt;&gt;&gt; Alex &gt;&gt;&gt; &gt;&gt;&gt; On Wednesday, April 29, 2026 at 12:12:53 PM UTC-7 Stephanie Zhang wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; *Contact emails* &gt;&gt;&gt...
- [Intent to Experiment: OpaqueRange](https://groups.google.com/a/chromium.org/g/blink-dev/c/jrIXiBUbQm0) *(groups.google.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/OpaqueRange/explainer.md`)*
  > Explainer · https://<strong>github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/OpaqueRange/explainer.md</strong> · Specification · https://github.com/whatwg/dom/pull/1404 · Summary · OpaqueRange represents a live span o...
- [\[blink-dev\] Re: Intent to Experiment: OpaqueRange](http://www.mail-archive.com/blink-dev@chromium.org/msg16153.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/OpaqueRange/explainer.md`)*
  > E.g., are there partners lined up waiting to try OpaqueRange that we can learn from? Regardless, LGTM1 to experiment for 3 releases. On Monday, March 23, 2026 at 11:29:56 AM UTC-7 Stephanie Zhang wrote: &gt; *Contact ema...
- [\[blink-dev\] Intent to Experiment: OpaqueRange](http://www.mail-archive.com/blink-dev@chromium.org/msg16152.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/OpaqueRange/explainer.md`)*
  > Explainer https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/OpaqueRange/explainer.md Specification https://github.com/whatwg/dom/pull/1404 Summary <strong>OpaqueRange represents a live span of text within a for...

#### 📚 Platform Documentation & References

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-05-11 (public-html@w3.org from May 2026)](https://lists.w3.org/Archives/Public/public-html/2026May/0001.html) *(lists.w3.org)*
- [OpaqueRange API · Issue #3949 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3949) *(github.com)*
- [Add BCD support data for the OpaqueRange API (Chrome/Edge 152) by captainbrosset · Pull Request #30715 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30715) *(github.com)*
- [OpaqueRange · Issue #579 · web-platform-dx/developer-signals](https://github.com/web-platform-dx/developer-signals/issues/579) *(github.com)*
- [GitHub - bramus/rich-input: A rich input field with keyword-based autocomplete and in-input highlighting powered by &lt;datalist&gt;, OpaqueRange, and the Custom Highlight API · GitHub](https://github.com/bramus/rich-input) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [OpaqueRange Demo](https://github.com/MicrosoftEdge/Demos/tree/main/opaque-range)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=opaquerange) (19 test path(s) matching `opaquerange`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (67 found across 12 planned queries, 25 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (5 found, 5 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (3 found, 1 verified) · `Web Platform Tests (wpt.fyi)` (19 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 11

---

<a id="5235261159112704-webtransport-send-groups-and-stream-prioritization"></a>
### [WebTransport send groups and stream prioritization](https://chromestatus.com/feature/5235261159112704)

- **Milestone:** Chrome 153 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5235261159112704](https://chromestatus.com/feature/5235261159112704) · [chromestatuslite.com/feature/5235261159112704](https://chromestatuslite.com/feature/5235261159112704)
- **Specification:** [https://www.w3.org/TR/webtransport/#webtransportsendstream](https://www.w3.org/TR/webtransport/#webtransportsendstream)
- **Chromium Bug:** [https://crbug.com/568825278](https://crbug.com/568825278)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Under consideration` · Safari: `Shipped/Shipping`

#### 📝 Overview

WebTransport already lets sites send data through WritableStreams. This feature will let applications group outgoing streams, prioritize data within each group, and view sending statistics for streams and groups, while preserving the ability to transfer streams.

> **Motivation:** Applications commonly send multiple independent streams over one WebTransport session. Existing outgoing streams already support writing, but the plain WritableStream representation does not expose stream grouping, runtime prioritization, or per-stream delivery statistics. This feature adds WebTransportSendGroup to organize related streams, WebTran...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 400)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""send groups" "webtransport" mozilla standards-positions"`, `""WebTransport send groups" OR "WebTransportSendGroup" blink-dev"`, `""WebTransportSendGroup" OR "WebTransportSendStream""`, `""WebTransport" "send groups" "prioritization""`, `""send groups" "webtransport" webkit standards-positions"`
- **Analysis:** Send groups and stream prioritization address a key architectural gap in WebTransport by introducing hierarchical scheduling, send-order control, and granular transmission metrics via WebTransportSendGroup and WebTransportSendStream. The specification is advancing solidly through the W3C WebTransport Working Group, with Gecko having already shipped support in Firefox 155 and Chromium actively evaluating it behind a developer trial flag in Chrome 153. Alignment is strong across vendors due to its critical necessity for next-generation streaming protocols such as Media over QUIC (MoQ).

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams building low-latency media or bidirectional gaming runtimes should test send groups and getStats() in Chromium under developer trial flags and validate interoperability against Firefox. Maintain defensive feature checks (e.g., verifying 'createSendGroup' in WebTransport.prototype) and retain software-level queue prioritization as a fallback until Baseline indexing is reached.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **48 new articles/tutorials** published

#### 📦 Polyfills & NPM Ecosystem

- [thread-stream](https://www.npmjs.com/package/thread-stream) `v4.2.0` — A streaming way to send data to a Node.js Worker Thread

#### 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH0mVpFLmmV9oBQl2MvONLYbEVRCoVDq8ix37Q_vEbTtx-lcyN0AMlft7k-KBG9HnO6VZv1-E3PnWfTe4wqFDZVvu5J-9bxrS8rasGUAi4XsonSHDyu9mrHdoIXwlUaehhSNPnDfFranDDhd6q_A2Us) *(vertexaisearch.cloud.google.com)*
  > webtransport/explainer.md at main · w3c/webtransport · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to r...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGFzAOCVZ0I5tlyB4PyyzHRMVev7s6Pv3w2Lf8FZnDxum4hEDJjynoiR5XSRuIxRHadiYlkGDlE5yBTsVkWwD9pR8WWRpF2Lb8uklLQVKKimRTWdLWb7T67--t7OoTkUd1HBr5nZlWw2aLcl_9Qr89jp_6M_BLM0HL5qYNF91enu4b1RA==) *(vertexaisearch.cloud.google.com)*
  > WebTransport: createSendGroup() method - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs WebTransport createSendGroup() Theme OS default Light Dark English (US) Remember language Learn more...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHvDfnZGLL_qscdbHuP6Qq2c2iUg9Cx9SDgak6oQKHKxFi9wzVF_XxrtuQs_zE5KwdxK6DeogbrzlqisrPQAF6QTCT8mV8OUi-RisCL1gQqKK1yOYdhYdfuj647gDNeG3a_fz8DSTBduMvBKSRun8ViiT62BIKd4d8ci7ac50QlwB3kAUvIDZ-RqqbajJ2mIAbjHJjJTT0=) *(vertexaisearch.cloud.google.com)*
  > WebTransportDatagramDuplexStream: createWritable() method - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs WebTransportDatagramDuplexStream createWritable() Theme OS default Light Dark Eng...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFMcXJCbuuq8yhSlAgqoDfdFhQMwNCVDv4_lhe5CPeiSsr4OmKncRywOBAHkXdfNAe5hUJuRhufhEBXBmiwDXBkK2JxNXRqazEwk6oVy_viIL90tCb_9QmSaA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **WebTransport Send Groups and Stream Prioritization** introduces a hierarchical bandwidth-scheduling and metrics model for WebTransport streams and datagrams:  * **Send Groups (`WebTransportS...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHHjtorE6pWGvbOf719Utw-vir7O4U199OyNJUGdjFdYyBok3jLRBkvsYrsLexBWjXsj-j3RPRi6dz0WdNoqTh3Vf2rryh2UExjdiFYzooReef2T1fN4xhKud23Vt_iiZPwgXoAzu4BOqQy8ZwR_1CgKqC0zDnwGWI-ZjeGU1JSY8sJNfDf43Lw-e1G3aTR) *(vertexaisearch.cloud.google.com)*
  > WebTransportDatagramsWritable: sendGroup property - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs WebTransportDatagramsWritable sendGroup Theme OS default Light Dark English (US) Remember...
- [deno.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGTNNIPsxtTUVkDXRzjGFt0cnnZGbbhC2ZTn0tiz8pWWtF8VwDhm9C_j7zwHySjg81DFysWUfBxQmSxkv-acXexwjXMIxkBy0Hwtsw_jcH4t5k6LI1RjOWB9pOQ17Y=) *(vertexaisearch.cloud.google.com)*
  > Platform - Web documentation | Deno Docs Skip to main content ⌘K ↑↓ Up or down to navigate ↵ Enter to select ESC Escape to close Toggle Theme Toggle navigation menu Web Platform Platform A set of essential interfaces and...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Experiment: WebTransport over HTTP/3](https://groups.google.com/a/chromium.org/g/blink-dev/c/aaLFxzw5zL4/m/H3V_l-qlAgAJ) *(groups.google.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#6-sending-video-one-stream-per-frame-or-segment-with-send-order`)*
  > https://<strong>github.com/w3c/webtransport/blob/main/explainer.md</strong> · Design docs/spec · Specification: https://w3c.github.io/webtransport/#web-transport · https://docs.google.com/document/d/1UgviRBnZkMUq4OKcsAJv...
- [Intent to extend the origin trial: WebTransport over HTTP/3](https://groups.google.com/a/chromium.org/g/blink-dev/c/JHZLOnRkRhk/m/Eh5tHLg-BwAJ) *(groups.google.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#6-sending-video-one-stream-per-frame-or-segment-with-send-order`)*
  > https://<strong>github.com/w3c/webtransport/blob/main/explainer.md</strong> · Design docs/spec · Specification: https://w3c.github.io/webtransport/#web-transport · https://docs.google.com/document/d/1UgviRBnZkMUq4OKcsAJv...
- [Intent to Prototype and Ship: WebTransport BYOB readers](https://groups.google.com/a/chromium.org/g/blink-dev/c/18ZdUE1B_zg/m/2JFujuSpBQAJ) *(groups.google.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#6-sending-video-one-stream-per-frame-or-segment-with-send-order`)*
  > <strong>https://github.com/w3c/webtransport/blob/main/explainer.md</strong> · https://github.com/w3c/webtransport/issues/35 · https://www.w3.org/TR/webtransport · https://streams.spec.whatwg.org/#readablestreambyobreader...
- [1709355 - (WebTransport) \[meta\] WebTransport](https://bugzilla.mozilla.org/show_bug.cgi?id=1709355) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#6-sending-video-one-stream-per-frame-or-segment-with-send-order`)*
  > WebTransport (https://w3c.gith... (https://github.com/w3c/webtransport/blob/main/explainer.md) notes, <strong>it enables multiple use-cases that are hard or impossible to handle without it, especially for Gaming and live...
- [Intent to Ship: WebTransport serverCertificateHashes option](https://groups.google.com/a/chromium.org/g/blink-dev/c/m0v9XiwKA4M/m/GtMq9j_iAAAJ) *(groups.google.com · 2022-01-20T00:00:00)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#6-sending-video-one-stream-per-frame-or-segment-with-send-order`)*
  > https://<strong>github.com/w3c/webtransport/blob/main/explainer.md</strong> · Spec · https://w3c.github.io/webtransport/#dom-webtransportoptions-servercertificatehashes · WebTransport has been already covered by a series...

#### 📚 Platform Documentation & References

- [1709355 - (WebTransport) \[meta\] WebTransport](https://bugzilla.mozilla.org/show_bug.cgi?id=1709355) *(bugzilla.mozilla.org)*
- [WebTransport · Issue #18 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/18) *(github.com)*
- [webtransport/index.bs at main · w3c/webtransport](https://github.com/w3c/webtransport/blob/main/index.bs) *(github.com)*
- [GitHub - adriancable/webtransport-go: Lightweight but fully-capable WebTransport server for Go · GitHub](https://github.com/adriancable/webtransport-go) *(github.com)*
- [WebTransportSendStream](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendStream) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webtransport) (119 test path(s) matching `webtransport`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (34 found across 8 planned queries, 20 verified) · `Google Search Grounding (gemini-3.8-flash)` (16 found, 16 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 1 verified) · `Web Platform Tests (wpt.fyi)` (119 items)
- **Content Inspected:** Spec: ✔ · Explainers: 3 · Standards Comments Read: 0

---

<a id="5109685301673984-css-scroll-marker-group-modes"></a>
### [CSS scroll-marker-group modes](https://chromestatus.com/feature/5109685301673984)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5109685301673984](https://chromestatus.com/feature/5109685301673984) · [chromestatuslite.com/feature/5109685301673984](https://chromestatuslite.com/feature/5109685301673984)
- **Specification:** [https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes](https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes)
- **Chromium Bug:** [https://issues.chromium.org/issues/425931511](https://issues.chromium.org/issues/425931511)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The scroll-marker-group property is enhaced to support modes: 1) 'links' - The generated ::scroll-marker-group operates in "links" mode, functioning like a navigation list. This is the default mode if omitted. 2) 'tabs' - The generated ::scroll-marker-group operates in "tabs" mode, functioning like a tablist.  Each mode changes focus order and accessibility behavior of ::scroll-marker-group and ::scroll-markers, following WAI-ARIA patterns.  More details: # The links mode (default) This mode is designed to mimic standard Navigation Landmarks combined with fragment anchors.  ## Semantic roles The ::scroll-marker-group takes on the navigation role, and the ::scroll-marker elements take on the link role. This perfectly maps to the &lt;nav&gt; + &lt;a&gt; structural pattern.  ## Keyboard navigation All ::scroll-marker elements are sequential tab stops, natively acting like a list of standard anchor links.  ## Unaffected targets The originating elements do not get forced into any role, leaving the document's natural semantic structure intact.  ## Activation focus management When a link marker is activated, it sets the sequential focus navigation starting point to the target element (the originating element), and focus is lost from the marker. This mimics the native behavior of clicking a standard internal &lt;a href="#target"&gt; link.  # The tabs mode This mode is designed to natively replicate the Tabs Pattern and serves as the interactive foundation for the Tabbed Carousel Pattern.  ## Semantic roles The ::scroll-marker-group is implicitly assigned the tablist role, ::scroll-marker elements act as tab roles, and their originating elements get the tabpanel role. This mirrors the required WAI-ARIA Tabs structure.  ## Keyboard navigation (roving tabindex) It follows the complex keyboard interactions outlined in standard practices. Only the active ::scroll-marker acts as a tab stop. Users use arrow keys to navigate the focusgroup (switching between markers), preventing the "tab trap" of having to tab through 20 carousel dots.  ## Focus scope management The marker acts as a focus navigation scope owner. Pressing Tab from the active marker moves focus directly into the active tabpanel content, matching the specification for tabbed interfaces.  ## Tree pruning Content from inactive tabs is explicitly hidden from the accessibility tree. This mimics the expected behavior of aria-hidden="true" or inert on inactive tab panels, saving developers from manually scripting state changes.  ## Activation focus When a marker is activated, focus is retained on the marker, which is exactly how standard tabs operate.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 395)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""scroll-marker-group" mode "tabs" "links" css"`
- **Analysis:** Shipped enabled by default in Chrome 154, CSS \`scroll-marker-group\` modes allow developers to explicitly toggle between \`links\` (navigation landmarks and fragment anchors) and \`tabs\` (tablist/tabpanel with roving tabindex and accessibility tree pruning). The enhancement directly addresses long-standing usability and accessibility criticisms of CSS carousels, but currently exists as a Chromium-only implementation without Baseline interoperability.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams should treat \`scroll-marker-group\` modes as an experimental, progressive enhancement rather than a baseline solution. If experimenting with CSS-driven carousels or tabs in Chromium, ensure feature queries or accessible HTML/JS fallbacks remain in place for Safari and Firefox users.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Some issues that seem pretty fundamental: - https://github.com/w3c/csswg-drafts/issues/12240 - https://github.com/w3c/csswg-drafts/issues/12269..."
- Standards Activity (Mozilla): Latest discussion from @jcsteh: "I have some significant accessibility concerns regarding CSS inert specifically. See https://github.com/w3ctag/design-reviews/issues/1055#issuecomment..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "New in Chrome 154 \| Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **23 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [New in Chrome 154 \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2102804599325528424) — *Twitter / X (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Overflow Navigation Controls](https://github.com/WebKit/standards-positions/issues/447) [open] `topic: css`, `concerns: internationalization`, `venue: W3C CSS WG`, `from: Google`, `concerns: accessibility`
  > *Latest discussion from @fantasai: "Some issues that seem pretty fundamental: - https://github.com/w3c/csswg-drafts/issues/12240 - https://github.com/w3c/csswg-drafts/issues/12269..."*
- **Mozilla:** [CSS Overflow Navigation Controls](https://github.com/mozilla/standards-positions/issues/1161) [open] `venue: W3C`, `topic: CSS`, `team: Layout`, `team: Accessibility`
  > *Latest discussion from @jcsteh: "I have some significant accessibility concerns regarding CSS inert specifically. See https://github.com/w3ctag/design-reviews/issues/1055#issuecomment..."*

#### 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg17237.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS scroll-marker-group modes Robert Flack Wed, 19 Aug 2026 16:39:42 -0700 On Wed, Jul 2...
- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS scroll-marker-group modes Chromestatus Wed, 15 Jul 2026 12:40:07 -0700 Contact emails [email...
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > Chrome 154 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربي...
- [New in Chrome 154 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > New in Chrome 154 | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة...
- [Common Issues and Workarounds for CSS scroll-marker-group](https://runebook.dev/en/docs/css/scroll-marker-group) *(runebook.dev)*
  > Common Issues and Workarounds for CSS scroll-marker-group Common Issues and Workarounds for CSS scroll-marker-group 2025-09-09 This property is designed to allow developers to style the scroll markers of an element, whic...
- [CSS scroll-behavior property](https://www.w3schools.com/cssref/pr_scroll-behavior.php) *(w3schools.com)*
  > Add a smooth scrolling effect to the document.

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg17237.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > Re: [blink-dev] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS scroll-marker-group modes Robert Flack Wed, 19 Aug 2026 16:39:42 -0700 On Wed, Jul 2...
- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or windo...
- [Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss](https://github.com/parcel-bundler/lightningcss/issues/1184) *(github.com · 2026-03-16T06:55:52)* *(Cites: `https://drafts.csswg.org/css-overflow-5/#scroll-marker-modes`)*
  > Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another...

#### 📚 Platform Documentation & References

- [csswg-drafts/css-overflow-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-overflow-5/Overview.bs) *(github.com)*
- [Support CSS Overflow Module Level 5 · Issue #1184 · parcel-bundler/lightningcss](https://github.com/parcel-bundler/lightningcss/issues/1184) *(github.com)*
- [\`scroll-marker-group\` CSS property flagged as 'Unknown property' · Issue #120 · microsoft/vscode-custom-data](https://github.com/microsoft/vscode-custom-data/issues/120) *(github.com)*
- [scroll-marker-group CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-marker-group) *(developer.mozilla.org)*
- [scroll-marker-group CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker-group) *(developer.mozilla.org)*

#### 🧪 Interactive Demos & Samples

- [CSS scroll-marker-group modes Demo](https://codepen.io/Daniil-Sakhapov/pen/ogzQQYZ)
- [CSS scroll-marker-group modes Demo](https://codepen.io/Daniil-Sakhapov/pen/ZYpmmJE)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=css-overflow) (906 test path(s) matching `css-overflow`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 13 planned queries, 35 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (906 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 7

---

<a id="6264645053710336-expose-the-autocorrect-global-html-attribute"></a>
### [Expose the 'autocorrect' global html attribute](https://chromestatus.com/feature/6264645053710336)

- **Milestone:** Chrome 152 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6264645053710336](https://chromestatus.com/feature/6264645053710336) · [chromestatuslite.com/feature/6264645053710336](https://chromestatuslite.com/feature/6264645053710336)
- **Specification:** [https://html.spec.whatwg.org/multipage/interaction.html#autocorrection](https://html.spec.whatwg.org/multipage/interaction.html#autocorrection)
- **Chromium Bug:** [https://issues.chromium.org/issues/40871769](https://issues.chromium.org/issues/40871769)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`

#### 📝 Overview

The HTML autocorrect attribute allows web authors to control whether autocorrection should be applied to user input in editable elements including &lt;input&gt;, &lt;textarea&gt;, and contenteditable hosts. The feature makes the 'autocorrect' attribute to be exposed to web authors.

> **Motivation:** The 'autocorrect' HTML attribute has been implemented long ago, but since it's not defined in any exported IDL, websites fail to detected it as supported.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 395)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""autocorrect" "HTMLElement" "html.spec.whatwg.org" IDL"`, `""autocorrect" attribute contenteditable safari chrome firefox"`
- **Analysis:** Chrome 152 officially exposes the global 'autocorrect' HTML attribute and reflects it via IDL on HTMLElement.prototype, closing a long-standing standards gap. While browsers have supported the markup attribute informally for years, standardized reflection on HTMLElement allows reliable feature detection in JavaScript without brittle workarounds. With Safari and Firefox already aligned, the feature achieves cross-browser interoperability and reaches Baseline status.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams can safely use autocorrect="off" as progressive enhancement across inputs, textareas, and contenteditable elements immediately. To dynamically toggle or inspect support in client-side code, verify 'autocorrect' in HTMLElement.prototype before applying programmatic behaviors.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **21 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Expose the 'autocorrect' global html attribute](https://chromestatus.com/feature/6264645053710336) *(chromestatus.com · 2026-05-06T00:00:00)*
  > Chrome Platform Status
- [\[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16574.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Chromestatus Fri, 22 May 2026 00...
- [Re: \[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16575.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Daniel Bratell Fri, 22 M...
- [How to Disable Autocorrect in HTML (Beginner's Guide)](https://www.mohammedcode.com/en/disable-autocorrect-in-html) *(mohammedcode.com · 2026-09-12T19:25:12)*
  > How to Disable Autocorrect in HTML (Beginner&#039;s Guide) محمد كود | دروس ومقالات في JavaScript و CSS وتصميم الويب autocorrect HTML attribute: A Beginner&#8217;s Guide to Controlling Auto-Correction in Forms 👏 0 إعلان ...
- [HTML spellcheck Attribute](https://www.w3schools.com/tags/att_spellcheck.asp) *(w3schools.com)*
  > HTML spellcheck Attribute Menu Search field &times; See More NEW W3Schools app iOS & Android App Sign In Sign Up --> user-anonymous --> --> &#x2605; +1 --> My W3Schools --> user-authenticated --> Spaces Upgrade Paid Cour...
- [HTML Global spellcheck Attribute](https://www.w3schools.com/tags/att_global_spellcheck.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.

#### 🔗 Inbound Citations & Reverse Links

- [Drag and Drop using WHATWG implementation. https://html.spec.whatwg.org/multipage/interaction.html#dnd · GitHub](https://gist.github.com/gajus/fd6a08b43d2a80a96c2b) *(gist.github.com)* *(Cites: `https://html.spec.whatwg.org/multipage/interaction.html#autocorrection`)*
  > Drag and Drop using WHATWG implementation. https://html.spec.whatwg.org/multipage/interaction.html#dnd · GitHub Skip to content --> Search Gists Search Gists Sign in Sign up You signed in with another tab or window. Relo...
- [lint(a11y/no-aria-hidden-on-focusable): \`inert\`, \`disabled\` and \`type="hidden"\` elements are reported as focusable · Issue #7977 · ubugeeei-prod/vize](https://github.com/ubugeeei-prod/vize/issues/7977) *(github.com · 2026-10-05T04:00:32)* *(Cites: `https://html.spec.whatwg.org/multipage/interaction.html#autocorrection`)*
  > lint(a11y/no-aria-hidden-on-focusable): `inert`, `disabled` and `type="hidden"` elements are reported as focusable · Issue #7977 · ubugeeei-prod/vize · GitHub Skip to content Navigation Menu Sign in Appearance settings S...
- [Should non-modal top layer elements that come after modal dialogs also escape inertness? · Issue #10811 · whatwg/html](https://github.com/whatwg/html/issues/10811) *(github.com · 2024-12-02T19:58:08)* *(Cites: `https://html.spec.whatwg.org/multipage/interaction.html#autocorrection`)*
  > Should non-modal top layer elements that come after modal dialogs also escape inertness? · Issue #10811 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearan...

#### 📚 Platform Documentation & References

- [Drag and Drop using WHATWG implementation. https://html.spec.whatwg.org/multipage/interaction.html#dnd · GitHub](https://gist.github.com/gajus/fd6a08b43d2a80a96c2b) *(gist.github.com)*
- [lint(a11y/no-aria-hidden-on-focusable): \`inert\`, \`disabled\` and \`type="hidden"\` elements are reported as focusable · Issue #7977 · ubugeeei-prod/vize](https://github.com/ubugeeei-prod/vize/issues/7977) *(github.com)*
- [Should non-modal top layer elements that come after modal dialogs also escape inertness? · Issue #10811 · whatwg/html](https://github.com/whatwg/html/issues/10811) *(github.com)*
- [autocorrect HTML global attribute - HTML \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocorrect) *(developer.mozilla.org)*
- [Add the autocorrect attribute by whsieh · Pull Request #5841 · whatwg/html](https://github.com/whatwg/html/pull/5841) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Expose the 'autocorrect' global html attribute Demo](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autocorrect#examples)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=interaction) (275 test path(s) matching `interaction`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (48 found across 11 planned queries, 36 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (275 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5070160203481088-relative-alpha-colors-css-color-5-alpha-function"></a>
### [Relative Alpha Colors (CSS Color 5 alpha() function)](https://chromestatus.com/feature/5070160203481088)

- **Milestone:** Chrome 152 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5070160203481088](https://chromestatus.com/feature/5070160203481088) · [chromestatuslite.com/feature/5070160203481088](https://chromestatuslite.com/feature/5070160203481088)
- **Specification:** [https://drafts.csswg.org/css-color-5/#relative-alpha](https://drafts.csswg.org/css-color-5/#relative-alpha)
- **Chromium Bug:** [https://issues.chromium.org/issues/492246715](https://issues.chromium.org/issues/492246715)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `Support`

#### 📝 Overview

Relative alpha colors refer to an origin color, and only change the alpha channel. The meaning of alpha channels is defined in CSS Color 4 § 4.2 Representing Transparency in Colors: the &lt;alpha-value&gt; syntax.

> **Motivation:** Relative alpha colors provide a direct CSS way to derive a translucent version of an existing color without rewriting its color channels. Authors currently need to duplicate component values or create separate precomputed tokens when they want “the same color, different opacity.” The CSS Color 5 alpha() function preserves the original color compone...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 395)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Relative Alpha Colors (CSS Color 5 alpha() function) is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @yisibl: "@nt1m Thanks!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "@sitnik\_en@mastodon.social (@sitnikcode) on X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **4 new community discussions** found
- 📰 **18 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [@sitnik\_en@mastodon.social (@sitnikcode) on X](https://twitter.com/sitnikcode/status/1470754445411729415) — *Twitter / X by @sitnikcode (0 likes/RTs, 0 replies)*
- 🐦 [X on X / X](https://twitter.com/sindresorhus/status/991610996589346817) — *Twitter / X by @sindresorhus (0 likes/RTs, 0 replies)*
- 🐦 [Base Colors (@base\_colors) / X](https://twitter.com/base_colors) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [Chris Lilley @svgeesus@mastodon.social on X: "Today I added a gamut volume comparison to CSS Color 4. Display P3 is 50% larger than sRGB! So using sRGB you miss out on 33% of displayable colors (the most saturated ones!)" / X](https://twitter.com/svgeesus/status/1220029106248716288) — *Twitter / X by @svgeesus (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Relative Alpha Colors](https://github.com/WebKit/standards-positions/issues/657) [closed] `position: support`, `topic: css`, `venue: W3C CSS WG`
  > *Latest discussion from @yisibl: "@nt1m Thanks!..."*

#### 📦 Polyfills & NPM Ecosystem

- [@csstools/postcss-alpha-function](https://www.npmjs.com/package/@csstools/postcss-alpha-function) `v2.0.16` — Use the alpha() function in CSS

#### 📰 Ecosystem Blogs & Articles

- [Relative Alpha Colors (CSS Color 5 alpha() function)](https://chromestatus.com/feature/5070160203481088) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Intent to Prototype: Relative Alpha Colors (CSS Color 5 alpha() function)](https://groups.google.com/a/chromium.org/g/blink-dev/c/E6mcKG39EN8) *(groups.google.com · 2026-03-14T00:00:00)*
  > Motivation Relative alpha colors <strong>provide a direct CSS way to derive a translucent version of an existing color without rewriting its color channels</strong>. Authors currently need to duplicate component values o...
- [\[blink-dev\] Intent to Ship: Relative Alpha Colors (CSS Color 5 alpha() function)](http://www.mail-archive.com/blink-dev@chromium.org/msg16605.html) *(mail-archive.com)*
  > Blink component Blink&gt;CSS Web Feature ... Relative alpha colors <strong>provide a direct CSS way to derive a translucent version of an existing color without rewriting its color channels</strong>. Authors currently ne...
- [\[blink-dev\] Re: Intent to Ship: Relative Alpha Colors (CSS Color 5 alpha() function)](http://www.mail-archive.com/blink-dev@chromium.org/msg16619.html) *(mail-archive.com)*
  > &gt; &gt; *Blink component* &gt; Blink&gt;CSS ... &gt; Missing feature &gt; &gt; *Motivation* &gt; Relative alpha colors <strong>provide a direct CSS way to derive a translucent &gt; version of an existing color without ...
- [Re: \[blink-dev\] Re: Intent to Ship: Relative Alpha Colors (CSS Color 5 alpha() function)](http://www.mail-archive.com/blink-dev@chromium.org/msg16636.html) *(mail-archive.com)*
  > *Blink component* Blink&gt;CSS &lt;https://issues.chromium.org/issues?q=customfield1222907:&quot;Blink&gt;CSS&quot;&gt; *Web Feature ID* Missing feature *Motivation* Relative alpha colors <strong>provide a direct CSS way...
- [CSS Relative Colors](https://ishadeed.com/article/css-relative-colors) *(ishadeed.com · 2025-03-08T00:00:00)*
  > In CSS, we can now generate a color that is relative to another color. How does it work? Let’s find out. Let’s explore how the syntax works. To use relative colors, we need to specify the following: ... /* ****** */ /* R...

#### 🔗 Inbound Citations & Reverse Links

- [Chrome 151 CSS alpha() function by chrisdavidmills · Pull Request #29997 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/29997) *(github.com)* *(Cites: `https://chromestatus.com/feature/5070160203481088`)*
  > Chrome 151 CSS alpha() function by chrisdavidmills · Pull Request #29997 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sig...
- [\[css-color-5\] how to handle/avoid clamping in relative color syntax · Issue #14463 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14463) *(github.com · 2026-09-09T14:53:23)* *(Cites: `https://drafts.csswg.org/css-color-5/#relative-alpha`)*
  > [css-color-5] how to handle/avoid clamping in relative color syntax · Issue #14463 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You ...
- [\[css-color-5\] Drop \`Required conversion:\` wording? · Issue #14204 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14204) *(github.com · 2026-07-20T09:17:21)* *(Cites: `https://drafts.csswg.org/css-color-5/#relative-alpha`)*
  > [css-color-5] Drop `Required conversion:` wording? · Issue #14204 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with an...
- [\[css-color-5\]\[css-color-4\] Unclear how to use \`progress\` in interpolation. · Issue #14021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14021) *(github.com · 2026-06-06T16:37:56)* *(Cites: `https://drafts.csswg.org/css-color-5/#relative-alpha`)*
  > [css-color-5][css-color-4] Unclear how to use `progress` in interpolation. · Issue #14021 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settin...
- [\[css-color-5\] Serialization of the alpha() function is not specified · Issue #13992 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13992) *(github.com · 2026-05-31T18:38:27)* *(Cites: `https://drafts.csswg.org/css-color-5/#relative-alpha`)*
  > [css-color-5] Serialization of the alpha() function is not specified · Issue #13992 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You...

#### 📚 Platform Documentation & References

- [Chrome 151 CSS alpha() function by chrisdavidmills · Pull Request #29997 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/29997) *(github.com)*
- [\[css-color-5\] how to handle/avoid clamping in relative color syntax · Issue #14463 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14463) *(github.com)*
- [\[css-color-5\] Drop \`Required conversion:\` wording? · Issue #14204 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14204) *(github.com)*
- [\[css-color-5\]\[css-color-4\] Unclear how to use \`progress\` in interpolation. · Issue #14021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14021) *(github.com)*
- [\[css-color-5\] Serialization of the alpha() function is not specified · Issue #13992 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13992) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=css-color) (572 test path(s) matching `css-color`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (49 found across 11 planned queries, 37 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Dev.to Community Blogs` (2 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 1 verified) · `Web Platform Tests (wpt.fyi)` (572 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 3

---

<a id="6209615938322432-light-dismiss-improvements-for-popovers-and-dialogs"></a>
### [Light dismiss improvements for popovers and dialogs](https://chromestatus.com/feature/6209615938322432)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6209615938322432](https://chromestatus.com/feature/6209615938322432) · [chromestatuslite.com/feature/6209615938322432](https://chromestatuslite.com/feature/6209615938322432)
- **Specification:** [https://github.com/whatwg/html/pull/11536](https://github.com/whatwg/html/pull/11536)
- **Chromium Bug:** [https://issues.chromium.org/issues/408010435](https://issues.chromium.org/issues/408010435)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Improves and simplifies the light dismiss behavior for popovers and dialogs to fix a few bugs. "Light dismiss" is the behavior where clicking outside of a popover or dialog closes it. The fixed bugs include making scrolling gestures on touch screens no longer trigger light dismiss and making right clicks no longer trigger light dismiss.  The underlying mechanism of this change is that the browser will use click events to trigger light dismiss instead of a combination of pointerdown and pointerup events.

> **Motivation:** We need to fix these bugs with light dismiss: https://issues.chromium.org/issues/408010435 https://issues.chromium.org/issues/425579196

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 390)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Light dismiss improvements for popovers and dialogs is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGyQqsKZtV_h0jjuRf6fhzFFQ9hIEXg_EyzW-k3O8aBnG0lyHeW6OUPgoV99SVPYFVfWQnJWKioN5OvodMF3JxHYlScOYmD-AXBPxtiSlVfI1MYWLu8pAKMMB-1R0tmCbY3s5CeqtFCwBpe7UCWiyIp0mOqGoTsfr3GfvXDx7kIQwkviAOm2g==) *(vertexaisearch.cloud.google.com)*
  > Chromium Dash
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGnXY6odD_IDER9Wn_5gffxf4hNJ8mcP1ycpuBaX0z_uh32GxRl6gclxw-urA1zN2En92SA5Pk1SkktVe6KTFyPAXlTXgcNCKKoxcOJu_NbMDDBOydPxIEji84uC53iEsi1Rkhy2kQR) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGcJuhH9A4DARuYHN8n5qMOR0k6SE52oBVROb048BJewQBD0kKRKw93d1Vsnlkh7g1cumNuDQI-LmlJ67g6TR2UBw0XklXZZgz9r4NvOb_djVDbARcjDd-BnbZEDSvLbPgOprIe) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربي...
- [whatwg.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEj-OnxTU8GGdqVy0GyvTYpzhanulVGxoAzOBOzt_X6kZrWcZ8sHfGV3gX_pGO8qrJ9sjdQCD2KPhydWjIXWLvr65XGZsy0P8MJhMHS433m2DIFd4dleNDnEWEjK-0r_xVcDmE=) *(vertexaisearch.cloud.google.com)*
  > HTML Standard, Edition for Web Developers HTML: The Living Standard Edition for Web Developers — Last Updated 4 October 2026 6.12 The popover attribute 6.12.1 The popover target attributes 6.12.2 Popover light dismiss 6....
- [spatie.be](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH0URqzilecuWkam1SP2AoXPQkJJihN-SurKEXAKWNOOwF0n65dvg8dZcXbaAqaw3OIKtW2MeY9jJhutmNLbdmpUhCdHm9YACSLj_pQ4M_MZ_PcAgSTar1pCdpd8mDtbdQVxk1HBlAcTBemfvg0eLVr6SC_4-Y=) *(vertexaisearch.cloud.google.com)*
  > Rethinking our frontend future at Spatie | Spatie = 720, ossOpen: false, isMobile: window.innerWidth = 720; isMobile = window.innerWidth Menu Login Work with us February 13, 2026 Rethinking our frontend future at Spatie ...
- [whatwg.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEscZkbhN6ElH8kjc6S-tuy8_a_LvrsEEm9_4vihTox-nV1FP1y7nZA5K39lRvzvFQxh0CToqx1UXbcxpUC_7sIaIaFlK1kchOqcjgHxWjfiRqVjaloCqd1DMCQX-SnnabDHfFSWEn2RsDbyRrFRsu-) *(vertexaisearch.cloud.google.com)*
  > HTML Standard, Edition for Web Developers HTML: The Living Standard Edition for Web Developers — Last Updated 4 October 2026 4.11 Interactive elements 4.11.1 The details element 4.11.2 The summary element 4.11.3 Commands...

#### 🔗 Inbound Citations & Reverse Links

- [Scroll on touch device triggers light dismiss \[408010435\] - Chromium](https://issues.chromium.org/issues/408010435) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/6209615938322432`)*
  > Enable LightDismissFromClick by default Spec PR: https://github.com/whatwg/html/pull/11536 Chromestatus: https://<strong>chromestatus.com/feature/6209615938322432</strong> PSA: https://groups.google.com/a/chromium.org/g/...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-17 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0002.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11536`)*
  > (4 by emilio, josepharhar) ... Expand disabled form control event handling spec text (1 by josepharhar) https://github.com/whatwg/html/pull/12219 [agenda+] - #11536 Change light dismiss to use click events (1 by josephar...

#### 📚 Platform Documentation & References

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-17 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0002.html) *(lists.w3.org)*
- [Weekly hardening: 3 new v154 references + 3 v147 MDN-shape upgrades by PaulKinlan · Pull Request #12 · PaulKinlan/gendn](https://github.com/PaulKinlan/gendn/pull/12) *(github.com)*
- [Using the Popover API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using) *(developer.mozilla.org)*
- [modern-web-guidance/skills/modern-web-guidance/guides/ui-behaviors/light-dismiss-a-dialog.md at main · GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/light-dismiss-a-dialog.md) *(github.com)*
- [Add popover light dismiss integration by josepharhar · Pull Request #460 · w3c/pointerevents](https://github.com/w3c/pointerevents/pull/460) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=light) (394 test path(s) matching `light`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (46 found across 12 planned queries, 19 verified) · `Google Search Grounding (gemini-3.8-flash)` (20 found, 20 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (394 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5161589557821440-indexeddb-sqlite-backend"></a>
### [IndexedDB: SQLite backend](https://chromestatus.com/feature/5161589557821440)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5161589557821440](https://chromestatus.com/feature/5161589557821440) · [chromestatuslite.com/feature/5161589557821440](https://chromestatuslite.com/feature/5161589557821440)
- **Specification:** [https://www.w3.org/TR/IndexedDB](https://www.w3.org/TR/IndexedDB)
- **Chromium Bug:** [https://issues.chromium.org/issues/498644996](https://issues.chromium.org/issues/498644996)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`

#### 📝 Overview

Chromium's IndexedDB implementation is rewritten on top of SQLite, to replace the previous implementation that uses a hybrid of LevelDB and flat files. There is no change to the Web API.  This is expected to improve reliability and, to a lesser extent, performance.  For now this is applied to \*new data stores\*. This is step 2 of a multi-phase rollout. See https://chromestatus.com/feature/5126896685809664 which tracks step 1, the rollout for in-memory i.e. incognito contexts. Step 3 will consist of migrating existing data from LevelDB stores to SQLite stores.  In this step, the first time a user visits a site, or after clearing site data, new IDB data will be stored in a backend that makes use of SQLite, but existing data stored in LevelDB is unimpacted.  See Documentation link below for a list of differences to be aware of.

> **Motivation:** Chromium's IndexedDB implementation suffers from poor reliability and maintainability because it is highly dependent on a database engine (LevelDB) that is not maintained or supported, or as featureful as a full RDBMS. Many sophisticated web apps report high rates of missing or corrupt data, and bugs in the aging backend are hard to find and fix. S...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 381)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Gecko" OR "Firefox" IndexedDB SQLite"`, `""IndexedDB" "SQLite" "LevelDB" chromium migration"`, `""IndexedDB: SQLite backend" blink dev"`, `""WebKit" IndexedDB SQLite"`
- **Analysis:** Chromium's transition to an SQLite-backed IndexedDB is an internal architectural overhaul rolling out by default for new data stores in Chrome 156, rather than a web-facing API change. This migration phases out an unmaintained LevelDB and flat-file implementation plagued by chronic data corruption and transactional reliability issues. The move brings Chromium into architectural alignment with both Gecko (Firefox) and WebKit (Safari), which have historically utilized SQLite for IndexedDB storage.

**Key Recommendations & Takeaways:**
- Actionable Advice: No client-side API modifications or polyfills are needed, as the JavaScript interface remains unchanged. Teams building data-heavy PWAs should audit database performance in Chrome 156+ across fresh profiles, and consider selectively purging non-critical cached data to force new SQLite store allocation ahead of Chrome's eventual phase 3 legacy data migration.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Chrome IndexedDB: SQLite back end" (4 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **30 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Chrome IndexedDB: SQLite back end](https://news.ycombinator.com/item?id=48118595) — *Hacker News (4 pts, 0 comments)*

#### 📰 Ecosystem Blogs & Articles

- [Chrome IndexedDB: SQLite back end](https://chromestatus.com/feature/5161589557821440) *(chromestatus.com · 2026-05-13T06:46:44Z)*
  > Chrome Platform Status
- [AbsurdSQL – IndexedDB as a persistent back end for SQLite](https://github.com/jlongster/absurd-sql) *(github.com · 2025-03-09T18:14:32Z)*
  > GitHub - jlongster/absurd-sql: sqlite3 in ur indexeddb (hopefully a better backend soon) · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in wit...
- [Web-Facing Change PSA: IndexedDB: SQLite backend](https://groups.google.com/a/chromium.org/g/blink-dev/c/jS0khnC5IWA) *(groups.google.com · 2026-04-24T00:00:00)*
  > Web-Facing Change PSA: IndexedDB: SQLite backend Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: ...
- [Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16362.html) *(mail-archive.com)*
  > More details: &gt; https://docs.g... &gt; 148 &gt; Shipping on WebView &gt; 150 &gt; &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://chromestatus.com/feature/5161589557821440 &gt; &gt; <strong>This i...
- [IndexedDB](https://javascript.info/indexeddb) *(javascript.info)*
  > That power is usually excessive for traditional client-server apps. IndexedDB is intended for offline apps, to be combined with ServiceWorkers and other technologies. The native interface to IndexedDB, described in the s...
- [IndexedDB Tutorial for Beginners: A Comprehensive Guide with Coding Examples \| by Amresh Kumar \| Medium](https://medium.com/@kamresh485/indexeddb-tutorial-for-beginners-a-comprehensive-guide-with-coding-examples-74df2914d4d5) *(medium.com · 2024-01-20T01:36:21)*
  > IndexedDB API — The W3C specification for the IndexedDB API defines the standard interface and functionality of IndexedDB. You can refer to the specification for a deeper understanding of the underlying concepts and meth...

#### 🔗 Inbound Citations & Reverse Links

- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com · 2026-09-28T08:15:45)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or ...
- [Web-Facing Change PSA: IndexedDB: SQLite backend](https://groups.google.com/a/chromium.org/g/blink-dev/c/jS0khnC5IWA) *(groups.google.com · 2026-04-24T00:00:00)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > Web-Facing Change PSA: IndexedDB: SQLite backend Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: ...
- [Re: \[blink-dev\] Web-Facing Change PSA: IndexedDB: SQLite backend](http://www.mail-archive.com/blink-dev@chromium.org/msg16362.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5161589557821440`)*
  > More details: &gt; https://docs.g... &gt; 148 &gt; Shipping on WebView &gt; 150 &gt; &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://chromestatus.com/feature/5161589557821440 &gt; &gt; <strong>This i...
- [IndexedDB](https://javascript.info/indexeddb) *(javascript.info)* *(Cites: `https://www.w3.org/TR/IndexedDB`)*
  > That power is usually excessive for traditional client-server apps. IndexedDB is intended for offline apps, to be combined with ServiceWorkers and other technologies. The native interface to IndexedDB, described in the s...
- [IndexedDB/index.bs at main · w3c/IndexedDB](https://github.com/w3c/IndexedDB/blob/main/index.bs) *(github.com)* *(Cites: `https://www.w3.org/TR/IndexedDB`)*
  > For the revision history of the second edition, see [that document&#x27;s Revision History](https://<strong>www.w3.org/TR/IndexedDB</strong>-2/#revision-history).

#### 📚 Platform Documentation & References

- [IndexedDB: SQLite backend · Issue #38 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/38) *(github.com)*
- [IndexedDB/index.bs at main · w3c/IndexedDB](https://github.com/w3c/IndexedDB/blob/main/index.bs) *(github.com)*
- [Weekly hardening 2026-10-04: build 11 pending demos, v149 critique batch, margin-trim goal-setting fix by PaulKinlan · Pull Request #23 · PaulKinlan/chrome-platform-showcase](https://github.com/PaulKinlan/chrome-platform-showcase/pull/23) *(github.com)*
- [GitHub - Virtual0ps/Chrome-samples: A repo containing samples tied to new functionality in each release of Google Chrome. · GitHub](https://github.com/Virtual0ps/Chrome-samples) *(github.com)*
- [GitHub - anchetadev/PWA-IndexedDB-Guide: Guide on how to start with IndexedDB and PWA · GitHub](https://github.com/anchetadev/PWA-IndexedDB-Guide) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [IndexedDB: SQLite backend Demo](https://evanstade.github.io/web-storage-demos/idb-txn-scopes)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=IndexedDB) (838 test path(s) matching `IndexedDB`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (43 found across 7 planned queries, 34 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 1 verified) · `Hacker News Algolia` (8 found, 1 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (838 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5178263526834176-css-text-decoration-inset"></a>
### [CSS text-decoration-inset](https://chromestatus.com/feature/5178263526834176)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5178263526834176](https://chromestatus.com/feature/5178263526834176) · [chromestatuslite.com/feature/5178263526834176](https://chromestatuslite.com/feature/5178263526834176)
- **Specification:** [https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset)
- **Chromium Bug:** [https://issues.chromium.org/issues/468928416](https://issues.chromium.org/issues/468928416)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`

#### 📝 Overview

CSS text-decoration-inset controls how far underlines, overlines, and line-through decorations are inset from or extended beyond text run edges. It supports auto, length, and percentage values, including one-value and two-value syntax for setting the start and end offsets. This lets developers adjust decoration spacing and create reveal effects with native text decorations instead of background gradients or additional elements.   sampler: https://static.januschka.com/i-468928416/?asddsaasd MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7748204

> **Motivation:** This change implements CSS text-decoration-inset (CSS Text Decoration Level 4), including percentage values. It gives authors direct control over decoration inset and reduces the need for wrapper/pseudo-element workarounds used to fine-tune underline/overline/line-through rendering.    sampler: https://static.januschka.com/i-468928416/?asddsaasd MD...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 380)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""text-decoration-inset" webkit mozilla"`, `""text-decoration-inset" css"`, `""text-decoration-inset" site:chromestatus.com"`
- **Analysis:** Part of CSS Text Decoration Module Level 4, \`text-decoration-inset\` standardizes horizontal adjustment of underlines, overlines, and line-throughs using length or percentage values. With Firefox having introduced initial support in version 146, WebKit implementing support in Safari Technology Preview, and Chromium enabling it by default with full percentage parsing, cross-engine interoperability is rapidly solidifying. Developers widely celebrate the property for replacing brittle markup wrappers and background gradient hacks previously required for bespoke typographical styling.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt \`text-decoration-inset\` immediately as a progressive enhancement, since unsupported browsers gracefully fall back to default text decoration boundaries without breaking content. If pairing with reveal animations or structural layout shifts, guard rules with \`@supports (text-decoration-inset: 0)\` to maintain visual consistency across older browser versions.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "New in Chrome 154 \| Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **5 new community discussions** found
- 📰 **18 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [New in Chrome 154 \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2102804599325528424) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [What kind of witchcraft is CSS nowadays? text-decoration ...](https://twitter.com/javve/status/1772732077441417412) — *Twitter / X by @javve (0 likes/RTs, 0 replies)*
- 🐦 [Kevin Mandeville on Twitter: "Hey #emailgeeks to remove Windows 10 Mail link underlining set a { text-decoration: none; } in &lt;style&gt; block - removes or strips if inline"](https://twitter.com/kevinmandeville/status/770361809924653056) — *Twitter / X by @kevinmandeville (0 likes/RTs, 0 replies)*
- 🐦 [CSS-Tricks - Multiline truncated text with “show more” button](https://twitter.com/css/status/1169368804666880001) — *Twitter / X by @css (0 likes/RTs, 0 replies)*
- 🐦 [鹿野 壮 Takeshi Kano (@tonkotsuboy\_com) on X](https://twitter.com/tonkotsuboy_com/status/1552257149673148416) — *Twitter / X by @tonkotsuboy_com (0 likes/RTs, 0 replies)*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1780887: \[meta\] \[css-text-decor\] implement text-decoration-inset to modify the length of underline etc](https://bugzilla.mozilla.org/show_bug.cgi?id=1780887) `[NEW]`
- **Mozilla (Gecko):** [Bug #1981310: \[Inactive CSS\] Add text-decoration-inset in inactive CSS](https://bugzilla.mozilla.org/show_bug.cgi?id=1981310) `[NEW]`
- **Mozilla (Gecko):** [Bug #2072125: New wpt failures in /css/ \[css-transitions/properties-value-003.html, css-transitions/properties-value-inherit-003.html, css-animations/text-decoration-inset-auto.html\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2072125) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEp9HYIYZmuj_dkeJ42M-y6CKpL6ASbXnKLXpWsAieBssNuwlVbT3uv-UoU1Z4p77O-VE5z-o0YcPHVBKXPu7Zu06Uy90oXmMiwJ3MuJBaNdvJMKmqOSqSZE-ju-9ibaUBxjGjo5fNAHWW0BxP6kMbQXl4CcHdLIp2cBBCIMa4XMIiCyVVevLlNKr0RpniHCAYU) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties text-decoration-inset Theme OS default Light Dark English (US) Remember language Learn more D...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEehjrr5xo2epQv1QbgnfC91vWPPnlXbA4kO-fQFNZtirHwZgfjN91iL9Nihksre10xLD5J09vWMt84mZd3jtJbE8foa9EVOvaSD2v69GR9aHLvtTXyn76Tkwq68fViKbKxlXO9XRfu) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHY6Q18ko1akdDgogWBaotyPw586mvRYSJs9Iq7ZErsE_Q7fztin4cQooDqw-zaefXFElYEeAtV9KZZ-qzyohu-z6CD_3aKk4R2WGYmMHvDwSWdKB-_HbEBeZrjUDNNnU9pl5jZuJeR) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة ف...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH3dbOZAX_dbwTFR3iHy4p9gk77OOJd-rCGODAudrxCo7JPkI7EsTv8uqfw4p_JJH0sNq4oEPwsbBtDJrd0heMDa7buccpW3vQeCuy6GNoVCkl_kRqsHwbHrQc0dQy-_jThsnHjU8c7q6xEOnqea6gpi8QWjt2pYH8CWLxOEiBmR1aCC9PYqsgm) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset is Like Padding for Text Decorations | CSS-Tricks Skip to main content CSS-Tricks Since 2007 typography text-decoration-inset is Like Padding for Text Decorations Daniel Schwarz on Dec 22, 2025 The ...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEWK8hLW5YcyEv3TqhAh1QCCEXIysyFj-H5ix5tv6bCLV9LNJ0VZxDAxQZ-EjZTpi6CcYERYGi6hxFlTolf3svHWA5o6fF-u3N5HjcTbCgw1FkfqVbneLRvimVoIrGp6j-8H0QYmPjnupKIFoqg1PQzAH6Vy1sJ1ophYjHLfmCqwGbBdkNzj37g) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset is Like Padding for Text Decorations | CSS-Tricks Skip to main content CSS-Tricks Since 2007 typography text-decoration-inset is Like Padding for Text Decorations Daniel Schwarz on Dec 22, 2025 The ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEdHfAuQ5s5Mhrwy-rZGZ6TomEiWc4VqVn0rRlOL_3LYffeTPhsya7BuO-MeafxwUZ5pY0DXc4ALHyN2rZeOCqhk0CeL1kD8-yqbnnr8dvSNWE6peiqETuwSxdNhWnmNaqdEXGYqL7O1HpWCH5r4WCks--Y9EiNC5JLtTAjXg==) *(vertexaisearch.cloud.google.com)*
  > CSS text decoration - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Guides Text decoration Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 한국...

#### 🔗 Inbound Citations & Reverse Links

- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com · 2026-10-02T00:49:44)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > ChromeStatus: https://<strong>chromestatus.com/feature/5178263526834176</strong> (targeting Chrome 154)
- [CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com · 2026-08-17T19:47:28)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Chrome 154: https://<strong>chromestatus.com/feature/5178263526834176</strong> Firefox 146 (since December 2025) Safari TP
- [\[pull\] main from chromium:main by pull\[bot\] · Pull Request #2228 · txwdzxq/chromium](https://github.com/txwdzxq/chromium/pull/2228) *(github.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > ChromeStatus: https://<strong>chromestatus.com/feature/5178263526834176</strong> I2S: https://groups.google.com/a/chromium.org/g/blink-dev/c/XqfJTwXB6FI/m/Gb-ftYGoDgAJ Bug: 468928416, 498974811 Change-Id: I177fe03d66a65e...
- [\[pull\] main from chromium:main by pull\[bot\] · Pull Request #1649 · bubbleswarm/chromium](https://github.com/bubbleswarm/chromium/pull/1649) *(github.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > ChromeStatus: https://<strong>chromestatus.com/feature/5178263526834176</strong> I2S: https://groups.google.com/a/chromium.org/g/blink-dev/c/XqfJTwXB6FI/m/Gb-ftYGoDgAJ Bug: 468928416, 498974811 Change-Id: I177fe03d66a65e...
- [Implement text-decoration-inset \[468928416\] - Chromium](https://issues.chromium.org/issues/468928416) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > https://<strong>chromestatus.com/feature/5178263526834176</strong> , is that correct?

#### 📚 Platform Documentation & References

- [text-decoration-inset · Issue #4462 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com)*
- [CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com)*
- [\[pull\] main from chromium:main by pull\[bot\] · Pull Request #2228 · txwdzxq/chromium](https://github.com/txwdzxq/chromium/pull/2228) *(github.com)*
- [\[pull\] main from chromium:main by pull\[bot\] · Pull Request #1649 · bubbleswarm/chromium](https://github.com/bubbleswarm/chromium/pull/1649) *(github.com)*
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=css-text-decor) (365 test path(s) matching `css-text-decor`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (47 found across 7 planned queries, 20 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 14 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (4 found, 3 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (3 found, 3 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (365 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="4779920606756864-support-targetaddressspace-option-for-websockets"></a>
### [Support targetAddressSpace option for WebSockets](https://chromestatus.com/feature/4779920606756864)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/4779920606756864](https://chromestatus.com/feature/4779920606756864) · [chromestatuslite.com/feature/4779920606756864](https://chromestatuslite.com/feature/4779920606756864)
- **Specification:** [https://github.com/WICG/local-network-access/pull/125](https://github.com/WICG/local-network-access/pull/125)
- **Chromium Bug:** [https://crbug.com/517413738](https://crbug.com/517413738)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Add support for passing a targetAddressSpace option in the WebSocket constructor. This allows developers to specify that a WebSocket connection to a public hostname should be treated as going to a "local" or "loopback" destination, matching the existing support on the Fetch API. The main use case is to offer an escape hatch to bypass mixed content restrictions for connecting to local servers that cannot yet support HTTPS (as Local Network Access permissions require a secure context).  Example: A public site that connects to a local server can use a hostname to avoid needing manual configuration of the exact private IP address in use:  \`const ws = new WebSocket("ws://local-server.example", { targetAddressSpace: "local"}\`  This will flag the WebSocket connection as going to a local address, bypassing mixed content blocking when run in a secure context. The user must grant the site the local network permission for the WebSocket connection to succeed, and the hostname must resolve to a local IP address (otherwise it will be blocked).  This builds on https://chromestatus.com/feature/5080055102439424 which adds an options bag to the WebSocket constructor.

> **Motivation:** To avoid mixed content blocking for local network WebSockets requests, web developers have relied on having their users manually configure their local network IP addresses, which is awkward at best. Adding support for the targetAddressSpace option in WebSockets aligns it with the Fetch API. This has also been requested by developers (e.g., https://...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 380)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Support targetAddressSpace option for WebSockets is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Web Security Academy on X: "Did you know you can manipulate WebSocket handshakes to bypass reactive defences? Check out Burp Suite's WebSocket capabilities on the Web Security Academy: https://t.co/VBK1kAkVZp" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **5 new community discussions** found
- 📰 **13 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Web Security Academy on X: "Did you know you can manipulate WebSocket handshakes to bypass reactive defences? Check out Burp Suite's WebSocket capabilities on the Web Security Academy: https://t.co/VBK1kAkVZp" / X](https://twitter.com/WebSecAcademy/status/1238129371921211393) — *Twitter / X by @WebSecAcademy (0 likes/RTs, 0 replies)*
- 🐦 [A curated list of Websocket libraries and resources.](https://twitter.com/Jabra/status/1124491781444374533) — *Twitter / X by @Jabra (0 likes/RTs, 0 replies)*
- 🐦 [Stefan Tilkov on Twitter: "My opinion on the silly "REST vs. Websockets" debate http://t.co/cL10dfys"](https://twitter.com/stilkov/status/174565149770911744) — *Twitter / X by @stilkov (0 likes/RTs, 0 replies)*
- 🐦 [X - The Everything App / X](https://twitter.com/hashtag/websockets?lang=en) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [Twitter](https://twitter.com/obswebsocket?lang=es) — *Twitter / X (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [closed] `position: support`, `topic: networking`, `venue: WHATWG HTML Workstream`, `from: Google`
  > *Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."*
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open] `venue: WHATWG`, `topic: API`

#### 📰 Ecosystem Blogs & Articles

- [laplusda.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEOY7QNK1SBOEtREiY2dM7x_iKUS7UfUEknUEVTCyNCk6jhR3pYEpY5b4VocHQg-9lfIApPvxP1mXwcwLt-D-OBfNVWXgE4ikFRPUq-Dd7IHmWOHn2qeei-2Ss54OsZAXqPnFO3sNHudl45pQemVZAJjJYcWQuWJwS8YwGAiQ8=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`targetAddressSpace` option for WebSockets** allows developers to pass an options object to the `WebSocket` constructor specifying whether a connection is intended for a `"local"` or `"l...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFcH8jI7TLsu6E9ZbFRdrsTV9_KUQkPkk7CMcmloGRiyjkmtgt-AdeQkX0ZZrtQzoQOMYGasKZvgQmOV_k8PxgZN61YvD1HmA1iC2eYW0BBUJ2MczLQga-eDHFgx7YSvu8OAPjtEXER) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFYBvbzZFbzbgPWzkQxJvds_R_H01C_gmiSeLXtr1S0NhTSljQhpB1FI7FWdpLN9X_iYoAXFKT0mw_jpJxOj2BhDv1usOrwrDk7wywB0hKKSMb5fSKLNcKD2Hu14ZufCJqFNj09EczD5kIgVnAxHsuhTtxImVXl1kMohzbC) *(vertexaisearch.cloud.google.com)*
  > Use case for WebSocket communications · Issue #16 · WICG/local-network-access · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGh-CFgB-hg3LbCYNkLmbrtEtedRcKkaa44kwfuGwaKWMQMXvyLVWMvFe_BBNM6Ow88q32PEebRC6OC1B8Vr9-U3MCvAtf3UdycwkEvPCzVet58vpXSgC0U5lBEniGdcrxKZJPqKJJmvmEl0HKlsanYvJJwC26DFS8wttpLyboOBNP5s5jbi9bOwe-sN3yhCwuegP7TeYPmB6-SrrR-JMfBKw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`targetAddressSpace` option for WebSockets** allows developers to pass an options object to the `WebSocket` constructor specifying whether a connection is intended for a `"local"` or `"l...
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF2UAlIYaTi9bcFuOaDfknrtRONO-FL4lO17YpOWah0EVVUnQMYgl6pCTVmkykgNtfrR3nX6wRgsQf5gjhpkXDgzn7OoRlNvGoVk3G4_v0sxlo6q5d2kfS6vGmiU49VfjcycA==) *(vertexaisearch.cloud.google.com)*
  > Local Network Access Local Network Access Draft Community Group Report , 7 August 2026 More details about this document This version: https://wicg.github.io/local-network-access/ Issue Tracking: GitHub Inline In Spec Edi...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEGEVenT69Ec1k5zacF7Zjn4VU9tx9uLwmAOnxthvQuwXO3bwBTC02FJj_sf8wOVtZ03dt5-lmfoxS2UreaLMRTXcyjfeHC9E2XkFrxwWPwMfqtmNFlxQSpdYJD29vgemdfiTJWTdocbqgjmh5T) *(vertexaisearch.cloud.google.com)*
  > Supporting options bag in WebSocket constructor · Issue #708 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in wi...

#### 🔗 Inbound Citations & Reverse Links

- [Support \`targetAddressSpace\` option in WebSockets \[517413738\] - Chromium](https://issues.chromium.org/issues/517413738) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/4779920606756864`)*
  > ChromeStatus entry: https://chromestatus.com/feature/4779920606756864 <strong>Intent-to-Prototype: https://groups.google.com/a/chromium.org/g/blink-dev/c/hVlq3XXExbU/m/FqxRLh0yBwAJ TAG=agy CONV=d49fff98-9ad5-4ac6-8a3f-c6...
- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/pull/125`)*
  > Explainer https://github.com/WICG/local-network-access/issues/126 Specification https://github.com/WICG/local-network-access/pull/125 Summary <strong>Add support for passing a targetAddressSpace option in the WebSocket c...

#### 📚 Platform Documentation & References

- [local-network-access: WebSocket constructor rejects targetAddressSpace and test flag misses IPv6 localhost · Issue #1651 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1651) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/154.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/154.md) *(github.com)*
- [local-network-access/explainer.md at main · WICG/local-network-access](https://github.com/WICG/local-network-access/blob/main/explainer.md) *(github.com)*
- [Request: targetAddressSpace property](https://developer.mozilla.org/en-US/docs/Web/API/Request/targetAddressSpace) *(developer.mozilla.org)*
- [WebSocket API (WebSockets)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=125) (129 test path(s) matching `125`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (45 found across 13 planned queries, 17 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 15 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (129 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

---

<a id="5108373464547328-responsively-sized-iframe"></a>
### [Responsively-sized &lt;iframe&gt;](https://chromestatus.com/feature/5108373464547328)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5108373464547328](https://chromestatus.com/feature/5108373464547328) · [chromestatuslite.com/feature/5108373464547328](https://chromestatuslite.com/feature/5108373464547328)
- **Specification:** [https://drafts.csswg.org/css-sizing-4/#responsive-iframes](https://drafts.csswg.org/css-sizing-4/#responsive-iframes)
- **Chromium Bug:** [https://issues.chromium.org/issues/418397278](https://issues.chromium.org/issues/418397278)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Allow sites to opt into iframes having responsive sizing (sizing the &lt;iframe&gt; element in the parent document to the iframe document's layout overflow sizing, so that scrolling in the child document is avoided).

> **Motivation:** This is a natural feature to have for iframes, when the site wants to render the iframe content so that it looks seamless with the parent frame and avoids scrollbars.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 375)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Responsively-sized iframe" "Chrome 154" OR "Bram.us" OR "Chrome for Developers""`, `""Responsively-sized iframes" OR "responsive iframes" "css-sizing-4""`, `""https://drafts.csswg.org/css-sizing-4/#responsive-iframes" OR "responsive-iframes""`
- **Analysis:** Responsively-sized &lt;iframe&gt; support (featuring the CSS \`frame-sizing\` property, \`&lt;meta name="responsive-embedded-sizing"&gt;\` two-way opt-in, and \`window.requestResize()\`) shipped enabled by default in Chrome 154 under the CSS Box Sizing Module Level 4 draft. It natively resolves a decades-old web development headache—seamless embed sizing without scrollbars—yet currently remains an engine-isolated feature awaiting broader specification consensus. With W3C TAG review ongoing and neither Gecko nor WebKit having finalized positions, cross-browser interoperability is not yet established.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt responsively-sized iframes purely as a progressive enhancement today by pairing \`frame-sizing\` and the embedded \`&lt;meta&gt;\` opt-in for modern Chromium browsers while strictly maintaining legacy \`postMessage()\` communication channels for Firefox and Safari. Avoid applying the wildcard origin tag (\`allow-origins=\*\`) to authenticated or sensitive embedded documents.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "For context, a lot of the discussions here:   \* https://github.com/w3c/csswg-drafts/issues/1771  \* https://github.com/w3c/csswg-drafts/issues/13584  \*..."
- Standards Activity (W3C TAG): Latest discussion from @dandclark: "Thanks for sending this to the TAG! We had a few points of feedback.  One is that the opt-in from the iframe isn't scoped in any way. The explainer \[p..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "New in Chrome 154 \| Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **5 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [New in Chrome 154 \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2102804599325528424) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/status/2102804599325528424) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Responsively-sized iframes](https://github.com/WebKit/standards-positions/issues/653) [open] `venue: W3C CSS WG`, `topic: frames`, `from: Google`
- **Mozilla:** [Responsively-sized iframes](https://github.com/mozilla/standards-positions/issues/1394) [open] 
  > *Latest discussion from @emilio: "For context, a lot of the discussions here:   * https://github.com/w3c/csswg-drafts/issues/1771  * https://github.com/w3c/csswg-drafts/issues/13584  *..."*
- **W3C TAG:** [Other Spec Review: Responsively-sized iframes](https://github.com/w3ctag/design-reviews/issues/1223) [open] `Progress: pending external feedback`, `Review type: later review`, `Topic: CSS`, `Venue: CSS WG`
  > *Latest discussion from @dandclark: "Thanks for sending this to the TAG! We had a few points of feedback.  One is that the opt-in from the iframe isn't scoped in any way. The explainer [p..."*

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEvj6hHeBNtQVUK-UT5b5IfjXDp2xEicjozBVQFNfbGoWuvGEcl5OMwiwnSCcWFuTvdKLqbvhHmwjwq8N0iaBYysyb6C_mdKIV-sFSBmSd0hVMplCurfIsVbYGSCrYK6d5BtJANovUoPgc=) *(vertexaisearch.cloud.google.com)*
  > جدید در کروم ۱۵۴ | Blog | Chrome for Developers رد شدن و رفتن به محتوای اصلی / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית ا...
- [daily.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFqMPLExEvT-SKlju5qNia_E0ekccOdsclR_ZIdSd18ehbtkQR-kpGlGpJaHOLDy2xTmbSoX06IYKNP3bf9IhDRa7wxa3-pabI3SxfGRTGB60sj-Hbqs4T7aPV7wX2uVeK6WABFvebjN-xPeKquJzfTVEji4f75pOw31h4BS6Dnsn-0QtxEWKShyYgGe84R-kbuUZmCcyWofR_DLTwBPVmxAlXrKaHl) *(vertexaisearch.cloud.google.com)*
  > New in Chrome 154: iframes that automatically resize... Bram.us Read post New in Chrome 154: iframes that automatically resize themselves to their content Chrome 154 introduces responsively-sized iframes, allowing an ifr...
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEqQ4LNOfHuQq9TB7jXItOgpKDb16wed37Jd5b1c-6PzWjI1R7sCcrGSz4jAAGyw-QIvdRIiCCmPlWG_1kt2yhcmPz9xJLQhtOaQ_ai5zXoPYfmNUxovB11zmjMRlpTqQCVGlq0DgqnDBJThSmPN4djyq4kmVG0_AeIgHk7jARVpWR7Kw==) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Responsively-Sized `<iframe>`  For decades, getting an `<iframe>` to seamlessly match the height or width of its embedded content required JavaScript workarounds (such as `postMessage()` communication, Resi...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEHM0vCLZXdUWb0E767Z_U-XR-I-E1C_7gJOcQfteajpF4FeV77gxu0atVNfPKFqMTqemqdmZJ8Mj1Ux3Z7nari8S5-GS5BELLz8KuEjUSsoVMsboX0hTzmAqOyVfn4X4pnwxtPYVfbA2dH1vy4IvzUlh4jsLy2DUS63ipOT4_dCoKBTbo_) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge 154 web platform release notes (Sep. 24, 2026) - Microsoft Edge Developer documentation | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF3Yr4vpBz_Fxal3XCtRHL8CqEBzgar8Ay4crJQ8rYprrrE87Fk63iIk45yXngnLIBQIvkjewZZTR9u7TgFiSjuHhursv7GtKFnmLaQggeZt7u3SQ3iVluZMkX3dCt_vmohy5Vz6EK4) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [carlana.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF_3qUtN-FArs3dv-pF4rdpTlqnUO1zZF_VA2qpArThq3iiz64OXp0Iw84K8EwDuqnLtNZAUKKXQWY5GnPKj08XlUyyvm-f04ED8P09GG9ksITF6-TjDBamhlSEpNwx5EmrsjTu1mgn7tL-3JBnFSeIPT7m_pjNmhlY9hk=) *(vertexaisearch.cloud.google.com)*
  > Alternate Futures for “Web Components” &#183; The Ethically-Trained Programmer The Ethically-Trained Programmer &mldr; “It should be noted that no ethically-trained software engineer would ever consent to write a Destroy...

#### 🔗 Inbound Citations & Reverse Links

- [New feature: responsively-sized iframes. \[418397278\] - Chromium](https://issues.chromium.org/issues/418397278) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > https://<strong>chromestatus.com/feature/5108373464547328</strong> · Links (92) Hide all · “ See: https://<strong>chromestatus.com/feature/5108373464547328</strong> ” · ch...@ #1 · “ Link: https://chromium-review.googles...
- [Responsive iframes · Issue #1443 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1443) *(github.com · 2026-09-22T22:42:15)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > Shipped (https://<strong>chromestatus.com/feature/5108373464547328</strong>) Gecko / Firefox: Not implemented · Standards Position: no position · WebKit / Safari: Not implemented · Standards Position: no position · React...
- [Intent to Prototype: Responsive iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/QirdSBIvM1k/m/rZdHOE59AQAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > https://<strong>chromestatus.com/feature/5108373464547328</strong>?gate=5167068974153728 · This intent message was generated by Chrome Platform Status. unread, May 20, 2025, 3:05:41 AMMay 20 ·  ·  ·  · Reply to author...
- [Responsively-sized &lt;iframe&gt; · Issue #4036 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4036) *(github.com · 2026-05-14T09:39:56)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > https://<strong>chromestatus.com/feature/5108373464547328</strong> · Reactions are currently unavailable · No one assigned ·
- [Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13784.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > &gt;&gt; &gt;&gt; &gt;&gt;&gt; On Tuesday, 20 May 2025 ...-4/responsive-iframes-explainer.md &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Specification None &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Summary &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt...

#### 📚 Platform Documentation & References

- [Responsive iframes · Issue #1443 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1443) *(github.com)*
- [Responsively-sized &lt;iframe&gt; · Issue #4036 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4036) *(github.com)*
- [\[css-sizing\] How should auto-sizing of iframes work? · Issue #12229 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12229) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=css-sizing) (790 test path(s) matching `css-sizing`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (51 found across 12 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (20 found, 20 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (790 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

---

<a id="5114042131808256-jpeg-xl-decoding-support-imagejxl-in-blink"></a>
### [JPEG XL decoding support (image/jxl) in blink](https://chromestatus.com/feature/5114042131808256)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5114042131808256](https://chromestatus.com/feature/5114042131808256) · [chromestatuslite.com/feature/5114042131808256](https://chromestatuslite.com/feature/5114042131808256)
- **Specification:** [https://www.iso.org/standard/85066.html](https://www.iso.org/standard/85066.html)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`

#### 📝 Overview

Adds support for decoding JPEG XL (image/jxl) images in Blink using jxl-rs, a memory-safe pure Rust decoder (https://github.com/libjxl/jxl-rs). JPEG XL is a modern image format standardized as ISO/IEC 18181 that offers progressive decoding for improved perceived loading performance, support for wide color gamut, HDR, and high bit depth, and support for animation.

> **Motivation:** (see Summary)

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 370)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"JPEG XL decoding support image jxl in blink Chrome jxl rs"`, `"JPEG XL Firefox Safari browser support 2025 2026"`
- **Analysis:** Native JPEG XL (image/jxl) decoding returns to Blink enabled by default in Chrome 155, powered by jxl-rs—a memory-safe, high-performance pure Rust decoder. Coupled with Firefox's rollout and Safari's existing support, this default enablement completes cross-browser consensus after years of ecosystem deadlock. Web applications can now rely on full engine alignment for progressive decoding, lossless JPEG recompression, animation, and wide color gamut HDR capabilities.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt JPEG XL today via progressive enhancement using \`&lt;picture&gt;&lt;source type="image/jxl"&gt;\` with AVIF/WebP fallbacks, or serve it at the edge using HTTP \`Accept: image/jxl\` content negotiation. Image generation pipelines should also be evaluated, as origin CDNs are beginning to catch up with native JXL transformation tooling.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEnSi9b8plDrSBa4du8DShkixkKLjpIO2r2OO4EvoHT4XVHZdQZAtz9hGkYXBGeypQp6Q0ZWgqhPJlSolpdweX1GupSGrufhpj1SyOPxHWgIl38pjjysjvaprDfgKFvJF-Q0WB6vac=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [freetoolonline.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHbIdVHkRt1rVy2lDPw7ACLLAtXqs2zv06H7_oEb7l2Ttq3oFsYWnwu5hpJLiht5Z_V3Jj-v4WYDDnXxC8-i2EWaYrlvsqdkRpR4iSWrsZ11bVFt3yvKqIARrty7pSmqBJ8AUjSRXewBqFGdvaPStMJk2o0usIHhdA=) *(vertexaisearch.cloud.google.com)*
  > JPEG XL Browser Support 2026 - Chrome, Firefox, Safari - Free Tool Online Donate Buy Me A Coffee FreeToolOnline JPEG XL Browser Support 2026 - Chrome, Firefox, Safari Disable Ads Initializing, please wait a moment JPEG X...
- [januschka.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEU2J694QFZBhdC1O1MtCcpn33Feq3fEuLJHZ1Ie-sEh1zz6wk2svB1wL6FFygmg7hpT_LBRzVKgWVf-unxLfLJfvf5rf1Ern9b8faYl1PCsK2SxvwGz_0e0nshpNR39tw7Iqx1bGrz8M2lk_PM) *(vertexaisearch.cloud.google.com)*
  > Integrating JPEG XL in Chromium with jxl-rs - Helmut Januschka Integrating JPEG XL in Chromium with jxl-rs ⚡ Chromium 🔧 Rust / C++ 👤 Helmut Januschka Why Chromium selected a Rust decoder, how it was integrated, and how...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGQKhtasj2w0GM1vnBgLXmuolonfn5m3mjqNoBuGM7ixWMD9IaMGlJRBn3kdkyogvTZ-i03tykyM9cNkA_pfAmRrsEsDNi-LvLkjB6klVx1LCJUDxEO) *(vertexaisearch.cloud.google.com)*
  > GitHub - libjxl/jxl-rs · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signe...
- [daily.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQERxWxHaTtHITsopVfaqZhzGzfv9G13VKxvhB3Is09QwRSueX_Km52qZGryP9wjgpxoV-aFi5zzJyeefTJyu0rPsq2x5U6hEiYsCiRhxdcI_JaD5PWwsEwMwuAPpPW5M7LKDseJPprmNoW3P8nlxQgxWgeunNeo_Lm5ClvxkAWaYk1ID2ZKwHCZS5GRUw==) *(vertexaisearch.cloud.google.com)*
  > JPEG XL Is Finally Getting Real Cross-Browser Support Collection Subscribe JPEG XL Is Finally Getting Real Cross-Browser Support # rust # firefox Last updated Sep 13 • 5 sources Questions this post answers Will Firefox s...
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEkGE9hyTJUYeMQpLv5A4GaXxjMJE3fW8nWZ4fWHlXsCp1UTwmnlT18LE-zfbDVHaF4y4xHC0zVSP1elX40_duPUw-BRIk2Ux2_-k2CeOxNwq17D7hiXUB9B8Dzy9uib_AnwTlVc5YaMlSdUvGKOp__hJICoC8x289BjoizYNOI5hHFRgbCgrzlJP6PkrOedg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"JPEG XL decoding support (image/jxl) in Blink"** marks the return of native JPEG XL (ISO/IEC 18181) support to Chromium and Blink-based browsers. After Chromium controversially removed expe...

#### 🔗 Inbound Citations & Reverse Links

- [JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1086) *(github.com · 2026-07-29T21:39:58)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > https://<strong>chromestatus.com/feature/5114042131808256</strong> · Reactions are currently unavailable · Sign up for free to join this conversation on GitHub. Already have an account? Sign in to comment · No one assign...
- [Intent to Ship: JPEG XL decoding support (image/jxl) in blink](https://groups.google.com/a/chromium.org/g/blink-dev/c/-gDojQbDPRI) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5114042131808256</strong>?gate=6594362739916800
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5114042131808256`)*
  > JPEG XL, https://<strong>chromestatus.com/feature/5114042131808256</strong>
- [Intent to prototype: JPEG XL decoding in Rust](https://groups.google.com/a/mozilla.org/g/dev-platform/c/JMM5Nhdj6mc) *(groups.google.com · 2026-01-26T00:00:00)* *(Cites: `https://www.iso.org/standard/85066.html`)*
  > Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1986393 Specification: https://<strong>www.iso.org/standard/85066.html</strong> Standards Body: ISO/IEC Platform coverage: All Preference: image.jxl.enabled Link to stand...

#### 📚 Platform Documentation & References

- [JPEG XL decoding support (image/jxl) in blink · Issue #1086 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1086) *(github.com)*
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [GitHub - niutech/jxl.js: JPEG XL decoder in JavaScript using WebAssembly (WASM) · GitHub](https://github.com/niutech/jxl.js) *(github.com)*
- [jxl · GitHub Topics · GitHub](https://github.com/topics/jxl?l=javascript) *(github.com)*
- [GitHub - hjanuschka/jxl-rs-polyfill: JPEG XL (JXL) polyfill for browsers - decodes JXL to PNG using WebAssembly · GitHub](https://github.com/hjanuschka/jxl-rs-polyfill) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=jpeg) (67 test path(s) matching `jpeg`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (34 found across 7 planned queries, 25 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 11 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (67 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5201297767792640-js-self-profiling-markers"></a>
### [JS Self-Profiling Markers](https://chromestatus.com/feature/5201297767792640)

- **Milestone:** Chrome 153 (Origin trial)
- **ChromeStatus:** [chromestatus.com/feature/5201297767792640](https://chromestatus.com/feature/5201297767792640) · [chromestatuslite.com/feature/5201297767792640](https://chromestatuslite.com/feature/5201297767792640)
- **Specification:** [https://github.com/WICG/js-self-profiling/pull/89](https://github.com/WICG/js-self-profiling/pull/89)
- **Chromium Bug:** [https://issues.chromium.org/issues/40800459](https://issues.chromium.org/issues/40800459)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The JavaScript Self-Profiling API lets a web application sample its own call stacks to measure performance on real user devices. This feature adds an optional marker field to each captured sample that identifies the type of browser activity running when the sample was taken: script, gc, style, layout, paint, or other. A trace normally shows gaps between stacks that cannot be interpreted, markers let developers attribute that time to browser work happening outside their JavaScript, for example distinguishing script execution from style recalculation, layout, or a garbage collection pause, making slow traces easier to analyze and optimize.

> **Motivation:** The JavaScript Self-Profiling API lets web apps sample their own call stacks on real user devices, but it profiles only the page's JavaScript, leaving unexplained gaps where time went to style, layout, paint, or garbage collection. Some of that work, like GC, interrupts stack execution and is invisible to stack sampling. A per-sample marker identif...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 370)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** JS Self-Profiling Markers is currently Origin trial in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- In active Origin Trial in Chrome 153. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @monica-ch: "Thanks @bkardell, checking @rniwa's four 2021 points (mozilla/standards-positions#477) against the current design. Short version: lazy mode narrows st..."
- Standards Activity (W3C TAG): Latest discussion from @monica-ch: "@marcoscaceres Just filed a WebKit position https://github.com/WebKit/standards-positions/issues/717..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Twitter" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **2 new community discussions** found
- 📰 **18 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Twitter](https://twitter.com/javascriptdaily/status/1479830759036928002?lang=en) — *Twitter / X by @javascriptdaily (0 likes/RTs, 0 replies)*
- 🐦 [Amy Dutton (@selfteachme) on X](https://twitter.com/selfteachme/status/1465443021948923909) — *Twitter / X by @selfteachme (0 likes/RTs, 0 replies)*
- 🐦 [Oxford Craniofacial Unit on X: "Do you know what #Craniosynostosis is? September is #CraniosynostosisAwarenessMonth and we are profiling the work of our specialist multidisciplinary @OxfordCranio Unit team @OUHospitals #CraniosynostosisAwareness #Cranio #Craniofacial" / X](https://twitter.com/OxfordCranio/status/1300697493165006856) — *Twitter / X by @OxfordCranio (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [JS Self-Profiling API (including the Markers extension)](https://github.com/WebKit/standards-positions/issues/717) [open] 
  > *Latest discussion from @monica-ch: "Thanks @bkardell, checking @rniwa's four 2021 points (mozilla/standards-positions#477) against the current design. Short version: lazy mode narrows st..."*
- **W3C TAG:** [Other Spec Review: JS Self-Profiling Markers (ProfilerSample.marker)](https://github.com/w3ctag/design-reviews/issues/1251) [open] `Review type: later review`
  > *Latest discussion from @monica-ch: "@marcoscaceres Just filed a WebKit position https://github.com/WebKit/standards-positions/issues/717..."*
- **W3C TAG:** [State extension for JS Self-Profiling API.](https://github.com/w3ctag/design-reviews/issues/682) [closed] `Review type: CG early review`, `Venue: WICG`, `Progress: stalled`, `Topic: performance`, `Missing: Multi-stakeholder support`
  > *Latest discussion from @torgo: "Hi @cnpsc yes it's describing the problem from the developer perspective rather than from the end-user perspective. It may seem like make-work but we'..."*

#### 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGduQ6BG2aR2mJCMTv9wKX5pzEVjihN5-zaqlzEqKAK1mTzhlhAYfZzhs5kI8zuQIChBgrCd8c1yo1FTQzI6iXL9sY4QFGLPSnyBp4kLYseen-do49lcTf8vqpYQsbWa4_eGyElguvtW8Vkj7bn9w==) *(vertexaisearch.cloud.google.com)*
  > JS Self-Profiling API (including the Markers extension) · Issue #717 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sign...
- [windows.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFhG-2AB_VcAn5-uA_UToYHB5TtEh3D2TKvP2Fktln3QhugOP_eG3ZNP0azkKKSQy8Nc7vq1iTVxnAYPaYT9oLtA7bUxhfSyaFXOaqbKGz_INmyqw1ODXmTO0jZ9mHwW_VOB0JPhQBMJyrA_IAGXtV1928TeZlWWbGg0XDvX0HnhrCO2sjWNNhL3_Blth2Nx6Siu6Z2E6ngPAnYYTpsiDGEDqEjYyQNfzmrbqAmb1IHcoTTCMnjTBbJWg==) *(vertexaisearch.cloud.google.com)*
  > New in Edge for developers – Create better components and make your site agent-ready - Microsoft Edge Blog Skip to main content Skip to main content Windows Blogs Windows Experience Devices Windows Developer Microsoft Ed...
- [nicj.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFGfwutf8TaqTex588obLOpFMTu4iNQFuJ-sFh6hGfDQR89yCGxUpsFLQ_AvSO63R5dHmSucV5TT3yAta5IxAHbmYlGfyky4zPWhDRcqnNal48EVrNjKJgI3hn-_QntEzjaZyXa224gQgs=) *(vertexaisearch.cloud.google.com)*
  > JS Self-Profiling API In Practice - NicJ.net JS Self-Profiling API In Practice December 31st, 2021 Goto comments Leave a comment Table of Contents The JS Self-Profiling API What is Sampled Profiling? Downsides to Sampled...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEnRqtXAr3TDE58S5c_J14orKTdJieP94ujWsT5JSefCUwM36TmAZ_2_ADIwgxfuxX9CASW1_015oM68Ogn4yBHkYDPGA928i7keWCzmMat9X1ZkUNx-CXxEJtJdXpaHX4lWjUY) *(vertexaisearch.cloud.google.com)*
  > Chrome 153 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربي...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFZ_ukSDCNiTkvCfwKMq8Q2qozt-TEmURPbUjS61C-_Vd_JK-F_XnvSVun5MJM0bG4D5cbD8yWfl7j7Hv54Q27QHrBVo3Qm7wItBSvTMobl9yD-kqhu4KX0iW1-5UWo8bNrS5UTQrSSpTTp_cT9pH9e) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF8SKAuLAGMrb3UU69Cy_Dh-J3QHyOkNbOYZovCdNZ-pzdMxi5XEjrKgHLtSy4lKMILtAFF3PRglGEY56y18NU7EBgGLB-R_NteDJiLg2VaLobaUmIYF29bSOhVzHM1Zrr328nwnYlI) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status

#### 🔗 Inbound Citations & Reverse Links

- [Implement markers for JS Self-Profiling API \[40800459\] - Chromium](https://issues.chromium.org/issues/40800459) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5201297767792640`)*
  > This CL exposes that existing feature through an Origin Trial (&quot;JSSelfProfilingMarkers&quot;) so non-COI trial documents see the safe &quot;style&quot;/&quot;layout&quot; subset, while COI documents see the full set...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17130.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; *Origin Trial documentation link* &gt;&gt;&gt; <strong>https://github.com/WICG/js-self-profiling/blob/main/markers.md</strong> &gt;&gt;&gt; &gt;&gt;&gt; *Risks* &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt...
- [\[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17114.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > Interested partners include Excel Online, which will consume the trial to enrich its existing JS self-profiling telemetry, and Datadog, which collects JS self-profiling data as part of its RUM product. <strong>Origin Tri...
- [Intent to Prototype: State extension for JS Self-Profiling API](https://groups.google.com/a/chromium.org/g/blink-dev/c/m1hp39BMNcQ) *(groups.google.com)* *(Cites: `https://github.com/WICG/js-self-profiling/blob/main/markers.md`)*
  > https://github.com/WICG/js-self-profiling/blob/main/markers.md · No specification available yet for this extension · <strong>Adds information about what type of non javascript work is being done by the user agent to samp...
- [Re: \[blink-dev\] Intent to Experiment: JS Self-Profiling Markers](http://www.mail-archive.com/blink-dev@chromium.org/msg17121.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/js-self-profiling/pull/89`)*
  > On Tue, Aug 4, 2026 at 3:30 PM ...hub.com/WICG/js-self-profiling/pull/89 &gt; &gt; *Summary* &gt; <strong>The JavaScript Self-Profiling API lets a web application sample its own &gt; call stacks to measure performance on...

#### 📚 Platform Documentation & References

- [JS Self-Profiling API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/JS_Self-Profiling_API) *(developer.mozilla.org)*
- [GitHub - WICG/js-self-profiling: Proposal for a programmable JS profiling API for collecting JS profiles from real end-user environments · GitHub](https://github.com/WICG/js-self-profiling) *(github.com)*
- [Profiler - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Profiler) *(developer.mozilla.org)*

#### 🧪 Interactive Demos & Samples

- [JS Self-Profiling Markers Demo](https://github.com/victorhuangwq/js-profiler-markers-demo)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=self) (830 test path(s) matching `self`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (38 found across 8 planned queries, 23 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (15 found, 2 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (830 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 11

---

<a id="5863296436666368-notification-attribution-for-pwas-on-macos"></a>
### [Notification attribution for PWAs on macOS](https://chromestatus.com/feature/5863296436666368)

- **Milestone:** Chrome 152 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5863296436666368](https://chromestatus.com/feature/5863296436666368) · [chromestatuslite.com/feature/5863296436666368](https://chromestatuslite.com/feature/5863296436666368)
- **Specification:** [https://notifications.spec.whatwg.org](https://notifications.spec.whatwg.org)
- **Chromium Bug:** [https://issues.chromium.org/issues/327449602](https://issues.chromium.org/issues/327449602)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `Shipped/Shipping`

#### 📝 Overview

Chrome 152 rolls out notification attribution for installed Progressive Web Apps (PWAs) on macOS. When a PWA is installed on macOS, its notifications are now attributed to the PWA itself (using its own name and icon in the Notification Center) rather than Google Chrome.  This update also changes how notifications are displayed to the user, aligning PWA notifications with native macOS applications. It introduces two changes that align with current behavior in \[WebKit\](https://webkit.org/): - For app notifications, Chrome no longer supports the \`requireInteraction\` field for notifications. On macOS, the user controls whether the notification is temporary or persistent on a per-app basis. - For app badging, the Badging API now requires notifications permissions for the app badge to show up. If the user does not grant notifications permission, the API silently does nothing.  To control notification permissions using Chrome policies, admins need to update their policy settings if they want to keep that behavior for PWAs on macOS, using the Chrome origin-based policy \[NotificationsAllowedForUrls\](https://chromeenterprise.google/policies/#NotificationsAllowedForUrls). Additionally, administrators need to deploy a macOS MDM configuration profile to turn on notification permissions for the PWA's specific bundle ID.

> **Motivation:** Previously, all PWA notifications were displayed under the "Google Chrome" umbrella. This prevented users from managing notification settings (sounds, badges, alerts, Focus modes) on a per-PWA basis. Attributing notifications to the PWA's App Shim provides a highly requested native integration on macOS, aligning Chrome with established macOS platfo...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 365)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Notification attribution for PWAs on macOS is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "PWA: How to never miss a call notification" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **8 new community discussions** found
- 📰 **31 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [PWA: How to never miss a call notification](https://www.3cx.com/blog/docs/pwa-push-notifications) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [GitHub on Twitter: "GitHub for Mac: Notifications – https://t.co/GCoU0qf6"](https://twitter.com/github/status/256061058026971136) — *Twitter / X by @github (0 likes/RTs, 0 replies)*
- 🐦 [Steve Moser on X: "🚨 🚨 🚨 Push Notifications coming to web apps (PWAs) on iOS is huge! Once this last barrier drops a lot of apps will migrate from the App Store to PWAs. Check out this great post (and image from @firt’s blog post) about the caveats and about changes to Safari in iOS 15.4 Beta 1." / X](https://twitter.com/SteveMoser/status/1488169930973487113) — *Twitter / X by @SteveMoser (0 likes/RTs, 0 replies)*
- 🐦 [OneSignal on Twitter: "We recently added Mac OS X App notification support! Many more great features are in the works.… "](https://twitter.com/onesignal/status/722624279326490624) — *Twitter / X by @onesignal (0 likes/RTs, 0 replies)*
- 🐦 [Manage or turn on X notifications for desktop](https://help.twitter.com/en/managing-your-account/enabling-web-and-browser-notifications) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [Get customized Tweet notifications where you want them](https://blog.twitter.com/developer/en_us/topics/tips/2020/get-customized-tweet-notifications-where-you-want-them) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [Configure 3CX Browser and PWA Permissions on Managed Devices](https://www.3cx.com/docs/chromium-permisions-autodeployment) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [Solved - PWA on Macbook \| 3CX Forums](https://www.3cx.com/community/threads/pwa-on-macbook.126463) — *Twitter / X (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [Spec: https://notifications.spec.whatwg.org/#badge-url \| by njam \| Medium](https://medium.com/@njam/spec-https-notifications-spec-whatwg-org-badge-url-96cbd01164e6) *(medium.com · 2016-08-21T17:24:58)*
  > Medium Spec: https://notifications.spec.whatwg.org/#badge-url | by njam | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in njam 1 min read · Aug 21, 2016 Spec: https://notifications.spec.wh...
- [\[blink-dev\] Web-Facing Change PSA: Notification attribution for PWAs on macOS](http://www.mail-archive.com/blink-dev@chromium.org/msg16957.html) *(mail-archive.com)*
  > [blink-dev] Web-Facing Change PSA: Notification attribution for PWAs on macOS Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: Notification attribution for PWAs on macOS Chromestatus Thu, 09 Jul 2...
- [Using Push Notifications in PWAs: The Complete Guide](https://www.magicbell.com/blog/using-push-notifications-in-pwas) *(magicbell.com)*
  > Using Push Notifications in PWAs: The Complete Guide Using Push Notifications in PWAs: The Complete Guide Progressive web apps (PWAs) allow brands to enjoy the advanced features of a mobile app without spending a lot of ...
- [I Need Help Implementing Apple Push Notifications (APN) for Web Apps (PWA)](https://laracasts.com/discuss/channels/laravel/i-need-help-implementing-apple-push-notifications-apn-for-web-apps-pwa) *(laracasts.com)*
  > I Need Help Implementing Apple Push Notifications (APN) for Web Apps (PWA) Ctrl K Discussions Popular This Week Popular All Time Solved Unsolved No Replies Yet Feb 4, 2024 4 phayes0289 OP 2 years ago Level 5 I Need Help ...
- [iOS & iPadOS PWA Notifications \| Monogram](https://monogram.io/blog/notifications-from-ios-and-ipados-pwas) *(monogram.io · 2024-05-01T00:00:00)*
  > In a significant leap forward, Apple has recently enabled the delivery of native iOS notifications for PWAs. This development is a game-changer, removing one of the key barriers that often push developers towards publish...
- [How do I enable iOS Web Push notifications on my PWA website? \| API & SDK Documentation \| Batch Documentation](https://doc.batch.com/developer/technical-guides/how-to-guides/web/how-to-integrate-batchs-snippet-using-google-tag-manager/how-do-i-enable-ios-web-push-notifications-on-my-pwa-website) *(doc.batch.com · 2026-09-17T00:00:00)*
  > Apple has introduced support for Web Push in PWAs starting with iOS 16.4. This guide assumes that Batch Web SDK is already up and running on your website: you should be able to subscribe to and receive notifications usin...

#### 🔗 Inbound Citations & Reverse Links

- [Web Notifications](https://www.w3.org/TR/2015/REC-notifications-20151022) *(w3.org)* *(Cites: `https://notifications.spec.whatwg.org`)*
  > Please see also the test suite and implementation report for this specification. <strong>A specification for Notifications is also being developed at https://notifications.spec.whatwg.org/</strong>. Recent work there has...
- [content/files/en-us/web/api/notifications\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/notifications_api/index.md?plain=1) *(github.com)* *(Cites: `https://notifications.spec.whatwg.org`)*
  > content/files/en-us/web/api/notifications_api/index.md at main · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ta...
- [Spec: https://notifications.spec.whatwg.org/#badge-url \| by njam \| Medium](https://medium.com/@njam/spec-https-notifications-spec-whatwg-org-badge-url-96cbd01164e6) *(medium.com · 2016-08-21T17:24:58)* *(Cites: `https://notifications.spec.whatwg.org`)*
  > Medium Spec: https://notifications.spec.whatwg.org/#badge-url | by njam | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in njam 1 min read · Aug 21, 2016 Spec: https://notifications.spec.wh...
- [Web Media API Snapshot 2024](https://www.w3.org/community/reports/webmediaapi/CG-FINAL-webmediaapi-20241016) *(w3.org · 2024-10-16T00:00:00)* *(Cites: `https://notifications.spec.whatwg.org`)*
  > 17 December 2012. W3C Recommendation. URL: https://www.w3.org/TR/navigation-timing/ ... Notifications API Standard. Anne van Kesteren. WHATWG. 17 July 2023. Review Draft (use this version or later). URL: https://<strong>...
- [The allowed values of \`Notification.requestPermission()\` differ between spec and implementations · Issue #197 · whatwg/notifications](https://github.com/whatwg/notifications/issues/197) *(github.com · 2023-08-07T21:09:30)* *(Cites: `https://notifications.spec.whatwg.org`)*
  > The allowed values of `Notification.requestPermission()` differ between spec and implementations · Issue #197 · whatwg/notifications · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in S...

#### 📚 Platform Documentation & References

- [Web Notifications](https://www.w3.org/TR/2015/REC-notifications-20151022) *(w3.org)*
- [content/files/en-us/web/api/notifications\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/notifications_api/index.md?plain=1) *(github.com)*
- [Web Media API Snapshot 2024](https://www.w3.org/community/reports/webmediaapi/CG-FINAL-webmediaapi-20241016) *(w3.org)*
- [The allowed values of \`Notification.requestPermission()\` differ between spec and implementations · Issue #197 · whatwg/notifications](https://github.com/whatwg/notifications/issues/197) *(github.com)*
- [Notification requireInteraction feature · Issue #318 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/318) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Notification attribution for PWAs on macOS Demo](https://googlechrome.github.io/samples/pwa-testing/notificationsapi/index.html)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=notifications) (36 test path(s) matching `notifications`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (59 found across 12 planned queries, 35 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (36 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5082950457884672-pause-media-playback-on-not-visible-iframes"></a>
### [Pause media playback on not-visible iframes](https://chromestatus.com/feature/5082950457884672)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5082950457884672](https://chromestatus.com/feature/5082950457884672) · [chromestatuslite.com/feature/5082950457884672](https://chromestatuslite.com/feature/5082950457884672)
- **Specification:** [https://wicg.github.io/iframe-media-pausing](https://wicg.github.io/iframe-media-pausing)
- **Chromium Bug:** [https://issues.chromium.org/issues/351354996](https://issues.chromium.org/issues/351354996)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `Positive` · Safari: `No signal`

#### 📝 Overview

Adds a "media-playback-while-not-visible" permission policy to allow embedders to pause audible media playback of embedded iframes which are currently hidden - i.e. "display" property set to "none"; "visibility" property set to "hidden"; or zero-area (width or height equal to 0). While hidden, attempts made by the embedded iframe to render audible media will be blocked. When the frame is shown again the prohibitions should be lifted. This should allow developers to build more user-friendly experiences and to also improve the performance by letting the browser handle the playback of content that is not visible to users.

> **Motivation:** Web applications that host embedded media content via iframes may wish to respond to application input by temporarily hiding the media content. These applications may not want to unload the entire iframe when it's not rendered since it could generate user-perceptible performance and experience issues when showing the media content again. At the sam...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 355)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"Mozilla standards positions media playback while not visible"`, `"WebKit standards positions media playback while not visible 409"`, `"media playback while not visible permission policy"`, `"iframe media pausing WICG"`
- **Analysis:** The \`media-playback-while-not-visible\` Permission Policy introduces a declarative standard allowing host pages to automatically suspend audible media in iframes when hidden via CSS or collapsed to zero dimensions. Championed by Microsoft within the WICG and shipped by default in Chromium, it resolves long-standing issues with unwanted background audio and unnecessary iframe unmounting. Engine consensus is favorable overall, with Firefox officially in support, though cross-browser implementation remains incomplete.

**Key Recommendations & Takeaways:**
- Actionable Advice: Incorporate the directive progressively using attributes like \`allow="media-playback-while-not-visible 'none'"\` on embed elements to quiet hidden frames in Chromium without breaking functionality. Maintain existing fallback mechanisms—such as pausing via player APIs or structural unmounting—where cross-browser silence guarantees are mandatory.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @padenot: "This is \`positive\`. As mentioned in a call to Gabriel, Gecko currently has complex logic to achieve this, for power efficiency reasons, and it would b..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** ["media-playback-while-not-visible" Permission Policy](https://github.com/WebKit/standards-positions/issues/409) [open] `topic: media`, `from: Microsoft`, `topic: permissions`, `venue: Edge Explainers`
- **Mozilla:** ["media-playback-while-not-visible" Permission Policy](https://github.com/mozilla/standards-positions/issues/1082) [closed] `venue: W3C`, `venue: WHATWG`, `position: positive`
  > *Latest discussion from @padenot: "This is `positive`. As mentioned in a call to Gabriel, Gecko currently has complex logic to achieve this, for power efficiency reasons, and it would b..."*

#### 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGNnBolVU-WLvr18zXk_D5GVXLbNCbZUlGKRFqvfeenKrmD_DmGlpzRSfrBTjEoAUKt9rmTnDhnbS8_qncRuw10gBfx2SgMXUEUvj0uyrUXb-1hKtfP3aq3bFCgspw7Gmwaoe6tGm030Fe1xAuzjA==) *(vertexaisearch.cloud.google.com)*
  > "media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed ...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG4IQiKx7lqA1zyUMBIvqTl1qGWFrsg8UowzZcK5dZ3Uva4vHuLjP8SK2DVteEFL0ZnvGNzkXG_tRQJJdHxG0-5hXyw08GVedcaW-DSabP12rNu-WEoq1P9fvHt2EQ5Nbt16Q==) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [windowslatest.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE8vDPKDpk7zSmhyBU5HCYP5Sbij-CMel-b118WAF-qISUryXLIBYEhUqI4BXil4gxkZ0ljY1TFIZXQ-SRu19DA7CQeK4J-4vqqMnytf-ckJUfPcI25ZOAi_DJUn2tlRMc0hrswl8VptZmG90rBVzSIRUsAY85sgeE4fYP6A0Hif81XKpot7t6kaQ3hnudzwBIWK-ImQFCCDgwdVf-qjokpoVHEhJ2cdnw=) *(vertexaisearch.cloud.google.com)*
  > Microsoft could help reduce unexpected audio or video playback in Chrome Facebook Mail RSS Twitter Youtube Windows 11 Windows 10 Windows 10 PC Apps & Games Privacy Policy Contact Us About us Select Theme: System Light Di...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHebqml_7p4ghQaT7xenkiRxwKVGn87GQ8YEnUzKVjTBRM3jJOlWOQNIigVdKCp4eJ6w3CcfbL31wn_vBntaHq2AdK4v8zMTH__Jw05Vr2NQcnnCAjQ8m_4RJibzdB0Mi4Ol_9A8S6-M6cxhwbfzlC28OTCP7BoneDG) *(vertexaisearch.cloud.google.com)*
  > iframe-media-pausing/explainer.md at main · WICG/iframe-media-pausing · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wi...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGkPS30SbKb0TxSGvbNY9PlI6oiFfSqEQDtv0h2KQETs0oQEY6U5vjNZXXBBxTmthBDXDg-b8JAZ1j9ZD36Wsnmro6gRwpWEjXFPJcRa8uCfp4tKtQTq7E_Vql9B-0gBtkex_7ihbKeACbuRc9GHcN6yMQE3REGWDqcbHGpPwUwQ0llJXzUw6wqogDLd-vZ0M0i91jfxyUmPwF-myrJ) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge Origin Trials Skip to main content Sign-in to GitHub media-playback-while-not-visible Permission Policy The "media-playback-while-not-visible" permission policy will pause any media being played by iframes...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHxhPDNF1Ej9bKAHm-W29qtRYEs2zFZEQb081q0tvUFlpn61LP9CdVYXmcTrBZuxHv2hOI5p94LbfK-JqBqAY0FNCuaIiCmwlDG8ThPXGrfZmr1H66oOFvJdcsSuA8sD9coSRTf0pMqg6k_ez4Hwx6nVXpKJHoxkNZ7ZgUPd7EZ4EHILNuqB3dSGlI=) *(vertexaisearch.cloud.google.com)*
  > MSEdgeExplainers/IframeMediaPause/HOWTO.md at main · MicrosoftEdge/MSEdgeExplainers · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ano...

#### 🔗 Inbound Citations & Reverse Links

- [web-features consumers report for 2026-10-01 · Issue #4457 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4457) *(github.com · 2026-10-01T10:28:04)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > &quot;media-playback-while-not-visible&quot; Permission Policy #4292 used by https://<strong>chromestatus.com/feature/5082950457884672</strong>
- [media-playback-while-not-visible Permission Policy · Issue #1387 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1387) *(github.com · 2026-08-28T21:15:16)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > https://<strong>chromestatus.com/feature/5082950457884672</strong> · No response · Reactions are currently unavailable · Sign up for free to join this conversation on GitHub. Already have an account? Sign in to comment ·...
- ["media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/409) *(github.com · 2024-10-04T08:41:30)* *(Cites: `https://chromestatus.com/feature/5082950457884672`)*
  > There is some discussion happening in whatwg/html#10208. This feature development in Chromium is being tracked on https://<strong>chromestatus.com/feature/5082950457884672</strong>.
- [\[blink-dev\] Intent to Ship: Pause media playback on not-visible iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17375.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > Explainer https://github.com/M...g.github.io/iframe-media-pausing Summary <strong>Adds a &quot;media-playback-while-not-visible&quot; permission policy to allow embedders to pause audible media playback of embedded ifram...
- [Intent to Prototype: Pause media playback on not-rendered iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/D0j1igiVHR8/m/PmfLqigIAQAJ) *(groups.google.com · 2024-06-27T00:00:00)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md`)*
  > https://<strong>github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/IframeMediaPause/iframe_media_pausing.md</strong>

#### 📚 Platform Documentation & References

- [web-features consumers report for 2026-10-01 · Issue #4457 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4457) *(github.com)*
- [media-playback-while-not-visible Permission Policy · Issue #1387 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1387) *(github.com)*
- ["media-playback-while-not-visible" Permission Policy · Issue #409 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/409) *(github.com)*
- [Pausing iframe media when not visible · Issue #1468 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1468) *(github.com)*
- [Proposal: pause iframe media when not rendered · Issue #10208 · whatwg/html](https://github.com/whatwg/html/issues/10208) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Pause media playback on not-visible iframes Demo](https://gabrielsanbrito.github.io/media-playback-while-not-visible)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=pause) (102 test path(s) matching `pause`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 12 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (16 found, 16 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (102 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

---

<a id="5146996093616128-css-symbols"></a>
### [CSS Symbols()](https://chromestatus.com/feature/5146996093616128)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5146996093616128](https://chromestatus.com/feature/5146996093616128) · [chromestatuslite.com/feature/5146996093616128](https://chromestatuslite.com/feature/5146996093616128)
- **Specification:** [https://drafts.csswg.org/css-counter-styles-3/#symbols-function](https://drafts.csswg.org/css-counter-styles-3/#symbols-function)
- **Chromium Bug:** [https://issues.chromium.org/issues/40747844](https://issues.chromium.org/issues/40747844)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `Support`

#### 📝 Overview

The CSS symbols() function lets authors define a counter style inline instead of first declaring a named @counter-style at-rule. It builds an anonymous counter style from a list of string symbols plus an optional counting system (cyclic, numeric, alphabetic, symbolic, or fixed), and is accepted as the counter style in list-style-type, the list-style shorthand, and counter() / counters().

> **Motivation:** Defining a custom list marker in CSS today requires authoring a named  @counter-style  rule and referencing it by name, which is needlessly verbose for one-off, anonymous markers. The symbols() function lets authors define the same counter style inline, without inventing or managing a global name. It works wherever a counter style is accepted, spec...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 353)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""CSS symbols()" OR "symbols()" "css-counter-styles" chromestatus OR "chrome""`
- **Analysis:** CSS symbols() provides a streamlined syntax for defining inline, anonymous counter styles directly inside properties like list-style-type without the boilerplate of declaring global @counter-style rules. Long an outlier supported exclusively in Firefox since 2015, the API is reaching major cross-engine momentum with Chromium shipping support enabled by default in Chrome 155. Engine consensus is now unified as WebKit has formally signaled support and opened implementation tracking, leaving full cross-browser Baseline availability within reach.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt symbols() as a progressive enhancement today by declaring a standard list-style-type fallback immediately before the symbols() rule, or gate modern list styles behind @supports (list-style: symbols('•')). Until WebKit completes its rollout to stable Safari releases, ensure critical numbering and navigation retain accessible, readable fallbacks.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Show HN: Symbol.so – Customize Unicode Symbols and Export as SVG/PNG" (2 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Show HN: Symbol.so – Customize Unicode Symbols and Export as SVG/PNG](https://news.ycombinator.com/item?id=44660768) — *Hacker News (2 pts, 0 comments)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [\[css-counter-styles-3\] CSS symbols() function](https://github.com/WebKit/standards-positions/issues/714) [closed] `position: support`, `topic: css`, `venue: W3C CSS WG`
  > *Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1071436: Support image symbols in symbols()](https://bugzilla.mozilla.org/show_bug.cgi?id=1071436) `[NEW]`
- **WebKit (Safari):** [Bug #299922: \[css-counter-styles\] Support CSS \`symbols()\` function](https://bugs.webkit.org/show_bug.cgi?id=299922) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [Show HN: Symbol.so – Customize Unicode Symbols and Export as SVG/PNG](https://symbol.so) *(symbol.so · 2025-07-23T16:06:40Z)*
  > symbol.so for sale | Spaceship.com Domain for sale symbol.so Free transaction support Secure payments Spaceship reliability Listed with spaceship.com get this domain Buy now $13,390 Buy Domain After clicking Buy Domain y...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE8eyJd69egJhgflwcConZKky7yTrCwZd1Gs6dvsUt6hYkcyIpHCtRSFg4QwfadfjZrT_yWnvblrg1jtk_HLntmI2BMTGSsTGrnrWRCEWzHl-BhIj60zp66s7pb4ZjZgo2HDDdypOo0gg==) *(vertexaisearch.cloud.google.com)*
  > symbols() | CSS-Tricks Skip to main content CSS-Tricks Since 2007 counters CSS Almanac &rarr; Functions &rarr; S &rarr; symbols() symbols() Juan Diego Rodríguez on Jan 30, 2025 The CSS symbols() function defines a counte...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFlS7FHT51GSnsRD-cOBwIBR0zGmCUN49fvelMCHHA6ZPk0XzlpRqlZGxjtiGUDDuws8SHQ2y-ZToYCc893D14ANkm4greFd7wvpiD3q6sVR-MPNgLVUeqRL2OnqMCpCjtY7b-5jD0=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [quackit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGU72eYVAxKxcoxWK04RESkYsCX3jTaNU90kx4JYPxRQ0tLumTf37OctvmKVNzaLbeCe7Y0wapmGajPrYR7PBjgFl86eVWDSv_89sYCRfcjnb4K7SpJFlOiADG8v4X_SmLwc6ktrzZKk2kJm-mTolXUw6f-) *(vertexaisearch.cloud.google.com)*
  > ### Summary of CSS `symbols()`  The CSS `symbols()` function is defined in the **CSS Counter Styles Level 3** specification. It allows authors to declare **inline, anonymous counter styles** directly where they are neede...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHkX2SAnRlQXvay9oseNjOIoDB71Pmff7dkz9hoY3Moz0jQ_8BB_0hu0x28A6lP6h4T4B5hYHA5ot093UCvZxJh8BEyho9dNJBnH4V5tB43508nZkkqZRLh4YheXFbf0N-96Be120-P2mF7w2UAzxkUOQ4VOfud0AsXpCxwv58=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of CSS `symbols()`  The CSS `symbols()` function is defined in the **CSS Counter Styles Level 3** specification. It allows authors to declare **inline, anonymous counter styles** directly where they are neede...
- [cssportal.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHTo_tMuHkDN7IW0lughkAGRCnvLHGM6l5jWKeYQ8zh6CrvuiiRNCMUeQJLQF41On0WjPOqNJfaRtJ48tr4GGkLCbJh9faY5Ag-GFMB5T-kEzfuQdcSeDDtFyGYs1G0YYOiBhJEIJWRgtQ=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of CSS `symbols()`  The CSS `symbols()` function is defined in the **CSS Counter Styles Level 3** specification. It allows authors to declare **inline, anonymous counter styles** directly where they are neede...

#### 🔗 Inbound Citations & Reverse Links

- [web-features consumers report for 2026-10-01 · Issue #4457 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4457) *(github.com · 2026-10-01T10:28:04)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > New feature: symbols() #4203 used by https://<strong>chromestatus.com/feature/5146996093616128</strong>
- [New feature: symbols() · Issue #4203 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4203) *(github.com · 2026-07-23T18:55:08)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > Chromium/Edge: implementing now - https://<strong>chromestatus.com/feature/5146996093616128</strong> · Safari: not yet · Proposed feature ID: counter-style-symbols (alt: symbols) Proposed compat_features (move out of the...
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > CSS symbols(), https://<strong>chromestatus.com/feature/5146996093616128</strong> · css.properties.list-style-type.symbols · css.properties.list-style.symbols · CSS margin-trim, https://chromestatus.com/feature/519786373...
- [\[css-counter-styles-3\] CSS symbols() function · Issue #714 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/714) *(github.com · 2026-08-24T19:00:16)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > ChromeStatus: https://<strong>chromestatus.com/feature/5146996093616128</strong> Chromium issue: https://issues.chromium.org/issues/40747844 WPT results: https://wpt.fyi/results/css/css-counter-styles/counter-style-at-ru...
- [csswg-drafts/css-counter-styles-3/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-counter-styles-3/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-counter-styles-3/#symbols-function`)*
  > Significant changes since the &lt;a href=&quot;https://www.w3.org/TR/2015/CR-css-counter-styles-3-20150611/&quot;&gt;June 11 2015 Candidate Recommendation&lt;/a&gt;: ... 	* Clarified that &#x27;@counter-style/additive-sy...

#### 📚 Platform Documentation & References

- [web-features consumers report for 2026-10-01 · Issue #4457 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4457) *(github.com)*
- [New feature: symbols() · Issue #4203 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4203) *(github.com)*
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [\[css-counter-styles-3\] CSS symbols() function · Issue #714 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/714) *(github.com)*
- [csswg-drafts/css-counter-styles-3/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-counter-styles-3/Overview.bs) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [CSS Symbols() Demo](https://developer.mozilla.org/en-US/docs/Web/CSS/symbols)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=css-counter-styles) (259 test path(s) matching `css-counter-styles`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 12 planned queries, 24 verified) · `Google Search Grounding (gemini-3.8-flash)` (6 found, 6 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 1 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (3 found, 2 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (8 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (259 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

---

<a id="5908461532610560-scroll-axis-lock"></a>
### [scroll-axis-lock](https://chromestatus.com/feature/5908461532610560)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5908461532610560](https://chromestatus.com/feature/5908461532610560) · [chromestatuslite.com/feature/5908461532610560](https://chromestatuslite.com/feature/5908461532610560)
- **Specification:** [https://github.com/w3c/csswg-drafts/pull/14152](https://github.com/w3c/csswg-drafts/pull/14152)
- **Chromium Bug:** [https://crbug.com/479472367](https://crbug.com/479472367)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

scroll-axis-lock is a CSS property that authors can use to instruct browsers not to constrain a user's scrolling gesture to one axis.  Web browsers often "lock" a user's scrolling gesture to a single axis when that gesture starts with significantly more movement in one axis than in the perpendicular axis. In many cases, this behavior improves the user's experience by avoiding accidental scrolls along the perpendicular axis when the user's intent was to scroll only one axis. However, in cases where an author wishes their element to always be diagonally scrollable, this locking behavior forces the user to start their gesture at an angle that doesn't trigger the locking, often not in alignment with the author's intended user experience.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 346)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"css scroll axis lock"`, `"scroll axis lock bramus nerdy dev"`
- **Analysis:** Shipped enabled by default in Chrome 153, 'scroll-axis-lock' (specifically 'scroll-axis-lock: none') allows developers to disable browser scroll 'railing' and unlock immediate 2D diagonal scrolling for canvases, maps, and multidirectional grids. The feature has achieved W3C TAG consensus and active WebKit implementation across macOS and iOS, while Mozilla is actively syncing and tracking test suites. The broader web platform is broadly aligned on standardizing unconstrained 2D gestures.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building maps, data grids, or 2D pan/zoom components should adopt 'scroll-axis-lock: none' immediately as a progressive enhancement via '@supports (scroll-axis-lock: none)'. Unsupported browsers gracefully fall back to default axis railing without impacting basic scroll functionality.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fred-wang: "&gt; Seems reasonable, but I wonder if making it inherited would make more sense.  For future reference, the explainer mentions this: https://github.com/..."
- Standards Activity (Mozilla): Latest discussion from @theres-waldo: "&gt; Same as \[#1448\](https://github.com/mozilla/standards-positions/issues/1448) I think this seems reasonable but I'd like \[@hiikezoe\](https://github.co..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "📐 Scroll-locking: UX win or gesture killer?  "scroll-axis-lock: none" puts you back in control of 2D panning—perfect fo" (2 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **2 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [📐 Scroll-locking: UX win or gesture killer?  "scroll-axis-lock: none" puts you back in control of 2D panning—perfect fo](https://twitter.com/_adnand7/status/2104772409328853032) — *Twitter / X by @_adnand7 (2 likes/RTs, 0 replies)*
- 🐦 [Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X](https://x.com/ChromiumDev/status/2093424350036660456) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS scroll-axis-lock](https://github.com/WebKit/standards-positions/issues/698) [open] `topic: css`, `venue: W3C CSS WG`, `from: Google`, `topic: scrolling`
  > *Latest discussion from @fred-wang: "> Seems reasonable, but I wonder if making it inherited would make more sense.  For future reference, the explainer mentions this: https://github.com/..."*
- **Mozilla:** [CSS scroll-axis-lock](https://github.com/mozilla/standards-positions/issues/1435) [open] `venue: W3C`, `topic: CSS`
  > *Latest discussion from @theres-waldo: "> Same as [#1448](https://github.com/mozilla/standards-positions/issues/1448) I think this seems reasonable but I'd like [@hiikezoe](https://github.co..."*
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

- [bram.us](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGeR4akuE7jd80Yj5PWRCYdQwqVWbfZ5AAFhXFHA1NU16VuL8TRGT_qwYavnUPnJvA2PojesdA6KImUqYhWXNcbkBJVtoi9v71cg6UwGZAC2LBhuxHc5Ilw7nMC9V9SG30cEw_tT34sa7NuU1Vl-h3599_wYhOq5l3J26843EYDMvtEO8gboYIrtrKqfJzu) *(vertexaisearch.cloud.google.com)*
  > Unlock Immediate Diagonal Scrolling with CSS scroll-axis-lock: none &#8211; Bram.us Skip to content Bram.us A rather geeky/technical weblog, est. 2001, by Bramus Unlock Immediate Diagonal Scrolling with CSS scroll-axis-l...
- [frontendfoc.us](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGuBLre1DaURzKaHB2PsYagymlcTP9iij5UBzq-UWYW-TL6u1d4WVRykep9ZUWcbvAFlrvidLSLUJnPX2PQVJ6VNhr82_eaTjnmOmeV9fb_a8EbkDR3pBE=) *(vertexaisearch.cloud.google.com)*
  > Issue #754: Five CSS properties for eye-catching text designs — Frontend Focus Frontend Focus Latest Issue All Issues Subscribe Plus tackling the bot overload, unlocking your scroll, and some CSS piping. 🗓️ A brief sche...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGxSY0xrh0C-qtems3QZ4mkipJis-iXTJyaRktQsuy5cFoZhViuWPRfaiZAXTzH49r3KCIzJjCFj5bVnNoetXJ8HZZyjex5Aep7shsmsuAFolXe0lrDDBOeFVOWokcMr3ZUjiFLVAWvsMp_1HcKv6jd) *(vertexaisearch.cloud.google.com)*
  > GitHub - explainers-by-googlers/scroll-axis-lock: Explainer for CSS property: scroll-axis-lock · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed ...
- [nerdy.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEM-h6MhyfvHcViPn7k4yBPnc14T4uEDTqEl_me5zKIO3WDqrc1yfa9iuAqoXwVgxVIeYAVC3m5bsZkOfbDyHvgCUmGsoFqBf6-R62ZBs4NnR05Wkw4oWjhBN8MZw==) *(vertexaisearch.cloud.google.com)*
  > Scroll Axis Lock · August 10, 2026 2 min read Scroll Axis Lock css August 10, 2026 3,273 0 1 2 3 , 0 1 2 4 5 6 7 0 1 2 3 views Table of contents Use cases I did log a bug Comments 8 I first noticed web scroll areas had s...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGZbp96HUqj72Y6YKv4AGrizl_UNhDsxi6PEySn0yMjwayb0ZkR2Kn-YnupHjmhW0vupPV2xVZM8tU_fb25b2MegM1bLDHGRrtrvnsnPQ7-cOhEoOEbqGsOioQbbI9K75sTjiFh) *(vertexaisearch.cloud.google.com)*
  > Chrome 153 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربي...
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGk4mNEsg8lWoNnJA8J2iUewOuJzZf87Eg5ymhHrJht7CXeP6JKWvNNbcsQTbwbZ-CgIzquQ21KwVJYUVX0S4Aye3gVMI4psZUR-a_h0zCx1IognfCZsUvQSJBF3GhI4g==) *(vertexaisearch.cloud.google.com)*
  > New to the web platform in August | Blog | web.dev Skip to main content / English Русский فارسی বাংলা Sign in Blog Home Blog New to the web platform in August Stay organized with collections Save and categorize content b...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype and Ship: scroll-axis-lock](http://www.mail-archive.com/blink-dev@chromium.org/msg17080.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-axis-lock`)*
  > *Contact emails* [email protected] *Explainer* https://<strong>github.com/explainers-by-googlers/scroll-axis-lock</strong>

#### 📚 Platform Documentation & References

- [Implement CSS scroll-axis-lock property by fred-wang · Pull Request #74484 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/74484) *(github.com)*
- [scroll-axis-lock · Issue #1265 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1265) *(github.com)*
- [Set scroll-axis-lock status to 'preview' by fred-wang · Pull Request #75110 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/75110) *(github.com)*
- [scroll-axis-lock · Issue #4213 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4213) *(github.com)*
- [Parse CSS scroll-axis-lock property by fred-wang · Pull Request #74891 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/74891) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=scroll) (1816 test path(s) matching `scroll`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (37 found across 8 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 15 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (10 found, 10 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (1816 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 10

---

<a id="5080055102439424-add-options-bag-to-websocket-constructor"></a>
### [Add options bag to WebSocket constructor](https://chromestatus.com/feature/5080055102439424)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5080055102439424](https://chromestatus.com/feature/5080055102439424) · [chromestatuslite.com/feature/5080055102439424](https://chromestatuslite.com/feature/5080055102439424)
- **Specification:** [https://github.com/whatwg/websockets/pull/76](https://github.com/whatwg/websockets/pull/76)
- **Chromium Bug:** [https://crbug.com/542670554](https://crbug.com/542670554)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `Support`

#### 📝 Overview

Add support for passing an option bag (WebSocketInit dictionary) as the second argument to the WebSocket constructor. The option bag will initially support a "protocols" option, allowing developers to specify subprotocols (mirroring the existing protocols argument), and also serves as an extension point for future options.  Before, this would be written \`const socket = new WebSocket("wss://example.com:8080", "soap")\`. After, this could also be written \`const socket = new WebSocket("wss://example.com:8080", { protocols: "soap" })\`.  See https://github.com/whatwg/websockets/issues/42 and spec PR https://github.com/whatwg/websockets/pull/76 for this change.

> **Motivation:** There is a demand for extensibility of options on the WebSocket constructor, to mirror the "option bag" approach that the Fetch API has. https://github.com/whatwg/websockets/issues/42 is requested by a number of implementors and users, and Chromium wants this as a means to add a \`targetAddressSpace\` option matching the one added to Fetch for Local ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 330)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Supporting options bag in WebSocket constructor" webkit standards-positions"`, `""Add options bag to WebSocket constructor""`, `""WebSocketInit" whatwg websockets github pull 76"`, `""Supporting options bag in WebSocket constructor" mozilla standards-positions"`
- **Analysis:** Chrome 154 enabled by default an options bag (\`WebSocketInit\` dictionary) as the second argument to the \`WebSocket\` constructor, modernizing the legacy API to align with Fetch-style ergonomics. Standardized in WHATWG WebSockets PR #76, this change unblocks future configuration parameters, such as Chromium's \`targetAddressSpace\` for Local Network Access. Full Baseline interoperability is still pending, but engine consensus on the pattern is solid.

**Key Recommendations & Takeaways:**
- Actionable Advice: Avoid passing an options object in production code targeting all browsers today, as older engines will stringify the dictionary into \`"\[object Object\]"\` and fail subprotocol negotiation. Stick to the classic \`new WebSocket(url, protocols)\` string/array syntax for subprotocols, and gate options-bag usage (such as \`targetAddressSpace\`) behind runtime capability checks.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **20 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [closed] `position: support`, `topic: networking`, `venue: WHATWG HTML Workstream`, `from: Google`
  > *Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."*
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open] `venue: WHATWG`, `topic: API`

#### 📰 Ecosystem Blogs & Articles

- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > Experimental Chromium Web Platform Features | Polypane This website works best with JavaScript enabled. Skip to content Skip to footer Polypane Brand kit Copy icon as SVG Copy logo as SVG Brand guidelines Homepage Search...
- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)*
  > Chromium Sign in
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to ...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > Chrome 154 Release Notes - Chrome Platform Status Chrome 154 Release Notes Preview Scheduled Stable Release September 22, 2026 Network / Connectivity Add options bag to WebSocket constructor # Link copied! Add support fo...
- [Add options bag to WebSocket constructor - Chrome Platform Status](https://chromestatus.com/feature/5080055102439424) *(chromestatus.com)*
  > Chrome Platform Status
- [\[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Add options bag to WebSocket constructor Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Add options bag to WebSocket constructor Chromestatus Wed, 05 Aug 2026 10:5...

#### 🔗 Inbound Citations & Reverse Links

- [Experimental Chromium Web Platform Features \| Polypane](https://polypane.app/experimental-web-platform-features) *(polypane.app)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Experimental Chromium Web Platform Features | Polypane This website works best with JavaScript enabled. Skip to content Skip to footer Polypane Brand kit Copy icon as SVG Copy logo as SVG Brand guidelines Homepage Search...
- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Chromium Sign in
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to ...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)* *(Cites: `https://github.com/whatwg/websockets/issues/42`)*
  > Chrome 154 Release Notes - Chrome Platform Status Chrome 154 Release Notes Preview Scheduled Stable Release September 22, 2026 Network / Connectivity Add options bag to WebSocket constructor # Link copied! Add support fo...

#### 📚 Platform Documentation & References

- [Writing WebSocket client applications - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications) *(developer.mozilla.org)*
- [WebSocket: WebSocket() constructor - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) *(developer.mozilla.org)*
- [WebSocket - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) *(developer.mozilla.org)*
- [GitHub - websockets/ws: Simple to use, blazing fast and thoroughly tested WebSocket client and server for Node.js · GitHub](https://github.com/websockets/ws) *(github.com)*
- [GitHub - webmaxru/mqtt-websockets-angular-pwa](https://github.com/webmaxru/mqtt-websockets-angular-pwa) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=options) (623 test path(s) matching `options`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (38 found across 8 planned queries, 29 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (8 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (623 items)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 1

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

> **Motivation:** An AbortController can be passed into fetch to allow a request to be aborted. This is already supported; see https://chromestatus.com/feature/5631483679080448.  When calling abort, you can optionally pass in an "abort reason", and the original fetch promise, if it hasn't already resolved, should be rejected with that reason. This is currently worki...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 325)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"fetch forward abort reason to response webkit bugzilla"`, `""Fetch API: Forward reason from AbortController to fetch Response""`, `""Fetch API: Forward abort reason to Response" webkit"`
- **Analysis:** This update resolves a long-standing standards compliance gap where developer-supplied abort reasons were lost and replaced by generic AbortError DOMExceptions once response headers resolved and body streaming began. With Chrome and Edge 154 enabling this behavior by default, Chromium joins Firefox in conforming to the WHATWG Fetch specification. Engine consensus is fully aligned, treating this as an overdue bugfix rather than a speculative feature.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should confidently pass structured abort reasons (such as \`DOMException\`, error instances, or timeout markers) to \`AbortController.abort()\`. However, until Safari/WebKit ships the matching implementation, production catch blocks reading response bodies should continue checking both custom reasons and fallback \`name === 'AbortError'\` guards.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **23 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Fetch API: Forward abort reason to Response](https://github.com/WebKit/standards-positions/issues/711) [closed] `invalid`
  > *Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."*

#### 📰 Ecosystem Blogs & Articles

- [fetch Body promises not rejected with reason from AbortSignal \[502133195\] - Chromium](https://issues.chromium.org/issues/502133195) *(issues.chromium.org)*
  > Chromium Sign in
- [Spec reads #1: \[fetch\](https://fetch.spec.whatwg.org/) / Tom MacWright \| Observable](https://observablehq.com/@tmcw/spec-reads-1-fetch) *(observablehq.com · 2018-03-23T20:48:52)*
  > Like most web developers, I&#x27;ve used fetch ever since it was usable in a majority of browsers. Compared to XMLHttpRequest, it was an incredible step forward. But I never took the time to really think it through, unti...
- [Fetch API: Forward reason from AbortController to fetch Response - Chrome Platform Status](https://chromestatus.com/feature/5158507786665984) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17127.html) *(mail-archive.com)*
  > Specification https://fetch.sp... https://chromestatus.com/feature/5631483679080448 <strong>When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t res...
- [\[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17184.html) *(mail-archive.com)*
  > &gt; &gt; Thanks, &gt; Dan &gt; &gt; On Wednesday, ...romestatus.com/feature/5631483679080448 <strong>When calling abort, &gt;&gt; you can optionally pass in an &quot;abort reason&quot;, and the original fetch &gt;&gt; p...
- [The complete guide to the AbortController API - LogRocket Blog](https://blog.logrocket.com/complete-guide-abortcontroller) *(blog.logrocket.com · 2025-03-12T20:35:20)*
  > The trivial example above illustrates how to use the AbortController API with the Fetch API in Node. However, in a real-world project, you don’t start an asynchronous operation and abort it immediately like in the code a...

#### 🔗 Inbound Citations & Reverse Links

- [fetch Body promises not rejected with reason from AbortSignal \[502133195\] - Chromium](https://issues.chromium.org/issues/502133195) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5158507786665984`)*
  > Chromium Sign in
- [GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub](https://github.com/fis-components/whatwg-fetch) *(github.com)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ano...
- [whatwg-fetch/README.md at master · fis-components/whatwg-fetch](https://github.com/fis-components/whatwg-fetch/blob/master/README.md) *(github.com)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > whatwg-fetch/README.md at master · fis-components/whatwg-fetch · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. R...
- [Spec reads #1: \[fetch\](https://fetch.spec.whatwg.org/) / Tom MacWright \| Observable](https://observablehq.com/@tmcw/spec-reads-1-fetch) *(observablehq.com · 2018-03-23T20:48:52)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > Like most web developers, I&#x27;ve used fetch ever since it was usable in a majority of browsers. Compared to XMLHttpRequest, it was an incredible step forward. But I never took the time to really think it through, unti...

#### 📚 Platform Documentation & References

- [GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub](https://github.com/fis-components/whatwg-fetch) *(github.com)*
- [whatwg-fetch/README.md at master · fis-components/whatwg-fetch](https://github.com/fis-components/whatwg-fetch/blob/master/README.md) *(github.com)*
- [Using readable streams - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams) *(developer.mozilla.org)*
- [AbortSignal: timeout() static method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout_static) *(developer.mozilla.org)*
- [AbortSignal: reason property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/reason) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=fetch) (1621 test path(s) matching `fetch`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (59 found across 11 planned queries, 31 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(HTTP 400)* · `Dev.to Community Blogs` (2 found, 4 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (1621 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 3

---

<a id="6366274495053824-remove-fencedframe-element-and-windowfence-apis"></a>
### [Remove FencedFrame element and window.fence APIs](https://chromestatus.com/feature/6366274495053824)

- **Milestone:** Chrome 156 (Deprecated)
- **ChromeStatus:** [chromestatus.com/feature/6366274495053824](https://chromestatus.com/feature/6366274495053824) · [chromestatuslite.com/feature/6366274495053824](https://chromestatuslite.com/feature/6366274495053824)
- **Specification:** [https://wicg.github.io/fenced-frame](https://wicg.github.io/fenced-frame)
- **Chromium Bug:** [https://issues.chromium.org/538634423](https://issues.chromium.org/538634423)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Fenced frames are nested frames that embed content onto a page without the ability to share data between the fenced frame and its embedder.   window.fence APIs include Fenced frames Ads reporting (FFAR) JS APIs that were created for privacy-safe ads reporting from FFs created using Protected Audience and SelectURL and getNestedConfigs() to support PA component ads.   This intent is for removing both of these. Fenced frames element removal will be two step as detailed below.  With the removal (or stub API replacement) of PA and selectURL, FFs can no longer be navigated and thus it is safe to remove them. Fenced frames are only able to be navigated using the urn:uuid in a FencedFrameConfig\[1\], which can only be created using the return values from runAdAuction and selectURL. These APIs are being deprecated and removed in M152 as per the following Intent threads: Protected Audience\[2\], Shared Storage\[3\].   Plan: Given that the fenced frames element can no longer be navigated, we propose removing the element from the code in the following phases:  1. M156: Keep the fenced frame element and its associated IDL dependencies as stubs. This is to ensure no JS call throws, e.g.calling fenced-frame-element.config.setSharedStorageContext().   2. M156: In the same milestone we will also stub the window.fence APIs completely. Since there is no FF document navigation, these APIs cannot be invoked anymore, so it will be a no-op.  3. M157 Canary/Beta: Begin a controlled rollout of the stub FF HTML element removal via a field trial. Note that removing the element will resolve it to HTMLUnknownElement.   At this point we are requesting approvals for all of the above steps.  4. M157 Stable: Assuming there are no regressions or breakage after reaching 1% stable, we will request additional approval for full removal of the FF element.   \[1\]https://source.chromium.org/chromium/chromium/src/+/main:third\_party/blink/renderer/core/html/fenced\_frame/fenced\_frame\_config.idl \[2\]https://groups.google.com/a/chromium.org/g/blink-dev/c/k\_nubsMb97g/m/awPD4IGLBAAJ \[3\]https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc/m/WFTFnhyJBAAJ

> **Motivation:** As described in the summary section, since fenced frames are no longer able to be navigated to a document, once PA and selectURL are removed, we should also remove FFs API for code health and to remove unused APIs from the web platform.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 320)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"fenced frame removal blink-dev "window.fence""`, `""Remove FencedFrame element and window.fence APIs" blink-dev"`, `""Intent to Ship: Remove FencedFrame element and window.fence APIs""`, `""mozilla/standards-positions" "fenced frame" OR "fencedframe""`
- **Analysis:** The \`&lt;fencedframe&gt;\` element and companion \`window.fence\` APIs are being formally removed from Chromium starting with stubbing in Chrome 156 and full removal targeted for Chrome 157. This deprecation directly follows the phase-out of dependent Privacy Sandbox APIs (Protected Audience and Shared Storage \`selectURL\`), which leaves fenced frames without valid navigation sources. The technology never attained cross-browser consensus, having received a formal 'negative' stance from Mozilla and indifference from WebKit, effectively terminating its existence as a Blink-only experiment.

**Key Recommendations & Takeaways:**
- Actionable Advice: Immediately remove all references to \`&lt;fencedframe&gt;\`, \`FencedFrameConfig\`, and \`window.fence\` ads-reporting APIs from production codebases, migrating back to standard sandboxed \`&lt;iframe&gt;\`s where necessary. Ensure that feature detection or DOM queries do not rely on \`HTMLFencedFrameElement\`, as the constructor will downgrade to \`HTMLUnknownElement\` during Chrome 157 rollouts.
- Marked for deprecation in Chrome 156. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **19 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHUda1p5ux00fAUw-NE54HjXkdVWZOuhc0KYMEc_1Y_v3MVFG4-WDOnurgYSK-LRx3F9AiFGBp4nrVD9CrZJm0SdQPWkTicllu_ph_jnZXrToD3xbbkylkrdd7QNrnCre1eqocQYN5mijaaJAipyIPp0OA1GtsRFc7O-IXAQMc4urp_p4MUQg==) *(vertexaisearch.cloud.google.com)*
  > <fencedframe> HTML fenced frame element - HTML | MDN Skip to main content Skip to search Toggle sidebar Web HTML Reference Elements <fencedframe> Theme OS default Light Dark English (US) Remember language Learn more Deut...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE87nJzlnToYDMmon4mr6CmApR-YiSiiSJ_k0LPHTXfwluZjCekidDpS10qswhBWSU48TfVYtebwKPLNjsAbJwcTNUP2EE6pJnj8M16VJXUaWoj-L8bq481EN9HRjXID_UR9ODN-kGWeKA-olsxA0lxbGV3ALb00w==) *(vertexaisearch.cloud.google.com)*
  > Fenced Frame API - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Fenced Frame API Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 中...
- [hidekazu-konishi.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQELfwzYTyR1r1iehXMx0RQKsECi_WMUsZd9VnZkZZSqFLmz2z_uQjwHZMNJL0QwcxL701rqaWqLF4sxjpVb8GuZY0yvaquTO50aGru_5vWx4-blOZfHMmN66FCHjNNmRK7CRsNn43bqiEG0DIaPuyXJ1Vc2QMCT2s-kTq9DMetepJ8y) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature Removal  Following the revised roadmap for the Privacy Sandbox and the deprecation of dependent APIs (such as **Protected Audience** and **Shared Storage `selectURL`**), the Chromium team publi...
- [zenn.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGzMfXcIwOIvRhGupsH5jIRtl38Zc7BrO-RTHioC4_Dp57Zp_N9K75wIUDhiaYT0GvG3qgzVpFgpTtNc1N9bHGanUieZdovTMSWWI_d31cVWdxRMaUdzEsijwWChISJqSNJqK0TV_9e5-1u0hW_bCp3rAjPUm7cqdvOHHk=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature Removal  Following the revised roadmap for the Privacy Sandbox and the deprecation of dependent APIs (such as **Protected Audience** and **Shared Storage `selectURL`**), the Chromium team publi...
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17167.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; [1] &gt;&gt; https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/html/fenced_frame/fenced_frame_config.idl &gt;&gt; &gt;&gt; [2] &gt;&gt; https://groups.google.com/a...
- [\[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17144.html) *(mail-archive.com)*
  > Explainer https://<strong>github.com/WICG/fenced-frame/blob/master/explainer/README.md</strong> Specification https://wicg.github.io/fenced-frame Summary Fenced frames are nested frames that embed content onto a page wit...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17167.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > &gt;&gt; &gt;&gt; [1] &gt;&gt; https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/html/fenced_frame/fenced_frame_config.idl &gt;&gt; &gt;&gt; [2] &gt;&gt; https://groups.google.com/a...
- [\[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17144.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > Explainer https://<strong>github.com/WICG/fenced-frame/blob/master/explainer/README.md</strong> Specification https://wicg.github.io/fenced-frame Summary Fenced frames are nested frames that embed content onto a page wit...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17248.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > [1]https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/html/fenced_frame/fenced_frame_config.idl [2]https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g/m/awPD4IGLBAAJ [...

#### 📚 Platform Documentation & References

- [Remove FencedFrame element and window.fence APIs · Issue #30 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/30) *(github.com)*
- [\[rule\] element/fencedframe · Issue #110 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/110) *(github.com)*
- [\[rule\] element/fencedframe · Issue #431 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/431) *(github.com)*
- [Window: fence property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/fence) *(developer.mozilla.org)*
- [Fenced Frame API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fenced_frame_API) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=fenced-frame) (9 test path(s) matching `fenced-frame`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (43 found across 13 planned queries, 28 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 4 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (8 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (9 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5067363861004288-single-axis-scroll-containers"></a>
### [Single-axis scroll containers](https://chromestatus.com/feature/5067363861004288)

- **Milestone:** Chrome 154 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5067363861004288](https://chromestatus.com/feature/5067363861004288) · [chromestatuslite.com/feature/5067363861004288](https://chromestatuslite.com/feature/5067363861004288)
- **Specification:** [https://github.com/w3c/csswg-drafts/pull/13903](https://github.com/w3c/csswg-drafts/pull/13903)
- **Chromium Bug:** [https://issues.chromium.org/440038212](https://issues.chromium.org/440038212)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Extends the \`overflow\` property to support scrollable values together with \`clip\` (for example, \`overflow: scroll clip\`). This allows \`position: sticky\` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using \`overflow: clip\` stays in place.

> **Motivation:** The CSS \`overflow\` property currently allows behavior to be specified per axis, but it does not provide a way to make a scroll container responsible for only a single axis. The affects features that depend on scroll containers, namely \`position: sticky\` and DOM scroll APIs.  For example, authors may want to use \`position: sticky\` to create a table ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 315)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Single-axis scroll containers is currently In developer trial (Behind a flag) in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Standards Activity (Mozilla): Latest discussion from @freedebreuil: "&gt; How does this play with touch-action?  Thanks, good point. I think the right model is that scroll containers are now per-axis. For \`touch-action\`, t..."
- Standards Activity (W3C TAG): Latest discussion from @freedebreuil: "Thanks @lukewarlow. The breaking change is limited to the case where \`clip\` on one axis is combined with a scrollable overflow value on the other (for..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/680) [open] `topic: css`, `from: Google`, `topic: scrolling`
- **Mozilla:** [Single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1418) [open] `venue: W3C`, `topic: CSS`
  > *Latest discussion from @freedebreuil: "> How does this play with touch-action?  Thanks, good point. I think the right model is that scroll containers are now per-axis. For `touch-action`, t..."*
- **W3C TAG:** [Other Spec Review: Single-Axis Scroll Containers](https://github.com/w3ctag/design-reviews/issues/1222) [open] `Progress: in progress`, `Review type: later review`, `Missing: Multi-stakeholder support`
  > *Latest discussion from @freedebreuil: "Thanks @lukewarlow. The breaking change is limited to the case where `clip` on one axis is combined with a scrollable overflow value on the other (for..."*

#### 📦 Polyfills & NPM Ecosystem

- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) `v7.2.1` — Infinite scroll component for React. Zero runtime dependencies, IntersectionObserver-based, TypeScript-first. Window scroll, fixed-height, and custom container modes. Pull-to-refresh and inverse (chat) scroll included.

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHpU98gjc_T5H8dfwmlKO5KQrFtQqAR9kkFyddxcxyuCuLFM3DzpbM2WTad8bdaVSWGxvI1Ym2xF-qM-nv64hhYMV76atpW_TXcjYNw3x7BTF7jg5dG1m0d_RRQasOrS2Xa-Y6TfMbhI3faTZ5zjCsRCTi-1SQqz8LZ1Tm3GN2-NX2hqawTyi8=) *(vertexaisearch.cloud.google.com)*
  > Ready for developer testing: Single-axis scroll containers | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil T...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEK3vmsDgqSFUqFMxxQuFbMxLv3f19UL3ctd_scdE7LeAnH_vcso05ItT4V2D71LG0PslTfM4JOGz0SyCSkC8OFguQ9As9uHIBt43DXgihAMyHElIY1Z5GC6xkqDQyGyXz8epLI0bz0bagoAwYjt7vnSBEjO6LZh1Aq52vIwA==) *(vertexaisearch.cloud.google.com)*
  > GitHub - explainers-by-googlers/single-axis-scroll-containers: Single-Axis Scroll Containers explainer · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You...
- [localenhance.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFQFMw0YZ-4z1QfOjQU-YyFWA8jTOJQuHY_gH_fbf3Npkhrhac2TSw4z6UK4zntUfsoZfdSzH5RdZgYw4srOXkITF-5eulnsliiBHJK_WZfycVsKk07fXuWN04OiDvf6AH9VQ==) *(vertexaisearch.cloud.google.com)*
  > TWO AXES: the sticky element that could not pick a scroller Chrome 153 · stable 8 Sep 2026 · feature-detected Two axes A horizontal strip inside a vertical page, with one label that has to stay pinned to the left of the ...
- [bram.us](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF05oRZeadxG8LXDoAbQuVPRKHg7I2rJBz0v6BzjNeqn2pxWNbQgg-b2CiDCZ8wVSW4y_vw9sCrL8asEX6IyoDnJYnXLqkHufpydDhU076_SJPDfx8RmsWkxaw1TrOfi68tT4JoA1p5AAk=) *(vertexaisearch.cloud.google.com)*
  > CSS position: sticky now sticks to the nearest scroller on a per axis basis! &#8211; Bram.us Skip to content Bram.us A rather geeky/technical weblog, est. 2001, by Bramus CSS position: sticky now sticks to the nearest sc...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFHVhapoi-PFhWkPWLjwViHWTS7B90UAKJ0163FIgRMntmFOqfISmrsoc4UgykqMVhtEK5d-kjxmppLVaLXdv26wvBWNZ3aaEu3Wy9njk39rstmzNAOq1JC0jmvEC46CZsdbQuWBCagpQOW) *(vertexaisearch.cloud.google.com)*
  > Other Spec Review: Single-Axis Scroll Containers · Issue #1222 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Best, &gt;&gt;&gt; &gt;&gt;&gt; Alex &gt;&gt;&gt; &gt;&gt;&gt; On Tuesday, August 11, 2026 at 11:26:16 AM UTC-7 Chromestatus wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; *Contact emails* &gt;&gt;&gt;&gt...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Best, &gt;&gt;&gt; &gt;&gt;&gt; Alex &gt;&gt;&gt; &gt;&gt;&gt; On Tuesday, August 11, 2026 at 11:26:16 AM UTC-7 Chromestatus wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; *Contact emails* &gt;&gt;&gt;&gt...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Explainer https://github.com/explainers-by-googlers/single-axis-scroll-containers Specification https://github.com/w3c/csswg-drafts/pull/13903 Summary <strong>Extends the `overflow` property to support scrollable values ...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Best, Alex On Tuesday, August 11, 2026 at 11:26:16 AM UTC-7 Chromestatus wrote: &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https://<strong>github.com/explainers-by-googlers/single-axis-scroll...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Blink component Blink&gt;Scroll Web Feature ID scroll-snap Motivation This is part of the single-axis scroll container feature (https://github.com/explainers-by-googlers/single-axis-scroll-containers) to <strong>align th...

#### 📚 Platform Documentation & References

- [Single-axis scroll containers · Issue #1436 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1436) *(github.com)*
- [Other Spec Review: Scroll snap for single-axis scroll container · Issue #1266 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1266) *(github.com)*
- [Element: scrollIntoView() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=single) (559 test path(s) matching `single`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (41 found across 8 planned queries, 20 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 5 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (1 found, 2 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 1 verified) · `Web Platform Tests (wpt.fyi)` (559 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

---

<a id="5095183554314240-iterator-join"></a>
### [Iterator Join](https://chromestatus.com/feature/5095183554314240)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5095183554314240](https://chromestatus.com/feature/5095183554314240) · [chromestatuslite.com/feature/5095183554314240](https://chromestatuslite.com/feature/5095183554314240)
- **Specification:** [https://tc39.es/proposal-iterator-join](https://tc39.es/proposal-iterator-join)
- **Chromium Bug:** [https://issues.chromium.org/issues/465715798](https://issues.chromium.org/issues/465715798)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `In development`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/iterator-join) (Chrome: `153`, Firefox: `154`, Safari: `—`)

#### 📝 Overview

A TC39 proposal to add to JavaScript a means to concatenate the contents of an iterator into a string. The \`join()\` method of Iterator instances is similar to \`Array.prototype.join()\`: it returns a string that is the concatenation of all elements produced by the iterator, separated by commas or a specified separator string.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 311)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Iterator Join is currently Enabled by default in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: \[es-iterator-helpers\](https://www.npmjs.com/package/es-iterator-helpers) (v1.4.0) for progressive enhancement.
- Verified community discussion on Twitter / X: "Iterator join と chunk が Stage 4 だ" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **2 new community discussions** found
- 📰 **2 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Iterator join と chunk が Stage 4 だ](https://twitter.com/re_taro_/status/2104838373437575347) — *Twitter / X by @re_taro_ (0 likes/RTs, 0 replies)*
- 🐦 [ECMAScript excitement 😉   Congrats to @bakkoting on advancing Iterator Join to Stage 4 at @TC39 today 🎉   Iterator.pro](https://twitter.com/robpalmer2/status/2104792224680796588) — *Twitter / X by @robpalmer2 (90 likes/RTs, 1 replies)*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2003341: \[meta\] Iterator join proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=2003341) `[NEW]`

#### 📦 Polyfills & NPM Ecosystem

- [es-iterator-helpers](https://www.npmjs.com/package/es-iterator-helpers) `v1.4.0` *(Verified Polyfill)* — An ESnext spec-compliant iterator helpers shim/polyfill/replacement that works as far down as ES3.
- [obliterator](https://www.npmjs.com/package/obliterator) `v2.0.5` — Higher order iterator library for JavaScript/TypeScript.

#### 📰 Ecosystem Blogs & Articles

- [Iterators in PostgreSQL with Lateral Joins](https://info.crunchydata.com/blog/iterators-in-postgresql-with-lateral-joins) *(info.crunchydata.com · 2020-08-11T17:03:30Z)*
  > Iterators in PostgreSQL with Lateral Joins | Crunchy Data Blog Steve Pousty Aug 11, 2020 · 4 min read More by this author Latest Articles Postgres Calculations and the Ambiguity of NULL Postgres 19: How Our Advice Has Ch...
- [tc39.es](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHs7adeJCZoq7EFXBWhSr6fkIjQp9a-4Gb7vIakYKIO5tunLSnBSkg1DJOVZ1EJzBTXqZ2NbLmWZaV7emkVpiRSGCpWpvY-BPhNAvtt2g78NEX8_O4XqkFZy8o6dA==) *(vertexaisearch.cloud.google.com)*
  > Proposal Iterator Join Toggle shortcuts help ? Toggle "can call user code" annotations u Jump to search box / Toggle pinning of the current clause p Jump to the n th pin 1-9 Jump to the 10 th pin 0 Jump to the most recen...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGnyQVVdJvDt2e00XsJEHWg8kOeDV9jhp3k4BencWt4prGjDz6Z1-xJGfCHVb2XlgMb8hQYHNuyWM1EjxX_n9Tr-gWKUt7pY_2uTsUtpMBAbqdxeFsI5BbVXYRGy2XVAk0qY7I=) *(vertexaisearch.cloud.google.com)*
  > GitHub - tc39/proposal-iterator-join: JS proposal for a means to concatenate the contents of an iterator into a string · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appeara...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEnoWqYTXrxDCtLWrBjKL0O_r1q7LZ1N74VXamvz0oYo8yvKybOidt6xVzx6lB6Mbgbsxzx6FQ-waSoC74Z1Q-NejncKFVECVnTda_bisG7ZPsjJcbZ1lnWTAG6MFMcTuyBxCZyMx6pUd12Tnd6qcRizomVqTC1Wwz2R3JBOy0HUD-_M_dycHgMe1MIpy-hbwOLmp0=) *(vertexaisearch.cloud.google.com)*
  > Iterator.prototype.join() - JavaScript | MDN Skip to main content Skip to search Toggle sidebar Web JavaScript Reference Standard built-in objects Iterator join() Theme OS default Light Dark English (US) Remember languag...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE--2gKThseHPAy4Sf7cvRHK6VQ50XuQ2ua2I58VyLFzDZaG3eK9OErGcUWB6khs4SN89MX7-Anqu67jTQc3JUgryiTM_OW4C4lPp9z94VaOkeacn3SLuNxV74R6Jj51jot4jN0UbM=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [bsky.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGQwv5pEh3J5xwqtbQdMInGRu6TPd_ftQn0gesXHXajXwXn_1m4j6SdJUqcDgQxaDi5k1yV768I4sZpHmfm6G1sHmixmDe_XZonzFUmXYUu_VvyeGsUH5z3DxJLBBTNUl4vITQ=) *(vertexaisearch.cloud.google.com)*
  > @robpalmer.bsky.social on Bluesky Profile Rob Palmer robpalmer.bsky.social did:plc:w227epg3attqnssfdkx6ex6a JavaScript Infrastructure & Tooling at Bloomberg. Co-chairing TC39. Likely to tweet tech stuff about JS & softwa...

#### 🔗 Inbound Citations & Reverse Links

- [web-features consumers report for 2026-10-01 · Issue #4457 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4457) *(github.com · 2026-10-01T10:28:04)* *(Cites: `https://chromestatus.com/feature/5095183554314240`)*
  > tc39-iterator-join used by https://<strong>chromestatus.com/feature/5095183554314240</strong>
- [Iterator Join · Issue #4304 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4304) *(github.com · 2026-09-03T10:46:12)* *(Cites: `https://chromestatus.com/feature/5095183554314240`)*
  > https://<strong>chromestatus.com/feature/5095183554314240</strong> · Firefox bug 2047995 · WebKit bug 304586 · BCD: javascript.builtins.Iterator.join · Reactions are currently unavailable · Sign up for free to join this ...
- [2047995 - Ship Iterator Join proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=2047995) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/tc39/proposal-iterator-join`)*
  > Release Note Request (optional, but appreciated) [Why is this notable]: Ships Iterator.prototype.join [Affects Firefox for Android]: Yes [Suggested wording]: This adds a new Iterator.prototype.join method that <strong>al...
- [\[blink-dev\] Intent to Ship: Iterator Join](http://www.mail-archive.com/blink-dev@chromium.org/msg17147.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-iterator-join`)*
  > Explainer https://github.com/tc39/proposal-iterator-join Specification https://tc39.es/proposal-iterator-join Summary <strong>A TC39 proposal to add to JavaScript a means to concatenate the contents of an iterator into a...

#### 📚 Platform Documentation & References

- [web-features consumers report for 2026-10-01 · Issue #4457 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4457) *(github.com)*
- [Iterator Join · Issue #4304 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4304) *(github.com)*
- [2047995 - Ship Iterator Join proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=2047995) *(bugzilla.mozilla.org)*
- [Iterator.prototype.join() - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/join) *(developer.mozilla.org)*
- [feat(engine): implement Iterator.prototype.join proposal by xcb3d · Pull Request #5503 · boa-dev/boa](https://github.com/boa-dev/boa/pull/5503) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=iterator) (1194 test path(s) matching `iterator`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (52 found across 12 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 15 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (6 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (6 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 2 verified) · `Web Platform Tests (wpt.fyi)` (1194 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5811907077472256-speechrecognitionresult-timestamps-webspeech-api"></a>
### [SpeechRecognitionResult Timestamps (WebSpeech API)](https://chromestatus.com/feature/5811907077472256)

- **Milestone:** Chrome 153 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5811907077472256](https://chromestatus.com/feature/5811907077472256) · [chromestatuslite.com/feature/5811907077472256](https://chromestatuslite.com/feature/5811907077472256)
- **Specification:** [https://github.com/WebAudio/web-speech-api/pull/192](https://github.com/WebAudio/web-speech-api/pull/192)
- **Chromium Bug:** [https://crbug.com/528037568](https://crbug.com/528037568)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The Web Speech API currently does not expose the acoustic timing bounds of recognized speech segments, making it difficult to associate transcribed text with media timelines or generate synchronized subtitle cues. We propose adding speechStartTime and speechEndTime (double, in seconds relative to stream start) attributes on the SpeechRecognitionResult interface.

> **Motivation:** The Web Speech API currently does not expose the acoustic start and end timestamps of recognized speech utterances on SpeechRecognitionResult. While SpeechRecognitionEvent.timeStamp conveys when the DOM event occurred, it provides no information about the acoustic boundaries or duration of the speech segment within the source audio stream.  Exposin...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 295)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"site github com WebAudio web speech api 191 OR 192"`, `""standards-positions" "SpeechRecognitionResult" OR "web-speech-api" timestamps"`, `""SpeechRecognitionResult Timestamps" web speech api"`, `""speechStartTime" "speechEndTime" "SpeechRecognitionResult""`, `""SpeechRecognitionResult" timestamps chrome status"`
- **Analysis:** The proposal to add \`speechStartTime\` and \`speechEndTime\` to \`SpeechRecognitionResult\` resolves a long-standing architectural limitation in the Web Speech API by providing acoustic audio bounds in seconds, enabling native subtitle cue generation and click-to-seek media alignment. Currently in developer trials behind the \`WebSpeechTimestamps\` flag in Chrome 153 and undergoing W3C TAG review (#1267), the specification recently shifted from millisecond offsets to non-nullable double timestamps aligned with \`HTMLMediaElement.currentTime\` and \`VTTCue\`. However, broad cross-engine consensus remains in its infancy, with no formal positions yet adopted across non-Chromium engines.

**Key Recommendations & Takeaways:**
- Actionable Advice: Evaluate the feature behind the \`WebSpeechTimestamps\` flag in Chromium 153+ to test media-transcript synchronization workflows, but strictly gate usage via feature detection (\`'speechStartTime' in SpeechRecognitionResult.prototype\`). Continue using server-side or WebAssembly transcription pipelines with fallback cue estimation for production cross-browser captioning until interoperability stabilizes.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGtzmb77u26DOi0TYYEq4xZC020eC8WynTTcjFuZPSNsvY3e7p0AHlVh7G3A_sNq65cW06A5q5cIvWgTaHdUpj8wAwQ5a30hE_n-Kzc36Nat_KlkvDWFnkn4-2HLv7_npqCIvXpFg6-coZMFQBy5o2UK1mrQsL6hQ==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGeZZwvf2pnIPgiQPgwsaGt_eu0dc3excSTkP-NLkGKWpwDsDDVbOxoPlIKcCJLjtAlAV6NHU1zuovYSJnIpmZ8EMSLj_lfFNAzvPm-GFXqKDbaBBZ_yqQ76xFpQ7-NdI0auoUXjzNpEAmVXw==) *(vertexaisearch.cloud.google.com)*
  > Add SpeechRecognitionResult Timestamps · Issue #191 · WebAudio/web-speech-api · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [googleusercontent.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHuG00mcp1PknPBqOU8ZW3PEKzKCGh4XRaAHvL-nWG0Ac6yuwWU5_7PXIO_UnVCL5cWvnGlTSEqGVYeX44bNJMQQIYaMLb1A0P5Gx8X2XQMy7lH_o05IfG1Kl0mhjwHfiNM3Ec5zQ-DOMUOg7bYVh5nQ_VfGVzsJh70Fuqi6Lhb) *(vertexaisearch.cloud.google.com)*
  > Google Issue Tracker Sign in
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE4_4h7-C0A1PaulV8AaXhu6zF05OuG3c_Wkrs9lI838n3C1Qj3EqT66qeBXnZq1QIB5OCCbEPRwNLLcLgiI3nZbPHRx7Uay5vFnBddQVyMuBOLUBZl-ZfGa73IK03TZhFOeIi8zFyYvekV8Q0eV0TP-3zulUyXiaLUiG7QcU5ocpPxwJ5Nhw==) *(vertexaisearch.cloud.google.com)*
  > Chromium Dash
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFt5XZ1f1jKtdtKSQVG7ZsWMP1TID12vyRxaD4nRUrcXXOnLuf46XcPgGmKr8XqtKB3ieWgx_9agPy_NffgtJ2cRh-2_22JAlRIRIjLGBzBd85vKJE4yu61kfXIwIL9GiD0VDOGatZqpHt5xDruYfu6nCeo_sCFtbXXtYipWqg=) *(vertexaisearch.cloud.google.com)*
  > SpeechRecognitionResult - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs SpeechRecognitionResult Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) ...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFgDXunuUvf5IqH436A3iFUJfiTV9gSVJHdNr7PDQ-Dsi9JvopnI0jTFTGkwQ7oi6Id1JhZoo--XuMYHhzPyKAG9eVR3bUhNwCXpswx1ujQZw8MnhGTbUZiZ8W3R-5zSpMIWLeJGAMkl2cw4UZf-fCpJUUUBFK7wp2Ubd6mg110YGA8X1OgpKYQKOWLa4q5mfcss15VtSwjwF_7GfarAT4_RLDrQmUTeBVfttSrxP-f) *(vertexaisearch.cloud.google.com)*
  > SpeechRecognitionResult Class (Microsoft.CognitiveServices.Speech) - Azure for .NET Developers | Microsoft Learn Пропустить и перейти к основному содержимому Переход к навигации на странице Переход к интерфейсу чата Ask ...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > &gt; &gt; *Initial public proposal* &gt; https://github.com/WebAudio/web-speech-api/issues/191 &gt; &gt; *Goals for experimentation* &gt; None &gt; &gt; *Requires code in //chrome?* &gt; False &gt; &gt; *Tracking bug* &g...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > False Tracking bug https://crbug.com/528037568 Estimated milestones No milestones specified Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5811907077472256</strong>?gate=591711867672...
- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com · 2026-08-22T03:37:06)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > Chromium comments: Positive / In active development (https://<strong>chromestatus.com/feature/5811907077472256</strong>)

#### 📚 Platform Documentation & References

- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com)*
- [HTMLMediaElement: currentTime property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime) *(developer.mozilla.org)*
- [HTMLMediaElement: timeupdate event - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event) *(developer.mozilla.org)*
- [Add Speech Recognition API support · Issue #386 · Spomky-Labs/pwa-bundle](https://github.com/Spomky-Labs/pwa-bundle/issues/386) *(github.com)*
- [SpeechRecognition - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) *(developer.mozilla.org)*

#### 🧪 Interactive Demos & Samples

- [SpeechRecognitionResult Timestamps (WebSpeech API) Demo](https://alan33d.github.io/web-speech-demos/live_meeting_recording_demo.html)
- [SpeechRecognitionResult Timestamps (WebSpeech API) Demo](https://alan33d.github.io/web-speech-demos/webrtc_caption_sync_test.html)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=192) (13 test path(s) matching `192`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 13 planned queries, 19 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (13 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5085785343787008-audiopreferred-capture-in-getdisplaymedia-api"></a>
### [audioPreferred capture in getDisplayMedia API](https://chromestatus.com/feature/5085785343787008)

- **Milestone:** Chrome 152 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5085785343787008](https://chromestatus.com/feature/5085785343787008) · [chromestatuslite.com/feature/5085785343787008](https://chromestatuslite.com/feature/5085785343787008)
- **Specification:** [https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection](https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection)
- **Chromium Bug:** [https://issues.chromium.org/issues/535514300](https://issues.chromium.org/issues/535514300)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Adds an audioPreference attribute to the DisplayMediaStreamOptions dictionary used in the getDisplayMedia API.   This hint allows web applications to signal to the UA that they prefer audio sharing along with video. This helps developers ensure that applications relying on audio capture work seamlessly.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 290)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** audioPreferred capture in getDisplayMedia API is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Audio Selection Preference for getDisplayMedia](https://github.com/WebKit/standards-positions/issues/696) [open] 
- **Mozilla:** [Audio Selection Preference for getDisplayMedia](https://github.com/mozilla/standards-positions/issues/1433) [open] 

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFXr4y_9WiIntSt_4esNmU7HGzqqV-cX5Y7bsdFUqypS8_4mUFbu4dUnEQTZLxMhKrmIBI--Xg5lF3KoaglL3ntxNx9lGJrsUFeGHYlKPYel5Fyp9bfOfB0BdFmJztVOeJ7tSWu2S77) *(vertexaisearch.cloud.google.com)*
  > Chrome 152 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة ف...
- [addpipe.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFUJUlDzcvstTlMZ9HNkYuQyXYdv4bLu9p8yq8cwHDL2REdIrG8KvVtOBmZJ_EsJPdgtR4NjsVKjBmBw4gvd2AemnJwpl-Dcvj5UPQM2HL6kmR8Lo2NOZ0ZS9mueVR6M51OVuT1meBigmOC) *(vertexaisearch.cloud.google.com)*
  > Using getDisplayMedia to record the screen, system or browser tab audio, and the microphone | addpipe.com The Pipe Platform Achieves Security and Compliance Milestone with SOC 2 Type I Attestation. Learn More Home > Tech...
- [dev.to](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH8MGFGJNG6Yh5SkrBWatju29VvM-H5xgQkZ5nc6vEwggQ09tswyqRSTzoM6S9BkozSNuhQgAXT2hEc_AqQsFXYu2EaAxscr8NGqRbzgFGewv2sdJHZgTgUmlVPdwm3v7Y5im9JC6ITk5M4zh5tBs3ie2ghDKE2U1jr5ZrhlCoMp_ma-ll5eh9K2Xosqd1Op9KSKfrMduqtAaYHjKx-) *(vertexaisearch.cloud.google.com)*
  > I tried to capture system audio in the browser. Here&#39;s what I learned. - DEV Community Skip to content Powered by Algolia Log in Create account DEV Community Add reaction Like Unicorn Exploding Head Raised Hands Fire...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHNoEb0mlXIPd943-XzqqM70XtBEyLz9NhODorzgW_eGR37L-Jn0ACXchUBDwSXNBo9csbmZzXd6wFWfr_-bX5CeiF76WSPo3p8juE3RHxBU7qlQgwElKVr5txTd8F2X4IM4yTWo5Gy3GoQWsp60IENKf9NTCcgZdFISPo=) *(vertexaisearch.cloud.google.com)*
  > Capturing audio-only · Issue #12 · w3c/mediacapture-screen-share-extensions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab...
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGoUlvpNbLd3bPmco6tEKA4Zntnb-ZJBfQltW0fOhmTzPeNUwYSzhujxQoEANi8hsMIt42SQ2Vcz2eV_vfn074-9om2rcWn3vgf7UIfeeIMhKH1dsHoZlVl0ksi8Re60uVMgcKJAawu_gZsbj4Bk9OKrei6G6RiNRnKlEhU6EhIHgVceVYoqO9RWropvYrSiYjEw7R4lWRlkIU_1Y1fOogW_2gtzA3TtA==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"audioPreferred capture in `getDisplayMedia` API"** feature introduces the `audioPreference` option to the `DisplayMediaStreamOptions` dictionary passed to `navigator.mediaDevices.getDisplayMed...
- [htmlspecs.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE9r2qpxVnArq5wOeEudgu15gJwR9hs4YU60QfQO_P-ItkphZvvW8avOrAH-iaEZpwLB-GBJPT5JfC2IdIehi-OHBGFec1fe3U3bCXkjQswuMFZgYaPSZrSv9aWaRZQ) *(vertexaisearch.cloud.google.com)*
  > --> 画面キャプチャ --> 画面キャプチャ W3C ワーキングドラフト 2026年8月27日 この文書の詳細 このバージョン: https://www.w3.org/TR/2026/WD-screen-capture-20260827/ 最新の公開版: https://www.w3.org/TR/screen-capture/ 最新の編集者草案: https://w3c.github.io/mediacapture-screen-s...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17031.html) *(mail-archive.com)* *(Cites: `https://github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md`)*
  > &gt; *Contact emails* &gt; [email protected], [email protected] &gt; &gt; *Explainer* &gt; &gt; https://<strong>github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explaine...
- [\[blink-dev\] Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17022.html) *(mail-archive.com)* *(Cites: `https://github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md`)*
  > Explainer https://github.com/p...reen-share/#dom-displaymediastreamoptions-audioselection Summary <strong>Adds an audioPreference attribute to the DisplayMediaStreamOptions dictionary used in the getDisplayMedia API</str...
- [Re: \[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17033.html) *(mail-archive.com)* *(Cites: `https://github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md`)*
  > &gt; LGTM2 &gt; &gt; On Wed, Jul 22, 2026 at 8:27 AM Alex Russell &lt;[email protected]&gt; &gt; wrote: &gt; &gt;&gt; LGTM1 &gt;&gt; &gt;&gt; On Wednesday, July 22, 2026 at 5:29:55 AM UTC-7 Chromestatus wrote: &gt;&gt; &...
- [Screen Capture](https://www.w3.org/TR/screen-capture) *(w3.org · 2026-08-27T00:00:00)* *(Cites: `https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection`)*
  > https://<strong>w3c.github.io/mediacapture-screen-share</strong>/ History: https://www.w3.org/standards/history/screen-capture/ Commit history ·
- [content/files/en-us/web/api/screen\_capture\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/screen_capture_api/index.md) *(github.com)* *(Cites: `https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection`)*
  > https://<strong>w3c.github.io/mediacapture-screen-share</strong>/ https://screen-share.github.io/element-capture/ https://w3c.github.io/mediacapture-region/ https://w3c.github.io/mediacapture-surface-control/ {{DefaultAP...

#### 📚 Platform Documentation & References

- [Screen Capture](https://www.w3.org/TR/screen-capture) *(w3.org)*
- [content/files/en-us/web/api/screen\_capture\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/screen_capture_api/index.md) *(github.com)*
- [feat: ask the browser to pre-tick the screen-share audio checkbox by fcatuhe · Pull Request #387 · murtaza-nasir/speakr](https://github.com/murtaza-nasir/speakr/pull/387) *(github.com)*
- [mediacapture-screen-share/index.html at gh-pages · w3c/mediacapture-screen-share](https://github.com/w3c/mediacapture-screen-share/blob/gh-pages/index.html) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=capture) (397 test path(s) matching `capture`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (39 found across 12 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 15 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (397 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="6312504658624512-interoperable-dispatch-timing-for-transitionrun-and-media-query-events"></a>
### [Interoperable dispatch timing for transitionrun and media query events](https://chromestatus.com/feature/6312504658624512)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6312504658624512](https://chromestatus.com/feature/6312504658624512) · [chromestatuslite.com/feature/6312504658624512](https://chromestatuslite.com/feature/6312504658624512)
- **Specification:** [https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model)
- **Chromium Bug:** [https://crbug.com/397737222](https://crbug.com/397737222)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Aligns Blink's dispatch timing for animation "transitionrun" event and media query "change" event with the spec, making the timing interoperable with Gecko and WebKit. More precisely, as per HTML window event loop specification, "transitionrun" events will be fired at Step 3.11 even for animations created earlier in the same iteration (instead of delaying them for a later iteration), and the media query "change" event will be fired at Step 3.10 before firing any pending animation events (instead of intermixing them with animation events at Step 3.11).

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 290)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""transitionrun" "media query" dispatch timing chrome 153"`, `""397737222" chromium"`
- **Analysis:** Shipped in Chrome and Microsoft Edge 153 under the internal flag 'EventTimingMatchingHTML', this change resolves a long-standing event loop discrepancy in Blink by strictly aligning event dispatch ordering with the WHATWG HTML specification. Media query 'change' events are now cleanly dispatched at Step 3.10 prior to animation events, and newly created 'transitionrun' events fire immediately in the same rendering iteration at Step 3.11 rather than being deferred. This update closes a subtle cross-engine interoperability gap, matching the established behaviors of Gecko and WebKit.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams do not need to rewrite modern animations, but they should audit complex layout and UI state machines that coordinate CSS transitions with media query changes to remove any manual \`setTimeout\` or \`requestAnimationFrame\` debouncing workarounds. Verify that legacy test suites do not inadvertently rely on Chromium's former delayed multi-frame dispatch of \`transitionrun\` events.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome 153 beta \| Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **19 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome 153 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2093424350036660456) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X](https://x.com/ChromiumDev/status/2093424350036660456) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [scroll events (and some other events) get fired along with animation related events \[397737222\] - Chromium](https://issues.chromium.org/issues/397737222) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events](http://www.mail-archive.com/blink-dev@chromium.org/msg17091.html) *(mail-archive.com)*
  > [blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transitionrun and media query events Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: Interoperable dispatch timing for transit...
- [Real-Time Dispatch System: A Complete Guide](https://redis.io/blog/real-time-dispatch-system) *(redis.io · 2026-04-08T16:28:55)*
  > In emergency services, the dispatch architecture is known as computer-aided dispatch (CAD). When a 911 call comes in, the system identifies available units, evaluates proximity and response capability, and assigns the cl...
- [JavaScript dispatchEvent Guide: Learn How to Trigger Custom Events](https://zetcode.com/dom/element-dispatchevent) *(zetcode.com · 2025-04-02T00:00:00)*
  > <strong>The dispatchEvent method dispatches an Event at a specified EventTarget (element, document, window, etc.).</strong>
- [JavaScript dispatchEvent(): Generate Events programmatically](https://www.javascripttutorial.net/javascript-dom/javascript-dispatchevent) *(javascripttutorial.net · 2020-05-22T00:38:58)*
  > Summary: in this tutorial, you’ll learn how to <strong>programmatically create and dispatch events using Event constructor and dispatchEvent() method</strong>.
- [Dispatching custom events](https://javascript.info/dispatch-events) *(javascript.info · 2022-10-14T00:00:00)*
  > For new, custom events, there are definitely no default browser actions, but a code that dispatches such event may have its own plans what to do after triggering the event.

#### 🔗 Inbound Citations & Reverse Links

- [scroll events (and some other events) get fired along with animation related events \[397737222\] - Chromium](https://issues.chromium.org/issues/397737222) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/6312504658624512`)*
  > Chromium Sign in
- [wpt/html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/tree/master/html) *(github.com)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > wpt/html at master · web-platform-tests/wpt · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh yo...
- [Unclear what to do with fragments on document.open · Issue #2555 · whatwg/html](https://github.com/whatwg/html/issues/2555) *(github.com · 2017-04-18T22:02:24)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Unclear what to do with fragments on document.open · Issue #2555 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ...
- [Event handlers are not compiled against the right global, per spec · Issue #1956 · whatwg/html](https://github.com/whatwg/html/issues/1956) *(github.com · 2016-10-24T14:38:16)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Event handlers are not compiled against the right global, per spec · Issue #1956 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed ...
- [Where are steps about recalculate styles and update layer tree before painting? (question) · Issue #7036 · whatwg/html](https://github.com/whatwg/html/issues/7036) *(github.com · 2021-09-07T14:50:55)* *(Cites: `https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model`)*
  > Where are steps about recalculate styles and update layer tree before painting? (question) · Issue #7036 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appeara...

#### 📚 Platform Documentation & References

- [wpt/html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/tree/master/html) *(github.com)*
- [Unclear what to do with fragments on document.open · Issue #2555 · whatwg/html](https://github.com/whatwg/html/issues/2555) *(github.com)*
- [Event handlers are not compiled against the right global, per spec · Issue #1956 · whatwg/html](https://github.com/whatwg/html/issues/1956) *(github.com)*
- [Where are steps about recalculate styles and update layer tree before painting? (question) · Issue #7036 · whatwg/html](https://github.com/whatwg/html/issues/7036) *(github.com)*
- [Do we have a style for when to add \[SPECNAME\] to the end of a paragraph? · Issue #41 · whatwg/meta](https://github.com/whatwg/meta/issues/41) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webappapis) (367 test path(s) matching `webappapis`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 11 planned queries, 25 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Dev.to Community Blogs` (4 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (0 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (367 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5183354944225280-webtransport-datagram-writable-streams-and-prioritization"></a>
### [WebTransport Datagram writable streams and prioritization](https://chromestatus.com/feature/5183354944225280)

- **Milestone:** Chrome 155 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5183354944225280](https://chromestatus.com/feature/5183354944225280) · [chromestatuslite.com/feature/5183354944225280](https://chromestatuslite.com/feature/5183354944225280)
- **Specification:** [https://www.w3.org/TR/webtransport/#datagram-writable](https://www.w3.org/TR/webtransport/#datagram-writable)
- **Chromium Bug:** [https://issues.chromium.org/issues/547572475](https://issues.chromium.org/issues/547572475)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `In development`

#### 📝 Overview

Adds the modern WebTransport Datagram sending API.  WebTransportDatagramDuplexStream.createWritable() creates independent WebTransportDatagramsWritable streams. Each writable has mutable sendGroup and sendOrder attributes for expressing relative priority among queued WebTransport data in the same send group. Chromium currently applies this ordering among Datagram writables.  The implementation also reports the negotiated maximum outgoing Datagram payload size and discards oversized writes as required by the WebTransport specification.

> **Motivation:** The original WebTransport Datagram API exposes only a single writable stream, preventing applications from independently scheduling different classes of latency-sensitive messages.  The newer API allows applications such as games, remote-interaction systems, and real-time media applications to create multiple Datagram writables and prioritize urgen...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 290)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** WebTransport Datagram writable streams and prioritization is currently In developer trial (Behind a flag) in Chrome 155. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **29 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Intent to Experiment: WebTransport over HTTP/3](https://groups.google.com/a/chromium.org/g/blink-dev/c/aaLFxzw5zL4/m/H3V_l-qlAgAJ) *(groups.google.com)*
  > Intent to Experiment: WebTransport over HTTP/3 Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Web...
- [Intent to extend the origin trial: WebTransport over HTTP/3](https://groups.google.com/a/chromium.org/g/blink-dev/c/JHZLOnRkRhk/m/Eh5tHLg-BwAJ) *(groups.google.com)*
  > Intent to extend the origin trial: WebTransport over HTTP/3 Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to ex...
- [Intent to Prototype and Ship: WebTransport BYOB readers](https://groups.google.com/a/chromium.org/g/blink-dev/c/18ZdUE1B_zg/m/2JFujuSpBQAJ) *(groups.google.com)*
  > Intent to Prototype and Ship: WebTransport BYOB readers Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Protot...
- [Intent to Ship: WebTransport serverCertificateHashes option](https://groups.google.com/a/chromium.org/g/blink-dev/c/m0v9XiwKA4M/m/GtMq9j_iAAAJ) *(groups.google.com · 2022-01-20T00:00:00)*
  > Intent to Ship: WebTransport serverCertificateHashes option Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Sh...
- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: WebTransport Datagram readable stream type Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: WebTransport Datagram readable stream type Chromestatus Mon, 14 Sep 2026 ...
- [Re: \[blink-dev\] Intent to Ship: WebTransport](https://www.mail-archive.com/blink-dev@chromium.org/msg00592.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: WebTransport Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: WebTransport Philip Jägenstedt Thu, 30 Sep 2021 03:31:40 -0700 Hi again, I've made a full pass of the int...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Experiment: WebTransport over HTTP/3](https://groups.google.com/a/chromium.org/g/blink-dev/c/aaLFxzw5zL4/m/H3V_l-qlAgAJ) *(groups.google.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#5-sending-and-receiving-datagrams`)*
  > Intent to Experiment: WebTransport over HTTP/3 Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Web...
- [Intent to extend the origin trial: WebTransport over HTTP/3](https://groups.google.com/a/chromium.org/g/blink-dev/c/JHZLOnRkRhk/m/Eh5tHLg-BwAJ) *(groups.google.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#5-sending-and-receiving-datagrams`)*
  > Intent to extend the origin trial: WebTransport over HTTP/3 Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to ex...
- [Intent to Prototype and Ship: WebTransport BYOB readers](https://groups.google.com/a/chromium.org/g/blink-dev/c/18ZdUE1B_zg/m/2JFujuSpBQAJ) *(groups.google.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#5-sending-and-receiving-datagrams`)*
  > Intent to Prototype and Ship: WebTransport BYOB readers Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Protot...
- [1709355 - (WebTransport) \[meta\] WebTransport](https://bugzilla.mozilla.org/show_bug.cgi?id=1709355) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#5-sending-and-receiving-datagrams`)*
  > 1709355 - (WebTransport) [meta] WebTransport Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advanced Search New Bug Reports Document...
- [Intent to Ship: WebTransport serverCertificateHashes option](https://groups.google.com/a/chromium.org/g/blink-dev/c/m0v9XiwKA4M/m/GtMq9j_iAAAJ) *(groups.google.com · 2022-01-20T00:00:00)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#5-sending-and-receiving-datagrams`)*
  > Intent to Ship: WebTransport serverCertificateHashes option Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Sh...

#### 📚 Platform Documentation & References

- [1709355 - (WebTransport) \[meta\] WebTransport](https://bugzilla.mozilla.org/show_bug.cgi?id=1709355) *(bugzilla.mozilla.org)*
- [WebTransport · Issue #18 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/18) *(github.com)*
- [webtransport/index.bs at main · w3c/webtransport](https://github.com/w3c/webtransport/blob/main/index.bs) *(github.com)*
- [GitHub - adriancable/webtransport-go: Lightweight but fully-capable WebTransport server for Go · GitHub](https://github.com/adriancable/webtransport-go) *(github.com)*
- [WebTransportDatagramDuplexStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramDuplexStream) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webtransport) (119 test path(s) matching `webtransport`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (37 found across 8 planned queries, 27 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (119 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5094091886034944-webgpu-buffer_view-feature"></a>
### [WebGPU: \`buffer\_view\` feature](https://chromestatus.com/feature/5094091886034944)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5094091886034944](https://chromestatus.com/feature/5094091886034944) · [chromestatuslite.com/feature/5094091886034944](https://chromestatuslite.com/feature/5094091886034944)
- **Specification:** [https://github.com/gpuweb/gpuweb/pull/6291](https://github.com/gpuweb/gpuweb/pull/6291)
- **Chromium Bug:** [https://crbug.com/tint/506523198](https://crbug.com/tint/506523198)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `Closed Without a Position`

#### 📝 Overview

WGSL language feature for reinterpreting data in variables.  The feature allows developers to divide a single uniform, storage, or workgroup variable into multiple logical variables. It also allows the type of the data in the variable to be interpreted as multiple types within the program.

> **Motivation:** This features adds a new opaque type for use with storage and uniform buffers and workgroup variables. It allows the data in those variables to be reinterpreted as other types. This is useful for both type-punning data and logically sub-dividing a variable into multiple parts.  For ease-of-use and safety, the opaque type can only be operated on by ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 285)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** WebGPU: \`buffer\_view\` feature is currently Enabled by default in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 📦 Polyfills & NPM Ecosystem

- [@webgpu/types](https://www.npmjs.com/package/@webgpu/types) `v0.1.74` — This package defines Typescript types (`.d.ts`) for the upcoming [WebGPU standard](https://github.com/gpuweb/gpuweb/wiki/Implementation-Status).

#### 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHOmaCta6tbygfwNxgv7HvcnIzisXRoJmMNVb6pWWW4ct1VHtLxXC-FO0I3XoHNzbfCHj9lIX2iLHxaFQYzQaJWlAkeCCMLhhULyHnh7YBUNyc=) *(vertexaisearch.cloud.google.com)*
  > The **`buffer_view`** feature is an addition to the WebGPU Shading Language (WGSL) specification. It introduces type reinterpretation for GPU memory, allowing developers to divide a single `uniform`, `storage`, or `workg...
- [aketdoy.es](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFbRyaNgriz99aKyRVCdL-PlPFRQ1C7cYKupISw5zD0-QuGE_Y6DLQlXK4cLV759fsqrPTAJ6rFM_ghCdrl_QvT22c-qqJACMRa-5bSx97iCQHytrppbl1pDj3_76v7Oh4HFYdk_o10) *(vertexaisearch.cloud.google.com)*
  > Chrome 153 y WebGPU buffer_view: memoria flexible Saltar al contenido aketdoy@aketdoy.es Chrome 153 y WebGPU buffer_view: shaders con memoria más flexible 21 septiembre, 2026 por Yandrak Chrome 153 no trae una sola noved...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEEK-31VS4TqctcMEgeCpR1TBVq4s7kiSRgvuUJmj3MRKN43YSwrFJW860K7NWujq9Z57N4tubAF1OzIgYpBu42pqnAGvPkyLfE1TNbrY8pq4YDMsDgHuOjPvLtX11AtC53NHdc1A64) *(vertexaisearch.cloud.google.com)*
  > buffer_view : best practice? · gpuweb/gpuweb · Discussion #6343 · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. ...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEW2xXhLy0_GeC6dNYbwyNSNnpsa4vzzBBYxdY4bpv3i_R9AP5azdf913V_nTRLdSL_P81k7GLtAxud2QVzyEhB96Th1dpSuq0bDrjEuW-NFmyus00UcmZSrI3Wzk3Ouxl3I3xjM6j-li_FpLOSCAxIsOSOSAyTXi-48OWd9lercBU3zzKt) *(vertexaisearch.cloud.google.com)*
  > The **`buffer_view`** feature is an addition to the WebGPU Shading Language (WGSL) specification. It introduces type reinterpretation for GPU memory, allowing developers to divide a single `uniform`, `storage`, or `workg...
- [jendrikillner.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEbygzk31R6kgMVl300XVeb__YtiQeLY1Oqa9GtotztrGlfpLkMrwle9ctluadp8swTlaNxbX5aVCBg79AU8NrXqDqPywRBmHq1KTaUTDQmYh-ingUO5nXVPY4oxzINVz1lv2yd22hRKvzTLapIGQplvUelEM9Jxc0MKm7LD9vd) *(vertexaisearch.cloud.google.com)*
  > The **`buffer_view`** feature is an addition to the WebGPU Shading Language (WGSL) specification. It introduces type reinterpretation for GPU memory, allowing developers to divide a single `uniform`, `storage`, or `workg...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGQmBUR6sJ3O8JB7mcokeGpgKTbc4msEyZmPwBWOO7A8YpEHBcTqeIy56HVTMq4I87kr263n_jAxIoydGRUfkTof52RCzNW2hJLkorItbelrI4NTo53oy2Fumds8dXYyUkFSy4Ewjl9) *(vertexaisearch.cloud.google.com)*
  > The **`buffer_view`** feature is an addition to the WebGPU Shading Language (WGSL) specification. It introduces type reinterpretation for GPU memory, allowing developers to divide a single `uniform`, `storage`, or `workg...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg16978.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/buffer-view.md`)*
  > Explainer https://github.com/gpuweb/gpuweb/blob/main/proposals/buffer-view.md https://github.com/webgpu/webgpu-samples/pull/568 Specification https://github.com/gpuweb/gpuweb/pull/6291 Summary <strong>WGSL language featu...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg17026.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/buffer-view.md`)*
  > &gt; LGTM1 &gt; &gt; On Wednesday, July 15, 2026 at 2:23:35 PM UTC-4 Chromestatus wrote: &gt; &gt;&gt; *Contact emails* &gt;&gt; [email protected] &gt;&gt; &gt;&gt; *Explainer* &gt;&gt; https://<strong>github.com/gpuweb/...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg17024.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/buffer-view.md`)*
  > &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https://<strong>github.com/gpuweb/gpuweb/blob/main/proposals/buffer-view.md</strong> &gt; https://github.com/webgpu/webgpu-samples/pull/568 &gt; &gt...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: \`buffer\_view\` feature](http://www.mail-archive.com/blink-dev@chromium.org/msg17035.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/6291`)*
  > Best, Alex On Wednesday, July 22, ...ffer-view.md &gt;&gt;&gt; https://github.com/webgpu/webgpu-samples/pull/568 &gt;&gt;&gt; &gt;&gt;&gt; *Specification* &gt;&gt;&gt; https://<strong>github.com/gpuweb/gpuweb/pull/6291</...

#### 📚 Platform Documentation & References

- [feat(graphics): adopt WGSL buffer\_view once every WebGPU browser ships it · Issue #9389 · playcanvas/engine](https://github.com/playcanvas/engine/issues/9389) *(github.com)*
- [GPU Web 2026‐02‐24 25 WGSL](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2026%E2%80%9002%E2%80%9024-25-WGSL) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webgpu) (1 test path(s) matching `webgpu`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 14 planned queries, 20 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 1 verified) · `Web Platform Tests (wpt.fyi)` (1 items)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 0

---

<a id="6249068542164992-joint-iteration"></a>
### [Joint Iteration](https://chromestatus.com/feature/6249068542164992)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6249068542164992](https://chromestatus.com/feature/6249068542164992) · [chromestatuslite.com/feature/6249068542164992](https://chromestatuslite.com/feature/6249068542164992)
- **Specification:** [https://github.com/tc39/proposal-joint-iteration](https://github.com/tc39/proposal-joint-iteration)
- **Chromium Bug:** [https://issues.chromium.org/issues/465357675](https://issues.chromium.org/issues/465357675)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `In development`

#### 📝 Overview

A TC39 proposal to synchronise the advancement of multiple iterators, often called zip.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 280)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"tc39 joint iteration proposal "Iterator.zip""`, `""proposal-joint-iteration" tc39 stage"`, `""Iterator.zip" tc39 OR v8 OR webkit OR gecko"`
- **Analysis:** Joint Iteration has progressed to Stage 4 at TC39 and adds the long-awaited native \`Iterator.zip()\` and \`Iterator.zipKeyed()\` helpers to JavaScript. With Firefox shipping support in version 148, Chrome enabling it by default in version 153, and WebKit landing support in Safari Technology Preview, cross-engine consensus is virtually unanimous. The feature fulfills a core ergonomic gap in the language's native iteration toolkit without requiring heavy utility libraries.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can begin adopting \`Iterator.zip\` and \`Iterator.zipKeyed\` today using \`core-js\` polyfills for backward compatibility while targeting modern evergreen engines natively. Ensure unit tests verify mode behaviors (such as handling uneven iterable lengths with padding) before deploying to production.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1911379: \[Meta\] Joint Iteration proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=1911379) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHsFnpel3Mk3m3T8BLU7pZYV31oTVwBvQtr-1lln30ZZSNiUacKjcUZ7EYhSNjZ7BP0gurZ3-sf5aZj8pxJcaR34hasUcsGEC4i799CHohalHiRSeQ87GtbqIA_y0ohL6hm7AvZcg==) *(vertexaisearch.cloud.google.com)*
  > GitHub - tc39/proposal-joint-iteration: a TC39 proposal to synchronise the advancement of multiple iterators · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settin...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHi1RJq8vUyp5OiYl3uJ09Asw9hGCzl8Tk4ITrhL8GHVN4TnLrhEd5gIm9AddsT3WURT09YLESiOgFEu6Yy1nQZGx3P6cdsOLxvD1_GWgwNMUy4cPDijSc8iIuDdsnAedMIFxuWUhUQmkYvcegibNSYArQPccUnybWwS6_JbFdxD0Mskc-s4ZbdZkDFaAdtE-Zxcg==) *(vertexaisearch.cloud.google.com)*
  > Iterator.zip() - JavaScript | MDN Skip to main content Skip to search Toggle sidebar Web JavaScript Reference Standard built-in objects Iterator zip() Theme OS default Light Dark English (US) Remember language Learn more...
- [core-js.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFE1MYA3vA8brKSPr5VM6XHY0f9Sph73vhlAcQ2IRPtDZFaTD4jRzYZhJ4l4VBae-pUHUyCNGs7YfjXE29KzFRT4rdxvbEQNebdVsTB21aCIxklRE9kTlOLSZS794nmFhuVgaBv74mX0kn4GdjVZXw=) *(vertexaisearch.cloud.google.com)*
  > Joint iteration - core-js v3 v3 (default) v3 v4 (alpha) Usage Supported engines and compatibility data Features ECMAScript ECMAScript: Object ECMAScript: Function ECMAScript: Error ECMAScript: Array ECMAScript: Iterator ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFl_kgOA02VbeGWjIvoIh0FsZabDO-Wj93P9pNY8_OX8KjPC4Nbq40eBr8k0OUXcVvR-nNzYKoJ6fxsDISlBali23KcfI6uRdc281H0fiqkyd2XEx6b16RIuGsnqClhLcZ8bUxtxSDOuOX9xMEL7Kd4WRvu3poSz9uTLr-vUA0mUHlpsNgAcNkWOEFMGQf0zzt-fYSJ7N68) *(vertexaisearch.cloud.google.com)*
  > Iterator.zipKeyed() - JavaScript | MDN Skip to main content Skip to search Toggle sidebar Web JavaScript Reference Standard built-in objects Iterator zipKeyed() Theme OS default Light Dark English (US) Remember language ...
- [c-sharpcorner.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHgwSrFXZdnyflgNA98sn8UFJMakrxk4jH_xiBtmqwTaouQ79oZkFoBYxGHlJZN_O_seVXQHJDqtQxBv0dA0Ti7UIYQseVyDikItyagRUbyKgZmckc7fh3pWK5OdOpBg0k8SMYKGxyrkF0CER6OXQw1V_kqQVva-UQgfuPYSwmkw4CrRhIc2ZX62h_Wk5RehW0Po80nEW6TNw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is "Joint Iteration"?  The **TC39 Joint Iteration proposal** introduces native JavaScript utilities for synchronizing and advancing multiple iterators in lockstep. Frequently referred to as "zip" functi...
- [tc39.es](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE1WR37WzCHaM58mPFTjo2dtAWgutXlTiFUX3eU5thE04j1h-XA2pQ3XcY7YnZSZ9kaOmjoIJguTwpYQsvdPcdIb-iihvXYLNMGnJILuVIDDnV9ATEqr9afenty56Vv) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is "Joint Iteration"?  The **TC39 Joint Iteration proposal** introduces native JavaScript utilities for synchronizing and advancing multiple iterators in lockstep. Frequently referred to as "zip" functi...

#### 🔗 Inbound Citations & Reverse Links

- [web-features consumers report for 2026-10-01 · Issue #4457 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4457) *(github.com · 2026-10-01T10:28:04)* *(Cites: `https://chromestatus.com/feature/6249068542164992`)*
  > tc39-joint-iteration used by https://<strong>chromestatus.com/feature/6249068542164992</strong>
- [\[blink-dev\] Intent to Ship: Joint Iteration](http://www.mail-archive.com/blink-dev@chromium.org/msg17116.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-joint-iteration`)*
  > Specification https://github.com/tc39/proposal-joint-iteration Summary <strong>A TC39 proposal to synchronise the advancement of multiple iterators, often called zip</strong>.
- [103rd Meeting of TC39 - HackMD](https://hackmd.io/@tc39-chairs/r1lbeL-K0) *(hackmd.io)* *(Cites: `https://github.com/tc39/proposal-joint-iteration`)*
  > 13:00-15:00 (full) - [Temporal](<strong>https://github.com/tc39/proposal-temporal) update &amp; bug fixes ([slides](http://ptomato.name/talks/tc39-2024-07)) (Philip Chimento, 30m) - ❄️ [Joint Iteration](https://github.co...

#### 📚 Platform Documentation & References

- [web-features consumers report for 2026-10-01 · Issue #4457 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4457) *(github.com)*
- [1975381 - Add initial implementation of Joint Iteration proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=1975381) *(bugzilla.mozilla.org)*
- [Create testing plan for the Joint Iteration proposal. · Issue #4112 · tc39/test262](https://github.com/tc39/test262/issues/4112) *(github.com)*
- [Joint Iteration to stage 3, per 2025.11.18 TC39 · tc39/proposals@6c0126b](https://github.com/tc39/proposals/commit/6c0126b8f44323254c93045ee7ec216e49b83ddd) *(github.com)*
- [Iterator.zip() - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/zip) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=joint) (31 test path(s) matching `joint`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (45 found across 10 planned queries, 16 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 12 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (5 found, 1 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (31 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="6427766428925952-webtransport-draining"></a>
### [WebTransport draining](https://chromestatus.com/feature/6427766428925952)

- **Milestone:** Chrome 153 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/6427766428925952](https://chromestatus.com/feature/6427766428925952) · [chromestatuslite.com/feature/6427766428925952](https://chromestatuslite.com/feature/6427766428925952)
- **Specification:** [https://w3c.github.io/webtransport/#dom-webtransport-draining](https://w3c.github.io/webtransport/#dom-webtransport-draining)
- **Chromium Bug:** [https://issues.chromium.org/issues/564353368](https://issues.chromium.org/issues/564353368)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Positive` · Safari: `In development`

#### 📝 Overview

WebTransport.draining is a promise that resolves when the server indicates that the WebTransport session will be gracefully retired. Applications can use this signal to establish a replacement session while existing streams and the current session remain usable.

> **Motivation:** A WebTransport server may need to retire a session for maintenance, load balancing, deployment, or connection-lifetime management. Without a draining signal, an application learns about this only when the session closes, which can cause an avoidable interruption while a replacement connection is established. The draining promise gives the applicati...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 280)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""webtransport" "draining" site:chromestatus.com"`, `""WebTransport" "draining" Chrome OR Chromium OR Mozilla OR WebKit"`, `""webtransport" "draining" github w3c"`
- **Analysis:** WebTransport draining exposes a read-only promise (\`transport.draining\`) that resolves when an HTTP/3 server signals it is retiring a session, allowing clients to migrate workloads seamlessly before connections terminate. The capability addresses a major real-world operations pain point—graceful server rollouts and load rebalancing—without severing active bidirectional streams prematurely. While firmly standardized in the W3C specification, client-side browser availability remains nascent and gated behind developer flags.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams running WebTransport backends should plan server-side draining handlers using DRAIN capsules now and treat the client API via progressive feature detection (\`if ('draining' in transport)\`). Maintain standard disconnection recovery on \`transport.closed\` as the baseline fallback until widespread cross-engine support arrives.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **26 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2007162: neqo support for Draining for WebTransport](https://bugzilla.mozilla.org/show_bug.cgi?id=2007162) `[NEW]`
- **Mozilla (Gecko):** [Bug #2060688: New wpt failures in /webtransport/ \[draining.https.any.sharedworker.html, draining.https.any.worker.html, draining.https.any.serviceworker.html, and 1 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2060688) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [WebTransport: Browser Support, Features, Use Cases](https://www.testmuai.com/learning-hub/webtransport-browser-support) *(testmuai.com · 2026-05-01T12:00:00)*
  > <strong>WebTransport is a W3C JavaScript API that lets a web page open a low-latency, two-way session to an HTTP/3 server over QUIC</strong>. It works in Chrome 97+, Edge 98+, Firefox 114+, Safari 26.4+ on macOS and iOS,...
- [Stream Data Continuously Using JavaScript WebTransport - Sling Academy](https://www.slingacademy.com/article/stream-data-continuously-using-javascript-webtransport) *(slingacademy.com)*
  > For the client part, we&#x27;ll write JavaScript code to establish a connection with the server. This will require Chrome 87 or later with WebTransport enabled in about:flags.
- [WebTransport over HTTP/3 client](https://googlechrome.github.io/samples/webtransport/client.html) *(googlechrome.github.io)*
  > This tool can be used to connect to an arbitrary WebTransport server.
- [Filling the remaining gap between WebSocket, WebRTC and WebTranspor](https://discourse.wicg.io/t/filling-the-remaining-gap-between-websocket-webrtc-and-webtranspor/4366) *(discourse.wicg.io · 2020-04-08T00:00:00)*
  > Existing web platform facilities for network communication include WebSocket and WebRTC. Each mandates a specific protocol, ensures TLS, and respects the Same Origin Policy. The proposed WebTransport is similar in these ...
- [WebTransport Explained: Low-Latency Communication over HTTP/3](https://www.gocodeo.com/post/webtransport-explained-low-latency-communication-over-http-3) *(gocodeo.com · 2025-06-20T00:00:00)*
  > Because of connection migration support, mobile users experience fewer dropped connections when switching networks. This makes WebTransport ideal for edge devices and mobile-first applications that demand high availabili...
- [Experimental WebTransport over HTTP/3 support in Kestrel - .NET Blog](https://devblogs.microsoft.com/dotnet/experimental-webtransport-over-http-3-support-in-kestrel) *(devblogs.microsoft.com · 2024-12-13T23:10:49)*
  > With WebTransport, <strong>you can keep all the traffic on one connection but separate them into their own streams and, if one stream were to drop network packets, the others could continue uninterrupted</strong>.

#### 📚 Platform Documentation & References

- [WebTransport: draining property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/draining) *(developer.mozilla.org)*
- [WebTransport API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/webtransport) *(w3.org)*
- [2007160 - Support Draining promise for WebTransport](https://bugzilla.mozilla.org/show_bug.cgi?id=2007160) *(bugzilla.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webtransport) (119 test path(s) matching `webtransport`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (64 found across 12 planned queries, 28 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 0 verified) · `Engine Bug Trackers` (3 found, 2 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (119 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5075144470036480-window-shape-api"></a>
### [Window Shape API](https://chromestatus.com/feature/5075144470036480)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5075144470036480](https://chromestatus.com/feature/5075144470036480) · [chromestatuslite.com/feature/5075144470036480](https://chromestatuslite.com/feature/5075144470036480)
- **Specification:** [https://explainers-by-googlers.github.io/chromeos-iwa-apis](https://explainers-by-googlers.github.io/chromeos-iwa-apis)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Window Shape API enables allowlisted \[Isolated Web Apps\](https://chromeos.dev/en/web/isolated-web-apps) on ChromeOS to have a customized window shape. By enabling non-rectangular and non-contiguous window layouts, developers can implement unique user experiences (such as widgets, floating panels, and overlays) that match the look-and-feel of native applications. The \`window.setShape\` API requires the window to be in \_unframed\_ display mode and requires the window-management permission to be granted.  Administrators can manage this feature with existing policies for window management:   - \[DefaultWindowManagementSetting\](https://chromeenterprise.google/policies/#DefaultWindowManagementSetting) configures the default state for the window management for all apps. The policies below can override this default.   - \[WindowManagementAllowedForUrls\](https://chromeenterprise.google/policies/#WindowManagementAllowedForUrls) allows IWAs with specified origins to enter unframed mode and set custom window shapes without any user interaction.   - \[WindowManagementBlockedForUrls\](https://chromeenterprise.google/policies/#WindowManagementBlockedForUrls) blocks the permission for specified origins, forcing Chrome to remove any custom window shapes and fallback to other available display modes.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 275)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Intent to Ship" "Window shape API" blink-dev"`, `""Window Shape API" chrome"`
- **Analysis:** The Window Shape API (\`window.setShape()\`) shipped in Chrome 154 strictly as a ChromeOS-specific extension tailored for allowlisted Isolated Web Apps (IWAs) operating in unframed mode. Because it is explicitly out of scope for the open web and non-ChromeOS operating systems, it bypasses traditional cross-browser standardization tracks and lacks Baseline indexing. Consequently, there is no multi-engine consensus, positioning the feature as an enterprise and partner-focused niche capability rather than an open web primitive.

**Key Recommendations & Takeaways:**
- Actionable Advice: Mainstream web developers should avoid planning around this API, as it is non-standard and restricted to allowlisted ChromeOS IWAs. ChromeOS enterprise and app developers leveraging IWAs should gate calls behind runtime feature detection (\`'setShape' in window\`) and ensure an unframed rectangular fallback exists.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFgPqxMldOHdvrofoB0k8g6RJLOeaZqBmTfuJKKDbdphEzxaIwiGaQgibLbeFezO5WjROXbBc5TC1934tlSL6t9x_VEqmNJCMOlFj7aqJf7WIXHjqzvI0LuIba6agOz_WrIi0KcwnQ=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Window Shape API  The **Window Shape API** allows allowlisted **Isolated Web Apps (IWAs)** on ChromeOS to set custom, non-rectangular, or non-contiguous window bounds using the `window.setShape()` meth...
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGofYrh-yMu6bnuFHBc-flZMIahWupNUand2PXIwtCf0SUpAJlYrbcOonDtCippVI5I0OgE59L6C299vymtZIem4X0MufuShyd5NeRC1-CJ0b226DwXEg26JSSAbl8XI4hPYQOy5WKuXdDcv10nqrMS) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Window Shape API  The **Window Shape API** allows allowlisted **Isolated Web Apps (IWAs)** on ChromeOS to set custom, non-rectangular, or non-contiguous window bounds using the `window.setShape()` meth...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHr-gjPu2m3SYaESv9edvirslafR_INsQt3WVk7dflMpkIWhLf6HwTJd5bMlEs1n6XwsRMsIZgogVC5MqsTTiFj5bxtOsGDLKNP6MhNZJ3Zn4gdqoh_ThlrzjLM8_pm_twHWdPumig=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Window Shape API  The **Window Shape API** allows allowlisted **Isolated Web Apps (IWAs)** on ChromeOS to set custom, non-rectangular, or non-contiguous window bounds using the `window.setShape()` meth...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG5vJ4Fsfn9c32yOqaZzKjQPtpekQl_bU6SWypaAyC-bLLQodnLSA3fukxqLkPvPCbfQ0k1JDeuKu-6OYi0Sj1-vQq6ejZRYFdlzM5fJOc7qWsPCHXIklDuC5bQ58FyMaa9Yj-Oz0K4XctdLIkGoFgH4SbJ1mHIh1ohJOyub9io7tvH) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Window Shape API  The **Window Shape API** allows allowlisted **Isolated Web Apps (IWAs)** on ChromeOS to set custom, non-rectangular, or non-contiguous window bounds using the `window.setShape()` meth...
- [gigazine.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGWRB-aZwXNmdE_Y3VUu2-tt_MndRSd3vCy9pAinZmT7rlustfGDFBGVw7wCY2xx8G4EjuE85NXfG-kNPdqUx73dTfzJILSxdyLEM4Ky08YwAEwnoMu8JHY3nYanEe4Ssty9ukSKWvwAYbAvgDnEoKWgQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Window Shape API  The **Window Shape API** allows allowlisted **Isolated Web Apps (IWAs)** on ChromeOS to set custom, non-rectangular, or non-contiguous window bounds using the `window.setShape()` meth...
- [\[blink-dev\] Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16945.html) *(mail-archive.com)*
  > Explainer https://github.com/e...ab=t.0#heading=h.pcgro84kqnh3 Summary Window Shape API <strong>enables allowlisted [Isolated Web Apps](https://chromeos.dev/en/web/isolated-web-apps) on ChromeOS to customize their window...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16945.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > Explainer https://github.com/e...ab=t.0#heading=h.pcgro84kqnh3 Summary Window Shape API <strong>enables allowlisted [Isolated Web Apps](https://chromeos.dev/en/web/isolated-web-apps) on ChromeOS to customize their window...
- [\[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16965.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > &gt; &gt; Best, &gt; &gt; Alex &gt; &gt; On Wednesday, July 8, 2026 at 9:58:26 AM UTC-7 Chromestatus wrote: &gt; &gt;&gt; *Contact emails* &gt;&gt; [email protected], [email protected] &gt;&gt; &gt;&gt; *Explainer* &gt;&...
- [Re: \[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16974.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > &gt;&gt; &gt;&gt; Best, &gt;&gt; &gt;&gt; Alex &gt;&gt; &gt;&gt; On Wednesday, July 8, 2026 at 9:58:26 AM UTC-7 Chromestatus wrote: &gt;&gt; &gt;&gt;&gt; *Contact emails* &gt;&gt;&gt; [email protected], [email protected]...
- [Re: \[blink-dev\] Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg17100.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > &gt; &gt; Thanks, &gt; Rick &gt; &gt; &gt; On Mon, Jul 20, 2026 at 5:17 PM edmanp via Chromestatus &lt; &gt; [email protected]&gt; wrote: &gt; &gt;&gt; Hi Alex, Mike, I have updated the explainer with new &quot;Scope &gt...
- [Re: \[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16994.html) *(mail-archive.com)* *(Cites: `https://explainers-by-googlers.github.io/chromeos-iwa-apis`)*
  > Best, Alex On Wednesday, July 8, 2026 at 9:58:26 AM UTC-7 Chromestatus wrote: *Contact emails* [email protected], [email protected] *Explainer* https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window...

#### 📚 Platform Documentation & References

- [window-management · GitHub Topics · GitHub](https://github.com/topics/window-management?l=javascript&o=desc&s=stars) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Window Shape API Demo](https://github.com/paulinagacek/Set-Shape-demo)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=window) (2166 test path(s) matching `window`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (52 found across 12 planned queries, 21 verified) · `Google Search Grounding (gemini-3.8-flash)` (7 found, 5 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (1 found, 0 verified) · `Engine Bug Trackers` (5 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (2166 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5309598397497344-xml-parsing-in-rust-for-non-xslt-scenarios"></a>
### [XML parsing in Rust for non-XSLT scenarios](https://chromestatus.com/feature/5309598397497344)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5309598397497344](https://chromestatus.com/feature/5309598397497344) · [chromestatuslite.com/feature/5309598397497344](https://chromestatuslite.com/feature/5309598397497344)
- **Specification:** [https://www.w3.org/TR/xml](https://www.w3.org/TR/xml)
- **Chromium Bug:** [https://crbug.com/466303347](https://crbug.com/466303347)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

To improve browser security and protect users against memory-related vulnerabilities, Chrome 153 updates its XML parsing engine to a memory-safe \[Rust\](https://rust-lang.org/) implementation for several common scenarios. This foundational update eliminates potential memory corruption bugs while maintaining full compatibility with existing web standards.  Chrome has already begun to deprecate and remove \[XSLT\](https://www.w3.org/TR/xslt-30/). While this process continues, the new, safer parser will handle the following scenarios where no XSLT is required:  1. DOMParser Web API. 2. Accessing responseXML of XMLHttpRequest. 3. SVG standalone images (that is, accessing a \`image.svg\` document directly as a top level navigation). 4. SVG external images (including a main document embedding an SVG as an external image resource).

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 270)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""XML parsing in Rust" chrome blink-dev"`, `""XML Parsing in Rust for non XSLT scenarios""`, `"Chromium "Rust XML parser" libxml2"`
- **Analysis:** Chrome 153 introduces a memory-safe Rust XML parser for non-XSLT workloads (such as DOMParser, XMLHttpRequest responseXML, and standalone or external SVG images), advancing the browser's incremental phase-out of legacy C-based libxml2. Because this is an internal engine modernization rather than an API addition, it maintains existing W3C XML standard conformance without altering the public platform surface. The change represents a key milestone in Chromium's production adoption of Rust to eliminate memory safety vulnerabilities in untrusted document parsing.

**Key Recommendations & Takeaways:**
- Actionable Advice: No web code migration or polyfills are necessary, as the update acts as a drop-in replacement for standards-compliant XML handling. Development teams should audit codebases to ensure they do not assert against exact error string syntax on invalid XML and continue removing any residual XSLT dependencies.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **26 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X](https://x.com/ChromiumDev/status/2093424350036660456) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [XML parsing in Rust for non-XSLT scenarios - Chrome Platform Status](https://2016-01-12-dot-cr-status.appspot.com/feature/5309598397497344) *(2016-01-12-dot-cr-status.appspot.com · 2026-02-09T00:00:00)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [r/rust on Reddit: 🥳 Chrome adopts Rust and replaces libxml2 written in C since version 147](https://www.reddit.com/r/rust/comments/1sfrvno/chrome_adopts_rust_and_replaces_libxml2_written) *(reddit.com · 2026-04-08T12:48:35)*
  > <strong>The Rust&#x27;s part replaces old C-written parser libxml2.</strong> This new module would be used in some cases for parsing XML (when no XSLT templates involved) and replaces years old dependency libxml2 · Here ...
- [Intent to Experiment: Ship Rust XML Parser to 1% stable for non XSLT scenarios](https://groups.google.com/a/chromium.org/g/blink-dev/c/D7BE4QPw0S4) *(groups.google.com · 2026-02-09T00:00:00)*
  > Make Rust parsing memory safe in Chrome, replace unsafe C library usage of libxml2 with Rust based XML parsing based on the Rust XML crate.
- [Chrome 153: fingerprint & automation changes · Clearcote](https://www.clearcotelabs.com/chrome-releases/153) *(clearcotelabs.com · 2026-09-27T09:53:53)*
  > DOMParser and XML responses use ... text of the error for malformed XML is different. <strong>Chrome 154 went back to libxml2 by default, so this message identifies 153 specifically</strong>....
- [Chrome 153 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/153) *(developer.chrome.com · 2026-09-08T00:00:00)*
  > <strong>To improve browser security and protect users against memory-related vulnerabilities, Chrome 153 updates its XML parsing engine to a memory-safe Rust implementation for several common scenarios</strong>.
- [\[blink-dev\] Intent to Ship: XML Parsing in Rust for non XSLT scenarios](http://www.mail-archive.com/blink-dev@chromium.org/msg16709.html) *(mail-archive.com)*
  > *Summary* Roll out the Rust XML parser for scenarios where we are certain that no XSLT processing is required. The Rust XML parser <strong>improves security by eliminating memory corruption bugs in XML parsing, it is int...

#### 📚 Platform Documentation & References

- [Parsing and serializing XML - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/XML/Guides/Parsing_and_serializing_XML) *(developer.mozilla.org)*
- [Transforming XML with XSLT](https://developer.mozilla.org/en-US/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT) *(developer.mozilla.org)*
- [XSLT](https://developer.mozilla.org/en-US/docs/Glossary/XSLT) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=xml) (479 test path(s) matching `xml`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (64 found across 12 planned queries, 25 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (479 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="6516055192240128-csspseudoelement-support-for-backdrop-scroll-marker-and-view-transitions"></a>
### [CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](https://chromestatus.com/feature/6516055192240128)

- **Milestone:** Chrome 152 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6516055192240128](https://chromestatus.com/feature/6516055192240128) · [chromestatuslite.com/feature/6516055192240128](https://chromestatuslite.com/feature/6516055192240128)
- **Specification:** [https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface](https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Support for CSSPseudoElement - which is currently only defined for ::after, ::before, and ::marker - is now being extended to include several new pseudo-elements:  ::backdrop: useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog's content. This eliminates the need for complex intersection logic to determine where the click occurred.  ::scroll-marker: can be used to collect click statistics.  view transitions: enables geometry-aware view transitions.It also allows you to intercept a view transition mid-flight to start a new one, utilizing the coordinates of the currently animating element to avoid sudden visual jumps.

> **Motivation:** Support for CSSPseudoElement - which is currently only defined for ::after, ::before, and ::marker - is now being extended to include several new pseudo-elements:  ::backdrop: useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog's content. This eliminates the need for complex intersection logic...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 260)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @danielsakhapov: "Addition - in https://github.com/w3c/csswg-drafts/issues/13804 it was resolved that CSSPseudoElement now supports all standardized non-element-backed ..."
- Standards Activity (Mozilla): Latest discussion from @danielsakhapov: "Addition - in https://github.com/w3c/csswg-drafts/issues/13804 it was resolved that CSSPseudoElement now supports all standardized non-element-backed ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "scroll-marker を使うと CSS だけでカルーセルが作れる！" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **3 new community discussions** found
- 📰 **6 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [scroll-marker を使うと CSS だけでカルーセルが作れる！](https://twitter.com/azukiazusa9/status/1903317104914469263) — *Twitter / X by @azukiazusa9 (0 likes/RTs, 0 replies)*
- 🐦 [CSS Design Awards on Twitter](https://twitter.com/cssdesignawards/status/676881914825859072) — *Twitter / X by @cssdesignawards (0 likes/RTs, 0 replies)*
- 🐦 [Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/status/2092690739130196410) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSSPseudoElement interface](https://github.com/WebKit/standards-positions/issues/607) [open] `topic: css`, `venue: W3C CSS WG`
  > *Latest discussion from @danielsakhapov: "Addition - in https://github.com/w3c/csswg-drafts/issues/13804 it was resolved that CSSPseudoElement now supports all standardized non-element-backed ..."*
- **Mozilla:** [CSSPseudoElement interface](https://github.com/mozilla/standards-positions/issues/1345) [open] `venue: W3C`, `topic: API`
  > *Latest discussion from @danielsakhapov: "Addition - in https://github.com/w3c/csswg-drafts/issues/13804 it was resolved that CSSPseudoElement now supports all standardized non-element-backed ..."*

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16597.html) *(mail-archive.com)*
  > Best, Alex On Tuesday, May 26, ... to include several &gt; new pseudo-elements: ::backdrop: <strong>useful for closing a dialog when the &gt; backdrop is clicked, without interfering with clicks inside the dialog&#x27;s ...
- [Re: \[blink-dev\] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16843.html) *(mail-archive.com)*
  > On Thursday, June 4, 2026 at 11:01:29 PM UTC+3 Daniil Sakhapov wrote: &gt; ::scroll-marker click detection has been requested by our partners trying &gt; out CSS Carousels &gt; ::backdrop can be used to avoid intersectio...
- [\[blink-dev\] Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16588.html) *(mail-archive.com)*
  > Explainer No information provided ... to include several new pseudo-elements: ::backdrop: <strong>useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog&#x27;s content...
- [A guide to CSS pseudo-elements - LogRocket Blog](https://blog.logrocket.com/css-pseudo-elements-guide) *(blog.logrocket.com · 2024-06-04T21:04:25)*
  > <strong>The ::backdrop CSS pseudo-element represents a viewport-sized box rendered immediately beneath any element being presented in full-screen mode</strong>.
- [View Transitions API and CSS Scroll-Driven Animations: The Browser Wins of 2026 \| Frontend Horizon](https://www.frontendhorizon.com/blog/view-transitions-api-and-css-scroll-driven-animations-the-browser-wins-of-2026) *(frontendhorizon.com · 2026-07-06T00:00:00)*
  > <strong>CSS scroll-driven animations let you tie an animation to scroll position</strong>. No JavaScript IntersectionObserver, no scroll-event listeners, no main-thread blocking — the animation runs on the compositor.
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > Support for CSSPseudoElement, ... <strong>::backdrop: Helps close a dialog when the backdrop is clicked without interfering with clicks inside the dialog content, eliminating the need for complex intersection logic</stro...

#### 📚 Platform Documentation & References

- [scroll-marker CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker) *(developer.mozilla.org)*
- [Use CSS transitions to scroll to element · GitHub](https://gist.github.com/desandro/4206095) *(gist.github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/152.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/152.md) *(github.com)*
- [::backdrop CSS pseudo-element - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop) *(developer.mozilla.org)*
- [\[css-pseudo\] Add ::backdrop and ::view-transitions to the CSSPseudoElement's allowed pseudo-elements list · Issue #13804 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13804) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=css-pseudo) (352 test path(s) matching `css-pseudo`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (71 found across 12 planned queries, 21 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(HTTP 400)* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (0 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (352 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 2

---

<a id="5068277495758848-media-element-pseudo-classes"></a>
### [Media element pseudo-classes](https://chromestatus.com/feature/5068277495758848)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5068277495758848](https://chromestatus.com/feature/5068277495758848) · [chromestatuslite.com/feature/5068277495758848](https://chromestatuslite.com/feature/5068277495758848)
- **Specification:** [https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes](https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes)
- **Chromium Bug:** [https://crbug.com/40246121](https://crbug.com/40246121)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/media-pseudos) (Chrome: `—`, Firefox: `150`, Safari: `15.4`)

#### 📝 Overview

The :playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked CSS pseudo-classes match &lt;audio&gt; and &lt;video&gt; elements based on their state.  This is one of the focus areas in https://wpt.fyi/interop-2026.

> **Motivation:** Allows styling of media elements or custom media controls based on the state of the media element. For example, a large play button overlaying a video could be hidden while playing.  There is no expectation that custom media controls can be implemented entirely with CSS, as there is still a lot of state not exposed to CSS.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 255)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""media element pseudo-classes" chrome OR firefox OR webkit"`, `""media element pseudo-classes" CSS playing paused"`, `"css pseudo-classes playing paused seeking buffering stalled muted"`
- **Analysis:** Media element pseudo-classes (:playing, :paused, :seeking, :buffering, :stalled, :muted, and :volume-locked) bring native playback, audio, and network states directly into CSS. Long supported in Safari and recently delivered in Firefox, Chrome's default enablement in milestone 156 fulfills a major Interop 2026 milestone. The feature enjoys universal vendor consensus and marks the transition of declarative media styling into Baseline.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building custom video/audio players should start adopting these selectors via progressive enhancement using \`@supports selector(:playing)\` or fallback classes. Maintain minimal JavaScript state classes on parent wrappers until Chromium-based mobile browsers reach broad update saturation.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @alastor0325: "This looks good to us, and \[this\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1707584) is our implementation bug. We also filed a separate \[issue\](ht..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **Mozilla:** [Media element pseudo-classes](https://github.com/mozilla/standards-positions/issues/1319) [open] `topic: CSS`, `team: Media`
  > *Latest discussion from @alastor0325: "This looks good to us, and [this](https://bugzilla.mozilla.org/show_bug.cgi?id=1707584) is our implementation bug. We also filed a separate [issue](ht..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2013367: \[meta\] Pseudo-classes for media element states](https://bugzilla.mozilla.org/show_bug.cgi?id=2013367) `[NEW]`
- **WebKit (Safari):** [Bug #311276: REGRESSION(310172@main): \[GStreamer\] imported/w3c/web-platform-tests/css/selectors/media/media-playback-state.html is flaky](https://bugs.webkit.org/show_bug.cgi?id=311276) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [mintec.co](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGwJ9FXFK1ZJXf_v0VOPKlIQ8rAR2DFCAItQi4PxaDBIyJvYSASwoQDxsw42TVQ0elnpZ5ZjZcqMogTOJsZ0ni2CUKk-GYxz9FeKcnDQwunZFmQxdTyAvrGmKfnGV7mvUR3Riiacdfhpw1vm5CLKv1Vf_0=) *(vertexaisearch.cloud.google.com)*
  > ### Overview  **Media element pseudo-classes**—comprising `:playing`, `:paused`, `:seeking`, `:buffering`, `:stalled`, `:muted`, and `:volume-locked`—allow CSS to directly inspect and reflect the playback, network, and a...
- [modern-css.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH0YhBktZfXeYXXjPQEJSUVWdX9TomWqDRwXXX5NwfB7asaNtSGFyijbm8lr9K5BGvsV_G7EsKSPj-_m4V_R5eLzp4hsLhZ5DeJ4Br6BCe1ctPsWDfe-cUXjXqxJ429zjrmcgsPL7HYpykbh03G91zEUgHx7E__bP6ayGc=) *(vertexaisearch.cloud.google.com)*
  > CSS :playing, :paused, :muted Pseudo-Classes for Media Explore All snippets CSS snippets HTML snippets CSS Tools CSS Blocks Articles Cheatsheet Resources AI Tools UI Terms CSS Reference Overview Properties Selectors At-r...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFxVIAzk2LWzB_EmUmO2Gz9heCq1dtlbnH6R6KJ1uYl7jLtS64_5Fw9sihaZQ-IogX22ysOVBQH_v-7A_UEPwpsYvKf3X9PTRBjaaY74WlygV6uMiqasghwq6549_lxklqf_FU0aPoBZTAP8rEqDBuNf1JAOlHTmmfbqZjXMyiyMb_Gooi9) *(vertexaisearch.cloud.google.com)*
  > :buffering CSS pseudo-class - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Selectors :buffering Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US)...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHf2KVpgqc9SD-1ZwLt-TpxRhcRcOB9gmvPSuSJ9MAiKdLZDHdocSqBFIdpWuIO8WwoBSRMMeJCIKIA2SRt1mvKYICejFRUpHtthvlnUajhTuMRjglwJ1H30AGllGtwgH3TtjYfeOjH1LPWcjR1XutG-ba1YCk=) *(vertexaisearch.cloud.google.com)*
  > Media element pseudo-classes · Issue #166 · web-platform-dx/developer-signals · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGiySzmacKKqd36DlLeEJ_nOEURZWgDUqEQ7pAY23nHc-QKcYcZfrDfcyeIM_j2wqiWvqytqGqd50E7rf_4WeBl7OsT9E6hpX7dTSvh5CUcWaoAQ1Gvnv7_tZa2qdnLnPxcKpr1x4R8v6Abd40x9iMQxMbyuukyIMgpDbvcqDBgvtzXznkyXAsW4w==) *(vertexaisearch.cloud.google.com)*
  > ### Overview  **Media element pseudo-classes**—comprising `:playing`, `:paused`, `:seeking`, `:buffering`, `:stalled`, `:muted`, and `:volume-locked`—allow CSS to directly inspect and reflect the playback, network, and a...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHh9AlkuPWdEuVPQMRg_4O33H4-uLm0laRkiSMEsmrnhtkpoFBb-rT_qb_gK1ZossydzSj0_I4NsLjaoNtZtngz3Q_SZtcGzkQSM-Nz77qg0O9vfA_Ss7xsAV4cjLc2kRvxbQ5WNI2Uj3hNabcwil4I70RxmAhbc0R1_9G8fIBBwvpk) *(vertexaisearch.cloud.google.com)*
  > ### Overview  **Media element pseudo-classes**—comprising `:playing`, `:paused`, `:seeking`, `:buffering`, `:stalled`, `:muted`, and `:volume-locked`—allow CSS to directly inspect and reflect the playback, network, and a...

#### 🔗 Inbound Citations & Reverse Links

- [css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/issues/30523) *(github.com · 2026-09-14T23:44:14)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > Chrome Platform Status: https://<strong>chromestatus.com/feature/5068277495758848</strong>
- [media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1307) *(github.com · 2026-08-14T17:30:45)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > Chromestatus: https://<strong>chromestatus.com/feature/5068277495758848</strong> Feature Name: Media element pseudo-classes Web Feature ID: media-pseudos Chrome Releases: Chrome 156

#### 📚 Platform Documentation & References

- [css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/issues/30523) *(github.com)*
- [media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1307) *(github.com)*
- [Media element pseudo-classes · Issue #1003 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1003) *(github.com)*
- [Media element pseudo-classes · Issue #166 · web-platform-dx/developer-signals](https://github.com/web-platform-dx/developer-signals/issues/166) *(github.com)*
- [Media element pseudo-classes · Issue #927 · web-platform-dx/developer-signals](https://github.com/web-platform-dx/developer-signals/issues/927) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=html) (114452 test path(s) matching `html`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (35 found across 7 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 10 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (2 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (4 found, 2 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (114452 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 2

---

<a id="6185007701557248-spell-check-custom-dictionary-api"></a>
### [Spell check custom dictionary API](https://chromestatus.com/feature/6185007701557248)

- **Milestone:** Chrome 153 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/6185007701557248](https://chromestatus.com/feature/6185007701557248) · [chromestatuslite.com/feature/6185007701557248](https://chromestatuslite.com/feature/6185007701557248)
- **Specification:** [https://github.com/whatwg/html/pull/12590](https://github.com/whatwg/html/pull/12590)
- **Chromium Bug:** [https://issues.chromium.org/issues/428005649](https://issues.chromium.org/issues/428005649)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Under consideration` · Safari: `No signal`

#### 📝 Overview

Adds document.spellCheckCustomDictionary, which lets a page add words to and remove words from a per-document dictionary that the browser's spell checker consults alongside its built-in dictionaries. Matching words are no longer flagged as misspelled in that document, so sites with domain-specific vocabulary, such as product names, technical terms or proper nouns, can suppress false positives without asking users to edit their browser dictionary. The words last only for the document's lifetime and cannot be read back.

> **Motivation:** Spell checkers routinely flag words that are correct within a particular site but unknown to general dictionaries. Examples include:  - A Pokémon wiki containing names like Pikachu or Charmander. - A financial analysis dashboard referencing company‑specific product names or tickers. - A medical or scientific tool using specialized terminology.  Fal...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 255)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Spell check custom dictionary API is currently In developer trial (Behind a flag) in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Standards Activity (WebKit): Latest discussion from @ziransun: "&gt; Speaking in my personal capacity: &gt;  &gt; The \[explainer\](https://github.com/Igalia/explainers/blob/main/spell-check-dictionary/README.md) says entries..."
- Standards Activity (Mozilla): Latest discussion from @ziransun: "&gt; \[@saschanaz\](https://github.com/saschanaz) I understood \`removeWords()\` as removing from the existing set (so it's only doing something if you have ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [SpellCheckCustomDictionary](https://github.com/WebKit/standards-positions/issues/646) [open] `venue: WHATWG HTML Workstream`, `from: Igalia`
  > *Latest discussion from @ziransun: "> Speaking in my personal capacity: >  > The [explainer](https://github.com/Igalia/explainers/blob/main/spell-check-dictionary/README.md) says entries..."*
- **Mozilla:** [SpellCheckCustomDictionary](https://github.com/mozilla/standards-positions/issues/1384) [open] 
  > *Latest discussion from @ziransun: "> [@saschanaz](https://github.com/saschanaz) I understood `removeWords()` as removing from the existing set (so it's only doing something if you have ..."*

#### 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: Document Local Dictionary API](https://groups.google.com/a/chromium.org/g/blink-dev/c/LB5SvNilyhA) *(groups.google.com · 2025-07-22T00:00:00)*
  > Intent to Prototype: Document Local Dictionary API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: ...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](https://www.mail-archive.com/blink-dev@chromium.org/msg14251.html) *(mail-archive.com · 2025-07-22T00:00:00)*
  > Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Rick Byers Tue, 22 Jul 2025 09:03:16 -0700 Spell...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg16929.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Ziran Sun Tue, 07 Jul 2026 03:00:58 -0700 Thanks...
- [\[blink-dev\] Ready for Developer Testing: Spell Check Custom Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg17107.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: Spell Check Custom Dictionary API Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Spell Check Custom Dictionary API Chromestatus Tue, 04 Aug 2026 07...
- [Custom spell check dictionaries — a must-have feature for sentence correctors - WProofreader Blog](https://blog.wproofreader.com/custom-spell-check-dictionaries-a-must-have-feature-for-sentence-correctors) *(blog.wproofreader.com · 2026-04-21T12:42:04)*
  > Custom spell check dictionaries — a must-have feature for sentence correctors - WProofreader Blog WProofreader Blog Proofread now Custom spell check dictionaries — a must-have feature for sentence correctors April 26, 20...
- [Android Developers Blog: Creating Your Own Spelling Checker Service](https://android-developers.googleblog.com/2012/08/creating-your-own-spelling-checker.html) *(android-developers.googleblog.com)*
  > The implementation of this method can access your custom dictionary and any utility classes for extracting and ranking suggestions. For sentence-level checking, you can also implement onGetSuggestionsMultiple(), which ac...

#### 🔗 Inbound Citations & Reverse Links

- [Spell check custom dictionary (spellcheck-custom-dictionary) · Issue #4464 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4464) *(github.com · 2026-10-02T14:21:12)* *(Cites: `https://chromestatus.com/feature/6185007701557248`)*
  > Spell check custom dictionary (spellcheck-custom-dictionary) · Issue #4464 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings ...
- [Intent to Prototype: Document Local Dictionary API](https://groups.google.com/a/chromium.org/g/blink-dev/c/LB5SvNilyhA) *(groups.google.com · 2025-07-22T00:00:00)* *(Cites: `https://chromestatus.com/feature/6185007701557248`)*
  > Intent to Prototype: Document Local Dictionary API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: ...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](https://www.mail-archive.com/blink-dev@chromium.org/msg14251.html) *(mail-archive.com · 2025-07-22T00:00:00)* *(Cites: `https://chromestatus.com/feature/6185007701557248`)*
  > Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Rick Byers Tue, 22 Jul 2025 09:03:16 -0700 Spell...
- [Re: \[blink-dev\] Intent to Prototype: Document Local Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg16929.html) *(mail-archive.com)* *(Cites: `https://github.com/Igalia/explainers/tree/main/spell-check-dictionary`)*
  > Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: Document Local Dictionary API Ziran Sun Tue, 07 Jul 2026 03:00:58 -0700 Thanks...
- [\[blink-dev\] Ready for Developer Testing: Spell Check Custom Dictionary API](http://www.mail-archive.com/blink-dev@chromium.org/msg17107.html) *(mail-archive.com)* *(Cites: `https://github.com/Igalia/explainers/tree/main/spell-check-dictionary`)*
  > [blink-dev] Ready for Developer Testing: Spell Check Custom Dictionary API Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Spell Check Custom Dictionary API Chromestatus Tue, 04 Aug 2026 07...

#### 📚 Platform Documentation & References

- [Spell check custom dictionary (spellcheck-custom-dictionary) · Issue #4464 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4464) *(github.com)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-22 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0003.html) *(lists.w3.org)*
- [GitHub - bkardell/words: Lists of words for spelling dictionaries · GitHub](https://github.com/bkardell/words) *(github.com)*
- [explainers/spell-check-dictionary/README.md at main · Igalia/explainers](https://github.com/Igalia/explainers/blob/main/spell-check-dictionary/README.md) *(github.com)*
- [SpellCheckCustomDictionary · Issue #646 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/646) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Spell check custom dictionary API Demo](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/web_tests/wpt_internal/spell-check-custom-dictionary/add-remove-words-manual.html)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=spell) (28 test path(s) matching `spell`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 12 planned queries, 21 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 8 tweet(s))* · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (28 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 10

---

<a id="4644898109259776-mediacapabilitiesdecodinginfoencryptionscheme"></a>
### [MediaCapabilities.decodingInfo.encryptionScheme](https://chromestatus.com/feature/4644898109259776)

- **Milestone:** Chrome 152 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/4644898109259776](https://chromestatus.com/feature/4644898109259776) · [chromestatuslite.com/feature/4644898109259776](https://chromestatuslite.com/feature/4644898109259776)
- **Specification:** [https://w3c.github.io/media-capabilities/#dom-keysystemtrackconfiguration-encryptionscheme](https://w3c.github.io/media-capabilities/#dom-keysystemtrackconfiguration-encryptionscheme)
- **Chromium Bug:** [http://crbug.com/498284510](http://crbug.com/498284510)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `No signal`

#### 📝 Overview

Adds the \`encryptionScheme\` attribute to the \`KeySystemTrackConfiguration\` dictionary used in \`navigator.mediaCapabilities.decodingInfo()\`. This allows web applications to query whether a specific encryption scheme (such as \`'cenc'\` or \`'cbcs'\`) is supported.   \*Note: This feature is already approved by the W3C spec and the underlying backend implementation in Chromium already exists. This launch is purely to plumb the \`encryptionScheme\` property from the Blink IDL layer to the existing backend.\*

> **Motivation:** Currently, Chromium only allows developers to query media capabilities based on codec and \`robustness\`. With the ecosystem's migration towards the \`'cbcs'\` encryption scheme, there is significant device fragmentation. Exposing \`encryptionScheme\` in \`decodingInfo()\` allows developers to accurately detect if their encrypted media will play. Since the...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 250)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""KeySystemTrackConfiguration" "encryptionScheme""`, `""MediaCapabilities.decodingInfo.encryptionScheme" OR "Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme""`, `""MediaCapabilities.decodingInfo.encryptionScheme" "Gecko" OR "WebKit""`
- **Analysis:** Chrome 152 enables the \`encryptionScheme\` attribute in \`KeySystemTrackConfiguration\` for \`navigator.mediaCapabilities.decodingInfo()\`, completing the Blink IDL plumbing for an established W3C Media Capabilities specification. This feature bridges a major gap for media web apps navigating device fragmentation during the streaming ecosystem's ongoing migration from legacy 'cenc' to 'cbcs' DRM schemes. The addition brings Chromium into alignment with Gecko, addressing long-standing developer requests for accurate pre-playback capability checks.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web media engineering teams should immediately supply \`encryptionScheme: 'cbcs'\` or \`'cenc'\` inside \`keySystemConfiguration\` track objects when calling \`decodingInfo()\` as a progressive enhancement. For unsupported browsers like Safari, ensure you maintain fallback capability checks using \`navigator.requestMediaKeySystemAccess()\`.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **15 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17061.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme Mike Taylor Mon, 27 Ju...
- [Intent to Ship: MediaCapabilities API for WebRTC](https://groups.google.com/a/chromium.org/g/blink-dev/c/loWlekYWswQ) *(groups.google.com)*
  > Intent to Ship: MediaCapabilities API for WebRTC Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: MediaCa...
- [Media Capabilities - Decoding Info EME Sample](https://googlechrome.github.io/samples/media-capabilities/decoding-info-eme) *(googlechrome.github.io)*
  > The Media Capabilities API <strong>allows websites to get more information about the decoding abilities of the device/system/browser</strong>.
- [MediaCapabilities: decodingInfo() 方法- Web API \| MDN - MDN 文档](https://mdn.org.cn/en-US/blog/rss.xml) *(mdn.org.cn)*
  > https://developer.mozilla.org/en-US/blog/exploring-the-broadcast-channel-api-for-cross-tab-communication/
- [Media updates in Chrome 75 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/media-updates-in-chrome-75) *(developer.chrome.com · 2019-07-22T00:00:00)*
  > const encryptedMediaConfig = { type: &#x27;media-source&#x27;, // or &#x27;file&#x27; video: { contentType: &#x27;video/webm; codecs=&quot;vp09.00.10.08&quot;&#x27;, width: 1920, height: 1080, bitrate: 2646242, // number...
- [\[blink-dev\] Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17057.html) *(mail-archive.com)*
  > Summary Adds the encryptionScheme attribute to the KeySystemTrackConfiguration dictionary used in navigator.mediaCapabilities.decodingInfo(). This <strong>allows web applications to query whether a specific encryption sc...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme](http://www.mail-archive.com/blink-dev@chromium.org/msg17061.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4644898109259776`)*
  > [blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: MediaCapabilities.decodingInfo.encryptionScheme Mike Taylor Mon, 27 Ju...
- [media-capabilities/index.bs at main · w3c/media-capabilities](https://github.com/w3c/media-capabilities/blob/main/index.bs) *(github.com)* *(Cites: `https://w3c.github.io/media-capabilities/#dom-keysystemtrackconfiguration-encryptionscheme`)*
  > media-capabilities/index.bs at main · w3c/media-capabilities · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Rel...
- [media-wg/index.html at main · w3c/media-wg](https://github.com/w3c/media-wg/blob/main/index.html) *(github.com)* *(Cites: `https://w3c.github.io/media-capabilities/#dom-keysystemtrackconfiguration-encryptionscheme`)*
  > media-wg/index.html at main · w3c/media-wg · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh you...
- [Intent to Ship: MediaCapabilities API for WebRTC](https://groups.google.com/a/chromium.org/g/blink-dev/c/loWlekYWswQ) *(groups.google.com)* *(Cites: `https://w3c.github.io/media-capabilities/#dom-keysystemtrackconfiguration-encryptionscheme`)*
  > Intent to Ship: MediaCapabilities API for WebRTC Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: MediaCa...

#### 📚 Platform Documentation & References

- [media-capabilities/index.bs at main · w3c/media-capabilities](https://github.com/w3c/media-capabilities/blob/main/index.bs) *(github.com)*
- [media-wg/index.html at main · w3c/media-wg](https://github.com/w3c/media-wg/blob/main/index.html) *(github.com)*
- [Media Capabilities](https://www.w3.org/TR/media-capabilities) *(w3.org)*
- [MediaCapabilities: decodingInfo() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaCapabilities/decodingInfo) *(developer.mozilla.org)*
- [content/files/en-us/web/api/mediacapabilities/decodinginfo/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/mediacapabilities/decodinginfo/index.md?plain=1) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=media-capabilities) (16 test path(s) matching `media-capabilities`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 11 planned queries, 25 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (0 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (16 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="6320639375966208-deprecate-and-remove-attribution-reporting-api"></a>
### [Deprecate and remove: Attribution Reporting API](https://chromestatus.com/feature/6320639375966208)

- **Milestone:** Chrome 153 (Deprecated)
- **ChromeStatus:** [chromestatus.com/feature/6320639375966208](https://chromestatus.com/feature/6320639375966208) · [chromestatuslite.com/feature/6320639375966208](https://chromestatuslite.com/feature/6320639375966208)
- **Specification:** [https://wicg.github.io/attribution-reporting-api](https://wicg.github.io/attribution-reporting-api)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The Attribution Reporting API is a privacy-preserving web API designed to measure ad conversions without third-party cookies or user tracking across sites.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Attribution Reporting API (along with other Privacy Sandbox APIs).  \[0\]: https://privacysandbox.com/news/privacy-sandbox-next-steps/

> **Motivation:** Chrome has announced that the current approach to third-party cookies will be maintained. Given this, we expect adoption to decrease over time as cross-site measurement will remain possible in Chrome using third-party cookies.  Further, other browser engines have not signaled interest in launching the API. Removing this (and other Privacy Sandbox A...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 240)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Deprecate and remove: Attribution Reporting API is currently Deprecated in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **1 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGVIAMunmjia0Jt7_17egmbFjf3mho21iNMSwZN67wbqchlR73Lixa_c2cnooTgj0NAdss0LNf6bNNOHCAWe4wMOAh7mEksFjos0tTVzOO-NSwRx__DFG2Jf4gnztQxAT2yCNYtKl0ElB7ThUiUGOR2LEb7dNf2CxceCrpgILpONIDdv1QAQGS97wrrDZw=) *(vertexaisearch.cloud.google.com)*
  > Update on Plans for Privacy Sandbox Technologies Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंद...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGevtfwLXw4NYyXkKZK405VBOkymzLDzCJ6hpY-ZmFTHoeWcxe8RNUG-1RtTUA7ujR-Ki7Detnfi3VV6eRbMsshWZUk8PhVbKD0jaGwrmMllds8ozfdCp7PJhxB-zDv_xLD7Hm80weS) *(vertexaisearch.cloud.google.com)*
  > Privacy Sandbox feature status Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文...
- [hidekazu-konishi.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGpVr8lsWVYQHJ0B5wVWtGgo6JvTnM_x-EzWpvKpQVWShJvYqydJoXNfbS1he-U_IcoZcECU-OSRIHx-KAckXruxPyrdnPSVlSFz25ceR1PSvPzh6K1FkWueXw7FbDx8qjX2w7plPGfO-WwkEUPMKGjM_QH0tQOp3o0G3-JKd68dKET) *(vertexaisearch.cloud.google.com)*
  > Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported | hidekazu-konishi.com hidekazu-konishi.com https://hidekazu-k...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG79gSw59m7IyPOPqdCXNGqozvEtGI2aANVj8LMv2NhYg_0L-6VxkLJuh6G9NF5ut80Arp2FZaKKijZOrpWhLApzJKVzajuGOWwl-OBK9P63hf8_f1T88i6X_kh5lKh6d46ecYrSYD_vE9ewHlaqsVecn4sakGYMm7W9uPYD5C6TA==) *(vertexaisearch.cloud.google.com)*
  > Attribution Reporting API - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Attribution Reporting API Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (...
- [arxiv.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF6W8F8_4I0YciStsg83pW4Fzc63iwFaF2tcW2XEz4omIfVZMg9XQf5vot3D8uyFQBXkd336NI67Da-hj5QpzpD8fICJLUBPNyreM6kuWhq1_vkRHS4QsQ=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **Attribution Reporting API** was introduced as a core component of Google’s Privacy Sandbox to measure ad impressions, clicks, and conversions without cross-site tracking or third-party cookie...
- [appy.to](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFg_3oh0muKQFqE_ZbNlcG9g_qY4f3eKSVs49B-OSJUDh7U_4Nhp2akGzr8tbxr_3G2GtF2iiWb1vEGqjKXKXU_11drcPnKzLEcsXF33yLsu19T5pvz9l6RJEG7DL8jHUJ-w_0WqhEyATw0cgi7aqtk12BZ) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **Attribution Reporting API** was introduced as a core component of Google’s Privacy Sandbox to measure ad impressions, clicks, and conversions without cross-site tracking or third-party cookie...

#### 🔗 Inbound Citations & Reverse Links

- [Deprecate and remove: Attribution Reporting API · Issue #1325 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1325) *(github.com · 2026-08-14T17:31:48)* *(Cites: `https://chromestatus.com/feature/6320639375966208`)*
  > Chromestatus: https://<strong>chromestatus.com/feature/6320639375966208</strong> Web Feature ID: N/A Chrome Releases: Chrome 152
- [\[blink-dev\] Intent to Deprecate and Remove: Attribution Reporting API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4K2RRt6VYCQ/m/xt3TXi3WBQAJ) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/6320639375966208`)*
  > https://<strong>chromestatus.com/feature/6320639375966208</strong> · unread, Nov 9, 2025, 7:47:04 PMNov 9 ·  ·  ·  · Reply to author · Sign in to reply to author · Forward · Sign in to forward · Delete · You do not ha...

#### 📚 Platform Documentation & References

- [Deprecate and remove: Attribution Reporting API · Issue #1325 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1325) *(github.com)*
- [\[rule\] attr/iframe-allow-retired-feature (waiting on Chrome) · Issue #361 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/361) *(github.com)*
- [Attribution Reporting API](https://developer.mozilla.org/en-US/docs/Web/API/Attribution_Reporting_API) *(developer.mozilla.org)*
- [Attribution-Reporting-Eligible header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Eligible) *(developer.mozilla.org)*
- [Attribution-Reporting-Register-Source header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=deprecate) (27 test path(s) matching `deprecate`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (46 found across 7 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 11 verified) · `Twitter / X API v2` *(HTTP 400)* · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (27 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5205192866922496-iterator-includes"></a>
### [Iterator Includes](https://chromestatus.com/feature/5205192866922496)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5205192866922496](https://chromestatus.com/feature/5205192866922496) · [chromestatuslite.com/feature/5205192866922496](https://chromestatuslite.com/feature/5205192866922496)
- **Specification:** [https://tc39.es/proposal-iterator-includes](https://tc39.es/proposal-iterator-includes)
- **Chromium Bug:** [https://issues.chromium.org/issues/504886973](https://issues.chromium.org/issues/504886973)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `In development`

#### 📝 Overview

A TC39 proposal to allow the developer to ask whether an iterator yields a given value. Analogue to \`Array.prototype.includes\`.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 240)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Iterator Includes is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **1 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2025773: \[meta\] Iterator includes proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=2025773) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGHT0Bv0OloveTPesn3fV0Ps3uOqEg8oxFv8fJkwiSMMLMtQivheGWwoQnW8ocuETKz307VA8hSAw6202ysVKvMiQS8JsR163KAh0qPIf1EJGrWdIDofjAqFXbNXB34VTK4xAWQj4S8_g==) *(vertexaisearch.cloud.google.com)*
  > GitHub - tc39/proposal-iterator-includes: Array.prototype.includes but for iterators · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with an...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF3ddsvNgkmTCP_-zNICd12gmdW4jfZR-w5aifry3krYTA213YDzbQYEpBF_1r6Zt3qmtMvfoVKAhRaMJ08rOn-2xzYwNx0FMJRMM7v2ArKGEApVviPhZxOU2Bj10ne8JpUrmnPWpfeJkgZRAKbACZtuOIuDdAc05vh2Wr5pBF8jgc2nWhVs4PEbkJjGYP4DEe6G6nrV_u5Ng==) *(vertexaisearch.cloud.google.com)*
  > Iterator.prototype.includes() - JavaScript | MDN Skip to main content Skip to search Toggle sidebar Web JavaScript Reference Standard built-in objects Iterator includes() Theme OS default Light Dark English (US) Remember...
- [tc39.es](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHLGRzD9Y7RDh5_kCPsYi7GfN3EBO-sLHtrfpW_HhxO3HFeXwwIDOaOAuLwfaPeLcrRPQyufHaFvZkuZikY3Yu6UiC96loYUQU2dknufBihpuP4AdMMl6tGORsT1CTY6Lad) *(vertexaisearch.cloud.google.com)*
  > Iterator Includes Toggle shortcuts help ? Toggle "can call user code" annotations u Jump to search box / Toggle pinning of the current clause p Jump to the n th pin 1-9 Jump to the 10 th pin 0 Jump to the most recent lin...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF20QkHE46kYHhvpLUwALovzQ3boocLFbA1mQc3corSlJXwgS_rZP8ZD4iN-nmao454-vqgEKEW9b3mNcYGTJ21Nt8xfUezkhd0hfJ7aDYxd3Qb-O8f5VWPXy0qNWWpdlou7F62P37ngg==) *(vertexaisearch.cloud.google.com)*
  > GitHub - tc39/proposal-iterator-includes: Array.prototype.includes but for iterators · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with an...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE2izrMwHeSMeC-sLmBPaNMJelyEkVhuplilk88hLUVQS2VvXJrt5ZXnPqi2FfPWPbYxasONm3AJxbN2gRBwEzpR-dYKgtly8XdgY-JQIdG_vSHUV8EAlhYt0z97vUnpvCwmHXio6ptyNc-ynGj9MnjSd9bdDUKDOcDfVAwcixc6XSYIF9MjmVjzg6WfPVaXy7hwnwJn6oI0A==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  **Iterator Includes** (`Iterator.prototype.includes`) is a TC39 proposal that extends the JavaScript standard library by allowing developers to check whether an iterator yields a specific value.   It...
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG-yGAFbTWLlIx2hOVjYnkWBh2Qt8ZZU-npFCxO3tqhv2kPbbzrSuVWm55N1zbYNLxm0FBDHKvAnNFvAUgqWwL2bZ62H_H_4qQsB4CSbrXo9_MMNNEguY4SYtIWXSvJm1YUfqYE) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  **Iterator Includes** (`Iterator.prototype.includes`) is a TC39 proposal that extends the JavaScript standard library by allowing developers to check whether an iterator yields a specific value.   It...

#### 🔗 Inbound Citations & Reverse Links

- [web-features consumers report for 2026-10-01 · Issue #4457 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4457) *(github.com · 2026-10-01T10:28:04)* *(Cites: `https://chromestatus.com/feature/5205192866922496`)*
  > tc39-iterator-includes used by https://<strong>chromestatus.com/feature/5205192866922496</strong>
- [Implement Iterator Includes \[504886973\] - Chromium](https://issues.chromium.org/issues/504886973) *(issues.chromium.org)* *(Cites: `https://github.com/tc39/proposal-iterator-includes`)*
  > https://<strong>github.com/tc39/proposal-iterator-includes</strong>

#### 📚 Platform Documentation & References

- [web-features consumers report for 2026-10-01 · Issue #4457 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4457) *(github.com)*
- [2034104 - Ship Iterator Includes proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=2034104) *(bugzilla.mozilla.org)*
- [Iterator.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=iterator) (1194 test path(s) matching `iterator`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (38 found across 8 planned queries, 4 verified) · `Google Search Grounding (gemini-3.8-flash)` (19 found, 19 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (6 found, 1 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (1194 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5168674259468288-optional-descriptors-for-registered-custom-properties"></a>
### [Optional descriptors for registered custom properties](https://chromestatus.com/feature/5168674259468288)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5168674259468288](https://chromestatus.com/feature/5168674259468288) · [chromestatuslite.com/feature/5168674259468288](https://chromestatuslite.com/feature/5168674259468288)
- **Specification:** [https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule](https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule)
- **Chromium Bug:** [https://issues.chromium.org/issues/491802759](https://issues.chromium.org/issues/491802759)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Positive` · Safari: `Support`

#### 📝 Overview

Allows authors to omit any descriptor in an @property rule and the corresponding optional members of CSS.registerProperty(). Omitted values  default to universal syntax, inheritance, and the guaranteed-invalid  initial value; invalid descriptors use normal CSS fallback behavior.

> **Motivation:** Registered custom properties currently require authors to repeat syntax and  inherits descriptors, and typed registrations cannot omit initial-value. The  CSSWG resolved that registrations should behave like unregistered custom  properties except for the descriptors authors explicitly provide. This removes  boilerplate and lets typed properties use...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 240)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Optional descriptors for registered custom properties is currently Enabled by default in Chrome 156. Verified ecosystem momentum is High with Multi-Engine Consensus standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @hober: "Closing as we've identified our position...."
- Standards Activity (Mozilla): Latest discussion from @dbaron: "Also see #93, where we added the original position...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **17 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Properties and Values API Level 1](https://github.com/WebKit/standards-positions/issues/22) [closed] `position: support`, `topic: css`, `venue: W3C CSS WG`, `topic: houdini`, `from: Google`
  > *Latest discussion from @hober: "Closing as we've identified our position...."*
- **Mozilla:** [CSS Properties & Values API: @property](https://github.com/mozilla/standards-positions/issues/331) [closed] `venue: W3C`, `position: positive`
  > *Latest discussion from @dbaron: "Also see #93, where we added the original position...."*

#### 📦 Polyfills & NPM Ecosystem

- [@csstools/postcss-property-rule-optional-descriptors](https://www.npmjs.com/package/@csstools/postcss-property-rule-optional-descriptors) `v1.0.0` — Omit optional descriptors in at-property rules

#### 📰 Ecosystem Blogs & Articles

- [Customization best practices for developing PWA - BMC Documentation](https://docs.bmc.com/xwiki/bin/view/Service-Management/Innovation-Suite/BMC-Helix-Innovation-Suite/is252/Developing-Progressive-Web-Applications/Customization-best-practices-for-developing-PWA) *(docs.bmc.com · 2025-08-04T00:00:00)*
  > Make sure that you read the whitepaper at the following link before referring to the best practices in this topic:Community blog: Whitepaper on BMC Helix ITSM PWA Implementation Methodology · The information in the white...
- [Enter app properties for PWA - Windows apps \| Microsoft Learn](https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/pwa/enter-app-properties) *(learn.microsoft.com)*
  > Businesses / Company accounts offering products in France market need to ensure to provide this info for compliance with France Consumer Protection Laws and Regulations 2023 - 2024. This is optional for individual develo...
- [@property \| CSS-Tricks](https://css-tricks.com/almanac/rules/p/property) *(css-tricks.com · 2025-10-10T15:19:06)*
  > <strong>If true, child elements can inherit the custom property value from its parent or ancestors</strong>. initial-value: The initial value for the property. It’s optional if the property accepts any value (&quot;*&quo...
- [html - css property - initial-value overwrites setting from outside - Stack Overflow](https://stackoverflow.com/questions/78932524/css-property-initial-value-overwrites-setting-from-outside) *(stackoverflow.com)*
  > As mentioned in MDN, <strong>initial-value is required for @property to be valid, unless the value for syntax is *</strong>, which is not your case.
- [CSS Custom Properties in Depth \| Bobrov Dev](https://bobrov.dev/blog/css-custom-properties-in-depth) *(bobrov.dev · 2018-05-30T00:00:00)*
  > An initial value is required if ... is optional and could have any value: <strong>CSS.registerProperty({ name: &#x27;--my-any-prop&#x27;, syntax: &#x27;*&#x27;, inherits: false, initialValue: &#x27;10px&#x27; });</strong...
- [CSS.registerProperty() - Web APIs](https://udn.realityripple.com/docs/Web/API/CSS/registerProperty) *(udn.realityripple.com)*
  > <strong>window.CSS.registerProperty({ name: &#x27;--my-color&#x27;, syntax: &#x27;&lt;color&gt;&#x27;, inherits: false, initialValue: &#x27;#c0ffee&#x27;, });</strong>

#### 🔗 Inbound Citations & Reverse Links

- [\[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts](https://github.com/w3c/css-houdini-drafts/issues/994) *(github.com · 2020-07-23T22:24:41)* *(Cites: `https://drafts.css-houdini.org/css-properties-values-api-1/#at-property-rule`)*
  > [css-properties-values-api] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You si...

#### 📚 Platform Documentation & References

- [\[css-properties-values-api\] Make all the descriptors optional · Issue #994 · w3c/css-houdini-drafts](https://github.com/w3c/css-houdini-drafts/issues/994) *(github.com)*
- [Settings · Custom properties · asc-lab/claim-reporter-pwa-poc · GitHub](https://github.com/asc-lab/claim-reporter-pwa-poc/custom-properties) *(github.com)*
- [GitHub - pwa-builder/PWABuilder: The simplest way to create progressive web apps across platforms and devices. Start here. This repo is home to several projects in the PWABuilder family of tools. · GitHub](https://github.com/pwa-builder/pwabuilder) *(github.com)*
- [Web application manifest - Progressive web apps \| MDN](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest) *(developer.mozilla.org)*
- [\[css-properties-values-api\] \`@property\` descriptors should be optional whenever possible · Issue #13211 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13211) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=css-properties-values-api) (124 test path(s) matching `css-properties-values-api`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (51 found across 11 planned queries, 20 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 1 verified) · `Web Platform Tests (wpt.fyi)` (124 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 7

---

<a id="6327898878377984-css-pseudo-class-for-navigation-source-element"></a>
### [CSS pseudo-class for navigation source element](https://chromestatus.com/feature/6327898878377984)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6327898878377984](https://chromestatus.com/feature/6327898878377984) · [chromestatuslite.com/feature/6327898878377984](https://chromestatuslite.com/feature/6327898878377984)
- **Specification:** [https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class](https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class)
- **Chromium Bug:** [https://issues.chromium.org/issues/530210946](https://issues.chromium.org/issues/530210946)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Selects the element that initiated the navigation, whether it's a link/button/form. The element stays selected throughout the navigation.

> **Motivation:** The main motivation for this comes from view transitions. This gives author a way to visually indicate a relationship between the navigation source (form/button) and the process of the navigation, e.g. expanding a thumbnail using an animation.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 230)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"CSS navigation source pseudo class navigation source blink dev"`, `"CSS pseudo class for navigation source element mozilla standards positions webkit"`
- **Analysis:** The \`:navigation-source\` pseudo-class (part of CSS Navigation Level 1) is shipping enabled by default in Chrome 156, offering a declarative selector to target the originating link, button, or form throughout an active navigation. It is heavily driven by cross-document View Transitions use cases, enabling seamless visual continuity such as thumbnail expansions during page loads. While welcomed as an ergonomic replacement for brittle JavaScript state tracking, it remains a single-engine implementation without Baseline indexing.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat \`:navigation-source\` strictly as a progressive enhancement to enhance transition styling and loading indicators on Chromium browsers. Ensure critical UI feedback and accessibility fallbacks remain functional across non-Chromium browsers via \`@supports selector(:navigation-source)\` queries.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @noamr: "&gt; \[@noamr\](https://github.com/noamr) I guess the main use case is view-transitions, right? Doesn't seem particularly complicated I suppose  Right, but..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS :navigation-source pseudo-class](https://github.com/WebKit/standards-positions/issues/715) [open] `topic: css`, `venue: W3C CSS WG`, `from: Google`
- **Mozilla:** [CSS \`:navigation-source\` pseudo-class](https://github.com/mozilla/standards-positions/issues/1447) [open] `topic: CSS`
  > *Latest discussion from @noamr: "> [@noamr](https://github.com/noamr) I guess the main use case is view-transitions, right? Doesn't seem particularly complicated I suppose  Right, but..."*

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS pseudo-class for navigation source element Chromestatus Thu, 03 Sep 2026 02...
- [Re: \[blink-dev\] Intent to Ship: Navigation API: expose destination in navigation.transition](http://www.mail-archive.com/blink-dev@chromium.org/msg15470.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Navigation API: expose destination in navigation.transition Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Navigation API: expose destination in navigation.transitio...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17395.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS pseudo-class for navigation source element Philip Jägenstedt Wed, 0...
- [\[blink-dev\] Intent to Ship: Navigation API: expose destination in navigation.transition](http://www.mail-archive.com/blink-dev@chromium.org/msg15430.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Navigation API: expose destination in navigation.transition Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Navigation API: expose destination in navigation.transition Chrome...
- [\[blink-dev\] Intent to Prototype: Navigation API: expose destination in navigation.transition](https://www.mail-archive.com/blink-dev@chromium.org/msg14710.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Navigation API: expose destination in navigation.transition Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Navigation API: expose destination in navigation.transit...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17393.html) *(mail-archive.com)*
  > On Thu, Sep 3, 2026 at 5:46 AM ...ts.csswg.org/css-navigation-1/#navigation-source-pseudo-class &gt; &gt; *Summary* &gt; <strong>Selects the element that initiated the navigation, whether it&#x27;s a &gt; link/button/for...

#### 🔗 Inbound Citations & Reverse Links

- [CSS Navigation · Issue #4301 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4301) *(github.com · 2026-09-03T09:32:09)* *(Cites: `https://chromestatus.com/feature/6327898878377984`)*
  > CSS Navigation · Issue #4301 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [Updates for Chrome Canary, 18 Sept. 2026 by Elchi3 · Pull Request #30576 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30576) *(github.com)* *(Cites: `https://chromestatus.com/feature/6327898878377984`)*
  > Updates for Chrome Canary, 18 Sept. 2026 by Elchi3 · Pull Request #30576 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sig...
- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > [blink-dev] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS pseudo-class for navigation source element Chromestatus Thu, 03 Sep 2026 02...
- [Re: \[blink-dev\] Intent to Ship: Navigation API: expose destination in navigation.transition](http://www.mail-archive.com/blink-dev@chromium.org/msg15470.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > Re: [blink-dev] Intent to Ship: Navigation API: expose destination in navigation.transition Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Navigation API: expose destination in navigation.transitio...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17395.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > Re: [blink-dev] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS pseudo-class for navigation source element Philip Jägenstedt Wed, 0...

#### 📚 Platform Documentation & References

- [CSS Navigation · Issue #4301 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4301) *(github.com)*
- [Updates for Chrome Canary, 18 Sept. 2026 by Elchi3 · Pull Request #30576 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30576) *(github.com)*
- [\[css-navigation-1\] Add pseudo-class selector to target the element that initiated the outgoing navigation · Issue #11801 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11801) *(github.com)*
- [\[css-navigation-1\] Secure way to expose current document URL to CSS · Issue #14266 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14266) *(github.com)*
- [Other Spec Review: CSS navigation-based styling · Issue #1253 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1253) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=css-navigation) (26 test path(s) matching `css-navigation`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (42 found across 12 planned queries, 20 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 3 tweet(s))* · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (26 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 2

---

<a id="5122501071994880-predefinedcolorspace-srgb-linear-and-display-p3-linear"></a>
### [PredefinedColorSpace srgb-linear and display-p3-linear](https://chromestatus.com/feature/5122501071994880)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5122501071994880](https://chromestatus.com/feature/5122501071994880) · [chromestatuslite.com/feature/5122501071994880](https://chromestatuslite.com/feature/5122501071994880)
- **Specification:** [https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction](https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction)
- **Chromium Bug:** [https://issuetracker.google.com/issues/454152417](https://issuetracker.google.com/issues/454152417)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `Positive`

#### 📝 Overview

Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases.

> **Motivation:** Linear color spaces (where pixel values correspond linearly to luminance) are extremely commonly used in applications with connections to physical light rendering (e.g, games) or spatial processing (e.g, decimation, anti-aliasing, and interpolation).

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 225)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""PredefinedColorSpace" "srgb-linear" "display-p3-linear" standards-positions"`, `""srgb-linear" "display-p3-linear" PredefinedColorSpace"`, `""srgb-linear" "PredefinedColorSpace" site:chromestatus.com"`
- **Analysis:** The HTML standard has officially expanded the \`PredefinedColorSpace\` enumeration to include \`srgb-linear\` and \`display-p3-linear\`, standardizing native linear-light canvas backing stores across 2D Canvas, ImageData, WebGL, and WebGPU. Shipped enabled by default in Chrome 155 and supported in WebKit/Safari, this feature resolves longstanding color management pain points for physically based rendering and spatial image processing. Firefox currently tracks implementation under Gecko Bug #1996208 alongside an open standards position, demonstrating strong cross-engine momentum toward Baseline support.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building advanced graphics, image processing, or PBR pipelines should adopt \`srgb-linear\` and \`display-p3-linear\` using progressive enhancement. Verify support via a \`try...catch\` block during canvas context or \`ImageData\` creation, falling back to manual sRGB conversion passes in non-supporting engines until Gecko completes implementation.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **14 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **Mozilla:** [srgb-linear and display-p3-linear PredefinedColorSpace](https://github.com/mozilla/standards-positions/issues/1453) [open] 

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1996208: Implement srgb-linear and display-p3-linear PredefinedColorSpace](https://bugzilla.mozilla.org/show_bug.cgi?id=1996208) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [\[canvas\] Warning on getImageData uses from create.js library \| Community](https://community.adobe.com/t5/animate-discussions/canvas-warning-on-getimagedata-uses-from-create-js-library/td-p/13396005) *(community.adobe.com · 2022-12-05T15:05:19)*
  > --> [canvas] Warning on getImageData uses from create.js library | Community Skip to main content Create a post Login Home App communities Animate Questions [canvas] Warning on getImageData uses from create.js library ch...
- [Canvas2D: Multiple readback operations \| CanvasJS Charts](https://canvasjs.com/forums/topic/canvas2d-multiple-readback-operations) *(canvasjs.com · 2023-05-15T05:10:58)*
  > canvasjs.min.js:27 Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true. See: https://<strong>html.spec.whatwg.org/multipage/canvas.html</strong>#concept-...
- [Web application related coding questions - SheCodes Athena \| SheCodes](https://www.shecodes.io/athena?tag=web+application) *(shecodes.io)*
  > Web application related coding questions - SheCodes Athena | SheCodes See what students from United States are saying 250,000+ students recommend See reviews AI + Coding Workshops NEW AI Coding Workshops New Build with A...
- [PredefinedColorSpace srgb-linear and display-p3-linear - Chrome Platform Status](https://chromestatus.com/feature/5122501071994880) *(chromestatus.com · 2025-10-21T00:00:00)*
  > We cannot provide a description for this page right now
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17494.html) *(mail-archive.com)*
  > &gt; On 9/9/26 6:42 a.m., Yoav Weiss ...spaces-and-colour-correction &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; *Summary* &gt;&gt;&gt;&gt; <strong>Add srgb-linear and display-p3-linear color spaces (as defined by...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)*
  > Specification https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction Summary <strong>Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use ...

#### 🔗 Inbound Citations & Reverse Links

- [Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true · Issue #2986 · niklasvh/html2canvas](https://github.com/niklasvh/html2canvas/issues/2986) *(github.com · 2022-11-04T10:45:56)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true · Issue #2986 · niklasvh/html2canvas · GitHub Skip to content Navigation Menu Sign in Appearance sett...
- [\[canvas\] Warning on getImageData uses from create.js library \| Community](https://community.adobe.com/t5/animate-discussions/canvas-warning-on-getimagedata-uses-from-create-js-library/td-p/13396005) *(community.adobe.com · 2022-12-05T15:05:19)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > --> [canvas] Warning on getImageData uses from create.js library | Community Skip to main content Create a post Login Home App communities Animate Questions [canvas] Warning on getImageData uses from create.js library ch...
- [Canvas2D: Multiple readback operations \| CanvasJS Charts](https://canvasjs.com/forums/topic/canvas2d-multiple-readback-operations) *(canvasjs.com · 2023-05-15T05:10:58)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > canvasjs.min.js:27 Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true. See: https://<strong>html.spec.whatwg.org/multipage/canvas.html</strong>#concept-...
- [GitHub - w3c/2dcontext: Moved to https://html.spec.whatwg.org/multipage/canvas.html · GitHub](https://github.com/w3c/2dcontext) *(github.com)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > GitHub - w3c/2dcontext: Moved to https://html.spec.whatwg.org/multipage/canvas.html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ano...
- [whatwg/html](https://github.com/whatwg/html/issues/11101) *(github.com · 2025-03-04T18:44:58)* *(Cites: `https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction`)*
  > OffscreenCanvas convertToBlob(options) has copy paste errors · Issue #11101 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in wi...

#### 📚 Platform Documentation & References

- [Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true · Issue #2986 · niklasvh/html2canvas](https://github.com/niklasvh/html2canvas/issues/2986) *(github.com)*
- [GitHub - w3c/2dcontext: Moved to https://html.spec.whatwg.org/multipage/canvas.html · GitHub](https://github.com/w3c/2dcontext) *(github.com)*
- [whatwg/html](https://github.com/whatwg/html/issues/11101) *(github.com)*
- [Setting willReadFrequently on layers created/managed by Konva? · Issue #1417 · konvajs/konva](https://github.com/konvajs/konva/issues/1417) *(github.com)*
- [willReadFrequently on getResult() canvas ? · Issue #287 · advanced-cropper/vue-advanced-cropper](https://github.com/advanced-cropper/vue-advanced-cropper/issues/287) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=canvas) (4130 test path(s) matching `canvas`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (45 found across 11 planned queries, 21 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (1 found, 1 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (4130 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5126146013396992-secure-payment-confirmation-locale-validation"></a>
### [Secure Payment Confirmation: Locale Validation](https://chromestatus.com/feature/5126146013396992)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5126146013396992](https://chromestatus.com/feature/5126146013396992) · [chromestatuslite.com/feature/5126146013396992](https://chromestatuslite.com/feature/5126146013396992)
- **Specification:** [https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale](https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale)
- **Chromium Bug:** [https://crbug.com/535278878](https://crbug.com/535278878)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Updates Secure Payment Confirmation's \`locale\` data field to return a Not Supported DOMException if none of the language tags provided in the field match the language used by the Secure Payment Confirmation's dialog. If the field is not set or empty, this validation is skipped.  This helps web developers with matching the language of the data that they are supplying to Secure Payment Confirmation with the dialog.

> **Motivation:** This feature amends Secure Payment Confirmation so that web developers can align the language of data elements that they supply to Secure Payment Confirmation with the language used by the Secure Payment Confirmation dialog.  Currently web developers can provide a list of language tags for Secure Payment Confirmation to use in their dialog. But Sec...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 225)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Secure Payment Confirmation" "locale" w3c github"`, `""Secure Payment Confirmation" "locale" validation chromestatus"`, `"site:chromestatus.com "Secure Payment Confirmation" "locale""`
- **Analysis:** Secure Payment Confirmation: Locale Validation shipped enabled by default in Chrome 154, allowing merchants and payment authenticators to ensure transaction data matches the browser's native dialog language. The feature resolves a recurring internationalization challenge in EMV 3DS flows by throwing a NotSupportedError DOMException when no supplied language tag matches the browser UI locale. However, broad web platform impact remains constrained because the underlying Secure Payment Confirmation (SPC) specification lacks multi-engine implementation outside of Chromium.

**Key Recommendations & Takeaways:**
- Actionable Advice: If utilizing Secure Payment Confirmation, specify your supported language tags in the \`locale\` field and wrap the call in a try/catch block to intercept \`NotSupportedError\`. Use that failure signal to renegotiate or translate transaction strings into a fallback locale before retrying or gracefully falling back to standard 3DS web flows.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @gsnedders: "Am I right in understanding that the primary goal here is to replace 3-D Secure with something that's browser mediated?..."
- Standards Activity (Mozilla): Latest discussion from @stephenmcgruer: "Hi folks. I know that Mozilla's position on SPC is outstanding, however we wanted to let you know of a notable additional feature to SPC that we are c..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Secure Payment Confirmation (SPC)](https://github.com/WebKit/standards-positions/issues/30) [open] `topic: payments`, `concerns: integration`, `venue: W3C Web Payments WG`, `from: Google`
  > *Latest discussion from @gsnedders: "Am I right in understanding that the primary goal here is to replace 3-D Secure with something that's browser mediated?..."*
- **Mozilla:** [Secure Payment Confirmation](https://github.com/mozilla/standards-positions/issues/570) [open] 
  > *Latest discussion from @stephenmcgruer: "Hi folks. I know that Mozilla's position on SPC is outstanding, however we wanted to let you know of a notable additional feature to SPC that we are c..."*

#### 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEpAm_XHSy8ZPsK6AN7VIENguIQy9H37hpWxlIFaZ-LIv19lCrwTiV2RPZj3rnoNz-y3_qPVjqt2UL1YXypBY1ttTCno2so1VFjmToU4ItzxASh_qnNIOgq_nuEDhK-3jqskYEh3O4d7g==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:**...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFxrFByka1vT9f4wjBP9a6fPHULsicOnXlZyL3lpWmpq0_nljYzlg_9UxInfeI6Dw9cY1V2vH_dtAc-E87RvFnxuJYVENA2nr6OyLF7TUGJtxRl6FiwN2vBM_n47fRPx5VWXeT3WJA=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:**...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE1Az-SA4EV4QPufQti-Br0SGgR-EiELPmXfrLW1n8_A_MV1ybIp9B6mo8qUqja7RfMZseWFMrrepNu5Rflls5eSJiiOVOakqck8037QiwF7kzjJqb6ARa3bNJ-xgeV-tjOaorX708=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:**...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHah1kC6qe-SgpiQZbom5wD6NwVkcoy_4fbtxvLIu7vVjIjhtovgTlj35SOJnAsVu51v3Gmm8cBIVhVxVDc3MxXHHCQ4kismG_xIaoHaGs=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:**...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGwKhuQgjLcEoi06y2ydi6h8fhNFlEc6mJ2AimlzjoRqw0rysquHBjJ5prQR_DbkhLyBbd9B1jLyPs8QlwYlVpLkMsrt6Bva2Oor9MI-uNvUJLnt54F9fiqm_KGtiMc7w==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:**...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF1z5kZ6i8d4omrxmFl6_Urg5S7xvPvkhyKLliKk8xc5INizvwPo3wtIOpD1MeJFCZeOgsWflsRoBr8IVrhbUXONOmQrec3jbvHznqlL_xhYiRCUHKZhUiK5iAQGdleTPzMPp9e4loY1y3LeHD_6O-LcxLQf5cyJ_Ao) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Secure Payment Confirmation: Locale Validation"** is an enhancement to the Secure Payment Confirmation (SPC) standard within the Payment Request and WebAuthn ecosystem.   * **The Problem:**...

#### 🔗 Inbound Citations & Reverse Links

- [secure-payment-confirmation/spec.bs at main · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/spec.bs) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > TR: https://www.w3.org/TR/secure-payment-confirmation/ ED: https://<strong>w3c.github.io/secure-payment-confirmation</strong>/ Prepare for TR: true · Inline Github Issues: true · Group: web-payments · Status: w3c/ED · De...

#### 📚 Platform Documentation & References

- [secure-payment-confirmation/spec.bs at main · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/spec.bs) *(github.com)*
- [Localization topics to address · Issue #93 · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/issues/93) *(github.com)*
- [SecurePaymentConfirmationRequest - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/SecurePaymentConfirmationRequest) *(developer.mozilla.org)*
- [Secure Payment Confirmation](https://www.w3.org/TR/2023/CR-secure-payment-confirmation-20230615) *(w3.org)*

#### 🧪 Interactive Demos & Samples

- [Secure Payment Confirmation: Locale Validation Demo](https://rsolomakhin.github.io/pr/spc-locales)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=secure-payment-confirmation) (20 test path(s) matching `secure-payment-confirmation`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (38 found across 12 planned queries, 6 verified) · `Google Search Grounding (gemini-3.8-flash)` (19 found, 12 verified) · `Twitter / X API v2` *(HTTP 400)* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (20 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 9

---

<a id="5201832664629248-additional-windowing-controls"></a>
### [Additional Windowing Controls](https://chromestatus.com/feature/5201832664629248)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5201832664629248](https://chromestatus.com/feature/5201832664629248) · [chromestatuslite.com/feature/5201832664629248](https://chromestatuslite.com/feature/5201832664629248)
- **Specification:** [https://www.w3.org/TR/window-management/#api-window-minimize-method](https://www.w3.org/TR/window-management/#api-window-minimize-method)
- **Chromium Bug:** [https://issues.chromium.org/issues/40192345](https://issues.chromium.org/issues/40192345)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Enables web applications with the window-management permission to maximize(), minimize(), and restore() their windows, and to prevent resizing through setResizable(). Additionally, new CSS media features display-state and resizable enable scripts and content to adapt to the respective window states and resizability. These features improve the usability of VDI remote application windows in Web clients, especially when it comes to titlebar window controls. The new functionality enhances existing Window Management API features: https://chromestatus.com/feature/5252960583942144

> **Motivation:** Virtual Desktop Infrastructure (VDI) web clients have limited abilities to integrate remote application windows with the local desktop environment, which creates suboptimal experiences for their users. Currently, they can only present full disjoint remote desktop environments (e.g. in a local fullscreen window), or present individual remote applica...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 220)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Additional Windowing Controls" window management chromium OR webkit OR mozilla"`, `""Additional Windowing Controls" "Intent to Ship" blink-dev"`
- **Analysis:** Additional Windowing Controls ships enabled by default in Chrome 155, introducing programmatic window state management (window.maximize, minimize, restore, setResizable) alongside the display-state and resizable CSS media features. While delivering long-sought UI parity for enterprise VDI web clients and standalone desktop PWAs, the feature currently lacks cross-engine consensus and is not indexed in Baseline.

**Key Recommendations & Takeaways:**
- Actionable Advice: Implement these controls strictly as an optional progressive enhancement for installed desktop PWAs, always verifying the window-management permission and method availability prior to invocation. Avoid building windowing architectures that depend on programmatic resizing, ensuring robust fallbacks for Firefox, Safari, and standard browser tabs.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @sonkkeli: "Hey, I'm jumping in here as I'm continuing on Ivan's work.  There were some updates made on the proposed APIs and the current proposals are at least a..."
- Standards Activity (Mozilla): Latest discussion from @michaelwasserman: "Client application window controls may indeed be limited by the OS, Window Manager, protocols, utilities, and modalities. The API surface offers coher..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Additional Windowing Controls](https://github.com/WebKit/standards-positions/issues/96) [open] `concerns: privacy`, `topic: app-like capabilities`, `concerns: integration`, `venue: none / personal repository`, `from: Google`, `concerns: annoyance`
  > *Latest discussion from @sonkkeli: "Hey, I'm jumping in here as I'm continuing on Ivan's work.  There were some updates made on the proposed APIs and the current proposals are at least a..."*
- **Mozilla:** [Additional Windowing Controls](https://github.com/mozilla/standards-positions/issues/712) [open] 
  > *Latest discussion from @michaelwasserman: "Client application window controls may indeed be limited by the OS, Window Manager, protocols, utilities, and modalities. The API surface offers coher..."*
- **W3C TAG:** [WG New Spec: Additional Windowing Controls](https://github.com/w3ctag/design-reviews/issues/1246) [open] `Review type: horizontal review`
  > *Latest discussion from @patrykchodur: "Reopening the issue..."*

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17394.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Additional Windowing Controls Chromestatus Tue, 08 Sep 2026 23:04:36 -0700 Contact emails [email...
- [\[blink-dev\] Re: Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17441.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Additional Windowing Controls Vladimir Levin Mon, 14 Sep 2026 08:57:02 -0700 LGTM1 On We...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17442.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Additional Windowing Controls Chris Harrelson Mon, 14 Sep 2026 09:14:30 -0700 LGTM2 On T...
- [\[Proposal\] Additional Windowing Controls](https://discourse.wicg.io/t/proposal-additional-windowing-controls/6044) *(discourse.wicg.io)*
  > [Proposal] Additional Windowing Controls A partial archive of discourse.wicg.io as of Saturday February 24, 2024. [Proposal] Additional Windowing Controls ivansandrk 2022-11-23 Full explainer available here Introduction ...
- [Additional Windowing Controls](https://chromestatus.com/feature/5201832664629248) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Window Controls (OpenWindows User's Guide)](https://docs.oracle.com/cd/E19455-01/806-2901/6jc3a4m17/index.html) *(docs.oracle.com)*
  > The following examples illustrate the use of window controls on a group of selected windows or icons. To select multiple windows, either click SELECT on one window and ADJUST on additional windows (or icons), or position...

#### 🔗 Inbound Citations & Reverse Links

- [Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1364) *(github.com · 2026-08-20T17:03:51)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anot...
- [Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4257) *(github.com · 2026-08-20T17:00:48)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab ...
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with a...
- [\[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17394.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md`)*
  > [blink-dev] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Additional Windowing Controls Chromestatus Tue, 08 Sep 2026 23:04:36 -0700 Contact emails [email...
- [\[blink-dev\] Re: Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17441.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md`)*
  > [blink-dev] Re: Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Additional Windowing Controls Vladimir Levin Mon, 14 Sep 2026 08:57:02 -0700 LGTM1 On We...

#### 📚 Platform Documentation & References

- [Additional Windowing Controls · Issue #1364 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1364) *(github.com)*
- [Additional Windowing Controls · Issue #4257 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4257) *(github.com)*
- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [Additional Windowing Controls · Issue #96 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/96) *(github.com)*
- [GitHub - explainers-by-googlers/additional-windowing-controls: Repository hosting the feature explainer · GitHub](https://github.com/explainers-by-googlers/additional-windowing-controls) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Additional Windowing Controls Demo](https://awc-demo-4a08a808.web.app)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=window-management) (5 test path(s) matching `window-management`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (39 found across 8 planned queries, 16 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (8 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (5 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 12

---

<a id="5078190552907776-webaudio-configurable-render-quantum"></a>
### [WebAudio: Configurable render quantum](https://chromestatus.com/feature/5078190552907776)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5078190552907776](https://chromestatus.com/feature/5078190552907776) · [chromestatuslite.com/feature/5078190552907776](https://chromestatuslite.com/feature/5078190552907776)
- **Specification:** [https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize)
- **Chromium Bug:** [https://crbug.com/40637820](https://crbug.com/40637820)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Adds an optional renderSizeHint to AudioContext and OfflineAudioContext. This allows developers to customize the WebAudio render quantum size by passing a specific integer, use the default of 128 frames by omitting the hint or passing "default", or request that the User-Agent select an optimal size by specifying "hardware".

> **Motivation:** It is difficult and complex to write a web app when the audio processing block size does not match with the WebAudio render quantum size (128 sample-frames). Removing this restriction and making it customizable on AudioContext would enable easier development and more efficient audio processing.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 220)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** WebAudio: Configurable render quantum is currently Enabled by default in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Web Audio Modules (@webaudiomodules) / ..." (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **2 new community discussions** found
- 📰 **7 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Web Audio Modules (@webaudiomodules) / ...](https://twitter.com/webaudiomodules?lang=fr) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [A curated list of awesome WebAudio packages and ...](https://twitter.com/jsterlibs/status/1826533517263519750) — *Twitter / X by @jsterlibs (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [WebAudio Configurable Render Quantum](https://github.com/WebKit/standards-positions/issues/662) [open] 
- **Mozilla:** [WebAudio Configurable Render Quantum](https://github.com/mozilla/standards-positions/issues/1407) [open] `venue: W3C`, `topic: API`

#### 📰 Ecosystem Blogs & Articles

- [Intent to Extend Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/MlLqosTB0cQ) *(groups.google.com)*
  > Intent to Extend Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Inten...
- [Intent to Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/j7Wf7bA_qOY) *(groups.google.com · 2026-01-21T00:00:00)*
  > Intent to Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ex...
- [\[blink-dev\] Intent to Extend Experiment: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg16317.html) *(mail-archive.com)*
  > Blink component Blink&gt;WebAudio ... Configurable Render Quantum Goals for experimentation <strong>Validate performance improvement gained by matching render quantum size to software buffer sizes when using a numeric re...
- [\[blink-dev\] Intent to Ship: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17051.html) *(mail-archive.com)*
  > Name WebAudio Configurable Render Quantum Goals for experimentation <strong>Validate performance improvement gained by matching render quantum size to software buffer sizes when using a numeric renderSizeHint</strong>. V...
- [Re: \[blink-dev\] Re: Intent to Ship: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17081.html) *(mail-archive.com)*
  > Name* WebAudio Configurable Render Quantum *Goals for experimentation* <strong>Validate performance improvement gained by matching render quantum size to software buffer sizes when using a numeric renderSizeHint</strong>...
- [Intent to Prototype: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/n4PifuLlrwc) *(groups.google.com)*
  > It is difficult and complex to write a web app when the audio processing block size does not match with the WebAudio render quantum size (128 sample-frames). Removing this restriction and making it customizable on AudioC...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Extend Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/MlLqosTB0cQ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5078190552907776`)*
  > Intent to Extend Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Inten...
- [Intent to Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/j7Wf7bA_qOY) *(groups.google.com · 2026-01-21T00:00:00)* *(Cites: `https://chromestatus.com/feature/5078190552907776`)*
  > Intent to Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ex...

#### 📚 Platform Documentation & References

- [Feature for customizing user-agent for an &lt;iframe&gt; · Issue #1479 · nwjs/nw.js](https://github.com/nwjs/nw.js/issues/1479) *(github.com)*
- [GitHub - mckamey/cssuseragent: Automatically adds User Agent CSS classes to the document allowing variations for specific browsers without resorting to CSS hacks. · GitHub](https://github.com/mckamey/cssuseragent) *(github.com)*
- [TPAC 2025: Audio WG update](https://www.w3.org/2025/11/TPAC/demo-audio-wg-update.html) *(w3.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webaudio) (354 test path(s) matching `webaudio`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (42 found across 7 planned queries, 19 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(HTTP 400)* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (354 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5077657663438848-webgpu-subgroup-size-control"></a>
### [WebGPU: Subgroup Size Control](https://chromestatus.com/feature/5077657663438848)

- **Milestone:** Chrome 152 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5077657663438848](https://chromestatus.com/feature/5077657663438848) · [chromestatuslite.com/feature/5077657663438848](https://chromestatuslite.com/feature/5077657663438848)
- **Specification:** [https://github.com/gpuweb/gpuweb/pull/5578](https://github.com/gpuweb/gpuweb/pull/5578)
- **Chromium Bug:** [https://issues.chromium.org/issues/463721943](https://issues.chromium.org/issues/463721943)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Positive` · Safari: `Positive`

#### 📝 Overview

Adds the optional GPU feature "subgroup-size-control" that allows explicitly setting the subgroup size in a compute shader.  This technique is particularly useful for the applications that need to optimize the performance of the compute shader using subgroup operations with specifc subgroup size on certain platforms, such as the AI workloads.

> **Motivation:** Adds the optional GPU feature "subgroup-size-control" that allows explicitly setting the subgroup size in a compute shader.  This technique is particularly useful for the applications that need to optimize the performance of the compute shader using subgroup operations with specifc subgroup size on certain platforms, such as the AI workloads.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 220)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""gpuweb/gpuweb/pull/5578" OR "gpuweb/gpuweb" "subgroup" "size""`, `""subgroup-size-control" webgpu"`
- **Analysis:** WebGPU Subgroup Size Control adds the optional "subgroup-size-control" feature and the @subgroup\_size WGSL attribute, enabling compute pipelines to explicitly lock SIMD warp/wavefront execution widths to valid powers of two. Standardized through the W3C GPU for the Web Working Group and enabled by default in Chrome 152, the feature addresses critical performance bottlenecks in browser-based AI/ML and compute-heavy shaders. However, because it is an optional hardware-dependent capability, baseline availability across other browser engines remains limited.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat subgroup size control strictly as a progressive enhancement: inspect \`adapter.features.has('subgroup-size-control')\` and query adapter min/max subgroup limits before requesting the feature and compiling specialized WGSL shaders. Always maintain a dynamic or fallback compute path for devices and non-Chromium browsers where explicit subgroup sizing is unavailable.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **14 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16882.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Mike Taylor Thu, 25 Jun 2026 14:33:12 -0700 LGTM3 ...
- [\[blink-dev\] Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16837.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: WebGPU: Subgroup Size Control Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: Subgroup Size Control Chromestatus Wed, 24 Jun 2026 01:36:56 -0700 Contact emails [email...
- [gl\_SubgroupSize in GLSL Across GPU Architectures - glsl](https://salivity.github.io/glsl/article/gl-subgroup-size-in-glsl-across-gpu-architectures) *(salivity.github.io)*
  > gl_SubgroupSize in GLSL Across GPU Architectures - glsl salivity.github.io/ glsl gl_SubgroupSize in GLSL Across GPU Architectures In modern GLSL, the gl_SubgroupSize built-in variable reports the execution width of the c...
- [WebGPU Compute Shader Basics](https://webgpufundamentals.org/webgpu/lessons/webgpu-compute-shaders.html) *(webgpufundamentals.org)*
  > WebGPU Compute Shader Basics English Español 日本語 한국어 Português (Brasil) Русский Türkçe Українська 简体中文 Table of Contents webgpufundamentals.org Fix, Fork, Contribute WebGPU Compute Shader Basics This browser is missing a...
- [Subgroup Selectors - Dynamic HTML: The Definitive Reference \[Book\]](https://www.oreilly.com/library/view/dynamic-html-the/1565924940/ch03s07.html) *(oreilly.com · 1998-07-01T00:00:00)*
  > Subgroup Selectors While a selector for a style sheet rule is most often an HTML element name, that scenario is not flexible enough for more complex documents. Consider the... - Selection from Dynamic HTML: The Definitiv...
- [WebGPU subgroups](https://codepen.io/web-dot-dev/pen/emOqWQJ) *(codepen.io)*
  > &lt;li&gt;Inspecting &lt;tt&gt;adapter.info.subgroupMinSize&lt;/tt&gt; and &lt;tt&gt;adapter.info.subgroupMaxSize&lt;/tt&gt;. &lt;li&gt;A shader that uses the &lt;tt&gt;subgroupExclusiveMul()&lt;/tt&gt; built-in function...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16882.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/5578`)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: Subgroup Size Control Mike Taylor Thu, 25 Jun 2026 14:33:12 -0700 LGTM3 ...
- [\[blink-dev\] Intent to Ship: WebGPU: Subgroup Size Control](http://www.mail-archive.com/blink-dev@chromium.org/msg16837.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/5578`)*
  > [blink-dev] Intent to Ship: WebGPU: Subgroup Size Control Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: Subgroup Size Control Chromestatus Wed, 24 Jun 2026 01:36:56 -0700 Contact emails [email...

#### 📚 Platform Documentation & References

- [GPU Web 2026‐02‐24 25 WGSL](https://github.com/gpuweb/gpuweb/wiki/GPU-Web-2026%E2%80%9002%E2%80%9024-25-WGSL) *(github.com)*
- [Considerations for subgroups · Issue #3950 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/3950) *(github.com)*
- [\[WebGPU\] Optimize subgroup matrix MatMulNBits for AMD wave64 by gyagp · Pull Request #32796 · microsoft/onnxruntime](https://github.com/microsoft/onnxruntime/pull/32796) *(github.com)*
- [\[WebGPU\] Refactor subgroup matrix config selection by gyagp · Pull Request #32700 · microsoft/onnxruntime](https://github.com/microsoft/onnxruntime/pull/32700) *(github.com)*
- [\[WebGPU\] Enable subgroup matrix kernels on AMD GPUs by gyagp · Pull Request #32667 · microsoft/onnxruntime](https://github.com/microsoft/onnxruntime/pull/32667) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webgpu) (1 test path(s) matching `webgpu`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (46 found across 12 planned queries, 21 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (1 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="4895435813683200-compression-dictionary-transport-updates"></a>
### [Compression dictionary transport Updates](https://chromestatus.com/feature/4895435813683200)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/4895435813683200](https://chromestatus.com/feature/4895435813683200) · [chromestatuslite.com/feature/4895435813683200](https://chromestatuslite.com/feature/4895435813683200)
- **Specification:** [https://github.com/whatwg/html/pull/11620](https://github.com/whatwg/html/pull/11620)
- **Chromium Bug:** [https://issues.chromium.org/issues/40255884](https://issues.chromium.org/issues/40255884)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

When fetching rel=compression-dictionary links:  - Use "compression-dictionary" as request destination. - Properly set request's mode, credentials, referrer and referrerpolicy. - Take into account crossorigin and referrer attributes form &lt;link rel="compression-dictionary"&gt;.

> **Motivation:** Compression Dictionary Transport was shipped in Chromium 130. Recently Mozilla and Igalia worked on some implementation in Firefox and WebKit, quite a bunch of tests have been added and the spec has been updated. This intent to ship is to catch up with the latest changes.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 211)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""rel=compression-dictionary" "destination" "compression-dictionary""`, `""whatwg/html/pull/11620""`, `""Compression dictionary transport" "rel=compression-dictionary" "request destination""`
- **Analysis:** Originally shipped in Chromium 130, Compression Dictionary Transport receives a standards alignment update in Chrome 156 to track WHATWG HTML PR #11620. This refinement standardizes fetch behavior when loading \`&lt;link rel="compression-dictionary"&gt;\`, ensuring requests use the dedicated 'compression-dictionary' request destination while correctly propagating \`crossorigin\`, credentials, and referrer policies. The update solidifies cross-engine interoperability as Firefox and WebKit progress their own implementations alongside shared Web Platform Tests.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams serving shared Brotli or Zstandard dictionaries should safely include \`&lt;link rel="compression-dictionary"&gt;\` alongside appropriate \`crossorigin\` and \`referrerpolicy\` attributes today. The feature is inherently progressive enhancement: browsers lacking support or trailing on spec updates will simply treat unrecognized \`rel\` attributes as harmless no-ops without degrading navigation performance.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "A one‑line change can force a returning user to download a fresh 270 KB bundle because gzip/Brotli compress each respons" (1 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **8 new community discussions** found
- 📰 **5 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [A one‑line change can force a returning user to download a fresh 270 KB bundle because gzip/Brotli compress each respons](https://twitter.com/zyvop1/status/2104529797041008727) — *Twitter / X by @zyvop1 (1 likes/RTs, 0 replies)*
- 🐦 [Twitter](https://twitter.com/CompressionSol1) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [Compression Guru (@CompressionGuru) / ...](https://twitter.com/compressionguru?lang=en) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [PRO Compression (@PROCompression) / ...](https://twitter.com/PROCompression) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [Arun Thangaraj (@Transport\_DM) / X](https://twitter.com/transport_dm) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [RCEA (@RCEAssoc) on X](https://twitter.com/RCEAssoc) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [compressionbox4 - 圧縮箱](https://twitter.com/compressionbox4) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [BFI (@BFI) on X](https://twitter.com/BFI/status/1128619328734138375) — *Twitter / X by @BFI (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17496.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Fri, 18 Sep 2026 10:16:1...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17502.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates 'Dan Clark' via blink-dev Mon, 21 Se...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17600.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 3...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17528.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 23 Sep 20...
- [Compression Dictionary Transport: The Future of Web Performance -](https://systron.net/blog/compression-dictionary-transport-the-future-of-web-performance) *(systron.net · 2025-12-18T08:14:53)*
  > Compression Dictionary Transport: The Future of Web Performance - Skip to content Menu Compression Dictionary Transport: The Future of Web Performance In the ever-evolving landscape of web performance, every byte counts....
- [Improving Google Search with Compression Dictionaries \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/search-compression-dictionaries) *(developer.chrome.com · 2025-05-14T00:00:00)*
  > Improving Google Search with Compression Dictionaries | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17496.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4895435813683200`)*
  > [blink-dev] Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Fri, 18 Sep 2026 10:16:1...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17502.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4895435813683200`)*
  > [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates 'Dan Clark' via blink-dev Mon, 21 Se...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17600.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11620`)*
  > Re: [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Compression dictionary transport Updates Yoav Weiss (@Shopify) Wed, 3...

#### 📚 Platform Documentation & References

- [Compression Dictionary Transport - Glossary - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Compression_dictionary_transport) *(developer.mozilla.org)*
- [rel="compression-dictionary" HTML attribute value - HTML \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) *(developer.mozilla.org)*
- [compression-dictionary-transport/examples.md at main · WICG/compression-dictionary-transport](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) *(github.com)*
- [Compression Dictionary Transport](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=compression) (119 test path(s) matching `compression`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (34 found across 7 planned queries, 20 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Dev.to Community Blogs` (0 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (119 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5197863732772864-margin-trim"></a>
### [Margin-trim](https://chromestatus.com/feature/5197863732772864)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5197863732772864](https://chromestatus.com/feature/5197863732772864) · [chromestatuslite.com/feature/5197863732772864](https://chromestatuslite.com/feature/5197863732772864)
- **Specification:** [https://drafts.csswg.org/css-box-4/#margin-trim](https://drafts.csswg.org/css-box-4/#margin-trim)
- **Chromium Bug:** [https://issues.chromium.org/issues/40886857](https://issues.chromium.org/issues/40886857)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Positive` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/margin-trim) (Chrome: `—`, Firefox: `—`, Safari: `16.4`)

#### 📝 Overview

The \`margin-trim\` CSS property may be used to omit margins before or after the first or last child of a container. This is supported on regular block containers and multicol containers.  This is somewhat similar to the effect caused by the margin quirk that is applied to P, H1, H2... elements inside BODY and table cell elements (in quirks mode), but more powerful, generic, and expressive.  Note: A previous version of the spec also applied this for flex and grid containers, but this has been removed.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 211)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""margin-trim" site:chromestatus.com"`, `""margin-trim" CSS Chrome"`, `""margin-trim" CSS WebKit Safari Firefox"`
- **Analysis:** With Chrome 155 enabling \`margin-trim\` by default on regular block and multicol containers, the property achieves two-engine shipping status alongside Safari (which has supported it since version 16.4). Developers regard it as an essential quality-of-life feature that renders brittle \`:first-child\` and \`:last-child\` reset selectors obsolete in design systems. Engine consensus is firmly positive across all vendors, leaving Firefox as the only remaining major engine yet to ship default support.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt \`margin-trim\` today as progressive enhancement wrapped in \`@supports (margin-trim: block)\` while keeping classic margin resets for fallback safety. Be mindful to target only block and multicol containers, and avoid expecting trim behavior inside flexbox or CSS grid contexts.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Sounds good. Closing without a dashboard entry, as it seems like a minor feature...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Easier Layout with Margin-Trim" (8 points, 1 comments).

#### ⚡ What Happened This Week

- 💬 **7 new community discussions** found
- 📰 **4 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Easier Layout with Margin-Trim](https://news.ycombinator.com/item?id=43858089) — *Hacker News (8 pts, 1 comments)*
- 🐦 [@NEWS\_0 お、margin-trim 便利そう。端の余白いちいち消すの地味に面倒だったので助かる。](https://twitter.com/DinoLeadingNews/status/2106493164194505082) — *Twitter / X by @DinoLeadingNews (0 likes/RTs, 0 replies)*
- 🐦 [CSS の margin-trim でコンテナーの端の余白を取り除く https://t.co/jAowmt2TKQ](https://twitter.com/NEWS_0/status/2106489684431876109) — *Twitter / X by @NEWS_0 (0 likes/RTs, 1 replies)*
- 🐦 [📑 CSS の margin-trim でコンテナーの端の余白を取り除く  🅱 はてなブックマーク テクノロジー新着 より  https://t.co/uZrmhdAZh2](https://twitter.com/mohritaroh/status/2106413134839775239) — *Twitter / X by @mohritaroh (0 likes/RTs, 0 replies)*
- 🐦 [@azukiazusa9 Ah yes, the margin-trim property. Developers had wanted this feature for a long time. Don't worry, they'll ](https://twitter.com/Maduemezia90188/status/2106099582060974509) — *Twitter / X by @Maduemezia90188 (0 likes/RTs, 0 replies)*
- 🐦 [CSS の margin-trim でコンテナーの端の余白を取り除く https://t.co/3tvonXGuc3](https://twitter.com/evolab_tokyo/status/2106039600124768606) — *Twitter / X by @evolab_tokyo (0 likes/RTs, 0 replies)*
- 🐦 [CSS の margin-trim でコンテナーの端の余白を取り除く https://t.co/LtCxviX2wn](https://twitter.com/azukiazusa9/status/2106013520802533791) — *Twitter / X by @azukiazusa9 (73 likes/RTs, 1 replies)*
- 🐦 [Wes Bos on X: "CSS is getting margin-trim! Remove margins ...](https://twitter.com/wesbos/status/1668994174136328200) — *Twitter / X by @wesbos (0 likes/RTs, 0 replies)*

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
  > Easier layout with margin-trim | WebKit WebKit Easier layout with margin-trim May 1, 2025 by Jen Simmons If you write a lot of CSS, you are familiar with those moments when you aren’t quite sure how to accomplish what yo...
- [CSS Working Group Editor Drafts #CSS3 - Qiita](https://qiita.com/feo52/items/f59035237c9250c764d2) *(qiita.com · 2023-01-01T01:00:20)*
  > CSS Working Group Editor Drafts #CSS3 - Qiita View the Qiita 15th anniversary article search search Search Login Signup search 4 Go to list of users who liked 0 Share on X(Twitter) Share on Facebook Add to Hatena Bookmar...
- [New CSS Property margin-trim - Web Dev Simplified Blog](https://blog.webdevsimplified.com/2023-12/margin-trim) *(blog.webdevsimplified.com · 2023-12-11T00:00:00)*
  > New CSS Property margin-trim Web Dev Simplified Blog Preferences Theme Light Dark Reading Width Narrow Default Wide New CSS Property margin-trim December 11, 2023 CSS One of the most annoying things to deal with in CSS i...
- [CSS margin-trim and line height units \| 12 Days of Web](https://12daysofweb.dev/2024/css-margin-trim-line-height-units) *(12daysofweb.dev · 2024-12-24T00:00:00)*
  > For example, if the first element is a figure with a top margin, and the figure contains an image that also has a top margin, both of those margins will be trimmed by margin-trim, while only the figure margin will be tri...
- [Day 96: the margin-trim property - Manuel Matuzovic](https://www.matuzo.at/blog/2023/100daysof-day96) *(matuzo.at)*
  > The margin-trim property allows a container element to trim the margins of its children where they adjoin the container’s edges.
- [First Look: CSS margin-trim Property \| CraftQuest](https://craftquest.io/lessons/css-margin-trim-property) *(craftquest.io · 2023-07-05T11:05:31)*
  > We take a first look at the upcoming margin-trim property in CSS that makes it easier to handle the margin of items in a list. This new property is still…

#### 🔗 Inbound Citations & Reverse Links

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5197863732772864`)*
  > Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with a...
- [CSS Working Group Editor Drafts #CSS3 - Qiita](https://qiita.com/feo52/items/f59035237c9250c764d2) *(qiita.com · 2023-01-01T01:00:20)* *(Cites: `https://drafts.csswg.org/css-box-4/#margin-trim`)*
  > CSS Working Group Editor Drafts #CSS3 - Qiita View the Qiita 15th anniversary article search search Search Login Signup search 4 Go to list of users who liked 0 Share on X(Twitter) Share on Facebook Add to Hatena Bookmar...

#### 📚 Platform Documentation & References

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [margin-trim CSS property - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-trim) *(developer.mozilla.org)*
- [margin-trim CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-trim) *(developer.mozilla.org)*
- [margin-trim · Issue #429 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/429) *(github.com)*
- [content/files/en-us/web/css/margin-trim/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/css/margin-trim/index.md?plain=1) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=css-box) (152 test path(s) matching `css-box`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (38 found across 7 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 7 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 1 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (10 found, 10 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (152 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 4

---

<a id="5076349064708096-deprecate-and-remove-shared-storage-api"></a>
### [Deprecate and Remove: Shared Storage API](https://chromestatus.com/feature/5076349064708096)

- **Milestone:** Chrome 153 (Deprecated)
- **ChromeStatus:** [chromestatus.com/feature/5076349064708096](https://chromestatus.com/feature/5076349064708096) · [chromestatuslite.com/feature/5076349064708096](https://chromestatuslite.com/feature/5076349064708096)
- **Specification:** [https://wicg.github.io/shared-storage](https://wicg.github.io/shared-storage)
- **Chromium Bug:** [https://issues.chromium.org/issues/462465887](https://issues.chromium.org/issues/462465887)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The Shared Storage API is a privacy-preserving web API to enable storage that is not partitioned by first-party site.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Shared Storage API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).  \[0\]: https://privacysandbox.com/news/privacy-sandbox-next-steps/

> **Motivation:** Chrome has announced that the current approach to third-party cookies will be maintained. Given this, we expect adoption to decrease over time (currently at ~11% of page loads) as the main use cases for Shared Storage will remain possible in Chrome using third-party cookies. Further, other browser engines have not signaled interest in launching the...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 210)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Deprecate and Remove: Shared Storage API is currently Deprecated in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Deprecate and Remove Shared Storage API \[462465887\] - Chromium](https://issues.chromium.org/issues/462465887) *(issues.chromium.org · 2025-11-20T00:00:00)*
  > Chromium Sign in
- [Intent To Deprecate and Remove: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc) *(groups.google.com · 2025-11-07T00:00:00)*
  > Intent To Deprecate and Remove: Shared Storage API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent To Deprecate a...
- [PSA: Shared Storage API deprecation and removal](https://groups.google.com/a/chromium.org/g/shared-storage-api-announcements/c/QvXkrgoqi80) *(groups.google.com · 2025-12-04T00:00:00)*
  > PSA: Shared Storage API deprecation and removal Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; PSA: Shared Storage API ...
- [Deprecate and Remove: Shared Storage API](https://chromestatus.com/feature/5076349064708096) *(chromestatus.com · 2025-11-05T00:00:00)*
  > Chrome Platform Status
- [\[blink-dev\] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg15141.html) *(mail-archive.com)*
  > [blink-dev] Intent To Deprecate and Remove: Shared Storage API Skip to site navigation (Press enter) [blink-dev] Intent To Deprecate and Remove: Shared Storage API Cammie Smith Barnes Fri, 07 Nov 2025 11:32:42 -0800 Inte...
- [Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg17585.html) *(mail-archive.com)*
  > Following Chrome&#x27;s announcement &lt;https://privacysandbox.com/news/privacy-sandbox-next-steps/&gt;that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the...

#### 🔗 Inbound Citations & Reverse Links

- [Deprecate and Remove Shared Storage API \[462465887\] - Chromium](https://issues.chromium.org/issues/462465887) *(issues.chromium.org · 2025-11-20T00:00:00)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > Chromium Sign in
- [Intent To Deprecate and Remove: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > Intent To Deprecate and Remove: Shared Storage API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent To Deprecate a...
- [\[Google Privacy Sandbox\] Chrome 152 removed Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30659) *(github.com)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > [Google Privacy Sandbox] Chrome 152 stubbed out Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign...
- [Shared Storage · Issue #10 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/10) *(github.com · 2022-06-29T01:30:41)* *(Cites: `https://wicg.github.io/shared-storage`)*
  > Shared Storage · Issue #10 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload t...
- [Shared Storage API · Issue #747 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/747) *(github.com · 2022-06-06T18:20:44)* *(Cites: `https://wicg.github.io/shared-storage`)*
  > Shared Storage API · Issue #747 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload t...

#### 📚 Platform Documentation & References

- [\[Google Privacy Sandbox\] Chrome 152 removed Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30659) *(github.com)*
- [Shared Storage · Issue #10 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/10) *(github.com)*
- [Shared Storage API · Issue #747 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/747) *(github.com)*
- [Shared Storage API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Shared_Storage_API) *(developer.mozilla.org)*
- [Privacy sandbox - Privacy on the web - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Privacy_sandbox) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=deprecate) (27 test path(s) matching `deprecate`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (38 found across 7 planned queries, 19 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(HTTP 400)* · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (27 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5072259281715200-host-and-screenshot-restrictions-for-chromedebugger-api"></a>
### [Host and screenshot restrictions for chrome.debugger API](https://chromestatus.com/feature/5072259281715200)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5072259281715200](https://chromestatus.com/feature/5072259281715200) · [chromestatuslite.com/feature/5072259281715200](https://chromestatuslite.com/feature/5072259281715200)
- **Chromium Bug:** [https://g-issues.chromium.org/issues/533240995](https://g-issues.chromium.org/issues/533240995)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The \[\`chrome.debugger\` extension API\](https://developer.chrome.com/docs/extensions/reference/api/debugger) lets you send \[Chrome DevTools Prototcol\](https://chromedevtools.github.io/devtools-protocol/) commands to a specified \`target\`, for example, a tab, an iframe, or a service worker. When connecting (attaching) to a target, the API can now enforce permissions on managed browsers by validating enterprise host and screenshot policies.    On enterprise devices, some policies can restrict extensions from attaching the debugger using an all-or-nothing model at attach time (browser.debugger.attach()):  - For hosts, the \[ExtensionSettings\](https://chromeenterprise.google/policies/#ExtensionSettings) enterprise policy can be configured to block hosts for an extension, returning the error \`Host access is restricted by policy\`. - For screenshots, the enterprise policy \[DisableScreenshots\](https://chromeenterprise.google/policies/#DisableScreenshots) enterprise policy disables screenshot capture or Data Loss Prevention (DLP) rules apply, returning the error \`Screenshot capture is restricted by policy\`.  Developers can handle attach rejections gracefully or use higher-level APIs like \[\`chrome.scripting\`\](https://developer.chrome.com/docs/extensions/reference/api/scripting) and \[\`chrome.declarativeNetRequest\`\](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest) that support granular origin permissions in restricted enterprise environments.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 210)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Host and screenshot restrictions for chrome.debugger API is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome 155 ships Oct 6 ⚠️  If your extension uses chrome.debugger on enterprise browsers, .attach() will now fail with p" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **14 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome 155 ships Oct 6 ⚠️  If your extension uses chrome.debugger on enterprise browsers, .attach() will now fail with p](https://twitter.com/cwspycom/status/2106581110222209229) — *Twitter / X by @cwspycom (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/en_us/resources/release-notes) *(chromeenterprise.google · 2026-09-09T00:00:00)*
  > For screenshots, <strong>the enterprise policy DisableScreenshots enterprise policy disables screenshot capture or Data Loss Prevention (DLP) rules apply, returning the error Screenshot capture is restricted by policy</s...
- [Google Chrome & PWAs － firt.dev](https://firt.dev/notes/chrome) *(firt.dev)*
  > PWAs don&#x27;t need a Service Worker for WebAPK installation. More details 📺 Origin Private File System (OPFS) for Android 🧮 MathML Core 💳 Secure Payment Confirmation ... 🫙 CSS Container Queries 🪟 Window Controls O...
- [What's New In DevTools (Chrome 89) \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-devtools-89) *(developer.chrome.com · 2021-01-19T00:00:00)*
  > Consider using the Chrome Canary, Dev, or Beta as your default development browser. These preview channels give you access to the latest DevTools features, let you test cutting-edge web platform APIs, and help you find i...
- [Tools and debug \| web.dev](https://web.dev/learn/pwa/tools-and-debug) *(web.dev)*
  > In that case, you can bridge a port on localhost on the Android device to any origin and port from your host computer, including your development computer&#x27;s localhost. Check this guide for more information. Chromium...
- [google chrome devtools - How can I remote debug a PWA that has been "added to homescreen" on Android? - Stack Overflow](https://stackoverflow.com/questions/59771348/how-can-i-remote-debug-a-pwa-that-has-been-added-to-homescreen-on-android) *(stackoverflow.com)*
  > Turns out that <strong>PWAs that were open before you connected remote debugger will not show up</strong>. Simply close the app and start it after connecting the debugger. ... The &quot;Remote Devices&quot; option is not...
- [Stricter enterprise policy enforcement for chrome.debugger in Chrome 155 \| Chrome for Developers](https://developer.chrome.com/blog/debugger-enterprise-policy-restrictions?hl=en) *(developer.chrome.com · 2026-09-07T21:16:38)*
  > Enterprise administrators managing extension policies should note that extensions requiring the debugger permission cannot operate with partial host restrictions (runtime_blocked_hosts). If an extension needs chrome.debu...

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=host) (414 test path(s) matching `host`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (49 found across 11 planned queries, 21 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 7 tweet(s))* · `Dev.to Community Blogs` (11 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (414 items)
- **Content Inspected:** Spec: ○ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5143933628841984-ask-before-http-warning-on-by-default"></a>
### [Ask-before-HTTP warning on by default](https://chromestatus.com/feature/5143933628841984)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5143933628841984](https://chromestatus.com/feature/5143933628841984) · [chromestatuslite.com/feature/5143933628841984](https://chromestatuslite.com/feature/5143933628841984)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Chrome now prompts users by default when they access an insecure (HTTP) connection. IT admins can control this default behavior via \[HttpsOnlyMode\](https://chromeenterprise.google/policies/#HttpsOnlyMode) policy.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 200)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"Chrome HTTPS-First mode default HTTP warning"`, `""HTTPS-Only" Firefox default warning"`, `"Chrome 154 Ask before HTTP warning"`, `"Chrome Adapting your website for Chrome Ask before HTTP warning"`, `"Safari "HTTPS-Only" "HTTPS-First" default"`
- **Analysis:** Chrome 154 turns on 'Ask-before-HTTP' ('Always Use Secure Connections') by default for all public websites, displaying an interstitial permission prompt whenever an unencrypted HTTP fallback is required. While not governed by a formal W3C specification, this browser-level security behavior culminates years of HTTPS-First transitioning and targets the remaining 1–3% of unencrypted public web traffic. Browser vendors across the ecosystem broadly agree on phasing out plaintext HTTP, treating unencrypted connections as an explicit user risk.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams should immediately audit public-facing domains, legacy subdomains, marketing links, and QR destinations to ensure valid TLS certificates and automated renewals (e.g., via Let's Encrypt) are functioning. Additionally, configure HSTS headers, deploy DNS HTTPS resource records (HTTPS RR), and ensure redirect chains do not pass through certificate-less HTTP hostnames.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [nicnames.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHmk9gK6Vmu_hTVa-DmadRZDBEDej7-meyNVDBW1RafYhyYnFlbPyuQ1te78YZjGyg9sHPGdQJYEPpEXbPGj89misjgtzmEBNoCZLSi-7uweP0Keh2Z4Lgub92g2WyrSyjr6qrof8TlfhhxPwN62ei-pJMQNnareufhGJAZkg==) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 HTTP Prompts: Website HTTPS Checklist | NicNames.com Products Domains Domain Search Find your ideal domain fast AI Domain Search Discover personalized domain names with AI Premium Domain Search Find exclusive ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGw1HTTEEivItBWY6af3ZlXSPHVnY1gc458rwxe1CnIITJeqA_BpFzDc8lPikZ35WelCVTSooeZIYVjhH0tJ-JZuOmySW6brN3AAEs2gEplJEazNyPu643SEe9qi2lax8VllVTk) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربي...
- [googlesource.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGwIcGqZ5Ad3KBfCBC04CwxFn5ucZJBYtAQNRjd45QfBAl3TEnwXNo-Vnu9hysJ3udseBlurr7rl5CIhnwWG8i1OGOgR8G6GmAlmjnC_gw1-w6vHz6scPEB3hF3Hk3Rk_zSGi3HxZyYJU751ue7KDY-de6oKVAYUqcGGdBmix4YznxeUSULwax8yxLbtSo5JTrQmGM-zwejQ9KwMBRB-XPtRWFs0UsMnPdkMQ==) *(vertexaisearch.cloud.google.com)*
  > Chromium Docs - Adapting your website for Chrome’s “Ask-before-HTTP” warning Chromium Docs &#9681; Theme Adapting your website for Chrome’s “Ask-before-HTTP” warning Chrome will start asking for users’ permission before ...
- [semonto.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFY9yxWBwlr7Km71fpsviaHrH2rky9Lqmuma-bB9JSsd1G_Bei3Qw0giZK2w0icb39S_46ehT2iHUbdE38Bq1pSms68dCXYmpOIahw4uRrgc4FcmKW-ReT9BHr91ilqoGa8rtqJjfDR68DR9EZJ) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 will ask before HTTP: audit your forgotten URLs now | Semonto Skip to main content Tips and Tricks Chrome 154 will ask before HTTP: audit your forgotten URLs now In October 2026, Chrome will enable Always Use ...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGIXCPRbXqIcXyWJqkpvRMajM1gPKSg2CYKentTs-gNUjJ7uGEFXSkw6romC4HahErprZQO9xD7KLvZXx0cWlXFC0Rtbb-AptO3w46Dfzt21VXeOKENRlK9INscRBrrqeinVnKW5y0=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [googlesource.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQExomMtjf4Tkx_5oB79CMZrySIFKJHwPVLQ110BHawJlZwA4RBvc-puYfbgLgwImJyP_xXvZpmYPoZtuWM0BUbSemaarlAdQSk85K0M3Fi_yT0uShJQjrcfq_yMA2Cpfh50Qsqx5SvGuIoD1ycsNgTUk3JztHa7-t_IJ1obglKFTyXAyiW9D-vxkSNSfSY8YNVftiNh3PcgHXdTy1Lwq8kTWbxcB4JYwY72_YwGXwI=) *(vertexaisearch.cloud.google.com)*
  > docs/security/ask-before-http/ask-before-http-adoption-guide.md - chromium/src - Git at Google Sign in &#9681; Theme chromium / chromium / src / main / . / docs / security / ask-before-http / ask-before-http-adoption-gui...

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=before) (733 test path(s) matching `before`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (25 found across 6 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 10 verified) · `Twitter / X API v2` *(found 5 tweet(s))* · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (733 items)
- **Content Inspected:** Spec: ○ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5091582546149376-webrtc-diagnostic-logging-api"></a>
### [WebRTC Diagnostic Logging API](https://chromestatus.com/feature/5091582546149376)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5091582546149376](https://chromestatus.com/feature/5091582546149376) · [chromestatuslite.com/feature/5091582546149376](https://chromestatuslite.com/feature/5091582546149376)
- **Specification:** [https://w3c.github.io/webrtc-extensions/#diagnostic-logging](https://w3c.github.io/webrtc-extensions/#diagnostic-logging)
- **Chromium Bug:** [https://crbug.com/481412281](https://crbug.com/481412281)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The WebRTC Web Diagnostic Logging API allows authorized web applications to trigger the collection of WebRTC diagnostic data so that it can be used for local debugging. It also allows an application to share the WebRTC diagnostic data with the user agent vendor, subject to user authorization, with the purpose of providing information that can help fix bugs in or improve the user agent.  Diagnostic logs are enabled with the enterprise policy  \[WebRtcDiagnosticLogCollectionAllowedForOrigins\](https://chromeenterprise.google/policies/#WebRtcDiagnosticLogCollectionAllowedForOrigins).

> **Motivation:** WebRTC applications often encounter complex connectivity or media quality issues that are difficult to reproduce in local environments. To debug these issues in production, sometimes it is helpful for developers to have access to internal state and performance metrics. This also applies to issues in the user agent.  The WebRTC Web Diagnostic Loggin...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 200)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"WebRTC Diagnostic Logging API webkit standards positions"`, `"WebRTC Diagnostic Logging API mozilla standards positions"`, `"WebRTC Diagnostic Logging API blink dev Intent to Ship"`, `"WebRtcDiagnosticLogCollectionAllowedForOrigins"`
- **Analysis:** The WebRTC Diagnostic Logging API has reached shipping status in Chrome 156 following an extended origin trial, providing programmatic triggers for user-agent-level WebRTC diagnostic dumps. The feature primarily addresses enterprise-managed environments and complex teleconference debugging via administrative policy gating (WebRtcDiagnosticLogCollectionAllowedForOrigins). However, cross-engine interoperability is non-existent, with the spec incubated within WICG and facing notable pushback regarding web API fit.

**Key Recommendations & Takeaways:**
- Actionable Advice: Do not depend on this API for general production monitoring; continue relying on standard getStats() pipelines for cross-browser analytics. If debugging complex WebRTC issues within managed corporate fleets, implement feature detection on RTCPeerConnection while deploying the WebRtcDiagnosticLogCollectionAllowedForOrigins policy.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "I think those are pretty weak use cases for adding a web API.  &gt; \* An organization has a custom WebRTC deployment and they want to analyze logs at sca..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [WebRTC Diagnostic Logging](https://github.com/WebKit/standards-positions/issues/699) [open] 
- **Mozilla:** [WebRTC Diagnostic Logging](https://github.com/mozilla/standards-positions/issues/1436) [open] `venue: W3C CG`, `concerns: privacy`, `concerns: API design`, `topic: API`
  > *Latest discussion from @zcorpan: "I think those are pretty weak use cases for adding a web API.  > * An organization has a custom WebRTC deployment and they want to analyze logs at sca..."*

#### 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17638.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: WebRTC Diagnostic Logging API 'Ashley Newson' via blink-dev Thu, 01 Oct 2026 08:14:25 -0...
- [\[blink-dev\] Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16832.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: WebRTC Diagnostic Logging API Chromestatus Tue, 23 Jun 2026 08:58:45 -0700 Contact e...
- [\[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17555.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebRTC Diagnostic Logging API Chromestatus Fri, 25 Sep 2026 08:29:54 -0700 Contact emails [email...
- [Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17563.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: WebRTC Diagnostic Logging API Philip Jägenstedt Mon, 28 Sep 2026 07:02:18 -0700 LGTM1 On...
- [\[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16865.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: WebRTC Diagnostic Logging API 'Guido Urdaneta' via blink-dev Wed, 24 Jun 202...
- [Re: \[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16877.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Experiment: WebRTC Diagnostic Logging API Chris Harrelson Thu, 25 Jun 2026 13:13...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17638.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5091582546149376`)*
  > Re: [blink-dev] Intent to Ship: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: WebRTC Diagnostic Logging API 'Ashley Newson' via blink-dev Thu, 01 Oct 2026 08:14:25 -0...
- [\[blink-dev\] Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16832.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webrtc-diagnostic-logging/blob/main/explainer.md`)*
  > [blink-dev] Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: WebRTC Diagnostic Logging API Chromestatus Tue, 23 Jun 2026 08:58:45 -0700 Contact e...
- [\[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17555.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webrtc-diagnostic-logging/blob/main/explainer.md`)*
  > [blink-dev] Intent to Ship: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebRTC Diagnostic Logging API Chromestatus Fri, 25 Sep 2026 08:29:54 -0700 Contact emails [email...
- [Re: \[blink-dev\] Intent to Ship: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg17563.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webrtc-diagnostic-logging/blob/main/explainer.md`)*
  > Re: [blink-dev] Intent to Ship: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: WebRTC Diagnostic Logging API Philip Jägenstedt Mon, 28 Sep 2026 07:02:18 -0700 LGTM1 On...
- [\[blink-dev\] Re: Intent to Experiment: WebRTC Diagnostic Logging API](http://www.mail-archive.com/blink-dev@chromium.org/msg16865.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webrtc-diagnostic-logging/blob/main/explainer.md`)*
  > [blink-dev] Re: Intent to Experiment: WebRTC Diagnostic Logging API Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: WebRTC Diagnostic Logging API 'Guido Urdaneta' via blink-dev Wed, 24 Jun 202...

#### 📚 Platform Documentation & References

- [WebRTC Diagnostic Logging · Issue #1436 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1436) *(github.com)*
- [GitHub - WICG/webrtc-diagnostic-logging · GitHub](https://github.com/WICG/webrtc-diagnostic-logging) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webrtc-extensions) (10 test path(s) matching `webrtc-extensions`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 12 planned queries, 17 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (10 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

---

<a id="5194104408506368-webtransport-headers-and-responseheaders"></a>
### [WebTransport headers and responseHeaders](https://chromestatus.com/feature/5194104408506368)

- **Milestone:** Chrome 153 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5194104408506368](https://chromestatus.com/feature/5194104408506368) · [chromestatuslite.com/feature/5194104408506368](https://chromestatuslite.com/feature/5194104408506368)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers)
- **Chromium Bug:** [https://issues.chromium.org/issues/551850821](https://issues.chromium.org/issues/551850821)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `In development`

#### 📝 Overview

Adds support for passing custom HTTP request headers via WebTransportOptions and inspecting server response headers through the WebTransport instance. This allows web applications to supply metadata, authentication tokens, and custom parameters during the initial CONNECT handshake and access server-provided headers once the connection is established.

> **Motivation:** The WebTransport constructor requires support for custom HTTP request headers to address several technical limitations in authentication, routing, and capability negotiation.  Without custom headers, developers must pass authentication tokens in URL query strings, which exposes credentials in server logs and telemetry, or authenticate over an initi...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 200)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebTransport" "headers" "responseHeaders" chromestatus OR github"`, `"w3c webtransport issue 263 headers"`
- **Analysis:** WebTransport headers and responseHeaders resolve a critical architectural gap inherited from WebSockets by enabling custom HTTP headers in WebTransportOptions during the CONNECT handshake and exposing server responseHeaders on the transport instance. The capability was formally integrated into the W3C WebTransport specification with broad working group backing and has moved from developer trial flags into beta testing in Chromium. While interoperability risk is low due to shared standards consensus, native implementation outside Chromium is still pending in Gecko and WebKit.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should validate early implementations in Chromium developer/beta channels and begin designing edge gateway routing around CONNECT headers. In production, treat the API as progressive enhancement and retain fallback authentication (such as ephemeral connection tickets or initial stream verification) until multi-engine support lands.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **10 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHaJG-kuOBwzuxQFxOhOIPuskMO8oLG-eKoJI4lvIoSx_Knyj1qQYG6hOIyJH0aDwg6dmBvnK4sxlJAHw0gPnfPSSsp_TpEnmr2COGBzlxkk_JAZcQL-bnrp28f5fnJDKK2TBoqTSQ=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE1ha1alFslfviflZWCrIiDxuwVUEgsTDJ6VAYr2TdK1KLZhSmx-jIfcs1lK8YPogm63Ay3okdgRfXtSkUPAFwdMvBcVAtK7xwzF8yaYGOg3dhSQUQT8VI9J4FrGpabTiYeCmrp) *(vertexaisearch.cloud.google.com)*
  > Do we want to allow web developers to add headers of the CONNECT request? · Issue #263 · w3c/webtransport · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGV5WtFVRIAOP0NwEQZmYx_iKE7jxYL5a359LjJ92ovALk-Ol3SglZecPg74oCRuEQyRnqQf-OkQ7gZ8v7GgM3xgzggtAp3Eqil_nU23gu8YuxJBrAuc_PNvKNbFGf5tD7gnnivC8XZQdB4ERcVS_D855UvFXm1) *(vertexaisearch.cloud.google.com)*
  > WebTransport API - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs WebTransport API Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) 日本語 WebTranspo...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGqlKr2tm0dZHKcsRtPqRX0xwRLueVYRqEvoB_orcFWUX_0NODr39Sqgw_IgCegyK83MAFqhX-pmHwjQeMS5TOX6UqhmL0e8UbqK35CbdPv80_H7fnvwB9N) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  **"WebTransport headers and responseHeaders"** addresses one of the most prominent ergonomic and architectural gaps carried over from WebSockets to the WebTransport API.   * **`headers` in `W...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGlI4-Zmu0qhTyWjmGTgz4SBkOYgKlYWrr9dE0riB_b1dQLsxA5i6r4JRRsFTJTKHXykCP-hNyouMtM1y5YC1EoKP9J5ofG7g0I5OuQoe03qpjWlr_xAO9J6RxLfCbSizemzD933EQ=) *(vertexaisearch.cloud.google.com)*
  > Chrome 155 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة ف...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEZx8oyY9YjrAqqdYthN6RAE7_7T6DaSCzDJo6rtoOwvG-27PhUczoIymQpwMTlTJu_EG6APdUgWDwjTvMMqzra74Ehn2qL7NZQID6LaCwYT5RSdrCvFfWROrFrfYlsYb8=) *(vertexaisearch.cloud.google.com)*
  > Chrome 156 Release Notes - Chrome Platform Status Chrome 156 Release Notes Preview Scheduled Stable Release October 20, 2026 (Currently on Beta channel) Network / Connectivity Avoid caching module failures # Link copied!...

#### 🔗 Inbound Citations & Reverse Links

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5194104408506368`)*
  > <strong>WebTransport responseHeaders</strong>, https://chromestatus.com/feature/5194104408506368 · Window controls, https://chromestatus.com/feature/5201832664629248 · See also https://developer.chrome.com/blog/chrome-15...
- [WebTransport · Issue #18 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/18) *(github.com · 2022-06-29T14:14:37)* *(Cites: `https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers`)*
  > from: GoogleProposed, edited, or co-edited by Google.Proposed, edited, or co-edited by Google.from: MicrosoftProposed, edited, or co-edited by Microsoft.Proposed, edited, or co-edited by Microsoft.position: supporttopic:...
- [webtransport/index.bs at main · w3c/webtransport](https://github.com/w3c/webtransport/blob/main/index.bs) *(github.com)* *(Cites: `https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers`)*
  > ED: https://w3c.github.io/webtransport/ TR: https://<strong>www.w3.org/TR/webtransport</strong>/ Editor: Nidhi Jaju, w3cid 136840, Google · Editor: Victor Vasiliev, w3cid 113328, Google · Editor: Jan-Ivar Bruaroey, w3cid...
- [WebTransport and WHIP-over-WebTransport - Fora Soft](https://www.forasoft.com/learn/video-streaming/articles-streaming/webtransport-whip) *(forasoft.com · 2026-06-15T00:00:00)* *(Cites: `https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers`)*
  > Editors: N. Jaju, V. Vasiliev, J.-I. Bruaroey. https://www.w3.org/TR/webtransport/ — <strong>defines the WebTransport JavaScript interface, the WebTransportOptions dictionary, the serverCertificateHashes security model, ...
- [GitHub - adriancable/webtransport-go: Lightweight but fully-capable WebTransport server for Go · GitHub](https://github.com/adriancable/webtransport-go) *(github.com)* *(Cites: `https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers`)*
  > WebTransport (https://www.w3.org/TR/webtransport/) is <strong>a 21st century replacement for WebSockets</strong>. It&#x27;s currently supported by Chrome, with support in other browsers coming shortly.

#### 📚 Platform Documentation & References

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [WebTransport · Issue #18 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/18) *(github.com)*
- [webtransport/index.bs at main · w3c/webtransport](https://github.com/w3c/webtransport/blob/main/index.bs) *(github.com)*
- [GitHub - adriancable/webtransport-go: Lightweight but fully-capable WebTransport server for Go · GitHub](https://github.com/adriancable/webtransport-go) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webtransport) (119 test path(s) matching `webtransport`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (41 found across 7 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 8 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (119 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5113656292540416-immersive-audio-model-and-formats-iamf-decoding-support"></a>
### [Immersive Audio Model and Formats (IAMF) decoding support](https://chromestatus.com/feature/5113656292540416)

- **Milestone:** Chrome 152 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5113656292540416](https://chromestatus.com/feature/5113656292540416) · [chromestatuslite.com/feature/5113656292540416](https://chromestatuslite.com/feature/5113656292540416)
- **Specification:** [https://aomediacodec.github.io/iamf/latest-approved.html](https://aomediacodec.github.io/iamf/latest-approved.html)
- **Chromium Bug:** [https://crbug.com/535279329](https://crbug.com/535279329)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Adds support for decoding and playing back the Immersive Audio Model and Formats (IAMF) container within HTML media elements via Media Source Extensions (MSE). IAMF is an open, royalty-free spatial audio format that supports channel-based, scene-based, and object-based audio presentations. Supporting this standard allows web developers to deliver consistent, immersive 3D audio experiences across different devices without relying on proprietary formats or managing complex discrete audio channel routing in JavaScript.

> **Motivation:** Currently, delivering high-quality, immersive 3D audio on the web relies heavily on proprietary formats (like Dolby Atmos) or complex custom JavaScript audio rendering. IAMF provides a standardized, royalty-free container that allows web developers to deliver rich, consistent spatial audio experiences across devices for use cases like gaming, AR/VR...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 196)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""IAMF" audio decoding chrome web standards"`, `""Immersive Audio Model and Formats" decoding chromestatus"`, `""IAMF" "standards-positions" site:github.com/WebKit/standards-positions"`
- **Analysis:** Immersive Audio Model and Formats (IAMF) decoding brings an open, royalty-free spatial audio standard—developed by the Alliance for Open Media (AOMedia)—directly to HTML media elements via Media Source Extensions (MSE). The feature entered developer trials in Chrome 152 and shipped enabled in Chrome 153, marking Chromium as the pioneer engine implementing the specification. While creators in gaming, streaming, and WebXR welcome a license-free alternative to proprietary formats like Dolby Atmos, the feature remains single-engine and is not yet part of Web Platform Baseline.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat IAMF decoding strictly as a progressive enhancement by checking \`MediaSource.isTypeSupported('audio/mp4; codecs="iamf"')\` or \`HTMLMediaElement.canPlayType()\` before delivering IAMF streams. Teams should maintain multi-channel AAC, Opus, or stereo fallbacks for non-Chromium browsers until cross-vendor support matures.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "@MacRumors @Super\_Powers\_AI Hey Super, build a tool to plan Apple TV display and audio setups.  This interactive tool al" (1 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **2 new community discussions** found
- 📰 **3 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [@MacRumors @Super\_Powers\_AI Hey Super, build a tool to plan Apple TV display and audio setups.  This interactive tool al](https://twitter.com/RohanArun/status/2104993882362839267) — *Twitter / X by @RohanArun (1 likes/RTs, 0 replies)*
- 🐦 [Chrome 153 beta \| Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/article/2093424350036660456) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [Tesla on X: "Tesla Immersive, our multichannel audio upmixer, enables stereo content to be remixed in real time, optimizing the listening experience for our vehicles specifically" / X](https://twitter.com/Tesla/status/1577378059837001728?lang=en) — *Twitter / X by @Tesla (0 likes/RTs, 0 replies)*
- 🐦 [Immersive Ambient Music.jp (@ImmersiveJapan) on X](https://twitter.com/ImmersiveJapan) — *Twitter / X (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [IAMF Audio Decoding Support](https://github.com/WebKit/standards-positions/issues/700) [open] 
- **Mozilla:** [IAMF Audio Decoding support](https://github.com/mozilla/standards-positions/issues/1437) [open] `topic: API`

#### 📰 Ecosystem Blogs & Articles

- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHEmaHzuWmr7yYAjxde74gbEQaBHmLY5H0JJrGz9s4W5F_UbWTnY-WE9GuBSMJnF8Cakv7T8WghNqqoE2PQw9qc-tGrI4-assF7YPG9v1StXiexLfUJxuD7Dng=) *(vertexaisearch.cloud.google.com)*
  > Immersive Audio Model and Formats Immersive Audio Model and Formats AOM Working Group Draft, 21 April 2025 This version: https://aomediacodec.github.io/iamf Previously approved version: https://aomediacodec.github.io/iam...
- [googlesource.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHHX7nv3h5ih7PsJl1yfn4c-MgOew0pcRwRxRLKaeYDhKS1794PEWs0ZIYzAjCG9NNYBXzm8HWMpSBwgsvQvGPjZgU3_leVF51Y9f7srrjvzKho0lPdq9rpeecOwdnxKo-EDxWAwySOF7vPDtRDdm0yWERA2A==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Immersive Audio Model and Formats (IAMF)** decoding support brings open, royalty-free spatial audio into HTML media elements (`<audio>` and `<video>`) via **Media Source Extensions (MSE)**. ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG7ezO0Vwe1oq6NJKz7jBpmIh4BcxWHgGBgsCQp9Qt0XrkwfPlXDlw2cxY-elGCWfOwjk5zk6lgXtIomSn3Qz7kZkMUxxpXYKyKnxk8gi_dHQpzK6IDKvH-m1X6ghGHAuRmCU_mfquICbZCphemhA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Immersive Audio Model and Formats (IAMF)** decoding support brings open, royalty-free spatial audio into HTML media elements (`<audio>` and `<video>`) via **Media Source Extensions (MSE)**. ...
- [youtube.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHKyKTuff8Ev0XathDF9mAWNPYUn-JC3No645ULNUZIZ5oRRVmCsJAcRNC7GuVCW15CDEuq7_5q2FelL_U_lQxikoz3tsRRd4w8u26AIdUmOBBf85JeLtLVGWyyOZANdIoh) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Immersive Audio Model and Formats (IAMF)** decoding support brings open, royalty-free spatial audio into HTML media elements (`<audio>` and `<video>`) via **Media Source Extensions (MSE)**. ...
- [Launch iamf\_tools Decoding Support in M153 \[535279329\] - Chromium](https://issues.chromium.org/issues/535279329) *(issues.chromium.org)*
  > Chrome Status entry here: https://<strong>chromestatus.com/feature/5113656292540416</strong> · Missing web feature, made https://github.com/web-platform-dx/web-features/issues/4179 to address this
- [\[blink-dev\] Intent to Implement and ship: Immersive Audio Model and Formats (IAMF) decoding support](http://www.mail-archive.com/blink-dev@chromium.org/msg17129.html) *(mail-archive.com)*
  > Explainer https://github.com/S...rcekey=0-rS2fUcQM7tcKNDoQmk7Tmg Summary <strong>Adds support for decoding and playing back the Immersive Audio Model and Formats (IAMF) container within HTML media elements via Media Sour...

#### 🔗 Inbound Citations & Reverse Links

- [Launch iamf\_tools Decoding Support in M153 \[535279329\] - Chromium](https://issues.chromium.org/issues/535279329) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5113656292540416`)*
  > Chrome Status entry here: https://<strong>chromestatus.com/feature/5113656292540416</strong> · Missing web feature, made https://github.com/web-platform-dx/web-features/issues/4179 to address this
- [Immersive Audio Model and Formats (IAMF) decoding support · Issue #1337 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1337) *(github.com · 2026-08-14T17:31:53)* *(Cites: `https://chromestatus.com/feature/5113656292540416`)*
  > Chromestatus: https://<strong>chromestatus.com/feature/5113656292540416</strong> Web Feature ID: N/A Chrome Releases: Chrome 152
- [New IAMF Support feature · Issue #4179 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4179) *(github.com · 2026-07-14T17:22:16)* *(Cites: `https://chromestatus.com/feature/5113656292540416`)*
  > https://<strong>chromestatus.com/feature/5113656292540416</strong> · Reactions are currently unavailable · Sign up for free to join this conversation on GitHub. Already have an account? Sign in to comment · No one assign...
- [\[blink-dev\] Intent to Implement and ship: Immersive Audio Model and Formats (IAMF) decoding support](http://www.mail-archive.com/blink-dev@chromium.org/msg17129.html) *(mail-archive.com)* *(Cites: `https://github.com/SyedAbuTalib/iamf-explainer/blob/main/explainer.md`)*
  > Explainer https://github.com/S...rcekey=0-rS2fUcQM7tcKNDoQmk7Tmg Summary <strong>Adds support for decoding and playing back the Immersive Audio Model and Formats (IAMF) container within HTML media elements via Media Sour...
- [\[blink-dev\] Re: Intent to Implement and ship: Immersive Audio Model and Formats (IAMF) decoding support](http://www.mail-archive.com/blink-dev@chromium.org/msg17134.html) *(mail-archive.com)* *(Cites: `https://github.com/SyedAbuTalib/iamf-explainer/blob/main/explainer.md`)*
  > Best, Alex On Wednesday, August ...S2fUcQM7tcKNDoQmk7Tmg &gt; &gt; Summary &gt; &gt; <strong>Adds support for decoding and playing back the Immersive Audio Model and &gt; Formats (IAMF) container within HTML media elemen...

#### 📚 Platform Documentation & References

- [Immersive Audio Model and Formats (IAMF) decoding support · Issue #1337 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1337) *(github.com)*
- [New IAMF Support feature · Issue #4179 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4179) *(github.com)*
- [iamf/index.bs at main · AOMediaCodec/iamf](https://github.com/AOMediaCodec/iamf/blob/main/index.bs) *(github.com)*
- [feat(guides/js): add spatial audio streaming guide with IAMF and MSE support (fixes #1337) by Nithin0620 · Pull Request #1382 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/pull/1382) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Immersive Audio Model and Formats (IAMF) decoding support Demo](https://crsrc.org/c/media/test/data/iamf_alternating_sine_waves_stereo.mp4)
- [Immersive Audio Model and Formats (IAMF) decoding support Demo](https://crsrc.org/c/media/test/data/iamf_alternating_sine_waves_714.mp4)
- [Immersive Audio Model and Formats (IAMF) decoding support Demo](https://aomediacodec.github.io/iamf-tools/web_demo)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=immersive) (12 test path(s) matching `immersive`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (42 found across 12 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 4 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Dev.to Community Blogs` (5 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (12 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5153829504024576-capability-elements-camera-and-microphone"></a>
### [Capability elements: &lt;camera&gt; and &lt;microphone&gt;](https://chromestatus.com/feature/5153829504024576)

- **Milestone:** Chrome 153 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5153829504024576](https://chromestatus.com/feature/5153829504024576) · [chromestatuslite.com/feature/5153829504024576](https://chromestatuslite.com/feature/5153829504024576)
- **Specification:** [https://w3c.github.io/mediacapture-extensions/#the-camera-html-element](https://w3c.github.io/mediacapture-extensions/#the-camera-html-element)
- **Chromium Bug:** [https://b.corp.google.com/issues/531672795](https://b.corp.google.com/issues/531672795)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The &lt;camera&gt; and &lt;microphone&gt; capability elements are declarative, user-activated HTML controls that share the same underlying mechanism as the &lt;usermedia&gt; MVP element, with one key distinction: they are designed to request a single capability. The &lt;camera&gt; element specifically requests video capture, while the &lt;microphone&gt; element specifically requests audio capture. Like the &lt;usermedia&gt; MVP, they embed a browser-controlled, strictly styled UI into the page, ensuring a strong, intentional user signal (a click) before a permission prompt is triggered or a stream is started.  The &lt;camera&gt; and &lt;microphone&gt; elements provide a dedicated, semantic HTML control for these single-capability use cases. They maintain the identical security model, strict styling constraints, and built-in permission recovery path as the &lt;usermedia&gt; MVP, but offer a more tailored and ergonomic API for developers who do not need mixed media access.

> **Motivation:** In M151, we shipped the &lt;usermedia&gt; element (MVP) to solve the problem of out-of-context, JavaScript-triggered permission prompts. By requiring a direct, in-page user click on a browser-controlled element, we ensure a strong signal of user intent before requesting media access.  Based on feedback and the WICG specification, we are expanding this MV...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 165)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"site:github.com/w3ctag/design-reviews "Capability Elements" camera microphone"`, `""Capability Element" "camera" "microphone" pe pc"`, `""Capability elements" "camera" "microphone" blink dev"`, `"mozilla standards positions "Capability Element" camera microphone"`, `""mediacapture-extensions" "the-camera-html-element""`, `"site:github.com/mozilla/standards-positions "camera" "microphone""`
- **Analysis:** Chrome 153 enabled the declarative &lt;camera&gt; and &lt;microphone&gt; capability elements by default, refining the earlier &lt;usermedia&gt; MVP and Page-Embedded Permission Control (PEPC) model into single-purpose capture primitives. These elements enforce browser-mediated UI and strict click-verification to trigger device access and handle permission recovery, but they remain Chromium-only with no multi-engine baseline. While the capability-scoped design directly addresses standards group concerns regarding generic permission prompts, cross-browser parity is still pending.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt &lt;camera&gt; and &lt;microphone&gt; strictly via progressive enhancement by feature-detecting 'HTMLCameraElement' in window. Maintain existing navigator.mediaDevices.getUserMedia() request flows with custom trigger UI as the mandatory fallback for Firefox and Safari.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Chrome 153 ships camera and microphone HTML elements" (3 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Chrome 153 ships camera and microphone HTML elements](https://news.ycombinator.com/item?id=49618853) — *Hacker News (3 pts, 0 comments)*

#### 📦 Polyfills & NPM Ecosystem

- [@ionic/pwa-elements](https://www.npmjs.com/package/@ionic/pwa-elements) `v3.4.0` — Stencil Component Starter

#### 📰 Ecosystem Blogs & Articles

- [Chrome 153 ships camera and microphone HTML elements](https://webiterate.dev/capability-elements-camera-126) *(webiterate.dev · 2026-09-08T23:55:35Z)*
- [\[blink-dev\] Intent to Ship: Capability elements: &lt;camera&gt; and &lt;microphone&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17048.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Capability elements: and Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Capability elements: and Chromestatus Wed, 22 Jul 2026 14:47:30 -0700 Contact emails [email&#160;prot...
- [\[blink-dev\] Re: Intent to Ship: Capability elements: &lt;camera&gt; and &lt;microphone&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17084.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Capability elements: and Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Capability elements: and Yoav Weiss (@Shopify) Wed, 29 Jul 2026 07:22:07 -0700 On Wednesday, ...
- [Re: \[blink-dev\] Re: Intent to Ship: Capability elements: &lt;camera&gt; and &lt;microphone&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17137.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Capability elements: and Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Capability elements: and 'Philipp Hancke' via blink-dev Mon, 10 Aug 2026 12:52:56 -07...
- [PWA Demos & Examples — What PWA Can Do Today](https://whatpwacando.today) *(whatpwacando.today)*
  > <strong>Test camera and microphone access with browser-controlled capability elements</strong>. ... AirPlay lets iOS or macOS users stream video from a PWA to an Apple TV, AirPlay speaker or compatible smart TV.
- [What Makes A PWA Installable? - by Danny Moerkerke](https://modernwebweekly.substack.com/p/what-makes-a-pwa-installable) *(modernwebweekly.substack.com · 2026-09-03T17:28:25)*
  > <strong>The declarative &lt;camera&gt; and &lt;microphone&gt; capability elements are now supported by default in Chrome 153</strong>.

#### 🔗 Inbound Citations & Reverse Links

- [Capability Element - &lt;camera&gt; and &lt;microphone&gt; · Issue #1461 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1461) *(github.com · 2026-09-30T15:37:13)* *(Cites: `https://w3c.github.io/mediacapture-extensions/#the-camera-html-element`)*
  > Capability Element - <camera> and <microphone> · Issue #1461 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in w...

#### 📚 Platform Documentation & References

- [Capability Element - &lt;camera&gt; and &lt;microphone&gt; · Issue #1461 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1461) *(github.com)*
- [&lt;camera&gt; and &lt;microphone&gt; · Issue #4199 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4199) *(github.com)*
- [Media capture elements &lt;camera&gt; and &lt;microphone&gt; · Issue #1032 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1032) *(github.com)*
- [PEPC/usermedia\_element.md at main · WICG/PEPC](https://github.com/WICG/PEPC/blob/main/usermedia_element.md) *(github.com)*
- [Capability Element - &lt;usermedia&gt; (former PEPC) · Issue #1392 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1392) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=mediacapture-extensions) (13 test path(s) matching `mediacapture-extensions`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (46 found across 12 planned queries, 14 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(HTTP 400)* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 1 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 1 verified) · `Web Platform Tests (wpt.fyi)` (13 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5094058497277952-webtransport-reliability-attributes"></a>
### [WebTransport reliability attributes](https://chromestatus.com/feature/5094058497277952)

- **Milestone:** Chrome 155 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5094058497277952](https://chromestatus.com/feature/5094058497277952) · [chromestatuslite.com/feature/5094058497277952](https://chromestatuslite.com/feature/5094058497277952)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransport-reliability](https://www.w3.org/TR/webtransport/#dom-webtransport-reliability)
- **Chromium Bug:** [https://issues.chromium.org/issues/545636884](https://issues.chromium.org/issues/545636884)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`

#### 📝 Overview

Adds the  WebTransport.reliability  instance attribute and static WebTransport.supportsReliableOnly attribute. These APIs indicate whether the user agent supports WebTransport over exclusively reliable connections and whether an established session supports unreliable transport such as datagrams.  In Chromium, reliability initially returns "pending" and changes to  "supports-unreliable" after an HTTP/3 WebTransport connection is established.  Since Chromium does not currently support HTTP/2 fallback,  WebTransport.supportsReliableOnly returns false; any successfully established session uses HTTP/3 and supports unreliable datagrams.

> **Motivation:** WebTransport may operate over connections with different reliability capabilities. Applications such as games, interactive media, and real-time collaboration tools need to know whether unreliable datagrams are available before selecting their transport strategy.  WebTransport.supportsReliableOnly  reports whether the user agent supports WebTranspor...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 160)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebTransport" "reliability" "supportsReliableOnly" gecko OR webkit"`, `""WebTransport.reliability" OR "supportsReliableOnly""`
- **Analysis:** The WebTransport reliability attributes (\`WebTransport.supportsReliableOnly\` and \`transport.reliability\`) standardize how applications detect transport layer capabilities, specifically differentiating between reliable-only connections (such as HTTP/2 fallback) and those offering unreliable datagram delivery (HTTP/3). Originating from W3C WebTransport WG consensus to eliminate guesswork in transport protocol selection, the feature is in developer trial behind a flag in Chrome 155 while gaining documentation and preview support across MDN and other engines. Consensus is strong because it solves a long-standing protocol feature-detection gap for real-time applications like games and streaming.

**Key Recommendations & Takeaways:**
- Actionable Advice: Do not treat these attributes as universally available yet; gate access using standard progressive enhancement checks (\`'supportsReliableOnly' in WebTransport\`) and always inspect \`transport.reliability\` after \`await transport.ready\` resolves. For production real-time apps today, maintain existing fallback logic while testing protocol differentiation under flags in Chromium and preview channels.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **24 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Prototype: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17340.html) *(mail-archive.com)*
  > Explainer https://github.com/w...liableOnly attribute. These APIs <strong>indicate whether the user agent supports WebTransport over exclusively reliable connections and whether an established session supports unreliable...
- [WebTransport](https://w3c.github.io/webtransport) *(w3c.github.io · 2021-10-01T12:35:03)*
  > supportsReliableOnly, of type boolean, readonly · <strong>Returns true if the user agent supports WebTransport sessions over exclusively reliable connections, otherwise false</strong>. anticipatedConcurrentIncomingUnidir...
- [WebTransport in web\_webtransport\_sys - Rust](https://docs.rs/web-webtransport-sys/latest/web_webtransport_sys/struct.WebTransport.html) *(docs.rs)*
  > The WebTransport class. ... Getter for the ready field of this object. ... Getter for the reliability field of this object. ... Getter for the congestionControl field of this object. ... Getter for the closed field of th...
- [Exploring the WebTransport API: A New Era of Web Communication](https://jsdev.space/webtransport-api) *(jsdev.space · 2025-01-16T00:00:00)*
  > It supports multiple streams, unidirectional streams, and out-of-order delivery. <strong>WebTransport enables reliable communication through streams and unreliable transport via UDP-like datagrams</strong>.
- [What Is Replacing WebSockets? 2026 Real-Time Protocol Guide - VideoSDK](https://www.videosdk.live/developer-hub/websocket/what-is-replacing-websockets) *(videosdk.live)*
  > WebTransport: <strong>A browser API for bidirectional real-time communication built on HTTP/3 and QUIC, supporting both reliable streams and unreliable datagrams with sub-millisecond handshake times</strong>.
- [WebTransport API: Secure Real-Time Connections - Noorani](https://nooranibrowser.com/blog/webtransport-secure-connections) *(nooranibrowser.com · 2026-09-25T09:48:03)*
  > WebTransport over HTTP can use modern HTTP transport foundations while exposing application-friendly streams and datagrams. WebSockets provide a widely supported, reliable, ordered connection. That model is excellent for...

#### 📚 Platform Documentation & References

- [WebTransport: reliability property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/reliability) *(developer.mozilla.org)*
- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [content/files/en-us/web/api/webtransport/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransport/index.md?plain=1) *(github.com)*
- [\[HTTP\] Add support for WebTransport supportsReliableOnly · Issue #45894 · mdn/content](https://github.com/mdn/content/issues/45894) *(github.com)*
- [WebTransport: reliability-Eigenschaft - Web-APIs \| MDN](https://developer.mozilla.org/de/docs/Web/API/WebTransport/reliability) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webtransport) (119 test path(s) matching `webtransport`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (62 found across 13 planned queries, 16 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (119 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="6552486106234880-deprecate-and-remove-protected-audience"></a>
### [Deprecate and Remove Protected Audience](https://chromestatus.com/feature/6552486106234880)

- **Milestone:** Chrome 153 (Deprecated)
- **ChromeStatus:** [chromestatus.com/feature/6552486106234880](https://chromestatus.com/feature/6552486106234880) · [chromestatuslite.com/feature/6552486106234880](https://chromestatuslite.com/feature/6552486106234880)
- **Specification:** [https://wicg.github.io/turtledove](https://wicg.github.io/turtledove)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The Protected Audience API provides a method of interest-group advertising without third-party cookies or user tracking across sites.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Protected Audience API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).

> **Motivation:** Chrome has announced that the current approach to third-party cookies will be maintained. Since that announcement there has been virtually no interest in the Protected Audience API. Use of the joinAdInterestGroup() API has decreased by almost 100x and use of the runAdAuction() API has decreased by more than 10x. Of the auctions occurring today, vir...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 150)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Deprecate and Remove Protected Audience is currently Deprecated in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Do Not Reach Lists" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **3 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Do Not Reach Lists](https://business.twitter.com/en/help/campaign-setup/campaign-targeting/do-not-reach-lists.html) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [Custom Audience Permissions \| Docs \| Twitter Developer Platform](https://developer.twitter.com/en/docs/twitter-ads-api/audiences/api-reference/custom-audience-permissions) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [Overview \| Docs \| X Developer Platform](https://developer.twitter.com/en/docs/ads/audiences/api-reference/tailored-audience-permissions) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [Tailored Audience Changes — Twitter Developers](https://developer.twitter.com/en/docs/ads/audiences/api-reference/tailored-audience-changes.html) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [X Developer Platform - X](https://developer.twitter.com/en/docs/ads/audiences/api-reference/audience.html) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [Website Activity Custom Audiences \| X Help Center](https://business.twitter.com/en/help/campaign-setup/campaign-targeting/custom-audiences/website-activity.html) — *Twitter / X (0 likes/RTs, 0 replies)*
- 🐦 [Browser Elements: Part 3: Navigators, Promises, and Beacons \| The Privacy Sandbox](https://www.theprivacysandbox.com/post/promises-navigators-and-beacons) — *Twitter / X (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [hidekazu-konishi.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHwmNdaTDlLwo2ChzgTcbQHVlPkINnRtFg8Oln-HrL3PU0Cx1J1XiGZhWdomvpzJ2ssrwjuCQqAKo1-akkbWhidO8Esa5bzhnGK3x3fUb6A_1EmbtQsLxnEkFwRc-FEXFPtlQ6msNtTGuha-PCq8XUy7vfoq5Xn6uBKrYBbe7nPaR8=) *(vertexaisearch.cloud.google.com)*
  > Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported | hidekazu-konishi.com hidekazu-konishi.com https://hidekazu-k...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGEDMfj9hDIFNKkqyVG4ENJqXEQ86h2ABSChR7K-WeJeRV0CFrimjZkTr0LfYRac-2zJ2iH-t4DyTZ2Zd5h12m89q3j30pI4e93NmGes9CZbJundNOqYuHus-WyaP79toL8tZg=) *(vertexaisearch.cloud.google.com)*
  > Chrome 153 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربي...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEbZXMBQUMIPaSdo1BGB_Z9VAIafo9XVkVRf16OdzBvudDKLXsQ-iCyNqo-SRs3fhVt_oGPnUizbdRi2yhE1sAIIQ_955NUANc0TWqFAZ5l1a7VN_annsViHezSm80NyfrKme2Mksg=) *(vertexaisearch.cloud.google.com)*
  > Status do recurso do Sandbox de privacidade | Privacy Sandbox Ir para o conteúdo principal / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברי...
- [arxiv.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHfGyvULqGey6KlC9j_2AHpSRcqA9nrL3MIphZvFYfFh0aYNK_jwjVQViNWrHDk2w-qnxYRwibUYNe1_JomcFBJhujJvYVyOq-b0iF0aAScun5ASpnFMg==) *(vertexaisearch.cloud.google.com)*
  > Longitudinal Adoption and Deprecation of the Privacy Sandbox Web APIs Report GitHub Issue × Title: Content selection saved. Describe the issue below: Description: arXiv is now an independent nonprofit! Learn more &times;...
- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)*
  > https://<strong>chromestatus.com/feature/6552486106234880</strong> · unread, Nov 12, 2025, 11:30:32 AM11/12/25 ·  ·  ·  · Reply to author · Sign in to reply to author · Forward · Sign in to forward · Delete · You do n...
- [Deprecate and Remove Protected Audience](https://chromestatus.com/feature/6552486106234880) *(chromestatus.com · 2025-11-05T00:00:00)*
  > We cannot provide a description for this page right now

#### 🔗 Inbound Citations & Reverse Links

- [Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1141) *(github.com · 2026-07-29T21:48:26)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > https://<strong>chromestatus.com/feature/6552486106234880</strong> · Reactions are currently unavailable · Sign up for free to join this conversation on GitHub. Already have an account? Sign in to comment · rowan-m · new...
- [Intent to Deprecate and Remove: Protected Audience](https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/6552486106234880`)*
  > https://<strong>chromestatus.com/feature/6552486106234880</strong> · unread, Nov 12, 2025, 11:30:32 AM11/12/25 ·  ·  ·  · Reply to author · Sign in to reply to author · Forward · Sign in to forward · Delete · You do n...

#### 📚 Platform Documentation & References

- [Deprecate and Remove Protected Audience · Issue #1141 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1141) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=deprecate) (27 test path(s) matching `deprecate`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (70 found across 12 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 4 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (27 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5387465121726464-support-long-animation-frames-api-in-web-workers"></a>
### [Support Long Animation Frames API in Web Workers](https://chromestatus.com/feature/5387465121726464)

- **Milestone:** Chrome 153 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5387465121726464](https://chromestatus.com/feature/5387465121726464) · [chromestatuslite.com/feature/5387465121726464](https://chromestatuslite.com/feature/5387465121726464)
- **Chromium Bug:** [https://issues.chromium.org/issues/534893134](https://issues.chromium.org/issues/534893134)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

This feature extends the existing Long Animation Frames (LoAF) API to Web Workers. Today LoAF reports only on the main thread and is anchored to rendering frames, so it cannot observe work that blocks a worker's event loop. With this change, a long task that blocks a worker's event loop is reported as a long-animation-frame entry that is observable from inside the worker via PerformanceObserver, with the usual per-script attribution.  The prototype starts with dedicated workers, reporting a single long task that blocks the worker's event loop. The broader goal is to surface congested moments, intervals where an event loop remains busy and runnable work is delayed. This includes detecting a flood of many small tasks that keeps the event loop busy and reporting it as a long-animation-frame entry, as well as supporting the main thread. This is planned as follow-up work.

> **Motivation:** Web apps increasingly offload work to Web Workers, but a worker that blocks its own event loop is invisible to today's performance APIs. Workers usually have no rendering lifecycle, so there are no animation frames for LoAF to anchor to, and the main-thread LoAF and Long Tasks APIs cannot observe work running in a worker. As a result, a long task i...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 149)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Support Long Animation Frames API in Web Workers is currently In developer trial (Behind a flag) in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "How PDO threads work in facial layers 📽️Animation ▫️SMAS / Subcutaneous layer → Barbed threads for lifting ▫️Dermis lay" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **4 new community discussions** found
- 📰 **1 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [How PDO threads work in facial layers 📽️Animation ▫️SMAS / Subcutaneous layer → Barbed threads for lifting ▫️Dermis lay](https://twitter.com/Lindau66f/status/2107040929660219683) — *Twitter / X by @Lindau66f (0 likes/RTs, 0 replies)*
- 🐦 [some customizable features:   keyboard react: have your character pound on the keyboard when you do mouse react: can cre](https://twitter.com/MadamSavvy/status/2106821398333194584) — *Twitter / X by @MadamSavvy (33 likes/RTs, 2 replies)*
- 🐦 [X on X / X](https://twitter.com/tunetheweb/status/1694079281238843893) — *Twitter / X by @tunetheweb (0 likes/RTs, 0 replies)*
- 🐦 [Matt Perry on X: "Kicking the tires on a 1kb, WAAPI-powered animation API Take a look: https://t.co/Qy4JGFGRkB" / X](https://twitter.com/mattgperry/status/1408688475973488640) — *Twitter / X by @mattgperry (0 likes/RTs, 0 replies)*
- 🐦 [tamagui on X: "3. Animations: (via reanimated + moti) support first-class. We have a few ideas that keep it similar to web "transition" for simple cases, look out for an RFC." / X](https://twitter.com/tamagui_js/status/1475935778010062852) — *Twitter / X by @tamagui_js (0 likes/RTs, 0 replies)*
- 🐦 [Matt Perry (@mattgperry) on X](https://twitter.com/mattgperry/status/1580937285280747521?lang=en) — *Twitter / X by @mattgperry (0 likes/RTs, 0 replies)*
- 🐦 [Ted Unangst on Twitter: ""Async animation disabled because frame size (3870, 250) is bigger than the viewport (1919, 1067)" That's one hell of a gif! (not really)"](https://twitter.com/tedunangst/status/651852813128089601) — *Twitter / X by @tedunangst (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGIzgVQ7_mjXX0Pay_aT9EdZr-jtoObb3_Uxl0F75lh6CHY6JsKCIu1mQ6SLlaUywVuL6YKmlXzgoMm5xHM0a_QPkAjXYJQUZZjtnHvbj3D8qA4PlchIRZgkZsc8MGbD9rv9_Z76XDPqp-5mN9jIFWzYjgeAvZGMg==) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Executive Summary  Web performance guides (such as on **web.dev** and **developer.chrome.com**) have long recommended offloading heavy computation off the main thread to **Web Workers** to safeguard Intera...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHygCKcuHkjAyF3ri-0BWd3FNdUNA-PD1dHNDHR7KWzzStGZM-gE9IoNCZvHTrhuozbeH_bm-AjS9dfW13WeiF8lgR5vSBuZ8afrKplAGghsoJDQ6NN_ByO5zMO6GA0N36QNMsDO5Ft) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Executive Summary  Web performance guides (such as on **web.dev** and **developer.chrome.com**) have long recommended offloading heavy computation off the main thread to **Web Workers** to safeguard Intera...
- [googlesource.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGKVSpasF5_r0i-RHG7qxHFSBL0LLKr77x2juv-Wr6qghdFlZAmXF_KObVSF05-ybtdcYrZO_NEbwAJemyTDP2qFPYH-LO_qPAfFwUJVPcqfT3llikLwBTGdXn0K47hVc0-uv4qaH6BZAR4qSelDwYpH2GT9U47IZK68gUl8isGODr2TEoqv7zw6qLlHlDrth22oOL7R2g0yFjZkPyIM3hmnmfa0atiKGOocXSGuhAH4q9Q4_b0UEab3di9ggnY) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Executive Summary  Web performance guides (such as on **web.dev** and **developer.chrome.com**) have long recommended offloading heavy computation off the main thread to **Web Workers** to safeguard Intera...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH7ngdFZl2bq1F1GH0BRLGSsBszqsMBIAgDeAb0RBfUw_ycBsnYKrrQIgdTxrwxMMjxfRoX1lAqA14F-uEoyfjxcJ3UX-eNq9G_yFDhbRmjOLUoRcACShJma-5zi_qbqWfNSjyHM8kcaVoi) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Executive Summary  Web performance guides (such as on **web.dev** and **developer.chrome.com**) have long recommended offloading heavy computation off the main thread to **Web Workers** to safeguard Intera...
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHvfkmkIyGi3erwI8P96IKxw7XVDhSjCEzUgPgQZpxCgoIqRQjIMkA0pQlyf9dcWEaIf21GoG9KHMFg3yBZCPCLZHR4DP-iLIjXDSpBIkDZeUVAD_kBkPjyFkKTtu32BGhdaeJV0zt2F4Msd2Bybs3PsdateTQybA==) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Executive Summary  Web performance guides (such as on **web.dev** and **developer.chrome.com**) have long recommended offloading heavy computation off the main thread to **Web Workers** to safeguard Intera...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHM9UqCUBLoTNXfoSYRBbvxkgltXKDpxEHqv2a7_Y45tkEfcJa-Ph-iEeJunqSHh9sDUJ9mA1gkHy4JDO1_iI_EiEB2Tp9OIrxLZqGMC73VaDuFwdvuPgOctmMzKUmcBmPnFi5ZgfDWc9CY0H5XjDXObIwPNyJg-d2lycyshoV5HphQmvARbYb15BfHBcfo2K7zcw==) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Executive Summary  Web performance guides (such as on **web.dev** and **developer.chrome.com**) have long recommended offloading heavy computation off the main thread to **Web Workers** to safeguard Intera...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Support Long Animation Frames API in Web Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17008.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md`)*
  > Explainer https://github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md Specification No information provided Summary <strong>This feature extends the existing Long Animation Frames (LoAF) ...

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=long) (173 test path(s) matching `long`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (41 found across 12 planned queries, 2 verified) · `Google Search Grounding (gemini-3.8-flash)` (19 found, 11 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (173 items)
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

---

<a id="6260680824061952-sub-apps-for-iwas"></a>
### [Sub apps for IWAs](https://chromestatus.com/feature/6260680824061952)

- **Milestone:** Chrome 152 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6260680824061952](https://chromestatus.com/feature/6260680824061952) · [chromestatuslite.com/feature/6260680824061952](https://chromestatuslite.com/feature/6260680824061952)
- **Specification:** [https://wicg.github.io/sub-apps](https://wicg.github.io/sub-apps)
- **Chromium Bug:** [https://buganizer.corp.google.com/issues/414729785](https://buganizer.corp.google.com/issues/414729785)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Sub apps allow developers to create multiple apps under a single Isolated Web App (\[IWA\](https://chromeos.dev/en/web/isolated-web-apps)) installation. Each Sub app has its own distinct name, icons and OS integrations.   Sub apps appear on the desktop shelf with a distinct identity from the parent IWA, offering separate OS capabilities, such as file type association. This allows a single software package to present different, isolated functionalities to the user while maintaining a single, unified IWA install and update process.   There are three new enterprise policies available to control the Sub apps API:  - \[DefaultSubAppsWithoutPromptsSetting\](https://chromeenterprise.google/policies/#DefaultSubAppsWithoutPromptsSetting) specifies globally (for all IWAs) if user permission prompts are required to install Sub apps. The policies below can override this default.  - \[SubAppsWithoutPromptsAllowedForOrigins\](https://chromeenterprise.google/policies/#SubAppsWithoutPromptsAllowedForOrigins) specifies a list of IWA URLs that can add or update Sub apps without user permission prompts.   - \[SubAppsWithoutPromptsBlockedForOrigins\](https://chromeenterprise.google/policies/#SubAppsWithoutPromptsBlockedForOrigins) specifies a list of IWA URLs that can add Sub apps with user permission prompts only.

> **Motivation:** Without this API developers are forced into splitting the application into separate ones which complicates distribution or bundle everything into a single huge application that can potentially confuse users.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 145)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Sub apps" API WICG blink-dev "Intent to Ship""`, `""sub-apps" WICG "Isolated Web Apps""`
- **Analysis:** Enabled by default in Chrome 152, the Sub Apps API allows developers to package and manage distinct child applications with their own shelf identities, icons, and OS integrations under a single Isolated Web App (IWA) container. The API is strictly tied to Chromium's signed Web Bundle IWA architecture and remains incubated within the WICG alongside enterprise management policies. Because it is restricted to the IWA execution environment rather than standard progressive web apps, cross-browser consensus does not exist and adoption remains bounded to Chromium-managed ecosystems.

**Key Recommendations & Takeaways:**
- Actionable Advice: Do not consider this API for standard public web or cross-platform PWA development, as it requires an IWA runtime context. Treat it strictly as an enterprise deployment tool if specifically architecting multi-module software suites targeted at managed ChromeOS or Chrome Enterprise environments.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEmUVWwsYkf6FnjlZGoqBCuEhNSEjlCotsjyaDr6ULIZgpXGcv2y7GIyNHeVzhpzEEOR2ga4jxaoeZlYFSUO-01tuVvZXeFUUysRvfhekgclJg3F9BoOkvfWDp_IMpP6YZ9kYQK4U6vpK1SuFGPwO05p7-qhmNmcW0=) *(vertexaisearch.cloud.google.com)*
  > subapps-demo/README.md at main · bylicaatgoogle/subapps-demo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Rel...
- [helentech.jp](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFaPQCbmwbFkB3IVhBGTA7W06P2uVMxu0w13dt4oTCJmZYdjBZtTe-XYzrtLwDgYyidBlSbdbVSt9ctYeqhOYe1F5XIdUHEzFeQPfqxswuC1DJeNRHnXjhoxMsin8HelsSBODI36LP1h24xetGsehnZwRBYaQ==) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Summary  The **Sub Apps API for Isolated Web Apps (IWAs)** allows developers to package and deploy multiple distinct sub-applications under a single parent IWA bundle.   * **The Problem It Solves:** Previo...
- [chromeenterprise.google](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE2SVIKUX5z0ZUyoo4zxyHhjGmZs0IU_c2FOgmwtC9iU2Dll6zz-zlAl94_klknRTkE_pauUn9XE4BowEfufaKaT8t9f5EV3P41QyEYNFqRCU3fzv4rnSt_yquBNcVdAFMHZ_urVEkRCinYD77307spPNhcOiUDRtQknmA1BhrVUsHlB3ILwBkk802QujqvT5fx8eDIT1LdCY6ZT00BGqds8n-46A==) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Summary  The **Sub Apps API for Isolated Web Apps (IWAs)** allows developers to package and deploy multiple distinct sub-applications under a single parent IWA bundle.   * **The Problem It Solves:** Previo...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEkCNOWll5fL6MJL0Bf3O6I6Ic5BvAlwXwE_7LQRr6TlZcFMZixqcXL7F6AXxy5__KNm7gJLkH89mQ7lv6NU7_ya3aZQWiBPISstD3WFJPVMm3K3I31uOvcxWQKoQ==) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Summary  The **Sub Apps API for Isolated Web Apps (IWAs)** allows developers to package and deploy multiple distinct sub-applications under a single parent IWA bundle.   * **The Problem It Solves:** Previo...
- [Re: \[blink-dev\] Intent to Ship: Sub apps](http://www.mail-archive.com/blink-dev@chromium.org/msg17010.html) *(mail-archive.com)*
  > &gt;&gt; Reilly Grant | Software Engineer ... &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; https://github.com/WICG/sub-apps &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; *Summary* &gt;&gt;&gt;&gt; Sub apps <strong>allow developers to create mu...
- [ChromeOS.dev](https://chromeos.dev/en) *(chromeos.dev)*
  > 50M students, 100M web app users, and so much more: our growing commitment to education, enterprise, and development for ChromeOS.

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: Sub apps](http://www.mail-archive.com/blink-dev@chromium.org/msg17010.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/sub-apps`)*
  > &gt;&gt; Reilly Grant | Software Engineer ... &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; https://github.com/WICG/sub-apps &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; *Summary* &gt;&gt;&gt;&gt; Sub apps <strong>allow developers to create mu...

#### 🧪 Interactive Demos & Samples

- [Sub apps for IWAs Demo](https://github.com/vkrot-cell/subapps-demo)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=apps) (10 test path(s) matching `apps`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (33 found across 8 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 4 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (10 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="6210457816924160-private-verification-tokens"></a>
### [Private Verification Tokens](https://chromestatus.com/feature/6210457816924160)

- **Milestone:** Chrome 154 (Origin trial)
- **ChromeStatus:** [chromestatus.com/feature/6210457816924160](https://chromestatus.com/feature/6210457816924160) · [chromestatuslite.com/feature/6210457816924160](https://chromestatuslite.com/feature/6210457816924160)
- **Chromium Bug:** [https://crbug.com/500396188](https://crbug.com/500396188)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Automated traffic is increasing across the web, and many websites have responded with more user friction in the form of CAPTCHAs and other challenges to combat unwanted traffic. This degrades the web user experience for all users, with a particularly outsized impact to users in private browsing modes.  Private Verification Tokens (PVT) is a low entropy mechanism that allows websites to transfer the trust that their users have established in regular browsing into private browsing mode to reduce their experienced user friction. PVTs are issued during a regular browsing session and redeemed in private browsing mode.

> **Motivation:** Due to the significant increase in automation over the past 1-2 years, driven largely by AI, websites have responded by adding more challenges to determine if clients are likely to be human.  In particular, this has had an outsized impact on users in private browsing mode, who tend to have similar client characteristics as automated clients, such a...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 133)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Private Verification Tokens" "Incognito" OR "private browsing""`, `""Private Verification Tokens" chromestatus OR "blink-dev" OR github"`
- **Analysis:** Private Verification Tokens (PVT) is an experimental anti-abuse mechanism entering an Origin Trial in Chrome 154 (running through Chrome 165) that enables sites to transfer a low-entropy trust signal from normal browsing into private browsing mode. The API aims to combat the surge in aggressive CAPTCHAs triggered by bot traffic while preserving user privacy via blind signatures (Privacy Pass) and issuer registration lists. However, it remains a Chromium-exclusive proposal with no public consensus or formal positions yet from WebKit or Gecko.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams and anti-fraud operators experiencing high private-mode abandonment should evaluate the Origin Trial in Chrome 154 and monitor the key commitment registry on GitHub, but must treat PVT as purely experimental without depending on cross-browser interoperability. Continue relying on standard CAPTCHA and progressive bot mitigation fallbacks for all non-Chromium traffic.
- In active Origin Trial in Chrome 154. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Explainer for the Private Verification Tokens" (2 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found
- 📰 **8 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Explainer for the Private Verification Tokens](https://news.ycombinator.com/item?id=47760044) — *Hacker News (2 pts, 0 comments)*
- 🐦 [PiunikaWeb - your daily source of web browser news on X: "Google Chrome 154 beta takes aim at annoying CAPTCHAs and clunky popups Chrome 154 is coming to tackle two of the web’s most irritating annoyances: endless CAPTCHAs in Incognito mode, and popups that vanish when you accidentally click. The… / X](https://x.com/PiunikaWeb/status/2095479410233397753) — *Twitter / X by @PiunikaWeb (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17478.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: Private Verification Tokens Daniel Bratell Wed, 16 Sep 2026 08:48:21 -0700 We ...
- [\[blink-dev\] Intent to Prototype: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg16306.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Private Verification Tokens Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Private Verification Tokens Chromestatus Thu, 09 Apr 2026 13:02:30 -0700 Contact emails ...
- [\[blink-dev\] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17179.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Private Verification Tokens Chromestatus Fri, 14 Aug 2026 13:41:33 -0700 Contact email...
- [Intent to Ship: Private State Tokens API](https://groups.google.com/a/chromium.org/g/blink-dev/c/vKCYxKqw8k0) *(groups.google.com)*
  > https://github.com/WICG/trust-token-api/blob/main/PST_VS_PAT.md#privacypass-version suggests that the privacypass versioning concern that Apple raised in https://github.com/WebKit/standards-positions/issues/72#issuecomme...
- [Chrome Private Verification Tokens: Incognito Trial](https://www.relevantaudience.com/analytics/chrome-private-verification-tokens-incognito-origin-trial) *(relevantaudience.com · 2026-09-13T00:29:33)*
  > <strong>The iOS and WebView rows are empty</strong>. Firefox, WebKit and web developers are all recorded as giving no signal, and the TAG specification review is pending. Five Google addresses are listed as owners.
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > Private Verification Tokens (PVT) is <strong>a low entropy mechanism that allows websites to transfer the trust that their users have established in regular browsing into private browsing mode to reduce their experienced...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17478.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/private-verification-tokens`)*
  > Re: [blink-dev] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: Private Verification Tokens Daniel Bratell Wed, 16 Sep 2026 08:48:21 -0700 We ...
- [\[blink-dev\] Intent to Prototype: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg16306.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/private-verification-tokens`)*
  > [blink-dev] Intent to Prototype: Private Verification Tokens Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Private Verification Tokens Chromestatus Thu, 09 Apr 2026 13:02:30 -0700 Contact emails ...
- [\[blink-dev\] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17179.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/private-verification-tokens`)*
  > [blink-dev] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Private Verification Tokens Chromestatus Fri, 14 Aug 2026 13:41:33 -0700 Contact email...

#### 📚 Platform Documentation & References

- [MIME type verification](https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides/MIME_types) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=private) (4187 test path(s) matching `private`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 12 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (3 found, 0 verified) · `Hacker News Algolia` (8 found, 1 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (4187 items)
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5663304168112128-webgpu-wgsl-fragment-depth"></a>
### [WebGPU: WGSL Fragment Depth](https://chromestatus.com/feature/5663304168112128)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5663304168112128](https://chromestatus.com/feature/5663304168112128) · [chromestatuslite.com/feature/5663304168112128](https://chromestatuslite.com/feature/5663304168112128)
- **Specification:** [https://github.com/gpuweb/gpuweb/pull/6299](https://github.com/gpuweb/gpuweb/pull/6299)
- **Chromium Bug:** [https://crbug.com/457993779](https://crbug.com/457993779)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `Positive`

#### 📝 Overview

Adds the ability to provide a \`less\` or \`greater\` modifier to the \`@builtin(frag\_depth)\` in WGSL.  The current \`@builtin(frag\_depth)\` can potentially introduce a performance penalty due to disabling the early-Z optimizations on a draw call. The new modifiers allow the explicit setting of the buffer mode and allow the early-Z optimizations to be applied.

> **Motivation:** In the current WGSL specification, the mere act of writing to @builtin(frag\_depth) often incurs a significant performance penalty because driver heuristics cannot guarantee that the fragment shader output will adhere to the depth written by the rasterizer's interpolated depth. Consequently, writing to frag\_depth typically forces the GPU to disable ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 120)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""gpuweb/gpuweb" "frag_depth" less greater"`, `""WGSL" "frag_depth" "less" "greater""`, `"site:github.com/gpuweb/gpuweb issue 5342"`
- **Analysis:** WGSL Fragment Depth introduces optional \`less\` and \`greater\` depth-mode modifiers to \`@builtin(frag\_depth)\`, enabling GPU drivers to preserve critical early-Z hardware culling optimizations when shaders write custom depth. The enhancement directly resolves severe fill-rate performance degradation historically incurred whenever fragment shaders modified depth. Shipping by default in Chromium and standardized in the W3C GPU for the Web specification, it establishes a high-impact optimization for modern web graphics engines.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt the \`less\` and \`greater\` qualifiers to reclaim early-Z performance on depth-writing shaders, but must provide shader compilation fallbacks or feature-gate shader strings because unupdated WGSL parsers in non-Chromium or older runtimes will fail validation on the new syntax.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 📦 Polyfills & NPM Ecosystem

- [typegpu](https://www.npmjs.com/package/typegpu) `v0.12.6` — A thin layer between JS and WebGPU/WGSL that improves development experience and allows for faster iteration.

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails [email&#16...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 T...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17276.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected] ... &gt; https://github.com/gpuweb/gpuweb/pull/6299 &gt; &gt; *Summary* &gt; <strong>Adds the ability to provide a `less` or `greater` modifier to the &gt; `@builtin(frag_dept...
- [WebGPU Shading Language](https://mehmetoguzderin.github.io/webgpu/wgsl.html) *(mehmetoguzderin.github.io)*
  > Fixed-function stages consume a fragment output, possibly updating external state such as color attachments and depth and stencil buffers. The WebGPU specification describes pipelines in greater detail. WGSL defines thre...
- [Does WebGPU Support 'Early Fragment Test'?](https://groups.google.com/g/webgl-dev-list/c/nG7yEjCHxGI) *(groups.google.com · 2024-09-16T00:00:00)*
  > Yes, <strong>WebGPU will do early Z rejection by default</strong>. This is disabled if the fragment shader alters the frag_depth builtin.

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails [email&#16...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 T...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Daniel Bratell Wed, 26 Aug 2026 07:53:18 -0700 LGTM2 /...

#### 📚 Platform Documentation & References

- [WGSL Proposal for fragment depth (less, greater, any) · Issue #5342 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5342) *(github.com)*
- [Support for conservative depth · Issue #3961 · gfx-rs/wgpu](https://github.com/gfx-rs/wgpu/issues/3961) *(github.com)*
- [Language: an author spelling for enable and requires, and a Capability for every WGSL extension and built-in value · Issue #146 · typeshade/typeshade](https://github.com/typeshade/typeshade/issues/146) *(github.com)*
- [Guarantees about early-z fragment discard · Issue #4878 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/4878) *(github.com)*
- [GPU: wgslLanguageFeatures property](https://developer.mozilla.org/en-US/docs/Web/API/GPU/wgslLanguageFeatures) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webgpu) (1 test path(s) matching `webgpu`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (36 found across 12 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 1 verified) · `Web Platform Tests (wpt.fyi)` (1 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5201338641285120-window-drag"></a>
### [window-drag](https://chromestatus.com/feature/5201338641285120)

- **Milestone:** Chrome 152 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5201338641285120](https://chromestatus.com/feature/5201338641285120) · [chromestatuslite.com/feature/5201338641285120](https://chromestatuslite.com/feature/5201338641285120)
- **Specification:** [https://drafts.csswg.org/css-ui-4/#window-drag](https://drafts.csswg.org/css-ui-4/#window-drag)
- **Chromium Bug:** [https://issues.chromium.org/issues/477608113](https://issues.chromium.org/issues/477608113)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Positive` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/window-drag) (Chrome: `152`, Firefox: `—`, Safari: `—`)

#### 📝 Overview

The \`window-drag\` CSS property allows web content to designate regions of an installed desktop web app’s UI that should behave as draggable window titlebar areas. When applied, user pointer interactions (e.g., click-and-drag) on that region move the top-level application window rather than triggering normal page interaction. This is primarily used by desktop PWAs or apps using features like Window Controls Overlay to implement custom title bars and draggable areas when the browser-provided title bar is hidden.  This feature standardizes and renames the existing \`app-region\` CSS property, changes its value names to \`move\` and \`none\`, and adds explicit inheritance behavior. This property is used by installed web apps and Electron-based applications for the same purpose.

> **Motivation:** The CSS Working Group resolved to standardize the property under the name \`window-drag\` to better reflect its behavior. This feature adds support for the standardized \`window-drag \`property as a new CSS property in Chromium. Chromium is not deprecating or removing \`app-region\` or \`-webkit-app-region\`. Both legacy properties will remain fully suppor...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 120)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** window-drag is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "This looks ok to me in shape.  Event handling could get some work (it's not clear what events you get or not or whether you can preventDefault e.g. mo..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [window-drag](https://github.com/WebKit/standards-positions/issues/668) [open] `venue: W3C CSS WG`
- **Mozilla:** [window-drag](https://github.com/mozilla/standards-positions/issues/1409) [open] `venue: W3C`, `topic: CSS`
  > *Latest discussion from @emilio: "This looks ok to me in shape.  Event handling could get some work (it's not clear what events you get or not or whether you can preventDefault e.g. mo..."*

#### 📦 Polyfills & NPM Ecosystem

- [window-drag](https://www.npmjs.com/package/window-drag) `v1.0.3` — electron drag window

#### 📰 Ecosystem Blogs & Articles

- [New in Edge for developers – Create better components and make your site agent-ready - Microsoft Edge Blog](https://blogs.windows.com/msedgedev/2026/09/21/new-in-edge-for-developers-create-better-components-and-make-your-site-agent-ready) *(blogs.windows.com · 2026-09-22T08:58:27)*
  > <strong>The window-drag CSS property is a new standardized way to make installed PWA windows draggable</strong>, which is helpful when using the Window Controls Overlay API.
- [\[blink-dev\] Re: Intent to Ship: window-drag](http://www.mail-archive.com/blink-dev@chromium.org/msg16802.html) *(mail-archive.com)*
  > Renaming &gt; `app-region` to `window-drag` carries some interoperability risk because &gt; the feature is currently only implemented in Chromium, and other engines do &gt; not yet support either the legacy or renamed pr...
- [\[blink-dev\] Intent to Ship: window-drag](http://www.mail-archive.com/blink-dev@chromium.org/msg16747.html) *(mail-archive.com)*
  > Renaming `app-region` to `window-drag` carries some interoperability risk because the feature is currently only implemented in Chromium, and other engines do not yet support either the legacy or renamed property. In the ...
- [Re: \[blink-dev\] Intent to Ship: window-drag](http://www.mail-archive.com/blink-dev@chromium.org/msg16798.html) *(mail-archive.com)*
  > Renaming &gt;&gt; `app-region` to `window-drag` carries some interoperability risk because &gt;&gt; the feature is currently only implemented in Chromium, and other engines do &gt;&gt; not yet support either the legacy o...
- [Re: \[blink-dev\] Re: Intent to Ship: window-drag](http://www.mail-archive.com/blink-dev@chromium.org/msg16846.html) *(mail-archive.com)*
  > Renaming &gt;&gt; `app-region` to `window-drag` carries some interoperability risk because &gt;&gt; the feature is currently only implemented in Chromium, and other engines do &gt;&gt; not yet support either the legacy o...

#### 🔗 Inbound Citations & Reverse Links

- [window-drag · Issue #1344 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1344) *(github.com · 2026-08-14T17:31:56)* *(Cites: `https://chromestatus.com/feature/5201338641285120`)*
  > window-drag · Issue #1344 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window....

#### 📚 Platform Documentation & References

- [window-drag · Issue #1344 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1344) *(github.com)*
- [window-drag · Issue #3948 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3948) *(github.com)*
- [Technical review: Document window-drag by chrisdavidmills · Pull Request #45771 · mdn/content](https://github.com/mdn/content/pull/45771) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=css-ui) (1072 test path(s) matching `css-ui`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (47 found across 11 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (2 found, 0 verified) · `Standards Positions` (5 found, 2 verified) · `Engine Bug Trackers` (4 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 1 verified) · `Web Platform Tests (wpt.fyi)` (1072 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 1

---

<a id="6240467143491584-speculation-rules-moderate-viewport-heuristics-controls"></a>
### [Speculation Rules - moderate viewport heuristics controls](https://chromestatus.com/feature/6240467143491584)

- **Milestone:** Chrome 152 (Origin trial)
- **ChromeStatus:** [chromestatus.com/feature/6240467143491584](https://chromestatus.com/feature/6240467143491584) · [chromestatuslite.com/feature/6240467143491584](https://chromestatuslite.com/feature/6240467143491584)
- **Chromium Bug:** [https://issues.chromium.org/issues/529423512](https://issues.chromium.org/issues/529423512)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Current viewport heuristics for speculation rules don't give any room for developer experimentation.  This experimental feature will provide such controls, and enable developers to figure out if different heuristics parameters give them better results than the default ones.  This is a feature only aimed at experimentation, and there are no plans to ship it as is.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 110)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""viewport heuristics" chrome speculation rules"`, `""Speculation Rules - moderate viewport heuristics controls""`, `""SpeculationRulesModerateViewportHeuristicsControl""`, `""moderate viewport heuristics" "speculation rules""`
- **Analysis:** Speculation Rules - moderate viewport heuristics controls is an Android-focused Chromium Origin Trial launched in Chrome 152 to test author-defined parameters for mobile 'moderate' eagerness heuristics. The feature exposes a ruleset-level 'moderate\_viewport\_heuristics' key allowing developers and performance scripts to evaluate alternative timing, size, and distance thresholds against default browser heuristics. Chromium engineers explicitly stated that this trial is strictly exploratory to gather empirical performance data, with no intent to ship the syntax in its current form.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams should continue relying on standard Speculation Rules eagerness levels ('moderate', 'eager', 'conservative') as progressive enhancements without hardcoding experimental heuristic parameters into production code. Only register for the Chrome 152 Origin Trial if actively benchmarking mobile navigation hit rates or testing custom RUM instrumentation to supply feedback to the Blink speculation team.
- In active Origin Trial in Chrome 152. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHQnaLPQmav5JlHp01qBP9nx9vSonXxxJbXLqmD2wWWY8LUQgKS0VRmudobyTS_vr0CrLq94HQOTAlqXCdXpmyznuuudr8PDfa-dhjfWS9zxIJXrjPdUaCAoNqegWTqUD19uMnaD1STMmj2XBgkcNxBkcwoY1CmJw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Speculation Rules - moderate viewport heuristics controls"** is an experimental Chromium origin trial (`SpeculationRulesModerateViewportHeuristicsControl`) introduced in **Chrome 152** ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGaRSjrDZBCvEwP56PBblHdzLJjStnFx6WhiwgqOFdRRNEM1fFyuCSs-qm9StKUa4Gff7Q9a0x-S_Vh1GArUkvFH8olKOPacUCjvgwQdMUdmY2BH-KnIpQ3lvWXpC4AtOufWK-MTS9vNuBnfTirqREdS1_WNg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Speculation Rules - moderate viewport heuristics controls"** is an experimental Chromium origin trial (`SpeculationRulesModerateViewportHeuristicsControl`) introduced in **Chrome 152** ...
- [fudge.ai](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEpfV6nxV16o4ZFf1KKeCXfYVQrxBrpzCEbCy-qIbn_TTLEcAjuCnnKzTbHneL_uD4A_RwNg1tKm4D8GjICBXgp8Ny2c4ysIrZ76WBWXinaYX7UWnUprRA0cNPMZLzqalrYXs91r9wNf6WVe5w=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Speculation Rules - moderate viewport heuristics controls"** is an experimental Chromium origin trial (`SpeculationRulesModerateViewportHeuristicsControl`) introduced in **Chrome 152** ...
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGrw4E4tx4EONlRZE0vKWnOE_BWIFsqRR_vl9C3lBiKUWSsLhH3HdFTZJZVBoEG7LVr7qyCAFYWyt10pDWfFgIo_6JAxFacjmwpnz4Lee-cT5zOTxLlZuQv0b1PCEU=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Speculation Rules - moderate viewport heuristics controls"** is an experimental Chromium origin trial (`SpeculationRulesModerateViewportHeuristicsControl`) introduced in **Chrome 152** ...
- [websiteadvantage.com.au](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHKX3ChJooVlwuzxUuZQMTWCrWkp_99rn0TgpOPdWu4tY41Yd7rXG9mKwp__sfr49bLWJ-O21mBEy7ZnPXlHFl4mB1TOvn_cQYG8FE2REVB3W_ChWJed-X3fH04Bs4SzsnoZhrYun_y_crMIKxcPQGcUq8xp77hvLfJBgqDSTuqXnbjSLgLkSo_NA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Speculation Rules - moderate viewport heuristics controls"** is an experimental Chromium origin trial (`SpeculationRulesModerateViewportHeuristicsControl`) introduced in **Chrome 152** ...
- [fudge.ai](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFMnjl_4EELVtLJenDvAAgk8RV6CJBXiU07wTGg0DIefA1NdCuXnxhuYNL3gDBiDos1-3gee_YEgHWQWW51xSt6gf3nHuToDf6XZTi9Vcbni2qr9QBQ8voWgAfuEHQa8cl-ciVbb9ej8aQ8MaA=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Speculation Rules - moderate viewport heuristics controls"** is an experimental Chromium origin trial (`SpeculationRulesModerateViewportHeuristicsControl`) introduced in **Chrome 152** ...

#### 🔗 Inbound Citations & Reverse Links

- [Developers should be able to experiment with Speculation Rules moderate viewport heuristics \[529423512\] - Chromium](https://issues.chromium.org/issues/529423512) *(issues.chromium.org)* *(Cites: `https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9`)*
  > https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9 <strong>for a proposal that would enable developers to run experiments with the heuristics and report back their results</strong>.
- [\[blink-dev\] Re: Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16943.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9`)*
  > &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9 &gt; &gt; *Specification* &gt; *No spec - this is an experiment-only feature.* &g...
- [\[blink-dev\] Intent to Experiment: Speculation Rules - moderate viewport heuristics controls](http://www.mail-archive.com/blink-dev@chromium.org/msg16920.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9`)*
  > *Contact emails* [email protected] *Explainer* https://<strong>gist.github.com/yoavweiss/6bb2de06642b475a12205684aea2eef9</strong>

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=speculation) (541 test path(s) matching `speculation`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (27 found across 6 planned queries, 5 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 6 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (541 items)
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5114591051907072-expose-cssstylevalue-hierarchy-to-worker-contexts"></a>
### [Expose CSSStyleValue hierarchy to Worker contexts](https://chromestatus.com/feature/5114591051907072)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5114591051907072](https://chromestatus.com/feature/5114591051907072) · [chromestatuslite.com/feature/5114591051907072](https://chromestatuslite.com/feature/5114591051907072)
- **Specification:** [https://www.w3.org/TR/css-typed-om-1/#stylevalue-subclasses](https://www.w3.org/TR/css-typed-om-1/#stylevalue-subclasses)
- **Chromium Bug:** [https://issues.chromium.org/issues/534781956](https://issues.chromium.org/issues/534781956)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`

#### 📝 Overview

The CSS Typed OM spec exposes the CSSStyleValue hierarchy to worker global scopes (\[Exposed=(Window, Worker, PaintWorklet, LayoutWorklet)\]), but Blink only exposed CSSStyleValue, CSSKeywordValue, CSSNumericValue, CSSUnitValue and CSSUnparsedValue to Window and the worklets. As a result these constructors were undefined in Workers, unlike in Firefox and Safari.

> **Motivation:** Aligns Chrome with the spec's \[Exposed\] set and removes a cross‑thread inconsistency (these constructors are currently undefined in workers); enables off‑main‑thread CSS value manipulation

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 100)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"CSSStyleValue worker scope site:chromestatus.com"`, `""Expose CSSStyleValue hierarchy to Worker contexts" blink-dev"`, `"CSSStyleValue worker webkit bugzilla gecko bugzilla"`
- **Analysis:** Shipping in Chrome 154, exposing the CSSStyleValue hierarchy to Worker scopes resolves a long-standing omission where Blink previously only exposed these constructors to Window and Houdini worklets. This update completes cross-engine alignment with the CSS Typed OM Level 1 specification, bringing Chromium up to parity with Firefox and Safari. As a result, web developers can now reliably construct and manipulate Typed OM objects off the main thread across all modern browser engines.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams performing off-main-thread style processing or OffscreenCanvas text/geometry computations can now safely use CSSStyleValue subclasses in Web Workers. However, if supporting legacy Chromium builds (Chrome &lt; 154), guard usage with standard constructor presence checks (e.g., \`'CSSNumericValue' in self\`) or fallback to string-based computations.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17113.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker context...
- [Re: \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17119.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker...
- [CSS style hierarchy - DEV Community](https://dev.to/iraamoni/css-style-hierarchy-6dg) *(dev.to · 2019-12-07T12:21:14)*
  > CSS style hierarchy - DEV Community Skip to content Powered by Algolia Log in Create account DEV Community Add reaction Like Unicorn Exploding Head Raised Hands Fire Jump to Comments Save Boost Pick as gem Copy link Copi...
- [CSS Specificity Hierarchy](https://www.w3schools.com/css/css_specificity_hierarchy.asp) *(w3schools.com)*
  > CSS Specificity Hierarchy Menu Search field &times; See More NEW W3Schools app iOS & Android App Sign In Sign Up --> user-anonymous --> --> &#x2605; +1 --> My W3Schools --> user-authenticated --> Spaces Upgrade Paid Cour...
- [CSS articles • Josh W. Comeau](https://www.joshwcomeau.com/css) *(joshwcomeau.com)*
  > CSS articles • Josh W. Comeau Josh W Comeau CSS 30 Articles Getting Started with Anchor Positioning For decades, one of the most notoriously-challenging problems on the web has been sticking one element to another elemen...
- [Contextually Styling Components - A Frehner Site](https://frehner.me/blog/contextual-styles) *(frehner.me · 2026-02-13T00:00:00)*
  > When working in a component design system, it&#x27;s common to expose a property/attribute (I&#x27;ll just call these props from now on) for your component that changes the way it looks. For example, variant=&quot;filled...

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=css-typed-om) (406 test path(s) matching `css-typed-om`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (47 found across 10 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (406 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **High** (Activity Score: 100)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""FontFace" "font-width" "font-stretch" chrome blink-dev"`
- **Analysis:** Chromium 154 exposes the \`FontFace.width\` attribute and \`@font-face font-width\` descriptor, closing a specification conformance gap by treating them as official modern aliases for \`stretch\` and \`font-stretch\`. The change directly aligns Chromium with CSS Fonts Module Level 4 and CSS Font Loading, resolving persistent Web Platform Test (WPT) failures. Engine alignment is progressing smoothly, with Firefox already shipping the modern descriptor while WebKit has yet to signal its implementation timeline.

**Key Recommendations & Takeaways:**
- Actionable Advice: Maintain \`font-stretch\` and \`FontFace.stretch\` as defensive defaults or aliases in production stylesheets and font loaders until \`font-width\` reaches universal Baseline status. Teams targeting modern evergreen Chromium and Firefox environments can safely begin adopting \`FontFace.width\` without risking legacy breaks.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **1 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGpmK4EWIX2V3elfPj-LBb7XBrBE4uU8_E69Y2GtAKzRUxmiwQszONC6MLgiD6q8BIMlyf8mXe6zYtomSIYohghp0RFIDhW2Wh-DnfVwQp1WB99nvrORQez) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`FontFace.width` attribute** and the **`@font-face font-width` descriptor** align modern browser implementations with the updated **CSS Fonts Module Level 4** and **CSS Font Loading** sp...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG2x9Qm930fMLTJ00PkIDccAMlZtM6PNy9PXCso5RrvNyoWZYeF3pUVvztkKy7uxnUus63KL0uGNfFM0UlpoLeg-fKLXRGYt-vOx7S6s9ny_ekmZiEPNZH8tJWnnEiKyxIUuNNH0ltfBQ2zHmvSogYN3ssJipMKGK5xsapXnGQmbVqYPcOQ) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`FontFace.width` attribute** and the **`@font-face font-width` descriptor** align modern browser implementations with the updated **CSS Fonts Module Level 4** and **CSS Font Loading** sp...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGBWHrfxW6g8jP7u2aVWgJTq-3B8_jzIFV_ZEvUBedIg7qtLAE6RBTYtSvH0dt_gFyz3JcgsT1wnZSLyzcG4aoPZn3CS0f2OB_4P9YnRNcMXiDsY3f2nVOQxL3BJtavES_E53RvQAhMzKW0ihu6CoSdLC35hkSWz7S7w99Q0w==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`FontFace.width` attribute** and the **`@font-face font-width` descriptor** align modern browser implementations with the updated **CSS Fonts Module Level 4** and **CSS Font Loading** sp...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHfArNXTIL7RvI5fti6pgjE4hEfkUXMwb2kWXWNojiBhL_oUBNWVmH0c3TTL1_6lBVfo5pyvQ9pzb59jQhCPlmIGU3lnRtrQ7qBCI3vI0-N9I-asMq8Di6ZMirlfGIMdXp84dtM_GOflSnrAcJN2vPE1SIQIennC9GBs4f4-jrUnaUDzG5OsQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`FontFace.width` attribute** and the **`@font-face font-width` descriptor** align modern browser implementations with the updated **CSS Fonts Module Level 4** and **CSS Font Loading** sp...
- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17211.html) *(mail-archive.com)*
  > Please list open issues (e.g. links to known github issues in the project for the feature specification) whose resolution may introduce web compat/interop risk (e.g., changing to naming or structure of the API in a non-b...
- [\[blink-dev\] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)*
  > Adoption expectation Feature is ... font face width descriptors within 12 months of reaching Web Platform baseline. Adoption plan Web Platform Tests (WPT) have been added to ensure cross-browser interoperability. MDN doc...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17211.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > Please list open issues (e.g. links to known github issues in the project for the feature specification) whose resolution may introduce web compat/interop risk (e.g., changing to naming or structure of the API in a non-b...

#### 📚 Platform Documentation & References

- [font-width CSS at-rule descriptor - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-width) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=css-fonts) (560 test path(s) matching `css-fonts`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (41 found across 7 planned queries, 6 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 4 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (560 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5191512456560640-import-text-text-modules"></a>
### [Import Text (Text Modules)](https://chromestatus.com/feature/5191512456560640)

- **Milestone:** Chrome 155 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5191512456560640](https://chromestatus.com/feature/5191512456560640) · [chromestatuslite.com/feature/5191512456560640](https://chromestatuslite.com/feature/5191512456560640)
- **Specification:** [https://tc39.es/proposal-import-text](https://tc39.es/proposal-import-text)
- **Chromium Bug:** [https://issues.chromium.org/issues/494350643](https://issues.chromium.org/issues/494350643)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `In development`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/text-modules) (Chrome: `—`, Firefox: `153`, Safari: `—`)

#### 📝 Overview

A TC39 proposal to add module \`import … with { type: "text" }\` statements to JavaScript. The import attribute loads text data as a string value.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 100)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Intent to Ship" "Import Text" OR "Text Modules" blink-dev"`, `""proposal-import-text" tc39"`, `""text modules" tc39 import attributes"`
- **Analysis:** The Import Text proposal (Text Modules) standardizes \`import str from './file.txt' with { type: 'text' }\`, enabling developers to load textual assets directly into JavaScript as UTF-8 string values. Reaching Stage 3 at TC39, the feature has achieved rapid multi-engine momentum by shipping enabled by default in Firefox 153 and Chrome 155. Full cross-browser baseline status is now gated only by WebKit, where active engine implementation is underway.

**Key Recommendations & Takeaways:**
- Actionable Advice: In modern Node.js or Chromium/Firefox-only environments, teams can safely begin using native text imports, but general web applications should continue relying on bundler transformations (such as Vite or esbuild raw text loaders) until Safari ships baseline support. If running unbundled ES modules in production, provide a runtime fallback via \`fetch().then(r =&gt; r.text())\` for unsupported browsers.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17364.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Import Text (Text Modules) Nikolaos Papaspyrou Thu, 03 Sep 2026 12:54:19 -0700 *Contact emails* [em...
- [Re: \[blink-dev\] Intent to Ship: Import Text (Text Modules)](http://www.mail-archive.com/blink-dev@chromium.org/msg17403.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Import Text (Text Modules) Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Import Text (Text Modules) Daniel Bratell Wed, 09 Sep 2026 07:34:24 -0700 LGTM1 (Stage 3 TC...
- [HTML CSS JavaScript - Free Online Editors and Tools](https://html-css-js.com) *(html-css-js.com)*
  > Free online HTML, CSS and JavaScript live editor. HTML, CSS and JS are the parts of all websites that users directly interact with. Our free online tool collection
- [CSSStyleDeclaration cssText Property](https://www.w3schools.com/jsref/prop_cssstyle_csstext.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [jquery - How do i use 'cssText' in javascript? - Stack Overflow](https://stackoverflow.com/questions/46356331/how-do-i-use-csstext-in-javascript) *(stackoverflow.com)*
  > I got an error message &quot;Uncaught TypeError: Cannot set property &#x27;cssText&#x27; of undefined&quot; My Code: var div = $(&#x27;.postImg2&#x27;) var img = $(&#x27;.postInner2&#x27;); var divAspect = 20 / 50; var i...
- [Import and export store listings for PWA - Windows apps \| Microsoft Learn](https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/pwa/import-and-export-store-listings) *(learn.microsoft.com)*
  > <strong>The Type column provides general guidance about what type of info to provide for that field, such as Text or Relative path (or URL to file in Partner Center).</strong>

#### 🔗 Inbound Citations & Reverse Links

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-23 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0003.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11933`)*
  > y keithamus) https://github.co... - #11965 Move the allow declarative shadow roots flag to the parser (1 by foolip) https://github.com/whatwg/html/pull/11965 - #11933 <strong>Add text imports</strong> (3 by annevk, eemel...

#### 📚 Platform Documentation & References

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-03-23 (public-html@w3.org from March 2026)](https://lists.w3.org/Archives/Public/public-html/2026Mar/0003.html) *(lists.w3.org)*
- [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) *(developer.mozilla.org)*
- [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) *(developer.mozilla.org)*
- [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=import) (2075 test path(s) matching `import`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (33 found across 10 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (2075 items)
- **Content Inspected:** Spec: ✔ · Explainers: 3 · Standards Comments Read: 0

---

<a id="4683382919397376-deprecate-and-remove-private-aggregation-api"></a>
### [Deprecate and remove: Private Aggregation API](https://chromestatus.com/feature/4683382919397376)

- **Milestone:** Chrome 152 (Deprecated)
- **ChromeStatus:** [chromestatus.com/feature/4683382919397376](https://chromestatus.com/feature/4683382919397376) · [chromestatuslite.com/feature/4683382919397376](https://chromestatuslite.com/feature/4683382919397376)
- **Specification:** [https://patcg-individual-drafts.github.io/private-aggregation-api](https://patcg-individual-drafts.github.io/private-aggregation-api)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

The Private Aggregation API is a generic mechanism for measuring aggregate, cross-site data in a privacy preserving manner. It was originally designed for a future without third-party cookies.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Private Aggregation API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page\[0\]). This API is only exposed via the Shared Storage and Protected Audience APIs, which are also planned to be deprecated and removed. So, no additional work will be required for Private Aggregation.  \[0\]: https://privacysandbox.google.com/overview/status

> **Motivation:** Chrome has announced\[0\] that the current approach to third-party cookies will be maintained. Given this, we expect adoption of the Private Aggregation API to decrease over time as cross-site measurement will remain possible in Chrome using third-party cookies. Further, other browser engines have not signaled interest in launching the API. Removing ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 90)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Deprecate and remove: Private Aggregation API is currently Deprecated in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Marked for deprecation in Chrome 152. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove: Private Aggregation API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Ld7avyD0U0Q) *(groups.google.com · 2025-11-07T00:00:00)*
  > Intent to Deprecate and Remove: Private Aggregation API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprec...
- [Deprecate and remove: Private Aggregation API](https://chromestatus.com/feature/4683382919397376) *(chromestatus.com · 2025-10-21T00:00:00)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg15188.html) *(mail-archive.com)*
  > &gt; &gt; Following Chrome&#x27;s announcement that the current approach to third-party &gt; cookies will be maintained, <strong>we are now planning to deprecate and remove the &gt; Private Aggregation API</strong> (alon...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg16758.html) *(mail-archive.com)*
  > Hi API Owners, <strong>Private Aggregation API was deprecated in M144 with a plan to remove it in M150</strong>.
- [\[blink-dev\] Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg15139.html) *(mail-archive.com)*
  > False Estimated milestones <strong>Deprecate in M144 and then remove in M150</strong>. There will be one aspect of the API that will end sooner. Server-side &lt;https://privacysandbox.google.com/private-advertising/aggre...
- [Chrome 152 removes Private Aggregation, two milestones later than the intent said — XT.PT](https://xt.pt/software/chrome-152-removes-private-aggregation-two-milestones-later-than-the-intent-said) *(xt.pt · 2026-08-29T09:36:17)*
  > <strong>The removal was filed on the Blink developer list on November 7, 2025 by Alex Turner, as an &quot;Intent to Deprecate and Remove: Private Aggregation API.&quot;</strong> The intent named a schedule: deprecation i...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Deprecate and Remove: Private Aggregation API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Ld7avyD0U0Q) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/4683382919397376`)*
  > Intent to Deprecate and Remove: Private Aggregation API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprec...
- [Deprecate and remove: Private Aggregation API · Issue #1326 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1326) *(github.com · 2026-08-14T17:31:48)* *(Cites: `https://chromestatus.com/feature/4683382919397376`)*
  > Deprecate and remove: Private Aggregation API · Issue #1326 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sig...

#### 📚 Platform Documentation & References

- [Deprecate and remove: Private Aggregation API · Issue #1326 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1326) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=deprecate) (27 test path(s) matching `deprecate`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (42 found across 7 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(HTTP 400)* · `Dev.to Community Blogs` (7 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (27 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5075054393163776-gamepad-button-type-attribute"></a>
### [Gamepad button type attribute](https://chromestatus.com/feature/5075054393163776)

- **Milestone:** Chrome 152 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5075054393163776](https://chromestatus.com/feature/5075054393163776) · [chromestatuslite.com/feature/5075054393163776](https://chromestatuslite.com/feature/5075054393163776)
- **Specification:** [https://pr-preview.s3.amazonaws.com/xingri/gamepad/pull/196.html#gamepadbuttontype-enum](https://pr-preview.s3.amazonaws.com/xingri/gamepad/pull/196.html#gamepadbuttontype-enum)
- **Chromium Bug:** [https://crbug.com/339841686](https://crbug.com/339841686)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Gamepad API defines standard indices for 17 common gamepad buttons. The GamepadButton type attribute provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like "trackpad".

> **Motivation:** Gamepad API should provide an interoperable way to identify common buttons that are not included in the standard set of buttons, particularly the trackpad button that appears on PlayStation gamepads.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 80)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"GamepadButton type attribute trackpad"`, `"Gamepad button type attribute intent to prototype"`, `"site groups google com a chromium org g blink dev Gamepad button type attribute"`
- **Analysis:** The GamepadButton.type attribute extends the W3C Gamepad API beyond the rigid 17-button 'standard' layout to provide semantic, interoperable identifiers for auxiliary inputs like PlayStation trackpad clicks. Currently progressing through a Developer Trial behind the \`GamepadButtonTypes\` flag in Chromium (milestone 152), the feature originates from W3C Gamepad Working Group PR #196. Broad cross-browser consensus is still forming, but the extension directly targets a persistent compatibility gap in web gaming and streaming platforms.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web developers should treat the \`type\` attribute strictly as progressive enhancement, testing extended controller mappings in Chrome using \`--enable-blink-features=GamepadButtonTypes\`. Keep robust heuristic fallbacks (such as vendor/product ID checks against button array indices) in production code until multi-engine consensus and default shipping are established.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEq65ZprmNY2LD956v6c5JI0fEwxB9Q8JR8O6tusPrVEgldTAzMjk52utMkQib55rF_Rm8XIY9MU-EOdljlzDoToh5vI5cVkqfMnYQb_jknW_B1NPpPDHrjqp5raXjTPKgQHNbt) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard Gamepad API specification defines a fixed set of 17 standard button indices (indices 0 through 16), which map common controller buttons such as face buttons, bumpers, triggers, st...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHZy8IihQmo-d3w6amh9RnjFTIHflsFJ0z3EzILxQ4IOUqoYoRp_d1VBXiLzDffHfQwYI46KIT1vugKDezwK75jafSBWe4055Rw-iCrxHe41hyqPvH0Vqyqmwts_96ZSPP6nUwI8wPs2kJw8zRLD6nMkOradoOML-lhnYmNkQmnNlv3) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard Gamepad API specification defines a fixed set of 17 standard button indices (indices 0 through 16), which map common controller buttons such as face buttons, bumpers, triggers, st...
- [polypane.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG4Oifslre26WpZT0ShoCLO-Dxt9Q3ldfwJ3l9TpN8_zvLAvCQODvkCLcWdY968nzJMzq49kUJ3JOA3JDp0rfvDA3wAibOR76965XLmcu9ENajdiljKVYob3ZhCqaUQS2f1njRFYN5wPgkcSJOKJw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard Gamepad API specification defines a fixed set of 17 standard button indices (indices 0 through 16), which map common controller buttons such as face buttons, bumpers, triggers, st...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE4y5IPt5FzHfFFokSuRz5muFUvZMhrHz4QCNuVad6JujzYYQBs4lsceNhebRjXwu6afoztlXaZjJSSY3bK__ux4SDNy9cJbN7GWVz_W91tJGQrNLNTe7zhMXAQjLeCHDzeHvVBJlpGR0I9qNkrUvo-J_jb) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard Gamepad API specification defines a fixed set of 17 standard button indices (indices 0 through 16), which map common controller buttons such as face buttons, bumpers, triggers, st...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFKCeAw5pH7yBNsDHwO3-tGAP_YPhpCVksnLOipDRCbbtttlkHXddky3i512si01_gOITerMBcWL8Mv8eo-X2tYkwfZleQqSuAcT0gwleozkBLNxMSgvpWiCLJHxhxligkwlbutBq_Wt7O4zBMAKsxfTsyc) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard Gamepad API specification defines a fixed set of 17 standard button indices (indices 0 through 16), which map common controller buttons such as face buttons, bumpers, triggers, st...
- [\[blink-dev\] Intent to Prototype: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17054.html) *(mail-archive.com)*
  > Explainer https://xingri.githu... gamepad buttons. The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpa...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17054.html) *(mail-archive.com)* *(Cites: `https://xingri.github.io/gamepad-button-type`)*
  > Explainer https://xingri.githu... gamepad buttons. The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpa...
- [\[blink-dev\] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17052.html) *(mail-archive.com)* *(Cites: `https://xingri.github.io/gamepad-button-type`)*
  > Explainer https://xingri.githu... gamepad buttons. The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpa...
- [Re: \[blink-dev\] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17055.html) *(mail-archive.com)* *(Cites: `https://xingri.github.io/gamepad-button-type`)*
  > On Thu, Jul 23, 2026 at 3:39 PM ...w.s3.amazonaws.com/xingri/gamepad/pull/196.html#gamepadbuttontype-enum &gt; &gt; *Summary* &gt; <strong>Gamepad API defines standard indices for 17 common gamepad buttons</strong>....

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=196) (11 test path(s) matching `196`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (27 found across 7 planned queries, 3 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 5 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (11 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5121089536262144-remove-non-standard-navigations-targeted-at-_current"></a>
### [Remove non-standard navigations targeted at \_current](https://chromestatus.com/feature/5121089536262144)

- **Milestone:** Chrome 153 (Deprecated)
- **ChromeStatus:** [chromestatus.com/feature/5121089536262144](https://chromestatus.com/feature/5121089536262144) · [chromestatuslite.com/feature/5121089536262144](https://chromestatuslite.com/feature/5121089536262144)
- **Specification:** [https://html.spec.whatwg.org/#the-rules-for-choosing-a-navigable](https://html.spec.whatwg.org/#the-rules-for-choosing-a-navigable)
- **Chromium Bug:** [https://crbug.com/539212797](https://crbug.com/539212797)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`

#### 📝 Overview

Blink currently supports navigations targeted at "\_current", this feature should be removed as it is non-standard.  Usage of this feature is minimal (less than ~0.00009%), see https://chromestatus.com/metrics/feature/timeline/popularity/2835.

> **Motivation:** This feature is not used at all and is non-standard. It's confusing to ahve it supported in a single browser engine, so this feature removes it.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (Activity Score: 75)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Remove non-standard navigations targeted at \_current is currently Deprecated in Chrome 153. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

**Key Recommendations & Takeaways:**
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "@TWBChris @I\_luv\_Ice @BoqPrecision X has ~550 million monthly active users. Accounts posting harsh or disability-focused" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **8 new community discussions** found

#### 💬 Community Discussions & Developer Reactions

- 🐦 [@TWBChris @I\_luv\_Ice @BoqPrecision X has ~550 million monthly active users. Accounts posting harsh or disability-focused](https://twitter.com/grok/status/2107033638990705047) — *Twitter / X by @grok (0 likes/RTs, 0 replies)*
- 🐦 [and trying to figure out how to explain himself and his "accidental" repost. Accidental in quotes because there is still](https://twitter.com/b__abylon/status/2107032651802796463) — *Twitter / X by @b__abylon (0 likes/RTs, 1 replies)*
- 🐦 [Most people are watching the green candles. I'm watching 0.000075. Hold it → 0.000085–0.00009 becomes interesting. Lose ](https://twitter.com/evgen_krt/status/2106889108203384995) — *Twitter / X by @evgen_krt (1 likes/RTs, 0 replies)*
- 🐦 [$PRVX has one job now: reclaim $0.00009 👀  Below it = still weak Above it = bullish structure starts coming back  $0.00](https://twitter.com/RealIMMORTAL333/status/2106781992662581613) — *Twitter / X by @RealIMMORTAL333 (28 likes/RTs, 1 replies)*
- 🐦 [TART ✅ $0.1\_$1 CREPE ✅ $0.01\_$0.1 WKC ✅ $0.00005\_$0.00009 OCICAT ✅ $0.000005  Don't lose focus especially on these proje](https://twitter.com/MrPrinceD35870/status/2106735666839060843) — *Twitter / X by @MrPrinceD35870 (0 likes/RTs, 0 replies)*
- 🐦 [Good Morning 🍰☕  A total of 13 people minted Diamond, including me. For every Diamond minted, I received 0.00009 ETH in](https://twitter.com/Voojdab/status/2106642625956594050) — *Twitter / X by @Voojdab (38 likes/RTs, 25 replies)*
- 🐦 [🟡 躺赢 · BNB Chain MC $78K  躺赢 just caught a fresh eyeball on BNB Chain with a slick entry under 0.00009. The 78K market ](https://twitter.com/Kylie20262/status/2106639526475227176) — *Twitter / X by @Kylie20262 (0 likes/RTs, 0 replies)*
- 🐦 [@AshutoshRanka Ek chatukar sar par baal kam hain unke, aaj TV channel par bolenge, ye 0.00009% of Gen Z bhi nahi hain 🙂](https://twitter.com/arung20012012/status/2106214102893044128) — *Twitter / X by @arung20012012 (1 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGUf_lDhR5KIWyQw3Y0LQU01tfUjCUZTQSir1wNfo6ckbuVMZVqpIja0JBnD_mJsgJm-rGkSuFflMDvbiiLrcaQFH3JKesDelFlq1_45Io61ZqVDElJajmW9v_jAzE0dytVx9NKYcpf) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH_58WgylN3yYmIGufbSPFWO19hSeN7QIjEiBAnmDN3CZ7cBnX-lOQjHbolOE4Es5aRQFFP10Ex0ATGH2_6jUCYddFn1pQVMdn9krHKKF6TfV3C1ClpyoJCzjJi4GH1afU=) *(vertexaisearch.cloud.google.com)*
  > Chrome 153 Release Notes - Chrome Platform Status Chrome 153 Release Notes Preview Scheduled Stable Release September 8, 2026 DOM Capability elements: <camera> and <microphone> # Link copied! The <camera> and <microphone...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFj2521Z_bCFNm6j0wUzk5P5B99Bti8_SvM5KUypWEW6l2pVUc4rJCxMnzMbBgdg2Z__gb0iF6mk2K-9EfBXu8V_fCVs5RzmtAfvlzDg_BiAnG_ARL4MpRn1n0kUnq7aD8xGDy6MSG8) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > Usage of this feature is minimal (less than ~0.00009%), see https://chromestatus.com/metrics/feature/timeline/popularity/2835.

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=html) (114452 test path(s) matching `html`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 11 planned queries, 1 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 3 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (114452 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5148774971342848-webtransport-datagram-readable-stream-type"></a>
### [WebTransport Datagram readable stream type](https://chromestatus.com/feature/5148774971342848)

- **Milestone:** Chrome 155 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5148774971342848](https://chromestatus.com/feature/5148774971342848) · [chromestatuslite.com/feature/5148774971342848](https://chromestatuslite.com/feature/5148774971342848)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransportoptions-datagramsreadabletype](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-datagramsreadabletype)
- **Chromium Bug:** [https://issues.chromium.org/issues/547572475](https://issues.chromium.org/issues/547572475)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `In development`

#### 📝 Overview

Adds the  WebTransportOptions.datagramsReadableType  constructor option. By default, incoming WebTransport Datagrams are exposed through a default  ReadableStream . Applications that require BYOB reading can request a readable byte stream by setting  datagramsReadableType: "bytes" .

> **Motivation:** WebTransport Datagrams are discrete messages rather than an undifferentiated byte sequence. A readable byte stream can lose empty Datagrams and can lose message boundaries when BYOB reads use a minimum byte count spanning multiple Datagrams.  Making a default  ReadableStream  the default preserves Datagram boundaries and empty Datagrams. Applicatio...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (Activity Score: 70)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""datagramsReadableType" "WebTransportOptions""`, `""WebTransport" "datagramsReadableType""`, `""WebTransport Datagram readable stream type""`, `""datagramsReadableType" "issue" "w3c""`
- **Analysis:** The \`WebTransportOptions.datagramsReadableType\` option standardizes incoming datagram delivery by defaulting to a standard \`ReadableStream\` to safeguard packet boundaries and 0-byte datagrams, while allowing performance-sensitive apps to opt into a readable byte stream (\`"bytes"\`) for zero-copy BYOB reads. Currently in developer trial behind a flag in Chromium (Chrome 155), the feature catches Blink up to the W3C WebTransport Candidate Recommendation. Engine alignment is strong, with WebKit actively implementing the spec changes and exporting upstream test suites.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building with WebTransport should rely on the default \`ReadableStream\` behavior for discrete message preservation unless memory profiling demonstrates a clear bottleneck. If zero-copy BYOB pooling is required, test \`datagramsReadableType: "bytes"\` under experimental flags in Chrome 155+ and ensure protocol designs avoid emitting zero-byte payload datagrams to avoid stream errors.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: WebTransport Datagram readable stream type Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: WebTransport Datagram readable stream type Chromestatus Mon, 14 Sep 2026 ...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com)*
  > By default, incoming WebTransport Datagrams are exposed through a default ReadableStream . <strong>Applications that require BYOB reading can request a readable byte stream by setting datagramsReadableType: &quot;bytes&q...
- [webtransport-bun \| Ecosystem Directory \| market.dev](https://explore.market.dev/ecosystems/typescript/projects/webtransport-bun) *(explore.market.dev)*
  > requireUnreliable: accepted; satisfied ... with allowPooling: true. datagramsReadableType: <strong>&quot;bytes&quot; uses ReadableByteStream with BYOB; &quot;default&quot; uses normal ReadableStream</strong>....
- [WebTransport](https://triple-underscore.github.io/webtransport-ja.html) *(triple-underscore.github.io · 2026-04-01T00:00:00)*
  > %~datagram可読~stream種別 ~LET ... datagramsReadableType be options’s datagramsReadableType. %流入~datagram群 ~LET `新たな~obj$( `ReadableStream$I ) ◎ Let incomingDatagrams be a new ReadableStream. %~transport ~LET `新たな~obj$( `Web...
- [WebTransport](https://w3c.github.io/webtransport) *(w3c.github.io · 2021-10-01T12:35:03)*
  > Note: Using 64 kibibytes buffers ... than the buffer. If datagramsReadableType is &quot;bytes&quot;, <strong>set up with byte reading support incomingDatagrams with pullAlgorithm set to pullDatagramsAlgorithm, and highWa...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md`)*
  > [blink-dev] Intent to Prototype: WebTransport Datagram readable stream type Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: WebTransport Datagram readable stream type Chromestatus Mon, 14 Sep 2026 ...

#### 📚 Platform Documentation & References

- [\`pullDatagrams\` errors \`datagrams.readable\` on a zero-length datagram when \`datagramsReadableType\` is \`"bytes"\` · Issue #795 · w3c/webtransport](https://github.com/w3c/webtransport/issues/795) *(github.com)*
- [GitHub - vmeansdev/webtransport-bun: Production-focused WebTransport for Bun, powered by a Rust napi-rs addon (wtransport). In-process server and client, datagrams + uni/bidi streams, Chromium interop, bounded queues/backpressure defaults, and runnable examples (local, Docker, and Compose) for real-time systems beyond WebSockets. · GitHub](https://github.com/vmeansdev/webtransport-bun) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webtransport) (119 test path(s) matching `webtransport`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (40 found across 13 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (119 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5159559872249856-js-profiling-in-dedicated-workers"></a>
### [js-profiling in dedicated workers](https://chromestatus.com/feature/5159559872249856)

- **Milestone:** Chrome 154 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5159559872249856](https://chromestatus.com/feature/5159559872249856) · [chromestatuslite.com/feature/5159559872249856](https://chromestatuslite.com/feature/5159559872249856)
- **Specification:** [https://wicg.github.io/js-self-profiling/#the-profiler-interface](https://wicg.github.io/js-self-profiling/#the-profiler-interface)
- **Chromium Bug:** [https://issues.chromium.org/issues/482085416](https://issues.chromium.org/issues/482085416)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Allows js-profiling in dedicated workers  This feature enables the JavaScript Self‑Profiling (js-profiling) API in Dedicated Workers, while remaining gated by Document Policy. It allows developers to obtain low‑overhead CPU attribution for JavaScript execution in workers, with Document Policy support for workers tracked separately.

> **Motivation:** Modern web applications increasingly offload performance‑critical work to Dedicated Workers to keep the main thread responsive. While the JavaScript Self‑Profiling API provides low‑overhead CPU attribution for JavaScript execution, it is currently unavailable in workers due to its reliance on Document Policy, leaving developers without visibility i...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (Activity Score: 65)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** js-profiling in dedicated workers is currently In developer trial (Behind a flag) in Chrome 154. Verified ecosystem momentum is Moderate with Chromium-Led standards alignment and cautiously optimistic developer pulse.

**Key Recommendations & Takeaways:**
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Con...
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)*
  > Explainer https://github.com/M...umentPolicyInWorkers.md Summary <strong>Allows js-profiling in dedicated workers This feature enables the JavaScript Self‑Profiling (js-profiling) API in Dedicated Workers, while remainin...

#### 🔗 Inbound Citations & Reverse Links

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com · 2026-09-14T08:09:52)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Con...
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: [blink-dev] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/js-self-profiling/#the-profiler-interface`)*
  > Explainer https://github.com/M...umentPolicyInWorkers.md Summary <strong>Allows js-profiling in dedicated workers This feature enables the JavaScript Self‑Profiling (js-profiling) API in Dedicated Workers, while remainin...

#### 📚 Platform Documentation & References

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [js-profiling in dedicated workers Demo](https://docs.google.com/document/d/1prxxuck3NDqOjuhMkT8vykV9Fl3IQyUzdESQdxz_7pg/edit?tab=t.0)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=js-self-profiling) (26 test path(s) matching `js-self-profiling`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (41 found across 8 planned queries, 5 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (15 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (26 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5214647044145152-avoid-caching-module-failures"></a>
### [Avoid caching module failures](https://chromestatus.com/feature/5214647044145152)

- **Milestone:** Chrome 156 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5214647044145152](https://chromestatus.com/feature/5214647044145152) · [chromestatuslite.com/feature/5214647044145152](https://chromestatuslite.com/feature/5214647044145152)
- **Specification:** [https://github.com/whatwg/html/pull/10327](https://github.com/whatwg/html/pull/10327)
- **Chromium Bug:** [https://issues.chromium.org/issues/534781954](https://issues.chromium.org/issues/534781954)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`

#### 📝 Overview

Currently web developers cannot retry failed module loads, as these failures are being cached (and retries just result in immediate failures). This change to the module loading behavior enables failed module loads to be manually retried (e.g. by calling \`import()\` again), solving real developer (and user) pain when it comes to using modules over unstable networks.

> **Motivation:** This change enables developers to retry failed module loads (e.g. due to network failures).

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (Activity Score: 60)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Avoid caching module failures" blink dev OR github"`, `""Don't cache HTTP errors in the module map" whatwg html pull 10327"`
- **Analysis:** This specification change (WHATWG HTML #10327) updates the module loading pipeline so browsers no longer cache HTTP and network fetch failures in the module map, allowing dynamic \`import()\` to be retried after transient connectivity issues. It eliminates a longstanding web architectural flaw where a single temporary network blip permanently broke module-dependent flows until a complete hard page refresh. The change has achieved rapid multi-engine consensus, landing enabled by default in Chrome 156 alongside parallel adoption in Firefox and WebKit.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can begin adopting retry wrappers (e.g., exponential backoff dynamic \`import()\` helpers) for lazy-loaded routes and components to improve resilience over unstable networks. However, ensure legacy fallbacks (like full-page reload on failure) remain in place for older browser versions that still permanently memoize failed module fetches.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17434.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 12:16:49 -0700 On T...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 08:43:49 -0700 *Contact ema...

#### 🔗 Inbound Citations & Reverse Links

- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com · 2026-09-14T08:09:53)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17434.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > Re: [blink-dev] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 12:16:49 -0700 On T...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > [blink-dev] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 08:43:49 -0700 *Contact ema...
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/whatwg/html/pull/10327`)*
  > 2055211 - Don't cache HTTP errors in the module map Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advanced Search New Bug Reports D...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-03 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0000.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/10327`)*
  > (2 by josepharhar, tabatkins) ... - #12444 Add `&lt;meta name=&quot;responsive-embedded-sizing&quot;&gt;` (1 by zcorpan) https://github.com/whatwg/html/pull/12444 [agenda+] - #10327 Don&#x27;t cache HTTP errors in the mo...

#### 📚 Platform Documentation & References

- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com)*
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-03 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0000.html) *(lists.w3.org)*
- [Avoid caching module failures · Issue #4335 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4335) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=avoid) (90 test path(s) matching `avoid`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (38 found across 8 planned queries, 6 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (90 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5076374013476864-user-agent-image-replacement-api"></a>
### [User Agent Image Replacement API](https://chromestatus.com/feature/5076374013476864)

- **Milestone:** Chrome 152 (Origin trial)
- **ChromeStatus:** [chromestatus.com/feature/5076374013476864](https://chromestatus.com/feature/5076374013476864) · [chromestatuslite.com/feature/5076374013476864](https://chromestatuslite.com/feature/5076374013476864)
- **Specification:** [https://github.com/explainers-by-googlers/ua-image-replacement](https://github.com/explainers-by-googlers/ua-image-replacement)
- **Chromium Bug:** [https://issues.chromium.org/issues/544822216](https://issues.chromium.org/issues/544822216)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Modern browsers can provide capabilities to augment the browsing experience by modifying media in the page on behalf of the user. The advent of generative AI makes it more likely that browsers will add such features.  Sometimes, the replacement content added at the user request might not match other content and functionality in the page, which could confuse the user. Even if this cannot be completely avoided, if authors can observe when replacement happens they can adjust the document to mitigate confusion (e.g., by hiding or adjusting other content).  For example, a user browsing an e-commerce site with a generic product image (e.g., a model wearing a jacket) might wish to imagine themselves wearing the item. The user agent uses generative AI technology to produce that image and present it in place of the model image. The page improves the user experience by removing text referring to the model's dimensions and the garment size depicted, as it may not be correct in the replacement image.

> **Motivation:** Modern browsers can provide capabilities to augment the browsing experience by modifying media in the page on behalf of the user. The advent of generative AI makes it more likely that browsers will add such features.  Sometimes, the replacement content added at the user request might not match other content and functionality in the page, which coul...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (Activity Score: 50)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""User Agent Image Replacement API" blink-dev"`, `""User Agent Image Replacement API""`, `""ua-image-replacement" github"`
- **Analysis:** The User Agent Image Replacement API is an experimental proposal entering Origin Trial in Chrome 152 through 157 that notifies web pages when browser-level generative AI features (such as virtual try-on or text translation) alter or replace image media. It exposes lifecycle events allowing developers to adjust surrounding UI—such as dismissing conflicting zoom overlays or model sizing details—to prevent user confusion. The API remains an early-stage sketch restricted to select Chrome pilot scenarios and lacks broader multi-engine consensus.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat this API purely as an experimental signal; e-commerce and media platforms testing generative AI integration can evaluate the Origin Trial in Chromium, but production workflows should rely on progressive enhancement and assume other engines will not expose these events.
- In active Origin Trial in Chrome 152. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📰 Ecosystem Blogs & Articles

- [\[Tracking\] UA Image Replacement API \[544822216\] - Chromium](https://issues.chromium.org/issues/544822216) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17146.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: User Agent Image Replacement API Chromestatus Tue, 11 Aug 2026 14:20:36 -0700 Con...
- [Re: \[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17192.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Alex Russell Mon, 17 Aug 2026 11...
- [\[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17157.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Alex Russell Wed, 12 Aug 2026 08:55:57 -...
- [\[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17163.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Jeremy Roman Wed, 12 Aug 2026 17:14:07 -...

#### 🔗 Inbound Citations & Reverse Links

- [\[Tracking\] UA Image Replacement API \[544822216\] - Chromium](https://issues.chromium.org/issues/544822216) *(issues.chromium.org)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17146.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > [blink-dev] Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: User Agent Image Replacement API Chromestatus Tue, 11 Aug 2026 14:20:36 -0700 Con...
- [Re: \[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17192.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Alex Russell Mon, 17 Aug 2026 11...
- [\[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17157.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Alex Russell Wed, 12 Aug 2026 08:55:57 -...

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=user) (477 test path(s) matching `user`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (36 found across 7 planned queries, 5 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Dev.to Community Blogs` (3 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (477 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="4882016087703552-webgpu-atomic-vec2u-min-max"></a>
### [WebGPU: atomic-vec2u-min-max](https://chromestatus.com/feature/4882016087703552)

- **Milestone:** Chrome 155 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/4882016087703552](https://chromestatus.com/feature/4882016087703552) · [chromestatuslite.com/feature/4882016087703552](https://chromestatuslite.com/feature/4882016087703552)
- **Specification:** [https://www.w3.org/TR/webgpu/#dom-gpufeaturename-atomic-vec2u-min-max](https://www.w3.org/TR/webgpu/#dom-gpufeaturename-atomic-vec2u-min-max)
- **Chromium Bug:** [https://crbug.com/453689550](https://crbug.com/453689550)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `Positive`

#### 📝 Overview

Allows the use of 64-bit atomic minimum and maximum operations on \`atomic&lt;vec2u&gt;\` in WGSL.  This provides WebGPU shader authors with a way to implement certain algorithms that use 64-bit atomics without requiring full support for 64-bit integers.

> **Motivation:** This provides WebGPU shader authors with a way to implement certain algorithms that use 64-bit atomics without requiring full support for 64-bit integers. Not every device that supports 64-bit atomics can support every atomic operation on these types, so this feature is scoped to the min and max operations to deliver broadest reach.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (Activity Score: 40)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"gpuweb "atomic-vec2u-min-max""`, `""atomic-vec2u-min-max""`, `"gpuweb atomic vec2u min max"`
- **Analysis:** The \`atomic-vec2u-min-max\` feature introduces 64-bit atomic minimum and maximum operations on \`atomic&lt;vec2u&gt;\` in WGSL storage buffers without requiring full 64-bit integer hardware support. It has reached formal consensus within the W3C GPU for the Web Working Group and secured Intent to Ship approval in Chromium (targeted around Chrome 155).

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat this as an optional hardware capability by querying \`adapter.features.has('atomic-vec2u-min-max')\` before requesting it at device creation. Use progressive enhancement or fallback to 32-bit atomic sorting passes where broader mobile hardware compatibility is necessary.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17534.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Alex Russell Wed, 23 Sep 2026 08:27:12 -0700 LGTM2 On Wednes...
- [\[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17518.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: atomic-vec2u-min-max Chromestatus Mon, 21 Sep 2026 14:43:50 -0700 Contact emails [email&#...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Vladimir Levin Wed, 23 Sep 2026 08:21:02 -0700 LGTM1 On Mond...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Daniel Bratell Wed, 23 Sep 2026 08:35:46 -0700 LGTM3...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17534.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4882016087703552`)*
  > [blink-dev] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Alex Russell Wed, 23 Sep 2026 08:27:12 -0700 LGTM2 On Wednes...
- [\[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17518.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > [blink-dev] Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: atomic-vec2u-min-max Chromestatus Mon, 21 Sep 2026 14:43:50 -0700 Contact emails [email&#...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > [blink-dev] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Vladimir Levin Wed, 23 Sep 2026 08:21:02 -0700 LGTM1 On Mond...
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Daniel Bratell Wed, 23 Sep 2026 08:35:46 -0700 LGTM3...

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webgpu) (1 test path(s) matching `webgpu`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (43 found across 8 planned queries, 4 verified) · `Google Search Grounding (gemini-3.8-flash)` (0 found, 0 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (1 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5427561449521152-suspicious-site-warnings"></a>
### [Suspicious site warnings](https://chromestatus.com/feature/5427561449521152)

- **Milestone:** Chrome 152 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5427561449521152](https://chromestatus.com/feature/5427561449521152) · [chromestatuslite.com/feature/5427561449521152](https://chromestatuslite.com/feature/5427561449521152)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Suspicious site warnings are a new feature for users of \*\*Safe Browsing &gt; Enhanced protection\*\*, to warn against potentially malicious sites.   In Chrome 152, when a user enrolled in enhanced Safe Browsing visits a site with signals to indicate that it is potentially malicious, a warning displays in a by-passable pop-up, which must be clicked before they can continue. This warning is in addition to the red interstitial warnings, which will continue to be shown on confirmed malicious websites. For more information, see \[Choose your Safe Browsing protection level in Chrome\](https://support.google.com/chrome/answer/13844634).  Admins can control this warning using the existing \[SafeBrowsingProtectionLevel\](https://chromeenterprise.google/policies/#SafeBrowsingProtectionLevel) policy. To exclude specific sites from triggering the warning, admins can add URLs to the \[SafeBrowsingAllowlistDomains\](https://chromeenterprise.google/policies/#SafeBrowsingAllowlistDomains) policy.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (Activity Score: 10)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Suspicious site warnings" Chrome Google Safe Browsing"`, `""Suspicious site warnings" Chrome Safe Browsing"`, `""Suspicious site warnings" "Chrome 152" OR "Enhanced protection""`
- **Analysis:** Suspicious site warnings is a browser-level security capability enabled in Chrome 152 for users enrolled in Safe Browsing Enhanced Protection. Rather than introducing a programmable JavaScript or CSS web platform API, it presents a bypassable modal dialog before navigating to sites exhibiting heuristic signals of potential maliciousness. As an internal Chromium security and UI enhancement tied to Google Safe Browsing, it does not follow a W3C/WHATWG specification path.

**Key Recommendations & Takeaways:**
- Actionable Advice: No code changes, web APIs, or polyfills are applicable, but site owners should monitor Google Search Console security reports and maintain transparent domain reputation practices to avoid triggering heuristic alerts. Enterprise teams should configure the \`SafeBrowsingAllowlistDomains\` policy to ensure internal applications and staging environments are not interrupted by pop-up prompts.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 📰 Ecosystem Blogs & Articles

- [malwaretips.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEG3ONRMrPppI5slpQG06EpZxH6NlDs1ZDcH6IkrzGp8Hjy56lja2-P9Gi9qnzZAaa7MmZ31nNWn9o3sYnte9AKA_2wnchk4rZA27WP5GSakIoXBAYQVDUfTrX-cneCRLwJmQvL0KL9PWwpeRX0eq6crfB2covQxq_U9v7_ZHNL) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **Suspicious site warnings** were introduced as a browser security feature in **Chrome 152** for users enrolled in **Safe Browsing > Enhanced protection**.   * **How it works:** When a user visits a website ...

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=site) (687 test path(s) matching `site`)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (46 found across 10 planned queries, 0 verified) · `Google Search Grounding (gemini-3.8-flash)` (4 found, 1 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (687 items)
- **Content Inspected:** Spec: ○ · Explainers: 0 · Standards Comments Read: 0

---

