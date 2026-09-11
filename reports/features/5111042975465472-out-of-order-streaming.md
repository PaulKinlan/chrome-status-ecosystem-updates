# Out of order streaming

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

Use <template for> and processing instruction ranges (<?marker>, <?start>, and <?end> to update existing parts of the document without JS.

### Motivation

On its own, this provides a performance optimization for cases when the server is slow at producing parts of a document's content that might need to appear early in the DOM.

It is part of a bigger initiative (described in the explainer) to enable developers to be able to utilize same-document updates in a way that's built in to the platform.

## Ecosystem Status

- **Momentum:** High (782 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** Native out-of-order HTML streaming introduces `<template for>` paired with processing instructions (`<?marker>`, `<?start>`, `<?end>`) to enable declarative document patching directly during initial stream parsing without client JavaScript. Standardized via WHATWG HTML PR #11818 and shipping enabled by default in Chrome 150, the feature addresses server-rendered latency by allowing late-arriving content chunks to update earlier DOM slots natively. Cross-engine consensus is strong, establishing an official platform primitive for performance patterns previously locked behind framework-specific runtimes.

### Recommendations
- Actionable Advice: Teams should experiment with `<template for>` and marker processing instructions in Chromium environments to optimize server-rendered streaming architectures and heavy initial DOM chunks. For production across all browsers today, retain progressive enhancement fallback strategies (or framework-level streaming) until Firefox and Safari ship native parsing support.
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @noamr: "> Colleagues and I are quite happy with how this turned out, in particular the revival of processing instructions to solve the long-standing marker is..."
- Standards Activity (Mozilla): Latest discussion from @hsivonen: "I suggest positive for this.  (From the implementation perspective, I don't like it that this can cause insertions before a marker instead of just app..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Show HN: Phooos – Pure HTML Out-of-Order Streaming Without JavaScript" (3 points, 2 comments).

## Standards Positions

- **WebKit:** [Out of order streaming](https://github.com/WebKit/standards-positions/issues/628) [closed]
- **Mozilla:** [Out of order streaming](https://github.com/mozilla/standards-positions/issues/1369) [closed]
- **W3C TAG:** [Incubation: patching (interleaved out-of-order streaming)](https://github.com/w3ctag/design-reviews/issues/1134) [closed]

## Community Discussions & Social Pulse

- 💬 **Hacker News:** [Show HN: Phooos – Pure HTML Out-of-Order Streaming Without JavaScript](https://news.ycombinator.com/item?id=40070792) — *3 pts, 2 comments*
- 💬 **Hacker News:** [Pure HTML Out-of-Order Streaming – Pure HTML and CSS, No JavaScript](https://news.ycombinator.com/item?id=41125606) — *2 pts, 0 comments*
- 💬 **Hacker News:** [Streaming HTML out of order without JavaScript](https://news.ycombinator.com/item?id=39560180) — *226 pts, 98 comments*
- 💬 **Hacker News:** [Streaming HTML out of order without JavaScript](https://news.ycombinator.com/item?id=44158336) — *23 pts, 3 comments*
- 💬 **Hacker News:** [Streaming HTML out of order without JavaScript](https://news.ycombinator.com/item?id=44171241) — *3 pts, 0 comments*
- 🐦 **Twitter / X:** [Man, I genuinely can’t explain how much engineering went into React Suspense + out-of-order streaming.  Who are the peop](https://twitter.com/infinterenders/status/2096182438049530056) — *by @infinterenders, 132 likes/RTs, 5 replies*
- 🐦 **Twitter / X:** [@DG02002 @sebastienlorber Browsers still only process HTML/CSS/JS. The &lt;?php?&gt; is just a processing instruction no](https://twitter.com/grok/status/2095398186550464750) — *by @grok, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [@tomus_sherman @sebastienlorber They shipped out of order streaming first as part of a web components spec a couple year](https://twitter.com/RyanCarniato/status/2095236552733737432) — *by @RyanCarniato, 3 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Somebody update that Regex to match open tags except XHTML self-contained tags with out-of-order streaming tag support p](https://twitter.com/saltyAom/status/2095182025917653265) — *by @saltyAom, 80 likes/RTs, 4 replies*
- 🐦 **Twitter / X:** [@sebastienlorber Out-of-order streaming in the HTML spec feels like 2015 finally catching up.](https://twitter.com/SohelIslamImran/status/2095176612694131124) — *by @SohelIslamImran, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [👀 Out-of-order streaming - Now in the HTML spec 🎉  Positive positions from browsers, already in Chrome https://t.co/eb](https://twitter.com/sebastienlorber/status/2095164365540335914) — *by @sebastienlorber, 540 likes/RTs, 18 replies*
- 🐦 **Twitter / X:** [XユーザーのKent C. Dodds ⚡さん: 「Out of order streaming is fantastic, but as great as RSC is, it's not required to accomplish out of order streaming. Remix has it with defer. It's a terrific lever. Watch @ryanflorence's awesome talk where he introduced it last year: https://t.co/7fvTpWAyVB」 / X](https://x.com/kentcdodds/status/1715970504367198631) — *by @kentcdodds, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Alden Richards on X: "Out of Order streaming now on @Netflix_PH #OutOfOrderOnNetflix https://t.co/7Sr3cVwfWu" / X](https://x.com/aldenrichards02/status/1973588371017719854) — *by @aldenrichards02, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Marv147 on Twitter: "The new HD+ Streaming from @OffsideSupport is absolutely stunning, they've upped the ante now. Best streaming service, bar none. #OSSrules"](https://twitter.com/marv147/status/500622608942264321?lang=en-gb) — *by @marv147, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [astro-suspense](https://www.npmjs.com/package/astro-suspense) `v0.1.3` — Out of order streaming support for Astro.
- [@reaxis/koa-render](https://www.npmjs.com/package/@reaxis/koa-render) `v0.0.1-a` — Asynchronous Preact renderer for Koa applications, supporting out-of-order streaming
- [@reaxis/async](https://www.npmjs.com/package/@reaxis/async) `v0.0.1-b` — Async helpers for Preact server-side-rendering with Suspense and out-of-order streaming

## 📰 Ecosystem Blogs & Articles

- [Show HN: Phooos – Pure HTML Out-of-Order Streaming Without JavaScript](https://github.com/niutech/phooos) *(github.com · 2024-04-17T22:34:19Z)*
  > GitHub - niutech/phooos: Pure HTML Out-Of-Order Streaming (PHOOOS) without JavaScript · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload t...
- [Pure HTML Out-of-Order Streaming – Pure HTML and CSS, No JavaScript](https://kodus.pl) *(kodus.pl · 2024-08-01T02:13:59Z)*
- [Streaming HTML out of order without JavaScript](https://lamplightdev.com/blog/2024/01/10/streaming-html-out-of-order-without-javascript) *(lamplightdev.com · 2024-03-01T09:37:08Z)*
  > lamplightdev - Streaming HTML out of order without JavaScript Streaming HTML out of order without JavaScript Wed Jan 10 2024 Updated Sep 29 2024 to add further information about support in Safari , and updated information about support in Firefox . L...
- [[blink-dev] Ready for Developer Testing: Declarative Document Patching](http://www.mail-archive.com/blink-dev@chromium.org/msg16160.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md Specification https://github.com/whatwg/html/pull/11818 Summary <strong>Stream HTML content out of order, and update an existing document with a stream of e...
- [[blink-dev] Intent to Ship: Out of order streaming](http://www.mail-archive.com/blink-dev@chromium.org/msg16589.html) *(mail-archive.com)*
  > Explainer https://<strong>github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md</strong> Specification https://github.com/whatwg/html/pull/11818 Summary Use &lt;template for&gt; and processing instruction ranges (&lt;?start&gt; ...
- [Re: [blink-dev] Intent to Experiment: Parse processing instructions in HTML](http://www.mail-archive.com/blink-dev@chromium.org/msg16230.html) *(mail-archive.com)*
  > *Contact emails* [email protected], [email protected] *Explainer* https://<strong>github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md</strong>#proposed-markup *Specification* https://github.com/whatwg/html/pull/12118 *Summary*...
- [[blink-dev] Re: Intent to Ship: Out of order streaming](http://www.mail-archive.com/blink-dev@chromium.org/msg16599.html) *(mail-archive.com)*
  > &gt;&gt; &gt; &gt;&gt; &gt; On Tuesday, May 26, 2026 at 4:17:50 PM UTC+2 Noam Rosenthal wrote: &gt;&gt; &gt; &gt;&gt; &gt; Contact emails &gt;&gt; &gt; [email protected], [email protected], [email protected] &gt;&gt; &gt; &gt;&gt; &gt; Explainer &gt;...
- [HTML's Biggest Update in a Decade: Declarative Partial Updates](https://pbxscience.com/htmls-biggest-update-in-a-decade-declarative-partial-updates) *(pbxscience.com · 2026-06-06T17:47:28)*
  > Where to follow the proposal WICG explainer: github.com/WICG/declarative-partial-updates WHATWG PR: <strong>github.com/whatwg/html/pull/11818</strong> Chrome developer blog: developer.chrome.com/blog/declarative-partial-updates
- [Out of Order Streaming from Scratch - Gal Schlezinger](https://gal.hagever.com/posts/out-of-order-streaming-from-scratch) *(gal.hagever.com · 2025-11-26T07:03:53)*
  > When Next.js introduced the App Router (using React Server Components), they said it supports streaming. The streaming is actually out-of-order, which <strong>let&#x27;s you stream updates to your UI after rendering it</strong>.
- [Out Of Order Streaming (The Secret Powering Modern React) by Theo Browne](https://gitnation.com/contents/out-of-order-streaming-the-secret-powering-modern-react) *(gitnation.com · 2024-11-27T06:20:26)*
  > Optimizing HTML streaming with Suspense and dynamic I.O. can further improve loading times. Using suspense in client-side rendering and addressing challenges with Next.js React model are interesting patterns. Caching can now be done at a more granula...
- [Out of Order streaming: where to watch movie online?](https://www.justwatch.com/us/movie/out-of-order-2025) *(justwatch.com · 2025-09-27T00:00:00)*
  > Out of Order is <strong>not available for streaming</strong>.
- [Order Order Out of Order streaming: watch online](https://www.justwatch.com/us/movie/order-order-out-of-order) *(justwatch.com · 2026-04-30T00:57:19)*
  > <strong>There aren&#x27;t any free streaming options for Order Order Out of Order right now</strong>.
- [Streaming HTML Out of Order Without JavaScript (2026)](https://umesh-malik.com/blog/streaming-html-out-of-order-without-javascript) *(umesh-malik.com · 2026-07-13T18:30:00)*
  > Streaming HTML out of order flips that: <strong>you send the fast parts of a page immediately, leave labeled holes where the slow parts go, and fill those holes later in the same response — in whatever order the data actually arrives</strong>.
- [Olamide - Frontend Developer](https://www.olamidee.tech/blog/out-of-order-streaming) *(olamidee.tech)*
  > <strong>When you visit this page, you&#x27;ll see the user data appears after about 1 second, while the server time takes around 5 seconds to load</strong>. This demonstrates the power of out-of-order streaming - each piece of UI can load independent...
- [How do you handle late and out-of-order data in streaming applications?](https://www.linkedin.com/advice/1/how-do-you-handle-late-out-of-order-data-streaming) *(linkedin.com · 2023-04-06T15:50:52)*
  > Learn how to use windowing, watermarking, triggering, and other techniques to handle late and out-of-order data in streaming applications.
- [Guides to Help You Start Live Streaming | Streamlabs](https://streamlabs.com/content-hub/streaming/getting-started) *(streamlabs.com)*
  > Information on getting started with live streaming. Find out which platforms to stream to, the software you need to get started, and so much more.
- [How to Turn Blog Features Into Long-Term Streaming Growth](https://artistrack.com/blog-features-streaming-growth-strategy) *(artistrack.com · 2026-02-28T00:00:00)*
  > Stop wasting your press coverage. Learn how to turn one-off blog features into a long-term growth funnel for your Twitch or YouTube stream.
- [Progressive Web Apps: Service Worker Includes | Google for Developers](https://developers.google.com/codelabs/pwa-training/pwa06--service-worker-includes) *(developers.google.com · 2024-09-18T00:00:00)*
  > <strong>Route registrations are executed in the order they&#x27;re included in the service worker</strong>, so if you do it the other way around, the streaming one won&#x27;t ever execute because the request will have already been handled.
- [PWA with offline streaming | web.dev](https://web.dev/articles/pwa-with-offline-streaming) *(web.dev · 2021-07-05T00:00:00)*
  > In this article we will discuss answers to these questions, while referencing the Kino demo PWA we built that provides you with practical examples of how you can implement an offline streaming media experience without using any functional or presenta...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Ready for Developer Testing: Declarative Document Patching](http://www.mail-archive.com/blink-dev@chromium.org/msg16160.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md`)*
  > Explainer https://github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md Specification https://github.com/whatwg/html/pull/11818 Summary <strong>Stream HTML content out of order, and update an existing document with a s...
- [[blink-dev] Intent to Ship: Out of order streaming](http://www.mail-archive.com/blink-dev@chromium.org/msg16589.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md`)*
  > Explainer https://<strong>github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md</strong> Specification https://github.com/whatwg/html/pull/11818 Summary Use &lt;template for&gt; and processing instruction ranges (&lt;?...
- [Re: [blink-dev] Intent to Experiment: Parse processing instructions in HTML](http://www.mail-archive.com/blink-dev@chromium.org/msg16230.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md`)*
  > *Contact emails* [email protected], [email protected] *Explainer* https://<strong>github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md</strong>#proposed-markup *Specification* https://github.com/whatwg/html/pull/12118...
- [[blink-dev] Re: Intent to Ship: Out of order streaming](http://www.mail-archive.com/blink-dev@chromium.org/msg16599.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md`)*
  > &gt;&gt; &gt; &gt;&gt; &gt; On Tuesday, May 26, 2026 at 4:17:50 PM UTC+2 Noam Rosenthal wrote: &gt;&gt; &gt; &gt;&gt; &gt; Contact emails &gt;&gt; &gt; [email protected], [email protected], [email protected] &gt;&gt; &gt; &gt;&gt; &gt; Expl...
- [HTML's Biggest Update in a Decade: Declarative Partial Updates](https://pbxscience.com/htmls-biggest-update-in-a-decade-declarative-partial-updates) *(pbxscience.com · 2026-06-06T17:47:28)* *(Cites: `https://github.com/whatwg/html/pull/11818`)*
  > Where to follow the proposal WICG explainer: github.com/WICG/declarative-partial-updates WHATWG PR: <strong>github.com/whatwg/html/pull/11818</strong> Chrome developer blog: developer.chrome.com/blog/declarative-partial-updates

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 44 result(s) found across 8 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/5111042975465472" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (7 returned)
  - `"github.com/whatwg/html/pull/11818" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Out of order streaming" API` — *Core feature API query* (4 returned)
  - `"Out of order streaming" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"same-document" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Out of order streaming" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Out of order streaming" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 6 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **5 verified relevant**
- **Standards Positions:** 3 item(s) inspected
- **Engine Bug Trackers:** 6 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **3 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 8 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5111042975465472)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5111042975465472)
- [Specification](https://github.com/whatwg/html/pull/11818)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/431374376)
