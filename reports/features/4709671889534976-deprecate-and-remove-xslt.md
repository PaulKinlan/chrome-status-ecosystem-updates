# Deprecate and remove XSLT

> **Report Week:** 2026-W40 | **Milestone:** Chrome 152 | **Category:** Origin trial

## Overview

\[XSLT v1.0\](https://www.w3.org/TR/xslt-10/), which all browsers adhere to, was standardized in 1999. In the meantime, XSLT has evolved to v2.0 and v3.0, adding features, and growing apart from the old version frozen into browsers. This lack of advancement, coupled with the rise of JavaScript libraries and frameworks that offer more flexible and powerful DOM manipulation, has led to a significant decline in the use of client-side XSLT. Its role within the web browser has been largely superseded by JavaScript-based technologies, such as JSON and React.  Chromium uses the \*\*libxslt\*\* library to process these transformations, and \[libxslt was unmaintained\](https://discourse.gnome.org/t/stepping-down-as-libxslt-maintainer/27615) for ~6 months of 2025. Libxslt is a complex, aging C codebase of the type notoriously susceptible to memory safety vulnerabilities like buffer overflows, which can lead to arbitrary code execution. Because client-side XSLT is now a niche, rarely-used feature, these libraries receive far less maintenance and security scrutiny than core JavaScript engines, yet they represent a direct, potent attack surface for processing untrusted web content. Indeed, XSLT is the source of several recent high-profile security exploits that continue to put browser users at risk.   For these reasons, Chromium (along with both other browser engines, Gecko and WebKit) plans to deprecate and remove XSLT from the web platform. The modern web is powered by three major browser engines: \[Blink\](https://www.chromium.org/blink/) (Chromium), \[Gecko\](https://firefox-source-docs.mozilla.org/overview/gecko.html) (Firefox), and \[WebKit\](https://webkit.org/) (Safari). They interpret code to render pages.   For more details, see this \[Chrome for Developers article\](https://developer.chrome.com/docs/web-platform/deprecating-xslt).  From Chrome 158, XSLT will stop functioning on Stable releases.

### Motivation

Security risks for all users outweigh the very small usage of this feature on the open web.

Usage of XSLTProcessor (https://chromestatus.com/metrics/feature/timeline/popularity/79) is fairly volatile, registering somewhere between 0.01% and 0.1% of page loads, averaging around 0.05% over time. These numbers are above the typical 0.001% deprecation threshold. Again, we feel that the increased potential for breakage is balanced by the reduced security risk to 100% of Chromium users. And we are doing everything we can to mitigate this breakage and be proactive in reaching out to potentially affected sites and particularly libraries that might account for significant chunks of the overall usage. In addition, several sites we surveyed that use XSLTProcessor have feature detection code with fallbacks to JS libraries like Saxonica. Of the ~220 sites we've surveyed so far, roughly 72% of them are still functional even with XSLT disabled.

The usage of XSL Processing Instructions (https://chromestatus.com/metrics/feature/timeline/popularity/78) is significantly lower, around 0.001% for the last few years.

## Ecosystem Status

- **Momentum:** High (793 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Chromium, Gecko, and WebKit have aligned to deprecate and permanently remove client-side XSLT (including \`XSLTProcessor\` and XSL processing instructions) to eliminate high-risk memory safety attack surfaces stemming from aging C libraries like \`libxslt\`. Although usage sits well below 0.1% of page loads, it powers critical legacy infrastructure across government, publishing, and enterprise intranets, prompting a staged deprecation targeting stable removal around Chrome 158. Cross-engine consensus firmly favors removal, supported by WHATWG specification updates to retire XSLT from the HTML Living Standard.

### Recommendations
- Actionable Advice: Audit production web applications immediately for \`XSLTProcessor\` invocations or \`&lt;?xml-stylesheet?&gt;\` processing instructions and audit third-party XML sitemap implementations. Teams must migrate workflows to server-side transformation pipelines (such as Saxon or Node-based renderers) or deploy client-side Wasm/JS fallbacks (like SaxonJS) before stable browser removal.
- In active Origin Trial in Chrome 152. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @annevk: "WebKit is cautiously supportive. We'd probably wait for one implementation to fully remove support, though if there's a known list of origins that par..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Intent to Deprecate and Remove XSLT" (87 points, 149 comments).

## Standards Positions

- **WebKit:** [Should we remove XSLT from the web platform?](https://github.com/whatwg/html/issues/11523) [open]

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Intent to Deprecate and Remove XSLT](https://news.ycombinator.com/item?id=45779261) — *87 pts, 149 comments*
- 💬 **Hacker News:** [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=45734849) — *3 pts, 1 comments*
- 💬 **Hacker News:** [Intent to Deprecate and Remove: XSLT](https://news.ycombinator.com/item?id=6102357) — *2 pts, 0 comments*
- 🐦 **Twitter / X:** [Chrome for Developers on X: "Chrome 153 is now in beta! Try out new CSS scroll container options, Rust-based XML parsing, declarative camera and microphone HTML elements, and the new WebGPU buffer\_view feature. https://t.co/QVG8pp2SRN" / X](https://x.com/ChromiumDev/status/2093424350036660456) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA/m/yNs4EsD5AQAJ) *(groups.google.com · 2025-11-01T04:31:52Z)*
  > Intent to Deprecate and Remove: Deprecate and remove XSLT Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Deprecate an...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG_mi4UF_Ldknu9QoDTRju_MCnqfih05bXoYKjJUGPh5NSOzKOn5cGQnX8zEsw1ImTlDBwrP1iVFfh-hGmTCHRya7aZSNespAZQ_61hzXHPzzizvU5z4LHa8rKOfkfI9BeGK9f4OV87RVM-XQhTgY3bfyJHbLA=) *(vertexaisearch.cloud.google.com)*
  > ブラウザの安全性を高めるための XSLT の削除 | Web Platform | Chrome for Developers メイン コンテンツにスキップ / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภา...
- [daily.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGYkeIRhgPwwepxPVT5zDdtGBQYSgDKQGdNIuX6-lGWPs0ukDzr4bhEgp7oaCad1RTYv_v-6ky4M3PIdgJ_4w9rQa3l4hy1LtmAlOFKF3IJoLyidMW17qYfokQuDB2R98oP-qEFAaprO6SP5638jb8KWXIlIRHUugtUZ9IcrdVy5w_oWg0=) *(vertexaisearch.cloud.google.com)*
  > Chromium&#x27;s Plan to Deprecate and Remove XSLT | daily.dev Collection Subscribe Chromium&#x27;s Plan to Deprecate and Remove XSLT # webassembly # web-security # chromium Last updated Nov 05, 2025 • 2 sources Comment Bookmark Copy Share your though...
- [simonwillison.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEHaC_4QOwqUFVb-1ppbujcvAu3HAYUimyDZJK5r8dV2q_00I5RIh3IHxUqXBCZlUiWS6u65fDVjQLlSeca6gLof44tpcQeuQ0gQWLZx7qpAdeCSc0GgvdiUAoWm_CenwUUVWeXWc2BNCY=) *(vertexaisearch.cloud.google.com)*
  > Removing XSLT for a more secure browser Simon Willison’s Weblog Subscribe Sponsored by: Greptile &mdash; AI code reviewers catch bugs at run time and manage your code. Trusted by Nvidia, Netflix, and many more 5th November 2025 - Link Blog Removing X...
- [wikipedia.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHbr-weaJDLirwNvsZ0VNV_3_louggYidaYcodKvSKVweUAhfvTT6guzpKMQH1HtqSC_enkmytjJv6Uq-a1Gm4JVFGlJx6pF6TlqqeI7cKiYNFINxM9D1cyV_9R) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Deprecation  Major browser vendors—**Chromium (Google Chrome, Microsoft Edge)**, **Gecko (Mozilla Firefox)**, and **WebKit (Apple Safari)**—have coordinated to deprecate and remove client-side **XSLT 1.0** from the web platform. T
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGEwAAohJkZ1hiKKUA6lnK9oF0O6t7vewTgIRyL9JqMYaZCrC6stlRPdeGkQPnOFxi_BYpPl7XzFsuMCPCwuiymzWRNqZJOUquFnoiQHfl9WdEjC0EOVo-AhZRMUwVgDO0rnSpudUbZ) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Deprecation  Major browser vendors—**Chromium (Google Chrome, Microsoft Edge)**, **Gecko (Mozilla Firefox)**, and **WebKit (Apple Safari)**—have coordinated to deprecate and remove client-side **XSLT 1.0** from the web platform. T
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE10GVJSk1ifNB3uz7jUeELCL3DHZRl4iJHRlL7UHmCzNO8iFzeIPvt7YXp8i8O-y5pjTqmKYXQvHGKsXDnJmOYxhpW4C20zDSJhStF3vC_HmqZ3yILo47WQep7Fp4SwfueKblzf1y0) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Deprecation  Major browser vendors—**Chromium (Google Chrome, Microsoft Edge)**, **Gecko (Mozilla Firefox)**, and **WebKit (Apple Safari)**—have coordinated to deprecate and remove client-side **XSLT 1.0** from the web platform. T
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH4_YqGgS-6LDbhcLBMtF70OrA04gXd--ViXzT9mdY6o5u7qxSzn1OV-3rnFDBjTbD4BfbdGjXDEPY8wO4km3gKm_zkVc60XtXdA7wD7D5GFrj6MnK1tGqGvy246ZBHoz0lSP8GyOthixRN9qgmraRxmThx1Q==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Deprecation  Major browser vendors—**Chromium (Google Chrome, Microsoft Edge)**, **Gecko (Mozilla Firefox)**, and **WebKit (Apple Safari)**—have coordinated to deprecate and remove client-side **XSLT 1.0** from the web platform. T
- [web-standards.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGz0D_0KHEvGKbKU7dD8wl-SChs1_CRo2lBuPY3OOiSewj6DXaheTiFN68suCslf1_nTLiJ_hRlEPTXfgbLGoEpvYb0ehAoLF6s1OVNYJVWBmv1Sh424C64lheNPVJZsSDUp_o_o6EdDAJA8L8f-A==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Deprecation  Major browser vendors—**Chromium (Google Chrome, Microsoft Edge)**, **Gecko (Mozilla Firefox)**, and **WebKit (Apple Safari)**—have coordinated to deprecate and remove client-side **XSLT 1.0** from the web platform. T
- [jakearchibald.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGillE1fxdqIcCliXasbQwGqjo8drxp-rHNmrTtNNpbpTJ6ZDCG2fuXanbFjwoaEJVqMg9u12uMtTErcaf6p0wzG8jxBysB-Y8V6C62QWhsT2SvGefKquOJFBexxHTpS1zvuDxC7LJWT5MBwaHfQgkk-vmEhLPPhdpYt9U=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Deprecation  Major browser vendors—**Chromium (Google Chrome, Microsoft Edge)**, **Gecko (Mozilla Firefox)**, and **WebKit (Apple Safari)**—have coordinated to deprecate and remove client-side **XSLT 1.0** from the web platform. T
- [aras.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHdJ6NC3STqwWAOzpqPdHU74QFRR7EKJsnCx7jitm0Kls8BOF1xiwNVgJ8PmDa6l5r5fju5I-i51ysUschUxsJOjJiYeL3EEGcK6miHGtSsf-4c-2PVKYoR5g439kfzeIa4O77y9rtXTxaEckuSMWuk7NVDSCd8c0FsbHXLFyIX8NcGEpuL_q6nBP4cHiI1ZCHr59ITrQ==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Deprecation  Major browser vendors—**Chromium (Google Chrome, Microsoft Edge)**, **Gecko (Mozilla Firefox)**, and **WebKit (Apple Safari)**—have coordinated to deprecate and remove client-side **XSLT 1.0** from the web platform. T
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFmuBWJnr5zqUafLGtubLKWdPPFmgI6ee7p5CJLMMHyoGK3aNP4nzC26qGHr98CBbqVplqgZwsDP90Exw0KWQ2lanSRIpltiZ03cOxFYH2WpvIgDeA5H3pT-ECBl6AYCPDg) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Deprecation  Major browser vendors—**Chromium (Google Chrome, Microsoft Edge)**, **Gecko (Mozilla Firefox)**, and **WebKit (Apple Safari)**—have coordinated to deprecate and remove client-side **XSLT 1.0** from the web platform. T
- [ycombinator.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGLpmRYLIRQkMY-jSvism2DYhEBCFnAnyKshIKbWwJ9qIa48wckYsiNeOPG1jud6ntBuH0vqo4ntgB-GSTEb5iR8VpS7pS5DYThrsP_pmTOn2ZCzbF7P_5jztP7HxgCLN83VTo=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Deprecation  Major browser vendors—**Chromium (Google Chrome, Microsoft Edge)**, **Gecko (Mozilla Firefox)**, and **WebKit (Apple Safari)**—have coordinated to deprecate and remove client-side **XSLT 1.0** from the web platform. T
- [thenewstack.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG1O5tjHwWtvLsuub_8D8h-iKlddo4HHFVPyuxwVtDfASTE6yQBMnwbZS_6mosSaDeR1xVv0t5kgxw4pw-Vx8Uq_1IBBL7cgs5HqVjLKYzeRfq0_UPD_i8IkuhJ_V1aiAaz97anyNxe1uWRyxMAoXTEh_2C2zrNDECbFrnB5TpQVFVVTWV3) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Deprecation  Major browser vendors—**Chromium (Google Chrome, Microsoft Edge)**, **Gecko (Mozilla Firefox)**, and **WebKit (Apple Safari)**—have coordinated to deprecate and remove client-side **XSLT 1.0** from the web platform. T
- [wordpress.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFAZMTpdpxIGC5yE9u5al90ESEsSXfaOoUZtNG5f6vmq_jumvhe-LrtyMNuMou2gElvYwBv-Bpbk_txr9oDS5XJ9XCft6PQbLAsCuunp-N9WtBJ4n31BwjHHJ0H1RaULvAp) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Deprecation  Major browser vendors—**Chromium (Google Chrome, Microsoft Edge)**, **Gecko (Mozilla Firefox)**, and **WebKit (Apple Safari)**—have coordinated to deprecate and remove client-side **XSLT 1.0** from the web platform. T
- [acumatica.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFhgqIaydM1wnDnsUtZIPFhUDjq_YONOXt2_KqnDXHmvWR-PMHGf9xKgkyvx2l_4l_91fqmecbmGWTDUt1kQ0HKGedT1FpP68o86SGYe01CUKJtDlz0nsCpud7_BpOlpWApJX502gtRDBQbGSQsyNcWFkLxP5Ydioeh7NNexjNZzqdVtjM6tRIecGZEtWeFLfFjkN5WRWcBQd7_T88UBRGd7lO20B8pC4jzxNbfkyAO4szR3-OM5AY=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Deprecation  Major browser vendors—**Chromium (Google Chrome, Microsoft Edge)**, **Gecko (Mozilla Firefox)**, and **WebKit (Apple Safari)**—have coordinated to deprecate and remove client-side **XSLT 1.0** from the web platform. T
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF4WSJQjXaLV-qRnEaDCZJ9hOOijccRgle7a7wldZ60RL3L8Twjfvv-3l8Sr_552zISog0xta7XJ4H8aO610NR0cq3MnbkSuLGb4PrGxkTLnAG37neisBOAnNiqJp71eTh_3O87sBFzI6gyHgUhC7gOp_qTFTGkWqD1koFZVHjLhVNWOBFCjd-ebovWatwD--dzweatSUcjL9mgzsBGCwX_89n_) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Deprecation  Major browser vendors—**Chromium (Google Chrome, Microsoft Edge)**, **Gecko (Mozilla Firefox)**, and **WebKit (Apple Safari)**—have coordinated to deprecate and remove client-side **XSLT 1.0** from the web platform. T
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGirZBMLNTO2XIPjVcmGcTozbJp8VUSuR6YZTmUWfCsxHqVVUooESKnWlDMGyltUoIak2_umHEWq8zZOWThwlCdxVUw5uZ32u-ZCCPAFFKJ8LnxLCfZkfDSHruoVWzHrRowzCc=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Deprecation  Major browser vendors—**Chromium (Google Chrome, Microsoft Edge)**, **Gecko (Mozilla Firefox)**, and **WebKit (Apple Safari)**—have coordinated to deprecate and remove client-side **XSLT 1.0** from the web platform. T
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHC2kflY5F9QTGRwwZ6-rT_6UBpgB5y4dRsRoHrucyG3jLZXnRDKnqMYHuSjdcj9WgUjmErMZXFPyhl4QlRAAAXsm5pQX8NxpgR9ovk_dF572G31xpq-P8lOYlMPwsAS3KhZQ_ruexPOQUQdmKb3_6pB0mzXep54IiB4DpnB0MSeO9Kl1YowLBrj1-pH6SDRw==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Deprecation  Major browser vendors—**Chromium (Google Chrome, Microsoft Edge)**, **Gecko (Mozilla Firefox)**, and **WebKit (Apple Safari)**—have coordinated to deprecate and remove client-side **XSLT 1.0** from the web platform. T
- [Removing XSLT for a more secure browser \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/deprecating-xslt) *(developer.chrome.com · 2025-10-29T00:00:00)*
  > <strong>Chrome intends to deprecate and remove XSLT from the browser</strong>. This document details how you can migrate your code before the removal in late-2026. Chromium has officially deprecated XSLT, including the XSLTProcessor JavaScript API an...
- [Intent to Deprecate and Remove: Deprecate and remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA) *(groups.google.com · 2025-10-24T00:00:00)*
  > The proposed timeline for Chromium is to <strong>deprecate in M143, remove in M155 (except for Origin Trial and Enterprise Policy users), and discontinue the Origin Trial and Enterprise Policy in M164</strong>. See below for more details. ... Securit...
- [Intent to Deprecate and Remove: Deprecate and remove XSLT \| Lobsters](https://lobste.rs/s/r3ckga/intent_deprecate_remove_deprecate) *(lobste.rs · 2025-10-31T00:00:00)*
  > Even if the performance is 10x worse than native it&#x27;s still 100x better than what the most powerful workstations could provide during the heyday of XML+XSLT as a publishing format. You could even run the whole thing through wasm2c or w2c2 and pu...
- [Chromium's Plan to Deprecate and Remove XSLT \| daily.dev](https://app.daily.dev/posts/chromium-s-plan-to-deprecate-and-remove-xslt-dhq8zbv55) *(app.daily.dev · 2025-11-05T17:26:05)*
  > Chromium will deprecate and remove XSLT support <strong>between December 2025 (M143) and August 2027 (M164)</strong> due to security vulnerabilities in libxslt and minimal...
- [Deprecate and remove XSLT](https://chromestatus.com/feature/4709671889534976?gate=5156253931929600) *(chromestatus.com)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [Deprecate and remove XSLT - Chrome Platform Status](https://cr-status.appspot.com/feature/4709671889534976) *(cr-status.appspot.com)*
  > Acceder con GoogleAcceder con Google. Se abre en una pestaña nueva
- [Intent to Deprecate and Remove: XSLT](https://groups.google.com/a/chromium.org/g/Blink-dev/c/zIg2KC7PyH0/m/Rdcb5K-mVecJ) *(groups.google.com)*
  > XSLT is more often used on the server as part of an XML processing pipeline. Server-side XSLT processing will not be affected by deprecating and removing XSLT support in Blink.
- [Michael Tsai - Blog - Removing XSLT From the Web Platform](https://mjtsai.com/blog/2025/08/21/removing-xslt-from-the-web-platform) *(mjtsai.com · 2025-08-21T00:00:00)*
  > <strong>Chromium has officially deprecated XSLT, including the XSLTProcessor JavaScript API and the XML stylesheet processing instruction</strong>. We intend to remove support from version 155 (November 17, 2026). The Firefox and WebKit projects have...
- [Previous release notes - Chrome Enterprise and Education Help](https://support.google.com/chrome/a/answer/10314655?hl=en-GBAfter) *(support.google.com)*
  > Indeed, XSLT is the source of several recent high-profile security exploits that continue to put browser users at risk. For these reasons, <strong>Chromium (along with both other browser engines) plans to deprecate and remove XSLT from the web platfo...
- [Chrome Enterprise and Education release notes - Chrome browser - Chrome Enterprise and Education Help](https://support.google.com/chrome/a/answer/7679408?hl=en_PH&co=CHROME_ENTERPRISE._Product%3DChromeBrowser) *(support.google.com)*
  > Indeed, XSLT is the source of several recent high-profile security exploits that continue to put browser users at risk. For these reasons, <strong>Chromium (along with both other browser engines) plans to deprecate and remove XSLT from the web platfo...
- [XSLT Debate Leads to Bigger Questions of Web Governance - The New Stack](https://thenewstack.io/xslt-debate-leads-to-bigger-questions-of-web-governance) *(thenewstack.io · 2025-09-02T13:16:43)*
  > Even with enthusiastic agreement from Firefox and more muted support from WebKit, it took over a year to remove them from Chrome, Edge and the spec — and even then a deprecation trial and enterprise policy gave developers extra time to make changes. ...
- [The tangled web of XSLT browser support \[LWN.net\]](https://lwn.net/Articles/1034560) *(lwn.net · 2025-08-27T00:00:00)*
  > Google has sought to drop support for XSLT a few times. <strong>In 2013, Adam Barth notified the Blink development list of an intent to deprecate and remove XSLT from the browser engine</strong>.
- [Chrome is removing XSLT on November 17, 2026: what breaks and what to do \| XSLT Playground](https://xsltplayground.com/blog/posts/chrome-removing-xslt-what-to-do) *(xsltplayground.com)*
  > Quick answer: <strong>Chrome removes built-in XSLT support in version 158, shipping November 17, 2026</strong>, with deprecation warnings already appearing since Chrome 142–143 (official announcement). Both the XSLTProcessor JavaScript API and &lt;?x...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [xslt · Issue #1310 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1310) *(github.com · 2026-08-14T17:30:47)* *(Cites: `https://chromestatus.com/feature/4709671889534976`)*
  > Chromestatus: https://chromestatus.com/feature/4709671889534976 Feature Name: <strong>Deprecate and remove XSLT</strong> Web Feature ID: xslt Chrome Releases: Chrome 152

## 📚 Platform Documentation & Specifications

- [xslt · Issue #1310 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1310) *(github.com)*
- [1990759 - Investigate deprecation and removal of XSLT (deprecate and remove XSLT)](https://bugzilla.mozilla.org/show_bug.cgi?id=1990759) *(bugzilla.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 38 result(s) found across 6 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/4709671889534976" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"Deprecate and remove XSLT" API` — *Core feature API query* (8 returned)
  - `"Deprecate and remove XSLT" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"v1.0" OR "www.w3" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and remove XSLT" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and remove XSLT" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
- **Google Search Grounding (gemini-3.8-flash):** 21 result(s) found — **18 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 3 result(s) found — **3 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 6 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 27 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4709671889534976)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4709671889534976)
- [Chromium Tracking Bug](https://crbug.com/435623334)
