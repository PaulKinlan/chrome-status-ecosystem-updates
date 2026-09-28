# CSS corner shorthand properties 

> **Report Week:** 2026-W40 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Implements the CSS corner shorthand and per-corner sub-shorthands (corner-top-left, corner-top-right, corner-bottom-left, corner-bottom-right) as well as physical (corner-top, corner-bottom) and logical (corner-block-start, corner-block-end, etc.) edge  shorthands. These allow setting both border-radius and corner-shape for individual corners in a single declaration. Additionally, corners is retained as a compat alias for the corner shorthand.   sampler: https://static.januschka.com/i-425897047/  CL: https://chromium-review.googlesource.com/c/chromium/src/+/7747994

### Motivation

Currently, setting both the radius and shape of a corner requires two separate declarations (border-radius and corner-shape). The CSSWG resolved ( https://github.com/w3c/csswg-drafts/issues/11623#issuecomment-2982179370  ) to add a corner shorthand that combines both properties, making it more ergonomic for authors to  
style individual corners. For example:                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                
```css                                                                                                                                                                                                                                                         
  /* Before: two declarations needed */                                                                                                                                                                                                                        
  border-top-left-radius: 20px;                                                                                                                                                                                                                                
  corner-shape-top-left: squircle;                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                
  /* After: single corner shorthand */                                                                                                                                                                                                                         
  corner-top-left: 20px squircle;                                                                                                                                                                                                                              
```

## Ecosystem Status

- **Momentum:** High (200 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The CSS corner shorthand properties represent an ergonomic evolution within CSS Borders and Box Decorations Level 4, unifying border-radius and corner-shape (such as squircle, scoop, or superellipse) into concise per-corner and quad declarations. Chromium is shipping the feature enabled by default (Chrome 156), closely aligned with recent patches landed in WebKit. The API significantly streamlines styling advanced geometric corners, resolving long-standing CSSWG pain points around verbose declarations.

### Recommendations
- Actionable Advice: Treat CSS corner shorthands as an enhancement layer: author standard border-radius fallbacks first, and wrap shorthand usage in @supports (corner: 10px squircle) to ensure backward compatibility until cross-engine Baseline status is reached. Avoid relying on the shorthand alone in production UI without testing that unsupported browsers gracefully degrade to standard rounded rectangles.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17531.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: CSS corner shorthand properties Rick Byers Wed, 23 Sep 2026 08:12:55 -0700 Looks, like it is implemented on ...
- [\[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17509.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 21 Sep 2026 11:46:37 -0700 This looks like a good feature; can you...
- [\[blink-dev\] Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17493.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS corner shorthand properties Helmut Januschka Fri, 18 Sep 2026 06:34:29 -0700 *Contact emails* [email&#160;protected] *Ex...
- [CSS by T. Afif: "It's there: drafts.csswg.org/css-borders-... ...](https://bsky.app/profile/css-only.dev/post/3liahxwn2ac2l) *(bsky.app · 2025-02-15T19:41:56)*
  > @css-only.dev on Bluesky Post CSS by T. Afif css-only.dev did:plc:kzbz4qsltwkq3baxgue7ju4k It&#39;s there: https://drafts.csswg.org/css-borders-4/#border-clip 😃 But I have no idea if there is any progress in the implementation. 2025-02-15T19:41:56.0...
- [How to create fancy corners using CSS corner-shape - LogRocket Blog](https://blog.logrocket.com/create-fancy-corners-css) *(blog.logrocket.com · 2026-03-27T14:49:42)*
  > How to create fancy corners using CSS corner-shape - LogRocket Blog Advisory boards aren’t only for executives. Join the LogRocket Content Advisory Board today &#8594; Blog Dev Product Management UX Design Podcast Product Leadership Features Solution...
- [CSS shorthand properties](https://reintech.io/blog/mastering-css-shorthand-properties) *(reintech.io)*
  > Then explore the CSS specifications for properties you use frequently. Many properties have shorthand versions you might not know about, like border-radius (which can set different values for each corner) or text-decoration (which combines line, colo...
- [The Beginner’s Guide to CSS Shorthand](https://blog.hubspot.com/website/css-shorthand) *(blog.hubspot.com · 2025-07-07T19:28:06)*
  > CSS shorthand is a group of CSS properties that <strong>allow values of multiple properties to be set simultaneously</strong>. These values are separated by spaces. For example, the border property is shorthand for the border-width, border-style, and...
- [CSS Rounded Corners](https://www.w3schools.com/css/css3_borders.asp) *(w3schools.com)*
  > Tip: The border-radius property is actually a shorthand property for the border-top-left-radius, border-top-right-radius, border-bottom-right-radius and border-bottom-left-radius properties. The border-radius property can have from one to four values...
- [Shaping Excellence: Border Corner Styles with CSS \| by CSS Monster \| Medium](https://medium.com/@cssmonster007/shaping-excellence-border-corner-styles-with-css-3b6ca0cb31b8) *(medium.com · 2023-11-22T15:00:08)*
  > To streamline your CSS code, you can <strong>use the shorthand border property</strong>. This allows you to set border width, style, and color in a single declaration. For example: ... As we dive into the world of CSS border corner styles, the border...
- [CSS Borders - Shorthand Property](https://www.w3schools.com/css/css_border_shorthand.asp) *(w3schools.com)*
  > CSS Reference CSS Selectors CSS Combinators CSS Pseudo-classes CSS Pseudo-elements CSS At-rules CSS Functions CSS Reference Aural CSS Web Safe Fonts CSS Animatable CSS Units CSS PX-EM Converter CSS Colors CSS Color Values CSS Default Values CSS Brows...
- [How to make rounded corner using CSS ? - GeeksforGeeks](https://www.geeksforgeeks.org/css/how-to-make-rounded-corner-using-css) *(geeksforgeeks.org · 2024-06-21T15:24:07)*
  > <strong>The CSS border-radius property allows you to easily set the radius of an element&#x27;s corners, making them rounded</strong>. In this article, we will explore how to use the border-radius property with various examples to achieve different r...
- [CSS Rounded Corners: A Step By Step Guide \| Career Karma](https://careerkarma.com/blog/css-rounded-corners) *(careerkarma.com · 2023-12-01T10:37:18)*
  > The <strong>border-radius property is shorthand for four subproperties used to set the border radius of each corner</strong>. These subproperties are: ... These properties are used to set the border around a particular corner of a web element.
- [Build A Simple PWA From Scratch With HTML, CSS, and JavaScript](https://www.linkedin.com/pulse/build-simple-pwa-from-scratch-html-css-javascript-ishaan-verma) *(linkedin.com · 2022-01-10T02:43:00)*
  > One important thing to note is that the browser will only allow the user to install the PWA if the website is either using the HTTPS protocol, or running on localhost. To get the most out of this tutorial you should be familiar with HTML, CSS and Jav...
- [A two-column desktop layout that has to be byte-identical on mobile](https://dev.to/daniel_pertu/a-two-column-desktop-layout-that-has-to-be-byte-identical-on-mobile-42cl) *(dev.to · Daniel Pertu · Sep 26)*
  > Adding a side-by-side desktop layout to 44 screens without touching their mobile rendering, inside a shell where scrollbars are hidden, main has CSS containment, and a global rule forbids borders on cards.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17531.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > Re: [blink-dev] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: CSS corner shorthand properties Rick Byers Wed, 23 Sep 2026 08:12:55 -0700 Looks, like it is imple...
- [\[blink-dev\] Re: Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17509.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > [blink-dev] Re: Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: CSS corner shorthand properties Alex Russell Mon, 21 Sep 2026 11:46:37 -0700 This looks like a good featur...
- [\[blink-dev\] Intent to Ship: CSS corner shorthand properties](http://www.mail-archive.com/blink-dev@chromium.org/msg17493.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5152215540039680`)*
  > [blink-dev] Intent to Ship: CSS corner shorthand properties Skip to site navigation (Press enter) [blink-dev] Intent to Ship: CSS corner shorthand properties Helmut Januschka Fri, 18 Sep 2026 06:34:29 -0700 *Contact emails* [email&#160;prot...
- [csswg-drafts/css-borders-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-borders-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-borders-4/#corner-shaping`)*
  > csswg-drafts/css-borders-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh ...
- [\[css-borders-4\] border-shape property · Issue #1365 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1365) *(github.com · 2026-03-02T12:25:22)* *(Cites: `https://drafts.csswg.org/css-borders-4/#corner-shaping`)*
  > [css-borders-4] border-shape property · Issue #1365 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Re...
- [\[css-borders-4\] border-shape property · Issue #625 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/625) *(github.com · 2026-03-02T12:27:04)* *(Cites: `https://drafts.csswg.org/css-borders-4/#corner-shaping`)*
  > [css-borders-4] border-shape property · Issue #625 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [CSS by T. Afif: "It's there: drafts.csswg.org/css-borders-... ...](https://bsky.app/profile/css-only.dev/post/3liahxwn2ac2l) *(bsky.app · 2025-02-15T19:41:56)* *(Cites: `https://drafts.csswg.org/css-borders-4/#corner-shaping`)*
  > @css-only.dev on Bluesky Post CSS by T. Afif css-only.dev did:plc:kzbz4qsltwkq3baxgue7ju4k It&#39;s there: https://drafts.csswg.org/css-borders-4/#border-clip 😃 But I have no idea if there is any progress in the implementation. 2025-02-15T...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-borders-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-borders-4/Overview.bs) *(github.com)*
- [\[css-borders-4\] border-shape property · Issue #1365 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1365) *(github.com)*
- [\[css-borders-4\] border-shape property · Issue #625 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/625) *(github.com)*
- [Shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) *(developer.mozilla.org)*
- [CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties) *(developer.mozilla.org)*
- [CSS mask properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Masking/Mask_properties) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 30 result(s) found across 8 planned queries — **16 verified relevant**
  - `"chromestatus.com/feature/5152215540039680" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"static.januschka.com/i-425897047" -site:static.januschka.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"drafts.csswg.org/css-borders-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"CSS corner shorthand properties " API` — *Core feature API query* (0 returned)
  - `"CSS corner shorthand properties " (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"css                                                                                                                                                                                                                                                         
  /* before: two declarations needed */                                                                                                                                                                                                                        
  border-top-left-radius: 20px;                                                                                                                                                                                                                                
  corner-shape-top-left: squircle;                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                
  /* after: single corner shorthand */                                                                                                                                                                                                                         
  corner-top-left: 20px squircle;" OR "static.januschka" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (0 returned)
  - `"CSS corner shorthand properties " (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS corner shorthand properties " (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 270 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5152215540039680)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5152215540039680)
- [Specification](https://drafts.csswg.org/css-borders-4/#corner-shaping)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/425897047)
