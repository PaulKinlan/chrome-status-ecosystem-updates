# SpeechRecognitionResult Timestamps (WebSpeech API)

> **Report Week:** 2026-W41 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

The Web Speech API currently does not expose the acoustic timing bounds of recognized speech segments, making it difficult to associate transcribed text with media timelines or generate synchronized subtitle cues. We propose adding speechStartTime and speechEndTime (double, in seconds relative to stream start) attributes on the SpeechRecognitionResult interface.

### Motivation

The Web Speech API currently does not expose the acoustic start and end timestamps of recognized speech utterances on SpeechRecognitionResult. While SpeechRecognitionEvent.timeStamp conveys when the DOM event occurred, it provides no information about the acoustic boundaries or duration of the speech segment within the source audio stream.

Exposing speechStartTime and speechEndTime (in seconds as a double, matching HTMLMediaElement.currentTime, BaseAudioContext.currentTime, and VTTCue) addresses critical media timeline association capabilities that are currently impossible on the web:

1. Automated Subtitling & Caption Tracks: Constructing frame-accurate subtitle cues (VTTCue(start, end, text)) for recorded or streaming audio/video.
2. Interactive "Click-to-Seek" Navigation: Enabling users to click a phrase in a transcript and immediately seek playback to the exact moment it was spoken.
3. Conferencing & Media Recording Alignment: Synchronizing real-time captions with recorded media tracks or WebRTC playout delay buffers.
4. Text-Based Media Editing: Accurately cutting, splicing, or rearranging audio and video based on transcript text.

## Ecosystem Status

- **Momentum:** High (295 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The proposal to add \`speechStartTime\` and \`speechEndTime\` to \`SpeechRecognitionResult\` resolves a long-standing architectural limitation in the Web Speech API by providing acoustic audio bounds in seconds, enabling native subtitle cue generation and click-to-seek media alignment. Currently in developer trials behind the \`WebSpeechTimestamps\` flag in Chrome 153 and undergoing W3C TAG review (#1267), the specification recently shifted from millisecond offsets to non-nullable double timestamps aligned with \`HTMLMediaElement.currentTime\` and \`VTTCue\`. However, broad cross-engine consensus remains in its infancy, with no formal positions yet adopted across non-Chromium engines.

### Recommendations
- Actionable Advice: Evaluate the feature behind the \`WebSpeechTimestamps\` flag in Chromium 153+ to test media-transcript synchronization workflows, but strictly gate usage via feature detection (\`'speechStartTime' in SpeechRecognitionResult.prototype\`). Continue using server-side or WebAssembly transcription pipelines with fallback cue estimation for production cross-browser captioning until interoperability stabilizes.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGtzmb77u26DOi0TYYEq4xZC020eC8WynTTcjFuZPSNsvY3e7p0AHlVh7G3A_sNq65cW06A5q5cIvWgTaHdUpj8wAwQ5a30hE_n-Kzc36Nat_KlkvDWFnkn4-2HLv7_npqCIvXpFg6-coZMFQBy5o2UK1mrQsL6hQ==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGeZZwvf2pnIPgiQPgwsaGt_eu0dc3excSTkP-NLkGKWpwDsDDVbOxoPlIKcCJLjtAlAV6NHU1zuovYSJnIpmZ8EMSLj_lfFNAzvPm-GFXqKDbaBBZ_yqQ76xFpQ7-NdI0auoUXjzNpEAmVXw==) *(vertexaisearch.cloud.google.com)*
  > Add SpeechRecognitionResult Timestamps · Issue #191 · WebAudio/web-speech-api · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refres...
- [googleusercontent.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHuG00mcp1PknPBqOU8ZW3PEKzKCGh4XRaAHvL-nWG0Ac6yuwWU5_7PXIO_UnVCL5cWvnGlTSEqGVYeX44bNJMQQIYaMLb1A0P5Gx8X2XQMy7lH_o05IfG1Kl0mhjwHfiNM3Ec5zQ-DOMUOg7bYVh5nQ_VfGVzsJh70Fuqi6Lhb) *(vertexaisearch.cloud.google.com)*
  > Google Issue Tracker Sign in
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE4_4h7-C0A1PaulV8AaXhu6zF05OuG3c_Wkrs9lI838n3C1Qj3EqT66qeBXnZq1QIB5OCCbEPRwNLLcLgiI3nZbPHRx7Uay5vFnBddQVyMuBOLUBZl-ZfGa73IK03TZhFOeIi8zFyYvekV8Q0eV0TP-3zulUyXiaLUiG7QcU5ocpPxwJ5Nhw==) *(vertexaisearch.cloud.google.com)*
  > Chromium Dash
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFt5XZ1f1jKtdtKSQVG7ZsWMP1TID12vyRxaD4nRUrcXXOnLuf46XcPgGmKr8XqtKB3ieWgx_9agPy_NffgtJ2cRh-2_22JAlRIRIjLGBzBd85vKJE4yu61kfXIwIL9GiD0VDOGatZqpHt5xDruYfu6nCeo_sCFtbXXtYipWqg=) *(vertexaisearch.cloud.google.com)*
  > SpeechRecognitionResult - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs SpeechRecognitionResult Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) SpeechRecognitionResult Limite...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFgDXunuUvf5IqH436A3iFUJfiTV9gSVJHdNr7PDQ-Dsi9JvopnI0jTFTGkwQ7oi6Id1JhZoo--XuMYHhzPyKAG9eVR3bUhNwCXpswx1ujQZw8MnhGTbUZiZ8W3R-5zSpMIWLeJGAMkl2cw4UZf-fCpJUUUBFK7wp2Ubd6mg110YGA8X1OgpKYQKOWLa4q5mfcss15VtSwjwF_7GfarAT4_RLDrQmUTeBVfttSrxP-f) *(vertexaisearch.cloud.google.com)*
  > SpeechRecognitionResult Class (Microsoft.CognitiveServices.Speech) - Azure for .NET Developers | Microsoft Learn Пропустить и перейти к основному содержимому Переход к навигации на странице Переход к интерфейсу чата Ask Learn Этот браузер больше не п...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFf1WbKmovITvFGAv4pTECQrNrxMnNbNZbSWWic9PXaRx7OCGaZ33lL7yNaEMF8aoDgPbxxKieBld-RfMomlQn7l2hMRoQbZ8ARdCJOFO2IU2oTUO69pVqs74IZzNOMYLhHMTcJPx5vIb-7-MlkIq0ij6vbhDM7RPlyN75ojA==) *(vertexaisearch.cloud.google.com)*
  > Get word timestamps | Cloud Speech-to-Text | Google Cloud Documentation Skip to main content / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in AI ...
- [medium.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEj9fbo2jh9FvhP2IagdYdDHzQ_gwEkRhWjmCDs0UhbaJJ7HrduFSORqMh3sIT_6-h6Ao3Ki5WmLTL8F1PUByNvJuhaMTyRM_JswuwlAjhuwO8bgLf3NWxNkYNwDkSsEmoXWqGiUdkIlChp5yo52IRKoIWpC8z8te___RJt8g==) *(vertexaisearch.cloud.google.com)*
  > Medium Taming the Web Speech API. Unfortunately the Web Speech API is… | by Andrea Giammarchi | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in Andrea Giammarchi Web, Mobile, IoT, and all JS things since 00&#x27;s. For...
- [\[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)*
  > &gt; &gt; *Initial public proposal* &gt; https://github.com/WebAudio/web-speech-api/issues/191 &gt; &gt; *Goals for experimentation* &gt; None &gt; &gt; *Requires code in //chrome?* &gt; False &gt; &gt; *Tracking bug* &gt; https://crbug.com/528037568...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)*
  > False Tracking bug https://crbug.com/528037568 Estimated milestones No milestones specified Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5811907077472256</strong>?gate=5917118676729856 This intent message was g...
- [Web Speech API: Complete Guide & When to Upgrade to Cloud APIs (2025) \| VocaFuse Blog](https://vocafuse.com/blog/web-speech-api-vs-cloud-apis) *(vocafuse.com · 2025-11-25T00:00:00)*
  > ✅ Launching production app to real users ✅ Need cross-browser/mobile support (Firefox, iOS Safari) ✅ Require backend processing or storage ✅ Want advanced features (timestamps, diarization, custom vocabulary) ✅ Need compliance (HIPAA, GDPR, audit log...
- [Quickstart Azure Cognitive Services Speech Recognition - Dancing with CRM](https://www.dancingwithcrm.com/quickstart-azure-speech-recognition) *(dancingwithcrm.com)*
  > <strong>If you will call recognizeOnceAsync without parameters you need to subscribe to recognized event to receive results</strong> (will be shown later). In the success callback function will be passed SpeechRecognitionResult object that has two op...
- [HTML Audio/Video DOM currentTime Property](https://www.w3schools.com/tags/av_prop_currenttime.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [currentTime · WebPlatform Docs](https://webplatform.github.io/docs/dom/HTMLMediaElement/currentTime) *(webplatform.github.io)*
  > Property of dom/HTMLMediaElementdom/HTMLMediaElement · var result = element.currentTime; element.currentTime = value; Setting currentTime seeks to a specific position in a media resource. HTML5 A vocabulary and associated APIs for HTML and XHTML, Sec...
- [HTMLMediaElement.currentTime - Web APIs](https://udn.realityripple.com/docs/Web/API/HTMLMediaElement/currentTime) *(udn.realityripple.com)*
  > <strong>var currentTime = htmlMediaElement.</strong>currentTime; htmlMediaElement.currentTime = 35;
- [HTML DOM Audio currentTime Property](https://www.w3schools.com/jsref/prop_audio_currenttime.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [HTML DOM Video currentTime Property](https://www.w3schools.com/jsref/prop_video_currenttime.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [Tutorial: How to Build a Progressive Web App (PWA) with Face Recognition and Speech Recognition](https://dzone.com/articles/tutorial-how-to-build-a-pwa-with-face-and-speechrecognition) *(dzone.com · 2020-12-20T00:00:00)*
  > <strong>The SpeechRecognitionEvent &quot;results property&quot; returns a 2-dimensional SpeechRecognitionResultList</strong>.
- [Web Speech API](https://webaudio.github.io/web-speech-api) *(webaudio.github.io · 2026-09-18T00:00:00)*
  > See Confidence property thread on public-speech-api@w3.org. The SpeechRecognitionResult object <strong>represents a single one-shot recognition match, either as one small part of a continuous recognition or as the complete return result of a non-cont...
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > The Web Speech API currently does ... cues. We propose <strong>adding speechStartTime and speechEndTime (double, in seconds relative to stream start) attributes on the SpeechRecognitionResult interface</strong>....

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > &gt; &gt; *Initial public proposal* &gt; https://github.com/WebAudio/web-speech-api/issues/191 &gt; &gt; *Goals for experimentation* &gt; None &gt; &gt; *Requires code in //chrome?* &gt; False &gt; &gt; *Tracking bug* &gt; https://crbug.com...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > False Tracking bug https://crbug.com/528037568 Estimated milestones No milestones specified Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5811907077472256</strong>?gate=5917118676729856 This intent mes...
- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com · 2026-08-22T03:37:06)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > Chromium comments: Positive / In active development (https://<strong>chromestatus.com/feature/5811907077472256</strong>)

## 📚 Platform Documentation & Specifications

- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com)*
- [HTMLMediaElement: currentTime property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime) *(developer.mozilla.org)*
- [HTMLMediaElement: timeupdate event - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event) *(developer.mozilla.org)*
- [Add Speech Recognition API support · Issue #386 · Spomky-Labs/pwa-bundle](https://github.com/Spomky-Labs/pwa-bundle/issues/386) *(github.com)*
- [SpeechRecognition - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) *(developer.mozilla.org)*
- [Web Speech API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) *(developer.mozilla.org)*
- [SpeechRecognitionResult - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult) *(developer.mozilla.org)*
- [SpeechRecognitionResultList](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResultList) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 50 result(s) found across 13 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/5811907077472256" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/WebAudio/web-speech-api/pull/192" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" API` — *Core feature API query* (2 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"speechrecognitionevent.timestamp" OR "htmlmediaelement.currenttime" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"speechStartTime" "speechEndTime" (SpeechRecognitionResult OR "Web Speech API")` — *Finds code samples, WebIDL declarations, and implementation snippets demonstrating the proposed timestamp properties on SpeechRecognitionResult.* (8 returned)
  - `("speechStartTime" OR "speechEndTime") ("VTTCue" OR subtitles OR captions) "Web Speech API"` — *Discovers tutorials and developer guides focused on generating synchronized WebVTT captions or subtitles using speech recognition timestamps.* (1 returned)
  - `"speechStartTime" OR "speech-recognition-result-timestamps" (site:chromestatus.com OR "Intent to Prototype" OR "Intent to Ship" OR site:webkit.org OR site:github.com/mozilla)` — *Tracks browser vendor positions, standards consensus, and Intent-to-Prototype/Ship announcements across Chromium, WebKit, and Gecko.* (8 returned)
  - `site:github.com/WebAudio/web-speech-api ("pull/192" OR "speechStartTime" OR "speechEndTime")` — *Surfaces community feedback, specification debate, and standards tracker discussion on WebAudio/web-speech-api Pull Request #192.* (0 returned)
  - `"Web Speech API" ("speechStartTime" OR "speechEndTime") ("click-to-seek" OR "transcript" OR "audio editing")` — *Searches for practical articles and case studies exploring interactive audio/video timeline navigation and text-based media editing using acoustic timestamps.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 13 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5811907077472256)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5811907077472256)
- [Specification](https://github.com/WebAudio/web-speech-api/pull/192)
- [Chromium Tracking Bug](https://crbug.com/528037568)
