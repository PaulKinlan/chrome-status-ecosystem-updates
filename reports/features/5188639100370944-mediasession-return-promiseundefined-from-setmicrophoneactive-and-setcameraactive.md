# MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 | **Category:** Enabled by default

## Overview

Updates navigator.mediaSession.setMicrophoneActive() and navigator.mediaSession.setCameraActive() to return a Promise&lt;undefined&gt; instead of undefined, matching the W3C Media Session specification. In a fully active document, the returned promise resolves with undefined; if the associated document is not fully active, it returns a promise rejected with an InvalidStateError DOMException.

### Motivation

When MediaSession.setMicrophoneActive() and MediaSession.setCameraActive() were originally specified and shipped in Chrome 93, their WebIDL return type was void (undefined). The W3C Media Session specification was subsequently updated (https://github.com/w3c/mediasession/pull/312) so that both methods return Promise&lt;undefined&gt; to support user agents that apply a capture pause policy or prompt the user asynchronously.  Updating Chromium's implementation to return Promise&lt;undefined&gt; aligns Chrome with the W3C Media Session specification and fixes 4 failing subtests in WPT's mediasession/idlharness.window.html.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 130 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** Chromium's update to make navigator.mediaSession.setMicrophoneActive() and setCameraActive() return Promise&lt;undefined&gt; resolves an implementation discrepancy dating back to Chrome 93, aligning Blink directly with the W3C Media Session specification. The change enables user agents to execute asynchronous capture-pause policies or user verification prompts before settling, and guarantees an InvalidStateError rejection when called on documents that are not fully active. This refinement closes failing Web Platform Tests harness tests and unifies promise-based media controls across modern web engines.

### Recommendations
- Actionable Advice: Web development teams can immediately modernize their call-control code by awaiting setMicrophoneActive() and setCameraActive(), since awaiting a previously undefined return value is backward-compatible in older browser engines. Teams should also implement try/catch error handling around these methods to anticipate and handle InvalidStateError exceptions thrown when calling methods on inactive or backgrounded documents.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @jan-ivar: "We're interested in implementing this in \[bug 1874041\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1874041). We've also proposed it for Interop 2027 ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [Add video conferencing actions to the Media Session API spec](https://github.com/mozilla/standards-positions/issues/504) [closed]

## Web-features Group

*group-level data: web-features [`media-session`](https://webstatus.dev/features/media-session), shared with 11 other ChromeStatus features*

- Share of tests passing in the web-features group `media-session` on [wpt.fyi](https://wpt.fyi/results?q=feature:media-session) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 44.4% · Safari 44.4%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 44.4% · Safari 44.4%
- **Chrome usage:** 0.031% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/48))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/28))

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5188639100370944/activity) *(chromestatus.com)*
  > The Web Platform update changes the return type of \`navigator.mediaSession.setMicrophoneActive()\` and \`navigator.mediaSession.setCameraActive()\` from \`undefined\` to \*\*\`Promise&lt;undefined&gt;\`\*\* \*\*Active Documents:\*\* In a fully active document, the return...
- [chromium.org](https://issues.chromium.org/issues/576328036/resources) *(issues.chromium.org)*
  > This change resolves a discrepancy that existed since Chrome 93 (when the methods were initially implemented with a void/undefined return type) to align with \*\*W3C Media Session Specification PR #312\*\*
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Status Entry:\*\* \[MediaSession: Return Promise\\&lt;undefined\\&gt; from setMicrophoneActive() and setCameraActive()\](https://chromestatus.com/feature/576328036) (targeted for Chrome 159)
- [Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](http://www.mail-archive.com/blink-dev@chromium.org/msg17927.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraActive() Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraA...
- [\[blink-dev\] Intent to Ship: MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](http://www.mail-archive.com/blink-dev@chromium.org/msg17906.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraActive() Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraActive() ...
- [Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](http://www.mail-archive.com/blink-dev@chromium.org/msg17958.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraActive() Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraA...
- [Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](http://www.mail-archive.com/blink-dev@chromium.org/msg17917.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraActive() Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraA...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](http://www.mail-archive.com/blink-dev@chromium.org/msg17927.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5188639100370944`)*
  > Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraActive() Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and ...
- [\[blink-dev\] Intent to Ship: MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](http://www.mail-archive.com/blink-dev@chromium.org/msg17906.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5188639100370944`)*
  > \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraActive() Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCamer...
- [Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](http://www.mail-archive.com/blink-dev@chromium.org/msg17958.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5188639100370944`)*
  > Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraActive() Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and ...
- [Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()](http://www.mail-archive.com/blink-dev@chromium.org/msg17917.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5188639100370944`)*
  > Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and setCameraActive() Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: MediaSession: Return Promise from setMicrophoneActive() and ...

## 📚 Platform Documentation & Specifications

- [Media Session](https://www.w3.org/TR/mediasession) *(w3.org)*
- [Media Session](https://www.w3.org/TR/2024/WD-mediasession-20240215) *(w3.org)*
- [Media Session](https://www.w3.org/TR/2025/WD-mediasession-20250821) *(w3.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 30 result(s) found across 12 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/5188639100370944" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/w3c/mediasession/pull/312" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"w3c.github.io/mediasession" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"MediaSession: Return Promise<undefined> from setMicrophoneActive() and setCameraActive()" API` — *Core feature API query* (8 returned)
  - `"MediaSession: Return Promise<undefined> from setMicrophoneActive() and setCameraActive()" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"navigator.mediasession" OR "mediasession.setmicrophoneactive" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"MediaSession: Return Promise<undefined> from setMicrophoneActive() and setCameraActive()" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"MediaSession: Return Promise<undefined> from setMicrophoneActive() and setCameraActive()" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (0 returned)
  - `"navigator.mediaSession.setMicrophoneActive" OR "navigator.mediaSession.setCameraActive" tutorial OR guide` — *Developer guides and tutorials detailing how to mute and unmute camera or microphone feeds using the MediaSession API.* (8 returned)
  - `"mediaSession.setMicrophoneActive" await OR "Promise" "InvalidStateError"` — *JavaScript implementation examples showing promise handling and error catching when invoking setMicrophoneActive or setCameraActive.* (8 returned)
  - `"setMicrophoneActive" "setCameraActive" "Promise" Chrome OR Chromium "Intent to Ship"` — *Chrome platform status announcements, bug tracker tickets, and Intent to Ship entries documenting the API change to promises.* (5 returned)
  - `site:github.com/w3c/mediasession "setMicrophoneActive" OR "setCameraActive" Promise` — *W3C Media Working Group GitHub issues and pull requests discussing the motivation and spec changes for asynchronous camera and microphone active toggles.* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 7 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "media-session", shared with 11 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "media-session": Chrome 66.7% passing (stable)*
- **Sources cited by the AI synthesis:** 5 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5188639100370944)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5188639100370944)
- [Specification](https://w3c.github.io/mediasession/#dom-mediasession-setmicrophoneactive)
- [Chromium Tracking Bug](https://crbug.com/576328036)
