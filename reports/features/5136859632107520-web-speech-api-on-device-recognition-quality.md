# Web Speech API: On-Device Recognition Quality

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

Extends the SpeechRecognition interface by adding a quality property to SpeechRecognitionOptions. This allows developers to specify the semantic capability required for on-device recognition (via processLocally: true).

The proposed quality enum supports three levels—'command', 'dictation', and 'conversation'—mapping to increasing task complexity and hardware requirements. This enables developers to determine if the local device can handle high-stakes use cases (like meeting transcription) or if they should fallback to cloud services, solving the current "black box" issue of on-device model capabilities.

### Motivation

While the introduction of processLocally: true was a significant step for privacy and latency, it currently treats all on-device models as functionally equivalent. In reality, on-device capabilities are highly fragmented: a lightweight model optimized for simple voice commands (e.g., "turn on the lights") is often insufficient for high-stakes use cases like video conferencing transcription or accessibility captioning, which require handling continuous speech, multiple speakers, and background noise.

Because developers currently have no way to verify the semantic capability of the local model, they must blindly trust the device or default to Cloud-based recognition to guarantee a minimum user experience. This lack of transparency forces developers to bypass on-device capabilities for high-end use cases, effectively negating the privacy and bandwidth benefits of the API. There is a critical need for a mechanism that allows applications to define their required "floor" of utility (e.g., conversation-grade accuracy) to confidently utilize local processing.

## Ecosystem Status

- **Momentum:** High (240 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Neutral
- **Executive Take:** Web Speech API: On-Device Recognition Quality is currently Enabled by default in Chrome 150. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @rniwa: "cc @szewai..."
- Standards Activity (Mozilla): Latest discussion from @padenot: "We don't anticipate to want or need this in the long run, and will probably never implement it. This is a dict, so implementor can just ignore the mem..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Add quality constraint to SpeechRecognitionOptions for on-device recognition](https://github.com/WebKit/standards-positions/issues/634) [open]
- **Mozilla:** [Add quality constraint to SpeechRecognitionOptions for on-device recognition](https://github.com/mozilla/standards-positions/issues/1375) [open]
- **W3C TAG:** [Incubation: Web Speech API: On-Device Recognition Quality](https://github.com/w3ctag/design-reviews/issues/1189) [closed]

## Packages & Polyfills

- [expo-speech-recognition](https://www.npmjs.com/package/expo-speech-recognition) `v57.0.0` — Speech Recognition for React Native Expo projects
- [react-speech-recognition](https://www.npmjs.com/package/react-speech-recognition) `v4.0.1` — Speech recognition for your React app
- [@types/dom-speech-recognition](https://www.npmjs.com/package/@types/dom-speech-recognition) `v0.0.12` — TypeScript definitions for dom-speech-recognition
- [@capgo/capacitor-speech-recognition](https://www.npmjs.com/package/@capgo/capacitor-speech-recognition) `v8.2.0` — Capacitor plugin for comprehensive on-device speech recognition with live partial results.

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: Web Speech API: On-Device Recognition Quality](https://groups.google.com/a/chromium.org/g/blink-dev/c/kR1Q5pcrk1Y) *(groups.google.com · 2026-01-15T00:00:00)*
  > Intent to Prototype: Web Speech API: On-Device Recognition Quality Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Web Speech API...
- [[blink-dev] Intent to Ship: Web Speech API: On-Device Recognition Quality](http://www.mail-archive.com/blink-dev@chromium.org/msg16460.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Web Speech API: On-Device Recognition Quality Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Web Speech API: On-Device Recognition Quality Chromestatus Tue, 05 May 2026 15:48:11 -0700 Contact emails [ema...
- [Re: [blink-dev] Intent to Ship: Web Speech API: On-Device Recognition Quality](http://www.mail-archive.com/blink-dev@chromium.org/msg16525.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Web Speech API: On-Device Recognition Quality Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Web Speech API: On-Device Recognition Quality Daniel Bratell Wed, 13 May 2026 08:16:19 -0700 LGTM3 /Da...
- [Web Speech API: On-Device Recognition Quality](https://chromestatus.com/feature/5136859632107520) *(chromestatus.com · 2026-01-15T00:00:00)*
  > Chrome Platform Status
- [Speech recognition in the browser using Web Speech API](https://www.assemblyai.com/blog/speech-recognition-javascript-web-speech-api) *(assemblyai.com)*
  > Speech recognition in the browser using Web Speech API Introducing our Voice Agent API: The fastest path to a working voice agent Learn more Customers Developers Resources Playground Pricing Enterprise Contact us Log in Get started Insights & Use Cas...
- [Web Speech API Explained with a Simple Browser Voice Demo](https://www.f22labs.com/blogs/web-speech-api-a-beginners-guide) *(f22labs.com · 2026-02-10T00:00:00)*
  > Web Speech API Explained with a Simple Browser Voice Demo Got a Project in Mind? Your Name Your Email Contact Number Phone Tell us about your requirements Submit Got a Project in Mind? Your Name Your Email Contact Number Phone Tell us about your requ...
- [A Deep Dive into the Web Speech API](https://blog.addpipe.com/a-deep-dive-into-the-web-speech-api) *(blog.addpipe.com · 2025-04-02T09:36:41)*
  > A Deep Dive into the Web Speech API 2 April 2025 / Technology A Deep Dive into the Web Speech API In today's digital landscape, how we interact with technology continues to evolve beyond traditional keyboard and mouse inputs. Voice-based interactions...
- [The Developer’s Guide to Web Speech API: What It Is, How It Works, and More](https://dzone.com/articles/the-developers-guide-to-web-speech-api-what-is-it) *(dzone.com · 2022-11-07T00:00:00)*
  > In the speech recognition (SpeechRecognition) interface, <strong>you speak into a microphone and then the speech recognition service then checks your words against its own grammar</strong>. The API protects the privacy of its users by first asking pe...
- [webkitSpeechRecognition and Rasa | Rasa Blog](https://rasa.com/blog/webkitspeechrecognition-and-rasa) *(rasa.com · 2021-01-22T00:00:00)*
  > We&#x27;ll call this server the &quot;API&quot; and the goal of this server is to act as a proxy between Rasa and the JavaScript that contains the speech recognizer. ... The idea is that <strong>when the user talks, the web speech API is able to turn...
- [Web Speech Recognition API — Voxpow.com](https://voxpow.com/blog/web-speech-recognition-api) *(voxpow.com · 2020-03-29T00:00:00)*
  > The Web Speech API has a main controller interface for this — SpeechRecognition — plus a number of closely-related interfaces for representing grammar, results, etc. Generally, the default speech recognition system available on the device will be use...
- [Speech to text in the browser with the Web Speech API | Twilio](https://www.twilio.com/en-us/blog/speech-recognition-browser-web-speech-api) *(twilio.com · 2024-07-22T14:49:06)*
  > Inspecting that result shows a list of SpeechRecognitionAlternative objects and the first one includes the transcript of what you said and a confidence value between 0 and 1. The default is to only return one alternative, but you can opt to receive m...
- [Pretext Does What CSS Can't — Measuring Text Before the DOM Even Exists | HackerNoon](https://hackernoon.com/pretext-does-what-css-cant-measuring-text-before-the-dom-even-exists) *(hackernoon.com · 2026-03-30T00:00:00)*
  > On March 28, 2026, Cheng Lou — formerly of Meta&#x27;s React core team and creator of the beloved react-motion animation library, now building frontend infrastructure at Midjourney — dropped pretext on GitHub with a viral X thread and a set of polish...
- [Free Speech Recognition API - PWA Demo](https://progressier.com/pwa-capabilities/speech-recognition) *(progressier.com · 2026-08-11T00:00:00)*
  > <strong>Natively integrate the SpeechRecognition API into your PWA to recognize and transcribe spoken language into text, allowing for voice-based input and interactions</strong>.
- [Tutorial: How to Build a Progressive Web App (PWA) with Face Recognition and Speech Recognition](https://dzone.com/articles/tutorial-how-to-build-a-pwa-with-face-and-speechrecognition) *(dzone.com · 2020-12-20T00:00:00)*
  > I will discuss advanced PWA features that provide access to your hardware APIs. We are going to build an app with Face Recognition and Speech Recognition.
- [Building a personal assistant PWA: Part 3 | Gun.io](https://gun.io/guest-posts/2022/04/building-a-pwa-part-3-the-finishing-touches) *(gun.io · 2023-09-21T15:09:08)*
  > There are ways to make a browser do speech recognition offline (e.g.: https://picovoice.ai/blog/offline-voice-ai-in-a-web-browser/), but we’re trying to keep things light and use as much of the standard browser APIs as possible, so we’ll be going the...
- [What PWA Can Do Today](https://whatpwacando.today) *(whatpwacando.today)*
  > Speech recognition is part of the Web Speech API and <strong>provides the ability to recognize voice context from an audio input</strong>. ... Touch events enable web apps to capture complex touch behaviour.
- [Capabilities | web.dev](https://web.dev/learn/pwa/capabilities) *(web.dev)*
  > Speech synthesis and voice recognition <strong>use the platform&#x27;s installed voices to speak to the user and to recognize what the user is saying, thanks to the Web Speech API</strong>. Share content from your PWA to other apps and places on the ...
- [Live ‘Speech-To-Text’ Recognition with Deepgram API in PWA | by Alex Gusev | Medium](https://wiredgoose.medium.com/live-speech-to-text-recognition-with-deepgram-api-in-pwa-6fa4068878e0) *(wiredgoose.medium.com · 2024-08-12T08:17:43)*
  > If you’re interested in taking your PWA to the next level by integrating Deepgram’s API, our team of expert developers is ready to help. We can work with you to create a customized solution that meets your specific needs, whether you’re looking to tr...
- [Taming the Web Speech API. Unfortunately the Web Speech API is… | by Andrea Giammarchi | Medium](https://webreflection.medium.com/taming-the-web-speech-api-ef64f5a245e1) *(webreflection.medium.com · 2023-02-02T14:26:45)*
  > Safari Mobile WebView triggers an error right away without even asking to activate the microphone. You need to check all demo within Safari itself, not as a WebView from PWAs or native apps, otherwise nothing would work. Safari on Mobile won’t allow ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Web Speech API: On-Device Recognition Quality](https://groups.google.com/a/chromium.org/g/blink-dev/c/kR1Q5pcrk1Y) *(groups.google.com · 2026-01-15T00:00:00)* *(Cites: `https://chromestatus.com/feature/5136859632107520`)*
  > Intent to Prototype: Web Speech API: On-Device Recognition Quality Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Web ...
- [[blink-dev] Intent to Ship: Web Speech API: On-Device Recognition Quality](http://www.mail-archive.com/blink-dev@chromium.org/msg16460.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/quality-levels.md`)*
  > [blink-dev] Intent to Ship: Web Speech API: On-Device Recognition Quality Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Web Speech API: On-Device Recognition Quality Chromestatus Tue, 05 May 2026 15:48:11 -0700 Contact e...
- [Re: [blink-dev] Intent to Ship: Web Speech API: On-Device Recognition Quality](http://www.mail-archive.com/blink-dev@chromium.org/msg16525.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/quality-levels.md`)*
  > Re: [blink-dev] Intent to Ship: Web Speech API: On-Device Recognition Quality Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Web Speech API: On-Device Recognition Quality Daniel Bratell Wed, 13 May 2026 08:16:19 -0700...
- [On-device Web Speech API · Issue #1038 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1038) *(github.com · 2025-01-09T22:49:18)* *(Cites: `https://webaudio.github.io/web-speech-api`)*
  > On-device Web Speech API · Issue #1038 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh you...

## 📚 Platform Documentation & Specifications

- [On-device Web Speech API · Issue #1038 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1038) *(github.com)*
- [Build software better, together](https://github.com/topics/touchscreen?l=typescript) *(github.com)*
- [Using the Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) *(developer.mozilla.org)*
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) *(developer.mozilla.org)*
- [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 36 result(s) found across 8 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/5136859632107520" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WebAudio/web-speech-api/blob/main/explainers/quality-levels.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"webaudio.github.io/web-speech-api" -site:webaudio.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Web Speech API: On-Device Recognition Quality" API` — *Core feature API query* (2 returned)
  - `"Web Speech API: On-Device Recognition Quality" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"on-device" OR "high-stakes" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Web Speech API: On-Device Recognition Quality" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Web Speech API: On-Device Recognition Quality" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **4 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 7 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5136859632107520)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5136859632107520)
- [Specification](https://webaudio.github.io/web-speech-api)
- [Chromium Tracking Bug](https://g-issues.chromium.org/issues/476168420)
