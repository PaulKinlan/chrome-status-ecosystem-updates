# Renewed HTML insertion&streaming methods

> **Report Week:** 2026-W38 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document.  - Positional methods (before/after/append/prepend/replaceWith) that take HTML as argument, effectively replacing insertAdjacentHTML. - Streaming methods (stream{Append}HTML{Unsafe}) which return a WritableStream - Passing {runScripts} as part of SetHTMLUnsafeOptions, mimicking createContextualFragment behavior. - Supporting createParserOptions in trusted types, allowing trusted types to override scripting mode and sanitizer.

### Motivation

Updating HTML dynamically from script has multiple disjointed API, each with its own subtle differences.
Developers can partially update an element using insertAdjacentHTML, use sanitizer with setHTML, execute scripts with createContextualFragment, stream with detached documents. 

This can be confusing and frustrating to web developers, as well as create bugs or security issues if the differences are not well understood.

This change replaces those with a coherent set of methods and arguments, that use the same settings (sanitizer/runScripts) with different variants (where to insert the HTML, stream/one-shot, safe/unsafe) as well as the same support in trusted types.

## Ecosystem Status

- **Momentum:** High (310 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** Renewed HTML insertion&streaming methods is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @o-t-w: "This feature is due to ship in \[Chrome 154\](https://developer.chrome.com/blog/chrome-154-beta?hl=en#renewed\_html\_insertion\_and\_streaming\_methods). Moz..."
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Marko (@MarkoDevTeam) on X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [HTML streaming & revamped DOM parsing](https://github.com/WebKit/standards-positions/issues/629) [open]
- **Mozilla:** [HTML streaming & revamped DOM parsing](https://github.com/mozilla/standards-positions/issues/1370) [closed]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Marko (@MarkoDevTeam) on X](https://twitter.com/MarkoDevTeam/status/1481014006085087233) — *by @MarkoDevTeam, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Marko on X: "For those of you who like Hackernews Demos that check the boxes: 🏝️Compiler automated Partial Hydration (Islands) 🏄‍♀️Streaming HTML 🔪Deployed at edge with @Cloudflare Workers ⚡️Built with @vite\_js 📁File-based routing with automated imports https://t.co/XKgrFnDjHw" / X](https://twitter.com/MarkoDevTeam/status/1481041972190015488) — *by @MarkoDevTeam, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700 Contact emails [email&#160;pr...
- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, 24 Mar 2026 04:52:00 -0700 Con...
- [RE: \[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17049.html) *(mail-archive.com)*
  > RE: [blink-dev] Re: Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) RE: [blink-dev] Re: Intent to Ship: Renewed HTML insertion&streaming methods 'Daniel Clark' via blink-dev Wed, 22 Jul 2026 16:29:41 -07...
- [\[blink-dev\] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17004.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Renewed HTML insertion&streaming methods 'Dan Clark' via blink-dev Mon, 20 Jul 2026 12:03:20 -0700 Thanks f...
- [How to Embed a Video on Your Website - 2026 Guide](https://vidizmo.ai/blog/embedding-streaming-videos) *(vidizmo.ai · 2026-08-29T00:00:00)*
  > <strong>Choose Embed HTML.</strong> Paste the embed code. Resize and publish. Most browsers block autoplay unless the video is muted. Fix: enable autoplay + muted (if your platform supports it), or don’t rely on autoplay.
- [HTML5 Live Streaming Player: How to Embed Live Video on Your Website -](https://www.yololiv.com/blog/html5-live-streaming-player-embed-website) *(yololiv.com · 2026-05-18T09:17:36)*
  > HTML5 Live Streaming Player: How to Embed Live Video on Your Website - HTML5 Live Streaming Player: How to Embed Live Video on Your Website - Search Practical tips and expert advice for professional live streaming Search Search Search Copyright 2021 ...
- [HTML - One shot! - Manju blogs - Hashnode](https://manjublogs.hashnode.dev/html-one-shot) *(manjublogs.hashnode.dev · 2023-01-23T02:35:39)*
  > Here, the walls may be thought of as HTML files; they give the website body so that we can continue to make it seem fashionable and provide comfort to visitors using Javascript DOM manipulation. The CSS and HTML will be covered in the upcoming instru...
- [One-Shot Any Web App with Gradio's gr.HTML](https://huggingface.co/blog/gradio-html-one-shot-apps) *(huggingface.co · 2026-02-18T00:00:00)*
  > Gradio 6 quietly shipped a very powerful feature: gr.<strong>HTML now supports custom templates, scoped CSS, and JavaScript interactivity</strong>. Which means you can build pretty much any web component — and Claude (or any other frontier LLM) can g...
- [Studocu - Free summaries, lecture notes & exam prep](https://www.studocu.com/in/document/savitribai-phule-pune-university/batchlor-of-computer-scine/html-css-js-full-one-shot-notes-comprehensive-guide-to-web-development/150233708) *(studocu.com)*
  > Share free summaries, lecture notes, exam prep and more!!
- [ReactJS, MongoDB, JS, CSS in one shot while building an App - DEV Community](https://dev.to/ssd/reactjs-mongodb-js-css-in-one-shot-while-building-an-app-3f43) *(dev.to · 2023-06-23T13:08:08)*
  > Today we&#x27;ll see only the necessary things that one needs to get started with web development like knowing necessary stuff of HTML, CSS, JS and ReactJS and using MongoDb.
- [Chrome Declarative Partial Updates: Native HTML Streaming in 148 \| byteiota](https://byteiota.com/chrome-declarative-partial-updates-native-html-streaming-in-148) *(byteiota.com · 2026-06-04T05:07:53)*
  > Chrome is shipping something the web platform has needed for twenty years: <strong>a native way to stream HTML into specific DOM slots as server data resolves — no JavaScript library required</strong>.
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com)*
  > Streaming methods (streamAppendHTML(), streamAppendHTMLUnsafe(), and related methods) which return a WritableStream.
- [Streaming HTML - Ollie Williams](https://olliewilliams.xyz/blog/streaming-html) *(olliewilliams.xyz · 2026-06-05T00:00:00)*
  > const response = await fetch(&#x27;templates.html&#x27;); response.textStream() .pipeTo(document.body.streamAppendHTMLUnsafe());
- [Out-of-Order Streaming HTML Is Coming To A Browser Near You](https://modernwebweekly.substack.com/p/out-of-order-streaming-html-is-coming) *(modernwebweekly.substack.com · 2026-06-05T12:58:50)*
  > This <strong>enables SPAs to stream HTML into the insertion points marked by processing instructions using JavaScript</strong>. This means that instead of using innerHTML to update content, your SPA can now do this: const response = await fetch(&#x27...
- [Trying Declarative Partial Updates: A Future API for Replacing HTML Later - DEV Community](https://dev.to/nyaomaru/trying-declarative-partial-updates-a-future-api-for-replacing-html-later-2g43) *(dev.to · 2026-07-01T12:42:05)*
  > Even today, there are several ways to dynamically insert HTML. element.innerHTML = html; element.outerHTML = html; <strong>element.insertAdjacentHTML(&quot;beforeend&quot;, html);</strong>
- [Streaming HTML Out of Order Without JavaScript (2026)](https://umesh-malik.com/blog/streaming-html-out-of-order-without-javascript) *(umesh-malik.com · 2026-07-13T18:30:00)*
  > There are Unsafe variants (streamHTMLUnsafe, streamAppendHTMLUnsafe) that skip sanitization, mirroring the setHTMLUnsafe naming already standardized with the HTML Sanitizer API.
- [Declarative partial updates \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/declarative-partial-updates) *(developer.chrome.com · 2026-05-19T00:00:00)*
  > Integration of streaming with the Trusted Types API requires using a new createParserOptions method which <strong>allows injecting a sanitizer to any HTML setting operation</strong>.
- [Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b) *(dev.to · Mario Ezquerro · Sep 11)*
  > Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700 Contact emails [ema...
- [\[blink-dev\] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, 24 Mar 2026 04:52:00...

## 📚 Platform Documentation & Specifications

- [Coherent story for HTML-setting methods · Issue #11669 · whatwg/html](https://github.com/whatwg/html/issues/11669) *(github.com)*
- [GitHub - WICG/declarative-partial-updates · GitHub](https://github.com/WICG/declarative-partial-updates) *(github.com)*
- [declarative-partial-updates/patching-explainer.md at main · WICG/declarative-partial-updates](https://github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md) *(github.com)*
- [declarative-partial-updates/route-matching-explainer.md at main · WICG/declarative-partial-updates](https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md) *(github.com)*
- [Issues · WICG/declarative-partial-updates](https://github.com/WICG/declarative-partial-updates/issues) *(github.com)*
- [Activity · WICG/declarative-partial-updates](https://github.com/WICG/declarative-partial-updates/activity) *(github.com)*
- [declarative-partial-updates/snap-to-activate-explainer.md at main · WICG/declarative-partial-updates](https://github.com/WICG/declarative-partial-updates/blob/main/snap-to-activate-explainer.md) *(github.com)*
- [Add &lt;template for&gt; for declarative out-of-order streaming by foolip · Pull Request #11818 · whatwg/html](https://github.com/whatwg/html/pull/11818) *(github.com)*
- [GitHub - GoogleChromeLabs/html-setters-polyfill · GitHub](https://github.com/GoogleChromeLabs/html-setters-polyfill) *(github.com)*
- [DASH Adaptive Streaming for HTML video](https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 48 result(s) found across 12 planned queries — **26 verified relevant**
  - `"chromestatus.com/feature/5054329641893888" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"Renewed HTML insertion&streaming methods" API` — *Core feature API query* (3 returned)
  - `"Renewed HTML insertion&streaming methods" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"one-shot" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Renewed HTML insertion&streaming methods" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Renewed HTML insertion&streaming methods" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"streamAppendHTMLUnsafe" OR "streamAppendHTML" JavaScript WritableStream` — *Searches for practical JavaScript code snippets and implementation examples using the new streaming HTML insertion APIs.* (5 returned)
  - `("dynamic markup revamped" OR "Renewed HTML insertion") "insertAdjacentHTML"` — *Finds technical blog posts and explainer guides highlighting the shift from insertAdjacentHTML to modern positional and streaming HTML methods.* (2 returned)
  - `"dynamic-markup-revamped" OR "declarative-partial-updates" site:github.com OR site:whatwg.org` — *Identifies web developer feedback, design discussions, and standards evolution in the WICG and WHATWG repositories.* (8 returned)
  - `("SetHTMLUnsafeOptions" OR "streamAppendHTML") ("standards-positions" OR "Intent to")` — *Surfaces browser vendor signals, implementation intents, and consensus tracking across Chromium, WebKit, and Gecko.* (3 returned)
  - `"createParserOptions" "Trusted Types" ("setHTML" OR "runScripts")` — *Discovers developer tutorials and security analyses covering how Trusted Types interact with the revamped HTML insertion and scripting options.* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **3 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 113846 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5054329641893888)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5054329641893888)
- [Specification](https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md#resulting-api)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/491743369)
