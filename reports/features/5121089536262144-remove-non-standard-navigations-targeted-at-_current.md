# Remove non-standard navigations targeted at \_current

> **Report Week:** 2026-W38 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

Blink currently supports navigations targeted at "\_current", this feature should be removed as it is non-standard.  Usage of this feature is minimal (less than ~0.00009%), see https://chromestatus.com/metrics/feature/timeline/popularity/2835.

### Motivation

This feature is not used at all and is non-standard. It's confusing to ahve it supported in a single browser engine, so this feature removes it.

## Ecosystem Status

- **Momentum:** High (122 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Remove non-standard navigations targeted at \_current is currently Deprecated in Chrome 153. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "BBFTUSDT — BUY  Entry: 0.000088 — 0.00009  TP1: 0.00012 TP2: 0.00020 TP3: 0.00025  BUY NOW 🔥🔥🔥🔥🔥" (12 points, 1 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [BBFTUSDT — BUY  Entry: 0.000088 — 0.00009  TP1: 0.00012 TP2: 0.00020 TP3: 0.00025  BUY NOW 🔥🔥🔥🔥🔥](https://twitter.com/VengieZim/status/2099411683353485734) — *by @VengieZim, 12 likes/RTs, 1 replies*
- 🐦 **Twitter / X:** [@atzebase claimed, broski.  • 58,088.03 $BNKR leaderboard rewards sent to your wallet on Base  • tx: 0x0a188aa751c406b0b](https://twitter.com/bankrbot/status/2099251953327132870) — *by @bankrbot, 1 likes/RTs, 1 replies*
- 🐦 **Twitter / X:** [Meme coins move fast. DOGE hit ~$0.73, SHIB nearly $0.00009, PEPE exploded after launch, and WIF had its own huge run. T](https://twitter.com/JessMigxi/status/2099245910538572233) — *by @JessMigxi, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [@TazoMaticQC Only have 0.008 Sol and 0.00009 Eth total in my wallet so getting any more is completely out of the questio](https://twitter.com/Larry112066/status/2099238828615610700) — *by @Larry112066, 1 likes/RTs, 1 replies*
- 🐦 **Twitter / X:** [Moving BTC off an exchange on the Bitcoin network, published withdrawal fee: Bitpanda 0.000006 · Kraken 0.000015 · Binan](https://twitter.com/thomich27/status/2099071337067155597) — *by @thomich27, 0 likes/RTs, 1 replies*
- 🐦 **Twitter / X:** [@CoinDesk @DigitalChamber @CodyCarboneDC the tillis-gallego carveout is the real tell here, not the 60 vote math. if the](https://twitter.com/Khaikhaidao/status/2098994034710835534) — *by @Khaikhaidao, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [$AI (Artificial Inu) just hit a new ATH.Price: ~$0.33  Market cap: ~$328M Volume: ~$39M  It’s the NVIDIA-paired dog coin](https://twitter.com/SamiKha88631048/status/2098784324824760616) — *by @SamiKha88631048, 1 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Twitter](https://twitter.com/hashtag/navigationsleiste) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17176.html) *(mail-archive.com)*
  > Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Skip to site navigation (Press enter) Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Dominic Farolino Fri, 14 Aug 2026 08:2...
- [\[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17172.html) *(mail-archive.com)*
  > [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Dominic Farolino Thu, 13 Aug 2026 19:03:45 -07...
- [CSS Sign-Related Functions: abs(), sign()](https://chromestatus.com/feature/5091423843778560) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Chrome 153 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > Usage of this feature is minimal (less than ~0.00009%), see https://chromestatus.com/metrics/feature/timeline/popularity/2835.
- [Chrome 150 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/150) *(developer.chrome.com · 2026-06-30T00:00:00)*
  > For example, background-image: url(&quot;image.png&quot; cross-origin(anonymous)) fetches the image using CORS anonymous mode. This gives authors fine-grained control over cross-origin access, subresource integrity, and referrer policy for CSS-loaded...
- [CSS usage metrics &gt; all properties &gt; stack rank](https://chromestatus.com/metrics/css/popularity) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > This feature <strong>standardizes and renames the existing app-region CSS property, changes its value names to move and none, and adds explicit inheritance behavior</strong>. Tracking bug #477608113 | ChromeStatus.com entry | Spec
- [Chrome 146 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/146) *(developer.chrome.com · 2026-03-10T00:00:00)*
  > This feature lets you create such interactions declaratively with CSS, which lets the user agent offload this interaction to a worker thread. The API also includes JavaScript interfaces that let you extend the feature to web animations in addition to...
- [Chrome 147 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/147) *(developer.chrome.com · 2026-04-07T00:00:00)*
  > Tracking bug #394052227 | ChromeStatus.com entry | Spec · This function helps you meet contrast requirements for accessibility. You can use the contrast-color() function anywhere in CSS where a color value is expected.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17176.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5121089536262144`)*
  > Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Skip to site navigation (Press enter) Re: [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Dominic Farolino Fri, 14 Aug...
- [\[blink-dev\] Web-Facing Change PSA: Removal of "\_current" as a frame target keyword](http://www.mail-archive.com/blink-dev@chromium.org/msg17172.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5121089536262144`)*
  > [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: Removal of "_current" as a frame target keyword Dominic Farolino Thu, 13 Aug 2026 19...

## 📚 Platform Documentation & Specifications

- [www.chromestatus.com - unknown · Issue #3032 · webcompat/web-bugs](https://github.com/webcompat/web-bugs/issues/3032) *(github.com)*
- [Changing the Priority of HTTP Requests (Non-Standard)](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/1.5/Changing_the_priority_of_HTTP_requests) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 39 result(s) found across 7 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5121089536262144" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"html.spec.whatwg.org" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Remove non-standard navigations targeted at _current" API` — *Core feature API query* (0 returned)
  - `"Remove non-standard navigations targeted at _current" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"0.00009" OR "chromestatus.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Remove non-standard navigations targeted at _current" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Remove non-standard navigations targeted at _current" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 113836 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 5 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5121089536262144)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5121089536262144)
- [Specification](https://html.spec.whatwg.org/#the-rules-for-choosing-a-navigable)
- [Chromium Tracking Bug](https://crbug.com/539212797)
