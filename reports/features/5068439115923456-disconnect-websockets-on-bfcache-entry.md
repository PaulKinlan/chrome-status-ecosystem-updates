# Disconnect WebSockets on BFCache entry

> **Report Week:** 2026-W44 | **Milestone:** Chrome 157 | **Category:** Stepped rollout

## Overview

Chrome is changing its behavior to allow pages with active WebSocket connections to enter the Back/Forward Cache. To achieve this, active WebSockets are now disconnected when a page is cached. Previously, active WebSocket connections prevented pages from entering BFCache.  To revert to the previous behavior (preventing pages with active WebSockets from entering BFCache), we previously provided a \[BackForwardCacheForWebSocketsAllowed\](https://chromeenterprise.google/policies/#BackForwardCacheForWebSocketsAllowed) policy. Admins can set this policy to \_Disabled\_ , which will prevent breakage in legacy apps that lack WebSocket reconnection logic. This policy will be deprecated in Chrome 157.   For more information on BFCache, see \[Test back/forward cache\](https://developer.chrome.com/docs/devtools/application/back-forward-cache).

### Motivation

Currently, any active WebSocket connection forces the browser to discard the page when the user navigates away, preventing it from being stored in the Back/Forward Cache (BFCache).  We are changing this behavior to allow these pages to be cached by closing any active WebSocket connections upon entry. This approach mirrors the behavior for WebTransport.  For web developers, this change is designed to be compatible with existing patterns. When a page is restored from BFCache, the browser fires the error and close events, enabling applications to simply trigger their existing reconnection logic to pick up where they left off.

## Ecosystem Status

- **Momentum:** Emerging (footprint 210 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chromium is updating its Back/Forward Cache (BFCache) implementation to allow pages with active WebSocket connections into the cache by cleanly severing active sockets upon entry. This change unifies Chromium with Safari's existing handling and mirrors the semantics established for WebTransport, while deprecating the temporary enterprise fallback policy (\`BackForwardCacheForWebSocketsAllowed\`). Browser vendors across WHATWG, Gecko, and WebKit broadly converge on treating BFCache suspension like standard network loss.

### Recommendations
- Actionable Advice: Ensure your WebSocket clients handle abnormal closures (code 1006) with exponential backoff and reconnection logic, and use the \`pageshow\` event with \`event.persisted\` to re-sync server state upon BFCache restoration. Verify your application's caching status using the BFCache test utility in browser DevTools Application panels.
- Standards Activity (Mozilla): Latest discussion from @jesup: "I'm in favor; this is in line with what we've defined for WebTransport (@jan-ivar fyi)..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [WebSocket BFCache integration (Disconnect on entry)](https://github.com/WebKit/standards-positions/issues/648) [open]
- **Mozilla:** [WebSocket BFCache integration (Disconnect on entry)](https://github.com/mozilla/standards-positions/issues/1390) [open]

## 📰 Ecosystem Blogs & Articles

- [WebSockets and bfcache: Chrome 150 Still Said 'websocket'](https://jangwook.net/en/blog/en/websocket-bfcache-eligibility-remeasure) *(jangwook.net)*
  > Historically, pages holding active WebSocket connections (such as chat widgets, live sports scores, or financial tickers) were disqualified from entering the browser's \*\*Back/Forward Cache (BFCache)\*\* Navigating away forced the browser to discard the...
- [Microsoft Edge Browser Policy Documentation BackForwardCacheForWebSocketsAllowed \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/backforwardcacheforwebsocketsallowed) *(learn.microsoft.com)*
  > Microsoft Edge Browser Policy Documentation BackForwardCacheForWebSocketsAllowed \| Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the latest f...
- [appspot.com](https://polymer10-samples-dot-cr-status.appspot.com/feature/5068439115923456) *(polymer10-samples-dot-cr-status.appspot.com)*
  > \*\*Enterprise Rollback Policy:\*\* For legacy internal apps lacking reconnection routines, Google and Microsoft provided the enterprise policy \[\`BackForwardCacheForWebSocketsAllowed\`\](https://chromeenterprise.google/policies/#BackForwardCacheForWebSocke...
- [whoooop.co.uk](https://whoooop.co.uk/blog/bfcache-not-working) *(whoooop.co.uk)*
  > \*\*Real-World Impact:\*\* Developer analysis posts examine the transition away from WebSockets being an "Actionable" blocker in Chrome DevTools (\`Application &gt; Back/forward cache &gt; Test back/forward cache\`) \*\*Audit in DevTools:\*\* Use Chrome DevTools und...
- [google.com](https://issuetracker.google.com/issues/472063700/resources) *(issuetracker.google.com)*
  > close()\` to make pages eligible for BFCache
- [chromeenterprise.google](https://chromeenterprise.google/policies/allow-back-forward-cache-for-cache-control-no-store-page-enabled) *(chromeenterprise.google)*
  > \*\*Core Takeaways:\*\* Both Chrome Enterprise and Microsoft Edge policy guides document \`BackForwardCacheForWebSocketsAllowed\`
- [Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16331.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry 'Gilberto Cocchi' via blink-dev Fri, 17 Apr 2026 08:01:0...
- [Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/52nlr8z3Png) *(groups.google.com · 2026-04-17T00:00:00)*
  > Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: Disconnect WebSoc...
- [\[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16328.html) *(mail-archive.com)*
  > \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Chromestatus Fri, 17 Apr 2026 03:17:18 -0700 Contact emails \[ema...
- [Chrome 149 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/149) *(developer.chrome.com · 2026-06-02T00:00:00)*
  > &lt;strong&gt;By closing connections on bfcache entry instead of marking the document as ineligible, the browser allows pages with active WebSockets to be stored and restored&lt;/strong&gt;. Tracking bug #467838624 \| ChromeStatus.com entry \| Spec · Extends the G...
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/en_us/resources/release-notes/?ver=152&featId=5148353408139264) *(chromeenterprise.google)*
  > Chrome is changing its behavior to allow pages with active WebSocket connections to enter the Back/Forward Cache. To achieve this, &lt;strong&gt;active WebSockets are now disconnected when a page is cached&lt;/strong&gt;. Previously, active WebSocket connections...
- [Back/Forward Cache (bfcache) - Patrick Stox](https://patrickstox.com/technical-seo/web-performance/bfcache) *(patrickstox.com · 2026-07-17T00:00:00)*
  > This is an actively improving area — recent Microsoft Edge release notes show an open WebSocket now being closed when a page enters bfcache (rather than blocking caching outright), with reconnection recommended via the pageshow event’s event.persiste...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16331.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) Re: \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry 'Gilberto Cocchi' via blink-dev Fri, 17 Apr 20...
- [Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](https://groups.google.com/a/chromium.org/g/blink-dev/c/52nlr8z3Png) *(groups.google.com · 2026-04-17T00:00:00)* *(Cites: `https://chromestatus.com/feature/5068439115923456`)*
  > Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Web-Facing Change PSA: Disconn...
- [\[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry](http://www.mail-archive.com/blink-dev@chromium.org/msg16328.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12349`)*
  > \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Skip to site navigation (Press enter) \[blink-dev\] Web-Facing Change PSA: Disconnect WebSockets on BFCache entry Chromestatus Fri, 17 Apr 2026 03:17:18 -0700 Contact e...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) *(developer.mozilla.org)*
- [github.com](https://github.com/whatwg/html/issues/12085) *(github.com)*
- [Disconnect WebSockets on BFCache entry · Issue #1262 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1262) *(github.com)*
- [Disconnect WebSockets on BFCache entry · Issue #40 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/40) *(github.com)*
- [Updating the WebSockets guide · mdn · Discussion #817](https://github.com/orgs/mdn/discussions/817) *(github.com)*
- [Back-forward cache meta-bug · Issue #5880 · whatwg/html](https://github.com/whatwg/html/issues/5880) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 54 result(s) found across 11 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5068439115923456" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/whatwg/html/pull/12349" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Disconnect WebSockets on BFCache entry" API` — *Core feature API query* (8 returned)
  - `"Disconnect WebSockets on BFCache entry" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromeenterprise.google" OR "developer.chrome" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Disconnect WebSockets on BFCache entry" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Disconnect WebSockets on BFCache entry" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebSocket" ("BFCache" OR "back/forward cache") reconnect "pageshow"` — *Developer guides and blog posts explaining how to handle WebSocket reconnections upon page restoration from BFCache.* (8 returned)
  - `"event.persisted" "WebSocket" (reconnect OR close) pageshow` — *JavaScript implementation examples showing how to use event.persisted and lifecycle events to recover disconnected WebSocket sessions.* (8 returned)
  - `"BackForwardCacheForWebSocketsAllowed" OR "Disconnect WebSockets on BFCache entry"` — *Browser release notes, policy documentation, and vendor announcements regarding Chrome enabling BFCache for pages using WebSockets.* (8 returned)
  - `site:github.com/whatwg/html ("WebSocket" OR "WebSockets") "back/forward cache"` — *Discussions and standardization debates within the WHATWG HTML repository concerning WebSocket behavior during page cache transitions.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 3 result(s) found — **0 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 4 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5068439115923456)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5068439115923456)
- [Specification](https://github.com/whatwg/html/pull/12349)
- [Chromium Tracking Bug](https://g-issues.chromium.org/issues/467838624)
