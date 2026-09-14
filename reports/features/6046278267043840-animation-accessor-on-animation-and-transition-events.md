# Animation accessor on animation and transition events

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Adds a read-only animation attribute to the AnimationEvent and TransitionEvent interfaces. This attribute returns the associated Animation object that triggered the event.

### Motivation

When handling CSS animation or transition events (such as animationstart or transitionend), developers currently only receive metadata like the animation name or the CSS property name. If they want to programmatically interact with the triggering animation instance (e.g. to pause it, change its speed, or use its .finished promise), they must query the element or document using getAnimations() and filter the results.

Providing direct access to the Animation instance via the animation attribute on the event object simplifies developer code, avoids costly DOM queries, and aligns with recent updates to the CSS Animations Level 2 and CSS Transitions Level 2 specifications.

## Ecosystem Status

- **Momentum:** High (350 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Animation accessor on animation and transition events is currently Enabled by default in Chrome 151. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Jeffrey Shaffer on X: "@Scribblr\_42 @TableauTim @lainecaruzca @ChrisLuv I've found the new terminology very confusing. I'd define animation as the visualization moving, changing frames, one frame at a time (ex. showing year by year or state by state). The mark movement between frames is a transition and not animation, or maybe "animated transitions"" / X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Jeffrey Shaffer on X: "@Scribblr\_42 @TableauTim @lainecaruzca @ChrisLuv I've found the new terminology very confusing. I'd define animation as the visualization moving, changing frames, one frame at a time (ex. showing year by year or state by state). The mark movement between frames is a transition and not animation, or maybe "animated transitions"" / X](https://twitter.com/DataPlusScience/status/1197263391942946816) — *by @DataPlusScience, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Dan Abramov on Twitter: "In case you missed it, TransitionGroup will no longer rely on animationend in @reactjs 0.14: https://t.co/9sksWxNRRt."](https://twitter.com/dan_abramov/status/636620381743382533) — *by @dan_abramov, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Sho Kuwamoto (@skuwamoto) on X](https://twitter.com/skuwamoto/status/1180197016674000896) — *by @skuwamoto, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Pratham on X: "A complete introduction to CSS animations 🚀 CSS animation is a module in CSS that lets you change the styling of elements and therefore creates an animate effect. It's little tricky but not much Let's learn about it 🧵👇🏻" / X](https://twitter.com/Prathkum/status/1397170589677281285) — *by @Prathkum, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Mark Masters (@markmasters92) on X](https://twitter.com/markmasters92/status/1761056180447678677) — *by @markmasters92, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [useAnimations](https://twitter.com/useAnimations) — *0 likes/RTs, 0 replies*

## Packages & Polyfills

- [react-transition-group](https://www.npmjs.com/package/react-transition-group) `v4.4.5` — A react component toolset for managing animations
- [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate) `v1.0.7` — A Tailwind CSS plugin for creating beautiful animations.
- [react-theme-switch-animation](https://www.npmjs.com/package/react-theme-switch-animation) `v1.3.0` — Beautiful, smooth animations for theme switching in React applications. Features Circle, Blur Circle, QR Scan, Polygon, Polygon Gradient, and Custom GIF animations with TypeScript support.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Re: Intent to Ship: Animation accessor on animation and transition events](http://www.mail-archive.com/blink-dev@chromium.org/msg16740.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Animation accessor on animation and transition events Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Animation accessor on animation and transition events 'Bramus Van Damme' via blink-dev Thu, 11...
- [Re: \[blink-dev\] Intent to Ship: Animation accessor on animation and transition events](http://www.mail-archive.com/blink-dev@chromium.org/msg16756.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Animation accessor on animation and transition events Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Animation accessor on animation and transition events Mike Taylor Fri, 12 Jun 2026 07:35:41 -0...
- [Animation accessor on animation and transition events - Chrome Platform Status](https://chromestatus.com/feature/6046278267043840) *(chromestatus.com)*
  > Chrome Platform Status
- [Understanding Animation and Transition Events in JavaScript \| by Sandeep Kumar Patel \| Tutorial Savvy \| Medium](https://medium.com/tutorial-savvy/understanding-animation-and-transition-events-in-javascript-10b8c27d4491) *(medium.com · 2026-03-10T04:57:47)*
  > Medium Understanding Animation and Transition Events in JavaScript | by Sandeep Kumar Patel | Tutorial Savvy | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in Tutorial Savvy · This blog is about web application develop...
- [An Interactive Guide to CSS Transitions • Josh W. Comeau](https://www.joshwcomeau.com/animation/css-transitions) *(joshwcomeau.com)*
  > An Interactive Guide to CSS Transitions • Josh W. Comeau Josh W Comeau An Interactive Guide to CSS Transitions Filed under Animation on in February 9th, 2021 . Feb 2021 . Last updated on in May 5th, 2026 . May 2026 . Introduction The world of web ani...
- [How to Listen for CSS Events in Javascript - Let's Build UI](https://www.letsbuildui.dev/articles/how-to-listen-for-css-events-in-javascript) *(letsbuildui.dev · 2023-09-01T19:09:50)*
  > How to Listen for CSS Events in Javascript Open Navigation Enjoying this article? Be the first to read new content, and more! Subscribe Thanks for subscribing! Please check your inbox to confirm your subscription. Occasional emails. No spam. Unsubscr...
- [How to use Animation and Transition Effects in CSS ? - GeeksforGeeks](https://www.geeksforgeeks.org/css/how-to-use-animation-and-transition-effects-in-css) *(geeksforgeeks.org · 2025-08-05T10:26:54)*
  > <strong>You may specify how an element changes its style over a certain amount of time using transition, as well as how it will act before, during, and after the transition</strong>. ... Example 1: In this example, we have a container that is centere...
- [Intro to CSS Animation and Transition Effects \| by amandeep kumar \| Bootcamp \| Medium](https://medium.com/design-bootcamp/intro-to-css-animation-and-transition-effects-4beaa5927e40) *(medium.com · 2024-03-07T23:13:41)*
  > From skewing to scaling, our guide illuminates the nuances of transformations and transitions. With subtle tweaks, witness how your elements gracefully morph, elevating your design to new heights. .button-third { /* Styling for transformed button */ ...
- [A Detailed Guide to CSS Animations and Transitions \| by Mayank Pratap \| EngineerBabu \| Medium](https://medium.com/engineerbabu/a-detailed-guide-to-css-animations-and-transitions-b544502c089c) *(medium.com · 2019-01-28T04:31:02)*
  > Read along as this is an extensive excerpt covering the basics of CSS animations and transitions that could immensely help you in achieving the same for your business website. If you have just ventured into the domain of front-end development, or are...
- [Transition and Animation - Tutorial](https://www.vskills.in/certification/tutorial/transition-and-animation) *(vskills.in · 2024-04-12T08:53:26)*
  > Using animation events – <strong>You can get additional control over animations — as well as useful information about them — by making use of animation events</strong>. These events, represented by the AnimationEvent object, can be used to detect whe...
- [Transitions \| web.dev](https://web.dev/learn/css/transitions) *(web.dev)*
  > In this module, <strong>learn how to define transitions between states of an element</strong>. Use transitions to improve user experience by providing visual feedback to user interaction.
- [CSS :read-only Pseudo-class](https://www.w3schools.com/cssref/sel_read-only.php) *(w3schools.com)*
  > <strong>The CSS :read-only pseudo-class selects elements which are &quot;readonly&quot;.</strong> Form elements with a &quot;readonly&quot; attribute are defined as &quot;readonly&quot;. The numbers in the table specify the first browser version that...
- [javascript - Is it possible to make input fields read-only through CSS? - Stack Overflow](https://stackoverflow.com/questions/16811045/is-it-possible-to-make-input-fields-read-only-through-css) *(stackoverflow.com)*
  > Though, as you have already mentioned, you can <strong>apply the attribute readonly=&#x27;readonly&#x27;</strong>. If your main criteria is to not alter the markup in the source, there are ways to get this in, unobtrusively, with javascript.
- [:read-only \| Codrops](https://tympanus.net/codrops/css_reference/read-only) *(tympanus.net · 2017-03-17T00:00:00)*
  > :read-only is <strong>a CSS pseudo-class selector that matches any element that does not match the :read-write selector</strong>. In othe
- [CSS :read-only](https://codescracker.com/css/css-read-only-class.htm) *(codescracker.com)*
  > <strong>Using &quot;:read-only&quot; ensures that all read-only elements on the website or application are styled consistently</strong>.
- [CSS :read-only pseudo-class](https://codepen.io/ricardozea/pen/Nxopbj) *(codepen.io)*
  > The :read-only pseudo-class <strong>targets an element that cannot be editable by the user</strong>. This pseudo-class is very similar to the :disabled pseudo-class, it...
- [CSS3 :read-only Selector](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/cssref/sel_read-only.asp.html) *(www-db.deis.unibo.it)*
  > Firefox supports an alternative, the :-moz-read-only selector. ... Color Converter Google Maps Animated Buttons Modal Boxes Modal Images Tooltips Loaders JS Animations Progress Bars Dropdowns Slideshow Side Navigation HTML Includes Color Palettes Cod...
- [r/PWA on Reddit: Customizing Turbo lifecycle events. PWA view transition example](https://www.reddit.com/r/PWA/comments/1ge5jyx/customizing_turbo_lifecycle_events_pwa_view) *(reddit.com · 2024-10-28T15:55:26)*
  > Progressive Web Apps bring speed and reliability to the web by supplying features that historically have only been available to native apps including offline access, responsiveness even when the network is unreliable, home screen icons, full screen e...
- [The Role of Animation in Progressive Web Apps (PWAs)](https://blog.pixelfreestudio.com/the-role-of-animation-in-progressive-web-apps-pwas) *(blog.pixelfreestudio.com · 2024-07-31T11:59:14)*
  > Integrating Three.js animations can make your PWA more visually striking and engaging. Motion UI is a Sass library for creating CSS transitions and animations.
- [What PWA Can Do Today](https://whatpwacando.today/view-transitions) *(whatpwacando.today)*
  > // wrapping the function that updates the DOM in document.startViewTransition will animate the change document.startViewTransition(() =&gt; updateDOM()); /* here we customize the transition, these are the shared styles for the old and new view*/ ::vi...
- [r/rails on Reddit: Customizing Turbo lifecycle events. PWA view transition example](https://www.reddit.com/r/rails/comments/1ge5jjs/customizing_turbo_lifecycle_events_pwa_view) *(reddit.com · 2024-10-28T15:54:58)*
  > View transitions became available in Safari 18. Turbo had support for this, and the default experience is great in other browsers. There&#x27;s a small hiccup that the default iOS and Safari browser back/forward swipe navigation animations cannot be ...
- [Progressive Web App (PWA) Development Ultimate Guide - Riseup Labs](https://riseuplabs.com/pwa-development-ultimate-guide) *(riseuplabs.com · 2025-12-10T05:24:22)*
  > <strong>PWAs offer an app-like interface that mimics the usability and feel of native mobile applications</strong>. This includes smooth transitions, animations, and intuitive navigation, creating a seamless experience that keeps users engaged.
- [Progressive Web App with animated launch screen - Stack Overflow](https://stackoverflow.com/questions/46106126/progressive-web-app-with-animated-launch-screen) *(stackoverflow.com)*
  > Here is a little sample code that creates an overlay matching your PWA&#x27;s background_color, and then animates the background up into the toolbar. Obviously you&#x27;ll want to tweak the coloring. You could even switch to a fade-in instead of a sl...
- [View Transition API](https://progressier.com/pwa-capabilities/view-transition-api) *(progressier.com · 2026-05-13T00:00:00)*
  > How it works: <strong>It snapshots the current state of the page, you make your updates, and it animates the transition to the new state</strong>.
- [Adding Animations - Progressive Web Apps (PWA) - The Complete Guide \[Video\]](https://www.oreilly.com/videos/progressive-web-apps/9781789135770/9781789135770-video8_6) *(oreilly.com)*
  > <strong>In this 13-hour course, you will learn the skills to build and optimize Progressive Web Apps (PWAs) that deliver native app-like experiences in the browser</strong>. From offline... - Selection from Progressive Web Apps (PWA) - The Complete G...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: Animation accessor on animation and transition events](http://www.mail-archive.com/blink-dev@chromium.org/msg16740.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6046278267043840`)*
  > [blink-dev] Re: Intent to Ship: Animation accessor on animation and transition events Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Animation accessor on animation and transition events 'Bramus Van Damme' via blink-d...
- [Re: \[blink-dev\] Intent to Ship: Animation accessor on animation and transition events](http://www.mail-archive.com/blink-dev@chromium.org/msg16756.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6046278267043840`)*
  > Re: [blink-dev] Intent to Ship: Animation accessor on animation and transition events Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Animation accessor on animation and transition events Mike Taylor Fri, 12 Jun 2026 0...
- [csswg-drafts/css-animations-2/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-animations-2/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-animations-2/#interface-animationevent`)*
  > csswg-drafts/css-animations-2/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...
- [CSS Animations Level 2](https://www.w3.org/TR/css-animations-2) *(w3.org · 2023-06-02T00:00:00)* *(Cites: `https://drafts.csswg.org/css-animations-2/#interface-animationevent`)*
  > https://www.w3.org/TR/css-animations-2/ Editor&#x27;s Draft: https://<strong>drafts.csswg.org/css-animations-2</strong>/ History: https://www.w3.org/standards/history/css-animations-2 · Feedback: CSSWG Issues Repository · Inline In Spec · E...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-animations-2/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-animations-2/Overview.bs) *(github.com)*
- [CSS Animations Level 2](https://www.w3.org/TR/css-animations-2) *(w3.org)*
- [read-only CSS pseudo-class - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:read-only) *(developer.mozilla.org)*
- [:read-only CSS pseudo-class - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only) *(developer.mozilla.org)*
- [TransitionEvent: animation property](https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/animation) *(developer.mozilla.org)*
- [Animation: Animation() constructor](https://developer.mozilla.org/en-US/docs/Web/API/Animation/Animation) *(developer.mozilla.org)*
- [Animation](https://developer.mozilla.org/en-US/docs/Web/API/Animation) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 37 result(s) found across 8 planned queries — **29 verified relevant**
  - `"chromestatus.com/feature/6046278267043840" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/w3c/csswg-drafts/issues/9010" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"drafts.csswg.org/css-animations-2" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Animation accessor on animation and transition events" API` — *Core feature API query* (1 returned)
  - `"Animation accessor on animation and transition events" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"read-only" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Animation accessor on animation and transition events" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Animation accessor on animation and transition events" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **3 verified relevant**
- **Web Platform Tests (wpt.fyi):** 206 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6046278267043840)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6046278267043840)
- [Specification](https://drafts.csswg.org/css-animations-2/#interface-animationevent)
- [Chromium Tracking Bug](https://issues.chromium.org/40929813)
