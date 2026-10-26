# WebTransport keying material export

> **Report Week:** 2026-W44 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Adds WebTransport.exportKeyingMaterial(), which allows an application to derive cryptographic keying material bound to an established WebTransport session.  The method accepts application provided binary label and context values and a requested output length and returns a Promise&lt;Uint8Array&gt;. Chromium supports label and context values up to 255 bytes and output lengths from 1 through 4096 bytes.  For WebTransport over HTTP/3, Chromium includes the WebTransport CONNECT stream ID in the TLS exporter context. This ensures that separate WebTransport sessions derive different keying material even when they share the same underlying HTTP/3 connection.

### Motivation

Applications sometimes need cryptographic keying material bound to an authenticated transport session, for example to bind an application protocol, authentication exchange, or application-level encryption context to a WebTransport session without performing an additional key exchange.  TLS exporters derive application-specific secret material without exposing the TLS traffic keys.  WebTransport.exportKeyingMaterial()  exposes this mechanism through application-provided binary label and context values and an explicit output length.  Multiple WebTransport sessions can share one HTTP/3 connection. Chromium therefore includes the WebTransport CONNECT stream ID in the exporter context, ensuring that different sessions derive different keying material even when callers use identical application labels and contexts.

## Ecosystem Status

- **Momentum:** Moderate (footprint 220 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** WebTransport.exportKeyingMaterial() standardizes access to session-bound TLS exporter secrets, allowing applications to derive cryptographic keys directly from an authenticated WebTransport session without redundant handshakes. Shipped enabled by default in Chrome 158 and advanced as part of Interop 2026 initiatives, the API enjoys solid architectural consensus between the W3C WebTransport working group and the IETF. While WebTransport overall maintains a niche traffic profile on the open web, protocol engineers and real-time developers view this capability as a vital missing link for application-layer encryption and mutual session binding.

### Recommendations
- Actionable Advice: Web engineering teams building custom transport security or sub-protocol handshakes should feature-detect 'exportKeyingMaterial' on the WebTransport prototype and gate zero-RTT key derivation behind it. For cross-browser reliability today, maintain an application-layer key exchange fallback while verifying that backend HTTP/3 termination proxies correctly hash the stream ID into the exporter context.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 17 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 42.3% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 70.1% · Safari 73%
- **Chrome usage:** 0.00012% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://polymer10-dot-cr-status.appspot.com/feature/4860330806214656) *(polymer10-dot-cr-status.appspot.com)*
  > It allows web applications to derive application-specific, session-bound cryptographic keys directly from the TLS session underlying an established WebTransport connection without exposing the TLS master secret or session traffic keys \*\*Eliminating R...
- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Connection Multiplexing Isolation\*\*: For WebTransport over HTTP/3—where multiple WebTransport sessions may be multiplexed over a single HTTP/3 and QUIC connection—Chromium mixes the WebTransport \`CONNECT\` stream ID into the TLS exporter context \*\*C...
- [chromium.org](https://issues.chromium.org/556304550) *(issues.chromium.org)*
  > \*\*Sources\*\*: \[Chrome Platform Status\](https://chromestatus.com/feature/4860330806214656) and \[Chromium Issue Tracker (Interop 2026)\](https://issues.chromium.org/issues/556304550) \*\*Implementation Background\*\*: Implemented collaboratively by Microsoft...
- [chromestatus.com](https://chromestatus.com/feature/4860330806214656/activity) *(chromestatus.com)*
  > \*\*Security & DevTools Behavior\*\*: Notes on Chrome Platform Status confirm that exported keys are intentionally kept out of standard DevTools log inspectors to prevent accidental disclosure of secret material
- [ietf.org](https://datatracker.ietf.org/meeting/123/materials/slides-123-webtrans-webtransport-slides-ietf-123-03) *(datatracker.ietf.org)*
  > \*\*Sources\*\*: \[W3C WebTransport GitHub Issue #411 / #682\](https://github.com/w3c/webtransport) and \[IETF WebTrans WG Proceedings\](https://datatracker.ietf.org/) \*\*Ecosystem Demand\*\*: Protocol developers and WebRTC/gaming community members pushed for T...
- [\[blink-dev\] Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17838.html) *(mail-archive.com)*
  > Security This API exposes secret-derived material to script and therefore requires careful domain separation and lifecycle handling. It does not expose TLS traffic keys or allow callers to decrypt WebTransport traffic. Chromium uses the fixed TLS exp...
- [\[blink-dev\] Intent to Prototype: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17462.html) *(mail-archive.com)*
  > The method accepts application provided binary label and context values and a requested output length and returns a Promise&lt;Uint8Array&gt;. Chromium supports label and context values up to 255 bytes and output lengths from 1 through 4096 bytes. Fo...
- [Re: \[blink-dev\] Intent to Prototype: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17466.html) *(mail-archive.com)*
  > On Wed, Sep 16, 2026 at 7:34 AM ... &gt;&gt; Summary &gt;&gt; Adds WebTransport.exportKeyingMaterial(), which &lt;strong&gt;allows an application to &gt;&gt; derive cryptographic keying material bound to an established WebTransport &gt;&gt; session&lt;/strong...
- [New to the web platform in September \| Blog \| web.dev](https://web.dev/blog/web-platform-09-2026) *(web.dev)*
  > Support for application-level protocol negotiation with the protocols option in the WebTransport() constructor and the WebTransport.protocol property. With support in Chrome, Safari, and now Firefox 155, WebTransport.protocol is Baseline Newly availa...
- [WebTransport](https://w3c.github.io/webtransport) *(w3c.github.io · 2021-10-01T12:35:03)*
  > Exports keying material from a TLS Keying Material Exporter for the TLS session uniquely associated with this WebTransport’s underlying connection. When exportKeyingMaterial is called, the user agent MUST run the following steps:
- [Re: \[blink-dev\] Intent to Prototype: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17467.html) *(mail-archive.com)*
  > &gt; &gt;&gt; &gt; &gt;&gt; Adoption plan &gt; &gt;&gt; &lt;strong&gt;Adoption is expected to occur through WebTransport documentation, &gt; interoperable WPT coverage, and use by protocol implementations that &gt; require transport-bound keying material&lt;/...
- [Re: \[blink-dev\] Intent to Prototype: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17464.html) *(mail-archive.com)*
  > &gt; \*Contact emails\* &gt; \[email protected\] ... bound to an established WebTransport &gt; session. &lt;strong&gt;The method accepts application provided binary label and context &gt; values and a requested output length and returns a Promise&lt;Uint8Array...
- [WebTransport interface - WebIDLpedia](https://dontcallmedom.github.io/webidlpedia/names/WebTransport.html) *(dontcallmedom.github.io)*
  > \[Exposed=(Window,Worker), SecureContext\] interface WebTransport { constructor(USVString url, optional WebTransportOptions options = {}); Promise&lt;WebTransportConnectionStats&gt; getStats(); \[NewObject\] Promise&lt;Uint8Array&gt; exportKeyingMaterial...

## 📚 Platform Documentation & Specifications

- [WebTransport: exportKeyingMaterial() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/exportKeyingMaterial) *(developer.mozilla.org)*
- [github.com](https://github.com/w3c/webtransport/issues/682) *(github.com)*
- [github.com](https://github.com/w3c/webtransport/issues/411) *(github.com)*
- [Release merge\_pr\_63465 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/releases/tag/merge_pr_63465) *(github.com)*
- [FF155 WebTransport.exportKeyingMaterial() by hamishwillee · Pull Request #45411 · mdn/content](https://github.com/mdn/content/pull/45411) *(github.com)*
- [exportKeyingMaterial: IDL marks context required, but the prose treats it as optional (and WebIDL then forces outputLength optional too) · Issue #774 · w3c/webtransport](https://github.com/w3c/webtransport/issues/774) *(github.com)*
- [\[WebAPI\] Support ExportKeyingMaterial for WebTransport · Issue #45216 · mdn/content](https://github.com/mdn/content/issues/45216) *(github.com)*
- [2007200 - Support ExportKeyingMaterial for WebTransport](https://bugzilla.mozilla.org/show_bug.cgi?id=2007200) *(bugzilla.mozilla.org)*
- [Link "TLS Keying Material Exporter" · Issue #794 · w3c/webtransport](https://github.com/w3c/webtransport/issues/794) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 65 result(s) found across 12 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/4860330806214656" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport keying material export" API` — *Core feature API query* (4 returned)
  - `"WebTransport keying material export" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webtransport.exportkeyingmaterial" OR "application-level" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport keying material export" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport keying material export" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"exportKeyingMaterial" "WebTransport" (example OR snippet OR Uint8Array)` — *Finds practical JavaScript code snippets and implementation syntax demonstrating how to call exportKeyingMaterial on a WebTransport instance.* (8 returned)
  - `"WebTransport" "exportKeyingMaterial" (tutorial OR guide OR walkthrough OR blog)` — *Discovers developer tutorials, deep dives, and explanatory blog posts about exporting TLS keying material in WebTransport.* (8 returned)
  - `"exportKeyingMaterial" WebTransport ("intent to ship" OR Chromium OR support OR status)` — *Tracks browser vendor release notes, Intent to Ship announcements, and platform compatibility milestones.* (5 returned)
  - `"WebTransport" "exportKeyingMaterial" (site:github.com/w3c OR site:news.ycombinator.com OR reddit OR discourse)` — *Surfaces community feedback, developer sentiment, standards debates, and specification issue threads.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **2 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 17 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 42.3% passing (stable)*
- **Sources cited by the AI synthesis:** 7 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4860330806214656)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4860330806214656)
- [Specification](https://www.w3.org/TR/webtransport/#dom-webtransport-exportkeyingmaterial)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/556304550)
