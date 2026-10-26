# CSS random() function

> **Report Week:** 2026-W44 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

The random() function brings generative randomness to CSS, allowing web authors to generate a random numeric value within a specified range.  For example, web authors can use random() to scatter elements randomly within their container: .dot {   /\* Position each dot randomly \*/   position: absolute;   top: random(0%, 100%);   left: random(0%, 100%); }  This feature also includes caching controls. By default, each random() function resolves to a new, distinct value. Web authors can override this default by passing a &lt;random-key&gt; value as the function's first argument to control how random values are shared across properties and elements.

### Motivation

The CSS random() function provides a native way to generate random values directly in CSS without relying on JavaScript, reducing code complexity while making it easier for developers to create varied and dynamic designs.

## Ecosystem Status

- **Momentum:** High (footprint 432 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The CSS random() function, specified in CSS Values and Units Module Level 5, brings native generative randomness directly into declarative stylesheets without requiring JavaScript or preprocessor loops. Safari was the first to implement and ship the function, with Chrome enabling it by default in version 156 and Mozilla actively tracking implementation. Ecosystem consensus across major browser engines is solidly aligned, though cross-browser interoperability remains limited until Firefox ships support.

### Recommendations
- Actionable Advice: Teams should adopt CSS random() as a progressive enhancement by guarding declarations behind feature queries such as @supports (transform: rotate(random(-5deg, 5deg))) while supplying static fallback values. For broad cross-engine production builds, consider build-step polyfills or continue relying on lightweight CSS custom property injection until Firefox achieves parity.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Yeah the thing the WG settled on was a lot saner than the initial proposal :)..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "🎲 In design, we obsess over consistency, grids, and alignment. So where does randomness actually fit? Through a bunch o" (9 points, 2 comments).

## Standards Positions

- **Mozilla:** [CSS Values 5: random()](https://github.com/mozilla/standards-positions/issues/809) [closed]

## Web-features Group

*group-level data: web-features [`random-function`](https://webstatus.dev/features/random-function)*

- Share of tests passing in the web-features group `random-function` on [wpt.fyi](https://wpt.fyi/results?q=feature:random-function) (via webstatus.dev) — stable: Chrome 25% · Edge 25% · Firefox 12.5% · Safari 37.5%; experimental: Chrome 25% · Edge 25% · Firefox 25% · Safari 100%

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [🎲 In design, we obsess over consistency, grids, and alignment. So where does randomness actually fit? Through a bunch o](https://twitter.com/smashingmag/status/2112573665476755631) — *by @smashingmag, 9 likes/RTs, 2 replies*
- 🐦 **Twitter / X:** [Embracing Playful Imperfection With The CSS \`random()\` Function https://t.co/DL6KfKRoL0](https://twitter.com/Un1v3rs0Z3r0/status/2112533916619849960) — *by @Un1v3rs0Z3r0, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Embracing Playful Imperfection With The CSS \`random()\` Function https://t.co/raV9pu6NqT #uxdesign #webdev #GraphicDesign](https://twitter.com/MediaRings/status/2112532952802382167) — *by @MediaRings, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [WebKit on X: "Learn about the new CSS random() function, now available to experiment with in Safari Technology Preview. There are lots of amazing ways to use random values in CSS. Learn more in "Rolling the Dice with CSS random()": https://t.co/JdFtXP3qTm" / X](https://x.com/webkit/status/1958608369134280951) — *by @webkit, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [@csstools/postcss-random-function](https://www.npmjs.com/package/@csstools/postcss-random-function) `v4.0.5` — Use the random function in CSS

## 📰 Ecosystem Blogs & Articles

- [css3clickchart.com](https://css3clickchart.com/news/css-random-function-safari-chrome-156) *(css3clickchart.com)*
  > Defined in the \*\*CSS Values and Units Module Level 5\*\* specification Slight jitters and offsets in card galleries or polaroid spreads
- [Embracing Playful Imperfection With The CSS random() Function — Smashing Magazine](https://www.smashingmagazine.com/2026/10/embracing-playful-imperfection-css-random-function) *(smashingmagazine.com)*
  > Defined in the \*\*CSS Values and Units Module Level 5\*\* specification, the native \`random()\` function brings generative randomness directly to declarative stylesheets without requiring JavaScript or static preprocessor (Sass) loops \*\*Focus:\*\* Reconcil...
- [Embracing Playful Imperfection With The CSS random() Function — Smashing Magazine \| daily.dev](https://daily.dev/posts/embracing-playful-imperfection-with-the-css-random-function-smashing-magazine-cwvipesbh) *(daily.dev)*
  > \*\*Syntax & Units:\*\* Basic usage follows \`random(min, max, step?)\` or \`random(&lt;random-caching-key&gt;?, min, max)\` An optional \`step\` allows snapping to fixed increments
- [medium.com](https://medium.com/@arnoldgunter/why-i-love-to-use-the-new-css-random-function-2a7a0cb56500) *(medium.com)*
  > \*\*Syntax & Units:\*\* Basic usage follows \`random(min, max, step?)\` or \`random(&lt;random-caching-key&gt;?, min, max)\` Both limits must share compatible unit types (lengths, angles, percentages, times, etc.)
- [Let’s Use the Emergent CSS random() Function in all the Browsers \| CSS-Tricks](https://css-tricks.com/css-random-function-polyfill) *(css-tricks.com)*
  > \*\*Focus:\*\* Practical UI applications and fallback/polyfill strategies \*\*Highlights:\*\* The author uses real-world examples, such as celebratory confetti bursts and organic layout scatter, contrasting the old method (hundreds of lines of generated \`:nt...
- [master.dev](https://blog.master.dev/very-early-playing-with-random-in-css) *(blog.master.dev)*
  > \*\*Highlights:\*\* The author uses real-world examples, such as celebratory confetti bursts and organic layout scatter, contrasting the old method (hundreds of lines of generated \`:nth-child\` CSS from preprocessors) with modern single-declaration implem...
- [csswg.org](https://drafts.csswg.org/css-values-5) *(drafts.csswg.org)*
  > \*\*Takeaway:\*\* Formalizes \`random()\` alongside its companion function \`random-item()\` (which randomly selects from non-numeric token lists, such as fonts or color keywords)
- [Experimenting with the new pure CSS random() function \| Polypane](https://polypane.app/blog/experimenting-with-the-new-pure-css-random-function) *(polypane.app)*
  > \*\*Focus:\*\* Interactive sandboxes and edge-case testing \*\*Kilian Valkhof (Polypane)\*\* put the function through stress tests with demos like dynamic bokeh backgrounds, falling petal animations, and generative visual poetry
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17343.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS random() function Rick Byers Wed, 02 Sep 2026 08:12:47 -0700 LGTM1 On Wed, Aug 26, 2026 at 3:47 PM 'Munira Tursunova' via ...
- [\[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17310.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS random() function 'Munira Tursunova' via blink-dev Wed, 26 Aug 2026 12:48:09 -0700 \*Contact emails\* \[email&#160;protected\] \*Explai...
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17344.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS random() function Yoav Weiss (@Shopify) Wed, 02 Sep 2026 08:13:20 -0700 LGTM2 On Wed, Sep 2, 2026 at 5:12 PM Rick Byers &lt; ...
- [CSS Random() Snow](https://codepen.io/DenDionigi/pen/ogxJdqr) *(codepen.io)*
  > &lt;!-- The Content --&gt; &lt;section class=&quot;main&quot;&gt; &lt;div class=&quot;intro&quot;&gt; &lt;h1&gt;Winter has come&lt;/h1&gt; &lt;h2&gt;Just relax and enjoy life.&lt;/h2&gt; &lt;p&gt;This demo has also a new CSS feature called random(), ...
- [Creating natural variation with the CSS random() function - ICS MEDIA](https://ics.media/en/entry/261001) *(ics.media · 2026-09-30T15:00:00)*
  > The random() function &lt;strong&gt;returns a random value within a specified range&lt;/strong&gt;. Since it is used as a CSS value, you can work directly with units appropriate to each property, including lengths, angles, times, and percentages.
- [CSS random() \| Erik Runyon](https://erikrunyon.com/2025/10/css-random) *(erikrunyon.com · 2025-10-08T00:00:00)*
  > The basic format of the function follows the pattern “&lt;strong&gt;random(min, max, step)&lt;/strong&gt;”. For instance, if you want to assign an element a random height between 50px and 200px, you would use “height: random(50px, 200px)”. You can also include a...
- [Very Early Playing with random() in CSS – Master.dev Blog](https://frontendmasters.com/blog/very-early-playing-with-random-in-css) *(frontendmasters.com · 2025-08-25T00:00:00)*
  > WebKit/Safari has rolled out a preview version of random() in CSS. Random functions in programming languages are amazing. You can use them to generate variations, to make things feel spontaneous and fresh. Until now there was no way to create a rando...
- [Let’s Use the Emergent CSS random() Function in all the Browsers](https://247webdevs.blogspot.com/2026/08/lets-use-emergent-css-random-function.html) *(247webdevs.blogspot.com · 2026-08-31T16:22:01)*
  > The journey to create a polyfill for the upcoming CSS random() function that works in all browsers.
- [Random Numbers in CSS: From Workarounds to Native Support \| Digital Thrive US](https://digitalthriveai.com/en-us/resources/web-development/random-numbers-css) *(digitalthriveai.com)*
  > Learn how to generate random values in CSS, from JavaScript workarounds to the new native random() function. Covers syntax, shared randomness patterns, and practical examples.
- [CSS Can Finally Be Random - YouTube](https://www.youtube.com/watch?v=Uy3xsfAD8s0) *(youtube.com · 2026-08-14T09:30:25)*
  > Source Code 👉 https://coding2go.com/New to CSS? Beginner Course 👉https://coding2go.com/products/html-css-masterclassLearn how to use the new random() funct
- [CSS math-random() in Production: Native Randomness Without JavaScript](https://www.sitepoint.com/css-mathrandom-in-production-native-randomness-without-javascript) *(sitepoint.com · 2026-05-10T09:49:59)*
  > The per-element keyword tells the browser to treat each element independently, producing six visually distinct boxes from identical markup and a single CSS rule. The random() function &lt;strong&gt;returns a numeric value within a continuous range&lt;/strong&gt;...
- [Let’s Use the Emergent CSS random() Perform in all of the Browsers – blog.aimactgrow.com](https://blog.aimactgrow.com/lets-use-the-emergent-css-random-perform-in-all-of-the-browsers) *(blog.aimactgrow.com · 2026-09-01T05:35:11)*
  > With all these obstacles in thoughts, an individual must be a particular breed of loopy to try to polyfill CSS random(). One of many commenters on a neat YouTube demo of the function marvelled that it’s a “function that works ONLY IN SAFARI?!?
- [Throwing Confetti with CSS Random - Schalk Neethling - Open Web Engineer](https://schalkneethling.com/posts/throwing-confetti-with-css-random) *(schalkneethling.com · 2026-07-13T00:00:00)*
  > Which brings us to the state of the feature. &lt;strong&gt;random() is new enough that the specification moved while the first implementation was shipping, and new enough that the two engines that have it do not agree on all of it&lt;/strong&gt;.
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17357.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; \*Initial public proposal\* &gt;&gt;&gt; \*No information provided\* &gt;&gt;&gt; &gt;&gt;&gt; \*Search tags\* &gt;&gt;&gt; random &lt;https://chromestatus.com/features#tags:random&gt; &gt;&gt;&gt; &gt;&gt;&gt; \*TAG review\* &gt;&g...
- [Why Safari 27 Ships 525 Fixes: Notes From the WebKit Lab](https://blakecrosley.com/blog/webkit-lab-how-safari-ships) *(blakecrosley.com · 2026-06-13T00:00:00)*
  > Source for both being supported in Safari/WebKit and not in Chrome or Firefox at time of writing (the filter() function is distinct from the widely supported filter property). ↩ · W3C, CSS Values and Units Module Level 5, which defines random() and r...
- [Let’s Use the Emergent CSS random() Function in all the Browsers \| daily.dev](https://daily.dev/posts/let-s-use-the-emergent-css-random-function-in-all-the-browsers-yi8ggjuka) *(daily.dev · 2026-09-13T19:59:16)*
  > Safari became the first browser to ship the CSS random() function in late 2025, but &lt;strong&gt;Chrome and Firefox support remains unclear&lt;/strong&gt;, with only early signs of implementation work.
- [WebKit Features for Safari 26.2 \| WebKit](https://webkit.org/blog/17640/webkit-features-for-safari-26-2) *(webkit.org · 2026-02-04T21:58:19)*
  > In recent years, CSS has gained many powerful mathematical abilities, adding to its maturity as a programming language. Safari 26.2 brings three new functions — random(), sibling-index() and sibling-count().
- [WebKit Features for Safari 26.5 \| WebKit](https://webkit.org/blog/17938/webkit-features-for-safari-26-5) *(webkit.org · 2026-05-11T18:20:26)*
  > We were proud to be the first browser to ship the new CSS random() function last December, in Safari 26.2. Since then, the CSS Working Group adjusted how named random values work. Using a named value in the syntax, like random(--size, 100px, 200px), ...
- [Rolling the dice with CSS random() \| Hacker News](https://news.ycombinator.com/item?id=44977833) *(news.ycombinator.com · 2025-08-25T04:14:08)*
  > https://www.sitepoint.com/the-cicada-principle-and-why-it-ma · https://lea.verou.me/blog/2020/07/the-cicada-principle-revis
- [More CSS random() Learning Through Experiments – Frontend Masters Blog](https://frontendmasters.com/blog/more-css-random-learning-through-experiments) *(frontendmasters.com · 2025-11-18T00:00:00)*
  > I figured if I selected a random selection of 1/3 of them into three groups, I could animate them at different speeds and get a parallax thing going on. ... This one is maybe easier conceptually as we just make a bunch of star &lt;div&gt;s (I won’t p...
- ["css-random-function" \| Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/css-random-function) *(caniuse.com)*
  > "css-random-function" \| Can I use... Support tables for HTML5, CSS3, etc Can I use Search ? Settings 1 result found.
- [CSS random(): function skips JS for random effects \| iMasters](https://imasters.com/design-ux/css-random-function-makes-javascript-and-sass-unnecessary-for-random-effects) *(imasters.com)*
  > CSS random(): function skips JS for random effects \| iMasters Skip to content Follow on Instagram Instagram 0 Navigation Categories Dev & Engineering Dev (Back & Front) Data DevSecOps Design & Digital Product Product & UX Martech & Growth Marketing T...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17343.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > Re: \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS random() function Rick Byers Wed, 02 Sep 2026 08:12:47 -0700 LGTM1 On Wed, Aug 26, 2026 at 3:47 PM 'Munira Tursu...
- [\[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17310.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS random() function 'Munira Tursunova' via blink-dev Wed, 26 Aug 2026 12:48:09 -0700 \*Contact emails\* \[email&#160;protecte...
- [Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30754) *(github.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > css.types.random (https://&lt;strong&gt;chromestatus.com/feature/5324559251275776&lt;/strong&gt;)
- [CSS random() · Issue #1354 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1354) *(github.com · 2026-09-03T21:08:06)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > CSS random() · Issue #1354 · web-platform-tests/interop · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your sessi...
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17344.html) *(mail-archive.com)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > Re: \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS random() function Yoav Weiss (@Shopify) Wed, 02 Sep 2026 08:13:20 -0700 LGTM2 On Wed, Sep 2, 2026 at 5:12 PM Ric...
- [CSS random() function · Issue #715 · mdn/mdn](https://github.com/mdn/mdn/issues/715) *(github.com · 2025-08-24T12:16:41)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > CSS random() function · Issue #715 · mdn/mdn · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You sig...
- [CSS Random() Snow](https://codepen.io/DenDionigi/pen/ogxJdqr) *(codepen.io)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > &lt;!-- The Content --&gt; &lt;section class=&quot;main&quot;&gt; &lt;div class=&quot;intro&quot;&gt; &lt;h1&gt;Winter has come&lt;/h1&gt; &lt;h2&gt;Just relax and enjoy life.&lt;/h2&gt; &lt;p&gt;This demo has also a new CSS feature called ...

## 📚 Platform Documentation & Specifications

- [random() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/random) *(developer.mozilla.org)*
- [Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30754) *(github.com)*
- [CSS random() · Issue #1354 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1354) *(github.com)*
- [CSS random() function · Issue #715 · mdn/mdn](https://github.com/mdn/mdn/issues/715) *(github.com)*
- [docs(css): update random() to new random-key syntax by BHUVANSH855 · Pull Request #45729 · mdn/content](https://github.com/mdn/content/pull/45729) *(github.com)*
- [\[css-values-5\] Does \`random()\` simplify to a value at specified value time for a \`fixed &lt;number&gt;\` key? · Issue #14478 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14478) *(github.com)*
- [\[css-values\] random() function · Issue #2826 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/2826) *(github.com)*
- [CSS Values 5: random() · Issue #809 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/809) *(github.com)*
- [\[css-values-5\] Make specifying limits more convenient in random function · Issue #13457 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13457) *(github.com)*
- [CSS value random() · Issue #7349 · Fyrd/caniuse](https://github.com/Fyrd/caniuse/issues/7349) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 69 result(s) found across 14 planned queries — **34 verified relevant**
  - `"chromestatus.com/feature/5324559251275776" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"webkit.org/blog/17285/rolling-the-dice-with-css-random" -site:webkit.org` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"css-tricks.com/almanac/functions/r/random" -site:css-tricks.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"www.w3.org/TR/css-values-5" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"CSS random() function" API` — *Core feature API query* (8 returned)
  - `"CSS random() function" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"random-key" OR "random()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS random() function" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS random() function" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"CSS random()" (tutorial OR guide OR "how to use")` — *Finds developer guides and introductory blog posts explaining how to use the CSS random function.* (8 returned)
  - `"random()" CSS ("random-key" OR "css-values-5") syntax` — *Surfaces syntax details, specification references, and code patterns including random-key caching mechanisms.* (8 returned)
  - `"CSS random()" (WebKit OR Safari OR Chromium OR Firefox) (support OR shipped OR "intent to")` — *Tracks browser vendor implementation status, intent signals, and platform release announcements.* (8 returned)
  - `"CSS random" OR "random() in CSS" (site:news.ycombinator.com OR site:reddit.com/r/webdev)` — *Discovers web developer community reactions, debates, and sentiment on platforms like Reddit and Hacker News.* (8 returned)
  - `"CSS random()" ("generative" OR "scatter" OR "animation") examples` — *Searches for real-world creative use cases, generative layouts, and practical CSS animation demos.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 11 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 3 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 7 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 4 result(s) found — **2 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 8 result(s) found — **1 verified relevant**
- **web-features mapping:** *group "random-function", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "random-function": Chrome 25% passing (stable)*
- **Sources cited by the AI synthesis:** 6 result(s) found — **6 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 2 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5324559251275776)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5324559251275776)
- [Specification](https://www.w3.org/TR/css-values-5/#random)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/413385732)
