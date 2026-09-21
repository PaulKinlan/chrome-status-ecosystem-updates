# PredefinedColorSpace srgb-linear and display-p3-linear

> **Report Week:** 2026-W39 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Add srgb-linear and display-p3-linear color spaces (as defined by CSS) to PredefinedColorSpace for use with canvases.

### Motivation

Linear color spaces (where pixel values correspond linearly to luminance) are extremely commonly used in applications with connections to physical light rendering (e.g, games) or spatial processing (e.g, decimation, anti-aliasing, and interpolation).

## Ecosystem Status

- **Momentum:** High (205 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Extending the HTML standard's PredefinedColorSpace enum with 'srgb-linear' and 'display-p3-linear' enables linear-light backing stores across Canvas 2D, WebGL, WebGPU, and ImageData. This eliminates artificial gamma-decoding overhead and precision loss for physically based rendering (PBR), 3D graphics, and spatial filtering pipelines. With Chrome enabling it by default in M155 and WebKit having integrated support in Safari Technology Preview, the feature is rapidly converging toward cross-engine parity.

### Recommendations
- Actionable Advice: Use progressive enhancement by feature-testing context creation options: attempt initializing canvases with colorSpace: 'srgb-linear' or 'display-p3-linear' and gracefully fall back to 'srgb' or 'display-p3' in engines lacking support. WebGL and WebGPU pipelines targeting Chromium M155 and modern WebKit builds can immediately adopt these options to streamline linear lighting workflows.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **Mozilla:** [srgb-linear and display-p3-linear PredefinedColorSpace](https://github.com/mozilla/standards-positions/issues/1453) [open]

## 📰 Ecosystem Blogs & Articles

- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHJBikLPMctowp5KB22azSyYv_qqq5br_gl1AtIT8_-jfCEQ30gaokyo3qGlT9hyi_vuuDK6FDUMF_JVaXsyM6LEc_aVYRJYAbdhoopAOpXKDgI1R_gI1JjoAyPqoDMgpSwXaThWXuxl_UpBJ7PKQq314eq7bJyhjjjo6Un8gTEnX4=) *(vertexaisearch.cloud.google.com)*
  > PredefinedColorSpace enum - WebIDLpedia PredefinedColorSpace enum"> --> WebIDLpedia PredefinedColorSpace enum Definition HTML Standard defines PredefinedColorSpace enum PredefinedColorSpace { " srgb " , " srgb-linear " , " display-p3 " , " display-p3...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE4u7SkHTxZLBL8D6ICm62BacoYWW2xahF6SQ-2YsS_H69ATIDx86SzhyfAydx4aykWSkm4qFf8PCUn99ZO8ZUE9r95_m4LDoBb0RsJ1cPm0bo-rIfCeJhgMTeSiZAsVw53) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  The Web Platform feature **"PredefinedColorSpace srgb-linear and display-p3-linear"** updates the HTML Standard's `PredefinedColorSpace` enum—used by `<canvas>` (2D, Offscreen, WebGL, and WebGPU), `ImageData`, and `ImageB
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH8Rg2LLY082x8gVZpO3D8jHnahYRSA9UZY8qWSUnqBKSJD3qCL_Hg2RB7Izwh4DZjzmp5-dtkx22pixsZvSbFSArLpHd2OjPm7E1Ex3uUnXfR9W_fOOhMAorYHz4fDr2DRr7KduuriicqJg3o=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  The Web Platform feature **"PredefinedColorSpace srgb-linear and display-p3-linear"** updates the HTML Standard's `PredefinedColorSpace` enum—used by `<canvas>` (2D, Offscreen, WebGL, and WebGPU), `ImageData`, and `ImageB
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH_HO3hK5BODf2MULJoBYze6kLXByLzf5ktSEO_bKdN1iV7bbhaACReppLNBYgDpe7wBvVJe4Qnx2WAZFGfsj9nu43GrRYN_C31QGw29Q8AdRb36lGqdlY-BBydLlFMcxKlm0KC4sEg97uAKulDdDai2czQ2Tvk0ioxPG7bCK6qkvqf_EOiNo-gjQ==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  The Web Platform feature **"PredefinedColorSpace srgb-linear and display-p3-linear"** updates the HTML Standard's `PredefinedColorSpace` enum—used by `<canvas>` (2D, Offscreen, WebGL, and WebGPU), `ImageData`, and `ImageB
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF6YidXBX4Kv6HeiCSOTf-Bjt2YnIr0ZN5ZBdS_Jln_Rqd7V-wk_qTMbADNEIBd6ge5ge8gM7iVmhux6_dcwvzJvEemRou_7o6paJXcpIjGYnlKeqj7WUBDE4KDxxfK7Cr2UVL4fjPlis2qHxxIQFLl0t_BJMSryUF8PzYwpHZVDPBW6KPwgdPh0ZJ6NT4LKfSZESbncxnNDe4Jcvw=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  The Web Platform feature **"PredefinedColorSpace srgb-linear and display-p3-linear"** updates the HTML Standard's `PredefinedColorSpace` enum—used by `<canvas>` (2D, Offscreen, WebGL, and WebGPU), `ImageData`, and `ImageB
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFV4O4UKnp_qGpwSe5KNbqsPjhvafAxBBdMTwbCOL77OlO7u4u8OJgQFf0sCMDK3aT8vRfTU0vWbL14hzmcutbXvQ4sYmb_QUvhheZqZ6YSf9XnJkPzsHG0p9bewUjs0GGZicb5iy6UuZhM6MKNUCTtjg91PCDbapH7RHMmHSKZNU6PWh6T0Vbsbt9pcMRqyg==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  The Web Platform feature **"PredefinedColorSpace srgb-linear and display-p3-linear"** updates the HTML Standard's `PredefinedColorSpace` enum—used by `<canvas>` (2D, Offscreen, WebGL, and WebGPU), `ImageData`, and `ImageB
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHLNgElj2bPYO20evVyFlD9B9MFWqAG5nV0N67vyyUdPzocPcp3kvmCPzF5sST3eysjLBE6zOC1y3c7eba8yRKTT6zADQbvwoZda68VgpBuJb39lR7bMY99X3z60SdFtKiH-b6VjcyIkRziUg-N) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  The Web Platform feature **"PredefinedColorSpace srgb-linear and display-p3-linear"** updates the HTML Standard's `PredefinedColorSpace` enum—used by `<canvas>` (2D, Offscreen, WebGL, and WebGPU), `ImageData`, and `ImageB
- [threejs.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFPhs0IXm0yaKxIPG33OQStUyvzrHMpNPJprwwva7sZsDhD0ZG6Jqu8r3DQXKUGnUkfsHufhAyZGp16I2gF1pBH6uTYGXCYJ9cZ9TWkWaiNH2ZXyMrb1GT7MD7pVnVhXFooeYwqkT6U4F1_-7qC8KqqfxRQQ28RBxTvi1Z3R-9_8deR73nfMzEd78cZwAYLhAwsRL4q7mbY1CCT8IQyG9a5GQ==) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  The Web Platform feature **"PredefinedColorSpace srgb-linear and display-p3-linear"** updates the HTML Standard's `PredefinedColorSpace` enum—used by `<canvas>` (2D, Offscreen, WebGL, and WebGPU), `ImageData`, and `ImageB
- [babylonjs.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFKtQYJR6dMEjp1EWsBdnKsG1cXGrsKM5yarRc1PjylJ1zgRVxEq0HIOTVRIEE6DQLqX2IfNa7Io9hjXR6Ni1lV3eNNc3rtJu1Kl83qq7DBlguF3zmATVK_1xS4ix4z_1RJIEw2cYS1vP0al4Ukvog=) *(vertexaisearch.cloud.google.com)*
  > ### Overview of the Feature  The Web Platform feature **"PredefinedColorSpace srgb-linear and display-p3-linear"** updates the HTML Standard's `PredefinedColorSpace` enum—used by `<canvas>` (2D, Offscreen, WebGL, and WebGPU), `ImageData`, and `ImageB
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17407.html) *(mail-archive.com)*
  > *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/5122501071994880</strong>?gate=6522766912258048 This intent message was generated by Chrome Platform Status &lt;https://chromestatus.com&gt;. -- You received this ...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)*
  > That particular space has controversies that neither of these do, which we need to be very careful to get right. Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5122501071994880</strong>?gate=6522766912258048 This...
- [PredefinedColorSpace srgb-linear and display-p3-linear - Chrome Platform Status](https://chromestatus.com/feature/5122501071994880) *(chromestatus.com · 2025-10-21T00:00:00)*
  > We cannot provide a description for this page right now
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17494.html) *(mail-archive.com)*
  > &gt; On 9/9/26 6:42 a.m., Yoav Weiss ...spaces-and-colour-correction &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; *Summary* &gt;&gt;&gt;&gt; <strong>Add srgb-linear and display-p3-linear color spaces (as defined by CSS) &gt;&gt;&gt;&gt; to Pred...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17396.html) *(mail-archive.com)*
  > &gt; LGTM2 &gt; &gt; On Mon, Sep 7, 2026 ...l#colour-spaces-and-colour-correction &gt;&gt;&gt; &gt;&gt;&gt; *Summary* &gt;&gt;&gt; <strong>Add srgb-linear and display-p3-linear color spaces (as defined by CSS) &gt;&gt;&gt; to PredefinedColorSpace for...
- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17384.html) *(mail-archive.com)*
  > &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Specification* &gt; &gt; https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction &gt; &gt; *Summary* &gt; Add srgb-linear and display-p3-linear color spaces (as de...
- [blink-dev - Google Groups](https://groups.google.com/a/chromium.org/g/blink-dev) *(groups.google.com)*
  > Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17407.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5122501071994880`)*
  > *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/5122501071994880</strong>?gate=6522766912258048 This intent message was generated by Chrome Platform Status &lt;https://chromestatus.com&gt;. -- You rece...
- [\[blink-dev\] Intent to Ship: PredefinedColorSpace srgb-linear and display-p3-linear](http://www.mail-archive.com/blink-dev@chromium.org/msg17379.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5122501071994880`)*
  > That particular space has controversies that neither of these do, which we need to be very careful to get right. Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5122501071994880</strong>?gate=65227669122...

## 📚 Platform Documentation & Specifications

- [srgb-linear and display-p3-linear PredefinedColorSpace · Issue #1453 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1453) *(github.com)*
- [Add srgb-linear, display-p3-linear, and rec2020-linear color spaces by ccameron-chromium · Pull Request #42 · WICG/canvas-color-space](https://github.com/WICG/canvas-color-space/pull/42) *(github.com)*
- [Color space - Glossary - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Glossary/Color_space) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 50 result(s) found across 11 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5122501071994880" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"html.spec.whatwg.org/multipage/canvas.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" API` — *Core feature API query* (3 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"srgb-linear" OR "display-p" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (3 returned)
  - `"PredefinedColorSpace srgb-linear and display-p3-linear" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"colorSpace" "srgb-linear" OR "display-p3-linear" canvas getContext` — *Find real-world JavaScript code snippets and API usage initializing 2D or WebGL canvas contexts with linear predefined color spaces.* (8 returned)
  - `"srgb-linear" OR "display-p3-linear" canvas "linear color space" web tutorial OR guide` — *Locate developer tutorials and deep dives explaining linear color spaces and physically accurate lighting on HTML canvas.* (0 returned)
  - `"PredefinedColorSpace" "srgb-linear" "intent to ship" OR chromestatus OR "WebKit bugzilla"` — *Track browser vendor implementation progress, shipping announcements, and standards adoption across Chromium and WebKit.* (8 returned)
  - `site:github.com/whatwg/html/issues "srgb-linear" OR "display-p3-linear"` — *Review specification debates, feedback, and technical considerations among spec authors and browser engineers in the WHATWG repository.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 4098 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5122501071994880)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5122501071994880)
- [Specification](https://html.spec.whatwg.org/multipage/canvas.html#colour-spaces-and-colour-correction)
- [Chromium Tracking Bug](https://issuetracker.google.com/issues/454152417)
