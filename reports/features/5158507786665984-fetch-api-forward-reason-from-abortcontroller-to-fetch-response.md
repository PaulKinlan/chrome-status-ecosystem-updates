# Fetch API: Forward reason from AbortController to fetch Response

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Surfaces the abort reason, if one is provided, to the methods of the Response object and its ReadableStream, rather than just the fetch promise. This fills a gap in our compliance with the standard, surfacing the developer-supplied abort reason everywhere it is intended to.

### Motivation

An AbortController can be passed into fetch to allow a request to be aborted. This is already supported; see https://chromestatus.com/feature/5631483679080448.

When calling abort, you can optionally pass in an "abort reason", and the original fetch promise, if it hasn't already resolved, should be rejected with that reason. This is currently working as intended.

*However*, if the fetch promise *has* resolved (after reading the header), but the body has not yet been fully read, the standard also specifies that the abort reason should propagate to the Response methods such as Response.blob(), as well as the ReadableStream Response.body. This part is not currently working; the relevant Promises instead are rejected with generic AbortErrors.

Firefox at least is compliant here but chromium/Edge/Safari are not. This feature is simply for making chromium compliant with the standard in this regard.

## Ecosystem Status

- **Momentum:** High (140 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chromium is resolving a long-standing Fetch specification compliance gap in Chrome 154 by properly propagating custom abort reasons passed to `AbortController.abort(reason)` to downstream `Response` body methods and `ReadableStream` readers. Previously, while the initial `fetch()` promise rejected with the custom reason, subsequent body reads (such as `response.blob()` or stream chunks) erroneously rejected with generic `AbortError` instances in Blink and WebKit. This change brings Chromium into alignment with the WHATWG Fetch Standard and existing Firefox behavior.

### Recommendations
- Actionable Advice: When consuming `Response` stream bodies or body mixin methods, fall back to checking the active `AbortSignal.reason` property if the rejected error is a generic `AbortError`, ensuring consistent error handling across older Chromium versions and Safari.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "Yes, definitely. Thanks for the bug and tests!..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Fetch API: Forward abort reason to Response](https://github.com/WebKit/standards-positions/issues/711) [closed]

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG9vpNzjCVXdAnLbu9PKD2YDU5r09et5FZ-1rz6Tywmv1slIWbbtt5bpR732ZLi6GTKGJQCO7hsI_YPzpr-fJB-y_TzU9KOuEv4BKLnqrWn9wc4njMHe6UZbvVUiXYT4S9qFSPsfN6v) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [querystack.tech](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEEn2_7vcSxF_xIe4fGHgIKDLUx_ifXhmRWNrSUBPI-ns1DK8J86AKjlQY0c_isWUt6YABK6IqBzGd1c6K_HHiEhKd-smcB49rK7cxpRI1--f1D2dxMeQKT6hdvN_ObdXyQl9p670W9kKiwd3g4IvToLKrPNPhDMDTBRw_h5A2WV9TO69ytCMr5-esxHeFUFCJkEBDtyJGVc-6ADytI66TMj-Jo7w==) *(vertexaisearch.cloud.google.com)*
  > Privacy Terms © 2026 QueryStack Sign in Back AbortController: Cancelling Fetch Requests and Async Work in JavaScript | QueryStack 0 QueryStack JavaScript JavaScript async javascript-async-patterns error-handling fetch web-apis AbortController: Cancel...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE6XTKMwq3Ro7cqX67MW1gvZEou1UafN9NKmYBai77cEVxG46mIz1kdC17lGspmkDxGU6-Ofm3gSmOkeHxxtfrmSXyJSkXLzYfFfR_8MlX6BCIAg94S4PSqepJhQztv9LRdprJxXBX-ZERgW03kJAqhOQs7_idq-Qk1ZSf4vA==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFscCrcn4kmBwNdO3obaKaWcnVRHP4KIh2IqJfj8ax-UnSUglm2xvBEaX0ImRFHrDSbB06ao-Kv6cywj_w0ndLo0ScGWi17sQk7ZhMKoSWoGNBL6lhzynuhqXDzHKXdFwdN5sWAV1KynK3aG6ygbiMAKdWI5AjQatlJTm-cJUOxcJIz) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGerXr_myKTf6DBHvRL9fkYLq8fudi4egCC1wkOb2rE8wst4_aKNeydP4ddoWBUY0jgO8k_7NLN7djqKhVFOHIsm8uZMNCpL3pbYTaLgEcQTxtg5XJv0TLzR4NbQV3BCLSHr030v8NGBAqUjd9OYTMfJ3LHVsiJ07ww1t_5) *(vertexaisearch.cloud.google.com)*
  > Using the Fetch API - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Fetch API Using the Fetch API Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Español Français 日本語 한국어 Por...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFgFc4pl8QmIPS8K5oXrEV6zhqC8KPxdBCD4g92YxwRMdbMYLI4OChGMQMvVc_oGNOgZ3CRPf7ay791nmRMm2oDVqbhtGe0DdaQbkOgj7h1Xt4_Fu0Yow_5mrlSFBU4VCi6uWkznIpsfjWPN4w4Z_CYQWs_7L1T7jenOzHt) *(vertexaisearch.cloud.google.com)*
  > AbortController: abort() method - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs AbortController abort() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 한국어 Русск...
- [jamdesk.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGmqzWwRTUiFqsXp7zTaj_5M4gOi54tUMngfvAEmhYaTBm-dHQItvU9KdBI_umu1mvlObDi8vcPTBsUNi8IcruthTrfm1VOdwXUl_MrWfZBB_0DhyhozegWrKrvANw-LxUGByFVOl6KGX28q99MgAGQP6aB) *(vertexaisearch.cloud.google.com)*
  > AbortController Beyond Fetch: Timeouts, Cleanup, and Signal Composition For AI agents: the site index is at /llms.txt and the full site content at /llms-full.txt. For a markdown version of a page, append .md to its URL or request it with Accept: text...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHPjE6X0t5HcWt5rW5br0V0r4Vaei4wPEtCmelD3tv3rW48u8H928RB9rbWcV2XdPK2JlWR1bxQqhnYVbrMj7OMgPfDK6tsw3AAqGn18z_MF4dWDhQarjNzYrqkTgDoa9nCopOLsePlWdcU) *(vertexaisearch.cloud.google.com)*
  > AbortController abort reason Parameter · Issue #1462 · node-fetch/node-fetch · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...
- [dev.to](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGCi3y2y7UxuBmd0U7UIGSkiD1NG45Mo2Nz53tUlyK_kSnbIq1UA9tVcXwAjq-QCBbdAZTvIwdhvKOOhGxnkB0gExoi8XRsZsJflj_SiqFvQ1jY7wmvS2nIyA2ty6e4320rpZzp2yKUsNBgaogTgsB_xKGnuFcubAcvKEPkfoWrac1bl2V0ln2FvQKH6MK0Jg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary  The Web Platform feature **"Fetch API: Forward reason from AbortController to fetch Response"** addresses a subtle standards-compliance gap in how browsers propagate cancellation details.   While modern browsers have supported passing a
- [youtube.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFySkGcEQshFp9YBv-7bbvSB9MN47KG3d-qWw67qDO1pgYAgp4xt4AfpmDKV4hMgk1vfQ24bfg67jIoxgyObKOGb-3t2rRtXnn7eKVx_oP8lTrCeX57P5e6Vp99f-9LvTEa) *(vertexaisearch.cloud.google.com)*
  > ### Summary  The Web Platform feature **"Fetch API: Forward reason from AbortController to fetch Response"** addresses a subtle standards-compliance gap in how browsers propagate cancellation details.   While modern browsers have supported passing a
- [[blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17191.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; Thanks, &gt;&gt; Dan &gt;&gt; &gt;&gt; On ...m/feature/5631483679080448 When calling abort, &gt;&gt;&gt; <strong>you can optionally pass in an &quot;abort reason&quot;, and the original fetch &gt;&gt;&gt; promise if it hasn&#x27;t r...
- [Re: [blink-dev] Re: Intent to Ship: Fetch API: Forward reason from AbortController to fetch Response](http://www.mail-archive.com/blink-dev@chromium.org/msg17242.html) *(mail-archive.com)*
  > Thanks, Dan On Wednesday, August ... https://chromestatus.com/feature/5631483679080448 <strong>When calling abort, you can optionally pass in an &quot;abort reason&quot;, and the original fetch promise if it hasn&#x27;t resolved should be rejected wi...

## 📚 Platform Documentation & Specifications

- [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) *(developer.mozilla.org)*
- [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 2 result(s) found (query: `""Fetch API: Forward reason from AbortController to fetch Response" API"`) — **2 verified relevant**
- **Google Search Grounding (gemini-3.7-flash):** 10 result(s) found — **10 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found (query: `"Fetch API: Forward reason from AbortController to fetch Response"`) — **12 verified relevant**
- **Hacker News Algolia:** 0 result(s) found (query: `"Fetch API: Forward reason from AbortController to fetch Response"`) — **0 verified relevant**
- **Standards Positions:** 1 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 3 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5158507786665984)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5158507786665984)
- [Specification](https://fetch.spec.whatwg.org)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/502133195)
