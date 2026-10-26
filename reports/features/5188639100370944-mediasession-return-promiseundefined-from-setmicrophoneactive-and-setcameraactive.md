# MediaSession: Return Promise&lt;undefined&gt; from setMicrophoneActive() and setCameraActive()

> **Report Week:** 2026-W44 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Updates navigator.mediaSession.setMicrophoneActive() and navigator.mediaSession.setCameraActive() to return a Promise&lt;undefined&gt; instead of undefined, matching the W3C Media Session specification. In a fully active document, the returned promise resolves with undefined; if the associated document is not fully active, it returns a promise rejected with an InvalidStateError DOMException.

### Motivation

When MediaSession.setMicrophoneActive() and MediaSession.setCameraActive() were originally specified and shipped in Chrome 93, their WebIDL return type was void (undefined). The W3C Media Session specification was subsequently updated (https://github.com/w3c/mediasession/pull/312) so that both methods return Promise&lt;undefined&gt; to support user agents that apply a capture pause policy or prompt the user asynchronously.  Updating Chromium's implementation to return Promise&lt;undefined&gt; aligns Chrome with the W3C Media Session specification and fixes 4 failing subtests in WPT's mediasession/idlharness.window.html.

## Ecosystem Status

- **Momentum:** Emerging (footprint 65 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** This change updates navigator.mediaSession.setMicrophoneActive() and setCameraActive() to return a Promise&lt;undefined&gt; rather than undefined, bringing Chromium into strict alignment with the W3C Media Session specification. The promise-based signature facilitates asynchronous capture-pause policies and user authorization prompts while resolving failing Web Platform Tests. With WebKit already shipping the async return type and Gecko tracking it for implementation, engine consensus on this WebIDL refinement is virtually unanimous.

### Recommendations
- Actionable Advice: Teams maintaining WebRTC and video calling web applications should wrap setMicrophoneActive() and setCameraActive() in async/await or append error handlers to handle potential InvalidStateError rejections from inactive documents. Because the returned promise resolves to undefined in active frames, existing code without await will continue functioning without regressions.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @jan-ivar: "We're interested in implementing this in \[bug 1874041\](https://bugzilla.mozilla.org/show\_bug.cgi?id=1874041). We've also proposed it for Interop 2027 ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [Add video conferencing actions to the Media Session API spec](https://github.com/mozilla/standards-positions/issues/504) [open]

## Web-features Group

*group-level data: web-features [`media-session`](https://webstatus.dev/features/media-session), shared with 11 other ChromeStatus features*

- Share of tests passing in the web-features group `media-session` on [wpt.fyi](https://wpt.fyi/results?q=feature:media-session) (via webstatus.dev) — stable: Chrome 66.7% · Edge 66.7% · Firefox 44.4% · Safari 44.4%; experimental: Chrome 66.7% · Edge 66.7% · Firefox 44.4% · Safari 44.4%
- **Chrome usage:** 0.026% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/48))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/28))

## 📰 Ecosystem Blogs & Articles

- [Chrome Platform Status](https://cr-status.appspot.com/feature/5188639100370944) *(cr-status.appspot.com)*
  > Chrome Platform Status
- [Chrome 158 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Coverage:\*\* Detailed in the \*\*Chrome Platform Status\*\* entry and release notes for \*\*Chrome 158\*\* (tracking bug \[#576328036\](https://issues.chromium.org/issues/576328036))
- [appspot.com](https://cr-status.appspot.com/feature/5188639100370944/activity) *(cr-status.appspot.com)*
  > \*\*Context & Motivation:\*\* When Chrome originally launched video-conferencing controls in Chrome 93, the return type was set to \`undefined\` The Chromium team updated the methods to align with the official W3C Media Session specification and achieve pa...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/w3c/mediasession/issues/317) *(github.com)*
- [Media Session](https://www.w3.org/TR/mediasession) *(w3.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 25 result(s) found across 11 planned queries — **2 verified relevant**
  - `"chromestatus.com/feature/5188639100370944" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"w3c.github.io/mediasession" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (6 returned)
  - `"MediaSession: Return Promise<undefined> from setMicrophoneActive() and setCameraActive()" API` — *Core feature API query* (8 returned)
  - `"MediaSession: Return Promise<undefined> from setMicrophoneActive() and setCameraActive()" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"navigator.mediasession" OR "mediasession.setmicrophoneactive" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"MediaSession: Return Promise<undefined> from setMicrophoneActive() and setCameraActive()" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"MediaSession: Return Promise<undefined> from setMicrophoneActive() and setCameraActive()" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (0 returned)
  - `"navigator.mediaSession.setMicrophoneActive" OR "navigator.mediaSession.setCameraActive" (tutorial OR guide OR "video call")` — *Searches for developer guides, blog posts, and tutorials implementing camera/microphone controls via the Media Session API.* (8 returned)
  - `"mediaSession.setMicrophoneActive" (await OR ".then" OR "InvalidStateError")` — *Discovers real-world JavaScript code examples demonstrating Promise handling and error catching for setMicrophoneActive and setCameraActive.* (8 returned)
  - `"setMicrophoneActive" "setCameraActive" Promise Chrome OR Chromium ("release notes" OR "intent to")` — *Tracks browser feature announcements, intent-to-ship threads, and release notes announcing the Promise return type change.* (2 returned)
  - `site:github.com/w3c/mediasession ("setMicrophoneActive" OR "setCameraActive") Promise` — *Finds standards discussions, specification issues, and pull requests surrounding the transition from void to Promise return types.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "media-session", shared with 11 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "media-session": Chrome 66.7% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5188639100370944)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5188639100370944)
- [Specification](https://w3c.github.io/mediasession/#dom-mediasession-setmicrophoneactive)
- [Chromium Tracking Bug](https://crbug.com/576328036)
