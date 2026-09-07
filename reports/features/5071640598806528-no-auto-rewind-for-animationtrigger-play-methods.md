# No Auto-Rewind for AnimationTrigger Play Methods

> **Report Week:** 2026-W37 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

AnimationTrigger Play Methods will not auto-rewind, i.e. will not restart a finished animation.

"play", "play-forwards" and "play-backwards" are values that, when specified in the association between an AnimationTrigger and an Animation, instructs the trigger to play the animation. This Chromestatus feature covers a specific aspect of the behavior of these keywords: when the relevant animation has already run to completion and these actions (play, play-forwards, play-backwards) are invoked, they will not cause the animation to restart, i.e. the animation will not "auto-rewind."

### Motivation

"play-forwards" and "play-backwards" cause an animation to play with positive and negative playback rate respectively.
They are intended to support use cases where authors want "opposite" events on a page to be accompanied by similarly opposite visual effects. For example, an author might want to associate pointerdown and pointerup with swelling and shrinking respectively. In the event of multiple pointerdown events being observed before a pointerup, the more common scenario is that the first pointerdown triggers the swelling animation and subsequent pointerdowns do nothing until the next pointerup, which itself triggers the reversed (shrinking) animation.

This is achieved by specifying that these keywords do not "auto-rewind", i.e. they do not restart a finished animation.

For consistency, this auto-rewind behavior applies to all the play* keywords.

## Ecosystem Status

- **Momentum:** High (130 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** CSS Animation Triggers Level 1 specifies that trigger play methods ('play', 'play-forwards', and 'play-backwards') do not automatically rewind or restart animations that have already completed. Chrome implemented this behavioral alignment in Chrome 151 to support symmetrical interaction patterns (such as paired pointerdown/pointerup or scroll enter/exit transitions) without unexpected restarts. While Blink has shipped this refinement, the overarching CSS Animation Triggers specification is still evolving and lacks cross-engine Baseline availability.

### Recommendations
- Actionable Advice: Do not rely on declarative CSS Animation Triggers for mission-critical production UI until cross-browser interoperability improves. For current production work, manage stateful forward/backward animations via standard CSS transitions, Scroll-Driven Animations, or JavaScript Web Animations API (`WAAPI`) controls.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [CSS - animation-trigger - とほほのWWW入門](https://www.tohoho-web.com/css/prop/animation-trigger.htm) *(tohoho-web.com · 2026-03-15T00:00:00)*
  > CSS - animation-trigger - とほほのWWW入門 CSS - animation-trigger 概要 属性名 animation-trigger 値 [ none | [ <trigger-name> <activation-action> <active-action> ... ]+ ]# 初期値 none 適用可能要素 すべての要素 継承 継承しない サポート https://caniuse.com/?search=animation-trigger 説明 スクロール...
- [[blink-dev] Web-Facing Change PSA: No Auto-Rewind for AnimationTrigger Play Methods](http://www.mail-archive.com/blink-dev@chromium.org/msg16761.html) *(mail-archive.com)*
  > [blink-dev] Web-Facing Change PSA: No Auto-Rewind for AnimationTrigger Play Methods Skip to site navigation (Press enter) [blink-dev] Web-Facing Change PSA: No Auto-Rewind for AnimationTrigger Play Methods David A Mon, 15 Jun 2026 08:52:32 -0700 *Con...
- [Help with basic animation play/rewind - Blueprint - Epic Developer Community Forums](https://forums.unrealengine.com/t/help-with-basic-animation-play-rewind/220654) *(forums.unrealengine.com · 2019-05-31T00:00:00)*
  > Help with basic animation play/rewind - Blueprint - Epic Developer Community Forums = 40rem)" rel="stylesheet" data-target="discourse-epic-games_desktop" /> = 40rem)" rel="stylesheet" data-target="discourse-reactions_desktop" /> = 40rem)" rel="styles...
- [Web Animations API Tutorial Part 2: The Animation & Timeline Controls](https://danielcwilson.com/blog/2015/07/animations-part-2) *(danielcwilson.com)*
  > Web Animations API Tutorial Part 2: The Animation & Timeline Controls Dan Wilson Web Animations API Tutorial Part 2: The Animation & Timeline Controls Jul 31, 2015 Updated Jun 14, 2016 This is Part 2 of an introductory/tutorial series on the Web Anim...
- [How to Make Google Slides Play Automatically](https://slidestack.com/blog/how-to-make-google-slides-play-automatically-simple-explanation) *(slidestack.com · 2026-03-09T00:00:00)*
  > How to Make Google Slides Play Automatically – Simple Explanation | Slidestack All Business Infographics Lifestyle Real Estate Multipurpose Education Technology Medical Marketing Search "> Home Blog Tutorials How to Make Google Slides Play Automatica...
- [Animation State | Cocos Creator](https://docs.cocos.com/creator/3.8/manual/en/animation/animation-state.html) *(docs.cocos.com · 2024-05-28T00:00:00)*
  > Animation State | Cocos Creator Skip to content Cocos Creator Search K English 简体中文 English 简体中文 Appearance Cocos Creator 3.8 Menu Return to top Feedback Animation State ​ Animation clips only describe the animation data of a certain type of object, ...
- [javascript - css animation fast forward and rewind - Stack Overflow](https://stackoverflow.com/questions/19372906/css-animation-fast-forward-and-rewind) *(stackoverflow.com · 2014-10-15T00:00:00)*
  > Copyvar effect = new TimelineMax({paused:true}); effect.addLabel(&#x27;start&#x27;); effect.to( &#x27;#myItem&#x27;, 1, {css:{opacity:1}} ); effect.addLabel(&#x27;step1&#x27;); effect.to( &#x27;#myItem&#x27;, 1, {css:{opacity:0}} ); effect.addLabel(&...
- [iOS PWA animation error](https://community.flutterflow.io/ask-the-community/post/ios-pwa-animation-error-2RAD9uSOX9Rsvsf) *(community.flutterflow.io · 2024-06-26T06:52:07)*
  > When I slide to go forward or back on iOS I get a short duration like 1 ms animation that looks horrible. It seems like a default animation is shown. Any way of changing the default transition for the...
- [Page loading animation, The proper way | by Mohammad | Medium](https://medium.com/@ranger.m.gh/page-loading-animation-the-proper-way-245cdf92c2fc) *(medium.com · 2020-07-25T09:39:04)*
  > Page loading animation, The proper way I’m currently working on a high traffic website as a front-end developer. We have a PWA version and we just optimized the performance as possible. But as a …
- [Adding Animations - Progressive Web Apps (PWA) - The Complete Guide [Video]](https://www.oreilly.com/library/view/progressive-web-apps/9781789135770/video8_6.html) *(oreilly.com)*
  > <strong>In this 13-hour course, you will learn the skills to build and optimize Progressive Web Apps (PWAs) that deliver native app-like experiences in the browser</strong>. From offline... - Selection from Progressive Web Apps (PWA) - The Complete G...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [CSS - animation-trigger - とほほのWWW入門](https://www.tohoho-web.com/css/prop/animation-trigger.htm) *(tohoho-web.com · 2026-03-15T00:00:00)* *(Cites: `https://drafts.csswg.org/animation-triggers-1/#valdef-animation-action-play`)*
  > CSS - animation-trigger - とほほのWWW入門 CSS - animation-trigger 概要 属性名 animation-trigger 値 [ none | [ <trigger-name> <activation-action> <active-action> ... ]+ ]# 初期値 none 適用可能要素 すべての要素 継承 継承しない サポート https://caniuse.com/?search=animation-trigge...

## 📚 Platform Documentation & Specifications

- [Animation: play() method](https://developer.mozilla.org/en-US/docs/Web/API/Animation/play) *(developer.mozilla.org)*
- [Animation: playState property](https://developer.mozilla.org/en-US/docs/Web/API/Animation/playState) *(developer.mozilla.org)*
- [animation-play-state CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-play-state) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 31 result(s) found across 7 planned queries — **10 verified relevant**
  - `"chromestatus.com/feature/5071640598806528" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.csswg.org/animation-triggers-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"No Auto-Rewind for AnimationTrigger Play Methods" API` — *Core feature API query* (1 returned)
  - `"No Auto-Rewind for AnimationTrigger Play Methods" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"auto-rewind" OR "play-forwards" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"No Auto-Rewind for AnimationTrigger Play Methods" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"No Auto-Rewind for AnimationTrigger Play Methods" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5071640598806528)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5071640598806528)
- [Specification](https://drafts.csswg.org/animation-triggers-1/#valdef-animation-action-play)
- [Chromium Tracking Bug](https://crbug.com/519573765)
