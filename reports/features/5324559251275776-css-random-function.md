# CSS random() function

> **Report Week:** 2026-W43 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

The random() function brings generative randomness to CSS, allowing web authors to generate a random numeric value within a specified range.  For example, web authors can use random() to scatter elements randomly within their container: .dot {   /\* Position each dot randomly \*/   position: absolute;   top: random(0%, 100%);   left: random(0%, 100%); }  This feature also includes caching controls. By default, each random() function resolves to a new, distinct value. Web authors can override this default by passing a &lt;random-key&gt; value as the function's first argument to control how random values are shared across properties and elements.

### Motivation

The CSS random() function provides a native way to generate random values directly in CSS without relying on JavaScript, reducing code complexity while making it easier for developers to create varied and dynamic designs.

## Ecosystem Status

- **Momentum:** Moderate (footprint 335 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The CSS random() function brings generative numeric randomness natively into stylesheets, eliminating long-standing reliance on JavaScript hacks and precalculated variables for organic UI variation. Spearheaded by WebKit and enabled by default in Chrome 156, the feature has achieved unanimous vendor alignment across the CSS Working Group. While Safari and Chromium lead browser availability, ecosystem-wide Baseline interoperability awaits Gecko's pending implementation release.

### Recommendations
- Actionable Advice: Adopt CSS random() today strictly as a progressive enhancement guarded by @supports rules for decorative micro-interactions, procedural animations, and visual variance. Avoid relying on it for layout-critical or state-dependent mechanics, and maintain deterministic fallbacks or build-time PostCSS transforms until full cross-browser support solidifies.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Yeah the thing the WG settled on was a lot saner than the initial proposal :)..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "WebKit on X: "Learn about the new CSS random() function, now available to experiment with in Safari Technology Preview. There are lots of amazing ways to use random values in CSS. Learn more in "Rolling the Dice with CSS random()": https://t.co/JdFtXP3qTm" / X" (0 points, 0 comments).

## Standards Positions

- **Mozilla:** [CSS Values 5: random()](https://github.com/mozilla/standards-positions/issues/809) [closed]

## Web-features Group

*group-level data: web-features [`random-function`](https://webstatus.dev/features/random-function)*

- Share of tests passing in the web-features group `random-function` on [wpt.fyi](https://wpt.fyi/results?q=feature:random-function) (via webstatus.dev) — stable: Chrome 12.5% · Edge 12.5% · Firefox 12.5% · Safari 37.5%; experimental: Chrome 25% · Edge 25% · Firefox 25% · Safari 100%

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [WebKit on X: "Learn about the new CSS random() function, now available to experiment with in Safari Technology Preview. There are lots of amazing ways to use random values in CSS. Learn more in "Rolling the Dice with CSS random()": https://t.co/JdFtXP3qTm" / X](https://x.com/webkit/status/1958608369134280951) — *by @webkit, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [@csstools/postcss-random-function](https://www.npmjs.com/package/@csstools/postcss-random-function) `v4.0.5` — Use the random function in CSS

## 📰 Ecosystem Blogs & Articles

- [medium.com](https://medium.com/@arnoldgunter/why-i-love-to-use-the-new-css-random-function-2a7a0cb56500) *(medium.com)*
  > \*\*Syntax & Usage:\*\* Typically written as \`random(min, max, step?)\` Bringing native randomness bridges a massive gap for frontend design—unlocking organic animations, fluid particle fields, and unique micro-interactions natively in stylesheets
- [css-tricks.com](https://css-tricks.com/the-importance-of-native-randomness-in-css) *(css-tricks.com)*
  > \*\*Core Motivation:\*\* CSS has historically been declarative and deterministic Bringing native randomness bridges a massive gap for frontend design—unlocking organic animations, fluid particle fields, and unique micro-interactions natively in styleshee...
- [daily.dev](https://daily.dev/posts/let-s-use-the-emergent-css-random-function-in-all-the-browsers-yi8ggjuka) *(daily.dev)*
  > \*\*Ecosystem Impact:\*\* Shows that browser rollout has begun, with Safari supporting the feature (starting with version 26.2 / technical previews)
- [master.dev](https://blog.master.dev/more-css-random-learning-through-experiments) *(blog.master.dev)*
  > \*\*Content:\*\* Exploratory walk-throughs breaking down syntax rules (like the strict requirement for matching units) and showcasing experimental visual implementations \*\*Key Experiments:\*\* Developers have used it to build complex, purely CSS-driven com...
- [Experimenting with the new pure CSS random() function \| Polypane](https://polypane.app/blog/experimenting-with-the-new-pure-css-random-function) *(polypane.app)*
  > \*\*Key Experiments:\*\* Developers have used it to build complex, purely CSS-driven components like \*rotating star fields, bokeh backgrounds, falling flower petals, and interactive polaroid stacks\* \*\*Content:\*\* Articles such as \*“Experimenting with the ...
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
- [The CSS random() function](https://sandeep.ramgolam.com/blog/css-random-function-guide) *(sandeep.ramgolam.com)*
  > // Set random CSS variables document.querySelectorAll(&#x27;.random-item&#x27;).forEach(el =&gt; { el.style.setProperty(&#x27;--random-x&#x27;, Math.random() \* 100 + &#x27;%&#x27;); });
- [Let’s Use the Emergent CSS random() Function in all the Browsers \| CSS-Tricks](https://css-tricks.com/css-random-function-polyfill) *(css-tricks.com · 2026-08-31T15:13:17)*
  > Note: In the original starfield demo, most of the random values were used inline, which is admittedly more elegant. The spec that includes random() makes it clear that this kind of function “can be used in place of any part of any property’s value,” ...
- [Very Early Playing with random() in CSS – Master.dev Blog](https://frontendmasters.com/blog/very-early-playing-with-random-in-css) *(frontendmasters.com · 2025-08-25T00:00:00)*
  > WebKit/Safari has rolled out a preview version of random() in CSS. Random functions in programming languages are amazing. You can use them to generate variations, to make things feel spontaneous and fresh. Until now there was no way to create a rando...
- [Random Numbers in CSS: From Workarounds to Native Support \| Digital Thrive US](https://digitalthriveai.com/en-us/resources/web-development/random-numbers-css) *(digitalthriveai.com)*
  > Learn how to generate random values in CSS, from JavaScript workarounds to the new native random() function. Covers syntax, shared randomness patterns, and practical examples.
- [CSS random() - AllDevBlogs](https://www.alldevblogs.com/article/erik-runyon/css-random) *(alldevblogs.com · 2025-10-08T02:00:00)*
  > Explores Safari&#x27;s new CSS random() function, its current capabilities, limitations, and potential use cases for generating random values in styles.
- [CSS math-random() in Production: Native Randomness Without JavaScript](https://www.sitepoint.com/css-mathrandom-in-production-native-randomness-without-javascript) *(sitepoint.com · 2026-05-10T09:49:59)*
  > The per-element keyword tells the browser to treat each element independently, producing six visually distinct boxes from identical markup and a single CSS rule. The random() function &lt;strong&gt;returns a numeric value within a continuous range&lt;/strong&gt;...
- [CSS Can Finally Be Random - YouTube](https://www.youtube.com/watch?v=Uy3xsfAD8s0) *(youtube.com · 2026-08-14T09:30:25)*
  > Source Code 👉 https://coding2go.com/New to CSS? Beginner Course 👉https://coding2go.com/products/html-css-masterclassLearn how to use the new random() funct
- [Let’s Use the Emergent CSS random() Perform in all of the Browsers – blog.aimactgrow.com](https://blog.aimactgrow.com/lets-use-the-emergent-css-random-perform-in-all-of-the-browsers) *(blog.aimactgrow.com · 2026-09-01T05:35:11)*
  > With all these obstacles in thoughts, an individual must be a particular breed of loopy to try to polyfill CSS random(). One of many commenters on a neat YouTube demo of the function marvelled that it’s a “function that works ONLY IN SAFARI?!?
- [Throwing Confetti with CSS Random - Schalk Neethling - Open Web Engineer](https://schalkneethling.com/posts/throwing-confetti-with-css-random) *(schalkneethling.com · 2026-07-13T00:00:00)*
  > Which brings us to the state of the feature. &lt;strong&gt;random() is new enough that the specification moved while the first implementation was shipping, and new enough that the two engines that have it do not agree on all of it&lt;/strong&gt;.
- [Experimenting with random() in CSS \| daily.dev](https://daily.dev/posts/experimenting-with-random-in-css-ouj2w2eta) *(daily.dev · 2026-06-29T04:26:17)*
  > &lt;strong&gt;CSS is gaining a new \`random()\` function that generates random values for properties, enabling creative generative designs&lt;/strong&gt;. The function supports min/max ranges, step values, and an \`element-scoped\` keyword to ensure consistent value...
- [Exploring the CSS random() Function](https://blog.openreplay.com/css-random-function) *(blog.openreplay.com · 2026-03-17T00:00:00)*
  > That dependency may soon shrink. The CSS random() function, part of the CSS Values and Units Module Level 5 specification, &lt;strong&gt;lets stylesheets generate random numeric values directly, no scripting required&lt;/strong&gt;.
- [Rolling the dice with CSS random() \| Hacker News](https://news.ycombinator.com/item?id=44977833) *(news.ycombinator.com · 2025-08-25T04:14:08)*
  > https://www.sitepoint.com/the-cicada-principle-and-why-it-ma · https://lea.verou.me/blog/2020/07/the-cicada-principle-revis
- [Chris’ Corner: Things Getting Better – CodePen](https://blog.codepen.io/2026/09/14/chris-corner-things-getting-better) *(blog.codepen.io)*
  > Chris&#8217; Corner: Things Getting Better &#8211; CodePen CodePen Search &larr; Back to Blog Chris&#8217; Corner: Things Getting Better Posted Sep 14 2026 by Chris Coyier Jump to Docs Navigation Very cool that random() in CSS is coming to Chrome to ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17343.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > Re: \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: CSS random() function Rick Byers Wed, 02 Sep 2026 08:12:47 -0700 LGTM1 On Wed, Aug 26, 2026 at 3:47 PM 'Munira Tursu...
- [Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30754) *(github.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > css.types.random (https://&lt;strong&gt;chromestatus.com/feature/5324559251275776&lt;/strong&gt;)
- [\[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17310.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > \[blink-dev\] Intent to Ship: CSS random() function Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: CSS random() function 'Munira Tursunova' via blink-dev Wed, 26 Aug 2026 12:48:09 -0700 \*Contact emails\* \[email&#160;protecte...
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
- [\[css-values-5\] Should random() and random-item() share indexing? · Issue #2663 · mozilla/wg-decisions](https://github.com/mozilla/wg-decisions/issues/2663) *(github.com)*
- [docs(css): update random() to new random-key syntax by BHUVANSH855 · Pull Request #45729 · mdn/content](https://github.com/mdn/content/pull/45729) *(github.com)*
- [The syntax for CSS random() is out-of-date · Issue #44502 · mdn/content](https://github.com/mdn/content/issues/44502) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 62 result(s) found across 13 planned queries — **26 verified relevant**
  - `"chromestatus.com/feature/5324559251275776" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"webkit.org/blog/17285/rolling-the-dice-with-css-random" -site:webkit.org` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"css-tricks.com/almanac/functions/r/random" -site:css-tricks.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"www.w3.org/TR/css-values-5" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"CSS random() function" API` — *Core feature API query* (8 returned)
  - `"CSS random() function" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"random-key" OR "random()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS random() function" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS random() function" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"CSS random()" tutorial OR guide OR generative` — *Practical developer guides, tutorials, and generative design examples using the CSS random() function.* (8 returned)
  - `"random(" "css-values-5" AND ("random-key" OR "cache")` — *Specification-accurate code snippets and syntax details demonstrating caching controls and random-key usage.* (8 returned)
  - `"CSS random()" ("Intent to Prototype" OR "Intent to Ship" OR WebKit OR Chromium)` — *Browser engine tracking, release announcements, and implementation status across Safari, Chrome, and Firefox.* (1 returned)
  - `"CSS random" (site:news.ycombinator.com OR site:reddit.com/r/webdev OR site:reddit.com/r/css)` — *Developer reactions, use cases, and ecosystem sentiment across web developer communities and forums.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **6 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **1 verified relevant**
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 7 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 4 result(s) found — **2 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 8 result(s) found — **1 verified relevant**
- **web-features mapping:** *group "random-function", shared with 0 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "random-function": Chrome 12.5% passing (stable)*
- **Sources cited by the AI synthesis:** 7 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 2 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 11 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5324559251275776)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5324559251275776)
- [Specification](https://www.w3.org/TR/css-values-5/#random)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/413385732)
