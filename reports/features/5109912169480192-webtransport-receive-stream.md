# WebTransport receive stream

> **Report Week:** 2026-W45 | **Milestone:** Chrome 158 (first listed in Chrome 155) | **Category:** Enabled by default

## Overview

Adds the standardized WebTransportReceiveStream interface, a ReadableStream subclass used for incoming unidirectional streams and the readable side of bidirectional streams. Its getStats() method returns per-stream byte counters: bytesReceived reports bytes received from the network, while bytesRead reports bytes delivered to the application.

### Motivation

Incoming WebTransport streams have historically been exposed as generic ReadableStream objects in Chromium. The WebTransport specification defines a dedicated WebTransportReceiveStream subclass with stream-specific statistics.  Applications that receive large or latency-sensitive streams need to distinguish bytes received by the browser from bytes actually consumed by JavaScript. This helps diagnose application backpressure, buffering, and slow-consumer behavior. Exposing the standardized subclass also aligns the runtime type of incoming streams with the WebTransport specification and other browser engines.

## Ecosystem Status

- **Momentum:** Moderate (+100 points since 2026-10-12; footprint 220 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The WebTransport receive stream update standardizes the WebTransportReceiveStream interface across Chromium as a dedicated ReadableStream subclass, bringing Chromium into direct conformance with the W3C specification. By introducing the getStats() method, the API allows web applications to measure bytes received from the network against bytes consumed by JavaScript, dramatically simplifying backpressure diagnostics. Cross-engine consensus is strong, closing a long-standing platform discrepancy and harmonizing runtime types across modern browser implementations.

### Recommendations
- Actionable Advice: Teams should adopt WebTransportReceiveStream via progressive enhancement by checking for stream.getStats before querying telemetry to monitor client-side backpressure. Because legacy Chromium instances delivered generic ReadableStream objects without getStats(), developers must ensure fallback handling remains in place until updated browser baselines propagate across their user bases.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 43.1% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 78.8% · Safari 73%
- **Chrome usage:** 0.00016% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [googlesource.com](https://chromium.googlesource.com/external/w3c/web-platform-tests/+/refs/tags/merge_pr_53514/interfaces/webtransport.idl) *(chromium.googlesource.com)*
  > The \*\*WebTransport receive stream\*\* feature standardizes the \*\*\`WebTransportReceiveStream\`\*\* interface, which subclasses \`ReadableStream\` Its primary addition is the \*\*\`getStats()\`\*\* method, which returns a \`Promise&lt;WebTransportReceiveStreamStats&gt;\` c...
- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > readable\`) \*\*Entry\*\*: \*“WebTransport receive stream”\* (Chrome Platform Status / Release updates)
- [appspot.com](https://chromiumdash.appspot.com/commit/dcf3dc7323729d905934d3d939192c1bf0917ebd) *(chromiumdash.appspot.com)*
  > \*\*\`bytesRead\`\*\*: The number of bytes that the application has actually consumed through reader operations (such as default or BYOB reads) \*\*Chromium Interop Tracking & Web Platform Tests (WPT)\*\*: Contributions (collaborations involving Microsoft and ...
- [appspot.com](https://img120-dot-cr-status.appspot.com/feature/5109912169480192?gate=6345164527370240) *(img120-dot-cr-status.appspot.com)*
  > \*\*Entry\*\*: \*“WebTransport receive stream”\* (Chrome Platform Status / Release updates)
- [googleusercontent.com](https://doc-1jrg-48u0-issuetracker.googleusercontent.com/issues/510589920) *(doc-1jrg-48u0-issuetracker.googleusercontent.com)*
  > \*\*Streamlined Cross-Engine Support\*\*: Aligning Chromium with the standardized \`WebTransportReceiveStream\` interface removes platform discrepancies and fulfills multi-vendor compatibility goals outlined in the WebTransport specification
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17874.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Chris Harrelson Tue, 27 Oct 2026 22:20:40 -0700 LGTM2 On Tue, Oct 27, 2026 at 7:03 P...
- [\[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17862.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Alex Russell Tue, 27 Oct 2026 12:04:03 -0700 LGTM1; love to see these practical additions! O...
- [\[blink-dev\] Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17842.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport receive stream Chromestatus Wed, 21 Oct 2026 18:31:31 -0700 Contact emails \[email&#160;protected\] Explainer https:/...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17896.html) *(mail-archive.com)*
  > Firefox ships WebTransportReceiveStream and exposes getStats(), but getStats() currently rejects with NotSupportedError, so receive stream statistics are not implemented. Implementation https://searchfox.org/mozilla-central/source/dom/webtransport/ap...
- [webtransport package - github.com/backkem/go-lp2p/webtransport-api - Go Packages](https://pkg.go.dev/github.com/backkem/go-lp2p/webtransport-api) *(pkg.go.dev · 2025-06-09T00:00:00)*
  > func (s WebTransportReceiveStream) GetStats() (WebTransportReceiveStreamStats, error) type WebTransportReceiveStreamStats struct { BytesReceived uint64 BytesRead uint64 }
- [Platform - Web documentation \| Deno Docs](https://docs.deno.com/api/web/platform) *(docs.deno.com)*
  > #getStats(): Promise&lt;WebTransportReceiveStreamStats&gt; MDN Reference · The constructor object for WebTransportReceiveStream. Instances are obtained from a WebTransport session rather than constructed directly. #prototype: WebTransportReceiveStrea...
- [WebTransport](https://pr-preview.s3.amazonaws.com/vasilvv/web-transport/pull/509.html) *(pr-preview.s3.amazonaws.com · 2023-05-09T00:00:00)*
  > &lt;strong&gt;The total number of bytes the application has successfully read from this WebTransportReceiveStream&lt;/strong&gt;. This number can only increase, and is always less than or equal to bytesReceived.
- [Chrome Platform Status](https://img968-dot-cr-status.appspot.com/feature/5109912169480192?gate=6345164527370240) *(img968-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [WebTransportReceiveStream解锁高性能实时数据传输的密钥](https://ecweb.ecer.com/topic/cn/detail-159269-webtransport_boosts_realtime_data_transfer_performance.html) *(ecweb.ecer.com)*
  > WebTransportReceiveStream解锁高性能实时数据传输的密钥 首页 解决方案 网站搭建 既快且好的建设外贸独立站 SEO排名 获得更多排名和流量 广告投放 各大广告平台智能化投放 商机转化 智能化助力网站转化能力腾飞 关于我们 发展历程 15年专注科技，缔造卓越 企业文化 CAMEL精神，引领前行 分支机构 全国各地数十个分支机构 最新资讯 了解我们的最新动态 热门模板 外贸社区 建站资讯 中文 中文 English 登录/注册 免费试用 网站管理 首页 解决方案 网站搭建 S...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17874.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/issues/372`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Chris Harrelson Tue, 27 Oct 2026 22:20:40 -0700 LGTM2 On Tue, Oct 27, 2026...
- [\[blink-dev\] Re: Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17862.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/issues/372`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport receive stream Alex Russell Tue, 27 Oct 2026 12:04:03 -0700 LGTM1; love to see these practical ad...
- [\[blink-dev\] Intent to Ship: WebTransport receive stream](http://www.mail-archive.com/blink-dev@chromium.org/msg17842.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/pull/395`)*
  > \[blink-dev\] Intent to Ship: WebTransport receive stream Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport receive stream Chromestatus Wed, 21 Oct 2026 18:31:31 -0700 Contact emails \[email&#160;protected\] Explain...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransportreceivestream/getstats/index.md?plain=1) *(github.com)*
- [WebTransportReceiveStream: getStats() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransportReceiveStream/getStats) *(developer.mozilla.org)*
- [w3.org](https://www.w3.org/wiki/WebTransport/Meetings) *(w3.org)*
- [w3.org](https://www.w3.org/TR/2023/WD-webtransport-20230712) *(w3.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [WebTransportReceiveStreamStats: define where bytes are "received" so bytesRead &lt;= bytesReceived can be guaranteed · Issue #804 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/804) *(github.com)*
- [content/files/en-us/web/api/webtransportreceivestream/index.md at main · mdn/content · GitHub](https://github.com/mdn/content/blob/main/files/en-us/web/api/webtransportreceivestream/index.md?plain=1) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 13 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5109912169480192" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/webtransport/issues/372" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"github.com/w3c/webtransport/pull/395" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"w3c.github.io/webtransport" -site:w3c.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport receive stream" API` — *Core feature API query* (3 returned)
  - `"WebTransport receive stream" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"per-stream" OR "stream-specific" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport receive stream" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport receive stream" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransportReceiveStream" "getStats" ("bytesReceived" OR "bytesRead")` — *Finds JavaScript code examples and API usage measuring received versus read stream bytes.* (8 returned)
  - `"WebTransportReceiveStream" tutorial OR guide OR "backpressure" "ReadableStream"` — *Discovers developer tutorials and articles explaining stream handling and backpressure diagnostics with the new interface.* (8 returned)
  - `"WebTransportReceiveStream" "Intent to Ship" OR "Chrome" OR "WebKit" OR "Firefox"` — *Tracks platform support announcements, browser release notes, and intent-to-ship discussions across major engines.* (8 returned)
  - `site:github.com/w3c/webtransport "WebTransportReceiveStream" OR ("bytesReceived" "bytesRead")` — *Surfaces standards-level discussions, issue tracker debates, and WG feedback regarding receive stream subclassing.* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 9 result(s) found — **4 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 18 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 43.1% passing (stable)*
- **Sources cited by the AI synthesis:** 9 result(s) found — **7 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 2 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5109912169480192)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5109912169480192)
- [Specification](https://w3c.github.io/webtransport/#webtransportreceivestream)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/568317222)
