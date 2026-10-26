# Language Detector API on Android

> **Report Week:** 2026-W44 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Exposes the LanguageDetector JavaScript Web API on Chrome for Android (Clank). This allows web applications to detect text languages locally on mobile devices using fast, privacy-preserving, and offline-capable on-device machine learning models and not rely on cloud endpoints.

### Motivation

Exposing the Language Detector API on Chrome for Android allows web applications to perform fast, privacy-preserving, and offline-capable language identification directly within mobile browsers.

## Ecosystem Status

- **Momentum:** High (footprint 390 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Language Detector API on Android extends Chromium's built-in AI capabilities from desktop to mobile, enabling client-side language identification via lightweight, offline, and privacy-preserving on-device models. While developers welcome the reduction in cloud API overhead and latency, the API currently remains confined to Chromium-based browsers. With no cross-engine consensus reached yet, its trajectory mirrors the broader Built-in AI initiative that faces non-Chromium hesitation.

### Recommendations
- Actionable Advice: Teams should adopt the Language Detector API strictly as an optional progressive enhancement by feature-detecting the interface and verifying availability before session creation. Always supply a reliable fallback—such as lightweight client-side libraries or server-side detection—to support Firefox and Safari users gracefully.
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
- **Chrome usage:** 0.0022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/425))

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://img896-dot-cr-status.appspot.com/feature/5087964794322944?gate=6097459746045952) *(img896-dot-cr-status.appspot.com)*
  > The \*\*Language Detector API on Android\*\* extends the web platform's built-in AI capabilities from desktop browsers to \*\*Chrome for Android (Clank)\*\* By bringing the \`LanguageDetector\` interface to Android, web applications can identify the language o...
- [appspot.com](https://polymer10-dot-cr-status.appspot.com/feature/5087964794322944/activity) *(polymer10-dot-cr-status.appspot.com)*
  > The \*\*Language Detector API on Android\*\* extends the web platform's built-in AI capabilities from desktop browsers to \*\*Chrome for Android (Clank)\*\* \*\*Details\*\*: Chromium tracking notes show that this launch replicates the Desktop \`LanguageDetector\` ...
- [talent500.com](https://talent500.com/blog/chrome-ai-api-on-device-summarization-translation) *(talent500.com)*
  > Historically, Chrome's built-in AI APIs (such as the Prompt, Summarizer, and Translation APIs) required desktop-class hardware (high VRAM/RAM) or were explicitly restricted from mobile environments \*\*Closing the Mobile AI Gap\*\*: Initial built-in AI r...
- [chrome.com](https://developer.chrome.com/docs/ai/language-detection) *(developer.chrome.com)*
  > Historically, Chrome's built-in AI APIs (such as the Prompt, Summarizer, and Translation APIs) required desktop-class hardware (high VRAM/RAM) or were explicitly restricted from mobile environments The documentation explains that unlike foundation ge...
- [iodigital.com](https://techhub.iodigital.com/articles/building-a-translation-demo-with-chromes-built-in-ai-apis) *(techhub.iodigital.com)*
  > This eliminates the need for external cloud API calls, ensures zero data leakage over the network, provides offline capability, and significantly cuts server costs \*\*iO tech\_hub (Dave Bitter)\*\*: In tutorials building multilingual product review widge...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Announcement\*\*: The feature was formally scheduled and introduced as \*\*Enabled by Default\*\* on Chrome for Android
- [chromestatus.com](https://chromestatus.com/reports/external_reviews/webkit) *(chromestatus.com)*
  > \*\*Announcement\*\*: The feature was formally scheduled and introduced as \*\*Enabled by Default\*\* on Chrome for Android
- [google.com](https://support.google.com/chrome/a/answer/10314655?hl=en_tt) *(support.google.com)*
  > \*\*Enterprise Control\*\*: Chrome Enterprise release documentation notes that enterprise policies (such as \`GenAILocalFoundationalModelSettings\`) can govern or restrict model downloads in enterprise-managed environments
- [chrome.com](https://developer.chrome.com/docs/ai/translator-api) *(developer.chrome.com)*
  > \*\*Guide\*\*: \*Language detection with built-in AI\* and \*Translation with built-in AI\* create()\`
- [chrome.com](https://developer.chrome.com/docs/ai/get-started) *(developer.chrome.com)*
  > The documentation explains that unlike foundation generative models (which require heavy disk space and memory), the Language Detector uses an efficient, compact "expert model" fine-tuned exclusively for language identification
- [chrome.com](https://developer.chrome.com/blog/pb-jiohotstar-translation-ai) *(developer.chrome.com)*
  > \*\*Case Studies\*\*: Feature spotlights (such as implementations by \*JioHotstar\* and \*Policybazaar\*) highlight the ability to automatically detect user review/comment languages or dynamic video subtitles locally before triggering translation pipelines
- [google.com](https://chromewebstore.google.com/detail/built-in-ai/aekdeffgkjegkdbdnkllpaeakcapfjdb) *(chromewebstore.google.com)*
  > js or cloud endpoints if the client browser does not support native \`LanguageDetector\`)
- [chromegeek.com](https://www.chromegeek.com/chrome-157-beta-language-detector-android) *(chromegeek.com)*
  > Expanding the Language Detector API to Android represents an important step in making client-side, on-device AI practical for mobile web users
- [Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17246.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Daniel Bratell Fri, 21 Aug 2026 ...
- [\[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17245.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android 'Jaewon Lee' via blink-dev Thu, 20 Aug 2...
- [\[blink-dev\] Web-Facing Change PSA: Language Detector API on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17765.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android 'Jaewon Lee' via blink-dev Fri, 16 Oct 2026 12:05:51 -0700 Contact emails \[e...
- [Chrome 157 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > &lt;strong&gt;Exposes the LanguageDetector JavaScript Web API on Chrome for Android (Clank).&lt;/strong&gt; This allows web applications to detect text languages locally on mobile devices using fast, privacy-preserving, and offline-capable on-device machine lear...
- [Exploring Chrome's Built-In AI APIs: A Hands-On Guide - DEV Community](https://dev.to/phalgunv/chrome-built-in-ai-apis-a-hands-on-guide-to-language-detection-translation-summarization-and-114k) *(dev.to · 2026-07-11T14:22:26)*
  > Check the current Chrome documentation ... that every API requires the same configuration. The Language Detector API &lt;strong&gt;identifies the language of a given text&lt;/strong&gt;....
- [Build a language detection app with Chrome's Language Detection API in Angular - DEV Community](https://dev.to/railsstudent/build-a-language-detection-app-with-chromes-built-in-ai-in-angular-24kp) *(dev.to · 2025-01-05T15:00:08)*
  > &lt;strong&gt;The LanguageDetectionComponent has three buttons&lt;/strong&gt;. The create button calls the language detection service to create a language detector. The destroy button destroys the language detector to release the resources.
- [🎄 Instant Local Translation with Chrome 🌐 - DEV Community](https://dev.to/zenoplex/instant-local-translation-with-chrome-1d7p) *(dev.to · 2024-12-14T15:53:58)*
  > I&#x27;ve crafted a simple Chrome extension that utilizing both the detection and the translation API. Here&#x27;s how it works: &lt;strong&gt;Users can select any text on a webpage, and the extension first uses language detection API to identify the sourc...
- [How I Built an AI-Powered Text Processor Using Chrome AI API. - DEV Community](https://dev.to/duubemmm/how-i-built-an-ai-powered-text-processor-using-chrome-ai-api-1j0f) *(dev.to · 2025-03-27T08:40:36)*
  > When I first discovered the Chrome AI API, I recognized its potential immediately. The ability to integrate AI-powered text processing directly into a web app—without requiring a backend—opens up new possibilities for seamless user experiences. Using...
- [AI Without a Backend: The Browser's Built-in AI APIs for Web Developers - DEV Community](https://dev.to/olivierleplus/ai-without-a-backend-the-browsers-built-in-ai-apis-for-web-developers-2745) *(dev.to · 2026-07-21T11:00:41)*
  > The foundation-model APIs (Prompt, Summarizer, Writer, Rewriter) don&#x27;t run on Android or iOS yet. Translator and Language Detector are desktop-only too. Real hardware requirements. Roughly: &gt;4 GB of GPU VRAM or a decent CPU with 16 GB RAM, pl...
- [Build a translation app with Chrome's Built-in Translation API in Angular - DEV Community](https://dev.to/railsstudent/build-a-translation-app-with-chrome-built-in-ai-in-angular-5636) *(dev.to · 2025-01-05T15:00:23)*
  > The LanguageDetectionService service encapsulates the logic of the Language Detection API. The createDetector method creates a detector and stores it in a signal.
- [Detect languages with the Language Detector API - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/languagedetector-api) *(learn.microsoft.com · 2026-06-01T00:00:00)*
  > Creating a session instructs the browser to load the language detection model in memory, so that the model can be used. Before you can detect the language, create a new session by using the LanguageDetector.create() method:
- [Intent to Experiment: Language Detector API](https://groups.google.com/a/chromium.org/g/blink-dev/c/XTy-FmWjW3g) *(groups.google.com · 2024-08-15T00:00:00)*
  > This API will likely frequently be used in concert with the translator API (https://chromestatus.com/feature/5172811302961152). Our current implementation is tied up with the browser&#x27;s built-in language detection, which runs on the main thread. ...
- [Re: \[blink-dev\] Intent to Experiment: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg11188.html) *(mail-archive.com)*
  > If so, we will update the Chrome Platform Status entry. Origin trial desktop first 129 Origin trial desktop last 134 Origin trial Android first 129 Origin trial Android last 134 Origin trial WebView first 129 Origin trial WebView last 134 Link to ent...
- [\[blink-dev\] Intent to Extend Experiment: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg12986.html) *(mail-archive.com)*
  > Flag name on about://flags language-detection-api Finch feature name LanguageDetectionAPI Requires code in //chrome? False Measurement kV8LanguageDetector\_Detect\_Method Estimated milestones Origin trial desktop first 130 Origin trial desktop last 135...
- [\[blink-dev\] Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17096.html) *(mail-archive.com)*
  > Explainer https://github.com/webmachinelearning/translation-api Specification https://webmachinelearning.github.io/translation-api Summary &lt;strong&gt;Exposes the LanguageDetector and Translator JavaScript Web APIs on Chrome for Android (Clank).&lt;/strong&gt;...
- [\[blink-dev\] Intent to Experiment: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg11157.html) *(mail-archive.com)*
  > If so, we will update the Chrome Platform Status entry. Origin trial desktop first 129 Origin trial desktop last 134 Origin trial Android first 129 Origin trial Android last 134 Origin trial WebView first 129 Origin trial WebView last 134 Link to ent...
- [Chrome Platform Status](https://cr-status.appspot.com/feature/5087964794322944) *(cr-status.appspot.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17246.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Daniel Bratell Fri, 21...
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > https://&lt;strong&gt;chromestatus.com/feature/5087964794322944&lt;/strong&gt; will need a run on Android.
- [\[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17245.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android 'Jaewon Lee' via blink-dev Thu...
- [\[blink-dev\] Web-Facing Change PSA: Language Detector API on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17765.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android 'Jaewon Lee' via blink-dev Fri, 16 Oct 2026 12:05:51 -0700 Contact...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/elevenlabs/captions.events/blob/main/CHROME_LANGUAGE_DETECTOR.md) *(github.com)*
- [LanguageDetector - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Translator_and_Language_Detector_APIs) *(developer.mozilla.org)*
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)*
- [LanguageDetector: detect() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector/detect) *(developer.mozilla.org)*
- [Using the Translator and Language Detector APIs - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 73 result(s) found across 12 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5087964794322944" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/webmachinelearning/translation-api" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"webmachinelearning.github.io/translation-api" -site:webmachinelearning.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"Language Detector API on Android" API` — *Core feature API query* (1 returned)
  - `"Language Detector API on Android" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacy-preserving" OR "offline-capable" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Language Detector API on Android" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Language Detector API on Android" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Language Detector API" (Android OR Chrome) tutorial OR guide site:web.dev OR site:dev.to` — *Finds developer guides and tutorials explaining how to use on-device language detection on Chrome for Android.* (8 returned)
  - `("ai.languageDetector.create" OR "translation.createDetector" OR "LanguageDetector") detect JavaScript example` — *Targets practical JavaScript syntax and code snippets showing how to initialize and invoke the Language Detector API.* (8 returned)
  - `"Language Detector API" ("Chrome for Android" OR Clank) (status OR intent OR release OR "origin trial")` — *Discovers platform announcements, browser shipping status, and Chrome release notes regarding Android support.* (8 returned)
  - `"Language Detector API" OR "LanguageDetector" (Android OR mobile) site:news.ycombinator.com OR site:reddit.com OR site:twitter.com` — *Surfaces community reactions, early developer feedback, and social discussions around on-device language detection on mobile browsers.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **16 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 16 result(s) found — **6 verified relevant**
- **Hacker News Algolia:** 5 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "languagedetector", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "languagedetector": Chrome 25% passing (stable)*
- **Sources cited by the AI synthesis:** 6 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 10 engineer comment(s) read
- **Web Page Excerpts Ingested:** 11 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5087964794322944)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5087964794322944)
- [Specification](https://webmachinelearning.github.io/translation-api)
- [Chromium Tracking Bug](https://crbug.com/549896512)
