# Support Long Animation Frames API in Web Workers

> **Report Week:** 2026-W41 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

This feature extends the existing Long Animation Frames (LoAF) API to Web Workers. Today LoAF reports only on the main thread and is anchored to rendering frames, so it cannot observe work that blocks a worker's event loop. With this change, a long task that blocks a worker's event loop is reported as a long-animation-frame entry that is observable from inside the worker via PerformanceObserver, with the usual per-script attribution.  The prototype starts with dedicated workers, reporting a single long task that blocks the worker's event loop. The broader goal is to surface congested moments, intervals where an event loop remains busy and runnable work is delayed. This includes detecting a flood of many small tasks that keeps the event loop busy and reporting it as a long-animation-frame entry, as well as supporting the main thread. This is planned as follow-up work.

### Motivation

Web apps increasingly offload work to Web Workers, but a worker that blocks its own event loop is invisible to today's performance APIs. Workers usually have no rendering lifecycle, so there are no animation frames for LoAF to anchor to, and the main-thread LoAF and Long Tasks APIs cannot observe work running in a worker. As a result, a long task in a worker, which delays incoming message events and any OffscreenCanvas rendering, goes unreported even though it directly degrades responsiveness.

Rather than introduce a new API, we extend LoAF, because detecting a long animation frame and detecting a congested moment are fundamentally the same task: identifying bottlenecks in an event loop and attributing them to the responsible scripts. Reusing the existing API gives developers a single, familiar mechanism for diagnosing blocking work across both documents and workers.

## Ecosystem Status

- **Momentum:** High (149 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Support Long Animation Frames API in Web Workers is currently In developer trial (Behind a flag) in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "How PDO threads work in facial layers 📽️Animation ▫️SMAS / Subcutaneous layer → Barbed threads for lifting ▫️Dermis lay" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [How PDO threads work in facial layers 📽️Animation ▫️SMAS / Subcutaneous layer → Barbed threads for lifting ▫️Dermis lay](https://twitter.com/Lindau66f/status/2107040929660219683) — *by @Lindau66f, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [some customizable features:   keyboard react: have your character pound on the keyboard when you do mouse react: can cre](https://twitter.com/MadamSavvy/status/2106821398333194584) — *by @MadamSavvy, 33 likes/RTs, 2 replies*
- 🐦 **Twitter / X:** [X on X / X](https://twitter.com/tunetheweb/status/1694079281238843893) — *by @tunetheweb, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Matt Perry on X: "Kicking the tires on a 1kb, WAAPI-powered animation API Take a look: https://t.co/Qy4JGFGRkB" / X](https://twitter.com/mattgperry/status/1408688475973488640) — *by @mattgperry, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [tamagui on X: "3. Animations: (via reanimated + moti) support first-class. We have a few ideas that keep it similar to web "transition" for simple cases, look out for an RFC." / X](https://twitter.com/tamagui_js/status/1475935778010062852) — *by @tamagui_js, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Matt Perry (@mattgperry) on X](https://twitter.com/mattgperry/status/1580937285280747521?lang=en) — *by @mattgperry, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Ted Unangst on Twitter: ""Async animation disabled because frame size (3870, 250) is bigger than the viewport (1919, 1067)" That's one hell of a gif! (not really)"](https://twitter.com/tedunangst/status/651852813128089601) — *by @tedunangst, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGIzgVQ7_mjXX0Pay_aT9EdZr-jtoObb3_Uxl0F75lh6CHY6JsKCIu1mQ6SLlaUywVuL6YKmlXzgoMm5xHM0a_QPkAjXYJQUZZjtnHvbj3D8qA4PlchIRZgkZsc8MGbD9rv9_Z76XDPqp-5mN9jIFWzYjgeAvZGMg==) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Executive Summary  Web performance guides (such as on **web.dev** and **developer.chrome.com**) have long recommended offloading heavy computation off the main thread to **Web Workers** to safeguard Interaction to Next Paint (INP). How
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHygCKcuHkjAyF3ri-0BWd3FNdUNA-PD1dHNDHR7KWzzStGZM-gE9IoNCZvHTrhuozbeH_bm-AjS9dfW13WeiF8lgR5vSBuZ8afrKplAGghsoJDQ6NN_ByO5zMO6GA0N36QNMsDO5Ft) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Executive Summary  Web performance guides (such as on **web.dev** and **developer.chrome.com**) have long recommended offloading heavy computation off the main thread to **Web Workers** to safeguard Interaction to Next Paint (INP). How
- [googlesource.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGKVSpasF5_r0i-RHG7qxHFSBL0LLKr77x2juv-Wr6qghdFlZAmXF_KObVSF05-ybtdcYrZO_NEbwAJemyTDP2qFPYH-LO_qPAfFwUJVPcqfT3llikLwBTGdXn0K47hVc0-uv4qaH6BZAR4qSelDwYpH2GT9U47IZK68gUl8isGODr2TEoqv7zw6qLlHlDrth22oOL7R2g0yFjZkPyIM3hmnmfa0atiKGOocXSGuhAH4q9Q4_b0UEab3di9ggnY) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Executive Summary  Web performance guides (such as on **web.dev** and **developer.chrome.com**) have long recommended offloading heavy computation off the main thread to **Web Workers** to safeguard Interaction to Next Paint (INP). How
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH7ngdFZl2bq1F1GH0BRLGSsBszqsMBIAgDeAb0RBfUw_ycBsnYKrrQIgdTxrwxMMjxfRoX1lAqA14F-uEoyfjxcJ3UX-eNq9G_yFDhbRmjOLUoRcACShJma-5zi_qbqWfNSjyHM8kcaVoi) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Executive Summary  Web performance guides (such as on **web.dev** and **developer.chrome.com**) have long recommended offloading heavy computation off the main thread to **Web Workers** to safeguard Interaction to Next Paint (INP). How
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHvfkmkIyGi3erwI8P96IKxw7XVDhSjCEzUgPgQZpxCgoIqRQjIMkA0pQlyf9dcWEaIf21GoG9KHMFg3yBZCPCLZHR4DP-iLIjXDSpBIkDZeUVAD_kBkPjyFkKTtu32BGhdaeJV0zt2F4Msd2Bybs3PsdateTQybA==) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Executive Summary  Web performance guides (such as on **web.dev** and **developer.chrome.com**) have long recommended offloading heavy computation off the main thread to **Web Workers** to safeguard Interaction to Next Paint (INP). How
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHM9UqCUBLoTNXfoSYRBbvxkgltXKDpxEHqv2a7_Y45tkEfcJa-Ph-iEeJunqSHh9sDUJ9mA1gkHy4JDO1_iI_EiEB2Tp9OIrxLZqGMC73VaDuFwdvuPgOctmMzKUmcBmPnFi5ZgfDWc9CY0H5XjDXObIwPNyJg-d2lycyshoV5HphQmvARbYb15BfHBcfo2K7zcw==) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Executive Summary  Web performance guides (such as on **web.dev** and **developer.chrome.com**) have long recommended offloading heavy computation off the main thread to **Web Workers** to safeguard Interaction to Next Paint (INP). How
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHTeDng5Cb3FSsHSXnJdh7UWBHZfVUbDXktjn6XRib612LaYGCx_wmBHXXQDNKdUePof1X-KXs2pHv8nuSoEeJ1LYbDisAi5fbbZLceDC1LNRvD38NjRfSHtbo0O82VXlmx9vQSxTYe_ic1YAa_qi_8-1O1hHB1PG2SMMNOVwPkqeQQKTQ=) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Executive Summary  Web performance guides (such as on **web.dev** and **developer.chrome.com**) have long recommended offloading heavy computation off the main thread to **Web Workers** to safeguard Interaction to Next Paint (INP). How
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFFT_7zzbJa8rdRvGbADmAdsW09VkyWcYIJLp0wYg-sYSXb7l9yhXowCLgnaic_T7mStG-rr2ldvie5-wFQ8UGF2qABRGkQebBK2lyZ8mA9QYrk9GglSp1XHIX4pvJKlFeZJtTjmLq8aQ==) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Executive Summary  Web performance guides (such as on **web.dev** and **developer.chrome.com**) have long recommended offloading heavy computation off the main thread to **Web Workers** to safeguard Interaction to Next Paint (INP). How
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEZh9wXLdphoodyo7pL0A0m-z1INhk9rE_o3FuLyOefv9LhMOXR5Xu4WJoo-nYbllubh7K-bG0aqKPgDWjvomC0MIWTUUdn0eVGawha7EI8EHtnxB-2VPZO7lcCUy2zOfs=) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Executive Summary  Web performance guides (such as on **web.dev** and **developer.chrome.com**) have long recommended offloading heavy computation off the main thread to **Web Workers** to safeguard Interaction to Next Paint (INP). How
- [debugbear.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFqPpn2rwwYn9LhOx8TgCHiUzyN-oedakwRB6hiQo0EQ65zVzXTaiHQKuaV8TeS-uHiRC85Pwg0-P6i4NNj_QwRvUszomm3VA4GOt1TPVuMFYBckI2q6FqOW2gTbHNxEJQ_eQ7IOIyGB1_V89IPbyLDm7wtUTqk) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Executive Summary  Web performance guides (such as on **web.dev** and **developer.chrome.com**) have long recommended offloading heavy computation off the main thread to **Web Workers** to safeguard Interaction to Next Paint (INP). How
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGQbMAoVOHZSPfxJO1JAyoJu5UaRN7kbA4LqUiTwy7ZhVB2_qbTopkt7Vh771SbPQdmfQTPmks7782q4l5FZecEArnIekSLpTEWGsXKuJTl-b3qopJcetPASsNxu-pffFno23mwDDEN) *(vertexaisearch.cloud.google.com)*
  > ### Overview & Executive Summary  Web performance guides (such as on **web.dev** and **developer.chrome.com**) have long recommended offloading heavy computation off the main thread to **Web Workers** to safeguard Interaction to Next Paint (INP). How
- [\[blink-dev\] Intent to Prototype: Support Long Animation Frames API in Web Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17008.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md Specification No information provided Summary <strong>This feature extends the existing Long Animation Frames (LoAF) API to Web Workers</strong>. T...
- [Web-Perf Wednesday 007 – Chrome Makes Busy Workers Measurable – CSS Wizardry](https://csswizardry.com/2026/09/web-perf-wednesday-007-chrome-makes-busy-workers-measurable) *(csswizardry.com · 2026-09-02T11:00:00)*
  > <strong>Start with one Worker-backed journey where users already experience a delay</strong>. Feature-detect long-animation-frame support inside the Worker, retain the script attribution and duration, then add an application mark or task ID that lets...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Prototype: Support Long Animation Frames API in Web Workers](http://www.mail-archive.com/blink-dev@chromium.org/msg17008.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md`)*
  > Explainer https://github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md Specification No information provided Summary <strong>This feature extends the existing Long Animation Frames (LoAF) API to Web Workers</...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 12 planned queries — **2 verified relevant**
  - `"chromestatus.com/feature/5387465121726464" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/delayed-message-timing/blob/main/loaf-congested-moments/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"Support Long Animation Frames API in Web Workers" API` — *Core feature API query* (1 returned)
  - `"Support Long Animation Frames API in Web Workers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"long-animation-frame" OR "per-script" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Support Long Animation Frames API in Web Workers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Support Long Animation Frames API in Web Workers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"PerformanceObserver" "long-animation-frame" ("Web Worker" OR "WorkerGlobalScope")` — *Locates real-world JavaScript code snippets and implementations demonstrating LoAF observation inside Web Worker contexts.* (0 returned)
  - `"Long Animation Frames" ("Web Worker" OR workers) performance monitoring guide` — *Discovers developer guides, tutorials, and technical blog posts explaining how to diagnose worker event loop bottlenecks using LoAF.* (5 returned)
  - `"Long Animation Frames" "Web Workers" "Intent to Prototype" OR "Intent to Ship"` — *Finds official Chromium status announcements, engine intent threads, and standards tracking for LoAF in dedicated workers.* (8 returned)
  - `site:github.com/WICG ("loaf-congested-moments" OR ("long-animation-frame" "worker"))` — *Surfaces specification issues, debates, and developer feedback in the WICG repository regarding event loop congestion and worker LoAF.* (0 returned)
  - `"long-animation-frame" ("congested moments" OR "delayed message") "Web Worker"` — *Searches for in-depth technical deep dives and architectural explainers comparing standard LoAF frames to worker congested moments.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 19 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 173 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5387465121726464)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5387465121726464)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/534893134)
