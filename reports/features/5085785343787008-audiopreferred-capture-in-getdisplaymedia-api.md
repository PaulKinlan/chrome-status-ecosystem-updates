# audioPreferred capture in getDisplayMedia API

> **Report Week:** 2026-W38 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Adds an audioPreference attribute to the DisplayMediaStreamOptions dictionary used in the getDisplayMedia API.   This hint allows web applications to signal to the UA that they prefer audio sharing along with video. This helps developers ensure that applications relying on audio capture work seamlessly.

## Ecosystem Status

- **Momentum:** High (300 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** audioPreferred capture in getDisplayMedia API is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "WebRTC project (@webrtc) on X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Audio Selection Preference for getDisplayMedia](https://github.com/WebKit/standards-positions/issues/696) [open]
- **Mozilla:** [Audio Selection Preference for getDisplayMedia](https://github.com/mozilla/standards-positions/issues/1433) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [WebRTC project (@webrtc) on X](https://twitter.com/webrtc/status/1049921385634701312) — *by @webrtc, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17033.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Vladimir Levin Wed, 22 Jul 2026 08:28:28 -0700 L...
- [\[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17031.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Alex Russell Wed, 22 Jul 2026 08:27:15 -0700 LGTM1 On We...
- [\[blink-dev\] Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17022.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: audioPreferred capture in getDisplayMedia API Skip to site navigation (Press enter) [blink-dev] Intent to Ship: audioPreferred capture in getDisplayMedia API Chromestatus Wed, 22 Jul 2026 05:30:08 -0700 Contact emails [ema...
- [Re: \[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17032.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Chris Harrelson Wed, 22 Jul 2026 08:27:51 -0700 ...
- [Using the MediaStream API to capture screenshots or share live screens in javascript? - Stack Overflow](https://stackoverflow.com/questions/40110458/using-the-mediastream-api-to-capture-screenshots-or-share-live-screens-in-javasc) *(stackoverflow.com)*
  > (too many dirty canvas elements ... · Arunava Roy Choudhury · 1 4 · w3c.github.io/mediacapture-screen-share <strong>not yet implemented anywhere</strong>, and developer.chrome.com/extensions/desktopCapture only available at chrome: level ...
- [WebRTC ハンズオン資料 ScreenCapture ＆ マルチストリーム編 #WebRTC - Qiita](https://qiita.com/massie_g/items/f852680b16c1b14cb9e8) *(qiita.com · 2019-05-31T01:53:11)*
  > Screen Capture ... https://<strong>w3c.github.io/mediacapture-screen-share</strong>/
- [audioPreferred capture in getDisplayMedia API](https://chromestatus.com/feature/5085785343787008) *(chromestatus.com · 2026-07-16T00:00:00)*
  > We cannot provide a description for this page right now
- [Using the Screen Capture API - UDN Web Docs: MDN Backup](https://udn.realityripple.com/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) *(udn.realityripple.com)*
  > To request that the screen be shared with included audio, the options passed into getDisplayMedia() might look like this:
- [Chrome Tutorial: Recording The Screen With Both Microphone Audio AND System Sounds](https://blog.addpipe.com/recording-the-screen-in-chrome-with-both-microphone-audio-and-system-sounds) *(blog.addpipe.com · 2026-05-21T08:17:12)*
  > The constraints object passed into getDisplayMedia() is a DisplayMediaStreamConstraints object. Through it, you can also specify particular constraints for both video and audio, like whether or not the cursor should show up in the recording. Some of ...
- [Record and share the screen from the browser — getDisplayMedia, and why Electron does the picker differently \| daily.dev](https://daily.dev/posts/record-and-share-the-screen-from-the-browser-getdisplaymedia-and-why-electron-does-the-picker-dif-7ozwcimtz) *(daily.dev · 2026-09-10T10:32:02)*
  > No, audio capture with getDisplayMedia is the flakiest part of screen recording: tab audio is well supported in Chromium, but full-system audio is patchy and OS-dependent, with macOS being especially limited in capturing system audio. Developers shou...
- [getDisplayMedia Screensharing Tutorial - GetStream.io](https://getstream.io/resources/projects/webrtc/basics/screensharing) *(getstream.io)*
  > In this tutorial, we will learn ... WebRTC&#x27;s getDisplayMedia API. You&#x27;ve covered the peer-to-peer connection and transmission of plain messages between multiple peers, it&#x27;s time to delve into the world of screensharing. Screen sharing ...
- [Creating Media in the Browser: Screen Capture, Audio Tools, and MediaRecorder Explained \| by Hajagha Hasanli \| Medium](https://medium.com/@hajaghahasanli/creating-media-in-the-browser-screen-capture-audio-tools-and-mediarecorder-explained-fe4e617f7efc) *(medium.com · 2025-05-23T16:11:01)*
  > Both getUserMedia() and getDisplayMedia() return a MediaStream — which is a live, readable stream of audio/video.
- [Using the Screen Capture API](https://contest-server.cs.uchicago.edu/ref/JavaScript/developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture.html) *(contest-server.cs.uchicago.edu · 2019-05-27T00:00:00)*
  > To request that the screen be shared with included audio, the options passed into getDisplayMedia() might look like this:
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22intent+to+ship%22) *(groups.google.com)*
  > <strong>audioPreference attribute to the DisplayMediaStreamOptions &gt;&gt;&gt; dictionary used in the getDisplayMedia API</strong>.
- [Record and share the screen from the browser — getDisplayMedia, and why Electron does the picker differently - DEV Community](https://dev.to/alex_truhniy/record-and-share-the-screen-from-the-browser-getdisplaymedia-and-why-electron-does-the-picker-77d) *(dev.to · 2026-09-07T14:20:02)*
  > A standalone companion to my FieldKit PWA series. In part 3 I covered capturing the camera and mic with getUserMedia; this is its sibling — capturing the screen with getDisplayMedia.
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>Adds an audioPreference attribute to the DisplayMediaStreamOptions dictionary used in navigator.mediaDevices.getDisplayMedia().</strong>
- [Screen Recorder: recording microphone and the desktop audio at the same time - DEV Community](https://dev.to/chromiumdev/screen-recorder-recording-microphone-and-the-desktop-audio-at-the-same-time-4c0o) *(dev.to · 2019-05-14T14:22:23)*
  > Firstly, <strong>getDisplayMedia in Chrome now allows audio capture</strong>, there seems like an odd oversight in the Spec in that it did not allow you to specify audio: true in the function call, now you can.
- [Intent to Ship: Feature Policy: diplay-capture](https://groups.google.com/a/chromium.org/g/blink-dev/c/pNPotQY92UY/m/thZ3h-zQAQAJ) *(groups.google.com)*
  > Implement the display-capture feature policy from the Screen Capture spec. https://w3c.github.io/permissions/#dom-permissionname-display-capture This policy allows restricting access to the getDisplayMedia() API in embedded resources · Firefox and Sa...
- [Screen Capture API Demo](https://progressier.com/pwa-capabilities/screen-capture-desktop) *(progressier.com · 2026-08-30T21:42:07)*
  > With the Screen Capture API, websites and web apps can easily record a browser tab, a specific window or even a user&#x27;s entire screen.
- [blink-dev - Google Groups](https://groups.google.com/a/chromium.org/g/Blink-dev) *(groups.google.com · 2021-11-10T00:00:00)*
  > Intent to Ship: audioPreferred capture in getDisplayMedia API

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17033.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5085785343787008`)*
  > Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Vladimir Levin Wed, 22 Jul 2026 08:28:...
- [\[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17031.html) *(mail-archive.com)* *(Cites: `https://github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md`)*
  > [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Alex Russell Wed, 22 Jul 2026 08:27:15 -0700 L...
- [\[blink-dev\] Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17022.html) *(mail-archive.com)* *(Cites: `https://github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md`)*
  > [blink-dev] Intent to Ship: audioPreferred capture in getDisplayMedia API Skip to site navigation (Press enter) [blink-dev] Intent to Ship: audioPreferred capture in getDisplayMedia API Chromestatus Wed, 22 Jul 2026 05:30:08 -0700 Contact e...
- [Re: \[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17032.html) *(mail-archive.com)* *(Cites: `https://github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md`)*
  > Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Chris Harrelson Wed, 22 Jul 2026 08:27...
- [Screen Capture](https://www.w3.org/TR/screen-capture) *(w3.org · 2026-08-27T00:00:00)* *(Cites: `https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection`)*
  > https://<strong>w3c.github.io/mediacapture-screen-share</strong>/ History: https://www.w3.org/standards/history/screen-capture/ Commit history ·
- [content/files/en-us/web/api/screen\_capture\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/screen_capture_api/index.md) *(github.com)* *(Cites: `https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection`)*
  > content/files/en-us/web/api/screen_capture_api/index.md at main · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload...
- [Add display-capture · Issue #339 · w3c/webappsec-permissions-policy](https://github.com/w3c/webappsec-permissions-policy/issues/339) *(github.com)* *(Cites: `https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection`)*
  > Add display-capture · Issue #339 · w3c/webappsec-permissions-policy · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refres...
- [Using the MediaStream API to capture screenshots or share live screens in javascript? - Stack Overflow](https://stackoverflow.com/questions/40110458/using-the-mediastream-api-to-capture-screenshots-or-share-live-screens-in-javasc) *(stackoverflow.com)* *(Cites: `https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection`)*
  > (too many dirty canvas elements ... · Arunava Roy Choudhury · 1 4 · w3c.github.io/mediacapture-screen-share <strong>not yet implemented anywhere</strong>, and developer.chrome.com/extensions/desktopCapture only available at chrome: level .....
- [WebRTC ハンズオン資料 ScreenCapture ＆ マルチストリーム編 #WebRTC - Qiita](https://qiita.com/massie_g/items/f852680b16c1b14cb9e8) *(qiita.com · 2019-05-31T01:53:11)* *(Cites: `https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection`)*
  > Screen Capture ... https://<strong>w3c.github.io/mediacapture-screen-share</strong>/

## 📚 Platform Documentation & Specifications

- [Screen Capture](https://www.w3.org/TR/screen-capture) *(w3.org)*
- [content/files/en-us/web/api/screen\_capture\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/screen_capture_api/index.md) *(github.com)*
- [Add display-capture · Issue #339 · w3c/webappsec-permissions-policy](https://github.com/w3c/webappsec-permissions-policy/issues/339) *(github.com)*
- [Using the Screen Capture API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) *(developer.mozilla.org)*
- [GetDisplayMedia don't capture the audio from microphone · Issue #694 · w3c/mediacapture-main](https://github.com/w3c/mediacapture-main/issues/694) *(github.com)*
- [MediaDevices: getDisplayMedia() method](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia) *(developer.mozilla.org)*
- [Screen Capture API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 33 result(s) found across 11 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/5085785343787008" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"w3c.github.io/mediacapture-screen-share" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"audioPreferred capture in getDisplayMedia API" API` — *Core feature API query* (4 returned)
  - `"audioPreferred capture in getDisplayMedia API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"audioPreferred capture in getDisplayMedia API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (6 returned)
  - `"audioPreferred capture in getDisplayMedia API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"getDisplayMedia" ("audioPreference" OR "audioPreferred") "DisplayMediaStreamOptions"` — *Finds JavaScript code examples, interface definitions, and WebIDL dictionary usage demonstrating how audio preference flags are passed into getDisplayMedia calls.* (4 returned)
  - `"getDisplayMedia" ("audioPreference" OR "audioPreferred" OR "audioSelection") tutorial OR guide` — *Surfaces developer guides, practical blog posts, and implementations explaining how to prompt and prioritize audio capture during screen sharing.* (0 returned)
  - `"getDisplayMedia" ("audioPreference" OR "audioPreferred") ("intent to prototype" OR "intent to ship" OR chromestatus)` — *Tracks browser vendor implementation status, Chrome platform status entries, and formal Intent-to-Ship/Prototype discussions.* (6 returned)
  - `site:github.com/w3c/mediacapture-screen-share ("audioPreference" OR "audioPreferred" OR "audioSelection")` — *Searches the W3C Screen Capture specification repository for pull requests, issues, and working group debates on audio selection naming and behavior.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **2 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 388 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5085785343787008)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5085785343787008)
- [Specification](https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/535514300)
