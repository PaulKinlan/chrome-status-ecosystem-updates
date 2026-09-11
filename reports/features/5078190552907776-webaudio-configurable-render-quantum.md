# WebAudio: Configurable render quantum

> **Report Week:** 2026-W37 | **Milestone:** Chrome 153 | **Category:** Enabled by default

## Overview

Adds an optional renderSizeHint to AudioContext and OfflineAudioContext. This allows developers to customize the WebAudio render quantum size by passing a specific integer, use the default of 128 frames by omitting the hint or passing "default", or request that the User-Agent select an optimal size by specifying "hardware".

### Motivation

It is difficult and complex to write a web app when the audio processing block size does not match with the WebAudio render quantum size (128 sample-frames). Removing this restriction and making it customizable on AudioContext would enable easier development and more efficient audio processing.

## Ecosystem Status

- **Momentum:** High (350 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** WebAudio: Configurable render quantum is currently Enabled by default in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [WebAudio Configurable Render Quantum](https://github.com/WebKit/standards-positions/issues/662) [open]
- **Mozilla:** [WebAudio Configurable Render Quantum](https://github.com/mozilla/standards-positions/issues/1407) [open]

## 📰 Ecosystem Blogs & Articles

- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGwlUZpnjotOCO0dpT-fcTDmqpfKq3CcAoJ03dkHBhWkugNGMdZzA2kuPM8LshSjMjKid_nn_VvKMEvLmPBMO5yRAhUn9JMN9WvDd8hMMc-yR5dF_NKGGu4-keI_aSdpPW2MHSkW5PbgXZec1p3NVSK_i0vBNK5xrJNZvpCW09nCYmUciuelx4=) *(vertexaisearch.cloud.google.com)*
  > Intent to Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: WebAudio: Configurab...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFo8QkXMYn0OqFDDDaOTwWTNlsmIrQZvCbcdYydIyNLH4GO_Hq9GH4zNqWpxTaXDkwfK-woOiRhPPP68BNFjRsZoZmvSdibHYFCtJR_xBehwJ8rCN_YW6sqU6zzjyKPUmbpAt1SM39HdbXJiuUuWeq2LJZ3U-AiRQgLvCiZXu3M7oI2OcU6pyRuz4MonS5jno47Sg==) *(vertexaisearch.cloud.google.com)*
  > web-audio-api/explainer/user-selectable-render-size.md at main · WebAudio/web-audio-api · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEFfxBiUa6YftqgumvaYa0YP2zevsU4fVbqKpuLwnz28KsqrSmHUcrYmDFZX4ujje69KfoOTFttJH9WeXB8eV2PnClFNXSUICzi3PdwCBBUJghfXzo9QCihMmiBippilkEMyBcVj1t_p448xQ5_yZRHm47ZuVU_f8s=) *(vertexaisearch.cloud.google.com)*
  > Intent to Prototype: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: WebAudio: Configurable...
- [swmansion.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEUV56_Kblm8UIgrWdCYtg49iw_gvYUdkQQbrY87q8dDrv_GF0pgXEmwAER_8THsXAnbVZGtumkCt2JUq3-BDAScBhZK00zYzl4YX5JI1ibWVMyqS30PtH_4ATgSFyd-DOoZZVmxZUFp6K2g3XNv0nlV_AWBx8U1ck8xrj5YcDocS33BhOq) *(vertexaisearch.cloud.google.com)*
  > BaseAudioContext | React Native Audio API Skip to main content Version: Latest On this page BaseAudioContext The BaseAudioContext interface acts as a supervisor of audio-processing graphs. It provides key processing parameters such as current time, o...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFD7m4nslYTCaWUKrJE7RH6bjnFXVCxdbj95caIgxUQKFfOnxpTs-qhu-7tJmV6tp7ybtHlo3wjLs2oabSAeLXxI0dlebek0T3TrkNrdiLD_3N86Zs1KveicSMtOpP7E1HpMpuWgcG1ytQlTMIGuQ==) *(vertexaisearch.cloud.google.com)*
  > WebAudio Configurable Render Quantum · Issue #662 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGmT-_XXDTMPvHUD1uCiBXv3AvXDPvidYgg9xob1tM3PJti9gMiwMB_ZCdnE-ffLuHIghNuuwqCkrHtCWLkbiELUW6ZdPJko4vyufCAkT_oRBVKT1mPp50BB6cohA==) *(vertexaisearch.cloud.google.com)*
  > Chrome 153 Release Notes - Chrome Platform Status Chrome 153 Release Notes Preview DOM Capability elements: <camera> and <microphone> # Link copied! The <camera> and <microphone> capability elements are declarative, user-activated HTML controls that ...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGKRRNxj0gRq2iDwKITzyKWdMNuQvGegaRBcaFi8v05GgNbctIjT66GKSE-NzBareSfw2Jtcj1JyzyTBszMVYV7IMa_zdNKQHwIiAWRmnzrEoFNv7McNfN9Rg==) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Configurable Render Quantum (`renderSizeHint`)  The **Configurable Render Quantum** feature introduces the `renderSizeHint` property to both `AudioContextOptions` and `OfflineAudioContextOptions` in the Web Audio API specification:  ```
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGcdFDWy1QV1miyH4C4PhzpQTRcIizlfg8Z9yMVw9G9RrPCB1cGc8ffN4sV4ovlC3ePYneRu7RxtKbY3iCM909TJx0-MGA6hnYgwTJgRi1kIjV08o1FB3us99CfkEub07CnXVF_MLUopnk=) *(vertexaisearch.cloud.google.com)*
  > WebAudio: visualizar métricas da API WebAudio | Chrome DevTools | Chrome for Developers Ir para o conteúdo principal / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русск...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHwkCSjn25LYNwfbP9j4rk8va760RRRTrXi4gBlcjcJ6obnWSNVgFMvT8QE7glZUfEaj05ayriUsJyBBiKMfwwZIH-tNiZ7MG22pc1QQvgabIF299eA9t-esXcZ9x7VJ57ahA==) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Configurable Render Quantum (`renderSizeHint`)  The **Configurable Render Quantum** feature introduces the `renderSizeHint` property to both `AudioContextOptions` and `OfflineAudioContextOptions` in the Web Audio API specification:  ```
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGs9sn8p5KFeFkmAWyzlqZBXpV50prNRpjubCR7czl9ft5vd3aTfsnB8AFb0-OCVWPSrzCcwAPEdEBhNLmWTYPQ88rrbxJF6Of2BJGCmGLKlmXc-AQr591N4KvjQi3rx8-MZHnFtyX7uxMCWQ==) *(vertexaisearch.cloud.google.com)*
  > ### Overview: Configurable Render Quantum (`renderSizeHint`)  The **Configurable Render Quantum** feature introduces the `renderSizeHint` property to both `AudioContextOptions` and `OfflineAudioContextOptions` in the Web Audio API specification:  ```
- [Intent to Extend Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/MlLqosTB0cQ) *(groups.google.com)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5078190552907776</strong>?gate=5366651127201792
- [Intent to Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/j7Wf7bA_qOY) *(groups.google.com · 2026-01-21T00:00:00)*
  > Link to entry on the Chrome Platform Statushttps://<strong>chromestatus.com/feature/5078190552907776</strong>?gate=5140327991869440
- [webaudio package - github.com/mafredri/cdp/protocol/webaudio - Go Packages](https://pkg.go.dev/github.com/mafredri/cdp/protocol/webaudio) *(pkg.go.dev · 2024-09-01T00:00:00)*
  > Package webaudio implements the WebAudio domain. This domain allows inspection of Web Audio API. https://<strong>webaudio.github.io/web-audio-api</strong>/
- [Web Audio API Series 1 — Introduction | by _haochuan | HackerNoon.com | Medium](https://medium.com/hackernoon/web-audio-api-series-1-introduction-d073fca62e1d) *(medium.com · 2018-06-11T22:55:15)*
  > The goal of this API is to include capabilities found in modern game audio engines and some of the mixing, processing, and filtering tasks that are found in modern desktop audio production applications. What follows is a gentle introduction to using ...
- [The Web Audio API](https://padenot.github.io/web-audio-scotlandjs15) *(padenot.github.io)*
  > [...] <strong>A high-level JavaScript API for processing and synthesizing audio in web applications</strong>. The primary paradigm is of an audio routing graph, where a number of AudioNode objects are connected together to define the overall audio re...
- [Chrome DevTools Protocol - WebAudio domain](https://chromedevtools.github.io/devtools-protocol/tot/WebAudio) *(chromedevtools.github.io)*
  > This domain allows inspection of Web Audio API. https://<strong>webaudio.github.io/web-audio-api</strong>/ Experimental
- [AudioContextOptions.renderSizeHint - configurable render quantum [40637820] - Chromium](https://issues.chromium.org/issues/40637820) *(issues.chromium.org)*
  > To prepare for using hardware render size hints, use a std::optional value similar to how sample_rate is handled. For now, <strong>hardcode the default 128 size</strong>. This will be fixed later when the source of truth for the render quantum size i...
- [Intent to Prototype: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/n4PifuLlrwc) *(groups.google.com)*
  > https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize · AudioContext and OfflineAudioContext now take an optional renderSizeHint, which <strong>allows users to ask for a particular render quantum size when an integer is pas...
- [[blink-dev] Intent to Extend Experiment: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg16806.html) *(mail-archive.com)*
  > Specification https://webaudio... AudioContext and OfflineAudioContext now take an optional renderSizeHint, which <strong>allows users to ask for a particular render quantum size when an integer is passed</strong>, to use the default of 128 frames if...
- [Re: [blink-dev] Re: Intent to Ship: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17081.html) *(mail-archive.com)*
  > LGTM1 On Thursday, July 23, 2026 ...ebAudio/web-audio-api/blob/main/explainer/user-selectable-render-size.md&gt; *Summary* <strong>Adds an optional renderSizeHint to AudioContext and OfflineAudioContext</strong>....
- [Intent to Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/j7Wf7bA_qOY/m/aWxKroUMAQAJ) *(groups.google.com)*
  > SummaryAudioContext and OfflineAudioContext now take an optional renderSizeHint, which <strong>allows users to ask for a particular render quantum size when an integer is passed</strong>, to use the default of 128 frames if nothing or &quot;default&q...
- [[blink-dev] Intent to Ship: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17051.html) *(mail-archive.com)*
  > Specification https://webaudio...m/WebAudio/web-audio-api/blob/main/explainer/user-selectable-render-size.md Summary <strong>Adds an optional renderSizeHint to AudioContext and OfflineAudioContext</strong>....
- [[blink-dev] Intent to Extend Experiment: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg16317.html) *(mail-archive.com)*
  > Specification https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize Design docs No information provided https://github.com/WebAudio/web-audio-api/blob/main/explainer/user-selectable-render-size.md Summary AudioContext and O...
- [[blink-dev] Re: Intent to Ship: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17066.html) *(mail-archive.com)*
  > &gt; This allows developers to customize the WebAudio render quantum size by &gt; <strong>passing a specific integer, use the default of 128 frames by omitting the &gt; hint or passing &quot;default&quot;, or request that the User-Agent select an opt...
- [[blink-dev] Intent to Prototype: WebAudio: Configurable render quantum](https://www.mail-archive.com/blink-dev@chromium.org/msg14335.html) *(mail-archive.com)*
  > Explainer None Specification https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize Summary AudioContext and OfflineAudioContext now take an optional renderSizeHint, which <strong>allows users to ask for a particular render ...
- [Re: [blink-dev] Re: Intent to Ship: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17085.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; *Chromium Trial Name* &gt;&gt; WebAudioConfigurableRenderQuantum &gt;&gt; &gt;&gt; *Origin Trial documentation link* &gt;&gt; &gt;&gt; https://webaudio.github.io/web-audio-api/#dom-audiocontextoptions-rendersizehint &gt;&gt; &gt;&gt...
- [Re: [blink-dev] Re: Intent to Extend Experiment: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg16828.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; *Chromium Trial Name* &gt;&gt;&gt; WebAudioConfigurableRenderQuantum &gt;&gt;&gt; &gt;&gt;&gt; *Origin Trial documentation link* &gt;&gt;&gt; &gt;&gt;&gt; https://webaudio.github.io/web-audio-api/#dom-audiocontextoptions-ren...
- [Re: [blink-dev] Intent to Experiment: WebAudio: Configurable render quantum](https://www.mail-archive.com/blink-dev@chromium.org/msg15649.html) *(mail-archive.com)*
  > Low. The change is to ship a new API. *Goals for experimentation* Validate performance improvement gained by matching render quantum size to software buffer sizes when using a numeric renderSizeHint.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Extend Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/MlLqosTB0cQ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5078190552907776`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5078190552907776</strong>?gate=5366651127201792
- [Intent to Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/j7Wf7bA_qOY) *(groups.google.com · 2026-01-21T00:00:00)* *(Cites: `https://chromestatus.com/feature/5078190552907776`)*
  > Link to entry on the Chrome Platform Statushttps://<strong>chromestatus.com/feature/5078190552907776</strong>?gate=5140327991869440
- [WebAudio/web-audio-api · Discussions](https://github.com/WebAudio/web-audio-api/discussions) *(github.com)* *(Cites: `https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize`)*
  > <strong>webaudio.github.io/web-audio-api</strong> · 2 · You must be logged in to vote · 💬 · nitzanrh started · Jan 27, 2025 in General · 3 · 1 · You must be logged in to vote · 🙏 · Adazus asked · Dec 31, 2024 in Q&amp;A · Answered · 2 · 1...
- [webaudio package - github.com/mafredri/cdp/protocol/webaudio - Go Packages](https://pkg.go.dev/github.com/mafredri/cdp/protocol/webaudio) *(pkg.go.dev · 2024-09-01T00:00:00)* *(Cites: `https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize`)*
  > Package webaudio implements the WebAudio domain. This domain allows inspection of Web Audio API. https://<strong>webaudio.github.io/web-audio-api</strong>/
- [Web Audio API 1.1](https://www.w3.org/TR/webaudio-1.1) *(w3.org)* *(Cites: `https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize`)*
  > https://<strong>webaudio.github.io/web-audio-api</strong>/ History: https://www.w3.org/standards/history/webaudio-1.1/ Feedback: public-audio@w3.org with subject line “[webaudio] … message topic …” (archives) GitHub · Test Suite: https://gi...
- [web-audio-api/webaudio-CR-transition.md at main · WebAudio/web-audio-api](https://github.com/WebAudio/web-audio-api/blob/main/webaudio-CR-transition.md) *(github.com)* *(Cites: `https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize`)*
  > The Web Audio API v1.0, developed by the W3C Audio WG - WebAudio/web-audio-api
- [WebAudio/web-audio-api Ideas · Discussions](https://github.com/WebAudio/web-audio-api/discussions/categories/ideas) *(github.com)* *(Cites: `https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize`)*
  > <strong>webaudio.github.io/web-audio-api</strong> · Share ideas for new features ·
- [Web Audio API Series 1 — Introduction | by _haochuan | HackerNoon.com | Medium](https://medium.com/hackernoon/web-audio-api-series-1-introduction-d073fca62e1d) *(medium.com · 2018-06-11T22:55:15)* *(Cites: `https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize`)*
  > The goal of this API is to include capabilities found in modern game audio engines and some of the mixing, processing, and filtering tasks that are found in modern desktop audio production applications. What follows is a gentle introduction...
- [The Web Audio API](https://padenot.github.io/web-audio-scotlandjs15) *(padenot.github.io)* *(Cites: `https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize`)*
  > [...] <strong>A high-level JavaScript API for processing and synthesizing audio in web applications</strong>. The primary paradigm is of an audio routing graph, where a number of AudioNode objects are connected together to define the overal...
- [Chrome DevTools Protocol - WebAudio domain](https://chromedevtools.github.io/devtools-protocol/tot/WebAudio) *(chromedevtools.github.io)* *(Cites: `https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize`)*
  > This domain allows inspection of Web Audio API. https://<strong>webaudio.github.io/web-audio-api</strong>/ Experimental

## 📚 Platform Documentation & Specifications

- [WebAudio/web-audio-api · Discussions](https://github.com/WebAudio/web-audio-api/discussions) *(github.com)*
- [Web Audio API 1.1](https://www.w3.org/TR/webaudio-1.1) *(w3.org)*
- [web-audio-api/webaudio-CR-transition.md at main · WebAudio/web-audio-api](https://github.com/WebAudio/web-audio-api/blob/main/webaudio-CR-transition.md) *(github.com)*
- [WebAudio/web-audio-api Ideas · Discussions](https://github.com/WebAudio/web-audio-api/discussions/categories/ideas) *(github.com)*
- [Allow user-selectable render quantum size · Issue #13 · WebAudio/web-audio-api-v2](https://github.com/WebAudio/web-audio-api-v2/issues/13) *(github.com)*
- [Allow user-selectable render quantum size · Issue #2450 · WebAudio/web-audio-api](https://github.com/WebAudio/web-audio-api/issues/2450) *(github.com)*
- [Web Audio API: User-Selectable Render Quantum Size · Issue #895 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/895) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 26 result(s) found across 6 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/5078190552907776" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"webaudio.github.io/web-audio-api" -site:webaudio.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"renderSizeHint" OR "renderQuantumSize" "AudioContext" (github OR stackoverflow OR codepen)` — *Finds practical code implementations, WebIDL usage, and constructor snippet examples passing custom block sizes to AudioContext.* (8 returned)
  - `"configurable render quantum" OR "renderSizeHint" "Web Audio API" (blog OR guide OR tutorial)` — *Surfaces developer tutorials, technical writeups, and guides explaining how and why to customize the Web Audio processing block size.* (8 returned)
  - `("renderSizeHint" OR "configurable render quantum") ("Intent to Ship" OR "Chrome Status" OR "WebKit" OR "Firefox")` — *Discovers browser engine intent-to-ship threads, implementation status tracking across vendors, and official standard updates.* (8 returned)
  - `"Web Audio" ("render quantum" OR "renderSizeHint") ("AudioWorklet" OR "latency" OR "DSP") (site:news.ycombinator.com OR site:reddit.com OR site:github.com/WebAudio)` — *Identifies audio DSP engineer discussions, performance benchmarks, and feedback regarding the departure from the fixed 128-frame quantum limit.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 10 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5078190552907776)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5078190552907776)
- [Specification](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize)
- [Chromium Tracking Bug](https://crbug.com/40637820)
