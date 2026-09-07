# SpeechRecognitionResult Timestamps (WebSpeech API)

> **Report Week:** 2026-W37 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

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

- **Momentum:** Moderate (60 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The SpeechRecognitionResult Timestamps proposal extends the Web Speech API by exposing 'speechStartTime' and 'speechEndTime' on 'SpeechRecognitionResult', unlocking precise acoustic alignment for media timelines and subtitle cue generation. Currently entering developer trial behind a flag in Chrome 153, the feature is progressing through the W3C Web Speech API community group and TAG review. While developer interest is strong for media editing and captioning workflows, cross-browser consensus remains in early stages across other engines.

### Recommendations
- Actionable Advice: Web teams building captioning, transcription playback, or text-based audio editing tools should experiment with the feature behind experimental flags in Chrome 153 to validate timing precision. In production code, feature-detect 'speechStartTime' in SpeechRecognitionResult instances and maintain server-side or fallback heuristic alignment for browsers lacking support.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [mozaic.fm](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFx9yLHIWNPtaFXDAw0ewWMt6mplSf0smf0q3BN_38UwxMktbDpH6JBTBBZGghvjN81x_VUlva9NtVZ26YjU2l-Huc3dPebIiE7cCI0k3YRlRazcA_oGHcbcY6w-iU510U5e-yX3dJKbG-LgKmMmzDz5Q==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature Proposal  The **SpeechRecognitionResult Timestamps** proposal addresses a long-standing limitation in the **Web Speech API**:  * **The Problem:** The current Web Speech API provides transcription text without acoustic timin
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE1T6F7T2AKnTvjJTWt59sE4Yf-J-0g9jKHQ32mbaguPbFKkrV2zTnP3rCgaHoCwc99YkVhEKARVNQXoUjUkB5C2zocpd7Fjk67_OjI3DcG8B-qzCFIS6Al8SyBQhBivE-sgcq-K7MQKD-l8NgcILyTHQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature Proposal  The **SpeechRecognitionResult Timestamps** proposal addresses a long-standing limitation in the **Web Speech API**:  * **The Problem:** The current Web Speech API provides transcription text without acoustic timin
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQET9Ajv5Z58oe7Udp_bogY8eh-hZZLRjZvSkwgSYDtzGMq3XbuTzvwW0MqgoacKSOLEcoM2HXfZ1cLQTPrsVNwsKCBKbi-zFU12mUUAcjmXc8C6NediUfjL21Ihm4RYJKZFWfiAK3o5N27oBuOn8nNgYg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature Proposal  The **SpeechRecognitionResult Timestamps** proposal addresses a long-standing limitation in the **Web Speech API**:  * **The Problem:** The current Web Speech API provides transcription text without acoustic timin
- [[blink-dev] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Reilly Grant Thu, 16 Jul 2026 13:24:...
- [[blink-dev] Intent to Prototype: SpeechRecognitionResult Timestamps](http://www.mail-archive.com/blink-dev@chromium.org/msg16987.html) *(mail-archive.com)*
  > *Tracking bug* crbug.com/528037568 ... was generated by Chrome Platform Status &lt;https://chromestatus.com/&gt;. -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-dev&quot; group</strong>....
- [[blink-dev] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)*
  > Explainer https://github.com/W... https://github.com/WebAudio/web-speech-api/pull/192 Summary <strong>The Web Speech API currently does not allow developers to associate the transcribed text with specific segments of the audio source</strong>, making...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > [blink-dev] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Reilly Grant Thu, 16 Jul 2...
- [[blink-dev] Intent to Prototype: SpeechRecognitionResult Timestamps](http://www.mail-archive.com/blink-dev@chromium.org/msg16987.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > *Tracking bug* crbug.com/528037568 ... was generated by Chrome Platform Status &lt;https://chromestatus.com/&gt;. -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-dev&quot; group</strong>....
- [[blink-dev] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md`)*
  > Explainer https://github.com/W... https://github.com/WebAudio/web-speech-api/pull/192 Summary <strong>The Web Speech API currently does not allow developers to associate the transcribed text with specific segments of the audio source</stron...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 11 result(s) found across 7 planned queries — **3 verified relevant**
  - `"chromestatus.com/feature/5811907077472256" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/WebAudio/web-speech-api/pull/192" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Web Speech API" ("speechStartTime" OR "speechEndTime") ("VTTCue" OR "captions" OR "subtitles")` — *Finds developer guides and tutorials demonstrating how to build synchronized subtitles and cue tracks using speech recognition timestamps.* (0 returned)
  - `"SpeechRecognitionResult" "speechStartTime" "speechEndTime" (VTTCue OR currentTime OR JavaScript)` — *Surfaces practical JavaScript code snippets and implementation patterns showing WebIDL property access on SpeechRecognitionResult.* (8 returned)
  - `("speechStartTime" OR "speechEndTime") ("Intent to Prototype" OR "Intent to Ship" OR "Chrome Platform Status" OR "WebKit" OR "Gecko")` — *Tracks browser vendor signals, implementation intent threads, and engine rollout announcements across Chromium, WebKit, and Gecko.* (0 returned)
  - `site:github.com ("WebAudio/web-speech-api" OR "WICG/speech-api") ("speechStartTime" OR "speechEndTime" OR "acoustic timestamps")` — *Locates standardization discussions, pull requests, and spec debates in the WebAudio and W3C/WICG repositories.* (0 returned)
- **Google Search Grounding (gemini-3.7-flash):** 7 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 13 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 5 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5811907077472256)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5811907077472256)
- [Specification](https://github.com/WebAudio/web-speech-api/pull/192)
- [Chromium Tracking Bug](https://crbug.com/528037568)
