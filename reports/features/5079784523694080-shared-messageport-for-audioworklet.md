# Shared MessagePort for AudioWorklet

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 | **Category:** Enabled by default

## Overview

Exposes a shared MessagePort on AudioWorklet and AudioWorkletGlobalScope. This lets web applications communicate directly between the main thread AudioWorklet and the AudioWorkletGlobalScope without creating a bootstrap AudioWorkletProcessor only for message passing.

### Motivation

The Web Audio specification defines a shared MessagePort on AudioWorklet and AudioWorkletGlobalScope. This lets web applications communicate directly between the main thread and the AudioWorkletGlobalScope without creating a bootstrap AudioWorkletProcessor or AudioWorkletNode only for message passing.  Without this capability, developers have to keep workaround code that instantiates dummy processors solely to transfer initialization data or control messages into the worklet global scope. This adds code complexity and runtime overhead, and prevents cleanup of compatibility hacks in upstream projects.  This change aligns Chromium with the current Web Audio specification and existing interoperable behavior. It also restores compatibility for real-world code that expects audioContext.audioWorklet.port to exist, including Emscripten-generated applications and demos such as the MOD player discussed in the linked issue.  Relevant specification and ecosystem discussion: - https://github.com/WebAudio/web-audio-api/issues/2456 - https://github.com/WebAudio/web-audio-api/pull/2507 - https://github.com/emscripten-core/emscripten/pull/25354

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 205 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Shared MessagePort for AudioWorklet closes a long-standing ergonomic gap in the Web Audio API by establishing direct bidirectional communication between the main thread and the worklet global execution context via audioContext.audioWorklet.port and AudioWorkletGlobalScope.port. Having originally landed in Firefox 138 and now enabled by default in Chrome 159, the feature eliminates the necessity of creating dummy bootstrap processors solely for passing initialization data, WebAssembly binaries, or SharedArrayBuffer instances. The ecosystem consensus is firmly positive as browser engines align with the formal Web Audio specification.

### Recommendations
- Actionable Advice: Teams building Web Audio applications should begin adopting the port-based setup for cleaner startup choreography, but must feature-detect 'port' in audioContext.audioWorklet and maintain a fallback dummy-processor bootstrap for Safari until WebKit's implementation ships.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @MaheshBharadwaj: "CC: @hoch @jyavenard  @youennf..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Shared MessagePort for AudioWorklet](https://github.com/WebKit/standards-positions/issues/739) [open]

## Web-features Group

*group-level data: web-features [`audio-worklet`](https://webstatus.dev/features/audio-worklet), shared with 3 other ChromeStatus features*

- Share of tests passing in the web-features group `audio-worklet` on [wpt.fyi](https://wpt.fyi/results?q=feature:audio-worklet) (via webstatus.dev) — stable: Chrome 90.2% · Edge 90.2% · Firefox 73.2% · Safari 78%; experimental: Chrome 97.6% · Edge 95.1% · Firefox 73.2% · Safari 85.4%
- **Chrome usage:** 0.0011% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/152))

## 📰 Ecosystem Blogs & Articles

- [google.com](https://groups.google.com/a/chromium.org/g/blink-dev/c/2aAm_se1VXI) *(groups.google.com)*
  > Developers who needed to pass startup configurations, WebAssembly modules, or \`SharedArrayBuffer\` references to the worklet scope had to build a temporary "bootstrap" or "dummy" processor strictly for initial message passing \*\*\`AudioWorklet\`\*\* on the...
- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5079784523694080?gate=5773264841474048) *(img544-dot-cr-status.appspot.com)*
  > \*\*Source:\*\* \*Chrome Platform Status & Chrome 159 Release Notes\*
- [chromestatus.com](https://chromestatus.com/release-notes/159) *(chromestatus.com)*
  > \*\*Source:\*\* \*Chrome Platform Status & Chrome 159 Release Notes\* \*\*Summary:\*\* Chromium added and enabled by default the \*\*"Shared MessagePort for AudioWorklet"\*\* feature (tracked in Chromium Bug #446920095)
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Summary:\*\* Chromium added and enabled by default the \*\*"Shared MessagePort for AudioWorklet"\*\* feature (tracked in Chromium Bug #446920095)
- [lavoscore.org](https://mdn-20220731.lavoscore.org) *(mdn-20220731.lavoscore.org)*
  > \*\*Source:\*\* \*MDN Web APIs Reference\* \*\*Summary:\*\* MDN updated documentation for \`AudioWorkletGlobalScope\` and \`AudioWorklet\` to cover the \`port\` read-only properties
- [google.com](https://issuetracker.google.com/40210558) *(issuetracker.google.com)*
  > Toolchain maintainers and audio developers welcomed this standardization, as runtime environments can now detect \`audioWorklet.port\` and post Wasm modules or pointers directly into the scope on initialization, streamlining boilerplate and reducing in...
- [\[blink-dev\] Intent to Prototype: Shared AudioWorklet port](http://www.mail-archive.com/blink-dev@chromium.org/msg16227.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Shared AudioWorklet port Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Shared AudioWorklet port Chromestatus Tue, 31 Mar 2026 21:46:16 -0700 Contact emails \[email&#160;protected\] Explainer htt...
- [\[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet](http://www.mail-archive.com/blink-dev@chromium.org/msg17960.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Chromestatus Sun, 08 Nov 2026 14:14:07 -0800 Contact emails \[email&#160;protected\] ,...
- [Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet](http://www.mail-archive.com/blink-dev@chromium.org/msg17941.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet 'Mahesh Kannan' via blink-dev Wed, 04 Nov 2026 11:24:45 -0800 Filed a webkit...
- [Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet](http://www.mail-archive.com/blink-dev@chromium.org/msg17925.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Philip Jägenstedt Wed, 04 Nov 2026 08:22:59 -0800 LGTM1, looks a very straig...
- [Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet](http://www.mail-archive.com/blink-dev@chromium.org/msg17942.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Chris Harrelson Wed, 04 Nov 2026 15:39:50 -0800 Actually, could you please f...
- [webaudio/the-audio-api/the-audioworklet-interface/audioworklet-messageport.https.html - external/github.com/web-platform-tests/wpt - Git at Google](https://chromium.googlesource.com/external/github.com/web-platform-tests/wpt/+/refs/tags/merge_pr_48227/webaudio/the-audio-api/the-audioworklet-interface/audioworklet-messageport.https.html) *(chromium.googlesource.com)*
  > Sign in · ◑Theme · chromium/external/github.com/web-platform-tests/wpt/refs/tags/merge\_pr\_48227/./webaudio/the-audio-api/the-audioworklet-interface/audioworklet-messageport.https.html · blob: 546bd1d0d0e34480113290bcc5008f0240be8d4a \[file\] · Powered ...
- [Audioworklet: Low-Latency Web Audio Processing Guide \| Digital Thrive New Zealand](https://digitalthriveai.com/en-nz/resources/docs/web-development/audioworklet) *(digitalthriveai.com · 2026-03-17T00:00:00)*
  > &lt;strong&gt;The AudioWorklet interface provides a port property that returns a MessagePort for asynchronous communication between the main thread and the worklet&#x27;s global scope&lt;/strong&gt;.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Shared AudioWorklet port](http://www.mail-archive.com/blink-dev@chromium.org/msg16227.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5079784523694080`)*
  > \[blink-dev\] Intent to Prototype: Shared AudioWorklet port Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Shared AudioWorklet port Chromestatus Tue, 31 Mar 2026 21:46:16 -0700 Contact emails \[email&#160;protected\] Exp...
- [\[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet](http://www.mail-archive.com/blink-dev@chromium.org/msg17960.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5079784523694080`)*
  > \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Chromestatus Sun, 08 Nov 2026 14:14:07 -0800 Contact emails \[email&#160;pr...
- [Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet](http://www.mail-archive.com/blink-dev@chromium.org/msg17941.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5079784523694080`)*
  > Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet 'Mahesh Kannan' via blink-dev Wed, 04 Nov 2026 11:24:45 -0800 File...
- [Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet](http://www.mail-archive.com/blink-dev@chromium.org/msg17925.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5079784523694080`)*
  > Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Philip Jägenstedt Wed, 04 Nov 2026 08:22:59 -0800 LGTM1, looks a v...
- [Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet](http://www.mail-archive.com/blink-dev@chromium.org/msg17942.html) *(mail-archive.com)* *(Cites: `https://github.com/WebAudio/web-audio-api/issues/2456`)*
  > Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Shared MessagePort for AudioWorklet Chris Harrelson Wed, 04 Nov 2026 15:39:50 -0800 Actually, could yo...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/138) *(developer.mozilla.org)*
- [AudioWorkletGlobalScope: port - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletGlobalScope/port) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/de/docs/Web/API/AudioWorkletGlobalScope/port) *(developer.mozilla.org)*
- [github.com](https://github.com/WebAudio/web-audio-api/issues/2658) *(github.com)*
- [AudioWorklet: port - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet/port) *(developer.mozilla.org)*
- [Add AudioWorklet.port by chicoxyzzy · Pull Request #77679 · WebKit/WebKit · GitHub](https://github.com/WebKit/WebKit/pull/77679) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 63 result(s) found across 13 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5079784523694080" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"github.com/WebAudio/web-audio-api/issues/2456" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"github.com/WebAudio/web-audio-api/pull/2507" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"webaudio.github.io/web-audio-api" -site:webaudio.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Shared MessagePort for AudioWorklet" API` — *Core feature API query* (4 returned)
  - `"Shared MessagePort for AudioWorklet" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"audiocontext.audioworklet" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Shared MessagePort for AudioWorklet" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Shared MessagePort for AudioWorklet" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"audioWorklet.port" OR "AudioWorkletGlobalScope.port" postMessage example` — *Searches for code examples demonstrating syntax and usage of the shared MessagePort on AudioWorklet and AudioWorkletGlobalScope.* (8 returned)
  - `"AudioWorklet" "MessagePort" communication -dummy tutorial OR guide` — *Finds developer guides and tutorials explaining how to communicate between the main thread and AudioWorklet without using dummy processors.* (8 returned)
  - `"audioWorklet.port" ("Emscripten" OR "Chromium" OR "Web Audio API")` — *Identifies announcements, engine implementation notes, and tooling updates like Emscripten adopting audioWorklet.port.* (8 returned)
  - `"AudioWorklet" ("dummy processor" OR "bootstrap processor") MessagePort site:github.com` — *Discovers developer discussions, issues, and sentiment regarding the historical need for dummy processors versus standard worklet port support.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 1 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *widely*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "audio-worklet", shared with 3 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "audio-worklet": Chrome 90.2% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 2 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5079784523694080)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5079784523694080)
- [Specification](https://webaudio.github.io/web-audio-api/#dom-audioworklet-port)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/446920095)
