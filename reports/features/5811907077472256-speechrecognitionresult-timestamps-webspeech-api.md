# SpeechRecognitionResult Timestamps (WebSpeech API)

> **Report Week:** 2026-W43 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

The Web Speech API currently does not expose the acoustic timing bounds of recognized speech segments, making it difficult to associate transcribed text with media timelines or generate synchronized subtitle cues. We propose adding speechStartTime and speechEndTime (double, in seconds relative to stream start) attributes on the SpeechRecognitionResult interface.

### Motivation

The Web Speech API currently does not expose the acoustic start and end timestamps of recognized speech utterances on SpeechRecognitionResult. While SpeechRecognitionEvent.timeStamp conveys when the DOM event occurred, it provides no information about the acoustic boundaries or duration of the speech segment within the source audio stream.  Exposing speechStartTime and speechEndTime (in seconds as a double, matching HTMLMediaElement.currentTime, BaseAudioContext.currentTime, and VTTCue) addresses critical media timeline association capabilities that are currently impossible on the web:  1. Automated Subtitling & Caption Tracks: Constructing frame-accurate subtitle cues (VTTCue(start, end, text)) for recorded or streaming audio/video. 2. Interactive "Click-to-Seek" Navigation: Enabling users to click a phrase in a transcript and immediately seek playback to the exact moment it was spoken. 3. Conferencing & Media Recording Alignment: Synchronizing real-time captions with recorded media tracks or WebRTC playout delay buffers. 4. Text-Based Media Editing: Accurately cutting, splicing, or rearranging audio and video based on transcript text.

## Ecosystem Status

- **Momentum:** Emerging (footprint 55 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The proposal introduces speechStartTime and speechEndTime attributes to the SpeechRecognitionResult interface, addressing a longstanding limitation where developers could only inspect DOM event dispatch times rather than acoustic audio boundaries. Championed by Chromium engineers through a Blink Intent to Prototype and currently in developer trials behind a flag for Chrome 153, the feature is also undergoing a W3C TAG design review. However, multi-engine consensus is nascent, as formal commitments from other major browser vendors have not yet emerged.

### Recommendations
- Actionable Advice: Teams should evaluate the feature behind developer flags in Chromium builds to test automated subtitling and audio-sync workflows, but avoid relying on it for production architectures. For near-term cross-browser deployments, use feature detection for 'speechStartTime' on SpeechRecognitionResult and retain fallback timing approximations or server-assisted alignment.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`speech-recognition`](https://webstatus.dev/features/speech-recognition), shared with 8 other ChromeStatus features*

- Share of tests passing in the web-features group `speech-recognition` on [wpt.fyi](https://wpt.fyi/results?q=feature:speech-recognition) (via webstatus.dev) — stable: Chrome 57.1% · Edge 57.1% · Firefox 14.3% · Safari 14.3%; experimental: Chrome 57.1% · Edge 57.1% · Firefox 57.1% · Safari 14.3%
- **Chrome usage:** 0.00017% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/63))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/170))

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Reilly Grant Thu, 16 Jul 2026 13:24:...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Chromestatus Wed, 15 Jul 2026 20:45:10 -0700...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Reilly Grant Thu, 16 Jul 2...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API) Chromestatus Wed, 15 Jul 2026 20:4...

## 📚 Platform Documentation & Specifications

- [Add SpeechRecognitionResult Timestamps · Issue #191 · WebAudio/web-speech-api · GitHub](https://github.com/WebAudio/web-speech-api/issues/191) *(github.com)*
- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 45 result(s) found across 12 planned queries — **3 verified relevant**
  - `"chromestatus.com/feature/5811907077472256" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/WebAudio/web-speech-api/pull/192" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" API` — *Core feature API query* (3 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"speechrecognitionevent.timestamp" OR "htmlmediaelement.currenttime" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"SpeechRecognitionResult" ("speechStartTime" OR "speechEndTime") VTTCue` — *Finds code samples demonstrating the usage of SpeechRecognitionResult timestamps combined with VTTCue for media subtitle synchronization.* (3 returned)
  - `"Web Speech API" ("speechStartTime" OR "timestamps") ("subtitles" OR "captions" OR "VTTCue") guide OR tutorial` — *Discovers tutorials and developer guides covering speech-to-text timing and caption generation using Web Speech API timestamps.* (1 returned)
  - `"speech-recognition-result-timestamps" OR "speechStartTime" (site:chromestatus.com OR site:github.com/mozilla/standards-positions OR site:github.com/WebKit/standards-positions)` — *Tracks browser vendor standards positions and implementation status across Chromium, Gecko, and WebKit.* (8 returned)
  - `site:github.com/WebAudio/web-speech-api ("speechStartTime" OR "speechEndTime" OR "pull/192")` — *Surfaces community and working group technical discussions and review feedback on the timestamps specification PR.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "speech-recognition", shared with 8 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "speech-recognition": Chrome 57.1% passing (stable)*

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
