# Opaque origin for data: URLs

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

Chrome 150 updates how Dedicated and Shared Workers handle [data: URLs](https://datatracker.ietf.org/doc/html/rfc2397). Rather than automatically inheriting the security origin of the script or page that created them, these workers will now be assigned a unique opaque origin.

This alignment with the worker [HTML specification](https://www.w3.org/TR/2021/NOTE-workers-20210128/#worker) enhances security by isolating these workers from the creator's same-origin state, preventing them from accessing sensitive data via mechanisms like `BroadcastChannel` or same-origin storage. To maintain correct isolation boundaries, these workers still reside within the same storage partition (for example, by preserving the top-level site or nonce) as their creator.

This security adjustment is enabled by default across desktop and mobile platforms. Administrators can review or verify security boundaries using their centralized configurations. For technical implementation details and specification references, see Step 3 of the [HTML Living Standard Worker Settings](https://html.spec.whatwg.org/multipage/workers.html#script-settings-for-workers).

### Motivation

Currently, Dedicated and Shared Workers created from data: URLs in Chrome inherit the security origin of their creator, which deviates from the HTML specification. This behavior allows these workers to access sensitive same-origin resources, such as BroadcastChannel, LocalStorage, and IndexedDB, potentially leading to data leakage where untrusted or dynamically generated scripts can join a page's same-origin communication state.

This change aligns Chrome with the standard by assigning a unique opaque origin to such workers, ensuring proper security isolation. It also improves interoperability, as other major browser engines already follow the specification by not inheriting the origin for data: URL workers. The implementation maintains necessary isolation boundaries by preserving the creator's storage partition (e.g., top-level site or nonce).

## Ecosystem Status

- **Momentum:** High (410 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Opaque origin for data: URLs is currently Enabled by default in Chrome 150. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGYfk9QZBJQSeK2AgvBDXC5ScXpMATc8Im2FD5B8ys8xjL1AHJ9gcpqacEGaD5yf4HYg-DFRlYy1P4yZV-oOcT48tAkRHZcfER3cgLfxijFyadNCn8QpVVX6uNB-MZoQgWyzEyvaUaq) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHJdLHqEqIsyY_ITdUBbPBB8D3Hd9lEt4wdPhTxh2C9N2nEAsnEPrHmxShCPHTFylc4EdzlYhpa18DVInjwRDV2_PwibILXvty2Tw130fQLnAr26Dhk-5RwxyoOj9rFBGptEtBr) *(vertexaisearch.cloud.google.com)*
  > Chrome 150 | Release notes | Chrome for Developers Skip to main content / Sign in Release notes Chrome for Developers Docs Release notes Chrome 150 Stay organized with collections Save and categorize content based on your preferences. Stable release ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG1xHlO89PQ4DQA06HmD3D5y3UGMSNjLnI4cztDXdhs8H-AWbvJYhljvXu5ApSjd2h4_miCqWTRk1X1rJCIrFr6xxKHz8xxgND3OfznzX9wUuMnbwFCzaHzmQ0TGDLlsSDtOaQfZ-30) *(vertexaisearch.cloud.google.com)*
  > Chrome 150 beta | Blog | Chrome for Developers Ana içeriğe atla / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG1IWyIaZ4oaWFop9cGO5Pyw6T6oG7tfeWp8POWmrhJejPuUnxIZaYjkxavb0GAHYV2EtiJp72_OdEgorB8EeqHElt4w1nas8zWbih9AoAO9wfvqCJw2VdsvbmdS184BpVEJdb1_nxsQzdBZN0NMBK3Bd_82EcM-8IhlM7C9bD4RP7oSd2Kau6vts__PapNyOadvt8DXMvbL7Osa5zFJR7S) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge Browser Policy Documentation DataUrlInWebWorkerOpaqueOriginEnabled | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the latest ...
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGsb1IKELBQQABQ1N5vU3T8G_3AP7v2XF1_m1vX25x1QztxiT0tId74L3CFYmf7exNgnT0knUwOB0A-2C_w5HD8L3fpmDGByfdnQGnye-g-ePWypO1UoivuZJBF8LOJagBKHx7cV6GZmkCJz1nc_JH6tg3oplYfRbEwCaZxkpK4kx6fw8NmaidtUaDYaBxS0OhguQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Starting in **Chrome 150** (and upstream Chromium/Edge), **Dedicated and Shared Workers initialized via `data:` URLs are assigned a unique opaque origin** (serializing as `null`) rather than inheriting the security origin
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHtNXvKa75lKyFLi7nGNEpyPkU3ExuKvmMmZSs0qxgEg3MYZXgxw9Ur580SS4A7TS_bCRmWaeoGjwRbP6aa97iAEi9luTCeA1jLcpB_R0yuPNOSFJfZAIt7fZMI4assF9NrQstLTDskt17ocfAlxgD0iosG) *(vertexaisearch.cloud.google.com)*
  > SharedWorker - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs SharedWorker Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 한국어 Русский 中文 (简体) SharedWorker Baseli...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE4iIoz-leI9t02kMTVSwvYDJDg3cpK66x0UzgmNFKkBqZOS_HyXWW4xaxOBkPMh9kkIP08kKKhKSWsHGcPK8Nt3dCCg_Sy-Wu23UsB24sANRdKoSrTSJYmGvN-FJzewteHwvMcQ-ZC7SG9LlgMXseb_aXGnO1xeODot6REPA==) *(vertexaisearch.cloud.google.com)*
  > data: URLs - URIs | MDN Skip to main content Skip to search Toggle sidebar Web URIs Reference Scheme data: Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Español Français 日本語 한국어 Русский 中文 (简体) 正體中文 (繁體) d...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEXdIFGHDATLalt8REcEEeZ8aqvvARjTrLCsHTEnvvudajU_M_dNu8qha7tXfQAZpU2Iyi8rv6kAIi-sLNcrqBO2ZAZJ00WKIVyyhRJhVNesVgpc0FCV1QIoqB8OPdhn95CHV6pzjTHm7l1MtuAUoPg3IKH2g==) *(vertexaisearch.cloud.google.com)*
  > Worker: Worker() constructor - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Worker Worker() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 Русский 中文 (简体) Work...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHP9UCJPMr18_Y_voKPDZr04DBoDSVWaS0aP48RBQrKyMZzGOvtKES7oeLFB8JvL_LPNnDIPAEqVl1J-5niRktOB7BQ5FAoM0bUVOVTnKWytb8s1KWlDFJIe1cK_Cqt9X8Bl-mfAjzLUNyDQDDDtdFWOO8J-2QRE_DLsj-LulBv2h4PgE-S_l0=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Starting in **Chrome 150** (and upstream Chromium/Edge), **Dedicated and Shared Workers initialized via `data:` URLs are assigned a unique opaque origin** (serializing as `null`) rather than inheriting the security origin
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH7iccWNMme0A8qh8LMJy7NOHEnQ_QsjczkLqNOf44JbmD-C9S7AGpbJJO2NERlDOfsJJWFUhnzPtl-sscVCf1QG1TiFNeZ4z6Wrj2EAtnmexnw5b_vuyeE9TJfhHCWTpM5PMOSMz05j5w75urtFi0FJAGcVwE6TK2s8hPvo9ubyw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Starting in **Chrome 150** (and upstream Chromium/Edge), **Dedicated and Shared Workers initialized via `data:` URLs are assigned a unique opaque origin** (serializing as `null`) rather than inheriting the security origin
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFcPI-L9a_ikaNNUT_b3t4oFzRChFGaFmizBVmNewuSuokDA4wjro83CucczWeZ31argRqH4yyYDc2Btx7lYBEBf9RaN5AyYoj7p1N0_ud1beSJdwksAXnr758ozOzMyoVt1Yx1wXM8RUOAVj1n5Q==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Starting in **Chrome 150** (and upstream Chromium/Edge), **Dedicated and Shared Workers initialized via `data:` URLs are assigned a unique opaque origin** (serializing as `null`) rather than inheriting the security origin
- [medium.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF-lTmtOZeUzbbutiXA50t0koo_oIFr6D5Db0HnW4eV9bqhGXdJg6OuhEfQkMgBPrioTKHD9rwq6pVZzNmCGCxEZJX1piny6SYmMFG_2yiCiLyN9-KK7x9ZyC6hNl66zO9eDMYcwiRmWrlmolfB0sc9ASWU7dcjoFTBkD6c) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Starting in **Chrome 150** (and upstream Chromium/Edge), **Dedicated and Shared Workers initialized via `data:` URLs are assigned a unique opaque origin** (serializing as `null`) rather than inheriting the security origin
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFmW5DbUfR2TLyFv9Nb6QKqWsDlPrgEWKC4SSgv_qhAAlalCxEuVUvm1GuscbztLPFzIH6in9Y_ne0j19fq8n2e84KEtnLM-RqkyO857p_ijE9snOMtdhMl_wsLlVHTZbpu_yy0ENMzJXKi6ioICVM=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Starting in **Chrome 150** (and upstream Chromium/Edge), **Dedicated and Shared Workers initialized via `data:` URLs are assigned a unique opaque origin** (serializing as `null`) rather than inheriting the security origin
- [Web worker - HandWiki](https://handwiki.org/wiki/Web_worker) *(handwiki.org · 2026-02-14T09:42:41)*
  > ↑ 1.0 1.1 1.2 1.3 Web Workers, WHATWG, https://<strong>html.spec.whatwg.org/multipage/workers.html</strong>, retrieved 2023-01-02 · ↑ &quot;HTML Living Standard&quot;. 30 January 2017. https://<strong>html.spec.whatwg.org/multipage/workers.html</stro...
- [HTML Web Workers in Depth](https://medium.com/the-ui-girl/html-web-workers-in-depth-43b1f9b09e77) *(medium.com · 2020-09-03T17:35:12)*
  > Here are a few use cases where web workers will work like a charm · Code syntax highlighting or another real-time text formatting · Spell checker · Background I/O or polling of web services · Image filtering in &lt;canvas&gt; Updating many rows of a ...
- [RE: [EXTERNAL] [blink-dev] Intent to Ship: Opaque origin for data: URL Dedicated and Shared Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16428.html) *(mail-archive.com)*
  > Existing debugging tools for workers and BroadcastChannel remain functional and will reflect the new opaque origin. Will this feature be supported on all six Blink platforms (Windows, Mac, Linux, ChromeOS, Android, and Android WebView)? Yes This feat...
- [Re: [blink-dev] Intent to Ship: Opaque origin for data: URL Dedicated and Shared Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16436.html) *(mail-archive.com)*
  > This behavior <strong>allows these workers to access sensitive same-origin resources, such as BroadcastChannel, LocalStorage, and IndexedDB</strong>, potentially leading to data leakage where untrusted or dynamically generated scripts can join a page...
- [[blink-dev] Intent to Ship: Opaque origin for data: URL Dedicated and Shared Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16425.html) *(mail-archive.com)*
  > Existing debugging tools for workers and BroadcastChannel remain functional and will reflect the new opaque origin. Will this feature be supported on all six Blink platforms (Windows, Mac, Linux, ChromeOS, Android, and Android WebView)? Yes This feat...
- [Intent to Ship: Potentially trustworthy data: urls](https://groups.google.com/a/chromium.org/g/blink-dev/c/Hb1-VLwq54Y) *(groups.google.com)*
  > Either email addresses are anonymous for this group or you need the view member email addresses permission to view the original message · to Frédéric Wang, blink-dev, Chromium Loading Performance · +loading-dev for more visibility. I was asked to rev...
- [Why does Chrome rate a data url as cross origin?](https://stackoverflow.com/questions/41615320/why-does-chrome-rate-a-data-url-as-cross-origin) *(stackoverflow.com · 2017-03-03T00:00:00)*
  > If the Document was generated from a data: URL <strong>A unique opaque origin assigned when the Document is created</strong>.
- [Re: [blink-dev] Intent to Ship: Opaque origin for data: URL Dedicated and Shared Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg16467.html) *(mail-archive.com)*
  > For existing developers who &gt;&gt; intentionally or unintentionally rely on data: URL dedicated and shared &gt;&gt; workers sharing same-origin state, they will need to <strong>migrate to explicit &gt;&gt; communication using postMessage() or use r...
- [Microsoft Edge Browser Policy Documentation DataUrlInWebWorkerOpaqueOriginEnabled | Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/dataurlinwebworkeropaqueoriginenabled) *(learn.microsoft.com · 2026-05-21T20:05:44)*
  > Starting in Microsoft Edge version 149, <strong>Web Workers created from data URLs are assigned a unique opaque origin by default</strong>. This behavior improves security and aligns with the HTML specification by isolating these workers from the pag...
- [Fetch from web worker does not send (same) Origin](https://stackoverflow.com/questions/72091273/fetch-from-web-worker-does-not-send-same-origin/72093968) *(stackoverflow.com)*
  > Access to fetch at &#x27;http://localhost:3000/api/auth&#x27; from origin &#x27;null&#x27; has been blocked by CORS policy: The &#x27;Access-Control-Allow-Origin&#x27; header has a value &#x27;http://localhost:3000&#x27; that is not equal to the supp...
- [Cross Domain Web Worker? [duplicate] - javascript](https://stackoverflow.com/questions/20410119/cross-domain-web-worker) *(stackoverflow.com)*
  > The HTML5 Worker is a fairly new concept and I&#x27;m not sure how same-origin exceptions apply, however, with XmlHttpRequest, it&#x27;s possible to access resources on a different domain if you have control over the the server it runs on.
- [Web Workers 101](https://www.linkedin.com/pulse/web-workers-101-chris-ng) *(linkedin.com · 2018-03-10T13:40:25)*
  > It is noted in the WHATWG HTML Living Standard that &quot;any same-origin URL (including blob: URLs) can be used. <strong>data: URLs can also be used, but they create a worker with an opaque origin</strong>.&quot;
- [Cross Domain Web Workers - javascript](https://stackoverflow.com/questions/23953543/cross-domain-web-workers) *(stackoverflow.com)*
  > Note : <strong>The URI passed as parameter of the Worker constructor must obey the same-origin policy</strong> .
- [Why are cross origin workers blocked and why is the workaround ok?](https://stackoverflow.com/questions/58098143/why-are-cross-origin-workers-blocked-and-why-is-the-workaround-ok) *(stackoverflow.com)*
  > So if they were to allow a &quot;no-cors&quot; request here, you would be able to fetch resources on that server from your Worker, bypassing the cross-origin restrictions. By fetching it first, and then creating a same-origin (blob:URI) or an opaque ...
- [Construct Worker from script loaded from different origin](https://stackoverflow.com/questions/67326425/construct-worker-from-script-loaded-from-different-origin) *(stackoverflow.com)*
  > But if you first create a Blob with importScripts(…) and that same URL, create a blob URL from that, and call new Worker(…) with that blob URL, it’ll work. See stackoverflow.com/a/62914052/441757 and stackoverflow.com/a/60252783/441757 ... No &#x27;A...
- [Why am I seeing "Error - Only secure origins are allowed" for my service worker?](https://stackoverflow.com/questions/41373166/why-am-i-seeing-error-only-secure-origins-are-allowed-for-my-service-worker) *(stackoverflow.com)*
  > A: Service workers are only available to &quot;secure origins&quot; (HTTPS sites, basically) in line with a policy to prefer secure origins for powerful new features. However http://localhost is also considered a secure origin, so if you can, develop...
- [Can a service worker fetch and cache cross-origin assets?](https://stackoverflow.com/questions/54619653/can-a-service-worker-fetch-and-cache-cross-origin-assets) *(stackoverflow.com)*
  > One important thing to take care is, by default, cross origin request would get opaque response—which you can not inspect the headers and body. You can check the status code, however, for opaque response, it is always 0, hence your service worker has...
- [Chrome can't load web worker](https://stackoverflow.com/questions/21408510/chrome-cant-load-web-worker) *(stackoverflow.com)*
  > -1 firsfox will let you do this of course, provided you&#x27;re also using file as a origin (eg. you&#x27;re viewing local file in browser). It&#x27;s just chrome that is broken. 2015-10-29T16:24:46.88Z+00:00 ... Firefox still works (yes from file://...
- [how to use Service Worker to cache cross domain resources if the response is 404?](https://stackoverflow.com/questions/35626269/how-to-use-service-worker-to-cache-cross-domain-resources-if-the-response-is-404) *(stackoverflow.com · 2017-03-15T00:00:00)*
  > but I still get an &quot;opaque&quot; response and I cannot ensure the code is 200. If I cache these unsuccessful responses, it will cause some problem. For example, a chum of network causes a 404 to the cross domain resources, and I cache it, then I...
- [jquery - Why does my JavaScript code receive a "No 'Access-Control-Allow-Origin' header is present on the requested resource" error, while Postman does not? - Stack Overflow](https://stackoverflow.com/questions/20035101/why-does-my-javascript-code-receive-a-no-access-control-allow-origin-header-i) *(stackoverflow.com)*
  > Origin=null is set when you open HTML content from a local directory, and it sends a request. The same situation is when you send a request inside an &lt;iframe&gt;, like in the below snippet (but here the Host header is not set at all) - in general,...
- [Web Workers 101 • Chris Ng](https://chrisrng.svbtle.com/web-workers-101) *(chrisrng.svbtle.com · 2017-01-16T00:00:00)*
  > data: URLs create a worker with an opaque origin. Both the constructor origin and constructor url are compared so the same data: URL can be used within an origin to get to the same SharedWorkerGlobalScope object, but cannot be used to bypass the same...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Web worker - HandWiki](https://handwiki.org/wiki/Web_worker) *(handwiki.org · 2026-02-14T09:42:41)* *(Cites: `https://html.spec.whatwg.org/multipage/workers.html#script-settings-for-workers`)*
  > ↑ 1.0 1.1 1.2 1.3 Web Workers, WHATWG, https://<strong>html.spec.whatwg.org/multipage/workers.html</strong>, retrieved 2023-01-02 · ↑ &quot;HTML Living Standard&quot;. 30 January 2017. https://<strong>html.spec.whatwg.org/multipage/workers....
- [content/files/en-us/web/api/web_workers_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/web_workers_api/index.md?plain=1) *(github.com)* *(Cites: `https://html.spec.whatwg.org/multipage/workers.html#script-settings-for-workers`)*
  > slug: Web/API/Web_Workers_API · ... API&quot;)}}  · **Web Workers** <strong>makes it possible to run a script operation in a background thread separate from the main execution thread of a web application</strong>....
- [Web Workers](https://www.w3.org/TR/2021/NOTE-workers-20210128) *(w3.org · 2021-01-28T00:00:00)* *(Cites: `https://html.spec.whatwg.org/multipage/workers.html#script-settings-for-workers`)*
  > https://www.w3.org/TR/workers/ Latest Editor&#x27;s Draft: https://<strong>html.spec.whatwg.org/multipage/workers.html</strong> ·
- [HTML Web Workers in Depth](https://medium.com/the-ui-girl/html-web-workers-in-depth-43b1f9b09e77) *(medium.com · 2020-09-03T17:35:12)* *(Cites: `https://html.spec.whatwg.org/multipage/workers.html#script-settings-for-workers`)*
  > Here are a few use cases where web workers will work like a charm · Code syntax highlighting or another real-time text formatting · Spell checker · Background I/O or polling of web services · Image filtering in &lt;canvas&gt; Updating many ...

## 📚 Platform Documentation & Specifications

- [content/files/en-us/web/api/web_workers_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/web_workers_api/index.md?plain=1) *(github.com)*
- [Web Workers](https://www.w3.org/TR/2021/NOTE-workers-20210128) *(w3.org)*
- [Worker() constructor - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker) *(developer.mozilla.org)*
- [Worker data: url is opaque cross origin right? · Issue #8986 · whatwg/html](https://github.com/whatwg/html/issues/8986) *(github.com)*
- [HTML Living Standard — Last Updated 25 August 2026 One-Page Version](https://html.spec.whatwg.org/print.pdf) *(html.spec.whatwg.org)*
- [data: URLs](https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/data) *(developer.mozilla.org)*
- [blob: URLs](https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/blob) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 28 result(s) found across 7 planned queries — **26 verified relevant**
  - `"chromestatus.com/feature/6290352295247872" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"html.spec.whatwg.org/multipage/workers.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"data: URL" worker "opaque origin" ("Chrome" OR "Chromium" OR "Intent to Ship")` — *Finds official browser release notes, Chromium Intent to Ship announcements, and platform tracking discussions.* (5 returned)
  - `("new Worker" OR "new SharedWorker") "data:text/javascript" ("BroadcastChannel" OR "localStorage" OR "opaque origin")` — *Surfaces real-world JavaScript code snippets creating workers with data: URLs and attempting same-origin storage or channel access.* (1 returned)
  - `"data: URL" (worker OR webworker) "opaque origin" (security OR migration OR "same-origin")` — *Discovers developer guides, security breakdowns, and migration advice on how worker isolation and opaque origins affect data: URL scripts.* (8 returned)
  - `(site:stackoverflow.com OR site:github.com) "new Worker" "data:" ("opaque origin" OR "SecurityError" OR "cross-origin")` — *Locates community troubleshooting threads, GitHub issues, and bug reports where developers encounter errors due to data: URL worker origin restrictions.* (8 returned)
  - `"script settings for workers" "opaque origin" "data:" (WHATWG OR "HTML Living Standard")` — *Finds standards body debates, WHATWG specification discussions, and cross-browser interoperability tracking around data: worker origin isolation.* (5 returned)
- **Google Search Grounding (gemini-3.7-flash):** 13 result(s) found — **13 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 704 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6290352295247872)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6290352295247872)
- [Specification](https://html.spec.whatwg.org/multipage/workers.html#script-settings-for-workers)
- [Chromium Tracking Bug](https://crbug.com/40051700)
