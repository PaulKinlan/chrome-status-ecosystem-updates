# audioPreferred capture in getDisplayMedia API

> **Report Week:** 2026-W40 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Adds an audioPreference attribute to the DisplayMediaStreamOptions dictionary used in the getDisplayMedia API.   This hint allows web applications to signal to the UA that they prefer audio sharing along with video. This helps developers ensure that applications relying on audio capture work seamlessly.

## Ecosystem Status

- **Momentum:** High (280 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Shipping enabled by default in Chrome 152, the audioPreference hint in \`getDisplayMedia()\` addresses a long-standing friction point where user agents defaulted to leaving audio unchecked during screen capture prompts. While the feature is integrated into the W3C Screen Capture specification, engine implementation remains limited to Chromium. Cross-browser parity is missing because Firefox and Safari have yet to commit to implementation or broadly support display audio capture.

### Recommendations
- Actionable Advice: Treat \`audioPreference\` strictly as a progressive hint when invoking \`getDisplayMedia()\` without assuming audio will be granted. Developers must maintain runtime stream track inspections (\`stream.getAudioTracks().length &gt; 0\`) and clear UI guidance for users on Safari and Firefox, where display audio is either unprompted or unsupported.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Audio Selection Preference for getDisplayMedia](https://github.com/WebKit/standards-positions/issues/696) [open]
- **Mozilla:** [Audio Selection Preference for getDisplayMedia](https://github.com/mozilla/standards-positions/issues/1433) [open]

## Packages & Polyfills

- [expo-screen-capture](https://www.npmjs.com/package/expo-screen-capture) `v57.0.3` — Protects screens in your app from being captured or recorded, and notifies if a screenshot is taken.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEEQdE46LweBKbXn2VGfM6Czc73kzk5sgermcQeYAVruxcdtO038Wh6H1_xG1XXtmOVgKhehkIX7jXP8vRhX2P_uP94mUolKJXZqiAk3iAuv2x0CBZWleTngSRsZbrf_R7qIFClC4-a) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGNVfQIdF6nyJPr14I0wV5IVJ54aNJ2ZWT54Hj9d7JXsTZn5JdiXEAViPU_pSpmVtVdt_attL1vPLb7UUGBpzNcCqHGau9hTtHRFHesuRvjFPl-FIFMQMsubh6jhVvMnhmCfhYBdMc=) *(vertexaisearch.cloud.google.com)*
  > Chrome 152 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – ...
- [dev.to](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG4Vl7aD2PUJI9ecMo23t-nPU89JkKnFKZubJ5JQFsdJC3RP0uikBg5Iei9DrFEN6RrmTQEbhUg8wKGDML1WsXYVrzZZCQFGZvt8z53UMuUpyCs6O8KlH3_Z28YovC1eyW3Zi2ETBJxUFC1VxHrzHpzHR6eXgpVWAZ5mvXRpueXrPTNk8BVXu9B0lF6pip7d4KrBd4YF0DnOn4rHuEA) *(vertexaisearch.cloud.google.com)*
  > I tried to capture system audio in the browser. Here&#39;s what I learned. - DEV Community Skip to content Powered by Algolia Log in Create account DEV Community Add reaction Like Unicorn Exploding Head Raised Hands Fire Jump to Comments Save Boost P...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGRM79KRxdARvPXuwxu1wxSQbhXLrRSXf50yT7_Rt2qZDyCOOEyejoU2aSuAaNjrHRszPeUFRnGUmqUl22Y-SDnUUJGSEJvIKd1P0UTc5jKKNnkXfV63FBaz8oyRa1GJv5xbbxq0Wvc2oiw7UirSZB2IbNCo97PdF62GVs=) *(vertexaisearch.cloud.google.com)*
  > Capturing audio-only · Issue #12 · w3c/mediacapture-screen-share-extensions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh ...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFkmzNm8l-oJ5J6LlCzu2pUfLMysPfNKzSXg2sEN5_ijXNymaP5v7ODcQ32HfMGbwWCN8ywM_ZIFMsUDBejyMeH4_ziaiwg_-NabJCnpzU7iE-PF8RijqFWZJOIxpcqCzO_) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [addpipe.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGriogYAJf8j2Qtwj3gkm3BttR1mwhixJgOnDF5xxIvifu7SsZoQY53Gw5s7Fdg7CBW8giHpKN9Ems0BbMVvIqUzPfOYe8-wxOeUEOjEXMjlRYIsGK04OXTbifP3qyCaXNLDl8mrkamwO7igKVRiyU0ZrZgGQViAhEU7Yj-CA5wDFCx_0anPsV2BNlXwh6zbMFlDf7l_mjYm0vIsOnG-8cZKg==) *(vertexaisearch.cloud.google.com)*
  > Capturing the Screen With System Sounds on Chrome on macOS 19 February 2026 / getDisplayMedia Capturing the Screen With System Sounds on Chrome on macOS While testing getDisplayMedia to record my screen in Google Chrome on macOS, I saw that when shar...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFQkNYum78MSfNXwIjiUsI8hE82JyW8Qdgkesor64ti5vVJr5aUGEJNyHcMVGG1z08VmJs8FSMnPx3NxtyJoGM7XT7ratY3X1nDm39BSKsCIhbpF1cK2S6cVUlq2s7HX1o0nysyhX0bPBCfzbpc2eKA8TgWQQRf8POXcrs=) *(vertexaisearch.cloud.google.com)*
  > Capturing audio-only · Issue #12 · w3c/mediacapture-screen-share-extensions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFzW1Y8_TpJr_BYxXo4uh9LEm3ES9DD8Ku9HmrOmzEBaJl6BrBYagv-Rd6k9YVtfuWWn5urkRzWJdBgxK-L0p1q8s5WSzE5ptBj34hhSJ9SZ64slOt3rPh75HhVgAXUtU10FtCWfH8cUbWmaszbsA==) *(vertexaisearch.cloud.google.com)*
  > Audio Selection Preference for getDisplayMedia · Issue #696 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reloa...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFAGAJoevI99kyp-PTamvjU4ycbMDfdGdu5tFW2sh0zMQnZN42w_Kx6tDfE9jyXr8yJmPr8eeqPmGCmF8RiTs8bwVrhUkiWIHiIMtpiaUH5SiJvUVpYSJpPUCoa0drWkA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"audioPreferred capture in getDisplayMedia API"** feature introduces the `audioPreference` attribute to the `DisplayMediaStreamOptions` dictionary passed into `navigator.mediaDevices.getDisplayMedia()`:  ```javascrip
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEj9MmT3DmUX_v7gsld-n7ipMIOL3biw5SCXS-9p9Vbkl__YRTOcaOXklTu5CCBRcY9Jyq3MmM-2t0Ug1sqvThqYCZsy6IYWUBFBYd-SZBgtyUhRfPPKjaZrIkqBnpnl8DUEbXJirRN) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"audioPreferred capture in getDisplayMedia API"** feature introduces the `audioPreference` attribute to the `DisplayMediaStreamOptions` dictionary passed into `navigator.mediaDevices.getDisplayMedia()`:  ```javascrip
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFy48qg4iuesh01GkrcHzqZyhgCdS-9jJqdUyaQNyc4pWyHLrglL5uFtcJpUaoLCvwEtGp2db1Di2lNfOIQN4VNG7wO-BzzRn06qDgifssepY5VGPEPse_FQTs-) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"audioPreferred capture in getDisplayMedia API"** feature introduces the `audioPreference` attribute to the `DisplayMediaStreamOptions` dictionary passed into `navigator.mediaDevices.getDisplayMedia()`:  ```javascrip
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHD1efE6SkjwfbBwYhRiRZditoFazsUKwfK7WT2OjsFDYjQMPgLMAJjCuhFwLquPjfzLrCAbcGcpRrgZEpIC6iiBeB2MPjKKNUoafE9fN5F8QpVLlLV1E5pJZw4) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"audioPreferred capture in getDisplayMedia API"** feature introduces the `audioPreference` attribute to the `DisplayMediaStreamOptions` dictionary passed into `navigator.mediaDevices.getDisplayMedia()`:  ```javascrip
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFLMfa3CneGOp8rgY7Jq2Aiwt8dB09nnHAKTUwNOnrka0c6P30RUlp0JJrvpkcVGkUuSXH_CsSWbH9LB05E-qQn5jdZPFBGkLFmCX7Zitk91ABnRkjKpitvWHPJSBwKxqFdOqgvF05ln0tkzLE=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"audioPreferred capture in getDisplayMedia API"** feature introduces the `audioPreference` attribute to the `DisplayMediaStreamOptions` dictionary passed into `navigator.mediaDevices.getDisplayMedia()`:  ```javascrip
- [Re: \[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17033.html) *(mail-archive.com)*
  > &gt;&gt;&gt; *No information provided* &gt;&gt;&gt; &gt;&gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt;&gt; https://<strong>chromestatus.com/feature/5085785343787008</strong>?gate=6159500559122432 &gt;&gt;&gt; &gt;&gt;&gt; This intent...
- [\[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17031.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected], [email protected] &gt; &gt; *Explainer* &gt; &gt; https://<strong>github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md</strong> &gt; &gt; *Speci...
- [\[blink-dev\] Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17022.html) *(mail-archive.com)*
  > Explainer https://github.com/p...reen-share/#dom-displaymediastreamoptions-audioselection Summary <strong>Adds an audioPreference attribute to the DisplayMediaStreamOptions dictionary used in the getDisplayMedia API</strong>....
- [Re: \[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17032.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Wednesday, July ...dom-displaymediastreamoptions-audioselection &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>Adds an audioPreference attribute to the DisplayMediaStreamOptions &gt;&gt; dictionary used in the getDisplayMedia AP...
- [audioPreferred capture in getDisplayMedia API](https://chromestatus.com/feature/5085785343787008) *(chromestatus.com · 2026-07-16T00:00:00)*
  > We cannot provide a description for this page right now
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22intent+to+ship%22) *(groups.google.com)*
  > <strong>audioPreference attribute to the DisplayMediaStreamOptions &gt;&gt;&gt; dictionary used in the getDisplayMedia API</strong>.
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>Adds an audioPreference attribute to the DisplayMediaStreamOptions dictionary used in navigator.mediaDevices.getDisplayMedia().</strong>
- [Chrome 152 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/152) *(chromestatus.com)*
  > <strong>Adds an audioPreference attribute to the DisplayMediaStreamOptions dictionary used in the getDisplayMedia API</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17033.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5085785343787008`)*
  > &gt;&gt;&gt; *No information provided* &gt;&gt;&gt; &gt;&gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt;&gt; https://<strong>chromestatus.com/feature/5085785343787008</strong>?gate=6159500559122432 &gt;&gt;&gt; &gt;&gt;&gt; T...
- [\[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17031.html) *(mail-archive.com)* *(Cites: `https://github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md`)*
  > &gt; *Contact emails* &gt; [email protected], [email protected] &gt; &gt; *Explainer* &gt; &gt; https://<strong>github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md</strong> &gt; &...
- [\[blink-dev\] Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17022.html) *(mail-archive.com)* *(Cites: `https://github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md`)*
  > Explainer https://github.com/p...reen-share/#dom-displaymediastreamoptions-audioselection Summary <strong>Adds an audioPreference attribute to the DisplayMediaStreamOptions dictionary used in the getDisplayMedia API</strong>....
- [Re: \[blink-dev\] Re: Intent to Ship: audioPreferred capture in getDisplayMedia API](http://www.mail-archive.com/blink-dev@chromium.org/msg17032.html) *(mail-archive.com)* *(Cites: `https://github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md`)*
  > &gt; LGTM1 &gt; &gt; On Wednesday, July ...dom-displaymediastreamoptions-audioselection &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>Adds an audioPreference attribute to the DisplayMediaStreamOptions &gt;&gt; dictionary used in the getDispl...
- [Screen Capture](https://www.w3.org/TR/screen-capture) *(w3.org · 2026-08-27T00:00:00)* *(Cites: `https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection`)*
  > https://<strong>w3c.github.io/mediacapture-screen-share</strong>/ History: https://www.w3.org/standards/history/screen-capture/ Commit history ·
- [content/files/en-us/web/api/screen\_capture\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/screen_capture_api/index.md) *(github.com)* *(Cites: `https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection`)*
  > https://<strong>w3c.github.io/mediacapture-screen-share</strong>/ https://screen-share.github.io/element-capture/ https://w3c.github.io/mediacapture-region/ https://w3c.github.io/mediacapture-surface-control/ {{DefaultAPISidebar(&quot;Scree...
- [Add display-capture · Issue #339 · w3c/webappsec-permissions-policy](https://github.com/w3c/webappsec-permissions-policy/issues/339) *(github.com)* *(Cites: `https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection`)*
  > It&#x27;s added in https://<strong>w3c.github.io/mediacapture-screen-share</strong>/, but it&#x27;s not in the registry.

## 📚 Platform Documentation & Specifications

- [Screen Capture](https://www.w3.org/TR/screen-capture) *(w3.org)*
- [content/files/en-us/web/api/screen\_capture\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/screen_capture_api/index.md) *(github.com)*
- [Add display-capture · Issue #339 · w3c/webappsec-permissions-policy](https://github.com/w3c/webappsec-permissions-policy/issues/339) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 34 result(s) found across 11 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/5085785343787008" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/palak8669/mediacapture-screen-share-audio-capture/blob/palak8669-patch-1/audio_selection_explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"w3c.github.io/mediacapture-screen-share" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"audioPreferred capture in getDisplayMedia API" API` — *Core feature API query* (4 returned)
  - `"audioPreferred capture in getDisplayMedia API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"audioPreferred capture in getDisplayMedia API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (7 returned)
  - `"audioPreferred capture in getDisplayMedia API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"getDisplayMedia" ("audioPreference" OR "audioPreferred") example` — *Find JavaScript code snippets and API usage patterns utilizing the audioPreference dictionary attribute inside getDisplayMedia options.* (4 returned)
  - `"getDisplayMedia" ("audioPreference" OR "audioPreferred") tutorial OR guide` — *Discover developer tutorials, walkthroughs, and practical guides on capturing screen audio with preference hints in web applications.* (0 returned)
  - `site:chromestatus.com OR site:developer.chrome.com ("audioPreference" OR "audioPreferred") "getDisplayMedia"` — *Track official browser implementation status, Chrome release notes, and intent-to-ship announcements for the feature.* (5 returned)
  - `site:github.com/w3c/mediacapture-screen-share ("audioPreference" OR "audioSelection" OR "audioPreferred")` — *Locate working group debates, spec changes, and issue tracking related to screen sharing audio preference hints in W3C repositories.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **13 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 397 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5085785343787008)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5085785343787008)
- [Specification](https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-audioselection)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/535514300)
