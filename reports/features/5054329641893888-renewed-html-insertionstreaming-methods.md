# Renewed HTML insertion&streaming methods

> **Report Week:** 2026-W39 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document.  - Positional methods (before/after/append/prepend/replaceWith) that take HTML as argument, effectively replacing insertAdjacentHTML. - Streaming methods (stream{Append}HTML{Unsafe}) which return a WritableStream - Passing {runScripts} as part of SetHTMLUnsafeOptions, mimicking createContextualFragment behavior. - Supporting createParserOptions in trusted types, allowing trusted types to override scripting mode and sanitizer.

### Motivation

Updating HTML dynamically from script has multiple disjointed API, each with its own subtle differences.
Developers can partially update an element using insertAdjacentHTML, use sanitizer with setHTML, execute scripts with createContextualFragment, stream with detached documents. 

This can be confusing and frustrating to web developers, as well as create bugs or security issues if the differences are not well understood.

This change replaces those with a coherent set of methods and arguments, that use the same settings (sanitizer/runScripts) with different variants (where to insert the HTML, stream/one-shot, safe/unsafe) as well as the same support in trusted types.

## Ecosystem Status

- **Momentum:** High (330 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The renewed HTML insertion and streaming methods modernize and unify decades of disjointed dynamic markup APIs (such as insertAdjacentHTML, createContextualFragment, and innerHTML) into intuitive positional and WritableStream-capable primitives. Shipping by default in Chrome 155, the feature forms a core pillar of the broader Declarative Partial Updates initiative. Consensus is building rapidly within WHATWG, marked by Mozilla's formal endorsement and active cross-engine standards alignment.

### Recommendations
- Actionable Advice: Adopt feature detection (checking for \`'appendHTML' in Element.prototype\` or \`'streamAppendHTML' in Element.prototype\`) and test in Chrome 155+. While polyfills like \`html-setters-polyfill\` are appearing, maintain existing fallback pipelines (e.g., \`insertAdjacentHTML\` or \`setHTMLUnsafe\`) for production multi-browser traffic until Firefox and Safari ship native support.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @o-t-w: "This feature is due to ship in \[Chrome 154\](https://developer.chrome.com/blog/chrome-154-beta?hl=en#renewed\_html\_insertion\_and\_streaming\_methods). Moz..."
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [HTML streaming & revamped DOM parsing](https://github.com/WebKit/standards-positions/issues/629) [open]
- **Mozilla:** [HTML streaming & revamped DOM parsing](https://github.com/mozilla/standards-positions/issues/1370) [closed]

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHfdw22ybCpBcLHb0bCeBfr2AR4fMf869K57TR09Qgqn10SOdqg1fpuehZ56sHSjWhbLHv5PxsozpxqZ6AQEss27NoFpwNrdZmsABSa7oNn4vmF4gJBedYE6ruziveSaT6aUwtz2PQi) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [daily.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF95RRr4iNHDyxx1NR9GXnl1tgnty0LD2ywYZVQwPngbpex1QvfYiB6kJb2KTTV2TdVS-Evm-jFyAs_9U81hewR1NB1WgawSWMIDH2Eo7Lq2SpQqDR89-Zoe56ZusukxZf1r8kDlknb3yekkxZLzFeeGSlv) *(vertexaisearch.cloud.google.com)*
  > Declarative partial updates | daily.dev Chrome Developers Read post Declarative partial updates Chrome 148 introduces two new web platform APIs under the Declarative Partial Updates initiative. The first enables out-of-order HTML streaming using proc...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG-ibldoq5MrCPfcqyjW_KaZ1VndYnCpkdoVr4eCGViiuKxMCIE9R0xiabEJ9ow4tGeg_bPaguLUaveMztEZI5UvoDgLRLj5JbTyg_XmMyGWA0UFzcuAYa9SV1uuFYdZBL_FzYxaAKFOxk5EbFI4w==) *(vertexaisearch.cloud.google.com)*
  > HTML streaming & revamped DOM parsing · Issue #629 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refr...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF7gJ_S9nsOivn96agiyLyyiqGada5atnQ3f66XEq4XXN3q4t7zV775K5y30586gZLq_hP_56CJ_4yLImlB8geAEYFg0mco-3r6i--5GoKOpbhAFAZK9O85CxacOTY1wSqgn4hUABmEnAfv21b0SZuNyVQmpwIVOlYs3rnrAP8Hhw==) *(vertexaisearch.cloud.google.com)*
  > Bản cập nhật một phần mang tính khai báo | Web Platform | Chrome for Developers Chuyển ngay đến nội dung chính / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עבר...
- [freecodecamp.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEupkC7-l7LD3Zs-P8Vb_nEYk9vAt7J2mmN50HJ080mqGoEFN7MDWbtffZUD_5cgpbOmtgCdxRkgNjqxsmCuW8xOOiVgJzOZ3-T8CE3tHxUmetZ_bUKvhFk_h76VEdF_E6OMYZUkF9fT03WxIDRTodF_7n0Qve93DvE2TMbMjDkrqk75grr) *(vertexaisearch.cloud.google.com)*
  > How Declarative Partial Updates Work in HTML May 29, 2026 / #HTML5 How Declarative Partial Updates Work in HTML Sumit Saha HTML has always supported streaming. The server doesn't need to build an entire page in memory before sending it to the browser...
- [olliewilliams.xyz](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHo3FILpoEmDDr1s2uUAMbBwkQh9kMzlCGLx9So-zmSdhN2Bka-LsbZhLWqWwIJYRW7ztFGzlxPU70U9rGzCy8a4Kvv6iicQDDruA727GZdvMCoW4knYLC1wd-yayALCR4rjRNf) *(vertexaisearch.cloud.google.com)*
  > Streaming HTML Jun 5, 2026 Streaming HTML Getting a stream of HTML via fetch() How do we get a stream of text from a fetch call? response.text() decodes the response as text but returns it all at once, not as a stream. For that reason, it is not appr...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHaiA6AMQ_7lfRHfrtYRjo9BMJZ_L7pFbSrAZRI8rlH1uOnGaYMGnAaxAwSWCLnGQk7OJqLAHmHXSmlz4ikA15cIYx3ZyOng_6aZjFGhMgDw_t0A_dLMr4Qf-aAaUEdFrXmM_04XUeQatpVcyklhXg8Sdy6duWrRMsOqFDHlAfRqyG_0LuGZ3AZxQF1QNdWmu-4yWkhCHzHTw==) *(vertexaisearch.cloud.google.com)*
  > declarative-partial-updates/dynamic-markup-revamped-explainer.md at main · WICG/declarative-partial-updates · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGkQOl4t-H11BWzKXt8eCVcRfLHXM1Z1FrH7tCMyuYwMyuwSPmiu73b7bdgk7pdfxscJ12mjCS_IE9z_ObC6ernWMYoycFJ4LKg93kJX6RJx2DdG7lukzfqTTUoduHerLoKLhxfPGTWcok=) *(vertexaisearch.cloud.google.com)*
  > GitHub - WICG/declarative-partial-updates · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You signed out in an...
- [web-standards.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE1EDXT0o16iQHVkZ3zS4fOxcq0SKRpIWIjqq5W1opcN6ENRpoRvxUu_Yc9b9p2um_nFPbECwRtTZYOiqNTFpVLMdKMm3yhowQkkcu2ZY6WUtRAo3RV62EU9k5ReIJX1U3cDBLQbVg0NAVoDIXiSCpcrcd2Yh6Gx4fh) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Renewed HTML insertion & streaming methods"** proposal (specced under WHATWG and WICG as part of the broader **Declarative Partial Updates (DPU)** initiative) standardizes and cleans up the fragmented legacy DOM ins
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEMkEhndaxcRmvxouL3pAYf_U4seJFS6SjuncjGBvIzgJrX8HGiHhkvtlB0bwEj9SXrjb30Li_fK_BzU6TRI8jzPksvh8W0Si-3nSUym3PhbqhmZaU5nFLOc39GYPBaI6s_ZQT4S39X) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Renewed HTML insertion & streaming methods"** proposal (specced under WHATWG and WICG as part of the broader **Declarative Partial Updates (DPU)** initiative) standardizes and cleans up the fragmented legacy DOM ins
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGuCxOqyn2cBpVtaRmiMhdUg8elwWUlHHcejedmRaAz4F849sqtNho8uOU9JoE9FKi3_8r5pUMiwG6loBaO5YMtwOJE3dFN_xpLsmJyHMe2yzNohNgWUpO5lY1bPHvBw-KpIkvtcCqp8r-kk4vJLmEU) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Renewed HTML insertion & streaming methods"** proposal (specced under WHATWG and WICG as part of the broader **Declarative Partial Updates (DPU)** initiative) standardizes and cleans up the fragmented legacy DOM ins
- [freecodecamp.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHQJf6ClYvbQeSuUi1xQsDlrbCpQPR0dDbc3APlkXUod_IBKSlmJ7l-lbxxn5mHf1gy5FHdJ_WdN6t_Is6Nj52HFMSu9Nr3g_R597uldkWYMu05tr0HlQD-4oPE-1gM1w29WbPy4be2h_7AwHuPMSeYSpR6wtgfb5fsC-U6f4bSDZtGHsR0) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Renewed HTML insertion & streaming methods"** proposal (specced under WHATWG and WICG as part of the broader **Declarative Partial Updates (DPU)** initiative) standardizes and cleans up the fragmented legacy DOM ins
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGd19TghYultpdSQvAEPuiHBqilVbfk9qw5Ogt9goCkpE3g180p0W8n784eQz4TwRr_w1rIhQUufl50XRac9eWxJdjmVNVcbraz2B7NFZkRfJazOqmXiGY5aGRciDrqKYvHDYVdU1KoFYwNQa3UiQel0nu5prkv4qvVc5Vn) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Renewed HTML insertion & streaming methods"** proposal (specced under WHATWG and WICG as part of the broader **Declarative Partial Updates (DPU)** initiative) standardizes and cleans up the fragmented legacy DOM ins
- [infoq.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFR1L0V62qdGCqlpdaSB0RyUSX_WbgGZWEaoggXeRVTAnboN-nRRtYlvUD8MbDKv6CXDtqrxyeA0gbjsGAePPLqHq9gZ9eygKluZ4yOl4lyVUn9cJO8hPWVWE9-08uY6EAOEZntPBknSgbrBdugI7j354lWjijDFH9BNRLnZxnnNv1M3Q==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Renewed HTML insertion & streaming methods"** proposal (specced under WHATWG and WICG as part of the broader **Declarative Partial Updates (DPU)** initiative) standardizes and cleans up the fragmented legacy DOM ins
- [zenn.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHaCMfHZ4MhY8myuofzgVicTFenDl9uB6SaP0VqIZp-uKpTHK6s43rMM_VPCFkqiluGtQXzUEgrk-x5_cAf4XWTFMZKKGIkE1iTplAh2jBQrH1DeGrozzdK2GSdbB55zMqi4y5yRGlb) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Renewed HTML insertion & streaming methods"** proposal (specced under WHATWG and WICG as part of the broader **Declarative Partial Updates (DPU)** initiative) standardizes and cleans up the fragmented legacy DOM ins
- [youtube.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHbJpiZFupEIJlCAsA1Zk4LG13orCDkKp6ER_oC-jOezXeEYrjzUUyq849-Gq3sZebxMcXc5AqFvkxmtrFQJOoE6lH_bHuvJWO1k_QLgNifCWFOh0CwON_JFll6rEwIG6s=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Renewed HTML insertion & streaming methods"** proposal (specced under WHATWG and WICG as part of the broader **Declarative Partial Updates (DPU)** initiative) standardizes and cleans up the fragmented legacy DOM ins
- [joomla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFq-QeYBRnA8gK7T14gmadB-GejAK06H2O_5LH9qiO6vhTE-mSXpVNr1v4DwH5U-oaXQLZlcbbV1olnOh3qREWPehUFHE4SKCGkAd4F6kYzCRDvbNkYcmw3yHNCldM_CO3LhA7M-Wv8RlY-64jTsZuudr8SyeX37cVvKKx8z_qFA-yipzK9kU4kx0l5c32f0Bv0NjtcKgfto6sU4p95NlLi0Y1yTP6Lq-ytnLrxgDKguA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Renewed HTML insertion & streaming methods"** proposal (specced under WHATWG and WICG as part of the broader **Declarative Partial Updates (DPU)** initiative) standardizes and cleans up the fragmented legacy DOM ins
- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)*
  > Explainer https://github.com/W...namic-markup-revamped-explainer.md#resulting-api Summary <strong>Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document</strong>....
- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)*
  > Explainer https://github.com/W...namic-markup-revamped-explainer.md#resulting-api Summary <strong>Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document</strong>....
- [Re: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17089.html) *(mail-archive.com)*
  > Draft versions of both exist &gt;&gt; in isolation but they would all need to be rebased on top of the stack: &gt;&gt; https://github.com/whatwg/html/pull/12528 (positional methods to replace &gt;&gt; insertAdjacentHTML) &gt;&gt; https://github.com/w...
- [\[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17004.html) *(mail-archive.com)*
  > Thanks for working to make this into a consistent API surface! This seems like something the TAG should have a chance to look at, would you mind filing a TAG review? After scanning through https://github.com/whatwg/html/issues/11669 and the sub-issue...
- [HTML5 Live Streaming Player: How to Embed Live Video on Your Website -](https://www.yololiv.com/blog/html5-live-streaming-player-embed-website) *(yololiv.com · 2026-05-18T09:17:36)*
  > <strong>This guide walks through how HTML5 live streaming players work, how to embed live video on your website in minutes</strong>, and how to choose a platform that gives you full control over your brand, audience data, and monetization — without f...
- [How to Insert Images in HTML PowerPoint Slides: Complete Guide (2026) \| Tosea.ai](https://tosea.ai/blog/insert-images-html-powerpoint-slides-guide-2026) *(tosea.ai · 2026-05-12T00:00:00)*
  > The two methods cover different stages of the editing flow, and picking the right one saves rework: <strong>Use outline-stage insertion when you already have the source figures</strong>.
- [HTML - One shot! - Manju blogs - Hashnode](https://manjublogs.hashnode.dev/html-one-shot) *(manjublogs.hashnode.dev · 2023-01-23T02:35:39)*
  > Here, the walls may be thought of as HTML files; they give the website body so that we can continue to make it seem fashionable and provide comfort to visitors using Javascript DOM manipulation. The CSS and HTML will be covered in the upcoming instru...
- [Studocu - Free summaries, lecture notes & exam prep](https://www.studocu.com/in/document/savitribai-phule-pune-university/batchlor-of-computer-scine/html-css-js-full-one-shot-notes-comprehensive-guide-to-web-development/150233708) *(studocu.com)*
  > Share free summaries, lecture notes, exam prep and more!!
- [ReactJS, MongoDB, JS, CSS in one shot while building an App - DEV Community](https://dev.to/ssd/reactjs-mongodb-js-css-in-one-shot-while-building-an-app-3f43) *(dev.to · 2023-06-23T13:08:08)*
  > Today we&#x27;ll see only the necessary things that one needs to get started with web development like knowing necessary stuff of HTML, CSS, JS and ReactJS and using MongoDb.
- [Javascript Beginner to Advanced: Value Bomb in one Shot - DEV Community](https://dev.to/singhdevhub/javascript-beginner-to-advanced-value-bomb-in-one-shot-2ll6) *(dev.to · 2023-07-18T17:40:39)*
  > ... And If you guys prefer video tutorials, Then follow this YouTube video. <strong>Function is a way to collate the code at one place which can be called at any place so that we don&#x27;t have to write that code again and again</strong>.
- [Chrome Declarative Partial Updates: Native HTML Streaming in 148 \| byteiota](https://byteiota.com/chrome-declarative-partial-updates-native-html-streaming-in-148) *(byteiota.com · 2026-06-04T05:07:53)*
  > Chrome is shipping something the web platform has needed for twenty years: <strong>a native way to stream HTML into specific DOM slots as server data resolves — no JavaScript library required</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > HTML streaming methods, https://<strong>chromestatus.com/feature/5054329641893888</strong>
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com · 2026-06-17T18:03:04)* *(Cites: `https://chromestatus.com/feature/5054329641893888`)*
  > Available behind a flag from Chrome 148. Shipping in Chrome 154: https://<strong>chromestatus.com/feature/5054329641893888</strong>
- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > Explainer https://github.com/W...namic-markup-revamped-explainer.md#resulting-api Summary <strong>Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document</strong>....
- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > Explainer https://github.com/W...namic-markup-revamped-explainer.md#resulting-api Summary <strong>Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document</strong>....

## 📚 Platform Documentation & Specifications

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [HTML enhanced setter and streaming methods · Issue #4117 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4117) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 34 result(s) found across 7 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/5054329641893888" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"Renewed HTML insertion&streaming methods" API` — *Core feature API query* (3 returned)
  - `"Renewed HTML insertion&streaming methods" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"one-shot" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Renewed HTML insertion&streaming methods" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Renewed HTML insertion&streaming methods" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 17 result(s) found — **17 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **2 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 114034 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5054329641893888)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5054329641893888)
- [Specification](https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md#resulting-api)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/491743369)
