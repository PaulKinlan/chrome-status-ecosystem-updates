# 🌐 Chrome Web Platform Ecosystem Report — 2026-W35

> **Generated on:** 2026-08-28 | **Target Milestones:** Chrome 154
> **Search Engine:** Gemini (Google Grounded) + BRAVE | **Analysis Model:** Google Gemini (gemini-3.7-flash)

## 📊 Executive Snapshot

| Metric | Count | Description |
| :--- | :--- | :--- |
| **Features Tracked** | `21` | APIs & platform features analyzed across milestones |
| **High Ecosystem Momentum** | `18` | Features with active community discussions & publications |
| **Multi-Engine Consensus** | `0` | Broad alignment across Chromium, Gecko, and WebKit |
| **Contested / Concerns** | `1` | Features with open vendor or security/privacy objections |
| **New Mentions This Week** | `375` | Net new articles, discussions, or standards updates |

## 📋 Features Index

| Feature | Milestone | Category | Momentum | Consensus | Developer Pulse |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [CSS text-decoration-inset](#5178263526834176-css-text-decoration-inset) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | Positive |
| [Fetch API: Forward reason from AbortController to fetch Response](#5158507786665984-fetch-api-forward-reason-from-abortcontroller-to-fetch-response) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | Positive |
| [CSS Symbols()](#5146996093616128-css-symbols) | Chrome 154 | `Enabled by default` | **High** | Partial Multi-Engine Interest | Cautiously Optimistic |
| [Secure Payment Confirmation: Locale Validation](#5126146013396992-secure-payment-confirmation-locale-validation) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | Neutral |
| [Support for specialized WebHID devices on Android](#5172464636133376-support-for-specialized-webhid-devices-on-android) | Chrome 154 | `In developer trial (Behind a flag)` | **High** | Contested / Concerns Raised | Mixed / Skeptical |
| [WebGPU: WGSL Fragment Depth](#5663304168112128-webgpu-wgsl-fragment-depth) | Chrome 154 | `Enabled by default` | **High** | Partial Multi-Engine Interest | Positive |
| [Iterator Includes](#5205192866922496-iterator-includes) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | Positive |
| [Responsively-sized &lt;iframe&gt;](#5108373464547328-responsively-sized-iframe) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | Positive / High Interest |
| [FontFace width attribute and font-width descriptor](#5145402365050880-fontface-width-attribute-and-font-width-descriptor) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | Positive |
| [WebTransport headers and responseHeaders](#5194104408506368-webtransport-headers-and-responseheaders) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | Positive / High Interest |
| [Expose CSSStyleValue hierarchy to Worker contexts](#5114591051907072-expose-cssstylevalue-hierarchy-to-worker-contexts) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | Positive |
| [Local Network Access restrictions for Background Fetch](#6225598451154944-local-network-access-restrictions-for-background-fetch) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | Positive |
| [Private Verification Tokens](#6210457816924160-private-verification-tokens) | Chrome 154 | `Origin trial` | **High** | Chromium-Led | Cautiously Optimistic |
| [Window Shape API](#5075144470036480-window-shape-api) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | Neutral |
| [Light dismiss improvements for popovers and dialogs](#6209615938322432-light-dismiss-improvements-for-popovers-and-dialogs) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | Positive / High Interest |
| [Algorithm Updates in WebCrypto](#5198951632470016-algorithm-updates-in-webcrypto) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | Neutral |
| [Renewed HTML insertion&streaming methods](#5054329641893888-renewed-html-insertionstreaming-methods) | Chrome 154 | `Enabled by default` | **High** | Partial Multi-Engine Interest | Positive / High Interest |
| [Add options bag to WebSocket constructor](#5080055102439424-add-options-bag-to-websocket-constructor) | Chrome 154 | `Enabled by default` | **High** | Chromium-Led | Positive |
| [CORS enforcement for Background Fetch](#6210300985606144-cors-enforcement-for-background-fetch) | Chrome 154 | `Enabled by default` | **Moderate** | Chromium-Led | Neutral |
| [CSS4 text-decoration-skip-spaces](#4832783806627840-css4-text-decoration-skip-spaces) | Chrome 154 | `Enabled by default` | **Moderate** | Chromium-Led | Positive |
| [Support targetAddressSpace option for WebSockets](#4779920606756864-support-targetaddressspace-option-for-websockets) | Chrome 154 | `Enabled by default` | **Emerging** | Chromium-Led | Neutral |

---

## 🔍 Feature Ecosystem Deep Dives

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

- **Momentum:** **High** (Activity Score: 380)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""text-decoration-inset" "css-tricks""`, `""text-decoration-inset" css chrome webkit gecko"`, `""text-decoration-inset" site:bugzilla.mozilla.org"`
- **Analysis:** CSS `text-decoration-inset` (CSS Text Decoration Module Level 4) provides fine-grained control over the start and end offsets of underlines, overlines, and line-through decorations. With Chromium enabling it by default in Chrome 154, Firefox supporting it since version 146, and WebKit trialing it in Safari Technology Preview 250, the property is rapidly heading toward cross-engine Baseline status.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt `text-decoration-inset` immediately as a progressive enhancement to fine-tune typography, link underlines, and strike-throughs. For advanced UI effects like reveal animations or text-decoration masking, wrap rules in `@supports (text-decoration-inset: 0)` while providing basic `text-decoration` fallbacks.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **41 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1780887: [meta] [css-text-decor] implement text-decoration-inset to modify the length of underline etc](https://bugzilla.mozilla.org/show_bug.cgi?id=1780887) `[NEW]`
- **Mozilla (Gecko):** [Bug #1981310: [Inactive CSS] Add text-decoration-inset in inactive CSS](https://bugzilla.mozilla.org/show_bug.cgi?id=1981310) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFhXH0SbDX3i8H5Uw83YUgRvgY_fH0Q62nzyXWN3ZnMKnYVzfFEcQ1glfpeBbAaIOcOOMTB0Nuigl8qh98f8HmEad-UPUjs8T_BK2JB0al5GsByu1GX3D-whjcmwE5yiM_ODEbjN6jDgrdZTxtqVUhazaz5b-KfyQDy9t6XSRSTNngkBVk_M4ug) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset is Like Padding for Text Decorations | CSS-Tricks Skip to main content CSS-Tricks Since 2007 typography text-decoration-inset is Like Padding for Text Decorations Daniel Schwarz on Dec 22, 2025 The ...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHXd6D3oi3iVAH0k9EpEJ1E0_1c2PpfH8TgUKdPVXw2YTUAb4nClgs0qiHbqJ73LaQ-_7cmLWnKLN4NxKCvsaP61sf1mm1g2uZqlL5PPnS-WCUPTbgF_2ElVFjHnHw=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of CSS `text-decoration-inset`  Part of the **CSS Text Decoration Module Level 4** specification (previously drafted in part as `text-decoration-trim`), **`text-decoration-inset`** gives web developers fine-g...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHwxJv4H9jdI-qF_iGBZQjVZBFV_xwR4qjsGxZQGigHgV1JolHXFaazPQ_7IGUMCRDWrG2RWhx18PMQD10Xx1FD_i6MVpX_EseKm7e9OdA4OMBNalJwoK63o9Y_fvuFChkIPRlCvq56) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [januschka.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEdeBbyTgy9LvzZiooNSk-wuiJ1cYaLBdfhAZ7ulv9Tr2uHi0_UvbVTocA7tx5podILHcaXsX4H-WPzCmjqzE9r8KLXi_TDrXlNILACYFgpcbEopQIswbSygYrWwEp9ZLJRSPIKXUzKWmAYq_Xn_2qS4kW7) *(vertexaisearch.cloud.google.com)*
  > Implementing text-decoration-inset in Blink - Helmut Januschka Implementing text-decoration-inset in Blink ⚡ Chromium 🔧 C++ / Blink / CSS 👤 Helmut Januschka A CSS property can be easy to parse and difficult to paint. F...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEGAe_VwdMaRhEKP3MhtaJbSItfiJ5HWDAMdZbdKrgMxtfqwzWiequP6bvDC27rOfRdRv7Va1SmddQVkmICNW6RozRGgHJ66_tnr7SggCdA54bZJLFxN6_rClv9Js9V_OceJA==) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFjsqUsPUBYS3Uv4PMWTBM1W8sZ7GgMmCvC47oe7GOY5p8A65nAzpdLw07QuKZc-lOTj-lLBV95xflBqVzVepjvVCggRhF63EbOr8UpjtMHguVvVAgoSZknWZS8RFMyRdp0P6OWgXdAwE2VFSmbPSDVmL7N-Lrf4_oDIN_rwDAWRAKD3T0juPw8lDGffDTjdP6M) *(vertexaisearch.cloud.google.com)*
  > text-decoration-inset CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties text-decoration-inset Theme OS default Light Dark English (US) Remember language Learn more D...

#### 🔗 Inbound Citations & Reverse Links

- [Re: [blink-dev] Intent to Ship: CSS text-decoration-inset](http://www.mail-archive.com/blink-dev@chromium.org/msg17259.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178263526834176`)*
  > Re: [blink-dev] Intent to Ship: CSS text-decoration-inset Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS text-decoration-inset Mike Taylor Mon, 24 Aug 2026 06:36:24 -0700 On 8/23/26 9:43 a.m., ...
- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > Shortname: css-text-decor · Level: 4 · Status: ED · Work Status: Exploring · Group: csswg · ED: https://<strong>drafts.csswg.org/css-text-decor-4</strong>/ TR: https://www.w3.org/TR/css-text-decor-4/ Previous Version: ht...
- [[css-text-decor] [css-pseudo] default ‘text-decoration-color’ of ‘spelling-error’ and ‘grammar-error’ · Issue #7522 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7522) *(github.com · 2022-07-21T10:15:16)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > https://<strong>drafts.csswg.org/css-text-decor-4</strong>/#text-decoration-line-property Since spelling-error and grammar-error decorations are entirely UA-defined, the UA may disregard the other sub-properties of text-...
- [[css-text-decor] text-decoration-width claims to be a sub-property of text-decoration, but text-decoration disagrees. · Issue #3993 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3993) *(github.com)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > https://<strong>drafts.csswg.org/css-text-decor-4</strong>/#text-decoration-width-property says (emphasis mine): This property, which is also a sub-property of the text-decoration shorthand, sets the stroke thickness of ...
- [[css-lists][css-pseudo] Allow text decoration properties on ::marker · Issue #12822 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12822) *(github.com · 2025-09-18T00:15:38)* *(Cites: `https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-inset`)*
  > I think https://drafts.csswg.org/css-lists-3/#marker-properties should allow all properties from https://<strong>drafts.csswg.org/css-text-decor-4</strong>/. Non-inherited properties Currently, these properties have no e...

#### 📚 Platform Documentation & References

- [csswg-drafts/css-text-decor-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-text-decor-4/Overview.bs) *(github.com)*
- [[css-text-decor] [css-pseudo] default ‘text-decoration-color’ of ‘spelling-error’ and ‘grammar-error’ · Issue #7522 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7522) *(github.com)*
- [[css-text-decor] text-decoration-width claims to be a sub-property of text-decoration, but text-decoration disagrees. · Issue #3993 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3993) *(github.com)*
- [[css-lists][css-pseudo] Allow text decoration properties on ::marker · Issue #12822 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12822) *(github.com)*
- [[css-text-decor] text-decoration level 4 clarification on text-underline-offset positive/negative lengths · Issue #4021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4021) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=text-decoration-inset) (40 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (32 found across 6 planned queries, 28 verified) · `Google Search Grounding (gemini-3.7-flash)` (7 found, 7 verified) · `Dev.to Community Blogs` (8 found, 20 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 items) · `Engine Bug Trackers` (2 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (40 items)
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

- **Momentum:** **High** (Activity Score: 370)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""abort reason" "Response.body" fetch whatwg"`, `""Fetch API: Forward reason from AbortController to fetch Response""`, `""Forward reason from AbortController to fetch Response" chromestatus"`
- **Analysis:** This specification compliance update aligns Chromium with the WHATWG Fetch standard by propagating developer-specified abort reasons to Response body methods (such as response.text() or response.blob()) and the underlying Response.body ReadableStream when an abort occurs post-header resolution. Firefox has already supported this standard behavior, and Chromium's rollout in Chrome 154 closes a longstanding cross-browser inconsistency where body-reading promises rejected with generic AbortErrors instead of the supplied reason. Browser engines are in strong consensus on adhering to the Fetch specification.

**Key Recommendations & Takeaways:**
- Actionable Advice: Developers can safely pass structured errors or reasons to AbortController.abort(reason), but should still include fallback checks for generic DOMException AbortError instances on older browser engines that have not yet updated their stream abort pipeline.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."
- Community package available: [node-abort-controller](https://www.npmjs.com/package/node-abort-controller) (v3.1.1) for progressive enhancement.

#### ⚡ What Happened This Week

- 📰 **36 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Fetch API: Forward abort reason to Response](https://github.com/WebKit/standards-positions/issues/711) [closed] `invalid`
  > *Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."*

#### 📦 Polyfills & NPM Ecosystem

- [node-abort-controller](https://www.npmjs.com/package/node-abort-controller) `v3.1.1` *(Verified Polyfill)* — AbortController for Node based on EventEmitter
- [abortcontroller-polyfill](https://www.npmjs.com/package/abortcontroller-polyfill) `v1.7.8` *(Verified Polyfill)* — Polyfill/ponyfill for the AbortController DOM API + optional patching of fetch (stub that calls catch, doesn't actually abort request).

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFrcEEPo86xJlmHGSWWGms7ILy9jOs48IrAX8fvC3BlCC6OD_yeqxdHxnyAbbfTU-vfmtLJjvep5rIp20xeWfXSQ5iVOiiJb9bkmS9W6B8vWDiRgY92S5nVK-8imrI9k5XsvYZQfSL08VZfMuLNDSfmpAZ8D-VlnHSkAmoryA==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHln3tH8-o2NQPWn1ZNUsl9atNPpjAD-rW_w-A7dglG6QCzELnVN7A4iRUClOz2Eybz7WNhIq5PRNK7npV3p_mQj1DOW2WyyaXaY-OB75KFo08F7PcyONz9sHciImcCTtUQal5N1osEeT1i0WKu9reTdag=) *(vertexaisearch.cloud.google.com)*
  > AbortSignal - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs AbortSignal Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 한국어 Portugu...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFI4FJ4tiblYjME0NnvQsQyvVN9JB0_npAEGHXGINUJsH8zn84CciV9nyyPFNA--DNwHUU8VbJILWxti50LhC1MWo1BrCA-bkcSR8VROo_PzO1kL1h-K95z-7LxQQgg8s_wcjZelKs7) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGjMD2j3VEJ_K_jEmDKR-srBjtV44T1BbYT04e-MIDaZDAbdgUq2auAl04Okk4K7HvrTXxJLX9y3VaplugzYTBw9xESGm_HvxBrYYkO8KpYqQj8iW8j8H8WiO4eMdmZTA0pc7e1S_MMM81bq8Pr_0K2qQbSdQS100XvkjBs5T2Myrhx) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [bsky.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHt-yPBmWiGVTNp_QbK4eCXrh6EyUspLSn1WbSZUGGc9lvW5uB62uXVNG1RtlCamPyqNteNMGMYnWHdCkSNH7cx49ySfa5ZhbcAWIdbtMiOulyW3t9CuY2VhM7vlfRBiQ==) *(vertexaisearch.cloud.google.com)*
  > @intenttoship.dev on Bluesky JavaScript Required This is a heavily interactive web application, and JavaScript is required. Simple HTML interfaces are possible, but that is not what this is. Learn more about Bluesky at b...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGA53Ny3RM_c5BGHdP_Cnb2D0aHYtYfLLlXOaiKXrpy94-Y2mKsBL2hVSL9SBEbzhYyNu2jpMPQ-29c6CqPHmp-36oURCIeMXm4pv61kagNsDCV1yXilzQCZVatqfXgE0GSojZqZ7wvG5RWAX7_m3JAHjZw5muR49zO7xb0UA==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status

#### 🔗 Inbound Citations & Reverse Links

- [[blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17136.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5158507786665984`)*
  > &gt; *No information provided* &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://<strong>chromestatus.com/feature/5158507786665984</strong>?gate=6176253840326656 &gt; &gt; This intent message was gener...
- [GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub](https://github.com/fis-components/whatwg-fetch) *(github.com)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > [code-of-conduct]: http://todogroup.org/opencodeofconduct/#fetch/opensource@github.com · <strong>The global fetch function is an easier way to make web requests and handle responses than using an XMLHttpRequest</strong>.
- [whatwg-fetch/README.md at master · fis-components/whatwg-fetch](https://github.com/fis-components/whatwg-fetch/blob/master/README.md) *(github.com)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > [code-of-conduct]: http://todogroup.org/opencodeofconduct/#fetch/opensource@github.com · <strong>The global fetch function is an easier way to make web requests and handle responses than using an XMLHttpRequest</strong>.
- [Spec reads #1: [fetch](https://fetch.spec.whatwg.org/) / Tom MacWright | Observable](https://observablehq.com/@tmcw/spec-reads-1-fetch) *(observablehq.com · 2018-03-23T20:48:52)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > Like most web developers, I&#x27;ve used fetch ever since it was usable in a majority of browsers. Compared to XMLHttpRequest, it was an incredible step forward. But I never took the time to really think it through, unti...
- [Fetch Standard (Pull Request Snapshot #632)](https://s3.amazonaws.com/pr-preview/whatwg/fetch/8ab040a...46984f2.html) *(s3.amazonaws.com · 2017-11-15T00:00:00)* *(Cites: `https://fetch.spec.whatwg.org`)*
  > Do not attempt to implement this version of the specification. Do not reference this version as authoritative in any way. Instead, see https://<strong>fetch.spec.whatwg.org</strong>/ for the living standard. The Fetch st...

#### 📚 Platform Documentation & References

- [GitHub - fis-components/whatwg-fetch: Fork from https://github.com/github/fetch.git · GitHub](https://github.com/fis-components/whatwg-fetch) *(github.com)*
- [whatwg-fetch/README.md at master · fis-components/whatwg-fetch](https://github.com/fis-components/whatwg-fetch/blob/master/README.md) *(github.com)*
- [AbortSignal - Web APIs - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) *(developer.mozilla.org)*
- [AbortController - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) *(developer.mozilla.org)*
- [AbortController: abort() method - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=fetch-api%3A-forward-reason-from-abortcontroller-to-fetch-response) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (33 found across 6 planned queries, 26 verified) · `Google Search Grounding (gemini-3.7-flash)` (8 found, 8 verified) · `Dev.to Community Blogs` (8 found, 23 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 items) · `Engine Bug Trackers` (0 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 2 verified) · `Web Platform Tests (wpt.fyi)` (0 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 3

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

- **Momentum:** **High** (Activity Score: 330)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `"site:bugs.webkit.org "symbols()" "counter-styles""`, `""CSS symbols()" browser support 2025 OR 2026"`, `""symbols()" css-counter-styles-3 blink intent"`
- **Analysis:** The CSS `symbols()` function simplifies list styling by allowing developers to define anonymous counter styles inline without declaring global `@counter-style` at-rules. While Firefox (Gecko) has supported the function since 2015, Chromium's enablement in Chrome 154 marks a major leap toward closing a decade-long cross-browser gap. Full cross-browser Baseline status now hinges on WebKit (Safari) implementing support.

**Key Recommendations & Takeaways:**
- Actionable Advice: Use `symbols()` progressively for decorative list markers where fallback to standard bullets or named `@counter-style` rules is acceptable. Avoid relying on `symbols()` for critical enumerated list semantics until Safari ships support and Baseline availability is achieved.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **36 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [[css-counter-styles-3] CSS symbols() function](https://github.com/WebKit/standards-positions/issues/714) [open] 

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #1071436: Support image symbols in symbols()](https://bugzilla.mozilla.org/show_bug.cgi?id=1071436) `[NEW]`
- **WebKit (Safari):** [Bug #22339: Support Indian web sites with EOT by on-the-fly transcoding to Unicode](https://bugs.webkit.org/show_bug.cgi?id=22339) `[NEW]`
- **WebKit (Safari):** [Bug #299922: [css-counter-styles] Support CSS `symbols()` function](https://bugs.webkit.org/show_bug.cgi?id=299922) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [Show HN: Symbol.so – Customize Unicode Symbols and Export as SVG/PNG](https://symbol.so) *(symbol.so · 2025-07-23T16:06:40Z)*
  > Domain registration has expired. Renewal instructions If you own this domain , you may still be able to renew it through your Namecheap account. To renew: sign in, open Domain List , select this domain , and choose Renew...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQENsQDL3C46QSkbH3RUDZymcI8iAjAsH2JvY_ikyWpAAgw9XYZMeqWLs-vwO_Epp4kcj-apP_KgJtUfPmGRMJCbco9XoO28VfShbPuQAX0Vm4oKSF9zqw-VGctmhZiDc0HKgq6dGOpPsaXMckZWofjnWvFfyM_AOUfxwp7QxWaZ) *(vertexaisearch.cloud.google.com)*
  > symbols() CSS function - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Values symbols() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFw36UEfrsnLw21CiIuXXfsDzRhRV0TBsFsO-x_XqXDeCHioJdSTuPniq6NKldATEjnSlGeQCG41tvIoLp5t9eR1_bFrNWlN0qOv4AXhcCO0vPbKuwohqrl_J3qHzPgIq_aWMgCEpSfVrQ=) *(vertexaisearch.cloud.google.com)*
  > symbols() | CSS-Tricks Skip to main content CSS-Tricks Since 2007 counters CSS Almanac &rarr; Functions &rarr; S &rarr; symbols() symbols() Juan Diego Rodríguez on Jan 30, 2025 The CSS symbols() function defines a counte...
- [quackit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHN_yvVgy-nCXNDxBi2IGX-3GlWuKqOgt3q-3Bf2EFxa2vt-GMBEE1mbM8YCm8edX7uyINdtm841tbryqdnLW-zY9invzW9rBaRAs_tt9EbD6gciMM7yg-TQuvhraYQQ59ENTJGmE7OKZ8SyXhop1hCIYeIEg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of CSS `symbols()`  The CSS **`symbols()`** functional notation allows developers to define anonymous counter styles directly inline—omitting the need to declare a separate, named `@counter-style` at-rule.   ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG6-5DBYCL4CRKipu8SPfswTcAkK81ZHPLLMPgTFfVldZLFoZTCGaGRqaELPpWLExHar7nQOwVIHLFvtOGZaiGOiEeCgPNyR_nhy5pH30-jTjsG_KvGUwMVl010nIB80Zxx_eNAndaLrLKPoUeIBBJp74k9WSQYpjZPHly_meZK) *(vertexaisearch.cloud.google.com)*
  > ### Summary of CSS `symbols()`  The CSS **`symbols()`** functional notation allows developers to define anonymous counter styles directly inline—omitting the need to declare a separate, named `@counter-style` at-rule.   ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHakENOxI9g7JoV3FoZQJA1v-w3gW6wG5Sw8wgarXD7PMEmV6R_BWYK234G78YVGhXr9wckaexdR3Ze4nSLwAj1acsQKuiu6NVDagQKkooUdlIvkFPevGQ2ANeVUOY9HMo8-wWALSFFqb5kJIzefMbj_9G5_Svip05qXrxiRzkUpA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of CSS `symbols()`  The CSS **`symbols()`** functional notation allows developers to define anonymous counter styles directly inline—omitting the need to declare a separate, named `@counter-style` at-rule.   ...

#### 🔗 Inbound Citations & Reverse Links

- [[blink-dev] Intent to Prototype: CSS symbols() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17092.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > Search tags: css, counter-style, ... Platform Status: https://chromestatus.com/feature/5146996093616128 -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-dev&quot; group</st...
- [[blink-dev] Intent to Ship: CSS Symbols()](http://www.mail-archive.com/blink-dev@chromium.org/msg17319.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5146996093616128`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5146996093616128</strong>?gate=5558436461936640 Links to previous Intent discussions Intent to Prototype: https://groups.google.com/a/c...
- [csswg-drafts/css-counter-styles-3/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-counter-styles-3/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-counter-styles-3/#symbols-function`)*
  > Significant changes since the &lt;a href=&quot;https://www.w3.org/TR/2015/CR-css-counter-styles-3-20150611/&quot;&gt;June 11 2015 Candidate Recommendation&lt;/a&gt;: ... 	* Clarified that &#x27;@counter-style/additive-sy...
- [[css-counter-styles-3] Setting `CSSCounterStyleRule.name` should ignore symbolic counter styles · Issue #8186 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8186) *(github.com · 2022-12-05T07:52:35)* *(Cites: `https://drafts.csswg.org/css-counter-styles-3/#symbols-function`)*
  > If I am not mistaken, CSSCounterStyleRule.name should ignore symbolic counter styles, because they are invalid. The keywords decimal, disc, square, circle, disclosure-open, and disclosure-closed ar...
- [[css-lists-3] Inconsist `counter()` syntax between CSS 2 and 3 - csswg-drafts](https://gitmemory.com/issue/w3c/csswg-drafts/5795/754872400) *(gitmemory.com)* *(Cites: `https://drafts.csswg.org/css-counter-styles-3/#symbols-function`)*
  > [1] https://www.w3.org/TR/CSS2/generate.html#counter-styles [2] https://www.w3.org/TR/CSS2/generate.html#propdef-list-style-type [3] https://drafts.csswg.org/css-lists-3/#counter-functions [4] https://<strong>drafts.cssw...

#### 📚 Platform Documentation & References

- [csswg-drafts/css-counter-styles-3/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-counter-styles-3/Overview.bs) *(github.com)*
- [[css-counter-styles-3] Setting `CSSCounterStyleRule.name` should ignore symbolic counter styles · Issue #8186 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8186) *(github.com)*
- [list-style-type CSS property - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/list-style-type) *(developer.mozilla.org)*
- [list-style-type CSS property - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type) *(developer.mozilla.org)*
- [symbols() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/symbols) *(developer.mozilla.org)*

#### 🧪 Interactive Demos & Samples

- [CSS Symbols() Demo](https://developer.mozilla.org/en-US/docs/Web/CSS/symbols)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=symbols) (41 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (20 found across 7 planned queries, 20 verified) · `Google Search Grounding (gemini-3.7-flash)` (10 found, 10 verified) · `Dev.to Community Blogs` (8 found, 25 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (1 items) · `Engine Bug Trackers` (3 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (8 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (41 items)
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

- **Momentum:** **High** (Activity Score: 300)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""w3c/secure-payment-confirmation" issue 343 "locale""`, `""Secure Payment Confirmation" "locale" validation "NotSupportedError" OR "NotSupported""`, `""Secure Payment Confirmation" locale validation Chrome"`
- **Analysis:** Secure Payment Confirmation (SPC) Locale Validation updates the `locale` field to reject with a Not Supported DOMException when none of the developer-supplied language tags match the browser dialog's locale. This change is led by Chromium to allow payment providers to detect mismatches and retry with localized transaction strings. However, because broad SPC adoption remains largely Chromium-specific without Gecko or WebKit implementation, the ecosystem footprint is currently limited to Chrome environments.

**Key Recommendations & Takeaways:**
- Actionable Advice: If utilizing SPC in production or pilot flows, pass an array of supported BCP 47 language tags and catch the `NotSupportedError` DOMException to retry with a fallback language or fallback authentication mechanism. If your application does not need strict dialog language parity, omit the `locale` parameter to bypass validation safely.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @gsnedders: "Am I right in understanding that the primary goal here is to replace 3-D Secure with something that's browser mediated?..."
- Standards Activity (Mozilla): Latest discussion from @stephenmcgruer: "Hi folks. I know that Mozilla's position on SPC is outstanding, however we wanted to let you know of a notable additional feature to SPC that we are c..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **34 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Secure Payment Confirmation (SPC)](https://github.com/WebKit/standards-positions/issues/30) [open] `topic: payments`, `concerns: integration`, `venue: W3C Web Payments WG`, `from: Google`
  > *Latest discussion from @gsnedders: "Am I right in understanding that the primary goal here is to replace 3-D Secure with something that's browser mediated?..."*
- **Mozilla:** [Secure Payment Confirmation](https://github.com/mozilla/standards-positions/issues/570) [open] 
  > *Latest discussion from @stephenmcgruer: "Hi folks. I know that Mozilla's position on SPC is outstanding, however we wanted to let you know of a notable additional feature to SPC that we are c..."*

#### 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEvJMgA4dNJIhH5MxO1rzYjLNn75deyB7ny3jRfnezLvER8xcl0CcHe4VwTDd4GSDH6yEDCKI5TBx7aUgLfXVl3sFqgOa3Wzb5CeYcWF4P3sGIrckYD8lSsAw-9n3z2Lavz7TRfcIGojICk_ylMm8_jXkeX) *(vertexaisearch.cloud.google.com)*
  > [spec] SPC Locale Field to Return Error on Language Mismatch · Issue #343 · w3c/secure-payment-confirmation · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance setting...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFbVQXH6oabi1NVGV_BPrCx56inat-w6GiupGeIYRaqISOElGMrAr44wVoBE9D_smQtP2PdtUMT3UyvQljEoQ7RAdLfVrA790bBSxaaJCugFKDOqsgrSbi3RLxXXLGl0jDjLRPM8rxCVj77BRrAxCf7Qmcc_9EbZEtBLQJoNWkJSjC1ipei) *(vertexaisearch.cloud.google.com)*
  > Registrar una confirmación de pago seguro | Payments | Chrome for Developers Ir al contenido principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Vi...
- [googlesource.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF_6vVla90h7_HlCvD4qgWAfbkT-li-SdsyXjHTd03ECgJzzEsa5eNYsiss8RwwvwWO7HwCizwERaggDO4dWiUO7qQMBp5PXGchPNgpiCT_vJ8kBSlDU8Yh7_tpwZ3Wt4yVtFpjq62ByOnSit6TWyjsYHn6Hu_PVxH_eUtE9_ECAelY5uA6NNG_zAsLXLVN7ua5YRcg1YHWW3tGZXbgsF0nx_Ih3LGm) *(vertexaisearch.cloud.google.com)*
  > chrome/browser/flag_descriptions.h - experimental/chromium/src - Git at Google Sign in chromium / experimental / chromium / src / refs/heads/main / . / chrome / browser / flag_descriptions.h blob: fb7a0e5b44eeee9a8c3953f...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHluBCS89UNUOt_xk1rYjh8hmn55bVq6GWWbeRteW1CA1W1NoXQykOvrYgOQ8_8KbAb6plXBo1JtBuaamSh8jp6BcM-IexDbKSSQGJJv6Ep9eA9-6wssX43v9FBug-ALlny5HAAskNY57zhUrMP1JCutgErxG1-HaUz) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **Secure Payment Confirmation (SPC): Locale Validation** updates the handling of the `locale` parameter in the Secure Payment Confirmation API (an extension of the Payment Request API and WebA...
- [fidoalliance.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFC-RC5zSwfwbp79r_DVArI8GogXnjCFro9IceG_D-PHg4wGUiiWvHtXcnWDLukwr016Wi_-l89YRL4z_Uuve1hU5qvqk5goIeKJc31zWLpW8cR8j_kK9y2OADcsLBuGK32XPezr3Kj7FQeS2c-UMC-U12B8Bd7nA==) *(vertexaisearch.cloud.google.com)*
  > White Paper: Secure Payment Confirmation | FIDO Alliance FIDO Alliance Passkey Central Authenticate Conference English &#31616;&#20307;&#20013;&#25991; &#26085;&#26412;&#35486; &#54620;&#44397;&#50612; Passkeys Device On...
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFeQGwh_1E95e-EmMSA4uk_KIkxIx4CUUi4ACwbvSwCO-b3NhrdD_JgTbxUOO4KmTX2a3hYEeIYDi7cPkOuCr-91N2GL88-_af7UF_DlPvJE9X4YdWfgWz7y3C5a41sjXChqUGtcmhdc83wqkQFgyt12fn3mRqfTg==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status

#### 🔗 Inbound Citations & Reverse Links

- [[blink-dev] Intent to Prototype: Secure Payment Confirmation: Locale Validation](http://www.mail-archive.com/blink-dev@chromium.org/msg17162.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5126146013396992`)*
  > Availability expectation The locale validation for Secure Payment Confirmation will only be available in Chromium browsers for the foreseeable future. Estimated milestones Shipping on desktop 154 Shipping on Android 154 ...
- [secure-payment-confirmation/spec.bs at main · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/spec.bs) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > TR: https://www.w3.org/TR/secure-payment-confirmation/ ED: https://<strong>w3c.github.io/secure-payment-confirmation</strong>/ Prepare for TR: true · Inline Github Issues: true · Group: web-payments · Status: w3c/ED · De...
- [Mention Secure Payment Confirmation · Issue #535 · w3c/web-roadmaps](https://github.com/w3c/web-roadmaps/issues/535) *(github.com · 2021-08-27T11:03:35)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > Mention Secure Payment Confirmation#535 · Copy link · Labels · mobile-roadmap · xfq · opened · on Aug 27, 2021 · Issue body actions · Spec: https://<strong>w3c.github.io/secure-payment-confirmation</strong>/ Explainer: h...
- [Secure Payment Confirmation 2023-01-11 > 2023-02-01 · Issue #50 · w3c/a11y-request](https://github.com/w3c/a11y-request/issues/50) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > name of spec to be reviewed: Secure Payment Confirmation (SPC) URL of spec: https://<strong>w3c.github.io/secure-payment-confirmation</strong>/ What and when is your next expected transition? Candidate Recommendati...
- [wpt/secure-payment-confirmation/authentication-accepted.https.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/secure-payment-confirmation/authentication-accepted.https.html) *(github.com)* *(Cites: `https://w3c.github.io/secure-payment-confirmation/#dom-securepaymentconfirmationrequest-locale`)*
  > // https://github.com/w3c/secure-payment-confirmation/pull/198 ·   if (&#x27;rp&#x27; in clientDataJSON.payment) {     assert_equals(clientDataJSON.payment.rp, clientDataJSON.payment.rpId);   }  ·   // TODO: Verify cred....

#### 📚 Platform Documentation & References

- [secure-payment-confirmation/spec.bs at main · w3c/secure-payment-confirmation](https://github.com/w3c/secure-payment-confirmation/blob/main/spec.bs) *(github.com)*
- [Mention Secure Payment Confirmation · Issue #535 · w3c/web-roadmaps](https://github.com/w3c/web-roadmaps/issues/535) *(github.com)*
- [Secure Payment Confirmation 2023-01-11 > 2023-02-01 · Issue #50 · w3c/a11y-request](https://github.com/w3c/a11y-request/issues/50) *(github.com)*
- [wpt/secure-payment-confirmation/authentication-accepted.https.html at master · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/blob/master/secure-payment-confirmation/authentication-accepted.https.html) *(github.com)*
- [Secure Payment Confirmation · Issue #570 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/570) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=secure-payment-confirmation) (20 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (22 found across 7 planned queries, 14 verified) · `Google Search Grounding (gemini-3.7-flash)` (13 found, 13 verified) · `Dev.to Community Blogs` (8 found, 15 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 items) · `Engine Bug Trackers` (0 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (20 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 9

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

- **Momentum:** **High** (Activity Score: 260)
- **Consensus:** **Contested / Concerns Raised**
- **Developer Sentiment:** **Mixed / Skeptical**
- **Analysis:** Support for specialized WebHID devices on Android is currently In developer trial (Behind a flag) in Chrome 154. Verified ecosystem momentum is High with Contested / Concerns Raised standards alignment and mixed / skeptical developer pulse.

**Key Recommendations & Takeaways:**
- Standards Activity (Mozilla): Latest discussion from @scheib: "I'd like to address dmitriid@'s and beaufortfrancois@ comments with a personal opinion.  I work on Chrome adding these capabilities.  We do strive to ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **23 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **Mozilla:** [WebHID (Human Interface Device) API](https://github.com/mozilla/standards-positions/issues/459) [closed] `venue: W3C CG`, `position: negative`
  > *Latest discussion from @scheib: "I'd like to address dmitriid@'s and beaufortfrancois@ comments with a personal opinion.  I work on Chrome adding these capabilities.  We do strive to ..."*

#### 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T07:55:05)*
  > Intent to Prototype: WebHID on Android Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: WebHID on An...
- [Intent to Implement: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/OaDCpCaEe_4/m/uZ0z7frlAAAJ%5D) *(groups.google.com)*
  > Intent to Implement: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Implement...
- [[blink-dev] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17213.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: WebHID on Android Matt Reynolds Tue, 18 Aug 2026 12:47:09 -0700 Sure, let's upgrade this t...
- [Intent to Experiment: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/LoyzK8xTRME/m/yLR-K-siBQAJ) *(groups.google.com)*
  > Intent to Experiment: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experime...
- [Add hid to features.md · w3c/webappsec – Slacker News](https://slacker.ro/2021/07/20/add-hid-to-featuresmd-w3cwebappsec-permissions-policy-at-1065d2d) *(slacker.ro)*
  > | `hid` | [Explainer](https://<strong>github.com/WICG/webhid/blob/master/EXPLAINER.md</strong>) | In [Origin Trial](https://developers.chrome.com/origintrials/#/view_trial/1074108511127863297) in Chrome 85-87 |
- [Connect to uncommon HID devices | Capabilities | Chrome for Developers](https://developer.chrome.com/docs/capabilities/hid) *(developer.chrome.com · 2020-09-15T00:00:00)*
  > <strong>The WebHID API is asynchronous by design to prevent the website UI from blocking when awaiting input</strong>. This is important because HID data can be received at any time, requiring a way to listen to it.

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Prototype: WebHID on Android](https://groups.google.com/a/chromium.org/g/blink-dev/c/aEsVkIFFYPE) *(groups.google.com · 2026-08-13T07:55:05)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Intent to Prototype: WebHID on Android Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: WebHID on An...
- [Intent to Implement: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/OaDCpCaEe_4/m/uZ0z7frlAAAJ%5D) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5172464636133376`)*
  > Intent to Implement: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Implement...
- [[blink-dev] Re: Intent to Prototype: WebHID on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17213.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > [blink-dev] Re: Intent to Prototype: WebHID on Android Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: WebHID on Android Matt Reynolds Tue, 18 Aug 2026 12:47:09 -0700 Sure, let's upgrade this t...
- [Intent to Experiment: WebHID (Human Interface Device)](https://groups.google.com/a/chromium.org/g/blink-dev/c/LoyzK8xTRME/m/yLR-K-siBQAJ) *(groups.google.com)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > Intent to Experiment: WebHID (Human Interface Device) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experime...
- [Add hid to features.md · w3c/webappsec – Slacker News](https://slacker.ro/2021/07/20/add-hid-to-featuresmd-w3cwebappsec-permissions-policy-at-1065d2d) *(slacker.ro)* *(Cites: `https://github.com/WICG/webhid/blob/master/EXPLAINER.md`)*
  > | `hid` | [Explainer](https://<strong>github.com/WICG/webhid/blob/master/EXPLAINER.md</strong>) | In [Origin Trial](https://developers.chrome.com/origintrials/#/view_trial/1074108511127863297) in Chrome 85-87 |

#### 📚 Platform Documentation & References

- [Add "WebHID" · Issue #5062 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/5062) *(github.com)*
- [WebHID API (Human Interface Device) · Issue #370 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/370) *(github.com)*
- [WebHID API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API) *(developer.mozilla.org)*
- [webhid/EXPLAINER.md at main · WICG/webhid](https://github.com/WICG/webhid/blob/main/EXPLAINER.md) *(github.com)*
- [HID: requestDevice() method - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/HID/requestDevice) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=index) (2147 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (36 found across 7 planned queries, 24 verified) · `Google Search Grounding (gemini-3.7-flash)` (0 found, 0 verified) · `Dev.to Community Blogs` (8 found, 19 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (1 items) · `Engine Bug Trackers` (0 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (2147 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

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

- **Momentum:** **High** (Activity Score: 210)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive**
- **Analysis:** WGSL fragment depth modifiers (`less`, `greater`) allow fragment shaders to explicitly declare depth modification constraints, preserving crucial hardware early-Z optimizations that were previously disabled upon writing to `@builtin(frag_depth)`. Formally integrated into the W3C WebGPU Shading Language specification via PR #6299, the capability ships enabled by default in Chrome 154. The addition closes a major rendering performance gap, bringing WGSL to parity with native conservative depth features found in GLSL, HLSL, and MSL.

**Key Recommendations & Takeaways:**
- Actionable Advice: WebGPU rendering pipelines that write custom fragment depths should gate the use of `@builtin(frag_depth, less)` / `@builtin(frag_depth, greater)` behind WGSL language extension checks (or conditional shader compilation) to leverage early-Z performance gains in supporting browsers while gracefully falling back to standard `frag_depth` elsewhere.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **17 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHp7_NH8ZKUFaGf_RoxcUTjSC7kWgPclJB7erwSARPnM3QPfJEvmYZyq36nE2Fabfx_To3_BWEVmGc5lSA8alqYEeq1UDm_cqComVN0p3iVS-6m8pyps6sBIP_Irzyb0AKbvAXuKwqk) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEjzE2BgYnfcvAsNQIOLdYJkSvEt9lgmBoJQG3SDDGo2Y8n5lXUsrSIn2yTnD1TaN5-0xVJg7BLTEycXFkugOD8n7TMsSIUIXMC3BWOelQzcao=) *(vertexaisearch.cloud.google.com)*
  > ### Overview: WebGPU WGSL Fragment Depth Modifiers  In WebGPU, writing to `@builtin(frag_depth)` in a WGSL fragment shader historically introduced a significant performance overhead. Because GPU drivers cannot predict wh...
- [docs.rs](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFyDcSR-MCV63fauhlTwGrFGYbIEOjxJ9fQlvRilxWUL5UhenHsxUUFMU1L6jssyxMrFhcAMBJv3n7Qm-DLsv1amD26htueBERrDHARs2OwOCmuiMRJIVhJMsDyweCVCQIbPAvnwVNUNOpdkg==) *(vertexaisearch.cloud.google.com)*
  > Features in wgpu - Rust Docs.rs wgpu-30.0.1 wgpu 30.0.1 Permalink Docs.rs crate page MIT OR Apache-2.0 Links Homepage Repository crates.io Source Owners jimblandy cwfitzgerald github:gfx-rs:wgpu Dependencies arrayvec ^0....
- [shader-slang.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHZP7y9ib_oSo1gDmoFhqSXEXXqOcd4xYxn-LAb-KFZIHB4WNBQxWUIAQ4QSw53lEysTrjKkRY7oK30VCD3oAwS9DSgpreGogjCMYzTjW_SvbAH4Zvzso-nlPz-uffLlS1W3f66KkmpEuEqbjNYVerrpmQkcQ==) *(vertexaisearch.cloud.google.com)*
  > Metal-Specific Functionalities | slang Table of Contents Slang User's Guide Introduction Why use Slang? Who is Slang for? Who is this guide for? Goals and Non-Goals Getting Started with Slang Installation Your first Slan...
- [Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 O...
- [[blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17276.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Alex Russell Mon, 24 Aug 2026 11:54:22 -0700 Are there really ...

#### 🔗 Inbound Citations & Reverse Links

- [Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17301.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Vladimir Levin Wed, 26 Aug 2026 07:55:09 -0700 LGTM3 O...
- [[blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17276.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5663304168112128`)*
  > [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Alex Russell Mon, 24 Aug 2026 11:54:22 -0700 Are there really ...
- [[blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17263.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Intent to Ship: WebGPU: WGSL Fragment Depth Chromestatus Mon, 24 Aug 2026 09:03:27 -0700 Contact emails [email&#16...
- [[blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17283.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/blob/main/proposals/fragment-depth.md`)*
  > [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth 'dan sinclair' via blink-dev Mon, 24 Aug 2026 20:15:11 -0700 T...
- [Re: [blink-dev] Re: Intent to Ship: WebGPU: WGSL Fragment Depth](http://www.mail-archive.com/blink-dev@chromium.org/msg17300.html) *(mail-archive.com)* *(Cites: `https://github.com/gpuweb/gpuweb/pull/6299`)*
  > On Monday, August 24, 2026 at 9:03:33 ...gpuweb/pull/6299 &lt;https://github.com/gpuweb/gpuweb/pull/6299&gt; *Summary* <strong>Adds the ability to provide a `less` or `greater` modifier to the `@builtin(frag_depth)` in W...

#### 📚 Platform Documentation & References

- [EXT_frag_depth extension - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/EXT_frag_depth) *(developer.mozilla.org)*
- [WGSL Proposal for fragment depth (less, greater, any) · Issue #5342 · gpuweb/gpuweb](https://github.com/gpuweb/gpuweb/issues/5342) *(github.com)*
- [GPU: wgslLanguageFeatures property](https://developer.mozilla.org/en-US/docs/Web/API/GPU/wgslLanguageFeatures) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webgpu%3A-wgsl-fragment-depth) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (22 found across 7 planned queries, 16 verified) · `Google Search Grounding (gemini-3.7-flash)` (4 found, 4 verified) · `Dev.to Community Blogs` (8 found, 18 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 items) · `Engine Bug Trackers` (0 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (0 items)
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

- **Momentum:** **High** (Activity Score: 180)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Iterator.prototype.includes" javascript"`, `""proposal-iterator-includes" tc39 stage"`, `"site:bugs.webkit.org "Iterator.prototype.includes" OR "iterator includes""`
- **Analysis:** The TC39 Iterator Includes proposal (`Iterator.prototype.includes`) has rapidly advanced to Stage 3, bringing the ergonomic simplicity of `Array.prototype.includes` with `SameValueZero` equality directly to lazy iterators. With Chrome shipping it in version 154 and both Safari Technology Preview and Firefox Nightly implementing support, the feature enjoys unanimous cross-engine alignment and is nearing full multi-browser interoperability.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams building for production can immediately leverage standard polyfills via `core-js` or `@es-shims/iterator-helpers`, while native usage can be adopted in progressive environments alongside modern Iterator Helpers.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **25 new articles/tutorials** published

#### 🐛 Engine Bug Trackers (Bugzilla)

- **Mozilla (Gecko):** [Bug #2025773: [meta] Iterator includes proposal](https://bugzilla.mozilla.org/show_bug.cgi?id=2025773) `[NEW]`
- **WebKit (Safari):** [Bug #6274: text repainting does not account for glyphs which draw outside the typographic bounds of the font](https://bugs.webkit.org/show_bug.cgi?id=6274) `[REOPENED]`
- **WebKit (Safari):** [Bug #16735: keyboard events created with DOM have keyCode and charCode of 0; thus they aren't handled correctly internally](https://bugs.webkit.org/show_bug.cgi?id=16735) `[NEW]`
- **WebKit (Safari):** [Bug #111179: [Cairo] Surface pointer passed to asNewNativeImage() might be freed.](https://bugs.webkit.org/show_bug.cgi?id=111179) `[NEW]`
- **WebKit (Safari):** [Bug #131637: Clean up unnecessary methods in the BackForwardClient interface](https://bugs.webkit.org/show_bug.cgi?id=131637) `[NEW]`
- **WebKit (Safari):** [Bug #138348: Some words are placed on top of each other in complex text layout](https://bugs.webkit.org/show_bug.cgi?id=138348) `[REOPENED]`

#### 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGrgJfcV4xRtuRTCdrjomQeYCXtw5oGMFrHIK6zFzwk4zu0SVCWrCAeW4C67JbhBP8bSZ16w0QLtswxLm7pmZwJ8t4oblnA_MCW5VDkmiSipxXAEBC_cTMruZSHrKMIf4A1r3izNTS4ig==) *(vertexaisearch.cloud.google.com)*
  > GitHub - tc39/proposal-iterator-includes: Array.prototype.includes but for iterators · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with an...
- [tc39.es](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEg4riDczYEDPKnT8ZK4X_Ga-tNP33u6B3hgF-HTemvwocZd5gA9Rz6HE7JYzmFMp5aF6wBAw7kIeVbTHZPdyV3MBe9ZUrucQrhtjrUGSm-RF3z5QtX8A3W0QOmgQzM-r6e) *(vertexaisearch.cloud.google.com)*
  > Iterator Includes Toggle shortcuts help ? Toggle "can call user code" annotations u Jump to search box / Toggle pinning of the current clause p Jump to the n th pin 1-9 Jump to the 10 th pin 0 Jump to the most recent lin...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGz3vnAxX1UuwGqAOoRWPwnU6Y6ntbufk79tZ6OLUDGDSJ9u_c5Ykz_z1-wwA-eoHrRx0sA6EEhYui4-fkRbDagOdFz3n50cpjziqJLaDYUmYp2xzY5wdvcf7fPxd3m6sZS) *(vertexaisearch.cloud.google.com)*
  > [JS] Ship Iterator Includes proposal · Issue #44838 · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFulfn9dEEWW4eTX-IMC1ev6biFsXQZ2yToN4kwYfqQXfKpCllOFgslLwa1FJicfe4I94L0h0Hv6RDNApBuT7Vzvnz3lDjcdVXe9pFkMRPKxIQ4b9hokG_UpfoRCPaAUfrHv9bmyZgrFKWqCR_ZswwSxxXplbTdmsYM1UWQto4AQ3rhoYZhnrXClS_qVCFPfK6-jOvHgvY0Rw==) *(vertexaisearch.cloud.google.com)*
  > Iterator.prototype.includes() - JavaScript | MDN Skip to main content Skip to search Toggle sidebar Web JavaScript Reference Standard built-in objects Iterator includes() Theme OS default Light Dark English (US) Remember...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGZpX9Bb0NIwGLkkiFt64kaGBNOGyXzOeDZGcMgEcBa3PsjsYMUWJlzpN5ysvPzdpJpP6bly1s_3695A_fqZeaMWfTHsBy990fFrMcyvRtdQVgu3n9GwQGaaZ2QRK1pWBPJIy3xpvmMNc_eb9bT4NNc-uxeoQT49PtrZXI=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Iterator Includes"  The **TC39 Iterator Includes proposal** (championed by Michael Ficarra) introduces `Iterator.prototype.includes(searchElement[, skippedElements])`. Functioning as the lazy-iterator cou...
- [tweakers.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGtVV7gcub_FGxnt3riwbXY84ve_8YJyzsiSGKnmIwkHSporGzZdTvfRVZ1NERIcMy0CUFAJ6OHIu6JaYxuFIaF8SsHANnhpTwSTWFQG86Q-e78pMN9JhAVPUKiaClRMyY39iH5umrlxyFa8tXc8CjpNv5e2Q==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of "Iterator Includes"  The **TC39 Iterator Includes proposal** (championed by Michael Ficarra) introduces `Iterator.prototype.includes(searchElement[, skippedElements])`. Functioning as the lazy-iterator cou...

#### 🔗 Inbound Citations & Reverse Links

- [Re: [blink-dev] Intent to Ship: Iterator Includes](http://www.mail-archive.com/blink-dev@chromium.org/msg17260.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5205192866922496`)*
  > /No information provided/ *Link ... was generated by Chrome Platform Status &lt;https://chromestatus.com&gt;. -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-dev&quot; gro...
- [Re: [blink-dev] Intent to Ship: Iterator Includes](http://www.mail-archive.com/blink-dev@chromium.org/msg17275.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-iterator-includes`)*
  > &gt; &gt; On Monday, August 24, 2026 ... &gt;&gt; https://tc39.es/proposal-iterator-includes &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>A TC39 proposal to allow the developer to ask whether an iterator yields &gt;&gt; ...
- [[blink-dev] Intent to Ship: Iterator Includes](http://www.mail-archive.com/blink-dev@chromium.org/msg17264.html) *(mail-archive.com)* *(Cites: `https://github.com/tc39/proposal-iterator-includes`)*
  > Explainer https://github.com/tc39/proposal-iterator-includes Specification https://tc39.es/proposal-iterator-includes Summary <strong>A TC39 proposal to allow the developer to ask whether an iterator yields a given value...

#### 📚 Platform Documentation & References

- [Iterator.prototype.includes() - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=iterator-includes) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (32 found across 7 planned queries, 4 verified) · `Google Search Grounding (gemini-3.7-flash)` (15 found, 14 verified) · `Dev.to Community Blogs` (8 found, 17 verified) · `Hacker News Algolia` (6 found, 0 verified) · `Standards Positions` (0 items) · `Engine Bug Trackers` (6 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (0 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 0

---

<a id="5108373464547328-responsively-sized-iframe"></a>
### [Responsively-sized &lt;iframe&gt;](https://chromestatus.com/feature/5108373464547328)

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

- **Momentum:** **High** (Activity Score: 180)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Responsively-sized <iframe> is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "For context, a lot of the discussions here:   * https://github.com/w3c/csswg-drafts/issues/1771  * https://github.com/w3c/csswg-drafts/issues/13584  *..."
- Standards Activity (W3C TAG): Latest discussion from @dandclark: "Thanks for sending this to the TAG! We had a few points of feedback.  One is that the opt-in from the iframe isn't scoped in any way. The explainer [p..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **16 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Responsively-sized iframes](https://github.com/WebKit/standards-positions/issues/653) [open] `venue: W3C CSS WG`, `topic: frames`, `from: Google`
- **Mozilla:** [Responsively-sized iframes](https://github.com/mozilla/standards-positions/issues/1394) [open] 
  > *Latest discussion from @emilio: "For context, a lot of the discussions here:   * https://github.com/w3c/csswg-drafts/issues/1771  * https://github.com/w3c/csswg-drafts/issues/13584  *..."*
- **W3C TAG:** [Other Spec Review: Responsively-sized iframes](https://github.com/w3ctag/design-reviews/issues/1223) [open] `Progress: pending external feedback`, `Review type: later review`, `Topic: CSS`, `Venue: CSS WG`
  > *Latest discussion from @dandclark: "Thanks for sending this to the TAG! We had a few points of feedback.  One is that the opt-in from the iframe isn't scoped in any way. The explainer [p..."*

#### 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHtznryfJiVdOwjHMLBFDPhsCD8F-ulmBPfvABTyKWcXoP7YOxCgZ8nYwm0x-MMRuId7XHxQSWMNr7apj7jfhUunIN8ykqaDtbyKhjjE167B3EJFm44v8DCwVmH03DZjXh2D70Rs88k) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFsER8wChbJDCPePIiZZ0SjSKfbglPhMrRiocL4gBZupsiDLz2cbRRm_JTiO9f1371Ya-K0oHV0QS0H3GxrdmVGBo-KTpTlJHShqODppm6T9J7_z-4AHA_oflOsfZKFlhrWLWXQFZdUKhG5e14N3vcb) *(vertexaisearch.cloud.google.com)*
  > Responsively-sized iframes · Issue #1394 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or w...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFR2mqGHXS-vNi5hP3hVEcuebyZISL-wKs23kWzBAqsPRM5jivQ7UYmYPlmdlCWKC_bxAJG8g4UzdeyjKeE-e4fTt0GyvbDjg9inkxXaZF4KLa4DtpWDTb2sX1TGsyP0zC3Y4d-_UqYYc0dvTG64NaaEUSfJfs7LmQbz2Y=) *(vertexaisearch.cloud.google.com)*
  > Window: requestResize() method - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Window requestResize() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGH0LHasJS6JVYOXmeVekwguWicBItWHj0VDsmN4zZ_MrvXJMpXl32GaKI-9tdsYKa5xeWQ5P6E1pOOkDPg0tdMVD5GK6OETw9evRkmQ7KM400jxpJH_JioxoVvvyOdhPcH1yxXxLY7ITPQbnQNTBfhudksD7dzAlLztWffaNj05xeo1EOhcpnBivC-8uT6pQg=) *(vertexaisearch.cloud.google.com)*
  > csswg-drafts/css-sizing-4/responsive-iframes-explainer.md at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with an...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFn20ruDikAuzIRSoq0bscI2zghkIJBx2VonWUn_PzG5JzU6z7-tgVQVmKc6eKcuA5jHW39bUucuQUPhVZ1i2No16H02rRZ6lb2SVhLKtwraUHas7xRAcolXj41f6vRwedLMt7jXPDxi-6tfa_LKIPWa0E2fP4QJL7P_gxb-HXsY7GLu9_yuR5Q) *(vertexaisearch.cloud.google.com)*
  > frame-sizing CSS property - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Properties frame-sizing Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGLBCWFgxEnrqg4ksdtYKIcDRQn3Ki8gtAYffu_nzdJicWQ2C79UAF3i8v0T9j7nh2ZR0w236sRcQajRzYfnKYQQGQiq3ZN-3Cf4yY6k4AjJtNANo7QKiNgLaDYIQjWJDUaJ8sEFMFEB94defp0iauiZgzCmVHDPaA=) *(vertexaisearch.cloud.google.com)*
  > Intent to Ship: Responsively-sized <iframe> Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Responsively...

#### 🔗 Inbound Citations & Reverse Links

- [[blink-dev] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13733.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > False &gt; &gt; Estimated milestones &gt; &gt; No milestones specified &gt; &gt; &gt; Link to entry on the Chrome Platform Status &gt; https://<strong>chromestatus.com/feature/5108373464547328</strong>?gate=5167068974153...
- [Intent to Prototype: Responsive iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/QirdSBIvM1k/m/rZdHOE59AQAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > https://<strong>chromestatus.com/feature/5108373464547328</strong>?gate=5167068974153728 · This intent message was generated by Chrome Platform Status. unread, May 20, 2025, 3:05:41 AMMay 20 ·  ·  ·  · Reply to author...
- [Responsively-sized <iframe> · Issue #4036 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4036) *(github.com · 2026-05-14T09:39:56)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > https://<strong>chromestatus.com/feature/5108373464547328</strong> · Reactions are currently unavailable · No one assigned ·
- [Re: [blink-dev] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13784.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > &gt;&gt; &gt;&gt; &gt;&gt;&gt; On Tuesday, 20 May 2025 ...-4/responsive-iframes-explainer.md &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Specification None &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Summary &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt...
- [[blink-dev] Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13731.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > Explainer https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md Specification None Summary <strong>Allow sites to opt into iframes having responsive sizing</strong> (sizing the &lt;if...

#### 📚 Platform Documentation & References

- [Responsively-sized <iframe> · Issue #4036 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4036) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=responsively-sized-%3Ciframe%3E) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (31 found across 7 planned queries, 6 verified) · `Google Search Grounding (gemini-3.7-flash)` (13 found, 12 verified) · `Dev.to Community Blogs` (8 found, 17 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (3 items) · `Engine Bug Trackers` (0 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (0 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

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

- **Momentum:** **High** (Activity Score: 170)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""FontFace.width" "font-width" csswg-drafts"`, `""font-width" descriptor "FontFace" width "blink-dev""`, `""font-width" descriptor "CSS Fonts 4" "WebKit" OR "Gecko" OR "Firefox" OR "Safari""`
- **Analysis:** The addition of the FontFace `width` attribute and the `@font-face` `font-width` descriptor brings Chromium into compliance with CSS Fonts 4 and CSS Font Loading specifications. These properties serve as modern, standardized aliases for the legacy `stretch` and `font-stretch` syntax without breaking existing font descriptors. With Gecko already supporting the aliasing WPT tests and WebKit aligned with the specification direction, cross-engine interoperability is solidifying.

**Key Recommendations & Takeaways:**
- Actionable Advice: Development teams can begin using `FontFace.width` and `font-width` for modern code clarity, but should maintain fallback to or continue using `font-stretch` / `FontFace.stretch` in cross-browser production code until Baseline status is fully achieved.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **16 new articles/tutorials** published

#### 📦 Polyfills & NPM Ecosystem

- [roboto-fontface](https://www.npmjs.com/package/roboto-fontface) `v0.10.0` — A simple package providing the Roboto fontface.
- [postcss-discard-unused](https://www.npmjs.com/package/postcss-discard-unused) `v9.0.0` — Discard unused counter styles, keyframes and fonts.

#### 📰 Ecosystem Blogs & Articles

- [Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)*
  > Please list open issues (e.g. links to known github &gt;&gt;&gt; issues in the project for the feature specification) whose resolution may &gt;&gt;&gt; introduce web compat/interop risk (e.g., changing to naming or struc...
- [[blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17203.html) *(mail-archive.com)*
  > Please list open issues (e.g. links to known github issues &gt;&gt; in the project for the feature specification) whose resolution may introduce &gt;&gt; web compat/interop risk (e.g., changing to naming or structure of ...
- [[blink-dev] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)*
  > Please list open issues (eg links ... API in a non-backward-compatible way). None Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5145402365050880</strong>?gate=5525688097570816 This ...
- [CSS Fonts Module Level 4](https://w3c.github.io/csswg-drafts/css-fonts-4) *(w3c.github.io)*
  > CSS Fonts Module Level 4 CSS Fonts Module Level 4 Editor’s Draft , 28 August 2026 More details about this document This version: https://drafts.csswg.org/css-fonts-4/ Latest published version: https://www.w3.org/TR/css-f...
- [font-stretch CSS at-rule descriptor - CSS | MDN](https://developer.cdn.mozilla.net/en-US/docs/Web/CSS/@font-face/font-stretch) *(developer.cdn.mozilla.net · 2020-07-22T00:00:00)*
  > Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0 · font-width = auto | &lt;&#x27;font-width&#x27;&gt;{1,2} &lt;font-width&gt; = normal | &lt;percentage [0,∞]&gt; | ultra-condensed | extra-condensed | co...

#### 🔗 Inbound Citations & Reverse Links

- [Re: [blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17223.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > Please list open issues (e.g. links to known github &gt;&gt;&gt; issues in the project for the feature specification) whose resolution may &gt;&gt;&gt; introduce web compat/interop risk (e.g., changing to naming or struc...
- [[blink-dev] Re: Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17203.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > Please list open issues (e.g. links to known github issues &gt;&gt; in the project for the feature specification) whose resolution may introduce &gt;&gt; web compat/interop risk (e.g., changing to naming or structure of ...
- [[blink-dev] Intent to Ship: FontFace width attribute and font-width descriptor](http://www.mail-archive.com/blink-dev@chromium.org/msg17165.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5145402365050880`)*
  > Please list open issues (eg links ... API in a non-backward-compatible way). None Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5145402365050880</strong>?gate=5525688097570816 This ...
- [csswg-drafts/css-fonts-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-fonts-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > csswg-drafts/css-fonts-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. ...
- [CSS Fonts Module Level 4](https://w3c.github.io/csswg-drafts/css-fonts-4) *(w3c.github.io)* *(Cites: `https://drafts.csswg.org/css-fonts-4/#font-width-prop`)*
  > CSS Fonts Module Level 4 CSS Fonts Module Level 4 Editor’s Draft , 28 August 2026 More details about this document This version: https://drafts.csswg.org/css-fonts-4/ Latest published version: https://www.w3.org/TR/css-f...

#### 📚 Platform Documentation & References

- [csswg-drafts/css-fonts-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-fonts-4/Overview.bs) *(github.com)*
- [CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4) *(w3.org)*
- [[css-fonts-4] [varfont] Problem setting up a "4-style family" with variable fonts · Issue #1289 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/1289) *(github.com)*
- [[css-fonts-4] Avoid font synthesis outside of variable range · Issue #7999 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7999) *(github.com)*
- [[css-fonts-4] Which type of font family names are system font names? · Issue #9292 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/9292) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=fontface-width-attribute-and-font-width-descriptor) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (16 found across 6 planned queries, 16 verified) · `Google Search Grounding (gemini-3.7-flash)` (0 found, 0 verified) · `Dev.to Community Blogs` (8 found, 5 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 items) · `Engine Bug Trackers` (0 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 2 verified) · `Web Platform Tests (wpt.fyi)` (0 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 0

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

- **Momentum:** **High** (Activity Score: 170)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** WebTransport headers and responseHeaders is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **17 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [WebTransport and WHIP-over-WebTransport - Fora Soft](https://www.forasoft.com/learn/video-streaming/articles-streaming/webtransport-whip) *(forasoft.com · 2026-05-28T00:00:00)*
  > WebTransport and WHIP-over-WebTransport Services Projects Cost Blog Ship Log Learn Demos Contacts Contact us Home › Learn › Video Streaming › Block 3. Contribution protocols (ingest) › WebTransport and WHIP-over-WebTrans...
- [webtransport package - github.com/propagamap/webtransport-server - Go Packages](https://pkg.go.dev/github.com/propagamap/webtransport-server) *(pkg.go.dev · 2025-05-27T00:00:00)*
  > webtransport package - github.com/propagamap/webtransport-server - Go Packages webtransport package module Version: v0.1.14 Opens a new window with list of versions in this module. Latest Latest This package is not in th...
- [h3_webtransport - Rust](https://docs.rs/h3-webtransport/latest/h3_webtransport) *(docs.rs)*
  > h3_webtransport - Rust Docs.rs h3-webtransport-0.1.2 h3-webtransport 0.1.2 Permalink Docs.rs crate page MIT 06 June 2026 Links Repository crates.io Source Owners darioalessandro github:hyperium:h3 Ruben2424 Dependencies ...
- [h3-webtransport — Rust network library // Lib.rs](https://lib.rs/crates/h3-webtransport) *(lib.rs · 2025-05-06T00:00:00)*
  > WebTransport: https://<strong>www.w3.org/TR/webtransport</strong>/#biblio-web-transport-http3 WebTransport over HTTP/3: https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/ Implementation of Webtransport prot...
- [chrome.webRequest | API | Chrome for Developers](https://developer.chrome.com/docs/extensions/reference/api/webRequest) *(developer.chrome.com)*
  > Note that: Once the session is established, extensions cannot observe or intervene in the session via the webRequest API. Modifying HTTP request headers in onBeforeSendHeaders is ignored. <strong>Redirects and authentica...
- [How to authenticate clients over WebTransport? - Stack Overflow](https://stackoverflow.com/questions/79675351/how-to-authenticate-clients-over-webtransport) *(stackoverflow.com)*
  > <strong>You need to add the token at the end of the URL, e.g. in as a query string parameter</strong>. WebTransport does not have other authentication support at the moment.

#### 🔗 Inbound Citations & Reverse Links

- [WebTransport · Issue #18 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/18) *(github.com · 2022-06-29T14:14:37)* *(Cites: `https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers`)*
  > WebTransport · Issue #18 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to ...
- [webtransport/index.bs at main · w3c/webtransport](https://github.com/w3c/webtransport/blob/main/index.bs) *(github.com)* *(Cites: `https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers`)*
  > webtransport/index.bs at main · w3c/webtransport · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...
- [WebTransport and WHIP-over-WebTransport - Fora Soft](https://www.forasoft.com/learn/video-streaming/articles-streaming/webtransport-whip) *(forasoft.com · 2026-05-28T00:00:00)* *(Cites: `https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers`)*
  > WebTransport and WHIP-over-WebTransport Services Projects Cost Blog Ship Log Learn Demos Contacts Contact us Home › Learn › Video Streaming › Block 3. Contribution protocols (ingest) › WebTransport and WHIP-over-WebTrans...
- [GitHub - adriancable/webtransport-go: Lightweight but fully-capable WebTransport server for Go · GitHub](https://github.com/adriancable/webtransport-go) *(github.com)* *(Cites: `https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers`)*
  > GitHub - adriancable/webtransport-go: Lightweight but fully-capable WebTransport server for Go · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed ...
- [webtransport package - github.com/propagamap/webtransport-server - Go Packages](https://pkg.go.dev/github.com/propagamap/webtransport-server) *(pkg.go.dev · 2025-05-27T00:00:00)* *(Cites: `https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers`)*
  > webtransport package - github.com/propagamap/webtransport-server - Go Packages webtransport package module Version: v0.1.14 Opens a new window with list of versions in this module. Latest Latest This package is not in th...

#### 📚 Platform Documentation & References

- [WebTransport · Issue #18 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/18) *(github.com)*
- [webtransport/index.bs at main · w3c/webtransport](https://github.com/w3c/webtransport/blob/main/index.bs) *(github.com)*
- [GitHub - adriancable/webtransport-go: Lightweight but fully-capable WebTransport server for Go · GitHub](https://github.com/adriancable/webtransport-go) *(github.com)*
- [WebTransport transport support? · Issue #788 · socketio/socket.io-client-java](https://github.com/socketio/socket.io-client-java/issues/788) *(github.com)*
- [Exposing headers of the CONNECT response · Issue #264 · w3c/webtransport](https://github.com/w3c/webtransport/issues/264) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=webtransport) (106 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (22 found across 6 planned queries, 17 verified) · `Google Search Grounding (gemini-3.7-flash)` (0 found, 0 verified) · `Dev.to Community Blogs` (8 found, 10 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 items) · `Engine Bug Trackers` (0 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (106 items)
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

- **Momentum:** **High** (Activity Score: 140)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""https://github.com/w3c/csswg-drafts/issues/14229" OR "CSSStyleValue" worker blink-dev"`, `""CSSStyleValue" "Worker" "chromestatus.com/feature/5114591051907072""`
- **Analysis:** Exposing the CSSStyleValue hierarchy to Worker contexts completes cross-browser alignment for CSS Typed OM Level 1 across all major engines. While Firefox and Safari previously supported these interfaces in background threads, Blink's shipment resolves a longstanding cross-thread inconsistency. This unlocks robust, interoperable off-main-thread CSS calculations and unit manipulation without runtime type mismatches.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams can safely leverage CSS Typed OM constructors (like CSSUnitValue, CSSKeywordValue, and CSSMathValue) inside Web Workers for background computations. Be mindful that static parser methods like CSSStyleValue.parse() remain Window-only and require explicit constructor instantiation in worker scripts.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [[blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17113.html) *(mail-archive.com)*
  > https://github.com/w3c/csswg-drafts/issues/14229 *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/5114591051907072</strong>?gate=6116938171416576 This intent message was generated by...
- [Re: [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17119.html) *(mail-archive.com)*
  > &gt;&gt; https://github.com/w3c/csswg-drafts/issues/14229 &gt;&gt; &gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt; https://<strong>chromestatus.com/feature/5114591051907072</strong>?gate=6116938171416576 ...
- [Working with the new CSS Typed Object Model | CSS and UI | Chrome for Developers](https://developer.chrome.com/docs/css-ui/cssom) *(developer.chrome.com · 2018-03-26T00:00:00)*
  > Working with the new CSS Typed Object Model | CSS and UI | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Viê...
- [CSSUnitValue interface - WebIDLpedia](https://dontcallmedom.github.io/webidlpedia/names/CSSUnitValue.html) *(dontcallmedom.github.io)*
  > [Exposed=(Window, Worker, PaintWorklet, LayoutWorklet)] interface CSSUnitValue : CSSNumericValue { constructor(double value, USVString unit); attribute double value; readonly attribute USVString unit; };
- [Creating a Typescript Project with Support for Web Workers?](https://stackoverflow.com/questions/78949923/creating-a-typescript-project-with-support-for-web-workers) *(stackoverflow.com)*
  > Variable &#x27;CSSNumericValue&#x27; must be of type &#x27;{ new (): CSSNumericValue; prototype: CSSNumericValue; parse(cssText: string): CSSNumericValue; }&#x27;, but here has type &#x27;{ new (): CSSNumericValue; proto...

#### 🔗 Inbound Citations & Reverse Links

- [[blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17113.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5114591051907072`)*
  > https://github.com/w3c/csswg-drafts/issues/14229 *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/5114591051907072</strong>?gate=6116938171416576 This intent message was generated by...
- [Re: [blink-dev] Intent to Prototype and Ship: Expose CSSStyleValue hierarchy to Worker contexts](http://www.mail-archive.com/blink-dev@chromium.org/msg17119.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5114591051907072`)*
  > &gt;&gt; https://github.com/w3c/csswg-drafts/issues/14229 &gt;&gt; &gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt; https://<strong>chromestatus.com/feature/5114591051907072</strong>?gate=6116938171416576 ...

#### 📚 Platform Documentation & References

- [CSSNumericValue: parse() static method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/parse_static) *(developer.mozilla.org)*
- [Using the CSS Typed Object Model - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API/Guide) *(developer.mozilla.org)*
- [CSS Typed Object Model API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API) *(developer.mozilla.org)*
- [CSSUnitValue - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/CSSUnitValue) *(developer.mozilla.org)*
- [CSSUnitValue: CSSUnitValue() constructor - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSSUnitValue/CSSUnitValue) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=expose-cssstylevalue-hierarchy-to-worker-contexts) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (13 found across 6 planned queries, 11 verified) · `Google Search Grounding (gemini-3.7-flash)` (0 found, 0 verified) · `Dev.to Community Blogs` (8 found, 5 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 items) · `Engine Bug Trackers` (0 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (0 items)
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

- **Momentum:** **High** (Activity Score: 120)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Local Network Access" "Background Fetch""`, `""Local Network Access restrictions for Background Fetch""`, `""Intent to Ship: Local Network Access restrictions for Background Fetch""`
- **Analysis:** Chromium is closing a notable security bypass by enforcing Local Network Access (LNA) restrictions on the Background Fetch API starting in Chrome 154, ensuring requests to private or loopback addresses honor the same permission checks as standard Fetch. This change strictly aligns Background Fetch with the WHATWG Fetch specification and prevents web origins from circumventing local network boundaries. Cross-engine consensus strongly supports hardening the boundary between public web contexts and local intranets, even as broader LNA specification details continue to mature across standards bodies.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit existing service worker implementations using Background Fetch to verify whether they target local network or loopback endpoints, and ensure required LNA preflight headers and origin permissions are configured. Enterprise environments should leverage policies such as `LocalNetworkAccessAllowedForUrls` or `LocalNetworkAccessRestrictionsTemporaryOptOut` to manage trusted internal origins prior to the rollout.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @christhompson: "We aren't sure about venue yet but it has been on my mind some. Some parts will just be merged into the various relevant specifications, but there def..."
- Standards Activity (Mozilla): Latest discussion from @dveditz: "We're presumably "positive" on this since we've implemented most of it and enabled it on Nightly. What are the formal steps needed at this point?..."
- Community package available: [react-native-fetch-api](https://www.npmjs.com/package/react-native-fetch-api) (v3.0.0) for progressive enhancement.

#### ⚡ What Happened This Week

- 📰 **11 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Request for Position: Local Network Access](https://github.com/WebKit/standards-positions/issues/520) [open] `topic: networking`, `venue: WICG`, `topic: meaningful user consent`, `concerns: venue`, `from: Google`
  > *Latest discussion from @christhompson: "We aren't sure about venue yet but it has been on my mind some. Some parts will just be merged into the various relevant specifications, but there def..."*
- **Mozilla:** [Local Network Access](https://github.com/mozilla/standards-positions/issues/1260) [open] `venue: W3C CG`, `team: Networking`
  > *Latest discussion from @dveditz: "We're presumably "positive" on this since we've implemented most of it and enabled it on Nightly. What are the formal steps needed at this point?..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **WebKit (Safari):** [Bug #154916: WKWebView needs feature to allow file:// subresources](https://bugs.webkit.org/show_bug.cgi?id=154916) `[NEW]`
- **WebKit (Safari):** [Bug #171934: Don't treat loopback addresses (127.0.0.0/8, ::1/128, localhost, .localhost) as mixed content](https://bugs.webkit.org/show_bug.cgi?id=171934) `[NEW]`

#### 📦 Polyfills & NPM Ecosystem

- [is-network-error](https://www.npmjs.com/package/is-network-error) `v1.3.2` — Check if a value is a Fetch network error
- [react-native-fetch-api](https://www.npmjs.com/package/react-native-fetch-api) `v3.0.0` *(Verified Polyfill)* — A fetch API polyfill for React Native with text streaming support.

#### 📰 Ecosystem Blogs & Articles

- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF_12jbl3KoIJnG22RaFc9BxXnW4dwtzg2hyuSGLMrEPVVa3_ZZ0ATD1iGIgOUKZzhT-L1W9Y2BA2eDYUhcxyGIpFZf4MuvoNY6H4vB6dlHFQLrAR2ODdXUgSWuMF1qVlsMCmi3xuOrJqnVPa83c9P7Uf7zccsN1Ev0nQiu6348dnnEemOD_rY=) *(vertexaisearch.cloud.google.com)*
  > Intent to Ship: Local Network Access restrictions for Background Fetch Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; I...
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHWoDqUaH-H7kwJPtmOKjuj3BAkV1O0VLcXjPcy-UEOlGUr90ydrQ4M2ppyOqdqr2Y3pLxanduaVAr7dHR7yZYudn2sMl34Wwq-05FdG4XFfNeF_xz-gG7Dr9ICCZ2ay9Iz3i6llS_VF_h4v8sqjUSw0G3Ok5UWcDN9fs-vVZfbzGJ9vQTNBDaCR4T7uacjMzlT_7NXDKLcQj31PMSK9MOh) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Web Platform Feature  Chromium's implementation of the **Background Fetch API** is closing a security loophole by enforcing **Local Network Access (LNA)** restrictions and standard Fetch specification ...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGrcJLFAiV8ubTap7qoMjLp2d4vpj4QJZlyIIXzrTTdFIKFyVGX_1tHLixlZYx9aA76Zih57m0KPIufHtJ2oMiRJHZUgNcVaK58p9fDF3HB6lHZcEaC0IVynoYo5R-tmdzGlqSehiuH2tzWYe8jc-QACUkcqLQU6_BB0rNPJO9g) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Web Platform Feature  Chromium's implementation of the **Background Fetch API** is closing a security loophole by enforcing **Local Network Access (LNA)** restrictions and standard Fetch specification ...
- [steeleobrienconsulting.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE8Y3lcdZnu0fOh4cl8cTRJIIKJEn9wDo9h4peTNM_3U6MS8ulArnP8_OXrvIUNIuzrmkdw_2t2GqmG6M_UiVBidRbqL7RWzOdoaV5UxvPY09PpKiq6fsQVF4NYKpf8QVGriwoA2HLviR748C_tS_iv3oaITBEnl6RNtA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Web Platform Feature  Chromium's implementation of the **Background Fetch API** is closing a security loophole by enforcing **Local Network Access (LNA)** restrictions and standard Fetch specification ...
- [chromeenterprise.google](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFCZjWOWfBHZgvO0agsj4cGfVwTHmgS_vbNyq5WpEbPzck2W79tIW1V_wbAA6P7eduF0iU8KIDzWy-kGhIFEyHCcjnPvS1RA4yUtKPfUySr-YfGLiTB1AXpmGFPS6XtE-wS8hZI1VEUxUf-8SRZ34d4iteU6TR6C2Zec77IKbKqZqnFfn0sFXaY_hMZBWmXL_8=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Web Platform Feature  Chromium's implementation of the **Background Fetch API** is closing a security loophole by enforcing **Local Network Access (LNA)** restrictions and standard Fetch specification ...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEPyBj2-AsPefJCuovLRYkfLamPb98cmUB62Czv1gAyyZM882_ZgSPrj3umlvLwMJdQAYvUUCBXWqb9uHvSLcXYMDX0oZ60wzbMxQzz170x1qJe6xwdRDLRY5ZRbgrJO8emmcMhrDH1jlPgkxb-3IUXqCNH2nNROPp3sbgZ8LgmVeb7oT9biIdejCatiIREPyOT0cs8B4IVSrhsRN_zGC_Wn2CDfvUNXQVy4e-beA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Web Platform Feature  Chromium's implementation of the **Background Fetch API** is closing a security loophole by enforcing **Local Network Access (LNA)** restrictions and standard Fetch specification ...

#### 🔗 Inbound Citations & Reverse Links

- [Re: [blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17224.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > &gt;&gt; &gt;&gt; *Link to entry on the Chrome ... by Chrome Platform Status &gt;&gt; &lt;https://chromestatus.com&gt;. &gt;&gt; &gt; -- &gt; <strong>You received this message because you are subscribed to the Google Gro...
- [[blink-dev] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > This brings Chromium&#x27;s implementation into alignment with the intent of the Background Fetch spec (which delegates security policy enforcement to the Fetch spec). Link to entry on the Chrome Platform Status https://...
- [[blink-dev] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6225598451154944`)*
  > &gt; &gt; *Link to entry on the Chrome ... generated by Chrome Platform Status &gt; &lt;https://chromestatus.com&gt;. &gt; -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-...

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=background-fetch) (18 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (33 found across 6 planned queries, 4 verified) · `Google Search Grounding (gemini-3.7-flash)` (12 found, 6 verified) · `Dev.to Community Blogs` (8 found, 10 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 items) · `Engine Bug Trackers` (2 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 2 verified) · `Web Platform Tests (wpt.fyi)` (18 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 8

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

- **Momentum:** **High** (Activity Score: 120)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Cautiously Optimistic**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Private Verification Tokens" site:github.com/explainers-by-googlers"`, `""Private Verification Tokens" explainer Chrome"`, `""Private Verification Tokens" Mozilla standards-positions"`, `""Private Verification Tokens" WebKit standards position"`
- **Analysis:** Private Verification Tokens (PVT) is a Chromium proposal entering Origin Trial designed to mitigate aggressive CAPTCHA and bot friction in private browsing by enabling a low-entropy, one-way transfer of trust from regular browsing sessions. The feature addresses growing anti-abuse false positives in Incognito mode using cryptographic blinded tokens, though it is currently limited to Chrome's ecosystem while wider cross-vendor efforts develop.

**Key Recommendations & Takeaways:**
- Actionable Advice: Teams managing high-friction challenge pages should test PVT within Chrome Origin Trials as an optional progressive enhancement for incognito traffic, while keeping verification infrastructure decoupled and aligned with emerging cross-browser standards.
- In active Origin Trial in Chrome 154. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Explainer for the Private Verification Tokens" (2 points, 0 comments).

#### ⚡ What Happened This Week

- 📰 **17 new articles/tutorials** published

#### 💬 Community Discussions & Developer Reactions

- [Explainer for the Private Verification Tokens](https://news.ycombinator.com/item?id=47760044) — *Hacker News (2 pts, 0 comments)*

#### 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF56RvgDJCM5Tds6pg1BZ3g-uWsSB0gZ46r8mFl1tbMyjKIUKGZUCYE7wxkcssC4ku2h5FwiW4ipTQBblUn5QTZENiv4W4p-MjBjd41cxP6eIA_ecqw4Z13IriXNJRmBDMDPyQIFdAl_jB4P1DwzHHsfTFVVVaXy1-LEXY=) *(vertexaisearch.cloud.google.com)*
  > GitHub - explainers-by-googlers/private-verification-tokens: Private Verification Tokens (PVT) is a low-entropy mechanism for users to transfer the trust they have established in regular browsing into private browsing mo...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFcYbbmwrd3wU2264f2fMxFbBLucKTEgMJpIlBTB1QCifEvNRugOuHRF76rDYJB9Wh8-ie_p6Z9qgG55lmBzGLT3JHCwnNztbu47grvy7CYbyrXfPycjGCM7CQNH-jYIMxU5FikiLRf) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHgZIJM2vIUybH-LEm-gwB2uLAx6JP2Upf8qvjy7cPHVtPg4XO2bIVvoRKdUAWgnwwe82dDUQ-KVrm5gr2wtr4Z5FqZhqKw6-42q9tIbvE_11xP2TI8uzJJuB-cGd4O5NGG6Ryo1f_QA4JFTv4q6dkHsQ==) *(vertexaisearch.cloud.google.com)*
  > Private Verification Tokens · Issue #3916 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGPnrYJJ837lY4AdPzvlCjn-jVgMexubRxV_AEoF8G_Klzqm9UEOeZbZcmOoH9fmz1kdT5zwaMG12iCrWhEygo_mXm0WEzsOclf-8fABsX4eXIgUHxigAijjJBDQp8=) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Private Verification Tokens (PVT)  **Private Verification Tokens (PVT)** is a proposed Web Platform API and cryptographic trust-transfer mechanism designed to alleviate anti-bot friction (such as CAPTCHAs a...
- [apple.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFgmb-wvBQNwr7QKra8DhRV5FFAzDlGj4tLFPS2MGUl9Aue6Vk1vg2k_JCLEUwRhqgYJ52PB0CHjC9K3aDOgmSx9YPerGPE21_EswE6uWHYWsQj-ZYi5c-ZmIJNePy-u5Edb6A=) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Private Verification Tokens (PVT)  **Private Verification Tokens (PVT)** is a proposed Web Platform API and cryptographic trust-transfer mechanism designed to alleviate anti-bot friction (such as CAPTCHAs a...
- [friendlycaptcha.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFNI70bg-quEUTJtaztW0SCzG9uUEnxjqK1lrZqZ7nCDobJi7hg2uVvicaYajqRkp2A7CUxyWL1f8bvU7BmRNdZqvkEcRQd4mUtzrG0bW5B-g1bRWr5q5lpd-udnA2yeLK04rkhJ2UvhxYMpeJ4PpQMqmMvttdInu5-t-A=) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Private Verification Tokens (PVT)  **Private Verification Tokens (PVT)** is a proposed Web Platform API and cryptographic trust-transfer mechanism designed to alleviate anti-bot friction (such as CAPTCHAs a...

#### 🔗 Inbound Citations & Reverse Links

- [Re: [blink-dev] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17231.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210457816924160`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; *Flag name on about://flags* &gt;&gt;&gt; kEnablePrivateVerificationTokens &gt;&gt;&gt; &gt;&gt;&gt; *Finch feature name* &gt;&gt;&gt; kEnablePrivateVerificationTokens ...
- [[blink-dev] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17179.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6210457816924160`)*
  > True Tracking bug https://crbug.com/500396188 Launch bug https://launch.corp.google.com/launch/4465636 Estimated milestones Origin trial desktop first 154 Origin trial desktop last 165 Origin trial Android first 154 Orig...
- [[blink-dev] Intent to Prototype: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg16306.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/private-verification-tokens`)*
  > Explainer https://github.com/e... Private Verification Tokens (PVT) is <strong>a low-entropy mechanism for users to transfer the trust they have established in regular browsing into private browsing mode to reduce their ...
- [Re: [blink-dev] Intent to Experiment: Private Verification Tokens](http://www.mail-archive.com/blink-dev@chromium.org/msg17207.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/private-verification-tokens`)*
  > &gt;&gt; &gt;&gt; *Origin Trial documentation link* &gt;&gt; https://<strong>github.com/explainers-by-googlers/private-verification-tokens</strong> &gt;&gt; &gt;&gt; *Risks* &gt;&gt; &gt;&gt; &gt;&gt; *Interoperability a...

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=private-verification-tokens) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (19 found across 6 planned queries, 4 verified) · `Google Search Grounding (gemini-3.7-flash)` (10 found, 8 verified) · `Dev.to Community Blogs` (8 found, 12 verified) · `Hacker News Algolia` (8 found, 1 verified) · `Standards Positions` (0 items) · `Engine Bug Trackers` (0 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (0 items)
- **Content Inspected:** Spec: ○ · Explainers: 1 · Standards Comments Read: 0

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

- **Momentum:** **High** (Activity Score: 120)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""window.setShape" "unframed""`, `""Window Shape API" "setShape" OR "Isolated Web Apps""`
- **Analysis:** The Window Shape API is a specialized capability shipping in Chromium enabling allowlisted Isolated Web Apps (IWAs) on ChromeOS to render non-rectangular and non-contiguous window boundaries via `window.setShape`. Requiring `unframed` display mode and the `window-management` permission, the API is tailored specifically for enterprise desktop widgets, overlays, and floating native-like panels. Because it is explicitly scoped to ChromeOS IWAs, it sits outside standard cross-browser web baseline tracks.

**Key Recommendations & Takeaways:**
- Actionable Advice: Web teams building broad-reach PWAs should not rely on this API; instead, design applications to gracefully degrade into standard rectangular windows. For teams specifically targeting managed ChromeOS enterprise environments via IWAs, verify that the `window-management` permission and `unframed` mode requirements are met before invoking `window.setShape`.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @morsssss: "Like Mike says - thanks for offering this feedback!  As you can imagine, quite a bit of work has happened since I posted this request last June. We've..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **14 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **Mozilla:** [Window Management](https://github.com/mozilla/standards-positions/issues/542) [open] 
  > *Latest discussion from @morsssss: "Like Mike says - thanks for offering this feedback!  As you can imagine, quite a bit of work has happened since I posted this request last June. We've..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **WebKit (Safari):** [Bug #6148: WebKit doesn't shape characters (like Arabic) across style changes](https://bugs.webkit.org/show_bug.cgi?id=6148) `[NEW]`
- **WebKit (Safari):** [Bug #35211: SVG should support full-scene antialiasing](https://bugs.webkit.org/show_bug.cgi?id=35211) `[UNCONFIRMED]`
- **WebKit (Safari):** [Bug #59693: [Feature Request] Need SpellCheck API](https://bugs.webkit.org/show_bug.cgi?id=59693) `[REOPENED]`
- **WebKit (Safari):** [Bug #81270: FileApi does not handle files with NFD encoded umlaut in file name](https://bugs.webkit.org/show_bug.cgi?id=81270) `[UNCONFIRMED]`
- **WebKit (Safari):** [Bug #129333: WaveShaperNode interpolation does not match specification](https://bugs.webkit.org/show_bug.cgi?id=129333) `[NEW]`

#### 📰 Ecosystem Blogs & Articles

- [googlesource.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHpCcM_ArAvDzn3OroQrohHN7plOaUVnUwHmomdimaS-H9vzr9WjCwfyZ41zURO45X-EQmLgGnCItqwiVKoH8MeiB9608rTj4gLl3mJVzdRBerfLTVRfjtcmIbZH96hx6GJcF_mvGrfYQDz6LzHE2taAtlTBNLvpKRmzXMZVCMZDvEROGmXnjVSU2q9VEamr-7nna83-GQ=) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the Window Shape API?  The **Window Shape API** allows allowlisted **Isolated Web Apps (IWAs)** running on **ChromeOS** to define customized, non-rectangular, and non-contiguous window boundaries.   ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHw5BQX5nACb7lX2fav9mDDuNVmrxDrdRofe5RX6l4aYbboeNF9Ir4lFsNfyiqxCPhVz9k3KQ8EAVXDHGgzA3klBoCVV0vhRPKhD6aYp36_u7fOR8Pblkge2FBi35VXIejbbeO1m1V0) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the Window Shape API?  The **Window Shape API** allows allowlisted **Isolated Web Apps (IWAs)** running on **ChromeOS** to define customized, non-rectangular, and non-contiguous window boundaries.   ...
- [mozaic.fm](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEA_K540h8SloLJKbrDCrzu4b2KIKf14ilqNJR63O4Fz-lXni3D-U_lNtVOpa4ErTg07KxrY87xAooboLVmVGcfl5AoE5fY94_YRVa0ct0g6yvJrdh5dy45YHWzP7ix7UjeFEM1urId8u5tGQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the Window Shape API?  The **Window Shape API** allows allowlisted **Isolated Web Apps (IWAs)** running on **ChromeOS** to define customized, non-rectangular, and non-contiguous window boundaries.   ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEf6kUsur54ddqZd-jqIDj2rvFZ-c-KQdbZkSjFKd8W-vGD3CMphYuu0DdCiKtt5QeufL6hUkcN3zjLk7aNgAVistNPvN4_LxNmdmXuOAogFSY6aOzIx134NpzB7PsD2tdt_jhY) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the Window Shape API?  The **Window Shape API** allows allowlisted **Isolated Web Apps (IWAs)** running on **ChromeOS** to define customized, non-rectangular, and non-contiguous window boundaries.   ...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGe0A_ZX3_lQLh3qdjvVD0xz2YN9LEzmH_Pf-hscdMiQUA-Ib-FWz4o3rraRT6HMYMATR9Orx_rURquxkE2W36iLwdebPtjRkhC__LS5p_orsNaGzKHFd2OROp9a-eqqTZW3b6VsqGY) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the Window Shape API?  The **Window Shape API** allows allowlisted **Isolated Web Apps (IWAs)** running on **ChromeOS** to define customized, non-rectangular, and non-contiguous window boundaries.   ...
- [chromeenterprise.google](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFC-LbHfKwI9PgvDTEnDdb7rNOylLAdIQhmCaHiO3A8lF3Mj5cRps8BfJ5O7wi5FkBb2tKMCyIO3VRxJ8qeqMHWBqtrbC_ENFvc59N74sXKg60Q8nczmZFR8MVYw6X7IjWJjFbS3MUIGxb3DMICzsq_6HcMWVdVhVat) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the Window Shape API?  The **Window Shape API** allows allowlisted **Isolated Web Apps (IWAs)** running on **ChromeOS** to define customized, non-rectangular, and non-contiguous window boundaries.   ...

#### 🔗 Inbound Citations & Reverse Links

- [[blink-dev] Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16945.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > Explainer https://github.com/e...ab=t.0#heading=h.pcgro84kqnh3 Summary Window Shape API <strong>enables allowlisted [Isolated Web Apps](https://chromeos.dev/en/web/isolated-web-apps) on ChromeOS to customize their window...
- [Re: [blink-dev] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16974.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > &gt;&gt; &gt;&gt; Best, &gt;&gt; &gt;&gt; Alex &gt;&gt; &gt;&gt; On Wednesday, July 8, 2026 at 9:58:26 AM UTC-7 Chromestatus wrote: &gt;&gt; &gt;&gt;&gt; *Contact emails* &gt;&gt;&gt; [email protected], [email protected]...
- [[blink-dev] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16965.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > &gt; &gt; Best, &gt; &gt; Alex &gt; &gt; On Wednesday, July 8, 2026 at 9:58:26 AM UTC-7 Chromestatus wrote: &gt; &gt;&gt; *Contact emails* &gt;&gt; [email protected], [email protected] &gt;&gt; &gt;&gt; *Explainer* &gt;&...
- [Re: [blink-dev] Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg17269.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/chromeos-iwa-apis/blob/main/window-shape-explainer.md`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Thanks, &gt;&gt;&gt; Rick &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt; On Mon, Jul 20, 2026 at 5:17 PM edmanp via Chromestatus &lt; &gt;&gt;&gt; [email protected]&gt; wrote: &gt;&gt;&gt; &gt;&gt;&gt; ...
- [[blink-dev] Re: Intent to Ship: Window shape API](http://www.mail-archive.com/blink-dev@chromium.org/msg16964.html) *(mail-archive.com)* *(Cites: `https://explainers-by-googlers.github.io/chromeos-iwa-apis`)*
  > Best, Alex On Wednesday, July 8, 2026 at 9:58:26 AM UTC-7 Chromestatus wrote: &gt; *Contact emails* &gt; [email protected], [email protected] &gt; &gt; *Explainer* &gt; &gt; https://github.com/explainers-by-googlers/chro...

#### 🧪 Interactive Demos & Samples

- [Window Shape API Demo](https://github.com/paulinagacek/Set-Shape-demo)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=window-shape-api) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (17 found across 7 planned queries, 6 verified) · `Google Search Grounding (gemini-3.7-flash)` (8 found, 6 verified) · `Dev.to Community Blogs` (8 found, 12 verified) · `Hacker News Algolia` (8 found, 0 verified) · `Standards Positions` (1 items) · `Engine Bug Trackers` (5 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (7 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (0 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

---

<a id="6209615938322432-light-dismiss-improvements-for-popovers-and-dialogs"></a>
### [Light dismiss improvements for popovers and dialogs](https://chromestatus.com/feature/6209615938322432)

- **Milestone:** Chrome 154 (Enabled by default)
- **ChromeStatus:** [chromestatus.com/feature/6209615938322432](https://chromestatus.com/feature/6209615938322432) · [chromestatuslite.com/feature/6209615938322432](https://chromestatuslite.com/feature/6209615938322432)
- **Specification:** [https://github.com/whatwg/html/pull/11536](https://github.com/whatwg/html/pull/11536)
- **Chromium Bug:** [https://issues.chromium.org/issues/408010435](https://issues.chromium.org/issues/408010435)
- **Browser Signals:** Chrome: `Proposed` · Firefox: `No signal` · Safari: `No signal`

#### 📝 Overview

Improves and simplifies the light dismiss behavior for popovers and dialogs to fix a few bugs. "Light dismiss" is the behavior where clicking outside of a popover or dialog closes it. The fixed bugs include making scrolling gestures on touch screens no longer trigger light dismiss and making right clicks no longer trigger light dismiss.

The underlying mechanism of this change is that the browser will use click events to trigger light dismiss instead of a combination of pointerdown and pointerup events.

> **Motivation:** We need to fix these bugs with light dismiss:
https://issues.chromium.org/issues/408010435
https://issues.chromium.org/issues/425579196

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **High** (Activity Score: 110)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Light dismiss improvements for popovers and dialogs is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **11 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFBixj4gwY3v8GKfbQXQS8vk7Z4Je0oKFntMwTuz4u42C9MMQifBqdMYkObCyV1Fosmer37R6j2yhETn4Vb-QW0ZinD-TidWmZE1hDOBsVPfpJIci2oBdvYzjyo46GzOQzEminkU1bKy0l3vDSxTw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss improvements for popovers and dialogs"** (tracked in Chromium under the `LightDismissFromClick` runtime feature and WHATWG HTML PR #11536) refactors how browsers detect and tr...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHEcX5etd2SnNPerY6BLzjt5tpYtAqIFJw_1mcRKn5KlIS5Ov1YjRLxR2Maa-rBgzOerjtM213aDYbrO8QcUSKH6WOzuUyHNad6WmGcZgaRnp39G-DKd5v9hX38q7e6EpS8NF_VWkuIxBKKqpcm9FX3qlAvTLzQqw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss improvements for popovers and dialogs"** (tracked in Chromium under the `LightDismissFromClick` runtime feature and WHATWG HTML PR #11536) refactors how browsers detect and tr...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGZziSMdzPj0d2UKj8mlMrwKq_J8AOFf7NkqjQkslJdgj56Bo3egU9syCvmoVTVeIKCnTYRBHslcGnpPTfI4F29p4CVKb8gzGJRPkyL7be742wkhzZIaJcn30356-WjRxQlT2_bUEqH) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss improvements for popovers and dialogs"** (tracked in Chromium under the `LightDismissFromClick` runtime feature and WHATWG HTML PR #11536) refactors how browsers detect and tr...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH19zftU9b89ADZe_y0HebKdFoBEsIC26akCkdHwnDdYFb-YzNSJ5BcF4YGl3N6P5a0ZRepsvrxcpBNtV8lJ3MP8XrjibZm2tA4Hl79K9EM9rEnlhXATY45QwZfva3gv9N6VTTaMOd_ZKpg5qNEXeeamwXDAMw=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss improvements for popovers and dialogs"** (tracked in Chromium under the `LightDismissFromClick` runtime feature and WHATWG HTML PR #11536) refactors how browsers detect and tr...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGSSzXHjItx7hCGzLC8XHTKYhdxVxbuEXK7bJAJumd_Mg3GyYPfJ-HJ9EEQvILU1udqFoKpOBXMZ06YNmzOWNPu-4UqtLUTgpkNZW3hmRuv3nD9cQEO4fv-Fp9Zu4B4VMBnTPYq5US7NQIkK2GTWXl6GyXh_rHHzZ8b90DjY84gNqHYT4It19u_zj3S) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss improvements for popovers and dialogs"** (tracked in Chromium under the `LightDismissFromClick` runtime feature and WHATWG HTML PR #11536) refactors how browsers detect and tr...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHp1PNBSrS0AZXXlyeBjFFEe0Ph-HSvKn4a3yoFhU_Uf7pdu4IljSqXzdAa8vIdOs0s2TgLc87fKNl9NkR8LcXzdKIMCbgDqlE1zvqCdNLXTeVTHCFb3taj8UcOJGwkoXGIw6WtOzZm8bOtEyREqe6RfUu77P6BokDbyZoaw_I_AmU=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Light dismiss improvements for popovers and dialogs"** (tracked in Chromium under the `LightDismissFromClick` runtime feature and WHATWG HTML PR #11536) refactors how browsers detect and tr...

#### 🔗 Inbound Citations & Reverse Links

- [[blink-dev] Web-Facing Change PSA: Light dismiss improvements for popovers and dialogs](http://www.mail-archive.com/blink-dev@chromium.org/msg17139.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6209615938322432`)*
  > *No information provided* ... on Android 145 Shipping on WebView 153 *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/6209615938322432</strong> This intent message was generated by C...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-17 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0002.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/11536`)*
  > (4 by emilio, josepharhar) ... Expand disabled form control event handling spec text (1 by josepharhar) https://github.com/whatwg/html/pull/12219 [agenda+] - #11536 Change light dismiss to use click events (1 by josephar...

#### 📚 Platform Documentation & References

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-17 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0002.html) *(lists.w3.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=light-dismiss-improvements-for-popovers-and-dialogs) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (25 found across 7 planned queries, 2 verified) · `Google Search Grounding (gemini-3.7-flash)` (16 found, 9 verified) · `Dev.to Community Blogs` (8 found, 10 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 items) · `Engine Bug Trackers` (0 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (0 items)
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
- **Developer Sentiment:** **Neutral**
- **Analysis:** Algorithm Updates in WebCrypto is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and neutral developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."
- Standards Activity (Mozilla): Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **5 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Modern Algorithms in WebCrypto](https://github.com/WebKit/standards-positions/issues/641) [closed] `position: neutral`, `venue: WICG`
  > *Latest discussion from @twiss: "Hi :wave: Apologies for the late response, I was OOO until now.  And, thanks for the standards position!  Regarding Argon2: I think it would be reason..."*
- **Mozilla:** [Request for Mozilla Position on Modern Algorithms in WebCrypto](https://github.com/mozilla/standards-positions/issues/1282) [closed] `venue: W3C CG`, `position: neutral`, `concerns: compatibility`, `concerns: venue`, `concerns: interoperability`, `concerns: performance`, `concerns: usability`, `concerns: API design`
  > *Latest discussion from @martinthomson: "We generally view this neutrally.  The cryptographic primitives in this set are broadly good, though we have little cause to implement some of those i..."*

#### 🐛 Engine Bug Trackers (Bugzilla)

- **WebKit (Safari):** [Bug #133122: [META] [GTK] Implement WebCrypto SubtleCrypto interface](https://bugs.webkit.org/show_bug.cgi?id=133122) `[REOPENED]`

#### 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype:...
- [[blink-dev] Ready for Developer Testing: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16678.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary <strong>Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in ...
- [[blink-dev] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16785.html) *(mail-archive.com)*
  > Explainer No information provided Specification https://wicg.github.io/webcrypto-modern-algos Summary <strong>Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms available in ...
- [Algorithm Updates in WebCrypto](https://chromestatus.com/feature/5198951632470016) *(chromestatus.com · 2025-10-10T00:00:00)*
  > We cannot provide a description for this page right now
- [Re: [blink-dev] Intent to Experiment: Algorithm Updates in WebCrypto](http://www.mail-archive.com/blink-dev@chromium.org/msg16786.html) *(mail-archive.com)*
  > *Explainer* /No information provided/ *Specification* https://wicg.github.io/webcrypto-modern-algos *Summary* <strong>Add post-quantum cryptography and a common symmetric AEAD to the set of cryptographic algorithms avail...

#### 🔗 Inbound Citations & Reverse Links

- [Intent to Prototype: Algorithm Updates in WebCrypto](https://groups.google.com/a/chromium.org/g/blink-dev/c/KluNhawvzgM/m/moAiFVVRBgAJ) *(groups.google.com · 2025-10-10T00:00:00)* *(Cites: `https://chromestatus.com/feature/5198951632470016`)*
  > Intent to Prototype: Algorithm Updates in WebCrypto Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype:...
- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com · 2025-08-06T12:55:07)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings...
- [script: Implement WebCrypto encapsulation and decapsulation with ML-KEM by kkoyung · Pull Request #41617 · servo/servo](https://github.com/servo/servo/pull/41617) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement WebCrypto encapsulation and decapsulation with ML-KEM by kkoyung · Pull Request #41617 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appeara...
- [script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo](https://github.com/servo/servo/pull/41615) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sign...
- [script: Implement export key operation of ML-KEM by kkoyung · Pull Request #41604 · servo/servo](https://github.com/servo/servo/pull/41604) *(github.com)* *(Cites: `https://wicg.github.io/webcrypto-modern-algos`)*
  > script: Implement export key operation of ML-KEM by kkoyung · Pull Request #41604 · servo/servo · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed...

#### 📚 Platform Documentation & References

- [Request for Mozilla Position on Modern Algorithms in WebCrypto · Issue #1282 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1282) *(github.com)*
- [script: Implement WebCrypto encapsulation and decapsulation with ML-KEM by kkoyung · Pull Request #41617 · servo/servo](https://github.com/servo/servo/pull/41617) *(github.com)*
- [script: Implement generate key operation of ML-KEM by kkoyung · Pull Request #41615 · servo/servo](https://github.com/servo/servo/pull/41615) *(github.com)*
- [script: Implement export key operation of ML-KEM by kkoyung · Pull Request #41604 · servo/servo](https://github.com/servo/servo/pull/41604) *(github.com)*
- [script: Implement generate key operation of ML-DSA by kkoyung · Pull Request #41659 · servo/servo](https://github.com/servo/servo/pull/41659) *(github.com)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=algorithm-updates-in-webcrypto) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (34 found across 6 planned queries, 10 verified) · `Google Search Grounding (gemini-3.7-flash)` (0 found, 0 verified) · `Dev.to Community Blogs` (8 found, 5 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 items) · `Engine Bug Trackers` (1 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (0 items)
- **Content Inspected:** Spec: ✔ · Explainers: 0 · Standards Comments Read: 6

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

- **Momentum:** **High** (Activity Score: 100)
- **Consensus:** **Partial Multi-Engine Interest**
- **Developer Sentiment:** **Positive / High Interest**
- **Analysis:** Renewed HTML insertion&streaming methods is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **9 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [HTML streaming & revamped DOM parsing](https://github.com/WebKit/standards-positions/issues/629) [open] `topic: html`, `venue: WHATWG HTML Workstream`, `from: Google`
- **Mozilla:** [HTML streaming & revamped DOM parsing](https://github.com/mozilla/standards-positions/issues/1370) [closed] `venue: WHATWG`, `position: positive`, `topic: API`
  > *Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."*

#### 📰 Ecosystem Blogs & Articles

- [[blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700...
- [[blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, ...
- [html-setters-polyfill - npm](https://www.npmjs.com/package/html-setters-polyfill) *(npmjs.com)*
  > Polyfill for new HTML setters (appendHTML, streamHTML..etc. and unsafe variants). Latest version: 0.1.1, last published: 9 days ago. Start using html-setters-polyfill in your project by running `npm i html-setters-polyfi...
- [Declarative partial updates | Blog | Chrome for Developers](https://developer.chrome.com/blog/declarative-partial-updates?hl=en) *(developer.chrome.com)*
  > Declarative partial updates | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברי...
- [How Declarative Partial Updates Work in HTML](https://www.freecodecamp.org/news/how-declarative-partial-updates-work-in-html) *(freecodecamp.org · 2026-05-29T20:20:47)*
  > How Declarative Partial Updates Work in HTML May 29, 2026 / #HTML5 How Declarative Partial Updates Work in HTML Sumit Saha HTML has always supported streaming. The server doesn't need to build an entire page in memory be...
- [Chrome Declarative Partial Updates: Native HTML Streaming in 148 | byteiota](https://byteiota.com/chrome-declarative-partial-updates-native-html-streaming-in-148) *(byteiota.com · 2026-06-04T05:07:53)*
  > streamHTML(readableStream) — streaming replacement, integrates directly with the Fetch and Streams APIs · streamAppendHTML(readableStream) — streaming append · The safe variants are the default path. Strip dangerous elem...

#### 🔗 Inbound Citations & Reverse Links

- [[blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700...
- [[blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, ...

#### 📚 Platform Documentation & References

- [Coherent story for HTML-setting methods · Issue #11669 · whatwg/html](https://github.com/whatwg/html/issues/11669) *(github.com)*
- [declarative-partial-updates/patching-explainer.md at main · WICG/declarative-partial-updates](https://github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md) *(github.com)*
- [Improve API of `insertAdjacent*()` methods · Issue #10122 · whatwg/html](https://github.com/whatwg/html/issues/10122) *(github.com)*
- [8.4 Dynamic markup insertion](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html) *(html.spec.whatwg.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=renewed-html-insertion%26streaming-methods) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (18 found across 7 planned queries, 10 verified) · `Google Search Grounding (gemini-3.7-flash)` (0 found, 0 verified) · `Dev.to Community Blogs` (8 found, 6 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 items) · `Engine Bug Trackers` (0 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (0 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 5

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

- **Momentum:** **High** (Activity Score: 80)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""Supporting options bag in WebSocket constructor" mozilla webkit"`, `""Add options bag to WebSocket constructor""`, `""whatwg/websockets/pull/76""`
- **Analysis:** Adding an options bag (`WebSocketInit` dictionary) to the `WebSocket` constructor aligns WebSocket instantiation ergonomics with modern Web APIs like `fetch()`. In addition to accepting `protocols` as an option object property, it creates an extensible foundation for future network controls such as Local Network Access (`targetAddressSpace`). With WHATWG specification pull request #76 active and Chromium enabling it by default, multi-engine consensus is rapidly solidifying.

**Key Recommendations & Takeaways:**
- Actionable Advice: Continue passing subprotocols as strings or string arrays in cross-browser production code until Safari and Firefox ship the new dictionary overload. In Chromium-targeted environments or feature-detected wrappers, start testing the `{ protocols }` dictionary syntax as an extensible base for upcoming networking features.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **8 new articles/tutorials** published

#### 🏛️ Browser Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [open] `topic: networking`, `venue: WHATWG HTML Workstream`, `from: Google`
  > *Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."*
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open] 

#### 📰 Ecosystem Blogs & Articles

- [[blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, ...
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to ...
- [javascript - HTTP headers in Websockets client API](https://stackoverflow.com/questions/4361173/http-headers-in-websockets-client-api) *(stackoverflow.com)*
  > https://<strong>github.com/whatwg/websockets/issues/42</strong> · https://github.com/nodejs/undici/blob/main/docs/docs/api/WebSocket.md · Share · Share a link to this answer · Copy linkCC BY-SA 4.0 · Short permalink to t...
- [Private Network Access](https://wicg.github.io/private-network-access) *(wicg.github.io · 2024-09-26T00:00:00)*
  > Private Network Access Private Network Access Draft Community Group Report , 26 September 2024 This version: https://wicg.github.io/private-network-access/ Issue Tracking: GitHub Inline In Spec Editor: Titouan Rigoudy ( ...

#### 🔗 Inbound Citations & Reverse Links

- [[blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, ...
- [Intent to Prototype: Add options bag to WebSocket constructor](https://groups.google.com/a/chromium.org/g/blink-dev/c/YwkXWzPUJ7U) *(groups.google.com · 2026-08-05T00:00:00)* *(Cites: `https://chromestatus.com/feature/5080055102439424`)*
  > Intent to Prototype: Add options bag to WebSocket constructor Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to ...
- [javascript - HTTP headers in Websockets client API](https://stackoverflow.com/questions/4361173/http-headers-in-websockets-client-api) *(stackoverflow.com)* *(Cites: `https://github.com/whatwg/websockets/issues/42`)*
  > https://<strong>github.com/whatwg/websockets/issues/42</strong> · https://github.com/nodejs/undici/blob/main/docs/docs/api/WebSocket.md · Share · Share a link to this answer · Copy linkCC BY-SA 4.0 · Short permalink to t...

#### 📚 Platform Documentation & References

- [local-network-access/explainer.md at main · WICG/local-network-access](https://github.com/WICG/local-network-access/blob/main/explainer.md) *(github.com)*
- [WebSocket: WebSocket() constructor](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) *(developer.mozilla.org)*
- [WebSocketStream: WebSocketStream() constructor](https://developer.mozilla.org/en-US/docs/Web/API/WebSocketStream/WebSocketStream) *(developer.mozilla.org)*
- [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=add-options-bag-to-websocket-constructor) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (5 found across 7 planned queries, 5 verified) · `Google Search Grounding (gemini-3.7-flash)` (0 found, 0 verified) · `Dev.to Community Blogs` (8 found, 4 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 items) · `Engine Bug Trackers` (0 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (8 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (0 items)
- **Content Inspected:** Spec: ✔ · Explainers: 2 · Standards Comments Read: 1

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
- **Developer Sentiment:** **Neutral**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""CORS enforcement for Background Fetch" chromestatus"`, `""Background Fetch" "CORS" Chrome"`, `""WebKit/standards-positions" "Background Fetch""`, `""mozilla/standards-positions" "Background Fetch""`
- **Analysis:** Background Fetch remains a Chromium-exclusive API that narrowly avoided complete deprecation due to low web-wide usage. In Chrome 154, Chromium is hardening the feature by routing all requests through standard Fetch pipeline machinery, closing a security bypass to enforce CORS, CORP/COEP/DIP, and Local Network Access (LNA) checks.

**Key Recommendations & Takeaways:**
- Actionable Advice: Audit all `backgroundFetch.fetch()` requests to ensure remote media or data assets explicitly return appropriate `Access-Control-Allow-Origin` headers and comply with CORP/LNA policies. Background Fetch must remain guarded behind feature detection (`'BackgroundFetchManager' in self`) as progressive enhancement.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **15 new articles/tutorials** published

#### 🔗 Inbound Citations & Reverse Links

- [background-fetch/index.bs at main · WICG/background-fetch](https://github.com/WICG/background-fetch/blob/main/index.bs) *(github.com)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > background-fetch/index.bs at main · WICG/background-fetch · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload...
- [Background Fetch · Issue #149 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/149) *(github.com · 2023-03-15T23:42:46)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Background Fetch · Issue #149 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reloa...
- [Background Fetch · Issue #30 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/30) *(github.com · 2017-09-27T07:27:40)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Background Fetch · Issue #30 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reloa...
- [content/files/en-us/web/api/background_fetch_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/background_fetch_api/index.md?plain=1) *(github.com)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > content/files/en-us/web/api/background_fetch_api/index.md at main · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another...

#### 📚 Platform Documentation & References

- [background-fetch/index.bs at main · WICG/background-fetch](https://github.com/WICG/background-fetch/blob/main/index.bs) *(github.com)*
- [Background Fetch · Issue #149 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/149) *(github.com)*
- [Background Fetch · Issue #30 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/30) *(github.com)*
- [content/files/en-us/web/api/background_fetch_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/background_fetch_api/index.md?plain=1) *(github.com)*
- [BackgroundFetchManager: fetch() method](https://developer.mozilla.org/en-US/docs/Web/API/BackgroundFetchManager/fetch) *(developer.mozilla.org)*

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=background-fetch) (18 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (30 found across 6 planned queries, 4 verified) · `Google Search Grounding (gemini-3.7-flash)` (0 found, 0 verified) · `Dev.to Community Blogs` (8 found, 0 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 items) · `Engine Bug Trackers` (0 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (6 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (18 items)
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

- **Momentum:** **Moderate** (Activity Score: 60)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Positive**
- **Google Search Grounding:** Enabled via Gemini
- **Search Queries:** `""text-decoration-skip-spaces" webkit OR gecko OR firefox OR safari"`, `""text-decoration-skip-spaces" "blink-dev""`, `""text-decoration-skip-spaces" site:github.com/w3c/csswg-drafts"`, `""text-decoration-skip-spaces" chromestatus OR "Intent to Ship""`
- **Analysis:** CSS4 text-decoration-skip-spaces enables fine-grained authorial control over whether text decorations like underlines and line-throughs skip leading, trailing, or all whitespace characters. Shipping enabled by default in Chromium (Chrome 154), this property resolves long-standing cross-browser discrepancies in whitespace underline rendering without requiring layout hacks. While specified in CSS Text Decoration Module Level 4, Chromium is the first engine to finalize default shipping status as WebKit and Gecko track related WPT suites.

**Key Recommendations & Takeaways:**
- Actionable Advice: Adopt text-decoration-skip-spaces as a pure progressive enhancement today, as unsupported browsers will gracefully fall back to standard text-decoration behavior without breaking layout. Use `@supports (text-decoration-skip-spaces: none)` if styling logic depends on custom text offset or padding adjustments.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### ⚡ What Happened This Week

- 📰 **12 new articles/tutorials** published

#### 📰 Ecosystem Blogs & Articles

- [[blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces 'Dan Clark' via blink-dev Wed, 12 Aug 2026 09:19:31 ...
- [CSS4 text-decoration-skip-spaces](https://chromestatus.com/feature/4832783806627840) *(chromestatus.com · 2026-04-10T00:00:00)*
  > We cannot provide a description for this page right now

#### 🔗 Inbound Citations & Reverse Links

- [[blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces](http://www.mail-archive.com/blink-dev@chromium.org/msg17159.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/4832783806627840`)*
  > [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: CSS4 text-decoration-skip-spaces 'Dan Clark' via blink-dev Wed, 12 Aug 2026 09:19:31 ...

#### 📚 Platform Documentation & References

- [[css-text-decor-4] Variants of text-decoration-skip-spaces:end behavior, and initial value · Issue #4653 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4653) *(github.com)*
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/css-text-decor-4) *(w3.org)*
- [[css-text-decor-4] Don't skip visible word-separators when skipping only leading/trailing spaces · Issue #5249 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/5249) *(github.com)*
- [[css-text-decor] selective toggling in the text-decoration-skip property. · Issue #843 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/843) *(github.com)*

#### 🧪 Interactive Demos & Samples

- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-001.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-002.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-003.html)
- [CSS4 text-decoration-skip-spaces Demo](http://wpt.live/css/css-text-decor/text-decoration-skip-spaces-004.html)

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=css4-text-decoration-skip-spaces) (0 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (35 found across 7 planned queries, 6 verified) · `Google Search Grounding (gemini-3.7-flash)` (0 found, 0 verified) · `Dev.to Community Blogs` (8 found, 2 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (0 items) · `Engine Bug Trackers` (0 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (0 items)
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

Add support for passing a targetAddressSpace option in the WebSocket constructor. This allows developers to specify that a WebSocket connection to a public hostname should be treated as going to a "local" or "loopback" destination, matching the existing support on the Fetch API. The main use case is to offer an escape hatch to bypass mixed content restrictions for connecting to local servers that cannot yet support HTTPS (as Local Network Access permissions require a secure context).

Example: A public site that connects to a local server can use a hostname to avoid needing manual configuration of the exact private IP address in use:

`const ws = new WebSocket("ws://local-server.example", { targetAddressSpace: "local"}`

This will flag the WebSocket connection as going to a local address, bypassing mixed content blocking when run in a secure context. The user must grant the site the local network permission for the WebSocket connection to succeed, and the hostname must resolve to a local IP address (otherwise it will be blocked).

This builds on https://chromestatus.com/feature/5080055102439424 which adds an options bag to the WebSocket constructor.

> **Motivation:** To avoid mixed content blocking for local network WebSockets requests, web developers have relied on having their users manually configure their local network IP addresses, which is awkward at best. Adding support for the targetAddressSpace option in WebSockets aligns it with the Fetch API. This has also been requested by developers (e.g., https://...

#### 💡 Ecosystem Intelligence & Analysis

- **Momentum:** **Emerging** (Activity Score: 10)
- **Consensus:** **Chromium-Led**
- **Developer Sentiment:** **Neutral**
- **Analysis:** Support targetAddressSpace option for WebSockets is currently Enabled by default in Chrome 154. Verified ecosystem momentum is Emerging with Chromium-Led standards alignment and neutral developer pulse.

**Key Recommendations & Takeaways:**
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

#### 🏛️ Browser Standards Positions

- **WebKit:** [Supporting options bag in WebSocket constructor](https://github.com/WebKit/standards-positions/issues/708) [open] `topic: networking`, `venue: WHATWG HTML Workstream`, `from: Google`
  > *Latest discussion from @annevk: "I suggest we resolve this as "position: support" one week from now. This is a straightforward addition that allows us to enhance WebSockets more easil..."*
- **Mozilla:** [Supporting options bag in WebSocket constructor](https://github.com/mozilla/standards-positions/issues/1444) [open] 

#### 📰 Ecosystem Blogs & Articles

- [[blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, ...

#### 🔗 Inbound Citations & Reverse Links

- [[blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets](http://www.mail-archive.com/blink-dev@chromium.org/msg17125.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/issues/126`)*
  > [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Support targetAddressSpace option for WebSockets Chromestatus Wed, ...

#### 🧪 Web Platform Tests (WPT)

- View cross-browser test results on [wpt.fyi](https://wpt.fyi/results/?q=125) (128 tests listed)

#### 🔍 Investigation Audit Trail

- **Searches Run:** `Brave Search` (21 found across 8 planned queries, 1 verified) · `Google Search Grounding (gemini-3.7-flash)` (0 found, 0 verified) · `Dev.to Community Blogs` (8 found, 1 verified) · `Hacker News Algolia` (0 found, 0 verified) · `Standards Positions` (2 items) · `Engine Bug Trackers` (0 items) · `Baseline (baseline.dev)` *(untracked)* · `NPM Registry` (5 found, 0 verified) · `Web Platform Tests (wpt.fyi)` (128 items)
- **Content Inspected:** Spec: ✔ · Explainers: 1 · Standards Comments Read: 1

---

