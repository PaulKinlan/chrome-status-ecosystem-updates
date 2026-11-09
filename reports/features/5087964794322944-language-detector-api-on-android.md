# Language Detector API on Android

> **Report Week:** 2026-W46 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Exposes the LanguageDetector JavaScript Web API on Chrome for Android (Clank). This allows web applications to detect text languages locally on mobile devices using fast, privacy-preserving, and offline-capable on-device machine learning models and not rely on cloud endpoints.

### Motivation

Exposing the Language Detector API on Chrome for Android allows web applications to perform fast, privacy-preserving, and offline-capable language identification directly within mobile browsers.

## Ecosystem Status

- **Momentum:** High (+180 points since 2026-10-12; footprint 410 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Chrome for Android is shipping the Language Detector API enabled by default in Chrome 157, bringing mobile devices to parity with desktop by running compact on-device models for offline, low-latency language identification without cloud fees or heavy client bundles. However, the broader Web Translation and Language Detector specifications remain incubated in the W3C Web Machine Learning Community Group without multi-engine consensus. While Chromium and Edge support the group's interfaces, Mozilla has registered an official negative position and Safari/WebKit has withheld formal endorsement, keeping baseline cross-browser interoperability strictly limited.

### Recommendations
- Actionable Advice: Adopt the Language Detector API strictly as a progressive enhancement by feature-detecting the interface and verifying readiness via the static availability check before instantiation. Production applications must retain existing fallback mechanisms—such as lightweight client-side heuristic packages or server-side endpoints—for users running Firefox, Safari, or mobile devices lacking model support.
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
- **Chrome usage:** 0.0017% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/425))

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://cr-status.appspot.com/feature/5087964794322944) *(cr-status.appspot.com)*
  > The \*\*Language Detector API\*\* brings local, client-side language detection directly into Chrome for Android (often referred to internally as "Clank") Part of the broader W3C Web Machine Learning incubation and Chrome’s Built-in AI initiative, the API...
- [chromestatus.com](https://chromestatus.com/release-notes/157) *(chromestatus.com)*
  > The \*\*Language Detector API\*\* brings local, client-side language detection directly into Chrome for Android (often referred to internally as "Clank") \*\*Chrome Platform Status & Chrome Release Notes (Chrome 157)\*\*
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/built-in-ai/language-detection) *(developer.chrome.com)*
  > Rather than sending user-typed or scraped strings to cloud endpoints or forcing web apps to bundle multi-megabyte language identification libraries, web applications can now evaluate text locally on mobile devices \*\*Cost reduction:\*\* Developers avoid...
- [chromegeek.com](https://www.chromegeek.com/chrome-157-beta-language-detector-android) *(chromegeek.com)*
  > The rollout in Chrome 157 brings Chrome for Android to parity with desktop platforms \*\*Key Takeaway:\*\* Chrome marks this as a major milestone for bringing mobile browser AI beyond desktop-only hardware constraints
- [chrome.com](https://developer.chrome.com/docs/ai/get-started) *(developer.chrome.com)*
  > \*\*Key Takeaway:\*\* Chrome marks this as a major milestone for bringing mobile browser AI beyond desktop-only hardware constraints Unlike the large Gemini Nano text generation models that demand substantial desktop VRAM, the language detection model is...
- [Language detection with built-in AI  \|  AI in Chrome  \|  Chrome for Developers](https://developer.chrome.com/docs/ai/language-detection) *(developer.chrome.com)*
  > Unlike the large Gemini Nano text generation models that demand substantial desktop VRAM, the language detection model is compact enough to run smoothly across mobile hardware \*\*developer.chrome.com: \*"Language detection with built-in AI"\* & \*"Modern...
- [Building a Translation Demo with the Chrome Built-in AI APIs](https://techhub.iodigital.com/articles/building-a-translation-demo-with-chromes-built-in-ai-apis) *(techhub.iodigital.com)*
  > \*\*Dave Bitter (iO tech\_hub): \*"Building a Translation Demo with Chrome Built-in AI APIs"\*\*\* \*\*Summary:\*\* Explores a practical implementation demo showcasing an e-commerce review section that dynamically identifies reviews in multiple languages and tr...
- [\[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17245.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android 'Jaewon Lee' via blink-dev Thu, 20 Aug 2...
- [\[blink-dev\] Web-Facing Change PSA: Language Detector API on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17765.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android 'Jaewon Lee' via blink-dev Fri, 16 Oct 2026 12:05:51 -0700 Contact emails \[e...
- [Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17246.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Daniel Bratell Fri, 21 Aug 2026 ...
- [Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17267.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android 'Jaewon Lee' via blink-dev Mon, ...
- [Re: \[blink-dev\] Re: Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13549.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; Best, &gt;&gt; &gt;&gt; Alex &gt;&gt; &gt;&gt; On Friday, April 25, 2025 at 1:58:12 PM UTC-7 Deepti Bogadi wrote: &gt;&gt; &gt;&gt;&gt; Contact emails &gt;&gt;&gt; &gt;&gt;&gt; \[email protected\], \[email protected\], \[email protected\]...
- [Re: \[blink-dev\] Re: Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13723.html) *(mail-archive.com)*
  > We&#x27;d like to fully support this API on Android, and it&#x27;s going to take some additional implementation work to make that happen. As a result, we&#x27;re prioritizing desktop support for this release · On Fri, May 16, 2025 at 11:39 AM Christi...
- [Intent to Ship: Language Detector API](https://groups.google.com/a/chromium.org/g/blink-dev/c/sWcHBe9wpbo/m/H8Xp7NXTCQAJ) *(groups.google.com)*
  > So the maximum number of fingerprinting bits is 1, and usually 0 since you can only distinguish between downloaded vs. un-downloaded shortly after new browser installations. In our implementation, the expectedInputLanguages constructor parameter does...
- [\[blink-dev\] Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13517.html) *(mail-archive.com)*
  > We anticipate seeing an ecosystem of such polyfills grow as more developers experiment with this API. WebView application risks Does this intent deprecate or change behavior of existing APIs, such that it has potentially high risk for Android WebView...
- [Re: \[blink-dev\] Re: Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13712.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: \[blink-dev\] Re: Intent to Ship: Language Detector API · &#x27;Ashley Newson&#x27; via blink-dev Thu, 15 May 2025 07:11:29 -0700 · Hi folks, I see that the Language Detection API blink feature has been flipp...
- [Re: \[blink-dev\] Re: Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13720.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: \[blink-dev\] Re: Intent to Ship: Language Detector API · &#x27;Christine Hollingsworth&#x27; via blink-dev Fri, 16 May 2025 08:31:49 -0700 · Hi Ashley, thank you for bringing this to our attention! This API ...
- [How to Use Chrome’s Built-in Gemini Nano APIs: Translator & Language Detector \| by Harsh Gautam \| Medium](https://theharshgautam.medium.com/how-to-use-chromes-built-in-gemini-nano-apis-translator-language-detector-2368e9019d6e) *(theharshgautam.medium.com · 2025-09-07T08:58:13)*
  > Well, with Chrome’s built-in ... text between languages on the client side. LanguageDetector API — &lt;strong&gt;Detect the language of any given text&lt;/strong&gt;....
- [Building with Chrome’s Built-in AI: A Comprehensive Guide to Translation and Language Detection APIs \| by hao yin \| Medium](https://medium.com/@yinhaocomeon/building-with-chromes-built-in-ai-a-comprehensive-guide-to-translation-and-language-detection-dbaa8e53310a) *(medium.com · 2025-11-06T05:38:51)*
  > // Check for API support before invoking if (&#x27;Translator&#x27; in self &amp;&amp; &#x27;LanguageDetector&#x27; in self) { // Use built-in AI APIs const translatedText = await translateText(originalText, &#x27;es&#x27;, &#x27;en&#x27;); } else { ...
- [Language Detector API \| AI Playground](https://chrome.dev/web-ai-demos/built-in-ai-playground/language-detector-api) *(chrome.dev)*
  > const detector = await LanguageDetector.create({ expectedInputLanguages: \[\], monitor(m: any) { m.addEventListener(&quot;downloadprogress&quot;, (e: any) =&gt; { console.log(\`Downloaded ${e.loaded \* 100}%\`); }); }, signal: abortController.signal, }); ...
- [Chrome's Language Detection API: On-Device and Free](https://extensionbooster.net/blog/chrome-language-detection-api-guide-extension-developers) *(extensionbooster.net · 2026-04-08T00:00:00)*
  > One API call. Zero network traffic. Ranked results with confidence scores. if (&#x27;LanguageDetector&#x27; in self) { // Chrome 138+ with Language Detection support } ... const results = await detector.detect(&#x27;Bonjour le monde!&#x27;); console....
- [Detect languages with the Language Detector API - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/languagedetector-api) *(learn.microsoft.com · 2026-06-01T00:00:00)*
  > Creating a session instructs the browser to load the language detection model in memory, so that the model can be used. Before you can detect the language, &lt;strong&gt;create a new session by using the LanguageDetector.create() method&lt;/strong&gt;:
- [Intent to Ship: Language Detector API](https://groups.google.com/a/chromium.org/g/blink-dev/c/sWcHBe9wpbo/m/H8Xp7NXTCQAJ?hl=ja) *(groups.google.com)*
  > This intent message was generated by Chrome Platform Status.
- [Intent to Ship: Language Detector API](https://groups.google.com/a/chromium.org/g/blink-dev/c/sWcHBe9wpbo) *(groups.google.com)*
  > Either email addresses are anonymous ... · On Wed, Apr 30, 2025, 3:56 PM Deepti Bogadi &lt;dbo...@chromium.org&gt; wrote: ... &lt;strong&gt;Yes, the intent is to ship section 4 from the linked specification&lt;/strong&gt;....
- [Re: \[blink-dev\] Re: Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13595.html) *(mail-archive.com)*
  > False Measurement kV8AILanguageDetector\_Detect\_Method Estimated milestones Shipping on desktop 137 Origin trial desktop first 130 Origin trial desktop last 135 Origin trial extension 1 end milestone 138 DevTrial on desktop 129 Origin trial Android fi...
- [Re: \[blink-dev\] Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13550.html) *(mail-archive.com)*
  > &gt; &gt; False &gt; &gt; Measurement &gt; &gt; kV8AILanguageDetector\_Detect\_Method &gt; &gt; Estimated milestones &gt; &gt; Shipping on desktop &gt; &gt; 137 &gt; &gt; Origin trial desktop first &gt; &gt; 130 &gt; &gt; Origin trial desktop last &gt;...
- [\[blink-dev\] Re: Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13520.html) *(mail-archive.com)*
  > &gt; &gt; False &gt; &gt; Measurement &gt; &gt; kV8AILanguageDetector\_Detect\_Method &gt; &gt; Estimated milestones &gt; &gt; Shipping on desktop &gt; &gt; 137 &gt; &gt; Origin trial desktop first &gt; &gt; 130 &gt; &gt; Origin trial desktop last &gt;...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17245.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android 'Jaewon Lee' via blink-dev Thu...
- [\[blink-dev\] Web-Facing Change PSA: Language Detector API on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17765.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android 'Jaewon Lee' via blink-dev Fri, 16 Oct 2026 12:05:51 -0700 Contact...
- [Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17246.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Daniel Bratell Fri, 21...
- [Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17267.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android 'Jaewon Lee' via blink...
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > https://&lt;strong&gt;chromestatus.com/feature/5087964794322944&lt;/strong&gt; will need a run on Android.
- [translation-api/index.bs at main · webmachinelearning/translation-api · GitHub](https://github.com/webmachinelearning/translation-api/blob/main/index.bs) *(github.com)* *(Cites: `https://webmachinelearning.github.io/translation-api`)*
  > The translator and language detector APIs &lt;strong&gt;expose the ability to translate text between human languages, and detect the language of such text&lt;/strong&gt;. They are complementary to any built-in browser UI features for these purposes, gi...
- [GitHub - michaelwasserman/translation-api: 🌏 A proposal for translator and language detector APIs · GitHub](https://github.com/michaelwasserman/translation-api) *(github.com)* *(Cites: `https://webmachinelearning.github.io/translation-api`)*
  > The event is a ProgressEvent whose loaded property is between 0 and 1, and whose total property is always 1. (The exact number of total or downloaded bytes are not exposed; see the discussion in webmachinelearning/writing-assistance-apis is...
- [Re: \[blink-dev\] Re: Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13549.html) *(mail-archive.com)* *(Cites: `https://webmachinelearning.github.io/translation-api`)*
  > &gt;&gt; &gt;&gt; Best, &gt;&gt; &gt;&gt; Alex &gt;&gt; &gt;&gt; On Friday, April 25, 2025 at 1:58:12 PM UTC-7 Deepti Bogadi wrote: &gt;&gt; &gt;&gt;&gt; Contact emails &gt;&gt;&gt; &gt;&gt;&gt; \[email protected\], \[email protected\], \[email ...

## 📚 Platform Documentation & Specifications

- [Translator and Language Detector APIs - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Translator_and_Language_Detector_APIs) *(developer.mozilla.org)*
- [LanguageDetector - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector) *(developer.mozilla.org)*
- [Updates for Chrome 157 beta by Elchi3 · Pull Request #30893 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/30893) *(github.com)*
- [translation-api/index.bs at main · webmachinelearning/translation-api · GitHub](https://github.com/webmachinelearning/translation-api/blob/main/index.bs) *(github.com)*
- [GitHub - michaelwasserman/translation-api: 🌏 A proposal for translator and language detector APIs · GitHub](https://github.com/michaelwasserman/translation-api) *(github.com)*
- [modern-web-guidance/skills/modern-web-guidance/guides/built-in-ai/language-detection.md at main · GoogleChrome/modern-web-guidance · GitHub](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/built-in-ai/language-detection.md) *(github.com)*
- [Using the Translator and Language Detector APIs - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using) *(developer.mozilla.org)*
- [LanguageDetector: detect() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector/detect) *(developer.mozilla.org)*
- [LanguageDetector: create() static method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector/create_static) *(developer.mozilla.org)*
- [edge-developer/microsoft-edge/web-platform/languagedetector-api.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/languagedetector-api.md) *(github.com)*
- [translation-api/README.md at main · webmachinelearning/translation-api · GitHub](https://github.com/webmachinelearning/translation-api/blob/main/README.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 72 result(s) found across 12 planned queries — **33 verified relevant**
  - `"chromestatus.com/feature/5087964794322944" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (5 returned)
  - `"github.com/webmachinelearning/translation-api" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"webmachinelearning.github.io/translation-api" -site:webmachinelearning.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Language Detector API on Android" API` — *Core feature API query* (1 returned)
  - `"Language Detector API on Android" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacy-preserving" OR "offline-capable" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Language Detector API on Android" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Language Detector API on Android" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"LanguageDetector" OR "Language Detector API" (tutorial OR guide OR "how to") ("Chrome for Android" OR "built-in AI")` — *Finds developer guides and tutorials demonstrating how to implement on-device language detection on Chrome for Android.* (8 returned)
  - `("ai.languageDetector.create" OR "translation.createDetector" OR "new LanguageDetector") detect javascript` — *Locates real-world JavaScript code snippets and syntax patterns showing detector instantiation and text classification.* (8 returned)
  - `"Language Detector API" ("Chrome for Android" OR "Chromium") ("intent to ship" OR "origin trial" OR "status")` — *Tracks official browser engine announcements, Chrome feature tracking entries, and rollout timelines for Android.* (8 returned)
  - `("Language Detector API" OR "LanguageDetector") (site:news.ycombinator.com OR site:reddit.com OR site:github.com/webmachinelearning)` — *Discovers web developer reactions, feedback, and technical discussions across community forums and standard repositories.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 3 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 16 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5087964794322944)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5087964794322944)
- [Specification](https://webmachinelearning.github.io/translation-api)
- [Chromium Tracking Bug](https://crbug.com/549896512)
