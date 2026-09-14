# CSS corner shorthand properties 

> **Report Week:** 2026-W38 | **Milestone:** Chrome 155 | **Category:** Enabled by default

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

- **Momentum:** High (210 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** CSS corner shorthand properties  is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Packages & Polyfills

- [@babel/plugin-transform-shorthand-properties](https://www.npmjs.com/package/@babel/plugin-transform-shorthand-properties) `v8.0.1` — Compile ES2015 shorthand properties to ES5
- [css-shorthand-properties](https://www.npmjs.com/package/css-shorthand-properties) `v1.1.2` — A simple list of CSS shorthand properties and which longhand properties they expand to
- [postcss-merge-longhand](https://www.npmjs.com/package/postcss-merge-longhand) `v9.0.3` — Merge longhand properties into shorthand with PostCSS.

## 📰 Ecosystem Blogs & Articles

- [CSS by T. Afif: "It's there: drafts.csswg.org/css-borders-... ...](https://bsky.app/profile/css-only.dev/post/3liahxwn2ac2l) *(bsky.app · 2025-02-15T19:41:56)*
  > @css-only.dev on Bluesky JavaScript Required This is a heavily interactive web application, and JavaScript is required. Simple HTML interfaces are possible, but that is not what this is. Learn more about Bluesky at bsky.social and atproto.com . Post ...
- [How to create fancy corners using CSS corner-shape - LogRocket Blog](https://blog.logrocket.com/create-fancy-corners-css) *(blog.logrocket.com · 2026-03-27T14:49:42)*
  > How to create fancy corners using CSS corner-shape - LogRocket Blog Advisory boards aren’t only for executives. Join the LogRocket Content Advisory Board today &#8594; Blog Dev Product Management UX Design Podcast Product Leadership Features Solution...
- [The Beginner’s Guide to CSS Shorthand](https://blog.hubspot.com/website/css-shorthand) *(blog.hubspot.com · 2025-07-07T19:28:06)*
  > The Beginner’s Guide to CSS Shorthand Home Website The Beginner’s Guide to CSS Shorthand The Beginner’s Guide to CSS Shorthand Written by: Anna Fitzgerald INTRO TO HTML & CSS FOR MARKETERS Learn more about HTML and CSS and how to use them to improve ...
- [CSS shorthand properties](https://reintech.io/blog/mastering-css-shorthand-properties) *(reintech.io)*
  > CSS shorthand properties The book for engineers Requisite Variety The Systems Method for Working with AI — Beyond Prompts and Tools → The book for engineers Requisite Variety The Systems Method for Working with AI × ← All posts Engineering CSS shorth...
- [CSS Rounded Corners](https://www.w3schools.com/css/css3_borders.asp) *(w3schools.com)*
  > CSS Rounded Corners Menu Search field &times; See More NEW W3Schools app iOS & Android Start the adventure Sign In Sign Up --> user-anonymous --> --> &#x2605; +1 --> My W3Schools --> user-authenticated --> Get Certified Upgrade Academy Spaces Practic...
- [Shaping Excellence: Border Corner Styles with CSS \| by CSS Monster \| Medium](https://medium.com/@cssmonster007/shaping-excellence-border-corner-styles-with-css-3b6ca0cb31b8) *(medium.com · 2023-11-22T15:00:08)*
  > To streamline your CSS code, you can <strong>use the shorthand border property</strong>. This allows you to set border width, style, and color in a single declaration. For example: ... As we dive into the world of CSS border corner styles, the border...
- [CSS Borders - Shorthand Property](https://www.w3schools.com/css/css_border_shorthand.asp) *(w3schools.com)*
  > CSS Reference CSS Selectors CSS Combinators CSS Pseudo-classes CSS Pseudo-elements CSS At-rules CSS Functions CSS Reference Aural CSS Web Safe Fonts CSS Animatable CSS Units CSS PX-EM Converter CSS Colors CSS Color Values CSS Default Values CSS Brows...
- [How to make rounded corner using CSS ? - GeeksforGeeks](https://www.geeksforgeeks.org/css/how-to-make-rounded-corner-using-css) *(geeksforgeeks.org · 2024-06-21T15:24:07)*
  > The border-radius property in CSS is a versatile tool for creating visually appealing rounded corners on web elements. This article covered various methods to apply rounded corners, including individual corner properties and shorthand techniques. By ...
- [CSS Border Radius \| EASEOUT](https://www.easeout.co/blog/2022-12-26-css-border-radius) *(easeout.co · 2022-12-25T00:00:00)*
  > You can also specify the radius for each corner individually, using the following properties: ... .my-element { border-top-left-radius: 15px; border-top-right-radius: 50px; border-bottom-right-radius: 30px; border-bottom-left-radius: 5px; } This woul...
- [Build A Simple PWA From Scratch With HTML, CSS, and JavaScript](https://www.linkedin.com/pulse/build-simple-pwa-from-scratch-html-css-javascript-ishaan-verma) *(linkedin.com · 2022-01-10T02:43:00)*
  > One important thing to note is that the browser will only allow the user to install the PWA if the website is either using the HTTPS protocol, or running on localhost. To get the most out of this tutorial you should be familiar with HTML, CSS and Jav...
- [Drawing CSS Shapes using corner-shape – Master.dev Blog](https://frontendmasters.com/blog/drawing-css-shapes-using-corner-shape) *(frontendmasters.com · 2025-06-18T00:00:00)*
  > No need for the shorthand property in this case since only the top-right corner matters. As for the value, I think it’s self-explanatory. Simply notice that there is no / to separate the horizontal and vertical radius when using the longhand properti...
- [Safari Technology Preview 252 adds @supports named-feature(), unprefixed user-select and two accessible-name fixes](https://dev.to/leobaniak/safari-technology-preview-252-adds-supports-named-feature-unprefixed-user-select-and-two-50d5) *(dev.to · Leo · Sep 12)*
  > WebKit's 11 September preview adds a named-feature() function to @supports, exposes CSSConditionRule.supports and CSSMediaRule.matches on the CSSOM, ships the unprefixed user-select property, allows percentage values in text-decoration-inset, and cle...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [csswg-drafts/css-borders-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-borders-4/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-borders-4/#corner-shaping`)*
  > csswg-drafts/css-borders-4/Overview.bs at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh ...
- [\[css-borders-4\] border-shape property · Issue #1365 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1365) *(github.com · 2026-03-02T12:25:22)* *(Cites: `https://drafts.csswg.org/css-borders-4/#corner-shaping`)*
  > [css-borders-4] border-shape property · Issue #1365 · mozilla/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Re...
- [\[css-borders-4\] border-shape property · Issue #625 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/625) *(github.com · 2026-03-02T12:27:04)* *(Cites: `https://drafts.csswg.org/css-borders-4/#corner-shaping`)*
  > [css-borders-4] border-shape property · Issue #625 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Relo...
- [CSS by T. Afif: "It's there: drafts.csswg.org/css-borders-... ...](https://bsky.app/profile/css-only.dev/post/3liahxwn2ac2l) *(bsky.app · 2025-02-15T19:41:56)* *(Cites: `https://drafts.csswg.org/css-borders-4/#corner-shaping`)*
  > @css-only.dev on Bluesky JavaScript Required This is a heavily interactive web application, and JavaScript is required. Simple HTML interfaces are possible, but that is not what this is. Learn more about Bluesky at bsky.social and atproto.c...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-borders-4/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-borders-4/Overview.bs) *(github.com)*
- [\[css-borders-4\] border-shape property · Issue #1365 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1365) *(github.com)*
- [\[css-borders-4\] border-shape property · Issue #625 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/625) *(github.com)*
- [Shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) *(developer.mozilla.org)*
- [CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties) *(developer.mozilla.org)*
- [CSS mask properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Masking/Mask_properties) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 28 result(s) found across 8 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5152215540039680" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"static.januschka.com/i-425897047" -site:static.januschka.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
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
- **NPM Registry:** 6 result(s) found — **3 verified relevant**
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
