# Remove FencedFrame element and window.fence APIs

> **Report Week:** 2026-W42 | **Milestone:** Chrome 156 | **Category:** Deprecated

## Overview

Fenced frames are nested frames that embed content onto a page without the ability to share data between the fenced frame and its embedder.   window.fence APIs include Fenced frames Ads reporting (FFAR) JS APIs that were created for privacy-safe ads reporting from FFs created using Protected Audience and SelectURL and getNestedConfigs() to support PA component ads.   This intent is for removing both of these. Fenced frames element removal will be two step as detailed below.  With the removal (or stub API replacement) of PA and selectURL, FFs can no longer be navigated and thus it is safe to remove them. Fenced frames are only able to be navigated using the urn:uuid in a FencedFrameConfig\[1\], which can only be created using the return values from runAdAuction and selectURL. These APIs are being deprecated and removed in M152 as per the following Intent threads: Protected Audience\[2\], Shared Storage\[3\].   Plan: Given that the fenced frames element can no longer be navigated, we propose removing the element from the code in the following phases:  1. M156: Keep the fenced frame element and its associated IDL dependencies as stubs. This is to ensure no JS call throws, e.g.calling fenced-frame-element.config.setSharedStorageContext().   2. M156: In the same milestone we will also stub the window.fence APIs completely. Since there is no FF document navigation, these APIs cannot be invoked anymore, so it will be a no-op.  3. M157 Canary/Beta: Begin a controlled rollout of the stub FF HTML element removal via a field trial. Note that removing the element will resolve it to HTMLUnknownElement.   At this point we are requesting approvals for all of the above steps.  4. M157 Stable: Assuming there are no regressions or breakage after reaching 1% stable, we will request additional approval for full removal of the FF element.   \[1\]https://source.chromium.org/chromium/chromium/src/+/main:third\_party/blink/renderer/core/html/fenced\_frame/fenced\_frame\_config.idl \[2\]https://groups.google.com/a/chromium.org/g/blink-dev/c/k\_nubsMb97g/m/awPD4IGLBAAJ \[3\]https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc/m/WFTFnhyJBAAJ

### Motivation

As described in the summary section, since fenced frames are no longer able to be navigated to a document, once PA and selectURL are removed, we should also remove FFs API for code health and to remove unused APIs from the web platform.

## Ecosystem Status

- **Momentum:** Moderate (footprint 200 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** The \`&lt;fencedframe&gt;\` element and \`window.fence\` APIs are being formally decommissioned and removed from Chromium starting in Chrome 156 via non-throwing stubs, followed by complete removal in Chrome 157. This follows the deprecation and withdrawal of dependent Privacy Sandbox technologies—specifically Protected Audience auctions and Shared Storage \`selectURL\`—which rendered fenced frame navigation obsolete. The removal cleans up redundant browser internals after the feature failed to achieve cross-engine consensus, having never been adopted by other major engines.

### Recommendations
- Actionable Advice: Development teams and ad-tech integrations should immediately remove dependencies on \`&lt;fencedframe&gt;\`, \`FencedFrameConfig\`, and \`window.fence\`, refactoring any remaining workflows back to standard partitioned iframes. Audits should ensure runtime scripts do not rely on fenced frame prototypes, as unrecognized elements will degrade to \`HTMLUnknownElement\` following the removal trial.
- Marked for deprecation in Chrome 156. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Fenced frames overview \| Privacy Sandbox - Google](https://privacysandbox.google.com/private-advertising/fenced-frame) *(privacysandbox.google.com)*
  > fence APIs"\*\* on \`blink-dev\` and Chrome Platform Status marks the phaseout of the Fenced Frames specification \* \*\*Core Reason\*\*: Fenced frames were specifically designed to prevent cross-site data leakage when rendering isolated content from Privacy ...
- [chromestatus.com](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > Official Chromium & Chrome Developers Announcements \* \*\*Chrome Platform Status & Chrome 156 Release Notes\*\*: \* Formally logged under tracking bug \*\*#538634423\*\* \* Listed in the \*Deprecations and Removals\* section of the Chrome 156 release notes
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com)*
  > Intent to Ship: Remove FencedFrame element and window.fence APIs ... Scheduled for phaseout. Explainer: Fenced Storage Read API. Continue to support. See Content-Security-Policy: frame-ancestors directive.
- [hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > Developer Blogs, Timelines, and Community Tracking \* \*\*Privacy Sandbox Timeline & History Trackers (e.g., Hidekazu Konishi)\*\*: \* Detailed ecosystem chronicles tracking the lifecycle of Privacy Sandbox features note that the withdrawal of Protected Au...
- [zenn.dev](https://zenn.dev/cybozu_frontend/articles/web_standards_trends_202608) *(zenn.dev)*
  > fence APIs\* alongside broader frame architecture discussions (such as persistent widgets and standard \`&lt;iframe&gt;\` credential protections)
- [researchgate.net](https://www.researchgate.net/publication/408340951_The_Rise_and_Fall_of_Google's_Privacy_Sandbox) *(researchgate.net)*
  > \* \*\*Academic & Industry Retrospectives (e.g., \*The Rise and Fall of Google's Privacy Sandbox\*)\*\*: \* In-depth analyses examine how the reliance of \`&lt;fencedframe&gt;\` on opaque URNs and specific auction APIs made it fragile as an isolated web standard onc...
- [\[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17144.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs Chromestatus Tue, 11 Aug 2026 13:17:20 -0700 Contact email...
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17167.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Shivani Sharma Thu, 13 Aug 2026 09:42:40 -0700 Yes...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17248.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Mike Taylor Fri, 21 Aug 2026 08:31:09 -070...
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17145.html) *(mail-archive.com)*
  > These APIs &gt; are being deprecated and removed in M152 as per the following Intent &gt; threads: Protected Audience\[2\], Shared Storage\[3\]. Plan: Given that the &gt; fenced frames element can no longer be navigated, we propose removing the &gt; elem...
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17158.html) *(mail-archive.com)*
  > With the removal (or &gt;&gt; stub API replacement) of PA and selectURL, FFs can no longer be navigated &gt;&gt; and thus it is safe to remove them. Fenced frames are only able to be &gt;&gt; navigated using the urn:uuid in a FencedFrameConfig\[1\], wh...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17565.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs · Shivani Sharma Mon, 28 Sep 2026 07:59:54 -0700 · Another quick update (already updated in the chromestatusentry): We landed...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17273.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; Fenced frames are only able to be navigated using the urn:uuid in a &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; FencedFrameConfig\[1\], which can only be created using the return &gt;&gt;&gt;&gt;&g...
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17173.html) *(mail-archive.com)*
  > &lt;strong&gt;These APIs are being deprecated and &gt;&gt;&gt;&gt; removed in M152 as per the following Intent threads: Protected &gt;&gt;&gt;&gt; Audience\[2\], &gt;&gt;&gt;&gt; Shared Storage\[3\]&lt;/strong&gt;. &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Plan: Given that ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17144.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > \[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs Chromestatus Tue, 11 Aug 2026 13:17:20 -0700 Con...
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17167.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Shivani Sharma Thu, 13 Aug 2026 09:42:40...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17248.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/fenced-frame/blob/master/explainer/README.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Mike Taylor Fri, 21 Aug 2026 08:...

## 📚 Platform Documentation & Specifications

- [&lt;fencedframe&gt; HTML fenced frame element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fencedframe) *(developer.mozilla.org)*
- [Fenced Frame API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fenced_frame_API) *(developer.mozilla.org)*
- [Remove FencedFrame element and window.fence APIs · Issue #30 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/30) *(github.com)*
- [\[rule\] element/fencedframe · Issue #110 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/110) *(github.com)*
- [\[rule\] element/fencedframe · Issue #431 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/431) *(github.com)*
- [\[Fenced Frames\] Remove fenced frames code keeping stubs intact by chromium-wpt-export-bot · Pull Request #62917 · web-platform-tests/wpt](https://github.com/web-platform-tests/wpt/pull/62917) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 45 result(s) found across 12 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/6366274495053824" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/fenced-frame/blob/master/explainer/README.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"wicg.github.io/fenced-frame" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Remove FencedFrame element and window.fence APIs" API` — *Core feature API query* (8 returned)
  - `"Remove FencedFrame element and window.fence APIs" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (5 returned)
  - `"window.fence" OR "element.config" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Remove FencedFrame element and window.fence APIs" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Remove FencedFrame element and window.fence APIs" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `("fenced frame" OR "fencedframe") ("window.fence" OR "FencedFrameConfig") (migration OR deprecated OR removal)` — *Discovers developer guides, technical writeups, and migration articles discussing the deprecation and removal of Fenced Frames and window.fence.* (8 returned)
  - `("HTMLFencedFrameElement" OR "window.fence") ("FencedFrameConfig" OR "setSharedStorageContext" OR "reportEvent")` — *Finds actual JavaScript code snippets, WebIDL references, and implementation patterns using FencedFrame APIs and configs.* (8 returned)
  - `"Intent to Deprecate and Remove" OR "Intent to Remove" ("fenced frame" OR "fencedframe" OR "window.fence")` — *Tracks official browser vendor intent threads, milestone timelines, and standardization status updates regarding the API removal.* (2 returned)
  - `site:github.com/WICG/fenced-frame/issues ("removal" OR "deprecated" OR "Protected Audience")` — *Surfaces community questions, ad tech feedback, and ecosystem discussions in the official WICG repository regarding the retirement of fenced frames.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 4 result(s) found — **3 verified relevant**

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
