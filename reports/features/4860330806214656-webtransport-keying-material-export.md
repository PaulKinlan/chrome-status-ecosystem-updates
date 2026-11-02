# WebTransport keying material export

> **Report Week:** 2026-W45 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Adds WebTransport.exportKeyingMaterial(), which allows an application to derive cryptographic keying material bound to an established WebTransport session.  The method accepts application provided binary label and context values and a requested output length and returns a Promise&lt;Uint8Array&gt;. Chromium supports label and context values up to 255 bytes and output lengths from 1 through 4096 bytes.  For WebTransport over HTTP/3, Chromium includes the WebTransport CONNECT stream ID in the TLS exporter context. This ensures that separate WebTransport sessions derive different keying material even when they share the same underlying HTTP/3 connection.

### Motivation

Applications sometimes need cryptographic keying material bound to an authenticated transport session, for example to bind an application protocol, authentication exchange, or application-level encryption context to a WebTransport session without performing an additional key exchange.  TLS exporters derive application-specific secret material without exposing the TLS traffic keys.  WebTransport.exportKeyingMaterial()  exposes this mechanism through application-provided binary label and context values and an explicit output length.  Multiple WebTransport sessions can share one HTTP/3 connection. Chromium therefore includes the WebTransport CONNECT stream ID in the exporter context, ensuring that different sessions derive different keying material even when callers use identical application labels and contexts.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 200 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** WebTransport.exportKeyingMaterial() standardizes session-bound cryptographic key derivation directly from the underlying TLS connection without extra cryptographic handshakes. First originating from W3C WebTransport issue discussions and codified in IETF HTTP/3 transport specifications, the feature is enabled by default in Chromium. Cross-engine consensus on the standard is favorable, though Chromium is currently the first engine to deliver a shipping implementation.

### Recommendations
- Actionable Advice: Teams building custom real-time protocols or media pipelines should adopt the API through feature detection on WebTransport.prototype while maintaining an application-layer key exchange fallback for Firefox and Safari. Avoid transmitting exported keys over application logs and verify that server-side HTTP/3 implementations correctly incorporate the CONNECT stream ID into the exporter context.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`webtransport`](https://webstatus.dev/features/webtransport), shared with 18 other ChromeStatus features*

- Share of tests passing in the web-features group `webtransport` on [wpt.fyi](https://wpt.fyi/results?q=feature:webtransport) (via webstatus.dev) — stable: Chrome 43.1% · Edge 41.6% · Firefox 48.9% · Safari 43.1%; experimental: Chrome 87.6% · Edge 84.7% · Firefox 78.8% · Safari 73%
- **Chrome usage:** 0.00016% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/80))
- **Mozilla:** positive ([standards position](https://github.com/mozilla/standards-positions/issues/167))
- **WebKit:** support ([standards position](https://github.com/WebKit/standards-positions/issues/18))

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/4860330806214656/activity) *(chromestatus.com)*
  > \*\*Observability & DevTools:\*\* Implementation notes emphasize that calls made while connecting remain pending until the session establishes, and that browser DevTools explicitly will \*\*not\*\* inspect or display exported byte arrays to prevent leakage o...
- [googlesource.com](https://chromium.googlesource.com/external/w3c/web-platform-tests/+/refs/heads/epochs/daily/webtransport) *(chromium.googlesource.com)*
  > js\` to ensure uniform byte derivation and bounds checking across browser engines
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17869.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Mike Taylor Tue, 27 Oct 2026 16:37:53 -0700 LGTM2 On 10/27/26 7:00 p...
- [\[blink-dev\] Re: Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17860.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Alex Russell Tue, 27 Oct 2026 12:00:25 -0700 LGTM1 On Wednesday, October 21,...
- [\[blink-dev\] Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17838.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: WebTransport keying material export Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport keying material export Chromestatus Wed, 21 Oct 2026 12:09:31 -0700 Contact emails \[email&#160;protected\] ,...
- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17873.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; \*Security\* &gt;&gt; This API exposes secret-derived material to script and therefore requires &gt;&gt; careful domain separation and lifecycle handling. It does not expose TLS &gt;&gt; traffic keys or allow callers to decrypt WebTra...
- [\[blink-dev\] Intent to Prototype: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17462.html) *(mail-archive.com)*
  > The method accepts application provided binary label and context values and a requested output length and returns a Promise&lt;Uint8Array&gt;. Chromium supports label and context values up to 255 bytes and output lengths from 1 through 4096 bytes. Fo...
- [Re: \[blink-dev\] Intent to Prototype: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17467.html) *(mail-archive.com)*
  > For WebTransport over &gt; HTTP/3, Chromium includes the WebTransport CONNECT stream ID in the TLS &gt; exporter context. This ensures that separate WebTransport sessions derive &gt; different keying material even when they share the same underlying ...
- [Re: \[blink-dev\] Intent to Prototype: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17466.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; Adoption plan &gt;&gt; &lt;strong&gt;Adoption is expected to occur through WebTransport documentation, &gt;&gt; interoperable WPT coverage, and use by protocol implementations that require &gt;&gt; transport-bound keying material&lt;/strong&gt;...
- [WebTransport](https://w3c.github.io/webtransport/index.html) *(w3c.github.io)*
  > Exports keying material from a ... be label.byte length. If labelLength is more than 255, return a promise rejected with a RangeError. &lt;strong&gt;Let contextLength be 0&lt;/strong&gt;....
- [WebTransport API: exportKeyingMaterial \| Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/mdn-api_webtransport_exportkeyingmaterial) *(caniuse.com)*
  > WebTransport API: exportKeyingMaterial \| Can I use... Support tables for HTML5, CSS3, etc Can I use Search ? Settings WebTransport API: exportKeyingMaterial Global usage 1.3% + 0% = 1.3% IE ❌ 6 - 10 : Not supported ❌ 11 : Not supported Edge ❌ 12 - 15...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17869.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Mike Taylor Tue, 27 Oct 2026 16:37:53 -0700 LGTM2 On 10/27...
- [\[blink-dev\] Re: Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17860.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md`)*
  > \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: WebTransport keying material export Alex Russell Tue, 27 Oct 2026 12:00:25 -0700 LGTM1 On Wednesday, O...
- [\[blink-dev\] Intent to Ship: WebTransport keying material export](http://www.mail-archive.com/blink-dev@chromium.org/msg17838.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/webtransport/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Ship: WebTransport keying material export Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: WebTransport keying material export Chromestatus Wed, 21 Oct 2026 12:09:31 -0700 Contact emails \[email&#160;pr...

## 📚 Platform Documentation & Specifications

- [WebTransport: exportKeyingMaterial() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport/exportKeyingMaterial) *(developer.mozilla.org)*
- [expose a TLS Keying Material Exporter / unique value for the TLS session · Issue #411 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/411) *(github.com)*
- [github.com](https://github.com/ietf-wg-webtrans/draft-ietf-webtrans-http3/issues/116) *(github.com)*
- [Release merge\_pr\_63465 · web-platform-tests/wpt · GitHub](https://github.com/web-platform-tests/wpt/releases/tag/merge_pr_63465) *(github.com)*
- [WebTransport.exportKeyingMaterial(): editorial review fixes by hamishwillee · Pull Request #46336 · mdn/content · GitHub](https://github.com/mdn/content/pull/46336) *(github.com)*
- [WebTransport/Meetings - W3C Wiki](https://www.w3.org/wiki/WebTransport/Meetings) *(w3.org)*
- [FF155 WebTransport.exportKeyingMaterial() by hamishwillee · Pull Request #45411 · mdn/content · GitHub](https://github.com/mdn/content/pull/45411) *(github.com)*
- [exportKeyingMaterial: IDL marks context required, but the prose treats it as optional (and WebIDL then forces outputLength optional too) · Issue #774 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/774) *(github.com)*
- [Link "TLS Keying Material Exporter" · Issue #794 · w3c/webtransport · GitHub](https://github.com/w3c/webtransport/issues/794) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 49 result(s) found across 12 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/4860330806214656" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/w3c/webtransport/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"www.w3.org/TR/webtransport" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"WebTransport keying material export" API` — *Core feature API query* (8 returned)
  - `"WebTransport keying material export" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"webtransport.exportkeyingmaterial" OR "application-level" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"WebTransport keying material export" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"WebTransport keying material export" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"WebTransport" "exportKeyingMaterial" (tutorial OR guide OR example)` — *Finds developer tutorials, blog posts, and implementation guides demonstrating WebTransport keying material export.* (8 returned)
  - `"exportKeyingMaterial" "WebTransport" (Uint8Array OR label OR context)` — *Discovers real-world JavaScript and WebIDL code snippets showing parameter usage and syntax for exportKeyingMaterial.* (8 returned)
  - `"WebTransport" "exportKeyingMaterial" ("Intent to Ship" OR Chrome OR Chromium)` — *Tracks platform announcements, Chromium intent to ship threads, and release milestone documentation.* (8 returned)
  - `"WebTransport" "exportKeyingMaterial" (GitHub OR W3C OR IETF OR "TLS exporter")` — *Surfaces specification discussions, issue tracker debates, and RFC design feedback regarding session binding and TLS exporters.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 3 result(s) found — **2 verified relevant**
- **Baseline (baseline.dev):** *newly*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "webtransport", shared with 18 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "webtransport": Chrome 43.1% passing (stable)*
- **Sources cited by the AI synthesis:** 3 result(s) found — **2 verified relevant**

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
