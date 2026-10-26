# Remove FencedFrame element and window.fence APIs

> **Report Week:** 2026-W44 | **Milestone:** Chrome 156 | **Category:** Deprecated

## Overview

Fenced frames are nested frames that embed content onto a page without the ability to share data between the fenced frame and its embedder.   window.fence APIs include Fenced frames Ads reporting (FFAR) JS APIs that were created for privacy-safe ads reporting from FFs created using Protected Audience and SelectURL and getNestedConfigs() to support PA component ads.   This intent is for removing both of these. Fenced frames element removal will be two step as detailed below.  With the removal (or stub API replacement) of PA and selectURL, FFs can no longer be navigated and thus it is safe to remove them. Fenced frames are only able to be navigated using the urn:uuid in a FencedFrameConfig\[1\], which can only be created using the return values from runAdAuction and selectURL. These APIs are being deprecated and removed in M152 as per the following Intent threads: Protected Audience\[2\], Shared Storage\[3\].   Plan: Given that the fenced frames element can no longer be navigated, we propose removing the element from the code in the following phases:  1. M156: Keep the fenced frame element and its associated IDL dependencies as stubs. This is to ensure no JS call throws, e.g.calling fenced-frame-element.config.setSharedStorageContext().   2. M156: In the same milestone we will also stub the window.fence APIs completely. Since there is no FF document navigation, these APIs cannot be invoked anymore, so it will be a no-op.  3. M157 Canary/Beta: Begin a controlled rollout of the stub FF HTML element removal via a field trial. Note that removing the element will resolve it to HTMLUnknownElement.   At this point we are requesting approvals for all of the above steps.  4. M157 Stable: Assuming there are no regressions or breakage after reaching 1% stable, we will request additional approval for full removal of the FF element.   \[1\]https://source.chromium.org/chromium/chromium/src/+/main:third\_party/blink/renderer/core/html/fenced\_frame/fenced\_frame\_config.idl \[2\]https://groups.google.com/a/chromium.org/g/blink-dev/c/k\_nubsMb97g/m/awPD4IGLBAAJ \[3\]https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc/m/WFTFnhyJBAAJ

### Motivation

As described in the summary section, since fenced frames are no longer able to be navigated to a document, once PA and selectURL are removed, we should also remove FFs API for code health and to remove unused APIs from the web platform.

## Ecosystem Status

- **Momentum:** Emerging (footprint 190 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chromium is formally deprecating and removing the &lt;fencedframe&gt; element and window.fence APIs across Chrome 156 and Chrome 157, following the earlier retirement of its sole navigation sources in Protected Audience and Shared Storage selectURL. The primitive never gained cross-engine traction or Baseline status, leaving it as an unnavigable, Chromium-only artifact. With zero successful navigations remaining on the web, its removal strips out substantial bespoke browsing-context infrastructure in favor of engine code health.

### Recommendations
- Actionable Advice: Audit frontend templates and ad delivery pipelines to replace any remaining &lt;fencedframe&gt; tags with standard &lt;iframe&gt; elements, avoiding reliance on window.HTMLFencedFrameElement feature detection during the phased stub rollout. Web teams must also verify that explicit CSS dimensions are set on affected embedding containers to prevent visual layout shifts when unstyled tags collapse to zero dimensions in Chrome 157.
- Marked for deprecation in Chrome 156. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [cevdet.ch](https://deadhead.cevdet.ch/rules/element/fencedframe) *(deadhead.cevdet.ch)*
  > Chromium logs deprecation warnings in DevTools fence APIs\](https://chromestatus.com/)
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17145.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs Shivani Sharma Tue, 11 Aug 2026 13:20:33 -0700 \*\[A...
- [\[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17144.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Remove FencedFrame element and window.fence APIs Chromestatus Tue, 11 Aug 2026 13:17:20 -0700 Contact email...
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17248.html) *(mail-archive.com)*
  > These APIs are being deprecated and removed in M152 as per the following Intent threads: Protected Audience\[2\], Shared Storage\[3\]. Plan: Given that the fenced frames element can no longer be navigated, we propose removing the element from the code in...
- [Fenced frames overview \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/relevance/fenced-frame) *(developers.google.com · 2026-08-14T00:00:00)*
  > Once you have obtained the config, you can assign it to a fenced frame&#x27;s config attribute to navigate the frame to the resource represented by the config. Earlier versions of Chrome don&#x27;t support the resolveToConfig property, so you must st...
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com · 2026-10-20T08:23:54)*
  > &lt;strong&gt;These APIs are being deprecated and removed in M152&lt;/strong&gt; as per the following Intent threads: Protected Audience\[2\], Shared Storage\[3\]. Plan: Given that the fenced frames element can no longer be navigated, we propose removing the element...
- [Search Conversations](https://groups.google.com/a/chromium.org/g/blink-dev/search?q=Intent+to+Ship) *(groups.google.com)*
  > Intent to Ship: Remove FencedFrame element and window.fence APIs
- [Re: \[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17273.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &lt;strong&gt;With the removal (or stub API replacement) of PA and selectURL, FFs &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; can no longer be navigated and thus it is safe to remove them&lt;/strong&gt;. &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt...
- [\[blink-dev\] Re: Intent to Ship: Remove FencedFrame element and window.fence APIs](http://www.mail-archive.com/blink-dev@chromium.org/msg17173.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; &lt;strong&gt;With the removal (or stub API replacement) of PA and selectURL, FFs can &gt;&gt;&gt;&gt; no longer be navigated and thus it is safe to remove them&lt;/strong&gt;. &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Fenced frames are only able to be ...

## 📚 Platform Documentation & Specifications

- [Remove FencedFrame element and window.fence APIs · Issue #30 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/30) *(github.com)*
- [\[rule\] element/fencedframe · Issue #110 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/110) *(github.com)*
- [\[rule\] element/fencedframe · Issue #431 · cevdetta/deadhead](https://github.com/cevdetta/deadhead/issues/431) *(github.com)*
- [Fenced Frame API - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fenced_frame_API) *(developer.mozilla.org)*
- [Window: fence property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/fence) *(developer.mozilla.org)*
- [Fence - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fence) *(developer.mozilla.org)*
- [&lt;fencedframe&gt; HTML fenced frame element - HTML \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fencedframe) *(developer.mozilla.org)*
- [&lt;fencedframe&gt; HTML fenced frame element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fencedframe) *(developer.mozilla.org)*
- [fenced-frame/explainer/use\_cases.md at master · WICG/fenced-frame](https://github.com/WICG/fenced-frame/blob/master/explainer/use_cases.md) *(github.com)*
- [fix(sandbox): skip HTMLFencedFrameElement to avoid FencedFrame deprecation warning by tzdesign · Pull Request #788 · QwikDev/partytown](https://github.com/QwikDev/partytown/pull/788) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 12 planned queries — **18 verified relevant**
  - `"chromestatus.com/feature/6366274495053824" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/fenced-frame/blob/master/explainer/README.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (1 returned)
  - `"wicg.github.io/fenced-frame" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Remove FencedFrame element and window.fence APIs" API` — *Core feature API query* (8 returned)
  - `"Remove FencedFrame element and window.fence APIs" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (4 returned)
  - `"window.fence" OR "element.config" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Remove FencedFrame element and window.fence APIs" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Remove FencedFrame element and window.fence APIs" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Intent to Deprecate and Remove" ("fenced frame" OR "FencedFrame") blink-dev` — *Finds official Blink and Chromium developer discussions, announcements, and community feedback regarding the deprecation and removal of fenced frames.* (5 returned)
  - `"<fencedframe" ("FencedFrameConfig" OR "window.fence") code example` — *Discovers concrete JavaScript implementations, HTML markup, and WebIDL patterns using fenced frames and window.fence APIs.* (8 returned)
  - `"fenced frame" "Privacy Sandbox" ("Protected Audience" OR "FLEDGE") (tutorial OR guide)` — *Surfaces developer tutorials and explainer blog posts illustrating how fenced frames functioned within Privacy Sandbox ads reporting.* (6 returned)
  - `("fencedframe" OR "fenced frames") ("deprecated" OR "removed" OR "replacement") "Privacy Sandbox"` — *Tracks adtech and ecosystem responses, impact assessments, and migration strategies following the removal of fenced frame APIs.* (7 returned)
- **Google Search Grounding (gemini-3.8-flash):** 6 result(s) found — **1 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 2 result(s) found — **1 verified relevant**

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
