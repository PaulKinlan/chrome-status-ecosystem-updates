# WebAudio: Configurable render quantum

> **Report Week:** 2026-W43 | **Milestone:** Chrome 153 | **Category:** Enabled by default

## Overview

Adds an optional renderSizeHint to AudioContext and OfflineAudioContext. This allows developers to customize the WebAudio render quantum size by passing a specific integer, use the default of 128 frames by omitting the hint or passing "default", or request that the User-Agent select an optimal size by specifying "hardware".

### Motivation

It is difficult and complex to write a web app when the audio processing block size does not match with the WebAudio render quantum size (128 sample-frames). Removing this restriction and making it customizable on AudioContext would enable easier development and more efficient audio processing.

## Ecosystem Status

- **Momentum:** Moderate (footprint 320 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Configurable render quantum in WebAudio introduces the \`renderSizeHint\` option to AudioContext and OfflineAudioContext, allowing engines to diverge from the historically rigid 128-sample-frame processing block. Standardized as part of the Web Audio API 1.1 specification and enabled by default in Chromium, it addresses a longstanding architectural bottleneck for browser-based digital audio workstations (DAWs), DSP libraries, and low-latency communication tools. While developer interest is high and specification roots stem directly from working group consensus, formal multi-engine implementation remains uneven across Safari and Firefox.

### Recommendations
- Actionable Advice: Adopt \`renderSizeHint\` as a progressive enhancement when instantiating \`AudioContext\`, always inspecting \`context.renderQuantumSize\` to verify the negotiated block size while gracefully falling back to handling 128-sample chunks in other browsers. Teams targeting low-latency synthesis should thoroughly profile CPU overhead and audio glitch rates across lower-end devices before enforcing small buffer sizes like 64 frames.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [WebAudio Configurable Render Quantum](https://github.com/WebKit/standards-positions/issues/662) [open]
- **Mozilla:** [WebAudio Configurable Render Quantum](https://github.com/mozilla/standards-positions/issues/1407) [open]

## Web-features Group

*group-level data: web-features [`web-audio`](https://webstatus.dev/features/web-audio), shared with 53 other ChromeStatus features*

- Share of tests passing in the web-features group `web-audio` on [wpt.fyi](https://wpt.fyi/results?q=feature:web-audio) (via webstatus.dev) — stable: Chrome 93.6% · Edge 93.2% · Firefox 72.1% · Safari 84.9%; experimental: Chrome 93.6% · Edge 94% · Firefox 72.1% · Safari 90.4%
- **Chrome usage:** 0.054% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/150))

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/n4PifuLlrwc) *(groups.google.com)*
  > Historically, the Web Audio API enforced a strict, non-negotiable render quantum size of \*\*128 sample-frames\*\* per processing block This feature introduces an optional \`renderSizeHint\` property to both \`AudioContext\` and \`OfflineAudioContext\`
- [stackoverflow.com](https://agents.stackoverflow.com/questions/ca2d347e-70cd-4f6d-8b7c-ec5029538bdc?tag=web-audio-api&sort=hot&page=1) *(agents.stackoverflow.com)*
  > Historically, the Web Audio API enforced a strict, non-negotiable render quantum size of \*\*128 sample-frames\*\* per processing block
- [Intent to Extend Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/MlLqosTB0cQ) *(groups.google.com)*
  > Intent to Extend Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: WebAud...
- [Intent to Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/j7Wf7bA_qOY) *(groups.google.com · 2026-01-21T00:00:00)*
  > Intent to Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: WebAudio: Configurab...
- [\[blink-dev\] Intent to Extend Experiment: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17016.html) *(mail-archive.com)*
  > Debuggability It may be worth exposing the render quantum size value in the DevTools WebAudio pane, similar to sample rate. Will this feature be supported on all six Blink platforms (Windows, Mac, Linux, ChromeOS, Android, and Android WebView)? Yes A...
- [Re: \[blink-dev\] Re: Intent to Ship: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17081.html) *(mail-archive.com)*
  > /Gecko/: No signal (https://github.com/mozilla/standards-positions/issues/1407 &lt;https://github.com/mozilla/standards-positions/issues/1407&gt;) A Firefox developer wrote the specification change (https://github.com/WebAudio/web-audio-api/pull/2469...
- [\[blink-dev\] Intent to Ship: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17051.html) *(mail-archive.com)*
  > Activation There is an ongoing privacy discussion about how to mitigate fingerprinting concerns around the &quot;hardware&quot; hint (https://github.com/WebAudio/web-audio-api/issues/2659). The &quot;hardware&quot; hint as implemented in Chromium cur...
- [\[blink-dev\] Intent to Prototype: WebAudio: Configurable render quantum](https://www.mail-archive.com/blink-dev@chromium.org/msg14335.html) *(mail-archive.com)*
  > Explainer None Specification https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize Summary AudioContext and OfflineAudioContext now take an optional renderSizeHint, which &lt;strong&gt;allows users to ask for a particular render ...
- [\[blink-dev\] Re: Intent to Extend Experiment: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17029.html) *(mail-archive.com)*
  > Team member out of &gt;&gt; office time means that we will not be able to resolve this before M151, and &gt;&gt; we would like the trial extended to coincide with the new shipping date if &gt;&gt; possible to continue gathering feedback. &gt;&gt; &gt...
- [Microsoft Edge 148 web platform release notes (May 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/148) *(learn.microsoft.com · 2026-05-07T00:00:00)*
  > By default, WebAudio processes audio in fixed blocks of 128 sample-frames (a render quantum). When your app&#x27;s audio processing block size doesn&#x27;t match this default, development becomes complex and processing becomes less efficient. Use the...
- [Re: \[blink-dev\] Re: Intent to Extend Experiment: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg16828.html) *(mail-archive.com)*
  > Team member out of &gt;&gt;&gt; office time means that we will not be able to resolve this before M151, and &gt;&gt;&gt; we would like the trial extended to coincide with the new shipping date if &gt;&gt;&gt; possible to continue gathering feedback. ...
- [Intent to Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/j7Wf7bA_qOY/m/aWxKroUMAQAJ) *(groups.google.com)*
  > SummaryAudioContext and OfflineAudioContext now &lt;strong&gt;take an optional renderSizeHint, which allows users to ask for a particular render quantum size when an integer is passed&lt;/strong&gt;, to use the default of 128 frames if nothing or &quot;default&q...
- [\[blink-dev\] Re: Intent to Ship: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17066.html) *(mail-archive.com)*
  > &gt; This allows developers to customize the WebAudio render quantum size by &gt; &lt;strong&gt;passing a specific integer, use the default of 128 frames by omitting the &gt; hint or passing &quot;default&quot;, or request that the User-Agent select an opt...
- [WebAudio: Configurable render quantum](https://chromestatus.com/feature/5078190552907776?gate=5207133255368704) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Re: \[blink-dev\] Re: Intent to Ship: WebAudio: Configurable render quantum](http://www.mail-archive.com/blink-dev@chromium.org/msg17085.html) *(mail-archive.com)*
  > &gt;&gt; This allows developers to customize the WebAudio render quantum size by &gt;&gt; passing a specific integer, use the default of 128 frames by &lt;strong&gt;omitting the &gt;&gt; hint or passing &quot;default&quot;,&lt;/strong&gt; or request that the Use...
- [Chrome 153 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/153) *(developer.chrome.com · 2026-09-08T00:00:00)*
  > &lt;strong&gt;Adds an optional renderSizeHint to AudioContext and OfflineAudioContext&lt;/strong&gt;. This lets you customize the WebAudio render quantum size by passing a specific integer, use the default of 128 frames by omitting the hint or passing &quot;defa...
- [Microsoft Edge 153 web platform release notes (Sep. 10, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/153) *(learn.microsoft.com · 2026-09-10T00:00:00)*
  > The AudioContext and OfflineAudioContext constructors now support the optional renderSizeHint setting. This setting controls the render quantum size, which is the number of audio frames that the browser processes at a time.
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com · 2026-09-08T00:00:00)*
  > &lt;strong&gt;Adds an optional renderSizeHint to AudioContext and OfflineAudioContext&lt;/strong&gt;. This allows developers to customize the WebAudio render quantum size by passing a specific integer, use the default of 128 frames by omitting the hint or passin...
- [I measured the differences in latency and CPU usage due to Web Audio processing units, since renderSizeHint was added in Chrome 153 \| DevelopersIO](https://dev.classmethod.jp/en/articles/chrome-153-webaudio-render-size-hint-latency) *(dev.classmethod.jp)*
  > I measured the differences in latency and CPU usage due to Web Audio processing units, since renderSizeHint was added in Chrome 153 \| DevelopersIO produced by Classmethod Original English Contents I measured the differences in latency and CPU usage d...
- [Chrome Platform Status](https://chromestatus.com/feature/5078190552907776?gate=5074255557165056) *(chromestatus.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Extend Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/MlLqosTB0cQ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5078190552907776`)*
  > Intent to Extend Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experime...
- [Intent to Experiment: WebAudio: Configurable render quantum](https://groups.google.com/a/chromium.org/g/blink-dev/c/j7Wf7bA_qOY) *(groups.google.com · 2026-01-21T00:00:00)* *(Cites: `https://chromestatus.com/feature/5078190552907776`)*
  > Intent to Experiment: WebAudio: Configurable render quantum Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: WebAudio: ...

## 📚 Platform Documentation & Specifications

- [Web Audio API 1.1](https://www.w3.org/TR/webaudio-1.1) *(w3.org)*
- [WebAudio Configurable Render Quantum · Issue #662 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/662) *(github.com)*
- [github.com](https://github.com/WebAudio/web-audio-api/issues/2659) *(github.com)*
- [TPAC 2025: Audio WG update](https://www.w3.org/2025/11/TPAC/demo-audio-wg-update.html) *(w3.org)*
- [Allow user-selectable render quantum size · Issue #2450 · WebAudio/web-audio-api](https://github.com/WebAudio/web-audio-api/issues/2450) *(github.com)*
- [Allow user-selectable render quantum size · Issue #13 · WebAudio/web-audio-api-v2](https://github.com/WebAudio/web-audio-api-v2/issues/13) *(github.com)*
- [Specify render quantum size range by mjwilson-google · Pull Request #2667 · WebAudio/web-audio-api](https://github.com/WebAudio/web-audio-api/pull/2667) *(github.com)*
- [OfflineAudioContext Incremental Rendering by gabrielsanbrito · Pull Request #2675 · WebAudio/web-audio-api](https://github.com/WebAudio/web-audio-api/pull/2675) *(github.com)*
- [Web Audio API: User-Selectable Render Quantum Size · Issue #895 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/895) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 12 planned queries — **25 verified relevant**
  - `"chromestatus.com/feature/5078190552907776" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"webaudio.github.io/web-audio-api" -site:webaudio.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebAudio: Configurable render quantum" API` — *Core feature API query* (8 returned)
  - `"WebAudio: Configurable render quantum" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (2 returned)
  - `"user-agent" OR "sample-frames" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebAudio: Configurable render quantum" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebAudio: Configurable render quantum" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"AudioContext" "renderSizeHint" OR "render quantum size" web audio API` — *Finds technical documentation, WebIDL definitions, and API syntax usage for configuring the WebAudio render quantum.* (8 returned)
  - `how to customize WebAudio render quantum size AudioContext tutorial` — *Searches for practical developer guides, tutorials, and community blog posts explaining how to use renderSizeHint.* (8 returned)
  - `"WebAudio" "render quantum" latency performance community discussion` — *Discovers developer sentiment, community discussions, and feedback regarding the motivation and performance impact of customizable render quantum sizes.* (8 returned)
  - `AudioContext renderSizeHint hardware default 128 frames example code` — *Finds real-world JavaScript code examples showing how to pass integers, 'default', or 'hardware' to AudioContext and OfflineAudioContext.* (8 returned)
  - `"render quantum size" WebAudio API announcement release` — *Tracks browser feature implementation announcements, release notes, and ecosystem adoption status for the configurable render quantum.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 5 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "web-audio", shared with 53 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "web-audio": Chrome 93.6% passing (stable)*
- **Sources cited by the AI synthesis:** 5 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5078190552907776)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5078190552907776)
- [Specification](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-renderquantumsize)
- [Chromium Tracking Bug](https://crbug.com/40637820)
