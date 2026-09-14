# WebAudio: Configurable render quantum

> **Report Week:** 2026-W38 | **Milestone:** Chrome 153 | **Category:** Enabled by default

## Overview

Adds an optional renderSizeHint to AudioContext and OfflineAudioContext. This allows developers to customize the WebAudio render quantum size by passing a specific integer, use the default of 128 frames by omitting the hint or passing "default", or request that the User-Agent select an optimal size by specifying "hardware".

### Motivation

It is difficult and complex to write a web app when the audio processing block size does not match with the WebAudio render quantum size (128 sample-frames). Removing this restriction and making it customizable on AudioContext would enable easier development and more efficient audio processing.

## Ecosystem Status

- **Momentum:** High (340 points)
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

- [Intent to Extend Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/MlLqosTB0cQ) *(groups.google.com)*
  > Intent to Extend Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: WebAud...
- [Intent to Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/j7Wf7bA_qOY) *(groups.google.com · 2026-01-21T00:00:00)*
  > Intent to Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: WebAudio: Configurab...
- [webaudio package - github.com/mafredri/cdp/protocol/webaudio - Go Packages](https://pkg.go.dev/github.com/mafredri/cdp/protocol/webaudio) *(pkg.go.dev · 2024-09-01T00:00:00)*
  > webaudio package - github.com/mafredri/cdp/protocol/webaudio - Go Packages webaudio package Version: v0.35.0 Opens a new window with list of versions in this module. Latest Latest This package is not in the latest version of its module. Go to latest ...
- [Web Audio API (websites/webaudio\_github\_io\_web-audio-api) \| Context7](https://context7.com/websites/webaudio_github_io_web-audio-api) *(context7.com)*
  > Web Audio API (websites/webaudio_github_io_web-audio-api) | Context7 Add Docs Web Audio API https://webaudio.github.io/web-audio-api Admin Web Audio API is a high-level JavaScript API for processing and synthesizing audio in web ... Tokens : 62,579 S...
- [The Web Audio API](https://padenot.github.io/web-audio-scotlandjs15) *(padenot.github.io)*
  > --> --> Web Audio The Web Audio API Paul Adenot, @padenot && padenot@mozilla.com This slide deck is using the shower system - roll over the previews to see the notes and click any slide to go into presentation mode. Then use keys to navigate. Go full...
- [Web Audio API Series 1 — Introduction \| by \_haochuan \| HackerNoon.com \| Medium](https://medium.com/hackernoon/web-audio-api-series-1-introduction-d073fca62e1d) *(medium.com · 2018-06-11T22:55:15)*
  > The goal of this API is to include capabilities found in modern game audio engines and some of the mixing, processing, and filtering tasks that are found in modern desktop audio production applications. What follows is a gentle introduction to using ...
- [\[blink-dev\] Intent to Extend Experiment: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg16317.html) *(mail-archive.com)*
  > Name WebAudio Configurable Render Quantum Goals for experimentation <strong>Validate performance improvement gained by matching render quantum size to software buffer sizes when using a numeric renderSizeHint</strong>. Verify actual audio processing ...
- [\[blink-dev\] Intent to Ship: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17051.html) *(mail-archive.com)*
  > Name WebAudio Configurable Render Quantum Goals for experimentation <strong>Validate performance improvement gained by matching render quantum size to software buffer sizes when using a numeric renderSizeHint</strong>. Verify actual audio processing ...
- [Intent to Prototype: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/n4PifuLlrwc) *(groups.google.com)*
  > It is difficult and complex to write a web app when the audio processing block size does not match with the WebAudio render quantum size (128 sample-frames). Removing this restriction and making it customizable on AudioContext would enable easier dev...
- [Re: \[blink-dev\] Re: Intent to Ship: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17081.html) *(mail-archive.com)*
  > Name* WebAudio Configurable Render Quantum *Goals for experimentation* <strong>Validate performance improvement gained by matching render quantum size to software buffer sizes when using a numeric renderSizeHint</strong>. Verify actual audio processi...
- [\[blink-dev\] Re: Intent to Extend Experiment: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17037.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; *Activation* &gt;&gt;&gt; There is an ongoing privacy discussion about how to mitigate &gt;&gt;&gt; fingerprinting concerns around the &quot;hardware&quot; hint ( &gt;&gt;&gt; https://github.com/WebAudio/web-audio-api/issues...
- [WebAudio: Configurable render quantum](https://chromestatus.com/feature/5078190552907776?gate=5207133255368704) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Finding + Fixing a AudioWorkletProcessor Performance Pitfall - Casey Primozic's Homepage](https://cprimozic.net/blog/webaudio-audioworklet-optimization) *(cprimozic.net · 2020-11-12T00:00:00)*
  > This consists of allocating (if necessary) and zeroing-out buffers, validating the arguments passed to the user-defined process() function inside the processor, and interfacing with the rest of the WebAudio graph. It also includes work involved with ...
- [Red Blob Games: Experiments with WebAudio](https://www.redblobgames.com/x/1618-webaudio) *(redblobgames.com · 2016-05-03T00:00:00)*
  > We want to vary the gain (volume) with an oscillator. <strong>Set the output to (k1 + k2*sin(freq2*t)) * sin(freq1).</strong> WebAudio doesn’t allow that directly but we can compose:
- [Navigator userAgent Property](https://www.w3schools.com/jsref/prop_nav_useragent.asp) *(w3schools.com)*
  > cssText getPropertyPriority() getPropertyValue() item() length parentRule removeProperty() setProperty() JS Conversion · ❮ Previous ❮ Navigator Object Reference Next ❯ ... More &quot;Try it Yourself&quot; examples below. ... The userAgent property re...
- [\[blink-dev\] Intent to Extend Experiment: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17016.html) *(mail-archive.com)*
  > Adoption plan We are communication with partners, and also in communication with Mozilla via the Audio Working Group. Non-OSS dependencies Does the feature depend on any code or APIs outside the Chromium open source repository and its open-source dep...
- [\[blink-dev\] Re: Intent to Extend Experiment: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17029.html) *(mail-archive.com)*
  > Team member out of &gt;&gt; office time means that we will not be able to resolve this before M151, and &gt;&gt; we would like the trial extended to coincide with the new shipping date if &gt;&gt; possible to continue gathering feedback. &gt;&gt; &gt...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22intent+to+ship%22) *(groups.google.com)*
  > optional renderSizeHint to AudioContext and OfflineAudioContext. This <strong>allows developers to customize the WebAudio render quantum size by passing a specific integer, use the defaultunread, Intent to Ship</strong>: WebAudio: Configurable render...
- [Microsoft Edge 148 web platform release notes (May 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/148) *(learn.microsoft.com · 2026-05-07T00:00:00)*
  > <strong>By default, WebAudio processes audio in fixed blocks of 128 sample-frames (a render quantum).</strong> When your app&#x27;s audio processing block size doesn&#x27;t match this default, development becomes complex and processing becomes less e...
- [OfflineAudioContextOptions dictionary - WebIDLpedia](https://dontcallmedom.github.io/webidlpedia/names/OfflineAudioContextOptions.html) *(dontcallmedom.github.io)*
  > dictionary OfflineAudioContextOptions { <strong>unsigned long numberOfChannels = 1; required unsigned long length; required float sampleRate; (AudioContextRenderSizeCategory or unsigned long) renderSizeHint = &quot;default&quot;;</strong> };
- [\[blink-dev\] Intent to Prototype: WebAudio: Configurable render quantum](https://www.mail-archive.com/blink-dev@chromium.org/msg14335.html) *(mail-archive.com)*
  > Explainer None Specification https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize Summary AudioContext and OfflineAudioContext now take an optional renderSizeHint, which <strong>allows users to ask for a particular render ...
- [Re: \[blink-dev\] Intent to Experiment: WebAudio: Configurable render quantum](https://www.mail-archive.com/blink-dev@chromium.org/msg15649.html) *(mail-archive.com)*
  > *WebView application risks* Does this intent deprecate or change behavior of existing APIs, such that it has potentially high risk for Android WebView-based applications? Low. The change is to ship a new API. *Goals for experimentation* Validate perf...
- [Re: \[blink-dev\] Intent to Extend Experiment: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg16356.html) *(mail-archive.com)*
  > /Daniel On 2026-04-14 01:22, ... AudioContext and OfflineAudioContext now take an optional renderSizeHint, which <strong>allows users to ask for a particular render quantum size when an integer is passed</strong>, to use the default of 128 frames if ...
- [Chrome 145 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/145?hl=en) *(developer.chrome.com)*
  > AudioContext and OfflineAudioContext now take an optional renderSizeHint, which <strong>allows users to ask for a particular render quantum size when an integer is passed</strong>, to use the default of 128 frames if nothing or default is passed, or ...
- [Chrome 153 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-153-beta) *(developer.chrome.com · 2026-08-20T00:00:00)*
  > <strong>Adds an optional renderSizeHint to AudioContext and OfflineAudioContext</strong>.
- [Audio worklet design pattern \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/audio-worklet-design-pattern) *(developer.chrome.com)*
  > In the world of WebAudio, the timing budget for the stable audio stream is quite demanding: it is only <strong>3ms at the sample rate of 44.1Khz</strong>. Even a slight hiccup in the audio processing code can cause glitches. The developer must optimi...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Extend Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/MlLqosTB0cQ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5078190552907776`)*
  > Intent to Extend Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experime...
- [Intent to Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/j7Wf7bA_qOY) *(groups.google.com · 2026-01-21T00:00:00)* *(Cites: `https://chromestatus.com/feature/5078190552907776`)*
  > Intent to Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: WebAudio: ...
- [WebAudio/web-audio-api · Discussions](https://github.com/WebAudio/web-audio-api/discussions) *(github.com)* *(Cites: `https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize`)*
  > WebAudio/web-audio-api · Discussions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signed out ...
- [webaudio package - github.com/mafredri/cdp/protocol/webaudio - Go Packages](https://pkg.go.dev/github.com/mafredri/cdp/protocol/webaudio) *(pkg.go.dev · 2024-09-01T00:00:00)* *(Cites: `https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize`)*
  > webaudio package - github.com/mafredri/cdp/protocol/webaudio - Go Packages webaudio package Version: v0.35.0 Opens a new window with list of versions in this module. Latest Latest This package is not in the latest version of its module. Go ...
- [Web Audio API 1.1](https://www.w3.org/TR/webaudio-1.1) *(w3.org)* *(Cites: `https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize`)*
  > https://<strong>webaudio.github.io/web-audio-api</strong>/ History: https://www.w3.org/standards/history/webaudio-1.1/ Feedback: public-audio@w3.org with subject line “[webaudio] … message topic …” (archives) GitHub · Test Suite: https://gi...
- [Web Audio API (websites/webaudio\_github\_io\_web-audio-api) \| Context7](https://context7.com/websites/webaudio_github_io_web-audio-api) *(context7.com)* *(Cites: `https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize`)*
  > Web Audio API (websites/webaudio_github_io_web-audio-api) | Context7 Add Docs Web Audio API https://webaudio.github.io/web-audio-api Admin Web Audio API is a high-level JavaScript API for processing and synthesizing audio in web ... Tokens ...
- [web-audio-api/webaudio-CR-transition.md at main · WebAudio/web-audio-api](https://github.com/WebAudio/web-audio-api/blob/main/webaudio-CR-transition.md) *(github.com)* *(Cites: `https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize`)*
  > web-audio-api/webaudio-CR-transition.md at main · WebAudio/web-audio-api · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to r...
- [The Web Audio API](https://padenot.github.io/web-audio-scotlandjs15) *(padenot.github.io)* *(Cites: `https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize`)*
  > --> --> Web Audio The Web Audio API Paul Adenot, @padenot && padenot@mozilla.com This slide deck is using the shower system - roll over the previews to see the notes and click any slide to go into presentation mode. Then use keys to navigat...
- [Web Audio API Series 1 — Introduction \| by \_haochuan \| HackerNoon.com \| Medium](https://medium.com/hackernoon/web-audio-api-series-1-introduction-d073fca62e1d) *(medium.com · 2018-06-11T22:55:15)* *(Cites: `https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize`)*
  > The goal of this API is to include capabilities found in modern game audio engines and some of the mixing, processing, and filtering tasks that are found in modern desktop audio production applications. What follows is a gentle introduction...
- [WebAudio/web-audio-api Ideas · Discussions](https://github.com/WebAudio/web-audio-api/discussions/categories/ideas) *(github.com)* *(Cites: `https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize`)*
  > <strong>webaudio.github.io/web-audio-api</strong> · Share ideas for new features ·

## 📚 Platform Documentation & Specifications

- [WebAudio/web-audio-api · Discussions](https://github.com/WebAudio/web-audio-api/discussions) *(github.com)*
- [Web Audio API 1.1](https://www.w3.org/TR/webaudio-1.1) *(w3.org)*
- [web-audio-api/webaudio-CR-transition.md at main · WebAudio/web-audio-api](https://github.com/WebAudio/web-audio-api/blob/main/webaudio-CR-transition.md) *(github.com)*
- [WebAudio/web-audio-api Ideas · Discussions](https://github.com/WebAudio/web-audio-api/discussions/categories/ideas) *(github.com)*
- [Allow user-selectable render quantum size · Issue #13 · WebAudio/web-audio-api-v2](https://github.com/WebAudio/web-audio-api-v2/issues/13) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 61 result(s) found across 12 planned queries — **31 verified relevant**
  - `"chromestatus.com/feature/5078190552907776" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"webaudio.github.io/web-audio-api" -site:webaudio.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebAudio: Configurable render quantum" API` — *Core feature API query* (8 returned)
  - `"WebAudio: Configurable render quantum" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (3 returned)
  - `"user-agent" OR "sample-frames" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebAudio: Configurable render quantum" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebAudio: Configurable render quantum" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"renderSizeHint" ("AudioContext" OR "OfflineAudioContext") example` — *Searches for real-world JavaScript code snippets and implementations constructing an AudioContext with the renderSizeHint option.* (8 returned)
  - `"renderSizeHint" OR "renderQuantumSize" WebAudio (tutorial OR guide OR "block size")` — *Finds developer guides, blog articles, and tutorials explaining how to customize the WebAudio render quantum size and handle custom frame processing.* (3 returned)
  - `"renderSizeHint" ("intent to ship" OR "intent to prototype" OR "Chrome")` — *Tracks browser vendor announcements, Chromium intents, and platform release notes documenting feature rollout and support.* (8 returned)
  - `site:github.com/WebAudio/web-audio-api "renderSizeHint" OR "renderQuantumSize"` — *Surfaces specification discussions, edge cases, audio engineer feedback, and design consensus directly on the W3C WebAudio repository.* (0 returned)
  - `"renderSizeHint" (WebAssembly OR WASM OR DSP OR latency) WebAudio` — *Discovers practical articles and performance deep dives on matching DSP buffer sizes with WebAudio quantum sizes for low-latency WASM audio engines.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 351 item(s) inspected

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
