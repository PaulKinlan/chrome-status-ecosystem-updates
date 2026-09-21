# SpeechRecognitionResult Timestamps (WebSpeech API)

> **Report Week:** 2026-W39 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

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

- **Momentum:** High (135 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** SpeechRecognitionResult Timestamps (WebSpeech API) is currently In developer trial (Behind a flag) in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Speechly (@SpeechlyAPI) / X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Speechly (@SpeechlyAPI) / X](https://twitter.com/speechlyapi) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Reilly Grant Thu, 16 Jul 2026 13:24:...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Chromestatus Wed, 15 Jul 2026 20:45:10 -0700...
- [Using the Speech-to-Text API with Python \| Google Codelabs](https://codelabs.developers.google.com/codelabs/cloud-speech-text-python3) *(codelabs.developers.google.com)*
  > การใช้ API การแปลงเสียงพูดเป็นข้อความกับ Python | Google Codelabs ข้ามไปที่เนื้อหาหลัก / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাং...
- [Quickstart Azure Cognitive Services Speech Recognition - Dancing with CRM](https://www.dancingwithcrm.com/quickstart-azure-speech-recognition) *(dancingwithcrm.com)*
  > <strong>If you will call recognizeOnceAsync without parameters you need to subscribe to recognized event to receive results</strong> (will be shown later). In the success callback function will be passed SpeechRecognitionResult object that has two op...
- [HTMLMediaElement.currentTime - Web APIs](https://udn.realityripple.com/docs/Web/API/HTMLMediaElement/currentTime) *(udn.realityripple.com)*
  > The HTMLMediaElement interface&#x27;s currentTime property <strong>specifies the current playback time in seconds</strong>. Changing the value of currentTime this value seeks the media to the new time · A double-precision floating-point value indicat...
- [HTML Audio/Video DOM currentTime Property](https://www.w3schools.com/tags/av_prop_currenttime.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [currentTime · WebPlatform Docs](https://webplatform.github.io/docs/dom/HTMLMediaElement/currentTime) *(webplatform.github.io)*
  > Property of dom/HTMLMediaElementdom/HTMLMediaElement · var result = element.currentTime; element.currentTime = value; Setting currentTime seeks to a specific position in a media resource. HTML5 A vocabulary and associated APIs for HTML and XHTML, Sec...
- [HTML DOM Audio currentTime Property](https://www.w3schools.com/jsref/prop_audio_currenttime.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > [blink-dev] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Reilly Grant Thu, 16 Jul 2...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > [blink-dev] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Chromestatus Wed, 15 Jul 2026 20:4...
- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com · 2026-08-22T03:37:06)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anoth...

## 📚 Platform Documentation & Specifications

- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com)*
- [HTMLMediaElement: currentTime property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime) *(developer.mozilla.org)*
- [HTMLMediaElement: timeupdate event - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event) *(developer.mozilla.org)*
- [content/files/en-us/web/api/speechrecognitionevent/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/speechrecognitionevent/index.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 34 result(s) found across 8 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5811907077472256" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/WebAudio/web-speech-api/pull/192" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" API` — *Core feature API query* (2 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"speechrecognitionevent.timestamp" OR "htmlmediaelement.currenttime" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (7 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5811907077472256)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5811907077472256)
- [Specification](https://github.com/WebAudio/web-speech-api/pull/192)
- [Chromium Tracking Bug](https://crbug.com/528037568)
