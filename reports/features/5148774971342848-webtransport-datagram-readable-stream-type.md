# WebTransport Datagram readable stream type

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 (first listed in Chrome 155) | **Category:** Enabled by default

## Overview

Adds the  WebTransportOptions.datagramsReadableType  constructor option. By default, incoming WebTransport Datagrams are exposed through a default  ReadableStream . Applications that require BYOB reading can request a readable byte stream by setting  datagramsReadableType: "bytes" .

### Motivation

WebTransport Datagrams are discrete messages rather than an undifferentiated byte sequence. A readable byte stream can lose empty Datagrams and can lose message boundaries when BYOB reads use a minimum byte count spanning multiple Datagrams.  Making a default  ReadableStream  the default preserves Datagram boundaries and empty Datagrams. Applications that benefit from BYOB allocation control can explicitly opt into the byte-stream behavior.

## Ecosystem Status

- **Momentum:** Moderate (+110 points since 2026-10-12; footprint 200 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The WebTransport Datagram readable stream type (\`WebTransportOptions.datagramsReadableType\`) standardizes control over whether incoming datagrams are exposed via a message-preserving default stream or an opt-in byte stream supporting zero-copy Bring Your Own Buffer (BYOB) readers. Scheduled to ship enabled by default in Chrome 159, the addition addresses longstanding developer friction around message boundary delineation and empty datagram loss. Engine consensus is exceptionally strong across the board, with active implementation and alignment across Chromium, Gecko, and WebKit.

### Recommendations
- Actionable Advice: Teams building real-time applications should rely on the default message-preserving datagram stream for standard payloads, and conditionally supply \`{ datagramsReadableType: 'bytes' }\` only when explicit BYOB allocation control is necessary. Ensure graceful fallback handling or feature detection when attaching BYOB readers, as support for the byte-stream mode rolls out across stable browser releases.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 51.1% · Edge 48.9% · Firefox 47.5% · Safari 41.8%; experimental: Chrome 87.9% · Edge 87.9% · Firefox 79.4% · Safari 73.8%
- **Chrome usage:** 0.00022% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [openpwa.net](https://openpwa.net/reference/capabilities/webtransport) *(openpwa.net)*
  > \*\*Constructor Option\*\*: \`new WebTransport(url, { datagramsReadableType: "bytes" \| "default" })\` \*\*Default Behavior (\`"default"\`)\*\*: Exposes incoming datagrams through a standard (non-byte) \`ReadableStream\` yielding discrete chunks
- [chromestatus.com](https://chromestatus.com/feature/5148774971342848/activity) *(chromestatus.com)*
  > \*\*Byte-stream Mode (\`"bytes"\`)\*\*: Exposes incoming datagrams as a byte stream (\`ReadableByteStreamController\`), allowing consumers to attach a \*\*Bring Your Own Buffer (BYOB)\*\* reader (\`stream.getReader({ mode: "byob" })\`) MDN notes that attempting to...
- [How to use WebTransport  \|  Capabilities  \|  Chrome for Developers](https://developer.chrome.com/docs/capabilities/web-apis/webtransport) *(developer.chrome.com)*
  > Applications that prioritize memory efficiency (such as low-overhead gaming networks, WebAudio pipelines, or high-throughput media engines) can explicitly opt into \`datagramsReadableType: "bytes"\` to eliminate memory allocation churn via BYOB readers
- [appspot.com](https://lighthouse-ci-staging-dot-cr-status.appspot.com/feature/5148774971342848) *(lighthouse-ci-staging-dot-cr-status.appspot.com)*
  > It resolves the conflict between developers who need \*\*datagram message integrity/framing\*\* and those who require \*\*zero-copy BYOB memory performance\*\* in high-frequency network loops
- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type Chromestatus Mon, 14 Sep 2026 14:16:21 -0700 Contact emails ...
- [\[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17839.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type Chromestatus Wed, 21 Oct 2026 13:52:50 -0700 Contact emails \[email&#16...
- [\[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17861.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type Alex Russell Tue, 27 Oct 2026 12:03:18 -0700 What's the potent...
- [\[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17882.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type 'Monica Chintala' via blink-dev Wed, 28 Oct 2026 07:35:31 -070...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17926.html) *(mail-archive.com)*
  > The API and default-stream &gt;&gt;&gt;&gt;&gt; behavior are defined in the WebTransport specification and covered by WPT. &gt;&gt;&gt;&gt;&gt; Firefox already uses a default non-byte stream when the option is omitted, &gt;&gt;&gt;&gt;&gt; but does n...
- [\[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17891.html) *(mail-archive.com)*
  > The API and default-stream &gt;&gt;&gt; behavior are defined in the WebTransport specification and covered by WPT. &gt;&gt;&gt; Firefox already uses a default non-byte stream when the option is omitted, &gt;&gt;&gt; but does not yet support the expli...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17963.html) *(mail-archive.com)*
  > The API and default-stream &gt;&gt;&gt;&gt;&gt;&gt;&gt; behavior are defined in the WebTransport specification and covered by &gt;&gt;&gt;&gt;&gt;&gt;&gt; WPT. &gt;&gt;&gt;&gt;&gt;&gt;&gt; Firefox already uses a default non-byte stream when the optio...
- [\[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17898.html) *(mail-archive.com)*
  > The API and default-stream &gt;&gt;&gt;&gt; behavior are defined in the WebTransport specification and covered by WPT. &gt;&gt;&gt;&gt; Firefox already uses a default non-byte stream when the option is omitted, &gt;&gt;&gt;&gt; but does not yet suppo...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes) *(chromestatus.com)*
  > By default, incoming WebTransport Datagrams are exposed through a default ReadableStream . &lt;strong&gt;Applications that require BYOB reading can request a readable byte stream by setting datagramsReadableType: &quot;bytes&quot;&lt;/strong&gt; .
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17956.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \*Adoption plan\* &gt;&gt;&gt;&gt;&gt;&gt; Adoption is expected through WebTransport documentation and Interop &gt;&gt;&gt;&gt;&gt;&gt; 2026 visibility. Existing Chromium applications using BYOB readers...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17452.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5148774971342848`)*
  > \[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: WebTransport Datagram readable stream type Chromestatus Mon, 14 Sep 2026 14:16:21 -0700 Conta...
- [\[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17839.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5148774971342848`)*
  > \[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport Datagram readable stream type Chromestatus Wed, 21 Oct 2026 13:52:50 -0700 Contact emails ...
- [\[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17861.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5148774971342848`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type Alex Russell Tue, 27 Oct 2026 12:03:18 -0700 What's ...
- [\[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type](http://www.mail-archive.com/blink-dev@chromium.org/msg17882.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5148774971342848`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport Datagram readable stream type 'Monica Chintala' via blink-dev Wed, 28 Oct 2026 07:...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API) *(developer.mozilla.org)*
- [github.com](https://github.com/vmeansdev/webtransport-bun) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) *(developer.mozilla.org)*
- [\`pullDatagrams\` errors \`datagrams.readable\` on a zero-length datagram when \`datagramsReadableType\` is \`"bytes"\` · Issue #795 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/795) *(github.com)*
- [FF160 WebTransport BYOB datagram readers and datagramsReadableType option by hamishwillee · Pull Request #31030 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/pull/31030) *(github.com)*
- [FF160 WebTransport() datagramsReadableType option and BYOB by hamishwillee · Pull Request #46307 · mdn/content · GitHub](https://github.com/mdn/content/pull/46307) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 48 result(s) found across 12 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5148774971342848" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport Datagram readable stream type" API` — *Core feature API query* (8 returned)
  - `"WebTransport Datagram readable stream type" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webtransportoptions.datagramsreadabletype" OR "byte-stream" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport Datagram readable stream type" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport Datagram readable stream type" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"datagramsReadableType" "WebTransport" "bytes"` — *Real-world JavaScript implementation and constructor code snippets showing WebTransport initialized with datagramsReadableType set to bytes.* (8 returned)
  - `"WebTransport" "datagramsReadableType" "BYOB" OR "getReader"` — *Developer articles, guides, and tutorials explaining how to handle BYOB reads on incoming datagram streams.* (8 returned)
  - `"WebTransport" "datagramsReadableType" "Intent to Ship" OR "Chrome" OR "WebKit"` — *Browser engine intent-to-ship announcements, platform status entries, and adoption tracking across Chromium, WebKit, and Gecko.* (8 returned)
  - `site:github.com/w3c/webtransport "datagramsReadableType" OR "datagrams" "byte stream"` — *W3C specification issues, PRs, and community debates on discrete datagram boundary preservation versus byte stream BYOB allocations.* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 18 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 51.1% passing (stable)*
- **Sources cited by the AI synthesis:** 5 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5148774971342848)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5148774971342848)
- [Specification](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-datagramsreadabletype)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/547572475)
