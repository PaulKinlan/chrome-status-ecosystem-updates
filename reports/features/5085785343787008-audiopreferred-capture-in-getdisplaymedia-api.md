# audioPreferred capture in getDisplayMedia API

> **Report Week:** 2026-W37 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Adds an audioPreference attribute to the DisplayMediaStreamOptions dictionary used in the getDisplayMedia API. 

This hint allows web applications to signal to the UA that they prefer audio sharing along with video. This helps developers ensure that applications relying on audio capture work seamlessly.

## Ecosystem Status

- **Momentum:** High (180 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** audioPreferred capture in getDisplayMedia API is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Audio Selection Preference for getDisplayMedia](https://github.com/WebKit/standards-positions/issues/696) [open]
- **Mozilla:** [Audio Selection Preference for getDisplayMedia](https://github.com/mozilla/standards-positions/issues/1433) [open]

## Packages & Polyfills

- [expo-screen-capture](https://www.npmjs.com/package/expo-screen-capture) `v57.0.2` — Protects screens in your app from being captured or recorded, and notifies if a screenshot is taken.

## 📰 Ecosystem Blogs & Articles

- [Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17033.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Vladimir Levin Wed, 22 Jul 2026 08:28:28 -0700 L...
- [[blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17031.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Alex Russell Wed, 22 Jul 2026 08:27:15 -0700 LGTM1 On We...
- [[blink-dev] Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17022.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: audioPreferred capture in getDisplayMedia API Skip to site navigation (Press enter) [blink-dev] Intent to Ship: audioPreferred capture in getDisplayMedia API Chromestatus Wed, 22 Jul 2026 05:30:08 -0700 Contact emails [ema...
- [Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17032.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Chris Harrelson Wed, 22 Jul 2026 08:27:51 -0700 ...
- [Using the MediaStream API to capture screenshots or share live screens in javascript? - Stack Overflow](https://stackoverflow.com/questions/40110458/using-the-mediastream-api-to-capture-screenshots-or-share-live-screens-in-javasc) *(stackoverflow.com)*
  > (too many dirty canvas elements ... · Arunava Roy Choudhury · 1 4 · w3c.github.io/mediacapture-screen-share <strong>not yet implemented anywhere</strong>, and developer.chrome.com/extensions/desktopCapture only available at chrome: level ...
- [audioPreferred capture in getDisplayMedia API](https://chromestatus.com/feature/5085785343787008) *(chromestatus.com · 2026-07-16T00:00:00)*
  > We cannot provide a description for this page right now
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22intent+to+ship%22) *(groups.google.com)*
  > audioPreference attribute to the DisplayMediaStreamOptions &gt;&gt;&gt; dictionary used in the getDisplayMedia API.
- [windowAudio for getDisplayMedia()](https://chromestatus.com/feature/5072779506089984) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [blink-dev - Google Groups](https://groups.google.com/a/chromium.org/g/blink-dev) *(groups.google.com)*
  > Intent to Ship: audioPreferred capture in getDisplayMedia API
- [MediaStream.getDisplayMedia()](https://chromestatus.com/feature/6744724455030784) *(chromestatus.com · 2022-09-13T00:00:00)*
  > We cannot provide a description for this page right now
- [Calling getDisplayMedia() without user activation](https://chromestatus.com/feature/5090735022407680) *(chromestatus.com · 2022-12-12T00:00:00)*
  > We cannot provide a description for this page right now
- [Record and share the screen from the browser — getDisplayMedia, and why Electron does the picker differently](https://dev.to/alex_truhniy/record-and-share-the-screen-from-the-browser-getdisplaymedia-and-why-electron-does-the-picker-77d) *(dev.to · Oleksandr Trukhnii · Sep 7)*
  > A standalone companion to my FieldKit PWA series. In part 3 I covered capturing the camera and mic...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17033.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5085785343787008`)*
  > Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Vladimir Levin Wed, 22 Jul 2026 08:28:...
- [[blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17031.html) *(mail-archive.com)* *(Cites: `https://github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md`)*
  > [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Alex Russell Wed, 22 Jul 2026 08:27:15 -0700 L...
- [[blink-dev] Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17022.html) *(mail-archive.com)* *(Cites: `https://github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md`)*
  > [blink-dev] Intent to Ship: audioPreferred capture in getDisplayMedia API Skip to site navigation (Press enter) [blink-dev] Intent to Ship: audioPreferred capture in getDisplayMedia API Chromestatus Wed, 22 Jul 2026 05:30:08 -0700 Contact e...
- [Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17032.html) *(mail-archive.com)* *(Cites: `https://github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md`)*
  > Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API Chris Harrelson Wed, 22 Jul 2026 08:27...
- [Screen Capture](https://www.w3.org/TR/screen-capture) *(w3.org · 2026-07-23T00:00:00)* *(Cites: `https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection`)*
  > https://<strong>w3c.github.io/mediacapture-screen-share</strong>/ History: https://www.w3.org/standards/history/screen-capture/ Commit history ·
- [content/files/en-us/web/api/screen_capture_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/screen_capture_api/index.md) *(github.com)* *(Cites: `https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection`)*
  > content/files/en-us/web/api/screen_capture_api/index.md at main · mdn/content · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload...
- [Add display-capture · Issue #339 · w3c/webappsec-permissions-policy](https://github.com/w3c/webappsec-permissions-policy/issues/339) *(github.com)* *(Cites: `https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection`)*
  > Add display-capture · Issue #339 · w3c/webappsec-permissions-policy · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refres...
- [Using the MediaStream API to capture screenshots or share live screens in javascript? - Stack Overflow](https://stackoverflow.com/questions/40110458/using-the-mediastream-api-to-capture-screenshots-or-share-live-screens-in-javasc) *(stackoverflow.com)* *(Cites: `https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection`)*
  > (too many dirty canvas elements ... · Arunava Roy Choudhury · 1 4 · w3c.github.io/mediacapture-screen-share <strong>not yet implemented anywhere</strong>, and developer.chrome.com/extensions/desktopCapture only available at chrome: level .....

## 📚 Platform Documentation & Specifications

- [Screen Capture](https://www.w3.org/TR/screen-capture) *(w3.org)*
- [content/files/en-us/web/api/screen_capture_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/screen_capture_api/index.md) *(github.com)*
- [Add display-capture · Issue #339 · w3c/webappsec-permissions-policy](https://github.com/w3c/webappsec-permissions-policy/issues/339) *(github.com)*
- [Either fully support or remove audio capture entirely: "MAY" re audio capture is ambiguous · Issue #140 · w3c/mediacapture-screen-share](https://github.com/w3c/mediacapture-screen-share/issues/140) *(github.com)*
- [MediaDevices: getDisplayMedia() method](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia) *(developer.mozilla.org)*
- [Screen Capture API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 16 result(s) found across 7 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/5085785343787008" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"w3c.github.io/mediacapture-screen-share" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"getDisplayMedia" ("audioPreference" OR "audioPreferred" OR "audioSelection") "DisplayMediaStreamOptions"` — *Finds real-world JavaScript code snippets, WebIDL definitions, and exact syntax usage within navigator.mediaDevices.getDisplayMedia options.* (5 returned)
  - `"getDisplayMedia" ("audioPreference" OR "audioPreferred") ("screen share" OR "tab audio") (tutorial OR guide OR "how to")` — *Surfaces developer guides, how-tos, and blog posts detailing how to prompt and capture system or tab audio during screen sharing.* (0 returned)
  - `site:chromestatus.com OR site:groups.google.com/a/chromium.org/g/blink-dev ("audioPreference" OR "audioPreferred" OR "audioSelection") "getDisplayMedia"` — *Retrieves Chromium release status, Intent to Prototype/Ship threads, and browser vendor implementation timelines.* (6 returned)
  - `site:github.com/w3c/mediacapture-screen-share ("audioPreference" OR "audioPreferred" OR "audioSelection" OR "audio capture")` — *Uncovers W3C working group specifications, issue tracker discussions, trade-offs, and consensus on screen share audio hints.* (1 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 3 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

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
