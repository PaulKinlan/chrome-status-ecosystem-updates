# Prerendering cross-origin iframes

> **Report Week:** 2026-W45 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Prerenders cross-origin iframes with an opt-in response header.    Browsers will now prerender all cross-origin frames if the top-level frame's HTTP response includes the Supports-Loading-Mode: prerender-cross-origin-frames.

### Motivation

By default, navigational prerendering delays the loading of all cross-origin iframes until the referring page activates the prerendered page.  However, there are some cases where cross-origin iframes are particularly important to an application, such that delaying them negates many of the benefits of prerendering.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 265 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Prerendering cross-origin iframes extends the Speculation Rules API by permitting top-level documents to opt in via the 'Supports-Loading-Mode: prerender-cross-origin-frames' HTTP response header. Chrome enabled this capability by default in version 158 to resolve load-time bottlenecks for iframe-dependent web applications. While Chromium actively drives the specification alongside W3C TAG early review, non-Chromium browser vendors have not yet adopted or implemented this opt-in mechanism.

### Recommendations
- Actionable Advice: Treat cross-origin iframe prerendering as an opt-in progressive enhancement by serving the 'Supports-Loading-Mode: prerender-cross-origin-frames' HTTP header on target documents where iframe content is essential to the immediate user experience. Ensure embedded iframe scripts defer analytics or side-effects until the 'prerenderingchange' event fires, and rely on browser fallbacks for non-supporting engines.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (W3C TAG): Latest discussion from @yoichio: "Still in discussion, but we lean to allow the nesting with some restriction. Roughly: - Allow if the nested iframe's origin is same to parent frame - ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Prerendering cross-origin iframes](https://github.com/WebKit/standards-positions/issues/636) [open]
- **Mozilla:** [Prerendering cross-origin iframes](https://github.com/mozilla/standards-positions/issues/1376) [open]
- **W3C TAG:** [Incubation: Prerendering cross-origin iframes](https://github.com/w3ctag/design-reviews/issues/1207) [closed]

## Web-features Group

*group-level data: web-features [`speculation-rules`](https://webstatus.dev/features/speculation-rules), shared with 15 other ChromeStatus features*

- Share of tests passing in the web-features group `speculation-rules` on [wpt.fyi](https://wpt.fyi/results?q=feature:speculation-rules) (via webstatus.dev) — stable: Chrome 72.3% · Edge 93.5% · Firefox 0% · Safari 13.6%; experimental: Chrome 75.5% · Edge 94.1% · Firefox 26.8% · Safari 27%
- **Chrome usage:** 0.12% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/317))
- **Mozilla:** neutral ([standards position](https://github.com/mozilla/standards-positions/issues/620)) · concerns: `complexity`

## 📰 Ecosystem Blogs & Articles

- [Supports-Loading-Mode - Expert Guide to HTTP headers](https://http.dev/supports-loading-mode) *(http.dev)*
  > By default, navigational speculative loading via the \*\*Speculation Rules API\*\* delays loading and executing all cross-origin \`&lt;iframe&gt;\`s until the user actually navigates to and activates the prerendered top-level page However, many modern applicatio...
- [chromestatus.com](https://chromestatus.com/feature/5112398709129216?gate=5147046579404800) *(chromestatus.com)*
  > \*\*Developer Workflow & DevTools\*\*: Google modern web guidance notes that prerendered cross-origin iframes are exposed to Chrome DevTools to enable developers to inspect speculative loading bottlenecks and ensure iframe scripts adhere to prerender-saf...
- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM) *(groups.google.com)*
  > Intent to Prototype: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Prerendering cross-origin ...
- [Intent to Experiment: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyGHPL8Z6IY) *(groups.google.com)*
  > Intent to Experiment: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Prerendering cross-origi...
- [Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17867.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Mike Taylor Tue, 27 Oct 2026 16:35:53 -0700 LGTM2 On 10/27/26 6:51 p.m.,...
- [\[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg16203.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes Alex Russell Fri, 27 Mar 2026 12:21:25 -0700 An enthusiastic LGTM1 f...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17858.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Alex Russell Tue, 27 Oct 2026 11:52:13 -0700 Thanks for the data. It's exciting ...
- [\[blink-dev\] Intent to Experiment: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg16200.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Prerendering cross-origin iframes 'Yoichi Osato' via blink-dev Thu, 26 Mar 2026 23:04:56 -0700 Contact emails ...
- [Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17240.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Yoichi Osato Wed, 19 Aug 2026 21:34:04 -0700 Update on...
- [\[blink-dev\] Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17737.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Prerendering cross-origin iframes Chromestatus Wed, 14 Oct 2026 23:30:31 -0700 Contact emails \[email&#160;protected\] Expla...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17843.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; &gt;&gt; \*Debuggability\* &gt;&gt; The cross-origin iframe prerendering should be debuggable as well as top &gt;&gt; frame&#x27;s one: &gt;&gt; https://developer.chrome.com/docs/devtools/application/debugging-speculation-rules#preren...
- [Microsoft Edge 148 web platform release notes (May 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/148) *(learn.microsoft.com · 2026-05-07T00:00:00)*
  > &lt;strong&gt;This origin trial prerenders cross-origin iframes by using an opt-in response header&lt;/strong&gt;.
- [\[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg16919.html) *(mail-archive.com)*
  > Explainer https://github.com/W... iframes with an opt-in response header. &lt;strong&gt;Browsers will now prerender all cross-origin frames if the top-level frame&#x27;s HTTP response includes the Supports-Loading-Mode: prerender-cross-origin-frames&lt;/stron...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17819.html) *(mail-archive.com)*
  > &gt; &gt; &gt; \*Debuggability\* &gt; The cross-origin iframe prerendering should be debuggable as well as top &gt; frame&#x27;s one: &gt; https://developer.chrome.com/docs/devtools/application/debugging-speculation-rules#prerender &gt; &gt; &gt; \*Will...
- [\[blink-dev\] Intent to Prototype: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg14520.html) *(mail-archive.com)*
  > False Estimated milestones No milestones specified Link to entry on the Chrome Platform Status https://chromestatus.com/feature/5112398709129216?gate=5179872041369600 This intent message was generated by Chrome Platform Status. -- You received this m...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Intent to Prototype: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Prerendering cro...
- [Intent to Experiment: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyGHPL8Z6IY) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Intent to Experiment: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Prerendering c...
- [Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17867.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Mike Taylor Tue, 27 Oct 2026 16:35:53 -0700 LGTM2 On 10/27/26 ...
- [\[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg16203.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > \[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes Alex Russell Fri, 27 Mar 2026 12:21:25 -0700 An enthusiast...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17858.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Alex Russell Tue, 27 Oct 2026 11:52:13 -0700 Thanks for the data. It's...
- [\[blink-dev\] Intent to Experiment: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg16200.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > \[blink-dev\] Intent to Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Prerendering cross-origin iframes 'Yoichi Osato' via blink-dev Thu, 26 Mar 2026 23:04:56 -0700 Conta...
- [Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17240.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Yoichi Osato Wed, 19 Aug 2026 21:34:04 -0700...
- [\[blink-dev\] Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17737.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > \[blink-dev\] Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Prerendering cross-origin iframes Chromestatus Wed, 14 Oct 2026 23:30:31 -0700 Contact emails \[email&#160;protec...
- [Incubation: Prerendering cross-origin iframes · Issue #1207 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1207) *(github.com · 2026-03-23T06:12:18)* *(Cites: `https://wicg.github.io/nav-speculation/prerendering.html`)*
  > GitHub repo: https://&lt;strong&gt;wicg.github.io/nav-speculation/prerendering.html&lt;/strong&gt; · Primary contacts: Yoichi Osato (@yoichio), Google · Hiroki Nakagawa (@nhiroki), Google · Organization/project driving the design: Google · This work is...

## 📚 Platform Documentation & Specifications

- [Prerendering cross-origin iframes · Issue #1376 · mozilla/standards-positions · GitHub](https://github.com/mozilla/standards-positions/issues/1376) *(github.com)*
- [Prerendering cross-origin iframes · Issue #636 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/636) *(github.com)*
- [Prerendering cross-origin iframes · Issue #1474 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1474) *(github.com)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Supports-Loading-Mode) *(developer.mozilla.org)*
- [github.com](https://github.com/mdn/content/blob/main/files/en-us/web/http/reference/headers/supports-loading-mode/index.md?plain=1) *(github.com)*
- [Incubation: Prerendering cross-origin iframes · Issue #1207 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1207) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/148.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/148.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 64 result(s) found across 12 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/5112398709129216" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"wicg.github.io/nav-speculation/prerendering.html" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Prerendering cross-origin iframes" API` — *Core feature API query* (8 returned)
  - `"Prerendering cross-origin iframes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"cross-origin" OR "opt-in" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Prerendering cross-origin iframes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Prerendering cross-origin iframes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Supports-Loading-Mode" "prerender-cross-origin-frames" (tutorial OR guide OR "web.dev")` — *Finds developer tutorials, performance guides, and web.dev articles explaining how to enable prerendering for cross-origin iframes.* (8 returned)
  - `"Supports-Loading-Mode: prerender-cross-origin-frames" ("speculationrules" OR "<script type=\"speculationrules\">")` — *Identifies real-world HTTP header and speculation rules script configuration examples implementing cross-origin frame prerendering.* (8 returned)
  - `"prerender-cross-origin-frames" ("Intent to Ship" OR "Chrome Platform Status" OR "Chromium")` — *Discovers browser implementation status, release notes, and official intent-to-ship threads across Chromium and other browser engines.* (8 returned)
  - `"prerender-cross-origin-frames" (site:github.com/WICG OR site:issues.chromium.org OR site:groups.google.com/a/chromium.org)` — *Surfaces community and standards discussions, spec feedback, and Chromium issue tracker threads regarding security and performance trade-offs.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "speculation-rules", shared with 15 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "speculation-rules": Chrome 72.3% passing (stable)*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5112398709129216)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5112398709129216)
- [Specification](https://wicg.github.io/nav-speculation/prerendering.html)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/440387014)
