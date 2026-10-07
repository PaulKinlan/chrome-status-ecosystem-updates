# CSS random() function

> **Report Week:** 2026-W41 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

The random() function brings generative randomness to CSS, allowing web authors to generate a random numeric value within a specified range.  For example, web authors can use random() to scatter elements randomly within their container: .dot {   /\* Position each dot randomly \*/   position: absolute;   top: random(0%, 100%);   left: random(0%, 100%); }  This feature also includes caching controls. By default, each random() function resolves to a new, distinct value. Web authors can override this default by passing a &lt;random-key&gt; value as the function's first argument to control how random values are shared across properties and elements.

### Motivation

The CSS random() function provides a native way to generate random values directly in CSS without relying on JavaScript, reducing code complexity while making it easier for developers to create varied and dynamic designs.

## Ecosystem Status

- **Momentum:** High (575 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The CSS \`random()\` function introduces native, declarative randomness and unit-aware interval generation to the stylesheet layer without requiring JavaScript. Having initially debuted in WebKit/Safari, Chromium is enabling the feature by default in Chrome 156, while Mozilla maintains an active positive standards position. Although not yet in Baseline due to pending multi-engine ubiquity, broad cross-vendor consensus indicates it is on track to become a foundational capability for generative UI design.

### Recommendations
- Actionable Advice: Teams should adopt \`random()\` progressively using \`@supports (width: random(1px, 2px))\` for non-critical visual flair like decorative starfields, scattered rotations, and staggered transition delays. For mission-critical responsive layouts or older browsers, maintain deterministic CSS fallback values or lightweight build plugins rather than blocking rendering on full engine parity.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "Yeah the thing the WG settled on was a lot saner than the initial proposal :)..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "WebKit on X: "Learn about the new CSS random() function, now available to experiment with in Safari Technology Preview. There are lots of amazing ways to use random values in CSS. Learn more in "Rolling the Dice with CSS random()": https://t.co/JdFtXP3qTm" / X" (0 points, 0 comments).

## Standards Positions

- **Mozilla:** [CSS Values 5: random()](https://github.com/mozilla/standards-positions/issues/809) [closed]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [WebKit on X: "Learn about the new CSS random() function, now available to experiment with in Safari Technology Preview. There are lots of amazing ways to use random values in CSS. Learn more in "Rolling the Dice with CSS random()": https://t.co/JdFtXP3qTm" / X](https://x.com/webkit/status/1958608369134280951) — *by @webkit, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [@csstools/postcss-random-function](https://www.npmjs.com/package/@csstools/postcss-random-function) `v4.0.5` — Use the random function in CSS
- [@kingoftac/postcss-plugin-random](https://www.npmjs.com/package/@kingoftac/postcss-plugin-random) `v0.1.3` — A PostCSS plugin for the upcoming CSS random() function.

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEP5ZrcmMLvnK0Ifc7ccnPEJAmHKZSFM1tYHFhlCuyiJm7F1jYAJIcDVhUa9oXigAffZOEIaCjia3q4S4pfkDppAJcJ436nAKjJsN4mRvQknONxUyVyNOhTpQ==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The native **`random()` function** (defined in the [W3C CSS Values and Units Module Level 5](https://www.w3.org/TR/css-values-5/) alongside `random-item()`) introduces generative randomness to CSS without requiring JavaScript o
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGLYiimOCCxuYTGIaJ-VVfL3dASEN-1BpgXGNvMoj5WTpvSgWHrt4JDA8akmsNPScL2Ug3qjL2D65UlLnWNeuVBxxdxlLd80dNZbxDSBR6L7vJpb8vWtlJhlh_Ntg0bt6DiKznmSzfugw==) *(vertexaisearch.cloud.google.com)*
  > random() | CSS-Tricks Skip to main content CSS-Tricks Since 2007 CSS Almanac &rarr; Functions &rarr; R &rarr; random() random() Sunkanmi Fafowora on Oct 31, 2024 Experimental: Check browser support before using this in production. The random() functi...
- [alvaromontoro.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH2pvUtXGvoPeA9gREUzIq8AFsUAxMXc4u0iKywxzD6hEHW0LaKrtUqlWft0jszc1iH7CkgsFyink221j4R_RoKV-OHBVshJub2vQC_4vgM5EOUsrPme5Q9bNR01-j9eDHUG4N9vYl_49W5PLngRdxYwIlledMz) *(vertexaisearch.cloud.google.com)*
  > Native Random Values in CSS Skip to main content Alvaro Montoro Human Being Change to light mode Change to dark mode Native Random Values in CSS The CSS Working Group has published the Values and Units Module Level 5, which introduces native mechanis...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGfHyXhoVmBXvx8aKBRU2VHwvF85jfR9UNr80Q08wbDMI4W1-eXRkdQaNlNn2MFqNBXVcjKcg7m-51-jZyJwaOENgq1CELyeZ086Rw000CTAgin98738YivOfhMausze8ljINmplfmd) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGsivdKWR6pzn9kZ2jVr7wkJCxH8-Nh0Z0BRiiASl1IC6l7OERe9kBru4-nQOcE8FxKATXdg68c1vviz0IQ14sctb739YPY-8Y5JUw1crIbngPaCYj30cV2DVjtUafY_DuaqY0Eklmrt2FmjenXUqhGcNGOORfsPlScSEI=) *(vertexaisearch.cloud.google.com)*
  > CSS-Funktion random() - CSS | MDN Zum Hauptinhalt springen Zur Suche springen Seitenleiste umschalten Web CSS Reference Values random() Farbschema Systemeinstellung Hell Dunkel Deutsch Sprache merken Mehr erfahren Deutsch English (US) Français 日本語 Di...
- [polypane.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHupX2Dc9y8cetFWl1-6m-oQJQCGpmHaITvMfMU_5DAXWeK1gKn8G_51jmGY647Wfk8qa5RzS1E7VbX7uPnWEN7Qw-YkOZvIX6Ldf221ZqxR45MKbccmnJAzzsm3nUD7ldYWQl579MDtq5fxIXAPxtV8joPciyXqOXQJxgz3DeFsbrat_4=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The native **`random()` function** (defined in the [W3C CSS Values and Units Module Level 5](https://www.w3.org/TR/css-values-5/) alongside `random-item()`) introduces generative randomness to CSS without requiring JavaScript o
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFjVxESUgpjCVd3O2W5sAU96FjnwSLkoXB_NvLQwS5vIqWer9SSF8vRmDoX--bfYtS1Dg42H9wVw3WOE9UBLodCrjBd-EWe6lkbxtvrzTL-3a5_xQHQD5uGjFJs532nNWIz1Icn99cm7EpUBfzmouz-JAOW74rXZ2JOLu9q1ac=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The native **`random()` function** (defined in the [W3C CSS Values and Units Module Level 5](https://www.w3.org/TR/css-values-5/) alongside `random-item()`) introduces generative randomness to CSS without requiring JavaScript o
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFOYP4rIjnlWdMKOdzccybxUi4SJHDhwHOY4ydH8kZhw2YVzgHdRw0C5S8--XNIjIh4Q-dmRFXyp2scXjdFpA29cDk_LcDn6A1YOXZpCbnUSXPR8U4GNYAQ-E3ORRYUInXGVDflEDOwRzmA) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The native **`random()` function** (defined in the [W3C CSS Values and Units Module Level 5](https://www.w3.org/TR/css-values-5/) alongside `random-item()`) introduces generative randomness to CSS without requiring JavaScript o
- [webkit.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFOKLWkCvTyTc5vIlkw4r5o3Qg1dtW01CP2yry8er93aDSfV9VwRdaIsgvBPMF2Zhu7XVUgW1X0JjmeS7KikCRU1G9cDMCOu8mzmGTGnD9frtVLSd5wUQZVfMsADwmU2zTfAvveulsqnvRQguy69AQ8a2KwWLk=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The native **`random()` function** (defined in the [W3C CSS Values and Units Module Level 5](https://www.w3.org/TR/css-values-5/) alongside `random-item()`) introduces generative randomness to CSS without requiring JavaScript o
- [master.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHEVF2wtU6iGDZWpDlKZQRrxTfx0EKbSz7D18V8-XbYlFHlh8f1LRX9iA9mPJgVo5mkFsBjczxE9VRhfD3xT8L0tLf9B0JrcdGLjS9be7SLIhIymOCFf76Nt8WCDOlzBvnRWY3u18i4gAyI3YrqbAqdEwVozw==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The native **`random()` function** (defined in the [W3C CSS Values and Units Module Level 5](https://www.w3.org/TR/css-values-5/) alongside `random-item()`) introduces generative randomness to CSS without requiring JavaScript o
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHuKDzuEoJGj7c1VeumnHkKytXrdic1lWWt-8C9FiWdAtJEgqPibo11lhcmoOC-dzJoZGwp8n8Bha5Rwg629anZbnEt7OF1vKu3SIG0f-Xk21x2Fq4nkUISAe1UQiTjVVo5yFl30j3Sc1eO-M5LUbxRi6BBP_afWs8=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The native **`random()` function** (defined in the [W3C CSS Values and Units Module Level 5](https://www.w3.org/TR/css-values-5/) alongside `random-item()`) introduces generative randomness to CSS without requiring JavaScript o
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE_8v3HSwT_CX9RGkOraDgT4R9RBeWYtqabWw_P2-ZIdVrNcrWd2FDC1pSlLYZLXvnd_a25QLGocwKLgSNrfuzoaUbDbbUD8x2QkkBHy_zav0-ePzHDKfXDwx3xdvS_W68=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The native **`random()` function** (defined in the [W3C CSS Values and Units Module Level 5](https://www.w3.org/TR/css-values-5/) alongside `random-item()`) introduces generative randomness to CSS without requiring JavaScript o
- [csswg.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHy11zttBMs0WhGzvFMk3MeuVyHzk42prMWeBdl1DNlxs4EshN5TEjoJBhneNqs4ICvRDDnM-udMrPNNuIfkcUIGhKxiOcXPslHKfwLj4kZi33ZWGPnO0937pmfsQ==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The native **`random()` function** (defined in the [W3C CSS Values and Units Module Level 5](https://www.w3.org/TR/css-values-5/) alongside `random-item()`) introduces generative randomness to CSS without requiring JavaScript o
- [ycombinator.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFLHIMqt85IKalWvO7uUt8U0a-QgfVbBV-Jo_5ohAwMAlU38XS6X2uBuCf9k0Qrc9E-0xV-KsX2X_XVEMIiHIhwEZ5BBctK9iKY877O1Ei6xO3FG27RTiYXcKH4xoVna9dBOXk=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The native **`random()` function** (defined in the [W3C CSS Values and Units Module Level 5](https://www.w3.org/TR/css-values-5/) alongside `random-item()`) introduces generative randomness to CSS without requiring JavaScript o
- [\[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17310.html) *(mail-archive.com)*
  > *Initial public proposal* *No information provided* *Search tags* random &lt;https://chromestatus.com/features#tags:random&gt; *TAG review* *No information provided* *TAG review status* Pending *Goals for experimentation* None *Risks* *Interoperabili...
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17350.html) *(mail-archive.com)*
  > LGTM2 On Wed, Sep 2, 2026 at 5:12 ... https://www.w3.org/TR/css-values-5/#random *Summary* <strong>The random() function brings generative randomness to CSS, allowing web authors to generate a random numeric value within a specified range</strong>......
- [r/WebKit](https://www.reddit.com/r/WebKit) *(reddit.com · 2009-03-20T02:23:13)*
  > Rolling the dice with CSS random() (webkit.org) https://<strong>webkit.org/blog/17285/rolling-the-dice-with-css-random</strong>/ Webkit based &quot;gaming&quot; web browser for MacOS? u/OSINT_IS_COOL_432 · • · Webkit based &quot;gaming&quot; web brow...
- [CSS Random() Snow](https://codepen.io/DenDionigi/pen/ogxJdqr) *(codepen.io)*
  > &lt;!-- The Content --&gt; &lt;section class=&quot;main&quot;&gt; &lt;div class=&quot;intro&quot;&gt; &lt;h1&gt;Winter has come&lt;/h1&gt; &lt;h2&gt;Just relax and enjoy life.&lt;/h2&gt; &lt;p&gt;This demo has also a new CSS feature called random(), ...
- [You no longer need JavaScript: an overview of what makes modern CSS so awesome - Divisions by zero](https://lemmy.dbzer0.com/post/52165294) *(lemmy.dbzer0.com)*
  > How timely a question: https://<strong>webkit.org/blog/17285/rolling-the-dice-with-css-random</strong>/ tl;dr: CSS is getting genuine random for exactly that soon · feef@lemmy.worldEnglish · 2·2 days ago · (Not my code) https://codepen.io/beben-koben...
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17344.html) *(mail-archive.com)*
  > &gt; LGTM1 &gt; &gt; On Wed, Aug 26, 2026 ...3.org/TR/css-values-5/#random &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>The random() function brings generative randomness to CSS, allowing web &gt;&gt; authors to generate a random numeric value within...
- [Creating natural variation with the CSS random() function - ICS MEDIA](https://ics.media/en/entry/261001) *(ics.media · 2026-09-30T15:00:00)*
  > The CSS random() function <strong>lets you work with random values using CSS alone</strong>. This new function, available starting with Safari 26.2, can introduce natural variation in element sizes, angles, animation start times, and more.
- [CSS random() function](https://chromestatus.com/feature/5324559251275776) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [CSS random() \| Erik Runyon](https://erikrunyon.com/2025/10/css-random) *(erikrunyon.com · 2025-10-08T00:00:00)*
  > Safari recently implemented a non-standard (yet?) CSS random() function (currently only in WebKit, and not yet part of any CSS specification). Since many recent CSS features are directly aimed at replacing common JavaScript functionality, I expected ...
- [The CSS random() function](https://sandeep.ramgolam.com/blog/css-random-function-guide) *(sandeep.ramgolam.com)*
  > // Set random CSS variables document.querySelectorAll(&#x27;.random-item&#x27;).forEach(el =&gt; { el.style.setProperty(&#x27;--random-x&#x27;, Math.random() * 100 + &#x27;%&#x27;); });
- [Let’s Use the Emergent CSS random() Function in all the Browsers \| CSS-Tricks](https://css-tricks.com/css-random-function-polyfill) *(css-tricks.com · 2026-08-31T15:13:17)*
  > Note: In the original starfield demo, most of the random values were used inline, which is admittedly more elegant. The spec that includes random() makes it clear that this kind of function “can be used in place of any part of any property’s value,” ...
- [Experimenting with the new pure CSS random() function \| Polypane](https://polypane.app/blog/experimenting-with-the-new-pure-css-random-function) *(polypane.app · 2026-06-24T00:00:00)*
  > Want to experiment with these examples live? Open this article in Polypane. The random() function in its simplest form <strong>takes a minimum (0%) and a maximum (100%) and returns a random value between those values</strong>.
- [CSS random() Function for Per-Element Random Values](https://modern-css.com/random-values-without-javascript) *(modern-css.com · 2026-04-17T09:30:00)*
  > <strong>The random(min, max) function takes a minimum and maximum value and returns a random number in that range</strong>. Both values must use the same unit, so random(-15deg, 15deg) gives back an angle, and random(0s, 2s) gives back a time.
- [CSS Random Background URL: A Comprehensive Guide — tutorialpedia.org](https://www.tutorialpedia.org/blog/css-random-background-url) *(tutorialpedia.org)*
  > In this PHP example, we <strong>use the rand() function to generate a random index and then echo the randomly selected image URL into the CSS background-image property</strong>.
- [Random Numbers in CSS: From Workarounds to Native Support \| Digital Thrive US](https://digitalthriveai.com/en-us/resources/web-development/random-numbers-css) *(digitalthriveai.com)*
  > Learn how to generate random values in CSS, from JavaScript workarounds to the new native random() function. Covers syntax, shared randomness patterns, and practical examples.
- [CSS random() - AllDevBlogs](https://www.alldevblogs.com/article/erik-runyon/css-random) *(alldevblogs.com · 2025-10-08T02:00:00)*
  > Explores Safari&#x27;s new CSS random() function, its current capabilities, limitations, and potential use cases for generating random values in styles.
- [CSS math-random() in Production: Native Randomness Without JavaScript](https://www.sitepoint.com/css-mathrandom-in-production-native-randomness-without-javascript) *(sitepoint.com · 2026-05-10T09:49:59)*
  > It targets intermediate to advanced front-end developers comfortable with modern CSS and ready to adopt emerging specifications safely. ... where &lt;random-caching-options&gt; expands to per-element or &lt;dashed-ident&gt; (pending final spec verifi...
- [CSS Can Finally Be Random - YouTube](https://www.youtube.com/watch?v=Uy3xsfAD8s0) *(youtube.com · 2026-08-14T09:30:25)*
  > Source Code 👉 https://coding2go.com/New to CSS? Beginner Course 👉https://coding2go.com/products/html-css-masterclassLearn how to use the new random() funct
- [Let’s Use the Emergent CSS random() Perform in all of the Browsers – blog.aimactgrow.com](https://blog.aimactgrow.com/lets-use-the-emergent-css-random-perform-in-all-of-the-browsers) *(blog.aimactgrow.com · 2026-09-01T05:35:11)*
  > And but, within the case of random(), it’s darkly poetic {that a} function based mostly on likelihood seems in an surprising place the place many people can’t use it. In actual fact, even Safari customers might profit from my css-random-polyfill bund...
- [Random key generator](https://codepen.io/Jleeto/pen/qZKXyB) *(codepen.io)*
  > &lt;div class=&quot;app&quot;&gt; &lt;button onclick=&quot;randomStringToInput(this)&quot;&gt;&lt;a&gt;Generate key&lt;/a&gt;&lt;/button&gt; &lt;input type=&quot;text&quot; name=&quot;kek&quot; readonly=&quot;readonly&quot; value=&quot;&quot;&gt; &lt...
- [@alikia/random-key - JSR](https://jsr.io/@alikia/random-key) *(jsr.io)*
  > @alikia/random-key on JSR: random-key is <strong>a JavaScript library for generating secure random strings and keys in both browser and Node.js environments</strong>.
- [random-key - npm](https://www.npmjs.com/package/random-key) *(npmjs.com · 2014-12-29T00:00:00)*
  > Generating random strings (cryptographically strong) for NodeJS. Latest version: 0.3.2, last published: 12 years ago. Start using random-key in your project by running `npm i random-key`. There are 17 other projects in the npm registry using random-k...
- [Lots of Ways to Use Math.random() in JavaScript \| CSS-Tricks](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript) *(css-tricks.com · 2020-11-30T16:03:33)*
  > It is <strong>a function that gives you a random number</strong>. The number returned will be between 0 (inclusive, as in, it’s possible for an actual 0 to be returned) and 1 (exclusive, as in, it’s not possible for an actual 1 to be returned).
- [Throwing Confetti with CSS Random - Schalk Neethling - Open Web Engineer](https://schalkneethling.com/posts/throwing-confetti-with-css-random) *(schalkneethling.com · 2026-07-13T00:00:00)*
  > Which brings us to the state of the feature. <strong>random() is new enough that the specification moved while the first implementation was shipping, and new enough that the two engines that have it do not agree on all of it</strong>.
- [Let’s Use the Emergent CSS random() Function in all the Browsers](https://247webdevs.blogspot.com/2026/08/lets-use-emergent-css-random-function.html) *(247webdevs.blogspot.com · 2026-08-31T16:22:01)*
  > Progressive web apps (PWA) are a fantastic way to turn web applications into native-like, standalone experiences.
- [Randomness in CSS. \| by Kacper Kula \| hypersphere](https://medium.com/hypersphere-codes/randomness-in-css-b55a0845c8dd) *(medium.com · 2022-09-22T12:22:44)*
  > The majority of the languages have some mechanisms for generating random numbers. Unfortunately, that is not the case in CSS. This might not be a problem for most websites, but when dealing with a more generative approach (which CSS is really great f...
- [Randomness in CSS :: hypersphere](https://hypersphere.blog/blog/randomness-in-css) *(hypersphere.blog)*
  > Moreover, our example will use sequential numbers to generate our random numbers. CSS does not natively offer us a mechanism to easily get the sequential numbers for each of the elements but, using the technique from my last article, we can generate ...
- [Creating Generative Patterns with The CSS Paint API \| CSS-Tricks](https://css-tricks.com/creating-generative-patterns-with-the-css-paint-api) *(css-tricks.com · 2021-11-24T14:49:11)*
  > For us, all this renders Math.random() a little useless, as it is entirely unpredictable. As an alternative, we are pulling in random (an excellent library for working with random numbers) and seedrandom (a pseudo-random number generator to use as it...
- [Conjuring Generative Blobs With The CSS Paint API \| CSS-Tricks](https://css-tricks.com/conjuring-generative-blobs-with-the-css-paint-api) *(css-tricks.com · 2021-07-30T13:54:40)*
  > You may want to choose some perfect seed values and use them across your site as part of a semi-generative design system. For other cases, though, you may want your blobs to be random — just like the image mask example I showed you earlier. How can w...
- [Experimenting with random() in CSS \| daily.dev](https://daily.dev/posts/experimenting-with-random-in-css-ouj2w2eta) *(daily.dev · 2026-06-29T04:26:17)*
  > Practical demos include a bokeh light effect, falling cherry petals with physics-like animation, a stack of flingable Polaroid photos using checkbox state, and a visual poem with weighted random layout. The post also shows how to simulate the not-yet...
- [Exploring the CSS random() Function](https://blog.openreplay.com/css-random-function) *(blog.openreplay.com · 2026-03-17T00:00:00)*
  > That dependency may soon shrink. The CSS random() function, part of the CSS Values and Units Module Level 5 specification, <strong>lets stylesheets generate random numeric values directly, no scripting required</strong>.
- [Release Notes for Safari Technology Preview 218 \| WebKit](https://webkit.org/blog/16861/release-notes-for-safari-technology-preview-218) *(webkit.org · 2025-04-30T22:07:31)*
  > Fixed: Updated the CSS random() function implementation to match the latest spec changes.
- [What’s new in WebKit for Safari 27 - WWDC26 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2026/204) *(developer.apple.com)*
  > A lot of the improvements my team is making are to better align with web standards. Both to shore up the interoperability of longstanding web technology, and to keep up with the evolution of new features. Here&#x27;s something new: the CSS random fun...
- [Rolling the dice with CSS random() \| Hacker News](https://news.ycombinator.com/item?id=44977833) *(news.ycombinator.com · 2025-08-25T04:14:08)*
  > https://www.sitepoint.com/the-cicada-principle-and-why-it-ma · https://lea.verou.me/blog/2020/07/the-cicada-principle-revis

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Updates for Chrome Canary, 18 Sept. 2026 by Elchi3 · Pull Request #30576 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30576) *(github.com)* *(Cites: `https://chromestatus.com/feature/5324559251275776`)*
  > CSS random(), https://<strong>chromestatus.com/feature/5324559251275776</strong> · None. Updates for Chrome Canary, 18 Sept. 2026 · 2734004 · github-actions Bot added data:css · Compatibility data for CSS features. https://developer.mozilla...
- [CSS random() function · Issue #715 · mdn/mdn](https://github.com/mdn/mdn/issues/715) *(github.com · 2025-08-24T12:16:41)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > Spec: https://drafts.csswg.org/css-values-5/#random (don&#x27;t use the published draft for documenting, it&#x27;s out of date) · https://<strong>webkit.org/blog/17285/rolling-the-dice-with-css-random</strong>/ https://css-tricks.com/almana...
- [CSS random() · Issue #1354 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1354) *(github.com · 2026-09-03T21:08:06)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > Safari: already in stable 26.2 https://webkit.org/blog/17640/webkit-features-for-safari-26-2/#css-calc-functions https://<strong>webkit.org/blog/17285/rolling-the-dice-with-css-random</strong>/ already moving on to random-item()
- [\[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17310.html) *(mail-archive.com)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > *Initial public proposal* *No information provided* *Search tags* random &lt;https://chromestatus.com/features#tags:random&gt; *TAG review* *No information provided* *TAG review status* Pending *Goals for experimentation* None *Risks* *Inte...
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17350.html) *(mail-archive.com)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > LGTM2 On Wed, Sep 2, 2026 at 5:12 ... https://www.w3.org/TR/css-values-5/#random *Summary* <strong>The random() function brings generative randomness to CSS, allowing web authors to generate a random numeric value within a specified range</...
- [r/WebKit](https://www.reddit.com/r/WebKit) *(reddit.com · 2009-03-20T02:23:13)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > Rolling the dice with CSS random() (webkit.org) https://<strong>webkit.org/blog/17285/rolling-the-dice-with-css-random</strong>/ Webkit based &quot;gaming&quot; web browser for MacOS? u/OSINT_IS_COOL_432 · • · Webkit based &quot;gaming&quot...
- [CSS Random() Snow](https://codepen.io/DenDionigi/pen/ogxJdqr) *(codepen.io)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > &lt;!-- The Content --&gt; &lt;section class=&quot;main&quot;&gt; &lt;div class=&quot;intro&quot;&gt; &lt;h1&gt;Winter has come&lt;/h1&gt; &lt;h2&gt;Just relax and enjoy life.&lt;/h2&gt; &lt;p&gt;This demo has also a new CSS feature called ...
- [You no longer need JavaScript: an overview of what makes modern CSS so awesome - Divisions by zero](https://lemmy.dbzer0.com/post/52165294) *(lemmy.dbzer0.com)* *(Cites: `https://webkit.org/blog/17285/rolling-the-dice-with-css-random`)*
  > How timely a question: https://<strong>webkit.org/blog/17285/rolling-the-dice-with-css-random</strong>/ tl;dr: CSS is getting genuine random for exactly that soon · feef@lemmy.worldEnglish · 2·2 days ago · (Not my code) https://codepen.io/b...
- [Re: \[blink-dev\] Intent to Ship: CSS random() function](http://www.mail-archive.com/blink-dev@chromium.org/msg17344.html) *(mail-archive.com)* *(Cites: `https://css-tricks.com/almanac/functions/r/random`)*
  > &gt; LGTM1 &gt; &gt; On Wed, Aug 26, 2026 ...3.org/TR/css-values-5/#random &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>The random() function brings generative randomness to CSS, allowing web &gt;&gt; authors to generate a random numeric va...

## 📚 Platform Documentation & Specifications

- [Updates for Chrome Canary, 18 Sept. 2026 by Elchi3 · Pull Request #30576 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30576) *(github.com)*
- [CSS random() function · Issue #715 · mdn/mdn](https://github.com/mdn/mdn/issues/715) *(github.com)*
- [CSS random() · Issue #1354 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1354) *(github.com)*
- [random() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/random) *(developer.mozilla.org)*
- [randID---JavaScript-random-Key-generator/index.html at master · Frontend-io/randID---JavaScript-random-Key-generator](https://github.com/Frontend-io/randID---JavaScript-random-Key-generator/blob/master/index.html) *(github.com)*
- [js13kGames: Progressive web app structure - Progressive web apps \| MDN](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/js13kGames/App_structure) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 63 result(s) found across 13 planned queries — **40 verified relevant**
  - `"chromestatus.com/feature/5324559251275776" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"webkit.org/blog/17285/rolling-the-dice-with-css-random" -site:webkit.org` *(Reverse Citation)* — *Inbound citations linking to Explainer* (7 returned)
  - `"css-tricks.com/almanac/functions/r/random" -site:css-tricks.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"www.w3.org/TR/css-values-5" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"CSS random() function" API` — *Core feature API query* (8 returned)
  - `"CSS random() function" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"random-key" OR "random()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS random() function" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS random() function" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"CSS random()" (tutorial OR guide OR "generative") -site:w3.org` — *Finds practical developer guides, generative styling experiments, and introductory articles exploring the CSS random function.* (8 returned)
  - `css "random(" ("<random-key>" OR "random-key" OR "per-element") site:codepen.io OR site:developer.mozilla.org` — *Searches for working code demos, syntax breakdowns, and usage patterns of random keys and caching controls.* (1 returned)
  - `"CSS random()" ("WebKit" OR "Chromium" OR "Firefox") ("intent to" OR "Safari Technology Preview" OR "flag")` — *Tracks browser vendor implementation status, engine releases, and formal intent to prototype/ship threads.* (8 returned)
  - `"CSS random()" OR "random() in CSS" site:news.ycombinator.com OR site:reddit.com/r/webdev` — *Surfaces community feedback, developer sentiment, and debates on the merits and performance implications of native CSS randomness.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **14 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 7 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 result(s) found — **1 verified relevant**
- **Engine Bug Trackers:** 4 result(s) found — **2 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **2 verified relevant**
- **Web Platform Tests (wpt.fyi):** 518 item(s) inspected

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
