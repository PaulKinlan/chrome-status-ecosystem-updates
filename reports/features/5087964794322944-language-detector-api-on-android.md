# Language Detector API on Android

> **Report Week:** 2026-W42 | **Milestone:** Chrome 157 | **Category:** Enabled by default

## Overview

Exposes the LanguageDetector JavaScript Web API on Chrome for Android (Clank). This allows web applications to detect text languages locally on mobile devices using fast, privacy-preserving, and offline-capable on-device machine learning models and not rely on cloud endpoints.

### Motivation

Exposing the Language Detector API on Chrome for Android allows web applications to perform fast, privacy-preserving, and offline-capable language identification directly within mobile browsers.

## Ecosystem Status

- **Momentum:** Moderate (footprint 230 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** The expansion of the Language Detector API to Chrome on Android broadens Chromium's built-in on-device AI capabilities to mobile web apps, enabling privacy-preserving, zero-cost language identification. However, the feature currently sits in Limited Availability on Baseline without cross-vendor consensus. While developers appreciate the efficiency over cloud round-trips, the absence of multi-engine support prevents it from becoming a dependable web standard.

### Recommendations
- Actionable Advice: Treat the API strictly as a progressive enhancement behind explicit runtime feature checks (\`'LanguageDetector' in self\`). Teams must continue providing server-side endpoints or client-side WebAssembly fallbacks to handle Safari, Firefox, and unconfigured environments.
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
- **Chrome usage:** 0.0021% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/425))

## 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/5087964794322944) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [Language detection with built-in AI \| AI in Chrome \| Chrome for Developers](https://developer.chrome.com/docs/ai/language-detection) *(developer.chrome.com)*
  > Previously restricted to desktop operating systems (Windows, macOS, Linux) Previously restricted to desktop operating systems (Windows, macOS, Linux), exposing the API on Android allows mobile web applications to identify the language of user input l...
- [talent500.com](https://talent500.com/blog/chrome-ai-api-on-device-summarization-translation) *(talent500.com)*
  > Previously restricted to desktop operating systems (Windows, macOS, Linux) \* Bitter highlighted that early versions were desktop-only and required strict hardware flags, so bringing these lightweight primitives to Android is a major milestone for ubi...
- [raymondcamden.com](https://www.raymondcamden.com/2025/08/13/adding-programming-language-detection-with-built-in-chrome-ai) *(raymondcamden.com)*
  > He highlights that using task-specific APIs (\`LanguageDetector\`) is much faster and simpler than prompting an LLM like Gemini Nano directly to "guess the language \* \*\*Raymond Camden:\*\* \*Adding Programming Language Detection with Built-in Chrome AI\*
- [caniuse.com](https://caniuse.com/wf-languagedetector) *(caniuse.com)*
  > \*\*Cross-Browser & Progressive Enhancement:\*\* Because Safari and Firefox do not currently support the Chromium built-in AI specification natively, community tutorials emphasize \*\*progressive enhancement\*\*
- [Intent to Ship: Language Detector API](https://groups.google.com/a/chromium.org/g/blink-dev/c/sWcHBe9wpbo/m/H8Xp7NXTCQAJ) *(groups.google.com)*
  > Intent to Ship: Language Detector API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Language Detector API 1,826 views Skip to first ...
- [Get started with built-in AI \| AI in Chrome \| Chrome for Developers](https://developer.chrome.com/docs/ai/get-started) *(developer.chrome.com · 2024-05-20T00:00:00)*
  > The Language Detector and Translator APIs work in Chrome on desktop. &lt;strong&gt;These APIs do not work on mobile devices&lt;/strong&gt;. The Prompt API, Summarizer API, Writer API, Rewriter API, and Proofreader API work in Chrome when the following conditions...
- [\[blink-dev\] Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13517.html) *(mail-archive.com)*
  > False Measurement kV8AILanguageDetector\_Detect\_Method Estimated milestones Shipping on desktop 137 Origin trial desktop first 130 Origin trial desktop last 135 Origin trial extension 1 end milestone 138 DevTrial on desktop 129 Origin trial Android fi...
- [Re: \[blink-dev\] Re: Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13595.html) *(mail-archive.com)*
  > False Measurement kV8AILanguageDetector\_Detect\_Method Estimated milestones Shipping on desktop 137 Origin trial desktop first 130 Origin trial desktop last 135 Origin trial extension 1 end milestone 138 DevTrial on desktop 129 Origin trial Android fi...
- [Re: \[blink-dev\] Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13573.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: \[blink-dev\] Intent to Ship: Language Detector API · &#x27;Domenic Denicola&#x27; via blink-dev Wed, 30 Apr 2025 20:28:54 -0700 · On Thu, May 1, 2025 at 12:17 AM Jeffrey Yasskin &lt;\[email protected\]&gt; wro...
- [\[blink-dev\] Re: Intent to Ship: Language Detector API](https://www.mail-archive.com/blink-dev@chromium.org/msg13520.html) *(mail-archive.com)*
  > &gt; &gt; False &gt; &gt; Measurement &gt; &gt; kV8AILanguageDetector\_Detect\_Method &gt; &gt; Estimated milestones &gt; &gt; Shipping on desktop &gt; &gt; 137 &gt; &gt; Origin trial desktop first &gt; &gt; 130 &gt; &gt; Origin trial desktop last &gt;...
- [Detect languages with the Language Detector API - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/languagedetector-api) *(learn.microsoft.com · 2026-06-01T00:00:00)*
  > Creating a session instructs the browser to load the language detection model in memory, so that the model can be used. Before you can detect the language, create a new session by using the LanguageDetector.create() method:
- [Build a language detection app with Chrome's Language Detection API in Angular - DEV Community](https://dev.to/railsstudent/build-a-language-detection-app-with-chromes-built-in-ai-in-angular-24kp) *(dev.to · 2025-01-05T15:00:08)*
  > In this blog post, I describe how to build a simple language detection application locally using Chrome&#x27;s Built-In Language Detection API and Angular. First, the Angular application calls the API to create a language detector and use it to detec...
- [LanguageDetector API \| Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-api_languagedetector) *(caniuse.com)*
  > LanguageDetector API \| Can I use... Support tables for HTML5, CSS3, etc Can I use Search ? Settings LanguageDetector API Global usage 25.92% + 0% = 25.92% IE ❌ 6 - 10 : Not supported ❌ 11 : Not supported Edge ❌ 12 - 147 : Not supported ✅ 148 - 153 : ...
- [Chrome Platform Status](https://img480-dot-cr-status.appspot.com/feature/5138651886518272) *(img480-dot-cr-status.appspot.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Language Detector API · Issue #3717 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3717) *(github.com · 2026-01-23T16:21:35)* *(Cites: `https://webmachinelearning.github.io/translation-api`)*
  > Language Detector API · Issue #3717 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...
- [Intent to Ship: Language Detector API](https://groups.google.com/a/chromium.org/g/blink-dev/c/sWcHBe9wpbo/m/H8Xp7NXTCQAJ) *(groups.google.com)* *(Cites: `https://webmachinelearning.github.io/translation-api`)*
  > Intent to Ship: Language Detector API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Language Detector API 1,826 views Skip...

## 📚 Platform Documentation & Specifications

- [LanguageDetector - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector) *(developer.mozilla.org)*
- [Language Detector API · Issue #3717 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/3717) *(github.com)*
- [Translator and Language Detector APIs - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Translator_and_Language_Detector_APIs) *(developer.mozilla.org)*
- [Using the Translator and Language Detector APIs - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using) *(developer.mozilla.org)*
- [LanguageDetector: detect() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/LanguageDetector/detect) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 12 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5087964794322944" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/webmachinelearning/translation-api" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"webmachinelearning.github.io/translation-api" -site:webmachinelearning.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Language Detector API on Android" API` — *Core feature API query* (0 returned)
  - `"Language Detector API on Android" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacy-preserving" OR "offline-capable" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Language Detector API on Android" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Language Detector API on Android" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Language Detector API" ("Chrome for Android" OR "Android") tutorial OR guide` — *Finds developer guides and articles explaining how to use on-device language detection on Android browsers.* (1 returned)
  - `("translation.createDetector" OR "ai.languageDetector" OR "LanguageDetector") detect snippet OR example javascript` — *Locates practical JavaScript code snippets and API call patterns using the Language Detector API.* (8 returned)
  - `"Language Detector API" ("Chrome for Android" OR "Clank") ("Intent to Ship" OR announcement OR "Chrome status")` — *Tracks platform announcements, implementation milestones, and intent to ship updates for Chrome on Android.* (5 returned)
  - `"Language Detector API" OR "LanguageDetector" (site:news.ycombinator.com OR site:reddit.com OR site:dev.to)` — *Surfaces community reactions, developer sentiment, and forum discussions regarding client-side language detection.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 16 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 5 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "languagedetector", shared with 1 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "languagedetector": Chrome 25% passing (stable)*
- **Sources cited by the AI synthesis:** 5 result(s) found — **4 verified relevant**

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
