# Renewed HTML insertion&streaming methods

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document.

- Positional methods (before/after/append/prepend/replaceWith) that take HTML as argument, effectively replacing insertAdjacentHTML.
- Streaming methods (stream{Append}HTML{Unsafe}) which return a WritableStream
- Passing {runScripts} as part of SetHTMLUnsafeOptions, mimicking createContextualFragment behavior.
- Supporting createParserOptions in trusted types, allowing trusted types to override scripting mode and sanitizer.

### Motivation

Updating HTML dynamically from script has multiple disjointed API, each with its own subtle differences.
Developers can partially update an element using insertAdjacentHTML, use sanitizer with setHTML, execute scripts with createContextualFragment, stream with detached documents. 

This can be confusing and frustrating to web developers, as well as create bugs or security issues if the differences are not well understood.

This change replaces those with a coherent set of methods and arguments, that use the same settings (sanitizer/runScripts) with different variants (where to insert the HTML, stream/one-shot, safe/unsafe) as well as the same support in trusted types.

## Ecosystem Status

- **Momentum:** High (130 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** Renewed HTML insertion&streaming methods is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [HTML streaming & revamped DOM parsing](https://github.com/WebKit/standards-positions/issues/629) [open]
- **Mozilla:** [HTML streaming & revamped DOM parsing](https://github.com/mozilla/standards-positions/issues/1370) [closed]

## 📰 Ecosystem Blogs & Articles

- [daily.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEI74fHjk9m8XXBwIdtRTpUo5QXMVg3IPE0qSx5UIL9QAxwHYq-YU6XiOyTAXdl9cpKY0RVU2h4Sj1NrDRAhqwJZreCYdu5D481O0V4bqMsNJcJ5WXiMfNwchVnGl5rUM5EZzif0_28PaV2hK6L70mAxl6m) *(vertexaisearch.cloud.google.com)*
  > Declarative partial updates | daily.dev Chrome Developers Read post Declarative partial updates Chrome 148 introduces two new web platform APIs under the Declarative Partial Updates initiative. The first enables out-of-order HTML streaming using proc...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH3GxbcJBsApu9a4XtFC_KIxF00mzeG1g6dLwni-qiirl-aglc7PsygaBEBHE8p0G1BWue4rosPnI8h0YA2EiSBKTJKggRhGi57SCJvMmiYhmtrDzI9NVMQuQ4gZ2_vhlD9) *(vertexaisearch.cloud.google.com)*
  > Coherent story for HTML-setting methods · Issue #11669 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your se...
- [zenn.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFLOLmkumgq4m6i92aLDCMMZ-XHVItFjNHZOoDE-GFQRKGd8kEMedLUG1A2sWeWILfSq4NI5wuwMjCT9S1i0F8EvhNq7hL-x0jaqg3s1jjgE7WD8ROqHpGgKwmJwzqP0ERNnvxsJuKu) *(vertexaisearch.cloud.google.com)*
  > 2026年8月現在のDPU（宣言的部分更新）について 黒ヰ樹 🍧 2026年8月現在のDPU（宣言的部分更新）について 2026/08/19 に公開 Chrome CSS HTML JavaScript DPU tech 宣言的部分更新 https://developer.chrome.com/blog/declarative-partial-updates?hl=ja https://github.com/WICG/declarative-partial-updates Declarativ...
- [freecodecamp.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEhU9sFX3ZP5kLqk-xAohJM3KXB3gwWO3QpAc3Cc1JOTjiaxavKRWUGoIbzyGbkfzx5CZrgVds9TqmBBVr8chK8Pk0NvTPL3ZEufdjDtH9L6AoDRpgjGo_RltIHeqMQs65Sm-Hkz6pBG9rtbFv7bf13C9ux0lQzUfx5cuoVLrG2Ss9Nqvrs) *(vertexaisearch.cloud.google.com)*
  > How Declarative Partial Updates Work in HTML May 29, 2026 / #HTML5 How Declarative Partial Updates Work in HTML Sumit Saha HTML has always supported streaming. The server doesn't need to build an entire page in memory before sending it to the browser...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGB5VgbUVwL055d9lbH_hYxH040Y_rOHeQu2tzNemjpF1iINXa2U411ip41eRu0gEjbth3r75d1ZcCTvtVolXd8y1W2fAHgrLOEKhgk5t8avlT8datbO4IV-Nnf0Dg3jP39dlxJlgaZVvsHWhy1k6_J-IZCn5Fxh3mr1wWC7Lhn1J4rysLFScYwY11b83JN-HbQ7Fkv3D-vbA==) *(vertexaisearch.cloud.google.com)*
  > declarative-partial-updates/dynamic-markup-revamped-explainer.md at main · WICG/declarative-partial-updates · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [zenn.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHMSgfcNPQNiOTbcahwrABY6T8u75aRjjgxOlXrErbSn318GW6JBvSLnGMrrNDZawNzMSDcIVw-eAYUp24UQvEnIpvWn1IyXie9eHzSdA8ZYkemSR4gIuChy8eT4YS3eZ9ojbEPHg==) *(vertexaisearch.cloud.google.com)*
  > DPUのChrome Platform Status Features 黒ヰ樹 Closed 1ヶ月前にクローズ 1 DPUのChrome Platform Status Features Chrome HTML JavaScript Web DPU 黒ヰ樹 9日前に更新 https://chromestatus.com/features?q=owner%253Anrosenthal%2540chromium.org DPUに関するものだけをPick 作成日時: 2026/07/02 18:00...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG7WD4zyAeaJX1-iAniQv_php3B2B4QlWkf8lU1zYVd6kCTPE6lVSgfUReUnsmJAm_DPAMpvNMViBT4w8rliIe3SOgGhxZMCSHaO1MTEA07fCt32mT3-I4RQxTL22_hc07RBfOjFAoNRy6A2FaPZ_s6B7A8) *(vertexaisearch.cloud.google.com)*
  > Declarative partial updates | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHs-4Y59Gh3x9e5suBtLf5Q8Fdzb6Vw71DWhE1bd2j8FTV1Fz4OyxWeuHPXhagL0CoHKOy1rRIE7GangccOLQ6RlRUFQhRvRCUbngc_JgbnvIdY4CQw2Fc3pqSOspqe615W3OCCObEEmyQtAJ8xYiY=) *(vertexaisearch.cloud.google.com)*
  > The **"Renewed HTML insertion and streaming methods"** initiative is a major web platform effort (developed under the WICG *Declarative Partial Updates* umbrella and standardizing through WHATWG HTML). It replaces fragmented legacy APIs (like `innerH
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEri8VLp2bbmWHg8cc5Gh8OMCPiEZDKqglCA8N5QEHkCyVgRpt-J6KuuWvR9g4AMVFT_vB372sZltfJjMwIf0V7iOrtfBmhgsBaM3nhCKxLrEXZjRdqkYeAl7IFMt4amKM7igiwjqnR-t1V_llsYinTlCYZUVDph2PMHFc5V_WcvWljJUE7apve4CW_tyW143e2clh9XNY=) *(vertexaisearch.cloud.google.com)*
  > The **"Renewed HTML insertion and streaming methods"** initiative is a major web platform effort (developed under the WICG *Declarative Partial Updates* umbrella and standardizing through WHATWG HTML). It replaces fragmented legacy APIs (like `innerH
- [kinlan.me](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHt0-_KIiYRx4YDNCPql5HWQRGM5ybJyys3Bpst7YmrOyeBdlIPPNial8sihKySHoSUJK5gpE8cQuGX-YZIpVV0aAse7e67i-KNNX9ENSLLG7jVT2Ur1bpNDcLaTf6CjA==) *(vertexaisearch.cloud.google.com)*
  > The **"Renewed HTML insertion and streaming methods"** initiative is a major web platform effort (developed under the WICG *Declarative Partial Updates* umbrella and standardizing through WHATWG HTML). It replaces fragmented legacy APIs (like `innerH
- [[blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md Specification https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md#resulting-api Summary Expose...
- [RE: [blink-dev] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17049.html) *(mail-archive.com)*
  > Draft versions of both exist in isolation but they would all need to be rebased on top of the stack: https://github.com/whatwg/html/pull/12528 (positional methods to replace insertAdjacentHTML) https://github.com/whatwg/html/pull/11631 (streamHTML*) ...
- [[blink-dev] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17004.html) *(mail-archive.com)*
  > Thanks for working to make this into a consistent API surface! This seems like something the TAG should have a chance to look at, would you mind filing a TAG review? After scanning through https://github.com/whatwg/html/issues/11669 and the sub-issue...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 3 result(s) found (query: `""Renewed HTML insertion&streaming methods" API"`) — **3 verified relevant**
- **Google Search Grounding (gemini-3.7-flash):** 11 result(s) found — **10 verified relevant**
- **Dev.to Community Blogs:** 8 result(s) found (query: `"Renewed HTML insertion&streaming methods"`) — **13 verified relevant**
- **Hacker News Algolia:** 0 result(s) found (query: `"Renewed HTML insertion&streaming methods"`) — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5054329641893888)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5054329641893888)
- [Specification](https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md#resulting-api)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/491743369)
