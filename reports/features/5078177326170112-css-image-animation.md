# CSS Image Animation

> **Report Week:** 2026-W40 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Introduces a new CSS property and pseudo-class to control and detect animated images like GIFs and APNGs.  1. image-animation: Can be set to "normal", "running", or "paused" to control image animation playback.  2. :animated-image: A pseudo-class to determine whether an image is animated.

### Motivation

Currently, user agents autoplay animated images (e.g., GIF, WebP, PNG) by default. This behavior can be violate accessibility standards  regarding pausing and stopping content. Site authors currently lack mechanisms to control this playback. The only existing methods are browser-specific global settings, which are inconsistent and lack the features needed for developers to build accessible, per-image playback interfaces.

## Ecosystem Status

- **Momentum:** High (355 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** CSS Image Animation Module Level 1 introduces declarative control over animated image playback (GIF, APNG, WebP, AVIF) via the 'image-animation' property and ':animated-image' pseudo-class. Chromium is leading production deployment targeting Chrome 156 to solve long-standing WCAG 2.2.2 accessibility gaps without canvas or video workarounds. While the First Public Working Draft is progressing in the W3C CSS WG, multi-engine consensus remains in early stages.

### Recommendations
- Actionable Advice: Implement 'image-animation: paused' strictly as a progressive enhancement inside '@supports (image-animation: paused)' or paired with '@media (prefers-reduced-motion)'. For mission-critical playback controls across Safari and Firefox, continue serving HTML5 video or canvas-based fallback players until cross-engine support solidifies.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @DevSDK: "As @o-t-w  mentioned, this doesn't change any existing behavior. Nothing is affected other than the addition of the \`image-animation\` property and the..."
- Standards Activity (W3C TAG): Latest discussion from @frivoal: "&gt; the table of contents links in the explainer don't go anywhere. was an issue with the build system. Has been fixed since...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS Image Animation](https://github.com/WebKit/standards-positions/issues/685) [open]
- **Mozilla:** [CSS Image Animation](https://github.com/mozilla/standards-positions/issues/1421) [open]
- **W3C TAG:** [Other Spec Review: CSS Image Animation](https://github.com/w3ctag/design-reviews/issues/1237) [open]

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF2c-FA1ZsiHwxV8S8dLwAknlh8nfU9jfZaDuof-HkmxvCPRvleAgaaZk1812XILlaQJisEzKLF0TYY5iKhE-JlwCTCb4B4_QPIEPa3fkge6Kodvhl314g6UTZsYKjLpnN5WQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **CSS Image Animation Module Level 1** introduces declarative CSS capabilities to inspect and control the playback of animated images (such as GIFs, APNGs, animated WebPs, AVIFs, and SVGs).   Historically, web browsers automatically play
- [csswg.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHSuunnuNSjz_hKM0_7KrHdOOXUldUNtSVU2FvXKRcAKRwbPFFhBUHVyx6cPjlKE_79euytL1czV0ZGUzDgu8gE-WCDWpZ1lzbLN5mQfKY3eW_6zrPx05fGZcrBRhsRRNLzHQAk96QznJ09CDmacg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **CSS Image Animation Module Level 1** introduces declarative CSS capabilities to inspect and control the playback of animated images (such as GIFs, APNGs, animated WebPs, AVIFs, and SVGs).   Historically, web browsers automatically play
- [ietf.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFwURjjmteAvZrpZJ0Dd-QVmrPcat8o8hG56olPV0GZiTTHelFYD6Fti_TwtLK34Oj-BNGUVlHHtB8DAHIa5Shg4Eks9PDxBa9wKkEIltuXRkCCUFGOusv76HlS_22A1SVIskXbt0EZoKsBLr3kn67BQvQACPvPvFfFGv6EbBO8ND67KnbKxIwfDg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **CSS Image Animation Module Level 1** introduces declarative CSS capabilities to inspect and control the playback of animated images (such as GIFs, APNGs, animated WebPs, AVIFs, and SVGs).   Historically, web browsers automatically play
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEEzYb4kbld3fkbQRQHgNptjHd7-bbZS5AVZcBC02K_G32UbgRalSTMe8W1wXgXyn5as9EdzlDU56FZ8X_VQKRdsxznmnCK5sfaga0QbBN1cDZgDYuamOfJWGsAujuybkeq6Q==) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **CSS Image Animation Module Level 1** introduces declarative CSS capabilities to inspect and control the playback of animated images (such as GIFs, APNGs, animated WebPs, AVIFs, and SVGs).   Historically, web browsers automatically play
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHeS0ldMFxz2RU-LlNR3_J_SWZYuc9Ssl8SRoArOQt2p9OlwNSVD5s6eeH1CM2Hq_sdwSRNLduNRAn63O-T9HPKwSNwhwjMziDUuYN7j-w5p7sksx4DO5PpiwG_Zniq-GOlz4wbv9PQI0AYF2Q4LS6jf36NyW4vamd9gwgW0Wohu85uifuH) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **CSS Image Animation Module Level 1** introduces declarative CSS capabilities to inspect and control the playback of animated images (such as GIFs, APNGs, animated WebPs, AVIFs, and SVGs).   Historically, web browsers automatically play
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHyO6Y-XNUUrQsmDwcxezwXepf2HDJg5npQH7GYE0l-9pxMWKzKc-vU9A11kXBhYbkh1pYtxAGvB0UMKFC0s3d0zQ3ofyQ0F52NTom5dj2fJg0aJ4AjoZ-BUNu_SMpBMI_7KVmho5w=) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **CSS Image Animation Module Level 1** introduces declarative CSS capabilities to inspect and control the playback of animated images (such as GIFs, APNGs, animated WebPs, AVIFs, and SVGs).   Historically, web browsers automatically play
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEg5PKs4AN40o1LPEx8MMV1y_6uy9OC6WRtHIZ1zQaUeyTTF-RasMcnROT1BoqQxQxiD8YJpomsUsyO91nmNrzutD5s5YoOuA5Ulg3Klt8PP2Dc92Lzxz0G0kt0saugzsVYpd3fs2g=) *(vertexaisearch.cloud.google.com)*
  > ### Summary  **CSS Image Animation Module Level 1** introduces declarative CSS capabilities to inspect and control the playback of animated images (such as GIFs, APNGs, animated WebPs, AVIFs, and SVGs).   Historically, web browsers automatically play
- [Intent to Prototype: CSS Image Animation](https://groups.google.com/a/chromium.org/g/blink-dev/c/0kUk5-6TAfM/m/7YVGLKzEBwAJ) *(groups.google.com)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5078177326170112</strong>?gate=6328097936900096
- [37d35a3e8650ebac0ba12e5d5f6970fb40a90ace - chromium/src - Git at Google](https://chromium.googlesource.com/chromium/src/+/37d35a3e8650ebac0ba12e5d5f6970fb40a90ace) *(chromium.googlesource.com)*
  > Explainer: https://drafts.csswg.org/css-image-animation-1/explainer Spec: https://drafts.csswg.org/css-image-animation-1/ Intent to prototype: https://groups.google.com/a/chromium.org/g/blink-dev/c/0kUk5-6TAfM/m/7YVGLKzEBwAJ Chromestatus Entry: https...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS Image Animation](http://www.mail-archive.com/blink-dev@chromium.org/msg17483.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; On Tuesday, June 30, 2026 ... https://drafts.csswg.org/css-image-animation-1 &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; *Summary* &gt;&gt;&gt;&gt; <strong>Introduces a new CSS property and pseudo-class to control and detect &gt;&gt;&gt;&gt; ...
- [17+ CSS Image Animation Effects - ForFrontend](https://forfrontend.com/css-image-animation-effects) *(forfrontend.com · 2024-08-11T06:32:02)*
  > Notably, the .splitting class and its children are used to create a grid overlay on the image, facilitated by CSS Grid capabilities. This approach allows for a sophisticated division of the image into cells. JavaScript Functions: The animation logic ...
- [Image animation using CSS. For more questions and answers visit… \| by Pravin M \| Medium](https://frontendinterviewquestions.medium.com/image-animation-using-css-e18f6387c55b) *(frontendinterviewquestions.medium.com · 2024-09-14T08:31:44)*
  > Key properties used in CSS animations include: @keyframes: Defines the animation sequence by specifying the keyframes. animation: Applies the keyframes to an element and controls the animation&#x27;s timing and behavior. transform: Applies 2D or 3D t...
- [CSS Image Effects: 5 Examples and a Quick Animation Guide](https://cloudinary.com/blog/css_image_effects_five_simple_examples_and_a_quick_animation_guide) *(cloudinary.com · 2026-03-15T19:55:19)*
  > Brand consistency for use of images ... across web pages. <strong>This article describes how to create basic effects, image hover, and animated images through parameter configurations in your main CSS stylesheet</strong>....
- [CSS Animations](https://www.w3schools.com/css/css3_animations.asp) *(w3schools.com)*
  > If this property is not specified, ... is 0s (0 seconds). <strong>When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times</strong>....
- [50 Creative CSS Image Effects for Engaging Websites](https://prismic.io/blog/css-image-effects) *(prismic.io · 2025-02-14T00:00:00)*
  > Each layer is animated differently, resulting in a dynamic animation. This technique gives the illusion of a 3D scene using 2D images. ... Interactive CodePen loads when it gets near the viewport. ... The night vision effect by Rick Metzger is fun — ...
- [Simple Image Animation using CSS. Animation can hard to understand if not… \| by Hillary Okerio \| Medium](https://okerioh.medium.com/simple-image-animation-using-css-62cfb9322359) *(okerioh.medium.com · 2020-12-11T09:20:21)*
  > <strong>In the css file we add this line .img-box:hover .img-fluid {</strong> ... This tells the browser everytime the mouse hovers over the image it runs the animation named image and should run for the duration specified.
- [Image Animation in CSS - DEV Community](https://dev.to/shubhamtiwari909/image-animation-in-css-jj4) *(dev.to · 2022-09-05T10:01:44)*
  > The css part is quite simple , we have <strong>made the body container grid and use the place-content-center to center our imageContainer</strong>. The image container is converted into 3x3 grid which will have 9 images , 3 images in each row.
- [I made a photo gallery with CSS animation. Here’s what I learned.](https://blog.greenroots.info/i-made-a-photo-gallery-with-css-animation-heres-what-i-learned) *(blog.greenroots.info · 2021-10-28T07:34:47)*
  > We have created a rule to rotate the images a few degrees left and right. Alright, let&#x27;s apply then. .wave { float: left; margin: 20px; animation: wave ease-in-out 0.5s infinite alternate; transform-origin: center -36px; }
- [Creating an Animation Gallery with HTML and CSS — tutorialpedia.org](https://www.tutorialpedia.org/blog/animation-gallery-html-css) *(tutorialpedia.org)*
  > In this example, the slideShow animation cycles through the images every 12 seconds, with each image being visible for 4 seconds. You can create a gallery with hover effects using CSS transitions.
- [Creative and unique CSS animation examples that bring websites to life \[+ code\]](https://blog.hubspot.com/website/css-animation-examples) *(blog.hubspot.com · 2025-11-12T20:00:01)*
  > The “floating” effect is a subtle, simple, and effective use of animation. In this case, it’s used to display an icon. Note that the icon has a shadow behind it that also gently bounces, adding depth to the image. Tangible tips and coding templates f...
- [Pseudo-elements in the Web Animations API \| CSS-Tricks](https://css-tricks.com/pseudo-elements-in-the-web-animations-api) *(css-tricks.com · 2020-05-13T22:13:36)*
  > const logo = document.getElementById(&#x27;logo&#x27;); logo.animate({ opacity: [0, 1] }, { duration: 100, pseudoElement: &#x27;::after&#x27; });
- [How to animate css pseudo classes - Stack Overflow](https://stackoverflow.com/questions/51397056/how-to-animate-css-pseudo-classes) *(stackoverflow.com)*
  > Animate the bottom instead and use forwards with animation to keep the last state: .front { transform-style: preserve-3d; width: 108px; height: 100px; background: blue; position: absolute; left: 180px; top: 30px; margin: 4px 0 0 12px; cursor: pointer...
- [JS/CSS - image Animation](https://codepen.io/vccodepen/pen/JWqzeM) *(codepen.io)*
  > Create image animation by changing bg url source with CSS / Jquery ...
- [Progressive Web App (PWA) Development Ultimate Guide - Riseup Labs](https://riseuplabs.com/pwa-development-ultimate-guide) *(riseuplabs.com · 2025-12-10T05:24:22)*
  > CSS3 Enhancements: <strong>CSS3 provided developers with powerful styling capabilities, allowing for more sophisticated layouts and animations</strong>. This made it easier to create responsive designs that adapt seamlessly to various screen sizes, a...
- [The Role of Animation in Progressive Web Apps (PWAs)](https://blog.pixelfreestudio.com/the-role-of-animation-in-progressive-web-apps-pwas) *(blog.pixelfreestudio.com · 2024-07-31T11:59:14)*
  > Prototyping helps you refine animations and gather feedback before coding them into your PWA. To ensure optimal performance, use lightweight animations that don’t consume excessive resources. CSS animations and transitions are generally more performa...
- [Enhancements \| web.dev](https://web.dev/learn/pwa/enhancements) *(web.dev)*
  > Warning: If you want to provide all possible options combining screen definitions, orientations, and multitask mode, you will end up with more than 25 different images you need to create and link in your HTML. If you don&#x27;t provide a startup imag...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: CSS Image Animation](https://groups.google.com/a/chromium.org/g/blink-dev/c/0kUk5-6TAfM/m/7YVGLKzEBwAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5078177326170112`)*
  > Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/5078177326170112</strong>?gate=6328097936900096
- [37d35a3e8650ebac0ba12e5d5f6970fb40a90ace - chromium/src - Git at Google](https://chromium.googlesource.com/chromium/src/+/37d35a3e8650ebac0ba12e5d5f6970fb40a90ace) *(chromium.googlesource.com)* *(Cites: `https://chromestatus.com/feature/5078177326170112`)*
  > Explainer: https://drafts.csswg.org/css-image-animation-1/explainer Spec: https://drafts.csswg.org/css-image-animation-1/ Intent to prototype: https://groups.google.com/a/chromium.org/g/blink-dev/c/0kUk5-6TAfM/m/7YVGLKzEBwAJ Chromestatus En...
- [CSS Image Animation Module Level 1](https://www.w3.org/TR/css-image-animation-1) *(w3.org)* *(Cites: `https://drafts.csswg.org/css-image-animation-1/explainer`)*
  > Graphics Interchange Format. 31 July 1990. URL: https://www.w3.org/Graphics/GIF/spec-gif89a.txt · [IMAGE-ANIMATION-EXPLAINER] Florian Rivoal; Lea Verou. CSS Image Animation Explainer. URL: https://<strong>drafts.csswg.org/css-image-animatio...
- [CSS Image Animation · Issue #1421 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1421) *(github.com · 2026-06-10T01:12:37)* *(Cites: `https://drafts.csswg.org/css-image-animation-1/explainer`)*
  > Specification title CSS Image Animation Specification or proposal URL (if available) https://drafts.csswg.org/css-image-animation-1/ Explainer URL (if available) https://<strong>drafts.csswg.org/css-image-animation-1/explainer</strong> Prop...
- [project-image-animation/image-animation-property at main · webplatformco/project-image-animation](https://github.com/webplatformco/project-image-animation/tree/main/image-animation-property) *(github.com)* *(Cites: `https://drafts.csswg.org/css-image-animation-1/explainer`)*
  > Latest Version: https://<strong>drafts.csswg.org/css-image-animation-1/explainer</strong> · Contents · User Needs &amp; Use Cases · User Research · Developer &amp; User signals · Current Workarounds · Goals · Non-goals · Proposed Solution ·...
- [Re: \[blink-dev\] Re: Intent to Ship: CSS Image Animation](http://www.mail-archive.com/blink-dev@chromium.org/msg17483.html) *(mail-archive.com)* *(Cites: `https://drafts.csswg.org/css-image-animation-1/explainer`)*
  > &gt;&gt; &gt;&gt; On Tuesday, June 30, 2026 ... https://drafts.csswg.org/css-image-animation-1 &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; *Summary* &gt;&gt;&gt;&gt; <strong>Introduces a new CSS property and pseudo-class to control and detect &gt;&gt...
- [&lt;img controls&gt; for animated images · Issue #12318 · whatwg/html](https://github.com/whatwg/html/issues/12318) *(github.com · 2026-03-26T12:43:38)* *(Cites: `https://drafts.csswg.org/css-image-animation-1`)*
  > If any user agent were to do this we&#x27;d first want to figure out the interaction with <strong>https://drafts.csswg.org/css-image-animation-1/</strong> and also whether we should have a dedicated JavaScript API for control, similar ...

## 📚 Platform Documentation & Specifications

- [CSS Image Animation Module Level 1](https://www.w3.org/TR/css-image-animation-1) *(w3.org)*
- [CSS Image Animation · Issue #1421 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1421) *(github.com)*
- [project-image-animation/image-animation-property at main · webplatformco/project-image-animation](https://github.com/webplatformco/project-image-animation/tree/main/image-animation-property) *(github.com)*
- [&lt;img controls&gt; for animated images · Issue #12318 · whatwg/html](https://github.com/whatwg/html/issues/12318) *(github.com)*
- [CSS Image Animation Module Level 1](https://www.w3.org/TR/2026/WD-css-image-animation-1-20260409) *(w3.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 39 result(s) found across 8 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/5078177326170112" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"drafts.csswg.org/css-image-animation-1/explainer" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"drafts.csswg.org/css-image-animation-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"CSS Image Animation" API` — *Core feature API query* (5 returned)
  - `"CSS Image Animation" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"pseudo-class" OR "image-animation" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS Image Animation" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS Image Animation" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **0 verified relevant**
- **Standards Positions:** 4 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 10 result(s) found — **4 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 23 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 8 engineer comment(s) read
- **Web Page Excerpts Ingested:** 4 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5078177326170112)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5078177326170112)
- [Specification](https://drafts.csswg.org/css-image-animation-1)
- [Chromium Tracking Bug](https://issues.chromium.org/u/2/issues/429459566)
