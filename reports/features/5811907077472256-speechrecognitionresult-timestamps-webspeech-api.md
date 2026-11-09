# SpeechRecognitionResult Timestamps (WebSpeech API)

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 | **Category:** Enabled by default

## Overview

The Web Speech API currently does not expose the acoustic timing bounds of recognized speech segments, making it difficult to associate transcribed text with media timelines or generate synchronized subtitle cues. We propose adding speechStartTime and speechEndTime (double, in seconds relative to stream start) attributes on the SpeechRecognitionResult interface.

### Motivation

The Web Speech API currently does not expose the acoustic start and end timestamps of recognized speech utterances on SpeechRecognitionResult. While SpeechRecognitionEvent.timeStamp conveys when the DOM event occurred, it provides no information about the acoustic boundaries or duration of the speech segment within the source audio stream.  Exposing speechStartTime and speechEndTime (in seconds as a double, matching HTMLMediaElement.currentTime, BaseAudioContext.currentTime, and VTTCue) addresses critical media timeline association capabilities that are currently impossible on the web:  1. Automated Subtitling & Caption Tracks: Constructing frame-accurate subtitle cues (VTTCue(start, end, text)) for recorded or streaming audio/video. 2. Interactive "Click-to-Seek" Navigation: Enabling users to click a phrase in a transcript and immediately seek playback to the exact moment it was spoken. 3. Conferencing & Media Recording Alignment: Synchronizing real-time captions with recorded media tracks or WebRTC playout delay buffers. 4. Text-Based Media Editing: Accurately cutting, splicing, or rearranging audio and video based on transcript text.

## Ecosystem Status

- **Momentum:** Moderate (+70 points since 2026-10-12; footprint 145 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The SpeechRecognitionResult Timestamps feature adds \`speechStartTime\` and \`speechEndTime\` properties to the Web Speech API, giving web applications precise acoustic bounds for transcribed speech segments. This resolves a major gap for automated WebVTT subtitling, interactive click-to-seek video navigation, and live conference synchronization. Chromium is shipping the feature enabled by default for desktop platforms using on-device speech recognition, while cross-engine standardization continues in the W3C Web Speech Community Group.

### Recommendations
- Actionable Advice: Web teams building captioning, video editing, or audio transcript tools should adopt \`speechStartTime\` and \`speechEndTime\` using progressive enhancement. Ensure applications inspect property support and non-zero values before driving timeline navigation, maintaining fallback UI behaviors when running on backends or browsers without acoustic timestamp support.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`speech-recognition`](https://webstatus.dev/features/speech-recognition), shared with 8 other ChromeStatus features*

- Share of tests passing in the web-features group `speech-recognition` on [wpt.fyi](https://wpt.fyi/results?q=feature:speech-recognition) (via webstatus.dev) — stable: Chrome 57.1% · Edge 57.1% · Firefox 14.3% · Safari 14.3%; experimental: Chrome 57.1% · Edge 57.1% · Firefox 57.1% · Safari 28.6%
- **Chrome usage:** 0.00021% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/63))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/170))

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5811907077472256/activity) *(chromestatus.com)*
  > \*\*Summary:\*\* The Chromium team published an intent to implement and reached the \*\*"Prepare to ship"\*\* stage under the \`Blink&gt;Speech\` component (tracked via bug \[crbug.com/528037568\](https://crbug.com/528037568))
- [Web Speech API](https://webaudio.github.io/web-speech-api) *(webaudio.github.io)*
  > \*\*Source:\*\* \[W3C Web Speech API GitHub Repository — Issue #191\](https://github.com/WebAudio/web-speech-api/issues/191) & \[Specification Draft (Section 4.1.8)\](https://webaudio.github.io/web-speech-api/#speechreco-result) \*\*Summary:\*\* The specificatio...
- [\[blink-dev\] Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg17954.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API) Alan Ding Fri, 06 Nov 2026 14:35:14 -0800 Contact emai...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps](http://www.mail-archive.com/blink-dev@chromium.org/msg16987.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps 'Alan Ding' via blink-dev Thu, 16 Jul 2026 09:30:24 -0700 \*Contact emails\* \[...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Chromestatus Wed, 15 Jul 2026 20:45:10 -0700...
- [\[blink-dev\] Re: Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg17976.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API) 'Dan Clark' via blink-dev Mon, 09 Nov 2026 11:...
- [\[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Reilly Grant Thu, 16 Jul 2026 13:24:...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg17954.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > \[blink-dev\] Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API) Alan Ding Fri, 06 Nov 2026 14:35:14 -0800 Co...
- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com · 2026-08-22T03:37:06)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Re...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps](http://www.mail-archive.com/blink-dev@chromium.org/msg16987.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md`)*
  > \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps 'Alan Ding' via blink-dev Thu, 16 Jul 2026 09:30:24 -0700 \*Contact...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md`)*
  > \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Chromestatus Wed, 15 Jul 2026 20:4...
- [\[blink-dev\] Re: Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg17976.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md`)*
  > \[blink-dev\] Re: Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: SpeechRecognitionResult Timestamps (WebSpeech API) 'Dan Clark' via blink-dev Mon, 09 No...
- [\[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md`)*
  > \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Reilly Grant Thu, 16 Jul 2...

## 📚 Platform Documentation & Specifications

- [Add SpeechRecognitionResult Timestamps · Issue #191 · WebAudio/web-speech-api · GitHub](https://github.com/WebAudio/web-speech-api/issues/191) *(github.com)*
- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com)*
- [\[v153\] Uber demo concept · Issue #14 · PaulKinlan/chrome-platform-showcase · GitHub](https://github.com/PaulKinlan/chrome-platform-showcase/issues/14) *(github.com)*
- [Add Speaker Diarization (Speaker Turn Attribution) to SpeechRecognition · Issue #226 · WebAudio/web-speech-api · GitHub](https://github.com/WebAudio/web-speech-api/issues/226) *(github.com)*
- [GitHub - alan33d/web-speech-demos: Web Speech API Demos · GitHub](https://github.com/alan33d/web-speech-demos) *(github.com)*
- [Merge SpeechRecognitionResult Timestamps Explainer updates by alan33d · Pull Request #210 · WebAudio/web-speech-api · GitHub](https://github.com/WebAudio/web-speech-api/pull/210) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 48 result(s) found across 12 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5811907077472256" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"github.com/WebAudio/web-speech-api/pull/192" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" API` — *Core feature API query* (6 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"speechrecognitionevent.timestamp" OR "htmlmediaelement.currenttime" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"speechStartTime" "speechEndTime" "SpeechRecognitionResult"` — *Finds WebIDL definitions, implementation pull requests, and direct code snippets using the newly proposed timestamp attributes.* (7 returned)
  - `"SpeechRecognitionResult" ("speechStartTime" OR "speechEndTime") ("VTTCue" OR "captions" OR "subtitles")` — *Discovers developer tutorials and articles demonstrating how to generate synchronized WebVTT captions using Web Speech timestamps.* (6 returned)
  - `site:chromestatus.com OR site:github.com/WebAudio/web-speech-api "speech-recognition-result-timestamps" OR "pull/192"` — *Tracks browser vendor interest, standards consensus, and implementation roadmap across Chromium and W3C Web Audio groups.* (8 returned)
  - `"Web Speech API" ("speechStartTime" OR "timestamps") ("click-to-seek" OR "transcript alignment")` — *Uncovers community feedback, developer pain points, and discussions regarding audio synchronization and text-based seeking.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 6 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 1 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "speech-recognition", shared with 8 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "speech-recognition": Chrome 57.1% passing (stable)*

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
