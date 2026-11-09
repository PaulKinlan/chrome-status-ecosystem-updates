# Prerendering cross-origin iframes

> **Report Week:** 2026-W46 | **Milestone:** Chrome 159 | **Category:** Enabled by default

## Overview

Prerenders cross-origin iframes with an opt-in response header.    Browsers will now prerender all cross-origin frames if the top-level frame's HTTP response includes the Supports-Loading-Mode: prerender-cross-origin-frames.

### Motivation

By default, navigational prerendering delays the loading of all cross-origin iframes until the referring page activates the prerendered page.  However, there are some cases where cross-origin iframes are particularly important to an application, such that delaying them negates many of the benefits of prerendering.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 285 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Prerendering Cross-Origin Iframes capability allows top-level pages to opt into speculative loading of cross-origin subframes during prerender via the 'Supports-Loading-Mode: prerender-cross-origin-frames' HTTP response header. It solves a noticeable performance gap in the Speculation Rules prerendering pipeline where delayed loading of essential embedded content—such as payment forms, maps, or interactive widgets—undermined the perceived instantaneous navigation. While Chromium-based browsers have driven its development and rollout, broader cross-engine consensus remains pending.

### Recommendations
- Actionable Advice: Teams already adopting the Speculation Rules API should treat this header as a safe, low-risk progressive enhancement: emit 'Supports-Loading-Mode: prerender-cross-origin-frames' on responses where essential third-party embeds must be interactive at activation. Unsupported browsers and devices experiencing battery or data constraints will gracefully ignore or defer the frame loads without regressions.
- Shipping enabled by default in Chrome 159. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (W3C TAG): Latest discussion from @yoichio: "Still in discussion, but we lean to allow the nesting with some restriction. Roughly: - Allow if the nested iframe's origin is same to parent frame - ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Prerendering cross-origin iframes](https://github.com/WebKit/standards-positions/issues/636) [open]
- **Mozilla:** [Prerendering cross-origin iframes](https://github.com/mozilla/standards-positions/issues/1376) [open]
- **W3C TAG:** [Incubation: Prerendering cross-origin iframes](https://github.com/w3ctag/design-reviews/issues/1207) [closed]

## Web-features Group

*group-level data: web-features [`speculation-rules`](https://webstatus.dev/features/speculation-rules), shared with 15 other ChromeStatus features*

- Share of tests passing in the web-features group `speculation-rules` on [wpt.fyi](https://wpt.fyi/results?q=feature:speculation-rules) (via webstatus.dev) — stable: Chrome 76.4% · Edge 93.3% · Firefox 0% · Safari 13.6%; experimental: Chrome 76.2% · Edge 93.9% · Firefox 32.2% · Safari 27.2%
- **Chrome usage:** 0.13% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/317))
- **Mozilla:** neutral ([standards position](https://github.com/mozilla/standards-positions/issues/620)) · concerns: `complexity`

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/release-notes/147) *(developer.chrome.com)*
  > \*\*Sources:\*\* \*Chrome Platform Status\*, \*Chrome 147 Release Notes\*, and \*Chromium Issue #440387014\* (authored by Yoichi Osato and Hiroki Nakagawa) The release notes emphasize that the header gives site owners fine-grained control: if an iframe is crit...
- [Supports-Loading-Mode - Expert Guide to HTTP headers](https://http.dev/supports-loading-mode) *(http.dev)*
  > MDN documents \`Supports-Loading-Mode\` as an HTTP response header that uses Structured Fields token lists to let servers opt into higher-risk or novel browsing environments (such as \`fenced-frame\` and \`credentialed-prerender\`) With \`prerender-cross-or...
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/2f16ed2883fde6320c3e8c5631c26f82b8cecb28) *(chromium.googlesource.com)*
  > \*\*Nested Subframe Consensus:\*\* In the W3C TAG discussion and Chromium commit reviews (\`kPrerender2CrossOriginIframesNesting\`), an important design boundary was established: \*\*inheritance is not automatic down deep trees\*\* A deeply nested cross-origin...
- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM/m/q_EQ5ceXHgAJ) *(groups.google.com)*
  > Intent to Prototype: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Prerendering cross-origin ...
- [Intent to Experiment: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyGHPL8Z6IY) *(groups.google.com)*
  > Intent to Experiment: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Prerendering cross-origi...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17949.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Yoichi Osato Thu, 05 Nov 2026 19:40:17 -0800 FYI: Due to some additional impleme...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17843.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Yoichi Osato Wed, 21 Oct 2026 18:53:10 -0700 &gt; This Intent mentions an OT; was t...
- [Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17867.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Mike Taylor Tue, 27 Oct 2026 16:35:53 -0700 LGTM2 On 10/27/26 6:51 p.m.,...
- [Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17871.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Chris Harrelson Tue, 27 Oct 2026 22:15:53 -0700 LGTM3 On Tue, Oct 27, 20...
- [Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg16921.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Rick Byers Thu, 02 Jul 2026 12:51:30 -0700 LGTM to ext...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17858.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; Thanks, &gt;&gt; &gt;&gt; Alex &gt;&gt; &gt;&gt; ... &gt;&gt;&gt; https://wicg.github.io/nav-speculation/prerendering.html &gt;&gt;&gt; &gt;&gt;&gt; \*Summary\* &gt;&gt;&gt; &lt;strong&gt;Prerenders cross-origin iframes with an opt-in respo...
- [\[blink-dev\] Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17737.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md Specification https://wicg.github.io/nav-speculation/prerendering.html Summary &lt;strong&gt;Prerenders cross-origin iframes with an opt-in response header&lt;/st...
- [\[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg16203.html) *(mail-archive.com)*
  > On Thursday, March 26, 2026 at ... Specification &gt; &gt; https://wicg.github.io/nav-speculation/prerendering.html &gt; &gt; Summary &gt; &gt; &lt;strong&gt;Prerenders cross-origin iframes with an opt-in response header&lt;/strong&gt;....
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17879.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Thanks, &gt;&gt;&gt; &gt;&gt;&gt; Alex &gt;&gt;&gt; ... &gt;&gt;&gt;&gt; https://wicg.github.io/nav-speculation/prerendering.html &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Summary\* &gt;&gt;&gt;&gt; &lt;strong&gt;Prerenders cross-origin i...
- [Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17240.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; \*Other signals\*: &gt;&gt; &gt;&gt; \*WebView application risks\* &gt;&gt; &gt;&gt; Does this intent deprecate or change behavior of existing APIs, such that &gt;&gt; it has potentially high risk for Android WebView-based applications?...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17819.html) *(mail-archive.com)*
  > &gt; &gt; &gt; \*Debuggability\* &gt; The cross-origin iframe prerendering should be debuggable as well as top &gt; frame&#x27;s one: &gt; https://developer.chrome.com/docs/devtools/application/debugging-speculation-rules#prerender &gt; &gt; &gt; \*Will...
- [\[blink-dev\] Intent to Experiment: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg16200.html) *(mail-archive.com)*
  > Explainer https://github.com/W... iframes with an opt-in response header. &lt;strong&gt;Browsers will now prerender all cross-origin frames if the top-level frame&#x27;s HTTP response includes the Supports-Loading-Mode: prerender-cross-origin-frames&lt;/stron...
- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM) *(groups.google.com)*
  > The cross-origin iframe prerendering ... as top frame&#x27;s one: https://developer.chrome.com/docs/devtools/application/debugging-speculation-rules#prerender ... This intent message was generated by Chrome Platform Status. ... Either email addresses...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM/m/q_EQ5ceXHgAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Intent to Prototype: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Prerendering cro...
- [Intent to Experiment: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyGHPL8Z6IY) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Intent to Experiment: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Prerendering c...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17949.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Yoichi Osato Thu, 05 Nov 2026 19:40:17 -0800 FYI: Due to some addition...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17843.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Yoichi Osato Wed, 21 Oct 2026 18:53:10 -0700 &gt; This Intent mentions an...
- [Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17867.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Mike Taylor Tue, 27 Oct 2026 16:35:53 -0700 LGTM2 On 10/27/26 ...
- [Prerendering cross-origin iframes · Issue #34 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/34) *(github.com · 2026-09-21T08:09:46)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Prerendering cross-origin iframes · Issue #34 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your s...
- [Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17871.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Chris Harrelson Tue, 27 Oct 2026 22:15:53 -0700 LGTM3 On Tue, ...
- [Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg16921.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Rick Byers Thu, 02 Jul 2026 12:51:30 -0700 L...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17858.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > &gt;&gt; &gt;&gt; Thanks, &gt;&gt; &gt;&gt; Alex &gt;&gt; &gt;&gt; ... &gt;&gt;&gt; https://wicg.github.io/nav-speculation/prerendering.html &gt;&gt;&gt; &gt;&gt;&gt; \*Summary\* &gt;&gt;&gt; &lt;strong&gt;Prerenders cross-origin iframes with an op...
- [\[blink-dev\] Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17737.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > Explainer https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md Specification https://wicg.github.io/nav-speculation/prerendering.html Summary &lt;strong&gt;Prerenders cross-origin iframes with an opt-in response ...
- [\[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg16203.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > On Thursday, March 26, 2026 at ... Specification &gt; &gt; https://wicg.github.io/nav-speculation/prerendering.html &gt; &gt; Summary &gt; &gt; &lt;strong&gt;Prerenders cross-origin iframes with an opt-in response header&lt;/strong&gt;....
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17879.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Thanks, &gt;&gt;&gt; &gt;&gt;&gt; Alex &gt;&gt;&gt; ... &gt;&gt;&gt;&gt; https://wicg.github.io/nav-speculation/prerendering.html &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Summary\* &gt;&gt;&gt;&gt; &lt;strong&gt;Prerenders cros...
- [Incubation: Prerendering cross-origin iframes · Issue #1207 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1207) *(github.com · 2026-03-23T06:12:18)* *(Cites: `https://wicg.github.io/nav-speculation/prerendering.html`)*
  > GitHub repo: https://&lt;strong&gt;wicg.github.io/nav-speculation/prerendering.html&lt;/strong&gt; · Primary contacts: Yoichi Osato (@yoichio), Google · Hiroki Nakagawa (@nhiroki), Google · Organization/project driving the design: Google · This work is...

## 📚 Platform Documentation & Specifications

- [w3.org](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1207) *(tag-github-bot.w3.org)*
- [github.com](https://github.com/WebKit/standards-positions/issues/636) *(github.com)*
- [github.com](https://github.com/mozilla/standards-positions/issues/1376) *(github.com)*
- [Prerendering cross-origin iframes · Issue #34 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/34) *(github.com)*
- [Incubation: Prerendering cross-origin iframes · Issue #1207 · w3ctag/design-reviews · GitHub](https://github.com/w3ctag/design-reviews/issues/1207) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/148.md at main · MicrosoftDocs/edge-developer · GitHub](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/148.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 64 result(s) found across 12 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/5112398709129216" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"wicg.github.io/nav-speculation/prerendering.html" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Prerendering cross-origin iframes" API` — *Core feature API query* (8 returned)
  - `"Prerendering cross-origin iframes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"cross-origin" OR "opt-in" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Prerendering cross-origin iframes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Prerendering cross-origin iframes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"Supports-Loading-Mode" "prerender-cross-origin-frames" (guide OR tutorial OR "how to")` — *Discovers web development tutorials and implementation guides explaining how to enable cross-origin iframe prerendering using the Supports-Loading-Mode header.* (8 returned)
  - `"Supports-Loading-Mode: prerender-cross-origin-frames" OR ("prerender-cross-origin-frames" "speculationrules")` — *Locates technical code snippets and configuration examples combining the speculationrules script type with the required HTTP response header.* (8 returned)
  - `"prerender-cross-origin-frames" ("Intent to Ship" OR "Chrome Platform Status" OR "Chromium")` — *Tracks browser vendor release notes, Intent to Ship threads, and implementation status across Chromium-based browsers.* (8 returned)
  - `"prerender-cross-origin-frames" (site:github.com/WICG OR site:issues.chromium.org OR site:news.ycombinator.com)` — *Finds developer feedback, security/privacy debates, and issue tracker conversations surrounding navigational prerendering of third-party frames.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "speculation-rules", shared with 15 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "speculation-rules": Chrome 76.4% passing (stable)*

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
