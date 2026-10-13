# SpeechRecognitionResult Timestamps (WebSpeech API)

> **Report Week:** 2026-W42 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

The Web Speech API currently does not expose the acoustic timing bounds of recognized speech segments, making it difficult to associate transcribed text with media timelines or generate synchronized subtitle cues. We propose adding speechStartTime and speechEndTime (double, in seconds relative to stream start) attributes on the SpeechRecognitionResult interface.

### Motivation

The Web Speech API currently does not expose the acoustic start and end timestamps of recognized speech utterances on SpeechRecognitionResult. While SpeechRecognitionEvent.timeStamp conveys when the DOM event occurred, it provides no information about the acoustic boundaries or duration of the speech segment within the source audio stream.  Exposing speechStartTime and speechEndTime (in seconds as a double, matching HTMLMediaElement.currentTime, BaseAudioContext.currentTime, and VTTCue) addresses critical media timeline association capabilities that are currently impossible on the web:  1. Automated Subtitling & Caption Tracks: Constructing frame-accurate subtitle cues (VTTCue(start, end, text)) for recorded or streaming audio/video. 2. Interactive "Click-to-Seek" Navigation: Enabling users to click a phrase in a transcript and immediately seek playback to the exact moment it was spoken. 3. Conferencing & Media Recording Alignment: Synchronizing real-time captions with recorded media tracks or WebRTC playout delay buffers. 4. Text-Based Media Editing: Accurately cutting, splicing, or rearranging audio and video based on transcript text.

## Ecosystem Status

- **Momentum:** Emerging (footprint 75 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The SpeechRecognitionResult Timestamps proposal introduces 'speechStartTime' and 'speechEndTime' attributes to the Web Speech API to provide acoustic timing bounds for transcribed speech segments. Currently incubating in Chromium behind the WebSpeechTimestamps runtime flag in Chrome 153 developer trials, the proposal recently matured by transitioning from millisecond DOMHighResTimeStamp values to second-denominated doubles aligning cleanly with HTMLMediaElement and VTTCue timelines. While the feature addresses long-standing limitations for media synchronization, wider browser consensus remains unestablished beyond Chromium's active prototyping.

### Recommendations
- Actionable Advice: Teams building captioning or interactive transcript tools should treat these properties as progressive enhancements, testing them via Chromium flags while guarding usages with property checks on SpeechRecognitionResult. Production applications must maintain fallback heuristics—such as using event dispatch timestamps or dedicated third-party transcription services—until cross-engine standardization and implementation solidify.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`speech-recognition`](https://webstatus.dev/features/speech-recognition), shared with 8 other ChromeStatus features*

- Share of tests passing in the web-features group `speech-recognition` on [wpt.fyi](https://wpt.fyi/results?q=feature:speech-recognition) (via webstatus.dev) — stable: Chrome 57.1% · Edge 57.1% · Firefox 0% · Safari 14.3%; experimental: Chrome 57.1% · Edge 57.1% · Firefox 57.1% · Safari 14.3%
- **Chrome usage:** 0.00019% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/63))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/170))

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5811907077472256/activity) *(chromestatus.com)*
  > The \*\*Web Speech API\*\* has historically operated as a "black box" regarding acoustic timing timeStamp\` captures the DOM event dispatch time, it provides no information about the acoustic boundaries of the underlying speech within the audio stream
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Chromestatus Wed, 15 Jul 2026 20:45:10 -0700...
- [\[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Reilly Grant Thu, 16 Jul 2026 13:24:...
- [Chromium Dash](https://chromiumdash.appspot.com/commit/922e7056487d58cd75326fb3d4bf44ba65de3dfb) *(chromiumdash.appspot.com)*
  > Chromium Dash

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com · 2026-08-22T03:37:06)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anoth...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md`)*
  > \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Chromestatus Wed, 15 Jul 2026 20:4...
- [\[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md`)*
  > \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Reilly Grant Thu, 16 Jul 2...

## 📚 Platform Documentation & Specifications

- [Add SpeechRecognitionResult Timestamps · Issue #191 · WebAudio/web-speech-api · GitHub](https://github.com/WebAudio/web-speech-api/issues/191) *(github.com)*
- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 38 result(s) found across 12 planned queries — **3 verified relevant**
  - `"chromestatus.com/feature/5811907077472256" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/WebAudio/web-speech-api/pull/192" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" API` — *Core feature API query* (3 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"speechrecognitionevent.timestamp" OR "htmlmediaelement.currenttime" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"SpeechRecognitionResult" ("speechStartTime" OR "speechEndTime")` — *Locates code snippets, WebIDL interface definitions, and direct usage of speechStartTime and speechEndTime.* (3 returned)
  - `"Web Speech API" ("speechStartTime" OR "speechEndTime") ("VTTCue" OR "captions" OR "subtitles")` — *Discovers articles, practical tutorials, and developer guides demonstrating how to generate synchronized captions and VTTCues.* (1 returned)
  - `"speechStartTime" "speechEndTime" ("intent to prototype" OR "chromestatus" OR "standards-positions")` — *Tracks browser vendor implementation status, standards position requests, and platform roadmap updates.* (3 returned)
  - `site:github.com/WebAudio/web-speech-api ("speech-recognition-result-timestamps" OR "pull/192" OR "speechStartTime")` — *Surfaces community feedback, specification issues, and standards development discussions on the official Web Speech API repository.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "speech-recognition", shared with 8 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "speech-recognition": Chrome 57.1% passing (stable)*
- **Sources cited by the AI synthesis:** 3 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5811907077472256)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5811907077472256)
- [Specification](https://github.com/WebAudio/web-speech-api/pull/192)
- [Chromium Tracking Bug](https://crbug.com/528037568)
