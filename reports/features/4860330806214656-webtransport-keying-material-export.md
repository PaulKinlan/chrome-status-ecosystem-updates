# WebTransport keying material export

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 | **Category:** Enabled by default

## Overview

Adds WebTransport.exportKeyingMaterial(), which allows an application to derive cryptographic keying material bound to an established WebTransport session.  The method accepts application provided binary label and context values and a requested output length and returns a Promise&lt;Uint8Array&gt;. Chromium supports label and context values up to 255 bytes and output lengths from 1 through 4096 bytes.  For WebTransport over HTTP/3, Chromium includes the WebTransport CONNECT stream ID in the TLS exporter context. This ensures that separate WebTransport sessions derive different keying material even when they share the same underlying HTTP/3 connection.

### Motivation

Applications sometimes need cryptographic keying material bound to an authenticated transport session, for example to bind an application protocol, authentication exchange, or application-level encryption context to a WebTransport session without performing an additional key exchange.  TLS exporters derive application-specific secret material without exposing the TLS traffic keys.  WebTransport.exportKeyingMaterial()  exposes this mechanism through application-provided binary label and context values and an explicit output length.  Multiple WebTransport sessions can share one HTTP/3 connection. Chromium therefore includes the WebTransport CONNECT stream ID in the exporter context, ensuring that different sessions derive different keying material even when callers use identical application labels and contexts.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 290 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** WebTransport.exportKeyingMaterial() standardizes session-bound cryptographic key derivation directly from the underlying TLS/QUIC connection, eliminating redundant secondary key exchanges for games and real-time streaming protocols. The API is specified in the W3C WebTransport Candidate Recommendation and shipping in Chromium, with HTTP/3 stream ID isolation baked into the exporter context to ensure multiplexed session safety. Cross-engine consensus is strong at the specification level, though implementation velocity currently varies across browser engines.

### Recommendations
- Actionable Advice: Adopt the API using progressive enhancement by verifying if \`typeof transport.exportKeyingMaterial === 'function'\` on connected WebTransport instances before invoking it. Applications needing cross-browser reach across Safari today must maintain a fallback application-level handshake until WebKit implementation catches up.
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

- [appspot.com](https://img968-dot-cr-status.appspot.com/feature/4860330806214656) *(img968-dot-cr-status.appspot.com)*
  > \*\*\`WebTransport.exportKeyingMaterial()\`\*\* allows web applications to derive session-bound cryptographic keying material directly from an established WebTransport connection without conducting a separate, redundant cryptographic handshake \*\*Eliminatio...
- [januschka.com](https://static.januschka.com/changelog/chromium/i2s/M158.html) *(static.januschka.com)*
  > \`outputLength\` \*(unsigned long)\*: Number of output bytes requested (1 through 4096 bytes) \*\*Return Value:\*\* Returns a \`Promise&lt;Uint8Array&gt;\` resolved with the derived pseudorandom bytes
- [chromium.org](https://issues.chromium.org/556304550) *(issues.chromium.org)*
  > \*\*HTTP/3 Stream Isolation:\*\* When WebTransport operates over HTTP/3, Chromium and standard implementations inject the WebTransport \`CONNECT\` stream ID into the underlying TLS exporter context The implementation details discuss boundary validations ac...
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*Feature Tracking:\*\* Listed under \*\*Chrome Platform Status: WebTransport keying material export\*\* and targeted across Chrome releases (landing in Chrome M158)
- [web.dev](https://web.dev/blog/web-platform-09-2026) *(web.dev)*
  > \*\*Spec Alignment:\*\* Firefox originally introduced early support for \`exportKeyingMaterial()\` in Firefox 155
- [ietf.org](https://datatracker.ietf.org/meeting/123/materials/slides-123-webtrans-webtransport-slides-ietf-123-03) *(datatracker.ietf.org)*
  > \*\*Candidate Recommendation Updates:\*\* Updates from the W3C WebTransport specification repository and IETF 123 WEBTRANS working group notes document the alignment between W3C WebIDL definitions and RFC 5705 / RFC 8446 TLS exporter semantics
- [chromium.org](https://issues.chromium.org/579026175) *(issues.chromium.org)*
  > \*\*Cross-Browser Test Suites:\*\* Extensive Web Platform Tests (\`web-platform-tests/wpt\`) have been committed across Chromium and Gecko trees to ensure cross-engine compatibility regarding argument validation, stream context scoping, and asynchronous cl...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17869.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Mike Taylor Tue, 27 Oct 2026 16:37:53 -0700 LGTM2 On 10/27/26 7:00 p...
- [\[blink-dev\] Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17838.html) *(mail-archive.com)*
  > Security This API exposes secret-derived material to script and therefore requires careful domain separation and lifecycle handling. It does not expose TLS traffic keys or allow callers to decrypt WebTransport traffic. Chromium uses the fixed TLS exp...
- [\[blink-dev\] Intent to Prototype: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17462.html) *(mail-archive.com)*
  > The method accepts application provided binary label and context values and a requested output length and returns a Promise&lt;Uint8Array&gt;. Chromium supports label and context values up to 255 bytes and output lengths from 1 through 4096 bytes. Fo...
- [\[blink-dev\] Re: Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17860.html) *(mail-archive.com)*
  > &gt; &gt; \*Security\* &gt; This API exposes secret-derived material to script and therefore requires &gt; careful domain separation and lifecycle handling. It does not expose TLS &gt; traffic keys or allow callers to decrypt WebTransport traffic. Chro...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17873.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; \*Security\* &gt;&gt; This API exposes secret-derived material to script and therefore requires &gt;&gt; careful domain separation and lifecycle handling. It does not expose TLS &gt;&gt; traffic keys or allow callers to decrypt WebTra...
- [Re: \[blink-dev\] Intent to Prototype: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17464.html) *(mail-archive.com)*
  > The method accepts application provided binary label and context &gt; values and a requested output length and returns a Promise&lt;Uint8Array&gt;. &gt; Chromium supports label and context values up to 255 bytes and output &gt; lengths from 1 through...
- [Re: \[blink-dev\] Intent to Prototype: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17467.html) *(mail-archive.com)*
  > For WebTransport over &gt; HTTP/3, Chromium includes the WebTransport CONNECT stream ID in the TLS &gt; exporter context. This ensures that separate WebTransport sessions derive &gt; different keying material even when they share the same underlying ...
- [Re: \[blink-dev\] Intent to Prototype: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17466.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; Adoption plan &gt;&gt; &lt;strong&gt;Adoption is expected to occur through WebTransport documentation, &gt;&gt; interoperable WPT coverage, and use by protocol implementations that require &gt;&gt; transport-bound keying material&lt;/strong&gt;...
- [WebTransport](https://w3c.github.io/webtransport/index.html) *(w3c.github.io)*
  > Exports keying material from a TLS Keying Material Exporter for the TLS session uniquely associated with this WebTransport’s underlying connection. When exportKeyingMaterial is called, the user agent MUST run the following steps:
- [Chrome Platform Status](https://img968-dot-cr-status.appspot.com/feature/4860330806214656/activity) *(img968-dot-cr-status.appspot.com)*
  > Chrome Platform Status
- [WebTransport.exportKeyingMaterial — Web APIs \| Spec-Zone.ru](https://en.spec-zone.ru/dom/webtransport/exportkeyingmaterial) *(en.spec-zone.ru)*
  > WebTransport.exportKeyingMaterial — Web APIs \| Spec-Zone.ru Для работы Spec-Zone.ru требуется JavaScript, включите в настройках вашего браузера. WebTransport: exportKeyingMaterial() method Experimental: This is an experimental technology Check the Br...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17869.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Mike Taylor Tue, 27 Oct 2026 16:37:53 -0700 LGTM2 On 10/27...

## 📚 Platform Documentation & Specifications

- [exportKeyingMaterial: IDL marks context required, but the prose treats it as optional (and WebIDL then forces outputLength optional too) · Issue #774 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/774) *(github.com)*
- [WebTransport: exportKeyingMaterial() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/exportKeyingMaterial) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/155) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/160) *(developer.mozilla.org)*
- [WebTransport.exportKeyingMaterial(): editorial review fixes by hamishwillee · Pull Request #46336 · mdn/content · GitHub](https://github.com/mdn/content/pull/46336) *(github.com)*
- [WebTransport](https://www.w3.org/TR/2026/CR-webtransport-20260730) *(w3.org)*
- [expose a TLS Keying Material Exporter / unique value for the TLS session · Issue #411 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/411) *(github.com)*
- [Link "TLS Keying Material Exporter" · Issue #794 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/794) *(github.com)*
- [Fix link for TLS Keying Material Exporter by jan-ivar · Pull Request #796 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/pull/796) *(github.com)*
- [\[HTTP\] Support ExportKeyingMaterial for WebTransport · Issue #46281 · mdn/content · GitHub](https://github.com/mdn/content/issues/46281) *(github.com)*
- [Should exportKeyingMaterial return Uint8Array? · Issue #727 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/727) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 55 result(s) found across 13 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/4860330806214656" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport keying material export" API` — *Core feature API query* (8 returned)
  - `"WebTransport keying material export" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webtransport.exportkeyingmaterial" OR "application-level" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport keying material export" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport keying material export" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"exportKeyingMaterial" WebTransport tutorial OR guide` — *Finds developer guides and tutorials explaining how to use WebTransport's keying material exporter.* (4 returned)
  - `"WebTransport" "exportKeyingMaterial" (Uint8Array OR label OR context)` — *Locates real-world JavaScript code snippets and implementation examples calling exportKeyingMaterial.* (8 returned)
  - `"WebTransport.exportKeyingMaterial" OR "exportKeyingMaterial" Chromium "intent to ship" OR "Chrome Platform Status"` — *Tracks browser vendor release notes, intent to ship announcements, and platform implementation status.* (6 returned)
  - `site:github.com/w3c/webtransport "exportKeyingMaterial" OR "keying material"` — *Discovers working group discussions, issue threads, and consensus regarding the API design in the official repository.* (5 returned)
  - `"WebTransport" "exportKeyingMaterial" (TLS exporter OR authentication OR encryption)` — *Surfaces architectural deep dives and security write-ups on binding application-layer encryption or authentication to WebTransport sessions.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **2 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 18 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 51.1% passing (stable)*
- **Sources cited by the AI synthesis:** 10 result(s) found — **7 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 15 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4860330806214656)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4860330806214656)
- [Specification](https://www.w3.org/TR/webtransport/#dom-webtransport-exportkeyingmaterial)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/556304550)
