# Disconnect WebSockets on BFCache entry

> **Report Week:** 2026-W45 | **Milestone:** Chrome 157 | **Category:** Stepped rollout

## Overview

Chrome is changing its behavior to allow pages with active WebSocket connections to enter the Back/Forward Cache. To achieve this, active WebSockets are now disconnected when a page is cached. Previously, active WebSocket connections prevented pages from entering BFCache.  To revert to the previous behavior (preventing pages with active WebSockets from entering BFCache), we previously provided a \[BackForwardCacheForWebSocketsAllowed\](https://chromeenterprise.google/policies/#BackForwardCacheForWebSocketsAllowed) policy. Admins can set this policy to \_Disabled\_ , which will prevent breakage in legacy apps that lack WebSocket reconnection logic. This policy will be deprecated in Chrome 157.   For more information on BFCache, see \[Test back/forward cache\](https://developer.chrome.com/docs/devtools/application/back-forward-cache).

### Motivation

Currently, any active WebSocket connection forces the browser to discard the page when the user navigates away, preventing it from being stored in the Back/Forward Cache (BFCache).  We are changing this behavior to allow these pages to be cached by closing any active WebSocket connections upon entry. This approach mirrors the behavior for WebTransport.  For web developers, this change is designed to be compatible with existing patterns. When a page is restored from BFCache, the browser fires the error and close events, enabling applications to simply trigger their existing reconnection logic to pick up where they left off.

## Ecosystem Status

- **Momentum:** Emerging (+10 points since 2026-10-12; footprint 200 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** Browsers are standardizing the behavior of disconnecting active WebSocket connections upon Back/Forward Cache (BFCache) entry rather than disqualifying pages from being cached. Safari has historically closed active connections on entry, Chrome aligned with this model starting in milestone 149 while deprecating enterprise opt-out policies, and WHATWG discussions are formalizing cleanup steps to align WebSockets with WebTransport semantics.

### Recommendations
- Actionable Advice: Ensure your WebSocket client implements resilient exponential backoff and reconnection routines responding to standard close events, or listen for the pageshow event (checking event.persisted) to cleanly re-establish socket state upon cache restoration. Remove any legacy pagehide workarounds that manually tore down sockets solely to force BFCache eligibility.
- Standards Activity (Mozilla): Latest discussion from @jesup: "I'm in favor; this is in line with what we've defined for WebTransport (@jan-ivar fyi)..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [WebSocket BFCache integration (Disconnect on entry)](https://github.com/WebKit/standards-positions/issues/648) [open]
- **Mozilla:** [WebSocket BFCache integration (Disconnect on entry)](https://github.com/mozilla/standards-positions/issues/1390) [open]

## 📰 Ecosystem Blogs & Articles

- [WebSockets and bfcache: Chrome 150 Still Said 'websocket'](https://jangwook.net/en/blog/en/websocket-bfcache-eligibility-remeasure) *(jangwook.net)*
  > Historically, holding an open WebSocket connection rendered a webpage ineligible for the browser's Back/Forward Cache (bfcache), causing the browser to discard the document upon navigation and force a slow, full network reload when users pressed "Bac...
- [Microsoft Edge Browser Policy Documentation BackForwardCacheForWebSocketsAllowed \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/backforwardcacheforwebsocketsallowed) *(learn.microsoft.com)*
  > Microsoft Edge Browser Policy Documentation BackForwardCacheForWebSocketsAllowed \| Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the latest f...
- [Back/forward cache  \|  Articles  \|  web.dev](https://web.dev/articles/bfcache) *(web.dev)*
  > Updated to reflect that starting in Chrome 149, open WebSocket connections no longer block bfcache eligibility (joining Safari) persisted\`) and \`pageshow\` to cleanly manage socket lifecycles, or ensure their WebSocket manager gracefully reacts to \`on...
- [neuraldemy.com](https://neuraldemy.com/handling-bfcache-with-active-websocket-connections-in-react) *(neuraldemy.com)*
  > Recent technical guides focus on practical code adaptations \*\*Unified Reconnection Patterns:\*\* Recommends implementing stateful reconnect loops (e.g., exponential backoff upon \`onclose\` or checking \`pageshow\`'s \`persisted\` flag) rather than assuming ...
- [Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/52nlr8z3Png) *(groups.google.com · 2026-04-17T00:00:00)*
  > Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: Disconnect WebSoc...
- [\[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16328.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Chromestatus Fri, 17 Apr 2026 03:17:18 -0700 Contact emails \[ema...
- [Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16330.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Adam Rice Fri, 17 Apr 2026 05:56:53 -0700 Robust users o...
- [Chrome 149  \|  Release notes  \|  Chrome for Developers](https://developer.chrome.com/release-notes/149) *(developer.chrome.com · 2026-06-02T00:00:00)*
  > &lt;strong&gt;By closing connections on bfcache entry instead of marking the document as ineligible, the browser allows pages with active WebSockets to be stored and restored&lt;/strong&gt;. Tracking bug #467838624 \| ChromeStatus.com entry \| Spec · Extends the G...
- [Chrome 149 beta  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/chrome-149-beta) *(developer.chrome.com · 2026-05-06T00:00:00)*
  > &lt;strong&gt;By closing connections on bfcache entry instead of marking the document as ineligible, the browser allows pages with active websockets to be stored and restored&lt;/strong&gt;. Adds the read-only boolean attribute isReloadNavigation to the Fetch AP...
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/en_us/resources/release-notes/?ver=152&featId=5148353408139264) *(chromeenterprise.google · 2026-10-21T00:00:00)*
  > Chrome is changing its behavior to allow pages with active WebSocket connections to enter the Back/Forward Cache. To achieve this, &lt;strong&gt;active WebSockets are now disconnected when a page is cached&lt;/strong&gt;. Previously, active WebSocket connections...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/52nlr8z3Png) *(groups.google.com · 2026-04-17T00:00:00)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: Disconn...
- [Disconnect WebSockets on BFCache entry · Issue #40 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/40) *(github.com · 2026-10-05T08:17:16)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Disconnect WebSockets on BFCache entry · Issue #40 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh y...
- [\[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16328.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12349`)*
  > \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Chromestatus Fri, 17 Apr 2026 03:17:18 -0700 Contact e...
- [Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16330.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12349`)*
  > Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Adam Rice Fri, 17 Apr 2026 05:56:53 -0700 Robu...

## 📚 Platform Documentation & Specifications

- [Proposal: Unblock bfcache for active WebSockets by disconnecting on entry · Issue #12085 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/12085) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/648) *(github.com)*
- [github.com](https://github.com/mozilla/standards-positions/issues/1390) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) *(developer.mozilla.org)*
- [Disconnect WebSockets on BFCache entry · Issue #40 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/40) *(github.com)*
- [Disconnect WebSockets on BFCache entry · Issue #1262 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1262) *(github.com)*
- [Updating the WebSockets guide · mdn · Discussion #817 · GitHub](https://github.com/orgs/mdn/discussions/817) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 11 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5068439115923456" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/whatwg/html/pull/12349" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Disconnect WebSockets on BFCache entry" API` — *Core feature API query* (8 returned)
  - `"Disconnect WebSockets on BFCache entry" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromeenterprise.google" OR "developer.chrome" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Disconnect WebSockets on BFCache entry" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Disconnect WebSockets on BFCache entry" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"bfcache" websocket ("reconnect" OR "pageshow") "back/forward cache"` — *Developer guides and best practices for reconnecting WebSockets when a page is restored from the back/forward cache.* (8 returned)
  - `"pageshow" "event.persisted" ("new WebSocket" OR "reconnect")` — *JavaScript code samples showing how to handle BFCache page restoration and re-establish closed WebSocket connections.* (4 returned)
  - `"BackForwardCacheForWebSocketsAllowed" OR ("disconnect WebSockets" "BFCache" Chrome)` — *Browser release notes, deprecation announcements, and enterprise policy documentation regarding WebSocket BFCache behavior.* (8 returned)
  - `site:github.com/whatwg/html "WebSocket" ("bfcache" OR "back-forward cache" OR 12349)` — *Standards discussions and developer feedback on the WHATWG HTML specification PR for closing WebSockets on BFCache entry.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 3 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 4 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5068439115923456)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5068439115923456)
- [Specification](https://github.com/whatwg/html/pull/12349)
- [Chromium Tracking Bug](https://g-issues.chromium.org/issues/467838624)
