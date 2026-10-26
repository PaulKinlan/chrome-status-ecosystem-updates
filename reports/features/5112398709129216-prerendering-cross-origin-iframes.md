# Prerendering cross-origin iframes

> **Report Week:** 2026-W44 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Prerenders cross-origin iframes with an opt-in response header.    Browsers will now prerender all cross-origin frames if the top-level frame's HTTP response includes the Supports-Loading-Mode: prerender-cross-origin-frames.

### Motivation

By default, navigational prerendering delays the loading of all cross-origin iframes until the referring page activates the prerendered page.  However, there are some cases where cross-origin iframes are particularly important to an application, such that delaying them negates many of the benefits of prerendering.

## Ecosystem Status

- **Momentum:** Moderate (footprint 285 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Prerendering cross-origin iframes via the HTTP header 'Supports-Loading-Mode: prerender-cross-origin-frames' addresses a long-standing performance bottleneck where critical embedded third-party widgets were deferred until activation during speculative prerendering. While Chromium has pushed the feature forward to general availability, broader ecosystem support remains limited, with the WICG specification still lacking multi-stakeholder engine commitment. Developers value the ability to achieve truly instantaneous transitions on iframe-heavy pages, but the feature is currently confined to the Chromium ecosystem.

### Recommendations
- Actionable Advice: Teams maintaining critical, above-the-fold cross-origin iframe content can safely adopt 'Supports-Loading-Mode: prerender-cross-origin-frames' as a low-risk progressive enhancement on top of the Speculation Rules API. Because browsers without support or devices under resource constraints will cleanly fall back to deferring iframes until navigation activation, there is zero risk of breaking standard browsing behavior.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (W3C TAG): Latest discussion from @yoichio: "Still in discussion, but we lean to allow the nesting with some restriction. Roughly: - Allow if the nested iframe's origin is same to parent frame - ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Prerendering cross-origin iframes](https://github.com/WebKit/standards-positions/issues/636) [open]
- **Mozilla:** [Prerendering cross-origin iframes](https://github.com/mozilla/standards-positions/issues/1376) [open]
- **W3C TAG:** [Incubation: Prerendering cross-origin iframes](https://github.com/w3ctag/design-reviews/issues/1207) [closed]

## Web-features Group

*group-level data: web-features [`speculation-rules`](https://webstatus.dev/features/speculation-rules), shared with 15 other ChromeStatus features*

- Share of tests passing in the web-features group `speculation-rules` on [wpt.fyi](https://wpt.fyi/results?q=feature:speculation-rules) (via webstatus.dev) — stable: Chrome 71.9% · Edge 93.2% · Firefox 0% · Safari 13.3%; experimental: Chrome 75.3% · Edge 94.3% · Firefox 26.4% · Safari 26.6%
- **Chrome usage:** 0.12% of page loads ([use counter](https://chromestatus.com/metrics/webfeature/timeline/popularity/317))
- **Mozilla:** neutral ([standards position](https://github.com/mozilla/standards-positions/issues/620)) · concerns: `complexity`

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/docs/web-platform/prerender-pages) *(developer.chrome.com)*
  > By default, navigational prerendering in modern browsers (via the \*\*Speculation Rules API\*\*) halts the execution and loading of cross-origin \`&lt;iframe&gt;\`s until the user actually activates (navigates to) the prerendered page This delay protects against...
- [chromestatus.com](https://chromestatus.com/feature/5112398709129216?gate=5147046579404800) *(chromestatus.com)*
  > When this HTTP response header is served by the top-level document, the browser is authorized to prerender all embedded cross-origin iframes in advance \*\*Source:\*\* \[Chrome Platform Status\](https://chromestatus.com/feature/5194411649990656) / Chromium...
- [chrome.com](https://developer.chrome.com/release-notes/147) *(developer.chrome.com)*
  > Chromium added developer controls (via \`chrome://flags#prerender2-cross-origin-iframes\`) and scheduled an Origin Trial phase starting around Chrome 147 before broader rollout Follow-up updates and release notes showcase \`Supports-Loading-Mode\` extens...
- [microsoft.com](https://learn.microsoft.com/ga-ie/microsoft-edge/web-platform/release-notes/155) *(learn.microsoft.com)*
  > \*\*Chromium & Edge:\*\* Shipped in tandem across Chromium-based browsers (including Microsoft Edge release notes) to give web applications with decoupled micro-frontend or embedded-frame architectures the ability to achieve instant, transition-free page...
- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM) *(groups.google.com)*
  > Intent to Prototype: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Prerendering cross-origin ...
- [Intent to Experiment: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyGHPL8Z6IY) *(groups.google.com)*
  > Intent to Experiment: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Prerendering cross-origi...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17819.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Alex Russell Wed, 21 Oct 2026 08:25:12 -0700 Do we have a sense for which sorts ...
- [\[blink-dev\] Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17737.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Prerendering cross-origin iframes Chromestatus Wed, 14 Oct 2026 23:30:31 -0700 Contact emails \[email&#160;protected\] Expla...
- [\[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg16919.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Chromestatus Wed, 01 Jul 2026 22:54:06 -0700 Contact emails \[e...
- [\[blink-dev\] Intent to Prototype: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg14520.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Prerendering cross-origin iframes Chromestatus Mon, 01 Sep 2025 21:21:22 -0700 Contact emails \[email&#160;protec...
- [Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17240.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Yoichi Osato Wed, 19 Aug 2026 21:34:04 -0700 Update on...
- [\[blink-dev\] Intent to Experiment: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg16200.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Prerendering cross-origin iframes 'Yoichi Osato' via blink-dev Thu, 26 Mar 2026 23:04:56 -0700 Contact emails ...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17843.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; &gt;&gt; \*Debuggability\* &gt;&gt; The cross-origin iframe prerendering should be debuggable as well as top &gt;&gt; frame&#x27;s one: &gt;&gt; https://developer.chrome.com/docs/devtools/application/debugging-speculation-rules#preren...
- [Microsoft Edge 148 web platform release notes (May 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/148) *(learn.microsoft.com · 2026-05-07T00:00:00)*
  > &lt;strong&gt;This origin trial prerenders cross-origin iframes by using an opt-in response header&lt;/strong&gt;.
- [Supports-Loading-Mode - Expert Guide to HTTP headers](https://http.dev/supports-loading-mode) *(http.dev · 2026-08-11T12:00:00)*
  > &lt;strong&gt;The prerender-cross-origin-frames token allows cross-origin iframes inside a prerendered page to load during the prerender&lt;/strong&gt;. Without this opt-in, the browser defers cross-origin iframe loading until the user activates the prerendered ...
- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM/m/q_EQ5ceXHgAJ) *(groups.google.com)*
  > &lt;strong&gt;Prerenders cross-origin iframes with an opt-in response header&lt;/strong&gt;. Browsers will now prerender all cross-origin frames if the top-level frame&#x27;s HTTP response includes the Supports-Loading-Mode: prerender-cross-origin-frames.
- [Chrome Platform Status](https://img968-dot-cr-status.appspot.com/feature/5112398709129216) *(img968-dot-cr-status.appspot.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Intent to Prototype: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Prerendering cro...
- [Intent to Experiment: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyGHPL8Z6IY) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Intent to Experiment: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Prerendering c...
- [\[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17819.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Prerendering cross-origin iframes Alex Russell Wed, 21 Oct 2026 08:25:12 -0700 Do we have a sense for wh...
- [\[blink-dev\] Intent to Ship: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17737.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > \[blink-dev\] Intent to Ship: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Prerendering cross-origin iframes Chromestatus Wed, 14 Oct 2026 23:30:31 -0700 Contact emails \[email&#160;protec...
- [\[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg16919.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Chromestatus Wed, 01 Jul 2026 22:54:06 -0700 Contact...
- [\[blink-dev\] Intent to Prototype: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg14520.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > \[blink-dev\] Intent to Prototype: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Prerendering cross-origin iframes Chromestatus Mon, 01 Sep 2025 21:21:22 -0700 Contact emails \[email&#...
- [Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17240.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes Yoichi Osato Wed, 19 Aug 2026 21:34:04 -0700...
- [\[blink-dev\] Intent to Experiment: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg16200.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > \[blink-dev\] Intent to Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Prerendering cross-origin iframes 'Yoichi Osato' via blink-dev Thu, 26 Mar 2026 23:04:56 -0700 Conta...
- [Incubation: Prerendering cross-origin iframes · Issue #1207 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1207) *(github.com · 2026-03-23T06:12:18)* *(Cites: `https://wicg.github.io/nav-speculation/prerendering.html`)*
  > GitHub repo: https://&lt;strong&gt;wicg.github.io/nav-speculation/prerendering.html&lt;/strong&gt; · Primary contacts: Yoichi Osato (@yoichio), Google · Hiroki Nakagawa (@nhiroki), Google · Organization/project driving the design: Google · This work is...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/WICG/nav-speculation/issues/434) *(github.com)*
- [w3.org](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1207) *(tag-github-bot.w3.org)*
- [Prerendering cross-origin iframes · Issue #636 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/636) *(github.com)*
- [Prerendering cross-origin iframes · Issue #1376 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1376) *(github.com)*
- [Incubation: Prerendering cross-origin iframes · Issue #1207 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1207) *(github.com)*
- [Prerendering cross-origin iframes · Issue #1474 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1474) *(github.com)*
- [GitHub - victorhuangwq/prerender-test · GitHub](https://github.com/victorhuangwq/prerender-test) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 12 planned queries — **17 verified relevant**
  - `"chromestatus.com/feature/5112398709129216" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"wicg.github.io/nav-speculation/prerendering.html" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Prerendering cross-origin iframes" API` — *Core feature API query* (8 returned)
  - `"Prerendering cross-origin iframes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"cross-origin" OR "opt-in" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Prerendering cross-origin iframes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Prerendering cross-origin iframes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"Supports-Loading-Mode" "prerender-cross-origin-frames" (tutorial OR guide OR "how to")` — *Searches for developer guides, blog posts, and tutorials explaining how to opt into prerendering cross-origin iframes.* (8 returned)
  - `"Supports-Loading-Mode: prerender-cross-origin-frames" "speculationrules"` — *Finds technical implementation examples pairing the Speculation Rules API syntax with the required HTTP response header.* (0 returned)
  - `"prerender-cross-origin-frames" ("intent to ship" OR "intent to prototype" OR Chrome)` — *Tracks browser adoption announcements, feature release notes, and Blink/Chrome intent threads.* (4 returned)
  - `"prerender-cross-origin-frames" (site:github.com OR site:news.ycombinator.com OR site:reddit.com)` — *Captures developer sentiment, edge-case discussions, and feedback across standards issues and developer forums.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *group "speculation-rules", shared with 15 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "speculation-rules": Chrome 71.9% passing (stable)*
- **Sources cited by the AI synthesis:** 4 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5112398709129216)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5112398709129216)
- [Specification](https://wicg.github.io/nav-speculation/prerendering.html)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/440387014)
