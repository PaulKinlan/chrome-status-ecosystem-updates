# WebTransport draining

> **Report Week:** 2026-W42 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

WebTransport.draining is a promise that resolves when the server indicates that the WebTransport session will be gracefully retired. Applications can use this signal to establish a replacement session while existing streams and the current session remain usable.

### Motivation

A WebTransport server may need to retire a session for maintenance, load balancing, deployment, or connection-lifetime management. Without a draining signal, an application learns about this only when the session closes, which can cause an avoidable interruption while a replacement connection is established. The draining promise gives the application advance notice without changing the lifetime or usability of the current session.

## Ecosystem Status

- **Momentum:** Moderate (footprint 185 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** WebTransport.draining addresses a critical operational gap in HTTP/3 connections by providing an advance promise signal when a server gracefully retires a session, allowing clients to pre-warm replacement sessions without interrupting in-flight streams. While core WebTransport has achieved baseline cross-browser status, the draining attribute is an emerging refinement currently in developer trials behind the WebTransportDraining flag in Chromium and supported by updated W3C specifications. All major engine vendors share consensus on its utility for production networking, though full multi-engine deployment is still converging.

### Recommendations
- Actionable Advice: Adopt WebTransport.draining progressively via property checks ('draining' in transport) to spawn seamless replacement sessions when supported. Production deployments must continue relying on standard connection close and error listeners as primary fallbacks until cross-browser availability stabilizes.
- Standards Activity (Mozilla): Latest discussion from @ddragana: "I was looking into this I was going to mark it \`worth prototyping\`. I do have some comments.  I would like see the new WebSocketStream and WebTranspor..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [WebTransport](https://github.com/mozilla/standards-positions/issues/167) [closed]

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 48.6% · Edge 48.6% · Firefox 67.6% · Safari 44.8%; experimental: Chrome 92.4% · Edge 87.6% · Firefox 63.8% · Safari 80%
- **Chrome usage:** 0.000088% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > - Pre-emptively opening a replacement \`WebTransport\` session in parallel - Allowing existing bidirectional and unidirectional streams to finish processing without interruption
- [appspot.com](https://f896c59-dot-app-py3-dot-cr-status.appspot.com/feature/6427766428925952?gate=6624315004026880) *(f896c59-dot-app-py3-dot-cr-status.appspot.com)*
  > Chrome for Developers & Chrome Platform Status \* \*\*Sources:\*\* \*Chrome Platform Status ("WebTransport draining")\* & \*Chrome Release Notes\* draining\` into Blink/Chromium
- [googleusercontent.com](https://doc-3io0-4ra0-issuetracker.googleusercontent.com/issues/567785962) *(doc-3io0-4ra0-issuetracker.googleusercontent.com)*
  > \* Chromium issue tracking and Chrome DevTools teams also announced accompanying Chrome DevTools Protocol (CDP) support to display the "draining" state directly inside the \*\*DevTools Network panel\*\*, allowing developers to visually inspect when a sess...
- [rust-dd.com](https://rust-dd.com/post/tako-v2-one-router-from-http-1-1-to-webtransport) *(rust-dd.com)*
  > js WebTransport Ecosystem\* js components) now hook into HTTP/3 \`GOAWAY\` / draining capsules
- [New to the web platform in September \| Blog \| web.dev](https://web.dev/blog/web-platform-09-2026) *(web.dev)*
  > Support for application-level protocol negotiation with the protocols option in the WebTransport() constructor and the WebTransport.protocol property. With support in Chrome, Safari, and now Firefox 155, WebTransport.protocol is Baseline Newly availa...
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3-14) *(datatracker.ietf.org · 2025-10-20T00:00:00)*
  > After sending or receiving either a WT\_DRAIN\_SESSION capsule or a HTTP/3 GOAWAY frame, an endpoint MAY continue using the session and MAY open new WebTransport streams. The signal is intended for the application using WebTransport, which is expected ...

## 📚 Platform Documentation & Specifications

- [WebTransport - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [WebTransport](https://www.w3.org/TR/2023/WD-webtransport-20230405) *(w3.org)*
- [WebTransport API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [github.com](https://github.com/benoitc/erlang-webtransport) *(github.com)*
- [WebTransport: draining property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/draining) *(developer.mozilla.org)*
- [WebTransport.draining docs by hamishwillee · Pull Request #45306 · mdn/content](https://github.com/mdn/content/pull/45306) *(github.com)*
- [WebTransport](https://www.w3.org/TR/webtransport) *(w3.org)*
- [WebTransport/Meetings - W3C Wiki](https://www.w3.org/wiki/WebTransport/Meetings) *(w3.org)*
- [2007160 - Support Draining promise for WebTransport](https://bugzilla.mozilla.org/show_bug.cgi?id=2007160) *(bugzilla.mozilla.org)*
- [Draining WebTransport connections · Issue #432 · w3c/webtransport](https://github.com/w3c/webtransport/issues/432) *(github.com)*
- [No mention of H3 GOAWAY or WT drain · Issue #535 · moq-wg/moq-transport · GitHub](https://github.com/moq-wg/moq-transport/issues/535) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 66 result(s) found across 12 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/6427766428925952" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"w3c.github.io/webtransport" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"WebTransport draining" API` — *Core feature API query* (3 returned)
  - `"WebTransport draining" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webtransport.draining" OR "connection-lifetime" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport draining" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport draining" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransport" "draining" (tutorial OR guide OR "graceful shutdown")` — *Finds technical tutorials, guides, and practical architectural patterns for handling graceful session drainage in WebTransport.* (8 returned)
  - `"WebTransport" ("await transport.draining" OR "draining.then")` — *Discovers real-world JavaScript code snippets and implementation examples that consume the WebTransport.draining promise.* (8 returned)
  - `"WebTransport" "draining" ("Intent to Ship" OR "Chrome" OR "Chromium" OR "Firefox")` — *Tracks browser vendor release notes, implementation status, and intent-to-ship threads for WebTransport draining.* (0 returned)
  - `site:github.com/w3c/webtransport OR site:github.com/w3c/webtransport/issues "draining"` — *Surfaces specification discussions, developer feedback, and edge-case debates around WebTransport session drainage semantics.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **2 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 16 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 48.6% passing (stable)*
- **Sources cited by the AI synthesis:** 8 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 12 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6427766428925952)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6427766428925952)
- [Specification](https://w3c.github.io/webtransport/#dom-webtransport-draining)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/564353368)
