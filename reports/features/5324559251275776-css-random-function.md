# CSS random() function

> **Report Week:** 2026-W38 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

The random() function brings generative randomness to CSS, allowing web authors to generate a random numeric value within a specified range.  For example, web authors can use random() to scatter elements randomly within their container: .dot {   /\* Position each dot randomly \*/   position: absolute;   top: random(0%, 100%);   left: random(0%, 100%); }  This feature also includes caching controls. By default, each random() function resolves to a new, distinct value. Web authors can override this default by passing a &lt;random-key&gt; value as the function's first argument to control how random values are shared across properties and elements.

### Motivation

The CSS random() function provides a native way to generate random values directly in CSS without relying on JavaScript, reducing code complexity while making it easier for developers to create varied and dynamic designs.

## Ecosystem Status

- **Momentum:** High (415 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The CSS \`random()\` function brings native, generative numeric randomness and fine-grained caching keys directly into CSS stylesheets, eliminating the need for JavaScript or preprocessor workarounds. Pioneered experimentally by WebKit and now shipping by default in Chromium 155, the feature enjoys strong multi-engine consensus across standards working groups. While full cross-engine baseline interoperability is still pending Firefox implementation, developer enthusiasm is remarkably high for creative layout and animation use cases.

### Recommendations
- Actionable Advice: Adopt \`random()\` immediately as a progressive enhancement using \`@supports (top: random(0px, 100px))\` or fallback property declarations for non-critical visual flair like particles, organic delays, and decorative jitter. Avoid coupling core application state or critical layouts to unresolved randomness until Gecko completes its implementation and the feature reaches Baseline Widely Available.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Yeah the thing the WG settled on was a lot saner than the initial proposal :)..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "WebKit on X: "Learn about the new CSS random() function, now available to experiment with in Safari Technology Preview. There are lots of amazing ways to use random values in CSS. Learn more in "Rolling the Dice with CSS random()": https://t.co/JdFtXP3qTm" / X" (0 points, 0 comments).

## Standards Positions

- **Mozilla:** [CSS Values 5: random()](https://github.com/mozilla/standards-positions/issues/809) [closed]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [WebKit on X: "Learn about the new CSS random() function, now available to experiment with in Safari Technology Preview. There are lots of amazing ways to use random values in CSS. Learn more in "Rolling the Dice with CSS random()": https://t.co/JdFtXP3qTm" / X](https://x.com/webkit/status/1958608369134280951) — *by @webkit, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [@csstools/postcss-random-function](https://www.npmjs.com/package/@csstools/postcss-random-function) `v4.0.2` — Use the random function in CSS
- [@kingoftac/postcss-plugin-random](https://www.npmjs.com/package/@kingoftac/postcss-plugin-random) `v0.1.3` — A PostCSS plugin for the upcoming CSS random() function.

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17343.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: CSS random() function Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS random() function Rick Byers Wed, 02 Sep 2026 08:12:47 -0700 LGTM1 On Wed, Aug 26, 2026 at 3:47 PM 'Munira Tursunova' via ...
- [\[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17310.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: CSS random() function Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS random() function 'Munira Tursunova' via blink-dev Wed, 26 Aug 2026 12:48:09 -0700 *Contact emails* [email&#160;protected] *Explai...
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17344.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: CSS random() function Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS random() function Yoav Weiss (@Shopify) Wed, 02 Sep 2026 08:13:20 -0700 LGTM2 On Wed, Sep 2, 2026 at 5:12 PM Rick Byers < ...
- [CSS Random() Snow](https://codepen.io/DenDionigi/pen/ogxJdqr) *(codepen.io)*
  > &lt;!-- The Content --&gt; &lt;section class=&quot;main&quot;&gt; &lt;div class=&quot;intro&quot;&gt; &lt;h1&gt;Winter has come&lt;/h1&gt; &lt;h2&gt;Just relax and enjoy life.&lt;/h2&gt; &lt;p&gt;This demo has also a new CSS feature called random(), ...
- [You no longer need JavaScript: an overview of what makes modern CSS so awesome - Divisions by zero](https://lemmy.dbzer0.com/post/52165294) *(lemmy.dbzer0.com)*
  > How timely a question: https://<strong>webkit.org/blog/17285/rolling-the-dice-with-css-random</strong>/ tl;dr: CSS is getting genuine random for exactly that soon · feef@lemmy.worldEnglish · 2·2 days ago · (Not my code) https://codepen.io/beben-koben...
- [CSS random() function](https://chromestatus.com/feature/5324559251275776) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [CSS random() \| Erik Runyon](https://erikrunyon.com/2025/10/css-random) *(erikrunyon.com · 2025-10-08T00:00:00)*
  > The basic format of the function follows the pattern “<strong>random(min, max, step)</strong>”. For instance, if you want to assign an element a random height between 50px and 200px, you would use “height: random(50px, 200px)”. You can also include a...
- [Experimenting with the new pure CSS random() function \| Polypane](https://polypane.app/blog/experimenting-with-the-new-pure-css-random-function) *(polypane.app · 2026-06-24T00:00:00)*
  > CSS is getting a random() function that <strong>lets you set properties with a random value</strong>, opening up a ton of interesting creative possibilities. In this article…
- [The CSS random() function](https://sandeep.ramgolam.com/blog/css-random-function-guide) *(sandeep.ramgolam.com)*
  > // Set random CSS variables document.querySelectorAll(&#x27;.random-item&#x27;).forEach(el =&gt; { el.style.setProperty(&#x27;--random-x&#x27;, Math.random() * 100 + &#x27;%&#x27;); });
- [Let’s Use the Emergent CSS random() Function in all the Browsers \| CSS-Tricks](https://css-tricks.com/css-random-function-polyfill) *(css-tricks.com · 2026-08-31T15:15:01)*
  > But if we had a list of specific colors we wanted to randomly choose from, we can’t do that easily, which is why the spec for the CSS values and units module mentions the random-item() function, although no browser currently implements it (except for...
- [Let’s Use the Emergent CSS random() Function in all the Browsers](https://247webdevs.blogspot.com/2026/08/lets-use-emergent-css-random-function.html) *(247webdevs.blogspot.com · 2026-08-31T16:22:01)*
  > The journey to create a polyfill for the upcoming CSS random() function that works in all browsers.
- [CSS random() Function for Per-Element Random Values](https://modern-css.com/random-values-without-javascript) *(modern-css.com · 2026-04-17T09:30:00)*
  > Randomising layout details like rotation, size, or delay used to mean Math.random() in JavaScript and inline style attributes. The CSS random() function <strong>generates a random value per element directly in CSS</strong>.
- [Random Numbers in CSS: From Workarounds to Native Support \| Digital Thrive US](https://digitalthriveai.com/en-us/resources/web-development/random-numbers-css) *(digitalthriveai.com)*
  > Learn how to generate random values in CSS, from JavaScript workarounds to the new native random() function. Covers syntax, shared randomness patterns, and practical examples.
- [CSS random() - AllDevBlogs](https://www.alldevblogs.com/article/erik-runyon/css-random) *(alldevblogs.com · 2025-10-08T02:00:00)*
  > Explores Safari&#x27;s new CSS random() function, its current capabilities, limitations, and potential use cases for generating random values in styles.
- [CSS math-random() in Production: Native Randomness Without JavaScript](https://www.sitepoint.com/css-mathrandom-in-production-native-randomness-without-javascript) *(sitepoint.com · 2026-05-10T09:49:59)*
  > The per-element keyword tells the browser to treat each element independently, producing six visually distinct boxes from identical markup and a single CSS rule. The random() function <strong>returns a numeric value within a continuous range</strong>...
- [Let’s Use the Emergent CSS random() Perform in all of the Browsers – blog.aimactgrow.com](https://blog.aimactgrow.com/lets-use-the-emergent-css-random-perform-in-all-of-the-browsers) *(blog.aimactgrow.com · 2026-09-01T05:35:11)*
  > And but, within the case of random(), it’s darkly poetic {that a} function based mostly on likelihood seems in an surprising place the place many people can’t use it. In actual fact, even Safari customers might profit from my css-random-polyfill bund...
- [Achieving Random Background Colors in CSS — tutorialpedia.org](https://www.tutorialpedia.org/blog/how-to-do-a-random-background-color-in-css) *(tutorialpedia.org)*
  > The Math.random() function <strong>generates a random number between 0 (inclusive) and 1 (exclusive).</strong> We multiply it by 16777215 (which is 0xFFFFFF in decimal), the largest possible value for a 24 - bit hexadecimal color code.
- [JavaScript Random. Lessons for beginners. W3Schools in English](https://w3schoolsua.github.io/js/js_random_en.html) *(w3schoolsua.github.io)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [Random key generator](https://codepen.io/Jleeto/pen/qZKXyB) *(codepen.io)*
  > &lt;div class=&quot;app&quot;&gt; &lt;button onclick=&quot;randomStringToInput(this)&quot;&gt;&lt;a&gt;Generate key&lt;/a&gt;&lt;/button&gt; &lt;input type=&quot;text&quot; name=&quot;kek&quot; readonly=&quot;readonly&quot; value=&quot;&quot;&gt; &lt...
- [@alikia/random-key - JSR](https://jsr.io/@alikia/random-key) *(jsr.io)*
  > random-key is <strong>a JavaScript library for generating random keys and strings in both browser and Node.js environments</strong>. It utilizes the built-in cryptographic capabilities of the environment to ensure that the generated values are as sec...
- [random-key - npm](https://www.npmjs.com/package/random-key) *(npmjs.com · 2014-12-29T00:00:00)*
  > Generate random digits, with given length. optional keys: 0-9
- [JavaScript Random](https://www.w3schools.com/js/js_random.asp) *(w3schools.com)*
  > Math.random() <strong>returns a random number between 0 (inclusive), and 1 (exclusive).</strong>
- [Throwing Confetti with CSS Random - Schalk Neethling - Open Web Engineer](https://schalkneethling.com/posts/throwing-confetti-with-css-random) *(schalkneethling.com · 2026-07-13T00:00:00)*
  > Which brings us to the state of the feature. <strong>random() is new enough that the specification moved while the first implementation was shipping, and new enough that the two engines that have it do not agree on all of it</strong>.
- [JavaScript PWA Guide 2026: Build Progressive Web Apps with TypeScript](https://reintech.io/blog/javascript-pwa-progressive-web-apps-complete-guide-2026) *(reintech.io)*
  > Don&#x27;t try to implement every feature at once. <strong>Begin with reliable caching, add offline support, then layer in push notifications and background sync as your users need them</strong>. PWAs are progressive by nature—build progressively too...
- [How to create randomly generated backgrounds with the CSS Paint API - LogRocket Blog](https://blog.logrocket.com/how-to-create-randomly-generated-backgrounds-with-the-css-paint-api) *(blog.logrocket.com · 2024-06-04T21:29:49)*
  > Now that you’re comfortable using the CSS Paint API, let’s explore how we can create randomly generated backgrounds using the CSS Paint API. The Math.<strong>random() function is the key to making randomly generated backgrounds</strong>.
- [Tutorial: Randomness in generative art (Beginner)](https://www.linkedin.com/pulse/randomness-generative-art-10-print-jonathan-barbeau) *(linkedin.com · 2023-01-24T00:30:17)*
  > Here&#x27;s an example of how you can use the random() function and a simple if-else statement to replicate the 10 PRINT program in p5.js
- [CSS Values and Units Module Level 5 に追加された random() 関数が面白そう - WWW WATCH](https://hyper-text.org/archives/2023/11/css_random_functions) *(hyper-text.org · 2023-11-14T06:03:16)*
  > 一方で、下記のように、片方のプロパティにだけ &lt;random-caching-options&gt; （例として --x） を指定すると、この 2 つは random-caching key （ランダムキャッシュ Key） が異なると判断され、値の範囲は同じながら、width と height には別々の値が返され、.random-square にマッチする要素はそのランダムなサイズで一致することになります。
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17350.html) *(mail-archive.com)*
  > See: issues.chromium.org/issues/40068516 &lt;https://issues.chromium.org/issues/40068516&gt;. *Will this feature be supported on all six Blink platforms (Windows, Mac, Linux, ChromeOS, Android, and Android WebView)?* Yes *Is this feature fully tested...
- [Intent to Ship: crypto.randomUUID()](https://groups.google.com/a/chromium.org/g/blink-dev/c/zvFUdYCvZew/m/dzH8rJhVAgAJ) *(groups.google.com)*
  > Discussion thread started: https://lists.webkit.org/pipermail/webkit-dev/2021-April/031783.html Web developers: Positive · - In twitter post (https://twitter.com/tomayac/status/1380445180403318785) from when randomUUID was landed behind flag, respons...
- [Safari Technology Preview 252 adds @supports named-feature(), unprefixed user-select and two accessible-name fixes](https://dev.to/leobaniak/safari-technology-preview-252-adds-supports-named-feature-unprefixed-user-select-and-two-50d5) *(dev.to · Leo · Sep 12)*
  > WebKit's 11 September preview adds a named-feature() function to @supports, exposes CSSConditionRule.supports and CSSMediaRule.matches on the CSSOM, ships the unprefixed user-select property, allows percentage values in text-decoration-inset, and cle...
- [How to Create a Responsive Restaurant Menu Card Using HTML, CSS and JavaScript](https://dev.to/madiayaqub/how-to-create-a-responsive-restaurant-menu-card-using-html-css-and-javascript-aca) *(dev.to · Madia Yaqub · Sep 12)*
  > How to Create a Responsive Restaurant Menu Card Using HTML, CSS and JavaScript  Restaurant websites...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17343.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > Re: [blink-dev] Intent to Ship: CSS random() function Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS random() function Rick Byers Wed, 02 Sep 2026 08:12:47 -0700 LGTM1 On Wed, Aug 26, 2026 at 3:47 PM 'Munira Tursu...
- [\[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17310.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > [blink-dev] Intent to Ship: CSS random() function Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS random() function 'Munira Tursunova' via blink-dev Wed, 26 Aug 2026 12:48:09 -0700 *Contact emails* [email&#160;protecte...
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17344.html) *(mail-archive.com)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > Re: [blink-dev] Intent to Ship: CSS random() function Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: CSS random() function Yoav Weiss (@Shopify) Wed, 02 Sep 2026 08:13:20 -0700 LGTM2 On Wed, Sep 2, 2026 at 5:12 PM Ric...
- [CSS random() function · Issue #715 · mdn/mdn](https://github.com/mdn/mdn/issues/715) *(github.com · 2025-08-24T12:16:41)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > CSS random() function · Issue #715 · mdn/mdn · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session. You sig...
- [CSS Random() Snow](https://codepen.io/DenDionigi/pen/ogxJdqr) *(codepen.io)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > &lt;!-- The Content --&gt; &lt;section class=&quot;main&quot;&gt; &lt;div class=&quot;intro&quot;&gt; &lt;h1&gt;Winter has come&lt;/h1&gt; &lt;h2&gt;Just relax and enjoy life.&lt;/h2&gt; &lt;p&gt;This demo has also a new CSS feature called ...
- [You no longer need JavaScript: an overview of what makes modern CSS so awesome - Divisions by zero](https://lemmy.dbzer0.com/post/52165294) *(lemmy.dbzer0.com)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > How timely a question: https://<strong>webkit.org/blog/17285/rolling-the-dice-with-css-random</strong>/ tl;dr: CSS is getting genuine random for exactly that soon · feef@lemmy.worldEnglish · 2·2 days ago · (Not my code) https://codepen.io/b...

## 📚 Platform Documentation & Specifications

- [CSS random() function · Issue #715 · mdn/mdn](https://github.com/mdn/mdn/issues/715) *(github.com)*
- [random() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/random) *(developer.mozilla.org)*
- [randID---JavaScript-random-Key-generator/index.html at master · Frontend-io/randID---JavaScript-random-Key-generator](https://github.com/Frontend-io/randID---JavaScript-random-Key-generator/blob/master/index.html) *(github.com)*
- [\[css-values-5\] Maybe min, max and step should not be part of the random-caching-key · Issue #11742 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11742) *(github.com)*
- [\[css-forms-1\] \`control-value()\` function · Issue #7869 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7869) *(github.com)*
- [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) *(developer.mozilla.org)*
- [attr() CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/attr) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 54 result(s) found across 13 planned queries — **34 verified relevant**
  - `"chromestatus.com/feature/5324559251275776" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"webkit.org/blog/17285/rolling-the-dice-with-css-random" -site:webkit.org` *(Reverse Citation)* — *Inbound citations linking to Explainer* (7 returned)
  - `"css-tricks.com/almanac/functions/r/random" -site:css-tricks.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"www.w3.org/TR/css-values-5" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"CSS random() function" API` — *Core feature API query* (8 returned)
  - `"CSS random() function" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"random-key" OR "random()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS random() function" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS random() function" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `("CSS random()" OR "random() function") (tutorial OR guide OR "generative art") CSS` — *Find practical developer guides, tutorials, and creative experiments showcasing native CSS randomness.* (3 returned)
  - `"random()" "random-key" ("css-values-5" OR "W3C") (syntax OR caching)` — *Locate technical documentation and code examples exploring the syntax, parameter ranges, and random-key caching behavior.* (4 returned)
  - `"CSS random()" (WebKit OR Chromium OR "Intent to Ship" OR "Can I use")` — *Track browser vendor implementation progress, standards announcements, and platform release status.* (8 returned)
  - `("CSS random()" OR "CSS random function") (site:news.ycombinator.com OR site:reddit.com/r/webdev OR "Hacker News")` — *Discover community sentiment, critiques, and developer conversations about introducing non-deterministic values into CSS.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 4 result(s) found — **2 verified relevant**
- **Hacker News Algolia:** 7 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 4 result(s) found — **2 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **2 verified relevant**
- **Web Platform Tests (wpt.fyi):** 514 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 2 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5324559251275776)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5324559251275776)
- [Specification](https://www.w3.org/TR/css-values-5/#random)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/413385732)
