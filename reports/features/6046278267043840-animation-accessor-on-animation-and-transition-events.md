# Animation accessor on animation and transition events

> **Report Week:** 2026-W39 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Adds a read-only animation attribute to the AnimationEvent and TransitionEvent interfaces. This attribute returns the associated Animation object that triggered the event.

### Motivation

When handling CSS animation or transition events (such as animationstart or transitionend), developers currently only receive metadata like the animation name or the CSS property name. If they want to programmatically interact with the triggering animation instance (e.g. to pause it, change its speed, or use its .finished promise), they must query the element or document using getAnimations() and filter the results.

Providing direct access to the Animation instance via the animation attribute on the event object simplifies developer code, avoids costly DOM queries, and aligns with recent updates to the CSS Animations Level 2 and CSS Transitions Level 2 specifications.

## Ecosystem Status

- **Momentum:** High (310 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Animation accessor on animation and transition events is currently Enabled by default in Chrome 151. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHbIceDQdbCw-kUsMFKwi6zBTNOiv2cbSvP9BEqI6UT-_wx2qrofUyhKTpFCF2u6wm12M-f9H2iHJJtLIlza4NGY2DOMemAJMGh_ITJajN01Y5mPHXv4LEa8aknfoC_7eq1o0RHRPfyhlKsJA8bpVvXQT6O1BzevctWVfSIXjFbmA==) *(vertexaisearch.cloud.google.com)*
  > TransitionEvent: animation property - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs TransitionEvent animation Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) TransitionEvent:...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGhs7d9e5RnElNiP2EpI7uL67KLCv8Ikw9s-lYdwDpoJMy4BZva5xX4Lyre-zG67AIfOklyf2wo-3UtgIVxX_z0LbNp_YLMM4DUTnQjP0UdpJIEQR5U-hEC5u5WzXonwliiFoPYd5ivdcLWih4BVzx_1x-7EklTaHCE1M67TLd5) *(vertexaisearch.cloud.google.com)*
  > AnimationEvent: animation property - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs AnimationEvent animation Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) 中文 (简体) AnimationE...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGS4bwlywINnTovyzGQg03MblUAv6_beKdaknZF23QzddOaM73337HWsk6lQZb1eh0QU--r2f1ID37qFLwPmkLk7heHBFd0arVV6XYgDyXAvfhCShrPvuWRyhtFts1MawAbpIEUvXLfplkOeUHuk_8rfOK7nnC4B9Jf5Gk8sYuX) *(vertexaisearch.cloud.google.com)*
  > AnimationEvent: animation property - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs AnimationEvent animation Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) 中文 (简体) AnimationE...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF67XU8BO52eaSuDwgJ_s4hIfiBE_hnEvF04oS06ACS-hinCqKYVd0il44Vn7fD82uCLLJaHwz3M4povvCzv-qUhZGIMvwhz8xxyVlrBCjvP1hkJ4VzjiO86q8MK9ylAcqfn3zPQNkhZb0vEJUwOj_mLB5PsYV3) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"Animation accessor on animation and transition events"** specification update adds a read-only `animation` attribute to both the `AnimationEvent` and `TransitionEvent` interfaces (`event.animation`).   * **The Problem:** P
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGji5QvyZn9iewHDxf3FwU_Y1HgCbHEoFbznH1bCsrx_r4tA4gaWw9zyFZr4ELrakNbEqRuNl1rFo6CEyI6-IdLKiiccYzATZP66Wx5-mkfdMgAORIEVx-ZJOlAY0tg6yWA) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"Animation accessor on animation and transition events"** specification update adds a read-only `animation` attribute to both the `AnimationEvent` and `TransitionEvent` interfaces (`event.animation`).   * **The Problem:** P
- [digitalapplied.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHgHq9hOQkTtXnOepbCslZRMUnu4D2cCZx4gV01NQ0Doc1djY6jCMBGL6bh9FIOH76CrIX73fcYC8-vU8g5dYAAFQO-7RseuhBStSCXahjt9fVT57vuVtk3Fd0PXtMEVWxUaClFLCT4wSMcdt7MyvPn0kAs89QYQLq-8I4fxmmRWC8=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"Animation accessor on animation and transition events"** specification update adds a read-only `animation` attribute to both the `AnimationEvent` and `TransitionEvent` interfaces (`event.animation`).   * **The Problem:** P
- [buttondown.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHPNs6c47GlxvpbBHH93ZW_K1MiaiBSmhB2fDqxOKHsapKNdye2w6Y2d3xN2pGf77VQZwKBp08wiiNhSksNK-_Y7KfaoTO-SYxxZaOegmvJP5fkr8JfOfkEUqP9ONDGhjZcw05tozzSs2GQBCNDuG9E3Nn_nA6nuegaW3YCW8c1yvQmjTZ-w4xUVWsIZ2XMh25WIQ==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary  The **"Animation accessor on animation and transition events"** specification update adds a read-only `animation` attribute to both the `AnimationEvent` and `TransitionEvent` interfaces (`event.animation`).   * **The Problem:** P
- [\[blink-dev\] Re: Intent to Ship: Animation accessor on animation and transition events](http://www.mail-archive.com/blink-dev@chromium.org/msg16740.html) *(mail-archive.com)*
  > &gt; *No information provided* &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://<strong>chromestatus.com/feature/6046278267043840</strong>?gate=5312243391660032 &gt; &gt; This intent message was generated by Chrome Platform Status...
- [Re: \[blink-dev\] Intent to Ship: Animation accessor on animation and transition events](http://www.mail-archive.com/blink-dev@chromium.org/msg16756.html) *(mail-archive.com)*
  > /No information provided/ *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/6046278267043840</strong>?gate=5312243391660032 This intent message was generated by Chrome Platform Status &lt;https://chromestatus.com&...
- [Animation accessor on animation and transition events - Chrome Platform Status](https://chromestatus.com/feature/6046278267043840) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [How to use Animation and Transition Effects in CSS ? - GeeksforGeeks](https://www.geeksforgeeks.org/css/how-to-use-animation-and-transition-effects-in-css) *(geeksforgeeks.org · 2025-08-05T10:26:54)*
  > <strong>You may specify how an element changes its style over a certain amount of time using transition, as well as how it will act before, during, and after the transition</strong>. ... Example 1: In this example, we have a container that is centere...
- [A Detailed Guide to CSS Animations and Transitions \| by Mayank Pratap \| EngineerBabu \| Medium](https://medium.com/engineerbabu/a-detailed-guide-to-css-animations-and-transitions-b544502c089c) *(medium.com · 2019-01-28T04:31:02)*
  > Read along as this is an extensive excerpt covering the basics of CSS animations and transitions that could immensely help you in achieving the same for your business website. If you have just ventured into the domain of front-end development, or are...
- [Intro to CSS Animation and Transition Effects \| by amandeep kumar \| Bootcamp \| Medium](https://medium.com/design-bootcamp/intro-to-css-animation-and-transition-effects-4beaa5927e40) *(medium.com · 2024-03-07T23:13:41)*
  > From skewing to scaling, our guide illuminates the nuances of transformations and transitions. With subtle tweaks, witness how your elements gracefully morph, elevating your design to new heights. .button-third { /* Styling for transformed button */ ...
- [Transition and Animation - Tutorial](https://www.vskills.in/certification/tutorial/transition-and-animation) *(vskills.in · 2024-04-12T08:53:26)*
  > Using animation events – <strong>You can get additional control over animations — as well as useful information about them — by making use of animation events</strong>. These events, represented by the AnimationEvent object, can be used to detect whe...
- [Transitions & Animations - Learn to Code Advanced HTML & CSS](https://learn.shayhowe.com/advanced-html-css/transitions-animations) *(learn.shayhowe.com)*
  > With CSS3 transitions you have the potential to alter the appearance and behavior of an element whenever a state change occurs, such as when it is hovered over, focused on, active, or targeted. Animations within CSS3 allow the appearance and behavior...
- [:read-only \| Codrops](https://tympanus.net/codrops/css_reference/read-only) *(tympanus.net · 2017-03-17T00:00:00)*
  > :read-only is <strong>a CSS pseudo-class selector that matches any element that does not match the :read-write selector</strong>. In othe
- [javascript - Is it possible to make input fields read-only through CSS? - Stack Overflow](https://stackoverflow.com/questions/16811045/is-it-possible-to-make-input-fields-read-only-through-css) *(stackoverflow.com)*
  > Though, as you have already mentioned, you can <strong>apply the attribute readonly=&#x27;readonly&#x27;</strong>. If your main criteria is to not alter the markup in the source, there are ways to get this in, unobtrusively, with javascript.
- [CSS :read-only Pseudo-class](https://www.w3schools.com/cssref/sel_read-only.php) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java and XML.
- [CSS :read-only](https://codescracker.com/css/css-read-only-class.htm) *(codescracker.com)*
  > <strong>Using &quot;:read-only&quot; ensures that all read-only elements on the website or application are styled consistently</strong>.
- [CSS :read-only pseudo-class](https://codepen.io/ricardozea/pen/Nxopbj) *(codepen.io)*
  > The :read-only pseudo-class <strong>targets an element that cannot be editable by the user</strong>. This pseudo-class is very similar to the :disabled pseudo-class, it...
- [CSS3 :read-only Selector](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/cssref/sel_read-only.asp.html) *(www-db.deis.unibo.it)*
  > Firefox supports an alternative, the :-moz-read-only selector. ... Color Converter Google Maps Animated Buttons Modal Boxes Modal Images Tooltips Loaders JS Animations Progress Bars Dropdowns Slideshow Side Navigation HTML Includes Color Palettes Cod...
- [r/PWA on Reddit: Customizing Turbo lifecycle events. PWA view transition example](https://www.reddit.com/r/PWA/comments/1ge5jyx/customizing_turbo_lifecycle_events_pwa_view) *(reddit.com · 2024-10-28T15:55:26)*
  > Progressive Web Apps bring speed and reliability to the web by supplying features that historically have only been available to native apps including offline access, responsiveness even when the network is unreliable, home screen icons, full screen e...
- [r/rails on Reddit: Customizing Turbo lifecycle events. PWA view transition example](https://www.reddit.com/r/rails/comments/1ge5jjs/customizing_turbo_lifecycle_events_pwa_view) *(reddit.com · 2024-10-28T15:54:58)*
  > View transitions became available in Safari 18. Turbo had support for this, and the default experience is great in other browsers. There&#x27;s a small hiccup that the default iOS and Safari browser back/forward swipe navigation animations cannot be ...
- [What PWA Can Do Today](https://whatpwacando.today/view-transitions) *(whatpwacando.today)*
  > // wrapping the function that updates the DOM in document.startViewTransition will animate the change document.startViewTransition(() =&gt; updateDOM()); /* here we customize the transition, these are the shared styles for the old and new view*/ ::vi...
- [The Role of Animation in Progressive Web Apps (PWAs)](https://blog.pixelfreestudio.com/the-role-of-animation-in-progressive-web-apps-pwas) *(blog.pixelfreestudio.com · 2024-07-31T11:59:14)*
  > Integrating Three.js animations can make your PWA more visually striking and engaging. Motion UI is a Sass library for creating CSS transitions and animations.
- [Progressive Web App (PWA) Development Ultimate Guide - Riseup Labs](https://riseuplabs.com/pwa-development-ultimate-guide) *(riseuplabs.com · 2025-12-10T05:24:22)*
  > <strong>PWAs offer an app-like interface that mimics the usability and feel of native mobile applications</strong>. This includes smooth transitions, animations, and intuitive navigation, creating a seamless experience that keeps users engaged.
- [Progressive Web App with animated launch screen - Stack Overflow](https://stackoverflow.com/questions/46106126/progressive-web-app-with-animated-launch-screen) *(stackoverflow.com)*
  > Here is a little sample code that creates an overlay matching your PWA&#x27;s background_color, and then animates the background up into the toolbar. Obviously you&#x27;ll want to tweak the coloring. You could even switch to a fade-in instead of a sl...
- [View Transition API](https://progressier.com/pwa-capabilities/view-transition-api) *(progressier.com · 2026-05-13T00:00:00)*
  > How it works: <strong>It snapshots the current state of the page, you make your updates, and it animates the transition to the new state</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: Animation accessor on animation and transition events](http://www.mail-archive.com/blink-dev@chromium.org/msg16740.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6046278267043840`)*
  > &gt; *No information provided* &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://<strong>chromestatus.com/feature/6046278267043840</strong>?gate=5312243391660032 &gt; &gt; This intent message was generated by Chrome Platf...
- [Re: \[blink-dev\] Intent to Ship: Animation accessor on animation and transition events](http://www.mail-archive.com/blink-dev@chromium.org/msg16756.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6046278267043840`)*
  > /No information provided/ *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/6046278267043840</strong>?gate=5312243391660032 This intent message was generated by Chrome Platform Status &lt;https://chromes...

## 📚 Platform Documentation & Specifications

- [read-only CSS pseudo-class - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:read-only) *(developer.mozilla.org)*
- [:read-only CSS pseudo-class - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only) *(developer.mozilla.org)*
- [TransitionEvent: animation property](https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/animation) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 37 result(s) found across 8 planned queries — **23 verified relevant**
  - `"chromestatus.com/feature/6046278267043840" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/w3c/csswg-drafts/issues/9010" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"drafts.csswg.org/css-animations-2" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Animation accessor on animation and transition events" API` — *Core feature API query* (1 returned)
  - `"Animation accessor on animation and transition events" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"read-only" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Animation accessor on animation and transition events" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Animation accessor on animation and transition events" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 207 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6046278267043840)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6046278267043840)
- [Specification](https://drafts.csswg.org/css-animations-2/#interface-animationevent)
- [Chromium Tracking Bug](https://issues.chromium.org/40929813)
