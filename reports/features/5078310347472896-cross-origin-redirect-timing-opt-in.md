# Cross-origin redirect timing opt-in

> **Report Week:** 2026-W37 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Currently developers have no way to measure cross-origin redirects for navigations, even ones under their control, or ones that choose to opt-in to be measured.

This feature enables servers to opt-in to have their redirects measured by the destination origin of the navigation.

### Motivation

Enables developers to measure and optimize their cross-origin redirects, while ensuring that opt-in are secure and aligned with the developer's intention.

## Ecosystem Status

- **Momentum:** High (220 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** Cross-origin redirect timing opt-in is currently Enabled by default in Chrome 151. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [daily.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHFkTY4-Td6-gUiyheIlhjBGEwJutemM4rkuGICLw6zGURtsqLz0jjLhe0ZBxl6l3PdkFJSdHKsJp6jKvW6xlk58rZxZm2E9FY7vZd4gXVJiThmI0k_FkAsEdjT9fWQhBMT73StxWlmm_o1CENsx--5H2_Ad64EUThI6IRSJ3gnZCHSCl0-u7H7KXP3wJPTCSHnzwLu3dw6) *(vertexaisearch.cloud.google.com)*
  > Unattributed Navigation Overhead (UNO) Is Underrated –... CSS Wizardry Read post Unattributed Navigation Overhead (UNO) Is Underrated – CSS Wizardry Unattributed Navigation Overhead (UNO), a concept coined by Tim Vereecke, is the portion of Time to F...
- [perfplanet.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGkdlDzQxnO_AHpwYe2AlHKh8v4zgfMYFpHE1mV_Y9GIskLPavp87HLwGfLjRztYMycS6CSjgEbkoz_cAd-8GHRxf0hq5YpInds3JHUqJyJsXr7IGIzOYg_5juy8tLQmCuwXrW-EvYFUDPo6ZPrW9IwWrmJdXlP5Cl_-wrdZbIzPkbAuGQ=) *(vertexaisearch.cloud.google.com)*
  > TTFB doesn&#8217;t mean what you think it means - Web Performance Calendar Web Performance Calendar The speed geek&#039;s favorite time of year 2025 Edition TTFB doesn&#8217;t mean what you think it means 24th Dec 2025 by Robin Marx ABOUT THE AUTHOR ...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGb-PHkKXeZUmBrjgKpQMhjiJrDz3s5ZWvweWcLUrhpiscXejqH5P4y9BRnoKcRPGupYHjU25EeNZnLUt2xzijl0gwD8BUEudgcNLOCUMuw-g7k1_zIY52X6f47HVXLCtDbx-1UEQcvEUkgFqi0gz6LcmHGfiiZwhU=) *(vertexaisearch.cloud.google.com)*
  > Intent to Prototype: Cross-origin redirect timing opt-in Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Cross-origin redirect ti...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFcGvtG97FYMGUSTe1Sxs_HTtnq_aixljIGqI8qh-hzRw-MJmIOTHu82qnqNqKueGqFe_gtqh0qOQya7hxoAXwPZuV1kRZYaTjBYkaznpN8yCEk_3hrnGgQoBN9x2Ba6gmUaYxlOH_pgrVJDeuGHlHKjDLn_MHIhpDVjjEklmllO_i2RV2pqiz0nXn0sfCsgMhNxygxM8D2XDSTsQC1RaXS) *(vertexaisearch.cloud.google.com)*
  > edge-developer/microsoft-edge/web-platform/release-notes/151.md at main · MicrosoftDocs/edge-developer · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFhGERAxG-5z1YMkIzTnTnjvY-xxnHuy6xli_pJvWfTOnHkisMGVuh0CPakIquGEPLpPStRnU96Gfcqh9RczqtgEm8a80amAq7cNNREOhXlDCqhlO-rqsHpDKl7aEZWgvpuCy9A4LTZ) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFrLCyJ8nVtowDFBr8UMt8lKtFOSHB2FKM994NzEgYUinTX4s5U6GNt52XiDJAEFGevAXhW48_wESmAqEJhEQZkDnGEVSnK_kLVwXlFTIY2U3eOzVhS_BaTk1t3UlhHq7E8f5EN) *(vertexaisearch.cloud.google.com)*
  > Chrome 151 | Release notes | Chrome for Developers Skip to main content / English Nederlands Русский فارسی বাংলা Sign in Release notes Chrome for Developers Docs Release notes Chrome 151 Stay organized with collections Save and categorize content bas...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF5TF7p6fJ1QrWAFWpMutAddCxIRXdognDADhmtyNMT9kCGRUukSImHuiCTVI74rBt9JsvgXuRWuL7MtCE-1lYPuPM2fTpbvqvEHQ6tED-v4tIpDxBJxsbd5j8AL2nBaGdJxwV590svgI6PtouXJWUgN1UsvgYCUHOcMVznV3kMTJ_2LbSL) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge 151 web platform release notes (Jul. 2026) - Microsoft Edge Developer documentation | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advanta...
- [gigazine.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHH8ebW4B3I-So-EH9zdv0Ff0KAFMvAMA4GzeLyGDg5HEXeSpsJBOrIsZQ-g0cjMLwrmIooJQRQjIAWjIXkq2juHwBWolEf5ZoklkISnTIXux6CyYyuM_MESfmtzO6SdAB8Gv87OSJTHA9eYW_KN3tGMqo=) *(vertexaisearch.cloud.google.com)*
  > Google Chrome 151 stable version released, adding a Web API that makes it easy to stream text. - GIGAZINE Jul 29, 2026 10:27:00 Google Chrome 151 stable version released, adding a Web API that makes it easy to stream text. The latest stable version o...
- [Enable opt-in based method to measure cross-origin redirects [521861828] - Chromium](https://issues.chromium.org/issues/521861828) *(issues.chromium.org)*
  > Navigation-Timing: destination-based ... https://github.com/w3c/navigation-timing/issues/215. It <strong>enables developers to opt-in to get cross-origin redirect timings, through destination-based Timing-Allow-Origin headers</strong>....
- [Re: [blink-dev] Re: Intent to Ship: Cross-origin redirect timing opt-in](http://www.mail-archive.com/blink-dev@chromium.org/msg16880.html) *(mail-archive.com)*
  > <strong>This feature enables servers to opt-in to have their &gt; redirects measured by the destination origin of the navigation</strong>. &gt; &gt; *Blink component* &gt; Blink&gt;PerformanceAPIs&gt;NavigationTiming &gt; &lt;https://issues.chromium....
- [Timing-Allow-Origin - Expert Guide to HTTP headers](https://http.dev/timing-allow-origin) *(http.dev · 2026-06-05T12:11:37)*
  > Without the header, the following PerformanceResourceTiming attributes are zeroed for cross-origin resources: redirectStart, redirectEnd, domainLookupStart, domainLookupEnd, connectStart, connectEnd, requestStart, responseStart, secureConnectionStart...
- [[blink-dev] Intent to Prototype: Cross-origin redirect timing opt-in](http://www.mail-archive.com/blink-dev@chromium.org/msg16723.html) *(mail-archive.com)*
  > <strong>This feature enables servers to opt-in to have their redirects measured by the destination origin of the navigation</strong>. *Blink component* Blink&gt;PerformanceAPIs&gt;NavigationTiming &lt;https://issues.chromium.org/issues?q=customfield1...
- [[blink-dev] Re: Intent to Ship: Cross-origin redirect timing opt-in](http://www.mail-archive.com/blink-dev@chromium.org/msg16860.html) *(mail-archive.com)*
  > <strong>This feature enables servers to opt-in to have their &gt; redirects measured by the destination origin of the navigation</strong>. &gt; &gt; *Blink component* &gt; Blink&gt;PerformanceAPIs&gt;NavigationTiming &gt; &lt;https://issues.chromium....
- [[blink-dev] Intent to Ship: Cross-origin redirect timing opt-in](http://www.mail-archive.com/blink-dev@chromium.org/msg16840.html) *(mail-archive.com)*
  > <strong>This feature enables servers to opt-in to have their redirects measured by the destination origin of the navigation</strong>. *Blink component* Blink&gt;PerformanceAPIs&gt;NavigationTiming &lt;https://issues.chromium.org/issues?q=customfield1...
- [Re: [blink-dev] Re: Intent to Ship: Cross-origin redirect timing opt-in](http://www.mail-archive.com/blink-dev@chromium.org/msg16883.html) *(mail-archive.com)*
  > *Blink component* Blink&gt;Perfor... Let me know if you disagree. *Motivation* <strong>Enables developers to measure and optimize their cross-origin redirects, while ensuring that opt-in are secure and aligned with the developer&#x27;s intention</str...
- [[blink-dev] Re: Intent to Ship: Cross-origin redirect timing opt-in](http://www.mail-archive.com/blink-dev@chromium.org/msg16841.html) *(mail-archive.com)*
  > *Contact emails* [email protected] *Explainer* Navigation-Timing and cross-origin redirects currently have issues related to both interoperability and missing functionality. `redirectCount`, `redirectStart` and `redirectEnd` are not currently exposed...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=%22intent+to+ship%22) *(groups.google.com)*
  > issues related to both interoperability and missing functionality. &gt; &gt; `redirectCount`, `redirectStart` and `redirectEnd` are not &gt; currently exposed in Chromium forunread, Intent to Ship: Cross-origin redirect timing opt-in

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Enable opt-in based method to measure cross-origin redirects [521861828] - Chromium](https://issues.chromium.org/issues/521861828) *(issues.chromium.org)* *(Cites: `https://github.com/whatwg/html/pull/12513`)*
  > Navigation-Timing: destination-based ... https://github.com/w3c/navigation-timing/issues/215. It <strong>enables developers to opt-in to get cross-origin redirect timings, through destination-based Timing-Allow-Origin headers</strong>....
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-08 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0001.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/12513`)*
  > (2 by annevk, justinfagnani) ... intercepted fragment navigations to be cancelled with window.stop (2 by farre, noamr) https://github.com/whatwg/html/pull/12519 - #12513 Expose redirectCount for TAO opted-in redirect chains (3 by yoavweiss)...

## 📚 Platform Documentation & Specifications

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-08 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0001.html) *(lists.w3.org)*
- [PerformanceResourceTiming: redirectStart property - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/redirectStart) *(developer.mozilla.org)*
- [PerformanceResourceTiming: redirectEnd property - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/redirectEnd) *(developer.mozilla.org)*
- [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) *(developer.mozilla.org)*
- [Use cross-origin images in a canvas](https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/CORS_enabled_image) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 13 result(s) found across 7 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5078310347472896" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/whatwg/html/pull/12513" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/whatwg/fetch/pull/1931" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"cross-origin redirect timing" OR "cross-origin redirect timing opt-in" (blog OR guide OR tutorial OR performance)` — *Finds developer guides and blog posts explaining how to opt in to and measure cross-origin navigation redirects.* (8 returned)
  - `"PerformanceNavigationTiming" ("redirectStart" OR "redirectEnd") "cross-origin" ("Timing-Allow-Origin" OR opt-in)` — *Targets code examples and documentation demonstrating PerformanceNavigationTiming API usage with cross-origin redirect opt-in headers.* (7 returned)
  - `"cross-origin redirect timing" ("intent to prototype" OR "intent to ship" OR site:chromestatus.com OR site:groups.google.com/a/chromium.org)` — *Locates browser engine announcements, Blink intent threads, and standard adoption tracking for the opt-in feature.* (1 returned)
  - `site:github.com ("whatwg/fetch/pull/1931" OR "whatwg/html/pull/12513" OR ("cross-origin redirect timing" issues))` — *Surfaces specification pull requests, security/privacy reviews, and working group discussions across WHATWG repositories.* (0 returned)
- **Google Search Grounding (gemini-3.7-flash):** 8 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 2 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5078310347472896)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5078310347472896)
- [Specification](https://github.com/whatwg/fetch/pull/1931)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/521861828)
