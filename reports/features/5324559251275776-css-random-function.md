# CSS random() function

> **Report Week:** 2026-W40 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

The random() function brings generative randomness to CSS, allowing web authors to generate a random numeric value within a specified range.  For example, web authors can use random() to scatter elements randomly within their container: .dot {   /\* Position each dot randomly \*/   position: absolute;   top: random(0%, 100%);   left: random(0%, 100%); }  This feature also includes caching controls. By default, each random() function resolves to a new, distinct value. Web authors can override this default by passing a &lt;random-key&gt; value as the function's first argument to control how random values are shared across properties and elements.

### Motivation

The CSS random() function provides a native way to generate random values directly in CSS without relying on JavaScript, reducing code complexity while making it easier for developers to create varied and dynamic designs.

## Ecosystem Status

- **Momentum:** High (465 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The CSS \`random()\` function introduces native, generative randomness to stylesheets, eliminating the historic need for runtime JavaScript math or compile-time Sass loops to produce variable layouts and animations. With WebKit having shipped initial support in Safari and Chromium enabling it by default in Chrome 156, full cross-browser interoperability is rapidly approaching as Mozilla continues its implementation. Developer reception is enthusiastically positive, welcoming the arrival of caching keys and per-element resolution as a massive ergonomic leap forward.

### Recommendations
- Actionable Advice: Treat \`random()\` as an ideal candidate for progressive enhancement today, wrapping generative accents, subtle rotations, and stagger delays inside \`@supports (top: random(0px, 1px))\` checks or falling back to static CSS. Avoid making critical layout flows strictly dependent on \`random()\` until Firefox completes its implementation and the feature reaches Baseline Widely Available.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Yeah the thing the WG settled on was a lot saner than the initial proposal :)..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "WebKit on X: "Learn about the new CSS random() function, now available to experiment with in Safari Technology Preview. There are lots of amazing ways to use random values in CSS. Learn more in "Rolling the Dice with CSS random()": https://t.co/JdFtXP3qTm" / X" (0 points, 0 comments).

## Standards Positions

- **Mozilla:** [CSS Values 5: random()](https://github.com/mozilla/standards-positions/issues/809) [closed]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [WebKit on X: "Learn about the new CSS random() function, now available to experiment with in Safari Technology Preview. There are lots of amazing ways to use random values in CSS. Learn more in "Rolling the Dice with CSS random()": https://t.co/JdFtXP3qTm" / X](https://x.com/webkit/status/1958608369134280951) — *by @webkit, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [@csstools/postcss-random-function](https://www.npmjs.com/package/@csstools/postcss-random-function) `v4.0.3` — Use the random function in CSS
- [@kingoftac/postcss-plugin-random](https://www.npmjs.com/package/@kingoftac/postcss-plugin-random) `v0.1.3` — A PostCSS plugin for the upcoming CSS random() function.

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFVtph6UTR3P-PJSk9auZdSM2-wQLZh1u6X3XZ7CcNJjTk9vVne8JuDsfaa3yxPtt3JBGXaCM7zM1q1gyYJdws-nqQCZB7ywklUZIIFf1s5YB35BeAEutex0w==) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the CSS `random()` Function?  Specified under the **CSS Values and Units Module Level 5**, `random()` brings native, generative randomness directly to stylesheets. Traditionally, front-end developers had to rely either on JavaScr
- [medium.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHGjnmxKazSgMhUVY3fkkfRirVwdGDLaOjUw15VKJVuibCce34PAw_h5PY8uSQtZ4b1CsMtjLo8bM9UDNtNHCMPqTtetnwD96b9k_EWop_M8n1yNbL-hk0kvBt5zUg3eM4W95uV1Rv5EeIN-8xfI_WYZ4ozeZKeewFj0Um0vqb5ij9LSHB67IwtuhnQ8_WzlSe2) *(vertexaisearch.cloud.google.com)*
  > Medium Why I Love to Use the NEW CSS random() Function | by Arnold Gunter | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in Arnold Gunter I&#x27;m Arnold—a tech nerd into fitness and self-growth. Love sharing insights ...
- [master.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG3mkbrB_VQgOh8pXL55zdYBTwDeDwtGjEhx1_t4HoRDmB88iazGEkjAOuaaku6TOf3kVKiGFtgZMmf4x6hFGUALDwe2MLimDjazKME7-Qc4V_EpX05VjpzsdTKGSgwHAA1O2iF6kFWRPb1KcEwgaN_ADGnJg==) *(vertexaisearch.cloud.google.com)*
  > Very Early Playing with random() in CSS &#8211; Master.dev Blog Blog CSS Design random() Very Early Playing with random() in CSS WebKit/Safari has rolled out a preview version of random() in CSS. Random functions in programming languages are amazing....
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFHJNqDMjV-VB6SqTVSUEyF-eZI9U4wrJwrssnmtESkLoNPxTCcSZMqWwB55nk5i2izJa4JEOn3lBSNYesQE6wOAgVL9y5tyXCQqsgad4Wn8xUYxErsllzdllVOXvVXyBuD7TGaRL6ofg==) *(vertexaisearch.cloud.google.com)*
  > random() | CSS-Tricks Skip to main content CSS-Tricks Since 2007 CSS Almanac &rarr; Functions &rarr; R &rarr; random() random() Sunkanmi Fafowora on Oct 31, 2024 Experimental: Check browser support before using this in production. The random() functi...
- [alvaromontoro.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHPz_nn1hRydownhQ5aqL8xTjAebYFQEgRSyeQQrfBncpSfvTenPQkwf_rdrhEhmgvS3gEqBeHYnKazd49-RZz7JryCVZnt543hrxUGhKZhnQJYEWQ1MbH1xqObFhUQIWUvg5oTo0LbQRTfWZlM_Ko0GbsEtslo) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the CSS `random()` Function?  Specified under the **CSS Values and Units Module Level 5**, `random()` brings native, generative randomness directly to stylesheets. Traditionally, front-end developers had to rely either on JavaScr
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFjiY24eOprmaQwYjHMcsHuMptLzNp304z1UGZ-hU7_I5Oxh_isCZjAKhF1XT32pqLUa6BzIMr6Xx2sSnGOZFwOJ6_NYz7HM4nQzErktyU51z5bMahX6vOTavsB) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the CSS `random()` Function?  Specified under the **CSS Values and Units Module Level 5**, `random()` brings native, generative randomness directly to stylesheets. Traditionally, front-end developers had to rely either on JavaScr
- [webkit.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFWM46V2MS1_LJn-zKtB_gKsDxvAd2cr_0-v45Vc7VttG49Sg-fazbmS7_eSwlTkPszp67hR8ym2ffn1BMqTReSlhPnQNSwDXbJP2ppfJfiHObtdGQ9P0ltj7xO4fQzqEvnTqmp9CurKwaH4IOH9irKAzq8vk0=) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the CSS `random()` Function?  Specified under the **CSS Values and Units Module Level 5**, `random()` brings native, generative randomness directly to stylesheets. Traditionally, front-end developers had to rely either on JavaScr
- [mobileappsdevelopmentlebanon.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFLz7_BGAC5vZyl28zRktzZ7DdQrQeTy6L7iEMDkHS_TkqcpBwJXGy0KojIJU7YFy0QrJ7qpjuZ2j1kQzI9g9upLPzznNYU4i0L87Ky-7JZRJcnjbzotoIUYHJ4cM-dXsnjz8C0RGB7z3o4n2dRtfgj-fWPiezlja3iZWP9LPo6o60FNf1Ivmcxpmj4QiKZLRbJ9_RpRoex_FTt) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the CSS `random()` Function?  Specified under the **CSS Values and Units Module Level 5**, `random()` brings native, generative randomness directly to stylesheets. Traditionally, front-end developers had to rely either on JavaScr
- [artdirectiondaily.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGryMmo1MRk0UbQcQBdfBc8_fUsBqR5LlN_1l4sdx4GVDmY6POJ1g-kkIwIMOyma5QH45tG0Akl8BissAl7qhMGHlfhD3oVDEuFnfZDdnWAYoEDX-Dkq-Ffjs-KLWQ2Sr0gvjIhiLQqmPth0BqON0X95iUsU3e2l9VZGhzRWnKfE3w=) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the CSS `random()` Function?  Specified under the **CSS Values and Units Module Level 5**, `random()` brings native, generative randomness directly to stylesheets. Traditionally, front-end developers had to rely either on JavaScr
- [polypane.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH45UzA5hcBczGIyWUB6MqcsauPW98gmAvwHjAr8mbm0xcB-zag8VzRyma8Y13QpcpIXo0twDU2prcBWD4lfOwA3lhUFsCAkMKVngkJqsLlyGWDH6eDzCLeJqz71TgoU3i2c32x3k8fEWvB-I5GkZ6661q7yKwzkjrR6sl-1EoagTm_i9Y=) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the CSS `random()` Function?  Specified under the **CSS Values and Units Module Level 5**, `random()` brings native, generative randomness directly to stylesheets. Traditionally, front-end developers had to rely either on JavaScr
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEa9x9Vy9f-qtY3PhrmUe77lOtEZdrIygiOIx3uRqG6-e2ph6LCbLGfrrGgVlpeioNuUYmA1obpHZ9Dnl9OD6_IZDiydQWOntKJNK7JGrfijY8unt1er2AMz58pfpS7AlsmEkN106z1MX4UhN5MM1He5IIdK3lXrtC7TGbSq2w=) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the CSS `random()` Function?  Specified under the **CSS Values and Units Module Level 5**, `random()` brings native, generative randomness directly to stylesheets. Traditionally, front-end developers had to rely either on JavaScr
- [caniuse.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH5z6wWjex6MY8op5GBQaOrYwbdykqSTXShTbfPpnkjFf86OiRpy_7AK2oJnbC8vIpqUM_OfiyqXuMIcL88x1Ggej0mCc6szcOt5AmNWFqMKFwDqSbNgTKjLhM=) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the CSS `random()` Function?  Specified under the **CSS Values and Units Module Level 5**, `random()` brings native, generative randomness directly to stylesheets. Traditionally, front-end developers had to rely either on JavaScr
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHG9iVmHEuEFBBNuqoezVrBZkjBPCRERwLgkbkvidlqhBfBBKNHLiEh9-ywIjITROs9LABHZU0y84sO8fcjMt2SqWuNfhFTEHXB0jNoZNAVP-NEswyaYHOlJXTxr2Pj7Qp8wkiOquRlwf2n) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the CSS `random()` Function?  Specified under the **CSS Values and Units Module Level 5**, `random()` brings native, generative randomness directly to stylesheets. Traditionally, front-end developers had to rely either on JavaScr
- [daily.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHWks42mInWquqIhbByuz2Pkv4GPATqMrXciWG7u2O_SClYk-L8IU7eBQ6FJP2f9uPg1Oe3ecHjsROU0qKZCB177-97UfX3rWB5yEeJSU9eSa0OK1q6uVREJlKvbhsc4MS0a8deHgQ4zgpjwVaNEuxmj8FlLmTQeFPHiBSMJl6PLeRmBWyZPiIW2JNJC16RMDWCICHrreU=) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the CSS `random()` Function?  Specified under the **CSS Values and Units Module Level 5**, `random()` brings native, generative randomness directly to stylesheets. Traditionally, front-end developers had to rely either on JavaScr
- [brandingagencylebanon.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHYovvzPxmYwmamy9IdMSrfl9eSxLea2ESvWU1BzKbZ8CHQAB98HpqGXQ9wcho8lmW7OD9eU_JI46z8_uxZSMb7DA78lGsoPHloKoVJcozMktbKB3UeghQIlQt9p9iIpo-cumgKCJtlJVgupSrqKesJXETgMbAjEziQPAE2oL7NEuC9GpxEZ49wGe_smrvyc_EkRcE=) *(vertexaisearch.cloud.google.com)*
  > ### Summary: What is the CSS `random()` Function?  Specified under the **CSS Values and Units Module Level 5**, `random()` brings native, generative randomness directly to stylesheets. Traditionally, front-end developers had to rely either on JavaScr
- [\[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17310.html) *(mail-archive.com)*
  > *Initial public proposal* *No information provided* *Search tags* random &lt;https://chromestatus.com/features#tags:random&gt; *TAG review* *No information provided* *TAG review status* Pending *Goals for experimentation* None *Risks* *Interoperabili...
- [CSS Random() Snow](https://codepen.io/DenDionigi/pen/ogxJdqr) *(codepen.io)*
  > &lt;!-- The Content --&gt; &lt;section class=&quot;main&quot;&gt; &lt;div class=&quot;intro&quot;&gt; &lt;h1&gt;Winter has come&lt;/h1&gt; &lt;h2&gt;Just relax and enjoy life.&lt;/h2&gt; &lt;p&gt;This demo has also a new CSS feature called random(), ...
- [You no longer need JavaScript: an overview of what makes modern CSS so awesome - Divisions by zero](https://lemmy.dbzer0.com/post/52165294) *(lemmy.dbzer0.com)*
  > How timely a question: https://<strong>webkit.org/blog/17285/rolling-the-dice-with-css-random</strong>/ tl;dr: CSS is getting genuine random for exactly that soon · feef@lemmy.worldEnglish · 2·2 days ago · (Not my code) https://codepen.io/beben-koben...
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17344.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Wed, Aug 26, 2026 ...3.org/TR/css-values-5/#random &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>The random() function brings generative randomness to CSS, allowing web &gt;&gt; authors to generate a random numeric value within...
- [CSS random() \| Erik Runyon](https://erikrunyon.com/2025/10/css-random) *(erikrunyon.com · 2025-10-08T00:00:00)*
  > The basic format of the function follows the pattern “<strong>random(min, max, step)</strong>”. For instance, if you want to assign an element a random height between 50px and 200px, you would use “height: random(50px, 200px)”. You can also include a...
- [CSS random() function](https://chromestatus.com/feature/5324559251275776) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [The CSS random() function](https://sandeep.ramgolam.com/blog/css-random-function-guide) *(sandeep.ramgolam.com)*
  > // Set random CSS variables document.querySelectorAll(&#x27;.random-item&#x27;).forEach(el =&gt; { el.style.setProperty(&#x27;--random-x&#x27;, Math.random() * 100 + &#x27;%&#x27;); });
- [Let’s Use the Emergent CSS random() Function in all the Browsers \| CSS-Tricks](https://css-tricks.com/css-random-function-polyfill) *(css-tricks.com · 2026-08-31T15:13:17)*
  > But if we had a list of specific colors we wanted to randomly choose from, we can’t do that easily, which is why the spec for the CSS values and units module mentions the random-item() function, although no browser currently implements it (except for...
- [Experimenting with the new pure CSS random() function \| Polypane](https://polypane.app/blog/experimenting-with-the-new-pure-css-random-function) *(polypane.app · 2026-06-24T00:00:00)*
  > We let the animation run infinitely so it just keeps looping with an ease-in-out timing function to smooth out the start and end of each pulse. By setting a random negative delay, some circles will start the animation somewhere in the middle, which m...
- [Let’s Use the Emergent CSS random() Function in all the Browsers](https://247webdevs.blogspot.com/2026/08/lets-use-emergent-css-random-function.html) *(247webdevs.blogspot.com · 2026-08-31T16:22:01)*
  > The journey to create a polyfill for the upcoming CSS random() function that works in all browsers.
- [CSS random() Function for Per-Element Random Values](https://modern-css.com/random-values-without-javascript) *(modern-css.com · 2026-04-17T09:30:00)*
  > Generate per-element random values with the CSS random(min, max) function. No JavaScript Math.random() or inline style attributes. All in CSS.
- [Random Numbers in CSS: From Workarounds to Native Support \| Digital Thrive US](https://digitalthriveai.com/en-us/resources/web-development/random-numbers-css) *(digitalthriveai.com)*
  > Learn how to generate random values in CSS, from JavaScript workarounds to the new native random() function. Covers syntax, shared randomness patterns, and practical examples.
- [CSS random() - AllDevBlogs](https://www.alldevblogs.com/article/erik-runyon/css-random) *(alldevblogs.com · 2025-10-08T02:00:00)*
  > Explores Safari&#x27;s new CSS random() function, its current capabilities, limitations, and potential use cases for generating random values in styles.
- [CSS math-random() in Production: Native Randomness Without JavaScript](https://www.sitepoint.com/css-mathrandom-in-production-native-randomness-without-javascript) *(sitepoint.com · 2026-05-10T09:49:59)*
  > It targets intermediate to advanced front-end developers comfortable with modern CSS and ready to adopt emerging specifications safely. ... where &lt;random-caching-options&gt; expands to per-element or &lt;dashed-ident&gt; (pending final spec verifi...
- [Let’s Use the Emergent CSS random() Perform in all of the Browsers – blog.aimactgrow.com](https://blog.aimactgrow.com/lets-use-the-emergent-css-random-perform-in-all-of-the-browsers) *(blog.aimactgrow.com · 2026-09-01T05:35:11)*
  > With all these obstacles in thoughts, an individual must be a particular breed of loopy to try to polyfill CSS random(). One of many commenters on a neat YouTube demo of the function marvelled that it’s a “function that works ONLY IN SAFARI?!?
- [Throwing Confetti with CSS Random - Schalk Neethling - Open Web Engineer](https://schalkneethling.com/posts/throwing-confetti-with-css-random) *(schalkneethling.com · 2026-07-13T00:00:00)*
  > Which brings us to the state of the feature. <strong>random() is new enough that the specification moved while the first implementation was shipping, and new enough that the two engines that have it do not agree on all of it</strong>.
- [Experimenting with random() in CSS \| daily.dev](https://daily.dev/posts/experimenting-with-random-in-css-ouj2w2eta) *(daily.dev · 2026-06-29T04:26:17)*
  > Practical demos include a bokeh light effect, falling cherry petals with physics-like animation, a stack of flingable Polaroid photos using checkbox state, and a visual poem with weighted random layout. The post also shows how to simulate the not-yet...
- [The Significance of Native Randomness in CSS – blog.aimactgrow.com](https://blog.aimactgrow.com/the-significance-of-native-randomness-in-css) *(blog.aimactgrow.com · 2026-05-01T10:03:57)*
  > And this occurred with the introduction of two new random features as a part of the CSS Values and Models Module Stage 5: random(): <strong>generates a random worth between a minimal and a most</strong>.
- [Very Early Playing with random() in CSS – Master.dev Blog](https://frontendmasters.com/blog/very-early-playing-with-random-in-css) *(frontendmasters.com · 2025-08-25T00:00:00)*
  > WebKit/Safari has rolled out a preview version of random() in CSS.
- [\[dev-platform\] Intent to Prototype: CSS random() math function](http://www.mail-archive.com/dev-platform@mozilla.org/msg01893.html) *(mail-archive.com)*
  > Minimum implementation is to ensure that *random()* functions are properly parsed in both registered custom property syntax matching and CSS explainers &lt;https://bugzilla.mozilla.org/show_bug.cgi?id=1800085&gt;. *Extensions Bug*: N/A *Use Counter*:...
- [WebKit Features for Safari 26.2 \| WebKit](https://webkit.org/blog/17640/webkit-features-for-safari-26-2) *(webkit.org · 2026-02-04T21:58:19)*
  > In recent years, CSS has gained many powerful mathematical abilities, adding to its maturity as a programming language. Safari 26.2 brings three new functions — random(), sibling-index() and sibling-count().
- [Rolling the dice with CSS random() \| Hacker News](https://news.ycombinator.com/item?id=44977833) *(news.ycombinator.com · 2025-08-25T04:14:08)*
  > https://www.sitepoint.com/the-cicada-principle-and-why-it-ma · https://lea.verou.me/blog/2020/07/the-cicada-principle-revis
- [Native Random Values in CSS - DEV Community](https://dev.to/alvaromontoro/native-random-values-in-css-a7e) *(dev.to · 2026-02-26T17:07:20)*
  > The CSS Working Group has published the Values and Units Module Level 5, which introduces native mechanisms for generating random content using only CSS. This is the tl;dr of a longer article exploring randomness in CSS. Tagged with css, webdev, html...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Updates for Chrome Canary, 18 Sept. 2026 by Elchi3 · Pull Request #30576 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30576) *(github.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > CSS random(), https://<strong>chromestatus.com/feature/5324559251275776</strong> · None. Updates for Chrome Canary, 18 Sept. 2026 · 2734004 · github-actions Bot added data:css · Compatibility data for CSS features. https://developer.mozilla...
- [CSS random() · Issue #1354 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1354) *(github.com · 2026-09-03T21:08:06)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > Safari: already in stable 26.2 https://webkit.org/blog/17640/webkit-features-for-safari-26-2/#css-calc-functions https://<strong>webkit.org/blog/17285/rolling-the-dice-with-css-random</strong>/ already moving on to random-item()
- [CSS random() function · Issue #715 · mdn/mdn](https://github.com/mdn/mdn/issues/715) *(github.com · 2025-08-24T12:16:41)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > Spec: https://drafts.csswg.org/css-values-5/#random (don&#x27;t use the published draft for documenting, it&#x27;s out of date) · https://<strong>webkit.org/blog/17285/rolling-the-dice-with-css-random</strong>/ https://css-tricks.com/almana...
- [\[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17310.html) *(mail-archive.com)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > *Initial public proposal* *No information provided* *Search tags* random &lt;https://chromestatus.com/features#tags:random&gt; *TAG review* *No information provided* *TAG review status* Pending *Goals for experimentation* None *Risks* *Inte...
- [CSS Random() Snow](https://codepen.io/DenDionigi/pen/ogxJdqr) *(codepen.io)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > &lt;!-- The Content --&gt; &lt;section class=&quot;main&quot;&gt; &lt;div class=&quot;intro&quot;&gt; &lt;h1&gt;Winter has come&lt;/h1&gt; &lt;h2&gt;Just relax and enjoy life.&lt;/h2&gt; &lt;p&gt;This demo has also a new CSS feature called ...
- [You no longer need JavaScript: an overview of what makes modern CSS so awesome - Divisions by zero](https://lemmy.dbzer0.com/post/52165294) *(lemmy.dbzer0.com)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > How timely a question: https://<strong>webkit.org/blog/17285/rolling-the-dice-with-css-random</strong>/ tl;dr: CSS is getting genuine random for exactly that soon · feef@lemmy.worldEnglish · 2·2 days ago · (Not my code) https://codepen.io/b...
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17344.html) *(mail-archive.com)* *(Cites: `https://css-tricks.com/almanac/functions/r/random`)*
  > &gt; LGTM1 &gt; &gt; On Wed, Aug 26, 2026 ...3.org/TR/css-values-5/#random &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>The random() function brings generative randomness to CSS, allowing web &gt;&gt; authors to generate a random numeric va...

## 📚 Platform Documentation & Specifications

- [Updates for Chrome Canary, 18 Sept. 2026 by Elchi3 · Pull Request #30576 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30576) *(github.com)*
- [CSS random() · Issue #1354 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1354) *(github.com)*
- [CSS random() function · Issue #715 · mdn/mdn](https://github.com/mdn/mdn/issues/715) *(github.com)*
- [random() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/random) *(developer.mozilla.org)*
- [\[css-values-5\] Should random() and random-item() share indexing? · Issue #14330 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14330) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 64 result(s) found across 13 planned queries — **28 verified relevant**
  - `"chromestatus.com/feature/5324559251275776" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"webkit.org/blog/17285/rolling-the-dice-with-css-random" -site:webkit.org` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"css-tricks.com/almanac/functions/r/random" -site:css-tricks.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"www.w3.org/TR/css-values-5" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"CSS random() function" API` — *Core feature API query* (8 returned)
  - `"CSS random() function" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"random-key" OR "random()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS random() function" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS random() function" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"CSS random()" (tutorial OR guide OR "generative") -javascript` — *Finds developer guides, tutorials, and practical generative CSS examples demonstrating how to use the random() function without JS.* (8 returned)
  - `"random(" "random-key" ("css-values-5" OR "WebKit")` — *Surfaces technical code samples, grammar definitions, and parameter usages showing how random keys and seed caching work in CSS.* (8 returned)
  - `"CSS random()" ("Intent to Ship" OR "Intent to Prototype" OR "browser support" OR WebKit)` — *Monitors browser vendor implementation status, engine roadmaps, and official feature release announcements.* (6 returned)
  - `"CSS random" (site:news.ycombinator.com OR site:reddit.com/r/webdev OR site:dev.to)` — *Captures real-time developer sentiment, critique, and community discussions on web development forums.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **15 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 5 result(s) found — **1 verified relevant**
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
