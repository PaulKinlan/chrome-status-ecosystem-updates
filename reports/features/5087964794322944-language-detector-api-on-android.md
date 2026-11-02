# Language Detector API on Android

> **Report Week:** 2026-W45 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Exposes the LanguageDetector JavaScript Web API on Chrome for Android (Clank). This allows web applications to detect text languages locally on mobile devices using fast, privacy-preserving, and offline-capable on-device machine learning models and not rely on cloud endpoints.

### Motivation

Exposing the Language Detector API on Chrome for Android allows web applications to perform fast, privacy-preserving, and offline-capable language identification directly within mobile browsers.

## Ecosystem Status

- **Momentum:** High (+150 points since 2026-10-12; footprint 380 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Language Detector API on Android extends Chromium's built-in, on-device AI capabilities to mobile devices, enabling fast, privacy-preserving, and offline-capable language identification without server roundtrips. While Chrome 157 enables the feature by default on Android to achieve parity with desktop, ecosystem interoperability remains single-engine due to objections from rival browser vendors.

### Recommendations
- Actionable Advice: Teams should adopt the API strictly via feature detection (\`'LanguageDetector' in self\`) as a progressive enhancement, while maintaining server-side or lightweight WebAssembly fallbacks for non-supporting platforms like Safari and Firefox.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tomayac: "&gt; We have an open Pull Request to implement the proposed API into Mastodon, but we are waiting to have at least 2 browser engines support the proposal..."
- Standards Activity (Mozilla): Latest discussion from @sandstrom: "&gt; We are negative on this proposal. While we plan to describe the reasons further in \[our proposal\](https://github.com/mozilla/explainers/blob/main/tr..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Web Translation API](https://github.com/WebKit/standards-positions/issues/339) [open]
- **Mozilla:** [Web Translation API](https://github.com/mozilla/standards-positions/issues/1015) [closed]

## Web-features Group

*group-level data: web-features [`languagedetector`](https://webstatus.dev/features/languagedetector), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `languagedetector` on [wpt.fyi](https://wpt.fyi/results?q=feature:languagedetector) (via webstatus.dev) — stable: Chrome 25% · Edge 75% · Firefox 25% · Safari 25%; experimental: Chrome 25% · Edge 75% · Firefox 25% · Safari 25%
- **Chrome usage:** 0.0018% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/425))

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/5087964794322944) *(img968-dot-cr-status.appspot.com)*
  > The \*\*Language Detector API on Android\*\* brings the W3C-incubated client-side \`LanguageDetector\` JavaScript API—previously restricted largely to desktop environments—to Chrome for Android (Clank) Part of the broader \*\*Built-in AI (WebML / Translation...
- [chrome.com](https://developer.chrome.com/docs/ai/translate-on-device) *(developer.chrome.com)*
  > The \*\*Language Detector API on Android\*\* brings the W3C-incubated client-side \`LanguageDetector\` JavaScript API—previously restricted largely to desktop environments—to Chrome for Android (Clank) \*\*Mobile Was the Missing Link:\*\* Initial developer fee...
- [Detect languages with the Language Detector API - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/languagedetector-api) *(learn.microsoft.com)*
  > By moving detection on-device on mobile devices, developers eliminate server round-trip latency, eliminate cloud API costs, ensure full offline functionality, and safeguard privacy by keeping user input on the handset \*\*Chaining with Translation:\*\* C...
- [chromegeek.com](https://www.chromegeek.com/chrome-157-beta-language-detector-android) *(chromegeek.com)*
  > \*\*Article/Source:\*\* \*Chrome Platform Status ("Language Detector API on Android")\* & \*Chrome Beta Release Coverage (Chrome 157)\*
- [appspot.com](https://cr-status.appspot.com/feature/5087964794322944) *(cr-status.appspot.com)*
  > Promoted under the "Chromium catches up" intent to eliminate mobile platform disparities where desktop builds had early access to Built-in AI APIs while mobile was omitted Documents the formal specifications incubated by the W3C Web Machine Learning ...
- [iodigital.com](https://techhub.iodigital.com/articles/built-in-ai-in-chrome) *(techhub.iodigital.com)*
  > Promoted under the "Chromium catches up" intent to eliminate mobile platform disparities where desktop builds had early access to Built-in AI APIs while mobile was omitted \*\*Mobile Was the Missing Link:\*\* Initial developer feedback on built-in AI API...
- [Language detection with built-in AI  \|  AI in Chrome  \|  Chrome for Developers](https://developer.chrome.com/docs/ai/language-detection) *(developer.chrome.com)*
  > Highlights that mobile web applications can leverage fast, privacy-preserving models already resident or downloaded on-demand by the mobile browser without requiring developers to ship multi-megabyte language identification WASM/JS libraries \*\*Articl...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/built-in-ai/language-detection) *(developer.chrome.com)*
  > \*\*Article/Source:\*\* \*“Language detection with built-in AI”\* & \*“Language Detection \| Modern Web Guidance”\* \*\*Use Cases:\*\* Ideal for pre-filtering text prior to invoking the \`Translator\` API, dynamic UI localization (e.g., adjusting multilingual forms...
- [iodigital.com](https://techhub.iodigital.com/articles/building-a-translation-demo-with-chromes-built-in-ai-apis) *(techhub.iodigital.com)*
  > \*\*Articles/Sources:\*\* \*iO tech\_hub (Dave Bitter: “Building a Translation Demo with Chrome Built-in AI APIs”)\* and \*Raymond Camden’s Built-in AI explorations\* Expanding support to Chrome on Android allows developers to target real-world mobile-first a...
- [\[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17245.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android 'Jaewon Lee' via blink-dev Thu, 20 Aug 2...
- [\[blink-dev\] Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17096.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Language Detector and Translator APIs on Android 'Jaewon Lee' via blink-dev Wed, 29 Jul 2026 14:1...
- [\[blink-dev\] Web-Facing Change PSA: Language Detector API on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17765.html) *(mail-archive.com)*
  > Explainer https://github.com/w... on Chrome for Android (Clank). This &lt;strong&gt;allows web applications to detect text languages locally on mobile devices using fast, privacy-preserving, and offline-capable on-device machine learning models&lt;/strong&gt;......
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com · 2026-10-30T05:29:22)*
  > &lt;strong&gt;Exposes the LanguageDetector JavaScript Web API on Chrome for Android (Clank).&lt;/strong&gt; This allows web applications to detect text languages locally on mobile devices using fast, privacy-preserving, and offline-capable on-device machine lear...
- [Re: \[blink-dev\] Re: Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13723.html) *(mail-archive.com)*
  > We&#x27;d like to fully support this API on Android, and it&#x27;s going to take some additional implementation work to make that happen. As a result, we&#x27;re prioritizing desktop support for this release · On Fri, May 16, 2025 at 11:39 AM Christi...
- [\[blink-dev\] Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13517.html) *(mail-archive.com)*
  > We anticipate seeing an ecosystem of such polyfills grow as more developers experiment with this API. WebView application risks Does this intent deprecate or change behavior of existing APIs, such that it has potentially high risk for Android WebView...
- [Chrome's Language Detection API: On-Device and Free](https://extensionbooster.net/blog/chrome-language-detection-api-guide-extension-developers) *(extensionbooster.net · 2026-04-08T00:00:00)*
  > One API call. Zero network traffic. Ranked results with confidence scores. if (&#x27;LanguageDetector&#x27; in self) { // Chrome 138+ with Language Detection support } ... const results = await detector.detect(&#x27;Bonjour le monde!&#x27;); console....
- [Language Detector API - Chrome Platform Status](https://chromestatus.com/feature/6494349985841152) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Language Detector API \| AI Playground](https://chrome.dev/web-ai-demos/built-in-ai-playground/language-detector-api) *(chrome.dev)*
  > const detector = await LanguageDetector.create({ expectedInputLanguages: \[\], monitor(m: any) { m.addEventListener(&quot;downloadprogress&quot;, (e: any) =&gt; { console.log(\`Downloaded ${e.loaded \* 100}%\`); }); }, signal: abortController.signal, }); ...
- [Intent to Ship: Language Detector API](https://groups.google.com/a/chromium.org/g/blink-dev/c/sWcHBe9wpbo/m/H8Xp7NXTCQAJ) *(groups.google.com)*
  > Based on this I2S and ChromeStatus entry, I only see immediate plans to ship on desktop platforms, suggesting the feature was in being trialed/tested on all platforms (including WebView) other than iOS. I believe the feature is now also enabled (work...
- [Re: \[blink-dev\] Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13550.html) *(mail-archive.com)*
  > &gt; &gt; False &gt; &gt; Measurement &gt; &gt; ... on Android &gt; &gt; 129 &gt; &gt; Origin trial WebView first &gt; &gt; 130 &gt; &gt; Origin trial WebView last &gt; &gt; 135 &gt; &gt; &gt; Anticipated spec changes &gt; &gt; None but the API shape...
- [\[blink-dev\] Re: Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13520.html) *(mail-archive.com)*
  > &gt; &gt; False &gt; &gt; Measurement &gt; &gt; ... on Android &gt; &gt; 129 &gt; &gt; Origin trial WebView first &gt; &gt; 130 &gt; &gt; Origin trial WebView last &gt; &gt; 135 &gt; &gt; &gt; Anticipated spec changes &gt; &gt; None but the API shape...
- [Intent to Experiment: Language Detector API](https://groups.google.com/a/chromium.org/g/blink-dev/c/XTy-FmWjW3g) *(groups.google.com · 2024-08-15T00:00:00)*
  > Alternative architectures are possible ... the origin trial process. This feature would definitely benefit from having polyfills, backed by any of: cloud services, lazily-loaded on-device models using WebGPU, or the web developer&#x27;s own server. W...
- [\[blink-dev\] Intent to Extend Experiment: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg12986.html) *(mail-archive.com)*
  > False Measurement kV8LanguageDetector\_Detect\_Method Estimated milestones Origin trial desktop first 130 Origin trial desktop last 135 Origin trial extension 1 end milestone 138 DevTrial on desktop 129 Origin trial Android first 130 Origin trial Andro...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17245.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android 'Jaewon Lee' via blink-dev Thu...
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > https://&lt;strong&gt;chromestatus.com/feature/5087964794322944&lt;/strong&gt; will need a run on Android.
- [\[blink-dev\] Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17096.html) *(mail-archive.com)* *(Cites: `https://github.com/webmachinelearning/translation-api`)*
  > \[blink-dev\] Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Language Detector and Translator APIs on Android 'Jaewon Lee' via blink-dev Wed, 29 Jul...
- [translation-api/index.bs at main · webmachinelearning/translation-api · GitHub](https://github.com/webmachinelearning/translation-api/blob/main/index.bs) *(github.com)* *(Cites: `https://webmachinelearning.github.io/translation-api`)*
  > translation-api/index.bs at main · webmachinelearning/translation-api · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. Yo...
- [GitHub - michaelwasserman/translation-api: 🌏 A proposal for translator and language detector APIs · GitHub](https://github.com/michaelwasserman/translation-api) *(github.com)* *(Cites: `https://webmachinelearning.github.io/translation-api`)*
  > GitHub - michaelwasserman/translation-api: 🌏 A proposal for translator and language detector APIs · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reloa...
- [Language Detector API · Issue #3717 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/3717) *(github.com · 2026-01-23T16:21:35)* *(Cites: `https://webmachinelearning.github.io/translation-api`)*
  > Specification https://webmachinelearning.github.io/translation-api/ Description &lt;strong&gt;An API to detect the language of text&lt;/strong&gt;. Documentation https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector Browser support api.Lang...

## 📚 Platform Documentation & Specifications

- [Translator and Language Detector APIs - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Translator_and_Language_Detector_APIs) *(developer.mozilla.org)*
- [LanguageDetector - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector) *(developer.mozilla.org)*
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)*
- [translation-api/index.bs at main · webmachinelearning/translation-api · GitHub](https://github.com/webmachinelearning/translation-api/blob/main/index.bs) *(github.com)*
- [GitHub - michaelwasserman/translation-api: 🌏 A proposal for translator and language detector APIs · GitHub](https://github.com/michaelwasserman/translation-api) *(github.com)*
- [Language Detector API · Issue #3717 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/3717) *(github.com)*
- [modern-web-guidance/skills/modern-web-guidance/guides/built-in-ai/language-detection.md at main · GoogleChrome/modern-web-guidance · GitHub](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/built-in-ai/language-detection.md) *(github.com)*
- [Using the Translator and Language Detector APIs - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using) *(developer.mozilla.org)*
- [LanguageDetector: detect() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector/detect) *(developer.mozilla.org)*
- [LanguageDetector: create() static method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector/create_static) *(developer.mozilla.org)*
- [translation-api/README.md at main · webmachinelearning/translation-api · GitHub](https://github.com/webmachinelearning/translation-api/blob/main/README.md) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/languagedetector-api.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/languagedetector-api.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 67 result(s) found across 12 planned queries — **28 verified relevant**
  - `"chromestatus.com/feature/5087964794322944" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/webmachinelearning/translation-api" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (7 returned)
  - `"webmachinelearning.github.io/translation-api" -site:webmachinelearning.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"Language Detector API on Android" API` — *Core feature API query* (1 returned)
  - `"Language Detector API on Android" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacy-preserving" OR "offline-capable" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Language Detector API on Android" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Language Detector API on Android" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"Language Detector API" OR "LanguageDetector" tutorial OR guide "Chrome for Android"` — *Searches for developer guides and tutorials covering the Language Detector Web API on Android.* (8 returned)
  - `"ai.languageDetector" OR "LanguageDetector" "createLanguageDetector" OR "detect" JS` — *Finds code examples and JavaScript syntax usage for the LanguageDetector API.* (8 returned)
  - `"Language Detector API" "Chrome for Android" "intent to ship" OR "origin trial"` — *Tracks browser support, Chrome for Android intent-to-ship announcements, and origin trial updates.* (8 returned)
  - `"Language Detector API" OR "translation-api" site:news.ycombinator.com OR site:reddit.com OR site:github.com` — *Discovers community discussions, developer feedback, and sentiment across Reddit, Hacker News, and GitHub.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 16 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "languagedetector", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "languagedetector": Chrome 25% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 10 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5087964794322944)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5087964794322944)
- [Specification](https://webmachinelearning.github.io/translation-api)
- [Chromium Tracking Bug](https://crbug.com/549896512)
