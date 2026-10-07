# Remove FencedFrame element and window.fence APIs

> **Report Week:** 2026-W41 | **Milestone:** Chrome 156 | **Category:** Deprecated

## Overview

Fenced frames are nested frames that embed content onto a page without the ability to share data between the fenced frame and its embedder.   window.fence APIs include Fenced frames Ads reporting (FFAR) JS APIs that were created for privacy-safe ads reporting from FFs created using Protected Audience and SelectURL and getNestedConfigs() to support PA component ads.   This intent is for removing both of these. Fenced frames element removal will be two step as detailed below.  With the removal (or stub API replacement) of PA and selectURL, FFs can no longer be navigated and thus it is safe to remove them. Fenced frames are only able to be navigated using the urn:uuid in a FencedFrameConfig\[1\], which can only be created using the return values from runAdAuction and selectURL. These APIs are being deprecated and removed in M152 as per the following Intent threads: Protected Audience\[2\], Shared Storage\[3\].   Plan: Given that the fenced frames element can no longer be navigated, we propose removing the element from the code in the following phases:  1. M156: Keep the fenced frame element and its associated IDL dependencies as stubs. This is to ensure no JS call throws, e.g.calling fenced-frame-element.config.setSharedStorageContext().   2. M156: In the same milestone we will also stub the window.fence APIs completely. Since there is no FF document navigation, these APIs cannot be invoked anymore, so it will be a no-op.  3. M157 Canary/Beta: Begin a controlled rollout of the stub FF HTML element removal via a field trial. Note that removing the element will resolve it to HTMLUnknownElement.   At this point we are requesting approvals for all of the above steps.  4. M157 Stable: Assuming there are no regressions or breakage after reaching 1% stable, we will request additional approval for full removal of the FF element.   \[1\]https://source.chromium.org/chromium/chromium/src/+/main:third\_party/blink/renderer/core/html/fenced\_frame/fenced\_frame\_config.idl \[2\]https://groups.google.com/a/chromium.org/g/blink-dev/c/k\_nubsMb97g/m/awPD4IGLBAAJ \[3\]https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc/m/WFTFnhyJBAAJ

### Motivation

As described in the summary section, since fenced frames are no longer able to be navigated to a document, once PA and selectURL are removed, we should also remove FFs API for code health and to remove unused APIs from the web platform.

## Ecosystem Status

- **Momentum:** High (320 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** The \`&lt;fencedframe&gt;\` element and companion \`window.fence\` APIs are being formally removed from Chromium starting with stubbing in Chrome 156 and full removal targeted for Chrome 157. This deprecation directly follows the phase-out of dependent Privacy Sandbox APIs (Protected Audience and Shared Storage \`selectURL\`), which leaves fenced frames without valid navigation sources. The technology never attained cross-browser consensus, having received a formal 'negative' stance from Mozilla and indifference from WebKit, effectively terminating its existence as a Blink-only experiment.

### Recommendations
- Actionable Advice: Immediately remove all references to \`&lt;fencedframe&gt;\`, \`FencedFrameConfig\`, and \`window.fence\` ads-reporting APIs from production codebases, migrating back to standard sandboxed \`&lt;iframe&gt;\`s where necessary. Ensure that feature detection or DOM queries do not rely on \`HTMLFencedFrameElement\`, as the constructor will downgrade to \`HTMLUnknownElement\` during Chrome 157 rollouts.
- Marked for deprecation in Chrome 156. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHUda1p5ux00fAUw-NE54HjXkdVWZOuhc0KYMEc_1Y_v3MVFG4-WDOnurgYSK-LRx3F9AiFGBp4nrVD9CrZJm0SdQPWkTicllu_ph_jnZXrToD3xbbkylkrdd7QNrnCre1eqocQYN5mijaaJAipyIPp0OA1GtsRFc7O-IXAQMc4urp_p4MUQg==) *(vertexaisearch.cloud.google.com)*
  > <fencedframe> HTML fenced frame element - HTML | MDN Skip to main content Skip to search Toggle sidebar Web HTML Reference Elements <fencedframe> Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE87nJzlnToYDMmon4mr6CmApR-YiSiiSJ_k0LPHTXfwluZjCekidDpS10qswhBWSU48TfVYtebwKPLNjsAbJwcTNUP2EE6pJnj8M16VJXUaWoj-L8bq481EN9HRjXID_UR9ODN-kGWeKA-olsxA0lxbGV3ALb00w==) *(vertexaisearch.cloud.google.com)*
  > Fenced Frame API - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Fenced Frame API Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 中文 (简体) Fenced Frame API Deprec...
- [hidekazu-konishi.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQELfwzYTyR1r1iehXMx0RQKsECi_WMUsZd9VnZkZZSqFLmz2z_uQjwHZMNJL0QwcxL701rqaWqLF4sxjpVb8GuZY0yvaquTO50aGru_5vWx4-blOZfHMmN66FCHjNNmRK7CRsNn43bqiEG0DIaPuyXJ1Vc2QMCT2s-kTq9DMetepJ8y) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature Removal  Following the revised roadmap for the Privacy Sandbox and the deprecation of dependent APIs (such as **Protected Audience** and **Shared Storage `selectURL`**), the Chromium team published an **Intent to Remove the
- [zenn.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGzMfXcIwOIvRhGupsH5jIRtl38Zc7BrO-RTHioC4_Dp57Zp_N9K75wIUDhiaYT0GvG3qgzVpFgpTtNc1N9bHGanUieZdovTMSWWI_d31cVWdxRMaUdzEsijwWChISJqSNJqK0TV_9e5-1u0hW_bCp3rAjPUm7cqdvOHHk=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature Removal  Following the revised roadmap for the Privacy Sandbox and the deprecation of dependent APIs (such as **Protected Audience** and **Shared Storage `selectURL`**), the Chromium team published an **Intent to Remove the
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17167.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; [1] &gt;&gt; https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/html/fenced_frame/fenced_frame_config.idl &gt;&gt; &gt;&gt; [2] &gt;&gt; https://groups.google.com/a/chromium.org/g/blink-dev/c/k_...
- [\[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17144.html) *(mail-archive.com)*
  > Explainer https://<strong>github.com/WICG/fenced-frame/blob/master/explainer/README.md</strong> Specification https://wicg.github.io/fenced-frame Summary Fenced frames are nested frames that embed content onto a page without the ability to share data...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17248.html) *(mail-archive.com)*
  > [1]https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/html/fenced_frame/fenced_frame_config.idl [2]https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g/m/awPD4IGLBAAJ [3]https://groups.google.com/a/...
- [Remove FencedFrame element and window.fence APIs](https://chromestatus.com/feature/6366274495053824) *(chromestatus.com · 2026-07-24T00:00:00)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17145.html) *(mail-archive.com)*
  > These APIs &gt; are being deprecated and removed in M152 as per the following Intent &gt; threads: Protected Audience[2], Shared Storage[3]. Plan: Given that the &gt; fenced frames element can no longer be navigated, we propose removing the &gt; elem...
- [Fenced frames overview \| Privacy Sandbox](https://privacysandbox.google.com/private-advertising/fenced-frame) *(privacysandbox.google.com · 2026-08-14T00:00:00)*
  > Privacy Sandbox feature status provides more information about the status of individual APIs and platform features. ... Securely embed content onto a page without sharing cross-site data. Scheduled for phaseout. Intent to Ship: Remove FencedFrame ele...
- [Fenced Frame: Guidelines for Feature Behavior](https://chromium.googlesource.com/chromium/src/+/master/content/browser/fenced_frame/README.md) *(chromium.googlesource.com)*
  > If you determine that your feature needs a fenced frame to access the outer frame tree (i.e. act as an iframe), you must ensure that no information can leak across the fenced boundary. If any information can leak across the boundary, the feature must...
- [1123606 - chromium - An open-source project to help move the web forward. - Monorail](https://bugs.chromium.org/p/chromium/issues/detail?id=1123606) *(bugs.chromium.org · 2022-05-26T00:00:00)*
  > About Monorail User Guide Release Notes Feedback on Monorail Terms Privacy
- [fenced-frame - external/github.com/web-platform-tests/wpt - Git at Google](https://chromium.googlesource.com/external/github.com/web-platform-tests/wpt/+/refs/heads/epochs/daily/fenced-frame) *(chromium.googlesource.com)*
  > There is also a helper attachIFrameContext(), which does the same thing but for iframes instead of fencedframes. There is also a helper replaceFrameContext(frame, {options}) which will replace an existing frame context using the same underlying eleme...
- [fenced-frame - external/w3c/web-platform-tests - Git at Google](https://chromium.googlesource.com/external/w3c/web-platform-tests/+/refs/tags/merge_pr_44503/fenced-frame) *(chromium.googlesource.com)*
  > There is also a helper attachIFrameContext(), which does the same thing but for iframes instead of fencedframes. There is also a helper replaceFrameContext(frame, {options}) which will replace an existing frame context using the same underlying eleme...
- [Window frameElement Property](https://www.w3schools.com/jsref/prop_win_frameelement.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17173.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; With the removal (or stub API replacement) of PA and selectURL, FFs can &gt;&gt;&gt;&gt; no longer be navigated and thus it is safe to remove them. &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Fenced frames are only able to be navigated using t...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17565.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: [blink-dev] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs · Shivani Sharma Mon, 28 Sep 2026 07:59:54 -0700 · Another quick update (already updated in the chromestatusentry): We landed...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=Intent+to+Ship) *(groups.google.com)*
  > Intent to Ship: Remove FencedFrame element and window.fence APIs
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com · 2026-08-14T00:00:00)*
  > Intent to Ship: Remove FencedFrame element and window.fence APIs
- [FencedFrameConfig interface - WebIDLpedia](https://dontcallmedom.github.io/webidlpedia/names/FencedFrameConfig.html) *(dontcallmedom.github.io)*
  > Fenced Frame defines FencedFrameConfig · [Exposed=Window, Serializable] interface FencedFrameConfig { constructor(USVString url); undefined setSharedStorageContext(DOMString contextString); }; FencedFrameConfig() HTMLFencedFrameElement.config · Fence...
- [Fenced frames: Disallow window.fence.reportEvent from ad component fenced frames. \[chromium/src : main\]](https://groups.google.com/a/chromium.org/g/blink-reviews/c/MhTC-Qfb1IY) *(groups.google.com · 2023-03-31T11:50:04)*
  > FencedFrameConfig 2. FencedFrameProperties 3. RedactedFencedFrameProperties This flag is used in renderer to disallow window.fence.reportEvent invocation from ad component fenced frames.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17167.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > &gt;&gt; &gt;&gt; [1] &gt;&gt; https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/html/fenced_frame/fenced_frame_config.idl &gt;&gt; &gt;&gt; [2] &gt;&gt; https://groups.google.com/a/chromium.org/g/blin...
- [\[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17144.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > Explainer https://<strong>github.com/WICG/fenced-frame/blob/master/explainer/README.md</strong> Specification https://wicg.github.io/fenced-frame Summary Fenced frames are nested frames that embed content onto a page without the ability to ...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17248.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > [1]https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/html/fenced_frame/fenced_frame_config.idl [2]https://groups.google.com/a/chromium.org/g/blink-dev/c/k_nubsMb97g/m/awPD4IGLBAAJ [3]https://groups.goo...

## 📚 Platform Documentation & Specifications

- [Remove FencedFrame element and window.fence APIs · Issue #30 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/30) *(github.com)*
- [\[rule\] element/fencedframe · Issue #110 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/110) *(github.com)*
- [\[rule\] element/fencedframe · Issue #431 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/431) *(github.com)*
- [Window: fence property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/fence) *(developer.mozilla.org)*
- [Fenced Frame API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fenced_frame_API) *(developer.mozilla.org)*
- [Fence - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fence) *(developer.mozilla.org)*
- [&lt;fencedframe&gt; HTML fenced frame element - HTML \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fencedframe) *(developer.mozilla.org)*
- [Window - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window?retiredLocale=ar) *(developer.mozilla.org)*
- [&lt;fencedframe&gt; HTML fenced frame element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fencedframe) *(developer.mozilla.org)*
- [Fence: getNestedConfigs() method - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fence/getNestedConfigs) *(developer.mozilla.org)*
- [turtledove/Fenced\_Frames\_Ads\_Reporting.md at main · WICG/turtledove](https://github.com/WICG/turtledove/blob/main/Fenced_Frames_Ads_Reporting.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 43 result(s) found across 13 planned queries — **28 verified relevant**
  - `"chromestatus.com/feature/6366274495053824" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/fenced-frame/blob/master/explainer/README.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"wicg.github.io/fenced-frame" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Remove FencedFrame element and window.fence APIs" API` — *Core feature API query* (8 returned)
  - `"Remove FencedFrame element and window.fence APIs" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (5 returned)
  - `"window.fence" OR "element.config" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Remove FencedFrame element and window.fence APIs" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Remove FencedFrame element and window.fence APIs" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Intent to Deprecate and Remove" "FencedFrame" OR "window.fence" site:groups.google.com/a/chromium.org/g/blink-dev` — *Find official Blink-dev discussions, feedback, and intent threads regarding the deprecation and removal of fenced frames and window.fence.* (1 returned)
  - `"fencedframe" OR "window.fence" "Protected Audience" "Privacy Sandbox" removal OR deprecation` — *Search industry analysis and ad tech ecosystem reactions to the removal of fenced frames in conjunction with Protected Audience changes.* (8 returned)
  - `"HTMLFencedFrameElement" OR "window.fence" config "urn:uuid" code example` — *Discover JavaScript code samples and WebIDL implementations showing how fenced frame elements and window.fence APIs were originally structured.* (3 returned)
  - `"fenced frame" OR "window.fence" "reportEvent" OR "getNestedConfigs" tutorial OR guide` — *Locate practical developer tutorials, guides, and explainers detailing how Fenced Frames Ads Reporting (FFAR) and nested configs operated.* (8 returned)
  - `"fencedframe" site:github.com/WICG/fenced-frame/issues removal OR deprecate` — *Track standards development, issue tracking, and specification debate around winding down the fenced frame API in the official WICG repository.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 8 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 9 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6366274495053824)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6366274495053824)
- [Specification](https://wicg.github.io/fenced-frame)
- [Chromium Tracking Bug](https://issues.chromium.org/538634423)
