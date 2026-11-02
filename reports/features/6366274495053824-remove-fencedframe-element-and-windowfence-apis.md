# Remove FencedFrame element and window.fence APIs

> **Report Week:** 2026-W45 | **Milestone:** Chrome 156 | **Category:** Deprecated

## Overview

Fenced frames are nested frames that embed content onto a page without the ability to share data between the fenced frame and its embedder.   window.fence APIs include Fenced frames Ads reporting (FFAR) JS APIs that were created for privacy-safe ads reporting from FFs created using Protected Audience and SelectURL and getNestedConfigs() to support PA component ads.   This intent is for removing both of these. Fenced frames element removal will be two step as detailed below.  With the removal (or stub API replacement) of PA and selectURL, FFs can no longer be navigated and thus it is safe to remove them. Fenced frames are only able to be navigated using the urn:uuid in a FencedFrameConfig\[1\], which can only be created using the return values from runAdAuction and selectURL. These APIs are being deprecated and removed in M152 as per the following Intent threads: Protected Audience\[2\], Shared Storage\[3\].   Plan: Given that the fenced frames element can no longer be navigated, we propose removing the element from the code in the following phases:  1. M156: Keep the fenced frame element and its associated IDL dependencies as stubs. This is to ensure no JS call throws, e.g.calling fenced-frame-element.config.setSharedStorageContext().   2. M156: In the same milestone we will also stub the window.fence APIs completely. Since there is no FF document navigation, these APIs cannot be invoked anymore, so it will be a no-op.  3. M157 Canary/Beta: Begin a controlled rollout of the stub FF HTML element removal via a field trial. Note that removing the element will resolve it to HTMLUnknownElement.   At this point we are requesting approvals for all of the above steps.  4. M157 Stable: Assuming there are no regressions or breakage after reaching 1% stable, we will request additional approval for full removal of the FF element.   \[1\]https://source.chromium.org/chromium/chromium/src/+/main:third\_party/blink/renderer/core/html/fenced\_frame/fenced\_frame\_config.idl \[2\]https://groups.google.com/a/chromium.org/g/blink-dev/c/k\_nubsMb97g/m/awPD4IGLBAAJ \[3\]https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc/m/WFTFnhyJBAAJ

### Motivation

As described in the summary section, since fenced frames are no longer able to be navigated to a document, once PA and selectURL are removed, we should also remove FFs API for code health and to remove unused APIs from the web platform.

## Ecosystem Status

- **Momentum:** Emerging (+30 points since 2026-10-12; footprint 230 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chrome is deprecating and removing the \`&lt;fencedframe&gt;\` element and \`window.fence\` APIs across Chrome 156 and Chrome 157 following the sunset of prerequisite Privacy Sandbox auction APIs like Protected Audience and Shared Storage selectURL. Because fenced frames can no longer navigate without these upstream auction outputs, the container has become non-functional dead code within Blink. Since neither WebKit nor Gecko ever implemented the specification, removing it eliminates single-engine fragmentation with zero negative cross-browser compatibility risk.

### Recommendations
- Actionable Advice: Audit existing ad components, analytics scripts, and test suites to completely remove references to \`&lt;fencedframe&gt;\`, \`FencedFrameConfig\`, and \`window.fence\` APIs before Chrome 157 converts the element into an \`HTMLUnknownElement\`. Replace any legacy fenced frame wrappers with standard, partitioned \`&lt;iframe&gt;\` elements paired with appropriate Permissions-Policy directives.
- Marked for deprecation in Chrome 156. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Fenced frames overview  \|  Privacy Sandbox](https://privacysandbox.google.com/private-advertising/fenced-frame) *(privacysandbox.google.com)*
  > fence\` APIs\*\* marks the official sunsetting of Chrome’s specialized cross-site privacy embed container \*\*Remove Element Declarations:\*\* If you developed ad components or test suites using \`&lt;fencedframe&gt;\`, migrate them back to standard partitioned \`&lt;i...
- [hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > Following Chrome's shift in its third-party cookie phase-out strategy and the deprecation/stubbing of those parent auction APIs in Chrome 152, \`&lt;fencedframe&gt;\` elements can no longer navigate to any destination document
- [appspot.com](https://cr-status.appspot.com/feature/6366274495053824?gate=5364408546099200) *(cr-status.appspot.com)*
  > \*\*Interop & Compatibility:\*\* Neither Apple (WebKit) nor Mozilla (Gecko) implemented \`&lt;fencedframe&gt;\`, so removal brings zero cross-browser interoperability risk and simplifies Blink’s frame architecture Chromium engineers noted that while removing non...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > fence APIs”\* outlines the code-health rationale for pruning dead features
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com)*
  > \*\*Summary:\*\* Google updated its developer portal status dashboards, formally marking \`&lt;fencedframe&gt;\`, Fenced Frame Ads Reporting (FFAR), and Fenced Storage Read under \*\*"Scheduled for phaseout"\*\*
- [Fenced frames overview  \|  Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame) *(developer.chrome.com)*
  > \*\*Summary:\*\* Google updated its developer portal status dashboards, formally marking \`&lt;fencedframe&gt;\`, Fenced Frame Ads Reporting (FFAR), and Fenced Storage Read under \*\*"Scheduled for phaseout"\*\*
- [cevdet.ch](https://deadhead.cevdet.ch/rules/element/fencedframe) *(deadhead.cevdet.ch)*
  > Discusses rule sets for static analyzers and linters to detect obsolete elements \*\*Remove Element Declarations:\*\* If you developed ad components or test suites using \`&lt;fencedframe&gt;\`, migrate them back to standard partitioned \`&lt;iframe&gt;\` elements
- [zenn.dev](https://zenn.dev/cybozu_frontend/articles/web_standards_trends_202608) *(zenn.dev)*
  > Articles covering monthly Blink and W3C standard tracks grouped this change with other cleanup efforts (such as the deprecation of client-side XSLT and legacy URN replacement APIs)
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17565.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Shivani Sharma Mon, 28 Sep 2026 07:59:54 -...
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17168.html) *(mail-archive.com)*
  > Fenced frames element removal &gt;&gt;&gt; will be two step as detailed below. &gt;&gt;&gt; With the removal (or stub API replacement) of PA and selectURL, FFs can &gt;&gt;&gt; no longer be navigated and thus it is safe to remove them. &gt;&gt;&gt; &...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17234.html) *(mail-archive.com)*
  > Fenced frames &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; element removal will be two step as detailed below. With the removal &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; (or &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; stub API replacement) of PA and selectURL, FFs can no longer be ...
- [\[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17144.html) *(mail-archive.com)*
  > These APIs are being deprecated and removed in M152 as per the following Intent threads: Protected Audience\[2\], Shared Storage\[3\]. Plan: Given that the fenced frames element can no longer be navigated, we propose removing the element from the code in...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17323.html) *(mail-archive.com)*
  > With the removal &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; (or &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; stub API replacement) of PA and selectURL, FFs can no longer be &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; navigated &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;...
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17175.html) *(mail-archive.com)*
  > &lt;strong&gt;These APIs are being deprecated and &gt;&gt;&gt;&gt;&gt; removed in M152&lt;/strong&gt; as per the following Intent threads: Protected &gt;&gt;&gt;&gt;&gt; Audience\[2\], &gt;&gt;&gt;&gt;&gt; Shared Storage\[3\]. &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&g...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17248.html) *(mail-archive.com)*
  > &lt;strong&gt;Fenced frames are only able to be navigated using the urn:uuid in a FencedFrameConfig\[1\], which can only be created using the return values from runAdAuction and selectURL&lt;/strong&gt;. These APIs are being deprecated and removed in M152 as per t...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17565.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Shivani Sharma Mon, 28 Sep 2026 ...

## 📚 Platform Documentation & Specifications

- [Window: fence property - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/fence) *(developer.mozilla.org)*
- [Fence - Web APIs - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Fence) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFencedFrameElement/config) *(developer.mozilla.org)*
- [Remove FencedFrame element and window.fence APIs · Issue #30 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/30) *(github.com)*
- [\[rule\] element/fencedframe · Issue #110 · cevdetta/deadhead · GitHub](https://github.com/cevdetta/deadhead/issues/110) *(github.com)*
- [\[rule\] element/fencedframe · Issue #431 · cevdetta/deadhead · GitHub](https://github.com/cevdetta/deadhead/issues/431) *(github.com)*
- [FencedFrameConfig: setSharedStorageContext() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/FencedFrameConfig/setSharedStorageContext) *(developer.mozilla.org)*
- [fix(sandbox): skip HTMLFencedFrameElement to avoid FencedFrame deprecation warning by tzdesign · Pull Request #788 · QwikDev/partytown · GitHub](https://github.com/QwikDev/partytown/pull/788) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 49 result(s) found across 12 planned queries — **18 verified relevant**
  - `"chromestatus.com/feature/6366274495053824" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/fenced-frame/blob/master/explainer/README.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"wicg.github.io/fenced-frame" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Remove FencedFrame element and window.fence APIs" API` — *Core feature API query* (8 returned)
  - `"Remove FencedFrame element and window.fence APIs" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (5 returned)
  - `"window.fence" OR "element.config" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Remove FencedFrame element and window.fence APIs" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (7 returned)
  - `"Remove FencedFrame element and window.fence APIs" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Intent to Remove" "FencedFrame" OR "window.fence" site:groups.google.com/a/chromium.org/g/blink-dev` — *Locates the official Blink-dev intent threads, developer feedback, and browser vendor consensus on removing FencedFrame and window.fence APIs.* (1 returned)
  - `"FencedFrameConfig" "window.fence" (getNestedConfigs OR reportEvent) github` — *Finds real-world WebIDL usage, advertising scripts, and code implementations utilizing window.fence and FencedFrameConfig APIs.* (8 returned)
  - `"fenced frame" ("Protected Audience" OR "Shared Storage") deprecated OR removed adtech` — *Discovers adtech ecosystem analysis, industry reaction, and the impact of retiring Fenced Frames alongside Protected Audience APIs.* (8 returned)
  - `"fencedframe" "Privacy Sandbox" (deprecation OR migration OR alternatives) blog OR guide` — *Identifies developer guides and engineering blog posts discussing the phase-out of fenced frames and recommended migration paths.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 4 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6366274495053824)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6366274495053824)
- [Specification](https://wicg.github.io/fenced-frame)
- [Chromium Tracking Bug](https://issues.chromium.org/538634423)
