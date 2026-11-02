# 🌐 Chrome Web Platform Ecosystem Report — 2026-W45

> **Generated on:** 2026-11-02 | **Target Milestones:** Chrome 154, 155, 156, 157, 158
> **Search Engine:** Gemini (Google Grounded) + BRAVE | **Analysis Model:** Google Gemini (gemini-3.8-flash) | **AI synthesis:** 63 of 63 features
> **Momentum:** Momentum is the change in footprint since about four weeks ago, in tiers relative to the other features (47 of 63 features have an earlier number to compare with).
> ⏱️ **Partial run:** The crawl reached its 40-minute deadline (42.9 minutes in) and stopped starting features: 63 of 83 were investigated, and the other 20 are not in this report. They come first in the next crawl.

## 📊 Executive Snapshot

| Metric | Count | Description |
| :--- | :--- | :--- |
| **Features Tracked** | `63` | APIs & platform features analyzed across milestones |
| **High Ecosystem Momentum** | `7` | Features in the highest momentum tier (see Methodology) |
| **Multi-Engine Consensus** | `17` | Broad alignment across Chromium, Gecko, and WebKit |
| **Contested / Concerns** | `5` | Features with open vendor or security/privacy objections |
| **New Mentions This Week** | `474` | Net new articles, discussions, or standards updates |

## ⚡ Week-over-Week Ecosystem Deltas

### 🔄 Status Transitions

- [Support for WebHID](#5172464636133376-support-for-webhid): Moved from *In developer trial (Behind a flag)* to **Enabled by default** in Chrome 158

### 📰 Net New Publications & Discussions

- [HTML-in-canvas](#5172548013916160-html-in-canvas): +16 article(s), 10 discussion(s)
- [Decisions API](#5155080092385280-decisions-api): +12 article(s)
- [Secure Payment Confirmation: Locale Validation](#5126146013396992-secure-payment-confirmation-locale-validation): +14 article(s)
- [Language Detector API on Android](#5087964794322944-language-detector-api-on-android): +11 article(s)
- [CSS flow-start and flow-end alignment keywords](#5069051687731200-css-flow-start-and-flow-end-alignment-keywords): +8 article(s)
- [FontFace width attribute and font-width descriptor](#5145402365050880-fontface-width-attribute-and-font-width-descriptor): +8 article(s)
- [Add javascriptURLs option to SanitizerConfig and Sanitizer](#5169798320357376-add-javascripturls-option-to-sanitizerconfig-and-sanitizer): +8 article(s)
- [CSS text-decoration-inset](#5178263526834176-css-text-decoration-inset): +9 article(s)
- [WebTransport receive stream](#5109912169480192-webtransport-receive-stream): +11 article(s)
- [Long Animation Frames style and layout duration](#5171478175809536-long-animation-frames-style-and-layout-duration): +8 article(s)

### ✨ Newly Tracked Features

- [Global Privacy Control in Chrome](#5095781286674432-global-privacy-control-in-chrome) (Chrome 157, Enabled by default)

---

## 📋 Features Index

| Feature | Milestone | Category | Momentum | Consensus | Week Delta |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [HTML-in-canvas](#5172548013916160-html-in-canvas) | Chrome 157 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +16 art / +10 msgs |
| [Decisions API](#5155080092385280-decisions-api) | Chrome 157 | `In developer trial (Behind a flag)` | **High** | Chromium-Led | ⚡ +12 art / +0 msgs |
| [Secure Payment Confirmation: Locale Validation](#5126146013396992-secure-payment-confirmation-locale-validation) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | ⚡ +14 art / +0 msgs |
| [Language Detector API on Android](#5087964794322944-language-detector-api-on-android) | Chrome 157 | `Enabled by default` | **High** | Contested / Concerns Raised | ⚡ +11 art / +0 msgs |
| [CSS flow-start and flow-end alignment keywords](#5069051687731200-css-flow-start-and-flow-end-alignment-keywords) | Chrome 158 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +8 art / +0 msgs |
| [FontFace width attribute and font-width descriptor](#5145402365050880-fontface-width-attribute-and-font-width-descriptor) | Chrome 154 | `Enabled by default` | **High** | Partial Multi-Engine Interest | ⚡ +8 art / +0 msgs |
| [Add javascriptURLs option to SanitizerConfig and Sanitizer](#5169798320357376-add-javascripturls-option-to-sanitizerconfig-and-sanitizer) | Chrome 157 | `Enabled by default` | **High** | Multi-Engine Consensus | ⚡ +8 art / +0 msgs |
| [CSS text-decoration-inset](#5178263526834176-css-text-decoration-inset) | Chrome 157 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +9 art / +0 msgs |
| [WebTransport receive stream](#5109912169480192-webtransport-receive-stream) | Chrome 158 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +11 art / +0 msgs |
| [Long Animation Frames style and layout duration](#5171478175809536-long-animation-frames-style-and-layout-duration) | Chrome 157 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +8 art / +0 msgs |
| [WebGPU: atomic-vec2u-min-max](#4882016087703552-webgpu-atomic-vec2u-min-max) | Chrome 157 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +6 art / +0 msgs |
| [Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](#5138797158334464-web-bluetooth-make-bluetoothremotegattserver-an-eventtarget) | Chrome 157 | `Enabled by default` | **Moderate** | Contested / Concerns Raised | ⚡ +6 art / +0 msgs |
| [Responsively-sized &lt;iframe&gt;](#5108373464547328-responsively-sized-iframe) | Chrome 154 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +11 art / +0 msgs |
| [Iterator Includes](#5205192866922496-iterator-includes) | Chrome 154 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +7 art / +0 msgs |
| [Local Network Access restrictions for Background Fetch](#6225598451154944-local-network-access-restrictions-for-background-fetch) | Chrome 154 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +5 art / +0 msgs |
| [Renewed HTML insertion&streaming methods](#5054329641893888-renewed-html-insertionstreaming-methods) | Chrome 157 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +8 art / +0 msgs |
| [Avoid caching module failures](#5214647044145152-avoid-caching-module-failures) | Chrome 156 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +4 art / +0 msgs |
| [Add options bag to WebSocket constructor](#5080055102439424-add-options-bag-to-websocket-constructor) | Chrome 154 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +5 art / +0 msgs |
| [Window Shape API](#5075144470036480-window-shape-api) | Chrome 154 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +4 art / +0 msgs |
| [Overscroll Areas](#5261280285949952-overscroll-areas) | Chrome 157 | `Origin trial` | **Moderate** | Chromium-Led | ⚡ +6 art / +0 msgs |
| [Capability Elements Icon-only mode](#5107682460696576-capability-elements-icon-only-mode) | Chrome 157 | `Enabled by default` | **Moderate** | Chromium-Led | ⚡ +3 art / +0 msgs |
| [WebTransport reliability attributes](#5094058497277952-webtransport-reliability-attributes) | Chrome 158 | `Enabled by default` | **Moderate** | Multi-Engine Consensus | ⚡ +6 art / +0 msgs |
| [object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](#4886345347629056-object-fit-and-object-position-apply-to-svg-documents-in-object-and-embed) | Chrome 158 | `Enabled by default` | **Moderate** | Partial Multi-Engine Interest | ⚡ +7 art / +0 msgs |
| [Remove FencedFrame element and window.fence APIs](#6366274495053824-remove-fencedframe-element-and-windowfence-apis) | Chrome 156 | `Deprecated` | **Emerging** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [Ask-before-HTTP warning on by default](#5143933628841984-ask-before-http-warning-on-by-default) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +13 art / +0 msgs |
| [Ship anchor-visible and anchor-valid, and deprecate the plural versions](#5136123851571200-ship-anchor-visible-and-anchor-valid-and-deprecate-the-plural-versions) | Chrome 157 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +6 art / +0 msgs |
| [Expose CSSStyleValue hierarchy to Worker contexts](#5114591051907072-expose-cssstylevalue-hierarchy-to-worker-contexts) | Chrome 154 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +6 art / +0 msgs |
| [WebTransport Datagram writable streams and prioritization](#5183354944225280-webtransport-datagram-writable-streams-and-prioritization) | Chrome 155 | `In developer trial (Behind a flag)` | **Emerging** | Multi-Engine Consensus | ⚡ +8 art / +0 msgs |
| [CORS enforcement for Background Fetch](#6210300985606144-cors-enforcement-for-background-fetch) | Chrome 157 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [CSS random() function](#5324559251275776-css-random-function) | Chrome 156 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +8 art / +6 msgs |
| [Disconnect WebSockets on BFCache entry](#5068439115923456-disconnect-websockets-on-bfcache-entry) | Chrome 157 | `Stepped rollout` | **Emerging** | Multi-Engine Consensus | ⚡ +1 art / +0 msgs |
| [Private Verification Tokens](#6210457816924160-private-verification-tokens) | Chrome 154 | `Origin trial` | **Emerging** | Chromium-Led | ⚡ +8 art / +0 msgs |
| [CSS scroll-marker-group modes](#5109685301673984-css-scroll-marker-group-modes) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +1 art / +0 msgs |
| [js-profiling in dedicated workers](#5159559872249856-js-profiling-in-dedicated-workers) | Chrome 154 | `In developer trial (Behind a flag)` | **Emerging** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [Light dismiss improvements for popovers and dialogs](#6209615938322432-light-dismiss-improvements-for-popovers-and-dialogs) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +1 art / +0 msgs |
| [WebTransport draining](#6427766428925952-webtransport-draining) | Chrome 158 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +5 art / +0 msgs |
| [Deprecate and remove XSLT](#4709671889534976-deprecate-and-remove-xslt) | Chrome 158 | `Stepped rollout` | **Emerging** | Multi-Engine Consensus | ⚡ +6 art / +0 msgs |
| [Web Install API](#5183481574850560-web-install-api) | Chrome 158 | `Enabled by default` | **Emerging** | Contested / Concerns Raised | ⚡ +12 art / +0 msgs |
| [HTML install element](#5152834368700416-html-install-element) | Chrome 158 | `Enabled by default` | **Emerging** | Contested / Concerns Raised | ⚡ +15 art / +0 msgs |
| [Media element pseudo-classes](#5068277495758848-media-element-pseudo-classes) | Chrome 158 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +12 art / +0 msgs |
| [Permissions Policy: focus-without-user-activation](#5179186249465856-permissions-policy-focus-without-user-activation) | Chrome 158 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +15 art / +0 msgs |
| [Prerendering cross-origin iframes](#5112398709129216-prerendering-cross-origin-iframes) | Chrome 158 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +5 art / +0 msgs |
| [Popup Capability Delegation](#5091965583622144-popup-capability-delegation) | Chrome 157 | `In developer trial (Behind a flag)` | **Emerging** | Chromium-Led | ⚡ +9 art / +0 msgs |
| [CSS Custom Highlight Universal Selector ::highlight(\*)](#5174965228929024-css-custom-highlight-universal-selector-highlight) | Chrome 158 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +13 art / +0 msgs |
| [WebTransport congestion control](#5180947573112832-webtransport-congestion-control) | Chrome 158 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +7 art / +0 msgs |
| [WebTransport anticipated concurrent incoming streams](#5089961022980096-webtransport-anticipated-concurrent-incoming-streams) | Chrome 158 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +11 art / +0 msgs |
| [Global Privacy Control in Chrome](#5095781286674432-global-privacy-control-in-chrome) | Chrome 157 | `Enabled by default` | **Emerging** | Chromium-Led | ✨ New |
| [OfflineAudioContext incremental rendering](#5109900936085504-offlineaudiocontext-incremental-rendering) | Chrome 158 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +2 art / +0 msgs |
| [WebTransport keying material export](#4860330806214656-webtransport-keying-material-export) | Chrome 158 | `Enabled by default` | **Emerging** | Multi-Engine Consensus | ⚡ +9 art / +0 msgs |
| [Source Specific Multicast for Direct Sockets API](#6208452397498368-source-specific-multicast-for-direct-sockets-api) | Chrome 158 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +8 art / +0 msgs |
| [closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](#5100672946143232-closest-corner-and-farthest-corner-radii-for-circle-and-ellipse-basic-shapes) | Chrome 158 | `Enabled by default` | **Emerging** | Partial Multi-Engine Interest | ⚡ +6 art / +0 msgs |
| [Scroll snap for single-axis scroll containers](#5086608215900160-scroll-snap-for-single-axis-scroll-containers) | Chrome 158 | `Enabled by default` | **Emerging** | Chromium-Led | ⚡ +1 art / +0 msgs |
| [CSS position-visibility:anchor{s}-valid](#5136856479039488-css-position-visibilityanchors-valid) | Chrome 157 | `Enabled by default` | **Quiet** | Partial Multi-Engine Interest | ⚡ +8 art / +0 msgs |
| [Support targetAddressSpace option for WebSockets](#4779920606756864-support-targetaddressspace-option-for-websockets) | Chrome 154 | `Enabled by default` | **Quiet** | Chromium-Led | ⚡ +2 art / +0 msgs |
| [Support for WebHID](#5172464636133376-support-for-webhid) | Chrome 158 | `Enabled by default` | **Quiet** | Contested / Concerns Raised | 🔄 Enabled by default |
| [Connection Allowlists - Embedded Enforcement](#5657801797009408-connection-allowlists-embedded-enforcement) | Chrome 157 | `Origin trial` | **Quiet** | Partial Multi-Engine Interest | ⚡ +3 art / +0 msgs |
| [CSS pseudo-class for navigation source element](#6327898878377984-css-pseudo-class-for-navigation-source-element) | Chrome 156 | `Enabled by default` | **Quiet** | Chromium-Led | ⚡ +2 art / +0 msgs |
| [Fetch API: Forward reason from AbortController to fetch Response](#5158507786665984-fetch-api-forward-reason-from-abortcontroller-to-fetch-response) | Chrome 154 | `Enabled by default` | **Quiet** | Partial Multi-Engine Interest | ⚡ +3 art / +0 msgs |
| [Expose ProgressEvent in service workers](#5069584943153152-expose-progressevent-in-service-workers) | Chrome 157 | `Enabled by default` | **Quiet** | Multi-Engine Consensus | ⚡ +0 art / +1 msgs |
| [Optional browser optimization for Service Workers](#5194817700364288-optional-browser-optimization-for-service-workers) | Chrome 154 | `Stepped rollout` | **Quiet** | Partial Multi-Engine Interest | ⚡ +10 art / +0 msgs |
| [CSS corner shorthand properties ](#5152215540039680-css-corner-shorthand-properties-) | Chrome 157 | `Enabled by default` | **Quiet** | Multi-Engine Consensus | ⚡ +5 art / +0 msgs |
| [CSS text-overflow: &lt;string&gt; value](#6294595288825856-css-text-overflow-string-value) | Chrome 157 | `Enabled by default` | **Quiet** | Multi-Engine Consensus | ⚡ +4 art / +0 msgs |
| [Compression dictionary transport Updates](#4895435813683200-compression-dictionary-transport-updates) | Chrome 156 | `Enabled by default` | **Quiet** | Chromium-Led | ⚡ +3 art / +0 msgs |

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

- **Momentum:** **High** (+419 points since 2026-10-12; footprint 1769 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""HTML-in-canvas" standard position webkit mozilla tag"`, `""HTML-in-canvas" Chrome 157 API"`, `""HTML-in-canvas" developer discussion webgpu webgl"`
- **Analysis:** HTML-in-canvas has shipped enabled by default in Chrome 157, providing long-awaited primitives like \`drawElementImage\` and geometry updates to render live, accessible DOM subtrees directly inside 2D, WebGL, and WebGPU canvas pipelines. The developer ecosystem has moved rapidly with early integration into graphics engines like Babylon.js and PixiJS. Cross-browser consensus is developing, with WebKit signaling support for the immediate-mode API design while Gecko continues evaluating privacy edge-cases alongside active WPT test synchronization.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building WebGL, WebGPU, or canvas-heavy applications should adopt HTML-in-canvas progressively by feature-detecting the \`content="drawable"\` canvas attribute. Maintain fallback approaches—such as floating DOM overlays or SVG-based polyfills—for non-Chromium users until baseline multi-engine implementation is reached.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @smfr: "We will mark this proposal as support in a week pending objections. There are some ongoing discussions around parts of the API shape that we'd like to..."
- Standards Activity (Mozilla): Latest discussion from @nical: "Another concern was brought up recently in a discussion with web-standards folks at mozilla:  HTML-in-canvas is violating the principle that JS should..."
- Community package available: \[@giuseppe-scotto-lavina/html-in-canvas-polyfill\](https://www.npmjs.com/package/@giuseppe-scotto-lavina/html-in-canvas-polyfill) (v0.1.0-preview.17) for progressive enhancement.
- Verified community discussion on Hacker News: "HTML-in-Canvas" (222 points, 116 comments).

#### ⚡ What Happened This Week

- 💬 **10 new community discussions** found
- 📰 **16 new articles/tutorials** published

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
- **Mozilla (Gecko):** [Bug #2086571: \[wpt-sync\] Sync PR 64256 - Add WEB\_FEATURES.yml for HTML-in-Canvas draw-element-image tests](https://bugzilla.mozilla.org/show_bug.cgi?id=2086571) `[NEW]`
- **WebKit (Safari):** [Bug #316240: \[HTML-in-Canvas\] Implement HTML-in-Canvas](https://bugs.webkit.org/show_bug.cgi?id=316240) `[NEW]`
- **WebKit (Safari):** [Bug #316244: \[HTML-in-Canvas\] Blockify style "display" and force style "position" for canvas descendants](https://bugs.webkit.org/show_bug.cgi?id=316244) `[NEW]`
- **WebKit (Safari):** [Bug #316246: \[HTML-in-Canvas\] Implement ElementImage and HTMLCanvasElement.captureElementImage()](https://bugs.webkit.org/show_bug.cgi?id=316246) `[NEW]`

#### 📦 Polyfills & NPM Ecosystem

- [@remotion/canvas-capture](https://www.npmjs.com/package/@remotion/canvas-capture) `v4.0.502` — Capture HTML-in-canvas content as a video
- [@giuseppe-scotto-lavina/html-in-canvas-polyfill](https://www.npmjs.com/package/@giuseppe-scotto-lavina/html-in-canvas-polyfill) `v0.1.0-preview.17` *(Verified Polyfill)* — Polyfill for the proposed HTML-in-Canvas API (content="drawable", drawElementImage, the paint event) over a live DOM, for desktop Chrome, Firefox 155+ and Safari 27+, Chrome for Android 130+ and Safari on iOS 26+. Native-first: steps aside where the brows
- [three-html-render](https://www.npmjs.com/package/three-html-render) `v0.1.2` *(Verified Polyfill)* — HTML-in-Canvas polyfill and Three.js integration for rendering live HTML as WebGL/WebGPU textures
- [html-in-canvas-polyfill](https://www.npmjs.com/package/html-in-canvas-polyfill) `v1.0.1` *(Verified Polyfill)* — HTML in Canvas Polyfill
- [hic-pageflip](https://www.npmjs.com/package/hic-pageflip) `v1.0.4` — A Pageflip/Flipbook Custom Element powered by HTML-in-Canvas

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

- [HTML-in-canvas · Issue #41 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/41) *(github.com · 2026-10-05T08:17:17)* *(Cites: `https://chromestatus.com/feature/5172548013916160`)*
  > HTML-in-canvas · Issue #41 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your ...
- [Intent to Experiment: HTML-in-canvas](https://groups.google.com/a/chromium.org/g/blink-dev/c/t_nGEmJ_v4s) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5172548013916160`)*
  > Intent to Experiment: HTML-in-canvas Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: HTML-in-canva...
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)* *(Cites: `https://chromestatus.com/feature/5172548013916160`)*
  > The spec for https://&lt;strong&gt;chromestatus.com/feature/5172548013916160&lt;/strong&gt; is not available yet.
- [HTML-in-Canvas: HTML Canvas Examples, Demos & API Docs](https://html-in-canvas.dev) *(html-in-canvas.dev)* *(Cites: `https://github.com/WICG/html-in-canvas`)*
  > HTML-in-Canvas: HTML Canvas Examples, Demos & API Docs with the WICG HTML-in-Canvas API (drawElementImage) — 2D, WebGL and WebGPU."&gt; — natively"&gt; with the WICG HTML-in-Canvas API (drawElementImage) — 2D, WebGL and WebGPU...
- [HTML in Canvas (wicg/html-in-canvas) \| Context7](https://context7.com/wicg/html-in-canvas) *(context7.com)* *(Cites: `https://github.com/WICG/html-in-canvas`)*
  > HTML in Canvas (wicg/html-in-canvas) \| Context7 Add Docs HTML in Canvas https://github.com/wicg/html-in-canvas Admin HTML in Canvas is a proposal for using 2D and 3D canvas elements to customize the rendering of HTML ......

#### 📚 Platform Documentation & References

- [HTML-in-canvas · Issue #41 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/41) *(github.com)*
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-08 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0001.html) *(lists.w3.org)*
- [design-reviews#1204: Incubation: \[HTML\] html-in-canvas](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1204) *(tag-github-bot.w3.org)*
- [IRC log of apa on 2026-04-01](https://www.w3.org/2026/04/01-apa-irc) *(w3.org)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `canvas-html` on [wpt.fyi](https://wpt.fyi/results?q=feature:canvas-html) (webstatus.dev has no pass rates for it)

#### 🌐 Web-features Group Context

*group-level data: web-features [`canvas-html`](https://webstatus.dev/features/canvas-html)*

- **Chrome usage:** 0% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/445))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 12 planned queries, 36 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 13 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (8 found, 8 verified) · `Dev.to Community Blogs` (1 found, 1 verified) · `Hacker News Algolia` (8 found, 8 verified) · `Standards Positions` (5 found, 4 verified) · `Engine Bug Trackers` (10 found, 8 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 5 verified) · `web-features mapping` *(group "canvas-html", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "canvas-html": no stable pass rate for Chrome yet)* · `Sources cited by the AI synthesis` (9 found, 9 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 16

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

- **Momentum:** **High** (+160 points since 2026-10-12; footprint 285 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Decisions API" WebKit standards-positions Mozilla"`, `""Decisions API" "window.DecisionModel""`, `""Decisions API" "DecisionModel" Chrome"`, `""Chrome Decisions API" "Semantic If""`
- **Analysis:** The Decisions API (window.DecisionModel) is an experimental on-device Built-in AI capability introduced in Chromium (Chrome 157) behind a flag, introducing a deterministic 'Semantic If' primitive that scores text against structured schemas in a single forward pass without autoregressive token generation. Web developers see substantial utility in replacing heavy client-side LLMs and fragile heuristics for local triage and search facet routing, though the API is still an early proposal without formal web standards consensus. Broad interoperability remains distant as non-Chromium engines resist bundling platform-level inference weights into browser binaries.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat the API purely as an experimental progressive enhancement behind Chrome flags or via LiteRT-based polyfills, designing structured question schemas while strictly maintaining deterministic rule-based or server-side fallbacks for production workflows.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: \[decision-pony\](https://www.npmjs.com/package/decision-pony) (v0.1.2) for progressive enhancement.

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 📦 Polyfills & NPM Ecosystem

- [decision-pony](https://www.npmjs.com/package/decision-pony) `v0.1.2` *(Verified Polyfill)* — OpenAI Decisions API and TypeSafe API (Jev) polyfill with conversational LLM protocols

#### 📰 Ecosystem Blogs & Articles

- [Chrome Decisions API: the prompts, limits, engines and code reviews behind DecisionModel](https://dejan.ai/blog/chrome-decisions-api-decisionmodel) *(dejan.ai)*
  > Chrome Decisions API: the prompts, limits, engines and code reviews behind DecisionModel Skip to content Sign in mail search menu &larr; back New here? Sign in to annotate the text and leave comments. &times; Chrome Deci...
- [Chrome’s Decisions API: A Semantic If for the Browser](https://sirwan.info/blog/en/chrome-decisions-api-semantic-if) *(sirwan.info)*
  > Chrome’s Decisions API: A Semantic If for the Browser Sirwan Afifi \_ ✻ ❯ ✦ Chrome’s Decisions API: A Semantic If for the Browser Published October 5, 2026 AI Browsers JavaScript Back in 2024, I wrote about Local AI Model...
- [web-ai.studio](https://web-ai.studio/docs/decisions) *(web-ai.studio)*
  > \*\*Security & Permissions:\*\* Reuses the \`"language-model"\` Permissions Policy and was updated to require user interaction before downloading model weights to prevent unauthorized data usage
- [Chrome Decisions API tested: three engines, from 38% to 85% right \| RESONEO](https://think.resoneo.com/chrome-decisions-api) *(think.resoneo.com)*
  > Chrome Decisions API tested: three engines, from 38% to 85% right \| RESONEO Tests · Updated October 8, 2026 Chrome is preparing an API that turns what your visitors type into filters: 38% to 85% right depending on the en...
- [jerseydevilweb.com](https://jerseydevilweb.com/chrome-ai-smarter-website) *(jerseydevilweb.com)*
  > \*\*Adaptive UIs & Routing:\*\* Dynamically categorizing user search queries (e.g., mapping \*"fuel-efficient SUV for kids"\* directly to e-commerce facet filters without hitting a server)
- [opera.com](https://investor.opera.com/news-releases/news-release-details/opera-doubles-down-local-ai-shipping-models-directly-its) *(investor.opera.com)*
  > \*\*Cross-Browser Interest (Opera Next):\*\* Opera announced support in its \`WebAI\` early preview, implementing the Decisions API and Semantic Embedder API as open-weight, model-agnostic browser features alongside Prompt and...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Decisions API](http://www.mail-archive.com/blink-dev@chromium.org/msg17639.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/decisions-api`)*
  > \[blink-dev\] Intent to Prototype: Decisions API Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Decisions API Mike Wasserman Thu, 01 Oct 2026 13:04:07 -0700 Contact emails \[email&#160;protected\] , \[...
- [Re: \[blink-dev\] Intent to Prototype: Decisions API](http://www.mail-archive.com/blink-dev@chromium.org/msg17641.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/decisions-api`)*
  > Re: \[blink-dev\] Intent to Prototype: Decisions API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: Decisions API Rick Byers Thu, 01 Oct 2026 22:22:34 -0700 This is very exciting, thanks for sha...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/dzienisz/comment-vibe/blob/main/README.md) *(github.com)*
- [feat: migrate classify() to decide() across webapp and extension by etiennenoel · Pull Request #129 · etiennenoel/web-ai.studio · GitHub](https://github.com/etiennenoel/web-ai.studio/pull/129) *(github.com)*
- [GitHub - tomayac/decisions-api: An explainer exploring fast, type-safe, on-device ML decisions, classification, scoring, and ranking · GitHub](https://github.com/tomayac/decisions-api) *(github.com)*
- [Align question types and result semantics with implementation by michaelwasserman · Pull Request #3 · explainers-by-googlers/decisions-api · GitHub](https://github.com/explainers-by-googlers/decisions-api/pull/3) *(github.com)*
- [GitHub - explainers-by-googlers/decision-api: An explainer exploring fast, type-safe, on-device ML decisions, classification, scoring, and ranking · GitHub](https://github.com/explainers-by-googlers/decision-api) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Decisions API Demo](https://web-ai.studio/playgrounds/decisions)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 11 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 11 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (6 found, 0 verified) · `Engine Bug Trackers` (5 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 1 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (9 found, 7 verified)
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

- **Momentum:** **High** (+160 points since 2026-10-12; footprint 265 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Secure Payment Confirmation" locale NotSupportedError"`, `""Secure Payment Confirmation" "locale" validation"`, `""Secure Payment Confirmation" "Chrome 154""`
- **Analysis:** Secure Payment Confirmation (SPC) Locale Validation refines the W3C Web Payments specification by raising a NotSupportedError DOMException when none of the relying party's specified language tags match the browser dialog's active locale. Shipped enabled by default in Chrome 154, it prevents jarring language mismatches between merchant-supplied data and system confirmation prompts without exposing fingerprintable OS locale details. Despite its utility, broader ecosystem impact is constrained because full SPC implementation remains an almost exclusively Chromium-driven feature with no production support in Safari or Firefox.

**Key Recommendations & Takeaways:**
- Actionable Advice: Use progressive enhancement by wrapping PaymentRequest.canMakePayment() or show() in try-catch blocks to intercept NotSupportedError and either adjust data element languages or fall back cleanly to standard 3-D Secure web challenges. If exact language coordination between merchant strings and the dialog is non-essential, omit or pass an empty locale array to maintain backwards compatibility.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @gsnedders: "Am I right in understanding that the primary goal here is to replace 3-D Secure with something that's browser mediated?..."
- Standards Activity (Mozilla): Latest discussion from @danielenriqueriverarivera6-max: "Excelente trabajo de los colaboradores Me atrevería a decir que el compromizo  con sus carreras lo an llevado a un límite demasiado amplio ... bendici..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **14 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Secure Payment Confirmation (SPC)](https://github.com/WebKit/standards-positions/issues/30) [open] `topic: payments`, `concerns: integration`, `venue: W3C Web Payments WG`, `from: Google`
  > *Latest discussion from @gsnedders: "Am I right in understanding that the primary goal here is to replace 3-D Secure with something that's browser mediated?..."*
- **Mozilla:** [Secure Payment Confirmation](https://github.com/mozilla/standards-positions/issues/570) [open] 
  > *Latest discussion from @danielenriqueriverarivera6-max: "Excelente trabajo de los colaboradores Me atrevería a decir que el compromizo  con sus carreras lo an llevado a un límite demasiado amplio ... bendici..."*

#### 📰 Ecosystem Blogs & Articles

- [Chrome 154  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > \*\*"Secure Payment Confirmation: Locale Validation"\*\* is an update to the W3C Secure Payment Confirmation (SPC) specification and its implementation in Chromium (shipped in \*\*Chrome 154\*\* Chrome officially announced the f...
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/master/chrome/browser/flag_descriptions.h) *(chromium.googlesource.com)*
  > \*\*Rejection Behavior\*\*: If \*\*none\*\* of the provided language tags match the dialog's active language, the browser rejects the call (such as \`canMakePayment()\` or \`show()\`) with a \`NotSupportedError\` \`DOMException\`
- [chromestatus.com](https://chromestatus.com/feature/5126146013396992?gate=4803300429004800) *(chromestatus.com)*
  > Because browsers intentionally restrict sites from inspecting arbitrary OS/dialog UI details to prevent user fingerprinting, this validation approach allows developers to ensure language compatibility before displaying t...
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Chrome officially announced the feature's progression through Chrome 154 Beta and its general release
- [gigazine.net](https://gigazine.net/gsc_news/en/20260925-google-chrome-154) *(gigazine.net)*
  > Coverage across developer publications featured SPC locale validation alongside other platform updates, such as iframe auto-resizing, Background Fetch CORS enforcement, and popover light-dismiss tweaks
- [biggo.com](https://finance.biggo.com/news/c5f02f74-e6b8-4a67-bd4e-b2c4a7c36f09) *(finance.biggo.com)*
  > Coverage across developer publications featured SPC locale validation alongside other platform updates, such as iframe auto-resizing, Background Fetch CORS enforcement, and popover light-dismiss tweaks

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5126146013396992`)*
  > Availability expectation The locale validation for Secure Payment Confirmation will only be available in Chromium browsers for the foreseeable future. Estimated milestones Shipping on desktop 154 Shipping on Android 154 ...
- [Re: \[blink-dev\] Re: Intent to Ship: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17872.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/secure-payment-confirmation/issues/343`)*
  > &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; https://&lt;strong&gt;github.com/w3c/secure-payment-confirmation/issues/343&lt;/strong&gt;#issuecomment-5457268443 &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&...
- [\[blink-dev\] Re: Intent to Ship: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17870.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/secure-payment-confirmation/issues/343`)*
  > &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; https://&lt;strong&gt;github.com/w3c/secure-payment-confirmation/issues/343&lt;/strong&gt;#issuecomment-5457268443 &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; Best, &gt;&g...

#### 📚 Platform Documentation & References

- [w3.org](https://www.w3.org/groups/wg/payments/activity) *(w3.org)*
- [Secure Payment Confirmation](https://www.w3.org/TR/secure-payment-confirmation) *(w3.org)*
- [Secure Payment Confirmation](https://www.w3.org/TR/2023/WD-secure-payment-confirmation-20230308) *(w3.org)*
- [SecurePaymentConfirmationRequest - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/SecurePaymentConfirmationRequest) *(developer.mozilla.org)*
- [Localization topics to address · Issue #93 · w3c/secure-payment-confirmation · GitHub](https://github.com/w3c/secure-payment-confirmation/issues/93) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Secure Payment Confirmation: Locale Validation Demo](https://rsolomakhin.github.io/pr/spc-locales)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `secure-payment-confirmation` on [wpt.fyi](https://wpt.fyi/results?q=feature:secure-payment-confirmation) (via webstatus.dev) — stable: Chrome 80% · Edge 10% · Firefox 0% · Safari 0%; experimental: Chrome 80% · Edge 10% · Firefox 0% · Safari 0%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (43 found across 11 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 10 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "secure-payment-confirmation", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "secure-payment-confirmation": Chrome 80% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 3 verified)
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

- **Momentum:** **High** (+150 points since 2026-10-12; footprint 380 points)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The Language Detector API on Android extends Chromium's built-in, on-device AI capabilities to mobile devices, enabling fast, privacy-preserving, and offline-capable language identification without server roundtrips. While Chrome 157 enables the feature by default on Android to achieve parity with desktop, ecosystem interoperability remains single-engine due to objections from rival browser vendors.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt the API strictly via feature detection (\`'LanguageDetector' in self\`) as a progressive enhancement, while maintaining server-side or lightweight WebAssembly fallbacks for non-supporting platforms like Safari and Firefox.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tomayac: "&gt; We have an open Pull Request to implement the proposed API into Mastodon, but we are waiting to have at least 2 browser engines support the proposal..."
- Standards Activity (Mozilla): Latest discussion from @sandstrom: "&gt; We are negative on this proposal. While we plan to describe the reasons further in \[our proposal\](https://github.com/mozilla/explainers/blob/main/tr..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **11 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Web Translation API](https://github.com/WebKit/standards-positions/issues/339) [open] `venue: WICG`, `from: Google`
  > *Latest discussion from @tomayac: "&gt; We have an open Pull Request to implement the proposed API into Mastodon, but we are waiting to have at least 2 browser engines support the proposal..."*
- **Mozilla:** [Web Translation API](https://github.com/mozilla/standards-positions/issues/1015) [closed] `position: negative`
  > *Latest discussion from @sandstrom: "&gt; We are negative on this proposal. While we plan to describe the reasons further in \[our proposal\](https://github.com/mozilla/explainers/blob/main/tr..."*

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5087964794322944) *(img968-dot-cr-status.appspot.com)*
  > The \*\*Language Detector API on Android\*\* brings the W3C-incubated client-side \`LanguageDetector\` JavaScript API—previously restricted largely to desktop environments—to Chrome for Android (Clank) Part of the broader \*\*Bu...
- [chrome.com](https://developer.chrome.com/docs/ai/translate-on-device) *(developer.chrome.com)*
  > The \*\*Language Detector API on Android\*\* brings the W3C-incubated client-side \`LanguageDetector\` JavaScript API—previously restricted largely to desktop environments—to Chrome for Android (Clank) \*\*Mobile Was the Missing...
- [Detect languages with the Language Detector API - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/languagedetector-api) *(learn.microsoft.com)*
  > By moving detection on-device on mobile devices, developers eliminate server round-trip latency, eliminate cloud API costs, ensure full offline functionality, and safeguard privacy by keeping user input on the handset \*\*...
- [chromegeek.com](https://www.chromegeek.com/chrome-157-beta-language-detector-android) *(chromegeek.com)*
  > \*\*Article/Source:\*\* \*Chrome Platform Status ("Language Detector API on Android")\* & \*Chrome Beta Release Coverage (Chrome 157)\*
- [appspot.com](https://cr-status.appspot.com/feature/5087964794322944) *(cr-status.appspot.com)*
  > Promoted under the "Chromium catches up" intent to eliminate mobile platform disparities where desktop builds had early access to Built-in AI APIs while mobile was omitted Documents the formal specifications incubated by...
- [iodigital.com](https://techhub.iodigital.com/articles/built-in-ai-in-chrome) *(techhub.iodigital.com)*
  > Promoted under the "Chromium catches up" intent to eliminate mobile platform disparities where desktop builds had early access to Built-in AI APIs while mobile was omitted \*\*Mobile Was the Missing Link:\*\* Initial develop...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17245.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android 'Jaewon Le...
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > https://&lt;strong&gt;chromestatus.com/feature/5087964794322944&lt;/strong&gt; will need a run on Android.
- [\[blink-dev\] Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17096.html) *(mail-archive.com)* *(Cites: `https://github.com/webmachinelearning/translation-api`)*
  > \[blink-dev\] Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Language Detector and Translator APIs on Android 'Jaewon Lee' via b...
- [translation-api/index.bs at main · webmachinelearning/translation-api · GitHub](https://github.com/webmachinelearning/translation-api/blob/main/index.bs) *(github.com)* *(Cites: `https://webmachinelearning.github.io/translation-api`)*
  > translation-api/index.bs at main · webmachinelearning/translation-api · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refr...
- [GitHub - michaelwasserman/translation-api: 🌏 A proposal for translator and language detector APIs · GitHub](https://github.com/michaelwasserman/translation-api) *(github.com)* *(Cites: `https://webmachinelearning.github.io/translation-api`)*
  > GitHub - michaelwasserman/translation-api: 🌏 A proposal for translator and language detector APIs · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another ...

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

- **Chrome usage:** 0.0018% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/425))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (67 found across 12 planned queries, 28 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 11 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (16 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "languagedetector", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "languagedetector": Chrome 25% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 10

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

- **Momentum:** **High** (+140 points since 2026-10-12; footprint 270 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""CSS Align: flow-start and flow-end" webkit standards positions"`, `"flow start flow end css alignment csswg"`, `"flow start flow end alignment keywords chrome status"`, `""CSS Align: flow-start and flow-end" mozilla standards positions"`
- **Analysis:** The CSS Working Group resolved to introduce flow-start and flow-end as canonical alignment keywords that alias legacy flex-start and flex-end across CSS Box Alignment Module Level 3 and CSS Grid Lanes. The feature solves alignment ambiguities when content placement is reversed (such as fill-reverse in masonry/grid-lanes layouts) while preserving container writing-mode semantics for start and end. With Chromium targeting enabled-by-default support in Chrome 158, Mozilla adopting an official positive stance, and WebKit reviewing the proposal without objection, engine consensus is solidly aligned.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should treat flow-start and flow-end as an emerging progressive enhancement and continue using flex-start/flex-end or standard logical start/end for production flexbox and grid layouts today. If experimenting with reversed Grid Lanes layouts in Chromium developer builds, guard modern keyword usage behind CSS @supports (align-items: flow-start) fallbacks until Safari and Firefox complete their implementations.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @celestepan: "@dholbert thank you for the response!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/WebKit/standards-positions/issues/723) [open] `topic: css`, `venue: W3C CSS WG`
- **Mozilla:** [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement](https://github.com/mozilla/standards-positions/issues/1455) [closed] `position: positive`
  > *Latest discussion from @celestepan: "@dholbert thank you for the response!..."*

#### 📰 Ecosystem Blogs & Articles

- [csswg.org](https://drafts.csswg.org/css-flexbox-2) *(drafts.csswg.org)*
  > The CSS Working Group (CSSWG) resolved to introduce \*\*\`flow-start\`\*\* and \*\*\`flow-end\`\*\* as canonical keywords in the \*\*CSS Box Alignment Module Level 3\*\* (and CSS Flexible Box Layout Level 2) Spec updates formally adopte...
- [appspot.com](https://cr-status.appspot.com/feature/5069051687731200?gate=5575518593351680) *(cr-status.appspot.com)*
  > They serve as aliases for the legacy \`flex-start\` and \`flex-end\` keywords The primary motivation arises from newer layout specifications—particularly \*\*CSS Grid-Lanes (Masonry)\*\*—where content placement can be reversed (...
- [wpt.fyi](https://wpt.fyi/results/css/css-align/flow-start-and-end-serialization.html?run_id=5194407249969152&run_id=4902746892533760&diff=) *(wpt.fyi)*
  > \*\*Serialization:\*\* To normalize syntax across layout modes, any use of either \`flex-start\`/\`flex-end\` or \`flow-start\`/\`flow-end\` in alignment properties (\`align-content\`, \`align-items\`, \`align-self\`, \`justify-content\`, \`...
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Chromium Runtime Flags\*\*: Chromium integrated tracking bug \`#555299635\` and implemented the feature under the internal flags \`CSSFlowStartAndEnd\` and \`CSSFlowStartAndEndSerialization\`, bringing native parsing and seria...
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/platform/runtime_enabled_features.json5) *(chromium.googlesource.com)*
  > \*\*Chromium Runtime Flags\*\*: Chromium integrated tracking bug \`#555299635\` and implemented the feature under the internal flags \`CSSFlowStartAndEnd\` and \`CSSFlowStartAndEndSerialization\`, bringing native parsing and seria...
- [github.io](https://mozilla.github.io/standards-positions) *(mozilla.github.io)*
  > Mozilla officially logged a \*\*positive\*\* position on \`flow-start\` and \`flow-end\`, supporting the effort to rationalize flow-relative alignment without overloading Flexbox terms in non-flex layouts

#### 🔗 Inbound Citations & Reverse Links

- [Create a new feature ID for \`flow-start\` and \`flow-end\` keywords in alignment · Issue #4282 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4282) *(github.com · 2026-08-27T23:18:04)* *(Cites: `https://chromestatus.com/feature/5069051687731200`)*
  > Create a new feature ID for \`flow-start\` and \`flow-end\` keywords in alignment · Issue #4282 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You...
- [Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords](http://www.mail-archive.com/blink-dev@chromium.org/msg17835.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/pull/14539`)*
  > Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS flow-start and flow-end alignment keywords 'Celeste Pan' via blink-...

#### 📚 Platform Documentation & References

- [align-content CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-content) *(developer.mozilla.org)*
- [github.com](https://github.com/w3c/csswg-drafts/issues/12971) *(github.com)*
- [\[css-grid-3\]\[masonry\] For \`align-items\`/\`justify-items\`, should \`fill-reverse\` affect the definition of \`start\` and \`end\`? · Issue #14052 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/14052) *(github.com)*
- [CSS Align: \`flow-start\` and \`flow-end\` as alignment keywords to indicate the start and end of content placement · Issue #723 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/723) *(github.com)*
- [justify-content CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/justify-content) *(developer.mozilla.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 11 planned queries, 16 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 12 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (5 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 2

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

- **Momentum:** **High** (+130 points since 2026-10-12; footprint 270 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""font-width" "font-stretch" CSS Fonts 4 CSSWG"`, `""FontFace" "font-width" descriptor stretch alias Chrome 154 OR "font-width" descriptor"`
- **Analysis:** The addition of the FontFace width attribute and the @font-face font-width descriptor aligns Chromium with the CSS Fonts 4 and CSS Font Loading specifications, formalizing width as the primary descriptor name while preserving stretch as a legacy alias. Following implementations in Safari and Firefox, Chrome's rollout achieves Baseline Newly Available status across all major browser engines and eliminates longstanding Web Platform Tests failures. The update represents an ergonomic, zero-friction spec modernization that fully maintains backwards compatibility with existing stylesheets.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can comfortably transition to font-width in @font-face rules and FontFace constructors to adopt canonical modern standards. However, if your application targets legacy browser baselines released prior to 2024, continue to include font-stretch declarations or rely on CSS post-processors to supply both aliases.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [web.dev](https://web.dev/blog/web-platform-09-2026) *(web.dev)*
  > \*\*Canonical Rename:\*\* \`font-width\` replaces \`font-stretch\` as the primary standard descriptor name for selecting normal, condensed, or expanded font faces, while \`font-stretch\` is retained as a legacy alias dev Blog)
- [Chrome 154  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > fontWidth\`, and CSS \`@font-face { font-width: ... }\` interchangeably with their legacy \`stretch\` counterparts \*\*Article Title:\*\* \*FontFace width attribute and font-width descriptor\* (Chrome Platform Status & Chrome 154 R...
- [google.com](https://groups.google.com/a/chromium.org/d/msgid/blink-dev/6a7d4c09.dc132f77.2e13a8.0e2f.GAE%40google.com) *(groups.google.com)*
  > Exposing \`width\` and \`font-width\` as aliases for \`stretch\` and \`font-stretch\` fixes WPT compliance without introducing breaking changes The release noted that this is a low-risk, spec-alignment change that brings Blink i...
- [web.dev](https://web.dev/blog/web-platform-09-2026?hl=pt_br) *(web.dev)*
  > width\` reached \*\*Baseline Newly Available\*\* status across all major browser engines (Chrome 154+, Firefox 155+, Safari 18.4+)
- [realityripple.com](https://udn.realityripple.com/docs/Web/CSS/@font-face/font-stretch) *(udn.realityripple.com)*
  > \*\*Improved Naming Consistency:\*\* Developers have welcomed the rename from \`stretch\` to \`width\` as it creates a clearer parallel with the OpenType variable font axis tag (\`wdth\`) and existing CSS font properties (\`font-we...
- [web.dev](https://web.dev/articles/variable-fonts) *(web.dev)*
  > \*\*Improved Naming Consistency:\*\* Developers have welcomed the rename from \`stretch\` to \`width\` as it creates a clearer parallel with the OpenType variable font axis tag (\`wdth\`) and existing CSS font properties (\`font-we...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: FontFace width attribute and font-width descriptor Chris Ha...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/CSSFontFaceDescriptors) *(developer.mozilla.org)*
- [font-width CSS at-rule descriptor - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-width) *(developer.mozilla.org)*
- [font-width CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-width) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/font-width) *(developer.mozilla.org)*
- [edge-developer/microsoft-edge/web-platform/release-notes/154.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/154.md) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `font-width` on [wpt.fyi](https://wpt.fyi/results?q=feature:font-width) (via webstatus.dev) — stable: Chrome 33.3% · Edge 33.3% · Firefox 100% · Safari 100%; experimental: Chrome 33.3% · Edge 33.3% · Firefox 100% · Safari 100%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (68 found across 11 planned queries, 19 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 10 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "font-width", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "font-width": Chrome 33.3% passing (stable))* · `Sources cited by the AI synthesis` (8 found, 3 verified)
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

- **Momentum:** **High** (+125 points since 2026-10-12; footprint 185 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""whatwg/html" "javascriptURLs""`, `""SanitizerConfig" "javascriptURLs""`
- **Analysis:** The \`javascriptURLs\` option in \`SanitizerConfig\` and the accompanying \`setJavascriptURLs()\` method decouple \`javascript:\` URL sanitization from specific DOM insertion methods, making URL stripping an explicit, configurable setting rather than an implicit side-effect of 'safe' APIs. Formally merged into the WHATWG HTML standard and shipping enabled by default in Chrome 157, this change resolves a notable ergonomics problem for applications needing permissive parsing without forfeiting protection against script-based navigation. Engine consensus across Chromium, WebKit, and Gecko is firmly established, marking another solid step toward a mature, native Sanitizer API.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams utilizing native parse-time sanitization should declare \`javascriptURLs: false\` explicitly inside \`SanitizerConfig\` objects to protect against navigation-based XSS when custom or permissive configurations are used. Because broad multi-engine stable distribution is still maturing across all browsers, ensure usage is guarded by feature detection (\`'setJavascriptURLs' in Sanitizer.prototype\`) with battle-tested libraries like DOMPurify retained as a fallback.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Having discussed this more with colleagues and given the lack of opposing feedback in this issue I suggest we label this as "position: support" one we..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Sanitizer API](https://github.com/WebKit/standards-positions/issues/86) [closed] `position: support`, `topic: html`, `topic: dom`, `venue: WICG`, `from: Google`, `from: Mozilla`, `from: other`
  > *Latest discussion from @annevk: "Having discussed this more with colleagues and given the lack of opposing feedback in this issue I suggest we label this as "position: support" one we..."*

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://lighthouse-ci-staging-dot-cr-status.appspot.com/feature/5169798320357376) *(lighthouse-ci-staging-dot-cr-status.appspot.com)*
  > \*\*Rollout:\*\* Chromium tracked the landing of this feature slated for Chrome 157 across Desktop, Android, and WebView platforms This was awkward if users wanted to use the 'unsafe' methods for some reason, but still wante...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > Microsoft Edge highlighted the feature under its \*\*Web APIs\*\* section alongside other modern HTML insertion and streaming updates The release clarifies support for Chromium-based browser implementations deploying the rev...
- [zenn.dev](https://zenn.dev/cybozu_frontend/articles/web_standards_trends_202609) *(zenn.dev)*
  > \*\*Zenn (Web Standards Monthly Digest):\*\* In developer community summaries covering WHATWG and W3C progress, front-end engineers flagged PR #12898 as part of the broader stabilization of the modern Sanitizer API and its i...
- [debian.org](https://sources.debian.org/src/firefox/158.0.1-1/testing/web-platform/tests/sanitizer-api/sanitizer-javascript-url.html) *(sources.debian.org)*
  > unsafe methods with explicit \`{ javascriptURLs: false }\` and \`{ javascriptURLs: true }\` configurations
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17764.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer ...
- [\[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17726.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Chromest...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17764.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer ...
- [\[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17726.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5169798320357376`)*
  > \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Chromest...
- [Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer](http://www.mail-archive.com/blink-dev@chromium.org/msg17747.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12898`)*
  > Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Add javascriptURLs option to SanitizerConfig and Sanitizer ...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com · 2026-10-30T05:29:22)* *(Cites: `https://github.com/whatwg/html/pull/12898`)*
  > Chrome 157 Release Notes - Chrome Platform Status Chrome 157 Release Notes Preview Scheduled Stable Release November 3, 2026 Miscellaneous Add javascriptURLs option to SanitizerConfig and Sanitizer # Link copied! https:/...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/whatwg/html/issues/12686) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/158) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/issues/45898) *(github.com)*
- [github.com](https://github.com/web-platform-tests/wpt/blob/master/sanitizer-api/sanitizer-javascript-url.html) *(github.com)*
- [Document Sanitizer javascriptURLs and setJavascriptURLs() by pepelsbey · Pull Request #46111 · mdn/content · GitHub](https://github.com/mdn/content/pull/46111) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (51 found across 11 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (5 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 5

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

- **Momentum:** **Moderate** (+120 points since 2026-10-12; footprint 260 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""text-decoration-inset" webkit mozilla"`, `""text-decoration-inset" css"`, `""text-decoration-inset" site:drafts.csswg.org OR site:github.com/w3c/csswg-drafts"`
- **Analysis:** Part of CSS Text Decoration Module Level 4, text-decoration-inset introduces native inline offset controls for underlines, overlines, and strike-throughs. Cross-engine consensus is strong, with Firefox shipping the property first, followed by implementations across WebKit and Chromium. The feature resolves longstanding typographic fidelity limitations by eliminating the historical need for pseudo-element or background-gradient workarounds.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams should adopt text-decoration-inset today as a progressive enhancement for refined typographic underlines and hover effects. Older browsers will simply render standard full-length decorations without breaking text readability, removing the maintenance overhead of redundant wrapper elements.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **9 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1780887: \[meta\] \[css-text-decor\] implement text-decoration-inset to modify the length of underline etc](https://bugzilla.mozilla.org/show_bug.cgi?id=1780887) `[NEW]`
- **Mozilla (Gecko):** [Bug #1981310: \[Inactive CSS\] Add text-decoration-inset in inactive CSS](https://bugzilla.mozilla.org/show_bug.cgi?id=1981310) `[NEW]`
- **Mozilla (Gecko):** [Bug #2072125: New wpt failures in /css/ \[css-transitions/properties-value-003.html, css-transitions/properties-value-inherit-003.html, css-animations/text-decoration-inset-auto.html\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2072125) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [text-decoration-inset is Like Padding for Text Decorations \| CSS-Tricks](https://css-tricks.com/text-decoration-inset-is-like-padding-for-text-decorations) *(css-tricks.com)*
  > The \*\*\`text-decoration-inset\`\*\* property (part of the CSS Text Decoration Module Level 4, previously drafted as \`text-decoration-trim\`) controls the start and end offsets of text decoration lines—such as underlines, over...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/visual-design/custom-text-decorations) *(developer.chrome.com)*
  > \`text-decoration-inset\` provides native layout control while keeping typographical fidelity intact \*\*Key Takeaway:\*\* Google’s developer guidance highlights \`text-decoration-inset\` as the modern standard for styling and t...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides?hl=en) *(developer.chrome.com)*
  > \*\*Source:\*\* Google Chrome Modern Web Guidance guides
- [chromium.org](https://issues.chromium.org/issues/498974811) *(issues.chromium.org)*
  > \*\*Sources:\*\* Chrome Platform Status (Chromium Issue 468928416 & CL 7748204) Additional CSSWG resolutions were integrated into Blink to properly handle percentage offsets across multi-line fragmented text boxes
- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., ...
- [CSS Text Decoration Module Level 4](https://w3c.github.io/csswg-drafts/css-text-decor-4) *(w3c.github.io)*
  > CSS Text Decoration Module Level 4 CSS Text Decoration Module Level 4 Editor’s Draft , 17 August 2026 More details about this document This version: https://drafts.csswg.org/css-text-decor-4/ Latest published version: ht...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., ...
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window...
- [Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30757) *(github.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another ta...
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...
- [CSS Text Decoration Module Level 4](https://w3c.github.io/csswg-drafts/css-text-decor-4) *(w3c.github.io)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > CSS Text Decoration Module Level 4 CSS Text Decoration Module Level 4 Editor’s Draft , 17 August 2026 More details about this document This version: https://drafts.csswg.org/css-text-decor-4/ Latest published version: ht...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/web-platform-dx/web-features/issues/4462) *(github.com)*
- [CSS text-decoration-inset · Issue #1349 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1349) *(github.com)*
- [text-decoration-inset CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) *(developer.mozilla.org)*
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)*
- [Updates for Chrome Canary, 05 Oct 2026 by Elchi3 · Pull Request #30757 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30757) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `text-decoration` on [wpt.fyi](https://wpt.fyi/results?q=feature:text-decoration) (via webstatus.dev) — stable: Chrome 70.8% · Edge 71.5% · Firefox 84.8% · Safari 66.5%; experimental: Chrome 95.5% · Edge 96.1% · Firefox 84.9% · Safari 81.6%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (69 found across 11 planned queries, 20 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (4 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (3 found, 3 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(group "text-decoration", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "text-decoration": Chrome 70.8% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5109912169480192-webtransport-receive-stream"></a>
### [WebTransport receive stream](https://chromestatus.com/feature/5109912169480192)

- **Milestone:** Chrome 158 (Enabled by default) · first listed in Chrome 155
- **ChromeStatus:** [chromestatus.com/feature/5109912169480192](https://chromestatus.com/feature/5109912169480192) · [chromestatuslite.com/feature/5109912169480192](https://chromestatuslite.com/feature/5109912169480192)
- **Specification:** [https://w3c.github.io/webtransport/#webtransportreceivestream](https://w3c.github.io/webtransport/#webtransportreceivestream)
- **Chromium Bug:** [https://issues.chromium.org/issues/568317222](https://issues.chromium.org/issues/568317222)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Under consideration` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

#### 📝 Overview

Adds the standardized WebTransportReceiveStream interface, a ReadableStream subclass used for incoming unidirectional streams and the readable side of bidirectional streams. Its getStats() method returns per-stream byte counters: bytesReceived reports bytes received from the network, while bytesRead reports bytes delivered to the application.

> **Motivation:** Incoming WebTransport streams have historically been exposed as generic ReadableStream objects in Chromium. The WebTransport specification defines a dedicated WebTransportReceiveStream subclass with stream-specific statistics.  Applications that receive large or latency-sensitive streams need to distinguish bytes received by the browser from bytes ...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (+100 points since 2026-10-12; footprint 220 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebTransportReceiveStream" firefox webkit"`, `""WebTransportReceiveStream" getStats"`, `""WebTransport receive stream" chrome chromestatus"`
- **Analysis:** The WebTransport receive stream update standardizes the WebTransportReceiveStream interface across Chromium as a dedicated ReadableStream subclass, bringing Chromium into direct conformance with the W3C specification. By introducing the getStats() method, the API allows web applications to measure bytes received from the network against bytes consumed by JavaScript, dramatically simplifying backpressure diagnostics. Cross-engine consensus is strong, closing a long-standing platform discrepancy and harmonizing runtime types across modern browser implementations.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt WebTransportReceiveStream via progressive enhancement by checking for stream.getStats before querying telemetry to monitor client-side backpressure. Because legacy Chromium instances delivered generic ReadableStream objects without getStats(), developers must ensure fallback handling remains in place until updated browser baselines propagate across their user bases.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **11 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2058634: \[wpt-sync\] Sync PR 61577 - Test https://w3c.github.io/webtransport/#webtransportreceivestream-pull-bytes](https://bugzilla.mozilla.org/show_bug.cgi?id=2058634) `[NEW]`
- **Mozilla (Gecko):** [Bug #2078342: A pending read() on a WebTransportReceiveStream rejects with a TypeError instead of a WebTransportError after the peer sends RESET\_STREAM](https://bugzilla.mozilla.org/show_bug.cgi?id=2078342) `[NEW]`
- **Mozilla (Gecko):** [Bug #2082841: \[wpt-sync\] Sync PR 63745 - WebTransport: wpt test for WebTransportReceiveStream](https://bugzilla.mozilla.org/show_bug.cgi?id=2082841) `[NEW]`
- **Mozilla (Gecko):** [Bug #2082932: New wpt failures in /webtransport/ \[receive-stream-stats.https.any.worker.html, receive-stream-stats.https.any.serviceworker.html, receive-stream-stats.https.any.html, and 1 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2082932) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [googlesource.com](https://chromium.googlesource.com/external/w3c/web-platform-tests/+/refs/tags/merge_pr_53514/interfaces/webtransport.idl) *(chromium.googlesource.com)*
  > The \*\*WebTransport receive stream\*\* feature standardizes the \*\*\`WebTransportReceiveStream\`\*\* interface, which subclasses \`ReadableStream\` Its primary addition is the \*\*\`getStats()\`\*\* method, which returns a \`Promise&lt;WebT...
- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > readable\`) \*\*Entry\*\*: \*“WebTransport receive stream”\* (Chrome Platform Status / Release updates)
- [appspot.com](https://chromiumdash.appspot.com/commit/dcf3dc7323729d905934d3d939192c1bf0917ebd) *(chromiumdash.appspot.com)*
  > \*\*\`bytesRead\`\*\*: The number of bytes that the application has actually consumed through reader operations (such as default or BYOB reads) \*\*Chromium Interop Tracking & Web Platform Tests (WPT)\*\*: Contributions (collabora...
- [appspot.com](https://img120-dot-cr-status.appspot.com/feature/5109912169480192?gate=6345164527370240) *(img120-dot-cr-status.appspot.com)*
  > \*\*Entry\*\*: \*“WebTransport receive stream”\* (Chrome Platform Status / Release updates)
- [googleusercontent.com](https://doc-1jrg-48u0-issuetracker.googleusercontent.com/issues/510589920) *(doc-1jrg-48u0-issuetracker.googleusercontent.com)*
  > \*\*Streamlined Cross-Engine Support\*\*: Aligning Chromium with the standardized \`WebTransportReceiveStream\` interface removes platform discrepancies and fulfills multi-vendor compatibility goals outlined in the WebTranspor...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17874.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Chris Harrelson Tue, 27 Oct 2026 22:20:40 -0700 LGTM2 ...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17874.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/issues/372`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Chris Harrelson Tue, 27 Oct 2026 22:20:40 -0700 LGTM2 ...
- [\[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17862.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/issues/372`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Alex Russell Tue, 27 Oct 2026 12:04:03 -0700 LGTM1; love to se...
- [\[blink-dev\] Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17842.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/pull/395`)*
  > \[blink-dev\] Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport receive stream Chromestatus Wed, 21 Oct 2026 18:31:31 -0700 Contact emails \[email&#16...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransportreceivestream/getstats/index.md?plain=1) *(github.com)*
- [WebTransportReceiveStream: getStats() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream/getStats) *(developer.mozilla.org)*
- [w3.org](https://www.w3.org/wiki/WebTransport/Meetings) *(w3.org)*
- [w3.org](https://www.w3.org/TR/2023/WD-webtransport-20230712) *(w3.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 43.1% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 78.8% · Safari 73%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00016% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (52 found across 13 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 11 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (9 found, 4 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 43.1% passing (stable))* · `Sources cited by the AI synthesis` (9 found, 7 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (+90 points since 2026-10-12; footprint 275 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""styleDuration" "forcedStyleDuration" "Long Animation Frame""`, `""Long Animation Frames" "styleDuration""`
- **Analysis:** The Long Animation Frames API enhancement introduces discrete style and layout timings—such as \`styleDuration\` and \`forcedStyleDuration\`—enabling fine-grained diagnostics for CSS recalculations versus geometric layout thrashing. While Chromium and Microsoft Edge have spearheaded the capability toward general availability in Chrome 157 following origin trials, broader cross-engine support remains absent. Consequently, this serves as an advanced Chromium-centric telemetry enhancement rather than an interoperable baseline metric.

**Key Recommendations & Takeaways:**
- Actionable Advice: Performance monitoring and real-user monitoring (RUM) teams should adopt these properties through progressive enhancement by checking for property existence on frame and script timing entries. Teams can immediately leverage this telemetry in Chromium browsers to isolate CSS recalcs from layout thrashing while gracefully falling back to aggregate timings elsewhere.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tunetheweb: "Answering for @noamr who’s on annual leave at the moment.  This started off as part of the long tasks spec—hence the links in the original request in ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Performance timeline - Long Animation Frames](https://github.com/WebKit/standards-positions/issues/283) [open] 
  > *Latest discussion from @tunetheweb: "Answering for @noamr who’s on annual leave at the moment.  This started off as part of the long tasks spec—hence the links in the original request in ..."*

#### 📰 Ecosystem Blogs & Articles

- [Long Animation Frames Splits Style From Layout in Chrome 157: Finding Layout Thrashing in the Field \| Trade Assistance LLC](https://trade-assistance.com/blog/long-animation-frames-style-layout-duration-chrome-157) *(trade-assistance.com)*
  > Previously, LoAF bundled these phases together (via \`styleAndLayoutStart\` for frame rendering and \`forcedStyleAndLayoutDuration\` for script-level thrashing) \*\*Key takeaway:\*\* The feature progressed through origin trials ...
- [github.io](https://w3c.github.io/long-animation-frames) *(w3c.github.io)*
  > The updated specification introduces four dedicated timing properties
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/performance/identify-inp-causes?hl=en) *(developer.chrome.com)*
  > \`styleDuration\`: Time spent recalculating styles during the rendering update \`layoutDuration\`: Time spent computing geometry and layout passes
- [microsoft.com](https://developer.microsoft.com/microsoft-edge/origin-trials/trials/349e23d8-799a-4ac2-b45a-ffb91e09b4ce) *(developer.microsoft.com)*
  > \*\*Overview:\*\* Added under Chrome Platform Status (Tracking bug \`#476826067\`) and detailed across Chromium release cycles and Edge Origin Trials \*\*Overview:\*\* Microsoft highlighted the feature under its Origin Trial progr...
- [chromestatus.com](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > \*\*Overview:\*\* Added under Chrome Platform Status (Tracking bug \`#476826067\`) and detailed across Chromium release cycles and Edge Origin Trials
- [reddit.com](https://www.reddit.com/r/webperf/comments/1xfs4e0/webperf_weekly_26) *(reddit.com)*
  > \*\*Key takeaway:\*\* The feature progressed through origin trials across Chromium-based browsers before graduating toward shipping status (flagged in developer channels such as Chrome 157 beta and Chromium 158 communication...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17762.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Mike Taylor Th...
- [\[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17594.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Long Animation Frames style and layout duration Yoav Weiss (@Shopify) Wed, 30 ...
- [\[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration](http://www.mail-archive.com/blink-dev@chromium.org/msg17610.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Long Animation Frames style and layout duration Alex Russell Wed, 30 S...
- [\[blink-dev\] Intent to Prototype: Long Animation Frames style duration](https://www.mail-archive.com/blink-dev@chromium.org/msg15596.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/long-animation-frames/pull/30#issue-3828859369`)*
  > \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Long Animation Frames style duration Yoav Weiss (@Shopify) Mon, 19 Jan 2026 02:...

#### 📚 Platform Documentation & References

- [style\_layout\_duration\_security\_privacy\_questionnaire.md · GitHub](https://gist.github.com/yoavweiss/18e5c13239c43e34dadeda0fd2846834) *(gist.github.com)*
- [Long Animation Frames style and Layout duration · Issue #4453 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4453) *(github.com)*
- [Long Animation Frames style and layout duration · Issue #1615 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1615) *(github.com)*
- [Long Animation Frames style and layout duration · Issue #39 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/39) *(github.com)*
- [Release merge\_pr\_63724 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/releases/tag/merge_pr_63724) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (47 found across 11 planned queries, 17 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 9 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (3 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (7 found, 7 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

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

- **Momentum:** **Moderate** (+90 points since 2026-10-12; footprint 240 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"atomic_vec2u_min_max gpuweb"`, `"WebGPU atomic-vec2u-min-max"`, `"atomic-vec2u-min-max site:github.com/gpuweb/gpuweb"`
- **Analysis:** The \`atomic-vec2u-min-max\` feature introduces 64-bit atomic minimum and maximum operations to WebGPU storage buffers using \`atomic&lt;vec2u&gt;\` as a composite surrogate type, sidestepping the current absence of native 64-bit integer arithmetic in WGSL. It specifically targets high-performance graphics techniques—such as Nanite-style compute rasterization and visibility buffers packing depth and material IDs—while maximizing cross-platform hardware reach across Metal, Vulkan, and Direct3D 12. The feature has established consensus within the W3C GPU for the Web Working Group and is shipping enabled by default in Chromium.

**Key Recommendations & Takeaways:**
- Actionable Advice: WebGPU developers building compute-based rasterizers, clustering, or 64-bit atomic key-value operations should detect \`atomic-vec2u-min-max\` via \`adapter.features.has()\` and request it during device initialization. Because the extension remains an optional feature tied to modern hardware/driver capabilities, applications must maintain standard rasterization or 32-bit multi-pass fallbacks on unsupported devices.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > Details the feature implementation in Chromium via Dawn/Tint
- [chromestatus.com](https://chromestatus.com/feature/4882016087703552?gate=6119685002231808) *(chromestatus.com)*
  > Explains the motivation: granting shader authors the ability to implement high-performance algorithms needing 64-bit atomics without blocking on complete 64-bit arithmetic support in WGSL
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > Listed under new Web APIs and GPU platform updates alongside incoming WebGPU extensions
- [khronos.org](https://www.khronos.org/developers/linkto/wgsl) *(khronos.org)*
  > \*\*Nanite-style Software Rasterization & Visibility Buffers\*\*: In modern deferred rendering, developers pack 32 bits of depth and 32 bits of material/cluster ID into a 64-bit integer An atomic minimum operation on the pac...
- [htmlspecs.com](https://htmlspecs.com/WGSL) *(htmlspecs.com)*
  > \*\*Feature Gating\*\*: Because support depends on underlying hardware capabilities, developers must feature-check \`"atomic-vec2u-min-max"\` on the \`GPUAdapter\` when calling \`requestDevice()\` before enabling \`enable atomic\_ve...
- [\[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17518.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Chromestatus Mon, 21 Sep 2026 14:43:50 -0700 Contact emails \[email&#...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17518.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebGPU: atomic-vec2u-min-max Chromestatus Mon, 21 Sep 2026 14:43:50 -0700 Contact emails \[email&#...
- [\[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17533.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Vladimir Levin Wed, 23 Sep 2026 08:21:02 -0700 LGTM1 On Mond...
- [WGSL: Add atomic min max for u64, to support Nanite \[453689550\] - Chromium](https://issues.chromium.org/issues/453689550) *(issues.chromium.org)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > Chromium Sign in
- [Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max](http://www.mail-archive.com/blink-dev@chromium.org/msg17537.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/issues/5071`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebGPU: atomic-vec2u-min-max Daniel Bratell Wed, 23 Sep 2026 08:35:46 -0700 LGTM3...

#### 📚 Platform Documentation & References

- [w3.org](https://www.w3.org/TR/WGSL) *(w3.org)*
- [gpuweb/proposals/atomic-64-min-max.md at main · gpuweb/gpuweb · GitHub](https://github.com/gpuweb/gpuweb/blob/main/proposals/atomic-64-min-max.md) *(github.com)*
- [2074500 - (webgpu-atomic-vec2u-min-max) WebGPU: support \`atomic-vec2u-min-max\` feature](https://bugzilla.mozilla.org/show_bug.cgi?id=2074500) *(bugzilla.mozilla.org)*
- [Implement \`atomic-vec2u-min-max\` feature · Issue #10435 · gfx-rs/wgpu · GitHub](https://github.com/gfx-rs/wgpu/issues/10435) *(github.com)*
- [Landscape watch 2026-10-26 · Issue #17 · davtamay/Godot\_WebGPU · GitHub](https://github.com/davtamay/Godot_WebGPU/issues/17) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `webgpu` on [wpt.fyi](https://wpt.fyi/results?q=feature:webgpu) (webstatus.dev has no pass rates for it)

#### 🌐 Web-features Group Context

*group-level data: web-features [`webgpu`](https://webstatus.dev/features/webgpu), shared with 44 other ChromeStatus features*

- **Chrome usage:** 0.1% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/290))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/239))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (59 found across 13 planned queries, 19 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webgpu", shared with 44 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webgpu": no stable pass rate for Chrome yet)* · `Sources cited by the AI synthesis` (1 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (+80 points since 2026-10-12; footprint 180 points)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""maxwritewithoutresponsesizechanged" bluetooth"`, `""Make BluetoothRemoteGATTServer an EventTarget""`, `""BluetoothRemoteGATTServer" "EventTarget" blink-dev"`
- **Analysis:** Shipping enabled by default in Chrome 157, this change updates the BluetoothRemoteGATTServer interface to inherit directly from EventTarget, granting it standard addEventListener(), removeEventListener(), and dispatchEvent() capabilities. The change establishes the event plumbing necessary for connection-level notifications, most notably the separately proposed maxwritewithoutresponsesizechanged event for dynamic MTU handling. However, the feature exists entirely within Chromium's Web Bluetooth implementation, with no path toward broader web standardization.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building Chromium-targeted progressive web apps or internal hardware tools should feature-detect addEventListener on the GATT server before attaching connection-level listeners. For cross-browser consumer websites, Web Bluetooth should only be implemented as an optional progressive enhancement alongside native companion apps or manual fallback configurations.
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

- [github.io](https://webbluetoothcg.github.io/web-bluetooth) *(webbluetoothcg.github.io)*
  > The Web Platform update \*\*"Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget"\*\* updates the Web Bluetooth API specification getPrimaryService()\`)
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5138797158334464/activity) *(img968-dot-cr-status.appspot.com)*
  > Under this change, the \`BluetoothRemoteGATTServer\` interface inherits directly from \`EventTarget\` Community Group pull requests and WPT IDL harness tests cover \`EventTarget\` inheritance for \`BluetoothRemoteGATTServer\`
- [chromestatus.com](https://chromestatus.com/feature/5177569273053184) *(chromestatus.com)*
  > Connection parameters (such as the Maximum Transmission Unit / payload sizes or connection state updates) naturally belong to the GATT server instance Extending \`EventTarget\` paves the way for connection-level event noti...
- [\[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17579.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helm...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17603.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTar...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17833.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; \*Blink component\* &gt;&gt;&gt; ... host connection-level events. &lt;strong&gt;Making it an EventTarget gives web &gt;&gt;&gt; applications the standard event-listener API needed by events such as the...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17579.html) *(mail-archive.com)* *(Cites: `https://github.com/WebBluetoothCG/web-bluetooth/pull/672`)*
  > \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Helm...
- [Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget](http://www.mail-archive.com/blink-dev@chromium.org/msg17603.html) *(mail-archive.com)* *(Cites: `https://pr-preview.s3.amazonaws.com/hjanuschka/web-bluetooth/pull/672.html#bluetoothremotegattserver`)*
  > Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTarget Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Web Bluetooth: Make BluetoothRemoteGATTServer an EventTar...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService) *(developer.mozilla.org)*
- [BluetoothDevice - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice) *(developer.mozilla.org)*
- [Add BluetoothRemoteGATTServer.maxWriteWithoutResponseSize by hjanuschka · Pull Request #672 · whatwg/bluetooth · GitHub](https://github.com/whatwg/bluetooth/pull/672) *(github.com)*
- [Weekly hardening: build 11 missing feature demos, fill current-channel critiques, goal-setting fixes by PaulKinlan · Pull Request #21 · PaulKinlan/chrome-platform-showcase · GitHub](https://github.com/PaulKinlan/chrome-platform-showcase/pull/21) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `web-bluetooth` on [wpt.fyi](https://wpt.fyi/results?q=feature:web-bluetooth) (via webstatus.dev) — stable: Chrome 0.6% · Edge 3.2% · Firefox 0.6% · Safari 0.6%; experimental: Chrome 100% · Edge 4.5% · Firefox 0.6% · Safari 0.6%

#### 🌐 Web-features Group Context

*group-level data: web-features [`web-bluetooth`](https://webstatus.dev/features/web-bluetooth), shared with 12 other ChromeStatus features*

- **Chrome usage:** 0.000004% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/105))
- **Mozilla:** negative ([standards position](https://github.com/mozilla/standards-positions/issues/95))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (52 found across 12 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (7 found, 5 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "web-bluetooth", shared with 12 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "web-bluetooth": Chrome 0.6% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 8

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

- **Momentum:** **Moderate** (+70 points since 2026-10-12; footprint 345 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Responsively-sized iframes, powered by the CSS frame-sizing property and a responsive-embedded-sizing meta tag, address the decades-old struggle of seamlessly sizing embedded documents without nested scrollbars or bespoke postMessage hacks. While Chromium has shipped the feature enabled by default in Chrome 154, the specification remains under active development in the W3C CSS Working Group. Cross-engine consensus is not yet reached, leaving the capability single-vendor for now.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat responsively-sized iframes strictly as a progressive enhancement by layering the frame-sizing property on top of existing fallback dimensions and postMessage-based auto-resizers. Authors should pair iframe sizing with explicit CSS aspect-ratio or min-height constraints to mitigate severe layout shifts on supported Chromium browsers while maintaining full functionality in Safari and Firefox.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @bfgeek: "@jakearchibald - I posted a reply here: https://bsky.app/profile/bfgeek.bsky.social/post/3mxz67owyd22v as that seemed to be where more discussion was ..."
- Standards Activity (W3C TAG): Latest discussion from @dandclark: "Thanks for sending this to the TAG! We had a few points of feedback.  One is that the opt-in from the iframe isn't scoped in any way. The explainer \[p..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers on X: "Chrome 154 is rolling out now ⬇️ https://t.co/rteT1QOjaQ" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **11 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Chrome for Developers on X: "Chrome 154 is rolling out now ⬇️ https://t.co/rteT1QOjaQ" / X](https://x.com/ChromiumDev/status/2102804599325528424) — *Twitter / X by @ChromiumDev (0 likes/RTs, 0 replies)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Responsively-sized iframes](https://github.com/WebKit/standards-positions/issues/653) [open] `venue: W3C CSS WG`, `topic: frames`, `from: Google`
- **Mozilla:** [Responsively-sized iframes](https://github.com/mozilla/standards-positions/issues/1394) [open] 
  > *Latest discussion from @bfgeek: "@jakearchibald - I posted a reply here: https://bsky.app/profile/bfgeek.bsky.social/post/3mxz67owyd22v as that seemed to be where more discussion was ..."*
- **W3C TAG:** [Other Spec Review: Responsively-sized iframes](https://github.com/w3ctag/design-reviews/issues/1223) [open] `Progress: pending external feedback`, `Review type: later review`, `Topic: CSS`, `Venue: CSS WG`
  > *Latest discussion from @dandclark: "Thanks for sending this to the TAG! We had a few points of feedback.  One is that the opt-in from the iframe isn't scoped in any way. The explainer \[p..."*

#### 📰 Ecosystem Blogs & Articles

- [New in Chrome 154: iframes that automatically resize themselves to their content \| daily.dev](https://daily.dev/posts/new-in-chrome-154-iframes-that-automatically-resize-themselves-to-their-content-tg1hez2ee) *(daily.dev)*
  > The \*\*Responsively-sized \`&lt;iframe&gt;\`\*\* specification (part of the \*\*CSS Box Sizing Module Level 4\*\*) addresses a long-standing web design pain point: seamlessly sizing an \`&lt;iframe&gt;\` to match its embedded document's natura...
- [New in Chrome 154  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-154) *(developer.chrome.com)*
  > The feature officially shipped in \*\*Chrome 154\*\* Chrome developer relations detailed the new \`frame-sizing\` property
- [netlify.app](https://alexanderburgos.netlify.app/blog/chrome-154-responsive-iframes) *(alexanderburgos.netlify.app)*
  > postMessage()\`, \`ResizeObserver\`, and manual DOM height calculations, the platform introduces a native \*\*two-way opt-in\*\* contract \*\*The Parent (Embedder)\*\* sets the layout property via CSS
- [chrome.com](https://developer.chrome.com/blog/responsive-iframes?hl=de) *(developer.chrome.com)*
  > postMessage()\`, \`ResizeObserver\`, and manual DOM height calculations, the platform introduces a native \*\*two-way opt-in\*\* contract They demonstrated use cases such as embedded comment sections and dynamic multi-step form...
- [New in Chrome 154: iframes that automatically resize themselves to their content – Bram.us](https://www.bram.us/2026/09/23/responsive-iframes) *(bram.us)*
  > \*\*The Parent (Embedder)\*\* sets the layout property via CSS \*\*The Child (Embedded Document)\*\* explicitly permits size reporting in its \`&lt;head&gt;\`
- [web-standards.dev](https://web-standards.dev/news/2026/09/responsive-iframes-in-chrome-154) *(web-standards.dev)*
  > Chrome developer relations detailed the new \`frame-sizing\` property

#### 🔗 Inbound Citations & Reverse Links

- [Responsively-sized &lt;iframe&gt; · Issue #4036 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4036) *(github.com · 2026-05-14T09:39:56)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > Responsively-sized &lt;iframe&gt; · Issue #4036 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to r...
- [Responsive iframes · Issue #1443 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/1443) *(github.com · 2026-09-22T22:42:15)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > Responsive iframes · Issue #1443 · web-platform-tests/interop · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your...
- [Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13780.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes Jake Archibald Thu, 22 May 2025 22:44:37 -0700 Wouldn't the an...
- [\[blink-dev\] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13733.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > \[blink-dev\] Re: Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: Responsive iframes Jake Archibald Tue, 20 May 2025 00:05:50 -0700 I think the "one shot" ...
- [\[blink-dev\] Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13731.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > \[blink-dev\] Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Responsive iframes Chromestatus Mon, 19 May 2025 15:43:14 -0700 Contact emails \[email&#160;protec...

#### 📚 Platform Documentation & References

- [CSS Box Sizing Module Level 4](https://www.w3.org/TR/css-sizing-4) *(w3.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/frame-sizing) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) *(developer.mozilla.org)*
- [github.com](https://github.com/WebKit/standards-positions/issues/653) *(github.com)*
- [w3.org](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1223) *(tag-github-bot.w3.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 12 planned queries, 19 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 15 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 1 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 7

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

- **Momentum:** **Moderate** (+70 points since 2026-10-12; footprint 190 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** Iterator.prototype.includes bridges a long-standing ergonomics gap in JavaScript by allowing developers to lazily check whether an iterator yields a given value without converting it to an array. Championed through TC39 Stage 3, the feature has achieved unanimous engine consensus and shipped enabled by default in Chromium 154 and Firefox 154. With WebKit implementing support in Safari Technology Preview release notes, the API is rapidly approaching full cross-browser interoperability.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web development teams can adopt the method immediately in modern environments by pairing native calls with a core-js polyfill or a fallback check on Iterator.prototype.includes. When consuming it, developers should ensure offset parameters are non-negative integers to avoid throwing unexpected RangeError exceptions.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2025773: \[meta\] Iterator includes proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=2025773) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [codercops.com](https://blog.codercops.com/blog/chrome-154-websocket-options-iterator-includes-https-prompts-2026) *(blog.codercops.com)*
  > It lazily consumes the iterator up to the matching value and returns \`true\`, or exhausts it and returns \`false\` includes(targetValue)\`
- [chrome.com](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > includes()\` as officially shipped in Chromium / Chrome 154
- [socket.dev](https://socket.dev/blog/tc39-advances-temporal-to-stage-4) *(socket.dev)*
  > stack\` and finishing \`Temporal\` The write-ups describe \`includes()\` as a much-needed ergonomic convenience method that completes the iterator helper roadmap
- [kevinlangleyjr.dev](https://kevinlangleyjr.dev/blog/whats-new-in-es2026) *(kevinlangleyjr.dev)*
  > The write-ups describe \`includes()\` as a much-needed ergonomic convenience method that completes the iterator helper roadmap some()\` callbacks for simple equality checks
- [core-js.io](https://core-js.io/changelog) *(core-js.io)*
  > includes\` to \`core-js\`, allowing developers using Babel/bundlers to adopt the syntax across older environments
- [Re: \[blink-dev\] Intent to Ship: Iterator Includes](http://www.mail-archive.com/blink-dev@chromium.org/msg17260.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Iterator Includes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Iterator Includes Mike Taylor Mon, 24 Aug 2026 07:00:20 -0700 LGTM1 On 8/24/26 9:40 a.m., Chromestat...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: Iterator Includes](http://www.mail-archive.com/blink-dev@chromium.org/msg17260.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5205192866922496`)*
  > Re: \[blink-dev\] Intent to Ship: Iterator Includes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Iterator Includes Mike Taylor Mon, 24 Aug 2026 07:00:20 -0700 LGTM1 On 8/24/26 9:40 a.m., Chromestat...
- [\[blink-dev\] Intent to Ship: Iterator Includes](http://www.mail-archive.com/blink-dev@chromium.org/msg17264.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-iterator-includes`)*
  > \[blink-dev\] Intent to Ship: Iterator Includes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Iterator Includes Chromestatus Mon, 24 Aug 2026 09:07:18 -0700 Contact emails \[email&#160;protected\] , \[emai...
- [Iterator Includes · Issue #4302 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4302) *(github.com · 2026-09-03T10:35:01)* *(Cites: `https://tc39.es/proposal-iterator-includes`)*
  > Iterator Includes · Issue #4302 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh you...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/tc39/proposals/blob/main/finished-proposals.md) *(github.com)*
- [Iterator.prototype.includes() - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) *(developer.mozilla.org)*
- [github.com](https://github.com/tc39/agendas/blob/main/2026/09.md) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (72 found across 12 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 11 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (6 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="6225598451154944-local-network-access-restrictions-for-background-fetch"></a>
### [Local Network Access restrictions for Background Fetch](https://chromestatus.com/feature/6225598451154944)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6225598451154944](https://chromestatus.com/feature/6225598451154944) · [chromestatuslite.com/feature/6225598451154944](https://chromestatuslite.com/feature/6225598451154944)
- **Specification:** [https://wicg.github.io/background-fetch](https://wicg.github.io/background-fetch)
- **Chromium Bug:** [https://crbug.com/455486148](https://crbug.com/455486148)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Shipped/Shipping` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/local-network-access) (Chrome: `145`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`local-network-access`](https://webstatus.dev/features/local-network-access), shared with 7 other ChromeStatus features*

#### 📝 Overview

Background Fetch requests now require that the service worker's origin has the necessary Local Network Access (LNA) permission to send requests to local or loopback servers.  This aligns Chromium's implementation with the intent of the Background Fetch spec, which states that such requests go through the Fetch spec and have the same security policies applied to them including, in this case, LNA checks. This prevents sites from bypassing LNA checks by using \[Background Fetch spec\](https://wicg.github.io/background-fetch/) instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).  For enterprises, you can use existing LNA enterprise policies in the same way you previously would have for regular Fetch API requests from service workers: - \[LocalNetworkAccessRestrictionsTemporaryOptOut\](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut) - \[LocalNetworkAccessAllowedForUrls\](https://chromeenterprise.google/policies/#LocalNetworkAccessAllowedForUrls) - \[LoopbackNetworkAllowedForUrls\](https://chromeenterprise.google/policies/#LoopbackNetworkAllowedForUrls) - \[LocalNetworkAccessPermissionsPolicyDefaultEnabled\](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled) - \[LocalNetworkAccessIpAddressSpaceOverrides\](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides)).

> **Motivation:** This fixes a security issue where Background Fetch unintentionally bypasses security policies such as Local Network Access checks.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Moderate** (+70 points since 2026-10-12; footprint 160 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Shipped in Chromium 154, this update closes a security bypass by subjecting Background Fetch requests initiated from service workers to the same Local Network Access (LNA) checks as standard fetch requests. While the Background Fetch API itself remains Chromium-only, closing this loophole harmonizes worker networking with the broader cross-engine drive to protect private and loopback networks from public origin abuse. Developer and security reception is generally supportive of the hardened attack surface, even though it adds architectural friction for legitimate intranet and companion daemon use cases.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams targeting local or loopback services must explicitly query and secure user permission—such as 'local-network' or 'loopback-network'—from an active document context before delegating downloads to Background Fetch in a service worker. Enterprise administrators managing internal deployments facing regressions should deploy temporary management policies like LocalNetworkAccessAllowedForUrls while transitioning endpoints to compliant secure contexts.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @christhompson: "We aren't sure about venue yet but it has been on my mind some. Some parts will just be merged into the various relevant specifications, but there def..."
- Standards Activity (Mozilla): Latest discussion from @dveditz: "We're presumably "positive" on this since we've implemented most of it and enabled it on Nightly. What are the formal steps needed at this point?..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Request for Position: Local Network Access](https://github.com/WebKit/standards-positions/issues/520) [open] `topic: networking`, `venue: WICG`, `topic: meaningful user consent`, `concerns: venue`, `from: Google`
  > *Latest discussion from @christhompson: "We aren't sure about venue yet but it has been on my mind some. Some parts will just be merged into the various relevant specifications, but there def..."*
- **Mozilla:** [Local Network Access](https://github.com/mozilla/standards-positions/issues/1260) [open] `venue: W3C CG`, `team: Networking`
  > *Latest discussion from @dveditz: "We're presumably "positive" on this since we've implemented most of it and enabled it on Nightly. What are the formal steps needed at this point?..."*

#### 📰 Ecosystem Blogs & Articles

- [Chrome 154  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > In \*\*Chrome 154\*\*, Chromium introduced \*\*Local Network Access (LNA) restrictions for Background Fetch\*\*
- [appspot.com](https://cr-status.appspot.com/feature/6210300985606144) *(cr-status.appspot.com)*
  > Previously, Background Fetch tasks in Chromium were processed through internal download/navigation machinery, which inadvertently allowed web applications to bypass LNA permission prompts and CORS checks when querying lo...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > With this change, Background Fetch requests initiated from Service Workers are routed through standard Fetch specification security checks \*\*Origin Permission Required:\*\* If a public web origin initiates a Background Fet...
- [New permission prompt for Local Network Access  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/local-network-access) *(developer.chrome.com)*
  > \*\*Origin Permission Required:\*\* If a public web origin initiates a Background Fetch targeting private network addresses (e.g., \`10.0.0.0/8\`, \`192.168.0.0/16\`) or loopback interfaces (e.g., \`127.0.0.1\`, \`localhost\`), the ...
- [uillinois.edu](https://help.uillinois.edu/TDClient/37/uic/KB/Article/2993/How-do-I-edit-Google-Chrome-Local-Network-Access-Permissions) *(help.uillinois.edu)*
  > \*\*Impacted Use Cases:\*\* Web applications that communicate with desktop helper daemons (such as hardware wallets, 3D printer drivers, local Plex/media servers, or Box/Dropbox desktop link utilities) via Background Fetch w...
- [chrome.com](https://developer.chrome.com/blog/new-in-devtools-136) *(developer.chrome.com)*
  > \*\*DevTools Diagnostics:\*\* Updates in Chrome DevTools now surface explicit LNA CORS and permission errors directly in the Network and Issues tabs, allowing engineers to identify blocked Background Fetch calls

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Local_network_access) *(developer.mozilla.org)*
- [edge-developer/microsoft-edge/web-platform/release-notes/154.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/154.md) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 11 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 8 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (4 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "local-network-access", shared with 7 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "local-network-access": no stable pass rate for Chrome yet)*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 8

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

- **Momentum:** **Moderate** (+60 points since 2026-10-12; footprint 430 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebKit" "HTML streaming & revamped DOM parsing" standards-positions"`, `""Renewed HTML insertion" OR "streamHTML" OR "streamAppendHTML" WHATWG"`, `""dynamic-markup-revamped-explainer" OR "streamHTMLUnsafe" OR "appendHTML""`
- **Analysis:** The renewed HTML insertion and streaming methods modernize legacy DOM injection APIs by replacing disjointed primitives like insertAdjacentHTML with a symmetrical matrix of positional and streaming methods such as appendHTML and streamAppendHTML. Slated to ship enabled by default in Chrome 157 under the Declarative Partial Updates initiative, the suite standardizes built-in sanitization, explicit script execution via runScripts, and native WritableStream integration with Fetch streams. The broader web standards consensus is highly favorable, though cross-browser implementation timelines remain staggered.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should explore and benchmark streaming workflows in Chromium developer builds using experimental flags while keeping production applications rooted in progressive enhancement. Before deploying in multi-engine production environments, gate usages behind feature detection for Element.prototype.appendHTML and streamHTML, falling back to insertAdjacentHTML or standard manual DOM node assembly for non-supporting browsers.
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

- [sakupi01.com](https://studio.sakupi01.com/whatwg/declarative-partial-updates/renewed-html-insertion-and-streaming-methods) *(studio.sakupi01.com)*
  > The \*\*"Renewed HTML insertion & streaming methods"\*\* (developed in tandem with the broader \*\*Declarative Partial Updates\*\* initiative) represents a modernization of how the Web Platform parses and injects HTML into the D...
- [daily.dev](https://daily.dev/posts/declarative-partial-updates-5buxplifg) *(daily.dev)*
  > The \*\*"Renewed HTML insertion & streaming methods"\*\* (developed in tandem with the broader \*\*Declarative Partial Updates\*\* initiative) represents a modernization of how the Web Platform parses and injects HTML into the D...
- [How Declarative Partial Updates Work in HTML](https://www.freecodecamp.org/news/how-declarative-partial-updates-work-in-html) *(freecodecamp.org)*
  > Historically, developers relied on an inconsistent set of APIs (\`innerHTML\`, \`outerHTML\`, \`insertAdjacentHTML\`, and \`createContextualFragment\`), each with differing positions, sanitization behaviors, and script execution...
- [Out-of-Order HTML Streaming Moves from JS Frameworks into the Browser - InfoQ](https://www.infoq.com/news/2026/09/native-deferred-html-streaming) *(infoq.com)*
  > \*\*Positional Methods:\*\* Clear, declarative methods on \`Element\` and \`ChildNode\` (\`setHTML\`, \`appendHTML\`, \`prependHTML\`, \`beforeHTML\`, \`afterHTML\`, \`replaceWithHTML\`) that replace the cryptic position arguments of \`inser...
- [uxify.com](https://uxify.com/blog/google-io-2026-recap) *(uxify.com)*
  > pipeTo(...)\` without waiting for the full network payload It breaks down how \`streamHTMLUnsafe()\` pipes incoming chunks into an internal HTML fragment parser, allowing developers to implement island architectures and ser...
- [azukiazusa.dev](https://azukiazusa.dev/en/blog/stream-append-html) *(azukiazusa.dev)*
  > \*\*\`{runScripts}\` Support:\*\* The \`SetHTMLUnsafeOptions\` dictionary introduces a \`runScripts\` option, allowing developers to explicitly replicate \`createContextualFragment\` behavior when scripts must execute, while default...

#### 🔗 Inbound Citations & Reverse Links

- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com · 2026-06-17T18:03:04)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or wind...
- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700...
- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, ...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/whatwg/html/issues/2142?timeline_page=1) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/629) *(github.com)*
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com)*
- [Coherent story for HTML-setting methods · Issue #11669 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/11669) *(github.com)*
- [GitHub - WICG/declarative-partial-updates · GitHub](https://github.com/WICG/declarative-partial-updates) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `domparser` on [wpt.fyi](https://wpt.fyi/results?q=feature:domparser) (via webstatus.dev) — stable: Chrome 90.5% · Edge 90.5% · Firefox 95.2% · Safari 81%; experimental: Chrome 90.5% · Edge 90.5% · Firefox 95.2% · Safari 90.5%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (66 found across 12 planned queries, 29 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 14 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (1 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "domparser", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "domparser": Chrome 90.5% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 6 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 6

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

- **Momentum:** **Moderate** (+60 points since 2026-10-12; footprint 190 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Avoid caching module failures""`, `""whatwg/html" 10327 module map"`, `""Don't cache" module map failure whatwg"`
- **Analysis:** The web platform has resolved a long-standing architectural pain point by removing transient network failures and HTTP errors from the browser's internal module map following WHATWG HTML PR #10327. Shipped by default in Chrome 156 with matching implementations landing across Firefox and WebKit (Safari Technology Preview), the feature transitions the platform from strict idempotency of failures to an availability-first model. This allows failed dynamic imports to be retried in-place without resorting to cache-busting URLs or disruptive full-page reloads.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should incorporate retry utilities or user-facing retry actions into their dynamic import wrappers and UI error boundaries to gracefully recover from temporary offline blips or server restarts. However, applications must remember that module evaluation failures and missing hashed chunks from newer deployments cannot be solved by retrying alone, and older browser versions will still require fallback strategies.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [trade-assistance.com](https://trade-assistance.com/blog/chrome-stops-caching-failed-module-imports-retry-dynamic-import) *(trade-assistance.com)*
  > Historically, the HTML specification dictated that browsers store all module fetch outcomes—including network errors, HTTP error codes, and MIME type mismatches—in the page’s internal \*\*module map\*\* Because the module ma...
- [chromestatus.com](https://chromestatus.com/feature/5214647044145152?gate=6551884683935744) *(chromestatus.com)*
  > Historically, the HTML specification dictated that browsers store all module fetch outcomes—including network errors, HTTP error codes, and MIME type mismatches—in the page’s internal \*\*module map\*\* The web platform spec...
- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > \*\*The Announcement:\*\* Introduced in the Chrome 155 beta and officially enabled by default in Chrome 156 desktop/Android, the Blink team labeled the feature \*\*"Avoid caching module failures"\*\*
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*The Announcement:\*\* Introduced in the Chrome 155 beta and officially enabled by default in Chrome 156 desktop/Android, the Blink team labeled the feature \*\*"Avoid caching module failures"\*\*
- [pixoptimo.com](https://pixoptimo.com/javascript-module-retry-chrome-156) *(pixoptimo.com)*
  > \*\*Developer Action:\*\* Highlights that while the browser \*permits\* retries, it does \*\*not\*\* auto-retry on your behalf Developers must wire up retry logic (e.g., wrapping \`import()\` inside an exponential backoff function o...
- [iloveblogs.blog](https://www.iloveblogs.blog/post/failed-to-fetch-dynamically-imported-module) *(iloveblogs.blog)*
  > js Developers emphasize an important distinction: retrying an \`import()\` succeeds if the failure was caused by a \*\*temporary network blip, tunnel drop, or a transient 5xx server error\*\*

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17429.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Mike Taylor Thu, 10 Sep 2026 07:33:43 -0700 LGTM - thanks!...
- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com · 2026-09-14T08:09:53)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload t...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17431.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Chris Harrelson Thu, 10 Sep 2026 10:08:03 -0700 LGTM2 On T...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 08:43:49 -0700 \*Contact ema...
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/whatwg/html/pull/10327`)*
  > 2055211 - Don't cache HTTP errors in the module map Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advanced Search New Bug Reports D...

#### 📚 Platform Documentation & References

- [Avoid caching module failures · Issue #4335 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4335) *(github.com)*
- [w3.org](https://www.w3.org/groups/cg/webdx/activity) *(w3.org)*
- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com)*
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-03 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0000.html) *(lists.w3.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 12 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 9 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (1 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (5 found, 5 verified)
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

- **Momentum:** **Moderate** (+60 points since 2026-10-12; footprint 180 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** The addition of an options bag (WebSocketInit) to the WebSocket constructor modernizes the legacy API to mirror Fetch-like ergonomics and establishes an extensible foundation for modern networking features like Local Network Access (targetAddressSpace). Chromium has enabled the feature by default starting in Chrome 154, tracking WHATWG specification updates that maintain backwards compatibility with existing subprotocol strings. Cross-engine consensus is broadly favorable, with WebKit formally backing the specification change and Mozilla actively reviewing the proposal.

**Key Recommendations & Takeaways:**
- Actionable Advice: For general production code, continue using the traditional string or array syntax for subprotocols until Safari and Firefox ship native support to ensure baseline cross-browser interoperability. If your application specifically requires Chromium's Local Network Access controls, guard constructor usage with feature detection before passing the WebSocketInit dictionary.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [closed] `position: support`, `topic: networking`, `venue: WHATWG HTML Workstream`, `from: Google`
  > *Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."*
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open] `venue: WHATWG`, `topic: API`

#### 📰 Ecosystem Blogs & Articles

- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > Chrome 154 Release Notes - Chrome Platform Status Chrome 154 Release Notes Preview Scheduled Stable Release September 22, 2026 Network / Connectivity Pending review Add options bag to WebSocket constructor # Link copied!...
- [Chrome 154  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > \*\*After:\*\* Developers can pass a dictionary object with a \`protocols\` key \*\*Sources:\*\* \[\*Chrome for Developers: Chrome 154 Release notes\*\](https://developer.chrome.com/) and \[\*Chrome 154 Beta Blog\*\](https://developer.chr...
- [Chrome 154 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > \*\*Sources:\*\* \[\*Chrome for Developers: Chrome 154 Release notes\*\](https://developer.chrome.com/) and \[\*Chrome 154 Beta Blog\*\](https://developer.chrome.com/) This setting matches existing behavior in the Fetch API to navig...
- [9161afacba1066fd38656b697bd8cd7bd2c23229 - chromium/src - Git at Google](https://chromium.googlesource.com/chromium/src/+/9161afacba1066fd38656b697bd8cd7bd2c23229) *(chromium.googlesource.com)*
  > 9161afacba1066fd38656b697bd8cd7bd2c23229 - chromium/src - Git at Google Sign in &#9681; Theme chromium / chromium / src / 9161afacba1066fd38656b697bd8cd7bd2c23229 commit 9161afacba1066fd38656b697bd8cd7bd2c23229 \[ log \] a...
- [nodejs.org](https://undici.nodejs.org/api/WebSocket) *(undici.nodejs.org)*
  > js Undici WebSocket Documentation\*\](https://undici.nodejs.org/) & runtime issue trackers js (via Undici) and Deno had already implemented custom \`WebSocketInit\` dictionaries out of necessity—allowing developers to specif...
- [Chrome 154 for Developers: What Changed and What to Test — CODERCOPS](https://blog.codercops.com/blog/chrome-154-websocket-options-iterator-includes-https-prompts-2026) *(blog.codercops.com)*
  > \*\*Sources:\*\* \*CoderCops: Chrome 154 for Developers\*, \*Polypane Experimental Web Platform Features\* \*\*Details:\*\* Tooling and developer roundups emphasize this as a welcome quality-of-life upgrade

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to ...
- [Add option bag to WebSocket constructor \[542670554\] - Chromium](https://issues.chromium.org/issues/542670554) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor](http://www.mail-archive.com/blink-dev@chromium.org/msg17124.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/websockets/pull/76`)*
  > \[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Add options bag to WebSocket constructor Chromestatus Wed, 05 Aug 2026 10:5...

#### 📚 Platform Documentation & References

- [Support \`targetAddressSpace\` in WebSockets · Issue #126 · WICG/local-network-access · GitHub](https://github.com/WICG/local-network-access/issues/126) *(github.com)*
- [Weekly hardening: v154 coverage (WebSocket options bag + text-decoration-inset) and v147 MDN-shape upgrade by PaulKinlan · Pull Request #10 · PaulKinlan/gendn · GitHub](https://github.com/PaulKinlan/gendn/pull/10) *(github.com)*
- [Add targetAddressSpace integration in WebSockets by christhompson · Pull Request #125 · WICG/local-network-access · GitHub](https://github.com/WICG/local-network-access/pull/125) *(github.com)*
- [fix(local-network-access): update WebSocket LNA guidance and IPv6 localhost flag (#1651) by rowan-m · Pull Request #1727 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/pull/1727) *(github.com)*
- [Supporting options bag in WebSocket constructor · Issue #1444 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1444) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `websockets` on [wpt.fyi](https://wpt.fyi/results?q=feature:websockets) (via webstatus.dev) — stable: Chrome 94.2% · Edge 94.2% · Firefox 96.6% · Safari 95.2%; experimental: Chrome 95.4% · Edge 95.4% · Firefox 96.6% · Safari 95.2%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 12 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(group "websockets", shared with 5 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "websockets": Chrome 94.2% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 1

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

- **Momentum:** **Moderate** (+60 points since 2026-10-12; footprint 165 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Window Shape API" "Isolated Web Apps" OR ChromeOS"`
- **Analysis:** The Window Shape API (\`window.setShape\`) is a ChromeOS-specific capability designed strictly for allowlisted Isolated Web Apps (IWAs) operating in unframed display mode with window-management permissions. It enables developers to define non-rectangular and non-contiguous window boundaries using a series of bounding rectangles, unlocking desktop-native widgets, floating tools, and overlay interfaces. Because its explicit non-goals exclude standard web pages and other operating systems, it functions as an enterprise-managed platform extension rather than an open web standard.

**Key Recommendations & Takeaways:**
- Actionable Advice: Mainstream web applications should ignore this feature because it cannot be deployed to standard web origins or general PWAs. ChromeOS enterprise developers building managed IWAs should verify that target devices meet allowlist requirements and ensure strict feature detection around \`window.setShape\` while providing rectangular fallback layouts.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **4 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/HEAD/chromeos/ash/experiences/isolated_web_app) *(chromium.googlesource.com)*
  > Regions outside these bounds are transparent, allowing pointer and touch events to pass through directly to underlying windows The app must run as an Isolated Web App (IWA) on ChromeOS whose bundle ID is present on an in...
- [chromestatus.com](https://chromestatus.com/feature/5075144470036480/activity) *(chromestatus.com)*
  > At least one rectangle must meet a minimum size constraint of 10×10 pixels to prevent invisible windows or clickjacking attacks setShape\`) into the modern IWA architecture
- [Chrome 154 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > setShape()\`, and outline the associated enterprise policies (\`WindowManagementAllowedForUrls\`, \`WindowManagementBlockedForUrls\`, \`DefaultWindowManagementSetting\`)
- [\[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16965.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Window shape API Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Window shape API 'Edman Anjos' via blink-dev Mon, 13 Jul 2026 13:05:11 -0700 Hi Alex, thanks a lot fo...
- [Re: \[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16994.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Window shape API Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Window shape API Mike Taylor Thu, 16 Jul 2026 12:46:11 -0700 LGTM2 - we already discussed the...
- [\[blink-dev\] Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16945.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Window shape API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Window shape API Chromestatus Wed, 08 Jul 2026 09:58:24 -0700 Contact emails \[email&#160;protected\] , \[email&...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16965.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > \[blink-dev\] Re: Intent to Ship: Window shape API Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Window shape API 'Edman Anjos' via blink-dev Mon, 13 Jul 2026 13:05:11 -0700 Hi Alex, thanks a lot fo...
- [Re: \[blink-dev\] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16994.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Window shape API Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Window shape API Mike Taylor Thu, 16 Jul 2026 12:46:11 -0700 LGTM2 - we already discussed the...
- [\[blink-dev\] Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16945.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > \[blink-dev\] Intent to Ship: Window shape API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Window shape API Chromestatus Wed, 08 Jul 2026 09:58:24 -0700 Contact emails \[email&#160;protected\] , \[email&...
- [Re: \[blink-dev\] Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg17009.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > Re: \[blink-dev\] Intent to Ship: Window shape API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Window shape API edmanp via Chromestatus Mon, 20 Jul 2026 14:17:20 -0700 Hi Alex, Mike, I have update...

#### 🧪 Interactive Demos & Samples

- [Window Shape API Demo](https://github.com/paulinagacek/Set-Shape-demo)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (45 found across 12 planned queries, 13 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 3 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (4 found, 0 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (1 found, 0 verified) · `Engine Bug Trackers` (5 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (1 found, 1 verified)
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

- **Momentum:** **Moderate** (+50 points since 2026-10-12; footprint 175 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"overscroll areas w3c csswg"`, `""Overscroll Areas" css"`, `""Declarative Overscroll Actions" openui"`
- **Analysis:** Overscroll Areas (incubating as Declarative Overscroll Actions in Open UI and advancing toward CSS Overscroll Behavior Module Level 2) introduces declarative primitives for gesture-driven UI patterns like drawer menus and bottom sheets. Currently advancing through Chromium prototyping and planned Origin Trials, the proposal seeks to offload swipe-to-reveal physics directly to compositor threads without complex JavaScript workarounds. However, formal cross-engine consensus remains at a very early stage, with neither Safari nor Firefox yet committing to an official stance.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should treat Overscroll Areas purely as an experimental prototype rather than adopting it in production pipelines. Developers interested in swipe gestures and bottom sheets should test prototypes behind Chromium flags or Origin Trials while ensuring production designs rely on progressive enhancement with keyboard-accessible trigger buttons and standard dialog elements.
- In active Origin Trial in Chrome 157. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [bram.us](https://www.bram.us/2026/06/21/do-websites-need-to-function-exactly-the-same-on-every-platform) *(bram.us)*
  > \*\*Platform Expectations:\*\* In his post \*"Do Websites Need to Function Exactly the Same on Every Platform?"\*, Bramus addressed concerns about discoverability on desktop He argued against mandating visible trigger buttons ...
- [Re: \[blink-dev\] Intent to Experiment: Overscroll Areas](http://www.mail-archive.com/blink-dev@chromium.org/msg17624.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Overscroll Areas Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Overscroll Areas Chris Harrelson Wed, 30 Sep 2026 13:09:38 -0700 LGTM On Wed, Sep 30, 202...
- [\[blink-dev\] Ready for Developer Testing: Overscroll Gestures](http://www.mail-archive.com/blink-dev@chromium.org/msg16333.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Overscroll Gestures Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Overscroll Gestures Chromestatus Fri, 17 Apr 2026 11:44:16 -0700 Contact emails ...
- [\[blink-dev\] Intent to Experiment: Overscroll Areas](http://www.mail-archive.com/blink-dev@chromium.org/msg17620.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Overscroll Areas Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Overscroll Areas Chromestatus Wed, 30 Sep 2026 12:21:40 -0700 Contact emails \[email&#160;protecte...
- [Overscroll Areas - Google Slides](https://docs.google.com/presentation/d/1J7RrjKQQCuqLjxTOTvGWoGmxq2FzVvL00YpEczaRUUo/edit?slide=id.p) *(docs.google.com)*
  > Overscroll Areas · Tab · External · Slideshow · Share · Sign in · File · Edit · View · Help · Accessibility · Debug · Unsaved changes to Drive · Accessibility ·
- [\[blink-dev\] Intent to Prototype: Overscroll Gestures](https://www.mail-archive.com/blink-dev@chromium.org/msg14574.html) *(mail-archive.com)*
  > False Tracking bug https://issues.chromium.org/443719046 Estimated milestones No milestones specified Link to entry on the Chrome Platform Status https://chromestatus.com/feature/5261280285949952?gate=5128016409788416 Th...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Experiment: Overscroll Areas](http://www.mail-archive.com/blink-dev@chromium.org/msg17624.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5261280285949952`)*
  > Re: \[blink-dev\] Intent to Experiment: Overscroll Areas Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Overscroll Areas Chris Harrelson Wed, 30 Sep 2026 13:09:38 -0700 LGTM On Wed, Sep 30, 202...
- [Overscroll Gestures · Issue #1053 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1053) *(github.com · 2026-07-29T18:36:22)* *(Cites: `https://chromestatus.com/feature/5261280285949952`)*
  > Overscroll Gestures · Issue #1053 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to r...
- [\[blink-dev\] Ready for Developer Testing: Overscroll Gestures](http://www.mail-archive.com/blink-dev@chromium.org/msg16333.html) *(mail-archive.com)* *(Cites: `https://open-ui.org/components/overscroll-actions.explainer`)*
  > \[blink-dev\] Ready for Developer Testing: Overscroll Gestures Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Overscroll Gestures Chromestatus Fri, 17 Apr 2026 11:44:16 -0700 Contact emails ...
- [\[blink-dev\] Intent to Experiment: Overscroll Areas](http://www.mail-archive.com/blink-dev@chromium.org/msg17620.html) *(mail-archive.com)* *(Cites: `https://open-ui.org/components/overscroll-actions.explainer`)*
  > \[blink-dev\] Intent to Experiment: Overscroll Areas Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Overscroll Areas Chromestatus Wed, 30 Sep 2026 12:21:40 -0700 Contact emails \[email&#160;protecte...

#### 📚 Platform Documentation & References

- [Introduce "Declarative Overscroll Actions" · Issue #1372 · openui/open-ui · GitHub](https://github.com/openui/open-ui/issues/1372) *(github.com)*
- [Overscroll Areas: drawer menus and bottom sheets · Issue #7 · w3c/tpac2026-breakouts · GitHub](https://github.com/w3c/tpac2026-breakouts/issues/7) *(github.com)*
- [Overscroll Areas feel like they should be done through CSS · Issue #1457 · openui/open-ui · GitHub](https://github.com/openui/open-ui/issues/1457) *(github.com)*
- [w3.org](https://www.w3.org/2026/09/03-css-minutes.html) *(w3.org)*
- [w3.org](https://www.w3.org/events/meetings/a275b20d-cdd5-4771-83a6-df48b8885a54) *(w3.org)*

#### 🧪 Interactive Demos & Samples

- [Overscroll Areas Demo](https://flackr.github.io/web-demos/html/overscrollcontainer)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 13 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (3 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (5 found, 5 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Moderate** (+50 points since 2026-10-12; footprint 70 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Page-Embedded Permission Control" icon-only"`, `""Capability Elements" "displaymode""`, `""Capability Elements" camera microphone geolocation"`, `""WebKit/standards-positions" "Page-Embedded Permission Control" OR "Capability Element""`
- **Analysis:** Shipping enabled by default in Chromium and Microsoft Edge 157, the icon-only mode adds a declarative \`displaymode="icon-only"\` attribute to Capability Elements such as \`&lt;camera&gt;\`, \`&lt;microphone&gt;\`, and \`&lt;geolocation&gt;\`. This iteration directly resolves longstanding layout friction where immutable localized text broke compact designs like map controls and video floating toolbars, while preserving browser-mediated clickjacking protections and screen-reader accessibility. However, because the capability elements model remains primarily a Chromium-driven effort, cross-engine interoperability is not yet established.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt \`&lt;camera&gt;\`, \`&lt;microphone&gt;\`, or \`&lt;geolocation&gt;\` elements with \`displaymode="icon-only"\` strictly as a progressive enhancement for Chromium-based visitors to recover blocked permissions gracefully in tight UI spaces. Always guard these elements behind feature detection and retain standard fallback paths using imperative \`navigator.mediaDevices.getUserMedia()\` and \`navigator.geolocation\` invocations for Safari and Firefox.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > The \*\*"Capability Elements Icon-only mode"\*\* (tracked in ChromeStatus as \[Feature #5153829504024576\](https://chromestatus.com/feature/5153829504024576)) introduces a declarative \`displaymode="icon-only"\` attribute to the...
- [appspot.com](https://img168-dot-cr-status.appspot.com/feature/5107682460696576) *(img168-dot-cr-status.appspot.com)*
  > The \*\*"Capability Elements Icon-only mode"\*\* (tracked in ChromeStatus as \[Feature #5153829504024576\](https://chromestatus.com/feature/5153829504024576)) introduces a declarative \`displaymode="icon-only"\` attribute to the...
- [chromestatus.com](https://chromestatus.com/feature/5153829504024576) *(chromestatus.com)*
  > While secure against clickjacking and UI spoofing, this mandatory text broke compact UI patterns While both engines have historically voiced caution around element-level permission injection and potential spoofing surfac...
- [Microsoft Edge 157 web platform release notes (Nov. 5, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > Microsoft Edge documented the feature rollout for \*\*Edge 157\*\*, providing practical markup examples Edge’s release documentation highlights that even when text is visually absent, the user agent generates localized acces...
- [permission.site](http://permission.site/media_capture_element.html) *(permission.site)*
  > site:\*\* The testbed updated its suite to include a \*\*Media Capture Elements Demo\*\*, allowing developers to test the behavior of \`&lt;camera displaymode="icon-only"&gt;\` and \`&lt;microphone displaymode="icon-only"&gt;\` directly in Ca...
- [whatpwacando.today](https://whatpwacando.today/media-capability-elements) *(whatpwacando.today)*
  > today\`):\*\* Added interactive demos demonstrating how declarative capability elements switch between default labeled layouts and compact icon buttons, showing how event handlers like \`addEventListener('track', ...)\` integ...

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `permissions` on [wpt.fyi](https://wpt.fyi/results?q=feature:permissions) (via webstatus.dev) — stable: Chrome 66.7% · Edge 61.1% · Firefox 66.7% · Safari 33.3%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 33.3%

#### 🌐 Web-features Group Context

*group-level data: web-features [`permissions`](https://webstatus.dev/features/permissions), shared with 5 other ChromeStatus features*

- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/19))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (49 found across 12 planned queries, 3 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 6 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "permissions", shared with 5 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "permissions": Chrome 66.7% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 1 verified)
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

- **Momentum:** **Moderate** (+40 points since 2026-10-12; footprint 170 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebTransport.reliability" chrome"`, `""WebTransport" "reliability" "supportsReliableOnly""`, `""supportsReliableOnly" webtransport w3c github"`
- **Analysis:** The \`WebTransport.reliability\` instance property and static \`supportsReliableOnly\` attribute provide runtime introspection to determine whether a browser or active connection supports unreliable datagrams over HTTP/3 versus strictly reliable fallback transports like HTTP/2. Standardized in the W3C WebTransport specification with cross-vendor participation, the API resolves to 'supports-unreliable' in Chromium where HTTP/3 is active and returns false for static reliable-only support. The feature provides a clean, forward-compatible contract for real-time web applications to adapt their transmission strategies.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building latency-sensitive applications should feature-detect \`transport.reliability\` after awaiting \`transport.ready\` to conditionally route payloads between datagram streams and reliable fallback channels. However, because HTTP/2 fallback is not yet universally deployed, web applications must continue to retain WebSocket or WebRTC fallbacks for environments blocking UDP/HTTP/3.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5094058497277952/activity) *(chromestatus.com)*
  > supportsReliableOnly\` (static read-only boolean):\*\* Indicates whether the browser/user agent supports WebTransport connections running exclusively over reliable transport protocols (such as HTTP/2 over TCP)
- [puppyip.com](https://puppyip.com/en/resources/firefox-158-webtransport-http2-streaming-upload-guide) *(puppyip.com)*
  > In Chromium and Gecko engines, \`supportsReliableOnly\` currently returns \`false\` because WebTransport over HTTP/2 fallback has not yet been rolled out natively \*\*Developer Blogs & Network Tooling Analyses:\*\* Technical wri...
- [gigazine.net](https://gigazine.net/gsc_news/en/20261007-google-chrome-155) *(gigazine.net)*
  > reliability\` and \`supportsReliableOnly\` alongside complementary WebTransport improvements (such as \`WebTransportReceiveStream\` byte-tracking and BYOB reading for datagrams)
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > reliability\` and \`supportsReliableOnly\` alongside complementary WebTransport improvements (such as \`WebTransportReceiveStream\` byte-tracking and BYOB reading for datagrams)
- [januschka.com](https://static.januschka.com/changelog/chromium/i2s/M155.html) *(static.januschka.com)*
  > reliability\` and \`supportsReliableOnly\` alongside complementary WebTransport improvements (such as \`WebTransportReceiveStream\` byte-tracking and BYOB reading for datagrams)
- [ietf.org](https://datatracker.ietf.org/meeting/119/materials/slides-119-webtrans-ietf-119-webtrans-wg-slides-04) *(datatracker.ietf.org)*
  > \*\*IETF WebTransport Working Group (IETF 119+):\*\* The attributes directly support the split between the WebTransport over HTTP/3 specification (Victor Vasiliev) and the ongoing WebTransport over HTTP/2 specification (Eric...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes](http://www.mail-archive.com/blink-dev@chromium.org/msg17711.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md#transport-modes`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport reliability attributes 'Dan Clark' via blink-dev Mon, 12 Oct 2026 13:...

#### 📚 Platform Documentation & References

- [WebTransport: supportsReliableOnly static property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/supportsReliableOnly_static) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransport/reliability/index.md?plain=1) *(github.com)*
- [WebTransport: reliability property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/reliability) *(developer.mozilla.org)*
- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [Docs and Fx158 rel note for WebTransport.supportsReliableOnly static … by chrisdavidmills · Pull Request #46073 · mdn/content · GitHub](https://github.com/mdn/content/pull/46073) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 43.1% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 78.8% · Safari 73%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00016% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 12 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 10 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 43.1% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 2 verified)
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

- **Momentum:** **Moderate** (+40 points since 2026-10-12; footprint 140 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""object-fit" "embed" "object" svg igalia"`, `""object-fit" "object" "embed" svg webkit bug"`
- **Analysis:** By treating SVG documents embedded via &lt;object&gt; and &lt;embed&gt; elements as replaced elements, Chromium closes a longstanding specification gap in CSS Images and HTML rendering rules. This update brings Blink into direct parity with Gecko (Firefox), leaving WebKit (Safari) as the sole major rendering engine still stretching embedded SVGs regardless of CSS fit rules. Developers and standards contributors view the change as a major win for responsive vector graphics, eliminating awkward wrapper hacks previously needed for interactive SVG assets.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams targeting Chromium and Firefox can safely use object-fit and object-position on SVG &lt;object&gt; and &lt;embed&gt; tags, but should verify rendering in Safari where SVGs will continue to stretch to fill the viewport box. For mission-critical cross-browser parity in WebKit, retain aspect-ratio container wrappers or consider inline SVGs until Safari resolves the discrepancy.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/4886345347629056/activity) *(chromestatus.com)*
  > \*\*Default / Backwards Compatibility:\*\* Because the initial CSS defaults are \`object-fit: fill\` and \`object-position: 50% 50%\`, existing sites that do not set these properties will render without changes A noticeable diff...
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/4886345347629056/activity) *(img968-dot-cr-status.appspot.com)*
  > \*\*Implementation:\*\* Developed primarily by Igalia (e.g., Felipe Erias)
- [googlesource.com](https://chromium.googlesource.com/chromium/src.git/+/HEAD/third_party/blink/renderer/platform/runtime_enabled_features.json5) *(chromium.googlesource.com)*
  > It ran behind the experimental Chromium flag \`SVGEmbeddedAsReplacedElement\` since Chrome 141 and targeted shipping by default in Chrome 157/158
- [webkit.org](https://bugs.webkit.org/show_bug.cgi?id=317804) *(bugs.webkit.org)*
  > Titled \*“object-fit: scale-down ignored on \`&lt;embed&gt;\` and \`&lt;object&gt;\` embedding an SVG document (object-position too)”\* The discussion highlights that \*\*Firefox (Gecko)\*\* has long supported \`object-fit\` and \`object-positio...
- [\[blink-dev\] Re: Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17511.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: object-fit and object-position apply to SVG documents in and Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: object-fit and object-position apply to SVG documents in ...
- [\[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in &lt;object&gt; and &lt;embed&gt;](http://www.mail-archive.com/blink-dev@chromium.org/msg17499.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in and Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: object-fit and object-position apply to SVG documents in and Chro...

#### 📚 Platform Documentation & References

- [object-fit CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/object-fit) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/embed) *(developer.mozilla.org)*
- [\[svg\] Use the replaced content rect for embedded SVG documents by chromium-wpt-export-bot · Pull Request #64519 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/64519) *(github.com)*
- [object-fit and object-position are ignored for SVG embedded via &lt;object&gt; and &lt;embed&gt; by Ahmad-S792 · Pull Request #75745 · WebKit/WebKit · GitHub](https://github.com/WebKit/WebKit/pull/75745) *(github.com)*
- [\[Image Redux\] Add support for 'object-fit', 'object-position' and 'object-view-box\` for SVG documents in &lt;embed&gt; and &lt;object&gt; by weinig · Pull Request #76911 · WebKit/WebKit · GitHub](https://github.com/WebKit/WebKit/pull/76911) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `object-fit` on [wpt.fyi](https://wpt.fyi/results?q=feature:object-fit) (via webstatus.dev) — stable: Chrome 47.8% · Edge 47.8% · Firefox 97% · Safari 44.8%; experimental: Chrome 96.3% · Edge 96.3% · Firefox 97% · Safari 45.5%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (47 found across 11 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 6 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (0 found, 0 verified) · `web-features mapping` *(group "object-fit", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "object-fit": Chrome 47.8% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 3 verified)
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

- **Momentum:** **Emerging** (+30 points since 2026-10-12; footprint 230 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Analysis:** Chrome is deprecating and removing the \`&lt;fencedframe&gt;\` element and \`window.fence\` APIs across Chrome 156 and Chrome 157 following the sunset of prerequisite Privacy Sandbox auction APIs like Protected Audience and Shared Storage selectURL. Because fenced frames can no longer navigate without these upstream auction outputs, the container has become non-functional dead code within Blink. Since neither WebKit nor Gecko ever implemented the specification, removing it eliminates single-engine fragmentation with zero negative cross-browser compatibility risk.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit existing ad components, analytics scripts, and test suites to completely remove references to \`&lt;fencedframe&gt;\`, \`FencedFrameConfig\`, and \`window.fence\` APIs before Chrome 157 converts the element into an \`HTMLUnknownElement\`. Replace any legacy fenced frame wrappers with standard, partitioned \`&lt;iframe&gt;\` elements paired with appropriate Permissions-Policy directives.
- Marked for deprecation in Chrome 156. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Fenced frames overview  \|  Privacy Sandbox](https://privacysandbox.google.com/private-advertising/fenced-frame) *(privacysandbox.google.com)*
  > fence\` APIs\*\* marks the official sunsetting of Chrome’s specialized cross-site privacy embed container \*\*Remove Element Declarations:\*\* If you developed ad components or test suites using \`&lt;fencedframe&gt;\`, migrate them ba...
- [hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > Following Chrome's shift in its third-party cookie phase-out strategy and the deprecation/stubbing of those parent auction APIs in Chrome 152, \`&lt;fencedframe&gt;\` elements can no longer navigate to any destination document
- [appspot.com](https://cr-status.appspot.com/feature/6366274495053824?gate=5364408546099200) *(cr-status.appspot.com)*
  > \*\*Interop & Compatibility:\*\* Neither Apple (WebKit) nor Mozilla (Gecko) implemented \`&lt;fencedframe&gt;\`, so removal brings zero cross-browser interoperability risk and simplifies Blink’s frame architecture Chromium engineers...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > fence APIs”\* outlines the code-health rationale for pruning dead features
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com)*
  > \*\*Summary:\*\* Google updated its developer portal status dashboards, formally marking \`&lt;fencedframe&gt;\`, Fenced Frame Ads Reporting (FFAR), and Fenced Storage Read under \*\*"Scheduled for phaseout"\*\*
- [Fenced frames overview  \|  Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame) *(developer.chrome.com)*
  > \*\*Summary:\*\* Google updated its developer portal status dashboards, formally marking \`&lt;fencedframe&gt;\`, Fenced Frame Ads Reporting (FFAR), and Fenced Storage Read under \*\*"Scheduled for phaseout"\*\*

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17565.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Shivani Shar...

#### 📚 Platform Documentation & References

- [Window: fence property - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/fence) *(developer.mozilla.org)*
- [Fence - Web APIs - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Fence) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFencedFrameElement/config) *(developer.mozilla.org)*
- [Remove FencedFrame element and window.fence APIs · Issue #30 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/30) *(github.com)*
- [\[rule\] element/fencedframe · Issue #110 · cevdetta/deadhead · GitHub](https://github.com/cevdetta/deadhead/issues/110) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (49 found across 12 planned queries, 18 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 11 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (4 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
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

- **Momentum:** **Emerging** (+30 points since 2026-10-12; footprint 210 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** With Chrome 154 enabling the 'Ask-before-HTTP' interstitial by default on public hostnames, browsers are formally transitioning plain HTTP from a supported fallback to a deprecated security exception. The broader ecosystem strongly favors an encrypted-by-default web, building on years of passive warnings, automated HTTPS upgrades, and opt-in strict modes. Developer reception is largely supportive of eliminating unencrypted traffic, though friction has emerged around legacy infrastructure and intermediate URL forwarding.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit entire domain topologies and redirect chains—especially apex-to-subdomain forwards, CDN routing, and external QR codes—to guarantee valid TLS certificates exist at every intermediate hop before landing on HTTPS. For local staging and test automation, migrate environments to secure origins or utilize flags such as \`--unsafely-treat-insecure-origin-as-secure\` to prevent broken CI runs.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome HTTP Warning 2026: Checklist for Egyptian Websites — SOG](https://sog.eg/en/blog/chrome-http-warning-egypt-website-campaign-checklist) *(sog.eg)*
  > Chrome HTTP Warning 2026: Checklist for Egyptian Websites — SOG Skip to content The site is currently in beta. ع Client login Order now Marketing Chrome HTTP Warning Since 21 October 2026: Why Your Campaign Visitors May ...
- [Chrome Now Warns Before Insecure HTTP Connections](https://blog.google/security/chrome-now-warns-before-insecure-http-connections) *(blog.google)*
  > Chrome Now Warns Before Insecure HTTP Connections Chrome Security Chrome Now Warns Before Insecure HTTP Connections Oct 21, 2026 \| x.com Facebook LinkedIn Mail Copy link Joe DeBlasio, Eric Trouton, Chris Thompson, Serena...
- [Chromium Docs - Adapting your website for Chrome’s “Ask-before-HTTP” warning](https://chromium.googlesource.com/chromium/src/+/main/docs/security/ask-before-http/ask-before-http-adoption-guide.md) *(chromium.googlesource.com)*
  > Chromium Docs - Adapting your website for Chrome’s “Ask-before-HTTP” warning Chromium Docs &#9681; Theme Adapting your website for Chrome’s “Ask-before-HTTP” warning Chrome will start asking for users’ permission before ...
- [note.com](https://note.com/vast_flax7410/n/n02993cbc8c93?hl=en) *(note.com)*
  > x.x\`) and single-label hostnames (e.g., \`http://intranet/\`) are exempt by default
- [Chrome puts insecure sites behind a permission prompt - Help Net Security](https://www.helpnetsecurity.com/2026/10/22/google-chrome-https-protection) *(helpnetsecurity.com)*
  > Chrome puts insecure sites behind a permission prompt - Help Net Security Help Net Security newsletters : Daily and weekly news, cybersecurity jobs, open source projects, breaking news – subscribe here! Please turn on yo...
- [docs/security/ask-before-http/ask-before-http-adoption-guide.md - chromium/src - Git at Google](https://chromium.googlesource.com/chromium/src/+show/main/docs/security/ask-before-http/ask-before-http-adoption-guide.md) *(chromium.googlesource.com)*
  > docs/security/ask-before-http/ask-before-http-adoption-guide.md - chromium/src - Git at Google Sign in &#9681; Theme chromium / chromium / src / main / . / docs / security / ask-before-http / ask-before-http-adoption-gui...

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 10 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 13 verified) · `Twitter / X API v2` *(found 9 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (3 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ○ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (+30 points since 2026-10-12; footprint 180 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"csswg drafts issue 10201 position visibility anchor visible"`, `"position visibility anchor visible anchor valid anchors visible"`
- **Analysis:** The CSS Working Group resolved to rename the position-visibility values from the plural anchors-visible and anchors-valid to the singular anchor-visible and anchor-valid to clarify that evaluations target a single default anchor. Chromium is shipping the singular keywords in Chrome 157 with backward-compatible aliases for the plural forms ahead of eventual deprecation. Major engine implementations are aligning around the singular syntax to achieve seamless cross-browser baseline interoperability for CSS Anchor Positioning.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt the singular anchor-visible and anchor-valid keywords for all modern CSS stylesheets and UI component libraries. If supporting legacy Chromium builds that only recognized the plural names is necessary, declare the plural property first as a fallback immediately followed by the standard singular keyword.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [caniuse.com](https://caniuse.com/?search=anchors-visible) *(caniuse.com)*
  > \*\*Motivation:\*\* The conditions for conditional hiding in CSS Anchor Positioning (Module Level 1) evaluate against a single default anchor element at a time MDN and the \*web-features\* project flag \`anchors-visible\` and \`a...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > \*\*Motivation:\*\* The conditions for conditional hiding in CSS Anchor Positioning (Module Level 1) evaluate against a single default anchor element at a time The original plural naming caused ambiguity
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > \*\*Title:\*\* \*Microsoft Edge 157 web platform release notes\* \*\*Key Details:\*\* Highlights the arrival of \`position-visibility: anchor-valid and anchor-visible\`
- [css-tricks.com](https://css-tricks.com/almanac/properties/p/position-visibility) *(css-tricks.com)*
  > The documentation explains conditional hiding: \`anchor-visible\` ensures that an anchored overlay is strongly hidden when its anchor scrolls out of view, while \`anchor-valid\` hides the element if its anchor references fai...
- [caniuse.com](https://caniuse.com/?search=anchor-visible) *(caniuse.com)*
  > MDN and the \*web-features\* project flag \`anchors-visible\` and \`anchors-valid\` as legacy aliases discouraged for new code
- [entranttechnologies.com](https://entranttechnologies.com/tech-news/safari-27-release-customizable-select-scroll-anchoring) *(entranttechnologies.com)*
  > \*\*Articles & Release Notes:\*\* \*Safari 27 Released: Customizable Select, Scroll Anchoring, and CSS Anchor Updates\* \*\*Key Details:\*\* WebKit adopted the spec modifications early, shifting \`position-anchor: auto\` to \`normal\`...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/web-platform-dx/web-features/issues/3558?timeline_page=1) *(github.com)*
- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [github.com](https://github.com/w3c/csswg-drafts/issues/13176) *(github.com)*
- [\`position-visibility: anchor-valid\` · Issue #1457 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1457) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 95.6% · Edge 95.4% · Firefox 83.3% · Safari 93.4%; experimental: Chrome 95.8% · Edge 95.4% · Firefox 85.6% · Safari 94%

#### 🌐 Web-features Group Context

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- **Chrome usage:** 0.078% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 11 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 10 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (0 found, 0 verified) · `web-features mapping` *(group "anchor-positioning", shared with 8 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "anchor-positioning": Chrome 95.6% passing (stable))* · `Sources cited by the AI synthesis` (3 found, 2 verified)
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

- **Momentum:** **Emerging** (+30 points since 2026-10-12; footprint 140 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** Chrome 154 eliminates a longstanding interoperability gap by exposing the core CSS Typed OM hierarchy—including CSSStyleValue, CSSKeywordValue, CSSNumericValue, CSSUnitValue, and CSSUnparsedValue—to Worker global scopes. This change brings Chromium into full alignment with the CSS Typed OM Level 1 specification as well as Safari and Firefox, which already supported these interfaces off the main thread. With full multi-engine consensus achieved, developers can construct and calculate typed CSS primitives directly in web workers without cross-thread inconsistencies.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams performing off-main-thread layout, canvas rendering, or animation calculations can safely adopt CSS Typed OM constructors across modern evergreen browsers without engine-specific worker checks. Ensure string-based CSS parsing logic remains on the main thread, and keep basic feature detection if your deployment targets Chromium versions prior to 154.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome 154  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > Although Firefox and Safari had already implemented this exposure, Chromium’s Blink engine previously only exposed constructors like \`CSSStyleValue\`, \`CSSKeywordValue\`, \`CSSNumericValue\`, \`CSSUnitValue\`, and \`CSSUnparsed...
- [Microsoft Edge 154 web platform release notes (Sep. 24, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) *(learn.microsoft.com)*
  > Microsoft Edge 154 web platform release notes (Sep. 24, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade...
- [gigazine.net](https://gigazine.net/gsc_news/en/20260925-google-chrome-154) *(gigazine.net)*
  > Under the CSS and UI updates section, the Chrome team highlighted that \`CSSStyleValue\`, \`CSSKeywordValue\`, \`CSSNumericValue\`, \`CSSUnitValue\`, and \`CSSUnparsedValue\` are now available within standard worker scopes Coverag...
- [codercops.com](https://blog.codercops.com/blog/chrome-154-websocket-options-iterator-includes-https-prompts-2026) *(blog.codercops.com)*
  > Outlets reviewing the Chrome 154 cycle (such as \*CoderCops' "Chrome 154 for Developers: What Changed and What to Test"\* and developer summaries on \*Habr\*) flagged this change for teams utilizing complex client-side calcu...
- [habr.com](https://habr.com/ru/companies/otus/news/1078052) *(habr.com)*
  > Outlets reviewing the Chrome 154 cycle (such as \*CoderCops' "Chrome 154 for Developers: What Changed and What to Test"\* and developer summaries on \*Habr\*) flagged this change for teams utilizing complex client-side calcu...
- [\[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17113.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker context...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17113.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5114591051907072`)*
  > \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker context...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parseAll_static) *(developer.mozilla.org)*
- [github.com](https://github.com/GoogleChromeLabs/cssomnom) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/154.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/154.md) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `css-typed-om` on [wpt.fyi](https://wpt.fyi/results?q=feature:css-typed-om) (via webstatus.dev) — stable: Chrome 85.3% · Edge 85.3% · Firefox 11.9% · Safari 82.6%; experimental: Chrome 90.8% · Edge 86.2% · Firefox 85.3% · Safari 82.6%

#### 🌐 Web-features Group Context

*group-level data: web-features [`css-typed-om`](https://webstatus.dev/features/css-typed-om), shared with 1 other ChromeStatus feature*

- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/1091))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (44 found across 10 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "css-typed-om", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "css-typed-om": Chrome 85.3% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

<a id="5183354944225280-webtransport-datagram-writable-streams-and-prioritization"></a>
### [WebTransport Datagram writable streams and prioritization](https://chromestatus.com/feature/5183354944225280)

- **Milestone:** Chrome 155 (In developer trial (Behind a flag))
- **ChromeStatus:** [chromestatus.com/feature/5183354944225280](https://chromestatus.com/feature/5183354944225280) · [chromestatuslite.com/feature/5183354944225280](https://chromestatuslite.com/feature/5183354944225280)
- **Specification:** [https://www.w3.org/TR/webtransport/#datagram-writable](https://www.w3.org/TR/webtransport/#datagram-writable)
- **Chromium Bug:** [https://issues.chromium.org/issues/547572475](https://issues.chromium.org/issues/547572475)
- **Browser Signals:** Chrome: `In developer trial (Behind a flag)` · Firefox: `Shipped/Shipping` · Safari: `Shipped/Shipping`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

#### 📝 Overview

Adds the modern WebTransport Datagram sending API.  WebTransportDatagramDuplexStream.createWritable() creates independent WebTransportDatagramsWritable streams. Each writable has mutable sendGroup and sendOrder attributes for expressing relative priority among queued WebTransport data in the same send group. Chromium currently applies this ordering among Datagram writables.  The implementation also reports the negotiated maximum outgoing Datagram payload size and discards oversized writes as required by the WebTransport specification.

> **Motivation:** The original WebTransport Datagram API exposes only a single writable stream, preventing applications from independently scheduling different classes of latency-sensitive messages.  The newer API allows applications such as games, remote-interaction systems, and real-time media applications to create multiple Datagram writables and prioritize urgen...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (+20 points since 2026-10-12; footprint 240 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebTransportDatagramsWritable""`, `""WebTransport" datagram "createWritable" sendOrder"`, `""WebTransportDatagramDuplexStream" createWritable"`, `"webtransport datagram writable streams prioritization interop 2026"`
- **Analysis:** WebTransport Datagram writable streams and prioritization modernize datagram egress by replacing the deprecated singleton writable stream with a factory method, \`createWritable()\`, returning independent \`WebTransportDatagramsWritable\` streams. This enables fine-grained scheduling via mutable \`sendGroup\` and \`sendOrder\` attributes and enforces payload limits by dropping oversized packets per the W3C WebTransport specification. Currently in developer trials behind flags in Chromium and targeted under Interop 2026, engine consensus is firmly aligned on standardizing this multi-stream prioritization model.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building latency-critical networking should adopt progressive enhancement by detecting \`transport.datagrams.createWritable()\` and gracefully falling back to the legacy \`datagrams.writable\` property. Production code should also begin auditing datagram sizing against \`maxDatagramSize\` to prepare for strict spec-compliant oversized packet discarding.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/feature/5183354944225280) *(cr-status.appspot.com)*
  > Recent updates across MDN, Chrome Platform Status, and web standards groups detail the \*\*WebTransport Datagram writable streams and prioritization\*\* feature \*\*Payload Enforcing & Validation\*\*: Enforces the negotiated max...
- [ietf.org](https://datatracker.ietf.org/meeting/123/materials/slides-123-webtrans-webtransport-slides-ietf-123-03) *(datatracker.ietf.org)*
  > writable\`\*\*: The old singleton getter is officially marked deprecated across browser engines and specifications in favor of \`createWritable()\` writable\`
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > Tooling and platform trackers (such as Polypane’s \*Experimental Web Platform Features\* digests) highlight the addition of \`WebTransportDatagramsWritable\` to Chromium
- [\[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17863.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; \*Blink component\* &gt;&gt; ... webtransport &lt;https://webstatus.dev/features/webtransport&gt; &gt;&gt; &gt;&gt; \*Motivation\* &gt;&gt; &lt;strong&gt;The original WebTransport Datagram API exposes only a sing...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17881.html) *(mail-archive.com)*
  > \*Blink component\* Blink&gt;Network&gt;WebTransport &lt;https://issues.chromium.org/issues?q=customfield1222907:&quot;Blink&gt;Network&gt;WebTransport&quot;&gt; \*Web Feature ID\* webtransport &lt;https://webstatus.dev/feat...
- [\[blink-dev\] Intent to Ship: WebTransport Datagram writable streams and prioritization](http://www.mail-archive.com/blink-dev@chromium.org/msg17848.html) *(mail-archive.com)*
  > Blink component Blink&gt;Network&gt;WebTransport Web Feature ID webtransport Motivation &lt;strong&gt;The original WebTransport Datagram API exposes only a single writable stream&lt;/strong&gt;, preventing applications from independ...

#### 📚 Platform Documentation & References

- [WebTransportDatagramsWritable: sendOrder property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable/sendOrder) *(developer.mozilla.org)*
- [WebTransportDatagramDuplexStream: createWritable() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransportdatagramduplexstream/index.md?plain=1) *(github.com)*
- [WebTransportDatagramsWritable - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable) *(developer.mozilla.org)*
- [github.com](https://github.com/w3c/webtransport/issues/610) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 43.1% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 78.8% · Safari 73%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00016% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (60 found across 12 planned queries, 17 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 43.1% passing (stable))* · `Sources cited by the AI synthesis` (11 found, 6 verified)
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

Starting in Chrome 157, the Background Fetch API now enforces Cross-Origin Resource Sharing (CORS).  This update aligns Chromium's implementation with the intent of the \[Background Fetch spec\](https://wicg.github.io/background-fetch/). This ensures that Background Fetch requests are subject to the same security policies as regular Fetch requests, such as Local Network Access checks.   This update prevents sites from bypassing CORS (and other security policy checks) by using Background Fetch instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).

> **Motivation:** This fixes a security issue where Background Fetch unintentionally bypasses security policies such as CORS (and CORP/COEP/DIP).  (crbug.com/515243254 is our meta bug tracking all of the different web platform security issues with Background Fetch.)

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (+20 points since 2026-10-12; footprint 170 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""background-fetch" CORS "Chrome 157" OR "Chrome 154""`, `""Background Fetch" CORS enforcement Chrome"`, `"WebKit standards positions "background-fetch" 149"`
- **Analysis:** Background Fetch remains a Chromium-only capability with limited web adoption, recently spared from deprecation after Chromium developers failed to reach consensus on removing it. Chromium is instead hardening the feature by migrating it from legacy download machinery into Blink's core fetch pipeline, strictly enforcing Cross-Origin Resource Sharing (CORS), Local Network Access, and isolation policies by default in Chrome 157. Multi-engine consensus remains stalled, as neither WebKit nor Gecko plans to implement the underlying specification.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams using Background Fetch must verify that all remote download servers serve explicit CORS headers and handle preflights, as unconfigured cross-origin background requests will fail hard in Chrome 157. Because Background Fetch lacks support across Safari and Firefox, teams should continue treating it strictly as a progressive enhancement paired with a reliable standard foreground fetch fallback.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome 154  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > Starting in Chromium (tracked on Chrome Platform Status for Chrome 157, with initial rollouts and Local Network Access restrictions starting in Chrome 154), the \*\*Background Fetch API\*\* strictly enforces \*\*Cross-Origin R...
- [chromium.org](https://issues.chromium.org/issues/40515511) *(issues.chromium.org)*
  > Historically, Chromium implemented Background Fetch via its background download manager and navigation pipeline rather than Blink’s core Fetch machinery
- [Introducing Background Fetch  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/background-fetch) *(developer.chrome.com)*
  > fetch()\` now undergo standard CORS preflights and header validations, matching standard \`fetch()\` behavior
- [sentinelone.com](https://www.sentinelone.com/vulnerability-database/cve-2026-1504) *(sentinelone.com)*
  > \*\*Core Motivation:\*\* The update addresses a major class of web security issues (tracked under meta-bug \`crbug.com/515243254\`), where attackers could exploit Background Fetch to bypass the Same-Origin Policy and leak cros...
- [medium.com](https://medium.com/frontend-simplified/how-cors-works-in-the-background-web-application-security-286e911f97d4) *(medium.com)*
  > \*\*CORS Enforcement:\*\* Cross-origin Background Fetch calls require the target server to grant explicit permission via \`Access-Control-Allow-Origin\` (and proper credential headers if credentials are included)
- [chromium.org](https://issues.chromium.org/issues/524406292) *(issues.chromium.org)*
  > \*\*Security Industry Analysis:\*\* Cybersecurity publications (e.g., SentinelOne's write-up on CVE-2026-1504) and Chromium bug trackers (e.g., issue 524406292 regarding invalid credential casing in Background Fetch) highlig...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17683.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210300985606144`)*
  > Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CORS enforcement for Background Fetch Mike Taylor Wed, 07 Oct 2026 10:58:58 -070...

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `background-fetch` on [wpt.fyi](https://wpt.fyi/results?q=feature:background-fetch) (via webstatus.dev) — stable: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%; experimental: Chrome 37.5% · Edge 37.5% · Firefox 0% · Safari 0%

#### 🌐 Web-features Group Context

*group-level data: web-features [`background-fetch`](https://webstatus.dev/features/background-fetch), shared with 1 other ChromeStatus feature*

- **Mozilla:** no position recorded ([standards position](https://github.com/mozilla/standards-positions/issues/30))
- **WebKit:** no position recorded ([standards position](https://github.com/WebKit/standards-positions/issues/149)) · concerns: `privacy`, `maintenance`

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (58 found across 11 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 9 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "background-fetch", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "background-fetch": Chrome 37.5% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (+12 points since 2026-10-12; footprint 407 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The CSS random() function from the CSS Values and Units Module Level 5 is transitioning rapidly from an experimental capability into mainstream browser engines, shipping first in Safari and now landing by default in Chrome 156. Developers are enthusiastic about replacing brittle JavaScript math hacks and bloated Sass preprocessor loops with declarative, native generative randomness. Cross-engine consensus is strong, with Mozilla officially supportive of the CSS Working Group's standardized caching and scoping semantics while Gecko implementation is underway.

**Key Recommendations & Takeaways:**
- Actionable Advice: Use random() today exclusively as a progressive enhancement for decorative or non-essential aesthetics like particle offsets and subtle rotation tilts, wrapping declarations inside @supports feature queries. Always define predictable fallback values so that non-supporting engines—notably stable Firefox—gracefully render consistent layouts.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Yeah the thing the WG settled on was a lot saner than the initial proposal :)..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Embracing Playful Imperfection With The CSS random() Function #UXD #DESIGNER #UX #UI #designer #CSS  https://t.co/rhfhVN" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **6 new community discussions** found
- 📰 **8 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Embracing Playful Imperfection With The CSS random() Function #UXD #DESIGNER #UX #UI #designer #CSS  https://t.co/rhfhVN](https://twitter.com/jobsuxd/status/2116037847841178111) — *Twitter / X by @jobsuxd (0 likes/RTs, 0 replies)*
- 🐦 [Embracing Playful Imperfection With The CSS random() Function #Techdew #UX #UI #TechdewGroups #Designer #CSS  https://t.](https://twitter.com/techdew/status/2116037672674463789) — *Twitter / X by @techdew (0 likes/RTs, 0 replies)*
- 🐦 [Embracing playful imperfection with the CSS random() function. @utilitybend tilts letters, wobbles cards, and varies ani](https://twitter.com/webstandardsdev/status/2115760560511779159) — *Twitter / X by @webstandardsdev (1 likes/RTs, 1 replies)*
- 🐦 [CSS：Embracing Playful Imperfection With The CSS \`random()\` Function https://t.co/D59cYo2qP9](https://twitter.com/yabi_labs/status/2115219521262977286) — *Twitter / X by @yabi\_labs (0 likes/RTs, 0 replies)*
- 🐦 [CSSのrandom()関数の活用事例  活版印刷におけるインクのにじみや僅かな傾き、テーブルに無造作に置かれた写真など、わずかなランダム性がかえって魅力や人間らしさを生み出す  Embracing Playful Imperfection](https://twitter.com/osanai_c/status/2115204192587714753) — *Twitter / X by @osanai\_c (0 likes/RTs, 0 replies)*
- 🐦 [What if your design system loosened its tie a little? 🎲  @utilitybend explores how the new CSS random() function introd](https://twitter.com/KendoUI/status/2114777332221129197) — *Twitter / X by @KendoUI (0 likes/RTs, 0 replies)*
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

- [Embracing Playful Imperfection With The CSS random() Function — Smashing Magazine](https://www.smashingmagazine.com/2026/10/embracing-playful-imperfection-css-random-function) *(smashingmagazine.com)*
  > The \*\*CSS \`random()\` function\*\*, standardized under the \*\*CSS Values and Units Module Level 5\*\* specification, introduces native, generative randomness directly to stylesheets \*\*Basic Syntax:\*\* \`random(&lt;random-key&gt;?, &lt;mi...
- [lavx.hu](https://news.lavx.hu/article/css-random-brings-playful-imperfection-to-web-design) *(news.lavx.hu)*
  > It allows web authors to calculate randomized lengths, angles, percentages, and numbers at render time without build-step preprocessors (like Sass loops) or JavaScript DOM manipulation \*\*Strict Unit Matching:\*\* Both boun...
- [CSS Values and Units Module Level 5](https://drafts.csswg.org/css-values-5) *(drafts.csswg.org)*
  > \*\*Companion Function (\`random-item()\`):\*\* Part of the same Level 5 module, designed to choose randomly among non-numeric values (such as font names, keywords, or color tokens), though browser support is lagging behind nu...
- [Native Random Values in CSS - Alvaro Montoro](https://alvaromontoro.com/blog/68092/native-random-values-in-css) *(alvaromontoro.com)*
  > \*\*Companion Function (\`random-item()\`):\*\* Part of the same Level 5 module, designed to choose randomly among non-numeric values (such as font names, keywords, or color tokens), though browser support is lagging behind nu...
- [Let’s Use the Emergent CSS random() Function in all the Browsers \| CSS-Tricks](https://css-tricks.com/css-random-function-polyfill) *(css-tricks.com)*
  > \*\*Focus:\*\* History, syntax behavior, and cross-browser strategies Examines real-world use cases such as client-requested festive confetti or floating particle systems
- [css-tricks.com](https://css-tricks.com/random-numbers-css) *(css-tricks.com)*
  > Contrasts native CSS \`random()\` with legacy approaches like Sass (which freezes values at build time) and JavaScript (which requires runtime DOM manipulation and triggers style recalcs)

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17343.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > Re: \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS random() function Rick Byers Wed, 02 Sep 2026 08:12:47 -0700 LGTM1 On Wed, Aug 26, 2026 at 3...
- [CSS random() function · Issue #715 · mdn/mdn · GitHub](https://github.com/mdn/mdn/issues/715) *(github.com · 2025-08-24T12:16:41)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > CSS random() function · Issue #715 · mdn/mdn · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You sig...
- [\[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17310.html) *(mail-archive.com)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS random() function 'Munira Tursunova' via blink-dev Wed, 26 Aug 2026 12:48:09 -0700 \*Contact emails\* ...
- [CSS random() · Issue #1354 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/1354) *(github.com · 2026-09-03T21:08:06)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > CSS random() · Issue #1354 · web-platform-tests/interop · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your sessi...
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17350.html) *(mail-archive.com)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > Re: \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS random() function Daniel Bratell Wed, 02 Sep 2026 10:43:42 -0700 LGTM3 /Daniel On 2026-09-02...

#### 📚 Platform Documentation & References

- [random() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/random) *(developer.mozilla.org)*
- [CSS random() function · Issue #715 · mdn/mdn · GitHub](https://github.com/mdn/mdn/issues/715) *(github.com)*
- [CSS random() · Issue #1354 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/1354) *(github.com)*
- [2071165 - \[css-random\] Implement CSS random() behind pref](https://bugzilla.mozilla.org/show_bug.cgi?id=2071165) *(bugzilla.mozilla.org)*
- [docs(css): update random() to new random-key syntax by BHUVANSH855 · Pull Request #45729 · mdn/content · GitHub](https://github.com/mdn/content/pull/45729) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `random-function` on [wpt.fyi](https://wpt.fyi/results?q=feature:random-function) (via webstatus.dev) — stable: Chrome 25% · Edge 25% · Firefox 12.5% · Safari 37.5%; experimental: Chrome 25% · Edge 25% · Firefox 25% · Safari 100%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (54 found across 13 planned queries, 34 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 11 verified) · `Twitter / X API v2` *(found 6 tweet(s))* · `Tweets found by web search` (5 found, 1 verified) · `Dev.to Community Blogs` (5 found, 2 verified) · `Hacker News Algolia` (7 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (4 found, 2 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 1 verified) · `web-features mapping` *(group "random-function", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "random-function": Chrome 25% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 5

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

- **Momentum:** **Emerging** (+10 points since 2026-10-12; footprint 200 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** Browsers are standardizing the behavior of disconnecting active WebSocket connections upon Back/Forward Cache (BFCache) entry rather than disqualifying pages from being cached. Safari has historically closed active connections on entry, Chrome aligned with this model starting in milestone 149 while deprecating enterprise opt-out policies, and WHATWG discussions are formalizing cleanup steps to align WebSockets with WebTransport semantics.

**Key Recommendations & Takeaways:**
- Actionable Advice: Ensure your WebSocket client implements resilient exponential backoff and reconnection routines responding to standard close events, or listen for the pageshow event (checking event.persisted) to cleanly re-establish socket state upon cache restoration. Remove any legacy pagehide workarounds that manually tore down sockets solely to force BFCache eligibility.
- Standards Activity (Mozilla): Latest discussion from @jesup: "I'm in favor; this is in line with what we've defined for WebTransport (@jan-ivar fyi)..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **1 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [WebSocket BFCache integration (Disconnect on entry)](https://github.com/WebKit/standards-positions/issues/648) [open] 
- **Mozilla:** [WebSocket BFCache integration (Disconnect on entry)](https://github.com/mozilla/standards-positions/issues/1390) [open] `venue: WHATWG`, `topic: API`
  > *Latest discussion from @jesup: "I'm in favor; this is in line with what we've defined for WebTransport (@jan-ivar fyi)..."*

#### 📰 Ecosystem Blogs & Articles

- [WebSockets and bfcache: Chrome 150 Still Said 'websocket'](https://jangwook.net/en/blog/en/websocket-bfcache-eligibility-remeasure) *(jangwook.net)*
  > Historically, holding an open WebSocket connection rendered a webpage ineligible for the browser's Back/Forward Cache (bfcache), causing the browser to discard the document upon navigation and force a slow, full network ...
- [Microsoft Edge Browser Policy Documentation BackForwardCacheForWebSocketsAllowed \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/backforwardcacheforwebsocketsallowed) *(learn.microsoft.com)*
  > Microsoft Edge Browser Policy Documentation BackForwardCacheForWebSocketsAllowed \| Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to ...
- [Back/forward cache  \|  Articles  \|  web.dev](https://web.dev/articles/bfcache) *(web.dev)*
  > Updated to reflect that starting in Chrome 149, open WebSocket connections no longer block bfcache eligibility (joining Safari) persisted\`) and \`pageshow\` to cleanly manage socket lifecycles, or ensure their WebSocket ma...
- [neuraldemy.com](https://neuraldemy.com/handling-bfcache-with-active-websocket-connections-in-react) *(neuraldemy.com)*
  > Recent technical guides focus on practical code adaptations \*\*Unified Reconnection Patterns:\*\* Recommends implementing stateful reconnect loops (e.g., exponential backoff upon \`onclose\` or checking \`pageshow\`'s \`persiste...
- [Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/52nlr8z3Png) *(groups.google.com · 2026-04-17T00:00:00)*
  > Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing...
- [\[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16328.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Chromestatus Fri, 17 Apr 2026 03:1...

#### 🔗 Inbound Citations & Reverse Links

- [Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/52nlr8z3Png) *(groups.google.com · 2026-04-17T00:00:00)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing...
- [Disconnect WebSockets on BFCache entry · Issue #40 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/40) *(github.com · 2026-10-05T08:17:16)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Disconnect WebSockets on BFCache entry · Issue #40 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window....
- [\[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16328.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12349`)*
  > \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Chromestatus Fri, 17 Apr 2026 03:1...
- [Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16330.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12349`)*
  > Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Adam Rice Fri, 17 Apr 2026...

#### 📚 Platform Documentation & References

- [Proposal: Unblock bfcache for active WebSockets by disconnecting on entry · Issue #12085 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/12085) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/648) *(github.com)*
- [github.com](https://github.com/mozilla/standards-positions/issues/1390) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) *(developer.mozilla.org)*
- [Disconnect WebSockets on BFCache entry · Issue #40 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/40) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 11 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (3 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 4

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

- **Momentum:** **Emerging** (+10 points since 2026-10-12; footprint 183 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Private Verification Tokens" site:github.com"`, `""Private Verification Tokens" chrome"`, `""Private Verification Tokens" mozilla or webkit"`
- **Analysis:** Private Verification Tokens (PVT) is a Chromium-led privacy-preserving initiative currently in Origin Trial (Chrome 154 through 165) that uses Anonymous Tokens with Hidden Metadata (ATHM) to transfer a single-bit trust verdict from normal browsing sessions into private browsing mode. By restricting redemptions to registered same-site (eTLD+1) contexts and capping redemption counts, it aims to curb pervasive CAPTCHA challenges in incognito windows without enabling cross-context user tracking. The mechanism currently lacks multi-engine consensus and exists primarily as an exploratory trial within Chrome rather than an agreed-upon web standard.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams facing high abandonment rates from anti-bot challenges in incognito windows should consider testing the Chrome Origin Trial, but treat it strictly as a progressive enhancement layer. Do not dismantle existing verification fallbacks or re-architect fraud pipelines around PVT until standardized cross-engine mechanics stabilize.
- In active Origin Trial in Chrome 154. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Explainer for the Private Verification Tokens" (2 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Explainer for the Private Verification Tokens](https://news.ycombinator.com/item?id=47760044) — *Hacker News (2 pts, 0 comments)*

#### 📰 Ecosystem Blogs & Articles

- [Chrome Private Verification Tokens: Incognito Trial](https://www.relevantaudience.com/analytics/chrome-private-verification-tokens-incognito-origin-trial) *(relevantaudience.com)*
  > Chrome Private Verification Tokens: Incognito Trial 02 038 5055 info@relevantaudience.com @relevantaudience Chrome tests Private Verification Tokens: a one-bit signal telling sites an Incognito visitor is human analytics...
- [youtube.com](https://www.youtube.com/watch?v=2JCuQrUO0pQ) *(youtube.com)*
  > This transfers a single piece of trust without exposing the user's browsing identity or cross-session activity Examines the proposal from the perspective of anti-bot solutions and automation frameworks
- [ppc.land](https://ppc.land/ninth-circuit-frees-perplexitys-shopping-agent-from-amazons-hacking-claim) *(ppc.land)*
  > \*\*Minimal Entropy:\*\* Carries only 1 bit of metadata (\`nBuckets = 2\`, indicating basic humanness/trust), preventing the token from acting as a cross-context fingerprint \*\*Session Limits:\*\* Chrome restricts redemptions to ...
- [blues19.com](https://news.blues19.com/en/all?page=9&tag=%E9%A3%8E%E9%99%A9%E9%A2%84%E8%AD%A6) *(news.blues19.com)*
  > \*\*Minimal Entropy:\*\* Carries only 1 bit of metadata (\`nBuckets = 2\`, indicating basic humanness/trust), preventing the token from acting as a cross-context fingerprint
- [chrome.com](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Google introduced PVT as an active \*\*Origin Trial\*\* running from Chrome 154 through Chrome 165 across Desktop and Android
- [chrome.com](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > The documentation frames the trial around reducing CAPTCHA friction while maintaining incognito boundary isolation Lists tracking bug \`#500396188\` and notes that browser vendor signals from Mozilla (Firefox) and Apple (W...

#### 🔗 Inbound Citations & Reverse Links

- [Disable Private Verification Tokens · Issue #181 · RKNF404/chromium-hardening-guide · GitHub](https://github.com/RKNF404/chromium-hardening-guide/issues/181) *(github.com · 2026-10-22T00:02:13)* *(Cites: `https://chromestatus.com/feature/6210457816924160`)*
  > Disable Private Verification Tokens · Issue #181 · RKNF404/chromium-hardening-guide · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. ...
- [Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17478.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/private-verification-tokens`)*
  > Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Private Verification Tokens Daniel Bratell Wed, 16 Sep 2026 08:48:21 -0700 We ...
- [\[blink-dev\] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17179.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/private-verification-tokens`)*
  > \[blink-dev\] Intent to Experiment: Private Verification Tokens Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Private Verification Tokens Chromestatus Fri, 14 Aug 2026 13:41:33 -0700 Contact email...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/GoogleChrome/private-tokens) *(github.com)*
- [Disable Private Verification Tokens · Issue #181 · RKNF404/chromium-hardening-guide · GitHub](https://github.com/RKNF404/chromium-hardening-guide/issues/181) *(github.com)*
- [Update privacy section · Issue #12 · explainers-by-googlers/private-verification-tokens · GitHub](https://github.com/explainers-by-googlers/private-verification-tokens/issues/12) *(github.com)*
- [GitHub - aykutbulut/private-tokens · GitHub](https://github.com/aykutbulut/private-tokens) *(github.com)*
- [private-tokens/PVT-Registration.md at main · GoogleChrome/private-tokens · GitHub](https://github.com/GoogleChrome/private-tokens/blob/main/PVT-Registration.md) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 11 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (8 found, 1 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (3 found, 2 verified)
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (+10 points since 2026-10-12; footprint 155 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** CSS scroll-marker-group modes in CSS Overflow Level 5 introduce declarative 'links' and 'tabs' keywords to control the focus order and WAI-ARIA semantic roles generated for scroll navigation markers. Chromium has taken the lead by shipping the feature by default, aiming to natively solve common carousel keyboard traps and semantic discrepancies. However, the feature currently lacks cross-browser parity, as neither Gecko nor WebKit has finalized implementation.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should treat CSS scroll-marker-group modes as an experimental, progressive enhancement rather than a primary production architecture for critical UI. Use feature queries or fallback script-based carousel/tab patterns to ensure full keyboard navigation and screen reader support across Safari and Firefox.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Some issues that seem pretty fundamental: - https://github.com/w3c/csswg-drafts/issues/12240 - https://github.com/w3c/csswg-drafts/issues/12269..."
- Standards Activity (Mozilla): Latest discussion from @jcsteh: "I have some significant accessibility concerns regarding CSS inert specifically. See https://github.com/w3ctag/design-reviews/issues/1055#issuecomment..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **1 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Overflow Navigation Controls](https://github.com/WebKit/standards-positions/issues/447) [open] `topic: css`, `concerns: internationalization`, `venue: W3C CSS WG`, `from: Google`, `concerns: accessibility`
  > *Latest discussion from @fantasai: "Some issues that seem pretty fundamental: - https://github.com/w3c/csswg-drafts/issues/12240 - https://github.com/w3c/csswg-drafts/issues/12269..."*
- **Mozilla:** [CSS Overflow Navigation Controls](https://github.com/mozilla/standards-positions/issues/1161) [open] `venue: W3C`, `topic: CSS`, `team: Layout`, `team: Accessibility`
  > *Latest discussion from @jcsteh: "I have some significant accessibility concerns regarding CSS inert specifically. See https://github.com/w3ctag/design-reviews/issues/1055#issuecomment..."*

#### 📰 Ecosystem Blogs & Articles

- [github.io](https://flackr.github.io/web-demos/css-overflow/scroll-marker-type) *(flackr.github.io)*
  > \*\*\`links\` (default):\*\* Configures \`::scroll-marker-group\` to act like a \`&lt;nav&gt;\` landmark with internal fragment anchor links All markers are sequential Tab stops
- [smashingmagazine.com](https://www.smashingmagazine.com/2025/12/state-logic-native-power-css-wrapped-2025) *(smashingmagazine.com)*
  > \*\*Smashing Magazine: \*“State, Logic, And Native Power: CSS Wrapped”\*\*\* The author highlighted the transition away from fragile JavaScript carousel libraries (like Swiper or Slick) while acknowledging that native, spec-co...
- [RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)*
  > RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes 'Daniel Clark' via blink-dev Mon, 20 Jul 2026 09:49:59 -07...
- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Chromestatus Wed, 15 Jul 2026 12:40:07 -0700 Contact emails \[email...
- [New in Chrome 154  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > &lt;strong&gt;/\* Links mode (default) \*/ scroll-marker-group: after links; /\* Tabs mode \*/ scroll-marker-group: before tabs;&lt;/strong&gt; By default, an element&#x27;s text decoration (such as an underline, overline, or line-throu...
- [CSS Scroll Markers: Building Accessible Tabs in Chrome \| Alexander Burgos](https://alexanderburgos.netlify.app/blog/css-scroll-markers-tabs) *(alexanderburgos.netlify.app · 2026-09-27T11:43:43)*
  > Now, we layer on the CSS to instantiate the scroll container and instruct the browser to generate the tabbed controls automatically. Notice how we target the pseudo-elements directly for layout and decoration. .carousel ...

#### 🔗 Inbound Citations & Reverse Links

- [RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16999.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes 'Daniel Clark' via blink-dev Mon, 20 Jul 2026 09:49:59 -07...
- [\[blink-dev\] Intent to Ship: CSS scroll-marker-group modes](http://www.mail-archive.com/blink-dev@chromium.org/msg16979.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/danielsakhapov/aa8e744701224994609aebb3e9e316e3`)*
  > \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS scroll-marker-group modes Chromestatus Wed, 15 Jul 2026 12:40:07 -0700 Contact emails \[email...

#### 📚 Platform Documentation & References

- [scroll-marker-group CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-marker-group) *(developer.mozilla.org)*
- [scroll-marker-group CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker-group) *(developer.mozilla.org)*
- [\[css-overflow-5\] Discrete versus navigation scroll marker mode · Issue #12122 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/12122) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [CSS scroll-marker-group modes Demo](https://codepen.io/Daniil-Sakhapov/pen/ogzQQYZ)
- [CSS scroll-marker-group modes Demo](https://codepen.io/Daniil-Sakhapov/pen/ZYpmmJE)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 12 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 5 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 7

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

- **Momentum:** **Emerging** (+10 points since 2026-10-12; footprint 135 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** The JS Self-Profiling API in Dedicated Workers extends browser-level sampling profiling to background worker threads, gated by worker-level Document Policy headers. Spearheaded by Microsoft Edge and Google engineers within Chromium, the feature fills a major observability void for CPU-heavy tasks like WebAssembly and background data processing. However, because the underlying Self-Profiling specification remains entirely unsupported outside Chromium, the feature faces significant cross-engine interoperability headwinds.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should treat this capability strictly as an opt-in, progressive enhancement tool for field telemetry in Chromium browsers, feature-detecting 'Profiler' in DedicatedWorkerGlobalScope before instantiating sessions. Do not rely on it as a primary cross-browser telemetry solution; continue using browser DevTools and standardized Performance APIs for broader diagnostics across Firefox and Safari.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://239d877-dot-cr-status.appspot.com/feature/5159559872249856) *(239d877-dot-cr-status.appspot.com)*
  > The \*\*JavaScript Self-Profiling API (\`js-profiling\`) in Dedicated Workers\*\* extends browser-level sampling profiling to Web Workers \*\*The Premise:\*\* Chrome Platform Status and Blink-dev tracking document that this featur...
- [techinnovateit.com](https://techinnovateit.com/javascript-self-profiling-dedicated-worker) *(techinnovateit.com)*
  > The \*\*JavaScript Self-Profiling API (\`js-profiling\`) in Dedicated Workers\*\* extends browser-level sampling profiling to Web Workers By extending Document Policy support to worker contexts, Chrome enables developers to in...
- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5159559872249856/activity) *(img544-dot-cr-status.appspot.com)*
  > Modern web architectures offload compute-heavy tasks—such as parsing, data compression, cryptography, and WebAssembly execution—to Dedicated Workers to keep the main thread responsive Previously, the JS Self-Profiling AP...
- [chromium.org](https://bugs.chromium.org/p/chromium/issues/detail?id=956688) *(bugs.chromium.org)*
  > Previously, the JS Self-Profiling API was restricted to documents because its security gating required the \`Document-Policy: js-profiling\` header The WICG Self-Profiling API specification drafts were updated to reflect d...
- [chromestatuslite.com](https://chromestatuslite.com/?version=147) *(chromestatuslite.com)*
  > By extending Document Policy support to worker contexts, Chrome enables developers to instantiate \`new Profiler(...)\` directly inside a \`DedicatedWorkerGlobalScope\` with minimal overhead
- [appspot.com](https://chromiumdash.appspot.com/commit/57a07c8cdbdc07f414ed2983044f29332f61b5ee) *(chromiumdash.appspot.com)*
  > \*\*The Dependency on "Document Policy in Dedicated Workers":\*\* The feature relies on an architectural prerequisite where Chromium began parsing \`Document-Policy\` headers from network responses for dedicated worker scripts...

#### 🔗 Inbound Citations & Reverse Links

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com · 2026-09-14T08:09:52)* *(Cites: `https://chromestatus.com/feature/5159559872249856`)*
  > js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16028.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Fri, 06 Mar 2026 11...
- [\[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15887.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Chromestatus Thu, 19 Feb 2026 10:11:40 -0800 Con...
- [Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg15888.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentPolicy/DocumentPolicyInWorkers.md`)*
  > Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Prototype: js-profiling in dedicated workers 'Michal Mocny' via blink-dev Thu, 19 Feb...
- [\[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17436.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/js-self-profiling/#the-profiler-interface`)*
  > \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: js-profiling in dedicated workers Chromestatus Thu, 10 Sep 2026 13...

#### 📚 Platform Documentation & References

- [js-profiling in dedicated workers · Issue #31 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/31) *(github.com)*
- [How does document policy work in workers? · Issue #33 · WICG/js-self-profiling · GitHub](https://github.com/WICG/js-self-profiling/issues/33) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [js-profiling in dedicated workers Demo](https://docs.google.com/document/d/1prxxuck3NDqOjuhMkT8vykV9Fl3IQyUzdESQdxz_7pg/edit?tab=t.0)

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `profiler` on [wpt.fyi](https://wpt.fyi/results?q=feature:profiler) (via webstatus.dev) — stable: Chrome 72% · Edge 72% · Firefox 0% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 0% · Safari 0%

#### 🌐 Web-features Group Context

*group-level data: web-features [`profiler`](https://webstatus.dev/features/profiler), shared with 2 other ChromeStatus features*

- **Chrome usage:** 0.00039% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/278))
- **Mozilla:** no position recorded ([standards position](https://github.com/mozilla/standards-positions/issues/477)) · concerns: `security`

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (51 found across 12 planned queries, 6 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (15 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "profiler", shared with 2 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "profiler": Chrome 72% passing (stable))*
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

- **Momentum:** **Emerging** (+10 points since 2026-10-12; footprint 80 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Analysis:** Chrome 154 refines the native light dismiss mechanism for popovers and dialogs by shifting the underlying trigger from pointerdown/pointerup sequences to standard click events. This update resolves long-standing UX pain points where touch-screen scrolling gestures, context-menu right clicks, and text selection drags inadvertently closed open overlays. The change is backed by an active WHATWG HTML pull request and W3C Pointer Events discussions aimed at harmonizing light-dismiss behavior across all engines.

**Key Recommendations & Takeaways:**
- Actionable Advice: No markup or API migrations are required because the browser updates dismiss handling under the hood; however, development teams should review existing codebases to retire redundant touch-scroll or backdrop click-blocking hacks. Additionally, ensure end-to-end testing suites dispatch full click events rather than isolated pointerdown sequences when simulating outside dismissals.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **1 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [Chrome 154 light dismiss fix for popovers and dialogs](https://aamirmukaram.com/notes/html-popover-light-dismiss-chrome-154) *(aamirmukaram.com)*
  > Chrome 154 light dismiss fix for popovers and dialogs Skip to content Aamir Mukaram Book a call HTML · Chrome 154 · 14 Oct 2026 Chrome 154 stops scrolls from closing native popovers Chrome 154 triggers light dismiss on c...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > \*\*"Light dismiss"\*\* refers to the browser pattern where user interaction outside of an open floating element—such as an auto popover (\`popover="auto"\`) or a modal dialog configured with \`&lt;dialog closedby="any"&gt;\`—automati...
- [codercops.com](https://blog.codercops.com/blog/chrome-154-websocket-options-iterator-includes-https-prompts-2026) *(blog.codercops.com)*
  > \*\*Drag-and-drop / Text selection:\*\* Starting a click or selection drag inside a popover and releasing outside it (or vice versa) could inadvertently register as a light-dismiss trigger \*\*Focus:\*\* Developer migration and ...
- [\[blink-dev\] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs](http://www.mail-archive.com/blink-dev@chromium.org/msg17139.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs Joey Arh...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[pointerevents\] Add context for popover light dismiss to click event (#542) from Mustaq Ahmed via GitHub on 2025-07-16 (public-pointer-events@w3.org from July to September 2025)](https://lists.w3.org/Archives/Public/public-pointer-events/2025JulSep/0005.html) *(lists.w3.org)* *(Cites: `https://github.com/w3c/pointerevents/issues/542`)*
  > -- GitHub Notification of comment by mustaqahmed Please view or discuss this issue at https://&lt;strong&gt;github.com/w3c/pointerevents/issues/542&lt;/strong&gt;#issuecomment-3078866418 using your GitHub account -- Sent via github-...
- [Re: \[pointerevents\] Add popover light dismiss integration (#460) from Joey Arhar via GitHub on 2025-08-05 (public-pointer-events@w3.org from July to September 2025)](https://lists.w3.org/Archives/Public/public-pointer-events/2025JulSep/0021.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11536`)*
  > I created a corresponding HTML spec PR to use click instead of pointerdown/pointerup here: https://github.com/whatwg/html/pull/11536 -- &lt;strong&gt;GitHub Notification of comment by josepharhar&lt;/strong&gt; Please view or discus...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-17 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0002.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11536`)*
  > (4 by emilio, josepharhar) ... Expand disabled form control event handling spec text (1 by josepharhar) https://github.com/whatwg/html/pull/12219 \[agenda+\] - #11536 Change light dismiss to use click events (1 by josephar...
- [\[blink-dev\] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs](http://www.mail-archive.com/blink-dev@chromium.org/msg17139.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11536`)*
  > \[blink-dev\] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs Joey Arh...

#### 📚 Platform Documentation & References

- [Re: \[pointerevents\] Add context for popover light dismiss to click event (#542) from Mustaq Ahmed via GitHub on 2025-07-16 (public-pointer-events@w3.org from July to September 2025)](https://lists.w3.org/Archives/Public/public-pointer-events/2025JulSep/0005.html) *(lists.w3.org)*
- [Re: \[pointerevents\] Add popover light dismiss integration (#460) from Joey Arhar via GitHub on 2025-08-05 (public-pointer-events@w3.org from July to September 2025)](https://lists.w3.org/Archives/Public/public-pointer-events/2025JulSep/0021.html) *(lists.w3.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-17 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0002.html) *(lists.w3.org)*
- [Add popover light dismiss integration by josepharhar · Pull Request #460 · w3c/pointerevents · GitHub](https://github.com/w3c/pointerevents/pull/460) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `popover` on [wpt.fyi](https://wpt.fyi/results?q=feature:popover) (via webstatus.dev) — stable: Chrome 95.5% · Edge 92.9% · Firefox 83.9% · Safari 61.6%; experimental: Chrome 96.4% · Edge 90.2% · Firefox 87.5% · Safari 71.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`popover`](https://webstatus.dev/features/popover), shared with 2 other ChromeStatus features*

- **Chrome usage:** 0.084% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/374))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/698))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (63 found across 12 planned queries, 6 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 3 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "popover", shared with 2 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "popover": Chrome 95.5% passing (stable))*
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

- **Momentum:** **Emerging** (+5 points since 2026-10-12; footprint 190 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** The WebTransport.draining attribute exposes a promise that resolves when an HTTP/3 server signals session retirement via capsules or frames, enabling seamless connection handovers without interrupting ongoing streams. Codified in the W3C WebTransport specification and enabled by default in Chrome, it addresses a critical operational gap in low-latency connection management during routine server maintenance and load balancing. Although engine consensus on the specification is solid, full multi-engine availability remains in progress as other runtimes advance their transport stacks.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams deploying WebTransport in production should feature-detect WebTransport.draining and use it to proactively establish replacement connections and migrate state in the background. Concurrently, retain robust fallback handling on the WebTransport.closed promise for older browsers or servers that do not yet emit graceful draining frames.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2007162: neqo support for Draining for WebTransport](https://bugzilla.mozilla.org/show_bug.cgi?id=2007162) `[NEW]`
- **Mozilla (Gecko):** [Bug #2060688: New wpt failures in /webtransport/ \[draining.https.any.sharedworker.html, draining.https.any.worker.html, draining.https.any.serviceworker.html, and 1 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2060688) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/feature/6427766428925952) *(cr-status.appspot.com)*
  > In HTTP/3 and WebTransport architectures, servers periodically need to be retired for software rollouts, node draining, routine maintenance, or load rebalancing closed\`), causing sudden disconnects, packet drops, or noti...
- [techinnovateit.com](https://techinnovateit.com/webtransport-draining-graceful-shutdown) *(techinnovateit.com)*
  > Applications can immediately spin up a replacement \`WebTransport\` session in the background and gracefully migrate active state before the old session finishes closing \*\*Article/Source:\*\* \*WebTransport Explained: Real-Ti...
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Article/Source:\*\* \*Chrome Platform Status: WebTransport Draining\* & \*Chrome Release Notes\*
- [forasoft.com](https://www.forasoft.com/learn/video-streaming/articles-streaming/webtransport-whip) *(forasoft.com)*
  > Chrome's intent-to-ship records track the rollout of the \`draining\` promise (progressing through Dev Trials and shipping in Chrome 158), aligning the browser engine with the latest W3C WebTransport Candidate Recommendati...
- [codercops.com](https://blog.codercops.com/blog/webtransport-explained-websocket-alternative-2026) *(blog.codercops.com)*
  > This reflects WebTransport's rapid maturity across major rendering engines The draining promise solves the long-standing WebSocket headache where server restarts forcibly disconnect connected users, enabling seamless, un...
- [Re: \[blink-dev\] Intent to Ship: WebTransport draining](http://www.mail-archive.com/blink-dev@chromium.org/msg17761.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport draining Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport draining Mike Taylor Thu, 15 Oct 2026 17:47:21 -0700 LGTM1 On 10/15/26 5:49 p.m., C...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: WebTransport draining](http://www.mail-archive.com/blink-dev@chromium.org/msg17761.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6427766428925952`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport draining Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport draining Mike Taylor Thu, 15 Oct 2026 17:47:21 -0700 LGTM1 On 10/15/26 5:49 p.m., C...

#### 📚 Platform Documentation & References

- [WebTransport API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [webtransport/index.bs at main · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/blob/main/index.bs) *(github.com)*
- [WebTransport: draining property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/draining) *(developer.mozilla.org)*
- [WebTransport.draining docs by hamishwillee · Pull Request #45306 · mdn/content · GitHub](https://github.com/mdn/content/pull/45306) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 43.1% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 78.8% · Safari 73%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00016% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (67 found across 12 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (3 found, 2 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 43.1% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 853 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** Client-side XSLT is being deprecated across the web platform, driven by Chromium's aggressive timeline to eliminate the high-risk, unmaintained libxslt C library by Chrome 158. While its browser usage is low (around 0.01%–0.05% of page loads), the feature's removal is prioritized because memory-safety vulnerabilities outweigh the niche utility of an API frozen in 1999. Major browser engines agree on the necessity of sunsetting the feature, though the deprecation breaks legacy portals, styled RSS feeds, and XML sitemaps.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit codebases immediately for usages of XSLTProcessor and XML stylesheet processing instructions, shifting transformation logic server-side or migrating to JavaScript/Wasm-based parsers like Saxon-JS or npm alternatives. Enterprise teams facing migration delays should enable the temporary XSLT enterprise policy flag and verify compatibility using Chrome early-warning flags.
- Standards Activity (WebKit): Latest discussion from @annevk: "WebKit is cautiously supportive. We'd probably wait for one implementation to fully remove support, though if there's a known list of origins that par..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Intent to Deprecate and Remove XSLT" (87 points, 149 comments).

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Intent to Deprecate and Remove XSLT](https://news.ycombinator.com/item?id=45779261) — *Hacker News (87 pts, 149 comments)*
- 💬 [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=45734849) — *Hacker News (3 pts, 1 comments)*
- 💬 [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=6102357) — *Hacker News (2 pts, 0 comments)*

#### 🏛️ Browser Standards Positions

- **WebKit:** [Should we remove XSLT from the web platform?](https://github.com/whatwg/html/issues/11523) [open] `removal/deprecation`, `stage: 3`
  > *Latest discussion from @annevk: "WebKit is cautiously supportive. We'd probably wait for one implementation to fully remove support, though if there's a known list of origins that par..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1990759: Investigate deprecation and removal of XSLT (deprecate and remove XSLT)](https://bugzilla.mozilla.org/show_bug.cgi?id=1990759) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA/m/yNs4EsD5AQAJ) *(groups.google.com · 2025-11-01T04:31:52Z)*
  > Good riddance. The web needs to shed all the old baggages like this to move forward. Looking forward to MCP becoming part of the browser.
- [Intent to Deprecate and Remove: XSLT](https://groups.google.com/a/chromium.org/forum) *(groups.google.com · 2013-07-25T13:40:31Z)*
- [Removing XSLT for a more secure browser  \|  Web Platform  \|  Chrome for Developers](https://developer.chrome.com/docs/web-platform/deprecating-xslt) *(developer.chrome.com)*
  > 0) across all major browser engines (Blink/Chromium, Gecko/Firefox, and WebKit/Safari) \*Chrome 158 (November 17, 2026):\* Full removal on Stable releases
- [Chrome is removing XSLT on November 17, 2026: what breaks and what to do \| XSLT Playground](https://xsltplayground.com/blog/posts/chrome-removing-xslt-what-to-do) *(xsltplayground.com)*
  > 0) across all major browser engines (Blink/Chromium, Gecko/Firefox, and WebKit/Safari) \`libxslt\` is an aging, complex codebase prone to memory safety exploits (e.g., buffer overflows, use-after-free vulnerabilities like ...
- [iso.org](https://committee.iso.org/sites/tc81/home/news/content-left-area/news-and-updates/news-12.html) *(committee.iso.org)*
  > \*Chrome 158 (November 17, 2026):\* Full removal on Stable releases \*(Firefox and WebKit are planning aligned removals)
- [intersystems.com](https://community.intersystems.com/post/test-your-site-against-chromes-xslt-removal-today) *(community.intersystems.com)*
  > \*\*Key Takeaways:\*\* Explains the availability of the temporary \`XSLTEnabled\` enterprise policy flag, Origin Trials, and early-warning defaults in Canary/Dev channels \*\*Article:\*\* \[\*Chrome 158 Removes XSLT: What Breaks and...

#### 🔗 Inbound Citations & Reverse Links

- [Google Chrome Deprecating XLST · Issue #624 · mtconnect/cppagent · GitHub](https://github.com/mtconnect/cppagent/issues/624) *(github.com · 2026-10-26T19:25:15)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > Google Chrome Deprecating XLST · Issue #624 · mtconnect/cppagent · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh y...
- [Chromium base browsers removing support for XSLT view \| InterSystems DC](https://community.intersystems.com/post/chromium-base-browsers-removing-support-xslt-view) *(community.intersystems.com · 2026-09-28T00:00:00)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > Chromium base browsers removing support for XSLT view \| InterSystems DC Skip to main content Learning Documentation Community Open Exchange Ideas Portal Global Masters Certification Partner Directory Startup Hub Ask DC A...
- [xslt · Issue #1310 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1310) *(github.com · 2026-08-14T17:30:47)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > xslt · Issue #1310 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your ses...

#### 📚 Platform Documentation & References

- [Google Chrome Deprecating XLST · Issue #624 · mtconnect/cppagent · GitHub](https://github.com/mtconnect/cppagent/issues/624) *(github.com)*
- [xslt · Issue #1310 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1310) *(github.com)*
- [1990759 - Investigate deprecation and removal of XSLT (deprecate and remove XSLT)](https://bugzilla.mozilla.org/show_bug.cgi?id=1990759) *(bugzilla.mozilla.org)*
- [Re: Issue #11523 Removal of XSLT from the web platform · Issue #12103 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/12103) *(github.com)*
- [GitHub - mfreed7/xslt\_polyfill: A polyfill for XSLTProcessor · GitHub](https://github.com/mfreed7/xslt_polyfill) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `xslt` on [wpt.fyi](https://wpt.fyi/results?q=feature:xslt) (via webstatus.dev) — stable: Chrome 53.3% · Edge 80% · Firefox 86.7% · Safari 93.3%; experimental: Chrome 53.3% · Edge 86.7% · Firefox 86.7% · Safari 100%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (59 found across 10 planned queries, 33 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 10 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (0 found, 2 verified) · `Hacker News Algolia` (3 found, 3 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (5 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "xslt", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "xslt": Chrome 53.3% passing (stable))*
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

Starting in Chrome 158, the new Web Install API allows websites to prompt users to install a web app, given a manifest URL and optional manifest ID.  The \`navigator.install()\` method enables cross-origin web app installation and provides a better developer experience than handling \`beforeinstallprompt\` events. This API is launching in parallel with the \`&lt;install&gt;\` element, a declarative entry point to the same installation capability.   Admins can control this in two ways: 1. Enterprise policy, \[WebAppInstallByUserEnabled\](https://chromeenterprise.google/policies/#WebAppInstallByUserEnabled), would disable user web app installs broadly, including installs initiated via \`navigator.install()\` and \`&lt;install&gt;\`. Or  2. \[Permissions policy\](https://www.w3.org/TR/permissions-policy/), web-app-installation, can allow or disallow use of this feature on origins that the enterprise controls (for example, internal sites/iframes).

> **Motivation:** The web currently lacks the ability for a site to offer installation of a web app identified by a cross-origin manifest. Limited support exists for eligible same-origin web apps via ambient installation affordances and the beforeinstallprompt event. However, the existent browser-provided entry points are difficult for developers to use and users to...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 525 points)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"WebKit standards positions Web Install API"`, `"Web Install API navigator install site web standards"`, `"Mozilla standards positions Web Install capability"`
- **Analysis:** Spearheaded by Microsoft and Google, the Web Install API and its companion declarative \`&lt;install&gt;\` element modernize PWA acquisition by offering an ergonomic, promise-based mechanism for both same-origin and cross-origin installations. Progressive web app developers have welcomed the departure from the fragile \`beforeinstallprompt\` model, but the API fundamentally lacks multi-engine consensus. As a result, the feature remains a Chromium-exclusive capability with limited availability across the wider web platform.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt \`navigator.install()\` purely as a progressive enhancement behind runtime feature detection for users on Chromium browsers. Maintain resilient fallbacks to standard ambient browser installation mechanisms and site navigation, as Safari and Firefox will not be implementing this entry point in the foreseeable future.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Closed via https://github.com/WebKit/standards-positions/issues/619..."
- Standards Activity (Mozilla): Latest discussion from @saschanaz: ""install capability" is not very specific topic, should we close this in favor of #1371, #1387, and #1388?..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "The Web Install API is ready for testing" (3 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

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
- [Install web apps with the new HTML install element  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/install-element-ot) *(developer.chrome.com)*
  > install()\`) and the complementary declarative \*\*\`&lt;install&gt;\` element\*\* represent a major modernization of Progressive Web App (PWA) installation across Chromium browsers Historically, developers relied on the clumsy, ambi...
- [r/PWA on Reddit: Web Install API - A glimmer of hope](https://www.reddit.com/r/PWA/comments/1oub6ml/web_install_api_a_glimmer_of_hope) *(reddit.com)*
  > install()\`)\*\*: An asynchronous, promise-based JavaScript method that accepts a manifest URL and optional manifest ID, enabling both same-origin and \*\*cross-origin\*\* installs (e.g., web-based app stores or directory sites...
- [Installation — What PWA Can Do Today](https://whatpwacando.today/installation) *(whatpwacando.today)*
  > install()\`)\*\*: An asynchronous, promise-based JavaScript method that accepts a manifest URL and optional manifest ID, enabling both same-origin and \*\*cross-origin\*\* installs (e.g., web-based app stores or directory sites...
- [appspot.com](https://cr-status.appspot.com/feature/5152834368700416) *(cr-status.appspot.com)*
  > \*\*Enterprise & Security Controls\*\*: Admin mitigation via the \`WebAppInstallByUserEnabled\` enterprise policy, and origin-level delegation via the \`web-app-installation\` Permissions Policy It contrasts the active collabora...
- [Experimental Web Install API Seeks to Improve Application Discovery and Distribution - InfoQ](https://www.infoq.com/news/2026/03/web-install-api-origin-trial) *(infoq.com)*
  > \*\*Focus\*\*: Explains the initial proposal and origin trial launch driven by the Microsoft Edge team \*\*InfoQ: \*"Experimental Web Install API Seeks to Improve Application Discovery and Distribution"\*\*\* (Bruno Couriol)

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Experiment: Web Install API](https://groups.google.com/a/chromium.org/g/blink-dev/c/KCpVX8F6yh8) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5183481574850560`)*
  > Intent to Experiment: Web Install API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Web Install ...
- [Intent to Prototype: Web Install API](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyIcrJX33ik) *(groups.google.com · 2024-04-12T00:00:00)* *(Cites: `https://chromestatus.com/feature/5183481574850560`)*
  > Intent to Prototype: Web Install API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Web Install AP...
- [WEB INSTALL API Diego González, Amanda Baker with guests](https://www.w3.org/2024/Talks/TPAC/breakouts/web-install-api.pdf) *(w3.org · 2024-10-16T00:00:00)* *(Cites: `https://aka.ms/webinstall`)*
  > https://aka.ms/WebInstall · navigator.install ·
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17773.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/install-element`)*
  > Re: \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: HTML install element 'Dan Clark' via blink-dev Mon, 19 Oct 2026 10:45:16 -0700 Thank you for work...
- [RE: \[blink-dev\] Intent to Ship: Web Install API](http://www.mail-archive.com/blink-dev@chromium.org/msg17686.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/install-element`)*
  > RE: \[blink-dev\] Intent to Ship: Web Install API Skip to site navigation (Press enter) RE: \[blink-dev\] Intent to Ship: Web Install API 'Lia Hiscock' via blink-dev Wed, 07 Oct 2026 17:14:57 -0700 Thanks Rick and Philip! Re...

#### 📚 Platform Documentation & References

- [MSEdgeExplainers/WebInstall/explainer.md at main · MicrosoftEdge/MSEdgeExplainers · GitHub](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/WebInstall/explainer.md) *(github.com)*
- [github.com](https://github.com/WICG/install-element) *(github.com)*
- [WEB INSTALL API Diego González, Amanda Baker with guests](https://www.w3.org/2024/Talks/TPAC/breakouts/web-install-api.pdf) *(w3.org)*
- [Web Install API · Issue #1373 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1373) *(github.com)*
- [Demos/pwa-install-api at main · MicrosoftEdge/Demos · GitHub](https://github.com/MicrosoftEdge/Demos/tree/main/pwa-install-api) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Web Install API Demo](https://microsoftedge.github.io/Demos/pwa-install-api)
- [Web Install API Demo](https://kbhlee2121.github.io/pwa/web-install-manifest-url/index.html)

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `navigator-install` on [wpt.fyi](https://wpt.fyi/results?q=feature:navigator-install) (webstatus.dev has no pass rates for it)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 12 planned queries, 35 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 12 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (4 found, 0 verified) · `Hacker News Algolia` (8 found, 1 verified) · `Standards Positions` (5 found, 5 verified) · `Engine Bug Trackers` (9 found, 1 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 1 verified) · `web-features mapping` *(group "navigator-install", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "navigator-install": no stable pass rate for Chrome yet)* · `Sources cited by the AI synthesis` (8 found, 6 verified)
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

Chrome can now trigger a request for the browser to install a web app, given a manifest URL and optional manifest ID. The &lt;install&gt; element enables cross-origin web app installation without JavaScript and provides a better developer experience than handling \`beforeinstallprompt\` events. The element is launching in parallel with \`navigator.install()\`, the imperative entry point to the same installation capability.   Admins can control this in two ways: 1. Enterprise policy, \[WebAppInstallByUserEnabled\](https://chromeenterprise.google/policies/#WebAppInstallByUserEnabled), can disable user web app installs broadly, including installs initiated via \`navigator.install()\` and &lt;install&gt;.   2. \[Permissions policy\](https://www.w3.org/TR/permissions-policy/), web-app-installation, can allow or disallow use of this feature on origins that the enterprise controls (for example, internal sites/iframes).

> **Motivation:** The web currently lacks the ability for a site to offer installation of a web app identified by a cross-origin manifest. Limited support exists for eligible same-origin web apps via ambient installation affordances and the beforeinstallprompt event. However, the existent browser-provided entry points are difficult for developers to use and users to...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 466 points)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"WebKit standards positions "Web Install""`, `""HTML install element" Web Install API navigator.install"`, `""HTML install element" WICG install element"`, `"Mozilla standards positions "Web Install" OR "install element""`
- **Analysis:** The HTML install element provides a declarative, browser-controlled UI component enabling web app installation without JavaScript or clunky beforeinstallprompt handling, shipping enabled by default in Chromium 158 alongside navigator.install(). While spearheaded by Google and Microsoft to decentralize web app distribution and solve persistent PWA discoverability issues, it currently lacks cross-browser interoperability. The feature sits in Limited Availability due to WebKit's formal opposition and Mozilla's reserved posture.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should treat the install element strictly as a progressive enhancement by nesting fallback buttons or instructional markup inside the element so that non-supporting browsers degrade gracefully. Existing installation workflows and ambient install guidance should remain intact to support Firefox and Safari users who cannot use declarative in-page prompts.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Closed via https://github.com/WebKit/standards-positions/issues/619..."
- Standards Activity (Mozilla): Latest discussion from @saschanaz: ""install capability" is not very specific topic, should we close this in favor of #1371, #1387, and #1388?..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Install web apps with the new HTML install element" (32 points, 14 comments).

#### ⚡ What Happened This Week

- 📰 **15 new articles/tutorials** published

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
- [Patrick - Install web apps with the new HTML install element](https://patrickbrosset.com/articles/2026-05-13-install-web-apps-with-the-new-html-install-element) *(patrickbrosset.com)*
  > \*\*Article:\*\* \*"Install web apps with the new HTML install element"\* (by Patrick Brosset / Chrome & Edge teams)
- [The Future of Web Apps: Why the New HTML Install Element Changes Everything \| NameOcean](https://nameocean.net/article/the-future-of-web-apps-why-the-new-html-install-element-changes-everything) *(nameocean.net)*
  > Web developers have consistently complained that browser-provided PWA prompts (ambient omnibox icons or nested three-dot menu items) are ignored by everyday users Developer reactions emphasize that bringing an in-page, s...
- [\[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17504.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: HTML install element 'Lia Hiscock' via blink-dev Mon, 21 Sep 2026 11:38:00 -0700 Contact emails \[email&#1...
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17597.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: HTML install element Rick Byers Wed, 30 Sep 2026 08:03:43 -0700 LGTM1 As for the install API &lt; ht...
- [\[blink-dev\] Intent to Experiment: Web app HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg16195.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Web app HTML install element Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Web app HTML install element 'Lia Hiscock' via blink-dev Wed, 25 Mar 2026 16:47:00 -0...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17504.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: HTML install element 'Lia Hiscock' via blink-dev Mon, 21 Sep 2026 11:38:00 -0700 Contact emails \[email&#1...
- [Re: \[blink-dev\] Intent to Ship: HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg17597.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > Re: \[blink-dev\] Intent to Ship: HTML install element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: HTML install element Rick Byers Wed, 30 Sep 2026 08:03:43 -0700 LGTM1 As for the install API &lt; ht...
- [\[blink-dev\] Intent to Experiment: Web app HTML install element](http://www.mail-archive.com/blink-dev@chromium.org/msg16195.html) *(mail-archive.com)* *(Cites: `https://aka.ms/installelement`)*
  > \[blink-dev\] Intent to Experiment: Web app HTML install element Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Web app HTML install element 'Lia Hiscock' via blink-dev Wed, 25 Mar 2026 16:47:00 -0...
- [\[&lt;install&gt; Element\] Align InstallResultEventInit default with spec by chromium-wpt-export-bot · Pull Request #63906 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/63906) *(github.com)* *(Cites: `https://aka.ms/installelement`)*
  > \[&lt;install&gt; Element\] Align InstallResultEventInit default with spec by chromium-wpt-export-bot · Pull Request #63906 · web-platform-tests/wpt · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appea...
- [\[&lt;install&gt; Element\] Enable Declarative installation of Web Apps from Web Content \[454827186\] - Issue Tracker](https://issuetracker.google.com/issues/454827186) *(issuetracker.google.com)* *(Cites: `https://aka.ms/installelement`)*
  > Google Issue Tracker Sign in

#### 📚 Platform Documentation & References

- [github.com](https://github.com/WICG/install-element) *(github.com)*
- [install-element/explainer-manifest-url.md at main · WICG/install-element · GitHub](https://github.com/WICG/install-element/blob/main/explainer-manifest-url.md) *(github.com)*
- [Web app HTML install element · Issue #1083 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1083) *(github.com)*
- [github.com](https://github.com/WICG/install-element/issues/23) *(github.com)*
- [\[&lt;install&gt; Element\] Align InstallResultEventInit default with spec by chromium-wpt-export-bot · Pull Request #63906 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/63906) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [HTML install element Demo](https://microsoftedge.github.io/Demos/pwa-install-element)
- [HTML install element Demo](https://kbhlee2121.github.io/pwa/web-install-manifest-url/only-elements.html)

#### 🌐 Web-features Group Context

*group-level data: web-features [`install`](https://webstatus.dev/features/install)*

- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/424))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (60 found across 12 planned queries, 31 verified) · `Google Search Grounding (gemini-3.8-flash)` (8 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Dev.to Community Blogs` (3 found, 0 verified) · `Hacker News Algolia` (8 found, 2 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (7 found, 2 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "install", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "install" has no test results)* · `Sources cited by the AI synthesis` (9 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

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

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 385 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"CSS media element pseudo classes playing paused muted"`, `"media element pseudo classes interop 2026 webkit mozilla chrome"`
- **Analysis:** Media element pseudo-classes (\`:playing\`, \`:paused\`, \`:seeking\`, \`:buffering\`, \`:stalled\`, \`:muted\`, and \`:volume-locked\`) bring declarative media state styling natively into CSS. Following early implementation in Safari and recent stabilization in Firefox, universal cross-engine interoperability is finalized with Chromium shipping default support in Chrome 158 under Interop 2026. This resolves a long-standing platform gap, establishing complete multi-vendor consensus across WebKit, Gecko, and Blink.

**Key Recommendations & Takeaways:**
- Actionable Advice: Developers should begin adopting media pseudo-classes to simplify custom audio and video players, wrapping rule blocks in \`@supports selector(:playing)\` if legacy browser support is required. For progressive enhancement, retain core JavaScript transport bindings while migrating loading spinners (\`:buffering\`) and play button toggles (\`:playing\`, \`:paused\`) to pure CSS.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @alastor0325: "This looks good to us, and \[this\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1707584) is our implementation bug. We also filed a separate \[issue\](ht..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **Mozilla:** [Media element pseudo-classes](https://github.com/mozilla/standards-positions/issues/1319) [open] `topic: CSS`, `team: Media`
  > *Latest discussion from @alastor0325: "This looks good to us, and \[this\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1707584) is our implementation bug. We also filed a separate \[issue\](ht..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2013367: \[meta\] Pseudo-classes for media element states](https://bugzilla.mozilla.org/show_bug.cgi?id=2013367) `[NEW]`
- **WebKit (Safari):** [Bug #311276: REGRESSION(310172@main): \[GStreamer\] imported/w3c/web-platform-tests/css/selectors/media/media-playback-state.html is flaky](https://bugs.webkit.org/show_bug.cgi?id=311276) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [CSS :playing, :paused, :muted Pseudo-Classes for Media](https://modern-css.com/video-player-states-without-javascript-events) *(modern-css.com)*
  > CSS :playing, :paused, :muted Pseudo-Classes for Media Log everything you read and watch Books, films, games and more on one page. Start your log &rarr; Log everything you read and watch Books, films, games and more on o...
- [css-tricks.com](https://css-tricks.com/css-states-and-javascript-events) *(css-tricks.com)*
  > Traditionally, updating the UI of custom media controls or interactive video components required binding JavaScript listeners (\`play\`, \`pause\`, \`waiting\`, \`seeking\`, \`volumechange\`) to toggle CSS classes manually These p...
- [khriztianmoreno.dev](https://www.khriztianmoreno.dev/blog/interop-2026-from-%22hack%22-to-standard) *(khriztianmoreno.dev)*
  > Traditionally, updating the UI of custom media controls or interactive video components required binding JavaScript listeners (\`play\`, \`pause\`, \`waiting\`, \`seeking\`, \`volumechange\`) to toggle CSS classes manually These p...
- [Announcing Interop 2026 \| WebKit](https://webkit.org/blog/17818/announcing-interop-2026) *(webkit.org)*
  > Safari and Firefox led early implementation, with Chromium landing support across 2026 releases In the \*\*WebKit Interop 2026 announcement\*\*, Apple noted WebKit’s early implementation of media pseudo-classes, emphasizing ...
- [appspot.com](https://cr-status.appspot.com/feature/5068277495758848?gate=4768460324339712) *(cr-status.appspot.com)*
  > Safari and Firefox led early implementation, with Chromium landing support across 2026 releases Chrome platform status and release logs announced the shipping of the full set of media pseudo-classes under the \`media-pseu...
- [mintec.co](https://mintec.co/blog/css-media-pseudo-classes-player-2026) *(mintec.co)*
  > Safari and Firefox led early implementation, with Chromium landing support across 2026 releases Tutorials and developer blogs have focused heavily on combining media pseudo-classes with the parent selector \`:has()\`

#### 🔗 Inbound Citations & Reverse Links

- [media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1307) *(github.com · 2026-08-14T17:30:45)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > media-pseudos · Issue #1307 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...
- [css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/issues/30523) *(github.com · 2026-09-14T23:44:14)* *(Cites: `https://chromestatus.com/feature/5068277495758848`)*
  > css.selectors.playing (and 6 siblings) - Chrome 152 is incorrect, media element pseudo-classes have not shipped in Chrome · Issue #30523 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Search /...

#### 📚 Platform Documentation & References

- [Media element pseudo-classes · Issue #1003 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/1003) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:buffering) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:paused) *(developer.mozilla.org)*
- [playing CSS pseudo-class - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:playing) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:seeking) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `media-pseudos` on [wpt.fyi](https://wpt.fyi/results?q=feature:media-pseudos) (via webstatus.dev) — stable: Chrome 0% · Edge 0% · Firefox 87.5% · Safari 100%; experimental: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%

#### 🌐 Web-features Group Context

*group-level data: web-features [`media-pseudos`](https://webstatus.dev/features/media-pseudos)*

- **Chrome usage:** 0.00019% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/436))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (66 found across 11 planned queries, 24 verified) · `Google Search Grounding (gemini-3.8-flash)` (18 found, 16 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (2 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (4 found, 2 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "media-pseudos", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "media-pseudos": Chrome 0% passing (stable))* · `Sources cited by the AI synthesis` (7 found, 7 verified)
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

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 365 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"Permissions Policy focus without user activation"`, `"focus without user activation whatwg html"`
- **Analysis:** The \`focus-without-user-activation\` Permissions Policy establishes a declarative mechanism to prevent embedded frames from hijacking input focus without user interaction. Enabled by default in Chromium and standardized within WHATWG HTML, it resolves longstanding security and accessibility vulnerabilities caused by malicious or aggressive third-party ad iframes. The broader web standards consensus is favorable, with formal backing from W3C TAG and positive tracking across browser engines \[ca25361ca63c107e\].

**Key Recommendations & Takeaways:**
- Actionable Advice: Publishers embedding untrusted third-party widgets or programmatic ads should adopt \`Permissions-Policy: focus-without-user-activation=()\` via HTTP headers or restrict it via iframe \`allow\` attributes today \[ca25361ca63c107e\]. Because unsupported browsers safely ignore unrecognized policy directives, it can be deployed immediately as progressive defensive hardening.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @aprotyas: "Given our supportive position, there's now a bug tracking the WebKit implementation for \`focus-without-user-activation\`: https://bugs.webkit.org/show\_..."
- Standards Activity (Mozilla): Latest discussion from @ffiori: "cc @smaug---- @zcorpan..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **15 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [\`focus-without-user-activation\` feature policy](https://github.com/WebKit/standards-positions/issues/406) [closed] `position: support`, `topic: web apis`, `venue: WHATWG HTML Workstream`, `from: Microsoft`
  > *Latest discussion from @aprotyas: "Given our supportive position, there's now a bug tracking the WebKit implementation for \`focus-without-user-activation\`: https://bugs.webkit.org/show\_..."*
- **Mozilla:** [\`focus-without-user-activation\` feature policy](https://github.com/mozilla/standards-positions/issues/1080) [open] `venue: WHATWG`, `team: Security`
  > *Latest discussion from @ffiori: "cc @smaug---- @zcorpan..."*
- **W3C TAG:** ['focus-without-user-activation' permissions policy](https://github.com/w3ctag/design-reviews/issues/1066) [closed] `Venue: WHATWG`, `Resolution: satisfied`, `Venue: WebAppSec WG`, `Topic: Feature Policy`, `Focus: Accessibility (complete)`
  > *Latest discussion from @matatk: "Hi @ffiori. Thanks for your updates to the explainer; they're helpful, and we continue to be happy with the direction the work has taken, so will clos..."*

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/security/security) *(developer.chrome.com)*
  > \*\*How It Works:\*\* Embedders can disable this behavior using HTTP headers (\`Permissions-Policy: focus-without-user-activation=()\`) or the iframe attribute (\`allow="focus-without-user-activation 'none'"\` or leaving it out ...
- [Permissions Policy: focus-without-user-activation - Chrome Platform Status](https://chromestatus.com/feature/5179186249465856?gate=5948644329521152) *(chromestatus.com)*
  > \*\*Chrome 148 / 149 Beta & Origin Trials:\*\* Chromium introduced this feature through an Origin Trial running from Chrome 149 through Chrome 152 across Desktop, Android, and WebView platforms under the tracking flag \`Block...
- [chrome.com](https://developer.chrome.com/blog/chrome-149-beta) *(developer.chrome.com)*
  > \*\*Chrome 148 / 149 Beta & Origin Trials:\*\* Chromium introduced this feature through an Origin Trial running from Chrome 149 through Chrome 152 across Desktop, Android, and WebView platforms under the tracking flag \`Block...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/150) *(learn.microsoft.com)*
  > \*\*Microsoft Edge 150 Platform Release Notes:\*\* Microsoft Edge announced developer availability and support for the origin trial
- [chromium.org](https://issues.chromium.org/issues/40053940) *(issues.chromium.org)*
  > \*\*W3C TAG Review (#1066) & Mozilla:\*\* The W3C Technical Architecture Group (TAG) and Mozilla developers reviewed the feature positively, specifically noting its utility in combating notorious malvertising exploits (such ...
- [Intent to Experiment: Permissions Policy: focus-without-user-activation](https://groups.google.com/a/chromium.org/g/blink-dev/c/GLmp1IrJ4Ig) *(groups.google.com)*
  > Intent to Experiment: Permissions Policy: focus-without-user-activation Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; ...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Experiment: Permissions Policy: focus-without-user-activation](https://groups.google.com/a/chromium.org/g/blink-dev/c/GLmp1IrJ4Ig) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5179186249465856`)*
  > Intent to Experiment: Permissions Policy: focus-without-user-activation Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; ...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17810.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Yoav Weiss (@Shopi...
- [Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](https://www.mail-archive.com/blink-dev@chromium.org/msg16301.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Mike T...
- [\[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17736.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation 'Fernando Fiori' via blink...
- [\[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg16291.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Chromestatus W...

#### 📚 Platform Documentation & References

- [webappsec-permissions-policy/policies/focus-without-user-activation.md at main · w3c/webappsec-permissions-policy · GitHub](https://github.com/w3c/webappsec-permissions-policy/blob/main/policies/focus-without-user-activation.md) *(github.com)*
- [\[focus-without-user-activation\] Clarify focus behavior across browsing contexts when policy is denied · Issue #11839 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/11839) *(github.com)*
- [github.com](https://github.com/mdn/content/issues/37532) *(github.com)*
- [github.com](https://github.com/mdn/browser-compat-data/issues/30985) *(github.com)*
- [github.com](https://github.com/whatwg/html/issues/12067) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 13 planned queries, 24 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 12 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (3 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 7

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

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 265 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Prerendering cross-origin iframes extends the Speculation Rules API by permitting top-level documents to opt in via the 'Supports-Loading-Mode: prerender-cross-origin-frames' HTTP response header. Chrome enabled this capability by default in version 158 to resolve load-time bottlenecks for iframe-dependent web applications. While Chromium actively drives the specification alongside W3C TAG early review, non-Chromium browser vendors have not yet adopted or implemented this opt-in mechanism.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat cross-origin iframe prerendering as an opt-in progressive enhancement by serving the 'Supports-Loading-Mode: prerender-cross-origin-frames' HTTP header on target documents where iframe content is essential to the immediate user experience. Ensure embedded iframe scripts defer analytics or side-effects until the 'prerenderingchange' event fires, and rely on browser fallbacks for non-supporting engines.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (W3C TAG): Latest discussion from @yoichio: "Still in discussion, but we lean to allow the nesting with some restriction. Roughly: - Allow if the nested iframe's origin is same to parent frame - ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Prerendering cross-origin iframes](https://github.com/WebKit/standards-positions/issues/636) [open] 
- **Mozilla:** [Prerendering cross-origin iframes](https://github.com/mozilla/standards-positions/issues/1376) [open] 
- **W3C TAG:** [Incubation: Prerendering cross-origin iframes](https://github.com/w3ctag/design-reviews/issues/1207) [closed] `Resolution: satisfied`, `Review type: CG early review`, `Venue: WICG`, `Topic: privacy`, `Missing: Multi-stakeholder support`
  > *Latest discussion from @yoichio: "Still in discussion, but we lean to allow the nesting with some restriction. Roughly: - Allow if the nested iframe's origin is same to parent frame - ..."*

#### 📰 Ecosystem Blogs & Articles

- [Supports-Loading-Mode - Expert Guide to HTTP headers](https://http.dev/supports-loading-mode) *(http.dev)*
  > By default, navigational speculative loading via the \*\*Speculation Rules API\*\* delays loading and executing all cross-origin \`&lt;iframe&gt;\`s until the user actually navigates to and activates the prerendered top-level page H...
- [chromestatus.com](https://chromestatus.com/feature/5112398709129216?gate=5147046579404800) *(chromestatus.com)*
  > \*\*Developer Workflow & DevTools\*\*: Google modern web guidance notes that prerendered cross-origin iframes are exposed to Chrome DevTools to enable developers to inspect speculative loading bottlenecks and ensure iframe s...
- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM) *(groups.google.com)*
  > Intent to Prototype: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototy...
- [Intent to Experiment: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyGHPL8Z6IY) *(groups.google.com)*
  > Intent to Experiment: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experi...
- [Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17867.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Mike Taylor Tue, 27 Oct 2026 16:35:53 -070...
- [\[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg16203.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes Alex Russell Fri, 27 Mar 2026 12:21:25...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Intent to Prototype: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototy...
- [Intent to Experiment: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyGHPL8Z6IY) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Intent to Experiment: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experi...
- [Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17867.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Mike Taylor Tue, 27 Oct 2026 16:35:53 -070...
- [\[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg16203.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > \[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes Alex Russell Fri, 27 Mar 2026 12:21:25...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17858.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Alex Russell Tue, 27 Oct 2026 11:52:13 -0700 Thank...

#### 📚 Platform Documentation & References

- [Prerendering cross-origin iframes · Issue #1376 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1376) *(github.com)*
- [Prerendering cross-origin iframes · Issue #636 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/636) *(github.com)*
- [Prerendering cross-origin iframes · Issue #1474 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1474) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Supports-Loading-Mode) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/http/reference/headers/supports-loading-mode/index.md?plain=1) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `speculation-rules` on [wpt.fyi](https://wpt.fyi/results?q=feature:speculation-rules) (via webstatus.dev) — stable: Chrome 72.3% · Edge 93.5% · Firefox 0% · Safari 13.6%; experimental: Chrome 75.5% · Edge 94.1% · Firefox 26.8% · Safari 27%

#### 🌐 Web-features Group Context

*group-level data: web-features [`speculation-rules`](https://webstatus.dev/features/speculation-rules), shared with 15 other ChromeStatus features*

- **Chrome usage:** 0.12% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/317))
- **Mozilla:** neutral ([standards position](https://github.com/mozilla/standards-positions/issues/620)) · concerns: `complexity`

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (64 found across 12 planned queries, 19 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 7 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "speculation-rules", shared with 15 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "speculation-rules": Chrome 72.3% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

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

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 250 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Popup Capability Delegation" Chrome"`, `""Service Worker Capability Delegation for Pop-ups" OR "capability delegation for popup windows""`, `""Service Worker Capability Delegation for Pop-ups" site:github.com/WebKit/standards-positions"`, `""Other Spec Review: Service Worker Capability Delegation for Pop-ups" site:github.com/w3ctag/design-reviews"`
- **Analysis:** Popup Capability Delegation is an early-stage incubation within the WICG, currently implemented behind a developer trial flag in Chromium. It addresses a major architectural gap in Service Worker notifications by allowing background workers to delegate transient popup permissions to same-origin window clients, enabling memory-shared auxiliary windows via \`window.open()\`. Broader cross-engine consensus is nascent, with formal reviews underway but no cross-browser commitments yet established.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web engineering teams building complex desktop PWAs should experiment with the API behind flags to benchmark performance gains from shared-memory popups. However, production architectures must continue using \`Clients.openWindow()\` or in-tab modal fallbacks until interoperability matures across Safari and Firefox.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **9 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Service Worker Capability Delegation for Pop-ups](https://github.com/WebKit/standards-positions/issues/735) [open] 
- **Mozilla:** [Service Worker Capability Delegation for Pop-ups](https://github.com/mozilla/standards-positions/issues/1474) [open] 
- **W3C TAG:** [Other Spec Review: Service Worker Capability Delegation for Pop-ups](https://github.com/w3ctag/design-reviews/issues/1295) [open] `Progress: untriaged`, `Review type: later review`

#### 📰 Ecosystem Blogs & Articles

- [Google Issue Tracker](https://doc-3qv0-09ag-issuetracker.googleusercontent.com/issues/542314185) *(doc-3qv0-09ag-issuetracker.googleusercontent.com)*
  > Google Issue Tracker Sign in
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5091965583622144) *(img968-dot-cr-status.appspot.com)*
  > When a user interacts with a web notification, the Service Worker receives a temporary ("transient") user activation open()\` in response to that notification event, browser popup blockers would block it because the clien...
- [chromestatus.com](https://chromestatus.com/feature/5708770829139968) *(chromestatus.com)*
  > open()\` to open pop-up windows (e.g., email draft previews, detached chat windows, authentication dialogs) without triggering popup blockers \*\*Summary:\*\* Authored by Chromium engineers, this explainer outlines the API de...
- [chromium.org](https://issues.chromium.org/issues/542314185/resources) *(issues.chromium.org)*
  > \*\*Type:\*\* Web Platform Specification & Explainer
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5091965583622144/activity) *(img968-dot-cr-status.appspot.com)*
  > \*\*Type:\*\* Official Code Sample & Developer Tutorial
- [appspot.com](https://img168-dot-cr-status.appspot.com/feature/5091965583622144) *(img168-dot-cr-status.appspot.com)*
  > \*\*Summary:\*\* Tracked by the Web Platform DX (Developer Experience) working group, this item catalogs browser implementation status across vendor engines (Chromium, WebKit, Gecko)

#### 🔗 Inbound Citations & Reverse Links

- [Service Worker Capability Delegation for Pop-ups · Issue #1474 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1474) *(github.com · 2026-10-27T19:31:39)* *(Cites: `https://chromestatus.com/feature/5091965583622144`)*
  > Service Worker Capability Delegation for Pop-ups · Issue #1474 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [Service Worker Capability Delegation for Pop-ups · Issue #735 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/735) *(github.com · 2026-10-27T19:37:53)* *(Cites: `https://chromestatus.com/feature/5091965583622144`)*
  > Service Worker Capability Delegation for Pop-ups · Issue #735 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or w...
- [Other Spec Review: Service Worker Capability Delegation for Pop-ups · Issue #1295 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1295) *(github.com · 2026-10-27T19:16:49)* *(Cites: `https://chromestatus.com/feature/5091965583622144`)*
  > Other Spec Review: Service Worker Capability Delegation for Pop-ups · Issue #1295 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with a...
- [\[blink-dev\] Ready for Developer Testing: Popup Capability Delegation](http://www.mail-archive.com/blink-dev@chromium.org/msg17714.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/capability-delegation/blob/main/explainers/popup-delegation.md`)*
  > \[blink-dev\] Ready for Developer Testing: Popup Capability Delegation Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Popup Capability Delegation Chromestatus Mon, 12 Oct 2026 20:30:04 -0700...

#### 📚 Platform Documentation & References

- [Explainer: Capability delegation for popup windows by dmurph · Pull Request #41 · WICG/capability-delegation · GitHub](https://github.com/WICG/capability-delegation/pull/41) *(github.com)*
- [github.com](https://github.com/web-platform-dx/web-features/issues/4221) *(github.com)*
- [github.com](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/capability-delegation-popup/README.md) *(github.com)*
- [Service Worker Capability Delegation for Pop-ups · Issue #1474 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1474) *(github.com)*
- [Service Worker Capability Delegation for Pop-ups · Issue #735 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/735) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Popup Capability Delegation Demo](https://googlechrome.github.io/samples/service-worker/capability-delegation-popup/index.html)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (41 found across 11 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 9 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (1 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (5 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (9 found, 5 verified)
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5174965228929024-css-custom-highlight-universal-selector-highlight"></a>
### [CSS Custom Highlight Universal Selector ::highlight(\*)](https://chromestatus.com/feature/5174965228929024)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5174965228929024](https://chromestatus.com/feature/5174965228929024) · [chromestatuslite.com/feature/5174965228929024](https://chromestatuslite.com/feature/5174965228929024)
- **Specification:** [https://drafts.csswg.org/css-pseudo-4/#selectordef-highlight-highlight-name-selector](https://drafts.csswg.org/css-pseudo-4/#selectordef-highlight-highlight-name-selector)
- **Chromium Bug:** [https://issues.chromium.org/issues/408003366](https://issues.chromium.org/issues/408003366)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Under consideration` · Safari: `Support`

#### 📝 Overview

Introduces a universal selector for custom highlights, ::highlight(\*), which matches the highlight pseudo-elements of all custom highlights regardless of their name.   The \* argument contributes zero specificity, so its declarations act as a base style that rules naming a specific highlight override through the cascade.

> **Motivation:** Styling shared properties across custom highlights requires repeating the same declarations for every registered name. The CSSWG resolved to allow ::highlight(\*).

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 230 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""highlight(*)" webkit standards-positions"`, `""highlight(*)" mozilla standards-positions"`, `""highlight(*)" csswg"`
- **Analysis:** The CSS Custom Highlight Universal Selector \`::highlight(\*)\` provides an ergonomic base-styling mechanism for the CSS Custom Highlight API by matching all registered highlights regardless of name with zero added specificity. Standardized via CSS Working Group resolutions and shipping enabled by default in Chromium, it eliminates repetitive declaration blocks across multi-highlight architectures. Strong cross-engine consensus and WebKit implementation indicate smooth progression toward cross-browser interoperability.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams utilizing the CSS Custom Highlight API should test \`::highlight(\*)\` for common fallback styling, gating rules behind \`@supports selector(::highlight(\*))\` where older browser releases remain in support matrixes. Avoid immediately stripping existing comma-separated named highlight selectors in production until Safari and Firefox stable channels widely deploy the selector.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @nt1m: "This is implemented in WebKit: https://github.com/WebKit/WebKit/commit/5ed89fc0abf85e2613cd16c9c16ac66c6d64e17d..."
- Standards Activity (Mozilla): Latest discussion from @jnjaeschke: "Agreeing with @emilio, I think this is reasonable...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **13 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Custom Highlight Universal Selector ::highlight(\*)](https://github.com/WebKit/standards-positions/issues/728) [closed] `position: support`
  > *Latest discussion from @nt1m: "This is implemented in WebKit: https://github.com/WebKit/WebKit/commit/5ed89fc0abf85e2613cd16c9c16ac66c6d64e17d..."*
- **Mozilla:** [CSS Custom Highlight Universal Selector ::highlight(\*)](https://github.com/mozilla/standards-positions/issues/1460) [open] `topic: CSS`
  > *Latest discussion from @jnjaeschke: "Agreeing with @emilio, I think this is reasonable...."*

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/ui-behaviors/highlight-text-ranges) *(developer.chrome.com)*
  > highlights\` required authoring explicit rules for every highlight identifier (e.g., \`::highlight(search-result)\`, \`::highlight(syntax-keyword)\`) \*\*Comparison with Existing Documentation (MDN & Chrome for Developers):\*\* M...
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5174965228929024) *(img968-dot-cr-status.appspot.com)*
  > highlights\` required authoring explicit rules for every highlight identifier (e.g., \`::highlight(search-result)\`, \`::highlight(syntax-keyword)\`) There was no mechanism to define base styling or CSS custom property defaul...
- [appspot.com](https://img120-dot-cr-status.appspot.com/feature/5174965228929024) *(img120-dot-cr-status.appspot.com)*
  > \*\*The Solution:\*\* \`::highlight(\*)\` matches all custom highlight pseudo-elements regardless of name
- [googleusercontent.com](https://doc-2gh0-0gig-issuetracker.googleusercontent.com/issues/568010587) *(doc-2gh0-0gig-issuetracker.googleusercontent.com)*
  > \*\*Chrome Platform Status:\*\* Feature entry \*\*"CSS Custom Highlight Universal Selector \`::highlight(\*)\`"\*\* (Feature ID: 5174965228929024)
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/8555f62ca21d1042182db4843e3f322d8213771a) *(chromium.googlesource.com)*
  > \*\*Details:\*\* Implemented in Blink by Seokho Song and reviewed by Chrome engineers Rune Lillesveen and Stephen Chenney Following consensus in the CSS Working Group (CSSWG), the Blink team issued an \*Intent to Ship\* target...
- [Custom Highlight Universal Selector ::highlight(\*) \| daily.dev](https://daily.dev/posts/custom-highlight-universal-selector-highlight--f416uv98z) *(daily.dev)*
  > Following consensus in the CSS Working Group (CSSWG), the Blink team issued an \*Intent to Ship\* targeting Chromium 158 dev & Tech Roundups:\*\* Recent roundups covering the latest additions to Chromium 158 and CSS pseudo-e...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/web-platform-dx/web-features/issues/4242) *(github.com)*
- [CSS Custom Highlight Universal Selector ::highlight(\*) · Issue #728 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/728) *(github.com)*
- [github.com](https://github.com/w3c/csswg-drafts/issues/9091) *(github.com)*
- [w3.org](https://www.w3.org/groups/cg/webdx/activity) *(w3.org)*
- [CSS custom highlight API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Custom_highlight_API) *(developer.mozilla.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (64 found across 11 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (15 found, 14 verified) · `Twitter / X API v2` *(found 8 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (4 found, 4 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 4

---

<a id="5180947573112832-webtransport-congestion-control"></a>
### [WebTransport congestion control](https://chromestatus.com/feature/5180947573112832)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5180947573112832](https://chromestatus.com/feature/5180947573112832) · [chromestatuslite.com/feature/5180947573112832](https://chromestatuslite.com/feature/5180947573112832)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransportoptions-congestioncontrol](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-congestioncontrol)
- **Chromium Bug:** [https://issues.chromium.org/issues/501268547](https://issues.chromium.org/issues/501268547)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Neutral` · Safari: `Neutral`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

#### 📝 Overview

Adds the congestionControl constructor option and read-only attribute to WebTransport. Applications can request "default", "throughput", or "low-latency" behavior, allowing the user agent to select suitable congestion-control behavior for each session.

> **Motivation:** WebTransport applications have different performance requirements. Interactive applications prioritize low latency, while bulk transfers prioritize throughput. This hint lets applications express that preference without selecting or controlling a specific congestion-control algorithm.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 220 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebTransport" "congestionControl" intent to ship"`, `""WebTransport congestion control""`, `""WebTransport" "congestionControl" site:github.com/WebKit/standards-positions"`, `""WebTransport" "congestionControl" site:github.com/mozilla/standards-positions"`
- **Analysis:** The WebTransport congestion control feature introduces an ergonomic constructor hint and read-only reflection property allowing applications to request 'default', 'throughput', or 'low-latency' profiles without binding to specific underlying algorithms. Chromium has enabled the feature by default, building upon the broader Baseline availability of WebTransport across modern browsers. The feature provides a standardized, additive way to adapt QUIC transport behaviors to interactive gaming, media streaming, or bulk-data workloads.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can safely pass the \`congestionControl\` option to the \`WebTransport\` constructor today as a progressive enhancement, as non-supporting engines will cleanly ignore unknown dictionary keys. Production applications requiring low-latency guarantees should check \`transport.congestionControl\` after initialization to detect whether the user agent honored the request or reverted to \`'default'\`.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @larseggert: "CC @jesup @omansfeld @mxinden..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **7 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [WebTransport congestion control option and attribute](https://github.com/WebKit/standards-positions/issues/734) [open] 
- **Mozilla:** [WebTransport congestion control option and attribute](https://github.com/mozilla/standards-positions/issues/1472) [open] 
  > *Latest discussion from @larseggert: "CC @jesup @omansfeld @mxinden..."*

#### 📰 Ecosystem Blogs & Articles

- [google.com](https://issuetracker.google.com/501268547) *(issuetracker.google.com)*
  > Cubic) to avoid coupling the web API to ephemeral transport implementations congestionControl\` getter reports what the browser actually honored, returning \`"default"\` if the browser or platform network layer could not sa...
- [chromestatus.com](https://chromestatus.com/feature/5180947573112832/activity) *(chromestatus.com)*
  > Authored and shepherded through Chromium by Microsoft and Google contributors Details how the effective algorithm is reported in tools like Chrome's \`NetLog\` and JavaScript console
- [WebTransport Explained: vs WebRTC, WHIP and MoQ in 2026](https://www.forasoft.com/learn/video-streaming/articles-streaming/webtransport-whip) *(forasoft.com)*
  > \*\*Sources:\*\* Real-time media developer blogs and GitHub Interop discussions \*\*Replacing WebRTC Data Channels:\*\* Developers building media-over-QUIC (MoQ) architectures and low-latency streaming tools have cited congestio...
- [How to use WebTransport  \|  Capabilities  \|  Chrome for Developers](https://developer.chrome.com/docs/capabilities/web-apis/webtransport) *(developer.chrome.com)*
  > \*\*Low-Latency Gaming & Live Video:\*\* Tutorials emphasize that setting \`"low-latency"\` enables interactive applications to shed buffered packets or receive early packet backpressure instead of allowing high sender-side qu...
- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17748.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Mike Taylor Thu, 15 Oct 2026 10:13:09 -0700 On 10/14/2...
- [\[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17735.html) *(mail-archive.com)*
  > Blink component Blink&gt;Network&gt;WebTransport Web Feature ID webtransport Motivation WebTransport applications have different performance requirements. Interactive applications prioritize low latency, while bulk trans...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: WebTransport congestion control](http://www.mail-archive.com/blink-dev@chromium.org/msg17748.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5180947573112832`)*
  > Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: WebTransport congestion control Mike Taylor Thu, 15 Oct 2026 10:13:09 -0700 On 10/14/2...

#### 📚 Platform Documentation & References

- [WebTransport: congestionControl property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/congestionControl) *(developer.mozilla.org)*
- [WebTransport congestion control option and attribute · Issue #734 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/734) *(github.com)*
- [WebTransport: WebTransport() constructor - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/WebTransport) *(developer.mozilla.org)*
- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [github.com](https://github.com/w3c/webtransport/issues/365) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 43.1% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 78.8% · Safari 73%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00016% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (69 found across 12 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 10 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 2 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 43.1% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

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

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 210 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** Standardized under the W3C WebTransport specification following IETF discussions, the anticipated concurrent incoming streams feature allows applications to configure initial QUIC stream allowances to avoid server-side blocking during connection setup. Chrome has enabled the constructor options and runtime attributes by default in Chrome 158, establishing the initial shipping milestone for the capability. While overall WebTransport adoption remains niche, the addition directly resolves critical flow-control round-trip penalties for latency-sensitive applications.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams running server-push heavy WebTransport workloads should adopt these constructor hints immediately via progressive enhancement, as non-supporting browsers will silently ignore unknown dictionary members. Applications should specify realistic estimates above the specification's default floor of 100 streams to eliminate connection startup stalls without risking runtime errors in older runtimes.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **11 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2076568: New wpt failures in /webtransport/ \[anticipated-concurrent-incoming-streams.https.any.worker.html, anticipated-concurrent-incoming-streams.https.any.serviceworker.html, anticipated-concurrent-incoming-streams.https.any.sharedworker.html, and 1 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2076568) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [ietf.org](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3-16) *(datatracker.ietf.org)*
  > In WebTransport over HTTP/3 (QUIC), the client manages the flow control credit determining how many simultaneous server-initiated streams can be opened
- [openpwa.net](https://openpwa.net/reference/capabilities/webtransport) *(openpwa.net)*
  > In WebTransport over HTTP/3 (QUIC), the client manages the flow control credit determining how many simultaneous server-initiated streams can be opened \`anticipatedConcurrentIncomingUnidirectionalStreams\`
- [How to use WebTransport  \|  Capabilities  \|  Chrome for Developers](https://developer.chrome.com/docs/capabilities/web-apis/webtransport) *(developer.chrome.com)*
  > However, high-throughput or real-time WebTransport applications—such as live media distribution, multiplayer gaming, or parallel RPC/telemetry systems—often require the server to open hundreds or thousands of streams con...
- [chromestatus.com](https://chromestatus.com/feature/5089961022980096?gate=6378143031099392) *(chromestatus.com)*
  > However, high-throughput or real-time WebTransport applications—such as live media distribution, multiplayer gaming, or parallel RPC/telemetry systems—often require the server to open hundreds or thousands of streams con...
- [ietf.org](https://datatracker.ietf.org/meeting/119/materials/slides-119-webtrans-ietf-119-webtrans-wg-slides-04) *(datatracker.ietf.org)*
  > The \*\*"WebTransport anticipated concurrent incoming streams"\*\* feature addresses this by introducing two constructor options and matching instance attributes These hints allow the browser to configure and advertise a hig...
- [wpt.fyi](https://wpt.fyi/results/webtransport/anticipated-concurrent-incoming-streams.https.any.serviceworker.html?run_id=5194407249969152&run_id=4902746892533760&diff=) *(wpt.fyi)*
  > \*\*Key Takeaway:\*\* Identifies the parameters as nullable unsigned shorts (\`unsigned short?\`, defaulting to \`null\`), exposing them directly in both window and Web Worker / ServiceWorker contexts

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams](http://www.mail-archive.com/blink-dev@chromium.org/msg17825.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5089961022980096`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams Yoav Weiss (...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams](http://www.mail-archive.com/blink-dev@chromium.org/msg17827.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5089961022980096`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport anticipated concurrent incoming streams Dani...
- [\[blink-dev\] Intent to Ship: WebTransport anticipated concurrent incoming streams](http://www.mail-archive.com/blink-dev@chromium.org/msg17806.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/issues/544`)*
  > \[blink-dev\] Intent to Ship: WebTransport anticipated concurrent incoming streams Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport anticipated concurrent incoming streams Chromestatus Tue, 20...

#### 📚 Platform Documentation & References

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/webtransport) *(w3.org)*
- [WebTransport: anticipatedConcurrentIncoming\*Streams properties and options by hamishwillee · Pull Request #46334 · mdn/content · GitHub](https://github.com/mdn/content/pull/46334) *(github.com)*
- [Browser Compatibility understates the Ed25519 floor and omits Safari from WebTransport (which is ahead of Chromium) · Issue #30 · johnhenry/wsh · GitHub](https://github.com/johnhenry/wsh/issues/30) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 43.1% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 78.8% · Safari 73%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00016% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (45 found across 12 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 12 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (4 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (2 found, 1 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 43.1% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 0

---

<a id="5095781286674432-global-privacy-control-in-chrome"></a>
### [Global Privacy Control in Chrome](https://chromestatus.com/feature/5095781286674432)

- **Milestone:** Chrome 157 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/5095781286674432](https://chromestatus.com/feature/5095781286674432) · [chromestatuslite.com/feature/5095781286674432](https://chromestatuslite.com/feature/5095781286674432)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Starting in Chrome 157, eligible users will have a new privacy setting in Chrome to send an opt-out request to websites regarding the use of their data.  When the setting is enabled by a user, Chrome appends the Sec-GPC: 1 HTTP header to outgoing network requests and sets the navigator.globalPrivacyControl = true to client-side scripts. This enables websites to programmatically read and detect the user's opt-out request using standard Global Privacy Control (GPC) specifications. For more details, IT admins and users can review the Help center.

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 203 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Global Privacy Control (GPC) has progressed from an emerging privacy initiative into a formal W3C specification with binding legal weight under statutes like California's Opt Me Out Act (AB 566). Chrome's introduction of native user settings transmitting the Sec-GPC: 1 header and exposing navigator.globalPrivacyControl closes a major coverage gap that previously required third-party extensions. The feature cements broad cross-browser technical interoperability for automated opt-out preference signals.

**Key Recommendations & Takeaways:**
- Actionable Advice: Engineering and compliance teams should immediately audit their Consent Management Platforms (CMPs) and server-side pipelines to detect navigator.globalPrivacyControl and Sec-GPC headers, ensuring third-party tracking tags and advertising data sharing are automatically suppressed upon signal detection.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Global Privacy Control Appears in Latest Chrome Canary Build" (2 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- 💬 [Global Privacy Control Appears in Latest Chrome Canary Build](https://news.ycombinator.com/item?id=49272223) — *Hacker News (2 pts, 0 comments)*

#### 📰 Ecosystem Blogs & Articles

- [Global Privacy Control Appears in Latest Chrome Canary Build](https://webiterate.dev/global-privacy-control-chrome-56) *(webiterate.dev · 2026-08-12T13:37:09Z)*
- [Global Privacy Control - Wikipedia](https://en.wikipedia.org/wiki/Global_Privacy_Control) *(en.wikipedia.org)*
  > Previously, Chromium users had to rely on experimental flags (such as \`chrome://flags/#enable-global-privacy-control\`) or third-party extensions (like the EFF’s Privacy Badger or DuckDuckGo Privacy Essentials) to transmi...
- [reddit.com](https://www.reddit.com/r/chrome/comments/1vmcawy/chrome_canary_now_has_a_dedicated_flag_to_force) *(reddit.com)*
  > Previously, Chromium users had to rely on experimental flags (such as \`chrome://flags/#enable-global-privacy-control\`) or third-party extensions (like the EFF’s Privacy Badger or DuckDuckGo Privacy Essentials) to transmi...
- [androidheadlines.com](https://www.androidheadlines.com/2026/08/chrome-is-testing-a-simpler-way-to-opt-out-of-data-sharing.html) *(androidheadlines.com)*
  > Previously, Chromium users had to rely on experimental flags (such as \`chrome://flags/#enable-global-privacy-control\`) or third-party extensions (like the EFF’s Privacy Badger or DuckDuckGo Privacy Essentials) to transmi...
- [chromestatus.com](https://chromestatus.com/feature/5137324344213504) *(chromestatus.com)*
  > The release marks Chrome officially catching up with the W3C GPC standard to provide a native setting for eligible users A primary driver highlighted in Chromium tracker entries is compliance with regulatory mandates—spe...
- [Global Privacy Control in Chrome - Chrome Platform Status](https://cr-status.appspot.com/feature/5095781286674432) *(cr-status.appspot.com · 2026-10-27T22:07:36)*
  > Chrome Platform Status

#### 📚 Platform Documentation & References

- [Navigator: globalPrivacyControl property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/globalPrivacyControl) *(developer.mozilla.org)*
- [Sec-GPC header - HTTP - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Sec-GPC) *(developer.mozilla.org)*
- [Implications of Global Privacy Control - MDN Web Docs](https://developer.mozilla.org/en-US/blog/global-privacy-control) *(developer.mozilla.org)*
- [Global Privacy Control (GPC)](https://www.w3.org/TR/gpc) *(w3.org)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (53 found across 10 planned queries, 16 verified) · `Google Search Grounding (gemini-3.8-flash)` (17 found, 7 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (3 found, 1 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
- **Content Inspected:** Spec: ○ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 200 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""WebAudio/web-audio-api" 2445"`, `""OfflineAudioContext incremental rendering""`, `""OfflineAudioContext" incremental rendering MSEdgeExplainers"`, `""OfflineAudioContext" "startRendering" incremental MSEdgeExplainers"`
- **Analysis:** OfflineAudioContext incremental rendering addresses a critical architectural limitation in the Web Audio API by streaming rendered audio in discrete chunks rather than pre-allocating gigabyte-sized buffers upfront. Championed collaboratively by Microsoft and Google to unblock complex browser-based video and audio editing, the feature is enabled by default in Chrome 158 following approval on the Blink developer mailing list. Although the specification text has been accepted in the W3C Web Audio Working Group, cross-engine interoperability remains in its infancy as Gecko and WebKit have not yet shipped implementations.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audio and media application developers should adopt incremental rendering using progressive enhancement, routing long render workloads to chunked processing where available while preserving the legacy full-buffer fallback for Safari and Firefox. Because stateful audio nodes prevent faithful polyfilling through chained context instances, teams should rely on runtime feature detection rather than synthetic workarounds.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [OfflineAudioContext Incremental Rendering](https://github.com/WebKit/standards-positions/issues/724) [open] 
- **Mozilla:** [OfflineAudioContext Incremental Rendering](https://github.com/mozilla/standards-positions/issues/1456) [open] 
- **W3C TAG:** [Other Spec Review: OfflineAudioContext Incremental Rendering](https://github.com/w3ctag/design-reviews/issues/1282) [open] `Progress: untriaged`, `Review type: later review`

#### 📰 Ecosystem Blogs & Articles

- [google.com](https://issuetracker.google.com/issues/571867211) *(issuetracker.google.com)*
  > \*\*Source:\*\* \*Chrome Platform Status (Feature ID: 5109900936085504)\* and Chromium Tracker Issues (Issue \`#530596178\` & \`#571867211\`) \*\*Details:\*\* The Blink WebAudio team (co-owned by Gabriel Brito at Microsoft and Hongcha...
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > dev & developer.chrome.com:\*\* Mentioned in milestone-level tracking issues and Chrome release notes; full developer deep dives are expected closer to general availability
- [Re: \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17788.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering Mike Taylor Mon, 19 Oct 20...
- [\[blink-dev\] Intent to Ship: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17760.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: OfflineAudioContext incremental rendering Chromestatus Thu, 15 Oct 2026 16:46:46 -07...
- [\[blink-dev\] Intent to Prototype: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17318.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: OfflineAudioContext incremental rendering Chromestatus Thu, 27 Aug 2026 14...
- [\[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17791.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering 'Dan Clark' via blink-dev Mon, 19 ...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17788.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5109900936085504`)*
  > Re: \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering Mike Taylor Mon, 19 Oct 20...
- [\[blink-dev\] Intent to Ship: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17760.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/OfflineAudioContext/explainer.md`)*
  > \[blink-dev\] Intent to Ship: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: OfflineAudioContext incremental rendering Chromestatus Thu, 15 Oct 2026 16:46:46 -07...
- [\[blink-dev\] Intent to Prototype: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17318.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/OfflineAudioContext/explainer.md`)*
  > \[blink-dev\] Intent to Prototype: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: OfflineAudioContext incremental rendering Chromestatus Thu, 27 Aug 2026 14...
- [\[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering](http://www.mail-archive.com/blink-dev@chromium.org/msg17791.html) *(mail-archive.com)* *(Cites: `https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/OfflineAudioContext/explainer.md`)*
  > \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: OfflineAudioContext incremental rendering 'Dan Clark' via blink-dev Mon, 19 ...

#### 📚 Platform Documentation & References

- [OfflineAudioContext Incremental Rendering · Issue #4473 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4473) *(github.com)*
- [Other Spec Review: · Issue #1282 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1282) *(github.com)*
- [Add OfflineAudioContext incremental rendering feature by Rutujakirad · Pull Request #4475 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/pull/4475) *(github.com)*
- [OfflineAudioContext Incremental Rendering by gabrielsanbrito · Pull Request #2675 · WebAudio/web-audio-api · GitHub](https://github.com/WebAudio/web-audio-api/pull/2675) *(github.com)*
- [OfflineAudioContext incremental rendering by chromium-wpt-export-bot · Pull Request #63213 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/63213) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [OfflineAudioContext incremental rendering Demo](https://gabrielsanbrito.github.io/demo_pages/oac-incremental-rendering)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (49 found across 12 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 4 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (4 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="4860330806214656-webtransport-keying-material-export"></a>
### [WebTransport keying material export](https://chromestatus.com/feature/4860330806214656)

- **Milestone:** Chrome 158 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/4860330806214656](https://chromestatus.com/feature/4860330806214656) · [chromestatuslite.com/feature/4860330806214656](https://chromestatuslite.com/feature/4860330806214656)
- **Specification:** [https://www.w3.org/TR/webtransport/#dom-webtransport-exportkeyingmaterial](https://www.w3.org/TR/webtransport/#dom-webtransport-exportkeyingmaterial)
- **Chromium Bug:** [https://issues.chromium.org/issues/556304550](https://issues.chromium.org/issues/556304550)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Positive` · Safari: `In development`
- **Baseline Interoperability:** [Baseline Newly Available](https://webstatus.dev/features/webtransport) (Chrome: `97`, Firefox: `114`, Safari: `26.4`) · *group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

#### 📝 Overview

Adds WebTransport.exportKeyingMaterial(), which allows an application to derive cryptographic keying material bound to an established WebTransport session.  The method accepts application provided binary label and context values and a requested output length and returns a Promise&lt;Uint8Array&gt;. Chromium supports label and context values up to 255 bytes and output lengths from 1 through 4096 bytes.  For WebTransport over HTTP/3, Chromium includes the WebTransport CONNECT stream ID in the TLS exporter context. This ensures that separate WebTransport sessions derive different keying material even when they share the same underlying HTTP/3 connection.

> **Motivation:** Applications sometimes need cryptographic keying material bound to an authenticated transport session, for example to bind an application protocol, authentication exchange, or application-level encryption context to a WebTransport session without performing an additional key exchange.  TLS exporters derive application-specific secret material witho...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 200 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"w3c webtransport exportKeyingMaterial issue 411"`, `"WebTransport exportKeyingMaterial"`, `"Intent to Ship WebTransport keying material export"`
- **Analysis:** WebTransport.exportKeyingMaterial() standardizes session-bound cryptographic key derivation directly from the underlying TLS connection without extra cryptographic handshakes. First originating from W3C WebTransport issue discussions and codified in IETF HTTP/3 transport specifications, the feature is enabled by default in Chromium. Cross-engine consensus on the standard is favorable, though Chromium is currently the first engine to deliver a shipping implementation.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building custom real-time protocols or media pipelines should adopt the API through feature detection on WebTransport.prototype while maintaining an application-layer key exchange fallback for Firefox and Safari. Avoid transmitting exported keys over application logs and verify that server-side HTTP/3 implementations correctly incorporate the CONNECT stream ID into the exporter context.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **9 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2057363: \[wpt-sync\] Sync PR 61507 - \[WebTransport\] Add tests for WebTransport.exportKeyingMaterial](https://bugzilla.mozilla.org/show_bug.cgi?id=2057363) `[NEW]`
- **Mozilla (Gecko):** [Bug #2080606: New wpt failures in /webtransport/ \[export-keying-material.https.any.html, export-keying-material.https.any.serviceworker.html, export-keying-material.https.any.sharedworker.html, and 1 others\]](https://bugzilla.mozilla.org/show_bug.cgi?id=2080606) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/4860330806214656/activity) *(chromestatus.com)*
  > \*\*Observability & DevTools:\*\* Implementation notes emphasize that calls made while connecting remain pending until the session establishes, and that browser DevTools explicitly will \*\*not\*\* inspect or display exported by...
- [googlesource.com](https://chromium.googlesource.com/external/w3c/web-platform-tests/+/refs/heads/epochs/daily/webtransport) *(chromium.googlesource.com)*
  > js\` to ensure uniform byte derivation and bounds checking across browser engines
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17869.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Mike Taylor Tue, 27 Oct 2026 16:37:53 ...
- [\[blink-dev\] Re: Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17860.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Alex Russell Tue, 27 Oct 2026 12:00:25 -0700 L...
- [\[blink-dev\] Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17838.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport keying material export Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport keying material export Chromestatus Wed, 21 Oct 2026 12:09:31 -0700 Contact e...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17873.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; \*Security\* &gt;&gt; This API exposes secret-derived material to script and therefore requires &gt;&gt; careful domain separation and lifecycle handling. It does not expose TLS &gt;&gt; traffic keys or a...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17869.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Mike Taylor Tue, 27 Oct 2026 16:37:53 ...
- [\[blink-dev\] Re: Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17860.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Alex Russell Tue, 27 Oct 2026 12:00:25 -0700 L...
- [\[blink-dev\] Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17838.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Ship: WebTransport keying material export Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport keying material export Chromestatus Wed, 21 Oct 2026 12:09:31 -0700 Contact e...

#### 📚 Platform Documentation & References

- [WebTransport: exportKeyingMaterial() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/exportKeyingMaterial) *(developer.mozilla.org)*
- [expose a TLS Keying Material Exporter / unique value for the TLS session · Issue #411 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/411) *(github.com)*
- [github.com](https://github.com/ietf-wg-webtrans/draft-ietf-webtrans-http3/issues/116) *(github.com)*
- [Release merge\_pr\_63465 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/releases/tag/merge_pr_63465) *(github.com)*
- [WebTransport.exportKeyingMaterial(): editorial review fixes by hamishwillee · Pull Request #46336 · mdn/content · GitHub](https://github.com/mdn/content/pull/46336) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 43.1% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 78.8% · Safari 73%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- **Chrome usage:** 0.00016% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (49 found across 12 planned queries, 16 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 5 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (5 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (3 found, 2 verified) · `Baseline (baseline.dev)` *(newly)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "webtransport", shared with 18 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webtransport": Chrome 43.1% passing (stable))* · `Sources cited by the AI synthesis` (3 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 195 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""direct sockets" "isolated web apps" standards-positions"`, `""Direct Sockets" "Source Specific Multicast" OR "SSM""`, `""Direct Sockets API" "WebKit" OR "Mozilla" "position""`
- **Analysis:** Shipping enabled by default in Chrome 158, Source-Specific Multicast (SSM) extends the Direct Sockets API by introducing an optional sourceAddress parameter to joinGroup(), aligning browser multicast capabilities with RFC 8815 and RFC 4607 standards. The capability is strictly gated behind Isolated Web Apps (IWAs), serving specialized enterprise, IPTV, and high-throughput media streaming use cases rather than standard web origins. Outside of Chromium, the feature lacks cross-engine traction, with competing browser engines refusing to adopt raw direct sockets.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat Direct Sockets SSM strictly as an enterprise-grade, Chromium-targeted runtime capability for packaged Isolated Web Apps rather than an open-web feature. For public web apps requiring multi-engine reach, teams should continue relying on WebTransport, WebRTC data channels, or server-side relay architectures.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/feature/6208452397498368?gate=5109346174369792) *(cr-status.appspot.com)*
  > \*\*Source-Specific Multicast (SSM) for the Direct Sockets API\*\* allows Isolated Web Apps (IWAs) to specify an optional \`sourceAddress\` parameter when joining UDP multicast groups
- [ietf.org](https://datatracker.ietf.org/meeting/124/materials/slides-124-mboned-multicast-in-the-browser-direct-sockets-enable-isolated-web-apps-on-treedn-00) *(datatracker.ietf.org)*
  > \*\*The Problem with Any-Source Multicast (ASM):\*\* The initial implementation of multicast in Direct Sockets supported only ASM (\`\*, G\`), where a receiver listens to all traffic sent to a group address Media delivery engin...
- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > Chrome 158 officially enabled SSM by default, expanding the API surface to support source-filtered subscriptions for enterprise and high-throughput environments
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > Chrome 158 officially enabled SSM by default, expanding the API surface to support source-filtered subscriptions for enterprise and high-throughput environments
- [chromium.org](https://issues.chromium.org/issues/461262401/blocking) *(issues.chromium.org)*
  > Documents the transition from ASM-only to SSM
- [Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](https://groups.google.com/a/chromium.org/g/blink-dev/c/vMmLZVd7rQI) *(groups.google.com · 2026-02-21T00:00:00)*
  > Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#x...

#### 🔗 Inbound Citations & Reverse Links

- [Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](https://groups.google.com/a/chromium.org/g/blink-dev/c/vMmLZVd7rQI) *(groups.google.com · 2026-02-21T00:00:00)* *(Cites: `https://chromestatus.com/feature/6208452397498368`)*
  > Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#x...
- [Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17792.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Alex Russell Mon, 19...
- [\[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg17733.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Source Specific Multicast for Direct Sockets API Chromestatus Wed, 14 Oct 202...
- [\[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API](http://www.mail-archive.com/blink-dev@chromium.org/msg15911.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/direct-sockets/blob/main/docs/multicast-explainer.md`)*
  > \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Source Specific Multicast for Direct Sockets API Ch...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/WICG/direct-sockets/issues/80) *(github.com)*
- [direct-sockets/index.html at main · WICG/direct-sockets · GitHub](https://github.com/WICG/direct-sockets/blob/main/index.html) *(github.com)*
- [Multicast: disallow ASM/SSM mixing per group, validate leaveGroup(), handle close by kkroo · Pull Request #86 · WICG/direct-sockets · GitHub](https://github.com/WICG/direct-sockets/pull/86) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [Source Specific Multicast for Direct Sockets API Demo](https://blockcast.network/live)
- [Source Specific Multicast for Direct Sockets API Demo](https://chromewebstore.google.com/detail/multicast-gateway-beacon/djikmiecejmojgcglkfmihhkfgekjlaj)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (47 found across 12 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (10 found, 6 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Tweets found by web search` (1 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (6 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 190 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"mozilla standards positions "closest-corner" "farthest-corner" circle ellipse"`, `""closest-corner" "farthest-corner" circle ellipse "CSS""`, `""closest-corner" "farthest-corner" "circle()" "clip-path""`
- **Analysis:** Adding the closest-corner and farthest-corner keywords to circle() and ellipse() basic shapes resolves a long-standing ergonomic disparity between CSS radial gradients and shape-based properties like clip-path, shape-outside, and offset-path. With WebKit having implemented the keywords early, Gecko implementing them in Firefox Nightly, and Chromium shipping them enabled by default in Chrome 158, full cross-engine alignment has been achieved. The feature eliminates the need for manual trigonometric workarounds or gradient mask fallbacks when inscribing element corners.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt these keywords to simplify responsive clip paths and motion paths, but they must wrap them in an @supports (clip-path: circle(closest-corner)) rule or use CSS.supports() checks to gracefully degrade to length-based dimensions for older browser installations. Ensure that any linting rules or CSS preprocessors are updated to recognize radial-extent keywords within basic-shape functions.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @nt1m: "This was implemented 2 years ago: https://commits.webkit.org/281808@main  WebKit wrote the original tests for those :)..."
- Standards Activity (Mozilla): Latest discussion from @BorisChiou: "Given that https://github.com/w3c/csswg-drafts/issues/14010 has been resolved, so suggest positive...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **6 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS Shapes: \`closest-corner\` and \`farthest-corner\` radii for \`circle()\` and \`ellipse()\`](https://github.com/WebKit/standards-positions/issues/719) [closed] `position: support`
  > *Latest discussion from @nt1m: "This was implemented 2 years ago: https://commits.webkit.org/281808@main  WebKit wrote the original tests for those :)..."*
- **Mozilla:** [CSS Shapes: \`closest-corner\` and \`farthest-corner\` radii for \`circle()\` and \`ellipse()\`](https://github.com/mozilla/standards-positions/issues/1450) [open] `venue: W3C`, `topic: CSS`
  > *Latest discussion from @BorisChiou: "Given that https://github.com/w3c/csswg-drafts/issues/14010 has been resolved, so suggest positive...."*

#### 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17449.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner ra...
- [\[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17254.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for ...
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > The circle() and ellipse() CSS basic-shape functions &lt;strong&gt;accept the closest-corner and farthest-corner radius keywords, in addition to the existing closest-side and farthest-side&lt;/strong&gt;. These keywords resolve to t...
- [Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes](http://www.mail-archive.com/blink-dev@chromium.org/msg17488.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner radii for circle() and ellipse() basic shapes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: closest-corner and farthest-corner ra...
- [Chrome Release 158](https://chromestatuslite.com/?version=158) *(chromestatuslite.com)*
  > &lt;strong&gt;The circle() and ellipse() CSS basic-shape functions accept the closest-corner and farthest-corner radius keywords, in addition to the existing closest-side and farthest-side&lt;/strong&gt;. These keywords resolve to t...
- [clip-path-circle-closest-corner.html - mozsearch](https://searchfox.org/mozilla-central/source/testing/web-platform/tests/css/css-masking/clip-path/clip-path-circle-closest-corner.html) *(searchfox.org)*
  > &lt;meta name=&quot;assert&quot; content=&quot;The clip-path property takes the basic shape · &#x27;circle&#x27; for clipping, with the &#x27;closest-corner&#x27; size.

#### 📚 Platform Documentation & References

- [circle() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/basic-shape/circle) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/basic-shape/ellipse) *(developer.mozilla.org)*
- [CSS Shapes: \`closest-corner\` and \`farthest-corner\` radii for \`circle()\` and \`ellipse()\` · Issue #1450 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1450) *(github.com)*
- [closest-corner and farthest-corner radii for circle() and ellipse() · Issue #1366 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1366) *(github.com)*
- [circle() CSS function - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape/circle) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `shapes` on [wpt.fyi](https://wpt.fyi/results?q=feature:shapes) (via webstatus.dev) — stable: Chrome 73.3% · Edge 73.3% · Firefox 86.7% · Safari 100%; experimental: Chrome 100% · Edge 100% · Firefox 100% · Safari 100%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (51 found across 11 planned queries, 15 verified) · `Google Search Grounding (gemini-3.8-flash)` (5 found, 4 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (0 found, 0 verified) · `web-features mapping` *(group "shapes", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "shapes": Chrome 73.3% passing (stable))* · `Sources cited by the AI synthesis` (3 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 5

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

- **Momentum:** **Emerging** (no earlier number to compare with yet; footprint 100 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""scroll snap for single-axis scroll containers""`
- **Analysis:** Scroll snap for single-axis scroll containers resolves a longstanding layout limitation where a single-axis scroller (such as one using overflow: auto clip) captured and suppressed snap points on its non-scrollable axis. Chromium has enabled this behavior by default starting in Chrome 158 following formal resolutions within the W3C CSS Working Group. Cross-engine consensus is strong, establishing an inheritance model where unconsumed snap axes cleanly propagate to ancestor scroll containers.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat per-axis scroll snap inheritance as a progressive enhancement today, taking advantage of smoother nesting in Chromium 158 while avoiding critical dependencies on outer-axis propagation until Gecko and WebKit ship support. Audit existing nested and sticky components in Firefox and Safari to ensure fallback snapping remains usable without trapped alignment axes.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @hiikezoe: "Looks basically reasonable to me.    That's said, it seems that the spec change hasn't yet clarified mixed up writing mode cases. From a sentence of t..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **1 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/712) [open] `topic: css`, `venue: W3C CSS WG`
- **Mozilla:** [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1445) [open] `topic: CSS`
  > *Latest discussion from @hiikezoe: "Looks basically reasonable to me.    That's said, it seems that the spec change hasn't yet clarified mixed up writing mode cases. From a sentence of t..."*

#### 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug...
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > &lt;strong&gt;Single-axis scroll containers are now supported&lt;/strong&gt; (https://chromestatus.com/feature/5067363861004288). Without this feature, such a container captures a snap area on both axes, even the axis it can&#x27;t ...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-snap`)*
  > \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers Chromestatus Mon, 17 Aug...

#### 📚 Platform Documentation & References

- [Other Spec Review: Scroll snap for single-axis scroll container · Issue #1266 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1266) *(github.com)*
- [github.com](https://github.com/mozilla/standards-positions/issues/1445) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/712) *(github.com)*
- [\[css-scroll-snap-1\] Support scroll snap for single-axis scroll containers #14018 by lcdavid94 · Pull Request #14354 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/pull/14354) *(github.com)*
- [\[css-scroll-snap\] Clarify snapping behavior with multiple single-axis scrollers · Issue #14018 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/14018) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `scroll-snap` on [wpt.fyi](https://wpt.fyi/results?q=feature:scroll-snap) (via webstatus.dev) — stable: Chrome 90.4% · Edge 88.8% · Firefox 83.7% · Safari 70.2%; experimental: Chrome 97.2% · Edge 94.9% · Firefox 83.7% · Safari 76.4%

#### 🌐 Web-features Group Context

*group-level data: web-features [`scroll-snap`](https://webstatus.dev/features/scroll-snap), shared with 4 other ChromeStatus features*

- **Chrome usage:** 0.21% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/59))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (54 found across 12 planned queries, 5 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 3 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "scroll-snap", shared with 4 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "scroll-snap": Chrome 90.4% passing (stable))* · `Sources cited by the AI synthesis` (3 found, 2 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 2

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

- **Momentum:** **Quiet** (0 points since 2026-10-12; footprint 225 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""position-visibility: anchor-valid" webkit"`, `""position-visibility" "anchor-valid" css anchor positioning"`, `""position-visibility: anchor-valid" mozilla standards positions"`
- **Analysis:** Following specification clarification in the CSS Anchor Positioning Module Level 1 to evaluate only the default anchor, \`position-visibility: anchor-valid\` resolves prior implementation ambiguities and supersedes the deprecated plural \`anchors-valid\` syntax. The feature is enabled by default in Chromium and Edge 157, aligning with existing WebKit support to resolve a major blocker for conditional anchor positioning. With Mozilla displaying positive signals on standardization, the feature is positioned on a steady track toward full cross-browser baseline interop.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt the modern singular \`position-visibility: anchor-valid\` keyword under progressive enhancement using \`@supports (position-visibility: anchor-valid)\` queries rather than relying on legacy plural aliases. Ensure secondary fallback strategies remain in place for Firefox users until stable Gecko builds incorporate the feature.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Suggest positive...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **Mozilla:** [\`position-visibility: anchor-valid\`](https://github.com/mozilla/standards-positions/issues/1457) [open] `topic: CSS`
  > *Latest discussion from @emilio: "Suggest positive...."*

#### 📰 Ecosystem Blogs & Articles

- [position-visibility \| CSS-Tricks](https://css-tricks.com/almanac/properties/p/position-visibility) *(css-tricks.com)*
  > The \`position-visibility\` property in the CSS Anchor Positioning Module Level 1 provides controls for conditional visibility, automatically hiding anchored elements (like tooltips, popovers, and menus) when their positio...
- [webkit.org](https://webkit.org/blog/18325/webkit-features-for-safari-27-0) *(webkit.org)*
  > It was designed to strongly hide an element if any anchor references (such as those in \`anchor()\` or \`anchor-size()\` functions) failed to resolve However, this led to spec ambiguity over what constituted "required" ancho...
- [github.io](https://web-platform-dx.github.io/web-features-explorer/features/anchor-positioning-position-visibility-plurals) *(web-platform-dx.github.io)*
  > The plural forms (\`anchors-valid\`, \`anchors-visible\`) remain supported as deprecated aliases in browsers for backwards compatibility The documentation explains the single-value and multi-keyword combinatorial syntax, exp...
- [caniuse.com](https://caniuse.com/?search=anchor-visible) *(caniuse.com)*
  > The plural forms (\`anchors-valid\`, \`anchors-visible\`) remain supported as deprecated aliases in browsers for backwards compatibility Ecosystem discussions pushed the plural forms to a separate "discouraged/legacy" catego...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > The plural forms (\`anchors-valid\`, \`anchors-visible\`) remain supported as deprecated aliases in browsers for backwards compatibility It documents the resolution of spec ambiguities and explicitly lists the deprecation of...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > \*\*Chrome Platform Status entry (\*CSS position-visibility:anchor{s}-valid\*)\*\*: Tracks the feature landing in Chrome (shipped in Chrome 157 alongside Microsoft Edge 157) \*\*Microsoft Edge 157 Release Notes\*\*: Explicitly cal...

#### 📚 Platform Documentation & References

- [position-visibility CSS property - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-visibility) *(developer.mozilla.org)*
- [github.com](https://github.com/web-platform-dx/web-features/issues/3558?timeline_page=1) *(github.com)*
- [github.com](https://github.com/web-platform-dx/web-features/issues/3558) *(github.com)*
- [\`position-visibility: anchor-valid\` · Issue #1457 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1457) *(github.com)*
- [Document position-visibility: anchors-valid · Issue #43120 · mdn/content · GitHub](https://github.com/mdn/content/issues/43120) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `anchor-positioning` on [wpt.fyi](https://wpt.fyi/results?q=feature:anchor-positioning) (via webstatus.dev) — stable: Chrome 95.6% · Edge 95.4% · Firefox 83.3% · Safari 93.4%; experimental: Chrome 95.8% · Edge 95.4% · Firefox 85.6% · Safari 94%

#### 🌐 Web-features Group Context

*group-level data: web-features [`anchor-positioning`](https://webstatus.dev/features/anchor-positioning), shared with 8 other ChromeStatus features*

- **Chrome usage:** 0.078% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/97))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/794))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/167))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (56 found across 11 planned queries, 12 verified) · `Google Search Grounding (gemini-3.8-flash)` (16 found, 10 verified) · `Twitter / X API v2` *(found 1 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (8 found, 0 verified) · `web-features mapping` *(group "anchor-positioning", shared with 8 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "anchor-positioning": Chrome 95.6% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 3 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 1

---

<a id="4779920606756864-support-targetaddressspace-option-for-websockets"></a>
### [Support targetAddressSpace option for WebSockets](https://chromestatus.com/feature/4779920606756864)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/4779920606756864](https://chromestatus.com/feature/4779920606756864) · [chromestatuslite.com/feature/4779920606756864](https://chromestatuslite.com/feature/4779920606756864)
- **Specification:** [https://github.com/WICG/local-network-access/pull/125](https://github.com/WICG/local-network-access/pull/125)
- **Chromium Bug:** [https://crbug.com/517413738](https://crbug.com/517413738)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `No signal` · Safari: `No signal`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/local-network-access) (Chrome: `145`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`local-network-access`](https://webstatus.dev/features/local-network-access), shared with 7 other ChromeStatus features*

#### 📝 Overview

Add support for passing a targetAddressSpace option in the WebSocket constructor. This allows developers to specify that a WebSocket connection to a public hostname should be treated as going to a "local" or "loopback" destination, matching the existing support on the Fetch API. The main use case is to offer an escape hatch to bypass mixed content restrictions for connecting to local servers that cannot yet support HTTPS (as Local Network Access permissions require a secure context).  Example: A public site that connects to a local server can use a hostname to avoid needing manual configuration of the exact private IP address in use:  \`const ws = new WebSocket("ws://local-server.example", { targetAddressSpace: "local"}\`  This will flag the WebSocket connection as going to a local address, bypassing mixed content blocking when run in a secure context. The user must grant the site the local network permission for the WebSocket connection to succeed, and the hostname must resolve to a local IP address (otherwise it will be blocked).  This builds on https://chromestatus.com/feature/5080055102439424 which adds an options bag to the WebSocket constructor.

> **Motivation:** To avoid mixed content blocking for local network WebSockets requests, web developers have relied on having their users manually configure their local network IP addresses, which is awkward at best. Adding support for the targetAddressSpace option in WebSockets aligns it with the Fetch API. This has also been requested by developers (e.g., https://...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Quiet** (0 points since 2026-10-12; footprint 180 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Shipping enabled by default in Chrome 154, the targetAddressSpace option allows the WebSocket constructor to designate connections to public hostnames as targeting local or loopback address spaces. This bridges a critical parity gap with the Fetch API under the Local Network Access (LNA) specification, providing a standard escape hatch to bypass mixed-content blocks when connecting to non-HTTPS local network servers. However, while the foundational WebSocket options bag enjoys broad multi-engine support, full LNA permission enforcement and address space flagging remain Chrome-specific.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams connecting to local appliances or loopback WebSocket services from secure public contexts should adopt the constructor dictionary progressively with feature detection or try-catch fallbacks for non-Chromium browsers. For environments where users run Chromium 154+, migrate away from raw IP address inputs and declare targetAddressSpace alongside explicit LNA permission handling.
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

- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, ...
- [Chrome 154  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > Adds support for passing a ... targetAddressSpace: &quot;local&quot; })). &lt;strong&gt;This lets you specify that a WebSocket connection to a public hostname should be treated as going to a &quot;local&quot; or &quot;loopback...
- [Chrome 154 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com · 2026-09-02T00:00:00)*
  > &lt;strong&gt;Adds support for passing a targetAddressSpace option in the WebSocket constructor&lt;/strong&gt;. This lets you specify that a WebSocket connection to a public hostname should be treated as going to a &quot;local&quot;...
- [\[blink-dev\] Intent to Ship: Local network access restrictions for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg15891.html) *(mail-archive.com)*
  > Compatibility risks: There are some local network requests types that we cannot know ahead of time will be going to the local network (eg, a subresource request to http://test.example which then resolves to 192.168.0.1)....
- [Re: \[blink-dev\] Intent to Ship: Local network access restrictions for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg15902.html) *(mail-archive.com)*
  > Compatibility risks: There are some local network requests types that we cannot know ahead of time will be going to the local network (e.g., a subresource request to http://test.example which then resolves to 192.168.0.1...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY) *(groups.google.com)*
  > For fetch() calls, we have the \`targetAddressSpace\` option for &lt;strong&gt;pre-specifying that requests like this are to the local network&lt;/strong&gt;, and thus we can exempt them from mixed content blocking.

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/pull/125`)*
  > \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, ...

#### 📚 Platform Documentation & References

- [Use case for WebSocket communications · Issue #16 · WICG/local-network-access · GitHub](https://github.com/WICG/local-network-access/issues/16) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/154.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/154.md) *(github.com)*
- [local-network-access: WebSocket constructor rejects targetAddressSpace and test flag misses IPv6 localhost · Issue #1651 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1651) *(github.com)*
- [fix(local-network-access): update WebSocket LNA guidance and IPv6 localhost flag (#1651) by rowan-m · Pull Request #1727 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/pull/1727) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (50 found across 12 planned queries, 14 verified) · `Google Search Grounding (gemini-3.8-flash)` (12 found, 1 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "local-network-access", shared with 7 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "local-network-access": no stable pass rate for Chrome yet)*
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

---

<a id="5172464636133376-support-for-webhid"></a>
### [Support for WebHID](https://chromestatus.com/feature/5172464636133376)

- **Milestone:** Chrome 158 (Enabled by default) · first listed in Chrome 154
- **ChromeStatus:** [chromestatus.com/feature/5172464636133376](https://chromestatus.com/feature/5172464636133376) · [chromestatuslite.com/feature/5172464636133376](https://chromestatuslite.com/feature/5172464636133376)
- **Specification:** [https://hid.spec.whatwg.org](https://hid.spec.whatwg.org)
- **Chromium Bug:** [http://crbug.com/40628009](http://crbug.com/40628009)
- **Browser Signals:** Chrome: `Enabled by default` · Firefox: `Negative` · Safari: `Oppose`
- **Baseline Interoperability:** [Limited Availability](https://webstatus.dev/features/webhid) (Chrome: `89`, Firefox: `—`, Safari: `—`) · *group-level data: web-features [`webhid`](https://webstatus.dev/features/webhid), shared with 5 other ChromeStatus features*

#### 📝 Overview

The WebHID API enables web applications to interact with Human Interface Devices (HIDs) over USB and Bluetooth beyond standard system input mappings (such as mice, keyboards, touchscreens, and standard gamepads). Web applications can request user permission to connect to HID devices, send and receive input, output, and feature reports, and inspect report descriptors.  WebHID shipped on desktop platforms (Windows, macOS, Linux, and ChromeOS) in Chrome 89. This launch brings the existing WebHID API to Chrome on Android in Chrome 158 (relying on new OS support in Android 17 / API level 37 and later) with no changes to the web-exposed API surface.  Popular uses today include customizing mechanical keyboards, keypads, and gaming mice, calibrating gamepads, and integrating hardware headset call controls in call centers.   WebView is not supported, as it does not have a device chooser UI or permissions UX affordances.  This feature can be controlled by the following enterprise policies:  \* \[DefaultWebHidGuardSetting\](https://chromeenterprise.google/policies/#DefaultWebHidGuardSetting) \* \[WebHidAllowAllDevicesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowAllDevicesForUrls) \* \[WebHidAllowDevicesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowDevicesForUrls) \* \[WebHidAllowDevicesWithHidUsagesForUrls\](https://chromeenterprise.google/policies/#WebHidAllowDevicesWithHidUsagesForUrls) \* \[WebHidAskForUrls\](https://chromeenterprise.google/policies/#WebHidAskForUrls) \* \[WebHidBlockedForUrls\](https://chromeenterprise.google/policies/#WebHidBlockedForUrls)

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Quiet** (-10 points since 2026-10-12; footprint 525 points)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"WebHID mozilla standards position webkit standards position"`, `""WebHID" android chromestatus"`, `""WebHID" "Android 17" OR "Chrome 158" OR "Android""`
- **Analysis:** WebHID provides low-level communication with Human Interface Devices over USB and Bluetooth, but it remains a Chromium-exclusive capability with Limited Availability on the web platform. While it has been supported on desktop platforms since Chrome 89, its extension to Chrome on Android in Chrome 158 leverages newly introduced Android 17 platform APIs to bring parity to mobile. However, both Mozilla and WebKit strongly oppose the specification due to severe security, device fingerprinting, and hardware attack surface concerns.

**Key Recommendations & Takeaways:**
- Actionable Advice: Treat WebHID strictly as a progressive enhancement or target it within controlled, Chromium-only enterprise and utility environments such as kiosk setups or dedicated web-based hardware configurators. Always gate calls behind feature detection for \`navigator.hid\`, and provide alternative desktop native apps or companion binaries for users on Safari, Firefox, or unsupported Android versions.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "Dropping venue concern, as it's moved to the WHATWG. We can figure out the details there going forward...."
- Standards Activity (Mozilla): Latest discussion from @scheib: "I'd like to address dmitriid@'s and beaufortfrancois@ comments with a personal opinion.  I work on Chrome adding these capabilities.  We do strive to ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "mr.niko.la on X: "Can we get #webhid out already ? @mozilla @chrome #webusb #gamepad #gamepadapi #python #javascript #wasm #webassembly #browser #webbluetooth #edgeapplication #edgecomputing" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 🔄 **Status Change:** Moved from *In developer trial (Behind a flag)* to *Enabled by default*
- 📰 **19 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

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

- [chrome.com](https://developer.chrome.com/docs/capabilities/web-apis/hid-examples) *(developer.chrome.com)*
  > The \*\*WebHID API\*\* bridges the gap between web applications and Human Interface Devices (HIDs) connected via USB or Bluetooth Rather than relying strictly on standard system-level OS input mappings (which limit interacti...
- [openpwa.net](https://openpwa.net/reference/capabilities/web-hid) *(openpwa.net)*
  > The \*\*WebHID API\*\* bridges the gap between web applications and Human Interface Devices (HIDs) connected via USB or Bluetooth \*\*Platform Availability:\*\* WebHID originally shipped for desktop platforms (Windows, macOS, Li...
- [Connect to uncommon HID devices  \|  Capabilities  \|  Chrome for Developers](https://developer.chrome.com/docs/capabilities/hid) *(developer.chrome.com)*
  > Rather than relying strictly on standard system-level OS input mappings (which limit interaction to default keyboard, mouse, or touch events), WebHID allows developers to send and receive raw input, output, and feature r...
- [chromestatus.com](https://chromestatus.com/feature/6220740243357696) *(chromestatus.com)*
  > Support extends to Chrome on Android starting in Chrome 158 (requiring Android 17 / API level 37+) with the exact same web-exposed API surface
- [chromestatus.com](https://chromestatus.com/feature/6305751386554368) *(chromestatus.com)*
  > \*\*Performance & Context Updates:\*\* Recent updates have expanded WebHID beyond the main thread: Chrome 117 enabled WebHID in Manifest V3 Extension Service Workers \*\*Key Insights:\*\* Manifest V3 extensions require backgroun...
- [web.dev](https://web.dev/blog/web-platform-11-2024) *(web.dev)*
  > hid\`), enabling off-main-thread I/O processing for high-frequency hardware data Furthermore, Chrome 131 introduced WebHID within Dedicated Worker contexts, preventing latency-sensitive data streams (e.g., high polling-ra...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T00:00:00)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Intent to Prototype: WebHID on Android Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: WebHID on An...
- [Intent to Ship: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/rL1csFYD1Ms/m/my-groups) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Intent to Ship: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: WebHID (...
- [\[blink-dev\] Intent to Ship: Support for WebHID](http://www.mail-archive.com/blink-dev@chromium.org/msg17902.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/hid/blob/main/EXPLAINER.md`)*
  > \[blink-dev\] Intent to Ship: Support for WebHID Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Support for WebHID Chromestatus Thu, 29 Oct 2026 20:06:06 -0700 Contact emails \[email&#160;protected\] , \[em...
- [Re: \[blink-dev\] Intent to Ship: Support for WebHID](http://www.mail-archive.com/blink-dev@chromium.org/msg17903.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/hid/blob/main/EXPLAINER.md`)*
  > Re: \[blink-dev\] Intent to Ship: Support for WebHID Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Support for WebHID Mike Taylor Fri, 30 Oct 2026 06:37:16 -0700 If you're just extending WebHID to A...
- [GitHub - whatwg/hid: Web API for accessing Human Interface Devices (HID) · GitHub](https://github.com/whatwg/hid) *(github.com)* *(Cites: `https://hid.spec.whatwg.org`)*
  > GitHub - whatwg/hid: Web API for accessing Human Interface Devices (HID) · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to r...

#### 📚 Platform Documentation & References

- [WebHID API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API) *(developer.mozilla.org)*
- [github.com](https://github.com/K4zoku/FF-WebHID) *(github.com)*
- [GitHub - whatwg/hid: Web API for accessing Human Interface Devices (HID) · GitHub](https://github.com/whatwg/hid) *(github.com)*
- [Add hid · Issue #2647 · w3c/browser-specs · GitHub](https://github.com/w3c/browser-specs/issues/2647) *(github.com)*
- [Convert to Bikeshed + set up deploy · Issue #134 · whatwg/hid · GitHub](https://github.com/whatwg/hid/issues/134) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `webhid` on [wpt.fyi](https://wpt.fyi/results?q=feature:webhid) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 16.7% · Safari 16.7%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 16.7% · Safari 16.7%

#### 🌐 Web-features Group Context

*group-level data: web-features [`webhid`](https://webstatus.dev/features/webhid), shared with 5 other ChromeStatus features*

- **Chrome usage:** 0.000019% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/77))
- **Mozilla:** negative ([standards position](https://github.com/mozilla/standards-positions/issues/459))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (65 found across 12 planned queries, 34 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 13 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (2 found, 1 verified) · `Dev.to Community Blogs` (3 found, 0 verified) · `Hacker News Algolia` (6 found, 0 verified) · `Standards Positions` (3 found, 3 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 3 verified) · `web-features mapping` *(group "webhid", shared with 5 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "webhid": Chrome 66.7% passing (stable))* · `Sources cited by the AI synthesis` (4 found, 1 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 12

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

- **Momentum:** **Quiet** (-10 points since 2026-10-12; footprint 190 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Analysis:** Connection Allowlists: Embedded Enforcement extends the core outbound egress firewall mechanism to nested iframes and workers by mirroring the CSP Embedded Enforcement model. Driven collaboratively by Microsoft Edge and Google engineers, the feature addresses data exfiltration risks from embedded third-party scripts and generative AI sandboxes, currently running as an Origin Trial in Chromium 157. While core Connection Allowlists shipped earlier in Chromium, cross-browser consensus for embedded enforcement remains incomplete across the broader ecosystem.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web security teams should experiment with the Origin Trial in Chromium-based browsers to test how iframe network policies interact with nested content, but avoid hard dependencies in production. Maintain server-side isolation and standard Content Security Policy directives as fallbacks since embedded enforcement cannot be polyfilled.
- In active Origin Trial in Chrome 157. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @mikewest: "A brief update on timing: we're now planning an initial Origin Trial starting in Chrome 147 (https://groups.google.com/a/chromium.org/g/blink-dev/c/lR..."
- Standards Activity (Mozilla): Latest discussion from @evilpie: "Suggested position: positive  #1431..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Connection Allowlists](https://github.com/WebKit/standards-positions/issues/583) [open] 
  > *Latest discussion from @mikewest: "A brief update on timing: we're now planning an initial Origin Trial starting in Chrome 147 (https://groups.google.com/a/chromium.org/g/blink-dev/c/lR..."*
- **Mozilla:** [Connection Allowlists](https://github.com/mozilla/standards-positions/issues/1322) [closed] `position: positive`, `topic: HTTP`, `team: Networking`, `team: Security`
  > *Latest discussion from @evilpie: "Suggested position: positive  #1431..."*

#### 📰 Ecosystem Blogs & Articles

- [Connection allowlists: Secure your web application's network access  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/connection-allowlist-announcement) *(developer.chrome.com)*
  > Recent developer articles, platform announcements, and community discussions reveal significant momentum around \*\*Connection Allowlists\*\* and the \*\*Embedded Enforcement\*\* extension \*\*Problem Solved:\*\* While the base \`Con...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > While the core Connection Allowlists feature shipped in Chromium 152, \*\*Embedded Enforcement\*\* progressed into an Origin Trial (Chrome 157 and Microsoft Edge 157)
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > While the core Connection Allowlists feature shipped in Chromium 152, \*\*Embedded Enforcement\*\* progressed into an Origin Trial (Chrome 157 and Microsoft Edge 157) \*\*Microsoft Collaboration:\*\* Microsoft Edge engineers act...
- [chrome.com](https://developer.chrome.com/blog/connection-allowlists-origin-trial) *(developer.chrome.com)*
  > \*\*Problem Solved:\*\* While the base \`Connection-Allowlist\` HTTP response header creates an egress firewall for a top-level document or worker, parent documents embedding untrusted content (like third-party widgets, genera...
- [trade-assistance.com](https://trade-assistance.com/blog/connection-allowlists-chrome-152-network-firewall) *(trade-assistance.com)*
  > \*\*How Embedded Enforcement Works:\*\* Modeled on CSP Embedded Enforcement (CSPEE) \*\*Embedder Declaration:\*\* An embedder specifies an allowlist using the \`connectionAllowlist\` attribute on the iframe
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/security/restrict-outbound-connections) *(developer.chrome.com)*
  > A technical guide explaining syntax, URLPattern matching, and fallbacks It specifically addresses embedded enforcement: advising developers that while base allowlists are available, \`&lt;iframe connectionAllowlist="..."&gt;\` a...

#### 🔗 Inbound Citations & Reverse Links

- [Connection Allowlists – Embedded Enforcement · Issue #44 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/44) *(github.com · 2026-10-12T08:23:19)* *(Cites: `https://chromestatus.com/feature/5657801797009408`)*
  > Connection Allowlists – Embedded Enforcement · Issue #44 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or w...
- [GitHub - WICG/connection-allowlists · GitHub](https://github.com/WICG/connection-allowlists) *(github.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > GitHub - w3c/connection-allowlists · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signed out in...

#### 📚 Platform Documentation & References

- [Connection Allowlists · Issue #1424 · web-platform-tests/interop · GitHub](https://github.com/web-platform-tests/interop/issues/1424) *(github.com)*
- [Connection Allowlists – Embedded Enforcement · Issue #44 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/44) *(github.com)*
- [GitHub - WICG/connection-allowlists · GitHub](https://github.com/WICG/connection-allowlists) *(github.com)*
- [GitHub - w3c/connection-allowlists · GitHub](https://github.com/w3c/connection-allowlists) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (41 found across 12 planned queries, 11 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 8 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (1 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)*
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

- **Momentum:** **Quiet** (-10 points since 2026-10-12; footprint 150 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"site github com WebKit standards positions navigation source"`, `"css navigation source pseudo class"`, `"site github com mozilla standards positions navigation source"`, `"navigation source pseudo class view transitions"`
- **Analysis:** The \`:navigation-source\` pseudo-class targets whichever interactive element initiated an outgoing navigation and keeps it matched for the entire duration of the request. Shipped by default in Chromium 156, its primary driver is enabling fully declarative View Transitions without cumbersome JavaScript listeners, alongside providing instant in-flight loading feedback. However, the feature is currently a single-engine reality that is not yet tracked in Baseline, as formal positions in Gecko and WebKit remain open.

**Key Recommendations & Takeaways:**
- Actionable Advice: Use \`:navigation-source\` strictly as a progressive enhancement by guarding rules with \`@supports selector(:navigation-source)\` for in-flight UI state cues or opportunistic view transition names. Production applications relying on deterministic cross-document view transitions across all major browsers must continue using JavaScript-based activation handlers until cross-engine support expands.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @noamr: "&gt; \[@noamr\](https://github.com/noamr) I guess the main use case is view-transitions, right? Doesn't seem particularly complicated I suppose  Right, but..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **2 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [CSS :navigation-source pseudo-class](https://github.com/WebKit/standards-positions/issues/715) [open] `topic: css`, `venue: W3C CSS WG`, `from: Google`
- **Mozilla:** [CSS \`:navigation-source\` pseudo-class](https://github.com/mozilla/standards-positions/issues/1447) [open] `topic: CSS`
  > *Latest discussion from @noamr: "&gt; \[@noamr\](https://github.com/noamr) I guess the main use case is view-transitions, right? Doesn't seem particularly complicated I suppose  Right, but..."*

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > It matches whichever element initiated an outgoing navigation—such as an \`&lt;a&gt;\` link, a \`&lt;form&gt;\`, or a submit \`&lt;button&gt;\`—and \*\*remains matched for the entire duration of the navigation process\*\* \*\*Milestone:\*\* The pseudo-...
- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/6327898878377984?gate=6247925882683392) *(img968-dot-cr-status.appspot.com)*
  > \*\*Primary Motivation:\*\* Declarative \*\*View Transitions\*\*
- [bram.us](https://www.bram.us/2026/07/30/styling-the-navigation-declarative-route-and-navigation-matching-in-css) *(bram.us)*
  > Previously, to animate an element from an index page to a detail page (e.g., expanding a clicked thumbnail), developers had to use JavaScript (\`pageswap\` / \`pagereveal\` listeners) to identify the clicked element and atta...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com)*
  > CSS-Tricks followed up via its \*Bytes\* news stream noting Chrome and Edge's implementation rollout \*\*Milestone:\*\* The pseudo-class shipped enabled by default starting in \*\*Chromium 156\*\* (Chrome and Edge)
- [note.com](https://note.com/2gnote/n/nc829e6e8bf8f) *(note.com)*
  > \*\*Solving the "Double-Click" UX Pitfall:\*\* Commentators in developer blogs have noted a pragmatic, non-animation use case: UX feedback On slower mobile connections, users often tap a link multiple times because there is ...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17393.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Rick Byers Tue, 08 Sep 2...

#### 🔗 Inbound Citations & Reverse Links

- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17393.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6327898878377984`)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Rick Byers Tue, 08 Sep 2...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17395.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Philip Jägenstedt Wed, 0...
- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element Chromestatus Thu, 03 Sep 2026 02...
- [Other Spec Review: CSS navigation-based styling · Issue #1253 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1253) *(github.com · 2026-08-04T13:36:50)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > https://&lt;strong&gt;drafts.csswg.org/css-navigation-1&lt;/strong&gt; · https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md ·
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1447) *(github.com · 2026-08-25T08:30:57)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Re...

#### 📚 Platform Documentation & References

- [\[css-navigation-1\] Add pseudo-class selector to target the element that initiated the outgoing navigation · Issue #11801 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/11801) *(github.com)*
- [Other Spec Review: CSS navigation-based styling · Issue #1253 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1253) *(github.com)*
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1447) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 12 planned queries, 7 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 6 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (3 found, 0 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 2

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

- **Momentum:** **Quiet** (-10 points since 2026-10-12; footprint 115 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** Shipping enabled by default in Chromium and Microsoft Edge 154, this update resolves a long-standing WHATWG Fetch specification compliance gap by forwarding developer-supplied abort reasons directly to Response body methods and underlying ReadableStreams. Firefox has supported this standard behavior for several releases, making Chromium's catch-up an important step toward consistent cross-engine stream termination. The broader ecosystem views this as an overdue bug fix that solidifies error propagation across streaming pipelines.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can immediately leverage custom abort reasons in modern Chromium and Firefox environments, but should retain defensive error-handling fallbacks (such as inspecting the AbortSignal reason directly) until Safari ships the corresponding fix.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Fetch API: Forward abort reason to Response](https://github.com/WebKit/standards-positions/issues/711) [closed] `invalid`
  > *Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."*

#### 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > \*\*The Fix:\*\* The \*\*"Forward reason from AbortController to fetch Response"\*\* feature aligns browsers with the WHATWG Fetch specification When a developer aborts an in-flight body read, the provided abort reason is forwar...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > Chrome documented this update as filling a key compliance gap with the WHATWG Fetch specification It highlights that the developer-supplied abort reason is now exposed consistently across both the initial fetch promise a...
- [google.com](https://groups.google.com/a/chromium.org/d/msgid/blink-dev/6a73a11f.c91ea2f1.3ad85a.0300.GAE%40google.com) *(groups.google.com)*
  > The Intent to Ship highlighted that Firefox had already implemented this behavior properly, while Chromium and Safari lagged behind The feature specifically bridges this gap without needing additional spec modifications
- [polypane.app](https://polypane.app/experimental-web-platform-features) *(polypane.app)*
  > Feature tracker highlighted \`ForwardReasonToFetchBodyAbort\`, noting its practical benefit for modern streaming architectures (e.g., Server-Sent Events, streaming AI chat completions, and large file downloads)
- [\[blink-dev\] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17184.html) *(mail-archive.com)*
  > &gt; &gt; Thanks, &gt; Dan &gt; &gt; On Wednesday, ...romestatus.com/feature/5631483679080448 &lt;strong&gt;When calling abort, &gt;&gt; you can optionally pass in an &quot;abort reason&quot;, and the original fetch &gt;&gt; p...
- [\[blink-dev\] Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17127.html) *(mail-archive.com)*
  > Specification https://fetch.sp... https://chromestatus.com/feature/5631483679080448 &lt;strong&gt;When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t res...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/WebKit/standards-positions/issues/711) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `abortable-fetch` on [wpt.fyi](https://wpt.fyi/results?q=feature:abortable-fetch) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 66.7%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 66.7% · Safari 66.7%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (71 found across 12 planned queries, 6 verified) · `Google Search Grounding (gemini-3.8-flash)` (9 found, 5 verified) · `Twitter / X API v2` *(found 10 tweet(s))* · `Tweets found by web search` (3 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "abortable-fetch", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "abortable-fetch": Chrome 66.7% passing (stable))*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 3

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

- **Momentum:** **Quiet** (-10 points since 2026-10-12; footprint 110 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""ProgressEvent" "service worker" blink-dev"`, `""Expose ProgressEvent in service workers""`, `""ProgressEventInServiceWorker""`
- **Analysis:** Chrome 157 resolves a longstanding Blink specification gap by exposing the ProgressEvent constructor in service worker scopes, aligning Chromium with the WHATWG XMLHttpRequest standard. While the interface was already available across Window and other worker contexts in Blink, its exclusion from service workers previously hindered cross-context code sharing. Because competing engines already adhered to the standard, this change finalizes full cross-engine interoperability without modifying network primitives or fetch behaviors.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building worker-based telemetry or custom task-progress pipelines can now standardize on the native ProgressEvent constructor across all modern browsers. If legacy Chromium runtimes must be supported, verify availability via standard feature detection ('ProgressEvent' in self) and fall back to CustomEvent where necessary.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Leopeva64 on X: "In the tweet I say "once again" because FOUR YEARS AGO the same engineer had already uploaded another patch to Chromium Gerrit that also intended to implement this feature in Chrome, but that patch was abandoned two weeks after it was uploaded 👇 https://t.co/LZw4OFNLS8 . https://t.co/e7VO5IIeFj" / X" (0 points, 0 comments).

#### ⚡ What Happened This Week

- 💬 **1 new community discussions** found

#### 💬 Community Discussions & Developer Reactions

- 🐦 [Leopeva64 on X: "In the tweet I say "once again" because FOUR YEARS AGO the same engineer had already uploaded another patch to Chromium Gerrit that also intended to implement this feature in Chrome, but that patch was abandoned two weeks after it was uploaded 👇 https://t.co/LZw4OFNLS8 . https://t.co/e7VO5IIeFj" / X](https://x.com/Leopeva64/status/1921807794652508281) — *Twitter / X by @Leopeva64 (0 likes/RTs, 0 replies)*

#### 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/feature/5069584943153152/activity) *(cr-status.appspot.com)*
  > However, while engines like Gecko (Firefox) and WebKit (Safari) adhered to this, Chromium's Blink engine previously omitted \`ProgressEvent\` from service worker contexts \*\*Source:\*\* \[MDN Web Docs: \`ProgressEvent\`\](https:/...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > \*\*The Resolution:\*\* Chromium addressed this discrepancy under the runtime feature flag \`ProgressEventInServiceWorker\` (Chromium Bug #332663431), officially landing in \*\*Chrome 157\*\* \*\*Source:\*\* \[Chrome Platform Status — ...
- [\[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17546.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers Chromestatus Thu, 24 Sep 2026 05:51:...
- [\[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17669.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Alex Russell Wed, 07 Oct 2026 08:22:47...
- [Re: \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17671.html) *(mail-archive.com)*
  > Please list open issues (e.g. links to known github issues &gt;&gt;&gt; in the project for the feature specification) whose resolution may &gt;&gt;&gt; introduce web compat/interop risk (e.g., changing to naming or struc...
- [\[blink-dev\] Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17635.html) *(mail-archive.com)*
  > Please list open issues (eg links ... of the API in a non-backward-compatible way). None anticipated for this change. &lt;strong&gt;The XMLHttpRequest Standard already exposes ProgressEvent to Window and Worker&lt;/strong&gt;. This ...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17546.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > \[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Expose ProgressEvent in service workers Chromestatus Thu, 24 Sep 2026 05:51:...
- [\[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17669.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Expose ProgressEvent in service workers Alex Russell Wed, 07 Oct 2026 08:22:47...
- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com · 2026-09-24T13:38:21)* *(Cites: `https://chromestatus.com/feature/5069584943153152`)*
  > Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or...

#### 📚 Platform Documentation & References

- [Expose ProgressEvent in service workers · Issue #1511 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1511) *(github.com)*
- [\[Blink\] Expose ProgressEvent in service workers by chromium-wpt-export-bot · Pull Request #63586 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/pull/63586) *(github.com)*
- [\[332663431\] ProgressEvent should expose to Service Worker · Issue #485 · OSSCA-chromium/contributions · GitHub](https://github.com/OSSCA-chromium/contributions/issues/485) *(github.com)*
- [Expose ProgressEvent to ServiceWorker · Issue #305 · whatwg/xhr · GitHub](https://github.com/whatwg/xhr/issues/305) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `xhr` on [wpt.fyi](https://wpt.fyi/results?q=feature:xhr) (via webstatus.dev) — stable: Chrome 95.4% · Edge 95.4% · Firefox 97% · Safari 95.9%; experimental: Chrome 95.7% · Edge 95.7% · Firefox 97% · Safari 97%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (61 found across 11 planned queries, 10 verified) · `Google Search Grounding (gemini-3.8-flash)` (13 found, 2 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (3 found, 1 verified) · `Dev.to Community Blogs` (1 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(widely)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "xhr", shared with 6 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "xhr": Chrome 95.4% passing (stable))* · `Sources cited by the AI synthesis` (1 found, 1 verified)
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

- **Momentum:** **Quiet** (-20 points since 2026-10-12; footprint 310 points)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"ServiceWorkerAutoPreload w3c ServiceWorker"`, `"ServiceWorkerAutoPreload"`, `"ServiceWorkerAutoPreload chrome status"`
- **Analysis:** ServiceWorkerAutoPreload is a browser-level optimization designed to eliminate the latency penalty of cold service worker startups by dispatching navigation network requests concurrently with worker bootstrap. Rather than requiring manual invocation like the Navigation Preload API, this behavior is applied automatically by the engine and was formally standardized in the W3C Service Worker specification. Ecosystem consensus is solid across major browser vendors, with Chromium transitioning the feature into general availability through a stepped rollout culminating in Chrome 154.

**Key Recommendations & Takeaways:**
- Actionable Advice: Because ServiceWorkerAutoPreload operates transparently at the engine level without exposing new JavaScript syntax, developers do not need to write polyfills or alter their client code. Teams should audit navigation fetch handlers to ensure fallback flows are clean and consider pairing this optimization with the Service Worker Static Routing API for deterministic bypass of unneeded worker starts.
- Standards Activity (WebKit): Latest discussion from @sisidovski: "&gt; How does this avoid potential problems with the main document and service worker having different policies in place? E.g., you might end up preloadi..."
- Standards Activity (Mozilla): Latest discussion from @asutherland: "This is somewhat moot since https://github.com/w3c/ServiceWorker/pull/1756 merged into the spec in late July with feedback from webkit in addition to ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **10 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [ServiceWorkerAutoPreload](https://github.com/WebKit/standards-positions/issues/359) [open] `topic: service workers`
  > *Latest discussion from @sisidovski: "&gt; How does this avoid potential problems with the main document and service worker having different policies in place? E.g., you might end up preloadi..."*
- **Mozilla:** [ServiceWorkerAutoPreload](https://github.com/mozilla/standards-positions/issues/1036) [closed] `position: positive`, `team: DOM`
  > *Latest discussion from @asutherland: "This is somewhat moot since https://github.com/w3c/ServiceWorker/pull/1756 merged into the spec in late July with feedback from webkit in addition to ..."*

#### 📰 Ecosystem Blogs & Articles

- [progressivewebapps.com](https://progressivewebapps.com/service-workers/navigation-preload) *(progressivewebapps.com)*
  > \*\*ServiceWorkerAutoPreload\*\* is an optional browser-level optimization introduced in Chromium-based browsers (including Chrome 154) to eliminate the performance tax of Service Worker startup delays When a navigation requ...
- [ServiceWorkerAutoPreloadEnabled: Allow ServiceWorker to dispatch navigation requests without waiting for its startup \| Chrome Enterprise](https://chromeenterprise.google/policies/service-worker-auto-preload-enabled) *(chromeenterprise.google)*
  > \*\*Enterprise Control\*\*: Systems administrators can temporarily toggle this optimization using the \`ServiceWorkerAutoPreloadEnabled\` enterprise policy \*\*What it covers:\*\* Official documentation of the \`ServiceWorkerAutoPr...
- [chrome.com](https://developer.chrome.com/release-notes/154) *(developer.chrome.com)*
  > \*\*What it covers:\*\* Official documentation of the \`ServiceWorkerAutoPreload\` feature rollout and its administrative policy
- [Intent to Experiment: ServiceWorkerAutoPreload](https://groups.google.com/a/chromium.org/g/blink-dev/c/AkA4s1_R8H4) *(groups.google.com)*
  > Intent to Experiment: ServiceWorkerAutoPreload Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Ser...
- [Intent to Prototype: ServiceWorkerAutoPreload](https://groups.google.com/a/chromium.org/g/blink-dev/c/vp83zL5uomg/m/s0LJk8RgBAAJ) *(groups.google.com)*
  > Intent to Prototype: ServiceWorkerAutoPreload Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Servi...
- [ServiceWorkerAutoPreloadEnabled - Instinctive library of Chrome settings](https://instinctive.app/chromesettings/serviceworkerautopreloadenabled) *(instinctive.app)*
  > ServiceWorkerAutoPreloadEnabled - Instinctive library of Chrome settings Instinctive Features & Pricing Item 1 Item 2 --&gt; Chromebook Checkout NEW: LOGIN SECURITY Inventory Chromebooks automatically, keep students on thei...

#### 🔗 Inbound Citations & Reverse Links

- [Optional browser optimization for Service Workers (ServiceWorkerAutoPreload) · Issue #32 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/32) *(github.com · 2026-09-14T08:09:53)* *(Cites: `https://chromestatus.com/feature/5194817700364288`)*
  > Optional browser optimization for Service Workers (ServiceWorkerAutoPreload) · Issue #32 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You...
- [Intent to Experiment: ServiceWorkerAutoPreload](https://groups.google.com/a/chromium.org/g/blink-dev/c/AkA4s1_R8H4) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5194817700364288`)*
  > Intent to Experiment: ServiceWorkerAutoPreload Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Ser...
- [Intent to Prototype: ServiceWorkerAutoPreload](https://groups.google.com/a/chromium.org/g/blink-dev/c/vp83zL5uomg/m/s0LJk8RgBAAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5194817700364288`)*
  > Intent to Prototype: ServiceWorkerAutoPreload Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Servi...
- [Service Worker Auto Preload feature in incubation from Chris Wilson on 2025-05-20 (public-new-work@w3.org from May 2025)](https://lists.w3.org/Archives/Public/public-new-work/2025May/0008.html) *(lists.w3.org)* *(Cites: `https://github.com/WICG/service-worker-auto-preload`)*
  > Per https://github.com/WICG/proposals/issues/155 has been adopted into WICG: https://&lt;strong&gt;github.com/WICG/service-worker-auto-preload&lt;/strong&gt;/.
- [ServiceWorkerAutoPreloadEnabled - Instinctive library of Chrome settings](https://instinctive.app/chromesettings/serviceworkerautopreloadenabled) *(instinctive.app)* *(Cites: `https://github.com/WICG/service-worker-auto-preload`)*
  > ServiceWorkerAutoPreloadEnabled - Instinctive library of Chrome settings Instinctive Features & Pricing Item 1 Item 2 --&gt; Chromebook Checkout NEW: LOGIN SECURITY Inventory Chromebooks automatically, keep students on thei...

#### 📚 Platform Documentation & References

- [w3.org](https://www.w3.org/calendar/tpac2024/breakout-sessions) *(w3.org)*
- [Optional browser optimization for Service Workers (ServiceWorkerAutoPreload) · Issue #32 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/32) *(github.com)*
- [Service Worker Auto Preload feature in incubation from Chris Wilson on 2025-05-20 (public-new-work@w3.org from May 2025)](https://lists.w3.org/Archives/Public/public-new-work/2025May/0008.html) *(lists.w3.org)*
- [design-reviews#1108: ServiceWorkerAutoPreload](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1108) *(tag-github-bot.w3.org)*
- [ServiceWorkerAutoPreload · Issue #155 · WICG/proposals · GitHub](https://github.com/WICG/proposals/issues/155) *(github.com)*

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (64 found across 12 planned queries, 22 verified) · `Google Search Grounding (gemini-3.8-flash)` (7 found, 4 verified) · `Twitter / X API v2` *(found 6 tweet(s))* · `Tweets found by web search` (7 found, 0 verified) · `Dev.to Community Blogs` (3 found, 0 verified) · `Hacker News Algolia` (1 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(not in a web-features group)* · `Web Platform Tests (wpt.fyi)` *(not in a web-features group)* · `Sources cited by the AI synthesis` (8 found, 6 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 3

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

- **Momentum:** **Quiet** (-40 points since 2026-10-12; footprint 230 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"css corner shorthand properties corner-shape border-radius"`, `"css borders 4 corner shorthand w3c issue 11623"`
- **Analysis:** The CSS corner shorthand properties, standardized in CSS Borders and Box Decorations Module Level 4, streamline element styling by combining border radius and corner shape declarations into unified physical and logical shorthands like corner-top-left: 20px squircle. Chromium is enabling the feature by default starting in Chrome 157, backed by formal W3C CSS Working Group resolutions. Cross-browser consensus is broadly aligned, though the broader corner-shape feature family is currently in limited baseline availability while non-Chromium engines progress through implementation.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt the corner shorthand progressively today by providing a traditional border-radius fallback followed by feature-flagged declarations guarded with @supports (corner: 10px squircle) or @supports (corner-shape: squircle). Avoid relying on corner shorthands as the sole geometric styling mechanism in mission-critical production UI until cross-engine availability stabilizes.
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

- [Squircles in CSS: corner-shape, superellipse() and Browser Support (2026) - Squircle.js](https://squircle.js.org/blog/squircles-in-css) *(squircle.js.org)*
  > The \*\*CSS corner shorthand properties\*\* (specified in the W3C \*\*CSS Borders and Box Decorations Module Level 4\*\*) address a major ergonomics issue introduced when corner shaping (\`corner-shape: squircle \| bevel \| scoop \|...
- [css.properties](https://css.properties/corner-top-left-shape) *(css.properties)*
  > The \*\*CSS corner shorthand properties\*\* (specified in the W3C \*\*CSS Borders and Box Decorations Module Level 4\*\*) address a major ergonomics issue introduced when corner shaping (\`corner-shape: squircle \| bevel \| scoop \|...
- [searchfox.org](https://searchfox.org/firefox-main/source/testing/web-platform/tests/css/css-borders/corner-shape/corner-shorthand-rendering-ref.html) *(searchfox.org)*
  > \*\*Signals:\*\* Firefox signaled positive support in Web Platform Tests (WPT), and WebKit has been tracking implementation
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/157) *(learn.microsoft.com)*
  > Edge documentation highlighted the \`corner\` property as a headline CSS addition card { corner: 20px squircle; }\` replaces paired declarations across cards, buttons, and modal dialogs
- [How to create fancy corners using CSS corner-shape - LogRocket Blog](https://blog.logrocket.com/create-fancy-corners-css) *(blog.logrocket.com)*
  > \*\*The "Squircle" and UI Detailing Craze:\*\* Both publications released tutorials exploring native squircle and bevel rendering \*\*Ergonomic Simplification:\*\* Authors emphasized that without the \`corner\` shorthands, compone...
- [master.dev](https://blog.master.dev/background-patterns-with-css-corner-radius) *(blog.master.dev)*
  > They noted that mobile-inspired design languages (such as iOS-style squircle icons and cards) previously required heavy SVG clip paths or canvas workarounds dev):\*\* Explores generative background tiles and decorative UI ...

#### 🔗 Inbound Citations & Reverse Links

- [CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1367) *(github.com · 2026-08-23T14:10:52)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window....
- [\[blink-dev\] Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17493.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > \[blink-dev\] Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS corner shorthand properties Helmut Januschka Fri, 18 Sep 2026 06:34:29 -0700 \*Contact emai...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17637.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Helmut Januschka Thu, 01 Oct 2026 07:54:36 -07...
- [\[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17509.html) *(mail-archive.com)* *(Cites: `https://static.januschka.com/i-425897047`)*
  > \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 21 Sep 2026 11:46:37 -0700 This look...
- [csswg-drafts/css-borders-4/Overview.bs at main · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/blob/main/css-borders-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-borders-4/#corner-shaping`)*
  > csswg-drafts/css-borders-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh ...

#### 📚 Platform Documentation & References

- [CSS Borders and Box Decorations Module Level 4](https://www.w3.org/TR/css-borders-4) *(w3.org)*
- [\[css-borders-4\] corner-shape initial value ("round") is strange in some cases (e.g. bevel) · Issue #11623 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/11623) *(github.com)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/corner-top-shape/index.md?plain=1) *(github.com)*
- [CSS corner shorthand properties · Issue #1367 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1367) *(github.com)*
- [csswg-drafts/css-borders-4/Overview.bs at main · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/blob/main/css-borders-4/Overview.bs) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `corner-shape` on [wpt.fyi](https://wpt.fyi/results?q=feature:corner-shape) (via webstatus.dev) — stable: Chrome 78.1% · Edge 80.3% · Firefox 9.4% · Safari 7.8%; experimental: Chrome 84.5% · Edge 86.5% · Firefox 55.4% · Safari 71%

#### 🌐 Web-features Group Context

*group-level data: web-features [`corner-shape`](https://webstatus.dev/features/corner-shape)*

- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/229))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/823))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (55 found across 12 planned queries, 14 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 10 verified) · `Twitter / X API v2` *(found 2 tweet(s))* · `Tweets found by web search` (6 found, 0 verified) · `Dev.to Community Blogs` (2 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 found, 2 verified) · `Engine Bug Trackers` (2 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (5 found, 0 verified) · `web-features mapping` *(group "corner-shape", shared with 0 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "corner-shape": Chrome 78.1% passing (stable))* · `Sources cited by the AI synthesis` (5 found, 0 verified)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 6

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

- **Momentum:** **Quiet** (-60 points since 2026-10-12; footprint 155 points)
- **Consensus:** **Multi-Engine Consensus**
- **Developer Sentiment:** **Positive**
- **Analysis:** The CSS text-overflow \`&lt;string&gt;\` value enables developers to replace standard ellipsis indicators with custom inline strings such as \`"(more)"\` or \`"\[..\]"\`. While Firefox has uniquely supported this capability since Firefox 9, long-awaited cross-browser parity is finally arriving with Chromium enabling it by default in Chrome 157 alongside matching WebKit implementation work. This convergence eliminates a decade-long interoperability gap in CSS Overflow Module Level 4 and removes the need for fragile layout hacks.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams should adopt custom string values using progressive enhancement by declaring \`text-overflow: ellipsis\` immediately before \`text-overflow: "…"\` or wrapping styles within \`@supports (text-overflow: "")\`. Existing JavaScript-based clipping routines can be phased out as newer Chromium and WebKit releases achieve widespread stable penetration.
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
  > \*\*Summary:\*\* Firefox was the early pioneer of this feature (having supported \`&lt;string&gt;\` since Firefox 9)
- [stackoverflow.com](https://stackoverflow.com/questions/16603957/easy-way-to-add-a-closing-quote-in-an-ellipsized-over-flowed-text) *(stackoverflow.com)*
  > The web community has long viewed \`text-overflow: &lt;string&gt;\` as an unfinished piece of the CSS overflow toolkit
- [\[blink-dev\] Intent to Prototype: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17287.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-overflow: value Chromestatus Tue, 25 Aug 2026 05:36:48 -0700 Contact emails \[email...
- [\[blink-dev\] Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17500.html) *(mail-archive.com)*
  > This is a support CSS value; it does not deprecate or change the behavior of any existing API, so it poses no WebView compatibility risk. Debuggability No information provided Will this feature be supported on all six Bl...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com · 2026-10-30T05:29:22)*
  > sampler: https://static.janusc... window) \| ChromeStatus.com entry \| Spec ↗ (opens in new window) &lt;strong&gt;Adds a &lt;string&gt; value to the text-overflow property&lt;/strong&gt;....
- [\[blink-dev\] Re: Intent to Ship: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17513.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Sunday, September ... \*Specification\* &gt;&gt; https://drafts.csswg.org/css-overflow-4/#text-overflow &gt;&gt; &gt;&gt; \*Summary\* &gt;&gt; &lt;strong&gt;Adds a &lt;string&gt; value to the text-overflow ...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Prototype: CSS text-overflow: &lt;string&gt; value](http://www.mail-archive.com/blink-dev@chromium.org/msg17287.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6294595288825856`)*
  > \[blink-dev\] Intent to Prototype: CSS text-overflow: value Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: CSS text-overflow: value Chromestatus Tue, 25 Aug 2026 05:36:48 -0700 Contact emails \[email...

#### 📚 Platform Documentation & References

- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/css/reference/properties/text-overflow/index.md?plain=1) *(github.com)*
- [mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=883884) *(bugzilla.mozilla.org)*
- [github.com](https://github.com/w3c/csswg-drafts/issues/10844) *(github.com)*
- [Evaluate using CSS \`text-overflow: &lt;string&gt;\` value · Issue #8680 · db-ux-design-system/core-web · GitHub](https://github.com/db-ux-design-system/core-web/issues/8680) *(github.com)*
- [\[css-overflow-4\] Clarification of text-overflow: &lt;string&gt; value; Rendering pipeline · Issue #11683 · w3c/csswg-drafts · GitHub](https://github.com/w3c/csswg-drafts/issues/11683) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Share of tests passing in the web-features group `custom-ellipses` on [wpt.fyi](https://wpt.fyi/results?q=feature:custom-ellipses) (via webstatus.dev) — stable: Chrome 0% · Edge 0% · Firefox 34.8% · Safari 0%; experimental: Chrome 100% · Edge 100% · Firefox 34.8% · Safari 0%

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (57 found across 12 planned queries, 9 verified) · `Google Search Grounding (gemini-3.8-flash)` (14 found, 5 verified) · `Twitter / X API v2` *(found 0 tweet(s))* · `Tweets found by web search` (8 found, 0 verified) · `Dev.to Community Blogs` (6 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 found, 1 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (7 found, 0 verified) · `web-features mapping` *(group "custom-ellipses", shared with 1 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "custom-ellipses": Chrome 0% passing (stable))*
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

- **Momentum:** **Quiet** (-90 points since 2026-10-12; footprint 120 points)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Analysis:** Compression Dictionary Transport originally launched in Chromium 130 to allow HTTP responses to be compressed against pre-negotiated shared dictionaries using Shared Brotli and Shared Zstandard. The Chrome and Edge 156 updates bring the implementation into strict alignment with revised WHATWG HTML and Fetch specifications, formalizing 'compression-dictionary' as a dedicated request destination while properly honoring element attributes like crossorigin, credentials, and referrer policies. Cross-engine alignment is strong, driven by ongoing implementation work and test suites collaboratively developed by Mozilla and Igalia across Firefox and WebKit.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt dictionary transport progressively by feature-detecting element support via document.createElement('link').relList.supports('compression-dictionary') and configuring server-side Use-As-Dictionary response headers. When loading dictionaries hosted on external CDNs or origins, ensure that crossorigin and appropriate referrer policy attributes are now explicitly set on rel='compression-dictionary' link elements to avoid fetch failures under the updated specification.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **3 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [trade-assistance.com](https://trade-assistance.com/blog/compression-dictionary-transport-delta-updates-chrome-156) *(trade-assistance.com)*
  > \*\*Compression Dictionary Transport\*\* allows browsers to compress HTTP responses against a previously fetched shared dictionary (such as a previous version of an app bundle or common template code) using Shared Brotli (\`d...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/156) *(learn.microsoft.com)*
  > The latest updates (aligned in \*\*Chromium / Edge 156\*\* and Web Platform Tests) bring browsers into strict compliance with the Fetch and HTML specifications \*\*Respecting Link Attributes:\*\* The browser now respects \`crosso...
- [wpt.fyi](https://wpt.fyi/results/fetch/compression-dictionary/fetch-destination.tentative.https.html) *(wpt.fyi)*
  > destination\` explicitly to \`"compression-dictionary"\` instead of an empty or generic destination The article notes that making the request destination \`"compression-dictionary"\` allows Service Workers and reverse proxies...
- [appspot.com](https://cr-status.appspot.com/feature/4895435813683200?gate=6090572807929856) *(cr-status.appspot.com)*
  > Announced as a "Chromium catches up" milestone
- [\[blink-dev\] Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17496.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Fri, 18 Sep 2026 10:16:1...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17502.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates 'Dan Clark' via blink-dev Mon, 21 Se...

#### 🔗 Inbound Citations & Reverse Links

- [\[blink-dev\] Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17496.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4895435813683200`)*
  > \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Compression dictionary transport Updates Frédéric Wang Nélar Fri, 18 Sep 2026 10:16:1...
- [\[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17502.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11620`)*
  > \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates 'Dan Clark' via blink-dev Mon, 21 Se...
- [Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates](http://www.mail-archive.com/blink-dev@chromium.org/msg17662.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/11620`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Compression dictionary transport Updates Philip Jägenstedt Wed, 07 Oc...

#### 📚 Platform Documentation & References

- [Update documentation for compression dictionary transport · Issue #875 · mdn/mdn · GitHub](https://github.com/mdn/mdn/issues/875) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- Results of the web-features group `compression-dictionary-transport` on [wpt.fyi](https://wpt.fyi/results?q=feature:compression-dictionary-transport) (webstatus.dev has no pass rates for it)

#### 🌐 Web-features Group Context

*group-level data: web-features [`compression-dictionary-transport`](https://webstatus.dev/features/compression-dictionary-transport), shared with 3 other ChromeStatus features*

- **Chrome usage:** 0.093% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/315))

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (40 found across 11 planned queries, 8 verified) · `Google Search Grounding (gemini-3.8-flash)` (11 found, 5 verified) · `Twitter / X API v2` *(found 3 tweet(s))* · `Tweets found by web search` (1 found, 0 verified) · `Dev.to Community Blogs` (0 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 found, 0 verified) · `Engine Bug Trackers` (0 found, 0 verified) · `Baseline (baseline.dev)` *(limited)* · `NPM Registry` (6 found, 0 verified) · `web-features mapping` *(group "compression-dictionary-transport", shared with 3 other ChromeStatus feature(s))* · `Web Platform Tests (wpt.fyi)` *(group "compression-dictionary-transport": no stable pass rate for Chrome yet)*
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

---

