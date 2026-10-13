# Disconnect WebSockets on BFCache entry

> **Report Week:** 2026-W42 | **Milestone:** Chrome 157 | **Category:** Stepped rollout

## Overview

Chrome is changing its behavior to allow pages with active WebSocket connections to enter the Back/Forward Cache. To achieve this, active WebSockets are now disconnected when a page is cached. Previously, active WebSocket connections prevented pages from entering BFCache.  To revert to the previous behavior (preventing pages with active WebSockets from entering BFCache), we've provided a \[BackForwardCacheForWebSocketsAllowed\](https://chromeenterprise.google/policies/#BackForwardCacheForWebSocketsAllowed) policy. Admins can set this policy to \_Disabled\_ , which will prevent breakage in legacy apps that lack WebSocket reconnection logic.   For more information on BFCache, see \[Test back/forward cache\](https://developer.chrome.com/docs/devtools/application/back-forward-cache).

### Motivation

Currently, any active WebSocket connection forces the browser to discard the page when the user navigates away, preventing it from being stored in the Back/Forward Cache (BFCache).  We are changing this behavior to allow these pages to be cached by closing any active WebSocket connections upon entry. This approach mirrors the behavior for WebTransport.  For web developers, this change is designed to be compatible with existing patterns. When a page is restored from BFCache, the browser fires the error and close events, enabling applications to simply trigger their existing reconnection logic to pick up where they left off.

## Ecosystem Status

- **Momentum:** Moderate (footprint 190 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chromium's stepped rollout to proactively disconnect active WebSockets upon back/forward cache (bfcache) entry aligns its behavior with WebKit and the evolving WHATWG HTML specification. This removes one of the most persistent and frustrating blockers preventing instant back/forward navigation in modern web applications. The architectural change treats WebSockets consistently with WebTransport, firing standard error and close events upon cache restoration.

### Recommendations
- Actionable Advice: Teams should audit their client-side WebSocket handlers to verify that automatic reconnection logic cleanly triggers on standard close and error events or during the \`pageshow\` lifecycle when \`event.persisted\` is true. Enterprise developers supporting legacy dashboards without reconnect routines should prepare for deprecation of the temporary enterprise opt-out policy and modernize client socket lifecycles.
- Standards Activity (Mozilla): Latest discussion from @jesup: "I'm in favor; this is in line with what we've defined for WebTransport (@jan-ivar fyi)..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [WebSocket BFCache integration (Disconnect on entry)](https://github.com/WebKit/standards-positions/issues/648) [open]
- **Mozilla:** [WebSocket BFCache integration (Disconnect on entry)](https://github.com/mozilla/standards-positions/issues/1390) [open]

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/blog/chrome-149-beta) *(developer.chrome.com)*
  > Starting with \*\*Chrome 149\*\* (and Microsoft Edge 152+), Chromium aligned with WebKit (Safari) by changing this behavior: \* \*\*Automatic Disconnection:\*\* When a user navigates away, active WebSockets are closed proactively upon entering bfcache rather ...
- [microsoft.com](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/backforwardcacheforwebsocketsallowed) *(learn.microsoft.com)*
  > \* \*\*Temporary Enterprise Opt-Out:\*\* For enterprise environments and legacy applications lacking robust reconnection handling, administrators were provided the policy \[\`BackForwardCacheForWebSocketsAllowed\`\](https://chromeenterprise.google/policies/#B...
- [chromeenterprise.google](https://chromeenterprise.google/intl/en_CA/resources/release-notes) *(chromeenterprise.google)*
  > \* \*\*Temporary Enterprise Opt-Out:\*\* For enterprise environments and legacy applications lacking robust reconnection handling, administrators were provided the policy \[\`BackForwardCacheForWebSocketsAllowed\`\](https://chromeenterprise.google/policies/#B...
- [chromium.org](https://issues.chromium.org/issues/531545512) *(issues.chromium.org)*
  > Setting this to \*Disabled\* forces the legacy behavior (blocking bfcache entry when a WebSocket is open) until its scheduled removal in future versions The documentation notes that this is a transitional escape hatch (marked deprecated in later milest...
- [web.dev](https://web.dev/articles/bfcache) *(web.dev)*
  > \* \*\*Key Details:\*\* Details user-agent differences, noting that WebKit and Chrome no longer flag active WebSockets as an eviction trigger dev (\*Back/forward cache: Best Practices\*) \* \*\*Coverage:\*\* The foundational web performance guide was updated reg...
- [Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/52nlr8z3Png) *(groups.google.com · 2026-04-17T00:00:00)*
  > Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: Disconnect WebSoc...
- [\[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16328.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Chromestatus Fri, 17 Apr 2026 03:17:18 -0700 Contact emails \[ema...
- [Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16331.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry 'Gilberto Cocchi' via blink-dev Fri, 17 Apr 2026 08:01:0...
- [Chrome 149 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/149) *(developer.chrome.com · 2026-06-02T00:00:00)*
  > &lt;strong&gt;By closing connections on bfcache entry instead of marking the document as ineligible, the browser allows pages with active WebSockets to be stored and restored&lt;/strong&gt;. Tracking bug #467838624 \| ChromeStatus.com entry \| Spec · Extends the G...
- [WebSockets and bfcache: Chrome 150 Still Said 'websocket'](https://jangwook.net/en/blog/en/websocket-bfcache-eligibility-remeasure) *(jangwook.net · 2026-07-24T00:00:00)*
  > &lt;strong&gt;When the browser closes the WebSocket to freeze the page, the restored view comes back with a dead connection&lt;/strong&gt;. In that branch, reconnect and re-fetch the values that went stale while frozen (notifications, stock, prices).

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Disconnect WebSockets on BFCache entry · Issue #40 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/40) *(github.com · 2026-10-05T08:17:16)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Disconnect WebSockets on BFCache entry · Issue #40 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window....
- [Disconnect WebSockets on BFCache entry · Issue #1262 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1262) *(github.com · 2026-08-12T17:37:25)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Disconnect WebSockets on BFCache entry · Issue #1262 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or ...
- [Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/52nlr8z3Png) *(groups.google.com · 2026-04-17T00:00:00)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: Disconn...
- [\[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16328.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12349`)*
  > \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Chromestatus Fri, 17 Apr 2026 03:17:18 -0700 Contact e...
- [Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16331.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12349`)*
  > Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry 'Gilberto Cocchi' via blink-dev Fri, 17 Apr 20...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/whatwg/html/issues/12085) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) *(developer.mozilla.org)*
- [github.com](https://github.com/jumpserver/jumpserver/issues/17616) *(github.com)*
- [Disconnect WebSockets on BFCache entry · Issue #40 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/40) *(github.com)*
- [Disconnect WebSockets on BFCache entry · Issue #1262 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1262) *(github.com)*
- [Entering the back/forward cache is reported as a WebSocket error · Issue #2932 · djust-org/djust](https://github.com/djust-org/djust/issues/2932) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 11 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5068439115923456" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/whatwg/html/pull/12349" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Disconnect WebSockets on BFCache entry" API` — *Core feature API query* (8 returned)
  - `"Disconnect WebSockets on BFCache entry" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromeenterprise.google" OR "developer.chrome" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Disconnect WebSockets on BFCache entry" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Disconnect WebSockets on BFCache entry" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"BFCache" "WebSocket" ("reconnect" OR "pageshow" OR "pagehide") (blog OR tutorial OR guide)` — *Developer articles and tutorials explaining how to manage WebSocket disconnections and reconnection logic when pages enter and exit BFCache.* (5 returned)
  - `"pageshow" "persisted" "WebSocket" ("new WebSocket" OR "reconnect")` — *JavaScript implementation patterns showing how to check event.persisted on pageshow and re-establish disconnected WebSocket connections.* (7 returned)
  - `"BackForwardCacheForWebSocketsAllowed" OR ("BFCache" "WebSocket" ("Intent to Ship" OR "Chrome"))` — *Official Chrome feature announcements, enterprise policy details, and web platform release trackers detailing the rollout.* (8 returned)
  - `"whatwg/html/pull/12349" OR ("BFCache" "WebSocket" site:github.com/whatwg/html)` — *Spec discussion threads and standard organization feedback concerning the lifecycle change of closing WebSockets on cache entry.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 7 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 4 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5068439115923456)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5068439115923456)
- [Specification](https://github.com/whatwg/html/pull/12349)
- [Chromium Tracking Bug](https://g-issues.chromium.org/issues/467838624)
