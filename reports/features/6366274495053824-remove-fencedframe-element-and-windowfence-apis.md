# Remove FencedFrame element and window.fence APIs

> **Report Week:** 2026-W43 | **Milestone:** Chrome 156 | **Category:** Deprecated

## Overview

Fenced frames are nested frames that embed content onto a page without the ability to share data between the fenced frame and its embedder.   window.fence APIs include Fenced frames Ads reporting (FFAR) JS APIs that were created for privacy-safe ads reporting from FFs created using Protected Audience and SelectURL and getNestedConfigs() to support PA component ads.   This intent is for removing both of these. Fenced frames element removal will be two step as detailed below.  With the removal (or stub API replacement) of PA and selectURL, FFs can no longer be navigated and thus it is safe to remove them. Fenced frames are only able to be navigated using the urn:uuid in a FencedFrameConfig\[1\], which can only be created using the return values from runAdAuction and selectURL. These APIs are being deprecated and removed in M152 as per the following Intent threads: Protected Audience\[2\], Shared Storage\[3\].   Plan: Given that the fenced frames element can no longer be navigated, we propose removing the element from the code in the following phases:  1. M156: Keep the fenced frame element and its associated IDL dependencies as stubs. This is to ensure no JS call throws, e.g.calling fenced-frame-element.config.setSharedStorageContext().   2. M156: In the same milestone we will also stub the window.fence APIs completely. Since there is no FF document navigation, these APIs cannot be invoked anymore, so it will be a no-op.  3. M157 Canary/Beta: Begin a controlled rollout of the stub FF HTML element removal via a field trial. Note that removing the element will resolve it to HTMLUnknownElement.   At this point we are requesting approvals for all of the above steps.  4. M157 Stable: Assuming there are no regressions or breakage after reaching 1% stable, we will request additional approval for full removal of the FF element.   \[1\]https://source.chromium.org/chromium/chromium/src/+/main:third\_party/blink/renderer/core/html/fenced\_frame/fenced\_frame\_config.idl \[2\]https://groups.google.com/a/chromium.org/g/blink-dev/c/k\_nubsMb97g/m/awPD4IGLBAAJ \[3\]https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc/m/WFTFnhyJBAAJ

### Motivation

As described in the summary section, since fenced frames are no longer able to be navigated to a document, once PA and selectURL are removed, we should also remove FFs API for code health and to remove unused APIs from the web platform.

## Ecosystem Status

- **Momentum:** Moderate (footprint 250 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Following Chrome's strategic pivot regarding third-party cookies and Privacy Sandbox ad auction mechanics, the \`&lt;fencedframe&gt;\` element and \`window.fence\` APIs are being stubbed in Chrome 156 and systematically removed in Chrome 157. Because Fenced Frames relied on \`FencedFrameConfig\` handles from deprecated ad auction and selection APIs, the element can no longer be navigated and serves no functional purpose. Ecosystem consensus favors this cleanup, as removing single-engine experimental surface reduces platform complexity and technical debt.

### Recommendations
- Actionable Advice: Engineering teams should audit their codebases to strip out any remaining \`&lt;fencedframe&gt;\` tags or \`window.fence\` calls before Chrome 157 turns stubs into unknown HTML elements. Embedded ad contexts should be refactored to rely on standard \`iframe\` containers with modern cross-origin isolation policies.
- Marked for deprecation in Chrome 156. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromium.org](https://issues.chromium.org/issues/538634423) *(issues.chromium.org)*
  > \*\*Phase 3 (Chrome 157 Stable):\*\* Gradual rollout to 100% stable, completing full removal from the Chromium engine \*\*Chrome Platform Status Entry & Issue #538634423:\*\* Detailed the technical roadmap and code health motivations for Blink
- [Fenced frames overview \| Privacy Sandbox - Google](https://privacysandbox.google.com/private-advertising/fenced-frame) *(privacysandbox.google.com)*
  > \*\*Privacy Sandbox Feature Status & Developer Guides:\*\* The official \*Fenced frames overview\* documentation was updated to designate the feature as \*\*"Scheduled for phaseout"\*\* The guide notes that developers who previously passed \`resolveToConfig: tr...
- [google.com](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com)*
  > \*\*Privacy Sandbox Feature Status & Developer Guides:\*\* The official \*Fenced frames overview\* documentation was updated to designate the feature as \*\*"Scheduled for phaseout"\*\*
- [hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > \*\*Web Platform & Standards Trackers (e.g., \*Zenn Web Standards Trends\*, \*Hidekazu Konishi’s Privacy Sandbox Timeline\*):\*\* Industry observers tracking Chromium’s deprecations highlighted the removal as part of the broader unwinding of Chrome's proprie...
- [zenn.dev](https://zenn.dev/cybozu_frontend/articles/web_standards_trends_202608) *(zenn.dev)*
  > \*\*Web Platform & Standards Trackers (e.g., \*Zenn Web Standards Trends\*, \*Hidekazu Konishi’s Privacy Sandbox Timeline\*):\*\* Industry observers tracking Chromium’s deprecations highlighted the removal as part of the broader unwinding of Chrome's proprie...
- [google.com](https://groups.google.com/a/chromium.org/g/blink-dev/c/Ko9UXQYPgUE/m/URRsB-qvAAAJ) *(groups.google.com)*
  > They noted that the removal of fenced frames cleans up significant architectural complexity (such as Chromium’s multi-page architecture and internal beacon reporting IPCs) Editorial coverage and developer commentary have treated fenced frames primari...
- [chrome.com](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame) *(developer.chrome.com)*
  > Editorial coverage and developer commentary have treated fenced frames primarily as an ad-tech-specific sandboxing mechanism rather than a standard web layout component
- [Fenced frames element removal dev tools issue \[539672121\] - Chromium](https://issues.chromium.org/issues/539672121) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17167.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Shivani Sharma Thu, 13 Aug 2026 09:42:40 -0700 Yes...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17248.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Mike Taylor Fri, 21 Aug 2026 08:31:09 -070...
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17145.html) *(mail-archive.com)*
  > These APIs &gt; are being deprecated and removed in M152 as per the following Intent &gt; threads: Protected Audience\[2\], Shared Storage\[3\]. Plan: Given that the &gt; fenced frames element can no longer be navigated, we propose removing the &gt; elem...
- [\[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17144.html) *(mail-archive.com)*
  > These APIs are being deprecated and removed in M152 as per the following Intent threads: Protected Audience\[2\], Shared Storage\[3\]. Plan: Given that the fenced frames element can no longer be navigated, we propose removing the element from the code in...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > &lt;strong&gt;These APIs are being deprecated and removed in M152&lt;/strong&gt; as per the following Intent threads: Protected Audience\[2\], Shared Storage\[3\]. Plan: Given that the fenced frames element can no longer be navigated, we propose removing the element...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17273.html) *(mail-archive.com)*
  > Fenced frames are only able to be &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; navigated using the urn:uuid in a FencedFrameConfig\[1\], which can &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; only be &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; created using the return values...
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17175.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; Fenced frames are only able to be navigated using the urn:uuid in a &gt;&gt;&gt;&gt;&gt; FencedFrameConfig\[1\], which can only be created using the return values &gt;&gt;&gt;&gt;&gt; from runAdAuction and sele...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17565.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs · Shivani Sharma Mon, 28 Sep 2026 07:59:54 -0700 · Another quick update (already updated in the chromestatusentry): We landed...
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17230.html) *(mail-archive.com)*
  > \[1\] &gt;&gt;&gt;&gt;&gt;&gt;&gt; https://source.chromium.org/chromium/chromium/src/+/main:third\_party/blink/renderer/core/html/fenced\_frame/fenced\_frame\_config.idl &gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt; \[2\] &gt;&gt;&gt;&gt;&gt;&gt;...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Fenced frames element removal dev tools issue \[539672121\] - Chromium](https://issues.chromium.org/issues/539672121) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/6366274495053824`)*
  > Chromium Sign in
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17167.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Shivani Sharma Thu, 13 Aug 2026 09:42:40...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17248.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Mike Taylor Fri, 21 Aug 2026 08:...

## 📚 Platform Documentation & Specifications

- [Fenced Frame API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fenced_frame_API) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFencedFrameElement/allow) *(developer.mozilla.org)*
- [FencedFrameConfig - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/FencedFrameConfig) *(developer.mozilla.org)*
- [Remove FencedFrame element and window.fence APIs · Issue #30 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/30) *(github.com)*
- [\[rule\] element/fencedframe · Issue #110 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/110) *(github.com)*
- [\[rule\] element/fencedframe · Issue #431 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/431) *(github.com)*
- [&lt;fencedframe&gt; HTML fenced frame element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fencedframe) *(developer.mozilla.org)*
- [fix(sandbox): skip HTMLFencedFrameElement to avoid FencedFrame deprecation warning by tzdesign · Pull Request #788 · QwikDev/partytown](https://github.com/QwikDev/partytown/pull/788) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 48 result(s) found across 12 planned queries — **18 verified relevant**
  - `"chromestatus.com/feature/6366274495053824" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/fenced-frame/blob/master/explainer/README.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"wicg.github.io/fenced-frame" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Remove FencedFrame element and window.fence APIs" API` — *Core feature API query* (8 returned)
  - `"Remove FencedFrame element and window.fence APIs" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (4 returned)
  - `"window.fence" OR "element.config" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Remove FencedFrame element and window.fence APIs" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Remove FencedFrame element and window.fence APIs" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"fenced frame" OR "HTMLFencedFrameElement" deprecation OR removal "Privacy Sandbox"` — *Track ecosystem adoption, industry reactions, and Privacy Sandbox updates regarding the deprecation of Fenced Frames.* (8 returned)
  - `"HTMLFencedFrameElement" OR "window.fence" OR "FencedFrameConfig" interface` — *Locate WebIDL definitions, JS usage, and syntax details for HTMLFencedFrameElement and window.fence APIs.* (8 returned)
  - `"fenced frame" OR "fencedframe" tutorial OR guide embedded content` — *Find developer guides and technical blog posts explaining Fenced Frame architecture and embedder isolation.* (8 returned)
  - `"Intent to Remove" "FencedFrame" OR "window.fence" blink-dev` — *Search blink-dev mailing list discussions and browser engine decisions regarding Fenced Frames removal.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
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
