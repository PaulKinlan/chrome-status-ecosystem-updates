# CSS image(&lt;color&gt;) function

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

The image() function allows an author to easily generate a solid-color image from any color. Its syntax is:
   image() = image( <color> )

### Motivation

CSS has long needed a primitive way to express a transparent image: an <image> value with no intrinsic dimensions that paints nothing. Authors today reach for awkward workarounds like linear-gradient(transparent) to fabricate one, because the none keyword cannot be used as a generic image. Many properties that accept <image> also accept none with property-specific meaning (for example, in list-style-image, none suppresses the marker rather than drawing a transparent image), and none is not a valid <image> for registered custom properties using syntax: "<image>". The CSS Working Group has confirmed that promoting none to a general image type is unworkable.

This gap became concrete in the design of light-dark() from CSS Color 5. The specification allowed light-dark(none, none) and described it as equivalent to linear-gradient(transparent), but that definition does not round-trip: when the chosen value is none, the result needs a real <image> representation that is valid everywhere <image> is accepted, including inside registered custom properties and in contexts like list-style-image where the bare keyword none carries a different meaning. Without a dedicated image primitive, implementations were forced either to refuse none inside light-dark() (as Firefox originally did) or to special-case it in ways that leak through computed values.

The CSS image() function, already specified in CSS Images Level 4, provides exactly the needed primitive. In particular, image(<color>) produces an image with no natural dimensions filled with a solid color, and image(transparent) is a fully transparent image that is unambiguously an <image> value in every context. The CSS WG resolved that light-dark(..., none) computes to image(transparent) when none is the chosen branch, which both fixes the round-trip problem and gives authors a clear, intuitive way to spell "a transparent image" without abusing gradient syntax.

Shipping image() (initially scoped to its <color> form, since the broader features of image() can be deferred) therefore unblocks light-dark(), supports registered <image> custom properties that need a transparent initial value, replaces the common linear-gradient(transparent) idiom with a direct and self-documenting expression, and lays the groundwork for the remaining capabilities of image() in CSS Images 4.

## Ecosystem Status

- **Momentum:** High (110 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** CSS image(<color>) function is currently Enabled by default in Chrome 150. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @nt1m: "Will mark this as positive a week from now pending objections...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSS light-dark() with image values](https://github.com/WebKit/standards-positions/issues/658) [open]

## Packages & Polyfills

- [@csstools/postcss-image-function](https://www.npmjs.com/package/@csstools/postcss-image-function) `v1.0.3` — Generate a solid-color image from any color

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGJ1dzGsJzA6cZTbGC2s9WSh5uka7tuhHCHUl-cCIp0E-GySKYM-zy-4OTUzNs1H-sN1dsrW68nC5EgSsc9R6fUlTffJ61FVwMuNWIkRJFRUg6f1F3sPRQw83KT0VJwe5dH3XqY0wU=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHhfMNkTt-CDhB3IK6IDsVmMB6ALJDluTJwXspgRr1RWGdV5amVshm1zaEHPn4OFjEMMByQ1yMWvitCz9a44pac8WLLaBCGCdimFYerd_C0ZTci6OaCf2Rf) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the CSS `image(<color>)` Function  The **`image(<color>)`** function (defined in the [CSS Images Module Level 4](https://drafts.csswg.org/css-images-4/#image-notation)) allows authors to generate a solid-color image with no natural/int
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEo2rYJnVCH9mPAftZTU_5vaGgquVis5vA4av22Yi9zBz0F_8BwdQd14j7fiOCYUHw_HpWP-IK35B4aWtm02A3dkIZkwmNpfaKDhiC0Blklm9M0vN_zIhqxdQiG6Lhy0BONTOEohgcfTc1pQ45N) *(vertexaisearch.cloud.google.com)*
  > CSS images 4: image() · Issue #402 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your session...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFv5NG7B5Y9rQJXKE7jjB-JXwbo69ZVQUVZm2_LUUHnMPqVMtluwS1xh6rv8OlN17RGGuR7yUgkdaCwBxukpw3j1uSWK1utKtph5VdD5rAbGB5qVK1SdCNhxFYFlGBWCk4hczq-axoy8H07KNZKd5BdLfvYcwJmBVdhnzzdkMcE6sJu) *(vertexaisearch.cloud.google.com)*
  > image() CSS function - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Values <image> image() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 image() CSS function ...
- [12daysofweb.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH6YbYHvYZKyHHjO_VhOYTQxzwtfckuXkOyMwyiHMNEXQxaSGKPm64j9Ek26dTZaEXBajUfPSmW_RP-_Uzut0YcJCqknaBVRjnjPep4lQ26Gi2qpwsMJ2lgupkX9w==) *(vertexaisearch.cloud.google.com)*
  > CSS image() | 12 Days of Web 12 Days of Web Theme Adaptive Light Dark Let it snow Dec 15 CSS image() The working draft for image() proposes new features to enhance the capabilities of background-image declarations. By Kevin Powell What is the image()...
- [Re: [blink-dev] Re: Intent to Ship: CSS image(<color>) function](http://www.mail-archive.com/blink-dev@chromium.org/msg16603.html) *(mail-archive.com)*
  > After the discussion in the CSSWG I promptly implemented image(&lt;color&gt;) and the relevant behavior (compute `none` to color(transparent)), see the relevant intent &lt;https://groups.google.com/a/mozilla.org/g/dev-platform/c/MsmsVPkVbKQ&gt; threa...
- [[blink-dev] Re: Intent to Ship: CSS image(<color>) function](http://www.mail-archive.com/blink-dev@chromium.org/msg16592.html) *(mail-archive.com)*
  > The WPTs for image() and light-dark(none,...) still fail on Firefox Stable 151, while the WPTs for light-dark() that don&#x27;t depend on image() or &#x27;none&#x27; pass in Firefox Stable 151. So it seems they didn&#x27;t consider image() to be a bl...
- [[blink-dev] Intent to Ship: CSS image(<color>) function](http://www.mail-archive.com/blink-dev@chromium.org/msg16583.html) *(mail-archive.com)*
  > Skip to site navigation (Press enter) · [blink-dev] Intent to Ship: CSS image( · ) function · Chromestatus Mon, 25 May 2026 23:25:04 -0700 · Contact emails [email protected] · Specification https://drafts.csswg.org/css-images-4/#image-notation Summar...
- [Chrome Platform Status](https://chromestatus.com/feature/5172548013916160?gate=5152221057777664) *(chromestatus.com)*
  > We cannot provide a description for this page right now

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [CSS images 4: image() · Issue #402 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/402) *(github.com · 2024-09-23T16:05:36)* *(Cites: `https://drafts.csswg.org/css-images-4/#image-notation`)*
  > WebKittens No response Title of the proposal CSS Images Module Level 4: iamge() URL to the spec https://<strong>drafts.csswg.org/css-images-4</strong>/#image-notation URL to the spec&#x27;s repository No response Issue Tracker URL No respon...

## 📚 Platform Documentation & Specifications

- [CSS images 4: image() · Issue #402 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/402) *(github.com)*
- [image() CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/image/image) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 23 result(s) found across 6 planned queries — **5 verified relevant**
  - `"chromestatus.com/feature/5121011285622784" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"drafts.csswg.org/css-images-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"css" "image(transparent)" OR "image(<color>)" ("linear-gradient(transparent)" OR "solid-color")` — *Finds technical blog posts, guides, and explainers detailing how the image() color function replaces legacy linear-gradient hacks for transparent images.* (0 returned)
  - `"image(transparent)" ("@property" OR "syntax: \"<image>\"" OR "list-style-image") css` — *Surfaces real-world CSS code examples showing image(transparent) used inside registered custom properties and image-accepting properties.* (8 returned)
  - `("Intent to Ship" OR "Intent to Prototype" OR "Chrome Platform Status" OR "WebKit") "image(transparent)" OR "image(<color>)"` — *Tracks browser engine implementation milestones, intent to ship threads, and compatibility statuses across Chromium, WebKit, and Gecko.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "image(transparent)" "light-dark"` — *Locates CSS Working Group issues and specifications discussing the resolution of light-dark() fallback behavior using image(transparent).* (0 returned)
- **Google Search Grounding (gemini-3.7-flash):** 6 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 2 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5121011285622784)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5121011285622784)
- [Specification](https://drafts.csswg.org/css-images-4/#image-notation)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/510426954)
