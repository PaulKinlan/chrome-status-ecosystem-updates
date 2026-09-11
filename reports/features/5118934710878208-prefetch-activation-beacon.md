# Prefetch activation beacon

> **Report Week:** 2026-W37 | **Milestone:** Chrome 151 | **Category:** Origin trial

## Overview

The on-prefetch-activation  HTTP response header enables servers to specify a telemetry endpoint that the browser notifies when a prefetched resource is used for navigation. Developers gain a reliable signal to measure the precision and performance impact of their prefetch strategies.

### Motivation

The API is proposed for a reliable measurement of whether a prefetch page is activated. This allows precise visit statistics for the prefetched page without cache interference.

## Ecosystem Status

- **Momentum:** High (210 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Prefetch Activation Beacon introduces the declarative 'on-prefetch-activation' HTTP response header, allowing servers to receive an automated telemetry ping whenever a prefetched document is actually navigated to by the user. Entering an Origin Trial in Chrome 151 (spanning Chrome 151 to 155), the feature solves longstanding cache interference and analytics inaccuracies when evaluating Speculation Rules prefetch hit rates. Browser consensus remains early, as the proposal is currently incubated in a Chromium explainer repository without formal standards track adoption yet.

### Recommendations
- Actionable Advice: Teams running advanced Speculation Rules prefetching should test the header during the Chrome 151 Origin Trial to audit prefetch accuracy and reduce wasted server resources. Because the feature is server-driven and declarative, it can be tested safely as an additive, non-breaking telemetry signal alongside existing analytics.
- In active Origin Trial in Chrome 151. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHK71PPcuGMokdbkHD_Ty3nYDcbQ_EXt30zz8x3S60Z6qJJc2IU1PYtCAencU1vVzLuFoBBopMLjArhTm8xcW9aBbatXEHt2r0cpev-Vh1b1aBD9fZKL5Hcd-sA6oQh74E7MFsb-LBE) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGInIfFvlF_3wy3BrlZRzLkNr8tGU5eU-TfEyaVywxQ8zlDOg1njiSQR6w11ebFD5BlaLu5ut0e49lyB7yBDcIN7fJ1Ke28TpAW4vqh2-NBz3ZzujdMRXmzsBjWgwQDyAcT6h8pIMYeAAsscn7lJ0ULjaA_GtJnOusToA==) *(vertexaisearch.cloud.google.com)*
  > GitHub - explainers-by-googlers/prefetch-activation-beacon: Reliable prefetch & prerender acitvation reporting regardless of the cache status. · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance se...
- [hatenablog.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF6_fEuL9ZxjyJ1k-1ffCMuSYZq7t0XX85PDs2DGVWWGrIfMzCS9qgDHIMfbA63JBl2f9FEInQ0sqn2OI9P99-qizBwDkVJ6dGvY5n1ZvEeR6ca0mt7VVFlDTTweRAz13RExgdDmaptjjG1Duin) *(vertexaisearch.cloud.google.com)*
  > Prefetchしたリソースが実際に使われたか確認できる Prefetch Activation Beacon API - ASnoKaze blog ASnoKaze blog 2026 - 05 - 19 Prefetchしたリソースが実際に使われたか確認できる Prefetch Activation Beacon API HTTP Web 雑 Chromeの開発者メーリングリストで『 Prefetch Activation Beacon API 』という機能が提案されています。 この機能を...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEkyx5oioSEF6_XmElO3FbhJKw0d76Mipdl_tGljKLj2dJ0l9Txl04Oh_XPYUliclx56-GCdiuRbpHdH6I9o8sKMh2nKuYIpb08xQBkPcEShlJyu4JboA4Ommd84emmKkSpjf42Mn87GmsMGJENDCwav4dCd2skdZ5oM_3THqKdh6DWhnR01ldITvmK_-N6VPj1vtWATPYH-1U44IYyFjW47NkaQvLGoBsK4Q==) *(vertexaisearch.cloud.google.com)*
  > prefetch-activation-beacon/security_and_privacy_questionnaire.md at main · explainers-by-googlers/prefetch-activation-beacon · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFyUZNzDw88HlaoGMRyQS3ky7GOj-0SW8zc7ri3VAxw4S5BdNA7rc2YjO2oMTIxwOWCM9sSXi3TaVQ1Xqn_vDqHYW2qJmSKpSGv-K37Ga4OINvH00iqpZ6ZFJ8r7lQrpcUsLF3R) *(vertexaisearch.cloud.google.com)*
  > Chrome 151 | Release notes | Chrome for Developers Skip to main content / English Nederlands Русский فارسی বাংলা Sign in Release notes Chrome for Developers Docs Release notes Chrome 151 Stay organized with collections Save and categorize content bas...
- [digitalapplied.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGNqna9Ombbfvn5bqZGJuACYUzXZxJcu7NveObuXMR1UCp6PTqfDHed8Xq2bRVFyaROuYpZtC8_XxNDS8aF8n7Vwu1aB9BUOQyBYvsHaTSjze4vTnwixX1d3neFZr32v6s50O87cUr8HfoI9voDE5lHkWUiy4LbmeD1vbp6uxdPqLs=) *(vertexaisearch.cloud.google.com)*
  > Chrome 151 Stable: What Developers Should Note Development New Release 11 min read Published July 29, 2026 370 security fixes · macOS 12 support ends · two new SPA performance entry types Chrome 151 Hits Stable: What Developers Should Actually Note C...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFc-mHcljxiP9GwHBzlR7LzaI2HRK8umGJtVjBdi_HepXcbIOTWVw3Toy9Pbll0FR1DG43qaCbMo98iUoo9kn9uPFzCPa_eva_87msMpPsqhBnLNAEbVYqGNVdF0v4hH0mjeg==) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFdoLB1U4DyU8y7O5Witw4OpO9iJY6r4zJO6b93fBE3M6GJFcbj7itEtM1C2_7NuXSW2mm-SWlVB8GnrROzgTyoSZUA8KiljU-967ny2ghrt0egU4C78a8HqAaIPF4M8-JAaSZXLDXfhm3Dj9rWaj0SCeg_kG_RvZWiSmSUb3aIzCRDZYYNfg==) *(vertexaisearch.cloud.google.com)*
  > Chromium Dash
- [newreleases.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEqPzlGfjlETxg_FH1Ey0-8q-v1FTKU4eNrdV9GW380btnK6QlXciVu_jbeEqLupsb_LFjzvyqncFh1p7OKSLsBftkO-dTG7FBQV02HAKX45DgXkixlW-z--zMhqW-yTAidQgj6tPU24XF1YcoUtQXvzoAwJ73etWQ=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Prefetch Activation Beacon** specification introduces the `on-prefetch-activation` HTTP response header.   * **How it works:** When a server responds to a speculative prefetch request (primarily driven by the modern
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEB2gb4VzN-AO0pLv3vrXE0YcpokmVv8hjJQDj3WLrBKJI7UZGmq8EcfozajBtbZIQp0gpcUALuyvv3ONww1kARalwjxRoZTzsXScn9yK_4ajT0NhYdC69gKdYBJvmS5KUGGo4wKqPYJM71IPQ_5TKgBEZPhRWQKHAI3wjI5abM5QyOtiF0uFjlFG0JI-9cFNiOBg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **Prefetch Activation Beacon** specification introduces the `on-prefetch-activation` HTTP response header.   * **How it works:** When a server responds to a speculative prefetch request (primarily driven by the modern
- [[blink-dev] Re: Intent to Experiment: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16963.html) *(mail-archive.com)*
  > On Wednesday, July 8, 2026 at 9:43:07 ...tivation-beacon &gt; &gt; *Summary* &gt; <strong>The on-prefetch-activation HTTP response header enables servers to specify &gt; a telemetry endpoint that the browser notifies when a prefetched resource &gt; i...
- [[blink-dev] Intent to Experiment: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16952.html) *(mail-archive.com)*
  > *Specification* https://github.com/explainers-by-googlers/prefetch-activation-beacon *Summary* The on-prefetch-activation HTTP response header <strong>enables servers to specify a telemetry endpoint that the browser notifies when a prefetched resourc...
- [[blink-dev] Intent to Prototype: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16520.html) *(mail-archive.com)*
  > *Contact emails* [email protected] *Explainer* https://<strong>github.com/explainers-by-googlers/prefetch-activation-beacon</strong>
- [How to Implement Prefetching Strategies](https://oneuptime.com/blog/post/2026-01-25-implement-prefetching-strategies/view) *(oneuptime.com · 2026-01-25T00:00:00)*
  > import { useQueryClient, useQuery } from &#x27;@tanstack/react-query&#x27;; import { useEffect, useState } from &#x27;react&#x27;; // Prefetch data on mount function Dashboard() { const queryClient = useQueryClient(); // Prefetch data for tabs user m...
- [PreScope: Unleashing the Power of Prefetching for Resource-Constrained MoE Inference](https://arxiv.org/html/2509.23638v1) *(arxiv.org · 2025-09-28T04:27:20)*
  > Table 3 shows the ”hot Top-4” prefetch accuracy: experts are ranked by token volume, and with a second-order sliding window (i.e., a prediction is considered correct if the Top-4 falls within the true Top-6), LLaPor achieves a Top-4 hit rate of <stro...
- [Themis: Software-Defined Hardware Prefetching](https://arxiv.org/html/2608.00259) *(arxiv.org)*
  > To determine which pages have prefetching enabled or disabled, Themis leverages runtime profile information. The profiling logic to obtain page-level accuracy information is implemented in software as a lightweight kernel module, and it requires mini...
- [Sequential Prefetch Cache Sizing for Maximal Hit Rate | IEEE Conference Publication | IEEE Xplore](https://ieeexplore.ieee.org/document/5581604) *(ieeexplore.ieee.org)*
  > We propose a prefetch cache sizing module for use with any sequential prefetching scheme and evaluate its impact on the hit rate. Disk array caches perform sequential prefetching by loading data contiguous to I/O request data into the array cache. If...
- [Toward Intelligent Prefetching: A Survey on Complex Memory Access Prediction Techniques](https://arxiv.org/html/2606.09955) *(arxiv.org)*
  > We can control aggressiveness using AMPM, whereas analyzing the repercussions on performance and bandwidth is done by FDP. In AMPM, performance degradation is considered a factor in regulating the degree of prefetch. FDP regulates the degree to prefe...
- [Prefetch accuracy and coverage of simulated prefetchers | Download Scientific Diagram](https://www.researchgate.net/figure/Prefetch-accuracy-and-coverage-of-simulated-prefetchers_fig3_4245368) *(researchgate.net)*
  > ... contrast to the MC-and the LS-prefetcher, the HS- and the CG-prefetcher carefully qualify members in a group that show highly repeated patterns for prefetching. The benefit of this accuracy is evident in Figure 8. The total memory accesses are cl...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Re: Intent to Experiment: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16963.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/prefetch-activation-beacon`)*
  > On Wednesday, July 8, 2026 at 9:43:07 ...tivation-beacon &gt; &gt; *Summary* &gt; <strong>The on-prefetch-activation HTTP response header enables servers to specify &gt; a telemetry endpoint that the browser notifies when a prefetched resou...
- [[blink-dev] Intent to Experiment: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16952.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/prefetch-activation-beacon`)*
  > *Specification* https://github.com/explainers-by-googlers/prefetch-activation-beacon *Summary* The on-prefetch-activation HTTP response header <strong>enables servers to specify a telemetry endpoint that the browser notifies when a prefetch...
- [[blink-dev] Intent to Prototype: Prefetch activation beacon](http://www.mail-archive.com/blink-dev@chromium.org/msg16520.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/prefetch-activation-beacon`)*
  > *Contact emails* [email protected] *Explainer* https://<strong>github.com/explainers-by-googlers/prefetch-activation-beacon</strong>

## 📚 Platform Documentation & Specifications

- [predictive-fetching/README.md at master · addyosmani/predictive-fetching](https://github.com/addyosmani/predictive-fetching/blob/master/README.md) *(github.com)*
- [Prefetch](https://developer.mozilla.org/en-US/docs/Glossary/Prefetch) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 15 result(s) found across 6 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5118934710878208" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/explainers-by-googlers/prefetch-activation-beacon" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"on-prefetch-activation" OR "prefetch activation beacon" ("Speculation Rules" OR prefetch)` — *Discovers developer guides, tutorials, and technical articles explaining how to measure prefetch success and integrate the activation beacon with the Speculation Rules API.* (2 returned)
  - `"on-prefetch-activation" (header OR HTTP) ("POST" OR endpoint OR beacon)` — *Finds concrete HTTP response header configurations and server-side endpoint implementations for receiving activation beacon signals.* (8 returned)
  - `("prefetch activation beacon" OR "on-prefetch-activation") ("Intent to Prototype" OR "Intent to Ship" OR chromestatus OR WICG)` — *Locates browser engine intent threads, standardization progress in WICG, and Chrome Platform Status tracking for API adoption.* (0 returned)
  - `"on-prefetch-activation" (telemetry OR analytics OR "hit rate" OR precision)` — *Captures performance engineering discussions, analytics architecture setups, and community feedback on tracking prefetch activation precision without cache distortion.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 10 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5118934710878208)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5118934710878208)
- [Specification](https://github.com/explainers-by-googlers/prefetch-activation-beacon)
- [Chromium Tracking Bug](https://b.corp.google.com/issues/499814382)
