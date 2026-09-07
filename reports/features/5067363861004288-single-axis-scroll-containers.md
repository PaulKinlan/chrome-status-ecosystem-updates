# Single-axis scroll containers

> **Report Week:** 2026-W37 | **Milestone:** Chrome 153 | **Category:** Enabled by default

## Overview

Extends the `overflow` property to support scrollable values together with `clip` (for example, `overflow: scroll clip`). This allows `position: sticky` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using `overflow: clip` stays in place.

### Motivation

The CSS `overflow` property currently allows behavior to be specified per axis, but it does not provide a way to make a scroll container responsible for only a single axis. The affects features that depend on scroll containers, namely `position: sticky` and DOM scroll APIs.

For example, authors may want to use `position: sticky` to create a table that keeps both the top and left labels in view while the user scrolls through large content. Or they may want to create a carousel that is visually clipped on one axis, while ensuring that `scrollIntoView()` does not unexpectedly move that clipped axis.

Please see the explainer for more details.

## Ecosystem Status

- **Momentum:** High (160 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Single-axis scroll containers address a decade-old CSS quirk by enabling developers to pair scrollable `overflow` values with `clip` (e.g., `overflow: auto clip`), creating true 1D scrollers. This decouples `position: sticky` and DOM scroll APIs per axis, enabling long-sought UI patterns like independent two-axis sticky table headers and columns. While shipped enabled by default in Chromium 153, the feature is not yet Baseline and awaits implementation in Gecko and WebKit.

### Recommendations
- Actionable Advice: Treat single-axis scroll containers as a progressive enhancement: use `@supports named-feature(single-axis-scroll-container)` or lightweight JS feature detection to apply `overflow: auto clip` and multi-axis sticky positioning in Chromium browsers while retaining existing layout fallbacks for Firefox and Safari.
- Shipping enabled by default in Chrome 153. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @freedebreuil: "> How does this play with touch-action?  Thanks, good point. I think the right model is that scroll containers are now per-axis. For `touch-action`, t..."
- Standards Activity (W3C TAG): Latest discussion from @freedebreuil: "Thanks @lukewarlow. The breaking change is limited to the case where `clip` on one axis is combined with a scrollable overflow value on the other (for..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/680) [open]
- **Mozilla:** [Single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1418) [open]
- **W3C TAG:** [Other Spec Review: Single-Axis Scroll Containers](https://github.com/w3ctag/design-reviews/issues/1222) [open]

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHJvrYeUm0ndLaTLqNQIZTPk7n1l8H3G9NoZ4Xr5rXCiBh7qrjIMe3pto0ZXVsaQowDuhYkb6PKarOA07aWxuF6Se_ZBoj7mvJtOVqsYjMXEWMkedAVtEP_X0ejB7927aY8TcEA4YnaQQR1vhboGnz3dB65BmWaMoblxJkPOTgdCWjbDjwG2m4oHrbAk3s=) *(vertexaisearch.cloud.google.com)*
  > Ready for developer testing: Single-axis scroll containers | Blog | Chrome for Developers Skip to main content / English Nederlands Русский فارسی বাংলা Sign in Blog Chrome for Developers Blog Ready for developer testing: Single-axis scroll containers...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGix_rcSpmnKAokONaggYg8Bmtdu_jGHV1YktGVEilHEBD1Ed_FZ5c3-LTPJgjwArDgtQX8niy3L5tvp4Z0waqZ_TEERjJtuS3FgwF2CJYNiELG9tlGqcK4mZHuc-wySLyMmTFw2kHcVv5R44mTpsQvKHEWDB_PPLWpAYpT4Q==) *(vertexaisearch.cloud.google.com)*
  > GitHub - explainers-by-googlers/single-axis-scroll-containers: Single-Axis Scroll Containers explainer · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [bram.us](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHbgqyoo5ERLDqSVsQgATNm9m5kFzpLNk_Fj7ttl80ZNbM7u-SWL89_8J2g3pWpCYH0C3q5d9L3kXRXnAv_jODjr9LAKfDvTtWt9p1pRsZfzDNyPZTRFeRXbJabTl_60yfglqhITluno2w=) *(vertexaisearch.cloud.google.com)*
  > CSS position: sticky now sticks to the nearest scroller on a per axis basis! &#8211; Bram.us Skip to content Bram.us A rather geeky/technical weblog, est. 2001, by Bramus CSS position: sticky now sticks to the nearest scroller on a per axis basis! Po...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGX0RTjk_pe0a5eOQIwxLLVHhoGjsYgdLRzbNMFqX6avmHneUQI7Nip4WhjVqnH8oy4CkkAU-e7AGcFQQXkp2uUxY876jd7eK0qONKbedJIFhYINQK_hoLTc9iLrkYJ1VtFiAIQ_-rrBuLQ) *(vertexaisearch.cloud.google.com)*
  > Other Spec Review: Single-Axis Scroll Containers · Issue #1222 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload ...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHr7-wgjOc2JUeSb4qJ2DAVbRZvSnc9S--Eg9js0fJih__JFg-fz5H1ECWUxgQ1WhJN5LOvR__NjaSmdQh8Lewmz7vVRicmOV4DhxRDCwwoeCnmXSxns8mEP8Z7J5hXfKPl3sSEVBQM6Aqqth7xmSH1jMwocC9FF8U2aGdrOXnd9wPOTEXgSpTZbwecVC5c-p4VP4McuC-97AbtsKJ1Jz8=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Historically in CSS, creating a true single-axis scroll container was impossible. If a developer declared `overflow-x: auto` while attempting to keep `overflow-y: visible`, browsers coerced the `visible` axis into `auto` o
- [51cto.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFf2m6bgbdQeYhz51E4d01kgtcjIeEM59XEo5GRjg3lYZZX9PnOo75rOLlG-czdfDUxf5UcVmP9UxBupygn25vn0QGajvZfnl-pVz8pwtLBl9mQ0fSxabNWrcxzBl6Ptg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Historically in CSS, creating a true single-axis scroll container was impossible. If a developer declared `overflow-x: auto` while attempting to keep `overflow-y: visible`, browsers coerced the `visible` axis into `auto` o
- [Re: [blink-dev] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17220.html) *(mail-archive.com)*
  > &gt;&gt;&gt; *No information provided* &gt;&gt;&gt; &gt;&gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt;&gt; https://<strong>chromestatus.com/feature/5067363861004288</strong>?gate=6477880110481408 &gt;&gt;&gt; &gt;&gt;&gt; *Links to p...
- [Re: [blink-dev] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Best, &gt;&gt;&gt; &gt;&gt;&gt; Alex &gt;&gt;&gt; &gt;&gt;&gt; On Tuesday, August 11, 2026 at 11:26:16 AM UTC-7 Chromestatus wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; *Contact emails* &gt;&gt;&gt;&gt; [email protected] &gt;&gt;&g...
- [[blink-dev] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)*
  > Explainer https://github.com/explainers-by-googlers/single-axis-scroll-containers Specification https://github.com/w3c/csswg-drafts/pull/13903 Summary <strong>Extends the `overflow` property to support scrollable values together with `clip`</strong> ...
- [[blink-dev] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)*
  > Best, Alex On Tuesday, August 11, 2026 at 11:26:16 AM UTC-7 Chromestatus wrote: &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https://<strong>github.com/explainers-by-googlers/single-axis-scroll-containers</strong> &gt; &gt;...
- [[blink-dev] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)*
  > Blink component Blink&gt;Scroll Web Feature ID scroll-snap Motivation This is part of the single-axis scroll container feature (https://github.com/explainers-by-googlers/single-axis-scroll-containers) to <strong>align the scroll snap behavior with th...
- [CSS position: sticky now sticks to the nearest scroller on a per axis basis! – Bram.us](https://www.bram.us/2026/03/30/css-sticky-per-axis) *(bram.us · 2026-03-30T00:00:00)*
  > A recent change to CSS fixes this: position: sticky now plays nice with single-axis scrollers, <strong>allowing you to have sticky elements that track different scroll containers on different axes</strong>.
- [CSS `position: sticky` for Single Axis Scroll Containers](https://codepen.io/bramus/pen/VYKQwmK) *(codepen.io)*
  > Define the internal structure // We use inline styles to ensure &#x27;all: unset&#x27; is applied to every element const unsetBase = &#x27;all: unset; display: block;&#x27;; container.innerHTML = ` &lt;div style=&quot;${unsetBase} position: relative;...
- [CSS `position: sticky` for Single Axis Scroll Containers](https://cdpn.io/bramus/fullpage/VYKQwmK?anon=true&view=fullpage) *(cdpn.io)*
  > This is a code demo posted by a web developer on CodePen. A referer from CodePen is required to render this page view, and your browser is not sending one (more details) · Your browser does not support sticky-per-axis. Try Chrome &amp;ge;148 with the...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17220.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5067363861004288`)*
  > &gt;&gt;&gt; *No information provided* &gt;&gt;&gt; &gt;&gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt;&gt; https://<strong>chromestatus.com/feature/5067363861004288</strong>?gate=6477880110481408 &gt;&gt;&gt; &gt;&gt;&gt; *...
- [Re: [blink-dev] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Best, &gt;&gt;&gt; &gt;&gt;&gt; Alex &gt;&gt;&gt; &gt;&gt;&gt; On Tuesday, August 11, 2026 at 11:26:16 AM UTC-7 Chromestatus wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; *Contact emails* &gt;&gt;&gt;&gt; [email protected] ...
- [[blink-dev] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Explainer https://github.com/explainers-by-googlers/single-axis-scroll-containers Specification https://github.com/w3c/csswg-drafts/pull/13903 Summary <strong>Extends the `overflow` property to support scrollable values together with `clip`...
- [[blink-dev] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Best, Alex On Tuesday, August 11, 2026 at 11:26:16 AM UTC-7 Chromestatus wrote: &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https://<strong>github.com/explainers-by-googlers/single-axis-scroll-containers</strong>...
- [[blink-dev] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Blink component Blink&gt;Scroll Web Feature ID scroll-snap Motivation This is part of the single-axis scroll container feature (https://github.com/explainers-by-googlers/single-axis-scroll-containers) to <strong>align the scroll snap behavi...

## 📚 Platform Documentation & Specifications

- [Issue · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13445) *(github.com)*
- [[css-overflow-4] Allow scrollable overflow to be clipped in off-axis · Issue #12289 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12289) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 17 result(s) found across 7 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5067363861004288" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/explainers-by-googlers/single-axis-scroll-containers" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"github.com/w3c/csswg-drafts/pull/13903" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"overflow: scroll clip" OR "overflow: clip scroll" OR "overflow: auto clip"` — *Finds specific CSS code snippets, specification examples, and syntax usage combining scrollable overflow values with clip.* (0 returned)
  - `"single-axis scroll container" OR "single-axis scroll containers" (CSS OR "position: sticky")` — *Discovers developer explainers, blog articles, and tutorials discussing single-axis scroll containers and multi-directional sticky positioning.* (8 returned)
  - `"Single-axis scroll containers" ("Intent to Prototype" OR "Intent to Ship" OR "Chrome Platform Status" OR "Chromium")` — *Captures browser vendor intents, implementation status updates in Chromium, and release tracking.* (4 returned)
  - `"single-axis scroll" ("csswg-drafts" OR "w3c" OR "overflow: clip") ("position: sticky" OR "scrollIntoView")` — *Surfaces standards-level debates, GitHub issue threads, and developer pain points regarding sticky axis constraints and DOM scroll behavior.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 10 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5067363861004288)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5067363861004288)
- [Specification](https://github.com/w3c/csswg-drafts/pull/13903)
- [Chromium Tracking Bug](https://issues.chromium.org/440038212)
