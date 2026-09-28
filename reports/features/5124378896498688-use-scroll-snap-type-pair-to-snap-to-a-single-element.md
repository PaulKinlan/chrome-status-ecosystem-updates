# Use scroll-snap-type: pair to snap to a single element

> **Report Week:** 2026-W40 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

https://github.com/w3c/csswg-drafts/issues/9519  Add a "pair" keyword to scroll-snap-type. If used, when the container scroll snaps to an element on one axis, it should snap to the same element on the other axis. In the existing spec, the "both" keyword allows the scroll container to select snap targets in X and Y axes independently and snap to different targets.

### Motivation

See explainer

## Ecosystem Status

- **Momentum:** High (300 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** Use scroll-snap-type: pair to snap to a single element is currently Enabled by default in Chrome 156. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @fantasai: "Proposing to mark this as "Support" in 1 week unless there are objections...."
- Standards Activity (Mozilla): Latest discussion from @theres-waldo: "&gt; I think this seems reasonable but I'd like \[@hiikezoe\](https://github.com/hiikezoe) / \[@theres-waldo\](https://github.com/theres-waldo) to take a loo..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/WebKit/standards-positions/issues/716) [closed]
- **Mozilla:** [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element](https://github.com/mozilla/standards-positions/issues/1448) [open]

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEU0-MdMnY-L2d6T5YzXagCwkKUCv-buPppMVqxHWk_Be6GsraUpWvut1GSa4Yng4sOS0UdYosy7GeGGaRUdr1gh9t_Vv3ysEzWSG_1Qzx9aWF8wD4TRACnH2BFMQMAdnNKgSYsbeyKFJiIqbVJ) *(vertexaisearch.cloud.google.com)*
  > [css-scroll-snap-1] Use scroll-snap-type: pair to snap to a single element · Issue #716 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with ...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHoyZ_hbRw2r7tvZQftsSYfxyumA-RpYQqOzYywbliQdX0djStktt2w3UXKms_nFGuhq5Q9uNn9n86cxXCtYIB6SzHOSO9hLwF9hSSxXuaE0hTyYff7jgqO6eRwAjhqyZ8aK19SoCctzBT1ENOYBVEW_vJG5kzvnQSKt_YsXUGv-zA=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  In CSS Scroll Snap Level 1, using `scroll-snap-type: both` instructs the scroll container to snap in both the horizontal and vertical directions. However, the container resolves snap targets for each axis independently. In
- [bsky.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFZ39YYhIUDfox2FcAVMI6_vSUdqhYD_4giRSWTlQ9WGnaS3PZjDsf5WdoZgnjYKhzXCrLfdjbSUob1bMpvMsbl61ND0jpiISgbWHQyXRccs70heHAwFvxl_nws5bdjKtX5ABF4aGP4Q6zVAasA97q2_Q==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  In CSS Scroll Snap Level 1, using `scroll-snap-type: both` instructs the scroll container to snap in both the horizontal and vertical directions. However, the container resolves snap targets for each axis independently. In
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHRy-tNGiP_IIGf_WoSaE_yoZaBOWKM_S21Cnv8a2tfHpIVWYNuziPpLa_2dod3fC2vooyM4s6cMC5xbZ4KPopTFjH8h5aVDE1QA2ATqreYpJGND-qMJWFZbOJysDah) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  In CSS Scroll Snap Level 1, using `scroll-snap-type: both` instructs the scroll container to snap in both the horizontal and vertical directions. However, the container resolves snap targets for each axis independently. In
- [chromestatuslite.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF4Cu3HmcKVEDJ9z-8ARXq7XCVyAXHn9K-YpsYqWUaLAy2cRmJdc1s0JwE0CQE9CbgLnEnU-YJQhNgu_0Fx9bL7j75XICvH62C3WbINxtT4Zfbl) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  In CSS Scroll Snap Level 1, using `scroll-snap-type: both` instructs the scroll container to snap in both the horizontal and vertical directions. However, the container resolves snap targets for each axis independently. In
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEz17iTZz0rkAX2nEyifX8mkvjRIcW3YLLwJ3Hf2Oz3hgcYL44F410ldIJiqiv6vcdA3Ghw0IO0AG5Qwx_m4-29FihmVS7M14S8GUUFtcPTSuUVtOq--N6SiNk0Eke3) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  In CSS Scroll Snap Level 1, using `scroll-snap-type: both` instructs the scroll container to snap in both the horizontal and vertical directions. However, the container resolves snap targets for each axis independently. In
- [bsky.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHzssppMyZZpXLSaztBUaRX5inJNYg4xWdkSX2mBfgs9zlEe1ZRkIUDgOpaJQ2NmPqGnXzX4NnkrDteDC9xJkyyycN-rgaqWHWXueC_36wUoB3-nNhXAiVHBVWipB3Jeg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  In CSS Scroll Snap Level 1, using `scroll-snap-type: both` instructs the scroll container to snap in both the horizontal and vertical directions. However, the container resolves snap targets for each axis independently. In
- [bsky.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFp20xBaelbui1UQeoLD8RHS_R8MD9NfWjOubyQmPwVUnSPFeh2_HbcYpzoveEXErKOkyFhwiOaJozCyx4bg4XcVLMnqooc9bADPVbIx0OpIzSbG_Mg296_1iwLY7Xe) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  In CSS Scroll Snap Level 1, using `scroll-snap-type: both` instructs the scroll container to snap in both the horizontal and vertical directions. However, the container resolves snap targets for each axis independently. In
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17535.html) *(mail-archive.com)*
  > &gt; *No information provided* &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://<strong>chromestatus.com/feature/5124378896498688</strong>?gate=6676576856047616 &gt; &gt; *Links to previous Intent discussions* &gt; Intent to Proto...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)*
  > Explainer https://github.com/explainers-by-googlers/scroll-snap-type-pair Specification https://drafts.csswg.org/css-scroll-snap-1 Summary https://github.com/w3c/csswg-drafts/issues/9519 <strong>Add a &quot;pair&quot; keyword to scroll-snap-type</str...
- [\[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17244.html) *(mail-archive.com)*
  > Explainer https://github.com/explainers-by-googlers/scroll-snap-type-pair Specification No information provided Summary https://github.com/w3c/csswg-drafts/issues/9519 <strong>Add a &quot;pair&quot; keyword to scroll-snap-type</strong>. If used, when...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17536.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Tue, Sep 22, 2026 ...ts.csswg.org/css-scroll-snap-1 &gt;&gt; &gt;&gt; *Summary* &gt;&gt; https://github.com/w3c/csswg-drafts/issues/9519 <strong>Add a &quot;pair&quot; keyword to &gt;&gt; scroll-snap-type</strong>....
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17539.html) *(mail-archive.com)*
  > &gt;&gt;&gt; *No information provided* &gt;&gt;&gt; &gt;&gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt;&gt; https://chromestatus.com/feature/5124378896498688?gate=6676576856047616 &gt;&gt;&gt; &gt;&gt;&gt; *Links to previous Intent di...
- [CSS scroll-snap: Build a CSS Carousel Without JavaScript — W3Tweaks](https://www.w3tweaks.com/css/css-scroll-snap-explained) *(w3tweaks.com · 2026-06-04T19:30:00)*
  > <strong>Set scroll-snap-type: both mandatory (or both proximity) on the grid container and scroll-snap-align: start on each grid item</strong>. Both X and Y axes snap simultaneously. The container needs overflow: auto on both axes for snapping to wor...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Other Spec Review: Add keyword "pair" to scroll-snap-type for snapping to the same element in X and Y axes · Issue #1271 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1271) *(github.com · 2026-08-25T15:03:43)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > Status/issue trackers for implementations: Chromium comments: https://<strong>chromestatus.com/feature/5124378896498688</strong>
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17535.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5124378896498688`)*
  > &gt; *No information provided* &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://<strong>chromestatus.com/feature/5124378896498688</strong>?gate=6676576856047616 &gt; &gt; *Links to previous Intent discussions* &gt; Inten...
- [\[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17521.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > Explainer https://github.com/explainers-by-googlers/scroll-snap-type-pair Specification https://drafts.csswg.org/css-scroll-snap-1 Summary https://github.com/w3c/csswg-drafts/issues/9519 <strong>Add a &quot;pair&quot; keyword to scroll-snap...
- [\[blink-dev\] Intent to Prototype: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17244.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > Explainer https://github.com/explainers-by-googlers/scroll-snap-type-pair Specification No information provided Summary https://github.com/w3c/csswg-drafts/issues/9519 <strong>Add a &quot;pair&quot; keyword to scroll-snap-type</strong>. If ...
- [Re: \[blink-dev\] Intent to Ship: Use scroll-snap-type: pair to snap to a single element](http://www.mail-archive.com/blink-dev@chromium.org/msg17536.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/scroll-snap-type-pair`)*
  > &gt; LGTM1 &gt; &gt; On Tue, Sep 22, 2026 ...ts.csswg.org/css-scroll-snap-1 &gt;&gt; &gt;&gt; *Summary* &gt;&gt; https://github.com/w3c/csswg-drafts/issues/9519 <strong>Add a &quot;pair&quot; keyword to &gt;&gt; scroll-snap-type</strong>......
- [Scroll snap to a single element with scroll-snap-type: pair · Issue #1438 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1438) *(github.com · 2026-09-22T20:16:44)* *(Cites: `https://drafts.csswg.org/css-scroll-snap-1`)*
  > https://<strong>drafts.csswg.org/css-scroll-snap-1</strong>/#snap-axis

## 📚 Platform Documentation & Specifications

- [Other Spec Review: Add keyword "pair" to scroll-snap-type for snapping to the same element in X and Y axes · Issue #1271 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1271) *(github.com)*
- [Scroll snap to a single element with scroll-snap-type: pair · Issue #1438 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1438) *(github.com)*
- [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element · Issue #716 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/716) *(github.com)*
- [GitHub - tannerhodges/snap-slider: Simple JavaScript plugin to manage sliders using CSS Scroll Snap. · GitHub](https://github.com/tannerhodges/snap-slider) *(github.com)*
- [GitHub - barthy-koeln/scroll-snap-slider: Mostly CSS slider with great performance. · GitHub](https://github.com/barthy-koeln/scroll-snap-slider) *(github.com)*
- [scroll-snapping · GitHub Topics · GitHub](https://github.com/topics/scroll-snapping) *(github.com)*
- [\[css-scroll-snap-1\] Use scroll-snap-type: pair to snap to a single element · Issue #1448 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1448) *(github.com)*
- [Explainers by Googlers · GitHub](https://github.com/explainers-by-googlers) *(github.com)*
- [GitHub - explainers-by-googlers/single-axis-scroll-containers: Single-Axis Scroll Containers explainer · GitHub](https://github.com/explainers-by-googlers/single-axis-scroll-containers) *(github.com)*
- [GitHub - explainers-by-googlers/scroll-triggered-animations: Explainer for Scroll-Triggered Animations · GitHub](https://github.com/explainers-by-googlers/scroll-triggered-animations) *(github.com)*
- [scroll-triggered-animations/README.md at main · explainers-by-googlers/scroll-triggered-animations](https://github.com/explainers-by-googlers/scroll-triggered-animations/blob/main/README.md) *(github.com)*
- [Scroll snap](https://developer.mozilla.org/en-US/docs/Glossary/Scroll_snap) *(developer.mozilla.org)*
- [scroll-snap-type CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-snap-type) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 44 result(s) found across 12 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/5124378896498688" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/explainers-by-googlers/scroll-snap-type-pair" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"drafts.csswg.org/css-scroll-snap-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" API` — *Core feature API query* (5 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"github.com" OR "scroll-snap-type" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (1 returned)
  - `"Use scroll-snap-type: pair to snap to a single element" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"scroll-snap-type: pair" OR "scroll-snap-type: both pair" CSS` — *Finds technical documentation, code snippets, and exact syntax usage of the new pair keyword in scroll-snap-type.* (3 returned)
  - `"scroll-snap-type" "pair" site:github.com/w3c/csswg-drafts OR site:github.com/explainers-by-googlers` — *Surfaces official CSSWG specification discussions, issue #9519 deliberations, and Google explainer feedback.* (5 returned)
  - `"scroll-snap-type: pair" OR ("scroll-snap-type" "pair") ("intent to" OR chromestatus OR "WebKit bug")` — *Tracks browser engine implementation status, Blink intents (prototype/ship), and vendor signals.* (4 returned)
  - `CSS "scroll-snap-type" "pair" "snap to a single element" OR "both axes" guide OR tutorial` — *Discovers developer blog posts and early tutorials explaining the behavior differences between snap values both and pair.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 205 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 3 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5124378896498688)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5124378896498688)
- [Specification](https://drafts.csswg.org/css-scroll-snap-1)
- [Chromium Tracking Bug](https://crbug.com/542706103)
