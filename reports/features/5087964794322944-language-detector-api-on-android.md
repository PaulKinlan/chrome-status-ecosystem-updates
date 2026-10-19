# Language Detector API on Android

> **Report Week:** 2026-W43 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Exposes the LanguageDetector JavaScript Web API on Chrome for Android (Clank). This allows web applications to detect text languages locally on mobile devices using fast, privacy-preserving, and offline-capable on-device machine learning models and not rely on cloud endpoints.

### Motivation

Exposing the Language Detector API on Chrome for Android allows web applications to perform fast, privacy-preserving, and offline-capable language identification directly within mobile browsers.

## Ecosystem Status

- **Momentum:** High (footprint 410 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Language Detector API rolling out in Chrome 157 for Android brings local, privacy-preserving, and offline-capable text language identification to mobile web apps via built-in AI models. However, the ecosystem remains heavily fragmented as the feature lacks cross-browser consensus, sitting at Limited Availability with a negative position from Mozilla and an open, cautious posture from WebKit.

### Recommendations
- Actionable Advice: Development teams should treat this API strictly as a progressive enhancement. Because it is presently exclusive to Chromium-enabled environments and lacks cross-browser backing, fallback logic or lightweight JavaScript language-detection libraries remain necessary for universal support.
- Shipping enabled by default in Chrome 157. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @tomayac: "&gt; We have an open Pull Request to implement the proposed API into Mastodon, but we are waiting to have at least 2 browser engines support the proposal..."
- Standards Activity (Mozilla): Latest discussion from @sandstrom: "&gt; We are negative on this proposal. While we plan to describe the reasons further in \[our proposal\](https://github.com/mozilla/explainers/blob/main/tr..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome 157 Hits Beta With Language Detector on Android https://t.co/PH7rfD7JCx" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Web Translation API](https://github.com/WebKit/standards-positions/issues/339) [open]
- **Mozilla:** [Web Translation API](https://github.com/mozilla/standards-positions/issues/1015) [closed]

## Web-features Group

*group-level data: web-features [`languagedetector`](https://webstatus.dev/features/languagedetector), shared with 1 other ChromeStatus feature*

- Share of tests passing in the web-features group `languagedetector` on [wpt.fyi](https://wpt.fyi/results?q=feature:languagedetector) (via webstatus.dev) — stable: Chrome 25% · Edge 75% · Firefox 25% · Safari 25%; experimental: Chrome 25% · Edge 75% · Firefox 25% · Safari 25%
- **Chrome usage:** 0.0021% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/425))

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome 157 Hits Beta With Language Detector on Android https://t.co/PH7rfD7JCx](https://twitter.com/GeekChrome/status/2111079744636682606) — *by @GeekChrome, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Language detection with built-in AI \| AI in Chrome \| Chrome for Developers](https://developer.chrome.com/docs/ai/language-detection) *(developer.chrome.com)*
  > The \*\*Language Detector API\*\* is a built-in Web AI feature that allows web applications to detect the natural language of input text directly on the client side
- [appspot.com](https://cr-status.appspot.com/feature/5087964794322944) *(cr-status.appspot.com)*
  > By exposing this API on \*\*Chrome for Android (Clank)\*\*, mobile browsers can leverage fast, privacy-preserving, and offline-capable on-device machine learning models (such as lightweight Chromium or Google AI Edge task models) without requiring data t...
- [chromegeek.com](https://www.chromegeek.com/chrome-157-beta-language-detector-android) *(chromegeek.com)*
  > \*\*Context:\*\* Official roadmap tracking and release notes highlight that Chrome 157 brings the \`LanguageDetector\` JavaScript API over to Android While desktop versions of Chrome previously pioneered these built-in web AI utilities
- [Language detection guide for Android \| Google AI Edge \| Google for Developers](https://developers.google.com/edge/mediapipe/solutions/text/language_detector/android) *(developers.google.com)*
  > \*\*Context:\*\* Technical guides outline how on-device language detection operates conceptually and code-wise (both on the web and natively on Android via Google's helper libraries) \*\*Significance:\*\* Emphasizes performance practices—such as running text...
- [Language detection guide for Web \| Google AI Edge \| Google for Developers](https://developers.google.com/edge/mediapipe/solutions/text/language_detector/web_js) *(developers.google.com)*
  > \*\*Context:\*\* Technical guides outline how on-device language detection operates conceptually and code-wise (both on the web and natively on Android via Google's helper libraries)
- [Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17246.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Daniel Bratell Fri, 21 Aug 2026 ...
- [\[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17245.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android 'Jaewon Lee' via blink-dev Thu, 20 Aug 2...
- [\[blink-dev\] Web-Facing Change PSA: Language Detector API on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17765.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android 'Jaewon Lee' via blink-dev Fri, 16 Oct 2026 12:05:51 -0700 Contact emails \[e...
- [\[blink-dev\] Re: Intent to Extend Experiment: Translator API](https://www.mail-archive.com/blink-dev@chromium.org/msg13425.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; For the 137-138 extension request, we plan a couple more, namely restricting &gt;&gt; from cross-origin iframes (but with a permission policy to delegate back), &gt;&gt; and removing worker support &gt;&gt; &lt;https://&lt;strong&gt;githu...
- [Intent to Ship: Translator API](https://groups.google.com/a/chromium.org/g/blink-dev/c/eCE8jIW2auo/m/mbz4xL7CAgAJ) *(groups.google.com · 2025-06-02T00:00:00)*
  > https://&lt;strong&gt;github.com/webmachinelearning/translation-api&lt;/strong&gt;/blob/main/README.md
- [\[blink-dev\] Intent to Ship: Translator API](https://www.mail-archive.com/blink-dev@chromium.org/msg13837.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Translator API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Translator API Deepti Bogadi Mon, 02 Jun 2025 15:07:45 -0700 Contact emails \[email&#160;protected\] , \[email&#160;protected\] , \[email&#160;pro...
- [Intent to Extend Experiment: Translator API](https://groups.google.com/a/chromium.org/g/blink-dev/c/5DikAhbCv7M/m/BdQVdE6cAwAJ) *(groups.google.com)*
  > Outreach for feedback from the spec community: we&#x27;ve discussed this API a few times at Web ML Community Group meetings. Additionally, feedback from the internationalization spec community was helpful in resolving https://&lt;strong&gt;github.com/webma...
- [Re: \[blink-dev\] Re: Intent to Ship: Translator API](https://www.mail-archive.com/blink-dev@chromium.org/msg13843.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Translator API Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Translator API Mike Taylor Tue, 03 Jun 2025 07:27:18 -0700 On 6/3/25 9:27 AM, 'Kagami Rosylight' via blink-dev wrote: &gt; They ...
- [Intent to Ship: Language Detector API](https://groups.google.com/a/chromium.org/g/blink-dev/c/sWcHBe9wpbo/m/H8Xp7NXTCQAJ) *(groups.google.com)*
  > Intent to Ship: Language Detector API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Language Detector API 1,862 views Skip to first ...
- [\[blink-dev\] Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13517.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Language Detector API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Language Detector API Deepti Bogadi Fri, 25 Apr 2025 13:58:07 -0700 Contact emails \[email&#160;protected\] , \[email&#160;protected\] , \[...
- [Re: \[blink-dev\] Re: Intent to Ship: Translator API](https://www.mail-archive.com/blink-dev@chromium.org/msg13865.html) *(mail-archive.com)*
  > On Tuesday, June 3, 2025 at 12:07:35 ... https://webmachinelearning.github.io/translation-api/#translator-api Summary &lt;strong&gt;A JavaScript API to provide language translation capabilities to web pages&lt;/strong&gt;....
- [Chee Aun 🤔: "#PhanpySocial changelog ✨ 🎏 C…"](https://mastodon.social/@cheeaun/114149642985452634) *(mastodon.social · 2025-03-12T13:15:23)*
  > #PhanpySocial changelog ✨ 🎏 Change profile header and avatar 🗓️ Scheduled posts 🗣️ Experimental implementation of Translator &amp; Language Detector APIs (Chrome 131 - 137) https://&lt;strong&gt;webmachinelearning.github.io/translation-api&lt;/strong&gt;/ - C...
- [Language Detector API - Chrome Platform Status](https://chromestatus.com/feature/6494349985841152) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Language detection API available for early preview \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/august2024-language-detection) *(developer.chrome.com · 2024-08-27T00:00:00)*
  > Language detection is the first step for translation. Browsers often already have language detection capabilities, and this API will allow web developers to access this technology with a JavaScript API.
- [Building a Translation Demo with the Chrome Built-in AI APIs](https://techhub.iodigital.com/articles/building-a-translation-demo-with-chromes-built-in-ai-apis) *(techhub.iodigital.com · 2025-10-29T00:00:00)*
  > &lt;strong&gt;Navigate to chrome://flags/#language-detection-api and enable it&lt;/strong&gt; · Navigate to chrome://flags/#optimization-guide-on-device-model and enable it
- [Chrome's Language Detection API: On-Device and Free](https://extensionbooster.net/blog/chrome-language-detection-api-guide-extension-developers) *(extensionbooster.net · 2026-04-08T00:00:00)*
  > One API call. Zero network traffic. Ranked results with confidence scores. if (&#x27;LanguageDetector&#x27; in self) { // Chrome 138+ with Language Detection support } ... const results = await detector.detect(&#x27;Bonjour le monde!&#x27;); console....
- [LanguageDetector interface - WebIDLpedia](https://dontcallmedom.github.io/webidlpedia/names/LanguageDetector.html) *(dontcallmedom.github.io)*
  > \[Exposed=Window, SecureContext\] interface LanguageDetector { static Promise&lt;LanguageDetector&gt; create( optional LanguageDetectorCreateOptions options = {} ); static Promise&lt;Availability&gt; availability( optional LanguageDetectorCreateCoreOpt...
- [Build a language detection app with Chrome's Language Detection API in Angular - DEV Community](https://dev.to/railsstudent/build-a-language-detection-app-with-chromes-built-in-ai-in-angular-24kp) *(dev.to · 2025-01-05T15:00:08)*
  > navigator.language returns the language of the browser. The example detects the language of the input.
- [\[blink-dev\] Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17096.html) *(mail-archive.com)*
  > Explainer https://github.com/webmachinelearning/translation-api Specification https://webmachinelearning.github.io/translation-api Summary Exposes the LanguageDetector and Translator JavaScript Web APIs on Chrome for Android (Clank). This allows web ...
- [Intent to Experiment: Language Detector API](https://groups.google.com/a/chromium.org/g/blink-dev/c/XTy-FmWjW3g/m/p06Sdgd3AQAJ) *(groups.google.com)*
  > Does this intent deprecate or change behavior of existing APIs, such that it has potentially high risk for Android WebView-based applications? ... Our main goal for the origin trial is to get feedback on model quality and performance when faced with ...
- [Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17267.html) *(mail-archive.com)*
  > &gt; &gt; &gt; On &lt;strong&gt;Wednesday, July 29, 2026&lt;/strong&gt; at 2:17:23 PM UTC-7 Jaewon Lee wrote: &gt; &gt;&gt; Contact emails &gt;&gt; &gt;&gt; \[email protected\] &gt;&gt; &gt;&gt; Explainer &gt;&gt; &gt;&gt; https://github.com/webmachinelearning/tra...
- [Chrome AI Privacy: 7 Critical Facts About On-Device Processing](https://www.progressiverobot.com/2026/05/09/chrome-ai-privacy) *(progressiverobot.com · 2026-05-09T20:02:40)*
  > The Summarizer API documentation uses similar language for local use after download. The broader client-side AI guide frames on-device inference as useful for privacy, security, latency, and availability, while warning that client-side AI is not alwa...
- [Built-in AI \| AI in Chrome \| Chrome for Developers](https://developer.chrome.com/docs/ai/built-in) *(developer.chrome.com)*
  > &lt;strong&gt;Live translate text in the browser using local AI models&lt;/strong&gt;. Help users contribute in their first language. Identify the language used in any given text with the Language Detector API.
- [Google tweaks Chrome AI privacy wording, insists processing stays on-device](https://www.theregister.com/ai-and-ml/2026/05/09/google-tweaks-chrome-ai-privacy-wording-insists-processing-stays-on-device/5237580) *(theregister.com · 2026-05-11T10:47:12)*
  > Google says Chrome’s on-device AI still stays local after a privacy wording change sparked fresh concern.
- [Google Tweaks Chrome AI Privacy Wording Over Prompt API Use](https://winbuzzer.com/2026/05/11/google-tweaks-chrome-ai-privacy-wording-insists-pr-xcxwbn) *(winbuzzer.com · 2026-05-11T11:50:05)*
  > With the edit, users have lost the clearest plain-language privacy promise attached to Chrome’s local model controls. Chrome still uses on-device AI models. Chrome was already under scrutiny before that wording change. Users had been watching model d...
- [Get started with built-in AI \| AI in Chrome \| Chrome for Developers](https://developer.chrome.com/docs/ai/get-started) *(developer.chrome.com · 2024-05-20T00:00:00)*
  > The Language Detector and Translator APIs work in Chrome on desktop. These APIs do not work on mobile devices. The Prompt API, Summarizer API, Writer API, Rewriter API, and Proofreader API work in Chrome when the following conditions are met: Operati...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17246.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Daniel Bratell Fri, 21...
- [\[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17245.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: Language Detector and Translator APIs on Android 'Jaewon Lee' via blink-dev Thu...
- [\[blink-dev\] Web-Facing Change PSA: Language Detector API on Android](http://www.mail-archive.com/blink-dev@chromium.org/msg17765.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5087964794322944`)*
  > \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Language Detector API on Android 'Jaewon Lee' via blink-dev Fri, 16 Oct 2026 12:05:51 -0700 Contact...
- [\[blink-dev\] Re: Intent to Extend Experiment: Translator API](https://www.mail-archive.com/blink-dev@chromium.org/msg13425.html) *(mail-archive.com)* *(Cites: `https://github.com/webmachinelearning/translation-api`)*
  > &gt;&gt; &gt;&gt; For the 137-138 extension request, we plan a couple more, namely restricting &gt;&gt; from cross-origin iframes (but with a permission policy to delegate back), &gt;&gt; and removing worker support &gt;&gt; &lt;https://&lt;st...
- [Intent to Ship: Translator API](https://groups.google.com/a/chromium.org/g/blink-dev/c/eCE8jIW2auo/m/mbz4xL7CAgAJ) *(groups.google.com · 2025-06-02T00:00:00)* *(Cites: `https://github.com/webmachinelearning/translation-api`)*
  > https://&lt;strong&gt;github.com/webmachinelearning/translation-api&lt;/strong&gt;/blob/main/README.md
- [\[blink-dev\] Intent to Ship: Translator API](https://www.mail-archive.com/blink-dev@chromium.org/msg13837.html) *(mail-archive.com)* *(Cites: `https://github.com/webmachinelearning/translation-api`)*
  > \[blink-dev\] Intent to Ship: Translator API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Translator API Deepti Bogadi Mon, 02 Jun 2025 15:07:45 -0700 Contact emails \[email&#160;protected\] , \[email&#160;protected\] , \[emai...
- [Intent to Extend Experiment: Translator API](https://groups.google.com/a/chromium.org/g/blink-dev/c/5DikAhbCv7M/m/BdQVdE6cAwAJ) *(groups.google.com)* *(Cites: `https://github.com/webmachinelearning/translation-api`)*
  > Outreach for feedback from the spec community: we&#x27;ve discussed this API a few times at Web ML Community Group meetings. Additionally, feedback from the internationalization spec community was helpful in resolving https://&lt;strong&gt;github...
- [Re: \[blink-dev\] Re: Intent to Ship: Translator API](https://www.mail-archive.com/blink-dev@chromium.org/msg13843.html) *(mail-archive.com)* *(Cites: `https://github.com/webmachinelearning/translation-api`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Translator API Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Translator API Mike Taylor Tue, 03 Jun 2025 07:27:18 -0700 On 6/3/25 9:27 AM, 'Kagami Rosylight' via blink-dev wrot...
- [Language Detector API · Issue #3717 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3717) *(github.com · 2026-01-23T16:21:35)* *(Cites: `https://webmachinelearning.github.io/translation-api`)*
  > Language Detector API · Issue #3717 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...
- [Intent to Ship: Language Detector API](https://groups.google.com/a/chromium.org/g/blink-dev/c/sWcHBe9wpbo/m/H8Xp7NXTCQAJ) *(groups.google.com)* *(Cites: `https://webmachinelearning.github.io/translation-api`)*
  > Intent to Ship: Language Detector API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Language Detector API 1,862 views Skip...
- [\[blink-dev\] Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13517.html) *(mail-archive.com)* *(Cites: `https://webmachinelearning.github.io/translation-api`)*
  > \[blink-dev\] Intent to Ship: Language Detector API Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Language Detector API Deepti Bogadi Fri, 25 Apr 2025 13:58:07 -0700 Contact emails \[email&#160;protected\] , \[email&#160;prot...
- [Re: \[blink-dev\] Re: Intent to Ship: Translator API](https://www.mail-archive.com/blink-dev@chromium.org/msg13865.html) *(mail-archive.com)* *(Cites: `https://webmachinelearning.github.io/translation-api`)*
  > On Tuesday, June 3, 2025 at 12:07:35 ... https://webmachinelearning.github.io/translation-api/#translator-api Summary &lt;strong&gt;A JavaScript API to provide language translation capabilities to web pages&lt;/strong&gt;....
- [Chee Aun 🤔: "#PhanpySocial changelog ✨ 🎏 C…"](https://mastodon.social/@cheeaun/114149642985452634) *(mastodon.social · 2025-03-12T13:15:23)* *(Cites: `https://webmachinelearning.github.io/translation-api`)*
  > #PhanpySocial changelog ✨ 🎏 Change profile header and avatar 🗓️ Scheduled posts 🗣️ Experimental implementation of Translator &amp; Language Detector APIs (Chrome 131 - 137) https://&lt;strong&gt;webmachinelearning.github.io/translation-api&lt;/st...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector) *(developer.mozilla.org)*
- [github.com](https://github.com/elevenlabs/captions.events/blob/main/CHROME_LANGUAGE_DETECTOR.md) *(github.com)*
- [Language Detector API · Issue #3717 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3717) *(github.com)*
- [Translator and Language Detector APIs - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Translator_and_Language_Detector_APIs) *(developer.mozilla.org)*
- [translator-api · GitHub Topics · GitHub](https://github.com/topics/translator-api) *(github.com)*
- [GitHub - michaelwasserman/translation-api: 🌏 A proposal for translator and language detector APIs](https://github.com/michaelwasserman/translation-api) *(github.com)*
- [LanguageDetector: detect() method](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector/detect) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 66 result(s) found across 12 planned queries — **33 verified relevant**
  - `"chromestatus.com/feature/5087964794322944" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/webmachinelearning/translation-api" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"webmachinelearning.github.io/translation-api" -site:webmachinelearning.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"Language Detector API on Android" API` — *Core feature API query* (1 returned)
  - `"Language Detector API on Android" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacy-preserving" OR "offline-capable" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Language Detector API on Android" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Language Detector API on Android" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `LanguageDetector API Chrome Android tutorial guide` — *Finds practical developer guides and tutorials for using the Language Detector API on Chrome for Android.* (8 returned)
  - `navigator.languageDetector.create Android Chrome WebIDL code example` — *Searches for actual JavaScript implementation syntax and WebIDL usage for on-device language detection.* (8 returned)
  - `"Language Detector API" Chrome Android OR "translation-api" GitHub PR release` — *Discovers ecosystem announcements, specifications, and progress tracking regarding the API on mobile.* (8 returned)
  - `Chrome for Android local AI language detection privacy developer feedback` — *Gauges community sentiment, discussions, and developer reactions to local mobile-based language detection.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 7 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 2 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 15 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 5 result(s) found — **0 verified relevant**
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
