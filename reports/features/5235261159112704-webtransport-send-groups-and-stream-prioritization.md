# WebTransport send groups and stream prioritization

> **Report Week:** 2026-W42 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

WebTransport already lets sites send data through WritableStreams. This feature will let applications group outgoing streams, prioritize data within each group, and view sending statistics for streams and groups, while preserving the ability to transfer streams.

### Motivation

Applications commonly send multiple independent streams over one WebTransport session. Existing outgoing streams already support writing, but the plain WritableStream representation does not expose stream grouping, runtime prioritization, or per-stream delivery statistics. This feature adds WebTransportSendGroup to organize related streams, WebTransportSendStream to prioritize them, and getStats() for both individual streams and groups. The new subclass must retain the existing ability to transfer a send stream to a worker or other execution context.

## Ecosystem Status

- **Momentum:** Emerging (footprint 170 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** WebTransport send groups and stream prioritization transitions WebTransport from basic multiplexed data piping to fine-grained egress traffic scheduling via WebTransportSendGroup, sendOrder, and per-stream getStats(). Positioned as an experimental developer trial in Chromium, the API is formal W3C specification work aimed at resolving head-of-line starvation and bandwidth allocation challenges. All major browser engines share positive standards consensus, driven heavily by demands from real-time gaming and Media over QUIC (MoQ) architectures.

### Recommendations
- Actionable Advice: Web development teams working on real-time protocols should evaluate and benchmark send groups behind Chrome developer flags using feature detection on WebTransport.prototype.createSendGroup. Production deployments should continue maintaining application-level queuing fallbacks until cross-browser implementations and Interop parity stabilize.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 16 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 48.6% · Edge 48.6% · Firefox 67.6% · Safari 44.8%; experimental: Chrome 92.4% · Edge 87.6% · Firefox 63.8% · Safari 80%
- **Chrome usage:** 0.000088% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > The Web Platform feature \*\*"WebTransport send groups and stream prioritization"\*\* introduces native, granular scheduling for outgoing multiplexed data in WebTransport connections While WebTransport already supports sending data via \`WritableStream\` i...
- [singhajit.com](https://singhajit.com/how-webtransport-works) *(singhajit.com)*
  > \* \*\*Solving the Multiplexing Scheduling Gap:\*\* Networking blogs (e.g., coverage on \*Codercops\*, \*Ajit Singh\*, and protocol discussions on GitHub) highlight that while WebTransport eliminates TCP head-of-line blocking by multiplexing streams over QUIC...
- [codercops.com](https://blog.codercops.com/blog/webtransport-explained-websocket-alternative-2026) *(blog.codercops.com)*
  > \* \*\*Solving the Multiplexing Scheduling Gap:\*\* Networking blogs (e.g., coverage on \*Codercops\*, \*Ajit Singh\*, and protocol discussions on GitHub) highlight that while WebTransport eliminates TCP head-of-line blocking by multiplexing streams over QUIC...
- [programming-helper.com](https://www.programming-helper.com/tech/webtransport-2026-web-api-multiplexed-transport-revolution) *(programming-helper.com)*
  > \* \*\*Solving the Multiplexing Scheduling Gap:\*\* Networking blogs (e.g., coverage on \*Codercops\*, \*Ajit Singh\*, and protocol discussions on GitHub) highlight that while WebTransport eliminates TCP head-of-line blocking by multiplexing streams over QUIC...
- [googleusercontent.com](https://doc-48mg-1o5g-issuetracker.googleusercontent.com/issues/487117768) *(doc-48mg-1o5g-issuetracker.googleusercontent.com)*
  > Native send groups push this scheduling directly down to the browser's transport and networking layer \* \*\*Standardization and Interoperability:\*\* Tracking across browser vendors (via web-platform-tests and Interop initiatives) aims to ensure uniform ...
- [WebTransport](https://w3c.github.io/webtransport) *(w3c.github.io · 2021-10-01T12:35:03)*
  > Each WebTransportSendGroup also establishes a separate numberspace for evaluating sendOrder numbers. ... A WebTransportSendGroup is always created by the create procedure. ... Aggregates stats from all WebTransportSendStreams grouped under this sendG...
- [Platform - Web documentation \| Deno Docs](https://docs.deno.com/api/web/platform) *(docs.deno.com)*
  > #getStats(): Promise&lt;WebTransportSendStreamStats&gt; MDN Reference · The constructor object for WebTransportSendGroup. Instances are obtained from a WebTransport session rather than constructed directly. #prototype: WebTransportSendGroup · extends...
- [Chrome Platform Status](https://chromestatus.com/feature/5089961022980096) *(chromestatus.com)*
  > Chrome Platform Status

## 📚 Platform Documentation & Specifications

- [WebTransport: createSendGroup() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/createSendGroup) *(developer.mozilla.org)*
- [WebTransportSendStream - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendStream) *(developer.mozilla.org)*
- [WebTransportDatagramsWritable - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportDatagramsWritable) *(developer.mozilla.org)*
- [WebTransportSendStream: sendGroup property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendStream/sendGroup) *(developer.mozilla.org)*
- [WebTransportSendGroup - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendGroup) *(developer.mozilla.org)*
- [WebTransportSendGroup: getStats() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendGroup/getStats) *(developer.mozilla.org)*
- [Stream prioritization · Issue #33 · w3c/webtransport](https://github.com/w3c/webtransport/issues/33) *(github.com)*
- [WebTransportSendStream: sendOrder property](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportSendStream/sendOrder) *(developer.mozilla.org)*
- [Relative prioritization of streams and datagrams · Issue #610 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/610) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 12 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5235261159112704" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport send groups and stream prioritization" API` — *Core feature API query* (0 returned)
  - `"WebTransport send groups and stream prioritization" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (4 returned)
  - `"per-stream" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport send groups and stream prioritization" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (3 returned)
  - `"WebTransport send groups and stream prioritization" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"WebTransport" ("WebTransportSendGroup" OR "sendOrder") tutorial OR "how to"` — *Find practical developer articles and guides on managing stream prioritization and bandwidth using WebTransport send groups.* (1 returned)
  - `"WebTransportSendStream" ("sendOrder" OR "getStats") ("createSendGroup" OR "sendGroup") code example` — *Locate JavaScript code snippets demonstrating WebTransportSendStream creation, prioritization, and stats inspection.* (8 returned)
  - `Chrome "WebTransport" ("send groups" OR "WebTransportSendGroup") "Intent to Prototype" OR "Intent to Ship"` — *Track browser vendor implementation progress, standard tracking, and release timelines for send groups.* (4 returned)
  - `"WebTransport" ("send groups" OR "stream prioritization") (quic OR video OR gaming) site:github.com OR site:news.ycombinator.com` — *Uncover developer discussions and feedback around stream prioritization use cases like real-time gaming and video streaming.* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 16 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 48.6% passing (stable)*
- **Sources cited by the AI synthesis:** 10 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 3 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 14 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5235261159112704)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5235261159112704)
- [Specification](https://www.w3.org/TR/webtransport/#webtransportsendstream)
- [Chromium Tracking Bug](https://crbug.com/568825278)
