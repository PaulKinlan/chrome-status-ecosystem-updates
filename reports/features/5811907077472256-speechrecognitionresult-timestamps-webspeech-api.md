# SpeechRecognitionResult Timestamps (WebSpeech API)

> **Report Week:** 2026-W40 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

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
- **Sentiment:** Positive / High Interest
- **Executive Take:** SpeechRecognitionResult Timestamps (WebSpeech API) is currently In developer trial (Behind a flag) in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Packages & Polyfills

- [speech-to-element](https://www.npmjs.com/package/speech-to-element) `v2.0.0` — Add real-time speech to text functionality into your website with no effort
- [@knorm/timestamps](https://www.npmjs.com/package/@knorm/timestamps) `v3.0.0` — Timestamps plugin for @knorm/knorm

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGInNVJm86Clm87GvPGl-bFZwfidywBIHc0TC1iFZghjPvrWBB1zae6GNB6aU_pgmWF-bYzw8rHMsSts_V-owSxrbkrXYGvhdz4i860jPVKhK1DcOE0lGfIi5eUYxB3PNyv6gb8jAKG) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHDNLGUtxVU0eboWPlaGOxC9k05LMhafPmZyuQD04bJtrz9-Ev0u9lc2zv9Q4JrRn2vEeZg8qJl5QeTjvqF0U_IYwABA4BFO04lTMK2y5zZa2z8x1gG5GGB_wSyNTpKAwtT17073oOEM_PcxHa1u4zEa3il4nhHeM0FinnV3tiRIHKfLDk3Pw==) *(vertexaisearch.cloud.google.com)*
  > Chromium Dash
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGze5XZGb6JIWR4zb21L83SQVxoDT99U4-FCYUpvU46MMTtFjonMV68LHbHoEwK32GMsQOzy6ffQQrmexrxyNArv9yLKtfQ3-fchV3khCvksjEJ2H9eXJ8jwHTN2a7u576r0Zyyzuh8kNNpI40Laec6) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHnzInIEdpEtcOHLL1cXviDdwEUZXiFpEkaoDcFx2ZVp4Q-hYewz1nhHUYRgyfseMPvUXK_sCFExy4228Z05ICHczV2fR5j5HSrKAQpU08IIrGeqqDLCygHZVjCeZ9Dk-8BYqgiQ31I) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEvOogj_1LMCAVb_IqtrMtOkWb3We-92umY9owPC-qG7gIErCPkRZbTkUmpqoAbVWhpQeAfPITxavB2n6JSSwJ8wC9qf5HKP5673Dekpy9RBCFf40Kdx1fE8XooW8eYKBewSVBLgZPTZRg6jmk=) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [n1fo.fr](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFw9pozPJCZvbJLQv5m2yt5WAt2WczypshxxXLV10lHQka2AvWxgH_F3sJOZn4Ikfa8LKrgxfpBJ0EsBEkR1mR7j_FuxFJvk9RMT05pIc3x02S_4jo5aK9T6Xfdb7Og5xZo71KfMJVxrut9qgFt4v9OAWS-RoJ8r5A5D1ea_w==) *(vertexaisearch.cloud.google.com)*
  > Google Chrome 154.0 (155.0 Bêta, 156.0 Dev & Canary) — n’1fo[r-matik] Menu n&#039;1fo[r-matik] Pour les nymphos d&#039;infos en info&#8230; Rechercher : Google Chrome 154.0 (155.0 Bêta, 156.0 Dev & Canary) Chrome est une sorte d'OVNI développé par Go...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQENLOT9wSGy489ftPhpt5bhGn19i4zs1KsYsMXkzKY7IcgETdKdKUHHDv2xU90ebrA6b4QePPQ9gJ7e8cdobruAGhj1vRHm9DIw3Huh_RlSL4qcQ1vnmARFtvLTZ0vw_JfRvFLsMbJqCFRWd3nvxEyH) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHGBbyuBJ5JIYdBGfk8p6_n4VXdFXgKXu9e6edj3MW9OOPU_tJ4zLRBYf0c3l8we7SzbEMXtItc6X5c3Fz1DyUh8CXlOq4M5z6SwqO4VctoXq51qCcDRhvb74GC56906g5LPLyVOb4=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFj-YQ-HcxVx2iAU8WrxCEs5sadIlI0RmM1r3hMCLAje-Zzbwm0dnm74PKZRxDo1BQSTzkq2g73r6Qf9DACLm_6233uQ52wh63HJsVpTcRbVWKOqd8Ku6RZ_mwTCAZAiH4ADya60zURsz1pbOd828cA7_H4zNErSHQVV92_Gyo=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"SpeechRecognitionResult Timestamps"** proposal introduces two new read-only attributes—`speechStartTime` and `speechEndTime`—to the `SpeechRecognitionResult` interface within the Web Speech API.   * **The Problem:**
- [polypane.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGcUwqJomgtR9wAnJwtgwZRkZIU10k58QPBD52GST3Zeh--WGIoXEvWz9unPUuqNBGBwvgz83iHIp2DgNE0LpCy7pmkQHUYJ9nmshGU_-0a8UJH5ltBpPVquoU9YyJFJAOHRJjSnnAwRmgexfgqoQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"SpeechRecognitionResult Timestamps"** proposal introduces two new read-only attributes—`speechStartTime` and `speechEndTime`—to the `SpeechRecognitionResult` interface within the Web Speech API.   * **The Problem:**
- [\[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)*
  > &gt; &gt; *Initial public proposal* &gt; ... &gt; &gt; No milestones specified &gt; &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://<strong>chromestatus.com/feature/5811907077472256</strong>?gate=5917118676729856 &gt; &gt; This i...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)*
  > False Tracking bug https://crbug.com/528037568 Estimated milestones No milestones specified Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5811907077472256</strong>?gate=5917118676729856 This intent message was g...
- [Using the Speech-to-Text API with Python \| Google Codelabs](https://codelabs.developers.google.com/codelabs/cloud-speech-text-python3) *(codelabs.developers.google.com · 2026-03-20T00:00:00)*
  > To transcribe an audio file with word timestamps, update your code by copying the following into your IPython session: def print_result(result: speech.SpeechRecognitionResult): best_alternative = result.alternatives[0] print(&quot;-&quot; * 80) print...
- [Quickstart Azure Cognitive Services Speech Recognition - Dancing with CRM](https://www.dancingwithcrm.com/quickstart-azure-speech-recognition) *(dancingwithcrm.com)*
  > <strong>If you will call recognizeOnceAsync without parameters you need to subscribe to recognized event to receive results</strong> (will be shown later). In the success callback function will be passed SpeechRecognitionResult object that has two op...
- [HTML Audio/Video DOM currentTime Property](https://www.w3schools.com/tags/av_prop_currenttime.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [currentTime · WebPlatform Docs](https://webplatform.github.io/docs/dom/HTMLMediaElement/currentTime) *(webplatform.github.io)*
  > Property of dom/HTMLMediaElementdom/HTMLMediaElement · var result = element.currentTime; element.currentTime = value; Setting currentTime seeks to a specific position in a media resource. HTML5 A vocabulary and associated APIs for HTML and XHTML, Sec...
- [HTML DOM Audio currentTime Property](https://www.w3schools.com/jsref/prop_audio_currenttime.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [HTMLMediaElement.currentTime - Web APIs](https://udn.realityripple.com/docs/Web/API/HTMLMediaElement/currentTime) *(udn.realityripple.com)*
  > The HTMLMediaElement interface&#x27;s currentTime property <strong>specifies the current playback time in seconds</strong>. Changing the value of currentTime this value seeks the media to the new time · A double-precision floating-point value indicat...
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > The Web Speech API currently does not expose the acoustic timing bounds of recognized speech segments, making it difficult to associate transcribed text with media timelines or generate synchronized subtitle cues. We propose adding speechStartTime an...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16997.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > &gt; &gt; *Initial public proposal* &gt; ... &gt; &gt; No milestones specified &gt; &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://<strong>chromestatus.com/feature/5811907077472256</strong>?gate=5917118676729856 &gt; &...
- [\[blink-dev\] Intent to Prototype: SpeechRecognitionResult Timestamps (WebSpeech API)](http://www.mail-archive.com/blink-dev@chromium.org/msg16981.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > False Tracking bug https://crbug.com/528037568 Estimated milestones No milestones specified Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5811907077472256</strong>?gate=5917118676729856 This intent mes...
- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com · 2026-08-22T03:37:06)* *(Cites: `https://chromestatus.com/feature/5811907077472256`)*
  > W3C Audio WG/CG Meeting Discussion: This feature was presented and discussed during the W3C Audio WG/CG Teleconference on August 13, 2026 (see Meeting Minutes). The group aligned on developer needs for media timeline association (e.g.

## 📚 Platform Documentation & Specifications

- [WG Revision: Web Speech API: SpeechRecognitionResult Timestamps · Issue #1267 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1267) *(github.com)*
- [HTMLMediaElement: currentTime property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime) *(developer.mozilla.org)*
- [HTMLMediaElement: timeupdate event - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event) *(developer.mozilla.org)*
- [content/files/en-us/web/api/speechrecognitionevent/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/speechrecognitionevent/index.md) *(github.com)*
- [Add Speech Recognition API support · Issue #386 · Spomky-Labs/pwa-bundle](https://github.com/Spomky-Labs/pwa-bundle/issues/386) *(github.com)*
- [SpeechRecognitionResult](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult) *(developer.mozilla.org)*
- [SpeechRecognitionResultList](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResultList) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 37 result(s) found across 12 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5811907077472256" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/WebAudio/web-speech-api/blob/main/explainers/speech-recognition-result-timestamps.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/WebAudio/web-speech-api/pull/192" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" API` — *Core feature API query* (2 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"speechrecognitionevent.timestamp" OR "htmlmediaelement.currenttime" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"SpeechRecognitionResult Timestamps (WebSpeech API)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"speechStartTime" "speechEndTime" "SpeechRecognitionResult" VTTCue` — *Finds technical code snippets and WebIDL usage demonstrating the integration of speech result timestamps with VTTCue for media captioning.* (2 returned)
  - `("speechStartTime" OR "speechEndTime") ("Web Speech API" OR SpeechRecognition) (subtitles OR captions OR "click-to-seek")` — *Locates developer tutorials and practical guides implementing audio-synchronized transcriptions and click-to-seek navigation.* (1 returned)
  - `("speech-recognition-result-timestamps" OR "speechStartTime") (site:chromestatus.com OR "standards-positions" OR "Intent to Prototype")` — *Tracks browser engine vendor adoption, implementation status, and standards positions across Chromium, WebKit, and Gecko.* (1 returned)
  - `site:github.com/WebAudio/web-speech-api ("pull/192" OR "speechStartTime" OR "acoustic timing")` — *Surfaces specification discussions, issue debates, and contributor feedback in the W3C Web Speech API GitHub repository.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **2 verified relevant**
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
