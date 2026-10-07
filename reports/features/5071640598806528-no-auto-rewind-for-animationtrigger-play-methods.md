# No Auto-Rewind for AnimationTrigger Play Methods

> **Report Week:** 2026-W39 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

AnimationTrigger Play Methods will not auto-rewind, i.e. will not restart a finished animation.  "play", "play-forwards" and "play-backwards" are values that, when specified in the association between an AnimationTrigger and an Animation, instructs the trigger to play the animation. This Chromestatus feature covers a specific aspect of the behavior of these keywords: when the relevant animation has already run to completion and these actions (play, play-forwards, play-backwards) are invoked, they will not cause the animation to restart, i.e. the animation will not "auto-rewind."

### Motivation

"play-forwards" and "play-backwards" cause an animation to play with positive and negative playback rate respectively.
They are intended to support use cases where authors want "opposite" events on a page to be accompanied by similarly opposite visual effects. For example, an author might want to associate pointerdown and pointerup with swelling and shrinking respectively. In the event of multiple pointerdown events being observed before a pointerup, the more common scenario is that the first pointerdown triggers the swelling animation and subsequent pointerdowns do nothing until the next pointerup, which itself triggers the reversed (shrinking) animation.

This is achieved by specifying that these keywords do not "auto-rewind", i.e. they do not restart a finished animation.

For consistency, this auto-rewind behavior applies to all the play* keywords.

## Ecosystem Status

- **Momentum:** High (240 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** No Auto-Rewind for AnimationTrigger Play Methods is currently Enabled by default in Chrome 151. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Animation Rewind (@animationrewind) / X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Animation Rewind (@animationrewind) / X](https://twitter.com/animationrewind) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Animation Rewind no X: "@RashadTehReacto Good for you bro! Don't let anyone stop you from making videos!" / X](https://twitter.com/animationrewind/status/675329395431723011) — *by @animationrewind, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [CSS - animation-trigger - とほほのWWW入門](https://www.tohoho-web.com/css/prop/animation-trigger.htm) *(tohoho-web.com · 2026-03-15T00:00:00)*
  > CSS - animation-trigger - とほほのWWW入門 CSS - animation-trigger 概要 属性名 animation-trigger 値 [ none | [ <trigger-name> <activation-action> <active-action> ... ]+ ]# 初期値 none 適用可能要素 すべての要素 継承 継承しない サポート https://caniuse.com/?search=animation-trigger 説明 スクロール...
- [\[blink-dev\] Web-Facing Change PSA: No Auto-Rewind for AnimationTrigger Play Methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16761.html) *(mail-archive.com)*
  > [blink-dev] Web-Facing Change PSA: No Auto-Rewind for AnimationTrigger Play Methods Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: No Auto-Rewind for AnimationTrigger Play Methods David A Mon, 15 Jun 2026 08:52:32 -0700 *Con...
- [Help with basic animation play/rewind - Blueprint - Epic Developer Community Forums](https://forums.unrealengine.com/t/help-with-basic-animation-play-rewind/220654) *(forums.unrealengine.com · 2019-05-31T00:00:00)*
  > Help with basic animation play/rewind - Blueprint - Epic Developer Community Forums = 40rem)" rel="stylesheet" data-target="discourse-epic-games_desktop" /> = 40rem)" rel="stylesheet" data-target="discourse-reactions_desktop" /> = 40rem)" rel="styles...
- [How to Make Google Slides Play Automatically](https://slidestack.com/blog/how-to-make-google-slides-play-automatically-simple-explanation) *(slidestack.com · 2026-03-09T00:00:00)*
  > How to Make Google Slides Play Automatically – Simple Explanation | Slidestack All Business Infographics Lifestyle Real Estate Multipurpose Education Technology Medical Marketing Search "> Home Blog Tutorials How to Make Google Slides Play Automatica...
- [javascript - css animation fast forward and rewind - Stack Overflow](https://stackoverflow.com/questions/19372906/css-animation-fast-forward-and-rewind) *(stackoverflow.com · 2014-10-15T00:00:00)*
  > Copyvar effect = new TimelineMax({paused:true}); effect.addLabel(&#x27;start&#x27;); effect.to( &#x27;#myItem&#x27;, 1, {css:{opacity:1}} ); effect.addLabel(&#x27;step1&#x27;); effect.to( &#x27;#myItem&#x27;, 1, {css:{opacity:0}} ); effect.addLabel(&...
- [animation-trigger \| CSS-Tricks](https://css-tricks.com/almanac/properties/a/animation-trigger) *(css-tricks.com · 2026-08-26T15:38:44)*
  > .element { animation: fade-in 0.35s ease-in-out both; animation-trigger: --trigger play-forwards play-backwards; }
- [animation-trigger \| CSS-Methods – blog.aimactgrow.com](https://blog.aimactgrow.com/animation-trigger-css-methods) *(blog.aimactgrow.com · 2026-08-26T23:17:08)*
  > The CSS animation-trigger property <strong>delays the beginning of a CSS animation till a particular set off happens</strong>. Extra particularly, it listens for a named set off and controls how the animation performs or pauses in response.
- [CSS Animation Triggers: Playing animations on scroll without scrubbing. It's a match! \| daily.dev](https://daily.dev/posts/css-animation-triggers-playing-animations-on-scroll-without-scrubbing-it-s-a-match--gfvysiegs) *(daily.dev · 2026-09-20T07:43:49)*
  > Then connect an animated element with animation-trigger: <strong>--my-trigger play-forwards play-backwards</strong>, so the animation plays forward when the trigger becomes fully visible and reverses when it starts leaving, with no JavaScript or Inte...
- [CSS scroll-triggered animations are coming! \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/scroll-triggered-animations) *(developer.chrome.com · 2025-12-12T00:00:00)*
  > This animation uses a DocumentTimeline ... To change the trigger, use the new animation-trigger CSS property: <strong>animation-trigger: --t play-forwards play-backwards;</strong>...
- [CSS Animation Triggers: Playing animations on scroll without scrubbing. It's a match! \| utilitybend](https://utilitybend.com/blog/css-animation-triggers-playing-animations-on-scroll-without-scrubbing-its-a-match) *(utilitybend.com · 2026-02-12T00:00:00)*
  > Once triggered, the animation plays at its normal duration and easing, just like any other CSS animation would. /* Scroll-triggered: plays normally when triggered */ .text { animation: fade-in 0.6s ease-out both; animation-trigger: --my-trigger play-...
- [A First Look at Scroll-Triggered Animations \| CSS-Tricks](https://css-tricks.com/css-scroll-triggered-animations-first-look) *(css-tricks.com · 2026-06-19T13:26:21)*
  > backwards: <strong>the styles are applied before the animation</strong>. ... Now, let’s assume that the &lt;animation-action&gt; is play-forwards (like before) and the fill mode is forwards (both would be redundant because background isn’t even set t...
- [A First Look at Scroll-Triggered Animations \| 67nj](https://www.67nj.org/a-first-look-at-scroll-triggered-animations) *(67nj.org · 2026-06-19T11:03:17)*
  > backwards: <strong>the styles are applied before the animation</strong>. ... Now, let’s assume that the &lt;animation-action&gt; is play-forwards (like before) and the fill mode is forwards (both would be redundant because background isn’t even set t...
- [A First Look at Scroll-Triggered Animations](https://247webdevs.blogspot.com/2026/06/a-first-look-at-scroll-triggered.html) *(247webdevs.blogspot.com · 2026-06-19T13:22:21)*
  > backwards: <strong>the styles are applied before the animation</strong>. ... Now, let’s assume that the &lt;animation-action&gt; is play-forwards (like before) and the fill mode is forwards (both would be redundant because background isn’t even set t...
- [Scroll Triggered Animations](https://chromestatus.com/feature/5181996801982464) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Chrome Platform Status](https://chromestatus.com/feature/5071230636392448?context=myfeatures) *(chromestatus.com · 2022-12-08T00:00:00)*
  > We cannot provide a description for this page right now
- [scroll-timeline & animation-timeline](https://chromestatus.com/feature/6454455685873664) *(chromestatus.com · 2020-05-26T00:00:00)*
  > We cannot provide a description for this page right now
- [CSS scroll-triggered animations are here, and I completely missed them \| Blog Cyd Stumpel](https://cydstumpel.nl/css-scroll-triggered-animations-are-here-and-i-completely-missed-them) *(cydstumpel.nl · 2026-09-17T09:35:32)*
  > We can specify animation actions and use it, for example, to play, pause or reverse animations based on if the trigger is active or not. Scroll position is the first available trigger that’s been added to browsers, but there are plans to add action-t...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [No Auto-Rewind for AnimationTrigger Play Methods · Issue #1299 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1299) *(github.com · 2026-08-14T17:29:32)* *(Cites: `https://chromestatus.com/feature/5071640598806528`)*
  > No Auto-Rewind for AnimationTrigger Play Methods · Issue #1299 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with anoth...
- [CSS - animation-trigger - とほほのWWW入門](https://www.tohoho-web.com/css/prop/animation-trigger.htm) *(tohoho-web.com · 2026-03-15T00:00:00)* *(Cites: `https://drafts.csswg.org/animation-triggers-1/#valdef-animation-action-play`)*
  > CSS - animation-trigger - とほほのWWW入門 CSS - animation-trigger 概要 属性名 animation-trigger 値 [ none | [ <trigger-name> <activation-action> <active-action> ... ]+ ]# 初期値 none 適用可能要素 すべての要素 継承 継承しない サポート https://caniuse.com/?search=animation-trigge...
- [📦 Release @webref/css6@6.25.16 by github-actions\[bot\] · Pull Request #2062 · w3c/webref](https://github.com/w3c/webref/pull/2062) *(github.com)* *(Cites: `https://drafts.csswg.org/animation-triggers-1/#valdef-animation-action-play`)*
  > 📦 Release @webref/css6@6.25.16 by github-actions[bot] · Pull Request #2062 · w3c/webref · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or win...

## 📚 Platform Documentation & Specifications

- [No Auto-Rewind for AnimationTrigger Play Methods · Issue #1299 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1299) *(github.com)*
- [📦 Release @webref/css6@6.25.16 by github-actions\[bot\] · Pull Request #2062 · w3c/webref](https://github.com/w3c/webref/pull/2062) *(github.com)*
- [csswg-drafts/css-animations-2/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-animations-2/Overview.bs) *(github.com)*
- [\[web-animations-2\]\[css-animations-2\] Set of actions for animation triggers · Issue #12611 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12611) *(github.com)*
- [Animation: play() method](https://developer.mozilla.org/en-US/docs/Web/API/Animation/play) *(developer.mozilla.org)*
- [Animation: playState property](https://developer.mozilla.org/en-US/docs/Web/API/Animation/playState) *(developer.mozilla.org)*
- [animation-play-state CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-play-state) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 50 result(s) found across 12 planned queries — **21 verified relevant**
  - `"chromestatus.com/feature/5071640598806528" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/animation-triggers-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"No Auto-Rewind for AnimationTrigger Play Methods" API` — *Core feature API query* (2 returned)
  - `"No Auto-Rewind for AnimationTrigger Play Methods" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (7 returned)
  - `"auto-rewind" OR "play-forwards" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"No Auto-Rewind for AnimationTrigger Play Methods" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"No Auto-Rewind for AnimationTrigger Play Methods" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"animation-trigger" "play-forwards" OR "play-backwards" CSS` — *Finds CSS specification usage, WebIDL definitions, and code syntax examples showcasing the play-forwards and play-backwards trigger actions.* (8 returned)
  - `"Animation Triggers" ("play-forwards" OR "play-backwards") tutorial guide` — *Discovers developer articles, demos, and guides explaining how to coordinate directional animation triggers with interaction events.* (1 returned)
  - `"AnimationTrigger" "auto-rewind" site:groups.google.com/a/chromium.org OR site:chromestatus.com` — *Locates Blink intent-to-implement / intent-to-ship threads and ChromeStatus updates tracking this specific behavior change.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "animation-trigger" ("auto-rewind" OR "play-forwards")` — *Searches CSS Working Group GitHub issues and specification discussions regarding the resolution and rationale for preventing auto-rewind on play actions.* (2 returned)
  - `"animation-trigger" ("pointerdown" OR "pointerup") "play-forwards"` — *Identifies practical implementation tutorials demonstrating complementary interaction triggers such as pointer swelling and shrinking patterns.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1242 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5071640598806528)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5071640598806528)
- [Specification](https://drafts.csswg.org/animation-triggers-1/#valdef-animation-action-play)
- [Chromium Tracking Bug](https://crbug.com/519573765)
