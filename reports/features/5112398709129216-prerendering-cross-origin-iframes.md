# Prerendering cross-origin iframes

> **Report Week:** 2026-W39 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Prerenders cross-origin iframes with an opt-in response header.    Browsers will now prerender all cross-origin frames if the top-level frame's HTTP response includes the Supports-Loading-Mode: prerender-cross-origin-frames.

### Motivation

By default, navigational prerendering delays the loading of all cross-origin iframes until the referring page activates the prerendered page.

However, there are some cases where cross-origin iframes are particularly important to an application, such that delaying them negates many of the benefits of prerendering.

## Ecosystem Status

- **Momentum:** High (265 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chrome 155 enables 'Prerendering cross-origin iframes' by default, allowing top-level pages to opt into prerendering embedded cross-origin frames via the 'Supports-Loading-Mode: prerender-cross-origin-frames' HTTP header. This solves a major performance bottleneck for complex web applications relying on critical embedded subframes, though it remains a Chromium-driven incubation without multi-stakeholder consensus. While the specification is maintained in the WICG Nav Speculation repository, multi-engine interoperability is still pending.

### Recommendations
- Actionable Advice: Adopt the header as a progressive enhancement on pages where cross-origin iframe readiness is vital to Core Web Vitals and perceived UX. Ensure embedded cross-origin services inspect \`document.prerendering\` to delay disruptive analytics or heavy network calls until the top-level page activates.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (W3C TAG): Latest discussion from @yoichio: "Still in discussion, but we lean to allow the nesting with some restriction. Roughly: - Allow if the nested iframe's origin is same to parent frame - ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Prerendering cross-origin iframes](https://github.com/WebKit/standards-positions/issues/636) [open]
- **Mozilla:** [Prerendering cross-origin iframes](https://github.com/mozilla/standards-positions/issues/1376) [open]
- **W3C TAG:** [Incubation: Prerendering cross-origin iframes](https://github.com/w3ctag/design-reviews/issues/1207) [open]

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM) *(groups.google.com)*
  > Intent to Prototype: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Prerendering cross-origin ...
- [Intent to Experiment: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyGHPL8Z6IY) *(groups.google.com)*
  > Intent to Experiment: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Prerendering cross-origi...
- [\[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg16919.html) *(mail-archive.com)*
  > [blink-dev] Intent to Extend Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) [blink-dev] Intent to Extend Experiment: Prerendering cross-origin iframes Chromestatus Wed, 01 Jul 2026 22:54:06 -0700 Contact emails [e...
- [Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17240.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Extend Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) Re: [blink-dev] Intent to Extend Experiment: Prerendering cross-origin iframes Yoichi Osato Wed, 19 Aug 2026 21:34:04 -0700 Update on...
- [\[blink-dev\] Intent to Prototype: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg14520.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Prerendering cross-origin iframes Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Prerendering cross-origin iframes Chromestatus Mon, 01 Sep 2025 21:21:22 -0700 Contact emails [email&#160;protec...
- [\[blink-dev\] Intent to Experiment: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg16200.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Prerendering cross-origin iframes 'Yoichi Osato' via blink-dev Thu, 26 Mar 2026 23:04:56 -0700 Contact emails ...
- [\[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg16203.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: Prerendering cross-origin iframes Alex Russell Fri, 27 Mar 2026 12:21:25 -0700 An enthusiastic LGTM1 f...
- [Re: \[blink-dev\] Intent to Prototype: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg14530.html) *(mail-archive.com)*
  > On Tue, Sep 2, 2025 at 12:21 AM ... Specification https://wicg.github.io/nav-speculation/prerendering.html &gt; &gt; Summary &gt; &gt; <strong>Prerenders cross-origin iframes with an opt-in response header</strong>....
- [Intent to Prototype: Same-site cross-origin prerendering triggered by the speculation rules API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4E_UNp8mV_Y) *(groups.google.com · 2022-09-06T00:00:00)*
  > https://github.com/WICG/nav-speculation/blob/main/prerendering-same-site.md#more-details-on-cross-origin-same-site · https://github.com/WICG/nav-speculation/blob/main/opt-in.md · https://<strong>wicg.github.io/nav-speculation/prerendering.html</stron...
- [It's Time to Speculate - All About the code - Knut Haugen](https://blog.knuthaugen.no/web/2024/12/23/its-time-to-speculate.html) *(blog.knuthaugen.no · 2024-12-23T00:00:00)*
  > The rules can be either list rules which is simple list of urls to prerender/prefetch, or document rules with more sophisticated conditions (where clauses) matching on urls, selectors in the document and more. The full spec of the API is available at...
- [Intent to Ship: Same-site cross-origin prerendering triggered by the speculation rules API](https://groups.google.com/a/chromium.org/g/blink-dev/c/egYFQm_FsUY/m/b7c4yraPAQAJ) *(groups.google.com)*
  > https://github.com/WICG/nav-speculation/blob/main/prerendering-same-site.md#more-details-on-cross-origin-same-site · https://github.com/WICG/nav-speculation/blob/main/opt-in.md · https://<strong>wicg.github.io/nav-speculation/prerendering.html</stron...
- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM/m/q_EQ5ceXHgAJ) *(groups.google.com)*
  > Prerenders cross-origin iframes with an opt-in response header.
- [Prerendering cross-origin iframes \[440387014\]](https://issues.chromium.org/issues/440387014) *(issues.chromium.org)*
  > Sign in
- [Microsoft Edge 148 web platform release notes (May 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/148) *(learn.microsoft.com)*
  > <strong>This origin trial prerenders cross-origin iframes by using an opt-in response header</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/KP1f2UTqCgM) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Intent to Prototype: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Prerendering cro...
- [Prerendering cross-origin iframes · Issue #34 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/34) *(github.com · 2026-09-21T08:09:46)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Prerendering cross-origin iframes · Issue #34 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [Intent to Experiment: Prerendering cross-origin iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/CyGHPL8Z6IY) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5112398709129216`)*
  > Intent to Experiment: Prerendering cross-origin iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Prerendering c...
- [\[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg16919.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > [blink-dev] Intent to Extend Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) [blink-dev] Intent to Extend Experiment: Prerendering cross-origin iframes Chromestatus Wed, 01 Jul 2026 22:54:06 -0700 Contact...
- [Re: \[blink-dev\] Intent to Extend Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg17240.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > Re: [blink-dev] Intent to Extend Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) Re: [blink-dev] Intent to Extend Experiment: Prerendering cross-origin iframes Yoichi Osato Wed, 19 Aug 2026 21:34:04 -0700...
- [\[blink-dev\] Intent to Prototype: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg14520.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > [blink-dev] Intent to Prototype: Prerendering cross-origin iframes Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Prerendering cross-origin iframes Chromestatus Mon, 01 Sep 2025 21:21:22 -0700 Contact emails [email&#...
- [\[blink-dev\] Intent to Experiment: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg16200.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > [blink-dev] Intent to Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Prerendering cross-origin iframes 'Yoichi Osato' via blink-dev Thu, 26 Mar 2026 23:04:56 -0700 Conta...
- [\[blink-dev\] Re: Intent to Experiment: Prerendering cross-origin iframes](http://www.mail-archive.com/blink-dev@chromium.org/msg16203.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > [blink-dev] Re: Intent to Experiment: Prerendering cross-origin iframes Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: Prerendering cross-origin iframes Alex Russell Fri, 27 Mar 2026 12:21:25 -0700 An enthusiast...
- [Re: \[blink-dev\] Intent to Prototype: Prerendering cross-origin iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg14530.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md`)*
  > On Tue, Sep 2, 2025 at 12:21 AM ... Specification https://wicg.github.io/nav-speculation/prerendering.html &gt; &gt; Summary &gt; &gt; <strong>Prerenders cross-origin iframes with an opt-in response header</strong>....
- [Speculation Rules - Navigational prefetching and prerendering · Issue #620 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/620) *(github.com · 2022-03-16T01:30:37)* *(Cites: `https://wicg.github.io/nav-speculation/prerendering.html`)*
  > Specification or proposal URL: https://wicg.github.io/nav-speculation/speculation-rules.html , https://wicg.github.io/nav-speculation/prefetch.html , https://<strong>wicg.github.io/nav-speculation/prerendering.html</strong>
- [Add prerendering security and privacy considerations to the spec · Issue #319 · WICG/nav-speculation](https://github.com/WICG/nav-speculation/issues/319) *(github.com · 2024-05-21T20:22:13)* *(Cites: `https://wicg.github.io/nav-speculation/prerendering.html`)*
  > The prerendering spec currently doesn&#x27;t have sections for security and privacy considerations. https://<strong>wicg.github.io/nav-speculation/prerendering.html</strong> · Several explainer documents in this repo describe such considera...
- [Intent to Prototype: Same-site cross-origin prerendering triggered by the speculation rules API](https://groups.google.com/a/chromium.org/g/blink-dev/c/4E_UNp8mV_Y) *(groups.google.com · 2022-09-06T00:00:00)* *(Cites: `https://wicg.github.io/nav-speculation/prerendering.html`)*
  > https://github.com/WICG/nav-speculation/blob/main/prerendering-same-site.md#more-details-on-cross-origin-same-site · https://github.com/WICG/nav-speculation/blob/main/opt-in.md · https://<strong>wicg.github.io/nav-speculation/prerendering.h...
- [1969838 - \[meta\] Prerender2: Speculation rules - prerender](https://bugzilla.mozilla.org/show_bug.cgi?id=1969838) *(bugzilla.mozilla.org · 2025-06-03T01:27:32)* *(Cites: `https://wicg.github.io/nav-speculation/prerendering.html`)*
  > For bugs with HTML’s navigate algorithm and browsing contexts. ... This bug is publicly visible. ... The meta bug tracks implementation of prerender part of speculation rules API (See bug 1969396 for the prefetch part). https://<strong>wicg...
- [It's Time to Speculate - All About the code - Knut Haugen](https://blog.knuthaugen.no/web/2024/12/23/its-time-to-speculate.html) *(blog.knuthaugen.no · 2024-12-23T00:00:00)* *(Cites: `https://wicg.github.io/nav-speculation/prerendering.html`)*
  > The rules can be either list rules which is simple list of urls to prerender/prefetch, or document rules with more sophisticated conditions (where clauses) matching on urls, selectors in the document and more. The full spec of the API is av...
- [Intent to Ship: Same-site cross-origin prerendering triggered by the speculation rules API](https://groups.google.com/a/chromium.org/g/blink-dev/c/egYFQm_FsUY/m/b7c4yraPAQAJ) *(groups.google.com)* *(Cites: `https://wicg.github.io/nav-speculation/prerendering.html`)*
  > https://github.com/WICG/nav-speculation/blob/main/prerendering-same-site.md#more-details-on-cross-origin-same-site · https://github.com/WICG/nav-speculation/blob/main/opt-in.md · https://<strong>wicg.github.io/nav-speculation/prerendering.h...
- [Prerendering cross-origin iframes · Issue #1376 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1376) *(github.com · 2026-03-23T06:14:57)* *(Cites: `https://wicg.github.io/nav-speculation/prerendering.html`)*
  > Specification title Prerendering cross-origin iframes Specification or proposal URL (if available) https://<strong>wicg.github.io/nav-speculation/prerendering.html</strong> Explainer URL (if available) https://github.com/WICG/nav-speculatio...
- [Prerendering cross-origin iframes · Issue #636 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/636) *(github.com · 2026-03-23T06:19:35)* *(Cites: `https://wicg.github.io/nav-speculation/prerendering.html`)*
  > WebKittens No response Title of the proposal Prerendering cross-origin iframes URL to the spec https://<strong>wicg.github.io/nav-speculation/prerendering.html</strong> URL to the spec&#x27;s repository https://gith...

## 📚 Platform Documentation & Specifications

- [Prerendering cross-origin iframes · Issue #34 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/34) *(github.com)*
- [Speculation Rules - Navigational prefetching and prerendering · Issue #620 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/620) *(github.com)*
- [Add prerendering security and privacy considerations to the spec · Issue #319 · WICG/nav-speculation](https://github.com/WICG/nav-speculation/issues/319) *(github.com)*
- [1969838 - \[meta\] Prerender2: Speculation rules - prerender](https://bugzilla.mozilla.org/show_bug.cgi?id=1969838) *(bugzilla.mozilla.org)*
- [Prerendering cross-origin iframes · Issue #1376 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1376) *(github.com)*
- [Prerendering cross-origin iframes · Issue #636 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/636) *(github.com)*
- [Prerendering cross-origin iframes · Issue #1474 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1474) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/148.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/148.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 48 result(s) found across 8 planned queries — **22 verified relevant**
  - `"chromestatus.com/feature/5112398709129216" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/WICG/nav-speculation/blob/main/prerendering-cross-origin-iframes.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"wicg.github.io/nav-speculation/prerendering.html" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Prerendering cross-origin iframes" API` — *Core feature API query* (8 returned)
  - `"Prerendering cross-origin iframes" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"cross-origin" OR "opt-in" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Prerendering cross-origin iframes" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Prerendering cross-origin iframes" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 2 item(s) inspected

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
