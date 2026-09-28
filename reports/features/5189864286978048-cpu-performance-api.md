# CPU Performance API

> **Report Week:** 2026-W40 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Starting in Chrome 152, Chrome introduces the CPU Performance API, which allows web applications to determine the CPU performance of a user's device. This API targets web applications that will use this information to provide an improved user experience, possibly in combination with the Compute Pressure API, which provides information about the user device’s CPU pressure or utilization and allows applications to react to changes in CPU pressure.  Users can override the reported performance using Chrome browser \*\*Settings &gt; Performance &gt; Speed &gt; Override CPU performance tier\*\*. Administrators can also control this behavior using the \[CpuPerformanceTierOverride\](https://chromeenterprise.google/policies/#CpuPerformanceTierOverride) policy (which takes precedence over the user setting).  For more details, see \[CPU Performance API Explainer\](https://github.com/WICG/cpu-performance).

### Motivation

At present, some video conferencing applications support advanced functionality by relying on internal/private browser extensions or APIs to classify devices into performance categories. Our proposal allows these applications to support existing functionality without depending on such non-standard features.

Applications whose functionality depends on client-side hardware detection often resort to running benchmark workloads, to estimate hardware capabilities. Providing a public CPU Performance API would help prevent a needless waste of resources.

## Ecosystem Status

- **Momentum:** High (345 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Shipped enabled by default in Chrome 152, the CPU Performance API seeks to eliminate wasteful client-side benchmarking loops by exposing a high-level hardware capability tier for demanding workloads like video conferencing and local AI. However, it remains a Chromium-only feature without cross-engine consensus, facing firm rejection from WebKit and ongoing reservations from Mozilla over privacy and fingerprinting risks. As a result, the API deepens platform divergence rather than establishing an interoperable web baseline.

### Recommendations
- Actionable Advice: Treat \`navigator.cpuPerformance\` strictly as an optional progressive enhancement exclusively within Chromium browsers, and never gate core functionality behind hardware tier checks. For cross-browser applications, combine dynamic runtime adaptation (such as frame drop observation or the Compute Pressure API where supported) with robust server-side fallbacks.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @marcoscaceres: "@lukewarlow, the API would potentially go to the Web Performance WG after incubation, so I think that's fine. It would be premature for it to go to We..."
- Standards Activity (Mozilla): Latest discussion from @bvandersloot-mozilla: "The answers w.r.t. ads sounds like a reasonable motivation. I might not have personally mentioned ads at all as a special category, but I can see why ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CPU Performance API](https://github.com/WebKit/standards-positions/issues/622) [closed]
- **Mozilla:** [CPU Performance API](https://github.com/mozilla/standards-positions/issues/1364) [open]
- **W3C TAG:** [Incubation: CPU Performance API](https://github.com/w3ctag/design-reviews/issues/1198) [open]

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFtuHXjfy0LxEnC5cjM0mmdJMr_F3LsiKY0aSwT8-a3Q_WUbC-FnQgjFjjgXoxDn4f7gIkAsC-wEJ5_WOCfS2O9vwe78KqUJxE5wQAd1UsWDEklez6tzm8Ohg5KZXU=) *(vertexaisearch.cloud.google.com)*
  > GitHub - WICG/cpu-performance: An API that exposes some information about how powerful the user device is. · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ta...
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG5qaIEl1mkVbGOuvb75kDPygBdJ1HjfOQ8YidjB5JqxRh2k8GY9udqbg3aYOiniXEUNQv0qfhVH7zHeUEuHBRRcIfm4EycvVkOBG1CIkiNLuAHyO3H-4fVjSc-jIJVtdlL1K58z3iXvAd-SuxCMhqtd5TlaNjL7wNoCjCnhdXqUxH5-mPnA6zK_b8-gzBAxacm6xuY_jBV34iv8cakjDQe) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the CPU Performance API  The **CPU Performance API** introduces a standardized, privacy-preserving way for web applications to determine a device’s hardware capability class. Exposed via the read-only property **`navigator.cpuPerforma
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGa7bI49Wvbznw9c1tGzbCnfYY8uuSfCUi_6RiJmtFlWmfBcZXpOEv-emIeIymot8dVnBB1RoYCdM4vWS3HqCOyt9B9DlIYUoPYm6ZWK4zuCZWwPKhM9C57KgBxu_9L38Z2sNsQuUe9uAGpPFfrP55nNIEwqqa-S9wAScGTqT421YDZnPRB56lK8D6hjDG-lXqdkXOleQ==) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the latest features, s...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEujsBlxihkK68dLSJtHbm_y-nnEfrKljD9fJavfBdmB2x85u6_zORbUkPu2ooxoEGHCf6ODHZ6wPBE7UKuEW8PhCxkNAKMA9Qvt8PSDRqEHrmp7cnf4IhMBVZVAw==) *(vertexaisearch.cloud.google.com)*
  > GitHub - WICG/cpu-performance: An API that exposes some information about how powerful the user device is. · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ta...
- [mintec.co](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE42Dw1YqvuVwnn-znTKjYS6Ozy2Ond_51tAoW21E--htP_7iLs9m1ZbV_6BAs8ofr2Wfxap3VaFgPmgv7Z1ounj93S7w_fbBVOlWV2tIM8alhvNrp0Qxu4950Mvb68fJAiMInSYrg0OFBytGM=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the CPU Performance API  The **CPU Performance API** introduces a standardized, privacy-preserving way for web applications to determine a device’s hardware capability class. Exposed via the read-only property **`navigator.cpuPerforma
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGQxvngGJitdih68rzur_G_zbUior6P-F7_9MFZjVyrk4wG90mALEOyri89iHHUYwMq67dzQnu14yktcQz0GnaAGR6a8ePqvsVr-u792iKIbqi-Uv9F9QN0dlGpOao=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the CPU Performance API  The **CPU Performance API** introduces a standardized, privacy-preserving way for web applications to determine a device’s hardware capability class. Exposed via the read-only property **`navigator.cpuPerforma
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE9227Y15n0-lepMpZ-CCiza7XO79ZJKtPQJldd2N6qehharqLmwXbV6Ynz-gS7aTstZRmmdKplMj56GAyao8VkCmExyDxXK_wsQshUY-_x5ZHQkezri4u82qIDHl4j6IuTCU0jNCjs5CiBdTgUkmNqeUzB5B02bFyHDJw=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the CPU Performance API  The **CPU Performance API** introduces a standardized, privacy-preserving way for web applications to determine a device’s hardware capability class. Exposed via the read-only property **`navigator.cpuPerforma
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEvOFlQvQkgh_binb8RAhQ-Yk5AUy6mE3sCTNRY8mD3D8yrLm0kfzdMLy--RIpDa6RD3022Y_0IBSumyHBUkWyIbWaU9_XtBgIQR98cFTtMOagAFg9DJI8kNrcH-xIWhku4xjY=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the CPU Performance API  The **CPU Performance API** introduces a standardized, privacy-preserving way for web applications to determine a device’s hardware capability class. Exposed via the read-only property **`navigator.cpuPerforma
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHC9mu87eYXbBiDd_oHK7Fj8P7Hfn_bUinii9w5dbGRg5bOTfPiuceSu7SvtRN05WtdmxK3oK4vdGT778yZl3AQj4hfeP5QLDo6W9AII7qC2YKUEnSj67SoolvzbjnpdWixk3kwUGA=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the CPU Performance API  The **CPU Performance API** introduces a standardized, privacy-preserving way for web applications to determine a device’s hardware capability class. Exposed via the read-only property **`navigator.cpuPerforma
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHYis5xhEka81SRSPYnqCwQ85FvNga4iTRft4-K4Bh_FTk8lYae1yAyr0oJxGkBpLGd24Le4g4fP6prECvmgXl4Yw-umM0YP5SlmztWOEC8lHS4VNaY6mrX9HRvzFCClYoS6Ue9jIi8KXkWXII=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the CPU Performance API  The **CPU Performance API** introduces a standardized, privacy-preserving way for web applications to determine a device’s hardware capability class. Exposed via the read-only property **`navigator.cpuPerforma
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGCLfGdIQKO4VlMhVwldd7d5i5seOapGucc1YIdYwcLOeTj_2Ek4ly3YPmMOqy5QLACTYcIvpMGwOejaZ8y_XymKXIStaqrrBJ06HeWoro7rh5_lB5CM288RJUpRW3xR0V-S0hWum9xgVYlvFFrag==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the CPU Performance API  The **CPU Performance API** introduces a standardized, privacy-preserving way for web applications to determine a device’s hardware capability class. Exposed via the read-only property **`navigator.cpuPerforma
- [chromeenterprise.google](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHGLCRT9Kw4b-5T2ZzuHU1w2XB83vYJc0o6zUAjpUcHNF_X_23920a9kk0bzwFP9IfPzlbNhE2J2pdhuKQfpQclua8A1lsmryCLoVdTaFPwoOZiKvEnqRndRymMpxafb-bSpzxdPJ1K9GMEo7_ucjLcEfS0ElkkIx1nHK4lfA==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the CPU Performance API  The **CPU Performance API** introduces a standardized, privacy-preserving way for web applications to determine a device’s hardware capability class. Exposed via the read-only property **`navigator.cpuPerforma
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGUX0RFME2TJ46haJHmeUODmZkEeMX687m2HzdYFYs4tsVuOtDWtn69SzBpC1CgqbXdjh-Sywq21XRyOjdzNqbH6_NmvwsWh0ybqS5pxd4TvcusnaW7UrunevZuACgQK55M9wp6Y4c6U-diGE9CWCqRCZU7PY4rr207KW_fKbbZJLALhxzdYHMg-irG9lhuk0DGEbevDQ==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the CPU Performance API  The **CPU Performance API** introduces a standardized, privacy-preserving way for web applications to determine a device’s hardware capability class. Exposed via the read-only property **`navigator.cpuPerforma
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGUkbmYHJPXwS4nnj0ld0D-WkAcsloYvbGVKPutrA88BJ6NNL--KaNIQc8dRm6h-KmtvVRauFbar_BS05lU1yvBtldPU_zGnMEurkBOYfYJWaKJbUrm0Al-9hGX0A==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the CPU Performance API  The **CPU Performance API** introduces a standardized, privacy-preserving way for web applications to determine a device’s hardware capability class. Exposed via the read-only property **`navigator.cpuPerforma
- [basewatch.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGa9jOS4joIlLZy3ZqmBcFrkdVjMnlvw7_4I3iLxLqN3ebrOyKeGNrYGE5o44X9xPD5Du986lELxtBdOVvBrqrTCxxlIvXUmQl6g_HZUaw6WEHWgcQ6J9pTSpe3a4iXoDRbNkxQoS7Fncw32BfsHFkodQnx) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the CPU Performance API  The **CPU Performance API** introduces a standardized, privacy-preserving way for web applications to determine a device’s hardware capability class. Exposed via the read-only property **`navigator.cpuPerforma
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH3tVgGxwxvEx_xn8XxPzpuQ5oFK3Z0DRsNkj3oQuuMxhmZz8VV0yxF4TdDoaY3PS3-QS4HHvtdy9WZITzu_qO79Jt7n3rMsd1FzHTwKYqBk7RfHr4TA8pH9ph1JKvgmaO3EVN9vGXyA2CVcCk_ew==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the CPU Performance API  The **CPU Performance API** introduces a standardized, privacy-preserving way for web applications to determine a device’s hardware capability class. Exposed via the read-only property **`navigator.cpuPerforma
- [\[blink-dev\] Intent to Extend Experiment: CPU Performance API](http://www.mail-archive.com/blink-dev@chromium.org/msg17465.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/cpu-performance Specification https://wicg.github.io/cpu-performance Summary Starting in Chrome 152, Chrome introduces the CPU Performance API, which <strong>allows web applications to determine the CPU performance o...
- [Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/cpuperformancetieroverride) *(learn.microsoft.com · 2026-07-14T00:00:00)*
  > If you enable this policy, the value of navigator.cpuPerformance is overridden with the specified value. If you don’t configure this policy, the default performance tier calculation is used. You can specify a value from 0 through 4. For more informat...
- [Re: \[blink-dev\] Intent to Extend Experiment: CPU Performance API](http://www.mail-archive.com/blink-dev@chromium.org/msg17482.html) *(mail-archive.com)*
  > Cheers, Rick On Tue, Sep 15, 2026 ... &gt; Starting in Chrome 152, Chrome introduces the CPU Performance API, which &gt; <strong>allows web applications to determine the CPU performance of a user&#x27;s &gt; device</strong>....
- [CpuPerformanceTierOverride: Override for the CPU performance tier \| Chrome Enterprise](https://chromeenterprise.google/policies/cpu-performance-tier-override) *(chromeenterprise.google)*
  > Setting this policy allows enterprises to override the value returned by the CPU Performance API (i.e., navigator.cpuPerformance, please see https://<strong>github.com/WICG/cpu-performance</strong> for details). If this policy is set, the value of na...
- [Override for the CPU performance tier - ADMX Viewer](https://gpedit.tplant.com.au/en-us/policy/chrome/CpuPerformanceTierOverride) *(gpedit.tplant.com.au)*
  > Setting this policy allows enterprises to override the value returned by the CPU Performance API (i.e., navigator.cpuPerformance, please see https://<strong>github.com/WICG/cpu-performance</strong> for details). If this policy is set, the value of na...
- [Переопределить уровень производительности ЦП - ADMX Viewer](https://gpedit.tplant.com.au/ru-ru/policy/chrome/CpuPerformanceTierOverride) *(gpedit.tplant.com.au)*
  > Правило позволяет компаниям переопределять значение, возвращаемое CPU Performance API (то есть navigator.cpuPerformance). Подробнее: https://<strong>github.com/WICG/cpu-performance</strong>. Если правило настроено, ...
- [The CPU Performance API: Adaptive Loading Without Running a Benchmark \| Trade Assistance LLC](https://trade-assistance.com/blog/cpu-performance-api-adaptive-loading-chrome-152) *(trade-assistance.com · 2026-07-27T00:00:00)*
  > Chrome is about to add one. The CPU Performance API introduces navigator.cpuPerformance, a read-only property that returns a small integer describing the device&#x27;s hardware class.
- [CPU Performance API](https://chromestatus.com/feature/5189864286978048?gate=5130174173675520) *(chromestatus.com · 2026-05-26T00:00:00)*
  > We cannot provide a description for this page right now
- [The Impact of Chrome's New CPU Performance API on Web Scraping Detection](https://www.scraping.club/p/the-impact-of-chromes-new-cpu-performance-api) *(scraping.club · 2026-09-06T20:18:52)*
  > Introduced in Chrome 152 (currently in beta at the time of writing), the CPU Performance API is a new Web API that lets websites estimate how powerful a user’s CPU is without disclosing detailed hardware information.
- [navigator.cpuPerformance: The Browser Finally Knows How Fast Your User's Device Is (and It Changes How We Serve Video) \| Mintec Blog](https://mintec.co/blog/cpu-performance-api-media-2026) *(mintec.co · 2026-08-11T00:00:00)*
  > Chrome 152 ships the CPU Performance API: navigator.cpuPerformance exposes a device tier from 1 to 4 (0 when unknown) without the fingerprinting baggage of hard
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>Starting in Chrome 152, Chrome introduces the CPU Performance API, which lets web applications determine the CPU performance tier of a user&#x27;s device</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Extend Experiment: CPU Performance API](http://www.mail-archive.com/blink-dev@chromium.org/msg17465.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > Explainer https://github.com/WICG/cpu-performance Specification https://wicg.github.io/cpu-performance Summary Starting in Chrome 152, Chrome introduces the CPU Performance API, which <strong>allows web applications to determine the CPU per...
- [Microsoft Edge Browser Policy Documentation CpuPerformanceTierOverride \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/cpuperformancetieroverride) *(learn.microsoft.com · 2026-07-14T00:00:00)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > If you enable this policy, the value of navigator.cpuPerformance is overridden with the specified value. If you don’t configure this policy, the default performance tier calculation is used. You can specify a value from 0 through 4. For mor...
- [Re: \[blink-dev\] Intent to Extend Experiment: CPU Performance API](http://www.mail-archive.com/blink-dev@chromium.org/msg17482.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > Cheers, Rick On Tue, Sep 15, 2026 ... &gt; Starting in Chrome 152, Chrome introduces the CPU Performance API, which &gt; <strong>allows web applications to determine the CPU performance of a user&#x27;s &gt; device</strong>....
- [CpuPerformanceTierOverride: Override for the CPU performance tier \| Chrome Enterprise](https://chromeenterprise.google/policies/cpu-performance-tier-override) *(chromeenterprise.google)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > Setting this policy allows enterprises to override the value returned by the CPU Performance API (i.e., navigator.cpuPerformance, please see https://<strong>github.com/WICG/cpu-performance</strong> for details). If this policy is set, the v...
- [Override for the CPU performance tier - ADMX Viewer](https://gpedit.tplant.com.au/en-us/policy/chrome/CpuPerformanceTierOverride) *(gpedit.tplant.com.au)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > Setting this policy allows enterprises to override the value returned by the CPU Performance API (i.e., navigator.cpuPerformance, please see https://<strong>github.com/WICG/cpu-performance</strong> for details). If this policy is set, the v...
- [Переопределить уровень производительности ЦП - ADMX Viewer](https://gpedit.tplant.com.au/ru-ru/policy/chrome/CpuPerformanceTierOverride) *(gpedit.tplant.com.au)* *(Cites: `https://github.com/WICG/cpu-performance`)*
  > Правило позволяет компаниям переопределять значение, возвращаемое CPU Performance API (то есть navigator.cpuPerformance). Подробнее: https://<strong>github.com/WICG/cpu-performance</strong>. Если правило настроено, ...
- [CPU Performance API · Issue #622 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/622) *(github.com · 2026-02-26T11:24:29)* *(Cites: `https://wicg.github.io/cpu-performance`)*
  > WebKittens @jernoble, @marcoscaceres, @jyavenard Title of the proposal CPU Performance API URL to the spec <strong>https://wicg.github.io/cpu-performance/</strong> URL to the spec&#x27;s repository https://github.com/WICG/cpu-performance Is...
- [Add CPU Performance API · Issue #7536 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/7536) *(github.com · 2026-06-24T10:22:39)* *(Cites: `https://wicg.github.io/cpu-performance`)*
  > <strong>https://wicg.github.io/cpu-performance/</strong> https://github.com/WICG/cpu-performance Chrome https://groups.google.com/a/chromium.org/g/blink-dev/c/igPwzkxhQtk/m/Epzx3q7MBwAJ https://chromestatus.com/feature/5189864286978048?gate...

## 📚 Platform Documentation & Specifications

- [CPU Performance API · Issue #622 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/622) *(github.com)*
- [Add CPU Performance API · Issue #7536 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/7536) *(github.com)*
- [GitHub - explainers-by-googlers/cpu-performance: An API that exposes some information about how powerful the user device is.](https://github.com/explainers-by-googlers/cpu-performance) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 45 result(s) found across 8 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5189864286978048" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/cpu-performance" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"wicg.github.io/cpu-performance" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"CPU Performance API" API` — *Core feature API query* (8 returned)
  - `"CPU Performance API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromeenterprise.google" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CPU Performance API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CPU Performance API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **16 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **0 verified relevant**
- **Standards Positions:** 4 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 7 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 15 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5189864286978048)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5189864286978048)
- [Specification](https://wicg.github.io/cpu-performance)
- [Chromium Tracking Bug](https://issues.chromium.org/449760252)
