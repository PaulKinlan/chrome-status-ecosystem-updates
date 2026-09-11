# Renewed HTML insertion&streaming methods

> **Report Week:** 2026-W37 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Expose multiple HTML setting methods that provide a coherent story for dynamically inserting markup into an existing document.

- Positional methods (before/after/append/prepend/replaceWith) that take HTML as argument, effectively replacing insertAdjacentHTML.
- Streaming methods (stream{Append}HTML{Unsafe}) which return a WritableStream
- Passing {runScripts} as part of SetHTMLUnsafeOptions, mimicking createContextualFragment behavior.
- Supporting createParserOptions in trusted types, allowing trusted types to override scripting mode and sanitizer.

### Motivation

Updating HTML dynamically from script has multiple disjointed API, each with its own subtle differences.
Developers can partially update an element using insertAdjacentHTML, use sanitizer with setHTML, execute scripts with createContextualFragment, stream with detached documents. 

This can be confusing and frustrating to web developers, as well as create bugs or security issues if the differences are not well understood.

This change replaces those with a coherent set of methods and arguments, that use the same settings (sanitizer/runScripts) with different variants (where to insert the HTML, stream/one-shot, safe/unsafe) as well as the same support in trusted types.

## Ecosystem Status

- **Momentum:** High (120 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** Renewed HTML insertion&streaming methods is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @zcorpan: "Generally we want 7 days to pass. This has happened here. 🙂..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Marko (@MarkoDevTeam) on X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [HTML streaming & revamped DOM parsing](https://github.com/WebKit/standards-positions/issues/629) [open]
- **Mozilla:** [HTML streaming & revamped DOM parsing](https://github.com/mozilla/standards-positions/issues/1370) [closed]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Marko (@MarkoDevTeam) on X](https://twitter.com/MarkoDevTeam/status/1481014006085087233) — *by @MarkoDevTeam, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Marko on X: "For those of you who like Hackernews Demos that check the boxes: 🏝️Compiler automated Partial Hydration (Islands) 🏄‍♀️Streaming HTML 🔪Deployed at edge with @Cloudflare Workers ⚡️Built with @vite_js 📁File-based routing with automated imports https://t.co/XKgrFnDjHw" / X](https://twitter.com/MarkoDevTeam/status/1481041972190015488) — *by @MarkoDevTeam, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700 Contact emails [email&#160;pr...
- [[blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, 24 Mar 2026 04:52:00 -0700 Con...
- [RE: [blink-dev] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17049.html) *(mail-archive.com)*
  > RE: [blink-dev] Re: Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) RE: [blink-dev] Re: Intent to Ship: Renewed HTML insertion&streaming methods 'Daniel Clark' via blink-dev Wed, 22 Jul 2026 16:29:41 -07...
- [[blink-dev] Re: Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg17004.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Renewed HTML insertion&streaming methods 'Dan Clark' via blink-dev Mon, 20 Jul 2026 12:03:20 -0700 Thanks f...
- [HTML5 Live Streaming Player: How to Embed Live Video on Your Website -](https://www.yololiv.com/blog/html5-live-streaming-player-embed-website) *(yololiv.com · 2026-05-18T09:17:36)*
  > HTML5 Live Streaming Player: How to Embed Live Video on Your Website - HTML5 Live Streaming Player: How to Embed Live Video on Your Website - Search Practical tips and expert advice for professional live streaming Search Search Search Copyright 2021 ...
- [Every Way Possible To Embed Modern Media With HTML Code »](https://html.com/media) *(html.com · 2020-01-02T14:04:43)*
  > Using another method may not work at all, may break as configuration settings change, or may violate the content provider’s terms of service. The media player provided by content hosting providers usually includes buffering and streaming optimization...
- [One-Shot Any Web App with Gradio's gr.HTML](https://huggingface.co/blog/gradio-html-one-shot-apps) *(huggingface.co · 2026-02-18T00:00:00)*
  > Gradio 6 quietly shipped a very powerful feature: gr.<strong>HTML now supports custom templates, scoped CSS, and JavaScript interactivity</strong>. Which means you can build pretty much any web component — and Claude (or any other frontier LLM) can g...
- [HTML - One shot! - Manju blogs - Hashnode](https://manjublogs.hashnode.dev/html-one-shot) *(manjublogs.hashnode.dev · 2023-01-23T02:35:39)*
  > Here, the walls may be thought of as HTML files; they give the website body so that we can continue to make it seem fashionable and provide comfort to visitors using Javascript DOM manipulation. The CSS and HTML will be covered in the upcoming instru...
- [Studocu - Free summaries, lecture notes & exam prep](https://www.studocu.com/in/document/savitribai-phule-pune-university/batchlor-of-computer-scine/html-css-js-full-one-shot-notes-comprehensive-guide-to-web-development/150233708) *(studocu.com)*
  > Share free summaries, lecture notes, exam prep and more!!
- [ReactJS, MongoDB, JS, CSS in one shot while building an App - DEV Community](https://dev.to/ssd/reactjs-mongodb-js-css-in-one-shot-while-building-an-app-3f43) *(dev.to · 2023-06-23T13:08:08)*
  > Today we&#x27;ll see only the necessary things that one needs to get started with web development like knowing necessary stuff of HTML, CSS, JS and ReactJS and using MongoDb.
- [Chrome Declarative Partial Updates: Native HTML Streaming in 148 | byteiota](https://byteiota.com/chrome-declarative-partial-updates-native-html-streaming-in-148) *(byteiota.com · 2026-06-04T05:07:53)*
  > Chrome is shipping something the web platform has needed for twenty years: <strong>a native way to stream HTML into specific DOM slots as server data resolves — no JavaScript library required</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16984.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Renewed HTML insertion&streaming methods Chromestatus Thu, 16 Jul 2026 08:40:50 -0700 Contact emails [ema...
- [[blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16159.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md`)*
  > [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Renewed HTML insertion&streaming methods Chromestatus Tue, 24 Mar 2026 04:52:00...

## 📚 Platform Documentation & Specifications

- [DASH Adaptive Streaming for HTML video](https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 32 result(s) found across 7 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/5054329641893888" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"Renewed HTML insertion&streaming methods" API` — *Core feature API query* (3 returned)
  - `"Renewed HTML insertion&streaming methods" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"one-shot" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Renewed HTML insertion&streaming methods" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Renewed HTML insertion&streaming methods" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5054329641893888)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5054329641893888)
- [Specification](https://github.com/WICG/declarative-partial-updates/blob/main/dynamic-markup-revamped-explainer.md#resulting-api)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/491743369)
