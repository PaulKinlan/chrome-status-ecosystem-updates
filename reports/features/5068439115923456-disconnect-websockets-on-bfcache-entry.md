# Disconnect WebSockets on BFCache entry

> **Report Week:** 2026-W43 | **Milestone:** Chrome 157 | **Category:** Stepped rollout

## Overview

Chrome is changing its behavior to allow pages with active WebSocket connections to enter the Back/Forward Cache. To achieve this, active WebSockets are now disconnected when a page is cached. Previously, active WebSocket connections prevented pages from entering BFCache.  To revert to the previous behavior (preventing pages with active WebSockets from entering BFCache), we've provided a \[BackForwardCacheForWebSocketsAllowed\](https://chromeenterprise.google/policies/#BackForwardCacheForWebSocketsAllowed) policy. Admins can set this policy to \_Disabled\_ , which will prevent breakage in legacy apps that lack WebSocket reconnection logic.   For more information on BFCache, see \[Test back/forward cache\](https://developer.chrome.com/docs/devtools/application/back-forward-cache).

### Motivation

Currently, any active WebSocket connection forces the browser to discard the page when the user navigates away, preventing it from being stored in the Back/Forward Cache (BFCache).  We are changing this behavior to allow these pages to be cached by closing any active WebSocket connections upon entry. This approach mirrors the behavior for WebTransport.  For web developers, this change is designed to be compatible with existing patterns. When a page is restored from BFCache, the browser fires the error and close events, enabling applications to simply trigger their existing reconnection logic to pick up where they left off.

## Ecosystem Status

- **Momentum:** Emerging (footprint 190 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Disconnecting WebSockets on Back/Forward Cache (BFCache) entry removes a longstanding blocker that previously forced browsers to discard pages with active socket connections upon navigation. By proactively severing the connection and dispatching standard error and close events upon cache restoration, browsers enable instant back/forward transitions while relying on standard client reconnection logic. Cross-engine consensus in the WHATWG HTML standard reflects strong alignment, mirroring existing patterns established for WebTransport.

### Recommendations
- Actionable Advice: Audit application WebSocket lifecycles to guarantee robust reconnection handlers on \`close\` and \`error\` events, or explicitly manage reconnects using the \`pageshow\` event with \`event.persisted\`. Enterprise developers supporting legacy intranets lacking auto-reconnect routines should test against current releases and leverage the temporary enterprise policy opt-out if immediate refactoring is not feasible.
- Standards Activity (Mozilla): Latest discussion from @jesup: "I'm in favor; this is in line with what we've defined for WebTransport (@jan-ivar fyi)..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [WebSocket BFCache integration (Disconnect on entry)](https://github.com/WebKit/standards-positions/issues/648) [open]
- **Mozilla:** [WebSocket BFCache integration (Disconnect on entry)](https://github.com/mozilla/standards-positions/issues/1390) [open]

## 📰 Ecosystem Blogs & Articles

- [WebSockets and bfcache: Chrome 150 Still Said 'websocket'](https://jangwook.net/en/blog/en/websocket-bfcache-eligibility-remeasure) *(jangwook.net)*
  > Historically, active WebSocket connections were a primary blocker for the \*\*Back/Forward Cache (bfcache)\*\* across Chromium-based browsers notRestoredReasons\` previously returned \`"websocket"\` as an eviction reason, but notes that Chrome and WebKit no...
- [New in Chrome 149 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-149) *(developer.chrome.com)*
  > Because the browser could not keep live TCP socket connections alive while suspending a page in memory, it routinely evicted any page with an active socket, forcing a full network reload upon back/forward navigation With the release of \*\*Chrome 149\*\*...
- [neuraldemy.com](https://neuraldemy.com/handling-bfcache-with-active-websocket-connections-in-react) *(neuraldemy.com)*
  > Because the browser could not keep live TCP socket connections alive while suspending a page in memory, it routinely evicted any page with an active socket, forcing a full network reload upon back/forward navigation \*\*The React Hook Trap:\*\* Several t...
- [Microsoft Edge Browser Policy Documentation BackForwardCacheForWebSocketsAllowed \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/backforwardcacheforwebsocketsallowed) *(learn.microsoft.com)*
  > \*\*Proactive Disconnection:\*\* Chrome forcibly disconnects the active WebSocket when the page enters the bfcache \*\*Enterprise Escape Hatch:\*\* For legacy enterprise intranets and applications that lack auto-reconnect routines, Google and Microsoft added...
- [appspot.com](https://cr-status.appspot.com/release-notes/157) *(cr-status.appspot.com)*
  > \*\*Enterprise Escape Hatch:\*\* For legacy enterprise intranets and applications that lack auto-reconnect routines, Google and Microsoft added the policy \*\*\`BackForwardCacheForWebSocketsAllowed\`\*\* Setting this policy to \`Disabled\` restores the legacy be...
- [Chrome 149 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/149) *(developer.chrome.com)*
  > Official announcement highlighting that active WebSocket connections will no longer prevent bfcache eligibility
- [Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16331.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry 'Gilberto Cocchi' via blink-dev Fri, 17 Apr 2026 08:01:0...
- [Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/52nlr8z3Png) *(groups.google.com · 2026-04-17T00:00:00)*
  > Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: Disconnect WebSoc...
- [\[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16328.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Chromestatus Fri, 17 Apr 2026 03:17:18 -0700 Contact emails \[ema...
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/resources/release-notes) *(chromeenterprise.google · 2026-10-07T00:00:00)*
  > To achieve this, &lt;strong&gt;active WebSockets are now disconnected when a page is cached&lt;/strong&gt;. Previously, active WebSocket connections prevented pages from entering BFCache. To revert to the previous behavior (preventing pages with active WebSocket...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16331.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry 'Gilberto Cocchi' via blink-dev Fri, 17 Apr 20...
- [Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/52nlr8z3Png) *(groups.google.com · 2026-04-17T00:00:00)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: Disconn...
- [\[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16328.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12349`)*
  > \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Chromestatus Fri, 17 Apr 2026 03:17:18 -0700 Contact e...

## 📚 Platform Documentation & Specifications

- [Proposal: Unblock bfcache for active WebSockets by disconnecting on entry · Issue #12085 · whatwg/html](https://github.com/whatwg/html/issues/12085) *(github.com)*
- [Monitoring bfcache blocking reasons - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) *(developer.mozilla.org)*
- [Disconnect WebSockets on BFCache entry · Issue #40 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/40) *(github.com)*
- [Disconnect WebSockets on BFCache entry · Issue #1262 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1262) *(github.com)*
- [Updating the WebSockets guide · mdn · Discussion #817](https://github.com/orgs/mdn/discussions/817) *(github.com)*
- [Back-forward cache: Specifying ineligibility? · Issue #5879 · whatwg/html](https://github.com/whatwg/html/issues/5879) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 12 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5068439115923456" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/whatwg/html/pull/12349" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Disconnect WebSockets on BFCache entry" API` — *Core feature API query* (8 returned)
  - `"Disconnect WebSockets on BFCache entry" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromeenterprise.google" OR "developer.chrome" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Disconnect WebSockets on BFCache entry" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Disconnect WebSockets on BFCache entry" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Disconnect WebSockets on BFCache entry" OR "BackForwardCacheForWebSocketsAllowed"` — *Finds official release notes, policy announcements, and ecosystem discussions regarding the Chrome BFCache WebSocket change.* (8 returned)
  - `chrome bfcache websocket reconnection logic tutorial guide` — *Searches for developer blog posts and guides on how to handle WebSocket reconnections when a page is restored from the back/forward cache.* (8 returned)
  - `site:github.com/whatwg/html pull 12349 websocket bfcache` — *Locates the specific HTML specification pull request and technical discussion regarding WebSockets and BFCache.* (8 returned)
  - `websocket error close events bfcache restore javascript example` — *Looks for code snippets and implementation examples showing how to trigger reconnection logic on close events after BFCache restoration.* (8 returned)
  - `back forward cache websocket connection blocked chrome enterprise policy` — *Finds developer forums and discussions about legacy app breakage and utilizing the BackForwardCacheForWebSocketsAllowed policy.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 4 result(s) found — **2 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 4 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5068439115923456)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5068439115923456)
- [Specification](https://github.com/whatwg/html/pull/12349)
- [Chromium Tracking Bug](https://g-issues.chromium.org/issues/467838624)
